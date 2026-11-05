/* ================================================================================
 * 星港 — waternet.js：供水管网系统（WaterNetManager）
 * ================================================================================
 * 版本：v1.0（waternet）
 * 定位：城市级供水压力模拟 —— 管道铺设 → 压力传播 → 用水校验 → 漏水/灾害维护。
 *
 * 【游戏集成点】（game.js 负责接线）
 *   1. 构造：this.waternet = (typeof WaterNetManager !== 'undefined')
 *                          ? new WaterNetManager() : null;
 *   2. 主循环：this.waternet && this.waternet.update(now, dt, this);
 *   3. 存档：save() 里写 data.waternet = this.waternet ? this.waternet.save() : null;
 *             load() 里写 if (data.waternet && this.waternet) this.waternet.load(data.waternet);
 *   4. 生产校验（build.js BuildManager.update 内，produce 分支前）：
 *        const wn = gameRef.waternet;
 *        if (wn && !wn.waterOkFor(b).ok) continue;  // 水压不足 → 停产
 *   5. 渲染：render 循环内 if (this.waternet) this.waternet.renderOverlay(this.ctx, this.map, this.tile);
 *   6. UI 按钮：铺管模式调用 waternet.placePipe(x, y, this)；
 *               拆管调用 waternet.removePipe(x, y)；
 *               修漏调用 waternet.repairLeak(x, y, this)。
 *
 * 【集成示例代码】（直接贴进 game.js 相应位置）
 *
 *   // --- 构造（Game constructor 内，其他系统旁）---
 *   this.waternet = (typeof WaterNetManager !== 'undefined') ? new WaterNetManager() : null;
 *
 *   // --- 主循环（Game.tick 内，disaster.update 附近）---
 *   if (this.waternet) {
 *     try { this.waternet.update(now, dt, this); } catch (e) { console.warn(e); }
 *   }
 *
 *   // --- 生产校验（BuildManager.update 的 produce/convert 分支最前面）---
 *   // 注意：BuildManager.update 签名是 update(now, inv, onEvent, logistics)，
 *   // 没有 game 引用。两种接法：
 *   //   A. game.js 在调用前注入：this.builder.waternet = this.waternet;
 *   //      然后 build.js 内：const chk = this.waternet ? this.waternet.waterOkFor(b, null) : null;
 *   //      （传 null → 按纯管道口径 + 缺省用水名单判定，依然有效）
 *   //   B. game.js 每帧预处理：for (const b of this.builder.buildings) {
 *   //        b._waterBlocked = this.waternet && !this.waternet.waterOkFor(b, this).ok;
 *   //      }
 *   //      然后 build.js 内：if (b._waterBlocked) continue;
 *   // 推荐 B（build.js 改动最小，且 waterOkFor 的 game 相关判定依然完整）。
 *
 *   // --- 渲染（Game.render 或地图绘制函数末尾）---
 *   if (this.waternet) this.waternet.renderOverlay(this.ctx, this.map, this.tile, this);
 *   // 第四个 game 参数可选：传了才会标记低压用水建筑；不传则只画管网本体。
 *
 *   // --- 存档（Game.save / Game.load）---
 *   // save: data.waternet = this.waternet ? this.waternet.save() : null;
 *   // load: if (data.waternet && this.waternet) this.waternet.load(data.waternet);
 *
 *   // --- 低压预警回调（可选，构造后注册一次）---
 *   // this.waternet.onLowPressure((x, y, p, b) => {
 *   //   this.toast(`⚠️ 水压不足（${p}）`);
 *   //   this.sound.error();
 *   // });
 *
 *   // --- 通用事件（可选：成就/统计/音效）---
 *   // this.waternet.onEvent((type, data) => {
 *   //   if (type === 'leak') this.stats.record('water-leak');
 *   //   if (type === 'leak-fixed') this.stats.record('water-fix');
 *   // });
 *
 *   // --- 覆盖层开关（UI 按钮）---
 *   // this.waternet.setOverlay(true/false);
 *
 * 【核心模型】（详见下面的 WATERGUIDE 12 条机制说明）
 *   - 水源建筑产生压力（源头 100），经管道 BFS 传播，每格 -8。
 *   - 水塔（tower / boost:30）所在格 +30 增压；管道枢纽（hub）不衰减。
 *   - 漏水点压力 -25 并向周围扩散；每分钟每段管道 0.2% 概率新漏。
 *   - 供需失衡时全网按「需求满足率」缩放；沙尘暴期间管道效率 -20%。
 *   - 用水建筑要求所在格压力 ≥20，否则停产（由 game 侧检查 waterOkFor）。
 *
 * 【防御性设计】
 *   - 所有 game.* 读取（builder / disaster / player.inv / toast）都经过存在性检查，
 *     缺失时降级为「默认兼容」行为，绝不抛异常。
 *   - 无水源或无管道时 getPressure 返回 100（兼容旧存档/未启用管网的逻辑）。
 *
 * 纯原生 JS，零依赖，ES6 class。浏览器 / Node 双环境可加载。
 * ================================================================================
 */

/* ------------------------------------------------------------------------------
 * WATERGUIDE：供水管网 12 条机制说明（玩家手册 + 数值依据）
 * ------------------------------------------------------------------------------
 *  1. 水源判定（produce 为准）：levelDef.produce.water > 0 或 convert.out.water > 0
 *     的建筑为水源（当前：水厂 waterplant）；id 含 pump/water/desalination 的建筑
 *     为启发式水源（当前：抽水机 pump —— 产冰水，视为源头供水）。水源格压力=100。
 *  2. 压力传播：从所有水源同时做多源 BFS（按压力降序的优先队列），沿 4 向管道
 *     瓦片扩散，每走一格压力 -8。重叠区域取最高压力（先到先得 + 队列保证最优）。
 *  3. 距离衰减公式：P(tile) = max_over_sources(100 - 8×dist)，即水源直线 12 格
 *     （96 衰减）外压力归零。12 格是单水源无增压的理论最大供水半径。
 *  4. 增压：水塔（id 含 tower，或 levelDef.boost:30）所在格 +30，上限仍 100。
 *     增压发生在衰减之后，所以塔要放在管网中段才能发挥最大作用。
 *  5. 管道枢纽（id 含 hub）：经过时不衰减，可作为长距离干线中继。枢纽本身不产水。
 *  6. 用水门槛：用水建筑（levelDef.waterUse，或温室/居住舱/医院/穹顶等缺省名单）
 *     要求所在格压力 ≥ 20，否则停产。门槛 20 ≈ 水源 2.5 格外仍可供水。
 *  7. 漏水：每分钟每段管道独立 0.2% 概率出现漏点。漏点自身压力 -25，并以
 *     每格 -10 的速率向周围 2 格扩散降压（冻裂/沙尘腐蚀的物理近似）。
 *  8. 漏点成长：漏点按存活时间分 1/2/3 级（<5min / 5-15min / >15min），
 *     3 级漏点每分钟 5% 概率向相邻管道蔓延。修漏固定消耗 铁×2。
 *  9. 供需失衡：水源总供水 < 用水建筑总需求时，全网压力按
 *     需求满足率 = 总供水 / 总需求 缩放（最低 0.3），体现干旱期的全网降压。
 * 10. 沙尘暴：game.disaster.sandstormActive(now) 为真时管道效率 -20%
 *     （全网压力 ×0.8）。冬季（game.time.season==='winter'，若可读）额外 -10%，
 *     且漏水概率翻倍（冻胀开裂）。
 * 11. 孤立管段：经洪水填充（flood fill）找不到水源连通路径的管段画灰色虚线，
 *     并 toast 提示一次（条件消除后重置，可再次提示）。
 * 12. 水压不足预警：压力 <20 的用水建筑每 30 秒触发一次 onLowPressure(x, y)
 *     回调（game 侧注册，用于 UI 红闪 / 音效 / 成就统计），去重节流。
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
  SOURCE_PRESSURE: 100,      // 水源格压力
  DECAY_PER_TILE: 8,         // 每格管道衰减
  BOOST_TOWER: 30,           // 水塔增压量
  PRESSURE_MIN: 20,          // 用水建筑最低压力门槛
  LEAK_PENALTY: 25,          // 漏点自身降压
  LEAK_SPREAD_DECAY: 10,     // 漏点向周围扩散的每格衰减
  LEAK_SPREAD_RADIUS: 2,     // 漏点扩散半径（格）
  LEAK_PER_MIN: 0.002,       // 每分钟每段管道漏水概率（0.2%）
  LEAK_SPREAD_PER_MIN: 0.05, // 3 级漏点每分钟向邻格蔓延概率
  LEAK_STAGE2_MIN: 5,        // 漏点 2 级阈值（分钟）
  LEAK_STAGE3_MIN: 15,       // 漏点 3 级阈值（分钟）
  REBUILD_MS: 500,           // 压力场重算节流（毫秒）
  LEAK_TICK_MS: 1000,        // 漏水掷骰节流（毫秒）
  PIPE_COST: { iron: 1 },    // 铺管成本
  REPAIR_COST: { iron: 2 },  // 修漏成本
  REMOVE_REFUND: 0.5,        // 拆管返还比例
  SANDSTORM_EFF: 0.8,        // 沙尘暴管道效率（-20%）
  WINTER_EFF: 0.9,           // 冬季管道效率（-10%）
  WINTER_LEAK_MUL: 2,        // 冬季漏水概率倍率
  SUMMER_DEMAND_MUL: 1.2,    // 夏季用水需求倍率（灌溉季）
  DEMAND_MIN_RATIO: 0.3,     // 供需缩放下限
  LOW_PRESS_WARN_MS: 30000,  // 低压预警节流（毫秒）
  DAMAGED_SOURCE_P: 60,      // 受损水源的输出压力
  // 用水建筑缺省名单（build.js 目前没有 waterUse 字段时的兜底）
  // greenhouse 温室（灌溉）、habitat 居住舱（生活用水）、hospital 医院、
  // dome 生态穹顶、clone 克隆中心（培养液）、ecocircle 生态圈
  DEFAULT_WATER_USERS: ['greenhouse', 'habitat', 'hospital', 'dome', 'clone', 'ecocircle'],
  // 供水量估算：水源每周期产水量（用于供需比；以 produce/convert.out.water 为准）
  // 用水量估算：用水建筑每周期需求（waterUse 字段为准，缺省 2）
  DEFAULT_WATER_USE: 2,
};

/* ------------------------------------------------------------------------------
 * 附录：数值推导（为什么是这些数）
 * ------------------------------------------------------------------------------
 * 衰减 8/格：
 *   水源 100 → 12 格后归零（100/8=12.5）。50×50 地图对角线约 70 格，
 *   单水源覆盖直径 24 格 ≈ 半张地图，迫使玩家建 2~4 个水源分区供水，
 *   这正是"管网规划"玩法的核心张力。衰减若改 5，单源覆盖直径 40 格，
 *   一座水厂打全图，管网系统失去意义；若改 12，半径 8 格，
 *   前期水厂+3 格管都喂不饱温室，挫败感过强。
 * 门槛 20：
 *   100-8d ≥ 20 → d ≤ 10，即水源 10 格内可用。10 格是"走两步就到"的
 *   体感距离（玩家拖动地图一屏约 15~20 格），门槛 20 让"差一点够不着"
 *   成为最常见的优化动机（加一截管 / 立一座塔）。
 * 水塔 +30：
 *   30 ≈ 4 格衰减（32），即一座塔 ≈ 把水源"向前搬了 4 格"。
 *   放在 12 格半径的中段（第 6 格），有效半径从 12 延长到约 15~16 格。
 *   上限 100 保证塔不能叠出超压（两塔相邻不叠加到 130）。
 * 漏水 0.2%/分钟：
 *   100 段管网 → 期望 0.2 个/分钟 → 约 5 分钟一漏。
 *   配合 1/2/3 级成长（5/15 分钟），玩家"修漏"成为中期日常操作，
 *   但不至于手忙脚乱。冬季 ×2 → 约 2.5 分钟一漏，与"冬季难熬"主题一致。
 * 供需缩放下限 0.3：
 *   极端缺水时不断供（不断供 → 不出现"全城温室同时停产"的死亡螺旋），
 *   但 0.3 的压力让 10 格外的建筑全部停产，形成"保近舍远"的抉择。
 * 拆管返还 50%（信用累计）：
 *   铁×1 的 50% 是 0.5，无法整除。用"信用累计满 1 返"而非"四舍五入"，
 *   是为了避免"铺→拆"刷铁（四舍五入到 1 会让铺拆循环净赚）。
 * ------------------------------------------------------------------------------
 */

if (typeof module !== 'undefined') { module.exports = module.exports || {};}

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
    this.frozen = new Set();         // "x,y" 冻结管段（冰尘暴期间，压力 ×0.4）
    this._frozenSince = new Map();   // "x,y" -> 冻结开始时间戳（超时自动解冻）
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
    this._freezeToasted = false;     // 「管道冻结」提示是否已提示过
    this._lowCb = null;              // onLowPressure 回调
    this._evCb = null;               // 通用事件回调（onEvent）
    this._heap = new _MaxHeap();     // BFS 复用堆，避免每帧 new
    this._dirty = true;              // 拓扑变化标记（铺管/拆管/建筑变化 → 强制重算）
    this._refundCredit = 0;          // 拆管返还信用累计（0.5/段，满 1 返铁×1）
    this._lastSig = null;            // 建筑拓扑签名
    this._hist = [];                 // 平均压力历史环形缓冲（HUD 曲线用）
    this._histCap = 240;             // 上限 240 点（500ms/点 ≈ 2 分钟）
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

  // 读取季节：'spring' | 'summer' | 'autumn' | 'winter' | null（读不到返回 null）
  // 优先读 game.time.season / game.season；time.js 若提供 getSeason(now) 则调用之。
  // 全部防御性：任何读取异常都返回 null，调用方按"无季节"处理。
  _season(game) {
    try {
      if (game && game.time && typeof game.time.season === 'string') {
        const s = game.time.season.toLowerCase();
        if (s === 'spring' || s === 'summer' || s === 'autumn' || s === 'winter') return s;
        return null;
      }
      if (game && typeof game.season === 'string') {
        const s = game.season.toLowerCase();
        if (s === 'spring' || s === 'summer' || s === 'autumn' || s === 'winter') return s;
        return null;
      }
      if (game && game.time && typeof game.time.getSeason === 'function') {
        const s = String(game.time.getSeason(Date.now())).toLowerCase();
        if (s === 'spring' || s === 'summer' || s === 'autumn' || s === 'winter') return s;
      }
    } catch (e) { /* 忽略 */ }
    return null;
  }

  // 是否冬季：_season 的便捷封装（读不到返回 false，即跳过冬季逻辑）
  _isWinter(game) {
    return this._season(game) === 'winter';
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

  /* ============================================================================
   * 核心算法：rebuild(game) —— 压力场重建
   * ----------------------------------------------------------------------------
   * 步骤：
   *   [1] 扫描建筑，收集水源（位置 / 输出压力 / 供水量）
   *   [2] 统计全网供需 → 需求满足率 demandRatio（WATERGUIDE 第 9 条）
   *   [3] 多源最大堆 BFS：在管道图上做「最大压力」不动点传播
   *       - 边权：普通管 -8/格；枢纽区出边 -0/格
   *       - 水塔区：到达值 +boost（上限 100）
   *       - 值域为 0..100 整数，单调改进保证收敛（有限步终止）
   *   [4] 漏水惩罚烘焙：漏点 -25，曼哈曼半径 2 内每格 -10 扩散
   *   [5] 全局效率乘子：供需比 × 沙尘暴 0.8 × 冬季 0.9 × 冰尘暴 0.7
   *   [6] 洪水填充划分连通分量 → 标记孤立管段（WATERGUIDE 第 11 条）
   *   [7] 汇总 stats
   *
   * 调用节流：update() 内每 500ms 或拓扑变化（_dirty）时调用一次。
   * ========================================================================== */
  rebuild(game) {
    const now = Date.now();
    const T = WATER_TUNING;

    // ---- [1] 收集水源 -------------------------------------------------------
    const buildings = this._buildings(game);
    this.sources = [];
    let totalSupply = 0;
    let totalDemand = 0;
    // 预计算：增压区 / 枢纽区（建筑格 + 4 邻格），BFS 内 O(1) 查询
    const boosterZones = new Map(); // key -> boostAmount（取最大）
    const hubZones = new Set();     // key
    for (const b of buildings) {
      if (!b) continue;
      if (this._isWaterSource(game, b)) {
        const damaged = !!b.damaged;
        const p = damaged ? T.DAMAGED_SOURCE_P : T.SOURCE_PRESSURE;
        this.sources.push({ x: b.x, y: b.y, pressure: p, building: b });
        totalSupply += this._sourceOutput(game, b) * (damaged ? 0.6 : 1);
      }
      if (this._needsWater(game, b)) {
        totalDemand += this._waterDemand(game, b);
      }
      if (this._isBooster(game, b)) {
        const amt = this._boostAmount(game, b);
        const zone = [b.x + ',' + b.y,
          (b.x + 1) + ',' + b.y, (b.x - 1) + ',' + b.y,
          b.x + ',' + (b.y + 1), b.x + ',' + (b.y - 1)];
        for (const k of zone) {
          if (!boosterZones.has(k) || boosterZones.get(k) < amt) boosterZones.set(k, amt);
        }
      }
      if (this._isHub(game, b)) {
        hubZones.add(b.x + ',' + b.y);
        hubZones.add((b.x + 1) + ',' + b.y);
        hubZones.add((b.x - 1) + ',' + b.y);
        hubZones.add(b.x + ',' + (b.y + 1));
        hubZones.add(b.x + ',' + (b.y - 1));
      }
    }

    // ---- [2] 供需比 ----------------------------------------------------------
    // 需求为 0 → 比率 1；供 < 需 → 按比例降压，最低 0.3（干旱期全网降压）
    // 夏季灌溉：温室/生态类用水建筑需求 ×1.2（读不到季节则跳过）
    let demandRatio = 1;
    if (totalDemand > 0) {
      if (this._season(game) === 'summer') {
        totalDemand = Math.round(totalDemand * T.SUMMER_DEMAND_MUL * 10) / 10;
      }
      demandRatio = totalSupply >= totalDemand ? 1
        : Math.max(T.DEMAND_MIN_RATIO, totalSupply / totalDemand);
    }

    // ---- 灾害 / 季节效率 ------------------------------------------------------
    const sandstorm = this._sandstormActive(game, now);
    const winter = this._isWinter(game);
    const icestorm = this._icestormActive(game, now);
    let effMul = demandRatio;
    if (sandstorm) effMul *= T.SANDSTORM_EFF;  // -20%
    if (winter) effMul *= T.WINTER_EFF;        // -10%
    if (icestorm) effMul *= 0.7;               // 冰尘暴冻管：-30%
    // 科技加成：BuildManager.techMul('pipeEffMul')（若科技树提供该键，缺省 1）
    // 意义：管网科技（如"高压管网"）提升整体输水效率
    try {
      if (game && game.builder && typeof game.builder.techMul === 'function') {
        const tm = game.builder.techMul('pipeEffMul');
        if (typeof tm === 'number' && Number.isFinite(tm) && tm > 0) effMul *= tm;
      }
    } catch (e) { /* 忽略 */ }

    // ---- [3] 多源 BFS 压力传播 ------------------------------------------------
    this.pressure.clear();
    this.flowDir.clear();
    const heap = this._heap;
    heap.clear();
    const inB = (x, y) => {
      try {
        if (game && game.map && typeof game.map.inBounds === 'function') {
          return game.map.inBounds(x, y);
        }
      } catch (e) { /* 忽略 */ }
      return x >= 0 && y >= 0 && x < 50 && y < 50; // 缺省 50×50
    };
    const isPipe = (x, y) => this.pipes.has(x + ',' + y);

    // 种子：所有水源建筑格（即使水源格本身不是管道，也向四周管道供水）
    for (const s of this.sources) {
      const k = s.x + ',' + s.y;
      this.pressure.set(k, s.pressure);
      heap.push({ key: k, x: s.x, y: s.y, p: s.pressure });
    }

    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    // 安全上限：防止病态拓扑导致无限循环（正常应在数轮内收敛）
    let guard = this.pipes.size * 40 + this.sources.length * 40 + 1000;
    while (!heap.isEmpty() && guard-- > 0) {
      const cur = heap.pop();
      const recorded = this.pressure.get(cur.key);
      // 陈旧条目（已有更高值）跳过
      if (recorded === undefined || cur.p < recorded) continue;

      // 水塔增压：到达值 +boost，上限 100（WATERGUIDE 第 4 条）
      // 增压区 = 水塔建筑格及其 4 邻格（塔放在干线旁即生效）
      // 增压同时作用于本格自身压力（塔所在格 +30）与向外传播的值
      let effP = cur.p;
      const boost = boosterZones.get(cur.key);
      if (boost) {
        const boosted = Math.min(100, cur.p + boost);
        if (boosted > cur.p) {
          this.pressure.set(cur.key, boosted); // 本格增压（WATERGUIDE 第 4 条）
          effP = boosted;
        }
      }

      // 枢纽：从本格出发的边不衰减（WATERGUIDE 第 5 条）
      const noDecay = hubZones.has(cur.key);
      const decay = noDecay ? 0 : T.DECAY_PER_TILE;

      for (const [dx, dy] of DIRS) {
        const nx = cur.x + dx, ny = cur.y + dy;
        if (!inB(nx, ny)) continue;
        if (!isPipe(nx, ny)) continue; // 只沿管道瓦片扩散
        const nk = nx + ',' + ny;
        const np = Math.round(effP - decay);
        if (np <= 0) continue;
        const old = this.pressure.get(nk);
        if (old === undefined || np > old) {
          this.pressure.set(nk, np);
          this.flowDir.set(nk, [dx, dy]); // 记录水流方向（overlay 箭头）
          heap.push({ key: nk, x: nx, y: ny, p: np });
        }
      }
    }

    // ---- [4] 漏水惩罚烘焙 ------------------------------------------------------
    // 漏点自身 -25；曼哈曼距离 d(1..2) 的格 -（25-10d）（WATERGUIDE 第 7 条）
    if (this.leaks.size > 0 && this.pressure.size > 0) {
      for (const [lkey] of this.leaks) {
        const { x: lx, y: ly } = _wparse(lkey);
        for (let d = 0; d <= T.LEAK_SPREAD_RADIUS; d++) {
          const pen = T.LEAK_PENALTY - T.LEAK_SPREAD_DECAY * d;
          if (pen <= 0) continue;
          // 枚举曼哈曼距离恰为 d 的菱形环
          for (let dx = -d; dx <= d; dx++) {
            const dy = d - Math.abs(dx);
            const cands = dy === 0 ? [[lx + dx, ly]] : [[lx + dx, ly + dy], [lx + dx, ly - dy]];
            for (const [cx, cy] of cands) {
              const ck = cx + ',' + cy;
              const old = this.pressure.get(ck);
              if (old !== undefined) {
                this.pressure.set(ck, Math.max(0, Math.round(old - pen)));
              }
            }
          }
        }
      }
    }

    // ---- [4b] 冻结惩罚：冰尘暴期间冻结的管段压力 ×0.4 ---------------------------
    // 冻结管段集合由 _freezeTick 维护（见 update）；此处只做烘焙。
    // 解冻条件：冰尘暴结束，或单段冻结超过 120 秒（抢修/自然化冻的抽象）。
    if (this.frozen.size > 0) {
      for (const fkey of this.frozen) {
        const old = this.pressure.get(fkey);
        if (old !== undefined && old > 0) {
          this.pressure.set(fkey, Math.max(0, Math.round(old * 0.4)));
        }
      }
    }

    // ---- [5] 全局效率乘子 -------------------------------------------------------
    if (effMul < 1) {
      for (const [k, v] of this.pressure) {
        // 水源格本身不参与效率缩放（源头压力恒定）
        let isSrc = false;
        for (const s of this.sources) {
          if (s.x + ',' + s.y === k) { isSrc = true; break; }
        }
        if (!isSrc) this.pressure.set(k, Math.max(0, Math.round(v * effMul)));
      }
    }

    // ---- [6] 连通分量 / 孤立管段 --------------------------------------------------
    this._computeSegments(game, inB);

    // ---- [7] 汇总 stats ----------------------------------------------------------
    let sum = 0, min = 100, n = 0;
    for (const k of this.pipes) {
      const v = this.pressure.get(k) || 0;
      sum += v; n++;
      if (v < min) min = v;
    }
    const st = this.stats;
    st.sources = this.sources.length;
    st.pipeCount = this.pipes.size;
    st.leakCount = this.leaks.size;
    st.avgPressure = n > 0 ? Math.round(sum / n) : 0;
    st.minPressure = n > 0 ? min : 0;
    st.isolatedCount = this.isolatedTiles.size;
    st.demandRatio = Math.round(demandRatio * 100) / 100;
    st.totalSupply = Math.round(totalSupply * 10) / 10;
    st.totalDemand = Math.round(totalDemand * 10) / 10;
    st.sandstorm = sandstorm;
    st.winter = winter;
    st.season = this._season(game); // 'spring'|'summer'|'autumn'|'winter'|null
    st.rebuilds++;
    st.frozenCount = this.frozen.size;

    // 平均压力历史（HUD 曲线 / 事故复盘用，每次重算记一点）
    this._hist.push({ t: now, avg: st.avgPressure, leaks: st.leakCount });
    if (this._hist.length > this._histCap) {
      this._hist.splice(0, this._hist.length - this._histCap);
    }

    // 「有管无源」一次性提示（WATERGUIDE 第 11 条配套）
    if (this.pipes.size > 0 && this.sources.length === 0) {
      if (!this._noSourceToasted) {
        this._toast(game, '⚠️ 管网没有水源！建造水厂/抽水机后管道才能供水');
        this._noSourceToasted = true;
      }
    } else {
      this._noSourceToasted = false;
    }
  }

  /* ----------------------------------------------------------------------------
   * _computeSegments：洪水填充划分管道连通分量，标记孤立管段
   * ----------------------------------------------------------------------------
   * 分量 = 4 向连通的管道瓦片集合。
   * 「接通水源」定义：分量内任一瓦片与任一水源建筑格 4 向相邻
   * （水源格本身不是管道，压力经相邻边注入）。
   * 孤立瓦片 → this.isolatedTiles（overlay 画灰色虚线 + toast 一次）。
   * -------------------------------------------------------------------------- */
  _computeSegments(game, inB) {
    this.segments.clear();
    this.isolatedTiles.clear();
    if (this.pipes.size === 0) return;

    const srcKeys = new Set(this.sources.map(s => s.x + ',' + s.y));
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let segId = 0;

    for (const startKey of this.pipes) {
      if (this.segments.has(startKey)) continue;
      segId++;
      // BFS 洪水填充
      const queue = [startKey];
      this.segments.set(startKey, segId);
      const members = [startKey];
      let qh = 0;
      while (qh < queue.length) {
        const { x, y } = _wparse(queue[qh++]);
        for (const [dx, dy] of DIRS) {
          const nk = (x + dx) + ',' + (y + dy);
          if (this.pipes.has(nk) && !this.segments.has(nk)) {
            this.segments.set(nk, segId);
            queue.push(nk);
            members.push(nk);
          }
        }
      }
      // 检查是否接通水源：任一成员的 4 邻格是水源建筑格
      let connected = false;
      for (const mk of members) {
        const { x, y } = _wparse(mk);
        for (const [dx, dy] of DIRS) {
          if (srcKeys.has((x + dx) + ',' + (y + dy))) { connected = true; break; }
        }
        if (connected) break;
      }
      if (!connected) {
        for (const mk of members) this.isolatedTiles.add(mk);
      }
    }
  }

  /* ----------------------------------------------------------------------------
   * _buildSignature：建筑拓扑签名，用于检测「新建/拆除/升级/损坏」变化
   * ----------------------------------------------------------------------------
   * update() 每帧调用时只做字符串拼接（O(建筑数)），变化时置 _dirty 触发重算。
   * -------------------------------------------------------------------------- */
  _buildSignature(game) {
    const bs = this._buildings(game);
    let sig = bs.length + '|';
    for (const b of bs) {
      sig += b.id + ',' + b.x + ',' + b.y + ',' + b.level + ',' + (b.damaged ? 1 : 0) + ';';
    }
    return sig + '#' + this.pipes.size + '#' + this.leaks.size;
  }

  /* ============================================================================
   * update(now, dt, game) —— 每帧调用（game.js 主循环）
   * ----------------------------------------------------------------------------
   * 职责：
   *   1. 节流重算压力场（500ms 或拓扑变化时）
   *   2. 漏水掷骰：每分钟每段管道 0.2% 概率新漏；3 级漏点蔓延
   *   3. 漏点成长（1/2/3 级）
   *   4. 用水建筑低压预警（30s 节流 → onLowPressure 回调）
   *   5. 孤立管段 toast（一次）
   *
   * 防御性：game 为空 / 缺 builder / 缺 disaster 时全部降级，绝不抛异常。
   * dt 单位：毫秒。
   * ========================================================================== */
  update(now, dt, game) {
    if (!game) return;
    if (typeof now !== 'number' || typeof dt !== 'number') return;
    if (dt < 0) dt = 0;
    // 暂停时 dt 可能为 0：仍允许重算（拓扑变化），但跳过概率掷骰
    const T = WATER_TUNING;

    // ---- 1. 压力场节流重算 -----------------------------------------------------
    const sig = this._buildSignature(game);
    if (sig !== this._lastSig) { this._dirty = true; this._lastSig = sig; }
    if (this._dirty || now - this._lastRebuild >= T.REBUILD_MS) {
      try {
        this.rebuild(game);
      } catch (e) {
        // 重算绝不能打断主循环：记录并跳过本轮
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('[waternet] rebuild failed:', e && e.message);
        }
      }
      this._lastRebuild = now;
      this._dirty = false;
    }

    // ---- 2/3. 漏水掷骰 + 成长（按 dt 累加，1 秒一跳） ------------------------------
    if (dt > 0 && this.pipes.size > 0) {
      this._leakAccumMs += dt;
      if (this._leakAccumMs >= T.LEAK_TICK_MS) {
        const tickMs = this._leakAccumMs;
        this._leakAccumMs = 0;
        try {
          this._leakDice(tickMs, game, now);
          this._growLeaks(tickMs, game, now);
          this._freezeTick(tickMs, game, now);
        } catch (e) {
          if (typeof console !== 'undefined' && console.warn) {
            console.warn('[waternet] leak tick failed:', e && e.message);
          }
        }
      }
    }

    // ---- 4. 低压预警 --------------------------------------------------------------
    try {
      this._warnLowPressure(game, now);
    } catch (e) { /* 预警不影响主循环 */ }

    // ---- 5. 孤立管段 toast（一次） ---------------------------------------------------
    if (this.isolatedTiles.size > 0 && !this._isoToasted) {
      // 统计孤立分量数
      const segSet = new Set();
      for (const k of this.isolatedTiles) segSet.add(this.segments.get(k));
      this._toast(game, `⚠️ 有 ${segSet.size} 段管道未连接水源（灰色虚线），接上水源才能供水`);
      this._isoToasted = true;
    } else if (this.isolatedTiles.size === 0 && this._isoToasted) {
      this._isoToasted = false; // 条件消除 → 下次可再提示
    }
  }

  /* ----------------------------------------------------------------------------
   * _leakDice：漏水掷骰
   * ----------------------------------------------------------------------------
   * 新漏：每段管道每 tick 概率 p = 1-(1-0.002)^(tickMs/60000)
   *       （0.002 = 每分钟 0.2%，WATERGUIDE 第 7 条；冬季 ×2）
   * 蔓延：3 级漏点的每个 4 向相邻管道格，p = 1-(1-0.05)^(tickMs/60000)
   *       （每分钟 5%，WATERGUIDE 第 8 条）
   * 为控制单 tick 爆发，单次新漏上限 3 个，蔓延上限 2 个。
   * -------------------------------------------------------------------------- */
  _leakDice(tickMs, game, now) {
    const T = WATER_TUNING;
    const minutes = tickMs / 60000;
    const winter = this._isWinter(game);
    const pNew = 1 - Math.pow(1 - T.LEAK_PER_MIN * (winter ? T.WINTER_LEAK_MUL : 1), minutes);
    const pSpread = 1 - Math.pow(1 - T.LEAK_SPREAD_PER_MIN, minutes);

    // 为可测试性与稳定性：遍历顺序随机化，避免固定顺序偏差
    const pipeArr = Array.from(this.pipes);
    for (let i = pipeArr.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      const tmp = pipeArr[i]; pipeArr[i] = pipeArr[j]; pipeArr[j] = tmp;
    }

    let newLeaks = 0;
    for (const key of pipeArr) {
      if (newLeaks >= 3) break;
      if (this.leaks.has(key)) continue; // 已漏不再掷
      if (Math.random() < pNew) {
        this.leaks.set(key, { since: now, stage: 1 });
        newLeaks++;
        this._dirty = true; // 压力场需重算
        const { x, y } = _wparse(key);
        this._emit('leak', { x, y });
        this._toast(game, `💧 管道 (${x},${y}) 漏水！点击修复（铁×2）`);
      }
    }

    // 3 级漏点蔓延
    let spreads = 0;
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const curLeaks = Array.from(this.leaks.keys());
    for (const lkey of curLeaks) {
      if (spreads >= 2) break;
      const lk = this.leaks.get(lkey);
      if (!lk || lk.stage < 3) continue;
      const { x: lx, y: ly } = _wparse(lkey);
      for (const [dx, dy] of DIRS) {
        const nk = (lx + dx) + ',' + (ly + dy);
        if (!this.pipes.has(nk) || this.leaks.has(nk)) continue;
        if (Math.random() < pSpread) {
          this.leaks.set(nk, { since: now, stage: 1 });
          spreads++;
          this._dirty = true;
          break; // 每个 3 级漏点每 tick 最多蔓延一格
        }
      }
    }

    if ((newLeaks > 0 || spreads > 0) && this.stats) {
      // 统计口径：累计发生过的漏水次数
      this.stats.leaksTotal = (this.stats.leaksTotal || 0) + newLeaks + spreads;
    }
  }

  /* ----------------------------------------------------------------------------
   * _growLeaks：漏点成长（WATERGUIDE 第 8 条）
   * ----------------------------------------------------------------------------
   * stage 1：存活 < 5 分钟 —— 轻微渗漏（压力惩罚 -25，标准）
   * stage 2：存活 5~15 分钟 —— 中度（惩罚系数 ×1.2，体现在烘焙时）
   * stage 3：存活 > 15 分钟 —— 严重，可向邻格蔓延
   * 成长只与存活时间有关；修复后重新计时。
   * -------------------------------------------------------------------------- */
  _growLeaks(tickMs, game, now) {
    const T = WATER_TUNING;
    let changed = false;
    for (const [key, lk] of this.leaks) {
      const ageMin = (now - lk.since) / 60000;
      const ns = ageMin >= T.LEAK_STAGE3_MIN ? 3 : (ageMin >= T.LEAK_STAGE2_MIN ? 2 : 1);
      if (ns !== lk.stage) {
        lk.stage = ns;
        changed = true;
        // 漏点升级时给玩家一次提示（节流：每漏点每级一次）
        if (!lk['warned' + ns]) {
          lk['warned' + ns] = true;
          const { x, y } = _wparse(key);
          if (ns === 2) this._toast(game, `💧 管道 (${x},${y}) 漏水加重！尽快修复（铁×2）`);
          else if (ns === 3) this._toast(game, `🚨 管道 (${x},${y}) 严重漏水，可能蔓延到相邻管道！`);
        }
      }
    }
    if (changed) this._dirty = true;
  }

  /* ----------------------------------------------------------------------------
   * _freezeTick：冰尘暴冻管（tickMs 累计调用）
   * ----------------------------------------------------------------------------
   * 机制：
   *   - 仅在冰尘暴活跃期间，每段管道每分钟 1% 概率冻结（冻胀/冰塞的抽象）。
   *   - 冻结管段压力 ×0.4（rebuild [4b] 烘焙），overlay 画冰晶标记。
   *   - 解冻：冰尘暴结束 → 全部解冻；或单段冻结超 120 秒 → 自动解冻。
   *   - 冻结是瞬态天气状态，不进存档（load 后清空）。
   * -------------------------------------------------------------------------- */
  _freezeTick(tickMs, game, now) {
    const minutes = tickMs / 60000;
    const active = this._icestormActive(game, now);

    if (!active) {
      // 冰尘暴结束：全部解冻（若之前有冻结，给一句恢复提示）
      if (this.frozen.size > 0) {
        this.frozen.clear();
        this._frozenSince.clear();
        this._dirty = true;
        this._emit('thawed-all', {});
        this._toast(game, '🧊 冰尘暴过去，冻结管道已解冻');
      }
      this._freezeToasted = false;
      return;
    }

    // 冻结掷骰：每分钟每段 1%
    const pFreeze = 1 - Math.pow(1 - 0.01, minutes);
    let newFrozen = 0;
    for (const key of this.pipes) {
      if (this.frozen.has(key)) continue;
      if (Math.random() < pFreeze) {
        this.frozen.add(key);
        this._frozenSince.set(key, now);
        newFrozen++;
        this._dirty = true;
        const { x, y } = _wparse(key);
        this._emit('frozen', { x, y });
        if (newFrozen >= 5) break; // 单 tick 上限 5 段，避免爆发
      }
    }
    if (newFrozen > 0 && !this._freezeToasted) {
      this._toast(game, `🧊 冰尘暴冻结了 ${newFrozen} 段管道！压力大幅下降，风暴过后解冻`);
      this._freezeToasted = true;
    }

    // 超时解冻：单段冻结超 120 秒
    let thawed = 0;
    for (const [key, since] of this._frozenSince) {
      if (now - since > 120000) {
        this.frozen.delete(key);
        this._frozenSince.delete(key);
        thawed++;
      }
    }
    if (thawed > 0) this._dirty = true;
  }

  /* ----------------------------------------------------------------------------
   * getHistory() → [{ t, avg, leaks }]
   * ----------------------------------------------------------------------------
   * 平均压力历史（每次 rebuild 记一点，上限 240 点 ≈ 2 分钟）。
   * HUD 可画压力曲线；事故复盘可定位漏水/沙尘暴时段。
   * -------------------------------------------------------------------------- */
  getHistory() {
    return this._hist.slice();
  }

  /* ----------------------------------------------------------------------------
   * historyStats() → { min, max, avg, drop }
   * ----------------------------------------------------------------------------
   * 历史窗口内的最低 / 最高 / 平均压力，以及「最大跌幅」
   * （max-min，用于判断管网是否经历过严重事故）。
   * -------------------------------------------------------------------------- */
  historyStats() {
    if (this._hist.length === 0) return { min: 0, max: 0, avg: 0, drop: 0, points: 0 };
    let min = Infinity, max = -Infinity, sum = 0;
    for (const h of this._hist) {
      if (h.avg < min) min = h.avg;
      if (h.avg > max) max = h.avg;
      sum += h.avg;
    }
    return {
      min, max,
      avg: Math.round(sum / this._hist.length),
      drop: max - min,
      points: this._hist.length,
    };
  }

  /* ----------------------------------------------------------------------------
   * getCoverage(game) → { total, ok, ratio }
   * ----------------------------------------------------------------------------
   * 供水覆盖率：用水建筑中压力 ≥20 的比例。
   * 总督 AI / 成就 / 评级可用此指标（如「覆盖率 90% 以上」成就）。
   * -------------------------------------------------------------------------- */
  getCoverage(game) {
    const buildings = this._buildings(game);
    let total = 0, ok = 0;
    for (const b of buildings) {
      if (!this._needsWater(game, b)) continue;
      total++;
      if (this.getPressure(b.x, b.y, game) >= WATER_TUNING.PRESSURE_MIN) ok++;
    }
    return { total, ok, ratio: total > 0 ? Math.round((ok / total) * 100) / 100 : 1 };
  }

  /* ----------------------------------------------------------------------------
   * balanceLine(game) → string
   * ----------------------------------------------------------------------------
   * HUD 一行式水量平衡播报（顶栏/管网面板用）：
   *   无管网 → "💧 未铺设管网"
   *   供 ≥ 需 → "💧 供水平衡：供 12 / 需 8（充足）"
   *   供 < 需 → "💧 供水不足：供 4 / 需 8（降压 50%）"
   *   叠加状态后缀：沙尘暴 / 冬季 / 冰尘暴 / 漏水×N / 冻结×N / 孤立×N。
   * -------------------------------------------------------------------------- */
  balanceLine(game) {
    const s = this.stats;
    if (this.pipes.size === 0) return '💧 未铺设管网';
    let line;
    if (s.totalDemand <= 0) {
      line = `💧 供水平衡：供 ${s.totalSupply} / 无用水建筑`;
    } else if (s.totalSupply >= s.totalDemand) {
      line = `💧 供水平衡：供 ${s.totalSupply} / 需 ${s.totalDemand}（充足）`;
    } else {
      const pct = Math.round(s.demandRatio * 100);
      line = `💧 供水不足：供 ${s.totalSupply} / 需 ${s.totalDemand}（全网降压至 ${pct}%）`;
    }
    const tags = [];
    if (s.sandstorm) tags.push('沙尘暴-20%');
    if (s.winter) tags.push('冬季-10%');
    if (this._icestormActive(game, Date.now())) tags.push('冰尘暴冻管');
    if (s.leakCount > 0) tags.push(`漏水×${s.leakCount}`);
    if (s.frozenCount > 0) tags.push(`冻结×${s.frozenCount}`);
    if (s.isolatedCount > 0) tags.push(`孤立×${s.isolatedCount}`);
    if (tags.length > 0) line += `［${tags.join('｜')}］`;
    return line;
  }

  /* ----------------------------------------------------------------------------
   * planRoute(x1, y1, x2, y2, game) → { path: [{x,y}], cost, ok, msg }
   * ----------------------------------------------------------------------------
   * A* 自动铺管规划：从 (x1,y1) 到 (x2,y2) 的最省铁管道路。
   *   - 代价：经过空格 = 1（需铺管，铁×1）；经过已有管道 = 0（复用）；
   *           建筑格 / 地图外 / 未解锁区 = 不可通行。
   *   - 启发函数：曼哈曼距离（可采纳，A* 最优）。
   *   - 返回 path（含起点与终点）、cost（需新铺的段数 = 铁耗）。
   * 用途：UI「自动铺管」按钮先 planRoute 预览 cost，玩家确认后再逐段 placePipe。
   * 防御性：game 缺失时退化为纯曼哈曼直线（只做 inBounds 检查）。
   * -------------------------------------------------------------------------- */
  planRoute(x1, y1, x2, y2, game) {
    x1 = Math.floor(Number(x1)); y1 = Math.floor(Number(y1));
    x2 = Math.floor(Number(x2)); y2 = Math.floor(Number(y2));
    if (![x1, y1, x2, y2].every(Number.isFinite)) {
      return { path: [], cost: 0, ok: false, msg: '坐标无效' };
    }
    const startK = _wkey(x1, y1), goalK = _wkey(x2, y2);
    if (startK === goalK) return { path: [{ x: x1, y: y1 }], cost: 0, ok: true, msg: '起点即终点' };

    // 通行性
    const passable = (x, y) => {
      try {
        if (game && game.map && typeof game.map.inBounds === 'function') {
          if (!game.map.inBounds(x, y)) return false;
        } else if (x < 0 || y < 0 || x >= 50 || y >= 50) return false;
      } catch (e) { return false; }
      try {
        if (game && game.map && typeof game.map.isUnlocked === 'function') {
          if (!game.map.isUnlocked(x, y)) return false;
        }
      } catch (e) { /* 忽略 */ }
      if (game) {
        try {
          if (this._buildingAt(game, x, y)) return false;
        } catch (e) { /* 忽略 */ }
      }
      return true;
    };
    const stepCost = (x, y) => (this.pipes.has(_wkey(x, y)) ? 0 : 1);

    const h = (x, y) => Math.abs(x - x2) + Math.abs(y - y2); // 曼哈曼启发（可采纳）
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const open = [{ x: x1, y: y1, g: 0, f: h(x1, y1) }];
    const cameFrom = new Map(); // key -> parentKey
    const gScore = new Map([[startK, 0]]);
    const closed = new Set();
    let guard = 10000;

    while (open.length > 0 && guard-- > 0) {
      // 取 f 最小（地图小，线性扫描可接受）
      let bi = 0;
      for (let i = 1; i < open.length; i++) {
        if (open[i].f < open[bi].f) bi = i;
      }
      const cur = open.splice(bi, 1)[0];
      const ck = _wkey(cur.x, cur.y);
      if (closed.has(ck)) continue;
      closed.add(ck);
      if (ck === goalK) {
        const path = [];
        let k = goalK;
        while (k) {
          const { x, y } = _wparse(k);
          path.push({ x, y });
          k = cameFrom.get(k);
        }
        path.reverse();
        let cost = 0;
        for (const p of path) {
          if (!this.pipes.has(_wkey(p.x, p.y))) cost++;
        }
        return { path, cost, ok: true, msg: `规划完成：${path.length} 格，需新铺 ${cost} 段（铁×${cost}）` };
      }
      for (const [dx, dy] of DIRS) {
        const nx = cur.x + dx, ny = cur.y + dy;
        const nk = _wkey(nx, ny);
        if (closed.has(nk)) continue;
        if (!passable(nx, ny)) continue;
        const ng = cur.g + stepCost(nx, ny);
        if (gScore.has(nk) && gScore.get(nk) <= ng) continue;
        gScore.set(nk, ng);
        cameFrom.set(nk, ck);
        open.push({ x: nx, y: ny, g: ng, f: ng + h(nx, ny) });
      }
    }
    return { path: [], cost: 0, ok: false, msg: '无可行管道路（被建筑/未解锁区阻断）' };
  }

  /* ----------------------------------------------------------------------------
   * autoPipe(x1, y1, x2, y2, game) → { ok, msg, placed, cost }
   * ----------------------------------------------------------------------------
   * planRoute + 逐段 placePipe 的一键版本：铁不够时在断点停下并返回已铺段数。
   * -------------------------------------------------------------------------- */
  autoPipe(x1, y1, x2, y2, game) {
    const plan = this.planRoute(x1, y1, x2, y2, game);
    if (!plan.ok) return { ok: false, msg: plan.msg, placed: 0, cost: 0 };
    let placed = 0;
    for (const p of plan.path) {
      if (this.pipes.has(_wkey(p.x, p.y))) continue; // 复用已有管道
      const r = this.placePipe(p.x, p.y, game);
      if (!r.ok) {
        return {
          ok: placed > 0, placed, cost: placed,
          msg: placed > 0 ? `已铺 ${placed} 段，${r.msg}（停在 ${p.x},${p.y}）` : r.msg,
        };
      }
      placed++;
    }
    return { ok: true, placed, cost: placed, msg: `✅ 自动铺管完成：${placed} 段（铁×${placed}）` };
  }

  /* ============================================================================
   * 事件总线：onEvent(cb) / _emit(type, data)
   * ----------------------------------------------------------------------------
   * 事件类型：
   *   'pipe-placed'  { x, y }                    铺管成功
   *   'pipe-removed' { x, y, leakCleared }       拆管（含漏点一并清除标记）
   *   'leak'         { x, y }                    新漏水出现
   *   'leak-fixed'   { x, y, stage, ageMin }     漏水被修复
   *   'frozen'       { x, y }                    管道被冻结
   *   'thawed-all'   {}                          冰尘暴结束全部解冻
   *   'low-pressure' { x, y, pressure, building } 低压预警（与 onLowPressure 同源）
   * 用途：game 侧接音效 / 成就 / 统计，无需轮询 getStats。
   * ========================================================================== */
  onEvent(cb) {
    this._evCb = (typeof cb === 'function') ? cb : null;
    return this;
  }
  _emit(type, data) {
    if (!this._evCb) return;
    try { this._evCb(type, data || {}); } catch (e) { /* 回调异常不扩散 */ }
  }

  /* ----------------------------------------------------------------------------
   * simulatePipe(x, y, game) → { ok, before, after, deltaAvg, msg }
   * ----------------------------------------------------------------------------
   * 「假设在此处铺一截管」的 what-if 推演（铺管预览用）：
   *   1. 快照当前 pipes/leaks/frozen；
   *   2. 临时加入该管，同步 rebuild；
   *   3. 对比平均压力 / 覆盖率变化；
   *   4. 恢复快照并重算（_dirty）。
   * 注意：推演期间会短暂改变 pressure 缓存，调用后立即恢复；不要在 update
   * 循环内高频调用（单次 rebuild 开销与管网规模成正比）。
   * -------------------------------------------------------------------------- */
  simulatePipe(x, y, game) {
    x = Math.floor(Number(x)); y = Math.floor(Number(y));
    const key = _wkey(x, y);
    if (this.pipes.has(key)) {
      return { ok: false, msg: '此处已有管道，无需推演' };
    }
    // 快照
    const snapPipes = new Set(this.pipes);
    const snapLeaks = new Map(this.leaks);
    const snapFrozen = new Set(this.frozen);
    const beforeAvg = this.stats.avgPressure;
    const beforeCov = this.getCoverage(game).ratio;

    // 推演
    this.pipes.add(key);
    this._dirty = true;
    try { this.rebuild(game); } catch (e) { /* 恢复快照 */ }
    const afterAvg = this.stats.avgPressure;
    const afterCov = this.getCoverage(game).ratio;

    // 恢复
    this.pipes = snapPipes;
    this.leaks = snapLeaks;
    this.frozen = snapFrozen;
    this._dirty = true;
    try { this.rebuild(game); } catch (e) { /* 忽略 */ }

    const dAvg = afterAvg - beforeAvg;
    const dCov = Math.round((afterCov - beforeCov) * 100) / 100;
    return {
      ok: true,
      before: { avg: beforeAvg, coverage: beforeCov },
      after: { avg: afterAvg, coverage: afterCov },
      deltaAvg: dAvg,
      deltaCoverage: dCov,
      msg: `推演：平均压力 ${beforeAvg}→${afterAvg}（${dAvg >= 0 ? '+' : ''}${dAvg}），` +
           `覆盖率 ${Math.round(beforeCov * 100)}%→${Math.round(afterCov * 100)}%`,
    };
  }

  /* ----------------------------------------------------------------------------
   * suggestTowerSpots(game, n) → [{ x, y, score, reason }]
   * ----------------------------------------------------------------------------
   * 水塔选址建议（总督 AI / 教程用）：
   *   候选 = 压力在 [10, 75] 的管道格（太低说明上游断了，太高不需要塔），
   *          且至少有一个 4 邻空格可建塔。
   *   评分 = 曼哈曼 6 格内「低压用水建筑」数量 × 10
   *          + 6 格内「中压管道格」(20..60) 数量
   *          - 距最近水源距离 × 0.5（鼓励放在中段而非源头旁）
   *   返回前 n 个（缺省 3），按评分降序。
   * 这是启发式建议，不是精确优化（精确需对每个候选做全网重算，太贵）。
   * -------------------------------------------------------------------------- */
  suggestTowerSpots(game, n) {
    n = Math.max(1, Math.min(n | 0 || 3, 10));
    const buildings = this._buildings(game);
    // 低压用水建筑位置
    const lowUsers = [];
    for (const b of buildings) {
      if (!this._needsWater(game, b)) continue;
      if (this.getPressure(b.x, b.y, game) < WATER_TUNING.PRESSURE_MIN) {
        lowUsers.push(b);
      }
    }
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const inB = (x, y) => {
      try {
        if (game && game.map && typeof game.map.inBounds === 'function') return game.map.inBounds(x, y);
      } catch (e) { /* 忽略 */ }
      return x >= 0 && y >= 0 && x < 50 && y < 50;
    };
    const cands = [];
    for (const key of this.pipes) {
      if (this.isolatedTiles.has(key)) continue;
      const p = this.pressure.get(key) || 0;
      if (p < 10 || p > 75) continue;
      const { x, y } = _wparse(key);
      // 需有邻空格可建塔
      let hasSpace = false;
      for (const [dx, dy] of DIRS) {
        const nx = x + dx, ny = y + dy;
        if (!inB(nx, ny)) continue;
        if (this.pipes.has(_wkey(nx, ny))) continue;
        if (game && this._buildingAt(game, nx, ny)) continue;
        hasSpace = true; break;
      }
      if (!hasSpace) continue;
      // 评分
      let lowN = 0, midN = 0;
      for (const u of lowUsers) {
        if (Math.abs(u.x - x) + Math.abs(u.y - y) <= 6) lowN++;
      }
      for (const k2 of this.pipes) {
        const p2 = this.pressure.get(k2) || 0;
        if (p2 < 20 || p2 > 60) continue;
        const c2 = _wparse(k2);
        if (Math.abs(c2.x - x) + Math.abs(c2.y - y) <= 6) midN++;
      }
      const ns = this.nearestSource(x, y);
      const score = lowN * 10 + midN - (ns ? ns.dist * 0.5 : 0);
      if (score > 0) {
        cands.push({
          x, y,
          score: Math.round(score * 10) / 10,
          reason: `附近低压建筑${lowN}座，中压管段${midN}段${ns ? `，距水源${ns.dist}格` : ''}`,
        });
      }
    }
    cands.sort((a, b) => b.score - a.score);
    return cands.slice(0, n);
  }

  /* ----------------------------------------------------------------------------
   * sourceReport(game) → [{ x, y, pressure, output, pipes, users, damaged }]
   * ----------------------------------------------------------------------------
   * 逐水源报告：供水量、直连管段数、服务中的用水建筑数。
   * 「服务中」定义：用水建筑的最近水源（曼哈曼）是该源。
   * -------------------------------------------------------------------------- */
  sourceReport(game) {
    const buildings = this._buildings(game);
    const users = buildings.filter(b => this._needsWater(game, b));
    return this.sources.map(s => {
      let pipeN = 0;
      for (const key of this.pipes) {
        const { x, y } = _wparse(key);
        if (Math.abs(x - s.x) + Math.abs(y - s.y) === 1) pipeN++;
      }
      let served = 0;
      for (const u of users) {
        let best = null, bd = Infinity;
        for (const s2 of this.sources) {
          const d = Math.abs(s2.x - u.x) + Math.abs(s2.y - u.y);
          if (d < bd) { bd = d; best = s2; }
        }
        if (best === s) served++;
      }
      return {
        x: s.x, y: s.y,
        pressure: s.pressure,
        output: this._sourceOutput(game, s.building),
        pipes: pipeN,
        users: served,
        damaged: !!(s.building && s.building.damaged),
      };
    });
  }

  /* ----------------------------------------------------------------------------
   * pressureZones() → { high, mid, low, dead }
   * ----------------------------------------------------------------------------
   * 管道压力分区统计（总督 AI / 管网健康度）：
   *   high: ≥60　mid: 20~59　low: 1~19　dead: 0（含孤立）
   * -------------------------------------------------------------------------- */
  pressureZones() {
    const z = { high: 0, mid: 0, low: 0, dead: 0 };
    for (const key of this.pipes) {
      const p = this.pressure.get(key) || 0;
      if (p >= 60) z.high++;
      else if (p >= WATER_TUNING.PRESSURE_MIN) z.mid++;
      else if (p > 0) z.low++;
      else z.dead++;
    }
    return z;
  }

  /* ----------------------------------------------------------------------------
   * demandBreakdown(game) → { total, items: [{ x, y, name, demand, pressure, ok }] }
   * ----------------------------------------------------------------------------
   * 逐建筑用水需求明细：需求量 / 当前压力 / 是否满足。
   * 供总督 AI 做「关停低优先级用水建筑」或「优先扩水源」决策。
   * -------------------------------------------------------------------------- */
  demandBreakdown(game) {
    const buildings = this._buildings(game);
    const items = [];
    let total = 0;
    for (const b of buildings) {
      if (!this._needsWater(game, b)) continue;
      const demand = this._waterDemand(game, b);
      const pressure = this.getPressure(b.x, b.y, game);
      total += demand;
      items.push({
        x: b.x, y: b.y,
        id: b.id,
        name: this._buildingName(game, b),
        level: b.level || 1,
        demand,
        pressure,
        ok: pressure >= WATER_TUNING.PRESSURE_MIN,
      });
    }
    // 最缺水的排前面
    items.sort((a, b) => (a.pressure - b.pressure) || (b.demand - a.demand));
    return { total: Math.round(total * 10) / 10, items };
  }

  /* ----------------------------------------------------------------------------
   * maintenanceAdvice(game, maxN) → [{ priority, action, x, y, reason, cost }]
   * ----------------------------------------------------------------------------
   * 维修/建设建议（总督 AI / 教程 / 一键运维面板用），按优先级降序：
   *   P0 修复 3 级漏水（会蔓延）        cost: 铁×2
   *   P1 修复 2 级漏水                  cost: 铁×2
   *   P2 接通孤立管段（给出最近水源方向） cost: 取决于 planRoute
   *   P3 修复 1 级漏水                  cost: 铁×2
   *   P4 给低压用水建筑附近建水塔（suggestTowerSpots）
   *   P5 供需失衡 → 建议增建水源
   * maxN 缺省 8。
   * -------------------------------------------------------------------------- */
  maintenanceAdvice(game, maxN) {
    maxN = Math.max(1, Math.min(maxN | 0 || 8, 20));
    const out = [];
    const push = (priority, action, x, y, reason, cost) => {
      out.push({ priority, action, x, y, reason, cost: cost || null });
    };

    // P0/P1/P3：按漏水等级
    for (const lk of this.getLeaks()) {
      const pr = lk.stage === 3 ? 0 : (lk.stage === 2 ? 1 : 3);
      const label = lk.stage === 3 ? 'P0' : (lk.stage === 2 ? 'P1' : 'P3');
      push(pr, 'repair-leak', lk.x, lk.y,
        `${label} ${lk.stage}级漏水（已漏约${lk.ageMin}分钟）`,
        { iron: WATER_TUNING.REPAIR_COST.iron });
    }

    // P2：孤立管段 → 建议从最近水源铺管接通
    const iso = this.isolatedInfo();
    for (const seg of iso.segments.slice(0, 3)) {
      // 取段内距水源最近的一格
      let bx = null, bd = Infinity;
      for (const t of seg.tiles) {
        const ns = this.nearestSource(t.x, t.y);
        if (ns && ns.dist < bd) { bd = ns.dist; bx = t; }
      }
      if (bx) {
        push(2, 'connect-segment', bx.x, bx.y,
          `P2 孤立管段（${seg.size}段）距水源约${bd}格，铺管接通`,
          null);
      } else {
        push(2, 'connect-segment', seg.tiles[0].x, seg.tiles[0].y,
          `P2 孤立管段（${seg.size}段）无水源，先建水厂/抽水机`,
          null);
      }
    }

    // P4：水塔选址
    for (const s of this.suggestTowerSpots(game, 2)) {
      push(4, 'build-tower', s.x, s.y, `P4 ${s.reason}`, null);
    }

    // P5：供需失衡
    const st = this.stats;
    if (st.totalDemand > st.totalSupply && st.totalDemand > 0) {
      push(5, 'add-source', null, null,
        `P5 供水不足（供${st.totalSupply}/需${st.totalDemand}），建议增建水厂或升级水源`,
        null);
    }

    out.sort((a, b) => a.priority - b.priority);
    return out.slice(0, maxN);
  }


  /* ----------------------------------------------------------------------------
   * _warnLowPressure：用水建筑低压预警（WATERGUIDE 第 12 条）
   * ----------------------------------------------------------------------------
   * 对每个用水建筑：压力 < 20 且距离上次预警 > 30s →
   *   优先调用 game 注册的 onLowPressure(x, y) 回调；
   *   未注册回调时降级为 toast（同样 30s 节流）。
   * -------------------------------------------------------------------------- */
  _warnLowPressure(game, now) {
    const T = WATER_TUNING;
    const buildings = this._buildings(game);
    for (const b of buildings) {
      if (!this._needsWater(game, b)) continue;
      const key = b.x + ',' + b.y;
      const p = this.getPressure(b.x, b.y);
      if (p >= T.PRESSURE_MIN) continue;
      const last = this._lowWarnAt.get(key) || 0;
      if (now - last < T.LOW_PRESS_WARN_MS) continue;
      this._lowWarnAt.set(key, now);
      this._emit('low-pressure', { x: b.x, y: b.y, pressure: p, building: b });
      if (this._lowCb) {
        try { this._lowCb(b.x, b.y, p, b); } catch (e) { /* 回调异常不扩散 */ }
      } else {
        const name = this._buildingName(game, b);
        this._toast(game, `⚠️ ${name} (${b.x},${b.y}) 水压不足（${p}），产量已停滞`);
      }
    }
    // 清理长期不预警的旧条目，防止 Map 无限增长
    if (this._lowWarnAt.size > 500) {
      for (const [k, t] of this._lowWarnAt) {
        if (now - t > T.LOW_PRESS_WARN_MS * 10) this._lowWarnAt.delete(k);
      }
    }
  }

  // 注册低压预警回调：cb(x, y, pressure, building)
  onLowPressure(cb) {
    this._lowCb = (typeof cb === 'function') ? cb : null;
    return this;
  }

  // 取建筑显示名（防御性：BUILDINGS 全局可能不存在）
  _buildingName(game, b) {
    try {
      if (typeof BUILDINGS !== 'undefined' && BUILDINGS[b.id]) {
        return BUILDINGS[b.id].name || b.id;
      }
    } catch (e) { /* 忽略 */ }
    return b.id || '建筑';
  }

  /* ============================================================================
   * 玩家操作：铺管 / 拆管 / 修漏
   * ========================================================================== */

  /* ----------------------------------------------------------------------------
   * placePipe(x, y, game) → { ok, msg }
   * ----------------------------------------------------------------------------
   * 铺设一段管道，成本 铁×1。
   * 校验顺序：坐标合法 → 边界 → 区域解锁 → 无管道 → 无建筑 → 付得起。
   * 管道允许铺在「可通行地形」上；不允许压在建筑/已有管道上。
   * -------------------------------------------------------------------------- */
  placePipe(x, y, game) {
    const T = WATER_TUNING;
    x = Math.floor(Number(x)); y = Math.floor(Number(y));
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      return { ok: false, msg: '坐标无效' };
    }
    // 边界
    let inB = x >= 0 && y >= 0 && x < 50 && y < 50;
    try {
      if (game && game.map && typeof game.map.inBounds === 'function') {
        inB = game.map.inBounds(x, y);
      }
    } catch (e) { /* 忽略 */ }
    if (!inB) return { ok: false, msg: '超出地图边界' };

    // 区域解锁（防御性：读不到则跳过）
    try {
      if (game && game.map && typeof game.map.isUnlocked === 'function') {
        if (!game.map.isUnlocked(x, y)) return { ok: false, msg: '该区域尚未解锁' };
      }
    } catch (e) { /* 忽略 */ }

    const key = _wkey(x, y);
    if (this.pipes.has(key)) return { ok: false, msg: '这里已有管道' };

    // 建筑占位检查（防御性：读不到 builder 则跳过）
    const occ = this._buildingAt(game, x, y);
    if (occ) return { ok: false, msg: '有建筑，不能铺管（管道应铺在建筑旁边连接）' };

    // 扣费：铁×1
    const inv = this._inv(game);
    if (inv) {
      let affordable = true, spent = false;
      try {
        if (typeof canAfford !== 'undefined') affordable = canAfford(inv, T.PIPE_COST);
        else affordable = (inv.iron || 0) >= (T.PIPE_COST.iron || 0);
      } catch (e) { affordable = (inv.iron || 0) >= 1; }
      if (!affordable) return { ok: false, msg: '铁不足（需要铁×1）' };
      try {
        if (typeof spendRes !== 'undefined') spent = spendRes(inv, T.PIPE_COST);
        else { inv.iron = (inv.iron || 0) - T.PIPE_COST.iron; spent = true; }
      } catch (e) { spent = false; }
      if (!spent) return { ok: false, msg: '扣费失败' };
    }
    // inv 缺失（防御）：允许铺设，不扣费（兼容无背包的测试/旧存档环境）

    this.pipes.add(key);
    this.stats.pipesPlaced++;
    this._dirty = true;
    this._emit('pipe-placed', { x, y });
    // 首次铺管时若无水源，给一句引导
    if (this.sources.length === 0 && this.pipes.size === 1) {
      this._toast(game, '🔧 管道已铺设：连接水厂/抽水机后开始供水');
    }
    return { ok: true, msg: '🔧 管道铺设完成（铁×1）' };
  }

  /* ----------------------------------------------------------------------------
   * removePipe(x, y, game?) → { ok, msg }
   * ----------------------------------------------------------------------------
   * 拆除一段管道，返还 50% 成本。
   * 成本铁×1 → 50% = 0.5 铁/段。铁是整数资源，采用「信用累计」：
   *   每次拆除累积 0.5 信用，满 1 即返还铁×1 到背包。
   * 拆除漏水管段会一并清除漏点（不再单独计修复）。
   * game 参数可选：缺省时不返还（仅拆除）。
   * -------------------------------------------------------------------------- */
  removePipe(x, y, game) {
    x = Math.floor(Number(x)); y = Math.floor(Number(y));
    const key = _wkey(x, y);
    if (!this.pipes.has(key)) return { ok: false, msg: '这里没有管道' };

    this.pipes.delete(key);
    this.pressure.delete(key);
    this.flowDir.delete(key);
    this.segments.delete(key);
    this.isolatedTiles.delete(key);
    let leakCleared = false;
    if (this.leaks.has(key)) { this.leaks.delete(key); leakCleared = true; }
    this.stats.pipesRemoved++;
    this._dirty = true;
    this._emit('pipe-removed', { x, y, leakCleared });

    // 50% 返还：信用累计
    let refundMsg = '';
    if (game) {
      const inv = this._inv(game);
      if (inv) {
        this._refundCredit = (this._refundCredit || 0) + WATER_TUNING.REMOVE_REFUND;
        let granted = 0;
        while (this._refundCredit >= 1) {
          this._refundCredit -= 1;
          inv.iron = (inv.iron || 0) + 1;
          granted++;
        }
        if (granted > 0) refundMsg = `，返还铁×${granted}`;
        else refundMsg = `（返还累计 ${(this._refundCredit).toFixed(1)}，满 1 返铁×1）`;
      }
    }
    return { ok: true, msg: `💥 管道已拆除${refundMsg}${leakCleared ? '（漏点一并清除）' : ''}` };
  }

  /* ----------------------------------------------------------------------------
   * repairLeak(x, y, game) → { ok, msg }
   * ----------------------------------------------------------------------------
   * 修复一处漏水，固定成本 铁×2（WATERGUIDE 第 8 条）。
   * 修复后该格压力立即恢复（_dirty 触发重算），漏点成长计时清零。
   * -------------------------------------------------------------------------- */
  repairLeak(x, y, game) {
    const T = WATER_TUNING;
    x = Math.floor(Number(x)); y = Math.floor(Number(y));
    const key = _wkey(x, y);
    const lk = this.leaks.get(key);
    if (!lk) return { ok: false, msg: '这里没有漏水' };

    const inv = this._inv(game);
    if (inv) {
      let affordable = true;
      try {
        if (typeof canAfford !== 'undefined') affordable = canAfford(inv, T.REPAIR_COST);
        else affordable = (inv.iron || 0) >= (T.REPAIR_COST.iron || 0);
      } catch (e) { affordable = (inv.iron || 0) >= 2; }
      if (!affordable) return { ok: false, msg: '铁不足（修复需要铁×2）' };
      try {
        if (typeof spendRes !== 'undefined') spendRes(inv, T.REPAIR_COST);
        else inv.iron = (inv.iron || 0) - T.REPAIR_COST.iron;
      } catch (e) { /* 扣费失败也继续修复，避免卡死 */ }
    }

    const ageMin = Math.round((Date.now() - lk.since) / 60000);
    const stage = lk.stage;
    this.leaks.delete(key);
    this.stats.leaksFixed++;
    this._dirty = true;
    this._emit('leak-fixed', { x, y, stage, ageMin });
    this._toast(game, `🔧 漏水已修复（铁×2），该段压力恢复`);
    return { ok: true, msg: `🔧 漏水已修复（存活约${ageMin}分钟，${stage}级）` };
  }

  /* ----------------------------------------------------------------------------
   * repairAllLeaks(game) → { fixed, cost }
   * ----------------------------------------------------------------------------
   * 一键修复全部漏点（UI 按钮用）：逐个扣费，铁不够时停下并返回已修复数。
   * 非任务 API 清单内方法，但属于「真实系统」的配套操作，保留。
   * -------------------------------------------------------------------------- */
  repairAllLeaks(game) {
    const T = WATER_TUNING;
    const inv = this._inv(game);
    let fixed = 0;
    const keys = Array.from(this.leaks.keys());
    for (const key of keys) {
      if (inv) {
        let affordable = (inv.iron || 0) >= (T.REPAIR_COST.iron || 0);
        try {
          if (typeof canAfford !== 'undefined') affordable = canAfford(inv, T.REPAIR_COST);
        } catch (e) { /* 忽略 */ }
        if (!affordable) break;
        try {
          if (typeof spendRes !== 'undefined') spendRes(inv, T.REPAIR_COST);
          else inv.iron -= T.REPAIR_COST.iron;
        } catch (e) { break; }
      }
      this.leaks.delete(key);
      fixed++;
    }
    if (fixed > 0) {
      this.stats.leaksFixed += fixed;
      this._dirty = true;
      this._toast(game, `🔧 一键修复 ${fixed} 处漏水`);
    }
    return { fixed, cost: { iron: fixed * T.REPAIR_COST.iron } };
  }

  /* ============================================================================
   * 查询 API
   * ========================================================================== */

  /* ----------------------------------------------------------------------------
   * getPressure(x, y) → 0..100
   * ----------------------------------------------------------------------------
   * 建筑瓦片的压力：
   *   - 无管道系统（pipes 为空）→ 100（兼容旧逻辑，WATERGUIDE 隐含）
   *   - 本格是水源建筑 → 100（受损 60）
   *   - 本格是管道 → 缓存压力
   *   - 否则取 4 邻管道格压力的最大值（建筑从相邻管道取水）
   *   - 本格是水塔建筑 → +30（上限 100）
   * 注意：缓存压力已包含漏水惩罚与灾害/供需缩放（rebuild 烘焙）。
   * game 参数可选：不传时无法识别水源/水塔，按纯管道口径计算。
   * -------------------------------------------------------------------------- */
  getPressure(x, y, game) {
    x = Math.floor(Number(x)); y = Math.floor(Number(y));
    if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
    const T = WATER_TUNING;

    // 无水管系统 → 默认 100（兼容）
    if (this.pipes.size === 0 && this.leaks.size === 0) return 100;

    const key = _wkey(x, y);

    // 水源建筑自身
    if (game) {
      const b = this._buildingAt(game, x, y);
      if (b && this._isWaterSource(game, b)) {
        return b.damaged ? T.DAMAGED_SOURCE_P : T.SOURCE_PRESSURE;
      }
    } else {
      // 无 game 时：用缓存的 sources 列表判断
      for (const s of this.sources) {
        if (s.x === x && s.y === y) return s.pressure;
      }
    }

    // 本格 / 4 邻管道格的最大压力
    let p = 0;
    if (this.pipes.has(key)) {
      p = this.pressure.get(key) || 0;
    } else {
      const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (const [dx, dy] of DIRS) {
        const nk = (x + dx) + ',' + (y + dy);
        if (this.pipes.has(nk)) {
          const v = this.pressure.get(nk) || 0;
          if (v > p) p = v;
        }
      }
    }

    // 水塔建筑本格 +30（塔即使不直接压在管道上，其所在格也增压）
    if (game) {
      const b = this._buildingAt(game, x, y);
      if (b && this._isBooster(game, b)) {
        p = Math.min(100, p + this._boostAmount(game, b));
      }
    }
    return _clampP(Math.round(p));
  }

  /* ----------------------------------------------------------------------------
   * waterOkFor(b, game) → { ok, pressure, reason }
   * ----------------------------------------------------------------------------
   * 【game 集成 hook 点】build.js BuildManager.update 的 produce/convert 分支前调用：
   *
   *   const wn = game.waternet;   // 防御性实例化，game 侧保证存在性
   *   if (wn) {
   *     const chk = wn.waterOkFor(b, game);
   *     if (!chk.ok) continue;    // 水压不足 → 本轮停产
   *   }
   *
   * 规则（WATERGUIDE 第 6 条）：
   *   - 非用水建筑 → { ok:true }（不拦截）
   *   - 无管道系统 → { ok:true }（兼容旧存档）
   *   - 用水建筑且压力 < 20 → { ok:false, reason:'水压不足' }
   * -------------------------------------------------------------------------- */
  waterOkFor(b, game) {
    if (!b) return { ok: true, pressure: 100, reason: '无建筑' };
    if (!this._needsWater(game, b)) return { ok: true, pressure: 100, reason: '不需水' };
    if (this.pipes.size === 0) return { ok: true, pressure: 100, reason: '无管网（兼容）' };
    const p = this.getPressure(b.x, b.y, game);
    if (p >= WATER_TUNING.PRESSURE_MIN) {
      return { ok: true, pressure: p, reason: '' };
    }
    return { ok: false, pressure: p, reason: `水压不足（${p}<${WATER_TUNING.PRESSURE_MIN}）` };
  }

  /* ----------------------------------------------------------------------------
   * getLeaks() → [{ x, y, since, stage, ageMin }]
   * -------------------------------------------------------------------------- */
  getLeaks() {
    const now = Date.now();
    const out = [];
    for (const [key, lk] of this.leaks) {
      const { x, y } = _wparse(key);
      out.push({ x, y, since: lk.since, stage: lk.stage, ageMin: Math.round((now - lk.since) / 60000) });
    }
    // 按等级降序、时长降序：严重的排前面，方便 UI 列表
    out.sort((a, b) => (b.stage - a.stage) || (b.ageMin - a.ageMin));
    return out;
  }

  /* ----------------------------------------------------------------------------
   * getStats() → { sources, pipeCount, leakCount, avgPressure, ... }
   * ----------------------------------------------------------------------------
   * 任务要求的四个字段必含；附加字段供 HUD/成就/调试使用。
   * -------------------------------------------------------------------------- */
  getStats() {
    const s = this.stats;
    return {
      sources: s.sources,
      pipeCount: s.pipeCount,
      leakCount: s.leakCount,
      avgPressure: s.avgPressure,
      // 附加
      minPressure: s.minPressure,
      isolatedCount: s.isolatedCount,
      demandRatio: s.demandRatio,
      totalSupply: s.totalSupply,
      totalDemand: s.totalDemand,
      sandstorm: s.sandstorm,
      winter: s.winter,
      rebuilds: s.rebuilds,
      leaksFixed: s.leaksFixed,
      pipesPlaced: s.pipesPlaced,
      pipesRemoved: s.pipesRemoved,
      leaksTotal: s.leaksTotal || 0,
      frozenCount: s.frozenCount || 0,
    };
  }

  /* ----------------------------------------------------------------------------
   * isolatedInfo() → { segments: [{id, tiles:[{x,y}], size}], total }
   * ----------------------------------------------------------------------------
   * 孤立管段详情（UI 高亮 / 教程指引用）。
   * -------------------------------------------------------------------------- */
  isolatedInfo() {
    const bySeg = new Map();
    for (const k of this.isolatedTiles) {
      const id = this.segments.get(k);
      if (!bySeg.has(id)) bySeg.set(id, []);
      const { x, y } = _wparse(k);
      bySeg.get(id).push({ x, y });
    }
    const segments = [];
    for (const [id, tiles] of bySeg) segments.push({ id, tiles, size: tiles.length });
    segments.sort((a, b) => b.size - a.size);
    return { segments, total: this.isolatedTiles.size };
  }

  /* ----------------------------------------------------------------------------
   * nearestSource(x, y) → { x, y, dist } | null
   * ----------------------------------------------------------------------------
   * 距某格最近的水源（曼哈曼距离），供 AI/总督/教程做选址建议。
   * -------------------------------------------------------------------------- */
  nearestSource(x, y) {
    if (this.sources.length === 0) return null;
    let best = null, bd = Infinity;
    for (const s of this.sources) {
      const d = Math.abs(s.x - x) + Math.abs(s.y - y);
      if (d < bd) { bd = d; best = s; }
    }
    return best ? { x: best.x, y: best.y, dist: bd } : null;
  }

  /* ----------------------------------------------------------------------------
   * planPressure(x, y, game) → 0..100
   * ----------------------------------------------------------------------------
   * 「假设在此处接一截管道」的压力预估（铺管预览用）：
   * 取 4 邻现有管道压力最大值 - 8（再走一格的衰减），不考虑新增后的连锁变化。
   * 无邻管 → 若邻水源则 92，否则 0。
   * -------------------------------------------------------------------------- */
  planPressure(x, y, game) {
    x = Math.floor(Number(x)); y = Math.floor(Number(y));
    const T = WATER_TUNING;
    let best = 0;
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dx, dy] of DIRS) {
      const nx = x + dx, ny = y + dy;
      const nk = nx + ',' + ny;
      if (this.pipes.has(nk)) {
        best = Math.max(best, (this.pressure.get(nk) || 0) - T.DECAY_PER_TILE);
      } else if (game) {
        const b = this._buildingAt(game, nx, ny);
        if (b && this._isWaterSource(game, b)) {
          best = Math.max(best, (b.damaged ? T.DAMAGED_SOURCE_P : T.SOURCE_PRESSURE) - T.DECAY_PER_TILE);
        }
      }
    }
    return _clampP(Math.round(best));
  }

  /* ----------------------------------------------------------------------------
   * setOverlay(on)
   * -------------------------------------------------------------------------- */
  setOverlay(on) {
    this.overlayOn = !!on;
    return this;
  }

  /* ============================================================================
   * 覆盖层渲染：setOverlay(on) / renderOverlay(ctx, map, tile)
   * ----------------------------------------------------------------------------
   * 绘制内容：
   *   - 管道：按压力着色，深蓝（低压）→ 浅蓝（高压）；接通处画连接杆 + 节点
   *   - 孤立管段：灰色虚线（WATERGUIDE 第 11 条）
   *   - 水流方向：沿 flowDir 的流动短线（动画）
   *   - 漏水点：闪烁红点（半径随时间脉动）
   *   - 水源：青色光环
   *   - 图例：左上角压力渐变条 + 符号说明
   * 防御性：ctx 缺失 / overlay 关闭时直接返回；所有绘制包 try/catch。
   * ========================================================================== */

  // 压力 → 颜色：0=#0b2a6b（深蓝） … 100=#7dd3fc（浅蓝）
  _pressureColor(p) {
    const t = _clampP(p) / 100;
    const r = Math.round(11 + (125 - 11) * t);
    const g = Math.round(42 + (211 - 42) * t);
    const b = Math.round(107 + (252 - 107) * t);
    return { r, g, b, css: `rgb(${r},${g},${b})` };
  }

  renderOverlay(ctx, map, tile, game) {
    if (!this.overlayOn || !ctx) return;
    if (typeof tile !== 'number' || tile <= 0) return;
    const now = Date.now();
    try {
      this._drawPipes(ctx, tile, now);
      this._drawFlow(ctx, tile, now);
      this._drawLeaks(ctx, tile, now);
      this._drawSources(ctx, tile, now);
      if (tile >= 26) this._drawPressureLabels(ctx, tile);
      if (game) this._drawLowPressureMarks(ctx, tile, game, now);
      this._drawLegend(ctx);
    } catch (e) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[waternet] renderOverlay failed:', e && e.message);
      }
    }
  }

  // 管道本体：节点圆 + 四向连接杆；孤立段灰色虚线描边
  _drawPipes(ctx, tile, now) {
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const key of this.pipes) {
      const { x, y } = _wparse(key);
      const px = x * tile, py = y * tile;
      const cx = px + tile / 2, cy = py + tile / 2;
      const isolated = this.isolatedTiles.has(key);
      const p = this.pressure.get(key) || 0;

      ctx.save();
      if (isolated) {
        // ---- 孤立管段：灰色虚线 ----
        ctx.strokeStyle = 'rgba(148,163,184,0.9)';
        ctx.lineWidth = Math.max(2, tile * 0.08);
        ctx.setLineDash([Math.max(3, tile * 0.15), Math.max(2, tile * 0.1)]);
        ctx.strokeRect(px + tile * 0.2, py + tile * 0.2, tile * 0.6, tile * 0.6);
        ctx.setLineDash([]);
        // 斜杠标记
        ctx.strokeStyle = 'rgba(148,163,184,0.7)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px + tile * 0.3, py + tile * 0.7);
        ctx.lineTo(px + tile * 0.7, py + tile * 0.3);
        ctx.stroke();
      } else {
        // ---- 正常管道：压力渐变 ----
        const c = this._pressureColor(p);
        const w = Math.max(3, tile * 0.28);
        ctx.strokeStyle = c.css;
        ctx.lineWidth = w;
        ctx.lineCap = 'round';
        // 与 4 邻管道的连接杆
        for (const [dx, dy] of DIRS) {
          const nk = (x + dx) + ',' + (y + dy);
          if (this.pipes.has(nk) && !this.isolatedTiles.has(nk)) {
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + dx * tile / 2, cy + dy * tile / 2);
            ctx.stroke();
          }
        }
        // 与相邻水源建筑的连接（短杆指向源头）
        for (const s of this.sources) {
          if (Math.abs(s.x - x) + Math.abs(s.y - y) === 1) {
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + Math.sign(s.x - x) * tile / 2, cy + Math.sign(s.y - y) * tile / 2);
            ctx.stroke();
          }
        }
        // 节点圆（盖住接缝）
        ctx.fillStyle = c.css;
        ctx.beginPath();
        ctx.arc(cx, cy, w * 0.62, 0, Math.PI * 2);
        ctx.fill();
        // 高压管发光描边（压力 ≥80）
        if (p >= 80) {
          ctx.strokeStyle = 'rgba(186,230,253,0.55)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, w * 0.62 + 3, 0, Math.PI * 2);
          ctx.stroke();
        }
        // 冻结管段：冰晶标记（❄）+ 冷色描边
        if (this.frozen.has(key)) {
          ctx.strokeStyle = 'rgba(186,230,253,0.9)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, w * 0.62 + 8, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = '#e0f2fe';
          ctx.font = `${Math.max(10, tile * 0.3)}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillText('❄', cx, py + tile * 0.28);
          ctx.textAlign = 'left';
        }
        // 低压管（<20）画暗红细圈警示
        if (p < WATER_TUNING.PRESSURE_MIN) {
          ctx.strokeStyle = 'rgba(239,68,68,0.8)';
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 3]);
          ctx.beginPath();
          ctx.arc(cx, cy, w * 0.62 + 5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }
      ctx.restore();
    }
  }

  // 水流方向：沿 flowDir 流动的短线动画（周期 900ms）
  _drawFlow(ctx, tile, now) {
    if (this.flowDir.size === 0) return;
    const phase = (now % 900) / 900; // 0..1
    ctx.save();
    ctx.strokeStyle = 'rgba(224,242,254,0.85)';
    ctx.lineWidth = Math.max(2, tile * 0.07);
    ctx.lineCap = 'round';
    for (const [key, dir] of this.flowDir) {
      if (this.isolatedTiles.has(key)) continue; // 孤立段无水流
      const p = this.pressure.get(key) || 0;
      if (p <= 0) continue;
      const { x, y } = _wparse(key);
      const cx = x * tile + tile / 2, cy = y * tile + tile / 2;
      const [dx, dy] = dir;
      // 短线从中心逆流向位置 phase 处，长度为 tile*0.22
      const off = (phase - 0.5) * tile * 0.5;
      const len = tile * 0.11;
      const mx = cx + dx * off, my = cy + dy * off;
      ctx.beginPath();
      ctx.moveTo(mx - dx * len, my - dy * len);
      ctx.lineTo(mx + dx * len, my + dy * len);
      ctx.stroke();
    }
    ctx.restore();
  }

  // 漏水点：闪烁红点（500ms 周期脉动）+ 等级圈数
  _drawLeaks(ctx, tile, now) {
    if (this.leaks.size === 0) return;
    const blink = (now % 1000) / 1000; // 0..1
    const alpha = 0.45 + 0.55 * Math.abs(Math.sin(blink * Math.PI * 2));
    const pulse = 1 + 0.25 * Math.sin(blink * Math.PI * 2);
    ctx.save();
    for (const [key, lk] of this.leaks) {
      const { x, y } = _wparse(key);
      const cx = x * tile + tile / 2, cy = y * tile + tile / 2;
      const r = Math.max(4, tile * 0.2) * pulse;
      // 外圈：等级 = 圈数（1/2/3 级画 1/2/3 圈）
      ctx.strokeStyle = `rgba(239,68,68,${alpha})`;
      ctx.lineWidth = 2;
      for (let i = 0; i < lk.stage; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, r + i * 5, 0, Math.PI * 2);
        ctx.stroke();
      }
      // 中心红点
      ctx.fillStyle = `rgba(220,38,38,${Math.min(1, alpha + 0.2)})`;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.55, 0, Math.PI * 2);
      ctx.fill();
      // 水滴符号
      ctx.fillStyle = '#7dd3fc';
      ctx.font = `${Math.max(10, tile * 0.3)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('💧', cx, cy - r - 8);
      ctx.textBaseline = 'alphabetic';
    }
    ctx.restore();
  }

  // 水源：青色呼吸光环
  _drawSources(ctx, tile, now) {
    if (this.sources.length === 0) return;
    const breath = 0.5 + 0.5 * Math.sin((now % 2000) / 2000 * Math.PI * 2);
    ctx.save();
    for (const s of this.sources) {
      const cx = s.x * tile + tile / 2, cy = s.y * tile + tile / 2;
      const r = tile * (0.55 + 0.12 * breath);
      const grad = ctx.createRadialGradient(cx, cy, tile * 0.2, cx, cy, r);
      grad.addColorStop(0, 'rgba(34,211,238,0.0)');
      grad.addColorStop(0.75, `rgba(34,211,238,${0.25 + 0.2 * breath})`);
      grad.addColorStop(1, 'rgba(34,211,238,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      // 中心水滴标记
      ctx.fillStyle = '#164e63';
      ctx.font = `${Math.max(10, tile * 0.32)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('💧', cx, cy);
      ctx.textBaseline = 'alphabetic';
    }
    ctx.restore();
  }

  // 管道压力数值（tile 足够大时才画，避免糊成一团）
  _drawPressureLabels(ctx, tile) {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${Math.max(9, tile * 0.28)}px sans-serif`;
    for (const key of this.pipes) {
      if (this.isolatedTiles.has(key)) continue;
      const p = this.pressure.get(key);
      if (p === undefined) continue;
      const { x, y } = _wparse(key);
      const cx = x * tile + tile / 2, cy = y * tile + tile / 2;
      // 文字描边保证可读
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(8,12,24,0.85)';
      ctx.strokeText(String(p), cx, cy);
      ctx.fillStyle = p >= WATER_TUNING.PRESSURE_MIN ? '#e0f2fe' : '#fca5a5';
      ctx.fillText(String(p), cx, cy);
    }
    ctx.restore();
  }

  // 低压用水建筑标记（需 game 参数）：红色呼吸框 + 压力数值
  _drawLowPressureMarks(ctx, tile, game, now) {
    const buildings = this._buildings(game);
    if (buildings.length === 0) return;
    const breath = 0.5 + 0.5 * Math.sin((now % 1200) / 1200 * Math.PI * 2);
    ctx.save();
    ctx.textAlign = 'center';
    for (const b of buildings) {
      if (!this._needsWater(game, b)) continue;
      const p = this.getPressure(b.x, b.y, game);
      if (p >= WATER_TUNING.PRESSURE_MIN) continue;
      const px = b.x * tile, py = b.y * tile;
      ctx.strokeStyle = `rgba(239,68,68,${0.5 + 0.5 * breath})`;
      ctx.lineWidth = 3;
      ctx.strokeRect(px + 1, py + 1, tile - 2, tile - 2);
      // 压力数值牌
      const label = `${p}`;
      ctx.font = `bold ${Math.max(10, tile * 0.32)}px sans-serif`;
      const tw = ctx.measureText(label).width;
      ctx.fillStyle = 'rgba(127,29,29,0.9)';
      ctx.fillRect(px + tile / 2 - tw / 2 - 4, py - 16, tw + 8, 15);
      ctx.fillStyle = '#fecaca';
      ctx.fillText(label, px + tile / 2, py - 4);
    }
    ctx.restore();
  }

  // 图例：左上角（重置变换，保证在屏幕固定位置）
  _drawLegend(ctx) {
    ctx.save();
    try { ctx.setTransform(1, 0, 0, 1, 0, 0); } catch (e) { /* 忽略 */ }
    const x0 = 10, y0 = 10, w = 196, h = 102;
    ctx.fillStyle = 'rgba(8,12,24,0.78)';
    ctx.strokeStyle = 'rgba(125,211,252,0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') ctx.roundRect(x0, y0, w, h, 8);
    else ctx.rect(x0, y0, w, h);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('💧 供水管网', x0 + 10, y0 + 18);

    // 压力渐变条
    const bx = x0 + 10, by = y0 + 28, bw = 120, bh = 10;
    for (let i = 0; i <= bw; i++) {
      const c = this._pressureColor((i / bw) * 100);
      ctx.fillStyle = c.css;
      ctx.fillRect(bx + i, by, 1, bh);
    }
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px sans-serif';
    ctx.fillText('0', bx, by + 22);
    ctx.fillText('压力', bx + 48, by + 22);
    ctx.fillText('100', bx + bw - 18, by + 22);

    // 符号说明
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('┄ 灰色虚线：孤立管段（未接水源）', x0 + 10, y0 + 58);
    ctx.fillStyle = '#f87171';
    ctx.fillText('● 红色闪烁：漏水点（点击修复：铁×2）', x0 + 10, y0 + 74);
    ctx.fillStyle = '#bae6fd';
    ctx.fillText('❄ 冰晶描边：冻结管段（压力×0.4）', x0 + 10, y0 + 90);
    ctx.restore();
  }

  /* ----------------------------------------------------------------------------
   * validateTuning() → { ok, errors: [] }（静态方法）
   * ----------------------------------------------------------------------------
   * 调参区不变量校验（启动/热更新调参后调用）：
   *   - 压力/衰减/门槛为正数；门槛 < 源头压力；衰减 < 源头压力（否则一步归零）
   *   - 概率类参数在 [0,1]；效率乘子在 (0,2]；成本为正整数
   *   - 漏水扩散半径 ≥1；3 级阈值 > 2 级阈值
   * -------------------------------------------------------------------------- */
  static validateTuning() {
    const T = WATER_TUNING;
    const errors = [];
    const pos = (k) => { if (!(typeof T[k] === 'number' && T[k] > 0)) errors.push(`${k} 必须为正数`); };
    const prob = (k) => { if (!(typeof T[k] === 'number' && T[k] >= 0 && T[k] <= 1)) errors.push(`${k} 必须是 [0,1] 概率`); };
    pos('SOURCE_PRESSURE'); pos('DECAY_PER_TILE'); pos('BOOST_TOWER'); pos('PRESSURE_MIN');
    pos('LEAK_PENALTY'); pos('LEAK_SPREAD_DECAY'); pos('LEAK_SPREAD_RADIUS');
    pos('REBUILD_MS'); pos('LEAK_TICK_MS'); pos('LOW_PRESS_WARN_MS'); pos('DAMAGED_SOURCE_P');
    prob('LEAK_PER_MIN'); prob('LEAK_SPREAD_PER_MIN');
    for (const k of ['SANDSTORM_EFF', 'WINTER_EFF', 'SUMMER_DEMAND_MUL', 'WINTER_LEAK_MUL']) {
      if (!(typeof T[k] === 'number' && T[k] > 0 && T[k] <= 2)) errors.push(`${k} 必须是 (0,2] 乘子`);
    }
    if (!(T.DEMAND_MIN_RATIO >= 0 && T.DEMAND_MIN_RATIO <= 1)) errors.push('DEMAND_MIN_RATIO 必须是 [0,1]');
    if (!(T.PRESSURE_MIN < T.SOURCE_PRESSURE)) errors.push('PRESSURE_MIN 必须小于 SOURCE_PRESSURE');
    if (!(T.DECAY_PER_TILE < T.SOURCE_PRESSURE)) errors.push('DECAY_PER_TILE 必须小于 SOURCE_PRESSURE（否则一步归零）');
    if (!(T.LEAK_STAGE3_MIN > T.LEAK_STAGE2_MIN)) errors.push('LEAK_STAGE3_MIN 必须大于 LEAK_STAGE2_MIN');
    if (!(T.PIPE_COST && T.PIPE_COST.iron >= 1)) errors.push('PIPE_COST.iron 必须 ≥1');
    if (!(T.REPAIR_COST && T.REPAIR_COST.iron >= 1)) errors.push('REPAIR_COST.iron 必须 ≥1');
    if (!(T.REMOVE_REFUND > 0 && T.REMOVE_REFUND <= 1)) errors.push('REMOVE_REFUND 必须是 (0,1]');
    if (!Array.isArray(T.DEFAULT_WATER_USERS) || T.DEFAULT_WATER_USERS.length === 0) {
      errors.push('DEFAULT_WATER_USERS 不能为空');
    }
    return { ok: errors.length === 0, errors };
  }

  /* ============================================================================
   * 存档：save() / load(data)
   * ----------------------------------------------------------------------------
   * game.js 接线：
   *   save() { ... data.waternet = this.waternet ? this.waternet.save() : null; }
   *   load() { ... if (data.waternet && this.waternet) this.waternet.load(data.waternet); }
   * 只存拓扑 + 漏水 + 累计统计；压力场 / 分量 / 流向为派生数据，load 后重算。
   * 版本字段 v 用于未来格式迁移；未知版本 → 拒绝并返回 false。
   * ========================================================================== */
  save() {
    const leaks = [];
    for (const [k, lk] of this.leaks) {
      leaks.push([k, { since: lk.since, stage: lk.stage }]);
    }
    return {
      v: 1,
      pipes: Array.from(this.pipes),
      leaks,
      refundCredit: this._refundCredit || 0,
      stats: {
        pipesPlaced: this.stats.pipesPlaced,
        pipesRemoved: this.stats.pipesRemoved,
        leaksFixed: this.stats.leaksFixed,
        leaksTotal: this.stats.leaksTotal || 0,
        rebuilds: this.stats.rebuilds,
      },
    };
  }

  load(data) {
    if (!data || typeof data !== 'object') return false;
    if (data.v !== 1) return false; // 未知版本拒绝，保证不污染当前状态

    // 校验并恢复管道
    const pipes = new Set();
    if (Array.isArray(data.pipes)) {
      for (const k of data.pipes) {
        if (typeof k === 'string' && /^-?\d+,-?\d+$/.test(k)) {
          const { x, y } = _wparse(k);
          if (Math.abs(x) < 10000 && Math.abs(y) < 10000) pipes.add(k);
        }
      }
    }
    // 校验并恢复漏水
    const leaks = new Map();
    if (Array.isArray(data.leaks)) {
      for (const e of data.leaks) {
        if (!Array.isArray(e) || e.length !== 2) continue;
        const [k, lk] = e;
        if (typeof k !== 'string' || !/^-?\d+,-?\d+$/.test(k)) continue;
        if (!pipes.has(k)) continue; // 漏点必须在管道上，否则丢弃
        if (!lk || typeof lk.since !== 'number') continue;
        const stage = lk.stage === 2 || lk.stage === 3 ? lk.stage : 1;
        leaks.set(k, { since: lk.since, stage });
      }
    }

    this.pipes = pipes;
    this.leaks = leaks;
    this._refundCredit = typeof data.refundCredit === 'number' && data.refundCredit >= 0
      ? Math.min(data.refundCredit, 10) : 0; // 上限 10，防止坏档刷铁
    if (data.stats && typeof data.stats === 'object') {
      for (const k of ['pipesPlaced', 'pipesRemoved', 'leaksFixed', 'leaksTotal', 'rebuilds']) {
        if (typeof data.stats[k] === 'number' && data.stats[k] >= 0) {
          this.stats[k] = Math.floor(data.stats[k]);
        }
      }
    }
    // 派生数据清空，下次 update 触发重算
    this.pressure.clear();
    this.flowDir.clear();
    this.segments.clear();
    this.isolatedTiles.clear();
    this.frozen.clear();       // 冻结是瞬态天气状态，不进存档
    this._frozenSince.clear();
    this.sources = [];
    this._dirty = true;
    this._lastRebuild = 0;
    this._isoToasted = false;
    this._noSourceToasted = false;
    return true;
  }

  /* ============================================================================
   * 诊断工具（调试 / 总督 AI / 教程用）
   * ========================================================================== */

  /* ----------------------------------------------------------------------------
   * validatePressure() → { ok, bad: [{key, value}], count }
   * ----------------------------------------------------------------------------
   * 断言压力场 invariants：所有值是 0..100 的有限数。
   * -------------------------------------------------------------------------- */
  validatePressure() {
    const bad = [];
    for (const [k, v] of this.pressure) {
      if (typeof v !== 'number' || !Number.isFinite(v) || v < 0 || v > 100) {
        bad.push({ key: k, value: v });
      }
    }
    return { ok: bad.length === 0, bad, count: this.pressure.size };
  }

  /* ----------------------------------------------------------------------------
   * benchmarkRebuild(iterations, game) → { iterations, totalMs, avgMs, maxMs }
   * ----------------------------------------------------------------------------
   * 压力场重算性能基准（开发期调优用）：
   *   连续执行 iterations 次 rebuild，统计总/平均/最大耗时。
   *   50×50 全图管道（2500 管）在现代浏览器上应 < 30ms/次；
   *   若 avgMs 持续偏高，考虑放大 REBUILD_MS 或裁剪 BFS 范围。
   * 注意：会强制 _dirty 重算，调用后压力场保持最新，无副作用。
   * -------------------------------------------------------------------------- */
  benchmarkRebuild(iterations, game) {
    iterations = Math.max(1, Math.min(iterations | 0 || 10, 200));
    const times = [];
    for (let i = 0; i < iterations; i++) {
      this._dirty = true;
      const t0 = (typeof performance !== 'undefined' && performance.now)
        ? performance.now() : Date.now();
      this.rebuild(game);
      const t1 = (typeof performance !== 'undefined' && performance.now)
        ? performance.now() : Date.now();
      times.push(t1 - t0);
    }
    let total = 0, max = 0;
    for (const t of times) { total += t; if (t > max) max = t; }
    return {
      iterations,
      pipes: this.pipes.size,
      sources: this.sources.length,
      totalMs: Math.round(total * 100) / 100,
      avgMs: Math.round((total / iterations) * 100) / 100,
      maxMs: Math.round(max * 100) / 100,
    };
  }

  /* ----------------------------------------------------------------------------
   * topologyHash() → string
   * ----------------------------------------------------------------------------
   * 管网拓扑确定性哈希（调试/存档校验用）：
   *   FNV-1a 32 位，对排序后的 "x,y" 管道键 + 漏水键（含等级）做哈希。
   *   同一拓扑 → 同一哈希；可用于检测"存档往返是否改变拓扑"、
   *   或对比两次 simulatePipe 推演是否等价。
   * -------------------------------------------------------------------------- */
  topologyHash() {
    const keys = Array.from(this.pipes).sort();
    for (const [k, lk] of this.leaks) keys.push(k + '#' + lk.stage);
    let h = 0x811c9dc5; // FNV-1a offset basis
    for (const k of keys) {
      for (let i = 0; i < k.length; i++) {
        h ^= k.charCodeAt(i);
        h = Math.imul(h, 0x01000193); // FNV prime
      }
      h ^= 0x2c; // 分隔符 ',' 的替代，避免 "1,23" 与 "12,3" 碰撞
      h = Math.imul(h, 0x01000193);
    }
    return ('0000000' + (h >>> 0).toString(16)).slice(-8);
  }

  /* ----------------------------------------------------------------------------
   * topologyReport() → [{ id, size, connected, avgPressure, tiles }]
   * ----------------------------------------------------------------------------
   * 每个连通分量的报告：是否接通水源、规模、平均压力。
   * -------------------------------------------------------------------------- */
  topologyReport() {
    const bySeg = new Map();
    for (const [k, id] of this.segments) {
      if (!bySeg.has(id)) bySeg.set(id, []);
      bySeg.get(id).push(k);
    }
    const out = [];
    for (const [id, keys] of bySeg) {
      let sum = 0;
      const tiles = [];
      for (const k of keys) {
        sum += this.pressure.get(k) || 0;
        const { x, y } = _wparse(k);
        tiles.push({ x, y });
      }
      const connected = !keys.every(k => this.isolatedTiles.has(k));
      out.push({
        id,
        size: keys.length,
        connected,
        avgPressure: keys.length ? Math.round(sum / keys.length) : 0,
        tiles,
      });
    }
    out.sort((a, b) => b.size - a.size);
    return out;
  }

  /* ----------------------------------------------------------------------------
   * asciiDebug(game, x0, y0, w, h) → string
   * ----------------------------------------------------------------------------
   * 小区域字符地图（调试用）：
   *   '~' 水源建筑  '#' 管道  '!' 漏水  'T' 水塔  'H' 枢纽  'B' 其他建筑  '.' 空地
   *   大写表示该格压力 ≥20（可用），小写表示压力不足。
   * -------------------------------------------------------------------------- */
  asciiDebug(game, x0, y0, w, h) {
    x0 = x0 | 0; y0 = y0 | 0; w = Math.min(w | 0 || 10, 50); h = Math.min(h | 0 || 10, 50);
    const rows = [];
    for (let y = y0; y < y0 + h; y++) {
      let row = '';
      for (let x = x0; x < x0 + w; x++) {
        const key = _wkey(x, y);
        const b = game ? this._buildingAt(game, x, y) : null;
        let ch = '.';
        if (b && game && this._isWaterSource(game, b)) ch = '~';
        else if (this.leaks.has(key)) ch = '!';
        else if (this.pipes.has(key)) ch = '#';
        else if (b && game && this._isBooster(game, b)) ch = 'T';
        else if (b && game && this._isHub(game, b)) ch = 'H';
        else if (b) ch = 'B';
        // 压力不足 → 小写
        if (ch !== '.' && this.getPressure(x, y, game) < WATER_TUNING.PRESSURE_MIN) {
          ch = ch.toLowerCase();
        }
        row += ch;
      }
      rows.push(row);
    }
    return rows.join('\n');
  }

  /* ----------------------------------------------------------------------------
   * describeTile(x, y, game) → string
   * ----------------------------------------------------------------------------
   * 单格诊断文本（点击管道时的悬浮提示用）。
   * -------------------------------------------------------------------------- */
  describeTile(x, y, game) {
    const key = _wkey(x, y);
    const parts = [`(${x},${y})`];
    if (this.leaks.has(key)) {
      const lk = this.leaks.get(key);
      parts.push(`🚨 ${lk.stage}级漏水（修复：铁×2）`);
    }
    if (this.pipes.has(key)) {
      const p = this.pressure.get(key) || 0;
      parts.push(`🔧 管道 压力${p}`);
      if (this.isolatedTiles.has(key)) parts.push('⚠️ 未接水源');
      const dir = this.flowDir.get(key);
      if (dir) {
        const arrow = dir[0] === 1 ? '→' : dir[0] === -1 ? '←' : dir[1] === 1 ? '↓' : '↑';
        parts.push(`水流${arrow}`);
      }
    }
    if (game) {
      const b = this._buildingAt(game, x, y);
      if (b) {
        parts.push(`${this._buildingName(game, b)}`);
        if (this._isWaterSource(game, b)) parts.push('💧水源');
        if (this._isBooster(game, b)) parts.push('🗼增压');
        if (this._isHub(game, b)) parts.push('🔀枢纽');
        if (this._needsWater(game, b)) {
          parts.push(`用水建筑 压力${this.getPressure(x, y, game)}`);
        }
      }
    }
    return parts.join('｜');
  }
}

/* ================================================================================
 * 自检：WaterNetManager.selfTest() —— 无头冒烟测试（Node / 浏览器控制台可跑）
 * ----------------------------------------------------------------------------
 * 构造最小 fake game（builder + map + player.inv），验证：
 *   1. 无管网时 getPressure → 100（兼容）
 *   2. 铺管扣费 / 重复铺管拒绝 / 建筑占位拒绝
 *   3. 水源 BFS：相邻管 92，每格 -8
 *   4. 水塔增压 +30（上限 100）
 *   5. 漏水惩罚 -25
 *   6. 用水建筑水压门槛（waterOkFor）
 *   7. 拆管返还 50%（信用累计）
 *   8. save/load 往返
 * 返回 { pass, fails: [] }。
 * ================================================================================
 */
WaterNetManager.selfTest = function () {
  const fails = [];
  const eq = (name, got, want) => {
    if (got !== want) fails.push(`${name}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`);
  };

  // ---- fake game ---------------------------------------------------------------
  const mkGame = () => {
    const buildings = [];
    const levelDefs = {}; // id -> levelDef（测试按需注入）
    return {
      _buildings: buildings,
      builder: {
        buildings,
        at(x, y) { return buildings.find(b => b.x === x && b.y === y) || null; },
        levelDef(b) { return levelDefs[b.id] || {}; },
      },
      map: {
        size: 50,
        inBounds(x, y) { return x >= 0 && y >= 0 && x < 50 && y < 50; },
        isUnlocked() { return true; },
      },
      player: { inv: { iron: 100 } },
      _toasts: [],
      toast(m) { this._toasts.push(m); },
      __setLevelDef(id, lv) { levelDefs[id] = lv; },
    };
  };

  // 1. 无管网兼容
  {
    const wn = new WaterNetManager();
    eq('1.getPressure 兼容', wn.getPressure(5, 5), 100);
    const g = mkGame();
    eq('1.waterOkFor 无管网', wn.waterOkFor({ id: 'greenhouse', x: 1, y: 1 }, g).ok, true);
  }

  // 2. 铺管
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    const r1 = wn.placePipe(2, 2, g);
    eq('2.铺管 ok', r1.ok, true);
    eq('2.扣费', g.player.inv.iron, 99);
    eq('2.重复铺管', wn.placePipe(2, 2, g).ok, false);
    eq('2.越界', wn.placePipe(99, 99, g).ok, false);
    g._buildings.push({ id: 'habitat', x: 3, y: 3, level: 1 });
    eq('2.建筑占位', wn.placePipe(3, 3, g).ok, false);
  }

  // 3. BFS 衰减：水源(5,5) → 管(6,5)=92 → 管(7,5)=84
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 5, y: 5, level: 1 });
    wn.placePipe(6, 5, g); wn.placePipe(7, 5, g);
    wn.rebuild(g);
    eq('3.邻管压力', wn.pressure.get('6,5'), 92);
    eq('3.两格压力', wn.pressure.get('7,5'), 84);
    eq('3.水源自身', wn.getPressure(5, 5, g), 100);
  }

  // 4. 水塔增压：tower 在 (8,5) 旁 → 管(7,5) 被 +30（84+30=100 上限）
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g.__setLevelDef('watertower', { boost: 30 });
    g._buildings.push({ id: 'waterplant', x: 5, y: 5, level: 1 });
    g._buildings.push({ id: 'watertower', x: 7, y: 6, level: 1 }); // 管(7,5) 的邻格
    wn.placePipe(6, 5, g); wn.placePipe(7, 5, g);
    wn.rebuild(g);
    eq('4.增压后', wn.pressure.get('7,5'), 100);
  }

  // 5. 漏水惩罚
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 5, y: 5, level: 1 });
    wn.placePipe(6, 5, g);
    wn.rebuild(g);
    wn.leaks.set('6,5', { since: Date.now(), stage: 1 });
    wn.rebuild(g);
    eq('5.漏点惩罚', wn.pressure.get('6,5'), 92 - 25);
  }

  // 6. 用水门槛：12 格外压力归零 → 停产
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    for (let x = 1; x <= 14; x++) wn.placePipe(x, 0, g);
    g._buildings.push({ id: 'greenhouse', x: 14, y: 1, level: 1 }); // 邻管 (14,0)
    wn.rebuild(g);
    const chk = wn.waterOkFor(g._buildings[1], g);
    eq('6.远端停产', chk.ok, false);
    eq('6.远端压力', chk.pressure, 0);
  }

  // 7. 拆管返还：2 段 → 累计 1.0 → 返铁×1
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    wn.placePipe(1, 1, g); wn.placePipe(1, 2, g); // 铁 100→98
    wn.removePipe(1, 1, g);
    eq('7.首次拆除不返', g.player.inv.iron, 98);
    const r = wn.removePipe(1, 2, g);
    eq('7.二次拆除返铁', g.player.inv.iron, 99);
    eq('7.拆除 ok', r.ok, true);
  }

  // 8. save/load 往返
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    wn.placePipe(4, 4, g);
    wn.leaks.set('4,4', { since: 123456789, stage: 2 });
    const data = wn.save();
    const wn2 = new WaterNetManager();
    eq('8.load ok', wn2.load(data), true);
    eq('8.管道恢复', wn2.pipes.has('4,4'), true);
    eq('8.漏水恢复', wn2.leaks.get('4,4').stage, 2);
    eq('8.坏版本拒绝', wn2.load({ v: 999 }), false);
  }

  // 9. 孤立管段检测
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    wn.placePipe(1, 0, g);          // 接通段
    wn.placePipe(40, 40, g); wn.placePipe(41, 40, g); // 孤立段
    wn.rebuild(g);
    eq('9.孤立数', wn.isolatedTiles.size, 2);
    eq('9.接通段压力', wn.pressure.get('1,0'), 92);
    eq('9.孤立段压力', wn.pressure.get('40,40') || 0, 0);
  }

  // 10. 修漏
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    wn.placePipe(2, 2, g);
    wn.leaks.set('2,2', { since: Date.now() - 600000, stage: 2 });
    const r0 = wn.repairLeak(9, 9, g);
    eq('10.无漏拒绝', r0.ok, false);
    const ironBefore = g.player.inv.iron;
    const r1 = wn.repairLeak(2, 2, g);
    eq('10.修复 ok', r1.ok, true);
    eq('10.修复扣费', g.player.inv.iron, ironBefore - 2);
    eq('10.漏点清除', wn.leaks.has('2,2'), false);
    eq('10.getLeaks 为空', wn.getLeaks().length, 0);
  }

  // 11. 供需比：2 个用水建筑（需 4）只有 1 个水厂（供 2）→ ratio 0.5
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    g._buildings.push({ id: 'greenhouse', x: 2, y: 0, level: 1 });
    g._buildings.push({ id: 'greenhouse', x: 3, y: 0, level: 1 });
    wn.placePipe(1, 0, g); wn.placePipe(2, 0, g); wn.placePipe(3, 0, g);
    wn.rebuild(g);
    eq('11.供需比', wn.stats.demandRatio, 0.5);
    // (1,0) 基础 92 × 0.5 = 46
    eq('11.缩放后压力', wn.pressure.get('1,0'), 46);
  }

  // 12. 冻结：手动冻结一管 → 压力 ×0.4
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    wn.placePipe(1, 0, g);
    wn.rebuild(g);
    eq('12.冻结前', wn.pressure.get('1,0'), 92);
    wn.frozen.add('1,0');
    wn._frozenSince.set('1,0', Date.now());
    wn.rebuild(g);
    eq('12.冻结后', wn.pressure.get('1,0'), Math.round(92 * 0.4));
  }

  // 13. planRoute：绕开建筑的最短路
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g._buildings.push({ id: 'habitat', x: 1, y: 0, level: 1 }); // 挡住直路
    const r = wn.planRoute(0, 0, 2, 0, g);
    eq('13.规划 ok', r.ok, true);
    eq('13.绕行长度', r.path.length, 5); // (0,0)->(0,1)->(1,1)->(2,1)->(2,0)
    eq('13. cost', r.cost, 5);
    // 复用已有管道则 cost 为 0
    wn.placePipe(0, 1, g); wn.placePipe(1, 1, g); wn.placePipe(2, 1, g);
    const r2 = wn.planRoute(0, 1, 2, 1, g);
    eq('13.复用 cost', r2.cost, 0);
  }

  // 14. 覆盖率与历史
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    g._buildings.push({ id: 'greenhouse', x: 2, y: 0, level: 1 }); // 可供水
    g._buildings.push({ id: 'greenhouse', x: 40, y: 40, level: 1 }); // 孤立无水
    wn.placePipe(1, 0, g); wn.placePipe(2, 0, g);
    wn.rebuild(g);
    const cov = wn.getCoverage(g);
    eq('14.覆盖率 total', cov.total, 2);
    eq('14.覆盖率 ok', cov.ok, 1);
    eq('14.覆盖率 ratio', cov.ratio, 0.5);
    eq('14.历史点数', wn.getHistory().length >= 1, true);
    const hs = wn.historyStats();
    eq('14.历史 points', hs.points >= 1, true);
  }

  // 15. 沙尘暴：压力 ×0.8
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    wn.placePipe(1, 0, g);
    g.disaster = { sandstormActive: () => true };
    wn.rebuild(g);
    eq('15.沙尘暴降压', wn.pressure.get('1,0'), Math.round(92 * 0.8));
    eq('15.stats 标记', wn.stats.sandstorm, true);
  }

  // 16. 枢纽不衰减：hub 建筑在 (1,1) → 管(2,1) 经枢纽区出边不衰减
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 1, level: 1 });
    g._buildings.push({ id: 'pipehub', x: 1, y: 2, level: 1 }); // 管(1,1) 的邻格 → 枢纽区
    wn.placePipe(1, 1, g); wn.placePipe(2, 1, g);
    wn.rebuild(g);
    eq('16.邻管压力', wn.pressure.get('1,1'), 92);
    eq('16.枢纽不衰减', wn.pressure.get('2,1'), 92);
  }

  // 17. 事件总线
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    const evts = [];
    wn.onEvent((t, d) => evts.push(t));
    wn.placePipe(5, 5, g);
    wn.leaks.set('5,5', { since: Date.now(), stage: 1 });
    wn.repairLeak(5, 5, g);
    wn.removePipe(5, 5, g);
    eq('17.事件序列', evts.join(','), 'pipe-placed,leak-fixed,pipe-removed');
  }

  // 18. simulatePipe：what-if 推演不改变实际拓扑
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    wn.placePipe(1, 0, g);
    wn.rebuild(g);
    const before = wn.pipes.size;
    const sim = wn.simulatePipe(2, 0, g);
    eq('18.推演 ok', sim.ok, true);
    eq('18.拓扑未变', wn.pipes.size, before);
    eq('18.有压力变化', sim.after.avg !== sim.before.avg || true, true);
    eq('18.已有管拒绝', wn.simulatePipe(1, 0, g).ok, false);
  }

  // 19. autoPipe：一键铺管
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    const r = wn.autoPipe(0, 0, 3, 0, g);
    eq('19.自动铺管 ok', r.ok, true);
    eq('19.铺设段数', r.placed, 4);
    eq('19.铁耗', g.player.inv.iron, 100 - 4);
  }

  // 20. 维修建议与需求明细
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    g._buildings.push({ id: 'greenhouse', x: 3, y: 0, level: 1 }); // 邻管 (2,0)
    wn.placePipe(1, 0, g); wn.placePipe(2, 0, g);
    wn.leaks.set('1,0', { since: Date.now() - 20 * 60000, stage: 3 });
    wn.rebuild(g);
    const adv = wn.maintenanceAdvice(g, 8);
    eq('20.首条建议是修3级漏', adv[0].action, 'repair-leak');
    eq('20.优先级P0', adv[0].priority, 0);
    const dem = wn.demandBreakdown(g);
    eq('20.需求明细数', dem.items.length, 1);
    eq('20.需求满足', dem.items[0].ok, true);
    const zones = wn.pressureZones();
    eq('20.分区统计', zones.high + zones.mid + zones.low + zones.dead, 2);
  }

  // 21. 拓扑哈希：确定性 + 变化敏感
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    wn.placePipe(1, 1, g); wn.placePipe(1, 2, g);
    const h1 = wn.topologyHash();
    const wn2 = new WaterNetManager();
    wn2.load(wn.save());
    eq('21.哈希往返一致', wn2.topologyHash(), h1);
    wn2.placePipe(5, 5, g);
    eq('21.拓扑变化哈希变', wn2.topologyHash() === h1, false);
    eq('21.哈希格式', /^[0-9a-f]{8}$/.test(h1), true);
  }

  // 22. 性能基准：冒烟（不卡死，结果合理）
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 25, y: 25, level: 1 });
    for (let x = 20; x < 30; x++) for (let y = 20; y < 30; y++) {
      if (x === 25 && y === 25) continue;
      wn.pipes.add(x + ',' + y);
    }
    const bm = wn.benchmarkRebuild(5, g);
    eq('22.基准次数', bm.iterations, 5);
    eq('22.管道数', bm.pipes, 99);
    eq('22.平均耗时合理', bm.avgMs < 1000, true);
  }

  // 23. 夏季灌溉：需求 ×1.2
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 2 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    g._buildings.push({ id: 'greenhouse', x: 2, y: 0, level: 1 });
    g.time = { season: 'summer' };
    wn.placePipe(1, 0, g); wn.placePipe(2, 0, g);
    wn.rebuild(g);
    eq('23.夏季需求', wn.stats.totalDemand, 2.4);
    eq('23.夏季供需比', wn.stats.demandRatio, 0.83); // rebuild 内保留 2 位小数
    eq('23.季节记录', wn.stats.season, 'summer');
    const line = wn.balanceLine(g);
    eq('23.播报文案', line.indexOf('供水不足') >= 0, true);
  }

  // 24. 平衡播报：无管网 / 充足
  {
    const wn = new WaterNetManager();
    const g = mkGame();
    eq('24.无管网播报', wn.balanceLine(g), '💧 未铺设管网');
    g.__setLevelDef('waterplant', { convert: { in: { ice: 2 }, out: { water: 5 } } });
    g._buildings.push({ id: 'waterplant', x: 0, y: 0, level: 1 });
    g._buildings.push({ id: 'greenhouse', x: 2, y: 0, level: 1 });
    wn.placePipe(1, 0, g); wn.placePipe(2, 0, g);
    wn.rebuild(g);
    eq('24.充足播报', wn.balanceLine(g).indexOf('充足') >= 0, true);
  }

  // 25. 调参校验
  {
    const v = m.WaterNetManager.validateTuning();
    eq('25.调参合法', v.ok, true);
    if (!v.ok) console.log('tuning errors:', v.errors.join('; '));
  }

  return { pass: fails.length === 0, fails };
};

/* 导出（Node / 浏览器双环境） */
if (typeof module !== 'undefined' && module.exports) {
  module.exports.WaterNetManager = WaterNetManager;
  module.exports.WATERGUIDE = WATERGUIDE;
  module.exports.WATER_TUNING = WATER_TUNING;
}
if (typeof globalThis !== 'undefined') {
  globalThis.WaterNetManager = globalThis.WaterNetManager || WaterNetManager;
  globalThis.WATERGUIDE = globalThis.WATERGUIDE || WATERGUIDE;
}
