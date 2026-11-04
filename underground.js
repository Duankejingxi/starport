/* 星港 — underground.js：地下城系统
 * 三层地下（B1/B2/B3，每层 50×50）：挖掘 / 矿脉 / 探险队 / 地下建筑 / 地下灾难
 * 纯机制模块：UndergroundManager + CaveExplorer，可独立于 game.js 使用，
 * 也可由 game.js 挂载（attachGame）接入背包 / 统计 / 事件。
 * 代码风格：顶部常量配置（disaster.js 风格）+ RES_DEFS 风格资源扩展（resources.js 风格）
 *           + BUILDINGS 风格建筑定义（build.js 风格：levels[1..3]）。
 */

// ============ 基础常量 ============
const UG = {
  SIZE: 50,                          // 每层 50×50 网格
  LEVELS: 3,                         // B1/B2/B3
  LEVEL_NAMES: ['B1', 'B2', 'B3'],
  LEVEL_DEPTH_M: [60, 180, 400],     // 每层深度（米）：影响挖掘成本与风险
  SAVE_VERSION: 1,                   // 存档版本号
};

// ============ 瓦片类型 ============
const UG_TILE = {
  ROCK: 0,      // 岩石（未挖掘，可挖）
  IRON: 1,      // 深层铁矿脉（产铁为地表 3 倍）
  CRYSTAL: 2,   // 晶体矿脉（新资源 crystal）
  CAVE: 3,      // 天然洞穴（可直接利用，不可挖）
  LAKE: 4,      // 地下湖（景观/水源，不可挖）
  MAGMA: 5,     // 岩浆裂缝（仅 B3，危险，不可挖）
  GEO: 6,       // 地热喷口（可建地热电站）
  EMPTY: 7,     // 已挖空（可建造）
};

// 瓦片定义：RES_DEFS 风格 {name, icon, color}
const UG_TILE_DEFS = {
  [UG_TILE.ROCK]:    { name: '岩石',     icon: '⬛', color: '#3f3f46', diggable: true,  desc: '坚硬的火星岩层，挖掘后可建造' },
  [UG_TILE.IRON]:    { name: '深层铁矿脉', icon: '🟤', color: '#b45309', diggable: true,  desc: '富铁矿脉，挖掘产出为地表采矿机 3 倍' },
  [UG_TILE.CRYSTAL]: { name: '晶体矿脉',   icon: '💎', color: '#67e8f9', diggable: true,  desc: '稀有晶体矿脉，挖掘获得晶体矿' },
  [UG_TILE.CAVE]:    { name: '天然洞穴',   icon: '🕳️', color: '#18181b', diggable: false, desc: '天然空洞，探险队可探索' },
  [UG_TILE.LAKE]:    { name: '地下湖',     icon: '🌊', color: '#0ea5e9', diggable: false, desc: '地下水体，农场灌溉水源（不耗地表水）' },
  [UG_TILE.MAGMA]:   { name: '岩浆裂缝',   icon: '🌋', color: '#ef4444', diggable: false, danger: true, desc: 'B3 专属，极高温危险区，岩浆护盾可防护' },
  [UG_TILE.GEO]:     { name: '地热喷口',   icon: '♨️', color: '#f59e0b', diggable: false, desc: '地热能出口，只能建造地热电站' },
  [UG_TILE.EMPTY]:   { name: '已挖掘',     icon: '·',  color: '#27272a', diggable: false, desc: '已挖空的空间，可建造地下建筑' },
};

// ============ 资源扩展（RES_DEFS 风格；不修改 resources.js） ============
const UndergroundRES = {
  crystal: { name: '晶体矿', icon: '💎', color: '#67e8f9' },
  // 地热能为派生资源（实时计算，不存背包），与电力 power 同理
};
const UndergroundRES_DESC = {
  crystal: 'B2/B3 晶体矿脉与提炼厂产出，高级地下建筑必需',
};
const UndergroundRES_VALUE = { crystal: 12 };  // 贸易估值（贸易系统可引用）

// 运行时把 crystal 并入全局 RES_DEFS（若存在），不改 resources.js 文件
if (typeof RES_DEFS !== 'undefined' && !RES_DEFS.crystal) {
  RES_DEFS.crystal = UndergroundRES.crystal;
}
if (typeof RES_VALUE !== 'undefined' && RES_VALUE.crystal === undefined) {
  RES_VALUE.crystal = UndergroundRES_VALUE.crystal;
}
if (typeof RES_DESC !== 'undefined' && !RES_DESC.crystal) {
  RES_DESC.crystal = UndergroundRES_DESC.crystal;
}

// 确保背包里有 crystal 槽位（老存档兼容）
function ensureCrystalSlot(inv) {
  if (inv && inv.crystal === undefined) inv.crystal = 0;
  return inv;
}

// ============ 地层生成参数（按层） ============
const UG_GEN = {
  // caves: 洞穴随机游走条数；caveLen: 每条游走步数；各类矿脉/湖/岩浆/地热数量
  0: { caves: 14, caveLen: 120, ironVeins: 26, crystalVeins: 4,  lakes: 5, magma: 0,  geo: 3,  seedSalt: 1103 },
  1: { caves: 18, caveLen: 150, ironVeins: 34, crystalVeins: 10, lakes: 7, magma: 0,  geo: 6,  seedSalt: 2307 },
  2: { caves: 22, caveLen: 180, ironVeins: 40, crystalVeins: 18, lakes: 6, magma: 14, geo: 10, seedSalt: 3719 },
};

// ============ 挖掘参数 ============
const UG_DIG = {
  BASE_IRON: 2,              // B1 每格基础铁耗
  DEPTH_MULT: [1, 2.2, 4],   // B1/B2/B3 成本倍率
  EXTRA_STEEL: [0, 1, 3],    // B2/B3 每格额外钢材
  TIME_MS: [1200, 2200, 3600], // 每格挖掘耗时（挖掘队列用）
  VEIN_YIELD: {              // 矿脉挖掘一次性产出（深层铁矿 ×3 于地表单次采集 2）
    [UG_TILE.IRON]: { iron: 6 },
    [UG_TILE.CRYSTAL]: { crystal: 3 },
    [UG_TILE.ROCK]: {},
  },
  ADJACENT_RULE: true,       // 只能挖掘与已挖空/洞穴相邻的格子（第一格除外：电梯井）
};

// ============ 地下解锁参数 ============
const UG_UNLOCK = {
  B1_COST: { iron: 60, steel: 10 },   // 开凿 B1 竖井（解锁 B1）
  B2_NEED: 'vent',                   // 通风系统建成 → 解锁 B2
  B3_NEED: 'drill',                  // 钻探平台建成 → 解锁 B3
};

// ============ 探险队参数 ============
const UG_EXPLORE = {
  MAX_TEAMS: 3,                       // 最多 3 支探险队
  BUILD_COST: { iron: 30, food: 20 }, // 组建一支探险队
  DISPATCH_COST: { food: 8 },         // 每次派遣消耗食物
  DURATION_MS: [45000, 70000, 100000],// B1/B2/B3 单次探索耗时
  BASE_RISK: [0.06, 0.12, 0.20],      // 基础坍塌风险（按层）
  SUPPORT_CUT: 0.5,                   // 有支柱/护盾时风险减半
  MIN_CAVE_NEAR: true,                // 派遣目标必须是洞穴格
  // 战利品表：按层 roll，每次探索 roll 2~4 次
  LOOT: [
    null,
    [ { res: 'iron', n: [4, 10], w: 40 }, { res: 'crystal', n: [1, 3], w: 10 },
      { res: 'rare', n: [2, 5], w: 20 },  { res: 'tech', n: [1, 2], w: 8 },
      { res: 'food', n: [3, 6], w: 22 } ],
    [ { res: 'iron', n: [8, 16], w: 32 }, { res: 'crystal', n: [2, 5], w: 22 },
      { res: 'rare', n: [4, 8], w: 20 },  { res: 'tech', n: [1, 3], w: 12 },
      { res: 'uranium', n: [1, 3], w: 8 }, { res: 'food', n: [3, 6], w: 6 } ],
    [ { res: 'iron', n: [10, 20], w: 24 }, { res: 'crystal', n: [4, 9], w: 30 },
      { res: 'rare', n: [5, 10], w: 16 },  { res: 'tech', n: [2, 4], w: 14 },
      { res: 'uranium', n: [2, 5], w: 12 }, { res: 'he3', n: [1, 2], w: 4 } ],
  ],
  LOOT_ROLLS: [2, 3, 4],              // 按层 roll 次数
};

// ============ 地下灾难参数 ============
const UG_DISASTER = {
  // 坍塌：随机压坏一栋地下建筑（降 1 级；1 级则摧毁）
  COLLAPSE: {
    CHECK_MS: 90000,        // 每 90 秒检查一次
    BASE_CHANCE: 0.30,      // 基础概率
    DEPTH_BONUS: [0, 0.08, 0.16], // B2/B3 额外风险
    SHIELD_BLOCK: 1.0,      // 岩浆护盾建成 → 本层坍塌伤害免疫
    SUPPORT_CUT: 0.5,       // 支柱存在 → 概率减半
  },
  // 瓦斯泄漏：人口 -5（通过事件交给 game.js 扣减）
  GAS: {
    CHECK_MS: 150000,       // 每 150 秒检查一次
    BASE_CHANCE: 0.25,
    POP_LOSS: 5,            // 人口 -5
    MONITOR_CUT: 0.6,       // 气体监测站建成 → 概率降低 60%
    VENT_CUT: 0.3,          // 通风系统 → 再降 30%
  },
  // B3 岩浆涌动（岩浆裂缝相邻建筑持续掉耐久，无护盾时）
  MAGMA_SURGE: {
    CHECK_MS: 120000,
    DMG_NEAR_MAGMA: 1,      // 相邻岩浆的建筑耐久 -1/次
  },
};

// ============ 层间电梯参数 ============
const UG_ELEVATOR = {
  MAX_PER_LEVEL: 1,          // 每层最多 1 部电梯
  EFF_BONUS: 0.25,           // 每部电梯：本层建筑生产 +25%
  NEED_FOR_DEEP_EXPLORE: true, // 派遣 B2/B3 探险队需要电梯链完整
};

// ============ 地下建筑定义（BUILDINGS 风格：levels[1..3]） ============
// 字段：id/name/icon/desc/levels[null,L1,L2,L3]
// level 字段：cost, needPop, power(产电)/powerUse(耗电), produce+produceInterval,
//             popCap(人口上限), unlock(解锁地层), shield(护盾), special(特殊效果说明)
const UG_BUILDINGS = {
  // —— 1. 地热电站：必须建在地热喷口(GEO)上；产电 20/50/120 ——
  geothermal: {
    id: 'geothermal', name: '地热电站', icon: '♨️',
    desc: '利用地热喷口发电，必须建在 ♨️ 地热喷口上',
    needTile: UG_TILE.GEO,
    levels: [null,
      { cost: { iron: 40, steel: 10 }, needPop: 4,  power: 20,  powerUse: 0 },
      { cost: { iron: 90, steel: 30, crystal: 4 }, needPop: 8,  power: 50,  powerUse: 0 },
      { cost: { iron: 180, steel: 70, crystal: 12 }, needPop: 14, power: 120, powerUse: 0 },
    ],
  },
  // —— 2. 深层矿机：产铁为地表采矿机 3 倍 ——
  deepminer: {
    id: 'deepminer', name: '深层矿机', icon: '⛏️',
    desc: '自动开采深层富铁矿，产铁为地表采矿机 3 倍',
    needTile: UG_TILE.EMPTY,
    levels: [null,
      { cost: { iron: 30, steel: 8 }, needPop: 3, powerUse: 2, produce: { iron: 6 },  produceInterval: 10000 },
      { cost: { iron: 70, steel: 20, crystal: 3 }, needPop: 6, powerUse: 4, produce: { iron: 15 }, produceInterval: 10000 },
      { cost: { iron: 150, steel: 50, crystal: 8 }, needPop: 12, powerUse: 7, produce: { iron: 36 }, produceInterval: 10000 },
    ],
  },
  // —— 3. 晶体提炼厂：产出新资源 crystal ——
  crystalref: {
    id: 'crystalref', name: '晶体提炼厂', icon: '💎',
    desc: '提炼晶体矿脉，产出稀有资源「晶体矿」',
    needTile: UG_TILE.EMPTY,
    needLevel: 1,  // 需要 B2 及更深（晶体主要富集层）
    levels: [null,
      { cost: { iron: 60, steel: 25 }, needPop: 5,  powerUse: 3, produce: { crystal: 1 }, produceInterval: 20000 },
      { cost: { iron: 120, steel: 50, crystal: 6 }, needPop: 10, powerUse: 6, produce: { crystal: 3 }, produceInterval: 20000 },
      { cost: { iron: 220, steel: 100, crystal: 16 }, needPop: 18, powerUse: 10, produce: { crystal: 8 }, produceInterval: 20000 },
    ],
  },
  // —— 4. 地下农场：产食物，不耗水（地下湖灌溉） ——
  farm: {
    id: 'farm', name: '地下农场', icon: '🍄',
    desc: '地下菌菇/水培农场，产食物且不消耗地表水',
    needTile: UG_TILE.EMPTY,
    levels: [null,
      { cost: { iron: 35, ice: 10 }, needPop: 4,  powerUse: 2, produce: { food: 4 },  produceInterval: 15000, noWater: true },
      { cost: { iron: 80, ice: 25, crystal: 2 }, needPop: 8,  powerUse: 4, produce: { food: 10 }, produceInterval: 15000, noWater: true },
      { cost: { iron: 160, steel: 40, crystal: 6 }, needPop: 14, powerUse: 7, produce: { food: 24 }, produceInterval: 15000, noWater: true },
    ],
  },
  // —— 5. 避难所：人口上限 +10/25/60 ——
  shelter: {
    id: 'shelter', name: '地下避难所', icon: '🛡️',
    desc: '深层居住区，提供大量人口上限，抗灾难',
    needTile: UG_TILE.EMPTY,
    levels: [null,
      { cost: { iron: 50, steel: 15 }, needPop: 0, popCap: 10, powerUse: 1 },
      { cost: { iron: 110, steel: 35, crystal: 4 }, needPop: 0, popCap: 25, powerUse: 2 },
      { cost: { iron: 220, steel: 80, crystal: 10 }, needPop: 0, popCap: 60, powerUse: 4 },
    ],
  },
  // —— 6. 通风系统：解锁 B2 ——
  vent: {
    id: 'vent', name: '通风系统', icon: '🌬️',
    desc: '大型换气/空气循环系统，建成后解锁 B2 层',
    needTile: UG_TILE.EMPTY,
    maxLevel: 1,  // 只建 1 级（功能性建筑）
    levels: [null,
      { cost: { iron: 80, steel: 30 }, needPop: 6, powerUse: 3, unlock: 1 },
      null, null,
    ],
  },
  // —— 7. 钻探平台：解锁 B3 ——
  drill: {
    id: 'drill', name: '钻探平台', icon: '🪛',
    desc: '深层钻探平台，建成后解锁 B3 层（岩浆层）',
    needTile: UG_TILE.EMPTY,
    needLevel: 1,  // 必须建在 B2
    maxLevel: 1,
    levels: [null,
      { cost: { iron: 150, steel: 60, crystal: 8 }, needPop: 10, powerUse: 6, unlock: 2 },
      null, null,
    ],
  },
  // —— 8. 岩浆护盾：防灾难（坍塌免疫 + 岩浆涌动免疫） ——
  magmashield: {
    id: 'magmashield', name: '岩浆护盾', icon: '🔥',
    desc: '能量护盾：本层建筑免疫坍塌伤害与岩浆涌动',
    needTile: UG_TILE.EMPTY,
    needLevel: 1,  // B2 起可建（主要保护 B3）
    maxLevel: 1,
    levels: [null,
      { cost: { iron: 120, steel: 50, crystal: 15 }, needPop: 8, powerUse: 8, shield: true },
      null, null,
    ],
  },
  // —— 9. 层间电梯：地面↔B1↔B2↔B3 ——
  elevator: {
    id: 'elevator', name: '层间电梯', icon: '🛗',
    desc: '连接本层与上一层的高速电梯；本层生产 +25%，B2/B3 探险需电梯链完整',
    needTile: UG_TILE.EMPTY,
    maxLevel: 1,
    maxPerLevel: 1,
    levels: [null,
      { cost: { iron: 60, steel: 25 }, needPop: 2, powerUse: 2, elevator: true, effBonus: 0.25 },
      null, null,
    ],
  },
  // —— 10. 加固支柱：坍塌概率减半（配套） ——
  support: {
    id: 'support', name: '加固支柱', icon: '🏗️',
    desc: '结构加固：本层坍塌概率减半，探险队坍塌风险减半',
    needTile: UG_TILE.EMPTY,
    maxLevel: 1,
    levels: [null,
      { cost: { iron: 40, steel: 20 }, needPop: 2, powerUse: 0, support: true },
      null, null,
    ],
  },
  // —— 11. 气体监测站：瓦斯泄漏概率 -60%（配套） ——
  gasmonitor: {
    id: 'gasmonitor', name: '气体监测站', icon: '📡',
    desc: '实时监测瓦斯浓度，瓦斯泄漏概率降低 60%',
    needTile: UG_TILE.EMPTY,
    maxLevel: 1,
    levels: [null,
      { cost: { iron: 45, steel: 15, crystal: 2 }, needPop: 3, powerUse: 2, gasGuard: true },
      null, null,
    ],
  },
  // —— 12. 地下仓库：晶体/铁矿存储上限（配套） ——
  depot: {
    id: 'depot', name: '地下仓库', icon: '📦',
    desc: '深层仓储：晶体与铁矿存储上限提升',
    needTile: UG_TILE.EMPTY,
    levels: [null,
      { cost: { iron: 50 }, needPop: 2, powerUse: 1, storage: { crystal: 100, iron: 300 } },
      { cost: { iron: 110, steel: 20 }, needPop: 4, powerUse: 2, storage: { crystal: 250, iron: 800 } },
      { cost: { iron: 200, steel: 50, crystal: 5 }, needPop: 8, powerUse: 3, storage: { crystal: 600, iron: 2000 } },
    ],
  },
};

// 建筑建造顺序（UI 列表用）
const UG_BUILD_ORDER = [
  'elevator', 'geothermal', 'deepminer', 'crystalref', 'farm', 'shelter',
  'vent', 'drill', 'magmashield', 'support', 'gasmonitor', 'depot',
];

// ============ 工具：可播种 PRNG（mulberry32，地层生成可复现） ============
function ugRng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 统计 hook：优先 stats.track，不存在则回退 stats.record，最后回退为计数器自增
function ugTrack(stats, event, data) {
  try {
    if (stats && typeof stats.track === 'function') { stats.track(event, data); return; }
    if (stats && typeof stats.record === 'function') { stats.record('underground', Object.assign({ ugEvent: event }, data)); return; }
  } catch (e) { /* 统计失败不影响主流程 */ }
  if (stats && typeof stats === 'object') {
    const key = 'ug_' + event.replace(/[^a-zA-Z0-9_]/g, '_');
    stats[key] = (stats[key] || 0) + 1;
  }
}

// 网格坐标工具
function ugIdx(x, y) { return y * UG.SIZE + x; }
function ugInBounds(x, y) { return x >= 0 && y >= 0 && x < UG.SIZE && y < UG.SIZE; }

// ============================================================
// 探险队单位：CaveExplorer
// 状态机：idle（待命）→ exploring（探索中）→ returning（返程）→ idle
// 风险：探索结束时按层 roll 坍塌风险；坍塌则空手而归并进入 injured（冷却）
// ============================================================
let UG_EXPLORER_SEQ = 1;

class CaveExplorer {
  constructor(level = 0) {
    this.id = 'exp' + (UG_EXPLORER_SEQ++);
    this.name = '探险队 ' + (UG_EXPLORER_SEQ - 1) + ' 号';
    this.homeLevel = level;      // 所属地层
    this.state = 'idle';         // idle | exploring | returning | injured
    this.targetX = -1; this.targetY = -1; // 探索目标（洞穴格）
    this.startAt = 0;            // 派遣时间戳
    this.duration = 0;           // 本次探索耗时
    this.loot = null;            // 预 roll 的战利品（返程结算）
    this.collapsed = false;      // 本次是否遭遇坍塌
    this.injuredUntil = 0;       // 受伤冷却截止
    this.trips = 0;              // 累计出勤
    this.earned = {};            // 累计带回 {res: n}
  }

  // 是否可派遣
  canDispatch(now) {
    if (this.state === 'exploring' || this.state === 'returning') return { ok: false, reason: '探险队正在出勤' };
    if (this.state === 'injured' && now < this.injuredUntil) {
      const s = Math.ceil((this.injuredUntil - now) / 1000);
      return { ok: false, reason: '探险队休整中（' + s + 's）' };
    }
    return { ok: true };
  }

  // 派遣：target 为 {x, y} 洞穴格；risk 为坍塌概率；durationMs 探索耗时
  dispatch(target, risk, durationMs, now, rng) {
    const c = this.canDispatch(now);
    if (!c.ok) return c;
    this.state = 'exploring';
    this.targetX = target.x; this.targetY = target.y;
    this.startAt = now || Date.now();
    this.duration = durationMs;
    this.collapsed = false;
    // 预 roll 坍塌与否（结束时结算，保持一致性）
    this._risk = risk;
    this._rngState = rng ? rng() : Math.random();
    this.trips++;
    return { ok: true };
  }

  // 推进：返回事件数组（供 Manager 收集）
  update(now, lootTable, lootRolls) {
    const evs = [];
    if (this.state === 'exploring' && now - this.startAt >= this.duration) {
      // 探索结束：先 roll 坍塌
      const r = (this._rngState !== undefined ? this._rngState : Math.random());
      this._rngState = undefined;
      if (r < this._risk) {
        this.collapsed = true;
        this.state = 'injured';
        this.injuredUntil = now + 60000; // 休整 60 秒
        this.loot = {};
        evs.push({ type: 'explore_collapse', explorerId: this.id, level: this.homeLevel,
                   msg: this.name + ' 在 B' + (this.homeLevel + 1) + ' 遭遇坍塌，空手而归，休整 60s' });
      } else {
        this.state = 'returning';
        this.startAt = now;
        this.duration = 8000; // 返程 8 秒
        this.loot = rollLoot(lootTable, lootRolls);
        evs.push({ type: 'explore_returning', explorerId: this.id, level: this.homeLevel,
                   msg: this.name + ' 探索完成，正在返程…' });
      }
    } else if (this.state === 'returning' && now - this.startAt >= this.duration) {
      this.state = 'idle';
      for (const k in this.loot) this.earned[k] = (this.earned[k] || 0) + this.loot[k];
      evs.push({ type: 'explore_done', explorerId: this.id, level: this.homeLevel,
                 loot: Object.assign({}, this.loot),
                 msg: this.name + ' 带回物资：' + fmtLoot(this.loot) });
      this.loot = null;
    } else if (this.state === 'injured' && now >= this.injuredUntil) {
      this.state = 'idle';
      evs.push({ type: 'explore_recovered', explorerId: this.id, msg: this.name + ' 休整完毕，可再次派遣' });
    }
    return evs;
  }

  // 进度 0~1（UI 进度条用）
  progress(now) {
    if (this.state !== 'exploring' && this.state !== 'returning') return 0;
    if (!this.duration) return 0;
    return Math.min(1, (now - this.startAt) / this.duration);
  }

  statusText(now) {
    switch (this.state) {
      case 'exploring': return '探索中 ' + Math.floor(this.progress(now) * 100) + '%';
      case 'returning': return '返程中…';
      case 'injured': return '休整中';
      default: return '待命';
    }
  }

  serialize() {
    return { id: this.id, name: this.name, homeLevel: this.homeLevel, state: this.state,
             targetX: this.targetX, targetY: this.targetY, startAt: this.startAt,
             duration: this.duration, loot: this.loot, injuredUntil: this.injuredUntil,
             trips: this.trips, earned: this.earned };
  }

  static deserialize(d) {
    const e = new CaveExplorer(d.homeLevel || 0);
    Object.assign(e, d);
    // 恢复序号计数器，避免 id 冲突
    const n = parseInt(String(d.id).replace('exp', ''), 10);
    if (!isNaN(n) && n >= UG_EXPLORER_SEQ) UG_EXPLORER_SEQ = n + 1;
    return e;
  }
}

// 按权重表 roll 战利品
function rollLoot(table, rolls) {
  const loot = {};
  if (!table || !table.length) return loot;
  const totalW = table.reduce((s, e) => s + e.w, 0);
  for (let i = 0; i < rolls; i++) {
    let r = Math.random() * totalW;
    for (const e of table) {
      r -= e.w;
      if (r <= 0) {
        const n = e.n[0] + Math.floor(Math.random() * (e.n[1] - e.n[0] + 1));
        loot[e.res] = (loot[e.res] || 0) + n;
        break;
      }
    }
  }
  return loot;
}

// 战利品格式化：{iron:6, crystal:2} → "铁矿×6、晶体矿×2"
function fmtLoot(loot) {
  const parts = [];
  for (const k in loot) {
    const def = (typeof RES_DEFS !== 'undefined' && RES_DEFS[k]) || UndergroundRES[k] || { name: k, icon: '' };
    parts.push(def.icon + def.name + '×' + loot[k]);
  }
  return parts.length ? parts.join('、') : '无';
}

// 成本格式化：{iron:10} → "铁矿×10"
function fmtCost(cost) {
  const parts = [];
  for (const k in cost) {
    const def = (typeof RES_DEFS !== 'undefined' && RES_DEFS[k]) || UndergroundRES[k] || { name: k, icon: '' };
    parts.push(def.icon + def.name + '×' + cost[k]);
  }
  return parts.join('、');
}

// ============================================================
// 地下城主管理器：UndergroundManager
// - 3 层 × 50×50 网格，播种可复现生成
// - 挖掘队列 / 建筑放置升级 / 电力结算 / 探险队 / 地下灾难
// - 通过 attachGame({inv, stats, notify, getPop, addPop}) 接入主游戏，
//   也可以独立运行（tick 时传入 inv）。
// ============================================================
class UndergroundManager {
  constructor() {
    this.reset();
    this._game = null;       // 挂载的主游戏上下文
    this._events = [];       // 待取事件队列（game.js 每帧 drainEvents）
    this._digQueue = [];     // 挖掘队列 [{level,x,y,finishAt,costPaid}]
    this._nextCollapseCheck = 0;
    this._nextGasCheck = 0;
    this._nextMagmaCheck = 0;
  }

  reset() {
    this.unlocked = false;            // B1 竖井是否开凿（总开关）
    this.maxLevel = -1;               // 已解锁最高层索引（0=B1）
    this.tiles = [null, null, null];  // 每层 Uint8Array(2500)，未生成为 null
    this.seeds = [0, 0, 0];           // 每层生成种子
    this.buildings = [];              // [{uid,type,level,x,y,acc,hp}]
    this.explorers = [];              // CaveExplorer[]
    this._uidSeq = 1;
    this.dugCount = 0;                // 累计挖掘格数（统计用）
    this.collapseCount = 0;
    this.gasCount = 0;
  }

  // ---------- 主游戏挂载 ----------
  attachGame(game) {
    // game: { inv, stats, notify?(msg), getPop?()->n, addPop?(n), getStorageCap?(res)->n }
    this._game = game || null;
    if (game && game.inv) ensureCrystalSlot(game.inv);
    return this;
  }
  _inv() { return (this._game && this._game.inv) || null; }
  _stats() { return (this._game && this._game.stats) || null; }
  _notify(msg) {
    if (this._game && typeof this._game.notify === 'function') { try { this._game.notify(msg); } catch (e) {} }
  }
  _emit(ev) { this._events.push(ev); }
  drainEvents() { const e = this._events; this._events = []; return e; }

  // ---------- 存档 ----------
  // 存档字段：underground: { unlocked, level, tiles, buildings }
  serialize() {
    return {
      v: UG.SAVE_VERSION,
      unlocked: this.unlocked,
      level: this.maxLevel,                       // 最高解锁层
      tiles: this.tiles.map(t => (t ? Array.from(t) : null)),
      seeds: this.seeds.slice(),
      buildings: this.buildings.map(b => Object.assign({}, b)),
      explorers: this.explorers.map(e => e.serialize()),
      uidSeq: this._uidSeq,
      dugCount: this.dugCount,
    };
  }

  deserialize(d) {
    if (!d) return false;
    this.reset();
    this.unlocked = !!d.unlocked;
    this.maxLevel = (typeof d.level === 'number') ? d.level : -1;
    this.seeds = Array.isArray(d.seeds) ? d.seeds.slice(0, 3) : [0, 0, 0];
    this.tiles = [null, null, null];
    if (Array.isArray(d.tiles)) {
      for (let i = 0; i < 3; i++) {
        if (d.tiles[i]) this.tiles[i] = Uint8Array.from(d.tiles[i]);
      }
    }
    // 老存档只有 unlocked/level 没有 tiles 时，按种子重生成
    for (let i = 0; i <= this.maxLevel; i++) {
      if (!this.tiles[i]) this.generateLevel(i, this.seeds[i] || (Date.now() % 100000));
    }
    this.buildings = Array.isArray(d.buildings) ? d.buildings.map(b => Object.assign({}, b)) : [];
    this.explorers = Array.isArray(d.explorers) ? d.explorers.map(e => CaveExplorer.deserialize(e)) : [];
    this._uidSeq = d.uidSeq || (this.buildings.length + 1);
    this.dugCount = d.dugCount || 0;
    return true;
  }

  // ============================================================
  // 地层生成：岩石打底 → 随机游走挖洞穴 → 矿脉簇 → 湖 → 岩浆/地热
  // ============================================================
  generateLevel(level, seed) {
    const p = UG_GEN[level];
    const rng = ugRng((seed || 1) * 1000 + p.seedSalt);
    const S = UG.SIZE;
    const t = new Uint8Array(S * S); // 默认全 ROCK(0)

    const set = (x, y, v) => { if (ugInBounds(x, y)) t[ugIdx(x, y)] = v; };
    const get = (x, y) => (ugInBounds(x, y) ? t[ugIdx(x, y)] : -1);

    // 1) 洞穴：随机游走（drunkard's walk）
    for (let c = 0; c < p.caves; c++) {
      let x = 4 + Math.floor(rng() * (S - 8));
      let y = 4 + Math.floor(rng() * (S - 8));
      let dx = 0, dy = 0;
      for (let s = 0; s < p.caveLen; s++) {
        set(x, y, UG_TILE.CAVE);
        // 洞穴加宽：随机把邻格也挖空
        if (rng() < 0.35) set(x + 1, y, UG_TILE.CAVE);
        if (rng() < 0.25) set(x, y + 1, UG_TILE.CAVE);
        // 随机转向
        const r = rng();
        if (r < 0.25) { dx = 1; dy = 0; } else if (r < 0.5) { dx = -1; dy = 0; }
        else if (r < 0.75) { dx = 0; dy = 1; } else { dx = 0; dy = -1; }
        x += dx; y += dy;
        if (x < 2 || x > S - 3 || y < 2 || y > S - 3) { // 到边界则换起点
          x = 4 + Math.floor(rng() * (S - 8));
          y = 4 + Math.floor(rng() * (S - 8));
        }
      }
    }

    // 2) 矿脉簇：优先贴着洞穴边缘生成（3~6 格一簇）
    const scatterVein = (tile, count) => {
      let placed = 0, guard = count * 40;
      while (placed < count && guard-- > 0) {
        const x = 2 + Math.floor(rng() * (S - 4));
        const y = 2 + Math.floor(rng() * (S - 4));
        if (get(x, y) !== UG_TILE.ROCK) continue;
        // 要求附近有洞穴（矿脉伴生洞穴）
        let nearCave = false;
        for (let oy = -3; oy <= 3 && !nearCave; oy++)
          for (let ox = -3; ox <= 3; ox++)
            if (get(x + ox, y + oy) === UG_TILE.CAVE) { nearCave = true; break; }
        if (!nearCave && rng() < 0.7) continue;
        const cluster = 3 + Math.floor(rng() * 4);
        for (let i = 0; i < cluster && placed < count; i++) {
          const cx = x + Math.floor(rng() * 3) - 1, cy = y + Math.floor(rng() * 3) - 1;
          if (get(cx, cy) === UG_TILE.ROCK) { set(cx, cy, tile); placed++; }
        }
      }
    };
    scatterVein(UG_TILE.IRON, p.ironVeins);
    scatterVein(UG_TILE.CRYSTAL, p.crystalVeins);

    // 3) 地下湖：洞穴内的水体斑块
    let lakePlaced = 0, lakeGuard = p.lakes * 60;
    while (lakePlaced < p.lakes && lakeGuard-- > 0) {
      const x = 3 + Math.floor(rng() * (S - 6));
      const y = 3 + Math.floor(rng() * (S - 6));
      if (get(x, y) !== UG_TILE.CAVE) continue;
      for (let i = 0; i < 6; i++) {
        const cx = x + Math.floor(rng() * 5) - 2, cy = y + Math.floor(rng() * 5) - 2;
        if (get(cx, cy) === UG_TILE.CAVE) set(cx, cy, UG_TILE.LAKE);
      }
      lakePlaced++;
    }

    // 4) 岩浆裂缝（仅 B3）：纵向/横向裂缝线
    for (let m = 0; m < p.magma; m++) {
      let x = 2 + Math.floor(rng() * (S - 4));
      let y = 2 + Math.floor(rng() * (S - 4));
      const horiz = rng() < 0.5;
      const len = 6 + Math.floor(rng() * 10);
      for (let i = 0; i < len; i++) {
        const g = get(x, y);
        if (g === UG_TILE.ROCK || g === UG_TILE.CAVE) set(x, y, UG_TILE.MAGMA);
        if (horiz) x++; else y++;
        if (!ugInBounds(x, y)) break;
      }
    }

    // 5) 地热喷口：岩石区随机点
    let geoPlaced = 0, geoGuard = p.geo * 50;
    while (geoPlaced < p.geo && geoGuard-- > 0) {
      const x = 2 + Math.floor(rng() * (S - 4));
      const y = 2 + Math.floor(rng() * (S - 4));
      if (get(x, y) === UG_TILE.ROCK) { set(x, y, UG_TILE.GEO); geoPlaced++; }
    }

    this.tiles[level] = t;
    this.seeds[level] = seed || 1;
    return t;
  }

  // ---------- 解锁 ----------
  // 开凿 B1 竖井（总开关）
  unlockB1(inv) {
    inv = inv || this._inv();
    if (this.unlocked) return { ok: false, reason: 'B1 竖井已开凿' };
    if (!inv) return { ok: false, reason: '无背包' };
    if (!canAffordUG(inv, UG_UNLOCK.B1_COST)) return { ok: false, reason: '资源不足：' + fmtCost(UG_UNLOCK.B1_COST) };
    spendResUG(inv, UG_UNLOCK.B1_COST);
    this.unlocked = true;
    this.maxLevel = 0;
    this.generateLevel(0, (Date.now() % 90000) + 1000);
    // 竖井起点：中央 3×3 直接挖空（电梯井位置）
    const c = Math.floor(UG.SIZE / 2);
    for (let oy = -1; oy <= 1; oy++)
      for (let ox = -1; ox <= 1; ox++)
        this.tiles[0][ugIdx(c + ox, c + oy)] = UG_TILE.EMPTY;
    ugTrack(this._stats(), 'underground_unlocked', { level: 0 });
    this._notify('⛏️ B1 竖井开凿完成！地下城系统解锁');
    this._emit({ type: 'unlocked', level: 0, msg: 'B1 解锁' });
    return { ok: true };
  }

  // 层级是否解锁
  isLevelUnlocked(level) {
    return this.unlocked && level >= 0 && level <= this.maxLevel;
  }

  // 尝试解锁更深层（通风系统/钻探平台建成时调用）
  tryUnlockDeeper() {
    if (!this.unlocked) return;
    if (this.maxLevel === 0 && this.countBuilding('vent', 0) > 0) {
      this.maxLevel = 1;
      this.generateLevel(1, (Date.now() % 90000) + 2000);
      const c = Math.floor(UG.SIZE / 2);
      for (let oy = -1; oy <= 1; oy++)
        for (let ox = -1; ox <= 1; ox++)
          this.tiles[1][ugIdx(c + ox, c + oy)] = UG_TILE.EMPTY;
      ugTrack(this._stats(), 'underground_unlocked', { level: 1 });
      this._notify('🌬️ 通风系统运转正常，B2 层解锁！');
      this._emit({ type: 'unlocked', level: 1, msg: 'B2 解锁' });
    }
    if (this.maxLevel === 1 && this.countBuilding('drill', 1) > 0) {
      this.maxLevel = 2;
      this.generateLevel(2, (Date.now() % 90000) + 3000);
      const c = Math.floor(UG.SIZE / 2);
      for (let oy = -1; oy <= 1; oy++)
        for (let ox = -1; ox <= 1; ox++)
          this.tiles[2][ugIdx(c + ox, c + oy)] = UG_TILE.EMPTY;
      ugTrack(this._stats(), 'underground_unlocked', { level: 2 });
      this._notify('🪛 钻探平台打通岩层，B3 层解锁！注意岩浆裂缝 🌋');
      this._emit({ type: 'unlocked', level: 2, msg: 'B3 解锁' });
    }
  }

  // ============================================================
  // 挖掘：只能挖 ROCK/IRON/CRYSTAL，且（首格除外）须与 EMPTY/CAVE 相邻
  // ============================================================
  digCost(level) {
    const cost = { iron: Math.ceil(UG_DIG.BASE_IRON * UG_DIG.DEPTH_MULT[level]) };
    if (UG_DIG.EXTRA_STEEL[level] > 0) cost.steel = UG_DIG.EXTRA_STEEL[level];
    return cost;
  }

  canDig(level, x, y) {
    if (!this.isLevelUnlocked(level)) return { ok: false, reason: '该层未解锁' };
    if (!ugInBounds(x, y)) return { ok: false, reason: '坐标越界' };
    const t = this.tiles[level][ugIdx(x, y)];
    const def = UG_TILE_DEFS[t];
    if (!def.diggable) return { ok: false, reason: def.name + '不可挖掘' };
    if (UG_DIG.ADJACENT_RULE) {
      // 相邻已有 EMPTY/CAVE 即可；整层第一格由竖井/电梯井保证
      let adj = false;
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (const [dx, dy] of dirs) {
        const nx = x + dx, ny = y + dy;
        if (!ugInBounds(nx, ny)) continue;
        const nt = this.tiles[level][ugIdx(nx, ny)];
        if (nt === UG_TILE.EMPTY || nt === UG_TILE.CAVE || nt === UG_TILE.LAKE) { adj = true; break; }
      }
      if (!adj) return { ok: false, reason: '只能挖掘与已开拓区域相邻的格子' };
    }
    return { ok: true, tile: t, cost: this.digCost(level) };
  }

  // 挖掘一格：立即扣费并结算（简化版，无动画队列也可调用 queueDig）
  dig(level, x, y, inv) {
    inv = inv || this._inv();
    const c = this.canDig(level, x, y);
    if (!c.ok) return c;
    if (!inv) return { ok: false, reason: '无背包' };
    if (!canAffordUG(inv, c.cost)) return { ok: false, reason: '资源不足：' + fmtCost(c.cost) };
    spendResUG(inv, c.cost);
    const tile = c.tile;
    // 结算矿脉产出
    const yv = UG_DIG.VEIN_YIELD[tile] || {};
    ensureCrystalSlot(inv);
    for (const k in yv) inv[k] = (inv[k] || 0) + yv[k];
    this.tiles[level][ugIdx(x, y)] = UG_TILE.EMPTY;
    this.dugCount++;
    ugTrack(this._stats(), 'underground_dug', { level, tile, x, y });
    if (Object.keys(yv).length) {
      ugTrack(this._stats(), 'underground_vein', { level, tile, yield: yv });
      this._notify('⛏️ 挖出矿脉：' + fmtLoot(yv));
    }
    this._emit({ type: 'dug', level, x, y, tile, yield: yv });
    return { ok: true, tile, yield: yv };
  }

  // 挖掘队列（耗时版）：queueDig 入队，tick 中自动完成
  queueDig(level, x, y, inv) {
    inv = inv || this._inv();
    const c = this.canDig(level, x, y);
    if (!c.ok) return c;
    if (!inv) return { ok: false, reason: '无背包' };
    if (!canAffordUG(inv, c.cost)) return { ok: false, reason: '资源不足：' + fmtCost(c.cost) };
    spendResUG(inv, c.cost);
    const now = Date.now();
    this._digQueue.push({ level, x, y, tile: c.tile, finishAt: now + UG_DIG.TIME_MS[level] });
    ugTrack(this._stats(), 'underground_dug_queued', { level, x, y });
    return { ok: true, finishIn: UG_DIG.TIME_MS[level] };
  }

  _processDigQueue(now) {
    const done = [];
    this._digQueue = this._digQueue.filter(q => {
      if (now < q.finishAt) return true;
      done.push(q);
      return false;
    });
    for (const q of done) {
      const inv = this._inv();
      const yv = UG_DIG.VEIN_YIELD[q.tile] || {};
      if (inv) {
        ensureCrystalSlot(inv);
        for (const k in yv) inv[k] = (inv[k] || 0) + yv[k];
      }
      // 若该格仍是原 tile（未被别的挖掘改变）则置空
      if (this.tiles[q.level] && this.tiles[q.level][ugIdx(q.x, q.y)] === q.tile) {
        this.tiles[q.level][ugIdx(q.x, q.y)] = UG_TILE.EMPTY;
        this.dugCount++;
        ugTrack(this._stats(), 'underground_dug', { level: q.level, tile: q.tile, x: q.x, y: q.y });
        this._emit({ type: 'dug', level: q.level, x: q.x, y: q.y, tile: q.tile, yield: yv });
      }
    }
  }

  // 批量挖掘矩形区域（UI 框选用）
  digRect(level, x0, y0, x1, y1, inv) {
    let ok = 0, fail = 0;
    for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++)
      for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++) {
        const r = this.dig(level, x, y, inv);
        if (r.ok) ok++; else fail++;
      }
    return { ok: ok > 0, dug: ok, failed: fail };
  }

  // ============================================================
  // 建筑：放置 / 升级 / 查询
  // ============================================================
  countBuilding(type, level) {
    return this.buildings.filter(b => b.type === type && (level === undefined || b.level_y === level)).length;
  }

  buildingsOn(level, type) {
    return this.buildings.filter(b => b.level_y === level && (!type || b.type === type));
  }

  getBuilding(uid) {
    return this.buildings.find(b => b.uid === uid) || null;
  }

  canPlace(type, level, x, y) {
    const def = UG_BUILDINGS[type];
    if (!def) return { ok: false, reason: '未知建筑' };
    if (!this.isLevelUnlocked(level)) return { ok: false, reason: '该层未解锁' };
    if (def.needLevel !== undefined && level < def.needLevel)
      return { ok: false, reason: '需要 B' + (def.needLevel + 1) + ' 及更深层' };
    if (!ugInBounds(x, y)) return { ok: false, reason: '坐标越界' };
    const t = this.tiles[level][ugIdx(x, y)];
    if (def.needTile === UG_TILE.GEO) {
      if (t !== UG_TILE.GEO) return { ok: false, reason: '地热电站只能建在 ♨️ 地热喷口上' };
    } else if (t !== UG_TILE.EMPTY) {
      return { ok: false, reason: '只能建在已挖掘的空地上（当前：' + UG_TILE_DEFS[t].name + '）' };
    }
    if (this.buildings.some(b => b.level_y === level && b.x === x && b.y === y))
      return { ok: false, reason: '该格已有建筑' };
    if (def.maxPerLevel && this.countBuilding(type, level) >= def.maxPerLevel)
      return { ok: false, reason: '每层只能建 1 部' + def.name };
    // B3 岩浆相邻警告（不禁建，由护盾防护）
    let nearMagma = false;
    if (level === 2) {
      for (let oy = -1; oy <= 1 && !nearMagma; oy++)
        for (let ox = -1; ox <= 1; ox++) {
          if (!ugInBounds(x + ox, y + oy)) continue;
          if (this.tiles[2][ugIdx(x + ox, y + oy)] === UG_TILE.MAGMA) { nearMagma = true; break; }
        }
    }
    return { ok: true, cost: def.levels[1].cost, warn: nearMagma ? '相邻岩浆裂缝！建议先建岩浆护盾' : null };
  }

  placeBuilding(type, level, x, y, inv) {
    inv = inv || this._inv();
    const c = this.canPlace(type, level, x, y);
    if (!c.ok) return c;
    if (!inv) return { ok: false, reason: '无背包' };
    if (!canAffordUG(inv, c.cost)) return { ok: false, reason: '资源不足：' + fmtCost(c.cost) };
    spendResUG(inv, c.cost);
    const b = {
      uid: 'ugb' + (this._uidSeq++),
      type, level: 1, level_y: level, x, y,
      acc: 0,            // 生产累积 ms
      hp: 3,             // 耐久（坍塌/岩浆伤害用）
    };
    this.buildings.push(b);
    const def = UG_BUILDINGS[type];
    if (def.needTile === UG_TILE.GEO) this.tiles[level][ugIdx(x, y)] = UG_TILE.EMPTY; // 喷口被建筑覆盖
    ugTrack(this._stats(), 'underground_build', { type, level });
    this._notify(def.icon + ' 地下建筑建成：' + def.name + '（B' + (level + 1) + '）');
    this._emit({ type: 'build', uid: b.uid, btype: type, level });
    // 功能性建筑可能解锁更深层
    this.tryUnlockDeeper();
    return { ok: true, uid: b.uid, warn: c.warn };
  }

  upgradeCost(uid) {
    const b = this.getBuilding(uid);
    if (!b) return null;
    const def = UG_BUILDINGS[b.type];
    const maxLv = def.maxLevel || 3;
    if (b.level >= maxLv) return null;
    return def.levels[b.level + 1] ? def.levels[b.level + 1].cost : null;
  }

  upgradeBuilding(uid, inv) {
    inv = inv || this._inv();
    const b = this.getBuilding(uid);
    if (!b) return { ok: false, reason: '建筑不存在' };
    const def = UG_BUILDINGS[b.type];
    const maxLv = def.maxLevel || 3;
    if (b.level >= maxLv) return { ok: false, reason: '已满级' };
    const cost = def.levels[b.level + 1].cost;
    if (!inv) return { ok: false, reason: '无背包' };
    if (!canAffordUG(inv, cost)) return { ok: false, reason: '资源不足：' + fmtCost(cost) };
    spendResUG(inv, cost);
    b.level++;
    ugTrack(this._stats(), 'underground_upgrade', { type: b.type, level: b.level });
    this._notify('⬆️ ' + def.name + ' 升级到 Lv.' + b.level);
    this._emit({ type: 'upgrade', uid, btype: b.type, level: b.level });
    return { ok: true };
  }

  // 维修建筑（恢复岩浆/坍塌造成的耐久损伤）
  repairBuilding(uid, inv) {
    inv = inv || this._inv();
    const b = this.getBuilding(uid);
    if (!b) return { ok: false, reason: '建筑不存在' };
    if ((b.hp === undefined || b.hp >= 3)) return { ok: false, reason: '无需维修' };
    const cost = { iron: 20 * b.level, steel: 5 * b.level };
    if (!inv) return { ok: false, reason: '无背包' };
    if (!canAffordUG(inv, cost)) return { ok: false, reason: '资源不足：' + fmtCost(cost) };
    spendResUG(inv, cost);
    b.hp = 3;
    ugTrack(this._stats(), 'underground_repair', { type: b.type });
    this._notify('🔧 ' + UG_BUILDINGS[b.type].name + ' 维修完成，耐久恢复');
    this._emit({ type: 'repair', uid, btype: b.type });
    return { ok: true };
  }

  // 该层可建造类型及不可建原因（UI/AI 用）
  getBuildableTypes(level) {
    return UG_BUILD_ORDER.map(type => {
      const def = UG_BUILDINGS[type];
      let reason = null;
      if (!this.isLevelUnlocked(level)) reason = '该层未解锁';
      else if (def.needLevel !== undefined && level < def.needLevel) reason = '需要 B' + (def.needLevel + 1) + ' 及更深';
      else if (def.needTile === UG_TILE.GEO && this.countTile(level, UG_TILE.GEO) === 0) reason = '本层无地热喷口';
      return { type, name: def.name, icon: def.icon, ok: !reason, reason };
    });
  }

  // 统计某层某种瓦片数量
  countTile(level, tile) {
    const t = this.tiles[level];
    if (!t) return 0;
    let n = 0;
    for (let i = 0; i < t.length; i++) if (t[i] === tile) n++;
    return n;
  }

  demolishBuilding(uid) {
    const i = this.buildings.findIndex(b => b.uid === uid);
    if (i < 0) return { ok: false, reason: '建筑不存在' };
    const b = this.buildings[i];
    this.buildings.splice(i, 1);
    ugTrack(this._stats(), 'underground_demolish', { type: b.type });
    this._emit({ type: 'demolish', uid, btype: b.type });
    return { ok: true };
  }

  // ============================================================
  // 电梯链：level 可用要求 0..level 每层都有电梯（地面→B1 视为天然连通）
  // ============================================================
  hasElevator(level) {
    return this.buildings.some(b => b.type === 'elevator' && b.level_y === level);
  }

  // 电梯链是否完整（B1 需电梯，B2 需 B1+B2 都有，B3 需三层都有）
  elevatorChainOk(level) {
    for (let l = 0; l <= level; l++) {
      if (!this.hasElevator(l)) return false;
    }
    return true;
  }

  // 本层生产效率加成（电梯 +25%）
  levelEffBonus(level) {
    let bonus = 0;
    for (const b of this.buildings) {
      if (b.level_y !== level) continue;
      const def = UG_BUILDINGS[b.type];
      const lv = def.levels[b.level];
      if (lv && lv.effBonus) bonus += lv.effBonus;
    }
    return bonus;
  }

  // ============================================================
  // 电力 / 人口 / 生产结算
  // ============================================================
  getPower() {
    let p = 0;
    for (const b of this.buildings) {
      const lv = UG_BUILDINGS[b.type].levels[b.level];
      if (lv && lv.power) p += lv.power;
    }
    return p;
  }

  getPowerUse() {
    let u = 0;
    for (const b of this.buildings) {
      const lv = UG_BUILDINGS[b.type].levels[b.level];
      if (lv && lv.powerUse) u += lv.powerUse;
    }
    return u;
  }

  powerBalance() { return this.getPower() - this.getPowerUse(); }

  // 电力是否充足（不足则生产建筑停摆）
  powerOk() { return this.powerBalance() >= 0; }

  getPopCapBonus() {
    let n = 0;
    for (const b of this.buildings) {
      const lv = UG_BUILDINGS[b.type].levels[b.level];
      if (lv && lv.popCap) n += lv.popCap;
    }
    return n;
  }

  getStorageBonus(res) {
    let n = 0;
    for (const b of this.buildings) {
      const lv = UG_BUILDINGS[b.type].levels[b.level];
      if (lv && lv.storage && lv.storage[res]) n += lv.storage[res];
    }
    return n;
  }

  hasShield(level) {
    return this.buildings.some(b => b.type === 'magmashield' && b.level_y === level);
  }

  hasSupport(level) {
    return this.buildings.some(b => b.type === 'support' && b.level_y === level);
  }

  hasGasMonitor() {
    return this.buildings.some(b => b.type === 'gasmonitor');
  }

  // 生产 tick：dtMs 内按 produceInterval 结算，电力不足停摆
  _processProduction(dtMs, inv) {
    if (!inv) return;
    ensureCrystalSlot(inv);
    const ok = this.powerOk();
    for (const b of this.buildings) {
      const def = UG_BUILDINGS[b.type];
      const lv = def.levels[b.level];
      if (!lv || !lv.produce) continue;
      if (!ok && (lv.powerUse || 0) > 0) continue; // 缺电停摆（自持建筑除外）
      b.acc = (b.acc || 0) + dtMs * (1 + this.levelEffBonus(b.level_y));
      const iv = lv.produceInterval || 10000;
      while (b.acc >= iv) {
        b.acc -= iv;
        for (const k in lv.produce) {
          inv[k] = (inv[k] || 0) + lv.produce[k];
          ugTrack(this._stats(), 'underground_produce', { type: b.type, res: k, n: lv.produce[k] });
        }
      }
    }
  }

  // ============================================================
  // 探险队：组建 / 派遣 / tick
  // ============================================================
  buildExplorer(inv) {
    inv = inv || this._inv();
    if (this.explorers.length >= UG_EXPLORE.MAX_TEAMS)
      return { ok: false, reason: '探险队已满（' + UG_EXPLORE.MAX_TEAMS + ' 支）' };
    if (!inv) return { ok: false, reason: '无背包' };
    if (!canAffordUG(inv, UG_EXPLORE.BUILD_COST))
      return { ok: false, reason: '资源不足：' + fmtCost(UG_EXPLORE.BUILD_COST) };
    spendResUG(inv, UG_EXPLORE.BUILD_COST);
    const e = new CaveExplorer(0);
    this.explorers.push(e);
    ugTrack(this._stats(), 'underground_explorer_built', { id: e.id });
    this._notify('🧭 ' + e.name + '组建完成');
    return { ok: true, id: e.id };
  }

  // 随机找一个洞穴格作为探索目标
  _randomCaveTile(level) {
    const t = this.tiles[level];
    if (!t) return null;
    for (let i = 0; i < 200; i++) {
      const x = Math.floor(Math.random() * UG.SIZE), y = Math.floor(Math.random() * UG.SIZE);
      if (t[ugIdx(x, y)] === UG_TILE.CAVE) return { x, y };
    }
    return null;
  }

  dispatchExplorer(id, level, inv) {
    inv = inv || this._inv();
    const e = this.explorers.find(x => x.id === id);
    if (!e) return { ok: false, reason: '探险队不存在' };
    if (!this.isLevelUnlocked(level)) return { ok: false, reason: '该层未解锁' };
    if (UG_ELEVATOR.NEED_FOR_DEEP_EXPLORE && level > 0 && !this.elevatorChainOk(level))
      return { ok: false, reason: '需要完整的层间电梯链（' + UG.LEVEL_NAMES.slice(0, level + 1).join('→') + ' 均需电梯）' };
    const target = this._randomCaveTile(level);
    if (!target) return { ok: false, reason: '该层未发现可探索的洞穴' };
    if (!inv) return { ok: false, reason: '无背包' };
    if (!canAffordUG(inv, UG_EXPLORE.DISPATCH_COST))
      return { ok: false, reason: '食物不足：' + fmtCost(UG_EXPLORE.DISPATCH_COST) };
    const c = e.canDispatch(Date.now());
    if (!c.ok) return c;
    spendResUG(inv, UG_EXPLORE.DISPATCH_COST);
    // 风险：基础风险，支柱/护盾减半
    let risk = UG_EXPLORE.BASE_RISK[level];
    if (this.hasSupport(level) || this.hasShield(level)) risk *= UG_EXPLORE.SUPPORT_CUT;
    e.homeLevel = level;
    const r = e.dispatch(target, risk, UG_EXPLORE.DURATION_MS[level], Date.now(), Math.random);
    if (!r.ok) return r;
    ugTrack(this._stats(), 'underground_explore', { id, level, risk });
    this._notify('🧭 ' + e.name + ' 前往 B' + (level + 1) + ' 洞穴探索（风险 ' + Math.round(risk * 100) + '%）');
    this._emit({ type: 'explore_dispatch', explorerId: id, level });
    return { ok: true };
  }

  _processExplorers(now) {
    const inv = this._inv();
    for (const e of this.explorers) {
      const evs = e.update(now, UG_EXPLORE.LOOT[e.homeLevel + 1] || UG_EXPLORE.LOOT[1], UG_EXPLORE.LOOT_ROLLS[e.homeLevel] || 2);
      for (const ev of evs) {
        this._emit(ev);
        if (ev.type === 'explore_done' && inv) {
          ensureCrystalSlot(inv);
          for (const k in ev.loot) inv[k] = (inv[k] || 0) + ev.loot[k];
          ugTrack(this._stats(), 'underground_loot', { id: e.id, loot: ev.loot });
        }
        if (ev.type === 'explore_collapse') {
          this.collapseCount++;
          ugTrack(this._stats(), 'underground_explore_collapse', { id: e.id });
        }
        this._notify((ev.type === 'explore_collapse' ? '⚠️ ' : '✅ ') + ev.msg);
      }
    }
  }

  // ============================================================
  // 地下灾难：坍塌 / 瓦斯泄漏 / B3 岩浆涌动
  // ============================================================
  _checkCollapse(now) {
    if (now < this._nextCollapseCheck) return;
    this._nextCollapseCheck = now + UG_DISASTER.COLLAPSE.CHECK_MS;
    if (!this.unlocked || this.buildings.length === 0) return;
    // 按最深活跃层计算概率
    let chance = UG_DISASTER.COLLAPSE.BASE_CHANCE + (UG_DISASTER.COLLAPSE.DEPTH_BONUS[this.maxLevel] || 0);
    if (Math.random() > chance) return;
    // 随机挑一栋建筑
    const b = this.buildings[Math.floor(Math.random() * this.buildings.length)];
    const lvl = b.level_y;
    // 岩浆护盾：本层免疫
    if (this.hasShield(lvl)) {
      this._notify('🔥 岩浆护盾挡下了一次坍塌冲击（B' + (lvl + 1) + '）');
      ugTrack(this._stats(), 'underground_shield_save', { level: lvl });
      this._emit({ type: 'collapse_blocked', level: lvl });
      return;
    }
    // 加固支柱：50% 概率免伤
    if (this.hasSupport(lvl) && Math.random() < UG_DISASTER.COLLAPSE.SUPPORT_CUT) {
      this._notify('🏗️ 加固支柱稳住了岩层，坍塌未造成损伤（B' + (lvl + 1) + '）');
      this._emit({ type: 'collapse_blocked', level: lvl, by: 'support' });
      return;
    }
    const def = UG_BUILDINGS[b.type];
    this.collapseCount++;
    if (b.level > 1) {
      b.level--;
      this._notify('⚠️ 坍塌！' + def.name + '（B' + (lvl + 1) + '）受损，降为 Lv.' + b.level);
      this._emit({ type: 'collapse', uid: b.uid, btype: b.type, level: lvl, destroyed: false });
    } else {
      this.demolishBuilding(b.uid);
      this._notify('⚠️ 坍塌！' + def.name + '（B' + (lvl + 1) + '）被掩埋摧毁');
      this._emit({ type: 'collapse', uid: b.uid, btype: b.type, level: lvl, destroyed: true });
    }
    ugTrack(this._stats(), 'underground_collapse', { level: lvl, btype: b.type });
  }

  _checkGasLeak(now) {
    if (now < this._nextGasCheck) return;
    this._nextGasCheck = now + UG_DISASTER.GAS.CHECK_MS;
    if (!this.unlocked) return;
    let chance = UG_DISASTER.GAS.BASE_CHANCE;
    if (this.hasGasMonitor()) chance *= (1 - UG_DISASTER.GAS.MONITOR_CUT);
    if (this.countBuilding('vent', 0) > 0) chance *= (1 - UG_DISASTER.GAS.VENT_CUT);
    if (Math.random() > chance) return;
    this.gasCount++;
    const loss = UG_DISASTER.GAS.POP_LOSS;
    // 通过事件交给 game.js 扣人口（本模块不直接改人口，保证解耦）
    this._emit({ type: 'gas_leak', popLoss: loss, msg: '☠️ 地下瓦斯泄漏！人口 -' + loss });
    this._notify('☠️ 地下瓦斯泄漏！人口 -' + loss + '（建造气体监测站可预防）');
    ugTrack(this._stats(), 'underground_gas_leak', { popLoss: loss });
    // 若挂载的 game 提供了 addPop，直接扣减
    if (this._game && typeof this._game.addPop === 'function') {
      try { this._game.addPop(-loss); } catch (e) {}
    }
  }

  _checkMagmaSurge(now) {
    if (now < this._nextMagmaCheck) return;
    this._nextMagmaCheck = now + UG_DISASTER.MAGMA_SURGE.CHECK_MS;
    if (!this.isLevelUnlocked(2)) return;
    const t = this.tiles[2];
    if (!t) return;
    for (const b of this.buildings) {
      if (b.level_y !== 2) continue;
      if (this.hasShield(2)) continue; // 护盾免疫
      // 检查相邻岩浆
      let near = false;
      for (let oy = -1; oy <= 1 && !near; oy++)
        for (let ox = -1; ox <= 1; ox++) {
          if (!ugInBounds(b.x + ox, b.y + oy)) continue;
          if (t[ugIdx(b.x + ox, b.y + oy)] === UG_TILE.MAGMA) { near = true; break; }
        }
      if (!near) continue;
      b.hp = (b.hp === undefined ? 3 : b.hp) - UG_DISASTER.MAGMA_SURGE.DMG_NEAR_MAGMA;
      const def = UG_BUILDINGS[b.type];
      if (b.hp <= 0) {
        this.demolishBuilding(b.uid);
        this._notify('🌋 岩浆涌动摧毁了' + def.name + '（B3）！请建造岩浆护盾');
        this._emit({ type: 'magma_destroy', uid: b.uid, btype: b.type });
      } else {
        this._notify('🌋 岩浆涌动：' + def.name + '（B3）耐久 -1（剩余 ' + b.hp + '）');
        this._emit({ type: 'magma_damage', uid: b.uid, btype: b.type, hp: b.hp });
      }
      ugTrack(this._stats(), 'underground_magma_surge', { btype: b.type });
    }
  }

  // ============================================================
  // 主 tick：game.js 每帧/每秒调用 update(dtMs, now)
  // ============================================================
  update(dtMs, now) {
    now = now || Date.now();
    if (!this.unlocked) return;
    const inv = this._inv();
    this._processDigQueue(now);
    this._processProduction(dtMs, inv);
    this._processExplorers(now);
    this._checkCollapse(now);
    this._checkGasLeak(now);
    this._checkMagmaSurge(now);
  }

  // ============================================================
  // 查询接口（UI / 成就 / AI 用）
  // ============================================================
  // 地层统计：各类瓦片数量
  levelStats(level) {
    const t = this.tiles[level];
    if (!t) return null;
    const c = { rock: 0, iron: 0, crystal: 0, cave: 0, lake: 0, magma: 0, geo: 0, empty: 0, total: t.length };
    for (let i = 0; i < t.length; i++) {
      switch (t[i]) {
        case UG_TILE.ROCK: c.rock++; break;
        case UG_TILE.IRON: c.iron++; break;
        case UG_TILE.CRYSTAL: c.crystal++; break;
        case UG_TILE.CAVE: c.cave++; break;
        case UG_TILE.LAKE: c.lake++; break;
        case UG_TILE.MAGMA: c.magma++; break;
        case UG_TILE.GEO: c.geo++; break;
        case UG_TILE.EMPTY: c.empty++; break;
      }
    }
    c.dugRatio = (c.empty / c.total * 100).toFixed(1) + '%';
    return c;
  }

  // 概览（UI 顶栏用）
  overview() {
    return {
      unlocked: this.unlocked,
      maxLevel: this.maxLevel,
      levelName: this.maxLevel >= 0 ? UG.LEVEL_NAMES[this.maxLevel] : '—',
      buildings: this.buildings.length,
      explorers: this.explorers.length,
      power: this.getPower(),
      powerUse: this.getPowerUse(),
      powerBalance: this.powerBalance(),
      popCapBonus: this.getPopCapBonus(),
      dugCount: this.dugCount,
      collapseCount: this.collapseCount,
      gasCount: this.gasCount,
      digQueue: this._digQueue.length,
      elevatorChain: [0, 1, 2].map(l => this.elevatorChainOk(l)),
    };
  }

  // 下一个待办提示（教程/引导用）
  nextHint() {
    if (!this.unlocked) return '开凿 B1 竖井，解锁地下城（' + fmtCost(UG_UNLOCK.B1_COST) + '）';
    if (this.maxLevel === 0 && this.countBuilding('vent', 0) === 0) return '在 B1 建造 🌬️ 通风系统，解锁 B2';
    if (this.maxLevel === 1 && this.countBuilding('drill', 1) === 0) return '在 B2 建造 🪛 钻探平台，解锁 B3';
    if (!this.hasElevator(0)) return '在 B1 建造 🛗 层间电梯，提升生产效率';
    if (this.powerBalance() < 0) return '电力不足！建造 ♨️ 地热电站补充电力';
    if (this.explorers.length === 0) return '组建 🧭 探险队，探索洞穴带回稀有资源';
    if (this.maxLevel === 2 && !this.hasShield(2)) return 'B3 岩浆活跃，建造 🔥 岩浆护盾保护建筑';
    return '地下城运转正常，继续挖掘扩张';
  }
}

// ============================================================
// 资源扣费辅助：优先用全局 canAfford/spendRes（resources.js），否则本地回退
// ============================================================
function canAffordUG(inv, cost) {
  if (typeof canAfford === 'function') { try { return canAfford(inv, cost); } catch (e) {} }
  for (const k in cost) if ((inv[k] || 0) < cost[k]) return false;
  return true;
}
function spendResUG(inv, cost) {
  if (typeof spendRes === 'function') { try { return spendRes(inv, cost); } catch (e) {} }
  if (!canAffordUG(inv, cost)) return false;
  for (const k in cost) inv[k] -= cost[k];
  return true;
}

// ============================================================
// UI：renderUndergroundPanel(manager) → HTML 字符串（深色主题）
// 约定：按钮带 data-ug-act / data-ug-* 属性，由 game.js 统一委托绑定：
//   data-ug-act="unlock-b1" / "tab" data-level / "build" data-type data-level
//   "upgrade" data-uid / "demolish" data-uid / "repair" data-uid / "dig-hint"
//   "explorer-build" / "explorer-dispatch" data-id data-level
// 迷你地图：<canvas id="ugmap-L">，插入 DOM 后调用 drawUndergroundMinimap(id, mgr, level)
// ============================================================
const UG_UI_CSS = `
.ugp{background:#0b0e14;color:#e2e8f0;border-radius:12px;padding:14px;font-size:13px;line-height:1.5;max-width:860px}
.ugp h2{margin:0 0 8px;font-size:17px;color:#fbbf24}
.ugp h3{margin:12px 0 6px;font-size:14px;color:#93c5fd;border-bottom:1px solid #1e293b;padding-bottom:4px}
.ugp .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.ugp .stat{background:#111827;border:1px solid #1f2937;border-radius:8px;padding:6px 10px;min-width:86px}
.ugp .stat b{color:#fbbf24;font-size:15px}
.ugp .stat span{display:block;font-size:11px;color:#9ca3af}
.ugp .hint{background:#1e1b4b;border:1px solid #4338ca;border-radius:8px;padding:8px 10px;margin:8px 0;color:#c7d2fe}
.ugp .tabs{display:flex;gap:6px;margin:8px 0}
.ugp .tab{background:#1f2937;border:1px solid #374151;color:#e2e8f0;border-radius:8px;padding:6px 14px;cursor:pointer}
.ugp .tab.on{background:#7c3aed;border-color:#a78bfa;color:#fff}
.ugp .tab.locked{opacity:.35;cursor:not-allowed}
.ugp .lvlpane{display:none}
.ugp .lvlpane.on{display:block}
.ugp .mapwrap{display:flex;gap:12px;flex-wrap:wrap}
.ugp canvas.ugmap{border:1px solid #374151;border-radius:8px;background:#000;image-rendering:pixelated}
.ugp .legend{font-size:11px;color:#9ca3af;display:grid;grid-template-columns:1fr 1fr;gap:2px 10px;align-content:start}
.ugp .legend i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:4px;vertical-align:baseline}
.ugp .bgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px}
.ugp .bcard{background:#111827;border:1px solid #1f2937;border-radius:10px;padding:8px 10px}
.ugp .bcard b{font-size:13px}
.ugp .bcard .cost{font-size:11px;color:#9ca3af;margin:4px 0}
.ugp .bcard .eff{font-size:11px;color:#6ee7b7}
.ugp .warn{font-size:11px;color:#fca5a5}
.ugp button{background:#7c3aed;border:none;color:#fff;border-radius:6px;padding:5px 10px;font-size:12px;cursor:pointer;margin:2px}
.ugp button:hover{background:#8b5cf6}
.ugp button.ghost{background:#1f2937;border:1px solid #374151}
.ugp button.danger{background:#7f1d1d}
.ugp button:disabled{opacity:.4;cursor:not-allowed}
.ugp .exp{border:1px solid #1f2937;border-radius:8px;padding:8px;background:#0f172a;margin-bottom:6px}
.ugp .bar{height:6px;background:#1f2937;border-radius:3px;overflow:hidden;margin-top:4px}
.ugp .bar i{display:block;height:100%;background:#7c3aed}
.ugp .lockbox{text-align:center;padding:30px 10px;color:#9ca3af}
.ugp .lockbox .big{font-size:40px}
`;

function ugEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 图例 HTML
function ugTileLegendHTML() {
  let h = '<div class="legend">';
  for (const key of Object.keys(UG_TILE_DEFS)) {
    const d = UG_TILE_DEFS[key];
    h += '<div><i style="background:' + d.color + '"></i>' + d.icon + ' ' + d.name + '</div>';
  }
  return h + '</div>';
}

// 单栋建筑卡片（建造菜单用）
function ugBuildCardHTML(type, level, mgr) {
  const def = UG_BUILDINGS[type];
  const lv1 = def.levels[1];
  // 仅检查层级限制（坐标由地图点击决定，此处不调用 canPlace 避免越界误报）
  const layerOk = mgr.isLevelUnlocked(level) && (def.needLevel === undefined || level >= def.needLevel);
  let eff = '';
  if (lv1.power) eff += '产电 <b style="color:#fbbf24">' + lv1.power + '</b>　';
  if (lv1.produce) {
    for (const k in lv1.produce) {
      const rd = (typeof RES_DEFS !== 'undefined' && RES_DEFS[k]) || UndergroundRES[k] || { name: k, icon: '' };
      eff += '产' + rd.icon + rd.name + '×' + lv1.produce[k] + '/' + (lv1.produceInterval / 1000) + 's　';
    }
  }
  if (lv1.popCap) eff += '人口上限 +' + lv1.popCap + '　';
  if (lv1.unlock !== undefined) eff += '🔓 解锁 ' + UG.LEVEL_NAMES[lv1.unlock] + '　';
  if (lv1.shield) eff += '🛡️ 本层坍塌/岩浆免疫　';
  if (lv1.elevator) eff += '🛗 本层生产 +' + Math.round(lv1.effBonus * 100) + '%　';
  if (lv1.support) eff += '🏗️ 坍塌概率减半　';
  if (lv1.gasGuard) eff += '📡 瓦斯泄漏 -60%　';
  if (lv1.storage) eff += '📦 仓储提升　';
  if (lv1.noWater) eff += '💧 不耗水　';
  return '<div class="bcard">' +
    '<b>' + def.icon + ' ' + def.name + '</b>' +
    '<div class="cost">造价：' + fmtCost(lv1.cost) + (lv1.powerUse ? '　耗电 ' + lv1.powerUse : '') + '</div>' +
    '<div class="eff">' + eff + '</div>' +
    '<div style="font-size:11px;color:#9ca3af">' + def.desc + '</div>' +
    '<button data-ug-act="build" data-type="' + type + '" data-level="' + level + '"' +
    (layerOk ? '' : ' disabled title="该层不可建"') + '>选择建造（再点地图）</button>' +
    '</div>';
}

// 已建建筑行
function ugBuiltRowHTML(b) {
  const def = UG_BUILDINGS[b.type];
  const lv = def.levels[b.level];
  const maxLv = def.maxLevel || 3;
  let eff = '';
  if (lv.power) eff += '产电' + lv.power + ' ';
  if (lv.produce) for (const k in lv.produce) eff += k + '×' + lv.produce[k] + ' ';
  if (lv.popCap) eff += '人口+' + lv.popCap + ' ';
  const upCost = (b.level < maxLv && def.levels[b.level + 1]) ? fmtCost(def.levels[b.level + 1].cost) : null;
  return '<div class="bcard"><b>' + def.icon + ' ' + def.name + '</b> Lv.' + b.level +
    ' <span style="color:#9ca3af">(' + b.x + ',' + b.y + ')' + (b.hp !== undefined && b.hp < 3 ? ' 耐久' + b.hp : '') + '</span>' +
    '<div class="eff">' + ugEsc(eff) + '</div>' +
    (upCost ? '<button data-ug-act="upgrade" data-uid="' + b.uid + '">升级（' + ugEsc(upCost) + '）</button>' : '<span style="font-size:11px;color:#6b7280">已满级</span>') +
    ((b.hp !== undefined && b.hp < 3) ? ' <button data-ug-act="repair" data-uid="' + b.uid + '">维修（铁×' + (20 * b.level) + ' 钢×' + (5 * b.level) + '）</button>' : '') +
    ' <button class="danger" data-ug-act="demolish" data-uid="' + b.uid + '">拆除</button></div>';
}

// 探险队卡片
function ugExplorerCardHTML(e, mgr) {
  const now = Date.now();
  let h = '<div class="exp"><b>🧭 ' + ugEsc(e.name) + '</b>　<span style="color:#9ca3af">' + e.statusText(now) + '</span>';
  if (e.state === 'exploring' || e.state === 'returning') {
    h += '<div class="bar"><i style="width:' + Math.floor(e.progress(now) * 100) + '%"></i></div>';
  }
  h += '<div style="font-size:11px;color:#9ca3af">出勤 ' + e.trips + ' 次' +
    (Object.keys(e.earned).length ? '　累计带回：' + fmtLoot(e.earned) : '') + '</div>';
  const cd = e.canDispatch(now);
  if (cd.ok) {
    h += '<div class="row" style="margin-top:4px">';
    for (let l = 0; l <= mgr.maxLevel; l++) {
      const chainOk = l === 0 || !UG_ELEVATOR.NEED_FOR_DEEP_EXPLORE || mgr.elevatorChainOk(l);
      h += '<button class="ghost" data-ug-act="explorer-dispatch" data-id="' + e.id + '" data-level="' + l + '"' +
        (chainOk ? '' : ' disabled title="电梯链不完整"') + '>探索 B' + (l + 1) + '</button>';
    }
    h += '</div>';
  } else {
    h += '<div style="font-size:11px;color:#fca5a5">' + ugEsc(cd.reason) + '</div>';
  }
  return h + '</div>';
}

// 主面板
function renderUndergroundPanel(mgr, opts) {
  opts = opts || {};
  const activeLevel = opts.level || 0;
  let h = '<style>' + UG_UI_CSS + '</style><div class="ugp">';
  h += '<h2>⛏️ 地下城 <span style="font-size:11px;color:#9ca3af">B1 / B2 / B3 深层开发</span></h2>';

  if (!mgr.unlocked) {
    h += '<div class="lockbox"><div class="big">🔒</div>' +
      '<p>地下城尚未解锁。开凿 B1 竖井，开启 50×50×3 层的地下世界：<br>深层铁矿（×3）、💎 晶体矿、地热能、探险队……</p>' +
      '<button data-ug-act="unlock-b1">开凿 B1 竖井（' + fmtCost(UG_UNLOCK.B1_COST) + '）</button></div>';
    return h + '</div>';
  }

  const ov = mgr.overview();
  h += '<div class="row">' +
    '<div class="stat"><b>' + ov.levelName + '</b><span>最深层</span></div>' +
    '<div class="stat"><b>' + ov.buildings + '</b><span>地下建筑</span></div>' +
    '<div class="stat"><b>' + ov.power + '⚡</b><span>产电 / 耗电 ' + ov.powerUse + '</span></div>' +
    '<div class="stat"><b>' + (ov.powerBalance >= 0 ? '+' : '') + ov.powerBalance + '</b><span>电力结余</span></div>' +
    '<div class="stat"><b>+' + ov.popCapBonus + '</b><span>人口上限</span></div>' +
    '<div class="stat"><b>' + ov.dugCount + '</b><span>累计挖掘</span></div>' +
    '<div class="stat"><b>' + ov.explorers + '/' + UG_EXPLORE.MAX_TEAMS + '</b><span>探险队</span></div>' +
    '</div>';
  if (ov.powerBalance < 0) h += '<div class="warn">⚠️ 地下电力不足，生产建筑已停摆！建造 ♨️ 地热电站。</div>';
  h += '<div class="hint">💡 ' + ugEsc(mgr.nextHint()) + '</div>';

  // 层级页签
  h += '<div class="tabs">';
  for (let l = 0; l < UG.LEVELS; l++) {
    const un = mgr.isLevelUnlocked(l);
    h += '<button class="tab' + (l === activeLevel ? ' on' : '') + (un ? '' : ' locked') + '"' +
      ' data-ug-act="tab" data-level="' + l + '"' + (un ? '' : ' disabled') + '>' +
      UG.LEVEL_NAMES[l] + (un ? '' : ' 🔒') + ' <span style="font-size:10px">' + UG.LEVEL_DEPTH_M[l] + 'm</span></button>';
  }
  h += '</div>';

  // 每层面板
  for (let l = 0; l < UG.LEVELS; l++) {
    const un = mgr.isLevelUnlocked(l);
    h += '<div class="lvlpane' + (l === activeLevel ? ' on' : '') + '" data-lvlpane="' + l + '">';
    if (!un) {
      h += '<div class="lockbox">🔒 ' + UG.LEVEL_NAMES[l] + ' 未解锁（' +
        (l === 1 ? 'B1 建造 🌬️ 通风系统' : 'B2 建造 🪛 钻探平台') + '）</div>';
    } else {
      const st = mgr.levelStats(l);
      h += '<div class="mapwrap"><canvas class="ugmap" id="ugmap-' + l + '" width="250" height="250" ' +
        'data-ug-act="map" data-level="' + l + '" title="点击格子挖掘/查看"></canvas>' +
        '<div>' + ugTileLegendHTML() +
        '<div style="margin-top:6px;font-size:11px;color:#9ca3af">' +
        '已开拓 ' + st.dugRatio + '　🟤铁脉 ' + st.iron + '　💎晶体 ' + st.crystal +
        (st.magma ? '　🌋岩浆 ' + st.magma : '') + (st.geo ? '　♨️地热 ' + st.geo : '') + '<br>' +
        '挖掘成本/格：' + fmtCost(mgr.digCost(l)) + '　<span style="color:#6b7280">点击地图格子进行挖掘</span>' +
        (mgr._digQueue.length ? '<br>⏳ 挖掘队列：' + mgr._digQueue.length + ' 格进行中' : '') +
        '</div></div></div>';
      // 建造菜单
      h += '<h3>🏗️ 建造（B' + (l + 1) + '）</h3><div class="bgrid">';
      for (const t of UG_BUILD_ORDER) h += ugBuildCardHTML(t, l, mgr);
      h += '</div>';
      // 已建
      const built = mgr.buildingsOn(l);
      h += '<h3>🏢 已建建筑（' + built.length + '）</h3>';
      if (!built.length) h += '<div style="color:#6b7280;font-size:12px">暂无</div>';
      else { h += '<div class="bgrid">'; for (const b of built) h += ugBuiltRowHTML(b); h += '</div>'; }
      // 电梯链状态
      h += '<div style="margin-top:6px;font-size:12px;color:#9ca3af">🛗 电梯链：' +
        [0, 1, 2].map(x => (x <= l ? (mgr.hasElevator(x) ? 'B' + (x + 1) + '✅' : 'B' + (x + 1) + '❌') : '')).join(' → ') +
        (mgr.elevatorChainOk(l) ? '（完整，深层探险/生产加成生效）' : '（不完整）') + '</div>';
    }
    h += '</div>';
  }

  // 探险队
  h += '<h3>🧭 探险队</h3>';
  if (!mgr.explorers.length) h += '<div style="color:#6b7280;font-size:12px">暂无探险队</div>';
  for (const e of mgr.explorers) h += ugExplorerCardHTML(e, mgr);
  if (mgr.explorers.length < UG_EXPLORE.MAX_TEAMS) {
    h += '<button data-ug-act="explorer-build">组建探险队（' + fmtCost(UG_EXPLORE.BUILD_COST) + '）</button>';
  }
  h += '<div style="font-size:11px;color:#6b7280;margin-top:4px">每次派遣消耗 ' + fmtCost(UG_EXPLORE.DISPATCH_COST) +
    '；探索洞穴带回铁矿/晶体/稀土/科技等；有坍塌风险（支柱/护盾可减半）</div>';

  // 灾难记录
  h += '<h3>⚠️ 地下灾难记录</h3><div class="row">' +
    '<div class="stat"><b>' + ov.collapseCount + '</b><span>坍塌</span></div>' +
    '<div class="stat"><b>' + ov.gasCount + '</b><span>瓦斯泄漏</span></div></div>' +
    '<div style="font-size:11px;color:#6b7280">防护：🏗️ 加固支柱（坍塌减半）　🔥 岩浆护盾（坍塌/岩浆免疫）　📡 气体监测站（瓦斯-60%）</div>';

  return h + '</div>';
}

// 迷你地图绘制：插入 DOM 后调用 drawUndergroundMinimap('ugmap-0', mgr, 0)
function drawUndergroundMinimap(canvasId, mgr, level) {
  const cv = typeof document !== 'undefined' ? document.getElementById(canvasId) : null;
  if (!cv || !mgr.tiles[level]) return false;
  const ctx = cv.getContext('2d');
  const S = UG.SIZE;
  const cell = cv.width / S; // 250/50 = 5px
  const t = mgr.tiles[level];
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      ctx.fillStyle = UG_TILE_DEFS[t[ugIdx(x, y)]].color;
      ctx.fillRect(x * cell, y * cell, cell, cell);
    }
  }
  // 叠加建筑标记
  for (const b of mgr.buildingsOn(level)) {
    const def = UG_BUILDINGS[b.type];
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(b.x * cell, b.y * cell, cell, cell);
    ctx.fillStyle = '#000';
    ctx.font = (cell - 1) + 'px sans-serif';
    ctx.fillText(def.icon, b.x * cell, (b.y + 1) * cell - 1);
  }
  // 叠加探险队目标
  for (const e of mgr.explorers) {
    if (e.state === 'exploring' && e.homeLevel === level && e.targetX >= 0) {
      ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 1;
      ctx.strokeRect(e.targetX * cell + 0.5, e.targetY * cell + 0.5, cell - 1, cell - 1);
    }
  }
  return true;
}

// 一键绘制所有已解锁层的迷你地图
function drawAllUndergroundMaps(mgr) {
  let n = 0;
  for (let l = 0; l < UG.LEVELS; l++) {
    if (mgr.isLevelUnlocked(l) && drawUndergroundMinimap('ugmap-' + l, mgr, l)) n++;
  }
  return n;
}

// ============================================================
// 事件文档：drainEvents() 返回的事件类型（供 game.js 消费）
// ============================================================
// { type:'unlocked', level }                        地层解锁
// { type:'dug', level, x, y, tile, yield }          挖掘完成（含矿脉产出）
// { type:'build'|'upgrade'|'demolish'|'repair', uid, btype, level }
// { type:'explore_dispatch', explorerId, level }     探险队出发
// { type:'explore_returning', explorerId, level }    探险队返程中
// { type:'explore_done', explorerId, level, loot }   探险队带回物资（已自动入包）
// { type:'explore_collapse', explorerId, level }     探险队遭遇坍塌（空手而归）
// { type:'explore_recovered', explorerId }           探险队休整完毕
// { type:'collapse', uid, btype, level, destroyed }  坍塌压坏建筑（降级/摧毁）
// { type:'collapse_blocked', level, by? }            坍塌被护盾/支柱挡下
// { type:'gas_leak', popLoss }                       瓦斯泄漏（game.js 扣人口；若挂载 addPop 已自动扣）
// { type:'magma_damage'|'magma_destroy', uid, btype, hp? }  B3 岩浆涌动
//
// 统计事件（ugTrack → stats.track，缺失时回退 stats.record / 计数器）：
//   underground_unlocked / underground_dug / underground_dug_queued / underground_vein /
//   underground_build / underground_upgrade / underground_demolish / underground_repair /
//   underground_produce / underground_explorer_built / underground_explore /
//   underground_explore_collapse / underground_loot / underground_collapse /
//   underground_gas_leak / underground_magma_surge / underground_shield_save
// ============================================================

// ============================================================
// 导出（Node / 浏览器通用）
// ============================================================
if (typeof module !== 'undefined') {
  module.exports = {
    UG, UG_TILE, UG_TILE_DEFS, UG_GEN, UG_DIG, UG_UNLOCK, UG_EXPLORE, UG_DISASTER, UG_ELEVATOR,
    UndergroundRES, UndergroundRES_DESC, UndergroundRES_VALUE,
    UG_BUILDINGS, UG_BUILD_ORDER,
    CaveExplorer, UndergroundManager,
    renderUndergroundPanel, drawUndergroundMinimap, drawAllUndergroundMaps, ugTileLegendHTML,
    ensureCrystalSlot, fmtLoot, fmtCost, canAffordUG, spendResUG, ugRng,
  };
}
