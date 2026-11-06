/* =====================================================================
 * 星港 — deepspace_v3.js：v3.0 深空探索系统（火星轨道 / 月球基地 /
 * 小行星采矿 / 飞船建造 / 船员系统 / 远征任务 / 外星遗迹 / 深空地图）
 * ---------------------------------------------------------------------
 * 定位：v1.4 deep_space.js 的继任者（独立文件，不依赖、不修改旧文件）。
 * 本文件是自成体系的深空层：玩家从火星地表向外扩张的全部玩法都在
 * 这里——轨道站、月球基地、小行星带、三型飞船、船员、18 个远征任务、
 * 3 处外星遗迹、一张可交互的深空地图。
 *
 * 设计原则（纯机制，无剧情填充）：
 *   1. 时间模型：进度制 + dt 推进。update(now, game) 内用
 *      dt = now - 上次 tick（秒）推进一切；game.speedMode === 2 时
 *      2 倍速；暂停时主循环不调用 update，深空自然停摆。
 *   2. 资源模型：深空层自带一套资源账本（钢/稀土/科技/氦-3/钛/
 *      铂/水/食物/燃料/电力），与 game 的接口全部防御性读取：
 *      game.player.inv / game.tech.has(id) / game.toast / game.sound /
 *      game.orbital / game.builder.buildings，缺谁都不崩；没有 game
 *      时也能独立跑（自测脚本就是这么跑的）。
 *   3. 每个系统都能玩起来：建造有造价与前置，生产有输入输出与
 *      瓶颈，远征有目标/风险/奖励结算，遗迹有分阶段发掘与解锁，
 *      船员有属性/训练/士气/伤病，飞船有造价/载荷/速度/船员需求。
 *   4. 数值锚点（与 resources.js 的 RES_VALUE 对齐）：
 *      铁 1 / 冰 1 / 稀土 3 / 铀 8 / 氦-3 15 / 钢材 4 / 科技 10 /
 *      钛 6 / 铂 12 / 燃料 2。深空产出按「每小时」标定。
 *
 * 集成（给 game.js / index.html，接入方照抄即可，不在本文件内改）：
 *   index.html：在 orbital.js 之后、game.js 之前加
 *     <script src="deepspace_v3.js"></script>
 *   game.js 构造函数：
 *     this.deepSpaceV3 = new DeepSpaceV3();
 *   game.js tick(now) 内：
 *     if (this.deepSpaceV3) this.deepSpaceV3.update(now, this);
 *   game.js save() 的 data 里加：
 *     deepSpaceV3: this.deepSpaceV3 ? this.deepSpaceV3.save() : null,
 *   game.js load() 里加：
 *     if (data.deepSpaceV3 && this.deepSpaceV3)
 *       this.deepSpaceV3.load(data.deepSpaceV3);
 *   全产量加成（遗迹解锁）在建筑产量处乘：
 *     const dsv3 = game.deepSpaceV3 ? game.deepSpaceV3.getBuffs() : null;
 *     const prodMul = dsv3 ? dsv3.prodMul : 1;
 * ===================================================================== */

'use strict';

// ================= v3.0 版本常量 =================
const DEEPSPACE_V3_VERSION = '3.0.0';
const DEEPSPACE_V3_CODENAME = '深空远征';
const DEEPSPACE_V3_SAVE_KEY = 'starport-deepspace-v3';

// ================= 工具函数 =================
function dsv3Clamp(v, lo, hi) {
  if (typeof v !== 'number' || isNaN(v)) return lo;
  if (v < lo) return lo;
  if (v > hi) return hi;
  return v;
}
function dsv3Round(v, digits) {
  const p = Math.pow(10, digits || 0);
  return Math.round(v * p) / p;
}
function dsv3Floor(v) { return Math.floor(v); }
function dsv3Max(a, b) { return a > b ? a : b; }
function dsv3Min(a, b) { return a < b ? a : b; }
function dsv3Sum(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) s += arr[i] || 0;
  return s;
}
function dsv3Avg(arr) {
  if (!arr.length) return 0;
  return dsv3Sum(arr) / arr.length;
}
// 乘法哈希 → 确定性伪随机（同一种子永远同一结果，用于小行星带生成）
function dsv3HashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function dsv3Mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function dsv3Pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}
function dsv3WeightedPick(rng, entries) {
  // entries: [[value, weight], ...]
  let total = 0;
  for (let i = 0; i < entries.length; i++) total += entries[i][1];
  let r = rng() * total;
  for (let i = 0; i < entries.length; i++) {
    r -= entries[i][1];
    if (r <= 0) return entries[i][0];
  }
  return entries[entries.length - 1][0];
}
function dsv3Fmt(n) {
  if (typeof n !== 'number' || isNaN(n)) return '0';
  if (Math.abs(n) >= 1000000) return (n / 1000000).toFixed(2) + 'M';
  if (Math.abs(n) >= 10000) return (n / 1000).toFixed(1) + 'k';
  if (Math.abs(n) >= 100) return Math.round(n).toString();
  return (Math.round(n * 10) / 10).toString();
}
function dsv3FmtTime(sec) {
  sec = Math.max(0, Math.round(sec));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return h + '时' + m + '分';
  if (m > 0) return m + '分' + s + '秒';
  return s + '秒';
}
function dsv3Id(prefix, n) {
  return prefix + '-' + String(n).padStart(3, '0');
}
function dsv3DeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function dsv3Has(obj, key) {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
}

// ================= 深空资源定义 =================
// value: 相对价值锚（钢=4）；mass: 每单位质量（吨），决定飞船载荷占用；
// storable: 是否可进深空仓库；volatile: 是否需要特殊储存（影响损耗）。
const DS_RESOURCES = {
  steel:    { name: '钢材',     value: 4,  mass: 1.0,  storable: true,  volatile: false, desc: '轨道建造与飞船船体的基础材料。' },
  rare:     { name: '稀土',     value: 3,  mass: 0.4,  storable: true,  volatile: false, desc: '电子设备与精密仪器的关键原料。' },
  tech:     { name: '科技点',   value: 10, mass: 0,    storable: true,  volatile: false, desc: '科研产出，用于解锁深空科技。' },
  titanium: { name: '钛',       value: 6,  mass: 0.8,  storable: true,  volatile: false, desc: '轻质高强合金，飞船升级与高级建筑材料。' },
  platinum: { name: '铂',       value: 12, mass: 0.3,  storable: true,  volatile: false, desc: '催化剂与高端电子元件，极高价值。' },
  helium3:  { name: '氦-3',     value: 15, mass: 0.1,  storable: true,  volatile: true,  desc: '月球开采的聚变燃料，价值最高的深空资源。' },
  water:    { name: '水冰',     value: 1,  mass: 1.0,  storable: true,  volatile: false, desc: '生命维持与燃料裂解的原料。' },
  food:     { name: '食物',     value: 2,  mass: 0.5,  storable: true,  volatile: false, desc: '船员与殖民者的口粮，会缓慢变质。' },
  fuel:     { name: '燃料',     value: 2,  mass: 0.9,  storable: true,  volatile: true,  desc: '飞船推进剂，每次航行按距离消耗。' },
  oxygen:   { name: '氧气',     value: 2,  mass: 0.2,  storable: true,  volatile: true,  desc: '生命维持气体，轨道站与月球基地消耗。' },
  uranium:  { name: '铀',       value: 8,  mass: 0.6,  storable: true,  volatile: false, desc: '核动力与深空反应堆燃料。' },
  artifact: { name: '遗迹碎片', value: 50, mass: 0.2, storable: true,  volatile: false, desc: '外星遗迹中回收的未知造物，研究价值极高。' },
};
const DS_RESOURCE_KEYS = Object.keys(DS_RESOURCES);

// 深空层独立账本的初始库存（新建存档时给一点启动物资，不至于开局卡死）
const DS_STARTING_STOCK = {
  steel: 200,
  rare: 60,
  tech: 0,
  titanium: 0,
  platinum: 0,
  helium3: 0,
  water: 120,
  food: 100,
  fuel: 150,
  oxygen: 120,
  uranium: 0,
  artifact: 0,
};

// ================= 全局调参 =================
const DS_TUNE_V3 = {
  tickSec: 1,                 // update 按秒推进（调用方传 dt）
  prodCycleSec: 3600,         // 产量按「每小时」标定
  // —— 解锁门槛 ——
  unlockStationTech: 't-orb-1',   // 轨道站需要科技（game.tech 有就校验，没有就放行）
  unlockMoonTech: 't-moon-1',     // 月球基地需要科技
  unlockBeltTech: 't-belt-1',     // 小行星采矿需要科技
  unlockExpeditionTech: 't-exp-1',// 远征需要科技
  // —— 轨道站 ——
  stationMaxRings: 3,         // 最多 3 环
  stationSlotsPerRing: 12,    // 每环 12 槽
  stationBasePower: 0,        // 轨道站不自带电力，靠太阳能帆
  stationPowerShortageMul: 0.4, // 电力赤字时全站生产 ×0.4
  stationCrewPerModule: 1,    // 每级模块需要 1 名船员满效
  stationUnderstaffMul: 0.5,  // 缺员模块效率 ×0.5
  // —— 月球 ——
  moonTripSec: 3 * 24 * 3600, // 地月单程 3 天（游戏内时间，update 用 dt 换算）
  moonBaseMaxLevel: 5,        // 月球基地最高 5 级
  moonHe3BasePerHour: 2,      // 1 级氦-3 矿场每小时产 2 氦-3
  moonLifeSupportPerPop: 1,   // 每名月球居民每小时消耗 1 水 + 0.5 氧
  // —— 小行星带 ——
  beltTripSec: 5 * 24 * 3600, // 火星→小行星带单程 5 天
  beltMaxClaims: 12,          // 最多同时认领 12 颗小行星
  beltDepletionRate: 0.02,    // 每次采矿返航消耗 2% 储量（按船载荷比例）
  // —— 飞船 ——
  shipyardBaseBuildSec: 3600, // 基础建造时间 1 小时（按造价缩放）
  shipFuelPerAU: 20,          // 每 AU 航程消耗 20 燃料（按飞船质量系数）
  shipMaintenancePerHour: 0.5,// 每小时维护费（钢，×船级）
  shipMaxLevel: 5,            // 飞船升级最高 5 级
  // —— 船员 ——
  crewMaxRoster: 120,         // 船员名册上限
  crewRecruitCost: 50,        // 招募 1 名船员：50 钢（训练费）
  crewTrainHours: 8,          // 一次训练 8 小时
  crewMoraleBase: 70,         // 初始士气
  crewMoraleLow: 40,          // 士气低于 40：效率 -30%，事故率上升
  crewMoraleCritical: 20,     // 士气低于 20：船员可能辞职/罢工
  // —— 远征 ——
  expeditionMaxActive: 5,     // 同时进行中的远征上限
  expeditionRiskBase: 0.10,   // 基础事故率 10%
  expeditionRiskPerLevel: 0.03,// 每级难度 +3% 事故率
  expeditionRewardMul: 1.0,   // 奖励倍率（遗迹加成另算）
  // —— 遗迹 ——
  ruinExcavateHours: 24,      // 每个发掘阶段 24 小时
  ruinStages: 3,              // 每处遗迹 3 个发掘阶段
  // —— 地图 ——
  mapAUPerHour: 0.05,         // 深空地图上飞船巡航速度（AU/小时）
  mapDiscoveryRadius: 0.5,    // 发现半径（AU），进入即发现节点
};

// ================= 飞船定义 =================
// 三型飞船：运输船（大载荷慢速）、采矿船（中载荷带采矿激光）、
// 探索船（小载荷高速长续航）。造价锚：钢=4，科技=10。
// cargo: 载荷（吨）；speed: 巡航速度（AU/小时）；crew: 最低船员；
// fuelPerAU: 每 AU 燃料消耗；hull: 船体值；slots: 升级槽。
const SHIP_TYPES = {
  transport: {
    id: 'transport',
    name: '运输船',
    icon: '🚛',
    desc: '大载荷慢速货船，轨道站—月球—小行星带之间的货运主力。',
    cost: { steel: 400, rare: 120, tech: 40, fuel: 60 },
    cargo: 500,
    speed: 0.08,
    crew: 4,
    fuelPerAU: 25,
    hull: 300,
    slots: 2,
    buildSec: 6 * 3600,
    upkeepSteelPerHour: 2,
    role: 'cargo',
    unlockTech: null,
  },
  miner: {
    id: 'miner',
    name: '采矿船',
    icon: '⛏️',
    desc: '装备采矿激光与矿石分选舱，唯一能直接开采小行星的船型。',
    cost: { steel: 600, rare: 200, tech: 60, titanium: 40, fuel: 80 },
    cargo: 220,
    speed: 0.06,
    crew: 6,
    fuelPerAU: 30,
    hull: 350,
    slots: 3,
    buildSec: 10 * 3600,
    upkeepSteelPerHour: 3,
    role: 'mining',
    miningRate: 12,      // 每小时采矿 12 吨矿石（×激光等级）
    unlockTech: 't-belt-1',
  },
  explorer: {
    id: 'explorer',
    name: '探索船',
    icon: '🔭',
    desc: '高速长续航侦察船，远征与遗迹探索的首选，载荷小但跑得远。',
    cost: { steel: 350, rare: 180, tech: 120, fuel: 100 },
    cargo: 80,
    speed: 0.15,
    crew: 3,
    fuelPerAU: 15,
    hull: 200,
    slots: 3,
    buildSec: 8 * 3600,
    upkeepSteelPerHour: 2,
    role: 'explore',
    scanBonus: 0.25,     // 遗迹/资源发现率 +25%
    unlockTech: 't-exp-1',
  },
};
const SHIP_TYPE_KEYS = Object.keys(SHIP_TYPES);

// 飞船升级：三系（引擎 / 货舱 / 护盾），每系 5 级。
// 升级在船坞进行，耗时 + 造价，效果直接改飞船派生属性。
const SHIP_UPGRADES = {
  engine: {
    id: 'engine',
    name: '引擎',
    icon: '🚀',
    desc: '提升巡航速度与燃料效率。',
    perLevel: { speedMul: 0.12, fuelMul: -0.06 },
    costPerLevel: function (level, shipType) {
      return {
        steel: Math.round(80 * level * (shipType === 'explorer' ? 1.2 : 1)),
        rare: Math.round(30 * level),
        tech: Math.round(20 * level),
      };
    },
    timeSecPerLevel: function (level) { return 2 * 3600 * level; },
    maxLevel: 5,
  },
  cargo: {
    id: 'cargo',
    name: '货舱',
    icon: '📦',
    desc: '扩大载荷容量。',
    perLevel: { cargoMul: 0.20 },
    costPerLevel: function (level, shipType) {
      return {
        steel: Math.round(100 * level),
        titanium: Math.round(15 * level),
      };
    },
    timeSecPerLevel: function (level) { return 2 * 3600 * level; },
    maxLevel: 5,
  },
  shield: {
    id: 'shield',
    name: '护盾',
    icon: '🛡️',
    desc: '提升船体与事故生存率。',
    perLevel: { hullMul: 0.25, riskMul: -0.08 },
    costPerLevel: function (level, shipType) {
      return {
        steel: Math.round(90 * level),
        rare: Math.round(40 * level),
        platinum: Math.round(10 * level),
      };
    },
    timeSecPerLevel: function (level) { return 3 * 3600 * level; },
    maxLevel: 5,
  },
};
const SHIP_UPGRADE_KEYS = Object.keys(SHIP_UPGRADES);

// 飞船状态枚举
const SHIP_STATUS = {
  DOCKED: 'docked',       // 停靠在轨道站/船坞
  BUILDING: 'building',   // 建造中
  UPGRADING: 'upgrading', // 升级中
  EN_ROUTE: 'en_route',   // 航行中
  MINING: 'mining',       // 采矿作业中
  EXPEDITION: 'expedition', // 执行远征
  RETURNING: 'returning', // 返航中
  DAMAGED: 'damaged',     // 受损待修（停靠）
  REPAIRING: 'repairing', // 维修中
  LOST: 'lost',           // 损毁（从舰队移除，进残骸记录）
};
const SHIP_STATUS_LABEL = {
  docked: '停靠',
  building: '建造中',
  upgrading: '升级中',
  en_route: '航行中',
  mining: '采矿中',
  expedition: '远征中',
  returning: '返航中',
  damaged: '受损',
  repairing: '维修中',
  lost: '已损毁',
};

// 飞船任务类型（舰队调度用）
const SHIP_MISSION_KIND = {
  TRANSPORT: 'transport',   // 货运：A→B 运货
  MINING: 'mining',         // 采矿：去小行星带采矿返航
  EXPEDITION: 'expedition', // 远征：执行远征任务
  PATROL: 'patrol',         // 巡逻：降低航线事故率
  SUPPLY_MOON: 'supply_moon', // 月球补给
  SURVEY: 'survey',         // 勘测：发现新小行星/遗迹线索
};

// ================= 轨道站模块定义 =================
// 10 种模块 × 3 级，12 槽/环，最多 3 环。
// power: 正数产电 / 负数耗电（每小时）；crew: 需要船员数（=等级）；
// prod: 每小时产出（资源键→数量，×等级与加成）。
const STATION_MODULES = {
  solar: {
    id: 'solar',
    name: '太阳能帆',
    icon: '🔆',
    desc: '轨道太阳能帆板，全站电力的来源。',
    cost: { steel: 150, rare: 40 },
    power: [60, 140, 240],
    crew: [0, 0, 0],
    prod: {},
    maxLevel: 3,
    unlockTech: null,
  },
  dock: {
    id: 'dock',
    name: '船坞',
    icon: '🛠️',
    desc: '飞船建造与维修。等级越高造船越快、维修越便宜。',
    cost: { steel: 300, rare: 80, tech: 20 },
    power: [-20, -35, -50],
    crew: [1, 1, 2],
    prod: {},
    maxLevel: 3,
    unlockTech: null,
    buildSpeedMul: [1.0, 1.25, 1.6],
    repairDiscount: [0, 0.15, 0.3],
  },
  habitat: {
    id: 'habitat',
    name: '居住舱',
    icon: '🛏️',
    desc: '船员生活区。提升全站船员容量与士气恢复。',
    cost: { steel: 200, rare: 50 },
    power: [-15, -25, -40],
    crew: [0, 0, 0],
    prod: {},
    maxLevel: 3,
    unlockTech: null,
    crewCap: [10, 25, 45],
    moraleRegen: [0.5, 1.0, 1.8],
  },
  lab: {
    id: 'lab',
    name: '科研舱',
    icon: '🔬',
    desc: '轨道实验室，每小时产出科技点。',
    cost: { steel: 250, rare: 100, tech: 30 },
    power: [-30, -50, -80],
    crew: [1, 2, 3],
    prod: { tech: [2, 5, 9] },
    maxLevel: 3,
    unlockTech: null,
  },
  refinery: {
    id: 'refinery',
    name: '精炼厂',
    icon: '🏭',
    desc: '把小行星矿石精炼为钛与铂。需要矿石输入。',
    cost: { steel: 350, rare: 120, tech: 40 },
    power: [-40, -70, -110],
    crew: [1, 2, 2],
    prod: {},
    maxLevel: 3,
    unlockTech: null,
    refineRate: [6, 14, 26],
  },
  hydroponics: {
    id: 'hydroponics',
    name: '水培农场',
    icon: '🌱',
    desc: '轨道种植舱，生产食物与氧气。',
    cost: { steel: 180, rare: 60 },
    power: [-25, -40, -60],
    crew: [1, 1, 2],
    prod: { food: [4, 9, 16], oxygen: [3, 7, 12] },
    maxLevel: 3,
    unlockTech: null,
  },
  tank: {
    id: 'tank',
    name: '燃料库',
    icon: '🛢️',
    desc: '储存燃料与水冰，扩大深空仓库容量。',
    cost: { steel: 220, rare: 40 },
    power: [-10, -15, -20],
    crew: [0, 0, 1],
    prod: {},
    maxLevel: 3,
    unlockTech: null,
    storageMul: [1.5, 2.2, 3.0],
  },
  comms: {
    id: 'comms',
    name: '通讯阵列',
    icon: '📡',
    desc: '深空通讯，缩短远征与采矿往返时间，提高发现率。',
    cost: { steel: 200, rare: 150, tech: 30 },
    power: [-20, -35, -55],
    crew: [1, 1, 1],
    prod: {},
    maxLevel: 3,
    unlockTech: null,
    travelTimeMul: [0.95, 0.9, 0.82],
    scanBonus: [0.05, 0.12, 0.2],
  },
  defense: {
    id: 'defense',
    name: '防御炮塔',
    icon: '🔫',
    desc: '轨道防御，降低微陨石与海盗袭击的损失。',
    cost: { steel: 300, rare: 100, titanium: 30 },
    power: [-25, -45, -70],
    crew: [1, 2, 2],
    prod: {},
    maxLevel: 3,
    unlockTech: null,
    hazardReduction: [0.2, 0.4, 0.6],
  },
  observatory: {
    id: 'observatory',
    name: '天文台',
    icon: '🔭',
    desc: '深空观测，提高小行星发现与遗迹线索产出。',
    cost: { steel: 250, rare: 180, tech: 60 },
    power: [-30, -50, -75],
    crew: [1, 2, 2],
    prod: {},
    maxLevel: 3,
    unlockTech: 't-exp-1',
    discoveryPerHour: [0.02, 0.05, 0.09],
  },
};
const STATION_MODULE_KEYS = Object.keys(STATION_MODULES);

// 轨道资源采集：轨道站自带采集器（太阳风粒子 / 轨道碎片回收）
const ORBITAL_HARVEST = {
  solarWind: {
    id: 'solarWind',
    name: '太阳风收集',
    desc: '磁帆收集太阳风粒子，缓慢产出氦-3 与科技点。',
    baseRate: { helium3: 0.2, tech: 0.3 },
    requires: { module: 'solar', level: 2 },
  },
  debris: {
    id: 'debris',
    name: '轨道碎片回收',
    desc: '回收轨道碎片，产出钢材与稀土。',
    baseRate: { steel: 3, rare: 1 },
    requires: { module: 'dock', level: 1 },
  },
};

// ================= 月球基地建筑定义 =================
// 月球基地 5 级，每级解锁建筑槽；建筑 8 种。
const MOON_BUILDINGS = {
  he3Mine: {
    id: 'he3Mine',
    name: '氦-3 矿场',
    icon: '⛏️',
    desc: '开采月壤中的氦-3，月球基地的核心产出。',
    cost: { steel: 300, rare: 100, tech: 30 },
    power: [-30, -50, -80, -120, -170],
    crew: [2, 3, 4, 6, 8],
    prod: { helium3: [2, 5, 9, 14, 20] },
    maxLevel: 5,
    unlockBaseLevel: 1,
  },
  regolithMine: {
    id: 'regolithMine',
    name: '月壤矿场',
    icon: '🌕',
    desc: '开采月壤，产出钛、稀土与水冰。',
    cost: { steel: 250, rare: 80 },
    power: [-25, -40, -60, -90, -130],
    crew: [2, 3, 4, 5, 7],
    prod: { titanium: [1, 3, 5, 8, 12], rare: [1, 2, 4, 6, 9], water: [2, 4, 7, 10, 14] },
    maxLevel: 5,
    unlockBaseLevel: 1,
  },
  habitatDome: {
    id: 'habitatDome',
    name: '居住穹顶',
    icon: '🏠',
    desc: '月球居民区，提供人口容量与士气。',
    cost: { steel: 200, rare: 60 },
    power: [-20, -30, -45, -65, -90],
    crew: [0, 0, 0, 0, 0],
    prod: {},
    maxLevel: 5,
    unlockBaseLevel: 1,
    popCap: [20, 50, 90, 140, 200],
  },
  solarFarm: {
    id: 'solarFarm',
    name: '月面太阳能场',
    icon: '☀️',
    desc: '月面光伏阵列，基地电力来源（月夜期间效率减半）。',
    cost: { steel: 180, rare: 50 },
    power: [80, 170, 280, 420, 600],
    crew: [0, 0, 0, 1, 1],
    prod: {},
    maxLevel: 5,
    unlockBaseLevel: 1,
  },
  reactor: {
    id: 'reactor',
    name: '核反应堆',
    icon: '☢️',
    desc: '月面核电站，稳定大功率供电，需要铀。',
    cost: { steel: 400, rare: 150, uranium: 40, tech: 50 },
    power: [150, 320, 520, 760, 1050],
    crew: [1, 2, 2, 3, 4],
    prod: {},
    maxLevel: 5,
    unlockBaseLevel: 2,
    uraniumPerHour: [0.5, 1, 1.6, 2.4, 3.2],
  },
  greenhouse: {
    id: 'greenhouse',
    name: '月面温室',
    icon: '🥬',
    desc: '月面农业，生产食物与氧气。',
    cost: { steel: 220, rare: 70 },
    power: [-25, -40, -60, -85, -115],
    crew: [1, 2, 2, 3, 4],
    prod: { food: [5, 11, 19, 29, 42], oxygen: [4, 8, 14, 21, 30] },
    maxLevel: 5,
    unlockBaseLevel: 1,
  },
  lab: {
    id: 'lab',
    name: '月面实验室',
    icon: '🧪',
    desc: '低重力实验室，产出科技点，研究遗迹碎片。',
    cost: { steel: 300, rare: 150, tech: 60 },
    power: [-35, -60, -95, -140, -200],
    crew: [2, 3, 4, 5, 7],
    prod: { tech: [2, 5, 9, 14, 20] },
    maxLevel: 5,
    unlockBaseLevel: 2,
    artifactResearch: [0.1, 0.25, 0.45, 0.7, 1.0],
  },
  launchpad: {
    id: 'launchpad',
    name: '月面发射场',
    icon: '🚀',
    desc: '月球—火星货运中转站，缩短地月运输时间，增加货运量。',
    cost: { steel: 350, rare: 120, tech: 40 },
    power: [-30, -50, -75, -110, -150],
    crew: [1, 2, 2, 3, 3],
    prod: {},
    maxLevel: 5,
    unlockBaseLevel: 2,
    tripTimeMul: [0.9, 0.82, 0.74, 0.66, 0.58],
    cargoBonus: [50, 120, 220, 350, 500],
  },
};
const MOON_BUILDING_KEYS = Object.keys(MOON_BUILDINGS);

// 月球基地升级：每级成本与解锁
const MOON_BASE_LEVELS = [
  { level: 1, name: '前哨站', cost: { steel: 500, rare: 200, tech: 100, fuel: 200 }, slots: 3, desc: '首批登陆舱与简易掩体。' },
  { level: 2, name: '定居点', cost: { steel: 900, rare: 350, tech: 180, fuel: 150 }, slots: 5, desc: '加压舱段连成一片，出现常驻居民。' },
  { level: 3, name: '月面城镇', cost: { steel: 1600, rare: 600, tech: 320, titanium: 150, fuel: 150 }, slots: 8, desc: '穹顶相连，温室与实验室投入运行。' },
  { level: 4, name: '月球都市', cost: { steel: 2800, rare: 1000, tech: 550, titanium: 300, platinum: 60, fuel: 150 }, slots: 11, desc: '核电并网，氦-3 产量进入工业规模。' },
  { level: 5, name: '月球首府', cost: { steel: 4500, rare: 1600, tech: 900, titanium: 500, platinum: 120, helium3: 40, fuel: 200 }, slots: 14, desc: '地月航线的另一端终点站。' },
];

// ================= 小行星类型定义 =================
// C 碳质（含水冰/有机物）、S 硅质（钢/稀土）、M 金属（钛/铂/钢）、V 灶神星族（稀土/铀）
const ASTEROID_TYPES = {
  C: {
    code: 'C',
    name: '碳质小行星',
    icon: '🪨',
    desc: '富含水冰与碳化合物，生命维持与燃料的好来源。',
    composition: { water: 0.55, steel: 0.15, rare: 0.10, titanium: 0.05, platinum: 0.02, uranium: 0.03, helium3: 0.10 },
    richnessMul: 1.0,
    hazard: 0.05,
  },
  S: {
    code: 'S',
    name: '硅质小行星',
    icon: '🗿',
    desc: '硅酸盐为主，钢材与稀土含量高，量大管饱。',
    composition: { water: 0.10, steel: 0.50, rare: 0.20, titanium: 0.08, platinum: 0.02, uranium: 0.02, helium3: 0.08 },
    richnessMul: 1.1,
    hazard: 0.08,
  },
  M: {
    code: 'M',
    name: '金属小行星',
    icon: '🔩',
    desc: '镍铁核心裸露，钛与铂的富矿，采矿船的最爱。',
    composition: { water: 0.02, steel: 0.35, rare: 0.08, titanium: 0.30, platinum: 0.15, uranium: 0.05, helium3: 0.05 },
    richnessMul: 1.4,
    hazard: 0.12,
  },
  V: {
    code: 'V',
    name: '灶神星族小行星',
    icon: '💎',
    desc: '玄武岩质，稀土与铀富集，偶尔能挖到遗迹碎片。',
    composition: { water: 0.05, steel: 0.25, rare: 0.30, titanium: 0.10, platinum: 0.05, uranium: 0.20, helium3: 0.05 },
    richnessMul: 1.3,
    hazard: 0.15,
    artifactChance: 0.02,
  },
};
const ASTEROID_TYPE_KEYS = Object.keys(ASTEROID_TYPES);

// 小行星带分区（距离火星的 AU 距离决定航程与富集度）
const BELT_ZONES = [
  { id: 'inner', name: '内带', au: 1.2, richness: 0.9, hazard: 0.05, desc: '离火星最近，航程短但矿脉较贫。' },
  { id: 'middle', name: '中带', au: 1.8, richness: 1.1, hazard: 0.10, desc: '主带核心，产量与风险均衡。' },
  { id: 'outer', name: '外带', au: 2.5, richness: 1.4, hazard: 0.18, desc: '最富的矿区，也是最危险的深空。' },
];

// ================= 船员系统定义 =================
// 五种岗位：驾驶员 / 工程师 / 科学家 / 医生 / 矿工
const CREW_ROLES = {
  pilot: {
    id: 'pilot',
    name: '驾驶员',
    icon: '🧑‍✈️',
    desc: '提升飞船速度与航行安全，远征必需。',
    skills: ['navigation', 'evasion'],
    trainCost: { steel: 20, tech: 5 },
  },
  engineer: {
    id: 'engineer',
    name: '工程师',
    icon: '🔧',
    desc: '提升建造、维修与采矿效率，降低故障率。',
    skills: ['repair', 'mining'],
    trainCost: { steel: 30, tech: 5 },
  },
  scientist: {
    id: 'scientist',
    name: '科学家',
    icon: '🔬',
    desc: '提升科研产出、遗迹发掘与勘测发现率。',
    skills: ['research', 'survey'],
    trainCost: { steel: 15, tech: 15 },
  },
  medic: {
    id: 'medic',
    name: '医生',
    icon: '🩺',
    desc: '降低远征伤亡，治疗受伤船员，维持士气。',
    skills: ['medicine', 'morale'],
    trainCost: { steel: 15, tech: 10 },
  },
  miner: {
    id: 'miner',
    name: '矿工',
    icon: '⛏️',
    desc: '提升小行星与月球采矿产量。',
    skills: ['mining', 'endurance'],
    trainCost: { steel: 25, tech: 2 },
  },
};
const CREW_ROLE_KEYS = Object.keys(CREW_ROLES);

// 船员技能列表（每项 0–100）
const CREW_SKILLS = ['navigation', 'repair', 'research', 'medicine', 'mining', 'evasion', 'survey', 'morale', 'endurance'];
const CREW_SKILL_NAMES = {
  navigation: '导航', repair: '维修', research: '科研', medicine: '医疗',
  mining: '采矿', evasion: '规避', survey: '勘测', morale: '鼓舞', endurance: '耐力',
};

// 训练课程：每种课程针对性提升技能，耗时 8 小时
const CREW_TRAINING = {
  navSim: {
    id: 'navSim',
    name: '导航模拟器',
    desc: '模拟器飞行训练：导航 +6，规避 +4。',
    gains: { navigation: 6, evasion: 4 },
    cost: { steel: 10, tech: 5 },
    hours: 8,
    roles: ['pilot'],
  },
  repairDrill: {
    id: 'repairDrill',
    name: '损管演练',
    desc: '船体破损抢修演练：维修 +6，耐力 +3。',
    gains: { repair: 6, endurance: 3 },
    cost: { steel: 20, tech: 2 },
    hours: 8,
    roles: ['engineer', 'miner'],
  },
  labCourse: {
    id: 'labCourse',
    name: '科研进修',
    desc: '轨道实验室进修：科研 +6，勘测 +4。',
    gains: { research: 6, survey: 4 },
    cost: { steel: 5, tech: 15 },
    hours: 8,
    roles: ['scientist'],
  },
  medCourse: {
    id: 'medCourse',
    name: '医疗急救',
    desc: '太空医疗与急救：医疗 +6，鼓舞 +4。',
    gains: { medicine: 6, morale: 4 },
    cost: { steel: 10, tech: 10 },
    hours: 8,
    roles: ['medic'],
  },
  miningCourse: {
    id: 'miningCourse',
    name: '采矿实操',
    desc: '采矿激光与分选实操：采矿 +6，维修 +3。',
    gains: { mining: 6, repair: 3 },
    cost: { steel: 15, tech: 5 },
    hours: 8,
    roles: ['miner', 'engineer'],
  },
  zeroGTraining: {
    id: 'zeroGTraining',
    name: '失重适应',
    desc: '失重环境适应：耐力 +5，规避 +3，全员可练。',
    gains: { endurance: 5, evasion: 3 },
    cost: { steel: 10, tech: 2 },
    hours: 8,
    roles: ['pilot', 'engineer', 'scientist', 'medic', 'miner'],
  },
  leadership: {
    id: 'leadership',
    name: '指挥课程',
    desc: '远征指挥与危机决策：鼓舞 +6，导航 +3。',
    gains: { morale: 6, navigation: 3 },
    cost: { steel: 10, tech: 12 },
    hours: 8,
    roles: ['pilot', 'scientist', 'medic'],
  },
  evaCourse: {
    id: 'evaCourse',
    name: '舱外作业',
    desc: '舱外行走与遗迹作业：勘测 +5，维修 +4。',
    gains: { survey: 5, repair: 4 },
    cost: { steel: 20, tech: 8 },
    hours: 8,
    roles: ['engineer', 'scientist', 'miner'],
  },
};
const CREW_TRAINING_KEYS = Object.keys(CREW_TRAINING);

// 船员姓名池（招募时随机组合，纯属标识，无剧情）
const CREW_FIRST_NAMES = [
  '陈', '林', '王', '李', '张', '刘', '赵', '周', '吴', '郑',
  '徐', '孙', '胡', '朱', '高', '何', '郭', '马', '罗', '梁',
  '宋', '谢', '韩', '唐', '冯', '于', '董', '萧', '程', '曹',
];
const CREW_GIVEN_NAMES = [
  '晓', '宇', '晨', '阳', '星', '航', '远', '望', '衡', '岳',
  '澜', '澈', '曜', '珩', '翊', '泽', '霖', '骁', '睿', '铭',
  '汐', '棠', '薇', '宁', '彤', '瑶', '璇', '菡', '芮', '姝',
];

// 船员状态
const CREW_STATUS = {
  IDLE: 'idle',           // 待命
  ASSIGNED: 'assigned',   // 已编入飞船/站点
  TRAINING: 'training',   // 训练中
  EXPEDITION: 'expedition', // 远征中
  INJURED: 'injured',     // 受伤休养
  RESTING: 'resting',     // 休整恢复士气
};
const CREW_STATUS_LABEL = {
  idle: '待命', assigned: '已派遣', training: '训练中',
  expedition: '远征中', injured: '受伤', resting: '休整中',
};

// ================= 船员：个体 =================
// 一名船员 = 姓名 + 岗位 + 9 项技能（0–100）+ 等级 + 经验 + 士气 +
// 健康 + 状态 + 所在位置。所有数值都参与玩法计算，无装饰字段。
class DSCrewMember {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || ('crew-' + Math.floor(Math.random() * 1e9).toString(36));
    this.name = opts.name || DSCrewMember.randomName();
    this.role = opts.role || 'miner';
    if (!CREW_ROLES[this.role]) this.role = 'miner';
    this.level = dsv3Clamp(opts.level || 1, 1, 10);
    this.xp = opts.xp || 0;
    this.skills = {};
    for (let i = 0; i < CREW_SKILLS.length; i++) {
      const sk = CREW_SKILLS[i];
      let base = 20 + Math.floor(Math.random() * 25);
      // 岗位主技能开局更高
      if (CREW_ROLES[this.role].skills.indexOf(sk) >= 0) base += 20;
      this.skills[sk] = dsv3Clamp(
        (opts.skills && typeof opts.skills[sk] === 'number') ? opts.skills[sk] : base,
        0, 100);
    }
    this.morale = dsv3Clamp(
      (typeof opts.morale === 'number') ? opts.morale : DS_TUNE_V3.crewMoraleBase, 0, 100);
    this.health = dsv3Clamp((typeof opts.health === 'number') ? opts.health : 100, 0, 100);
    this.status = opts.status || CREW_STATUS.IDLE;
    this.assignment = opts.assignment || null; // {kind:'ship'|'station'|'moon', id}
    this.training = opts.training || null;     // {courseId, endsAt}
    this.injury = opts.injury || null;         // {severity, endsAt, cause}
    this.missions = opts.missions || 0;        // 参加过的远征次数
    this.missionsSuccess = opts.missionsSuccess || 0;
    this.rescues = opts.rescues || 0;          // 成功救援次数
    this.minedTons = opts.minedTons || 0;      // 累计参与开采吨数
    this.ruinsDone = opts.ruinsDone || 0;      // 参加并完成的遗迹发掘
    this.survivedAccidents = opts.survivedAccidents || 0; // 事故生还次数
    this.medals = opts.medals || [];           // 勋章 id 列表
    this.hoursFlown = opts.hoursFlown || 0;    // 累计飞行小时
    this.hiredAt = opts.hiredAt || 0;          // 游戏内时间戳（秒）
    this.salaryPerHour = DSCrewMember.salaryFor(this.role, this.level);
    this.traits = opts.traits || DSCrewMember.randomTraits(this.role);
  }

  static randomName() {
    const f = CREW_FIRST_NAMES[Math.floor(Math.random() * CREW_FIRST_NAMES.length)];
    const g = CREW_GIVEN_NAMES[Math.floor(Math.random() * CREW_GIVEN_NAMES.length)];
    const g2 = Math.random() < 0.4
      ? CREW_GIVEN_NAMES[Math.floor(Math.random() * CREW_GIVEN_NAMES.length)] : '';
    return f + g + g2;
  }

  static randomTraits(role) {
    // 特质：每名船员 0–2 条，真实影响数值
    const pool = [
      { id: 'steady', name: '沉稳', desc: '事故率 -5%。', effect: { riskMul: -0.05 } },
      { id: 'bold', name: '大胆', desc: '远征奖励 +8%，事故率 +3%。', effect: { rewardMul: 0.08, riskMul: 0.03 } },
      { id: 'tireless', name: '不知疲倦', desc: '士气衰减 -30%。', effect: { moraleDecayMul: -0.3 } },
      { id: 'greenThumb', name: '绿手指', desc: '水培/温室产量 +10%。', effect: { farmMul: 0.10 } },
      { id: 'greaseMonkey', name: '机械直觉', desc: '维修速度 +20%。', effect: { repairMul: 0.20 } },
      { id: 'bookworm', name: '书虫', desc: '科研产出 +10%。', effect: { researchMul: 0.10 } },
      { id: 'rockHound', name: '找矿直觉', desc: '采矿产量 +10%。', effect: { miningMul: 0.10 } },
      { id: 'lucky', name: '幸运星', desc: '远征好运事件概率 +5%。', effect: { luckBonus: 0.05 } },
      { id: 'homesick', name: '思乡', desc: '长期远征士气衰减 +40%。', effect: { moraleDecayMul: 0.4 } },
      { id: 'fragile', name: '体弱', desc: '受伤恢复时间 +50%。', effect: { injuryTimeMul: 0.5 } },
    ];
    const roleBias = {
      pilot: ['steady', 'bold', 'lucky'],
      engineer: ['greaseMonkey', 'tireless'],
      scientist: ['bookworm', 'lucky'],
      medic: ['steady', 'tireless'],
      miner: ['rockHound', 'tireless', 'bold'],
    };
    const traits = [];
    const biased = roleBias[role] || [];
    if (biased.length && Math.random() < 0.6) {
      // 注意：随机目标必须先抽好再 find，不能把 Math.random() 写进回调里
      const pickId = biased[Math.floor(Math.random() * biased.length)];
      const found = pool.find(function (t) { return t.id === pickId; });
      if (found) traits.push(found);
    }
    if (Math.random() < 0.45) {
      const t = pool[Math.floor(Math.random() * pool.length)];
      if (traits.indexOf(t) < 0) traits.push(t);
    }
    return traits.map(function (t) { return { id: t.id, name: t.name, desc: t.desc, effect: t.effect }; });
  }

  static salaryFor(role, level) {
    // 每小时工资（钢）：岗位基础 × 等级系数
    const base = { pilot: 1.2, engineer: 1.0, scientist: 1.4, medic: 1.1, miner: 0.8 };
    return dsv3Round((base[role] || 1) * (1 + 0.15 * (level - 1)), 2);
  }

  // —— 派生属性 ——
  skillAvg() {
    let s = 0;
    for (let i = 0; i < CREW_SKILLS.length; i++) s += this.skills[CREW_SKILLS[i]];
    return s / CREW_SKILLS.length;
  }
  roleSkillAvg() {
    const list = CREW_ROLES[this.role].skills;
    let s = 0;
    for (let i = 0; i < list.length; i++) s += this.skills[list[i]];
    return s / list.length;
  }
  // 效率系数：技能 + 士气 + 健康 综合
  efficiency() {
    const skillPart = 0.5 + (this.roleSkillAvg() / 100) * 0.7;
    const moralePart = 0.7 + (this.morale / 100) * 0.5;
    const healthPart = 0.5 + (this.health / 100) * 0.5;
    let eff = skillPart * moralePart * healthPart;
    if (this.morale < DS_TUNE_V3.crewMoraleLow) eff *= 0.7;
    if (this.health < 50) eff *= 0.7;
    // 勋章效率加成
    for (let i = 0; i < this.medals.length; i++) {
      for (let j = 0; j < DS_MEDALS.length; j++) {
        if (DS_MEDALS[j].id === this.medals[i] && DS_MEDALS[j].effect && DS_MEDALS[j].effect.efficiency) {
          eff *= 1 + DS_MEDALS[j].effect.efficiency;
        }
      }
    }
    return dsv3Clamp(eff, 0.1, 2.0);
  }
  traitEffect(key) {
    let v = 0;
    for (let i = 0; i < this.traits.length; i++) {
      const e = this.traits[i].effect || {};
      if (typeof e[key] === 'number') v += e[key];
    }
    return v;
  }
  // 升级所需经验：100 × 等级
  xpForNextLevel() { return 100 * this.level; }
  gainXp(amount) {
    this.xp += amount;
    let leveled = 0;
    while (this.level < 10 && this.xp >= this.xpForNextLevel()) {
      this.xp -= this.xpForNextLevel();
      this.level++;
      leveled++;
      // 升级时主技能 +3，随机技能 +2
      const mains = CREW_ROLES[this.role].skills;
      for (let i = 0; i < mains.length; i++) {
        this.skills[mains[i]] = dsv3Clamp(this.skills[mains[i]] + 3, 0, 100);
      }
      const sk = CREW_SKILLS[Math.floor(Math.random() * CREW_SKILLS.length)];
      this.skills[sk] = dsv3Clamp(this.skills[sk] + 2, 0, 100);
      this.salaryPerHour = DSCrewMember.salaryFor(this.role, this.level);
    }
    return leveled;
  }
  adjustMorale(delta) {
    const decay = 1 + this.traitEffect('moraleDecayMul');
    if (delta < 0) delta = delta * Math.max(0.2, decay);
    this.morale = dsv3Clamp(this.morale + delta, 0, 100);
    return this.morale;
  }
  adjustHealth(delta) {
    this.health = dsv3Clamp(this.health + delta, 0, 100);
    return this.health;
  }
  // 受伤：severity 1 轻伤 / 2 重伤 / 3 危重
  injure(severity, cause, nowSec) {
    severity = dsv3Clamp(severity || 1, 1, 3);
    const hours = [24, 72, 168][severity - 1] * (1 + this.traitEffect('injuryTimeMul'));
    this.injury = { severity: severity, endsAt: nowSec + hours * 3600, cause: cause || '事故' };
    this.status = CREW_STATUS.INJURED;
    this.health = dsv3Clamp(this.health - severity * 20, 5, 100);
    this.adjustMorale(-10 * severity);
    return this.injury;
  }
  isAvailable() {
    return this.status === CREW_STATUS.IDLE && !this.injury && this.health >= 50;
  }
  // 士气过低可能辞职：返回 true 表示辞职
  checkResign(rng) {
    if (this.morale >= DS_TUNE_V3.crewMoraleCritical) return false;
    const p = (DS_TUNE_V3.crewMoraleCritical - this.morale) / 100 * 0.5;
    return (rng || Math.random)() < p;
  }
  summary() {
    return {
      id: this.id, name: this.name, role: this.role,
      roleName: CREW_ROLES[this.role].name,
      level: this.level, xp: Math.round(this.xp),
      xpNext: this.xpForNextLevel(),
      morale: Math.round(this.morale), health: Math.round(this.health),
      status: this.status, statusLabel: CREW_STATUS_LABEL[this.status],
      efficiency: dsv3Round(this.efficiency(), 2),
      roleSkill: Math.round(this.roleSkillAvg()),
      assignment: this.assignment,
      missions: this.missions, missionsSuccess: this.missionsSuccess,
      traits: this.traits.map(function (t) { return t.name; }),
      salaryPerHour: this.salaryPerHour,
    };
  }
  save() {
    return {
      id: this.id, name: this.name, role: this.role, level: this.level,
      xp: this.xp, skills: this.skills, morale: this.morale,
      health: this.health, status: this.status, assignment: this.assignment,
      training: this.training, injury: this.injury, missions: this.missions,
      missionsSuccess: this.missionsSuccess, rescues: this.rescues,
      minedTons: this.minedTons, ruinsDone: this.ruinsDone,
      survivedAccidents: this.survivedAccidents, medals: this.medals,
      hoursFlown: this.hoursFlown,
      hiredAt: this.hiredAt, traits: this.traits,
    };
  }
  static load(data) {
    return new DSCrewMember(data || {});
  }
}

// ================= 船员管理器 =================
class DSCrewManager {
  constructor() {
    this.roster = [];          // DSCrewMember[]
    this.recruitCooldownUntil = 0; // 招募冷却（游戏内秒）
    this.totalHired = 0;
    this.totalResigned = 0;
    this.totalInjured = 0;
    this.trainingQueue = [];   // {crewId, courseId, endsAt}
    this.log = [];             // 人事日志 [{t, text}]
    this._seq = 0;
  }

  count() { return this.roster.length; }
  availableCount() {
    let n = 0;
    for (let i = 0; i < this.roster.length; i++) {
      if (this.roster[i].isAvailable()) n++;
    }
    return n;
  }
  byRole(role) {
    return this.roster.filter(function (c) { return c.role === role; });
  }
  byStatus(status) {
    return this.roster.filter(function (c) { return c.status === status; });
  }
  get(id) {
    for (let i = 0; i < this.roster.length; i++) {
      if (this.roster[i].id === id) return this.roster[i];
    }
    return null;
  }
  avgMorale() {
    if (!this.roster.length) return 0;
    let s = 0;
    for (let i = 0; i < this.roster.length; i++) s += this.roster[i].morale;
    return s / this.roster.length;
  }
  avgEfficiency() {
    if (!this.roster.length) return 0;
    let s = 0;
    for (let i = 0; i < this.roster.length; i++) s += this.roster[i].efficiency();
    return s / this.roster.length;
  }

  // —— 招募 ——
  // 每次招募生成 3 名候选人（岗位随机、技能随机），玩家挑 1 名雇佣。
  // 冷却 1 小时；费用 = 招募费 + 首月工资折算。
  recruitCost(role) {
    const base = DS_TUNE_V3.crewRecruitCost;
    const roleMul = { pilot: 1.5, engineer: 1.2, scientist: 1.6, medic: 1.3, miner: 1.0 };
    return Math.round(base * (roleMul[role] || 1));
  }
  canRecruit(nowSec) {
    if (this.roster.length >= DS_TUNE_V3.crewMaxRoster) {
      return { ok: false, reason: '船员名册已满（' + DS_TUNE_V3.crewMaxRoster + ' 人）' };
    }
    if (nowSec < this.recruitCooldownUntil) {
      return { ok: false, reason: '招募冷却中，还需 ' + dsv3FmtTime(this.recruitCooldownUntil - nowSec) };
    }
    return { ok: true };
  }
  generateCandidates(n) {
    n = n || 3;
    const out = [];
    for (let i = 0; i < n; i++) {
      const role = CREW_ROLE_KEYS[Math.floor(Math.random() * CREW_ROLE_KEYS.length)];
      const c = new DSCrewMember({ role: role, level: 1 });
      out.push(c);
    }
    return out;
  }
  hire(candidate, stock, nowSec) {
    const check = this.canRecruit(nowSec);
    if (!check.ok) return { ok: false, reason: check.reason };
    const cost = this.recruitCost(candidate.role);
    if ((stock.steel || 0) < cost) {
      return { ok: false, reason: '钢材不足，需要 ' + cost + ' 钢' };
    }
    stock.steel -= cost;
    candidate.hiredAt = nowSec;
    candidate.status = CREW_STATUS.IDLE;
    this.roster.push(candidate);
    this.totalHired++;
    this.recruitCooldownUntil = nowSec + 3600;
    this._seq++;
    this._log(nowSec, '招募了 ' + candidate.name + '（' + CREW_ROLES[candidate.role].name + ' Lv' + candidate.level + '）');
    return { ok: true, crew: candidate, cost: cost };
  }
  dismiss(crewId, nowSec) {
    const idx = this.roster.findIndex(function (c) { return c.id === crewId; });
    if (idx < 0) return { ok: false, reason: '找不到该船员' };
    const c = this.roster[idx];
    if (c.status === CREW_STATUS.EXPEDITION) {
      return { ok: false, reason: '该船员正在远征，无法解雇' };
    }
    this.roster.splice(idx, 1);
    this.totalResigned++;
    this._log(nowSec, c.name + ' 离开了深空计划');
    return { ok: true, crew: c };
  }

  // —— 训练 ——
  startTraining(crewId, courseId, stock, nowSec) {
    const c = this.get(crewId);
    if (!c) return { ok: false, reason: '找不到该船员' };
    const course = CREW_TRAINING[courseId];
    if (!course) return { ok: false, reason: '找不到该课程' };
    if (c.status !== CREW_STATUS.IDLE) {
      return { ok: false, reason: '该船员当前状态为「' + CREW_STATUS_LABEL[c.status] + '」，无法训练' };
    }
    if (course.roles.indexOf(c.role) < 0) {
      return { ok: false, reason: '该课程不适合' + CREW_ROLES[c.role].name };
    }
    for (const k in course.cost) {
      if ((stock[k] || 0) < course.cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + course.cost[k] };
      }
    }
    for (const k in course.cost) stock[k] -= course.cost[k];
    c.status = CREW_STATUS.TRAINING;
    c.training = { courseId: courseId, endsAt: nowSec + course.hours * 3600 };
    this.trainingQueue.push({ crewId: crewId, courseId: courseId, endsAt: c.training.endsAt });
    return { ok: true, endsAt: c.training.endsAt };
  }
  // 训练完成结算：技能提升 + 少量经验 + 士气 +3
  _completeTraining(entry, nowSec) {
    const c = this.get(entry.crewId);
    if (!c) return;
    const course = CREW_TRAINING[entry.courseId];
    if (!course) return;
    for (const sk in course.gains) {
      c.skills[sk] = dsv3Clamp(c.skills[sk] + course.gains[sk], 0, 100);
    }
    c.gainXp(40);
    c.adjustMorale(3);
    c.status = CREW_STATUS.IDLE;
    c.training = null;
    this._log(nowSec, c.name + ' 完成了「' + course.name + '」');
  }

  // —— 派遣 / 召回 ——
  assign(crewId, assignment) {
    const c = this.get(crewId);
    if (!c) return { ok: false, reason: '找不到该船员' };
    if (!c.isAvailable()) {
      return { ok: false, reason: c.name + ' 当前不可派遣（' + CREW_STATUS_LABEL[c.status] + '）' };
    }
    c.status = CREW_STATUS.ASSIGNED;
    c.assignment = assignment;
    return { ok: true, crew: c };
  }
  unassign(crewId) {
    const c = this.get(crewId);
    if (!c) return { ok: false, reason: '找不到该船员' };
    c.status = CREW_STATUS.IDLE;
    c.assignment = null;
    return { ok: true, crew: c };
  }
  // 批量取人：按岗位与最低技能取 n 名待命船员（远征/飞船配员用）
  pickCrew(role, n, minRoleSkill) {
    const pool = this.byRole(role).filter(function (c) {
      return c.isAvailable() && c.roleSkillAvg() >= (minRoleSkill || 0);
    });
    pool.sort(function (a, b) { return b.roleSkillAvg() - a.roleSkillAvg(); });
    return pool.slice(0, n);
  }
  // 某岗位待命人数是否满足需求
  checkCrewNeed(need) {
    // need: {role: count}
    const missing = [];
    for (const role in need) {
      const have = this.byRole(role).filter(function (c) { return c.isAvailable(); }).length;
      if (have < need[role]) {
        missing.push(CREW_ROLES[role].name + ' 缺 ' + (need[role] - have) + ' 人');
      }
    }
    return missing.length ? { ok: false, missing: missing } : { ok: true };
  }

  // —— 每 tick 推进 ——
  update(dtSec, nowSec, stock, rng) {
    rng = rng || Math.random;
    // 1. 训练完成
    for (let i = this.trainingQueue.length - 1; i >= 0; i--) {
      if (nowSec >= this.trainingQueue[i].endsAt) {
        this._completeTraining(this.trainingQueue[i], nowSec);
        this.trainingQueue.splice(i, 1);
      }
    }
    // 2. 伤病恢复
    for (let i = 0; i < this.roster.length; i++) {
      const c = this.roster[i];
      if (c.injury && nowSec >= c.injury.endsAt) {
        c.injury = null;
        c.status = CREW_STATUS.IDLE;
        c.health = dsv3Clamp(c.health + 20, 0, 100);
        this._log(nowSec, c.name + ' 伤愈归队');
      }
    }
    // 3. 待命船员士气缓慢恢复（每小时 +0.5），远征/派遣中缓慢下降
    const hours = dtSec / 3600;
    for (let i = 0; i < this.roster.length; i++) {
      const c = this.roster[i];
      if (c.status === CREW_STATUS.IDLE) {
        c.adjustMorale(0.5 * hours);
        c.adjustHealth(0.3 * hours);
      } else if (c.status === CREW_STATUS.ASSIGNED || c.status === CREW_STATUS.EXPEDITION) {
        c.adjustMorale(-0.4 * hours);
      }
    }
    // 4. 工资：按小时从钢材结算（工资以钢计价，深空通用）
    let wage = 0;
    for (let i = 0; i < this.roster.length; i++) {
      wage += this.roster[i].salaryPerHour * hours;
    }
    wage = Math.round(wage * 10) / 10;
    if (wage > 0 && stock) {
      if ((stock.steel || 0) >= wage) {
        stock.steel -= wage;
      } else {
        // 发不出工资：全体士气 -2/小时
        stock.steel = 0;
        for (let i = 0; i < this.roster.length; i++) {
          this.roster[i].adjustMorale(-2 * hours);
        }
      }
    }
    // 5. 士气过低辞职判定（每小时一次概率）
    if (Math.random() < hours) {
      for (let i = this.roster.length - 1; i >= 0; i--) {
        const c = this.roster[i];
        if (c.status === CREW_STATUS.IDLE && c.checkResign(rng)) {
          this.roster.splice(i, 1);
          this.totalResigned++;
          this._log(nowSec, c.name + ' 因士气过低辞职了');
        }
      }
    }
    return { wage: wage };
  }

  // 远征结算用：按船员名单给经验与士气
  awardExpedition(crewIds, success, nowSec) {
    const out = [];
    for (let i = 0; i < crewIds.length; i++) {
      const c = this.get(crewIds[i]);
      if (!c) continue;
      c.missions++;
      if (success) {
        c.missionsSuccess++;
        const leveled = c.gainXp(60);
        c.adjustMorale(8);
        out.push({ crew: c, leveled: leveled, success: true });
      } else {
        c.gainXp(25);
        c.adjustMorale(-8);
        out.push({ crew: c, leveled: 0, success: false });
      }
      if (c.status === CREW_STATUS.EXPEDITION) {
        c.status = CREW_STATUS.IDLE;
        c.assignment = null;
      }
    }
    return out;
  }

  _log(t, text) {
    this.log.push({ t: Math.round(t), text: text });
    if (this.log.length > 200) this.log.splice(0, this.log.length - 200);
  }

  summary() {
    const byRole = {};
    for (let i = 0; i < CREW_ROLE_KEYS.length; i++) {
      const r = CREW_ROLE_KEYS[i];
      byRole[r] = {
        name: CREW_ROLES[r].name,
        total: this.byRole(r).length,
        available: this.byRole(r).filter(function (c) { return c.isAvailable(); }).length,
      };
    }
    return {
      total: this.roster.length,
      available: this.availableCount(),
      avgMorale: Math.round(this.avgMorale()),
      avgEfficiency: dsv3Round(this.avgEfficiency(), 2),
      byRole: byRole,
      totalHired: this.totalHired,
      totalResigned: this.totalResigned,
      totalInjured: this.totalInjured,
      training: this.trainingQueue.length,
    };
  }

  save() {
    return {
      roster: this.roster.map(function (c) { return c.save(); }),
      recruitCooldownUntil: this.recruitCooldownUntil,
      totalHired: this.totalHired,
      totalResigned: this.totalResigned,
      totalInjured: this.totalInjured,
      trainingQueue: this.trainingQueue,
      log: this.log,
      seq: this._seq,
    };
  }
  load(data) {
    if (!data) return;
    this.roster = (data.roster || []).map(function (c) { return DSCrewMember.load(c); });
    this.recruitCooldownUntil = data.recruitCooldownUntil || 0;
    this.totalHired = data.totalHired || 0;
    this.totalResigned = data.totalResigned || 0;
    this.totalInjured = data.totalInjured || 0;
    this.trainingQueue = data.trainingQueue || [];
    this.log = data.log || [];
    this._seq = data.seq || 0;
  }
}

// ================= 飞船：个体 =================
class DSShip {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || ('ship-' + Math.floor(Math.random() * 1e9).toString(36));
    this.type = opts.type || 'transport';
    if (!SHIP_TYPES[this.type]) this.type = 'transport';
    this.blueprint = opts.blueprint || null; // 蓝图变体 id（DS_SHIP_BLUEPRINTS）
    this.name = opts.name || DSShip.defaultName(this.type);
    this.level = dsv3Clamp(opts.level || 1, 1, DS_TUNE_V3.shipMaxLevel);
    this.status = opts.status || SHIP_STATUS.DOCKED;
    this.upgrades = opts.upgrades || { engine: 0, cargo: 0, shield: 0 };
    this.hull = opts.hull != null ? opts.hull : this.maxHull();
    this.fuel = opts.fuel != null ? opts.fuel : this.maxFuel();
    this.cargo = opts.cargo || {};        // {resKey: amount}
    this.crewIds = opts.crewIds || [];    // 编配船员 id
    this.location = opts.location || 'mars-orbit'; // 节点 id
    this.destination = opts.destination || null;
    this.mission = opts.mission || null;  // {kind, targetId, ...}
    this.progress = opts.progress || 0;   // 航行进度 0–1
    this.tripTotalSec = opts.tripTotalSec || 0;
    this.tripElapsedSec = opts.tripElapsedSec || 0;
    this.builtAt = opts.builtAt || 0;
    this.distanceFlownAU = opts.distanceFlownAU || 0;
    this.tripsCompleted = opts.tripsCompleted || 0;
    this.repairUntil = opts.repairUntil || 0;
    this.upgradeJob = opts.upgradeJob || null; // {key, level, endsAt}
    this.buildJob = opts.buildJob || null;     // {endsAt} 建造中时
  }

  static defaultName(type) {
    const prefix = { transport: '货', miner: '矿', explorer: '探' };
    const nouns = ['鲲鹏', '逐星', '远望', '晨曦', '破晓', '征途', '星火', '长庚', '启明', '玄鸟'];
    return prefix[type] + '·' + nouns[Math.floor(Math.random() * nouns.length)] +
      '-' + Math.floor(100 + Math.random() * 900);
  }

  def() { return SHIP_TYPES[this.type]; }

  // —— 派生属性（升级与等级加成）——
  // 蓝图变体修正：有蓝图时乘对应系数
  _bp(key, fallback) {
    const bp = dsBlueprintFor(this);
    if (!bp) return fallback;
    return (bp[key] == null ? fallback : bp[key]);
  }
  maxHull() {
    const base = this.def().hull;
    const shieldMul = 1 + this.upgrades.shield * SHIP_UPGRADES.shield.perLevel.hullMul;
    return Math.round(base * shieldMul * (1 + 0.1 * (this.level - 1)) * this._bp('hullMul', 1));
  }
  maxFuel() {
    return Math.round(200 + 100 * this.level + this.upgrades.engine * 40);
  }
  maxCargo() {
    const base = this.def().cargo;
    const mul = 1 + this.upgrades.cargo * SHIP_UPGRADES.cargo.perLevel.cargoMul;
    return Math.round(base * mul * (1 + 0.08 * (this.level - 1)) * this._bp('cargoMul', 1));
  }
  speedAUPerHour() {
    const base = this.def().speed;
    const mul = 1 + this.upgrades.engine * SHIP_UPGRADES.engine.perLevel.speedMul;
    return dsv3Round(base * mul * (1 + 0.05 * (this.level - 1)) * this._bp('speedMul', 1), 4);
  }
  fuelPerAU() {
    const base = this.def().fuelPerAU;
    const mul = 1 + this.upgrades.engine * SHIP_UPGRADES.engine.perLevel.fuelMul;
    return dsv3Round(base * mul * this._bp('fuelMul', 1), 2);
  }
  miningRatePerHour() {
    if (this.type !== 'miner') return 0;
    return this.def().miningRate * (1 + 0.2 * this.upgrades.engine) * (1 + 0.1 * (this.level - 1)) * this._bp('miningMul', 1);
  }
  scanBonus() {
    let b = this.type === 'explorer' ? this.def().scanBonus : 0;
    b += this.upgrades.engine * 0.02;
    b *= this._bp('scanMul', 1);
    return b;
  }
  // 事故风险修正：护盾升级降低，船体受损升高
  riskMul() {
    let m = 1 + this.upgrades.shield * SHIP_UPGRADES.shield.perLevel.riskMul;
    const hullRatio = this.hull / this.maxHull();
    if (hullRatio < 0.5) m += 0.3;
    else if (hullRatio < 0.8) m += 0.1;
    return Math.max(0.3, m);
  }
  cargoUsed() {
    let used = 0;
    for (const k in this.cargo) {
      const def = DS_RESOURCES[k];
      used += (this.cargo[k] || 0) * (def ? def.mass : 1);
    }
    return dsv3Round(used, 1);
  }
  cargoFree() { return Math.max(0, this.maxCargo() - this.cargoUsed()); }
  cargoValue() {
    let v = 0;
    for (const k in this.cargo) {
      const def = DS_RESOURCES[k];
      v += (this.cargo[k] || 0) * (def ? def.value : 0);
    }
    return Math.round(v);
  }
  crewNeed() { return this.def().crew; }
  isCrewed(crewMgr) {
    if (!crewMgr) return this.crewIds.length >= this.crewNeed();
    let n = 0;
    for (let i = 0; i < this.crewIds.length; i++) {
      if (crewMgr.get(this.crewIds[i])) n++;
    }
    return n >= this.crewNeed();
  }
  // 出航检查：船员、燃料、船体
  canDepart(crewMgr) {
    if (this.status !== SHIP_STATUS.DOCKED && this.status !== SHIP_STATUS.DAMAGED) {
      return { ok: false, reason: '飞船当前状态为「' + SHIP_STATUS_LABEL[this.status] + '」' };
    }
    if (this.status === SHIP_STATUS.DAMAGED || this.hull < this.maxHull() * 0.5) {
      return { ok: false, reason: '船体受损严重，需先维修' };
    }
    if (!this.isCrewed(crewMgr)) {
      return { ok: false, reason: '船员不足，需要 ' + this.crewNeed() + ' 人' };
    }
    if (this.fuel < 20) {
      return { ok: false, reason: '燃料不足（至少 20）' };
    }
    return { ok: true };
  }
  // 燃料是否够跑 distanceAU
  fuelFor(distanceAU) {
    return Math.ceil(distanceAU * this.fuelPerAU());
  }
  // 受损
  damage(amount, cause) {
    this.hull = Math.max(0, this.hull - amount);
    if (this.hull <= 0) {
      this.status = SHIP_STATUS.LOST;
      return { destroyed: true, cause: cause || '船体损毁' };
    }
    if (this.hull < this.maxHull() * 0.5 && this.status === SHIP_STATUS.DOCKED) {
      this.status = SHIP_STATUS.DAMAGED;
    }
    return { destroyed: false, hull: this.hull };
  }
  repairCost() {
    const missing = this.maxHull() - this.hull;
    return {
      steel: Math.ceil(missing * 0.5),
      rare: Math.ceil(missing * 0.1),
      sec: Math.ceil(missing * 30),
    };
  }
  // 装货（返回实际装入量）
  loadCargo(resKey, amount) {
    const def = DS_RESOURCES[resKey];
    if (!def) return 0;
    const freeMass = this.cargoFree();
    const maxByMass = Math.floor(freeMass / def.mass);
    const take = Math.min(amount, maxByMass);
    if (take <= 0) return 0;
    this.cargo[resKey] = (this.cargo[resKey] || 0) + take;
    return take;
  }
  unloadCargo(resKey, amount) {
    const have = this.cargo[resKey] || 0;
    const take = Math.min(have, amount == null ? have : amount);
    if (take <= 0) return 0;
    this.cargo[resKey] -= take;
    if (this.cargo[resKey] <= 0) delete this.cargo[resKey];
    return take;
  }
  unloadAll() {
    const out = this.cargo;
    this.cargo = {};
    return out;
  }
  summary() {
    return {
      id: this.id, name: this.name, type: this.type,
      typeName: this.def().name, icon: this.def().icon,
      level: this.level, status: this.status,
      statusLabel: SHIP_STATUS_LABEL[this.status],
      hull: Math.round(this.hull), maxHull: this.maxHull(),
      fuel: Math.round(this.fuel), maxFuel: this.maxFuel(),
      cargoUsed: this.cargoUsed(), maxCargo: this.maxCargo(),
      cargo: this.cargo, cargoValue: this.cargoValue(),
      speed: this.speedAUPerHour(), crew: this.crewIds.length,
      crewNeed: this.crewNeed(), location: this.location,
      destination: this.destination, progress: dsv3Round(this.progress, 3),
      upgrades: this.upgrades, trips: this.tripsCompleted,
      distanceFlownAU: dsv3Round(this.distanceFlownAU, 2),
    };
  }
  save() {
    return {
      id: this.id, type: this.type, name: this.name, level: this.level,
      blueprint: this.blueprint,
      status: this.status, hull: this.hull, fuel: this.fuel,
      cargo: this.cargo, crewIds: this.crewIds, upgrades: this.upgrades,
      location: this.location, destination: this.destination,
      mission: this.mission, progress: this.progress,
      tripTotalSec: this.tripTotalSec, tripElapsedSec: this.tripElapsedSec,
      builtAt: this.builtAt, distanceFlownAU: this.distanceFlownAU,
      tripsCompleted: this.tripsCompleted, repairUntil: this.repairUntil,
      upgradeJob: this.upgradeJob, buildJob: this.buildJob,
    };
  }
  static load(data) {
    return new DSShip(data || {});
  }
}

// ================= 船坞 / 舰队管理器 =================
class DSFleetManager {
  constructor() {
    this.ships = [];            // DSShip[]
    this.buildQueue = [];       // {shipId, type, endsAt, cost}
    this.upgradeQueue = [];     // {shipId, key, level, endsAt}
    this.wrecks = [];           // 损毁记录 [{shipName, type, cause, t, location}]
    this.totalBuilt = 0;
    this.totalLost = 0;
    this.totalDistanceAU = 0;
    this.totalTrips = 0;
    this.log = [];
    this._seq = 0;
  }

  count() { return this.ships.length; }
  get(id) {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].id === id) return this.ships[i];
    }
    return null;
  }
  byType(type) {
    return this.ships.filter(function (s) { return s.type === type; });
  }
  byStatus(status) {
    return this.ships.filter(function (s) { return s.status === status; });
  }
  dockedShips() { return this.byStatus(SHIP_STATUS.DOCKED); }
  activeShips() {
    return this.ships.filter(function (s) {
      return s.status === SHIP_STATUS.EN_ROUTE || s.status === SHIP_STATUS.MINING ||
        s.status === SHIP_STATUS.EXPEDITION || s.status === SHIP_STATUS.RETURNING;
    });
  }
  totalCargoValue() {
    let v = 0;
    for (let i = 0; i < this.ships.length; i++) v += this.ships[i].cargoValue();
    return v;
  }

  // —— 建造 ——
  // 建造时间受船坞等级加速；费用一次性扣除；同一时间最多 3 艘在建。
  buildCost(type, dockLevel) {
    const def = SHIP_TYPES[type];
    if (!def) return null;
    const discount = dockLevel >= 3 ? 0.85 : (dockLevel === 2 ? 0.92 : 1);
    const cost = {};
    for (const k in def.cost) cost[k] = Math.ceil(def.cost[k] * discount);
    return cost;
  }
  buildTimeSec(type, dockLevel) {
    const def = SHIP_TYPES[type];
    const speedMul = dockLevel >= 3 ? 1.6 : (dockLevel === 2 ? 1.25 : 1);
    return Math.round(def.buildSec / speedMul);
  }
  canBuild(type, stock, dockLevel, nowSec) {
    if (!SHIP_TYPES[type]) return { ok: false, reason: '未知船型' };
    if (this.buildQueue.length >= 3) {
      return { ok: false, reason: '船坞已满，同时最多建造 3 艘' };
    }
    const cost = this.buildCost(type, dockLevel);
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    return { ok: true, cost: cost };
  }
  startBuild(type, stock, dockLevel, nowSec, name, blueprint) {
    const check = this.canBuild(type, stock, dockLevel, nowSec);
    if (!check.ok) return check;
    // 蓝图变体：造价按蓝图调整
    let cost = check.cost;
    if (blueprint) {
      const bpCost = dsBlueprintCost(type, blueprint);
      if (!bpCost) return { ok: false, reason: '未知蓝图变体' };
      for (const k in bpCost) {
        if ((stock[k] || 0) < bpCost[k]) {
          return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + bpCost[k] };
        }
      }
      cost = bpCost;
    }
    for (const k in cost) stock[k] -= cost[k];
    const ship = new DSShip({
      type: type, name: name || undefined, blueprint: blueprint || null,
      status: SHIP_STATUS.BUILDING,
      buildJob: { endsAt: nowSec + this.buildTimeSec(type, dockLevel) },
    });
    this.ships.push(ship);
    this.buildQueue.push({ shipId: ship.id, type: type, endsAt: ship.buildJob.endsAt });
    this.totalBuilt++;
    this._log(nowSec, '开始建造 ' + ship.name + '（' + SHIP_TYPES[type].name +
      (blueprint ? ' · ' + blueprint : '') + '）');
    return { ok: true, ship: ship, endsAt: ship.buildJob.endsAt, cost: cost };
  }
  _completeBuild(entry, nowSec) {
    const ship = this.get(entry.shipId);
    if (!ship) return;
    ship.status = SHIP_STATUS.DOCKED;
    ship.buildJob = null;
    ship.hull = ship.maxHull();
    ship.fuel = ship.maxFuel();
    this._log(nowSec, ship.name + ' 建造完成，已停靠轨道站');
  }

  // —— 升级 ——
  upgradeCost(ship, key) {
    const def = SHIP_UPGRADES[key];
    if (!def) return null;
    const next = (ship.upgrades[key] || 0) + 1;
    if (next > def.maxLevel) return null;
    return def.costPerLevel(next, ship.type);
  }
  canUpgrade(ship, key, stock) {
    const def = SHIP_UPGRADES[key];
    if (!def) return { ok: false, reason: '未知升级' };
    if (ship.status !== SHIP_STATUS.DOCKED) {
      return { ok: false, reason: '飞船必须停靠才能升级' };
    }
    const cur = ship.upgrades[key] || 0;
    if (cur >= def.maxLevel) return { ok: false, reason: '已满级' };
    if (ship.upgradeJob) return { ok: false, reason: '已有升级在进行' };
    const cost = this.upgradeCost(ship, key);
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    return { ok: true, cost: cost, nextLevel: cur + 1 };
  }
  startUpgrade(shipId, key, stock, nowSec) {
    const ship = this.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    const check = this.canUpgrade(ship, key, stock);
    if (!check.ok) return check;
    for (const k in check.cost) stock[k] -= check.cost[k];
    const def = SHIP_UPGRADES[key];
    const endsAt = nowSec + def.timeSecPerLevel(check.nextLevel);
    ship.status = SHIP_STATUS.UPGRADING;
    ship.upgradeJob = { key: key, level: check.nextLevel, endsAt: endsAt };
    this.upgradeQueue.push({ shipId: ship.id, key: key, level: check.nextLevel, endsAt: endsAt });
    return { ok: true, endsAt: endsAt };
  }
  _completeUpgrade(entry, nowSec) {
    const ship = this.get(entry.shipId);
    if (!ship) return;
    ship.upgrades[entry.key] = entry.level;
    ship.upgradeJob = null;
    ship.status = SHIP_STATUS.DOCKED;
    // 护盾升级直接补满船体
    if (entry.key === 'shield') ship.hull = ship.maxHull();
    this._log(nowSec, ship.name + ' 的' + SHIP_UPGRADES[entry.key].name +
      '升至 Lv' + entry.level);
  }

  // —— 维修 ——
  startRepair(shipId, stock, nowSec, discount) {
    const ship = this.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    if (ship.status !== SHIP_STATUS.DOCKED && ship.status !== SHIP_STATUS.DAMAGED) {
      return { ok: false, reason: '飞船必须停靠才能维修' };
    }
    if (ship.hull >= ship.maxHull()) return { ok: false, reason: '船体完好，无需维修' };
    const cost = ship.repairCost();
    const d = (discount == null ? 0 : discount);
    const steelCost = Math.ceil(cost.steel * (1 - d));
    const rareCost = Math.ceil(cost.rare * (1 - d));
    if ((stock.steel || 0) < steelCost) return { ok: false, reason: '钢材不足，需要 ' + steelCost };
    if ((stock.rare || 0) < rareCost) return { ok: false, reason: '稀土不足，需要 ' + rareCost };
    stock.steel -= steelCost;
    stock.rare -= rareCost;
    ship.status = SHIP_STATUS.REPAIRING;
    ship.repairUntil = nowSec + cost.sec;
    return { ok: true, endsAt: ship.repairUntil, cost: { steel: steelCost, rare: rareCost } };
  }

  // —— 加油 ——
  refuel(shipId, stock, amount) {
    const ship = this.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    const need = ship.maxFuel() - ship.fuel;
    if (need <= 0) return { ok: false, reason: '油箱已满' };
    const take = Math.min(need, amount == null ? need : amount, stock.fuel || 0);
    if (take <= 0) return { ok: false, reason: '燃料库存不足' };
    stock.fuel -= take;
    ship.fuel += take;
    return { ok: true, fueled: take };
  }

  // —— 配员 ——
  assignCrew(shipId, crewIds, crewMgr) {
    const ship = this.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    if (ship.status !== SHIP_STATUS.DOCKED) {
      return { ok: false, reason: '飞船必须停靠才能调整船员' };
    }
    // 先释放旧船员
    for (let i = 0; i < ship.crewIds.length; i++) {
      const c = crewMgr ? crewMgr.get(ship.crewIds[i]) : null;
      if (c && c.status === CREW_STATUS.ASSIGNED) {
        c.status = CREW_STATUS.IDLE;
        c.assignment = null;
      }
    }
    ship.crewIds = [];
    for (let i = 0; i < crewIds.length; i++) {
      const c = crewMgr ? crewMgr.get(crewIds[i]) : null;
      if (!c) continue;
      if (!c.isAvailable()) continue;
      c.status = CREW_STATUS.ASSIGNED;
      c.assignment = { kind: 'ship', id: ship.id };
      ship.crewIds.push(c.id);
    }
    return { ok: true, assigned: ship.crewIds.length, need: ship.crewNeed() };
  }
  // 飞船返航/损毁后释放船员回待命
  releaseCrew(ship, crewMgr, nowSec) {
    if (!crewMgr) return;
    for (let i = 0; i < ship.crewIds.length; i++) {
      const c = crewMgr.get(ship.crewIds[i]);
      if (c && (c.status === CREW_STATUS.ASSIGNED || c.status === CREW_STATUS.EXPEDITION)) {
        c.status = CREW_STATUS.IDLE;
        c.assignment = null;
      }
    }
  }

  // —— 出航 / 返航 ——
  // distanceAU: 航程；mission: 任务描述；speedMul: 通讯阵列等加速
  depart(shipId, destination, distanceAU, mission, crewMgr, nowSec, speedMul) {
    const ship = this.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    const check = ship.canDepart(crewMgr);
    if (!check.ok) return check;
    const fuelNeed = ship.fuelFor(distanceAU);
    if (ship.fuel < fuelNeed) {
      return { ok: false, reason: '燃料不足，航程需要 ' + fuelNeed + ' 燃料，当前 ' + Math.round(ship.fuel) };
    }
    ship.fuel -= fuelNeed;
    const speed = ship.speedAUPerHour() * (speedMul || 1);
    const totalSec = (distanceAU / speed) * 3600;
    ship.status = SHIP_STATUS.EN_ROUTE;
    ship.destination = destination;
    ship.mission = mission || null;
    ship.progress = 0;
    ship.tripTotalSec = totalSec;
    ship.tripElapsedSec = 0;
    ship.distanceFlownAU += distanceAU;
    this.totalDistanceAU += distanceAU;
    // 船员进入远征/航行状态
    if (crewMgr) {
      for (let i = 0; i < ship.crewIds.length; i++) {
        const c = crewMgr.get(ship.crewIds[i]);
        if (c) {
          c.status = (mission && mission.kind === SHIP_MISSION_KIND.EXPEDITION)
            ? CREW_STATUS.EXPEDITION : CREW_STATUS.ASSIGNED;
          c.hoursFlown += totalSec / 3600;
        }
      }
    }
    return { ok: true, ship: ship, totalSec: totalSec, fuelUsed: fuelNeed };
  }
  // 返航：从当前位置回火星轨道
  returnHome(shipId, distanceAU, crewMgr, nowSec, speedMul) {
    const ship = this.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    const fuelNeed = ship.fuelFor(distanceAU);
    if (ship.fuel < fuelNeed) {
      return { ok: false, reason: '燃料不足以返航，需要 ' + fuelNeed + '，当前 ' + Math.round(ship.fuel) };
    }
    ship.fuel -= fuelNeed;
    const speed = ship.speedAUPerHour() * (speedMul || 1);
    const totalSec = (distanceAU / speed) * 3600;
    ship.status = SHIP_STATUS.RETURNING;
    ship.destination = 'mars-orbit';
    ship.progress = 0;
    ship.tripTotalSec = totalSec;
    ship.tripElapsedSec = 0;
    return { ok: true, ship: ship, totalSec: totalSec };
  }

  // —— 损毁 ——
  destroyShip(ship, cause, nowSec, crewMgr) {
    ship.status = SHIP_STATUS.LOST;
    this.wrecks.push({
      shipName: ship.name, type: ship.type, cause: cause,
      t: Math.round(nowSec), location: ship.location,
      cargoLost: ship.cargoValue(),
    });
    this.totalLost++;
    this.releaseCrew(ship, crewMgr, nowSec);
    // 货物随船沉没
    ship.cargo = {};
    this._log(nowSec, ship.name + ' 损毁：' + cause);
    return ship;
  }

  // —— 每 tick 推进 ——
  update(dtSec, nowSec, stock, crewMgr, hooks) {
    hooks = hooks || {};
    const events = [];
    // 1. 建造完成
    for (let i = this.buildQueue.length - 1; i >= 0; i--) {
      if (nowSec >= this.buildQueue[i].endsAt) {
        this._completeBuild(this.buildQueue[i], nowSec);
        events.push({ kind: 'build-complete', shipId: this.buildQueue[i].shipId });
        this.buildQueue.splice(i, 1);
      }
    }
    // 2. 升级完成
    for (let i = this.upgradeQueue.length - 1; i >= 0; i--) {
      if (nowSec >= this.upgradeQueue[i].endsAt) {
        this._completeUpgrade(this.upgradeQueue[i], nowSec);
        events.push({ kind: 'upgrade-complete', shipId: this.upgradeQueue[i].shipId });
        this.upgradeQueue.splice(i, 1);
      }
    }
    // 3. 维修完成
    for (let i = 0; i < this.ships.length; i++) {
      const s = this.ships[i];
      if (s.status === SHIP_STATUS.REPAIRING && nowSec >= s.repairUntil) {
        s.hull = s.maxHull();
        s.status = SHIP_STATUS.DOCKED;
        s.repairUntil = 0;
        events.push({ kind: 'repair-complete', shipId: s.id });
        this._log(nowSec, s.name + ' 维修完成，船体恢复');
      }
    }
    // 4. 航行推进
    for (let i = 0; i < this.ships.length; i++) {
      const s = this.ships[i];
      if (s.status === SHIP_STATUS.EN_ROUTE || s.status === SHIP_STATUS.RETURNING) {
        s.tripElapsedSec += dtSec;
        if (s.tripTotalSec > 0) {
          s.progress = dsv3Clamp(s.tripElapsedSec / s.tripTotalSec, 0, 1);
        }
        if (s.tripElapsedSec >= s.tripTotalSec) {
          // 抵达：交给 hooks.onArrive 处理（采矿/远征/货运各不相同）
          s.progress = 1;
          if (hooks.onArrive) {
            hooks.onArrive(s, nowSec, events);
          } else {
            s.location = s.destination;
            s.destination = null;
            s.status = SHIP_STATUS.DOCKED;
            s.tripsCompleted++;
            this.totalTrips++;
          }
        }
      }
    }
    // 5. 维护费：每小时按船级扣钢（停靠也扣，建造中不扣）
    const hours = dtSec / 3600;
    let upkeep = 0;
    for (let i = 0; i < this.ships.length; i++) {
      const s = this.ships[i];
      if (s.status === SHIP_STATUS.BUILDING || s.status === SHIP_STATUS.LOST) continue;
      upkeep += s.def().upkeepSteelPerHour * s.level * hours;
    }
    upkeep = Math.round(upkeep * 10) / 10;
    if (upkeep > 0 && stock) {
      if ((stock.steel || 0) >= upkeep) stock.steel -= upkeep;
      else stock.steel = 0;
    }
    return { events: events, upkeep: upkeep };
  }

  _log(t, text) {
    this.log.push({ t: Math.round(t), text: text });
    if (this.log.length > 200) this.log.splice(0, this.log.length - 200);
  }

  summary() {
    const byType = {};
    for (let i = 0; i < SHIP_TYPE_KEYS.length; i++) {
      const t = SHIP_TYPE_KEYS[i];
      byType[t] = { name: SHIP_TYPES[t].name, total: this.byType(t).length };
    }
    return {
      total: this.ships.length,
      byType: byType,
      building: this.buildQueue.length,
      upgrading: this.upgradeQueue.length,
      active: this.activeShips().length,
      docked: this.dockedShips().length,
      cargoValue: this.totalCargoValue(),
      totalBuilt: this.totalBuilt,
      totalLost: this.totalLost,
      totalDistanceAU: dsv3Round(this.totalDistanceAU, 2),
      totalTrips: this.totalTrips,
      wrecks: this.wrecks.length,
    };
  }

  save() {
    return {
      ships: this.ships.map(function (s) { return s.save(); }),
      buildQueue: this.buildQueue,
      upgradeQueue: this.upgradeQueue,
      wrecks: this.wrecks,
      totalBuilt: this.totalBuilt,
      totalLost: this.totalLost,
      totalDistanceAU: this.totalDistanceAU,
      totalTrips: this.totalTrips,
      log: this.log,
      seq: this._seq,
    };
  }
  load(data) {
    if (!data) return;
    this.ships = (data.ships || []).map(function (s) { return DSShip.load(s); });
    this.buildQueue = data.buildQueue || [];
    this.upgradeQueue = data.upgradeQueue || [];
    this.wrecks = data.wrecks || [];
    this.totalBuilt = data.totalBuilt || 0;
    this.totalLost = data.totalLost || 0;
    this.totalDistanceAU = data.totalDistanceAU || 0;
    this.totalTrips = data.totalTrips || 0;
    this.log = data.log || [];
    this._seq = data.seq || 0;
  }
}

// ================= 火星轨道站 =================
// 环形空间站：每环 12 槽，最多 3 环；模块分 10 种 × 3 级。
// 电力平衡是硬约束：净电力 <0 时全站生产 ×0.4；船员是软约束：
// 缺员模块效率 ×0.5。另有轨道采集（太阳风 / 碎片回收）与随机事件。
class DSOrbitalStation {
  constructor() {
    this.rings = 1;                 // 已建环数
    this.slots = [];                // [{ring, slot, moduleId, level, hp, builtAt}]
    this.name = '火星轨道站';
    this.foundedAt = 0;
    this.storage = {};              // 轨道站本地仓库（与深空账本共享 stock 时可为空）
    this.storageCapBase = 2000;     // 基础仓储（质量单位）
    this.harvest = { solarWind: false, debris: false }; // 采集器开关
    this.harvestAccum = { solarWind: 0, debris: 0 };
    this.events = [];               // 站内事件记录
    this.totalProduced = {};        // 累计产量
    this.totalConsumed = {};        // 累计消耗
    this.meteorShield = 0;          // 防御炮塔提供的减伤（派生）
    this.lastEventAt = 0;
    this.powerShortageHours = 0;    // 累计缺电小时（用于统计）
  }

  slotCount() { return this.rings * DS_TUNE_V3.stationSlotsPerRing; }
  usedSlots() { return this.slots.length; }
  freeSlots() { return this.slotCount() - this.slots.length; }

  moduleAt(ring, slot) {
    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i].ring === ring && this.slots[i].slot === slot) return this.slots[i];
    }
    return null;
  }
  modulesOf(moduleId) {
    return this.slots.filter(function (s) { return s.moduleId === moduleId; });
  }
  moduleLevel(moduleId) {
    // 同种模块取最高等级（船坞加速、通讯加速等按最高级算）
    let best = 0;
    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i].moduleId === moduleId && this.slots[i].level > best) {
        best = this.slots[i].level;
      }
    }
    return best;
  }
  moduleCount(moduleId) { return this.modulesOf(moduleId).length; }

  // —— 建造 ——
  buildCost(moduleId, level) {
    const def = STATION_MODULES[moduleId];
    if (!def) return null;
    const mul = level === 1 ? 1 : (level === 2 ? 2.2 : 4.5);
    const cost = {};
    for (const k in def.cost) cost[k] = Math.ceil(def.cost[k] * mul);
    return cost;
  }
  canBuild(moduleId, stock, elevatorDiscount) {
    const def = STATION_MODULES[moduleId];
    if (!def) return { ok: false, reason: '未知模块' };
    if (this.freeSlots() <= 0) {
      return { ok: false, reason: '轨道站槽位已满，扩建新环或拆除旧模块' };
    }
    const cost = this.buildCost(moduleId, 1);
    const d = elevatorDiscount ? 0.7 : 1;
    for (const k in cost) {
      const need = Math.ceil(cost[k] * d);
      if ((stock[k] || 0) < need) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + need };
      }
    }
    return { ok: true, cost: cost, discount: d };
  }
  build(moduleId, stock, nowSec, elevatorDiscount) {
    const check = this.canBuild(moduleId, stock, elevatorDiscount);
    if (!check.ok) return check;
    for (const k in check.cost) {
      stock[k] -= Math.ceil(check.cost[k] * check.discount);
    }
    // 找第一个空槽
    let ring = 1, slot = 0, found = false;
    for (let r = 1; r <= this.rings && !found; r++) {
      for (let s = 0; s < DS_TUNE_V3.stationSlotsPerRing; s++) {
        if (!this.moduleAt(r, s)) { ring = r; slot = s; found = true; break; }
      }
    }
    const def = STATION_MODULES[moduleId];
    const entry = {
      ring: ring, slot: slot, moduleId: moduleId, level: 1,
      hp: 100, maxHp: 100, builtAt: nowSec,
    };
    this.slots.push(entry);
    this._event(nowSec, '在第 ' + ring + ' 环建造了' + def.name + ' Lv1');
    return { ok: true, entry: entry, ring: ring, slot: slot };
  }
  // 升级模块：费用 = 建造成本（下一级倍率），耗时即时（简化：直接升级）
  canUpgrade(ring, slot, stock) {
    const entry = this.moduleAt(ring, slot);
    if (!entry) return { ok: false, reason: '该槽位是空的' };
    const def = STATION_MODULES[entry.moduleId];
    if (entry.level >= def.maxLevel) return { ok: false, reason: '已满级' };
    const cost = this.buildCost(entry.moduleId, entry.level + 1);
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    return { ok: true, cost: cost, nextLevel: entry.level + 1 };
  }
  upgrade(ring, slot, stock, nowSec) {
    const check = this.canUpgrade(ring, slot, stock);
    if (!check.ok) return check;
    for (const k in check.cost) stock[k] -= check.cost[k];
    const entry = this.moduleAt(ring, slot);
    entry.level = check.nextLevel;
    entry.maxHp = 100 * entry.level;
    entry.hp = entry.maxHp;
    const def = STATION_MODULES[entry.moduleId];
    this._event(nowSec, def.name + ' 升至 Lv' + entry.level);
    return { ok: true, entry: entry };
  }
  // 拆除：返还 40% 建造成本（按当前等级）
  demolish(ring, slot, stock, nowSec) {
    const entry = this.moduleAt(ring, slot);
    if (!entry) return { ok: false, reason: '该槽位是空的' };
    const def = STATION_MODULES[entry.moduleId];
    const cost = this.buildCost(entry.moduleId, entry.level);
    const refund = {};
    for (const k in cost) {
      refund[k] = Math.floor(cost[k] * 0.4);
      stock[k] = (stock[k] || 0) + refund[k];
    }
    this.slots.splice(this.slots.indexOf(entry), 1);
    this._event(nowSec, '拆除了' + def.name + ' Lv' + entry.level + '，返还部分材料');
    return { ok: true, refund: refund };
  }
  // 扩建新环：需要上一环已建 ≥8 个模块
  ringCost(nextRing) {
    return {
      steel: 2500 * nextRing,
      rare: 800 * nextRing,
      tech: 200 * nextRing,
      titanium: nextRing >= 3 ? 200 : 0,
    };
  }
  canExpandRing(stock) {
    if (this.rings >= DS_TUNE_V3.stationMaxRings) {
      return { ok: false, reason: '已达最大环数（' + DS_TUNE_V3.stationMaxRings + ' 环）' };
    }
    const filled = this.slots.filter(function (s) { return s.ring === this.rings; }.bind(this)).length;
    if (filled < 8) {
      return { ok: false, reason: '扩建需要当前环已建 ≥8 个模块（当前 ' + filled + '）' };
    }
    const cost = this.ringCost(this.rings + 1);
    for (const k in cost) {
      if (cost[k] > 0 && (stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    return { ok: true, cost: cost };
  }
  expandRing(stock, nowSec) {
    const check = this.canExpandRing(stock);
    if (!check.ok) return check;
    for (const k in check.cost) {
      if (check.cost[k] > 0) stock[k] -= check.cost[k];
    }
    this.rings++;
    this._event(nowSec, '轨道站第 ' + this.rings + ' 环合龙，新增 12 个槽位');
    return { ok: true, rings: this.rings };
  }

  // 电力与人力 ——
  powerBalance() {
    let prod = 0, use = 0;
    for (let i = 0; i < this.slots.length; i++) {
      const def = STATION_MODULES[this.slots[i].moduleId];
      let p = def.power[this.slots[i].level - 1] || 0;
      // 太阳天气影响太阳能帆
      if (this.slots[i].moduleId === 'solar' && p > 0) {
        p = Math.round(p * (this.weatherSolarMul || 1));
      }
      if (p >= 0) prod += p; else use += -p;
    }
    return { prod: prod, use: use, net: prod - use };
  }
  crewNeed() {
    let need = 0;
    for (let i = 0; i < this.slots.length; i++) {
      const def = STATION_MODULES[this.slots[i].moduleId];
      need += def.crew[this.slots[i].level - 1] || 0;
    }
    return need;
  }
  crewCap() {
    let cap = 10; // 基础 10 人
    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i].moduleId === 'habitat') {
        const def = STATION_MODULES.habitat;
        cap += def.crewCap[this.slots[i].level - 1] || 0;
      }
    }
    return cap;
  }
  storageCap() {
    let mul = 1;
    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i].moduleId === 'tank') {
        const def = STATION_MODULES.tank;
        mul = Math.max(mul, def.storageMul[this.slots[i].level - 1] || 1);
      }
    }
    return Math.round(this.storageCapBase * mul);
  }
  dockLevel() { return this.moduleLevel('dock'); }
  commsLevel() { return this.moduleLevel('comms'); }
  travelTimeMul() {
    const lv = this.commsLevel();
    if (!lv) return 1;
    return STATION_MODULES.comms.travelTimeMul[lv - 1];
  }
  scanBonus() {
    let b = 0;
    const cl = this.commsLevel();
    if (cl) b += STATION_MODULES.comms.scanBonus[cl - 1];
    const ol = this.moduleLevel('observatory');
    if (ol) b += 0.1 * ol;
    return b;
  }
  buildSpeedMul() {
    const lv = this.dockLevel();
    if (!lv) return 1;
    return STATION_MODULES.dock.buildSpeedMul[lv - 1];
  }
  repairDiscount() {
    const lv = this.dockLevel();
    if (!lv) return 0;
    return STATION_MODULES.dock.repairDiscount[lv - 1];
  }
  hazardReduction() {
    const lv = this.moduleLevel('defense');
    if (!lv) return 0;
    return STATION_MODULES.defense.hazardReduction[lv - 1];
  }
  moraleRegenPerHour() {
    let r = 0;
    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i].moduleId === 'habitat') {
        r += STATION_MODULES.habitat.moraleRegen[this.slots[i].level - 1] || 0;
      }
    }
    return r;
  }

  // —— 每小时生产结算 ——
  // 返回 {produced, consumed, powerShortage, efficiency}
  // efficiency: 电力与缺员综合效率
  producePerHour(assignedCrewCount, moraleAvg) {
    const power = this.powerBalance();
    const powerShort = power.net < 0;
    let eff = powerShort ? DS_TUNE_V3.stationPowerShortageMul : 1;
    const need = this.crewNeed();
    if (need > 0 && assignedCrewCount < need) {
      // 缺员按比例降效，最低 0.5
      eff *= Math.max(0.5, assignedCrewCount / need);
    }
    // 士气加成：平均士气 70 为基准，±20%
    if (moraleAvg) {
      eff *= 0.8 + (moraleAvg / 100) * 0.4;
    }
    // 生态穹顶不存在于轨道站；指挥加成来自科研舱联动：每级科研舱 +2% 全站
    const labLv = this.moduleLevel('lab');
    eff *= 1 + 0.02 * labLv;
    eff = dsv3Clamp(eff, 0.1, 1.6);

    const produced = {};
    const consumed = {};
    for (let i = 0; i < this.slots.length; i++) {
      const entry = this.slots[i];
      const def = STATION_MODULES[entry.moduleId];
      // 各模块产出
      if (def.prod) {
        for (const k in def.prod) {
          const arr = def.prod[k];
          const perHour = arr[entry.level - 1] || 0;
          if (perHour > 0) {
            produced[k] = (produced[k] || 0) + perHour * eff;
          }
        }
      }
      // 精炼厂：消耗矿石（取自深空账本的 water/steel 原矿概念：用 steel+rare 作原料）
      if (entry.moduleId === 'refinery') {
        const rate = def.refineRate[entry.level - 1] || 0;
        consumed.steel = (consumed.steel || 0) + rate * 2 * eff;
        consumed.rare = (consumed.rare || 0) + rate * 0.5 * eff;
        produced.titanium = (produced.titanium || 0) + rate * 0.6 * eff;
        produced.platinum = (produced.platinum || 0) + rate * 0.15 * eff;
      }
    }
    // 轨道采集
    if (this.harvest.solarWind && this.moduleLevel('solar') >= 2) {
      produced.helium3 = (produced.helium3 || 0) + ORBITAL_HARVEST.solarWind.baseRate.helium3 * eff;
      produced.tech = (produced.tech || 0) + ORBITAL_HARVEST.solarWind.baseRate.tech * eff;
    }
    if (this.harvest.debris && this.moduleLevel('dock') >= 1) {
      produced.steel = (produced.steel || 0) + ORBITAL_HARVEST.debris.baseRate.steel * eff;
      produced.rare = (produced.rare || 0) + ORBITAL_HARVEST.debris.baseRate.rare * eff;
    }
    // 天文台：发现进度（不直接产资源，交给 manager 的发现池）
    if (this.moduleLevel('observatory') > 0) {
      const lv = this.moduleLevel('observatory');
      produced.__discovery = (STATION_MODULES.observatory.discoveryPerHour[lv - 1] || 0) * eff;
    }
    return { produced: produced, consumed: consumed, powerShortage: powerShort, efficiency: dsv3Round(eff, 3), power: power };
  }

  // 把一小时的产量写入账本（带仓储上限与原料不足保护）
  applyProduction(stock, hours, assignedCrewCount, moraleAvg, nowSec) {
    const perHour = this.producePerHour(assignedCrewCount, moraleAvg);
    const produced = {};
    const consumed = {};
    // 消耗先算：原料不足则按比例缩减精炼产出
    let refineScale = 1;
    if (perHour.consumed.steel) {
      const need = perHour.consumed.steel * hours;
      if ((stock.steel || 0) < need) refineScale = Math.max(0, (stock.steel || 0) / need);
    }
    if (perHour.consumed.rare) {
      const need = perHour.consumed.rare * hours;
      if ((stock.rare || 0) < need) {
        refineScale = Math.min(refineScale, Math.max(0, (stock.rare || 0) / need));
      }
    }
    for (const k in perHour.consumed) {
      const amt = perHour.consumed[k] * hours * refineScale;
      stock[k] = Math.max(0, (stock[k] || 0) - amt);
      consumed[k] = dsv3Round(amt, 1);
      this.totalConsumed[k] = (this.totalConsumed[k] || 0) + amt;
    }
    for (const k in perHour.produced) {
      if (k === '__discovery') continue;
      let amt = perHour.produced[k] * hours;
      // 精炼产物按 refineScale 缩减
      if (k === 'titanium' || k === 'platinum') amt *= refineScale;
      stock[k] = (stock[k] || 0) + amt;
      produced[k] = dsv3Round(amt, 1);
      this.totalProduced[k] = (this.totalProduced[k] || 0) + amt;
    }
    if (perHour.powerShortage) this.powerShortageHours += hours;
    return {
      produced: produced, consumed: consumed,
      powerShortage: perHour.powerShortage,
      efficiency: perHour.efficiency,
      discovery: (perHour.produced.__discovery || 0) * hours,
      refineScale: dsv3Round(refineScale, 2),
    };
  }

  // —— 轨道站随机事件（微陨石 / 太阳风 / 设备故障）——
  // 由 manager 每 tick 按概率触发；这里只做结算。
  rollEvent(nowSec, rng) {
    rng = rng || Math.random;
    const dtMin = (nowSec - this.lastEventAt) / 60;
    if (dtMin < 90) return null; // 最少 90 分钟一遇
    const roll = rng();
    const reduction = this.hazardReduction();
    this.lastEventAt = nowSec;
    if (roll < 0.35) {
      // 微陨石撞击：随机一个模块掉血
      if (!this.slots.length) return null;
      const target = this.slots[Math.floor(rng() * this.slots.length)];
      const dmg = Math.round(30 * (1 - reduction) + rng() * 20);
      target.hp = Math.max(0, target.hp - dmg);
      const def = STATION_MODULES[target.moduleId];
      let text = '微陨石撞击' + def.name + '，船体受损 -' + dmg;
      if (target.hp <= 0) {
        // 模块损毁：降一级（1 级则直接报废）
        if (target.level > 1) {
          target.level--;
          target.hp = target.maxHp = 100 * target.level;
          text += '，模块降级至 Lv' + target.level;
        } else {
          this.slots.splice(this.slots.indexOf(target), 1);
          text += '，模块报废';
        }
      }
      this._event(nowSec, text);
      return { kind: 'meteor', text: text, target: target };
    }
    if (roll < 0.60) {
      // 太阳风：太阳能帆过载，1 小时内电力产出减半（用标记，manager 读）
      this.solarWindDownUntil = nowSec + 3600;
      const text = '太阳风暴来袭，太阳能帆过载停机 1 小时';
      this._event(nowSec, text);
      return { kind: 'solar-wind', text: text };
    }
    if (roll < 0.80) {
      // 设备故障：随机模块停机 2 小时（效率惩罚由 manager 的 disabledUntil 读）
      if (!this.slots.length) return null;
      const target = this.slots[Math.floor(rng() * this.slots.length)];
      target.disabledUntil = nowSec + 2 * 3600;
      const def = STATION_MODULES[target.moduleId];
      const text = def.name + ' 设备故障，停机 2 小时';
      this._event(nowSec, text);
      return { kind: 'malfunction', text: text, target: target };
    }
    // 轨道碎片富集：下一次碎片回收产量 ×3（1 小时）
    this.debrisBoostUntil = nowSec + 3600;
    const text = '轨道碎片带过境，碎片回收效率提升 1 小时';
    this._event(nowSec, text);
    return { kind: 'debris-surge', text: text };
  }

  _event(t, text) {
    this.events.push({ t: Math.round(t), text: text });
    if (this.events.length > 120) this.events.splice(0, this.events.length - 120);
  }

  summary() {
    const power = this.powerBalance();
    const byModule = {};
    for (let i = 0; i < this.slots.length; i++) {
      const m = this.slots[i].moduleId;
      byModule[m] = (byModule[m] || 0) + 1;
    }
    return {
      name: this.name, rings: this.rings,
      slotsUsed: this.slots.length, slotsTotal: this.slotCount(),
      powerProd: power.prod, powerUse: power.use, powerNet: power.net,
      crewNeed: this.crewNeed(), crewCap: this.crewCap(),
      storageCap: this.storageCap(),
      modules: byModule,
      totalProduced: this.totalProduced,
      powerShortageHours: Math.round(this.powerShortageHours),
      harvest: this.harvest,
    };
  }

  save() {
    return {
      rings: this.rings, slots: this.slots, name: this.name,
      foundedAt: this.foundedAt, harvest: this.harvest,
      harvestAccum: this.harvestAccum, events: this.events,
      totalProduced: this.totalProduced, totalConsumed: this.totalConsumed,
      lastEventAt: this.lastEventAt,
      powerShortageHours: this.powerShortageHours,
    };
  }
  load(data) {
    if (!data) return;
    this.rings = data.rings || 1;
    this.slots = data.slots || [];
    this.name = data.name || '火星轨道站';
    this.foundedAt = data.foundedAt || 0;
    this.harvest = data.harvest || { solarWind: false, debris: false };
    this.harvestAccum = data.harvestAccum || { solarWind: 0, debris: 0 };
    this.events = data.events || [];
    this.totalProduced = data.totalProduced || {};
    this.totalConsumed = data.totalConsumed || {};
    this.lastEventAt = data.lastEventAt || 0;
    this.powerShortageHours = data.powerShortageHours || 0;
  }
}

// ================= 月球基地 =================
// 5 级基地，每级解锁建筑槽；8 种建筑；生命维持是硬约束：
// 水与氧不足时居民士气暴跌、产量减半；氦-3 是核心产出。
// 地月运输靠运输船往返，发射场缩短航程。
class DSLunarBase {
  constructor() {
    this.founded = false;
    this.foundedAt = 0;
    this.level = 0;                 // 0=未建立，1–5
    this.name = '月球基地';
    this.buildings = [];            // [{buildingId, level, builtAt}]
    this.population = 0;            // 常驻居民
    this.popCapExtra = 0;           // 额外人口容量（事件奖励）
    this.lifeSupport = { water: 100, oxygen: 100 }; // 生命维持储备（小时数概念：100=满）
    this.morale = 70;
    this.totalHe3 = 0;
    this.totalProduced = {};
    this.totalConsumed = {};
    this.events = [];
    this.nightCycle = 0;            // 月夜周期 0–1（0.5 以下为月夜，太阳能减半）
    this.supplyRuns = 0;            // 补给次数
    this.lastSupplyAt = 0;
  }

  slotsTotal() {
    if (this.level <= 0) return 0;
    return MOON_BASE_LEVELS[this.level - 1].slots;
  }
  slotsUsed() { return this.buildings.length; }
  freeSlots() { return this.slotsTotal() - this.slotsUsed(); }
  buildingLevel(buildingId) {
    let best = 0;
    for (let i = 0; i < this.buildings.length; i++) {
      if (this.buildings[i].buildingId === buildingId && this.buildings[i].level > best) {
        best = this.buildings[i].level;
      }
    }
    return best;
  }
  buildingCount(buildingId) {
    let n = 0;
    for (let i = 0; i < this.buildings.length; i++) {
      if (this.buildings[i].buildingId === buildingId) n++;
    }
    return n;
  }
  popCap() {
    let cap = 0;
    for (let i = 0; i < this.buildings.length; i++) {
      if (this.buildings[i].buildingId === 'habitatDome') {
        cap += MOON_BUILDINGS.habitatDome.popCap[this.buildings[i].level - 1] || 0;
      }
    }
    return cap + this.popCapExtra;
  }

  // —— 建立 / 升级基地 ——
  foundCost() {
    return MOON_BASE_LEVELS[0].cost;
  }
  canFound(stock, shipReady) {
    if (this.founded) return { ok: false, reason: '月球基地已建立' };
    if (!shipReady) return { ok: false, reason: '需要一艘停靠的运输船执行建立任务' };
    const cost = this.foundCost();
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    return { ok: true, cost: cost };
  }
  found(stock, nowSec) {
    const check = this.canFound(stock, true);
    if (!check.ok) return check;
    for (const k in check.cost) stock[k] -= check.cost[k];
    this.founded = true;
    this.foundedAt = nowSec;
    this.level = 1;
    this.population = 12;
    this._event(nowSec, '月球基地建立：首批 12 名居民登陆');
    return { ok: true, level: 1 };
  }
  upgradeCost() {
    if (this.level <= 0 || this.level >= 5) return null;
    return MOON_BASE_LEVELS[this.level].cost; // 下一级
  }
  canUpgrade(stock) {
    if (!this.founded) return { ok: false, reason: '月球基地尚未建立' };
    if (this.level >= 5) return { ok: false, reason: '已达最高级' };
    const cost = this.upgradeCost();
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    return { ok: true, cost: cost, nextLevel: this.level + 1 };
  }
  upgrade(stock, nowSec) {
    const check = this.canUpgrade(stock);
    if (!check.ok) return check;
    for (const k in check.cost) stock[k] -= check.cost[k];
    this.level = check.nextLevel;
    this._event(nowSec, '月球基地升级至 Lv' + this.level + '（' +
      MOON_BASE_LEVELS[this.level - 1].name + '），建筑槽 +' +
      (MOON_BASE_LEVELS[this.level - 1].slots - MOON_BASE_LEVELS[this.level - 2].slots) + '）');
    return { ok: true, level: this.level };
  }

  // —— 建筑 ——
  buildCost(buildingId, level) {
    const def = MOON_BUILDINGS[buildingId];
    if (!def) return null;
    const mul = [1, 2.2, 4.5, 8, 13][level - 1] || 1;
    const cost = {};
    for (const k in def.cost) cost[k] = Math.ceil(def.cost[k] * mul);
    return cost;
  }
  canBuild(buildingId, stock) {
    const def = MOON_BUILDINGS[buildingId];
    if (!def) return { ok: false, reason: '未知建筑' };
    if (!this.founded) return { ok: false, reason: '月球基地尚未建立' };
    if (def.unlockBaseLevel > this.level) {
      return { ok: false, reason: '需要基地 Lv' + def.unlockBaseLevel };
    }
    if (this.freeSlots() <= 0) {
      return { ok: false, reason: '建筑槽已满，升级基地以扩建' };
    }
    const cost = this.buildCost(buildingId, 1);
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    return { ok: true, cost: cost };
  }
  build(buildingId, stock, nowSec) {
    const check = this.canBuild(buildingId, stock);
    if (!check.ok) return check;
    for (const k in check.cost) stock[k] -= check.cost[k];
    this.buildings.push({ buildingId: buildingId, level: 1, builtAt: nowSec });
    this._event(nowSec, '月球建造了' + MOON_BUILDINGS[buildingId].name + ' Lv1');
    return { ok: true };
  }
  canUpgradeBuilding(index, stock) {
    const b = this.buildings[index];
    if (!b) return { ok: false, reason: '找不到该建筑' };
    const def = MOON_BUILDINGS[b.buildingId];
    if (b.level >= def.maxLevel) return { ok: false, reason: '已满级' };
    const cost = this.buildCost(b.buildingId, b.level + 1);
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    return { ok: true, cost: cost, nextLevel: b.level + 1 };
  }
  upgradeBuilding(index, stock, nowSec) {
    const check = this.canUpgradeBuilding(index, stock);
    if (!check.ok) return check;
    for (const k in check.cost) stock[k] -= check.cost[k];
    const b = this.buildings[index];
    b.level = check.nextLevel;
    this._event(nowSec, MOON_BUILDINGS[b.buildingId].name + ' 升至 Lv' + b.level);
    return { ok: true, building: b };
  }
  demolishBuilding(index, stock, nowSec) {
    const b = this.buildings[index];
    if (!b) return { ok: false, reason: '找不到该建筑' };
    const def = MOON_BUILDINGS[b.buildingId];
    const cost = this.buildCost(b.buildingId, b.level);
    const refund = {};
    for (const k in cost) {
      refund[k] = Math.floor(cost[k] * 0.4);
      stock[k] = (stock[k] || 0) + refund[k];
    }
    this.buildings.splice(index, 1);
    this._event(nowSec, '拆除了' + def.name + ' Lv' + b.level);
    return { ok: true, refund: refund };
  }

  // —— 电力 / 人力 ——
  powerBalance() {
    let prod = 0, use = 0;
    for (let i = 0; i < this.buildings.length; i++) {
      const b = this.buildings[i];
      const def = MOON_BUILDINGS[b.buildingId];
      let p = def.power[b.level - 1] || 0;
      // 月夜：太阳能场减半
      if (b.buildingId === 'solarFarm' && this.nightCycle < 0.5) p = Math.round(p * 0.5);
      if (p >= 0) prod += p; else use += -p;
    }
    return { prod: prod, use: use, net: prod - use };
  }
  crewNeed() {
    let need = 0;
    for (let i = 0; i < this.buildings.length; i++) {
      const b = this.buildings[i];
      const def = MOON_BUILDINGS[b.buildingId];
      need += def.crew[b.level - 1] || 0;
    }
    return need;
  }
  tripTimeMul() {
    const lv = this.buildingLevel('launchpad');
    if (!lv) return 1;
    return MOON_BUILDINGS.launchpad.tripTimeMul[lv - 1];
  }
  cargoBonus() {
    const lv = this.buildingLevel('launchpad');
    if (!lv) return 0;
    return MOON_BUILDINGS.launchpad.cargoBonus[lv - 1];
  }

  // —— 每小时生产结算 ——
  // lifeSupport: 生命维持储备按小时消耗；水/氧不足 → 士气与产量惩罚。
  producePerHour(assignedCrewCount) {
    const power = this.powerBalance();
    const powerShort = power.net < 0;
    let eff = powerShort ? 0.4 : 1;
    const need = this.crewNeed();
    if (need > 0 && assignedCrewCount < need) {
      eff *= Math.max(0.5, assignedCrewCount / need);
    }
    // 士气：70 基准，±25%
    eff *= 0.75 + (this.morale / 100) * 0.5;
    // 生命维持：储备低于 30 时产量减半
    const lsLow = this.lifeSupport.water < 30 || this.lifeSupport.oxygen < 30;
    if (lsLow) eff *= 0.5;
    eff = dsv3Clamp(eff, 0.1, 1.5);

    const produced = {};
    const consumed = {};
    for (let i = 0; i < this.buildings.length; i++) {
      const b = this.buildings[i];
      const def = MOON_BUILDINGS[b.buildingId];
      if (def.prod) {
        for (const k in def.prod) {
          const perHour = def.prod[k][b.level - 1] || 0;
          if (perHour > 0) produced[k] = (produced[k] || 0) + perHour * eff;
        }
      }
      if (b.buildingId === 'reactor') {
        const u = def.uraniumPerHour[b.level - 1] || 0;
        consumed.uranium = (consumed.uranium || 0) + u;
      }
    }
    // 生命维持消耗：每人每小时 1 水 + 0.5 氧（折算进账本消耗）
    const pop = this.population;
    consumed.water = (consumed.water || 0) + pop * 0.2;
    consumed.oxygen = (consumed.oxygen || 0) + pop * 0.1;
    return { produced: produced, consumed: consumed, powerShortage: powerShort, efficiency: dsv3Round(eff, 3), power: power, lsLow: lsLow };
  }

  applyProduction(stock, hours, assignedCrewCount, nowSec) {
    const perHour = this.producePerHour(assignedCrewCount);
    const produced = {};
    const consumed = {};
    // 铀不足：反应堆停机，电力重算（简化：铀不够则反应堆产电失效，本小时效率已按停机前算，
    // 这里只扣铀、不额外惩罚；电力缺口在下一小时体现）
    let uraniumScale = 1;
    if (perHour.consumed.uranium) {
      const need = perHour.consumed.uranium * hours;
      if ((stock.uranium || 0) < need) {
        uraniumScale = Math.max(0, (stock.uranium || 0) / need);
      }
    }
    for (const k in perHour.consumed) {
      let amt = perHour.consumed[k] * hours;
      if (k === 'uranium') amt *= uraniumScale;
      const have = stock[k] || 0;
      const taken = Math.min(have, amt);
      stock[k] = have - taken;
      consumed[k] = dsv3Round(taken, 1);
      this.totalConsumed[k] = (this.totalConsumed[k] || 0) + taken;
      // 生命维持储备：水/氧短缺时储备下降
      if (k === 'water' && taken < amt) this.lifeSupport.water = Math.max(0, this.lifeSupport.water - 10 * hours);
      if (k === 'oxygen' && taken < amt) this.lifeSupport.oxygen = Math.max(0, this.lifeSupport.oxygen - 10 * hours);
    }
    for (const k in perHour.produced) {
      const amt = perHour.produced[k] * hours;
      stock[k] = (stock[k] || 0) + amt;
      produced[k] = dsv3Round(amt, 1);
      this.totalProduced[k] = (this.totalProduced[k] || 0) + amt;
      if (k === 'helium3') this.totalHe3 += amt;
      // 水培与温室产出补充生命维持储备
      if (k === 'water') this.lifeSupport.water = dsv3Clamp(this.lifeSupport.water + amt * 0.5, 0, 100);
      if (k === 'oxygen') this.lifeSupport.oxygen = dsv3Clamp(this.lifeSupport.oxygen + amt * 0.5, 0, 100);
    }
    // 人口自然增长：士气 >60 且有空位时缓慢增长
    if (this.morale > 60 && this.population < this.popCap()) {
      this.population += 0.02 * hours * (this.morale / 100);
      this.population = Math.min(this.popCap(), this.population);
    }
    // 士气漂移：生命维持差 → 士气跌；电力足、食物足 → 士气涨
    if (perHour.lsLow) this.morale = dsv3Clamp(this.morale - 1.5 * hours, 0, 100);
    else if (!perHour.powerShortage) this.morale = dsv3Clamp(this.morale + 0.4 * hours, 0, 100);
    // 月夜周期推进（月昼夜 ≈ 29.5 天，这里按游戏内小时推进）
    this.nightCycle = (this.nightCycle + hours / (29.5 * 24)) % 1;
    return {
      produced: produced, consumed: consumed,
      powerShortage: perHour.powerShortage, efficiency: perHour.efficiency,
      lsLow: perHour.lsLow, morale: Math.round(this.morale),
      population: Math.floor(this.population),
    };
  }

  // —— 补给 ——
  // 运输船送来水/食物/氧：直接补库存与生命维持储备。
  receiveSupply(cargo, nowSec) {
    let water = 0, food = 0, oxygen = 0;
    if (cargo.water) water = cargo.water;
    if (cargo.food) food = cargo.food;
    if (cargo.oxygen) oxygen = cargo.oxygen;
    this.lifeSupport.water = dsv3Clamp(this.lifeSupport.water + water * 0.2, 0, 100);
    this.lifeSupport.oxygen = dsv3Clamp(this.lifeSupport.oxygen + oxygen * 0.2, 0, 100);
    this.supplyRuns++;
    this.lastSupplyAt = nowSec;
    this.morale = dsv3Clamp(this.morale + 3, 0, 100);
    this._event(nowSec, '收到补给船：水 +' + water + '，食物 +' + food + '，氧气 +' + oxygen);
    return { water: water, food: food, oxygen: oxygen };
  }

  // —— 月球事件 ——
  rollEvent(nowSec, rng) {
    rng = rng || Math.random;
    const roll = rng();
    if (roll < 0.3) {
      // 月震：随机建筑受损（降级风险低，只扣耐久概念：这里直接扣士气与产量由 manager 读标记）
      this.moonquakeUntil = nowSec + 6 * 3600;
      this.morale = dsv3Clamp(this.morale - 8, 0, 100);
      this._event(nowSec, '月震！基地士气 -8，6 小时内产量下降');
      return { kind: 'moonquake', text: '月震来袭' };
    }
    if (roll < 0.55) {
      // 发现富矿脉：氦-3 矿场 24 小时产量 +50%
      this.richVeinUntil = nowSec + 24 * 3600;
      this._event(nowSec, '勘探队发现富矿脉，氦-3 产量提升 24 小时');
      return { kind: 'rich-vein', text: '发现富矿脉' };
    }
    if (roll < 0.75) {
      // 移民潮：人口 +10（不超过容量）
      const add = Math.min(10, Math.max(0, this.popCap() - Math.floor(this.population)));
      this.population += add;
      this._event(nowSec, '一批新移民抵达月球，人口 +' + add);
      return { kind: 'immigrants', text: '移民潮', added: add };
    }
    // 太阳耀斑：太阳能场 12 小时过载（产电翻倍后停机，简化：产电 +50% 12 小时）
    this.flareUntil = nowSec + 12 * 3600;
    this._event(nowSec, '太阳耀斑：太阳能场超载运行，产电提升 12 小时');
    return { kind: 'flare', text: '太阳耀斑' };
  }

  _event(t, text) {
    this.events.push({ t: Math.round(t), text: text });
    if (this.events.length > 120) this.events.splice(0, this.events.length - 120);
  }

  summary() {
    const power = this.founded ? this.powerBalance() : { prod: 0, use: 0, net: 0 };
    const byBuilding = {};
    for (let i = 0; i < this.buildings.length; i++) {
      const b = this.buildings[i].buildingId;
      byBuilding[b] = (byBuilding[b] || 0) + 1;
    }
    return {
      founded: this.founded, level: this.level,
      levelName: this.level > 0 ? MOON_BASE_LEVELS[this.level - 1].name : '未建立',
      slotsUsed: this.buildings.length, slotsTotal: this.slotsTotal(),
      population: Math.floor(this.population), popCap: this.popCap(),
      morale: Math.round(this.morale),
      lifeSupport: { water: Math.round(this.lifeSupport.water), oxygen: Math.round(this.lifeSupport.oxygen) },
      powerProd: power.prod, powerUse: power.use, powerNet: power.net,
      crewNeed: this.crewNeed(),
      buildings: byBuilding,
      totalHe3: Math.round(this.totalHe3),
      supplyRuns: this.supplyRuns,
      nightCycle: dsv3Round(this.nightCycle, 2),
    };
  }

  save() {
    return {
      founded: this.founded, foundedAt: this.foundedAt, level: this.level,
      name: this.name, buildings: this.buildings,
      population: this.population, popCapExtra: this.popCapExtra,
      lifeSupport: this.lifeSupport, morale: this.morale,
      totalHe3: this.totalHe3, totalProduced: this.totalProduced,
      totalConsumed: this.totalConsumed, events: this.events,
      nightCycle: this.nightCycle, supplyRuns: this.supplyRuns,
      lastSupplyAt: this.lastSupplyAt,
    };
  }
  load(data) {
    if (!data) return;
    this.founded = !!data.founded;
    this.foundedAt = data.foundedAt || 0;
    this.level = data.level || 0;
    this.name = data.name || '月球基地';
    this.buildings = data.buildings || [];
    this.population = data.population || 0;
    this.popCapExtra = data.popCapExtra || 0;
    this.lifeSupport = data.lifeSupport || { water: 100, oxygen: 100 };
    this.morale = data.morale != null ? data.morale : 70;
    this.totalHe3 = data.totalHe3 || 0;
    this.totalProduced = data.totalProduced || {};
    this.totalConsumed = data.totalConsumed || {};
    this.events = data.events || [];
    this.nightCycle = data.nightCycle || 0;
    this.supplyRuns = data.supplyRuns || 0;
    this.lastSupplyAt = data.lastSupplyAt || 0;
  }
}

// ================= 小行星带 =================
// 确定性生成：同一存档种子 → 同一批小行星（位置/类型/储量固定），
// 玩家勘测后逐个解锁详情。认领后派采矿船前往，储量按开采量递减。
class DSAsteroid {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || 'AST-000';
    this.name = opts.name || this.id;
    this.type = opts.type || 'S';
    this.zone = opts.zone || 'middle';
    this.au = opts.au || 1.8;              // 距火星 AU
    this.angle = opts.angle || 0;           // 轨道角（度），用于地图
    this.sizeKm = opts.sizeKm || 1;         // 直径 km
    this.reserves = opts.reserves || 1000;  // 剩余储量（吨）
    this.maxReserves = opts.maxReserves || this.reserves;
    this.richness = opts.richness || 1;     // 富集系数
    this.discovered = !!opts.discovered;
    this.claimed = !!opts.claimed;
    this.claimedBy = opts.claimedBy || null;
    this.minedTotal = opts.minedTotal || 0;
    this.hazard = opts.hazard || 0.1;
    this.artifactChance = opts.artifactChance || 0;
    this.surveyLevel = opts.surveyLevel || 0; // 勘测等级 0–3（越高储量估计越准）
  }

  typeDef() { return ASTEROID_TYPES[this.type]; }
  zoneDef() {
    for (let i = 0; i < BELT_ZONES.length; i++) {
      if (BELT_ZONES[i].id === this.zone) return BELT_ZONES[i];
    }
    return BELT_ZONES[1];
  }
  depleted() { return this.reserves <= 0; }
  reserveRatio() { return this.maxReserves > 0 ? this.reserves / this.maxReserves : 0; }
  // 估计储量（勘测等级越低误差越大）
  estimatedReserves(rng) {
    if (this.surveyLevel >= 3) return Math.round(this.reserves);
    const err = [0.5, 0.3, 0.15][this.surveyLevel] || 0.5;
    const f = 1 + ((rng || Math.random)() * 2 - 1) * err;
    return Math.max(0, Math.round(this.reserves * f));
  }
  // 一次采矿作业的产出构成（按类型成分 × 富集度 × 吨数）
  compositionFor(tons) {
    const comp = this.typeDef().composition;
    const out = {};
    for (const k in comp) {
      out[k] = dsv3Round(tons * comp[k] * this.richness * this.zoneDef().richness, 1);
    }
    return out;
  }
  // 开采 tons 吨：扣储量，返回实际产出
  mine(tons) {
    const actual = Math.min(tons, this.reserves);
    this.reserves = dsv3Round(this.reserves - actual, 1);
    this.minedTotal += actual;
    const out = this.compositionFor(actual);
    // V 型小行星有概率出遗迹碎片
    if (this.type === 'V' && Math.random() < (this.artifactChance || 0.02)) {
      out.artifact = (out.artifact || 0) + 1;
    }
    return { mined: actual, out: out, depleted: this.depleted() };
  }
  summary() {
    return {
      id: this.id, name: this.name, type: this.type,
      typeName: this.typeDef().name, zone: this.zone,
      zoneName: this.zoneDef().name, au: this.au,
      sizeKm: this.sizeKm, reserves: Math.round(this.reserves),
      maxReserves: Math.round(this.maxReserves),
      reserveRatio: dsv3Round(this.reserveRatio(), 2),
      richness: dsv3Round(this.richness, 2),
      discovered: this.discovered, claimed: this.claimed,
      minedTotal: Math.round(this.minedTotal),
      hazard: this.hazard, surveyLevel: this.surveyLevel,
    };
  }
  save() {
    return {
      id: this.id, name: this.name, type: this.type, zone: this.zone,
      au: this.au, angle: this.angle, sizeKm: this.sizeKm,
      reserves: this.reserves, maxReserves: this.maxReserves,
      richness: this.richness, discovered: this.discovered,
      claimed: this.claimed, claimedBy: this.claimedBy,
      minedTotal: this.minedTotal, hazard: this.hazard,
      artifactChance: this.artifactChance, surveyLevel: this.surveyLevel,
    };
  }
  static load(data) { return new DSAsteroid(data || {}); }
}

// 命名小行星（真实小行星带命名风格的虚构名录，供玩家认领的目标池）
const ASTEROID_NAMES = [
  '谷神星碎片-01', '灶神星-04', '智神星-07', '婚神星-11', '健神星-13',
  '艾罗斯-17', '爱神星-19', '席尔瓦-23', '欧罗巴-29', '卡利斯托-31',
  '伊奥-37', '盖尼米得-41', '泰坦-43', '恩克拉多斯-47', '忒提斯-53',
  '瑞亚-59', '伊阿珀托斯-61', '福柏-67', '海卫一-71', '冥卫一-73',
  '阋神星-79', '鸟神星-83', '妊神星-89', '塞德娜-97', '夸奥尔-101',
  '伐楼拿-103', '厄里斯-107', '欧姆-109', '混沌-113', '创神星-127',
  '小行星-433', '小行星-951', '小行星-243', '小行星-253', '小行星-216',
  '小行星-704', '小行星-511', '小行星-324', '小行星-16', '小行星-2',
  '小行星-4', '小行星-10', '小行星-15', '小行星-3', '小行星-7',
  '小行星-8', '小行星-9', '小行星-12', '小行星-18', '小行星-21',
  '小行星-24', '小行星-27', '小行星-30', '小行星-33', '小行星-36',
  '小行星-39', '小行星-42', '小行星-45', '小行星-48', '小行星-51',
];

class DSBeltManager {
  constructor(seed) {
    this.seed = seed || 'starport-belt';
    this.asteroids = [];        // DSAsteroid[]
    this.claims = [];           // {asteroidId, shipId, startedAt, status}
    this.surveyProgress = 0;    // 勘测进度 0–1（发现新小行星）
    this.discoveredCount = 0;
    this.totalMined = 0;
    this.totalTrips = 0;
    this.generated = false;
    this.log = [];
  }

  // 生成小行星带：确定性（种子固定）+ 120 颗
  generate() {
    if (this.generated) return this.asteroids;
    const rng = dsv3Mulberry32(dsv3HashSeed(this.seed));
    const list = [];
    for (let i = 0; i < 120; i++) {
      const zone = dsv3WeightedPick(rng, [['inner', 3], ['middle', 5], ['outer', 2]]);
      const zoneDef = BELT_ZONES.find(function (z) { return z.id === zone; });
      const type = dsv3WeightedPick(rng, [['C', 3], ['S', 4], ['M', 2], ['V', 1]]);
      const typeDef = ASTEROID_TYPES[type];
      const sizeKm = dsv3Round(0.5 + rng() * 12, 1);
      const reserves = Math.round((200 + rng() * 4800) * (sizeKm / 6) * zoneDef.richness);
      const name = i < ASTEROID_NAMES.length ? ASTEROID_NAMES[i] : dsv3Id('AST', i + 1);
      list.push(new DSAsteroid({
        id: dsv3Id('AST', i + 1),
        name: name,
        type: type,
        zone: zone,
        au: dsv3Round(zoneDef.au + (rng() - 0.5) * 0.5, 2),
        angle: Math.round(rng() * 360),
        sizeKm: sizeKm,
        reserves: reserves,
        maxReserves: reserves,
        richness: dsv3Round(0.7 + rng() * 0.9, 2),
        discovered: i < 12,      // 开局已发现 12 颗
        claimed: false,
        hazard: dsv3Round(zoneDef.hazard + typeDef.hazard * 0.5, 2),
        artifactChance: typeDef.artifactChance || 0,
        surveyLevel: i < 12 ? 1 : 0,
      }));
    }
    this.asteroids = list;
    this.discoveredCount = list.filter(function (a) { return a.discovered; }).length;
    this.generated = true;
    return list;
  }

  get(id) {
    for (let i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].id === id) return this.asteroids[i];
    }
    return null;
  }
  discovered() {
    return this.asteroids.filter(function (a) { return a.discovered; });
  }
  undiscovered() {
    return this.asteroids.filter(function (a) { return !a.discovered; });
  }
  claimable() {
    return this.discovered().filter(function (a) {
      return !a.claimed && !a.depleted();
    });
  }
  activeClaims() {
    return this.claims.filter(function (c) { return c.status === 'active'; });
  }

  // —— 勘测 ——
  // 勘测进度满 1 → 发现一颗新小行星（按距离排序取最近的未发现）
  addSurvey(amount, nowSec) {
    this.surveyProgress += amount;
    const found = [];
    while (this.surveyProgress >= 1) {
      this.surveyProgress -= 1;
      const next = this.undiscovered().sort(function (a, b) { return a.au - b.au; })[0];
      if (!next) break;
      next.discovered = true;
      next.surveyLevel = 1;
      this.discoveredCount++;
      found.push(next);
      this._log(nowSec, '勘测发现新小行星：' + next.name + '（' + next.typeDef().name + '，' + next.zoneDef().name + '）');
    }
    return found;
  }
  // 对已发现小行星做深度勘测：提升勘测等级（更准的储量估计）
  surveyAsteroid(asteroidId, stock, nowSec) {
    const a = this.get(asteroidId);
    if (!a) return { ok: false, reason: '找不到该小行星' };
    if (!a.discovered) return { ok: false, reason: '尚未发现该小行星' };
    if (a.surveyLevel >= 3) return { ok: false, reason: '已完成深度勘测' };
    const cost = { tech: 10 * (a.surveyLevel + 1), fuel: 20 };
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    for (const k in cost) stock[k] -= cost[k];
    a.surveyLevel++;
    return { ok: true, level: a.surveyLevel, estimated: a.estimatedReserves() };
  }

  // —— 认领 ——
  canClaim(asteroidId) {
    const a = this.get(asteroidId);
    if (!a) return { ok: false, reason: '找不到该小行星' };
    if (!a.discovered) return { ok: false, reason: '尚未发现该小行星' };
    if (a.claimed) return { ok: false, reason: '已被认领' };
    if (a.depleted()) return { ok: false, reason: '该小行星已采空' };
    if (this.activeClaims().length >= DS_TUNE_V3.beltMaxClaims) {
      return { ok: false, reason: '认领已达上限（' + DS_TUNE_V3.beltMaxClaims + ' 颗）' };
    }
    return { ok: true, asteroid: a };
  }
  claim(asteroidId, shipId, nowSec) {
    const check = this.canClaim(asteroidId);
    if (!check.ok) return check;
    const a = check.asteroid;
    a.claimed = true;
    a.claimedBy = shipId;
    this.claims.push({ asteroidId: asteroidId, shipId: shipId, startedAt: nowSec, status: 'active' });
    this._log(nowSec, '认领小行星 ' + a.name + '（' + a.typeDef().name + '）');
    return { ok: true, asteroid: a };
  }
  releaseClaim(asteroidId, nowSec) {
    const a = this.get(asteroidId);
    if (a) { a.claimed = false; a.claimedBy = null; }
    for (let i = 0; i < this.claims.length; i++) {
      if (this.claims[i].asteroidId === asteroidId && this.claims[i].status === 'active') {
        this.claims[i].status = 'released';
      }
    }
    return { ok: true };
  }

  // —— 采矿作业结算 ——
  // 采矿船在目标停留 miningHours 小时后返航时调用：
  // 按船采矿速率 × 时间 × 船员效率，扣储量、给矿石。
  miningYield(asteroid, ship, miningHours, crewEfficiency) {
    if (!asteroid || asteroid.depleted()) return { mined: 0, out: {}, depleted: true };
    const rate = ship.miningRatePerHour() * (crewEfficiency || 1);
    const want = rate * miningHours;
    const result = asteroid.mine(want);
    this.totalMined += result.mined;
    return result;
  }
  // 采矿事故判定：危险度 × 船员/护盾修正
  miningRisk(asteroid, ship, crewAvgSkill) {
    let risk = asteroid.hazard * 0.5;
    risk *= ship.riskMul();
    risk *= 1 - dsv3Clamp((crewAvgSkill || 50) / 100, 0, 0.5) * 0.5;
    return dsv3Clamp(risk, 0.01, 0.6);
  }

  // —— 带内事件 ——
  rollBeltEvent(nowSec, rng) {
    rng = rng || Math.random;
    const roll = rng();
    if (roll < 0.4) {
      // 发现富矿：随机一颗已发现小行星富集度 +0.2
      const pool = this.discovered().filter(function (a) { return !a.depleted(); });
      if (!pool.length) return null;
      const a = pool[Math.floor(rng() * pool.length)];
      a.richness = dsv3Round(a.richness + 0.2, 2);
      this._log(nowSec, a.name + ' 发现高品位矿脉，富集度提升');
      return { kind: 'rich-vein', asteroid: a };
    }
    if (roll < 0.7) {
      // 尘暴：带内航行风险上升（manager 读标记）
      this.dustStormUntil = nowSec + 12 * 3600;
      this._log(nowSec, '小行星带尘暴，12 小时内航行风险上升');
      return { kind: 'dust-storm', text: '尘暴' };
    }
    // 海盗出没：下一班采矿船可能被劫（manager 读标记）
    this.pirateUntil = nowSec + 24 * 3600;
    this._log(nowSec, '深空海盗在小行星带出没，24 小时内采矿船需警戒');
    return { kind: 'pirates', text: '海盗出没' };
  }

  summary() {
    const byType = {};
    for (let i = 0; i < this.asteroids.length; i++) {
      const a = this.asteroids[i];
      if (!a.discovered) continue;
      byType[a.type] = (byType[a.type] || 0) + 1;
    }
    let totalReserves = 0;
    for (let i = 0; i < this.asteroids.length; i++) {
      totalReserves += this.asteroids[i].reserves;
    }
    return {
      total: this.asteroids.length,
      discovered: this.discoveredCount,
      claimable: this.claimable().length,
      activeClaims: this.activeClaims().length,
      byType: byType,
      totalReserves: Math.round(totalReserves),
      totalMined: Math.round(this.totalMined),
      totalTrips: this.totalTrips,
      surveyProgress: dsv3Round(this.surveyProgress, 2),
    };
  }

  _log(t, text) {
    this.log.push({ t: Math.round(t), text: text });
    if (this.log.length > 200) this.log.splice(0, this.log.length - 200);
  }

  save() {
    return {
      seed: this.seed,
      asteroids: this.asteroids.map(function (a) { return a.save(); }),
      claims: this.claims,
      surveyProgress: this.surveyProgress,
      discoveredCount: this.discoveredCount,
      totalMined: this.totalMined,
      totalTrips: this.totalTrips,
      generated: this.generated,
      log: this.log,
    };
  }
  load(data) {
    if (!data) return;
    this.seed = data.seed || this.seed;
    this.asteroids = (data.asteroids || []).map(function (a) { return DSAsteroid.load(a); });
    this.claims = data.claims || [];
    this.surveyProgress = data.surveyProgress || 0;
    this.discoveredCount = data.discoveredCount || 0;
    this.totalMined = data.totalMined || 0;
    this.totalTrips = data.totalTrips || 0;
    this.generated = !!data.generated;
    this.log = data.log || [];
    if (!this.generated) this.generate();
  }
}

// ================= 远征任务定义 =================
// 18 个远征任务：每个有目标、难度、时长、前置（船型/船员/科技）、
// 多阶段判定（按技能检定）、奖励与风险。奖励按难度缩放，
// 事故率 = 基础 + 难度加成 − 船员/护盾修正。
const EXPEDITION_DEFS = [
  {
    id: 'exp-ruin-alpha',
    name: '遗迹 α 初探',
    kind: 'explore',
    icon: '🏛️',
    desc: '前往火卫一背面的古代遗迹外围，确认入口结构并带回样本。',
    difficulty: 1,
    durationHours: 48,
    distanceAU: 0.4,
    requires: { shipType: 'explorer', crew: { pilot: 1, scientist: 1 }, minSkill: 30, tech: null },
    stages: [
      { name: '接近遗迹', check: 'navigation', dc: 30, success: '顺利抵达遗迹外围。', fail: '导航偏差，多耗 12 小时。' },
      { name: '外围扫描', check: 'survey', dc: 35, success: '扫描到入口能量读数。', fail: '扫描受干扰，样本不完整。' },
      { name: '样本回收', check: 'research', dc: 30, success: '带回完整的遗迹样本。', fail: '样本容器破损，收获减半。' },
    ],
    rewards: { artifact: 2, tech: 40, steel: 50 },
    rewardMul: 1.0,
    risk: 0.08,
    ruinUnlock: 'alpha',
    repeatable: false,
  },
  {
    id: 'exp-ruin-beta',
    name: '遗迹 β 深潜',
    kind: 'explore',
    icon: '🌀',
    desc: '深入小行星带深处的遗迹 β，内部重力异常，信号时断时续。',
    difficulty: 3,
    durationHours: 96,
    distanceAU: 1.8,
    requires: { shipType: 'explorer', crew: { pilot: 1, scientist: 2, engineer: 1 }, minSkill: 50, tech: 't-exp-2' },
    stages: [
      { name: '穿越碎石区', check: 'evasion', dc: 50, success: '灵巧地穿过碎石区。', fail: '船体擦碰，-20 船体。' },
      { name: '重力异常区', check: 'navigation', dc: 55, success: '稳住航线，穿过异常区。', fail: '重力紊乱，船员受伤风险上升。' },
      { name: '核心大厅', check: 'research', dc: 60, success: '解读了核心大厅的星图。', fail: '只带回部分星图碎片。' },
    ],
    rewards: { artifact: 5, tech: 120, platinum: 30 },
    rewardMul: 1.2,
    risk: 0.18,
    ruinUnlock: 'beta',
    repeatable: false,
  },
  {
    id: 'exp-ruin-gamma',
    name: '遗迹 γ 远征',
    kind: 'explore',
    icon: '👁️',
    desc: '太阳系边缘的遗迹 γ，传说中的「守望者」信号源头，往返需两周。',
    difficulty: 5,
    durationHours: 336,
    distanceAU: 4.5,
    requires: { shipType: 'explorer', crew: { pilot: 2, scientist: 2, engineer: 1, medic: 1 }, minSkill: 70, tech: 't-exp-3' },
    stages: [
      { name: '长途巡航', check: 'endurance', dc: 60, success: '船员状态良好，抵达外围。', fail: '长期航行士气 -15。' },
      { name: '信号追踪', check: 'survey', dc: 70, success: '锁定信号源坐标。', fail: '信号丢失，浪费 48 小时。' },
      { name: '守望者大厅', check: 'research', dc: 75, success: '获得守望者科技核心。', fail: '核心自毁，只带回残片。' },
      { name: '紧急撤离', check: 'evasion', dc: 65, success: '全身而退。', fail: '撤离时船体 -40。' },
    ],
    rewards: { artifact: 10, tech: 300, helium3: 50, platinum: 80 },
    rewardMul: 1.5,
    risk: 0.30,
    ruinUnlock: 'gamma',
    repeatable: false,
  },
  {
    id: 'exp-belt-survey',
    name: '小行星带普查',
    kind: 'survey',
    icon: '🗺️',
    desc: '系统勘测小行星带中段，绘制矿脉分布图，发现新的可采目标。',
    difficulty: 1,
    durationHours: 72,
    distanceAU: 1.5,
    requires: { shipType: 'explorer', crew: { pilot: 1, scientist: 1 }, minSkill: 25, tech: null },
    stages: [
      { name: '带内巡航', check: 'navigation', dc: 25, success: '巡航路线顺利。', fail: '偏离航线，多耗 12 小时。' },
      { name: '矿脉扫描', check: 'survey', dc: 30, success: '发现 2 颗新小行星。', fail: '只发现 1 颗新小行星。' },
    ],
    rewards: { tech: 30, steel: 80 },
    rewardMul: 1.0,
    risk: 0.06,
    surveyBonus: 2,
    repeatable: true,
  },
  {
    id: 'exp-he3-rush',
    name: '氦-3 紧急采集',
    kind: 'harvest',
    icon: '⚛️',
    desc: '月球氦-3 库存告急，派采矿船去富氦小行星紧急采集一批回来。',
    difficulty: 2,
    durationHours: 120,
    distanceAU: 1.2,
    requires: { shipType: 'miner', crew: { pilot: 1, miner: 2, engineer: 1 }, minSkill: 40, tech: null },
    stages: [
      { name: '定位富氦矿', check: 'survey', dc: 40, success: '找到高品位氦矿。', fail: '矿脉品位一般，产量 -30%。' },
      { name: '连续开采', check: 'mining', dc: 45, success: '满载氦-3 矿石。', fail: '采矿激光过热，产量 -30%。' },
    ],
    rewards: { helium3: 60, titanium: 40 },
    rewardMul: 1.0,
    risk: 0.12,
    repeatable: true,
  },
  {
    id: 'exp-rescue-derelict',
    name: '救援失联货船',
    kind: 'rescue',
    icon: '🆘',
    desc: '一艘货船在火星—月球航线上失联，最后信号来自一片碎石区。',
    difficulty: 2,
    durationHours: 60,
    distanceAU: 0.8,
    requires: { shipType: 'transport', crew: { pilot: 1, engineer: 1, medic: 1 }, minSkill: 35, tech: null },
    stages: [
      { name: '信号定位', check: 'survey', dc: 35, success: '定位到失联货船。', fail: '多花 24 小时才定位。' },
      { name: '对接救援', check: 'repair', dc: 40, success: '修复货船动力，拖回轨道站。', fail: '只能救回船员，货船放弃。' },
      { name: '伤员救治', check: 'medicine', dc: 35, success: '全部船员获救，无人伤亡。', fail: '1 名船员重伤。' },
    ],
    rewards: { steel: 200, rare: 60, tech: 50 },
    rewardMul: 1.1,
    risk: 0.14,
    rescueBonus: true,
    repeatable: true,
  },
  {
    id: 'exp-comet-intercept',
    name: '彗星拦截采样',
    kind: 'survey',
    icon: '☄️',
    desc: '一颗长周期彗星掠过内太阳系，拦截它采集彗核样本与水冰。',
    difficulty: 3,
    durationHours: 96,
    distanceAU: 2.2,
    requires: { shipType: 'explorer', crew: { pilot: 2, scientist: 1 }, minSkill: 55, tech: 't-exp-2' },
    stages: [
      { name: '轨道交会', check: 'navigation', dc: 55, success: '精确交会，相对速度极低。', fail: '交会偏差，采样窗口缩短。' },
      { name: '彗核钻取', check: 'research', dc: 50, success: '钻取到原始彗核样本。', fail: '钻头断裂，只采到表层。' },
      { name: '脱离彗尾', check: 'evasion', dc: 55, success: '干净脱离。', fail: '彗尾尘埃撞击，-15 船体。' },
    ],
    rewards: { water: 300, tech: 90, helium3: 20 },
    rewardMul: 1.1,
    risk: 0.16,
    repeatable: true,
  },
  {
    id: 'exp-pirate-hunt',
    name: '清剿海盗巢穴',
    kind: 'combat',
    icon: '🏴‍☠️',
    desc: '深空海盗在小行星带劫掠采矿船，带一艘武装探索船去端掉他们的巢穴。',
    difficulty: 4,
    durationHours: 144,
    distanceAU: 2.0,
    requires: { shipType: 'explorer', crew: { pilot: 2, engineer: 1, medic: 1 }, minSkill: 60, tech: 't-exp-2', minShield: 2 },
    stages: [
      { name: '巢穴定位', check: 'survey', dc: 55, success: '找到伪装成废弃矿站的巢穴。', fail: '打草惊蛇，海盗有所防备。' },
      { name: '接舷战斗', check: 'evasion', dc: 65, success: '机动压制，登船成功。', fail: '交火激烈，-30 船体。' },
      { name: '缴获物资', check: 'repair', dc: 50, success: '缴获海盗全部赃物。', fail: '海盗引爆了部分货舱。' },
    ],
    rewards: { steel: 400, rare: 150, platinum: 60, tech: 80 },
    rewardMul: 1.3,
    risk: 0.28,
    repeatable: true,
  },
  {
    id: 'exp-phobos-base',
    name: '火卫一前哨',
    kind: 'build',
    icon: '🏗️',
    desc: '在火卫一表面建立无人前哨站，作为深空航线的中继与加油点。',
    difficulty: 2,
    durationHours: 168,
    distanceAU: 0.3,
    requires: { shipType: 'transport', crew: { pilot: 1, engineer: 2 }, minSkill: 40, tech: null },
    stages: [
      { name: '选址着陆', check: 'navigation', dc: 40, success: '平稳着陆在预定平原。', fail: '着陆点偏移，多耗 24 小时平整场地。' },
      { name: '前哨组装', check: 'repair', dc: 45, success: '前哨站一次组装成功。', fail: '组装遇到故障，返工一次。' },
    ],
    rewards: { tech: 70, steel: 120 },
    rewardMul: 1.0,
    risk: 0.10,
    outpostBonus: true,
    repeatable: false,
  },
  {
    id: 'exp-deimos-survey',
    name: '火卫二地质调查',
    kind: 'survey',
    icon: '🔍',
    desc: '火卫二表面遍布奇异的沟槽，地质调查可能揭示火星卫星的起源。',
    difficulty: 1,
    durationHours: 48,
    distanceAU: 0.35,
    requires: { shipType: 'explorer', crew: { pilot: 1, scientist: 1 }, minSkill: 30, tech: null },
    stages: [
      { name: '环绕测绘', check: 'survey', dc: 30, success: '完成高精度地形测绘。', fail: '部分区域被阴影遮挡。' },
      { name: '沟槽采样', check: 'research', dc: 35, success: '采到沟槽底部的原始物质。', fail: '采样器只刮到表层风化物。' },
    ],
    rewards: { tech: 45, rare: 40 },
    rewardMul: 1.0,
    risk: 0.07,
    repeatable: false,
  },
  {
    id: 'exp-solar-probe',
    name: '太阳探测器投放',
    kind: 'survey',
    icon: '☀️',
    desc: '向近日点投放太阳探测器，近距离观测日冕物质抛射。',
    difficulty: 3,
    durationHours: 192,
    distanceAU: 3.0,
    requires: { shipType: 'explorer', crew: { pilot: 1, scientist: 2 }, minSkill: 55, tech: 't-exp-2' },
    stages: [
      { name: '近日点机动', check: 'navigation', dc: 60, success: '精确进入近日点轨道。', fail: '轨道偏差，探测器展开受限。' },
      { name: '探测器投放', check: 'research', dc: 55, success: '探测器成功展开并传回数据。', fail: '探测器天线故障，数据不完整。' },
      { name: '撤离热区', check: 'evasion', dc: 50, success: '及时撤离，无损伤。', fail: '隔热层受损，-20 船体。' },
    ],
    rewards: { tech: 150, helium3: 30 },
    rewardMul: 1.2,
    risk: 0.15,
    repeatable: false,
  },
  {
    id: 'exp-ice-haul',
    name: '水冰大宗运输',
    kind: 'harvest',
    icon: '🧊',
    desc: '从 C 型小行星运回大宗水冰，缓解火星基地的水资源压力。',
    difficulty: 1,
    durationHours: 144,
    distanceAU: 1.6,
    requires: { shipType: 'transport', crew: { pilot: 1, engineer: 1, miner: 1 }, minSkill: 30, tech: null },
    stages: [
      { name: '冰矿开采', check: 'mining', dc: 30, success: '水冰开采顺利，满载。', fail: '冰层混入大量岩屑，产量 -25%。' },
      { name: '低温运输', check: 'endurance', dc: 30, success: '冷藏系统稳定，无损耗。', fail: '升华损耗 20%。' },
    ],
    rewards: { water: 500, steel: 60 },
    rewardMul: 1.0,
    risk: 0.08,
    repeatable: true,
  },
  {
    id: 'exp-ghost-signal',
    name: '幽灵信号追踪',
    kind: 'explore',
    icon: '📻',
    desc: '深空监听站收到一段无法解码的重复信号，源头在小行星带外缘。',
    difficulty: 4,
    durationHours: 240,
    distanceAU: 2.8,
    requires: { shipType: 'explorer', crew: { pilot: 1, scientist: 2, engineer: 1 }, minSkill: 65, tech: 't-exp-3' },
    stages: [
      { name: '信号三角定位', check: 'survey', dc: 60, success: '锁定信号源：一座漂流的古代信标。', fail: '信号时有时无，多耗 48 小时。' },
      { name: '信标对接', check: 'repair', dc: 65, success: '成功对接并读取信标内存。', fail: '对接失败，只能远程扫描。' },
      { name: '信号解码', check: 'research', dc: 70, success: '解码出星图坐标，指向遗迹 γ。', fail: '只解出片段，仍有价值。' },
    ],
    rewards: { tech: 200, artifact: 3, platinum: 40 },
    rewardMul: 1.3,
    risk: 0.22,
    ruinClue: 'gamma',
    repeatable: false,
  },
  {
    id: 'exp-medical-evac',
    name: '月球医疗撤离',
    kind: 'rescue',
    icon: '🚑',
    desc: '月球基地爆发呼吸道感染，派医疗船接回重症居民并运去药品。',
    difficulty: 2,
    durationHours: 72,
    distanceAU: 0.9,
    requires: { shipType: 'transport', crew: { pilot: 1, medic: 2 }, minSkill: 40, tech: null },
    stages: [
      { name: '紧急出航', check: 'navigation', dc: 35, success: '最快航线抵达月球。', fail: '航线延误 12 小时。' },
      { name: '隔离转运', check: 'medicine', dc: 45, success: '患者全部安全转运。', fail: '1 名患者病情加重。' },
    ],
    rewards: { tech: 40, steel: 100 },
    rewardMul: 1.0,
    risk: 0.10,
    moonMoraleBonus: 10,
    repeatable: true,
  },
  {
    id: 'exp-rare-vein',
    name: '稀土富矿争夺',
    kind: 'harvest',
    icon: '💠',
    desc: '一颗 V 型小行星被确认含高品位稀土，在海盗盯上它之前采回来。',
    difficulty: 3,
    durationHours: 168,
    distanceAU: 2.1,
    requires: { shipType: 'miner', crew: { pilot: 1, miner: 2, engineer: 1 }, minSkill: 50, tech: 't-belt-1' },
    stages: [
      { name: '抢先抵达', check: 'navigation', dc: 50, success: '比海盗先到一步。', fail: '海盗先到，发生对峙。' },
      { name: '快速开采', check: 'mining', dc: 55, success: '高品位矿脉满载而归。', fail: '开采受干扰，产量 -30%。' },
      { name: '摆脱追击', check: 'evasion', dc: 55, success: '甩掉海盗追击。', fail: '被追上，交火 -25 船体。' },
    ],
    rewards: { rare: 300, uranium: 40, platinum: 25 },
    rewardMul: 1.2,
    risk: 0.20,
    repeatable: true,
  },
  {
    id: 'exp-deep-freeze',
    name: '深空冷冻样本',
    kind: 'survey',
    icon: '🧫',
    desc: '在柯伊伯带边缘回收一枚数十年前发射的冷冻样本舱。',
    difficulty: 5,
    durationHours: 480,
    distanceAU: 5.0,
    requires: { shipType: 'explorer', crew: { pilot: 2, scientist: 2, engineer: 1, medic: 1 }, minSkill: 75, tech: 't-exp-3' },
    stages: [
      { name: '超长巡航', check: 'endurance', dc: 70, success: '船员轮换得当，状态良好。', fail: '长期航行士气 -20。' },
      { name: '样本舱捕获', check: 'navigation', dc: 75, success: '机械臂稳稳捕获样本舱。', fail: '第一次捕获失败，第二次才成功。' },
      { name: '样本解冻分析', check: 'research', dc: 70, success: '样本完好，获得珍贵数据。', fail: '部分样本失活，价值打折。' },
    ],
    rewards: { tech: 350, artifact: 4, helium3: 40 },
    rewardMul: 1.4,
    risk: 0.26,
    repeatable: false,
  },
  {
    id: 'exp-orbital-rescue',
    name: '轨道站火灾救援',
    kind: 'rescue',
    icon: '🔥',
    desc: '一座民用轨道站发生火灾，派船带消防与医疗小组前去救援。',
    difficulty: 3,
    durationHours: 36,
    distanceAU: 0.5,
    requires: { shipType: 'transport', crew: { pilot: 1, engineer: 2, medic: 1 }, minSkill: 45, tech: null },
    stages: [
      { name: '紧急对接', check: 'navigation', dc: 45, success: '顶着浓烟完成对接。', fail: '对接延误，火势蔓延。' },
      { name: '灭火作业', check: 'repair', dc: 55, success: '火势扑灭，结构保住了。', fail: '火势失控，只能撤离人员。' },
      { name: '伤员救治', check: 'medicine', dc: 50, success: '17 名站员全部获救。', fail: '2 名站员重伤。' },
    ],
    rewards: { steel: 250, rare: 80, tech: 60 },
    rewardMul: 1.1,
    risk: 0.18,
    rescueBonus: true,
    repeatable: true,
  },
  {
    id: 'exp-first-contact',
    name: '第一次接触',
    kind: 'explore',
    icon: '👽',
    desc: '遗迹 γ 的信标回应了一段结构化信号。派最精锐的船员去赴约——这是人类第一次。',
    difficulty: 5,
    durationHours: 336,
    distanceAU: 4.5,
    requires: { shipType: 'explorer', crew: { pilot: 2, scientist: 3, medic: 1, engineer: 1 }, minSkill: 80, tech: 't-exp-3' },
    stages: [
      { name: '赴约航行', check: 'navigation', dc: 70, success: '准时抵达会合点。', fail: '迟到 24 小时，对方仍在等待。' },
      { name: '信号应答', check: 'research', dc: 80, success: '用数学语言完成第一次应答。', fail: '应答出现歧义，对方重复发送。' },
      { name: '交换', check: 'morale', dc: 75, success: '对方赠予一枚「星门信标」。', fail: '对方保持沉默，只留下观测数据。' },
      { name: '平安返航', check: 'evasion', dc: 60, success: '带着信标平安返航。', fail: '返航途中遭遇太阳风，-30 船体。' },
    ],
    rewards: { artifact: 15, tech: 500, helium3: 100 },
    rewardMul: 1.5,
    risk: 0.25,
    ruinUnlock: 'gamma',
    firstContact: true,
    repeatable: false,
  },
];
const EXPEDITION_MAP = {};
for (let i = 0; i < EXPEDITION_DEFS.length; i++) {
  EXPEDITION_MAP[EXPEDITION_DEFS[i].id] = EXPEDITION_DEFS[i];
}

// ================= 远征：执行实例 =================
class DSExpedition {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || ('exp-' + Math.floor(Math.random() * 1e9).toString(36));
    this.defId = opts.defId;
    this.shipId = opts.shipId;
    this.crewIds = opts.crewIds || [];
    this.status = opts.status || 'active'; // active / success / failed / aborted
    this.startedAt = opts.startedAt || 0;
    this.endsAt = opts.endsAt || 0;
    this.stageIndex = opts.stageIndex || 0;
    this.stageResults = opts.stageResults || []; // [{stage, passed, text}]
    this.progress = opts.progress || 0;
    this.accident = opts.accident || null;
    this.rewards = opts.rewards || null;
  }
  def() { return EXPEDITION_MAP[this.defId]; }
  remainingSec(nowSec) { return Math.max(0, this.endsAt - nowSec); }
  save() {
    return {
      id: this.id, defId: this.defId, shipId: this.shipId,
      crewIds: this.crewIds, status: this.status,
      startedAt: this.startedAt, endsAt: this.endsAt,
      stageIndex: this.stageIndex, stageResults: this.stageResults,
      progress: this.progress, accident: this.accident, rewards: this.rewards,
    };
  }
  static load(data) { return new DSExpedition(data || {}); }
}

// ================= 远征管理器 =================
class DSExpeditionManager {
  constructor() {
    this.active = [];       // DSExpedition[]
    this.completed = [];    // 已完成记录 [{defId, name, status, t, rewards, stages}]
    this.completedDefIds = {}; // 非重复任务完成记录
    this.totalStarted = 0;
    this.totalSuccess = 0;
    this.totalFailed = 0;
    this.log = [];
    this.weatherRiskMul = 1;    // 由 manager 注入太阳天气风险修正
    this.squadBonusFn = null;   // 由 manager 注入小队默契修正
  }

  get(id) {
    for (let i = 0; i < this.active.length; i++) {
      if (this.active[i].id === id) return this.active[i];
    }
    return null;
  }
  isCompleted(defId) { return !!this.completedDefIds[defId]; }
  availableDefs(hasTech) {
    // hasTech(id): game.tech 校验函数（没有则放行）
    const out = [];
    for (let i = 0; i < EXPEDITION_DEFS.length; i++) {
      const d = EXPEDITION_DEFS[i];
      if (!d.repeatable && this.isCompleted(d.id)) continue;
      if (d.requires.tech && hasTech && !hasTech(d.requires.tech)) continue;
      out.push(d);
    }
    return out;
  }

  // —— 出发检查 ——
  canStart(defId, ship, crewMgr, hasTech) {
    const def = EXPEDITION_MAP[defId];
    if (!def) return { ok: false, reason: '未知远征任务' };
    if (!def.repeatable && this.isCompleted(defId)) {
      return { ok: false, reason: '该任务已完成，不可重复' };
    }
    if (this.active.length >= DS_TUNE_V3.expeditionMaxActive) {
      return { ok: false, reason: '同时进行的远征已达上限（' + DS_TUNE_V3.expeditionMaxActive + '）' };
    }
    if (def.requires.tech && hasTech && !hasTech(def.requires.tech)) {
      return { ok: false, reason: '需要科技：' + def.requires.tech };
    }
    if (!ship) return { ok: false, reason: '需要一艘飞船' };
    if (ship.type !== def.requires.shipType) {
      return { ok: false, reason: '该任务需要' + SHIP_TYPES[def.requires.shipType].name };
    }
    if (def.requires.minShield && (ship.upgrades.shield || 0) < def.requires.minShield) {
      return { ok: false, reason: '需要护盾 Lv' + def.requires.minShield + ' 以上' };
    }
    if (ship.status !== SHIP_STATUS.DOCKED) {
      return { ok: false, reason: '飞船必须停靠在轨道站' };
    }
    // 船员需求
    if (crewMgr) {
      const missing = crewMgr.checkCrewNeed(def.requires.crew);
      if (!missing.ok) {
        return { ok: false, reason: '船员不足：' + missing.missing.join('、') };
      }
      // 最低技能检查：按岗位取最优船员的岗位技能均值
      const minSkill = def.requires.minSkill || 0;
      for (const role in def.requires.crew) {
        const pool = crewMgr.byRole(role).filter(function (c) { return c.isAvailable(); });
        pool.sort(function (a, b) { return b.roleSkillAvg() - a.roleSkillAvg(); });
        const best = pool[0];
        if (!best || best.roleSkillAvg() < minSkill) {
          return { ok: false, reason: CREW_ROLES[role].name + '技能不足（需要岗位技能 ≥' + minSkill + '）' };
        }
      }
    }
    return { ok: true, def: def };
  }

  // —— 出发 ——
  // 选人：按岗位取技能最高的待命船员，编入飞船；飞船出航由 fleet.depart 驱动，
  // 这里只建远征实例并返回航程参数，由 manager 统一调度。
  start(defId, ship, crewMgr, nowSec) {
    const check = this.canStart(defId, ship, crewMgr, null);
    if (!check.ok) return check;
    const def = check.def;
    // 配员
    const crewIds = [];
    for (const role in def.requires.crew) {
      const n = def.requires.crew[role];
      const picked = crewMgr.pickCrew(role, n, 0);
      for (let i = 0; i < picked.length; i++) crewIds.push(picked[i].id);
    }
    const exp = new DSExpedition({
      defId: defId, shipId: ship.id, crewIds: crewIds,
      startedAt: nowSec,
      endsAt: nowSec + def.durationHours * 3600,
    });
    this.active.push(exp);
    this.totalStarted++;
    this._log(nowSec, '远征出发：' + def.name + '（' + ship.name + '，' + crewIds.length + ' 名船员）');
    return { ok: true, expedition: exp, crewIds: crewIds, def: def };
  }

  // —— 阶段结算 ——
  // 每个阶段按船员相关技能均值 + 随机数 vs DC 检定；
  // 全部阶段完成后算总事故率，决定成败与奖励倍率。
  resolveStage(exp, crewMgr, rng) {
    rng = rng || Math.random;
    const def = exp.def();
    const stage = def.stages[exp.stageIndex];
    if (!stage) return null;
    // 相关技能：取全体船员该技能均值 + 最高值加权
    let sum = 0, best = 0, n = 0;
    for (let i = 0; i < exp.crewIds.length; i++) {
      const c = crewMgr ? crewMgr.get(exp.crewIds[i]) : null;
      if (!c) continue;
      const v = c.skills[stage.check] || 0;
      sum += v; n++;
      if (v > best) best = v;
    }
    const avg = n ? sum / n : 0;
    const skill = avg * 0.6 + best * 0.4;
    // 检定：技能 + d20 vs DC；技能超过 DC 较多时几乎必过
    const roll = skill + rng() * 20;
    const passed = roll >= stage.dc;
    const result = {
      stage: stage.name, check: stage.check, dc: stage.dc,
      skill: Math.round(skill), roll: Math.round(roll),
      passed: passed, text: passed ? stage.success : stage.fail,
    };
    exp.stageResults.push(result);
    exp.stageIndex++;
    return result;
  }

  // 事故判定：基础风险 + 难度 − 护盾/医生修正
  computeRisk(def, ship, crewMgr, crewIds) {
    let risk = DS_TUNE_V3.expeditionRiskBase + (def.difficulty - 1) * DS_TUNE_V3.expeditionRiskPerLevel + (def.risk || 0);
    if (ship) risk *= ship.riskMul();
    if (crewMgr && crewIds) {
      // 医生在队：事故率 −20%；平均士气低：事故率 +15%
      let hasMedic = false, moraleSum = 0, n = 0;
      for (let i = 0; i < crewIds.length; i++) {
        const c = crewMgr.get(crewIds[i]);
        if (!c) continue;
        if (c.role === 'medic') hasMedic = true;
        moraleSum += c.morale; n++;
      }
      if (hasMedic) risk *= 0.8;
      if (n && moraleSum / n < DS_TUNE_V3.crewMoraleLow) risk *= 1.15;
    }
    return dsv3Clamp(risk, 0.02, 0.7);
  }

  // —— 完成结算 ——
  complete(exp, ship, crewMgr, nowSec, rng) {
    rng = rng || Math.random;
    const def = exp.def();
    // 补算剩余阶段
    while (exp.stageIndex < def.stages.length) {
      this.resolveStage(exp, crewMgr, rng);
    }
    const passedStages = exp.stageResults.filter(function (r) { return r.passed; }).length;
    const stageRatio = def.stages.length ? passedStages / def.stages.length : 1;
    let risk = this.computeRisk(def, ship, crewMgr, exp.crewIds);
    // 太阳天气与小队默契修正
    if (this.weatherRiskMul) risk *= this.weatherRiskMul;
    if (this.squadBonusFn) risk *= 1 - this.squadBonusFn(exp.crewIds);
    risk = dsv3Clamp(risk, 0.02, 0.7);
    const accidentRoll = rng();
    const accident = accidentRoll < risk;
    // 成功 = 未出事故 且 阶段通过率 ≥ 50%
    const success = !accident && stageRatio >= 0.5;
    exp.status = success ? 'success' : 'failed';
    exp.accident = accident ? this._pickAccident(def, rng) : null;

    // 奖励：基础 × 阶段通过率 × 任务倍率；失败则只给 20% 残值
    const mul = (success ? 1 : 0.2) * (0.5 + 0.5 * stageRatio) * (def.rewardMul || 1);
    const rewards = {};
    for (const k in def.rewards) {
      rewards[k] = Math.round(def.rewards[k] * mul);
    }
    exp.rewards = rewards;
    exp.progress = 1;

    // 从进行中移除，记入完成
    const idx = this.active.indexOf(exp);
    if (idx >= 0) this.active.splice(idx, 1);
    this.completed.push({
      defId: def.id, name: def.name, status: exp.status,
      t: Math.round(nowSec), rewards: rewards,
      stages: exp.stageResults.map(function (r) {
        return { stage: r.stage, passed: r.passed };
      }),
      accident: exp.accident,
    });
    if (this.completed.length > 100) this.completed.splice(0, this.completed.length - 100);
    if (!def.repeatable) this.completedDefIds[def.id] = true;
    if (success) this.totalSuccess++; else this.totalFailed++;
    this._log(nowSec, '远征' + (success ? '成功' : '失败') + '：' + def.name +
      (accident ? '（事故：' + exp.accident.text + '）' : ''));
    return {
      success: success, rewards: rewards, stages: exp.stageResults,
      accident: exp.accident, risk: dsv3Round(risk, 3),
      stageRatio: dsv3Round(stageRatio, 2),
      def: def,
    };
  }

  _pickAccident(def, rng) {
    const pool = [
      { id: 'hull-breach', text: '船体破裂，紧急堵漏', hullDmg: 40, injure: 1 },
      { id: 'engine-fail', text: '引擎故障，漂流 24 小时', hullDmg: 10, injure: 0 },
      { id: 'crew-injury', text: '船员在作业中受伤', hullDmg: 0, injure: 2 },
      { id: 'solar-storm', text: '遭遇太阳风暴，电子设备受损', hullDmg: 25, injure: 1 },
      { id: 'pirate-ambush', text: '遭遇海盗伏击', hullDmg: 35, injure: 1 },
      { id: 'life-support', text: '生命维持系统故障', hullDmg: 15, injure: 1 },
    ];
    // 高难度任务更容易出重事故
    const weighted = def.difficulty >= 4 ? pool.slice(0, 6) : pool.slice(0, 4);
    return weighted[Math.floor(rng() * weighted.length)];
  }

  // —— 中止 ——
  abort(expId, nowSec) {
    const exp = this.get(expId);
    if (!exp) return { ok: false, reason: '找不到该远征' };
    exp.status = 'aborted';
    const idx = this.active.indexOf(exp);
    if (idx >= 0) this.active.splice(idx, 1);
    this.completed.push({
      defId: exp.defId, name: exp.def().name, status: 'aborted',
      t: Math.round(nowSec), rewards: {}, stages: [], accident: null,
    });
    this._log(nowSec, '远征中止：' + exp.def().name);
    return { ok: true, expedition: exp };
  }

  // —— 每 tick 推进 ——
  update(dtSec, nowSec, fleet, crewMgr, hooks) {
    const finished = [];
    for (let i = this.active.length - 1; i >= 0; i--) {
      const exp = this.active[i];
      const def = exp.def();
      const total = def.durationHours * 3600;
      exp.progress = dsv3Clamp((nowSec - exp.startedAt) / total, 0, 1);
      // 按进度推进阶段（每阶段均匀分布在全程）
      const expectStage = Math.min(def.stages.length, Math.floor(exp.progress * def.stages.length));
      while (exp.stageIndex < expectStage) {
        this.resolveStage(exp, crewMgr, Math.random);
      }
      if (nowSec >= exp.endsAt) {
        const ship = fleet ? fleet.get(exp.shipId) : null;
        const result = this.complete(exp, ship, crewMgr, nowSec, Math.random);
        finished.push({ expedition: exp, result: result, ship: ship });
        if (hooks && hooks.onExpeditionComplete) {
          hooks.onExpeditionComplete(exp, result, ship, nowSec);
        }
      }
    }
    return finished;
  }

  _log(t, text) {
    this.log.push({ t: Math.round(t), text: text });
    if (this.log.length > 200) this.log.splice(0, this.log.length - 200);
  }

  summary() {
    return {
      active: this.active.map(function (e) {
        return {
          id: e.id, name: e.def().name, defId: e.defId,
          shipId: e.shipId, crew: e.crewIds.length,
          progress: dsv3Round(e.progress, 2),
          stage: e.stageIndex + '/' + e.def().stages.length,
          endsInSec: Math.max(0, e.endsAt - 0),
        };
      }),
      totalStarted: this.totalStarted,
      totalSuccess: this.totalSuccess,
      totalFailed: this.totalFailed,
      completedCount: this.completed.length,
      availableCount: EXPEDITION_DEFS.length,
    };
  }

  save() {
    return {
      active: this.active.map(function (e) { return e.save(); }),
      completed: this.completed,
      completedDefIds: this.completedDefIds,
      totalStarted: this.totalStarted,
      totalSuccess: this.totalSuccess,
      totalFailed: this.totalFailed,
      log: this.log,
    };
  }
  load(data) {
    if (!data) return;
    this.active = (data.active || []).map(function (e) { return DSExpedition.load(e); });
    this.completed = data.completed || [];
    this.completedDefIds = data.completedDefIds || {};
    this.totalStarted = data.totalStarted || 0;
    this.totalSuccess = data.totalSuccess || 0;
    this.totalFailed = data.totalFailed || 0;
    this.log = data.log || [];
  }
}

// ================= 外星遗迹 =================
// 3 处遗迹：α（火卫一背面）、β（小行星带深处）、γ（太阳系边缘）。
// 每处 3 个发掘阶段，每阶段 24 小时，需要探索船 + 科学家在场；
// 完成全部阶段解锁特殊科技/建筑（全局增益，进 game 产量乘数）。
const RUIN_DEFS = [
  {
    id: 'alpha',
    name: '遗迹 α',
    subtitle: '火卫一背面 · 古代前哨',
    icon: '🏛️',
    location: 'phobos',
    au: 0.4,
    desc: '火卫一背面一座半埋的环形建筑，能量读数微弱但稳定。',
    requires: { shipType: 'explorer', scientists: 1, minSkill: 30, tech: null, expedition: 'exp-ruin-alpha' },
    stages: [
      {
        name: '清理入口',
        hours: 24,
        desc: '清除入口的碎石与尘埃，打开第一道气密门。',
        check: 'repair', dc: 30,
        success: '入口清理完毕，内部气压稳定。',
        fail: '碎石滑落，清理多花 12 小时。',
      },
      {
        name: '测绘内部',
        hours: 24,
        desc: '测绘遗迹内部结构，标记能量节点与危险区。',
        check: 'survey', dc: 35,
        success: '完整测绘图，能量节点全部定位。',
        fail: '部分区域信号屏蔽，测绘不完整。',
      },
      {
        name: '激活核心',
        hours: 24,
        desc: '按星图提示的顺序激活中央核心。',
        check: 'research', dc: 40,
        success: '核心苏醒，输出一份完整的能源蓝图。',
        fail: '核心只短暂启动，随即再次休眠。',
      },
    ],
    rewards: { artifact: 3, tech: 80 },
    unlock: {
      id: 'ruin-alpha-core',
      name: '遗迹能源核心',
      desc: '全站电力 +20%，太阳能帆产量 +25%。',
      buffs: { powerMul: 1.2, solarMul: 1.25 },
      building: null,
      tech: 't-ruin-alpha',
    },
  },
  {
    id: 'beta',
    name: '遗迹 β',
    subtitle: '小行星带深处 · 重力神殿',
    icon: '🌀',
    location: 'belt-outer',
    au: 1.8,
    desc: '一座漂浮在碎石带中的倒金字塔，内部重力方向不断变化。',
    requires: { shipType: 'explorer', scientists: 2, minSkill: 50, tech: 't-exp-2', expedition: 'exp-ruin-beta' },
    stages: [
      {
        name: '重力锚定',
        hours: 24,
        desc: '在遗迹表面打下重力锚，固定作业平台。',
        check: 'repair', dc: 50,
        success: '锚点稳固，作业平台就位。',
        fail: '锚点打滑，平台漂移，需重新固定。',
      },
      {
        name: '大厅穿越',
        hours: 24,
        desc: '穿过重力不断翻转的大厅，抵达中央祭坛。',
        check: 'evasion', dc: 55,
        success: '全员安全通过大厅。',
        fail: '重力翻转导致 1 名船员受伤。',
      },
      {
        name: '祭坛解读',
        hours: 24,
        desc: '解读祭坛上的星图与合金配方。',
        check: 'research', dc: 60,
        success: '获得「引力合金」配方：飞船船体 +30%。',
        fail: '星图残缺，只解读出部分配方。',
      },
    ],
    rewards: { artifact: 6, tech: 150, platinum: 40 },
    unlock: {
      id: 'ruin-beta-alloy',
      name: '引力合金',
      desc: '全部飞船船体上限 +30%，采矿产量 +15%。',
      buffs: { hullMul: 1.3, miningMul: 1.15 },
      building: null,
      tech: 't-ruin-beta',
    },
  },
  {
    id: 'gamma',
    name: '遗迹 γ',
    subtitle: '太阳系边缘 · 守望者之门',
    icon: '👁️',
    location: 'kuiper',
    au: 4.5,
    desc: '太阳系边缘一座沉默的巨环，环内侧刻满星图，中心悬浮着一枚信标。',
    requires: { shipType: 'explorer', scientists: 2, minSkill: 70, tech: 't-exp-3', expedition: 'exp-ruin-gamma' },
    stages: [
      {
        name: '环体对接',
        hours: 24,
        desc: '与巨环的对接口对接，建立气密通道。',
        check: 'navigation', dc: 65,
        success: '对接一次成功，通道气密完好。',
        fail: '对接偏差，撞击导致 -15 船体。',
      },
      {
        name: '星图破译',
        hours: 24,
        desc: '破译环内侧的星图，定位「星门」坐标。',
        check: 'research', dc: 70,
        success: '星图破译：星门坐标与跃迁原理到手。',
        fail: '星图缺失关键段，只能推测大致方向。',
      },
      {
        name: '信标唤醒',
        hours: 24,
        desc: '唤醒中央信标，与守望者建立第一次数据交换。',
        check: 'morale', dc: 70,
        success: '信标回应，赠予「星门信标」与跃迁引擎蓝图。',
        fail: '信标只闪烁一次便沉寂，留下观测数据。',
      },
    ],
    rewards: { artifact: 10, tech: 300, helium3: 60 },
    unlock: {
      id: 'ruin-gamma-gate',
      name: '星门信标',
      desc: '全部航行时间 -25%，远征奖励 +20%，解锁「跃迁引擎」科技线。',
      buffs: { travelTimeMul: 0.75, expeditionRewardMul: 1.2 },
      building: 'stargate',
      tech: 't-ruin-gamma',
    },
  },
];
const RUIN_MAP = {};
for (let i = 0; i < RUIN_DEFS.length; i++) RUIN_MAP[RUIN_DEFS[i].id] = RUIN_DEFS[i];

// 遗迹解锁带来的特殊建筑（γ 解锁的星门）
const RUIN_BUILDINGS = {
  stargate: {
    id: 'stargate',
    name: '星门信标',
    icon: '🌀',
    desc: '遗迹 γ 赠予的星门信标：建在轨道站上，全部航行时间再 -15%，远征事故率 -10%。',
    cost: { steel: 2000, rare: 800, tech: 400, artifact: 5, helium3: 50 },
    power: [-100],
    crew: [2],
    maxLevel: 1,
    buffs: { travelTimeMul: 0.85, expeditionRiskMul: 0.9 },
  },
};

class DSRuinSite {
  constructor(opts) {
    opts = opts || {};
    this.defId = opts.defId || 'alpha';
    this.stage = opts.stage || 0;           // 已完成阶段数
    this.status = opts.status || 'locked';  // locked / discovered / excavating / completed
    this.excavation = opts.excavation || null; // {shipId, crewIds, stageIndex, endsAt}
    this.clues = opts.clues || 0;          // 线索数（勘测/远征积累）
    this.discoveredAt = opts.discoveredAt || 0;
    this.completedAt = opts.completedAt || 0;
  }
  def() { return RUIN_MAP[this.defId]; }
  isCompleted() { return this.status === 'completed'; }
  // 发现条件：线索 ≥2，或完成对应远征
  canDiscover() {
    if (this.status !== 'locked') return { ok: false, reason: '遗迹已发现' };
    if (this.clues >= 2) return { ok: true };
    return { ok: false, reason: '需要更多线索（当前 ' + this.clues + '/2，可通过勘测与远征获得）' };
  }
  discover(nowSec) {
    const check = this.canDiscover();
    if (!check.ok) return check;
    this.status = 'discovered';
    this.discoveredAt = nowSec;
    return { ok: true };
  }
  addClue(n, nowSec) {
    this.clues += n || 1;
    return this.clues;
  }
  // 发掘检查
  canExcavate(ship, crewMgr, hasTech) {
    const def = this.def();
    if (this.status !== 'discovered') {
      return { ok: false, reason: this.status === 'locked' ? '遗迹尚未发现' : '遗迹状态异常' };
    }
    if (this.excavation) return { ok: false, reason: '已有发掘队在作业' };
    if (this.stage >= def.stages.length) return { ok: false, reason: '遗迹已发掘完毕' };
    if (def.requires.tech && hasTech && !hasTech(def.requires.tech)) {
      return { ok: false, reason: '需要科技：' + def.requires.tech };
    }
    if (!ship) return { ok: false, reason: '需要一艘探索船' };
    if (ship.type !== def.requires.shipType) {
      return { ok: false, reason: '发掘需要' + SHIP_TYPES[def.requires.shipType].name };
    }
    if (ship.status !== SHIP_STATUS.DOCKED) {
      return { ok: false, reason: '飞船必须停靠在轨道站' };
    }
    if (crewMgr) {
      const sci = crewMgr.byRole('scientist').filter(function (c) { return c.isAvailable(); });
      if (sci.length < def.requires.scientists) {
        return { ok: false, reason: '需要 ' + def.requires.scientists + ' 名待命科学家' };
      }
      sci.sort(function (a, b) { return b.roleSkillAvg() - a.roleSkillAvg(); });
      if (sci[0].roleSkillAvg() < def.requires.minSkill) {
        return { ok: false, reason: '科学家技能不足（需要 ≥' + def.requires.minSkill + '）' };
      }
    }
    return { ok: true, def: def };
  }
  startExcavation(ship, crewMgr, nowSec) {
    const check = this.canExcavate(ship, crewMgr, null);
    if (!check.ok) return check;
    const def = check.def;
    const stageDef = def.stages[this.stage];
    const crewIds = [];
    const sci = crewMgr.pickCrew('scientist', def.requires.scientists, 0);
    for (let i = 0; i < sci.length; i++) crewIds.push(sci[i].id);
    const pilot = crewMgr.pickCrew('pilot', 1, 0);
    if (pilot.length) crewIds.push(pilot[0].id);
    this.status = 'excavating';
    this.excavation = {
      shipId: ship.id, crewIds: crewIds,
      stageIndex: this.stage, endsAt: nowSec + stageDef.hours * 3600,
    };
    return { ok: true, endsAt: this.excavation.endsAt, stage: stageDef };
  }
  // 阶段完成结算：技能检定决定成败，失败则该阶段重做（不推进）
  resolveStage(crewMgr, rng) {
    rng = rng || Math.random;
    const def = this.def();
    const ex = this.excavation;
    if (!ex) return null;
    const stageDef = def.stages[ex.stageIndex];
    let sum = 0, best = 0, n = 0;
    for (let i = 0; i < ex.crewIds.length; i++) {
      const c = crewMgr ? crewMgr.get(ex.crewIds[i]) : null;
      if (!c) continue;
      const v = c.skills[stageDef.check] || 0;
      sum += v; n++;
      if (v > best) best = v;
    }
    const skill = n ? (sum / n) * 0.6 + best * 0.4 : 0;
    const roll = skill + rng() * 20;
    const passed = roll >= stageDef.dc;
    const result = {
      stage: stageDef.name, check: stageDef.check, dc: stageDef.dc,
      skill: Math.round(skill), roll: Math.round(roll),
      passed: passed, text: passed ? stageDef.success : stageDef.fail,
    };
    if (passed) this.stage++;
    this.excavation = null;
    if (this.stage >= def.stages.length) {
      this.status = 'completed';
      this.completedAt = 0; // 由 manager 填 nowSec
    } else {
      this.status = 'discovered';
    }
    return result;
  }
  // 完成奖励
  completionRewards() {
    const def = this.def();
    return { rewards: def.rewards, unlock: def.unlock };
  }
  summary() {
    const def = this.def();
    return {
      id: this.defId, name: def.name, subtitle: def.subtitle,
      icon: def.icon, location: def.location, au: def.au,
      status: this.status, stage: this.stage,
      stagesTotal: def.stages.length,
      clues: this.clues,
      excavation: this.excavation,
      unlock: def.unlock,
    };
  }
  save() {
    return {
      defId: this.defId, stage: this.stage, status: this.status,
      excavation: this.excavation, clues: this.clues,
      discoveredAt: this.discoveredAt, completedAt: this.completedAt,
    };
  }
  static load(data) { return new DSRuinSite(data || {}); }
}

class DSRuinManager {
  constructor() {
    this.sites = [
      new DSRuinSite({ defId: 'alpha' }),
      new DSRuinSite({ defId: 'beta' }),
      new DSRuinSite({ defId: 'gamma' }),
    ];
    this.unlockedBuffs = {};   // {buffKey: mul} 已解锁遗迹增益汇总
    this.unlockedTechs = [];   // 已解锁科技 id
    this.builtStargate = false;
    this.totalArtifacts = 0;
    this.log = [];
  }
  get(defId) {
    for (let i = 0; i < this.sites.length; i++) {
      if (this.sites[i].defId === defId) return this.sites[i];
    }
    return null;
  }
  completedCount() {
    return this.sites.filter(function (s) { return s.isCompleted(); }).length;
  }
  // 远征完成时调用：对应遗迹自动发现（线索+2）
  onExpeditionComplete(defId, nowSec) {
    const def = EXPEDITION_MAP[defId];
    if (!def || !def.ruinUnlock) return null;
    const site = this.get(def.ruinUnlock);
    if (!site) return null;
    site.addClue(2, nowSec);
    if (site.status === 'locked') {
      const r = site.discover(nowSec);
      if (r.ok) {
        this._log(nowSec, '远征带回的坐标揭示了' + site.def().name + '的位置');
        return site;
      }
    }
    return site;
  }
  onClueFor(defId, n, nowSec) {
    const site = this.get(defId);
    if (!site) return null;
    site.addClue(n, nowSec);
    if (site.status === 'locked' && site.clues >= 2) {
      site.discover(nowSec);
      this._log(nowSec, '线索拼凑完整，发现了' + site.def().name);
      return site;
    }
    return site;
  }
  // 发掘完成：结算奖励与解锁
  onExcavationComplete(site, crewMgr, nowSec) {
    const result = site.resolveStage(crewMgr, Math.random);
    if (!result) return null;
    if (site.isCompleted()) {
      site.completedAt = nowSec;
      const comp = site.completionRewards();
      // 汇总增益
      for (const k in comp.unlock.buffs) {
        this.unlockedBuffs[k] = (this.unlockedBuffs[k] || 1) * comp.unlock.buffs[k];
      }
      if (comp.unlock.tech) this.unlockedTechs.push(comp.unlock.tech);
      this.totalArtifacts += comp.rewards.artifact || 0;
      this._log(nowSec, site.def().name + ' 发掘完成，解锁「' + comp.unlock.name + '」');
      return { result: result, completed: true, rewards: comp.rewards, unlock: comp.unlock };
    }
    this._log(nowSec, site.def().name + ' 发掘阶段「' + result.stage + '」' +
      (result.passed ? '完成' : '失败，需重做'));
    return { result: result, completed: false };
  }
  // 星门建造（γ 解锁后）
  canBuildStargate(stock) {
    if (!this.get('gamma').isCompleted()) {
      return { ok: false, reason: '需要先完成遗迹 γ 的发掘' };
    }
    if (this.builtStargate) return { ok: false, reason: '星门信标已建造' };
    const def = RUIN_BUILDINGS.stargate;
    for (const k in def.cost) {
      if ((stock[k] || 0) < def.cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + def.cost[k] };
      }
    }
    return { ok: true, cost: def.cost };
  }
  buildStargate(stock, nowSec) {
    const check = this.canBuildStargate(stock);
    if (!check.ok) return check;
    for (const k in check.cost) stock[k] -= check.cost[k];
    this.builtStargate = true;
    for (const k in RUIN_BUILDINGS.stargate.buffs) {
      this.unlockedBuffs[k] = (this.unlockedBuffs[k] || 1) * RUIN_BUILDINGS.stargate.buffs[k];
    }
    this._log(nowSec, '星门信标在轨道站建成，深空航行全面提速');
    return { ok: true };
  }
  // 汇总增益（给 manager.getBuffs 用）
  buffs() {
    const b = {
      prodMul: 1, powerMul: 1, solarMul: 1, hullMul: 1,
      miningMul: 1, travelTimeMul: 1, expeditionRewardMul: 1,
      expeditionRiskMul: 1,
    };
    if (this.unlockedBuffs.powerMul) b.powerMul = this.unlockedBuffs.powerMul;
    if (this.unlockedBuffs.solarMul) b.solarMul = this.unlockedBuffs.solarMul;
    if (this.unlockedBuffs.hullMul) b.hullMul = this.unlockedBuffs.hullMul;
    if (this.unlockedBuffs.miningMul) b.miningMul = this.unlockedBuffs.miningMul;
    if (this.unlockedBuffs.travelTimeMul) b.travelTimeMul = this.unlockedBuffs.travelTimeMul;
    if (this.unlockedBuffs.expeditionRewardMul) b.expeditionRewardMul = this.unlockedBuffs.expeditionRewardMul;
    if (this.unlockedBuffs.expeditionRiskMul) b.expeditionRiskMul = this.unlockedBuffs.expeditionRiskMul;
    return b;
  }
  _log(t, text) {
    this.log.push({ t: Math.round(t), text: text });
    if (this.log.length > 120) this.log.splice(0, this.log.length - 120);
  }
  summary() {
    return {
      sites: this.sites.map(function (s) { return s.summary(); }),
      completed: this.completedCount(),
      unlockedTechs: this.unlockedTechs.slice(),
      buffs: this.buffs(),
      builtStargate: this.builtStargate,
      totalArtifacts: this.totalArtifacts,
    };
  }
  save() {
    return {
      sites: this.sites.map(function (s) { return s.save(); }),
      unlockedBuffs: this.unlockedBuffs,
      unlockedTechs: this.unlockedTechs,
      builtStargate: this.builtStargate,
      totalArtifacts: this.totalArtifacts,
      log: this.log,
    };
  }
  load(data) {
    if (!data) return;
    this.sites = (data.sites || []).map(function (s) { return DSRuinSite.load(s); });
    if (this.sites.length < 3) {
      const have = {};
      for (let i = 0; i < this.sites.length; i++) have[this.sites[i].defId] = true;
      for (let i = 0; i < RUIN_DEFS.length; i++) {
        if (!have[RUIN_DEFS[i].id]) this.sites.push(new DSRuinSite({ defId: RUIN_DEFS[i].id }));
      }
    }
    this.unlockedBuffs = data.unlockedBuffs || {};
    this.unlockedTechs = data.unlockedTechs || [];
    this.builtStargate = !!data.builtStargate;
    this.totalArtifacts = data.totalArtifacts || 0;
    this.log = data.log || [];
  }
}

// ================= 深空地图 =================
// 独立的深空视图：以火星为中心（0,0），节点按 AU 距离与轨道角排布。
// 节点：火星轨道站 / 火卫一 / 火卫二 / 月球基地 / 小行星带（内/中/外）/
// 遗迹 α/β/γ / 彗星交会点 / 太阳探测点 / 深空信标。
// 路线：任意两节点间航程 = 欧氏距离（AU），飞船按速度换算时间。
// 战争迷雾：节点需发现才显示详情；飞船位置实时更新。
const DS_MAP_NODES = [
  { id: 'mars-orbit', name: '火星轨道站', icon: '🛰️', kind: 'station', au: 0.05, angle: 0, desc: '深空计划的大本营，飞船的家。', discovered: true },
  { id: 'phobos', name: '火卫一', icon: '🌑', kind: 'moon', au: 0.12, angle: 40, desc: '火星最大的卫星，遗迹 α 藏在它的背面。', discovered: true },
  { id: 'deimos', name: '火卫二', icon: '🌘', kind: 'moon', au: 0.18, angle: 200, desc: '火星外侧的小卫星，布满神秘沟槽。', discovered: true },
  { id: 'moon-base', name: '月球基地', icon: '🌕', kind: 'base', au: 0.9, angle: 120, desc: '地月航线另一端的氦-3 产地。', discovered: false },
  { id: 'belt-inner', name: '小行星带 · 内带', icon: '🪨', kind: 'belt', au: 1.2, angle: 300, desc: '离火星最近的矿区，航程短、矿脉较贫。', discovered: true },
  { id: 'belt-middle', name: '小行星带 · 中带', icon: '🗿', kind: 'belt', au: 1.8, angle: 80, desc: '主带核心，产量与风险均衡。', discovered: true },
  { id: 'belt-outer', name: '小行星带 · 外带', icon: '💎', kind: 'belt', au: 2.5, angle: 190, desc: '最富的矿区，也是最危险的深空。遗迹 β 在此漂流。', discovered: false },
  { id: 'ruin-alpha', name: '遗迹 α', icon: '🏛️', kind: 'ruin', au: 0.12, angle: 42, desc: '火卫一背面的古代前哨。', discovered: false },
  { id: 'ruin-beta', name: '遗迹 β', icon: '🌀', kind: 'ruin', au: 2.5, angle: 195, desc: '外带深处的重力神殿。', discovered: false },
  { id: 'ruin-gamma', name: '遗迹 γ', icon: '👁️', kind: 'ruin', au: 4.5, angle: 260, desc: '太阳系边缘的守望者之门。', discovered: false },
  { id: 'comet-point', name: '彗星交会点', icon: '☄️', kind: 'event', au: 2.2, angle: 330, desc: '长周期彗星的近日点交会空域。', discovered: false },
  { id: 'solar-point', name: '太阳探测点', icon: '☀️', kind: 'event', au: 3.0, angle: 150, desc: '近日点太阳探测器的投放空域。', discovered: false },
  { id: 'kuiper-point', name: '柯伊伯带边缘', icon: '🧊', kind: 'event', au: 5.0, angle: 260, desc: '太阳系边缘，冷冻样本舱的回收点。', discovered: false },
  { id: 'beacon', name: '深空信标', icon: '📻', kind: 'event', au: 2.8, angle: 20, desc: '幽灵信号的源头，一座漂流的古代信标。', discovered: false },
];
const DS_MAP_NODE_MAP = {};
for (let i = 0; i < DS_MAP_NODES.length; i++) DS_MAP_NODE_MAP[DS_MAP_NODES[i].id] = DS_MAP_NODES[i];

// 固定航线（常用路线，附带风险系数）
const DS_MAP_ROUTES = [
  { from: 'mars-orbit', to: 'phobos', name: '火卫一航线', risk: 0.02 },
  { from: 'mars-orbit', to: 'deimos', name: '火卫二航线', risk: 0.02 },
  { from: 'mars-orbit', to: 'moon-base', name: '地月航线', risk: 0.05 },
  { from: 'mars-orbit', to: 'belt-inner', name: '内带航线', risk: 0.06 },
  { from: 'mars-orbit', to: 'belt-middle', name: '中带航线', risk: 0.10 },
  { from: 'mars-orbit', to: 'belt-outer', name: '外带航线', risk: 0.18 },
  { from: 'belt-middle', to: 'belt-outer', name: '带内横穿', risk: 0.12 },
  { from: 'belt-inner', to: 'belt-middle', name: '带内横穿', risk: 0.08 },
  { from: 'mars-orbit', to: 'ruin-alpha', name: '遗迹 α 航线', risk: 0.04 },
  { from: 'belt-outer', to: 'ruin-beta', name: '遗迹 β 航线', risk: 0.20 },
  { from: 'mars-orbit', to: 'comet-point', name: '彗星航线', risk: 0.12 },
  { from: 'mars-orbit', to: 'solar-point', name: '太阳探测航线', risk: 0.15 },
  { from: 'belt-outer', to: 'kuiper-point', name: '边缘航线', risk: 0.25 },
  { from: 'kuiper-point', to: 'ruin-gamma', name: '守望者航线', risk: 0.28 },
  { from: 'belt-outer', to: 'beacon', name: '信标航线', risk: 0.16 },
  { from: 'moon-base', to: 'belt-inner', name: '月球—内带', risk: 0.08 },
];

class DSDeepSpaceMap {
  constructor() {
    // 节点发现状态（存档可覆盖）
    this.discovered = {};
    for (let i = 0; i < DS_MAP_NODES.length; i++) {
      this.discovered[DS_MAP_NODES[i].id] = !!DS_MAP_NODES[i].discovered;
    }
    this.selectedNode = 'mars-orbit';
    this.zoom = 1;
    this.centerAU = 5.2;   // 视图半径（AU）
    this.routesFlown = {};  // 'from>to': 次数
    this.pirates = {};      // 节点海盗活动标记 {nodeId: untilSec}
  }

  node(id) { return DS_MAP_NODE_MAP[id] || null; }
  isDiscovered(id) { return !!this.discovered[id]; }
  discover(id, nowSec) {
    if (!DS_MAP_NODE_MAP[id]) return false;
    if (this.discovered[id]) return false;
    this.discovered[id] = true;
    return true;
  }
  discoveredNodes() {
    const out = [];
    for (let i = 0; i < DS_MAP_NODES.length; i++) {
      if (this.discovered[DS_MAP_NODES[i].id]) out.push(DS_MAP_NODES[i]);
    }
    return out;
  }
  undiscoveredNodes() {
    const out = [];
    for (let i = 0; i < DS_MAP_NODES.length; i++) {
      if (!this.discovered[DS_MAP_NODES[i].id]) out.push(DS_MAP_NODES[i]);
    }
    return out;
  }

  // 节点直角坐标（AU，火星为原点）
  position(id) {
    const n = DS_MAP_NODE_MAP[id];
    if (!n) return null;
    const rad = (n.angle * Math.PI) / 180;
    return { x: dsv3Round(n.au * Math.cos(rad), 3), y: dsv3Round(n.au * Math.sin(rad), 3), au: n.au, angle: n.angle };
  }
  // 两节点距离（AU）
  distance(fromId, toId) {
    const a = this.position(fromId);
    const b = this.position(toId);
    if (!a || !b) return null;
    return dsv3Round(Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)), 3);
  }
  // 航行时间（秒）：距离 / 速度 × 通讯/遗迹加速
  travelTimeSec(fromId, toId, ship, travelMul) {
    const d = this.distance(fromId, toId);
    if (d == null || !ship) return null;
    const speed = ship.speedAUPerHour() * (travelMul || 1);
    if (speed <= 0) return null;
    return Math.round((d / speed) * 3600);
  }
  // 燃料需求
  fuelNeed(fromId, toId, ship) {
    const d = this.distance(fromId, toId);
    if (d == null || !ship) return null;
    return ship.fuelFor(d);
  }
  // 航线风险（固定航线表 + 距离修正）
  routeRisk(fromId, toId) {
    for (let i = 0; i < DS_MAP_ROUTES.length; i++) {
      const r = DS_MAP_ROUTES[i];
      if ((r.from === fromId && r.to === toId) || (r.from === toId && r.to === fromId)) {
        return r.risk;
      }
    }
    const d = this.distance(fromId, toId);
    if (d == null) return 0.1;
    return dsv3Clamp(0.05 + d * 0.04, 0.02, 0.35);
  }
  // 标记航线已飞（用于统计与成就）
  recordRoute(fromId, toId) {
    const key = fromId + '>' + toId;
    this.routesFlown[key] = (this.routesFlown[key] || 0) + 1;
  }
  // 海盗活动
  setPirates(nodeId, untilSec) { this.pirates[nodeId] = untilSec; }
  pirateAt(nodeId, nowSec) {
    return this.pirates[nodeId] && nowSec < this.pirates[nodeId];
  }
  // 飞船在地图上的插值位置（按航行进度）
  shipPosition(ship) {
    if (!ship.destination || ship.status === SHIP_STATUS.DOCKED) {
      return this.position(ship.location);
    }
    const a = this.position(ship.location);
    const b = this.position(ship.destination);
    if (!a || !b) return null;
    const p = dsv3Clamp(ship.progress || 0, 0, 1);
    return {
      x: dsv3Round(a.x + (b.x - a.x) * p, 3),
      y: dsv3Round(a.y + (b.y - a.y) * p, 3),
      au: null, angle: null,
      enRoute: true, progress: p,
    };
  }
  // 某节点附近的飞船
  shipsNear(nodeId, ships, radiusAU) {
    const pos = this.position(nodeId);
    if (!pos) return [];
    const out = [];
    for (let i = 0; i < ships.length; i++) {
      const sp = this.shipPosition(ships[i]);
      if (!sp) continue;
      const d = Math.sqrt((sp.x - pos.x) * (sp.x - pos.x) + (sp.y - pos.y) * (sp.y - pos.y));
      if (d <= (radiusAU || 0.3)) out.push({ ship: ships[i], distance: dsv3Round(d, 2) });
    }
    return out;
  }

  // —— 地图渲染数据（给 UI 画布 / DOM 用，不依赖浏览器 API）——
  // 返回视图模型：节点、航线、飞船位置，全部是纯数据。
  viewModel(ships, nowSec) {
    const nodes = [];
    for (let i = 0; i < DS_MAP_NODES.length; i++) {
      const n = DS_MAP_NODES[i];
      const pos = this.position(n.id);
      nodes.push({
        id: n.id, name: n.name, icon: n.icon, kind: n.kind,
        x: pos.x, y: pos.y, au: n.au, angle: n.angle,
        discovered: !!this.discovered[n.id],
        desc: n.desc,
        pirates: this.pirateAt(n.id, nowSec || 0),
        selected: this.selectedNode === n.id,
      });
    }
    const routes = [];
    for (let i = 0; i < DS_MAP_ROUTES.length; i++) {
      const r = DS_MAP_ROUTES[i];
      const a = this.position(r.from);
      const b = this.position(r.to);
      if (!a || !b) continue;
      routes.push({
        from: r.from, to: r.to, name: r.name, risk: r.risk,
        ax: a.x, ay: a.y, bx: b.x, by: b.y,
        flown: this.routesFlown[r.from + '>' + r.to] || 0,
      });
    }
    const shipDots = [];
    for (let i = 0; i < (ships || []).length; i++) {
      const s = ships[i];
      if (s.status === SHIP_STATUS.LOST || s.status === SHIP_STATUS.BUILDING) continue;
      const sp = this.shipPosition(s);
      if (!sp) continue;
      shipDots.push({
        id: s.id, name: s.name, type: s.type, icon: s.def().icon,
        x: sp.x, y: sp.y, status: s.status,
        statusLabel: SHIP_STATUS_LABEL[s.status],
        destination: s.destination, progress: s.progress,
      });
    }
    return {
      center: { x: 0, y: 0 },
      radiusAU: this.centerAU,
      zoom: this.zoom,
      nodes: nodes,
      routes: routes,
      ships: shipDots,
      discoveredCount: this.discoveredNodes().length,
      totalNodes: DS_MAP_NODES.length,
    };
  }
  // 选中节点详情（给 UI 面板用）
  nodeDetail(id, context) {
    const n = DS_MAP_NODE_MAP[id];
    if (!n) return null;
    const detail = {
      id: n.id, name: n.name, icon: n.icon, kind: n.kind,
      desc: n.desc, au: n.au,
      discovered: !!this.discovered[id],
      position: this.position(id),
    };
    if (!detail.discovered) {
      detail.hint = '未发现的空域——派探索船勘测后可揭示。';
      return detail;
    }
    if (context) {
      if (id === 'moon-base' && context.moon) detail.moon = context.moon.summary();
      if (id === 'mars-orbit' && context.station) detail.station = context.station.summary();
      if (id.indexOf('belt-') === 0 && context.belt) {
        const zone = id.replace('belt-', '');
        detail.asteroids = context.belt.asteroids
          .filter(function (a) { return a.zone === zone && a.discovered; })
          .map(function (a) { return a.summary(); });
      }
      if (id.indexOf('ruin-') === 0 && context.ruins) {
        const site = context.ruins.get(id.replace('ruin-', ''));
        if (site) detail.ruin = site.summary();
      }
      if (context.fleet) {
        detail.shipsHere = context.fleet.ships
          .filter(function (s) { return s.location === id; })
          .map(function (s) { return s.summary(); });
      }
    }
    // 从火星轨道出发的航程
    if (context && context.fleet) {
      const docked = context.fleet.dockedShips()[0];
      if (docked && id !== 'mars-orbit') {
        detail.distanceFromMars = this.distance('mars-orbit', id);
        detail.travelTimeSec = this.travelTimeSec('mars-orbit', id, docked, 1);
        detail.fuelNeed = this.fuelNeed('mars-orbit', id, docked);
        detail.risk = this.routeRisk('mars-orbit', id);
      }
    }
    return detail;
  }

  save() {
    return {
      discovered: this.discovered,
      selectedNode: this.selectedNode,
      zoom: this.zoom,
      centerAU: this.centerAU,
      routesFlown: this.routesFlown,
      pirates: this.pirates,
    };
  }
  load(data) {
    if (!data) return;
    if (data.discovered) this.discovered = data.discovered;
    this.selectedNode = data.selectedNode || 'mars-orbit';
    this.zoom = data.zoom || 1;
    this.centerAU = data.centerAU || 5.2;
    this.routesFlown = data.routesFlown || {};
    this.pirates = data.pirates || {};
  }
}

// ================= 深空总管理器 =================
// 拥有全部子系统 + 深空账本 + 游戏内时钟；update(now, game) 是唯一入口。
// 生产按「小时」结算：dt 累积到 prodAccum，满 1 小时结算一次，
// 避免每 tick 做浮点生产。所有与 game 的交互都防御性读取。
class DeepSpaceV3 {
  constructor(seed) {
    this.version = DEEPSPACE_V3_VERSION;
    this.seed = seed || 'starport-v3';
    this.stock = dsv3DeepCopy(DS_STARTING_STOCK);
    this.gameTimeSec = 0;          // 深空层游戏内时钟（秒）
    this.lastTickAt = 0;           // 上次 update 的 now（毫秒时间戳）
    this.started = false;
    this.prodAccumSec = 0;         // 生产累积秒数
    this.eventAccumSec = 0;        // 事件骰累积秒数
    this.discoveryPool = 0;        // 天文台积累的发现进度
    this.station = new DSOrbitalStation();
    this.moon = new DSLunarBase();
    this.belt = new DSBeltManager(this.seed + '-belt');
    this.fleet = new DSFleetManager();
    this.crew = new DSCrewManager();
    this.expeditions = new DSExpeditionManager();
    this.ruins = new DSRuinManager();
    this.map = new DSDeepSpaceMap();
    this.tech = new DSTechTree();
    this.events = new DSEventDeck();
    this.contracts = new DSContractBoard();
    this.exchange = new DSExchange();
    this.milestones = new DSMilestones();
    this.autoOps = new DSAutoOps();
    this.depots = new DSDepotNetwork();
    this.artifactLab = new DSArtifactLab();
    this.voyages = new DSVoyageLog();
    this.logistics = new DSLogistics();
    this.kuiper = new DSKuiperBelt(this.seed + '-kuiper');
    this.outposts = new DSOutpostManager();
    this.formations = new DSFormationManager();
    this.weather = new DSSolarWeather();
    this.chains = new DSExpeditionChains();
    this.squads = new DSCrewSquads();
    this.expeditions.squadBonusFn = function (ids) {
      return this.squads.sharedSquadBonus(ids);
    }.bind(this);
    this.stats = {
      hoursPlayed: 0,
      he3Mined: 0,
      oreMined: 0,
      expeditionsDone: 0,
      ruinsDone: 0,
      shipsLost: 0,
      crewLost: 0,
      distanceAU: 0,
    };
    this.log = [];                 // 深空日志 [{t, text, kind}]
    this.unlocked = false;         // 深空层是否解锁（需要太空港/科技）
    this._stationFounded = false;
  }

  // —— 解锁 ——
  // 深空层解锁条件：game 有太空港建筑，或科技 t-orb-1，或无 game 时默认解锁。
  checkUnlock(game) {
    if (this.unlocked) return true;
    if (!game) { this.unlocked = true; return true; }
    try {
      if (game.tech && typeof game.tech.has === 'function' && game.tech.has(DS_TUNE_V3.unlockStationTech)) {
        this.unlocked = true; return true;
      }
      if (game.builder && game.builder.buildings) {
        const list = game.builder.buildings;
        for (let i = 0; i < list.length; i++) {
          if (list[i] && list[i].id === 'spaceport') { this.unlocked = true; return true; }
        }
      }
      if (game.player && game.player.inv && (game.player.inv.tech || 0) >= 30) {
        this.unlocked = true; return true;
      }
    } catch (e) { /* 防御：game 结构异常时不解锁也不崩 */ }
    return false;
  }
  hasTech(game, techId) {
    if (this.tech.unlocked(techId)) return true;
    if (!game) return false;
    try {
      if (game.tech && typeof game.tech.has === 'function') return !!game.tech.has(techId);
    } catch (e) { return false; }
    return false;
  }

  // —— 轨道站建立 ——
  foundStation(stock, nowSec) {
    if (this._stationFounded) return { ok: false, reason: '轨道站已建立' };
    const cost = { steel: 800, rare: 300, tech: 100, fuel: 100 };
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    for (const k in cost) stock[k] -= cost[k];
    this._stationFounded = true;
    this.station.foundedAt = nowSec;
    this._log(nowSec, '火星轨道站建立：第一环合龙，深空计划正式启动', 'station');
    return { ok: true };
  }
  stationFounded() { return this._stationFounded; }

  // —— 与主游戏的资源互通 ——
  // 从主游戏仓库转入深空账本（防御性：game.player.inv 不存在则失败）
  importFromGame(game, resKey, amount) {
    if (!game || !game.player || !game.player.inv) {
      return { ok: false, reason: '主游戏仓库不可用' };
    }
    const inv = game.player.inv;
    const have = inv[resKey] || 0;
    const take = Math.min(have, amount);
    if (take <= 0) return { ok: false, reason: '主游戏仓库中没有' + (DS_RESOURCES[resKey] ? DS_RESOURCES[resKey].name : resKey) };
    inv[resKey] -= take;
    this.stock[resKey] = (this.stock[resKey] || 0) + take;
    return { ok: true, amount: take };
  }
  exportToGame(game, resKey, amount) {
    if (!game || !game.player || !game.player.inv) {
      return { ok: false, reason: '主游戏仓库不可用' };
    }
    const have = this.stock[resKey] || 0;
    const take = Math.min(have, amount);
    if (take <= 0) return { ok: false, reason: '深空账本中没有' + (DS_RESOURCES[resKey] ? DS_RESOURCES[resKey].name : resKey) };
    this.stock[resKey] -= take;
    game.player.inv[resKey] = (game.player.inv[resKey] || 0) + take;
    return { ok: true, amount: take };
  }

  // —— 增益汇总（给 game 产量乘数用）——
  getBuffs() {
    const ruinBuffs = this.ruins.buffs();
    const techBuffs = this.tech.buffs();
    const artBuffs = this.artifactLab ? this.artifactLab.buffs() : {};
    const buffs = {
      prodMul: 1, powerMul: 1, solarMul: 1, hullMul: 1,
      miningMul: 1, travelTimeMul: 1, expeditionRewardMul: 1,
      expeditionRiskMul: 1, researchMul: 1,
    };
    // 遗迹增益
    for (const k in ruinBuffs) buffs[k] = (buffs[k] || 1) * ruinBuffs[k];
    // 科技增益
    for (const k in techBuffs) buffs[k] = (buffs[k] || 1) * techBuffs[k];
    // 碎片研究增益
    for (const k in artBuffs) buffs[k] = (buffs[k] || 1) * artBuffs[k];
    // 轨道站：太阳能帆遗迹加成作用于电力
    buffs.prodMul = dsv3Round(buffs.prodMul, 3);
    return buffs;
  }
  travelTimeMul() {
    let m = this.station.travelTimeMul();
    m *= this.getBuffs().travelTimeMul;
    m *= this.weather.travelMul();
    return m;
  }

  // —— 舰队调度：采矿 ——
  // 派采矿船去已认领小行星：往返 + 作业时间一次算清，返航时结算矿石。
  sendMiningShip(shipId, asteroidId, miningHours, nowSec) {
    const ship = this.fleet.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    if (ship.type !== 'miner') return { ok: false, reason: '采矿需要采矿船' };
    const asteroid = this.belt.get(asteroidId);
    if (!asteroid) return { ok: false, reason: '找不到该小行星' };
    if (!asteroid.claimed || asteroid.claimedBy !== shipId) {
      return { ok: false, reason: '请先认领该小行星（认领绑定飞船）' };
    }
    if (asteroid.depleted()) return { ok: false, reason: '该小行星已采空' };
    miningHours = dsv3Clamp(miningHours || 24, 4, 120);
    const dist = this.map.distance('mars-orbit', 'belt-' + asteroid.zone) || asteroid.au;
    const depart = this.fleet.depart(shipId, 'belt-' + asteroid.zone, dist, {
      kind: SHIP_MISSION_KIND.MINING,
      targetId: asteroidId, miningHours: miningHours,
    }, this.crew, nowSec, this.travelTimeMul());
    if (!depart.ok) return depart;
    this.map.recordRoute('mars-orbit', 'belt-' + asteroid.zone);
    this._log(nowSec, ship.name + ' 出发前往 ' + asteroid.name + ' 采矿（作业 ' + miningHours + ' 小时）', 'fleet');
    return { ok: true, ship: ship, totalSec: depart.totalSec, miningHours: miningHours };
  }

  // —— 舰队调度：月球补给 ——
  // 运输船装载水/食物/氧去月球，返航时把月球产出的氦-3 等带回。
  sendMoonSupply(shipId, cargo, nowSec) {
    const ship = this.fleet.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    if (ship.type !== 'transport') return { ok: false, reason: '月球补给需要运输船' };
    if (!this.moon.founded) return { ok: false, reason: '月球基地尚未建立' };
    // 装货
    let loaded = 0;
    for (const k in (cargo || {})) {
      const want = cargo[k];
      const have = this.stock[k] || 0;
      const take = Math.min(want, have);
      if (take > 0) {
        const actually = ship.loadCargo(k, take);
        this.stock[k] -= actually;
        loaded += actually;
      }
    }
    if (loaded <= 0) return { ok: false, reason: '没有装载任何补给（水/食物/氧气）' };
    const dist = this.map.distance('mars-orbit', 'moon-base') || 0.9;
    const tripMul = this.travelTimeMul() * this.moon.tripTimeMul();
    const depart = this.fleet.depart(shipId, 'moon-base', dist, {
      kind: SHIP_MISSION_KIND.SUPPLY_MOON,
    }, this.crew, nowSec, tripMul);
    if (!depart.ok) {
      // 出航失败：卸货归还
      const back = ship.unloadAll();
      for (const k in back) this.stock[k] = (this.stock[k] || 0) + back[k];
      return depart;
    }
    this.map.recordRoute('mars-orbit', 'moon-base');
    this._log(nowSec, ship.name + ' 满载补给出发前往月球基地', 'fleet');
    return { ok: true, ship: ship, loaded: loaded, totalSec: depart.totalSec };
  }

  // —— 舰队调度：普通货运 ——
  sendTransport(shipId, destinationId, cargo, nowSec) {
    const ship = this.fleet.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    if (ship.type !== 'transport') return { ok: false, reason: '货运需要运输船' };
    if (!this.map.node(destinationId)) return { ok: false, reason: '未知目的地' };
    if (!this.map.isDiscovered(destinationId)) return { ok: false, reason: '目的地尚未发现' };
    let loaded = 0;
    for (const k in (cargo || {})) {
      const take = Math.min(cargo[k], this.stock[k] || 0);
      if (take > 0) {
        const actually = ship.loadCargo(k, take);
        this.stock[k] -= actually;
        loaded += actually;
      }
    }
    if (loaded <= 0) return { ok: false, reason: '没有装载任何货物' };
    const dist = this.map.distance('mars-orbit', destinationId) || 1;
    const depart = this.fleet.depart(shipId, destinationId, dist, {
      kind: SHIP_MISSION_KIND.TRANSPORT, cargo: cargo,
    }, this.crew, nowSec, this.travelTimeMul());
    if (!depart.ok) {
      const back = ship.unloadAll();
      for (const k in back) this.stock[k] = (this.stock[k] || 0) + back[k];
      return depart;
    }
    this.map.recordRoute('mars-orbit', destinationId);
    return { ok: true, ship: ship, loaded: loaded, totalSec: depart.totalSec };
  }

  // —— 舰队调度：巡逻 ——
  sendPatrol(shipId, nodeId, hours, nowSec) {
    const ship = this.fleet.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    if (!this.map.node(nodeId)) return { ok: false, reason: '未知巡逻空域' };
    hours = dsv3Clamp(hours || 24, 6, 168);
    const dist = this.map.distance('mars-orbit', nodeId) || 1;
    const depart = this.fleet.depart(shipId, nodeId, dist, {
      kind: SHIP_MISSION_KIND.PATROL, patrolHours: hours,
    }, this.crew, nowSec, this.travelTimeMul());
    if (!depart.ok) return depart;
    return { ok: true, ship: ship, totalSec: depart.totalSec, patrolHours: hours };
  }

  // —— 远征出发（远征 + 飞船出航一次办好）——
  launchExpedition(defId, shipId, nowSec) {
    const ship = this.fleet.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    const check = this.expeditions.canStart(defId, ship, this.crew, null);
    if (!check.ok) return check;
    const def = check.def;
    // 先建远征（配员），再让飞船出航
    const started = this.expeditions.start(defId, ship, this.crew, nowSec);
    if (!started.ok) return started;
    // 把选中的船员编入飞船（depart 的出航检查要求船员满额）；
    // 远征配员可能少于飞船最低船员数，用待命船员补足
    let crewIds = started.crewIds.slice();
    if (crewIds.length < ship.crewNeed()) {
      const extra = this.crew.roster.filter(function (c) {
        return c.isAvailable() && crewIds.indexOf(c.id) < 0;
      });
      extra.sort(function (a, b) { return b.roleSkillAvg() - a.roleSkillAvg(); });
      while (crewIds.length < ship.crewNeed() && extra.length) {
        crewIds.push(extra.shift().id);
      }
    }
    const assignRes = this.fleet.assignCrew(ship.id, crewIds, this.crew);
    if (!assignRes.ok) {
      this.expeditions.abort(started.expedition.id, nowSec);
      return assignRes;
    }
    // 补足的船员也计入远征名单（同甘共苦，同享经验）
    started.expedition.crewIds = crewIds;
    const dist = def.distanceAU;
    const depart = this.fleet.depart(shipId, 'expedition-' + defId, dist, {
      kind: SHIP_MISSION_KIND.EXPEDITION, expeditionId: started.expedition.id,
    }, this.crew, nowSec, this.travelTimeMul());
    if (!depart.ok) {
      // 出航失败：撤销远征
      this.expeditions.abort(started.expedition.id, nowSec);
      return depart;
    }
    // 飞船状态改为远征中（depart 设为 EN_ROUTE，manager 到达时再处理）
    ship.status = SHIP_STATUS.EXPEDITION;
    ship.tripTotalSec = def.durationHours * 3600;
    ship.tripElapsedSec = 0;
    ship.progress = 0;
    this._log(nowSec, '远征出发：' + def.name + '（' + ship.name + '）', 'expedition');
    return { ok: true, expedition: started.expedition, ship: ship };
  }

  // —— 遗迹发掘出发 ——
  launchExcavation(ruinId, shipId, nowSec) {
    const site = this.ruins.get(ruinId);
    if (!site) return { ok: false, reason: '未知遗迹' };
    const ship = this.fleet.get(shipId);
    if (!ship) return { ok: false, reason: '找不到飞船' };
    const check = site.canExcavate(ship, this.crew, null);
    if (!check.ok) return check;
    const started = site.startExcavation(ship, this.crew, nowSec);
    if (!started.ok) return started;
    // 把发掘队员编入飞船；不足飞船最低配员时用待命船员补足
    let crewIds = site.excavation.crewIds.slice();
    if (crewIds.length < ship.crewNeed()) {
      const extra = this.crew.roster.filter(function (c) {
        return c.isAvailable() && crewIds.indexOf(c.id) < 0;
      });
      extra.sort(function (a, b) { return b.roleSkillAvg() - a.roleSkillAvg(); });
      while (crewIds.length < ship.crewNeed() && extra.length) {
        crewIds.push(extra.shift().id);
      }
    }
    const assignRes = this.fleet.assignCrew(ship.id, crewIds, this.crew);
    if (!assignRes.ok) {
      site.excavation = null;
      site.status = 'discovered';
      return assignRes;
    }
    site.excavation.crewIds = crewIds;
    // 船员进入远征状态
    for (let i = 0; i < site.excavation.crewIds.length; i++) {
      const c = this.crew.get(site.excavation.crewIds[i]);
      if (c) { c.status = CREW_STATUS.EXPEDITION; c.assignment = { kind: 'ruin', id: ruinId }; }
    }
    // 飞船出航到遗迹节点
    const nodeId = 'ruin-' + ruinId;
    const dist = this.map.distance('mars-orbit', nodeId) || site.def().au;
    const depart = this.fleet.depart(shipId, nodeId, dist, {
      kind: SHIP_MISSION_KIND.EXPEDITION, ruinId: ruinId,
    }, this.crew, nowSec, this.travelTimeMul());
    if (!depart.ok) {
      site.excavation = null;
      site.status = 'discovered';
      return depart;
    }
    ship.status = SHIP_STATUS.EXPEDITION;
    // 发掘时长覆盖航行时间：飞船在遗迹停留至发掘结束
    ship.tripTotalSec = started.endsAt - nowSec + depart.totalSec;
    ship.tripElapsedSec = 0;
    this._log(nowSec, '发掘队出发：' + site.def().name + '（' + ship.name + '）', 'ruin');
    return { ok: true, site: site, ship: ship, endsAt: started.endsAt };
  }

  // —— 飞船抵达处理（fleet.update 的 onArrive 回调）——
  onShipArrive(ship, nowSec, events) {
    const mission = ship.mission;
    const dest = ship.destination;
    ship.location = dest;
    ship.destination = null;
    ship.progress = 1;
    if (!mission) {
      ship.status = SHIP_STATUS.DOCKED;
      ship.tripsCompleted++;
      this.fleet.totalTrips++;
      return;
    }
    if (mission.kind === SHIP_MISSION_KIND.MINING) {
      // 采矿：开始作业——用状态 MINING + 作业计时，作业结束再返航
      const asteroid = this.belt.get(mission.targetId);
      if (!asteroid || asteroid.depleted()) {
        // 目标没了：直接返航
        this._returnShipHome(ship, nowSec);
        return;
      }
      ship.status = SHIP_STATUS.MINING;
      ship.mission.miningEndsAt = nowSec + mission.miningHours * 3600;
      ship.mission.miningStartedAt = nowSec;
      this._log(nowSec, ship.name + ' 抵达 ' + asteroid.name + '，开始采矿作业', 'fleet');
      events.push({ kind: 'mining-start', shipId: ship.id });
      return;
    }
    if (mission.kind === SHIP_MISSION_KIND.SUPPLY_MOON) {
      // 月球补给：卸货给月球基地，装载月球产出返航
      const cargo = ship.unloadAll();
      this.moon.receiveSupply(cargo, nowSec);
      // 装载月球产出：优先氦-3，其次钛/稀土（按库存比例）
      this._loadMoonExports(ship);
      this._returnShipHome(ship, nowSec);
      events.push({ kind: 'moon-supply', shipId: ship.id });
      return;
    }
    if (mission.kind === SHIP_MISSION_KIND.TRANSPORT) {
      // 货运：货物留在目的地（简化：直接计入深空账本，视为已交付）
      const cargo = ship.unloadAll();
      let value = 0;
      for (const k in cargo) value += cargo[k] * (DS_RESOURCES[k] ? DS_RESOURCES[k].value : 0);
      this._log(nowSec, ship.name + ' 向 ' + (this.map.node(dest) ? this.map.node(dest).name : dest) +
        ' 交付货物（价值 ' + value + '）', 'fleet');
      this._returnShipHome(ship, nowSec);
      events.push({ kind: 'transport-delivered', shipId: ship.id, value: value });
      return;
    }
    if (mission.kind === SHIP_MISSION_KIND.PATROL) {
      ship.status = SHIP_STATUS.MINING; // 复用 MINING 状态作「在场作业」
      ship.mission.patrolEndsAt = nowSec + (mission.patrolHours || 24) * 3600;
      events.push({ kind: 'patrol-start', shipId: ship.id });
      return;
    }
    if (mission.kind === SHIP_MISSION_KIND.SURVEY) {
      // 勘测：发现新小行星
      const found = this.belt.addSurvey(1 + ship.scanBonus(), nowSec);
      for (let i = 0; i < found.length; i++) this.map.discover('belt-' + found[i].zone, nowSec);
      this._returnShipHome(ship, nowSec);
      events.push({ kind: 'survey-done', shipId: ship.id, found: found.length });
      return;
    }
    // 远征 / 遗迹：飞船留在目的地，等待远征/发掘计时结束（由 expedition/ruin 计时驱动）
    if (mission.kind === SHIP_MISSION_KIND.EXPEDITION) {
      ship.status = SHIP_STATUS.EXPEDITION;
      events.push({ kind: 'expedition-arrive', shipId: ship.id });
      return;
    }
    ship.status = SHIP_STATUS.DOCKED;
    ship.tripsCompleted++;
    this.fleet.totalTrips++;
  }

  // 采矿作业完成 → 结算矿石 → 返航
  _finishMining(ship, nowSec) {
    const mission = ship.mission;
    const asteroid = this.belt.get(mission.targetId);
    if (!asteroid) { this._returnShipHome(ship, nowSec); return; }
    const hours = ((mission.miningEndsAt - mission.miningStartedAt) / 3600) || 24;
    // 船员采矿效率：矿工技能均值
    let eff = 1;
    let skillSum = 0, n = 0;
    for (let i = 0; i < ship.crewIds.length; i++) {
      const c = this.crew.get(ship.crewIds[i]);
      if (!c) continue;
      skillSum += c.skills.mining || 0; n++;
      eff *= 1; // 占位，保持结构清晰
    }
    if (n) eff = 0.7 + (skillSum / n / 100) * 0.6;
    eff *= this.getBuffs().miningMul;
    const result = this.belt.miningYield(asteroid, ship, hours, eff);
    // 装船（载荷上限截断，多余矿石留在小行星）
    let loadedValue = 0;
    for (const k in result.out) {
      const loaded = ship.loadCargo(k, Math.floor(result.out[k]));
      loadedValue += loaded * (DS_RESOURCES[k] ? DS_RESOURCES[k].value : 0);
      // 没装下的部分不返还（视为抛弃），但储量已扣——这是采矿的真实代价
    }
    this.stats.oreMined += result.mined;
    this.belt.totalTrips++;
    DSCareerTracker.recordMining(this.crew, ship.crewIds, result.mined);
    // 采矿事故判定
    const risk = this.belt.miningRisk(asteroid, ship, n ? skillSum / n : 50);
    if (Math.random() < risk) {
      const dmg = Math.round(20 + Math.random() * 30);
      const res = ship.damage(dmg, '采矿事故');
      this._log(nowSec, ship.name + ' 采矿时发生事故，船体 -' + dmg, 'fleet');
      if (res.destroyed) {
        this.fleet.destroyShip(ship, '采矿事故', nowSec, this.crew);
        this.stats.shipsLost++;
        return;
      }
      // 事故可能伤人
      if (ship.crewIds.length && Math.random() < 0.5) {
        const c = this.crew.get(ship.crewIds[Math.floor(Math.random() * ship.crewIds.length)]);
        if (c) {
          c.injure(1, '采矿事故', nowSec);
          this.crew.totalInjured++;
        }
      }
    }
    this._log(nowSec, ship.name + ' 完成采矿：' + Math.round(result.mined) + ' 吨矿石（价值 ' +
      loadedValue + '），返航', 'fleet');
    this._returnShipHome(ship, nowSec);
  }

  // 月球出口装载：氦-3 优先
  _loadMoonExports(ship) {
    const order = ['helium3', 'titanium', 'rare', 'water'];
    for (let i = 0; i < order.length; i++) {
      const k = order[i];
      const have = Math.floor(this.stock[k] || 0);
      if (have <= 0) continue;
      // 月球产出只带回一半（留一半作基地储备）
      const take = Math.floor(have * 0.5);
      const loaded = ship.loadCargo(k, take);
      if (loaded > 0) this.stock[k] -= loaded;
    }
  }

  // 返航：从当前位置回火星轨道
  _returnShipHome(ship, nowSec) {
    const from = ship.location;
    const dist = this.map.distance(from, 'mars-orbit');
    const d = (dist == null ? 1 : dist);
    const fuelNeed = ship.fuelFor(d);
    if (ship.fuel < fuelNeed) {
      // 燃料不够：就地等待（状态不变，等玩家手动加油——这里先停靠在原地）
      this._log(nowSec, ship.name + ' 燃料不足无法返航，滞留在 ' + from, 'fleet');
      ship.status = SHIP_STATUS.DOCKED; // 原地待命，等待补给
      ship.location = from;
      return false;
    }
    const ret = this.fleet.returnHome(ship.id, d, this.crew, nowSec, this.travelTimeMul());
    if (!ret.ok) {
      ship.status = SHIP_STATUS.DOCKED;
      return false;
    }
    return true;
  }

  // 返航抵达火星轨道：卸货进账本
  _onReturnHome(ship, nowSec) {
    const cargo = ship.unloadAll();
    this.voyages.record(nowSec, ship, 'return-home', '返航抵达，卸货 ' + Object.keys(cargo).length + ' 种资源');
    for (const k in cargo) {
      this.stock[k] = (this.stock[k] || 0) + cargo[k];
      if (k === 'helium3') this.stats.he3Mined += cargo[k];
    }
    ship.location = 'mars-orbit';
    ship.status = SHIP_STATUS.DOCKED;
    ship.mission = null;
    ship.tripsCompleted++;
    this.fleet.totalTrips++;
    this.stats.distanceAU += 0; // 距离已在 depart 时累计
    this.fleet.releaseCrew(ship, this.crew, nowSec);
    this._log(nowSec, ship.name + ' 返航抵达火星轨道，货物已入库', 'fleet');
  }

  _log(t, text, kind) {
    this.log.push({ t: Math.round(t), text: text, kind: kind || 'info' });
    if (this.log.length > 300) this.log.splice(0, this.log.length - 300);
  }

  // —— 主循环：update(now, game) ——
  // now: 毫秒时间戳（与 game.js 的 tick(now) 一致）；game 可为空。
  // dt 上限 10 分钟（切后台回来不一次性结算几小时，避免数值爆炸）。
  update(now, game) {
    if (!this.started) {
      this.started = true;
      this.lastTickAt = now;
      this.belt.generate();
      return { dtSec: 0, events: [] };
    }
    let dtMs = now - this.lastTickAt;
    if (dtMs < 0) dtMs = 0;
    if (dtMs > 10 * 60 * 1000) dtMs = 10 * 60 * 1000;
    this.lastTickAt = now;
    const dtSec = dtMs / 1000;
    if (dtSec <= 0) return { dtSec: 0, events: [] };
    const speedMul = (game && game.speedMode === 2) ? 2 : 1;
    const dt = dtSec * speedMul;
    this.gameTimeSec += dt;
    const nowSec = this.gameTimeSec;
    const events = [];

    // 1. 船员系统
    const crewRes = this.crew.update(dt, nowSec, this.stock, Math.random);

    // 1b. 太阳天气推进
    const weatherChange = this.weather.update(nowSec, Math.random);
    if (weatherChange) {
      this._log(nowSec, '太阳天气变为「' + DS_SOLAR_WEATHER[weatherChange.to].name + '」', 'event');
      events.push({ kind: 'weather', from: weatherChange.from, to: weatherChange.to });
    }
    this.expeditions.weatherRiskMul = this.weather.riskMul();

    // 2. 舰队：建造/升级/维修/航行推进；抵达回调处理采矿/补给/远征
    const self = this;
    const fleetRes = this.fleet.update(dt, nowSec, this.stock, this.crew, {
      onArrive: function (ship, t, evts) {
        // 返航抵达（destination === 'mars-orbit' 且之前是 RETURNING）
        if (ship.status === SHIP_STATUS.RETURNING) {
          self._onReturnHome(ship, t);
          evts.push({ kind: 'return-home', shipId: ship.id });
          return;
        }
        self.onShipArrive(ship, t, evts);
      },
    });
    for (let i = 0; i < fleetRes.events.length; i++) events.push(fleetRes.events[i]);

    // 3. 采矿作业 / 巡逻进行中结算
    for (let i = 0; i < this.fleet.ships.length; i++) {
      const s = this.fleet.ships[i];
      if (s.status === SHIP_STATUS.MINING && s.mission) {
        if (s.mission.kind === SHIP_MISSION_KIND.MINING && s.mission.miningEndsAt && nowSec >= s.mission.miningEndsAt) {
          this._finishMining(s, nowSec);
        } else if (s.mission.kind === SHIP_MISSION_KIND.PATROL && s.mission.patrolEndsAt && nowSec >= s.mission.patrolEndsAt) {
          // 巡逻结束：降低该节点海盗风险，返航
          this.map.pirates[s.location] = 0;
          this._log(nowSec, s.name + ' 完成巡逻，' + s.location + ' 空域恢复安全', 'fleet');
          this._returnShipHome(s, nowSec);
        }
      }
      // 远征中的飞船：远征计时由远征管理器驱动，这里只同步进度
      if (s.status === SHIP_STATUS.EXPEDITION && s.mission && s.mission.kind === SHIP_MISSION_KIND.EXPEDITION) {
        if (s.mission.expeditionId) {
          const exp = this.expeditions.get(s.mission.expeditionId);
          if (exp) s.progress = exp.progress;
        }
      }
    }

    // 4. 远征推进与完成
    const finishedExps = this.expeditions.update(dt, nowSec, this.fleet, this.crew, {
      onExpeditionComplete: function (exp, result, ship, t) {
        self._onExpeditionComplete(exp, result, ship, t);
        events.push({ kind: 'expedition-complete', expeditionId: exp.id, success: result.success });
      },
    });

    // 5. 遗迹发掘推进
    for (let i = 0; i < this.ruins.sites.length; i++) {
      const site = this.ruins.sites[i];
      if (site.excavation && nowSec >= site.excavation.endsAt) {
        const ship = this.fleet.get(site.excavation.shipId);
        const crewIds = site.excavation.crewIds.slice();
        const outcome = this.ruins.onExcavationComplete(site, this.crew, nowSec);
        // 释放船员与飞船
        for (let j = 0; j < crewIds.length; j++) {
          const c = this.crew.get(crewIds[j]);
          if (c && c.status === CREW_STATUS.EXPEDITION) {
            c.status = CREW_STATUS.IDLE;
            c.assignment = null;
            if (outcome && outcome.result && outcome.result.passed) c.gainXp(50);
          }
        }
        if (ship) {
          // 飞船返航（发掘完成或失败都回）
          ship.status = SHIP_STATUS.DOCKED;
          ship.location = 'mars-orbit';
          ship.destination = null;
          ship.mission = null;
          ship.progress = 0;
          this.fleet.releaseCrew(ship, this.crew, nowSec);
        }
        if (outcome && outcome.completed) {
          // 发掘奖励进账
          for (const k in outcome.rewards) {
            this.stock[k] = (this.stock[k] || 0) + outcome.rewards[k];
          }
          this.stats.ruinsDone++;
          events.push({ kind: 'ruin-complete', ruinId: site.defId, unlock: outcome.unlock });
        }
      }
    }

    // 6. 每小时生产结算（轨道站 + 月球基地）
    this.prodAccumSec += dt;
    while (this.prodAccumSec >= 3600) {
      this.prodAccumSec -= 3600;
      this.stats.hoursPlayed += 1;
      this._hourlyProduction(nowSec, game);
      this.depots.hourlyTick();
      this.outposts.hourlyTick(this.belt, this.stock);
    }

    // 7. 随机事件（每 30–90 分钟骰一次）
    this.eventAccumSec += dt;
    if (this.eventAccumSec >= 1800 + Math.random() * 3600) {
      this.eventAccumSec = 0;
      this._rollRandomEvent(nowSec, game);
    }

    // 8. 合同板刷新（每 6 小时）
    if (!this._lastContractRefresh || nowSec - this._lastContractRefresh >= 6 * 3600) {
      this._lastContractRefresh = nowSec;
      this.contracts.refresh(nowSec);
    }

    // 9. 交易所价格回归 + 里程碑扫描（每小时一次，用 prodAccum 驱动不准，这里按整小时边界）
    if (!this._lastMilestoneScan || nowSec - this._lastMilestoneScan >= 3600) {
      this._lastMilestoneScan = nowSec;
      this.exchange.hourlyTick();
      const newly = this.milestones.scan(this, nowSec);
      for (let i = 0; i < newly.length; i++) {
        this._log(nowSec, '里程碑达成：' + newly[i].name, 'milestone');
        events.push({ kind: 'milestone', id: newly[i].id, name: newly[i].name });
      }
      // 船员勋章扫描
      const newMedals = DSCareerTracker.scanRoster(this.crew, nowSec);
      for (let i = 0; i < newMedals.length; i++) {
        this._log(nowSec, newMedals[i].crewName + ' 获得勋章「' + newMedals[i].medalName + '」', 'crew');
        events.push({ kind: 'medal', crewId: newMedals[i].crewId, medal: newMedals[i].medalId });
      }
      // 碎片研究推进
      const doneArt = this.artifactLab.update(nowSec, this.crew);
      for (let i = 0; i < doneArt.length; i++) {
        this._log(nowSec, '碎片研究完成：' + DS_ARTIFACT_MAP[doneArt[i]].name, 'tech');
        events.push({ kind: 'artifact-complete', id: doneArt[i] });
      }
    }

    // 10. 科技研究推进
    const doneTech = this.tech.update(nowSec);
    for (let i = 0; i < doneTech.length; i++) {
      this._log(nowSec, '科技研究完成：' + DS_TECH_MAP[doneTech[i]].name, 'tech');
      events.push({ kind: 'tech-complete', id: doneTech[i] });
    }

    // 11. 自动运营（每小时）
    const autoDid = this.autoOps.run(this, nowSec);
    for (let i = 0; i < autoDid.length; i++) {
      events.push({ kind: 'auto-op', text: autoDid[i] });
    }

    return { dtSec: dt, events: events, crewWage: crewRes.wage, upkeep: fleetRes.upkeep };
  }

  // 每小时生产：轨道站 + 月球基地 + 天文台发现池
  _hourlyProduction(nowSec, game) {
    if (!this._stationFounded) return;
    // 太阳天气作用于轨道站太阳能帆
    this.station.weatherSolarMul = this.weather.solarMul();
    // 轨道站船员：统计 assignment.kind === 'station' 的船员
    let stationCrew = 0;
    for (let i = 0; i < this.crew.roster.length; i++) {
      const c = this.crew.roster[i];
      if (c.assignment && c.assignment.kind === 'station' && c.status === CREW_STATUS.ASSIGNED) stationCrew++;
    }
    const morale = this.crew.avgMorale();
    const stationRes = this.station.applyProduction(this.stock, 1, stationCrew, morale, nowSec);
    // 天文台发现进度 → 小行星带勘测
    if (stationRes.discovery > 0) {
      this.discoveryPool += stationRes.discovery;
      const found = this.belt.addSurvey(this.discoveryPool, nowSec);
      if (found.length) this.discoveryPool = 0;
      else if (this.discoveryPool >= 1) this.discoveryPool = 0;
    }
    // 轨道站事件（微陨石等）
    if (Math.random() < 0.06) {
      const ev = this.station.rollEvent(nowSec, Math.random);
      if (ev) this._log(nowSec, '轨道站：' + ev.text, 'station');
    }
    // 月球基地
    if (this.moon.founded) {
      let moonCrew = 0;
      for (let i = 0; i < this.crew.roster.length; i++) {
        const c = this.crew.roster[i];
        if (c.assignment && c.assignment.kind === 'moon' && c.status === CREW_STATUS.ASSIGNED) moonCrew++;
      }
      const moonRes = this.moon.applyProduction(this.stock, 1, moonCrew, nowSec);
      // 月震期间产量再降
      if (this.moon.moonquakeUntil && nowSec < this.moon.moonquakeUntil) {
        for (const k in moonRes.produced) {
          const cut = moonRes.produced[k] * 0.3;
          this.stock[k] = Math.max(0, (this.stock[k] || 0) - cut);
        }
      }
      // 富矿脉期间氦-3 产量 +50%
      if (this.moon.richVeinUntil && nowSec < this.moon.richVeinUntil) {
        const bonus = (moonRes.produced.helium3 || 0) * 0.5;
        if (bonus > 0) this.stock.helium3 = (this.stock.helium3 || 0) + bonus;
      }
      if (Math.random() < 0.04) {
        const ev = this.moon.rollEvent(nowSec, Math.random);
        if (ev) this._log(nowSec, '月球基地：' + ev.text, 'moon');
      }
    }
    // 小行星带事件
    if (Math.random() < 0.03) {
      const ev = this.belt.rollBeltEvent(nowSec, Math.random);
      if (ev && ev.kind === 'pirates') {
        // 海盗出没：标记中带节点
        this.map.setPirates('belt-middle', nowSec + 24 * 3600);
      }
    }
  }

  // 远征完成结算：奖励进账、船员经验/士气、飞船返航、遗迹线索
  _onExpeditionComplete(exp, result, ship, nowSec) {
    const def = result.def;
    const buffs = this.getBuffs();
    // 奖励进账（遗迹加成）
    for (const k in result.rewards) {
      const amt = Math.round(result.rewards[k] * buffs.expeditionRewardMul);
      this.stock[k] = (this.stock[k] || 0) + amt;
    }
    // 船员结算
    this.crew.awardExpedition(exp.crewIds, result.success, nowSec);
    DSCareerTracker.recordExpedition(this.crew, exp.crewIds, def, result.success);
    this.squads.recordExpedition(exp.crewIds, result.success);
    // 事故：船体损伤与船员受伤
    if (result.accident) {
      if (ship) {
        const dmg = result.accident.hullDmg || 0;
        if (dmg > 0) {
          const res = ship.damage(dmg, result.accident.text);
          if (res.destroyed) {
            this.fleet.destroyShip(ship, result.accident.text, nowSec, this.crew);
            this.stats.shipsLost++;
            this._log(nowSec, ship.name + ' 在远征中损毁：' + result.accident.text, 'expedition');
          }
        }
      }
      if (result.accident.injure && exp.crewIds.length) {
        const c = this.crew.get(exp.crewIds[Math.floor(Math.random() * exp.crewIds.length)]);
        if (c) {
          c.injure(result.accident.injure, result.accident.text, nowSec);
          this.crew.totalInjured++;
        }
      }
      // 生还船员记一笔
      DSCareerTracker.recordSurvived(this.crew, exp.crewIds);
    }
    // 飞船返航（未损毁时）
    if (ship && ship.status !== SHIP_STATUS.LOST) {
      ship.location = ship.location || 'mars-orbit';
      this._returnShipHome(ship, nowSec);
    }
    // 特殊效果
    if (result.success) {
      if (def.surveyBonus) {
        const found = this.belt.addSurvey(def.surveyBonus, nowSec);
        this._log(nowSec, '远征勘测发现 ' + found.length + ' 颗新小行星', 'expedition');
      }
      if (def.ruinUnlock) {
        const site = this.ruins.onExpeditionComplete(def.id, nowSec);
        if (site) this.map.discover('ruin-' + def.ruinUnlock, nowSec);
      }
      if (def.ruinClue) this.ruins.onClueFor(def.ruinClue, 1, nowSec);
      if (def.outpostBonus) {
        this.map.discover('phobos', nowSec);
        this._log(nowSec, '火卫一前哨站建成，地月—火卫航线开通', 'expedition');
      }
      if (def.moonMoraleBonus) {
        this.moon.morale = dsv3Clamp(this.moon.morale + def.moonMoraleBonus, 0, 100);
      }
      if (def.firstContact) {
        this._log(nowSec, '第一次接触完成：人类与守望者建立了联系', 'expedition');
      }
    }
    this.stats.expeditionsDone++;
    this._log(nowSec, '远征' + (result.success ? '成功' : '失败') + '：' + def.name +
      '，阶段通过 ' + Math.round(result.stageRatio * 100) + '%', 'expedition');
  }

  // 随机事件牌堆
  _rollRandomEvent(nowSec, game) {
    const ev = this.events.draw(nowSec, this, Math.random);
    if (!ev) return;
    this._log(nowSec, '深空事件：' + ev.text, 'event');
    // 事件效果直接结算进账本/状态
    if (ev.effects) {
      for (const k in ev.effects) {
        if (k === 'moraleAll') {
          for (let i = 0; i < this.crew.roster.length; i++) {
            this.crew.roster[i].adjustMorale(ev.effects[k]);
          }
        } else if (k === 'pirateNode') {
          this.map.setPirates(ev.effects[k], nowSec + 12 * 3600);
        } else if (DS_RESOURCES[k]) {
          this.stock[k] = Math.max(0, (this.stock[k] || 0) + ev.effects[k]);
        }
      }
    }
  }

  // —— 轨道站船员派遣 ——
  assignStationCrew(crewId) {
    const c = this.crew.get(crewId);
    if (!c) return { ok: false, reason: '找不到该船员' };
    if (this.crew.roster.filter(function (x) {
      return x.assignment && x.assignment.kind === 'station';
    }).length >= this.station.crewCap()) {
      return { ok: false, reason: '轨道站船员容量已满（居住舱不足）' };
    }
    return this.crew.assign(crewId, { kind: 'station', id: 'mars-orbit' });
  }
  assignMoonCrew(crewId) {
    const c = this.crew.get(crewId);
    if (!c) return { ok: false, reason: '找不到该船员' };
    if (!this.moon.founded) return { ok: false, reason: '月球基地尚未建立' };
    return this.crew.assign(crewId, { kind: 'moon', id: 'moon-base' });
  }

  // —— 汇总 ——
  summary() {
    return {
      version: this.version,
      unlocked: this.unlocked,
      stationFounded: this._stationFounded,
      gameTimeHours: Math.round(this.gameTimeSec / 3600),
      stock: this.stock,
      station: this.station.summary(),
      moon: this.moon.summary(),
      belt: this.belt.summary(),
      fleet: this.fleet.summary(),
      crew: this.crew.summary(),
      expeditions: this.expeditions.summary(),
      ruins: this.ruins.summary(),
      map: {
        discovered: this.map.discoveredNodes().length,
        total: DS_MAP_NODES.length,
      },
      tech: this.tech.summary(),
      contracts: this.contracts.summary(),
      exchange: this.exchange.quotes(),
      milestones: this.milestones.summary(),
      autoOps: this.autoOps.save(),
      depots: this.depots.summary(),
      artifactLab: this.artifactLab.summary(),
      logistics: this.logistics.summary(),
      kuiper: this.kuiper.summary(),
      outposts: this.outposts.summary(),
      formations: this.formations.summary(this.fleet),
      weather: this.weather.summary(),
      chains: this.chains.summary(this.expeditions),
      squads: this.squads.summary(this.crew),
      buffs: this.getBuffs(),
      stats: this.stats,
    };
  }

  // —— 存档 ——
  save() {
    return {
      version: this.version,
      seed: this.seed,
      stock: this.stock,
      gameTimeSec: this.gameTimeSec,
      prodAccumSec: this.prodAccumSec,
      discoveryPool: this.discoveryPool,
      station: this.station.save(),
      moon: this.moon.save(),
      belt: this.belt.save(),
      fleet: this.fleet.save(),
      crew: this.crew.save(),
      expeditions: this.expeditions.save(),
      ruins: this.ruins.save(),
      map: this.map.save(),
      tech: this.tech.save(),
      events: this.events.save(),
      contracts: this.contracts.save(),
      exchange: this.exchange.save(),
      milestones: this.milestones.save(),
      autoOps: this.autoOps.save(),
      depots: this.depots.save(),
      artifactLab: this.artifactLab.save(),
      voyages: this.voyages.save(),
      logistics: this.logistics.save(),
      kuiper: this.kuiper.save(),
      outposts: this.outposts.save(),
      formations: this.formations.save(),
      weather: this.weather.save(),
      chains: this.chains.save(),
      squads: this.squads.save(),
      stats: this.stats,
      log: this.log,
      unlocked: this.unlocked,
      stationFounded: this._stationFounded,
    };
  }
  load(data) {
    if (!data) return;
    this.seed = data.seed || this.seed;
    this.stock = data.stock || dsv3DeepCopy(DS_STARTING_STOCK);
    this.gameTimeSec = data.gameTimeSec || 0;
    this.prodAccumSec = data.prodAccumSec || 0;
    this.discoveryPool = data.discoveryPool || 0;
    this.station.load(data.station);
    this.moon.load(data.moon);
    this.belt.load(data.belt);
    this.fleet.load(data.fleet);
    this.crew.load(data.crew);
    this.expeditions.load(data.expeditions);
    this.ruins.load(data.ruins);
    this.map.load(data.map);
    this.tech.load(data.tech);
    this.events.load(data.events);
    this.contracts.load(data.contracts);
    this.exchange.load(data.exchange);
    this.milestones.load(data.milestones);
    this.autoOps.load(data.autoOps);
    this.depots.load(data.depots);
    this.artifactLab.load(data.artifactLab);
    this.voyages.load(data.voyages);
    this.logistics.load(data.logistics);
    this.kuiper.load(data.kuiper);
    this.outposts.load(data.outposts);
    this.formations.load(data.formations);
    this.weather.load(data.weather);
    this.chains.load(data.chains);
    this.squads.load(data.squads);
    this.stats = data.stats || this.stats;
    this.log = data.log || [];
    this.unlocked = !!data.unlocked;
    this._stationFounded = !!data.stationFounded;
    this.started = false;
    this.lastTickAt = 0;
  }
}

// ================= 深空科技树 =================
// 20 项深空科技：造价（科技点为主）、前置、效果（增益乘数或解锁）。
// 研究在轨道站科研舱进行：研究速度 = 科研舱产出加成，
// 这里简化为「支付科技点即开始研究，耗时固定，完成后生效」。
const DS_TECH_DEFS = [
  { id: 't-orb-1', name: '轨道力学', icon: '🛰️', desc: '解锁火星轨道站的建造。', cost: { tech: 30 }, timeHours: 12, prereq: [], buffs: {}, unlocks: ['station'] },
  { id: 't-orb-2', name: '大型桁架结构', icon: '🏗️', desc: '轨道站可扩建第二环。', cost: { tech: 80, steel: 200 }, timeHours: 24, prereq: ['t-orb-1'], buffs: {}, unlocks: ['ring2'] },
  { id: 't-orb-3', name: '轨道精炼', icon: '🏭', desc: '解锁精炼厂模块；精炼产量 +20%。', cost: { tech: 120, rare: 100 }, timeHours: 36, prereq: ['t-orb-1'], buffs: { prodMul: 1.05 }, unlocks: ['refinery'] },
  { id: 't-orb-4', name: '高效光伏', icon: '🔆', desc: '太阳能帆产量 +30%。', cost: { tech: 100, rare: 80 }, timeHours: 24, prereq: ['t-orb-1'], buffs: { solarMul: 1.3 }, unlocks: [] },
  { id: 't-orb-5', name: '轨道船坞', icon: '🛠️', desc: '飞船建造成本 -15%，建造速度 +25%。', cost: { tech: 150, steel: 300 }, timeHours: 48, prereq: ['t-orb-2'], buffs: {}, unlocks: ['drydock'] },
  { id: 't-moon-1', name: '月球着陆', icon: '🌕', desc: '解锁月球基地的建立。', cost: { tech: 60, fuel: 100 }, timeHours: 24, prereq: ['t-orb-1'], buffs: {}, unlocks: ['moon'] },
  { id: 't-moon-2', name: '氦-3 提取', icon: '⚛️', desc: '氦-3 矿场产量 +40%。', cost: { tech: 140, rare: 120 }, timeHours: 36, prereq: ['t-moon-1'], buffs: { prodMul: 1.05 }, unlocks: ['he3mine'] },
  { id: 't-moon-3', name: '月面农业', icon: '🥬', desc: '月面温室产量 +40%，生命维持消耗 -20%。', cost: { tech: 110, steel: 200 }, timeHours: 36, prereq: ['t-moon-1'], buffs: { prodMul: 1.05 }, unlocks: ['greenhouse'] },
  { id: 't-moon-4', name: '月面核电', icon: '☢️', desc: '解锁月面核反应堆。', cost: { tech: 200, uranium: 30 }, timeHours: 48, prereq: ['t-moon-1', 't-moon-2'], buffs: {}, unlocks: ['reactor'] },
  { id: 't-belt-1', name: '小行星勘测', icon: '🪨', desc: '解锁小行星认领与采矿船。', cost: { tech: 50 }, timeHours: 12, prereq: ['t-orb-1'], buffs: {}, unlocks: ['belt', 'miner'] },
  { id: 't-belt-2', name: '采矿激光 II', icon: '⛏️', desc: '采矿船采矿速率 +30%。', cost: { tech: 130, titanium: 40 }, timeHours: 36, prereq: ['t-belt-1'], buffs: { miningMul: 1.3 }, unlocks: [] },
  { id: 't-belt-3', name: '深空导航', icon: '🧭', desc: '小行星带航行时间 -15%，事故率 -10%。', cost: { tech: 160, rare: 100 }, timeHours: 48, prereq: ['t-belt-1', 't-orb-2'], buffs: { travelTimeMul: 0.85, expeditionRiskMul: 0.9 }, unlocks: [] },
  { id: 't-exp-1', name: '远征计划', icon: '🚀', desc: '解锁探索船与远征任务。', cost: { tech: 70 }, timeHours: 24, prereq: ['t-orb-1'], buffs: {}, unlocks: ['explorer', 'expedition'] },
  { id: 't-exp-2', name: '深空生存', icon: '🧑‍🚀', desc: '远征事故率 -15%，船员士气衰减 -20%。', cost: { tech: 180, steel: 200 }, timeHours: 48, prereq: ['t-exp-1'], buffs: { expeditionRiskMul: 0.85 }, unlocks: [] },
  { id: 't-exp-3', name: '远域航行', icon: '🌌', desc: '解锁 4 级以上远征与遗迹 γ 的远征。', cost: { tech: 300, helium3: 20 }, timeHours: 72, prereq: ['t-exp-2', 't-belt-2'], buffs: { travelTimeMul: 0.9 }, unlocks: ['deep-expedition'] },
  { id: 't-ship-1', name: '轻质船体', icon: '🛸', desc: '全部飞船船体 +20%，燃料消耗 -10%。', cost: { tech: 120, titanium: 60 }, timeHours: 36, prereq: ['t-orb-1'], buffs: { hullMul: 1.2 }, unlocks: [] },
  { id: 't-ship-2', name: '离子推进', icon: '💨', desc: '全部飞船速度 +20%。', cost: { tech: 220, rare: 150 }, timeHours: 60, prereq: ['t-ship-1', 't-belt-2'], buffs: { travelTimeMul: 0.85 }, unlocks: [] },
  { id: 't-crew-1', name: '船员训练体系', icon: '🎓', desc: '训练效果 +50%，训练耗时 -25%。', cost: { tech: 90, steel: 100 }, timeHours: 24, prereq: ['t-exp-1'], buffs: {}, unlocks: ['training-plus'] },
  { id: 't-crew-2', name: '人工重力', icon: '🔄', desc: '船员士气恢复 +50%，长期航行士气衰减 -30%。', cost: { tech: 200, steel: 300 }, timeHours: 60, prereq: ['t-crew-1', 't-orb-2'], buffs: {}, unlocks: ['gravity'] },
  { id: 't-ruin-0', name: '异星考古学', icon: '🏺', desc: '遗迹发掘速度 +50%，遗迹碎片研究产出翻倍。', cost: { tech: 250, artifact: 2 }, timeHours: 72, prereq: ['t-exp-2'], buffs: { expeditionRewardMul: 1.1 }, unlocks: ['archaeology'] },
];
const DS_TECH_MAP = {};
for (let i = 0; i < DS_TECH_DEFS.length; i++) DS_TECH_MAP[DS_TECH_DEFS[i].id] = DS_TECH_DEFS[i];

class DSTechTree {
  constructor() {
    this.researched = {};   // {techId: true}
    this.researching = null; // {techId, endsAt}
    this.queue = [];         // 排队研究
    this.totalSpentTech = 0;
  }
  unlocked(id) { return !!this.researched[id]; }
  isResearching(id) {
    return (this.researching && this.researching.techId === id) ||
      this.queue.some(function (q) { return q.techId === id; });
  }
  canResearch(id, stock) {
    const def = DS_TECH_MAP[id];
    if (!def) return { ok: false, reason: '未知科技' };
    if (this.unlocked(id)) return { ok: false, reason: '已研究' };
    if (this.isResearching(id)) return { ok: false, reason: '已在研究队列中' };
    for (let i = 0; i < def.prereq.length; i++) {
      if (!this.unlocked(def.prereq[i])) {
        return { ok: false, reason: '需要前置科技：' + DS_TECH_MAP[def.prereq[i]].name };
      }
    }
    for (const k in def.cost) {
      if ((stock[k] || 0) < def.cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + def.cost[k] };
      }
    }
    return { ok: true, def: def };
  }
  startResearch(id, stock, nowSec) {
    const check = this.canResearch(id, stock);
    if (!check.ok) return check;
    for (const k in check.def.cost) stock[k] -= check.def.cost[k];
    this.totalSpentTech += check.def.cost.tech || 0;
    const job = { techId: id, endsAt: nowSec + check.def.timeHours * 3600 };
    if (!this.researching) this.researching = job;
    else this.queue.push(job);
    return { ok: true, endsAt: job.endsAt };
  }
  // 研究完成推进（每 tick 调用）
  update(nowSec) {
    const done = [];
    if (this.researching && nowSec >= this.researching.endsAt) {
      this.researched[this.researching.techId] = true;
      done.push(this.researching.techId);
      this.researching = this.queue.shift() || null;
    }
    return done;
  }
  buffs() {
    const b = {
      prodMul: 1, powerMul: 1, solarMul: 1, hullMul: 1,
      miningMul: 1, travelTimeMul: 1, expeditionRewardMul: 1,
      expeditionRiskMul: 1, researchMul: 1,
    };
    for (const id in this.researched) {
      const def = DS_TECH_MAP[id];
      if (!def || !def.buffs) continue;
      for (const k in def.buffs) b[k] = (b[k] || 1) * def.buffs[k];
    }
    return b;
  }
  availableList() {
    const out = [];
    for (let i = 0; i < DS_TECH_DEFS.length; i++) {
      const d = DS_TECH_DEFS[i];
      if (this.unlocked(d.id)) continue;
      let prereqOk = true;
      for (let j = 0; j < d.prereq.length; j++) {
        if (!this.unlocked(d.prereq[j])) { prereqOk = false; break; }
      }
      out.push({
        id: d.id, name: d.name, icon: d.icon, desc: d.desc,
        cost: d.cost, timeHours: d.timeHours,
        prereqOk: prereqOk, researching: this.isResearching(d.id),
        prereq: d.prereq.map(function (p) { return DS_TECH_MAP[p].name; }),
      });
    }
    return out;
  }
  summary() {
    return {
      researched: Object.keys(this.researched).length,
      total: DS_TECH_DEFS.length,
      researching: this.researching,
      queue: this.queue.length,
      totalSpentTech: this.totalSpentTech,
    };
  }
  save() {
    return {
      researched: this.researched, researching: this.researching,
      queue: this.queue, totalSpentTech: this.totalSpentTech,
    };
  }
  load(data) {
    if (!data) return;
    this.researched = data.researched || {};
    this.researching = data.researching || null;
    this.queue = data.queue || [];
    this.totalSpentTech = data.totalSpentTech || 0;
  }
}

// ================= 深空随机事件牌堆 =================
// 24 个事件：每个有权重、触发条件（函数名映射）、效果与文本。
// 效果键：资源键（正数获得/负数失去）、moraleAll（全体士气）、
// pirateNode（海盗出没节点）。条件用字符串标识，由 manager 换算。
const DS_EVENT_DEFS = [
  { id: 'ev-solar-flare', name: '太阳耀斑', weight: 5, cond: 'always', text: '太阳耀斑爆发，太阳能帆超载运行，科技点 +15。', effects: { tech: 15 } },
  { id: 'ev-micrometeor', name: '微陨石雨', weight: 4, cond: 'station', text: '微陨石雨掠过轨道站，钢材 -30（抢修消耗）。', effects: { steel: -30 } },
  { id: 'ev-supply-pod', name: '漂流补给舱', weight: 3, cond: 'always', text: '回收一枚漂流的补给舱：食物 +60，水冰 +40。', effects: { food: 60, water: 40 } },
  { id: 'ev-crew-birthday', name: '船员生日', weight: 3, cond: 'crew', text: '轨道站为船员庆生，全体士气 +5。', effects: { moraleAll: 5 } },
  { id: 'ev-pirate-sighting', name: '海盗踪迹', weight: 3, cond: 'belt', text: '侦察到海盗船踪迹，中带空域进入警戒。', effects: { pirateNode: 'belt-middle' } },
  { id: 'ev-rich-asteroid', name: '富矿消息', weight: 3, cond: 'belt', text: '勘测队报告一颗高品位小行星，钛 +40。', effects: { titanium: 40 } },
  { id: 'ev-equipment-fail', name: '设备老化', weight: 4, cond: 'station', text: '一批设备老化故障，稀土 -25（更换零件）。', effects: { rare: -25 } },
  { id: 'ev-moon-dust', name: '月尘暴', weight: 3, cond: 'moon', text: '月尘暴遮蔽太阳能场，月球基地士气 -5。', effects: { moraleAll: -5 } },
  { id: 'ev-signal', name: '神秘信号', weight: 2, cond: 'always', text: '监听站收到一段规律信号，科技点 +25。', effects: { tech: 25 } },
  { id: 'ev-stowaway', name: '偷渡者', weight: 2, cond: 'station', text: '补给船上发现一名偷渡者，食物 -20，士气 +3（多了个帮手）。', effects: { food: -20, moraleAll: 3 } },
  { id: 'ev-fuel-leak', name: '燃料泄漏', weight: 3, cond: 'always', text: '燃料库阀门泄漏，燃料 -40。', effects: { fuel: -40 } },
  { id: 'ev-ice-find', name: '冰矿发现', weight: 3, cond: 'belt', text: '在 C 型小行星发现浅层冰矿，水冰 +120。', effects: { water: 120 } },
  { id: 'ev-crew-quarrel', name: '船员争执', weight: 3, cond: 'crew', text: '两名船员因轮班安排争执，全体士气 -4。', effects: { moraleAll: -4 } },
  { id: 'ev-donation', name: '地面捐赠', weight: 2, cond: 'always', text: '火星地面送来一批慰问物资：钢材 +80，食物 +40。', effects: { steel: 80, food: 40 } },
  { id: 'ev-rare-earth', name: '稀土富集', weight: 2, cond: 'belt', text: '精炼厂从一批矿石中提炼出额外稀土：稀土 +50。', effects: { rare: 50 } },
  { id: 'ev-oxygen-alarm', name: '氧气警报', weight: 3, cond: 'station', text: '氧气循环系统误报，全站排查消耗氧气 -30。', effects: { oxygen: -30 } },
  { id: 'ev-comet-tail', name: '彗尾穿越', weight: 2, cond: 'always', text: '舰队穿越彗尾，采集到稀有挥发物：氦-3 +8。', effects: { helium3: 8 } },
  { id: 'ev-training-boost', name: '演练佳绩', weight: 3, cond: 'crew', text: '船员联合演练成绩优异，全体士气 +6。', effects: { moraleAll: 6 } },
  { id: 'ev-uranium-vein', name: '铀矿脉', weight: 2, cond: 'belt', text: '在 V 型小行星发现铀矿脉：铀 +15。', effects: { uranium: 15 } },
  { id: 'ev-platinum-nugget', name: '铂金块', weight: 2, cond: 'belt', text: '采矿船带回一块天然铂金：铂 +10。', effects: { platinum: 10 } },
  { id: 'ev-homesick', name: '思乡情绪', weight: 3, cond: 'crew', text: '长期驻留的船员思乡情绪蔓延，士气 -6。', effects: { moraleAll: -6 } },
  { id: 'ev-debris-bonus', name: '碎片富集', weight: 3, cond: 'station', text: '轨道碎片带过境，回收钢材 +100。', effects: { steel: 100 } },
  { id: 'ev-lab-breakthrough', name: '实验突破', weight: 2, cond: 'station', text: '轨道实验室取得突破，科技点 +40。', effects: { tech: 40 } },
  { id: 'ev-moon-harvest', name: '月面丰收', weight: 3, cond: 'moon', text: '月面温室大丰收，食物 +100。', effects: { food: 100 } },
];

class DSEventDeck {
  constructor() {
    this.history = [];      // 已触发事件 [{id, t}]
    this.lastDrawAt = 0;
  }
  // 按条件过滤后加权抽取
  draw(nowSec, mgr, rng) {
    rng = rng || Math.random;
    const pool = [];
    for (let i = 0; i < DS_EVENT_DEFS.length; i++) {
      const d = DS_EVENT_DEFS[i];
      if (!this._condOk(d.cond, mgr)) continue;
      pool.push(d);
    }
    if (!pool.length) return null;
    let total = 0;
    for (let i = 0; i < pool.length; i++) total += pool[i].weight;
    let r = rng() * total;
    let picked = pool[pool.length - 1];
    for (let i = 0; i < pool.length; i++) {
      r -= pool[i].weight;
      if (r <= 0) { picked = pool[i]; break; }
    }
    this.history.push({ id: picked.id, t: Math.round(nowSec) });
    if (this.history.length > 100) this.history.splice(0, this.history.length - 100);
    this.lastDrawAt = nowSec;
    return picked;
  }
  _condOk(cond, mgr) {
    if (!mgr) return true;
    if (cond === 'always') return true;
    if (cond === 'station') return mgr.stationFounded();
    if (cond === 'moon') return mgr.moon.founded;
    if (cond === 'belt') return mgr.belt.generated && mgr.belt.discoveredCount > 0;
    if (cond === 'crew') return mgr.crew.count() >= 3;
    return true;
  }
  save() { return { history: this.history, lastDrawAt: this.lastDrawAt }; }
  load(data) {
    if (!data) return;
    this.history = data.history || [];
    this.lastDrawAt = data.lastDrawAt || 0;
  }
}

// ================= 深空合同板 =================
// 6 小时刷新一批 5 个合同：交付指定资源换奖励（科技/稀有资源）。
// 合同有难度等级与截止时间，逾期消失。
const DS_CONTRACT_TEMPLATES = [
  { kind: 'deliver', res: 'steel', amount: [200, 500, 1000], reward: { tech: [20, 40, 80] }, name: '钢材供应' },
  { kind: 'deliver', res: 'water', amount: [200, 400, 800], reward: { tech: [15, 30, 60] }, name: '水冰供应' },
  { kind: 'deliver', res: 'helium3', amount: [10, 25, 50], reward: { tech: [40, 90, 180], platinum: [5, 12, 25] }, name: '氦-3 供应' },
  { kind: 'deliver', res: 'titanium', amount: [50, 120, 250], reward: { tech: [30, 60, 120] }, name: '钛材供应' },
  { kind: 'deliver', res: 'rare', amount: [80, 200, 400], reward: { tech: [25, 55, 110], uranium: [5, 10, 20] }, name: '稀土供应' },
  { kind: 'deliver', res: 'food', amount: [100, 250, 500], reward: { tech: [10, 25, 50], steel: [50, 100, 200] }, name: '食品供应' },
  { kind: 'deliver', res: 'platinum', amount: [10, 25, 50], reward: { tech: [50, 110, 220] }, name: '铂金供应' },
  { kind: 'deliver', res: 'fuel', amount: [100, 250, 500], reward: { tech: [15, 35, 70] }, name: '燃料供应' },
];

class DSContractBoard {
  constructor() {
    this.contracts = [];    // {id, name, res, amount, reward, tier, expiresAt, status}
    this.completed = 0;
    this.failed = 0;
    this._seq = 0;
  }
  refresh(nowSec) {
    // 过期合同计失败
    for (let i = 0; i < this.contracts.length; i++) {
      if (this.contracts[i].status === 'open' && nowSec >= this.contracts[i].expiresAt) {
        this.contracts[i].status = 'expired';
        this.failed++;
      }
    }
    this.contracts = this.contracts.filter(function (c) { return c.status === 'open'; });
    // 补到 5 个
    while (this.contracts.length < 5) {
      const t = DS_CONTRACT_TEMPLATES[Math.floor(Math.random() * DS_CONTRACT_TEMPLATES.length)];
      const tier = Math.floor(Math.random() * 3);
      const reward = {};
      for (const k in t.reward) reward[k] = t.reward[k][tier];
      this._seq++;
      this.contracts.push({
        id: 'contract-' + this._seq,
        name: t.name,
        res: t.res,
        resName: DS_RESOURCES[t.res].name,
        amount: t.amount[tier],
        reward: reward,
        tier: tier + 1,
        expiresAt: nowSec + 12 * 3600,
        status: 'open',
      });
    }
    return this.contracts;
  }
  complete(contractId, stock, nowSec) {
    const c = this.contracts.find(function (x) { return x.id === contractId; });
    if (!c) return { ok: false, reason: '找不到该合同' };
    if (c.status !== 'open') return { ok: false, reason: '合同已关闭' };
    if (nowSec >= c.expiresAt) {
      c.status = 'expired';
      this.failed++;
      return { ok: false, reason: '合同已过期' };
    }
    if ((stock[c.res] || 0) < c.amount) {
      return { ok: false, reason: DS_RESOURCES[c.res].name + '不足，需要 ' + c.amount };
    }
    stock[c.res] -= c.amount;
    for (const k in c.reward) stock[k] = (stock[k] || 0) + c.reward[k];
    c.status = 'done';
    this.completed++;
    this.contracts.splice(this.contracts.indexOf(c), 1);
    return { ok: true, reward: c.reward };
  }
  summary() {
    return {
      open: this.contracts.map(function (c) {
        return {
          id: c.id, name: c.name, res: c.res, resName: c.resName,
          amount: c.amount, reward: c.reward, tier: c.tier,
          expiresInSec: c.expiresAt,
        };
      }),
      completed: this.completed,
      failed: this.failed,
    };
  }
  save() {
    return { contracts: this.contracts, completed: this.completed, failed: this.failed, seq: this._seq };
  }
  load(data) {
    if (!data) return;
    this.contracts = data.contracts || [];
    this.completed = data.completed || 0;
    this.failed = data.failed || 0;
    this._seq = data.seq || 0;
  }
}

// ================= 深空交易所 =================
// 资源现货市场：以科技点为计价单位，价格按供需波动。
// 买入价 = 基准 × (1 + 需求系数)，卖出价 = 基准 × (1 − 供给系数)；
// 每次交易推动价格（买推高、卖压低），价格每小时向基准回归。
// 玩家用科技点买稀缺资源，或卖出富余资源换科技点。
const DS_EXCHANGE_BASE = {
  steel: 4, rare: 3, titanium: 6, platinum: 12, helium3: 15,
  water: 1, food: 2, fuel: 2, oxygen: 2, uranium: 8, artifact: 50,
};

class DSExchange {
  constructor() {
    // 每种资源的价格偏离（-0.5 ~ +1.0），0 = 基准价
    this.drift = {};
    for (const k in DS_EXCHANGE_BASE) this.drift[k] = 0;
    this.volume24h = {};   // 24 小时交易量（用于统计）
    this.totalTrades = 0;
    this.totalVolumeTech = 0;
    this.log = [];
  }
  basePrice(resKey) { return DS_EXCHANGE_BASE[resKey] || 1; }
  // 买入价（玩家付科技点）：基准 × (1 + drift + 0.1 手续费)
  buyPrice(resKey) {
    const base = this.basePrice(resKey);
    const d = dsv3Clamp(this.drift[resKey] || 0, -0.5, 1.0);
    return dsv3Round(base * (1 + d + 0.1), 2);
  }
  // 卖出价（玩家得科技点）：基准 × (1 + drift − 0.1 手续费)
  sellPrice(resKey) {
    const base = this.basePrice(resKey);
    const d = dsv3Clamp(this.drift[resKey] || 0, -0.5, 1.0);
    return dsv3Round(Math.max(0.1, base * (1 + d - 0.1)), 2);
  }
  // 买入：付 tech，得资源
  buy(resKey, amount, stock, nowSec) {
    if (!DS_EXCHANGE_BASE[resKey]) return { ok: false, reason: '该资源不可交易' };
    if (resKey === 'tech') return { ok: false, reason: '科技点不能买卖' };
    amount = Math.floor(amount);
    if (amount <= 0) return { ok: false, reason: '数量必须大于 0' };
    const price = this.buyPrice(resKey);
    const cost = Math.ceil(price * amount);
    if ((stock.tech || 0) < cost) {
      return { ok: false, reason: '科技点不足，需要 ' + cost + '（单价 ' + price + '）' };
    }
    stock.tech -= cost;
    stock[resKey] = (stock[resKey] || 0) + amount;
    // 价格推动：买入量越大，drift 上涨越多
    this.drift[resKey] = dsv3Clamp((this.drift[resKey] || 0) + amount * 0.0005, -0.5, 1.0);
    this.totalTrades++;
    this.totalVolumeTech += cost;
    this.volume24h[resKey] = (this.volume24h[resKey] || 0) + amount;
    this._log(nowSec, '买入 ' + amount + ' ' + DS_RESOURCES[resKey].name + '，花费 ' + cost + ' 科技点');
    return { ok: true, amount: amount, cost: cost, unitPrice: price };
  }
  // 卖出：付资源，得 tech
  sell(resKey, amount, stock, nowSec) {
    if (!DS_EXCHANGE_BASE[resKey]) return { ok: false, reason: '该资源不可交易' };
    if (resKey === 'tech') return { ok: false, reason: '科技点不能买卖' };
    amount = Math.floor(amount);
    if (amount <= 0) return { ok: false, reason: '数量必须大于 0' };
    if ((stock[resKey] || 0) < amount) {
      return { ok: false, reason: DS_RESOURCES[resKey].name + '不足，当前 ' + Math.floor(stock[resKey] || 0) };
    }
    const price = this.sellPrice(resKey);
    const gain = Math.floor(price * amount);
    stock[resKey] -= amount;
    stock.tech = (stock.tech || 0) + gain;
    this.drift[resKey] = dsv3Clamp((this.drift[resKey] || 0) - amount * 0.0005, -0.5, 1.0);
    this.totalTrades++;
    this.totalVolumeTech += gain;
    this.volume24h[resKey] = (this.volume24h[resKey] || 0) + amount;
    this._log(nowSec, '卖出 ' + amount + ' ' + DS_RESOURCES[resKey].name + '，获得 ' + gain + ' 科技点');
    return { ok: true, amount: amount, gain: gain, unitPrice: price };
  }
  // 每小时：价格向基准回归 5%，24h 交易量清零（简化：每小时衰减）
  hourlyTick() {
    for (const k in this.drift) {
      this.drift[k] = this.drift[k] * 0.95;
      if (Math.abs(this.drift[k]) < 0.001) this.drift[k] = 0;
    }
    for (const k in this.volume24h) {
      this.volume24h[k] = Math.floor(this.volume24h[k] * 0.9);
    }
  }
  // 行情表（给 UI 用）
  quotes() {
    const out = [];
    for (const k in DS_EXCHANGE_BASE) {
      out.push({
        res: k,
        name: DS_RESOURCES[k].name,
        base: DS_EXCHANGE_BASE[k],
        buy: this.buyPrice(k),
        sell: this.sellPrice(k),
        driftPct: Math.round((this.drift[k] || 0) * 100),
        volume: this.volume24h[k] || 0,
      });
    }
    return out;
  }
  _log(t, text) {
    this.log.push({ t: Math.round(t), text: text });
    if (this.log.length > 100) this.log.splice(0, this.log.length - 100);
  }
  save() {
    return {
      drift: this.drift, volume24h: this.volume24h,
      totalTrades: this.totalTrades, totalVolumeTech: this.totalVolumeTech,
      log: this.log,
    };
  }
  load(data) {
    if (!data) return;
    this.drift = data.drift || this.drift;
    this.volume24h = data.volume24h || {};
    this.totalTrades = data.totalTrades || 0;
    this.totalVolumeTech = data.totalVolumeTech || 0;
    this.log = data.log || [];
  }
}

// ================= 深空里程碑 =================
// 31 个里程碑：达成条件（函数标识）+ 奖励（资源/增益）。
// 条件用 check(mgr) 在 manager 每小时结算时统一判定。
const DS_MILESTONES = [
  { id: 'ms-first-station', name: '深空启程', desc: '建立火星轨道站。', check: 'stationFounded', reward: { tech: 50 } },
  { id: 'ms-first-ship', name: '首舰下水', desc: '建造第一艘飞船。', check: 'ships>=1', reward: { steel: 100 } },
  { id: 'ms-fleet-5', name: '五舰编队', desc: '同时拥有 5 艘飞船。', check: 'ships>=5', reward: { tech: 80 } },
  { id: 'ms-fleet-10', name: '深空舰队', desc: '同时拥有 10 艘飞船。', check: 'ships>=10', reward: { tech: 150, titanium: 50 } },
  { id: 'ms-first-moon', name: '月面足迹', desc: '建立月球基地。', check: 'moonFounded', reward: { helium3: 20, tech: 60 } },
  { id: 'ms-moon-3', name: '月面城镇', desc: '月球基地升至 3 级。', check: 'moonLevel>=3', reward: { helium3: 40, tech: 100 } },
  { id: 'ms-moon-5', name: '月球首府', desc: '月球基地升至 5 级。', check: 'moonLevel>=5', reward: { helium3: 100, tech: 200, platinum: 50 } },
  { id: 'ms-he3-100', name: '氦-3 百吨', desc: '累计开采 100 氦-3。', check: 'he3>=100', reward: { tech: 100 } },
  { id: 'ms-he3-1000', name: '聚变燃料库', desc: '累计开采 1000 氦-3。', check: 'he3>=1000', reward: { tech: 300, uranium: 50 } },
  { id: 'ms-first-asteroid', name: '首颗小行星', desc: '认领第一颗小行星。', check: 'claims>=1', reward: { steel: 150 } },
  { id: 'ms-belt-10', name: '矿区之主', desc: '同时认领 10 颗小行星。', check: 'claims>=10', reward: { titanium: 100, tech: 120 } },
  { id: 'ms-ore-1000', name: '千吨矿石', desc: '累计开采 1000 吨矿石。', check: 'ore>=1000', reward: { tech: 80 } },
  { id: 'ms-ore-10000', name: '万吨矿石', desc: '累计开采 10000 吨矿石。', check: 'ore>=10000', reward: { tech: 250, platinum: 40 } },
  { id: 'ms-first-expedition', name: '首次远征', desc: '完成第一次远征。', check: 'expeditions>=1', reward: { tech: 50 } },
  { id: 'ms-exp-10', name: '远征老手', desc: '累计完成 10 次远征。', check: 'expeditions>=10', reward: { tech: 150, artifact: 1 } },
  { id: 'ms-exp-25', name: '深空传奇', desc: '累计完成 25 次远征。', check: 'expeditions>=25', reward: { tech: 400, artifact: 3 } },
  { id: 'ms-exp-perfect', name: '完美远征', desc: '一次远征全部阶段通过。', check: 'perfectExpedition', reward: { tech: 100 } },
  { id: 'ms-ruin-alpha', name: '遗迹 α 解锁', desc: '完成遗迹 α 的发掘。', check: 'ruins>=1', reward: { tech: 120 } },
  { id: 'ms-ruin-beta', name: '遗迹 β 解锁', desc: '完成遗迹 β 的发掘。', check: 'ruins>=2', reward: { tech: 200, platinum: 30 } },
  { id: 'ms-ruin-gamma', name: '遗迹 γ 解锁', desc: '完成遗迹 γ 的发掘。', check: 'ruins>=3', reward: { tech: 400, artifact: 5 } },
  { id: 'ms-stargate', name: '星门建成', desc: '建造星门信标。', check: 'stargate', reward: { tech: 500 } },
  { id: 'ms-first-contact', name: '第一次接触', desc: '完成「第一次接触」远征。', check: 'firstContact', reward: { artifact: 5, tech: 500 } },
  { id: 'ms-crew-20', name: '二十船员', desc: '船员名册达到 20 人。', check: 'crew>=20', reward: { steel: 200 } },
  { id: 'ms-crew-50', name: '深空军团', desc: '船员名册达到 50 人。', check: 'crew>=50', reward: { tech: 200 } },
  { id: 'ms-crew-veteran', name: '王牌船员', desc: '有一名船员达到 10 级。', check: 'crewLevel10', reward: { tech: 150 } },
  { id: 'ms-distance-100', name: '百 AU 航程', desc: '舰队累计飞行 100 AU。', check: 'distance>=100', reward: { tech: 100 } },
  { id: 'ms-distance-1000', name: '千 AU 航程', desc: '舰队累计飞行 1000 AU。', check: 'distance>=1000', reward: { tech: 300, fuel: 200 } },
  { id: 'ms-discover-30', name: '星图测绘者', desc: '发现 30 颗小行星。', check: 'discovered>=30', reward: { tech: 120 } },
  { id: 'ms-discover-all', name: '小行星带全图', desc: '发现全部 120 颗小行星。', check: 'discovered>=120', reward: { tech: 500, artifact: 2 } },
  { id: 'ms-tech-10', name: '深空学者', desc: '研究 10 项深空科技。', check: 'tech>=10', reward: { tech: 150 } },
  { id: 'ms-tech-all', name: '深空全知', desc: '研究全部 20 项深空科技。', check: 'tech>=20', reward: { tech: 800, artifact: 3 } },
];

class DSMilestones {
  constructor() {
    this.done = {};         // {id: t}
    this.claimedRewards = {};
  }
  // 条件判定：check 字符串解析
  checkOne(m, mgr) {
    const c = m.check;
    if (c === 'stationFounded') return mgr.stationFounded();
    if (c === 'moonFounded') return mgr.moon.founded;
    if (c === 'stargate') return mgr.ruins.builtStargate;
    if (c === 'firstContact') {
      return mgr.expeditions.completed.some(function (e) {
        return e.defId === 'exp-first-contact' && e.status === 'success';
      });
    }
    if (c === 'perfectExpedition') {
      return mgr.expeditions.completed.some(function (e) {
        return e.stages && e.stages.length > 0 && e.stages.every(function (s) { return s.passed; });
      });
    }
    if (c === 'crewLevel10') {
      return mgr.crew.roster.some(function (x) { return x.level >= 10; });
    }
    const mm = c.match(/^(\w+)(>=|==)(\d+)$/);
    if (!mm) return false;
    const key = mm[1], op = mm[2], val = parseInt(mm[3], 10);
    let have = 0;
    if (key === 'ships') have = mgr.fleet.count();
    else if (key === 'moonLevel') have = mgr.moon.level;
    else if (key === 'he3') have = mgr.stats.he3Mined;
    else if (key === 'claims') have = mgr.belt.activeClaims().length;
    else if (key === 'ore') have = mgr.stats.oreMined;
    else if (key === 'expeditions') have = mgr.stats.expeditionsDone;
    else if (key === 'ruins') have = mgr.ruins.completedCount();
    else if (key === 'crew') have = mgr.crew.count();
    else if (key === 'distance') have = mgr.fleet.totalDistanceAU;
    else if (key === 'discovered') have = mgr.belt.discoveredCount;
    else if (key === 'tech') have = Object.keys(mgr.tech.researched).length;
    else return false;
    if (op === '>=') return have >= val;
    return have === val;
  }
  // 每小时扫描一次，返回新达成的里程碑
  scan(mgr, nowSec) {
    const newly = [];
    for (let i = 0; i < DS_MILESTONES.length; i++) {
      const m = DS_MILESTONES[i];
      if (this.done[m.id]) continue;
      if (this.checkOne(m, mgr)) {
        this.done[m.id] = Math.round(nowSec);
        // 奖励直接进账
        for (const k in m.reward) {
          mgr.stock[k] = (mgr.stock[k] || 0) + m.reward[k];
        }
        newly.push(m);
      }
    }
    return newly;
  }
  summary() {
    const list = [];
    for (let i = 0; i < DS_MILESTONES.length; i++) {
      const m = DS_MILESTONES[i];
      list.push({
        id: m.id, name: m.name, desc: m.desc,
        done: !!this.done[m.id], doneAt: this.done[m.id] || 0,
        reward: m.reward,
      });
    }
    return { total: DS_MILESTONES.length, done: Object.keys(this.done).length, list: list };
  }
  save() { return { done: this.done, claimedRewards: this.claimedRewards }; }
  load(data) {
    if (!data) return;
    this.done = data.done || {};
    this.claimedRewards = data.claimedRewards || {};
  }
}

// ================= 深空验证器 =================
// 存档完整性与数值合理性检查（加载后调用，坏档不崩、只报告）。
class DSValidator {
  static validateSave(data) {
    const issues = [];
    if (!data || typeof data !== 'object') return ['存档不是对象'];
    if (!data.stock) issues.push('缺少 stock（深空账本）');
    else {
      for (const k in data.stock) {
        if (typeof data.stock[k] !== 'number' || isNaN(data.stock[k])) {
          issues.push('stock.' + k + ' 不是有效数字');
        } else if (data.stock[k] < 0) {
          issues.push('stock.' + k + ' 为负数（' + data.stock[k] + '）');
        }
      }
    }
    if (data.fleet && data.fleet.ships) {
      for (let i = 0; i < data.fleet.ships.length; i++) {
        const s = data.fleet.ships[i];
        if (!SHIP_TYPES[s.type]) issues.push('飞船 ' + s.id + ' 船型未知：' + s.type);
        if (s.hull < 0) issues.push('飞船 ' + s.id + ' 船体为负');
        if (s.status === SHIP_STATUS.LOST) issues.push('飞船 ' + s.id + ' 已损毁但仍在舰队列表中');
      }
    }
    if (data.crew && data.crew.roster) {
      if (data.crew.roster.length > DS_TUNE_V3.crewMaxRoster) {
        issues.push('船员超出上限：' + data.crew.roster.length);
      }
      for (let i = 0; i < data.crew.roster.length; i++) {
        const c = data.crew.roster[i];
        if (!CREW_ROLES[c.role]) issues.push('船员 ' + c.id + ' 岗位未知：' + c.role);
        if (c.morale < 0 || c.morale > 100) issues.push('船员 ' + c.id + ' 士气越界：' + c.morale);
      }
    }
    if (data.station && data.station.slots) {
      if (data.station.slots.length > data.station.rings * DS_TUNE_V3.stationSlotsPerRing) {
        issues.push('轨道站槽位超限');
      }
    }
    if (data.belt && data.belt.asteroids) {
      for (let i = 0; i < data.belt.asteroids.length; i++) {
        const a = data.belt.asteroids[i];
        if (a.reserves < 0) issues.push('小行星 ' + a.id + ' 储量为负');
        if (!ASTEROID_TYPES[a.type]) issues.push('小行星 ' + a.id + ' 类型未知：' + a.type);
      }
    }
    if (data.expeditions && data.expeditions.active) {
      if (data.expeditions.active.length > DS_TUNE_V3.expeditionMaxActive) {
        issues.push('进行中远征超出上限');
      }
    }
    return issues;
  }
  // 修复可修复的问题（负数清零、越界钳制），返回修复记录
  static repairSave(data) {
    const fixed = [];
    if (!data) return fixed;
    if (data.stock) {
      for (const k in data.stock) {
        if (typeof data.stock[k] !== 'number' || isNaN(data.stock[k])) {
          data.stock[k] = 0;
          fixed.push('stock.' + k + ' 重置为 0');
        } else if (data.stock[k] < 0) {
          data.stock[k] = 0;
          fixed.push('stock.' + k + ' 负数清零');
        }
      }
    }
    if (data.fleet && data.fleet.ships) {
      data.fleet.ships = data.fleet.ships.filter(function (s) {
        if (s.status === SHIP_STATUS.LOST) {
          fixed.push('移除已损毁飞船 ' + s.id);
          return false;
        }
        return true;
      });
      for (let i = 0; i < data.fleet.ships.length; i++) {
        const s = data.fleet.ships[i];
        if (s.hull < 0) { s.hull = 0; fixed.push('飞船 ' + s.id + ' 船体清零'); }
      }
    }
    if (data.crew && data.crew.roster) {
      for (let i = 0; i < data.crew.roster.length; i++) {
        const c = data.crew.roster[i];
        c.morale = dsv3Clamp(c.morale, 0, 100);
        c.health = dsv3Clamp(c.health, 0, 100);
      }
      if (data.crew.roster.length > DS_TUNE_V3.crewMaxRoster) {
        data.crew.roster.length = DS_TUNE_V3.crewMaxRoster;
        fixed.push('船员名册截断至上限');
      }
    }
    return fixed;
  }
}

// ================= 深空 UI =================
// 纯字符串 HTML 渲染（不依赖 DOM，可在 Node 自测中调用；
// game.js 接入时把返回的 HTML 塞进容器即可）。
// 所有面板函数签名：renderX(mgr) → HTML 字符串。
const DSUI = {
  esc: function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },
  resIcon: function (k) {
    const icons = {
      steel: '🔩', rare: '💎', tech: '🔬', titanium: '⚙️', platinum: '👑',
      helium3: '⚛️', water: '💧', food: '🍞', fuel: '🛢️', oxygen: '💨',
      uranium: '☢️', artifact: '🏺',
    };
    return icons[k] || '📦';
  },
  costHtml: function (cost) {
    const parts = [];
    for (const k in cost) {
      if (!cost[k]) continue;
      parts.push(this.resIcon(k) + ' ' + (DS_RESOURCES[k] ? DS_RESOURCES[k].name : k) + ' ' + dsv3Fmt(cost[k]));
    }
    return parts.join(' · ') || '免费';
  },
  stockHtml: function (stock) {
    const parts = [];
    for (let i = 0; i < DS_RESOURCE_KEYS.length; i++) {
      const k = DS_RESOURCE_KEYS[i];
      const v = stock[k] || 0;
      if (v <= 0 && k !== 'steel' && k !== 'fuel') continue;
      parts.push('<span class="ds-res" title="' + this.esc(DS_RESOURCES[k].desc) + '">' +
        this.resIcon(k) + ' ' + dsv3Fmt(v) + '</span>');
    }
    return '<div class="ds-stock">' + parts.join('') + '</div>';
  },
  barHtml: function (ratio, label, color) {
    const pct = Math.round(dsv3Clamp(ratio, 0, 1) * 100);
    return '<div class="ds-bar"><div class="ds-bar-fill" style="width:' + pct +
      '%;background:' + (color || '#4caf50') + '"></div><span>' +
      this.esc(label || (pct + '%')) + '</span></div>';
  },

  // —— 总览 ——
  overview: function (mgr) {
    const s = mgr.summary();
    let h = '<div class="ds-panel ds-overview">';
    h += '<h2>🌌 深空探索 <span class="ds-ver">v' + mgr.version + '</span></h2>';
    h += this.stockHtml(mgr.stock);
    h += '<div class="ds-grid">';
    h += '<div class="ds-card"><h3>🛰️ 轨道站</h3><p>' +
      (s.stationFounded ? s.station.rings + ' 环 · ' + s.station.slotsUsed + '/' + s.station.slotsTotal + ' 槽 · 电力 ' +
        s.station.powerNet + '（产 ' + s.station.powerProd + ' / 耗 ' + s.station.powerUse + '）' : '未建立') +
      '</p></div>';
    h += '<div class="ds-card"><h3>🌕 月球基地</h3><p>' +
      (s.moon.founded ? 'Lv' + s.moon.level + ' ' + s.moon.levelName + ' · 人口 ' + s.moon.population + '/' + s.moon.popCap +
        ' · 氦-3 累计 ' + s.moon.totalHe3 : '未建立') + '</p></div>';
    h += '<div class="ds-card"><h3>🪨 小行星带</h3><p>已发现 ' + s.belt.discovered + '/' + s.belt.total +
      ' · 认领 ' + s.belt.activeClaims + ' · 累计开采 ' + dsv3Fmt(s.belt.totalMined) + ' 吨</p></div>';
    h += '<div class="ds-card"><h3>🚀 舰队</h3><p>' + s.fleet.total + ' 艘 · 在航 ' + s.fleet.active +
      ' · 停靠 ' + s.fleet.docked + ' · 货值 ' + dsv3Fmt(s.fleet.cargoValue) + '</p></div>';
    h += '<div class="ds-card"><h3>🧑‍🚀 船员</h3><p>' + s.crew.total + ' 人 · 待命 ' + s.crew.available +
      ' · 平均士气 ' + s.crew.avgMorale + ' · 平均效率 ' + s.crew.avgEfficiency + '</p></div>';
    h += '<div class="ds-card"><h3>🗺️ 远征</h3><p>进行中 ' + s.expeditions.active.length + ' · 成功 ' +
      s.expeditions.totalSuccess + ' · 失败 ' + s.expeditions.totalFailed + '</p></div>';
    h += '<div class="ds-card"><h3>🏛️ 遗迹</h3><p>已完成 ' + s.ruins.completed + '/3' +
      (s.ruins.builtStargate ? ' · 星门已建成' : '') + '</p></div>';
    h += '<div class="ds-card"><h3>🔬 科技</h3><p>已研究 ' + s.tech.researched + '/' + s.tech.total +
      (s.tech.researching ? ' · 研究中：' + this.esc(DS_TECH_MAP[s.tech.researching.techId].name) : '') + '</p></div>';
    h += '</div>';
    h += '<h3>📡 增益</h3><p class="ds-buffs">';
    const b = s.buffs;
    const buffParts = [];
    if (b.prodMul !== 1) buffParts.push('全产量 ×' + b.prodMul);
    if (b.solarMul !== 1) buffParts.push('太阳能 ×' + b.solarMul);
    if (b.hullMul !== 1) buffParts.push('船体 ×' + b.hullMul);
    if (b.miningMul !== 1) buffParts.push('采矿 ×' + b.miningMul);
    if (b.travelTimeMul !== 1) buffParts.push('航行时间 ×' + b.travelTimeMul);
    if (b.expeditionRewardMul !== 1) buffParts.push('远征奖励 ×' + b.expeditionRewardMul);
    if (b.expeditionRiskMul !== 1) buffParts.push('远征风险 ×' + b.expeditionRiskMul);
    h += buffParts.length ? buffParts.join(' · ') : '暂无遗迹/科技增益';
    h += '</p>';
    h += '<h3>📜 最近日志</h3><ul class="ds-log">';
    const logs = mgr.log.slice(-8).reverse();
    for (let i = 0; i < logs.length; i++) {
      h += '<li><span class="ds-t">' + dsv3FmtTime(logs[i].t) + '</span> ' + this.esc(logs[i].text) + '</li>';
    }
    h += '</ul></div>';
    return h;
  },

  // —— 轨道站 ——
  station: function (mgr) {
    const st = mgr.station;
    const s = st.summary();
    let h = '<div class="ds-panel ds-station">';
    h += '<h2>🛰️ 火星轨道站</h2>';
    if (!mgr.stationFounded()) {
      h += '<p>尚未建立轨道站。建立需要：' + this.costHtml({ steel: 800, rare: 300, tech: 100, fuel: 100 }) + '</p>';
      h += '<button data-ds-action="found-station">建立轨道站</button>';
      h += '</div>';
      return h;
    }
    const power = st.powerBalance();
    h += '<p>环数 ' + s.rings + ' · 槽位 ' + s.slotsUsed + '/' + s.slotsTotal +
      ' · 船员需求 ' + s.crewNeed + ' / 容量 ' + s.crewCap +
      ' · 仓储 ' + s.storageCap + '</p>';
    h += '<p>电力：产 ' + power.prod + ' / 耗 ' + power.use + ' / 净 ' + power.net +
      (power.net < 0 ? ' <b class="ds-warn">⚠️ 缺电！全站生产 ×0.4</b>' : ' ✅') + '</p>';
    h += '<h3>模块一览</h3><div class="ds-grid">';
    for (let i = 0; i < st.slots.length; i++) {
      const e = st.slots[i];
      const def = STATION_MODULES[e.moduleId];
      h += '<div class="ds-card"><h4>' + def.icon + ' ' + def.name + ' Lv' + e.level + '</h4>' +
        '<p>第 ' + e.ring + ' 环 · 槽 ' + (e.slot + 1) + ' · 耐久 ' + e.hp + '/' + e.maxHp + '</p>' +
        '<p>' + this.esc(def.desc) + '</p>' +
        '<button data-ds-action="station-upgrade" data-ring="' + e.ring + '" data-slot="' + e.slot + '">升级</button> ' +
        '<button data-ds-action="station-demolish" data-ring="' + e.ring + '" data-slot="' + e.slot + '">拆除</button></div>';
    }
    h += '</div>';
    h += '<h3>建造新模块</h3><div class="ds-grid">';
    for (let i = 0; i < STATION_MODULE_KEYS.length; i++) {
      const def = STATION_MODULES[STATION_MODULE_KEYS[i]];
      const cost = st.buildCost(def.id, 1);
      h += '<div class="ds-card"><h4>' + def.icon + ' ' + def.name + '</h4>' +
        '<p>' + this.esc(def.desc) + '</p><p>造价：' + this.costHtml(cost) + '</p>' +
        '<button data-ds-action="station-build" data-module="' + def.id + '">建造</button></div>';
    }
    h += '</div>';
    if (st.freeSlots() <= 0) {
      h += '<p>槽位已满。</p>';
    }
    const ringCheck = st.canExpandRing(mgr.stock);
    h += '<h3>扩建</h3><p>' + (ringCheck.ok ? '可扩建第 ' + (st.rings + 1) + ' 环，造价：' +
      this.costHtml(ringCheck.cost) : this.esc(ringCheck.reason)) + '</p>';
    if (ringCheck.ok) h += '<button data-ds-action="station-expand">扩建新环</button>';
    h += '<h3>轨道采集</h3>';
    h += '<label><input type="checkbox" data-ds-action="harvest-solar" ' +
      (st.harvest.solarWind ? 'checked' : '') + '> 太阳风收集（需太阳能帆 Lv2）：氦-3 +0.2/时，科技 +0.3/时</label><br>';
    h += '<label><input type="checkbox" data-ds-action="harvest-debris" ' +
      (st.harvest.debris ? 'checked' : '') + '> 轨道碎片回收（需船坞）：钢材 +3/时，稀土 +1/时</label>';
    h += '<h3>站内事件</h3><ul class="ds-log">';
    const evs = st.events.slice(-6).reverse();
    for (let i = 0; i < evs.length; i++) {
      h += '<li><span class="ds-t">' + dsv3FmtTime(evs[i].t) + '</span> ' + this.esc(evs[i].text) + '</li>';
    }
    h += '</ul></div>';
    return h;
  },

  // —— 月球基地 ——
  moon: function (mgr) {
    const moon = mgr.moon;
    let h = '<div class="ds-panel ds-moon">';
    h += '<h2>🌕 月球基地</h2>';
    if (!moon.founded) {
      h += '<p>尚未建立月球基地。建立需要一艘停靠的运输船 + 物资：' +
        this.costHtml(moon.foundCost()) + '</p>';
      h += '<p>地月单程约 3 天，发射场可缩短航程。月球产出氦-3（价值 15），是聚变燃料的唯一稳定来源。</p>';
      h += '<button data-ds-action="moon-found">建立月球基地</button>';
      h += '</div>';
      return h;
    }
    const s = moon.summary();
    const power = moon.powerBalance();
    h += '<p>' + s.levelName + ' Lv' + s.level + ' · 建筑 ' + s.slotsUsed + '/' + s.slotsTotal +
      ' · 人口 ' + s.population + '/' + s.popCap + ' · 士气 ' + s.morale + '</p>';
    h += '<p>电力：产 ' + power.prod + ' / 耗 ' + power.use + ' / 净 ' + power.net +
      (power.net < 0 ? ' <b class="ds-warn">⚠️ 缺电！产量 ×0.4</b>' : ' ✅') + '</p>';
    h += '<p>生命维持：水 ' + this.barHtml(s.lifeSupport.water / 100, '水 ' + s.lifeSupport.water + '%') +
      ' 氧气 ' + this.barHtml(s.lifeSupport.oxygen / 100, '氧气 ' + s.lifeSupport.oxygen + '%') + '</p>';
    h += '<p>氦-3 累计开采 ' + s.totalHe3 + ' · 补给次数 ' + s.supplyRuns +
      ' · 月夜周期 ' + Math.round(s.nightCycle * 100) + '%（太阳能场月夜减半）</p>';
    h += '<h3>建筑</h3><div class="ds-grid">';
    for (let i = 0; i < moon.buildings.length; i++) {
      const b = moon.buildings[i];
      const def = MOON_BUILDINGS[b.buildingId];
      h += '<div class="ds-card"><h4>' + def.icon + ' ' + def.name + ' Lv' + b.level + '</h4>' +
        '<p>' + this.esc(def.desc) + '</p>' +
        '<button data-ds-action="moon-upgrade" data-index="' + i + '">升级</button> ' +
        '<button data-ds-action="moon-demolish" data-index="' + i + '">拆除</button></div>';
    }
    h += '</div>';
    h += '<h3>新建建筑</h3><div class="ds-grid">';
    for (let i = 0; i < MOON_BUILDING_KEYS.length; i++) {
      const def = MOON_BUILDINGS[MOON_BUILDING_KEYS[i]];
      if (def.unlockBaseLevel > moon.level) continue;
      const cost = moon.buildCost(def.id, 1);
      h += '<div class="ds-card"><h4>' + def.icon + ' ' + def.name + '</h4>' +
        '<p>' + this.esc(def.desc) + '</p><p>造价：' + this.costHtml(cost) + '</p>' +
        '<button data-ds-action="moon-build" data-building="' + def.id + '">建造</button></div>';
    }
    h += '</div>';
    const up = moon.canUpgrade(mgr.stock);
    h += '<h3>基地升级</h3><p>' + (up.ok ? '可升至 Lv' + up.nextLevel + '，造价：' + this.costHtml(up.cost) :
      this.esc(up.reason || '')) + '</p>';
    if (up.ok) h += '<button data-ds-action="moon-upgrade-base">升级基地</button>';
    h += '<h3>基地事件</h3><ul class="ds-log">';
    const evs = moon.events.slice(-6).reverse();
    for (let i = 0; i < evs.length; i++) {
      h += '<li><span class="ds-t">' + dsv3FmtTime(evs[i].t) + '</span> ' + this.esc(evs[i].text) + '</li>';
    }
    h += '</ul></div>';
    return h;
  },

  // —— 小行星带 ——
  belt: function (mgr) {
    const belt = mgr.belt;
    if (!belt.generated) belt.generate();
    const s = belt.summary();
    let h = '<div class="ds-panel ds-belt">';
    h += '<h2>🪨 小行星带</h2>';
    h += '<p>已发现 ' + s.discovered + '/' + s.total + ' · 可认领 ' + s.claimable +
      ' · 进行中认领 ' + s.activeClaims + '/' + DS_TUNE_V3.beltMaxClaims +
      ' · 累计开采 ' + dsv3Fmt(s.totalMined) + ' 吨 · 勘测进度 ' + Math.round(s.surveyProgress * 100) + '%</p>';
    h += '<h3>分区</h3><div class="ds-grid">';
    for (let i = 0; i < BELT_ZONES.length; i++) {
      const z = BELT_ZONES[i];
      const inZone = belt.asteroids.filter(function (a) { return a.zone === z.id && a.discovered; });
      const rich = inZone.filter(function (a) { return a.richness >= 1.3; }).length;
      h += '<div class="ds-card"><h4>' + z.name + '</h4><p>' + z.desc + '</p>' +
        '<p>距离火星 ' + z.au + ' AU · 富集 ×' + z.richness + ' · 危险 ' + Math.round(z.hazard * 100) + '%' +
        '<br>已发现 ' + inZone.length + ' 颗 · 高富集 ' + rich + ' 颗</p></div>';
    }
    h += '</div>';
    h += '<h3>可认领小行星（按储量排序）</h3>';
    h += '<table class="ds-table"><tr><th>名称</th><th>类型</th><th>分区</th><th>储量</th><th>富集</th><th>危险</th><th>操作</th></tr>';
    const list = belt.claimable().sort(function (a, b) { return b.reserves - a.reserves; }).slice(0, 20);
    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      h += '<tr><td>' + this.esc(a.name) + '</td><td>' + a.typeDef().icon + ' ' + a.typeDef().name +
        '</td><td>' + a.zoneDef().name + '</td><td>' + dsv3Fmt(a.reserves) + ' 吨</td>' +
        '<td>×' + a.richness + '</td><td>' + Math.round(a.hazard * 100) + '%</td>' +
        '<td><button data-ds-action="belt-claim" data-asteroid="' + a.id + '">认领</button> ' +
        '<button data-ds-action="belt-survey" data-asteroid="' + a.id + '">深度勘测 Lv' + a.surveyLevel + '</button></td></tr>';
    }
    h += '</table>';
    h += '<h3>进行中的认领</h3><ul class="ds-log">';
    const claims = belt.activeClaims();
    if (!claims.length) h += '<li>暂无进行中的认领。</li>';
    for (let i = 0; i < claims.length; i++) {
      const a = belt.get(claims[i].asteroidId);
      h += '<li>' + this.esc(a ? a.name : claims[i].asteroidId) + ' · 剩余储量 ' +
        dsv3Fmt(a ? a.reserves : 0) + ' 吨 <button data-ds-action="belt-release" data-asteroid="' +
        claims[i].asteroidId + '">释放</button></li>';
    }
    h += '</ul></div>';
    return h;
  },
};

Object.assign(DSUI, {
  // —— 舰队 ——
  fleet: function (mgr) {
    const fleet = mgr.fleet;
    const s = fleet.summary();
    let h = '<div class="ds-panel ds-fleet">';
    h += '<h2>🚀 舰队</h2>';
    h += '<p>' + s.total + ' 艘 · 在航 ' + s.active + ' · 停靠 ' + s.docked +
      ' · 在建 ' + s.building + ' · 升级中 ' + s.upgrading +
      ' · 累计航程 ' + s.totalDistanceAU + ' AU · 货值 ' + dsv3Fmt(s.cargoValue) + '</p>';
    h += '<h3>建造飞船</h3><div class="ds-grid">';
    for (let i = 0; i < SHIP_TYPE_KEYS.length; i++) {
      const def = SHIP_TYPES[SHIP_TYPE_KEYS[i]];
      const cost = fleet.buildCost(def.id, mgr.station.dockLevel());
      h += '<div class="ds-card"><h4>' + def.icon + ' ' + def.name + '</h4>' +
        '<p>' + this.esc(def.desc) + '</p>' +
        '<p>载荷 ' + def.cargo + ' 吨 · 速度 ' + def.speed + ' AU/时 · 船员 ' + def.crew +
        ' 人 · 船体 ' + def.hull + ' · 燃料 ' + def.fuelPerAU + '/AU</p>' +
        '<p>造价：' + this.costHtml(cost) + ' · 建造 ' + dsv3FmtTime(fleet.buildTimeSec(def.id, mgr.station.dockLevel())) + '</p>' +
        '<button data-ds-action="fleet-build" data-type="' + def.id + '">建造</button></div>';
    }
    h += '</div>';
    h += '<h3>飞船列表</h3>';
    if (!fleet.ships.length) h += '<p>暂无飞船，先建造一艘。</p>';
    for (let i = 0; i < fleet.ships.length; i++) {
      const sh = fleet.ships[i];
      const sum = sh.summary();
      h += '<div class="ds-card ds-ship"><h4>' + sum.icon + ' ' + this.esc(sum.name) +
        ' <span class="ds-tag">' + sum.typeName + ' Lv' + sum.level + '</span> ' +
        '<span class="ds-tag">' + sum.statusLabel + '</span></h4>';
      h += '<p>船体 ' + this.barHtml(sum.hull / sum.maxHull, sum.hull + '/' + sum.maxHull, '#e53935') + '</p>';
      h += '<p>燃料 ' + this.barHtml(sum.fuel / sum.maxFuel, Math.round(sum.fuel) + '/' + sum.maxFuel, '#fb8c00') + '</p>';
      h += '<p>货舱 ' + this.barHtml(sum.cargoUsed / sum.maxCargo, sum.cargoUsed + '/' + sum.maxCargo + ' 吨', '#1e88e5') + '</p>';
      h += '<p>速度 ' + sum.speed + ' AU/时 · 船员 ' + sum.crew + '/' + sum.crewNeed +
        ' · 升级：引擎 Lv' + sum.upgrades.engine + ' / 货舱 Lv' + sum.upgrades.cargo + ' / 护盾 Lv' + sum.upgrades.shield +
        ' · 航程 ' + sum.trips + ' 次</p>';
      if (sum.destination) {
        h += '<p>→ 前往 ' + this.esc(sum.destination) + ' ' + this.barHtml(sum.progress, Math.round(sum.progress * 100) + '%') + '</p>';
      }
      if (Object.keys(sum.cargo).length) {
        h += '<p>货物：' + this.costHtml(sum.cargo) + '</p>';
      }
      h += '<p><button data-ds-action="fleet-refuel" data-ship="' + sh.id + '">加油</button> ' +
        '<button data-ds-action="fleet-repair" data-ship="' + sh.id + '">维修</button> ' +
        '<button data-ds-action="fleet-upgrade-engine" data-ship="' + sh.id + '">引擎升级</button> ' +
        '<button data-ds-action="fleet-upgrade-cargo" data-ship="' + sh.id + '">货舱升级</button> ' +
        '<button data-ds-action="fleet-upgrade-shield" data-ship="' + sh.id + '">护盾升级</button></p>';
      h += '</div>';
    }
    if (fleet.wrecks.length) {
      h += '<h3>残骸记录</h3><ul class="ds-log">';
      for (let i = 0; i < fleet.wrecks.length; i++) {
        const w = fleet.wrecks[i];
        h += '<li>' + this.esc(w.shipName) + ' · ' + this.esc(w.cause) + ' · 货物损失价值 ' + w.cargoLost + '</li>';
      }
      h += '</ul>';
    }
    h += '</div>';
    return h;
  },

  // —— 船员 ——
  crew: function (mgr) {
    const crew = mgr.crew;
    const s = crew.summary();
    let h = '<div class="ds-panel ds-crew">';
    h += '<h2>🧑‍🚀 船员</h2>';
    h += '<p>' + s.total + ' 人 · 待命 ' + s.available + ' · 平均士气 ' + s.avgMorale +
      ' · 平均效率 ' + s.avgEfficiency + ' · 训练中 ' + s.training +
      ' · 累计招募 ' + s.totalHired + ' · 离职 ' + s.totalResigned + '</p>';
    h += '<h3>岗位分布</h3><div class="ds-grid">';
    for (let i = 0; i < CREW_ROLE_KEYS.length; i++) {
      const r = s.byRole[CREW_ROLE_KEYS[i]];
      h += '<div class="ds-card"><h4>' + CREW_ROLES[CREW_ROLE_KEYS[i]].icon + ' ' + r.name + '</h4>' +
        '<p>' + r.total + ' 人 · 待命 ' + r.available + '</p></div>';
    }
    h += '</div>';
    h += '<button data-ds-action="crew-recruit">招募船员（生成 3 名候选人）</button>';
    h += '<h3>训练课程</h3><div class="ds-grid">';
    for (let i = 0; i < CREW_TRAINING_KEYS.length; i++) {
      const c = CREW_TRAINING[CREW_TRAINING_KEYS[i]];
      const gains = [];
      for (const sk in c.gains) gains.push(CREW_SKILL_NAMES[sk] + ' +' + c.gains[sk]);
      h += '<div class="ds-card"><h4>' + c.name + '</h4><p>' + this.esc(c.desc) + '</p>' +
        '<p>提升：' + gains.join('、') + ' · 耗时 ' + c.hours + ' 小时 · 费用：' + this.costHtml(c.cost) + '</p></div>';
    }
    h += '</div>';
    h += '<h3>名册</h3><table class="ds-table"><tr><th>姓名</th><th>岗位</th><th>等级</th><th>士气</th><th>健康</th><th>效率</th><th>状态</th><th>特质</th></tr>';
    const sorted = crew.roster.slice().sort(function (a, b) { return b.level - a.level || b.roleSkillAvg() - a.roleSkillAvg(); });
    for (let i = 0; i < sorted.length; i++) {
      const c = sorted[i];
      const sum = c.summary();
      h += '<tr><td>' + this.esc(c.name) + '</td><td>' + CREW_ROLES[c.role].icon + ' ' + sum.roleName +
        '</td><td>Lv' + c.level + '（' + sum.xp + '/' + sum.xpNext + '）</td>' +
        '<td>' + sum.morale + '</td><td>' + sum.health + '</td><td>' + sum.efficiency + '</td>' +
        '<td>' + sum.statusLabel + '</td><td>' + this.esc(sum.traits.join('、') || '—') + '</td></tr>';
    }
    h += '</table></div>';
    return h;
  },

  // —— 远征 ——
  expeditions: function (mgr) {
    const ex = mgr.expeditions;
    const s = ex.summary();
    let h = '<div class="ds-panel ds-expeditions">';
    h += '<h2>🗺️ 远征任务</h2>';
    h += '<p>进行中 ' + s.active.length + '/' + DS_TUNE_V3.expeditionMaxActive +
      ' · 累计出发 ' + s.totalStarted + ' · 成功 ' + s.totalSuccess + ' · 失败 ' + s.totalFailed + '</p>';
    if (s.active.length) {
      h += '<h3>进行中</h3>';
      for (let i = 0; i < s.active.length; i++) {
        const a = s.active[i];
        h += '<div class="ds-card"><h4>' + this.esc(a.name) + '</h4>' +
          '<p>进度 ' + this.barHtml(a.progress, Math.round(a.progress * 100) + '%') + '</p>' +
          '<p>阶段 ' + a.stage + ' · 船员 ' + a.crew + ' 人</p>' +
          '<button data-ds-action="exp-abort" data-exp="' + a.id + '">中止</button></div>';
      }
    }
    h += '<h3>可接任务</h3><div class="ds-grid">';
    const avail = ex.availableDefs(null);
    for (let i = 0; i < avail.length; i++) {
      const d = avail[i];
      const needCrew = [];
      for (const r in d.requires.crew) needCrew.push(CREW_ROLES[r].name + '×' + d.requires.crew[r]);
      h += '<div class="ds-card"><h4>' + d.icon + ' ' + d.name +
        ' <span class="ds-tag">难度 ' + d.difficulty + '</span>' + (d.repeatable ? ' <span class="ds-tag">可重复</span>' : '') + '</h4>' +
        '<p>' + this.esc(d.desc) + '</p>' +
        '<p>需要：' + SHIP_TYPES[d.requires.shipType].name + ' · ' + needCrew.join('、') +
        ' · 技能 ≥' + d.requires.minSkill + ' · 时长 ' + d.durationHours + ' 小时 · 航程 ' + d.distanceAU + ' AU</p>' +
        '<p>奖励：' + this.costHtml(d.rewards) + ' · 风险 ' + Math.round(d.risk * 100) + '%</p>' +
        '<p>阶段：' + d.stages.map(function (st) { return st.name + '（' + CREW_SKILL_NAMES[st.check] + ' DC' + st.dc + '）'; }).join(' → ') + '</p>' +
        '<button data-ds-action="exp-start" data-exp="' + d.id + '">出发</button></div>';
    }
    h += '</div>';
    h += '<h3>远征记录</h3><ul class="ds-log">';
    const done = ex.completed.slice(-10).reverse();
    for (let i = 0; i < done.length; i++) {
      h += '<li>' + this.esc(done[i].name) + ' · ' +
        (done[i].status === 'success' ? '✅ 成功' : done[i].status === 'failed' ? '❌ 失败' : '⏹ 中止') +
        (done[i].rewards ? ' · 奖励：' + this.costHtml(done[i].rewards) : '') + '</li>';
    }
    h += '</ul></div>';
    return h;
  },

  // —— 遗迹 ——
  ruins: function (mgr) {
    const ruins = mgr.ruins;
    let h = '<div class="ds-panel ds-ruins">';
    h += '<h2>🏛️ 外星遗迹</h2>';
    h += '<p>已完成 ' + ruins.completedCount() + '/3' +
      (ruins.builtStargate ? ' · 星门信标已建成' : '') + '</p>';
    for (let i = 0; i < ruins.sites.length; i++) {
      const site = ruins.sites[i];
      const def = site.def();
      const sum = site.summary();
      h += '<div class="ds-card"><h3>' + def.icon + ' ' + def.name +
        ' <span class="ds-tag">' + sum.status + '</span></h3>' +
        '<p>' + this.esc(def.subtitle) + ' · ' + this.esc(def.desc) + '</p>' +
        '<p>线索 ' + sum.clues + '/2 · 发掘进度 ' + sum.stage + '/' + sum.stagesTotal + '</p>';
      h += '<ol>';
      for (let j = 0; j < def.stages.length; j++) {
        const st = def.stages[j];
        h += '<li>' + st.name + '（' + st.hours + ' 小时，' + CREW_SKILL_NAMES[st.check] +
          ' DC' + st.dc + '）' + (j < sum.stage ? ' ✅' : '') + ' — ' + this.esc(st.desc) + '</li>';
      }
      h += '</ol>';
      h += '<p>完成奖励：' + this.costHtml(def.rewards) + '</p>';
      h += '<p>解锁：<b>' + this.esc(def.unlock.name) + '</b> — ' + this.esc(def.unlock.desc) + '</p>';
      if (sum.status === 'discovered') {
        h += '<button data-ds-action="ruin-excavate" data-ruin="' + def.id + '">开始发掘下一阶段</button>';
      } else if (sum.status === 'locked') {
        h += '<p>尚未发现：完成对应远征或积累 2 条线索。</p>';
      } else if (sum.status === 'excavating') {
        h += '<p>发掘进行中……</p>';
      } else {
        h += '<p>✅ 发掘完成</p>';
      }
      h += '</div>';
    }
    if (ruins.get('gamma').isCompleted() && !ruins.builtStargate) {
      const check = ruins.canBuildStargate(mgr.stock);
      h += '<div class="ds-card"><h3>🌀 星门信标</h3><p>遗迹 γ 的赠礼：建在轨道站上，全部航行时间 -15%，远征事故率 -10%。</p>' +
        '<p>造价：' + this.costHtml(RUIN_BUILDINGS.stargate.cost) + '</p>' +
        (check.ok ? '<button data-ds-action="ruin-stargate">建造星门信标</button>' : '<p>' + this.esc(check.reason) + '</p>') + '</div>';
    }
    h += '</div>';
    return h;
  },

  // —— 深空地图 ——
  map: function (mgr) {
    const vm = mgr.map.viewModel(mgr.fleet.ships, mgr.gameTimeSec);
    let h = '<div class="ds-panel ds-map">';
    h += '<h2>🌌 深空地图</h2>';
    h += '<p>已发现节点 ' + vm.discoveredCount + '/' + vm.totalNodes + ' · 视图半径 ' + vm.radiusAU + ' AU · 火星为中心</p>';
    h += '<canvas id="ds-map-canvas" width="720" height="720" data-ds-map="1"></canvas>';
    h += '<h3>节点</h3><div class="ds-grid">';
    for (let i = 0; i < vm.nodes.length; i++) {
      const n = vm.nodes[i];
      h += '<div class="ds-card' + (n.selected ? ' ds-selected' : '') + '"><h4>' + n.icon + ' ' +
        (n.discovered ? this.esc(n.name) : '??? 未发现空域') + '</h4>' +
        '<p>' + (n.discovered ? this.esc(n.desc) : '派探索船勘测后可揭示。') + '</p>' +
        '<p>距离火星 ' + n.au + ' AU · 方位 ' + n.angle + '°' +
        (n.pirates ? ' · <b class="ds-warn">🏴‍☠️ 海盗出没</b>' : '') + '</p>' +
        (n.discovered ? '<button data-ds-action="map-select" data-node="' + n.id + '">查看详情</button>' : '') +
        '</div>';
    }
    h += '</div>';
    h += '<h3>在航飞船</h3><ul class="ds-log">';
    if (!vm.ships.length) h += '<li>暂无飞船在深空。</li>';
    for (let i = 0; i < vm.ships.length; i++) {
      const s = vm.ships[i];
      h += '<li>' + s.icon + ' ' + this.esc(s.name) + ' · ' + s.statusLabel +
        (s.destination ? ' → ' + this.esc(s.destination) + ' ' + Math.round(s.progress * 100) + '%' : ' · 位于火星轨道') + '</li>';
    }
    h += '</ul></div>';
    return h;
  },

  // —— 科技 ——
  tech: function (mgr) {
    const tech = mgr.tech;
    const s = tech.summary();
    let h = '<div class="ds-panel ds-tech">';
    h += '<h2>🔬 深空科技</h2>';
    h += '<p>已研究 ' + s.researched + '/' + s.total + ' · 累计花费 ' + s.totalSpentTech + ' 科技点' +
      (s.researching ? ' · 研究中：' + this.esc(DS_TECH_MAP[s.researching.techId].name) : '') + '</p>';
    h += '<div class="ds-grid">';
    const list = tech.availableList();
    for (let i = 0; i < list.length; i++) {
      const t = list[i];
      h += '<div class="ds-card"><h4>' + t.icon + ' ' + t.name + '</h4>' +
        '<p>' + this.esc(t.desc) + '</p>' +
        '<p>造价：' + this.costHtml(t.cost) + ' · 研究 ' + t.timeHours + ' 小时</p>' +
        (t.prereq.length ? '<p>前置：' + t.prereq.join('、') + '</p>' : '') +
        (t.researching ? '<p>研究中……</p>' :
          t.prereqOk ? '<button data-ds-action="tech-research" data-tech="' + t.id + '">开始研究</button>' :
          '<p>前置科技未满足</p>') +
        '</div>';
    }
    h += '</div></div>';
    return h;
  },

  // —— 交易所与合同 ——
  market: function (mgr) {
    const ex = mgr.exchange;
    const ct = mgr.contracts;
    let h = '<div class="ds-panel ds-market">';
    h += '<h2>💱 深空交易所</h2>';
    h += '<p>以科技点计价。买入价含 10% 手续费，卖出价扣 10%。交易会推动价格，每小时向基准回归。</p>';
    h += '<table class="ds-table"><tr><th>资源</th><th>基准</th><th>买入</th><th>卖出</th><th>偏离</th><th>24h 量</th></tr>';
    const quotes = ex.quotes();
    for (let i = 0; i < quotes.length; i++) {
      const q = quotes[i];
      h += '<tr><td>' + DSUI.resIcon(q.res) + ' ' + q.name + '</td><td>' + q.base + '</td>' +
        '<td>' + q.buy + '</td><td>' + q.sell + '</td>' +
        '<td>' + (q.driftPct >= 0 ? '+' : '') + q.driftPct + '%</td><td>' + q.volume + '</td></tr>';
    }
    h += '</table>';
    h += '<h2>📋 合同板</h2>';
    h += '<p>已完成 ' + ct.completed + ' · 过期 ' + ct.failed + ' · 每 6 小时刷新</p>';
    h += '<div class="ds-grid">';
    const open = ct.summary().open;
    for (let i = 0; i < open.length; i++) {
      const c = open[i];
      h += '<div class="ds-card"><h4>' + this.esc(c.name) + ' <span class="ds-tag">' + c.tier + ' 级</span></h4>' +
        '<p>交付：' + DSUI.resIcon(c.res) + ' ' + c.resName + ' ×' + c.amount + '</p>' +
        '<p>奖励：' + this.costHtml(c.reward) + '</p>' +
        '<button data-ds-action="contract-complete" data-contract="' + c.id + '">交付完成</button></div>';
    }
    h += '</div>';
    h += '<h2>🏆 里程碑</h2>';
    const ms = mgr.milestones.summary();
    h += '<p>已达成 ' + ms.done + '/' + ms.total + '</p><ul class="ds-log">';
    for (let i = 0; i < ms.list.length; i++) {
      const m = ms.list[i];
      h += '<li>' + (m.done ? '✅ ' : '⬜ ') + this.esc(m.name) + ' — ' + this.esc(m.desc) +
        ' · 奖励：' + this.costHtml(m.reward) + '</li>';
    }
    h += '</ul></div>';
    return h;
  },
});

// ================= 深空地图 Canvas 渲染 =================
// 在浏览器里调用：DSMapRenderer.draw(canvas, mgr)。
// 纯 Canvas 2D 指令；Node 环境下 canvas 不存在时不调用即可。
const DSMapRenderer = {
  draw: function (canvas, mgr) {
    if (!canvas || typeof canvas.getContext !== 'function') return false;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const vm = mgr.map.viewModel(mgr.fleet.ships, mgr.gameTimeSec);
    const cx = W / 2, cy = H / 2;
    const scale = (Math.min(W, H) / 2 - 30) / vm.radiusAU;
    // 背景
    ctx.fillStyle = '#050510';
    ctx.fillRect(0, 0, W, H);
    // 星空底（确定性星点）
    const rng = dsv3Mulberry32(1234);
    for (let i = 0; i < 200; i++) {
      const x = rng() * W, y = rng() * H;
      const a = 0.2 + rng() * 0.6;
      ctx.fillStyle = 'rgba(255,255,255,' + a.toFixed(2) + ')';
      ctx.fillRect(x, y, 1.5, 1.5);
    }
    // 轨道圈
    ctx.strokeStyle = 'rgba(120,140,255,0.18)';
    ctx.lineWidth = 1;
    const orbitRadii = [0.9, 1.2, 1.8, 2.5, 4.5, 5.0];
    for (let i = 0; i < orbitRadii.length; i++) {
      ctx.beginPath();
      ctx.arc(cx, cy, orbitRadii[i] * scale, 0, Math.PI * 2);
      ctx.stroke();
    }
    // 航线
    for (let i = 0; i < vm.routes.length; i++) {
      const r = vm.routes[i];
      const ax = cx + r.ax * scale, ay = cy - r.ay * scale;
      const bx = cx + r.bx * scale, by = cy - r.by * scale;
      ctx.strokeStyle = 'rgba(80,200,255,0.25)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    // 火星（中心）
    ctx.fillStyle = '#c1440e';
    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = '12px sans-serif';
    ctx.fillText('火星', cx + 14, cy + 4);
    // 节点
    for (let i = 0; i < vm.nodes.length; i++) {
      const n = vm.nodes[i];
      if (n.id === 'mars-orbit') continue;
      const x = cx + n.x * scale, y = cy - n.y * scale;
      if (!n.discovered) {
        // 未发现：画虚线问号
        ctx.strokeStyle = 'rgba(255,255,255,0.35)';
        ctx.setLineDash([2, 3]);
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fillText('?', x - 3, y + 4);
        continue;
      }
      const colors = {
        station: '#4fc3f7', moon: '#e0e0e0', base: '#81c784',
        belt: '#ffb74d', ruin: '#ba68c8', event: '#fff176',
      };
      ctx.fillStyle = colors[n.kind] || '#fff';
      ctx.beginPath();
      ctx.arc(x, y, n.selected ? 8 : 6, 0, Math.PI * 2);
      ctx.fill();
      if (n.pirates) {
        ctx.fillStyle = '#ff5252';
        ctx.font = '12px sans-serif';
        ctx.fillText('🏴‍☠️', x + 8, y - 8);
      }
      ctx.fillStyle = '#ddd';
      ctx.font = '11px sans-serif';
      ctx.fillText(n.name, x + 9, y + 4);
    }
    // 飞船
    for (let i = 0; i < vm.ships.length; i++) {
      const s = vm.ships[i];
      const x = cx + s.x * scale, y = cy - s.y * scale;
      ctx.fillStyle = '#00e676';
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#a5d6a7';
      ctx.font = '10px sans-serif';
      ctx.fillText(s.name, x + 6, y - 6);
    }
    return true;
  },
};

// ================= 玩家操作分发器 =================
// UI 上的每个 data-ds-action 按钮都走到这里：
//   DSActions.dispatch(mgr, action, params, nowSec, game)
// 返回 {ok, message, data}，game.js 只需把结果 toast 出来。
// 这样 UI 与逻辑彻底解耦，也方便自测逐个调用。
const DSActions = {
  dispatch: function (mgr, action, params, nowSec, game) {
    params = params || {};
    nowSec = nowSec || mgr.gameTimeSec;
    const fn = this[action];
    if (typeof fn !== 'function') {
      return { ok: false, message: '未知操作：' + action };
    }
    try {
      return fn.call(this, mgr, params, nowSec, game);
    } catch (e) {
      return { ok: false, message: '操作失败：' + (e && e.message ? e.message : e) };
    }
  },

  // —— 轨道站 ——
  'found-station': function (mgr, p, nowSec) {
    const r = mgr.foundStation(mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '火星轨道站建立！第一环合龙。' }
      : { ok: false, message: r.reason };
  },
  'station-build': function (mgr, p, nowSec) {
    const r = mgr.station.build(p.module, mgr.stock, nowSec, false);
    if (!r.ok) return { ok: false, message: r.reason };
    return { ok: true, message: STATION_MODULES[p.module].name + ' 建造完成（第 ' + r.ring + ' 环）。' };
  },
  'station-upgrade': function (mgr, p, nowSec) {
    const r = mgr.station.upgrade(parseInt(p.ring, 10), parseInt(p.slot, 10), mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '模块升级完成。' } : { ok: false, message: r.reason };
  },
  'station-demolish': function (mgr, p, nowSec) {
    const r = mgr.station.demolish(parseInt(p.ring, 10), parseInt(p.slot, 10), mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '模块已拆除，返还部分材料。' } : { ok: false, message: r.reason };
  },
  'station-expand': function (mgr, p, nowSec) {
    const r = mgr.station.expandRing(mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '第 ' + r.rings + ' 环合龙，新增 12 个槽位。' }
      : { ok: false, message: r.reason };
  },
  'harvest-solar': function (mgr, p) {
    mgr.station.harvest.solarWind = !mgr.station.harvest.solarWind;
    return { ok: true, message: '太阳风收集' + (mgr.station.harvest.solarWind ? '已开启' : '已关闭') + '。' };
  },
  'harvest-debris': function (mgr, p) {
    mgr.station.harvest.debris = !mgr.station.harvest.debris;
    return { ok: true, message: '轨道碎片回收' + (mgr.station.harvest.debris ? '已开启' : '已关闭') + '。' };
  },

  // —— 月球 ——
  'moon-found': function (mgr, p, nowSec) {
    const ship = mgr.fleet.dockedShips().find(function (s) { return s.type === 'transport'; });
    if (!ship) return { ok: false, reason: '需要一艘停靠的运输船', message: '需要一艘停靠的运输船执行建立任务。' };
    const r = mgr.moon.found(mgr.stock, nowSec);
    if (!r.ok) return { ok: false, message: r.reason };
    mgr.map.discover('moon-base', nowSec);
    return { ok: true, message: '月球基地建立！首批 12 名居民登陆。' };
  },
  'moon-build': function (mgr, p, nowSec) {
    const r = mgr.moon.build(p.building, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: MOON_BUILDINGS[p.building].name + ' 建造完成。' }
      : { ok: false, message: r.reason };
  },
  'moon-upgrade': function (mgr, p, nowSec) {
    const r = mgr.moon.upgradeBuilding(parseInt(p.index, 10), mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '建筑升级完成。' } : { ok: false, message: r.reason };
  },
  'moon-demolish': function (mgr, p, nowSec) {
    const r = mgr.moon.demolishBuilding(parseInt(p.index, 10), mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '建筑已拆除。' } : { ok: false, message: r.reason };
  },
  'moon-upgrade-base': function (mgr, p, nowSec) {
    const r = mgr.moon.upgrade(mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '月球基地升至 Lv' + r.level + '。' }
      : { ok: false, message: r.reason };
  },
  'moon-supply': function (mgr, p, nowSec) {
    // params: {shipId, water, food, oxygen}
    const cargo = {};
    if (p.water) cargo.water = parseInt(p.water, 10);
    if (p.food) cargo.food = parseInt(p.food, 10);
    if (p.oxygen) cargo.oxygen = parseInt(p.oxygen, 10);
    const r = mgr.sendMoonSupply(p.shipId, cargo, nowSec);
    return r.ok ? { ok: true, message: r.ship.name + ' 满载补给出发前往月球。' }
      : { ok: false, message: r.reason };
  },

  // —— 小行星带 ——
  'belt-claim': function (mgr, p, nowSec) {
    // 认领需要绑定一艘采矿船：取第一艘停靠的采矿船
    const ship = mgr.fleet.dockedShips().find(function (s) { return s.type === 'miner'; });
    if (!ship) return { ok: false, message: '需要一艘停靠的采矿船来认领。' };
    const r = mgr.belt.claim(p.asteroid, ship.id, nowSec);
    return r.ok ? { ok: true, message: '已认领 ' + r.asteroid.name + '（绑定 ' + ship.name + '）。' }
      : { ok: false, message: r.reason };
  },
  'belt-release': function (mgr, p, nowSec) {
    mgr.belt.releaseClaim(p.asteroid, nowSec);
    return { ok: true, message: '认领已释放。' };
  },
  'belt-survey': function (mgr, p, nowSec) {
    const r = mgr.belt.surveyAsteroid(p.asteroid, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '深度勘测完成，估计储量 ' + r.estimated + ' 吨。' }
      : { ok: false, message: r.reason };
  },
  'belt-mine': function (mgr, p, nowSec) {
    // params: {shipId, asteroidId, hours}
    const r = mgr.sendMiningShip(p.shipId, p.asteroidId, parseInt(p.hours, 10) || 24, nowSec);
    return r.ok ? { ok: true, message: r.ship.name + ' 出发采矿，预计 ' + dsv3FmtTime(r.totalSec) + ' 后抵达。' }
      : { ok: false, message: r.reason };
  },

  // —— 舰队 ——
  'fleet-build': function (mgr, p, nowSec) {
    const r = mgr.fleet.startBuild(p.type, mgr.stock, mgr.station.dockLevel(), nowSec);
    return r.ok ? { ok: true, message: r.ship.name + ' 开始建造，预计 ' + dsv3FmtTime(r.endsAt - nowSec) + ' 后完成。' }
      : { ok: false, message: r.reason };
  },
  'fleet-refuel': function (mgr, p) {
    const r = mgr.fleet.refuel(p.ship, mgr.stock);
    return r.ok ? { ok: true, message: '加油 ' + r.fueled + ' 单位。' } : { ok: false, message: r.reason };
  },
  'fleet-repair': function (mgr, p, nowSec) {
    const r = mgr.fleet.startRepair(p.ship, mgr.stock, nowSec, mgr.station.repairDiscount());
    return r.ok ? { ok: true, message: '维修开始，预计 ' + dsv3FmtTime(r.endsAt - nowSec) + ' 后完成。' }
      : { ok: false, message: r.reason };
  },
  'fleet-upgrade-engine': function (mgr, p, nowSec) {
    return this._fleetUpgrade(mgr, p.ship, 'engine', nowSec);
  },
  'fleet-upgrade-cargo': function (mgr, p, nowSec) {
    return this._fleetUpgrade(mgr, p.ship, 'cargo', nowSec);
  },
  'fleet-upgrade-shield': function (mgr, p, nowSec) {
    return this._fleetUpgrade(mgr, p.ship, 'shield', nowSec);
  },
  _fleetUpgrade: function (mgr, shipId, key, nowSec) {
    const r = mgr.fleet.startUpgrade(shipId, key, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: SHIP_UPGRADES[key].name + '升级开始，预计 ' + dsv3FmtTime(r.endsAt - nowSec) + ' 后完成。' }
      : { ok: false, message: r.reason };
  },
  'fleet-assign-crew': function (mgr, p) {
    // params: {shipId, crewIds: []}
    const r = mgr.fleet.assignCrew(p.shipId, p.crewIds || [], mgr.crew);
    return r.ok ? { ok: true, message: '已编配 ' + r.assigned + '/' + r.need + ' 名船员。' }
      : { ok: false, message: r.reason };
  },
  'fleet-transport': function (mgr, p, nowSec) {
    const r = mgr.sendTransport(p.shipId, p.destination, p.cargo || {}, nowSec);
    return r.ok ? { ok: true, message: '货运出发。' } : { ok: false, message: r.reason };
  },
  'fleet-patrol': function (mgr, p, nowSec) {
    const r = mgr.sendPatrol(p.shipId, p.nodeId, parseInt(p.hours, 10) || 24, nowSec);
    return r.ok ? { ok: true, message: '巡逻出发。' } : { ok: false, message: r.reason };
  },

  // —— 船员 ——
  'crew-recruit': function (mgr, p, nowSec) {
    const check = mgr.crew.canRecruit(nowSec);
    if (!check.ok) return { ok: false, message: check.reason };
    const candidates = mgr.crew.generateCandidates(3);
    return {
      ok: true, message: '候选人已生成，请选择一人雇佣。',
      data: { candidates: candidates.map(function (c) { return c.summary(); }) },
    };
  },
  'crew-hire': function (mgr, p, nowSec) {
    // params: {candidate} —— 候选人数据（由 crew-recruit 返回）
    const c = new DSCrewMember(p.candidate || {});
    const r = mgr.crew.hire(c, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '招募了 ' + c.name + '（' + CREW_ROLES[c.role].name + '）。' }
      : { ok: false, message: r.reason };
  },
  'crew-dismiss': function (mgr, p, nowSec) {
    const r = mgr.crew.dismiss(p.crewId, nowSec);
    return r.ok ? { ok: true, message: r.crew.name + ' 已离队。' } : { ok: false, message: r.reason };
  },
  'crew-train': function (mgr, p, nowSec) {
    const r = mgr.crew.startTraining(p.crewId, p.courseId, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '训练开始，预计 ' + dsv3FmtTime(r.endsAt - nowSec) + ' 后完成。' }
      : { ok: false, message: r.reason };
  },
  'crew-assign-station': function (mgr, p) {
    const r = mgr.assignStationCrew(p.crewId);
    return r.ok ? { ok: true, message: '已派遣至轨道站。' } : { ok: false, message: r.reason };
  },
  'crew-assign-moon': function (mgr, p) {
    const r = mgr.assignMoonCrew(p.crewId);
    return r.ok ? { ok: true, message: '已派遣至月球基地。' } : { ok: false, message: r.reason };
  },
  'crew-unassign': function (mgr, p) {
    const r = mgr.crew.unassign(p.crewId);
    return r.ok ? { ok: true, message: '已召回待命。' } : { ok: false, message: r.reason };
  },

  // —— 远征 ——
  'exp-start': function (mgr, p, nowSec) {
    // params: {expId, shipId} —— shipId 为空时自动选第一艘符合要求的停靠飞船
    const def = EXPEDITION_MAP[p.expId];
    if (!def) return { ok: false, message: '未知远征任务。' };
    let ship = p.shipId ? mgr.fleet.get(p.shipId) : null;
    if (!ship) {
      ship = mgr.fleet.dockedShips().find(function (s) { return s.type === def.requires.shipType; });
    }
    if (!ship) return { ok: false, message: '没有可用的' + SHIP_TYPES[def.requires.shipType].name + '。' };
    const r = mgr.launchExpedition(p.expId, ship.id, nowSec);
    return r.ok ? { ok: true, message: '远征出发：' + def.name + '（' + ship.name + '）。' }
      : { ok: false, message: r.reason };
  },
  'exp-abort': function (mgr, p, nowSec) {
    const exp = mgr.expeditions.get(p.exp);
    if (!exp) return { ok: false, message: '找不到该远征。' };
    const ship = mgr.fleet.get(exp.shipId);
    const r = mgr.expeditions.abort(p.exp, nowSec);
    if (ship && ship.status === SHIP_STATUS.EXPEDITION) {
      ship.status = SHIP_STATUS.DOCKED;
      ship.location = 'mars-orbit';
      ship.destination = null;
      ship.mission = null;
      mgr.fleet.releaseCrew(ship, mgr.crew, nowSec);
    }
    return r.ok ? { ok: true, message: '远征已中止，飞船返航。' } : { ok: false, message: r.reason };
  },

  // —— 遗迹 ——
  'ruin-excavate': function (mgr, p, nowSec) {
    const site = mgr.ruins.get(p.ruin);
    if (!site) return { ok: false, message: '未知遗迹。' };
    let ship = mgr.fleet.dockedShips().find(function (s) { return s.type === 'explorer'; });
    if (!ship) return { ok: false, message: '需要一艘停靠的探索船。' };
    const r = mgr.launchExcavation(p.ruin, ship.id, nowSec);
    return r.ok ? { ok: true, message: '发掘队出发：' + site.def().name + '。' }
      : { ok: false, message: r.reason };
  },
  'ruin-stargate': function (mgr, p, nowSec) {
    const r = mgr.ruins.buildStargate(mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '星门信标建成！深空航行全面提速。' }
      : { ok: false, message: r.reason };
  },

  // —— 地图 ——
  'map-select': function (mgr, p) {
    mgr.map.selectedNode = p.node;
    const detail = mgr.map.nodeDetail(p.node, {
      moon: mgr.moon, station: mgr.station, belt: mgr.belt,
      ruins: mgr.ruins, fleet: mgr.fleet,
    });
    return { ok: true, message: '已选中节点。', data: { detail: detail } };
  },

  // —— 科技 ——
  'tech-research': function (mgr, p, nowSec) {
    const r = mgr.tech.startResearch(p.tech, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: DS_TECH_MAP[p.tech].name + ' 开始研究，预计 ' + dsv3FmtTime(r.endsAt - nowSec) + ' 后完成。' }
      : { ok: false, message: r.reason };
  },

  // —— 市场 / 合同 ——
  'exchange-buy': function (mgr, p, nowSec) {
    const r = mgr.exchange.buy(p.res, parseInt(p.amount, 10) || 1, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '买入 ' + r.amount + ' ' + DS_RESOURCES[p.res].name + '，花费 ' + r.cost + ' 科技点。' }
      : { ok: false, message: r.reason };
  },
  'exchange-sell': function (mgr, p, nowSec) {
    const r = mgr.exchange.sell(p.res, parseInt(p.amount, 10) || 1, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '卖出 ' + r.amount + ' ' + DS_RESOURCES[p.res].name + '，获得 ' + r.gain + ' 科技点。' }
      : { ok: false, message: r.reason };
  },
  'contract-complete': function (mgr, p, nowSec) {
    const r = mgr.contracts.complete(p.contract, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '合同完成，奖励已发放。' } : { ok: false, message: r.reason };
  },

  // —— 资源互通 ——
  'import-from-game': function (mgr, p, nowSec, game) {
    const r = mgr.importFromGame(game, p.res, parseInt(p.amount, 10) || 0);
    return r.ok ? { ok: true, message: '转入 ' + r.amount + ' ' + DS_RESOURCES[p.res].name + '。' }
      : { ok: false, message: r.reason };
  },
  'export-to-game': function (mgr, p, nowSec, game) {
    const r = mgr.exportToGame(game, p.res, parseInt(p.amount, 10) || 0);
    return r.ok ? { ok: true, message: '转出 ' + r.amount + ' ' + DS_RESOURCES[p.res].name + '。' }
      : { ok: false, message: r.reason };
  },
};

// ================= 自动运营 =================
// 玩家可开启的自动化策略（默认全关）：自动采矿、自动补给、
// 自动招募、自动维修。策略每小时评估一次，只做「明显划算」的事，
// 绝不透支账本（保留安全库存）。
class DSAutoOps {
  constructor() {
    this.autoMining = false;     // 自动派闲置采矿船去已认领小行星
    this.autoMoonSupply = false; // 月球生命维持 <40 时自动派补给
    this.autoRepair = false;     // 船体 <50% 的停靠飞船自动维修
    this.autoRecruit = false;    // 船员 <10 人时自动招募
    this.reserveSteel = 200;     // 安全库存：低于此值不自动花钱
    this.lastRunAt = 0;
    this.actionsLog = [];
  }
  // 每小时由 manager 调用（manager.update 内接管时传入 mgr）
  run(mgr, nowSec) {
    if (nowSec - this.lastRunAt < 3600) return [];
    this.lastRunAt = nowSec;
    const did = [];
    if (this.autoRepair) {
      for (let i = 0; i < mgr.fleet.ships.length; i++) {
        const s = mgr.fleet.ships[i];
        if ((s.status === SHIP_STATUS.DOCKED || s.status === SHIP_STATUS.DAMAGED) &&
          s.hull < s.maxHull() * 0.5 && (mgr.stock.steel || 0) > this.reserveSteel) {
          const r = mgr.fleet.startRepair(s.id, mgr.stock, nowSec, mgr.station.repairDiscount());
          if (r.ok) {
            did.push('自动维修 ' + s.name);
            this._log(nowSec, '自动维修 ' + s.name);
          }
        }
      }
    }
    if (this.autoMining) {
      const idleMiners = mgr.fleet.dockedShips().filter(function (s) { return s.type === 'miner'; });
      for (let i = 0; i < idleMiners.length; i++) {
        const ship = idleMiners[i];
        const claim = mgr.belt.activeClaims().find(function (c) { return c.shipId === ship.id; });
        if (!claim) continue;
        const asteroid = mgr.belt.get(claim.asteroidId);
        if (!asteroid || asteroid.depleted()) continue;
        if (!ship.isCrewed(mgr.crew)) continue;
        if (ship.fuel < ship.fuelFor(asteroid.au) * 2 + 20) continue;
        const r = mgr.sendMiningShip(ship.id, asteroid.id, 24, nowSec);
        if (r.ok) {
          did.push('自动采矿 ' + ship.name + ' → ' + asteroid.name);
          this._log(nowSec, '自动采矿 ' + ship.name + ' → ' + asteroid.name);
        }
      }
    }
    if (this.autoMoonSupply && mgr.moon.founded) {
      const ls = mgr.moon.lifeSupport;
      if (ls.water < 40 || ls.oxygen < 40) {
        const ship = mgr.fleet.dockedShips().find(function (s) { return s.type === 'transport'; });
        if (ship && ship.isCrewed(mgr.crew)) {
          const cargo = {};
          if ((mgr.stock.water || 0) > 50) cargo.water = 100;
          if ((mgr.stock.food || 0) > 50) cargo.food = 100;
          if ((mgr.stock.oxygen || 0) > 50) cargo.oxygen = 100;
          if (Object.keys(cargo).length) {
            const r = mgr.sendMoonSupply(ship.id, cargo, nowSec);
            if (r.ok) {
              did.push('自动补给月球 ' + ship.name);
              this._log(nowSec, '自动补给月球 ' + ship.name);
            }
          }
        }
      }
    }
    if (this.autoRecruit) {
      if (mgr.crew.count() < 10 && (mgr.stock.steel || 0) > this.reserveSteel) {
        const check = mgr.crew.canRecruit(nowSec);
        if (check.ok) {
          const cands = mgr.crew.generateCandidates(1);
          const r = mgr.crew.hire(cands[0], mgr.stock, nowSec);
          if (r.ok) {
            did.push('自动招募 ' + cands[0].name);
            this._log(nowSec, '自动招募 ' + cands[0].name);
          }
        }
      }
    }
    return did;
  }
  _log(t, text) {
    this.actionsLog.push({ t: Math.round(t), text: text });
    if (this.actionsLog.length > 100) this.actionsLog.splice(0, this.actionsLog.length - 100);
  }
  save() {
    return {
      autoMining: this.autoMining, autoMoonSupply: this.autoMoonSupply,
      autoRepair: this.autoRepair, autoRecruit: this.autoRecruit,
      reserveSteel: this.reserveSteel, lastRunAt: this.lastRunAt,
      actionsLog: this.actionsLog,
    };
  }
  load(data) {
    if (!data) return;
    this.autoMining = !!data.autoMining;
    this.autoMoonSupply = !!data.autoMoonSupply;
    this.autoRepair = !!data.autoRepair;
    this.autoRecruit = !!data.autoRecruit;
    this.reserveSteel = data.reserveSteel || 200;
    this.lastRunAt = data.lastRunAt || 0;
    this.actionsLog = data.actionsLog || [];
  }
}

// ================= 开局剧本 =================
// 5 个开局剧本：不同的初始资源/飞船/船员配置，供新存档选择。
// （数值即难度：富裕开局资源多、船现成；白手起家只有启动物资。）
const DS_SCENARIOS = [
  {
    id: 'balanced',
    name: '均衡开局',
    desc: '标准的深空计划开局：启动物资 + 1 艘运输船 + 6 名船员。',
    stock: { steel: 500, rare: 150, tech: 50, water: 200, food: 150, fuel: 300, oxygen: 200 },
    ships: [{ type: 'transport' }],
    crew: [
      { role: 'pilot', level: 2 }, { role: 'engineer', level: 2 },
      { role: 'scientist', level: 1 }, { role: 'medic', level: 1 },
      { role: 'miner', level: 2 }, { role: 'miner', level: 1 },
    ],
    stationFounded: false,
  },
  {
    id: 'rich',
    name: '财团赞助',
    desc: '火星财团注资：启动物资翻倍，轨道站已建成，1 艘采矿船待命。',
    stock: { steel: 1500, rare: 500, tech: 200, titanium: 100, water: 300, food: 300, fuel: 500, oxygen: 300 },
    ships: [{ type: 'miner' }, { type: 'transport' }],
    crew: [
      { role: 'pilot', level: 3 }, { role: 'pilot', level: 2 },
      { role: 'engineer', level: 3 }, { role: 'engineer', level: 2 },
      { role: 'scientist', level: 2 }, { role: 'medic', level: 2 },
      { role: 'miner', level: 3 }, { role: 'miner', level: 2 },
    ],
    stationFounded: true,
    stationModules: [
      { moduleId: 'solar', level: 2 }, { moduleId: 'solar', level: 1 },
      { moduleId: 'dock', level: 1 }, { moduleId: 'habitat', level: 1 },
      { moduleId: 'lab', level: 1 },
    ],
  },
  {
    id: 'hard',
    name: '白手起家',
    desc: '只有最低启动物资，没有飞船没有船员，一切从零开始。',
    stock: { steel: 200, rare: 60, tech: 0, water: 120, food: 100, fuel: 150, oxygen: 120 },
    ships: [],
    crew: [],
    stationFounded: false,
  },
  {
    id: 'explorer',
    name: '探索先锋',
    desc: '以探索船开局：1 艘探索船 + 4 名高技能船员，直奔遗迹与远征。',
    stock: { steel: 600, rare: 250, tech: 120, water: 150, food: 120, fuel: 400, oxygen: 150 },
    ships: [{ type: 'explorer' }],
    crew: [
      { role: 'pilot', level: 4 }, { role: 'scientist', level: 4 },
      { role: 'scientist', level: 3 }, { role: 'engineer', level: 3 },
      { role: 'medic', level: 2 },
    ],
    stationFounded: false,
  },
  {
    id: 'industrial',
    name: '工业巨头',
    desc: '采矿开局：2 艘采矿船 + 8 名矿工/工程师，轨道站已建成并配精炼厂。',
    stock: { steel: 1200, rare: 400, tech: 100, titanium: 80, water: 250, food: 200, fuel: 400, oxygen: 200 },
    ships: [{ type: 'miner' }, { type: 'miner' }, { type: 'transport' }],
    crew: [
      { role: 'miner', level: 3 }, { role: 'miner', level: 3 },
      { role: 'miner', level: 2 }, { role: 'miner', level: 2 },
      { role: 'engineer', level: 3 }, { role: 'engineer', level: 2 },
      { role: 'pilot', level: 3 }, { role: 'pilot', level: 2 },
    ],
    stationFounded: true,
    stationModules: [
      { moduleId: 'solar', level: 2 }, { moduleId: 'dock', level: 2 },
      { moduleId: 'refinery', level: 1 }, { moduleId: 'habitat', level: 1 },
      { moduleId: 'tank', level: 1 },
    ],
  },
];

// 应用开局剧本到一个全新的 DeepSpaceV3 实例
function dsApplyScenario(mgr, scenarioId, nowSec) {
  const sc = DS_SCENARIOS.find(function (s) { return s.id === scenarioId; });
  if (!sc) return { ok: false, reason: '未知剧本' };
  nowSec = nowSec || 0;
  // 库存
  for (const k in sc.stock) mgr.stock[k] = sc.stock[k];
  // 飞船（直接交付，不扣费）
  for (let i = 0; i < (sc.ships || []).length; i++) {
    const ship = new DSShip({ type: sc.ships[i].type, status: SHIP_STATUS.DOCKED });
    ship.hull = ship.maxHull();
    ship.fuel = ship.maxFuel();
    mgr.fleet.ships.push(ship);
    mgr.fleet.totalBuilt++;
  }
  // 船员（直接入册）
  for (let i = 0; i < (sc.crew || []).length; i++) {
    const c = new DSCrewMember({ role: sc.crew[i].role, level: sc.crew[i].level });
    c.hiredAt = nowSec;
    mgr.crew.roster.push(c);
    mgr.crew.totalHired++;
  }
  // 轨道站
  if (sc.stationFounded) {
    mgr._stationFounded = true;
    mgr.station.foundedAt = nowSec;
    const mods = sc.stationModules || [];
    for (let i = 0; i < mods.length; i++) {
      // 直接布放模块（不扣费、不占槽位检查之外的逻辑）
      let ring = 1, slot = 0, found = false;
      for (let r = 1; r <= mgr.station.rings && !found; r++) {
        for (let s = 0; s < DS_TUNE_V3.stationSlotsPerRing; s++) {
          if (!mgr.station.moduleAt(r, s)) { ring = r; slot = s; found = true; break; }
        }
      }
      if (!found) break;
      mgr.station.slots.push({
        ring: ring, slot: slot, moduleId: mods[i].moduleId,
        level: mods[i].level || 1, hp: 100 * (mods[i].level || 1),
        maxHp: 100 * (mods[i].level || 1), builtAt: nowSec,
      });
    }
  }
  mgr.belt.generate();
  mgr._log(nowSec, '开局剧本：' + sc.name, 'info');
  return { ok: true, scenario: sc };
}

// ================= v1.4 存档迁移 =================
// 把 deep_space.js v1.4 的存档（DeepSpaceManager.save() 的结构）
// 迁移进 v3：飞船、遗迹发现状态、深空日志尽量保留，
// 无法对应的字段按 v3 默认值处理，并返回迁移报告。
function dsMigrateFromV1(v1data, nowSec) {
  const report = { migrated: false, notes: [], warnings: [] };
  if (!v1data || typeof v1data !== 'object') {
    report.warnings.push('v1.4 存档为空或格式错误，未迁移。');
    return { mgr: null, report: report };
  }
  const mgr = new DeepSpaceV3('migrated-' + (nowSec || 0));
  nowSec = nowSec || 0;
  // 1. 资源：v1.4 的深空库存键名与 v3 基本一致（steel/rare/tech/helium3 等）
  if (v1data.stock) {
    for (const k in v1data.stock) {
      if (DS_RESOURCES[k]) mgr.stock[k] = Math.max(0, v1data.stock[k] || 0);
    }
    report.notes.push('迁移深空库存 ' + Object.keys(v1data.stock).length + ' 项。');
  }
  // 2. 飞船：v1.4 的 ships 是 {type, level, status, hull, fuel, cargo}
  if (Array.isArray(v1data.ships)) {
    for (let i = 0; i < v1data.ships.length; i++) {
      const s = v1data.ships[i];
      if (!SHIP_TYPES[s.type]) {
        report.warnings.push('跳过未知船型：' + s.type);
        continue;
      }
      const ship = new DSShip({
        type: s.type, name: s.name,
        level: dsv3Clamp(s.level || 1, 1, 5),
        status: SHIP_STATUS.DOCKED,
        hull: s.hull, fuel: s.fuel, cargo: s.cargo || {},
        builtAt: nowSec,
      });
      ship.hull = Math.min(ship.hull, ship.maxHull());
      mgr.fleet.ships.push(ship);
      mgr.fleet.totalBuilt++;
    }
    report.notes.push('迁移飞船 ' + mgr.fleet.ships.length + ' 艘。');
  }
  // 3. 遗迹：v1.4 的 ruins 是 {alpha:{found, stage}, ...}
  if (v1data.ruins) {
    const map = { alpha: 'alpha', beta: 'beta', gamma: 'gamma' };
    for (const k in map) {
      const r = v1data.ruins[k];
      if (!r) continue;
      const site = mgr.ruins.get(map[k]);
      if (r.found || r.discovered) {
        site.status = 'discovered';
        site.clues = 2;
        site.discoveredAt = nowSec;
      }
      if (r.stage) site.stage = Math.min(r.stage, 3);
      if (r.completed) {
        site.status = 'completed';
        site.stage = 3;
        site.completedAt = nowSec;
        const comp = site.completionRewards();
        for (const bk in comp.unlock.buffs) {
          mgr.ruins.unlockedBuffs[bk] = (mgr.ruins.unlockedBuffs[bk] || 1) * comp.unlock.buffs[bk];
        }
        if (comp.unlock.tech) mgr.ruins.unlockedTechs.push(comp.unlock.tech);
      }
    }
    report.notes.push('迁移遗迹状态。');
  }
  // 4. 统计
  if (v1data.stats) {
    mgr.stats.expeditionsDone = v1data.stats.expeditionsDone || 0;
    mgr.stats.he3Mined = v1data.stats.he3Mined || 0;
    mgr.stats.oreMined = v1data.stats.oreMined || 0;
  }
  // 5. 日志
  if (Array.isArray(v1data.log)) {
    for (let i = 0; i < v1data.log.length; i++) {
      mgr.log.push({ t: v1data.log[i].t || nowSec, text: '[v1.4] ' + (v1data.log[i].text || ''), kind: 'info' });
    }
  }
  mgr.belt.generate();
  mgr._stationFounded = true;
  mgr.station.foundedAt = nowSec;
  mgr.unlocked = true;
  report.migrated = true;
  report.notes.push('迁移完成：v1.4 轨道站视为已建立（v3 轨道站结构不同，需重新配置模块）。');
  report.warnings.push('v1.4 的轨道站模块无法一一对应，已按默认配置处理；请在轨道站面板重新建造模块。');
  return { mgr: mgr, report: report };
}

// ================= 平衡报告 =================
// 生成一份数值平衡报告（给策划/自测用）：
// 每个生产链的投入产出、回本时间、关键瓶颈。
function dsBalanceReport(mgr) {
  const lines = [];
  lines.push('=== 深空 v3 平衡报告 ===');
  // 1. 飞船回本：造价价值 vs 每次采矿返航期望收益
  for (let i = 0; i < SHIP_TYPE_KEYS.length; i++) {
    const def = SHIP_TYPES[SHIP_TYPE_KEYS[i]];
    let costValue = 0;
    for (const k in def.cost) costValue += def.cost[k] * (DS_RESOURCES[k] ? DS_RESOURCES[k].value : 0);
    lines.push(def.name + '：造价价值 ' + costValue + '，载荷 ' + def.cargo + ' 吨，速度 ' + def.speed + ' AU/时');
  }
  // 2. 采矿期望：M 型小行星，24 小时作业
  const mType = ASTEROID_TYPES.M;
  let mValue = 0;
  for (const k in mType.composition) {
    mValue += mType.composition[k] * (DS_RESOURCES[k] ? DS_RESOURCES[k].value : 0);
  }
  lines.push('M 型小行星每吨矿石期望价值 ' + dsv3Round(mValue * 1.4, 2) + '（富集 ×1.4）');
  lines.push('采矿船 24h 作业期望产量 ' + (12 * 24) + ' 吨，期望价值约 ' +
    Math.round(12 * 24 * mValue * 1.4) + '（未计载荷截断与事故）');
  // 3. 月球氦-3：1 级矿场每小时 2 氦-3 = 价值 30/时
  lines.push('月球氦-3 矿场 Lv1：2/时 × 价值 15 = 30 价值/时；Lv5：20/时 = 300 价值/时');
  // 4. 轨道科研舱：Lv3 每小时 9 科技点 = 价值 90/时
  lines.push('轨道科研舱 Lv3：9 科技点/时 = 价值 90/时');
  // 5. 远征期望：按难度列出奖励价值与风险
  for (let i = 0; i < EXPEDITION_DEFS.length; i++) {
    const d = EXPEDITION_DEFS[i];
    let v = 0;
    for (const k in d.rewards) v += d.rewards[k] * (DS_RESOURCES[k] ? DS_RESOURCES[k].value : 0);
    lines.push('远征「' + d.name + '」难度 ' + d.difficulty + '：奖励价值 ' + v +
      '，风险 ' + Math.round(d.risk * 100) + '%，时长 ' + d.durationHours + 'h');
  }
  // 6. 当前存档快照
  if (mgr) {
    const s = mgr.summary();
    lines.push('--- 当前存档 ---');
    lines.push('游戏时间 ' + s.gameTimeHours + 'h · 飞船 ' + s.fleet.total + ' · 船员 ' + s.crew.total +
      ' · 远征成功 ' + s.expeditions.totalSuccess + '/' + s.expeditions.totalStarted);
    lines.push('氦-3 累计 ' + Math.round(mgr.stats.he3Mined) + ' · 矿石累计 ' + Math.round(mgr.stats.oreMined) + ' 吨');
  }
  return lines.join('\n');
}


// ================= 燃料补给站网络 =================
// 在已发现节点建造燃料补给站：飞船在该节点可加油（从站点库存），
// 站点库存靠运输船补给或就地生产（水冰裂解）。
// 补给站让长途航行不必每次回火星，是深空扩张的关键基建。
const DS_DEPOT_DEFS = {
  small: {
    id: 'small',
    name: '小型补给站',
    desc: '简易燃料库，储油 500，可为路过飞船加油。',
    cost: { steel: 200, rare: 50, fuel: 100 },
    capacity: 500,
    transferRate: 50,   // 每小时可转移 50 燃料
    buildHours: 12,
  },
  medium: {
    id: 'medium',
    name: '中型补给站',
    desc: '带水冰裂解装置的补给站，储油 1500，可自产少量燃料。',
    cost: { steel: 500, rare: 150, tech: 40, fuel: 200 },
    capacity: 1500,
    transferRate: 120,
    buildHours: 24,
    production: { fuel: 2 },  // 每小时自产 2 燃料（裂解水冰，需水冰库存）
    waterPerFuel: 2,
  },
  large: {
    id: 'large',
    name: '大型燃料港',
    desc: '深空燃料枢纽，储油 4000，自产燃料，带维修坞。',
    cost: { steel: 1200, rare: 400, tech: 120, titanium: 100, fuel: 300 },
    capacity: 4000,
    transferRate: 300,
    buildHours: 48,
    production: { fuel: 6 },
    waterPerFuel: 2,
    repairRate: 10,  // 每小时修 10 船体
  },
};

class DSDepot {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || ('depot-' + Math.floor(Math.random() * 1e9).toString(36));
    this.nodeId = opts.nodeId || 'belt-middle';
    this.size = opts.size || 'small';
    this.fuel = opts.fuel || 0;
    this.water = opts.water || 0;
    this.builtAt = opts.builtAt || 0;
    this.totalFueled = opts.totalFueled || 0;
    this.totalRepaired = opts.totalRepaired || 0;
  }
  def() { return DS_DEPOT_DEFS[this.size]; }
  capacity() { return this.def().capacity; }
  fuelRatio() { return this.capacity() > 0 ? this.fuel / this.capacity() : 0; }
  // 飞船加油：按站点库存与转移速率
  refuelShip(ship, hours) {
    const rate = this.def().transferRate * (hours || 1);
    const need = ship.maxFuel() - ship.fuel;
    const take = Math.min(need, rate, this.fuel);
    if (take <= 0) return { ok: false, reason: '补给站无油或油箱已满' };
    this.fuel -= take;
    ship.fuel += take;
    this.totalFueled += take;
    return { ok: true, fueled: Math.round(take) };
  }
  // 运输船向补给站卸油/卸水
  receiveCargo(cargo) {
    let fuelIn = 0, waterIn = 0;
    if (cargo.fuel) {
      fuelIn = Math.min(cargo.fuel, this.capacity() - this.fuel);
      this.fuel += fuelIn;
    }
    if (cargo.water) {
      waterIn = cargo.water;
      this.water += waterIn;
    }
    return { fuelIn: Math.round(fuelIn), waterIn: Math.round(waterIn) };
  }
  // 每小时：自产燃料（消耗水冰）
  hourlyTick() {
    const prod = this.def().production;
    if (!prod || !prod.fuel) return { produced: 0 };
    const waterNeed = prod.fuel * (this.def().waterPerFuel || 2);
    if (this.water < waterNeed) return { produced: 0, reason: '水冰不足' };
    if (this.fuel >= this.capacity()) return { produced: 0, reason: '油库已满' };
    const canMake = Math.min(prod.fuel, (this.capacity() - this.fuel));
    this.water -= waterNeed;
    this.fuel += canMake;
    return { produced: canMake };
  }
  // 维修（大型站）
  repairShip(ship, hours) {
    const rate = this.def().repairRate || 0;
    if (rate <= 0) return { ok: false, reason: '该补给站没有维修能力' };
    const missing = ship.maxHull() - ship.hull;
    if (missing <= 0) return { ok: false, reason: '船体完好' };
    const fixed = Math.min(missing, rate * (hours || 1));
    ship.hull += fixed;
    this.totalRepaired += fixed;
    if (ship.status === SHIP_STATUS.DAMAGED && ship.hull >= ship.maxHull() * 0.5) {
      ship.status = SHIP_STATUS.DOCKED;
    }
    return { ok: true, repaired: Math.round(fixed) };
  }
  summary() {
    return {
      id: this.id, nodeId: this.nodeId, size: this.size,
      sizeName: this.def().name, fuel: Math.round(this.fuel),
      capacity: this.capacity(), fuelRatio: dsv3Round(this.fuelRatio(), 2),
      water: Math.round(this.water),
      totalFueled: Math.round(this.totalFueled),
      totalRepaired: Math.round(this.totalRepaired),
    };
  }
  save() {
    return {
      id: this.id, nodeId: this.nodeId, size: this.size,
      fuel: this.fuel, water: this.water, builtAt: this.builtAt,
      totalFueled: this.totalFueled, totalRepaired: this.totalRepaired,
    };
  }
  static load(data) { return new DSDepot(data || {}); }
}

class DSDepotNetwork {
  constructor() {
    this.depots = [];   // DSDepot[]
  }
  get(nodeId) {
    for (let i = 0; i < this.depots.length; i++) {
      if (this.depots[i].nodeId === nodeId) return this.depots[i];
    }
    return null;
  }
  getById(id) {
    for (let i = 0; i < this.depots.length; i++) {
      if (this.depots[i].id === id) return this.depots[i];
    }
    return null;
  }
  canBuild(nodeId, size, stock, isDiscovered) {
    const def = DS_DEPOT_DEFS[size];
    if (!def) return { ok: false, reason: '未知补给站规格' };
    if (!isDiscovered) return { ok: false, reason: '节点尚未发现' };
    if (this.get(nodeId)) return { ok: false, reason: '该节点已有补给站' };
    for (const k in def.cost) {
      if ((stock[k] || 0) < def.cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + def.cost[k] };
      }
    }
    return { ok: true, def: def };
  }
  build(nodeId, size, stock, nowSec, isDiscovered) {
    const check = this.canBuild(nodeId, size, stock, isDiscovered);
    if (!check.ok) return check;
    for (const k in check.def.cost) stock[k] -= check.def.cost[k];
    const depot = new DSDepot({
      nodeId: nodeId, size: size,
      fuel: check.def.cost.fuel || 0, builtAt: nowSec,
    });
    this.depots.push(depot);
    return { ok: true, depot: depot };
  }
  upgrade(depotId, stock, nowSec) {
    const depot = this.getById(depotId);
    if (!depot) return { ok: false, reason: '找不到补给站' };
    const order = ['small', 'medium', 'large'];
    const idx = order.indexOf(depot.size);
    if (idx < 0 || idx >= order.length - 1) return { ok: false, reason: '已是最大规格' };
    const next = DS_DEPOT_DEFS[order[idx + 1]];
    for (const k in next.cost) {
      if ((stock[k] || 0) < next.cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + next.cost[k] };
      }
    }
    for (const k in next.cost) stock[k] -= next.cost[k];
    depot.size = order[idx + 1];
    return { ok: true, depot: depot };
  }
  hourlyTick() {
    const out = [];
    for (let i = 0; i < this.depots.length; i++) {
      out.push({ depot: this.depots[i].id, res: this.depots[i].hourlyTick() });
    }
    return out;
  }
  summary() {
    return {
      total: this.depots.length,
      depots: this.depots.map(function (d) { return d.summary(); }),
    };
  }
  save() {
    return { depots: this.depots.map(function (d) { return d.save(); }) };
  }
  load(data) {
    if (!data) return;
    this.depots = (data.depots || []).map(function (d) { return DSDepot.load(d); });
  }
}

// ================= 多段航行计划 =================
// 长途航行可经中途节点分段：每段单独算燃料与时间，
// 中途可在补给站加油。航行计划 = 航段列表，飞船按段推进。
class DSFlightPlan {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || ('plan-' + Math.floor(Math.random() * 1e9).toString(36));
    this.shipId = opts.shipId || null;
    this.legs = opts.legs || [];   // [{from, to, distanceAU, fuelNeed, timeSec, status}]
    this.legIndex = opts.legIndex || 0;
    this.status = opts.status || 'planned'; // planned / flying / done / aborted
    this.createdAt = opts.createdAt || 0;
    this.mission = opts.mission || null;
  }
  // 从节点序列生成航段（用地图算距离）
  static fromRoute(map, ship, nodeIds, mission) {
    const legs = [];
    for (let i = 0; i < nodeIds.length - 1; i++) {
      const from = nodeIds[i], to = nodeIds[i + 1];
      const d = map.distance(from, to);
      if (d == null) return { ok: false, reason: '未知节点：' + from + ' 或 ' + to };
      legs.push({
        from: from, to: to, distanceAU: d,
        fuelNeed: ship.fuelFor(d),
        timeSec: map.travelTimeSec(from, to, ship, 1) || 0,
        status: 'pending',
      });
    }
    return {
      ok: true,
      plan: new DSFlightPlan({ shipId: ship.id, legs: legs, mission: mission || null }),
    };
  }
  totalDistanceAU() {
    let s = 0;
    for (let i = 0; i < this.legs.length; i++) s += this.legs[i].distanceAU;
    return dsv3Round(s, 2);
  }
  totalFuelNeed() {
    let s = 0;
    for (let i = 0; i < this.legs.length; i++) s += this.legs[i].fuelNeed;
    return s;
  }
  totalTimeSec() {
    let s = 0;
    for (let i = 0; i < this.legs.length; i++) s += this.legs[i].timeSec;
    return s;
  }
  currentLeg() { return this.legs[this.legIndex] || null; }
  // 检查全程燃料：船油 + 沿途补给站可加油量
  checkFuel(ship, depots) {
    let fuel = ship.fuel;
    const shortfalls = [];
    for (let i = 0; i < this.legs.length; i++) {
      const leg = this.legs[i];
      if (fuel < leg.fuelNeed) {
        // 看出发节点有没有补给站
        const depot = depots ? depots.get(leg.from) : null;
        if (depot && depot.fuel > 0) {
          fuel += Math.min(depot.fuel, ship.maxFuel() - fuel);
        }
      }
      if (fuel < leg.fuelNeed) {
        shortfalls.push('第 ' + (i + 1) + ' 段（' + leg.from + '→' + leg.to + '）缺油 ' +
          Math.ceil(leg.fuelNeed - fuel));
        break;
      }
      fuel -= leg.fuelNeed;
    }
    return shortfalls.length ? { ok: false, shortfalls: shortfalls } : { ok: true };
  }
  advanceLeg() {
    const leg = this.currentLeg();
    if (!leg) return false;
    leg.status = 'done';
    this.legIndex++;
    if (this.legIndex >= this.legs.length) this.status = 'done';
    return true;
  }
  abort() {
    this.status = 'aborted';
    const leg = this.currentLeg();
    if (leg) leg.status = 'aborted';
  }
  summary() {
    return {
      id: this.id, shipId: this.shipId, status: this.status,
      legIndex: this.legIndex, legsTotal: this.legs.length,
      totalDistanceAU: this.totalDistanceAU(),
      totalFuelNeed: this.totalFuelNeed(),
      totalTimeSec: this.totalTimeSec(),
      legs: this.legs.map(function (l) {
        return { from: l.from, to: l.to, distanceAU: l.distanceAU, fuelNeed: l.fuelNeed, status: l.status };
      }),
    };
  }
  save() {
    return {
      id: this.id, shipId: this.shipId, legs: this.legs,
      legIndex: this.legIndex, status: this.status,
      createdAt: this.createdAt, mission: this.mission,
    };
  }
  static load(data) { return new DSFlightPlan(data || {}); }
}

// ================= 遗迹碎片研究 =================
// 遗迹碎片（artifact）不是装饰：投入实验室研究，
// 每完成一个项目获得永久增益或解锁。研究需要科学家 + 时间。
const DS_ARTIFACT_PROJECTS = [
  {
    id: 'art-power',
    name: '异星能源解析',
    desc: '解析遗迹碎片中的能源结构，全站电力 +10%。',
    cost: { artifact: 2, tech: 50 }, hours: 48,
    requires: { scientists: 1, minSkill: 40 },
    buffs: { powerMul: 1.1 },
  },
  {
    id: 'art-hull',
    name: '异星合金仿制',
    desc: '仿制碎片中的合金，全部飞船船体 +15%。',
    cost: { artifact: 3, tech: 80 }, hours: 72,
    requires: { scientists: 1, minSkill: 50 },
    buffs: { hullMul: 1.15 },
  },
  {
    id: 'art-drive',
    name: '异星推进原理',
    desc: '研究碎片中的推进结构，全部航行时间 -10%。',
    cost: { artifact: 4, tech: 120 }, hours: 96,
    requires: { scientists: 2, minSkill: 60 },
    buffs: { travelTimeMul: 0.9 },
  },
  {
    id: 'art-mining',
    name: '异星采矿技术',
    desc: '碎片中的微型采矿单元，采矿产量 +20%。',
    cost: { artifact: 3, tech: 100 }, hours: 72,
    requires: { scientists: 1, minSkill: 55 },
    buffs: { miningMul: 1.2 },
  },
  {
    id: 'art-bio',
    name: '异星生态样本',
    desc: '碎片中保存的生态样本，船员士气恢复 +30%，食物产量 +10%。',
    cost: { artifact: 2, tech: 60 }, hours: 48,
    requires: { scientists: 1, minSkill: 45 },
    buffs: { prodMul: 1.05 },
  },
  {
    id: 'art-nav',
    name: '异星星图',
    desc: '破译碎片中的星图，勘测发现率 +50%，远征奖励 +10%。',
    cost: { artifact: 5, tech: 150 }, hours: 120,
    requires: { scientists: 2, minSkill: 65 },
    buffs: { expeditionRewardMul: 1.1 },
  },
];
const DS_ARTIFACT_MAP = {};
for (let i = 0; i < DS_ARTIFACT_PROJECTS.length; i++) {
  DS_ARTIFACT_MAP[DS_ARTIFACT_PROJECTS[i].id] = DS_ARTIFACT_PROJECTS[i];
}

class DSArtifactLab {
  constructor() {
    this.completed = {};    // {projectId: true}
    this.researching = null; // {projectId, crewIds, endsAt}
    this.queue = [];
  }
  isDone(id) { return !!this.completed[id]; }
  buffs() {
    const b = {
      prodMul: 1, powerMul: 1, hullMul: 1, miningMul: 1,
      travelTimeMul: 1, expeditionRewardMul: 1,
    };
    for (const id in this.completed) {
      const def = DS_ARTIFACT_MAP[id];
      if (!def) continue;
      for (const k in def.buffs) b[k] = (b[k] || 1) * def.buffs[k];
    }
    return b;
  }
  canResearch(id, stock, crewMgr) {
    const def = DS_ARTIFACT_MAP[id];
    if (!def) return { ok: false, reason: '未知研究项目' };
    if (this.isDone(id)) return { ok: false, reason: '已完成' };
    if (this.researching && this.researching.projectId === id) return { ok: false, reason: '研究中' };
    for (const k in def.cost) {
      if ((stock[k] || 0) < def.cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + def.cost[k] };
      }
    }
    if (crewMgr) {
      const sci = crewMgr.byRole('scientist').filter(function (c) { return c.isAvailable(); });
      if (sci.length < def.requires.scientists) {
        return { ok: false, reason: '需要 ' + def.requires.scientists + ' 名待命科学家' };
      }
    }
    return { ok: true, def: def };
  }
  startResearch(id, stock, crewMgr, nowSec) {
    const check = this.canResearch(id, stock, crewMgr);
    if (!check.ok) return check;
    for (const k in check.def.cost) stock[k] -= check.def.cost[k];
    const crewIds = [];
    if (crewMgr) {
      const picked = crewMgr.pickCrew('scientist', check.def.requires.scientists, 0);
      for (let i = 0; i < picked.length; i++) {
        crewIds.push(picked[i].id);
        picked[i].status = CREW_STATUS.ASSIGNED;
        picked[i].assignment = { kind: 'artifact-lab', id: id };
      }
    }
    const job = { projectId: id, crewIds: crewIds, endsAt: nowSec + check.def.hours * 3600 };
    if (!this.researching) this.researching = job;
    else this.queue.push(job);
    return { ok: true, endsAt: job.endsAt };
  }
  update(nowSec, crewMgr) {
    const done = [];
    if (this.researching && nowSec >= this.researching.endsAt) {
      this.completed[this.researching.projectId] = true;
      done.push(this.researching.projectId);
      // 释放科学家
      if (crewMgr) {
        for (let i = 0; i < this.researching.crewIds.length; i++) {
          const c = crewMgr.get(this.researching.crewIds[i]);
          if (c && c.status === CREW_STATUS.ASSIGNED) {
            c.status = CREW_STATUS.IDLE;
            c.assignment = null;
            c.gainXp(80);
          }
        }
      }
      this.researching = this.queue.shift() || null;
    }
    return done;
  }
  summary() {
    return {
      completed: Object.keys(this.completed),
      total: DS_ARTIFACT_PROJECTS.length,
      researching: this.researching,
      queue: this.queue.length,
      buffs: this.buffs(),
    };
  }
  save() {
    return { completed: this.completed, researching: this.researching, queue: this.queue };
  }
  load(data) {
    if (!data) return;
    this.completed = data.completed || {};
    this.researching = data.researching || null;
    this.queue = data.queue || [];
  }
}

// ================= 船员勋章与生涯 =================
// 远征/采矿/救援表现积累勋章：勋章给永久小增益（士气/效率），
// 也是船员生涯记录的一部分。
const DS_MEDALS = [
  { id: 'med-first-flight', name: '首飞勋章', desc: '完成第一次远征。', cond: 'missions>=1', effect: { morale: 2 } },
  { id: 'med-veteran', name: '远征老兵', desc: '完成 10 次远征。', cond: 'missions>=10', effect: { morale: 5, efficiency: 0.05 } },
  { id: 'med-rescuer', name: '救援者', desc: '参加 3 次救援类远征并成功。', cond: 'rescues>=3', effect: { morale: 4 } },
  { id: 'med-miner', name: '矿王', desc: '累计参与开采 1000 吨矿石。', cond: 'mined>=1000', effect: { efficiency: 0.08 } },
  { id: 'med-ruin', name: '遗迹探索者', desc: '参加遗迹发掘并成功。', cond: 'ruins>=1', effect: { morale: 5 } },
  { id: 'med-survivor', name: '幸存者', desc: '在事故中生还。', cond: 'survived>=1', effect: { morale: 3 } },
  { id: 'med-ace', name: '王牌驾驶员', desc: '驾驶员岗位技能达到 90。', cond: 'skill90', effect: { efficiency: 0.1 } },
];

// ================= 船员生涯追踪器 =================
// 扫描全名册，按生涯计数授勋；勋章给永久士气/效率加成。
const DSCareerTracker = {
  // 单名船员是否满足某勋章条件
  _condOk: function (medal, c) {
    const cond = medal.cond;
    if (cond === 'skill90') {
      if (c.role !== 'pilot') return false;
      return (c.skills.navigation || 0) >= 90;
    }
    const mm = cond.match(/^(\w+)(>=)(\d+)$/);
    if (!mm) return false;
    const key = mm[1], val = parseInt(mm[3], 10);
    let have = 0;
    if (key === 'missions') have = c.missions;
    else if (key === 'rescues') have = c.rescues;
    else if (key === 'mined') have = c.minedTons;
    else if (key === 'ruins') have = c.ruinsDone;
    else if (key === 'survived') have = c.survivedAccidents;
    else return false;
    return have >= val;
  },
  // 扫描名册，返回新授勋列表
  scanRoster: function (crewMgr, nowSec) {
    const newly = [];
    if (!crewMgr) return newly;
    for (let i = 0; i < crewMgr.roster.length; i++) {
      const c = crewMgr.roster[i];
      for (let j = 0; j < DS_MEDALS.length; j++) {
        const m = DS_MEDALS[j];
        if (c.medals.indexOf(m.id) >= 0) continue;
        if (this._condOk(m, c)) {
          c.medals.push(m.id);
          if (m.effect && m.effect.morale) c.adjustMorale(m.effect.morale);
          newly.push({ crewId: c.id, crewName: c.name, medalId: m.id, medalName: m.name });
        }
      }
    }
    return newly;
  },
  // 远征成功后更新船员生涯计数（救援类/遗迹类单独记）
  recordExpedition: function (crewMgr, crewIds, def, success) {
    if (!crewMgr || !success) return;
    for (let i = 0; i < crewIds.length; i++) {
      const c = crewMgr.get(crewIds[i]);
      if (!c) continue;
      if (def.kind === 'rescue') c.rescues++;
      if (def.ruinUnlock) c.ruinsDone++;
    }
  },
  // 采矿后更新船员开采计数
  recordMining: function (crewMgr, crewIds, tons) {
    if (!crewMgr) return;
    const per = tons / Math.max(1, crewIds.length);
    for (let i = 0; i < crewIds.length; i++) {
      const c = crewMgr.get(crewIds[i]);
      if (c) c.minedTons += per;
    }
  },
  // 事故生还
  recordSurvived: function (crewMgr, crewIds) {
    if (!crewMgr) return;
    for (let i = 0; i < crewIds.length; i++) {
      const c = crewMgr.get(crewIds[i]);
      if (c) c.survivedAccidents++;
    }
  },
};

// ================= 航行日志 =================
// 记录每艘船的每次航行：出发/抵达/货物/事故，供舰队面板与自测查阅。
class DSVoyageLog {
  constructor() {
    this.entries = [];   // {t, shipId, shipName, event, from, to, cargoValue, note}
  }
  record(t, ship, event, note) {
    this.entries.push({
      t: Math.round(t),
      shipId: ship ? ship.id : null,
      shipName: ship ? ship.name : '?',
      event: event,
      from: ship ? ship.location : null,
      to: ship ? ship.destination : null,
      cargoValue: ship ? ship.cargoValue() : 0,
      note: note || '',
    });
    if (this.entries.length > 500) this.entries.splice(0, this.entries.length - 500);
  }
  forShip(shipId) {
    return this.entries.filter(function (e) { return e.shipId === shipId; });
  }
  recent(n) {
    return this.entries.slice(-(n || 20)).reverse();
  }
  save() { return { entries: this.entries }; }
  load(data) {
    if (!data) return;
    this.entries = data.entries || [];
  }
}

// ================= 远征战后报告 =================
// 把一次远征的全部阶段、检定、奖励、事故整理成一份可读报告。
function dsExpeditionReport(exp, result) {
  const def = exp.def();
  const lines = [];
  lines.push('=== 远征报告：' + def.name + ' ===');
  lines.push('结果：' + (result.success ? '成功' : '失败') +
    ' · 阶段通过 ' + Math.round(result.stageRatio * 100) + '%' +
    ' · 事故率 ' + Math.round(result.risk * 100) + '%');
  for (let i = 0; i < result.stages.length; i++) {
    const st = result.stages[i];
    lines.push('  [' + (st.passed ? '✓' : '✗') + '] ' + st.stage +
      '（' + CREW_SKILL_NAMES[st.check] + ' ' + st.skill + ' + 骰 vs DC' + st.dc + '）— ' + st.text);
  }
  if (result.accident) {
    lines.push('事故：' + result.accident.text + '（船体 -' + (result.accident.hullDmg || 0) + '）');
  }
  const rewardParts = [];
  for (const k in result.rewards) {
    rewardParts.push(DS_RESOURCES[k].name + ' +' + result.rewards[k]);
  }
  lines.push('奖励：' + (rewardParts.join('、') || '无'));
  return lines.join('\n');
}

// ================= 小行星详情报告 =================
// 单颗小行星的完整情报（给 UI 详情面板与自测用）。
function dsAsteroidReport(asteroid) {
  if (!asteroid) return '未知小行星';
  const lines = [];
  lines.push('=== ' + asteroid.name + ' ===');
  lines.push('类型：' + asteroid.typeDef().name + '（' + asteroid.type + '） · 分区：' + asteroid.zoneDef().name);
  lines.push('直径 ' + asteroid.sizeKm + ' km · 距火星 ' + asteroid.au + ' AU · 轨道角 ' + asteroid.angle + '°');
  lines.push('储量：' + Math.round(asteroid.reserves) + ' / ' + Math.round(asteroid.maxReserves) + ' 吨（' +
    Math.round(asteroid.reserveRatio() * 100) + '%） · 富集 ×' + asteroid.richness);
  lines.push('危险度 ' + Math.round(asteroid.hazard * 100) + '% · 勘测等级 ' + asteroid.surveyLevel +
    ' · 已开采 ' + Math.round(asteroid.minedTotal) + ' 吨');
  const comp = asteroid.compositionFor(100);
  const compParts = [];
  for (const k in comp) {
    if (comp[k] > 0) compParts.push(DS_RESOURCES[k].name + ' ' + comp[k] + '/百吨');
  }
  lines.push('成分（每 100 吨矿石）：' + compParts.join('、'));
  return lines.join('\n');
}

// ================= 地面—轨道物流 =================
// 质量加速器（电磁弹射）：把地面物资直接打上轨道，
// 比飞船运货便宜但单次量小、有失败率；轨道电梯建成后解锁大运量。
// 这是地面经济与深空账本之间的物理纽带。
const DS_LAUNCH_METHODS = {
  rocket: {
    id: 'rocket',
    name: '化学火箭',
    desc: '常规火箭发射，量小可靠。',
    costPerTon: { fuel: 2, steel: 1 },
    capacityTons: 20,
    failRate: 0.02,
    timeHours: 2,
  },
  massDriver: {
    id: 'massDriver',
    name: '质量加速器',
    desc: '电磁弹射上轨，便宜量大，但 5% 概率货物损毁。',
    costPerTon: { fuel: 0.2, steel: 0.2 },
    capacityTons: 100,
    failRate: 0.05,
    timeHours: 0.5,
    requires: { tech: 't-orb-2' },
  },
  elevator: {
    id: 'elevator',
    name: '轨道电梯',
    desc: '太空电梯货运：便宜、安全、大运量。',
    costPerTon: { fuel: 0.05, steel: 0.05 },
    capacityTons: 500,
    failRate: 0.0,
    timeHours: 4,
    requires: { building: 'elevator' },
  },
};

class DSLogistics {
  constructor() {
    this.launches = [];       // 发射记录
    this.totalLaunchedTons = 0;
    this.totalLostTons = 0;
    this.elevatorBuilt = false;
  }
  // 发射货物：resKey + 吨数（质量按 DS_RESOURCES.mass 计）
  launch(resKey, tons, methodId, stock, game, nowSec, hasTech, hasBuilding) {
    const method = DS_LAUNCH_METHODS[methodId];
    if (!method) return { ok: false, reason: '未知发射方式' };
    if (!DS_RESOURCES[resKey]) return { ok: false, reason: '未知资源' };
    if (method.requires && method.requires.tech && hasTech && !hasTech(method.requires.tech)) {
      return { ok: false, reason: '需要科技：' + method.requires.tech };
    }
    if (method.requires && method.requires.building) {
      const hasIt = hasBuilding ? hasBuilding(method.requires.building) :
        (method.requires.building === 'elevator' ? this.elevatorBuilt : false);
      if (!hasIt) return { ok: false, reason: '需要地面建筑：轨道电梯' };
    }
    tons = Math.floor(tons);
    if (tons <= 0) return { ok: false, reason: '数量必须大于 0' };
    if (tons > method.capacityTons) {
      return { ok: false, reason: method.name + '单次最多 ' + method.capacityTons + ' 吨' };
    }
    // 费用从深空账本扣（燃料与钢）
    for (const k in method.costPerTon) {
      const need = Math.ceil(method.costPerTon[k] * tons);
      if ((stock[k] || 0) < need) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + need };
      }
    }
    // 货物来源：优先主游戏仓库，其次深空账本
    let fromGame = 0, fromStock = 0;
    let remaining = tons;
    if (game && game.player && game.player.inv && (game.player.inv[resKey] || 0) > 0) {
      fromGame = Math.min(remaining, game.player.inv[resKey]);
      game.player.inv[resKey] -= fromGame;
      remaining -= fromGame;
    }
    if (remaining > 0) {
      fromStock = Math.min(remaining, stock[resKey] || 0);
      stock[resKey] -= fromStock;
      remaining -= fromStock;
    }
    if (fromGame + fromStock <= 0) {
      return { ok: false, reason: '没有可发射的' + DS_RESOURCES[resKey].name + '（地面仓库与深空账本均无）' };
    }
    const shipped = fromGame + fromStock;
    for (const k in method.costPerTon) {
      stock[k] -= Math.ceil(method.costPerTon[k] * shipped);
    }
    // 失败判定
    const failed = Math.random() < method.failRate;
    const delivered = failed ? 0 : shipped;
    // 货物进入轨道站仓库（深空账本）
    if (delivered > 0) stock[resKey] = (stock[resKey] || 0) + delivered;
    this.totalLaunchedTons += shipped;
    if (failed) this.totalLostTons += shipped;
    this.launches.push({
      t: Math.round(nowSec), res: resKey, tons: shipped,
      method: methodId, failed: failed, delivered: delivered,
    });
    if (this.launches.length > 100) this.launches.splice(0, this.launches.length - 100);
    return {
      ok: true, shipped: shipped, delivered: delivered, failed: failed,
      method: method.name,
    };
  }
  // 从轨道向地面投送（返回舱）：把深空资源送回地面仓库
  dropToGround(resKey, tons, stock, game, nowSec) {
    if (!game || !game.player || !game.player.inv) {
      return { ok: false, reason: '主游戏仓库不可用' };
    }
    tons = Math.floor(tons);
    if (tons <= 0) return { ok: false, reason: '数量必须大于 0' };
    if ((stock[resKey] || 0) < tons) {
      return { ok: false, reason: DS_RESOURCES[resKey].name + '不足' };
    }
    // 返回舱费用：少量燃料
    const fuelCost = Math.ceil(tons * 0.1);
    if ((stock.fuel || 0) < fuelCost) return { ok: false, reason: '燃料不足，需要 ' + fuelCost };
    stock.fuel -= fuelCost;
    stock[resKey] -= tons;
    game.player.inv[resKey] = (game.player.inv[resKey] || 0) + tons;
    this.launches.push({
      t: Math.round(nowSec), res: resKey, tons: tons,
      method: 'drop', failed: false, delivered: tons,
    });
    return { ok: true, delivered: tons, fuelCost: fuelCost };
  }
  summary() {
    return {
      totalLaunchedTons: this.totalLaunchedTons,
      totalLostTons: this.totalLostTons,
      elevatorBuilt: this.elevatorBuilt,
      recent: this.launches.slice(-10).reverse(),
    };
  }
  save() {
    return {
      launches: this.launches,
      totalLaunchedTons: this.totalLaunchedTons,
      totalLostTons: this.totalLostTons,
      elevatorBuilt: this.elevatorBuilt,
    };
  }
  load(data) {
    if (!data) return;
    this.launches = data.launches || [];
    this.totalLaunchedTons = data.totalLaunchedTons || 0;
    this.totalLostTons = data.totalLostTons || 0;
    this.elevatorBuilt = !!data.elevatorBuilt;
  }
}

// ================= 柯伊伯带 =================
// 太阳系边缘的第二矿区：比小行星带更远（4.5–5.5 AU）、
// 更富（富集 ×1.8）也更危险（危险 0.25），
// 且只有探索船能抵达（需要 t-exp-3）。
// 柯伊伯天体以水冰与氦-3 为主，是后期氦-3 的第二来源。
const KUIPER_TYPES = {
  ice: {
    code: 'ice',
    name: '冰质天体',
    icon: '🧊',
    desc: '水冰与甲烷冰为主，燃料与生命维持的宝库。',
    composition: { water: 0.70, helium3: 0.12, steel: 0.05, rare: 0.05, titanium: 0.03, platinum: 0.02, uranium: 0.03 },
    richnessMul: 1.6,
    hazard: 0.20,
  },
  rock: {
    code: 'rock',
    name: '岩质天体',
    icon: '🪨',
    desc: '古老的岩石核心，稀土与铀富集。',
    composition: { water: 0.15, steel: 0.30, rare: 0.25, titanium: 0.10, platinum: 0.05, uranium: 0.12, helium3: 0.03 },
    richnessMul: 1.8,
    hazard: 0.25,
  },
  comet: {
    code: 'comet',
    name: '休眠彗星',
    icon: '☄️',
    desc: '休眠的彗核，挥发物极丰富，偶尔含遗迹碎片。',
    composition: { water: 0.55, helium3: 0.20, steel: 0.05, rare: 0.08, titanium: 0.02, platinum: 0.03, uranium: 0.02, artifact: 0.05 },
    richnessMul: 2.0,
    hazard: 0.30,
    artifactChance: 0.05,
  },
};

class DSKuiperBelt {
  constructor(seed) {
    this.seed = seed || 'starport-kuiper';
    this.bodies = [];     // {id, name, type, au, angle, reserves, maxReserves, richness, discovered, claimed, hazard}
    this.generated = false;
    this.totalMined = 0;
  }
  generate() {
    if (this.generated) return this.bodies;
    const rng = dsv3Mulberry32(dsv3HashSeed(this.seed));
    const names = [
      '冥王星碎片', '阋神星', '鸟神星', '妊神星', '塞德娜', '夸奥尔', '伐楼拿',
      '创神星', '混沌', '欧姆', '厄里斯', '小行星-136199', '小行星-136108',
      '小行星-136472', '小行星-90377', '小行星-50000', '小行星-20000',
      '小行星-28978', '小行星-38628', '小行星-24835', '小行星-15760',
      '小行星-19521', '小行星-26375', '小行星-47171', '小行星-55565',
      '小行星-55636', '小行星-84522', '小行星-84922', '小行星-90568',
    ];
    for (let i = 0; i < 30; i++) {
      const type = dsv3WeightedPick(rng, [['ice', 4], ['rock', 3], ['comet', 2]]);
      const typeDef = KUIPER_TYPES[type];
      const reserves = Math.round((500 + rng() * 4500) * typeDef.richnessMul);
      this.bodies.push({
        id: dsv3Id('KBO', i + 1),
        name: names[i] || dsv3Id('KBO', i + 1),
        type: type,
        au: dsv3Round(4.5 + rng() * 1.0, 2),
        angle: Math.round(rng() * 360),
        reserves: reserves,
        maxReserves: reserves,
        richness: dsv3Round(1.5 + rng() * 0.8, 2),
        discovered: i < 3,
        claimed: false,
        hazard: dsv3Round(typeDef.hazard, 2),
        minedTotal: 0,
      });
    }
    this.generated = true;
    return this.bodies;
  }
  get(id) {
    for (let i = 0; i < this.bodies.length; i++) {
      if (this.bodies[i].id === id) return this.bodies[i];
    }
    return null;
  }
  discovered() { return this.bodies.filter(function (b) { return b.discovered; }); }
  claimable() {
    return this.discovered().filter(function (b) { return !b.claimed && b.reserves > 0; });
  }
  discoverNext(nowSec) {
    const next = this.bodies.filter(function (b) { return !b.discovered; })
      .sort(function (a, b) { return a.au - b.au; })[0];
    if (!next) return null;
    next.discovered = true;
    return next;
  }
  mine(body, tons) {
    if (!body || body.reserves <= 0) return { mined: 0, out: {} };
    const actual = Math.min(tons, body.reserves);
    body.reserves = dsv3Round(body.reserves - actual, 1);
    body.minedTotal += actual;
    this.totalMined += actual;
    const comp = KUIPER_TYPES[body.type].composition;
    const out = {};
    for (const k in comp) out[k] = dsv3Round(actual * comp[k] * body.richness, 1);
    if (body.type === 'comet' && Math.random() < (KUIPER_TYPES.comet.artifactChance || 0.05)) {
      out.artifact = (out.artifact || 0) + 1;
    }
    return { mined: actual, out: out, depleted: body.reserves <= 0 };
  }
  summary() {
    return {
      total: this.bodies.length,
      discovered: this.discovered().length,
      claimable: this.claimable().length,
      totalMined: Math.round(this.totalMined),
    };
  }
  save() {
    return {
      seed: this.seed, bodies: this.bodies,
      generated: this.generated, totalMined: this.totalMined,
    };
  }
  load(data) {
    if (!data) return;
    this.seed = data.seed || this.seed;
    this.bodies = data.bodies || [];
    this.generated = !!data.generated;
    this.totalMined = data.totalMined || 0;
    if (!this.generated) this.generate();
  }
}

// ================= 自动采矿前哨 =================
// 在已认领的小行星上部署无人前哨：无需船员、无需飞船往返，
// 每小时自动产出矿石进深空账本，但产量只有采矿船的 40%，
// 且需要定期补给燃料（每小时耗 1 燃料），燃料断供即停机。
class DSOutpost {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || ('outpost-' + Math.floor(Math.random() * 1e9).toString(36));
    this.asteroidId = opts.asteroidId || null;
    this.level = opts.level || 1;
    this.fuelStock = opts.fuelStock || 0;
    this.builtAt = opts.builtAt || 0;
    this.totalMined = opts.totalMined || 0;
    this.online = opts.online !== false;
  }
  buildCost() {
    return { steel: 300 * this.level, rare: 100 * this.level, tech: 30 * this.level, fuel: 50 };
  }
  upgradeCost() {
    if (this.level >= 3) return null;
    return { steel: 400 * this.level, rare: 150 * this.level, titanium: 50 * this.level };
  }
  // 每小时产出：采矿船速率的 40% × 等级
  hourlyYield(asteroid) {
    if (!this.online || !asteroid || asteroid.reserves <= 0) return { mined: 0, out: {} };
    if (this.fuelStock < 1) {
      this.online = false;
      return { mined: 0, out: {}, reason: '燃料耗尽停机' };
    }
    this.fuelStock -= 1;
    const rate = 12 * 0.4 * this.level; // 采矿船基础 12 吨/时 × 40% × 等级
    const result = asteroid.mine(rate);
    this.totalMined += result.mined;
    return result;
  }
  refuel(amount, stock) {
    const take = Math.min(amount, stock.fuel || 0, 200 - this.fuelStock);
    if (take <= 0) return { ok: false, reason: '燃料不足或油箱已满' };
    stock.fuel -= take;
    this.fuelStock += take;
    this.online = true;
    return { ok: true, fueled: take };
  }
  summary() {
    return {
      id: this.id, asteroidId: this.asteroidId, level: this.level,
      fuelStock: Math.round(this.fuelStock), online: this.online,
      totalMined: Math.round(this.totalMined),
    };
  }
  save() {
    return {
      id: this.id, asteroidId: this.asteroidId, level: this.level,
      fuelStock: this.fuelStock, builtAt: this.builtAt,
      totalMined: this.totalMined, online: this.online,
    };
  }
  static load(data) { return new DSOutpost(data || {}); }
}

class DSOutpostManager {
  constructor() {
    this.outposts = [];
    this.maxOutposts = 6;
  }
  get(asteroidId) {
    for (let i = 0; i < this.outposts.length; i++) {
      if (this.outposts[i].asteroidId === asteroidId) return this.outposts[i];
    }
    return null;
  }
  canBuild(asteroid, stock) {
    if (!asteroid) return { ok: false, reason: '找不到小行星' };
    if (!asteroid.claimed) return { ok: false, reason: '需先认领该小行星' };
    if (this.get(asteroid.id)) return { ok: false, reason: '该小行星已有前哨' };
    if (this.outposts.length >= this.maxOutposts) {
      return { ok: false, reason: '前哨已达上限（' + this.maxOutposts + ' 座）' };
    }
    const cost = { steel: 300, rare: 100, tech: 30, fuel: 50 };
    for (const k in cost) {
      if ((stock[k] || 0) < cost[k]) {
        return { ok: false, reason: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
      }
    }
    return { ok: true, cost: cost };
  }
  build(asteroid, stock, nowSec) {
    const check = this.canBuild(asteroid, stock);
    if (!check.ok) return check;
    for (const k in check.cost) stock[k] -= check.cost[k];
    const op = new DSOutpost({ asteroidId: asteroid.id, fuelStock: 50, builtAt: nowSec });
    this.outposts.push(op);
    return { ok: true, outpost: op };
  }
  // 每小时：各前哨产出进账本
  hourlyTick(belt, stock) {
    const results = [];
    for (let i = 0; i < this.outposts.length; i++) {
      const op = this.outposts[i];
      const asteroid = belt.get(op.asteroidId);
      const res = op.hourlyYield(asteroid);
      if (res.mined > 0) {
        for (const k in res.out) stock[k] = (stock[k] || 0) + res.out[k];
      }
      results.push({ outpost: op.id, mined: res.mined, online: op.online });
    }
    return results;
  }
  summary() {
    return {
      total: this.outposts.length,
      max: this.maxOutposts,
      outposts: this.outposts.map(function (o) { return o.summary(); }),
    };
  }
  save() {
    return { outposts: this.outposts.map(function (o) { return o.save(); }) };
  }
  load(data) {
    if (!data) return;
    this.outposts = (data.outposts || []).map(function (o) { return DSOutpost.load(o); });
  }
}

// ================= 舰队编队 =================
// 2–5 艘飞船组成编队同行：共享护航加成（事故率降低）、
// 编队速度取最慢船，载荷汇总。编队适合远征与长途采矿。
const DS_FORMATION_TYPES = {
  convoy: {
    id: 'convoy',
    name: '护航船队',
    desc: '运输船 + 探索船护航：事故率 -25%，速度取最慢船。',
    requires: { transport: 1, explorer: 1 },
    riskMul: 0.75,
    speedMul: 1.0,
    cargoMul: 1.0,
  },
  miningFleet: {
    id: 'miningFleet',
    name: '采矿舰队',
    desc: '2 艘以上采矿船协同：采矿产量 +25%，事故率 -10%。',
    requires: { miner: 2 },
    riskMul: 0.9,
    speedMul: 1.0,
    miningMul: 1.25,
  },
  expeditionWing: {
    id: 'expeditionWing',
    name: '远征联队',
    desc: '2 艘探索船 + 1 艘运输船：远征奖励 +15%，事故率 -15%。',
    requires: { explorer: 2, transport: 1 },
    riskMul: 0.85,
    rewardMul: 1.15,
    speedMul: 1.05,
  },
  rapidResponse: {
    id: 'rapidResponse',
    name: '快速反应队',
    desc: '全探索船编队：速度 +20%，事故率 -5%，载荷 -20%。',
    requires: { explorer: 2 },
    riskMul: 0.95,
    speedMul: 1.2,
    cargoMul: 0.8,
  },
};

class DSFormation {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || ('formation-' + Math.floor(Math.random() * 1e9).toString(36));
    this.type = opts.type || 'convoy';
    this.name = opts.name || DS_FORMATION_TYPES[this.type].name;
    this.shipIds = opts.shipIds || [];
    this.createdAt = opts.createdAt || 0;
  }
  def() { return DS_FORMATION_TYPES[this.type]; }
  // 编队速度：最慢船 × 编队速度加成
  speedAUPerHour(fleet) {
    let slowest = Infinity;
    for (let i = 0; i < this.shipIds.length; i++) {
      const s = fleet.get(this.shipIds[i]);
      if (s) slowest = Math.min(slowest, s.speedAUPerHour());
    }
    if (slowest === Infinity) return 0;
    return dsv3Round(slowest * (this.def().speedMul || 1), 4);
  }
  totalCargo(fleet) {
    let s = 0;
    for (let i = 0; i < this.shipIds.length; i++) {
      const sh = fleet.get(this.shipIds[i]);
      if (sh) s += sh.maxCargo();
    }
    return Math.round(s * (this.def().cargoMul || 1));
  }
  riskMul() { return this.def().riskMul || 1; }
  miningMul() { return this.def().miningMul || 1; }
  rewardMul() { return this.def().rewardMul || 1; }
  // 检查编队构成是否满足该类型要求
  checkComposition(fleet) {
    const counts = {};
    for (let i = 0; i < this.shipIds.length; i++) {
      const s = fleet.get(this.shipIds[i]);
      if (!s) return { ok: false, reason: '编队中有未知飞船' };
      counts[s.type] = (counts[s.type] || 0) + 1;
    }
    const req = this.def().requires;
    for (const t in req) {
      if ((counts[t] || 0) < req[t]) {
        return { ok: false, reason: '需要 ' + req[t] + ' 艘' + SHIP_TYPES[t].name + '（当前 ' + (counts[t] || 0) + ' 艘）' };
      }
    }
    if (this.shipIds.length < 2 || this.shipIds.length > 5) {
      return { ok: false, reason: '编队需要 2–5 艘飞船' };
    }
    return { ok: true };
  }
  summary(fleet) {
    return {
      id: this.id, type: this.type, name: this.name,
      ships: this.shipIds.length,
      speed: fleet ? this.speedAUPerHour(fleet) : 0,
      totalCargo: fleet ? this.totalCargo(fleet) : 0,
      riskMul: this.riskMul(),
      miningMul: this.miningMul(),
      rewardMul: this.rewardMul(),
    };
  }
  save() {
    return { id: this.id, type: this.type, name: this.name, shipIds: this.shipIds, createdAt: this.createdAt };
  }
  static load(data) { return new DSFormation(data || {}); }
}

class DSFormationManager {
  constructor() {
    this.formations = [];
  }
  get(id) {
    for (let i = 0; i < this.formations.length; i++) {
      if (this.formations[i].id === id) return this.formations[i];
    }
    return null;
  }
  formationOfShip(shipId) {
    for (let i = 0; i < this.formations.length; i++) {
      if (this.formations[i].shipIds.indexOf(shipId) >= 0) return this.formations[i];
    }
    return null;
  }
  create(type, shipIds, fleet, nowSec) {
    if (!DS_FORMATION_TYPES[type]) return { ok: false, reason: '未知编队类型' };
    const f = new DSFormation({ type: type, shipIds: shipIds.slice(), createdAt: nowSec });
    const check = f.checkComposition(fleet);
    if (!check.ok) return check;
    // 一艘船只能在一个编队
    for (let i = 0; i < shipIds.length; i++) {
      if (this.formationOfShip(shipIds[i])) {
        return { ok: false, reason: '飞船已在其他编队中' };
      }
    }
    this.formations.push(f);
    return { ok: true, formation: f };
  }
  disband(id) {
    const idx = this.formations.findIndex(function (f) { return f.id === id; });
    if (idx < 0) return { ok: false, reason: '找不到该编队' };
    const f = this.formations[idx];
    this.formations.splice(idx, 1);
    return { ok: true, formation: f };
  }
  summary(fleet) {
    return {
      total: this.formations.length,
      formations: this.formations.map(function (f) { return f.summary(fleet); }),
    };
  }
  save() {
    return { formations: this.formations.map(function (f) { return f.save(); }) };
  }
  load(data) {
    if (!data) return;
    this.formations = (data.formations || []).map(function (f) { return DSFormation.load(f); });
  }
}

// ================= 深空手册 =================
// 机制说明（给游戏内手册用）：每个条目讲清一个系统的规则与数值，
// 不写故事，只写玩法。game.js 的手册面板可直接渲染。
const DS_GUIDE = [
  {
    id: 'guide-overview',
    title: '深空探索总览',
    icon: '🌌',
    body: [
      '深空层是火星地表之外的第二战场：轨道站、月球基地、小行星带、柯伊伯带、3 处遗迹。',
      '深空账本独立于地面仓库：钢、稀土、科技、钛、铂、氦-3、水、食物、燃料、氧气、铀、遗迹碎片共 12 种资源。',
      '地面与深空之间靠发射（火箭/质量加速器/轨道电梯）与返回舱互通，或用运输船直运。',
      '时间模型：一切按游戏内小时结算；速度 ×2 时深空也 ×2；暂停时深空停摆。',
    ],
  },
  {
    id: 'guide-station',
    title: '轨道站',
    icon: '🛰️',
    body: [
      '建立需要钢 800、稀土 300、科技 100、燃料 100。',
      '每环 12 槽，最多 3 环；扩建新环需要当前环已建 ≥8 个模块。',
      '10 种模块 ×3 级：太阳能帆、船坞、居住舱、科研舱、精炼厂、水培农场、燃料库、通讯阵列、防御炮塔、天文台。',
      '电力是硬约束：净电力 <0 时全站生产 ×0.4。船员是软约束：缺员模块效率 ×0.5。',
      '船坞加速造船与维修；通讯阵列缩短航行时间；天文台积累发现进度，自动发现新小行星。',
      '微陨石、太阳风、设备故障每 90 分钟以上随机发生，防御炮塔可减伤。',
    ],
  },
  {
    id: 'guide-moon',
    title: '月球基地',
    icon: '🌕',
    body: [
      '建立需要一艘停靠的运输船 + 钢 500、稀土 200、科技 100、燃料 200。',
      '5 级基地，建筑槽 3/5/8/11/14；8 种建筑：氦-3 矿场、月壤矿场、居住穹顶、太阳能场、核反应堆、温室、实验室、发射场。',
      '核心产出氦-3（价值 15）：Lv1 矿场 2/时，Lv5 矿场 20/时。',
      '生命维持是硬约束：每人每小时耗水 0.2、氧 0.1；水/氧储备 <30 时产量减半、士气下跌。',
      '月夜周期约 29.5 天：月夜期间太阳能场产量减半，核反应堆不受影响。',
      '补给靠运输船：装水/食物/氧去月球，返航时带回一半月球产出（氦-3 优先）。',
    ],
  },
  {
    id: 'guide-belt',
    title: '小行星采矿',
    icon: '🪨',
    body: [
      '小行星带 120 颗（确定性生成），分内/中/外三带，富集与危险递增。',
      '类型：C 碳质（水冰多）、S 硅质（钢/稀土）、M 金属（钛/铂）、V 灶神星族（稀土/铀，偶出遗迹碎片）。',
      '流程：勘测发现 → 深度勘测（更准的储量估计）→ 认领（绑定一艘采矿船）→ 派船采矿 → 返航卸货。',
      '采矿船基础速率 12 吨/时，受船员采矿技能与遗迹/科技加成影响；储量按开采量递减，采空即废。',
      '无人前哨：已认领小行星可建前哨，每小时自动产出采矿船 40% 的量，但每小时耗 1 燃料，断油停机。',
      '柯伊伯带 30 个天体更远更富（富集 ×1.5–2.0），需要 t-exp-3 与探索船。',
    ],
  },
  {
    id: 'guide-ships',
    title: '飞船',
    icon: '🚀',
    body: [
      '三型飞船：运输船（载荷 500、速度 0.08、船员 4）、采矿船（载荷 220、速度 0.06、船员 6、带采矿激光）、探索船（载荷 80、速度 0.15、船员 3、勘测 +25%）。',
      '建造在船坞进行，船坞等级加速；同时最多 3 艘在建。',
      '升级三系 ×5 级：引擎（速度 +12%/级、油耗 -6%/级）、货舱（载荷 +20%/级）、护盾（船体 +25%/级、事故率 -8%/级）。',
      '出航检查：船员满额、燃料 ≥20、船体 ≥50%。燃料按距离 × 每 AU 油耗扣除。',
      '维护费每小时按船级扣钢；船体 <50% 需维修，维修费按缺失船体计。',
      '编队：2–5 艘成队，护航船队事故率 -25%，采矿舰队产量 +25%，远征联队奖励 +15%，快速反应队速度 +20%。',
    ],
  },
  {
    id: 'guide-crew',
    title: '船员',
    icon: '🧑‍🚀',
    body: [
      '五岗位：驾驶员、工程师、科学家、医生、矿工；每人 9 项技能（0–100）+ 等级（1–10）+ 士气 + 健康。',
      '招募：每次生成 3 名候选人，挑 1 名雇佣，费用 50 钢起（岗位系数不同），冷却 1 小时，名册上限 120 人。',
      '训练：8 门课程，每门 8 小时，针对性 +技能；训练完成 +40 经验、士气 +3。',
      '效率 = 技能 × 士气 × 健康综合；士气 <40 效率 -30%，<20 可能辞职。',
      '工资按小时扣钢；发不出工资全体士气 -2/时。受伤分三级，休养 24/72/168 小时。',
      '勋章：首飞、远征老兵、救援者、矿王、遗迹探索者、幸存者、王牌驾驶员，给永久士气/效率加成。',
    ],
  },
  {
    id: 'guide-expedition',
    title: '远征任务',
    icon: '🗺️',
    body: [
      '18 个远征任务：遗迹初探、深潜、远征、普查、采集、救援、彗星、海盗、火卫一前哨、火卫二调查、太阳探测、水冰运输、幽灵信号、医疗撤离、稀土争夺、深空冷冻、轨道火灾、第一次接触。',
      '每个任务有难度（1–5）、时长、船型、船员、最低技能与科技前置；同时最多 5 个进行中。',
      '阶段检定：每阶段按相关技能均值 + d20 对 DC，失败有代价（耗时、船体、士气）。',
      '事故率 = 基础 10% + 难度加成 + 任务风险 − 护盾/医生修正；事故可能损船体、伤船员。',
      '奖励按阶段通过率 × 任务倍率 × 遗迹加成结算；失败只给 20% 残值。',
      '远征可解锁遗迹：完成遗迹 α/β/γ 对应远征后，遗迹自动发现。',
    ],
  },
  {
    id: 'guide-ruins',
    title: '外星遗迹',
    icon: '🏛️',
    body: [
      '3 处遗迹：α（火卫一背面）、β（小行星带深处）、γ（太阳系边缘）。',
      '发现：完成对应远征（线索 +2）或积累 2 条线索（勘测/幽灵信号远征）。',
      '每处 3 个发掘阶段，每阶段 24 小时，需要探索船 + 科学家在场，按技能检定，失败需重做。',
      'α 解锁「遗迹能源核心」：全站电力 +20%、太阳能 +25%。',
      'β 解锁「引力合金」：全部飞船船体 +30%、采矿 +15%。',
      'γ 解锁「星门信标」：航行时间 -25%、远征奖励 +20%，并可建造星门建筑（再 -15% 航行时间、事故率 -10%）。',
      '遗迹碎片可投入碎片实验室研究 6 个项目，获永久增益。',
    ],
  },
  {
    id: 'guide-map',
    title: '深空地图',
    icon: '🗺️',
    body: [
      '以火星为中心，节点按 AU 距离与轨道角排布：轨道站、火卫一/二、月球基地、三带小行星、3 处遗迹、彗星点、太阳探测点、柯伊伯带、深空信标。',
      '航程 = 两节点欧氏距离（AU）；航行时间 = 距离 / 船速 × 加成；燃料 = 距离 × 每 AU 油耗。',
      '战争迷雾：节点需发现才显示详情；探索船勘测与天文台可发现新节点。',
      '固定航线 16 条，各有风险系数；海盗出没时节点标红，巡逻可清除。',
      '补给站网络：在已发现节点建燃料站（小/中/大），长途航行中途加油；大型站带维修坞。',
    ],
  },
  {
    id: 'guide-economy',
    title: '深空经济',
    icon: '💱',
    body: [
      '交易所：以科技点计价买卖 11 种资源，买入含 10% 手续费，卖出扣 10%；交易推动价格，每小时向基准回归。',
      '合同板：每 6 小时刷新 5 个合同，交付指定资源换科技点/稀有资源，12 小时过期。',
      '里程碑 31 个：达成即发奖励（资源直接进账）。',
      '自动运营（默认关闭）：自动维修、自动采矿、自动月球补给、自动招募，保留 200 钢安全库存。',
      '价值锚：钢 4、稀土 3、钛 6、铂 12、氦-3 15、铀 8、科技 10、遗迹碎片 50。',
    ],
  },
  {
    id: 'guide-tech',
    title: '深空科技',
    icon: '🔬',
    body: [
      '20 项深空科技：轨道力学、大型桁架、轨道精炼、高效光伏、轨道船坞、月球着陆、氦-3 提取、月面农业、月面核电、小行星勘测、采矿激光 II、深空导航、远征计划、深空生存、远域航行、轻质船体、离子推进、船员训练体系、人工重力、异星考古学。',
      '研究支付科技点 + 固定耗时，可排队；完成后给永久增益或解锁。',
      '碎片实验室另有 6 个遗迹碎片研究项目（异星能源/合金/推进/采矿/生态/星图）。',
    ],
  },
];

Object.assign(DSActions, {
  // —— 补给站 ——
  'depot-build': function (mgr, p, nowSec) {
    const r = mgr.depots.build(p.nodeId, p.size || 'small', mgr.stock, nowSec, mgr.map.isDiscovered(p.nodeId));
    return r.ok ? { ok: true, message: '补给站建成：' + r.depot.def().name + '。' }
      : { ok: false, message: r.reason };
  },
  'depot-upgrade': function (mgr, p, nowSec) {
    const r = mgr.depots.upgrade(p.depotId, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '补给站升级至' + r.depot.def().name + '。' }
      : { ok: false, message: r.reason };
  },
  'depot-refuel': function (mgr, p) {
    const depot = mgr.depots.getById(p.depotId);
    const ship = mgr.fleet.get(p.shipId);
    if (!depot) return { ok: false, message: '找不到补给站。' };
    if (!ship) return { ok: false, message: '找不到飞船。' };
    if (ship.location !== depot.nodeId) return { ok: false, message: '飞船不在该补给站所在节点。' };
    const r = depot.refuelShip(ship, 1);
    return r.ok ? { ok: true, message: '加油 ' + r.fueled + ' 单位。' } : { ok: false, message: r.reason };
  },
  'depot-supply': function (mgr, p) {
    // 运输船向补给站卸货：params {depotId, shipId}
    const depot = mgr.depots.getById(p.depotId);
    const ship = mgr.fleet.get(p.shipId);
    if (!depot || !ship) return { ok: false, message: '找不到补给站或飞船。' };
    const cargo = ship.unloadAll();
    const r = depot.receiveCargo(cargo);
    return { ok: true, message: '补给站收货：燃料 +' + r.fuelIn + '，水冰 +' + r.waterIn + '。' };
  },

  // —— 前哨 ——
  'outpost-build': function (mgr, p, nowSec) {
    const asteroid = mgr.belt.get(p.asteroidId);
    const r = mgr.outposts.build(asteroid, mgr.stock, nowSec);
    return r.ok ? { ok: true, message: '自动采矿前哨已部署。' } : { ok: false, message: r.reason };
  },
  'outpost-refuel': function (mgr, p) {
    const op = mgr.outposts.outposts.find(function (o) { return o.id === p.outpostId; });
    if (!op) return { ok: false, message: '找不到前哨。' };
    const r = op.refuel(parseInt(p.amount, 10) || 50, mgr.stock);
    return r.ok ? { ok: true, message: '前哨加油 ' + r.fueled + '。' } : { ok: false, message: r.reason };
  },
  'outpost-upgrade': function (mgr, p) {
    const op = mgr.outposts.outposts.find(function (o) { return o.id === p.outpostId; });
    if (!op) return { ok: false, message: '找不到前哨。' };
    const cost = op.upgradeCost();
    if (!cost) return { ok: false, message: '前哨已满级。' };
    for (const k in cost) {
      if ((mgr.stock[k] || 0) < cost[k]) return { ok: false, message: DS_RESOURCES[k].name + '不足，需要 ' + cost[k] };
    }
    for (const k in cost) mgr.stock[k] -= cost[k];
    op.level++;
    return { ok: true, message: '前哨升至 Lv' + op.level + '。' };
  },

  // —— 编队 ——
  'formation-create': function (mgr, p, nowSec) {
    const r = mgr.formations.create(p.type, p.shipIds || [], mgr.fleet, nowSec);
    return r.ok ? { ok: true, message: '编队成立：' + r.formation.name + '。' }
      : { ok: false, message: r.reason };
  },
  'formation-disband': function (mgr, p) {
    const r = mgr.formations.disband(p.formationId);
    return r.ok ? { ok: true, message: '编队已解散。' } : { ok: false, message: r.reason };
  },

  // —— 物流 ——
  'logistics-launch': function (mgr, p, nowSec, game) {
    const r = mgr.logistics.launch(p.res, parseInt(p.tons, 10) || 10, p.method || 'rocket',
      mgr.stock, game, nowSec,
      function (t) { return mgr.hasTech(game, t); },
      function (b) {
        if (!game) return false;
        if (game.builder && game.builder.buildings) {
          return game.builder.buildings.some(function (x) { return x && x.id === b; });
        }
        return false;
      });
    if (!r.ok) return { ok: false, message: r.reason };
    return {
      ok: true,
      message: r.failed ? '发射失败！' + r.shipped + ' 吨货物损毁。' :
        '发射成功，' + r.delivered + ' 吨' + DS_RESOURCES[p.res].name + '已送达轨道。',
    };
  },
  'logistics-drop': function (mgr, p, nowSec, game) {
    const r = mgr.logistics.dropToGround(p.res, parseInt(p.tons, 10) || 10, mgr.stock, game, nowSec);
    return r.ok ? { ok: true, message: '返回舱已投送 ' + r.delivered + ' 吨' + DS_RESOURCES[p.res].name + '回地面。' }
      : { ok: false, message: r.reason };
  },

  // —— 碎片实验室 ——
  'artifact-research': function (mgr, p, nowSec) {
    const r = mgr.artifactLab.startResearch(p.projectId, mgr.stock, mgr.crew, nowSec);
    return r.ok ? { ok: true, message: DS_ARTIFACT_MAP[p.projectId].name + ' 开始研究，预计 ' + dsv3FmtTime(r.endsAt - nowSec) + ' 后完成。' }
      : { ok: false, message: r.reason };
  },

  // —— 柯伊伯带 ——
  'kuiper-discover': function (mgr, p, nowSec) {
    const b = mgr.kuiper.discoverNext(nowSec);
    return b ? { ok: true, message: '发现柯伊伯天体：' + b.name + '。' }
      : { ok: false, message: '柯伊伯带已全部发现。' };
  },

  // —— 自动运营开关 ——
  'auto-toggle': function (mgr, p) {
    const key = p.key;
    const allowed = ['autoMining', 'autoMoonSupply', 'autoRepair', 'autoRecruit'];
    if (allowed.indexOf(key) < 0) return { ok: false, message: '未知自动策略。' };
    mgr.autoOps[key] = !mgr.autoOps[key];
    return { ok: true, message: '自动策略「' + key + '」' + (mgr.autoOps[key] ? '已开启' : '已关闭') + '。' };
  },
});

// 追加事件（第二批 12 个，与第一批共同构成 36 事件牌堆）
DS_EVENT_DEFS.push(
  { id: 'ev-kuiper-signal', name: '柯伊伯信号', weight: 2, cond: 'always', text: '柯伊伯带方向收到微弱信号，科技点 +20。', effects: { tech: 20 } },
  { id: 'ev-crew-medal', name: '授勋仪式', weight: 2, cond: 'crew', text: '轨道站举行授勋仪式，全体士气 +4。', effects: { moraleAll: 4 } },
  { id: 'ev-asteroid-close', name: '近地小行星', weight: 3, cond: 'belt', text: '一颗近地小行星掠过火星，钢材 +60。', effects: { steel: 60 } },
  { id: 'ev-solar-sail', name: '太阳帆试验', weight: 2, cond: 'station', text: '太阳帆试验成功，燃料 -20（试验消耗），科技 +30。', effects: { fuel: -20, tech: 30 } },
  { id: 'ev-moon-quake2', name: '月震余波', weight: 2, cond: 'moon', text: '月震余波导致一处矿道坍塌，钛 -20。', effects: { titanium: -20 } },
  { id: 'ev-pirate-ransom', name: '海盗勒索', weight: 2, cond: 'belt', text: '海盗勒索过路费，钢材 -50 或士气 -5（已扣钢材）。', effects: { steel: -50 } },
  { id: 'ev-greenhouse-pest', name: '温室虫害', weight: 2, cond: 'moon', text: '月面温室出现虫害，食物 -40。', effects: { food: -40 } },
  { id: 'ev-rare-comet', name: '稀有彗星', weight: 1, cond: 'always', text: '一颗富含稀有元素的彗星被捕获，稀土 +80，铂 +5。', effects: { rare: 80, platinum: 5 } },
  { id: 'ev-crew-sport', name: '零重力球赛', weight: 3, cond: 'crew', text: '船员组织零重力球赛，全体士气 +7。', effects: { moraleAll: 7 } },
  { id: 'ev-fuel-depot-fire', name: '油库小火', weight: 2, cond: 'station', text: '燃料库发生小火，及时扑灭，燃料 -60。', effects: { fuel: -60 } },
  { id: 'ev-artifact-shard', name: '碎片漂流物', weight: 1, cond: 'always', text: '打捞到一块漂流的遗迹碎片：遗迹碎片 +1。', effects: { artifact: 1 } },
  { id: 'ev-earth-news', name: '地球来信', weight: 2, cond: 'crew', text: '地球发来慰问视频，全体士气 +5。', effects: { moraleAll: 5 } },
);

// 追加合同模板（4 个）
DS_CONTRACT_TEMPLATES.push(
  { kind: 'deliver', res: 'uranium', amount: [10, 25, 50], reward: { tech: [40, 90, 180] }, name: '铀供应' },
  { kind: 'deliver', res: 'oxygen', amount: [100, 250, 500], reward: { tech: [12, 30, 60] }, name: '氧气供应' },
  { kind: 'deliver', res: 'artifact', amount: [1, 2, 4], reward: { tech: [150, 300, 600] }, name: '遗迹碎片收购' },
  { kind: 'deliver', res: 'steel', amount: [2000, 4000, 8000], reward: { tech: [150, 300, 600], platinum: [10, 20, 40] }, name: '钢材大单' },
);

// ================= 补充 UI 面板 =================
Object.assign(DSUI, {
  // —— 飞船详情 ——
  shipDetail: function (mgr, shipId) {
    const ship = mgr.fleet.get(shipId);
    if (!ship) return '<div class="ds-panel"><p>找不到该飞船。</p></div>';
    const s = ship.summary();
    let h = '<div class="ds-panel ds-ship-detail">';
    h += '<h2>' + s.icon + ' ' + this.esc(s.name) + '</h2>';
    h += '<p>' + s.typeName + ' Lv' + s.level + ' · ' + s.statusLabel + ' · 位于 ' + this.esc(s.location) + '</p>';
    h += '<p>船体 ' + this.barHtml(s.hull / s.maxHull, s.hull + '/' + s.maxHull, '#e53935') + '</p>';
    h += '<p>燃料 ' + this.barHtml(s.fuel / s.maxFuel, Math.round(s.fuel) + '/' + s.maxFuel, '#fb8c00') + '</p>';
    h += '<p>货舱 ' + this.barHtml(s.cargoUsed / s.maxCargo, s.cargoUsed + '/' + s.maxCargo + ' 吨', '#1e88e5') + '</p>';
    h += '<p>速度 ' + s.speed + ' AU/时 · 油耗 ' + ship.fuelPerAU() + '/AU · 采矿速率 ' +
      (s.type === 'miner' ? ship.miningRatePerHour() + ' 吨/时' : '—') + '</p>';
    h += '<h3>升级</h3><ul>';
    for (let i = 0; i < SHIP_UPGRADE_KEYS.length; i++) {
      const k = SHIP_UPGRADE_KEYS[i];
      const def = SHIP_UPGRADES[k];
      const lv = s.upgrades[k];
      const next = lv >= def.maxLevel ? null : def.costPerLevel(lv + 1, s.type);
      h += '<li>' + def.icon + ' ' + def.name + ' Lv' + lv + '/' + def.maxLevel + ' — ' + this.esc(def.desc) +
        (next ? ' · 下一级：' + this.costHtml(next) : '（已满级）') + '</li>';
    }
    h += '</ul>';
    h += '<h3>船员（' + s.crew + '/' + s.crewNeed + '）</h3><ul>';
    for (let i = 0; i < ship.crewIds.length; i++) {
      const c = mgr.crew.get(ship.crewIds[i]);
      if (c) h += '<li>' + this.esc(c.name) + ' · ' + CREW_ROLES[c.role].name + ' Lv' + c.level + '</li>';
    }
    h += '</ul>';
    h += '<h3>航行记录</h3><ul class="ds-log">';
    const voyages = mgr.voyages.forShip(ship.id).slice(-10);
    for (let i = 0; i < voyages.length; i++) {
      h += '<li><span class="ds-t">' + dsv3FmtTime(voyages[i].t) + '</span> ' +
        this.esc(voyages[i].event) + ' ' + this.esc(voyages[i].note || '') + '</li>';
    }
    h += '</ul></div>';
    return h;
  },

  // —— 小行星详情 ——
  asteroidDetail: function (mgr, asteroidId) {
    const a = mgr.belt.get(asteroidId);
    if (!a) return '<div class="ds-panel"><p>找不到该小行星。</p></div>';
    let h = '<div class="ds-panel ds-asteroid-detail">';
    h += '<pre>' + this.esc(dsAsteroidReport(a)) + '</pre>';
    const op = mgr.outposts.get(a.id);
    h += '<p>认领状态：' + (a.claimed ? '已认领（' + this.esc(a.claimedBy || '') + '）' : '未认领') +
      ' · 前哨：' + (op ? '已部署 Lv' + op.level + '（燃料 ' + Math.round(op.fuelStock) + '）' : '无') + '</p>';
    if (!a.claimed) h += '<button data-ds-action="belt-claim" data-asteroid="' + a.id + '">认领</button> ';
    if (a.claimed && !op) h += '<button data-ds-action="outpost-build" data-asteroid="' + a.id + '">部署自动采矿前哨</button>';
    h += '</div>';
    return h;
  },

  // —— 补给站 / 编队 / 物流 / 碎片实验室 ——
  logistics: function (mgr) {
    const lg = mgr.logistics;
    const s = lg.summary();
    let h = '<div class="ds-panel ds-logistics">';
    h += '<h2>🛰️ 地面—轨道物流</h2>';
    h += '<p>累计发射 ' + s.totalLaunchedTons + ' 吨 · 损毁 ' + s.totalLostTons + ' 吨' +
      (s.elevatorBuilt ? ' · 轨道电梯已建成' : '') + '</p>';
    h += '<h3>发射方式</h3><div class="ds-grid">';
    for (const k in DS_LAUNCH_METHODS) {
      const m = DS_LAUNCH_METHODS[k];
      h += '<div class="ds-card"><h4>' + m.name + '</h4><p>' + this.esc(m.desc) + '</p>' +
        '<p>单次上限 ' + m.capacityTons + ' 吨 · 失败率 ' + Math.round(m.failRate * 100) + '%' +
        ' · 费用/吨：' + this.costHtml(m.costPerTon) + '</p></div>';
    }
    h += '</div>';
    h += '<h3>补给站网络</h3><p>已建 ' + mgr.depots.summary().total + ' 座</p><div class="ds-grid">';
    const deps = mgr.depots.summary().depots;
    for (let i = 0; i < deps.length; i++) {
      const d = deps[i];
      h += '<div class="ds-card"><h4>' + d.sizeName + ' · ' + this.esc(d.nodeId) + '</h4>' +
        '<p>燃料 ' + this.barHtml(d.fuelRatio, d.fuel + '/' + d.capacity) + '</p>' +
        '<p>水冰 ' + d.water + ' · 累计加油 ' + d.totalFueled + ' · 累计维修 ' + d.totalRepaired + '</p></div>';
    }
    h += '</div>';
    h += '<h3>编队</h3><div class="ds-grid">';
    const forms = mgr.formations.summary(mgr.fleet).formations;
    for (let i = 0; i < forms.length; i++) {
      const f = forms[i];
      h += '<div class="ds-card"><h4>' + this.esc(f.name) + '</h4><p>' + f.ships + ' 艘 · 速度 ' +
        f.speed + ' AU/时 · 总载荷 ' + f.totalCargo + ' 吨 · 风险 ×' + f.riskMul + '</p></div>';
    }
    h += '</div>';
    h += '<h3>编队类型</h3><div class="ds-grid">';
    for (const k in DS_FORMATION_TYPES) {
      const f = DS_FORMATION_TYPES[k];
      const req = [];
      for (const t in f.requires) req.push(SHIP_TYPES[t].name + '×' + f.requires[t]);
      h += '<div class="ds-card"><h4>' + f.name + '</h4><p>' + this.esc(f.desc) + '</p><p>需要：' + req.join('、') + '</p></div>';
    }
    h += '</div>';
    h += '<h3>碎片实验室</h3><p>已完成 ' + mgr.artifactLab.summary().completed.length + '/' +
      mgr.artifactLab.summary().total + ' 个项目</p><div class="ds-grid">';
    for (let i = 0; i < DS_ARTIFACT_PROJECTS.length; i++) {
      const p = DS_ARTIFACT_PROJECTS[i];
      const done = mgr.artifactLab.isDone(p.id);
      h += '<div class="ds-card"><h4>' + (done ? '✅ ' : '') + p.name + '</h4><p>' + this.esc(p.desc) + '</p>' +
        '<p>费用：' + this.costHtml(p.cost) + ' · 研究 ' + p.hours + ' 小时 · 需要科学家 ' + p.requires.scientists + ' 名</p>' +
        (done ? '' : '<button data-ds-action="artifact-research" data-project="' + p.id + '">开始研究</button>') + '</div>';
    }
    h += '</div>';
    h += '<h3>柯伊伯带</h3><p>已发现 ' + mgr.kuiper.summary().discovered + '/' + mgr.kuiper.summary().total +
      ' · 累计开采 ' + mgr.kuiper.summary().totalMined + ' 吨</p>';
    h += '<h3>最近发射</h3><ul class="ds-log">';
    for (let i = 0; i < s.recent.length; i++) {
      const l = s.recent[i];
      h += '<li><span class="ds-t">' + dsv3FmtTime(l.t) + '</span> ' + this.esc(l.method) + ' · ' +
        DS_RESOURCES[l.res].name + ' ' + l.tons + ' 吨' + (l.failed ? '（失败损毁）' : '（已送达）') + '</li>';
    }
    h += '</ul></div>';
    return h;
  },

  // —— 手册 ——
  guide: function () {
    let h = '<div class="ds-panel ds-guide"><h2>📖 深空手册</h2>';
    for (let i = 0; i < DS_GUIDE.length; i++) {
      const g = DS_GUIDE[i];
      h += '<div class="ds-card"><h3>' + g.icon + ' ' + this.esc(g.title) + '</h3><ul>';
      for (let j = 0; j < g.body.length; j++) {
        h += '<li>' + this.esc(g.body[j]) + '</li>';
      }
      h += '</ul></div>';
    }
    h += '</div>';
    return h;
  },
});

// ================= 太阳天气系统 =================
// 太阳活动分 5 级（平静/活跃/耀斑/风暴/超级风暴），每 6–24 小时变化，
// 影响：太阳能产量、航行时间、事故率、通讯。预报提前 6 小时可见，
// 玩家可据此安排航行窗口。
const DS_SOLAR_WEATHER = {
  calm: {
    id: 'calm',
    name: '平静',
    icon: '🌤️',
    desc: '太阳活动平静，适合一切深空作业。',
    solarMul: 1.0, travelMul: 1.0, riskMul: 1.0, commsMul: 1.0,
    weight: 40,
  },
  active: {
    id: 'active',
    name: '活跃',
    icon: '🌞',
    desc: '太阳活动增强，太阳能 +10%，通讯略受干扰。',
    solarMul: 1.1, travelMul: 1.0, riskMul: 1.05, commsMul: 0.95,
    weight: 30,
  },
  flare: {
    id: 'flare',
    name: '耀斑',
    icon: '🔥',
    desc: 'M 级耀斑：太阳能 +25%，航行风险 +20%。',
    solarMul: 1.25, travelMul: 1.05, riskMul: 1.2, commsMul: 0.85,
    weight: 15,
  },
  storm: {
    id: 'storm',
    name: '太阳风暴',
    icon: '⛈️',
    desc: '太阳风暴：太阳能帆过载风险，航行时间 +15%，事故率 +40%。',
    solarMul: 0.6, travelMul: 1.15, riskMul: 1.4, commsMul: 0.7,
    weight: 10,
  },
  superstorm: {
    id: 'superstorm',
    name: '超级风暴',
    icon: '🌩️',
    desc: 'X 级超级风暴：太阳能帆停机，航行极度危险，建议停航。',
    solarMul: 0.2, travelMul: 1.3, riskMul: 1.8, commsMul: 0.5,
    weight: 5,
  },
};
const DS_SOLAR_WEATHER_KEYS = Object.keys(DS_SOLAR_WEATHER);

class DSSolarWeather {
  constructor() {
    this.current = 'calm';
    this.currentUntil = 0;
    this.forecast = [];   // [{weather, from, until}] 未来 24 小时预报
    this.history = [];
  }
  // 抽取下一天气（按权重，当前天气有 30% 概率延续）
  _pickNext(rng) {
    rng = rng || Math.random;
    if (rng() < 0.3) return this.current;
    let total = 0;
    for (let i = 0; i < DS_SOLAR_WEATHER_KEYS.length; i++) {
      total += DS_SOLAR_WEATHER[DS_SOLAR_WEATHER_KEYS[i]].weight;
    }
    let r = rng() * total;
    for (let i = 0; i < DS_SOLAR_WEATHER_KEYS.length; i++) {
      r -= DS_SOLAR_WEATHER[DS_SOLAR_WEATHER_KEYS[i]].weight;
      if (r <= 0) return DS_SOLAR_WEATHER_KEYS[i];
    }
    return 'calm';
  }
  // 推进：当前天气到期 → 换下一个，预报滚动
  update(nowSec, rng) {
    rng = rng || Math.random;
    if (!this.currentUntil) {
      this.currentUntil = nowSec + 12 * 3600;
      this._buildForecast(nowSec, rng);
      return null;
    }
    if (nowSec < this.currentUntil) return null;
    const prev = this.current;
    this.current = this._pickNext(rng);
    const durHours = 6 + Math.floor(rng() * 18);
    this.currentUntil = nowSec + durHours * 3600;
    this.history.push({ from: prev, to: this.current, t: Math.round(nowSec) });
    if (this.history.length > 50) this.history.splice(0, this.history.length - 50);
    this._buildForecast(nowSec, rng);
    return { from: prev, to: this.current, until: this.currentUntil };
  }
  _buildForecast(nowSec, rng) {
    this.forecast = [];
    let t = this.currentUntil;
    let w = this.current;
    for (let i = 0; i < 3; i++) {
      const next = this._pickNext(rng);
      const dur = 6 + Math.floor(rng() * 12);
      this.forecast.push({ weather: next, from: t, until: t + dur * 3600 });
      t += dur * 3600;
      w = next;
    }
  }
  currentDef() { return DS_SOLAR_WEATHER[this.current]; }
  solarMul() { return this.currentDef().solarMul; }
  travelMul() { return this.currentDef().travelMul; }
  riskMul() { return this.currentDef().riskMul; }
  commsMul() { return this.currentDef().commsMul; }
  // 未来某时刻的天气（预报内才准，之外返回当前）
  weatherAt(tSec) {
    if (tSec < this.currentUntil) return this.current;
    for (let i = 0; i < this.forecast.length; i++) {
      if (tSec >= this.forecast[i].from && tSec < this.forecast[i].until) {
        return this.forecast[i].weather;
      }
    }
    return this.current;
  }
  summary() {
    return {
      current: this.current,
      currentName: this.currentDef().name,
      icon: this.currentDef().icon,
      desc: this.currentDef().desc,
      untilInSec: Math.max(0, this.currentUntil),
      solarMul: this.solarMul(),
      travelMul: this.travelMul(),
      riskMul: this.riskMul(),
      forecast: this.forecast.map(function (f) {
        return {
          weather: f.weather,
          name: DS_SOLAR_WEATHER[f.weather].name,
          from: f.from, until: f.until,
        };
      }),
    };
  }
  save() {
    return {
      current: this.current, currentUntil: this.currentUntil,
      forecast: this.forecast, history: this.history,
    };
  }
  load(data) {
    if (!data) return;
    this.current = data.current || 'calm';
    this.currentUntil = data.currentUntil || 0;
    this.forecast = data.forecast || [];
    this.history = data.history || [];
  }
}

// ================= 飞船蓝图变体 =================
// 每型飞船 3 种蓝图变体：改装方向不同（造价/属性各异），
// 在船坞建造时选择。变体是同一船型的改装方案，不是新船型。
const DS_SHIP_BLUEPRINTS = {
  transport: [
    {
      id: 'transport-std',
      name: '标准型',
      desc: '均衡的货运配置。',
      costMul: 1.0, cargoMul: 1.0, speedMul: 1.0, hullMul: 1.0, fuelMul: 1.0,
    },
    {
      id: 'transport-heavy',
      name: '重载型',
      desc: '加固货舱与结构：载荷 +40%，速度 -15%，船体 +20%。',
      costMul: 1.3, cargoMul: 1.4, speedMul: 0.85, hullMul: 1.2, fuelMul: 1.1,
      extraCost: { titanium: 40 },
    },
    {
      id: 'transport-fast',
      name: '快速型',
      desc: '轻量化船体与大功率引擎：速度 +30%，载荷 -20%，油耗 +15%。',
      costMul: 1.25, cargoMul: 0.8, speedMul: 1.3, hullMul: 0.9, fuelMul: 1.15,
      extraCost: { rare: 60 },
    },
  ],
  miner: [
    {
      id: 'miner-std',
      name: '标准型',
      desc: '均衡的采矿配置。',
      costMul: 1.0, cargoMul: 1.0, speedMul: 1.0, hullMul: 1.0, fuelMul: 1.0, miningMul: 1.0,
    },
    {
      id: 'miner-deep',
      name: '深采型',
      desc: '重型采矿激光：采矿速率 +50%，载荷 -10%，油耗 +10%。',
      costMul: 1.4, cargoMul: 0.9, speedMul: 1.0, hullMul: 1.1, fuelMul: 1.1, miningMul: 1.5,
      extraCost: { titanium: 80, platinum: 10 },
    },
    {
      id: 'miner-hauler',
      name: '矿运型',
      desc: '采矿 + 运输兼顾：载荷 +50%，采矿速率 -20%。',
      costMul: 1.2, cargoMul: 1.5, speedMul: 0.95, hullMul: 1.0, fuelMul: 1.05, miningMul: 0.8,
      extraCost: { steel: 100 },
    },
  ],
  explorer: [
    {
      id: 'explorer-std',
      name: '标准型',
      desc: '均衡的探索配置。',
      costMul: 1.0, cargoMul: 1.0, speedMul: 1.0, hullMul: 1.0, fuelMul: 1.0, scanMul: 1.0,
    },
    {
      id: 'explorer-long',
      name: '远航型',
      desc: '超大燃料箱与维生系统：油耗 -30%，速度 -10%，载荷 +20%。',
      costMul: 1.35, cargoMul: 1.2, speedMul: 0.9, hullMul: 1.0, fuelMul: 0.7, scanMul: 1.0,
      extraCost: { titanium: 50 },
    },
    {
      id: 'explorer-survey',
      name: '勘测型',
      desc: '顶级传感器阵列：勘测加成 +50%，船体 -15%。',
      costMul: 1.3, cargoMul: 1.0, speedMul: 1.05, hullMul: 0.85, fuelMul: 1.0, scanMul: 1.5,
      extraCost: { rare: 100, tech: 30 },
    },
  ],
};

// 蓝图变体应用到一艘船：返回调整后的派生属性（不改基础定义）
function dsBlueprintFor(ship) {
  if (!ship || !ship.blueprint) return null;
  const list = DS_SHIP_BLUEPRINTS[ship.type] || [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === ship.blueprint) return list[i];
  }
  return null;
}
function dsBlueprintCost(type, blueprintId) {
  const list = DS_SHIP_BLUEPRINTS[type] || [];
  const bp = list.find(function (b) { return b.id === blueprintId; });
  if (!bp) return null;
  const base = SHIP_TYPES[type];
  const cost = {};
  for (const k in base.cost) cost[k] = Math.ceil(base.cost[k] * (bp.costMul || 1));
  if (bp.extraCost) {
    for (const k in bp.extraCost) cost[k] = (cost[k] || 0) + bp.extraCost[k];
  }
  return cost;
}

// ================= 远征链 =================
// 6 条远征链：完成前置任务解锁下一环，链末给大奖。
// 链式任务不可重复，进度跨存档保留。
const DS_EXPEDITION_CHAINS = [
  {
    id: 'chain-ruins',
    name: '遗迹三部曲',
    desc: 'α → β → γ，三处遗迹的完整探索链。',
    steps: ['exp-ruin-alpha', 'exp-ruin-beta', 'exp-ruin-gamma'],
    finalReward: { artifact: 5, tech: 200 },
  },
  {
    id: 'chain-belt',
    name: '小行星带征服者',
    desc: '普查 → 氦-3 采集 → 稀土争夺，带内作业的进阶链。',
    steps: ['exp-belt-survey', 'exp-he3-rush', 'exp-rare-vein'],
    finalReward: { titanium: 200, platinum: 50, tech: 150 },
  },
  {
    id: 'chain-rescue',
    name: '深空救援队',
    desc: '失联货船 → 医疗撤离 → 轨道火灾，三次救援。',
    steps: ['exp-rescue-derelict', 'exp-medical-evac', 'exp-orbital-rescue'],
    finalReward: { steel: 500, tech: 150 },
  },
  {
    id: 'chain-science',
    name: '深空科学',
    desc: '火卫二调查 → 彗星采样 → 太阳探测 → 深空冷冻样本。',
    steps: ['exp-deimos-survey', 'exp-comet-intercept', 'exp-solar-probe', 'exp-deep-freeze'],
    finalReward: { tech: 400, artifact: 3 },
  },
  {
    id: 'chain-contact',
    name: '接触之路',
    desc: '幽灵信号 → 遗迹 γ 远征 → 第一次接触。',
    steps: ['exp-ghost-signal', 'exp-ruin-gamma', 'exp-first-contact'],
    finalReward: { artifact: 10, tech: 500, helium3: 100 },
  },
  {
    id: 'chain-pirate',
    name: '海盗猎手',
    desc: '稀土争夺（遭遇海盗）→ 清剿海盗巢穴。',
    steps: ['exp-rare-vein', 'exp-pirate-hunt'],
    finalReward: { steel: 600, rare: 200, platinum: 80 },
  },
];

class DSExpeditionChains {
  constructor() {
    this.claimed = {};   // {chainId: true} 已领终奖
  }
  // 某链当前进度（已完成步数）
  progress(chain, expeditions) {
    let done = 0;
    for (let i = 0; i < chain.steps.length; i++) {
      if (expeditions.completedDefIds[chain.steps[i]]) done++;
    }
    return done;
  }
  // 链是否全部完成
  isComplete(chain, expeditions) {
    return this.progress(chain, expeditions) >= chain.steps.length;
  }
  // 下一步任务（未完成的第一步）
  nextStep(chain, expeditions) {
    for (let i = 0; i < chain.steps.length; i++) {
      if (!expeditions.completedDefIds[chain.steps[i]]) return chain.steps[i];
    }
    return null;
  }
  // 领取终奖
  claim(chainId, expeditions, stock, nowSec) {
    const chain = DS_EXPEDITION_CHAINS.find(function (c) { return c.id === chainId; });
    if (!chain) return { ok: false, reason: '未知远征链' };
    if (this.claimed[chainId]) return { ok: false, reason: '终奖已领取' };
    if (!this.isComplete(chain, expeditions)) {
      return { ok: false, reason: '远征链未完成（' + this.progress(chain, expeditions) + '/' + chain.steps.length + '）' };
    }
    for (const k in chain.finalReward) stock[k] = (stock[k] || 0) + chain.finalReward[k];
    this.claimed[chainId] = true;
    return { ok: true, reward: chain.finalReward };
  }
  summary(expeditions) {
    const out = [];
    for (let i = 0; i < DS_EXPEDITION_CHAINS.length; i++) {
      const c = DS_EXPEDITION_CHAINS[i];
      out.push({
        id: c.id, name: c.name, desc: c.desc,
        progress: this.progress(c, expeditions),
        total: c.steps.length,
        complete: this.isComplete(c, expeditions),
        claimed: !!this.claimed[c.id],
        next: this.nextStep(c, expeditions),
        finalReward: c.finalReward,
      });
    }
    return out;
  }
  save() { return { claimed: this.claimed }; }
  load(data) {
    if (!data) return;
    this.claimed = data.claimed || {};
  }
}

// ================= 船员小队 =================
// 2–6 名船员组成固定小队：一起出任务积累默契（0–100），
// 默契提升全队效率（最高 +15%）与事故率降低。
class DSCrewSquad {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || ('squad-' + Math.floor(Math.random() * 1e9).toString(36));
    this.name = opts.name || '小队';
    this.memberIds = opts.memberIds || [];
    this.cohesion = opts.cohesion || 0;
    this.missionsTogether = opts.missionsTogether || 0;
    this.createdAt = opts.createdAt || 0;
  }
  // 默契加成：效率 +0~15%
  cohesionBonus() { return this.cohesion / 100 * 0.15; }
  // 一起完成一次任务：默契 +3（上限 100）
  recordMission(success) {
    this.missionsTogether++;
    if (success) this.cohesion = Math.min(100, this.cohesion + 3);
    else this.cohesion = Math.max(0, this.cohesion - 2);
  }
  summary(crewMgr) {
    const members = [];
    for (let i = 0; i < this.memberIds.length; i++) {
      const c = crewMgr ? crewMgr.get(this.memberIds[i]) : null;
      if (c) members.push({ id: c.id, name: c.name, role: c.role, level: c.level });
    }
    return {
      id: this.id, name: this.name, members: members,
      cohesion: Math.round(this.cohesion),
      cohesionBonusPct: Math.round(this.cohesionBonus() * 100),
      missionsTogether: this.missionsTogether,
    };
  }
  save() {
    return {
      id: this.id, name: this.name, memberIds: this.memberIds,
      cohesion: this.cohesion, missionsTogether: this.missionsTogether,
      createdAt: this.createdAt,
    };
  }
  static load(data) { return new DSCrewSquad(data || {}); }
}

class DSCrewSquads {
  constructor() {
    this.squads = [];
  }
  get(id) {
    for (let i = 0; i < this.squads.length; i++) {
      if (this.squads[i].id === id) return this.squads[i];
    }
    return null;
  }
  squadOf(crewId) {
    for (let i = 0; i < this.squads.length; i++) {
      if (this.squads[i].memberIds.indexOf(crewId) >= 0) return this.squads[i];
    }
    return null;
  }
  create(name, memberIds, crewMgr, nowSec) {
    if (memberIds.length < 2 || memberIds.length > 6) {
      return { ok: false, reason: '小队需要 2–6 名船员' };
    }
    for (let i = 0; i < memberIds.length; i++) {
      const c = crewMgr ? crewMgr.get(memberIds[i]) : null;
      if (!c) return { ok: false, reason: '找不到船员：' + memberIds[i] };
      if (this.squadOf(memberIds[i])) return { ok: false, reason: c.name + ' 已在其他小队' };
    }
    const squad = new DSCrewSquad({ name: name, memberIds: memberIds.slice(), createdAt: nowSec });
    this.squads.push(squad);
    return { ok: true, squad: squad };
  }
  disband(id) {
    const idx = this.squads.findIndex(function (s) { return s.id === id; });
    if (idx < 0) return { ok: false, reason: '找不到该小队' };
    const s = this.squads[idx];
    this.squads.splice(idx, 1);
    return { ok: true, squad: s };
  }
  // 一组船员是否同属一小队（用于远征默契加成）
  sharedSquadBonus(crewIds) {
    if (crewIds.length < 2) return 0;
    const squad = this.squadOf(crewIds[0]);
    if (!squad) return 0;
    for (let i = 1; i < crewIds.length; i++) {
      if (squad.memberIds.indexOf(crewIds[i]) < 0) return 0;
    }
    return squad.cohesionBonus();
  }
  // 远征完成后更新小队默契
  recordExpedition(crewIds, success) {
    if (crewIds.length < 2) return;
    const squad = this.squadOf(crewIds[0]);
    if (!squad) return;
    for (let i = 1; i < crewIds.length; i++) {
      if (squad.memberIds.indexOf(crewIds[i]) < 0) return;
    }
    squad.recordMission(success);
  }
  summary(crewMgr) {
    return this.squads.map(function (s) { return s.summary(crewMgr); });
  }
  save() {
    return { squads: this.squads.map(function (s) { return s.save(); }) };
  }
  load(data) {
    if (!data) return;
    this.squads = (data.squads || []).map(function (s) { return DSCrewSquad.load(s); });
  }
}

// ================= 导出 =================
// 浏览器：挂到 window.DeepSpaceV3；Node：module.exports。
// game.js 接入时：new DeepSpaceV3() 即可，不需要其他初始化。
const DeepSpaceV3Exports = {
  DeepSpaceV3: DeepSpaceV3,
  DSOrbitalStation: DSOrbitalStation,
  DSLunarBase: DSLunarBase,
  DSBeltManager: DSBeltManager,
  DSAsteroid: DSAsteroid,
  DSFleetManager: DSFleetManager,
  DSShip: DSShip,
  DSCrewManager: DSCrewManager,
  DSCrewMember: DSCrewMember,
  DSExpeditionManager: DSExpeditionManager,
  DSExpedition: DSExpedition,
  DSRuinManager: DSRuinManager,
  DSRuinSite: DSRuinSite,
  DSDeepSpaceMap: DSDeepSpaceMap,
  DSTechTree: DSTechTree,
  DSEventDeck: DSEventDeck,
  DSContractBoard: DSContractBoard,
  DSExchange: DSExchange,
  DSMilestones: DSMilestones,
  DSAutoOps: DSAutoOps,
  DSValidator: DSValidator,
  DSUI: DSUI,
  DSMapRenderer: DSMapRenderer,
  DSActions: DSActions,
  DSDepot: DSDepot,
  DSDepotNetwork: DSDepotNetwork,
  DSFlightPlan: DSFlightPlan,
  DSArtifactLab: DSArtifactLab,
  DSCareerTracker: DSCareerTracker,
  DSVoyageLog: DSVoyageLog,
  DSLogistics: DSLogistics,
  DSKuiperBelt: DSKuiperBelt,
  DSOutpost: DSOutpost,
  DSOutpostManager: DSOutpostManager,
  DSFormation: DSFormation,
  DSFormationManager: DSFormationManager,
  DS_GUIDE: DS_GUIDE,
  DSSolarWeather: DSSolarWeather,
  DS_SOLAR_WEATHER: DS_SOLAR_WEATHER,
  DS_SHIP_BLUEPRINTS: DS_SHIP_BLUEPRINTS,
  dsBlueprintFor: dsBlueprintFor,
  dsBlueprintCost: dsBlueprintCost,
  DS_EXPEDITION_CHAINS: DS_EXPEDITION_CHAINS,
  DSExpeditionChains: DSExpeditionChains,
  DSCrewSquad: DSCrewSquad,
  DSCrewSquads: DSCrewSquads,
  dsExpeditionReport: dsExpeditionReport,
  dsAsteroidReport: dsAsteroidReport,
  DS_DEPOT_DEFS: DS_DEPOT_DEFS,
  DS_ARTIFACT_PROJECTS: DS_ARTIFACT_PROJECTS,
  DS_MEDALS: DS_MEDALS,
  DS_SCENARIOS: DS_SCENARIOS,
  dsApplyScenario: dsApplyScenario,
  dsMigrateFromV1: dsMigrateFromV1,
  dsBalanceReport: dsBalanceReport,
  DEEPSPACE_V3_VERSION: DEEPSPACE_V3_VERSION,
  SHIP_TYPES: SHIP_TYPES,
  SHIP_UPGRADES: SHIP_UPGRADES,
  STATION_MODULES: STATION_MODULES,
  MOON_BUILDINGS: MOON_BUILDINGS,
  ASTEROID_TYPES: ASTEROID_TYPES,
  BELT_ZONES: BELT_ZONES,
  CREW_ROLES: CREW_ROLES,
  CREW_TRAINING: CREW_TRAINING,
  EXPEDITION_DEFS: EXPEDITION_DEFS,
  RUIN_DEFS: RUIN_DEFS,
  DS_TECH_DEFS: DS_TECH_DEFS,
  DS_EVENT_DEFS: DS_EVENT_DEFS,
  DS_MILESTONES: DS_MILESTONES,
  DS_MAP_NODES: DS_MAP_NODES,
  DS_MAP_ROUTES: DS_MAP_ROUTES,
  DS_RESOURCES: DS_RESOURCES,
  DS_TUNE: DS_TUNE_V3,
};

if (typeof window !== 'undefined') {
  window.DeepSpaceV3 = DeepSpaceV3;
  window.DeepSpaceV3Exports = DeepSpaceV3Exports;
  window.DSUI = DSUI;
  window.DSMapRenderer = DSMapRenderer;
  window.DSActions = DSActions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DeepSpaceV3Exports;
}
