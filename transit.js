/* ============================================================================
* 星港 Starport — transit.js：交通系统（立交桥 / 隧道 / 公交 / 货运专线 / 拥堵）
* ============================================================================
* TransitManager：城市交通的四大子系统 + 拥堵模型。
*
* 1. 立交桥 / 隧道........ 跨峡谷的桥（铁）、穿山隧道（钢），提供 travelTime 捷径
* 2. 公交系统............. 线路 / 站点 / 公交车 / 排队候车 / 居住幸福度加成
* 3. 货运专线............. 生产建筑→仓库 的定点资源专线（复用 LogisticsManager 卡车 API）
* 4. 拥堵模型............. 每格每分钟车流统计 → 速度惩罚 → 热力 overlay
*
* 与外部系统的协作约定（防御性：缺谁都不崩）：
* - game.map: GameMap（terrain / inBounds / isUnlocked），缺则纯数学模式
* - game.builder: BuildManager（at / count / isRoad / levelDef），缺则跳过建筑检查
* - game.player: Player（inv 背包 / x,y 位置），缺则不扣费、不记录玩家车流
* - game.logistics: LogisticsManager（复用 Truck 类、speedMul、storageCap），缺则用简易卡车
* - game.pop: Population（无 happiness 接口 → 结果记在 this.happinessBonus 供 pop 读）
* - 全局函数: canAfford / spendRes / missingRes / RES_DEFS / astar / Truck，
* 全部 typeof 防御，Node 单测时自动降级。
*
* game.js 接入方式（由主循环装配，本文件不改 game.js）：
* this.transit = (typeof TransitManager!== 'undefined')? new TransitManager(): null;
* tick 内：if (this.transit) this.transit.update(now, dt, this);
* save 内：transit: this.transit? this.transit.save(): null,
* load 内：if (data.transit && this.transit) this.transit.load(data.transit);
* render 内：if (this.transit) { this.transit.renderStructures(this.ctx, effTile);
* this.transit.renderOverlay(this.ctx, this.map, effTile);}
*
* 纯原生 JS，零依赖，ES6 class。浏览器 <script> 引入或 Node require 均可。
* ========================================================================== */

'use strict';

/* ============================================================================
* TRANSITGUIDE：15 条交通机制说明（给 UI 帮助面板 / 新手引导直接引用）
* ========================================================================== */
const TRANSITGUIDE = [
'立交桥两端必须是「道路」或「可建平地（平地/极地）」，中间必须跨过至少 1 格峡谷，'
+ '两端直线距离 ≤ 8 格。桥不能建在未解锁扇区，也不能与已有桥重叠。',

'每格桥面花费 铁矿×3（按两端直线格数向上取整计费）.'
+ '拆除返还 50% 建造成本（向下取整）。',

'每次有车辆/行人经桥捷径通行记 1 次通过；每 50 次通过磨损 +1。'
+ '磨损 ≥ 100 时桥面受损，捷径失效，需用 铁矿×(2×桥长) 维修后恢复。隧道不受风沙侵蚀，无磨损。',

'隧道两端必须是「岩石」地形（山体），直线距离 ≤ 12 格，'
+ '中间地形不限（直接打穿）。两端不能是峡谷/未解锁区。',

'按两端直线距离向上取整，每格花费 钢材×5。拆除返还 50%。',

'返回两点间游戏内通行秒数：平地/道路网 0.5 秒/格；'
+ '无桥跨峡谷按 1.2 秒/格 + 每格峡谷 4 秒绕行惩罚；有完好桥则按桥面直线 0.5 秒/格；'
+ '连续岩石 ≥ 3 格无隧道时 1.2 秒/格 + 2 秒/格绕行，有隧道则 0.5 秒/格直达。'
+ '供物流路径与玩家移动参考。',

'createRoute 建线（花费 铁×30 钢×10）；addStop 设站，站点必须在道路上或建筑 8 邻域内，'
+ '每线最多 12 站，不可重复设站。线路可随时 toggleRoute 启停、removeRoute 拆除。',

'每线按发车间隔自动发车（目标车辆数 = ceil(站数/2)，上限 4 辆）；'
+ '车辆沿站点往返行驶（到终点折返），每站停靠 3 秒上下客；'
+ '车速 4.5 格/秒，受拥堵与物流速度加成影响。',

'每站有候车队列（上限 30 人），按周围 5 格内居住建筑人口容量累积；'
+ '上车乘客随机分配下车站点；载客上限 20 人，线路每升 1 级 +10（upgradeRoute，最高 3 级）。',

'启用的公交线路，其站点周围 5 格内居住建筑（居住舱/生态穹顶）获得幸福度加成 '
+ '（Lv1 +2 / Lv2 +3 / Lv3 +5），每 5 秒重算。'
+ 'Population 暂无 happiness 接口：若 game.pop 提供 setTransitHappiness(obj) 则直接调用，'
+ '否则结果记在 transit.happinessBonus（Map "x,y"→加成值），由 pop 系统自行读取——见本文件头部约定。',

'createLine(from→to, resource)：起点须是生产建筑（produce/convert）或仓库/运输站/物流中心，'
+ '终点须是仓库/运输站/物流中心；资源须为有效资源名。建线费 铁×20 钢×5 + 每格铁×1。',

'每线自动派车：起点装货 2 秒 → 运往终点 → 卸货入库（受存储上限限制，满则等待 5 秒重试）→ 空车返回，'
+ '单程载 6 单位。优先复用 LogisticsManager 的 Truck 类（assign/update/tryUnload/render 全套 API）与速度倍率；'
+ 'logistics 缺失时降级为内置简易卡车 {x,y,from,to,load}，逻辑一致。',

'每线优先级 1–3（setPriority）：3 级线配 2 辆车、速度 ×1.3；2 级 ×1.15；'
+ '同 tick 多车卸货时高优先级先入库。toggleLine 可暂停/恢复整条线。',

'roadUse 记录每格每分钟车流（公交+货运+玩家，6×10 秒滑动窗口）：'
+ '>30 辆/分钟 → 该格速度 ×0.5；>60 → ×0.25。'
+ '高速路（highway 建筑，若存在）所在格容量 ×3（阈值 90/180）.'
+ 'getCongestion(x,y) 返回 {vehPerMin, level, mul} 供 overlay 与物流路径参考；renderOverlay 画绿→黄→红热力。',

'save()/load(data) 版本化存档桥/隧道/线路/货运线/计数器与统计；'
+ '读档时逐项校验，坏项丢弃不崩。所有外部依赖（map/builder/player/logistics/pop/全局函数）缺失时自动降级，'
+ 'update 内各子系统独立 try/catch，一个子系统异常不影响其他。',
];

/* ============================================================================
* §0 防御性工具：外部常量 / 函数的安全访问（浏览器全局 或 Node require）
* ========================================================================== */

// 地形枚举兜底（map.js 未加载时）
function _TERRAIN() {
try {
if (typeof TERRAIN!== 'undefined') return TERRAIN;
} catch (e) { /* Node 下未引入 map.js */}
return { FLAT: 0, ROCK: 1, CRATER: 2, CANYON: 3, POLAR: 4, VOLCANO: 5};
}

// 资源定义兜底
function _RES_DEFS() {
try {
if (typeof RES_DEFS!== 'undefined') return RES_DEFS;
} catch (e) {}
return {
iron: { name: '铁矿'}, ice: { name: '冰水'}, rare: { name: '稀土'},
water: { name: '水'}, food: { name: '食物'}, steel: { name: '钢材'},
tech: { name: '科技'}, uranium: { name: '铀矿'}, he3: { name: '氦3'},
};
}

// 资源名（中文），未知资源返回原 key
function _resName(key) {
const defs = _RES_DEFS();
return (defs[key] && defs[key].name) || String(key);
}

// 资源是否有效
function _isValidRes(key) {
return!!_RES_DEFS()[key];
}

// 费用检查兜底：有 canAfford 用之，否则手写
function _canAfford(inv, cost) {
if (!inv ||!cost) return false;
try {
if (typeof canAfford === 'function') return canAfford(inv, cost);
} catch (e) {}
for (const k in cost) {
if ((inv[k] || 0) < cost[k]) return false;
}
return true;
}

// 扣费兜底
function _spendRes(inv, cost) {
if (!inv ||!cost) return false;
try {
if (typeof spendRes === 'function') return spendRes(inv, cost);
} catch (e) {}
if (!_canAfford(inv, cost)) return false;
for (const k in cost) inv[k] -= cost[k];
return true;
}

// 缺口描述兜底
function _missingRes(inv, cost) {
try {
if (typeof missingRes === 'function') return missingRes(inv, cost);
} catch (e) {}
const miss = [];
for (const k in cost) {
const need = cost[k] - (inv[k] || 0);
if (need > 0) miss.push(`${_resName(k)}×${need}`);
}
return miss.join('、');
}

// 存储上限兜底（logistics 缺失时）：base 200 + 每仓库 200
function _storageCap(game) {
try {
if (game && game.logistics && typeof game.logistics.storageCap === 'function' && game.builder) {
return game.logistics.storageCap(game.builder);
}
} catch (e) {}
let base = 200, perWh = 200;
try { if (typeof STORAGE_BASE!== 'undefined') base = STORAGE_BASE;} catch (e) {}
try { if (typeof STORAGE_PER_WAREHOUSE!== 'undefined') perWh = STORAGE_PER_WAREHOUSE;} catch (e) {}
let wh = 0;
try {
if (game && game.builder && typeof game.builder.count === 'function') wh = game.builder.count('warehouse');
} catch (e) {}
return base + wh * perWh;
}

// 物流速度倍率兜底（logistics 缺失时返回 1）
function _logisticsSpeedMul(game) {
try {
if (game && game.logistics && typeof game.logistics.speedMul === 'function' && game.builder) {
return game.logistics.speedMul(game.builder);
}
} catch (e) {}
return 1;
}

// 取玩家背包（缺 player 时返回 null，调用方降级为免费模式）
function _invOf(game) {
try {
if (game && game.player && game.player.inv) return game.player.inv;
} catch (e) {}
return null;
}

// 网格 key
function _key(x, y) { return x + ',' + y;}
function _parseKey(k) {
const i = k.indexOf(',');
return { x: +k.slice(0, i), y: +k.slice(i + 1)};
}

// 欧氏距离（格）
function _dist(x1, y1, x2, y2) { return Math.hypot(x2 - x1, y2 - y1);}

// 钳制
function _clamp(v, lo, hi) { return v < lo? lo: (v > hi? hi: v);}

// 安全整数向下取整坐标
function _ix(v) { return Math.floor(v);}

/* ============================================================================
* §1 几何工具：直线格采样 / 路径点展开
* ========================================================================== */

// Bresenham 直线格序列（含起终点）。用于：桥跨峡谷检测、travelTime 地形采样。
function _segmentCells(x0, y0, x1, y1) {
const cells = [];
x0 = _ix(x0); y0 = _ix(y0); x1 = _ix(x1); y1 = _ix(y1);
const dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
const sx = x0 < x1? 1: -1, sy = y0 < y1? 1: -1;
let err = dx - dy, x = x0, y = y0;
const guard = dx + dy + 8;
let g = 0;
while (g++ < guard) {
cells.push({ x, y});
if (x === x1 && y === y1) break;
const e2 = 2 * err;
if (e2 > -dy) { err -= dy; x += sx;}
if (e2 < dx) { err += dx; y += sy;}
}
return cells;
}

// 统计线段上某地形的格数（map 缺失返回 0）
function _countTerrainOnLine(map, x1, y1, x2, y2, terrainVal) {
if (!map ||!map.terrain) return 0;
let n = 0;
for (const c of _segmentCells(x1, y1, x2, y2)) {
if (!map.inBounds(c.x, c.y)) continue;
if (map.terrain[c.y] && map.terrain[c.y][c.x] === terrainVal) n++;
}
return n;
}

// 线段上最长连续某地形（用于岩石绕行判断）
function _maxRunOnLine(map, x1, y1, x2, y2, terrainVal) {
if (!map ||!map.terrain) return 0;
let best = 0, cur = 0;
for (const c of _segmentCells(x1, y1, x2, y2)) {
if (!map.inBounds(c.x, c.y)) { cur = 0; continue;}
if (map.terrain[c.y] && map.terrain[c.y][c.x] === terrainVal) { cur++; if (cur > best) best = cur;}
else cur = 0;
}
return best;
}

// 点是否在线段附近（距离阈值，格）
function _nearSegment(px, py, x1, y1, x2, y2, tol) {
const dx = x2 - x1, dy = y2 - y1;
const len2 = dx * dx + dy * dy;
if (len2 === 0) return _dist(px, py, x1, y1) <= tol;
let t = ((px - x1) * dx + (py - y1) * dy) / len2;
t = _clamp(t, 0, 1);
return _dist(px, py, x1 + t * dx, y1 + t * dy) <= tol;
}

/* ============================================================================
 * §2 立交桥：跨峡谷捷径
 * ----------------------------------------------------------------------------
 * 数据：bridges: [{id, x1,y1,x2,y2, len, cells:[{x,y}], crossings, wear,
 *                  damaged, builtAt}]
 *   - cells：桥面覆盖的格序列（Bresenham），供 travelTime / 路径 / 渲染用
 *   - crossings：累计通过次数；wear = floor(crossings / WEAR_PER)；wear>=100 受损
 * 规则见 TRANSITGUIDE[0..2]。
 * ========================================================================== */

const BRIDGE = {
  MAX_LEN: 8,            // 两端直线距离上限（格）
  IRON_PER_TILE: 3,      // 每格铁矿成本
  REFUND_RATE: 0.5,      // 拆除返还比例
  WEAR_PER: 50,          // 每 50 次通过 → 磨损+1
  WEAR_MAX: 100,         // 磨损上限（受损阈值）
  REPAIR_IRON_PER_TILE: 2, // 维修每格铁矿
};

// 桥端点地面是否合格：道路建筑，或 平地/极地（非峡谷/岩石/环形山/火山）
// 返回 {ok, reason}
function _bridgeEndpointOk(map, builder, x, y) {
  const T = _TERRAIN();
  if (!map.inBounds(x, y)) return { ok: false, reason: `(${x},${y}) 超出地图` };
  if (map.isUnlocked && !map.isUnlocked(x, y)) return { ok: false, reason: `(${x},${y}) 扇区未解锁` };
  // 道路建筑直接合格
  if (builder && typeof builder.at === 'function') {
    const b = builder.at(x, y);
    if (b && b.id === 'road') return { ok: true };
  }
  const t = map.terrain && map.terrain[y] ? map.terrain[y][x] : T.FLAT;
  if (t === T.CANYON) return { ok: false, reason: `(${x},${y}) 是峡谷，不能做桥端` };
  if (t === T.ROCK) return { ok: false, reason: `(${x},${y}) 是岩石山地，请改建隧道` };
  if (t === T.CRATER) return { ok: false, reason: `(${x},${y}) 是环形山，地基不稳` };
  // 平地 / 极地 / 火山 允许（火山端点少见但结构可行）
  return { ok: true };
}

// 混入 TransitManager 原型的桥方法（保持类定义集中，逻辑分区清晰）
function _mixinBridges(TransitManager) {

  // ---- 查询：点是否在某座桥的桥面上 ----
  TransitManager.prototype.bridgeAt = function (x, y) {
    x = _ix(x); y = _ix(y);
    for (const br of this.bridges) {
      for (const c of br.cells) {
        if (c.x === x && c.y === y) return br;
      }
    }
    return null;
  };

  // ---- 查询：线段是否被某座完好桥覆盖（跨峡谷捷径判定） ----
  // cells：_segmentCells 采样的直线格；返回桥或 null
  TransitManager.prototype.bridgeCovering = function (cells) {
    if (!cells || !cells.length) return null;
    // 统计每座桥覆盖了线段上多少格；覆盖 ≥2 格（或线段全在桥上）视为有效捷径
    let best = null, bestN = 0;
    for (const br of this.bridges) {
      if (br.damaged) continue;
      const set = br._cellSet || (br._cellSet = new Set(br.cells.map(c => _key(c.x, c.y))));
      let n = 0;
      for (const c of cells) if (set.has(_key(c.x, c.y))) n++;
      if (n > bestN) { bestN = n; best = br; }
    }
    // 至少覆盖 1 格峡谷才算真正的"跨峡谷"
    if (best && bestN >= 1) return best;
    return null;
  };

  // ---- 放置 ----
  TransitManager.prototype.placeBridge = function (x1, y1, x2, y2, game) {
    const T = _TERRAIN();
    if (!game || !game.map) return { ok: false, reason: '游戏未就绪（缺地图）' };
    const map = game.map, builder = game.builder || null, inv = _invOf(game);

    x1 = _ix(x1); y1 = _ix(y1); x2 = _ix(x2); y2 = _ix(y2);

    // 1) 基本合法性
    if (!map.inBounds(x1, y1) || !map.inBounds(x2, y2))
      return { ok: false, reason: '桥端超出地图边界' };
    if (x1 === x2 && y1 === y2)
      return { ok: false, reason: '桥的两端不能是同一点' };

    // 2) 距离上限
    const len = _dist(x1, y1, x2, y2);
    const tiles = Math.max(1, Math.ceil(len));
    if (len > BRIDGE.MAX_LEN + 1e-9)
      return { ok: false, reason: `桥长 ${len.toFixed(1)} 格，超过上限 ${BRIDGE.MAX_LEN} 格` };

    // 3) 端点地面检查
    for (const [ex, ey, tag] of [[x1, y1, '起点'], [x2, y2, '终点']]) {
      const chk = _bridgeEndpointOk(map, builder, ex, ey);
      if (!chk.ok) return { ok: false, reason: tag + chk.reason };
    }

    // 4) 线上必须跨过峡谷（否则建桥无意义）
    const canyonN = _countTerrainOnLine(map, x1, y1, x2, y2, T.CANYON);
    if (canyonN < 1)
      return { ok: false, reason: '两端之间没有峡谷，不需要建桥' };

    // 5) 线上格不能穿过未解锁扇区（桥面需要施工可达）
    if (map.isUnlocked) {
      for (const c of _segmentCells(x1, y1, x2, y2)) {
        if (!map.inBounds(c.x, c.y)) continue;
        // 峡谷格本身允许跨越（桥面），但所属扇区必须解锁
        if (!map.isUnlocked(c.x, c.y))
          return { ok: false, reason: `(${c.x},${c.y}) 扇区未解锁，无法施工` };
      }
    }

    // 6) 不与已有桥重叠：端点距离 < 2 或桥面格相交
    const newCells = _segmentCells(x1, y1, x2, y2);
    const newSet = new Set(newCells.map(c => _key(c.x, c.y)));
    for (const br of this.bridges) {
      const d1 = _dist(x1, y1, br.x1, br.y1), d2 = _dist(x2, y2, br.x2, br.y2);
      const d3 = _dist(x1, y1, br.x2, br.y2), d4 = _dist(x2, y2, br.x1, br.y1);
      if (Math.min(d1, d2, d3, d4) < 2)
        return { ok: false, reason: `与已有桥 #${br.id} 过近（端点距离 < 2 格）` };
      for (const c of br.cells) {
        if (newSet.has(_key(c.x, c.y)))
          return { ok: false, reason: `与已有桥 #${br.id} 桥面重叠` };
      }
    }

    // 7) 费用：铁矿 × 3 / 格
    const cost = { iron: BRIDGE.IRON_PER_TILE * tiles };
    if (inv) {
      if (!_canAfford(inv, cost))
        return { ok: false, reason: '需要铁矿×' + cost.iron + '，缺' + _missingRes(inv, cost) };
      _spendRes(inv, cost);
    }
    // inv 缺失（测试/沙盒）：免费建造，不阻断

    // 8) 落子
    const br = {
      id: this._seq.bridge++,
      x1, y1, x2, y2,
      len: tiles,
      cells: newCells,
      _cellSet: newSet,
      crossings: 0,
      wear: 0,
      damaged: false,
      builtAt: Date.now(),
      cost,
    };
    this.bridges.push(br);
    this.stats.bridgesBuilt++;
    return { ok: true, bridge: this._publicBridge(br) };
  };

  // ---- 拆除（返还 50%） ----
  TransitManager.prototype.removeBridge = function (id, game) {
    const i = this.bridges.findIndex(b => b.id === id);
    if (i < 0) return { ok: false, reason: `找不到桥 #${id}` };
    const br = this.bridges[i];
    const inv = _invOf(game);
    let refund = null;
    if (inv && br.cost) {
      refund = {};
      for (const k in br.cost) refund[k] = Math.floor(br.cost[k] * BRIDGE.REFUND_RATE);
      for (const k in refund) inv[k] = (inv[k] || 0) + refund[k];
    }
    this.bridges.splice(i, 1);
    this.stats.bridgesRemoved = (this.stats.bridgesRemoved || 0) + 1;
    return { ok: true, refund };
  };

  // ---- 维修受损桥 ----
  TransitManager.prototype.repairBridge = function (id, game) {
    const br = this.bridges.find(b => b.id === id);
    if (!br) return { ok: false, reason: `找不到桥 #${id}` };
    if (!br.damaged) return { ok: false, reason: `桥 #${id} 完好，无需维修` };
    const inv = _invOf(game);
    const cost = { iron: BRIDGE.REPAIR_IRON_PER_TILE * br.len };
    if (inv) {
      if (!_canAfford(inv, cost))
        return { ok: false, reason: '维修需要铁矿×' + cost.iron + '，缺' + _missingRes(inv, cost) };
      _spendRes(inv, cost);
    }
    br.damaged = false;
    br.wear = 0;
    br.crossings = 0;
    this.stats.bridgesRepaired++;
    return { ok: true, bridge: this._publicBridge(br) };
  };

  // ---- 记录一次通过（磨损累计；受损后捷径失效） ----
  TransitManager.prototype.noteBridgeUse = function (id) {
    const br = this.bridges.find(b => b.id === id);
    if (!br || br.damaged) return;
    br.crossings++;
    // 流量日志（速率统计用）
    try {
      br._useLog = br._useLog || [];
      this._pushFlowLog(br._useLog, Date.now(), 1);
    } catch (e) {}
    const w = Math.floor(br.crossings / BRIDGE.WEAR_PER);
    if (w !== br.wear) {
      br.wear = w;
      if (br.wear >= BRIDGE.WEAR_MAX) {
        br.damaged = true;
        this.stats.bridgesDamaged = (this.stats.bridgesDamaged || 0) + 1;
        // 自然磨损失效同样使路径缓存失效
        try { this.clearPathCaches(); } catch (e) {}
      }
    }
  };

  // ---- 定期校验：桥端地形若被改为不可建（极端情况），标记桥供 UI 提示 ----
  // 峡谷地形永久不变，正常不会触发；主要用于读档一致性。
  TransitManager.prototype.validateBridges = function (game) {
    if (!game || !game.map) return [];
    const bad = [];
    for (const br of this.bridges) {
      const c1 = _bridgeEndpointOk(game.map, game.builder, br.x1, br.y1);
      const c2 = _bridgeEndpointOk(game.map, game.builder, br.x2, br.y2);
      if (!c1.ok || !c2.ok) bad.push({ id: br.id, reason: !c1.ok ? c1.reason : c2.reason });
    }
    return bad;
  };

  // ---- 公开视图（渲染/存档/UI 用，不暴露内部 Set） ----
  TransitManager.prototype._publicBridge = function (br) {
    return {
      id: br.id, x1: br.x1, y1: br.y1, x2: br.x2, y2: br.y2,
      len: br.len, crossings: br.crossings, wear: br.wear,
      damaged: br.damaged, builtAt: br.builtAt,
    };
  };

  TransitManager.prototype.getBridges = function () {
    return this.bridges.map(b => this._publicBridge(b));
  };

  // ---- 渲染：桥面（棕色桥体 + 栏杆 + 受损红色闪烁） ----
  TransitManager.prototype.renderBridges = function (ctx, tile, now) {
    if (!ctx) return;
    const t = now || Date.now();
    for (const br of this.bridges) {
      // 桥体：沿格序列画粗线
      ctx.strokeStyle = br.damaged ? '#7f1d1d' : '#a16207';
      ctx.lineWidth = Math.max(3, tile * 0.55);
      ctx.lineCap = 'round';
      ctx.beginPath();
      br.cells.forEach((c, i) => {
        const px = (c.x + 0.5) * tile, py = (c.y + 0.5) * tile;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      });
      ctx.stroke();
      // 桥面纹理
      ctx.strokeStyle = br.damaged ? '#ef4444' : '#fbbf24';
      ctx.lineWidth = Math.max(1, tile * 0.1);
      ctx.setLineDash([Math.max(2, tile * 0.18), Math.max(2, tile * 0.18)]);
      ctx.beginPath();
      br.cells.forEach((c, i) => {
        const px = (c.x + 0.5) * tile, py = (c.y + 0.5) * tile;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      });
      ctx.stroke();
      ctx.setLineDash([]);
      // 受损：红色脉冲圈
      if (br.damaged) {
        const pulse = 0.5 + 0.5 * Math.sin(t / 300);
        const mx = (br.x1 + br.x2 + 1) / 2 * tile, my = (br.y1 + br.y2 + 1) / 2 * tile;
        ctx.strokeStyle = `rgba(239,68,68,${0.4 + pulse * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(mx, my, tile * (0.5 + pulse * 0.3), 0, Math.PI * 2);
        ctx.stroke();
      }
      // 磨损条（wear>0 时）
      if (!br.damaged && br.wear > 0) {
        const mx = (br.x1 + br.x2 + 1) / 2 * tile, my = (br.y1 + br.y2 + 1) / 2 * tile;
        const w = tile * 1.2, h = Math.max(2, tile * 0.08);
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(mx - w / 2, my - tile * 0.7, w, h);
        ctx.fillStyle = br.wear > 70 ? '#ef4444' : '#facc15';
        ctx.fillRect(mx - w / 2, my - tile * 0.7, w * (br.wear / BRIDGE.WEAR_MAX), h);
      }
    }
  };
}

/* ============================================================================
 * §3 隧道：穿山捷径（地下通道，无磨损）
 * ----------------------------------------------------------------------------
 * 数据：tunnels: [{id, ax,ay,bx,by, len, builtAt, cost}]
 * 隧道是"传送门"式捷径：从任一洞口进入，按隧道长度计费时间后从另一洞口出来。
 * 规则见 TRANSITGUIDE[3..4]。
 * ========================================================================== */

const TUNNEL = {
  MAX_LEN: 12,           // 两端直线距离上限（格）
  STEEL_PER_TILE: 5,     // 每格钢材成本
  REFUND_RATE: 0.5,      // 拆除返还比例
  PORTAL_TOL: 1.5,       // 洞口判定容差（格）：路径点进入此半径视为进洞
};

// 隧道端点地面检查：必须是岩石地形
function _tunnelEndpointOk(map, x, y) {
  const T = _TERRAIN();
  if (!map.inBounds(x, y)) return { ok: false, reason: `(${x},${y}) 超出地图` };
  if (map.isUnlocked && !map.isUnlocked(x, y)) return { ok: false, reason: `(${x},${y}) 扇区未解锁` };
  const t = map.terrain && map.terrain[y] ? map.terrain[y][x] : T.FLAT;
  if (t === T.CANYON) return { ok: false, reason: `(${x},${y}) 是峡谷，不能做隧道口` };
  if (t !== T.ROCK) return { ok: false, reason: `(${x},${y}) 不是岩石山地（当前：${t}）` };
  return { ok: true };
}

function _mixinTunnels(TransitManager) {

  // ---- 查询：点是否在隧道洞口附近 ----
  TransitManager.prototype.tunnelAt = function (x, y) {
    for (const tn of this.tunnels) {
      if (_dist(x, y, tn.ax, tn.ay) <= TUNNEL.PORTAL_TOL) return { tunnel: tn, end: 'a' };
      if (_dist(x, y, tn.bx, tn.by) <= TUNNEL.PORTAL_TOL) return { tunnel: tn, end: 'b' };
    }
    return null;
  };

  // ---- 查询：两点间是否有隧道捷径（洞口分别在两点容差内） ----
  TransitManager.prototype.tunnelBetween = function (x1, y1, x2, y2) {
    for (const tn of this.tunnels) {
      const a1 = _dist(x1, y1, tn.ax, tn.ay) <= TUNNEL.PORTAL_TOL;
      const b1 = _dist(x1, y1, tn.bx, tn.by) <= TUNNEL.PORTAL_TOL;
      const a2 = _dist(x2, y2, tn.ax, tn.ay) <= TUNNEL.PORTAL_TOL;
      const b2 = _dist(x2, y2, tn.bx, tn.by) <= TUNNEL.PORTAL_TOL;
      if ((a1 && b2) || (b1 && a2)) return tn;
    }
    return null;
  };

  // ---- 放置 ----
  TransitManager.prototype.placeTunnel = function (ax, ay, bx, by, game) {
    if (!game || !game.map) return { ok: false, reason: '游戏未就绪（缺地图）' };
    const map = game.map, inv = _invOf(game);
    ax = _ix(ax); ay = _ix(ay); bx = _ix(bx); by = _ix(by);

    if (!map.inBounds(ax, ay) || !map.inBounds(bx, by))
      return { ok: false, reason: '隧道口超出地图边界' };
    if (ax === bx && ay === by)
      return { ok: false, reason: '隧道两端不能是同一点' };

    const len = _dist(ax, ay, bx, by);
    const tiles = Math.max(1, Math.ceil(len));
    if (len > TUNNEL.MAX_LEN + 1e-9)
      return { ok: false, reason: `隧道长 ${len.toFixed(1)} 格，超过上限 ${TUNNEL.MAX_LEN} 格` };

    for (const [ex, ey, tag] of [[ax, ay, 'A端'], [bx, by, 'B端']]) {
      const chk = _tunnelEndpointOk(map, ex, ey);
      if (!chk.ok) return { ok: false, reason: tag + chk.reason };
    }

    // 不与已有隧道洞口过近（<2 格视为重复开挖）
    for (const tn of this.tunnels) {
      const dd = Math.min(
        _dist(ax, ay, tn.ax, tn.ay), _dist(ax, ay, tn.bx, tn.by),
        _dist(bx, by, tn.ax, tn.ay), _dist(bx, by, tn.bx, tn.by));
      if (dd < 2) return { ok: false, reason: `与已有隧道 #${tn.id} 洞口过近` };
    }

    // 费用：钢材 × 5 / 格（按直线距离）
    const cost = { steel: TUNNEL.STEEL_PER_TILE * tiles };
    if (inv) {
      if (!_canAfford(inv, cost))
        return { ok: false, reason: '需要钢材×' + cost.steel + '，缺' + _missingRes(inv, cost) };
      _spendRes(inv, cost);
    }

    const tn = { id: this._seq.tunnel++, ax, ay, bx, by, len: tiles, builtAt: Date.now(), cost };
    this.tunnels.push(tn);
    this.stats.tunnelsBuilt++;
    return { ok: true, tunnel: this._publicTunnel(tn) };
  };

  // ---- 拆除（返还 50%） ----
  TransitManager.prototype.removeTunnel = function (id, game) {
    const i = this.tunnels.findIndex(t => t.id === id);
    if (i < 0) return { ok: false, reason: `找不到隧道 #${id}` };
    const tn = this.tunnels[i];
    const inv = _invOf(game);
    let refund = null;
    if (inv && tn.cost) {
      refund = {};
      for (const k in tn.cost) refund[k] = Math.floor(tn.cost[k] * TUNNEL.REFUND_RATE);
      for (const k in refund) inv[k] = (inv[k] || 0) + refund[k];
    }
    this.tunnels.splice(i, 1);
    this.stats.tunnelsRemoved = (this.stats.tunnelsRemoved || 0) + 1;
    return { ok: true, refund };
  };

  TransitManager.prototype._publicTunnel = function (tn) {
    return { id: tn.id, ax: tn.ax, ay: tn.ay, bx: tn.bx, by: tn.by, len: tn.len, builtAt: tn.builtAt };
  };

  TransitManager.prototype.getTunnels = function () {
    return this.tunnels.map(t => this._publicTunnel(t));
  };

  // ---- 渲染：洞口（灰色拱门 + 黄色灯） ----
  TransitManager.prototype.renderTunnels = function (ctx, tile, now) {
    if (!ctx) return;
    const t = now || Date.now();
    for (const tn of this.tunnels) {
      for (const [px, py] of [[tn.ax, tn.ay], [tn.bx, tn.by]]) {
        const cx = (px + 0.5) * tile, cy = (py + 0.5) * tile;
        const r = tile * 0.42;
        // 山体阴影
        ctx.fillStyle = '#3a2c22';
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
        // 洞口
        ctx.fillStyle = '#0a0a0a';
        ctx.beginPath(); ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2); ctx.fill();
        // 洞口灯（呼吸）
        const pulse = 0.5 + 0.5 * Math.sin(t / 500 + px);
        ctx.fillStyle = `rgba(250,204,21,${0.5 + pulse * 0.5})`;
        ctx.beginPath(); ctx.arc(cx, cy - r * 0.55, Math.max(1.5, tile * 0.06), 0, Math.PI * 2); ctx.fill();
        // 虚线连接两洞口（地下走向示意）
        ctx.strokeStyle = 'rgba(148,163,184,0.35)';
        ctx.lineWidth = Math.max(1, tile * 0.06);
        ctx.setLineDash([Math.max(2, tile * 0.12), Math.max(2, tile * 0.12)]);
        ctx.beginPath();
        ctx.moveTo((tn.ax + 0.5) * tile, (tn.ay + 0.5) * tile);
        ctx.lineTo((tn.bx + 0.5) * tile, (tn.by + 0.5) * tile);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  };
}

/* ============================================================================
 * §4 路径与通行耗时
 * ----------------------------------------------------------------------------
 * travelTime(x1,y1,x2,y2)：游戏内通行秒数（供物流/玩家移动参考）。
 * transitAwarePath(map, builder, sx, sy, tx, ty)：考虑桥/隧道/拥堵的 A* 路径。
 *   - 桥面格（完好）：可走，代价 0.4（捷径）
 *   - 隧道洞口：传送门邻居，代价 = 隧道长 × 0.6
 *   - 峡谷（无桥）：不可走；岩石：代价 3（难走但可穿）
 *   - 道路：0.5；平地/极地/火山：1；拥堵附加 vehPerMin × 0.03
 *   - 无桥隧拥堵参与时，退化为与 logistics.astar 一致的结果（道路优先）
 * ========================================================================== */

const TRAVEL = {
  SEC_ROAD: 0.5,        // 道路网：秒/格
  SEC_OFF: 1.2,         // 野地：秒/格
  CANYON_DETOUR: 4,     // 每格峡谷绕行惩罚（秒）
  ROCK_DETOUR: 2,       // 每格连续岩石绕行惩罚（秒）
  ROCK_RUN_TUNNEL: 3,   // 连续岩石 ≥3 格才考虑隧道捷径
};

function _mixinTravel(TransitManager) {

  // ---- travelTime：两点间通行耗时（秒，保留 1 位小数） ----
  TransitManager.prototype.travelTime = function (x1, y1, x2, y2) {
    const d = this.travelTimeDetailed(x1, y1, x2, y2);
    return d.seconds;
  };

  // ---- travelTimeDetailed：带明细的耗时（调试/UI 用） ----
  TransitManager.prototype.travelTimeDetailed = function (x1, y1, x2, y2) {
    const T = _TERRAIN();
    const dist = _dist(x1, y1, x2, y2);
    const base = { seconds: 0, distance: Math.round(dist * 10) / 10, roadBonus: true,
                   bridgeUsed: null, tunnelUsed: null, detourPenalty: 0, mode: 'road' };
    if (dist < 1e-9) return base;

    const game = this._game;
    // 无地图：纯数学模式（假设道路网）
    if (!game || !game.map) {
      base.seconds = Math.round(dist * TRAVEL.SEC_ROAD * 10) / 10;
      base.mode = 'math';
      return base;
    }
    const map = game.map;
    const cells = _segmentCells(x1, y1, x2, y2);

    // 峡谷统计
    let canyonN = 0;
    for (const c of cells) {
      if (!map.inBounds(c.x, c.y)) continue;
      if (map.terrain[c.y] && map.terrain[c.y][c.x] === T.CANYON) canyonN++;
    }
    // 桥捷径：线段被完好桥覆盖
    const br = this.bridgeCovering(cells);
    if (canyonN > 0 && br) {
      this.noteBridgeUse(br.id);
      base.seconds = Math.round(dist * TRAVEL.SEC_ROAD * 10) / 10;
      base.bridgeUsed = br.id;
      base.mode = 'bridge';
      return base;
    }
    if (canyonN > 0) {
      base.detourPenalty = Math.round(canyonN * TRAVEL.CANYON_DETOUR * 10) / 10;
      base.seconds = Math.round((dist * TRAVEL.SEC_OFF + base.detourPenalty) * 10) / 10;
      base.roadBonus = false;
      base.mode = 'canyon-detour';
      return base;
    }

    // 岩石：连续 ≥3 格考虑隧道
    const rockRun = _maxRunOnLine(map, x1, y1, x2, y2, T.ROCK);
    const tn = this.tunnelBetween(x1, y1, x2, y2);
    if (rockRun >= TRAVEL.ROCK_RUN_TUNNEL && tn) {
      base.seconds = Math.round(dist * TRAVEL.SEC_ROAD * 10) / 10;
      base.tunnelUsed = tn.id;
      base.mode = 'tunnel';
      return base;
    }
    if (rockRun >= TRAVEL.ROCK_RUN_TUNNEL) {
      base.detourPenalty = Math.round(rockRun * TRAVEL.ROCK_DETOUR * 10) / 10;
      base.seconds = Math.round((dist * TRAVEL.SEC_OFF + base.detourPenalty) * 10) / 10;
      base.roadBonus = false;
      base.mode = 'rock-detour';
      return base;
    }

    // 默认：道路网
    base.seconds = Math.round(dist * TRAVEL.SEC_ROAD * 10) / 10;
    return base;
  };

  // ---- 桥/隧道的 A* 代价与可走性 ----
  // 返回 null 表示该格不可走，否则返回移动代价
  TransitManager.prototype._transitCellCost = function (map, builder, x, y, now) {
    const T = _TERRAIN();
    if (!map.inBounds(x, y)) return null;
    if (map.isUnlocked && !map.isUnlocked(x, y)) return null;
    const t = map.terrain[y] ? map.terrain[y][x] : T.FLAT;

    // 桥面：捷径（完好桥）
    const br = this.bridgeAt(x, y);
    if (br && !br.damaged && t === T.CANYON) return 0.4;

    if (t === T.CANYON) return null;   // 无桥峡谷不可走
    if (t === T.CRATER) return 2.5;    // 环形山难走

    let cost;
    if (builder && typeof builder.at === 'function') {
      const b = builder.at(x, y);
      if (b && b.id === 'road') cost = 0.5;
      else if (b && b.id === 'highway') cost = 0.35;
      else cost = (t === T.ROCK) ? 3 : 1;
    } else {
      cost = (t === T.ROCK) ? 3 : 1;
    }
    // 拥堵附加
    cost += this.routePenalty(x, y, now);
    return cost;
  };

  // ---- 考虑桥/隧道/拥堵的 A*（起点→终点，返回 [{x,y}] 不含起点含终点） ----
  TransitManager.prototype.transitAwarePath = function (map, builder, sx, sy, tx, ty, now) {
    sx = _ix(sx); sy = _ix(sy); tx = _ix(tx); ty = _ix(ty);
    const t = now || Date.now();
    if (!map || !map.inBounds(tx, ty)) return null;
    if (sx === tx && sy === ty) return [];

    // 快捷路径：无桥/无隧道/无拥堵 → 直接用 logistics.astar（道路优先，语义一致）
    const hasShortcuts = this.bridges.some(b => !b.damaged) || this.tunnels.length > 0;
    const hasCongestion = this.roadUse.size > 0;
    try {
      if (!hasShortcuts && !hasCongestion && typeof astar === 'function') {
        return astar(map, builder, sx, sy, tx, ty);
      }
    } catch (e) { /* 降级走自研 A* */ }

    const key = (x, y) => y * map.size + x;
    const open = [];
    const cameFrom = new Map();
    const gScore = new Map();
    const closed = new Set();
    const h = (x, y) => Math.abs(x - tx) + Math.abs(y - ty);
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // 隧道洞口索引：格 key → {tunnel, other:{x,y}}
    const portalAt = (x, y) => {
      for (const tn of this.tunnels) {
        if (_ix(tn.ax) === x && _ix(tn.ay) === y) return { tn, ox: _ix(tn.bx), oy: _ix(tn.by) };
        if (_ix(tn.bx) === x && _ix(tn.by) === y) return { tn, ox: _ix(tn.ax), oy: _ix(tn.ay) };
      }
      return null;
    };

    gScore.set(key(sx, sy), 0);
    open.push({ x: sx, y: sy, f: h(sx, sy) });
    let guard = 0;

    while (open.length > 0 && guard++ < 12000) {
      let bi = 0;
      for (let i = 1; i < open.length; i++) if (open[i].f < open[bi].f) bi = i;
      const cur = open.splice(bi, 1)[0];
      const ck = key(cur.x, cur.y);
      if (cur.x === tx && cur.y === ty) {
        const path = [];
        let k = ck, cx = tx, cy = ty;
        while (cameFrom.has(k)) {
          path.unshift({ x: cx, y: cy });
          const p = cameFrom.get(k);
          cx = p.x; cy = p.y; k = key(cx, cy);
        }
        return path;
      }
      if (closed.has(ck)) continue;
      closed.add(ck);

      // 邻居：四向 + 隧道传送门
      const neighbors = [];
      for (const [dx, dy] of DIRS) neighbors.push({ x: cur.x + dx, y: cur.y + dy, portal: false });
      const portal = portalAt(cur.x, cur.y);
      if (portal) neighbors.push({ x: portal.ox, y: portal.oy, portal: true, tn: portal.tn });

      for (const nb of neighbors) {
        const nk = key(nb.x, nb.y);
        if (closed.has(nk)) continue;
        let stepCost;
        if (nb.portal) {
          stepCost = nb.tn.len * 0.6;  // 穿隧道：按隧道长度打折
        } else {
          stepCost = this._transitCellCost(map, builder, nb.x, nb.y, t);
          if (stepCost === null) continue;
        }
        const tg = gScore.get(ck) + stepCost;
        if (tg < (gScore.get(nk) === undefined ? Infinity : gScore.get(nk))) {
          cameFrom.set(nk, { x: cur.x, y: cur.y });
          gScore.set(nk, tg);
          const f = tg + h(nb.x, nb.y);
          const existing = open.find(n => n.x === nb.x && n.y === nb.y);
          if (existing) existing.f = Math.min(existing.f, f);
          else open.push({ x: nb.x, y: nb.y, f });
        }
      }
    }
    return null; // 无路
  };

  // ---- 供地图绘制的结构数据 ----
  TransitManager.prototype.getStructures = function () {
    return {
      bridges: this.getBridges(),
      tunnels: this.getTunnels(),
    };
  };

  // ---- 渲染：桥 + 隧道（一站式，供 game.render 调用） ----
  TransitManager.prototype.renderStructures = function (ctx, tile, now) {
    this.renderBridges(ctx, tile, now);
    this.renderTunnels(ctx, tile, now);
  };
}

/* ============================================================================
 * §5 公交系统：线路 / 站点 / 车辆 / 候车队列 / 幸福度
 * ----------------------------------------------------------------------------
 * 数据：
 *   busRoutes: [{id, name, color, stops:[{x,y,waiting,boarded,alighted}],
 *                buses:[Bus], interval(秒), level(1-3), active,
 *                nextDeparture, pathCache:Map, totalBoarded, totalAlighted,
 *                createdAt}]
 *   Bus: {id, routeId, x,y(浮点格坐标), fromIdx, toIdx, dir(+1/-1), state,
 *         dwellUntil, path:[{x,y}], pathI, passengers:[{dest}], capacity,
 *         speedJitter}
 *   state: 'run' | 'dwell' | 'idle'
 * 规则见 TRANSITGUIDE[6..10]。
 * ========================================================================== */

const BUS = {
  BASE_CAP: 20,              // 基础载客
  CAP_PER_LEVEL: 10,         // 每级 +10
  MAX_LEVEL: 3,
  DWELL_MS: 3000,            // 每站停 3 秒
  SPEED: 4.5,                // 格/秒（基础）
  MAX_STOPS: 12,             // 每线最多站点
  STOP_RADIUS: 5,            // 幸福度/候车半径（格）
  WAIT_CAP: 30,              // 每站候车上限
  WAIT_RATE: 0.06,           // 每秒每单位居住人口容量的候车增长率
  MAX_BUSES: 4,              // 每线最多车辆
  CREATE_COST: { iron: 30, steel: 10 },
  STOP_COST: { iron: 5 },
  UPGRADE_COST: lv => ({ iron: 40 * lv, steel: 30 * lv }), // 升到 lv+1 的费用
  HAPPINESS: [0, 2, 3, 5],   // 按线路等级的幸福度加成
  DEPART_INTERVAL: 45,       // 发车间隔（秒）
};

// 线路配色（按 id 取模）
const ROUTE_COLORS = ['#38bdf8', '#f472b6', '#a3e635', '#facc15', '#c084fc', '#fb923c'];

function _mixinBus(TransitManager) {

  // ============ 线路管理 ============

  TransitManager.prototype.createRoute = function (name, game) {
    const inv = _invOf(game);
    if (inv) {
      if (!_canAfford(inv, BUS.CREATE_COST))
        return { ok: false, reason: '建线需要铁矿×30 钢材×10，缺' + _missingRes(inv, BUS.CREATE_COST) };
      _spendRes(inv, BUS.CREATE_COST);
    }
    const id = this._seq.route++;
    const route = {
      id,
      name: String(name || ('线路' + id)).slice(0, 16),
      color: ROUTE_COLORS[(id - 1) % ROUTE_COLORS.length],
      stops: [],
      buses: [],
      interval: BUS.DEPART_INTERVAL,
      level: 1,
      active: true,
      nextDeparture: Date.now(),
      pathCache: new Map(),
      totalBoarded: 0,
      totalAlighted: 0,
      createdAt: Date.now(),
    };
    this.busRoutes.push(route);
    this.stats.routesCreated = (this.stats.routesCreated || 0) + 1;
    return { ok: true, route: this._publicRoute(route) };
  };

  TransitManager.prototype.getRoute = function (id) {
    return this.busRoutes.find(r => r.id === id) || null;
  };

  // 站点合法性：道路上，或建筑 8 邻域内
  TransitManager.prototype._stopOk = function (x, y, game) {
    const map = game && game.map, builder = game && game.builder;
    if (!map) return { ok: false, reason: '游戏未就绪' };
    x = _ix(x); y = _ix(y);
    if (!map.inBounds(x, y)) return { ok: false, reason: `(${x},${y}) 超出地图` };
    if (map.isUnlocked && !map.isUnlocked(x, y)) return { ok: false, reason: `(${x},${y}) 扇区未解锁` };
    // 道路上直接合格
    if (builder && typeof builder.isRoad === 'function' && builder.isRoad(x, y)) return { ok: true };
    if (builder && typeof builder.at === 'function' && builder.at(x, y) && builder.at(x, y).id === 'road')
      return { ok: true };
    // 建筑 8 邻域内合格（公交站设在建筑旁）
    if (builder && typeof builder.at === 'function') {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (!dx && !dy) continue;
          const b = builder.at(x + dx, y + dy);
          if (b) return { ok: true };
        }
      }
    } else {
      // 无 builder 信息：放宽为可走地形即可
      const T = _TERRAIN();
      const t = map.terrain[y] ? map.terrain[y][x] : T.FLAT;
      if (t === T.FLAT || t === T.POLAR) return { ok: true };
    }
    return { ok: false, reason: `(${x},${y}) 须在道路上或建筑旁` };
  };

  TransitManager.prototype.addStop = function (routeId, x, y, game) {
    const route = this.getRoute(routeId);
    if (!route) return { ok: false, reason: `找不到线路 #${routeId}` };
    x = _ix(x); y = _ix(y);
    if (route.stops.length >= BUS.MAX_STOPS)
      return { ok: false, reason: `每线最多 ${BUS.MAX_STOPS} 站` };
    if (route.stops.some(s => s.x === x && s.y === y))
      return { ok: false, reason: `(${x},${y}) 已是本站` };
    const chk = this._stopOk(x, y, game);
    if (!chk.ok) return { ok: false, reason: chk.reason };
    const inv = _invOf(game);
    if (inv) {
      if (!_canAfford(inv, BUS.STOP_COST))
        return { ok: false, reason: '设站需要铁矿×5，缺' + _missingRes(inv, BUS.STOP_COST) };
      _spendRes(inv, BUS.STOP_COST);
    }
    route.stops.push({ x, y, waiting: 0, boarded: 0, alighted: 0 });
    route.pathCache.clear();  // 站点变化 → 路径缓存失效
    // 首站设好后立即允许发车
    if (route.stops.length >= 2 && route.nextDeparture > Date.now())
      route.nextDeparture = Date.now();
    return { ok: true, stopCount: route.stops.length };
  };

  TransitManager.prototype.removeStop = function (routeId, index) {
    const route = this.getRoute(routeId);
    if (!route) return { ok: false, reason: `找不到线路 #${routeId}` };
    if (index < 0 || index >= route.stops.length)
      return { ok: false, reason: `站点序号 ${index} 越界` };
    route.stops.splice(index, 1);
    route.pathCache.clear();
    // 修正车辆的站点索引（越界的车回起点）
    for (const bus of route.buses) {
      if (bus.toIdx >= route.stops.length) { bus.toIdx = 0; bus.fromIdx = 0; }
      if (bus.fromIdx >= route.stops.length) bus.fromIdx = 0;
      bus.passengers = bus.passengers.filter(p => p.dest < route.stops.length);
    }
    return { ok: true, stopCount: route.stops.length };
  };

  TransitManager.prototype.removeRoute = function (id) {
    const i = this.busRoutes.findIndex(r => r.id === id);
    if (i < 0) return { ok: false, reason: `找不到线路 #${id}` };
    this.busRoutes.splice(i, 1);
    this.stats.routesRemoved = (this.stats.routesRemoved || 0) + 1;
    return { ok: true };
  };

  TransitManager.prototype.toggleRoute = function (id) {
    const route = this.getRoute(id);
    if (!route) return { ok: false, reason: `找不到线路 #${id}` };
    route.active = !route.active;
    if (route.active) route.nextDeparture = Date.now(); // 恢复后立即补发车
    return { ok: true, active: route.active };
  };

  // 线路升级：载客 +10/级，幸福度加成提升
  TransitManager.prototype.upgradeRoute = function (id, game) {
    const route = this.getRoute(id);
    if (!route) return { ok: false, reason: `找不到线路 #${id}` };
    if (route.level >= BUS.MAX_LEVEL)
      return { ok: false, reason: `已满级（Lv${BUS.MAX_LEVEL}）` };
    const cost = BUS.UPGRADE_COST(route.level);
    const inv = _invOf(game);
    if (inv) {
      if (!_canAfford(inv, cost))
        return { ok: false, reason: `升级需要铁矿×${cost.iron} 钢材×${cost.steel}，缺` + _missingRes(inv, cost) };
      _spendRes(inv, cost);
    }
    route.level++;
    const cap = this._busCapacity(route);
    for (const bus of route.buses) bus.capacity = cap;
    return { ok: true, level: route.level, capacity: cap };
  };

  TransitManager.prototype._busCapacity = function (route) {
    return BUS.BASE_CAP + (route.level - 1) * BUS.CAP_PER_LEVEL;
  };

  TransitManager.prototype._publicRoute = function (r) {
    return {
      id: r.id, name: r.name, color: r.color,
      stops: r.stops.map(s => ({ x: s.x, y: s.y, waiting: Math.round(s.waiting) })),
      busCount: r.buses.length, interval: r.interval, level: r.level,
      active: r.active, capacity: this._busCapacity(r),
      totalBoarded: r.totalBoarded, totalAlighted: r.totalAlighted,
    };
  };

  TransitManager.prototype.getRoutes = function () {
    return this.busRoutes.map(r => this._publicRoute(r));
  };

  // ============ 发车与路径 ============

  // 目标车辆数：ceil(站数/2)，上限 4
  TransitManager.prototype._targetBusCount = function (route) {
    if (route.stops.length < 2) return 0;
    return Math.min(BUS.MAX_BUSES, Math.max(1, Math.ceil(route.stops.length / 2)));
  };

  // 两站间路径（缓存；考虑桥/隧道/拥堵）
  TransitManager.prototype._routeLegPath = function (route, fromIdx, toIdx, game) {
    const key = fromIdx + '>' + toIdx;
    if (route.pathCache.has(key)) return route.pathCache.get(key);
    const a = route.stops[fromIdx], b = route.stops[toIdx];
    if (!a || !b || !game || !game.map) return null;
    const path = this.transitAwarePath(game.map, game.builder, a.x, a.y, b.x, b.y, Date.now());
    // 路径不存在 → 允许直线（标记为直行，车辆按直线走）
    const finalPath = path || _segmentCells(a.x, a.y, b.x, b.y).slice(1);
    route.pathCache.set(key, finalPath);
    return finalPath;
  };

  TransitManager.prototype._spawnBus = function (route, game) {
    const s0 = route.stops[0];
    const bus = {
      id: this._seq.bus++,
      routeId: route.id,
      x: s0.x, y: s0.y,
      fromIdx: 0, toIdx: 1 % route.stops.length,
      dir: 1,
      state: 'dwell',
      dwellUntil: Date.now() + BUS.DWELL_MS,
      path: [],
      pathI: 0,
      passengers: [],
      capacity: this._busCapacity(route),
      speedJitter: 0.9 + Math.random() * 0.2,  // 每辆车 ±10% 车速差异
      arrivedAt: Date.now(),
    };
    route.buses.push(bus);
    this.stats.busesSpawned = (this.stats.busesSpawned || 0) + 1;
    return bus;
  };

  // ============ 候车队列累积（每秒调用一次，由 update 节流） ============
  TransitManager.prototype._accumulateWaiting = function (game) {
    const builder = game && game.builder;
    if (!builder || typeof builder.buildings === 'undefined') return;
    // 居住建筑判定：levelDef 有 popCap，或 id 为 habitat/dome
    const isResidential = (b) => {
      if (b.id === 'habitat' || b.id === 'dome') return true;
      try {
        const lv = builder.levelDef ? builder.levelDef(b) : null;
        return !!(lv && lv.popCap > 0);
      } catch (e) { return false; }
    };
    const popCapOf = (b) => {
      try {
        const lv = builder.levelDef ? builder.levelDef(b) : null;
        return (lv && lv.popCap) || 0;
      } catch (e) { return 0; }
    };
    for (const route of this.busRoutes) {
      if (!route.active) continue;
      for (const stop of route.stops) {
        let nearbyPop = 0;
        for (const b of builder.buildings) {
          if (!isResidential(b)) continue;
          if (_dist(b.x, b.y, stop.x, stop.y) <= BUS.STOP_RADIUS) nearbyPop += popCapOf(b);
        }
        if (nearbyPop > 0) {
          stop.waiting = Math.min(BUS.WAIT_CAP, stop.waiting + nearbyPop * BUS.WAIT_RATE);
        }
      }
    }
  };

  // ============ 车辆更新 ============
  TransitManager.prototype._updateBuses = function (now, dt, game) {
    const dtSec = dt / 1000;
    for (const route of this.busRoutes) {
      // 发车
      if (route.active && route.stops.length >= 2) {
        const target = this._targetBusCount(route);
        if (route.buses.length < target && now >= route.nextDeparture) {
          this._spawnBus(route, game);
          route.nextDeparture = now + route.interval * 1000;
        }
      }
      // 逐车更新
      for (const bus of route.buses) {
        if (!route.active || route.stops.length < 2) {
          bus.state = 'idle';
          continue;
        }
        if (bus.state === 'idle') {
          // 恢复运营：就近找站重新发车
          bus.fromIdx = 0; bus.toIdx = 1 % route.stops.length; bus.dir = 1;
          bus.state = 'dwell'; bus.dwellUntil = now + BUS.DWELL_MS;
          continue;
        }
        if (bus.state === 'dwell') {
          if (now >= bus.dwellUntil) this._busDepart(bus, route, game, now);
          continue;
        }
        // state === 'run'：沿路径移动
        this._busMove(bus, route, game, now, dtSec);
      }
    }
    // 候车累积（每秒一次）
    if (!this._lastWaitAcc || now - this._lastWaitAcc >= 1000) {
      this._lastWaitAcc = now;
      try { this._accumulateWaiting(game); } catch (e) {}
    }
  };

  // 到站 → 下客/上客 → 定下一站
  TransitManager.prototype._busArrive = function (bus, route, game, now) {
    const stopIdx = bus.toIdx;
    const stop = route.stops[stopIdx];
    bus.x = stop.x; bus.y = stop.y;
    bus.fromIdx = stopIdx;

    // 下客：目的地是本站的乘客下车（累积 OD 矩阵）
    const before = bus.passengers.length;
    const survivors = [];
    for (const p of bus.passengers) {
      if (p.dest === stopIdx) {
        const o = Number.isInteger(p.origin) ? p.origin : -1;
        if (o >= 0) {
          route.od = route.od || {};
          const k = o + '>' + stopIdx;
          route.od[k] = (route.od[k] || 0) + 1;
        }
      } else {
        survivors.push(p);
      }
    }
    bus.passengers = survivors;
    const alighted = before - bus.passengers.length;
    stop.alighted += alighted;
    route.totalAlighted += alighted;

    // 上客：候车队列按容量上车，每人随机分配下车站（≠本站），记录起点
    let boarded = 0;
    const nStops = route.stops.length;
    while (bus.passengers.length < bus.capacity && stop.waiting >= 1 && nStops > 1) {
      let dest = Math.floor(Math.random() * nStops);
      if (dest === stopIdx) dest = (dest + 1) % nStops; // 简单避开本站
      bus.passengers.push({ dest, origin: stopIdx });
      stop.waiting -= 1;
      boarded++;
    }
    stop.boarded += boarded;
    route.totalBoarded += boarded;
    this.stats.passengersBoarded = (this.stats.passengersBoarded || 0) + boarded;

    bus.state = 'dwell';
    bus.dwellUntil = now + BUS.DWELL_MS;
    bus.arrivedAt = now;
  };

  // 发车：定下一站（终点折返），取路径
  TransitManager.prototype._busDepart = function (bus, route, game, now) {
    const n = route.stops.length;
    let next = bus.fromIdx + bus.dir;
    if (next >= n) { bus.dir = -1; next = bus.fromIdx - 1; }
    if (next < 0) { bus.dir = 1; next = bus.fromIdx + 1; }
    // 只有 1 站的极端情况（理论上不会发生，已有守卫）
    if (next < 0 || next >= n) { bus.state = 'dwell'; bus.dwellUntil = now + BUS.DWELL_MS; return; }
    bus.toIdx = next;
    bus.path = this._routeLegPath(route, bus.fromIdx, bus.toIdx, game) || [];
    bus.pathI = 0;
    bus.state = 'run';
    // 发车日志（发车间隔统计用，保留最近 100 次）
    route._departLog = route._departLog || [];
    route._departLog.push(now);
    if (route._departLog.length > 100) route._departLog.splice(0, route._departLog.length - 100);
  };

  // 行驶：按路径逐格移动，速度受拥堵影响
  TransitManager.prototype._busMove = function (bus, route, game, now, dtSec) {
    if (bus.pathI >= bus.path.length) {
      this._busArrive(bus, route, game, now);
      return;
    }
    const target = bus.path[bus.pathI];
    // 拥堵倍率（目标格）
    const mul = this.speedMulAt(target.x, target.y, now);
    const speed = BUS.SPEED * bus.speedJitter * mul * _logisticsSpeedMul(game);
    const dx = target.x - bus.x, dy = target.y - bus.y;
    const dist = Math.hypot(dx, dy);
    const step = speed * dtSec;
    if (dist <= step || dist < 1e-6) {
      bus.x = target.x; bus.y = target.y;
      bus.pathI++;
      // 记录车流（拥堵统计）
      this.recordPass(target.x, target.y, now);
      // 桥面通过记磨损
      const br = this.bridgeAt(target.x, target.y);
      if (br) this.noteBridgeUse(br.id);
    } else {
      bus.x += dx / dist * step;
      bus.y += dy / dist * step;
    }
  };

  // ============ 幸福度（每 5 秒重算，见 TRANSITGUIDE[9]） ============
  TransitManager.prototype._recomputeHappiness = function (game) {
    this.happinessBonus.clear();
    const builder = game && game.builder;
    if (!builder || !builder.buildings) return;
    const isResidential = (b) => {
      if (b.id === 'habitat' || b.id === 'dome') return true;
      try {
        const lv = builder.levelDef ? builder.levelDef(b) : null;
        return !!(lv && lv.popCap > 0);
      } catch (e) { return false; }
    };
    // 先收集所有启用线路的站点
    const activeStops = [];
    for (const route of this.busRoutes) {
      if (!route.active) continue;
      const bonus = BUS.HAPPINESS[route.level] || 0;
      for (const s of route.stops) activeStops.push({ x: s.x, y: s.y, bonus });
    }
    if (!activeStops.length) return;
    // 居住建筑取覆盖它的最大加成
    const plain = {};
    for (const b of builder.buildings) {
      if (!isResidential(b)) continue;
      let best = 0;
      for (const s of activeStops) {
        if (_dist(b.x, b.y, s.x, s.y) <= BUS.STOP_RADIUS && s.bonus > best) best = s.bonus;
      }
      if (best > 0) {
        this.happinessBonus.set(_key(b.x, b.y), best);
        plain[_key(b.x, b.y)] = best;
      }
    }
    // 若 pop 系统提供接口，直接推送（否则 pop 自行读 happinessBonus）
    try {
      if (game && game.pop && typeof game.pop.setTransitHappiness === 'function') {
        game.pop.setTransitHappiness(plain);
      }
    } catch (e) {}
  };

  // 查询某建筑的公交幸福度加成（pop 系统用）
  TransitManager.prototype.getHappinessAt = function (x, y) {
    return this.happinessBonus.get(_key(_ix(x), _ix(y))) || 0;
  };

  // ============ 统计 / 渲染 ============
  TransitManager.prototype.getBusStats = function () {
    let buses = 0, aboard = 0, waiting = 0;
    for (const r of this.busRoutes) {
      buses += r.buses.length;
      for (const b of r.buses) aboard += b.passengers.length;
      for (const s of r.stops) waiting += Math.floor(s.waiting);
    }
    return {
      routes: this.busRoutes.length,
      activeRoutes: this.busRoutes.filter(r => r.active).length,
      buses,
      passengersAboard: aboard,
      waitingTotal: waiting,
      boardedTotal: this.stats.passengersBoarded || 0,
    };
  };

  // 渲染：站点（彩色圆牌 + 候车人数）与车辆（🚌 + 载客数）
  TransitManager.prototype.renderBusSystem = function (ctx, tile, now) {
    if (!ctx) return;
    const t = now || Date.now();
    for (const route of this.busRoutes) {
      // 线路连线（站点间虚线）
      if (route.stops.length >= 2) {
        ctx.strokeStyle = route.active ? route.color : '#52525b';
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = Math.max(1, tile * 0.08);
        ctx.setLineDash([Math.max(2, tile * 0.15), Math.max(2, tile * 0.15)]);
        ctx.beginPath();
        route.stops.forEach((s, i) => {
          const px = (s.x + 0.5) * tile, py = (s.y + 0.5) * tile;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        });
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
      }
      // 站点
      for (const s of route.stops) {
        const px = (s.x + 0.5) * tile, py = (s.y + 0.5) * tile;
        const r = Math.max(3, tile * 0.22);
        ctx.fillStyle = route.active ? route.color : '#52525b';
        ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = `${Math.max(6, tile * 0.22)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('🚏', px, py + r * 0.4);
        ctx.textAlign = 'left';
        // 候车人数
        const w = Math.floor(s.waiting);
        if (w > 0) {
          ctx.fillStyle = '#fef3c7';
          ctx.font = `${Math.max(7, tile * 0.2)}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillText(w, px, py - r - 2);
          ctx.textAlign = 'left';
        }
      }
      // 车辆
      for (const bus of route.buses) {
        const px = (bus.x + 0.5) * tile, py = (bus.y + 0.5) * tile;
        const fs = Math.max(10, tile * 0.55);
        ctx.font = `${fs}px sans-serif`;
        ctx.textAlign = 'center';
        // 停靠时轻微弹跳
        const bob = bus.state === 'dwell' ? Math.sin(t / 150) * tile * 0.05 : 0;
        ctx.fillText('🚌', px, py + fs * 0.35 + bob);
        ctx.textAlign = 'left';
        // 载客条
        const w = tile * 0.9, h = Math.max(2, tile * 0.07);
        const ratio = bus.capacity ? bus.passengers.length / bus.capacity : 0;
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(px - w / 2, py - tile * 0.55, w, h);
        ctx.fillStyle = ratio > 0.85 ? '#ef4444' : '#4ade80';
        ctx.fillRect(px - w / 2, py - tile * 0.55, w * Math.min(1, ratio), h);
      }
    }
  };
}

/* ============================================================================
 * §6 货运专线：生产建筑 → 仓库 的定点资源专线
 * ----------------------------------------------------------------------------
 * 数据：
 *   freightLines: [{id, name, from:{x,y}, to:{x,y}, resource, priority(1-3),
 *                   active, trucks:[], delivered, trips, pathCache, builtAt, cost}]
 * 卡车循环：起点装货(2s) → 运往终点 → 卸货入库 → 空车返回 → …
 * 卡车复用：优先用 LogisticsManager 的 Truck 类（new Truck + assign/update/
 *           tryUnload/render 全套 API）；缺失时用内置简易卡车（同语义）。
 * 规则见 TRANSITGUIDE[10..12]。
 * ========================================================================== */

const FREIGHT = {
  CARRY: 6,                  // 每趟载货（与 TRUCK.CARRY 对齐）
  LOAD_MS: 2000,             // 装货 2 秒
  SPEED: 4,                  // 格/秒（基础）
  CREATE_COST: { iron: 20, steel: 5 },
  IRON_PER_TILE: 1,          // 每格距离额外铁矿
  PRIORITY_SPEED: [0, 1.0, 1.15, 1.3],  // 优先级速度倍率（索引 1-3）
  TRUCKS_BY_PRIORITY: [0, 1, 1, 2],     // 优先级 → 配车数
  FULL_RETRY_MS: 5000,       // 仓库满时重试间隔
  MAX_LINES: 24,             // 专线总数上限（防刷）
};

// 建筑是否可做货运端点：生产建筑（produce/convert）或仓储物流建筑
function _freightEndpointKind(b, builder, wantSource) {
  if (!b) return null;
  const STORE_IDS = ['warehouse', 'depot', 'logistics'];
  if (STORE_IDS.includes(b.id)) return 'store';
  let lv = null;
  try { lv = builder && builder.levelDef ? builder.levelDef(b) : null; } catch (e) {}
  if (lv && (lv.produce || lv.convert)) return 'produce';
  // 建筑定义上带 produce/convert 但 levelDef 拿不到时，按 id 白名单兜底
  const PRODUCE_IDS = ['miner', 'pump', 'smelter', 'greenhouse', 'waterplant', 'lab',
    'uminer', 'he3rig', 'fusion', 'nuclear'];
  if (PRODUCE_IDS.includes(b.id)) return 'produce';
  return null;
}

function _mixinFreight(TransitManager) {

  // ============ 建线 / 拆线 / 启停 / 优先级 ============

  TransitManager.prototype.createLine = function (fromX, fromY, toX, toY, resource, game) {
    if (!game || !game.map) return { ok: false, reason: '游戏未就绪（缺地图）' };
    const map = game.map, builder = game.builder;
    fromX = _ix(fromX); fromY = _ix(fromY); toX = _ix(toX); toY = _ix(toY);

    if (this.freightLines.length >= FREIGHT.MAX_LINES)
      return { ok: false, reason: `专线已达上限 ${FREIGHT.MAX_LINES} 条` };
    if (!_isValidRes(resource))
      return { ok: false, reason: `未知资源「${resource}」` };
    for (const [ex, ey, tag] of [[fromX, fromY, '起点'], [toX, toY, '终点']]) {
      if (!map.inBounds(ex, ey)) return { ok: false, reason: tag + `(${ex},${ey}) 超出地图` };
      if (map.isUnlocked && !map.isUnlocked(ex, ey))
        return { ok: false, reason: tag + `(${ex},${ey}) 扇区未解锁` };
    }
    if (fromX === toX && fromY === toY)
      return { ok: false, reason: '起点终点不能相同' };
    if (!builder || typeof builder.at !== 'function')
      return { ok: false, reason: '缺少建筑管理器，无法校验端点' };

    const bFrom = builder.at(fromX, fromY);
    const bTo = builder.at(toX, toY);
    const kFrom = _freightEndpointKind(bFrom, builder, true);
    const kTo = _freightEndpointKind(bTo, builder, false);
    if (!bFrom || !kFrom)
      return { ok: false, reason: `起点(${fromX},${fromY}) 须是生产建筑或仓库/运输站/物流中心` };
    if (!bTo || !kTo)
      return { ok: false, reason: `终点(${toX},${toY}) 须是仓库/运输站/物流中心或生产建筑` };
    // 起点最好是生产端：若起点是纯仓储而终点是生产，给出提示但允许（玩家可能想反向调拨）
    let note = null;
    if (kFrom === 'store' && kTo === 'produce')
      note = '起点是仓储、终点是生产：按调拨线处理（从起点仓库取货）';

    // 费用：建线费 + 每格铁矿
    const distTiles = Math.max(1, Math.ceil(_dist(fromX, fromY, toX, toY)));
    const cost = {
      iron: FREIGHT.CREATE_COST.iron + FREIGHT.IRON_PER_TILE * distTiles,
      steel: FREIGHT.CREATE_COST.steel,
    };
    const inv = _invOf(game);
    if (inv) {
      if (!_canAfford(inv, cost))
        return { ok: false, reason: `建线需要铁矿×${cost.iron} 钢材×${cost.steel}，缺` + _missingRes(inv, cost) };
      _spendRes(inv, cost);
    }

    const id = this._seq.line++;
    const line = {
      id,
      name: `${_resName(resource)}专线${id}`,
      from: { x: fromX, y: fromY },
      to: { x: toX, y: toY },
      resource,
      priority: 2,
      active: true,
      trucks: [],
      delivered: 0,
      trips: 0,
      pathCache: new Map(),
      builtAt: Date.now(),
      cost,
      note,
    };
    this.freightLines.push(line);
    this.stats.linesCreated = (this.stats.linesCreated || 0) + 1;
    // 立即配车
    this._ensureLineTrucks(line, game);
    const r = { ok: true, line: this._publicLine(line) };
    if (note) r.note = note;
    return r;
  };

  TransitManager.prototype.getLine = function (id) {
    return this.freightLines.find(l => l.id === id) || null;
  };

  TransitManager.prototype.removeLine = function (id) {
    const i = this.freightLines.findIndex(l => l.id === id);
    if (i < 0) return { ok: false, reason: `找不到专线 #${id}` };
    this.freightLines.splice(i, 1);
    this.stats.linesRemoved = (this.stats.linesRemoved || 0) + 1;
    return { ok: true };
  };

  TransitManager.prototype.toggleLine = function (id) {
    const line = this.getLine(id);
    if (!line) return { ok: false, reason: `找不到专线 #${id}` };
    line.active = !line.active;
    return { ok: true, active: line.active };
  };

  TransitManager.prototype.setPriority = function (id, p) {
    const line = this.getLine(id);
    if (!line) return { ok: false, reason: `找不到专线 #${id}` };
    line.priority = _clamp(Math.round(p) || 2, 1, 3);
    return { ok: true, priority: line.priority };
  };

  TransitManager.prototype.renameLine = function (id, name) {
    const line = this.getLine(id);
    if (!line) return { ok: false, reason: `找不到专线 #${id}` };
    line.name = String(name || line.name).slice(0, 20);
    return { ok: true, name: line.name };
  };

  TransitManager.prototype._publicLine = function (l) {
    return {
      id: l.id, name: l.name,
      from: { ...l.from }, to: { ...l.to },
      resource: l.resource, resourceName: _resName(l.resource),
      priority: l.priority, active: l.active,
      trucks: l.trucks.length, delivered: l.delivered, trips: l.trips,
    };
  };

  TransitManager.prototype.getLines = function () {
    return this.freightLines.map(l => this._publicLine(l));
  };

  // ============ 卡车：复用 LogisticsManager.Truck 或简易卡车 ============

  // 能否用 logistics 的 Truck 类
  TransitManager.prototype._truckClassAvailable = function (game) {
    try {
      return !!(game && game.logistics && typeof Truck === 'function');
    } catch (e) { return false; }
  };

  // 建一辆专线卡车。语义映射：
  //   Truck(depot=终点仓库) + assign(起点, resource)：toRes(起点装货) → loading →
  //   toDepot(终点) → tryUnload → 卸货。恰好是"起点取货→终点交货"。
  TransitManager.prototype._makeFreightTruck = function (line, game) {
    const id = this._seq.truck++;
    if (this._truckClassAvailable(game)) {
      try {
        const t = new Truck(line.to.x, line.to.y);   // depot = 终点（卸货点）
        t._freight = true;
        t._lineId = line.id;
        t._ftId = id;
        const ok = t.assign(line.from.x, line.from.y, line.resource, game.map, game.builder);
        if (!ok) return { ok: false, reason: '起点终点间无路可走' };
        t._waitUntil = 0;
        return { ok: true, truck: t, kind: 'truck' };
      } catch (e) {
        // 建 Truck 失败 → 降级简易卡车
      }
    }
    // ---- 兜底：简易卡车 {x,y,from,to,load}（任务书指定的最小形态） ----
    const path = this.transitAwarePath(game.map, game.builder,
      line.from.x, line.from.y, line.to.x, line.to.y, Date.now());
    const simple = {
      _simple: true, _ftId: id, _lineId: line.id,
      x: line.from.x, y: line.from.y,       // 整数格（任务书形态）
      px: line.from.x, py: line.from.y,     // 浮点渲染位置
      from: { ...line.from }, to: { ...line.to },
      load: 0, resource: line.resource,
      state: 'loading',                      // loading → toDest → unloading → toSrc → …
      stateUntil: Date.now() + FREIGHT.LOAD_MS,
      path: path || [], pathI: 0,
      _waitUntil: 0,
    };
    return { ok: true, truck: simple, kind: 'simple' };
  };

  // 保证每线配车数 = TRUCKS_BY_PRIORITY[priority]
  TransitManager.prototype._ensureLineTrucks = function (line, game) {
    if (!line.active) return;
    const want = FREIGHT.TRUCKS_BY_PRIORITY[line.priority] || 1;
    let guard = 0;
    while (line.trucks.length < want && guard++ < 4) {
      const r = this._makeFreightTruck(line, game);
      if (!r.ok) break;  // 无路：不再硬塞车
      line.trucks.push(r.truck);
      this.stats.freightTrucksSpawned = (this.stats.freightTrucksSpawned || 0) + 1;
    }
    // 优先级降低导致超配 → 多余车辆召回（就地移除，最诚实的做法）
    while (line.trucks.length > want) line.trucks.pop();
  };

  // ============ 卡车更新 ============
  TransitManager.prototype._updateFreight = function (now, dt, game) {
    const inv = _invOf(game);
    if (!game || !game.map) return;
    const dtSec = dt / 1000;

    // 收集本 tick 的卸货事件，按优先级排序处理（高优先级先入库）
    const deliveries = [];

    for (const line of this.freightLines) {
      this._ensureLineTrucks(line, game);
      if (!line.active) continue;
      const speedMul = _logisticsSpeedMul(game) * (FREIGHT.PRIORITY_SPEED[line.priority] || 1);

      for (const truck of line.trucks) {
        if (truck._simple) {
          this._updateSimpleTruck(truck, line, game, now, dtSec, speedMul, deliveries);
        } else {
          this._updateReuseTruck(truck, line, game, now, dtSec, speedMul, deliveries);
        }
      }
    }

    // 按优先级 desc 处理卸货（存储将满时高优先级先得）
    deliveries.sort((a, b) => b.priority - a.priority);
    const cap = _storageCap(game);
    for (const d of deliveries) {
      if (!inv) continue;
      const cur = inv[d.resource] || 0;
      if (cur + d.amount > cap) {
        const canAdd = Math.max(0, cap - cur);
        if (canAdd > 0) {
          inv[d.resource] = cur + canAdd;
          d.line.delivered += canAdd;
          try {
            d.line._deliveryLog = d.line._deliveryLog || [];
            this._pushFlowLog(d.line._deliveryLog, now, canAdd);
          } catch (e) {}
        }
        // 满了：该车 5 秒后重试（保留货物在车上）
        d.truck._waitUntil = now + FREIGHT.FULL_RETRY_MS;
        this.stats.freightBlockedFull = (this.stats.freightBlockedFull || 0) + 1;
        continue;
      }
      inv[d.resource] = cur + d.amount;
      d.line.delivered += d.amount;
      d.line.trips++;
      this.stats.freightDelivered = (this.stats.freightDelivered || 0) + d.amount;
      try {
        d.line._deliveryLog = d.line._deliveryLog || [];
        this._pushFlowLog(d.line._deliveryLog, now, d.amount);
      } catch (e) {}
    }
  };

  // —— 复用 Truck 类的卡车驱动 ——
  TransitManager.prototype._updateReuseTruck = function (t, line, game, now, dtSec, speedMul, deliveries) {
    if (now < (t._waitUntil || 0)) return;  // 满仓等待中
    // 拥堵影响速度：Truck.update 用固定 speedMul，这里按所在格拥堵做二次修正
    // 做法：把拥堵倍率折进传入的 speedMul（Truck.speed × speedMul = 格/秒）
    let mul = speedMul;
    try { mul *= this.speedMulAt(Math.round(t.px), Math.round(t.py), now); } catch (e) {}
    try {
      t.update(now, dtSec * 1000, game.map, game.builder, mul);
    } catch (e) { return; }
    // 记录车流
    this.recordPass(Math.round(t.px), Math.round(t.py), now);
    // 桥面磨损
    const br = this.bridgeAt(Math.round(t.px), Math.round(t.py));
    if (br) this.noteBridgeUse(br.id);
    // 卸货
    let dl = null;
    try { dl = t.tryUnload(); } catch (e) {}
    if (dl && dl.amount > 0) {
      deliveries.push({ line, truck: t, resource: dl.type || line.resource, amount: dl.amount, priority: line.priority });
      // 自动再出发：终点 → 起点装货
      try {
        const path = this.transitAwarePath(game.map, game.builder, line.to.x, line.to.y,
          line.from.x, line.from.y, now);
        if (path) {
          // 用 Truck.assign 重建"起点装货"任务（depot 仍是终点）
          t.assign(line.from.x, line.from.y, line.resource, game.map, game.builder);
        } else {
          t._waitUntil = now + FREIGHT.FULL_RETRY_MS; // 无路则稍后重试
        }
      } catch (e) { t._waitUntil = now + FREIGHT.FULL_RETRY_MS; }
    }
  };

  // —— 简易卡车驱动（与 Truck 语义一致的状态机） ——
  TransitManager.prototype._updateSimpleTruck = function (t, line, game, now, dtSec, speedMul, deliveries) {
    if (now < (t._waitUntil || 0)) return;
    const mul = speedMul * this.speedMulAt(_ix(t.px), _ix(t.py), now);
    const speed = FREIGHT.SPEED * mul;

    const moveAlong = () => {
      if (t.pathI >= t.path.length) return true; // 到达
      const target = t.path[t.pathI];
      const dx = target.x - t.px, dy = target.y - t.py;
      const dist = Math.hypot(dx, dy);
      const step = speed * dtSec;
      if (dist <= step || dist < 1e-6) {
        t.px = target.x; t.py = target.y;
        t.x = target.x; t.y = target.y;
        t.pathI++;
        this.recordPass(target.x, target.y, now);
        const br = this.bridgeAt(target.x, target.y);
        if (br) this.noteBridgeUse(br.id);
        return t.pathI >= t.path.length;
      }
      t.px += dx / dist * step;
      t.py += dy / dist * step;
      return false;
    };

    switch (t.state) {
      case 'loading':
        if (now >= t.stateUntil) {
          t.load = FREIGHT.CARRY;
          t.path = this.transitAwarePath(game.map, game.builder,
            _ix(t.px), _ix(t.py), line.to.x, line.to.y, now) || [];
          t.pathI = 0;
          t.state = 'toDest';
        }
        break;
      case 'toDest':
        if (moveAlong()) {
          t.state = 'unloading';
          t.stateUntil = now; // 卸货即时
        }
        break;
      case 'unloading': {
        // 卸货事件走统一的优先级队列（与复用卡车一致）
        deliveries.push({ line, truck: t, resource: line.resource, amount: t.load, priority: line.priority });
        t.load = 0;
        t.path = this.transitAwarePath(game.map, game.builder,
          line.to.x, line.to.y, line.from.x, line.from.y, now) || [];
        t.pathI = 0;
        t.state = 'toSrc';
        break;
      }
      case 'toSrc':
        if (moveAlong()) {
          t.state = 'loading';
          t.stateUntil = now + FREIGHT.LOAD_MS;
        }
        break;
      default:
        t.state = 'loading';
        t.stateUntil = now + FREIGHT.LOAD_MS;
    }
  };

  // ============ 统计 / 渲染 ============
  TransitManager.prototype.getFreightStats = function () {
    let trucks = 0, delivered = 0, trips = 0;
    for (const l of this.freightLines) {
      trucks += l.trucks.length;
      delivered += l.delivered;
      trips += l.trips;
    }
    return {
      lines: this.freightLines.length,
      activeLines: this.freightLines.filter(l => l.active).length,
      trucks,
      deliveredTotal: delivered,
      tripsTotal: trips,
      usingLogisticsTruck: this._truckClassAvailable(this._game),
    };
  };

  // 渲染：专线（起点🟢→终点🟠虚线 + 资源图标）与卡车
  TransitManager.prototype.renderFreight = function (ctx, tile, now) {
    if (!ctx) return;
    for (const line of this.freightLines) {
      const fx = (line.from.x + 0.5) * tile, fy = (line.from.y + 0.5) * tile;
      const tx = (line.to.x + 0.5) * tile, ty = (line.to.y + 0.5) * tile;
      ctx.strokeStyle = line.active ? '#f59e0b' : '#52525b';
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = Math.max(1, tile * 0.07);
      ctx.setLineDash([Math.max(2, tile * 0.2), Math.max(2, tile * 0.14)]);
      ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(tx, ty); ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
      // 端点标记
      ctx.font = `${Math.max(8, tile * 0.4)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('🟢', fx, fy + tile * 0.15);
      ctx.fillText('📦', tx, ty + tile * 0.15);
      // 资源名
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      const label = _resName(line.resource) + (line.priority === 3 ? '★★★' : line.priority === 2 ? '★★' : '★');
      const mx = (fx + tx) / 2, my = (fy + ty) / 2;
      ctx.font = `${Math.max(7, tile * 0.22)}px sans-serif`;
      const w = ctx.measureText(label).width + 6;
      ctx.fillRect(mx - w / 2, my - tile * 0.35, w, Math.max(10, tile * 0.3));
      ctx.fillStyle = '#fde68a';
      ctx.fillText(label, mx, my - tile * 0.12);
      ctx.textAlign = 'left';
      // 卡车
      for (const truck of line.trucks) {
        if (truck._simple) {
          const px = (truck.px + 0.5) * tile, py = (truck.py + 0.5) * tile;
          const s = tile * 0.26;
          ctx.fillStyle = truck.load > 0 ? '#f59e0b' : '#a8a29e';
          ctx.fillRect(px - s, py - s * 0.6, s * 2, s * 1.2);
          ctx.fillStyle = '#1a1a1a';
          ctx.beginPath();
          ctx.arc(px - s * 0.5, py + s * 0.6, s * 0.25, 0, Math.PI * 2);
          ctx.arc(px + s * 0.5, py + s * 0.6, s * 0.25, 0, Math.PI * 2);
          ctx.fill();
        } else if (typeof truck.render === 'function') {
          try { truck.render(ctx, tile); } catch (e) {}
        }
      }
    }
  };
}

/* ============================================================================
 * §7 拥堵模型：每格车流统计 → 速度惩罚 → 热力 overlay
 * ----------------------------------------------------------------------------
 * 数据：roadUse: Map "x,y" → {b:[6]（10秒桶×6=60秒滑动窗口）, last, total}
 *   - recordPass(x, y, now)：公交/货运/玩家 经过某格时调用
 *   - getCongestion(x, y, now?) → {x, y, vehPerMin, level(0/1/2), mul, capMul}
 *   - speedMulAt(x, y, now?) → 速度倍率（1 / 0.5 / 0.25）
 *   - routePenalty(x, y, now?) → A* 附加代价
 * 阈值：>30 辆/分钟 → ×0.5；>60 → ×0.25。高速路（highway）所在格容量×3。
 * 规则见 TRANSITGUIDE[13]。
 * ========================================================================== */

const CONG = {
  WINDOW_MS: 60000,      // 统计窗口：60 秒
  BUCKETS: 6,            // 桶数
  BUCKET_MS: 10000,      // 每桶 10 秒
  L1: 30,                // 一级拥堵阈值（辆/分钟）
  L2: 60,                // 二级拥堵阈值
  MUL_L1: 0.5,
  MUL_L2: 0.25,
  HIGHWAY_CAP_MUL: 3,    // 高速路容量倍率
  OVERLAY_MIN: 8,        // overlay 只画 ≥8 辆/分钟的格（降噪）
  SWEEP_MS: 30000,       // 定期清理过期格的间隔
};

function _mixinCongestion(TransitManager) {

  // ---- 桶旋转：把 cell 的时间推进到 now，返回 cell ----
  TransitManager.prototype._congCell = function (key, now, create) {
    let cell = this.roadUse.get(key);
    if (!cell) {
      if (!create) return null;
      cell = { b: new Array(CONG.BUCKETS).fill(0), last: now, total: 0, peak: 0 };
      this.roadUse.set(key, cell);
      return cell;
    }
    // 推进：now 相对 last 过去了多少个桶
    const elapsed = now - cell.last;
    if (elapsed >= CONG.WINDOW_MS) {
      cell.b.fill(0);  // 整个窗口过期，清零
      cell.last = now;
    } else if (elapsed >= CONG.BUCKET_MS) {
      const steps = Math.floor(elapsed / CONG.BUCKET_MS);
      for (let i = 0; i < steps; i++) {
        cell.b.push(0);
        cell.b.shift();
      }
      cell.last = now - (elapsed % CONG.BUCKET_MS);
    }
    return cell;
  };

  // ---- 记录一次通过 ----
  TransitManager.prototype.recordPass = function (x, y, now) {
    const t = now || Date.now();
    x = _ix(x); y = _ix(y);
    // 防御：game.map 存在时做边界检查（无 map 时照记，纯统计）
    const game = this._game;
    if (game && game.map && !game.map.inBounds(x, y)) return;
    const cell = this._congCell(_key(x, y), t, true);
    cell.b[CONG.BUCKETS - 1]++;
    cell.total++;
    // 峰值跟踪（滑动窗口内最大值）
    const cur = cell.b.reduce((a, b) => a + b, 0);
    if (cur > (cell.peak || 0)) cell.peak = cur;
    this.stats.passesRecorded = (this.stats.passesRecorded || 0) + 1;
  };

  // ---- 该格容量倍率：高速路 ×3（highway 建筑不存在时恒为 1） ----
  TransitManager.prototype._capacityMulAt = function (x, y) {
    try {
      const game = this._game;
      if (game && game.builder && typeof game.builder.at === 'function') {
        const b = game.builder.at(_ix(x), _ix(y));
        if (b && b.id === 'highway') return CONG.HIGHWAY_CAP_MUL;
      }
    } catch (e) {}
    return 1;
  };

  // ---- 查询拥堵（API） ----
  TransitManager.prototype.getCongestion = function (x, y, now) {
    const t = now || Date.now();
    x = _ix(x); y = _ix(y);
    const cell = this._congCell(_key(x, y), t, false);
    const vehPerMin = cell ? cell.b.reduce((a, b) => a + b, 0) : 0;
    const peak = cell ? (cell.peak || 0) : 0;
    const capMul = this._capacityMulAt(x, y);
    const l1 = CONG.L1 * capMul, l2 = CONG.L2 * capMul;
    let level = 0, mul = 1;
    if (vehPerMin > l2) { level = 2; mul = CONG.MUL_L2; }
    else if (vehPerMin > l1) { level = 1; mul = CONG.MUL_L1; }
    return { x, y, vehPerMin, peak, level, mul, capMul, thresholds: [l1, l2] };
  };

  // ---- 速度倍率（玩家/公交/货运共用） ----
  TransitManager.prototype.speedMulAt = function (x, y, now) {
    return this.getCongestion(x, y, now).mul;
  };

  // ---- A* 附加代价（供 transitAwarePath 与外部物流路径参考） ----
  TransitManager.prototype.routePenalty = function (x, y, now) {
    const c = this.getCongestion(x, y, now);
    // 每辆/分钟 +0.03 代价：60 辆/分钟 ≈ +1.8（约等于多走 2 格平地）
    return c.vehPerMin * 0.03;
  };

  // ---- 全图拥堵统计（overlay 图例 / 调试用） ----
  TransitManager.prototype.congestionSummary = function (now) {
    const t = now || Date.now();
    let l1 = 0, l2 = 0, total = 0, maxV = 0, maxK = null;
    for (const [k] of this.roadUse) {
      const { x, y } = _parseKey(k);
      const c = this.getCongestion(x, y, t);
      if (c.vehPerMin <= 0) continue;
      total++;
      if (c.level === 1) l1++;
      if (c.level === 2) l2++;
      if (c.vehPerMin > maxV) { maxV = c.vehPerMin; maxK = k; }
    }
    return { cells: total, level1: l1, level2: l2, maxVehPerMin: maxV, maxAt: maxK };
  };

  // ---- 定期清理：删除窗口全空的格（内存卫生） ----
  TransitManager.prototype._sweepCongestion = function (now) {
    for (const [k, cell] of this.roadUse) {
      this._congCell(k, now, false);  // 推进时间
      const c = this.roadUse.get(k);
      if (c && c.b.every(v => v === 0)) this.roadUse.delete(k);
    }
    this.stats.congestionSweeps = (this.stats.congestionSweeps || 0) + 1;
  };

  // ---- 热力 overlay：绿 → 黄 → 红（API） ----
  TransitManager.prototype.renderOverlay = function (ctx, map, tile, now) {
    if (!ctx) return;
    const t = now || Date.now();
    for (const [k] of this.roadUse) {
      const { x, y } = _parseKey(k);
      if (map && !map.inBounds(x, y)) continue;
      if (map && map.isUnlocked && !map.isUnlocked(x, y)) continue;
      const c = this.getCongestion(x, y, t);
      if (c.vehPerMin < CONG.OVERLAY_MIN) continue;
      // 颜色：level0 绿 → level1 黄 → level2 红
      let fill;
      if (c.level === 2) fill = 'rgba(239,68,68,0.45)';
      else if (c.level === 1) fill = 'rgba(250,204,21,0.35)';
      else fill = 'rgba(74,222,128,0.22)';
      ctx.fillStyle = fill;
      ctx.fillRect(x * tile, y * tile, tile, tile);
      // 二级拥堵：画数值
      if (c.level === 2 && tile >= 10) {
        ctx.fillStyle = '#fecaca';
        ctx.font = `${Math.max(7, tile * 0.24)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(c.vehPerMin, (x + 0.5) * tile, (y + 0.62) * tile);
        ctx.textAlign = 'left';
      }
    }
  };

  // ---- 玩家车流记录（由 TransitManager.update 驱动） ----
  TransitManager.prototype._trackPlayer = function (now, game) {
    try {
      const p = game && game.player;
      if (!p) return;
      const k = _key(_ix(p.x), _ix(p.y));
      if (this._playerTile !== k) {
        this._playerTile = k;
        this.recordPass(p.x, p.y, now);
      }
    } catch (e) {}
  };
}

/* ============================================================================
 * §8 TransitManager：主类（装配四个子系统 + 拥堵）
 * ========================================================================== */

const TRANSIT_SAVE_VERSION = 1;

class TransitManager {
  constructor() {
    // 子系统数据
    this.bridges = [];        // §2
    this.tunnels = [];        // §3
    this.busRoutes = [];      // §5
    this.freightLines = [];   // §6
    this.roadUse = new Map(); // §7："x,y" → {b:[6], last, total}
    this.happinessBonus = new Map(); // §5："x,y" → 幸福度加成（供 pop 系统读）

    // ID 计数器
    this._seq = { bridge: 1, tunnel: 1, route: 1, bus: 1, line: 1, truck: 1 };

    // 运行时
    this._game = null;          // update 注入的 game 引用（travelTime 降级用）
    this._playerTile = null;    // 玩家上次所在格（车流跟踪）
    this._lastWaitAcc = 0;      // 候车累积节流
    this._lastHappy = 0;        // 幸福度重算节流
    this._lastSweep = 0;        // 拥堵清理节流
    this._lastStructCheck = 0;  // 结构校验节流

    // 统计
    this.stats = {
      bridgesBuilt: 0,
      tunnelsBuilt: 0,
    };
  }

  /* ---- 主更新（game.js tick 调用；各子系统独立 try/catch） ---- */
  update(now, dt, game) {
    if (!game || !game.map) return;
    this._game = game;
    const t = now || Date.now();

    try { this._updateBuses(t, dt, game); } catch (e) { /* 公交异常不影响其他 */ }
    try { this._updateFreight(t, dt, game); } catch (e) { /* 货运异常不影响其他 */ }
    try { this._trackPlayer(t, game); } catch (e) {}
    // 幸福度：每 5 秒重算
    try {
      if (t - this._lastHappy >= 5000) { this._lastHappy = t; this._recomputeHappiness(game); }
    } catch (e) {}
    // 拥堵清理：每 30 秒
    try {
      if (t - this._lastSweep >= CONG.SWEEP_MS) { this._lastSweep = t; this._sweepCongestion(t); }
    } catch (e) {}
    // 结构校验：每 60 秒
    try {
      if (t - this._lastStructCheck >= 60000) {
        this._lastStructCheck = t;
        this._validateStructures(game);
      }
    } catch (e) {}
  }

  /* ---- 结构定期校验（桥端合法性；隧道洞口仍为岩石） ---- */
  _validateStructures(game) {
    const badBridges = this.validateBridges(game);
    const T = _TERRAIN();
    const badTunnels = [];
    if (game && game.map) {
      for (const tn of this.tunnels) {
        for (const [ex, ey, tag] of [[tn.ax, tn.ay, 'A'], [tn.bx, tn.by, 'B']]) {
          const terr = game.map.terrain[ey] ? game.map.terrain[ey][ex] : T.ROCK;
          if (terr !== T.ROCK) badTunnels.push({ id: tn.id, end: tag });
        }
      }
    }
    this._lastStructIssues = { badBridges, badTunnels, at: Date.now() };
    return this._lastStructIssues;
  }

  getStructureIssues() {
    return this._lastStructIssues || { badBridges: [], badTunnels: [], at: 0 };
  }

  /* ---- 聚合统计（API） ---- */
  getStats() {
    const bus = this.getBusStats();
    const freight = this.getFreightStats();
    const cong = this.congestionSummary();
    return {
      bridges: this.bridges.length,
      bridgesDamaged: this.bridges.filter(b => b.damaged).length,
      tunnels: this.tunnels.length,
      routes: bus.routes,
      activeRoutes: bus.activeRoutes,
      buses: bus.buses,
      passengersAboard: bus.passengersAboard,
      waitingTotal: bus.waitingTotal,
      boardedTotal: bus.boardedTotal,
      freightLines: freight.lines,
      activeLines: freight.activeLines,
      freightTrucks: freight.trucks,
      freightDelivered: freight.deliveredTotal,
      congestedCells: cong.cells,
      congestedL1: cong.level1,
      congestedL2: cong.level2,
      counters: { ...this.stats },
    };
  }

  /* ---- 存档（API）：版本化 JSON 安全对象 ---- */
  save() {
    const busesOf = (route) => route.buses.map(b => ({
      id: b.id, x: Math.round(b.x * 100) / 100, y: Math.round(b.y * 100) / 100,
      fromIdx: b.fromIdx, toIdx: b.toIdx, dir: b.dir,
      state: b.state, dwellUntil: b.dwellUntil,
      passengers: b.passengers.map(p => ({ dest: p.dest, origin: Number.isInteger(p.origin) ? p.origin : -1 })),
      capacity: b.capacity, speedJitter: b.speedJitter,
    }));
    return {
      v: TRANSIT_SAVE_VERSION,
      savedAt: Date.now(),
      seq: { ...this._seq },
      stats: { ...this.stats },
      bridges: this.bridges.map(b => ({
        id: b.id, x1: b.x1, y1: b.y1, x2: b.x2, y2: b.y2, len: b.len,
        crossings: b.crossings, wear: b.wear, damaged: b.damaged,
        builtAt: b.builtAt, cost: b.cost,
        useLog: (b._useLog || []).slice(-60),
      })),
      tunnels: this.tunnels.map(t => ({
        id: t.id, ax: t.ax, ay: t.ay, bx: t.bx, by: t.by,
        len: t.len, builtAt: t.builtAt, cost: t.cost,
      })),
      busRoutes: this.busRoutes.map(r => ({
        id: r.id, name: r.name, color: r.color,
        stops: r.stops.map(s => ({
          x: s.x, y: s.y, waiting: s.waiting,
          boarded: s.boarded, alighted: s.alighted,
        })),
        buses: busesOf(r),
        interval: r.interval, level: r.level, active: r.active,
        nextDeparture: r.nextDeparture,
        totalBoarded: r.totalBoarded, totalAlighted: r.totalAlighted,
        createdAt: r.createdAt,
        od: r.od || {},
        departLog: (r._departLog || []).slice(-100),
      })),
      freightLines: this.freightLines.map(l => ({
        id: l.id, name: l.name,
        from: { ...l.from }, to: { ...l.to },
        resource: l.resource, priority: l.priority, active: l.active,
        delivered: l.delivered, trips: l.trips,
        builtAt: l.builtAt, cost: l.cost,
        deliveryLog: (l._deliveryLog || []).slice(-60),
      })),
      // 拥堵只存总量（窗口是瞬时的，不存）
      roadUseTotal: (() => {
        let n = 0;
        for (const c of this.roadUse.values()) n += c.total;
        return n;
      })(),
    };
  }

  /* ---- 读档（API）：逐项校验，坏项丢弃不崩 ---- */
  load(data) {
    if (!data || typeof data !== 'object') return { ok: false, reason: '存档为空' };
    if (data.v !== TRANSIT_SAVE_VERSION)
      return { ok: false, reason: `存档版本不匹配（${data.v}≠${TRANSIT_SAVE_VERSION}）` };

    const num = (v, dflt) => (typeof v === 'number' && isFinite(v) ? v : dflt);
    const int = (v, dflt) => { const n = num(v, dflt); return Math.floor(n); };
    const str = (v, dflt) => (typeof v === 'string' ? v : dflt);
    const okPt = (p) => p && Number.isInteger(p.x) && Number.isInteger(p.y);

    try {
      // 计数器：取最大值防 ID 碰撞
      if (data.seq) for (const k in this._seq) this._seq[k] = Math.max(this._seq[k], int(data.seq[k], this._seq[k]));
      if (data.stats) Object.assign(this.stats, data.stats);

      // 桥
      this.bridges = [];
      for (const b of (Array.isArray(data.bridges) ? data.bridges : [])) {
        if (!Number.isInteger(b.x1) || !Number.isInteger(b.y1) ||
            !Number.isInteger(b.x2) || !Number.isInteger(b.y2)) continue;
        const cells = _segmentCells(b.x1, b.y1, b.x2, b.y2);
        this.bridges.push({
          id: int(b.id, this._seq.bridge++),
          x1: b.x1, y1: b.y1, x2: b.x2, y2: b.y2,
          len: int(b.len, cells.length),
          cells, _cellSet: new Set(cells.map(c => _key(c.x, c.y))),
          crossings: int(b.crossings, 0), wear: int(b.wear, 0),
          damaged: !!b.damaged, builtAt: num(b.builtAt, Date.now()),
          cost: b.cost || { iron: 0 },
        });
        // 流量日志恢复（只保留合法条目）
        const restored = this.bridges[this.bridges.length - 1];
        restored._useLog = (Array.isArray(b.useLog) ? b.useLog : [])
          .filter(e => e && typeof e.t === 'number' && typeof e.n === 'number')
          .slice(-60);
        this._seq.bridge = Math.max(this._seq.bridge, int(b.id, 0) + 1);
      }

      // 隧道
      this.tunnels = [];
      for (const tn of (Array.isArray(data.tunnels) ? data.tunnels : [])) {
        if (!Number.isInteger(tn.ax) || !Number.isInteger(tn.ay) ||
            !Number.isInteger(tn.bx) || !Number.isInteger(tn.by)) continue;
        this.tunnels.push({
          id: int(tn.id, this._seq.tunnel++),
          ax: tn.ax, ay: tn.ay, bx: tn.bx, by: tn.by,
          len: int(tn.len, 1), builtAt: num(tn.builtAt, Date.now()),
          cost: tn.cost || { steel: 0 },
        });
        this._seq.tunnel = Math.max(this._seq.tunnel, int(tn.id, 0) + 1);
      }

      // 公交线路
      this.busRoutes = [];
      for (const r of (Array.isArray(data.busRoutes) ? data.busRoutes : [])) {
        if (!Array.isArray(r.stops)) continue;
        const route = {
          id: int(r.id, this._seq.route++),
          name: str(r.name, '线路').slice(0, 16),
          color: str(r.color, '#38bdf8'),
          stops: [],
          buses: [],
          interval: num(r.interval, BUS.DEPART_INTERVAL),
          level: _clamp(int(r.level, 1), 1, BUS.MAX_LEVEL),
          active: r.active !== false,
          nextDeparture: num(r.nextDeparture, Date.now()),
          pathCache: new Map(),
          totalBoarded: int(r.totalBoarded, 0),
          totalAlighted: int(r.totalAlighted, 0),
          createdAt: num(r.createdAt, Date.now()),
        };
        // OD 矩阵（校验 key 格式与数值）
        route.od = {};
        if (r.od && typeof r.od === 'object') {
          for (const k in r.od) {
            if (!/^\d+>\d+$/.test(k)) continue;
            const v = r.od[k];
            if (typeof v === 'number' && v > 0 && v < 1e9) route.od[k] = Math.floor(v);
          }
        }
        route._departLog = (Array.isArray(r.departLog) ? r.departLog : [])
          .filter(v => typeof v === 'number' && v > 0).slice(-100);
        for (const s of r.stops.slice(0, BUS.MAX_STOPS)) {
          if (!Number.isInteger(s.x) || !Number.isInteger(s.y)) continue;
          route.stops.push({
            x: s.x, y: s.y, waiting: num(s.waiting, 0),
            boarded: int(s.boarded, 0), alighted: int(s.alighted, 0),
          });
        }
        const cap = this._busCapacity(route);
        for (const b of (Array.isArray(r.buses) ? r.buses : []).slice(0, BUS.MAX_BUSES)) {
          route.buses.push({
            id: int(b.id, this._seq.bus++),
            routeId: route.id,
            x: num(b.x, route.stops[0] ? route.stops[0].x : 0),
            y: num(b.y, route.stops[0] ? route.stops[0].y : 0),
            fromIdx: _clamp(int(b.fromIdx, 0), 0, Math.max(0, route.stops.length - 1)),
            toIdx: _clamp(int(b.toIdx, 0), 0, Math.max(0, route.stops.length - 1)),
            dir: b.dir === -1 ? -1 : 1,
            state: ['run', 'dwell', 'idle'].includes(b.state) ? b.state : 'dwell',
            dwellUntil: num(b.dwellUntil, Date.now()),
            path: [], pathI: 0,  // 路径不存档，重算
            passengers: (Array.isArray(b.passengers) ? b.passengers : [])
              .filter(p => Number.isInteger(p.dest) && p.dest < route.stops.length)
              .map(p => ({ dest: p.dest,
                           origin: (Number.isInteger(p.origin) && p.origin < route.stops.length) ? p.origin : -1 })),
            capacity: cap,
            speedJitter: num(b.speedJitter, 1),
            arrivedAt: Date.now(),
          });
          this._seq.bus = Math.max(this._seq.bus, int(b.id, 0) + 1);
        }
        this.busRoutes.push(route);
        this._seq.route = Math.max(this._seq.route, route.id + 1);
      }

      // 货运线（卡车不存档，读档后按优先级自动补车）
      this.freightLines = [];
      for (const l of (Array.isArray(data.freightLines) ? data.freightLines : [])) {
        if (!okPt(l.from) || !okPt(l.to)) continue;
        if (!_isValidRes(l.resource)) continue;
        this.freightLines.push({
          id: int(l.id, this._seq.line++),
          name: str(l.name, '专线').slice(0, 20),
          from: { x: l.from.x, y: l.from.y }, to: { x: l.to.x, y: l.to.y },
          resource: l.resource,
          priority: _clamp(int(l.priority, 2), 1, 3),
          active: l.active !== false,
          trucks: [],  // 读档后由 _ensureLineTrucks 补车
          delivered: int(l.delivered, 0), trips: int(l.trips, 0),
          pathCache: new Map(),
          builtAt: num(l.builtAt, Date.now()),
          cost: l.cost || { iron: 0, steel: 0 },
        });
        const restoredLine = this.freightLines[this.freightLines.length - 1];
        restoredLine._deliveryLog = (Array.isArray(l.deliveryLog) ? l.deliveryLog : [])
          .filter(e => e && typeof e.t === 'number' && typeof e.n === 'number')
          .slice(-60);
        this._seq.line = Math.max(this._seq.line, int(l.id, 0) + 1);
      }

      this.roadUse = new Map();
      this.happinessBonus = new Map();
      this._lastHappy = 0; // 强制下次 update 重算幸福度
      return { ok: true };
    } catch (e) {
      return { ok: false, reason: '读档异常：' + (e && e.message) };
    }
  }

  /* ---- 一站式渲染（供 game.render 调用；各层独立，可单独开关） ---- */
  renderAll(ctx, map, tile, now, opts) {
    const o = opts || {};
    const t = now || Date.now();
    if (o.structures !== false) this.renderStructures(ctx, tile, t);
    if (o.bus !== false) this.renderBusSystem(ctx, tile, t);
    if (o.freight !== false) this.renderFreight(ctx, tile, t);
    if (o.overlay) this.renderOverlay(ctx, map, tile, t);
  }
}

// ---- 装配各子系统方法 ----
_mixinBridges(TransitManager);
_mixinTunnels(TransitManager);
_mixinTravel(TransitManager);
_mixinBus(TransitManager);
_mixinFreight(TransitManager);
_mixinCongestion(TransitManager);

/* ---- 导出（浏览器全局 + Node） ---- */
if (typeof module !== 'undefined') {
  module.exports = {
    TransitManager, TRANSITGUIDE,
    BRIDGE, TUNNEL, BUS, FREIGHT, CONG, TRAVEL,
    TRANSIT_SAVE_VERSION,
  };
}

/* ============================================================================
 * §9 扩展 API：规划 / 诊断 / 灾难联动 / 报表
 * ----------------------------------------------------------------------------
 * 本节全部是"读多写少"型真实逻辑：dry-run 规划、受损联动、吞吐量估算、
 * 热点排行、线路诊断报表。供 governor AI / 灾难系统 / UI 面板调用。
 * ========================================================================== */

// ---------------- 桥：规划 / 诊断 / 灾难联动 ----------------
function _mixinBridgeExtras(TransitManager) {

  // dry-run：只校验 + 算费用，不扣费不落子（供 UI 规划模式 / governor AI）
  TransitManager.prototype.planBridge = function (x1, y1, x2, y2, game) {
    const T = _TERRAIN();
    if (!game || !game.map) return { ok: false, reason: '游戏未就绪（缺地图）' };
    if (game) this._game = game; // 让 travelTimeDetailed 走地形模式
    const map = game.map, builder = game.builder || null;
    x1 = _ix(x1); y1 = _ix(y1); x2 = _ix(x2); y2 = _ix(y2);
    if (!map.inBounds(x1, y1) || !map.inBounds(x2, y2))
      return { ok: false, reason: '桥端超出地图边界' };
    if (x1 === x2 && y1 === y2)
      return { ok: false, reason: '桥的两端不能是同一点' };
    const len = _dist(x1, y1, x2, y2);
    const tiles = Math.max(1, Math.ceil(len));
    if (len > BRIDGE.MAX_LEN + 1e-9)
      return { ok: false, reason: `桥长 ${len.toFixed(1)} 格，超过上限 ${BRIDGE.MAX_LEN} 格` };
    for (const [ex, ey, tag] of [[x1, y1, '起点'], [x2, y2, '终点']]) {
      const chk = _bridgeEndpointOk(map, builder, ex, ey);
      if (!chk.ok) return { ok: false, reason: tag + chk.reason };
    }
    const canyonN = _countTerrainOnLine(map, x1, y1, x2, y2, T.CANYON);
    if (canyonN < 1)
      return { ok: false, reason: '两端之间没有峡谷，不需要建桥' };
    const cost = { iron: BRIDGE.IRON_PER_TILE * tiles };
    const inv = _invOf(game);
    // 预估收益：对比"无桥绕行"与"有桥直达"的耗时差
    const before = this.travelTimeDetailed(x1, y1, x2, y2);
    const afterSec = Math.round(len * TRAVEL.SEC_ROAD * 10) / 10;
    return {
      ok: true,
      plan: {
        x1, y1, x2, y2, len: tiles, canyonCells: canyonN,
        cost, costName: `铁矿×${cost.iron}`,
        affordable: inv ? _canAfford(inv, cost) : true,
        missing: inv ? _missingRes(inv, cost) : '',
        timeBefore: before.seconds,
        timeAfter: afterSec,
        savedSec: Math.round((before.seconds - afterSec) * 10) / 10,
        mode: before.mode,
      },
    };
  };

  // 桥详情（含维修预览与剩余寿命估计）
  TransitManager.prototype.bridgeInfo = function (id) {
    const br = this.bridges.find(b => b.id === id);
    if (!br) return { ok: false, reason: `找不到桥 #${id}` };
    const remaining = br.damaged ? 0 : Math.max(0, BRIDGE.WEAR_MAX * BRIDGE.WEAR_PER - br.crossings);
    return {
      ok: true,
      info: {
        ...this._publicBridge(br),
        costName: `铁矿×${(br.cost && br.cost.iron) || 0}`,
        repairCost: br.damaged ? { iron: BRIDGE.REPAIR_IRON_PER_TILE * br.len } : null,
        repairCostName: br.damaged ? `铁矿×${BRIDGE.REPAIR_IRON_PER_TILE * br.len}` : null,
        crossingsLeft: remaining,  // 距下次受损还可通过次数
        wearPct: Math.round(br.wear / BRIDGE.WEAR_MAX * 100),
        status: br.damaged ? '受损（捷径失效）' : (br.wear > 70 ? '磨损严重' : '完好'),
      },
    };
  };

  // 需要关注的桥：受损 或 磨损 >70%
  TransitManager.prototype.bridgesNeedingRepair = function () {
    return this.bridges
      .filter(b => b.damaged || b.wear > 70)
      .map(b => ({ id: b.id, x1: b.x1, y1: b.y1, x2: b.x2, y2: b.y2,
                   damaged: b.damaged, wearPct: Math.round(b.wear / BRIDGE.WEAR_MAX * 100) }));
  };

  // 最近的桥（UI 点选 / 灾难落点查询）
  TransitManager.prototype.nearestBridge = function (x, y) {
    let best = null, bestD = Infinity;
    for (const br of this.bridges) {
      const mx = (br.x1 + br.x2) / 2, my = (br.y1 + br.y2) / 2;
      const d = _dist(x, y, mx, my);
      if (d < bestD) { bestD = d; best = br; }
    }
    return best ? { bridge: this._publicBridge(best), dist: Math.round(bestD * 10) / 10 } : null;
  };

  // 灾难联动：桥受损（陨石/沙尘暴等调用；game.disaster 可经由 game.transit 调用）
  // amount：磨损增量；≥100 直接击毁为 damaged
  TransitManager.prototype.damageBridge = function (id, amount, reason) {
    const br = this.bridges.find(b => b.id === id);
    if (!br) return { ok: false, reason: `找不到桥 #${id}` };
    amount = Math.max(0, Math.round(amount || 0));
    br.wear = Math.min(BRIDGE.WEAR_MAX, br.wear + amount);
    br.crossings += amount * BRIDGE.WEAR_PER; // 保持 wear/crossings 一致
    if (br.wear >= BRIDGE.WEAR_MAX) br.damaged = true;
    this.stats.bridgeDamageEvents = (this.stats.bridgeDamageEvents || 0) + 1;
    // 受损 = 捷径消失：所有路径缓存失效（公交/货运下次发车重算）
    if (br.damaged) this.clearPathCaches();
    return {
      ok: true,
      bridge: this._publicBridge(br),
      reason: reason || '灾难',
      damaged: br.damaged,
    };
  };

  // 按坐标打击桥（灾难系统用：陨石落点在桥面上 → 找桥 → 扣磨损）
  TransitManager.prototype.damageBridgeAt = function (x, y, amount, reason) {
    const br = this.bridgeAt(x, y);
    if (!br) return { ok: false, reason: `(${_ix(x)},${_ix(y)}) 没有桥` };
    return this.damageBridge(br.id, amount, reason);
  };
}

// ---------------- 隧道：规划 / 诊断 ----------------
function _mixinTunnelExtras(TransitManager) {

  TransitManager.prototype.planTunnel = function (ax, ay, bx, by, game) {
    if (!game || !game.map) return { ok: false, reason: '游戏未就绪（缺地图）' };
    this._game = game; // 让 travelTimeDetailed 走地形模式
    const map = game.map;
    ax = _ix(ax); ay = _ix(ay); bx = _ix(bx); by = _ix(by);
    if (!map.inBounds(ax, ay) || !map.inBounds(bx, by))
      return { ok: false, reason: '隧道口超出地图边界' };
    if (ax === bx && ay === by)
      return { ok: false, reason: '隧道两端不能是同一点' };
    const len = _dist(ax, ay, bx, by);
    const tiles = Math.max(1, Math.ceil(len));
    if (len > TUNNEL.MAX_LEN + 1e-9)
      return { ok: false, reason: `隧道长 ${len.toFixed(1)} 格，超过上限 ${TUNNEL.MAX_LEN} 格` };
    for (const [ex, ey, tag] of [[ax, ay, 'A端'], [bx, by, 'B端']]) {
      const chk = _tunnelEndpointOk(map, ex, ey);
      if (!chk.ok) return { ok: false, reason: tag + chk.reason };
    }
    const cost = { steel: TUNNEL.STEEL_PER_TILE * tiles };
    const inv = _invOf(game);
    const T = _TERRAIN();
    const rockN = _countTerrainOnLine(map, ax, ay, bx, by, T.ROCK);
    const before = this.travelTimeDetailed(ax, ay, bx, by);
    const afterSec = Math.round(len * TRAVEL.SEC_ROAD * 10) / 10;
    return {
      ok: true,
      plan: {
        ax, ay, bx, by, len: tiles, rockCells: rockN,
        cost, costName: `钢材×${cost.steel}`,
        affordable: inv ? _canAfford(inv, cost) : true,
        missing: inv ? _missingRes(inv, cost) : '',
        timeBefore: before.seconds,
        timeAfter: afterSec,
        savedSec: Math.round((before.seconds - afterSec) * 10) / 10,
        mode: before.mode,
      },
    };
  };

  TransitManager.prototype.tunnelInfo = function (id) {
    const tn = this.tunnels.find(t => t.id === id);
    if (!tn) return { ok: false, reason: `找不到隧道 #${id}` };
    return {
      ok: true,
      info: {
        ...this._publicTunnel(tn),
        costName: `钢材×${(tn.cost && tn.cost.steel) || 0}`,
        status: '运营中（免维护）',
      },
    };
  };

  TransitManager.prototype.nearestTunnel = function (x, y) {
    let best = null, bestD = Infinity;
    for (const tn of this.tunnels) {
      const d = Math.min(_dist(x, y, tn.ax, tn.ay), _dist(x, y, tn.bx, tn.by));
      if (d < bestD) { bestD = d; best = tn; }
    }
    return best ? { tunnel: this._publicTunnel(best), dist: Math.round(bestD * 10) / 10 } : null;
  };
}

// ---------------- 通行：建桥/隧道值不值（governor AI 决策用） ----------------
function _mixinTravelExtras(TransitManager) {

  // 评估"在两点间建桥/隧道"的性价比：返回 dry-run 规划 + 节省秒数
  // 返回 {bridge: plan|null, tunnel: plan|null, recommendation}
  TransitManager.prototype.suggestCrossing = function (x1, y1, x2, y2, game) {
    const T = _TERRAIN();
    const out = { bridge: null, tunnel: null, recommendation: 'none' };
    if (!game || !game.map) return out;
    this._game = game; // travelTimeDetailed 需要地形
    const map = game.map;
    const canyonN = _countTerrainOnLine(map, x1, y1, x2, y2, T.CANYON);
    const rockRun = _maxRunOnLine(map, x1, y1, x2, y2, T.ROCK);
    // 桥候选：有峡谷 且 当前无桥覆盖
    if (canyonN > 0) {
      const cells = _segmentCells(x1, y1, x2, y2);
      if (!this.bridgeCovering(cells)) {
        const p = this.planBridge(x1, y1, x2, y2, game);
        if (p.ok) out.bridge = p.plan;
      }
    }
    // 隧道候选：连续岩石 ≥3 且两端都是岩石
    if (rockRun >= TRAVEL.ROCK_RUN_TUNNEL && !this.tunnelBetween(x1, y1, x2, y2)) {
      const p = this.planTunnel(x1, y1, x2, y2, game);
      if (p.ok) out.tunnel = p.plan;
    }
    // 推荐：按"每单位成本节省的秒数"排序
    const scored = [];
    if (out.bridge) {
      const costVal = out.bridge.cost.iron * 1; // 铁矿基准价 1
      scored.push({ kind: 'bridge', plan: out.bridge,
                    score: costVal > 0 ? out.bridge.savedSec / costVal : 0 });
    }
    if (out.tunnel) {
      const costVal = out.tunnel.cost.steel * 4; // 钢材基准价 4（RES_VALUE）
      scored.push({ kind: 'tunnel', plan: out.tunnel,
                    score: costVal > 0 ? out.tunnel.savedSec / costVal : 0 });
    }
    scored.sort((a, b) => b.score - a.score);
    if (scored.length) {
      out.recommendation = scored[0].kind;
      out.best = scored[0].plan;
    }
    return out;
  };

  // 批量评估：给定点对列表，返回每对的耗时明细（物流调度批量查询用）
  TransitManager.prototype.batchTravelTime = function (pairs) {
    const out = [];
    for (const p of (pairs || [])) {
      if (!Array.isArray(p) || p.length < 4) continue;
      out.push({ from: [p[0], p[1]], to: [p[2], p[3]],
                 detail: this.travelTimeDetailed(p[0], p[1], p[2], p[3]) });
    }
    return out;
  };
}

// ---------------- 公交：改名 / 发车间隔 / 退役车辆 / 诊断报表 ----------------
function _mixinBusExtras(TransitManager) {

  TransitManager.prototype.renameRoute = function (id, name) {
    const route = this.getRoute(id);
    if (!route) return { ok: false, reason: `找不到线路 #${id}` };
    route.name = String(name || route.name).slice(0, 16);
    return { ok: true, name: route.name };
  };

  // 发车间隔：10~300 秒
  TransitManager.prototype.setRouteInterval = function (id, seconds) {
    const route = this.getRoute(id);
    if (!route) return { ok: false, reason: `找不到线路 #${id}` };
    route.interval = _clamp(Math.round(seconds) || BUS.DEPART_INTERVAL, 10, 300);
    return { ok: true, interval: route.interval };
  };

  // 退役一辆车（车上乘客就地"下车"为候车，计入最近站）
  TransitManager.prototype.removeBus = function (routeId, busId) {
    const route = this.getRoute(routeId);
    if (!route) return { ok: false, reason: `找不到线路 #${routeId}` };
    const i = route.buses.findIndex(b => b.id === busId);
    if (i < 0) return { ok: false, reason: `找不到车辆 #${busId}` };
    const bus = route.buses[i];
    // 车上乘客转为最近站的候车
    let bestS = route.stops[bus.fromIdx] || route.stops[0];
    let bestD = Infinity;
    for (const s of route.stops) {
      const d = _dist(bus.x, bus.y, s.x, s.y);
      if (d < bestD) { bestD = d; bestS = s; }
    }
    if (bestS) bestS.waiting = Math.min(BUS.WAIT_CAP, bestS.waiting + bus.passengers.length);
    route.buses.splice(i, 1);
    return { ok: true, transferred: bus.passengers.length };
  };

  TransitManager.prototype.busInfo = function (routeId, busId) {
    const route = this.getRoute(routeId);
    if (!route) return { ok: false, reason: `找不到线路 #${routeId}` };
    const bus = route.buses.find(b => b.id === busId);
    if (!bus) return { ok: false, reason: `找不到车辆 #${busId}` };
    return {
      ok: true,
      info: {
        id: bus.id, routeId, routeName: route.name,
        x: Math.round(bus.x * 10) / 10, y: Math.round(bus.y * 10) / 10,
        state: bus.state, stateName: { run: '行驶中', dwell: '停靠', idle: '停运' }[bus.state] || bus.state,
        fromStop: bus.fromIdx, toStop: bus.toIdx, dir: bus.dir > 0 ? '上行' : '下行',
        passengers: bus.passengers.length, capacity: bus.capacity,
        loadFactor: bus.capacity ? Math.round(bus.passengers.length / bus.capacity * 100) : 0,
      },
    };
  };

  // 线路诊断报表：站均候车、满载率、是否需要加车/升级
  TransitManager.prototype.routeReport = function (id) {
    const route = this.getRoute(id);
    if (!route) return { ok: false, reason: `找不到线路 #${id}` };
    const n = route.stops.length;
    let waiting = 0, aboard = 0, capSum = 0;
    const stopRows = route.stops.map((s, i) => {
      waiting += s.waiting;
      return { index: i, x: s.x, y: s.y, waiting: Math.round(s.waiting),
               boarded: s.boarded, alighted: s.alighted };
    });
    const busRows = route.buses.map(b => {
      aboard += b.passengers.length; capSum += b.capacity;
      return { id: b.id, state: b.state, passengers: b.passengers.length,
               capacity: b.capacity,
               loadFactor: b.capacity ? Math.round(b.passengers.length / b.capacity * 100) : 0 };
    });
    const avgWaiting = n ? waiting / n : 0;
    const loadFactor = capSum ? aboard / capSum : 0;
    // 建议：站均候车 >12 且未满级 → 建议升级；满载率 >85% 且车未满 → 建议缩短发车间隔
    const suggestions = [];
    if (avgWaiting > 12 && route.level < BUS.MAX_LEVEL)
      suggestions.push(`站均候车 ${avgWaiting.toFixed(1)} 人偏高，建议升级线路（载客+10/级）`);
    if (loadFactor > 0.85 && route.buses.length < this._targetBusCount(route))
      suggestions.push(`满载率 ${Math.round(loadFactor * 100)}%，但车辆未配满，检查发车间隔`);
    if (loadFactor > 0.85 && route.buses.length >= BUS.MAX_BUSES)
      suggestions.push(`满载率 ${Math.round(loadFactor * 100)}% 且车辆已满（${BUS.MAX_BUSES}），建议升级线路或增开新线`);
    if (n < 2) suggestions.push('站点不足 2 个，车辆无法发车');
    if (!route.active) suggestions.push('线路已暂停（toggleRoute 恢复）');
    return {
      ok: true,
      report: {
        id: route.id, name: route.name, level: route.level, active: route.active,
        color: route.color, interval: route.interval,
        stops: stopRows, buses: busRows,
        avgWaitingPerStop: Math.round(avgWaiting * 10) / 10,
        totalWaiting: Math.round(waiting),
        loadFactor: Math.round(loadFactor * 100),
        totalBoarded: route.totalBoarded, totalAlighted: route.totalAlighted,
        capacity: this._busCapacity(route),
        suggestions,
      },
    };
  };
}

// ---------------- 货运：吞吐量估算 / 批量启停 / 报表 ----------------
function _mixinFreightExtras(TransitManager) {

  // 估算单线吞吐量（单位/分钟）：往返耗时 + 装货时间
  TransitManager.prototype.estimateThroughput = function (id, game) {
    const line = this.getLine(id);
    if (!line) return { ok: false, reason: `找不到专线 #${id}` };
    const g = game || this._game;
    const oneWay = g ? this.travelTimeDetailed(line.from.x, line.from.y, line.to.x, line.to.y).seconds : 0;
    // 若无 game，用直线距离估算
    const owSec = oneWay > 0 ? oneWay : Math.round(_dist(line.from.x, line.from.y, line.to.x, line.to.y) * TRAVEL.SEC_ROAD * 10) / 10;
    const speedMul = (g ? _logisticsSpeedMul(g) : 1) * (FREIGHT.PRIORITY_SPEED[line.priority] || 1);
    const roundTripSec = (owSec * 2) / Math.max(0.01, speedMul) + FREIGHT.LOAD_MS / 1000;
    const trucks = FREIGHT.TRUCKS_BY_PRIORITY[line.priority] || 1;
    const perMin = roundTripSec > 0 ? (FREIGHT.CARRY * trucks) / (roundTripSec / 60) : 0;
    return {
      ok: true,
      estimate: {
        lineId: id, name: line.name,
        oneWaySec: Math.round(owSec * 10) / 10,
        roundTripSec: Math.round(roundTripSec * 10) / 10,
        trucks, carryPerTrip: FREIGHT.CARRY,
        unitsPerMin: Math.round(perMin * 10) / 10,
        active: line.active,
      },
    };
  };

  // 专线诊断报表
  TransitManager.prototype.lineReport = function (id, game) {
    const line = this.getLine(id);
    if (!line) return { ok: false, reason: `找不到专线 #${id}` };
    const g = game || this._game;
    const truckRows = line.trucks.map(t => {
      if (t._simple) {
        return { id: t._ftId, kind: 'simple',
                 x: Math.round(t.px * 10) / 10, y: Math.round(t.py * 10) / 10,
                 state: t.state, load: t.load,
                 stateName: { loading: '装货中', toDest: '去终点', unloading: '卸货中', toSrc: '返程' }[t.state] || t.state };
      }
      return { id: t._ftId, kind: 'truck',
               x: Math.round(t.px * 10) / 10, y: Math.round(t.py * 10) / 10,
               state: t.state,
               stateName: { idle: '待命', toRes: '去起点装货', loading: '装货中', toDepot: '去终点', unloading: '卸货中' }[t.state] || t.state,
               loaded: !!t._loaded };
    });
    const est = this.estimateThroughput(id, g);
    return {
      ok: true,
      report: {
        ...this._publicLine(line),
        trucksDetail: truckRows,
        throughput: est.ok ? est.estimate : null,
        usingLogisticsTruck: this._truckClassAvailable(g),
      },
    };
  };

  // 批量启停
  TransitManager.prototype.pauseAllLines = function () {
    let n = 0;
    for (const l of this.freightLines) if (l.active) { l.active = false; n++; }
    return { ok: true, paused: n };
  };
  TransitManager.prototype.resumeAllLines = function () {
    let n = 0;
    for (const l of this.freightLines) if (!l.active) { l.active = true; n++; }
    return { ok: true, resumed: n };
  };

  // 按资源统计专线
  TransitManager.prototype.linesByResource = function () {
    const out = {};
    for (const l of this.freightLines) {
      out[l.resource] = out[l.resource] || { lines: 0, trucks: 0, delivered: 0 };
      out[l.resource].lines++;
      out[l.resource].trucks += l.trucks.length;
      out[l.resource].delivered += l.delivered;
    }
    return out;
  };
}

// ---------------- 拥堵：热点排行 / 重置 ----------------
function _mixinCongestionExtras(TransitManager) {

  // Top-N 拥堵热点（UI 拥堵榜 / governor 决策）
  TransitManager.prototype.hotspots = function (n, now) {
    const t = now || Date.now();
    const rows = [];
    for (const [k] of this.roadUse) {
      const { x, y } = _parseKey(k);
      const c = this.getCongestion(x, y, t);
      if (c.vehPerMin >= CONG.OVERLAY_MIN) rows.push(c);
    }
    rows.sort((a, b) => b.vehPerMin - a.vehPerMin);
    return rows.slice(0, Math.max(1, Math.min(50, n || 10)));
  };

  // 重置拥堵统计（新游戏 / 测试用）
  TransitManager.prototype.resetCongestion = function () {
    this.roadUse.clear();
    return { ok: true };
  };

  // 某格是否拥堵（布尔快捷查询）
  TransitManager.prototype.isCongested = function (x, y, now) {
    return this.getCongestion(x, y, now).level > 0;
  };
}

// ---------------- 管理器：重置 / 调试导出 ----------------
function _mixinManagerExtras(TransitManager) {

  // 全量重置（重开档用；game.reset() 后可调）
  TransitManager.prototype.reset = function () {
    this.bridges = [];
    this.tunnels = [];
    this.busRoutes = [];
    this.freightLines = [];
    this.roadUse = new Map();
    this.happinessBonus = new Map();
    this._seq = { bridge: 1, tunnel: 1, route: 1, bus: 1, line: 1, truck: 1 };
    this._playerTile = null;
    this._lastWaitAcc = 0; this._lastHappy = 0;
    this._lastSweep = 0; this._lastStructCheck = 0;
    this._lastStructIssues = null;
    this.stats = { bridgesBuilt: 0, tunnelsBuilt: 0 };
    return { ok: true };
  };

  // 调试导出：完整内部状态（JSON 安全）
  TransitManager.prototype.debugDump = function () {
    return {
      version: TRANSIT_SAVE_VERSION,
      bridges: this.getBridges(),
      tunnels: this.getTunnels(),
      routes: this.getRoutes(),
      lines: this.getLines(),
      congestion: this.congestionSummary(),
      hotspots: this.hotspots(5),
      happinessCells: this.happinessBonus.size,
      stats: this.getStats(),
      structureIssues: this.getStructureIssues(),
    };
  };
}

// ---- 装配扩展 API ----
_mixinBridgeExtras(TransitManager);
_mixinTunnelExtras(TransitManager);
_mixinTravelExtras(TransitManager);
_mixinBusExtras(TransitManager);
_mixinFreightExtras(TransitManager);
_mixinCongestionExtras(TransitManager);
_mixinManagerExtras(TransitManager);

/* ============================================================================
 * §10 运营智能：顾问建议 / 网络连通性 / 经济核算 / 里程碑 / 地块检查
 * ----------------------------------------------------------------------------
 * - getAdvisories(game)：每 60 秒可调用一次，返回待办建议（修桥/治堵/升级线路…）
 * - stopConnectivity(game)：公交站连通性（BFS），找孤立站点
 * - lineEconomy(id)：专线 ROI（交付价值 vs 建造成本）
 * - getMilestones()：成就系统可轮询的交通里程碑进度
 * - describeTile(x,y,game)：地块交通信息（UI tooltip 用）
 * - exportHeatmap()：拥堵热力二维数组（小地图/外部渲染用）
 * - clearPathCaches() / pathCacheStats()：路径缓存管理
 * ========================================================================== */

// 资源基准价值兜底（RES_VALUE 未加载时）
function _resValue(key) {
  try {
    if (typeof RES_VALUE !== 'undefined' && RES_VALUE[key]) return RES_VALUE[key];
  } catch (e) {}
  const fallback = { iron: 1, ice: 1, rare: 3, uranium: 8, he3: 15, water: 1, food: 2, steel: 4, tech: 10 };
  return fallback[key] || 1;
}

function _mixinOps(TransitManager) {

  // ============ 顾问建议 ============
  // 返回 [{level:'warn'|'info', kind, text, ref}]，最多 12 条
  TransitManager.prototype.getAdvisories = function (game) {
    const out = [];
    const now = Date.now();
    const push = (level, kind, text, ref) => {
      if (out.length < 12) out.push({ level, kind, text, ref: ref || null, at: now });
    };

    // 1) 受损桥
    for (const br of this.bridges) {
      if (br.damaged)
        push('warn', 'bridge-damaged',
          `🌉 桥 #${br.id}（${br.x1},${br.y1}→${br.x2},${br.y2}）受损，捷径已失效，花费铁矿×${BRIDGE.REPAIR_IRON_PER_TILE * br.len} 可维修`,
          { id: br.id });
      else if (br.wear > 70)
        push('info', 'bridge-wear',
          `🌉 桥 #${br.id} 磨损 ${Math.round(br.wear / BRIDGE.WEAR_MAX * 100)}%，接近受损阈值`,
          { id: br.id });
    }

    // 2) 严重拥堵点（无高速路覆盖）
    const hot = this.hotspots(5, now).filter(h => h.level === 2);
    for (const h of hot) {
      const capMul = this._capacityMulAt(h.x, h.y);
      if (capMul < CONG.HIGHWAY_CAP_MUL)
        push('warn', 'congestion',
          `🚦 (${h.x},${h.y}) 严重拥堵 ${h.vehPerMin} 辆/分钟（阈值${h.thresholds[1]}），速度×${h.mul}，可建高速路分流`,
          { x: h.x, y: h.y });
      else
        push('info', 'congestion',
          `🚦 (${h.x},${h.y}) 拥堵 ${h.vehPerMin} 辆/分钟，高速路已覆盖仍超载，考虑增开公交分流`,
          { x: h.x, y: h.y });
    }

    // 3) 公交线路诊断
    for (const route of this.busRoutes) {
      if (!route.active) continue;
      const rep = this.routeReport(route.id);
      if (!rep.ok) continue;
      const r = rep.report;
      if (r.totalWaiting > 24 && route.level < BUS.MAX_LEVEL)
        push('info', 'bus-upgrade',
          `🚌 「${route.name}」候车 ${r.totalWaiting} 人，建议升级线路（当前 Lv${route.level}，载客${r.capacity}）`,
          { id: route.id });
      if (r.stops.length >= 2 && r.buses.length === 0)
        push('warn', 'bus-no-vehicle',
          `🚌 「${route.name}」有 ${r.stops.length} 站但无车辆，发车间隔 ${route.interval}s 可能过长或线路刚创建`,
          { id: route.id });
      for (const s of r.suggestions) {
        if (/站点不足/.test(s)) push('warn', 'bus-few-stops', `🚌 「${route.name}」：${s}`, { id: route.id });
      }
    }

    // 4) 货运线诊断
    for (const line of this.freightLines) {
      if (!line.active) continue;
      if (line.trucks.length === 0)
        push('warn', 'freight-no-truck',
          `🚚 「${line.name}」无车辆（起点终点间可能无路），请检查桥/隧道/道路`,
          { id: line.id });
      else {
        const est = this.estimateThroughput(line.id, game || this._game);
        if (est.ok && est.estimate.unitsPerMin < 2)
          push('info', 'freight-slow',
            `🚚 「${line.name}」吞吐仅 ${est.estimate.unitsPerMin} 单位/分钟（往返 ${est.estimate.roundTripSec}s），可提优先级或修捷径`,
            { id: line.id });
      }
    }

    // 5) 幸福度覆盖
    try {
      const gameRef = game || this._game;
      if (gameRef && gameRef.builder && gameRef.builder.buildings) {
        let resTotal = 0, covered = 0;
        for (const b of gameRef.builder.buildings) {
          const isRes = b.id === 'habitat' || b.id === 'dome';
          if (!isRes) continue;
          resTotal++;
          if (this.getHappinessAt(b.x, b.y) > 0) covered++;
        }
        if (resTotal >= 3 && covered === 0)
          push('info', 'bus-coverage',
            `🏠 有 ${resTotal} 栋居住建筑，但没有一栋在公交站 5 格内，建条公交线可提幸福度`,
            null);
      }
    } catch (e) {}

    this.stats.advisoriesGenerated = (this.stats.advisoriesGenerated || 0) + 1;
    return out;
  };

  // ============ 公交站连通性（BFS） ============
  // 返回 {components: [[{routeId,index,x,y}...]], isolated: [...]}
  TransitManager.prototype.stopConnectivity = function (game) {
    const g = game || this._game;
    const result = { components: [], isolated: [] };
    if (!g || !g.map) return result;
    const map = g.map;
    // 收集所有站点
    const stops = [];
    for (const route of this.busRoutes) {
      route.stops.forEach((s, i) => stops.push({ routeId: route.id, index: i, x: s.x, y: s.y }));
    }
    if (!stops.length) return result;
    const now = Date.now();
    // 从每个站点 BFS 可达格集合（上限 2500 格防爆）
    const reachSets = stops.map(st => {
      const seen = new Set([_key(st.x, st.y)]);
      const queue = [{ x: st.x, y: st.y }];
      let guard = 0;
      while (queue.length && guard++ < 2500) {
        const cur = queue.shift();
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = cur.x + dx, ny = cur.y + dy;
          const k = _key(nx, ny);
          if (seen.has(k)) continue;
          const cost = this._transitCellCost(map, g.builder, nx, ny, now);
          if (cost === null) continue;
          seen.add(k);
          queue.push({ x: nx, y: ny });
        }
      }
      return seen;
    });
    // 并查集合并
    const parent = stops.map((_, i) => i);
    const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
    const union = (a, b) => { parent[find(a)] = find(b); };
    for (let i = 0; i < stops.length; i++) {
      for (let j = i + 1; j < stops.length; j++) {
        if (reachSets[i].has(_key(stops[j].x, stops[j].y))) union(i, j);
      }
    }
    const groups = new Map();
    stops.forEach((s, i) => {
      const r = find(i);
      if (!groups.has(r)) groups.set(r, []);
      groups.get(r).push(s);
    });
    for (const grp of groups.values()) {
      result.components.push(grp);
      if (grp.length === 1) result.isolated.push(grp[0]);
    }
    // 按规模排序
    result.components.sort((a, b) => b.length - a.length);
    return result;
  };

  // ============ 专线经济核算（ROI） ============
  TransitManager.prototype.lineEconomy = function (id) {
    const line = this.getLine(id);
    if (!line) return { ok: false, reason: `找不到专线 #${id}` };
    const val = (cost) => {
      let s = 0;
      for (const k in (cost || {})) s += (cost[k] || 0) * _resValue(k);
      return s;
    };
    const buildVal = val(line.cost);
    const deliveredVal = line.delivered * _resValue(line.resource);
    return {
      ok: true,
      economy: {
        lineId: id, name: line.name, resource: line.resource,
        buildCostValue: Math.round(buildVal * 10) / 10,
        deliveredValue: Math.round(deliveredVal * 10) / 10,
        trips: line.trips,
        roi: buildVal > 0 ? Math.round(deliveredVal / buildVal * 100) / 100 : 0,
        paidOff: deliveredVal >= buildVal,
        note: deliveredVal >= buildVal ? '已回本' :
          `还差 ${Math.round((buildVal - deliveredVal) * 10) / 10} 价值回本`,
      },
    };
  };

  // ============ 里程碑（成就系统轮询） ============
  TransitManager.prototype.getMilestones = function () {
    const s = this.stats;
    const bus = this.getBusStats();
    const freight = this.getFreightStats();
    return {
      bridgesBuilt: s.bridgesBuilt || 0,
      tunnelsBuilt: s.tunnelsBuilt || 0,
      routesCreated: s.routesCreated || 0,
      busesSpawned: s.busesSpawned || 0,
      passengersBoarded: s.passengersBoarded || 0,
      passengersAboardNow: bus.passengersAboard,
      freightDelivered: s.freightDelivered || 0,
      freightTrucksSpawned: s.freightTrucksSpawned || 0,
      linesCreated: s.linesCreated || 0,
      passesRecorded: s.passesRecorded || 0,
      // 阈值进度（成就用）：{当前, 目标}
      progress: {
        bridge3: { cur: s.bridgesBuilt || 0, goal: 3 },
        tunnel2: { cur: s.tunnelsBuilt || 0, goal: 2 },
        passengers100: { cur: s.passengersBoarded || 0, goal: 100 },
        freight500: { cur: s.freightDelivered || 0, goal: 500 },
        routes3: { cur: s.routesCreated || 0, goal: 3 },
      },
    };
  };

  // ============ 地块交通信息（UI tooltip） ============
  TransitManager.prototype.describeTile = function (x, y, game) {
    const g = game || this._game;
    x = _ix(x); y = _ix(y);
    const now = Date.now();
    const desc = { x, y };
    // 地形
    try {
      if (g && g.map && g.map.inBounds(x, y)) {
        const T = _TERRAIN();
        const t = g.map.terrain[y] ? g.map.terrain[y][x] : T.FLAT;
        desc.terrain = ['平地', '岩石', '环形山', '峡谷', '极地', '火山'][t] || '未知';
        desc.unlocked = g.map.isUnlocked ? g.map.isUnlocked(x, y) : true;
      }
    } catch (e) {}
    // 建筑/道路
    try {
      if (g && g.builder && typeof g.builder.at === 'function') {
        const b = g.builder.at(x, y);
        desc.building = b ? b.id : null;
        desc.onRoad = !!b && (b.id === 'road' || b.id === 'highway');
        desc.isHighway = !!b && b.id === 'highway';
      }
    } catch (e) {}
    // 桥/隧道
    const br = this.bridgeAt(x, y);
    desc.onBridge = br ? br.id : null;
    desc.bridgeDamaged = br ? br.damaged : false;
    const tn = this.tunnelAt(x, y);
    desc.atTunnel = tn ? { id: tn.tunnel.id, end: tn.end } : null;
    // 拥堵
    desc.congestion = this.getCongestion(x, y, now);
    desc.speedMul = desc.congestion.mul;
    // 公交站
    desc.busStops = [];
    for (const route of this.busRoutes) {
      route.stops.forEach((s, i) => {
        if (s.x === x && s.y === y)
          desc.busStops.push({ routeId: route.id, routeName: route.name, index: i,
                               waiting: Math.round(s.waiting), active: route.active });
      });
    }
    // 幸福度
    desc.happinessBonus = this.getHappinessAt(x, y);
    return desc;
  };

  // ============ 拥堵热力导出（二维数组，外部小地图用） ============
  // 返回 {size, grid: number[][]（veh/min）, max}
  TransitManager.prototype.exportHeatmap = function (now) {
    const t = now || Date.now();
    const g = this._game;
    const size = (g && g.map && g.map.size) || 50;
    const grid = [];
    let max = 0;
    for (let y = 0; y < size; y++) {
      grid[y] = new Array(size).fill(0);
    }
    for (const [k] of this.roadUse) {
      const { x, y } = _parseKey(k);
      if (x < 0 || y < 0 || x >= size || y >= size) continue;
      const c = this.getCongestion(x, y, t);
      grid[y][x] = c.vehPerMin;
      if (c.vehPerMin > max) max = c.vehPerMin;
    }
    return { size, grid, max };
  };

  // ============ 路径缓存管理 ============
  TransitManager.prototype.clearPathCaches = function () {
    let n = 0;
    for (const r of this.busRoutes) { n += r.pathCache.size; r.pathCache.clear(); }
    for (const l of this.freightLines) { n += l.pathCache.size; l.pathCache.clear(); }
    return { ok: true, cleared: n };
  };

  TransitManager.prototype.pathCacheStats = function () {
    let entries = 0, routes = 0, lines = 0;
    for (const r of this.busRoutes) { entries += r.pathCache.size; routes++; }
    for (const l of this.freightLines) { entries += l.pathCache.size; lines++; }
    return { routes, lines, entries };
  };

  // ============ 存档迁移（未来版本用；当前仅 v1） ============
  TransitManager.prototype.migrateSave = function (data) {
    if (!data || typeof data !== 'object') return { ok: false, reason: '存档为空' };
    if (data.v === TRANSIT_SAVE_VERSION) return { ok: true, data, migrated: false };
    return { ok: false, reason: `不支持的存档版本 ${data.v}（当前 ${TRANSIT_SAVE_VERSION}），请重建交通设施` };
  };
}

_mixinOps(TransitManager);

/* ============================================================================
 * §11 运营优化：2-opt 站序优化 / OD 矩阵 / 发车间隔统计 / 运力规划 /
 *         全量校验 / 线路导入导出 / 车辆再平衡 / 公开 API 索引
 * ----------------------------------------------------------------------------
 * 全部是可独立验证的真实算法：
 *   - optimizeStopOrder：2-opt 旅行商优化站点顺序（减少空驶）
 *   - odMatrix：起点→终点客流矩阵（alight 时按 origin/dest 累积）
 *   - headwayStats：发车间隔 adherence（实际 vs 计划）
 *   - capacityPlan：解析式运力规划（周期/班次/座位/需求/满载率）
 *   - validateAll：全量完整性校验（建筑拆除后的悬空端点等）
 * ========================================================================== */

// 2-opt 用的两点间"代价"：直线距离（站序优化不需要地形，纯几何）
function _stopDist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

function _mixinOptimize(TransitManager) {

  // ============ 2-opt 站序优化 ============
  // 返回 {ok, order:[新顺序的站点索引], beforeLen, afterLen, improved}
  // 不直接改线路（dry-run），用 applyStopOrder 落子
  TransitManager.prototype.optimizeStopOrder = function (routeId) {
    const route = this.getRoute(routeId);
    if (!route) return { ok: false, reason: `找不到线路 #${routeId}` };
    const n = route.stops.length;
    if (n < 3) return { ok: false, reason: '站点不足 3 个，无需优化' };
    // 路径长度：往返总长（i→i+1 mod n，公交是往返线，优化环形总长）
    const tourLen = (order) => {
      let s = 0;
      for (let i = 0; i < order.length; i++) {
        s += _stopDist(route.stops[order[i]], route.stops[order[(i + 1) % order.length]]);
      }
      return s;
    };
    let order = route.stops.map((_, i) => i);
    let best = tourLen(order);
    const before = best;
    let improved = true, iter = 0;
    while (improved && iter++ < 100) {
      improved = false;
      for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
          const cand = order.slice();
          // 反转 i..j
          for (let a = i, b = j; a < b; a++, b--) {
            const tmp = cand[a]; cand[a] = cand[b]; cand[b] = tmp;
          }
          const len = tourLen(cand);
          if (len < best - 1e-9) { best = len; order = cand; improved = true; }
        }
      }
    }
    return {
      ok: true,
      order,
      beforeLen: Math.round(before * 10) / 10,
      afterLen: Math.round(best * 10) / 10,
      improved: best < before - 1e-9,
      savedPct: before > 0 ? Math.round((before - best) / before * 1000) / 10 : 0,
    };
  };

  // 应用新站序（车辆就地重排到最近站，避免瞬移穿模感）
  TransitManager.prototype.applyStopOrder = function (routeId, order) {
    const route = this.getRoute(routeId);
    if (!route) return { ok: false, reason: `找不到线路 #${routeId}` };
    const n = route.stops.length;
    if (!Array.isArray(order) || order.length !== n)
      return { ok: false, reason: '顺序数组长度不符' };
    const sorted = order.slice().sort((a, b) => a - b);
    for (let i = 0; i < n; i++) if (sorted[i] !== i)
      return { ok: false, reason: '顺序数组必须是 0..n-1 的排列' };
    // 旧索引 → 新索引映射（乘客目的地、车辆站点索引都要换算）
    const newIdx = new Array(n);
    order.forEach((oldI, newI) => { newIdx[oldI] = newI; });
    route.stops = order.map(i => route.stops[i]);
    for (const bus of route.buses) {
      bus.fromIdx = newIdx[bus.fromIdx];
      bus.toIdx = newIdx[bus.toIdx];
      bus.passengers.forEach(p => {
        p.dest = newIdx[p.dest];
        if (Number.isInteger(p.origin) && p.origin >= 0) p.origin = newIdx[p.origin];
      });
      bus.path = []; bus.pathI = 0; // 路径重算
      bus.state = 'dwell'; bus.dwellUntil = Date.now() + BUS.DWELL_MS;
    }
    // OD 矩阵按新索引重排
    const newOd = {};
    for (const k in (route.od || {})) {
      const [o, d] = k.split('>').map(Number);
      if (Number.isInteger(o) && Number.isInteger(d) && o < n && d < n)
        newOd[newIdx[o] + '>' + newIdx[d]] = route.od[k];
    }
    route.od = newOd;
    route.pathCache.clear();
    return { ok: true, stops: route.stops.length };
  };

  // ============ OD 矩阵 ============
  // 返回 {stops: [{x,y}], matrix: number[][], total}
  TransitManager.prototype.odMatrix = function (routeId) {
    const route = this.getRoute(routeId);
    if (!route) return { ok: false, reason: `找不到线路 #${routeId}` };
    const n = route.stops.length;
    const matrix = [];
    for (let i = 0; i < n; i++) matrix[i] = new Array(n).fill(0);
    let total = 0;
    for (const k in (route.od || {})) {
      const [o, d] = k.split('>').map(Number);
      if (Number.isInteger(o) && Number.isInteger(d) && o < n && d < n) {
        matrix[o][d] = route.od[k];
        total += route.od[k];
      }
    }
    return {
      ok: true,
      stops: route.stops.map(s => ({ x: s.x, y: s.y })),
      matrix, total,
    };
  };

  // 最繁忙 OD 对 Top-N
  TransitManager.prototype.topOdPairs = function (routeId, n) {
    const r = this.odMatrix(routeId);
    if (!r.ok) return r;
    const pairs = [];
    for (let o = 0; o < r.matrix.length; o++) {
      for (let d = 0; d < r.matrix[o].length; d++) {
        if (r.matrix[o][d] > 0)
          pairs.push({ origin: o, dest: d, count: r.matrix[o][d],
                       from: r.stops[o], to: r.stops[d] });
      }
    }
    pairs.sort((a, b) => b.count - a.count);
    return { ok: true, pairs: pairs.slice(0, Math.max(1, Math.min(20, n || 5))), total: r.total };
  };

  // ============ 发车间隔统计 ============
  // route._departLog: 最近 100 次发车时间戳（_busDepart 记录）
  TransitManager.prototype.headwayStats = function (routeId) {
    const route = this.getRoute(routeId);
    if (!route) return { ok: false, reason: `找不到线路 #${routeId}` };
    const log = (route._departLog || []).slice().sort((a, b) => a - b);
    if (log.length < 2)
      return { ok: true, stats: { samples: log.length, note: '样本不足（<2 次发车）' } };
    const gaps = [];
    for (let i = 1; i < log.length; i++) gaps.push((log[i] - log[i - 1]) / 1000);
    const avg = gaps.reduce((a, b) => a + b, 0) / gaps.length;
    const min = Math.min(...gaps), max = Math.max(...gaps);
    const variance = gaps.reduce((a, b) => a + (b - avg) * (b - avg), 0) / gaps.length;
    return {
      ok: true,
      stats: {
        samples: log.length,
        plannedIntervalSec: route.interval,
        avgHeadwaySec: Math.round(avg * 10) / 10,
        minHeadwaySec: Math.round(min * 10) / 10,
        maxHeadwaySec: Math.round(max * 10) / 10,
        stdDevSec: Math.round(Math.sqrt(variance) * 10) / 10,
        // 串车指数：实际平均间隔 / 计划间隔（>1.3 说明经常串车或运力不足）
        bunchingIndex: route.interval > 0 ? Math.round(avg / route.interval * 100) / 100 : 0,
      },
    };
  };

  // ============ 解析式运力规划（capacityPlan） ============
  // 不步进仿真，纯解析计算：周期 → 班次/小时 → 座位/小时 → 需求/小时 → 满载率
  TransitManager.prototype.capacityPlan = function (game) {
    const g = game || this._game;
    const routes = [];
    for (const route of this.busRoutes) {
      const n = route.stops.length;
      if (n < 2) {
        routes.push({ id: route.id, name: route.name, runnable: false, reason: '站点不足 2 个' });
        continue;
      }
      // 周期：环形总长 / 公交速度 + 每站停靠 3 秒，再 ×2（往返）
      // 解析估计：用几何距离，不逐格步进仿真
      let cycleSec = 0;
      for (let i = 0; i < n; i++) {
        const a = route.stops[i], b = route.stops[(i + 1) % n];
        cycleSec += _stopDist(a, b) / BUS.SPEED + BUS.DWELL_MS / 1000;
      }
      cycleSec *= 2; // 往返
      const buses = Math.max(1, route.buses.length);
      const headwaySec = cycleSec / buses;
      const tripsPerHour = 3600 / Math.max(1, headwaySec);
      const cap = this._busCapacity(route);
      const seatsPerHour = tripsPerHour * cap;
      // 需求：各站等待累积速率（人/小时）
      let demandPerHour = 0;
      for (const s of route.stops) {
        // 用当前等待反推太慢；按居住人口容量 × WAIT_RATE 估算
        demandPerHour += this._stopDemandPerHour(s, g);
      }
      const loadFactor = seatsPerHour > 0 ? demandPerHour / seatsPerHour : 0;
      routes.push({
        id: route.id, name: route.name, runnable: true,
        cycleSec: Math.round(cycleSec),
        buses, headwaySec: Math.round(headwaySec * 10) / 10,
        tripsPerHour: Math.round(tripsPerHour * 10) / 10,
        seatsPerHour: Math.round(seatsPerHour),
        demandPerHour: Math.round(demandPerHour),
        loadFactor: Math.round(loadFactor * 100) / 100,
        verdict: loadFactor > 1 ? '运力不足' : (loadFactor > 0.7 ? '偏紧' : (loadFactor < 0.2 ? '过剩' : '健康')),
      });
    }
    // 货运
    const lines = [];
    for (const line of this.freightLines) {
      const est = this.estimateThroughput(line.id, g);
      lines.push({ id: line.id, name: line.name, active: line.active,
                   unitsPerMin: est.ok ? est.estimate.unitsPerMin : 0,
                   delivered: line.delivered });
    }
    return { routes, lines, at: Date.now() };
  };

  // 某站的需求速率（人/小时）：周围居住人口容量 × WAIT_RATE × 3600
  TransitManager.prototype._stopDemandPerHour = function (stop, game) {
    const g = game || this._game;
    if (!g || !g.builder || !g.builder.buildings) return 0;
    let pop = 0;
    for (const b of g.builder.buildings) {
      const isRes = b.id === 'habitat' || b.id === 'dome';
      if (!isRes) continue;
      if (_dist(b.x, b.y, stop.x, stop.y) > BUS.STOP_RADIUS) continue;
      let cap = 0;
      try {
        const lv = g.builder.levelDef ? g.builder.levelDef(b) : null;
        cap = (lv && lv.popCap) || 0;
      } catch (e) {}
      pop += cap;
    }
    return pop * BUS.WAIT_RATE * 3600;
  };

  // ============ 全量完整性校验 ============
  // 检查：桥端/隧道口/线路端点建筑是否被拆除、线路站点数、缓存一致性
  TransitManager.prototype.validateAll = function (game) {
    const g = game || this._game;
    const issues = [];
    const push = (level, kind, text, ref) => issues.push({ level, kind, text, ref: ref || null });

    // 桥/隧道结构
    const bs = this._validateStructures(g);
    for (const b of bs.badBridges) push('warn', 'bridge', `桥 #${b.id} 端点非法：${b.reason}`, { id: b.id });
    for (const t of bs.badTunnels) push('warn', 'tunnel', `隧道 #${t.id} ${t.end}端不再是岩石`, { id: t.id });

    // 货运线端点建筑
    if (g && g.builder && typeof g.builder.at === 'function') {
      for (const line of this.freightLines) {
        for (const [pt, tag] of [[line.from, '起点'], [line.to, '终点']]) {
          const b = g.builder.at(pt.x, pt.y);
          if (!b) {
            push('error', 'freight', `专线「${line.name}」${tag}(${pt.x},${pt.y}) 的建筑已被拆除`, { id: line.id });
          } else {
            const kind = _freightEndpointKind(b, g.builder);
            if (!kind) push('warn', 'freight',
              `专线「${line.name}」${tag}建筑已变为非生产/仓储类型（${b.id}）`, { id: line.id });
          }
        }
        // 资源有效性
        if (!_isValidRes(line.resource))
          push('error', 'freight', `专线「${line.name}」资源「${line.resource}」非法`, { id: line.id });
      }
    }

    // 公交线路
    for (const route of this.busRoutes) {
      if (route.stops.length === 1)
        push('warn', 'bus', `线路「${route.name}」只有 1 站，无法发车`, { id: route.id });
      if (route.stops.length === 0)
        push('warn', 'bus', `线路「${route.name}」没有站点`, { id: route.id });
      for (const bus of route.buses) {
        if (bus.toIdx >= route.stops.length || bus.fromIdx >= route.stops.length)
          push('error', 'bus', `线路「${route.name}」车辆 #${bus.id} 站点索引越界`, { id: route.id, busId: bus.id });
        for (const p of bus.passengers) {
          if (p.dest >= route.stops.length)
            push('error', 'bus', `线路「${route.name}」车辆 #${bus.id} 有非法目的地乘客`, { id: route.id, busId: bus.id });
        }
      }
    }

    // ID 唯一性
    const dupCheck = (arr, name) => {
      const seen = new Set();
      for (const it of arr) {
        if (seen.has(it.id)) push('error', 'id', `${name} ID 重复：${it.id}`, { id: it.id });
        seen.add(it.id);
      }
    };
    dupCheck(this.bridges, '桥');
    dupCheck(this.tunnels, '隧道');
    dupCheck(this.busRoutes, '公交线路');
    dupCheck(this.freightLines, '货运线');

    return { ok: issues.filter(i => i.level === 'error').length === 0, issues, at: Date.now() };
  };

  // ============ 线路导入导出（分享线路设计） ============
  TransitManager.prototype.exportRoute = function (routeId) {
    const route = this.getRoute(routeId);
    if (!route) return { ok: false, reason: `找不到线路 #${routeId}` };
    return {
      ok: true,
      data: {
        transitRouteV: 1,
        name: route.name,
        color: route.color,
        level: route.level,
        interval: route.interval,
        stops: route.stops.map(s => ({ x: s.x, y: s.y })),
      },
    };
  };

  TransitManager.prototype.importRoute = function (data, game) {
    if (!data || data.transitRouteV !== 1 || !Array.isArray(data.stops))
      return { ok: false, reason: '线路数据格式不正确' };
    if (data.stops.length > BUS.MAX_STOPS)
      return { ok: false, reason: `站点超过上限 ${BUS.MAX_STOPS}` };
    const cr = this.createRoute(data.name || '导入线路', game);
    if (!cr.ok) return cr;
    const route = this.getRoute(cr.route.id);
    if (data.color) route.color = String(data.color);
    if (data.interval) route.interval = _clamp(Math.round(data.interval), 10, 300);
    // 等级直接设（导入的是设计，不重复收费；但上限仍守）
    route.level = _clamp(Math.round(data.level) || 1, 1, BUS.MAX_LEVEL);
    let added = 0;
    const failed = [];
    for (const s of data.stops) {
      const r = this.addStop(route.id, s.x, s.y, game);
      if (r.ok) added++;
      else failed.push({ x: s.x, y: s.y, reason: r.reason });
    }
    return { ok: true, route: this._publicRoute(route), added, failed };
  };

  // ============ 车辆再平衡 ============
  // 把"过剩"线路（loadFactor<0.2 且车≥2）的富余车辆调给"不足"线路（等待>24）
  // 实现：过剩线退役 1 辆 → 不足线立即补发 1 辆（经由 nextDeparture=now）
  TransitManager.prototype.rebalanceBuses = function (game) {
    const plan = this.capacityPlan(game);
    const surplus = [], deficit = [];
    for (const r of plan.routes) {
      if (!r.runnable) continue;
      const route = this.getRoute(r.id);
      if (r.verdict === '过剩' && route.buses.length >= 2) surplus.push(route);
      if (r.totalWaiting > 24 || r.verdict === '运力不足') {
        const rep = this.routeReport(r.id);
        if (rep.ok && rep.report.totalWaiting > 24) deficit.push(route);
      }
    }
    let moved = 0;
    const moves = [];
    for (const d of deficit) {
      if (!surplus.length) break;
      const s = surplus[0];
      // 退役过剩线一辆车（取载客最少的）
      const victim = s.buses.slice().sort((a, b) => a.passengers.length - b.passengers.length)[0];
      if (!victim) continue;
      this.removeBus(s.id, victim.id);
      d.nextDeparture = Date.now(); // 立即补发
      // 目标车数允许+1（临时加车，不突破 MAX_BUSES 则直接发）
      if (d.buses.length < BUS.MAX_BUSES && d.stops.length >= 2 && d.active) {
        this._spawnBus(d, game);
        moved++;
        moves.push({ from: s.name, to: d.name });
      }
      if (s.buses.length < 2) surplus.shift();
    }
    return { ok: true, moved, moves };
  };
}

_mixinOptimize(TransitManager);

/* ============================================================================
 * 公开 API 索引（完整方法清单，供接入方查阅）
 * ----------------------------------------------------------------------------
 * 构造/主循环：
 *   constructor() / update(now, dt, game)
 * 立交桥 (§2)：placeBridge / removeBridge / repairBridge / bridgeAt /
 *   bridgeCovering / getBridges / bridgeInfo / planBridge /
 *   bridgesNeedingRepair / nearestBridge / damageBridge / damageBridgeAt /
 *   validateBridges / renderBridges / noteBridgeUse
 * 隧道 (§3)：placeTunnel / removeTunnel / tunnelAt / tunnelBetween /
 *   getTunnels / tunnelInfo / planTunnel / nearestTunnel / renderTunnels
 * 路径/耗时 (§4)：travelTime / travelTimeDetailed / transitAwarePath /
 *   getStructures / renderStructures / suggestCrossing / batchTravelTime
 * 公交 (§5)：createRoute / getRoute / getRoutes / addStop / removeStop /
 *   removeRoute / toggleRoute / upgradeRoute / renameRoute / setRouteInterval /
 *   removeBus / busInfo / routeReport / getHappinessAt / getBusStats /
 *   optimizeStopOrder / applyStopOrder / odMatrix / topOdPairs /
 *   headwayStats / exportRoute / importRoute / rebalanceBuses /
 *   renderBusSystem
 * 货运 (§6)：createLine / getLine / getLines / removeLine / toggleLine /
 *   setPriority / renameLine / lineReport / estimateThroughput / lineEconomy /
 *   linesByResource / pauseAllLines / resumeAllLines / getFreightStats /
 *   renderFreight
 * 拥堵 (§7)：recordPass / getCongestion / speedMulAt / routePenalty /
 *   isCongested / hotspots / congestionSummary / resetCongestion /
 *   exportHeatmap / renderOverlay
 * 运营 (§10)：getAdvisories / stopConnectivity / getMilestones /
 *   describeTile / capacityPlan / validateAll / migrateSave
 * 存档：save() / load(data)
 * 渲染：renderAll(ctx, map, tile, now, opts) / renderOverlay(ctx, map, tile, now?)
 * 杂项：getStats() / getStructureIssues() / clearPathCaches() /
 *   pathCacheStats() / debugDump() / reset()
 * 常量：TRANSITGUIDE（15 条）/ BRIDGE / TUNNEL / BUS / FREIGHT / CONG /
 *   TRAVEL / TRANSIT_SAVE_VERSION
 * ========================================================================== */

/* ============================================================================
 * §12 流量日志 / 建造菜单 / 新手提示 / 线路配色
 * ----------------------------------------------------------------------------
 * - 桥 _useLog / 专线 _deliveryLog：环形时间日志 → bridgeTrafficRate /
 *   deliveryRate（每分钟速率，供 UI 曲线/顾问用）
 * - buildMenu(game)：建造菜单数据（含费用与可负担性）
 * - getTutorialHints(game)：情境化新手提示
 * - setRouteColor(id, color)：线路配色
 * ========================================================================== */

const FLOW_LOG_CAP = 240;   // 流量日志上限（条）
const FLOW_LOG_MS = 3600000; // 日志保留 1 小时（清理由记录时顺手做）

function _mixinFlow(TransitManager) {

  // ---- 内部：向环形日志追加 ----
  TransitManager.prototype._pushFlowLog = function (arr, now, amount) {
    arr.push({ t: now, n: amount });
    if (arr.length > FLOW_LOG_CAP) arr.splice(0, arr.length - FLOW_LOG_CAP);
    // 顺手清理过期（1小时前）
    const cutoff = now - FLOW_LOG_MS;
    let i = 0;
    while (i < arr.length && arr[i].t < cutoff) i++;
    if (i > 0) arr.splice(0, i);
  };

  // ---- 桥流量速率（次/分钟，默认近 10 分钟） ----
  TransitManager.prototype.bridgeTrafficRate = function (id, minutes) {
    const br = this.bridges.find(b => b.id === id);
    if (!br) return { ok: false, reason: `找不到桥 #${id}` };
    const now = Date.now();
    const win = Math.max(1, Math.min(60, minutes || 10)) * 60000;
    const log = br._useLog || [];
    let n = 0;
    for (const e of log) if (e.t >= now - win) n += e.n;
    return {
      ok: true,
      rate: {
        bridgeId: id, crossings: br.crossings,
        perMin: Math.round(n / (win / 60000) * 100) / 100,
        windowMin: win / 60000,
      },
    };
  };

  // ---- 专线交付速率（单位/分钟，默认近 10 分钟） ----
  TransitManager.prototype.deliveryRate = function (id, minutes) {
    const line = this.getLine(id);
    if (!line) return { ok: false, reason: `找不到专线 #${id}` };
    const now = Date.now();
    const win = Math.max(1, Math.min(60, minutes || 10)) * 60000;
    const log = line._deliveryLog || [];
    let n = 0;
    for (const e of log) if (e.t >= now - win) n += e.n;
    return {
      ok: true,
      rate: {
        lineId: id, name: line.name, delivered: line.delivered,
        perMin: Math.round(n / (win / 60000) * 100) / 100,
        windowMin: win / 60000,
      },
    };
  };

  // ---- 线路配色 ----
  TransitManager.prototype.setRouteColor = function (id, color) {
    const route = this.getRoute(id);
    if (!route) return { ok: false, reason: `找不到线路 #${id}` };
    if (!/^#[0-9a-fA-F]{6}$/.test(String(color || '')))
      return { ok: false, reason: '颜色格式须为 #rrggbb' };
    route.color = color;
    return { ok: true, color };
  };

  // ---- 建造菜单（UI 用）：各项交通建设的费用与可负担性 ----
  TransitManager.prototype.buildMenu = function (game) {
    const inv = _invOf(game);
    const afford = (cost) => (inv ? _canAfford(inv, cost) : true);
    const costName = (cost) => Object.entries(cost)
      .map(([k, v]) => `${_resName(k)}×${v}`).join(' ');
    return [
      {
        kind: 'bridge', name: '🌉 立交桥', desc: '跨越峡谷的捷径，两端≤8格',
        costModel: `铁矿×${BRIDGE.IRON_PER_TILE}/格（按长度）`,
        exampleCost: { iron: BRIDGE.IRON_PER_TILE * 4 },
        exampleName: costName({ iron: BRIDGE.IRON_PER_TILE * 4 }) + '（4格示例）',
        affordable: afford({ iron: BRIDGE.IRON_PER_TILE }),
        maxLen: BRIDGE.MAX_LEN,
      },
      {
        kind: 'tunnel', name: '🚇 隧道', desc: '穿山捷径，两端须为岩石，≤12格',
        costModel: `钢材×${TUNNEL.STEEL_PER_TILE}/格（按直线距离）`,
        exampleCost: { steel: TUNNEL.STEEL_PER_TILE * 6 },
        exampleName: costName({ steel: TUNNEL.STEEL_PER_TILE * 6 }) + '（6格示例）',
        affordable: afford({ steel: TUNNEL.STEEL_PER_TILE }),
        maxLen: TUNNEL.MAX_LEN,
      },
      {
        kind: 'route', name: '🚌 公交线路', desc: '建线后设站发车，提居住幸福度',
        costModel: costName(BUS.CREATE_COST),
        exampleCost: { ...BUS.CREATE_COST },
        exampleName: costName(BUS.CREATE_COST),
        affordable: afford(BUS.CREATE_COST),
        maxStops: BUS.MAX_STOPS,
      },
      {
        kind: 'line', name: '🚚 货运专线', desc: '生产建筑→仓库的定点资源专线',
        costModel: `铁矿×${FREIGHT.CREATE_COST.iron} 钢材×${FREIGHT.CREATE_COST.steel} + 铁矿×${FREIGHT.IRON_PER_TILE}/格`,
        exampleCost: { iron: FREIGHT.CREATE_COST.iron + FREIGHT.IRON_PER_TILE * 6,
                       steel: FREIGHT.CREATE_COST.steel },
        exampleName: costName({ iron: FREIGHT.CREATE_COST.iron + FREIGHT.IRON_PER_TILE * 6,
                                steel: FREIGHT.CREATE_COST.steel }) + '（6格示例）',
        affordable: afford(FREIGHT.CREATE_COST),
        maxLines: FREIGHT.MAX_LINES,
      },
    ];
  };

  // ---- 情境化新手提示（help 面板 / 教程用） ----
  TransitManager.prototype.getTutorialHints = function (game) {
    const hints = [];
    const g = game || this._game;
    // 桥
    if (this.bridges.length === 0) {
      // 地图上有峡谷才提示
      let hasCanyon = false;
      try {
        const T = _TERRAIN();
        if (g && g.map) {
          outer: for (let y = 0; y < g.map.size; y += 5) {
            for (let x = 0; x < g.map.size; x += 5) {
              if (g.map.terrain[y] && g.map.terrain[y][x] === T.CANYON) { hasCanyon = true; break outer; }
            }
          }
        }
      } catch (e) {}
      if (hasCanyon)
        hints.push({ icon: '🌉', text: '地图上有峡谷隔断：在两岸建「立交桥」，物流与通行耗时直降' });
    }
    for (const br of this.bridgesNeedingRepair()) {
      hints.push({ icon: '🔧', text: `桥 #${br.id} ${br.damaged ? '已受损' : '磨损严重'}，维修后恢复捷径` });
    }
    // 公交
    if (this.busRoutes.length === 0)
      hints.push({ icon: '🚌', text: '建一条公交线：在道路上设 2 个站，站点 5 格内住宅幸福度提升' });
    else {
      for (const r of this.busRoutes) {
        if (r.stops.length < 2)
          hints.push({ icon: '🚏', text: `「${r.name}」只有 ${r.stops.length} 站，再加 1 站才能发车` });
      }
    }
    // 货运
    if (this.freightLines.length === 0)
      hints.push({ icon: '🚚', text: '建一条货运专线：把采矿机连到仓库，资源自动送货上门' });
    // 拥堵
    const hot = this.hotspots(1);
    if (hot.length && hot[0].level === 2)
      hints.push({ icon: '🚦', text: `(${hot[0].x},${hot[0].y}) 严重拥堵 ${hot[0].vehPerMin} 辆/分钟，点开拥堵热力查看` });
    return hints.slice(0, 6);
  };
}

_mixinFlow(TransitManager);

/* ============================================================================
 * §13 接入增强：读档钩子 / 位置查询 / 小地图渲染
 * ----------------------------------------------------------------------------
 * - onLoad(game)：读档后调用——立即补齐货运车辆、重算幸福度、设 _game
 * - getRouteAt(x,y)：点选地块时查有哪些线路经停
 * - nearestStop(x,y)：最近的公交站（UI 寻路提示用）
 * - freightLineAt(x,y)：端点在该格的专线
 * - renderMinimap(ctx, s)：小地图交通层（桥线/隧道点/站点/专线端点）
 * ========================================================================== */

function _mixinAccess(TransitManager) {

  // ---- 读档后钩子（game.js load() 末尾调用，缺 game 也安全） ----
  TransitManager.prototype.onLoad = function (game) {
    if (game) this._game = game;
    const now = Date.now();
    try {
      // 货运线立即补车（否则要等下一 tick）
      for (const line of this.freightLines) {
        if (line.active && game) this._ensureLineTrucks(line, game);
      }
    } catch (e) {}
    try {
      // 幸福度立即重算（否则读档后 5 秒内无加成）
      if (game) { this._recomputeHappiness(game); this._lastHappy = now; }
    } catch (e) {}
    try {
      // 结构校验跑一次
      if (game) { this._validateStructures(game); this._lastStructCheck = now; }
    } catch (e) {}
    return { ok: true };
  };

  // ---- 位置查询 ----
  // 经过该格的公交线路（含站点索引）
  TransitManager.prototype.getRouteAt = function (x, y) {
    x = _ix(x); y = _ix(y);
    const out = [];
    for (const route of this.busRoutes) {
      route.stops.forEach((s, i) => {
        if (s.x === x && s.y === y)
          out.push({ routeId: route.id, routeName: route.name, stopIndex: i,
                     active: route.active, color: route.color });
      });
    }
    return out;
  };

  // 最近的公交站
  TransitManager.prototype.nearestStop = function (x, y) {
    let best = null, bestD = Infinity;
    for (const route of this.busRoutes) {
      route.stops.forEach((s, i) => {
        const d = _dist(x, y, s.x, s.y);
        if (d < bestD) {
          bestD = d;
          best = { routeId: route.id, routeName: route.name, index: i,
                   x: s.x, y: s.y, active: route.active,
                   waiting: Math.round(s.waiting) };
        }
      });
    }
    return best ? { stop: best, dist: Math.round(bestD * 10) / 10 } : null;
  };

  // 端点在该格的货运线
  TransitManager.prototype.freightLineAt = function (x, y) {
    x = _ix(x); y = _ix(y);
    const out = [];
    for (const line of this.freightLines) {
      if (line.from.x === x && line.from.y === y)
        out.push({ lineId: line.id, name: line.name, end: 'from', resource: line.resource });
      if (line.to.x === x && line.to.y === y)
        out.push({ lineId: line.id, name: line.name, end: 'to', resource: line.resource });
    }
    return out;
  };

  // ---- 小地图交通层（s = 每格像素） ----
  TransitManager.prototype.renderMinimap = function (ctx, s) {
    if (!ctx || !s) return;
    // 桥：棕色线
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = Math.max(1, s * 0.8);
    for (const br of this.bridges) {
      ctx.beginPath();
      ctx.moveTo((br.x1 + 0.5) * s, (br.y1 + 0.5) * s);
      ctx.lineTo((br.x2 + 0.5) * s, (br.y2 + 0.5) * s);
      ctx.stroke();
    }
    // 隧道：灰色点
    ctx.fillStyle = '#9ca3af';
    for (const tn of this.tunnels) {
      for (const [px, py] of [[tn.ax, tn.ay], [tn.bx, tn.by]]) {
        ctx.beginPath();
        ctx.arc((px + 0.5) * s, (py + 0.5) * s, Math.max(1, s * 0.7), 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // 公交站：线路色点
    for (const route of this.busRoutes) {
      ctx.fillStyle = route.active ? route.color : '#52525b';
      for (const st of route.stops) {
        ctx.fillRect(st.x * s, st.y * s, Math.max(1, s), Math.max(1, s));
      }
    }
    // 公交车：白色点
    ctx.fillStyle = '#ffffff';
    for (const route of this.busRoutes) {
      for (const bus of route.buses) {
        ctx.fillRect(bus.x * s, bus.y * s, Math.max(1, s), Math.max(1, s));
      }
    }
    // 货运端点：橙色点
    ctx.fillStyle = '#f59e0b';
    for (const line of this.freightLines) {
      ctx.fillRect(line.from.x * s, line.from.y * s, Math.max(1, s), Math.max(1, s));
      ctx.fillRect(line.to.x * s, line.to.y * s, Math.max(1, s), Math.max(1, s));
    }
  };
}

_mixinAccess(TransitManager);

// dt 防御：update 入口钳制（负值/超大值保护）
(function _patchUpdateDt() {
  const orig = TransitManager.prototype.update;
  TransitManager.prototype.update = function (now, dt, game) {
    if (typeof dt !== 'number' || !(dt >= 0)) dt = 0;
    if (dt > 5000) dt = 5000; // 单帧超过 5 秒按 5 秒算（切后台回来不瞬移）
    return orig.call(this, now, dt, game);
  };
})();
