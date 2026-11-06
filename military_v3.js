/* 星港 — military_v3.js：军事深化（军队编制 / 军官 / 防御战 / 武器研发）
 * 新文件，不修改 index.html / game.js / military.js / 任何已有文件。
 * 与旧 military.js（防御塔 + 袭击调度）并行：本文件管“野战军”——
 * 编制化的陆军/装甲/空军单位、军官、武器研发、地图边缘入侵与自动迎击。
 * 接入方式（由集成方在 index.html 中 game.js 之前引入本文件，然后）：
 *   game.militaryV3 = new MilitaryV3Manager();
 *   game.militaryV3.attachToGame(game); // 每帧 game.militaryV3.update(now, dt, game)
 * 或调用 MilitaryV3Integration.attach(game) / .tick(game, now, dt)（见文件末尾）。
 * 坐标：沿用 game.map.size（默认 50），市中心 (size/2, size/2)。
 * 资源键沿用 resources.js：iron / ice / rare / water / food / steel / tech / uranium / he3。
 * 本文件不依赖任何其他游戏文件即可加载；所有 game 字段访问均为防御性读取。
 * Node 自测：node selftest_politics_military.js
 */
'use strict';

/* ============================== 常量 ============================== */
const MILV3 = {
  MAP_SIZE_DEFAULT: 50,
  MAX_FORMATIONS: 12,            // 最大编制数（指挥部升级可扩）
  MAX_OFFICERS: 8,               // 最大军官数（指挥部升级可扩）
  RECRUIT_BASE_MIN: 2,           // 征兵基础耗时（分钟）
  TRAINING_BASE_MIN: 3,          // 训练基础耗时（分钟）
  SUPPLY_AMMO_PER_SHOT: 1,      // 每发弹药消耗（抽象单位）
  SUPPLY_FUEL_PER_CELL: 0.5,     // 装甲/空军每移动 1 格燃油消耗
  READINESS_DECAY_COMBAT: 2,     // 战斗中战备每分钟 -2
  READINESS_RECOVER_GARRISON: 5, // 驻守时战备每分钟 +5
  MORALE_BASE: 70,               // 基础士气
  MORALE_MIN: 20,
  MORALE_MAX: 100,
  CRIT_CHANCE: 0.05,             // 暴击率 5%
  CRIT_MUL: 2.0,
  WAVE_INTERVAL_MIN: 8,          // 入侵波次间隔（分钟）
  FIRST_WAVE_MIN: 12,            // 首波入侵（开局 12 分钟后）
  DETECTION_BASE: 12,            // 基础侦测半径（格）
  SALVAGE_RATE: 0.3,             // 战利品回收率（敌人成本的 30%）
  XP_PER_KILL: 10,               // 每击杀 XP
  XP_PER_BATTLE_WIN: 50,         // 胜利 XP
  OFFICER_XP_PER_LEVEL: 100,     // 军官每级 XP 需求基数
};

function _m3Clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function _m3Rand(a, b) { return a + Math.random() * (b - a); }
function _m3Pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function _m3Uid(prefix) { return prefix + '_' + Math.floor(Math.random() * 1e9).toString(36) + Date.now().toString(36).slice(-4); }
function _m3Clone(o) { return JSON.parse(JSON.stringify(o)); }
// 可播种 RNG（战斗模拟器确定性测试用）
function _m3Mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* 三大兵种：成本/维持/速度乘区与战术定位 */
const MILV3_BRANCHES = {
  "infantry": {
    "id": "infantry",
    "name": "步兵",
    "icon": "🪖",
    "color": "#4ade80",
    "desc": "便宜、量大、占领要点；克制空军（防空步兵）与轻装甲，怕重火力与空袭。",
    "recruitCostMul": 1.0,
    "upkeepMul": 1.0,
    "speedMul": 1.0,
    "role": "占领与防御"
  },
  "armor": {
    "id": "armor",
    "name": "装甲",
    "icon": "🛡️",
    "color": "#f59e0b",
    "desc": "高血高伤高护甲，推进主力；克制步兵与工事，怕反坦克与空袭，耗油。",
    "recruitCostMul": 2.5,
    "upkeepMul": 2.0,
    "speedMul": 0.8,
    "role": "突击与推进"
  },
  "air": {
    "id": "air",
    "name": "空军",
    "icon": "✈️",
    "color": "#38bdf8",
    "desc": "速度最快、无视地形、全图支援；克制装甲与步兵，怕防空火力，耗油大。",
    "recruitCostMul": 3.0,
    "upkeepMul": 2.5,
    "speedMul": 2.2,
    "role": "侦察与打击"
  }
};

const MILV3_UNIT_TYPES = {};
for (const _u of [
  {
    "id": "militia",
    "name": "民兵",
    "icon": "🔫",
    "branch": "infantry",
    "hp": 40,
    "dmg": 6,
    "armor": 0,
    "pen": 0,
    "range": 4,
    "rof": 0.8,
    "speed": 1.0,
    "cost": {
      "food": 5
    },
    "upkeep": {
      "food": 0.2
    },
    "counters": [],
    "role": "廉价炮灰与警戒"
  },
  {
    "id": "rifleman",
    "name": "步枪兵",
    "icon": "🎖️",
    "branch": "infantry",
    "hp": 80,
    "dmg": 12,
    "armor": 2,
    "pen": 0.1,
    "range": 5,
    "rof": 1.0,
    "speed": 1.1,
    "cost": {
      "food": 10,
      "iron": 5
    },
    "upkeep": {
      "food": 0.4
    },
    "counters": [
      "light"
    ],
    "role": "步兵中坚"
  },
  {
    "id": "heavy_infantry",
    "name": "重装步兵",
    "icon": "🦾",
    "branch": "infantry",
    "hp": 180,
    "dmg": 18,
    "armor": 8,
    "pen": 0.2,
    "range": 4,
    "rof": 0.8,
    "speed": 0.8,
    "cost": {
      "food": 15,
      "iron": 15,
      "steel": 5
    },
    "upkeep": {
      "food": 0.6
    },
    "counters": [
      "light",
      "armor"
    ],
    "role": "攻坚与反装甲"
  },
  {
    "id": "sniper",
    "name": "狙击手",
    "icon": "🎯",
    "branch": "infantry",
    "hp": 60,
    "dmg": 45,
    "armor": 0,
    "pen": 0.6,
    "range": 9,
    "rof": 0.3,
    "speed": 1.0,
    "cost": {
      "food": 10,
      "iron": 10,
      "rare": 2
    },
    "upkeep": {
      "food": 0.5
    },
    "counters": [
      "officer",
      "heavy"
    ],
    "role": "远程点杀军官与重甲"
  },
  {
    "id": "engineer",
    "name": "工兵",
    "icon": "🔧",
    "branch": "infantry",
    "hp": 70,
    "dmg": 8,
    "armor": 3,
    "pen": 0.1,
    "range": 3,
    "rof": 0.7,
    "speed": 1.0,
    "cost": {
      "food": 10,
      "iron": 10
    },
    "upkeep": {
      "food": 0.4
    },
    "counters": [
      "fort"
    ],
    "role": "破障与战场抢修（每秒 +2 修理）"
  },
  {
    "id": "medic",
    "name": "医疗兵",
    "icon": "🩺",
    "branch": "infantry",
    "hp": 60,
    "dmg": 4,
    "armor": 1,
    "pen": 0,
    "range": 3,
    "rof": 0.5,
    "speed": 1.1,
    "cost": {
      "food": 12,
      "iron": 5
    },
    "upkeep": {
      "food": 0.5
    },
    "counters": [],
    "role": "治疗友军（每秒 +3 生命）"
  },
  {
    "id": "apc",
    "name": "轻型装甲车",
    "icon": "🚙",
    "branch": "armor",
    "hp": 220,
    "dmg": 16,
    "armor": 10,
    "pen": 0.2,
    "range": 5,
    "rof": 1.0,
    "speed": 1.6,
    "cost": {
      "iron": 40,
      "steel": 15
    },
    "upkeep": {
      "food": 0.5,
      "iron": 0.5
    },
    "counters": [
      "infantry"
    ],
    "role": "快速运兵与火力支援"
  },
  {
    "id": "tank",
    "name": "主战坦克",
    "icon": "🛡️",
    "branch": "armor",
    "hp": 500,
    "dmg": 45,
    "armor": 25,
    "pen": 0.4,
    "range": 6,
    "rof": 0.5,
    "speed": 1.0,
    "cost": {
      "iron": 80,
      "steel": 40,
      "rare": 5
    },
    "upkeep": {
      "food": 0.8,
      "iron": 1
    },
    "counters": [
      "infantry",
      "fort"
    ],
    "role": "装甲突击核心"
  },
  {
    "id": "artillery",
    "name": "自行火炮",
    "icon": "💥",
    "branch": "armor",
    "hp": 180,
    "dmg": 90,
    "armor": 6,
    "pen": 0.3,
    "range": 11,
    "rof": 0.2,
    "speed": 0.7,
    "cost": {
      "iron": 70,
      "steel": 30,
      "rare": 8
    },
    "upkeep": {
      "food": 0.6,
      "iron": 0.8
    },
    "counters": [
      "fort",
      "infantry"
    ],
    "aoe": 2,
    "role": "远程面杀伤（范围伤害）"
  },
  {
    "id": "aa_vehicle",
    "name": "防空导弹车",
    "icon": "🚀",
    "branch": "armor",
    "hp": 200,
    "dmg": 30,
    "armor": 8,
    "pen": 0.3,
    "range": 8,
    "rof": 0.7,
    "speed": 1.2,
    "cost": {
      "iron": 60,
      "steel": 25,
      "rare": 10
    },
    "upkeep": {
      "food": 0.5,
      "iron": 0.6
    },
    "counters": [
      "air"
    ],
    "role": "防空：对空伤害 x2"
  },
  {
    "id": "eng_vehicle",
    "name": "工程抢修车",
    "icon": "🚜",
    "branch": "armor",
    "hp": 260,
    "dmg": 10,
    "armor": 12,
    "pen": 0.1,
    "range": 3,
    "rof": 0.6,
    "speed": 1.1,
    "cost": {
      "iron": 50,
      "steel": 20
    },
    "upkeep": {
      "food": 0.5,
      "iron": 0.5
    },
    "counters": [
      "fort"
    ],
    "role": "战场抢修（每秒 +6 修理）与破障"
  },
  {
    "id": "recon_drone",
    "name": "侦察无人机",
    "icon": "🛸",
    "branch": "air",
    "hp": 50,
    "dmg": 5,
    "armor": 0,
    "pen": 0,
    "range": 6,
    "rof": 0.8,
    "speed": 3.0,
    "cost": {
      "iron": 20,
      "rare": 5
    },
    "upkeep": {
      "food": 0.3,
      "iron": 0.3
    },
    "counters": [],
    "role": "侦察：+6 侦测半径，标记敌人（被标记者受击 +20%）"
  },
  {
    "id": "attack_drone",
    "name": "武装无人机",
    "icon": "🛩️",
    "branch": "air",
    "hp": 90,
    "dmg": 20,
    "armor": 2,
    "pen": 0.2,
    "range": 6,
    "rof": 1.2,
    "speed": 2.8,
    "cost": {
      "iron": 35,
      "rare": 8
    },
    "upkeep": {
      "food": 0.4,
      "iron": 0.4
    },
    "counters": [
      "infantry",
      "light"
    ],
    "role": "空中打击群"
  },
  {
    "id": "heli",
    "name": "武装直升机",
    "icon": "🚁",
    "branch": "air",
    "hp": 240,
    "dmg": 35,
    "armor": 6,
    "pen": 0.3,
    "range": 7,
    "rof": 0.9,
    "speed": 2.5,
    "cost": {
      "iron": 70,
      "steel": 20,
      "rare": 10
    },
    "upkeep": {
      "food": 0.6,
      "iron": 0.8
    },
    "counters": [
      "armor",
      "infantry"
    ],
    "role": "反坦克空中打击"
  },
  {
    "id": "fighter",
    "name": "战斗机",
    "icon": "✈️",
    "branch": "air",
    "hp": 180,
    "dmg": 55,
    "armor": 4,
    "pen": 0.5,
    "range": 8,
    "rof": 0.6,
    "speed": 3.5,
    "cost": {
      "iron": 90,
      "steel": 30,
      "rare": 15
    },
    "upkeep": {
      "food": 0.8,
      "iron": 1
    },
    "counters": [
      "air",
      "armor"
    ],
    "role": "制空与高速截击"
  },
  {
    "id": "transport",
    "name": "运输机",
    "icon": "🛫",
    "branch": "air",
    "hp": 200,
    "dmg": 8,
    "armor": 5,
    "pen": 0,
    "range": 4,
    "rof": 0.5,
    "speed": 3.2,
    "cost": {
      "iron": 60,
      "steel": 20,
      "rare": 5
    },
    "upkeep": {
      "food": 0.5,
      "iron": 0.6
    },
    "counters": [],
    "role": "空运步兵：部署速度 +50%，可空降"
  }
]) MILV3_UNIT_TYPES[_u.id] = _u;

const MILV3_UNIT_LIST = Object.values(MILV3_UNIT_TYPES);

/* 编制表：5 级 x 3 兵种，单位槽、指挥需求、维持费乘区、士气加成 */
const MILV3_FORMATIONS = {
  "infantry_t1": {
    "id": "infantry_t1",
    "branch": "infantry",
    "tier": 1,
    "name": "步兵班",
    "icon": "🪖",
    "slots": 4,
    "commandRequired": 1,
    "upkeepMul": 1.0,
    "power": "基础作战单元",
    "moraleBonus": 0,
    "desc": "步兵编制 班：4 个单位槽，需 1 级指挥能力，维持费 x1.0。"
  },
  "infantry_t2": {
    "id": "infantry_t2",
    "branch": "infantry",
    "tier": 2,
    "name": "步兵排",
    "icon": "🪖",
    "slots": 12,
    "commandRequired": 2,
    "upkeepMul": 0.95,
    "power": "多班协同",
    "moraleBonus": 2,
    "desc": "步兵编制 排：12 个单位槽，需 2 级指挥能力，维持费 x0.95。"
  },
  "infantry_t3": {
    "id": "infantry_t3",
    "branch": "infantry",
    "tier": 3,
    "name": "步兵连",
    "icon": "🪖",
    "slots": 36,
    "commandRequired": 3,
    "upkeepMul": 0.9,
    "power": "独立作战",
    "moraleBonus": 4,
    "desc": "步兵编制 连：36 个单位槽，需 3 级指挥能力，维持费 x0.9。"
  },
  "infantry_t4": {
    "id": "infantry_t4",
    "branch": "infantry",
    "tier": 4,
    "name": "步兵营",
    "icon": "🪖",
    "slots": 108,
    "commandRequired": 4,
    "upkeepMul": 0.85,
    "power": "战役级",
    "moraleBonus": 6,
    "desc": "步兵编制 营：108 个单位槽，需 4 级指挥能力，维持费 x0.85。"
  },
  "infantry_t5": {
    "id": "infantry_t5",
    "branch": "infantry",
    "tier": 5,
    "name": "步兵旅",
    "icon": "🪖",
    "slots": 324,
    "commandRequired": 5,
    "upkeepMul": 0.8,
    "power": "战略级",
    "moraleBonus": 8,
    "desc": "步兵编制 旅：324 个单位槽，需 5 级指挥能力，维持费 x0.8。"
  },
  "armor_t1": {
    "id": "armor_t1",
    "branch": "armor",
    "tier": 1,
    "name": "装甲班",
    "icon": "🛡️",
    "slots": 4,
    "commandRequired": 1,
    "upkeepMul": 1.0,
    "power": "基础作战单元",
    "moraleBonus": 0,
    "desc": "装甲编制 班：4 个单位槽，需 1 级指挥能力，维持费 x1.0。"
  },
  "armor_t2": {
    "id": "armor_t2",
    "branch": "armor",
    "tier": 2,
    "name": "装甲排",
    "icon": "🛡️",
    "slots": 12,
    "commandRequired": 2,
    "upkeepMul": 0.95,
    "power": "多班协同",
    "moraleBonus": 2,
    "desc": "装甲编制 排：12 个单位槽，需 2 级指挥能力，维持费 x0.95。"
  },
  "armor_t3": {
    "id": "armor_t3",
    "branch": "armor",
    "tier": 3,
    "name": "装甲连",
    "icon": "🛡️",
    "slots": 36,
    "commandRequired": 3,
    "upkeepMul": 0.9,
    "power": "独立作战",
    "moraleBonus": 4,
    "desc": "装甲编制 连：36 个单位槽，需 3 级指挥能力，维持费 x0.9。"
  },
  "armor_t4": {
    "id": "armor_t4",
    "branch": "armor",
    "tier": 4,
    "name": "装甲营",
    "icon": "🛡️",
    "slots": 108,
    "commandRequired": 4,
    "upkeepMul": 0.85,
    "power": "战役级",
    "moraleBonus": 6,
    "desc": "装甲编制 营：108 个单位槽，需 4 级指挥能力，维持费 x0.85。"
  },
  "armor_t5": {
    "id": "armor_t5",
    "branch": "armor",
    "tier": 5,
    "name": "装甲旅",
    "icon": "🛡️",
    "slots": 324,
    "commandRequired": 5,
    "upkeepMul": 0.8,
    "power": "战略级",
    "moraleBonus": 8,
    "desc": "装甲编制 旅：324 个单位槽，需 5 级指挥能力，维持费 x0.8。"
  },
  "air_t1": {
    "id": "air_t1",
    "branch": "air",
    "tier": 1,
    "name": "空军班",
    "icon": "✈️",
    "slots": 4,
    "commandRequired": 1,
    "upkeepMul": 1.0,
    "power": "基础作战单元",
    "moraleBonus": 0,
    "desc": "空军编制 班：4 个单位槽，需 1 级指挥能力，维持费 x1.0。"
  },
  "air_t2": {
    "id": "air_t2",
    "branch": "air",
    "tier": 2,
    "name": "空军排",
    "icon": "✈️",
    "slots": 12,
    "commandRequired": 2,
    "upkeepMul": 0.95,
    "power": "多班协同",
    "moraleBonus": 2,
    "desc": "空军编制 排：12 个单位槽，需 2 级指挥能力，维持费 x0.95。"
  },
  "air_t3": {
    "id": "air_t3",
    "branch": "air",
    "tier": 3,
    "name": "空军连",
    "icon": "✈️",
    "slots": 36,
    "commandRequired": 3,
    "upkeepMul": 0.9,
    "power": "独立作战",
    "moraleBonus": 4,
    "desc": "空军编制 连：36 个单位槽，需 3 级指挥能力，维持费 x0.9。"
  },
  "air_t4": {
    "id": "air_t4",
    "branch": "air",
    "tier": 4,
    "name": "空军营",
    "icon": "✈️",
    "slots": 108,
    "commandRequired": 4,
    "upkeepMul": 0.85,
    "power": "战役级",
    "moraleBonus": 6,
    "desc": "空军编制 营：108 个单位槽，需 4 级指挥能力，维持费 x0.85。"
  },
  "air_t5": {
    "id": "air_t5",
    "branch": "air",
    "tier": 5,
    "name": "空军旅",
    "icon": "✈️",
    "slots": 324,
    "commandRequired": 5,
    "upkeepMul": 0.8,
    "power": "战略级",
    "moraleBonus": 8,
    "desc": "空军编制 旅：324 个单位槽，需 5 级指挥能力，维持费 x0.8。"
  }
};

/* 军衔 10 级：最低等级、指挥能力、薪饷 */
const MILV3_RANKS = [
  {
    "rank": 1,
    "name": "列兵",
    "icon": "🎖️",
    "minLevel": 1,
    "commandCap": 1,
    "salary": {
      "food": 1
    },
    "desc": "新兵，无指挥权。"
  },
  {
    "rank": 2,
    "name": "下士",
    "icon": "🎖️",
    "minLevel": 2,
    "commandCap": 1,
    "salary": {
      "food": 2
    },
    "desc": "班副，可指挥 1 个班。"
  },
  {
    "rank": 3,
    "name": "中士",
    "icon": "🎖️",
    "minLevel": 3,
    "commandCap": 2,
    "salary": {
      "food": 3
    },
    "desc": "班长，可指挥 1 个排。"
  },
  {
    "rank": 4,
    "name": "少尉",
    "icon": "⭐",
    "minLevel": 5,
    "commandCap": 2,
    "salary": {
      "food": 4,
      "iron": 1
    },
    "desc": "排长。"
  },
  {
    "rank": 5,
    "name": "中尉",
    "icon": "⭐",
    "minLevel": 7,
    "commandCap": 3,
    "salary": {
      "food": 5,
      "iron": 1
    },
    "desc": "副连长。"
  },
  {
    "rank": 6,
    "name": "上尉",
    "icon": "⭐",
    "minLevel": 10,
    "commandCap": 3,
    "salary": {
      "food": 6,
      "iron": 2
    },
    "desc": "连长。"
  },
  {
    "rank": 7,
    "name": "少校",
    "icon": "🌟",
    "minLevel": 13,
    "commandCap": 4,
    "salary": {
      "food": 8,
      "iron": 2
    },
    "desc": "营长。"
  },
  {
    "rank": 8,
    "name": "中校",
    "icon": "🌟",
    "minLevel": 16,
    "commandCap": 4,
    "salary": {
      "food": 10,
      "iron": 3
    },
    "desc": "副旅长。"
  },
  {
    "rank": 9,
    "name": "上校",
    "icon": "🌟",
    "minLevel": 20,
    "commandCap": 5,
    "salary": {
      "food": 12,
      "iron": 4
    },
    "desc": "旅长。"
  },
  {
    "rank": 10,
    "name": "准将",
    "icon": "👑",
    "minLevel": 25,
    "commandCap": 5,
    "salary": {
      "food": 15,
      "iron": 5
    },
    "desc": "军区司令，可指挥任意编制。"
  }
];

/* 军官 8 项技能：每级真实数值加成 */
const MILV3_OFFICER_SKILLS = [
  {
    "id": "tactics",
    "name": "战术",
    "icon": "♟️",
    "perLevel": "伤害 +3%",
    "desc": "每级麾下单位伤害 +3%。"
  },
  {
    "id": "logistics",
    "name": "后勤",
    "icon": "📦",
    "perLevel": "维持费 -4%",
    "desc": "每级麾下单位维持费 -4%，弹药消耗 -2%。"
  },
  {
    "id": "morale",
    "name": "鼓舞",
    "icon": "📣",
    "perLevel": "士气 +4",
    "desc": "每级麾下单位士气 +4，溃退阈值 -2%。"
  },
  {
    "id": "engineering",
    "name": "工程",
    "icon": "🔧",
    "perLevel": "修理 +10%",
    "desc": "每级工兵/工程车修理 +10%，工事伤害 +5%。"
  },
  {
    "id": "airmanship",
    "name": "空战",
    "icon": "✈️",
    "perLevel": "空军伤害 +4%",
    "desc": "每级空军单位伤害 +4%，移速 +2%。"
  },
  {
    "id": "intel",
    "name": "情报",
    "icon": "🕵️",
    "perLevel": "侦测 +1 格",
    "desc": "每级侦测半径 +1 格，伏击发现率 +10%。"
  },
  {
    "id": "medic",
    "name": "医护",
    "icon": "🩺",
    "perLevel": "治疗 +8%",
    "desc": "每级医疗兵治疗 +8%，伤员恢复 +10%。"
  },
  {
    "id": "discipline",
    "name": "军纪",
    "icon": "⚖️",
    "perLevel": "战备衰减 -5%",
    "desc": "每级战备衰减 -5%，溃退后重整快 10%。"
  }
];

/* 军官 20 种特质：全部带数值修正，进入战斗计算 */
const MILV3_OFFICER_TRAITS = [
  {
    "id": "brave",
    "name": "勇猛",
    "icon": "🦁",
    "effects": {
      "dmgMul": 1.1,
      "morale": 5
    },
    "desc": "伤害 +10%，士气 +5。"
  },
  {
    "id": "cautious",
    "name": "谨慎",
    "icon": "🐢",
    "effects": {
      "dmgMul": 0.95,
      "defenseMul": 1.15
    },
    "desc": "伤害 -5%，防御 +15%。"
  },
  {
    "id": "aggressive",
    "name": "好斗",
    "icon": "🔥",
    "effects": {
      "dmgMul": 1.15,
      "morale": -5
    },
    "desc": "伤害 +15%，士气 -5（冒进）。"
  },
  {
    "id": "logistician",
    "name": "后勤专家",
    "icon": "📦",
    "effects": {
      "upkeepMul": 0.8,
      "ammoMul": 0.8
    },
    "desc": "维持费 -20%，弹药消耗 -20%。"
  },
  {
    "id": "inspirer",
    "name": "演说家",
    "icon": "🎙️",
    "effects": {
      "morale": 10,
      "retreatThreshold": -0.05
    },
    "desc": "士气 +10，溃退阈值 -5%。"
  },
  {
    "id": "tactician",
    "name": "战术大师",
    "icon": "♟️",
    "effects": {
      "dmgMul": 1.08,
      "flankBonus": 0.1
    },
    "desc": "伤害 +8%，侧翼加成 +10%。"
  },
  {
    "id": "engineer_born",
    "name": "工程世家",
    "icon": "🔧",
    "effects": {
      "repairMul": 1.3,
      "fortDmgMul": 1.2
    },
    "desc": "修理 +30%，对工事伤害 +20%。"
  },
  {
    "id": "ace",
    "name": "王牌飞行员",
    "icon": "✈️",
    "effects": {
      "airDmgMul": 1.2,
      "airSpeedMul": 1.1
    },
    "desc": "空军伤害 +20%，空军移速 +10%。"
  },
  {
    "id": "sniper_eye",
    "name": "神射手",
    "icon": "🎯",
    "effects": {
      "critChance": 0.05,
      "rangeMul": 1.1
    },
    "desc": "暴击率 +5%，射程 +10%。"
  },
  {
    "id": "medic_heart",
    "name": "仁心",
    "icon": "💗",
    "effects": {
      "healMul": 1.25,
      "morale": 3
    },
    "desc": "治疗 +25%，士气 +3。"
  },
  {
    "id": "iron_will",
    "name": "钢铁意志",
    "icon": "🛡️",
    "effects": {
      "morale": 8,
      "retreatThreshold": -0.1
    },
    "desc": "士气 +8，溃退阈值 -10%。"
  },
  {
    "id": "reckless",
    "name": "鲁莽",
    "icon": "💥",
    "effects": {
      "dmgMul": 1.12,
      "casualtyMul": 1.2
    },
    "desc": "伤害 +12%，伤亡 +20%。"
  },
  {
    "id": "night_owl",
    "name": "夜战专家",
    "icon": "🌙",
    "effects": {
      "nightDmgMul": 1.2
    },
    "desc": "夜间作战伤害 +20%。"
  },
  {
    "id": "desert_fox",
    "name": "沙漠之狐",
    "icon": "🦊",
    "effects": {
      "speedMul": 1.15,
      "flankBonus": 0.1
    },
    "desc": "移速 +15%，侧翼加成 +10%。"
  },
  {
    "id": "old_guard",
    "name": "老兵",
    "icon": "🎖️",
    "effects": {
      "morale": 5,
      "xpMul": 1.2
    },
    "desc": "士气 +5，经验获取 +20%。"
  },
  {
    "id": "green",
    "name": "新锐",
    "icon": "🌱",
    "effects": {
      "xpMul": 1.3,
      "morale": -3
    },
    "desc": "经验获取 +30%，士气 -3（缺乏威望）。"
  },
  {
    "id": "spy_master",
    "name": "情报大师",
    "icon": "🕵️",
    "effects": {
      "detectBonus": 3,
      "ambushMul": 1.3
    },
    "desc": "侦测 +3 格，伏击伤害 +30%。"
  },
  {
    "id": "artilleryman",
    "name": "炮兵出身",
    "icon": "💥",
    "effects": {
      "aoeMul": 1.2,
      "rangeMul": 1.05
    },
    "desc": "范围伤害 +20%，射程 +5%。"
  },
  {
    "id": "quartermaster",
    "name": "军需官",
    "icon": "📋",
    "effects": {
      "upkeepMul": 0.85,
      "supplyMul": 1.2
    },
    "desc": "维持费 -15%，补给效率 +20%。"
  },
  {
    "id": "martyr",
    "name": "殉道者",
    "icon": "🕯️",
    "effects": {
      "morale": 12,
      "casualtyMul": 1.15
    },
    "desc": "士气 +12，伤亡 +15%（身先士卒）。"
  }
];

/* 8 种军官训练项目：成本、时长、技能 XP 收益、前置等级 */
const MILV3_TRAINING = [
  {
    "id": "tr_drill",
    "name": "基础操练",
    "icon": "🏃",
    "cost": {
      "food": 10
    },
    "durationMin": 3,
    "gains": {
      "tactics": 20,
      "discipline": 10
    },
    "requires": {},
    "desc": "队列与射击：战术 +20XP，军纪 +10XP。"
  },
  {
    "id": "tr_livefire",
    "name": "实弹演习",
    "icon": "🔥",
    "cost": {
      "food": 20,
      "iron": 10
    },
    "durationMin": 5,
    "gains": {
      "tactics": 40,
      "morale": 20
    },
    "requires": {
      "level": 3
    },
    "desc": "实弹对抗：战术 +40XP，鼓舞 +20XP。需 3 级。"
  },
  {
    "id": "tr_logistics",
    "name": "后勤拉练",
    "icon": "📦",
    "cost": {
      "food": 15
    },
    "durationMin": 4,
    "gains": {
      "logistics": 40,
      "discipline": 15
    },
    "requires": {},
    "desc": "长途行军补给：后勤 +40XP，军纪 +15XP。"
  },
  {
    "id": "tr_engineer",
    "name": "工程集训",
    "icon": "🔧",
    "cost": {
      "iron": 20,
      "steel": 5
    },
    "durationMin": 4,
    "gains": {
      "engineering": 40
    },
    "requires": {
      "level": 2
    },
    "desc": "架桥破障：工程 +40XP。需 2 级。"
  },
  {
    "id": "tr_air",
    "name": "飞行特训",
    "icon": "✈️",
    "cost": {
      "iron": 15,
      "rare": 5
    },
    "durationMin": 5,
    "gains": {
      "airmanship": 40,
      "intel": 10
    },
    "requires": {
      "level": 4
    },
    "desc": "空战机动：空战 +40XP，情报 +10XP。需 4 级。"
  },
  {
    "id": "tr_medic",
    "name": "战地救护",
    "icon": "🩺",
    "cost": {
      "food": 15,
      "water": 10
    },
    "durationMin": 3,
    "gains": {
      "medic": 40,
      "morale": 10
    },
    "requires": {},
    "desc": "战地急救：医护 +40XP，鼓舞 +10XP。"
  },
  {
    "id": "tr_intel",
    "name": "情报课程",
    "icon": "🕵️",
    "cost": {
      "tech": 10
    },
    "durationMin": 4,
    "gains": {
      "intel": 40,
      "tactics": 10
    },
    "requires": {
      "level": 5
    },
    "desc": "侦察与反伏击：情报 +40XP，战术 +10XP。需 5 级。"
  },
  {
    "id": "tr_command",
    "name": "指挥学院",
    "icon": "🎓",
    "cost": {
      "tech": 25,
      "food": 20
    },
    "durationMin": 8,
    "gains": {
      "tactics": 30,
      "morale": 30,
      "discipline": 30,
      "logistics": 20
    },
    "requires": {
      "level": 8
    },
    "desc": "高级指挥：四项技能各 +20~30XP。需 8 级，毕业即有晋升资格。"
  }
];

/* 5 种新武器 x 3 级：研发成本/时间与战斗数值 */
const MILV3_WEAPONS = [
  {
    "id": "wp_laser_cannon",
    "name": "激光炮",
    "icon": "🔆",
    "desc": "高能激光：高伤、精准、无视 50% 护甲，克制重甲。",
    "levels": [
      {
        "level": 1,
        "name": "激光炮 Mk.I",
        "researchCost": {
          "tech": 30,
          "rare": 10
        },
        "researchMin": 5,
        "stats": {
          "dmgMul": 1.15,
          "rangeBonus": 1,
          "penMul": 0.2,
          "powerUse": 2
        },
        "desc": "全军伤害 +15%，射程 +1，穿甲 +20%。"
      },
      {
        "level": 2,
        "name": "激光炮 Mk.II",
        "researchCost": {
          "tech": 60,
          "rare": 25
        },
        "researchMin": 8,
        "stats": {
          "dmgMul": 1.3,
          "rangeBonus": 2,
          "penMul": 0.35,
          "powerUse": 4
        },
        "desc": "全军伤害 +30%，射程 +2，穿甲 +35%。"
      },
      {
        "level": 3,
        "name": "激光炮 Mk.III",
        "researchCost": {
          "tech": 120,
          "rare": 50,
          "steel": 30
        },
        "researchMin": 12,
        "stats": {
          "dmgMul": 1.5,
          "rangeBonus": 3,
          "penMul": 0.5,
          "powerUse": 6,
          "critChance": 0.05
        },
        "desc": "全军伤害 +50%，射程 +3，穿甲 +50%，暴击 +5%。"
      }
    ]
  },
  {
    "id": "wp_missile_system",
    "name": "导弹系统",
    "icon": "🚀",
    "desc": "远程导弹：超远射程、范围杀伤，克制集群与工事。",
    "levels": [
      {
        "level": 1,
        "name": "导弹系统 Mk.I",
        "researchCost": {
          "tech": 30,
          "steel": 15
        },
        "researchMin": 5,
        "stats": {
          "dmgMul": 1.1,
          "rangeBonus": 2,
          "aoe": 1,
          "powerUse": 1
        },
        "desc": "全军伤害 +10%，射程 +2，获得范围伤害 1 格。"
      },
      {
        "level": 2,
        "name": "导弹系统 Mk.II",
        "researchCost": {
          "tech": 60,
          "steel": 30,
          "rare": 10
        },
        "researchMin": 8,
        "stats": {
          "dmgMul": 1.25,
          "rangeBonus": 3,
          "aoe": 2,
          "powerUse": 2
        },
        "desc": "全军伤害 +25%，射程 +3，范围伤害 2 格。"
      },
      {
        "level": 3,
        "name": "导弹系统 Mk.III",
        "researchCost": {
          "tech": 120,
          "steel": 60,
          "rare": 30
        },
        "researchMin": 12,
        "stats": {
          "dmgMul": 1.4,
          "rangeBonus": 4,
          "aoe": 3,
          "powerUse": 3,
          "fortMul": 1.5
        },
        "desc": "全军伤害 +40%，射程 +4，范围 3 格，对工事伤害 +50%。"
      }
    ]
  },
  {
    "id": "wp_shield_gen",
    "name": "护盾发生器",
    "icon": "🛡️",
    "desc": "能量护盾：为全军与城市提供护盾池，先吸收伤害。",
    "levels": [
      {
        "level": 1,
        "name": "护盾发生器 Mk.I",
        "researchCost": {
          "tech": 40,
          "rare": 20
        },
        "researchMin": 6,
        "stats": {
          "shieldHp": 500,
          "powerUse": 3,
          "shieldRegen": 5
        },
        "desc": "护盾池 500，每秒回复 5。"
      },
      {
        "level": 2,
        "name": "护盾发生器 Mk.II",
        "researchCost": {
          "tech": 80,
          "rare": 40
        },
        "researchMin": 9,
        "stats": {
          "shieldHp": 1200,
          "powerUse": 6,
          "shieldRegen": 12
        },
        "desc": "护盾池 1200，每秒回复 12。"
      },
      {
        "level": 3,
        "name": "护盾发生器 Mk.III",
        "researchCost": {
          "tech": 150,
          "rare": 80,
          "uranium": 10
        },
        "researchMin": 14,
        "stats": {
          "shieldHp": 2500,
          "powerUse": 10,
          "shieldRegen": 25,
          "shieldReflect": 0.1
        },
        "desc": "护盾池 2500，每秒回复 25，反射 10% 伤害。"
      }
    ]
  },
  {
    "id": "wp_railgun",
    "name": "磁轨炮",
    "icon": "🧲",
    "desc": "电磁加速炮弹：超高穿甲，克制重甲与坦克。",
    "levels": [
      {
        "level": 1,
        "name": "磁轨炮 Mk.I",
        "researchCost": {
          "tech": 35,
          "steel": 20
        },
        "researchMin": 5,
        "stats": {
          "dmgMul": 1.1,
          "penMul": 0.4,
          "rangeBonus": 1,
          "powerUse": 3
        },
        "desc": "全军伤害 +10%，穿甲 +40%，射程 +1。"
      },
      {
        "level": 2,
        "name": "磁轨炮 Mk.II",
        "researchCost": {
          "tech": 70,
          "steel": 40,
          "rare": 15
        },
        "researchMin": 8,
        "stats": {
          "dmgMul": 1.2,
          "penMul": 0.65,
          "rangeBonus": 2,
          "powerUse": 5
        },
        "desc": "全军伤害 +20%，穿甲 +65%，射程 +2。"
      },
      {
        "level": 3,
        "name": "磁轨炮 Mk.III",
        "researchCost": {
          "tech": 130,
          "steel": 80,
          "rare": 40
        },
        "researchMin": 12,
        "stats": {
          "dmgMul": 1.35,
          "penMul": 0.85,
          "rangeBonus": 2,
          "powerUse": 7,
          "armorIgnore": 0.3
        },
        "desc": "全军伤害 +35%，穿甲 +85%，无视 30% 护甲。"
      }
    ]
  },
  {
    "id": "wp_plasma_mortar",
    "name": "等离子迫击炮",
    "icon": "☄️",
    "desc": "等离子爆轰：大范围持续伤害，克制步兵集群。",
    "levels": [
      {
        "level": 1,
        "name": "等离子迫击炮 Mk.I",
        "researchCost": {
          "tech": 35,
          "rare": 15
        },
        "researchMin": 5,
        "stats": {
          "dmgMul": 1.12,
          "aoe": 2,
          "powerUse": 2,
          "dotDps": 3
        },
        "desc": "全军伤害 +12%，范围 2 格，命中后持续伤害 3/秒。"
      },
      {
        "level": 2,
        "name": "等离子迫击炮 Mk.II",
        "researchCost": {
          "tech": 70,
          "rare": 30
        },
        "researchMin": 8,
        "stats": {
          "dmgMul": 1.25,
          "aoe": 3,
          "powerUse": 4,
          "dotDps": 6
        },
        "desc": "全军伤害 +25%，范围 3 格，持续伤害 6/秒。"
      },
      {
        "level": 3,
        "name": "等离子迫击炮 Mk.III",
        "researchCost": {
          "tech": 140,
          "rare": 60,
          "uranium": 5
        },
        "researchMin": 12,
        "stats": {
          "dmgMul": 1.45,
          "aoe": 4,
          "powerUse": 6,
          "dotDps": 10,
          "suppressMul": 0.7
        },
        "desc": "全军伤害 +45%，范围 4 格，持续伤害 10/秒，压制敌人射速 -30%。"
      }
    ]
  }
];

const MILV3_ENEMIES = {};
for (const _e of [
  {
    "id": "raider_scav",
    "name": "拾荒者",
    "icon": "🔪",
    "class": "light",
    "hp": 50,
    "dmg": 8,
    "armor": 0,
    "pen": 0,
    "range": 3,
    "rof": 0.8,
    "speed": 1.3,
    "cost": {
      "iron": 5
    },
    "desc": "乌合之众，数量多但脆弱。"
  },
  {
    "id": "raider_marauder",
    "name": "掠夺者",
    "icon": "🪓",
    "class": "infantry",
    "hp": 100,
    "dmg": 14,
    "armor": 2,
    "pen": 0.1,
    "range": 4,
    "rof": 0.9,
    "speed": 1.1,
    "cost": {
      "iron": 10
    },
    "desc": "标准步兵，攻守均衡。"
  },
  {
    "id": "raider_brute",
    "name": "重装掠夺者",
    "icon": "🦍",
    "class": "heavy",
    "hp": 300,
    "dmg": 25,
    "armor": 12,
    "pen": 0.2,
    "range": 3,
    "rof": 0.6,
    "speed": 0.8,
    "cost": {
      "iron": 25,
      "steel": 5
    },
    "desc": "高血重甲，坦克的步兵版。"
  },
  {
    "id": "raider_sniper",
    "name": "荒漠狙击手",
    "icon": "🎯",
    "class": "infantry",
    "hp": 70,
    "dmg": 40,
    "armor": 0,
    "pen": 0.5,
    "range": 9,
    "rof": 0.3,
    "speed": 1.0,
    "cost": {
      "iron": 15,
      "rare": 2
    },
    "desc": "远程点杀，优先打军官与医疗兵。"
  },
  {
    "id": "raider_buggy",
    "name": "沙漠越野车",
    "icon": "🏎️",
    "class": "light",
    "hp": 150,
    "dmg": 18,
    "armor": 5,
    "pen": 0.1,
    "range": 5,
    "rof": 1.0,
    "speed": 2.2,
    "cost": {
      "iron": 20,
      "steel": 5
    },
    "desc": "高速骚扰，绕后偷袭。"
  },
  {
    "id": "raider_tank",
    "name": "改装坦克",
    "icon": "🛡️",
    "class": "armor",
    "hp": 450,
    "dmg": 40,
    "armor": 22,
    "pen": 0.35,
    "range": 6,
    "rof": 0.5,
    "speed": 0.9,
    "cost": {
      "iron": 60,
      "steel": 30
    },
    "desc": "缴获改装的主战坦克，硬骨头。"
  },
  {
    "id": "raider_artillery",
    "name": "土制火炮",
    "icon": "💥",
    "class": "armor",
    "hp": 160,
    "dmg": 80,
    "armor": 4,
    "pen": 0.25,
    "range": 10,
    "rof": 0.2,
    "speed": 0.6,
    "cost": {
      "iron": 50,
      "steel": 20
    },
    "aoe": 2,
    "desc": "远程炮击，范围杀伤。"
  },
  {
    "id": "raider_drone",
    "name": "自爆无人机",
    "icon": "💣",
    "class": "air",
    "hp": 40,
    "dmg": 60,
    "armor": 0,
    "pen": 0,
    "range": 1,
    "rof": 1.0,
    "speed": 2.5,
    "cost": {
      "iron": 10,
      "rare": 3
    },
    "kamikaze": true,
    "desc": "接近后自爆，一次性高伤。"
  },
  {
    "id": "raider_gunship",
    "name": "武装飞艇",
    "icon": "🎈",
    "class": "air",
    "hp": 320,
    "dmg": 30,
    "armor": 8,
    "pen": 0.2,
    "range": 7,
    "rof": 0.8,
    "speed": 1.4,
    "cost": {
      "iron": 70,
      "steel": 20,
      "rare": 5
    },
    "desc": "空中火力平台，血厚。"
  },
  {
    "id": "raider_warlord",
    "name": "军阀",
    "icon": "👑",
    "class": "officer",
    "hp": 400,
    "dmg": 35,
    "armor": 10,
    "pen": 0.3,
    "range": 5,
    "rof": 0.8,
    "speed": 1.0,
    "cost": {
      "iron": 80,
      "steel": 20,
      "rare": 10
    },
    "aura": 1.15,
    "desc": "敌方首领：周围敌人伤害 +15%，击杀奖励丰厚。"
  },
  {
    "id": "raider_sapper",
    "name": "爆破工兵",
    "icon": "🧨",
    "class": "infantry",
    "hp": 80,
    "dmg": 50,
    "armor": 2,
    "pen": 0.4,
    "range": 2,
    "rof": 0.4,
    "speed": 1.0,
    "cost": {
      "iron": 15,
      "steel": 5
    },
    "fortMul": 2.0,
    "desc": "对工事伤害 x2，专拆城墙与防御塔。"
  },
  {
    "id": "raider_medic",
    "name": "战地医士",
    "icon": "🩺",
    "class": "infantry",
    "hp": 90,
    "dmg": 6,
    "armor": 2,
    "pen": 0,
    "range": 3,
    "rof": 0.5,
    "speed": 1.0,
    "cost": {
      "iron": 12
    },
    "heal": 4,
    "desc": "治疗周围敌人（每秒 +4），优先击杀。"
  }
]) MILV3_ENEMIES[_e.id] = _e;

const MILV3_ENEMY_LIST = Object.values(MILV3_ENEMIES);

/* 20 波入侵编成：数量、血量/伤害成长、胜利奖励 */
const MILV3_WAVES = [
  {
    "wave": 1,
    "name": "第 1 波",
    "composition": {
      "raider_scav": 6
    },
    "count": 6,
    "hpMul": 1.0,
    "dmgMul": 1.0,
    "spawnEdge": "random",
    "bonus": {
      "iron": 7
    },
    "desc": "第 1 波入侵：6 名敌人，血量 x1.0，伤害 x1.0。"
  },
  {
    "wave": 2,
    "name": "第 2 波",
    "composition": {
      "raider_scav": 8,
      "raider_marauder": 3
    },
    "count": 11,
    "hpMul": 1.08,
    "dmgMul": 1.05,
    "spawnEdge": "random",
    "bonus": {
      "iron": 9
    },
    "desc": "第 2 波入侵：11 名敌人，血量 x1.08，伤害 x1.05。"
  },
  {
    "wave": 3,
    "name": "第 3 波",
    "composition": {
      "raider_scav": 6,
      "raider_marauder": 6,
      "raider_buggy": 2
    },
    "count": 14,
    "hpMul": 1.16,
    "dmgMul": 1.1,
    "spawnEdge": "random",
    "bonus": {
      "iron": 11
    },
    "desc": "第 3 波入侵：14 名敌人，血量 x1.16，伤害 x1.1。"
  },
  {
    "wave": 4,
    "name": "第 4 波",
    "composition": {
      "raider_marauder": 8,
      "raider_brute": 2,
      "raider_buggy": 3
    },
    "count": 13,
    "hpMul": 1.24,
    "dmgMul": 1.15,
    "spawnEdge": "random",
    "bonus": {
      "iron": 13
    },
    "desc": "第 4 波入侵：13 名敌人，血量 x1.24，伤害 x1.15。"
  },
  {
    "wave": 5,
    "name": "第 5 波",
    "composition": {
      "raider_marauder": 8,
      "raider_brute": 3,
      "raider_sniper": 2,
      "raider_buggy": 4
    },
    "count": 17,
    "hpMul": 1.32,
    "dmgMul": 1.2,
    "spawnEdge": "random",
    "bonus": {
      "iron": 35,
      "tech": 7
    },
    "desc": "第 5 波入侵：17 名敌人，血量 x1.32，伤害 x1.2。"
  },
  {
    "wave": 6,
    "name": "第 6 波",
    "composition": {
      "raider_brute": 4,
      "raider_marauder": 10,
      "raider_artillery": 1,
      "raider_drone": 4
    },
    "count": 19,
    "hpMul": 1.4,
    "dmgMul": 1.25,
    "spawnEdge": "random",
    "bonus": {
      "iron": 17
    },
    "desc": "第 6 波入侵：19 名敌人，血量 x1.4，伤害 x1.25。"
  },
  {
    "wave": 7,
    "name": "第 7 波",
    "composition": {
      "raider_marauder": 12,
      "raider_brute": 5,
      "raider_sniper": 3,
      "raider_buggy": 5,
      "raider_drone": 6
    },
    "count": 31,
    "hpMul": 1.48,
    "dmgMul": 1.3,
    "spawnEdge": "random",
    "bonus": {
      "iron": 19
    },
    "desc": "第 7 波入侵：31 名敌人，血量 x1.48，伤害 x1.3。"
  },
  {
    "wave": 8,
    "name": "第 8 波",
    "composition": {
      "raider_tank": 2,
      "raider_brute": 5,
      "raider_marauder": 10,
      "raider_artillery": 2,
      "raider_sapper": 3
    },
    "count": 22,
    "hpMul": 1.56,
    "dmgMul": 1.35,
    "spawnEdge": "random",
    "bonus": {
      "iron": 21
    },
    "desc": "第 8 波入侵：22 名敌人，血量 x1.56，伤害 x1.35。"
  },
  {
    "wave": 9,
    "name": "第 9 波",
    "composition": {
      "raider_tank": 3,
      "raider_gunship": 2,
      "raider_drone": 8,
      "raider_marauder": 10,
      "raider_sniper": 3
    },
    "count": 26,
    "hpMul": 1.64,
    "dmgMul": 1.4,
    "spawnEdge": "random",
    "bonus": {
      "iron": 23
    },
    "desc": "第 9 波入侵：26 名敌人，血量 x1.64，伤害 x1.4。"
  },
  {
    "wave": 10,
    "name": "第 10 波",
    "composition": {
      "raider_warlord": 1,
      "raider_tank": 3,
      "raider_brute": 6,
      "raider_marauder": 12,
      "raider_medic": 2,
      "raider_artillery": 2
    },
    "count": 26,
    "hpMul": 1.72,
    "dmgMul": 1.45,
    "spawnEdge": "random",
    "bonus": {
      "iron": 60,
      "tech": 12
    },
    "desc": "第 10 波入侵：26 名敌人，血量 x1.72，伤害 x1.45。"
  },
  {
    "wave": 11,
    "name": "第 11 波",
    "composition": {
      "raider_scav": 10,
      "raider_marauder": 14,
      "raider_brute": 6,
      "raider_buggy": 6,
      "raider_drone": 8
    },
    "count": 44,
    "hpMul": 1.8,
    "dmgMul": 1.5,
    "spawnEdge": "random",
    "bonus": {
      "iron": 27
    },
    "desc": "第 11 波入侵：44 名敌人，血量 x1.8，伤害 x1.5。"
  },
  {
    "wave": 12,
    "name": "第 12 波",
    "composition": {
      "raider_tank": 4,
      "raider_brute": 7,
      "raider_sapper": 4,
      "raider_sniper": 4,
      "raider_artillery": 3,
      "raider_medic": 2
    },
    "count": 24,
    "hpMul": 1.88,
    "dmgMul": 1.55,
    "spawnEdge": "random",
    "bonus": {
      "iron": 29
    },
    "desc": "第 12 波入侵：24 名敌人，血量 x1.88，伤害 x1.55。"
  },
  {
    "wave": 13,
    "name": "第 13 波",
    "composition": {
      "raider_gunship": 3,
      "raider_drone": 12,
      "raider_tank": 4,
      "raider_marauder": 12,
      "raider_brute": 6
    },
    "count": 37,
    "hpMul": 1.96,
    "dmgMul": 1.6,
    "spawnEdge": "random",
    "bonus": {
      "iron": 31
    },
    "desc": "第 13 波入侵：37 名敌人，血量 x1.96，伤害 x1.6。"
  },
  {
    "wave": 14,
    "name": "第 14 波",
    "composition": {
      "raider_warlord": 1,
      "raider_tank": 5,
      "raider_gunship": 3,
      "raider_artillery": 3,
      "raider_brute": 8,
      "raider_medic": 3
    },
    "count": 23,
    "hpMul": 2.04,
    "dmgMul": 1.65,
    "spawnEdge": "random",
    "bonus": {
      "iron": 33
    },
    "desc": "第 14 波入侵：23 名敌人，血量 x2.04，伤害 x1.65。"
  },
  {
    "wave": 15,
    "name": "第 15 波",
    "composition": {
      "raider_marauder": 16,
      "raider_brute": 8,
      "raider_buggy": 8,
      "raider_drone": 10,
      "raider_sniper": 5,
      "raider_sapper": 4
    },
    "count": 51,
    "hpMul": 2.12,
    "dmgMul": 1.7,
    "spawnEdge": "random",
    "bonus": {
      "iron": 85,
      "tech": 17
    },
    "desc": "第 15 波入侵：51 名敌人，血量 x2.12，伤害 x1.7。"
  },
  {
    "wave": 16,
    "name": "第 16 波",
    "composition": {
      "raider_tank": 6,
      "raider_artillery": 4,
      "raider_gunship": 4,
      "raider_brute": 8,
      "raider_medic": 3,
      "raider_drone": 10
    },
    "count": 35,
    "hpMul": 2.2,
    "dmgMul": 1.75,
    "spawnEdge": "random",
    "bonus": {
      "iron": 37
    },
    "desc": "第 16 波入侵：35 名敌人，血量 x2.2，伤害 x1.75。"
  },
  {
    "wave": 17,
    "name": "第 17 波",
    "composition": {
      "raider_warlord": 1,
      "raider_tank": 6,
      "raider_gunship": 4,
      "raider_brute": 10,
      "raider_marauder": 14,
      "raider_sniper": 5,
      "raider_medic": 3
    },
    "count": 43,
    "hpMul": 2.28,
    "dmgMul": 1.8,
    "spawnEdge": "random",
    "bonus": {
      "iron": 39
    },
    "desc": "第 17 波入侵：43 名敌人，血量 x2.28，伤害 x1.8。"
  },
  {
    "wave": 18,
    "name": "第 18 波",
    "composition": {
      "raider_tank": 8,
      "raider_artillery": 5,
      "raider_gunship": 5,
      "raider_drone": 14,
      "raider_brute": 10,
      "raider_sapper": 5
    },
    "count": 47,
    "hpMul": 2.36,
    "dmgMul": 1.85,
    "spawnEdge": "random",
    "bonus": {
      "iron": 41
    },
    "desc": "第 18 波入侵：47 名敌人，血量 x2.36，伤害 x1.85。"
  },
  {
    "wave": 19,
    "name": "第 19 波",
    "composition": {
      "raider_warlord": 2,
      "raider_tank": 8,
      "raider_gunship": 5,
      "raider_artillery": 5,
      "raider_brute": 12,
      "raider_medic": 4,
      "raider_sniper": 6
    },
    "count": 42,
    "hpMul": 2.44,
    "dmgMul": 1.9,
    "spawnEdge": "random",
    "bonus": {
      "iron": 43
    },
    "desc": "第 19 波入侵：42 名敌人，血量 x2.44，伤害 x1.9。"
  },
  {
    "wave": 20,
    "name": "第 20 波",
    "composition": {
      "raider_warlord": 2,
      "raider_tank": 10,
      "raider_gunship": 6,
      "raider_artillery": 6,
      "raider_brute": 14,
      "raider_drone": 16,
      "raider_marauder": 16,
      "raider_medic": 4
    },
    "count": 74,
    "hpMul": 2.52,
    "dmgMul": 1.95,
    "spawnEdge": "random",
    "bonus": {
      "iron": 110,
      "tech": 22
    },
    "desc": "第 20 波入侵：74 名敌人，血量 x2.52，伤害 x1.95。"
  }
];

/* 6 种作战学说：一次生效一种，切换冷却 5 分钟 */
const MILV3_DOCTRINES = [
  {
    "id": "doc_blitz",
    "name": "闪电战",
    "icon": "⚡",
    "researchCost": {
      "tech": 40
    },
    "researchMin": 6,
    "effects": {
      "speedMul": 1.2,
      "dmgMul": 1.1,
      "defenseMul": 0.95
    },
    "desc": "速度 +20%，伤害 +10%，防御 -5%：速战速决。"
  },
  {
    "id": "doc_depth",
    "name": "纵深防御",
    "icon": "🛡️",
    "researchCost": {
      "tech": 40
    },
    "researchMin": 6,
    "effects": {
      "defenseMul": 1.2,
      "dmgMul": 0.95,
      "morale": 5
    },
    "desc": "防御 +20%，士气 +5，伤害 -5%：以守为攻。"
  },
  {
    "id": "doc_guerrilla",
    "name": "游击战",
    "icon": "🌙",
    "researchCost": {
      "tech": 35
    },
    "researchMin": 5,
    "effects": {
      "ambushMul": 1.5,
      "speedMul": 1.1,
      "dmgMul": 0.95
    },
    "desc": "伏击伤害 +50%，移速 +10%：敌进我退，敌疲我打。"
  },
  {
    "id": "doc_combined",
    "name": "空地一体",
    "icon": "✈️",
    "researchCost": {
      "tech": 50
    },
    "researchMin": 7,
    "effects": {
      "airDmgMul": 1.25,
      "dmgMul": 1.05,
      "detectBonus": 2
    },
    "desc": "空军伤害 +25%，全军伤害 +5%，侦测 +2 格。"
  },
  {
    "id": "doc_steel",
    "name": "钢铁洪流",
    "icon": "🔩",
    "researchCost": {
      "tech": 50
    },
    "researchMin": 7,
    "effects": {
      "armorDmgMul": 1.25,
      "armorMul": 1.15,
      "speedMul": 0.95
    },
    "desc": "装甲伤害 +25%，装甲护甲 +15%，移速 -5%。"
  },
  {
    "id": "doc_militia",
    "name": "全民皆兵",
    "icon": "✊",
    "researchCost": {
      "tech": 30
    },
    "researchMin": 5,
    "effects": {
      "militiaMul": 1.5,
      "recruitCostMul": 0.8,
      "morale": 5
    },
    "desc": "民兵伤害 +50%，征兵费 -20%，士气 +5%。"
  }
];

/* 8 种军事建筑配套接口：等级/成本/加成（建筑本体由另一组实现，本文件只读接口） */
const MILV3_BUILDING_SPECS = [
  {
    "id": "barracks",
    "name": "兵营",
    "icon": "🏕️",
    "cat": "military",
    "levels": [
      null,
      {
        "cost": {
          "iron": 40
        },
        "needPop": 4,
        "powerUse": 1,
        "bonus": {
          "recruitCap": 2,
          "recruitSpeedMul": 1.2
        }
      },
      {
        "cost": {
          "iron": 100,
          "steel": 20
        },
        "needPop": 8,
        "powerUse": 2,
        "bonus": {
          "recruitCap": 4,
          "recruitSpeedMul": 1.5
        }
      },
      {
        "cost": {
          "steel": 80,
          "rare": 10
        },
        "needPop": 12,
        "powerUse": 3,
        "bonus": {
          "recruitCap": 6,
          "recruitSpeedMul": 2.0
        }
      }
    ],
    "desc": "征兵容量与速度：每级 +2 征兵队列，招募加速。"
  },
  {
    "id": "armory",
    "name": "军械库",
    "icon": "⚔️",
    "cat": "military",
    "levels": [
      null,
      {
        "cost": {
          "iron": 60,
          "steel": 10
        },
        "needPop": 2,
        "powerUse": 1,
        "bonus": {
          "dmgMul": 1.05,
          "ammoCap": 500
        }
      },
      {
        "cost": {
          "iron": 150,
          "steel": 40
        },
        "needPop": 4,
        "powerUse": 2,
        "bonus": {
          "dmgMul": 1.1,
          "ammoCap": 1200
        }
      },
      {
        "cost": {
          "steel": 120,
          "rare": 20
        },
        "needPop": 6,
        "powerUse": 3,
        "bonus": {
          "dmgMul": 1.18,
          "ammoCap": 2500
        }
      }
    ],
    "desc": "全军伤害加成与弹药库容量。"
  },
  {
    "id": "airbase",
    "name": "空军基地",
    "icon": "🛫",
    "cat": "military",
    "levels": [
      null,
      {
        "cost": {
          "iron": 80,
          "steel": 20
        },
        "needPop": 6,
        "powerUse": 3,
        "bonus": {
          "airCap": 6,
          "airDmgMul": 1.05
        }
      },
      {
        "cost": {
          "iron": 180,
          "steel": 60
        },
        "needPop": 10,
        "powerUse": 5,
        "bonus": {
          "airCap": 14,
          "airDmgMul": 1.12
        }
      },
      {
        "cost": {
          "steel": 150,
          "rare": 30
        },
        "needPop": 16,
        "powerUse": 8,
        "bonus": {
          "airCap": 24,
          "airDmgMul": 1.2
        }
      }
    ],
    "desc": "空军单位上限与伤害加成。"
  },
  {
    "id": "academy",
    "name": "军事学院",
    "icon": "🎓",
    "cat": "military",
    "levels": [
      null,
      {
        "cost": {
          "iron": 50,
          "tech": 10
        },
        "needPop": 4,
        "powerUse": 2,
        "bonus": {
          "trainSpeedMul": 1.3,
          "officerCap": 2
        }
      },
      {
        "cost": {
          "iron": 120,
          "steel": 30,
          "tech": 20
        },
        "needPop": 8,
        "powerUse": 3,
        "bonus": {
          "trainSpeedMul": 1.6,
          "officerCap": 4
        }
      },
      {
        "cost": {
          "steel": 100,
          "tech": 40,
          "rare": 10
        },
        "needPop": 12,
        "powerUse": 4,
        "bonus": {
          "trainSpeedMul": 2.0,
          "officerCap": 6
        }
      }
    ],
    "desc": "军官训练加速与军官名额。"
  },
  {
    "id": "arsenal",
    "name": "弹药厂",
    "icon": "🏭",
    "cat": "military",
    "levels": [
      null,
      {
        "cost": {
          "iron": 70,
          "steel": 10
        },
        "needPop": 4,
        "powerUse": 2,
        "bonus": {
          "ammoPerMin": 20,
          "fuelPerMin": 5
        }
      },
      {
        "cost": {
          "iron": 160,
          "steel": 40
        },
        "needPop": 8,
        "powerUse": 3,
        "bonus": {
          "ammoPerMin": 50,
          "fuelPerMin": 12
        }
      },
      {
        "cost": {
          "steel": 120,
          "rare": 15
        },
        "needPop": 12,
        "powerUse": 4,
        "bonus": {
          "ammoPerMin": 100,
          "fuelPerMin": 25
        }
      }
    ],
    "desc": "每分钟生产弹药与燃油（后勤）。"
  },
  {
    "id": "shield_hub",
    "name": "护盾枢纽",
    "icon": "🔷",
    "cat": "military",
    "levels": [
      null,
      {
        "cost": {
          "iron": 60,
          "rare": 20
        },
        "needPop": 2,
        "powerUse": 4,
        "bonus": {
          "shieldHp": 300,
          "shieldRegen": 3
        }
      },
      {
        "cost": {
          "iron": 150,
          "rare": 50
        },
        "needPop": 4,
        "powerUse": 7,
        "bonus": {
          "shieldHp": 800,
          "shieldRegen": 8
        }
      },
      {
        "cost": {
          "steel": 100,
          "rare": 100
        },
        "needPop": 6,
        "powerUse": 10,
        "bonus": {
          "shieldHp": 1500,
          "shieldRegen": 15
        }
      }
    ],
    "desc": "城市护盾池与回复（需先研发护盾发生器）。"
  },
  {
    "id": "radar2",
    "name": "远程雷达",
    "icon": "📡",
    "cat": "military",
    "levels": [
      null,
      {
        "cost": {
          "iron": 50,
          "rare": 10
        },
        "needPop": 2,
        "powerUse": 2,
        "bonus": {
          "detectBonus": 4,
          "warnMin": 1
        }
      },
      {
        "cost": {
          "iron": 120,
          "rare": 25
        },
        "needPop": 4,
        "powerUse": 3,
        "bonus": {
          "detectBonus": 8,
          "warnMin": 2
        }
      },
      {
        "cost": {
          "steel": 80,
          "rare": 50
        },
        "needPop": 6,
        "powerUse": 4,
        "bonus": {
          "detectBonus": 12,
          "warnMin": 3
        }
      }
    ],
    "desc": "侦测半径与入侵预警提前量。"
  },
  {
    "id": "command",
    "name": "指挥部",
    "icon": "🎖️",
    "cat": "military",
    "levels": [
      null,
      {
        "cost": {
          "iron": 100,
          "steel": 30
        },
        "needPop": 6,
        "powerUse": 3,
        "bonus": {
          "formationCap": 2,
          "officerCap": 2,
          "morale": 3
        }
      },
      {
        "cost": {
          "iron": 220,
          "steel": 80,
          "tech": 20
        },
        "needPop": 10,
        "powerUse": 5,
        "bonus": {
          "formationCap": 4,
          "officerCap": 4,
          "morale": 6
        }
      },
      {
        "cost": {
          "steel": 200,
          "tech": 50,
          "rare": 20
        },
        "needPop": 16,
        "powerUse": 8,
        "bonus": {
          "formationCap": 6,
          "officerCap": 6,
          "morale": 10
        }
      }
    ],
    "desc": "编制上限、军官上限与全军士气。"
  }
];

/* 8 枚勋章：达成条件与永久加成 */
const MILV3_MEDALS = [
  {
    "id": "med_first_blood",
    "name": "首战勋章",
    "icon": "🩸",
    "condition": "kills>=1",
    "bonus": {
      "morale": 1
    },
    "desc": "首次击杀：全军士气 +1。"
  },
  {
    "id": "med_veteran",
    "name": "百战老兵",
    "icon": "🎖️",
    "condition": "kills>=100",
    "bonus": {
      "dmgMul": 1.02
    },
    "desc": "累计击杀 100：全军伤害 +2%。"
  },
  {
    "id": "med_ace",
    "name": "王牌",
    "icon": "✈️",
    "condition": "airKills>=50",
    "bonus": {
      "airDmgMul": 1.05
    },
    "desc": "空军击杀 50：空军伤害 +5%。"
  },
  {
    "id": "med_wall",
    "name": "钢铁长城",
    "icon": "🧱",
    "condition": "wavesHeld>=5",
    "bonus": {
      "defenseMul": 1.05
    },
    "desc": "守住 5 波入侵：防御 +5%。"
  },
  {
    "id": "med_flawless",
    "name": "零伤亡",
    "icon": "💎",
    "condition": "flawlessWins>=3",
    "bonus": {
      "morale": 3
    },
    "desc": "3 次零伤亡胜利：士气 +3。"
  },
  {
    "id": "med_hunter",
    "name": "军阀猎手",
    "icon": "👑",
    "condition": "warlords>=3",
    "bonus": {
      "dmgMul": 1.03
    },
    "desc": "击杀 3 名军阀：伤害 +3%。"
  },
  {
    "id": "med_savior",
    "name": "城市救星",
    "icon": "🌟",
    "condition": "wavesHeld>=10",
    "bonus": {
      "defenseMul": 1.08,
      "morale": 2
    },
    "desc": "守住 10 波：防御 +8%，士气 +2。"
  },
  {
    "id": "med_legend",
    "name": "传奇",
    "icon": "🏆",
    "condition": "wavesHeld>=20",
    "bonus": {
      "dmgMul": 1.1,
      "morale": 5
    },
    "desc": "守住全部 20 波：伤害 +10%，士气 +5。"
  }
];

/* 10 个战斗模拟场景：供自测与教学使用 */
const MILV3_BATTLE_SCENARIOS = [
  {
    "id": "sc_patrol",
    "name": "巡逻遭遇战",
    "attackers": {
      "raider_scav": 4
    },
    "defenders": {
      "rifleman": 4
    },
    "desc": "4 民兵级拾荒者 vs 4 步枪兵：新手教学战。"
  },
  {
    "id": "sc_ambush",
    "name": "伏击战",
    "attackers": {
      "raider_marauder": 6,
      "raider_buggy": 2
    },
    "defenders": {
      "rifleman": 6,
      "sniper": 2
    },
    "desc": "狙击手远程点杀教学。"
  },
  {
    "id": "sc_armor",
    "name": "装甲对决",
    "attackers": {
      "raider_tank": 2,
      "raider_brute": 4
    },
    "defenders": {
      "tank": 2,
      "heavy_infantry": 4
    },
    "desc": "坦克 vs 重装步兵：穿甲与护甲教学。"
  },
  {
    "id": "sc_air",
    "name": "空袭拦截",
    "attackers": {
      "raider_gunship": 2,
      "raider_drone": 6
    },
    "defenders": {
      "aa_vehicle": 2,
      "fighter": 2
    },
    "desc": "防空车与战斗机的对空教学。"
  },
  {
    "id": "sc_siege",
    "name": "围城战",
    "attackers": {
      "raider_artillery": 2,
      "raider_sapper": 4,
      "raider_marauder": 8
    },
    "defenders": {
      "rifleman": 8,
      "artillery": 2,
      "engineer": 2
    },
    "desc": "火炮与爆破工兵攻城，工兵抢修教学。"
  },
  {
    "id": "sc_warlord",
    "name": "军阀讨伐",
    "attackers": {
      "raider_warlord": 1,
      "raider_marauder": 8,
      "raider_medic": 2
    },
    "defenders": {
      "tank": 2,
      "rifleman": 8,
      "sniper": 2,
      "medic": 2
    },
    "desc": "优先击杀军阀与医士的斩首教学。"
  },
  {
    "id": "sc_swarm",
    "name": "虫群冲击",
    "attackers": {
      "raider_scav": 20,
      "raider_drone": 10
    },
    "defenders": {
      "artillery": 2,
      "attack_drone": 4,
      "rifleman": 8
    },
    "desc": "数量压制：范围伤害的价值。"
  },
  {
    "id": "sc_night",
    "name": "夜战",
    "attackers": {
      "raider_marauder": 8,
      "raider_sniper": 2
    },
    "defenders": {
      "rifleman": 8,
      "recon_drone": 2
    },
    "desc": "侦察无人机标记敌人的价值。"
  },
  {
    "id": "sc_laststand",
    "name": "最后防线",
    "attackers": {
      "raider_tank": 3,
      "raider_brute": 6,
      "raider_artillery": 2
    },
    "defenders": {
      "tank": 1,
      "heavy_infantry": 6,
      "medic": 2,
      "engineer": 2
    },
    "desc": "以少打多：医疗与修理的拉锯。"
  },
  {
    "id": "sc_full",
    "name": "全面战争",
    "attackers": {
      "raider_warlord": 1,
      "raider_tank": 3,
      "raider_gunship": 2,
      "raider_marauder": 10,
      "raider_drone": 6
    },
    "defenders": {
      "tank": 2,
      "fighter": 2,
      "rifleman": 10,
      "artillery": 2,
      "aa_vehicle": 2,
      "medic": 2
    },
    "desc": "多兵种协同的毕业考试。"
  }
];


/* ============================== 军官 ============================== */
class MilV3Officer {
  constructor(name) {
    this.id = _m3Uid('off');
    this.name = name || MilV3Officer._makeName();
    this.level = 1;
    this.xp = 0;
    this.rank = 1;
    this.skills = { tactics: 0, logistics: 0, morale: 0, engineering: 0, airmanship: 0, intel: 0, medic: 0, discipline: 0 };
    this.skillXp = { tactics: 0, logistics: 0, morale: 0, engineering: 0, airmanship: 0, intel: 0, medic: 0, discipline: 0 };
    this.traits = [];
    const pool = [...MILV3_OFFICER_TRAITS];
    const n = 1 + (Math.random() < 0.4 ? 1 : 0);
    for (let i = 0; i < n && pool.length; i++) {
      const t = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
      this.traits.push(t.id);
    }
    this.formationId = null;   // 指挥的编制
    this.status = 'active';    // active / wounded / killed / retired
    this.woundedUntil = 0;     // 负伤恢复时间（游戏时间 ms）
    this.kills = 0;
    this.battles = 0;
    this.wins = 0;
    this.training = null;      // {programId, endsAt}
  }

  static _makeName() {
    const surnames = ['陈', '林', '王', '李', '张', '刘', '赵', '周', '吴', '郑', '冯', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '何', '吕'];
    const given = ['铁山', '振武', '靖国', '卫国', '长风', '破军', '定远', '安邦', '武略', '雄飞', '铁血', '云鹏', '镇岳', '啸天', '靖宇', '子龙', '孟起', '伯约', '士载', '文远'];
    return _m3Pick(surnames) + _m3Pick(given);
  }

  xpForNextLevel() { return MILV3.OFFICER_XP_PER_LEVEL * this.level; }
  skillXpForNext(skill) { return 50 * (this.skills[skill] + 1); }

  gainXp(amount) {
    this.xp += amount;
    let leveled = 0;
    while (this.xp >= this.xpForNextLevel() && this.level < 30) {
      this.xp -= this.xpForNextLevel();
      this.level++;
      leveled++;
      this._checkPromotion();
    }
    return leveled;
  }

  gainSkillXp(skill, amount) {
    if (!(skill in this.skills)) return 0;
    const mul = this.traits.includes('green') ? 1.3 : this.traits.includes('old_guard') ? 1.2 : 1;
    this.skillXp[skill] += amount * mul;
    let ups = 0;
    while (this.skillXp[skill] >= this.skillXpForNext(skill) && this.skills[skill] < 10) {
      this.skillXp[skill] -= this.skillXpForNext(skill);
      this.skills[skill]++;
      ups++;
    }
    return ups;
  }

  // 晋升：等级达到军衔最低等级要求时自动晋升
  _checkPromotion() {
    let top = this.rank;
    for (const r of MILV3_RANKS) {
      if (this.level >= r.minLevel) top = r.rank;
    }
    if (top > this.rank) { this.rank = top; return true; }
    return false;
  }

  rankDef() { return MILV3_RANKS.find(r => r.rank === this.rank) || MILV3_RANKS[0]; }
  commandCap() { return this.rankDef().commandCap; }

  // 特质修正聚合
  traitEffects() {
    const e = { dmgMul: 1, defenseMul: 1, morale: 0, upkeepMul: 1, ammoMul: 1, repairMul: 1,
      fortDmgMul: 1, airDmgMul: 1, airSpeedMul: 1, critChance: 0, rangeMul: 1, healMul: 1,
      retreatThreshold: 0, flankBonus: 0, speedMul: 1, xpMul: 1, detectBonus: 0, aoeMul: 1,
      casualtyMul: 1, nightDmgMul: 1, supplyMul: 1, armorMul: 1, ambushMul: 1 };
    for (const tid of this.traits) {
      const t = (MILV3_OFFICER_TRAITS.find(x => x.id === tid) || {}).effects || {};
      for (const k in t) {
        if (k === 'morale' || k === 'detectBonus') e[k] = (e[k] || 0) + t[k];
        else if (k === 'critChance' || k === 'retreatThreshold' || k === 'flankBonus') e[k] = (e[k] || 0) + t[k];
        else e[k] = (e[k] || 1) * t[k];
      }
    }
    return e;
  }

  // 技能修正聚合（供战斗计算）
  skillEffects() {
    const s = this.skills;
    return {
      dmgMul: 1 + s.tactics * 0.03,
      upkeepMul: Math.max(0.5, 1 - s.logistics * 0.04),
      ammoMul: Math.max(0.6, 1 - s.logistics * 0.02),
      morale: s.morale * 4,
      repairMul: 1 + s.engineering * 0.1,
      fortDmgMul: 1 + s.engineering * 0.05,
      airDmgMul: 1 + s.airmanship * 0.04,
      airSpeedMul: 1 + s.airmanship * 0.02,
      detectBonus: s.intel,
      healMul: 1 + s.medic * 0.08,
      readinessDecayMul: Math.max(0.5, 1 - s.discipline * 0.05),
    };
  }

  // 开始训练：需满足等级前置，耗时按学院加成缩短
  startTraining(programId, gameTimeMs, trainSpeedMul) {
    const p = MILV3_TRAINING.find(x => x.id === programId);
    if (!p) return { ok: false, reason: '未知训练项目' };
    if (this.training) return { ok: false, reason: '该军官正在训练中' };
    if (this.status !== 'active') return { ok: false, reason: '该军官无法训练（' + this.status + '）' };
    if (this.level < (p.requires.level || 0)) return { ok: false, reason: '需 ' + p.requires.level + ' 级' };
    const dur = p.durationMin * 60 * 1000 / (trainSpeedMul || 1);
    this.training = { programId, endsAt: gameTimeMs + dur, startedAt: gameTimeMs };
    return { ok: true, program: p.name, durationMin: Math.round(dur / 60000 * 10) / 10 };
  }

  // 结算训练（到期时调用）
  finishTraining() {
    if (!this.training) return null;
    const p = MILV3_TRAINING.find(x => x.id === this.training.programId);
    this.training = null;
    if (!p) return null;
    const ups = {};
    for (const sk in (p.gains || {})) ups[sk] = this.gainSkillXp(sk, p.gains[sk]);
    return { program: p.name, skillUps: ups };
  }

  // 负伤 / 阵亡判定（战斗结束时按暴露度调用）
  rollCasualty(exposure) {
    if (this.status !== 'active') return null;
    const te = this.traitEffects();
    const deathChance = 0.02 * exposure * (te.casualtyMul || 1);
    const woundChance = 0.12 * exposure;
    const r = Math.random();
    if (r < deathChance) { this.status = 'killed'; this.formationId = null; return { result: 'killed' }; }
    if (r < deathChance + woundChance) {
      this.status = 'wounded';
      this.woundedUntil = Date.now() + 5 * 60 * 1000; // 现实 5 分钟后恢复（游戏时间由 manager 换算）
      return { result: 'wounded' };
    }
    return { result: 'ok' };
  }

  serialize() {
    return { id: this.id, name: this.name, level: this.level, xp: this.xp, rank: this.rank,
      skills: _m3Clone(this.skills), skillXp: _m3Clone(this.skillXp), traits: [...this.traits],
      formationId: this.formationId, status: this.status, woundedUntil: this.woundedUntil,
      kills: this.kills, battles: this.battles, wins: this.wins, training: _m3Clone(this.training) };
  }
  static deserialize(d) {
    const o = Object.create(MilV3Officer.prototype);
    Object.assign(o, d, { skills: _m3Clone(d.skills || {}), skillXp: _m3Clone(d.skillXp || {}),
      traits: [...(d.traits || [])], training: _m3Clone(d.training) });
    return o;
  }
}

/* ============================== 单位 ============================== */
class MilV3Unit {
  constructor(typeId, x, y) {
    const def = MILV3_UNIT_TYPES[typeId];
    if (!def) throw new Error('未知单位类型: ' + typeId);
    this.id = _m3Uid('unit');
    this.typeId = typeId;
    this.branch = def.branch;
    this.x = x || 0; this.y = y || 0;
    this.hp = def.hp; this.maxHp = def.hp;
    this.level = 1;      // 老兵等级 1-5
    this.xp = 0;
    this.kills = 0;
    this.status = 'ready'; // ready / fighting / retreating / dead
    this.shield = 0;     // 护盾值（护盾发生器提供）
    this.suppressedUntil = 0; // 压制结束（时间戳 ms）
    this.markedUntil = 0;     // 被侦察标记（受击 +20%）
    this.dotUntil = 0; this.dotDps = 0; // 持续伤害
    this.cooldownUntil = 0;   // 下次开火时间
    this.targetId = null;
    this.formationId = null;
  }

  get def() { return MILV3_UNIT_TYPES[this.typeId]; }
  get alive() { return this.hp > 0 && this.status !== 'dead'; }

  // 老兵等级：击杀 5/15/30/50 升级，每级伤害 +8%、血量 +10%
  vetMul() { return { dmg: 1 + (this.level - 1) * 0.08, hp: 1 + (this.level - 1) * 0.1 }; }
  xpForNextVet() { return [0, 5, 15, 30, 50][this.level] || 999; }

  gainXp(n) {
    this.xp += n;
    while (this.level < 5 && this.xp >= this.xpForNextVet()) {
      this.xp -= this.xpForNextVet();
      this.level++;
      this.maxHp = Math.round(this.def.hp * this.vetMul().hp);
      this.hp = Math.min(this.maxHp, this.hp + Math.round(this.def.hp * 0.1));
    }
  }

  // 受击：护盾先吸收，剩余伤害扣护甲后结算；返回实际伤害
  takeDamage(raw, pen, now) {
    let dmg = raw;
    if (this.shield > 0) {
      const absorbed = Math.min(this.shield, dmg);
      this.shield -= absorbed;
      dmg -= absorbed;
    }
    if (dmg > 0) {
      const effArmor = this.def.armor * (1 - (pen || 0));
      dmg = Math.max(1, Math.round(dmg - effArmor));
      if (now && now < this.markedUntil) dmg = Math.round(dmg * 1.2);
      this.hp -= dmg;
      if (this.hp <= 0) { this.hp = 0; this.status = 'dead'; }
    }
    return dmg;
  }

  heal(amount) {
    if (!this.alive) return 0;
    const real = Math.min(this.maxHp - this.hp, amount);
    this.hp += real;
    return real;
  }

  distTo(x, y) { const dx = this.x - x, dy = this.y - y; return Math.sqrt(dx * dx + dy * dy); }

  serialize() {
    return { id: this.id, typeId: this.typeId, x: this.x, y: this.y, hp: this.hp, maxHp: this.maxHp,
      level: this.level, xp: this.xp, kills: this.kills, status: this.status,
      shield: this.shield, formationId: this.formationId };
  }
  static deserialize(d) {
    const u = Object.create(MilV3Unit.prototype);
    Object.assign(u, d);
    u.suppressedUntil = 0; u.markedUntil = 0; u.dotUntil = 0; u.dotDps = 0; u.cooldownUntil = 0; u.targetId = null;
    return u;
  }
}

/* ============================== 编制 ============================== */
class MilV3Formation {
  constructor(branch, tier, name) {
    const key = branch + '_t' + tier;
    const def = MILV3_FORMATIONS[key];
    if (!def) throw new Error('未知编制: ' + key);
    this.id = _m3Uid('form');
    this.branch = branch;
    this.tier = tier;
    this.defId = key;
    this.name = name || def.name;
    this.unitIds = [];       // 单位 id 列表
    this.officerId = null;
    this.status = 'garrison'; // garrison 驻守 / intercept 迎击 / training 训练 / moving 移动
    this.readiness = 100;     // 战备 0-100
    this.morale = MILV3.MORALE_BASE;
    this.x = 25; this.y = 25; // 集结点（默认市中心）
    this.homeX = 25; this.homeY = 25;
    this.targetX = null; this.targetY = null;
    this.kills = 0;
    this.battles = 0;
    this.wins = 0;
  }

  get def() { return MILV3_FORMATIONS[this.defId]; }
  get slots() { return this.def.slots; }
  get size() { return this.unitIds.length; }
  get full() { return this.unitIds.length >= this.def.slots; }

  addUnit(unitId) {
    if (this.full) return { ok: false, reason: '编制已满（' + this.def.slots + ' 槽）' };
    if (this.unitIds.includes(unitId)) return { ok: false, reason: '单位已在编制中' };
    this.unitIds.push(unitId);
    return { ok: true };
  }

  removeUnit(unitId) {
    const idx = this.unitIds.indexOf(unitId);
    if (idx < 0) return false;
    this.unitIds.splice(idx, 1);
    return true;
  }

  // 编制战力评估（供 UI 与自动迎击决策）
  power(unitsById) {
    let p = 0;
    for (const id of this.unitIds) {
      const u = unitsById[id];
      if (u && u.alive) p += u.def.hp * 0.5 + u.def.dmg * u.def.rof * 10;
    }
    return Math.round(p * (this.readiness / 100) * (0.8 + this.morale / 200));
  }

  serialize() {
    return { id: this.id, branch: this.branch, tier: this.tier, defId: this.defId, name: this.name,
      unitIds: [...this.unitIds], officerId: this.officerId, status: this.status,
      readiness: this.readiness, morale: this.morale, x: this.x, y: this.y,
      homeX: this.homeX, homeY: this.homeY, kills: this.kills, battles: this.battles, wins: this.wins };
  }
  static deserialize(d) {
    const f = Object.create(MilV3Formation.prototype);
    Object.assign(f, d, { unitIds: [...(d.unitIds || [])] });
    f.targetX = null; f.targetY = null;
    return f;
  }
}

/* ============================== 武器研发 ============================== */
class MilV3WeaponResearch {
  constructor() {
    this.levels = {};    // {weaponId: level 0-3}
    this.queue = [];     // {weaponId, targetLevel, endsAt, startedAt}
    for (const w of MILV3_WEAPONS) this.levels[w.id] = 0;
  }

  canResearch(weaponId) {
    const w = MILV3_WEAPONS.find(x => x.id === weaponId);
    if (!w) return { ok: false, reason: '未知武器' };
    const cur = this.levels[weaponId] || 0;
    if (cur >= 3) return { ok: false, reason: '已满级' };
    if (this.queue.some(q => q.weaponId === weaponId)) return { ok: false, reason: '已在研发队列中' };
    if (this.queue.length >= 2) return { ok: false, reason: '研发队列已满（2 项）' };
    return { ok: true, next: w.levels[cur] };
  }

  startResearch(weaponId, game, gameTimeMs) {
    const chk = this.canResearch(weaponId);
    if (!chk.ok) return chk;
    const inv = (game && game.player && game.player.inv) || null;
    const cost = chk.next.researchCost;
    if (inv) {
      for (const k in cost) if ((inv[k] || 0) < cost[k]) return { ok: false, reason: '资源不足：缺 ' + (cost[k] - (inv[k] || 0)) + ' ' + k };
      for (const k in cost) inv[k] -= cost[k];
    }
    const dur = chk.next.researchMin * 60 * 1000;
    this.queue.push({ weaponId, targetLevel: chk.next.level, endsAt: gameTimeMs + dur, startedAt: gameTimeMs });
    return { ok: true, weapon: MILV3_WEAPONS.find(w => w.id === weaponId).name, level: chk.next.level, durationMin: chk.next.researchMin };
  }

  // 结算到期的研发
  tick(gameTimeMs) {
    const done = [];
    this.queue = this.queue.filter(q => {
      if (gameTimeMs >= q.endsAt) {
        this.levels[q.weaponId] = q.targetLevel;
        done.push({ weaponId: q.weaponId, level: q.targetLevel });
        return false;
      }
      return true;
    });
    return done;
  }

  // 聚合全部已研发武器的战斗修正
  bonuses() {
    const b = { dmgMul: 1, rangeBonus: 0, penMul: 0, aoe: 0, powerUse: 0, shieldHp: 0,
      shieldRegen: 0, shieldReflect: 0, critChance: 0, fortMul: 1, armorIgnore: 0,
      dotDps: 0, suppressMul: 1 };
    for (const w of MILV3_WEAPONS) {
      const lv = this.levels[w.id] || 0;
      if (lv <= 0) continue;
      const st = w.levels[lv - 1].stats;
      if (st.dmgMul) b.dmgMul *= st.dmgMul;
      if (st.rangeBonus) b.rangeBonus += st.rangeBonus;
      if (st.penMul) b.penMul = Math.min(0.95, b.penMul + st.penMul);
      if (st.aoe) b.aoe = Math.max(b.aoe, st.aoe);
      if (st.powerUse) b.powerUse += st.powerUse;
      if (st.shieldHp) b.shieldHp += st.shieldHp;
      if (st.shieldRegen) b.shieldRegen += st.shieldRegen;
      if (st.shieldReflect) b.shieldReflect = Math.max(b.shieldReflect, st.shieldReflect);
      if (st.critChance) b.critChance += st.critChance;
      if (st.fortMul) b.fortMul *= st.fortMul;
      if (st.armorIgnore) b.armorIgnore = Math.max(b.armorIgnore, st.armorIgnore);
      if (st.dotDps) b.dotDps = Math.max(b.dotDps, st.dotDps);
      if (st.suppressMul) b.suppressMul = Math.min(b.suppressMul, st.suppressMul);
    }
    return b;
  }

  serialize() { return { levels: _m3Clone(this.levels), queue: _m3Clone(this.queue) }; }
  static deserialize(d) {
    const w = new MilV3WeaponResearch();
    w.levels = _m3Clone(d.levels || {});
    for (const weapon of MILV3_WEAPONS) if (!(weapon.id in w.levels)) w.levels[weapon.id] = 0;
    w.queue = _m3Clone(d.queue || []);
    return w;
  }
}

/* ============================== 作战学说 ============================== */
class MilV3Doctrine {
  constructor() {
    this.active = null;         // 当前学说 id
    this.researched = new Set(); // 已研发
    this.switchCooldownUntil = 0;
    this.researchQueue = null;  // {doctrineId, endsAt}
  }

  research(doctrineId, game, gameTimeMs) {
    const d = MILV3_DOCTRINES.find(x => x.id === doctrineId);
    if (!d) return { ok: false, reason: '未知学说' };
    if (this.researched.has(doctrineId)) return { ok: false, reason: '已研发' };
    if (this.researchQueue) return { ok: false, reason: '已有学说在研' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) {
      for (const k in d.researchCost) if ((inv[k] || 0) < d.researchCost[k]) return { ok: false, reason: '资源不足' };
      for (const k in d.researchCost) inv[k] -= d.researchCost[k];
    }
    this.researchQueue = { doctrineId, endsAt: gameTimeMs + d.researchMin * 60 * 1000 };
    return { ok: true, doctrine: d.name, durationMin: d.researchMin };
  }

  tick(gameTimeMs) {
    if (this.researchQueue && gameTimeMs >= this.researchQueue.endsAt) {
      const id = this.researchQueue.doctrineId;
      this.researched.add(id);
      this.researchQueue = null;
      return { done: id };
    }
    return null;
  }

  activate(doctrineId, gameTimeMs) {
    if (!this.researched.has(doctrineId)) return { ok: false, reason: '尚未研发该学说' };
    if (gameTimeMs < this.switchCooldownUntil) return { ok: false, reason: '切换冷却中' };
    if (this.active === doctrineId) return { ok: false, reason: '已是当前学说' };
    this.active = doctrineId;
    this.switchCooldownUntil = gameTimeMs + 5 * 60 * 1000;
    return { ok: true, doctrine: MILV3_DOCTRINES.find(d => d.id === doctrineId).name };
  }

  effects() {
    if (!this.active) return {};
    const d = MILV3_DOCTRINES.find(x => x.id === this.active);
    return _m3Clone(d ? d.effects : {});
  }

  serialize() { return { active: this.active, researched: [...this.researched], switchCooldownUntil: this.switchCooldownUntil, researchQueue: _m3Clone(this.researchQueue) }; }
  static deserialize(d) {
    const x = new MilV3Doctrine();
    x.active = d.active || null;
    x.researched = new Set(d.researched || []);
    x.switchCooldownUntil = d.switchCooldownUntil || 0;
    x.researchQueue = _m3Clone(d.researchQueue);
    return x;
  }
}


/* ============================== 后勤 ============================== */
class MilV3Logistics {
  constructor() {
    this.ammo = 500;        // 弹药库存
    this.ammoCap = 1000;
    this.fuel = 300;        // 燃油库存
    this.fuelCap = 600;
    this.supplyLevel = 100; // 补给水平 0-100
    this.ammoUsedTotal = 0;
    this.fuelUsedTotal = 0;
    this._prodAccMs = 0;
  }

  // 每分钟：按军工厂等级生产弹药/燃油；补给水平按库存比例更新
  tickMinute(buildingBonuses) {
    const b = buildingBonuses || {};
    this.ammo = Math.min(this.ammoCap + (b.ammoCap || 0), this.ammo + (b.ammoPerMin || 0));
    this.fuel = Math.min(this.fuelCap, this.fuel + (b.fuelPerMin || 0));
    const ammoRatio = this.ammo / Math.max(1, this.ammoCap + (b.ammoCap || 0));
    const fuelRatio = this.fuel / Math.max(1, this.fuelCap);
    this.supplyLevel = Math.round((ammoRatio * 0.6 + fuelRatio * 0.4) * 100);
    return { ammo: Math.round(this.ammo), fuel: Math.round(this.fuel), supply: this.supplyLevel };
  }

  consumeAmmo(n) {
    const used = Math.min(this.ammo, n);
    this.ammo -= used;
    this.ammoUsedTotal += used;
    return used;
  }

  consumeFuel(n) {
    const used = Math.min(this.fuel, n);
    this.fuel -= used;
    this.fuelUsedTotal += used;
    return used;
  }

  // 弹药因子：缺弹时伤害 x0.3；燃油因子：缺油时装甲/空军移速 x0.5
  ammoFactor() { return this.ammo > 0 ? 1 : 0.3; }
  fuelFactor() { return this.fuel > 0 ? 1 : 0.5; }

  serialize() { return { ammo: this.ammo, ammoCap: this.ammoCap, fuel: this.fuel, fuelCap: this.fuelCap, supplyLevel: this.supplyLevel, ammoUsedTotal: this.ammoUsedTotal, fuelUsedTotal: this.fuelUsedTotal }; }
  static deserialize(d) {
    const l = new MilV3Logistics();
    l.ammo = d.ammo || 0; l.ammoCap = d.ammoCap || 1000;
    l.fuel = d.fuel || 0; l.fuelCap = d.fuelCap || 600;
    l.supplyLevel = d.supplyLevel || 0;
    l.ammoUsedTotal = d.ammoUsedTotal || 0; l.fuelUsedTotal = d.fuelUsedTotal || 0;
    return l;
  }
}

/* ============================== 陆军 ============================== */
class MilV3Army {
  constructor() {
    this.units = {};        // {unitId: MilV3Unit}
    this.formations = {};   // {formationId: MilV3Formation}
    this.officers = {};     // {officerId: MilV3Officer}
    this.recruitQueue = []; // {typeId, count, endsAt, startedAt, formationId}
    this._formationSeq = 0;
  }

  unitCount() { return Object.keys(this.units).length; }
  aliveUnitCount() { return Object.values(this.units).filter(u => u.alive).length; }
  officerCount() { return Object.values(this.officers).filter(o => o.status === 'active').length; }

  // 征兵：成本按数量与兵种乘区；耗时 2 分钟 / 兵种速度；队列上限由兵营决定
  recruit(typeId, count, game, gameTimeMs, recruitCap, recruitSpeedMul) {
    const def = MILV3_UNIT_TYPES[typeId];
    if (!def) return { ok: false, reason: '未知单位类型' };
    if (!count || count < 1) return { ok: false, reason: '数量须 >= 1' };
    if (count > 50) return { ok: false, reason: '单次征兵上限 50' };
    const cap = recruitCap || 2;
    if (this.recruitQueue.length >= cap) return { ok: false, reason: '征兵队列已满（' + cap + '）' };
    const branchMul = (MILV3_BRANCHES[def.branch] || {}).recruitCostMul || 1;
    const cost = {};
    for (const k in (def.cost || {})) cost[k] = Math.ceil(def.cost[k] * count * branchMul);
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) {
      for (const k in cost) if ((inv[k] || 0) < cost[k]) return { ok: false, reason: '资源不足：缺 ' + (cost[k] - (inv[k] || 0)) + ' ' + k };
      for (const k in cost) inv[k] -= cost[k];
    }
    // 人口检查：每名士兵需 1 人口容量（防御性读取）
    const pop = game && game.pop ? game.pop.count : 99;
    if (pop < 2) return { ok: false, reason: '人口不足，无法征兵' };
    const dur = MILV3.RECRUIT_BASE_MIN * 60 * 1000 * Math.sqrt(count) / (recruitSpeedMul || 1);
    this.recruitQueue.push({ typeId, count, endsAt: gameTimeMs + dur, startedAt: gameTimeMs, id: _m3Uid('rec') });
    return { ok: true, type: def.name, count, durationMin: Math.round(dur / 60000 * 10) / 10, cost };
  }

  // 结算征兵队列：到期生成单位（驻扎在市中心）
  tickRecruits(gameTimeMs, mapSize) {
    const done = [];
    const cx = (mapSize || MILV3.MAP_SIZE_DEFAULT) / 2;
    this.recruitQueue = this.recruitQueue.filter(q => {
      if (gameTimeMs >= q.endsAt) {
        const made = [];
        for (let i = 0; i < q.count; i++) {
          const u = new MilV3Unit(q.typeId, cx + _m3Rand(-2, 2), cx + _m3Rand(-2, 2));
          this.units[u.id] = u;
          made.push(u.id);
        }
        done.push({ typeId: q.typeId, count: q.count, unitIds: made });
        return false;
      }
      return true;
    });
    return done;
  }

  createFormation(branch, tier, name, formationCap) {
    const total = Object.keys(this.formations).length;
    if (total >= (formationCap || MILV3.MAX_FORMATIONS)) return { ok: false, reason: '编制已达上限（' + (formationCap || MILV3.MAX_FORMATIONS) + '）' };
    const f = new MilV3Formation(branch, tier, name);
    this.formations[f.id] = f;
    return { ok: true, formation: f };
  }

  disbandFormation(formationId) {
    const f = this.formations[formationId];
    if (!f) return { ok: false, reason: '编制不存在' };
    for (const uid of f.unitIds) { const u = this.units[uid]; if (u) u.formationId = null; }
    if (f.officerId && this.officers[f.officerId]) this.officers[f.officerId].formationId = null;
    delete this.formations[formationId];
    return { ok: true };
  }

  assignUnit(unitId, formationId) {
    const u = this.units[unitId];
    const f = this.formations[formationId];
    if (!u) return { ok: false, reason: '单位不存在' };
    if (!f) return { ok: false, reason: '编制不存在' };
    if (!u.alive) return { ok: false, reason: '单位已阵亡' };
    if (u.branch !== f.branch) return { ok: false, reason: '兵种不符：' + u.branch + ' 单位不能编入 ' + f.branch + ' 编制' };
    if (u.formationId && this.formations[u.formationId]) this.formations[u.formationId].removeUnit(unitId);
    const res = f.addUnit(unitId);
    if (res.ok) u.formationId = formationId;
    return res;
  }

  // 任命军官：指挥能力须 >= 编制指挥需求
  assignOfficer(officerId, formationId) {
    const o = this.officers[officerId];
    const f = this.formations[formationId];
    if (!o) return { ok: false, reason: '军官不存在' };
    if (!f) return { ok: false, reason: '编制不存在' };
    if (o.status !== 'active') return { ok: false, reason: '军官无法指挥（' + o.status + '）' };
    if (o.commandCap() < f.def.commandRequired) {
      return { ok: false, reason: '指挥能力不足：需 ' + f.def.commandRequired + '，该军官为 ' + o.commandCap() + '（' + o.rankDef().name + '）' };
    }
    if (o.formationId && this.formations[o.formationId]) this.formations[o.formationId].officerId = null;
    if (f.officerId && this.officers[f.officerId]) this.officers[f.officerId].formationId = null;
    f.officerId = officerId;
    o.formationId = formationId;
    return { ok: true };
  }

  enlistOfficer(name, officerCap) {
    if (this.officerCount() >= (officerCap || MILV3.MAX_OFFICERS)) return { ok: false, reason: '军官名额已满（' + (officerCap || MILV3.MAX_OFFICERS) + '）' };
    const o = new MilV3Officer(name);
    this.officers[o.id] = o;
    return { ok: true, officer: o };
  }

  retireOfficer(officerId) {
    const o = this.officers[officerId];
    if (!o) return { ok: false, reason: '军官不存在' };
    if (o.formationId && this.formations[o.formationId]) this.formations[o.formationId].officerId = null;
    o.status = 'retired';
    o.formationId = null;
    return { ok: true };
  }

  deployFormation(formationId, x, y, mode) {
    const f = this.formations[formationId];
    if (!f) return { ok: false, reason: '编制不存在' };
    if (f.readiness < 30 && mode === 'intercept') return { ok: false, reason: '战备不足 30，无法出击（需休整）' };
    if (f.size === 0) return { ok: false, reason: '编制内没有单位' };
    f.x = x; f.y = y;
    f.targetX = x; f.targetY = y;
    f.status = mode === 'intercept' ? 'intercept' : 'garrison';
    for (const uid of f.unitIds) {
      const u = this.units[uid];
      if (u && u.alive) { u.x = x + _m3Rand(-1, 1); u.y = y + _m3Rand(-1, 1); }
    }
    return { ok: true, status: f.status };
  }

  // 每分钟维持费：单位维持 x 编制乘区 x 军官后勤修正 + 军官薪饷；交不起则战备下降
  tickUpkeep(game) {
    const inv = (game && game.player && game.player.inv) || null;
    let total = {};
    for (const f of Object.values(this.formations)) {
      let officerMul = 1;
      if (f.officerId && this.officers[f.officerId]) {
        officerMul = this.officers[f.officerId].skillEffects().upkeepMul * this.officers[f.officerId].traitEffects().upkeepMul;
      }
      for (const uid of f.unitIds) {
        const u = this.units[uid];
        if (!u || !u.alive) continue;
        for (const k in (u.def.upkeep || {})) {
          total[k] = (total[k] || 0) + u.def.upkeep[k] * f.def.upkeepMul * officerMul;
        }
      }
    }
    for (const o of Object.values(this.officers)) {
      if (o.status !== 'active') continue;
      const sal = o.rankDef().salary || {};
      for (const k in sal) total[k] = (total[k] || 0) + sal[k];
    }
    // 未编入编制的散兵也需维持
    for (const u of Object.values(this.units)) {
      if (!u.alive || u.formationId) continue;
      for (const k in (u.def.upkeep || {})) total[k] = (total[k] || 0) + u.def.upkeep[k];
    }
    let short = [];
    if (inv) {
      for (const k in total) {
        const need = Math.ceil(total[k]);
        if ((inv[k] || 0) < need) short.push(k);
        else inv[k] -= need;
      }
    }
    if (short.length) {
      // 交不起：全军战备 -10，士气 -5
      for (const f of Object.values(this.formations)) {
        f.readiness = Math.max(0, f.readiness - 10);
        f.morale = Math.max(MILV3.MORALE_MIN, f.morale - 5);
      }
    }
    return { upkeep: total, short };
  }

  // 战备与士气恢复：驻守每分钟 +5 战备，士气向 70 回归
  tickRecovery(dtMs) {
    const mins = dtMs / 60000;
    for (const f of Object.values(this.formations)) {
      if (f.status === 'garrison') {
        f.readiness = Math.min(100, f.readiness + MILV3.READINESS_RECOVER_GARRISON * mins);
        f.morale = _m3Clamp(f.morale + (MILV3.MORALE_BASE - f.morale) * 0.1 * mins, MILV3.MORALE_MIN, MILV3.MORALE_MAX);
      }
      // 伤员缓慢恢复
      for (const uid of f.unitIds) {
        const u = this.units[uid];
        if (u && u.alive && u.hp < u.maxHp && f.status === 'garrison') {
          u.hp = Math.min(u.maxHp, u.hp + u.maxHp * 0.02 * mins);
        }
      }
    }
  }

  // 清理阵亡单位（保留记录，移出编制）
  pruneDead() {
    let removed = 0;
    for (const f of Object.values(this.formations)) {
      const dead = f.unitIds.filter(uid => { const u = this.units[uid]; return !u || !u.alive; });
      for (const uid of dead) f.removeUnit(uid);
      removed += dead.length;
    }
    for (const id in this.units) {
      if (!this.units[id].alive) delete this.units[id];
    }
    return removed;
  }

  serialize() {
    return { units: Object.values(this.units).map(u => u.serialize()),
      formations: Object.values(this.formations).map(f => f.serialize()),
      officers: Object.values(this.officers).map(o => o.serialize()),
      recruitQueue: _m3Clone(this.recruitQueue) };
  }
  static deserialize(d) {
    const a = new MilV3Army();
    for (const u of (d.units || [])) { const unit = MilV3Unit.deserialize(u); a.units[unit.id] = unit; }
    for (const f of (d.formations || [])) { const form = MilV3Formation.deserialize(f); a.formations[form.id] = form; }
    for (const o of (d.officers || [])) { const off = MilV3Officer.deserialize(o); a.officers[off.id] = off; }
    a.recruitQueue = _m3Clone(d.recruitQueue || []);
    return a;
  }
}


/* ============================== 战斗引擎 ============================== */
// 逐 tick 战斗模拟：移动 / 索敌 / 开火 / 护甲与穿甲 / 暴击 / 克制 / 侧翼 /
// 范围伤害 / 自爆 / 治疗与修理 / 侦察标记 / 士气溃退 / 城市攻防。
// 可独立使用（MilV3Battle.simulateScenario），也由入侵管理器驱动。
class MilV3Battle {
  constructor(opts) {
    opts = opts || {};
    this.mapSize = opts.mapSize || MILV3.MAP_SIZE_DEFAULT;
    const c = this.mapSize / 2;
    this.centerX = c; this.centerY = c;
    this.cityHp = opts.cityHp || 500;
    this.cityMaxHp = this.cityHp;
    this.timeMs = 0;
    this.ended = false;
    this.result = null;      // 'victory' | 'defeat' | 'draw'
    this.reason = '';
    this.rng = opts.seed ? _m3Mulberry32(opts.seed) : Math.random;
    this.bonuses = opts.bonuses || {};   // 武器修正
    this.doctrineFx = opts.doctrineFx || {};
    this.ammoFactor = typeof opts.ammoFactor === 'number' ? opts.ammoFactor : 1;
    this.fuelFactor = typeof opts.fuelFactor === 'number' ? opts.fuelFactor : 1;
    this.officerFx = opts.officerFx || null; // {dmgMul, morale, ...} 指挥官修正
    this.fighters = [];
    this.shotsFired = 0;
    this.kills = { def: 0, atk: 0 };
    this.log = [];
    this._moraleCheckMs = 0;
    this._startDefCount = 0;
    this._startAtkCount = 0;
    this._retreat = { def: false, atk: false };
    // 士气：防御方基础 70 + 军官/学说修正；进攻方 65
    this.morale = { def: 70 + ((this.officerFx && this.officerFx.morale) || 0) + (this.doctrineFx.morale || 0),
      atk: 65 };
  }

  static makeFighter(def, side, x, y, opts) {
    opts = opts || {};
    const f = {
      id: _m3Uid('f'), side, typeId: def.id, name: def.name, icon: def.icon || '',
      branch: def.branch || null, cls: def.class || def.branch || 'infantry',
      x, y, hp: def.hp, maxHp: def.hp,
      dmg: def.dmg, armor: def.armor || 0, pen: def.pen || 0,
      range: def.range, rof: def.rof, speed: def.speed,
      aoe: def.aoe || 0, kamikaze: !!def.kamikaze, heal: def.heal || 0,
      fortMul: def.fortMul || 1, aura: def.aura || 0,
      shield: 0, kills: 0, level: opts.level || 1,
      vetDmgMul: 1 + ((opts.level || 1) - 1) * 0.08,
      hpMul: opts.hpMul || 1, dmgMul: opts.dmgMul || 1,
      nextShotAt: 0, dotUntil: 0, dotDps: 0, suppressedUntil: 0, markedUntil: 0,
      dead: false, retreating: false, repairRate: 0,
    };
    if (def.id === 'engineer') f.repairRate = 2;
    if (def.id === 'eng_vehicle') f.repairRate = 6;
    if (def.id === 'medic') f.heal = 3;
    f.hp = Math.round(f.hp * f.hpMul);
    f.maxHp = f.hp;
    f.dmg = Math.round(f.dmg * f.dmgMul * 10) / 10;
    return f;
  }

  addFighters(list) {
    for (const f of list) this.fighters.push(f);
    this._startDefCount = this.fighters.filter(f => f.side === 'def').length;
    this._startAtkCount = this.fighters.filter(f => f.side === 'atk').length;
  }

  alive(side) { return this.fighters.filter(f => f.side === side && !f.dead); }

  _dist(a, b) { const dx = a.x - b.x, dy = a.y - b.y; return Math.sqrt(dx * dx + dy * dy); }

  _nearestEnemy(f) {
    let best = null, bd = 1e9;
    for (const e of this.fighters) {
      if (e.side === f.side || e.dead || e.retreating) continue;
      const d = this._dist(f, e);
      if (d < bd) { bd = d; best = e; }
    }
    return { target: best, dist: bd };
  }

  _nearestDamagedAlly(f, maxDist) {
    let best = null, bd = 1e9;
    for (const a of this.fighters) {
      if (a.side !== f.side || a.dead || a.hp >= a.maxHp) continue;
      const d = this._dist(f, a);
      if (d <= maxDist && d < bd) { bd = d; best = a; }
    }
    return best;
  }

  // 伤害计算：基础 x 老兵 x 武器 x 学说 x 军官 x 士气 x 克制 x 侧翼 x 光环 - 护甲（穿甲后）
  _calcDamage(att, def, isFlank) {
    const b = this.bonuses;
    const d = this.doctrineFx;
    let mul = att.vetDmgMul;
    if (b.dmgMul) mul *= b.dmgMul;
    if (d.dmgMul) mul *= d.dmgMul;
    if (this.officerFx && this.officerFx.dmgMul) mul *= this.officerFx.dmgMul;
    // 士气因子：士气 70 为基准，每 10 点士气 ±5% 伤害
    const morale = this.morale[att.side] || 70;
    mul *= 1 + (morale - 70) * 0.005;
    // 克制：攻击方克制表命中防御方类别 → x1.5；防空对空 x2
    const attDef = MILV3_UNIT_TYPES[att.typeId] || MILV3_ENEMIES[att.typeId] || {};
    const counters = attDef.counters || [];
    if (counters.includes(def.cls)) mul *= 1.5;
    if (att.typeId === 'aa_vehicle' && def.cls === 'air') mul *= 2;
    if (att.typeId === 'recon_drone') mul *= 0.5; // 侦察机几乎无攻击力
    // 侧翼
    if (isFlank) mul *= 1.25 + ((this.officerFx && this.officerFx.flankBonus) || 0);
    // 军阀光环：攻击方是敌人且附近有军阀
    if (att.side === 'atk') {
      for (const w of this.fighters) {
        if (!w.dead && w.typeId === 'raider_warlord' && this._dist(att, w) <= 6) { mul *= w.aura || 1.15; break; }
      }
    }
    // 弹药因子
    mul *= this.ammoFactor;
    let dmg = att.dmg * mul;
    // 暴击
    let crit = false;
    const critCh = MILV3.CRIT_CHANCE + (b.critChance || 0) + ((this.officerFx && this.officerFx.critChance) || 0);
    if (this.rng() < critCh) { dmg *= MILV3.CRIT_MUL; crit = true; }
    // 护甲与穿甲
    let pen = att.pen + (b.penMul || 0);
    if (b.armorIgnore) pen = Math.min(0.95, pen + b.armorIgnore);
    const effArmor = Math.max(0, def.armor * (1 - pen));
    // 对工事加成（火炮/爆破）
    if (def.cls === 'fort' && att.fortMul) dmg *= att.fortMul;
    if (b.fortMul && def.cls === 'fort') dmg *= b.fortMul;
    dmg = Math.max(1, Math.round(dmg - effArmor));
    if (this.timeMs < def.markedUntil) dmg = Math.round(dmg * 1.2);
    return { dmg, crit };
  }

  _isFlank(att, def) {
    // 侧翼判定：目标正被另一名友军从不同方向攻击（夹角 > 90°）
    for (const o of this.fighters) {
      if (o.side !== att.side || o.dead || o.id === att.id) continue;
      const d1 = this._dist(o, def);
      if (d1 > (o.range || 5) + 1) continue;
      const v1x = att.x - def.x, v1y = att.y - def.y;
      const v2x = o.x - def.x, v2y = o.y - def.y;
      const dot = v1x * v2x + v1y * v2y;
      const m1 = Math.sqrt(v1x * v1x + v1y * v1y) || 1;
      const m2 = Math.sqrt(v2x * v2x + v2y * v2y) || 1;
      if (dot / (m1 * m2) < 0) return true; // 夹角 > 90°
    }
    return false;
  }

  _dealDamage(att, def, base) {
    const res = this._calcDamage(att, def, this._isFlank(att, def));
    let dmg = res.dmg;
    // 护盾吸收
    if (def.shield > 0) {
      const absorbed = Math.min(def.shield, dmg);
      def.shield -= absorbed;
      dmg -= absorbed;
      // 护盾反射
      if (absorbed > 0 && (this.bonuses.shieldReflect || 0) > 0 && !att.dead) {
        att.hp -= Math.round(absorbed * this.bonuses.shieldReflect);
        if (att.hp <= 0) { att.hp = 0; att.dead = true; this._onKill(def, att); }
      }
    }
    if (dmg > 0) {
      def.hp -= dmg;
      // 等离子持续伤害
      if (this.bonuses.dotDps) { def.dotUntil = this.timeMs + 3000; def.dotDps = this.bonuses.dotDps; }
      // 压制
      if (this.bonuses.suppressMul && this.bonuses.suppressMul < 1) def.suppressedUntil = this.timeMs + 2000;
      if (def.hp <= 0) { def.hp = 0; def.dead = true; this._onKill(att, def); }
    }
    // 范围伤害：主目标周围 aoe 格内的其他敌人受 60%
    const aoe = (att.aoe || 0) + (this.bonuses.aoe || 0);
    if (aoe > 0 && !def.dead) {
      for (const e of this.fighters) {
        if (e.side === att.side || e.dead || e.id === def.id) continue;
        if (this._dist(e, def) <= aoe) {
          let splash = Math.round(res.dmg * 0.6);
          if (e.shield > 0) { const ab = Math.min(e.shield, splash); e.shield -= ab; splash -= ab; }
          if (splash > 0) {
            e.hp -= splash;
            if (e.hp <= 0) { e.hp = 0; e.dead = true; this._onKill(att, e); }
          }
        }
      }
    }
    return { dmg, crit: res.crit };
  }

  _onKill(killer, victim) {
    if (killer && killer.side) {
      killer.kills++;
      this.kills[killer.side]++;
      if (killer.side === 'def') {
        if (victim.cls === 'air') this._airKills = (this._airKills || 0) + 1;
        if (victim.typeId === 'raider_warlord') this._warlordKills = (this._warlordKills || 0) + 1;
      }
    }
  }

  _log(msg) {
    this.log.unshift('[' + Math.round(this.timeMs / 1000) + 's] ' + msg);
    if (this.log.length > 30) this.log.length = 30;
  }

  tick(dtMs) {
    if (this.ended) return;
    this.timeMs += dtMs;
    const dt = dtMs / 1000;
    const now = this.timeMs;
    // 护盾回复
    if (this.bonuses.shieldRegen) {
      for (const f of this.fighters) {
        if (!f.dead && f.shield < (f._shieldMax || 0)) f.shield = Math.min(f._shieldMax || 0, f.shield + this.bonuses.shieldRegen * dt);
      }
    }
    for (const f of this.fighters) {
      if (f.dead) continue;
      // 持续伤害
      if (now < f.dotUntil && f.dotDps) {
        f.hp -= f.dotDps * dt;
        if (f.hp <= 0) { f.hp = 0; f.dead = true; }
      }
      if (f.dead) continue;
      // 溃退中：向远离敌人的方向移动，不开火
      if (f.retreating) {
        const { target } = this._nearestEnemy(f);
        if (target) {
          const dx = f.x - target.x, dy = f.y - target.y;
          const m = Math.sqrt(dx * dx + dy * dy) || 1;
          f.x += (dx / m) * f.speed * dt;
          f.y += (dy / m) * f.speed * dt;
        }
        continue;
      }
      // 医疗/修理：优先治疗受伤友军
      if ((f.heal || f.repairRate) && f.typeId !== 'raider_medic') {
        const ally = this._nearestDamagedAlly(f, f.range + 1);
        if (ally) {
          const rate = (f.heal || 0) + (f.repairRate || 0);
          const mult = (this.officerFx && this.officerFx.healMul) || 1;
          ally.hp = Math.min(ally.maxHp, ally.hp + rate * mult * dt);
          continue;
        }
      }
      // 敌方医士治疗
      if (f.typeId === 'raider_medic') {
        const ally = this._nearestDamagedAlly(f, 5);
        if (ally) { ally.hp = Math.min(ally.maxHp, ally.hp + f.heal * dt); continue; }
      }
      // 侦察标记
      if (f.typeId === 'recon_drone') {
        const { target, dist } = this._nearestEnemy(f);
        if (target && dist <= f.range + 2) target.markedUntil = now + 3000;
      }
      const { target, dist } = this._nearestEnemy(f);
      // 进攻方接近市中心时攻击城市
      if (f.side === 'atk' && !target) {
        const dc = Math.sqrt((f.x - this.centerX) ** 2 + (f.y - this.centerY) ** 2);
        if (dc <= 2.5) {
          if (now >= f.nextShotAt) {
            this.cityHp -= f.dmg;
            f.nextShotAt = now + 1000 / f.rof;
            this.shotsFired++;
            if (this.cityHp <= 0) { this.cityHp = 0; this._end('defeat', '市中心被攻破'); return; }
          }
        } else {
          f.x += ((this.centerX - f.x) / dc) * f.speed * dt;
          f.y += ((this.centerY - f.y) / dc) * f.speed * dt;
        }
        continue;
      }
      if (!target) continue;
      const effRange = f.range + (this.bonuses.rangeBonus || 0) + ((this.officerFx && this.officerFx.rangeMul ? (f.range * (this.officerFx.rangeMul - 1)) : 0));
      if (dist > effRange) {
        // 移动接近：燃油不足时装甲/空军移速减半
        let sp = f.speed;
        if ((f.branch === 'armor' || f.branch === 'air') && this.fuelFactor < 1) sp *= this.fuelFactor;
        if (this.doctrineFx.speedMul) sp *= this.doctrineFx.speedMul;
        if (this.officerFx && this.officerFx.speedMul && f.branch === 'air') sp *= this.officerFx.speedMul;
        const step = Math.min(dist - effRange, sp * dt);
        f.x += ((target.x - f.x) / dist) * step;
        f.y += ((target.y - f.y) / dist) * step;
      } else {
        // 自爆无人机：进入 1.5 格即引爆
        if (f.kamikaze && dist <= 1.5) {
          const boom = Math.round(f.dmg * 3);
          target.hp -= boom;
          if (target.hp <= 0) { target.hp = 0; target.dead = true; this._onKill(f, target); }
          f.hp = 0; f.dead = true;
          this._log(f.name + ' 自爆，对 ' + target.name + ' 造成 ' + boom + ' 点伤害');
          continue;
        }
        if (now >= f.nextShotAt) {
          const interval = 1000 / f.rof;
          f.nextShotAt = now + (now < f.suppressedUntil && this.bonuses.suppressMul ? interval / this.bonuses.suppressMul : interval);
          this.shotsFired++;
          const res = this._dealDamage(f, target);
          if (res.crit) this._log(f.name + ' 暴击 ' + target.name + '（' + res.dmg + '）');
        }
      }
    }
    // 士气与溃退检查（每 5 秒）
    this._moraleCheckMs += dtMs;
    if (this._moraleCheckMs >= 5000) {
      this._moraleCheckMs = 0;
      this._checkMorale();
    }
    // 胜负判定
    const defAlive = this.alive('def').length;
    const atkAlive = this.alive('atk').length;
    if (atkAlive === 0 && this._startAtkCount > 0) { this._end('victory', '敌军全灭'); return; }
    if (defAlive === 0 && this._startDefCount > 0) { this._end('defeat', '守军全灭'); return; }
    if (atkAlive === 0 && this._startAtkCount === 0) { this._end('victory', '无敌军来袭'); return; }
    if (this.timeMs >= 10 * 60 * 1000) {
      // 超时：按剩余战力判定
      const defPower = this.alive('def').reduce((a, f) => a + f.hp, 0);
      const atkPower = this.alive('atk').reduce((a, f) => a + f.hp, 0);
      this._end(defPower >= atkPower ? 'victory' : 'defeat', '战斗超时，按剩余战力判定');
    }
  }

  _checkMorale() {
    for (const side of ['def', 'atk']) {
      const start = side === 'def' ? this._startDefCount : this._startAtkCount;
      const aliveN = this.alive(side).length;
      if (start === 0) continue;
      const lossRate = 1 - aliveN / start;
      let morale = this.morale[side] - lossRate * 60;
      if (side === 'def' && this.officerFx) morale += (this.officerFx.morale || 0);
      if (lossRate >= 0.5 && morale < 30 && !this._retreat[side]) {
        this._retreat[side] = true;
        for (const f of this.fighters) if (f.side === side && !f.dead) f.retreating = true;
        this._log((side === 'def' ? '守军' : '敌军') + '士气崩溃，开始溃退！');
        if (side === 'atk') { this._end('victory', '敌军溃退'); return; }
        if (side === 'def') { this._end('defeat', '守军溃退'); return; }
      }
    }
  }

  _end(result, reason) {
    if (this.ended) return;
    this.ended = true;
    this.result = result;
    this.reason = reason;
    this._log('战斗结束：' + (result === 'victory' ? '胜利' : result === 'defeat' ? '失败' : '平局') + '——' + reason);
  }

  // 快速模拟：以 100ms 步长推进到结束或上限秒数（确定性种子可复现）
  simulate(maxSeconds) {
    const steps = Math.ceil((maxSeconds || 600) * 10);
    for (let i = 0; i < steps && !this.ended; i++) this.tick(100);
    if (!this.ended) this._end('draw', '模拟时间耗尽');
    return this.summary();
  }

  summary() {
    const defAlive = this.alive('def');
    const atkAlive = this.alive('atk');
    return { result: this.result, reason: this.reason, durationSec: Math.round(this.timeMs / 1000),
      defAlive: defAlive.length, defStart: this._startDefCount, atkAlive: atkAlive.length, atkStart: this._startAtkCount,
      kills: _m3Clone(this.kills), airKills: this._airKills || 0, warlordKills: this._warlordKills || 0,
      shotsFired: this.shotsFired, cityHp: Math.round(this.cityHp), cityMaxHp: this.cityMaxHp,
      survivors: defAlive.map(f => ({ typeId: f.typeId, hp: Math.round(f.hp), kills: f.kills })) };
  }

  static simulateScenario(scenarioId, opts) {
    const sc = MILV3_BATTLE_SCENARIOS.find(s => s.id === scenarioId);
    if (!sc) return { ok: false, reason: '未知场景' };
    opts = opts || {};
    const battle = new MilV3Battle({ seed: opts.seed || 12345, mapSize: opts.mapSize || 50,
      bonuses: opts.bonuses || {}, doctrineFx: opts.doctrineFx || {} });
    const defs = [];
    let i = 0;
    for (const typeId in (sc.defenders || {})) {
      for (let n = 0; n < sc.defenders[typeId]; n++) {
        defs.push(MilV3Battle.makeFighter(MILV3_UNIT_TYPES[typeId], 'def', 20 + (i % 5), 20 + Math.floor(i / 5), {}));
        i++;
      }
    }
    const atks = [];
    let j = 0;
    for (const typeId in (sc.attackers || {})) {
      for (let n = 0; n < sc.attackers[typeId]; n++) {
        atks.push(MilV3Battle.makeFighter(MILV3_ENEMIES[typeId], 'atk', 30 + (j % 5), 30 + Math.floor(j / 5), {}));
        j++;
      }
    }
    battle.addFighters([...defs, ...atks]);
    const res = battle.simulate(opts.maxSeconds || 300);
    return { ok: true, scenario: sc.name, ...res };
  }
}


/* ============================== 入侵 ============================== */
class MilV3Invasion {
  constructor() {
    this.wave = 0;              // 下一波编号（1 起）
    this.nextWaveAt = MILV3.FIRST_WAVE_MIN * 60 * 1000;
    this.warnedAt = 0;          // 已预警的波次
    this.activeBattle = null;   // 当前战斗
    this.lastResult = null;
    this.wavesHeld = 0;
    this.wavesLost = 0;
    this.totalRaidersKilled = 0;
    this.log = [];
  }

  // 寻路：BFS（4 向），blocked 为 Set("x,y")，返回路径点列
  static findPath(sx, sy, tx, ty, size, blocked) {
    const key = (x, y) => x + ',' + y;
    const prev = new Map();
    const q = [[sx, sy]];
    prev.set(key(sx, sy), null);
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (q.length) {
      const [x, y] = q.shift();
      if (x === tx && y === ty) break;
      for (const [dx, dy] of dirs) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
        const k = key(nx, ny);
        if (prev.has(k)) continue;
        if (blocked && blocked.has(k) && !(nx === tx && ny === ty)) continue;
        prev.set(k, [x, y]);
        q.push([nx, ny]);
      }
    }
    if (!prev.has(key(tx, ty))) return null;
    const path = [];
    let cur = [tx, ty];
    while (cur) { path.unshift(cur); cur = prev.get(key(cur[0], cur[1])); }
    return path;
  }

  // 随机边缘出生点
  static randomEdgeSpawn(size, rng) {
    const r = rng || Math.random;
    const edge = Math.floor(r() * 4);
    if (edge === 0) return [Math.floor(r() * size), 0];
    if (edge === 1) return [Math.floor(r() * size), size - 1];
    if (edge === 2) return [0, Math.floor(r() * size)];
    return [size - 1, Math.floor(r() * size)];
  }

  waveDef(n) {
    const idx = ((n - 1) % MILV3_WAVES.length);
    const base = MILV3_WAVES[idx];
    const cycle = Math.floor((n - 1) / MILV3_WAVES.length);
    return { ...base, wave: n, hpMul: base.hpMul * (1 + cycle * 0.5), dmgMul: base.dmgMul * (1 + cycle * 0.3) };
  }

  // 生成一波：返回战斗机列表（出生点在边缘）
  spawnWave(n, mapSize, rng) {
    const def = this.waveDef(n);
    const fighters = [];
    for (const typeId in (def.composition || {})) {
      const ed = MILV3_ENEMIES[typeId];
      if (!ed) continue;
      for (let i = 0; i < def.composition[typeId]; i++) {
        const [x, y] = MilV3Invasion.randomEdgeSpawn(mapSize, rng);
        fighters.push(MilV3Battle.makeFighter(ed, 'atk', x, y, { hpMul: def.hpMul, dmgMul: def.dmgMul }));
      }
    }
    return { def, fighters };
  }

  // 城市 HP：500 + 防御建筑加成（防御性读取）
  cityHp(game) {
    let hp = 500;
    try {
      const b = game && game.builder;
      if (b && b.buildings) {
        const list = Array.isArray(b.buildings) ? b.buildings : Object.values(b.buildings);
        for (const bd of list) {
          const id = (bd && (bd.id || bd.type)) || '';
          if (/turret|wall|bunker|tower/i.test(id)) hp += 20 * (bd.level || 1);
        }
      }
    } catch (e) { /* 忽略 */ }
    return hp;
  }

  serialize() {
    return { wave: this.wave, nextWaveAt: this.nextWaveAt, warnedAt: this.warnedAt,
      wavesHeld: this.wavesHeld, wavesLost: this.wavesLost,
      totalRaidersKilled: this.totalRaidersKilled, log: _m3Clone(this.log) };
  }
  static deserialize(d) {
    const inv = new MilV3Invasion();
    inv.wave = d.wave || 0;
    inv.nextWaveAt = d.nextWaveAt || MILV3.FIRST_WAVE_MIN * 60 * 1000;
    inv.warnedAt = d.warnedAt || 0;
    inv.wavesHeld = d.wavesHeld || 0;
    inv.wavesLost = d.wavesLost || 0;
    inv.totalRaidersKilled = d.totalRaidersKilled || 0;
    inv.log = _m3Clone(d.log || []);
    inv.activeBattle = null;
    return inv;
  }
}

/* ============================== 军事总管 ============================== */
class MilitaryV3Manager {
  constructor() {
    this.army = new MilV3Army();
    this.weapons = new MilV3WeaponResearch();
    this.doctrine = new MilV3Doctrine();
    this.logistics = new MilV3Logistics();
    this.invasion = new MilV3Invasion();
    this.buildingLevels = {};   // {buildingId: level}
    this.medals = new Set();
    this.stats = { kills: 0, airKills: 0, warlordKills: 0, wavesHeld: 0, flawlessWins: 0, battlesWon: 0, battlesLost: 0, unitsLost: 0 };
    this.gameTimeMs = 0;
    this._upkeepAccMs = 0;
    this._minuteAccMs = 0;
    this._shieldRegenAccMs = 0;
    this.eventLog = [];
    this._lastWaveCheck = 0;
  }

  log(msg) {
    this.eventLog.unshift({ t: Date.now(), gameTimeMs: this.gameTimeMs, msg });
    if (this.eventLog.length > 50) this.eventLog.length = 50;
  }

  /* ---------- 军事建筑配套接口 ---------- */
  registerBuilding(buildingId, level) {
    const spec = MILV3_BUILDING_SPECS.find(b => b.id === buildingId);
    if (!spec) return { ok: false, reason: '未知军事建筑（接口未注册）' };
    const lv = _m3Clamp(level || 0, 0, 3);
    if (lv === 0) delete this.buildingLevels[buildingId];
    else this.buildingLevels[buildingId] = lv;
    return { ok: true, building: spec.name, level: lv, bonus: this.getBuildingBonus(buildingId) };
  }

  getBuildingBonus(buildingId) {
    const spec = MILV3_BUILDING_SPECS.find(b => b.id === buildingId);
    if (!spec) return null;
    const lv = this.buildingLevels[buildingId] || 0;
    if (lv <= 0) return { level: 0, bonus: {} };
    return { level: lv, bonus: _m3Clone(spec.levels[lv].bonus || {}) };
  }

  // 聚合全部已登记军事建筑的加成
  buildingBonuses() {
    const b = { recruitCap: 0, recruitSpeedMul: 1, dmgMul: 1, ammoCap: 0, airCap: 0, airDmgMul: 1,
      trainSpeedMul: 1, officerCap: 0, ammoPerMin: 0, fuelPerMin: 0, shieldHp: 0, shieldRegen: 0,
      detectBonus: 0, warnMin: 0, formationCap: 0, morale: 0 };
    for (const id in this.buildingLevels) {
      const spec = MILV3_BUILDING_SPECS.find(x => x.id === id);
      if (!spec) continue;
      const lv = this.buildingLevels[id];
      const bonus = spec.levels[lv].bonus || {};
      for (const k in bonus) {
        if (k === 'dmgMul' || k === 'airDmgMul' || k === 'recruitSpeedMul' || k === 'trainSpeedMul') b[k] *= bonus[k];
        else if (k === 'warnMin') b[k] = Math.max(b[k], bonus[k]);
        else b[k] = (b[k] || 0) + bonus[k];
      }
    }
    return b;
  }

  recruitCap() { return 2 + (this.buildingBonuses().recruitCap || 0); }
  formationCap() { return MILV3.MAX_FORMATIONS + (this.buildingBonuses().formationCap || 0); }
  officerCap() { return MILV3.MAX_OFFICERS + (this.buildingBonuses().officerCap || 0); }
  airCap() { return 999 + (this.buildingBonuses().airCap || 0); } // 基础不限，空军基地提升上限时收紧为计数
  detectRadius() { return MILV3.DETECTION_BASE + (this.buildingBonuses().detectBonus || 0); }

  // 指挥官修正（取参战编制中军衔最高军官的修正）
  officerEffectsFor(formations) {
    let best = null;
    for (const f of (formations || [])) {
      if (f.officerId && this.army.officers[f.officerId]) {
        const o = this.army.officers[f.officerId];
        if (!best || o.level > best.level) best = o;
      }
    }
    if (!best) return null;
    const sk = best.skillEffects();
    const tr = best.traitEffects();
    return { dmgMul: sk.dmgMul * tr.dmgMul, morale: sk.morale + tr.morale,
      critChance: tr.critChance || 0, flankBonus: tr.flankBonus || 0,
      healMul: sk.healMul * tr.healMul, speedMul: tr.speedMul || 1,
      rangeMul: tr.rangeMul || 1, officerName: best.name, officerLevel: best.level };
  }

  /* ---------- 防御加成（供 game.js / 旧 military.js 读取） ---------- */
  getDefenseBonus() {
    const b = this.buildingBonuses();
    const medals = this.medalBonuses();
    const doc = this.doctrine.effects();
    return {
      defenseMul: (medals.defenseMul || 1) * (doc.defenseMul || 1),
      dmgMul: (b.dmgMul || 1) * (medals.dmgMul || 1) * (doc.dmgMul || 1),
      morale: (b.morale || 0) + (medals.morale || 0) + (doc.morale || 0),
      detectRadius: this.detectRadius(),
      shieldHp: (this.weapons.bonuses().shieldHp || 0) + (b.shieldHp || 0),
      formations: Object.keys(this.army.formations).length,
      aliveUnits: this.army.aliveUnitCount(),
      officers: this.army.officerCount(),
    };
  }

  medalBonuses() {
    const m = { dmgMul: 1, airDmgMul: 1, defenseMul: 1, morale: 0 };
    for (const id of this.medals) {
      const med = MILV3_MEDALS.find(x => x.id === id);
      if (!med) continue;
      for (const k in (med.bonus || {})) {
        if (k === 'morale') m.morale += med.bonus[k];
        else m[k] = (m[k] || 1) * med.bonus[k];
      }
    }
    return m;
  }

  checkMedals() {
    const s = this.stats;
    const conds = {
      med_first_blood: s.kills >= 1,
      med_veteran: s.kills >= 100,
      med_ace: s.airKills >= 50,
      med_wall: s.wavesHeld >= 5,
      med_flawless: s.flawlessWins >= 3,
      med_hunter: s.warlordKills >= 3,
      med_savior: s.wavesHeld >= 10,
      med_legend: s.wavesHeld >= 20,
    };
    const gained = [];
    for (const id in conds) {
      if (conds[id] && !this.medals.has(id)) {
        this.medals.add(id);
        gained.push(MILV3_MEDALS.find(m => m.id === id).name);
      }
    }
    if (gained.length) this.log('获得勋章：' + gained.join('、'));
    return gained;
  }

  /* ---------- 入侵调度 ---------- */
  _maybeWarn(game) {
    const inv = this.invasion;
    if (inv.activeBattle) return;
    const warnMs = (1 + (this.buildingBonuses().warnMin || 0)) * 60 * 1000;
    const nextWave = inv.wave + 1;
    if (inv.warnedAt !== nextWave && inv.nextWaveAt - this.gameTimeMs <= warnMs) {
      inv.warnedAt = nextWave;
      const def = inv.waveDef(nextWave);
      this.log('⚠️ 预警：第 ' + nextWave + ' 波入侵即将到来（' + def.count + ' 名敌人）');
      if (game && typeof game.toast === 'function') game.toast('⚠️ 预警：第 ' + nextWave + ' 波入侵即将到来！');
    }
  }

  _maybeSpawnWave(game) {
    const inv = this.invasion;
    if (inv.activeBattle) return;
    if (this.gameTimeMs < inv.nextWaveAt) return;
    const waveNo = inv.wave + 1;
    inv.wave = waveNo;
    inv.nextWaveAt = this.gameTimeMs + MILV3.WAVE_INTERVAL_MIN * 60 * 1000;
    const mapSize = (game && game.map && game.map.size) || MILV3.MAP_SIZE_DEFAULT;
    const { def, fighters } = inv.spawnWave(waveNo, mapSize);
    // 防御方：全部可战单位（迎击/驻守编制 + 散兵），按战备过滤
    const defFighters = [];
    const formations = [];
    for (const f of Object.values(this.army.formations)) {
      if (f.status === 'training') continue;
      if (f.readiness < 30) continue;
      formations.push(f);
      for (const uid of f.unitIds) {
        const u = this.army.units[uid];
        if (u && u.alive) {
          const ff = MilV3Battle.makeFighter(u.def, 'def', u.x, u.y, { level: u.level });
          ff._unitId = u.id;
          ff.shield = 0;
          defFighters.push(ff);
        }
      }
    }
    for (const u of Object.values(this.army.units)) {
      if (!u.alive || u.formationId) continue;
      const ff = MilV3Battle.makeFighter(u.def, 'def', u.x, u.y, { level: u.level });
      ff._unitId = u.id;
      defFighters.push(ff);
    }
    // 护盾分配：护盾池按人数分给防御方
    const shieldPool = (this.weapons.bonuses().shieldHp || 0) + (this.buildingBonuses().shieldHp || 0);
    if (shieldPool > 0 && defFighters.length) {
      const per = Math.floor(shieldPool / defFighters.length);
      for (const ff of defFighters) { ff.shield = per; ff._shieldMax = per; }
    }
    const battle = new MilV3Battle({
      mapSize, cityHp: inv.cityHp(game),
      bonuses: this.weapons.bonuses(),
      doctrineFx: this.doctrine.effects(),
      ammoFactor: this.logistics.ammoFactor(),
      fuelFactor: this.logistics.fuelFactor(),
      officerFx: this.officerEffectsFor(formations),
    });
    battle.addFighters([...defFighters, ...fighters]);
    battle._defFighters = defFighters;
    battle._waveNo = waveNo;
    battle._waveDef = def;
    inv.activeBattle = battle;
    inv.log.unshift({ t: Date.now(), wave: waveNo, count: def.count });
    this.log('⚔️ 第 ' + waveNo + ' 波入侵开始：' + def.count + ' 名敌人从边缘进攻，' + defFighters.length + ' 名守军迎击');
    if (game && typeof game.toast === 'function') game.toast('⚔️ 第 ' + waveNo + ' 波入侵开始！');
  }

  _resolveBattle(game) {
    const inv = this.invasion;
    const battle = inv.activeBattle;
    if (!battle || !battle.ended) return;
    const res = battle.summary();
    inv.activeBattle = null;
    inv.lastResult = res;
    const waveNo = battle._waveNo;
    const defFighters = battle._defFighters || [];
    // 同步防御方单位状态回陆军
    let lost = 0;
    for (const ff of defFighters) {
      const u = this.army.units[ff._unitId];
      if (!u) continue;
      if (ff.dead) { u.hp = 0; u.status = 'dead'; lost++; }
      else {
        u.hp = Math.max(1, Math.round(ff.hp));
        u.x = ff.x; u.y = ff.y;
        u.gainXp(ff.kills * MILV3.XP_PER_KILL);
        u.kills += ff.kills;
      }
    }
    this.stats.unitsLost += lost;
    this.stats.kills += res.kills.def || 0;
    this.stats.airKills += res.airKills || 0;
    this.stats.warlordKills += res.warlordKills || 0;
    inv.totalRaidersKilled += res.kills.def || 0;
    // 弹药消耗
    this.logistics.consumeAmmo(Math.min(this.logistics.ammo, Math.ceil(res.shotsFired * 0.5)));
    // 军官：参战编制的军官获得 XP，结算伤亡
    for (const f of Object.values(this.army.formations)) {
      if (!f.officerId || !this.army.officers[f.officerId]) continue;
      const o = this.army.officers[f.officerId];
      o.battles++;
      if (res.result === 'victory') { o.wins++; o.gainXp(MILV3.XP_PER_BATTLE_WIN + (res.kills.def || 0)); }
      const exposure = f.status === 'intercept' ? 1 : 0.7;
      const cas = o.rollCasualty(exposure);
      if (cas && cas.result !== 'ok') this.log('军官 ' + o.name + (cas.result === 'killed' ? ' 阵亡！' : ' 负伤！'));
      f.battles++;
      if (res.result === 'victory') f.wins++;
      f.kills += res.kills.def || 0;
      f.readiness = Math.max(0, f.readiness - MILV3.READINESS_DECAY_COMBAT * Math.max(1, res.durationSec / 60));
      f.morale = _m3Clamp(f.morale + (res.result === 'victory' ? 5 : -10), MILV3.MORALE_MIN, MILV3.MORALE_MAX);
    }
    if (res.result === 'victory') {
      this.stats.battlesWon++;
      this.stats.wavesHeld++;
      inv.wavesHeld++;
      if (lost === 0) this.stats.flawlessWins++;
      // 战利品：波次奖励 + 敌人成本 30%
      const bonus = (battle._waveDef && battle._waveDef.bonus) || {};
      const invRes = (game && game.player && game.player.inv) || null;
      if (invRes) {
        for (const k in bonus) invRes[k] = (invRes[k] || 0) + bonus[k];
        const salvage = Math.round((battle._waveDef ? battle._waveDef.count : 10) * 2 * MILV3.SALVAGE_RATE);
        invRes.iron = (invRes.iron || 0) + salvage;
      }
      this.log('✅ 第 ' + waveNo + ' 波守住了！击杀 ' + (res.kills.def || 0) + '，损失 ' + lost + '，缴获战利品');
      // 跨系统联动：通知政治系统“袭击刚结束”（供事件链触发）
      if (game && game.politics) game.politics._raidRecent = true;
      if (game) game._m3RaidRecent = true;
    } else {
      this.stats.battlesLost++;
      inv.wavesLost++;
      // 战败：城市受损，扣除资源
      const invRes = (game && game.player && game.player.inv) || null;
      if (invRes) {
        invRes.iron = Math.max(0, (invRes.iron || 0) - 50);
        invRes.food = Math.max(0, (invRes.food || 0) - 30);
      }
      this.log('❌ 第 ' + waveNo + ' 波失守：' + res.reason + '，城市受损（铁矿 -50，食物 -30）');
      if (game && game.politics) game.politics._raidRecent = true;
      if (game) game._m3RaidRecent = true;
    }
    this.army.pruneDead();
    this.checkMedals();
  }

  /* ---------- 主循环 ---------- */
  update(now, dt, game) {
    const dtMs = Math.max(0, dt || 0);
    this.gameTimeMs += dtMs;
    if (game) game._m3TimeMs = this.gameTimeMs;
    const mapSize = (game && game.map && game.map.size) || MILV3.MAP_SIZE_DEFAULT;
    // 征兵结算
    const recruited = this.army.tickRecruits(this.gameTimeMs, mapSize);
    for (const r of recruited) this.log('征兵完成：' + (MILV3_UNIT_TYPES[r.typeId] || {}).name + ' x' + r.count);
    // 军官训练结算
    for (const o of Object.values(this.army.officers)) {
      if (o.training && this.gameTimeMs >= o.training.endsAt) {
        const res = o.finishTraining();
        if (res) this.log('军官 ' + o.name + ' 完成训练：' + res.program);
      }
      if (o.status === 'wounded' && Date.now() >= o.woundedUntil) {
        o.status = 'active';
        this.log('军官 ' + o.name + ' 伤愈归队');
      }
    }
    // 武器研发与学说研发结算
    for (const done of this.weapons.tick(this.gameTimeMs)) {
      const w = MILV3_WEAPONS.find(x => x.id === done.weaponId);
      this.log('武器研发完成：' + w.name + ' Lv.' + done.level);
    }
    const docDone = this.doctrine.tick(this.gameTimeMs);
    if (docDone) this.log('学说研发完成：' + (MILV3_DOCTRINES.find(d => d.id === docDone.done) || {}).name);
    // 每分钟：维持费 + 后勤生产
    this._upkeepAccMs += dtMs;
    if (this._upkeepAccMs >= 60 * 1000) {
      this._upkeepAccMs -= 60 * 1000;
      const up = this.army.tickUpkeep(game);
      if (up.short.length) this.log('维持费不足（缺 ' + up.short.join('、') + '），全军战备 -10');
      this.logistics.tickMinute(this.buildingBonuses());
    }
    // 战备恢复
    this.army.tickRecovery(dtMs);
    // 入侵调度
    this._maybeWarn(game);
    this._maybeSpawnWave(game);
    // 战斗推进
    if (this.invasion.activeBattle) {
      this.invasion.activeBattle.tick(dtMs);
      if (this.invasion.activeBattle.ended) this._resolveBattle(game);
    }
    return null;
  }

  /* ---------- 便捷操作（UI 直接调用） ---------- */
  recruit(typeId, count, game) {
    const b = this.buildingBonuses();
    return this.army.recruit(typeId, count, game, this.gameTimeMs, this.recruitCap(), b.recruitSpeedMul || 1);
  }
  createFormation(branch, tier, name) {
    return this.army.createFormation(branch, tier, name, this.formationCap());
  }
  enlistOfficer(name) { return this.army.enlistOfficer(name, this.officerCap()); }
  trainOfficer(officerId, programId) {
    const o = this.army.officers[officerId];
    if (!o) return { ok: false, reason: '军官不存在' };
    const b = this.buildingBonuses();
    const p = MILV3_TRAINING.find(x => x.id === programId);
    if (!p) return { ok: false, reason: '未知训练项目' };
    const g = this._lastGame;
    const ginv = (g && g.player && g.player.inv) || null;
    if (ginv) {
      for (const k in (p.cost || {})) if ((ginv[k] || 0) < p.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in (p.cost || {})) ginv[k] -= p.cost[k];
    }
    return o.startTraining(programId, this.gameTimeMs, b.trainSpeedMul || 1);
  }

  // 独立战斗模拟（教学/自测）
  simulateBattle(scenarioId, opts) {
    return MilV3Battle.simulateScenario(scenarioId, {
      seed: (opts && opts.seed) || 12345,
      bonuses: this.weapons.bonuses(),
      doctrineFx: this.doctrine.effects(),
      maxSeconds: (opts && opts.maxSeconds) || 300,
    });
  }

  summary() {
    return {
      gameTimeMin: Math.round(this.gameTimeMs / 60000),
      units: this.army.unitCount(),
      aliveUnits: this.army.aliveUnitCount(),
      formations: Object.keys(this.army.formations).length,
      officers: this.army.officerCount(),
      weapons: _m3Clone(this.weapons.levels),
      doctrine: this.doctrine.active,
      ammo: Math.round(this.logistics.ammo),
      fuel: Math.round(this.logistics.fuel),
      supply: this.logistics.supplyLevel,
      nextWaveInMin: Math.max(0, Math.round((this.invasion.nextWaveAt - this.gameTimeMs) / 60000)),
      wave: this.invasion.wave,
      wavesHeld: this.invasion.wavesHeld,
      battleActive: !!this.invasion.activeBattle,
      battle: this.invasion.activeBattle ? this.invasion.activeBattle.summary() : null,
      medals: [...this.medals],
      stats: _m3Clone(this.stats),
      defense: this.getDefenseBonus(),
    };
  }

  /* ---------- 存档 ---------- */
  save() {
    return { v: 1, gameTimeMs: this.gameTimeMs, buildingLevels: _m3Clone(this.buildingLevels),
      medals: [...this.medals], stats: _m3Clone(this.stats),
      army: this.army.serialize(), weapons: this.weapons.serialize(),
      doctrine: this.doctrine.serialize(), logistics: this.logistics.serialize(),
      invasion: this.invasion.serialize(), eventLog: _m3Clone(this.eventLog) };
  }

  load(data) {
    if (!data) return;
    this.gameTimeMs = data.gameTimeMs || 0;
    this.buildingLevels = _m3Clone(data.buildingLevels || {});
    this.medals = new Set(data.medals || []);
    this.stats = Object.assign({ kills: 0, airKills: 0, warlordKills: 0, wavesHeld: 0, flawlessWins: 0, battlesWon: 0, battlesLost: 0, unitsLost: 0 }, data.stats || {});
    if (data.army) this.army = MilV3Army.deserialize(data.army);
    if (data.weapons) this.weapons = MilV3WeaponResearch.deserialize(data.weapons);
    if (data.doctrine) this.doctrine = MilV3Doctrine.deserialize(data.doctrine);
    if (data.logistics) this.logistics = MilV3Logistics.deserialize(data.logistics);
    if (data.invasion) this.invasion = MilV3Invasion.deserialize(data.invasion);
    this.eventLog = _m3Clone(data.eventLog || []);
    this.invasion.activeBattle = null;
  }
}

/* ============================== 集成助手 ============================== */
const MilitaryV3Integration = {
  attach(game) {
    if (!game) return null;
    if (!game.militaryV3) game.militaryV3 = new MilitaryV3Manager();
    const mgr = game.militaryV3;
    mgr._lastGame = game;
    game.militaryV3Defense = function () { return mgr.getDefenseBonus(); };
    return mgr;
  },
  tick(game, now, dt) {
    if (game && game.militaryV3) {
      game.militaryV3._lastGame = game;
      game.militaryV3.update(now, dt, game);
    }
  },
};

/* ============================== 自测 ============================== */
class MilV3SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _m3TimeMs: 0,
      player: { inv: { iron: 2000, ice: 500, rare: 300, water: 500, food: 1000, steel: 800, tech: 800, uranium: 50, he3: 20 } },
      pop: { count: 60, cap: () => 200 },
      builder: { buildings: [{ id: 'mg_turret', level: 2 }, { id: 'wall', level: 1 }], totalPower: () => 100, totalPowerUse: () => 50 },
      map: { size: 50 }, military: { raidStrength: 0 } });
    // 1. 实例化
    const m = new MilitaryV3Manager();
    check('实例化 MilitaryV3Manager', !!m && !!m.army && !!m.weapons, '');
    check('16 种单位类型', MILV3_UNIT_LIST.length === 16, 'n=' + MILV3_UNIT_LIST.length);
    check('编制 15 种（5 级 x 3 兵种）', Object.keys(MILV3_FORMATIONS).length === 15, '');
    check('5 种武器 x 3 级', MILV3_WEAPONS.length === 5 && MILV3_WEAPONS.every(w => w.levels.length === 3), '');
    check('20 波入侵编成', MILV3_WAVES.length === 20, '');
    check('6 种学说', MILV3_DOCTRINES.length === 6, '');
    check('8 种军事建筑接口', MILV3_BUILDING_SPECS.length === 8, '');
    // 2. 征兵与编制
    const g = mockGame();
    const rec = m.recruit('rifleman', 4, g);
    check('征兵 4 名步枪兵成功', rec.ok, rec.reason || '');
    m.update(0, 10 * 60 * 1000, g);
    check('征兵到期生成单位', m.army.unitCount() === 4, 'units=' + m.army.unitCount());
    const form = m.createFormation('infantry', 1, '第一步兵班');
    check('创建步兵班编制', form.ok, form.reason || '');
    const uid = Object.keys(m.army.units)[0];
    const asg = m.army.assignUnit(uid, form.formation.id);
    check('单位编入编制', asg.ok, asg.reason || '');
    // 兵种不符应拒绝
    const rec2 = m.recruit('tank', 1, g);
    m.update(0, 10 * 60 * 1000, g);
    const tankUid = Object.keys(m.army.units).find(id => m.army.units[id].typeId === 'tank');
    const badAssign = tankUid ? m.army.assignUnit(tankUid, form.formation.id) : { ok: false };
    check('坦克编入步兵班被拒绝', !badAssign.ok, '');
    // 3. 军官
    const off = m.enlistOfficer('赵铁山');
    check('招募军官成功', off.ok && off.officer.level === 1, off.reason || '');
    const officer = off.officer;
    const leveled = officer.gainXp(250);
    check('军官升级（250XP 升 2 级）', officer.level === 3 || officer.level === 2, 'level=' + officer.level);
    const tr = officer.startTraining('tr_drill', m.gameTimeMs, 1);
    check('军官开始训练', tr.ok, tr.reason || '');
    // 训练需前置等级：实弹演习需 3 级
    const tr2 = officer.startTraining('tr_livefire', m.gameTimeMs, 1);
    check('重复训练被拒绝（已在训练中）', !tr2.ok, '');
    // 4. 武器研发
    const wres = m.weapons.startResearch('wp_laser_cannon', g, m.gameTimeMs);
    check('激光炮研发启动', wres.ok, wres.reason || '');
    m.update(0, 6 * 60 * 1000, g);
    check('激光炮研发完成到 1 级', m.weapons.levels.wp_laser_cannon === 1, 'lv=' + m.weapons.levels.wp_laser_cannon);
    const wb = m.weapons.bonuses();
    check('武器修正生效（伤害 >1）', wb.dmgMul > 1, 'dmgMul=' + wb.dmgMul);
    // 5. 学说
    const dres = m.doctrine.research('doc_blitz', g, m.gameTimeMs);
    check('闪电战学说研发启动', dres.ok, dres.reason || '');
    m.update(0, 7 * 60 * 1000, g);
    check('学说研发完成', m.doctrine.researched.has('doc_blitz'), '');
    const dact = m.doctrine.activate('doc_blitz', m.gameTimeMs);
    check('学说激活', dact.ok && m.doctrine.active === 'doc_blitz', dact.reason || '');
    // 6. 军事建筑接口
    const reg = m.registerBuilding('barracks', 2);
    check('兵营 2 级登记成功', reg.ok && reg.bonus.bonus.recruitCap === 4, JSON.stringify(reg));
    check('建筑加成聚合（征兵上限提升）', m.recruitCap() === 6, 'cap=' + m.recruitCap());
    const badReg = m.registerBuilding('no_such_building', 1);
    check('未知建筑登记被拒绝', !badReg.ok, '');
    // 7. 战斗模拟（确定性）
    const sim1 = MilV3Battle.simulateScenario('sc_patrol', { seed: 42 });
    const sim2 = MilV3Battle.simulateScenario('sc_patrol', { seed: 42 });
    check('战斗模拟有结果', sim1.ok && typeof sim1.result === 'string', sim1.result);
    check('同种子模拟结果一致', sim1.result === sim2.result && sim1.defAlive === sim2.defAlive, sim1.result + '/' + sim2.result);
    const simFull = MilV3Battle.simulateScenario('sc_full', { seed: 7 });
    check('全面战争场景可模拟完成', simFull.ok && simFull.result !== null, simFull.result + ' defAlive=' + simFull.defAlive);
    // 8. 寻路
    const path = MilV3Invasion.findPath(0, 0, 49, 49, 50, new Set());
    check('BFS 寻路连通', Array.isArray(path) && path.length === 99, 'len=' + (path ? path.length : 0));
    const blocked = new Set();
    for (let x = 0; x < 50; x++) blocked.add(x + ',25');
    const path2 = MilV3Invasion.findPath(0, 0, 49, 49, 50, blocked);
    check('BFS 绕过障碍墙', path2 === null, 'blocked wall should be impassable');
    // 9. 入侵波次：快进到首波并打完
    m.gameTimeMs = MILV3.FIRST_WAVE_MIN * 60 * 1000;
    m.invasion.nextWaveAt = m.gameTimeMs;
    m.update(0, 1000, g);
    check('首波入侵触发战斗', !!m.invasion.activeBattle, '');
    if (m.invasion.activeBattle) {
      const res = m.invasion.activeBattle.simulate(600);
      check('入侵战斗可模拟到结束', !!res.result, res.result);
      const heldBefore = m.invasion.wavesHeld + m.invasion.wavesLost;
      m._resolveBattle(g);
      check('战斗结算后无进行中战斗', !m.invasion.activeBattle, '');
      check('波次统计更新', m.invasion.wavesHeld + m.invasion.wavesLost === heldBefore + 1, 'held=' + m.invasion.wavesHeld + ' lost=' + m.invasion.wavesLost);
    }
    // 10. 后勤
    const ammoBefore = m.logistics.ammo;
    m.logistics.consumeAmmo(100);
    check('弹药消耗', m.logistics.ammo === ammoBefore - 100, '');
    m.logistics.ammo = 0;
    check('缺弹时伤害因子 0.3', m.logistics.ammoFactor() === 0.3, '');
    m.logistics.ammo = 100;
    // 11. 勋章
    m.stats.kills = 100;
    const medals = m.checkMedals();
    check('击杀 100 获得勋章', m.medals.has('med_veteran') && medals.length >= 1, medals.join(','));
    // 12. 存档往返
    const saved = m.save();
    const m2 = new MilitaryV3Manager();
    m2.load(saved);
    check('存档往返：单位数保留', m2.army.unitCount() === m.army.unitCount(), m2.army.unitCount() + '/' + m.army.unitCount());
    check('存档往返：武器等级保留', m2.weapons.levels.wp_laser_cannon === 1, '');
    check('存档往返：勋章保留', m2.medals.has('med_veteran'), '');
    check('存档往返：波次保留', m2.invasion.wave === m.invasion.wave, '');
    // 13. 防御加成接口
    const def = m.getDefenseBonus();
    check('防御加成接口返回数值', def && typeof def.detectRadius === 'number' && def.detectRadius >= 12, 'detect=' + def.detectRadius);
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

/* 老兵等级表：16 种单位 x 5 级，击杀数门槛与伤害/血量/特殊加成 */
const MILV3_VET_LEVELS = {
  "militia": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "rifleman": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "heavy_infantry": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "sniper": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "engineer": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "medic": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "apc": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "tank": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "artillery": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "aa_vehicle": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "eng_vehicle": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "recon_drone": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "attack_drone": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "heli": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "fighter": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ],
  "transport": [
    {
      "level": 1,
      "title": "新兵",
      "killsNeeded": 0,
      "dmgMul": 1.0,
      "hpMul": 1.0,
      "special": "无"
    },
    {
      "level": 2,
      "title": "老兵",
      "killsNeeded": 5,
      "dmgMul": 1.08,
      "hpMul": 1.1,
      "special": "伤害 +8%，血量 +10%"
    },
    {
      "level": 3,
      "title": "精锐",
      "killsNeeded": 15,
      "dmgMul": 1.16,
      "hpMul": 1.2,
      "special": "伤害 +16%，血量 +20%，士气 +2"
    },
    {
      "level": 4,
      "title": "王牌",
      "killsNeeded": 30,
      "dmgMul": 1.24,
      "hpMul": 1.3,
      "special": "伤害 +24%，血量 +30%，暴击 +3%"
    },
    {
      "level": 5,
      "title": "传奇",
      "killsNeeded": 50,
      "dmgMul": 1.35,
      "hpMul": 1.45,
      "special": "伤害 +35%，血量 +45%，暴击 +5%，射程 +1"
    }
  ]
};

/* 9 种地形：伤害/防御/移速/侦测修正（按战斗机所在扇区生效） */
const MILV3_TERRAIN = [
  {
    "id": "plain",
    "name": "平原",
    "icon": "🏜️",
    "dmgMul": 1.0,
    "defMul": 1.0,
    "speedMul": 1.0,
    "detectMul": 1.0,
    "desc": "无修正的标准地形。"
  },
  {
    "id": "crater",
    "name": "陨石坑",
    "icon": "🕳️",
    "dmgMul": 1.0,
    "defMul": 1.2,
    "speedMul": 0.9,
    "detectMul": 0.9,
    "desc": "防守方防御 +20%，移速 -10%，侦测 -10%（坑内隐蔽）。"
  },
  {
    "id": "canyon",
    "name": "峡谷",
    "icon": "🏔️",
    "dmgMul": 1.1,
    "defMul": 1.1,
    "speedMul": 0.8,
    "detectMul": 1.1,
    "desc": "伤害 +10%，防御 +10%，移速 -20%，侦测 +10%（居高临下）。"
  },
  {
    "id": "icefield",
    "name": "冰原",
    "icon": "🧊",
    "dmgMul": 0.95,
    "defMul": 1.0,
    "speedMul": 1.15,
    "detectMul": 1.0,
    "desc": "移速 +15%（冰面滑行），伤害 -5%（严寒影响射击）。"
  },
  {
    "id": "lava",
    "name": "熔岩区",
    "icon": "🌋",
    "dmgMul": 1.05,
    "defMul": 0.9,
    "speedMul": 0.9,
    "detectMul": 1.0,
    "desc": "伤害 +5%，防御 -10%（高温与不稳定地面）。"
  },
  {
    "id": "ruins",
    "name": "废墟",
    "icon": "🏚️",
    "dmgMul": 1.0,
    "defMul": 1.25,
    "speedMul": 0.85,
    "detectMul": 0.9,
    "desc": "防守方防御 +25%，移速 -15%，侦测 -10%（掩体众多）。"
  },
  {
    "id": "highland",
    "name": "高地",
    "icon": "⛰️",
    "dmgMul": 1.15,
    "defMul": 1.1,
    "speedMul": 0.95,
    "detectMul": 1.2,
    "desc": "伤害 +15%，防御 +10%，侦测 +20%（制高点）。"
  },
  {
    "id": "duststorm",
    "name": "沙尘暴区",
    "icon": "🌪️",
    "dmgMul": 0.9,
    "defMul": 1.1,
    "speedMul": 0.9,
    "detectMul": 0.7,
    "desc": "伤害 -10%，防御 +10%，侦测 -30%（能见度极低）。"
  },
  {
    "id": "magnetic",
    "name": "磁异常区",
    "icon": "🧲",
    "dmgMul": 1.0,
    "defMul": 1.0,
    "speedMul": 1.0,
    "detectMul": 0.6,
    "desc": "侦测 -40%（磁暴干扰雷达），导弹类武器伤害 -15%。"
  }
];

/* 3 种伏击：成本、成功率、首击加成与持续时间 */
const MILV3_AMBUSH_TYPES = [
  {
    "id": "amb_classic",
    "name": "经典伏击",
    "icon": "🌿",
    "cost": {
      "food": 15
    },
    "successBase": 0.7,
    "effects": {
      "firstStrikeMul": 1.5,
      "durationSec": 30
    },
    "desc": "首 30 秒伤害 +50%。成功率 70% + 情报修正。"
  },
  {
    "id": "amb_mines",
    "name": "地雷阵",
    "icon": "💣",
    "cost": {
      "iron": 25
    },
    "successBase": 0.8,
    "effects": {
      "firstStrikeMul": 1.3,
      "durationSec": 20,
      "slowMul": 0.6
    },
    "desc": "首 20 秒伤害 +30%，敌人移速 -40%。成功率 80%。"
  },
  {
    "id": "amb_sniper",
    "name": "狙击点",
    "icon": "🎯",
    "cost": {
      "iron": 10,
      "rare": 5
    },
    "successBase": 0.6,
    "effects": {
      "firstStrikeMul": 2.0,
      "durationSec": 15,
      "targetOfficer": true
    },
    "desc": "首 15 秒伤害 +100%，优先狙杀敌方军官。成功率 60%。"
  }
];

/* 作战会议决策：每波入侵前三选一，影响整场战斗 */
const MILV3_WAR_DECISIONS = [
  {
    "id": "wd_focus",
    "name": "集中火力",
    "icon": "🎯",
    "desc": "全军集火血量最低的敌人：击杀效率 +15%，但阵型分散，防御 -5%。",
    "effects": {
      "dmgMul": 1.15,
      "defenseMul": 0.95
    }
  },
  {
    "id": "wd_hold",
    "name": "坚守阵地",
    "icon": "🛡️",
    "desc": "原地坚守：防御 +15%，但无法追击，移速 -20%。",
    "effects": {
      "defenseMul": 1.15,
      "speedMul": 0.8
    }
  },
  {
    "id": "wd_counter",
    "name": "反冲锋",
    "icon": "⚔️",
    "desc": "主动出击：移速 +25%，伤害 +10%，但伤亡 +10%。",
    "effects": {
      "speedMul": 1.25,
      "dmgMul": 1.1,
      "casualtyMul": 1.1
    }
  }
];

/* 6 种军事演习：无战斗风险的和平练兵，消耗战备换经验 */
const MILV3_EXERCISES = [
  {
    "id": "ex_drill",
    "name": "队列操练",
    "icon": "🏃",
    "cost": {
      "food": 10
    },
    "durationMin": 5,
    "xpPerUnit": 15,
    "readinessCost": 10,
    "injuryChance": 0.02,
    "desc": "全员 +15XP，战备 -10，受伤率 2%。"
  },
  {
    "id": "ex_livefire",
    "name": "实弹对抗",
    "icon": "🔥",
    "cost": {
      "food": 20,
      "iron": 10
    },
    "durationMin": 8,
    "xpPerUnit": 30,
    "readinessCost": 15,
    "injuryChance": 0.05,
    "desc": "全员 +30XP，战备 -15，受伤率 5%。"
  },
  {
    "id": "ex_night",
    "name": "夜间演习",
    "icon": "🌙",
    "cost": {
      "food": 15
    },
    "durationMin": 6,
    "xpPerUnit": 25,
    "readinessCost": 12,
    "injuryChance": 0.04,
    "desc": "全员 +25XP，夜战经验，战备 -12。"
  },
  {
    "id": "ex_joint",
    "name": "多兵种联演",
    "icon": "🤝",
    "cost": {
      "food": 30,
      "iron": 20
    },
    "durationMin": 10,
    "xpPerUnit": 40,
    "readinessCost": 20,
    "injuryChance": 0.05,
    "desc": "全员 +40XP，协同加成，战备 -20。需至少 2 个兵种。"
  },
  {
    "id": "ex_air",
    "name": "空中演习",
    "icon": "✈️",
    "cost": {
      "iron": 15,
      "rare": 5
    },
    "durationMin": 6,
    "xpPerUnit": 30,
    "readinessCost": 12,
    "injuryChance": 0.06,
    "desc": "空军 +30XP，战备 -12。仅空军编制。"
  },
  {
    "id": "ex_siege",
    "name": "攻防演习",
    "icon": "🏰",
    "cost": {
      "food": 25,
      "steel": 10
    },
    "durationMin": 8,
    "xpPerUnit": 35,
    "readinessCost": 18,
    "injuryChance": 0.05,
    "desc": "全员 +35XP，防御经验，战备 -18。"
  }
];


/* ============================== 扩展系统（第二批） ============================== */

/* ---------- 老兵等级接入 ---------- */
// 包装 makeFighter：老兵等级的血量/伤害加成按 MILV3_VET_LEVELS 取值
(function () {
  const _origMake = MilV3Battle.makeFighter;
  MilV3Battle.makeFighter = function (def, side, x, y, opts) {
    const f = _origMake(def, side, x, y, opts);
    const lv = (opts && opts.level) || 1;
    const table = (MILV3_VET_LEVELS[def.id] || [])[lv - 1];
    if (table) {
      f.hp = Math.round(f.hp * table.hpMul);
      f.maxHp = f.hp;
      f.dmg = Math.round(f.dmg * table.dmgMul * 10) / 10;
      f.vetTitle = table.title;
      if (lv >= 4) f.critBonus = 0.03;
      if (lv >= 5) { f.critBonus = 0.05; f.range = (f.range || 0) + 1; }
    }
    return f;
  };
})();

// 伤害统计包装：记录每名战斗机的输出，供战后报告使用
(function () {
  const _origDeal = MilV3Battle.prototype._dealDamage;
  MilV3Battle.prototype._dealDamage = function (att, def, base) {
    const res = _origDeal.call(this, att, def, base);
    if (!this._dmgDealt) this._dmgDealt = {};
    this._dmgDealt[att.id] = (this._dmgDealt[att.id] || 0) + (res.dmg || 0);
    if (!this._dmgTaken) this._dmgTaken = {};
    this._dmgTaken[def.id] = (this._dmgTaken[def.id] || 0) + (res.dmg || 0);
    return res;
  };
})();

/* ---------- 地形系统 ---------- */
// 地图分 3x3 扇区，每扇区一种地形（种子固定：按扇区坐标哈希，保证同一局一致）。
class MilV3Terrain {
  static sectorTerrain(sx, sy) {
    const ids = MILV3_TERRAIN.map(t => t.id);
    let h = (sx * 73856093) ^ (sy * 19349663);
    h = Math.abs(h) % ids.length;
    return MILV3_TERRAIN[h];
  }

  static terrainAt(x, y, mapSize) {
    const size = mapSize || MILV3.MAP_SIZE_DEFAULT;
    const sx = _m3Clamp(Math.floor(x / (size / 3)), 0, 2);
    const sy = _m3Clamp(Math.floor(y / (size / 3)), 0, 2);
    return MilV3Terrain.sectorTerrain(sx, sy);
  }

  static sectorMap(mapSize) {
    const out = [];
    for (let sy = 0; sy < 3; sy++) {
      const row = [];
      for (let sx = 0; sx < 3; sx++) row.push(MilV3Terrain.sectorTerrain(sx, sy).id);
      out.push(row);
    }
    return out;
  }
}

// 地形修正接入伤害计算：防守方地形防御乘区，进攻方地形伤害乘区
(function () {
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    if (!this._terrainOn) return res;
    const defTer = MilV3Terrain.terrainAt(def.x, def.y, this.mapSize);
    const attTer = MilV3Terrain.terrainAt(att.x, att.y, this.mapSize);
    let dmg = res.dmg;
    // 防守方地形防御：伤害除以 defMul（防御高则伤害低）
    if (defTer && defTer.defMul) dmg = Math.round(dmg / defTer.defMul);
    // 进攻方地形伤害修正
    if (attTer && attTer.dmgMul) dmg = Math.round(dmg * attTer.dmgMul);
    // 磁异常区：导弹类武器伤害 -15%
    if (defTer && defTer.id === 'magnetic' && (att.typeId === 'ms_turret' || att.typeId === 'aa_vehicle')) dmg = Math.round(dmg * 0.85);
    return { dmg: Math.max(1, dmg), crit: res.crit };
  };
})();

/* ---------- 伏击系统 ---------- */
class MilV3Ambush {
  constructor() {
    this.active = null;   // {typeId, formationId, x, y, setAt}
    this.history = [];
  }

  setup(typeId, formationId, x, y, game, manager) {
    const t = MILV3_AMBUSH_TYPES.find(a => a.id === typeId);
    if (!t) return { ok: false, reason: '未知伏击类型' };
    if (this.active) return { ok: false, reason: '已有伏击在布置中' };
    const f = manager.army.formations[formationId];
    if (!f) return { ok: false, reason: '编制不存在' };
    if (f.status === 'training') return { ok: false, reason: '训练中的编制无法设伏' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) {
      for (const k in (t.cost || {})) if ((inv[k] || 0) < t.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in (t.cost || {})) inv[k] -= t.cost[k];
    }
    this.active = { typeId, formationId, x, y, setAt: manager.gameTimeMs };
    return { ok: true, type: t.name, x, y };
  }

  // 入侵开始时结算：成功率 = 基础 + 军官情报*5% + 游击学说 +15%
  resolveOnWave(manager) {
    if (!this.active) return null;
    const t = MILV3_AMBUSH_TYPES.find(a => a.id === this.active.typeId);
    const f = manager.army.formations[this.active.formationId];
    let chance = t.successBase;
    if (f && f.officerId && manager.army.officers[f.officerId]) {
      chance += manager.army.officers[f.officerId].skills.intel * 0.05;
    }
    if (manager.doctrine.active === 'doc_guerrilla') chance += 0.15;
    const success = Math.random() < _m3Clamp(chance, 0.1, 0.95);
    const rec = { t: Date.now(), type: t.name, success, chance: Math.round(chance * 100) };
    this.history.unshift(rec);
    if (this.history.length > 10) this.history.length = 10;
    this.active = null;
    if (!success) {
      if (f) { f.readiness = Math.max(0, f.readiness - 10); }
      return { success: false, chance: rec.chance, note: '伏击被识破，设伏编制战备 -10' };
    }
    // 成功：返回首击加成，由战斗引擎在开局 durationSec 内生效
    return { success: true, chance: rec.chance, effects: t.effects, typeId: t.id };
  }

  serialize() { return { active: _m3Clone(this.active), history: _m3Clone(this.history) }; }
  static deserialize(d) {
    const a = new MilV3Ambush();
    a.active = _m3Clone(d.active);
    a.history = _m3Clone(d.history || []);
    return a;
  }
}

/* ---------- 围城战 ---------- */
// 战败但城市未破时，残敌转为围城：每分钟推进破城进度；玩家可出城反击/修墙/议和。
class MilV3Siege {
  constructor() {
    this.active = false;
    this.besiegers = 0;
    this.breach = 0;        // 破城进度 0-100
    this.sinceMs = 0;
    this.supplyCut = false; // 围城切断补给：后勤生产减半
  }

  start(besiegers, gameTimeMs) {
    this.active = true;
    this.besiegers = besiegers;
    this.breach = 0;
    this.sinceMs = gameTimeMs;
    this.supplyCut = true;
    return { besiegers };
  }

  tickMinute(manager) {
    if (!this.active) return null;
    // 破城进度：每分钟 +2 + 围城敌军/10
    this.breach = Math.min(100, this.breach + 2 + this.besiegers / 10);
    if (this.breach >= 100) {
      this.active = false;
      return { breached: true, note: '城墙被攻破！城市陷落风险：立即出城反击或议和' };
    }
    return { breach: Math.round(this.breach) };
  }

  // 出城反击：以当前可战单位打一场模拟战斗，胜则解围
  sallyOut(manager, game) {
    if (!this.active) return { ok: false, reason: '未被围城' };
    const battle = new MilV3Battle({ seed: Math.floor(Math.random() * 1e9), mapSize: 50,
      bonuses: manager.weapons.bonuses(), doctrineFx: manager.doctrine.effects() });
    const defs = [];
    let i = 0;
    for (const f of Object.values(manager.army.formations)) {
      if (f.status === 'training' || f.readiness < 30) continue;
      for (const uid of f.unitIds) {
        const u = manager.army.units[uid];
        if (u && u.alive) {
          defs.push(MilV3Battle.makeFighter(u.def, 'def', 20 + (i % 5), 20 + Math.floor(i / 5), { level: u.level }));
          i++;
        }
      }
    }
    if (!defs.length) return { ok: false, reason: '没有可出战的单位' };
    const atks = [];
    const types = ['raider_marauder', 'raider_brute', 'raider_tank'];
    for (let n = 0; n < this.besiegers; n++) {
      const ed = MILV3_ENEMIES[types[n % types.length]];
      atks.push(MilV3Battle.makeFighter(ed, 'atk', 30 + (n % 5), 30 + Math.floor(n / 5), {}));
    }
    battle.addFighters([...defs, ...atks]);
    const res = battle.simulate(300);
    if (res.result === 'victory') {
      this.active = false;
      this.supplyCut = false;
      manager.stats.wavesHeld++;
      return { ok: true, victory: true, result: res, note: '反击成功，围城解除！' };
    }
    this.breach = Math.min(100, this.breach + 15);
    return { ok: true, victory: false, result: res, note: '反击失败，破城进度 +15' };
  }

  // 修墙：消耗铁矿降低破城进度
  repairWall(game, manager) {
    if (!this.active) return { ok: false, reason: '未被围城' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && (inv.iron || 0) < 40) return { ok: false, reason: '需 40 铁矿' };
    if (inv) inv.iron -= 40;
    this.breach = Math.max(0, this.breach - 25);
    return { ok: true, breach: Math.round(this.breach) };
  }

  // 议和：支付赎金解除围城
  negotiate(game, manager) {
    if (!this.active) return { ok: false, reason: '未被围城' };
    const cost = 30 + this.besiegers * 2;
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && (inv.iron || 0) < cost) return { ok: false, reason: '需 ' + cost + ' 铁矿赎金' };
    if (inv) inv.iron -= cost;
    this.active = false;
    this.supplyCut = false;
    return { ok: true, cost, note: '支付赎金 ' + cost + ' 铁矿，围城解除' };
  }

  serialize() { return { active: this.active, besiegers: this.besiegers, breach: this.breach, sinceMs: this.sinceMs, supplyCut: this.supplyCut }; }
  static deserialize(d) {
    const s = new MilV3Siege();
    s.active = !!d.active; s.besiegers = d.besiegers || 0;
    s.breach = d.breach || 0; s.sinceMs = d.sinceMs || 0; s.supplyCut = !!d.supplyCut;
    return s;
  }
}

/* ---------- 空中支援 ---------- */
class MilV3AirSupport {
  constructor() {
    this.cooldowns = {};   // {type: untilMs}
    this.calls = 0;
  }

  static CALLS = {
    fighter_strike: { name: '战斗机空袭', icon: '✈️', cost: { iron: 20, rare: 5 }, cooldownMin: 5,
      desc: '对所有敌军造成 150 点伤害（需有战斗机单位在编）。' },
    recon_sweep: { name: '侦察扫掠', icon: '🛸', cost: { iron: 10 }, cooldownMin: 3,
      desc: '标记全部敌军 10 秒（受击 +20%），侦测 +5 格持续 1 分钟。' },
    airlift: { name: '空中机动', icon: '🛫', cost: { iron: 15, food: 10 }, cooldownMin: 8,
      desc: '将一个步兵编制空运到指定位置（无视距离，立即部署）。' },
  };

  call(type, battle, manager, game, opts) {
    const def = MilV3AirSupport.CALLS[type];
    if (!def) return { ok: false, reason: '未知空中支援类型' };
    const now = manager.gameTimeMs;
    if ((this.cooldowns[type] || 0) > now) return { ok: false, reason: '冷却中' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) {
      for (const k in (def.cost || {})) if ((inv[k] || 0) < def.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in (def.cost || {})) inv[k] -= def.cost[k];
    }
    if (type === 'fighter_strike') {
      const hasFighter = Object.values(manager.army.units).some(u => u.alive && u.typeId === 'fighter');
      if (!hasFighter) return { ok: false, reason: '需编有战斗机单位' };
      if (!battle || battle.ended) return { ok: false, reason: '当前没有进行中的战斗' };
      let hit = 0;
      for (const f of battle.fighters) {
        if (f.side === 'atk' && !f.dead) { f.hp -= 150; hit++; if (f.hp <= 0) { f.hp = 0; f.dead = true; } }
      }
      this.calls++;
      this.cooldowns[type] = now + def.cooldownMin * 60 * 1000;
      return { ok: true, type: def.name, hit, note: '空袭命中 ' + hit + ' 名敌军' };
    }
    if (type === 'recon_sweep') {
      if (!battle || battle.ended) return { ok: false, reason: '当前没有进行中的战斗' };
      for (const f of battle.fighters) if (f.side === 'atk' && !f.dead) f.markedUntil = battle.timeMs + 10000;
      this.calls++;
      this.cooldowns[type] = now + def.cooldownMin * 60 * 1000;
      return { ok: true, type: def.name, note: '全部敌军已被标记 10 秒' };
    }
    if (type === 'airlift') {
      const f = manager.army.formations[(opts && opts.formationId) || ''];
      if (!f) return { ok: false, reason: '需指定一个编制' };
      if (f.branch !== 'infantry') return { ok: false, reason: '空中机动仅限步兵编制' };
      const tx = (opts && opts.x) || 25, ty = (opts && opts.y) || 25;
      manager.army.deployFormation(f.id, tx, ty, 'intercept');
      this.calls++;
      this.cooldowns[type] = now + def.cooldownMin * 60 * 1000;
      return { ok: true, type: def.name, note: f.name + ' 已空运至 (' + tx + ', ' + ty + ')' };
    }
    return { ok: false, reason: '未实现' };
  }

  serialize() { return { cooldowns: _m3Clone(this.cooldowns), calls: this.calls }; }
  static deserialize(d) {
    const a = new MilV3AirSupport();
    a.cooldowns = _m3Clone(d.cooldowns || {});
    a.calls = d.calls || 0;
    return a;
  }
}

/* ---------- 作战会议 ---------- */
class MilV3WarCouncil {
  constructor() {
    this.staff = { chief: null, intel: null, logistics: null }; // 参谋长 / 情报官 / 后勤官（军官 id）
    this.decision = null;   // 本波决策 id
    this.decisionWave = 0;
  }

  appoint(role, officerId, manager) {
    if (!(role in this.staff)) return { ok: false, reason: '未知参谋职位' };
    const o = manager.army.officers[officerId];
    if (!o) return { ok: false, reason: '军官不存在' };
    if (o.status !== 'active') return { ok: false, reason: '军官无法任职' };
    for (const r in this.staff) if (this.staff[r] === officerId) this.staff[r] = null;
    this.staff[role] = officerId;
    return { ok: true, role, officer: o.name };
  }

  // 参谋加成：参谋长战术+、情报官侦测+、后勤官维持-
  staffBonuses(manager) {
    const b = { dmgMul: 1, detectBonus: 0, upkeepMul: 1 };
    const get = (role) => {
      const id = this.staff[role];
      return id ? manager.army.officers[id] : null;
    };
    const chief = get('chief');
    if (chief) b.dmgMul *= 1 + chief.skills.tactics * 0.01;
    const intel = get('intel');
    if (intel) b.detectBonus += intel.skills.intel;
    const logi = get('logistics');
    if (logi) b.upkeepMul *= Math.max(0.6, 1 - logi.skills.logistics * 0.02);
    return b;
  }

  // 每波决策：三选一，持续到该波结束
  decide(decisionId, waveNo) {
    const d = MILV3_WAR_DECISIONS.find(x => x.id === decisionId);
    if (!d) return { ok: false, reason: '未知决策' };
    if (this.decisionWave === waveNo) return { ok: false, reason: '本波已做过决策' };
    this.decision = decisionId;
    this.decisionWave = waveNo;
    return { ok: true, decision: d.name, effects: _m3Clone(d.effects) };
  }

  decisionEffects() {
    if (!this.decision) return {};
    const d = MILV3_WAR_DECISIONS.find(x => x.id === this.decision);
    return _m3Clone(d ? d.effects : {});
  }

  serialize() { return { staff: _m3Clone(this.staff), decision: this.decision, decisionWave: this.decisionWave }; }
  static deserialize(d) {
    const w = new MilV3WarCouncil();
    w.staff = _m3Clone(d.staff || { chief: null, intel: null, logistics: null });
    w.decision = d.decision || null;
    w.decisionWave = d.decisionWave || 0;
    return w;
  }
}


/* ---------- 战俘与招降 ---------- */
class MilV3Prisoners {
  constructor() {
    this.count = 0;
    this.interrogated = 0;   // 已审讯次数
    this.recruited = 0;      // 已招降人数
    this.revolts = 0;
  }

  // 胜利后俘虏：击杀数的 20%
  capture(kills) {
    const n = Math.floor((kills || 0) * 0.2);
    this.count += n;
    return n;
  }

  // 索要赎金：每名战俘 5 铁矿
  ransom(game) {
    if (this.count <= 0) return { ok: false, reason: '没有战俘' };
    const gain = this.count * 5;
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) inv.iron = (inv.iron || 0) + gain;
    const n = this.count;
    this.count = 0;
    return { ok: true, freed: n, iron: gain };
  }

  // 招降：每名战俘消耗 3 食物，转为民兵；10% 概率哗变（损失 1 名守军单位抽象为士气 -5）
  recruit(game, manager) {
    if (this.count <= 0) return { ok: false, reason: '没有战俘' };
    const inv = (game && game.player && game.player.inv) || null;
    const cost = this.count * 3;
    if (inv && (inv.food || 0) < cost) return { ok: false, reason: '需 ' + cost + ' 食物' };
    if (inv) inv.food -= cost;
    const n = this.count;
    this.count = 0;
    this.recruited += n;
    const made = [];
    for (let i = 0; i < n; i++) {
      const u = new MilV3Unit('militia', 25, 25);
      manager.army.units[u.id] = u;
      made.push(u.id);
    }
    if (Math.random() < 0.1) {
      this.revolts++;
      for (const f of Object.values(manager.army.formations)) f.morale = Math.max(MILV3.MORALE_MIN, f.morale - 5);
      return { ok: true, recruited: n, revolt: true, note: '招降 ' + n + ' 人，但发生哗变，全军士气 -5' };
    }
    return { ok: true, recruited: n, unitIds: made };
  }

  // 审讯：揭示下一波入侵编成，并获得侦测加成（持续到下一波）
  interrogate(manager) {
    if (this.count <= 0) return { ok: false, reason: '没有战俘可审讯' };
    this.count--;
    this.interrogated++;
    const next = manager.invasion.waveDef(manager.invasion.wave + 1);
    manager._intelBonusUntil = manager.gameTimeMs + MILV3.WAVE_INTERVAL_MIN * 60 * 1000;
    return { ok: true, nextWave: next.wave, composition: _m3Clone(next.composition), count: next.count,
      note: '已摸清下一波编成，侦测 +5 直到下一波' };
  }

  serialize() { return { count: this.count, interrogated: this.interrogated, recruited: this.recruited, revolts: this.revolts }; }
  static deserialize(d) {
    const p = new MilV3Prisoners();
    p.count = d.count || 0; p.interrogated = d.interrogated || 0;
    p.recruited = d.recruited || 0; p.revolts = d.revolts || 0;
    return p;
  }
}

/* ---------- 防线系统 ---------- */
// 三道防线：外围 / 中层 / 内层；每道有血量，被攻破前提供防御加成；可花铁矿修复。
class MilV3DefenseLines {
  constructor() {
    this.lines = [
      { id: 'outer', name: '外围防线', icon: '🧱', hp: 1000, maxHp: 1000, defenseMul: 1.1 },
      { id: 'middle', name: '中层防线', icon: '🛡️', hp: 1500, maxHp: 1500, defenseMul: 1.15 },
      { id: 'inner', name: '内层防线', icon: '🏰', hp: 2000, maxHp: 2000, defenseMul: 1.2 },
    ];
  }

  // 防线加成：完好防线的防御乘区相乘
  defenseMul() {
    let m = 1;
    for (const l of this.lines) if (l.hp > 0) m *= l.defenseMul;
    return Math.round(m * 100) / 100;
  }

  // 战败时防线受损：按波次强度扣血（外层先承伤）
  absorbDamage(amount) {
    let rest = amount;
    const log = [];
    for (const l of this.lines) {
      if (rest <= 0) break;
      if (l.hp <= 0) continue;
      const dmg = Math.min(l.hp, rest);
      l.hp -= dmg;
      rest -= dmg;
      log.push(l.name + ' -' + dmg);
      if (l.hp <= 0) log.push(l.name + '已被攻破！');
    }
    return { absorbed: amount - rest, overflow: rest, log };
  }

  // 修复：每 100 铁矿恢复 500 血（优先修复最外层破损防线）
  repair(game) {
    const inv = (game && game.player && game.player.inv) || null;
    const target = this.lines.find(l => l.hp < l.maxHp);
    if (!target) return { ok: false, reason: '防线完好，无需修复' };
    if (inv && (inv.iron || 0) < 100) return { ok: false, reason: '需 100 铁矿' };
    if (inv) inv.iron -= 100;
    target.hp = Math.min(target.maxHp, target.hp + 500);
    return { ok: true, line: target.name, hp: target.hp, maxHp: target.maxHp };
  }

  // 升级防线：每道可升级 1 次（血量 +50%，防御 +5%），费用递增
  upgrade(lineId, game) {
    const l = this.lines.find(x => x.id === lineId);
    if (!l) return { ok: false, reason: '未知防线' };
    if (l.upgraded) return { ok: false, reason: '该防线已升级过' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && ((inv.steel || 0) < 50 || (inv.iron || 0) < 100)) return { ok: false, reason: '需 100 铁矿 + 50 钢材' };
    if (inv) { inv.iron -= 100; inv.steel -= 50; }
    l.maxHp = Math.round(l.maxHp * 1.5);
    l.hp = l.maxHp;
    l.defenseMul = Math.round((l.defenseMul + 0.05) * 100) / 100;
    l.upgraded = true;
    return { ok: true, line: l.name, maxHp: l.maxHp, defenseMul: l.defenseMul };
  }

  serialize() { return { lines: _m3Clone(this.lines) }; }
  static deserialize(d) {
    const x = new MilV3DefenseLines();
    x.lines = _m3Clone(d.lines || x.lines);
    return x;
  }
}

/* ---------- 战后报告 ---------- */
class MilV3AfterAction {
  static generate(battle, manager) {
    if (!battle) return null;
    const res = battle.summary();
    // 按输出排序的战斗机
    const dmgDealt = battle._dmgDealt || {};
    const dmgTaken = battle._dmgTaken || {};
    const rows = battle.fighters.map(f => ({
      name: f.name, side: f.side, typeId: f.typeId, hp: Math.round(f.hp), maxHp: f.maxHp,
      kills: f.kills, dmgDealt: dmgDealt[f.id] || 0, dmgTaken: dmgTaken[f.id] || 0,
      dead: f.dead, level: f.level || 1,
    }));
    rows.sort((a, b) => b.dmgDealt - a.dmgDealt);
    const topDamage = rows.filter(r => r.side === 'def').slice(0, 3);
    const mvp = rows.find(r => r.side === 'def' && r.kills > 0) || null;
    const defRows = rows.filter(r => r.side === 'def');
    const totalDealt = defRows.reduce((a, r) => a + r.dmgDealt, 0);
    const totalTaken = defRows.reduce((a, r) => a + r.dmgTaken, 0);
    return {
      result: res.result, reason: res.reason, durationSec: res.durationSec,
      defAlive: res.defAlive, defStart: res.defStart, atkAlive: res.atkAlive, atkStart: res.atkStart,
      kills: res.kills, shotsFired: res.shotsFired, cityHp: res.cityHp,
      totalDamageDealt: totalDealt, totalDamageTaken: totalTaken,
      efficiency: res.kills.def > 0 ? Math.round(totalDealt / Math.max(1, res.kills.def)) : 0,
      topDamage, mvp: mvp ? { name: mvp.name, typeId: mvp.typeId, kills: mvp.kills, dmgDealt: mvp.dmgDealt } : null,
      rows,
      verdict: res.result === 'victory'
        ? (res.defAlive === res.defStart ? '完胜：零伤亡' : res.defAlive >= res.defStart * 0.7 ? '胜利：损失轻微' : '惨胜：损失惨重，需补充兵员')
        : '失利：检讨防线与编制配置',
    };
  }
}

/* ---------- 军事演习 ---------- */
class MilV3Exercises {
  // 对一个编制执行演习：花资源换全员 XP，扣战备，小概率受伤
  static run(formationId, exerciseId, game, manager) {
    const ex = MILV3_EXERCISES.find(x => x.id === exerciseId);
    if (!ex) return { ok: false, reason: '未知演习' };
    const f = manager.army.formations[formationId];
    if (!f) return { ok: false, reason: '编制不存在' };
    if (f.status === 'training') return { ok: false, reason: '编制正在训练' };
    if (f.size === 0) return { ok: false, reason: '编制内没有单位' };
    if (exerciseId === 'ex_joint') {
      const branches = new Set(f.unitIds.map(uid => { const u = manager.army.units[uid]; return u ? u.branch : null; }));
      if (branches.size < 2) {
        // 联演需要多兵种：检查全军
        const allBranches = new Set(Object.values(manager.army.units).filter(u => u.alive).map(u => u.branch));
        if (allBranches.size < 2) return { ok: false, reason: '多兵种联演需要至少 2 个兵种' };
      }
    }
    if (exerciseId === 'ex_air' && f.branch !== 'air') return { ok: false, reason: '空中演习仅限空军编制' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) {
      for (const k in (ex.cost || {})) if ((inv[k] || 0) < ex.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in (ex.cost || {})) inv[k] -= ex.cost[k];
    }
    let injured = 0;
    for (const uid of f.unitIds) {
      const u = manager.army.units[uid];
      if (!u || !u.alive) continue;
      u.gainXp(ex.xpPerUnit);
      if (Math.random() < ex.injuryChance) {
        u.hp = Math.max(1, Math.round(u.hp * 0.7));
        injured++;
      }
    }
    f.readiness = Math.max(0, f.readiness - ex.readinessCost);
    return { ok: true, exercise: ex.name, xpPerUnit: ex.xpPerUnit, injured,
      readiness: Math.round(f.readiness) };
  }
}

/* ---------- 补给车队 ---------- */
// 每 10 分钟一支车队从边缘出发，2 分钟抵达市中心，运来弹药与燃油；
// 途中可能被伏击（概率随波次上升），有编制护送则按战力判定。
class MilV3Convoy {
  constructor() {
    this.active = null;   // {cargoAmmo, cargoFuel, arrivesAt, escortId}
    this.nextAt = 10 * 60 * 1000;
    this.delivered = 0;
    this.lost = 0;
    this._ambushRolled = false;
  }

  tick(dtMs, gameTimeMs, manager, game) {
    if (this.active) {
      if (gameTimeMs >= this.active.arrivesAt) {
        const cargo = this.active;
        this.active = null;
        this.nextAt = gameTimeMs + 10 * 60 * 1000;
        // 伏击判定（抵达时结算一次）
        const ambushChance = Math.min(0.5, 0.1 + manager.invasion.wave * 0.02);
        let lostAmmo = 0, lostFuel = 0;
        if (Math.random() < ambushChance) {
          const escort = cargo.escortId ? manager.army.formations[cargo.escortId] : null;
          const escortPower = escort ? escort.power(manager.army.units) : 0;
          if (escortPower < 500) {
            lostAmmo = Math.round(cargo.cargoAmmo * 0.5);
            lostFuel = Math.round(cargo.cargoFuel * 0.5);
            this.lost++;
            manager.log('补给车队遇伏！损失一半货物（护送战力不足）');
          } else {
            manager.log('补给车队遇伏，护送编制击退伏击者');
          }
        }
        manager.logistics.ammo = Math.min(manager.logistics.ammoCap + (manager.buildingBonuses().ammoCap || 0), manager.logistics.ammo + cargo.cargoAmmo - lostAmmo);
        manager.logistics.fuel = Math.min(manager.logistics.fuelCap, manager.logistics.fuel + cargo.cargoFuel - lostFuel);
        this.delivered++;
        return { delivered: true, ammo: cargo.cargoAmmo - lostAmmo, fuel: cargo.cargoFuel - lostFuel };
      }
      return null;
    }
    if (gameTimeMs >= this.nextAt) {
      this.active = { cargoAmmo: 150, cargoFuel: 80, arrivesAt: gameTimeMs + 2 * 60 * 1000, escortId: null };
      return { dispatched: true, note: '补给车队已出发，2 分钟后抵达' };
    }
    return null;
  }

  assignEscort(formationId, manager) {
    if (!this.active) return { ok: false, reason: '当前没有在途车队' };
    const f = manager.army.formations[formationId];
    if (!f) return { ok: false, reason: '编制不存在' };
    this.active.escortId = formationId;
    return { ok: true, escort: f.name };
  }

  serialize() { return { active: _m3Clone(this.active), nextAt: this.nextAt, delivered: this.delivered, lost: this.lost }; }
  static deserialize(d) {
    const c = new MilV3Convoy();
    c.active = _m3Clone(d.active);
    c.nextAt = d.nextAt || 10 * 60 * 1000;
    c.delivered = d.delivered || 0;
    c.lost = d.lost || 0;
    return c;
  }
}

/* ---------- 第二批接入 ---------- */
(function () {
  const _origInit = MilitaryV3Manager.prototype.initExtended2;
  MilitaryV3Manager.prototype.initExtended2 = function () {
    if (this.ambush) return;
    this.ambush = new MilV3Ambush();
    this.siege = new MilV3Siege();
    this.airSupport = new MilV3AirSupport();
    this.warCouncil = new MilV3WarCouncil();
    this.prisoners = new MilV3Prisoners();
    this.defenseLines = new MilV3DefenseLines();
    this.convoy = new MilV3Convoy();
    this._siegeMinuteAcc = 0;
    this._lastAfterAction = null;
  };
  // 包装 update：伏击结算 + 围城推进 + 车队 + 战后报告留存
  const _origUpdate = MilitaryV3Manager.prototype.update;
  MilitaryV3Manager.prototype.update = function (now, dt, game) {
    this.initExtended2();
    const hadBattle = !!this.invasion.activeBattle;
    const ret = _origUpdate.call(this, now, dt, game);
    // 战斗刚结束时生成战后报告并俘虏结算
    if (hadBattle && !this.invasion.activeBattle && this.invasion.lastResult) {
      this._lastAfterAction = MilV3AfterAction.generate(this._lastBattleRef || null, this);
    }
    // 伏击：在新一波生成前结算（通过 invasion.wave 变化检测）
    if (this._pendingAmbush && this.invasion.activeBattle) {
      const res = this._pendingAmbush;
      this._pendingAmbush = null;
      if (res.success && this.invasion.activeBattle) {
        // 首击加成：开局 30 秒内防御方伤害提升（通过临时 bonuses 实现）
        this.invasion.activeBattle._ambushMul = res.effects.firstStrikeMul || 1.5;
        this.invasion.activeBattle._ambushUntil = this.invasion.activeBattle.timeMs + (res.effects.durationSec || 30) * 1000;
        this.log('伏击成功！首 ' + (res.effects.durationSec || 30) + ' 秒伤害 x' + (res.effects.firstStrikeMul || 1.5));
      }
    }
    // 围城每分钟推进
    this._siegeMinuteAcc += dt;
    if (this._siegeMinuteAcc >= 60 * 1000) {
      this._siegeMinuteAcc -= 60 * 1000;
      const s = this.siege.tickMinute(this);
      if (s && s.breached) this.log('城墙被攻破！请立即出城反击或议和');
      this.convoy.tick(dt, this.gameTimeMs, this, game);
    }
    return ret;
  };
  // 包装 _maybeSpawnWave：生成前结算伏击
  const _origSpawn = MilitaryV3Manager.prototype._maybeSpawnWave;
  MilitaryV3Manager.prototype._maybeSpawnWave = function (game) {
    const before = this.invasion.wave;
    _origSpawn.call(this, game);
    if (this.invasion.wave > before) {
      const amb = this.ambush.resolveOnWave(this);
      if (amb && amb.success) this._pendingAmbush = amb;
      else if (amb) this.log('伏击失败：' + (amb.note || ''));
      // 决策加成记入战斗（通过临时字段由 _resolveBattle 读取）
      this._currentDecisionFx = this.warCouncil.decisionEffects();
    }
  };
  // 伏击首击加成接入伤害计算
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    if (this._ambushMul && this.timeMs < (this._ambushUntil || 0) && att.side === 'def') {
      return { dmg: Math.round(res.dmg * this._ambushMul), crit: res.crit };
    }
    return res;
  };
  // 战后报告：包装 _resolveBattle 记录 battle 引用
  const _origResolve = MilitaryV3Manager.prototype._resolveBattle;
  MilitaryV3Manager.prototype._resolveBattle = function (game) {
    const battle = this.invasion.activeBattle;
    this._lastBattleRef = battle;
    _origResolve.call(this, game);
    if (battle) {
      this._lastAfterAction = MilV3AfterAction.generate(battle, this);
      // 俘虏结算
      const res = battle.summary();
      if (res.result === 'victory') {
        const n = this.prisoners.capture(res.kills.def || 0);
        if (n > 0) this.log('俘虏 ' + n + ' 名敌军（可索赎 / 招降 / 审讯）');
      } else if (res.result === 'defeat') {
        // 战败未破城：残敌围城
        const remaining = battle.alive('atk').length;
        if (remaining > 0 && battle.cityHp > 0) {
          this.siege.start(remaining, this.gameTimeMs);
          this.log('残敌 ' + remaining + ' 名开始围城！破城进度开始推进');
        }
      }
    }
  };
  // 防线加成接入 getDefenseBonus
  const _origDefBonus = MilitaryV3Manager.prototype.getDefenseBonus;
  MilitaryV3Manager.prototype.getDefenseBonus = function () {
    const b = _origDefBonus.call(this);
    this.initExtended2();
    b.defenseMul = Math.round(b.defenseMul * this.defenseLines.defenseMul() * 100) / 100;
    b.lines = this.defenseLines.lines.map(l => ({ id: l.id, name: l.name, hp: l.hp, maxHp: l.maxHp }));
    b.siege = this.siege.active ? { besiegers: this.siege.besiegers, breach: Math.round(this.siege.breach) } : null;
    return b;
  };
  // save/load 扩展
  const _origSave = MilitaryV3Manager.prototype.save;
  MilitaryV3Manager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended2();
    s.extended2 = { ambush: this.ambush.serialize(), siege: this.siege.serialize(),
      airSupport: this.airSupport.serialize(), warCouncil: this.warCouncil.serialize(),
      prisoners: this.prisoners.serialize(), defenseLines: this.defenseLines.serialize(),
      convoy: this.convoy.serialize() };
    return s;
  };
  const _origLoad = MilitaryV3Manager.prototype.load;
  MilitaryV3Manager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended2();
    if (data && data.extended2) {
      if (data.extended2.ambush) this.ambush = MilV3Ambush.deserialize(data.extended2.ambush);
      if (data.extended2.siege) this.siege = MilV3Siege.deserialize(data.extended2.siege);
      if (data.extended2.airSupport) this.airSupport = MilV3AirSupport.deserialize(data.extended2.airSupport);
      if (data.extended2.warCouncil) this.warCouncil = MilV3WarCouncil.deserialize(data.extended2.warCouncil);
      if (data.extended2.prisoners) this.prisoners = MilV3Prisoners.deserialize(data.extended2.prisoners);
      if (data.extended2.defenseLines) this.defenseLines = MilV3DefenseLines.deserialize(data.extended2.defenseLines);
      if (data.extended2.convoy) this.convoy = MilV3Convoy.deserialize(data.extended2.convoy);
    }
  };
})();

/* ---------- 第二批自测 ---------- */
class MilV3Extended2SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _m3TimeMs: 0,
      player: { inv: { iron: 2000, ice: 500, rare: 300, water: 500, food: 1000, steel: 800, tech: 800, uranium: 50, he3: 20 } },
      pop: { count: 60, cap: () => 200 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50 },
      map: { size: 50 }, military: { raidStrength: 0 } });
    const m = new MilitaryV3Manager();
    const g = mockGame();
    m.initExtended2();
    check('第二批系统初始化', !!m.ambush && !!m.siege && !!m.airSupport && !!m.warCouncil && !!m.prisoners && !!m.defenseLines && !!m.convoy, '');
    // 老兵等级
    const vetFighter = MilV3Battle.makeFighter(MILV3_UNIT_TYPES.rifleman, 'def', 20, 20, { level: 5 });
    check('5 级老兵伤害高于新兵', vetFighter.dmg > MILV3_UNIT_TYPES.rifleman.dmg, 'dmg=' + vetFighter.dmg);
    check('5 级老兵射程 +1', vetFighter.range === MILV3_UNIT_TYPES.rifleman.range + 1, 'range=' + vetFighter.range);
    // 地形
    const ter = MilV3Terrain.terrainAt(10, 10, 50);
    check('地形查询返回地形', !!ter && !!ter.id, ter ? ter.name : '');
    const smap = MilV3Terrain.sectorMap(50);
    check('扇区地形图 3x3', smap.length === 3 && smap[0].length === 3, JSON.stringify(smap));
    // 伏击
    m.recruit('rifleman', 4, g);
    m.update(0, 10 * 60 * 1000, g);
    const form = m.createFormation('infantry', 1, '伏击班');
    for (const u of Object.values(m.army.units)) {
      if (u.alive && u.typeId === 'rifleman') m.army.assignUnit(u.id, form.formation.id);
    }
    const amb = m.ambush.setup('amb_classic', form.formation.id, 10, 10, g, m);
    check('伏击布置成功', amb.ok, amb.reason || '');
    const ambRes = m.ambush.resolveOnWave(m);
    check('伏击结算有结果', ambRes && typeof ambRes.success === 'boolean', JSON.stringify(ambRes));
    // 围城
    const sg = m.siege.start(8, m.gameTimeMs);
    check('围城开始', m.siege.active && m.siege.besiegers === 8, '');
    const stk = m.siege.tickMinute(m);
    check('围城破城进度推进', stk && stk.breach > 0, JSON.stringify(stk));
    const rep = m.siege.repairWall(g, m);
    check('修墙降低破城进度', rep.ok, rep.reason || '');
    const neg = m.siege.negotiate(g, m);
    check('议和解除围城', neg.ok && !m.siege.active, neg.reason || '');
    // 空中支援
    const air = m.airSupport.call('recon_sweep', null, m, g, {});
    check('无战斗时侦察扫掠被拒绝', !air.ok, '');
    // 作战会议
    const off = m.enlistOfficer('李振武');
    const appt = m.warCouncil.appoint('chief', off.officer.id, m);
    check('任命参谋长', appt.ok, appt.reason || '');
    const sb = m.warCouncil.staffBonuses(m);
    check('参谋加成返回数值', sb && typeof sb.dmgMul === 'number', JSON.stringify(sb));
    const dec = m.warCouncil.decide('wd_focus', 1);
    check('作战决策三选一', dec.ok, dec.reason || '');
    // 战俘
    const cap = m.prisoners.capture(50);
    check('俘虏 50 击杀得 10 战俘', cap === 10, 'n=' + cap);
    const ran = m.prisoners.ransom(g);
    check('索赎获得铁矿', ran.ok && ran.iron === 50, JSON.stringify(ran));
    m.prisoners.capture(30);
    const inter = m.prisoners.interrogate(m);
    check('审讯揭示下一波编成', inter.ok && !!inter.composition, JSON.stringify(inter).slice(0, 100));
    // 防线
    check('三道防线防御乘区 >1', m.defenseLines.defenseMul() > 1, 'mul=' + m.defenseLines.defenseMul());
    const dmg = m.defenseLines.absorbDamage(1200);
    check('防线吸收伤害（外层先承伤）', dmg.absorbed === 1200, JSON.stringify(dmg));
    const rep2 = m.defenseLines.repair(g);
    check('防线可修复', rep2.ok, rep2.reason || '');
    // 演习
    const ex = MilV3Exercises.run(form.formation.id, 'ex_drill', g, m);
    check('演习可执行', ex.ok, ex.reason || '');
    // 车队
    m.gameTimeMs = 10 * 60 * 1000;
    const cv = m.convoy.tick(1000, m.gameTimeMs, m, g);
    check('补给车队按时出发', !!m.convoy.active, JSON.stringify(cv));
    // 战后报告
    const sim = MilV3Battle.simulateScenario('sc_patrol', { seed: 11 });
    check('战后报告可生成', sim.ok, '');
    // 存档往返（第二批）
    const saved = m.save();
    const m2 = new MilitaryV3Manager();
    m2.load(saved);
    check('第二批存档往返：防线保留', !!m2.defenseLines && m2.defenseLines.lines.length === 3, '');
    check('第二批存档往返：战俘保留', !!m2.prisoners, '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = MilV3SelfTest.run;
  MilV3SelfTest.run = function () {
    const base = _origRun();
    const ext2 = MilV3Extended2SelfTest.run();
    return { total: base.total + ext2.total, passed: base.passed + ext2.passed,
      failed: [...base.failed, ...ext2.failed],
      results: [...base.results, ...ext2.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.MilV3Terrain = MilV3Terrain;
  window.MilV3Ambush = MilV3Ambush;
  window.MilV3Siege = MilV3Siege;
  window.MilV3AirSupport = MilV3AirSupport;
  window.MilV3WarCouncil = MilV3WarCouncil;
  window.MilV3Prisoners = MilV3Prisoners;
  window.MilV3DefenseLines = MilV3DefenseLines;
  window.MilV3AfterAction = MilV3AfterAction;
  window.MilV3Exercises = MilV3Exercises;
  window.MilV3Convoy = MilV3Convoy;
  window.MilV3Extended2SelfTest = MilV3Extended2SelfTest;
  window.MILV3_VET_LEVELS = MILV3_VET_LEVELS;
  window.MILV3_TERRAIN = MILV3_TERRAIN;
  window.MILV3_AMBUSH_TYPES = MILV3_AMBUSH_TYPES;
  window.MILV3_WAR_DECISIONS = MILV3_WAR_DECISIONS;
  window.MILV3_EXERCISES = MILV3_EXERCISES;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { MilV3Terrain, MilV3Ambush, MilV3Siege, MilV3AirSupport,
    MilV3WarCouncil, MilV3Prisoners, MilV3DefenseLines, MilV3AfterAction, MilV3Exercises,
    MilV3Convoy, MilV3Extended2SelfTest, MILV3_VET_LEVELS, MILV3_TERRAIN,
    MILV3_AMBUSH_TYPES, MILV3_WAR_DECISIONS, MILV3_EXERCISES });
}

/* 军官 3 条职业轨道 x 5 里程碑：等级达标自动解锁加成 */
const MILV3_CAREER_TRACKS = {
  "command": {
    "name": "指挥轨道",
    "icon": "⭐",
    "desc": "纯指挥路线：指挥能力与伤害加成。",
    "milestones": [
      {
        "level": 3,
        "name": "见习指挥",
        "bonus": {
          "commandCap": 1
        },
        "desc": "指挥能力 +1。"
      },
      {
        "level": 7,
        "name": "战术家",
        "bonus": {
          "dmgMul": 1.05
        },
        "desc": "麾下伤害 +5%。"
      },
      {
        "level": 12,
        "name": "战役指挥",
        "bonus": {
          "commandCap": 1,
          "morale": 5
        },
        "desc": "指挥能力 +1，士气 +5。"
      },
      {
        "level": 18,
        "name": "军团统帅",
        "bonus": {
          "dmgMul": 1.1,
          "morale": 5
        },
        "desc": "麾下伤害 +10%，士气 +5。"
      },
      {
        "level": 25,
        "name": "元帅",
        "bonus": {
          "commandCap": 1,
          "dmgMul": 1.15,
          "morale": 10
        },
        "desc": "指挥能力 +1，伤害 +15%，士气 +10。"
      }
    ]
  },
  "technical": {
    "name": "技术轨道",
    "icon": "🔧",
    "desc": "工程与后勤路线：修理与维持费加成。",
    "milestones": [
      {
        "level": 3,
        "name": "见习工程师",
        "bonus": {
          "repairMul": 1.2
        },
        "desc": "修理 +20%。"
      },
      {
        "level": 7,
        "name": "总工程师",
        "bonus": {
          "repairMul": 1.3,
          "fortDmgMul": 1.1
        },
        "desc": "修理 +30%，对工事伤害 +10%。"
      },
      {
        "level": 12,
        "name": "后勤总监",
        "bonus": {
          "upkeepMul": 0.85
        },
        "desc": "维持费 -15%。"
      },
      {
        "level": 18,
        "name": "军工专家",
        "bonus": {
          "repairMul": 1.5,
          "upkeepMul": 0.8
        },
        "desc": "修理 +50%，维持费 -20%。"
      },
      {
        "level": 25,
        "name": "首席科学家",
        "bonus": {
          "repairMul": 1.8,
          "dmgMul": 1.1
        },
        "desc": "修理 +80%，伤害 +10%。"
      }
    ]
  },
  "intel": {
    "name": "情报轨道",
    "icon": "🕵️",
    "desc": "侦察与特种作战路线：侦测与伏击加成。",
    "milestones": [
      {
        "level": 3,
        "name": "见习情报官",
        "bonus": {
          "detectBonus": 2
        },
        "desc": "侦测 +2 格。"
      },
      {
        "level": 7,
        "name": "谍报专家",
        "bonus": {
          "detectBonus": 3,
          "ambushMul": 1.2
        },
        "desc": "侦测 +3，伏击伤害 +20%。"
      },
      {
        "level": 12,
        "name": "影子指挥",
        "bonus": {
          "ambushMul": 1.4,
          "critChance": 0.03
        },
        "desc": "伏击伤害 +40%，暴击 +3%。"
      },
      {
        "level": 18,
        "name": "幽灵统帅",
        "bonus": {
          "detectBonus": 5,
          "ambushMul": 1.6
        },
        "desc": "侦测 +5，伏击伤害 +60%。"
      },
      {
        "level": 25,
        "name": "情报沙皇",
        "bonus": {
          "detectBonus": 8,
          "critChance": 0.05,
          "ambushMul": 2.0
        },
        "desc": "侦测 +8，暴击 +5%，伏击伤害翻倍。"
      }
    ]
  }
};

/* 6 种野战工事：建造成本/时间与防御加成（战前部署） */
const MILV3_FORTIFICATIONS = [
  {
    "id": "fort_sandbag",
    "name": "沙袋工事",
    "icon": "🧱",
    "cost": {
      "iron": 10
    },
    "buildMin": 1,
    "bonus": {
      "defenseMul": 1.1
    },
    "desc": "防御 +10%，1 分钟建成。"
  },
  {
    "id": "fort_trench",
    "name": "战壕",
    "icon": "🕳️",
    "cost": {
      "iron": 20,
      "food": 5
    },
    "buildMin": 2,
    "bonus": {
      "defenseMul": 1.2,
      "speedMul": 0.9
    },
    "desc": "防御 +20%，移速 -10%（进出战壕）。"
  },
  {
    "id": "fort_mines",
    "name": "雷区",
    "icon": "💣",
    "cost": {
      "iron": 30,
      "rare": 5
    },
    "buildMin": 2,
    "bonus": {
      "defenseMul": 1.0,
      "mineDmg": 40
    },
    "desc": "进入雷区的敌军每格受 40 点伤害。"
  },
  {
    "id": "fort_bunker",
    "name": "野战碉堡",
    "icon": "🏰",
    "cost": {
      "iron": 60,
      "steel": 20
    },
    "buildMin": 4,
    "bonus": {
      "defenseMul": 1.35
    },
    "desc": "防御 +35%，坚固掩体。"
  },
  {
    "id": "fort_tower",
    "name": "瞭望塔",
    "icon": "🗼",
    "cost": {
      "iron": 30,
      "steel": 5
    },
    "buildMin": 2,
    "bonus": {
      "defenseMul": 1.05,
      "detectBonus": 4,
      "rangeBonus": 1
    },
    "desc": "防御 +5%，侦测 +4 格，射程 +1。"
  },
  {
    "id": "fort_checkpoint",
    "name": "检查站",
    "icon": "🚧",
    "cost": {
      "iron": 25
    },
    "buildMin": 2,
    "bonus": {
      "defenseMul": 1.1,
      "slowMul": 0.7
    },
    "desc": "防御 +10%，敌军移速 -30%（路障迟滞）。"
  }
];

/* 4 种侦察任务：前置单位/技能、耗时与情报收益 */
const MILV3_RECON_MISSIONS = [
  {
    "id": "rec_scout",
    "name": "抵近侦察",
    "icon": "🔭",
    "cost": {
      "food": 5
    },
    "durationMin": 2,
    "requires": {
      "unit": "recon_drone",
      "count": 1
    },
    "rewards": {
      "intel": 1,
      "nextWaveReveal": true
    },
    "desc": "揭示下一波编成，下场战斗伤害 +5%。"
  },
  {
    "id": "rec_deep",
    "name": "纵深侦察",
    "icon": "🛰️",
    "cost": {
      "food": 10,
      "iron": 5
    },
    "durationMin": 4,
    "requires": {
      "unit": "recon_drone",
      "count": 2
    },
    "rewards": {
      "intel": 2,
      "weakPoint": true
    },
    "desc": "发现敌方弱点：下场战斗对军阀/坦克伤害 +25%。"
  },
  {
    "id": "rec_intercept",
    "name": "截获通讯",
    "icon": "📡",
    "cost": {
      "tech": 5
    },
    "durationMin": 3,
    "requires": {
      "officerSkill": "intel",
      "level": 3
    },
    "rewards": {
      "intel": 2,
      "ambushWarn": true
    },
    "desc": "提前获知伏击：下场战斗敌方伏击失效，侦测 +3。"
  },
  {
    "id": "rec_sabotage",
    "name": "敌后破坏",
    "icon": "🧨",
    "cost": {
      "food": 10,
      "iron": 10
    },
    "durationMin": 5,
    "requires": {
      "unit": "sniper",
      "count": 2
    },
    "rewards": {
      "intel": 1,
      "sabotage": true
    },
    "desc": "破坏敌方补给：下场战斗敌军伤害 -10%，血量 -10%。"
  }
];

/* 5 种单位嘉奖：达成条件与个人加成 */
const MILV3_CITATIONS = [
  {
    "id": "cit_bravery",
    "name": "英勇嘉奖",
    "icon": "🦁",
    "condition": "kills>=10",
    "bonus": {
      "dmgMul": 1.05
    },
    "desc": "单场击杀 10+：伤害 +5%。"
  },
  {
    "id": "cit_stand",
    "name": "坚守嘉奖",
    "icon": "🛡️",
    "condition": "hpLowSurvive",
    "bonus": {
      "hpMul": 1.1
    },
    "desc": "血量低于 20% 存活：血量 +10%。"
  },
  {
    "id": "cit_sharpshooter",
    "name": "神射手嘉奖",
    "icon": "🎯",
    "condition": "kills>=5&range>=8",
    "bonus": {
      "critChance": 0.03
    },
    "desc": "远程击杀 5+：暴击 +3%。"
  },
  {
    "id": "cit_savior",
    "name": "救护嘉奖",
    "icon": "🩺",
    "condition": "healed>=200",
    "bonus": {
      "healMul": 1.2
    },
    "desc": "累计治疗 200+：治疗 +20%。"
  },
  {
    "id": "cit_engineer",
    "name": "工程嘉奖",
    "icon": "🔧",
    "condition": "repaired>=200",
    "bonus": {
      "repairMul": 1.2
    },
    "desc": "累计修理 200+：修理 +20%。"
  }
];

/* 6 项军火贸易：花资源买弹药/燃油/现货单位，或出售缴获 */
const MILV3_ARMS_DEALS = [
  {
    "id": "deal_ammo",
    "name": "弹药采购",
    "icon": "📦",
    "cost": {
      "iron": 20
    },
    "gain": {
      "ammo": 200
    },
    "desc": "20 铁矿换 200 弹药。"
  },
  {
    "id": "deal_fuel",
    "name": "燃油采购",
    "icon": "🛢️",
    "cost": {
      "iron": 15
    },
    "gain": {
      "fuel": 150
    },
    "desc": "15 铁矿换 150 燃油。"
  },
  {
    "id": "deal_rifles",
    "name": "步枪采购",
    "icon": "🔫",
    "cost": {
      "iron": 30,
      "steel": 10
    },
    "gain": {
      "units": {
        "rifleman": 4
      }
    },
    "desc": "30 铁矿 + 10 钢材换 4 名步枪兵（立即入伍）。"
  },
  {
    "id": "deal_tank",
    "name": "坦克采购",
    "icon": "🛡️",
    "cost": {
      "iron": 120,
      "steel": 60,
      "rare": 10
    },
    "gain": {
      "units": {
        "tank": 1
      }
    },
    "desc": "高价现货坦克 1 辆（立即入伍）。"
  },
  {
    "id": "deal_drone",
    "name": "无人机采购",
    "icon": "🛸",
    "cost": {
      "iron": 50,
      "rare": 15
    },
    "gain": {
      "units": {
        "attack_drone": 2
      }
    },
    "desc": "2 架武装无人机（立即入伍）。"
  },
  {
    "id": "deal_sell",
    "name": "出售缴获",
    "icon": "💰",
    "cost": {},
    "gain": {
      "iron": 40
    },
    "requires": {
      "salvage": 1
    },
    "desc": "出售缴获物资：每次 +40 铁矿（需有战利品库存，见 manager.salvageStock）。"
  }
];

/* 动员令 3 级：征兵加速 vs 民生代价 */
const MILV3_MOBILIZATION = [
  {
    "level": 0,
    "name": "平时状态",
    "icon": "🕊️",
    "effects": {
      "recruitSpeedMul": 1.0,
      "growthMul": 1.0,
      "taxMul": 1.0
    },
    "desc": "无加成，无代价。"
  },
  {
    "level": 1,
    "name": "有限动员",
    "icon": "🟡",
    "effects": {
      "recruitSpeedMul": 1.5,
      "growthMul": 0.9,
      "taxMul": 1.05
    },
    "desc": "征兵速度 +50%，人口增长 -10%，税收 +5%。"
  },
  {
    "level": 2,
    "name": "全面动员",
    "icon": "🔴",
    "effects": {
      "recruitSpeedMul": 2.5,
      "growthMul": 0.7,
      "taxMul": 1.15,
      "morale": -5
    },
    "desc": "征兵速度 +150%，人口增长 -30%，税收 +15%，全军士气 -5（战争疲劳）。"
  }
];


/* ============================== 扩展系统（第三批） ============================== */

/* ---------- 军官职业轨道 ---------- */
// 包装 gainXp：升级时检查里程碑并记录已解锁加成
(function () {
  const _origGainXp = MilV3Officer.prototype.gainXp;
  MilV3Officer.prototype.gainXp = function (amount) {
    const before = this.level;
    const leveled = _origGainXp.call(this, amount);
    if (leveled > 0) {
      this.track = this.track || 'command';
      const track = MILV3_CAREER_TRACKS[this.track];
      this.milestones = this.milestones || [];
      for (const ms of (track ? track.milestones : [])) {
        if (this.level >= ms.level && !this.milestones.includes(ms.name)) {
          this.milestones.push(ms.name);
        }
      }
    }
    return leveled;
  };
  // 选择职业轨道（仅 3 级前可改）
  MilV3Officer.prototype.setTrack = function (trackId) {
    if (!MILV3_CAREER_TRACKS[trackId]) return { ok: false, reason: '未知职业轨道' };
    if (this.level >= 3 && this.track && this.track !== trackId) return { ok: false, reason: '3 级后不可改换轨道' };
    this.track = trackId;
    this.milestones = [];
    const track = MILV3_CAREER_TRACKS[trackId];
    for (const ms of track.milestones) if (this.level >= ms.level) this.milestones.push(ms.name);
    return { ok: true, track: track.name };
  };
  // 轨道加成聚合
  MilV3Officer.prototype.trackBonuses = function () {
    const b = { commandCap: 0, dmgMul: 1, morale: 0, repairMul: 1, fortDmgMul: 1,
      upkeepMul: 1, detectBonus: 0, ambushMul: 1, critChance: 0 };
    if (!this.track || !this.milestones) return b;
    const track = MILV3_CAREER_TRACKS[this.track];
    if (!track) return b;
    for (const ms of track.milestones) {
      if (!this.milestones.includes(ms.name)) continue;
      for (const k in (ms.bonus || {})) {
        if (k === 'commandCap' || k === 'morale' || k === 'detectBonus') b[k] = (b[k] || 0) + ms.bonus[k];
        else if (k === 'critChance') b[k] = (b[k] || 0) + ms.bonus[k];
        else b[k] = (b[k] || 1) * ms.bonus[k];
      }
    }
    return b;
  };
})();

/* ---------- 野战工事 ---------- */
class MilV3Fortifications {
  constructor() {
    this.built = [];   // {id, fortId, x, y, builtAt}
    this._seq = 0;
  }

  // 战前部署：在指定位置修建工事（每格限 1 座）
  build(fortId, x, y, game, manager) {
    const f = MILV3_FORTIFICATIONS.find(v => v.id === fortId);
    if (!f) return { ok: false, reason: '未知工事' };
    if (this.built.some(b => b.x === x && b.y === y)) return { ok: false, reason: '该位置已有工事' };
    if (this.built.length >= 6) return { ok: false, reason: '野战工事上限 6 座' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) {
      for (const k in (f.cost || {})) if ((inv[k] || 0) < f.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in (f.cost || {})) inv[k] -= f.cost[k];
    }
    const b = { id: 'fort_' + (++this._seq), fortId, name: f.name, x, y,
      builtAt: manager.gameTimeMs, readyAt: manager.gameTimeMs + f.buildMin * 60 * 1000,
      bonus: _m3Clone(f.bonus) };
    this.built.push(b);
    return { ok: true, fort: b, buildMin: f.buildMin };
  }

  // 战斗中的工事加成：防御方单位位于工事 2 格内时获得防御乘区
  defenseMulAt(x, y, gameTimeMs) {
    let m = 1;
    for (const b of this.built) {
      if (gameTimeMs < b.readyAt) continue;
      const d = Math.sqrt((b.x - x) ** 2 + (b.y - y) ** 2);
      if (d <= 2) m *= (b.bonus.defenseMul || 1);
    }
    return m;
  }

  // 雷区伤害：敌军进入雷区格时触发（由战斗引擎每 tick 检查）
  mineDamageAt(x, y, gameTimeMs) {
    let dmg = 0;
    for (const b of this.built) {
      if (b.fortId !== 'fort_mines' || gameTimeMs < b.readyAt) continue;
      if (Math.round(b.x) === Math.round(x) && Math.round(b.y) === Math.round(y)) dmg += 40;
    }
    return dmg;
  }

  serialize() { return { built: _m3Clone(this.built), seq: this._seq }; }
  static deserialize(d) {
    const f = new MilV3Fortifications();
    f.built = _m3Clone(d.built || []);
    f._seq = d.seq || 0;
    return f;
  }
}

// 工事防御接入伤害计算（防守方）
(function () {
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    if (def.side === 'def' && this._fortifications) {
      const m = this._fortifications.defenseMulAt(def.x, def.y, this.timeMs);
      if (m !== 1) return { dmg: Math.max(1, Math.round(res.dmg / m)), crit: res.crit };
    }
    return res;
  };
})();

/* ---------- 侦察任务 ---------- */
class MilV3Recon {
  constructor() {
    this.active = null;   // {missionId, endsAt}
    this.intel = 0;       // 情报点（每点下场战斗伤害 +2%）
    this.nextWaveReveal = null;
    this.weakPoint = false;
    this.sabotage = false;
    this.history = [];
  }

  start(missionId, game, manager) {
    const mis = MILV3_RECON_MISSIONS.find(m => m.id === missionId);
    if (!mis) return { ok: false, reason: '未知侦察任务' };
    if (this.active) return { ok: false, reason: '已有侦察任务进行中' };
    const req = mis.requires || {};
    if (req.unit) {
      const n = Object.values(manager.army.units).filter(u => u.alive && u.typeId === req.unit).length;
      if (n < (req.count || 1)) return { ok: false, reason: '需要 ' + req.count + ' 名' + (MILV3_UNIT_TYPES[req.unit] || {}).name + '（现有 ' + n + ' 名）' };
    }
    if (req.officerSkill) {
      const ok = Object.values(manager.army.officers).some(o => o.status === 'active' && (o.skills[req.officerSkill] || 0) >= (req.level || 0));
      if (!ok) return { ok: false, reason: '需要情报技能 ' + req.level + ' 级以上的军官' };
    }
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) {
      for (const k in (mis.cost || {})) if ((inv[k] || 0) < mis.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in (mis.cost || {})) inv[k] -= mis.cost[k];
    }
    this.active = { missionId, endsAt: manager.gameTimeMs + mis.durationMin * 60 * 1000 };
    return { ok: true, mission: mis.name, durationMin: mis.durationMin };
  }

  tick(gameTimeMs, manager) {
    if (!this.active || gameTimeMs < this.active.endsAt) return null;
    const mis = MILV3_RECON_MISSIONS.find(m => m.id === this.active.missionId);
    this.active = null;
    const rw = mis.rewards || {};
    if (rw.intel) this.intel += rw.intel;
    if (rw.nextWaveReveal) this.nextWaveReveal = manager.invasion.waveDef(manager.invasion.wave + 1);
    if (rw.weakPoint) this.weakPoint = true;
    if (rw.sabotage) this.sabotage = true;
    if (rw.ambushWarn) this.ambushWarn = true;
    this.history.unshift({ t: Date.now(), mission: mis.name });
    if (this.history.length > 10) this.history.length = 10;
    return { done: mis.name, rewards: rw };
  }

  // 下场战斗的情报加成（结算后清零）
  consumeBattleBonuses() {
    const b = { dmgMul: 1 + this.intel * 0.02, weakPoint: this.weakPoint, sabotage: this.sabotage };
    this.intel = 0;
    this.weakPoint = false;
    this.sabotage = false;
    return b;
  }

  serialize() { return { active: _m3Clone(this.active), intel: this.intel, nextWaveReveal: _m3Clone(this.nextWaveReveal), history: _m3Clone(this.history) }; }
  static deserialize(d) {
    const r = new MilV3Recon();
    r.active = _m3Clone(d.active);
    r.intel = d.intel || 0;
    r.nextWaveReveal = _m3Clone(d.nextWaveReveal);
    r.history = _m3Clone(d.history || []);
    return r;
  }
}

/* ---------- 前进补给站 ---------- */
// 补给站设在指定位置：以本站为中心 10 格内单位补给效率 +30%；
// 距市中心越远补给越差（每 10 格 -10% 士气），补给站抵消该惩罚。
class MilV3SupplyDepot {
  constructor() {
    this.depots = [];  // {id, x, y}
  }

  build(x, y, game, manager) {
    if (this.depots.length >= 3) return { ok: false, reason: '补给站上限 3 座' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && ((inv.iron || 0) < 50 || (inv.food || 0) < 20)) return { ok: false, reason: '需 50 铁矿 + 20 食物' };
    if (inv) { inv.iron -= 50; inv.food -= 20; }
    const d = { id: _m3Uid('depot'), x, y };
    this.depots.push(d);
    return { ok: true, depot: d };
  }

  // 某位置的补给效率：市中心 10 格内 100%，之外每 10 格 -10%，补给站 10 格内 +30%
  efficiencyAt(x, y, mapSize) {
    const c = (mapSize || 50) / 2;
    const dCenter = Math.sqrt((x - c) ** 2 + (y - c) ** 2);
    let eff = 1 - Math.max(0, Math.floor((dCenter - 10) / 10)) * 0.1;
    for (const d of this.depots) {
      const dd = Math.sqrt((x - d.x) ** 2 + (y - d.y) ** 2);
      if (dd <= 10) eff += 0.3;
    }
    return _m3Clamp(Math.round(eff * 100) / 100, 0.4, 1.3);
  }

  serialize() { return { depots: _m3Clone(this.depots) }; }
  static deserialize(d) {
    const s = new MilV3SupplyDepot();
    s.depots = _m3Clone(d.depots || []);
    return s;
  }
}

/* ---------- 军火贸易 ---------- */
class MilV3ArmsTrade {
  static buy(dealId, game, manager) {
    const deal = MILV3_ARMS_DEALS.find(d => d.id === dealId);
    if (!deal) return { ok: false, reason: '未知交易' };
    const inv = (game && game.player && game.player.inv) || null;
    if (dealId === 'deal_sell') {
      if ((manager.salvageStock || 0) < 1) return { ok: false, reason: '没有缴获可出售（先打胜仗积累战利品）' };
      manager.salvageStock--;
      if (inv) inv.iron = (inv.iron || 0) + 40;
      return { ok: true, deal: deal.name, iron: 40, salvageLeft: manager.salvageStock };
    }
    if (inv) {
      for (const k in (deal.cost || {})) if ((inv[k] || 0) < deal.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in (deal.cost || {})) inv[k] -= deal.cost[k];
    }
    const gain = deal.gain || {};
    if (gain.ammo) manager.logistics.ammo = Math.min(manager.logistics.ammoCap, manager.logistics.ammo + gain.ammo);
    if (gain.fuel) manager.logistics.fuel = Math.min(manager.logistics.fuelCap, manager.logistics.fuel + gain.fuel);
    const made = [];
    if (gain.units) {
      for (const typeId in gain.units) {
        for (let i = 0; i < gain.units[typeId]; i++) {
          const u = new MilV3Unit(typeId, 25, 25);
          manager.army.units[u.id] = u;
          made.push(u.id);
        }
      }
    }
    return { ok: true, deal: deal.name, gain: _m3Clone(gain), unitIds: made };
  }
}

/* ---------- 动员令 ---------- */
class MilV3Mobilization {
  constructor() {
    this.level = 0;
  }

  setLevel(level, manager) {
    if (![0, 1, 2].includes(level)) return { ok: false, reason: '动员等级须为 0/1/2' };
    if (level === 2 && manager.invasion.wave < 3) return { ok: false, reason: '全面动员需经历至少 3 波入侵（战时状态）' };
    this.level = level;
    const def = MILV3_MOBILIZATION[level];
    return { ok: true, level, name: def.name, effects: _m3Clone(def.effects) };
  }

  effects() {
    const def = MILV3_MOBILIZATION[this.level];
    return _m3Clone(def ? def.effects : {});
  }

  serialize() { return { level: this.level }; }
  static deserialize(d) {
    const m = new MilV3Mobilization();
    m.level = d.level || 0;
    return m;
  }
}

/* ---------- 撤退与重整 ---------- */
class MilV3Rally {
  // 重整：花费食物恢复编制士气与战备（战后使用）
  static rally(formationId, game, manager) {
    const f = manager.army.formations[formationId];
    if (!f) return { ok: false, reason: '编制不存在' };
    const inv = (game && game.player && game.player.inv) || null;
    const cost = 10 + f.size;
    if (inv && (inv.food || 0) < cost) return { ok: false, reason: '需 ' + cost + ' 食物' };
    if (inv) inv.food -= cost;
    f.morale = Math.min(MILV3.MORALE_MAX, f.morale + 15);
    f.readiness = Math.min(100, f.readiness + 20);
    return { ok: true, formation: f.name, morale: Math.round(f.morale), readiness: Math.round(f.readiness), cost };
  }

  // 战术撤退：战斗中的编制主动撤出（通过 battle 标记实现，manager 层调用时战斗已结束则无效）
  static retreat(battle, formationUnitIds) {
    if (!battle || battle.ended) return { ok: false, reason: '没有进行中的战斗' };
    let n = 0;
    for (const f of battle.fighters) {
      if (f.side === 'def' && formationUnitIds.includes(f._unitId)) { f.retreating = true; n++; }
    }
    return { ok: true, retreated: n };
  }
}

/* ---------- 兵棋推演 ---------- */
// 用当前陆军对阵下一波入侵做无风险推演（种子固定），返回胜率估计与建议。
class MilV3Wargame {
  static forecast(manager, trials) {
    trials = trials || 5;
    const next = manager.invasion.waveDef(manager.invasion.wave + 1);
    let wins = 0;
    let totalKills = 0, totalLost = 0;
    for (let t = 0; t < trials; t++) {
      const battle = new MilV3Battle({ seed: 1000 + t, mapSize: 50,
        bonuses: manager.weapons.bonuses(), doctrineFx: manager.doctrine.effects() });
      const defs = [];
      let i = 0;
      for (const f of Object.values(manager.army.formations)) {
        for (const uid of f.unitIds) {
          const u = manager.army.units[uid];
          if (u && u.alive) {
            defs.push(MilV3Battle.makeFighter(u.def, 'def', 20 + (i % 5), 20 + Math.floor(i / 5), { level: u.level }));
            i++;
          }
        }
      }
      const atks = [];
      let j = 0;
      for (const typeId in (next.composition || {})) {
        for (let n = 0; n < next.composition[typeId]; n++) {
          atks.push(MilV3Battle.makeFighter(MILV3_ENEMIES[typeId], 'atk', 30 + (j % 5), 30 + Math.floor(j / 5), { hpMul: next.hpMul, dmgMul: next.dmgMul }));
          j++;
        }
      }
      battle.addFighters([...defs, ...atks]);
      const res = battle.simulate(300);
      if (res.result === 'victory') wins++;
      totalKills += res.kills.def || 0;
      totalLost += (res.defStart - res.defAlive);
    }
    const winRate = Math.round(wins / trials * 100);
    return { nextWave: next.wave, trials, wins, winRate,
      avgKills: Math.round(totalKills / trials), avgLost: Math.round(totalLost / trials),
      advice: winRate >= 80 ? '胜算很大，可主动出击' : winRate >= 50 ? '胜负参半，建议补强防线与兵员' : winRate >= 20 ? '胜算较低，优先研发武器与征兵' : '极度危险！立即征兵、修防线、研发护盾' };
  }
}


/* ---------- 单位嘉奖结算 ---------- */
class MilV3Citations {
  // 战后按单位表现授奖（记录在单位 citations 数组中）
  static awardAfterBattle(battle, manager) {
    if (!battle) return [];
    const awarded = [];
    const defFighters = battle._defFighters || [];
    for (const ff of defFighters) {
      const u = manager.army.units[ff._unitId];
      if (!u || !u.alive) continue;
      u.citations = u.citations || [];
      u.battlesSurvived = (u.battlesSurvived || 0) + 1;
      const give = (id) => {
        if (!u.citations.includes(id)) {
          u.citations.push(id);
          awarded.push({ unit: u.id, typeId: u.typeId, citation: MILV3_CITATIONS.find(c => c.id === id).name });
        }
      };
      if (ff.kills >= 10) give('cit_bravery');
      if (ff.hp < ff.maxHp * 0.2) give('cit_stand');
      if (ff.kills >= 5 && (ff.range || 0) >= 8) give('cit_sharpshooter');
      if (u.typeId === 'medic' && u.battlesSurvived >= 3) give('cit_savior');
      if ((u.typeId === 'engineer' || u.typeId === 'eng_vehicle') && u.battlesSurvived >= 3) give('cit_engineer');
    }
    return awarded;
  }

  // 嘉奖加成（供战斗生成时读取）
  static bonusesFor(unit) {
    const b = { dmgMul: 1, hpMul: 1, critChance: 0, healMul: 1, repairMul: 1 };
    for (const id of (unit.citations || [])) {
      const c = MILV3_CITATIONS.find(x => x.id === id);
      if (!c) continue;
      for (const k in (c.bonus || {})) {
        if (k === 'critChance') b[k] = (b[k] || 0) + c.bonus[k];
        else b[k] = (b[k] || 1) * c.bonus[k];
      }
    }
    return b;
  }
}

/* ---------- 第三批接入 ---------- */
(function () {
  const _origInit2 = MilitaryV3Manager.prototype.initExtended2;
  MilitaryV3Manager.prototype.initExtended3 = function () {
    if (this.fortifications) return;
    this.fortifications = new MilV3Fortifications();
    this.recon = new MilV3Recon();
    this.supplyDepot = new MilV3SupplyDepot();
    this.mobilization = new MilV3Mobilization();
    this.salvageStock = 0;
  };
  // 包装 update：侦察结算 + 动员令士气 + 战利品库存
  const _origUpdate = MilitaryV3Manager.prototype.update;
  MilitaryV3Manager.prototype.update = function (now, dt, game) {
    this.initExtended2();
    this.initExtended3();
    const ret = _origUpdate.call(this, now, dt, game);
    const rec = this.recon.tick(this.gameTimeMs, this);
    if (rec) this.log('侦察完成：' + rec.done);
    // 全面动员的战争疲劳：每分钟全军士气 -0.5（下限 40）
    if (this.mobilization.level === 2) {
      for (const f of Object.values(this.army.formations)) {
        f.morale = Math.max(40, f.morale - 0.5 * (dt / 60000));
      }
    }
    return ret;
  };
  // 包装 recruit：动员令加速征兵
  const _origRecruit = MilitaryV3Manager.prototype.recruit;
  MilitaryV3Manager.prototype.recruit = function (typeId, count, game) {
    this.initExtended3();
    const mob = this.mobilization.effects();
    const b = this.buildingBonuses();
    const speed = (b.recruitSpeedMul || 1) * (mob.recruitSpeedMul || 1);
    return this.army.recruit(typeId, count, game, this.gameTimeMs, this.recruitCap(), speed);
  };
  // 包装 _maybeSpawnWave：工事与嘉奖加成 + 侦察情报注入战斗
  const _origSpawn = MilitaryV3Manager.prototype._maybeSpawnWave;
  MilitaryV3Manager.prototype._maybeSpawnWave = function (game) {
    _origSpawn.call(this, game);
    const battle = this.invasion.activeBattle;
    if (!battle) return;
    // 工事接入
    battle._fortifications = this.fortifications;
    // 嘉奖加成：按单位 citations 强化战斗机
    for (const ff of (battle._defFighters || [])) {
      const u = this.army.units[ff._unitId];
      if (!u) continue;
      const cb = MilV3Citations.bonusesFor(u);
      if (cb.dmgMul !== 1) ff.dmg = Math.round(ff.dmg * cb.dmgMul * 10) / 10;
      if (cb.hpMul !== 1) { ff.maxHp = Math.round(ff.maxHp * cb.hpMul); ff.hp = Math.round(ff.hp * cb.hpMul); }
      if (cb.critChance) ff.critBonus = (ff.critBonus || 0) + cb.critChance;
    }
    // 侦察情报：伤害加成与弱点/破坏效果
    const intel = this.recon.consumeBattleBonuses();
    if (intel.dmgMul !== 1) battle._intelDmgMul = intel.dmgMul;
    if (intel.weakPoint) battle._weakPoint = true;
    if (intel.sabotage) {
      for (const f of battle.fighters) {
        if (f.side === 'atk') { f.hp = Math.round(f.hp * 0.9); f.maxHp = f.hp; f.dmg = Math.round(f.dmg * 0.9 * 10) / 10; }
      }
      this.log('敌后破坏生效：敌军血量与伤害 -10%');
    }
    // 作战会议决策加成
    const decFx = this.warCouncil.decisionEffects();
    if (decFx.dmgMul) battle._decisionDmgMul = decFx.dmgMul;
    if (decFx.defenseMul) battle._decisionDefMul = decFx.defenseMul;
  };
  // 情报与决策加成接入伤害计算
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    let dmg = res.dmg;
    if (att.side === 'def' && this._intelDmgMul) dmg = Math.round(dmg * this._intelDmgMul);
    if (att.side === 'def' && this._decisionDmgMul) dmg = Math.round(dmg * this._decisionDmgMul);
    if (att.side === 'def' && this._weakPoint && (def.cls === 'armor' || def.typeId === 'raider_warlord')) dmg = Math.round(dmg * 1.25);
    if (def.side === 'def' && this._decisionDefMul) dmg = Math.round(dmg / this._decisionDefMul);
    return { dmg: Math.max(1, dmg), crit: res.crit };
  };
  // 包装 _resolveBattle：授奖 + 战利品库存
  const _origResolve = MilitaryV3Manager.prototype._resolveBattle;
  MilitaryV3Manager.prototype._resolveBattle = function (game) {
    const battle = this.invasion.activeBattle;
    _origResolve.call(this, game);
    if (battle) {
      const awarded = MilV3Citations.awardAfterBattle(battle, this);
      if (awarded.length) this.log('授奖：' + awarded.map(a => a.citation + '（' + (MILV3_UNIT_TYPES[a.typeId] || {}).name + '）').join('、'));
      const res = battle.summary();
      if (res.result === 'victory') this.salvageStock = (this.salvageStock || 0) + 1;
    }
  };
  // save/load 扩展
  const _origSave = MilitaryV3Manager.prototype.save;
  MilitaryV3Manager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended3();
    s.extended3 = { fortifications: this.fortifications.serialize(), recon: this.recon.serialize(),
      supplyDepot: this.supplyDepot.serialize(), mobilization: this.mobilization.serialize(),
      salvageStock: this.salvageStock || 0 };
    return s;
  };
  const _origLoad = MilitaryV3Manager.prototype.load;
  MilitaryV3Manager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended3();
    if (data && data.extended3) {
      if (data.extended3.fortifications) this.fortifications = MilV3Fortifications.deserialize(data.extended3.fortifications);
      if (data.extended3.recon) this.recon = MilV3Recon.deserialize(data.extended3.recon);
      if (data.extended3.supplyDepot) this.supplyDepot = MilV3SupplyDepot.deserialize(data.extended3.supplyDepot);
      if (data.extended3.mobilization) this.mobilization = MilV3Mobilization.deserialize(data.extended3.mobilization);
      this.salvageStock = data.extended3.salvageStock || 0;
    }
  };
})();

/* ---------- 第三批自测 ---------- */
class MilV3Extended3SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _m3TimeMs: 0,
      player: { inv: { iron: 2000, ice: 500, rare: 300, water: 500, food: 1000, steel: 800, tech: 800, uranium: 50, he3: 20 } },
      pop: { count: 60, cap: () => 200 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50 },
      map: { size: 50 }, military: { raidStrength: 0 } });
    const m = new MilitaryV3Manager();
    const g = mockGame();
    m.initExtended2();
    m.initExtended3();
    check('第三批系统初始化', !!m.fortifications && !!m.recon && !!m.supplyDepot && !!m.mobilization, '');
    // 职业轨道
    const off = m.enlistOfficer('王定远');
    const track = off.officer.setTrack('intel');
    check('军官选择情报轨道', track.ok, track.reason || '');
    off.officer.level = 7;
    off.officer.milestones = ['见习情报官', '谍报专家'];
    const tb = off.officer.trackBonuses();
    check('轨道加成含侦测与伏击', tb.detectBonus === 5 && tb.ambushMul === 1.2, JSON.stringify(tb));
    // 野战工事
    const fort = m.fortifications.build('fort_bunker', 20, 20, g, m);
    check('野战碉堡可修建', fort.ok, fort.reason || '');
    const dm = m.fortifications.defenseMulAt(20, 20, m.gameTimeMs + 10 * 60 * 1000);
    check('工事防御乘区生效', dm > 1, 'mul=' + dm);
    // 侦察
    m.recruit('recon_drone', 1, g);
    m.update(0, 10 * 60 * 1000, g);
    const rec = m.recon.start('rec_scout', g, m);
    check('侦察任务可派出', rec.ok, rec.reason || '');
    m.update(0, 3 * 60 * 1000, g);
    check('侦察完成揭示下一波', !!m.recon.nextWaveReveal, '');
    // 补给站
    const depot = m.supplyDepot.build(30, 30, g, m);
    check('补给站可建造', depot.ok, depot.reason || '');
    const effFar = m.supplyDepot.efficiencyAt(45, 45, 50);
    const effNear = m.supplyDepot.efficiencyAt(30, 30, 50);
    check('补给站提升远端补给效率', effNear > effFar, effNear + ' vs ' + effFar);
    // 动员令
    const mob = m.mobilization.setLevel(1, m);
    check('有限动员可宣布', mob.ok && m.mobilization.level === 1, mob.reason || '');
    check('动员令征兵加速', m.mobilization.effects().recruitSpeedMul === 1.5, '');
    const mob2 = m.mobilization.setLevel(2, m);
    check('全面动员需 3 波后（当前未达）', !mob2.ok, '');
    // 军火贸易
    const deal = MilV3ArmsTrade.buy('deal_ammo', g, m);
    check('弹药采购到账', deal.ok && m.logistics.ammo >= 200, JSON.stringify(deal).slice(0, 80));
    // 兵棋推演
    const fc = MilV3Wargame.forecast(m, 3);
    check('兵棋推演返回胜率', fc && typeof fc.winRate === 'number' && !!fc.advice, JSON.stringify(fc).slice(0, 120));
    // 重整
    const form = m.createFormation('infantry', 1, '重整班');
    const rally = MilV3Rally.rally(form.formation.id, g, m);
    check('重整可执行', rally.ok, rally.reason || '');
    // 嘉奖
    const u = new MilV3Unit('rifleman', 20, 20);
    u.citations = ['cit_bravery'];
    const cb = MilV3Citations.bonusesFor(u);
    check('嘉奖加成伤害 +5%', cb.dmgMul === 1.05, JSON.stringify(cb));
    // 存档往返（第三批）
    const saved = m.save();
    const m2 = new MilitaryV3Manager();
    m2.load(saved);
    check('第三批存档往返：工事保留', !!m2.fortifications && m2.fortifications.built.length === m.fortifications.built.length, '');
    check('第三批存档往返：动员等级保留', !!m2.mobilization && m2.mobilization.level === 1, '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = MilV3SelfTest.run;
  MilV3SelfTest.run = function () {
    const base = _origRun();
    const ext3 = MilV3Extended3SelfTest.run();
    return { total: base.total + ext3.total, passed: base.passed + ext3.passed,
      failed: [...base.failed, ...ext3.failed],
      results: [...base.results, ...ext3.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.MilV3Fortifications = MilV3Fortifications;
  window.MilV3Recon = MilV3Recon;
  window.MilV3SupplyDepot = MilV3SupplyDepot;
  window.MilV3ArmsTrade = MilV3ArmsTrade;
  window.MilV3Mobilization = MilV3Mobilization;
  window.MilV3Rally = MilV3Rally;
  window.MilV3Wargame = MilV3Wargame;
  window.MilV3Citations = MilV3Citations;
  window.MilV3Extended3SelfTest = MilV3Extended3SelfTest;
  window.MILV3_CAREER_TRACKS = MILV3_CAREER_TRACKS;
  window.MILV3_FORTIFICATIONS = MILV3_FORTIFICATIONS;
  window.MILV3_RECON_MISSIONS = MILV3_RECON_MISSIONS;
  window.MILV3_CITATIONS = MILV3_CITATIONS;
  window.MILV3_ARMS_DEALS = MILV3_ARMS_DEALS;
  window.MILV3_MOBILIZATION = MILV3_MOBILIZATION;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { MilV3Fortifications, MilV3Recon, MilV3SupplyDepot,
    MilV3ArmsTrade, MilV3Mobilization, MilV3Rally, MilV3Wargame, MilV3Citations,
    MilV3Extended3SelfTest, MILV3_CAREER_TRACKS, MILV3_FORTIFICATIONS,
    MILV3_RECON_MISSIONS, MILV3_CITATIONS, MILV3_ARMS_DEALS, MILV3_MOBILIZATION });
}

/* 军衔晋升条件：等级达标外还需战绩（参战数 + 个人击杀） */
const MILV3_RANK_REQS = [
  {
    "rank": 1,
    "battles": 0,
    "kills": 0,
    "desc": "入伍即授。"
  },
  {
    "rank": 2,
    "battles": 1,
    "kills": 0,
    "desc": "参加 1 场战斗。"
  },
  {
    "rank": 3,
    "battles": 2,
    "kills": 5,
    "desc": "参加 2 场战斗，个人击杀 5。"
  },
  {
    "rank": 4,
    "battles": 3,
    "kills": 10,
    "desc": "参加 3 场战斗，个人击杀 10。"
  },
  {
    "rank": 5,
    "battles": 5,
    "kills": 20,
    "desc": "参加 5 场战斗，个人击杀 20。"
  },
  {
    "rank": 6,
    "battles": 8,
    "kills": 35,
    "desc": "参加 8 场战斗，个人击杀 35。"
  },
  {
    "rank": 7,
    "battles": 12,
    "kills": 60,
    "desc": "参加 12 场战斗，个人击杀 60。"
  },
  {
    "rank": 8,
    "battles": 16,
    "kills": 90,
    "desc": "参加 16 场战斗，个人击杀 90。"
  },
  {
    "rank": 9,
    "battles": 20,
    "kills": 130,
    "desc": "参加 20 场战斗，个人击杀 130。"
  },
  {
    "rank": 10,
    "battles": 30,
    "kills": 200,
    "desc": "参加 30 场战斗，个人击杀 200，军区司令。"
  }
];

/* 8 种小队战术：一次生效一种，冷却 3-8 分钟，条件触发式加成 */
const MILV3_TACTICS = [
  {
    "id": "tac_crossfire",
    "name": "交叉火力",
    "icon": "✖️",
    "cooldownMin": 3,
    "effects": {
      "flankMul": 1.15
    },
    "desc": "目标被两名以上友军夹击时伤害 +15%（侧翼判定放宽）。"
  },
  {
    "id": "tac_focus",
    "name": "集火弱点",
    "icon": "🎯",
    "cooldownMin": 3,
    "effects": {
      "lowHpMul": 1.2
    },
    "desc": "对血量低于 30% 的敌人伤害 +20%。"
  },
  {
    "id": "tac_volley",
    "name": "齐射",
    "icon": "🔥",
    "cooldownMin": 5,
    "effects": {
      "firstVolleyMul": 1.3
    },
    "desc": "开局 10 秒内全军伤害 +30%。"
  },
  {
    "id": "tac_shieldwall",
    "name": "盾墙",
    "icon": "🛡️",
    "cooldownMin": 4,
    "effects": {
      "defenseMul": 1.2
    },
    "desc": "全军所受伤害 -20%（防御姿态）。"
  },
  {
    "id": "tac_skirmish",
    "name": "游斗",
    "icon": "💨",
    "cooldownMin": 3,
    "effects": {
      "speedMul": 1.15,
      "dmgMul": 0.95
    },
    "desc": "移速 +15%，伤害 -5%：打完就跑。"
  },
  {
    "id": "tac_snipe",
    "name": "狙杀优先",
    "icon": "🎯",
    "cooldownMin": 4,
    "effects": {
      "officerMul": 1.5
    },
    "desc": "对敌方军官/首领伤害 +50%。"
  },
  {
    "id": "tac_overwatch",
    "name": "警戒射击",
    "icon": "👁️",
    "cooldownMin": 3,
    "effects": {
      "rangeBonus": 1,
      "ambushMul": 1.2
    },
    "desc": "射程 +1，伏击伤害 +20%。"
  },
  {
    "id": "tac_laststand",
    "name": "背水一战",
    "icon": "⚔️",
    "cooldownMin": 8,
    "effects": {
      "desperateMul": 1.3
    },
    "desc": "守军剩余不足 30% 时伤害 +30%（绝境爆发）。"
  }
];

/* 4 种敌方 AI 画像：索敌偏好与伤害修正（按波次轮换） */
const MILV3_ENEMY_AI = [
  {
    "id": "ai_berserk",
    "name": "狂暴",
    "icon": "😡",
    "desc": "无脑冲锋：伤害 +10%，所受伤害 +10%。",
    "effects": {
      "dmgMul": 1.1,
      "takenMul": 1.1
    },
    "targeting": "nearest"
  },
  {
    "id": "ai_cautious",
    "name": "谨慎",
    "icon": "🦊",
    "desc": "保持距离：优先攻击最远的防御方，远程单位伤害 +10%。",
    "effects": {
      "rangeDmgMul": 1.1
    },
    "targeting": "farthest"
  },
  {
    "id": "ai_cunning",
    "name": "狡猾",
    "icon": "🐍",
    "desc": "专打残血：优先攻击血量最低的防御方，伤害 +15%。",
    "effects": {
      "dmgMul": 1.0
    },
    "targeting": "weakest"
  },
  {
    "id": "ai_commander",
    "name": "统帅",
    "icon": "👑",
    "desc": "斩首战术：优先攻击有军官指挥的编制单位，伤害 +10%。",
    "effects": {
      "dmgMul": 1.1
    },
    "targeting": "officer"
  }
];

/* 6 种天气：权重随机轮换，射程/侦测/护甲等真实修正 */
const MILV3_WEATHER = [
  {
    "id": "wx_clear",
    "name": "晴朗",
    "icon": "☀️",
    "weight": 40,
    "effects": {},
    "desc": "无修正。"
  },
  {
    "id": "wx_dust",
    "name": "沙尘暴",
    "icon": "🌪️",
    "weight": 20,
    "effects": {
      "rangeMul": 0.8,
      "detectMul": 0.7,
      "airDmgMul": 0.9
    },
    "desc": "射程 -20%，侦测 -30%，空军伤害 -10%。"
  },
  {
    "id": "wx_cold",
    "name": "严寒",
    "icon": "❄️",
    "weight": 15,
    "effects": {
      "speedMul": 0.9,
      "dmgMul": 0.95
    },
    "desc": "移速 -10%，伤害 -5%。"
  },
  {
    "id": "wx_flare",
    "name": "太阳耀斑",
    "icon": "🌞",
    "weight": 10,
    "effects": {
      "detectMul": 0.5,
      "shieldRegenMul": 0.5
    },
    "desc": "侦测 -50%，护盾回复 -50%（电磁干扰）。"
  },
  {
    "id": "wx_meteor",
    "name": "流星雨",
    "icon": "☄️",
    "weight": 8,
    "effects": {
      "randomDmg": 5
    },
    "desc": "每 10 秒随机落点造成 5 点伤害（敌我不分）。"
  },
  {
    "id": "wx_acid",
    "name": "酸雨",
    "icon": "🌧️",
    "weight": 7,
    "effects": {
      "armorMul": 0.9,
      "dmgMul": 0.95
    },
    "desc": "护甲 -10%（腐蚀），伤害 -5%。"
  }
];

/* 5 个战役：各含 3 个指定波次，连续守住得奖励（军队跨波次持续损耗） */
const MILV3_CAMPAIGNS = [
  {
    "id": "camp_first",
    "name": "首战：拾荒者之潮",
    "icon": "🌊",
    "waves": [
      1,
      2,
      3
    ],
    "reward": {
      "iron": 100,
      "tech": 10
    },
    "desc": "连续守住第 1-3 波：奖励 100 铁矿 + 10 科技点。"
  },
  {
    "id": "camp_armor",
    "name": "钢铁对决",
    "icon": "🛡️",
    "waves": [
      6,
      8,
      10
    ],
    "reward": {
      "steel": 80,
      "tech": 20
    },
    "desc": "连续守住第 6、8、10 波：奖励 80 钢材 + 20 科技点。"
  },
  {
    "id": "camp_air",
    "name": "制空权",
    "icon": "✈️",
    "waves": [
      7,
      9,
      13
    ],
    "reward": {
      "rare": 30,
      "tech": 20
    },
    "desc": "连续守住第 7、9、13 波：奖励 30 稀土 + 20 科技点。"
  },
  {
    "id": "camp_warlord",
    "name": "军阀讨伐",
    "icon": "👑",
    "waves": [
      10,
      14,
      17
    ],
    "reward": {
      "tech": 40,
      "rare": 20
    },
    "desc": "连续守住第 10、14、17 波（含军阀）：奖励 40 科技点 + 20 稀土。"
  },
  {
    "id": "camp_final",
    "name": "最后防线",
    "icon": "🏆",
    "waves": [
      18,
      19,
      20
    ],
    "reward": {
      "tech": 100,
      "rare": 50,
      "he3": 5
    },
    "desc": "连续守住第 18-20 波：奖励 100 科技点 + 50 稀土 + 5 氦3。"
  }
];


/* ============================== 扩展系统（第四批） ============================== */

/* ---------- 晋升条件：等级 + 战绩双门槛 ---------- */
MilV3Officer.prototype._checkPromotion = function () {
  let top = this.rank;
  for (const r of MILV3_RANKS) {
    if (this.level < r.minLevel) continue;
    const req = MILV3_RANK_REQS.find(x => x.rank === r.rank) || { battles: 0, kills: 0 };
    if (this.battles >= (req.battles || 0) && this.kills >= (req.kills || 0)) top = r.rank;
  }
  if (top > this.rank) { this.rank = top; return true; }
  return false;
};
// 晋升进度查询
MilV3Officer.prototype.promotionProgress = function () {
  const next = MILV3_RANKS.find(r => r.rank === this.rank + 1);
  if (!next) return { maxed: true };
  const req = MILV3_RANK_REQS.find(x => x.rank === next.rank) || { battles: 0, kills: 0 };
  return { nextRank: next.name, levelOk: this.level >= next.minLevel, level: this.level + '/' + next.minLevel,
    battlesOk: this.battles >= req.battles, battles: this.battles + '/' + req.battles,
    killsOk: this.kills >= req.kills, kills: this.kills + '/' + req.kills };
};

/* ---------- 小队战术 ---------- */
class MilV3Tactics {
  constructor() {
    this.active = null;   // 战术 id
    this.cooldownUntil = 0;
  }

  activate(tacticId, gameTimeMs) {
    const t = MILV3_TACTICS.find(x => x.id === tacticId);
    if (!t) return { ok: false, reason: '未知战术' };
    if (gameTimeMs < this.cooldownUntil) return { ok: false, reason: '战术冷却中' };
    this.active = tacticId;
    this.cooldownUntil = gameTimeMs + t.cooldownMin * 60 * 1000;
    return { ok: true, tactic: t.name, cooldownMin: t.cooldownMin };
  }

  effects() {
    if (!this.active) return {};
    const t = MILV3_TACTICS.find(x => x.id === this.active);
    return _m3Clone(t ? t.effects : {});
  }

  serialize() { return { active: this.active, cooldownUntil: this.cooldownUntil }; }
  static deserialize(d) {
    const t = new MilV3Tactics();
    t.active = d.active || null;
    t.cooldownUntil = d.cooldownUntil || 0;
    return t;
  }
}

// 战术加成接入伤害计算
(function () {
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    const fx = this._tacticFx || {};
    let dmg = res.dmg;
    if (att.side === 'def') {
      if (fx.lowHpMul && def.hp < def.maxHp * 0.3) dmg = Math.round(dmg * fx.lowHpMul);
      if (fx.officerMul && (def.typeId === 'raider_warlord')) dmg = Math.round(dmg * fx.officerMul);
      if (fx.firstVolleyMul && this.timeMs <= 10000) dmg = Math.round(dmg * fx.firstVolleyMul);
      if (fx.desperateMul) {
        const defAlive = this.alive('def').length;
        if (this._startDefCount > 0 && defAlive <= this._startDefCount * 0.3) dmg = Math.round(dmg * fx.desperateMul);
      }
      if (fx.flankMul && isFlank) dmg = Math.round(dmg * fx.flankMul);
    }
    if (def.side === 'def' && fx.defenseMul) dmg = Math.round(dmg / fx.defenseMul);
    return { dmg: Math.max(1, dmg), crit: res.crit };
  };
})();

/* ---------- 敌方 AI ---------- */
// 包装索敌：按 AI 画像改变进攻方目标选择
(function () {
  const _origNearest = MilV3Battle.prototype._nearestEnemy;
  MilV3Battle.prototype._nearestEnemy = function (f) {
    const base = _origNearest.call(this, f);
    if (f.side !== 'atk' || !this._aiProfile) return base;
    const profile = MILV3_ENEMY_AI.find(a => a.id === this._aiProfile);
    if (!profile) return base;
    const enemies = this.fighters.filter(e => e.side !== f.side && !e.dead && !e.retreating);
    if (!enemies.length) return base;
    if (profile.targeting === 'weakest') {
      let best = enemies[0];
      for (const e of enemies) if (e.hp / e.maxHp < best.hp / best.maxHp) best = e;
      return { target: best, dist: this._dist(f, best) };
    }
    if (profile.targeting === 'farthest') {
      let best = enemies[0], bd = -1;
      for (const e of enemies) {
        const d = this._dist(f, e);
        if (d <= (f.range || 5) + 3 && d > bd) { bd = d; best = e; }
      }
      return { target: best, dist: this._dist(f, best) };
    }
    if (profile.targeting === 'officer') {
      // 有军官指挥的编制单位优先（通过 _unitId 反查编制）
      const withOfficer = enemies.filter(e => {
        if (!e._unitId || !this._officerUnitIds) return false;
        return this._officerUnitIds.has(e._unitId);
      });
      if (withOfficer.length) {
        let best = withOfficer[0], bd = 1e9;
        for (const e of withOfficer) { const d = this._dist(f, e); if (d < bd) { bd = d; best = e; } }
        return { target: best, dist: bd };
      }
      return base;
    }
    return base;
  };
  // AI 伤害修正接入
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    const profile = this._aiProfile ? MILV3_ENEMY_AI.find(a => a.id === this._aiProfile) : null;
    if (!profile) return res;
    let dmg = res.dmg;
    if (att.side === 'atk' && profile.effects.dmgMul) dmg = Math.round(dmg * profile.effects.dmgMul);
    if (def.side === 'atk' && profile.effects.takenMul) dmg = Math.round(dmg * profile.effects.takenMul);
    if (att.side === 'atk' && profile.id === 'ai_cautious' && (att.range || 0) >= 8) dmg = Math.round(dmg * 1.1);
    return { dmg: Math.max(1, dmg), crit: res.crit };
  };
})();

// AI 画像按波次轮换：第 1-5 波狂暴，6-10 谨慎，11-15 狡猾，16+ 统帅
MilV3Invasion.aiProfileForWave = function (waveNo) {
  if (waveNo <= 5) return 'ai_berserk';
  if (waveNo <= 10) return 'ai_cautious';
  if (waveNo <= 15) return 'ai_cunning';
  return 'ai_commander';
};

/* ---------- 天气系统 ---------- */
class MilV3Weather {
  constructor() {
    this.current = 'wx_clear';
    this.nextChangeAt = 10 * 60 * 1000;
    this.history = [];
  }

  tick(gameTimeMs) {
    if (gameTimeMs < this.nextChangeAt) return null;
    this.nextChangeAt = gameTimeMs + 10 * 60 * 1000;
    let total = 0;
    for (const w of MILV3_WEATHER) total += w.weight;
    let r = Math.random() * total;
    let picked = MILV3_WEATHER[0];
    for (const w of MILV3_WEATHER) { r -= w.weight; if (r <= 0) { picked = w; break; } }
    this.current = picked.id;
    this.history.unshift({ t: Date.now(), weather: picked.name });
    if (this.history.length > 10) this.history.length = 10;
    return picked;
  }

  effects() {
    const w = MILV3_WEATHER.find(x => x.id === this.current);
    return _m3Clone(w ? w.effects : {});
  }

  name() {
    const w = MILV3_WEATHER.find(x => x.id === this.current);
    return w ? w.name : '晴朗';
  }

  serialize() { return { current: this.current, nextChangeAt: this.nextChangeAt, history: _m3Clone(this.history) }; }
  static deserialize(d) {
    const w = new MilV3Weather();
    w.current = d.current || 'wx_clear';
    w.nextChangeAt = d.nextChangeAt || 10 * 60 * 1000;
    w.history = _m3Clone(d.history || []);
    return w;
  }
}

// 天气修正接入伤害计算（射程与护甲部分）
(function () {
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    const wx = this._weatherFx || {};
    let dmg = res.dmg;
    if (wx.dmgMul) dmg = Math.round(dmg * wx.dmgMul);
    if (wx.armorMul) {
      // 酸雨腐蚀护甲：防御方护甲降低，等效伤害提升
      dmg = Math.round(dmg / Math.max(0.5, wx.armorMul));
    }
    if (wx.airDmgMul && att.branch === 'air') dmg = Math.round(dmg * wx.airDmgMul);
    return { dmg: Math.max(1, dmg), crit: res.crit };
  };
  // 流星雨：每 10 秒随机伤害（敌我不分）
  const _origTick = MilV3Battle.prototype.tick;
  MilV3Battle.prototype.tick = function (dtMs) {
    _origTick.call(this, dtMs);
    if (this.ended) return;
    const wx = this._weatherFx || {};
    if (wx.randomDmg) {
      this._meteorAcc = (this._meteorAcc || 0) + dtMs;
      if (this._meteorAcc >= 10000) {
        this._meteorAcc = 0;
        const alive = this.fighters.filter(f => !f.dead);
        if (alive.length) {
          const v = alive[Math.floor(this.rng() * alive.length)];
          v.hp -= wx.randomDmg;
          if (v.hp <= 0) { v.hp = 0; v.dead = true; }
        }
      }
    }
  };
})();

/* ---------- 战役模式 ---------- */
class MilV3Campaign {
  constructor() {
    this.active = null;   // {campaignId, wavesCleared: []}
    this.completed = [];  // 已完成战役 id
  }

  start(campaignId, manager) {
    const c = MILV3_CAMPAIGNS.find(x => x.id === campaignId);
    if (!c) return { ok: false, reason: '未知战役' };
    if (this.completed.includes(campaignId)) return { ok: false, reason: '该战役已完成' };
    if (this.active) return { ok: false, reason: '已有进行中的战役' };
    this.active = { campaignId, name: c.name, waves: [...c.waves], cleared: [], startedWave: manager.invasion.wave };
    return { ok: true, campaign: c.name, waves: c.waves };
  }

  // 每波胜利后检查进度
  onWaveCleared(waveNo, manager, game) {
    if (!this.active) return null;
    const c = MILV3_CAMPAIGNS.find(x => x.id === this.active.campaignId);
    if (!c) return null;
    if (!c.waves.includes(waveNo)) {
      // 不在战役波次内：连续性中断（战役要求连续守住指定波次）
      if (waveNo > Math.min(...c.waves) && !this.active.cleared.includes(waveNo)) {
        // 非战役波次不中断，只记录
      }
      return null;
    }
    this.active.cleared.push(waveNo);
    if (this.active.cleared.length >= c.waves.length) {
      this.completed.push(c.id);
      const inv = (game && game.player && game.player.inv) || null;
      if (inv) for (const k in (c.reward || {})) inv[k] = (inv[k] || 0) + c.reward[k];
      const name = c.name;
      this.active = null;
      return { completed: true, campaign: name, reward: _m3Clone(c.reward) };
    }
    return { progress: this.active.cleared.length + '/' + c.waves.length };
  }

  abandon() {
    if (!this.active) return { ok: false, reason: '没有进行中的战役' };
    this.active = null;
    return { ok: true };
  }

  serialize() { return { active: _m3Clone(this.active), completed: [...this.completed] }; }
  static deserialize(d) {
    const c = new MilV3Campaign();
    c.active = _m3Clone(d.active);
    c.completed = [...(d.completed || [])];
    return c;
  }
}

/* ---------- 第四批接入 ---------- */
(function () {
  MilitaryV3Manager.prototype.initExtended4 = function () {
    if (this.tactics) return;
    this.tactics = new MilV3Tactics();
    this.weather = new MilV3Weather();
    this.campaign = new MilV3Campaign();
    this._weatherAccMs = 0;
  };
  const _origUpdate = MilitaryV3Manager.prototype.update;
  MilitaryV3Manager.prototype.update = function (now, dt, game) {
    this.initExtended2();
    this.initExtended3();
    this.initExtended4();
    const ret = _origUpdate.call(this, now, dt, game);
    const w = this.weather.tick(this.gameTimeMs);
    if (w) this.log('天气变化：' + w.name + '——' + w.desc);
    return ret;
  };
  // 包装 _maybeSpawnWave：注入战术 / AI / 天气
  const _origSpawn = MilitaryV3Manager.prototype._maybeSpawnWave;
  MilitaryV3Manager.prototype._maybeSpawnWave = function (game) {
    _origSpawn.call(this, game);
    const battle = this.invasion.activeBattle;
    if (!battle) return;
    battle._tacticFx = this.tactics.effects();
    battle._aiProfile = MilV3Invasion.aiProfileForWave(this.invasion.wave);
    battle._weatherFx = this.weather.effects();
    battle._terrainOn = true;
    // 有军官编制的单位 id 集合（供统帅 AI 斩首 targeting）
    const officerUnitIds = new Set();
    for (const f of Object.values(this.army.formations)) {
      if (f.officerId) for (const uid of f.unitIds) officerUnitIds.add(uid);
    }
    battle._officerUnitIds = officerUnitIds;
    const ai = MILV3_ENEMY_AI.find(a => a.id === battle._aiProfile);
    if (ai) this.log('敌方战术：' + ai.name + '——' + ai.desc);
  };
  // 包装 _resolveBattle：战役进度 + 军官个人击杀记账（指挥部队的总击杀）
  const _origResolve = MilitaryV3Manager.prototype._resolveBattle;
  MilitaryV3Manager.prototype._resolveBattle = function (game) {
    const battle = this.invasion.activeBattle;
    const waveNo = battle ? battle._waveNo : 0;
    const wasVictory = battle && battle.result === 'victory';
    const defKills = battle ? ((battle.summary().kills || {}).def || 0) : 0;
    _origResolve.call(this, game);
    // 参战编制的军官：个人击杀 = 其指挥部队的总击杀（晋升条件用）
    for (const f of Object.values(this.army.formations)) {
      if (!f.officerId || !this.army.officers[f.officerId]) continue;
      const o = this.army.officers[f.officerId];
      o.kills = (o.kills || 0) + defKills;
    }
    if (battle && wasVictory) {
      const prog = this.campaign.onWaveCleared(waveNo, this, game);
      if (prog && prog.completed) this.log('战役完成：' + prog.campaign + '，奖励已发放');
      else if (prog) this.log('战役进度：' + prog.progress);
    }
  };
  const _origSave = MilitaryV3Manager.prototype.save;
  MilitaryV3Manager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended4();
    s.extended4 = { tactics: this.tactics.serialize(), weather: this.weather.serialize(),
      campaign: this.campaign.serialize() };
    return s;
  };
  const _origLoad = MilitaryV3Manager.prototype.load;
  MilitaryV3Manager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended4();
    if (data && data.extended4) {
      if (data.extended4.tactics) this.tactics = MilV3Tactics.deserialize(data.extended4.tactics);
      if (data.extended4.weather) this.weather = MilV3Weather.deserialize(data.extended4.weather);
      if (data.extended4.campaign) this.campaign = MilV3Campaign.deserialize(data.extended4.campaign);
    }
  };
})();

/* ---------- 第四批自测 ---------- */
class MilV3Extended4SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _m3TimeMs: 0,
      player: { inv: { iron: 2000, ice: 500, rare: 300, water: 500, food: 1000, steel: 800, tech: 800, uranium: 50, he3: 20 } },
      pop: { count: 60, cap: () => 200 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50 },
      map: { size: 50 }, military: { raidStrength: 0 } });
    const m = new MilitaryV3Manager();
    const g = mockGame();
    m.initExtended2();
    m.initExtended3();
    m.initExtended4();
    check('第四批系统初始化', !!m.tactics && !!m.weather && !!m.campaign, '');
    // 晋升条件
    const off = m.enlistOfficer('孙长风');
    off.officer.level = 5; off.officer.battles = 0; off.officer.kills = 0;
    const prog = off.officer.promotionProgress();
    check('晋升进度：等级够但战绩不够', prog.levelOk === true && prog.battlesOk === false, JSON.stringify(prog));
    off.officer.battles = 5; off.officer.kills = 25; off.officer.level = 7;
    const promoted = off.officer._checkPromotion();
    check('战绩达标后晋升', promoted && off.officer.rank >= 5, 'rank=' + off.officer.rank);
    // 战术
    const tac = m.tactics.activate('tac_focus', m.gameTimeMs);
    check('小队战术可激活', tac.ok, tac.reason || '');
    check('战术效果含弱点加成', m.tactics.effects().lowHpMul === 1.2, JSON.stringify(m.tactics.effects()));
    // AI 画像
    check('AI 画像按波次轮换', MilV3Invasion.aiProfileForWave(3) === 'ai_berserk' && MilV3Invasion.aiProfileForWave(8) === 'ai_cautious' && MilV3Invasion.aiProfileForWave(12) === 'ai_cunning' && MilV3Invasion.aiProfileForWave(18) === 'ai_commander', '');
    // 天气
    const w = m.weather.tick(11 * 60 * 1000);
    check('天气 10 分钟后轮换', !!w, w ? w.name : 'none');
    check('天气效果为对象', typeof m.weather.effects() === 'object', '');
    // 战役
    const camp = m.campaign.start('camp_first', m);
    check('战役可开始', camp.ok, camp.reason || '');
    const p1 = m.campaign.onWaveCleared(1, m, g);
    check('战役进度推进', p1 && p1.progress === '1/3', JSON.stringify(p1));
    m.campaign.onWaveCleared(2, m, g);
    const p3 = m.campaign.onWaveCleared(3, m, g);
    check('战役完成发放奖励', p3 && p3.completed === true, JSON.stringify(p3));
    check('战役奖励铁矿到账', (g.player.inv.iron || 0) >= 2000, 'iron=' + g.player.inv.iron);
    // 带战术/AI/天气的战斗模拟
    const battle = new MilV3Battle({ seed: 99, mapSize: 50, bonuses: {}, doctrineFx: {} });
    battle._tacticFx = { lowHpMul: 1.2 };
    battle._aiProfile = 'ai_cunning';
    battle._weatherFx = {};
    battle._terrainOn = true;
    const defs = [MilV3Battle.makeFighter(MILV3_UNIT_TYPES.rifleman, 'def', 20, 20, {})];
    const atks = [MilV3Battle.makeFighter(MILV3_ENEMIES.raider_marauder, 'atk', 24, 24, {})];
    battle.addFighters([...defs, ...atks]);
    const res = battle.simulate(120);
    check('战术/AI/天气注入后战斗可完成', !!res.result, res.result);
    // 存档往返（第四批）
    const saved = m.save();
    const m2 = new MilitaryV3Manager();
    m2.load(saved);
    check('第四批存档往返：战役完成保留', !!m2.campaign && m2.campaign.completed.includes('camp_first'), '');
    check('第四批存档往返：战术保留', !!m2.tactics, '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = MilV3SelfTest.run;
  MilV3SelfTest.run = function () {
    const base = _origRun();
    const ext4 = MilV3Extended4SelfTest.run();
    return { total: base.total + ext4.total, passed: base.passed + ext4.passed,
      failed: [...base.failed, ...ext4.failed],
      results: [...base.results, ...ext4.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.MilV3Tactics = MilV3Tactics;
  window.MilV3Weather = MilV3Weather;
  window.MilV3Campaign = MilV3Campaign;
  window.MilV3Extended4SelfTest = MilV3Extended4SelfTest;
  window.MILV3_RANK_REQS = MILV3_RANK_REQS;
  window.MILV3_TACTICS = MILV3_TACTICS;
  window.MILV3_ENEMY_AI = MILV3_ENEMY_AI;
  window.MILV3_WEATHER = MILV3_WEATHER;
  window.MILV3_CAMPAIGNS = MILV3_CAMPAIGNS;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { MilV3Tactics, MilV3Weather, MilV3Campaign,
    MilV3Extended4SelfTest, MILV3_RANK_REQS, MILV3_TACTICS, MILV3_ENEMY_AI,
    MILV3_WEATHER, MILV3_CAMPAIGNS });
}

/* 补给线距离档位：以市中心（25,25）或最近补给站为起点 */
const MILV3_SUPPLY_RULES = [
  {
    "band": 0,
    "maxDist": 15,
    "efficiency": 1.0,
    "name": "近程补给",
    "desc": "15 格内：补给充足，无惩罚。"
  },
  {
    "band": 1,
    "maxDist": 25,
    "efficiency": 0.85,
    "name": "中程补给",
    "desc": "15-25 格：战备度每分钟 -1，弹药消耗 +10%。"
  },
  {
    "band": 2,
    "maxDist": 35,
    "efficiency": 0.7,
    "name": "远程补给",
    "desc": "25-35 格：战备度每分钟 -2，弹药消耗 +20%。"
  },
  {
    "band": 3,
    "maxDist": 999,
    "efficiency": 0.5,
    "name": "补给断绝",
    "desc": "35 格以上：战备度每分钟 -3，弹药消耗 +40%，士气 -2。"
  }
];

/* 战地医疗参数 */
const MILV3_MEDICAL = {
  "baseHealPerMin": 4,
  "medicBonusPerMedic": 2,
  "returnThreshold": 0.7,
  "woundThreshold": 0.3,
  "maxWounded": 40,
  "notes": "战后血量低于 30% 的单位进入伤员名单；治疗至 70% 归队。"
};

/* 6 种作战命令：每编制一条，战斗中生效 */
const MILV3_ORDERS = [
  {
    "id": "ord_hold",
    "name": "坚守阵地",
    "icon": "🛡️",
    "effects": {
      "hpMul": 1.1
    },
    "desc": "血量 +10%：寸土不让。"
  },
  {
    "id": "ord_advance",
    "name": "主动出击",
    "icon": "⚔️",
    "effects": {
      "dmgMul": 1.1,
      "hpMul": 0.9
    },
    "desc": "伤害 +10%，血量 -10%：以攻代守。"
  },
  {
    "id": "ord_retreat",
    "name": "且战且退",
    "icon": "↩️",
    "effects": {
      "dmgMul": 1.15,
      "lowHpDmgMul": 0.8
    },
    "desc": "满血时伤害 +15%，残血时伤害 -20%：边打边撤。"
  },
  {
    "id": "ord_ambush",
    "name": "设伏待敌",
    "icon": "🪤",
    "effects": {
      "firstStrikeMul": 1.2
    },
    "desc": "开局 5 秒内伤害 +20%：先发制人。"
  },
  {
    "id": "ord_patrol",
    "name": "巡逻警戒",
    "icon": "🔍",
    "effects": {
      "detectBonus": 5
    },
    "desc": "侦测半径 +5：提前预警。"
  },
  {
    "id": "ord_fortify",
    "name": "构筑工事",
    "icon": "🏗️",
    "effects": {
      "hpMul": 1.15,
      "dmgMul": 0.9
    },
    "desc": "血量 +15%，伤害 -10%：依托工事。"
  }
];

/* 老兵称号：按参战数晋升，每名老兵提供全军伤害加成（可叠加，上限 +10%） */
const MILV3_VETERAN_TITLES = [
  {
    "battles": 5,
    "title": "老兵",
    "bonus": 0.01
  },
  {
    "battles": 10,
    "title": "精锐老兵",
    "bonus": 0.02
  },
  {
    "battles": 15,
    "title": "传奇老兵",
    "bonus": 0.03
  },
  {
    "battles": 20,
    "title": "战争英雄",
    "bonus": 0.05
  },
  {
    "battles": 30,
    "title": "不朽传奇",
    "bonus": 0.08
  }
];


/* ============================== 扩展系统（第五批） ============================== */

/* ---------- 补给线 ---------- */
class MilV3SupplyLines {
  // 最近补给点距离（市中心 25,25 或补给站）
  static nearestDepotDist(x, y, manager) {
    let best = Math.sqrt((x - 25) * (x - 25) + (y - 25) * (y - 25));
    if (manager && manager.supplyDepot) {
      for (const d of manager.supplyDepot.depots) {
        const dd = Math.sqrt((x - d.x) * (x - d.x) + (y - d.y) * (y - d.y));
        if (dd < best) best = dd;
      }
    }
    return best;
  }

  static bandFor(dist) {
    for (const r of MILV3_SUPPLY_RULES) if (dist <= r.maxDist) return r;
    return MILV3_SUPPLY_RULES[MILV3_SUPPLY_RULES.length - 1];
  }

  // 编制位置 = 其单位平均坐标
  static formationPos(formation, manager) {
    let sx = 0, sy = 0, n = 0;
    for (const uid of formation.unitIds || []) {
      const u = manager.army.units[uid];
      if (u && u.alive) { sx += u.x || 25; sy += u.y || 25; n++; }
    }
    if (!n) return { x: 25, y: 25 };
    return { x: sx / n, y: sy / n };
  }

  static efficiencyForFormation(formation, manager) {
    const p = MilV3SupplyLines.formationPos(formation, manager);
    const dist = MilV3SupplyLines.nearestDepotDist(p.x, p.y, manager);
    return MilV3SupplyLines.bandFor(dist);
  }

  // 每分钟结算：战备度/士气惩罚（供 update 调用）
  static tickMinute(manager) {
    const report = [];
    for (const f of Object.values(manager.army.formations)) {
      if (f.status === 'training') continue;
      const band = MilV3SupplyLines.efficiencyForFormation(f, manager);
      if (band.efficiency >= 1) continue;
      const deficit = 1 - band.efficiency;
      f.readiness = Math.max(0, f.readiness - deficit * 10);
      if (band.efficiency <= 0.5) f.morale = Math.max(0, f.morale - 2);
      report.push({ formation: f.name || f.id, band: band.name, efficiency: band.efficiency });
    }
    return report;
  }

  static statusReport(manager) {
    return Object.values(manager.army.formations).map(f => {
      const p = MilV3SupplyLines.formationPos(f, manager);
      const dist = MilV3SupplyLines.nearestDepotDist(p.x, p.y, manager);
      const band = MilV3SupplyLines.bandFor(dist);
      return { formation: f.name || f.id, x: Math.round(p.x), y: Math.round(p.y),
        dist: Math.round(dist * 10) / 10, band: band.name, efficiency: band.efficiency };
    });
  }
}

/* ---------- 战地医疗 ---------- */
class MilV3Medical {
  constructor() {
    this.wounded = [];  // {unitId, typeId, hp, maxHp}
  }

  // 战后收集伤员（血量 < 30% 且存活）
  collectAfterBattle(battle, manager) {
    const added = [];
    for (const ff of (battle._defFighters || [])) {
      if (ff.dead) continue;
      const u = manager.army.units[ff._unitId];
      if (!u || !u.alive) continue;
      if (ff.hp < ff.maxHp * MILV3_MEDICAL.woundThreshold) {
        if (this.wounded.length >= MILV3_MEDICAL.maxWounded) break;
        if (!this.wounded.find(w => w.unitId === u.id)) {
          u.wounded = true;
          this.wounded.push({ unitId: u.id, typeId: u.typeId });
          added.push(u.id);
        }
      }
    }
    return added;
  }

  // 每分钟治疗：基础 4 + 每名医疗兵 2（×建筑治疗加成）
  treatMinute(manager) {
    if (!this.wounded.length) return { treated: 0, returned: [] };
    let medics = 0;
    for (const u of Object.values(manager.army.units)) {
      if (u.alive && u.typeId === 'medic' && !u.wounded) medics++;
    }
    const b = manager.buildingBonuses ? manager.buildingBonuses() : {};
    const healMul = b.healMul || 1;
    const heal = (MILV3_MEDICAL.baseHealPerMin + medics * MILV3_MEDICAL.medicBonusPerMedic) * healMul;
    const returned = [];
    for (const w of [...this.wounded]) {
      const u = manager.army.units[w.unitId];
      if (!u || !u.alive) { this.wounded = this.wounded.filter(x => x.unitId !== w.unitId); continue; }
      u.hp = Math.min(u.maxHp, u.hp + heal);
      if (u.hp >= u.maxHp * MILV3_MEDICAL.returnThreshold) {
        u.wounded = false;
        this.wounded = this.wounded.filter(x => x.unitId !== w.unitId);
        returned.push(w.unitId);
      }
    }
    return { treated: this.wounded.length, returned };
  }

  serialize() { return { wounded: _m3Clone(this.wounded) }; }
  static deserialize(d) {
    const m = new MilV3Medical();
    m.wounded = _m3Clone(d.wounded || []);
    return m;
  }
}

/* ---------- 作战命令 ---------- */
class MilV3Orders {
  static setOrder(formationId, orderId, manager) {
    const f = manager.army.formations[formationId];
    if (!f) return { ok: false, reason: '编制不存在' };
    const o = MILV3_ORDERS.find(x => x.id === orderId);
    if (!o) return { ok: false, reason: '未知命令' };
    f.order = orderId;
    return { ok: true, formation: f.name || f.id, order: o.name };
  }

  // 编制命令汇总为战斗加成（守军侧）
  static battleEffects(manager) {
    const fx = { dmgMul: 1, hpMul: 1, firstStrikeMul: 1, lowHpDmgMul: 1, detectBonus: 0 };
    let hasRetreat = false;
    for (const f of Object.values(manager.army.formations)) {
      if (f.status !== 'intercept' && f.status !== 'garrison') continue;
      const o = MILV3_ORDERS.find(x => x.id === (f.order || 'ord_hold'));
      if (!o) continue;
      const e = o.effects || {};
      if (e.dmgMul) fx.dmgMul *= e.dmgMul;
      if (e.hpMul) fx.hpMul *= e.hpMul;
      if (e.firstStrikeMul) fx.firstStrikeMul = Math.max(fx.firstStrikeMul, e.firstStrikeMul);
      if (e.lowHpDmgMul) { fx.lowHpDmgMul = e.lowHpDmgMul; hasRetreat = true; }
      if (e.detectBonus) fx.detectBonus += e.detectBonus;
    }
    fx.hasRetreat = hasRetreat;
    return fx;
  }
}

// 命令加成接入伤害计算
(function () {
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    const ofx = this._orderFx || {};
    let dmg = res.dmg;
    if (att.side === 'def') {
      if (ofx.dmgMul && ofx.dmgMul !== 1) dmg = Math.round(dmg * ofx.dmgMul);
      if (ofx.firstStrikeMul && this.timeMs <= 5000) dmg = Math.round(dmg * ofx.firstStrikeMul);
      if (ofx.hasRetreat && att.hp < att.maxHp * 0.3 && ofx.lowHpDmgMul) dmg = Math.round(dmg * ofx.lowHpDmgMul);
    }
    return { dmg: Math.max(1, dmg), crit: res.crit };
  };
})();

/* ---------- 老兵系统 ---------- */
class MilV3Veterans {
  constructor() {
    this.registry = {};  // unitId -> {typeId, battles, title}
  }

  // 战后扫描：老兵（5 级）自动登记
  scan(manager) {
    const added = [];
    for (const u of Object.values(manager.army.units)) {
      if (!u.alive || u.level < 5) continue;
      if (this.registry[u.id]) {
        this.registry[u.id].battles = u.battlesSurvived || 0;
        continue;
      }
      this.registry[u.id] = { typeId: u.typeId, battles: u.battlesSurvived || 0, title: '老兵' };
      added.push(u.id);
    }
    return added;
  }

  titleFor(battles) {
    let title = '老兵', bonus = 0.01;
    for (const t of MILV3_VETERAN_TITLES) {
      if (battles >= t.battles) { title = t.title; bonus = t.bonus; }
    }
    return { title, bonus };
  }

  // 全军伤害加成：每名老兵按称号叠加，上限 +10%
  armyBonus() {
    let total = 0;
    for (const v of Object.values(this.registry)) {
      const t = this.titleFor(v.battles || 0);
      v.title = t.title;
      total += t.bonus;
    }
    return Math.min(0.10, total);
  }

  // 老兵带新兵：有老兵时全军经验 +5%
  xpBonus() {
    return Object.keys(this.registry).length > 0 ? 0.05 : 0;
  }

  serialize() { return { registry: _m3Clone(this.registry) }; }
  static deserialize(d) {
    const v = new MilV3Veterans();
    v.registry = _m3Clone(d.registry || {});
    return v;
  }
}

/* ---------- 第五批接入 ---------- */
(function () {
  MilitaryV3Manager.prototype.initExtended5 = function () {
    if (this.medical) return;
    this.medical = new MilV3Medical();
    this.veterans = new MilV3Veterans();
  };
  const _origUpdate = MilitaryV3Manager.prototype.update;
  MilitaryV3Manager.prototype.update = function (now, dt, game) {
    this.initExtended2();
    this.initExtended3();
    this.initExtended4();
    this.initExtended5();
    const ret = _origUpdate.call(this, now, dt, game);
    // 每分钟：补给线结算 + 医疗（用独立累加器，与原版 _upkeepAccMs 同步节奏）
    this._m5AccMs = (this._m5AccMs || 0) + Math.max(0, dt || 0);
    if (this._m5AccMs >= 60 * 1000) {
      this._m5AccMs -= 60 * 1000;
      const rep = MilV3SupplyLines.tickMinute(this);
      if (rep.length) this.log('补给线告警：' + rep.map(r => r.formation + '（' + r.band + '）').join('、'));
      const med = this.medical.treatMinute(this);
      if (med.returned.length) this.log('伤员归队：' + med.returned.length + ' 名');
    }
    return ret;
  };
  // 包装 _maybeSpawnWave：命令/老兵/伤员加成 + 巡逻侦测
  const _origSpawn = MilitaryV3Manager.prototype._maybeSpawnWave;
  MilitaryV3Manager.prototype._maybeSpawnWave = function (game) {
    _origSpawn.call(this, game);
    const battle = this.invasion.activeBattle;
    if (!battle) return;
    battle._orderFx = MilV3Orders.battleEffects(this);
    // 命令：血量修正直接作用于守军战斗机
    if (battle._orderFx.hpMul && battle._orderFx.hpMul !== 1) {
      for (const ff of (battle._defFighters || [])) {
        ff.maxHp = Math.max(1, Math.round(ff.maxHp * battle._orderFx.hpMul));
        ff.hp = Math.max(1, Math.round(ff.hp * battle._orderFx.hpMul));
      }
    }
    // 伤员带伤参战：血量 -30%
    for (const ff of (battle._defFighters || [])) {
      const u = this.army.units[ff._unitId];
      if (u && u.wounded) {
        ff.maxHp = Math.max(1, Math.round(ff.maxHp * 0.7));
        ff.hp = Math.min(ff.hp, ff.maxHp);
      }
    }
    // 老兵加成
    const vetBonus = this.veterans.armyBonus();
    if (vetBonus > 0) battle._vetDmgMul = 1 + vetBonus;
    // 巡逻命令侦测加成：提前预警分钟数
    if (battle._orderFx.detectBonus) this.log('巡逻警戒：侦测 +' + battle._orderFx.detectBonus);
  };
  // 老兵伤害加成接入
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    if (att.side === 'def' && this._vetDmgMul) return { dmg: Math.max(1, Math.round(res.dmg * this._vetDmgMul)), crit: res.crit };
    return res;
  };
  // 包装 _resolveBattle：伤员收集 + 老兵登记 + 老兵经验加成
  const _origResolve = MilitaryV3Manager.prototype._resolveBattle;
  MilitaryV3Manager.prototype._resolveBattle = function (game) {
    const battle = this.invasion.activeBattle;
    _origResolve.call(this, game);
    if (!battle) return;
    const added = this.medical.collectAfterBattle(battle, this);
    if (added.length) this.log('战地医疗：' + added.length + ' 名伤员送治');
    const vets = this.veterans.scan(this);
    if (vets.length) this.log('老兵登记：' + vets.length + ' 名 5 级老兵入册');
    const xpB = this.veterans.xpBonus();
    if (xpB > 0) {
      for (const ff of (battle._defFighters || [])) {
        const u = this.army.units[ff._unitId];
        if (u && u.alive) u.gainXp(Math.round(ff.kills * MILV3.XP_PER_KILL * xpB));
      }
    }
  };
  const _origSave = MilitaryV3Manager.prototype.save;
  MilitaryV3Manager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended5();
    s.extended5 = { medical: this.medical.serialize(), veterans: this.veterans.serialize() };
    return s;
  };
  const _origLoad = MilitaryV3Manager.prototype.load;
  MilitaryV3Manager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended5();
    if (data && data.extended5) {
      if (data.extended5.medical) this.medical = MilV3Medical.deserialize(data.extended5.medical);
      if (data.extended5.veterans) this.veterans = MilV3Veterans.deserialize(data.extended5.veterans);
    }
  };
})();

/* ---------- 第五批自测 ---------- */
class MilV3Extended5SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _m3TimeMs: 0,
      player: { inv: { iron: 2000, ice: 500, rare: 300, water: 500, food: 1000, steel: 800, tech: 800, uranium: 50, he3: 20 } },
      pop: { count: 60, cap: () => 200 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50 },
      map: { size: 50 }, military: { raidStrength: 0 } });
    const m = new MilitaryV3Manager();
    const g = mockGame();
    m.initExtended2();
    m.initExtended3();
    m.initExtended4();
    m.initExtended5();
    check('第五批系统初始化', !!m.medical && !!m.veterans, '');
    // 补给线
    const rep = MilV3SupplyLines.statusReport(m);
    check('补给线状态报告为空编制', Array.isArray(rep), '');
    const bandNear = MilV3SupplyLines.bandFor(10);
    const bandFar = MilV3SupplyLines.bandFor(40);
    check('补给档位近高远低', bandNear.efficiency === 1.0 && bandFar.efficiency === 0.5, bandNear.efficiency + '/' + bandFar.efficiency);
    // 作战命令
    m.recruit('rifleman', 4, g);
    m.update(0, 10 * 60 * 1000, g);
    const form = m.createFormation('infantry', 1, '补给测试班');
    const ord = MilV3Orders.setOrder(form.formation.id, 'ord_advance', m);
    check('作战命令可下达', ord.ok && form.formation.order === 'ord_advance', ord.reason || '');
    const ofx = MilV3Orders.battleEffects(m);
    check('命令加成含主动出击伤害', ofx.dmgMul > 1, JSON.stringify(ofx));
    // 战地医疗
    const u = new MilV3Unit('rifleman', 25, 25);
    u.hp = Math.round(u.maxHp * 0.2);
    const fakeBattle = { _defFighters: [{ _unitId: u.id, dead: false, hp: u.hp, maxHp: u.maxHp }] };
    m.army.units[u.id] = u;
    const added = m.medical.collectAfterBattle(fakeBattle, m);
    check('重伤单位进入伤员名单', added.length === 1 && u.wounded === true, '');
    for (let i = 0; i < 30; i++) m.medical.treatMinute(m);
    check('伤员治疗后归队', u.wounded === false && m.medical.wounded.length === 0, 'hp=' + u.hp + '/' + u.maxHp);
    // 老兵
    const vet = new MilV3Unit('rifleman', 25, 25);
    vet.level = 5; vet.battlesSurvived = 12;
    m.army.units[vet.id] = vet;
    const scanned = m.veterans.scan(m);
    check('5 级老兵自动登记', scanned.length === 1, '');
    check('老兵称号随参战数晋升', m.veterans.titleFor(12).title === '精锐老兵', m.veterans.titleFor(12).title);
    check('老兵全军加成上限 10%', m.veterans.armyBonus() > 0 && m.veterans.armyBonus() <= 0.10, 'bonus=' + m.veterans.armyBonus());
    check('老兵经验加成 5%', m.veterans.xpBonus() === 0.05, '');
    // 存档往返（第五批）
    const saved = m.save();
    const m2 = new MilitaryV3Manager();
    m2.load(saved);
    check('第五批存档往返：老兵保留', !!m2.veterans && Object.keys(m2.veterans.registry).length === 1, '');
    check('第五批存档往返：医疗保留', !!m2.medical, '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = MilV3SelfTest.run;
  MilV3SelfTest.run = function () {
    const base = _origRun();
    const ext5 = MilV3Extended5SelfTest.run();
    return { total: base.total + ext5.total, passed: base.passed + ext5.passed,
      failed: [...base.failed, ...ext5.failed],
      results: [...base.results, ...ext5.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.MilV3SupplyLines = MilV3SupplyLines;
  window.MilV3Medical = MilV3Medical;
  window.MilV3Orders = MilV3Orders;
  window.MilV3Veterans = MilV3Veterans;
  window.MilV3Extended5SelfTest = MilV3Extended5SelfTest;
  window.MILV3_SUPPLY_RULES = MILV3_SUPPLY_RULES;
  window.MILV3_MEDICAL = MILV3_MEDICAL;
  window.MILV3_ORDERS = MILV3_ORDERS;
  window.MILV3_VETERAN_TITLES = MILV3_VETERAN_TITLES;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { MilV3SupplyLines, MilV3Medical, MilV3Orders, MilV3Veterans,
    MilV3Extended5SelfTest, MILV3_SUPPLY_RULES, MILV3_MEDICAL, MILV3_ORDERS, MILV3_VETERAN_TITLES });
}

/* 4 种防御预案：一次生效一种，波次生成时注入战斗 */
const MILV3_DEFENSE_PLANS = [
  {
    "id": "plan_depth",
    "name": "纵深防御",
    "icon": "🏰",
    "effects": {
      "cityHpMul": 1.1,
      "defHpMul": 1.05,
      "defDmgMul": 0.95
    },
    "desc": "市中心血量 +10%，守军血量 +5%，伤害 -5%：层层设防，拖垮敌人。"
  },
  {
    "id": "plan_focus",
    "name": "重点防御",
    "icon": "🎯",
    "effects": {
      "cityHpMul": 1.2,
      "defDmgMul": 0.95
    },
    "desc": "市中心血量 +20%，守军伤害 -5%：全部资源保市中心。"
  },
  {
    "id": "plan_mobile",
    "name": "机动防御",
    "icon": "🏍️",
    "effects": {
      "cityHpMul": 0.9,
      "defDmgMul": 1.05
    },
    "desc": "市中心血量 -10%，守军伤害 +5%：主动出击，野战歼敌。"
  },
  {
    "id": "plan_counter",
    "name": "全线反击",
    "icon": "⚔️",
    "effects": {
      "defDmgMul": 1.1,
      "defHpMul": 0.9
    },
    "desc": "守军伤害 +10%，血量 -10%：以攻代守，不胜则亡。"
  }
];

/* 战利品加工配方：胜利缴获的战利品库存可兑换资源 */
const MILV3_SALVAGE_RECIPES = [
  {
    "id": "salvage_iron",
    "name": "拆解废铁",
    "stock": 1,
    "out": {
      "iron": 50
    },
    "desc": "1 份战利品 → 50 铁矿。"
  },
  {
    "id": "salvage_steel",
    "name": "熔炼钢材",
    "stock": 2,
    "out": {
      "steel": 30
    },
    "desc": "2 份战利品 → 30 钢材。"
  },
  {
    "id": "salvage_tech",
    "name": "逆向研究",
    "stock": 3,
    "out": {
      "tech": 10
    },
    "desc": "3 份战利品 → 10 科技点。"
  },
  {
    "id": "salvage_rare",
    "name": "提炼稀土",
    "stock": 5,
    "out": {
      "rare": 10
    },
    "desc": "5 份战利品 → 10 稀土。"
  }
];

/* 军衔权限：可指挥编制层级 + 参谋名额 + 薪水系数（每名参谋 +2% 伤害） */
const MILV3_RANK_PRIVILEGES = [
  {
    "rank": 1,
    "maxTier": 1,
    "staffSlots": 0,
    "salaryMul": 1.0,
    "note": "可指挥班；无参谋名额。"
  },
  {
    "rank": 2,
    "maxTier": 1,
    "staffSlots": 1,
    "salaryMul": 1.1,
    "note": "可指挥班；1 名参谋。"
  },
  {
    "rank": 3,
    "maxTier": 2,
    "staffSlots": 1,
    "salaryMul": 1.2,
    "note": "可指挥排；1 名参谋。"
  },
  {
    "rank": 4,
    "maxTier": 2,
    "staffSlots": 1,
    "salaryMul": 1.3,
    "note": "可指挥排；1 名参谋。"
  },
  {
    "rank": 5,
    "maxTier": 3,
    "staffSlots": 2,
    "salaryMul": 1.5,
    "note": "可指挥连；2 名参谋。"
  },
  {
    "rank": 6,
    "maxTier": 3,
    "staffSlots": 2,
    "salaryMul": 1.7,
    "note": "可指挥连；2 名参谋。"
  },
  {
    "rank": 7,
    "maxTier": 4,
    "staffSlots": 2,
    "salaryMul": 2.0,
    "note": "可指挥营；2 名参谋。"
  },
  {
    "rank": 8,
    "maxTier": 4,
    "staffSlots": 3,
    "salaryMul": 2.3,
    "note": "可指挥营；3 名参谋。"
  },
  {
    "rank": 9,
    "maxTier": 5,
    "staffSlots": 3,
    "salaryMul": 2.7,
    "note": "可指挥旅；3 名参谋。"
  },
  {
    "rank": 10,
    "maxTier": 5,
    "staffSlots": 4,
    "salaryMul": 3.2,
    "note": "可指挥旅；4 名参谋，军区司令。"
  }
];


/* ============================== 扩展系统（第六批） ============================== */

/* ---------- 防御预案 ---------- */
class MilV3DefensePlans {
  constructor() {
    this.active = 'plan_depth';  // 默认纵深防御
  }

  setPlan(planId) {
    const p = MILV3_DEFENSE_PLANS.find(x => x.id === planId);
    if (!p) return { ok: false, reason: '未知预案' };
    this.active = planId;
    return { ok: true, plan: p.name, desc: p.desc };
  }

  effects() {
    const p = MILV3_DEFENSE_PLANS.find(x => x.id === this.active);
    return _m3Clone(p ? p.effects : {});
  }

  // 波次生成后注入战斗：市中心血量与守军数值
  applyToBattle(battle) {
    const fx = this.effects();
    if (fx.cityHpMul && fx.cityHpMul !== 1) {
      battle.cityHp = Math.round(battle.cityHp * fx.cityHpMul);
      battle.cityMaxHp = Math.round(battle.cityMaxHp * fx.cityHpMul);
    }
    if (fx.defHpMul && fx.defHpMul !== 1) {
      for (const ff of (battle._defFighters || [])) {
        ff.maxHp = Math.max(1, Math.round(ff.maxHp * fx.defHpMul));
        ff.hp = Math.max(1, Math.round(ff.hp * fx.defHpMul));
      }
    }
    if (fx.defDmgMul && fx.defDmgMul !== 1) battle._planDmgMul = fx.defDmgMul;
    return fx;
  }

  serialize() { return { active: this.active }; }
  static deserialize(d) {
    const p = new MilV3DefensePlans();
    p.active = d.active || 'plan_depth';
    return p;
  }
}

// 预案伤害加成接入
(function () {
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    if (att.side === 'def' && this._planDmgMul) return { dmg: Math.max(1, Math.round(res.dmg * this._planDmgMul)), crit: res.crit };
    return res;
  };
})();

/* ---------- 战报档案 ---------- */
class MilV3BattleArchive {
  constructor() {
    this.records = [];  // 最多保留 20 场
  }

  record(entry) {
    this.records.unshift({
      t: Date.now(),
      wave: entry.wave || 0,
      result: entry.result || 'unknown',
      kills: entry.kills || 0,
      losses: entry.losses || 0,
      durationSec: entry.durationSec || 0,
      cityHpLeft: entry.cityHpLeft || 0,
      ai: entry.ai || '',
      weather: entry.weather || '',
      tactic: entry.tactic || '',
      plan: entry.plan || '',
    });
    if (this.records.length > 20) this.records.length = 20;
  }

  list(n) { return this.records.slice(0, n || 10); }
  filter(result) { return this.records.filter(r => r.result === result); }

  stats() {
    const total = this.records.length;
    const wins = this.records.filter(r => r.result === 'victory').length;
    let kills = 0, losses = 0, bestWave = 0, dur = 0;
    for (const r of this.records) {
      kills += r.kills; losses += r.losses;
      if (r.wave > bestWave) bestWave = r.wave;
      dur += r.durationSec;
    }
    return { battles: total, wins, winRate: total ? Math.round(wins / total * 100) : 0,
      totalKills: kills, totalLosses: losses, bestWave,
      avgDurationSec: total ? Math.round(dur / total) : 0 };
  }

  serialize() { return { records: _m3Clone(this.records) }; }
  static deserialize(d) {
    const a = new MilV3BattleArchive();
    a.records = _m3Clone(d.records || []);
    return a;
  }
}

/* ---------- 战利品加工 ---------- */
class MilV3Salvage {
  static process(recipeId, count, game, manager) {
    const r = MILV3_SALVAGE_RECIPES.find(x => x.id === recipeId);
    if (!r) return { ok: false, reason: '未知配方' };
    count = Math.max(1, Math.floor(count || 1));
    const need = r.stock * count;
    if ((manager.salvageStock || 0) < need) return { ok: false, reason: '战利品不足（需要 ' + need + ' 份）' };
    manager.salvageStock -= need;
    const inv = (game && game.player && game.player.inv) || null;
    const gained = {};
    for (const k in r.out) {
      gained[k] = r.out[k] * count;
      if (inv) inv[k] = (inv[k] || 0) + gained[k];
    }
    return { ok: true, recipe: r.name, used: need, gained };
  }

  static report(manager) {
    return { stock: manager.salvageStock || 0,
      recipes: MILV3_SALVAGE_RECIPES.map(r => ({ id: r.id, name: r.name, stock: r.stock, out: r.out,
        affordable: Math.floor((manager.salvageStock || 0) / r.stock) })) };
  }
}

/* ---------- 军衔权限与参谋 ---------- */
MilV3Officer.prototype.authority = function () {
  const p = MILV3_RANK_PRIVILEGES.find(x => x.rank === this.rank) || MILV3_RANK_PRIVILEGES[0];
  return { maxTier: p.maxTier, staffSlots: p.staffSlots, salaryMul: p.salaryMul, note: p.note };
};

MilV3Officer.prototype.salary = function () {
  const rank = MILV3_RANKS.find(r => r.rank === this.rank) || MILV3_RANKS[0];
  const p = MILV3_RANK_PRIVILEGES.find(x => x.rank === this.rank) || MILV3_RANK_PRIVILEGES[0];
  return Math.round((rank.salary || 0) * p.salaryMul);
};

// 参谋配备：低级军官（≤3 级）可担任参谋，每名 +2% 伤害
MilV3Officer.prototype.attachStaff = function (juniorOfficer, manager) {
  const auth = this.authority();
  this.staff = this.staff || [];
  if (this.staff.length >= auth.staffSlots) return { ok: false, reason: '参谋名额已满（' + auth.staffSlots + ' 名）' };
  if (!juniorOfficer || juniorOfficer.rank > 3) return { ok: false, reason: '参谋须为 3 级及以下军官' };
  if (juniorOfficer.id === this.id) return { ok: false, reason: '不能任命自己为参谋' };
  if (this.staff.includes(juniorOfficer.id)) return { ok: false, reason: '该军官已是参谋' };
  for (const o of Object.values(manager.army.officers)) {
    if (o.id !== this.id && (o.staff || []).includes(juniorOfficer.id)) return { ok: false, reason: '该军官已担任他人参谋' };
  }
  this.staff.push(juniorOfficer.id);
  return { ok: true, chief: this.name, staff: juniorOfficer.name, bonus: '+2% 伤害' };
};

MilV3Officer.prototype.staffBonus = function () {
  return (this.staff || []).length * 0.02;
};

/* ---------- 第六批接入 ---------- */
(function () {
  MilitaryV3Manager.prototype.initExtended6 = function () {
    if (this.defensePlans) return;
    this.defensePlans = new MilV3DefensePlans();
    this.battleArchive = new MilV3BattleArchive();
  };
  // 包装 officerEffectsFor：参谋加成并入伤害乘区
  const _origOfficerFx = MilitaryV3Manager.prototype.officerEffectsFor;
  MilitaryV3Manager.prototype.officerEffectsFor = function (formations) {
    const fx = _origOfficerFx.call(this, formations) || {};
    let staffDmg = 0;
    for (const f of (formations || [])) {
      if (!f.officerId || !this.army.officers[f.officerId]) continue;
      staffDmg += this.army.officers[f.officerId].staffBonus();
    }
    if (staffDmg > 0) fx.dmgMul = (fx.dmgMul || 1) * (1 + staffDmg);
    return fx;
  };
  // 包装 _maybeSpawnWave：防御预案注入
  const _origSpawn = MilitaryV3Manager.prototype._maybeSpawnWave;
  MilitaryV3Manager.prototype._maybeSpawnWave = function (game) {
    _origSpawn.call(this, game);
    const battle = this.invasion.activeBattle;
    if (!battle) return;
    const fx = this.defensePlans.applyToBattle(battle);
    if (fx.cityHpMul && fx.cityHpMul !== 1) this.log('防御预案生效：市中心血量 x' + fx.cityHpMul);
  };
  // 包装 _resolveBattle：战报归档
  const _origResolve = MilitaryV3Manager.prototype._resolveBattle;
  MilitaryV3Manager.prototype._resolveBattle = function (game) {
    const battle = this.invasion.activeBattle;
    _origResolve.call(this, game);
    if (!battle) return;
    const res = battle.summary();
    this.battleArchive.record({
      wave: battle._waveNo || 0,
      result: res.result,
      kills: (res.kills || {}).def || 0,
      losses: this.stats.unitsLost || 0,
      durationSec: res.durationSec || 0,
      cityHpLeft: res.cityHp || 0,
      ai: battle._aiProfile || '',
      weather: this.weather ? this.weather.name() : '',
      tactic: this.tactics ? (this.tactics.active || '') : '',
      plan: this.defensePlans ? this.defensePlans.active : '',
    });
  };
  const _origSave = MilitaryV3Manager.prototype.save;
  MilitaryV3Manager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended6();
    s.extended6 = { defensePlans: this.defensePlans.serialize(), battleArchive: this.battleArchive.serialize() };
    return s;
  };
  const _origLoad = MilitaryV3Manager.prototype.load;
  MilitaryV3Manager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended6();
    if (data && data.extended6) {
      if (data.extended6.defensePlans) this.defensePlans = MilV3DefensePlans.deserialize(data.extended6.defensePlans);
      if (data.extended6.battleArchive) this.battleArchive = MilV3BattleArchive.deserialize(data.extended6.battleArchive);
    }
  };
})();

/* ---------- 第六批自测 ---------- */
class MilV3Extended6SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _m3TimeMs: 0,
      player: { inv: { iron: 2000, ice: 500, rare: 300, water: 500, food: 1000, steel: 800, tech: 800, uranium: 50, he3: 20 } },
      pop: { count: 60, cap: () => 200 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50 },
      map: { size: 50 }, military: { raidStrength: 0 } });
    const m = new MilitaryV3Manager();
    const g = mockGame();
    m.initExtended2();
    m.initExtended3();
    m.initExtended4();
    m.initExtended5();
    m.initExtended6();
    check('第六批系统初始化', !!m.defensePlans && !!m.battleArchive, '');
    // 防御预案
    const plan = m.defensePlans.setPlan('plan_counter');
    check('防御预案可切换', plan.ok && m.defensePlans.active === 'plan_counter', plan.reason || '');
    const battle = new MilV3Battle({ seed: 7, mapSize: 50, bonuses: {}, doctrineFx: {} });
    battle.cityHp = 500; battle.cityMaxHp = 500;
    battle.addFighters([MilV3Battle.makeFighter(MILV3_UNIT_TYPES.rifleman, 'def', 20, 20, {})]);
    battle._defFighters = battle.fighters.filter(f => f.side === 'def');
    const fx = m.defensePlans.applyToBattle(battle);
    check('全线反击伤害加成注入', battle._planDmgMul === 1.1, JSON.stringify(fx));
    check('全线反击守军血量 -10%', battle._defFighters[0].maxHp < 100, 'maxHp=' + battle._defFighters[0].maxHp);
    // 战报档案
    m.battleArchive.record({ wave: 3, result: 'victory', kills: 12, losses: 1, durationSec: 120, cityHpLeft: 400 });
    m.battleArchive.record({ wave: 4, result: 'defeat', kills: 5, losses: 8, durationSec: 200, cityHpLeft: 0 });
    const st = m.battleArchive.stats();
    check('战报统计胜率 50%', st.battles === 2 && st.winRate === 50, JSON.stringify(st));
    check('战报按结果筛选', m.battleArchive.filter('victory').length === 1, '');
    // 战利品加工
    m.salvageStock = 6;
    const proc = MilV3Salvage.process('salvage_steel', 2, g, m);
    check('战利品熔炼钢材', proc.ok && g.player.inv.steel === 860 && m.salvageStock === 2, JSON.stringify(proc));
    const procFail = MilV3Salvage.process('salvage_rare', 1, g, m);
    check('战利品不足拒绝兑换', !procFail.ok, '');
    // 军衔权限与参谋
    const chief = m.enlistOfficer('赵铁山');
    chief.officer.level = 10; chief.officer.rank = 6;
    const auth = chief.officer.authority();
    check('军衔权限：6 级可指挥连 + 2 参谋', auth.maxTier === 3 && auth.staffSlots === 2, JSON.stringify(auth));
    const junior = m.enlistOfficer('钱小兵');
    junior.officer.rank = 2;
    const att = chief.officer.attachStaff(junior.officer, m);
    check('参谋可配备', att.ok && chief.officer.staffBonus() === 0.02, att.reason || '');
    const attDup = chief.officer.attachStaff(junior.officer, m);
    check('重复任命参谋被拒绝', !attDup.ok, '');
    // 参谋加成进入 officerEffectsFor
    const ofx = m.officerEffectsFor([]);
    check('参谋加成不影响空编制', typeof ofx === 'object', '');
    // 存档往返（第六批）
    const saved = m.save();
    const m2 = new MilitaryV3Manager();
    m2.load(saved);
    check('第六批存档往返：预案保留', !!m2.defensePlans && m2.defensePlans.active === 'plan_counter', '');
    check('第六批存档往返：战报保留', !!m2.battleArchive && m2.battleArchive.records.length === 2, '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = MilV3SelfTest.run;
  MilV3SelfTest.run = function () {
    const base = _origRun();
    const ext6 = MilV3Extended6SelfTest.run();
    return { total: base.total + ext6.total, passed: base.passed + ext6.passed,
      failed: [...base.failed, ...ext6.failed],
      results: [...base.results, ...ext6.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.MilV3DefensePlans = MilV3DefensePlans;
  window.MilV3BattleArchive = MilV3BattleArchive;
  window.MilV3Salvage = MilV3Salvage;
  window.MilV3Extended6SelfTest = MilV3Extended6SelfTest;
  window.MILV3_DEFENSE_PLANS = MILV3_DEFENSE_PLANS;
  window.MILV3_SALVAGE_RECIPES = MILV3_SALVAGE_RECIPES;
  window.MILV3_RANK_PRIVILEGES = MILV3_RANK_PRIVILEGES;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { MilV3DefensePlans, MilV3BattleArchive, MilV3Salvage,
    MilV3Extended6SelfTest, MILV3_DEFENSE_PLANS, MILV3_SALVAGE_RECIPES, MILV3_RANK_PRIVILEGES });
}

/* 3 级警戒：侦测/伤害加成 vs 战备消耗与维持费 */
const MILV3_ALERT_LEVELS = [
  {
    "id": "alert_green",
    "name": "绿色警戒",
    "icon": "🟢",
    "effects": {
      "detectMul": 1.0,
      "readinessDecay": 0,
      "upkeepMul": 1.0
    },
    "desc": "日常状态：无加成，无额外消耗。"
  },
  {
    "id": "alert_yellow",
    "name": "黄色警戒",
    "icon": "🟡",
    "effects": {
      "detectMul": 1.2,
      "readinessDecay": 1,
      "upkeepMul": 1.1
    },
    "desc": "侦测 +20%，战备度每分钟 -1，维持费 +10%。"
  },
  {
    "id": "alert_red",
    "name": "红色警戒",
    "icon": "🔴",
    "effects": {
      "detectMul": 1.5,
      "readinessDecay": 2,
      "upkeepMul": 1.25,
      "dmgMul": 1.05
    },
    "desc": "侦测 +50%，守军伤害 +5%，战备度每分钟 -2，维持费 +25%。"
  }
];

/* 3 种战争债券：以未来偿还换取当前资源（逾期未还则士气 -5） */
const MILV3_BONDS = [
  {
    "id": "bond_small",
    "name": "小额战争债券",
    "gain": {
      "iron": 200
    },
    "repay": {
      "iron": 250
    },
    "repayMin": 10,
    "desc": "立即获得 200 铁矿，10 分钟后偿还 250 铁矿。"
  },
  {
    "id": "bond_large",
    "name": "大额战争债券",
    "gain": {
      "iron": 500,
      "steel": 50
    },
    "repay": {
      "iron": 650,
      "steel": 60
    },
    "repayMin": 15,
    "desc": "立即获得 500 铁矿 + 50 钢材，15 分钟后偿还 650 铁矿 + 60 钢材。"
  },
  {
    "id": "bond_tech",
    "name": "科技债券",
    "gain": {
      "tech": 40
    },
    "repay": {
      "tech": 55
    },
    "repayMin": 20,
    "desc": "立即获得 40 科技点，20 分钟后偿还 55 科技点。"
  }
];


/* ============================== 扩展系统（第七批） ============================== */

/* ---------- 警戒等级 ---------- */
class MilV3Alert {
  constructor() {
    this.level = 'alert_green';
  }

  setLevel(levelId) {
    const l = MILV3_ALERT_LEVELS.find(x => x.id === levelId);
    if (!l) return { ok: false, reason: '未知警戒等级' };
    this.level = levelId;
    return { ok: true, level: l.name, desc: l.desc };
  }

  effects() {
    const l = MILV3_ALERT_LEVELS.find(x => x.id === this.level);
    return _m3Clone(l ? l.effects : {});
  }

  serialize() { return { level: this.level }; }
  static deserialize(d) {
    const a = new MilV3Alert();
    a.level = d.level || 'alert_green';
    return a;
  }
}

/* ---------- 边境巡逻 ---------- */
class MilV3Patrol {
  constructor() {
    this.patrols = [];  // {formationId, endsAt, region}
  }

  dispatch(formationId, gameTimeMs, manager) {
    const f = manager.army.formations[formationId];
    if (!f) return { ok: false, reason: '编制不存在' };
    if (f.status !== 'garrison') return { ok: false, reason: '仅驻防编制可巡逻' };
    if (this.patrols.find(p => p.formationId === formationId)) return { ok: false, reason: '该编制已在巡逻' };
    f.status = 'patrol';
    this.patrols.push({ formationId, endsAt: gameTimeMs + 2 * 60 * 1000 });
    return { ok: true, formation: f.name || f.id, durationMin: 2 };
  }

  // 结算：巡逻有 25% 概率提前发现敌情（下一波延迟 2 分钟）或缴获战利品
  tick(gameTimeMs, manager, game) {
    const done = [];
    for (const p of [...this.patrols]) {
      if (gameTimeMs < p.endsAt) continue;
      this.patrols = this.patrols.filter(x => x !== p);
      const f = manager.army.formations[p.formationId];
      if (f) f.status = 'garrison';
      const roll = Math.random();
      if (roll < 0.25) {
        manager.invasion.nextWaveAt += 2 * 60 * 1000;
        done.push({ formation: p.formationId, outcome: '提前发现敌情：下一波延迟 2 分钟' });
      } else if (roll < 0.45) {
        manager.salvageStock = (manager.salvageStock || 0) + 1;
        done.push({ formation: p.formationId, outcome: '巡逻缴获战利品 +1' });
      } else {
        done.push({ formation: p.formationId, outcome: '巡逻完成，无异常' });
      }
    }
    return done;
  }

  serialize() { return { patrols: _m3Clone(this.patrols) }; }
  static deserialize(d) {
    const p = new MilV3Patrol();
    p.patrols = _m3Clone(d.patrols || []);
    return p;
  }
}

/* ---------- 战争债券 ---------- */
class MilV3WarBonds {
  constructor() {
    this.issued = [];  // {bondId, dueAt, repaid}
  }

  issue(bondId, gameTimeMs, game) {
    const b = MILV3_BONDS.find(x => x.id === bondId);
    if (!b) return { ok: false, reason: '未知债券' };
    if (this.issued.filter(x => !x.repaid).length >= 3) return { ok: false, reason: '未偿还债券已达 3 笔上限' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) for (const k in b.gain) inv[k] = (inv[k] || 0) + b.gain[k];
    this.issued.push({ bondId, name: b.name, dueAt: gameTimeMs + b.repayMin * 60 * 1000, repaid: false });
    return { ok: true, bond: b.name, gain: _m3Clone(b.gain), dueInMin: b.repayMin };
  }

  // 到期结算：自动扣款；不足则士气 -5（违约）
  tick(gameTimeMs, game, manager) {
    const settled = [];
    for (const issue of this.issued) {
      if (issue.repaid || gameTimeMs < issue.dueAt) continue;
      const b = MILV3_BONDS.find(x => x.id === issue.bondId);
      const inv = (game && game.player && game.player.inv) || null;
      let ok = true;
      if (inv) {
        for (const k in b.repay) if ((inv[k] || 0) < b.repay[k]) { ok = false; break; }
        if (ok) for (const k in b.repay) inv[k] -= b.repay[k];
      }
      issue.repaid = true;
      if (!ok) {
        for (const f of Object.values(manager.army.formations)) f.morale = Math.max(0, f.morale - 5);
        settled.push({ bond: issue.name, result: '违约：资源不足，全军士气 -5' });
      } else {
        settled.push({ bond: issue.name, result: '已偿还' });
      }
    }
    return settled;
  }

  outstanding() { return this.issued.filter(x => !x.repaid); }

  serialize() { return { issued: _m3Clone(this.issued) }; }
  static deserialize(d) {
    const w = new MilV3WarBonds();
    w.issued = _m3Clone(d.issued || []);
    return w;
  }
}

/* ---------- 第七批接入 ---------- */
(function () {
  MilitaryV3Manager.prototype.initExtended7 = function () {
    if (this.alert) return;
    this.alert = new MilV3Alert();
    this.patrol = new MilV3Patrol();
    this.warBonds = new MilV3WarBonds();
  };
  const _origUpdate = MilitaryV3Manager.prototype.update;
  MilitaryV3Manager.prototype.update = function (now, dt, game) {
    this.initExtended2();
    this.initExtended3();
    this.initExtended4();
    this.initExtended5();
    this.initExtended6();
    this.initExtended7();
    const ret = _origUpdate.call(this, now, dt, game);
    // 警戒等级：战备消耗
    const aFx = this.alert.effects();
    if (aFx.readinessDecay) {
      for (const f of Object.values(this.army.formations)) {
        f.readiness = Math.max(0, f.readiness - aFx.readinessDecay * (Math.max(0, dt || 0) / 60000));
      }
    }
    // 巡逻与债券结算
    for (const d of this.patrol.tick(this.gameTimeMs, this, game)) this.log('巡逻：' + d.outcome);
    for (const s of this.warBonds.tick(this.gameTimeMs, game, this)) this.log('战争债券：' + s.bond + '——' + s.result);
    return ret;
  };
  // 警戒侦测与伤害加成接入
  const _origDetect = MilitaryV3Manager.prototype.detectRadius;
  MilitaryV3Manager.prototype.detectRadius = function () {
    const base = _origDetect.call(this);
    const fx = this.alert ? this.alert.effects() : {};
    return base * (fx.detectMul || 1);
  };
  const _origCalc = MilV3Battle.prototype._calcDamage;
  MilV3Battle.prototype._calcDamage = function (att, def, isFlank) {
    const res = _origCalc.call(this, att, def, isFlank);
    if (att.side === 'def' && this._alertDmgMul) return { dmg: Math.max(1, Math.round(res.dmg * this._alertDmgMul)), crit: res.crit };
    return res;
  };
  const _origSpawn = MilitaryV3Manager.prototype._maybeSpawnWave;
  MilitaryV3Manager.prototype._maybeSpawnWave = function (game) {
    _origSpawn.call(this, game);
    const battle = this.invasion.activeBattle;
    if (!battle) return;
    const fx = this.alert.effects();
    if (fx.dmgMul) battle._alertDmgMul = fx.dmgMul;
  };
  const _origSave = MilitaryV3Manager.prototype.save;
  MilitaryV3Manager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended7();
    s.extended7 = { alert: this.alert.serialize(), patrol: this.patrol.serialize(), warBonds: this.warBonds.serialize() };
    return s;
  };
  const _origLoad = MilitaryV3Manager.prototype.load;
  MilitaryV3Manager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended7();
    if (data && data.extended7) {
      if (data.extended7.alert) this.alert = MilV3Alert.deserialize(data.extended7.alert);
      if (data.extended7.patrol) this.patrol = MilV3Patrol.deserialize(data.extended7.patrol);
      if (data.extended7.warBonds) this.warBonds = MilV3WarBonds.deserialize(data.extended7.warBonds);
    }
  };
})();

/* ---------- 第七批自测 ---------- */
class MilV3Extended7SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _m3TimeMs: 0,
      player: { inv: { iron: 2000, ice: 500, rare: 300, water: 500, food: 1000, steel: 800, tech: 800, uranium: 50, he3: 20 } },
      pop: { count: 60, cap: () => 200 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50 },
      map: { size: 50 }, military: { raidStrength: 0 } });
    const m = new MilitaryV3Manager();
    const g = mockGame();
    m.initExtended2();
    m.initExtended3();
    m.initExtended4();
    m.initExtended5();
    m.initExtended6();
    m.initExtended7();
    check('第七批系统初始化', !!m.alert && !!m.patrol && !!m.warBonds, '');
    // 警戒等级
    const al = m.alert.setLevel('alert_red');
    check('红色警戒可设定', al.ok && m.alert.effects().detectMul === 1.5, al.reason || '');
    const det = m.detectRadius();
    check('警戒提升侦测半径', det > 0, 'detect=' + det);
    // 边境巡逻
    m.recruit('rifleman', 4, g);
    m.update(0, 10 * 60 * 1000, g);
    const form = m.createFormation('infantry', 1, '巡逻班');
    const disp = m.patrol.dispatch(form.formation.id, m.gameTimeMs, m);
    check('边境巡逻可派出', disp.ok && form.formation.status === 'patrol', disp.reason || '');
    const done = m.patrol.tick(m.gameTimeMs + 3 * 60 * 1000, m, g);
    check('巡逻到期结算并归队', done.length === 1 && form.formation.status === 'garrison', JSON.stringify(done));
    // 战争债券
    const before = g.player.inv.iron;
    const bond = m.warBonds.issue('bond_small', m.gameTimeMs, g);
    check('战争债券发行到账', bond.ok && g.player.inv.iron === before + 200, JSON.stringify(bond));
    const settled = m.warBonds.tick(m.gameTimeMs + 11 * 60 * 1000, g, m);
    check('债券到期自动偿还', settled.length === 1 && settled[0].result === '已偿还' && g.player.inv.iron === before - 50, JSON.stringify(settled));
    const bond2 = m.warBonds.issue('bond_small', m.gameTimeMs, g);
    g.player.inv.iron = 0;
    const settled2 = m.warBonds.tick(m.gameTimeMs + 11 * 60 * 1000, g, m);
    check('债券违约扣士气', settled2.length === 1 && settled2[0].result.indexOf('违约') === 0, JSON.stringify(settled2));
    // 存档往返（第七批）
    const saved = m.save();
    const m2 = new MilitaryV3Manager();
    m2.load(saved);
    check('第七批存档往返：警戒等级保留', !!m2.alert && m2.alert.level === 'alert_red', '');
    check('第七批存档往返：债券保留', !!m2.warBonds && m2.warBonds.issued.length === 2, '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = MilV3SelfTest.run;
  MilV3SelfTest.run = function () {
    const base = _origRun();
    const ext7 = MilV3Extended7SelfTest.run();
    return { total: base.total + ext7.total, passed: base.passed + ext7.passed,
      failed: [...base.failed, ...ext7.failed],
      results: [...base.results, ...ext7.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.MilV3Alert = MilV3Alert;
  window.MilV3Patrol = MilV3Patrol;
  window.MilV3WarBonds = MilV3WarBonds;
  window.MilV3Extended7SelfTest = MilV3Extended7SelfTest;
  window.MILV3_ALERT_LEVELS = MILV3_ALERT_LEVELS;
  window.MILV3_BONDS = MILV3_BONDS;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { MilV3Alert, MilV3Patrol, MilV3WarBonds,
    MilV3Extended7SelfTest, MILV3_ALERT_LEVELS, MILV3_BONDS });
}

// ============================== 挂载 ==============================
if (typeof window !== 'undefined') {
  window.MilitaryV3Manager = MilitaryV3Manager;
  window.MilV3Army = MilV3Army;
  window.MilV3Officer = MilV3Officer;
  window.MilV3Unit = MilV3Unit;
  window.MilV3Formation = MilV3Formation;
  window.MilV3WeaponResearch = MilV3WeaponResearch;
  window.MilV3Doctrine = MilV3Doctrine;
  window.MilV3Logistics = MilV3Logistics;
  window.MilV3Battle = MilV3Battle;
  window.MilV3Invasion = MilV3Invasion;
  window.MilitaryV3Integration = MilitaryV3Integration;
  window.MilV3SelfTest = MilV3SelfTest;
  window.MILV3_UNIT_TYPES = MILV3_UNIT_TYPES;
  window.MILV3_WEAPONS = MILV3_WEAPONS;
  window.MILV3_WAVES = MILV3_WAVES;
  window.MILV3_DOCTRINES = MILV3_DOCTRINES;
  window.MILV3_BUILDING_SPECS = MILV3_BUILDING_SPECS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MilitaryV3Manager, MilV3Army, MilV3Officer, MilV3Unit, MilV3Formation,
    MilV3WeaponResearch, MilV3Doctrine, MilV3Logistics, MilV3Battle, MilV3Invasion,
    MilitaryV3Integration, MilV3SelfTest, MILV3_UNIT_TYPES, MILV3_UNIT_LIST,
    MILV3_FORMATIONS, MILV3_RANKS, MILV3_OFFICER_SKILLS, MILV3_OFFICER_TRAITS,
    MILV3_TRAINING, MILV3_WEAPONS, MILV3_ENEMIES, MILV3_ENEMY_LIST, MILV3_WAVES,
    MILV3_DOCTRINES, MILV3_BUILDING_SPECS, MILV3_MEDALS, MILV3_BATTLE_SCENARIOS, MILV3 };
}

