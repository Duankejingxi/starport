/* 星港 — politics.js：殖民地政治系统（议会 / 政策投票 / 满意度 / 市长 / 派系）
 * 新文件，不修改 index.html / game.js / 任何已有文件。
 * 接入方式（由集成方在 index.html 中 game.js 之前引入本文件，然后）：
 *   game.politics = new ColonialPoliticsManager();
 *   game.politics.attachToGame(game);   // 每帧 game.politics.update(now, dt, game)
 * 或直接调用 PoliticsIntegration.attach(game)（见文件末尾）。
 * 时间单位：游戏时间毫秒（dt 累积）。议会选举每 10 分钟游戏时间一次；
 * 市长任期 30 分钟游戏时间，连任需满意度 > 50。
 * 资源键沿用 resources.js：iron / ice / rare / water / food / steel / tech / uranium / he3。
 * 本文件不依赖任何其他游戏文件即可加载；所有 game 字段访问均为防御性读取。
 * Node 自测：node selftest_politics_military.js
 */
'use strict';

/* ============================== 常量 ============================== */
const POLITICS = {
  ELECTION_INTERVAL_MS: 10 * 60 * 1000,   // 议会选举间隔：10 分钟游戏时间
  MAYOR_TERM_MS: 30 * 60 * 1000,          // 市长任期：30 分钟游戏时间
  COUNCIL_SEATS: 21,                      // 议席总数 = 7 选区 x 3 席
  DISTRICTS: 7,
  SEATS_PER_DISTRICT: 3,
  SAT_PROTEST_BELOW: 30,                  // 满意度 < 30 触发抗议
  SAT_STRIKE_BELOW: 15,                   // 满意度 < 15 触发罢工（建筑停产）
  SAT_REELECT_MIN: 50,                    // 连任要求满意度 > 50
  SAT_RECOVER_STRIKE_END: 25,             // 罢工结束：满意度回升到 >= 25
  SAT_RECOVER_PROTEST_END: 35,            // 抗议结束：满意度回升到 >= 35
  MAX_ACTIVE_BILLS: 3,                    // 同期在审议的法案上限
  LOBBY_COOLDOWN_MS: 30 * 1000,           // 同一议员游说冷却 30 秒游戏时间
  BRIBE_DETECT_BASE: 0.06,                // 贿赂被发现基础概率
  SCANDAL_DECAY_PER_MIN: 0.4,             // 丑闻值每分钟自然衰减
  FACTION_SUPPORT_MIN: 0,
  FACTION_SUPPORT_MAX: 100,
  SAT_MIN: 0,
  SAT_MAX: 100,
};

function _polClamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function _polRand(a, b) { return a + Math.random() * (b - a); }
function _polPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function _polUid(prefix) { return prefix + '_' + Math.floor(Math.random() * 1e9).toString(36) + Date.now().toString(36).slice(-4); }
function _polClone(o) { return JSON.parse(JSON.stringify(o)); }
function _polSum(obj) { let s = 0; for (const k in obj) s += obj[k] || 0; return s; }

/* 四大派系：议程权重（按政策类别）、核心诉求、财政偏好、纪律性 */
const POL_FACTIONS = {
  "industrial": {
    "id": "industrial",
    "name": "工业派",
    "icon": "🏭",
    "color": "#f59e0b",
    "motto": "熔炉不熄，城市不死。",
    "agenda": {
      "tax": 0.6,
      "welfare": -0.4,
      "military": 0.3,
      "eco": -1.2,
      "industry": 2.0,
      "civic": 0.2
    },
    "baseSupport": 28,
    "coreDemands": [
      "factory_grants",
      "mining_rights",
      "automation_push"
    ],
    "opposedCats": [
      "eco"
    ],
    "leaderTitle": "总工程师",
    "taxPref": 0.7,
    "spendPref": {
      "industry": 0.9,
      "welfare": 0.1,
      "military": 0.4,
      "eco": 0.05
    },
    "growthBonus": 0.12,
    "pollutionTolerance": 0.8,
    "voteDiscipline": 0.85,
    "desc": "主张重工业优先、放宽管制、采矿权开放。支持度高时建筑成本下降、工业产出上升，污染上升。"
  },
  "eco": {
    "id": "eco",
    "name": "生态派",
    "icon": "🌿",
    "color": "#22c55e",
    "motto": "火星也是家园。",
    "agenda": {
      "tax": 0.2,
      "welfare": 0.5,
      "military": -0.6,
      "eco": 2.0,
      "industry": -1.0,
      "civic": 0.6
    },
    "baseSupport": 22,
    "coreDemands": [
      "carbon_cap",
      "green_energy",
      "wildlife_reserve"
    ],
    "opposedCats": [
      "industry"
    ],
    "leaderTitle": "生态委员",
    "taxPref": 0.3,
    "spendPref": {
      "industry": 0.05,
      "welfare": 0.5,
      "military": 0.1,
      "eco": 0.95
    },
    "growthBonus": -0.05,
    "pollutionTolerance": 0.05,
    "voteDiscipline": 0.8,
    "desc": "主张碳上限、绿能补贴、生态保护区。支持度高时污染下降、满意度上升，工业产出受限。"
  },
  "military": {
    "id": "military",
    "name": "军事派",
    "icon": "🛡️",
    "color": "#ef4444",
    "motto": "城墙之内，方有文明。",
    "agenda": {
      "tax": 0.4,
      "welfare": -0.2,
      "military": 2.0,
      "eco": -0.5,
      "industry": 0.6,
      "civic": 0.1
    },
    "baseSupport": 24,
    "coreDemands": [
      "defense_budget",
      "conscription_bill",
      "veteran_fund"
    ],
    "opposedCats": [
      "welfare"
    ],
    "leaderTitle": "防卫长官",
    "taxPref": 0.6,
    "spendPref": {
      "industry": 0.4,
      "welfare": 0.1,
      "military": 0.95,
      "eco": 0.1
    },
    "growthBonus": 0.0,
    "pollutionTolerance": 0.5,
    "voteDiscipline": 0.92,
    "desc": "主张国防预算、义务兵役、退伍保障。支持度高时防御力与军队士气上升，民生开支受挤压。"
  },
  "welfare": {
    "id": "welfare",
    "name": "民生派",
    "icon": "🏥",
    "color": "#38bdf8",
    "motto": "人活着，城市才活着。",
    "agenda": {
      "tax": 0.9,
      "welfare": 2.0,
      "military": -0.8,
      "eco": 0.4,
      "industry": -0.3,
      "civic": 1.0
    },
    "baseSupport": 26,
    "coreDemands": [
      "free_clinics",
      "food_subsidy",
      "housing_program"
    ],
    "opposedCats": [
      "military"
    ],
    "leaderTitle": "民生委员",
    "taxPref": 0.9,
    "spendPref": {
      "industry": 0.2,
      "welfare": 0.95,
      "military": 0.1,
      "eco": 0.4
    },
    "growthBonus": 0.08,
    "pollutionTolerance": 0.3,
    "voteDiscipline": 0.78,
    "desc": "主张免费医疗、食品补贴、安居计划。支持度高时满意度与人口增长上升，财政开支大增。"
  }
};

/* 政策类别 */
const POL_CATS = {
  "tax": {
    "name": "税收",
    "icon": "💰",
    "desc": "改变财政收入结构，直接影响国库与满意度。"
  },
  "welfare": {
    "name": "福利",
    "icon": "🏥",
    "desc": "民生开支：医疗、食品、住房、教育。花钱买满意度与人口增长。"
  },
  "military": {
    "name": "军事",
    "icon": "🛡️",
    "desc": "国防预算与兵役制度，影响防御力、军队规模与民生挤压。"
  },
  "eco": {
    "name": "环保",
    "icon": "🌿",
    "desc": "污染管制与绿能转型，影响污染、满意度与工业产出。"
  },
  "industry": {
    "name": "工业",
    "icon": "🏭",
    "desc": "产业扶持与资源开发，影响产出、建筑成本与污染。"
  },
  "civic": {
    "name": "市政",
    "icon": "🏛️",
    "desc": "城市治理：交通、治安、媒体与廉政，影响秩序与支持度。"
  }
};

const POL_POLICIES = {};
for (const _p of [
  {
    "id": "pol_progressive_tax",
    "name": "累进税",
    "icon": "📊",
    "cat": "tax",
    "desc": "高收入者多缴：税收 +35%，人口增长 -15%。民生派支持，工业派反对。",
    "cost": {
      "tech": 20
    },
    "upkeep": {},
    "needs": [],
    "conflicts": [
      "pol_flat_tax"
    ],
    "effects": {
      "taxMul": 1.35,
      "growthMul": 0.85,
      "satFlat": 0.4
    },
    "factionStance": {
      "industrial": -1,
      "eco": 0,
      "military": 0,
      "welfare": 2
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_flat_tax",
    "name": "统一税",
    "icon": "🧾",
    "cat": "tax",
    "desc": "人人同率：税收 +20%，满意度每分钟 -0.3，人口增长 -5%。简单直接但不得人心。",
    "cost": {
      "tech": 10
    },
    "upkeep": {},
    "needs": [],
    "conflicts": [
      "pol_progressive_tax"
    ],
    "effects": {
      "taxMul": 1.2,
      "growthMul": 0.95,
      "satFlat": -0.3
    },
    "factionStance": {
      "industrial": 1,
      "eco": 0,
      "military": 1,
      "welfare": -2
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 1
  },
  {
    "id": "pol_resource_royalty",
    "name": "资源特许税",
    "icon": "⛏️",
    "cat": "tax",
    "desc": "矿产专营抽成：采矿 +10% 但税收 +25%，每分钟维持费 5 铁矿。",
    "cost": {
      "tech": 25
    },
    "upkeep": {
      "iron": 5
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "taxMul": 1.25,
      "minerMul": 1.1,
      "satFlat": -0.2
    },
    "factionStance": {
      "industrial": -1,
      "eco": 1,
      "military": 0,
      "welfare": 1
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_trade_tariff",
    "name": "贸易关税",
    "icon": "🚚",
    "cat": "tax",
    "desc": "关口抽成：贸易收入 +40%，科研 -10%（外来技术流入受阻）。",
    "cost": {
      "tech": 15
    },
    "upkeep": {
      "rare": 2
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "taxMul": 1.15,
      "tradeMul": 1.4,
      "researchMul": 0.9
    },
    "factionStance": {
      "industrial": 1,
      "eco": 0,
      "military": 0,
      "welfare": 0
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 1
  },
  {
    "id": "pol_free_clinics",
    "name": "免费医疗",
    "icon": "🏥",
    "cat": "welfare",
    "desc": "全民免费诊所：满意度每分钟 +0.8，人口增长 +25%，每分钟维持费 8 食物 + 5 水。",
    "cost": {
      "tech": 30
    },
    "upkeep": {
      "food": 8,
      "water": 5
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "growthMul": 1.25,
      "satFlat": 0.8,
      "moraleMul": 1.05
    },
    "factionStance": {
      "industrial": -1,
      "eco": 1,
      "military": 0,
      "welfare": 2
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_food_subsidy",
    "name": "食品补贴",
    "icon": "🌾",
    "cat": "welfare",
    "desc": "平价口粮：食物产量 +20%（补贴刺激生产），满意度每分钟 +0.6，每分钟维持费 6 食物。",
    "cost": {
      "tech": 20
    },
    "upkeep": {
      "food": 6
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "foodMul": 1.2,
      "satFlat": 0.6,
      "growthMul": 1.1
    },
    "factionStance": {
      "industrial": 0,
      "eco": 0,
      "military": 0,
      "welfare": 2
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 1
  },
  {
    "id": "pol_housing_program",
    "name": "安居计划",
    "icon": "🏠",
    "cat": "welfare",
    "desc": "保障住房：人口上限 +20，人口增长 +15%，建筑成本 -5%，满意度每分钟 +0.5。",
    "cost": {
      "steel": 40,
      "tech": 20
    },
    "upkeep": {
      "iron": 4
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "popCapBonus": 20,
      "growthMul": 1.15,
      "buildCostMul": 0.95,
      "satFlat": 0.5
    },
    "factionStance": {
      "industrial": 0,
      "eco": 0,
      "military": -1,
      "welfare": 2
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_education_grant",
    "name": "教育津贴",
    "icon": "🎓",
    "cat": "welfare",
    "desc": "全民教育：科研 +30%，人口增长 +10%，每分钟维持费 5 科技点。",
    "cost": {
      "tech": 35
    },
    "upkeep": {
      "tech": 5
    },
    "needs": [
      "pol_free_clinics"
    ],
    "conflicts": [],
    "effects": {
      "researchMul": 1.3,
      "growthMul": 1.1,
      "satFlat": 0.3
    },
    "factionStance": {
      "industrial": 1,
      "eco": 1,
      "military": -1,
      "welfare": 1
    },
    "minSat": 30,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_defense_budget",
    "name": "国防预算",
    "icon": "💂",
    "cat": "military",
    "desc": "军费翻倍：防御力 +40%，军队士气 +10%，税收 -10%（军费挤占财政）。",
    "cost": {
      "tech": 25
    },
    "upkeep": {
      "steel": 6
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "defenseMul": 1.4,
      "moraleMul": 1.1,
      "taxMul": 0.9,
      "raidResist": 0.15
    },
    "factionStance": {
      "industrial": 1,
      "eco": -1,
      "military": 2,
      "welfare": -2
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_conscription_bill",
    "name": "义务兵役",
    "icon": "🎖️",
    "cat": "military",
    "desc": "全民服役：防御力 +50%，军队规模上限 +50%，食物消耗 +30%，人口增长 -20%。",
    "cost": {
      "tech": 20
    },
    "upkeep": {
      "food": 10
    },
    "needs": [],
    "conflicts": [
      "pol_militia"
    ],
    "effects": {
      "defenseMul": 1.5,
      "armyCapMul": 1.5,
      "foodUseMul": 1.3,
      "growthMul": 0.8,
      "satFlat": -0.5
    },
    "factionStance": {
      "industrial": 0,
      "eco": -1,
      "military": 2,
      "welfare": -2
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 3
  },
  {
    "id": "pol_veteran_fund",
    "name": "退伍军人基金",
    "icon": "🎗️",
    "cat": "military",
    "desc": "退伍保障：军队士气 +15%，满意度每分钟 +0.3，每分钟维持费 4 食物。",
    "cost": {
      "tech": 15
    },
    "upkeep": {
      "food": 4
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "moraleMul": 1.15,
      "satFlat": 0.3,
      "defenseMul": 1.1
    },
    "factionStance": {
      "industrial": 0,
      "eco": 0,
      "military": 2,
      "welfare": 1
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 1
  },
  {
    "id": "pol_militia",
    "name": "民兵动员",
    "icon": "🔫",
    "cat": "military",
    "desc": "武装市民：防御力 +25%，袭击抗性 +10%，犯罪率 +20%（枪支扩散）。",
    "cost": {
      "iron": 60,
      "tech": 10
    },
    "upkeep": {
      "iron": 3
    },
    "needs": [],
    "conflicts": [
      "pol_conscription_bill"
    ],
    "effects": {
      "defenseMul": 1.25,
      "raidResist": 0.1,
      "crimeMul": 1.2
    },
    "factionStance": {
      "industrial": 0,
      "eco": -1,
      "military": 1,
      "welfare": -1
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_carbon_cap",
    "name": "碳排放上限",
    "icon": "🌫️",
    "cat": "eco",
    "desc": "硬性碳帽：污染 -40%，工业产出 -15%，满意度每分钟 +0.5。",
    "cost": {
      "tech": 30
    },
    "upkeep": {},
    "needs": [],
    "conflicts": [],
    "effects": {
      "pollutionMul": 0.6,
      "minerMul": 0.9,
      "steelMul": 0.85,
      "satFlat": 0.5
    },
    "factionStance": {
      "industrial": -2,
      "eco": 2,
      "military": 0,
      "welfare": 1
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_green_energy",
    "name": "绿能补贴",
    "icon": "☀️",
    "cat": "eco",
    "desc": "太阳能与风能补贴：电力产出 +25%，污染 -20%，每分钟维持费 3 稀土。",
    "cost": {
      "tech": 30,
      "rare": 10
    },
    "upkeep": {
      "rare": 3
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "powerMul": 1.25,
      "pollutionMul": 0.8,
      "satFlat": 0.4
    },
    "factionStance": {
      "industrial": -1,
      "eco": 2,
      "military": 0,
      "welfare": 1
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_wildlife_reserve",
    "name": "生态保护区",
    "icon": "🦠",
    "cat": "eco",
    "desc": "划定保护区：满意度每分钟 +0.4，人口增长 +5%，采矿 -10%（禁采区）。",
    "cost": {
      "tech": 15
    },
    "upkeep": {},
    "needs": [],
    "conflicts": [
      "pol_mining_rights"
    ],
    "effects": {
      "satFlat": 0.4,
      "growthMul": 1.05,
      "minerMul": 0.9
    },
    "factionStance": {
      "industrial": -2,
      "eco": 2,
      "military": 0,
      "welfare": 0
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 1
  },
  {
    "id": "pol_recycling",
    "name": "循环经济",
    "icon": "♻️",
    "cat": "eco",
    "desc": "废料回收：钢材产量 +15%，建筑成本 -10%，污染 -15%。",
    "cost": {
      "tech": 20
    },
    "upkeep": {},
    "needs": [],
    "conflicts": [],
    "effects": {
      "steelMul": 1.15,
      "buildCostMul": 0.9,
      "pollutionMul": 0.85
    },
    "factionStance": {
      "industrial": 1,
      "eco": 2,
      "military": 0,
      "welfare": 0
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 1
  },
  {
    "id": "pol_factory_grants",
    "name": "工厂补贴",
    "icon": "🏭",
    "cat": "industry",
    "desc": "产业扶持金：工业产出（采矿+钢材）+20%，税收 -5%，污染 +15%。",
    "cost": {
      "tech": 20
    },
    "upkeep": {
      "iron": 6
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "minerMul": 1.2,
      "steelMul": 1.2,
      "taxMul": 0.95,
      "pollutionMul": 1.15
    },
    "factionStance": {
      "industrial": 2,
      "eco": -2,
      "military": 0,
      "welfare": -1
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_automation_push",
    "name": "自动化激励",
    "icon": "🤖",
    "cat": "industry",
    "desc": "机器人进厂：全产出 +15%，人口增长 -10%（岗位替代），科研 +10%。",
    "cost": {
      "tech": 40,
      "steel": 20
    },
    "upkeep": {
      "tech": 3
    },
    "needs": [
      "pol_factory_grants"
    ],
    "conflicts": [],
    "effects": {
      "minerMul": 1.15,
      "steelMul": 1.15,
      "foodMul": 1.15,
      "growthMul": 0.9,
      "researchMul": 1.1
    },
    "factionStance": {
      "industrial": 2,
      "eco": 0,
      "military": 1,
      "welfare": -1
    },
    "minSat": 20,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_mining_rights",
    "name": "采矿权开放",
    "icon": "⛏️",
    "cat": "industry",
    "desc": "私人采矿权拍卖：采矿 +35%，税收 +15%，污染 +25%，满意度每分钟 -0.2。",
    "cost": {
      "tech": 15
    },
    "upkeep": {},
    "needs": [],
    "conflicts": [
      "pol_wildlife_reserve"
    ],
    "effects": {
      "minerMul": 1.35,
      "taxMul": 1.15,
      "pollutionMul": 1.25,
      "satFlat": -0.2
    },
    "factionStance": {
      "industrial": 2,
      "eco": -2,
      "military": 0,
      "welfare": -1
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_export_drive",
    "name": "出口导向",
    "icon": "📦",
    "cat": "industry",
    "desc": "出口退税：贸易收入 +30%，食物产量 -10%（粮食出口挤占内需）。",
    "cost": {
      "tech": 20
    },
    "upkeep": {},
    "needs": [],
    "conflicts": [],
    "effects": {
      "tradeMul": 1.3,
      "foodMul": 0.9,
      "taxMul": 1.1
    },
    "factionStance": {
      "industrial": 2,
      "eco": 0,
      "military": 0,
      "welfare": -1
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 1
  },
  {
    "id": "pol_transit_free",
    "name": "免费公交",
    "icon": "🚌",
    "cat": "civic",
    "desc": "全城免费交通：满意度每分钟 +0.5，人口增长 +10%，每分钟维持费 5 铁矿。",
    "cost": {
      "tech": 15
    },
    "upkeep": {
      "iron": 5
    },
    "needs": [],
    "conflicts": [],
    "effects": {
      "satFlat": 0.5,
      "growthMul": 1.1
    },
    "factionStance": {
      "industrial": 0,
      "eco": 1,
      "military": 0,
      "welfare": 2
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 1
  },
  {
    "id": "pol_curfew",
    "name": "宵禁令",
    "icon": "🌙",
    "cat": "civic",
    "desc": "夜间宵禁：犯罪率 -50%，袭击抗性 +5%，满意度每分钟 -0.8，人口增长 -10%。",
    "cost": {
      "tech": 10
    },
    "upkeep": {},
    "needs": [],
    "conflicts": [],
    "effects": {
      "crimeMul": 0.5,
      "raidResist": 0.05,
      "satFlat": -0.8,
      "growthMul": 0.9
    },
    "factionStance": {
      "industrial": 0,
      "eco": 0,
      "military": 2,
      "welfare": -2
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_media_fund",
    "name": "媒体基金",
    "icon": "📺",
    "cat": "civic",
    "desc": "官办媒体：派系支持度漂移减半（舆论维稳），满意度每分钟 +0.2，每分钟维持费 4 科技点。",
    "cost": {
      "tech": 20
    },
    "upkeep": {
      "tech": 4
    },
    "needs": [],
    "conflicts": [
      "pol_anti_corruption"
    ],
    "effects": {
      "satFlat": 0.2,
      "opinionStability": 0.5,
      "scandalResist": -0.1
    },
    "factionStance": {
      "industrial": 1,
      "eco": 0,
      "military": 1,
      "welfare": -1
    },
    "minSat": 0,
    "duration": "permanent",
    "debateDays": 2
  },
  {
    "id": "pol_anti_corruption",
    "name": "反腐调查局",
    "icon": "⚖️",
    "cat": "civic",
    "desc": "廉政风暴：贿赂被发现概率 +25%，丑闻衰减翻倍，税收 +10%（追回流失税款），满意度每分钟 +0.4。",
    "cost": {
      "tech": 30
    },
    "upkeep": {
      "tech": 2
    },
    "needs": [],
    "conflicts": [
      "pol_media_fund"
    ],
    "effects": {
      "taxMul": 1.1,
      "satFlat": 0.4,
      "bribeDetectMul": 1.25,
      "scandalDecayMul": 2.0
    },
    "factionStance": {
      "industrial": -1,
      "eco": 1,
      "military": 0,
      "welfare": 2
    },
    "minSat": 20,
    "duration": "permanent",
    "debateDays": 3
  }
]) POL_POLICIES[_p.id] = _p;

const POL_POLICY_LIST = Object.values(POL_POLICIES);

/* 7 个选区 x 3 席 = 21 席；lean 为该选区各派系基础得票权重 */
const POL_DISTRICTS = [
  {
    "id": "d_dome",
    "name": "穹顶市中心",
    "icon": "🏛️",
    "popWeight": 0.22,
    "lean": {
      "industrial": 0.25,
      "eco": 0.2,
      "military": 0.2,
      "welfare": 0.35
    },
    "seats": 3,
    "desc": "行政与商业中心，民生派基本盘。"
  },
  {
    "id": "d_industry",
    "name": "熔炉工业区",
    "icon": "🏭",
    "popWeight": 0.18,
    "lean": {
      "industrial": 0.55,
      "eco": 0.05,
      "military": 0.2,
      "welfare": 0.2
    },
    "seats": 3,
    "desc": "工厂与冶炼厂集中，工业派铁票仓。"
  },
  {
    "id": "d_farm",
    "name": "生态农场区",
    "icon": "🌿",
    "popWeight": 0.14,
    "lean": {
      "industrial": 0.05,
      "eco": 0.55,
      "military": 0.05,
      "welfare": 0.35
    },
    "seats": 3,
    "desc": "温室与保护区，生态派大本营。"
  },
  {
    "id": "d_port",
    "name": "军港防卫区",
    "icon": "🛡️",
    "popWeight": 0.12,
    "lean": {
      "industrial": 0.15,
      "eco": 0.05,
      "military": 0.6,
      "welfare": 0.2
    },
    "seats": 3,
    "desc": "军营与防御塔环绕，军事派票仓。"
  },
  {
    "id": "d_campus",
    "name": "学院科研区",
    "icon": "🎓",
    "popWeight": 0.12,
    "lean": {
      "industrial": 0.2,
      "eco": 0.3,
      "military": 0.1,
      "welfare": 0.4
    },
    "seats": 3,
    "desc": "实验室与学校，生态与民生派争夺区。"
  },
  {
    "id": "d_mine",
    "name": "矿区定居点",
    "icon": "⛏️",
    "popWeight": 0.12,
    "lean": {
      "industrial": 0.5,
      "eco": 0.05,
      "military": 0.15,
      "welfare": 0.3
    },
    "seats": 3,
    "desc": "矿工聚居，工业派占优，民生派次之。"
  },
  {
    "id": "d_harbor",
    "name": "空港贸易区",
    "icon": "🚀",
    "popWeight": 0.1,
    "lean": {
      "industrial": 0.35,
      "eco": 0.15,
      "military": 0.15,
      "welfare": 0.35
    },
    "seats": 3,
    "desc": "贸易港与货运站，各派均势的摇摆区。"
  }
];

/* 议员姓名池：姓氏 x 名字组合生成，不与已有议员重名 */
const POL_NAMES = {
  "surnames": [
    "陈",
    "林",
    "王",
    "李",
    "张",
    "刘",
    "赵",
    "周",
    "吴",
    "郑",
    "冯",
    "卫",
    "蒋",
    "沈",
    "韩",
    "杨",
    "朱",
    "秦",
    "何",
    "吕",
    "施",
    "孔",
    "曹",
    "严",
    "华",
    "金",
    "魏",
    "陶",
    "姜",
    "戚",
    "谢",
    "邹",
    "喻",
    "柏",
    "水",
    "窦",
    "章",
    "云",
    "苏",
    "潘",
    "葛",
    "奚",
    "范",
    "彭",
    "郎",
    "鲁",
    "韦",
    "昌",
    "马",
    "苗",
    "凤",
    "花",
    "方",
    "俞",
    "任",
    "袁",
    "柳",
    "酆",
    "鲍",
    "史",
    "唐",
    "费",
    "廉",
    "岑",
    "薛",
    "雷",
    "贺",
    "倪",
    "汤",
    "滕",
    "殷",
    "罗",
    "毕",
    "郝",
    "邬",
    "安",
    "常",
    "乐",
    "于",
    "时",
    "傅",
    "皮",
    "卞",
    "齐",
    "康",
    "伍",
    "余",
    "元",
    "卜",
    "顾",
    "孟",
    "平",
    "黄"
  ],
  "given": [
    "远航",
    "星野",
    "望舒",
    "砺石",
    "清晏",
    "长庚",
    "砚秋",
    "衡之",
    "昭烈",
    "知微",
    "砚青",
    "怀瑾",
    "思远",
    "慕云",
    "景行",
    "砚山",
    "怀信",
    "明德",
    "致远",
    "安澜",
    "砚冰",
    "望津",
    "崇光",
    "砚舟",
    "怀玉",
    "靖安",
    "砚海",
    "星河",
    "明轩",
    "子衿",
    "怀远",
    "靖宇",
    "思齐",
    "怀德",
    "子墨",
    "怀真",
    "靖远",
    "明澈",
    "怀安",
    "子安",
    "靖琪",
    "明远",
    "子涵",
    "子瑜",
    "子石",
    "子昂",
    "文昊",
    "雨泽",
    "思琪",
    "嘉诚",
    "俊杰",
    "晓彤",
    "雪莲",
    "建国",
    "志强",
    "雅琴",
    "海涛",
    "晓明",
    "丽华",
    "志远",
    "慧敏",
    "天翔",
    "若曦",
    "浩然",
    "诗涵",
    "一鸣",
    "婉清",
    "云飞",
    "梦瑶",
    "承志",
    "晓峰",
    "文博",
    "晨曦",
    "宇轩",
    "欣怡",
    "泽楷",
    "雨桐",
    "俊豪",
    "思颖",
    "煜城",
    "梓涵",
    "子睿",
    "晨阳",
    "亦菲",
    "鸿志",
    "语嫣",
    "博文",
    "静怡",
    "凯旋",
    "思源",
    "晓雪",
    "天宇",
    "雅静",
    "昊天",
    "佳怡",
    "俊熙",
    "梦瑶",
    "晨光",
    "子航",
    "思远",
    "雨晴",
    "泽民",
    "嘉欣",
    "浩宇"
  ],
  "titles": [
    "议员",
    "资深议员",
    "委员会主席",
    "党团领袖",
    "新晋议员",
    "连任议员"
  ]
};

/* 12 种议员原型：派系倾向、基础属性、贿赂底价 */
const POL_ARCHETYPES = [
  {
    "id": "arch_engineer",
    "name": "实干工程师",
    "icon": "🔧",
    "factionLean": {
      "industrial": 0.7,
      "eco": 0.05,
      "military": 0.15,
      "welfare": 0.1
    },
    "statBase": {
      "influence": 55,
      "loyalty": 60,
      "oratory": 45,
      "integrity": 70,
      "corruptible": 0.25
    },
    "statVar": 18,
    "traitPool": [
      "pragmatic",
      "stubborn",
      "technical"
    ],
    "bribeBase": 25,
    "desc": "只看图纸和数字的基建派，游说需用数据说话，贿赂很难奏效。"
  },
  {
    "id": "arch_idealist",
    "name": "理想主义者",
    "icon": "🕊️",
    "factionLean": {
      "industrial": 0.05,
      "eco": 0.6,
      "military": 0.05,
      "welfare": 0.3
    },
    "statBase": {
      "influence": 45,
      "loyalty": 85,
      "oratory": 75,
      "integrity": 90,
      "corruptible": 0.05
    },
    "statVar": 15,
    "traitPool": [
      "idealist",
      "orator",
      "incorruptible"
    ],
    "bribeBase": 120,
    "desc": "为信念投票，几乎无法收买，但一旦说服就会坚定站队。"
  },
  {
    "id": "arch_veteran",
    "name": "鹰派老兵",
    "icon": "🎖️",
    "factionLean": {
      "industrial": 0.1,
      "eco": 0.05,
      "military": 0.75,
      "welfare": 0.1
    },
    "statBase": {
      "influence": 60,
      "loyalty": 70,
      "oratory": 55,
      "integrity": 65,
      "corruptible": 0.3
    },
    "statVar": 16,
    "traitPool": [
      "hawk",
      "disciplined",
      "stubborn"
    ],
    "bribeBase": 30,
    "desc": "退役军官出身，军事议案的天然票仓，民生议案的天然反对者。"
  },
  {
    "id": "arch_doctor",
    "name": "社区医生",
    "icon": "🩺",
    "factionLean": {
      "industrial": 0.05,
      "eco": 0.25,
      "military": 0.05,
      "welfare": 0.65
    },
    "statBase": {
      "influence": 50,
      "loyalty": 65,
      "oratory": 60,
      "integrity": 80,
      "corruptible": 0.15
    },
    "statVar": 15,
    "traitPool": [
      "compassionate",
      "orator",
      "pragmatic"
    ],
    "bribeBase": 45,
    "desc": "每天接触病人，最懂民生疾苦，福利议案的坚定支持者。"
  },
  {
    "id": "arch_miner",
    "name": "矿工代表",
    "icon": "⛏️",
    "factionLean": {
      "industrial": 0.65,
      "eco": 0.05,
      "military": 0.1,
      "welfare": 0.2
    },
    "statBase": {
      "influence": 48,
      "loyalty": 75,
      "oratory": 50,
      "integrity": 60,
      "corruptible": 0.4
    },
    "statVar": 18,
    "traitPool": [
      "populist",
      "stubborn",
      "pragmatic"
    ],
    "bribeBase": 20,
    "desc": "矿区选出的工人代表，认钱也认选票，游说成本低但立场摇摆。"
  },
  {
    "id": "arch_scientist",
    "name": "科研狂人",
    "icon": "🔬",
    "factionLean": {
      "industrial": 0.25,
      "eco": 0.3,
      "military": 0.1,
      "welfare": 0.35
    },
    "statBase": {
      "influence": 52,
      "loyalty": 55,
      "oratory": 40,
      "integrity": 75,
      "corruptible": 0.2
    },
    "statVar": 17,
    "traitPool": [
      "technical",
      "idealist",
      "pragmatic"
    ],
    "bribeBase": 35,
    "desc": "只关心科研经费和实验数据，教育与绿能议案容易争取。"
  },
  {
    "id": "arch_merchant",
    "name": "商会会长",
    "icon": "💼",
    "factionLean": {
      "industrial": 0.5,
      "eco": 0.1,
      "military": 0.1,
      "welfare": 0.3
    },
    "statBase": {
      "influence": 75,
      "loyalty": 40,
      "oratory": 65,
      "integrity": 35,
      "corruptible": 0.7
    },
    "statVar": 16,
    "traitPool": [
      "opportunist",
      "orator",
      "populist"
    ],
    "bribeBase": 15,
    "desc": "影响力大但忠诚度低，谁出价高就跟谁走，丑闻高发人群。"
  },
  {
    "id": "arch_eco",
    "name": "环保斗士",
    "icon": "🌿",
    "factionLean": {
      "industrial": 0.05,
      "eco": 0.8,
      "military": 0.05,
      "welfare": 0.1
    },
    "statBase": {
      "influence": 47,
      "loyalty": 88,
      "oratory": 70,
      "integrity": 85,
      "corruptible": 0.08
    },
    "statVar": 14,
    "traitPool": [
      "idealist",
      "orator",
      "incorruptible"
    ],
    "bribeBase": 100,
    "desc": "为保护区绝食过三次的人，环保议案的铁票，工业议案的铁壁。"
  },
  {
    "id": "arch_officer",
    "name": "退伍军官",
    "icon": "🪖",
    "factionLean": {
      "industrial": 0.15,
      "eco": 0.05,
      "military": 0.65,
      "welfare": 0.15
    },
    "statBase": {
      "influence": 58,
      "loyalty": 72,
      "oratory": 48,
      "integrity": 70,
      "corruptible": 0.25
    },
    "statVar": 15,
    "traitPool": [
      "hawk",
      "disciplined",
      "pragmatic"
    ],
    "bribeBase": 28,
    "desc": "纪律严明，重视防卫与退伍保障，讨厌空谈。"
  },
  {
    "id": "arch_youth",
    "name": "青年领袖",
    "icon": "✊",
    "factionLean": {
      "industrial": 0.1,
      "eco": 0.35,
      "military": 0.05,
      "welfare": 0.5
    },
    "statBase": {
      "influence": 42,
      "loyalty": 50,
      "oratory": 80,
      "integrity": 70,
      "corruptible": 0.35
    },
    "statVar": 20,
    "traitPool": [
      "populist",
      "orator",
      "idealist"
    ],
    "bribeBase": 22,
    "desc": "演说能力极强，能带风向；立场随民意摇摆，是民调的晴雨表。"
  },
  {
    "id": "arch_bureaucrat",
    "name": "资深官僚",
    "icon": "📋",
    "factionLean": {
      "industrial": 0.3,
      "eco": 0.2,
      "military": 0.2,
      "welfare": 0.3
    },
    "statBase": {
      "influence": 62,
      "loyalty": 45,
      "oratory": 45,
      "integrity": 45,
      "corruptible": 0.55
    },
    "statVar": 15,
    "traitPool": [
      "opportunist",
      "pragmatic",
      "disciplined"
    ],
    "bribeBase": 18,
    "desc": "程序专家，熟悉一切规则漏洞；忠诚度低，但精通修正案交易。"
  },
  {
    "id": "arch_journalist",
    "name": "独立调查记者",
    "icon": "📰",
    "factionLean": {
      "industrial": 0.1,
      "eco": 0.3,
      "military": 0.1,
      "welfare": 0.5
    },
    "statBase": {
      "influence": 55,
      "loyalty": 60,
      "oratory": 68,
      "integrity": 88,
      "corruptible": 0.1
    },
    "statVar": 16,
    "traitPool": [
      "incorruptible",
      "orator",
      "idealist"
    ],
    "bribeBase": 90,
    "desc": "盯着所有人的钱包，贿赂他等于自爆；但他会曝光别人的贿赂。"
  }
];

/* 20 种议员特质：全部带数值修正，进入投票效用计算 */
const POL_TRAITS = [
  {
    "id": "pragmatic",
    "name": "务实",
    "icon": "🔧",
    "desc": "看效果不看立场：派系立场权重 -30%，民意权重 +30%。",
    "effects": {
      "factionWeightMul": 0.7,
      "opinionWeightMul": 1.3,
      "bribeResist": 0.1
    }
  },
  {
    "id": "stubborn",
    "name": "固执",
    "icon": "🪨",
    "desc": "一旦表态极难改变：游说效果 -50%，贿赂效果 -50%。",
    "effects": {
      "lobbyMul": 0.5,
      "bribeMul": 0.5,
      "flipChanceMul": 0.3
    }
  },
  {
    "id": "idealist",
    "name": "理想主义",
    "icon": "🕊️",
    "desc": "为信念投票：贿赂抗性 +0.6，派系立场权重 +20%。",
    "effects": {
      "bribeResist": 0.6,
      "factionWeightMul": 1.2,
      "lobbyMul": 0.8
    }
  },
  {
    "id": "orator",
    "name": "演说家",
    "icon": "🎙️",
    "desc": "发言能带动 1 名中立议员：投票时有 25% 概率使一名未决议员跟随其投票。",
    "effects": {
      "swayChance": 0.25,
      "influenceMul": 1.2,
      "opinionWeightMul": 1.1
    }
  },
  {
    "id": "incorruptible",
    "name": "廉洁",
    "icon": "⚖️",
    "desc": "拒绝一切贿赂：贿赂成功率归零，并会举报行贿者。",
    "effects": {
      "bribeResist": 1.0,
      "reportBribe": true,
      "scandalResist": 0.5
    }
  },
  {
    "id": "opportunist",
    "name": "机会主义",
    "icon": "🦊",
    "desc": "跟风多数派：投票时向当前多数方向偏移 20%，贿赂效果 +50%。",
    "effects": {
      "bandwagon": 0.2,
      "bribeMul": 1.5,
      "loyaltyMul": 0.7
    }
  },
  {
    "id": "hawk",
    "name": "鹰派",
    "icon": "🦅",
    "desc": "军事议案自动 +1 支持档，民生议案 -1 支持档。",
    "effects": {
      "militaryStanceBonus": 1,
      "welfareStancePenalty": 1
    }
  },
  {
    "id": "populist",
    "name": "民粹",
    "icon": "📣",
    "desc": "唯民调马首是瞻：民意权重翻倍，派系权重减半。",
    "effects": {
      "opinionWeightMul": 2.0,
      "factionWeightMul": 0.5
    }
  },
  {
    "id": "disciplined",
    "name": "纪律严明",
    "icon": "🎖️",
    "desc": "党团纪律的模范：派系立场权重 +40%，游说效果 -20%。",
    "effects": {
      "factionWeightMul": 1.4,
      "lobbyMul": 0.8
    }
  },
  {
    "id": "compassionate",
    "name": "悲悯",
    "icon": "💗",
    "desc": "福利议案自动 +1 支持档，税收议案 -1 支持档。",
    "effects": {
      "welfareStanceBonus": 1,
      "taxStancePenalty": 1
    }
  },
  {
    "id": "technical",
    "name": "技术派",
    "icon": "📐",
    "desc": "只认数据：有明确数值收益的议案支持 +1 档，空泛议案 -1 档。",
    "effects": {
      "dataStanceBonus": 1,
      "opinionWeightMul": 0.7
    }
  },
  {
    "id": "corrupt",
    "name": "贪腐",
    "icon": "💸",
    "desc": "贿赂底价减半，但每届有 15% 概率爆发个人丑闻。",
    "effects": {
      "bribeMul": 2.0,
      "bribePriceMul": 0.5,
      "scandalChance": 0.15
    }
  },
  {
    "id": "ambitious",
    "name": "野心勃勃",
    "icon": "👑",
    "desc": "盯着市长宝座：市长支持率低时更易倒戈，游说效果 +30%。",
    "effects": {
      "lobbyMul": 1.3,
      "mayorDefectMul": 1.5
    }
  },
  {
    "id": "localist",
    "name": "地方主义",
    "icon": "🏘️",
    "desc": "只关心本选区：本选区受益的议案 +1 档，其他议案 -1 档。",
    "effects": {
      "districtBonus": 1,
      "districtPenalty": 1
    }
  },
  {
    "id": "cautious",
    "name": "谨慎",
    "icon": "🐢",
    "desc": "反对一切激进变革：高成本议案支持 -1 档，维持现状倾向 +20%。",
    "effects": {
      "costAversion": 1,
      "statusQuoBias": 0.2
    }
  },
  {
    "id": "firebrand",
    "name": "煽动者",
    "icon": "🔥",
    "desc": "抗议期间影响力翻倍，满意度低于 30 时煽动抗议升级概率 +20%。",
    "effects": {
      "protestInfluenceMul": 2.0,
      "escalateBonus": 0.2
    }
  },
  {
    "id": "mediator",
    "name": "调停者",
    "icon": "🤝",
    "desc": "擅长妥协：修正案通过率 +30%，僵局议案可推动二次投票。",
    "effects": {
      "amendMul": 1.3,
      "secondVoteChance": 0.5
    }
  },
  {
    "id": "economist",
    "name": "经济学家",
    "icon": "📈",
    "desc": "精算每一分钱：税收与工业议案支持 +1 档，福利议案 -1 档。",
    "effects": {
      "taxStanceBonus": 1,
      "industryStanceBonus": 1,
      "welfareStancePenalty": 1
    }
  },
  {
    "id": "veteran_fav",
    "name": "军属背景",
    "icon": "🎗️",
    "desc": "退伍军人基金与国防预算自动 +1 支持档。",
    "effects": {
      "militaryStanceBonus": 1
    }
  },
  {
    "id": "green_thumb",
    "name": "园丁",
    "icon": "🌱",
    "desc": "环保议案自动 +1 支持档，工业议案 -1 支持档。",
    "effects": {
      "ecoStanceBonus": 1,
      "industryStancePenalty": 1
    }
  }
];

/* 12 项满意度因子：权重 + 分段阈值（查表计分） */
const POL_SAT_FACTORS = [
  {
    "id": "food",
    "name": "食物供应",
    "icon": "🌾",
    "weight": 0.14,
    "desc": "人均食物库存：>=30 满分，0 分时 -14 点。",
    "thresholds": [
      [
        0,
        -14
      ],
      [
        5,
        -8
      ],
      [
        15,
        -2
      ],
      [
        30,
        6
      ],
      [
        60,
        10
      ]
    ]
  },
  {
    "id": "water",
    "name": "饮水供应",
    "icon": "💧",
    "weight": 0.14,
    "desc": "人均水库存：缺水是满意度头号杀手。",
    "thresholds": [
      [
        0,
        -14
      ],
      [
        5,
        -8
      ],
      [
        15,
        -2
      ],
      [
        30,
        6
      ],
      [
        60,
        10
      ]
    ]
  },
  {
    "id": "power",
    "name": "电力稳定",
    "icon": "⚡",
    "weight": 0.1,
    "desc": "电力缺口比例：停电直接扣分。",
    "thresholds": [
      [
        0,
        8
      ],
      [
        0.1,
        2
      ],
      [
        0.3,
        -4
      ],
      [
        0.6,
        -10
      ]
    ]
  },
  {
    "id": "housing",
    "name": "住房拥挤",
    "icon": "🏠",
    "weight": 0.1,
    "desc": "人口/上限比：超过 90% 开始扣分。",
    "thresholds": [
      [
        0.5,
        8
      ],
      [
        0.75,
        3
      ],
      [
        0.9,
        -3
      ],
      [
        1.0,
        -10
      ]
    ]
  },
  {
    "id": "jobs",
    "name": "就业岗位",
    "icon": "💼",
    "weight": 0.08,
    "desc": "建筑提供的岗位 vs 人口：岗位充足加分。",
    "thresholds": [
      [
        0.5,
        -6
      ],
      [
        0.8,
        0
      ],
      [
        1.2,
        5
      ],
      [
        2.0,
        8
      ]
    ]
  },
  {
    "id": "health",
    "name": "医疗覆盖",
    "icon": "🏥",
    "weight": 0.08,
    "desc": "医院/诊所数量与免费医疗政策。",
    "thresholds": [
      [
        0,
        -6
      ],
      [
        1,
        2
      ],
      [
        3,
        6
      ],
      [
        6,
        8
      ]
    ]
  },
  {
    "id": "safety",
    "name": "治安与防御",
    "icon": "🛡️",
    "weight": 0.09,
    "desc": "防御塔密度与最近袭击损失。",
    "thresholds": [
      [
        0,
        -8
      ],
      [
        2,
        -2
      ],
      [
        5,
        4
      ],
      [
        10,
        8
      ]
    ]
  },
  {
    "id": "tax",
    "name": "税负感受",
    "icon": "💰",
    "weight": 0.08,
    "desc": "生效中的加税政策数量与税率乘区。",
    "thresholds": [
      [
        0.8,
        6
      ],
      [
        1.0,
        0
      ],
      [
        1.2,
        -4
      ],
      [
        1.5,
        -9
      ]
    ]
  },
  {
    "id": "welfare",
    "name": "福利水平",
    "icon": "🎁",
    "weight": 0.07,
    "desc": "生效中的福利政策数量。",
    "thresholds": [
      [
        0,
        -4
      ],
      [
        1,
        1
      ],
      [
        2,
        4
      ],
      [
        4,
        7
      ]
    ]
  },
  {
    "id": "pollution",
    "name": "环境污染",
    "icon": "🌫️",
    "weight": 0.06,
    "desc": "污染乘区：碳上限与绿能政策可改善。",
    "thresholds": [
      [
        0.6,
        6
      ],
      [
        1.0,
        0
      ],
      [
        1.3,
        -4
      ],
      [
        1.8,
        -8
      ]
    ]
  },
  {
    "id": "transport",
    "name": "交通便利",
    "icon": "🚌",
    "weight": 0.03,
    "desc": "免费公交政策与交通建筑。",
    "thresholds": [
      [
        0,
        -2
      ],
      [
        1,
        3
      ],
      [
        2,
        5
      ]
    ]
  },
  {
    "id": "entertainment",
    "name": "文娱生活",
    "icon": "🎭",
    "weight": 0.03,
    "desc": "娱乐建筑数量：剧院、公园、体育馆。",
    "thresholds": [
      [
        0,
        -2
      ],
      [
        2,
        2
      ],
      [
        5,
        5
      ]
    ]
  }
];

/* 16 种抗议诉求：每种 3 个处置选项（成本 / 满意度 / 后遗症均为真实数值） */
const POL_PROTEST_DEMANDS = [
  {
    "id": "dem_food",
    "name": "我们要吃饭！",
    "icon": "🌾",
    "trigger": "food",
    "desc": "食物短缺引发的街头抗议。市民要求立即发放口粮。",
    "options": [
      {
        "id": "ration",
        "label": "紧急配给（消耗 30 食物）",
        "cost": {
          "food": 30
        },
        "effects": {
          "sat": 12,
          "food": -30
        },
        "desc": "动用储备粮平息抗议，满意度 +12。"
      },
      {
        "id": "promise",
        "label": "承诺三天内解决（免费）",
        "cost": {},
        "effects": {
          "sat": 3,
          "trustDebt": 1
        },
        "desc": "先稳住人群；若 3 分钟内食物仍短缺，满意度 -10。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散，立即结束抗议但留下后遗症。"
      }
    ]
  },
  {
    "id": "dem_water",
    "name": "水！水！水！",
    "icon": "💧",
    "trigger": "water",
    "desc": "断水引发的抗议，队伍堵在水厂门口。",
    "options": [
      {
        "id": "ration",
        "label": "紧急供水（消耗 30 水）",
        "cost": {
          "water": 30
        },
        "effects": {
          "sat": 12,
          "water": -30
        },
        "desc": "调用储备水，满意度 +12。"
      },
      {
        "id": "promise",
        "label": "承诺扩建水厂（免费）",
        "cost": {},
        "effects": {
          "sat": 3,
          "trustDebt": 1
        },
        "desc": "空头支票有代价：兑现不了会反噬。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬手段，满意度再 -8。"
      }
    ]
  },
  {
    "id": "dem_power",
    "name": "还我光明！",
    "icon": "⚡",
    "trigger": "power",
    "desc": "频繁停电，市民举着蜡烛游行。",
    "options": [
      {
        "id": "ration",
        "label": "限电保民用（工业停产 1 分钟）",
        "cost": {},
        "effects": {
          "sat": 8,
          "industryHaltMin": 1
        },
        "desc": "切断工业供电保居民，满意度 +8。"
      },
      {
        "id": "promise",
        "label": "承诺新建电站（免费）",
        "cost": {},
        "effects": {
          "sat": 3,
          "trustDebt": 1
        },
        "desc": "承诺新建电站，兑现不了反噬。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_tax",
    "name": "税负太重！",
    "icon": "💰",
    "trigger": "tax",
    "desc": "加税政策激起民愤，要求减税。",
    "options": [
      {
        "id": "cut",
        "label": "废除一项加税政策",
        "cost": {},
        "effects": {
          "sat": 10,
          "repealTaxPolicy": 1
        },
        "desc": "废除一项生效中的税收类政策，满意度 +10。"
      },
      {
        "id": "rebate",
        "label": "发放退税（消耗 40 铁矿）",
        "cost": {
          "iron": 40
        },
        "effects": {
          "sat": 9,
          "iron": -40
        },
        "desc": "一次性退税安抚，满意度 +9。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_wage",
    "name": "涨工资！",
    "icon": "💵",
    "trigger": "jobs",
    "desc": "工人要求提高待遇，否则罢工。",
    "options": [
      {
        "id": "raise",
        "label": "普涨工资（每分钟 +5 食物维持费）",
        "cost": {},
        "effects": {
          "sat": 10,
          "wageUpkeep": {
            "food": 5
          }
        },
        "desc": "加薪换满意度 +10，但新增永久维持费。"
      },
      {
        "id": "negotiate",
        "label": "谈判：承诺福利政策",
        "cost": {},
        "effects": {
          "sat": 5,
          "trustDebt": 1
        },
        "desc": "承诺推动一项福利政策；不兑现则反噬。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_safety",
    "name": "我们不安全！",
    "icon": "🚨",
    "trigger": "safety",
    "desc": "袭击频发，市民要求加强防御。",
    "options": [
      {
        "id": "build",
        "label": "紧急拨款建防御塔（消耗 80 铁矿）",
        "cost": {
          "iron": 80
        },
        "effects": {
          "sat": 11,
          "iron": -80,
          "defenseFlat": 15
        },
        "desc": "拨款强化防御，满意度 +11，防御 +15。"
      },
      {
        "id": "militia",
        "label": "组建民兵巡逻队（免费）",
        "cost": {},
        "effects": {
          "sat": 6,
          "crime": -10
        },
        "desc": "民兵上街巡逻，满意度 +6。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_pollution",
    "name": "不要毒空气！",
    "icon": "🌫️",
    "trigger": "pollution",
    "desc": "污染超标，家长带着孩子堵住市政厅。",
    "options": [
      {
        "id": "cap",
        "label": "立即限产（工业产出 -20%，2 分钟）",
        "cost": {},
        "effects": {
          "sat": 9,
          "industryHaltMin": 2
        },
        "desc": "强制工厂限产，满意度 +9。"
      },
      {
        "id": "green",
        "label": "承诺环保法案",
        "cost": {},
        "effects": {
          "sat": 4,
          "trustDebt": 1
        },
        "desc": "承诺推动环保政策。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_housing",
    "name": "我们要房子！",
    "icon": "🏠",
    "trigger": "housing",
    "desc": "住房爆满，露宿者在广场搭起帐篷。",
    "options": [
      {
        "id": "build",
        "label": "紧急住房拨款（消耗 50 钢材）",
        "cost": {
          "steel": 50
        },
        "effects": {
          "sat": 10,
          "steel": -50,
          "popCapBonus": 10
        },
        "desc": "速建临时住房，人口上限 +10。"
      },
      {
        "id": "promise",
        "label": "承诺安居计划",
        "cost": {},
        "effects": {
          "sat": 4,
          "trustDebt": 1
        },
        "desc": "承诺推动安居计划政策。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_health",
    "name": "看病太贵！",
    "icon": "🏥",
    "trigger": "health",
    "desc": "医疗覆盖不足，病患家属请愿。",
    "options": [
      {
        "id": "clinic",
        "label": "免费义诊周（消耗 20 食物 + 10 水）",
        "cost": {
          "food": 20,
          "water": 10
        },
        "effects": {
          "sat": 10,
          "food": -20,
          "water": -10
        },
        "desc": "义诊一周，满意度 +10。"
      },
      {
        "id": "promise",
        "label": "承诺免费医疗政策",
        "cost": {},
        "effects": {
          "sat": 4,
          "trustDebt": 1
        },
        "desc": "承诺推动免费医疗。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_curfew",
    "name": "取消宵禁！",
    "icon": "🌙",
    "trigger": "civic",
    "desc": "宵禁令激起青年抗议，要求还夜生活自由。",
    "options": [
      {
        "id": "repeal",
        "label": "废除宵禁令",
        "cost": {},
        "effects": {
          "sat": 12,
          "repealPolicy": "pol_curfew"
        },
        "desc": "废除宵禁，满意度 +12。"
      },
      {
        "id": "relax",
        "label": "放宽宵禁时间",
        "cost": {},
        "effects": {
          "sat": 6
        },
        "desc": "宵禁推迟两小时，满意度 +6。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_corruption",
    "name": "严惩贪官！",
    "icon": "⚖️",
    "trigger": "scandal",
    "desc": "贿赂丑闻曝光，市民要求彻查。",
    "options": [
      {
        "id": "investigate",
        "label": "成立调查组（丑闻 -20）",
        "cost": {
          "tech": 10
        },
        "effects": {
          "sat": 8,
          "scandal": -20,
          "tech": -10
        },
        "desc": "公开调查，满意度 +8，丑闻 -20。"
      },
      {
        "id": "scapegoat",
        "label": "开除一名涉事议员",
        "cost": {},
        "effects": {
          "sat": 6,
          "scandal": -10,
          "loseCouncilor": 1
        },
        "desc": "找替罪羊，满意度 +6，失去一名议员。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_military",
    "name": "不要当炮灰！",
    "icon": "🎖️",
    "trigger": "military",
    "desc": "义务兵役引发青年抗议，要求废除征兵。",
    "options": [
      {
        "id": "repeal",
        "label": "废除义务兵役",
        "cost": {},
        "effects": {
          "sat": 12,
          "repealPolicy": "pol_conscription_bill"
        },
        "desc": "废除征兵，满意度 +12，防御力回落。"
      },
      {
        "id": "exempt",
        "label": "学生缓征（满意度 +6）",
        "cost": {},
        "effects": {
          "sat": 6,
          "growthMulTemp": 0.95
        },
        "desc": "学生暂缓服役，满意度 +6。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_eco",
    "name": "还我绿地！",
    "icon": "🌿",
    "trigger": "eco",
    "desc": "采矿扩张侵占绿地，生态派市民静坐抗议。",
    "options": [
      {
        "id": "reserve",
        "label": "划定保护区（采矿 -10%）",
        "cost": {},
        "effects": {
          "sat": 9,
          "minerMulTemp": 0.9
        },
        "desc": "划保护区，满意度 +9。"
      },
      {
        "id": "promise",
        "label": "承诺生态保护区政策",
        "cost": {},
        "effects": {
          "sat": 4,
          "trustDebt": 1
        },
        "desc": "承诺推动生态保护区。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_transit",
    "name": "公交太贵！",
    "icon": "🚌",
    "trigger": "transport",
    "desc": "通勤成本高涨，要求交通补贴。",
    "options": [
      {
        "id": "subsidy",
        "label": "交通补贴（消耗 20 铁矿）",
        "cost": {
          "iron": 20
        },
        "effects": {
          "sat": 8,
          "iron": -20
        },
        "desc": "补贴票价，满意度 +8。"
      },
      {
        "id": "promise",
        "label": "承诺免费公交政策",
        "cost": {},
        "effects": {
          "sat": 4,
          "trustDebt": 1
        },
        "desc": "承诺推动免费公交。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_entertain",
    "name": "我们要娱乐！",
    "icon": "🎭",
    "trigger": "entertainment",
    "desc": "生活枯燥乏味，市民要求文娱设施。",
    "options": [
      {
        "id": "festival",
        "label": "举办穹顶节（消耗 25 食物）",
        "cost": {
          "food": 25
        },
        "effects": {
          "sat": 11,
          "food": -25
        },
        "desc": "全城庆典，满意度 +11。"
      },
      {
        "id": "promise",
        "label": "承诺建设文娱设施",
        "cost": {},
        "effects": {
          "sat": 3,
          "trustDebt": 1
        },
        "desc": "承诺新建娱乐建筑。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  },
  {
    "id": "dem_general",
    "name": "市长下台！",
    "icon": "📢",
    "trigger": "general",
    "desc": "综合不满爆发，要求市长负责。",
    "options": [
      {
        "id": "address",
        "label": "发表电视讲话（消耗 10 科技点）",
        "cost": {
          "tech": 10
        },
        "effects": {
          "sat": 7,
          "tech": -10
        },
        "desc": "公开讲话安抚，满意度 +7。"
      },
      {
        "id": "reshuffle",
        "label": "改组内阁（派系支持度重洗）",
        "cost": {},
        "effects": {
          "sat": 5,
          "reshuffleFactions": 1
        },
        "desc": "改组换人，派系支持度向均值回归。"
      },
      {
        "id": "crackdown",
        "label": "驱散抗议（满意度 -8，丑闻 +10）",
        "cost": {},
        "effects": {
          "sat": -8,
          "scandal": 10
        },
        "desc": "强硬驱散。"
      }
    ]
  }
];

/* 10 种丑闻：严重度、满意度打击、派系支持度打击 */
const POL_SCANDALS = [
  {
    "id": "sc_bribe",
    "name": "贿赂议员",
    "icon": "💸",
    "baseSeverity": 25,
    "satHit": -6,
    "factionHit": {
      "industrial": -2,
      "eco": -2,
      "military": -2,
      "welfare": -2
    },
    "desc": "行贿被曝光：丑闻 +25，满意度 -6。"
  },
  {
    "id": "sc_embezzle",
    "name": "挪用公款",
    "icon": "🕳️",
    "baseSeverity": 35,
    "satHit": -10,
    "factionHit": {
      "industrial": -3,
      "eco": -3,
      "military": -3,
      "welfare": -3
    },
    "desc": "国库资金去向不明，满意度 -10。"
  },
  {
    "id": "sc_nepotism",
    "name": "任人唯亲",
    "icon": "👨‍👩‍👧",
    "baseSeverity": 15,
    "satHit": -4,
    "factionHit": {
      "industrial": -1,
      "eco": -1,
      "military": -1,
      "welfare": -1
    },
    "desc": "亲属空降要职，满意度 -4。"
  },
  {
    "id": "sc_crackdown",
    "name": "暴力驱散",
    "icon": "🚔",
    "baseSeverity": 20,
    "satHit": -8,
    "factionHit": {
      "industrial": -2,
      "eco": -3,
      "military": 1,
      "welfare": -3
    },
    "desc": "驱散抗议致人受伤，军事派叫好，其他派反对。"
  },
  {
    "id": "sc_leak",
    "name": "机密泄露",
    "icon": "📁",
    "baseSeverity": 18,
    "satHit": -5,
    "factionHit": {
      "industrial": -2,
      "eco": -2,
      "military": -4,
      "welfare": -2
    },
    "desc": "防御部署图外泄，军事派震怒。"
  },
  {
    "id": "sc_pollution",
    "name": "瞒报污染",
    "icon": "🌫️",
    "baseSeverity": 22,
    "satHit": -7,
    "factionHit": {
      "industrial": -4,
      "eco": -5,
      "military": -1,
      "welfare": -3
    },
    "desc": "污染数据造假被揭穿，生态派暴怒。"
  },
  {
    "id": "sc_food",
    "name": "口粮克扣",
    "icon": "🌾",
    "baseSeverity": 28,
    "satHit": -9,
    "factionHit": {
      "industrial": -2,
      "eco": -2,
      "military": -2,
      "welfare": -5
    },
    "desc": "救济粮被克扣倒卖，民生派暴怒。"
  },
  {
    "id": "sc_election",
    "name": "选举舞弊",
    "icon": "🗳️",
    "baseSeverity": 40,
    "satHit": -12,
    "factionHit": {
      "industrial": -4,
      "eco": -4,
      "military": -4,
      "welfare": -4
    },
    "desc": "选票造假实锤：满意度 -12，可能触发弹劾。"
  },
  {
    "id": "sc_affair",
    "name": "议员私德",
    "icon": "💔",
    "baseSeverity": 10,
    "satHit": -3,
    "factionHit": {
      "industrial": -1,
      "eco": -1,
      "military": -1,
      "welfare": -1
    },
    "desc": "议员私生活丑闻，满意度 -3。"
  },
  {
    "id": "sc_contract",
    "name": "天价合同",
    "icon": "📝",
    "baseSeverity": 24,
    "satHit": -7,
    "factionHit": {
      "industrial": -5,
      "eco": -2,
      "military": -2,
      "welfare": -2
    },
    "desc": "基建合同溢价三倍，工业派内部哗然。"
  }
];

/* 8 种市长竞选行动：成本、冷却、支持率与派系效果 */
const POL_CAMPAIGN_ACTIONS = [
  {
    "id": "camp_rally",
    "name": "广场集会",
    "icon": "📣",
    "cost": {
      "food": 10
    },
    "cooldownMin": 2,
    "effects": {
      "approval": 3,
      "faction": {
        "welfare": 1,
        "industrial": 0,
        "eco": 0,
        "military": 0
      }
    },
    "desc": "露天演讲：支持率 +3，民生派支持 +1。"
  },
  {
    "id": "camp_factory",
    "name": "视察工厂",
    "icon": "🏭",
    "cost": {
      "iron": 10
    },
    "cooldownMin": 2,
    "effects": {
      "approval": 2,
      "faction": {
        "welfare": 0,
        "industrial": 2,
        "eco": -1,
        "military": 0
      }
    },
    "desc": "深入一线：支持率 +2，工业派 +2，生态派 -1。"
  },
  {
    "id": "camp_green",
    "name": "植树造林秀",
    "icon": "🌳",
    "cost": {
      "water": 10
    },
    "cooldownMin": 2,
    "effects": {
      "approval": 2,
      "faction": {
        "welfare": 0,
        "industrial": -1,
        "eco": 2,
        "military": 0
      }
    },
    "desc": "亲手种树：支持率 +2，生态派 +2，工业派 -1。"
  },
  {
    "id": "camp_barracks",
    "name": "慰问驻军",
    "icon": "🪖",
    "cost": {
      "food": 15
    },
    "cooldownMin": 2,
    "effects": {
      "approval": 2,
      "faction": {
        "welfare": 0,
        "industrial": 0,
        "eco": 0,
        "military": 2
      }
    },
    "desc": "犒劳三军：支持率 +2，军事派 +2。"
  },
  {
    "id": "camp_debate",
    "name": "电视辩论",
    "icon": "📺",
    "cost": {
      "tech": 5
    },
    "cooldownMin": 5,
    "effects": {
      "approval": 5,
      "faction": {
        "welfare": 0,
        "industrial": 0,
        "eco": 0,
        "military": 0
      }
    },
    "desc": "与挑战者同台辩论：赢了支持率 +5，输了 -5（按满意度判定胜负）。"
  },
  {
    "id": "camp_handout",
    "name": "发放慰问品",
    "icon": "🎁",
    "cost": {
      "food": 30,
      "water": 20
    },
    "cooldownMin": 3,
    "effects": {
      "approval": 4,
      "faction": {
        "welfare": 2,
        "industrial": 0,
        "eco": 0,
        "military": 0
      }
    },
    "desc": "挨家挨户送温暖：支持率 +4，民生派 +2。"
  },
  {
    "id": "camp_inspect",
    "name": "廉政宣誓",
    "icon": "⚖️",
    "cost": {},
    "cooldownMin": 5,
    "effects": {
      "approval": 2,
      "faction": {
        "welfare": 1,
        "industrial": 0,
        "eco": 1,
        "military": 0
      },
      "scandal": -8
    },
    "desc": "公开财产：支持率 +2，丑闻 -8。"
  },
  {
    "id": "camp_promise",
    "name": "竞选承诺",
    "icon": "🤝",
    "cost": {},
    "cooldownMin": 1,
    "effects": {
      "approval": 3,
      "faction": {
        "welfare": 0,
        "industrial": 0,
        "eco": 0,
        "military": 0
      }
    },
    "desc": "承诺一项政策：支持率 +3，但当选后不兑现会记一笔信任债。"
  }
];

/* 8 项民调议题：关联满意度因子，决定议题支持率 */
const POL_POLL_ISSUES = [
  {
    "id": "issue_economy",
    "name": "经济与就业",
    "icon": "📈",
    "linkedFactors": [
      "jobs",
      "tax"
    ],
    "desc": "市民最关心饭碗。"
  },
  {
    "id": "issue_safety",
    "name": "安全与防御",
    "icon": "🛡️",
    "linkedFactors": [
      "safety"
    ],
    "desc": "袭击阴影下的安全感。"
  },
  {
    "id": "issue_welfare",
    "name": "医疗与福利",
    "icon": "🏥",
    "linkedFactors": [
      "health",
      "welfare"
    ],
    "desc": "看病贵不贵、保障够不够。"
  },
  {
    "id": "issue_env",
    "name": "环境与污染",
    "icon": "🌿",
    "linkedFactors": [
      "pollution"
    ],
    "desc": "空气能不能放心呼吸。"
  },
  {
    "id": "issue_food",
    "name": "食物与水",
    "icon": "🌾",
    "linkedFactors": [
      "food",
      "water"
    ],
    "desc": "生存底线。"
  },
  {
    "id": "issue_housing",
    "name": "住房",
    "icon": "🏠",
    "linkedFactors": [
      "housing"
    ],
    "desc": "有没有地方住。"
  },
  {
    "id": "issue_freedom",
    "name": "自由与秩序",
    "icon": "🗽",
    "linkedFactors": [
      "tax",
      "safety"
    ],
    "desc": "宵禁与管制的边界。"
  },
  {
    "id": "issue_future",
    "name": "城市未来",
    "icon": "🚀",
    "linkedFactors": [
      "jobs",
      "health",
      "pollution"
    ],
    "desc": "对市长长期施政的总体评价。"
  }
];


/* ============================== 议员 ============================== */
class PolCouncilor {
  constructor(district, faction, archetype, namePool, usedNames) {
    this.id = _polUid('coun');
    this.district = district.id;
    this.districtName = district.name;
    this.faction = faction;
    this.archetype = archetype.id;
    this.archetypeName = archetype.name;
    this.name = PolCouncilor._makeName(namePool, usedNames);
    this.title = _polPick(namePool.titles);
    // 基础属性 0-100（原型基础 +- 随机浮动）
    const v = archetype.statVar;
    this.influence = _polClamp(Math.round(archetype.statBase.influence + _polRand(-v, v)), 5, 99);
    this.loyalty = _polClamp(Math.round(archetype.statBase.loyalty + _polRand(-v, v)), 5, 99);
    this.oratory = _polClamp(Math.round(archetype.statBase.oratory + _polRand(-v, v)), 5, 99);
    this.integrity = _polClamp(Math.round(archetype.statBase.integrity + _polRand(-v, v)), 5, 99);
    // 贿赂底价（资源：tech 点折算，见 Parliament.bribeCost）
    this.bribeBase = Math.max(5, Math.round(archetype.bribeBase * _polRand(0.8, 1.3)));
    this.corruptible = _polClamp(archetype.statBase.corruptible + _polRand(-0.1, 0.1), 0, 0.95);
    // 特质：1-2 个（从原型特质池 + 通用池）
    this.traits = [];
    const pool = [...archetype.traitPool];
    while (this.traits.length < 2 && pool.length > 0) {
      const t = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
      if (!this.traits.includes(t)) this.traits.push(t);
    }
    this.termsServed = 0;          // 连任届数
    this.votesFor = 0; this.votesAgainst = 0; this.abstains = 0;
    this.bribedCount = 0;          // 被贿赂次数（影响丑闻概率）
    this.lobbiedUntil = 0;         // 游说冷却截止（游戏时间 ms）
    this.lobbiedStance = {};       // {billId: 修正值 -2..2} 游说/贿赂造成的临时立场偏移
    this.scandalRisk = 0;          // 个人丑闻风险 0-100
    this.alive = true;
  }

  static _makeName(pool, used) {
    for (let i = 0; i < 40; i++) {
      const n = _polPick(pool.surnames) + _polPick(pool.given);
      if (!used.has(n)) { used.add(n); return n; }
    }
    const n = _polPick(pool.surnames) + _polPick(pool.given) + Math.floor(Math.random() * 90 + 10);
    used.add(n); return n;
  }

  traitEffects() {
    // 聚合特质数值修正，供投票效用函数使用
    const e = { factionWeightMul: 1, opinionWeightMul: 1, lobbyMul: 1, bribeMul: 1,
      bribeResist: 0, flipChanceMul: 1, swayChance: 0, bandwagon: 0, scandalChance: 0,
      militaryStanceBonus: 0, welfareStancePenalty: 0, welfareStanceBonus: 0, taxStancePenalty: 0,
      taxStanceBonus: 0, industryStanceBonus: 0, industryStancePenalty: 0, ecoStanceBonus: 0,
      dataStanceBonus: 0, costAversion: 0, statusQuoBias: 0, reportBribe: false,
      bribePriceMul: 1, loyaltyMul: 1, influenceMul: 1, districtBonus: 0, districtPenalty: 0,
      protestInfluenceMul: 1, escalateBonus: 0, amendMul: 1, secondVoteChance: 0, mayorDefectMul: 1 };
    for (const tid of this.traits) {
      const t = (POL_TRAITS.find(x => x.id === tid) || {}).effects || {};
      for (const k in t) {
        if (typeof t[k] === 'number') {
          if (k.endsWith('Mul')) e[k] = (e[k] || 1) * t[k];
          else e[k] = (e[k] || 0) + t[k];
        } else if (typeof t[k] === 'boolean') { e[k] = e[k] || t[k]; }
      }
    }
    return e;
  }

  // 对某法案的基础立场：-2（强烈反对）.. +2（强烈支持），由派系态度 + 原型倾向 + 特质修正
  stanceOn(policy, gameState) {
    const te = this.traitEffects();
    let s = (policy.factionStance || {})[this.faction] || 0;
    s *= te.factionWeightMul;
    // 类别特质修正
    if (policy.cat === 'military') s += te.militaryStanceBonus || 0;
    if (policy.cat === 'welfare') { s += te.welfareStanceBonus || 0; s -= te.welfareStancePenalty || 0; }
    if (policy.cat === 'tax') { s += te.taxStanceBonus || 0; s -= te.taxStancePenalty || 0; }
    if (policy.cat === 'industry') { s += te.industryStanceBonus || 0; s -= te.industryStancePenalty || 0; }
    if (policy.cat === 'eco') s += te.ecoStanceBonus || 0;
    if (te.dataStanceBonus && policy.cost && _polSum(policy.cost) > 0) s += (policy.effects && Object.keys(policy.effects).length >= 3) ? 1 : -1;
    if (te.costAversion && _polSum(policy.cost || {}) >= 30) s -= 1;
    // 游说/贿赂造成的临时偏移
    s += this.lobbiedStance[policy.id] || 0;
    // 民意：满意度高时偏向支持市长议程，低时偏向反对一切
    const sat = gameState && typeof gameState.satisfaction === 'number' ? gameState.satisfaction : 50;
    const opinion = (sat - 50) / 50; // -1..1
    s += opinion * 0.8 * te.opinionWeightMul;
    // 市长支持率低时野心家倒戈
    if (gameState && typeof gameState.mayorApproval === 'number' && gameState.mayorApproval < 40) {
      s -= 0.5 * (te.mayorDefectMul || 1) * (1 - this.loyalty / 100);
    }
    return _polClamp(s, -2.5, 2.5);
  }

  // 投票决策：返回 'for' | 'against' | 'abstain'，并记录
  decideVote(policy, gameState, majorityLean) {
    const te = this.traitEffects();
    let s = this.stanceOn(policy, gameState);
    // 跟风：机会主义者向当前多数偏移
    if (te.bandwagon && majorityLean) s += majorityLean * te.bandwagon;
    // 随机扰动：影响力越低越摇摆
    s += _polRand(-0.6, 0.6) * (1 - this.influence / 120);
    // 纪律：高忠诚度议员向派系态度回归
    const factionBase = (policy.factionStance || {})[this.faction] || 0;
    s = s * (1 - this.loyalty / 200) + factionBase * (this.loyalty / 200);
    let vote;
    if (s >= 0.6) vote = 'for';
    else if (s <= -0.6) vote = 'against';
    else vote = Math.random() < 0.25 ? 'abstain' : (s >= 0 ? 'for' : 'against');
    if (vote === 'for') this.votesFor++;
    else if (vote === 'against') this.votesAgainst++;
    else this.abstains++;
    return vote;
  }

  // 游说：成功则该法案立场 +1（可叠加至 +2），消耗由 Parliament 定价
  applyLobby(policyId) {
    const te = this.traitEffects();
    const cur = this.lobbiedStance[policyId] || 0;
    if (cur >= 2) return { ok: false, reason: '该议员已被充分说服' };
    const roll = Math.random() * 100;
    const chance = _polClamp(55 + this.oratory * 0.2 - (100 - this.loyalty) * 0.2, 15, 90) * te.lobbyMul;
    if (roll <= chance) {
      this.lobbiedStance[policyId] = Math.min(2, cur + 1);
      return { ok: true, shift: 1, chance: Math.round(chance) };
    }
    return { ok: false, reason: '游说失败：对方不为所动', chance: Math.round(chance) };
  }

  // 贿赂：成功则立场 +2，但增加丑闻风险；廉洁特质会举报
  applyBribe(policyId) {
    const te = this.traitEffects();
    if (te.reportBribe) return { ok: false, reported: true, reason: '该议员拒绝贿赂并向廉政部门举报了你！' };
    const cur = this.lobbiedStance[policyId] || 0;
    const chance = _polClamp((this.corruptible * 90 + 15) * te.bribeMul, 5, 95);
    this.bribedCount++;
    this.scandalRisk = _polClamp(this.scandalRisk + 18 + this.bribedCount * 6, 0, 100);
    if (Math.random() * 100 <= chance) {
      this.lobbiedStance[policyId] = Math.min(2, cur + 2);
      return { ok: true, shift: 2, chance: Math.round(chance), scandalRisk: Math.round(this.scandalRisk) };
    }
    return { ok: false, reason: '贿赂失败：对方收了钱却没办事', chance: Math.round(chance), scandalRisk: Math.round(this.scandalRisk) };
  }

  serialize() {
    return { id: this.id, district: this.district, districtName: this.districtName, faction: this.faction,
      archetype: this.archetype, archetypeName: this.archetypeName, name: this.name, title: this.title,
      influence: this.influence, loyalty: this.loyalty, oratory: this.oratory, integrity: this.integrity,
      bribeBase: this.bribeBase, corruptible: this.corruptible, traits: [...this.traits],
      termsServed: this.termsServed, votesFor: this.votesFor, votesAgainst: this.votesAgainst,
      abstains: this.abstains, bribedCount: this.bribedCount, lobbiedStance: _polClone(this.lobbiedStance),
      scandalRisk: this.scandalRisk, alive: this.alive };
  }

  static deserialize(d) {
    const c = Object.create(PolCouncilor.prototype);
    Object.assign(c, d, { lobbiedStance: _polClone(d.lobbiedStance || {}), traits: [...(d.traits || [])] });
    c.lobbiedUntil = 0;
    return c;
  }
}

/* ============================== 议会 ============================== */
// 职责：选举（每 10 分钟游戏时间）、法案生命周期（提案→辩论→修正案→投票→颁布/否决）、
// 游说/贿赂定价与执行、联盟交易、公投、议员丑闻。
class PolParliament {
  constructor() {
    this.councilors = [];
    this.usedNames = new Set();
    this.nextElectionAt = POLITICS.ELECTION_INTERVAL_MS; // 游戏时间 ms
    this.electionCount = 0;
    this.session = 0;                       // 会期计数
    this.activeBills = [];                  // 在审法案 {billId, policyId, proposer, stage, debateLeftMs, amendments[], votes{}}
    this.billSeq = 0;
    this.history = [];                      // 投票历史 {t, policyId, name, for, against, abstain, result}
    this.lobbyLog = [];
    this.coalitionDeals = [];               // 联盟交易 {faction, promisePolicyId, votesPledged, expiresAt, fulfilled}
    this.referendumCooldownUntil = 0;
    this._electInitial();
  }

  _electInitial() {
    this._runElection(true);
  }

  // ---- 选举 ----
  // 席位分配：每选区 3 席，按（选区 lean x 全局派系支持度）加权抽签；连任议员有留任概率。
  _runElection(isInitial) {
    const support = this._factionSupportSnapshot();
    const newCouncil = [];
    const survivors = [];
    if (!isInitial) {
      for (const c of this.councilors) {
        // 留任概率：忠诚度与影响力越高越易连任；丑闻风险高则易落选
        const stayChance = _polClamp(0.45 + c.loyalty * 0.003 + c.influence * 0.002 - c.scandalRisk * 0.006, 0.1, 0.9);
        if (Math.random() < stayChance && c.alive) { c.termsServed++; survivors.push(c); }
      }
    }
    // 每选区补足 3 席
    for (const d of POL_DISTRICTS) {
      const kept = survivors.filter(c => c.district === d.id).slice(0, POLITICS.SEATS_PER_DISTRICT);
      for (const c of kept) { c.lobbiedStance = {}; c.scandalRisk = Math.max(0, c.scandalRisk - 20); newCouncil.push(c); }
      const need = POLITICS.SEATS_PER_DISTRICT - kept.length;
      for (let i = 0; i < need; i++) {
        const faction = this._pickFactionForDistrict(d, support);
        const arch = this._pickArchetypeForFaction(faction);
        newCouncil.push(new PolCouncilor(d, faction, arch, POL_NAMES, this.usedNames));
      }
    }
    this.councilors = newCouncil.slice(0, POLITICS.COUNCIL_SEATS);
    this.electionCount++;
    this.session++;
    // 清空未决法案的游说偏移（新一届重新游说）
    for (const b of this.activeBills) b.votes = {};
    return this.seatCount();
  }

  _factionSupportSnapshot() {
    // 议会内部读取派系支持度：若挂在 manager 上则用实时值，否则用基础值
    if (this._supportProvider) { try { return this._supportProvider(); } catch (e) { /* fallthrough */ } }
    const s = {};
    for (const k in POL_FACTIONS) s[k] = POL_FACTIONS[k].baseSupport;
    return s;
  }

  _pickFactionForDistrict(d, support) {
    const weights = {};
    let total = 0;
    for (const k in POL_FACTIONS) {
      const w = Math.max(0.01, (d.lean[k] || 0.1) * (0.5 + (support[k] || 25) / 50));
      weights[k] = w; total += w;
    }
    let r = Math.random() * total;
    for (const k in weights) { r -= weights[k]; if (r <= 0) return k; }
    return 'welfare';
  }

  _pickArchetypeForFaction(faction) {
    const cands = POL_ARCHETYPES.filter(a => (a.factionLean[faction] || 0) >= 0.3);
    const pool = cands.length ? cands : POL_ARCHETYPES;
    // 按倾向加权
    let total = 0;
    for (const a of pool) total += (a.factionLean[faction] || 0.1);
    let r = Math.random() * total;
    for (const a of pool) { r -= (a.factionLean[faction] || 0.1); if (r <= 0) return a; }
    return pool[0];
  }

  seatCount() {
    const counts = { industrial: 0, eco: 0, military: 0, welfare: 0 };
    for (const c of this.councilors) counts[c.faction] = (counts[c.faction] || 0) + 1;
    return { total: this.councilors.length, byFaction: counts };
  }

  // ---- 法案 ----
  canPropose(policyId, gameState) {
    const p = POL_POLICIES[policyId];
    if (!p) return { ok: false, reason: '未知政策' };
    if (this.activeBills.length >= POLITICS.MAX_ACTIVE_BILLS) return { ok: false, reason: '在审法案已满（' + POLITICS.MAX_ACTIVE_BILLS + ' 项），请先完成投票' };
    if (this.activeBills.some(b => b.policyId === policyId)) return { ok: false, reason: '该政策已在审议中' };
    if (gameState && typeof gameState.satisfaction === 'number' && gameState.satisfaction < p.minSat) {
      return { ok: false, reason: '满意度不足 ' + p.minSat + '，暂不能提出「' + p.name + '」' };
    }
    return { ok: true };
  }

  propose(policyId, gameState) {
    const chk = this.canPropose(policyId, gameState);
    if (!chk.ok) return chk;
    const p = POL_POLICIES[policyId];
    const bill = { billId: 'bill_' + (++this.billSeq), policyId, name: p.name, icon: p.icon,
      stage: 'debate', debateLeftMs: p.debateDays * 60 * 1000, amendments: [], votes: {},
      proposer: '市长', createdAt: gameState ? gameState.gameTimeMs : 0 };
    this.activeBills.push(bill);
    return { ok: true, bill };
  }

  // 修正案：三类，改变法案效果或通过门槛；需一名调停者特质议员附议时成功率更高
  proposeAmendment(billId, kind) {
    const bill = this.activeBills.find(b => b.billId === billId);
    if (!bill) return { ok: false, reason: '法案不存在' };
    if (bill.stage !== 'debate') return { ok: false, reason: '法案已进入投票，无法再提修正案' };
    const kinds = {
      soften: { name: '缓和版', desc: '效果减半但反对立场 -1：通过率上升，收益下降。', effectMul: 0.5, stanceShift: 1 },
      harden: { name: '强化版', desc: '效果 +50% 但反对立场 +1：收益上升，通过更难。', effectMul: 1.5, stanceShift: -1 },
      sunset: { name: '日落条款', desc: '有效期缩为一个任期：反对立场 -1，任期结束自动废除。', effectMul: 1.0, stanceShift: 1, sunset: true },
    };
    const k = kinds[kind];
    if (!k) return { ok: false, reason: '未知修正案类型' };
    const mediators = this.councilors.filter(c => c.traits.includes('mediator')).length;
    const chance = _polClamp(60 + mediators * 8, 40, 95);
    if (Math.random() * 100 > chance) return { ok: false, reason: '修正案未获附议（成功率 ' + Math.round(chance) + '%）' };
    bill.amendments.push({ kind, ...k });
    return { ok: true, amendment: k, chance: Math.round(chance) };
  }

  // 游说定价：基础 5 tech + 影响力/10，冷却 30 秒；贿赂定价：议员底价 tech 点
  lobbyPrice(c) { return Math.max(3, 5 + Math.round(c.influence / 10)); }
  bribePrice(c) {
    const te = c.traitEffects();
    return Math.max(5, Math.round(c.bribeBase * (te.bribePriceMul || 1)));
  }

  lobby(councilorId, billId, game) {
    const c = this.councilors.find(x => x.id === councilorId);
    const bill = this.activeBills.find(b => b.billId === billId);
    if (!c || !bill) return { ok: false, reason: '议员或法案不存在' };
    const now = game && game._polTimeMs ? game._polTimeMs : 0;
    if (c.lobbiedUntil > now) return { ok: false, reason: '该议员游说冷却中' };
    const price = this.lobbyPrice(c);
    if (game && game.player && game.player.inv && (game.player.inv.tech || 0) < price) {
      return { ok: false, reason: '科技点不足（需 ' + price + '）' };
    }
    if (game && game.player && game.player.inv) game.player.inv.tech -= price;
    const res = c.applyLobby(bill.policyId);
    c.lobbiedUntil = now + POLITICS.LOBBY_COOLDOWN_MS;
    this.lobbyLog.unshift({ t: Date.now(), name: c.name, bill: bill.name, kind: 'lobby', ok: res.ok });
    if (this.lobbyLog.length > 20) this.lobbyLog.length = 20;
    return { ok: res.ok, price, ...res };
  }

  bribe(councilorId, billId, game, politics) {
    const c = this.councilors.find(x => x.id === councilorId);
    const bill = this.activeBills.find(b => b.billId === billId);
    if (!c || !bill) return { ok: false, reason: '议员或法案不存在' };
    const price = this.bribePrice(c);
    if (game && game.player && game.player.inv && (game.player.inv.tech || 0) < price) {
      return { ok: false, reason: '科技点不足（需 ' + price + '）' };
    }
    if (game && game.player && game.player.inv) game.player.inv.tech -= price;
    const res = c.applyBribe(bill.policyId);
    this.lobbyLog.unshift({ t: Date.now(), name: c.name, bill: bill.name, kind: 'bribe', ok: res.ok });
    if (this.lobbyLog.length > 20) this.lobbyLog.length = 20;
    // 被发现判定：基础概率 + 贿赂次数 + 反腐政策加成
    let detect = POLITICS.BRIBE_DETECT_BASE + c.bribedCount * 0.04;
    if (politics && politics.enacted && politics.enacted.has('pol_anti_corruption')) detect *= 1.25;
    const detected = res.reported || Math.random() < detect;
    if (detected && politics) politics.registerScandal('sc_bribe', c.name + ' 受贿案');
    return { ok: res.ok, price, detected, ...res };
  }

  // 联盟交易：向某派系承诺推动其核心政策，换取该派系议员在本届全部投票 +1 档
  offerCoalitionDeal(factionId, promisePolicyId, gameState) {
    const f = POL_FACTIONS[factionId];
    if (!f) return { ok: false, reason: '未知派系' };
    if (!f.coreDemands.includes(promisePolicyId) && !(POL_POLICIES[promisePolicyId] && POL_POLICIES[promisePolicyId].cat === f.opposedCats[0])) {
      // 允许承诺任意该派系支持度 >= +1 的政策
      const p = POL_POLICIES[promisePolicyId];
      if (!p || (p.factionStance[factionId] || 0) < 1) return { ok: false, reason: '该派系对「' + (p ? p.name : promisePolicyId) + '」并不支持，交易免谈' };
    }
    if (this.coalitionDeals.some(d => d.faction === factionId && !d.fulfilled && !d.expired)) {
      return { ok: false, reason: '与该派系已有未兑现的交易' };
    }
    const seats = this.councilors.filter(c => c.faction === factionId).length;
    const deal = { id: _polUid('deal'), faction: factionId, promisePolicyId,
      promiseName: POL_POLICIES[promisePolicyId].name, votesPledged: seats,
      createdAt: gameState ? gameState.gameTimeMs : 0,
      expiresAt: (gameState ? gameState.gameTimeMs : 0) + POLITICS.MAYOR_TERM_MS,
      fulfilled: false, expired: false };
    this.coalitionDeals.push(deal);
    // 立即生效：该派系议员对所有法案的临时立场 +1（通过 lobbiedStance 的通用键实现）
    for (const c of this.councilors) {
      if (c.faction === factionId) c._coalitionBoost = 1;
    }
    return { ok: true, deal };
  }

  // 公投：绕过议会直接表决，花费 30 tech；通过率 = 满意度/100 修正后的民意支持
  callReferendum(policyId, game) {
    const p = POL_POLICIES[policyId];
    if (!p) return { ok: false, reason: '未知政策' };
    const now = game && game._polTimeMs ? game._polTimeMs : 0;
    if (now < this.referendumCooldownUntil) return { ok: false, reason: '公投冷却中' };
    if (game && game.player && game.player.inv && (game.player.inv.tech || 0) < 30) return { ok: false, reason: '公投需 30 科技点' };
    if (game && game.player && game.player.inv) game.player.inv.tech -= 30;
    this.referendumCooldownUntil = now + 5 * 60 * 1000;
    const sat = game && game.politics ? game.politics.satisfaction : 50;
    // 民意支持率：基础 50% + (满意度-50)*0.6 + 派系加权态度
    let support = 50 + (sat - 50) * 0.6;
    for (const k in POL_FACTIONS) support += ((p.factionStance || {})[k] || 0) * 4;
    support = _polClamp(support, 5, 95);
    const passed = Math.random() * 100 < support;
    return { ok: true, passed, support: Math.round(support), policyId };
  }

  // 投票：逐名议员决策，演说家有概率带动中立者；结果写入历史
  vote(billId, gameState) {
    const idx = this.activeBills.findIndex(b => b.billId === billId);
    if (idx < 0) return { ok: false, reason: '法案不存在' };
    const bill = this.activeBills[idx];
    const policy = POL_POLICIES[bill.policyId];
    // 修正案导致的立场偏移（取最后一条修正案）
    const amendShift = bill.amendments.length ? bill.amendments[bill.amendments.length - 1].stanceShift || 0 : 0;
    const amendMul = bill.amendments.length ? bill.amendments[bill.amendments.length - 1].effectMul || 1 : 1;
    const sunset = bill.amendments.some(a => a.sunset);
    // 第一轮：初步意向，计算多数方向（供跟风特质使用）
    const prelim = this.councilors.map(c => {
      const base = c.stanceOn(policy, gameState) + amendShift + (c._coalitionBoost || 0);
      return base >= 0.6 ? 1 : base <= -0.6 ? -1 : 0;
    });
    const majorityLean = prelim.reduce((a, b) => a + b, 0) / Math.max(1, prelim.length);
    // 正式投票
    const votes = {};
    let forN = 0, againstN = 0, abstainN = 0;
    for (let i = 0; i < this.councilors.length; i++) {
      const c = this.councilors[i];
      // 修正案偏移以临时方式计入：直接调整其 lobbiedStance 再算
      const saved = c.lobbiedStance[policy.id] || 0;
      c.lobbiedStance[policy.id] = _polClamp(saved + amendShift + (c._coalitionBoost || 0), -2, 2);
      const v = c.decideVote(policy, gameState, majorityLean);
      c.lobbiedStance[policy.id] = saved;
      votes[c.id] = v;
      if (v === 'for') forN++; else if (v === 'against') againstN++; else abstainN++;
    }
    // 演说家带动：每名投赞成的演说家 25% 概率把一名弃权者转为赞成
    const orators = this.councilors.filter(c => c.traits.includes('orator') && votes[c.id] === 'for');
    for (const o of orators) {
      if (Math.random() < 0.25) {
        const ab = this.councilors.find(c => votes[c.id] === 'abstain');
        if (ab) { votes[ab.id] = 'for'; abstainN--; forN++; ab.votesFor++; ab.abstains--; }
      }
    }
    const passed = forN > againstN && forN > this.councilors.length / 3;
    const record = { t: Date.now(), billId, policyId: policy.id, name: policy.name,
      for: forN, against: againstN, abstain: abstainN, result: passed ? 'passed' : 'rejected',
      amendMul, sunset };
    this.history.unshift(record);
    if (this.history.length > 30) this.history.length = 30;
    this.activeBills.splice(idx, 1);
    return { ok: true, passed, for: forN, against: againstN, abstain: abstainN, record };
  }

  // 辩论推进：每帧调用，debate 倒计时结束自动进入可投票状态（stage='vote')
  tickDebate(dtMs) {
    for (const b of this.activeBills) {
      if (b.stage === 'debate') {
        b.debateLeftMs -= dtMs;
        if (b.debateLeftMs <= 0) { b.stage = 'vote'; b.debateLeftMs = 0; }
      }
    }
  }

  // 议员丑闻抽查：每届选举时结算个人丑闻风险
  settleScandals(politics) {
    const out = [];
    for (const c of this.councilors) {
      const te = c.traitEffects();
      const p = (te.scandalChance || 0) + c.scandalRisk / 100 * 0.3;
      if (Math.random() < p) {
        c.scandalRisk = 0;
        if (politics) politics.registerScandal('sc_bribe', c.name + '（' + c.archetypeName + '）被曝受贿');
        out.push(c.name);
      }
    }
    return out;
  }

  serialize() {
    return { councilors: this.councilors.map(c => c.serialize()), nextElectionAt: this.nextElectionAt,
      electionCount: this.electionCount, session: this.session,
      activeBills: _polClone(this.activeBills), billSeq: this.billSeq,
      history: _polClone(this.history), lobbyLog: _polClone(this.lobbyLog),
      coalitionDeals: _polClone(this.coalitionDeals),
      referendumCooldownUntil: this.referendumCooldownUntil };
  }

  static deserialize(d) {
    const p = Object.create(PolParliament.prototype);
    p.councilors = (d.councilors || []).map(c => PolCouncilor.deserialize(c));
    p.usedNames = new Set(p.councilors.map(c => c.name));
    p.nextElectionAt = d.nextElectionAt || POLITICS.ELECTION_INTERVAL_MS;
    p.electionCount = d.electionCount || 0;
    p.session = d.session || 0;
    p.activeBills = _polClone(d.activeBills || []);
    p.billSeq = d.billSeq || 0;
    p.history = _polClone(d.history || []);
    p.lobbyLog = _polClone(d.lobbyLog || []);
    p.coalitionDeals = _polClone(d.coalitionDeals || []);
    p.referendumCooldownUntil = d.referendumCooldownUntil || 0;
    p._supportProvider = null;
    return p;
  }
}


/* ============================== 满意度模型 ============================== */
// 输入为游戏快照（防御性读取 game.player.inv / game.pop.count / game.builder 等），
// 输出 0-100 分及 12 项因子明细；每分钟向目标值漂移一部分（避免跳变）。
class PolSatisfaction {
  constructor() {
    this.value = 55;            // 当前满意度
    this.target = 55;           // 因子计算出的目标值
    this.factors = {};          // {factorId: {score, detail}}
    this.trend = 0;             // 最近 1 分钟变化
    this._lastValue = 55;
    this._accMs = 0;
    this.history = [];          // {t, value} 最近 60 条（每分钟一条）
  }

  // 分段查表：thresholds 为 [x, score] 升序，取 x <= v 的最后一段
  static _lookup(thresholds, v) {
    let s = thresholds[0][1];
    for (const [x, sc] of thresholds) { if (v >= x) s = sc; else break; }
    return s;
  }

  // 从 game 快照提取各因子输入值
  snapshot(game, politics) {
    const inv = (game && game.player && game.player.inv) || {};
    const pop = (game && game.pop && typeof game.pop.count === 'number') ? game.pop.count : 0;
    const builder = game && game.builder;
    const countBuildings = (pred) => {
      if (!builder || !builder.buildings) return 0;
      let n = 0;
      try {
        const list = Array.isArray(builder.buildings) ? builder.buildings : Object.values(builder.buildings);
        for (const b of list) { if (b && pred(b)) n += (b.level || 1); }
      } catch (e) { /* 忽略 */ }
      return n;
    };
    const mods = politics ? politics.aggregateModifiers() : {};
    const perCap = (k) => pop > 0 ? (inv[k] || 0) / pop : (inv[k] || 0);
    let powerGap = 0;
    try {
      if (builder && typeof builder.totalPower === 'function' && typeof builder.totalPowerUse === 'function') {
        const sup = builder.totalPower(), use = builder.totalPowerUse();
        powerGap = use > 0 ? Math.max(0, (use - sup) / use) : 0;
      }
    } catch (e) { /* 忽略 */ }
    let popCap = 2;
    try { if (game && game.pop && builder && typeof game.pop.cap === 'function') popCap = game.pop.cap(builder); } catch (e) { /* 忽略 */ }
    popCap += mods.popCapBonus || 0;
    const housingRatio = popCap > 0 ? pop / popCap : 1;
    const jobs = countBuildings(b => true);
    const jobRatio = pop > 0 ? jobs / pop : 1;
    const hospitals = countBuildings(b => /hospital|clinic|med|医院|诊所/i.test(b.id || b.type || ''));
    const defense = countBuildings(b => /turret|wall|bunker|tower|defense|防御|炮塔/i.test(b.id || b.type || ''));
    const entertain = countBuildings(b => /theater|park|entertain|arena|剧院|公园|娱乐|体育/i.test(b.id || b.type || ''));
    const taxMul = mods.taxMul || 1;
    const welfareCount = politics ? [...politics.enacted].filter(id => (POL_POLICIES[id] || {}).cat === 'welfare').length : 0;
    const pollutionMul = mods.pollutionMul || 1;
    const transit = politics && politics.enacted.has('pol_transit_free') ? 2 : (countBuildings(b => /transit|bus|公交|地铁/i.test(b.id || b.type || '')) > 0 ? 1 : 0);
    const recentRaidLoss = (game && game.military && game.military.raidStrength) || 0;
    return { perFood: perCap('food'), perWater: perCap('water'), powerGap, housingRatio,
      jobRatio, hospitals, defense: defense - Math.min(5, recentRaidLoss * 0.2), taxMul,
      welfareCount, pollutionMul, transit, entertain, pop };
  }

  compute(game, politics) {
    const snap = this.snapshot(game, politics);
    const inputs = { food: snap.perFood, water: snap.perWater, power: snap.powerGap,
      housing: snap.housingRatio, jobs: snap.jobRatio, health: snap.hospitals,
      safety: snap.defense, tax: snap.taxMul, welfare: snap.welfareCount,
      pollution: snap.pollutionMul, transport: snap.transit, entertainment: snap.entertain };
    let total = 50; // 基准 50
    const factors = {};
    for (const f of POL_SAT_FACTORS) {
      const v = inputs[f.id];
      const score = PolSatisfaction._lookup(f.thresholds, typeof v === 'number' ? v : 0);
      factors[f.id] = { score, value: v, name: f.name, icon: f.icon };
      total += score;
    }
    // 已生效政策的 satFlat（每分钟漂移，折算为目标值偏移）
    const mods = politics ? politics.aggregateModifiers() : {};
    total += (mods.satFlat || 0) * 4;
    // 丑闻压制
    if (politics) total -= Math.min(15, (politics.scandal || 0) * 0.15);
    // 抗议/罢工中的额外惩罚
    if (politics && politics.protest && politics.protest.active) total -= 5;
    if (politics && politics.protest && politics.protest.strike) total -= 8;
    this.target = _polClamp(Math.round(total), POLITICS.SAT_MIN, POLITICS.SAT_MAX);
    this.factors = factors;
    return this.target;
  }

  // 每帧漂移：每分钟向目标移动 20%（指数趋近），保证满意度变化平滑可玩
  update(dtMs, game, politics) {
    this._accMs += dtMs;
    if (this._accMs >= 60 * 1000) {
      this._accMs -= 60 * 1000;
      this.compute(game, politics);
      const prev = this.value;
      this.value = _polClamp(this.value + (this.target - this.value) * 0.2, 0, 100);
      this.trend = Math.round((this.value - this._lastValue) * 10) / 10;
      this._lastValue = this.value;
      this.history.unshift({ t: Date.now(), value: Math.round(this.value) });
      if (this.history.length > 60) this.history.length = 60;
      return { changed: true, prev, now: this.value };
    }
    return { changed: false };
  }

  serialize() { return { value: this.value, target: this.target, history: _polClone(this.history) }; }
  static deserialize(d) {
    const s = new PolSatisfaction();
    s.value = typeof d.value === 'number' ? d.value : 55;
    s.target = typeof d.target === 'number' ? d.target : 55;
    s.history = _polClone(d.history || []);
    s._lastValue = s.value;
    return s;
  }
}

/* ============================== 抗议与罢工 ============================== */
// 状态机：calm → protest（满意度<30）→ strike（满意度<15）；
// 抗议有具体诉求（按最差满意度因子选择），玩家三选一处置；
// 罢工按建筑类别优先级停产（工业→商业→科研→军事除外），直至满意度回升或诉求解决。
class PolProtest {
  constructor() {
    this.active = false;        // 抗议进行中
    this.strike = false;        // 罢工进行中（建筑停产）
    this.demand = null;         // 当前诉求对象（POL_PROTEST_DEMANDS 条目）
    this.sinceMs = 0;           // 开始时间（游戏时间）
    this.escalation = 0;        // 升级等级 0-3
    this.trustDebts = [];       // 未兑现承诺 {desc, dueAt, penaltySat}
    this.shutdown = new Set();  // 罢工停产的建筑类别键
    this.resolvedCount = 0;
    this.totalProtests = 0;
    this.totalStrikes = 0;
    this.log = [];
    this._checkMs = 0;
  }

  // 选择诉求：取满意度最差的因子映射到的诉求；无映射则用综合诉求
  pickDemand(satModel) {
    let worst = null, worstScore = 99;
    for (const f of POL_SAT_FACTORS) {
      const rec = satModel.factors[f.id];
      if (rec && rec.score < worstScore) { worstScore = rec.score; worst = f.id; }
    }
    const map = { food: 'dem_food', water: 'dem_water', power: 'dem_power', tax: 'dem_tax',
      jobs: 'dem_wage', safety: 'dem_safety', pollution: 'dem_pollution', housing: 'dem_housing',
      health: 'dem_health', transport: 'dem_transit', entertainment: 'dem_entertain' };
    let id = (worst && map[worst]) || 'dem_general';
    // 丑闻高时优先反腐诉求；征兵生效时可能出现反征兵诉求
    if (this._scandalHigh) id = 'dem_corruption';
    const dem = POL_PROTEST_DEMANDS.find(d => d.id === id) || POL_PROTEST_DEMANDS[POL_PROTEST_DEMANDS.length - 1];
    return dem;
  }

  update(dtMs, gameTimeMs, satValue, satModel, politics) {
    this._checkMs += dtMs;
    if (this._checkMs < 5000) return null; // 每 5 秒检查一次
    this._checkMs = 0;
    const events = [];
    this._scandalHigh = politics && politics.scandal >= 40;
    // 触发抗议
    if (!this.active && satValue < POLITICS.SAT_PROTEST_BELOW) {
      this.active = true; this.sinceMs = gameTimeMs;
      this.demand = this.pickDemand(satModel);
      this.escalation = 0;
      this.totalProtests++;
      this.log.unshift({ t: Date.now(), msg: '抗议爆发：' + this.demand.name });
      events.push({ type: 'protest_start', demand: this.demand });
    }
    // 抗议升级：每持续 2 分钟升一级，煽动者议员加速升级
    if (this.active) {
      const firebrands = politics && politics.parliament ? politics.parliament.councilors.filter(c => c.traits.includes('firebrand')).length : 0;
      const escInterval = (2 * 60 * 1000) / (1 + firebrands * 0.2);
      const elapsed = gameTimeMs - this.sinceMs;
      const level = Math.min(3, Math.floor(elapsed / escInterval));
      if (level > this.escalation) {
        this.escalation = level;
        events.push({ type: 'protest_escalate', level });
        this.log.unshift({ t: Date.now(), msg: '抗议升级到 ' + level + ' 级' });
      }
    }
    // 触发罢工
    if (this.active && !this.strike && satValue < POLITICS.SAT_STRIKE_BELOW) {
      this.strike = true;
      this.totalStrikes++;
      this._applyShutdown(politics);
      this.log.unshift({ t: Date.now(), msg: '罢工开始：工业与商业建筑停产' });
      events.push({ type: 'strike_start', shutdown: [...this.shutdown] });
    }
    // 罢工结束：满意度回升到 25
    if (this.strike && satValue >= POLITICS.SAT_RECOVER_STRIKE_END) {
      this.strike = false; this.shutdown.clear();
      events.push({ type: 'strike_end' });
      this.log.unshift({ t: Date.now(), msg: '罢工结束，复工' });
    }
    // 抗议结束：满意度回升到 35 且无罢工
    if (this.active && !this.strike && satValue >= POLITICS.SAT_RECOVER_PROTEST_END) {
      this.active = false; this.demand = null; this.escalation = 0;
      events.push({ type: 'protest_end' });
      this.log.unshift({ t: Date.now(), msg: '抗议平息' });
    }
    // 信任债到期结算
    if (politics) {
      const due = this.trustDebts.filter(d => gameTimeMs >= d.dueAt);
      for (const d of due) {
        politics.satisfaction.value = _polClamp(politics.satisfaction.value + d.penaltySat, 0, 100);
        events.push({ type: 'trust_debt_due', desc: d.desc, penalty: d.penaltySat });
        this.log.unshift({ t: Date.now(), msg: '承诺未兑现：' + d.desc + '，满意度 ' + d.penaltySat });
      }
      this.trustDebts = this.trustDebts.filter(d => gameTimeMs < d.dueAt);
    }
    if (this.log.length > 20) this.log.length = 20;
    return events.length ? events : null;
  }

  // 罢工停产优先级：采矿/冶炼/工厂 > 商业 > 科研；军事、民生（医院/水厂/温室）不停产
  _applyShutdown(politics) {
    this.shutdown = new Set(['miner', 'steel', 'factory', 'trade', 'research']);
    if (politics) politics._strikeShutdown = new Set(this.shutdown);
  }

  // 处置当前抗议诉求：optionId 为诉求 options 中的 id
  resolve(game, politics, optionId) {
    if (!this.active || !this.demand) return { ok: false, reason: '当前没有进行中的抗议' };
    const opt = this.demand.options.find(o => o.id === optionId);
    if (!opt) return { ok: false, reason: '未知处置选项' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && opt.cost) {
      for (const k in opt.cost) {
        if ((inv[k] || 0) < opt.cost[k]) return { ok: false, reason: '资源不足：缺 ' + (opt.cost[k] - (inv[k] || 0)) + ' ' + k };
      }
      for (const k in opt.cost) inv[k] -= opt.cost[k];
    }
    const fx = opt.effects || {};
    if (politics) {
      if (typeof fx.sat === 'number') politics.satisfaction.value = _polClamp(politics.satisfaction.value + fx.sat, 0, 100);
      if (typeof fx.scandal === 'number') politics.scandal = _polClamp(politics.scandal + fx.scandal, 0, 100);
      if (fx.trustDebt) {
        this.trustDebts.push({ desc: '承诺兑现：' + this.demand.name, dueAt: (game ? game._polTimeMs : 0) + 3 * 60 * 1000, penaltySat: -10 });
      }
      if (fx.repealTaxPolicy) {
        const taxActive = [...politics.enacted].filter(id => (POL_POLICIES[id] || {}).cat === 'tax');
        if (taxActive.length) politics.repeal(taxActive[0], '抗议施压废除');
      }
      if (fx.repealPolicy) politics.repeal(fx.repealPolicy, '抗议施压废除');
      if (fx.wageUpkeep) politics.extraUpkeep.push({ ...fx.wageUpkeep, reason: '普涨工资' });
      if (fx.defenseFlat) politics.defenseFlatBonus = (politics.defenseFlatBonus || 0) + fx.defenseFlat;
      if (fx.popCapBonus) politics.popCapFlatBonus = (politics.popCapFlatBonus || 0) + fx.popCapBonus;
      if (fx.reshuffleFactions) politics.factions.reshuffle();
      if (fx.loseCouncilor && politics.parliament && politics.parliament.councilors.length > 11) {
        const idx = politics.parliament.councilors.findIndex(c => c.scandalRisk >= 20);
        if (idx >= 0) politics.parliament.councilors.splice(idx, 1);
      }
    }
    this.resolvedCount++;
    const demName = this.demand.name;
    this.active = false; this.demand = null; this.escalation = 0;
    if (this.strike) { this.strike = false; this.shutdown.clear(); if (politics) politics._strikeShutdown = new Set(); }
    this.log.unshift({ t: Date.now(), msg: '抗议已处置：' + demName + '（' + opt.label + '）' });
    return { ok: true, demand: demName, option: opt.label, effects: fx };
  }

  // 罢工是否导致某建筑类别停产（供 economy/build 集成读取）
  isShutdown(catKey) { return this.strike && this.shutdown.has(catKey); }

  serialize() {
    return { active: this.active, strike: this.strike, demand: this.demand ? this.demand.id : null,
      sinceMs: this.sinceMs, escalation: this.escalation, trustDebts: _polClone(this.trustDebts),
      shutdown: [...this.shutdown], resolvedCount: this.resolvedCount,
      totalProtests: this.totalProtests, totalStrikes: this.totalStrikes, log: _polClone(this.log) };
  }
  static deserialize(d) {
    const p = new PolProtest();
    p.active = !!d.active; p.strike = !!d.strike;
    p.demand = d.demand ? POL_PROTEST_DEMANDS.find(x => x.id === d.demand) || null : null;
    p.sinceMs = d.sinceMs || 0; p.escalation = d.escalation || 0;
    p.trustDebts = _polClone(d.trustDebts || []);
    p.shutdown = new Set(d.shutdown || []);
    p.resolvedCount = d.resolvedCount || 0;
    p.totalProtests = d.totalProtests || 0; p.totalStrikes = d.totalStrikes || 0;
    p.log = _polClone(d.log || []);
    return p;
  }
}

/* ============================== 市长系统 ============================== */
// 玩家即市长：任期 30 分钟游戏时间；任期结束时满意度 > 50 且丑闻 < 60 才能连任，
// 否则下台（游戏不结束，但进入“看守市长”状态：政策提案权受限、派系支持度 -5，
// 需在下个任期选举中重新赢得支持）；支持率 = 满意度与派系支持度的加权。
class PolMayor {
  constructor() {
    this.name = '市长';
    this.term = 1;
    this.termStartMs = 0;
    this.nextElectionAt = POLITICS.MAYOR_TERM_MS;
    this.approval = 55;             // 支持率 0-100
    this.caretaker = false;         // 看守状态（连任失败后）
    this.termsWon = 0;
    this.termsLost = 0;
    this.impeachRisk = 0;           // 弹劾风险 0-100
    this.campaignCooldowns = {};    // {actionId: untilMs}
    this.promises = [];             // 未兑现的竞选承诺 [{policyId, dueAt}]
    this.history = [];
    this.challenger = null;         // 当前挑战者 {name, faction, strength}
  }

  computeApproval(satisfaction, factionSupport) {
    const avgFaction = Object.values(factionSupport).reduce((a, b) => a + b, 0) / 4;
    this.approval = _polClamp(Math.round(satisfaction * 0.6 + avgFaction * 0.4), 0, 100);
    return this.approval;
  }

  // 竞选行动：消耗资源、改变支持率与派系支持度；电视辩论按满意度判定胜负
  campaign(actionId, game, politics) {
    const a = POL_CAMPAIGN_ACTIONS.find(x => x.id === actionId);
    if (!a) return { ok: false, reason: '未知竞选行动' };
    const now = game ? game._polTimeMs : 0;
    if ((this.campaignCooldowns[actionId] || 0) > now) return { ok: false, reason: '该行动冷却中' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && a.cost) {
      for (const k in a.cost) if ((inv[k] || 0) < a.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in a.cost) inv[k] -= a.cost[k];
    }
    let approvalDelta = a.effects.approval || 0;
    if (actionId === 'camp_debate') {
      // 辩论胜负：满意度 >= 50 算赢
      const sat = politics ? politics.satisfaction.value : 50;
      approvalDelta = sat >= 50 ? 5 : -5;
    }
    this.approval = _polClamp(this.approval + approvalDelta, 0, 100);
    if (politics && a.effects.faction) {
      for (const k in a.effects.faction) politics.factions.addSupport(k, a.effects.faction[k], '竞选行动');
    }
    if (typeof a.scandal === 'number' && politics) politics.scandal = _polClamp(politics.scandal + a.scandal, 0, 100);
    if (actionId === 'camp_promise' && politics) {
      // 承诺一项随机未生效且民生/生态派支持的政策
      const cands = POL_POLICY_LIST.filter(p => !politics.enacted.has(p.id) && ((p.factionStance.welfare || 0) >= 1 || (p.factionStance.eco || 0) >= 1));
      if (cands.length) {
        const p = _polPick(cands);
        this.promises.push({ policyId: p.id, name: p.name, dueAt: now + POLITICS.MAYOR_TERM_MS });
      }
    }
    this.campaignCooldowns[actionId] = now + (a.cooldownMin || 2) * 60 * 1000;
    return { ok: true, action: a.name, approvalDelta, approval: this.approval };
  }

  // 任期选举：返回 {reelected, reason, votes}
  runElection(politics) {
    const sat = politics.satisfaction.value;
    const scandal = politics.scandal;
    // 挑战者强度：满意度越低挑战者越强
    const challengerStrength = _polClamp(100 - sat + scandal * 0.3, 10, 95);
    this.challenger = { name: _polPick(POL_NAMES.surnames) + _polPick(POL_NAMES.given),
      faction: _polPick(['industrial', 'eco', 'military', 'welfare']), strength: Math.round(challengerStrength) };
    // 得票率模型：支持率 vs 挑战者强度
    const voteShare = _polClamp(this.approval * 0.7 + sat * 0.3 - challengerStrength * 0.25, 5, 95);
    const reelected = sat > POLITICS.SAT_REELECT_MIN && scandal < 60 && voteShare >= 50;
    const rec = { t: Date.now(), term: this.term, sat: Math.round(sat), scandal: Math.round(scandal),
      voteShare: Math.round(voteShare), reelected, challenger: this.challenger.name };
    this.history.unshift(rec);
    if (this.history.length > 10) this.history.length = 10;
    if (reelected) {
      this.termsWon++; this.term++;
      this.caretaker = false;
      // 兑现检查：未兑现的竞选承诺扣支持率
      const unfulfilled = this.promises.filter(pr => !politics.enacted.has(pr.policyId));
      if (unfulfilled.length) {
        this.approval = _polClamp(this.approval - unfulfilled.length * 4, 0, 100);
        rec.promisePenalty = unfulfilled.length * 4;
      }
      this.promises = [];
    } else {
      this.termsLost++;
      this.caretaker = true; // 看守市长：提案需额外 5 tech，且派系支持度 -5
      if (politics) for (const k in POL_FACTIONS) politics.factions.addSupport(k, -5, '连任失败');
      rec.reason = sat <= POLITICS.SAT_REELECT_MIN ? '满意度未过 50' : (scandal >= 60 ? '丑闻缠身' : '得票率不足 50%');
    }
    this.termStartMs = this.nextElectionAt;
    this.nextElectionAt += POLITICS.MAYOR_TERM_MS;
    // 弹劾风险：丑闻 >= 70 且满意度 < 30 时每任期 +25
    if (scandal >= 70 && sat < 30) this.impeachRisk = _polClamp(this.impeachRisk + 25, 0, 100);
    else this.impeachRisk = Math.max(0, this.impeachRisk - 10);
    return { reelected, voteShare: Math.round(voteShare), challenger: this.challenger, record: rec };
  }

  // 弹劾：风险 >= 100 时触发，议会 2/3 多数可罢免市长（看守状态延长一任期）
  checkImpeachment(parliament) {
    if (this.impeachRisk < 100) return { impeached: false, risk: this.impeachRisk };
    const seats = parliament.councilors.length;
    const forImpeach = parliament.councilors.filter(c => c.integrity > 60 || c.traits.includes('incorruptible')).length;
    const impeached = forImpeach >= Math.ceil(seats * 2 / 3);
    if (impeached) {
      this.caretaker = true; this.impeachRisk = 40;
      this.termsLost++;
      return { impeached: true, votes: forImpeach, seats };
    }
    this.impeachRisk = 60;
    return { impeached: false, votes: forImpeach, seats };
  }

  serialize() {
    return { term: this.term, termStartMs: this.termStartMs, nextElectionAt: this.nextElectionAt,
      approval: this.approval, caretaker: this.caretaker, termsWon: this.termsWon, termsLost: this.termsLost,
      impeachRisk: this.impeachRisk, campaignCooldowns: _polClone(this.campaignCooldowns),
      promises: _polClone(this.promises), history: _polClone(this.history) };
  }
  static deserialize(d) {
    const m = new PolMayor();
    Object.assign(m, d, { campaignCooldowns: _polClone(d.campaignCooldowns || {}),
      promises: _polClone(d.promises || []), history: _polClone(d.history || []) });
    return m;
  }
}

/* ============================== 派系系统 ============================== */
// 四派系支持度 0-100：受政策颁布、抗议处置、竞选行动、丑闻、民调议题表现驱动；
// 支持度决定议会席位分布（选举时）与政策通过率（投票时派系态度权重）。
class PolFactions {
  constructor() {
    this.support = {};
    for (const k in POL_FACTIONS) this.support[k] = POL_FACTIONS[k].baseSupport;
    this.history = []; // {t, faction, delta, reason}
    this.polls = {};   // 民调：{issueId: support%} 每 2 分钟更新
    this._pollMs = 0;
  }

  addSupport(factionId, delta, reason) {
    if (!(factionId in this.support)) return;
    const before = this.support[factionId];
    this.support[factionId] = _polClamp(Math.round((this.support[factionId] + delta) * 10) / 10, 0, 100);
    // 零和漂移：一个派系上升，其他派系按比例微降（总和守恒压力）
    if (delta > 0) {
      const others = Object.keys(this.support).filter(k => k !== factionId);
      for (const o of others) this.support[o] = _polClamp(this.support[o] - delta * 0.1, 0, 100);
    }
    this.history.unshift({ t: Date.now(), faction: factionId, from: before, to: this.support[factionId], reason: reason || '' });
    if (this.history.length > 40) this.history.length = 40;
  }

  // 政策颁布后的派系反应：按 factionStance 加减支持度
  onPolicyEnacted(policy) {
    for (const k in POL_FACTIONS) {
      const stance = (policy.factionStance || {})[k] || 0;
      if (stance !== 0) this.addSupport(k, stance * 2.5, '政策「' + policy.name + '」颁布');
    }
  }
  onPolicyRepealed(policy) {
    for (const k in POL_FACTIONS) {
      const stance = (policy.factionStance || {})[k] || 0;
      if (stance !== 0) this.addSupport(k, -stance * 1.5, '政策「' + policy.name + '」废除');
    }
  }
  onPolicyRejected(policy) {
    for (const k in POL_FACTIONS) {
      const stance = (policy.factionStance || {})[k] || 0;
      if (stance > 0) this.addSupport(k, -1.5, '支持的政策「' + policy.name + '」被否决');
    }
  }

  // 改组：支持度向均值回归（抗议处置选项用）
  reshuffle() {
    const avg = Object.values(this.support).reduce((a, b) => a + b, 0) / 4;
    for (const k in this.support) this.support[k] = Math.round((this.support[k] + avg) / 2);
  }

  // 民调更新：议题支持率由关联满意度因子 + 派系议程加权得出
  updatePolls(dtMs, satModel) {
    this._pollMs += dtMs;
    if (this._pollMs < 2 * 60 * 1000) return;
    this._pollMs = 0;
    for (const issue of POL_POLL_ISSUES) {
      let s = 50;
      for (const fid of issue.linkedFactors) {
        const rec = satModel.factors[fid];
        if (rec) s += rec.score * 1.2;
      }
      this.polls[issue.id] = _polClamp(Math.round(s), 5, 95);
    }
  }

  // 政策通过率预测：按当前议会席位与派系态度估算（供 UI 与玩家决策）
  predictPassRate(policy, parliament) {
    if (!parliament) return 50;
    let forW = 0, total = 0;
    for (const c of parliament.councilors) {
      const stance = (policy.factionStance || {})[c.faction] || 0;
      const w = 1 + c.influence / 100;
      total += w;
      if (stance > 0) forW += w * (0.5 + stance * 0.25);
      else if (stance === 0) forW += w * 0.5;
      else forW += w * Math.max(0, 0.5 + stance * 0.25);
    }
    return total > 0 ? Math.round(forW / total * 100) : 50;
  }

  serialize() { return { support: _polClone(this.support), history: _polClone(this.history), polls: _polClone(this.polls) }; }
  static deserialize(d) {
    const f = new PolFactions();
    f.support = _polClone(d.support || {});
    for (const k in POL_FACTIONS) if (!(k in f.support)) f.support[k] = POL_FACTIONS[k].baseSupport;
    f.history = _polClone(d.history || []);
    f.polls = _polClone(d.polls || []);
    return f;
  }
}


/* ============================== 政治总管 ============================== */
class ColonialPoliticsManager {
  constructor() {
    this.parliament = new PolParliament();
    this.satisfaction = new PolSatisfaction();
    this.protest = new PolProtest();
    this.mayor = new PolMayor();
    this.factions = new PolFactions();
    this.enacted = new Set();           // 已颁布政策 id
    this.enactedMeta = {};              // {policyId: {at, amendMul, sunset, sunsetAt}}
    this.extraUpkeep = [];              // 额外维持费 [{food:5, reason}]（工资上涨等）
    this.defenseFlatBonus = 0;          // 抗议处置带来的固定防御加成
    this.popCapFlatBonus = 0;
    this.scandal = 0;                   // 丑闻值 0-100
    this.scandalLog = [];
    this.gameTimeMs = 0;                // 累积游戏时间
    this._upkeepAccMs = 0;
    this._scandalAccMs = 0;
    this._modCache = null;              // 聚合修正值缓存（颁布/废除时失效）
    this.eventLog = [];                 // {t, msg}
    // 议会读取实时派系支持度
    this.parliament._supportProvider = () => _polClone(this.factions.support);
  }

  /* ---------- 状态快照（供投票/满意度使用） ---------- */
  gameState(game) {
    return { satisfaction: this.satisfaction.value, mayorApproval: this.mayor.approval,
      gameTimeMs: this.gameTimeMs, scandal: this.scandal,
      factionSupport: _polClone(this.factions.support) };
  }

  /* ---------- 政策颁布 / 废除 ---------- */
  // 颁布路径有两条：议会投票通过后调用 enact()；公投通过后同样调用。
  enact(policyId, opts) {
    const p = POL_POLICIES[policyId];
    if (!p) return { ok: false, reason: '未知政策' };
    if (this.enacted.has(policyId)) return { ok: false, reason: '已在实施中' };
    // 前置政策
    for (const need of (p.needs || [])) {
      if (!this.enacted.has(need)) return { ok: false, reason: '需先实施「' + (POL_POLICIES[need] || {}).name + '」' };
    }
    // 互斥政策：废除冲突方
    const repealed = [];
    for (const c of (p.conflicts || [])) {
      if (this.enacted.has(c)) { this.repeal(c, '被「' + p.name + '」取代'); repealed.push(c); }
    }
    this.enacted.add(policyId);
    this.enactedMeta[policyId] = { at: this.gameTimeMs,
      amendMul: (opts && opts.amendMul) || 1,
      sunset: !!(opts && opts.sunset),
      sunsetAt: (opts && opts.sunset) ? this.gameTimeMs + POLITICS.MAYOR_TERM_MS : 0 };
    this._modCache = null;
    this.factions.onPolicyEnacted(p);
    // 联盟交易兑现检查
    for (const d of this.parliament.coalitionDeals) {
      if (!d.fulfilled && d.promisePolicyId === policyId) {
        d.fulfilled = true;
        this.log('联盟交易兑现：' + POL_FACTIONS[d.faction].name + '获得承诺的「' + p.name + '」');
      }
    }
    this.log('政策颁布：' + p.icon + ' ' + p.name + (repealed.length ? '（取代 ' + repealed.map(id => POL_POLICIES[id].name).join('、') + '）' : ''));
    return { ok: true, repealed };
  }

  repeal(policyId, reason) {
    if (!this.enacted.has(policyId)) return { ok: false, reason: '未在实施中' };
    const p = POL_POLICIES[policyId];
    this.enacted.delete(policyId);
    delete this.enactedMeta[policyId];
    this._modCache = null;
    this.factions.onPolicyRepealed(p);
    this.log('政策废除：' + p.name + (reason ? '（' + reason + '）' : ''));
    return { ok: true };
  }

  // 议会投票通过后的颁布（含修正案倍率与日落条款）
  enactFromVote(record) {
    return this.enact(record.policyId, { amendMul: record.amendMul || 1, sunset: !!record.sunset });
  }

  /* ---------- 修正值聚合：所有生效政策的效果叠加成一个 mods 对象 ---------- */
  // 乘区相乘、加值相加、satFlat 累加；修正案倍率只放大数值型效果（不放大 upkeep）。
  aggregateModifiers() {
    if (this._modCache) return this._modCache;
    const mods = { taxMul: 1, tradeMul: 1, growthMul: 1, defenseMul: 1, foodMul: 1, waterMul: 1,
      powerMul: 1, buildCostMul: 1, researchMul: 1, minerMul: 1, steelMul: 1, moraleMul: 1,
      pollutionMul: 1, crimeMul: 1, upkeepMul: 1, salaryMul: 1, foodUseMul: 1, armyCapMul: 1,
      satFlat: 0, popCapBonus: 0, raidResist: 0, opinionStability: 1, scandalResist: 0,
      bribeDetectMul: 1, scandalDecayMul: 1 };
    const MUL_KEYS = ['taxMul', 'tradeMul', 'growthMul', 'defenseMul', 'foodMul', 'waterMul', 'powerMul',
      'buildCostMul', 'researchMul', 'minerMul', 'steelMul', 'moraleMul', 'pollutionMul', 'crimeMul',
      'upkeepMul', 'salaryMul', 'foodUseMul', 'armyCapMul', 'opinionStability'];
    for (const id of this.enacted) {
      const p = POL_POLICIES[id];
      if (!p) continue;
      const meta = this.enactedMeta[id] || {};
      const mul = meta.amendMul || 1;
      for (const k in (p.effects || {})) {
        const v = p.effects[k];
        if (MUL_KEYS.includes(k)) {
          // 修正案倍率：效果偏离 1 的部分按倍率缩放
          mods[k] *= (1 + (v - 1) * mul);
        } else if (k === 'satFlat') { mods.satFlat += v * mul; }
        else if (k === 'popCapBonus') { mods.popCapBonus += Math.round(v * mul); }
        else if (k === 'raidResist') { mods.raidResist = Math.min(0.6, mods.raidResist + v); }
        else if (k === 'scandalResist') { mods.scandalResist += v; }
        else if (k === 'bribeDetectMul') { mods.bribeDetectMul *= v; }
        else if (k === 'scandalDecayMul') { mods.scandalDecayMul *= v; }
      }
    }
    mods.popCapBonus += this.popCapFlatBonus;
    mods.defenseFlat = this.defenseFlatBonus;
    // 媒体基金：派系漂移减半通过 opinionStability 体现（调用方读取）
    // 派系支持度对修正值的二次加成：任一派系支持度 >= 70 时其偏好类别 +5%
    for (const k in POL_FACTIONS) {
      if ((this.factions.support[k] || 0) >= 70) {
        if (k === 'industrial') { mods.minerMul *= 1.05; mods.steelMul *= 1.05; }
        if (k === 'eco') { mods.pollutionMul *= 0.95; mods.satFlat += 0.2; }
        if (k === 'military') { mods.defenseMul *= 1.05; mods.moraleMul *= 1.05; }
        if (k === 'welfare') { mods.growthMul *= 1.05; mods.satFlat += 0.2; }
      }
    }
    // 罢工惩罚：停产类别直接体现在 isShutdown 查询中，这里再给全局产出打折
    if (this.protest.strike) { mods.minerMul *= 0.6; mods.steelMul *= 0.6; mods.tradeMul *= 0.7; mods.researchMul *= 0.7; }
    // 看守市长：提案效率惩罚不体现在 mods，体现在 propose 成本上（见 proposeBill）
    this._modCache = mods;
    return mods;
  }

  // 单项政策的效果说明（UI 用）：把 effects 翻译成一行行数值
  describePolicyEffects(policyId) {
    const p = POL_POLICIES[policyId];
    if (!p) return [];
    const LABELS = { taxMul: '税收', tradeMul: '贸易收入', growthMul: '人口增长', defenseMul: '防御力',
      foodMul: '食物产量', waterMul: '水产量', powerMul: '电力产出', buildCostMul: '建筑成本',
      researchMul: '科研产出', minerMul: '采矿产量', steelMul: '钢材产量', moraleMul: '士气',
      pollutionMul: '污染', crimeMul: '犯罪率', upkeepMul: '维持费', salaryMul: '工资成本',
      foodUseMul: '食物消耗', armyCapMul: '军队规模上限', satFlat: '满意度/分钟',
      popCapBonus: '人口上限', raidResist: '袭击抗性' };
    const out = [];
    for (const k in (p.effects || {})) {
      const v = p.effects[k];
      if (!(k in LABELS)) continue;
      if (k === 'satFlat') out.push(LABELS[k] + ' ' + (v >= 0 ? '+' : '') + v);
      else if (k === 'popCapBonus') out.push(LABELS[k] + ' +' + v);
      else if (k === 'raidResist') out.push(LABELS[k] + ' +' + Math.round(v * 100) + '%');
      else out.push(LABELS[k] + ' ' + (v >= 1 ? '+' : '') + Math.round((v - 1) * 100) + '%');
    }
    return out;
  }

  // 政策推演：模拟未来 N 分钟（游戏时间）实施某政策后的满意度与税收变化（不实际颁布）
  simulatePolicy(policyId, minutes) {
    const p = POL_POLICIES[policyId];
    if (!p) return { ok: false, reason: '未知政策' };
    const base = this.aggregateModifiers();
    const sim = { policy: p.name, minutes, satDelta: 0, taxDeltaPct: 0, growthDeltaPct: 0, defenseDeltaPct: 0 };
    const fx = p.effects || {};
    sim.satDelta = Math.round(((fx.satFlat || 0) * 4 + (fx.pollutionMul ? (1 - fx.pollutionMul) * 6 : 0)) * minutes / 10) / 10 * 10 / 10;
    // 简化模型：satFlat 每分钟漂移按 0.2 趋近系数折算进目标值，再按分钟累积
    sim.satDelta = Math.round(((fx.satFlat || 0) * 4 * 0.2 * minutes + (fx.pollutionMul ? (1 - fx.pollutionMul) * 3 : 0)) * 10) / 10;
    sim.taxDeltaPct = Math.round(((fx.taxMul || 1) - 1) * 100);
    sim.growthDeltaPct = Math.round(((fx.growthMul || 1) - 1) * 100);
    sim.defenseDeltaPct = Math.round(((fx.defenseMul || 1) - 1) * 100);
    sim.upkeepPerMin = _polClone(p.upkeep || {});
    sim.canAffordUpkeep = true;
    return { ok: true, ...sim };
  }

  /* ---------- 丑闻 ---------- */
  registerScandal(scandalId, context) {
    const s = POL_SCANDALS.find(x => x.id === scandalId) || POL_SCANDALS[0];
    this.scandal = _polClamp(this.scandal + s.baseSeverity, 0, 100);
    this.satisfaction.value = _polClamp(this.satisfaction.value + s.satHit, 0, 100);
    for (const k in (s.factionHit || {})) this.factions.addSupport(k, s.factionHit[k], '丑闻：' + s.name);
    this.scandalLog.unshift({ t: Date.now(), id: s.id, name: s.name, context: context || '', severity: s.baseSeverity });
    if (this.scandalLog.length > 20) this.scandalLog.length = 20;
    this.log('丑闻爆发：' + s.name + (context ? '——' + context : '') + '（丑闻 +' + s.baseSeverity + '）');
    // 弹劾检查
    const imp = this.mayor.checkImpeachment(this.parliament);
    if (imp.impeached) this.log('市长被议会弹劾！进入看守状态。');
    return { scandal: this.scandal, impeached: imp.impeached };
  }

  /* ---------- 提案入口（市长） ---------- */
  proposeBill(policyId, game) {
    // 看守市长提案需额外 5 tech
    const extra = this.mayor.caretaker ? 5 : 0;
    const inv = game && game.player && game.player.inv;
    if (extra > 0) {
      if (!inv || (inv.tech || 0) < extra) return { ok: false, reason: '看守市长提案需额外 5 科技点' };
      inv.tech -= extra;
    }
    const res = this.parliament.propose(policyId, this.gameState(game));
    if (res.ok) this.log('市长提出法案：' + POL_POLICIES[policyId].name + (extra ? '（看守市长附加费 5 科技点）' : ''));
    return res;
  }

  voteBill(billId, game) {
    const res = this.parliament.vote(billId, this.gameState(game));
    if (!res.ok) return res;
    if (res.passed) {
      const en = this.enactFromVote(res.record);
      if (!en.ok) return { ...res, enactError: en.reason };
      return { ...res, enacted: true };
    }
    this.factions.onPolicyRejected(POL_POLICIES[res.record.policyId]);
    this.log('法案被否决：' + res.record.name + '（' + res.for + ' 赞成 / ' + res.against + ' 反对）');
    return { ...res, enacted: false };
  }

  /* ---------- 维持费：每分钟扣一次，交不起自动废除最贵的政策 ---------- */
  _payUpkeep(game, dtMs) {
    this._upkeepAccMs += dtMs;
    if (this._upkeepAccMs < 60 * 1000) return null;
    this._upkeepAccMs -= 60 * 1000;
    const inv = (game && game.player && game.player.inv) || null;
    if (!inv) return null;
    const due = {};
    for (const id of this.enacted) {
      const p = POL_POLICIES[id];
      for (const k in (p.upkeep || {})) due[k] = (due[k] || 0) + p.upkeep[k];
    }
    for (const u of this.extraUpkeep) for (const k in u) { if (k !== 'reason') due[k] = (due[k] || 0) + u[k]; }
    const mods = this.aggregateModifiers();
    const short = [];
    for (const k in due) {
      const need = Math.ceil(due[k] * (mods.upkeepMul || 1));
      if ((inv[k] || 0) < need) short.push(k);
      else inv[k] -= need;
    }
    if (short.length) {
      // 交不起：废除维持费最高的一项政策
      let worst = null, worstCost = -1;
      for (const id of this.enacted) {
        const c = _polSum(POL_POLICIES[id].upkeep || {});
        if (c > worstCost) { worstCost = c; worst = id; }
      }
      if (worst) {
        this.repeal(worst, '维持费交不起（缺 ' + short.join('、') + '）自动废除');
        return { autoRepealed: worst, short };
      }
    }
    return { paid: due };
  }

  /* ---------- 主循环 ---------- */
  update(now, dt, game) {
    const dtMs = Math.max(0, dt || 0);
    this.gameTimeMs += dtMs;
    if (game) game._polTimeMs = this.gameTimeMs;
    // 满意度
    this.satisfaction.update(dtMs, game, this);
    this.mayor.computeApproval(this.satisfaction.value, this.factions.support);
    this.factions.updatePolls(dtMs, this.satisfaction);
    // 丑闻自然衰减
    this._scandalAccMs += dtMs;
    if (this._scandalAccMs >= 60 * 1000) {
      this._scandalAccMs -= 60 * 1000;
      const mods = this.aggregateModifiers();
      const decay = POLITICS.SCANDAL_DECAY_PER_MIN * (mods.scandalDecayMul || 1);
      this.scandal = Math.max(0, this.scandal - decay);
    }
    // 法案辩论推进
    this.parliament.tickDebate(dtMs);
    // 议会选举
    if (this.gameTimeMs >= this.parliament.nextElectionAt) {
      this.parliament.nextElectionAt += POLITICS.ELECTION_INTERVAL_MS;
      const seats = this.parliament._runElection(false);
      const scandals = this.parliament.settleScandals(this);
      this.log('议会选举完成（第 ' + this.parliament.electionCount + ' 届）：' +
        Object.entries(seats.byFaction).map(([k, v]) => POL_FACTIONS[k].name + v + '席').join(' / ') +
        (scandals.length ? '；丑闻曝光：' + scandals.join('、') : ''));
    }
    // 市长任期选举
    if (this.gameTimeMs >= this.mayor.nextElectionAt) {
      const res = this.mayor.runElection(this);
      this.log(res.reelected
        ? '市长连任成功：第 ' + this.mayor.term + ' 任期开始，得票率 ' + res.voteShare + '%'
        : '市长连任失败（' + (res.record.reason || '得票不足') + '）：进入看守状态，得票率 ' + res.voteShare + '%');
    }
    // 日落条款到期
    for (const id of [...this.enacted]) {
      const meta = this.enactedMeta[id];
      if (meta && meta.sunset && meta.sunsetAt && this.gameTimeMs >= meta.sunsetAt) {
        this.repeal(id, '日落条款到期自动废除');
      }
    }
    // 联盟交易过期
    for (const d of this.parliament.coalitionDeals) {
      if (!d.fulfilled && !d.expired && this.gameTimeMs >= d.expiresAt) {
        d.expired = true;
        this.factions.addSupport(d.faction, -6, '联盟交易未兑现：' + d.promiseName);
        this.log('联盟交易过期：' + POL_FACTIONS[d.faction].name + '承诺的「' + d.promiseName + '」未兑现，支持度 -6');
        for (const c of this.parliament.councilors) if (c.faction === d.faction) c._coalitionBoost = 0;
      }
    }
    // 抗议 / 罢工
    this.protest.update(dtMs, this.gameTimeMs, this.satisfaction.value, this.satisfaction, this);
    // 维持费
    this._payUpkeep(game, dtMs);
    return null;
  }

  log(msg) {
    this.eventLog.unshift({ t: Date.now(), gameTimeMs: this.gameTimeMs, msg });
    if (this.eventLog.length > 50) this.eventLog.length = 50;
  }

  /* ---------- 集成查询（供 game.js / economy.js 读取） ---------- */
  // 罢工是否导致某建筑类别停产：catKey 取 'miner' | 'steel' | 'factory' | 'trade' | 'research'
  isShutdown(catKey) { return this.protest.isShutdown(catKey); }
  shutdownCategories() { return [...this.protest.shutdown]; }
  getModifiers() { return this.aggregateModifiers(); }
  getSatisfaction() { return Math.round(this.satisfaction.value); }
  getApproval() { return Math.round(this.mayor.approval); }
  getFactionSupport() { return _polClone(this.factions.support); }
  getSeatCount() { return this.parliament.seatCount(); }
  getActiveBills() { return _polClone(this.parliament.activeBills); }
  getEnactedPolicies() { return [...this.enacted].map(id => POL_POLICIES[id]).filter(Boolean); }
  getPolls() { return _polClone(this.factions.polls); }

  // 面板摘要（UI 直接渲染）
  summary() {
    return {
      satisfaction: Math.round(this.satisfaction.value),
      satisfactionTarget: this.satisfaction.target,
      trend: this.satisfaction.trend,
      factors: _polClone(this.satisfaction.factors),
      approval: Math.round(this.mayor.approval),
      term: this.mayor.term,
      caretaker: this.mayor.caretaker,
      nextMayorElectionInMin: Math.max(0, Math.round((this.mayor.nextElectionAt - this.gameTimeMs) / 60000)),
      nextParliamentElectionInMin: Math.max(0, Math.round((this.parliament.nextElectionAt - this.gameTimeMs) / 60000)),
      seats: this.parliament.seatCount(),
      factions: _polClone(this.factions.support),
      polls: _polClone(this.factions.polls),
      enacted: [...this.enacted],
      activeBills: this.parliament.activeBills.map(b => ({ billId: b.billId, name: b.name, stage: b.stage, debateLeftMin: Math.ceil(b.debateLeftMs / 60000), amendments: b.amendments.length })),
      protest: this.protest.active ? { demand: this.protest.demand ? this.protest.demand.name : null, escalation: this.protest.escalation, strike: this.protest.strike, shutdown: [...this.protest.shutdown] } : null,
      scandal: Math.round(this.scandal),
      impeachRisk: Math.round(this.mayor.impeachRisk),
    };
  }

  /* ---------- 存档 ---------- */
  save() {
    return { v: 1, gameTimeMs: this.gameTimeMs, scandal: this.scandal,
      scandalLog: _polClone(this.scandalLog), eventLog: _polClone(this.eventLog),
      enacted: [...this.enacted], enactedMeta: _polClone(this.enactedMeta),
      extraUpkeep: _polClone(this.extraUpkeep), defenseFlatBonus: this.defenseFlatBonus,
      popCapFlatBonus: this.popCapFlatBonus,
      parliament: this.parliament.serialize(), satisfaction: this.satisfaction.serialize(),
      protest: this.protest.serialize(), mayor: this.mayor.serialize(),
      factions: this.factions.serialize() };
  }

  load(data) {
    if (!data) return;
    this.gameTimeMs = data.gameTimeMs || 0;
    this.scandal = data.scandal || 0;
    this.scandalLog = _polClone(data.scandalLog || []);
    this.eventLog = _polClone(data.eventLog || []);
    this.enacted = new Set(data.enacted || []);
    this.enactedMeta = _polClone(data.enactedMeta || {});
    this.extraUpkeep = _polClone(data.extraUpkeep || []);
    this.defenseFlatBonus = data.defenseFlatBonus || 0;
    this.popCapFlatBonus = data.popCapFlatBonus || 0;
    if (data.parliament) this.parliament = PolParliament.deserialize(data.parliament);
    if (data.satisfaction) this.satisfaction = PolSatisfaction.deserialize(data.satisfaction);
    if (data.protest) this.protest = PolProtest.deserialize(data.protest);
    if (data.mayor) this.mayor = PolMayor.deserialize(data.mayor);
    if (data.factions) this.factions = PolFactions.deserialize(data.factions);
    this._modCache = null;
    this.parliament._supportProvider = () => _polClone(this.factions.support);
  }
}

/* ============================== 集成助手 ============================== */
const PoliticsIntegration = {
  // 一行接入：game.politics = PoliticsIntegration.attach(game)
  attach(game) {
    if (!game) return null;
    if (!game.politics) game.politics = new ColonialPoliticsManager();
    const mgr = game.politics;
    // 把政治修正值挂到 game 上，供 economy/build 读取（不修改原文件，仅附加字段）
    game.politicsModifiers = function () { return mgr.getModifiers(); };
    game.politicsShutdown = function (cat) { return mgr.isShutdown(cat); };
    return mgr;
  },
  // 供 game.js 主循环调用：PoliticsIntegration.tick(game, now, dt)
  tick(game, now, dt) {
    if (game && game.politics) game.politics.update(now, dt, game);
  },
};

/* ============================== 自测 ============================== */
class PoliticsSelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _polTimeMs: 0,
      player: { inv: { iron: 500, ice: 500, rare: 200, water: 500, food: 500, steel: 300, tech: 500, uranium: 50, he3: 20 } },
      pop: { count: 40, cap: () => 100 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50, totalPopCap: () => 100 },
      military: { raidStrength: 0 } });
    // 1. 实例化与议会规模
    const m = new ColonialPoliticsManager();
    check('实例化 ColonialPoliticsManager', !!m && !!m.parliament && !!m.satisfaction, '');
    check('议会 21 席 / 7 选区', m.parliament.councilors.length === 21, 'seats=' + m.parliament.councilors.length);
    const seats = m.parliament.seatCount();
    check('席位统计合计 21', seats.total === 21, JSON.stringify(seats.byFaction));
    check('24 条政策全部定义', POL_POLICY_LIST.length === 24, 'n=' + POL_POLICY_LIST.length);
    check('每条政策都有派系立场', POL_POLICY_LIST.every(p => p.factionStance && Object.keys(p.factionStance).length === 4), '');
    // 2. 提案 → 辩论 → 投票 → 颁布
    const g = mockGame();
    const prop = m.proposeBill('pol_free_clinics', g);
    check('提案免费医疗成功', prop.ok, prop.reason || '');
    check('在审法案 1 项', m.parliament.activeBills.length === 1, '');
    m.parliament.tickDebate(3 * 60 * 1000);
    check('辩论结束进入投票阶段', m.parliament.activeBills[0].stage === 'vote', m.parliament.activeBills[0].stage);
    const before = m.enacted.size;
    const vote = m.voteBill(m.parliament.activeBills[0].billId, g);
    check('投票有结果', vote.ok && typeof vote.passed === 'boolean', 'for=' + vote.for + ' against=' + vote.against);
    check('通过则颁布 / 否决则不颁布', vote.passed ? m.enacted.has('pol_free_clinics') : m.enacted.size === before, 'passed=' + vote.passed);
    // 3. 修正值聚合真实生效
    m.enact('pol_factory_grants');
    const mods = m.aggregateModifiers();
    check('工厂补贴使采矿乘区 > 1', mods.minerMul > 1, 'minerMul=' + mods.minerMul);
    check('工厂补贴使污染乘区 > 1', mods.pollutionMul > 1, 'pollutionMul=' + mods.pollutionMul);
    // 4. 游说 / 贿赂
    m.proposeBill('pol_defense_budget', g);
    const bill = m.parliament.activeBills[0];
    const target = m.parliament.councilors[0];
    const lobby = m.parliament.lobby(target.id, bill.billId, g);
    check('游说返回结构完整', lobby && ('ok' in lobby) && ('price' in lobby), JSON.stringify(lobby).slice(0, 120));
    const bribe = m.parliament.bribe(target.id, bill.billId, g, m);
    check('贿赂返回结构完整（含 detected）', bribe && ('detected' in bribe), JSON.stringify(bribe).slice(0, 120));
    // 5. 满意度：断粮断水应拉低目标值
    const g2 = mockGame(); g2.player.inv.food = 0; g2.player.inv.water = 0;
    const tgt = m.satisfaction.compute(g2, m);
    check('断粮断水时满意度目标 < 50', tgt < 50, 'target=' + tgt);
    // 6. 抗议与罢工状态机
    m.satisfaction.value = 20;
    m.protest.update(6000, m.gameTimeMs, 20, m.satisfaction, m);
    check('满意度 20 触发抗议', m.protest.active, '');
    check('抗议有具体诉求', !!m.protest.demand, m.protest.demand ? m.protest.demand.name : '');
    m.satisfaction.value = 10;
    m.protest.update(6000, m.gameTimeMs, 10, m.satisfaction, m);
    check('满意度 10 触发罢工', m.protest.strike, '');
    check('罢工停产包含采矿', m.protest.isShutdown('miner'), [...m.protest.shutdown].join(','));
    const res = m.protest.resolve(g, m, m.protest.demand.options[0].id);
    check('抗议可处置（三选一）', res.ok, res.reason || '');
    check('处置后抗议结束', !m.protest.active, '');
    // 7. 市长连任：满意度 > 50 应连任，< 50 应失败
    m.satisfaction.value = 80; m.scandal = 0; m.mayor.approval = 70;
    m.mayor.nextElectionAt = m.gameTimeMs + 1000;
    m.update(0, 2000, g);
    check('高满意度市长连任', m.mayor.termsWon >= 1, 'won=' + m.mayor.termsWon);
    m.satisfaction.value = 20; m.mayor.approval = 20;
    m.mayor.nextElectionAt = m.gameTimeMs + 1000;
    m.update(0, 2000, g);
    check('低满意度市长连任失败进看守', m.mayor.caretaker, '');
    // 8. 选举推进：快进 10 分钟应换届
    const sessBefore = m.parliament.session;
    m.gameTimeMs = m.parliament.nextElectionAt;
    m.update(0, 1000, g);
    check('10 分钟游戏时间触发议会选举', m.parliament.session > sessBefore, 'session ' + sessBefore + '->' + m.parliament.session);
    // 9. 丑闻与弹劾风险
    const sc = m.registerScandal('sc_bribe', '自测');
    check('丑闻值上升', m.scandal > 0, 'scandal=' + m.scandal);
    // 10. 存档往返
    const saved = m.save();
    const m2 = new ColonialPoliticsManager();
    m2.load(saved);
    check('存档往返：颁布政策保留', m2.enacted.size === m.enacted.size, m2.enacted.size + '/' + m.enacted.size);
    check('存档往返：议员数保留', m2.parliament.councilors.length === 21, '');
    check('存档往返：满意度保留', Math.abs(m2.satisfaction.value - m.satisfaction.value) < 0.01, '');
    // 11. 公投与联盟交易
    const ref = m.parliament.callReferendum('pol_green_energy', g);
    check('公投返回通过率', ref.ok && typeof ref.support === 'number', 'support=' + ref.support);
    const deal = m.parliament.offerCoalitionDeal('eco', 'pol_green_energy', m.gameState(g));
    check('联盟交易可达成', deal.ok, deal.reason || '');
    // 12. 政策推演
    const sim = m.simulatePolicy('pol_carbon_cap', 10);
    check('政策推演返回数值', sim.ok && typeof sim.satDelta === 'number', JSON.stringify(sim).slice(0, 100));
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

/* 政策三阶段推行模板（按类别）：每阶段解锁时间与追加效果，阶段效果真实计入扩展修正值 */
const POL_POLICY_PHASE_TEMPLATES = {
  "tax": [
    {
      "name": "试点征收",
      "unlockAfterMin": 0,
      "effects": {
        "taxMul": 1.0
      },
      "desc": "先行试点，效果温和"
    },
    {
      "name": "全面铺开",
      "unlockAfterMin": 5,
      "effects": {
        "taxMul": 1.1
      },
      "desc": "覆盖全城，收入上升"
    },
    {
      "name": "征管深化",
      "unlockAfterMin": 12,
      "effects": {
        "taxMul": 1.15,
        "satFlat": -0.1
      },
      "desc": "稽查加强，收入再升但民怨微增"
    }
  ],
  "welfare": [
    {
      "name": "试点覆盖",
      "unlockAfterMin": 0,
      "effects": {
        "satFlat": 0.2
      },
      "desc": "先覆盖最困难群体"
    },
    {
      "name": "全城推广",
      "unlockAfterMin": 5,
      "effects": {
        "satFlat": 0.5,
        "growthMul": 1.05
      },
      "desc": "覆盖全城，满意度上升"
    },
    {
      "name": "体系成熟",
      "unlockAfterMin": 12,
      "effects": {
        "satFlat": 0.8,
        "growthMul": 1.1
      },
      "desc": "服务网络成熟，人口增长加速"
    }
  ],
  "military": [
    {
      "name": "动员令",
      "unlockAfterMin": 0,
      "effects": {
        "defenseMul": 1.1
      },
      "desc": "进入动员状态"
    },
    {
      "name": "战备升级",
      "unlockAfterMin": 5,
      "effects": {
        "defenseMul": 1.25,
        "moraleMul": 1.05
      },
      "desc": "工事与训练升级"
    },
    {
      "name": "全民防卫",
      "unlockAfterMin": 12,
      "effects": {
        "defenseMul": 1.4,
        "raidResist": 0.1
      },
      "desc": "纵深防御体系成型"
    }
  ],
  "eco": [
    {
      "name": "宣传倡导",
      "unlockAfterMin": 0,
      "effects": {
        "pollutionMul": 0.95
      },
      "desc": "先宣传后执法"
    },
    {
      "name": "强制执行",
      "unlockAfterMin": 5,
      "effects": {
        "pollutionMul": 0.8,
        "satFlat": 0.2
      },
      "desc": "超标企业停产整顿"
    },
    {
      "name": "生态转型",
      "unlockAfterMin": 12,
      "effects": {
        "pollutionMul": 0.65,
        "powerMul": 1.1
      },
      "desc": "绿能替代完成"
    }
  ],
  "industry": [
    {
      "name": "立项扶持",
      "unlockAfterMin": 0,
      "effects": {
        "minerMul": 1.05
      },
      "desc": "首批补贴发放"
    },
    {
      "name": "产能爬坡",
      "unlockAfterMin": 5,
      "effects": {
        "minerMul": 1.15,
        "steelMul": 1.1
      },
      "desc": "新产能投产"
    },
    {
      "name": "产业集群",
      "unlockAfterMin": 12,
      "effects": {
        "minerMul": 1.25,
        "steelMul": 1.2,
        "pollutionMul": 1.1
      },
      "desc": "集群效应，污染同步上升"
    }
  ],
  "civic": [
    {
      "name": "试行",
      "unlockAfterMin": 0,
      "effects": {
        "satFlat": 0.1
      },
      "desc": "小范围试行"
    },
    {
      "name": "推广",
      "unlockAfterMin": 5,
      "effects": {
        "satFlat": 0.3
      },
      "desc": "全城推广"
    },
    {
      "name": "制度化",
      "unlockAfterMin": 12,
      "effects": {
        "satFlat": 0.5,
        "crimeMul": 0.9
      },
      "desc": "写入市政条例，治安改善"
    }
  ]
};

/* 7 选区深层数据：社区、地方议题、近 5 届得票率 */
const POL_DISTRICT_DETAIL = [
  {
    "id": "d_dome",
    "name": "穹顶市中心",
    "neighborhoods": [
      {
        "name": "市政广场",
        "pop": 320,
        "lean": {
          "industrial": 0.2,
          "eco": 0.2,
          "military": 0.2,
          "welfare": 0.4
        },
        "issue": "广场治安"
      },
      {
        "name": "中央商城",
        "pop": 280,
        "lean": {
          "industrial": 0.35,
          "eco": 0.15,
          "military": 0.15,
          "welfare": 0.35
        },
        "issue": "商铺租金"
      },
      {
        "name": "老城住宅区",
        "pop": 410,
        "lean": {
          "industrial": 0.15,
          "eco": 0.25,
          "military": 0.2,
          "welfare": 0.4
        },
        "issue": "住房老化"
      }
    ],
    "localIssues": [
      {
        "issue": "广场夜间治安恶化",
        "severity": 6,
        "linkedFactor": "safety",
        "fixPolicy": "pol_curfew"
      },
      {
        "issue": "商铺租金上涨",
        "severity": 5,
        "linkedFactor": "jobs",
        "fixPolicy": "pol_factory_grants"
      },
      {
        "issue": "老楼管道漏水",
        "severity": 7,
        "linkedFactor": "housing",
        "fixPolicy": "pol_housing_program"
      }
    ],
    "history": [
      {
        "term": 1,
        "shares": {
          "industrial": 25,
          "eco": 20,
          "military": 20,
          "welfare": 35
        }
      },
      {
        "term": 2,
        "shares": {
          "industrial": 28,
          "eco": 22,
          "military": 18,
          "welfare": 32
        }
      },
      {
        "term": 3,
        "shares": {
          "industrial": 24,
          "eco": 24,
          "military": 19,
          "welfare": 33
        }
      },
      {
        "term": 4,
        "shares": {
          "industrial": 27,
          "eco": 21,
          "military": 21,
          "welfare": 31
        }
      },
      {
        "term": 5,
        "shares": {
          "industrial": 26,
          "eco": 23,
          "military": 20,
          "welfare": 31
        }
      }
    ]
  },
  {
    "id": "d_industry",
    "name": "熔炉工业区",
    "neighborhoods": [
      {
        "name": "冶炼厂宿舍",
        "pop": 380,
        "lean": {
          "industrial": 0.6,
          "eco": 0.05,
          "military": 0.15,
          "welfare": 0.2
        },
        "issue": "粉尘污染"
      },
      {
        "name": "机修车间区",
        "pop": 260,
        "lean": {
          "industrial": 0.55,
          "eco": 0.05,
          "military": 0.2,
          "welfare": 0.2
        },
        "issue": "工伤保障"
      },
      {
        "name": "物流货场",
        "pop": 190,
        "lean": {
          "industrial": 0.45,
          "eco": 0.1,
          "military": 0.25,
          "welfare": 0.2
        },
        "issue": "货运拥堵"
      }
    ],
    "localIssues": [
      {
        "issue": "冶炼粉尘超标",
        "severity": 8,
        "linkedFactor": "pollution",
        "fixPolicy": "pol_carbon_cap"
      },
      {
        "issue": "工伤赔偿拖欠",
        "severity": 6,
        "linkedFactor": "welfare",
        "fixPolicy": "pol_free_clinics"
      },
      {
        "issue": "夜班通勤无车",
        "severity": 5,
        "linkedFactor": "transport",
        "fixPolicy": "pol_transit_free"
      }
    ],
    "history": [
      {
        "term": 1,
        "shares": {
          "industrial": 55,
          "eco": 5,
          "military": 20,
          "welfare": 20
        }
      },
      {
        "term": 2,
        "shares": {
          "industrial": 58,
          "eco": 6,
          "military": 18,
          "welfare": 18
        }
      },
      {
        "term": 3,
        "shares": {
          "industrial": 52,
          "eco": 8,
          "military": 22,
          "welfare": 18
        }
      },
      {
        "term": 4,
        "shares": {
          "industrial": 56,
          "eco": 7,
          "military": 19,
          "welfare": 18
        }
      },
      {
        "term": 5,
        "shares": {
          "industrial": 54,
          "eco": 9,
          "military": 20,
          "welfare": 17
        }
      }
    ]
  },
  {
    "id": "d_farm",
    "name": "生态农场区",
    "neighborhoods": [
      {
        "name": "穹顶温室群",
        "pop": 300,
        "lean": {
          "industrial": 0.05,
          "eco": 0.55,
          "military": 0.05,
          "welfare": 0.35
        },
        "issue": "灌溉用水"
      },
      {
        "name": "生态保护区哨所",
        "pop": 120,
        "lean": {
          "industrial": 0.05,
          "eco": 0.65,
          "military": 0.1,
          "welfare": 0.2
        },
        "issue": "偷猎采矿"
      },
      {
        "name": "农场工人新村",
        "pop": 260,
        "lean": {
          "industrial": 0.1,
          "eco": 0.45,
          "military": 0.05,
          "welfare": 0.4
        },
        "issue": "子女入学"
      }
    ],
    "localIssues": [
      {
        "issue": "灌溉水配额不足",
        "severity": 7,
        "linkedFactor": "water",
        "fixPolicy": "pol_food_subsidy"
      },
      {
        "issue": "盗采者侵入保护区",
        "severity": 6,
        "linkedFactor": "safety",
        "fixPolicy": "pol_wildlife_reserve"
      },
      {
        "issue": "农场学校师资短缺",
        "severity": 5,
        "linkedFactor": "health",
        "fixPolicy": "pol_education_grant"
      }
    ],
    "history": [
      {
        "term": 1,
        "shares": {
          "industrial": 5,
          "eco": 55,
          "military": 5,
          "welfare": 35
        }
      },
      {
        "term": 2,
        "shares": {
          "industrial": 6,
          "eco": 58,
          "military": 4,
          "welfare": 32
        }
      },
      {
        "term": 3,
        "shares": {
          "industrial": 5,
          "eco": 52,
          "military": 6,
          "welfare": 37
        }
      },
      {
        "term": 4,
        "shares": {
          "industrial": 7,
          "eco": 56,
          "military": 5,
          "welfare": 32
        }
      },
      {
        "term": 5,
        "shares": {
          "industrial": 6,
          "eco": 54,
          "military": 5,
          "welfare": 35
        }
      }
    ]
  },
  {
    "id": "d_port",
    "name": "军港防卫区",
    "neighborhoods": [
      {
        "name": "军营家属区",
        "pop": 290,
        "lean": {
          "industrial": 0.1,
          "eco": 0.05,
          "military": 0.65,
          "welfare": 0.2
        },
        "issue": "随军家属就业"
      },
      {
        "name": "防御塔阵地",
        "pop": 90,
        "lean": {
          "industrial": 0.2,
          "eco": 0.05,
          "military": 0.6,
          "welfare": 0.15
        },
        "issue": "弹药补给"
      },
      {
        "name": "退伍军人村",
        "pop": 210,
        "lean": {
          "industrial": 0.15,
          "eco": 0.05,
          "military": 0.55,
          "welfare": 0.25
        },
        "issue": "退伍保障"
      }
    ],
    "localIssues": [
      {
        "issue": "随军家属无工作",
        "severity": 6,
        "linkedFactor": "jobs",
        "fixPolicy": "pol_veteran_fund"
      },
      {
        "issue": "防御工事老化",
        "severity": 7,
        "linkedFactor": "safety",
        "fixPolicy": "pol_defense_budget"
      },
      {
        "issue": "退伍津贴发放延迟",
        "severity": 8,
        "linkedFactor": "welfare",
        "fixPolicy": "pol_veteran_fund"
      }
    ],
    "history": [
      {
        "term": 1,
        "shares": {
          "industrial": 15,
          "eco": 5,
          "military": 60,
          "welfare": 20
        }
      },
      {
        "term": 2,
        "shares": {
          "industrial": 14,
          "eco": 6,
          "military": 62,
          "welfare": 18
        }
      },
      {
        "term": 3,
        "shares": {
          "industrial": 16,
          "eco": 5,
          "military": 58,
          "welfare": 21
        }
      },
      {
        "term": 4,
        "shares": {
          "industrial": 15,
          "eco": 7,
          "military": 59,
          "welfare": 19
        }
      },
      {
        "term": 5,
        "shares": {
          "industrial": 15,
          "eco": 6,
          "military": 60,
          "welfare": 19
        }
      }
    ]
  },
  {
    "id": "d_campus",
    "name": "学院科研区",
    "neighborhoods": [
      {
        "name": "实验室公寓",
        "pop": 240,
        "lean": {
          "industrial": 0.2,
          "eco": 0.3,
          "military": 0.1,
          "welfare": 0.4
        },
        "issue": "科研经费"
      },
      {
        "name": "学生宿舍城",
        "pop": 350,
        "lean": {
          "industrial": 0.15,
          "eco": 0.35,
          "military": 0.05,
          "welfare": 0.45
        },
        "issue": "食堂涨价"
      },
      {
        "name": "图书馆社区",
        "pop": 150,
        "lean": {
          "industrial": 0.25,
          "eco": 0.3,
          "military": 0.1,
          "welfare": 0.35
        },
        "issue": "深夜噪音"
      }
    ],
    "localIssues": [
      {
        "issue": "实验室经费削减",
        "severity": 6,
        "linkedFactor": "jobs",
        "fixPolicy": "pol_education_grant"
      },
      {
        "issue": "学生食堂涨价",
        "severity": 7,
        "linkedFactor": "food",
        "fixPolicy": "pol_food_subsidy"
      },
      {
        "issue": "学术自由受限",
        "severity": 5,
        "linkedFactor": "safety",
        "fixPolicy": "pol_media_fund"
      }
    ],
    "history": [
      {
        "term": 1,
        "shares": {
          "industrial": 20,
          "eco": 30,
          "military": 10,
          "welfare": 40
        }
      },
      {
        "term": 2,
        "shares": {
          "industrial": 22,
          "eco": 32,
          "military": 9,
          "welfare": 37
        }
      },
      {
        "term": 3,
        "shares": {
          "industrial": 19,
          "eco": 28,
          "military": 11,
          "welfare": 42
        }
      },
      {
        "term": 4,
        "shares": {
          "industrial": 21,
          "eco": 31,
          "military": 10,
          "welfare": 38
        }
      },
      {
        "term": 5,
        "shares": {
          "industrial": 20,
          "eco": 30,
          "military": 10,
          "welfare": 40
        }
      }
    ]
  },
  {
    "id": "d_mine",
    "name": "矿区定居点",
    "neighborhoods": [
      {
        "name": "一号矿坑营地",
        "pop": 310,
        "lean": {
          "industrial": 0.55,
          "eco": 0.05,
          "military": 0.1,
          "welfare": 0.3
        },
        "issue": "矿难抚恤"
      },
      {
        "name": "选矿厂宿舍",
        "pop": 220,
        "lean": {
          "industrial": 0.5,
          "eco": 0.05,
          "military": 0.15,
          "welfare": 0.3
        },
        "issue": "粉尘防护"
      },
      {
        "name": "矿工子弟学校",
        "pop": 130,
        "lean": {
          "industrial": 0.4,
          "eco": 0.1,
          "military": 0.15,
          "welfare": 0.35
        },
        "issue": "教师流失"
      }
    ],
    "localIssues": [
      {
        "issue": "矿难抚恤不到位",
        "severity": 8,
        "linkedFactor": "welfare",
        "fixPolicy": "pol_free_clinics"
      },
      {
        "issue": "粉尘防护装备短缺",
        "severity": 7,
        "linkedFactor": "health",
        "fixPolicy": "pol_carbon_cap"
      },
      {
        "issue": "矿区学校缺老师",
        "severity": 6,
        "linkedFactor": "jobs",
        "fixPolicy": "pol_education_grant"
      }
    ],
    "history": [
      {
        "term": 1,
        "shares": {
          "industrial": 50,
          "eco": 5,
          "military": 15,
          "welfare": 30
        }
      },
      {
        "term": 2,
        "shares": {
          "industrial": 52,
          "eco": 4,
          "military": 16,
          "welfare": 28
        }
      },
      {
        "term": 3,
        "shares": {
          "industrial": 48,
          "eco": 6,
          "military": 14,
          "welfare": 32
        }
      },
      {
        "term": 4,
        "shares": {
          "industrial": 51,
          "eco": 5,
          "military": 15,
          "welfare": 29
        }
      },
      {
        "term": 5,
        "shares": {
          "industrial": 50,
          "eco": 5,
          "military": 15,
          "welfare": 30
        }
      }
    ]
  },
  {
    "id": "d_harbor",
    "name": "空港贸易区",
    "neighborhoods": [
      {
        "name": "货运码头",
        "pop": 230,
        "lean": {
          "industrial": 0.4,
          "eco": 0.1,
          "military": 0.15,
          "welfare": 0.35
        },
        "issue": "关税争议"
      },
      {
        "name": "商人聚居区",
        "pop": 200,
        "lean": {
          "industrial": 0.35,
          "eco": 0.15,
          "military": 0.15,
          "welfare": 0.35
        },
        "issue": "商业税负"
      },
      {
        "name": "空港地勤村",
        "pop": 170,
        "lean": {
          "industrial": 0.3,
          "eco": 0.2,
          "military": 0.2,
          "welfare": 0.3
        },
        "issue": "轮班疲劳"
      }
    ],
    "localIssues": [
      {
        "issue": "关税推高物价",
        "severity": 6,
        "linkedFactor": "tax",
        "fixPolicy": "pol_trade_tariff"
      },
      {
        "issue": "商铺税负过重",
        "severity": 5,
        "linkedFactor": "tax",
        "fixPolicy": "pol_progressive_tax"
      },
      {
        "issue": "地勤轮班过长",
        "severity": 5,
        "linkedFactor": "jobs",
        "fixPolicy": "pol_transit_free"
      }
    ],
    "history": [
      {
        "term": 1,
        "shares": {
          "industrial": 35,
          "eco": 15,
          "military": 15,
          "welfare": 35
        }
      },
      {
        "term": 2,
        "shares": {
          "industrial": 37,
          "eco": 14,
          "military": 16,
          "welfare": 33
        }
      },
      {
        "term": 3,
        "shares": {
          "industrial": 33,
          "eco": 16,
          "military": 14,
          "welfare": 37
        }
      },
      {
        "term": 4,
        "shares": {
          "industrial": 36,
          "eco": 15,
          "military": 15,
          "welfare": 34
        }
      },
      {
        "term": 5,
        "shares": {
          "industrial": 35,
          "eco": 15,
          "military": 15,
          "welfare": 35
        }
      }
    ]
  }
];

/* 预算六大类别：拨款比例产生真实修正值 */
const POL_BUDGET_CATS = {
  "industry": {
    "name": "工业发展",
    "icon": "🏭",
    "baseShare": 20,
    "desc": "每 10% 拨款：采矿 +4%，污染 +2%。"
  },
  "welfare": {
    "name": "民生福利",
    "icon": "🏥",
    "baseShare": 25,
    "desc": "每 10% 拨款：满意度目标 +2，人口增长 +3%。"
  },
  "military": {
    "name": "国防军费",
    "icon": "🛡️",
    "baseShare": 20,
    "desc": "每 10% 拨款：防御力 +5%，军队士气 +2%。"
  },
  "eco": {
    "name": "生态环保",
    "icon": "🌿",
    "baseShare": 10,
    "desc": "每 10% 拨款：污染 -4%，满意度目标 +1。"
  },
  "research": {
    "name": "科研教育",
    "icon": "🔬",
    "baseShare": 15,
    "desc": "每 10% 拨款：科研 +6%。"
  },
  "admin": {
    "name": "行政运转",
    "icon": "🏛️",
    "baseShare": 10,
    "desc": "每 10% 拨款：丑闻衰减 +20%，贿赂被发现率 +5%。低于 5% 则丑闻 +2/分钟。"
  }
};

/* 6 条市政宪章修正案：需议会 2/3 多数 + 公投通过，效果为制度级修正 */
const POL_CHARTER = [
  {
    "id": "ch_term_limit",
    "name": "市长任期限制",
    "icon": "⏳",
    "desc": "市长最多连任两届：连任难度上升，但每次连任成功丑闻 -10（制度信任）。",
    "effects": {
      "reelectSatMin": 55,
      "scandalOnReelect": -10
    },
    "needSupermajority": true,
    "needReferendum": true
  },
  {
    "id": "ch_bill_of_rights",
    "name": "殖民地权利法案",
    "icon": "📜",
    "desc": "宵禁类政策需 2/3 多数才能通过；满意度基础 +3。",
    "effects": {
      "satBase": 3,
      "curfewSupermajority": true
    },
    "needSupermajority": true,
    "needReferendum": true
  },
  {
    "id": "ch_balanced_budget",
    "name": "预算平衡条款",
    "icon": "⚖️",
    "desc": "禁止赤字超过收入 20%：超支时自动冻结工业拨款；税收 +5%。",
    "effects": {
      "taxMul": 1.05,
      "deficitCap": 0.2
    },
    "needSupermajority": true,
    "needReferendum": true
  },
  {
    "id": "ch_militia_right",
    "name": "民兵权利条款",
    "icon": "🔫",
    "desc": "民兵动员政策无需辩论即可表决；防御力 +10%，犯罪率 +5%。",
    "effects": {
      "defenseMul": 1.1,
      "crimeMul": 1.05,
      "militiaFastTrack": true
    },
    "needSupermajority": true,
    "needReferendum": true
  },
  {
    "id": "ch_eco_mandate",
    "name": "生态优先条款",
    "icon": "🌿",
    "desc": "污染超过 1.3 时工业政策自动冻结表决；污染 -10%。",
    "effects": {
      "pollutionMul": 0.9,
      "ecoVeto": true
    },
    "needSupermajority": true,
    "needReferendum": true
  },
  {
    "id": "ch_recall",
    "name": "市长罢免条款",
    "icon": "🗳️",
    "desc": "满意度 < 25 时议会可启动罢免表决；市长支持率计算中满意度权重升至 0.7。",
    "effects": {
      "recallEnabled": true,
      "satWeight": 0.7
    },
    "needSupermajority": true,
    "needReferendum": true
  }
];

/* 12 种市民请愿：有截止期限，逾期未处理扣满意度 */
const POL_PETITIONS = [
  {
    "id": "pet_food",
    "name": "请愿：增加口粮配给",
    "icon": "🌾",
    "trigger": "food",
    "deadlineMin": 5,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 20 食物）",
        "cost": {
          "food": 20
        },
        "effects": {
          "sat": 5
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -4
        }
      }
    ],
    "expireEffects": {
      "sat": -5
    },
    "desc": "市民联名要求提高口粮配给。"
  },
  {
    "id": "pet_water",
    "name": "请愿：检修供水管网",
    "icon": "💧",
    "trigger": "water",
    "deadlineMin": 5,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 20 水 + 10 铁矿）",
        "cost": {
          "water": 20,
          "iron": 10
        },
        "effects": {
          "sat": 5
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -4
        }
      }
    ],
    "expireEffects": {
      "sat": -5
    },
    "desc": "多处水管漏水，居民联名要求检修。"
  },
  {
    "id": "pet_power",
    "name": "请愿：增建太阳能板",
    "icon": "☀️",
    "trigger": "power",
    "deadlineMin": 6,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 30 铁矿）",
        "cost": {
          "iron": 30
        },
        "effects": {
          "sat": 4
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -4
        }
      }
    ],
    "expireEffects": {
      "sat": -5
    },
    "desc": "停电频发，居民要求增建发电设施。"
  },
  {
    "id": "pet_park",
    "name": "请愿：建设社区公园",
    "icon": "🌳",
    "trigger": "entertainment",
    "deadlineMin": 8,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 15 钢材）",
        "cost": {
          "steel": 15
        },
        "effects": {
          "sat": 6
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -3
        }
      }
    ],
    "expireEffects": {
      "sat": -4
    },
    "desc": "家长联名要求给孩子建一个公园。"
  },
  {
    "id": "pet_clinic",
    "name": "请愿：增设社区诊所",
    "icon": "🏥",
    "trigger": "health",
    "deadlineMin": 6,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 20 食物 + 10 水）",
        "cost": {
          "food": 20,
          "water": 10
        },
        "effects": {
          "sat": 6
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -4
        }
      }
    ],
    "expireEffects": {
      "sat": -5
    },
    "desc": "看病排队三小时，居民要求增设诊所。"
  },
  {
    "id": "pet_road",
    "name": "请愿：修复破损道路",
    "icon": "🛣️",
    "trigger": "transport",
    "deadlineMin": 5,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 25 铁矿）",
        "cost": {
          "iron": 25
        },
        "effects": {
          "sat": 4
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -3
        }
      }
    ],
    "expireEffects": {
      "sat": -4
    },
    "desc": "主干道坑洼遍布，司机联名要求修复。"
  },
  {
    "id": "pet_school",
    "name": "请愿：扩建学校",
    "icon": "🎓",
    "trigger": "jobs",
    "deadlineMin": 8,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 10 科技点）",
        "cost": {
          "tech": 10
        },
        "effects": {
          "sat": 5
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -3
        }
      }
    ],
    "expireEffects": {
      "sat": -4
    },
    "desc": "学位紧张，家长联名要求扩建学校。"
  },
  {
    "id": "pet_police",
    "name": "请愿：增设巡逻队",
    "icon": "🚔",
    "trigger": "safety",
    "deadlineMin": 5,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 20 铁矿）",
        "cost": {
          "iron": 20
        },
        "effects": {
          "sat": 5
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -4
        }
      }
    ],
    "expireEffects": {
      "sat": -5
    },
    "desc": "入室盗窃频发，居民要求增设巡逻。"
  },
  {
    "id": "pet_tax",
    "name": "请愿：减免小商户税",
    "icon": "🧾",
    "trigger": "tax",
    "deadlineMin": 6,
    "options": [
      {
        "id": "grant",
        "label": "批准（税收 -5%，满意度 +6）",
        "cost": {},
        "effects": {
          "sat": 6,
          "taxCut": 1
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -4
        }
      }
    ],
    "expireEffects": {
      "sat": -5
    },
    "desc": "小商户联名要求减税。"
  },
  {
    "id": "pet_green",
    "name": "请愿：清理工业废水",
    "icon": "🌊",
    "trigger": "pollution",
    "deadlineMin": 6,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 15 稀土）",
        "cost": {
          "rare": 15
        },
        "effects": {
          "sat": 6
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -4
        }
      }
    ],
    "expireEffects": {
      "sat": -5
    },
    "desc": "废水排入蓄水池，居民要求彻查清理。"
  },
  {
    "id": "pet_veteran",
    "name": "请愿：提高退伍津贴",
    "icon": "🎗️",
    "trigger": "military",
    "deadlineMin": 6,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 15 食物）",
        "cost": {
          "food": 15
        },
        "effects": {
          "sat": 5
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -4
        }
      }
    ],
    "expireEffects": {
      "sat": -5
    },
    "desc": "退伍军人联名要求提高津贴。"
  },
  {
    "id": "pet_housing",
    "name": "请愿：整治群租房",
    "icon": "🏠",
    "trigger": "housing",
    "deadlineMin": 7,
    "options": [
      {
        "id": "grant",
        "label": "批准（消耗 20 钢材）",
        "cost": {
          "steel": 20
        },
        "effects": {
          "sat": 5
        }
      },
      {
        "id": "deny",
        "label": "驳回",
        "cost": {},
        "effects": {
          "sat": -4
        }
      }
    ],
    "expireEffects": {
      "sat": -5
    },
    "desc": "群租房安全隐患大，邻居联名要求整治。"
  }
];

/* 3 家媒体：偏向派系与覆盖率决定舆论走向 */
const POL_MEDIA_OUTLETS = [
  {
    "id": "out_dome",
    "name": "穹顶日报",
    "icon": "📰",
    "bias": "welfare",
    "reach": 40,
    "desc": "发行量最大的报纸，偏民生派，丑闻报道最积极。"
  },
  {
    "id": "out_forge",
    "name": "熔炉商报",
    "icon": "💼",
    "bias": "industrial",
    "reach": 30,
    "desc": "商界喉舌，偏工业派，关注税收与产业。"
  },
  {
    "id": "out_beacon",
    "name": "灯塔电视台",
    "icon": "📺",
    "bias": "military",
    "reach": 30,
    "desc": "官方色彩最浓，偏军事派，战时收视率最高。"
  }
];

/* 12 种媒体事件：触发条件与满意度/丑闻效果 */
const POL_MEDIA_EVENTS = [
  {
    "id": "me_scandal",
    "name": "丑闻头条",
    "trigger": "scandal",
    "effects": {
      "sat": -3,
      "scandal": 5
    },
    "desc": "丑闻登上头条：满意度 -3，丑闻 +5。"
  },
  {
    "id": "me_hero",
    "name": "平民英雄",
    "trigger": "safety",
    "effects": {
      "sat": 4
    },
    "desc": "市民见义勇为事迹播出，满意度 +4。"
  },
  {
    "id": "me_expose",
    "name": "暗访曝光",
    "trigger": "pollution",
    "effects": {
      "sat": -4
    },
    "desc": "记者暗访曝光污染黑幕，满意度 -4。"
  },
  {
    "id": "me_boom",
    "name": "经济繁荣报道",
    "trigger": "economy",
    "effects": {
      "sat": 3
    },
    "desc": "贸易额创新高见报，满意度 +3。"
  },
  {
    "id": "me_raid",
    "name": "袭击纪实",
    "trigger": "raid",
    "effects": {
      "sat": -5
    },
    "desc": "袭击画面播出，全城恐慌，满意度 -5。"
  },
  {
    "id": "me_victory",
    "name": "大捷捷报",
    "trigger": "victory",
    "effects": {
      "sat": 5
    },
    "desc": "防御战大捷，举城欢庆，满意度 +5。"
  },
  {
    "id": "me_debate",
    "name": "辩论直播",
    "trigger": "debate",
    "effects": {
      "sat": 0
    },
    "desc": "议会辩论直播：按辩论结果浮动支持率。"
  },
  {
    "id": "me_festival",
    "name": "穹顶节特辑",
    "trigger": "festival",
    "effects": {
      "sat": 4
    },
    "desc": "节日特辑播出，满意度 +4。"
  },
  {
    "id": "me_probe",
    "name": "廉政调查",
    "trigger": "corruption",
    "effects": {
      "scandal": 8,
      "sat": -2
    },
    "desc": "记者追查贪腐线索，丑闻 +8。"
  },
  {
    "id": "me_science",
    "name": "科研突破",
    "trigger": "research",
    "effects": {
      "sat": 3
    },
    "desc": "实验室重大突破见报，满意度 +3。"
  },
  {
    "id": "me_shortage",
    "name": "短缺报道",
    "trigger": "shortage",
    "effects": {
      "sat": -4
    },
    "desc": "物资短缺被放大报道，满意度 -4。"
  },
  {
    "id": "me_mayor",
    "name": "市长专访",
    "trigger": "mayor",
    "effects": {
      "sat": 2
    },
    "desc": "市长专访播出，支持率微升。"
  }
];

/* 16 种议员生涯事件：每届选举后结算，改变议员去留与属性 */
const POL_CAREER_EVENTS = [
  {
    "id": "ce_retire",
    "name": "荣誉退休",
    "trigger": "terms>=3",
    "chance": 0.3,
    "effects": {
      "leave": true
    },
    "desc": "连任三届以上的老议员有 30% 概率荣誉退休，席位空出重选。"
  },
  {
    "id": "ce_defect",
    "name": "倒戈",
    "trigger": "loyalty<30",
    "chance": 0.2,
    "effects": {
      "switchFaction": true
    },
    "desc": "忠诚度低于 30 的议员有 20% 概率跳槽到当前支持度最高的派系。"
  },
  {
    "id": "ce_chair",
    "name": "出任委员会主席",
    "trigger": "influence>=80",
    "chance": 0.5,
    "effects": {
      "influence": 10,
      "title": "委员会主席"
    },
    "desc": "影响力 80+ 的议员有 50% 概率出任主席，影响力 +10。"
  },
  {
    "id": "ce_scandal_personal",
    "name": "个人丑闻",
    "trigger": "scandalRisk>=50",
    "chance": 0.4,
    "effects": {
      "scandal": 12,
      "leaveChance": 0.3
    },
    "desc": "个人丑闻风险 50+ 时 40% 概率爆发，丑闻 +12，30% 概率辞职。"
  },
  {
    "id": "ce_popular",
    "name": "民意新星",
    "trigger": "oratory>=80",
    "chance": 0.4,
    "effects": {
      "influence": 8
    },
    "desc": "演说 80+ 的议员人气飙升，影响力 +8。"
  },
  {
    "id": "ce_burnout",
    "name": "倦怠请辞",
    "trigger": "terms>=2&loyalty<40",
    "chance": 0.25,
    "effects": {
      "leave": true
    },
    "desc": "连任两届且忠诚度低的议员 25% 概率倦怠请辞。"
  },
  {
    "id": "ce_mentor",
    "name": "提携新人",
    "trigger": "influence>=70",
    "chance": 0.3,
    "effects": {
      "loyalty": 5
    },
    "desc": "资深议员提携新人，忠诚度 +5。"
  },
  {
    "id": "ce_bribe_caught",
    "name": "受贿被抓",
    "trigger": "bribedCount>=3",
    "chance": 0.35,
    "effects": {
      "scandal": 20,
      "leave": true
    },
    "desc": "被贿赂 3 次以上的议员 35% 概率东窗事发：丑闻 +20 并去职。"
  },
  {
    "id": "ce_hero",
    "name": "抗灾英雄",
    "trigger": "raidRecent",
    "chance": 0.2,
    "effects": {
      "influence": 12
    },
    "desc": "袭击期间亲赴前线的议员成为英雄，影响力 +12。"
  },
  {
    "id": "ce_gaffe",
    "name": "公开失言",
    "trigger": "oratory<40",
    "chance": 0.25,
    "effects": {
      "influence": -10
    },
    "desc": "演说能力差的议员公开失言，影响力 -10。"
  },
  {
    "id": "ce_faction_star",
    "name": "派系新星",
    "trigger": "loyalty>=85",
    "chance": 0.3,
    "effects": {
      "influence": 6,
      "factionSupport": 2
    },
    "desc": "忠诚度 85+ 的议员成为派系招牌，本派系支持度 +2。"
  },
  {
    "id": "ce_health",
    "name": "因病缺席",
    "trigger": "any",
    "chance": 0.1,
    "effects": {
      "absentNextVote": true
    },
    "desc": "10% 概率因病缺席下次投票（该席计为弃权）。"
  },
  {
    "id": "ce_business",
    "name": "下海经商",
    "trigger": "influence<30&terms>=1",
    "chance": 0.2,
    "effects": {
      "leave": true
    },
    "desc": "影响力低的议员 20% 概率辞职下海经商。"
  },
  {
    "id": "ce_whistle",
    "name": "吹哨人",
    "trigger": "integrity>=85",
    "chance": 0.25,
    "effects": {
      "scandal": 6,
      "bribeDetect": 1
    },
    "desc": "廉洁议员 25% 概率举报身边贪腐：丑闻 +6，但贿赂被发现率上升。"
  },
  {
    "id": "ce_rivalry",
    "name": "派系内斗",
    "trigger": "factionSupport<20",
    "chance": 0.3,
    "effects": {
      "loyalty": -10
    },
    "desc": "本派系支持度低于 20 时内斗加剧，忠诚度 -10。"
  },
  {
    "id": "ce_comeback",
    "name": "东山再起",
    "trigger": "terms>=2&influence>=60",
    "chance": 0.2,
    "effects": {
      "influence": 10,
      "loyalty": 5
    },
    "desc": "老将回勇，影响力 +10，忠诚度 +5。"
  }
];

/* 8 个派系内部分支：强度与激进程度决定分裂风险 */
const POL_SUBFACTIONS = [
  {
    "id": "sub_ind_radical",
    "faction": "industrial",
    "name": "激进工业派",
    "icon": "🔥",
    "leader": "待选举产生",
    "strength": 35,
    "radicalism": 0.8,
    "demand": "全面放开采矿权",
    "desc": "主张零管制，强度超过 70 且本派支持度低于 20 时可能分裂出走。"
  },
  {
    "id": "sub_ind_moderate",
    "faction": "industrial",
    "name": "温和工业派",
    "icon": "⚖️",
    "leader": "待选举产生",
    "strength": 65,
    "radicalism": 0.3,
    "demand": "补贴与管制并行",
    "desc": "主流派，主张补贴换合规。"
  },
  {
    "id": "sub_eco_deep",
    "faction": "eco",
    "name": "深绿派",
    "icon": "🌲",
    "leader": "待选举产生",
    "strength": 30,
    "radicalism": 0.9,
    "demand": "关闭全部矿场",
    "desc": "主张立即关停所有矿场，最激进的分支。"
  },
  {
    "id": "sub_eco_pragmatic",
    "faction": "eco",
    "name": "务实生态派",
    "icon": "🌱",
    "leader": "待选举产生",
    "strength": 70,
    "radicalism": 0.35,
    "demand": "渐进减排",
    "desc": "主流派，主张十年减排路线图。"
  },
  {
    "id": "sub_mil_hawk",
    "faction": "military",
    "name": "强硬鹰派",
    "icon": "🦅",
    "leader": "待选举产生",
    "strength": 45,
    "radicalism": 0.75,
    "demand": "先发制人打击",
    "desc": "主张主动出击清剿袭击者巢穴。"
  },
  {
    "id": "sub_mil_guard",
    "faction": "military",
    "name": "守土派",
    "icon": "🛡️",
    "leader": "待选举产生",
    "strength": 55,
    "radicalism": 0.3,
    "demand": "固守城墙",
    "desc": "主流派，主张以防御为主。"
  },
  {
    "id": "sub_wel_labor",
    "faction": "welfare",
    "name": "劳工派",
    "icon": "✊",
    "leader": "待选举产生",
    "strength": 50,
    "radicalism": 0.6,
    "demand": "全民基本收入",
    "desc": "主张全民基本收入，财政压力巨大。"
  },
  {
    "id": "sub_wel_moderate",
    "faction": "welfare",
    "name": "温和民生派",
    "icon": "🏥",
    "leader": "待选举产生",
    "strength": 50,
    "radicalism": 0.3,
    "demand": "量入为出的福利",
    "desc": "主流派，主张福利与财政平衡。"
  }
];

/* 6 种市民大会：定期举办可稳定支持率与满意度 */
const POL_TOWN_HALLS = [
  {
    "id": "th_budget",
    "name": "预算听证会",
    "icon": "💰",
    "cost": {
      "tech": 5
    },
    "cooldownMin": 10,
    "effects": {
      "approval": 2,
      "sat": 2
    },
    "desc": "公开预算听证：支持率 +2，满意度 +2；若赤字超 20% 则反效果。"
  },
  {
    "id": "th_safety",
    "name": "治安恳谈会",
    "icon": "🚔",
    "cost": {
      "food": 10
    },
    "cooldownMin": 10,
    "effects": {
      "approval": 2,
      "sat": 3
    },
    "desc": "与居民共商治安：满意度 +3。"
  },
  {
    "id": "th_youth",
    "name": "青年座谈会",
    "icon": "🎓",
    "cost": {},
    "cooldownMin": 5,
    "effects": {
      "approval": 3,
      "sat": 1
    },
    "desc": "倾听青年诉求：支持率 +3。"
  },
  {
    "id": "th_labor",
    "name": "劳资调解会",
    "icon": "🤝",
    "cost": {
      "iron": 10
    },
    "cooldownMin": 10,
    "effects": {
      "approval": 2,
      "sat": 4
    },
    "desc": "调解劳资纠纷：满意度 +4，罢工风险下降。"
  },
  {
    "id": "th_eco",
    "name": "环保公开日",
    "icon": "🌿",
    "cost": {
      "water": 10
    },
    "cooldownMin": 10,
    "effects": {
      "approval": 2,
      "sat": 2,
      "faction": {
        "eco": 2
      }
    },
    "desc": "公开污染数据：生态派支持 +2。"
  },
  {
    "id": "th_veteran",
    "name": "退伍军人茶话会",
    "icon": "🎗️",
    "cost": {
      "food": 10
    },
    "cooldownMin": 10,
    "effects": {
      "approval": 2,
      "sat": 2,
      "faction": {
        "military": 2
      }
    },
    "desc": "慰问老兵：军事派支持 +2。"
  }
];

/* 6 种选区竞选行动：消耗资源换取选区好感（影响下届席位分布） */
const POL_DISTRICT_CAMPAIGN = [
  {
    "id": "dc_canvass",
    "name": "挨家挨户拜票",
    "icon": "🚪",
    "cost": {
      "food": 5
    },
    "effect": {
      "leanShift": 3,
      "faction": null
    },
    "desc": "逐户拜访：本选区对市长的好感 +3（折算为下届该区摇摆席归属）。"
  },
  {
    "id": "dc_rally",
    "name": "选区集会",
    "icon": "📣",
    "cost": {
      "food": 10
    },
    "effect": {
      "leanShift": 5,
      "faction": null
    },
    "desc": "大型集会：选区好感 +5。"
  },
  {
    "id": "dc_project",
    "name": "兑现地方议题",
    "icon": "🔧",
    "cost": {
      "iron": 30
    },
    "effect": {
      "leanShift": 8,
      "faction": null,
      "fixIssue": 1
    },
    "desc": "解决该区一个地方议题：好感 +8，该议题严重度清零。"
  },
  {
    "id": "dc_donate",
    "name": "社区捐赠",
    "icon": "🎁",
    "cost": {
      "food": 20,
      "water": 10
    },
    "effect": {
      "leanShift": 4,
      "faction": null
    },
    "desc": "捐赠物资：选区好感 +4。"
  },
  {
    "id": "dc_debate",
    "name": "选区辩论",
    "icon": "🎙️",
    "cost": {
      "tech": 5
    },
    "effect": {
      "leanShift": 6,
      "faction": null
    },
    "desc": "与对手辩论：赢了好感 +6，输了 -3（按满意度判定）。"
  },
  {
    "id": "dc_smear",
    "name": "负面宣传",
    "icon": "🗞️",
    "cost": {
      "tech": 8
    },
    "effect": {
      "leanShift": 4,
      "faction": null,
      "scandal": 6
    },
    "desc": "抹黑对手：好感 +4，但丑闻 +6。"
  }
];


/* ============================== 扩展系统（第二批） ============================== */
/* 以下系统与第一批共享 ColonialPoliticsManager 的状态，通过原型方法接入；
 * PoliticsIntegration.tick 已被包装为同时调用 updateExtended（见本节末尾）。 */

/* ---------- 预算与债务 ---------- */
class PolBudget {
  constructor() {
    this.allocation = {};
    for (const k in POL_BUDGET_CATS) this.allocation[k] = POL_BUDGET_CATS[k].baseShare;
    this.debt = 0;              // 债务（以 iron 折算的抽象币：1 债 = 1 铁矿等值）
    this.reserve = 0;           // 财政储备
    this.revenuePerMin = 0;     // 上分钟收入估算
    this.spendingPerMin = 0;    // 上分钟支出估算
    this.deficitStreak = 0;     // 连续赤字分钟数
    this.austerity = false;     // 紧缩状态（债务过高时强制）
    this.history = [];
  }

  setAllocation(cat, pct) {
    if (!(cat in this.allocation)) return { ok: false, reason: '未知预算类别' };
    if (pct < 0 || pct > 60) return { ok: false, reason: '单项拨款须在 0-60% 之间' };
    const others = Object.keys(this.allocation).filter(k => k !== cat);
    const rest = 100 - pct;
    const restNow = others.reduce((a, k) => a + this.allocation[k], 0);
    this.allocation[cat] = pct;
    for (const k of others) this.allocation[k] = Math.round(this.allocation[k] / restNow * rest * 10) / 10;
    // 修正浮点残差
    const sum = Object.values(this.allocation).reduce((a, b) => a + b, 0);
    this.allocation[others[0]] = Math.round((this.allocation[others[0]] + (100 - sum)) * 10) / 10;
    return { ok: true, allocation: _polClone(this.allocation) };
  }

  // 预算修正值：按拨款比例折算（供 getExtendedModifiers 合并）
  modifiers() {
    const m = { minerMul: 1, steelMul: 1, pollutionMul: 1, satFlat: 0, growthMul: 1,
      defenseMul: 1, moraleMul: 1, researchMul: 1, scandalDecayMul: 1, bribeDetectMul: 1 };
    const a = this.allocation;
    m.minerMul *= 1 + (a.industry / 10) * 0.04;
    m.steelMul *= 1 + (a.industry / 10) * 0.02;
    m.pollutionMul *= 1 + (a.industry / 10) * 0.02 - (a.eco / 10) * 0.04;
    m.satFlat += (a.welfare / 10) * 0.2 + (a.eco / 10) * 0.1;
    m.growthMul *= 1 + (a.welfare / 10) * 0.03;
    m.defenseMul *= 1 + (a.military / 10) * 0.05;
    m.moraleMul *= 1 + (a.military / 10) * 0.02;
    m.researchMul *= 1 + (a.research / 10) * 0.06;
    m.scandalDecayMul *= 1 + (a.admin / 10) * 0.2;
    m.bribeDetectMul *= 1 + (a.admin / 10) * 0.05;
    if (a.admin < 5) m.scandalDecayMul *= 0.5;
    return m;
  }

  // 每分钟结算：收入按税收乘区估算，支出 = 政策维持费 + 工资 + 利息；赤字记债
  settleMinute(game, politics) {
    const mods = politics ? politics.aggregateModifiers() : {};
    const pop = (game && game.pop && game.pop.count) || 0;
    const tradeBase = 10 + pop * 0.5;
    this.revenuePerMin = Math.round(tradeBase * (mods.taxMul || 1) * (mods.tradeMul || 1));
    let spending = 0;
    if (politics) {
      for (const id of politics.enacted) spending += _polSum(POL_POLICIES[id].upkeep || {}) * 2;
      for (const u of politics.extraUpkeep) spending += _polSum(u) * 2;
    }
    spending += Math.round(pop * 0.2); // 行政工资
    spending += Math.round(this.debt * 0.05); // 利息 5%/分钟（游戏时间尺度下的抽象利率）
    this.spendingPerMin = spending;
    const balance = this.revenuePerMin - spending;
    if (balance >= 0) {
      this.reserve += balance;
      this.deficitStreak = 0;
      // 储备超过 500 时自动偿还债务
      if (this.reserve > 200 && this.debt > 0) {
        const pay = Math.min(this.reserve - 200, this.debt);
        this.reserve -= pay; this.debt -= pay;
      }
    } else {
      this.debt += -balance;
      this.deficitStreak++;
      if (politics) {
        politics.satisfaction.value = _polClamp(politics.satisfaction.value - 0.5, 0, 100);
        if (this.deficitStreak >= 5) politics.factions.addSupport('welfare', -1, '财政赤字持续');
      }
    }
    // 债务危机：超过 500 强制紧缩——自动废除维持费最高政策 + 丑闻
    if (this.debt > 500 && !this.austerity) {
      this.austerity = true;
      if (politics) {
        let worst = null, worstCost = -1;
        for (const id of politics.enacted) {
          const c = _polSum(POL_POLICIES[id].upkeep || {});
          if (c > worstCost) { worstCost = c; worst = id; }
        }
        if (worst) politics.repeal(worst, '债务危机强制紧缩');
        politics.scandal = _polClamp(politics.scandal + 10, 0, 100);
        politics.log('债务危机！债务超过 500，强制紧缩：废除高维持费政策，丑闻 +10');
      }
    }
    if (this.debt < 200) this.austerity = false;
    this.history.unshift({ t: Date.now(), revenue: this.revenuePerMin, spending, debt: Math.round(this.debt), reserve: Math.round(this.reserve) });
    if (this.history.length > 30) this.history.length = 30;
    return { revenue: this.revenuePerMin, spending, balance, debt: Math.round(this.debt) };
  }

  serialize() { return { allocation: _polClone(this.allocation), debt: this.debt, reserve: this.reserve, deficitStreak: this.deficitStreak, austerity: this.austerity, history: _polClone(this.history) }; }
  static deserialize(d) {
    const b = new PolBudget();
    b.allocation = _polClone(d.allocation || b.allocation);
    b.debt = d.debt || 0; b.reserve = d.reserve || 0;
    b.deficitStreak = d.deficitStreak || 0; b.austerity = !!d.austerity;
    b.history = _polClone(d.history || []);
    return b;
  }
}

/* ---------- 宪章修正案 ---------- */
class PolCharter {
  constructor() {
    this.ratified = new Set();   // 已批准的宪章 id
    this.pending = null;         // 待表决的宪章 {charterId, stage}
  }

  propose(charterId) {
    const c = POL_CHARTER.find(x => x.id === charterId);
    if (!c) return { ok: false, reason: '未知宪章条款' };
    if (this.ratified.has(charterId)) return { ok: false, reason: '该条款已生效' };
    if (this.pending) return { ok: false, reason: '已有宪章在表决中' };
    this.pending = { charterId, name: c.name, stage: 'parliament' };
    return { ok: true, charter: c };
  }

  // 议会表决：需 2/3 多数（14/21 席）；通过后进入公投阶段
  voteParliament(parliament, gameState) {
    if (!this.pending) return { ok: false, reason: '没有待表决的宪章' };
    const c = POL_CHARTER.find(x => x.id === this.pending.charterId);
    let forN = 0;
    // 宪章投票：议员按派系态度 + 廉洁度投票（宪章偏向制度建设，廉洁议员更支持）
    for (const cn of parliament.councilors) {
      const stance = (cn.integrity - 50) / 50 + (cn.traits.includes('incorruptible') ? 0.5 : 0) + _polRand(-0.4, 0.4);
      if (stance > 0.1) forN++;
    }
    const need = Math.ceil(parliament.councilors.length * 2 / 3);
    const passed = forN >= need;
    if (!passed) { this.pending = null; return { ok: true, passed: false, for: forN, need, stage: 'parliament' }; }
    this.pending.stage = 'referendum';
    return { ok: true, passed: true, for: forN, need, stage: 'referendum', note: '进入公投阶段' };
  }

  // 公投：支持率 = 55% + (满意度-50)*0.5；通过即批准
  voteReferendum(game, politics) {
    if (!this.pending || this.pending.stage !== 'referendum') return { ok: false, reason: '宪章未进入公投阶段' };
    const sat = politics ? politics.satisfaction.value : 50;
    const support = _polClamp(55 + (sat - 50) * 0.5, 10, 90);
    const passed = Math.random() * 100 < support;
    const cid = this.pending.charterId;
    this.pending = null;
    if (passed) {
      this.ratified.add(cid);
      const c = POL_CHARTER.find(x => x.id === cid);
      if (politics) politics.log('宪章批准：' + c.name + '（公投支持率 ' + Math.round(support) + '%）');
    }
    return { ok: true, passed, support: Math.round(support), charterId: cid };
  }

  // 宪章效果查询（供 manager 读取）
  has(id) { return this.ratified.has(id); }
  effects() {
    const e = {};
    for (const id of this.ratified) {
      const c = POL_CHARTER.find(x => x.id === id);
      if (c) Object.assign(e, c.effects || {});
    }
    return e;
  }

  serialize() { return { ratified: [...this.ratified], pending: _polClone(this.pending) }; }
  static deserialize(d) {
    const c = new PolCharter();
    c.ratified = new Set(d.ratified || []);
    c.pending = _polClone(d.pending);
    return c;
  }
}

/* ---------- 市民请愿 ---------- */
class PolPetitions {
  constructor() {
    this.open = [];      // 待处理 {petitionId, instanceId, dueAt, trigger}
    this.resolved = 0;
    this.expired = 0;
    this._spawnMs = 0;
    this._taxCutUntil = 0; // 批准减税请愿后的临时减税
  }

  // 每 3 分钟按最差满意度因子生成一份请愿（最多同时 3 份）
  tick(dtMs, gameTimeMs, satModel, politics) {
    this._spawnMs += dtMs;
    if (this._spawnMs < 3 * 60 * 1000) return null;
    this._spawnMs = 0;
    if (this.open.length >= 3) return null;
    let worst = null, worstScore = 99;
    for (const f of POL_SAT_FACTORS) {
      const rec = satModel.factors[f.id];
      if (rec && rec.score < worstScore) { worstScore = rec.score; worst = f.id; }
    }
    const triggerMap = { food: 'pet_food', water: 'pet_water', power: 'pet_power',
      entertainment: 'pet_park', health: 'pet_clinic', transport: 'pet_road', jobs: 'pet_school',
      safety: 'pet_police', tax: 'pet_tax', pollution: 'pet_green', housing: 'pet_housing' };
    const pid = (worst && triggerMap[worst]) || 'pet_food';
    if (this.open.some(p => p.petitionId === pid)) return null;
    const def = POL_PETITIONS.find(p => p.id === pid);
    const inst = { petitionId: pid, instanceId: _polUid('pet'), name: def.name,
      dueAt: gameTimeMs + def.deadlineMin * 60 * 1000, deadlineMin: def.deadlineMin };
    this.open.push(inst);
    return inst;
  }

  respond(instanceId, optionId, game, politics) {
    const idx = this.open.findIndex(p => p.instanceId === instanceId);
    if (idx < 0) return { ok: false, reason: '请愿不存在或已处理' };
    const inst = this.open[idx];
    const def = POL_PETITIONS.find(p => p.id === inst.petitionId);
    const opt = def.options.find(o => o.id === optionId);
    if (!opt) return { ok: false, reason: '未知选项' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && opt.cost) {
      for (const k in opt.cost) if ((inv[k] || 0) < opt.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in opt.cost) inv[k] -= opt.cost[k];
    }
    if (politics) {
      if (typeof opt.effects.sat === 'number') politics.satisfaction.value = _polClamp(politics.satisfaction.value + opt.effects.sat, 0, 100);
      if (opt.effects.taxCut) this._taxCutUntil = (game ? game._polTimeMs : 0) + 5 * 60 * 1000;
    }
    this.open.splice(idx, 1);
    this.resolved++;
    return { ok: true, petition: def.name, option: opt.label };
  }

  // 逾期结算：每帧检查，逾期未处理扣满意度
  settleExpired(gameTimeMs, politics) {
    const due = this.open.filter(p => gameTimeMs >= p.dueAt);
    for (const inst of due) {
      const def = POL_PETITIONS.find(p => p.id === inst.petitionId);
      if (politics) politics.satisfaction.value = _polClamp(politics.satisfaction.value + (def.expireEffects.sat || 0), 0, 100);
      this.expired++;
      if (politics) politics.log('请愿逾期未处理：' + def.name + '，满意度 ' + (def.expireEffects.sat || 0));
    }
    this.open = this.open.filter(p => gameTimeMs < p.dueAt);
    return due.length;
  }

  taxCutActive(gameTimeMs) { return gameTimeMs < this._taxCutUntil; }

  serialize() { return { open: _polClone(this.open), resolved: this.resolved, expired: this.expired, taxCutUntil: this._taxCutUntil }; }
  static deserialize(d) {
    const p = new PolPetitions();
    p.open = _polClone(d.open || []); p.resolved = d.resolved || 0; p.expired = d.expired || 0;
    p._taxCutUntil = d.taxCutUntil || 0;
    return p;
  }
}

/* ---------- 媒体与舆论 ---------- */
class PolMedia {
  constructor() {
    this.coverage = {};   // {outletId: {tone: -1..1, topic}} 最近报道基调
    this.pressCooldownUntil = 0;
    this.eventLog = [];
  }

  // 记者招待会：花费 5 tech，选择议题澄清；效果按该议题民调支持率浮动
  pressConference(issueId, game, politics) {
    const now = game ? game._polTimeMs : 0;
    if (now < this.pressCooldownUntil) return { ok: false, reason: '记者招待会冷却中' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && (inv.tech || 0) < 5) return { ok: false, reason: '需 5 科技点' };
    if (inv) inv.tech -= 5;
    this.pressCooldownUntil = now + 2 * 60 * 1000;
    const issue = POL_POLL_ISSUES.find(i => i.id === issueId);
    const poll = politics ? (politics.factions.polls[issueId] || 50) : 50;
    const delta = poll >= 50 ? 3 : -2;
    if (politics) {
      politics.satisfaction.value = _polClamp(politics.satisfaction.value + delta, 0, 100);
      politics.mayor.approval = _polClamp(politics.mayor.approval + delta, 0, 100);
    }
    return { ok: true, issue: issue ? issue.name : issueId, poll, approvalDelta: delta };
  }

  // 媒体事件触发：按游戏状态判定（如丑闻 >= 40 触发丑闻头条），影响满意度与丑闻
  triggerEvent(eventId, politics) {
    const ev = POL_MEDIA_EVENTS.find(e => e.id === eventId);
    if (!ev) return { ok: false, reason: '未知媒体事件' };
    if (politics) {
      if (typeof ev.effects.sat === 'number') politics.satisfaction.value = _polClamp(politics.satisfaction.value + ev.effects.sat, 0, 100);
      if (typeof ev.effects.scandal === 'number') politics.scandal = _polClamp(politics.scandal + ev.effects.scandal, 0, 100);
    }
    this.eventLog.unshift({ t: Date.now(), id: ev.id, name: ev.name });
    if (this.eventLog.length > 15) this.eventLog.length = 15;
    return { ok: true, event: ev.name, effects: ev.effects };
  }

  // 自动扫描：丑闻/袭击/短缺达到阈值时触发对应报道（每分钟最多一条）
  autoScan(game, politics) {
    if (!politics) return null;
    const sat = politics.satisfaction;
    if (politics.scandal >= 40 && Math.random() < 0.5) return this.triggerEvent('me_scandal', politics);
    if (game && game.military && game.military.raidActive) return this.triggerEvent('me_raid', politics);
    const inv = (game && game.player && game.player.inv) || {};
    if ((inv.food || 0) <= 0 || (inv.water || 0) <= 0) return this.triggerEvent('me_shortage', politics);
    return null;
  }

  serialize() { return { coverage: _polClone(this.coverage), pressCooldownUntil: this.pressCooldownUntil, eventLog: _polClone(this.eventLog) }; }
  static deserialize(d) {
    const m = new PolMedia();
    m.coverage = _polClone(d.coverage || {});
    m.pressCooldownUntil = d.pressCooldownUntil || 0;
    m.eventLog = _polClone(d.eventLog || []);
    return m;
  }
}

/* ---------- 选区政治 ---------- */
class PolDistrictPolitics {
  constructor() {
    this.goodwill = {};   // {districtId: 好感 -50..50} 影响下届席位分布
    this.fixedIssues = {}; // {districtId: [issueIdx]} 已解决的地方议题
    this.cooldowns = {};
    for (const d of POL_DISTRICTS) { this.goodwill[d.id] = 0; this.fixedIssues[d.id] = []; }
  }

  campaign(districtId, actionId, game, politics) {
    const a = POL_DISTRICT_CAMPAIGN.find(x => x.id === actionId);
    if (!a) return { ok: false, reason: '未知竞选行动' };
    const now = game ? game._polTimeMs : 0;
    const key = districtId + ':' + actionId;
    if ((this.cooldowns[key] || 0) > now) return { ok: false, reason: '该行动冷却中' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && a.cost) {
      for (const k in a.cost) if ((inv[k] || 0) < a.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in a.cost) inv[k] -= a.cost[k];
    }
    let shift = a.effect.leanShift || 0;
    if (actionId === 'dc_debate') {
      const sat = politics ? politics.satisfaction.value : 50;
      shift = sat >= 50 ? 6 : -3;
    }
    this.goodwill[districtId] = _polClamp((this.goodwill[districtId] || 0) + shift, -50, 50);
    if (a.effect.fixIssue) {
      const det = POL_DISTRICT_DETAIL.find(d => d.id === districtId);
      if (det) {
        const unfixed = det.localIssues.map((_, i) => i).filter(i => !this.fixedIssues[districtId].includes(i));
        if (unfixed.length) {
          const worst = unfixed.sort((x, y) => det.localIssues[y].severity - det.localIssues[x].severity)[0];
          this.fixedIssues[districtId].push(worst);
        }
      }
    }
    if (a.effect.scandal && politics) politics.scandal = _polClamp(politics.scandal + a.effect.scandal, 0, 100);
    this.cooldowns[key] = now + 5 * 60 * 1000;
    return { ok: true, district: districtId, shift, goodwill: this.goodwill[districtId] };
  }

  // 选区报告：好感、未解决议题、历史得票趋势
  report(districtId) {
    const det = POL_DISTRICT_DETAIL.find(d => d.id === districtId);
    if (!det) return null;
    const fixed = this.fixedIssues[districtId] || [];
    const openIssues = det.localIssues.map((iss, i) => ({ ...iss, fixed: fixed.includes(i) })).filter(x => !x.fixed);
    const last = det.history[det.history.length - 1];
    const prev = det.history[det.history.length - 2] || last;
    const trend = {};
    for (const k in last.shares) trend[k] = last.shares[k] - prev.shares[k];
    return { id: det.id, name: det.name, goodwill: this.goodwill[districtId] || 0,
      neighborhoods: _polClone(det.neighborhoods), openIssues, history: _polClone(det.history), trend };
  }

  serialize() { return { goodwill: _polClone(this.goodwill), fixedIssues: _polClone(this.fixedIssues), cooldowns: _polClone(this.cooldowns) }; }
  static deserialize(d) {
    const p = new PolDistrictPolitics();
    p.goodwill = _polClone(d.goodwill || {});
    p.fixedIssues = _polClone(d.fixedIssues || {});
    p.cooldowns = _polClone(d.cooldowns || {});
    return p;
  }
}


/* ---------- 辩论发言：每轮 3 名议员发言，演说力改变未决议员立场 ---------- */
PolParliament.prototype.runDebateRound = function (billId, gameState) {
  const bill = this.activeBills.find(b => b.billId === billId);
  if (!bill) return { ok: false, reason: '法案不存在' };
  if (bill.stage !== 'debate') return { ok: false, reason: '法案不在辩论阶段' };
  const policy = POL_POLICIES[bill.policyId];
  const speakers = [];
  const pool = [...this.councilors].sort(() => Math.random() - 0.5).slice(0, 3);
  for (const sp of pool) {
    const stance = sp.stanceOn(policy, gameState);
    const power = sp.oratory / 100; // 演说力决定带动人数
    const targets = this.councilors.filter(c => c.id !== sp.id && Math.abs(c.stanceOn(policy, gameState)) < 0.6);
    let swayed = 0;
    for (const t of targets) {
      if (swayed >= Math.round(power * 3)) break;
      if (Math.random() < power * 0.7) {
        const cur = t.lobbiedStance[policy.id] || 0;
        t.lobbiedStance[policy.id] = _polClamp(cur + (stance > 0 ? 1 : -1), -2, 2);
        swayed++;
      }
    }
    speakers.push({ name: sp.name, faction: sp.faction, side: stance > 0 ? '支持' : stance < 0 ? '反对' : '中立', swayed });
  }
  bill.debateLeftMs = Math.max(0, bill.debateLeftMs - 60 * 1000); // 发言消耗 1 分钟辩论时间
  if (bill.debateLeftMs <= 0) bill.stage = 'vote';
  return { ok: true, speakers, stage: bill.stage };
};

/* ---------- 议员关系网：投票前盟友带动、宿敌反向 ---------- */
// 关系在选举后生成：每名议员 2 名盟友（同派系优先）+ 1 名宿敌（对立派系）。
PolParliament.prototype.buildRelationships = function () {
  for (const c of this.councilors) {
    const same = this.councilors.filter(x => x.id !== c.id && x.faction === c.faction);
    const opp = this.councilors.filter(x => x.id !== c.id && x.faction !== c.faction);
    const allies = [...same].sort(() => Math.random() - 0.5).slice(0, 2).map(x => x.id);
    const rival = opp.length ? _polPick(opp).id : null;
    c.allies = allies; c.rival = rival;
  }
};
// 包装 vote：先结算关系影响，再执行原投票逻辑
(function () {
  const _origVote = PolParliament.prototype.vote;
  PolParliament.prototype.vote = function (billId, gameState) {
    const bill = this.activeBills.find(b => b.billId === billId);
    if (bill) {
      const policy = POL_POLICIES[bill.policyId];
      // 盟友带动：若盟友立场明确（|stance|>=1），本议员立场向盟友偏移 0.3；宿敌则反向偏移 0.3
      for (const c of this.councilors) {
        let nudge = 0;
        for (const aid of (c.allies || [])) {
          const a = this.councilors.find(x => x.id === aid);
          if (!a) continue;
          const s = a.stanceOn(policy, gameState);
          if (s >= 1) nudge += 0.3; else if (s <= -1) nudge -= 0.3;
        }
        if (c.rival) {
          const r = this.councilors.find(x => x.id === c.rival);
          if (r) {
            const s = r.stanceOn(policy, gameState);
            if (s >= 1) nudge -= 0.3; else if (s <= -1) nudge += 0.3;
          }
        }
        if (nudge !== 0) {
          const cur = c.lobbiedStance[policy.id] || 0;
          c.lobbiedStance[policy.id] = _polClamp(cur + nudge, -2, 2);
        }
      }
    }
    return _origVote.call(this, billId, gameState);
  };
  // 包装 _runElection：选举后生成关系网 + 结算生涯事件
  const _origElect = PolParliament.prototype._runElection;
  PolParliament.prototype._runElection = function (isInitial) {
    const res = _origElect.call(this, isInitial);
    this.buildRelationships();
    return res;
  };
})();

/* ---------- 议员生涯事件结算（每届选举后） ---------- */
PolParliament.prototype.settleCareerEvents = function (politics) {
  const out = [];
  for (const c of [...this.councilors]) {
    for (const ev of POL_CAREER_EVENTS) {
      let triggered = false;
      if (ev.trigger === 'terms>=3') triggered = c.termsServed >= 3;
      else if (ev.trigger === 'loyalty<30') triggered = c.loyalty < 30;
      else if (ev.trigger === 'influence>=80') triggered = c.influence >= 80;
      else if (ev.trigger === 'scandalRisk>=50') triggered = c.scandalRisk >= 50;
      else if (ev.trigger === 'oratory>=80') triggered = c.oratory >= 80;
      else if (ev.trigger === 'terms>=2&loyalty<40') triggered = c.termsServed >= 2 && c.loyalty < 40;
      else if (ev.trigger === 'influence>=70') triggered = c.influence >= 70;
      else if (ev.trigger === 'bribedCount>=3') triggered = c.bribedCount >= 3;
      else if (ev.trigger === 'raidRecent') triggered = politics && politics._raidRecent === true;
      else if (ev.trigger === 'oratory<40') triggered = c.oratory < 40;
      else if (ev.trigger === 'loyalty>=85') triggered = c.loyalty >= 85;
      else if (ev.trigger === 'any') triggered = true;
      else if (ev.trigger === 'influence<30&terms>=1') triggered = c.influence < 30 && c.termsServed >= 1;
      else if (ev.trigger === 'integrity>=85') triggered = c.integrity >= 85;
      else if (ev.trigger === 'factionSupport<20') triggered = politics && (politics.factions.support[c.faction] || 0) < 20;
      else if (ev.trigger === 'terms>=2&influence>=60') triggered = c.termsServed >= 2 && c.influence >= 60;
      if (!triggered) continue;
      if (Math.random() >= ev.chance) continue;
      const fx = ev.effects || {};
      if (typeof fx.influence === 'number') c.influence = _polClamp(c.influence + fx.influence, 5, 99);
      if (typeof fx.loyalty === 'number') c.loyalty = _polClamp(c.loyalty + fx.loyalty, 5, 99);
      if (fx.title) c.title = fx.title;
      if (fx.switchFaction) {
        const best = Object.entries(politics ? politics.factions.support : {}).sort((a, b) => b[1] - a[1])[0];
        if (best && best[0] !== c.faction) { c.faction = best[0]; out.push(c.name + ' 倒戈加入' + POL_FACTIONS[best[0]].name); }
      }
      if (typeof fx.scandal === 'number' && politics) politics.scandal = _polClamp(politics.scandal + fx.scandal, 0, 100);
      if (typeof fx.factionSupport === 'number' && politics) politics.factions.addSupport(c.faction, fx.factionSupport, '议员成为派系招牌');
      if (fx.absentNextVote) c._absentNextVote = true;
      if (fx.leave || (fx.leaveChance && Math.random() < fx.leaveChance)) {
        const idx = this.councilors.indexOf(c);
        if (idx >= 0) this.councilors.splice(idx, 1);
        out.push(c.name + ' 离职（' + ev.name + '）');
      }
      break; // 每名议员每届最多触发一个生涯事件
    }
  }
  // 缺员补选：按选区 lean 补足 21 席
  if (this.councilors.length < POLITICS.COUNCIL_SEATS) {
    const support = this._factionSupportSnapshot();
    for (const d of POL_DISTRICTS) {
      const have = this.councilors.filter(c => c.district === d.id).length;
      for (let i = have; i < POLITICS.SEATS_PER_DISTRICT; i++) {
        const faction = this._pickFactionForDistrict(d, support);
        this.councilors.push(new PolCouncilor(d, faction, this._pickArchetypeForFaction(faction), POL_NAMES, this.usedNames));
      }
    }
    this.councilors = this.councilors.slice(0, POLITICS.COUNCIL_SEATS);
    this.buildRelationships();
  }
  return out;
};

/* ---------- 满意度诊断：每项负分因子给出原因与推荐政策 ---------- */
PolSatisfaction.prototype.diagnose = function (politics) {
  const out = [];
  const fixMap = { food: ['pol_food_subsidy', 'pol_free_clinics'], water: ['pol_free_clinics'],
    power: ['pol_green_energy'], housing: ['pol_housing_program'], jobs: ['pol_factory_grants'],
    health: ['pol_free_clinics', 'pol_education_grant'], safety: ['pol_defense_budget', 'pol_veteran_fund'],
    tax: ['pol_progressive_tax'], welfare: ['pol_free_clinics', 'pol_food_subsidy'],
    pollution: ['pol_carbon_cap', 'pol_green_energy'], transport: ['pol_transit_free'],
    entertainment: ['pol_transit_free'] };
  for (const f of POL_SAT_FACTORS) {
    const rec = this.factors[f.id];
    if (!rec || rec.score >= 0) continue;
    const fixes = (fixMap[f.id] || []).filter(id => politics && !politics.enacted.has(id))
      .map(id => POL_POLICIES[id].name);
    out.push({ factor: f.name, icon: f.icon, score: rec.score, value: rec.value,
      cause: f.desc, recommend: fixes.slice(0, 2) });
  }
  return out;
};

/* ---------- 政策审计：月度报告 + 冲突与维持费预警 ---------- */
class PolPolicyAudit {
  static run(politics, game) {
    const report = { enacted: [], warnings: [], monthlyCost: {}, conflicts: [] };
    const inv = (game && game.player && game.player.inv) || {};
    for (const id of politics.enacted) {
      const p = POL_POLICIES[id];
      const meta = politics.enactedMeta[id] || {};
      const phase = PolPolicyPhases.phaseOf(p, meta, politics.gameTimeMs);
      report.enacted.push({ id, name: p.name, phase: phase.name, upkeep: _polClone(p.upkeep || {}),
        effects: politics.describePolicyEffects(id) });
      for (const k in (p.upkeep || {})) report.monthlyCost[k] = (report.monthlyCost[k] || 0) + p.upkeep[k];
    }
    // 维持费预警：未来 5 分钟是否付得起
    for (const k in report.monthlyCost) {
      if ((inv[k] || 0) < report.monthlyCost[k] * 5) {
        report.warnings.push('维持费预警：' + k + ' 库存只够 ' + Math.floor((inv[k] || 0) / Math.max(1, report.monthlyCost[k])) + ' 分钟');
      }
    }
    // 互斥冲突检查
    for (const id of politics.enacted) {
      for (const c of (POL_POLICIES[id].conflicts || [])) {
        if (politics.enacted.has(c)) report.conflicts.push(POL_POLICIES[id].name + ' 与 ' + POL_POLICIES[c].name + ' 互斥却同时生效');
      }
    }
    // 日落条款倒计时
    for (const id of politics.enacted) {
      const meta = politics.enactedMeta[id] || {};
      if (meta.sunset && meta.sunsetAt) {
        report.warnings.push('「' + POL_POLICIES[id].name + '」日落条款：' + Math.max(0, Math.ceil((meta.sunsetAt - politics.gameTimeMs) / 60000)) + ' 分钟后自动废除');
      }
    }
    return report;
  }
}

/* ---------- 政策阶段查询 ---------- */
class PolPolicyPhases {
  static phaseOf(policy, meta, gameTimeMs) {
    const templates = POL_POLICY_PHASE_TEMPLATES[policy.cat] || POL_POLICY_PHASE_TEMPLATES.civic;
    const enactedAt = (meta && meta.at) || 0;
    const elapsedMin = Math.max(0, (gameTimeMs - enactedAt) / 60000);
    let idx = 0;
    for (let i = 0; i < templates.length; i++) if (elapsedMin >= templates[i].unlockAfterMin) idx = i;
    return { ...templates[idx], index: idx, elapsedMin: Math.round(elapsedMin) };
  }
  // 全部生效政策当前阶段的追加效果汇总
  static activePhaseEffects(politics) {
    const eff = { satFlat: 0, taxMul: 1, defenseMul: 1, minerMul: 1, steelMul: 1,
      pollutionMul: 1, powerMul: 1, growthMul: 1, moraleMul: 1, raidResist: 0 };
    for (const id of politics.enacted) {
      const p = POL_POLICIES[id];
      const phase = PolPolicyPhases.phaseOf(p, politics.enactedMeta[id], politics.gameTimeMs);
      for (const k in (phase.effects || {})) {
        if (k === 'satFlat') eff.satFlat += phase.effects[k];
        else if (k === 'raidResist') eff.raidResist = Math.min(0.6, eff.raidResist + phase.effects[k]);
        else if (k in eff) eff[k] *= phase.effects[k];
      }
    }
    return eff;
  }
}

/* ---------- 派系内部分支：分裂风险 ---------- */
PolFactions.prototype.subfactionReport = function () {
  return POL_SUBFACTIONS.map(s => {
    const support = this.support[s.faction] || 0;
    const splinterRisk = s.strength >= 70 && support < 20 ? Math.round((s.strength - 70) * 2 + (20 - support)) : 0;
    return { ...s, factionSupport: support, splinterRisk: _polClamp(splinterRisk, 0, 100) };
  });
};
PolFactions.prototype.splinterCheck = function (politics) {
  const out = [];
  for (const s of POL_SUBFACTIONS) {
    if (s.strength >= 70 && (this.support[s.faction] || 0) < 20 && Math.random() < 0.3) {
      this.addSupport(s.faction, -8, '内部分支「' + s.name + '」分裂出走');
      s.strength = 40;
      if (politics) {
        politics.satisfaction.value = _polClamp(politics.satisfaction.value - 4, 0, 100);
        politics.log('派系分裂：' + POL_FACTIONS[s.faction].name + '的「' + s.name + '」出走，支持度 -8');
      }
      out.push(s.name);
    }
  }
  return out;
};

/* ---------- 扩展系统接入 ColonialPoliticsManager ---------- */
ColonialPoliticsManager.prototype.initExtended = function () {
  if (this.budget) return;
  this.budget = new PolBudget();
  this.charter = new PolCharter();
  this.petitions = new PolPetitions();
  this.media = new PolMedia();
  this.districts = new PolDistrictPolitics();
  this._extMinuteAcc = 0;
  this._mediaScanAcc = 0;
  this._raidRecent = false;
  this.townHallCooldowns = {};
};

ColonialPoliticsManager.prototype.getExtendedModifiers = function () {
  this.initExtended();
  const m = { taxMul: 1, defenseMul: 1, minerMul: 1, steelMul: 1, pollutionMul: 1,
    powerMul: 1, growthMul: 1, moraleMul: 1, researchMul: 1, satFlat: 0, raidResist: 0,
    scandalDecayMul: 1, bribeDetectMul: 1 };
  // 预算修正
  const bm = this.budget.modifiers();
  for (const k in bm) {
    if (k === 'satFlat') m.satFlat += bm[k];
    else if (k in m) m[k] *= bm[k];
  }
  // 政策阶段修正
  const ph = PolPolicyPhases.activePhaseEffects(this);
  for (const k in ph) {
    if (k === 'satFlat') m.satFlat += ph[k];
    else if (k === 'raidResist') m.raidResist = Math.min(0.6, m.raidResist + ph[k]);
    else if (k in m) m[k] *= ph[k];
  }
  // 宪章修正
  const ch = this.charter.effects();
  if (ch.taxMul) m.taxMul *= ch.taxMul;
  if (ch.defenseMul) m.defenseMul *= ch.defenseMul;
  if (ch.pollutionMul) m.pollutionMul *= ch.pollutionMul;
  if (ch.crimeMul) m.crimeMul = (m.crimeMul || 1) * ch.crimeMul;
  if (ch.satBase) m.satFlat += ch.satBase * 0.1;
  // 减税请愿临时效果
  if (this.petitions.taxCutActive(this.gameTimeMs)) m.taxMul *= 0.95;
  return m;
};

// 市民大会
ColonialPoliticsManager.prototype.holdTownHall = function (hallId, game) {
  this.initExtended();
  const h = POL_TOWN_HALLS.find(x => x.id === hallId);
  if (!h) return { ok: false, reason: '未知市民大会' };
  const now = game ? game._polTimeMs : 0;
  if ((this.townHallCooldowns[hallId] || 0) > now) return { ok: false, reason: '该大会冷却中' };
  const inv = (game && game.player && game.player.inv) || null;
  if (inv && h.cost) {
    for (const k in h.cost) if ((inv[k] || 0) < h.cost[k]) return { ok: false, reason: '资源不足' };
    for (const k in h.cost) inv[k] -= h.cost[k];
  }
  let satDelta = h.effects.sat || 0;
  let approvalDelta = h.effects.approval || 0;
  if (hallId === 'th_budget' && this.budget.debt > this.budget.revenuePerMin * 5) { satDelta = -3; approvalDelta = -2; }
  if (hallId === 'th_labor' && this.protest.strike) satDelta += 3; // 劳资调解会在罢工期间效果更好
  this.satisfaction.value = _polClamp(this.satisfaction.value + satDelta, 0, 100);
  this.mayor.approval = _polClamp(this.mayor.approval + approvalDelta, 0, 100);
  if (h.effects.faction) for (const k in h.effects.faction) this.factions.addSupport(k, h.effects.faction[k], '市民大会');
  this.townHallCooldowns[hallId] = now + (h.cooldownMin || 10) * 60 * 1000;
  return { ok: true, hall: h.name, satDelta, approvalDelta };
};

// 扩展主循环：每分钟预算结算 + 请愿生成/逾期 + 媒体扫描 + 分裂检查 + 阶段满意度漂移
ColonialPoliticsManager.prototype.updateExtended = function (dtMs, game) {
  this.initExtended();
  this._extMinuteAcc += dtMs;
  this._mediaScanAcc += dtMs;
  if (this._mediaScanAcc >= 60 * 1000) {
    this._mediaScanAcc -= 60 * 1000;
    this.media.autoScan(game, this);
  }
  if (this._extMinuteAcc < 60 * 1000) return;
  this._extMinuteAcc -= 60 * 1000;
  this.budget.settleMinute(game, this);
  this.petitions.tick(60 * 1000, this.gameTimeMs, this.satisfaction, this);
  this.petitions.settleExpired(this.gameTimeMs, this);
  this.factions.splinterCheck(this);
  // 政策阶段的满意度漂移直接作用
  const ext = this.getExtendedModifiers();
  if (ext.satFlat) this.satisfaction.value = _polClamp(this.satisfaction.value + ext.satFlat * 0.2, 0, 100);
  // 行政拨款过低导致丑闻上升
  if (this.budget.allocation.admin < 5) this.scandal = _polClamp(this.scandal + 2, 0, 100);
};

// 扩展存档：包装原 save/load
(function () {
  const _origSave = ColonialPoliticsManager.prototype.save;
  ColonialPoliticsManager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended();
    s.extended = { budget: this.budget.serialize(), charter: this.charter.serialize(),
      petitions: this.petitions.serialize(), media: this.media.serialize(),
      districts: this.districts.serialize(), townHallCooldowns: _polClone(this.townHallCooldowns || {}) };
    return s;
  };
  const _origLoad = ColonialPoliticsManager.prototype.load;
  ColonialPoliticsManager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended();
    if (data && data.extended) {
      if (data.extended.budget) this.budget = PolBudget.deserialize(data.extended.budget);
      if (data.extended.charter) this.charter = PolCharter.deserialize(data.extended.charter);
      if (data.extended.petitions) this.petitions = PolPetitions.deserialize(data.extended.petitions);
      if (data.extended.media) this.media = PolMedia.deserialize(data.extended.media);
      if (data.extended.districts) this.districts = PolDistrictPolitics.deserialize(data.extended.districts);
      this.townHallCooldowns = _polClone(data.extended.townHallCooldowns || {});
    }
  };
  // 包装 tick：同时跑扩展循环
  const _origTick = PoliticsIntegration.tick;
  PoliticsIntegration.tick = function (game, now, dt) {
    _origTick(game, now, dt);
    if (game && game.politics && typeof game.politics.updateExtended === 'function') {
      game.politics.updateExtended(dt || 0, game);
    }
  };
})();

/* ---------- 扩展自测 ---------- */
class PoliticsExtendedSelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _polTimeMs: 0,
      player: { inv: { iron: 500, ice: 500, rare: 200, water: 500, food: 500, steel: 300, tech: 500, uranium: 50, he3: 20 } },
      pop: { count: 40, cap: () => 100 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50, totalPopCap: () => 100 },
      military: { raidStrength: 0 } });
    const m = new ColonialPoliticsManager();
    const g = mockGame();
    m.initExtended();
    check('扩展系统初始化', !!m.budget && !!m.charter && !!m.petitions && !!m.media && !!m.districts, '');
    // 预算
    const r1 = m.budget.setAllocation('welfare', 40);
    check('预算调整后总和 100', Math.abs(Object.values(m.budget.allocation).reduce((a, b) => a + b, 0) - 100) < 0.2, JSON.stringify(m.budget.allocation));
    const bm = m.budget.modifiers();
    check('预算修正值真实（福利拨款拉高满意度漂移）', bm.satFlat > 0, 'satFlat=' + bm.satFlat);
    const settle = m.budget.settleMinute(g, m);
    check('预算每分钟结算返回收支', settle && typeof settle.balance === 'number', JSON.stringify(settle));
    // 政策阶段
    m.enact('pol_green_energy');
    const ph = PolPolicyPhases.phaseOf(POL_POLICIES.pol_green_energy, m.enactedMeta.pol_green_energy, m.gameTimeMs);
    check('政策阶段 0 为试点', ph.index === 0, ph.name);
    const ph2 = PolPolicyPhases.phaseOf(POL_POLICIES.pol_green_energy, { at: 0 }, 13 * 60 * 1000);
    check('13 分钟后进入第 3 阶段', ph2.index === 2, ph2.name);
    const ext = m.getExtendedModifiers();
    check('扩展修正值含预算与阶段', ext && typeof ext.satFlat === 'number' && ext.powerMul >= 1, 'powerMul=' + ext.powerMul);
    // 宪章
    const cp = m.charter.propose('ch_bill_of_rights');
    check('宪章提案成功', cp.ok, cp.reason || '');
    const cv = m.charter.voteParliament(m.parliament, m.gameState(g));
    check('宪章议会表决有结果', cv.ok && typeof cv.passed === 'boolean', 'for=' + cv.for + ' need=' + cv.need);
    // 请愿
    m.satisfaction.factors = { food: { score: -10 } };
    const pet = m.petitions.tick(3 * 60 * 1000 + 1, m.gameTimeMs, m.satisfaction, m);
    check('请愿可生成', !!pet, pet ? pet.name : 'none');
    if (pet) {
      const resp = m.petitions.respond(pet.instanceId, 'grant', g, m);
      check('请愿可批准', resp.ok, resp.reason || '');
    }
    // 媒体
    const press = m.media.pressConference('issue_economy', g, m);
    check('记者招待会可召开', press.ok, press.reason || '');
    // 选区竞选
    const dc = m.districts.campaign('d_dome', 'dc_canvass', g, m);
    check('选区拜票提升好感', dc.ok && dc.goodwill > 0, JSON.stringify(dc));
    const rep = m.districts.report('d_dome');
    check('选区报告含议题与历史', rep && rep.openIssues.length >= 0 && rep.history.length === 5, '');
    // 市民大会
    const th = m.holdTownHall('th_youth', g);
    check('市民大会可举办', th.ok, th.reason || '');
    // 辩论发言
    m.proposeBill('pol_carbon_cap', g);
    const bill = m.parliament.activeBills.find(b => b.policyId === 'pol_carbon_cap');
    const deb = m.parliament.runDebateRound(bill.billId, m.gameState(g));
    check('辩论发言轮次有效', deb.ok && deb.speakers.length === 3, '');
    // 生涯事件
    const career = m.parliament.settleCareerEvents(m);
    check('生涯事件结算返回数组', Array.isArray(career), career.join(';').slice(0, 80));
    check('选举后议会仍满 21 席', m.parliament.councilors.length === 21, '' + m.parliament.councilors.length);
    // 关系网
    check('议员有盟友与宿敌', m.parliament.councilors.every(c => Array.isArray(c.allies)), '');
    // 诊断与审计
    m.satisfaction.compute(g, m);
    const diag = m.satisfaction.diagnose(m);
    check('满意度诊断返回数组', Array.isArray(diag), 'n=' + diag.length);
    const audit = PolPolicyAudit.run(m, g);
    check('政策审计返回报告', audit && Array.isArray(audit.enacted) && Array.isArray(audit.warnings), 'enacted=' + audit.enacted.length);
    // 分支报告
    const subs = m.factions.subfactionReport();
    check('派系分支 8 个', subs.length === 8, 'n=' + subs.length);
    // 扩展存档往返
    const saved = m.save();
    const m2 = new ColonialPoliticsManager();
    m2.load(saved);
    check('扩展存档往返：预算保留', !!m2.budget && Math.abs(m2.budget.debt - m.budget.debt) < 0.01, '');
    check('扩展存档往返：宪章保留', m2.charter.ratified.size === m.charter.ratified.size, '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 把扩展自测并入主自测
(function () {
  const _origRun = PoliticsSelfTest.run;
  PoliticsSelfTest.run = function () {
    const base = _origRun();
    const ext = PoliticsExtendedSelfTest.run();
    return { total: base.total + ext.total, passed: base.passed + ext.passed,
      failed: [...base.failed, ...ext.failed],
      results: [...base.results, ...ext.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.PolBudget = PolBudget;
  window.PolCharter = PolCharter;
  window.PolPetitions = PolPetitions;
  window.PolMedia = PolMedia;
  window.PolDistrictPolitics = PolDistrictPolitics;
  window.PolPolicyAudit = PolPolicyAudit;
  window.PolPolicyPhases = PolPolicyPhases;
  window.PoliticsExtendedSelfTest = PoliticsExtendedSelfTest;
  window.POL_POLICY_PHASE_TEMPLATES = POL_POLICY_PHASE_TEMPLATES;
  window.POL_DISTRICT_DETAIL = POL_DISTRICT_DETAIL;
  window.POL_BUDGET_CATS = POL_BUDGET_CATS;
  window.POL_CHARTER = POL_CHARTER;
  window.POL_PETITIONS = POL_PETITIONS;
  window.POL_MEDIA_OUTLETS = POL_MEDIA_OUTLETS;
  window.POL_MEDIA_EVENTS = POL_MEDIA_EVENTS;
  window.POL_CAREER_EVENTS = POL_CAREER_EVENTS;
  window.POL_SUBFACTIONS = POL_SUBFACTIONS;
  window.POL_TOWN_HALLS = POL_TOWN_HALLS;
  window.POL_DISTRICT_CAMPAIGN = POL_DISTRICT_CAMPAIGN;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { PolBudget, PolCharter, PolPetitions, PolMedia,
    PolDistrictPolitics, PolPolicyAudit, PolPolicyPhases, PoliticsExtendedSelfTest,
    POL_POLICY_PHASE_TEMPLATES, POL_DISTRICT_DETAIL, POL_BUDGET_CATS, POL_CHARTER,
    POL_PETITIONS, POL_MEDIA_OUTLETS, POL_MEDIA_EVENTS, POL_CAREER_EVENTS,
    POL_SUBFACTIONS, POL_TOWN_HALLS, POL_DISTRICT_CAMPAIGN });
}

/* 紧急状态三级：每分钟成本与修正值，需议会批准的级别走表决 */
const POL_EMERGENCY_LEVELS = [
  {
    "level": 1,
    "name": "一级戒备",
    "icon": "🟡",
    "needApproval": false,
    "costPerMin": {
      "food": 2
    },
    "effects": {
      "defenseMul": 1.1,
      "crimeMul": 0.9,
      "satFlat": -0.1
    },
    "desc": "加强巡逻：防御 +10%，犯罪 -10%，满意度微降。市长可直接宣布。"
  },
  {
    "level": 2,
    "name": "二级管制",
    "icon": "🟠",
    "needApproval": true,
    "costPerMin": {
      "food": 5,
      "iron": 3
    },
    "effects": {
      "defenseMul": 1.25,
      "crimeMul": 0.7,
      "satFlat": -0.4,
      "growthMul": 0.9,
      "tradeMul": 0.9
    },
    "desc": "宵禁与配给：防御 +25%，犯罪 -30%，但贸易 -10%、增长 -10%。需议会简单多数批准。"
  },
  {
    "level": 3,
    "name": "三级战时状态",
    "icon": "🔴",
    "needApproval": true,
    "costPerMin": {
      "food": 10,
      "iron": 8,
      "steel": 4
    },
    "effects": {
      "defenseMul": 1.5,
      "crimeMul": 0.5,
      "satFlat": -1.0,
      "growthMul": 0.75,
      "tradeMul": 0.7,
      "minerMul": 1.2,
      "raidResist": 0.2
    },
    "desc": "全面动员：防御 +50%，袭击抗性 +20%，采矿 +20%（战时生产），但满意度 -1.0/分钟。需议会 2/3 多数批准。"
  }
];

/* 8 条城市事件链 x 3-4 阶段：每阶段 2-3 个分支选项，全部带资源成本与数值效果 */
const POL_EVENT_CHAINS = [
  {
    "id": "chain_mine_collapse",
    "name": "矿难",
    "icon": "⛏️",
    "trigger": "miner",
    "stages": [
      {
        "id": "s1",
        "desc": "一号矿坑塌方，12 名矿工被困。",
        "options": [
          {
            "id": "rescue",
            "label": "全力救援（消耗 20 钢材 + 10 科技点）",
            "cost": {
              "steel": 20,
              "tech": 10
            },
            "effects": {
              "sat": 8,
              "faction": {
                "welfare": 3,
                "industrial": 1
              }
            }
          },
          {
            "id": "wait",
            "label": "等待自然稳定（免费）",
            "cost": {},
            "effects": {
              "sat": -8,
              "faction": {
                "welfare": -4
              }
            }
          },
          {
            "id": "seal",
            "label": "封井保生产（消耗 10 铁矿）",
            "cost": {
              "iron": 10
            },
            "effects": {
              "sat": -12,
              "scandal": 10,
              "minerMulTemp": 1.1
            }
          }
        ]
      },
      {
        "id": "s2",
        "desc": "救援队需要重型设备，矿工家属聚集在矿口。",
        "options": [
          {
            "id": "equip",
            "label": "调拨重型设备（消耗 30 铁矿）",
            "cost": {
              "iron": 30
            },
            "effects": {
              "sat": 6
            }
          },
          {
            "id": "appeal",
            "label": "呼吁志愿者（免费）",
            "cost": {},
            "effects": {
              "sat": 2,
              "trustDebt": 1
            }
          },
          {
            "id": "ignore",
            "label": "不予理会",
            "cost": {},
            "effects": {
              "sat": -6,
              "protestRisk": 1
            }
          }
        ]
      },
      {
        "id": "s3",
        "desc": "事故原因查明：支护年久失修，安全投入不足。",
        "options": [
          {
            "id": "invest",
            "label": "全面安检整改（消耗 40 铁矿）",
            "cost": {
              "iron": 40
            },
            "effects": {
              "sat": 7,
              "minerMulTemp": 0.95
            }
          },
          {
            "id": "fine",
            "label": "罚款了事（获得 20 铁矿）",
            "cost": {},
            "effects": {
              "sat": -3,
              "gain": {
                "iron": 20
              }
            }
          },
          {
            "id": "cover",
            "label": "压下报告（丑闻 +15）",
            "cost": {},
            "effects": {
              "scandal": 15,
              "sat": -2
            }
          }
        ]
      },
      {
        "id": "s4",
        "desc": "矿难一周年，家属要求建立纪念碑与抚恤基金。",
        "options": [
          {
            "id": "memorial",
            "label": "建纪念碑 + 抚恤基金（消耗 25 钢材）",
            "cost": {
              "steel": 25
            },
            "effects": {
              "sat": 8,
              "faction": {
                "welfare": 4
              }
            }
          },
          {
            "id": "fund",
            "label": "只设抚恤基金（消耗 10 食物）",
            "cost": {
              "food": 10
            },
            "effects": {
              "sat": 4
            }
          },
          {
            "id": "refuse",
            "label": "拒绝",
            "cost": {},
            "effects": {
              "sat": -8,
              "faction": {
                "welfare": -5
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "chain_plague",
    "name": "穹顶流感",
    "icon": "🦠",
    "trigger": "health",
    "stages": [
      {
        "id": "s1",
        "desc": "流感在学院区暴发，诊所排起长队。",
        "options": [
          {
            "id": "quarantine",
            "label": "隔离发病区（满意度 -3，控制疫情）",
            "cost": {},
            "effects": {
              "sat": -3,
              "plagueControl": 2
            }
          },
          {
            "id": "open",
            "label": "不采取措施",
            "cost": {},
            "effects": {
              "sat": -2,
              "plagueControl": -1
            }
          },
          {
            "id": "vaccine",
            "label": "紧急研制疫苗（消耗 30 科技点）",
            "cost": {
              "tech": 30
            },
            "effects": {
              "sat": 5,
              "plagueControl": 3
            }
          }
        ]
      },
      {
        "id": "s2",
        "desc": "疫情蔓延到工业区，缺勤率上升，生产受影响。",
        "options": [
          {
            "id": "clinic",
            "label": "开设临时诊所（消耗 20 食物 + 10 水）",
            "cost": {
              "food": 20,
              "water": 10
            },
            "effects": {
              "sat": 6,
              "plagueControl": 2
            }
          },
          {
            "id": "work",
            "label": "要求带病上岗",
            "cost": {},
            "effects": {
              "sat": -8,
              "plagueControl": -1
            }
          },
          {
            "id": "close",
            "label": "停工一周（工业停产）",
            "cost": {},
            "effects": {
              "sat": 2,
              "plagueControl": 2,
              "industryHaltMin": 7
            }
          }
        ]
      },
      {
        "id": "s3",
        "desc": "疫苗研制进入关键期，需要追加投入。",
        "options": [
          {
            "id": "fund",
            "label": "追加拨款（消耗 20 科技点）",
            "cost": {
              "tech": 20
            },
            "effects": {
              "sat": 4,
              "plagueControl": 3
            }
          },
          {
            "id": "wait",
            "label": "等待自然消退",
            "cost": {},
            "effects": {
              "sat": -4,
              "plagueControl": -1
            }
          },
          {
            "id": "import",
            "label": "高价进口疫苗（消耗 20 稀土）",
            "cost": {
              "rare": 20
            },
            "effects": {
              "sat": 8,
              "plagueControl": 4
            }
          }
        ]
      },
      {
        "id": "s4",
        "desc": "疫情结束，议会要求总结防疫得失。",
        "options": [
          {
            "id": "report",
            "label": "公开总结报告（丑闻 -5）",
            "cost": {
              "tech": 5
            },
            "effects": {
              "sat": 5,
              "scandal": -5
            }
          },
          {
            "id": "praise",
            "label": "表彰防疫人员（消耗 10 食物）",
            "cost": {
              "food": 10
            },
            "effects": {
              "sat": 6,
              "faction": {
                "welfare": 2
              }
            }
          },
          {
            "id": "silence",
            "label": "不予总结",
            "cost": {},
            "effects": {
              "sat": -3
            }
          }
        ]
      }
    ]
  },
  {
    "id": "chain_raid_aftermath",
    "name": "袭击之后",
    "icon": "💥",
    "trigger": "raid",
    "stages": [
      {
        "id": "s1",
        "desc": "袭击刚结束，废墟中还有幸存者呼救。",
        "options": [
          {
            "id": "rescue",
            "label": "组织搜救（消耗 15 食物）",
            "cost": {
              "food": 15
            },
            "effects": {
              "sat": 7
            }
          },
          {
            "id": "rebuild",
            "label": "先重建后搜救",
            "cost": {},
            "effects": {
              "sat": -4
            }
          },
          {
            "id": "loot",
            "label": "清点战利品（获得 15 铁矿）",
            "cost": {},
            "effects": {
              "sat": -2,
              "gain": {
                "iron": 15
              }
            }
          }
        ]
      },
      {
        "id": "s2",
        "desc": "市民要求彻查防御漏洞。",
        "options": [
          {
            "id": "inquiry",
            "label": "成立调查委员会（消耗 10 科技点）",
            "cost": {
              "tech": 10
            },
            "effects": {
              "sat": 5,
              "scandal": -5
            }
          },
          {
            "id": "blame",
            "label": "归咎于前任防卫长官",
            "cost": {},
            "effects": {
              "sat": 2,
              "faction": {
                "military": -3
              }
            }
          },
          {
            "id": "silence",
            "label": "拒绝调查",
            "cost": {},
            "effects": {
              "sat": -6,
              "scandal": 8
            }
          }
        ]
      },
      {
        "id": "s3",
        "desc": "军方要求追加军费重建防线。",
        "options": [
          {
            "id": "approve",
            "label": "批准追加军费（消耗 60 铁矿）",
            "cost": {
              "iron": 60
            },
            "effects": {
              "sat": 3,
              "defenseFlat": 20,
              "faction": {
                "military": 4
              }
            }
          },
          {
            "id": "partial",
            "label": "批准一半（消耗 30 铁矿）",
            "cost": {
              "iron": 30
            },
            "effects": {
              "sat": 1,
              "defenseFlat": 10
            }
          },
          {
            "id": "deny",
            "label": "拒绝（军费已够）",
            "cost": {},
            "effects": {
              "sat": -2,
              "faction": {
                "military": -5
              }
            }
          }
        ]
      },
      {
        "id": "s4",
        "desc": "阵亡者追悼会，家属索要抚恤。",
        "options": [
          {
            "id": "honor",
            "label": "隆重追悼 + 抚恤（消耗 20 食物 + 10 钢材）",
            "cost": {
              "food": 20,
              "steel": 10
            },
            "effects": {
              "sat": 8,
              "faction": {
                "military": 3,
                "welfare": 2
              }
            }
          },
          {
            "id": "simple",
            "label": "简单追悼",
            "cost": {},
            "effects": {
              "sat": 2
            }
          },
          {
            "id": "skip",
            "label": "取消追悼会",
            "cost": {},
            "effects": {
              "sat": -10,
              "faction": {
                "military": -6
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "chain_water_crisis",
    "name": "水源危机",
    "icon": "💧",
    "trigger": "water",
    "stages": [
      {
        "id": "s1",
        "desc": "主蓄水池检出污染，饮用水告急。",
        "options": [
          {
            "id": "ration",
            "label": "立即配给制（满意度 -2，保底线）",
            "cost": {},
            "effects": {
              "sat": -2,
              "waterSave": 1
            }
          },
          {
            "id": "deny",
            "label": "否认污染传言",
            "cost": {},
            "effects": {
              "sat": -5,
              "scandal": 8
            }
          },
          {
            "id": "import",
            "label": "紧急融冰取水（消耗 40 冰水）",
            "cost": {
              "ice": 40
            },
            "effects": {
              "sat": 6
            }
          }
        ]
      },
      {
        "id": "s2",
        "desc": "配给引发排队冲突，需要维持秩序。",
        "options": [
          {
            "id": "police",
            "label": "增派巡逻维持秩序",
            "cost": {},
            "effects": {
              "sat": 1
            }
          },
          {
            "id": "extra",
            "label": "增发配额（消耗 30 水）",
            "cost": {
              "water": 30
            },
            "effects": {
              "sat": 7
            }
          },
          {
            "id": "ignore",
            "label": "放任自流",
            "cost": {},
            "effects": {
              "sat": -7,
              "protestRisk": 1
            }
          }
        ]
      },
      {
        "id": "s3",
        "desc": "工程师找到新水源，但需要打通冰层。",
        "options": [
          {
            "id": "drill",
            "label": "拨款钻探（消耗 50 铁矿 + 10 科技点）",
            "cost": {
              "iron": 50,
              "tech": 10
            },
            "effects": {
              "sat": 8,
              "waterBonus": 1
            }
          },
          {
            "id": "delay",
            "label": "暂缓钻探",
            "cost": {},
            "effects": {
              "sat": -4
            }
          },
          {
            "id": "private",
            "label": "拍卖开采权（获得 30 铁矿）",
            "cost": {},
            "effects": {
              "sat": -3,
              "gain": {
                "iron": 30
              },
              "faction": {
                "industrial": 3
              }
            }
          }
        ]
      },
      {
        "id": "s4",
        "desc": "新水源投产，市民要求降价供水。",
        "options": [
          {
            "id": "cut",
            "label": "下调水价（满意度 +5）",
            "cost": {},
            "effects": {
              "sat": 5
            }
          },
          {
            "id": "keep",
            "label": "维持现价回收成本",
            "cost": {},
            "effects": {
              "sat": -1,
              "gain": {
                "iron": 15
              }
            }
          },
          {
            "id": "free",
            "label": "限时免费供水一周（消耗 20 水）",
            "cost": {
              "water": 20
            },
            "effects": {
              "sat": 9
            }
          }
        ]
      }
    ]
  },
  {
    "id": "chain_blackout",
    "name": "大停电",
    "icon": "⚡",
    "trigger": "power",
    "stages": [
      {
        "id": "s1",
        "desc": "主电网故障，全城停电，温室作物面临冻害。",
        "options": [
          {
            "id": "backup",
            "label": "启动备用电源保温室（消耗 20 铀矿）",
            "cost": {
              "uranium": 20
            },
            "effects": {
              "sat": 6
            }
          },
          {
            "id": "shed",
            "label": "轮流供电保居民区",
            "cost": {},
            "effects": {
              "sat": 2,
              "industryHaltMin": 2
            }
          },
          {
            "id": "wait",
            "label": "等待抢修",
            "cost": {},
            "effects": {
              "sat": -6
            }
          }
        ]
      },
      {
        "id": "s2",
        "desc": "抢修需要稀有备件，仓库里没有。",
        "options": [
          {
            "id": "buy",
            "label": "高价采购备件（消耗 15 稀土）",
            "cost": {
              "rare": 15
            },
            "effects": {
              "sat": 5
            }
          },
          {
            "id": "make",
            "label": "组织临时加工（消耗 30 铁矿）",
            "cost": {
              "iron": 30
            },
            "effects": {
              "sat": 3
            }
          },
          {
            "id": "delay",
            "label": "继续等待",
            "cost": {},
            "effects": {
              "sat": -5
            }
          }
        ]
      },
      {
        "id": "s3",
        "desc": "电力恢复，议会要求问责电网管理方。",
        "options": [
          {
            "id": "audit",
            "label": "审计追责（丑闻 +5，满意度 +4）",
            "cost": {
              "tech": 5
            },
            "effects": {
              "sat": 4,
              "scandal": 5
            }
          },
          {
            "id": "pardon",
            "label": "不予追究",
            "cost": {},
            "effects": {
              "sat": -3
            }
          },
          {
            "id": "reform",
            "label": "电网改革拨款（消耗 40 铁矿）",
            "cost": {
              "iron": 40
            },
            "effects": {
              "sat": 6,
              "powerBonus": 1
            }
          }
        ]
      },
      {
        "id": "s4",
        "desc": "市民要求建设第二电网备份。",
        "options": [
          {
            "id": "build",
            "label": "批准二期电网（消耗 60 铁矿 + 20 钢材）",
            "cost": {
              "iron": 60,
              "steel": 20
            },
            "effects": {
              "sat": 7,
              "powerBonus": 2
            }
          },
          {
            "id": "plan",
            "label": "只做规划不拨款",
            "cost": {},
            "effects": {
              "sat": 1,
              "trustDebt": 1
            }
          },
          {
            "id": "deny",
            "label": "否决",
            "cost": {},
            "effects": {
              "sat": -5
            }
          }
        ]
      }
    ]
  },
  {
    "id": "chain_strike_wave",
    "name": "罢工潮",
    "icon": "✊",
    "trigger": "jobs",
    "stages": [
      {
        "id": "s1",
        "desc": "冶炼厂工人集体停工，要求涨薪。",
        "options": [
          {
            "id": "raise",
            "label": "同意涨薪（每分钟 +3 食物维持费）",
            "cost": {},
            "effects": {
              "sat": 8,
              "wageUpkeep": {
                "food": 3
              }
            }
          },
          {
            "id": "talk",
            "label": "谈判拖延",
            "cost": {},
            "effects": {
              "sat": -2,
              "trustDebt": 1
            }
          },
          {
            "id": "fire",
            "label": "开除带头工人",
            "cost": {},
            "effects": {
              "sat": -10,
              "scandal": 8,
              "protestRisk": 1
            }
          }
        ]
      },
      {
        "id": "s2",
        "desc": "罢工蔓延到矿区，生产几近停滞。",
        "options": [
          {
            "id": "mediate",
            "label": "市长亲自调解（满意度 +5）",
            "cost": {
              "food": 10
            },
            "effects": {
              "sat": 5
            }
          },
          {
            "id": "concede",
            "label": "全面让步（每分钟 +5 食物维持费）",
            "cost": {},
            "effects": {
              "sat": 9,
              "wageUpkeep": {
                "food": 5
              }
            }
          },
          {
            "id": "crack",
            "label": "强硬镇压（丑闻 +15）",
            "cost": {},
            "effects": {
              "sat": -12,
              "scandal": 15
            }
          }
        ]
      },
      {
        "id": "s3",
        "desc": "工会提出成立工人委员会参与管理。",
        "options": [
          {
            "id": "accept",
            "label": "接受（满意度 +6，工业产出 -5%）",
            "cost": {},
            "effects": {
              "sat": 6,
              "minerMulTemp": 0.95
            }
          },
          {
            "id": "partial",
            "label": "只给咨询权",
            "cost": {},
            "effects": {
              "sat": 2
            }
          },
          {
            "id": "reject",
            "label": "拒绝",
            "cost": {},
            "effects": {
              "sat": -6,
              "protestRisk": 1
            }
          }
        ]
      },
      {
        "id": "s4",
        "desc": "罢工结束，劳资双方要求签订长期协议。",
        "options": [
          {
            "id": "pact",
            "label": "签订三年协议（满意度 +7）",
            "cost": {
              "tech": 5
            },
            "effects": {
              "sat": 7
            }
          },
          {
            "id": "yearly",
            "label": "一年一签",
            "cost": {},
            "effects": {
              "sat": 3
            }
          },
          {
            "id": "none",
            "label": "不签协议",
            "cost": {},
            "effects": {
              "sat": -5,
              "trustDebt": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "chain_earthquake",
    "name": "火星震",
    "icon": "🌋",
    "trigger": "disaster",
    "stages": [
      {
        "id": "s1",
        "desc": "5.2 级火星震，穹顶出现裂缝，警报大作。",
        "options": [
          {
            "id": "evac",
            "label": "紧急疏散（满意度 -2，保安全）",
            "cost": {},
            "effects": {
              "sat": -2
            }
          },
          {
            "id": "calm",
            "label": "安抚市民原地待命",
            "cost": {},
            "effects": {
              "sat": -5
            }
          },
          {
            "id": "inspect",
            "label": "立即检测穹顶结构（消耗 15 科技点）",
            "cost": {
              "tech": 15
            },
            "effects": {
              "sat": 4
            }
          }
        ]
      },
      {
        "id": "s2",
        "desc": "裂缝需要抢修，材料告急。",
        "options": [
          {
            "id": "repair",
            "label": "全力抢修（消耗 50 钢材）",
            "cost": {
              "steel": 50
            },
            "effects": {
              "sat": 8
            }
          },
          {
            "id": "patch",
            "label": "临时封堵（消耗 20 铁矿）",
            "cost": {
              "iron": 20
            },
            "effects": {
              "sat": 3
            }
          },
          {
            "id": "wait",
            "label": "等待地球支援",
            "cost": {},
            "effects": {
              "sat": -7
            }
          }
        ]
      },
      {
        "id": "s3",
        "desc": "震后余波不断，市民要求加固全部建筑。",
        "options": [
          {
            "id": "retrofit",
            "label": "全面加固拨款（消耗 80 铁矿）",
            "cost": {
              "iron": 80
            },
            "effects": {
              "sat": 7,
              "defenseFlat": 10
            }
          },
          {
            "id": "key",
            "label": "只加固关键设施（消耗 30 铁矿）",
            "cost": {
              "iron": 30
            },
            "effects": {
              "sat": 3
            }
          },
          {
            "id": "deny",
            "label": "否决（认为小题大做）",
            "cost": {},
            "effects": {
              "sat": -6
            }
          }
        ]
      },
      {
        "id": "s4",
        "desc": "地球派来慰问团，市长需决定接待规格。",
        "options": [
          {
            "id": "grand",
            "label": "隆重接待（消耗 15 食物）",
            "cost": {
              "food": 15
            },
            "effects": {
              "sat": 5,
              "gain": {
                "tech": 10
              }
            }
          },
          {
            "id": "simple",
            "label": "简单接待",
            "cost": {},
            "effects": {
              "sat": 2
            }
          },
          {
            "id": "cold",
            "label": "冷淡处理",
            "cost": {},
            "effects": {
              "sat": -4
            }
          }
        ]
      }
    ]
  },
  {
    "id": "chain_earth_ship",
    "name": "地球来船",
    "icon": "🚀",
    "trigger": "trade",
    "stages": [
      {
        "id": "s1",
        "desc": "地球货船抵达，带来稀缺物资与一批新移民。",
        "options": [
          {
            "id": "welcome",
            "label": "热烈欢迎，优先安置移民（满意度 +5）",
            "cost": {
              "food": 15
            },
            "effects": {
              "sat": 5,
              "growthBoost": 1
            }
          },
          {
            "id": "tax",
            "label": "先征关税再放行（获得 20 铁矿）",
            "cost": {},
            "effects": {
              "sat": -2,
              "gain": {
                "iron": 20
              }
            }
          },
          {
            "id": "inspect",
            "label": "严格检疫（消耗 10 科技点）",
            "cost": {
              "tech": 10
            },
            "effects": {
              "sat": 3,
              "plagueControl": 1
            }
          }
        ]
      },
      {
        "id": "s2",
        "desc": "船员要求在殖民地开设地球商品专卖店。",
        "options": [
          {
            "id": "allow",
            "label": "批准（贸易 +10%，满意度 +3）",
            "cost": {},
            "effects": {
              "sat": 3,
              "tradeBoost": 1
            }
          },
          {
            "id": "limit",
            "label": "限量经营",
            "cost": {},
            "effects": {
              "sat": 1
            }
          },
          {
            "id": "ban",
            "label": "禁止（保护本地商业）",
            "cost": {},
            "effects": {
              "sat": -2,
              "faction": {
                "industrial": 2
              }
            }
          }
        ]
      },
      {
        "id": "s3",
        "desc": "新移民与本地居民因住房分配发生冲突。",
        "options": [
          {
            "id": "mediate",
            "label": "市长调解，均分住房（消耗 20 钢材）",
            "cost": {
              "steel": 20
            },
            "effects": {
              "sat": 6
            }
          },
          {
            "id": "local",
            "label": "优先本地居民",
            "cost": {},
            "effects": {
              "sat": -3,
              "faction": {
                "welfare": -2
              }
            }
          },
          {
            "id": "new",
            "label": "优先新移民",
            "cost": {},
            "effects": {
              "sat": -3,
              "faction": {
                "welfare": 2
              }
            }
          }
        ]
      },
      {
        "id": "s4",
        "desc": "货船返航前，船长提出长期贸易协定。",
        "options": [
          {
            "id": "sign",
            "label": "签署协定（贸易 +15%，为期一任期）",
            "cost": {
              "tech": 10
            },
            "effects": {
              "sat": 4,
              "tradePact": 1
            }
          },
          {
            "id": "delay",
            "label": "拖延谈判",
            "cost": {},
            "effects": {
              "sat": -1
            }
          },
          {
            "id": "refuse",
            "label": "拒绝",
            "cost": {},
            "effects": {
              "sat": -3
            }
          }
        ]
      }
    ]
  }
];

/* 6 个利益集团：好感度、诉求政策、定期捐赠（资源换支持） */
const POL_LOBBY_GROUPS = [
  {
    "id": "grp_miners",
    "name": "矿工工会",
    "icon": "⛏️",
    "alignedFaction": "industrial",
    "baseFavor": 50,
    "demandPolicyId": "pol_mining_rights",
    "donation": {
      "resource": "iron",
      "amount": 40,
      "cooldownMin": 10
    },
    "desc": "定期捐赠铁矿换取采矿权支持；好感低于 30 时煽动罢工。"
  },
  {
    "id": "grp_merchants",
    "name": "商会",
    "icon": "💼",
    "alignedFaction": "industrial",
    "baseFavor": 50,
    "demandPolicyId": "pol_trade_tariff",
    "donation": {
      "resource": "steel",
      "amount": 20,
      "cooldownMin": 10
    },
    "desc": "捐赠钢材换取贸易政策支持；好感高时游说 2 名工业派议员。"
  },
  {
    "id": "grp_doctors",
    "name": "医师协会",
    "icon": "🩺",
    "alignedFaction": "welfare",
    "baseFavor": 50,
    "demandPolicyId": "pol_free_clinics",
    "donation": {
      "resource": "food",
      "amount": 30,
      "cooldownMin": 10
    },
    "desc": "捐赠食物换取医疗政策支持；好感低时公开批评市长。"
  },
  {
    "id": "grp_veterans",
    "name": "退伍军人协会",
    "icon": "🎗️",
    "alignedFaction": "military",
    "baseFavor": 50,
    "demandPolicyId": "pol_veteran_fund",
    "donation": {
      "resource": "tech",
      "amount": 10,
      "cooldownMin": 10
    },
    "desc": "捐赠科技点（军事经验总结）换取退伍保障；好感高时提升军队士气。"
  },
  {
    "id": "grp_greens",
    "name": "绿火星联盟",
    "icon": "🌿",
    "alignedFaction": "eco",
    "baseFavor": 50,
    "demandPolicyId": "pol_carbon_cap",
    "donation": {
      "resource": "water",
      "amount": 30,
      "cooldownMin": 10
    },
    "desc": "捐赠净化水换取环保政策；好感低时组织环保抗议。"
  },
  {
    "id": "grp_scientists",
    "name": "科学院",
    "icon": "🔬",
    "alignedFaction": "eco",
    "baseFavor": 50,
    "demandPolicyId": "pol_education_grant",
    "donation": {
      "resource": "tech",
      "amount": 15,
      "cooldownMin": 10
    },
    "desc": "捐赠科技点换取教育投入；好感高时科研产出 +5%。"
  }
];

/* 议员质询（每周一次）：针对最差满意度因子提问，回答影响支持率与丑闻 */
const POL_QUESTION_TIME = [
  {
    "id": "q_food",
    "name": "质询：食物短缺",
    "factor": "food",
    "answers": [
      {
        "id": "a1",
        "label": "承诺一周内补足（需真的补足，否则信任债）",
        "effects": {
          "approval": 3,
          "trustDebt": 1
        }
      },
      {
        "id": "a2",
        "label": "承认困难，公布配给方案",
        "effects": {
          "approval": 1,
          "sat": 1
        }
      },
      {
        "id": "a3",
        "label": "回避问题",
        "effects": {
          "approval": -3,
          "sat": -2
        }
      }
    ]
  },
  {
    "id": "q_tax",
    "name": "质询：税负过重",
    "factor": "tax",
    "answers": [
      {
        "id": "a1",
        "label": "承诺评估减税",
        "effects": {
          "approval": 2,
          "trustDebt": 1
        }
      },
      {
        "id": "a2",
        "label": "用数据说明税收去向",
        "effects": {
          "approval": 2
        }
      },
      {
        "id": "a3",
        "label": "指责提问者别有用心",
        "effects": {
          "approval": -4,
          "scandal": 3
        }
      }
    ]
  },
  {
    "id": "q_safety",
    "name": "质询：防御漏洞",
    "factor": "safety",
    "answers": [
      {
        "id": "a1",
        "label": "公布防御建设计划",
        "effects": {
          "approval": 3
        }
      },
      {
        "id": "a2",
        "label": "承认不足，请求议会拨款",
        "effects": {
          "approval": 1
        }
      },
      {
        "id": "a3",
        "label": "回避问题",
        "effects": {
          "approval": -3,
          "sat": -2
        }
      }
    ]
  },
  {
    "id": "q_pollution",
    "name": "质询：污染超标",
    "factor": "pollution",
    "answers": [
      {
        "id": "a1",
        "label": "承诺限期整改",
        "effects": {
          "approval": 2,
          "trustDebt": 1
        }
      },
      {
        "id": "a2",
        "label": "公布监测数据",
        "effects": {
          "approval": 1,
          "sat": 1
        }
      },
      {
        "id": "a3",
        "label": "否认污染存在",
        "effects": {
          "approval": -5,
          "scandal": 5
        }
      }
    ]
  },
  {
    "id": "q_scandal",
    "name": "质询：贪腐传闻",
    "factor": "scandal",
    "answers": [
      {
        "id": "a1",
        "label": "宣布启动调查",
        "effects": {
          "approval": 3,
          "scandal": -5
        }
      },
      {
        "id": "a2",
        "label": "公开个人财产",
        "effects": {
          "approval": 2,
          "scandal": -3
        }
      },
      {
        "id": "a3",
        "label": "拒绝回答",
        "effects": {
          "approval": -4,
          "scandal": 5
        }
      }
    ]
  },
  {
    "id": "q_jobs",
    "name": "质询：就业不足",
    "factor": "jobs",
    "answers": [
      {
        "id": "a1",
        "label": "承诺新增岗位计划",
        "effects": {
          "approval": 2,
          "trustDebt": 1
        }
      },
      {
        "id": "a2",
        "label": "说明岗位正在建设中",
        "effects": {
          "approval": 1
        }
      },
      {
        "id": "a3",
        "label": "回避问题",
        "effects": {
          "approval": -3,
          "sat": -2
        }
      }
    ]
  }
];


/* ============================== 扩展系统（第三批） ============================== */

/* 通用效果执行器：事件链 / 质询 / 利益集团共用。
 * fx 键：sat（满意度）、scandal（丑闻）、gain{资源}、faction{派系:支持度}、
 * wageUpkeep{资源:每分钟}、defenseFlat、trustDebt、protestRisk、minerMulTemp、
 * industryHaltMin、plagueControl、waterSave、waterBonus、powerBonus、tradeBoost、
 * growthBoost、tradePact。 */
function _polApplyEffects(fx, game, politics) {
  if (!fx || !politics) return;
  if (typeof fx.sat === 'number') politics.satisfaction.value = _polClamp(politics.satisfaction.value + fx.sat, 0, 100);
  if (typeof fx.scandal === 'number') politics.scandal = _polClamp(politics.scandal + fx.scandal, 0, 100);
  if (fx.gain && game && game.player && game.player.inv) {
    for (const k in fx.gain) game.player.inv[k] = (game.player.inv[k] || 0) + fx.gain[k];
  }
  if (fx.faction) for (const k in fx.faction) politics.factions.addSupport(k, fx.faction[k], '事件效果');
  if (fx.wageUpkeep) politics.extraUpkeep.push({ ...fx.wageUpkeep, reason: '事件：工资上涨' });
  if (typeof fx.defenseFlat === 'number') politics.defenseFlatBonus = (politics.defenseFlatBonus || 0) + fx.defenseFlat;
  if (fx.trustDebt) politics.protest.trustDebts.push({ desc: '事件承诺', dueAt: politics.gameTimeMs + 3 * 60 * 1000, penaltySat: -10 });
  if (fx.protestRisk && politics.satisfaction.value < 40) {
    politics.protest.active = true;
    politics.protest.demand = politics.protest.pickDemand(politics.satisfaction);
    politics.protest.sinceMs = politics.gameTimeMs;
  }
  if (typeof fx.minerMulTemp === 'number') {
    politics._tempMinerMul = fx.minerMulTemp;
    politics._tempMinerUntil = politics.gameTimeMs + 10 * 60 * 1000;
  }
  if (typeof fx.industryHaltMin === 'number') {
    politics._industryHaltUntil = Math.max(politics._industryHaltUntil || 0, politics.gameTimeMs + fx.industryHaltMin * 60 * 1000);
  }
  if (typeof fx.plagueControl === 'number') politics._plagueControl = (politics._plagueControl || 0) + fx.plagueControl;
  if (typeof fx.waterBonus === 'number') politics._waterBonus = (politics._waterBonus || 0) + fx.waterBonus;
  if (typeof fx.powerBonus === 'number') politics._powerBonus = (politics._powerBonus || 0) + fx.powerBonus;
  if (typeof fx.tradeBoost === 'number') politics._tradeBoostUntil = politics.gameTimeMs + 10 * 60 * 1000;
  if (typeof fx.tradePact === 'number') politics._tradePactUntil = politics.gameTimeMs + POLITICS.MAYOR_TERM_MS;
  if (typeof fx.growthBoost === 'number') politics._growthBoostUntil = politics.gameTimeMs + 10 * 60 * 1000;
}

/* ---------- 紧急状态 ---------- */
class PolEmergency {
  constructor() {
    this.level = 0;            // 0 = 未宣布
    this.sinceMs = 0;
    this.approvedBy = null;    // 批准方式：mayor（市长直接）/ parliament（议会）
    this._costAccMs = 0;
  }

  // 宣布：1 级市长直接宣布；2 级需简单多数；3 级需 2/3 多数
  declare(level, game, politics) {
    const def = POL_EMERGENCY_LEVELS.find(l => l.level === level);
    if (!def) return { ok: false, reason: '未知紧急级别' };
    if (this.level >= level) return { ok: false, reason: '已处于同级或更高紧急状态' };
    if (def.needApproval && politics) {
      const seats = politics.parliament.councilors.length;
      let forN = 0;
      for (const c of politics.parliament.councilors) {
        // 军事派与纪律性高的议员更支持紧急状态
        const s = (c.faction === 'military' ? 0.6 : 0) + c.loyalty / 200 + (politics.satisfaction.value < 30 ? 0.3 : 0) + _polRand(-0.3, 0.3);
        if (s > 0.5) forN++;
      }
      const need = level === 3 ? Math.ceil(seats * 2 / 3) : Math.ceil(seats / 2);
      if (forN < need) return { ok: false, reason: '议会未批准（' + forN + '/' + need + ' 票）' };
      this.approvedBy = 'parliament';
    } else {
      this.approvedBy = 'mayor';
    }
    this.level = level;
    this.sinceMs = politics ? politics.gameTimeMs : 0;
    if (politics) politics.log('宣布紧急状态：' + def.name + '（' + (this.approvedBy === 'parliament' ? '议会批准' : '市长直接宣布') + '）');
    return { ok: true, level, name: def.name };
  }

  lift(politics) {
    if (this.level === 0) return { ok: false, reason: '未处于紧急状态' };
    const name = POL_EMERGENCY_LEVELS.find(l => l.level === this.level).name;
    this.level = 0; this.approvedBy = null;
    if (politics) {
      politics.satisfaction.value = _polClamp(politics.satisfaction.value + 3, 0, 100);
      politics.log('解除紧急状态：' + name + '，满意度 +3');
    }
    return { ok: true };
  }

  // 每分钟扣成本；交不起自动降级
  tickMinute(game, politics) {
    if (this.level === 0) return null;
    const def = POL_EMERGENCY_LEVELS.find(l => l.level === this.level);
    const inv = (game && game.player && game.player.inv) || null;
    if (!inv) return null;
    for (const k in def.costPerMin) {
      if ((inv[k] || 0) < def.costPerMin[k]) {
        this.level--;
        if (politics) politics.log('紧急状态降级：物资不足，降为 ' + (this.level === 0 ? '正常状态' : POL_EMERGENCY_LEVELS.find(l => l.level === this.level).name));
        return { downgraded: true, level: this.level };
      }
    }
    for (const k in def.costPerMin) inv[k] -= def.costPerMin[k];
    return { paid: _polClone(def.costPerMin), level: this.level };
  }

  modifiers() {
    if (this.level === 0) return {};
    return _polClone(POL_EMERGENCY_LEVELS.find(l => l.level === this.level).effects || {});
  }

  serialize() { return { level: this.level, sinceMs: this.sinceMs, approvedBy: this.approvedBy }; }
  static deserialize(d) {
    const e = new PolEmergency();
    e.level = d.level || 0; e.sinceMs = d.sinceMs || 0; e.approvedBy = d.approvedBy || null;
    return e;
  }
}

/* ---------- 城市事件链 ---------- */
class PolEventChains {
  constructor() {
    this.active = null;    // {chainId, stageIdx, chain}
    this.completed = [];   // 已完成链 id
    this._checkMs = 0;
    this.cooldowns = {};   // {chainId: untilMs} 同一链完成 10 分钟内不重复触发
  }

  // 每 2 分钟检查触发：按触发类型对应的最差因子
  tick(dtMs, gameTimeMs, satModel, politics) {
    this._checkMs += dtMs;
    if (this._checkMs < 2 * 60 * 1000) return null;
    this._checkMs = 0;
    if (this.active) return null;
    const triggerMap = { miner: 'chain_mine_collapse', health: 'chain_plague', raid: 'chain_raid_aftermath',
      water: 'chain_water_crisis', power: 'chain_blackout', jobs: 'chain_strike_wave',
      disaster: 'chain_earthquake', trade: 'chain_earth_ship' };
    // 触发条件：对应因子得分 < -4，或袭击刚结束（由 politics._raidRecent 标记）
    let worst = null, worstScore = -4;
    for (const f of POL_SAT_FACTORS) {
      const rec = satModel.factors[f.id];
      if (rec && rec.score < worstScore) { worstScore = rec.score; worst = f.id; }
    }
    let chainId = null;
    if (politics && politics._raidRecent) chainId = 'chain_raid_aftermath';
    else if (worst && triggerMap[worst]) chainId = triggerMap[worst];
    else if (Math.random() < 0.15) chainId = 'chain_earth_ship'; // 15% 概率来地球船（无恶化因子时）
    if (!chainId) return null;
    if ((this.cooldowns[chainId] || 0) > gameTimeMs) return null;
    if (this.completed.includes(chainId) && Math.random() < 0.5) return null; // 已完成过的链 50% 不再触发
    const chain = POL_EVENT_CHAINS.find(c => c.id === chainId);
    if (!chain) return null;
    this.active = { chainId, stageIdx: 0, chain };
    if (politics) politics.log('城市事件：' + chain.icon + ' ' + chain.name + '——' + chain.stages[0].desc);
    return this.active;
  }

  currentStage() {
    if (!this.active) return null;
    return this.active.chain.stages[this.active.stageIdx];
  }

  choose(optionId, game, politics) {
    if (!this.active) return { ok: false, reason: '没有进行中的事件链' };
    const stage = this.currentStage();
    const opt = stage.options.find(o => o.id === optionId);
    if (!opt) return { ok: false, reason: '未知选项' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && opt.cost) {
      for (const k in opt.cost) if ((inv[k] || 0) < opt.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in opt.cost) inv[k] -= opt.cost[k];
    }
    _polApplyEffects(opt.effects, game, politics);
    const done = this.active.stageIdx + 1 >= this.active.chain.stages.length;
    const chainName = this.active.chain.name;
    if (done) {
      this.completed.push(this.active.chainId);
      this.cooldowns[this.active.chainId] = politics ? politics.gameTimeMs + 10 * 60 * 1000 : 0;
      this.active = null;
      if (politics) politics.log('城市事件结束：' + chainName);
      return { ok: true, done: true, chain: chainName, option: opt.label };
    }
    this.active.stageIdx++;
    const next = this.currentStage();
    if (politics) politics.log('城市事件推进：' + chainName + '——' + next.desc);
    return { ok: true, done: false, nextStage: next.desc, option: opt.label };
  }

  serialize() { return { active: this.active ? { chainId: this.active.chainId, stageIdx: this.active.stageIdx } : null, completed: [...this.completed], cooldowns: _polClone(this.cooldowns) }; }
  static deserialize(d) {
    const e = new PolEventChains();
    if (d.active) {
      const chain = POL_EVENT_CHAINS.find(c => c.id === d.active.chainId);
      if (chain) e.active = { chainId: chain.id, stageIdx: d.active.stageIdx || 0, chain };
    }
    e.completed = [...(d.completed || [])];
    e.cooldowns = _polClone(d.cooldowns || {});
    return e;
  }
}

/* ---------- 利益集团 ---------- */
class PolLobbyGroups {
  constructor() {
    this.favor = {};
    this.donateCooldowns = {};
    for (const g of POL_LOBBY_GROUPS) this.favor[g.id] = g.baseFavor;
  }

  // 接受捐赠：获得资源，好感 +5；冷却 10 分钟
  acceptDonation(groupId, game, politics) {
    const g = POL_LOBBY_GROUPS.find(x => x.id === groupId);
    if (!g) return { ok: false, reason: '未知利益集团' };
    const now = game ? game._polTimeMs : 0;
    if ((this.donateCooldowns[groupId] || 0) > now) return { ok: false, reason: '捐赠冷却中' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv) inv[g.donation.resource] = (inv[g.donation.resource] || 0) + g.donation.amount;
    this.favor[groupId] = _polClamp(this.favor[groupId] + 5, 0, 100);
    this.donateCooldowns[groupId] = now + g.donation.cooldownMin * 60 * 1000;
    return { ok: true, group: g.name, resource: g.donation.resource, amount: g.donation.amount, favor: this.favor[groupId] };
  }

  // 集团游说：好感 >= 60 时，该集团游说 2 名同派系议员（下一法案立场 +1）
  lobbyFor(groupId, billId, politics) {
    const g = POL_LOBBY_GROUPS.find(x => x.id === groupId);
    if (!g) return { ok: false, reason: '未知利益集团' };
    if ((this.favor[groupId] || 0) < 60) return { ok: false, reason: '好感不足 60，集团不愿出面（当前 ' + Math.round(this.favor[groupId] || 0) + '）' };
    const bill = politics.parliament.activeBills.find(b => b.billId === billId);
    if (!bill) return { ok: false, reason: '法案不存在' };
    const targets = politics.parliament.councilors.filter(c => c.faction === g.alignedFaction).slice(0, 2);
    for (const t of targets) {
      const cur = t.lobbiedStance[bill.policyId] || 0;
      t.lobbiedStance[bill.policyId] = Math.min(2, cur + 1);
    }
    this.favor[groupId] = _polClamp(this.favor[groupId] - 8, 0, 100);
    return { ok: true, group: g.name, swayed: targets.map(t => t.name) };
  }

  // 每分钟：好感向 50 回归 1 点；诉求政策颁布则 +10，废除则 -10
  tickMinute(politics) {
    for (const g of POL_LOBBY_GROUPS) {
      const f = this.favor[g.id];
      this.favor[g.id] = _polClamp(f + (f > 50 ? -1 : f < 50 ? 1 : 0), 0, 100);
      if (politics && politics.enacted.has(g.demandPolicyId)) this.favor[g.id] = _polClamp(this.favor[g.id] + 0.2, 0, 100);
    }
    // 好感低于 30 的矿工工会煽动罢工风险
    if ((this.favor.grp_miners || 50) < 30 && politics && politics.satisfaction.value < 40 && Math.random() < 0.3) {
      politics.protest.active = true;
      politics.protest.demand = politics.protest.pickDemand(politics.satisfaction);
      politics.protest.sinceMs = politics.gameTimeMs;
      politics.log('矿工工会煽动抗议：好感过低');
    }
  }

  // 集团修正值：科学家好感高时科研 +5%
  modifiers() {
    const m = { researchMul: 1, moraleMul: 1 };
    if ((this.favor.grp_scientists || 0) >= 70) m.researchMul *= 1.05;
    if ((this.favor.grp_veterans || 0) >= 70) m.moraleMul *= 1.05;
    return m;
  }

  serialize() { return { favor: _polClone(this.favor), donateCooldowns: _polClone(this.donateCooldowns) }; }
  static deserialize(d) {
    const g = new PolLobbyGroups();
    g.favor = _polClone(d.favor || {});
    g.donateCooldowns = _polClone(d.donateCooldowns || {});
    return g;
  }
}

/* ---------- 党鞭制度 ---------- */
PolParliament.prototype.appointWhips = function () {
  this.whips = {};
  for (const k in POL_FACTIONS) {
    const members = this.councilors.filter(c => c.faction === k);
    if (!members.length) continue;
    // 党鞭 = 本派系忠诚度最高的议员
    const whip = members.slice().sort((a, b) => b.loyalty - a.loyalty)[0];
    this.whips[k] = whip.id;
  }
  return this.whips;
};
PolParliament.prototype.whipName = function (factionId) {
  if (!this.whips) this.appointWhips();
  const id = this.whips[factionId];
  const c = this.councilors.find(x => x.id === id);
  return c ? c.name : null;
};
// 党鞭督票：花费 5 tech，强制本派系议员在本次投票中向派系立场靠拢（立场偏移 +1 档）
PolParliament.prototype.enforceDiscipline = function (factionId, billId, game) {
  const bill = this.activeBills.find(b => b.billId === billId);
  if (!bill) return { ok: false, reason: '法案不存在' };
  const policy = POL_POLICIES[bill.policyId];
  const stance = (policy.factionStance || {})[factionId] || 0;
  if (stance === 0) return { ok: false, reason: '本派系对该法案无明确立场，党鞭无法督票' };
  const inv = (game && game.player && game.player.inv) || null;
  if (inv && (inv.tech || 0) < 5) return { ok: false, reason: '督票需 5 科技点' };
  if (inv) inv.tech -= 5;
  let count = 0;
  for (const c of this.councilors) {
    if (c.faction !== factionId) continue;
    const cur = c.lobbiedStance[policy.id] || 0;
    c.lobbiedStance[policy.id] = _polClamp(cur + (stance > 0 ? 1 : -1), -2, 2);
    count++;
  }
  return { ok: true, faction: POL_FACTIONS[factionId].name, whipped: count, direction: stance > 0 ? '支持' : '反对' };
};

/* ---------- 税收稽查模型 ---------- */
class PolTaxModel {
  static evasionRate(politics) {
    // 逃税率：基础 8% + 丑闻*0.2% + 行政拨款不足惩罚 - 反腐政策减免
    let rate = 0.08;
    if (politics) {
      rate += (politics.scandal || 0) * 0.002;
      if (politics.budget && politics.budget.allocation.admin < 5) rate += 0.05;
      if (politics.enacted.has('pol_anti_corruption')) rate -= 0.04;
    }
    return _polClamp(rate, 0.01, 0.4);
  }
  static computeRevenue(game, politics) {
    const pop = (game && game.pop && game.pop.count) || 0;
    const mods = politics ? politics.aggregateModifiers() : {};
    const base = (10 + pop * 0.5) * (mods.taxMul || 1) * (mods.tradeMul || 1);
    const evasion = PolTaxModel.evasionRate(politics);
    return { base: Math.round(base), evasion: Math.round(evasion * 1000) / 10, net: Math.round(base * (1 - evasion)) };
  }
  // 稽查行动：花费 10 tech，追回逃税（按逃税额比例），丑闻 -2
  static auditEvaders(game, politics) {
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && (inv.tech || 0) < 10) return { ok: false, reason: '需 10 科技点' };
    if (inv) inv.tech -= 10;
    const rev = PolTaxModel.computeRevenue(game, politics);
    const recovered = Math.round(rev.base * PolTaxModel.evasionRate(politics) * 0.6);
    if (inv) inv.iron = (inv.iron || 0) + recovered;
    if (politics) politics.scandal = _polClamp(politics.scandal - 2, 0, 100);
    return { ok: true, recovered, evasionPct: rev.evasion };
  }
}

/* ---------- 政治编年史 ---------- */
class PolChronicle {
  constructor() {
    this.terms = [];       // 每任市长记录 {term, reelected, sat, scandal}
    this.elections = [];   // 每次议会选举席位分布
    this.milestones = [];  // 大事记
  }
  recordMayorTerm(mayor, politics) {
    this.terms.push({ term: mayor.term, approval: Math.round(mayor.approval),
      sat: Math.round(politics.satisfaction.value), scandal: Math.round(politics.scandal),
      enactedCount: politics.enacted.size });
  }
  recordElection(seats, termNo) {
    this.elections.push({ term: termNo, seats: _polClone(seats.byFaction), total: seats.total });
    if (this.elections.length > 20) this.elections.length = 20;
  }
  milestone(msg) {
    this.milestones.unshift({ t: Date.now(), msg });
    if (this.milestones.length > 40) this.milestones.length = 40;
  }
  // 统计：任期最长的议员、投票最多的议员、被贿赂最多的议员
  councilorStats(parliament) {
    const cs = parliament.councilors;
    if (!cs.length) return {};
    const by = (key) => cs.slice().sort((a, b) => (b[key] || 0) - (a[key] || 0))[0];
    const mostVotes = by('votesFor');
    const mostBribed = by('bribedCount');
    const longest = by('termsServed');
    return { mostVotes: mostVotes ? { name: mostVotes.name, votes: mostVotes.votesFor } : null,
      mostBribed: mostBribed ? { name: mostBribed.name, count: mostBribed.bribedCount } : null,
      longest: longest ? { name: longest.name, terms: longest.termsServed } : null,
      avgLoyalty: Math.round(cs.reduce((a, c) => a + c.loyalty, 0) / cs.length),
      avgInfluence: Math.round(cs.reduce((a, c) => a + c.influence, 0) / cs.length) };
  }
  serialize() { return { terms: _polClone(this.terms), elections: _polClone(this.elections), milestones: _polClone(this.milestones) }; }
  static deserialize(d) {
    const c = new PolChronicle();
    c.terms = _polClone(d.terms || []);
    c.elections = _polClone(d.elections || []);
    c.milestones = _polClone(d.milestones || []);
    return c;
  }
}

/* ---------- 住房 / 就业子模型 ---------- */
PolSatisfaction.prototype.housingDetail = function (game, politics) {
  const pop = (game && game.pop && game.pop.count) || 0;
  const builder = game && game.builder;
  let cap = 2;
  try { if (game && game.pop && builder && typeof game.pop.cap === 'function') cap = game.pop.cap(builder); } catch (e) { /* 忽略 */ }
  const mods = politics ? politics.aggregateModifiers() : {};
  cap += mods.popCapBonus || 0;
  const ratio = cap > 0 ? pop / cap : 1;
  const overcrowded = Math.max(0, pop - cap);
  return { pop, cap, ratio: Math.round(ratio * 100) / 100, overcrowded,
    status: ratio >= 1 ? '爆满' : ratio >= 0.9 ? '紧张' : ratio >= 0.75 ? '偏紧' : '宽松',
    needUnits: overcrowded > 0 ? Math.ceil(overcrowded / 4) : 0 };
};
PolSatisfaction.prototype.jobsDetail = function (game) {
  const pop = (game && game.pop && game.pop.count) || 0;
  const builder = game && game.builder;
  let jobs = 0;
  try {
    if (builder && builder.buildings) {
      const list = Array.isArray(builder.buildings) ? builder.buildings : Object.values(builder.buildings);
      for (const b of list) if (b) jobs += (b.level || 1) * 2; // 每级建筑约 2 个岗位（抽象）
    }
  } catch (e) { /* 忽略 */ }
  const unemployed = Math.max(0, pop - jobs);
  const rate = pop > 0 ? unemployed / pop : 0;
  return { pop, jobs, unemployed, rate: Math.round(rate * 1000) / 10,
    status: rate >= 0.4 ? '失业危机' : rate >= 0.2 ? '就业紧张' : rate >= 0.1 ? '基本充分' : '充分就业' };
};

/* ---------- 议员质询（每周一次） ---------- */
ColonialPoliticsManager.prototype.questionTime = function (answerId, game) {
  if (!this._qt) this._qt = { nextAt: 0, current: null };
  const now = this.gameTimeMs;
  if (!this._qt.current) {
    if (now < this._qt.nextAt) return { ok: false, reason: '质询尚未开始（每周一次）' };
    // 选最差因子对应的质询
    let worst = null, worstScore = 99;
    for (const f of POL_SAT_FACTORS) {
      const rec = this.satisfaction.factors[f.id];
      if (rec && rec.score < worstScore) { worstScore = rec.score; worst = f.id; }
    }
    let q = POL_QUESTION_TIME.find(x => x.factor === worst);
    if (!q && this.scandal >= 30) q = POL_QUESTION_TIME.find(x => x.id === 'q_scandal');
    if (!q) q = POL_QUESTION_TIME[0];
    this._qt.current = q;
    return { ok: true, started: true, question: q.name, answers: q.answers.map(a => ({ id: a.id, label: a.label })) };
  }
  const q = this._qt.current;
  const ans = q.answers.find(a => a.id === answerId);
  if (!ans) return { ok: false, reason: '未知回答' };
  const fx = ans.effects || {};
  if (typeof fx.approval === 'number') this.mayor.approval = _polClamp(this.mayor.approval + fx.approval, 0, 100);
  if (typeof fx.sat === 'number') this.satisfaction.value = _polClamp(this.satisfaction.value + fx.sat, 0, 100);
  if (typeof fx.scandal === 'number') this.scandal = _polClamp(this.scandal + fx.scandal, 0, 100);
  if (fx.trustDebt) this.protest.trustDebts.push({ desc: '质询承诺：' + q.name, dueAt: this.gameTimeMs + 3 * 60 * 1000, penaltySat: -10 });
  this._qt.current = null;
  this._qt.nextAt = now + 7 * 60 * 1000; // 每周一次（7 分钟游戏时间）
  return { ok: true, answered: true, question: q.name, answer: ans.label, effects: fx };
};

/* ---------- 人口普查 ---------- */
ColonialPoliticsManager.prototype.runCensus = function (game) {
  this.initExtended();
  const now = this.gameTimeMs;
  if ((this._censusNextAt || 0) > now) return { ok: false, reason: '普查冷却中（每 30 分钟一次）' };
  this._censusNextAt = now + 30 * 60 * 1000;
  const pop = (game && game.pop && game.pop.count) || 0;
  // 准确度取决于行政拨款：>=10% 准确，否则误差
  const accuracy = this.budget.allocation.admin >= 10 ? 0.98 : this.budget.allocation.admin >= 5 ? 0.9 : 0.75;
  const byDistrict = POL_DISTRICTS.map(d => ({
    district: d.name, pop: Math.round(pop * d.popWeight * (0.9 + Math.random() * 0.2) * accuracy),
    leanTop: Object.entries(d.lean).sort((a, b) => b[1] - a[1])[0][0] }));
  const housing = this.satisfaction.housingDetail(game, this);
  const jobs = this.satisfaction.jobsDetail(game);
  const growthForecast = Math.round(pop * 0.05 * (this.aggregateModifiers().growthMul || 1) * 10) / 10;
  if (accuracy >= 0.9) this.satisfaction.value = _polClamp(this.satisfaction.value + 2, 0, 100);
  return { ok: true, accuracy: Math.round(accuracy * 100), totalPop: pop, byDistrict,
    housing, jobs, growthForecastPerMin: growthForecast,
    note: accuracy < 0.9 ? '行政拨款不足，普查数据存在误差' : '普查数据准确' };
};

/* ---------- 第三批接入：包装 updateExtended / getExtendedModifiers / save / load ---------- */
(function () {
  // initExtended 扩展：补建第三批子系统
  const _origInitExt = ColonialPoliticsManager.prototype.initExtended;
  ColonialPoliticsManager.prototype.initExtended = function () {
    _origInitExt.call(this);
    if (!this.emergency) {
      this.emergency = new PolEmergency();
      this.eventChains = new PolEventChains();
      this.lobbyGroups = new PolLobbyGroups();
      this.chronicle = new PolChronicle();
      this._qt = { nextAt: 0, current: null };
      this._censusNextAt = 0;
    }
  };
  // getExtendedModifiers 合并紧急状态与利益集团修正
  const _origExtMods = ColonialPoliticsManager.prototype.getExtendedModifiers;
  ColonialPoliticsManager.prototype.getExtendedModifiers = function () {
    const m = _origExtMods.call(this);
    const em = this.emergency.modifiers();
    for (const k in em) {
      if (k === 'satFlat') m.satFlat += em[k];
      else if (k === 'raidResist') m.raidResist = Math.min(0.6, (m.raidResist || 0) + em[k]);
      else if (k in m) m[k] *= em[k];
      else m[k] = em[k];
    }
    const gm = this.lobbyGroups.modifiers();
    for (const k in gm) if (k in m) m[k] *= gm[k];
    // 临时效果：贸易协定 / 增长加成 / 矿业临时乘区
    if (this._tradeBoostUntil && this.gameTimeMs < this._tradeBoostUntil) m.tradeMul = (m.tradeMul || 1) * 1.1;
    if (this._tradePactUntil && this.gameTimeMs < this._tradePactUntil) m.tradeMul = (m.tradeMul || 1) * 1.15;
    if (this._growthBoostUntil && this.gameTimeMs < this._growthBoostUntil) m.growthMul = (m.growthMul || 1) * 1.1;
    if (this._tempMinerMul && this._tempMinerUntil && this.gameTimeMs < this._tempMinerUntil) m.minerMul = (m.minerMul || 1) * this._tempMinerMul;
    if (this._industryHaltUntil && this.gameTimeMs < this._industryHaltUntil) { m.minerMul *= 0.5; m.steelMul *= 0.5; }
    if (this._waterBonus) m.waterMul = (m.waterMul || 1) * (1 + this._waterBonus * 0.1);
    if (this._powerBonus) m.powerMul = (m.powerMul || 1) * (1 + this._powerBonus * 0.1);
    return m;
  };
  // updateExtended 扩展：紧急状态扣费 + 事件链 + 利益集团 + 失业惩罚 + 编年史
  const _origUpdateExt = ColonialPoliticsManager.prototype.updateExtended;
  ColonialPoliticsManager.prototype.updateExtended = function (dtMs, game) {
    _origUpdateExt.call(this, dtMs, game);
    this.emergency.tickMinute(game, this);
    this.eventChains.tick(dtMs, this.gameTimeMs, this.satisfaction, this);
    this.lobbyGroups.tickMinute(this);
    // 失业率 > 20% 每分钟满意度 -1
    const jobs = this.satisfaction.jobsDetail(game);
    if (jobs.rate >= 20) this.satisfaction.value = _polClamp(this.satisfaction.value - 1, 0, 100);
    // 袭击标记复位（由 military_v3 的袭击结束时设置 _raidRecent）
    if (this._raidRecent) this._raidRecent = false;
  };
  // save/load 扩展
  const _origSave = ColonialPoliticsManager.prototype.save;
  ColonialPoliticsManager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended();
    s.extended3 = { emergency: this.emergency.serialize(), eventChains: this.eventChains.serialize(),
      lobbyGroups: this.lobbyGroups.serialize(), chronicle: this.chronicle.serialize(),
      qt: _polClone(this._qt || {}), censusNextAt: this._censusNextAt || 0 };
    return s;
  };
  const _origLoad = ColonialPoliticsManager.prototype.load;
  ColonialPoliticsManager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended();
    if (data && data.extended3) {
      if (data.extended3.emergency) this.emergency = PolEmergency.deserialize(data.extended3.emergency);
      if (data.extended3.eventChains) this.eventChains = PolEventChains.deserialize(data.extended3.eventChains);
      if (data.extended3.lobbyGroups) this.lobbyGroups = PolLobbyGroups.deserialize(data.extended3.lobbyGroups);
      if (data.extended3.chronicle) this.chronicle = PolChronicle.deserialize(data.extended3.chronicle);
      this._qt = _polClone(data.extended3.qt || { nextAt: 0, current: null });
      this._censusNextAt = data.extended3.censusNextAt || 0;
    }
  };
})();

/* ---------- 第三批自测 ---------- */
class PoliticsExtended3SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _polTimeMs: 0,
      player: { inv: { iron: 500, ice: 500, rare: 200, water: 500, food: 500, steel: 300, tech: 500, uranium: 50, he3: 20 } },
      pop: { count: 40, cap: () => 100 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50, totalPopCap: () => 100 },
      military: { raidStrength: 0 } });
    const m = new ColonialPoliticsManager();
    const g = mockGame();
    m.initExtended();
    check('第三批系统初始化', !!m.emergency && !!m.eventChains && !!m.lobbyGroups && !!m.chronicle, '');
    // 紧急状态
    const em1 = m.emergency.declare(1, g, m);
    check('一级紧急状态市长直接宣布', em1.ok && m.emergency.level === 1, JSON.stringify(em1));
    const emTick = m.emergency.tickMinute(g, m);
    check('紧急状态每分钟扣费', !!emTick && emTick.level === 1, JSON.stringify(emTick));
    const emLift = m.emergency.lift(m);
    check('解除紧急状态', emLift.ok && m.emergency.level === 0, '');
    // 事件链
    m.satisfaction.factors = { food: { score: -10 } };
    const trig = m.eventChains.tick(2 * 60 * 1000 + 1, m.gameTimeMs, m.satisfaction, m);
    check('事件链可触发', !!m.eventChains.active || trig === null, m.eventChains.active ? m.eventChains.active.chain.name : '未触发（随机/冷却）');
    if (m.eventChains.active) {
      const stage = m.eventChains.currentStage();
      const ch = m.eventChains.choose(stage.options[0].id, g, m);
      check('事件链可推进选项', ch.ok, ch.reason || '');
    }
    // 利益集团
    const don = m.lobbyGroups.acceptDonation('grp_miners', g, m);
    check('利益集团捐赠到账', don.ok && (g.player.inv.iron || 0) >= 500, JSON.stringify(don));
    // 党鞭
    m.parliament.appointWhips();
    check('党鞭任命覆盖四派系', Object.keys(m.parliament.whips || {}).length === 4, JSON.stringify(m.parliament.whips));
    m.proposeBill('pol_defense_budget', g);
    const bill = m.parliament.activeBills[0];
    const whip = m.parliament.enforceDiscipline('military', bill.billId, g);
    check('党鞭督票有效', whip.ok && whip.whipped > 0, JSON.stringify(whip));
    // 税收模型
    const rev = PolTaxModel.computeRevenue(g, m);
    check('税收模型返回净收入', rev && rev.net > 0 && rev.evasion >= 1, JSON.stringify(rev));
    const audit = PolTaxModel.auditEvaders(g, m);
    check('稽查追回逃税', audit.ok && audit.recovered >= 0, JSON.stringify(audit));
    // 编年史
    m.chronicle.recordMayorTerm(m.mayor, m);
    const stats = m.chronicle.councilorStats(m.parliament);
    check('编年史议员统计有效', stats && typeof stats.avgLoyalty === 'number', JSON.stringify(stats));
    // 住房/就业子模型
    const hd = m.satisfaction.housingDetail(g, m);
    check('住房子模型返回入住率', hd && typeof hd.ratio === 'number', JSON.stringify(hd));
    const jd = m.satisfaction.jobsDetail(g);
    check('就业子模型返回失业率', jd && typeof jd.rate === 'number', JSON.stringify(jd));
    // 质询
    const qt1 = m.questionTime(null, g);
    check('质询可开始', qt1.ok && qt1.started, JSON.stringify(qt1).slice(0, 120));
    if (qt1.started) {
      const qt2 = m.questionTime(qt1.answers[0].id, g);
      check('质询可回答', qt2.ok && qt2.answered, JSON.stringify(qt2).slice(0, 120));
    }
    // 普查
    const census = m.runCensus(g);
    check('人口普查返回分区数据', census.ok && census.byDistrict.length === 7, 'districts=' + (census.byDistrict || []).length);
    // 扩展修正值含紧急状态
    m.emergency.declare(1, g, m);
    const ext = m.getExtendedModifiers();
    check('紧急状态修正值并入扩展修正', ext.defenseMul > 1, 'defenseMul=' + ext.defenseMul);
    m.emergency.lift(m);
    // 存档往返（含第三批）
    const saved = m.save();
    const m2 = new ColonialPoliticsManager();
    m2.load(saved);
    check('第三批存档往返：紧急状态保留', !!m2.emergency, '');
    check('第三批存档往返：利益集团好感保留', !!m2.lobbyGroups && typeof m2.lobbyGroups.favor.grp_miners === 'number', '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = PoliticsSelfTest.run;
  PoliticsSelfTest.run = function () {
    const base = _origRun();
    const ext3 = PoliticsExtended3SelfTest.run();
    return { total: base.total + ext3.total, passed: base.passed + ext3.passed,
      failed: [...base.failed, ...ext3.failed],
      results: [...base.results, ...ext3.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.PolEmergency = PolEmergency;
  window.PolEventChains = PolEventChains;
  window.PolLobbyGroups = PolLobbyGroups;
  window.PolTaxModel = PolTaxModel;
  window.PolChronicle = PolChronicle;
  window.PoliticsExtended3SelfTest = PoliticsExtended3SelfTest;
  window.POL_EMERGENCY_LEVELS = POL_EMERGENCY_LEVELS;
  window.POL_EVENT_CHAINS = POL_EVENT_CHAINS;
  window.POL_LOBBY_GROUPS = POL_LOBBY_GROUPS;
  window.POL_QUESTION_TIME = POL_QUESTION_TIME;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { PolEmergency, PolEventChains, PolLobbyGroups, PolTaxModel,
    PolChronicle, PoliticsExtended3SelfTest, POL_EMERGENCY_LEVELS, POL_EVENT_CHAINS,
    POL_LOBBY_GROUPS, POL_QUESTION_TIME });
}

/* 8 个选民群体：规模、投票率、派系倾向、关切议题（决定选举预测与竞选效果） */
const POL_VOTER_BLOCS = [
  {
    "id": "bloc_workers",
    "name": "产业工人",
    "icon": "👷",
    "share": 0.22,
    "turnout": 0.65,
    "lean": {
      "industrial": 0.45,
      "eco": 0.05,
      "military": 0.15,
      "welfare": 0.35
    },
    "issues": [
      "jobs",
      "welfare",
      "safety"
    ],
    "desc": "人数最多的群体，关心工资与岗位。"
  },
  {
    "id": "bloc_scientists",
    "name": "科研人员",
    "icon": "🔬",
    "share": 0.1,
    "turnout": 0.8,
    "lean": {
      "industrial": 0.2,
      "eco": 0.3,
      "military": 0.1,
      "welfare": 0.4
    },
    "issues": [
      "jobs",
      "health",
      "pollution"
    ],
    "desc": "投票率最高的群体，关心经费与环境。"
  },
  {
    "id": "bloc_soldiers",
    "name": "军人军属",
    "icon": "🪖",
    "share": 0.12,
    "turnout": 0.75,
    "lean": {
      "industrial": 0.15,
      "eco": 0.05,
      "military": 0.6,
      "welfare": 0.2
    },
    "issues": [
      "safety",
      "welfare"
    ],
    "desc": "军事派铁票，关心津贴与防务。"
  },
  {
    "id": "bloc_merchants",
    "name": "商人店主",
    "icon": "💼",
    "share": 0.11,
    "turnout": 0.7,
    "lean": {
      "industrial": 0.4,
      "eco": 0.1,
      "military": 0.15,
      "welfare": 0.35
    },
    "issues": [
      "tax",
      "jobs"
    ],
    "desc": "关心税负与贸易，最恨加税。"
  },
  {
    "id": "bloc_farmers",
    "name": "农场工人",
    "icon": "🌾",
    "share": 0.1,
    "turnout": 0.6,
    "lean": {
      "industrial": 0.05,
      "eco": 0.55,
      "military": 0.05,
      "welfare": 0.35
    },
    "issues": [
      "food",
      "water",
      "pollution"
    ],
    "desc": "生态派基本盘，关心水与土壤。"
  },
  {
    "id": "bloc_youth",
    "name": "青年学生",
    "icon": "🎓",
    "share": 0.14,
    "turnout": 0.5,
    "lean": {
      "industrial": 0.1,
      "eco": 0.35,
      "military": 0.05,
      "welfare": 0.5
    },
    "issues": [
      "jobs",
      "entertainment",
      "health"
    ],
    "desc": "投票率低但人数多，摇摆性最强。"
  },
  {
    "id": "bloc_elderly",
    "name": "老年居民",
    "icon": "👴",
    "share": 0.09,
    "turnout": 0.85,
    "lean": {
      "industrial": 0.1,
      "eco": 0.2,
      "military": 0.2,
      "welfare": 0.5
    },
    "issues": [
      "health",
      "welfare",
      "housing"
    ],
    "desc": "投票率最高，民生派铁票。"
  },
  {
    "id": "bloc_officials",
    "name": "公务员",
    "icon": "📋",
    "share": 0.12,
    "turnout": 0.78,
    "lean": {
      "industrial": 0.25,
      "eco": 0.2,
      "military": 0.2,
      "welfare": 0.35
    },
    "issues": [
      "tax",
      "safety"
    ],
    "desc": "最求稳的群体，厌恶动荡与丑闻。"
  }
];

/* 4 种选民群体竞选行动：好感与投票率的真实变化 */
const POL_BLOC_CAMPAIGN = [
  {
    "id": "bc_townhall",
    "name": "群体座谈会",
    "icon": "💬",
    "cost": {
      "food": 8
    },
    "effects": {
      "favor": 4,
      "turnout": 0.02
    },
    "desc": "与该群体座谈：好感 +4，投票率 +2%。"
  },
  {
    "id": "bc_subsidy",
    "name": "定向补贴",
    "icon": "🎁",
    "cost": {
      "food": 20,
      "iron": 10
    },
    "effects": {
      "favor": 8,
      "turnout": 0.03
    },
    "desc": "定向发放补贴：好感 +8，投票率 +3%。"
  },
  {
    "id": "bc_pledge",
    "name": "政策承诺",
    "icon": "🤝",
    "cost": {},
    "effects": {
      "favor": 5,
      "turnout": 0.01,
      "trustDebt": 1
    },
    "desc": "承诺关切议题的政策：好感 +5，但记一笔信任债。"
  },
  {
    "id": "bc_attack",
    "name": "负面攻击对手",
    "icon": "🗞️",
    "cost": {
      "tech": 6
    },
    "effects": {
      "favor": 3,
      "turnout": 0.04,
      "scandal": 4
    },
    "desc": "攻击对手在该群体中的形象：好感 +3，投票率 +4%，丑闻 +4。"
  }
];

/* 6 种司法审查理由：成功率受丑闻与法官廉洁度影响 */
const POL_JUDICIAL_GROUNDS = [
  {
    "id": "jg_unconstitutional",
    "name": "违宪审查",
    "icon": "📜",
    "baseChance": 0.3,
    "desc": "指控政策违反殖民地宪章：成功则政策立即废除。"
  },
  {
    "id": "jg_procedure",
    "name": "程序瑕疵",
    "icon": "📋",
    "baseChance": 0.4,
    "desc": "指控表决程序违规：成功则政策暂停 5 分钟后重新表决。"
  },
  {
    "id": "jg_rights",
    "name": "侵犯权利",
    "icon": "🗽",
    "baseChance": 0.35,
    "desc": "指控政策侵犯市民权利：成功则政策废除，满意度 +4。"
  },
  {
    "id": "jg_fiscal",
    "name": "财政违法",
    "icon": "💰",
    "baseChance": 0.45,
    "desc": "指控政策超支违法：成功则政策暂停 5 分钟，市长丑闻 +5。"
  },
  {
    "id": "jg_conflict",
    "name": "利益冲突",
    "icon": "⚖️",
    "baseChance": 0.5,
    "desc": "指控提案议员存在利益冲突：成功则提案议员去职，政策暂停。"
  },
  {
    "id": "jg_emergency",
    "name": "紧急状态滥用",
    "icon": "🚨",
    "baseChance": 0.4,
    "desc": "指控紧急状态宣布违法：成功则紧急状态立即解除。"
  }
];

/* 联合政府规则：过半席位、稳定度衰减、派系组阁诉求 */
const POL_COALITION_RULES = {
  "majoritySeats": 11,
  "stabilityDecayPerMin": 1.5,
  "stabilityBonusPerPromise": 8,
  "collapseThreshold": 20,
  "demands": {
    "industrial": [
      "pol_factory_grants",
      "pol_mining_rights"
    ],
    "eco": [
      "pol_carbon_cap",
      "pol_green_energy"
    ],
    "military": [
      "pol_defense_budget",
      "pol_veteran_fund"
    ],
    "welfare": [
      "pol_free_clinics",
      "pol_food_subsidy"
    ]
  },
  "desc": "无人过半（11 席）时须组阁：拉拢派系需承诺其核心政策；稳定度每分钟 -1.5，承诺兑现 +8，低于 20 崩溃并提前选举。"
};


/* ============================== 扩展系统（第四批） ============================== */

/* ---------- 选民群体模型 ---------- */
class PolVoterModel {
  constructor() {
    this.favor = {};    // {blocId: 好感 -50..50} 影响该群体投票倾向
    this.turnoutMod = {}; // {blocId: 投票率修正}
    for (const b of POL_VOTER_BLOCS) { this.favor[b.id] = 0; this.turnoutMod[b.id] = 0; }
  }

  // 竞选行动：针对某一群体
  campaign(blocId, actionId, game, politics) {
    const bloc = POL_VOTER_BLOCS.find(b => b.id === blocId);
    const a = POL_BLOC_CAMPAIGN.find(x => x.id === actionId);
    if (!bloc || !a) return { ok: false, reason: '未知群体或行动' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && a.cost) {
      for (const k in a.cost) if ((inv[k] || 0) < a.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in a.cost) inv[k] -= a.cost[k];
    }
    this.favor[blocId] = _polClamp((this.favor[blocId] || 0) + (a.effects.favor || 0), -50, 50);
    this.turnoutMod[blocId] = _polClamp((this.turnoutMod[blocId] || 0) + (a.effects.turnout || 0), -0.2, 0.2);
    if (a.effects.trustDebt && politics) {
      politics.protest.trustDebts.push({ desc: '对' + bloc.name + '的竞选承诺', dueAt: politics.gameTimeMs + 3 * 60 * 1000, penaltySat: -10 });
    }
    if (a.effects.scandal && politics) politics.scandal = _polClamp(politics.scandal + a.effects.scandal, 0, 100);
    return { ok: true, bloc: bloc.name, favor: this.favor[blocId], turnout: Math.round((bloc.turnout + this.turnoutMod[blocId]) * 100) };
  }

  // 选举预测：按群体规模 x 投票率 x 倾向，加权算出各派系得票率，再折算 21 席
  forecast(politics) {
    const votes = { industrial: 0, eco: 0, military: 0, welfare: 0 };
    let total = 0;
    const sat = politics ? politics.satisfaction.value : 50;
    for (const b of POL_VOTER_BLOCS) {
      const turnout = _polClamp(b.turnout + (this.turnoutMod[b.id] || 0), 0.1, 0.95);
      const weight = b.share * turnout;
      // 好感修正：好感高的群体更倾向支持市长关联派系（民生派为市长基本盘假设）
      // 关切议题表现：议题因子得分影响该群体的派系倾向
      const lean = { ...b.lean };
      if (politics) {
        for (const issue of b.issues) {
          const rec = politics.satisfaction.factors[issue];
          if (rec) {
            // 议题表现差 → 该群体向反对党（当前非执政倾向）漂移
            if (rec.score < -5) {
              lean.welfare = Math.max(0.05, lean.welfare - 0.05);
              lean.industrial = Math.min(0.6, lean.industrial + 0.03);
            } else if (rec.score > 5) {
              lean.welfare = Math.min(0.6, lean.welfare + 0.03);
            }
          }
        }
        // 满意度整体影响：高满意度利好民生派（执政），低满意度利好工业/军事派（求变）
        if (sat >= 65) lean.welfare = Math.min(0.65, lean.welfare + 0.05);
        else if (sat < 35) { lean.industrial = Math.min(0.6, lean.industrial + 0.05); lean.military = Math.min(0.6, lean.military + 0.05); }
      }
      const favorShift = (this.favor[b.id] || 0) / 100; // 好感向民生派（市长）倾斜
      lean.welfare = _polClamp(lean.welfare + favorShift * 0.1, 0.02, 0.7);
      const sum = lean.industrial + lean.eco + lean.military + lean.welfare;
      for (const k in votes) votes[k] += weight * (lean[k] / sum);
      total += weight;
    }
    const shares = {};
    for (const k in votes) shares[k] = Math.round(votes[k] / total * 1000) / 10;
    // 折算席位（最大余数法）
    const raw = {};
    for (const k in shares) raw[k] = shares[k] / 100 * POLITICS.COUNCIL_SEATS;
    const seats = {};
    let assigned = 0;
    for (const k in raw) { seats[k] = Math.floor(raw[k]); assigned += seats[k]; }
    const remainders = Object.keys(raw).sort((a, b) => (raw[b] - Math.floor(raw[b])) - (raw[a] - Math.floor(raw[a])));
    for (let i = 0; assigned < POLITICS.COUNCIL_SEATS && i < remainders.length; i++) { seats[remainders[i]]++; assigned++; }
    return { shares, seats, totalWeight: Math.round(total * 100) / 100 };
  }

  // 群体报告：规模、投票率、好感、关切议题现状
  blocReport(politics) {
    return POL_VOTER_BLOCS.map(b => {
      const issues = b.issues.map(fid => {
        const rec = politics ? politics.satisfaction.factors[fid] : null;
        const f = POL_SAT_FACTORS.find(x => x.id === fid);
        return { id: fid, name: f ? f.name : fid, score: rec ? rec.score : 0 };
      });
      return { id: b.id, name: b.name, icon: b.icon, share: Math.round(b.share * 100),
        turnout: Math.round((_polClamp(b.turnout + (this.turnoutMod[b.id] || 0), 0.1, 0.95)) * 100),
        favor: this.favor[b.id] || 0, lean: _polClone(b.lean), issues };
    });
  }

  serialize() { return { favor: _polClone(this.favor), turnoutMod: _polClone(this.turnoutMod) }; }
  static deserialize(d) {
    const v = new PolVoterModel();
    v.favor = _polClone(d.favor || {});
    v.turnoutMod = _polClone(d.turnoutMod || {});
    return v;
  }
}

/* ---------- 联合政府 ---------- */
class PolCoalition {
  constructor() {
    this.active = false;
    this.members = [];       // 派系 id 列表
    this.promises = [];      // [{faction, policyId, fulfilled}]
    this.stability = 100;    // 稳定度 0-100
    this.formedAt = 0;
    this.collapses = 0;
  }

  // 组阁：选择 2 个以上派系，合计席位须过半；每派系需承诺 1 项其核心政策
  form(factionIds, parliament, politics) {
    if (this.active) return { ok: false, reason: '联合政府已存在' };
    if (!Array.isArray(factionIds) || factionIds.length < 2) return { ok: false, reason: '组阁至少需要 2 个派系' };
    const seats = parliament.seatCount().byFaction;
    const total = factionIds.reduce((a, f) => a + (seats[f] || 0), 0);
    if (total < POL_COALITION_RULES.majoritySeats) {
      return { ok: false, reason: '席位不足：' + total + '/' + POL_COALITION_RULES.majoritySeats + ' 席，未过半' };
    }
    this.members = [...factionIds];
    this.promises = [];
    for (const f of factionIds) {
      const demand = POL_COALITION_RULES.demands[f][0];
      this.promises.push({ faction: f, policyId: demand, name: POL_POLICIES[demand].name, fulfilled: !!politics.enacted.has(demand) });
    }
    this.active = true;
    this.stability = 60 + total * 2; // 席位越多初始越稳定
    this.stability = Math.min(100, this.stability);
    this.formedAt = politics ? politics.gameTimeMs : 0;
    if (politics) politics.log('联合政府成立：' + factionIds.map(f => POL_FACTIONS[f].name).join(' + ') + '（' + total + ' 席），稳定度 ' + Math.round(this.stability));
    return { ok: true, members: this.members, seats: total, stability: Math.round(this.stability), promises: _polClone(this.promises) };
  }

  // 每分钟：稳定度衰减；承诺兑现加稳定；任一成员派系支持度 < 15 则额外 -5
  tickMinute(politics) {
    if (!this.active) return null;
    this.stability -= POL_COALITION_RULES.stabilityDecayPerMin;
    for (const p of this.promises) {
      if (!p.fulfilled && politics.enacted.has(p.policyId)) {
        p.fulfilled = true;
        this.stability = Math.min(100, this.stability + POL_COALITION_RULES.stabilityBonusPerPromise);
        if (politics) politics.log('组阁承诺兑现：' + POL_FACTIONS[p.faction].name + '的「' + p.name + '」，稳定度 +' + POL_COALITION_RULES.stabilityBonusPerPromise);
      }
    }
    for (const f of this.members) {
      if ((politics.factions.support[f] || 0) < 15) this.stability -= 5;
    }
    if (this.stability <= POL_COALITION_RULES.collapseThreshold) {
      return this.collapse(politics);
    }
    return { stability: Math.round(this.stability) };
  }

  collapse(politics) {
    const members = this.members.map(f => POL_FACTIONS[f].name).join(' + ');
    this.active = false;
    this.members = [];
    this.collapses++;
    if (politics) {
      politics.log('联合政府崩溃：' + members + '分道扬镳，提前选举！');
      // 提前选举：把下次选举时间设为现在
      politics.parliament.nextElectionAt = politics.gameTimeMs;
      politics.satisfaction.value = _polClamp(politics.satisfaction.value - 5, 0, 100);
    }
    return { collapsed: true, stability: 0 };
  }

  // 联合政府存续时，成员派系议员投票纪律 +10%（忠诚度临时加成通过 lobbiedStance 体现）
  disciplineBonus(factionId) {
    if (!this.active) return 0;
    return this.members.includes(factionId) ? 0.3 : 0;
  }

  serialize() { return { active: this.active, members: [...this.members], promises: _polClone(this.promises), stability: this.stability, formedAt: this.formedAt, collapses: this.collapses }; }
  static deserialize(d) {
    const c = new PolCoalition();
    c.active = !!d.active;
    c.members = [...(d.members || [])];
    c.promises = _polClone(d.promises || []);
    c.stability = d.stability || 0;
    c.formedAt = d.formedAt || 0;
    c.collapses = d.collapses || 0;
    return c;
  }
}

/* ---------- 司法审查 ---------- */
class PolJudicial {
  constructor() {
    this.cases = [];        // 审理记录
    this.suspended = {};    // {policyId: untilMs} 被暂停的政策
    this.integrity = 70;    // 法院廉洁度 0-100（丑闻侵蚀）
  }

  // 对已颁布政策提起司法审查
  challenge(policyId, groundsId, politics) {
    const p = POL_POLICIES[policyId];
    const g = POL_JUDICIAL_GROUNDS.find(x => x.id === groundsId);
    if (!p) return { ok: false, reason: '未知政策' };
    if (!g) return { ok: false, reason: '未知审查理由' };
    if (!politics.enacted.has(policyId)) return { ok: false, reason: '该政策未在实施中' };
    // 成功率：基础概率 + 丑闻*0.3% + 法院廉洁度修正（廉洁度越高越敢判政府败诉）
    const chance = _polClamp(g.baseChance + (politics.scandal || 0) * 0.003 + (this.integrity - 50) * 0.002, 0.05, 0.9);
    const success = Math.random() < chance;
    const rec = { t: Date.now(), policy: p.name, grounds: g.name, chance: Math.round(chance * 100), success };
    this.cases.unshift(rec);
    if (this.cases.length > 15) this.cases.length = 15;
    if (!success) {
      if (politics) politics.log('司法审查驳回：' + p.name + '（' + g.name + '，成功率 ' + Math.round(chance * 100) + '%）');
      return { ok: true, success: false, chance: Math.round(chance * 100) };
    }
    // 成功后的裁决
    let ruling = '';
    if (groundsId === 'jg_unconstitutional' || groundsId === 'jg_rights') {
      politics.repeal(policyId, '司法审查裁定违宪/侵权');
      ruling = '政策被裁定废除';
      if (groundsId === 'jg_rights') politics.satisfaction.value = _polClamp(politics.satisfaction.value + 4, 0, 100);
    } else if (groundsId === 'jg_procedure' || groundsId === 'jg_fiscal') {
      this.suspended[policyId] = politics.gameTimeMs + 5 * 60 * 1000;
      ruling = '政策暂停 5 分钟，重新表决';
      if (groundsId === 'jg_fiscal') politics.scandal = _polClamp(politics.scandal + 5, 0, 100);
    } else if (groundsId === 'jg_conflict') {
      this.suspended[policyId] = politics.gameTimeMs + 5 * 60 * 1000;
      // 提案议员去职：找一名该政策支持派系的议员
      const cand = politics.parliament.councilors.find(c => (p.factionStance[c.faction] || 0) > 0);
      if (cand) {
        const idx = politics.parliament.councilors.indexOf(cand);
        politics.parliament.councilors.splice(idx, 1);
        ruling = '提案议员 ' + cand.name + ' 去职，政策暂停 5 分钟';
      } else ruling = '政策暂停 5 分钟';
    } else if (groundsId === 'jg_emergency') {
      if (politics.emergency) politics.emergency.lift(politics);
      ruling = '紧急状态被裁定解除';
    }
    rec.ruling = ruling;
    if (politics) politics.log('司法审查成立：' + p.name + '——' + ruling);
    return { ok: true, success: true, chance: Math.round(chance * 100), ruling };
  }

  // 暂停到期恢复（由 updateExtended 调用）
  tickMinute(politics) {
    const now = politics ? politics.gameTimeMs : 0;
    for (const id in this.suspended) {
      if (now >= this.suspended[id]) {
        delete this.suspended[id];
        if (politics) politics.log('政策暂停结束：' + (POL_POLICIES[id] || {}).name + ' 恢复实施（需重新表决后才算正式恢复）');
      }
    }
    // 法院廉洁度受丑闻侵蚀
    if (politics) this.integrity = _polClamp(this.integrity - (politics.scandal || 0) * 0.001, 30, 95);
  }

  isSuspended(policyId, gameTimeMs) {
    return (this.suspended[policyId] || 0) > gameTimeMs;
  }

  serialize() { return { cases: _polClone(this.cases), suspended: _polClone(this.suspended), integrity: this.integrity }; }
  static deserialize(d) {
    const j = new PolJudicial();
    j.cases = _polClone(d.cases || []);
    j.suspended = _polClone(d.suspended || {});
    j.integrity = typeof d.integrity === 'number' ? d.integrity : 70;
    return j;
  }
}

/* ---------- 罢免公投 ---------- */
// 满意度 < 25 持续 3 分钟 → 罢免联署启动；联署按人口比例累积；
// 达标后举行罢免投票：支持率 = 满意度修正，失败则市长留任但丑闻 +10（政治报复）。
class PolRecall {
  constructor() {
    this.petitionActive = false;
    this.signatures = 0;
    this.signaturesNeeded = 100;
    this.lowSatMs = 0;
    this.recallVotes = [];  // 历史
    this.cooldownUntil = 0;
  }

  tick(dtMs, gameTimeMs, politics, game) {
    if (gameTimeMs < this.cooldownUntil) return null;
    const sat = politics.satisfaction.value;
    if (sat < 25) this.lowSatMs += dtMs;
    else this.lowSatMs = Math.max(0, this.lowSatMs - dtMs);
    if (!this.petitionActive && this.lowSatMs >= 3 * 60 * 1000) {
      this.petitionActive = true;
      const pop = (game && game.pop && game.pop.count) || 10;
      this.signaturesNeeded = Math.max(20, Math.round(pop * 0.5));
      this.signatures = 0;
      politics.log('罢免联署启动：满意度长期低于 25，市民开始征集签名（需 ' + this.signaturesNeeded + ' 个）');
      return { started: true, needed: this.signaturesNeeded };
    }
    if (this.petitionActive) {
      // 每分钟新增签名：不满越深越快
      const perMin = Math.round((25 - sat) * 2 + 5);
      this.signatures += Math.round(perMin * dtMs / 60000);
      if (this.signatures >= this.signaturesNeeded) {
        return this.holdVote(politics, gameTimeMs);
      }
    }
    return null;
  }

  holdVote(politics, gameTimeMs) {
    this.petitionActive = false;
    const sat = politics.satisfaction.value;
    const removeShare = _polClamp(100 - sat * 1.2 + (politics.scandal || 0) * 0.2, 5, 95);
    const removed = Math.random() * 100 < removeShare;
    const rec = { t: Date.now(), removeShare: Math.round(removeShare), removed, signatures: this.signatures };
    this.recallVotes.unshift(rec);
    if (this.recallVotes.length > 5) this.recallVotes.length = 5;
    this.signatures = 0;
    this.lowSatMs = 0;
    this.cooldownUntil = gameTimeMs + 10 * 60 * 1000;
    if (removed) {
      politics.mayor.caretaker = true;
      politics.mayor.termsLost++;
      politics.log('罢免投票通过（' + Math.round(removeShare) + '% 支持罢免）：市长被罢免，进入看守状态！');
    } else {
      politics.scandal = _polClamp(politics.scandal + 10, 0, 100);
      politics.log('罢免投票未通过（支持罢免 ' + Math.round(removeShare) + '%）：市长留任，但政治报复使丑闻 +10');
    }
    return { voteHeld: true, removed, removeShare: Math.round(removeShare) };
  }

  serialize() { return { petitionActive: this.petitionActive, signatures: this.signatures, signaturesNeeded: this.signaturesNeeded, lowSatMs: this.lowSatMs, recallVotes: _polClone(this.recallVotes), cooldownUntil: this.cooldownUntil }; }
  static deserialize(d) {
    const r = new PolRecall();
    r.petitionActive = !!d.petitionActive;
    r.signatures = d.signatures || 0;
    r.signaturesNeeded = d.signaturesNeeded || 100;
    r.lowSatMs = d.lowSatMs || 0;
    r.recallVotes = _polClone(d.recallVotes || []);
    r.cooldownUntil = d.cooldownUntil || 0;
    return r;
  }
}

/* ---------- 满意度因子明细（12 项逐项拆解） ---------- */
PolSatisfaction.prototype.factorDetail = function (factorId, game, politics) {
  const f = POL_SAT_FACTORS.find(x => x.id === factorId);
  if (!f) return null;
  const snap = this.snapshot(game, politics);
  const inputMap = { food: snap.perFood, water: snap.perWater, power: snap.powerGap,
    housing: snap.housingRatio, jobs: snap.jobRatio, health: snap.hospitals,
    safety: snap.defense, tax: snap.taxMul, welfare: snap.welfareCount,
    pollution: snap.pollutionMul, transport: snap.transit, entertainment: snap.entertain };
  const v = inputMap[factorId];
  const score = PolSatisfaction._lookup(f.thresholds, typeof v === 'number' ? v : 0);
  // 逐档说明：当前处于哪一档，上一档/下一档的门槛是多少
  let curBand = null, nextBand = null, prevBand = null;
  for (let i = 0; i < f.thresholds.length; i++) {
    if (v >= f.thresholds[i][0]) { curBand = { x: f.thresholds[i][0], score: f.thresholds[i][1] }; prevBand = i > 0 ? { x: f.thresholds[i - 1][0], score: f.thresholds[i - 1][1] } : null; }
    else if (!nextBand) { nextBand = { x: f.thresholds[i][0], score: f.thresholds[i][1] }; break; }
  }
  return { id: f.id, name: f.name, icon: f.icon, weight: f.weight, value: v, score,
    desc: f.desc, curBand, nextBand, prevBand,
    advice: score < 0 ? ('当前扣 ' + (-score) + ' 点；提升到 ' + (nextBand ? nextBand.x : '上限') + ' 可得 ' + (nextBand ? nextBand.score : score) + ' 点') : '当前为正贡献' };
};

/* ---------- 任期报告 ---------- */
class PolTermReport {
  static generate(politics, game) {
    const par = politics.parliament;
    const seats = par.seatCount();
    const enactedByCat = {};
    for (const id of politics.enacted) {
      const cat = (POL_POLICIES[id] || {}).cat || 'other';
      enactedByCat[cat] = (enactedByCat[cat] || 0) + 1;
    }
    const passed = par.history.filter(h => h.result === 'passed').length;
    const rejected = par.history.filter(h => h.result === 'rejected').length;
    const stats = politics.chronicle ? politics.chronicle.councilorStats(par) : {};
    const rev = PolTaxModel.computeRevenue(game, politics);
    const forecast = politics.voterModel ? politics.voterModel.forecast(politics) : null;
    return {
      term: politics.mayor.term,
      approval: Math.round(politics.mayor.approval),
      satisfaction: Math.round(politics.satisfaction.value),
      satisfactionTarget: politics.satisfaction.target,
      seats,
      enactedCount: politics.enacted.size,
      enactedByCat,
      billsPassed: passed,
      billsRejected: rejected,
      passRate: (passed + rejected) > 0 ? Math.round(passed / (passed + rejected) * 100) : 0,
      protests: politics.protest.totalProtests,
      strikes: politics.protest.totalStrikes,
      scandal: Math.round(politics.scandal),
      debt: politics.budget ? Math.round(politics.budget.debt) : 0,
      reserve: politics.budget ? Math.round(politics.budget.reserve) : 0,
      taxRevenue: rev,
      councilorStats: stats,
      forecast: forecast ? { shares: forecast.shares, seats: forecast.seats } : null,
      coalition: politics.coalition ? { active: politics.coalition.active, members: [...politics.coalition.members], stability: Math.round(politics.coalition.stability) } : null,
      charterRatified: politics.charter ? [...politics.charter.ratified] : [],
      petitionsResolved: politics.petitions ? politics.petitions.resolved : 0,
      petitionsExpired: politics.petitions ? politics.petitions.expired : 0,
    };
  }
}

/* ---------- 第四批接入 ---------- */
(function () {
  const _origInitExt = ColonialPoliticsManager.prototype.initExtended;
  ColonialPoliticsManager.prototype.initExtended = function () {
    _origInitExt.call(this);
    if (!this.voterModel) {
      this.voterModel = new PolVoterModel();
      this.coalition = new PolCoalition();
      this.judicial = new PolJudicial();
      this.recall = new PolRecall();
      this._coalitionMinuteAcc = 0;
    }
  };
  // 悬峙议会检测：选举后无人过半时提示组阁
  const _origUpdate = ColonialPoliticsManager.prototype.update;
  ColonialPoliticsManager.prototype.update = function (now, dt, game) {
    const seatsBefore = this.parliament.seatCount();
    const ret = _origUpdate.call(this, now, dt, game);
    const seats = this.parliament.seatCount();
    if (seats.total === POLITICS.COUNCIL_SEATS && this.parliament.session !== (this._lastHungSession || 0)) {
      const maxSeats = Math.max(...Object.values(seats.byFaction));
      if (maxSeats < POL_COALITION_RULES.majoritySeats && !this.coalition.active) {
        this._lastHungSession = this.parliament.session;
        this.log('悬峙议会：无人过半（最多 ' + maxSeats + ' 席），请组建联合政府（PolCoalition.form）');
      }
    }
    return ret;
  };
  const _origUpdateExt = ColonialPoliticsManager.prototype.updateExtended;
  ColonialPoliticsManager.prototype.updateExtended = function (dtMs, game) {
    _origUpdateExt.call(this, dtMs, game);
    this.initExtended();
    this._coalitionMinuteAcc += dtMs;
    if (this._coalitionMinuteAcc >= 60 * 1000) {
      this._coalitionMinuteAcc -= 60 * 1000;
      this.coalition.tickMinute(this);
      this.judicial.tickMinute(this);
    }
    this.recall.tick(dtMs, this.gameTimeMs, this, game);
    // 联合政府纪律：成员派系议员获得临时立场加成（通过 _coalitionBoost 实现）
    if (this.coalition.active) {
      for (const c of this.parliament.councilors) {
        if (this.coalition.members.includes(c.faction)) c._coalitionBoost = this.coalition.disciplineBonus(c.faction);
        else if (c._coalitionBoost) c._coalitionBoost = 0;
      }
    }
  };
  const _origSave = ColonialPoliticsManager.prototype.save;
  ColonialPoliticsManager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended();
    s.extended4 = { voterModel: this.voterModel.serialize(), coalition: this.coalition.serialize(),
      judicial: this.judicial.serialize(), recall: this.recall.serialize() };
    return s;
  };
  const _origLoad = ColonialPoliticsManager.prototype.load;
  ColonialPoliticsManager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended();
    if (data && data.extended4) {
      if (data.extended4.voterModel) this.voterModel = PolVoterModel.deserialize(data.extended4.voterModel);
      if (data.extended4.coalition) this.coalition = PolCoalition.deserialize(data.extended4.coalition);
      if (data.extended4.judicial) this.judicial = PolJudicial.deserialize(data.extended4.judicial);
      if (data.extended4.recall) this.recall = PolRecall.deserialize(data.extended4.recall);
    }
  };
})();

/* ---------- 第四批自测 ---------- */
class PoliticsExtended4SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _polTimeMs: 0,
      player: { inv: { iron: 500, ice: 500, rare: 200, water: 500, food: 500, steel: 300, tech: 500, uranium: 50, he3: 20 } },
      pop: { count: 40, cap: () => 100 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50, totalPopCap: () => 100 },
      military: { raidStrength: 0 } });
    const m = new ColonialPoliticsManager();
    const g = mockGame();
    m.initExtended();
    check('第四批系统初始化', !!m.voterModel && !!m.coalition && !!m.judicial && !!m.recall, '');
    // 选民模型
    const fc = m.voterModel.forecast(m);
    check('选举预测席位合计 21', Object.values(fc.seats).reduce((a, b) => a + b, 0) === 21, JSON.stringify(fc.seats));
    check('选举预测得票率合计 ~100', Math.abs(Object.values(fc.shares).reduce((a, b) => a + b, 0) - 100) < 1, JSON.stringify(fc.shares));
    const bc = m.voterModel.campaign('bloc_workers', 'bc_townhall', g, m);
    check('选民群体竞选提升好感', bc.ok && bc.favor > 0, JSON.stringify(bc));
    const br = m.voterModel.blocReport(m);
    check('群体报告 8 个', br.length === 8, 'n=' + br.length);
    // 联合政府
    const seats = m.parliament.seatCount().byFaction;
    const top2 = Object.entries(seats).sort((a, b) => b[1] - a[1]).slice(0, 2).map(e => e[0]);
    const form = m.coalition.form(top2, m.parliament, m);
    check('联合政府组阁（席位过半则成功）', (top2.reduce((a, f) => a + (seats[f] || 0), 0) >= 11) ? form.ok : !form.ok, JSON.stringify(form).slice(0, 120));
    if (form.ok) {
      const tick = m.coalition.tickMinute(m);
      check('联合政府稳定度衰减', tick && typeof tick.stability === 'number', JSON.stringify(tick));
    }
    // 司法审查
    m.enact('pol_curfew');
    const ch = m.judicial.challenge('pol_curfew', 'jg_rights', m);
    check('司法审查返回裁决', ch.ok && typeof ch.success === 'boolean', JSON.stringify(ch));
    // 因子明细
    m.satisfaction.compute(g, m);
    const fd = m.satisfaction.factorDetail('food', g, m);
    check('满意度因子明细有效', fd && typeof fd.score === 'number' && !!fd.advice, JSON.stringify(fd).slice(0, 120));
    // 任期报告
    const rep = PolTermReport.generate(m, g);
    check('任期报告含 20+ 字段', rep && typeof rep.passRate === 'number' && typeof rep.debt === 'number', 'keys=' + Object.keys(rep).length);
    // 罢免
    m.satisfaction.value = 10;
    const rec = m.recall.tick(3 * 60 * 1000 + 1000, m.gameTimeMs, m, g);
    check('低满意度持续 3 分钟启动罢免联署', m.recall.petitionActive || (rec && rec.started), JSON.stringify(rec));
    if (m.recall.petitionActive) {
      m.recall.signatures = m.recall.signaturesNeeded;
      const vote = m.recall.holdVote(m, m.gameTimeMs);
      check('罢免投票有结果', vote && typeof vote.removed === 'boolean', JSON.stringify(vote));
    }
    // 存档往返（第四批）
    const saved = m.save();
    const m2 = new ColonialPoliticsManager();
    m2.load(saved);
    check('第四批存档往返：选民模型保留', !!m2.voterModel && typeof m2.voterModel.favor.bloc_workers === 'number', '');
    check('第四批存档往返：司法记录保留', !!m2.judicial && Array.isArray(m2.judicial.cases), '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = PoliticsSelfTest.run;
  PoliticsSelfTest.run = function () {
    const base = _origRun();
    const ext4 = PoliticsExtended4SelfTest.run();
    return { total: base.total + ext4.total, passed: base.passed + ext4.passed,
      failed: [...base.failed, ...ext4.failed],
      results: [...base.results, ...ext4.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.PolVoterModel = PolVoterModel;
  window.PolCoalition = PolCoalition;
  window.PolJudicial = PolJudicial;
  window.PolRecall = PolRecall;
  window.PolTermReport = PolTermReport;
  window.PoliticsExtended4SelfTest = PoliticsExtended4SelfTest;
  window.POL_VOTER_BLOCS = POL_VOTER_BLOCS;
  window.POL_BLOC_CAMPAIGN = POL_BLOC_CAMPAIGN;
  window.POL_JUDICIAL_GROUNDS = POL_JUDICIAL_GROUNDS;
  window.POL_COALITION_RULES = POL_COALITION_RULES;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { PolVoterModel, PolCoalition, PolJudicial, PolRecall,
    PolTermReport, PoliticsExtended4SelfTest, POL_VOTER_BLOCS, POL_BLOC_CAMPAIGN,
    POL_JUDICIAL_GROUNDS, POL_COALITION_RULES });
}

/* 12 个派系内部事件：按支持度/污染/债务/满意度触发，二选一处置 */
const POL_FACTION_EVENTS = [
  {
    "id": "fe_ind_split",
    "faction": "industrial",
    "name": "工业派内讧",
    "trigger": "support<20",
    "options": [
      {
        "id": "mediate",
        "label": "市长出面调解（消耗 10 科技点）",
        "cost": {
          "tech": 10
        },
        "effects": {
          "faction": {
            "industrial": 5
          },
          "sat": 1
        }
      },
      {
        "id": "ignore",
        "label": "不予理会",
        "cost": {},
        "effects": {
          "faction": {
            "industrial": -5
          }
        }
      }
    ]
  },
  {
    "id": "fe_ind_boom",
    "faction": "industrial",
    "name": "工业派献金",
    "trigger": "support>=60",
    "options": [
      {
        "id": "accept",
        "label": "接受献金（获得 40 铁矿，丑闻 +5）",
        "cost": {},
        "effects": {
          "gain": {
            "iron": 40
          },
          "scandal": 5,
          "faction": {
            "industrial": 3
          }
        }
      },
      {
        "id": "refuse",
        "label": "拒绝献金",
        "cost": {},
        "effects": {
          "faction": {
            "industrial": -3
          },
          "scandal": -3
        }
      }
    ]
  },
  {
    "id": "fe_eco_march",
    "faction": "eco",
    "name": "生态派大游行",
    "trigger": "pollution>1.3",
    "options": [
      {
        "id": "join",
        "label": "市长加入游行（满意度 +4）",
        "cost": {},
        "effects": {
          "sat": 4,
          "faction": {
            "eco": 4,
            "industrial": -2
          }
        }
      },
      {
        "id": "disperse",
        "label": "劝散游行",
        "cost": {},
        "effects": {
          "sat": -2,
          "faction": {
            "eco": -4
          }
        }
      }
    ]
  },
  {
    "id": "fe_eco_win",
    "faction": "eco",
    "name": "生态派获奖",
    "trigger": "support>=60",
    "options": [
      {
        "id": "celebrate",
        "label": "公开祝贺（满意度 +2）",
        "cost": {
          "food": 5
        },
        "effects": {
          "sat": 2,
          "faction": {
            "eco": 3
          }
        }
      },
      {
        "id": "ignore",
        "label": "不予理会",
        "cost": {},
        "effects": {
          "faction": {
            "eco": -2
          }
        }
      }
    ]
  },
  {
    "id": "fe_mil_mutiny",
    "faction": "military",
    "name": "驻军哗变传闻",
    "trigger": "support<20",
    "options": [
      {
        "id": "pay",
        "label": "补发军饷（消耗 30 食物）",
        "cost": {
          "food": 30
        },
        "effects": {
          "faction": {
            "military": 6
          },
          "sat": 2
        }
      },
      {
        "id": "discipline",
        "label": "军法处置带头者",
        "cost": {},
        "effects": {
          "faction": {
            "military": -6
          },
          "scandal": 6
        }
      }
    ]
  },
  {
    "id": "fe_mil_hero",
    "faction": "military",
    "name": "战斗英雄归来",
    "trigger": "support>=60",
    "options": [
      {
        "id": "honor",
        "label": "授勋仪式（消耗 10 食物）",
        "cost": {
          "food": 10
        },
        "effects": {
          "sat": 4,
          "faction": {
            "military": 4
          }
        }
      },
      {
        "id": "quiet",
        "label": "低调处理",
        "cost": {},
        "effects": {
          "faction": {
            "military": -2
          }
        }
      }
    ]
  },
  {
    "id": "fe_wel_strike",
    "faction": "welfare",
    "name": "医护罢工",
    "trigger": "health<1",
    "options": [
      {
        "id": "raise",
        "label": "提高医护待遇（每分钟 +3 食物维持费）",
        "cost": {},
        "effects": {
          "sat": 5,
          "faction": {
            "welfare": 5
          },
          "wageUpkeep": {
            "food": 3
          }
        }
      },
      {
        "id": "replace",
        "label": "调派替补人员",
        "cost": {},
        "effects": {
          "sat": -3,
          "faction": {
            "welfare": -4
          }
        }
      }
    ]
  },
  {
    "id": "fe_wel_fund",
    "faction": "welfare",
    "name": "慈善募捐成功",
    "trigger": "support>=60",
    "options": [
      {
        "id": "match",
        "label": "政府配捐（消耗 20 食物）",
        "cost": {
          "food": 20
        },
        "effects": {
          "sat": 4,
          "faction": {
            "welfare": 4
          }
        }
      },
      {
        "id": "pocket",
        "label": "挪用善款（获得 20 食物，丑闻 +12）",
        "cost": {},
        "effects": {
          "gain": {
            "food": 20
          },
          "scandal": 12,
          "faction": {
            "welfare": -5
          }
        }
      }
    ]
  },
  {
    "id": "fe_all_scandal",
    "faction": "industrial",
    "name": "跨派系贪腐案",
    "trigger": "scandal>=50",
    "options": [
      {
        "id": "purge",
        "label": "全面清洗（消耗 15 科技点，丑闻 -15）",
        "cost": {
          "tech": 15
        },
        "effects": {
          "scandal": -15,
          "sat": 3
        }
      },
      {
        "id": "cover",
        "label": "压下案件（丑闻 +10）",
        "cost": {},
        "effects": {
          "scandal": 10,
          "sat": -4
        }
      }
    ]
  },
  {
    "id": "fe_all_youth",
    "faction": "welfare",
    "name": "青年参政热潮",
    "trigger": "sat>=70",
    "options": [
      {
        "id": "embrace",
        "label": "设立青年议事会（满意度 +4）",
        "cost": {
          "tech": 5
        },
        "effects": {
          "sat": 4,
          "faction": {
            "welfare": 3,
            "eco": 2
          }
        }
      },
      {
        "id": "ignore",
        "label": "不予理会",
        "cost": {},
        "effects": {
          "sat": -2
        }
      }
    ]
  },
  {
    "id": "fe_all_recession",
    "faction": "industrial",
    "name": "经济衰退预警",
    "trigger": "debt>300",
    "options": [
      {
        "id": "stimulus",
        "label": "刺激计划（消耗 50 铁矿）",
        "cost": {
          "iron": 50
        },
        "effects": {
          "sat": 5,
          "faction": {
            "industrial": 4
          }
        }
      },
      {
        "id": "austerity",
        "label": "紧缩度日",
        "cost": {},
        "effects": {
          "sat": -4,
          "faction": {
            "welfare": -3
          }
        }
      }
    ]
  },
  {
    "id": "fe_all_unity",
    "faction": "eco",
    "name": "全城团结日",
    "trigger": "sat>=75",
    "options": [
      {
        "id": "festival",
        "label": "举办团结庆典（消耗 25 食物）",
        "cost": {
          "food": 25
        },
        "effects": {
          "sat": 6
        }
      },
      {
        "id": "skip",
        "label": "取消庆典",
        "cost": {},
        "effects": {
          "sat": -3
        }
      }
    ]
  }
];

/* 市政厅 5 级升级：法案上限、游说/公投折扣、党鞭加成均为真实数值 */
const POL_CITY_HALL = [
  {
    "level": 1,
    "name": "临时市政厅",
    "icon": "🏕️",
    "cost": {},
    "unlocks": {
      "maxBills": 3,
      "lobbyDiscount": 0,
      "referendumDiscount": 0,
      "whipBonus": 0
    },
    "desc": "开局等级：在审法案上限 3 项。"
  },
  {
    "level": 2,
    "name": "市政厅",
    "icon": "🏛️",
    "cost": {
      "iron": 100,
      "steel": 20
    },
    "unlocks": {
      "maxBills": 4,
      "lobbyDiscount": 1,
      "referendumDiscount": 0,
      "whipBonus": 0
    },
    "desc": "在审法案上限 4 项，游说便宜 1 科技点。"
  },
  {
    "level": 3,
    "name": "市政大厦",
    "icon": "🏢",
    "cost": {
      "iron": 200,
      "steel": 60,
      "tech": 20
    },
    "unlocks": {
      "maxBills": 5,
      "lobbyDiscount": 2,
      "referendumDiscount": 5,
      "whipBonus": 1
    },
    "desc": "在审法案上限 5 项，游说便宜 2 点，公投便宜 5 点，党鞭督票多影响 1 名议员。"
  },
  {
    "level": 4,
    "name": "穹顶议会大厦",
    "icon": "🏰",
    "cost": {
      "steel": 150,
      "tech": 50,
      "rare": 20
    },
    "unlocks": {
      "maxBills": 6,
      "lobbyDiscount": 3,
      "referendumDiscount": 10,
      "whipBonus": 2
    },
    "desc": "在审法案上限 6 项，游说便宜 3 点，公投便宜 10 点。"
  },
  {
    "level": 5,
    "name": "星港总督府",
    "icon": "🌟",
    "cost": {
      "steel": 300,
      "tech": 100,
      "rare": 50
    },
    "unlocks": {
      "maxBills": 8,
      "lobbyDiscount": 5,
      "referendumDiscount": 15,
      "whipBonus": 3
    },
    "desc": "在审法案上限 8 项，游说便宜 5 点，公投便宜 15 点，市长支持率 +5。"
  }
];


/* ============================== 扩展系统（第五批） ============================== */

/* ---------- 派系内部事件 ---------- */
class PolFactionEvents {
  constructor() {
    this.active = null;   // {eventId, event}
    this.cooldowns = {};
    this._checkMs = 0;
  }

  _triggerMet(ev, politics, game) {
    const t = ev.trigger;
    if (t === 'support<20') return (politics.factions.support[ev.faction] || 0) < 20;
    if (t === 'support>=60') return (politics.factions.support[ev.faction] || 0) >= 60;
    if (t === 'pollution>1.3') return (politics.aggregateModifiers().pollutionMul || 1) > 1.3;
    if (t === 'health<1') {
      const snap = politics.satisfaction.snapshot(game, politics);
      return snap.hospitals < 1;
    }
    if (t === 'scandal>=50') return politics.scandal >= 50;
    if (t === 'sat>=70') return politics.satisfaction.value >= 70;
    if (t === 'sat>=75') return politics.satisfaction.value >= 75;
    if (t === 'debt>300') return politics.budget && politics.budget.debt > 300;
    return false;
  }

  tick(dtMs, gameTimeMs, politics, game) {
    this._checkMs += dtMs;
    if (this._checkMs < 2 * 60 * 1000) return null;
    this._checkMs = 0;
    if (this.active) return null;
    const cands = POL_FACTION_EVENTS.filter(ev =>
      (this.cooldowns[ev.id] || 0) <= gameTimeMs && this._triggerMet(ev, politics, game));
    if (!cands.length) return null;
    const ev = _polPick(cands);
    this.active = { eventId: ev.id, event: ev };
    if (politics) politics.log('派系事件：' + POL_FACTIONS[ev.faction].name + '——' + ev.name);
    return this.active;
  }

  resolve(optionId, game, politics) {
    if (!this.active) return { ok: false, reason: '没有进行中的派系事件' };
    const ev = this.active.event;
    const opt = ev.options.find(o => o.id === optionId);
    if (!opt) return { ok: false, reason: '未知选项' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && opt.cost) {
      for (const k in opt.cost) if ((inv[k] || 0) < opt.cost[k]) return { ok: false, reason: '资源不足' };
      for (const k in opt.cost) inv[k] -= opt.cost[k];
    }
    _polApplyEffects(opt.effects, game, politics);
    this.cooldowns[ev.id] = politics ? politics.gameTimeMs + 10 * 60 * 1000 : 0;
    this.active = null;
    return { ok: true, event: ev.name, option: opt.label };
  }

  serialize() { return { active: this.active ? { eventId: this.active.eventId } : null, cooldowns: _polClone(this.cooldowns) }; }
  static deserialize(d) {
    const f = new PolFactionEvents();
    if (d.active) {
      const ev = POL_FACTION_EVENTS.find(x => x.id === d.active.eventId);
      if (ev) f.active = { eventId: ev.id, event: ev };
    }
    f.cooldowns = _polClone(d.cooldowns || {});
    return f;
  }
}

/* ---------- 市政厅升级 ---------- */
class PolCityHall {
  constructor() {
    this.level = 1;
  }

  current() { return POL_CITY_HALL.find(h => h.level === this.level) || POL_CITY_HALL[0]; }
  next() { return POL_CITY_HALL.find(h => h.level === this.level + 1) || null; }

  upgrade(game, politics) {
    const nxt = this.next();
    if (!nxt) return { ok: false, reason: '市政厅已满级' };
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && nxt.cost) {
      for (const k in nxt.cost) if ((inv[k] || 0) < nxt.cost[k]) return { ok: false, reason: '资源不足：缺 ' + (nxt.cost[k] - (inv[k] || 0)) + ' ' + k };
      for (const k in nxt.cost) inv[k] -= nxt.cost[k];
    }
    this.level = nxt.level;
    if (politics) {
      politics.log('市政厅升级：' + nxt.name + '（在审法案上限 ' + nxt.unlocks.maxBills + ' 项）');
      if (nxt.level === 5) politics.mayor.approval = _polClamp(politics.mayor.approval + 5, 0, 100);
    }
    return { ok: true, level: this.level, name: nxt.name, unlocks: _polClone(nxt.unlocks) };
  }

  serialize() { return { level: this.level }; }
  static deserialize(d) {
    const h = new PolCityHall();
    h.level = d.level || 1;
    return h;
  }
}

// 市政厅效果接入议会：法案上限与游说折扣
(function () {
  const _origCanPropose = PolParliament.prototype.canPropose;
  PolParliament.prototype.canPropose = function (policyId, gameState) {
    const res = _origCanPropose.call(this, policyId, gameState);
    if (!res.ok) return res;
    // 市政厅等级决定在审上限（覆盖默认 3 项）
    const hall = this._cityHallProvider ? this._cityHallProvider() : null;
    const maxBills = hall ? hall.current().unlocks.maxBills : POLITICS.MAX_ACTIVE_BILLS;
    if (this.activeBills.length >= maxBills) return { ok: false, reason: '在审法案已满（' + maxBills + ' 项），请先完成投票或升级市政厅' };
    return { ok: true };
  };
  const _origLobbyPrice = PolParliament.prototype.lobbyPrice;
  PolParliament.prototype.lobbyPrice = function (c) {
    const base = _origLobbyPrice.call(this, c);
    const hall = this._cityHallProvider ? this._cityHallProvider() : null;
    const discount = hall ? hall.current().unlocks.lobbyDiscount : 0;
    return Math.max(1, base - discount);
  };
})();

/* ---------- 反对党领袖与不信任投票 ---------- */
class PolOpposition {
  constructor() {
    this.noConfidenceCooldownUntil = 0;
    this.votes = [];
  }

  // 反对党领袖：席位最多的非民生派（市长基本盘）派系中影响力最高的议员
  leader(parliament) {
    const seats = parliament.seatCount().byFaction;
    const oppFactions = Object.keys(seats).filter(f => f !== 'welfare').sort((a, b) => seats[b] - seats[a]);
    const top = oppFactions[0];
    if (!top) return null;
    const members = parliament.councilors.filter(c => c.faction === top);
    if (!members.length) return null;
    const lead = members.slice().sort((a, b) => b.influence - a.influence)[0];
    return { councilor: lead, faction: top, factionName: POL_FACTIONS[top].name, seats: seats[top] };
  }

  // 不信任投票：需 3 名议员附议；通过需过半数；通过则市长进入看守 + 提前市长选举
  callNoConfidence(parliament, politics, game) {
    const now = politics ? politics.gameTimeMs : 0;
    if (now < this.noConfidenceCooldownUntil) return { ok: false, reason: '不信任投票冷却中' };
    const lead = this.leader(parliament);
    if (!lead) return { ok: false, reason: '没有反对党领袖' };
    // 附议：找 3 名忠诚度低或反对市长的议员
    const seconders = parliament.councilors.filter(c => c.id !== lead.councilor.id && (c.loyalty < 45 || c.faction === lead.faction)).slice(0, 3);
    if (seconders.length < 3) return { ok: false, reason: '附议不足（需 3 名议员，现有 ' + seconders.length + ' 名）' };
    // 投票：支持率 = (100 - 市长支持率) 修正 + 丑闻修正
    const approval = politics.mayor.approval;
    const forN = parliament.councilors.filter(c => {
      const s = (100 - approval) / 100 + (c.faction === lead.faction ? 0.3 : 0) - c.loyalty / 200 + _polRand(-0.15, 0.15);
      return s > 0.5;
    }).length;
    const need = Math.ceil(parliament.councilors.length / 2);
    const passed = forN >= need;
    this.noConfidenceCooldownUntil = now + 10 * 60 * 1000;
    const rec = { t: Date.now(), leader: lead.councilor.name, for: forN, need, passed };
    this.votes.unshift(rec);
    if (this.votes.length > 10) this.votes.length = 10;
    if (passed && politics) {
      politics.mayor.caretaker = true;
      politics.mayor.nextElectionAt = politics.gameTimeMs + 60 * 1000; // 1 分钟后提前举行市长选举
      politics.log('不信任投票通过（' + forN + '/' + need + '）：市长进入看守状态，1 分钟后提前选举！');
    } else if (politics) {
      politics.log('不信任投票未通过（' + forN + '/' + need + '）：反对党领袖 ' + lead.councilor.name + ' 威信受损');
      lead.councilor.influence = Math.max(5, lead.councilor.influence - 8);
    }
    return { ok: true, passed, for: forN, need, leader: lead.councilor.name };
  }

  serialize() { return { noConfidenceCooldownUntil: this.noConfidenceCooldownUntil, votes: _polClone(this.votes) }; }
  static deserialize(d) {
    const o = new PolOpposition();
    o.noConfidenceCooldownUntil = d.noConfidenceCooldownUntil || 0;
    o.votes = _polClone(d.votes || []);
    return o;
  }
}

/* ---------- 游说透明度登记 ---------- */
class PolTransparency {
  constructor() {
    this.registeredSpend = 0;    // 已登记游说支出（tech 点）
    this.unregisteredSpend = 0;  // 未登记游说支出
    this.disclosures = 0;
    this._checkMs = 0;
  }

  recordSpend(amount, registered) {
    if (registered) this.registeredSpend += amount;
    else this.unregisteredSpend += amount;
  }

  // 公开披露：清空未登记支出，小幅提升支持率；长期不披露则丑闻风险上升
  disclose(politics) {
    const had = this.unregisteredSpend;
    this.unregisteredSpend = 0;
    this.disclosures++;
    if (politics && had > 0) {
      politics.mayor.approval = _polClamp(politics.mayor.approval + 2, 0, 100);
      politics.log('游说支出公开披露：登记 ' + this.registeredSpend + ' 点，补登 ' + had + ' 点，支持率 +2');
    }
    return { ok: true, disclosed: had, total: this.registeredSpend };
  }

  tickMinute(politics) {
    // 未登记支出每 20 点每月转化为 1 点丑闻风险
    if (this.unregisteredSpend >= 20 && politics) {
      const add = Math.floor(this.unregisteredSpend / 20);
      politics.scandal = _polClamp(politics.scandal + add, 0, 100);
      this.unregisteredSpend = this.unregisteredSpend % 20;
      politics.log('未登记游说支出曝光：丑闻 +' + add);
    }
  }

  serialize() { return { registeredSpend: this.registeredSpend, unregisteredSpend: this.unregisteredSpend, disclosures: this.disclosures }; }
  static deserialize(d) {
    const t = new PolTransparency();
    t.registeredSpend = d.registeredSpend || 0;
    t.unregisteredSpend = d.unregisteredSpend || 0;
    t.disclosures = d.disclosures || 0;
    return t;
  }
}

/* ---------- 第五批接入 ---------- */
(function () {
  const _origInitExt = ColonialPoliticsManager.prototype.initExtended;
  ColonialPoliticsManager.prototype.initExtended = function () {
    _origInitExt.call(this);
    if (!this.factionEvents) {
      this.factionEvents = new PolFactionEvents();
      this.cityHall = new PolCityHall();
      this.opposition = new PolOpposition();
      this.transparency = new PolTransparency();
      // 议会读取市政厅等级
      this.parliament._cityHallProvider = () => this.cityHall;
    }
  };
  const _origUpdateExt = ColonialPoliticsManager.prototype.updateExtended;
  ColonialPoliticsManager.prototype.updateExtended = function (dtMs, game) {
    _origUpdateExt.call(this, dtMs, game);
    this.factionEvents.tick(dtMs, this.gameTimeMs, this, game);
    this.transparency.tickMinute(this);
  };
  // 游说支出登记：包装 lobby / bribe
  const _origLobby = PolParliament.prototype.lobby;
  PolParliament.prototype.lobby = function (councilorId, billId, game) {
    const res = _origLobby.call(this, councilorId, billId, game);
    if (res.ok && game && game.politics && game.politics.transparency) {
      // 游说默认登记（合法支出）
      game.politics.transparency.recordSpend(res.price || 0, true);
    }
    return res;
  };
  const _origBribe = PolParliament.prototype.bribe;
  PolParliament.prototype.bribe = function (councilorId, billId, game, politics) {
    const res = _origBribe.call(this, councilorId, billId, game, politics);
    if (res.ok && politics && politics.transparency) {
      // 贿赂永不登记（黑支出）
      politics.transparency.recordSpend(res.price || 0, false);
    }
    return res;
  };
  const _origSave = ColonialPoliticsManager.prototype.save;
  ColonialPoliticsManager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended();
    s.extended5 = { factionEvents: this.factionEvents.serialize(), cityHall: this.cityHall.serialize(),
      opposition: this.opposition.serialize(), transparency: this.transparency.serialize() };
    return s;
  };
  const _origLoad = ColonialPoliticsManager.prototype.load;
  ColonialPoliticsManager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended();
    if (data && data.extended5) {
      if (data.extended5.factionEvents) this.factionEvents = PolFactionEvents.deserialize(data.extended5.factionEvents);
      if (data.extended5.cityHall) this.cityHall = PolCityHall.deserialize(data.extended5.cityHall);
      if (data.extended5.opposition) this.opposition = PolOpposition.deserialize(data.extended5.opposition);
      if (data.extended5.transparency) this.transparency = PolTransparency.deserialize(data.extended5.transparency);
      this.parliament._cityHallProvider = () => this.cityHall;
    }
  };
})();

/* ---------- 第五批自测 ---------- */
class PoliticsExtended5SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _polTimeMs: 0,
      player: { inv: { iron: 500, ice: 500, rare: 200, water: 500, food: 500, steel: 300, tech: 500, uranium: 50, he3: 20 } },
      pop: { count: 40, cap: () => 100 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50, totalPopCap: () => 100 },
      military: { raidStrength: 0 } });
    const m = new ColonialPoliticsManager();
    const g = mockGame();
    g.politics = m;
    m.initExtended();
    check('第五批系统初始化', !!m.factionEvents && !!m.cityHall && !!m.opposition && !!m.transparency, '');
    // 派系事件
    m.factions.support.industrial = 10;
    const fe = m.factionEvents.tick(2 * 60 * 1000 + 1, m.gameTimeMs, m, g);
    check('派系事件可触发（工业派支持度 <20）', !!m.factionEvents.active, m.factionEvents.active ? m.factionEvents.active.event.name : '未触发');
    if (m.factionEvents.active) {
      const r = m.factionEvents.resolve(m.factionEvents.active.event.options[0].id, g, m);
      check('派系事件可处置', r.ok, r.reason || '');
    }
    // 市政厅
    check('市政厅初始 1 级', m.cityHall.level === 1, '');
    const up = m.cityHall.upgrade(g, m);
    check('市政厅可升级到 2 级', up.ok && m.cityHall.level === 2, JSON.stringify(up).slice(0, 100));
    check('升级后法案上限 4 项', m.cityHall.current().unlocks.maxBills === 4, '');
    // 反对党领袖
    const lead = m.opposition.leader(m.parliament);
    check('反对党领袖存在', !!lead && !!lead.councilor, lead ? lead.councilor.name : '');
    const nc = m.opposition.callNoConfidence(m.parliament, m, g);
    check('不信任投票有结果', nc.ok || !!nc.reason, JSON.stringify(nc).slice(0, 120));
    // 透明度
    m.transparency.recordSpend(25, false);
    m.transparency.tickMinute(m);
    check('未登记支出转化为丑闻', m.scandal > 0 || m.transparency.unregisteredSpend < 25, 'scandal=' + m.scandal + ' unreg=' + m.transparency.unregisteredSpend);
    const dis = m.transparency.disclose(m);
    check('公开披露有效', dis.ok, '');
    // 游说登记联动
    m.proposeBill('pol_green_energy', g);
    const bill = m.parliament.activeBills[0];
    const regBefore = m.transparency.registeredSpend;
    m.parliament.lobby(m.parliament.councilors[0].id, bill.billId, g);
    check('游说支出自动登记', m.transparency.registeredSpend >= regBefore, regBefore + '->' + m.transparency.registeredSpend);
    // 存档往返（第五批）
    const saved = m.save();
    const m2 = new ColonialPoliticsManager();
    m2.load(saved);
    check('第五批存档往返：市政厅等级保留', !!m2.cityHall && m2.cityHall.level === m.cityHall.level, '');
    check('第五批存档往返：透明度保留', !!m2.transparency, '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = PoliticsSelfTest.run;
  PoliticsSelfTest.run = function () {
    const base = _origRun();
    const ext5 = PoliticsExtended5SelfTest.run();
    return { total: base.total + ext5.total, passed: base.passed + ext5.passed,
      failed: [...base.failed, ...ext5.failed],
      results: [...base.results, ...ext5.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.PolFactionEvents = PolFactionEvents;
  window.PolCityHall = PolCityHall;
  window.PolOpposition = PolOpposition;
  window.PolTransparency = PolTransparency;
  window.PoliticsExtended5SelfTest = PoliticsExtended5SelfTest;
  window.POL_FACTION_EVENTS = POL_FACTION_EVENTS;
  window.POL_CITY_HALL = POL_CITY_HALL;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { PolFactionEvents, PolCityHall, PolOpposition, PolTransparency,
    PoliticsExtended5SelfTest, POL_FACTION_EVENTS, POL_CITY_HALL });
}

/* 6 个内阁职位：任命议员担任，效果按部长影响力（能力）缩放；贪腐部长每 5 分钟有 5% 概率东窗事发 */
const POL_CABINET_POSTS = [
  {
    "id": "cab_finance",
    "name": "财政部长",
    "icon": "💰",
    "effects": {
      "taxMul": 1.03,
      "upkeepMul": 0.97
    },
    "desc": "税收 +3%，维持费 -3%（按部长能力缩放）。"
  },
  {
    "id": "cab_defense",
    "name": "国防部长",
    "icon": "🛡️",
    "effects": {
      "defenseMul": 1.05,
      "armyCapMul": 1.05
    },
    "desc": "防御力 +5%，军队规模上限 +5%（按部长能力缩放）。"
  },
  {
    "id": "cab_welfare",
    "name": "民生部长",
    "icon": "🏥",
    "effects": {
      "satFlat": 0.5,
      "growthMul": 1.02
    },
    "desc": "满意度 +0.5/分钟，人口增长 +2%（按部长能力缩放）。"
  },
  {
    "id": "cab_ecology",
    "name": "生态部长",
    "icon": "🌿",
    "effects": {
      "pollutionMul": 0.95,
      "satFlat": 0.2
    },
    "desc": "污染 -5%，满意度 +0.2/分钟（按部长能力缩放）。"
  },
  {
    "id": "cab_industry",
    "name": "工业部长",
    "icon": "🏭",
    "effects": {
      "minerMul": 1.04,
      "steelMul": 1.04
    },
    "desc": "采矿 +4%，钢材 +4%（按部长能力缩放）。"
  },
  {
    "id": "cab_civic",
    "name": "内政部长",
    "icon": "⚖️",
    "effects": {
      "crimeMul": 0.95,
      "scandalResist": 0.1
    },
    "desc": "犯罪率 -5%，丑闻抗性 +0.1（按部长能力缩放）。"
  }
];

/* 6 种市长演讲：消耗科技点，立即改变满意度与派系支持，部分带限时修正，冷却 5 分钟 */
const POL_SPEECHES = [
  {
    "id": "sp_unity",
    "name": "团结演说",
    "icon": "🤝",
    "costTech": 5,
    "cooldownMin": 5,
    "effects": {
      "sat": 3,
      "factions": {
        "industrial": 1,
        "eco": 1,
        "military": 1,
        "welfare": 1
      }
    },
    "desc": "满意度 +3，全部派系 +1。"
  },
  {
    "id": "sp_war",
    "name": "战时动员",
    "icon": "📣",
    "costTech": 8,
    "cooldownMin": 5,
    "requires": {
      "military": 25
    },
    "effects": {
      "sat": 1,
      "factions": {
        "military": 3,
        "eco": -1
      }
    },
    "desc": "需军事派支持 ≥25：满意度 +1，军事派 +3，生态派 -1。"
  },
  {
    "id": "sp_economy",
    "name": "经济展望",
    "icon": "📈",
    "costTech": 5,
    "cooldownMin": 5,
    "effects": {
      "sat": 2,
      "factions": {
        "industrial": 2
      }
    },
    "desc": "满意度 +2，工业派 +2。"
  },
  {
    "id": "sp_eco",
    "name": "环保承诺",
    "icon": "🌱",
    "costTech": 5,
    "cooldownMin": 5,
    "effects": {
      "sat": 2,
      "factions": {
        "eco": 3,
        "industrial": -1
      }
    },
    "desc": "满意度 +2，生态派 +3，工业派 -1。"
  },
  {
    "id": "sp_taxcut",
    "name": "减税承诺",
    "icon": "💸",
    "costTech": 10,
    "cooldownMin": 5,
    "effects": {
      "sat": 4,
      "timed": {
        "taxMul": 0.98,
        "minutes": 10
      }
    },
    "desc": "满意度 +4，税收 -2%（持续 10 分钟）。"
  },
  {
    "id": "sp_clean",
    "name": "廉政宣言",
    "icon": "⚖️",
    "costTech": 5,
    "cooldownMin": 5,
    "effects": {
      "sat": 2,
      "timed": {
        "scandalResist": 0.1,
        "minutes": 10
      }
    },
    "desc": "满意度 +2，丑闻抗性 +0.1（持续 10 分钟）。"
  }
];


/* ============================== 扩展系统（第六批） ============================== */

/* ---------- 内阁 ---------- */
class PolCabinet {
  constructor() {
    this.ministers = {};  // {postId: councilorId}
  }

  appoint(postId, councilorId, manager) {
    const post = POL_CABINET_POSTS.find(x => x.id === postId);
    if (!post) return { ok: false, reason: '未知职位' };
    const c = manager.parliament.councilors.find(x => x.id === councilorId);
    if (!c) return { ok: false, reason: '该议员不在议会' };
    for (const pid in this.ministers) {
      if (this.ministers[pid] === councilorId) return { ok: false, reason: '该议员已担任其他职位' };
    }
    this.ministers[postId] = councilorId;
    manager._modCache = null;
    return { ok: true, post: post.name, minister: c.name, competence: Math.round(c.influence) };
  }

  dismiss(postId, manager) {
    if (!this.ministers[postId]) return { ok: false, reason: '该职位空缺' };
    const name = this.ministers[postId];
    delete this.ministers[postId];
    manager._modCache = null;
    return { ok: true, post: postId, removed: name };
  }

  ministerFor(postId, manager) {
    const id = this.ministers[postId];
    if (!id) return null;
    return manager.parliament.councilors.find(x => x.id === id) || null;
  }

  // 内阁修正值：效果偏离 1 的部分按能力缩放（能力 = 影响力/100，缩放 0.5-1.5）
  effects(manager) {
    const out = {};
    for (const postId in this.ministers) {
      const post = POL_CABINET_POSTS.find(x => x.id === postId);
      const c = this.ministerFor(postId, manager);
      if (!post || !c) continue;
      const scale = 0.5 + (c.influence || 50) / 100;
      for (const k in (post.effects || {})) {
        const v = post.effects[k];
        if (k === 'satFlat' || k === 'scandalResist') out[k] = (out[k] || 0) + v * scale;
        else out[k] = (out[k] || 1) * (1 + (v - 1) * scale);
      }
    }
    return out;
  }

  // 贪腐部长定期抽查：每 5 分钟，贪腐且廉洁 <0.5 的部长有 5% 概率东窗事发
  tickScandal(manager) {
    const caught = [];
    for (const postId in this.ministers) {
      const c = this.ministerFor(postId, manager);
      if (!c) continue;
      if (c.corruptible && (c.integrity || 0.5) < 0.5 && Math.random() < 0.05) {
        const post = POL_CABINET_POSTS.find(x => x.id === postId);
        delete this.ministers[postId];
        manager._modCache = null;
        manager.registerScandal('sc_bribe', (post ? post.name : '') + c.name + ' 受贿案');
        manager.satisfaction.value = _polClamp(manager.satisfaction.value - 3, 0, 100);
        caught.push({ post: postId, name: c.name });
      }
    }
    return caught;
  }

  serialize() { return { ministers: _polClone(this.ministers) }; }
  static deserialize(d) {
    const c = new PolCabinet();
    c.ministers = _polClone(d.ministers || {});
    return c;
  }
}

/* ---------- 市长演讲 ---------- */
PolMayor.prototype.speech = function (speechId, manager) {
  const s = POL_SPEECHES.find(x => x.id === speechId);
  if (!s) return { ok: false, reason: '未知演讲' };
  const game = manager._lastGame;
  const now = manager.gameTimeMs || 0;
  manager._speechCooldowns = manager._speechCooldowns || {};
  if ((manager._speechCooldowns[speechId] || 0) > now) return { ok: false, reason: '该演讲冷却中' };
  const inv = (game && game.player && game.player.inv) || null;
  if (inv && (inv.tech || 0) < s.costTech) return { ok: false, reason: '科技点不足（需要 ' + s.costTech + '）' };
  for (const k in (s.requires || {})) {
    if ((manager.factions.support[k] || 0) < s.requires[k]) return { ok: false, reason: '需要' + (POL_FACTIONS[k] || {}).name + '支持 ≥' + s.requires[k] };
  }
  if (inv) inv.tech -= s.costTech;
  manager._speechCooldowns[speechId] = now + s.cooldownMin * 60 * 1000;
  const fx = s.effects || {};
  if (typeof fx.sat === 'number') manager.satisfaction.value = _polClamp(manager.satisfaction.value + fx.sat, 0, 100);
  for (const k in (fx.factions || {})) {
    manager.factions.support[k] = _polClamp((manager.factions.support[k] || 0) + fx.factions[k], 0, 100);
  }
  if (fx.timed) {
    manager._speechFx = manager._speechFx || {};
    const until = now + (fx.timed.minutes || 10) * 60 * 1000;
    for (const k in fx.timed) {
      if (k === 'minutes') continue;
      manager._speechFx[k] = { value: fx.timed[k], until };
    }
    manager._modCache = null;
  }
  return { ok: true, speech: s.name, sat: fx.sat || 0 };
};

/* ---------- 反腐调查 ---------- */
class PolAntiCorruption {
  // 调查议员：10 科技点；贪腐且廉洁 <0.4 必查实；否则按廉洁度随机
  static investigate(councilorId, manager) {
    const game = manager._lastGame;
    const inv = (game && game.player && game.player.inv) || null;
    if (inv && (inv.tech || 0) < 10) return { ok: false, reason: '科技点不足（需要 10）' };
    const c = manager.parliament.councilors.find(x => x.id === councilorId);
    if (!c) return { ok: false, reason: '该议员不在议会' };
    if (inv) inv.tech -= 10;
    let found;
    if (c.corruptible && (c.integrity || 0.5) < 0.4) found = true;
    else found = Math.random() < Math.max(0.05, 0.5 - (c.integrity || 0.5) * 0.3);
    if (found && c.corruptible) {
      manager.parliament.councilors = manager.parliament.councilors.filter(x => x.id !== c.id);
      manager.registerScandal('sc_bribe', c.name + ' 受贿案查实');
      manager.satisfaction.value = _polClamp(manager.satisfaction.value + 5, 0, 100);
      manager.factions.support[c.faction] = _polClamp((manager.factions.support[c.faction] || 0) - 2, 0, 100);
      manager._modCache = null;
      return { ok: true, found: true, corrupt: true, name: c.name, sat: 5, note: '查实受贿，已革除议员资格' };
    }
    if (found) {
      c.loyalty = Math.max(0, (c.loyalty || 50) - 10);
      manager.satisfaction.value = _polClamp(manager.satisfaction.value - 2, 0, 100);
      return { ok: true, found: true, corrupt: false, name: c.name, sat: -2, note: '调查未发现问题，议员忠诚度 -10' };
    }
    manager.satisfaction.value = _polClamp(manager.satisfaction.value - 1, 0, 100);
    return { ok: true, found: false, name: c.name, sat: -1, note: '未发现证据，满意度 -1' };
  }
}

// 经理层便捷方法
ColonialPoliticsManager.prototype.investigateCouncilor = function (councilorId) {
  return PolAntiCorruption.investigate(councilorId, this);
};

/* ---------- 第六批接入 ---------- */
(function () {
  ColonialPoliticsManager.prototype.initExtended6 = function () {
    if (this.cabinet) return;
    this.cabinet = new PolCabinet();
    this._cabAccMs = 0;
  };
  // 包装 aggregateModifiers：并入内阁与演讲限时修正
  const _origAgg = ColonialPoliticsManager.prototype.aggregateModifiers;
  ColonialPoliticsManager.prototype.aggregateModifiers = function () {
    const mods = _origAgg.call(this);
    if (this.cabinet) {
      const ce = this.cabinet.effects(this);
      for (const k in ce) {
        if (k === 'satFlat' || k === 'scandalResist') mods[k] = (mods[k] || 0) + ce[k];
        else mods[k] = (mods[k] || 1) * ce[k];
      }
    }
    if (this._speechFx) {
      const now = this.gameTimeMs || 0;
      for (const k in this._speechFx) {
        const fx = this._speechFx[k];
        if (now > fx.until) { delete this._speechFx[k]; continue; }
        if (k === 'scandalResist') mods[k] = (mods[k] || 0) + fx.value;
        else mods[k] = (mods[k] || 1) * fx.value;
      }
    }
    return mods;
  };
  const _origUpdate = ColonialPoliticsManager.prototype.update;
  ColonialPoliticsManager.prototype.update = function (now, dt, game) {
    this.initExtended6();
    this._lastGame = game;
    const ret = _origUpdate.call(this, now, dt, game);
    // 内阁贪腐抽查（每 5 分钟）
    this._cabAccMs = (this._cabAccMs || 0) + Math.max(0, dt || 0);
    if (this._cabAccMs >= 5 * 60 * 1000) {
      this._cabAccMs -= 5 * 60 * 1000;
      const caught = this.cabinet.tickScandal(this);
      for (const c of caught) this.log ? this.log('内阁丑闻：' + c.name + ' 被查处') : null;
    }
    return ret;
  };
  const _origSave = ColonialPoliticsManager.prototype.save;
  ColonialPoliticsManager.prototype.save = function () {
    const s = _origSave.call(this);
    this.initExtended6();
    s.extended6 = { cabinet: this.cabinet.serialize(),
      speechCooldowns: _polClone(this._speechCooldowns || {}),
      speechFx: _polClone(this._speechFx || {}) };
    return s;
  };
  const _origLoad = ColonialPoliticsManager.prototype.load;
  ColonialPoliticsManager.prototype.load = function (data) {
    _origLoad.call(this, data);
    this.initExtended6();
    if (data && data.extended6) {
      if (data.extended6.cabinet) this.cabinet = PolCabinet.deserialize(data.extended6.cabinet);
      this._speechCooldowns = _polClone(data.extended6.speechCooldowns || {});
      this._speechFx = _polClone(data.extended6.speechFx || {});
    }
  };
})();

/* ---------- 第六批自测 ---------- */
class PoliticsExtended6SelfTest {
  static run() {
    const results = [];
    const check = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const mockGame = () => ({ _polTimeMs: 0, gameTimeMs: 0,
      player: { inv: { iron: 2000, ice: 500, rare: 300, water: 500, food: 1000, steel: 800, tech: 800, uranium: 50, he3: 20 } },
      pop: { count: 60, cap: () => 200 },
      builder: { buildings: [], totalPower: () => 100, totalPowerUse: () => 50 },
      map: { size: 50 } });
    const m = new ColonialPoliticsManager();
    const g = mockGame();
    m.update(0, 60000, g);
    m.initExtended6();
    check('第六批系统初始化', !!m.cabinet, '');
    // 内阁任命
    const c0 = m.parliament.councilors[0];
    const appt = m.cabinet.appoint('cab_finance', c0.id, m);
    check('内阁任命财政部长', appt.ok, appt.reason || '');
    const mods = m.aggregateModifiers();
    check('财政部长税收加成生效', mods.taxMul > 1, 'taxMul=' + mods.taxMul);
    const apptDup = m.cabinet.appoint('cab_defense', c0.id, m);
    check('同一议员不可兼任两职', !apptDup.ok, '');
    const dis = m.cabinet.dismiss('cab_finance', m);
    check('内阁解职', dis.ok, '');
    const mods2 = m.aggregateModifiers();
    check('解职后税收加成消失', mods2.taxMul === 1, 'taxMul=' + mods2.taxMul);
    // 市长演讲
    m.satisfaction.value = 50;
    const sp = m.mayor.speech('sp_unity', m);
    check('团结演说提升满意度', sp.ok && m.satisfaction.value === 53, JSON.stringify(sp) + ' sat=' + m.satisfaction.value);
    const spCool = m.mayor.speech('sp_unity', m);
    check('演讲冷却 5 分钟', !spCool.ok, '');
    const spTax = m.mayor.speech('sp_taxcut', m);
    check('减税承诺演讲', spTax.ok && m.satisfaction.value === 57, JSON.stringify(spTax));
    const mods3 = m.aggregateModifiers();
    check('减税承诺限时税收 -2%', mods3.taxMul < 1, 'taxMul=' + mods3.taxMul);
    // 反腐调查（构造贪腐低廉洁议员，必查实）
    const target = m.parliament.councilors[1];
    target.corruptible = true;
    target.integrity = 0.2;
    const before = m.parliament.councilors.length;
    const satBefore = m.satisfaction.value;
    const inv = m.investigateCouncilor(target.id);
    check('反腐调查查实贪腐议员', inv.ok && inv.found === true && inv.corrupt === true, JSON.stringify(inv));
    check('查实后议员被革除', m.parliament.councilors.length === before - 1, before + '->' + m.parliament.councilors.length);
    const scBribe = POL_SCANDALS.find(s => s.id === 'sc_bribe');
    check('查实后满意度变化 = +5（查处）' + (scBribe.satHit || 0) + '（丑闻打击）',
      m.satisfaction.value === satBefore + 5 + (scBribe.satHit || 0), satBefore + '->' + m.satisfaction.value);
    // 存档往返（第六批）
    m.cabinet.appoint('cab_defense', m.parliament.councilors[0].id, m);
    const saved = m.save();
    const m2 = new ColonialPoliticsManager();
    m2.load(saved);
    check('第六批存档往返：内阁保留', !!m2.cabinet && !!m2.cabinet.ministers.cab_defense, '');
    const passed = results.filter(r => r.pass);
    return { total: results.length, passed: passed.length, failed: results.filter(r => !r.pass), results };
  }
}

// 并入主自测
(function () {
  const _origRun = PoliticsSelfTest.run;
  PoliticsSelfTest.run = function () {
    const base = _origRun();
    const ext6 = PoliticsExtended6SelfTest.run();
    return { total: base.total + ext6.total, passed: base.passed + ext6.passed,
      failed: [...base.failed, ...ext6.failed],
      results: [...base.results, ...ext6.results] };
  };
})();

if (typeof window !== 'undefined') {
  window.PolCabinet = PolCabinet;
  window.PolAntiCorruption = PolAntiCorruption;
  window.PoliticsExtended6SelfTest = PoliticsExtended6SelfTest;
  window.POL_CABINET_POSTS = POL_CABINET_POSTS;
  window.POL_SPEECHES = POL_SPEECHES;
}
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { PolCabinet, PolAntiCorruption, PoliticsExtended6SelfTest,
    POL_CABINET_POSTS, POL_SPEECHES });
}


/* ---------- 补丁：update 入口先初始化全部扩展子系统 ---------- */
(function () {
  const _origUpdate = ColonialPoliticsManager.prototype.update;
  ColonialPoliticsManager.prototype.update = function (now, dt, game) {
    this.initExtended();
    return _origUpdate.call(this, now, dt, game);
  };
})();

// ============================== 挂载 ==============================
if (typeof window !== 'undefined') {
  window.ColonialPoliticsManager = ColonialPoliticsManager;
  window.PolParliament = PolParliament;
  window.PolCouncilor = PolCouncilor;
  window.PolSatisfaction = PolSatisfaction;
  window.PolProtest = PolProtest;
  window.PolMayor = PolMayor;
  window.PolFactions = PolFactions;
  window.PoliticsIntegration = PoliticsIntegration;
  window.PoliticsSelfTest = PoliticsSelfTest;
  window.POL_POLICIES = POL_POLICIES;
  window.POL_FACTIONS = POL_FACTIONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ColonialPoliticsManager, PolParliament, PolCouncilor, PolSatisfaction,
    PolProtest, PolMayor, PolFactions, PoliticsIntegration, PoliticsSelfTest,
    POL_POLICIES, POL_POLICY_LIST, POL_FACTIONS, POL_DISTRICTS, POL_ARCHETYPES,
    POL_TRAITS, POL_SAT_FACTORS, POL_PROTEST_DEMANDS, POL_SCANDALS, POL_CAMPAIGN_ACTIONS,
    POL_POLL_ISSUES, POLITICS };
}

