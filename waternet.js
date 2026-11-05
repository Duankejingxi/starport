/* ================================================================================
* 星港 — waternet.js：供水管网系统（WaterNetManager）
* ================================================================================
* 版本：v1.0（waternet）
* 定位：城市级供水压力模拟 —— 管道铺设 → 压力传播 → 用水校验 → 漏水/灾害维护。
*
* （game.js 负责接线）
* 1. 构造：this.waternet = (typeof WaterNetManager!== 'undefined')
*? new WaterNetManager(): null;
* 2. 主循环：this.waternet && this.waternet.update(now, dt, this);
* 3. 存档：save() 里写 data.waternet = this.waternet? this.waternet.save(): null;
* load() 里写 if (data.waternet && this.waternet) this.waternet.load(data.waternet);
* 4. 生产校验（build.js BuildManager.update 内，produce 分支前）：
* const wn = gameRef.waternet;
* if (wn &&!wn.waterOkFor(b).ok) continue; // 水压不足 → 停产
* 5. 渲染：render 循环内 if (this.waternet) this.waternet.renderOverlay(this.ctx, this.map, this.tile);
* 6. UI 按钮：铺管模式调用 waternet.placePipe(x, y, this)；
* 拆管调用 waternet.removePipe(x, y)；
* 修漏调用 waternet.repairLeak(x, y, this)。
*
* （详见下面的 WATERGUIDE 12 条机制说明）
* - 水源建筑产生压力（源头 100），经管道 BFS 传播，每格 -8。
* - 水塔（tower / boost:30）所在格 +30 增压；管道枢纽（hub）不衰减。
* - 漏水点压力 -25 并向周围扩散；每分钟每段管道 0.2% 概率新漏。
* - 供需失衡时全网按「需求满足率」缩放；沙尘暴期间管道效率 -20%。
* - 用水建筑要求所在格压力 ≥20，否则停产（由 game 侧检查 waterOkFor）。
*
*
* - 所有 game.* 读取（builder / disaster / player.inv / toast）都经过存在性检查，
* 缺失时降级为「默认兼容」行为，绝不抛异常。
* - 无水源或无管道时 getPressure 返回 100（兼容旧存档/未启用管网的逻辑）。
*
* 纯原生 JS，零依赖，ES6 class。浏览器 / Node 双环境可加载。
* ================================================================================
*/

/* ------------------------------------------------------------------------------
* WATERGUIDE：供水管网 12 条机制说明（玩家手册 + 数值依据）
* ------------------------------------------------------------------------------
* 1. 水源判定（produce 为准）：levelDef.produce.water > 0 或 convert.out.water > 0
* 的建筑为水源（当前：水厂 waterplant）；id 含 pump/water/desalination 的建筑
* 为启发式水源（当前：抽水机 pump —— 产冰水，视为源头供水）。水源格压力=100。
* 2. 压力传播：从所有水源同时做多源 BFS（按压力降序的优先队列），沿 4 向管道
* 瓦片扩散，每走一格压力 -8。重叠区域取最高压力（先到先得 + 队列保证最优）。
* 3. 距离衰减公式：P(tile) = max_over_sources(100 - 8×dist)，即水源直线 12 格
* （96 衰减）外压力归零。12 格是单水源无增压的理论最大供水半径。
* 4. 增压：水塔（id 含 tower，或 levelDef.boost:30）所在格 +30，上限仍 100。
* 增压发生在衰减之后，所以塔要放在管网中段才能发挥最大作用。
* 5. 管道枢纽（id 含 hub）：经过时不衰减，可作为长距离干线中继。枢纽本身不产水。
* 6. 用水门槛：用水建筑（levelDef.waterUse，或温室/居住舱/医院/穹顶等缺省名单）
* 要求所在格压力 ≥ 20，否则停产。门槛 20 ≈ 水源 2.5 格外仍可供水。
* 7. 漏水：每分钟每段管道独立 0.2% 概率出现漏点。漏点自身压力 -25，并以
* 每格 -10 的速率向周围 2 格扩散降压（冻裂/沙尘腐蚀的物理近似）。
* 8. 漏点成长：漏点按存活时间分 1/2/3 级（<5min / 5-15min / >15min），
* 3 级漏点每分钟 5% 概率向相邻管道蔓延。修漏固定消耗 铁×2。
* 9. 供需失衡：水源总供水 < 用水建筑总需求时，全网压力按
* 需求满足率 = 总供水 / 总需求 缩放（最低 0.3），体现干旱期的全网降压。
* 10. 沙尘暴：game.disaster.sandstormActive(now) 为真时管道效率 -20%
* （全网压力 ×0.8）。冬季（game.time.season==='winter'，若可读）额外 -10%，
* 且漏水概率翻倍（冻胀开裂）。
* 11. 孤立管段：经洪水填充（flood fill）找不到水源连通路径的管段画灰色虚线，
* 并 toast 提示一次（条件消除后重置，可再次提示）。
* 12. 水压不足预警：压力 <20 的用水建筑每 30 秒触发一次 onLowPressure(x, y)
* 回调（game 侧注册，用于 UI 红闪 / 音效 / 成就统计），去重节流。
* ------------------------------------------------------------------------------
*/
const WATERGUIDE = [
'1. 水源判定以 produce/convert.out.water 为准（水厂），id 含 pump/water/desalination 为启发式水源；水源格压力恒为 100。',
'2. 多源 BFS 优先队列传播压力，沿 4 向管道扩散，每格衰减 8，重叠区取最高值。',
'3. 单水源无增压理论供水半径为 12 格（100/8 向下取整）。',
'4. 水塔（id 含 tower / levelDef.boost:30）所在格压力 +30（上限 100），适合放在管网中段。',
'5. 管道枢纽（id 含 hub）经过时不衰减，是长距离干线的理想中继。',
'6. 用水建筑要求所在格压力 ≥ 20，否则停产；门槛约等于水源 2~3 格外仍可供水。',
'7. 每分钟每段管道 0.2% 概率漏水；漏点自身 -25，并向周围 2 格每格 -10 扩散降压。',
'8. 漏点分 3 级成长，3 级漏点每分钟 5% 概率蔓延到相邻管道；修复固定消耗铁×2。',
'9. 总供水 < 总需求时全网按 需求满足率 缩放压力（最低 0.3），模拟干旱降压。',
'10. 沙尘暴期间管道效率 -20%；冬季（若可读）额外 -10% 且漏水概率翻倍。',
'11. 不连水源的孤立管段画灰色虚线并 toast 提示一次，接通后提示状态重置。',
'12. 压力不足的用水建筑每 30 秒触发一次 onLowPressure(x, y) 回调（去重节流）。',
];

/* ------------------------------------------------------------------------------
* 调参区：所有数值集中于此，平衡性调整只改这里
* ------------------------------------------------------------------------------
*/
const WATER_TUNING = {
SOURCE_PRESSURE: 100, // 水源格压力
DECAY_PER_TILE: 8, // 每格管道衰减
BOOST_TOWER: 30, // 水塔增压量
PRESSURE_MIN: 20, // 用水建筑最低压力门槛
LEAK_PENALTY: 25, // 漏点自身降压
LEAK_SPREAD_DECAY: 10, // 漏点向周围扩散的每格衰减
LEAK_SPREAD_RADIUS: 2, // 漏点扩散半径（格）
LEAK_PER_MIN: 0.002, // 每分钟每段管道漏水概率（0.2%）
LEAK_SPREAD_PER_MIN: 0.05, // 3 级漏点每分钟向邻格蔓延概率
LEAK_STAGE2_MIN: 5, // 漏点 2 级阈值（分钟）
LEAK_STAGE3_MIN: 15, // 漏点 3 级阈值（分钟）
REBUILD_MS: 500, // 压力场重算节流（毫秒）
LEAK_TICK_MS: 1000, // 漏水掷骰节流（毫秒）
PIPE_COST: { iron: 1}, // 铺管成本
REPAIR_COST: { iron: 2}, // 修漏成本
REMOVE_REFUND: 0.5, // 拆管返还比例
SANDSTORM_EFF: 0.8, // 沙尘暴管道效率（-20%）
WINTER_EFF: 0.9, // 冬季管道效率（-10%）
WINTER_LEAK_MUL: 2, // 冬季漏水概率倍率
DEMAND_MIN_RATIO: 0.3, // 供需缩放下限
LOW_PRESS_WARN_MS: 30000, // 低压预警节流（毫秒）
DAMAGED_SOURCE_P: 60, // 受损水源的输出压力
// 用水建筑缺省名单（build.js 目前没有 waterUse 字段时的兜底）
// greenhouse 温室（灌溉）、habitat 居住舱（生活用水）、hospital 医院、
// dome 生态穹顶、clone 克隆中心（培养液）、ecocircle 生态圈
DEFAULT_WATER_USERS: ['greenhouse', 'habitat', 'hospital', 'dome', 'clone', 'ecocircle'],
// 供水量估算：水源每周期产水量（用于供需比；以 produce/convert.out.water 为准）
// 用水量估算：用水建筑每周期需求（waterUse 字段为准，缺省 2）
DEFAULT_WATER_USE: 2,
};

if (typeof module!== 'undefined') { module.exports = module.exports || {};}

/* ================================================================================
 * 内部工具：二进制最大堆（优先队列）
 * ----------------------------------------------------------------------------
 * 压力 BFS 需要「每次取出当前压力最高的待处理格」，用最大堆实现 O(log n)。
 * 元素形如 { key, x, y, p }，按 p 降序排列。纯手写，不依赖任何库。
 * ================================================================================
 */
class _MaxHeap {
  constructor() {
    this.a = []; // 数组即堆，a[0] 为堆顶（最大）
  }
  get size() { return this.a.length; }
  isEmpty() { return this.a.length === 0; }

  // 入堆：追加到末尾再上浮
  push(item) {
    const a = this.a;
    a.push(item);
    let i = a.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (a[parent].p >= a[i].p) break; // 父已更大，停止
      const tmp = a[parent]; a[parent] = a[i]; a[i] = tmp;
      i = parent;
    }
  }

  // 出堆：取堆顶，把末尾搬到顶再下沉
  pop() {
    const a = this.a;
    if (a.length === 0) return null;
    const top = a[0];
    const last = a.pop();
    if (a.length > 0) {
      a[0] = last;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let best = i;
        if (l < a.length && a[l].p > a[best].p) best = l;
        if (r < a.length && a[r].p > a[best].p) best = r;
        if (best === i) break;
        const tmp = a[best]; a[best] = a[i]; a[i] = tmp;
        i = best;
      }
    }
    return top;
  }

  clear() { this.a.length = 0; }
}

/* ================================================================================
 * 坐标键工具：管网内部统一用 "x,y" 字符串做 Set/Map 键
 * ================================================================================
 */
function _wkey(x, y) { return x + ',' + y; }
function _wparse(key) {
  const i = key.indexOf(',');
  return { x: +key.slice(0, i), y: +key.slice(i + 1) };
}
function _clampP(v) { return v < 0 ? 0 : (v > 100 ? 100 : v); }

/* ================================================================================
 * 类：WaterNetManager —— 供水管网系统
 * ================================================================================
 */
class WaterNetManager {
  constructor() {
    // ---- 拓扑 ----
    this.pipes = new Set();          // "x,y" 管道瓦片
    this.leaks = new Map();          // "x,y" -> { since, stage, severity }
    this.pressure = new Map();       // "x,y" -> 0..100 压力场缓存（500ms 重算）
    this.flowDir = new Map();        // "x,y" -> [dx,dy] 水流方向（overlay 箭头用）
    this.segments = new Map();       // "x,y" -> segmentId 连通分量编号
    this.isolatedTiles = new Set();  // 不连水源的孤立管段瓦片
    this.sources = [];               // [{x, y, pressure, output, building}]

    // ---- 状态 ----
    this.overlayOn = false;          // 覆盖层开关
    this.stats = {
      sources: 0, pipeCount: 0, leakCount: 0, avgPressure: 0,
      minPressure: 0, isolatedCount: 0, demandRatio: 1,
      totalSupply: 0, totalDemand: 0, sandstorm: false, winter: false,
      rebuilds: 0, leaksFixed: 0, pipesPlaced: 0, pipesRemoved: 0,
    };

    // ---- 节流 / 去重 ----
    this._lastRebuild = 0;           // 上次压力场重算（ms 时间戳）
    this._lastLeakTick = 0;          // 上次漏水掷骰
    this._leakAccumMs = 0;           // 漏水掷骰累计毫秒（按 dt 累加，精确到分钟概率）
    this._lowWarnAt = new Map();     // "x,y" -> 上次低压预警时间戳
    this._isoToasted = false;        // 孤立管段 toast 是否已提示过
    this._noSourceToasted = false;   // 「无水源」提示是否已提示过
    this._lowCb = null;              // onLowPressure 回调
    this._heap = new _MaxHeap();     // BFS 复用堆，避免每帧 new
    this._dirty = true;              // 拓扑变化标记（铺管/拆管/建筑变化 → 强制重算）
  }

  /* --------------------------------------------------------------------------
   * 内部：安全读取 game 侧引用，全部防御性
   * -------------------------------------------------------------------------- */
  // 取建筑列表（game.builder.buildings），缺失返回空数组
  _buildings(game) {
    try {
      if (game && game.builder && Array.isArray(game.builder.buildings)) {
        return game.builder.buildings;
      }
    } catch (e) { /* 忽略 */ }
    return [];
  }

  // 取某格建筑（game.builder.at），缺失返回 null
  _buildingAt(game, x, y) {
    try {
      if (game && game.builder && typeof game.builder.at === 'function') {
        return game.builder.at(x, y) || null;
      }
    } catch (e) { /* 忽略 */ }
    return null;
  }

  // 取建筑等级定义（game.builder.levelDef），缺失返回 {}
  _levelDef(game, b) {
    try {
      if (game && game.builder && typeof game.builder.levelDef === 'function' && b) {
        return game.builder.levelDef(b) || {};
      }
    } catch (e) { /* 忽略 */ }
    return {};
  }

  // 取玩家资源背包（game.player.inv），缺失返回 null（调用方自行降级）
  _inv(game) {
    try {
      if (game && game.player && game.player.inv && typeof game.player.inv === 'object') {
        return game.player.inv;
      }
    } catch (e) { /* 忽略 */ }
    return null;
  }

  // toast（game.toast），缺失则静默
  _toast(game, msg) {
    try {
      if (game && typeof game.toast === 'function') game.toast(msg);
    } catch (e) { /* 忽略 */ }
  }

  // 沙尘暴是否活跃（game.disaster.sandstormActive），读不到视为 false
  _sandstormActive(game, now) {
    try {
      if (game && game.disaster && typeof game.disaster.sandstormActive === 'function') {
        return !!game.disaster.sandstormActive(now);
      }
    } catch (e) { /* 忽略 */ }
    return false;
  }

  // 冰尘暴是否活跃（v1.2 灾难），用于管道冻结；读不到视为 false
  _icestormActive(game, now) {
    try {
      const d = game && game.disaster;
      if (d && typeof d.icestormActive === 'function') return !!d.icestormActive(now);
      // 兼容：有些版本把冰尘暴状态存在 d.icestorm 对象上
      if (d && d.icestorm && typeof d.icestorm.until === 'number') {
        return now < d.icestorm.until && now >= (d.icestorm.warnUntil || 0);
      }
    } catch (e) { /* 忽略 */ }
    return false;
  }

  // 是否冬季：优先读 game.time.season / game.season，读不到返回 false（跳过）
  _isWinter(game) {
    try {
      if (game && game.time && typeof game.time.season === 'string') {
        return game.time.season === 'winter';
      }
      if (game && typeof game.season === 'string') return game.season === 'winter';
      // time.js 可能提供 getSeason(now)
      if (game && game.time && typeof game.time.getSeason === 'function') {
        return game.time.getSeason(Date.now()) === 'winter';
      }
    } catch (e) { /* 忽略 */ }
    return false;
  }

  /* --------------------------------------------------------------------------
   * 水源 / 增压 / 枢纽 / 用水判定
   * --------------------------------------------------------------------------
   * 判定优先级（WATERGUIDE 第 1 条）：
   *   以 levelDef.produce / convert 为准，id 启发式为兜底。
   * 注意：当前 build.js 里 pump 产 ice（冰水）、waterplant 把 ice→water，
   * 所以「产 water」的权威水源是 waterplant；pump 靠 id 启发式同样视为水源。
   * -------------------------------------------------------------------------- */
  // 是否水源建筑
  _isWaterSource(game, b) {
    if (!b) return false;
    const lv = this._levelDef(game, b);
    // 权威：produce.water / convert.out.water
    if (lv.produce && typeof lv.produce.water === 'number' && lv.produce.water > 0) return true;
    if (lv.convert && lv.convert.out && typeof lv.convert.out.water === 'number' && lv.convert.out.water > 0) return true;
    // 兜底：id 启发式
    const id = String(b.id || '').toLowerCase();
    return id.indexOf('pump') >= 0 || id.indexOf('water') >= 0 || id.indexOf('desalination') >= 0;
  }

  // 水源每周期供水量估算（供需比用）：produce.water / convert.out.water，取不到按等级估算
  _sourceOutput(game, b) {
    const lv = this._levelDef(game, b);
    if (lv.produce && lv.produce.water > 0) return lv.produce.water;
    if (lv.convert && lv.convert.out && lv.convert.out.water > 0) return lv.convert.out.water;
    // 启发式水源（如 pump 产冰水）：按等级给等效供水量
    const lvl = b.level || 1;
    return lvl >= 3 ? 12 : (lvl === 2 ? 5 : 2);
  }

  // 是否水塔（增压 +30）：id 含 tower，或 levelDef.boost === 30（兼容数值型 boost）
  _isBooster(game, b) {
    if (!b) return false;
    const lv = this._levelDef(game, b);
    if (lv && typeof lv.boost === 'number' && lv.boost > 0) return true;
    return String(b.id || '').toLowerCase().indexOf('tower') >= 0;
  }

  // 增压量：levelDef.boost 数值优先，否则 WATER_TUNING.BOOST_TOWER
  _boostAmount(game, b) {
    const lv = this._levelDef(game, b);
    if (lv && typeof lv.boost === 'number' && lv.boost > 0) return lv.boost;
    return WATER_TUNING.BOOST_TOWER;
  }

  // 是否管道枢纽（经过不衰减）：id 含 hub
  _isHub(game, b) {
    if (!b) return false;
    return String(b.id || '').toLowerCase().indexOf('hub') >= 0;
  }

  // 是否用水建筑：levelDef.waterUse 为准；缺省名单兜底
  _needsWater(game, b) {
    if (!b) return false;
    const lv = this._levelDef(game, b);
    if (lv && typeof lv.waterUse === 'number' && lv.waterUse > 0) return true;
    return WATER_TUNING.DEFAULT_WATER_USERS.indexOf(b.id) >= 0;
  }

  // 用水建筑每周期需水量：waterUse 字段为准，缺省 DEFAULT_WATER_USE
  _waterDemand(game, b) {
    const lv = this._levelDef(game, b);
    if (lv && typeof lv.waterUse === 'number' && lv.waterUse > 0) return lv.waterUse;
    return WATER_TUNING.DEFAULT_WATER_USE;
  }
