/* 星港 — tech_v32.js：v3.1 新科技 120 项（贸易 40 / 文化 40 / 科研 40）
 * 每一项都有真实效果：fx 键全部登记在 TECH_V32_FX_REGISTRY，
 * applyTechV32Fx(state, id) 可直接对游戏状态对象执行加成；
 * mergeTechV32() 把 120 项并入全局 TECH_DEFS / TECH_ORDER / TECH_BRANCHES。
 * 前置链：同系内 5 档递进（每系 40 项顺序成链），T4/T5 另需旧科技；
 * 跨系前置只引用已存在的旧科技 id（tech.js / tech_v30.js / tech_v31.js）。
 * 描述一律一句话，不写故事。
 */

'use strict';

/* ============ §1 效果键注册表（键 -> 目标系统 / 运算 / 单位） ============ */
const TECH_V32_FX_REGISTRY = {
  "agingMul": { target: "sys.aging", op: "mul", unit: "倍", note: "设备老化速度 ×{v}" },
  "allProdMul": { target: "prod.all", op: "mul", unit: "倍", note: "全部生产建筑产量 ×{v}" },
  "artMul": { target: "culture.art", op: "mul", unit: "倍", note: "艺术品产值 ×{v}" },
  "attackMul": { target: "military.attack", op: "mul", unit: "倍", note: "攻击力 ×{v}" },
  "buildCostMul": { target: "cost.build", op: "mul", unit: "倍", note: "建筑建造成本 ×{v}" },
  "corruptionMul": { target: "risk.corruption", op: "mul", unit: "倍", note: "腐败发生率 ×{v}" },
  "cultureMul": { target: "culture.output", op: "mul", unit: "倍", note: "文化产出 ×{v}" },
  "defenseMul": { target: "military.defense", op: "mul", unit: "倍", note: "防御力 ×{v}" },
  "diplomacyMul": { target: "diplomacy.relation", op: "mul", unit: "倍", note: "外交关系增速 ×{v}" },
  "disasterChanceMul": { target: "risk.disasterChance", op: "mul", unit: "倍", note: "灾难发生概率 ×{v}" },
  "disasterDurMul": { target: "risk.disasterDuration", op: "mul", unit: "倍", note: "灾难持续时间 ×{v}" },
  "ecoMul": { target: "prod.eco", op: "mul", unit: "倍", note: "生态圈效果 ×{v}" },
  "foodAdd": { target: "prod.foodPerMin", op: "add", unit: "/分钟", note: "食物 +{v}/分钟" },
  "foodMul": { target: "prod.food", op: "mul", unit: "倍", note: "食物产量 ×{v}" },
  "foodUseMul": { target: "pop.foodUse", op: "mul", unit: "倍", note: "人口耗食物 ×{v}" },
  "fusionMul": { target: "power.fusion", op: "mul", unit: "倍", note: "聚变电站电力 ×{v}" },
  "greenhouseMul": { target: "prod.greenhouse", op: "mul", unit: "倍", note: "温室产量 ×{v}" },
  "happinessAdd": { target: "pop.happiness", op: "add", unit: "点", note: "居民幸福度 +{v} 点" },
  "he3Add": { target: "prod.he3PerMin", op: "add", unit: "/分钟", note: "氦3 +{v}/分钟" },
  "ironAdd": { target: "prod.ironPerMin", op: "add", unit: "/分钟", note: "铁矿 +{v}/分钟" },
  "labMul": { target: "prod.lab", op: "mul", unit: "倍", note: "实验室科技产量 ×{v}" },
  "launchCostMul": { target: "cost.launch", op: "mul", unit: "倍", note: "发射花费 ×{v}" },
  "meteorMul": { target: "risk.meteorDamage", op: "mul", unit: "倍", note: "陨石伤害 ×{v}" },
  "minerMul": { target: "prod.miner", op: "mul", unit: "倍", note: "采矿机产量 ×{v}" },
  "moraleMul": { target: "military.morale", op: "mul", unit: "倍", note: "士气 ×{v}" },
  "orbitalCostMul": { target: "cost.orbital", op: "mul", unit: "倍", note: "轨道建筑成本 ×{v}" },
  "orbitalPowerAdd": { target: "power.orbital", op: "add", unit: "电", note: "轨道电力 +{v}" },
  "oxygenAdd": { target: "life.oxygen", op: "add", unit: "点", note: "氧气供给 +{v} 点" },
  "pirateMul": { target: "risk.pirateChance", op: "mul", unit: "倍", note: "海盗袭击概率 ×{v}" },
  "policySlotsAdd": { target: "gov.policySlots", op: "add", unit: "个", note: "政策槽位 +{v} 个" },
  "popCapAdd": { target: "pop.cap", op: "add", unit: "人", note: "人口上限 +{v} 人" },
  "popGrowthMul": { target: "pop.growth", op: "mul", unit: "倍", note: "人口增长速度 ×{v}" },
  "radiationMul": { target: "risk.radiation", op: "mul", unit: "倍", note: "辐射伤害 ×{v}" },
  "repairCostMul": { target: "cost.repair", op: "mul", unit: "倍", note: "建筑维修成本 ×{v}" },
  "researchCostMul": { target: "cost.research", op: "mul", unit: "倍", note: "研究成本 ×{v}" },
  "researchMul": { target: "prod.research", op: "mul", unit: "倍", note: "科研速度 ×{v}" },
  "revoltMul": { target: "risk.revoltChance", op: "mul", unit: "倍", note: "叛乱概率 ×{v}" },
  "scienceMul": { target: "prod.science", op: "mul", unit: "倍", note: "基础科学产出 ×{v}" },
  "shieldMul": { target: "military.shield", op: "mul", unit: "倍", note: "护盾强度 ×{v}" },
  "shipHpMul": { target: "fleet.hp", op: "mul", unit: "倍", note: "舰船耐久 ×{v}" },
  "shipSpeedMul": { target: "fleet.speed", op: "mul", unit: "倍", note: "舰船航速 ×{v}" },
  "smelterMul": { target: "prod.smelter", op: "mul", unit: "倍", note: "冶炼厂产量 ×{v}" },
  "solarMul": { target: "power.solar", op: "mul", unit: "倍", note: "太阳能板电力 ×{v}" },
  "stabilityAdd": { target: "city.stability", op: "add", unit: "点", note: "殖民地稳定度 +{v} 点" },
  "steelAdd": { target: "prod.steelPerMin", op: "add", unit: "/分钟", note: "钢材 +{v}/分钟" },
  "taxMul": { target: "econ.taxRate", op: "mul", unit: "倍", note: "税收效率 ×{v}" },
  "techPointAdd": { target: "prod.techPerMin", op: "add", unit: "/分钟", note: "科技点 +{v}/分钟" },
  "terraformAdd": { target: "planet.terraform", op: "add", unit: "点", note: "行星改造进度 +{v} 点" },
  "tourismMul": { target: "culture.tourism", op: "mul", unit: "倍", note: "旅游收入 ×{v}" },
  "tradeMul": { target: "econ.tradeIncome", op: "mul", unit: "倍", note: "贸易收入 ×{v}" },
  "tradePriceMul": { target: "trade.price", op: "mul", unit: "倍", note: "贸易成交价 ×{v}" },
  "tradeRouteAdd": { target: "trade.routes", op: "add", unit: "条", note: "贸易航线 +{v} 条" },
  "tradeShipCargoMul": { target: "trade.cargo", op: "mul", unit: "倍", note: "贸易船载货量 ×{v}" },
  "tradeShipMul": { target: "trade.shipInterval", op: "mul", unit: "倍", note: "贸易船到访间隔 ×{v}" },
  "unlockArchive": { target: "unlock.archive", op: "flag", unit: "", note: "解锁基因档案馆" },
  "unlockBank": { target: "unlock.bank", op: "flag", unit: "", note: "解锁殖民地银行" },
  "unlockBioLab": { target: "unlock.bioLab", op: "flag", unit: "", note: "解锁生物实验室" },
  "unlockExchange": { target: "unlock.exchange", op: "flag", unit: "", note: "解锁期货交易所" },
  "unlockFreeport": { target: "unlock.freeport", op: "flag", unit: "", note: "解锁自由港" },
  "unlockGallery": { target: "unlock.gallery", op: "flag", unit: "", note: "解锁艺术画廊" },
  "unlockLibrary": { target: "unlock.library", op: "flag", unit: "", note: "解锁中央图书馆" },
  "unlockMarket": { target: "unlock.market", op: "flag", unit: "", note: "解锁星际集市" },
  "unlockMonument": { target: "unlock.monument", op: "flag", unit: "", note: "解锁文明纪念碑" },
  "unlockMuseum": { target: "unlock.museum", op: "flag", unit: "", note: "解锁火星博物馆" },
  "unlockObservatory": { target: "unlock.observatory", op: "flag", unit: "", note: "解锁天文台" },
  "unlockQuantumLab": { target: "unlock.quantumLab", op: "flag", unit: "", note: "解锁量子实验室" },
  "unlockTheater": { target: "unlock.theater", op: "flag", unit: "", note: "解锁大剧院" },
  "unlockTradeHub": { target: "unlock.tradeHub", op: "flag", unit: "", note: "解锁贸易枢纽" },
  "unlockUniversity": { target: "unlock.university", op: "flag", unit: "", note: "解锁火星大学" },
  "upgradeCostMul": { target: "cost.upgrade", op: "mul", unit: "倍", note: "建筑升级成本 ×{v}" },
  "victoryProgressAdd": { target: "victory.progress", op: "add", unit: "点", note: "胜利进度 +{v} 点" },
  "warnAddSec": { target: "sys.warnTime", op: "add", unit: "秒", note: "灾难预警时间 +{v} 秒" },
  "waterAdd": { target: "prod.waterPerMin", op: "add", unit: "/分钟", note: "水 +{v}/分钟" },
  "waterUseMul": { target: "pop.waterUse", op: "mul", unit: "倍", note: "人口耗水 ×{v}" },
  "waterplantMul": { target: "prod.waterplant", op: "mul", unit: "倍", note: "水厂产量 ×{v}" },
};

/* ============ §2 新分支（3 系） ============ */
const TECH_V32_BRANCHES = {
  "trade": { name: "贸易", icon: "💰", color: "#fbbf24", v32: true },
  "culture": { name: "文化", icon: "🎭", color: "#f472b6", v32: true },
  "research": { name: "科研", icon: "🔬", color: "#38bdf8", v32: true },
};

/* v32 缓解的灾难代码（自检用）： */
const TECH_V32_DISASTERS = {
  "d32-blackout": "全城断电",
  "d32-corruption": "腐败丑闻",
  "d32-crash": "市场崩盘",
  "d32-drought": "大干旱",
  "d32-meteor": "陨石雨",
  "d32-pirate": "海盗劫掠",
  "d32-plague": "瘟疫蔓延",
  "d32-protest": "大规模抗议",
  "d32-quake": "火星震",
  "d32-radiation": "辐射泄漏",
  "d32-sandstorm": "特大沙尘暴",
  "d32-strike": "罢工潮",
};

/* ============ §3 v32 科技解锁的新建筑（造价 / 效果均为真实数值） ============ */
const TECH_V32_BUILDINGS = {
  "b32-market": {
    id: "b32-market", name: "星际集市", icon: "🏪", v32: true,
    cost: { "steel": 40 },
    fx: { "tradeMul": 1.1, "taxMul": 1.05 },
    note: "贸易收入 +10%，税收效率 +5%。",
  },
  "b32-exchange": {
    id: "b32-exchange", name: "期货交易所", icon: "📈", v32: true,
    cost: { "steel": 80, "nano": 10 },
    fx: { "tradeMul": 1.15, "tradePriceMul": 1.1 },
    note: "贸易收入 +15%，成交价 +10%。",
  },
  "b32-bank": {
    id: "b32-bank", name: "殖民地银行", icon: "🏦", v32: true,
    cost: { "steel": 100, "nano": 20 },
    fx: { "taxMul": 1.15, "tradeMul": 1.05 },
    note: "税收效率 +15%，贸易收入 +5%。",
  },
  "b32-tradehub": {
    id: "b32-tradehub", name: "贸易枢纽", icon: "🏙️", v32: true,
    cost: { "steel": 150, "nano": 40 },
    fx: { "tradeShipCargoMul": 1.3, "tradeShipMul": 0.9 },
    note: "贸易船载货 +30%，到访间隔 -10%。",
  },
  "b32-freeport": {
    id: "b32-freeport", name: "自由港", icon: "🗽", v32: true,
    cost: { "steel": 200, "nano": 60 },
    fx: { "tradeMul": 1.2, "tourismMul": 1.2 },
    note: "贸易收入 +20%，旅游收入 +20%。",
  },
  "b32-theater": {
    id: "b32-theater", name: "大剧院", icon: "🎭", v32: true,
    cost: { "steel": 60 },
    fx: { "cultureMul": 1.15, "happinessAdd": 3 },
    note: "文化产出 +15%，幸福度 +3 点。",
  },
  "b32-museum": {
    id: "b32-museum", name: "火星博物馆", icon: "🏛️", v32: true,
    cost: { "steel": 80, "nano": 10 },
    fx: { "tourismMul": 1.2, "cultureMul": 1.1 },
    note: "旅游收入 +20%，文化产出 +10%。",
  },
  "b32-gallery": {
    id: "b32-gallery", name: "艺术画廊", icon: "🖼️", v32: true,
    cost: { "steel": 50 },
    fx: { "artMul": 1.25, "happinessAdd": 2 },
    note: "艺术品产值 +25%，幸福度 +2 点。",
  },
  "b32-library": {
    id: "b32-library", name: "中央图书馆", icon: "🏛️", v32: true,
    cost: { "steel": 90, "nano": 10 },
    fx: { "researchMul": 1.15, "labMul": 1.1 },
    note: "科研速度 +15%，实验室产量 +10%。",
  },
  "b32-monument": {
    id: "b32-monument", name: "文明纪念碑", icon: "🏛️", v32: true,
    cost: { "steel": 120, "nano": 20 },
    fx: { "happinessAdd": 5, "stabilityAdd": 3 },
    note: "幸福度 +5 点，稳定度 +3 点。",
  },
  "b32-university": {
    id: "b32-university", name: "火星大学", icon: "🎓", v32: true,
    cost: { "steel": 100, "nano": 20 },
    fx: { "researchMul": 1.15, "techPointAdd": 2 },
    note: "科研速度 +15%，科技点 +2/分钟。",
  },
  "b32-observatory": {
    id: "b32-observatory", name: "天文台", icon: "🔭", v32: true,
    cost: { "steel": 80, "nano": 10 },
    fx: { "warnAddSec": 10, "researchMul": 1.1 },
    note: "灾难预警 +10 秒，科研速度 +10%。",
  },
  "b32-archive": {
    id: "b32-archive", name: "基因档案馆", icon: "🧬", v32: true,
    cost: { "steel": 90, "nano": 30 },
    fx: { "popGrowthMul": 1.1, "researchMul": 1.1 },
    note: "人口增长 +10%，科研速度 +10%。",
  },
  "b32-quantumlab": {
    id: "b32-quantumlab", name: "量子实验室", icon: "⚛️", v32: true,
    cost: { "steel": 150, "nano": 50 },
    fx: { "researchMul": 1.2, "labMul": 1.15 },
    note: "科研速度 +20%，实验室产量 +15%。",
  },
  "b32-biolab": {
    id: "b32-biolab", name: "生物实验室", icon: "🧫", v32: true,
    cost: { "steel": 120, "nano": 30 },
    fx: { "popGrowthMul": 1.15, "foodMul": 1.1 },
    note: "人口增长 +15%，食物产量 +10%。",
  },
};

/* ============ §4 科技定义（120 项） ============ */
const TECH_V32_DEFS = {
  // ---------- 贸易系（40 项） ----------
  // v32_trade_01 议价技巧 [贸易·T1] 造价 30 科技点
  // 造价分析：本项 30 科技点，同档（T1）均价 44 点，本项为均价的 0.68×；研究耗时 180 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 30 科技点，占本系链总造价 6824 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 240 铁当量，约等于 20.0 座采矿机 L1 的造价。
  // 效果分解：贸易收入 ×1.1（目标 econ.tradeIncome，mul运算）。
  // 效果分解：税收效率 ×1.05（目标 econ.taxRate，mul运算）。
  // 效果分解：两项效果合计 贸易收入 ×1.1、税收效率 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 1/40 项，无前置，任意时间可研究；是本系链的起点。
  // 横向对比：同档同系另有 「露天集市」、「商队护卫」，造价分别为 34、38 点；本项 30 点，排第 1/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（tradeMul）、乘法叠加（taxMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_trade_01": {
    id: "v32_trade_01",
    name: "议价技巧",
    icon: "💬",
    branch: "trade",
    branchName: "贸易",
    tier: 1,
    cost: 30,
    researchTimeSec: 180,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "商队统一议价口径，贸易收入提升。",
    fx: {
      "tradeMul": 1.1,
      "taxMul": 1.05,
    },
    modifiers: [
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "贸易收入 ×1.1",
      },
      {
        key: "taxMul",
        target: "econ.taxRate",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "税收效率 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_02"],
    comboWith: [
      { tech: "v32_trade_02", note: "与「露天集市」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.1。",
      "税收效率 ×1.05。",
    ],
    researchCost: {
      tech: 30,
      credits: 150,
      timeSec: 180,
      note: "研究耗时 180 秒，另耗星币 150。",
    },
    levels: [
      { level: 1, cost: 30, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 60, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 120, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_02 露天集市 [贸易·T1] 造价 34 科技点
  // 造价分析：本项 34 科技点，同档（T1）均价 44 点，本项为均价的 0.77×；研究耗时 204 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 64 科技点，占本系链总造价 6824 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 272 铁当量，约等于 22.7 座采矿机 L1 的造价。
  // 效果分解：解锁星际集市（目标 unlock.market，flag运算）。
  // 效果分解：贸易收入 ×1.08（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 解锁星际集市、贸易收入 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 2/40 项，前置 「议价技巧」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「议价技巧」、「商队护卫」，造价分别为 30、38 点；本项 34 点，排第 2/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：开关解锁（unlockMarket）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「星际集市」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_trade_02": {
    id: "v32_trade_02",
    name: "露天集市",
    icon: "🏪",
    branch: "trade",
    branchName: "贸易",
    tier: 1,
    cost: 34,
    researchTimeSec: 204,
    needs: ["v32_trade_01"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_01", note: "需先研究「议价技巧」。" },
    ],
    desc: "每周集市固定开摊，贸易收入与税收同步增长。",
    fx: {
      "unlockMarket": 1,
      "tradeMul": 1.08,
    },
    modifiers: [
      {
        key: "unlockMarket",
        target: "unlock.market",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁星际集市",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "贸易收入 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-market"],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_03"],
    comboWith: [
      { tech: "v32_trade_03", note: "与「商队护卫」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁星际集市。",
      "贸易收入 ×1.08。",
    ],
    researchCost: {
      tech: 34,
      credits: 170,
      timeSec: 204,
      note: "研究耗时 204 秒，另耗星币 170。",
    },
    levels: [
      { level: 1, cost: 34, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 68, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 136, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_03 商队护卫 [贸易·T1] 造价 38 科技点
  // 造价分析：本项 38 科技点，同档（T1）均价 44 点，本项为均价的 0.86×；研究耗时 228 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 102 科技点，占本系链总造价 6824 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 304 铁当量，约等于 25.3 座采矿机 L1 的造价。
  // 效果分解：海盗袭击概率 ×0.9（目标 risk.pirateChance，mul运算）。
  // 效果分解：贸易船到访间隔 ×0.95（目标 trade.shipInterval，mul运算）。
  // 效果分解：两项效果合计 海盗袭击概率 ×0.9、贸易船到访间隔 ×0.95；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 3/40 项，前置 「露天集市」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「议价技巧」、「露天集市」，造价分别为 30、34 点；本项 38 点，排第 3/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（pirateMul）、乘法叠加（tradeShipMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗劫掠」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_trade_03": {
    id: "v32_trade_03",
    name: "商队护卫",
    icon: "🛡️",
    branch: "trade",
    branchName: "贸易",
    tier: 1,
    cost: 38,
    researchTimeSec: 228,
    needs: ["v32_trade_02"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_02", note: "需先研究「露天集市」。" },
    ],
    desc: "武装商队押运，贸易船不再惧怕小股海盗。",
    fx: {
      "pirateMul": 0.9,
      "tradeShipMul": 0.95,
    },
    modifiers: [
      {
        key: "pirateMul",
        target: "risk.pirateChance",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "海盗袭击概率 ×0.9",
      },
      {
        key: "tradeShipMul",
        target: "trade.shipInterval",
        op: "mul",
        value: 0.95,
        unit: "倍",
        note: "贸易船到访间隔 ×0.95",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-pirate"],
    mitigatesDetail: [
      { disaster: "d32-pirate", note: "缓解「海盗劫掠」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_04"],
    comboWith: [
      { tech: "v32_trade_04", note: "与「仓储物流」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "海盗袭击概率 ×0.9。",
      "贸易船到访间隔 ×0.95。",
    ],
    researchCost: {
      tech: 38,
      credits: 190,
      timeSec: 228,
      note: "研究耗时 228 秒，另耗星币 190。",
    },
    levels: [
      { level: 1, cost: 38, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 76, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 152, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_04 仓储物流 [贸易·T1] 造价 42 科技点
  // 造价分析：本项 42 科技点，同档（T1）均价 44 点，本项为均价的 0.95×；研究耗时 252 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 144 科技点，占本系链总造价 6824 点的 2%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 336 铁当量，约等于 28.0 座采矿机 L1 的造价。
  // 效果分解：贸易船载货量 ×1.15（目标 trade.cargo，mul运算）。
  // 效果分解：贸易船到访间隔 ×0.95（目标 trade.shipInterval，mul运算）。
  // 效果分解：两项效果合计 贸易船载货量 ×1.15、贸易船到访间隔 ×0.95；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 4/40 项，前置 「商队护卫」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「议价技巧」、「露天集市」，造价分别为 30、34 点；本项 42 点，排第 4/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（tradeShipCargoMul）、乘法叠加（tradeShipMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「罢工潮」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_trade_04": {
    id: "v32_trade_04",
    name: "仓储物流",
    icon: "📦",
    branch: "trade",
    branchName: "贸易",
    tier: 1,
    cost: 42,
    researchTimeSec: 252,
    needs: ["v32_trade_03"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_03", note: "需先研究「商队护卫」。" },
    ],
    desc: "标准化货仓与堆场，贸易船装卸效率提升。",
    fx: {
      "tradeShipCargoMul": 1.15,
      "tradeShipMul": 0.95,
    },
    modifiers: [
      {
        key: "tradeShipCargoMul",
        target: "trade.cargo",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "贸易船载货量 ×1.15",
      },
      {
        key: "tradeShipMul",
        target: "trade.shipInterval",
        op: "mul",
        value: 0.95,
        unit: "倍",
        note: "贸易船到访间隔 ×0.95",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-strike"],
    mitigatesDetail: [
      { disaster: "d32-strike", note: "缓解「罢工潮」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_05"],
    comboWith: [
      { tech: "v32_trade_05", note: "与「汇兑票据」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易船载货量 ×1.15。",
      "贸易船到访间隔 ×0.95。",
    ],
    researchCost: {
      tech: 42,
      credits: 210,
      timeSec: 252,
      note: "研究耗时 252 秒，另耗星币 210。",
    },
    levels: [
      { level: 1, cost: 42, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 84, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 168, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_05 汇兑票据 [贸易·T1] 造价 46 科技点
  // 造价分析：本项 46 科技点，同档（T1）均价 44 点，本项为均价的 1.05×；研究耗时 276 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 190 科技点，占本系链总造价 6824 点的 3%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 368 铁当量，约等于 30.7 座采矿机 L1 的造价。
  // 效果分解：贸易成交价 ×1.1（目标 trade.price，mul运算）。
  // 效果分解：税收效率 ×1.05（目标 econ.taxRate，mul运算）。
  // 效果分解：两项效果合计 贸易成交价 ×1.1、税收效率 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 5/40 项，前置 「仓储物流」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「议价技巧」、「露天集市」，造价分别为 30、34 点；本项 46 点，排第 5/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（tradePriceMul）、乘法叠加（taxMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_trade_05": {
    id: "v32_trade_05",
    name: "汇兑票据",
    icon: "💱",
    branch: "trade",
    branchName: "贸易",
    tier: 1,
    cost: 46,
    researchTimeSec: 276,
    needs: ["v32_trade_04"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_04", note: "需先研究「仓储物流」。" },
    ],
    desc: "殖民地信用票据流通，贸易成交价小幅上涨。",
    fx: {
      "tradePriceMul": 1.1,
      "taxMul": 1.05,
    },
    modifiers: [
      {
        key: "tradePriceMul",
        target: "trade.price",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "贸易成交价 ×1.1",
      },
      {
        key: "taxMul",
        target: "econ.taxRate",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "税收效率 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_06"],
    comboWith: [
      { tech: "v32_trade_06", note: "与「关税协定」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易成交价 ×1.1。",
      "税收效率 ×1.05。",
    ],
    researchCost: {
      tech: 46,
      credits: 230,
      timeSec: 276,
      note: "研究耗时 276 秒，另耗星币 230。",
    },
    levels: [
      { level: 1, cost: 46, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 92, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 184, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_06 关税协定 [贸易·T1] 造价 50 科技点
  // 造价分析：本项 50 科技点，同档（T1）均价 44 点，本项为均价的 1.14×；研究耗时 300 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 240 科技点，占本系链总造价 6824 点的 4%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 400 铁当量，约等于 33.3 座采矿机 L1 的造价。
  // 效果分解：税收效率 ×1.15（目标 econ.taxRate，mul运算）。
  // 效果分解：外交关系增速 ×1.1（目标 diplomacy.relation，mul运算）。
  // 效果分解：两项效果合计 税收效率 ×1.15、外交关系增速 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 6/40 项，前置 「汇兑票据」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「议价技巧」、「露天集市」，造价分别为 30、34 点；本项 50 点，排第 6/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（taxMul）、乘法叠加（diplomacyMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_trade_06": {
    id: "v32_trade_06",
    name: "关税协定",
    icon: "📜",
    branch: "trade",
    branchName: "贸易",
    tier: 1,
    cost: 50,
    researchTimeSec: 300,
    needs: ["v32_trade_05"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_05", note: "需先研究「汇兑票据」。" },
    ],
    desc: "与地球签订关税协定，税收效率提升。",
    fx: {
      "taxMul": 1.15,
      "diplomacyMul": 1.1,
    },
    modifiers: [
      {
        key: "taxMul",
        target: "econ.taxRate",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "税收效率 ×1.15",
      },
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "外交关系增速 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_07"],
    comboWith: [
      { tech: "v32_trade_07", note: "与「行会章程」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "税收效率 ×1.15。",
      "外交关系增速 ×1.1。",
    ],
    researchCost: {
      tech: 50,
      credits: 250,
      timeSec: 300,
      note: "研究耗时 300 秒，另耗星币 250。",
    },
    levels: [
      { level: 1, cost: 50, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 100, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 200, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_07 行会章程 [贸易·T1] 造价 54 科技点
  // 造价分析：本项 54 科技点，同档（T1）均价 44 点，本项为均价的 1.23×；研究耗时 324 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 294 科技点，占本系链总造价 6824 点的 4%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 432 铁当量，约等于 36.0 座采矿机 L1 的造价。
  // 效果分解：贸易收入 ×1.12（目标 econ.tradeIncome，mul运算）。
  // 效果分解：殖民地稳定度 +2 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 贸易收入 ×1.12、殖民地稳定度 +2 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 7/40 项，前置 「关税协定」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「议价技巧」、「露天集市」，造价分别为 30、34 点；本项 54 点，排第 7/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（tradeMul）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「罢工潮」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_trade_07": {
    id: "v32_trade_07",
    name: "行会章程",
    icon: "🤝",
    branch: "trade",
    branchName: "贸易",
    tier: 1,
    cost: 54,
    researchTimeSec: 324,
    needs: ["v32_trade_06"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_06", note: "需先研究「关税协定」。" },
    ],
    desc: "商人行会统一度量衡，贸易收入提升。",
    fx: {
      "tradeMul": 1.12,
      "stabilityAdd": 2,
    },
    modifiers: [
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.12,
        unit: "倍",
        note: "贸易收入 ×1.12",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 2,
        unit: "点",
        note: "殖民地稳定度 +2 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-strike"],
    mitigatesDetail: [
      { disaster: "d32-strike", note: "缓解「罢工潮」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_08"],
    comboWith: [
      { tech: "v32_trade_08", note: "与「信用评级」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.12。",
      "殖民地稳定度 +2 点。",
    ],
    researchCost: {
      tech: 54,
      credits: 270,
      timeSec: 324,
      note: "研究耗时 324 秒，另耗星币 270。",
    },
    levels: [
      { level: 1, cost: 54, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 108, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 216, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_08 信用评级 [贸易·T1] 造价 58 科技点
  // 造价分析：本项 58 科技点，同档（T1）均价 44 点，本项为均价的 1.32×；研究耗时 348 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 352 科技点，占本系链总造价 6824 点的 5%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 464 铁当量，约等于 38.7 座采矿机 L1 的造价。
  // 效果分解：贸易成交价 ×1.12（目标 trade.price，mul运算）。
  // 效果分解：贸易收入 ×1.05（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 贸易成交价 ×1.12、贸易收入 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 8/40 项，前置 「行会章程」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「议价技巧」、「露天集市」，造价分别为 30、34 点；本项 58 点，排第 8/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（tradePriceMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_trade_08": {
    id: "v32_trade_08",
    name: "信用评级",
    icon: "⭐",
    branch: "trade",
    branchName: "贸易",
    tier: 1,
    cost: 58,
    researchTimeSec: 348,
    needs: ["v32_trade_07"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_07", note: "需先研究「行会章程」。" },
    ],
    desc: "商户信用评级公开，优质商队获得更优成交价。",
    fx: {
      "tradePriceMul": 1.12,
      "tradeMul": 1.05,
    },
    modifiers: [
      {
        key: "tradePriceMul",
        target: "trade.price",
        op: "mul",
        value: 1.12,
        unit: "倍",
        note: "贸易成交价 ×1.12",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "贸易收入 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_09"],
    comboWith: [
      { tech: "v32_trade_09", note: "与「期货交易所」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易成交价 ×1.12。",
      "贸易收入 ×1.05。",
    ],
    researchCost: {
      tech: 58,
      credits: 290,
      timeSec: 348,
      note: "研究耗时 348 秒，另耗星币 290。",
    },
    levels: [
      { level: 1, cost: 58, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 116, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 232, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_09 期货交易所 [贸易·T2] 造价 65 科技点
  // 造价分析：本项 65 科技点，同档（T2）均价 86 点，本项为均价的 0.76×；研究耗时 390 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 417 科技点，占本系链总造价 6824 点的 6%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 520 铁当量，约等于 43.3 座采矿机 L1 的造价。
  // 效果分解：解锁期货交易所（目标 unlock.exchange，flag运算）。
  // 效果分解：贸易收入 ×1.15（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 解锁期货交易所、贸易收入 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 9/40 项，前置 「信用评级」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「航线测绘」、「冷链运输」，造价分别为 71、77 点；本项 65 点，排第 1/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：开关解锁（unlockExchange）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「期货交易所」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_trade_09": {
    id: "v32_trade_09",
    name: "期货交易所",
    icon: "📈",
    branch: "trade",
    branchName: "贸易",
    tier: 2,
    cost: 65,
    researchTimeSec: 390,
    needs: ["v32_trade_08"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_08", note: "需先研究「信用评级」。" },
    ],
    desc: "期货合约锁定远期价格，贸易收入大幅提升。",
    fx: {
      "unlockExchange": 1,
      "tradeMul": 1.15,
    },
    modifiers: [
      {
        key: "unlockExchange",
        target: "unlock.exchange",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁期货交易所",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "贸易收入 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-exchange"],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_10"],
    comboWith: [
      { tech: "v32_trade_10", note: "与「航线测绘」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁期货交易所。",
      "贸易收入 ×1.15。",
    ],
    researchCost: {
      tech: 65,
      credits: 325,
      timeSec: 390,
      note: "研究耗时 390 秒，另耗星币 325。",
    },
    levels: [
      { level: 1, cost: 65, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 130, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 260, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_10 航线测绘 [贸易·T2] 造价 71 科技点
  // 造价分析：本项 71 科技点，同档（T2）均价 86 点，本项为均价的 0.83×；研究耗时 426 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 488 科技点，占本系链总造价 6824 点的 7%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 568 铁当量，约等于 47.3 座采矿机 L1 的造价。
  // 效果分解：贸易船到访间隔 ×0.85（目标 trade.shipInterval，mul运算）。
  // 效果分解：贸易航线 +1 条（目标 trade.routes，add运算）。
  // 效果分解：两项效果合计 贸易船到访间隔 ×0.85、贸易航线 +1 条；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 10/40 项，前置 「期货交易所」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「期货交易所」、「冷链运输」，造价分别为 65、77 点；本项 71 点，排第 2/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（tradeShipMul）、加法叠加（tradeRouteAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗劫掠」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_trade_10": {
    id: "v32_trade_10",
    name: "航线测绘",
    icon: "🗺️",
    branch: "trade",
    branchName: "贸易",
    tier: 2,
    cost: 71,
    researchTimeSec: 426,
    needs: ["v32_trade_09"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_09", note: "需先研究「期货交易所」。" },
    ],
    desc: "新航线测绘完成，贸易船到访间隔缩短。",
    fx: {
      "tradeShipMul": 0.85,
      "tradeRouteAdd": 1,
    },
    modifiers: [
      {
        key: "tradeShipMul",
        target: "trade.shipInterval",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "贸易船到访间隔 ×0.85",
      },
      {
        key: "tradeRouteAdd",
        target: "trade.routes",
        op: "add",
        value: 1,
        unit: "条",
        note: "贸易航线 +1 条",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-pirate"],
    mitigatesDetail: [
      { disaster: "d32-pirate", note: "缓解「海盗劫掠」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_11"],
    comboWith: [
      { tech: "v32_trade_11", note: "与「冷链运输」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易船到访间隔 ×0.85。",
      "贸易航线 +1 条。",
    ],
    researchCost: {
      tech: 71,
      credits: 355,
      timeSec: 426,
      note: "研究耗时 426 秒，另耗星币 355。",
    },
    levels: [
      { level: 1, cost: 71, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 142, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 284, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_11 冷链运输 [贸易·T2] 造价 77 科技点
  // 造价分析：本项 77 科技点，同档（T2）均价 86 点，本项为均价的 0.90×；研究耗时 462 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 565 科技点，占本系链总造价 6824 点的 8%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 616 铁当量，约等于 51.3 座采矿机 L1 的造价。
  // 效果分解：食物 +4/分钟（目标 prod.foodPerMin，add运算）。
  // 效果分解：贸易收入 ×1.08（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 食物 +4/分钟、贸易收入 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 11/40 项，前置 「航线测绘」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「期货交易所」、「航线测绘」，造价分别为 65、71 点；本项 77 点，排第 3/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：加法叠加（foodAdd）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_trade_11": {
    id: "v32_trade_11",
    name: "冷链运输",
    icon: "❄️",
    branch: "trade",
    branchName: "贸易",
    tier: 2,
    cost: 77,
    researchTimeSec: 462,
    needs: ["v32_trade_10"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_10", note: "需先研究「航线测绘」。" },
    ],
    desc: "冷链货舱投入使用，食物贸易损耗下降。",
    fx: {
      "foodAdd": 4,
      "tradeMul": 1.08,
    },
    modifiers: [
      {
        key: "foodAdd",
        target: "prod.foodPerMin",
        op: "add",
        value: 4,
        unit: "/分钟",
        note: "食物 +4/分钟",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "贸易收入 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-drought"],
    mitigatesDetail: [
      { disaster: "d32-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_12"],
    comboWith: [
      { tech: "v32_trade_12", note: "与「大宗采购」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "食物 +4/分钟。",
      "贸易收入 ×1.08。",
    ],
    researchCost: {
      tech: 77,
      credits: 385,
      timeSec: 462,
      note: "研究耗时 462 秒，另耗星币 385。",
    },
    levels: [
      { level: 1, cost: 77, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 154, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 308, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_12 大宗采购 [贸易·T2] 造价 83 科技点
  // 造价分析：本项 83 科技点，同档（T2）均价 86 点，本项为均价的 0.97×；研究耗时 498 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 648 科技点，占本系链总造价 6824 点的 9%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 664 铁当量，约等于 55.3 座采矿机 L1 的造价。
  // 效果分解：建筑建造成本 ×0.95（目标 cost.build，mul运算）。
  // 效果分解：贸易收入 ×1.08（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 建筑建造成本 ×0.95、贸易收入 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 12/40 项，前置 「冷链运输」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「期货交易所」、「航线测绘」，造价分别为 65、71 点；本项 83 点，排第 4/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（buildCostMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_trade_12": {
    id: "v32_trade_12",
    name: "大宗采购",
    icon: "🛒",
    branch: "trade",
    branchName: "贸易",
    tier: 2,
    cost: 83,
    researchTimeSec: 498,
    needs: ["v32_trade_11"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_11", note: "需先研究「冷链运输」。" },
    ],
    desc: "集中采购压低进价，建筑建造成本下降。",
    fx: {
      "buildCostMul": 0.95,
      "tradeMul": 1.08,
    },
    modifiers: [
      {
        key: "buildCostMul",
        target: "cost.build",
        op: "mul",
        value: 0.95,
        unit: "倍",
        note: "建筑建造成本 ×0.95",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "贸易收入 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_13"],
    comboWith: [
      { tech: "v32_trade_13", note: "与「贸易使团」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "建筑建造成本 ×0.95。",
      "贸易收入 ×1.08。",
    ],
    researchCost: {
      tech: 83,
      credits: 415,
      timeSec: 498,
      note: "研究耗时 498 秒，另耗星币 415。",
    },
    levels: [
      { level: 1, cost: 83, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 166, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 332, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_13 贸易使团 [贸易·T2] 造价 89 科技点
  // 造价分析：本项 89 科技点，同档（T2）均价 86 点，本项为均价的 1.03×；研究耗时 534 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 737 科技点，占本系链总造价 6824 点的 11%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 712 铁当量，约等于 59.3 座采矿机 L1 的造价。
  // 效果分解：外交关系增速 ×1.2（目标 diplomacy.relation，mul运算）。
  // 效果分解：贸易收入 ×1.08（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 外交关系增速 ×1.2、贸易收入 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 13/40 项，前置 「大宗采购」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「期货交易所」、「航线测绘」，造价分别为 65、71 点；本项 89 点，排第 5/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（diplomacyMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_trade_13": {
    id: "v32_trade_13",
    name: "贸易使团",
    icon: "🕊️",
    branch: "trade",
    branchName: "贸易",
    tier: 2,
    cost: 89,
    researchTimeSec: 534,
    needs: ["v32_trade_12"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_12", note: "需先研究「大宗采购」。" },
    ],
    desc: "常驻地球贸易使团，外交关系增速提升。",
    fx: {
      "diplomacyMul": 1.2,
      "tradeMul": 1.08,
    },
    modifiers: [
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "外交关系增速 ×1.2",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "贸易收入 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_14"],
    comboWith: [
      { tech: "v32_trade_14", note: "与「保险精算」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.2。",
      "贸易收入 ×1.08。",
    ],
    researchCost: {
      tech: 89,
      credits: 445,
      timeSec: 534,
      note: "研究耗时 534 秒，另耗星币 445。",
    },
    levels: [
      { level: 1, cost: 89, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 178, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 356, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_14 保险精算 [贸易·T2] 造价 95 科技点
  // 造价分析：本项 95 科技点，同档（T2）均价 86 点，本项为均价的 1.10×；研究耗时 570 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 832 科技点，占本系链总造价 6824 点的 12%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 760 铁当量，约等于 63.3 座采矿机 L1 的造价。
  // 效果分解：海盗袭击概率 ×0.85（目标 risk.pirateChance，mul运算）。
  // 效果分解：贸易船到访间隔 ×0.95（目标 trade.shipInterval，mul运算）。
  // 效果分解：两项效果合计 海盗袭击概率 ×0.85、贸易船到访间隔 ×0.95；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 14/40 项，前置 「贸易使团」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「期货交易所」、「航线测绘」，造价分别为 65、71 点；本项 95 点，排第 6/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（pirateMul）、乘法叠加（tradeShipMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗劫掠」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_trade_14": {
    id: "v32_trade_14",
    name: "保险精算",
    icon: "🛡️",
    branch: "trade",
    branchName: "贸易",
    tier: 2,
    cost: 95,
    researchTimeSec: 570,
    needs: ["v32_trade_13"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_13", note: "需先研究「贸易使团」。" },
    ],
    desc: "货运保险精算成熟，海盗袭击损失下降。",
    fx: {
      "pirateMul": 0.85,
      "tradeShipMul": 0.95,
    },
    modifiers: [
      {
        key: "pirateMul",
        target: "risk.pirateChance",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "海盗袭击概率 ×0.85",
      },
      {
        key: "tradeShipMul",
        target: "trade.shipInterval",
        op: "mul",
        value: 0.95,
        unit: "倍",
        note: "贸易船到访间隔 ×0.95",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-pirate"],
    mitigatesDetail: [
      { disaster: "d32-pirate", note: "缓解「海盗劫掠」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_15"],
    comboWith: [
      { tech: "v32_trade_15", note: "与「广告营销」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "海盗袭击概率 ×0.85。",
      "贸易船到访间隔 ×0.95。",
    ],
    researchCost: {
      tech: 95,
      credits: 475,
      timeSec: 570,
      note: "研究耗时 570 秒，另耗星币 475。",
    },
    levels: [
      { level: 1, cost: 95, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 190, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 380, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_15 广告营销 [贸易·T2] 造价 101 科技点
  // 造价分析：本项 101 科技点，同档（T2）均价 86 点，本项为均价的 1.17×；研究耗时 606 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 933 科技点，占本系链总造价 6824 点的 14%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 808 铁当量，约等于 67.3 座采矿机 L1 的造价。
  // 效果分解：贸易成交价 ×1.15（目标 trade.price，mul运算）。
  // 效果分解：居民幸福度 +2 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 贸易成交价 ×1.15、居民幸福度 +2 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 15/40 项，前置 「保险精算」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「期货交易所」、「航线测绘」，造价分别为 65、71 点；本项 101 点，排第 7/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（tradePriceMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_trade_15": {
    id: "v32_trade_15",
    name: "广告营销",
    icon: "📣",
    branch: "trade",
    branchName: "贸易",
    tier: 2,
    cost: 101,
    researchTimeSec: 606,
    needs: ["v32_trade_14"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_14", note: "需先研究「保险精算」。" },
    ],
    desc: "全息广告覆盖地球市场，贸易成交价上涨。",
    fx: {
      "tradePriceMul": 1.15,
      "happinessAdd": 2,
    },
    modifiers: [
      {
        key: "tradePriceMul",
        target: "trade.price",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "贸易成交价 ×1.15",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 2,
        unit: "点",
        note: "居民幸福度 +2 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_16"],
    comboWith: [
      { tech: "v32_trade_16", note: "与「免税仓库」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易成交价 ×1.15。",
      "居民幸福度 +2 点。",
    ],
    researchCost: {
      tech: 101,
      credits: 505,
      timeSec: 606,
      note: "研究耗时 606 秒，另耗星币 505。",
    },
    levels: [
      { level: 1, cost: 101, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 202, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 404, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_16 免税仓库 [贸易·T2] 造价 107 科技点
  // 造价分析：本项 107 科技点，同档（T2）均价 86 点，本项为均价的 1.24×；研究耗时 642 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1040 科技点，占本系链总造价 6824 点的 15%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 856 铁当量，约等于 71.3 座采矿机 L1 的造价。
  // 效果分解：税收效率 ×1.1（目标 econ.taxRate，mul运算）。
  // 效果分解：贸易收入 ×1.1（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 税收效率 ×1.1、贸易收入 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 16/40 项，前置 「广告营销」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「期货交易所」、「航线测绘」，造价分别为 65、71 点；本项 107 点，排第 8/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（taxMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「罢工潮」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_trade_16": {
    id: "v32_trade_16",
    name: "免税仓库",
    icon: "🏭",
    branch: "trade",
    branchName: "贸易",
    tier: 2,
    cost: 107,
    researchTimeSec: 642,
    needs: ["v32_trade_15"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_15", note: "需先研究「广告营销」。" },
    ],
    desc: "保税仓降低通关成本，税收与贸易双收。",
    fx: {
      "taxMul": 1.1,
      "tradeMul": 1.1,
    },
    modifiers: [
      {
        key: "taxMul",
        target: "econ.taxRate",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "税收效率 ×1.1",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "贸易收入 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-strike"],
    mitigatesDetail: [
      { disaster: "d32-strike", note: "缓解「罢工潮」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_17"],
    comboWith: [
      { tech: "v32_trade_17", note: "与「殖民地银行」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "税收效率 ×1.1。",
      "贸易收入 ×1.1。",
    ],
    researchCost: {
      tech: 107,
      credits: 535,
      timeSec: 642,
      note: "研究耗时 642 秒，另耗星币 535。",
    },
    levels: [
      { level: 1, cost: 107, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 214, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 428, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_17 殖民地银行 [贸易·T3] 造价 115 科技点
  // 造价分析：本项 115 科技点，同档（T3）均价 143 点，本项为均价的 0.80×；研究耗时 690 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1155 科技点，占本系链总造价 6824 点的 17%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 920 铁当量，约等于 76.7 座采矿机 L1 的造价。
  // 效果分解：解锁殖民地银行（目标 unlock.bank，flag运算）。
  // 效果分解：税收效率 ×1.15（目标 econ.taxRate，mul运算）。
  // 效果分解：两项效果合计 解锁殖民地银行、税收效率 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 17/40 项，前置 「免税仓库」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「星际航线网」、「稀土专营」，造价分别为 123、131 点；本项 115 点，排第 1/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：开关解锁（unlockBank）、乘法叠加（taxMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「殖民地银行」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_trade_17": {
    id: "v32_trade_17",
    name: "殖民地银行",
    icon: "🏦",
    branch: "trade",
    branchName: "贸易",
    tier: 3,
    cost: 115,
    researchTimeSec: 690,
    needs: ["v32_trade_16"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_16", note: "需先研究「免税仓库」。" },
    ],
    desc: "殖民地银行开业，税收效率与贸易收入提升。",
    fx: {
      "unlockBank": 1,
      "taxMul": 1.15,
    },
    modifiers: [
      {
        key: "unlockBank",
        target: "unlock.bank",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁殖民地银行",
      },
      {
        key: "taxMul",
        target: "econ.taxRate",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "税收效率 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-bank"],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_18"],
    comboWith: [
      { tech: "v32_trade_18", note: "与「星际航线网」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁殖民地银行。",
      "税收效率 ×1.15。",
    ],
    researchCost: {
      tech: 115,
      credits: 575,
      timeSec: 690,
      note: "研究耗时 690 秒，另耗星币 575。",
    },
    levels: [
      { level: 1, cost: 115, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 230, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 460, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_18 星际航线网 [贸易·T3] 造价 123 科技点
  // 造价分析：本项 123 科技点，同档（T3）均价 143 点，本项为均价的 0.86×；研究耗时 738 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1278 科技点，占本系链总造价 6824 点的 19%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 984 铁当量，约等于 82.0 座采矿机 L1 的造价。
  // 效果分解：贸易航线 +2 条（目标 trade.routes，add运算）。
  // 效果分解：贸易船到访间隔 ×0.9（目标 trade.shipInterval，mul运算）。
  // 效果分解：两项效果合计 贸易航线 +2 条、贸易船到访间隔 ×0.9；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 18/40 项，前置 「殖民地银行」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「殖民地银行」、「稀土专营」，造价分别为 115、131 点；本项 123 点，排第 2/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：加法叠加（tradeRouteAdd）、乘法叠加（tradeShipMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗劫掠」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_trade_18": {
    id: "v32_trade_18",
    name: "星际航线网",
    icon: "🌐",
    branch: "trade",
    branchName: "贸易",
    tier: 3,
    cost: 123,
    researchTimeSec: 738,
    needs: ["v32_trade_17"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_17", note: "需先研究「殖民地银行」。" },
    ],
    desc: "三条固定航线开通，新增贸易航线两条。",
    fx: {
      "tradeRouteAdd": 2,
      "tradeShipMul": 0.9,
    },
    modifiers: [
      {
        key: "tradeRouteAdd",
        target: "trade.routes",
        op: "add",
        value: 2,
        unit: "条",
        note: "贸易航线 +2 条",
      },
      {
        key: "tradeShipMul",
        target: "trade.shipInterval",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "贸易船到访间隔 ×0.9",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-pirate"],
    mitigatesDetail: [
      { disaster: "d32-pirate", note: "缓解「海盗劫掠」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_19"],
    comboWith: [
      { tech: "v32_trade_19", note: "与「稀土专营」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易航线 +2 条。",
      "贸易船到访间隔 ×0.9。",
    ],
    researchCost: {
      tech: 123,
      credits: 615,
      timeSec: 738,
      note: "研究耗时 738 秒，另耗星币 615。",
    },
    levels: [
      { level: 1, cost: 123, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 246, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 492, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_19 稀土专营 [贸易·T3] 造价 131 科技点
  // 造价分析：本项 131 科技点，同档（T3）均价 143 点，本项为均价的 0.92×；研究耗时 786 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1409 科技点，占本系链总造价 6824 点的 21%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1048 铁当量，约等于 87.3 座采矿机 L1 的造价。
  // 效果分解：钢材 +4/分钟（目标 prod.steelPerMin，add运算）。
  // 效果分解：贸易收入 ×1.1（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 钢材 +4/分钟、贸易收入 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 19/40 项，前置 「星际航线网」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「殖民地银行」、「星际航线网」，造价分别为 115、123 点；本项 131 点，排第 3/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：加法叠加（steelAdd）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_trade_19": {
    id: "v32_trade_19",
    name: "稀土专营",
    icon: "⛏️",
    branch: "trade",
    branchName: "贸易",
    tier: 3,
    cost: 131,
    researchTimeSec: 786,
    needs: ["v32_trade_18"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_18", note: "需先研究「星际航线网」。" },
    ],
    desc: "稀土出口专营权谈妥，钢材出口增收。",
    fx: {
      "steelAdd": 4,
      "tradeMul": 1.1,
    },
    modifiers: [
      {
        key: "steelAdd",
        target: "prod.steelPerMin",
        op: "add",
        value: 4,
        unit: "/分钟",
        note: "钢材 +4/分钟",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "贸易收入 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_20"],
    comboWith: [
      { tech: "v32_trade_20", note: "与「粮食期货」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "钢材 +4/分钟。",
      "贸易收入 ×1.1。",
    ],
    researchCost: {
      tech: 131,
      credits: 655,
      timeSec: 786,
      note: "研究耗时 786 秒，另耗星币 655。",
    },
    levels: [
      { level: 1, cost: 131, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 262, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 524, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_20 粮食期货 [贸易·T3] 造价 139 科技点
  // 造价分析：本项 139 科技点，同档（T3）均价 143 点，本项为均价的 0.97×；研究耗时 834 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1548 科技点，占本系链总造价 6824 点的 23%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1112 铁当量，约等于 92.7 座采矿机 L1 的造价。
  // 效果分解：食物产量 ×1.15（目标 prod.food，mul运算）。
  // 效果分解：贸易收入 ×1.08（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 食物产量 ×1.15、贸易收入 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 20/40 项，前置 「稀土专营」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「殖民地银行」、「星际航线网」，造价分别为 115、123 点；本项 139 点，排第 4/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（foodMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_trade_20": {
    id: "v32_trade_20",
    name: "粮食期货",
    icon: "🌾",
    branch: "trade",
    branchName: "贸易",
    tier: 3,
    cost: 139,
    researchTimeSec: 834,
    needs: ["v32_trade_19"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_19", note: "需先研究「稀土专营」。" },
    ],
    desc: "粮食期货平抑粮价，食物产量与贸易收入提升。",
    fx: {
      "foodMul": 1.15,
      "tradeMul": 1.08,
    },
    modifiers: [
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "食物产量 ×1.15",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "贸易收入 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-drought"],
    mitigatesDetail: [
      { disaster: "d32-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_21"],
    comboWith: [
      { tech: "v32_trade_21", note: "与「能源贸易」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "食物产量 ×1.15。",
      "贸易收入 ×1.08。",
    ],
    researchCost: {
      tech: 139,
      credits: 695,
      timeSec: 834,
      note: "研究耗时 834 秒，另耗星币 695。",
    },
    levels: [
      { level: 1, cost: 139, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 278, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 556, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_21 能源贸易 [贸易·T3] 造价 147 科技点
  // 造价分析：本项 147 科技点，同档（T3）均价 143 点，本项为均价的 1.03×；研究耗时 882 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1695 科技点，占本系链总造价 6824 点的 25%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1176 铁当量，约等于 98.0 座采矿机 L1 的造价。
  // 效果分解：氦3 +3/分钟（目标 prod.he3PerMin，add运算）。
  // 效果分解：贸易收入 ×1.1（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 氦3 +3/分钟、贸易收入 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 21/40 项，前置 「粮食期货」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「殖民地银行」、「星际航线网」，造价分别为 115、123 点；本项 147 点，排第 5/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：加法叠加（he3Add）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_trade_21": {
    id: "v32_trade_21",
    name: "能源贸易",
    icon: "⚡",
    branch: "trade",
    branchName: "贸易",
    tier: 3,
    cost: 147,
    researchTimeSec: 882,
    needs: ["v32_trade_20"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_20", note: "需先研究「粮食期货」。" },
    ],
    desc: "氦3出口长约签订，每分钟氦3增收。",
    fx: {
      "he3Add": 3,
      "tradeMul": 1.1,
    },
    modifiers: [
      {
        key: "he3Add",
        target: "prod.he3PerMin",
        op: "add",
        value: 3,
        unit: "/分钟",
        note: "氦3 +3/分钟",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "贸易收入 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_22"],
    comboWith: [
      { tech: "v32_trade_22", note: "与「商法典籍」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "氦3 +3/分钟。",
      "贸易收入 ×1.1。",
    ],
    researchCost: {
      tech: 147,
      credits: 735,
      timeSec: 882,
      note: "研究耗时 882 秒，另耗星币 735。",
    },
    levels: [
      { level: 1, cost: 147, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 294, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 588, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_22 商法典籍 [贸易·T3] 造价 155 科技点
  // 造价分析：本项 155 科技点，同档（T3）均价 143 点，本项为均价的 1.08×；研究耗时 930 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1850 科技点，占本系链总造价 6824 点的 27%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1240 铁当量，约等于 103.3 座采矿机 L1 的造价。
  // 效果分解：腐败发生率 ×0.85（目标 risk.corruption，mul运算）。
  // 效果分解：殖民地稳定度 +3 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 腐败发生率 ×0.85、殖民地稳定度 +3 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 22/40 项，前置 「能源贸易」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「殖民地银行」、「星际航线网」，造价分别为 115、123 点；本项 155 点，排第 6/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（corruptionMul）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_trade_22": {
    id: "v32_trade_22",
    name: "商法典籍",
    icon: "⚖️",
    branch: "trade",
    branchName: "贸易",
    tier: 3,
    cost: 155,
    researchTimeSec: 930,
    needs: ["v32_trade_21"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_21", note: "需先研究「能源贸易」。" },
    ],
    desc: "统一商法典颁布，腐败发生率下降。",
    fx: {
      "corruptionMul": 0.85,
      "stabilityAdd": 3,
    },
    modifiers: [
      {
        key: "corruptionMul",
        target: "risk.corruption",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "腐败发生率 ×0.85",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 3,
        unit: "点",
        note: "殖民地稳定度 +3 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_23"],
    comboWith: [
      { tech: "v32_trade_23", note: "与「旅游贸易」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "腐败发生率 ×0.85。",
      "殖民地稳定度 +3 点。",
    ],
    researchCost: {
      tech: 155,
      credits: 775,
      timeSec: 930,
      note: "研究耗时 930 秒，另耗星币 775。",
    },
    levels: [
      { level: 1, cost: 155, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 310, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 620, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_23 旅游贸易 [贸易·T3] 造价 163 科技点
  // 造价分析：本项 163 科技点，同档（T3）均价 143 点，本项为均价的 1.14×；研究耗时 978 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2013 科技点，占本系链总造价 6824 点的 29%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1304 铁当量，约等于 108.7 座采矿机 L1 的造价。
  // 效果分解：旅游收入 ×1.3（目标 culture.tourism，mul运算）。
  // 效果分解：贸易收入 ×1.08（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 旅游收入 ×1.3、贸易收入 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 23/40 项，前置 「商法典籍」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「殖民地银行」、「星际航线网」，造价分别为 115、123 点；本项 163 点，排第 7/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（tourismMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_trade_23": {
    id: "v32_trade_23",
    name: "旅游贸易",
    icon: "🧳",
    branch: "trade",
    branchName: "贸易",
    tier: 3,
    cost: 163,
    researchTimeSec: 978,
    needs: ["v32_trade_22"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_22", note: "需先研究「商法典籍」。" },
    ],
    desc: "观光航线开通，旅游收入并入贸易统计。",
    fx: {
      "tourismMul": 1.3,
      "tradeMul": 1.08,
    },
    modifiers: [
      {
        key: "tourismMul",
        target: "culture.tourism",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "旅游收入 ×1.3",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "贸易收入 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_24"],
    comboWith: [
      { tech: "v32_trade_24", note: "与「供应链金融」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "旅游收入 ×1.3。",
      "贸易收入 ×1.08。",
    ],
    researchCost: {
      tech: 163,
      credits: 815,
      timeSec: 978,
      note: "研究耗时 978 秒，另耗星币 815。",
    },
    levels: [
      { level: 1, cost: 163, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 326, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 652, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_24 供应链金融 [贸易·T3] 造价 171 科技点
  // 造价分析：本项 171 科技点，同档（T3）均价 143 点，本项为均价的 1.20×；研究耗时 1026 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2184 科技点，占本系链总造价 6824 点的 32%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1368 铁当量，约等于 114.0 座采矿机 L1 的造价。
  // 效果分解：建筑建造成本 ×0.9（目标 cost.build，mul运算）。
  // 效果分解：贸易收入 ×1.1（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 建筑建造成本 ×0.9、贸易收入 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 24/40 项，前置 「旅游贸易」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「殖民地银行」、「星际航线网」，造价分别为 115、123 点；本项 171 点，排第 8/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（buildCostMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「罢工潮」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_trade_24": {
    id: "v32_trade_24",
    name: "供应链金融",
    icon: "🔗",
    branch: "trade",
    branchName: "贸易",
    tier: 3,
    cost: 171,
    researchTimeSec: 1026,
    needs: ["v32_trade_23"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_23", note: "需先研究「旅游贸易」。" },
    ],
    desc: "供应链票据贴现，建筑建造成本下降。",
    fx: {
      "buildCostMul": 0.9,
      "tradeMul": 1.1,
    },
    modifiers: [
      {
        key: "buildCostMul",
        target: "cost.build",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "建筑建造成本 ×0.9",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "贸易收入 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-strike"],
    mitigatesDetail: [
      { disaster: "d32-strike", note: "缓解「罢工潮」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_25"],
    comboWith: [
      { tech: "v32_trade_25", note: "与「贸易枢纽」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "建筑建造成本 ×0.9。",
      "贸易收入 ×1.1。",
    ],
    researchCost: {
      tech: 171,
      credits: 855,
      timeSec: 1026,
      note: "研究耗时 1026 秒，另耗星币 855。",
    },
    levels: [
      { level: 1, cost: 171, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 342, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 684, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_25 贸易枢纽 [贸易·T4] 造价 185 科技点
  // 造价分析：本项 185 科技点，同档（T4）均价 227 点，本项为均价的 0.81×；研究耗时 1110 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2369 科技点，占本系链总造价 6824 点的 35%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1480 铁当量，约等于 123.3 座采矿机 L1 的造价。
  // 效果分解：解锁贸易枢纽（目标 unlock.tradeHub，flag运算）。
  // 效果分解：贸易船载货量 ×1.5（目标 trade.cargo，mul运算）。
  // 效果分解：两项效果合计 解锁贸易枢纽、贸易船载货量 ×1.5；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 25/40 项，前置 「供应链金融」、旧科技「贸易协定」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「自由贸易区」、「星际拍卖行」，造价分别为 197、209 点；本项 185 点，排第 1/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：开关解锁（unlockTradeHub）、乘法叠加（tradeShipCargoMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「贸易枢纽」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗劫掠」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_trade_25": {
    id: "v32_trade_25",
    name: "贸易枢纽",
    icon: "🏙️",
    branch: "trade",
    branchName: "贸易",
    tier: 4,
    cost: 185,
    researchTimeSec: 1110,
    needs: ["v32_trade_24", "t-surv-8"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_24", note: "需先研究「供应链金融」。" },
      { type: "tech", ref: "t-surv-8", note: "需先研究旧科技「贸易协定」。" },
    ],
    desc: "轨道贸易枢纽落成，贸易船载货量翻倍。",
    fx: {
      "unlockTradeHub": 1,
      "tradeShipCargoMul": 1.5,
    },
    modifiers: [
      {
        key: "unlockTradeHub",
        target: "unlock.tradeHub",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁贸易枢纽",
      },
      {
        key: "tradeShipCargoMul",
        target: "trade.cargo",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "贸易船载货量 ×1.5",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-tradehub"],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-pirate"],
    mitigatesDetail: [
      { disaster: "d32-pirate", note: "缓解「海盗劫掠」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_26"],
    comboWith: [
      { tech: "v32_trade_26", note: "与「自由贸易区」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁贸易枢纽。",
      "贸易船载货量 ×1.5。",
    ],
    researchCost: {
      tech: 185,
      credits: 925,
      timeSec: 1110,
      note: "研究耗时 1110 秒，另耗星币 925。",
    },
    levels: [
      { level: 1, cost: 185, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 370, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 740, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_26 自由贸易区 [贸易·T4] 造价 197 科技点
  // 造价分析：本项 197 科技点，同档（T4）均价 227 点，本项为均价的 0.87×；研究耗时 1182 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2566 科技点，占本系链总造价 6824 点的 38%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1576 铁当量，约等于 131.3 座采矿机 L1 的造价。
  // 效果分解：贸易收入 ×1.2（目标 econ.tradeIncome，mul运算）。
  // 效果分解：税收效率 ×1.1（目标 econ.taxRate，mul运算）。
  // 效果分解：两项效果合计 贸易收入 ×1.2、税收效率 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 26/40 项，前置 「贸易枢纽」、旧科技「量子计算」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「贸易枢纽」、「星际拍卖行」，造价分别为 185、209 点；本项 197 点，排第 2/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（tradeMul）、乘法叠加（taxMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_trade_26": {
    id: "v32_trade_26",
    name: "自由贸易区",
    icon: "🆓",
    branch: "trade",
    branchName: "贸易",
    tier: 4,
    cost: 197,
    researchTimeSec: 1182,
    needs: ["v32_trade_25", "t-prod-6"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_25", note: "需先研究「贸易枢纽」。" },
      { type: "tech", ref: "t-prod-6", note: "需先研究旧科技「量子计算」。" },
    ],
    desc: "自由贸易区零关税，贸易收入大幅提升。",
    fx: {
      "tradeMul": 1.2,
      "taxMul": 1.1,
    },
    modifiers: [
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "贸易收入 ×1.2",
      },
      {
        key: "taxMul",
        target: "econ.taxRate",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "税收效率 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_27"],
    comboWith: [
      { tech: "v32_trade_27", note: "与「星际拍卖行」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.2。",
      "税收效率 ×1.1。",
    ],
    researchCost: {
      tech: 197,
      credits: 985,
      timeSec: 1182,
      note: "研究耗时 1182 秒，另耗星币 985。",
    },
    levels: [
      { level: 1, cost: 197, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 394, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 788, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_27 星际拍卖行 [贸易·T4] 造价 209 科技点
  // 造价分析：本项 209 科技点，同档（T4）均价 227 点，本项为均价的 0.92×；研究耗时 1254 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2775 科技点，占本系链总造价 6824 点的 41%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1672 铁当量，约等于 139.3 座采矿机 L1 的造价。
  // 效果分解：贸易成交价 ×1.25（目标 trade.price，mul运算）。
  // 效果分解：贸易收入 ×1.1（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 贸易成交价 ×1.25、贸易收入 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 27/40 项，前置 「自由贸易区」、旧科技「星际通讯」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「贸易枢纽」、「自由贸易区」，造价分别为 185、197 点；本项 209 点，排第 3/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（tradePriceMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_trade_27": {
    id: "v32_trade_27",
    name: "星际拍卖行",
    icon: "🔨",
    branch: "trade",
    branchName: "贸易",
    tier: 4,
    cost: 209,
    researchTimeSec: 1254,
    needs: ["v32_trade_26", "t-orb-9"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_26", note: "需先研究「自由贸易区」。" },
      { type: "tech", ref: "t-orb-9", note: "需先研究旧科技「星际通讯」。" },
    ],
    desc: "稀有矿物拍卖行开张，贸易成交价大幅上涨。",
    fx: {
      "tradePriceMul": 1.25,
      "tradeMul": 1.1,
    },
    modifiers: [
      {
        key: "tradePriceMul",
        target: "trade.price",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "贸易成交价 ×1.25",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "贸易收入 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_28"],
    comboWith: [
      { tech: "v32_trade_28", note: "与「量子结算」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易成交价 ×1.25。",
      "贸易收入 ×1.1。",
    ],
    researchCost: {
      tech: 209,
      credits: 1045,
      timeSec: 1254,
      note: "研究耗时 1254 秒，另耗星币 1045。",
    },
    levels: [
      { level: 1, cost: 209, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 418, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 836, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_28 量子结算 [贸易·T4] 造价 221 科技点
  // 造价分析：本项 221 科技点，同档（T4）均价 227 点，本项为均价的 0.97×；研究耗时 1326 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2996 科技点，占本系链总造价 6824 点的 44%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1768 铁当量，约等于 147.3 座采矿机 L1 的造价。
  // 效果分解：贸易船到访间隔 ×0.8（目标 trade.shipInterval，mul运算）。
  // 效果分解：贸易收入 ×1.1（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 贸易船到访间隔 ×0.8、贸易收入 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 28/40 项，前置 「星际拍卖行」、旧科技「氦3聚变」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「贸易枢纽」、「自由贸易区」，造价分别为 185、197 点；本项 221 点，排第 4/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（tradeShipMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_trade_28": {
    id: "v32_trade_28",
    name: "量子结算",
    icon: "💠",
    branch: "trade",
    branchName: "贸易",
    tier: 4,
    cost: 221,
    researchTimeSec: 1326,
    needs: ["v32_trade_27", "t-orb-12"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_27", note: "需先研究「星际拍卖行」。" },
      { type: "tech", ref: "t-orb-12", note: "需先研究旧科技「氦3聚变」。" },
    ],
    desc: "量子纠缠结算实时到账，贸易船到访间隔缩短。",
    fx: {
      "tradeShipMul": 0.8,
      "tradeMul": 1.1,
    },
    modifiers: [
      {
        key: "tradeShipMul",
        target: "trade.shipInterval",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "贸易船到访间隔 ×0.8",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "贸易收入 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_29"],
    comboWith: [
      { tech: "v32_trade_29", note: "与「贸易舰队护航」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易船到访间隔 ×0.8。",
      "贸易收入 ×1.1。",
    ],
    researchCost: {
      tech: 221,
      credits: 1105,
      timeSec: 1326,
      note: "研究耗时 1326 秒，另耗星币 1105。",
    },
    levels: [
      { level: 1, cost: 221, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 442, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 884, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_29 贸易舰队护航 [贸易·T4] 造价 233 科技点
  // 造价分析：本项 233 科技点，同档（T4）均价 227 点，本项为均价的 1.03×；研究耗时 1398 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 3229 科技点，占本系链总造价 6824 点的 47%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1864 铁当量，约等于 155.3 座采矿机 L1 的造价。
  // 效果分解：贸易船到访间隔 ×0.85（目标 trade.shipInterval，mul运算）。
  // 效果分解：海盗袭击概率 ×0.8（目标 risk.pirateChance，mul运算）。
  // 效果分解：两项效果合计 贸易船到访间隔 ×0.85、海盗袭击概率 ×0.8；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 29/40 项，前置 「量子结算」、旧科技「氦3精炼」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「贸易枢纽」、「自由贸易区」，造价分别为 185、197 点；本项 233 点，排第 5/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（tradeShipMul）、乘法叠加（pirateMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗劫掠」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_trade_29": {
    id: "v32_trade_29",
    name: "贸易舰队护航",
    icon: "🚢",
    branch: "trade",
    branchName: "贸易",
    tier: 4,
    cost: 233,
    researchTimeSec: 1398,
    needs: ["v32_trade_28", "t-prod-13"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_28", note: "需先研究「量子结算」。" },
      { type: "tech", ref: "t-prod-13", note: "需先研究旧科技「氦3精炼」。" },
    ],
    desc: "舰队定期护航，贸易船到访间隔与海盗风险双降。",
    fx: {
      "tradeShipMul": 0.85,
      "pirateMul": 0.8,
    },
    modifiers: [
      {
        key: "tradeShipMul",
        target: "trade.shipInterval",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "贸易船到访间隔 ×0.85",
      },
      {
        key: "pirateMul",
        target: "risk.pirateChance",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "海盗袭击概率 ×0.8",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-pirate"],
    mitigatesDetail: [
      { disaster: "d32-pirate", note: "缓解「海盗劫掠」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_30"],
    comboWith: [
      { tech: "v32_trade_30", note: "与「跨星系商路」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易船到访间隔 ×0.85。",
      "海盗袭击概率 ×0.8。",
    ],
    researchCost: {
      tech: 233,
      credits: 1165,
      timeSec: 1398,
      note: "研究耗时 1398 秒，另耗星币 1165。",
    },
    levels: [
      { level: 1, cost: 233, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 466, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 932, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_30 跨星系商路 [贸易·T4] 造价 245 科技点
  // 造价分析：本项 245 科技点，同档（T4）均价 227 点，本项为均价的 1.08×；研究耗时 1470 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 3474 科技点，占本系链总造价 6824 点的 51%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1960 铁当量，约等于 163.3 座采矿机 L1 的造价。
  // 效果分解：贸易航线 +3 条（目标 trade.routes，add运算）。
  // 效果分解：贸易船载货量 ×1.25（目标 trade.cargo，mul运算）。
  // 效果分解：两项效果合计 贸易航线 +3 条、贸易船载货量 ×1.25；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 30/40 项，前置 「贸易舰队护航」、旧科技「火星之子」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「贸易枢纽」、「自由贸易区」，造价分别为 185、197 点；本项 245 点，排第 6/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：加法叠加（tradeRouteAdd）、乘法叠加（tradeShipCargoMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗劫掠」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_trade_30": {
    id: "v32_trade_30",
    name: "跨星系商路",
    icon: "🌌",
    branch: "trade",
    branchName: "贸易",
    tier: 4,
    cost: 245,
    researchTimeSec: 1470,
    needs: ["v32_trade_29", "t-surv-10"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_29", note: "需先研究「贸易舰队护航」。" },
      { type: "tech", ref: "t-surv-10", note: "需先研究旧科技「火星之子」。" },
    ],
    desc: "比邻星商路打通，新增贸易航线三条。",
    fx: {
      "tradeRouteAdd": 3,
      "tradeShipCargoMul": 1.25,
    },
    modifiers: [
      {
        key: "tradeRouteAdd",
        target: "trade.routes",
        op: "add",
        value: 3,
        unit: "条",
        note: "贸易航线 +3 条",
      },
      {
        key: "tradeShipCargoMul",
        target: "trade.cargo",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "贸易船载货量 ×1.25",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-pirate"],
    mitigatesDetail: [
      { disaster: "d32-pirate", note: "缓解「海盗劫掠」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_31"],
    comboWith: [
      { tech: "v32_trade_31", note: "与「殖民地货币」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易航线 +3 条。",
      "贸易船载货量 ×1.25。",
    ],
    researchCost: {
      tech: 245,
      credits: 1225,
      timeSec: 1470,
      note: "研究耗时 1470 秒，另耗星币 1225。",
    },
    levels: [
      { level: 1, cost: 245, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 490, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 980, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_31 殖民地货币 [贸易·T4] 造价 257 科技点
  // 造价分析：本项 257 科技点，同档（T4）均价 227 点，本项为均价的 1.13×；研究耗时 1542 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 3731 科技点，占本系链总造价 6824 点的 55%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2056 铁当量，约等于 171.3 座采矿机 L1 的造价。
  // 效果分解：税收效率 ×1.25（目标 econ.taxRate，mul运算）。
  // 效果分解：殖民地稳定度 +4 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 税收效率 ×1.25、殖民地稳定度 +4 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 31/40 项，前置 「跨星系商路」、旧科技「奇点」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「贸易枢纽」、「自由贸易区」，造价分别为 185、197 点；本项 257 点，排第 7/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（taxMul）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_trade_31": {
    id: "v32_trade_31",
    name: "殖民地货币",
    icon: "💵",
    branch: "trade",
    branchName: "贸易",
    tier: 4,
    cost: 257,
    researchTimeSec: 1542,
    needs: ["v32_trade_30", "t-prod-10"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_30", note: "需先研究「跨星系商路」。" },
      { type: "tech", ref: "t-prod-10", note: "需先研究旧科技「奇点」。" },
    ],
    desc: "火星币成为结算货币，税收效率大幅提升。",
    fx: {
      "taxMul": 1.25,
      "stabilityAdd": 4,
    },
    modifiers: [
      {
        key: "taxMul",
        target: "econ.taxRate",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "税收效率 ×1.25",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 4,
        unit: "点",
        note: "殖民地稳定度 +4 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_32"],
    comboWith: [
      { tech: "v32_trade_32", note: "与「贸易仲裁庭」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "税收效率 ×1.25。",
      "殖民地稳定度 +4 点。",
    ],
    researchCost: {
      tech: 257,
      credits: 1285,
      timeSec: 1542,
      note: "研究耗时 1542 秒，另耗星币 1285。",
    },
    levels: [
      { level: 1, cost: 257, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 514, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1028, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_32 贸易仲裁庭 [贸易·T4] 造价 269 科技点
  // 造价分析：本项 269 科技点，同档（T4）均价 227 点，本项为均价的 1.19×；研究耗时 1614 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4000 科技点，占本系链总造价 6824 点的 59%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2152 铁当量，约等于 179.3 座采矿机 L1 的造价。
  // 效果分解：外交关系增速 ×1.25（目标 diplomacy.relation，mul运算）。
  // 效果分解：腐败发生率 ×0.85（目标 risk.corruption，mul运算）。
  // 效果分解：两项效果合计 外交关系增速 ×1.25、腐败发生率 ×0.85；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 32/40 项，前置 「殖民地货币」、旧科技「火星公民」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「贸易枢纽」、「自由贸易区」，造价分别为 185、197 点；本项 269 点，排第 8/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（diplomacyMul）、乘法叠加（corruptionMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_trade_32": {
    id: "v32_trade_32",
    name: "贸易仲裁庭",
    icon: "🏛️",
    branch: "trade",
    branchName: "贸易",
    tier: 4,
    cost: 269,
    researchTimeSec: 1614,
    needs: ["v32_trade_31", "t-surv-15"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_31", note: "需先研究「殖民地货币」。" },
      { type: "tech", ref: "t-surv-15", note: "需先研究旧科技「火星公民」。" },
    ],
    desc: "星际贸易仲裁庭设立，外交关系增速提升。",
    fx: {
      "diplomacyMul": 1.25,
      "corruptionMul": 0.85,
    },
    modifiers: [
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "外交关系增速 ×1.25",
      },
      {
        key: "corruptionMul",
        target: "risk.corruption",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "腐败发生率 ×0.85",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_33"],
    comboWith: [
      { tech: "v32_trade_33", note: "与「自由港」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.25。",
      "腐败发生率 ×0.85。",
    ],
    researchCost: {
      tech: 269,
      credits: 1345,
      timeSec: 1614,
      note: "研究耗时 1614 秒，另耗星币 1345。",
    },
    levels: [
      { level: 1, cost: 269, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 538, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1076, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_33 自由港 [贸易·T5] 造价 290 科技点
  // 造价分析：本项 290 科技点，同档（T5）均价 353 点，本项为均价的 0.82×；研究耗时 1740 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4290 科技点，占本系链总造价 6824 点的 63%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2320 铁当量，约等于 193.3 座采矿机 L1 的造价。
  // 效果分解：解锁自由港（目标 unlock.freeport，flag运算）。
  // 效果分解：贸易收入 ×1.25（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 解锁自由港、贸易收入 ×1.25；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 33/40 项，前置 「贸易仲裁庭」、旧科技「新纪元」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「星际托拉斯」、「戴森贸易环」，造价分别为 308、326 点；本项 290 点，排第 1/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：开关解锁（unlockFreeport）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「自由港」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_trade_33": {
    id: "v32_trade_33",
    name: "自由港",
    icon: "🗽",
    branch: "trade",
    branchName: "贸易",
    tier: 5,
    cost: 290,
    researchTimeSec: 1740,
    needs: ["v32_trade_32", "t-orb-15"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_32", note: "需先研究「贸易仲裁庭」。" },
      { type: "tech", ref: "t-orb-15", note: "需先研究旧科技「新纪元」。" },
    ],
    desc: "自由港免税通商，贸易收入与旅游收入双双提升。",
    fx: {
      "unlockFreeport": 1,
      "tradeMul": 1.25,
    },
    modifiers: [
      {
        key: "unlockFreeport",
        target: "unlock.freeport",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁自由港",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "贸易收入 ×1.25",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-freeport"],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_34"],
    comboWith: [
      { tech: "v32_trade_34", note: "与「星际托拉斯」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁自由港。",
      "贸易收入 ×1.25。",
    ],
    researchCost: {
      tech: 290,
      credits: 1450,
      timeSec: 1740,
      note: "研究耗时 1740 秒，另耗星币 1450。",
    },
    levels: [
      { level: 1, cost: 290, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 580, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1160, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_34 星际托拉斯 [贸易·T5] 造价 308 科技点
  // 造价分析：本项 308 科技点，同档（T5）均价 353 点，本项为均价的 0.87×；研究耗时 1848 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4598 科技点，占本系链总造价 6824 点的 67%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2464 铁当量，约等于 205.3 座采矿机 L1 的造价。
  // 效果分解：贸易收入 ×1.3（目标 econ.tradeIncome，mul运算）。
  // 效果分解：贸易成交价 ×1.15（目标 trade.price，mul运算）。
  // 效果分解：两项效果合计 贸易收入 ×1.3、贸易成交价 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 34/40 项，前置 「自由港」、旧科技「戴森雏形」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「自由港」、「戴森贸易环」，造价分别为 290、326 点；本项 308 点，排第 2/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（tradeMul）、乘法叠加（tradePriceMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_trade_34": {
    id: "v32_trade_34",
    name: "星际托拉斯",
    icon: "🏢",
    branch: "trade",
    branchName: "贸易",
    tier: 5,
    cost: 308,
    researchTimeSec: 1848,
    needs: ["v32_trade_33", "t-build-15"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_33", note: "需先研究「自由港」。" },
      { type: "tech", ref: "t-build-15", note: "需先研究旧科技「戴森雏形」。" },
    ],
    desc: "托拉斯整合全殖民地贸易，贸易收入大幅提升。",
    fx: {
      "tradeMul": 1.3,
      "tradePriceMul": 1.15,
    },
    modifiers: [
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "贸易收入 ×1.3",
      },
      {
        key: "tradePriceMul",
        target: "trade.price",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "贸易成交价 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_35"],
    comboWith: [
      { tech: "v32_trade_35", note: "与「戴森贸易环」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.3。",
      "贸易成交价 ×1.15。",
    ],
    researchCost: {
      tech: 308,
      credits: 1540,
      timeSec: 1848,
      note: "研究耗时 1848 秒，另耗星币 1540。",
    },
    levels: [
      { level: 1, cost: 308, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 616, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1232, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_35 戴森贸易环 [贸易·T5] 造价 326 科技点
  // 造价分析：本项 326 科技点，同档（T5）均价 353 点，本项为均价的 0.92×；研究耗时 1956 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4924 科技点，占本系链总造价 6824 点的 72%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2608 铁当量，约等于 217.3 座采矿机 L1 的造价。
  // 效果分解：贸易收入 ×1.2（目标 econ.tradeIncome，mul运算）。
  // 效果分解：轨道电力 +50（目标 power.orbital，add运算）。
  // 效果分解：两项效果合计 贸易收入 ×1.2、轨道电力 +50；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 35/40 项，前置 「星际托拉斯」、旧科技「基层民主」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「自由港」、「星际托拉斯」，造价分别为 290、308 点；本项 326 点，排第 3/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（tradeMul）、加法叠加（orbitalPowerAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_trade_35": {
    id: "v32_trade_35",
    name: "戴森贸易环",
    icon: "☀️",
    branch: "trade",
    branchName: "贸易",
    tier: 5,
    cost: 326,
    researchTimeSec: 1956,
    needs: ["v32_trade_34", "t30-pol-01"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_34", note: "需先研究「星际托拉斯」。" },
      { type: "tech", ref: "t30-pol-01", note: "需先研究旧科技「基层民主」。" },
    ],
    desc: "轨道太阳能环供电，贸易枢纽能耗成本归零。",
    fx: {
      "tradeMul": 1.2,
      "orbitalPowerAdd": 50,
    },
    modifiers: [
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "贸易收入 ×1.2",
      },
      {
        key: "orbitalPowerAdd",
        target: "power.orbital",
        op: "add",
        value: 50,
        unit: "电",
        note: "轨道电力 +50",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_36"],
    comboWith: [
      { tech: "v32_trade_36", note: "与「银河交易所」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.2。",
      "轨道电力 +50。",
    ],
    researchCost: {
      tech: 326,
      credits: 1630,
      timeSec: 1956,
      note: "研究耗时 1956 秒，另耗星币 1630。",
    },
    levels: [
      { level: 1, cost: 326, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 652, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1304, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_36 银河交易所 [贸易·T5] 造价 344 科技点
  // 造价分析：本项 344 科技点，同档（T5）均价 353 点，本项为均价的 0.97×；研究耗时 2064 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 5268 科技点，占本系链总造价 6824 点的 77%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2752 铁当量，约等于 229.3 座采矿机 L1 的造价。
  // 效果分解：贸易成交价 ×1.4（目标 trade.price，mul运算）。
  // 效果分解：贸易收入 ×1.15（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 贸易成交价 ×1.4、贸易收入 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 36/40 项，前置 「戴森贸易环」、旧科技「生态穹顶」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「自由港」、「星际托拉斯」，造价分别为 290、308 点；本项 344 点，排第 4/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（tradePriceMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_trade_36": {
    id: "v32_trade_36",
    name: "银河交易所",
    icon: "🌠",
    branch: "trade",
    branchName: "贸易",
    tier: 5,
    cost: 344,
    researchTimeSec: 2064,
    needs: ["v32_trade_35", "t30-eco-01"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_35", note: "需先研究「戴森贸易环」。" },
      { type: "tech", ref: "t30-eco-01", note: "需先研究旧科技「生态穹顶」。" },
    ],
    desc: "银河交易所挂牌，贸易成交价达到历史峰值。",
    fx: {
      "tradePriceMul": 1.4,
      "tradeMul": 1.15,
    },
    modifiers: [
      {
        key: "tradePriceMul",
        target: "trade.price",
        op: "mul",
        value: 1.4,
        unit: "倍",
        note: "贸易成交价 ×1.4",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "贸易收入 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_37"],
    comboWith: [
      { tech: "v32_trade_37", note: "与「贸易霸权」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易成交价 ×1.4。",
      "贸易收入 ×1.15。",
    ],
    researchCost: {
      tech: 344,
      credits: 1720,
      timeSec: 2064,
      note: "研究耗时 2064 秒，另耗星币 1720。",
    },
    levels: [
      { level: 1, cost: 344, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 688, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1376, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_37 贸易霸权 [贸易·T5] 造价 362 科技点
  // 造价分析：本项 362 科技点，同档（T5）均价 353 点，本项为均价的 1.03×；研究耗时 2172 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 5630 科技点，占本系链总造价 6824 点的 83%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2896 铁当量，约等于 241.3 座采矿机 L1 的造价。
  // 效果分解：贸易收入 ×1.25（目标 econ.tradeIncome，mul运算）。
  // 效果分解：胜利进度 +1 点（目标 victory.progress，add运算）。
  // 效果分解：两项效果合计 贸易收入 ×1.25、胜利进度 +1 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 37/40 项，前置 「银河交易所」、旧科技「民兵训练」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「自由港」、「星际托拉斯」，造价分别为 290、308 点；本项 362 点，排第 5/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（tradeMul）、加法叠加（victoryProgressAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_trade_37": {
    id: "v32_trade_37",
    name: "贸易霸权",
    icon: "👑",
    branch: "trade",
    branchName: "贸易",
    tier: 5,
    cost: 362,
    researchTimeSec: 2172,
    needs: ["v32_trade_36", "t30-mil-01"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_36", note: "需先研究「银河交易所」。" },
      { type: "tech", ref: "t30-mil-01", note: "需先研究旧科技「民兵训练」。" },
    ],
    desc: "殖民地主导火星贸易定价权，胜利进度推进。",
    fx: {
      "tradeMul": 1.25,
      "victoryProgressAdd": 1,
    },
    modifiers: [
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "贸易收入 ×1.25",
      },
      {
        key: "victoryProgressAdd",
        target: "victory.progress",
        op: "add",
        value: 1,
        unit: "点",
        note: "胜利进度 +1 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_38"],
    comboWith: [
      { tech: "v32_trade_38", note: "与「零时差物流」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.25。",
      "胜利进度 +1 点。",
    ],
    researchCost: {
      tech: 362,
      credits: 1810,
      timeSec: 2172,
      note: "研究耗时 2172 秒，另耗星币 1810。",
    },
    levels: [
      { level: 1, cost: 362, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 724, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1448, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_38 零时差物流 [贸易·T5] 造价 380 科技点
  // 造价分析：本项 380 科技点，同档（T5）均价 353 点，本项为均价的 1.08×；研究耗时 2280 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 6010 科技点，占本系链总造价 6824 点的 88%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 3040 铁当量，约等于 253.3 座采矿机 L1 的造价。
  // 效果分解：贸易船到访间隔 ×0.7（目标 trade.shipInterval，mul运算）。
  // 效果分解：贸易船载货量 ×1.5（目标 trade.cargo，mul运算）。
  // 效果分解：两项效果合计 贸易船到访间隔 ×0.7、贸易船载货量 ×1.5；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 38/40 项，前置 「贸易霸权」、旧科技「深空探测」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「自由港」、「星际托拉斯」，造价分别为 290、308 点；本项 380 点，排第 6/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（tradeShipMul）、乘法叠加（tradeShipCargoMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗劫掠」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_trade_38": {
    id: "v32_trade_38",
    name: "零时差物流",
    icon: "⏱️",
    branch: "trade",
    branchName: "贸易",
    tier: 5,
    cost: 380,
    researchTimeSec: 2280,
    needs: ["v32_trade_37", "t30-ds-01"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_37", note: "需先研究「贸易霸权」。" },
      { type: "tech", ref: "t30-ds-01", note: "需先研究旧科技「深空探测」。" },
    ],
    desc: "虫洞快递当日达，贸易船到访间隔大幅缩短。",
    fx: {
      "tradeShipMul": 0.7,
      "tradeShipCargoMul": 1.5,
    },
    modifiers: [
      {
        key: "tradeShipMul",
        target: "trade.shipInterval",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "贸易船到访间隔 ×0.7",
      },
      {
        key: "tradeShipCargoMul",
        target: "trade.cargo",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "贸易船载货量 ×1.5",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-pirate"],
    mitigatesDetail: [
      { disaster: "d32-pirate", note: "缓解「海盗劫掠」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_39"],
    comboWith: [
      { tech: "v32_trade_39", note: "与「全民股东」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易船到访间隔 ×0.7。",
      "贸易船载货量 ×1.5。",
    ],
    researchCost: {
      tech: 380,
      credits: 1900,
      timeSec: 2280,
      note: "研究耗时 2280 秒，另耗星币 1900。",
    },
    levels: [
      { level: 1, cost: 380, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 760, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1520, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_39 全民股东 [贸易·T5] 造价 398 科技点
  // 造价分析：本项 398 科技点，同档（T5）均价 353 点，本项为均价的 1.13×；研究耗时 2388 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 6408 科技点，占本系链总造价 6824 点的 94%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 3184 铁当量，约等于 265.3 座采矿机 L1 的造价。
  // 效果分解：居民幸福度 +6 点（目标 pop.happiness，add运算）。
  // 效果分解：殖民地稳定度 +5 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 居民幸福度 +6 点、殖民地稳定度 +5 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 39/40 项，前置 「零时差物流」、旧科技「廉政审计」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「自由港」、「星际托拉斯」，造价分别为 290、308 点；本项 398 点，排第 7/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：加法叠加（happinessAdd）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「罢工潮」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_trade_39": {
    id: "v32_trade_39",
    name: "全民股东",
    icon: "📊",
    branch: "trade",
    branchName: "贸易",
    tier: 5,
    cost: 398,
    researchTimeSec: 2388,
    needs: ["v32_trade_38", "t31-pol-01"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_38", note: "需先研究「零时差物流」。" },
      { type: "tech", ref: "t31-pol-01", note: "需先研究旧科技「廉政审计」。" },
    ],
    desc: "全民持股贸易公司，居民幸福度与稳定度提升。",
    fx: {
      "happinessAdd": 6,
      "stabilityAdd": 5,
    },
    modifiers: [
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 6,
        unit: "点",
        note: "居民幸福度 +6 点",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 5,
        unit: "点",
        note: "殖民地稳定度 +5 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-strike"],
    mitigatesDetail: [
      { disaster: "d32-strike", note: "缓解「罢工潮」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_40"],
    comboWith: [
      { tech: "v32_trade_40", note: "与「星港商都」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +6 点。",
      "殖民地稳定度 +5 点。",
    ],
    researchCost: {
      tech: 398,
      credits: 1990,
      timeSec: 2388,
      note: "研究耗时 2388 秒，另耗星币 1990。",
    },
    levels: [
      { level: 1, cost: 398, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 796, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1592, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_trade_40 星港商都 [贸易·T5] 造价 416 科技点
  // 造价分析：本项 416 科技点，同档（T5）均价 353 点，本项为均价的 1.18×；研究耗时 2496 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 6824 科技点，占本系链总造价 6824 点的 100%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 3328 铁当量，约等于 277.3 座采矿机 L1 的造价。
  // 效果分解：贸易收入 ×1.35（目标 econ.tradeIncome，mul运算）。
  // 效果分解：税收效率 ×1.2（目标 econ.taxRate，mul运算）。
  // 效果分解：两项效果合计 贸易收入 ×1.35、税收效率 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 40/40 项，前置 「全民股东」、旧科技「深空雷达」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「自由港」、「星际托拉斯」，造价分别为 290、308 点；本项 416 点，排第 8/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（tradeMul）、乘法叠加（taxMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「星际集市」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_trade_40": {
    id: "v32_trade_40",
    name: "星港商都",
    icon: "🌆",
    branch: "trade",
    branchName: "贸易",
    tier: 5,
    cost: 416,
    researchTimeSec: 2496,
    needs: ["v32_trade_39", "t31-dsp-01"],
    needsDetail: [
      { type: "tech", ref: "v32_trade_39", note: "需先研究「全民股东」。" },
      { type: "tech", ref: "t31-dsp-01", note: "需先研究旧科技「深空雷达」。" },
    ],
    desc: "星港成为太阳系商都，贸易收入与税收效率登顶。",
    fx: {
      "tradeMul": 1.35,
      "taxMul": 1.2,
    },
    modifiers: [
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.35,
        unit: "倍",
        note: "贸易收入 ×1.35",
      },
      {
        key: "taxMul",
        target: "econ.taxRate",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "税收效率 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_trade_39"],
    comboWith: [
      { tech: "v32_trade_39", note: "与「全民股东」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.35。",
      "税收效率 ×1.2。",
    ],
    researchCost: {
      tech: 416,
      credits: 2080,
      timeSec: 2496,
      note: "研究耗时 2496 秒，另耗星币 2080。",
    },
    levels: [
      { level: 1, cost: 416, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 832, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1664, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // ---------- 文化系（40 项） ----------
  // v32_cult_01 街头艺人 [文化·T1] 造价 30 科技点
  // 造价分析：本项 30 科技点，同档（T1）均价 44 点，本项为均价的 0.68×；研究耗时 180 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 30 科技点，占本系链总造价 6824 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 240 铁当量，约等于 20.0 座采矿机 L1 的造价。
  // 效果分解：居民幸福度 +3 点（目标 pop.happiness，add运算）。
  // 效果分解：文化产出 ×1.1（目标 culture.output，mul运算）。
  // 效果分解：两项效果合计 居民幸福度 +3 点、文化产出 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 1/40 项，无前置，任意时间可研究；是本系链的起点。
  // 横向对比：同档同系另有 「社区影院」、「大剧院」，造价分别为 34、38 点；本项 30 点，排第 1/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（happinessAdd）、乘法叠加（cultureMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_cult_01": {
    id: "v32_cult_01",
    name: "街头艺人",
    icon: "🎨",
    branch: "culture",
    branchName: "文化",
    tier: 1,
    cost: 30,
    researchTimeSec: 180,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "街头艺人点缀广场，居民幸福度提升。",
    fx: {
      "happinessAdd": 3,
      "cultureMul": 1.1,
    },
    modifiers: [
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 3,
        unit: "点",
        note: "居民幸福度 +3 点",
      },
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "文化产出 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_02"],
    comboWith: [
      { tech: "v32_cult_02", note: "与「社区影院」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +3 点。",
      "文化产出 ×1.1。",
    ],
    researchCost: {
      tech: 30,
      credits: 150,
      timeSec: 180,
      note: "研究耗时 180 秒，另耗星币 150。",
    },
    levels: [
      { level: 1, cost: 30, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 60, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 120, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_02 社区影院 [文化·T1] 造价 34 科技点
  // 造价分析：本项 34 科技点，同档（T1）均价 44 点，本项为均价的 0.77×；研究耗时 204 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 64 科技点，占本系链总造价 6824 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 272 铁当量，约等于 22.7 座采矿机 L1 的造价。
  // 效果分解：居民幸福度 +4 点（目标 pop.happiness，add运算）。
  // 效果分解：人口增长速度 ×1.05（目标 pop.growth，mul运算）。
  // 效果分解：两项效果合计 居民幸福度 +4 点、人口增长速度 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 2/40 项，前置 「街头艺人」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「街头艺人」、「大剧院」，造价分别为 30、38 点；本项 34 点，排第 2/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（happinessAdd）、乘法叠加（popGrowthMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_cult_02": {
    id: "v32_cult_02",
    name: "社区影院",
    icon: "🎬",
    branch: "culture",
    branchName: "文化",
    tier: 1,
    cost: 34,
    researchTimeSec: 204,
    needs: ["v32_cult_01"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_01", note: "需先研究「街头艺人」。" },
    ],
    desc: "社区影院每晚放映，居民幸福度提升。",
    fx: {
      "happinessAdd": 4,
      "popGrowthMul": 1.05,
    },
    modifiers: [
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 4,
        unit: "点",
        note: "居民幸福度 +4 点",
      },
      {
        key: "popGrowthMul",
        target: "pop.growth",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "人口增长速度 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_03"],
    comboWith: [
      { tech: "v32_cult_03", note: "与「大剧院」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +4 点。",
      "人口增长速度 ×1.05。",
    ],
    researchCost: {
      tech: 34,
      credits: 170,
      timeSec: 204,
      note: "研究耗时 204 秒，另耗星币 170。",
    },
    levels: [
      { level: 1, cost: 34, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 68, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 136, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_03 大剧院 [文化·T1] 造价 38 科技点
  // 造价分析：本项 38 科技点，同档（T1）均价 44 点，本项为均价的 0.86×；研究耗时 228 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 102 科技点，占本系链总造价 6824 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 304 铁当量，约等于 25.3 座采矿机 L1 的造价。
  // 效果分解：解锁大剧院（目标 unlock.theater，flag运算）。
  // 效果分解：文化产出 ×1.2（目标 culture.output，mul运算）。
  // 效果分解：两项效果合计 解锁大剧院、文化产出 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 3/40 项，前置 「社区影院」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「街头艺人」、「社区影院」，造价分别为 30、34 点；本项 38 点，排第 3/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：开关解锁（unlockTheater）、乘法叠加（cultureMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「大剧院」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_cult_03": {
    id: "v32_cult_03",
    name: "大剧院",
    icon: "🎭",
    branch: "culture",
    branchName: "文化",
    tier: 1,
    cost: 38,
    researchTimeSec: 228,
    needs: ["v32_cult_02"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_02", note: "需先研究「社区影院」。" },
    ],
    desc: "大剧院落成首演，全城文化产出提升。",
    fx: {
      "unlockTheater": 1,
      "cultureMul": 1.2,
    },
    modifiers: [
      {
        key: "unlockTheater",
        target: "unlock.theater",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁大剧院",
      },
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "文化产出 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-theater"],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_04"],
    comboWith: [
      { tech: "v32_cult_04", note: "与「街头节庆」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁大剧院。",
      "文化产出 ×1.2。",
    ],
    researchCost: {
      tech: 38,
      credits: 190,
      timeSec: 228,
      note: "研究耗时 228 秒，另耗星币 190。",
    },
    levels: [
      { level: 1, cost: 38, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 76, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 152, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_04 街头节庆 [文化·T1] 造价 42 科技点
  // 造价分析：本项 42 科技点，同档（T1）均价 44 点，本项为均价的 0.95×；研究耗时 252 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 144 科技点，占本系链总造价 6824 点的 2%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 336 铁当量，约等于 28.0 座采矿机 L1 的造价。
  // 效果分解：居民幸福度 +4 点（目标 pop.happiness，add运算）。
  // 效果分解：殖民地稳定度 +2 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 居民幸福度 +4 点、殖民地稳定度 +2 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 4/40 项，前置 「大剧院」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「街头艺人」、「社区影院」，造价分别为 30、34 点；本项 42 点，排第 4/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（happinessAdd）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「罢工潮」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_cult_04": {
    id: "v32_cult_04",
    name: "街头节庆",
    icon: "🎉",
    branch: "culture",
    branchName: "文化",
    tier: 1,
    cost: 42,
    researchTimeSec: 252,
    needs: ["v32_cult_03"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_03", note: "需先研究「大剧院」。" },
    ],
    desc: "丰收节庆固定举办，居民幸福度与稳定度提升。",
    fx: {
      "happinessAdd": 4,
      "stabilityAdd": 2,
    },
    modifiers: [
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 4,
        unit: "点",
        note: "居民幸福度 +4 点",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 2,
        unit: "点",
        note: "殖民地稳定度 +2 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-strike"],
    mitigatesDetail: [
      { disaster: "d32-strike", note: "缓解「罢工潮」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_05"],
    comboWith: [
      { tech: "v32_cult_05", note: "与「殖民地电台」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +4 点。",
      "殖民地稳定度 +2 点。",
    ],
    researchCost: {
      tech: 42,
      credits: 210,
      timeSec: 252,
      note: "研究耗时 252 秒，另耗星币 210。",
    },
    levels: [
      { level: 1, cost: 42, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 84, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 168, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_05 殖民地电台 [文化·T1] 造价 46 科技点
  // 造价分析：本项 46 科技点，同档（T1）均价 44 点，本项为均价的 1.05×；研究耗时 276 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 190 科技点，占本系链总造价 6824 点的 3%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 368 铁当量，约等于 30.7 座采矿机 L1 的造价。
  // 效果分解：文化产出 ×1.15（目标 culture.output，mul运算）。
  // 效果分解：外交关系增速 ×1.05（目标 diplomacy.relation，mul运算）。
  // 效果分解：两项效果合计 文化产出 ×1.15、外交关系增速 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 5/40 项，前置 「街头节庆」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「街头艺人」、「社区影院」，造价分别为 30、34 点；本项 46 点，排第 5/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（cultureMul）、乘法叠加（diplomacyMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_cult_05": {
    id: "v32_cult_05",
    name: "殖民地电台",
    icon: "📻",
    branch: "culture",
    branchName: "文化",
    tier: 1,
    cost: 46,
    researchTimeSec: 276,
    needs: ["v32_cult_04"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_04", note: "需先研究「街头节庆」。" },
    ],
    desc: "殖民地电台开播，文化产出小幅提升。",
    fx: {
      "cultureMul": 1.15,
      "diplomacyMul": 1.05,
    },
    modifiers: [
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "文化产出 ×1.15",
      },
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "外交关系增速 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_06"],
    comboWith: [
      { tech: "v32_cult_06", note: "与「涂鸦艺术」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "文化产出 ×1.15。",
      "外交关系增速 ×1.05。",
    ],
    researchCost: {
      tech: 46,
      credits: 230,
      timeSec: 276,
      note: "研究耗时 276 秒，另耗星币 230。",
    },
    levels: [
      { level: 1, cost: 46, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 92, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 184, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_06 涂鸦艺术 [文化·T1] 造价 50 科技点
  // 造价分析：本项 50 科技点，同档（T1）均价 44 点，本项为均价的 1.14×；研究耗时 300 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 240 科技点，占本系链总造价 6824 点的 4%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 400 铁当量，约等于 33.3 座采矿机 L1 的造价。
  // 效果分解：艺术品产值 ×1.2（目标 culture.art，mul运算）。
  // 效果分解：居民幸福度 +2 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 艺术品产值 ×1.2、居民幸福度 +2 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 6/40 项，前置 「殖民地电台」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「街头艺人」、「社区影院」，造价分别为 30、34 点；本项 50 点，排第 6/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（artMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_cult_06": {
    id: "v32_cult_06",
    name: "涂鸦艺术",
    icon: "🖌️",
    branch: "culture",
    branchName: "文化",
    tier: 1,
    cost: 50,
    researchTimeSec: 300,
    needs: ["v32_cult_05"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_05", note: "需先研究「殖民地电台」。" },
    ],
    desc: "穹顶涂鸦墙开放，艺术品产值提升。",
    fx: {
      "artMul": 1.2,
      "happinessAdd": 2,
    },
    modifiers: [
      {
        key: "artMul",
        target: "culture.art",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "艺术品产值 ×1.2",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 2,
        unit: "点",
        note: "居民幸福度 +2 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_07"],
    comboWith: [
      { tech: "v32_cult_07", note: "与「读书会」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "艺术品产值 ×1.2。",
      "居民幸福度 +2 点。",
    ],
    researchCost: {
      tech: 50,
      credits: 250,
      timeSec: 300,
      note: "研究耗时 300 秒，另耗星币 250。",
    },
    levels: [
      { level: 1, cost: 50, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 100, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 200, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_07 读书会 [文化·T1] 造价 54 科技点
  // 造价分析：本项 54 科技点，同档（T1）均价 44 点，本项为均价的 1.23×；研究耗时 324 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 294 科技点，占本系链总造价 6824 点的 4%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 432 铁当量，约等于 36.0 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.08（目标 prod.research，mul运算）。
  // 效果分解：居民幸福度 +2 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 科研速度 ×1.08、居民幸福度 +2 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 7/40 项，前置 「涂鸦艺术」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「街头艺人」、「社区影院」，造价分别为 30、34 点；本项 54 点，排第 7/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（researchMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_cult_07": {
    id: "v32_cult_07",
    name: "读书会",
    icon: "📚",
    branch: "culture",
    branchName: "文化",
    tier: 1,
    cost: 54,
    researchTimeSec: 324,
    needs: ["v32_cult_06"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_06", note: "需先研究「涂鸦艺术」。" },
    ],
    desc: "读书会遍布各社区，科研速度小幅提升。",
    fx: {
      "researchMul": 1.08,
      "happinessAdd": 2,
    },
    modifiers: [
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "科研速度 ×1.08",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 2,
        unit: "点",
        note: "居民幸福度 +2 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_08"],
    comboWith: [
      { tech: "v32_cult_08", note: "与「民间传说」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.08。",
      "居民幸福度 +2 点。",
    ],
    researchCost: {
      tech: 54,
      credits: 270,
      timeSec: 324,
      note: "研究耗时 324 秒，另耗星币 270。",
    },
    levels: [
      { level: 1, cost: 54, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 108, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 216, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_08 民间传说 [文化·T1] 造价 58 科技点
  // 造价分析：本项 58 科技点，同档（T1）均价 44 点，本项为均价的 1.32×；研究耗时 348 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 352 科技点，占本系链总造价 6824 点的 5%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 464 铁当量，约等于 38.7 座采矿机 L1 的造价。
  // 效果分解：殖民地稳定度 +3 点（目标 city.stability，add运算）。
  // 效果分解：文化产出 ×1.1（目标 culture.output，mul运算）。
  // 效果分解：两项效果合计 殖民地稳定度 +3 点、文化产出 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 8/40 项，前置 「读书会」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「街头艺人」、「社区影院」，造价分别为 30、34 点；本项 58 点，排第 8/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（stabilityAdd）、乘法叠加（cultureMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_cult_08": {
    id: "v32_cult_08",
    name: "民间传说",
    icon: "📖",
    branch: "culture",
    branchName: "文化",
    tier: 1,
    cost: 58,
    researchTimeSec: 348,
    needs: ["v32_cult_07"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_07", note: "需先研究「读书会」。" },
    ],
    desc: "火星开拓传说口口相传，居民认同感提升。",
    fx: {
      "stabilityAdd": 3,
      "cultureMul": 1.1,
    },
    modifiers: [
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 3,
        unit: "点",
        note: "殖民地稳定度 +3 点",
      },
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "文化产出 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_09"],
    comboWith: [
      { tech: "v32_cult_09", note: "与「全息影院」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "殖民地稳定度 +3 点。",
      "文化产出 ×1.1。",
    ],
    researchCost: {
      tech: 58,
      credits: 290,
      timeSec: 348,
      note: "研究耗时 348 秒，另耗星币 290。",
    },
    levels: [
      { level: 1, cost: 58, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 116, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 232, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_09 全息影院 [文化·T2] 造价 65 科技点
  // 造价分析：本项 65 科技点，同档（T2）均价 86 点，本项为均价的 0.76×；研究耗时 390 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 417 科技点，占本系链总造价 6824 点的 6%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 520 铁当量，约等于 43.3 座采矿机 L1 的造价。
  // 效果分解：文化产出 ×1.2（目标 culture.output，mul运算）。
  // 效果分解：居民幸福度 +3 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 文化产出 ×1.2、居民幸福度 +3 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 9/40 项，前置 「民间传说」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「艺术学院」、「火星博物馆」，造价分别为 71、77 点；本项 65 点，排第 1/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（cultureMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_cult_09": {
    id: "v32_cult_09",
    name: "全息影院",
    icon: "🍿",
    branch: "culture",
    branchName: "文化",
    tier: 2,
    cost: 65,
    researchTimeSec: 390,
    needs: ["v32_cult_08"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_08", note: "需先研究「民间传说」。" },
    ],
    desc: "全息影院上映地球大片，文化产出提升。",
    fx: {
      "cultureMul": 1.2,
      "happinessAdd": 3,
    },
    modifiers: [
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "文化产出 ×1.2",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 3,
        unit: "点",
        note: "居民幸福度 +3 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_10"],
    comboWith: [
      { tech: "v32_cult_10", note: "与「艺术学院」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "文化产出 ×1.2。",
      "居民幸福度 +3 点。",
    ],
    researchCost: {
      tech: 65,
      credits: 325,
      timeSec: 390,
      note: "研究耗时 390 秒，另耗星币 325。",
    },
    levels: [
      { level: 1, cost: 65, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 130, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 260, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_10 艺术学院 [文化·T2] 造价 71 科技点
  // 造价分析：本项 71 科技点，同档（T2）均价 86 点，本项为均价的 0.83×；研究耗时 426 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 488 科技点，占本系链总造价 6824 点的 7%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 568 铁当量，约等于 47.3 座采矿机 L1 的造价。
  // 效果分解：艺术品产值 ×1.3（目标 culture.art，mul运算）。
  // 效果分解：科研速度 ×1.05（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 艺术品产值 ×1.3、科研速度 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 10/40 项，前置 「全息影院」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「全息影院」、「火星博物馆」，造价分别为 65、77 点；本项 71 点，排第 2/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（artMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_cult_10": {
    id: "v32_cult_10",
    name: "艺术学院",
    icon: "🎓",
    branch: "culture",
    branchName: "文化",
    tier: 2,
    cost: 71,
    researchTimeSec: 426,
    needs: ["v32_cult_09"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_09", note: "需先研究「全息影院」。" },
    ],
    desc: "艺术学院招生，艺术品产值提升。",
    fx: {
      "artMul": 1.3,
      "researchMul": 1.05,
    },
    modifiers: [
      {
        key: "artMul",
        target: "culture.art",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "艺术品产值 ×1.3",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "科研速度 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_11"],
    comboWith: [
      { tech: "v32_cult_11", note: "与「火星博物馆」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "艺术品产值 ×1.3。",
      "科研速度 ×1.05。",
    ],
    researchCost: {
      tech: 71,
      credits: 355,
      timeSec: 426,
      note: "研究耗时 426 秒，另耗星币 355。",
    },
    levels: [
      { level: 1, cost: 71, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 142, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 284, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_11 火星博物馆 [文化·T2] 造价 77 科技点
  // 造价分析：本项 77 科技点，同档（T2）均价 86 点，本项为均价的 0.90×；研究耗时 462 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 565 科技点，占本系链总造价 6824 点的 8%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 616 铁当量，约等于 51.3 座采矿机 L1 的造价。
  // 效果分解：解锁火星博物馆（目标 unlock.museum，flag运算）。
  // 效果分解：旅游收入 ×1.25（目标 culture.tourism，mul运算）。
  // 效果分解：两项效果合计 解锁火星博物馆、旅游收入 ×1.25；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 11/40 项，前置 「艺术学院」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「全息影院」、「艺术学院」，造价分别为 65、71 点；本项 77 点，排第 3/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：开关解锁（unlockMuseum）、乘法叠加（tourismMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「火星博物馆」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_cult_11": {
    id: "v32_cult_11",
    name: "火星博物馆",
    icon: "🏛️",
    branch: "culture",
    branchName: "文化",
    tier: 2,
    cost: 77,
    researchTimeSec: 462,
    needs: ["v32_cult_10"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_10", note: "需先研究「艺术学院」。" },
    ],
    desc: "火星博物馆开馆，旅游收入开始增长。",
    fx: {
      "unlockMuseum": 1,
      "tourismMul": 1.25,
    },
    modifiers: [
      {
        key: "unlockMuseum",
        target: "unlock.museum",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁火星博物馆",
      },
      {
        key: "tourismMul",
        target: "culture.tourism",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "旅游收入 ×1.25",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-museum"],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_12"],
    comboWith: [
      { tech: "v32_cult_12", note: "与「音乐节」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁火星博物馆。",
      "旅游收入 ×1.25。",
    ],
    researchCost: {
      tech: 77,
      credits: 385,
      timeSec: 462,
      note: "研究耗时 462 秒，另耗星币 385。",
    },
    levels: [
      { level: 1, cost: 77, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 154, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 308, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_12 音乐节 [文化·T2] 造价 83 科技点
  // 造价分析：本项 83 科技点，同档（T2）均价 86 点，本项为均价的 0.97×；研究耗时 498 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 648 科技点，占本系链总造价 6824 点的 9%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 664 铁当量，约等于 55.3 座采矿机 L1 的造价。
  // 效果分解：居民幸福度 +5 点（目标 pop.happiness，add运算）。
  // 效果分解：旅游收入 ×1.15（目标 culture.tourism，mul运算）。
  // 效果分解：两项效果合计 居民幸福度 +5 点、旅游收入 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 12/40 项，前置 「火星博物馆」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「全息影院」、「艺术学院」，造价分别为 65、71 点；本项 83 点，排第 4/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：加法叠加（happinessAdd）、乘法叠加（tourismMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「罢工潮」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_cult_12": {
    id: "v32_cult_12",
    name: "音乐节",
    icon: "🎵",
    branch: "culture",
    branchName: "文化",
    tier: 2,
    cost: 83,
    researchTimeSec: 498,
    needs: ["v32_cult_11"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_11", note: "需先研究「火星博物馆」。" },
    ],
    desc: "年度音乐节固定举办，居民幸福度提升。",
    fx: {
      "happinessAdd": 5,
      "tourismMul": 1.15,
    },
    modifiers: [
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 5,
        unit: "点",
        note: "居民幸福度 +5 点",
      },
      {
        key: "tourismMul",
        target: "culture.tourism",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "旅游收入 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-strike"],
    mitigatesDetail: [
      { disaster: "d32-strike", note: "缓解「罢工潮」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_13"],
    comboWith: [
      { tech: "v32_cult_13", note: "与「体育联赛」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +5 点。",
      "旅游收入 ×1.15。",
    ],
    researchCost: {
      tech: 83,
      credits: 415,
      timeSec: 498,
      note: "研究耗时 498 秒，另耗星币 415。",
    },
    levels: [
      { level: 1, cost: 83, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 166, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 332, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_13 体育联赛 [文化·T2] 造价 89 科技点
  // 造价分析：本项 89 科技点，同档（T2）均价 86 点，本项为均价的 1.03×；研究耗时 534 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 737 科技点，占本系链总造价 6824 点的 11%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 712 铁当量，约等于 59.3 座采矿机 L1 的造价。
  // 效果分解：居民幸福度 +4 点（目标 pop.happiness，add运算）。
  // 效果分解：人口增长速度 ×1.08（目标 pop.growth，mul运算）。
  // 效果分解：两项效果合计 居民幸福度 +4 点、人口增长速度 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 13/40 项，前置 「音乐节」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「全息影院」、「艺术学院」，造价分别为 65、71 点；本项 89 点，排第 5/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：加法叠加（happinessAdd）、乘法叠加（popGrowthMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_cult_13": {
    id: "v32_cult_13",
    name: "体育联赛",
    icon: "⚽",
    branch: "culture",
    branchName: "文化",
    tier: 2,
    cost: 89,
    researchTimeSec: 534,
    needs: ["v32_cult_12"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_12", note: "需先研究「音乐节」。" },
    ],
    desc: "穹顶足球联赛开赛，居民幸福度与人口增长提升。",
    fx: {
      "happinessAdd": 4,
      "popGrowthMul": 1.08,
    },
    modifiers: [
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 4,
        unit: "点",
        note: "居民幸福度 +4 点",
      },
      {
        key: "popGrowthMul",
        target: "pop.growth",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "人口增长速度 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_14"],
    comboWith: [
      { tech: "v32_cult_14", note: "与「媒体中心」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +4 点。",
      "人口增长速度 ×1.08。",
    ],
    researchCost: {
      tech: 89,
      credits: 445,
      timeSec: 534,
      note: "研究耗时 534 秒，另耗星币 445。",
    },
    levels: [
      { level: 1, cost: 89, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 178, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 356, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_14 媒体中心 [文化·T2] 造价 95 科技点
  // 造价分析：本项 95 科技点，同档（T2）均价 86 点，本项为均价的 1.10×；研究耗时 570 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 832 科技点，占本系链总造价 6824 点的 12%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 760 铁当量，约等于 63.3 座采矿机 L1 的造价。
  // 效果分解：外交关系增速 ×1.15（目标 diplomacy.relation，mul运算）。
  // 效果分解：文化产出 ×1.1（目标 culture.output，mul运算）。
  // 效果分解：两项效果合计 外交关系增速 ×1.15、文化产出 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 14/40 项，前置 「体育联赛」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「全息影院」、「艺术学院」，造价分别为 65、71 点；本项 95 点，排第 6/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（diplomacyMul）、乘法叠加（cultureMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_cult_14": {
    id: "v32_cult_14",
    name: "媒体中心",
    icon: "📰",
    branch: "culture",
    branchName: "文化",
    tier: 2,
    cost: 95,
    researchTimeSec: 570,
    needs: ["v32_cult_13"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_13", note: "需先研究「体育联赛」。" },
    ],
    desc: "独立媒体中心成立，外交关系增速提升。",
    fx: {
      "diplomacyMul": 1.15,
      "cultureMul": 1.1,
    },
    modifiers: [
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "外交关系增速 ×1.15",
      },
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "文化产出 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_15"],
    comboWith: [
      { tech: "v32_cult_15", note: "与「语言学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.15。",
      "文化产出 ×1.1。",
    ],
    researchCost: {
      tech: 95,
      credits: 475,
      timeSec: 570,
      note: "研究耗时 570 秒，另耗星币 475。",
    },
    levels: [
      { level: 1, cost: 95, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 190, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 380, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_15 语言学校 [文化·T2] 造价 101 科技点
  // 造价分析：本项 101 科技点，同档（T2）均价 86 点，本项为均价的 1.17×；研究耗时 606 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 933 科技点，占本系链总造价 6824 点的 14%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 808 铁当量，约等于 67.3 座采矿机 L1 的造价。
  // 效果分解：外交关系增速 ×1.2（目标 diplomacy.relation，mul运算）。
  // 效果分解：科研速度 ×1.05（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 外交关系增速 ×1.2、科研速度 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 15/40 项，前置 「媒体中心」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「全息影院」、「艺术学院」，造价分别为 65、71 点；本项 101 点，排第 7/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（diplomacyMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_cult_15": {
    id: "v32_cult_15",
    name: "语言学校",
    icon: "🗣️",
    branch: "culture",
    branchName: "文化",
    tier: 2,
    cost: 101,
    researchTimeSec: 606,
    needs: ["v32_cult_14"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_14", note: "需先研究「媒体中心」。" },
    ],
    desc: "多语学校培养翻译人才，外交关系增速提升。",
    fx: {
      "diplomacyMul": 1.2,
      "researchMul": 1.05,
    },
    modifiers: [
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "外交关系增速 ×1.2",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "科研速度 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_16"],
    comboWith: [
      { tech: "v32_cult_16", note: "与「文化遗产普查」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.2。",
      "科研速度 ×1.05。",
    ],
    researchCost: {
      tech: 101,
      credits: 505,
      timeSec: 606,
      note: "研究耗时 606 秒，另耗星币 505。",
    },
    levels: [
      { level: 1, cost: 101, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 202, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 404, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_16 文化遗产普查 [文化·T2] 造价 107 科技点
  // 造价分析：本项 107 科技点，同档（T2）均价 86 点，本项为均价的 1.24×；研究耗时 642 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1040 科技点，占本系链总造价 6824 点的 15%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 856 铁当量，约等于 71.3 座采矿机 L1 的造价。
  // 效果分解：文化产出 ×1.25（目标 culture.output，mul运算）。
  // 效果分解：殖民地稳定度 +2 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 文化产出 ×1.25、殖民地稳定度 +2 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 16/40 项，前置 「语言学校」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「全息影院」、「艺术学院」，造价分别为 65、71 点；本项 107 点，排第 8/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（cultureMul）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_cult_16": {
    id: "v32_cult_16",
    name: "文化遗产普查",
    icon: "🏺",
    branch: "culture",
    branchName: "文化",
    tier: 2,
    cost: 107,
    researchTimeSec: 642,
    needs: ["v32_cult_15"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_15", note: "需先研究「语言学校」。" },
    ],
    desc: "开拓遗址普查建档，文化产出提升。",
    fx: {
      "cultureMul": 1.25,
      "stabilityAdd": 2,
    },
    modifiers: [
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "文化产出 ×1.25",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 2,
        unit: "点",
        note: "殖民地稳定度 +2 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_17"],
    comboWith: [
      { tech: "v32_cult_17", note: "与「旅游专线」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "文化产出 ×1.25。",
      "殖民地稳定度 +2 点。",
    ],
    researchCost: {
      tech: 107,
      credits: 535,
      timeSec: 642,
      note: "研究耗时 642 秒，另耗星币 535。",
    },
    levels: [
      { level: 1, cost: 107, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 214, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 428, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_17 旅游专线 [文化·T3] 造价 115 科技点
  // 造价分析：本项 115 科技点，同档（T3）均价 143 点，本项为均价的 0.80×；研究耗时 690 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1155 科技点，占本系链总造价 6824 点的 17%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 920 铁当量，约等于 76.7 座采矿机 L1 的造价。
  // 效果分解：旅游收入 ×1.4（目标 culture.tourism，mul运算）。
  // 效果分解：贸易收入 ×1.08（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 旅游收入 ×1.4、贸易收入 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 17/40 项，前置 「文化遗产普查」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「美食之都」、「艺术画廊」，造价分别为 123、131 点；本项 115 点，排第 1/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（tourismMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_cult_17": {
    id: "v32_cult_17",
    name: "旅游专线",
    icon: "🚀",
    branch: "culture",
    branchName: "文化",
    tier: 3,
    cost: 115,
    researchTimeSec: 690,
    needs: ["v32_cult_16"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_16", note: "需先研究「文化遗产普查」。" },
    ],
    desc: "地球观光专线开通，旅游收入大幅提升。",
    fx: {
      "tourismMul": 1.4,
      "tradeMul": 1.08,
    },
    modifiers: [
      {
        key: "tourismMul",
        target: "culture.tourism",
        op: "mul",
        value: 1.4,
        unit: "倍",
        note: "旅游收入 ×1.4",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "贸易收入 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_18"],
    comboWith: [
      { tech: "v32_cult_18", note: "与「美食之都」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "旅游收入 ×1.4。",
      "贸易收入 ×1.08。",
    ],
    researchCost: {
      tech: 115,
      credits: 575,
      timeSec: 690,
      note: "研究耗时 690 秒，另耗星币 575。",
    },
    levels: [
      { level: 1, cost: 115, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 230, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 460, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_18 美食之都 [文化·T3] 造价 123 科技点
  // 造价分析：本项 123 科技点，同档（T3）均价 143 点，本项为均价的 0.86×；研究耗时 738 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1278 科技点，占本系链总造价 6824 点的 19%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 984 铁当量，约等于 82.0 座采矿机 L1 的造价。
  // 效果分解：旅游收入 ×1.3（目标 culture.tourism，mul运算）。
  // 效果分解：食物产量 ×1.1（目标 prod.food，mul运算）。
  // 效果分解：两项效果合计 旅游收入 ×1.3、食物产量 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 18/40 项，前置 「旅游专线」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「旅游专线」、「艺术画廊」，造价分别为 115、131 点；本项 123 点，排第 2/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（tourismMul）、乘法叠加（foodMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_cult_18": {
    id: "v32_cult_18",
    name: "美食之都",
    icon: "🍜",
    branch: "culture",
    branchName: "文化",
    tier: 3,
    cost: 123,
    researchTimeSec: 738,
    needs: ["v32_cult_17"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_17", note: "需先研究「旅游专线」。" },
    ],
    desc: "火星美食节打响名号，旅游收入与食物产量提升。",
    fx: {
      "tourismMul": 1.3,
      "foodMul": 1.1,
    },
    modifiers: [
      {
        key: "tourismMul",
        target: "culture.tourism",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "旅游收入 ×1.3",
      },
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "食物产量 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-drought"],
    mitigatesDetail: [
      { disaster: "d32-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_19"],
    comboWith: [
      { tech: "v32_cult_19", note: "与「艺术画廊」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "旅游收入 ×1.3。",
      "食物产量 ×1.1。",
    ],
    researchCost: {
      tech: 123,
      credits: 615,
      timeSec: 738,
      note: "研究耗时 738 秒，另耗星币 615。",
    },
    levels: [
      { level: 1, cost: 123, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 246, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 492, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_19 艺术画廊 [文化·T3] 造价 131 科技点
  // 造价分析：本项 131 科技点，同档（T3）均价 143 点，本项为均价的 0.92×；研究耗时 786 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1409 科技点，占本系链总造价 6824 点的 21%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1048 铁当量，约等于 87.3 座采矿机 L1 的造价。
  // 效果分解：解锁艺术画廊（目标 unlock.gallery，flag运算）。
  // 效果分解：艺术品产值 ×1.4（目标 culture.art，mul运算）。
  // 效果分解：两项效果合计 解锁艺术画廊、艺术品产值 ×1.4；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 19/40 项，前置 「美食之都」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「旅游专线」、「美食之都」，造价分别为 115、123 点；本项 131 点，排第 3/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：开关解锁（unlockGallery）、乘法叠加（artMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「艺术画廊」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_cult_19": {
    id: "v32_cult_19",
    name: "艺术画廊",
    icon: "🖼️",
    branch: "culture",
    branchName: "文化",
    tier: 3,
    cost: 131,
    researchTimeSec: 786,
    needs: ["v32_cult_18"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_18", note: "需先研究「美食之都」。" },
    ],
    desc: "艺术画廊展出本土画作，艺术品产值提升。",
    fx: {
      "unlockGallery": 1,
      "artMul": 1.4,
    },
    modifiers: [
      {
        key: "unlockGallery",
        target: "unlock.gallery",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁艺术画廊",
      },
      {
        key: "artMul",
        target: "culture.art",
        op: "mul",
        value: 1.4,
        unit: "倍",
        note: "艺术品产值 ×1.4",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-gallery"],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_20"],
    comboWith: [
      { tech: "v32_cult_20", note: "与「文明档案馆」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁艺术画廊。",
      "艺术品产值 ×1.4。",
    ],
    researchCost: {
      tech: 131,
      credits: 655,
      timeSec: 786,
      note: "研究耗时 786 秒，另耗星币 655。",
    },
    levels: [
      { level: 1, cost: 131, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 262, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 524, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_20 文明档案馆 [文化·T3] 造价 139 科技点
  // 造价分析：本项 139 科技点，同档（T3）均价 143 点，本项为均价的 0.97×；研究耗时 834 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1548 科技点，占本系链总造价 6824 点的 23%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1112 铁当量，约等于 92.7 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.12（目标 prod.research，mul运算）。
  // 效果分解：文化产出 ×1.15（目标 culture.output，mul运算）。
  // 效果分解：两项效果合计 科研速度 ×1.12、文化产出 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 20/40 项，前置 「艺术画廊」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「旅游专线」、「美食之都」，造价分别为 115、123 点；本项 139 点，排第 4/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（researchMul）、乘法叠加（cultureMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_cult_20": {
    id: "v32_cult_20",
    name: "文明档案馆",
    icon: "📜",
    branch: "culture",
    branchName: "文化",
    tier: 3,
    cost: 139,
    researchTimeSec: 834,
    needs: ["v32_cult_19"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_19", note: "需先研究「艺术画廊」。" },
    ],
    desc: "文明档案馆落成，科研速度提升。",
    fx: {
      "researchMul": 1.12,
      "cultureMul": 1.15,
    },
    modifiers: [
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.12,
        unit: "倍",
        note: "科研速度 ×1.12",
      },
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "文化产出 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_21"],
    comboWith: [
      { tech: "v32_cult_21", note: "与「纪录片产业」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.12。",
      "文化产出 ×1.15。",
    ],
    researchCost: {
      tech: 139,
      credits: 695,
      timeSec: 834,
      note: "研究耗时 834 秒，另耗星币 695。",
    },
    levels: [
      { level: 1, cost: 139, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 278, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 556, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_21 纪录片产业 [文化·T3] 造价 147 科技点
  // 造价分析：本项 147 科技点，同档（T3）均价 143 点，本项为均价的 1.03×；研究耗时 882 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1695 科技点，占本系链总造价 6824 点的 25%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1176 铁当量，约等于 98.0 座采矿机 L1 的造价。
  // 效果分解：文化产出 ×1.3（目标 culture.output，mul运算）。
  // 效果分解：贸易收入 ×1.08（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 文化产出 ×1.3、贸易收入 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 21/40 项，前置 「文明档案馆」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「旅游专线」、「美食之都」，造价分别为 115、123 点；本项 147 点，排第 5/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（cultureMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_cult_21": {
    id: "v32_cult_21",
    name: "纪录片产业",
    icon: "🎥",
    branch: "culture",
    branchName: "文化",
    tier: 3,
    cost: 147,
    researchTimeSec: 882,
    needs: ["v32_cult_20"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_20", note: "需先研究「文明档案馆」。" },
    ],
    desc: "火星纪录片热销地球，文化产出提升。",
    fx: {
      "cultureMul": 1.3,
      "tradeMul": 1.08,
    },
    modifiers: [
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "文化产出 ×1.3",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "贸易收入 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_22"],
    comboWith: [
      { tech: "v32_cult_22", note: "与「公共图书馆」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "文化产出 ×1.3。",
      "贸易收入 ×1.08。",
    ],
    researchCost: {
      tech: 147,
      credits: 735,
      timeSec: 882,
      note: "研究耗时 882 秒，另耗星币 735。",
    },
    levels: [
      { level: 1, cost: 147, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 294, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 588, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_22 公共图书馆 [文化·T3] 造价 155 科技点
  // 造价分析：本项 155 科技点，同档（T3）均价 143 点，本项为均价的 1.08×；研究耗时 930 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1850 科技点，占本系链总造价 6824 点的 27%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1240 铁当量，约等于 103.3 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.15（目标 prod.research，mul运算）。
  // 效果分解：居民幸福度 +3 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 科研速度 ×1.15、居民幸福度 +3 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 22/40 项，前置 「纪录片产业」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「旅游专线」、「美食之都」，造价分别为 115、123 点；本项 155 点，排第 6/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（researchMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_cult_22": {
    id: "v32_cult_22",
    name: "公共图书馆",
    icon: "📖",
    branch: "culture",
    branchName: "文化",
    tier: 3,
    cost: 155,
    researchTimeSec: 930,
    needs: ["v32_cult_21"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_21", note: "需先研究「纪录片产业」。" },
    ],
    desc: "公共图书馆全天开放，科研速度提升。",
    fx: {
      "researchMul": 1.15,
      "happinessAdd": 3,
    },
    modifiers: [
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "科研速度 ×1.15",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 3,
        unit: "点",
        note: "居民幸福度 +3 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_23"],
    comboWith: [
      { tech: "v32_cult_23", note: "与「民族融合节」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.15。",
      "居民幸福度 +3 点。",
    ],
    researchCost: {
      tech: 155,
      credits: 775,
      timeSec: 930,
      note: "研究耗时 930 秒，另耗星币 775。",
    },
    levels: [
      { level: 1, cost: 155, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 310, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 620, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_23 民族融合节 [文化·T3] 造价 163 科技点
  // 造价分析：本项 163 科技点，同档（T3）均价 143 点，本项为均价的 1.14×；研究耗时 978 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2013 科技点，占本系链总造价 6824 点的 29%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1304 铁当量，约等于 108.7 座采矿机 L1 的造价。
  // 效果分解：叛乱概率 ×0.85（目标 risk.revoltChance，mul运算）。
  // 效果分解：殖民地稳定度 +3 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 叛乱概率 ×0.85、殖民地稳定度 +3 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 23/40 项，前置 「公共图书馆」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「旅游专线」、「美食之都」，造价分别为 115、123 点；本项 163 点，排第 7/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（revoltMul）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_cult_23": {
    id: "v32_cult_23",
    name: "民族融合节",
    icon: "🌍",
    branch: "culture",
    branchName: "文化",
    tier: 3,
    cost: 163,
    researchTimeSec: 978,
    needs: ["v32_cult_22"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_22", note: "需先研究「公共图书馆」。" },
    ],
    desc: "多民族融合节庆举办，叛乱概率下降。",
    fx: {
      "revoltMul": 0.85,
      "stabilityAdd": 3,
    },
    modifiers: [
      {
        key: "revoltMul",
        target: "risk.revoltChance",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "叛乱概率 ×0.85",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 3,
        unit: "点",
        note: "殖民地稳定度 +3 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_24"],
    comboWith: [
      { tech: "v32_cult_24", note: "与「城市雕塑群」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "叛乱概率 ×0.85。",
      "殖民地稳定度 +3 点。",
    ],
    researchCost: {
      tech: 163,
      credits: 815,
      timeSec: 978,
      note: "研究耗时 978 秒，另耗星币 815。",
    },
    levels: [
      { level: 1, cost: 163, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 326, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 652, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_24 城市雕塑群 [文化·T3] 造价 171 科技点
  // 造价分析：本项 171 科技点，同档（T3）均价 143 点，本项为均价的 1.20×；研究耗时 1026 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2184 科技点，占本系链总造价 6824 点的 32%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1368 铁当量，约等于 114.0 座采矿机 L1 的造价。
  // 效果分解：旅游收入 ×1.3（目标 culture.tourism，mul运算）。
  // 效果分解：居民幸福度 +3 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 旅游收入 ×1.3、居民幸福度 +3 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 24/40 项，前置 「民族融合节」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「旅游专线」、「美食之都」，造价分别为 115、123 点；本项 171 点，排第 8/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（tourismMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_cult_24": {
    id: "v32_cult_24",
    name: "城市雕塑群",
    icon: "🗿",
    branch: "culture",
    branchName: "文化",
    tier: 3,
    cost: 171,
    researchTimeSec: 1026,
    needs: ["v32_cult_23"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_23", note: "需先研究「民族融合节」。" },
    ],
    desc: "城市雕塑群落成，旅游收入提升。",
    fx: {
      "tourismMul": 1.3,
      "happinessAdd": 3,
    },
    modifiers: [
      {
        key: "tourismMul",
        target: "culture.tourism",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "旅游收入 ×1.3",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 3,
        unit: "点",
        note: "居民幸福度 +3 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_25"],
    comboWith: [
      { tech: "v32_cult_25", note: "与「火星认同」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "旅游收入 ×1.3。",
      "居民幸福度 +3 点。",
    ],
    researchCost: {
      tech: 171,
      credits: 855,
      timeSec: 1026,
      note: "研究耗时 1026 秒，另耗星币 855。",
    },
    levels: [
      { level: 1, cost: 171, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 342, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 684, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_25 火星认同 [文化·T4] 造价 185 科技点
  // 造价分析：本项 185 科技点，同档（T4）均价 227 点，本项为均价的 0.81×；研究耗时 1110 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2369 科技点，占本系链总造价 6824 点的 35%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1480 铁当量，约等于 123.3 座采矿机 L1 的造价。
  // 效果分解：叛乱概率 ×0.75（目标 risk.revoltChance，mul运算）。
  // 效果分解：殖民地稳定度 +4 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 叛乱概率 ×0.75、殖民地稳定度 +4 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 25/40 项，前置 「城市雕塑群」、旧科技「贸易协定」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「文化输出」、「中央图书馆」，造价分别为 197、209 点；本项 185 点，排第 1/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（revoltMul）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_cult_25": {
    id: "v32_cult_25",
    name: "火星认同",
    icon: "🪐",
    branch: "culture",
    branchName: "文化",
    tier: 4,
    cost: 185,
    researchTimeSec: 1110,
    needs: ["v32_cult_24", "t-surv-8"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_24", note: "需先研究「城市雕塑群」。" },
      { type: "tech", ref: "t-surv-8", note: "需先研究旧科技「贸易协定」。" },
    ],
    desc: "火星认同教育普及，叛乱概率大幅下降。",
    fx: {
      "revoltMul": 0.75,
      "stabilityAdd": 4,
    },
    modifiers: [
      {
        key: "revoltMul",
        target: "risk.revoltChance",
        op: "mul",
        value: 0.75,
        unit: "倍",
        note: "叛乱概率 ×0.75",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 4,
        unit: "点",
        note: "殖民地稳定度 +4 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_26"],
    comboWith: [
      { tech: "v32_cult_26", note: "与「文化输出」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "叛乱概率 ×0.75。",
      "殖民地稳定度 +4 点。",
    ],
    researchCost: {
      tech: 185,
      credits: 925,
      timeSec: 1110,
      note: "研究耗时 1110 秒，另耗星币 925。",
    },
    levels: [
      { level: 1, cost: 185, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 370, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 740, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_26 文化输出 [文化·T4] 造价 197 科技点
  // 造价分析：本项 197 科技点，同档（T4）均价 227 点，本项为均价的 0.87×；研究耗时 1182 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2566 科技点，占本系链总造价 6824 点的 38%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1576 铁当量，约等于 131.3 座采矿机 L1 的造价。
  // 效果分解：文化产出 ×1.35（目标 culture.output，mul运算）。
  // 效果分解：外交关系增速 ×1.15（目标 diplomacy.relation，mul运算）。
  // 效果分解：两项效果合计 文化产出 ×1.35、外交关系增速 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 26/40 项，前置 「火星认同」、旧科技「量子计算」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「火星认同」、「中央图书馆」，造价分别为 185、209 点；本项 197 点，排第 2/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（cultureMul）、乘法叠加（diplomacyMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_cult_26": {
    id: "v32_cult_26",
    name: "文化输出",
    icon: "🌏",
    branch: "culture",
    branchName: "文化",
    tier: 4,
    cost: 197,
    researchTimeSec: 1182,
    needs: ["v32_cult_25", "t-prod-6"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_25", note: "需先研究「火星认同」。" },
      { type: "tech", ref: "t-prod-6", note: "需先研究旧科技「量子计算」。" },
    ],
    desc: "火星文化反向输出地球，文化产出大幅提升。",
    fx: {
      "cultureMul": 1.35,
      "diplomacyMul": 1.15,
    },
    modifiers: [
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.35,
        unit: "倍",
        note: "文化产出 ×1.35",
      },
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "外交关系增速 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_27"],
    comboWith: [
      { tech: "v32_cult_27", note: "与「中央图书馆」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "文化产出 ×1.35。",
      "外交关系增速 ×1.15。",
    ],
    researchCost: {
      tech: 197,
      credits: 985,
      timeSec: 1182,
      note: "研究耗时 1182 秒，另耗星币 985。",
    },
    levels: [
      { level: 1, cost: 197, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 394, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 788, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_27 中央图书馆 [文化·T4] 造价 209 科技点
  // 造价分析：本项 209 科技点，同档（T4）均价 227 点，本项为均价的 0.92×；研究耗时 1254 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2775 科技点，占本系链总造价 6824 点的 41%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1672 铁当量，约等于 139.3 座采矿机 L1 的造价。
  // 效果分解：解锁中央图书馆（目标 unlock.library，flag运算）。
  // 效果分解：科研速度 ×1.2（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 解锁中央图书馆、科研速度 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 27/40 项，前置 「文化输出」、旧科技「星际通讯」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「火星认同」、「文化输出」，造价分别为 185、197 点；本项 209 点，排第 3/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：开关解锁（unlockLibrary）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「中央图书馆」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_cult_27": {
    id: "v32_cult_27",
    name: "中央图书馆",
    icon: "🏛️",
    branch: "culture",
    branchName: "文化",
    tier: 4,
    cost: 209,
    researchTimeSec: 1254,
    needs: ["v32_cult_26", "t-orb-9"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_26", note: "需先研究「文化输出」。" },
      { type: "tech", ref: "t-orb-9", note: "需先研究旧科技「星际通讯」。" },
    ],
    desc: "中央图书馆藏书百万，科研速度大幅提升。",
    fx: {
      "unlockLibrary": 1,
      "researchMul": 1.2,
    },
    modifiers: [
      {
        key: "unlockLibrary",
        target: "unlock.library",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁中央图书馆",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "科研速度 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-library"],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_28"],
    comboWith: [
      { tech: "v32_cult_28", note: "与「星际电影节」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁中央图书馆。",
      "科研速度 ×1.2。",
    ],
    researchCost: {
      tech: 209,
      credits: 1045,
      timeSec: 1254,
      note: "研究耗时 1254 秒，另耗星币 1045。",
    },
    levels: [
      { level: 1, cost: 209, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 418, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 836, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_28 星际电影节 [文化·T4] 造价 221 科技点
  // 造价分析：本项 221 科技点，同档（T4）均价 227 点，本项为均价的 0.97×；研究耗时 1326 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2996 科技点，占本系链总造价 6824 点的 44%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1768 铁当量，约等于 147.3 座采矿机 L1 的造价。
  // 效果分解：旅游收入 ×1.5（目标 culture.tourism，mul运算）。
  // 效果分解：文化产出 ×1.2（目标 culture.output，mul运算）。
  // 效果分解：两项效果合计 旅游收入 ×1.5、文化产出 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 28/40 项，前置 「中央图书馆」、旧科技「氦3聚变」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「火星认同」、「文化输出」，造价分别为 185、197 点；本项 221 点，排第 4/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（tourismMul）、乘法叠加（cultureMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_cult_28": {
    id: "v32_cult_28",
    name: "星际电影节",
    icon: "🎬",
    branch: "culture",
    branchName: "文化",
    tier: 4,
    cost: 221,
    researchTimeSec: 1326,
    needs: ["v32_cult_27", "t-orb-12"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_27", note: "需先研究「中央图书馆」。" },
      { type: "tech", ref: "t-orb-12", note: "需先研究旧科技「氦3聚变」。" },
    ],
    desc: "星际电影节落户星港，旅游收入大幅提升。",
    fx: {
      "tourismMul": 1.5,
      "cultureMul": 1.2,
    },
    modifiers: [
      {
        key: "tourismMul",
        target: "culture.tourism",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "旅游收入 ×1.5",
      },
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "文化产出 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_29"],
    comboWith: [
      { tech: "v32_cult_29", note: "与「全民艺术教育」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "旅游收入 ×1.5。",
      "文化产出 ×1.2。",
    ],
    researchCost: {
      tech: 221,
      credits: 1105,
      timeSec: 1326,
      note: "研究耗时 1326 秒，另耗星币 1105。",
    },
    levels: [
      { level: 1, cost: 221, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 442, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 884, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_29 全民艺术教育 [文化·T4] 造价 233 科技点
  // 造价分析：本项 233 科技点，同档（T4）均价 227 点，本项为均价的 1.03×；研究耗时 1398 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 3229 科技点，占本系链总造价 6824 点的 47%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1864 铁当量，约等于 155.3 座采矿机 L1 的造价。
  // 效果分解：艺术品产值 ×1.5（目标 culture.art，mul运算）。
  // 效果分解：居民幸福度 +4 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 艺术品产值 ×1.5、居民幸福度 +4 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 29/40 项，前置 「星际电影节」、旧科技「氦3精炼」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「火星认同」、「文化输出」，造价分别为 185、197 点；本项 233 点，排第 5/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（artMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_cult_29": {
    id: "v32_cult_29",
    name: "全民艺术教育",
    icon: "🎨",
    branch: "culture",
    branchName: "文化",
    tier: 4,
    cost: 233,
    researchTimeSec: 1398,
    needs: ["v32_cult_28", "t-prod-13"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_28", note: "需先研究「星际电影节」。" },
      { type: "tech", ref: "t-prod-13", note: "需先研究旧科技「氦3精炼」。" },
    ],
    desc: "全民艺术教育普及，艺术品产值大幅提升。",
    fx: {
      "artMul": 1.5,
      "happinessAdd": 4,
    },
    modifiers: [
      {
        key: "artMul",
        target: "culture.art",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "艺术品产值 ×1.5",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 4,
        unit: "点",
        note: "居民幸福度 +4 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_30"],
    comboWith: [
      { tech: "v32_cult_30", note: "与「心理健康运动」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "艺术品产值 ×1.5。",
      "居民幸福度 +4 点。",
    ],
    researchCost: {
      tech: 233,
      credits: 1165,
      timeSec: 1398,
      note: "研究耗时 1398 秒，另耗星币 1165。",
    },
    levels: [
      { level: 1, cost: 233, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 466, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 932, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_30 心理健康运动 [文化·T4] 造价 245 科技点
  // 造价分析：本项 245 科技点，同档（T4）均价 227 点，本项为均价的 1.08×；研究耗时 1470 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 3474 科技点，占本系链总造价 6824 点的 51%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1960 铁当量，约等于 163.3 座采矿机 L1 的造价。
  // 效果分解：叛乱概率 ×0.8（目标 risk.revoltChance，mul运算）。
  // 效果分解：居民幸福度 +4 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 叛乱概率 ×0.8、居民幸福度 +4 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 30/40 项，前置 「全民艺术教育」、旧科技「火星之子」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「火星认同」、「文化输出」，造价分别为 185、197 点；本项 245 点，排第 6/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（revoltMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_cult_30": {
    id: "v32_cult_30",
    name: "心理健康运动",
    icon: "🧠",
    branch: "culture",
    branchName: "文化",
    tier: 4,
    cost: 245,
    researchTimeSec: 1470,
    needs: ["v32_cult_29", "t-surv-10"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_29", note: "需先研究「全民艺术教育」。" },
      { type: "tech", ref: "t-surv-10", note: "需先研究旧科技「火星之子」。" },
    ],
    desc: "心理健康运动推广，叛乱概率下降。",
    fx: {
      "revoltMul": 0.8,
      "happinessAdd": 4,
    },
    modifiers: [
      {
        key: "revoltMul",
        target: "risk.revoltChance",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "叛乱概率 ×0.8",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 4,
        unit: "点",
        note: "居民幸福度 +4 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_31"],
    comboWith: [
      { tech: "v32_cult_31", note: "与「移民融合政策」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "叛乱概率 ×0.8。",
      "居民幸福度 +4 点。",
    ],
    researchCost: {
      tech: 245,
      credits: 1225,
      timeSec: 1470,
      note: "研究耗时 1470 秒，另耗星币 1225。",
    },
    levels: [
      { level: 1, cost: 245, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 490, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 980, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_31 移民融合政策 [文化·T4] 造价 257 科技点
  // 造价分析：本项 257 科技点，同档（T4）均价 227 点，本项为均价的 1.13×；研究耗时 1542 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 3731 科技点，占本系链总造价 6824 点的 55%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2056 铁当量，约等于 171.3 座采矿机 L1 的造价。
  // 效果分解：人口增长速度 ×1.2（目标 pop.growth，mul运算）。
  // 效果分解：人口上限 +20 人（目标 pop.cap，add运算）。
  // 效果分解：两项效果合计 人口增长速度 ×1.2、人口上限 +20 人；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 31/40 项，前置 「心理健康运动」、旧科技「奇点」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「火星认同」、「文化输出」，造价分别为 185、197 点；本项 257 点，排第 7/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（popGrowthMul）、加法叠加（popCapAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_cult_31": {
    id: "v32_cult_31",
    name: "移民融合政策",
    icon: "🤝",
    branch: "culture",
    branchName: "文化",
    tier: 4,
    cost: 257,
    researchTimeSec: 1542,
    needs: ["v32_cult_30", "t-prod-10"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_30", note: "需先研究「心理健康运动」。" },
      { type: "tech", ref: "t-prod-10", note: "需先研究旧科技「奇点」。" },
    ],
    desc: "移民融合政策落地，人口增长速度提升。",
    fx: {
      "popGrowthMul": 1.2,
      "popCapAdd": 20,
    },
    modifiers: [
      {
        key: "popGrowthMul",
        target: "pop.growth",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "人口增长速度 ×1.2",
      },
      {
        key: "popCapAdd",
        target: "pop.cap",
        op: "add",
        value: 20,
        unit: "人",
        note: "人口上限 +20 人",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_32"],
    comboWith: [
      { tech: "v32_cult_32", note: "与「文化外交」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口增长速度 ×1.2。",
      "人口上限 +20 人。",
    ],
    researchCost: {
      tech: 257,
      credits: 1285,
      timeSec: 1542,
      note: "研究耗时 1542 秒，另耗星币 1285。",
    },
    levels: [
      { level: 1, cost: 257, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 514, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1028, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_32 文化外交 [文化·T4] 造价 269 科技点
  // 造价分析：本项 269 科技点，同档（T4）均价 227 点，本项为均价的 1.19×；研究耗时 1614 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4000 科技点，占本系链总造价 6824 点的 59%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2152 铁当量，约等于 179.3 座采矿机 L1 的造价。
  // 效果分解：外交关系增速 ×1.3（目标 diplomacy.relation，mul运算）。
  // 效果分解：贸易收入 ×1.1（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 外交关系增速 ×1.3、贸易收入 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 32/40 项，前置 「移民融合政策」、旧科技「火星公民」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「火星认同」、「文化输出」，造价分别为 185、197 点；本项 269 点，排第 8/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（diplomacyMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_cult_32": {
    id: "v32_cult_32",
    name: "文化外交",
    icon: "🕊️",
    branch: "culture",
    branchName: "文化",
    tier: 4,
    cost: 269,
    researchTimeSec: 1614,
    needs: ["v32_cult_31", "t-surv-15"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_31", note: "需先研究「移民融合政策」。" },
      { type: "tech", ref: "t-surv-15", note: "需先研究旧科技「火星公民」。" },
    ],
    desc: "文化外交打开局面，外交关系增速大幅提升。",
    fx: {
      "diplomacyMul": 1.3,
      "tradeMul": 1.1,
    },
    modifiers: [
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "外交关系增速 ×1.3",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "贸易收入 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_33"],
    comboWith: [
      { tech: "v32_cult_33", note: "与「文明丰碑」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.3。",
      "贸易收入 ×1.1。",
    ],
    researchCost: {
      tech: 269,
      credits: 1345,
      timeSec: 1614,
      note: "研究耗时 1614 秒，另耗星币 1345。",
    },
    levels: [
      { level: 1, cost: 269, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 538, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1076, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_33 文明丰碑 [文化·T5] 造价 290 科技点
  // 造价分析：本项 290 科技点，同档（T5）均价 353 点，本项为均价的 0.82×；研究耗时 1740 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4290 科技点，占本系链总造价 6824 点的 63%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2320 铁当量，约等于 193.3 座采矿机 L1 的造价。
  // 效果分解：胜利进度 +1 点（目标 victory.progress，add运算）。
  // 效果分解：殖民地稳定度 +5 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 胜利进度 +1 点、殖民地稳定度 +5 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 33/40 项，前置 「文化外交」、旧科技「新纪元」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「星际文化节」、「文明纪念碑」，造价分别为 308、326 点；本项 290 点，排第 1/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：加法叠加（victoryProgressAdd）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_cult_33": {
    id: "v32_cult_33",
    name: "文明丰碑",
    icon: "🗽",
    branch: "culture",
    branchName: "文化",
    tier: 5,
    cost: 290,
    researchTimeSec: 1740,
    needs: ["v32_cult_32", "t-orb-15"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_32", note: "需先研究「文化外交」。" },
      { type: "tech", ref: "t-orb-15", note: "需先研究旧科技「新纪元」。" },
    ],
    desc: "文明丰碑矗立中央广场，胜利进度推进。",
    fx: {
      "victoryProgressAdd": 1,
      "stabilityAdd": 5,
    },
    modifiers: [
      {
        key: "victoryProgressAdd",
        target: "victory.progress",
        op: "add",
        value: 1,
        unit: "点",
        note: "胜利进度 +1 点",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 5,
        unit: "点",
        note: "殖民地稳定度 +5 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_34"],
    comboWith: [
      { tech: "v32_cult_34", note: "与「星际文化节」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "胜利进度 +1 点。",
      "殖民地稳定度 +5 点。",
    ],
    researchCost: {
      tech: 290,
      credits: 1450,
      timeSec: 1740,
      note: "研究耗时 1740 秒，另耗星币 1450。",
    },
    levels: [
      { level: 1, cost: 290, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 580, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1160, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_34 星际文化节 [文化·T5] 造价 308 科技点
  // 造价分析：本项 308 科技点，同档（T5）均价 353 点，本项为均价的 0.87×；研究耗时 1848 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4598 科技点，占本系链总造价 6824 点的 67%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2464 铁当量，约等于 205.3 座采矿机 L1 的造价。
  // 效果分解：文化产出 ×1.4（目标 culture.output，mul运算）。
  // 效果分解：旅游收入 ×1.4（目标 culture.tourism，mul运算）。
  // 效果分解：两项效果合计 文化产出 ×1.4、旅游收入 ×1.4；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 34/40 项，前置 「文明丰碑」、旧科技「戴森雏形」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「文明丰碑」、「文明纪念碑」，造价分别为 290、326 点；本项 308 点，排第 2/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（cultureMul）、乘法叠加（tourismMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_cult_34": {
    id: "v32_cult_34",
    name: "星际文化节",
    icon: "🎇",
    branch: "culture",
    branchName: "文化",
    tier: 5,
    cost: 308,
    researchTimeSec: 1848,
    needs: ["v32_cult_33", "t-build-15"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_33", note: "需先研究「文明丰碑」。" },
      { type: "tech", ref: "t-build-15", note: "需先研究旧科技「戴森雏形」。" },
    ],
    desc: "星际文化节万众瞩目，文化产出与旅游收入登顶。",
    fx: {
      "cultureMul": 1.4,
      "tourismMul": 1.4,
    },
    modifiers: [
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.4,
        unit: "倍",
        note: "文化产出 ×1.4",
      },
      {
        key: "tourismMul",
        target: "culture.tourism",
        op: "mul",
        value: 1.4,
        unit: "倍",
        note: "旅游收入 ×1.4",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_35"],
    comboWith: [
      { tech: "v32_cult_35", note: "与「文明纪念碑」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "文化产出 ×1.4。",
      "旅游收入 ×1.4。",
    ],
    researchCost: {
      tech: 308,
      credits: 1540,
      timeSec: 1848,
      note: "研究耗时 1848 秒，另耗星币 1540。",
    },
    levels: [
      { level: 1, cost: 308, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 616, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1232, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_35 文明纪念碑 [文化·T5] 造价 326 科技点
  // 造价分析：本项 326 科技点，同档（T5）均价 353 点，本项为均价的 0.92×；研究耗时 1956 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4924 科技点，占本系链总造价 6824 点的 72%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2608 铁当量，约等于 217.3 座采矿机 L1 的造价。
  // 效果分解：解锁文明纪念碑（目标 unlock.monument，flag运算）。
  // 效果分解：居民幸福度 +8 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 解锁文明纪念碑、居民幸福度 +8 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 35/40 项，前置 「星际文化节」、旧科技「基层民主」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「文明丰碑」、「星际文化节」，造价分别为 290、308 点；本项 326 点，排第 3/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：开关解锁（unlockMonument）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「文明纪念碑」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_cult_35": {
    id: "v32_cult_35",
    name: "文明纪念碑",
    icon: "🏛️",
    branch: "culture",
    branchName: "文化",
    tier: 5,
    cost: 326,
    researchTimeSec: 1956,
    needs: ["v32_cult_34", "t30-pol-01"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_34", note: "需先研究「星际文化节」。" },
      { type: "tech", ref: "t30-pol-01", note: "需先研究旧科技「基层民主」。" },
    ],
    desc: "文明纪念碑铭刻开拓史，居民幸福度大幅提升。",
    fx: {
      "unlockMonument": 1,
      "happinessAdd": 8,
    },
    modifiers: [
      {
        key: "unlockMonument",
        target: "unlock.monument",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁文明纪念碑",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 8,
        unit: "点",
        note: "居民幸福度 +8 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-monument"],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_36"],
    comboWith: [
      { tech: "v32_cult_36", note: "与「火星文艺复兴」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁文明纪念碑。",
      "居民幸福度 +8 点。",
    ],
    researchCost: {
      tech: 326,
      credits: 1630,
      timeSec: 1956,
      note: "研究耗时 1956 秒，另耗星币 1630。",
    },
    levels: [
      { level: 1, cost: 326, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 652, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1304, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_36 火星文艺复兴 [文化·T5] 造价 344 科技点
  // 造价分析：本项 344 科技点，同档（T5）均价 353 点，本项为均价的 0.97×；研究耗时 2064 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 5268 科技点，占本系链总造价 6824 点的 77%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2752 铁当量，约等于 229.3 座采矿机 L1 的造价。
  // 效果分解：艺术品产值 ×2（目标 culture.art，mul运算）。
  // 效果分解：文化产出 ×1.25（目标 culture.output，mul运算）。
  // 效果分解：两项效果合计 艺术品产值 ×2、文化产出 ×1.25；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 36/40 项，前置 「文明纪念碑」、旧科技「生态穹顶」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「文明丰碑」、「星际文化节」，造价分别为 290、308 点；本项 344 点，排第 4/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（artMul）、乘法叠加（cultureMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_cult_36": {
    id: "v32_cult_36",
    name: "火星文艺复兴",
    icon: "🌟",
    branch: "culture",
    branchName: "文化",
    tier: 5,
    cost: 344,
    researchTimeSec: 2064,
    needs: ["v32_cult_35", "t30-eco-01"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_35", note: "需先研究「文明纪念碑」。" },
      { type: "tech", ref: "t30-eco-01", note: "需先研究旧科技「生态穹顶」。" },
    ],
    desc: "火星文艺复兴席卷各界，艺术品产值翻倍。",
    fx: {
      "artMul": 2,
      "cultureMul": 1.25,
    },
    modifiers: [
      {
        key: "artMul",
        target: "culture.art",
        op: "mul",
        value: 2,
        unit: "倍",
        note: "艺术品产值 ×2",
      },
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "文化产出 ×1.25",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_37"],
    comboWith: [
      { tech: "v32_cult_37", note: "与「文化软实力」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "艺术品产值 ×2。",
      "文化产出 ×1.25。",
    ],
    researchCost: {
      tech: 344,
      credits: 1720,
      timeSec: 2064,
      note: "研究耗时 2064 秒，另耗星币 1720。",
    },
    levels: [
      { level: 1, cost: 344, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 688, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1376, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_37 文化软实力 [文化·T5] 造价 362 科技点
  // 造价分析：本项 362 科技点，同档（T5）均价 353 点，本项为均价的 1.03×；研究耗时 2172 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 5630 科技点，占本系链总造价 6824 点的 83%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2896 铁当量，约等于 241.3 座采矿机 L1 的造价。
  // 效果分解：外交关系增速 ×1.4（目标 diplomacy.relation，mul运算）。
  // 效果分解：文化产出 ×1.2（目标 culture.output，mul运算）。
  // 效果分解：两项效果合计 外交关系增速 ×1.4、文化产出 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 37/40 项，前置 「火星文艺复兴」、旧科技「民兵训练」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「文明丰碑」、「星际文化节」，造价分别为 290、308 点；本项 362 点，排第 5/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（diplomacyMul）、乘法叠加（cultureMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_cult_37": {
    id: "v32_cult_37",
    name: "文化软实力",
    icon: "💎",
    branch: "culture",
    branchName: "文化",
    tier: 5,
    cost: 362,
    researchTimeSec: 2172,
    needs: ["v32_cult_36", "t30-mil-01"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_36", note: "需先研究「火星文艺复兴」。" },
      { type: "tech", ref: "t30-mil-01", note: "需先研究旧科技「民兵训练」。" },
    ],
    desc: "火星文化软实力登顶，外交关系增速大幅提升。",
    fx: {
      "diplomacyMul": 1.4,
      "cultureMul": 1.2,
    },
    modifiers: [
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.4,
        unit: "倍",
        note: "外交关系增速 ×1.4",
      },
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "文化产出 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-corruption"],
    mitigatesDetail: [
      { disaster: "d32-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_38"],
    comboWith: [
      { tech: "v32_cult_38", note: "与「全民终身学习」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.4。",
      "文化产出 ×1.2。",
    ],
    researchCost: {
      tech: 362,
      credits: 1810,
      timeSec: 2172,
      note: "研究耗时 2172 秒，另耗星币 1810。",
    },
    levels: [
      { level: 1, cost: 362, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 724, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1448, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_38 全民终身学习 [文化·T5] 造价 380 科技点
  // 造价分析：本项 380 科技点，同档（T5）均价 353 点，本项为均价的 1.08×；研究耗时 2280 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 6010 科技点，占本系链总造价 6824 点的 88%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 3040 铁当量，约等于 253.3 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.25（目标 prod.research，mul运算）。
  // 效果分解：实验室科技产量 ×1.2（目标 prod.lab，mul运算）。
  // 效果分解：两项效果合计 科研速度 ×1.25、实验室科技产量 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 38/40 项，前置 「文化软实力」、旧科技「深空探测」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「文明丰碑」、「星际文化节」，造价分别为 290、308 点；本项 380 点，排第 6/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（researchMul）、乘法叠加（labMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_cult_38": {
    id: "v32_cult_38",
    name: "全民终身学习",
    icon: "📚",
    branch: "culture",
    branchName: "文化",
    tier: 5,
    cost: 380,
    researchTimeSec: 2280,
    needs: ["v32_cult_37", "t30-ds-01"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_37", note: "需先研究「文化软实力」。" },
      { type: "tech", ref: "t30-ds-01", note: "需先研究旧科技「深空探测」。" },
    ],
    desc: "全民终身学习体系建成，科研速度大幅提升。",
    fx: {
      "researchMul": 1.25,
      "labMul": 1.2,
    },
    modifiers: [
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "科研速度 ×1.25",
      },
      {
        key: "labMul",
        target: "prod.lab",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "实验室科技产量 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_39"],
    comboWith: [
      { tech: "v32_cult_39", note: "与「乌托邦共识」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.25。",
      "实验室科技产量 ×1.2。",
    ],
    researchCost: {
      tech: 380,
      credits: 1900,
      timeSec: 2280,
      note: "研究耗时 2280 秒，另耗星币 1900。",
    },
    levels: [
      { level: 1, cost: 380, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 760, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1520, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_39 乌托邦共识 [文化·T5] 造价 398 科技点
  // 造价分析：本项 398 科技点，同档（T5）均价 353 点，本项为均价的 1.13×；研究耗时 2388 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 6408 科技点，占本系链总造价 6824 点的 94%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 3184 铁当量，约等于 265.3 座采矿机 L1 的造价。
  // 效果分解：叛乱概率 ×0.7（目标 risk.revoltChance，mul运算）。
  // 效果分解：居民幸福度 +5 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 叛乱概率 ×0.7、居民幸福度 +5 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 39/40 项，前置 「全民终身学习」、旧科技「廉政审计」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「文明丰碑」、「星际文化节」，造价分别为 290、308 点；本项 398 点，排第 7/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（revoltMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_cult_39": {
    id: "v32_cult_39",
    name: "乌托邦共识",
    icon: "🕊️",
    branch: "culture",
    branchName: "文化",
    tier: 5,
    cost: 398,
    researchTimeSec: 2388,
    needs: ["v32_cult_38", "t31-pol-01"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_38", note: "需先研究「全民终身学习」。" },
      { type: "tech", ref: "t31-pol-01", note: "需先研究旧科技「廉政审计」。" },
    ],
    desc: "乌托邦共识深入人心，叛乱概率大幅下降。",
    fx: {
      "revoltMul": 0.7,
      "happinessAdd": 5,
    },
    modifiers: [
      {
        key: "revoltMul",
        target: "risk.revoltChance",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "叛乱概率 ×0.7",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 5,
        unit: "点",
        note: "居民幸福度 +5 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-protest"],
    mitigatesDetail: [
      { disaster: "d32-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_40"],
    comboWith: [
      { tech: "v32_cult_40", note: "与「太阳系文化之都」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "叛乱概率 ×0.7。",
      "居民幸福度 +5 点。",
    ],
    researchCost: {
      tech: 398,
      credits: 1990,
      timeSec: 2388,
      note: "研究耗时 2388 秒，另耗星币 1990。",
    },
    levels: [
      { level: 1, cost: 398, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 796, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1592, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_cult_40 太阳系文化之都 [文化·T5] 造价 416 科技点
  // 造价分析：本项 416 科技点，同档（T5）均价 353 点，本项为均价的 1.18×；研究耗时 2496 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 6824 科技点，占本系链总造价 6824 点的 100%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 3328 铁当量，约等于 277.3 座采矿机 L1 的造价。
  // 效果分解：文化产出 ×1.5（目标 culture.output，mul运算）。
  // 效果分解：旅游收入 ×1.5（目标 culture.tourism，mul运算）。
  // 效果分解：两项效果合计 文化产出 ×1.5、旅游收入 ×1.5；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 40/40 项，前置 「乌托邦共识」、旧科技「深空雷达」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「文明丰碑」、「星际文化节」，造价分别为 290、308 点；本项 416 点，排第 8/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（cultureMul）、乘法叠加（tourismMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「大剧院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「市场崩盘」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_cult_40": {
    id: "v32_cult_40",
    name: "太阳系文化之都",
    icon: "🌆",
    branch: "culture",
    branchName: "文化",
    tier: 5,
    cost: 416,
    researchTimeSec: 2496,
    needs: ["v32_cult_39", "t31-dsp-01"],
    needsDetail: [
      { type: "tech", ref: "v32_cult_39", note: "需先研究「乌托邦共识」。" },
      { type: "tech", ref: "t31-dsp-01", note: "需先研究旧科技「深空雷达」。" },
    ],
    desc: "星港成为太阳系文化之都，文化产出与旅游收入登顶。",
    fx: {
      "cultureMul": 1.5,
      "tourismMul": 1.5,
    },
    modifiers: [
      {
        key: "cultureMul",
        target: "culture.output",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "文化产出 ×1.5",
      },
      {
        key: "tourismMul",
        target: "culture.tourism",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "旅游收入 ×1.5",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-crash"],
    mitigatesDetail: [
      { disaster: "d32-crash", note: "缓解「市场崩盘」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_cult_39"],
    comboWith: [
      { tech: "v32_cult_39", note: "与「乌托邦共识」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "文化产出 ×1.5。",
      "旅游收入 ×1.5。",
    ],
    researchCost: {
      tech: 416,
      credits: 2080,
      timeSec: 2496,
      note: "研究耗时 2496 秒，另耗星币 2080。",
    },
    levels: [
      { level: 1, cost: 416, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 832, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1664, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // ---------- 科研系（40 项） ----------
  // v32_res_01 科学方法 [科研·T1] 造价 30 科技点
  // 造价分析：本项 30 科技点，同档（T1）均价 44 点，本项为均价的 0.68×；研究耗时 180 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 30 科技点，占本系链总造价 6824 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 240 铁当量，约等于 20.0 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.12（目标 prod.research，mul运算）。
  // 效果分解：实验室科技产量 ×1.1（目标 prod.lab，mul运算）。
  // 效果分解：两项效果合计 科研速度 ×1.12、实验室科技产量 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 1/40 项，无前置，任意时间可研究；是本系链的起点。
  // 横向对比：同档同系另有 「精密仪器」、「数据共享」，造价分别为 34、38 点；本项 30 点，排第 1/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（researchMul）、乘法叠加（labMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_res_01": {
    id: "v32_res_01",
    name: "科学方法",
    icon: "🔬",
    branch: "research",
    branchName: "科研",
    tier: 1,
    cost: 30,
    researchTimeSec: 180,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "双盲实验规范普及，科研速度提升。",
    fx: {
      "researchMul": 1.12,
      "labMul": 1.1,
    },
    modifiers: [
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.12,
        unit: "倍",
        note: "科研速度 ×1.12",
      },
      {
        key: "labMul",
        target: "prod.lab",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "实验室科技产量 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_02"],
    comboWith: [
      { tech: "v32_res_02", note: "与「精密仪器」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.12。",
      "实验室科技产量 ×1.1。",
    ],
    researchCost: {
      tech: 30,
      credits: 150,
      timeSec: 180,
      note: "研究耗时 180 秒，另耗星币 150。",
    },
    levels: [
      { level: 1, cost: 30, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 60, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 120, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_02 精密仪器 [科研·T1] 造价 34 科技点
  // 造价分析：本项 34 科技点，同档（T1）均价 44 点，本项为均价的 0.77×；研究耗时 204 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 64 科技点，占本系链总造价 6824 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 272 铁当量，约等于 22.7 座采矿机 L1 的造价。
  // 效果分解：实验室科技产量 ×1.2（目标 prod.lab，mul运算）。
  // 效果分解：科研速度 ×1.05（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 实验室科技产量 ×1.2、科研速度 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 2/40 项，前置 「科学方法」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「科学方法」、「数据共享」，造价分别为 30、38 点；本项 34 点，排第 2/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（labMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_res_02": {
    id: "v32_res_02",
    name: "精密仪器",
    icon: "⚗️",
    branch: "research",
    branchName: "科研",
    tier: 1,
    cost: 34,
    researchTimeSec: 204,
    needs: ["v32_res_01"],
    needsDetail: [
      { type: "tech", ref: "v32_res_01", note: "需先研究「科学方法」。" },
    ],
    desc: "精密仪器校准升级，实验室科技产量提升。",
    fx: {
      "labMul": 1.2,
      "researchMul": 1.05,
    },
    modifiers: [
      {
        key: "labMul",
        target: "prod.lab",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "实验室科技产量 ×1.2",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "科研速度 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_03"],
    comboWith: [
      { tech: "v32_res_03", note: "与「数据共享」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "实验室科技产量 ×1.2。",
      "科研速度 ×1.05。",
    ],
    researchCost: {
      tech: 34,
      credits: 170,
      timeSec: 204,
      note: "研究耗时 204 秒，另耗星币 170。",
    },
    levels: [
      { level: 1, cost: 34, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 68, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 136, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_03 数据共享 [科研·T1] 造价 38 科技点
  // 造价分析：本项 38 科技点，同档（T1）均价 44 点，本项为均价的 0.86×；研究耗时 228 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 102 科技点，占本系链总造价 6824 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 304 铁当量，约等于 25.3 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.1（目标 prod.research，mul运算）。
  // 效果分解：科技点 +1/分钟（目标 prod.techPerMin，add运算）。
  // 效果分解：两项效果合计 科研速度 ×1.1、科技点 +1/分钟；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 3/40 项，前置 「精密仪器」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「科学方法」、「精密仪器」，造价分别为 30、34 点；本项 38 点，排第 3/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（researchMul）、加法叠加（techPointAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_res_03": {
    id: "v32_res_03",
    name: "数据共享",
    icon: "📊",
    branch: "research",
    branchName: "科研",
    tier: 1,
    cost: 38,
    researchTimeSec: 228,
    needs: ["v32_res_02"],
    needsDetail: [
      { type: "tech", ref: "v32_res_02", note: "需先研究「精密仪器」。" },
    ],
    desc: "实验数据全库共享，科研速度提升。",
    fx: {
      "researchMul": 1.1,
      "techPointAdd": 1,
    },
    modifiers: [
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "科研速度 ×1.1",
      },
      {
        key: "techPointAdd",
        target: "prod.techPerMin",
        op: "add",
        value: 1,
        unit: "/分钟",
        note: "科技点 +1/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_04"],
    comboWith: [
      { tech: "v32_res_04", note: "与「火星大学」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.1。",
      "科技点 +1/分钟。",
    ],
    researchCost: {
      tech: 38,
      credits: 190,
      timeSec: 228,
      note: "研究耗时 228 秒，另耗星币 190。",
    },
    levels: [
      { level: 1, cost: 38, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 76, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 152, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_04 火星大学 [科研·T1] 造价 42 科技点
  // 造价分析：本项 42 科技点，同档（T1）均价 44 点，本项为均价的 0.95×；研究耗时 252 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 144 科技点，占本系链总造价 6824 点的 2%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 336 铁当量，约等于 28.0 座采矿机 L1 的造价。
  // 效果分解：解锁火星大学（目标 unlock.university，flag运算）。
  // 效果分解：科研速度 ×1.15（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 解锁火星大学、科研速度 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 4/40 项，前置 「数据共享」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「科学方法」、「精密仪器」，造价分别为 30、34 点；本项 42 点，排第 4/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：开关解锁（unlockUniversity）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「火星大学」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_res_04": {
    id: "v32_res_04",
    name: "火星大学",
    icon: "🎓",
    branch: "research",
    branchName: "科研",
    tier: 1,
    cost: 42,
    researchTimeSec: 252,
    needs: ["v32_res_03"],
    needsDetail: [
      { type: "tech", ref: "v32_res_03", note: "需先研究「数据共享」。" },
    ],
    desc: "火星大学首批招生，科研速度提升。",
    fx: {
      "unlockUniversity": 1,
      "researchMul": 1.15,
    },
    modifiers: [
      {
        key: "unlockUniversity",
        target: "unlock.university",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁火星大学",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "科研速度 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-university"],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_05"],
    comboWith: [
      { tech: "v32_res_05", note: "与「材料分析」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁火星大学。",
      "科研速度 ×1.15。",
    ],
    researchCost: {
      tech: 42,
      credits: 210,
      timeSec: 252,
      note: "研究耗时 252 秒，另耗星币 210。",
    },
    levels: [
      { level: 1, cost: 42, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 84, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 168, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_05 材料分析 [科研·T1] 造价 46 科技点
  // 造价分析：本项 46 科技点，同档（T1）均价 44 点，本项为均价的 1.05×；研究耗时 276 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 190 科技点，占本系链总造价 6824 点的 3%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 368 铁当量，约等于 30.7 座采矿机 L1 的造价。
  // 效果分解：冶炼厂产量 ×1.2（目标 prod.smelter，mul运算）。
  // 效果分解：科研速度 ×1.05（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 冶炼厂产量 ×1.2、科研速度 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 5/40 项，前置 「火星大学」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「科学方法」、「精密仪器」，造价分别为 30、34 点；本项 46 点，排第 5/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（smelterMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「火星震」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_res_05": {
    id: "v32_res_05",
    name: "材料分析",
    icon: "🧪",
    branch: "research",
    branchName: "科研",
    tier: 1,
    cost: 46,
    researchTimeSec: 276,
    needs: ["v32_res_04"],
    needsDetail: [
      { type: "tech", ref: "v32_res_04", note: "需先研究「火星大学」。" },
    ],
    desc: "材料分析中心成立，冶炼厂产量提升。",
    fx: {
      "smelterMul": 1.2,
      "researchMul": 1.05,
    },
    modifiers: [
      {
        key: "smelterMul",
        target: "prod.smelter",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "冶炼厂产量 ×1.2",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "科研速度 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-quake"],
    mitigatesDetail: [
      { disaster: "d32-quake", note: "缓解「火星震」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_06"],
    comboWith: [
      { tech: "v32_res_06", note: "与「水文地质」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "冶炼厂产量 ×1.2。",
      "科研速度 ×1.05。",
    ],
    researchCost: {
      tech: 46,
      credits: 230,
      timeSec: 276,
      note: "研究耗时 276 秒，另耗星币 230。",
    },
    levels: [
      { level: 1, cost: 46, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 92, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 184, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_06 水文地质 [科研·T1] 造价 50 科技点
  // 造价分析：本项 50 科技点，同档（T1）均价 44 点，本项为均价的 1.14×；研究耗时 300 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 240 科技点，占本系链总造价 6824 点的 4%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 400 铁当量，约等于 33.3 座采矿机 L1 的造价。
  // 效果分解：水厂产量 ×1.2（目标 prod.waterplant，mul运算）。
  // 效果分解：水 +2/分钟（目标 prod.waterPerMin，add运算）。
  // 效果分解：两项效果合计 水厂产量 ×1.2、水 +2/分钟；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 6/40 项，前置 「材料分析」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「科学方法」、「精密仪器」，造价分别为 30、34 点；本项 50 点，排第 6/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（waterplantMul）、加法叠加（waterAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_res_06": {
    id: "v32_res_06",
    name: "水文地质",
    icon: "💧",
    branch: "research",
    branchName: "科研",
    tier: 1,
    cost: 50,
    researchTimeSec: 300,
    needs: ["v32_res_05"],
    needsDetail: [
      { type: "tech", ref: "v32_res_05", note: "需先研究「材料分析」。" },
    ],
    desc: "水文地质普查完成，水厂产量提升。",
    fx: {
      "waterplantMul": 1.2,
      "waterAdd": 2,
    },
    modifiers: [
      {
        key: "waterplantMul",
        target: "prod.waterplant",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "水厂产量 ×1.2",
      },
      {
        key: "waterAdd",
        target: "prod.waterPerMin",
        op: "add",
        value: 2,
        unit: "/分钟",
        note: "水 +2/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-drought"],
    mitigatesDetail: [
      { disaster: "d32-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_07"],
    comboWith: [
      { tech: "v32_res_07", note: "与「农业实验田」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "水厂产量 ×1.2。",
      "水 +2/分钟。",
    ],
    researchCost: {
      tech: 50,
      credits: 250,
      timeSec: 300,
      note: "研究耗时 300 秒，另耗星币 250。",
    },
    levels: [
      { level: 1, cost: 50, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 100, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 200, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_07 农业实验田 [科研·T1] 造价 54 科技点
  // 造价分析：本项 54 科技点，同档（T1）均价 44 点，本项为均价的 1.23×；研究耗时 324 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 294 科技点，占本系链总造价 6824 点的 4%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 432 铁当量，约等于 36.0 座采矿机 L1 的造价。
  // 效果分解：温室产量 ×1.2（目标 prod.greenhouse，mul运算）。
  // 效果分解：食物产量 ×1.1（目标 prod.food，mul运算）。
  // 效果分解：两项效果合计 温室产量 ×1.2、食物产量 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 7/40 项，前置 「水文地质」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「科学方法」、「精密仪器」，造价分别为 30、34 点；本项 54 点，排第 7/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（greenhouseMul）、乘法叠加（foodMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_res_07": {
    id: "v32_res_07",
    name: "农业实验田",
    icon: "🌱",
    branch: "research",
    branchName: "科研",
    tier: 1,
    cost: 54,
    researchTimeSec: 324,
    needs: ["v32_res_06"],
    needsDetail: [
      { type: "tech", ref: "v32_res_06", note: "需先研究「水文地质」。" },
    ],
    desc: "实验田筛选高产作物，温室产量提升。",
    fx: {
      "greenhouseMul": 1.2,
      "foodMul": 1.1,
    },
    modifiers: [
      {
        key: "greenhouseMul",
        target: "prod.greenhouse",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "温室产量 ×1.2",
      },
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "食物产量 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-drought"],
    mitigatesDetail: [
      { disaster: "d32-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_08"],
    comboWith: [
      { tech: "v32_res_08", note: "与「自动化观测」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "温室产量 ×1.2。",
      "食物产量 ×1.1。",
    ],
    researchCost: {
      tech: 54,
      credits: 270,
      timeSec: 324,
      note: "研究耗时 324 秒，另耗星币 270。",
    },
    levels: [
      { level: 1, cost: 54, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 108, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 216, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_08 自动化观测 [科研·T1] 造价 58 科技点
  // 造价分析：本项 58 科技点，同档（T1）均价 44 点，本项为均价的 1.32×；研究耗时 348 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 352 科技点，占本系链总造价 6824 点的 5%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 464 铁当量，约等于 38.7 座采矿机 L1 的造价。
  // 效果分解：灾难预警时间 +10 秒（目标 sys.warnTime，add运算）。
  // 效果分解：科研速度 ×1.05（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 灾难预警时间 +10 秒、科研速度 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 8/40 项，前置 「农业实验田」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「科学方法」、「精密仪器」，造价分别为 30、34 点；本项 58 点，排第 8/8（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（warnAddSec）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "v32_res_08": {
    id: "v32_res_08",
    name: "自动化观测",
    icon: "🤖",
    branch: "research",
    branchName: "科研",
    tier: 1,
    cost: 58,
    researchTimeSec: 348,
    needs: ["v32_res_07"],
    needsDetail: [
      { type: "tech", ref: "v32_res_07", note: "需先研究「农业实验田」。" },
    ],
    desc: "自动化观测站组网，灾难预警时间延长。",
    fx: {
      "warnAddSec": 10,
      "researchMul": 1.05,
    },
    modifiers: [
      {
        key: "warnAddSec",
        target: "sys.warnTime",
        op: "add",
        value: 10,
        unit: "秒",
        note: "灾难预警时间 +10 秒",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "科研速度 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d32-meteor"],
    mitigatesDetail: [
      { disaster: "d32-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_09"],
    comboWith: [
      { tech: "v32_res_09", note: "与「量子纠错」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "灾难预警时间 +10 秒。",
      "科研速度 ×1.05。",
    ],
    researchCost: {
      tech: 58,
      credits: 290,
      timeSec: 348,
      note: "研究耗时 348 秒，另耗星币 290。",
    },
    levels: [
      { level: 1, cost: 58, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 116, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 232, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_09 量子纠错 [科研·T2] 造价 65 科技点
  // 造价分析：本项 65 科技点，同档（T2）均价 86 点，本项为均价的 0.76×；研究耗时 390 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 417 科技点，占本系链总造价 6824 点的 6%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 520 铁当量，约等于 43.3 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.2（目标 prod.research，mul运算）。
  // 效果分解：实验室科技产量 ×1.15（目标 prod.lab，mul运算）。
  // 效果分解：两项效果合计 科研速度 ×1.2、实验室科技产量 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 9/40 项，前置 「自动化观测」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「纳米材料」、「聚变约束」，造价分别为 71、77 点；本项 65 点，排第 1/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（researchMul）、乘法叠加（labMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_res_09": {
    id: "v32_res_09",
    name: "量子纠错",
    icon: "💻",
    branch: "research",
    branchName: "科研",
    tier: 2,
    cost: 65,
    researchTimeSec: 390,
    needs: ["v32_res_08"],
    needsDetail: [
      { type: "tech", ref: "v32_res_08", note: "需先研究「自动化观测」。" },
    ],
    desc: "量子计算机上线，科研速度大幅提升。",
    fx: {
      "researchMul": 1.2,
      "labMul": 1.15,
    },
    modifiers: [
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "科研速度 ×1.2",
      },
      {
        key: "labMul",
        target: "prod.lab",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "实验室科技产量 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_10"],
    comboWith: [
      { tech: "v32_res_10", note: "与「纳米材料」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.2。",
      "实验室科技产量 ×1.15。",
    ],
    researchCost: {
      tech: 65,
      credits: 325,
      timeSec: 390,
      note: "研究耗时 390 秒，另耗星币 325。",
    },
    levels: [
      { level: 1, cost: 65, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 130, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 260, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_10 纳米材料 [科研·T2] 造价 71 科技点
  // 造价分析：本项 71 科技点，同档（T2）均价 86 点，本项为均价的 0.83×；研究耗时 426 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 488 科技点，占本系链总造价 6824 点的 7%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 568 铁当量，约等于 47.3 座采矿机 L1 的造价。
  // 效果分解：建筑建造成本 ×0.9（目标 cost.build，mul运算）。
  // 效果分解：冶炼厂产量 ×1.15（目标 prod.smelter，mul运算）。
  // 效果分解：两项效果合计 建筑建造成本 ×0.9、冶炼厂产量 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 10/40 项，前置 「量子纠错」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子纠错」、「聚变约束」，造价分别为 65、77 点；本项 71 点，排第 2/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（buildCostMul）、乘法叠加（smelterMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「火星震」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_res_10": {
    id: "v32_res_10",
    name: "纳米材料",
    icon: "🧬",
    branch: "research",
    branchName: "科研",
    tier: 2,
    cost: 71,
    researchTimeSec: 426,
    needs: ["v32_res_09"],
    needsDetail: [
      { type: "tech", ref: "v32_res_09", note: "需先研究「量子纠错」。" },
    ],
    desc: "纳米材料量产，建筑建造成本下降。",
    fx: {
      "buildCostMul": 0.9,
      "smelterMul": 1.15,
    },
    modifiers: [
      {
        key: "buildCostMul",
        target: "cost.build",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "建筑建造成本 ×0.9",
      },
      {
        key: "smelterMul",
        target: "prod.smelter",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "冶炼厂产量 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-quake"],
    mitigatesDetail: [
      { disaster: "d32-quake", note: "缓解「火星震」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_11"],
    comboWith: [
      { tech: "v32_res_11", note: "与「聚变约束」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "建筑建造成本 ×0.9。",
      "冶炼厂产量 ×1.15。",
    ],
    researchCost: {
      tech: 71,
      credits: 355,
      timeSec: 426,
      note: "研究耗时 426 秒，另耗星币 355。",
    },
    levels: [
      { level: 1, cost: 71, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 142, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 284, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_11 聚变约束 [科研·T2] 造价 77 科技点
  // 造价分析：本项 77 科技点，同档（T2）均价 86 点，本项为均价的 0.90×；研究耗时 462 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 565 科技点，占本系链总造价 6824 点的 8%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 616 铁当量，约等于 51.3 座采矿机 L1 的造价。
  // 效果分解：聚变电站电力 ×1.3（目标 power.fusion，mul运算）。
  // 效果分解：科研速度 ×1.05（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 聚变电站电力 ×1.3、科研速度 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 11/40 项，前置 「纳米材料」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子纠错」、「纳米材料」，造价分别为 65、71 点；本项 77 点，排第 3/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（fusionMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_res_11": {
    id: "v32_res_11",
    name: "聚变约束",
    icon: "☀️",
    branch: "research",
    branchName: "科研",
    tier: 2,
    cost: 77,
    researchTimeSec: 462,
    needs: ["v32_res_10"],
    needsDetail: [
      { type: "tech", ref: "v32_res_10", note: "需先研究「纳米材料」。" },
    ],
    desc: "磁约束聚变稳定运行，聚变电站电力提升。",
    fx: {
      "fusionMul": 1.3,
      "researchMul": 1.05,
    },
    modifiers: [
      {
        key: "fusionMul",
        target: "power.fusion",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "聚变电站电力 ×1.3",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "科研速度 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_12"],
    comboWith: [
      { tech: "v32_res_12", note: "与「天文台」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "聚变电站电力 ×1.3。",
      "科研速度 ×1.05。",
    ],
    researchCost: {
      tech: 77,
      credits: 385,
      timeSec: 462,
      note: "研究耗时 462 秒，另耗星币 385。",
    },
    levels: [
      { level: 1, cost: 77, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 154, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 308, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_12 天文台 [科研·T2] 造价 83 科技点
  // 造价分析：本项 83 科技点，同档（T2）均价 86 点，本项为均价的 0.97×；研究耗时 498 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 648 科技点，占本系链总造价 6824 点的 9%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 664 铁当量，约等于 55.3 座采矿机 L1 的造价。
  // 效果分解：解锁天文台（目标 unlock.observatory，flag运算）。
  // 效果分解：科研速度 ×1.15（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 解锁天文台、科研速度 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 12/40 项，前置 「聚变约束」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子纠错」、「纳米材料」，造价分别为 65、71 点；本项 83 点，排第 4/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：开关解锁（unlockObservatory）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「天文台」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_res_12": {
    id: "v32_res_12",
    name: "天文台",
    icon: "🔭",
    branch: "research",
    branchName: "科研",
    tier: 2,
    cost: 83,
    researchTimeSec: 498,
    needs: ["v32_res_11"],
    needsDetail: [
      { type: "tech", ref: "v32_res_11", note: "需先研究「聚变约束」。" },
    ],
    desc: "天文台投入观测，科研速度提升。",
    fx: {
      "unlockObservatory": 1,
      "researchMul": 1.15,
    },
    modifiers: [
      {
        key: "unlockObservatory",
        target: "unlock.observatory",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁天文台",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "科研速度 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-observatory"],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-meteor"],
    mitigatesDetail: [
      { disaster: "d32-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_13"],
    comboWith: [
      { tech: "v32_res_13", note: "与「超深钻探」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁天文台。",
      "科研速度 ×1.15。",
    ],
    researchCost: {
      tech: 83,
      credits: 415,
      timeSec: 498,
      note: "研究耗时 498 秒，另耗星币 415。",
    },
    levels: [
      { level: 1, cost: 83, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 166, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 332, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_13 超深钻探 [科研·T2] 造价 89 科技点
  // 造价分析：本项 89 科技点，同档（T2）均价 86 点，本项为均价的 1.03×；研究耗时 534 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 737 科技点，占本系链总造价 6824 点的 11%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 712 铁当量，约等于 59.3 座采矿机 L1 的造价。
  // 效果分解：采矿机产量 ×1.3（目标 prod.miner，mul运算）。
  // 效果分解：铁矿 +3/分钟（目标 prod.ironPerMin，add运算）。
  // 效果分解：两项效果合计 采矿机产量 ×1.3、铁矿 +3/分钟；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 13/40 项，前置 「天文台」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子纠错」、「纳米材料」，造价分别为 65、71 点；本项 89 点，排第 5/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（minerMul）、加法叠加（ironAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「火星震」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_res_13": {
    id: "v32_res_13",
    name: "超深钻探",
    icon: "⛏️",
    branch: "research",
    branchName: "科研",
    tier: 2,
    cost: 89,
    researchTimeSec: 534,
    needs: ["v32_res_12"],
    needsDetail: [
      { type: "tech", ref: "v32_res_12", note: "需先研究「天文台」。" },
    ],
    desc: "超深钻井触及富矿层，采矿机产量提升。",
    fx: {
      "minerMul": 1.3,
      "ironAdd": 3,
    },
    modifiers: [
      {
        key: "minerMul",
        target: "prod.miner",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "采矿机产量 ×1.3",
      },
      {
        key: "ironAdd",
        target: "prod.ironPerMin",
        op: "add",
        value: 3,
        unit: "/分钟",
        note: "铁矿 +3/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-quake"],
    mitigatesDetail: [
      { disaster: "d32-quake", note: "缓解「火星震」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_14"],
    comboWith: [
      { tech: "v32_res_14", note: "与「基因测序」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "采矿机产量 ×1.3。",
      "铁矿 +3/分钟。",
    ],
    researchCost: {
      tech: 89,
      credits: 445,
      timeSec: 534,
      note: "研究耗时 534 秒，另耗星币 445。",
    },
    levels: [
      { level: 1, cost: 89, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 178, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 356, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_14 基因测序 [科研·T2] 造价 95 科技点
  // 造价分析：本项 95 科技点，同档（T2）均价 86 点，本项为均价的 1.10×；研究耗时 570 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 832 科技点，占本系链总造价 6824 点的 12%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 760 铁当量，约等于 63.3 座采矿机 L1 的造价。
  // 效果分解：人口增长速度 ×1.15（目标 pop.growth，mul运算）。
  // 效果分解：科研速度 ×1.08（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 人口增长速度 ×1.15、科研速度 ×1.08；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 14/40 项，前置 「超深钻探」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子纠错」、「纳米材料」，造价分别为 65、71 点；本项 95 点，排第 6/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（popGrowthMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_res_14": {
    id: "v32_res_14",
    name: "基因测序",
    icon: "🧫",
    branch: "research",
    branchName: "科研",
    tier: 2,
    cost: 95,
    researchTimeSec: 570,
    needs: ["v32_res_13"],
    needsDetail: [
      { type: "tech", ref: "v32_res_13", note: "需先研究「超深钻探」。" },
    ],
    desc: "全民基因测序完成，人口增长速度提升。",
    fx: {
      "popGrowthMul": 1.15,
      "researchMul": 1.08,
    },
    modifiers: [
      {
        key: "popGrowthMul",
        target: "pop.growth",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "人口增长速度 ×1.15",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.08,
        unit: "倍",
        note: "科研速度 ×1.08",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_15"],
    comboWith: [
      { tech: "v32_res_15", note: "与「大气采样」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口增长速度 ×1.15。",
      "科研速度 ×1.08。",
    ],
    researchCost: {
      tech: 95,
      credits: 475,
      timeSec: 570,
      note: "研究耗时 570 秒，另耗星币 475。",
    },
    levels: [
      { level: 1, cost: 95, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 190, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 380, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_15 大气采样 [科研·T2] 造价 101 科技点
  // 造价分析：本项 101 科技点，同档（T2）均价 86 点，本项为均价的 1.17×；研究耗时 606 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 933 科技点，占本系链总造价 6824 点的 14%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 808 铁当量，约等于 67.3 座采矿机 L1 的造价。
  // 效果分解：行星改造进度 +2 点（目标 planet.terraform，add运算）。
  // 效果分解：科研速度 ×1.05（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 行星改造进度 +2 点、科研速度 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 15/40 项，前置 「基因测序」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子纠错」、「纳米材料」，造价分别为 65、71 点；本项 101 点，排第 7/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：加法叠加（terraformAdd）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「特大沙尘暴」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_res_15": {
    id: "v32_res_15",
    name: "大气采样",
    icon: "🌫️",
    branch: "research",
    branchName: "科研",
    tier: 2,
    cost: 101,
    researchTimeSec: 606,
    needs: ["v32_res_14"],
    needsDetail: [
      { type: "tech", ref: "v32_res_14", note: "需先研究「基因测序」。" },
    ],
    desc: "大气采样分析完成，行星改造进度推进。",
    fx: {
      "terraformAdd": 2,
      "researchMul": 1.05,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 2,
        unit: "点",
        note: "行星改造进度 +2 点",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "科研速度 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-sandstorm"],
    mitigatesDetail: [
      { disaster: "d32-sandstorm", note: "缓解「特大沙尘暴」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_16"],
    comboWith: [
      { tech: "v32_res_16", note: "与「光伏新材」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +2 点。",
      "科研速度 ×1.05。",
    ],
    researchCost: {
      tech: 101,
      credits: 505,
      timeSec: 606,
      note: "研究耗时 606 秒，另耗星币 505。",
    },
    levels: [
      { level: 1, cost: 101, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 202, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 404, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_16 光伏新材 [科研·T2] 造价 107 科技点
  // 造价分析：本项 107 科技点，同档（T2）均价 86 点，本项为均价的 1.24×；研究耗时 642 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1040 科技点，占本系链总造价 6824 点的 15%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 856 铁当量，约等于 71.3 座采矿机 L1 的造价。
  // 效果分解：太阳能板电力 ×1.3（目标 power.solar，mul运算）。
  // 效果分解：科研速度 ×1.05（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 太阳能板电力 ×1.3、科研速度 ×1.05；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 16/40 项，前置 「大气采样」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子纠错」、「纳米材料」，造价分别为 65、71 点；本项 107 点，排第 8/8（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥20 人；殖民地站稳脚跟后研究。
  // 叠加说明：乘法叠加（solarMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「特大沙尘暴」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期前置，顺着链条一路点出即可。
  "v32_res_16": {
    id: "v32_res_16",
    name: "光伏新材",
    icon: "🔆",
    branch: "research",
    branchName: "科研",
    tier: 2,
    cost: 107,
    researchTimeSec: 642,
    needs: ["v32_res_15"],
    needsDetail: [
      { type: "tech", ref: "v32_res_15", note: "需先研究「大气采样」。" },
    ],
    desc: "钙钛矿光伏量产，太阳能板电力提升。",
    fx: {
      "solarMul": 1.3,
      "researchMul": 1.05,
    },
    modifiers: [
      {
        key: "solarMul",
        target: "power.solar",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "太阳能板电力 ×1.3",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "科研速度 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d32-sandstorm"],
    mitigatesDetail: [
      { disaster: "d32-sandstorm", note: "缓解「特大沙尘暴」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_17"],
    comboWith: [
      { tech: "v32_res_17", note: "与「仿生材料」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "太阳能板电力 ×1.3。",
      "科研速度 ×1.05。",
    ],
    researchCost: {
      tech: 107,
      credits: 535,
      timeSec: 642,
      note: "研究耗时 642 秒，另耗星币 535。",
    },
    levels: [
      { level: 1, cost: 107, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 214, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 428, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_17 仿生材料 [科研·T3] 造价 115 科技点
  // 造价分析：本项 115 科技点，同档（T3）均价 143 点，本项为均价的 0.80×；研究耗时 690 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1155 科技点，占本系链总造价 6824 点的 17%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 920 铁当量，约等于 76.7 座采矿机 L1 的造价。
  // 效果分解：建筑维修成本 ×0.85（目标 cost.repair，mul运算）。
  // 效果分解：建筑建造成本 ×0.95（目标 cost.build，mul运算）。
  // 效果分解：两项效果合计 建筑维修成本 ×0.85、建筑建造成本 ×0.95；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 17/40 项，前置 「光伏新材」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「生态工程」、「基因档案馆」，造价分别为 123、131 点；本项 115 点，排第 1/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（repairCostMul）、乘法叠加（buildCostMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「火星震」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_res_17": {
    id: "v32_res_17",
    name: "仿生材料",
    icon: "🦾",
    branch: "research",
    branchName: "科研",
    tier: 3,
    cost: 115,
    researchTimeSec: 690,
    needs: ["v32_res_16"],
    needsDetail: [
      { type: "tech", ref: "v32_res_16", note: "需先研究「光伏新材」。" },
    ],
    desc: "仿生材料替代进口，建筑维修成本下降。",
    fx: {
      "repairCostMul": 0.85,
      "buildCostMul": 0.95,
    },
    modifiers: [
      {
        key: "repairCostMul",
        target: "cost.repair",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "建筑维修成本 ×0.85",
      },
      {
        key: "buildCostMul",
        target: "cost.build",
        op: "mul",
        value: 0.95,
        unit: "倍",
        note: "建筑建造成本 ×0.95",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-quake"],
    mitigatesDetail: [
      { disaster: "d32-quake", note: "缓解「火星震」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_18"],
    comboWith: [
      { tech: "v32_res_18", note: "与「生态工程」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "建筑维修成本 ×0.85。",
      "建筑建造成本 ×0.95。",
    ],
    researchCost: {
      tech: 115,
      credits: 575,
      timeSec: 690,
      note: "研究耗时 690 秒，另耗星币 575。",
    },
    levels: [
      { level: 1, cost: 115, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 230, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 460, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_18 生态工程 [科研·T3] 造价 123 科技点
  // 造价分析：本项 123 科技点，同档（T3）均价 143 点，本项为均价的 0.86×；研究耗时 738 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1278 科技点，占本系链总造价 6824 点的 19%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 984 铁当量，约等于 82.0 座采矿机 L1 的造价。
  // 效果分解：生态圈效果 ×1.3（目标 prod.eco，mul运算）。
  // 效果分解：食物产量 ×1.1（目标 prod.food，mul运算）。
  // 效果分解：两项效果合计 生态圈效果 ×1.3、食物产量 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 18/40 项，前置 「仿生材料」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「仿生材料」、「基因档案馆」，造价分别为 115、131 点；本项 123 点，排第 2/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（ecoMul）、乘法叠加（foodMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_res_18": {
    id: "v32_res_18",
    name: "生态工程",
    icon: "🌿",
    branch: "research",
    branchName: "科研",
    tier: 3,
    cost: 123,
    researchTimeSec: 738,
    needs: ["v32_res_17"],
    needsDetail: [
      { type: "tech", ref: "v32_res_17", note: "需先研究「仿生材料」。" },
    ],
    desc: "闭环生态工程升级，生态圈效果提升。",
    fx: {
      "ecoMul": 1.3,
      "foodMul": 1.1,
    },
    modifiers: [
      {
        key: "ecoMul",
        target: "prod.eco",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "生态圈效果 ×1.3",
      },
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "食物产量 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-drought"],
    mitigatesDetail: [
      { disaster: "d32-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_19"],
    comboWith: [
      { tech: "v32_res_19", note: "与「基因档案馆」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "生态圈效果 ×1.3。",
      "食物产量 ×1.1。",
    ],
    researchCost: {
      tech: 123,
      credits: 615,
      timeSec: 738,
      note: "研究耗时 738 秒，另耗星币 615。",
    },
    levels: [
      { level: 1, cost: 123, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 246, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 492, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_19 基因档案馆 [科研·T3] 造价 131 科技点
  // 造价分析：本项 131 科技点，同档（T3）均价 143 点，本项为均价的 0.92×；研究耗时 786 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1409 科技点，占本系链总造价 6824 点的 21%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1048 铁当量，约等于 87.3 座采矿机 L1 的造价。
  // 效果分解：解锁基因档案馆（目标 unlock.archive，flag运算）。
  // 效果分解：科研速度 ×1.15（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 解锁基因档案馆、科研速度 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 19/40 项，前置 「生态工程」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「仿生材料」、「生态工程」，造价分别为 115、123 点；本项 131 点，排第 3/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：开关解锁（unlockArchive）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「基因档案馆」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_res_19": {
    id: "v32_res_19",
    name: "基因档案馆",
    icon: "🧬",
    branch: "research",
    branchName: "科研",
    tier: 3,
    cost: 131,
    researchTimeSec: 786,
    needs: ["v32_res_18"],
    needsDetail: [
      { type: "tech", ref: "v32_res_18", note: "需先研究「生态工程」。" },
    ],
    desc: "基因档案馆建成，科研速度提升。",
    fx: {
      "unlockArchive": 1,
      "researchMul": 1.15,
    },
    modifiers: [
      {
        key: "unlockArchive",
        target: "unlock.archive",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁基因档案馆",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "科研速度 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-archive"],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_20"],
    comboWith: [
      { tech: "v32_res_20", note: "与「低温休眠」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁基因档案馆。",
      "科研速度 ×1.15。",
    ],
    researchCost: {
      tech: 131,
      credits: 655,
      timeSec: 786,
      note: "研究耗时 786 秒，另耗星币 655。",
    },
    levels: [
      { level: 1, cost: 131, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 262, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 524, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_20 低温休眠 [科研·T3] 造价 139 科技点
  // 造价分析：本项 139 科技点，同档（T3）均价 143 点，本项为均价的 0.97×；研究耗时 834 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1548 科技点，占本系链总造价 6824 点的 23%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1112 铁当量，约等于 92.7 座采矿机 L1 的造价。
  // 效果分解：人口上限 +30 人（目标 pop.cap，add运算）。
  // 效果分解：人口增长速度 ×1.1（目标 pop.growth，mul运算）。
  // 效果分解：两项效果合计 人口上限 +30 人、人口增长速度 ×1.1；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 20/40 项，前置 「基因档案馆」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「仿生材料」、「生态工程」，造价分别为 115、123 点；本项 139 点，排第 4/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：加法叠加（popCapAdd）、乘法叠加（popGrowthMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_res_20": {
    id: "v32_res_20",
    name: "低温休眠",
    icon: "❄️",
    branch: "research",
    branchName: "科研",
    tier: 3,
    cost: 139,
    researchTimeSec: 834,
    needs: ["v32_res_19"],
    needsDetail: [
      { type: "tech", ref: "v32_res_19", note: "需先研究「基因档案馆」。" },
    ],
    desc: "低温休眠技术成熟，人口上限提升。",
    fx: {
      "popCapAdd": 30,
      "popGrowthMul": 1.1,
    },
    modifiers: [
      {
        key: "popCapAdd",
        target: "pop.cap",
        op: "add",
        value: 30,
        unit: "人",
        note: "人口上限 +30 人",
      },
      {
        key: "popGrowthMul",
        target: "pop.growth",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "人口增长速度 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_21"],
    comboWith: [
      { tech: "v32_res_21", note: "与「辐射防护」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口上限 +30 人。",
      "人口增长速度 ×1.1。",
    ],
    researchCost: {
      tech: 139,
      credits: 695,
      timeSec: 834,
      note: "研究耗时 834 秒，另耗星币 695。",
    },
    levels: [
      { level: 1, cost: 139, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 278, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 556, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_21 辐射防护 [科研·T3] 造价 147 科技点
  // 造价分析：本项 147 科技点，同档（T3）均价 143 点，本项为均价的 1.03×；研究耗时 882 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1695 科技点，占本系链总造价 6824 点的 25%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1176 铁当量，约等于 98.0 座采矿机 L1 的造价。
  // 效果分解：辐射伤害 ×0.7（目标 risk.radiation，mul运算）。
  // 效果分解：氧气供给 +5 点（目标 life.oxygen，add运算）。
  // 效果分解：两项效果合计 辐射伤害 ×0.7、氧气供给 +5 点；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 21/40 项，前置 「低温休眠」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「仿生材料」、「生态工程」，造价分别为 115、123 点；本项 147 点，排第 5/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（radiationMul）、加法叠加（oxygenAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「辐射泄漏」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_res_21": {
    id: "v32_res_21",
    name: "辐射防护",
    icon: "☢️",
    branch: "research",
    branchName: "科研",
    tier: 3,
    cost: 147,
    researchTimeSec: 882,
    needs: ["v32_res_20"],
    needsDetail: [
      { type: "tech", ref: "v32_res_20", note: "需先研究「低温休眠」。" },
    ],
    desc: "新型防辐射材料问世，辐射伤害下降。",
    fx: {
      "radiationMul": 0.7,
      "oxygenAdd": 5,
    },
    modifiers: [
      {
        key: "radiationMul",
        target: "risk.radiation",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "辐射伤害 ×0.7",
      },
      {
        key: "oxygenAdd",
        target: "life.oxygen",
        op: "add",
        value: 5,
        unit: "点",
        note: "氧气供给 +5 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-radiation"],
    mitigatesDetail: [
      { disaster: "d32-radiation", note: "缓解「辐射泄漏」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_22"],
    comboWith: [
      { tech: "v32_res_22", note: "与「陨石预警」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "辐射伤害 ×0.7。",
      "氧气供给 +5 点。",
    ],
    researchCost: {
      tech: 147,
      credits: 735,
      timeSec: 882,
      note: "研究耗时 882 秒，另耗星币 735。",
    },
    levels: [
      { level: 1, cost: 147, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 294, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 588, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_22 陨石预警 [科研·T3] 造价 155 科技点
  // 造价分析：本项 155 科技点，同档（T3）均价 143 点，本项为均价的 1.08×；研究耗时 930 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1850 科技点，占本系链总造价 6824 点的 27%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1240 铁当量，约等于 103.3 座采矿机 L1 的造价。
  // 效果分解：陨石伤害 ×0.7（目标 risk.meteorDamage，mul运算）。
  // 效果分解：灾难预警时间 +15 秒（目标 sys.warnTime，add运算）。
  // 效果分解：两项效果合计 陨石伤害 ×0.7、灾难预警时间 +15 秒；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 22/40 项，前置 「辐射防护」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「仿生材料」、「生态工程」，造价分别为 115、123 点；本项 155 点，排第 6/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（meteorMul）、加法叠加（warnAddSec）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_res_22": {
    id: "v32_res_22",
    name: "陨石预警",
    icon: "🛰️",
    branch: "research",
    branchName: "科研",
    tier: 3,
    cost: 155,
    researchTimeSec: 930,
    needs: ["v32_res_21"],
    needsDetail: [
      { type: "tech", ref: "v32_res_21", note: "需先研究「辐射防护」。" },
    ],
    desc: "陨石预警网升级，陨石伤害下降。",
    fx: {
      "meteorMul": 0.7,
      "warnAddSec": 15,
    },
    modifiers: [
      {
        key: "meteorMul",
        target: "risk.meteorDamage",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "陨石伤害 ×0.7",
      },
      {
        key: "warnAddSec",
        target: "sys.warnTime",
        op: "add",
        value: 15,
        unit: "秒",
        note: "灾难预警时间 +15 秒",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-meteor"],
    mitigatesDetail: [
      { disaster: "d32-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_23"],
    comboWith: [
      { tech: "v32_res_23", note: "与「水循环3.0」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "陨石伤害 ×0.7。",
      "灾难预警时间 +15 秒。",
    ],
    researchCost: {
      tech: 155,
      credits: 775,
      timeSec: 930,
      note: "研究耗时 930 秒，另耗星币 775。",
    },
    levels: [
      { level: 1, cost: 155, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 310, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 620, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_23 水循环3.0 [科研·T3] 造价 163 科技点
  // 造价分析：本项 163 科技点，同档（T3）均价 143 点，本项为均价的 1.14×；研究耗时 978 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2013 科技点，占本系链总造价 6824 点的 29%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1304 铁当量，约等于 108.7 座采矿机 L1 的造价。
  // 效果分解：人口耗水 ×0.8（目标 pop.waterUse，mul运算）。
  // 效果分解：水厂产量 ×1.15（目标 prod.waterplant，mul运算）。
  // 效果分解：两项效果合计 人口耗水 ×0.8、水厂产量 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 23/40 项，前置 「陨石预警」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「仿生材料」、「生态工程」，造价分别为 115、123 点；本项 163 点，排第 7/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（waterUseMul）、乘法叠加（waterplantMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_res_23": {
    id: "v32_res_23",
    name: "水循环3.0",
    icon: "♻️",
    branch: "research",
    branchName: "科研",
    tier: 3,
    cost: 163,
    researchTimeSec: 978,
    needs: ["v32_res_22"],
    needsDetail: [
      { type: "tech", ref: "v32_res_22", note: "需先研究「陨石预警」。" },
    ],
    desc: "水循环效率再突破，人口耗水下降。",
    fx: {
      "waterUseMul": 0.8,
      "waterplantMul": 1.15,
    },
    modifiers: [
      {
        key: "waterUseMul",
        target: "pop.waterUse",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "人口耗水 ×0.8",
      },
      {
        key: "waterplantMul",
        target: "prod.waterplant",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "水厂产量 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-drought"],
    mitigatesDetail: [
      { disaster: "d32-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_24"],
    comboWith: [
      { tech: "v32_res_24", note: "与「合成食品」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口耗水 ×0.8。",
      "水厂产量 ×1.15。",
    ],
    researchCost: {
      tech: 163,
      credits: 815,
      timeSec: 978,
      note: "研究耗时 978 秒，另耗星币 815。",
    },
    levels: [
      { level: 1, cost: 163, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 326, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 652, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_24 合成食品 [科研·T3] 造价 171 科技点
  // 造价分析：本项 171 科技点，同档（T3）均价 143 点，本项为均价的 1.20×；研究耗时 1026 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2184 科技点，占本系链总造价 6824 点的 32%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1368 铁当量，约等于 114.0 座采矿机 L1 的造价。
  // 效果分解：人口耗食物 ×0.8（目标 pop.foodUse，mul运算）。
  // 效果分解：食物产量 ×1.15（目标 prod.food，mul运算）。
  // 效果分解：两项效果合计 人口耗食物 ×0.8、食物产量 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 24/40 项，前置 「水循环3.0」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「仿生材料」、「生态工程」，造价分别为 115、123 点；本项 171 点，排第 8/8（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥50 人；中期核心科技，优先补齐前置。
  // 叠加说明：乘法叠加（foodUseMul）、乘法叠加（foodMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：中期核心，成型后收益明显，建议优先。
  "v32_res_24": {
    id: "v32_res_24",
    name: "合成食品",
    icon: "🍔",
    branch: "research",
    branchName: "科研",
    tier: 3,
    cost: 171,
    researchTimeSec: 1026,
    needs: ["v32_res_23"],
    needsDetail: [
      { type: "tech", ref: "v32_res_23", note: "需先研究「水循环3.0」。" },
    ],
    desc: "合成食品口感达标，人口耗食物下降。",
    fx: {
      "foodUseMul": 0.8,
      "foodMul": 1.15,
    },
    modifiers: [
      {
        key: "foodUseMul",
        target: "pop.foodUse",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "人口耗食物 ×0.8",
      },
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "食物产量 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 50,
      buildings: [],
      wonders: [],
      note: "需人口 ≥50 人，无建筑要求。",
    },
    mitigates: ["d32-drought"],
    mitigatesDetail: [
      { disaster: "d32-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_25"],
    comboWith: [
      { tech: "v32_res_25", note: "与「量子实验室」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口耗食物 ×0.8。",
      "食物产量 ×1.15。",
    ],
    researchCost: {
      tech: 171,
      credits: 855,
      timeSec: 1026,
      note: "研究耗时 1026 秒，另耗星币 855。",
    },
    levels: [
      { level: 1, cost: 171, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 342, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 684, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_25 量子实验室 [科研·T4] 造价 185 科技点
  // 造价分析：本项 185 科技点，同档（T4）均价 227 点，本项为均价的 0.81×；研究耗时 1110 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2369 科技点，占本系链总造价 6824 点的 35%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1480 铁当量，约等于 123.3 座采矿机 L1 的造价。
  // 效果分解：解锁量子实验室（目标 unlock.quantumLab，flag运算）。
  // 效果分解：科研速度 ×1.25（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 解锁量子实验室、科研速度 ×1.25；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 25/40 项，前置 「合成食品」、旧科技「贸易协定」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「氦3聚变堆」、「深空推进」，造价分别为 197、209 点；本项 185 点，排第 1/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：开关解锁（unlockQuantumLab）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「量子实验室」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_res_25": {
    id: "v32_res_25",
    name: "量子实验室",
    icon: "⚛️",
    branch: "research",
    branchName: "科研",
    tier: 4,
    cost: 185,
    researchTimeSec: 1110,
    needs: ["v32_res_24", "t-surv-8"],
    needsDetail: [
      { type: "tech", ref: "v32_res_24", note: "需先研究「合成食品」。" },
      { type: "tech", ref: "t-surv-8", note: "需先研究旧科技「贸易协定」。" },
    ],
    desc: "量子实验室落成，科研速度大幅提升。",
    fx: {
      "unlockQuantumLab": 1,
      "researchMul": 1.25,
    },
    modifiers: [
      {
        key: "unlockQuantumLab",
        target: "unlock.quantumLab",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁量子实验室",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "科研速度 ×1.25",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-quantumlab"],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_26"],
    comboWith: [
      { tech: "v32_res_26", note: "与「氦3聚变堆」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁量子实验室。",
      "科研速度 ×1.25。",
    ],
    researchCost: {
      tech: 185,
      credits: 925,
      timeSec: 1110,
      note: "研究耗时 1110 秒，另耗星币 925。",
    },
    levels: [
      { level: 1, cost: 185, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 370, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 740, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_26 氦3聚变堆 [科研·T4] 造价 197 科技点
  // 造价分析：本项 197 科技点，同档（T4）均价 227 点，本项为均价的 0.87×；研究耗时 1182 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2566 科技点，占本系链总造价 6824 点的 38%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1576 铁当量，约等于 131.3 座采矿机 L1 的造价。
  // 效果分解：聚变电站电力 ×1.5（目标 power.fusion，mul运算）。
  // 效果分解：轨道电力 +30（目标 power.orbital，add运算）。
  // 效果分解：两项效果合计 聚变电站电力 ×1.5、轨道电力 +30；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 26/40 项，前置 「量子实验室」、旧科技「量子计算」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子实验室」、「深空推进」，造价分别为 185、209 点；本项 197 点，排第 2/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（fusionMul）、加法叠加（orbitalPowerAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_res_26": {
    id: "v32_res_26",
    name: "氦3聚变堆",
    icon: "🌌",
    branch: "research",
    branchName: "科研",
    tier: 4,
    cost: 197,
    researchTimeSec: 1182,
    needs: ["v32_res_25", "t-prod-6"],
    needsDetail: [
      { type: "tech", ref: "v32_res_25", note: "需先研究「量子实验室」。" },
      { type: "tech", ref: "t-prod-6", note: "需先研究旧科技「量子计算」。" },
    ],
    desc: "氦3聚变堆并网，聚变电站电力大幅提升。",
    fx: {
      "fusionMul": 1.5,
      "orbitalPowerAdd": 30,
    },
    modifiers: [
      {
        key: "fusionMul",
        target: "power.fusion",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "聚变电站电力 ×1.5",
      },
      {
        key: "orbitalPowerAdd",
        target: "power.orbital",
        op: "add",
        value: 30,
        unit: "电",
        note: "轨道电力 +30",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_27"],
    comboWith: [
      { tech: "v32_res_27", note: "与「深空推进」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "聚变电站电力 ×1.5。",
      "轨道电力 +30。",
    ],
    researchCost: {
      tech: 197,
      credits: 985,
      timeSec: 1182,
      note: "研究耗时 1182 秒，另耗星币 985。",
    },
    levels: [
      { level: 1, cost: 197, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 394, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 788, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_27 深空推进 [科研·T4] 造价 209 科技点
  // 造价分析：本项 209 科技点，同档（T4）均价 227 点，本项为均价的 0.92×；研究耗时 1254 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2775 科技点，占本系链总造价 6824 点的 41%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1672 铁当量，约等于 139.3 座采矿机 L1 的造价。
  // 效果分解：舰船航速 ×1.3（目标 fleet.speed，mul运算）。
  // 效果分解：发射花费 ×0.9（目标 cost.launch，mul运算）。
  // 效果分解：两项效果合计 舰船航速 ×1.3、发射花费 ×0.9；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 27/40 项，前置 「氦3聚变堆」、旧科技「星际通讯」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子实验室」、「氦3聚变堆」，造价分别为 185、197 点；本项 209 点，排第 3/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（shipSpeedMul）、乘法叠加（launchCostMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_res_27": {
    id: "v32_res_27",
    name: "深空推进",
    icon: "🚀",
    branch: "research",
    branchName: "科研",
    tier: 4,
    cost: 209,
    researchTimeSec: 1254,
    needs: ["v32_res_26", "t-orb-9"],
    needsDetail: [
      { type: "tech", ref: "v32_res_26", note: "需先研究「氦3聚变堆」。" },
      { type: "tech", ref: "t-orb-9", note: "需先研究旧科技「星际通讯」。" },
    ],
    desc: "离子推进效率翻倍，舰船航速提升。",
    fx: {
      "shipSpeedMul": 1.3,
      "launchCostMul": 0.9,
    },
    modifiers: [
      {
        key: "shipSpeedMul",
        target: "fleet.speed",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "舰船航速 ×1.3",
      },
      {
        key: "launchCostMul",
        target: "cost.launch",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "发射花费 ×0.9",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-meteor"],
    mitigatesDetail: [
      { disaster: "d32-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_28"],
    comboWith: [
      { tech: "v32_res_28", note: "与「生物实验室」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "舰船航速 ×1.3。",
      "发射花费 ×0.9。",
    ],
    researchCost: {
      tech: 209,
      credits: 1045,
      timeSec: 1254,
      note: "研究耗时 1254 秒，另耗星币 1045。",
    },
    levels: [
      { level: 1, cost: 209, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 418, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 836, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_28 生物实验室 [科研·T4] 造价 221 科技点
  // 造价分析：本项 221 科技点，同档（T4）均价 227 点，本项为均价的 0.97×；研究耗时 1326 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2996 科技点，占本系链总造价 6824 点的 44%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1768 铁当量，约等于 147.3 座采矿机 L1 的造价。
  // 效果分解：解锁生物实验室（目标 unlock.bioLab，flag运算）。
  // 效果分解：人口增长速度 ×1.2（目标 pop.growth，mul运算）。
  // 效果分解：两项效果合计 解锁生物实验室、人口增长速度 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 28/40 项，前置 「深空推进」、旧科技「氦3聚变」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子实验室」、「氦3聚变堆」，造价分别为 185、197 点；本项 221 点，排第 4/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：开关解锁（unlockBioLab）、乘法叠加（popGrowthMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：解锁 v32 建筑「生物实验室」，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_res_28": {
    id: "v32_res_28",
    name: "生物实验室",
    icon: "🧫",
    branch: "research",
    branchName: "科研",
    tier: 4,
    cost: 221,
    researchTimeSec: 1326,
    needs: ["v32_res_27", "t-orb-12"],
    needsDetail: [
      { type: "tech", ref: "v32_res_27", note: "需先研究「深空推进」。" },
      { type: "tech", ref: "t-orb-12", note: "需先研究旧科技「氦3聚变」。" },
    ],
    desc: "生物实验室落成，人口增长速度提升。",
    fx: {
      "unlockBioLab": 1,
      "popGrowthMul": 1.2,
    },
    modifiers: [
      {
        key: "unlockBioLab",
        target: "unlock.bioLab",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁生物实验室",
      },
      {
        key: "popGrowthMul",
        target: "pop.growth",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "人口增长速度 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: ["b32-biolab"],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_29"],
    comboWith: [
      { tech: "v32_res_29", note: "与「气候改造」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁生物实验室。",
      "人口增长速度 ×1.2。",
    ],
    researchCost: {
      tech: 221,
      credits: 1105,
      timeSec: 1326,
      note: "研究耗时 1326 秒，另耗星币 1105。",
    },
    levels: [
      { level: 1, cost: 221, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 442, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 884, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_29 气候改造 [科研·T4] 造价 233 科技点
  // 造价分析：本项 233 科技点，同档（T4）均价 227 点，本项为均价的 1.03×；研究耗时 1398 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 3229 科技点，占本系链总造价 6824 点的 47%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1864 铁当量，约等于 155.3 座采矿机 L1 的造价。
  // 效果分解：行星改造进度 +5 点（目标 planet.terraform，add运算）。
  // 效果分解：生态圈效果 ×1.2（目标 prod.eco，mul运算）。
  // 效果分解：两项效果合计 行星改造进度 +5 点、生态圈效果 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 29/40 项，前置 「生物实验室」、旧科技「氦3精炼」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子实验室」、「氦3聚变堆」，造价分别为 185、197 点；本项 233 点，排第 5/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：加法叠加（terraformAdd）、乘法叠加（ecoMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「特大沙尘暴」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_res_29": {
    id: "v32_res_29",
    name: "气候改造",
    icon: "🌍",
    branch: "research",
    branchName: "科研",
    tier: 4,
    cost: 233,
    researchTimeSec: 1398,
    needs: ["v32_res_28", "t-prod-13"],
    needsDetail: [
      { type: "tech", ref: "v32_res_28", note: "需先研究「生物实验室」。" },
      { type: "tech", ref: "t-prod-13", note: "需先研究旧科技「氦3精炼」。" },
    ],
    desc: "气候改造工程启动，行星改造进度大幅推进。",
    fx: {
      "terraformAdd": 5,
      "ecoMul": 1.2,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 5,
        unit: "点",
        note: "行星改造进度 +5 点",
      },
      {
        key: "ecoMul",
        target: "prod.eco",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "生态圈效果 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-sandstorm"],
    mitigatesDetail: [
      { disaster: "d32-sandstorm", note: "缓解「特大沙尘暴」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_30"],
    comboWith: [
      { tech: "v32_res_30", note: "与「纳米机器人」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +5 点。",
      "生态圈效果 ×1.2。",
    ],
    researchCost: {
      tech: 233,
      credits: 1165,
      timeSec: 1398,
      note: "研究耗时 1398 秒，另耗星币 1165。",
    },
    levels: [
      { level: 1, cost: 233, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 466, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 932, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_30 纳米机器人 [科研·T4] 造价 245 科技点
  // 造价分析：本项 245 科技点，同档（T4）均价 227 点，本项为均价的 1.08×；研究耗时 1470 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 3474 科技点，占本系链总造价 6824 点的 51%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1960 铁当量，约等于 163.3 座采矿机 L1 的造价。
  // 效果分解：设备老化速度 ×0.8（目标 sys.aging，mul运算）。
  // 效果分解：建筑维修成本 ×0.9（目标 cost.repair，mul运算）。
  // 效果分解：两项效果合计 设备老化速度 ×0.8、建筑维修成本 ×0.9；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 30/40 项，前置 「气候改造」、旧科技「火星之子」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子实验室」、「氦3聚变堆」，造价分别为 185、197 点；本项 245 点，排第 6/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（agingMul）、乘法叠加（repairCostMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「火星震」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_res_30": {
    id: "v32_res_30",
    name: "纳米机器人",
    icon: "🤖",
    branch: "research",
    branchName: "科研",
    tier: 4,
    cost: 245,
    researchTimeSec: 1470,
    needs: ["v32_res_29", "t-surv-10"],
    needsDetail: [
      { type: "tech", ref: "v32_res_29", note: "需先研究「气候改造」。" },
      { type: "tech", ref: "t-surv-10", note: "需先研究旧科技「火星之子」。" },
    ],
    desc: "医疗纳米机器人普及，设备老化速度下降。",
    fx: {
      "agingMul": 0.8,
      "repairCostMul": 0.9,
    },
    modifiers: [
      {
        key: "agingMul",
        target: "sys.aging",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "设备老化速度 ×0.8",
      },
      {
        key: "repairCostMul",
        target: "cost.repair",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "建筑维修成本 ×0.9",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-quake"],
    mitigatesDetail: [
      { disaster: "d32-quake", note: "缓解「火星震」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_31"],
    comboWith: [
      { tech: "v32_res_31", note: "与「引力波探测」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "设备老化速度 ×0.8。",
      "建筑维修成本 ×0.9。",
    ],
    researchCost: {
      tech: 245,
      credits: 1225,
      timeSec: 1470,
      note: "研究耗时 1470 秒，另耗星币 1225。",
    },
    levels: [
      { level: 1, cost: 245, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 490, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 980, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_31 引力波探测 [科研·T4] 造价 257 科技点
  // 造价分析：本项 257 科技点，同档（T4）均价 227 点，本项为均价的 1.13×；研究耗时 1542 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 3731 科技点，占本系链总造价 6824 点的 55%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2056 铁当量，约等于 171.3 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.2（目标 prod.research，mul运算）。
  // 效果分解：灾难预警时间 +15 秒（目标 sys.warnTime，add运算）。
  // 效果分解：两项效果合计 科研速度 ×1.2、灾难预警时间 +15 秒；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 31/40 项，前置 「纳米机器人」、旧科技「奇点」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子实验室」、「氦3聚变堆」，造价分别为 185、197 点；本项 257 点，排第 7/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（researchMul）、加法叠加（warnAddSec）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_res_31": {
    id: "v32_res_31",
    name: "引力波探测",
    icon: "〰️",
    branch: "research",
    branchName: "科研",
    tier: 4,
    cost: 257,
    researchTimeSec: 1542,
    needs: ["v32_res_30", "t-prod-10"],
    needsDetail: [
      { type: "tech", ref: "v32_res_30", note: "需先研究「纳米机器人」。" },
      { type: "tech", ref: "t-prod-10", note: "需先研究旧科技「奇点」。" },
    ],
    desc: "引力波探测器开机，科研速度提升。",
    fx: {
      "researchMul": 1.2,
      "warnAddSec": 15,
    },
    modifiers: [
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "科研速度 ×1.2",
      },
      {
        key: "warnAddSec",
        target: "sys.warnTime",
        op: "add",
        value: 15,
        unit: "秒",
        note: "灾难预警时间 +15 秒",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-meteor"],
    mitigatesDetail: [
      { disaster: "d32-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_32"],
    comboWith: [
      { tech: "v32_res_32", note: "与「星舰护盾」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.2。",
      "灾难预警时间 +15 秒。",
    ],
    researchCost: {
      tech: 257,
      credits: 1285,
      timeSec: 1542,
      note: "研究耗时 1542 秒，另耗星币 1285。",
    },
    levels: [
      { level: 1, cost: 257, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 514, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1028, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_32 星舰护盾 [科研·T4] 造价 269 科技点
  // 造价分析：本项 269 科技点，同档（T4）均价 227 点，本项为均价的 1.19×；研究耗时 1614 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4000 科技点，占本系链总造价 6824 点的 59%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2152 铁当量，约等于 179.3 座采矿机 L1 的造价。
  // 效果分解：护盾强度 ×1.3（目标 military.shield，mul运算）。
  // 效果分解：防御力 ×1.15（目标 military.defense，mul运算）。
  // 效果分解：两项效果合计 护盾强度 ×1.3、防御力 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 32/40 项，前置 「引力波探测」、旧科技「火星公民」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「量子实验室」、「氦3聚变堆」，造价分别为 185、197 点；本项 269 点，排第 8/8（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥100 人；后期关键科技，需旧科技打底。
  // 叠加说明：乘法叠加（shieldMul）、乘法叠加（defenseMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：后期关键，先确认旧科技前置已解锁。
  "v32_res_32": {
    id: "v32_res_32",
    name: "星舰护盾",
    icon: "🛡️",
    branch: "research",
    branchName: "科研",
    tier: 4,
    cost: 269,
    researchTimeSec: 1614,
    needs: ["v32_res_31", "t-surv-15"],
    needsDetail: [
      { type: "tech", ref: "v32_res_31", note: "需先研究「引力波探测」。" },
      { type: "tech", ref: "t-surv-15", note: "需先研究旧科技「火星公民」。" },
    ],
    desc: "星舰护盾发生器升级，护盾强度提升。",
    fx: {
      "shieldMul": 1.3,
      "defenseMul": 1.15,
    },
    modifiers: [
      {
        key: "shieldMul",
        target: "military.shield",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "护盾强度 ×1.3",
      },
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "防御力 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d32-meteor"],
    mitigatesDetail: [
      { disaster: "d32-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_33"],
    comboWith: [
      { tech: "v32_res_33", note: "与「奇点引擎」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "护盾强度 ×1.3。",
      "防御力 ×1.15。",
    ],
    researchCost: {
      tech: 269,
      credits: 1345,
      timeSec: 1614,
      note: "研究耗时 1614 秒，另耗星币 1345。",
    },
    levels: [
      { level: 1, cost: 269, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 538, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1076, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_33 奇点引擎 [科研·T5] 造价 290 科技点
  // 造价分析：本项 290 科技点，同档（T5）均价 353 点，本项为均价的 0.82×；研究耗时 1740 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4290 科技点，占本系链总造价 6824 点的 63%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2320 铁当量，约等于 193.3 座采矿机 L1 的造价。
  // 效果分解：全部生产建筑产量 ×1.25（目标 prod.all，mul运算）。
  // 效果分解：科研速度 ×1.2（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 全部生产建筑产量 ×1.25、科研速度 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 33/40 项，前置 「星舰护盾」、旧科技「新纪元」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「戴森云」、「意识上传」，造价分别为 308、326 点；本项 290 点，排第 1/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（allProdMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_res_33": {
    id: "v32_res_33",
    name: "奇点引擎",
    icon: "🌟",
    branch: "research",
    branchName: "科研",
    tier: 5,
    cost: 290,
    researchTimeSec: 1740,
    needs: ["v32_res_32", "t-orb-15"],
    needsDetail: [
      { type: "tech", ref: "v32_res_32", note: "需先研究「星舰护盾」。" },
      { type: "tech", ref: "t-orb-15", note: "需先研究旧科技「新纪元」。" },
    ],
    desc: "奇点引擎点火，全部生产建筑产量提升。",
    fx: {
      "allProdMul": 1.25,
      "researchMul": 1.2,
    },
    modifiers: [
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "全部生产建筑产量 ×1.25",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "科研速度 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_34"],
    comboWith: [
      { tech: "v32_res_34", note: "与「戴森云」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "全部生产建筑产量 ×1.25。",
      "科研速度 ×1.2。",
    ],
    researchCost: {
      tech: 290,
      credits: 1450,
      timeSec: 1740,
      note: "研究耗时 1740 秒，另耗星币 1450。",
    },
    levels: [
      { level: 1, cost: 290, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 580, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1160, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_34 戴森云 [科研·T5] 造价 308 科技点
  // 造价分析：本项 308 科技点，同档（T5）均价 353 点，本项为均价的 0.87×；研究耗时 1848 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4598 科技点，占本系链总造价 6824 点的 67%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2464 铁当量，约等于 205.3 座采矿机 L1 的造价。
  // 效果分解：轨道电力 +100（目标 power.orbital，add运算）。
  // 效果分解：太阳能板电力 ×1.3（目标 power.solar，mul运算）。
  // 效果分解：两项效果合计 轨道电力 +100、太阳能板电力 ×1.3；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 34/40 项，前置 「奇点引擎」、旧科技「戴森雏形」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「奇点引擎」、「意识上传」，造价分别为 290、326 点；本项 308 点，排第 2/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：加法叠加（orbitalPowerAdd）、乘法叠加（solarMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_res_34": {
    id: "v32_res_34",
    name: "戴森云",
    icon: "☀️",
    branch: "research",
    branchName: "科研",
    tier: 5,
    cost: 308,
    researchTimeSec: 1848,
    needs: ["v32_res_33", "t-build-15"],
    needsDetail: [
      { type: "tech", ref: "v32_res_33", note: "需先研究「奇点引擎」。" },
      { type: "tech", ref: "t-build-15", note: "需先研究旧科技「戴森雏形」。" },
    ],
    desc: "戴森云开始聚能，轨道电力大幅提升。",
    fx: {
      "orbitalPowerAdd": 100,
      "solarMul": 1.3,
    },
    modifiers: [
      {
        key: "orbitalPowerAdd",
        target: "power.orbital",
        op: "add",
        value: 100,
        unit: "电",
        note: "轨道电力 +100",
      },
      {
        key: "solarMul",
        target: "power.solar",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "太阳能板电力 ×1.3",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_35"],
    comboWith: [
      { tech: "v32_res_35", note: "与「意识上传」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "轨道电力 +100。",
      "太阳能板电力 ×1.3。",
    ],
    researchCost: {
      tech: 308,
      credits: 1540,
      timeSec: 1848,
      note: "研究耗时 1848 秒，另耗星币 1540。",
    },
    levels: [
      { level: 1, cost: 308, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 616, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1232, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_35 意识上传 [科研·T5] 造价 326 科技点
  // 造价分析：本项 326 科技点，同档（T5）均价 353 点，本项为均价的 0.92×；研究耗时 1956 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 4924 科技点，占本系链总造价 6824 点的 72%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2608 铁当量，约等于 217.3 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.35（目标 prod.research，mul运算）。
  // 效果分解：科技点 +3/分钟（目标 prod.techPerMin，add运算）。
  // 效果分解：两项效果合计 科研速度 ×1.35、科技点 +3/分钟；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 35/40 项，前置 「戴森云」、旧科技「基层民主」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「奇点引擎」、「戴森云」，造价分别为 290、308 点；本项 326 点，排第 3/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（researchMul）、加法叠加（techPointAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_res_35": {
    id: "v32_res_35",
    name: "意识上传",
    icon: "🧠",
    branch: "research",
    branchName: "科研",
    tier: 5,
    cost: 326,
    researchTimeSec: 1956,
    needs: ["v32_res_34", "t30-pol-01"],
    needsDetail: [
      { type: "tech", ref: "v32_res_34", note: "需先研究「戴森云」。" },
      { type: "tech", ref: "t30-pol-01", note: "需先研究旧科技「基层民主」。" },
    ],
    desc: "意识上传实验成功，科研速度大幅提升。",
    fx: {
      "researchMul": 1.35,
      "techPointAdd": 3,
    },
    modifiers: [
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.35,
        unit: "倍",
        note: "科研速度 ×1.35",
      },
      {
        key: "techPointAdd",
        target: "prod.techPerMin",
        op: "add",
        value: 3,
        unit: "/分钟",
        note: "科技点 +3/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-plague"],
    mitigatesDetail: [
      { disaster: "d32-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_36"],
    comboWith: [
      { tech: "v32_res_36", note: "与「时间膨胀」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.35。",
      "科技点 +3/分钟。",
    ],
    researchCost: {
      tech: 326,
      credits: 1630,
      timeSec: 1956,
      note: "研究耗时 1956 秒，另耗星币 1630。",
    },
    levels: [
      { level: 1, cost: 326, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 652, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1304, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_36 时间膨胀 [科研·T5] 造价 344 科技点
  // 造价分析：本项 344 科技点，同档（T5）均价 353 点，本项为均价的 0.97×；研究耗时 2064 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 5268 科技点，占本系链总造价 6824 点的 77%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2752 铁当量，约等于 229.3 座采矿机 L1 的造价。
  // 效果分解：研究成本 ×0.7（目标 cost.research，mul运算）。
  // 效果分解：科研速度 ×1.2（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 研究成本 ×0.7、科研速度 ×1.2；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 36/40 项，前置 「意识上传」、旧科技「生态穹顶」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「奇点引擎」、「戴森云」，造价分别为 290、308 点；本项 344 点，排第 4/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（researchCostMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「火星震」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_res_36": {
    id: "v32_res_36",
    name: "时间膨胀",
    icon: "⏳",
    branch: "research",
    branchName: "科研",
    tier: 5,
    cost: 344,
    researchTimeSec: 2064,
    needs: ["v32_res_35", "t30-eco-01"],
    needsDetail: [
      { type: "tech", ref: "v32_res_35", note: "需先研究「意识上传」。" },
      { type: "tech", ref: "t30-eco-01", note: "需先研究旧科技「生态穹顶」。" },
    ],
    desc: "时间膨胀场实验成功，研究成本大幅下降。",
    fx: {
      "researchCostMul": 0.7,
      "researchMul": 1.2,
    },
    modifiers: [
      {
        key: "researchCostMul",
        target: "cost.research",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "研究成本 ×0.7",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "科研速度 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-quake"],
    mitigatesDetail: [
      { disaster: "d32-quake", note: "缓解「火星震」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_37"],
    comboWith: [
      { tech: "v32_res_37", note: "与「曲速引擎」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "研究成本 ×0.7。",
      "科研速度 ×1.2。",
    ],
    researchCost: {
      tech: 344,
      credits: 1720,
      timeSec: 2064,
      note: "研究耗时 2064 秒，另耗星币 1720。",
    },
    levels: [
      { level: 1, cost: 344, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 688, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1376, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_37 曲速引擎 [科研·T5] 造价 362 科技点
  // 造价分析：本项 362 科技点，同档（T5）均价 353 点，本项为均价的 1.03×；研究耗时 2172 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 5630 科技点，占本系链总造价 6824 点的 83%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2896 铁当量，约等于 241.3 座采矿机 L1 的造价。
  // 效果分解：舰船航速 ×1.5（目标 fleet.speed，mul运算）。
  // 效果分解：舰船耐久 ×1.3（目标 fleet.hp，mul运算）。
  // 效果分解：两项效果合计 舰船航速 ×1.5、舰船耐久 ×1.3；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 37/40 项，前置 「时间膨胀」、旧科技「民兵训练」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「奇点引擎」、「戴森云」，造价分别为 290、308 点；本项 362 点，排第 5/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（shipSpeedMul）、乘法叠加（shipHpMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_res_37": {
    id: "v32_res_37",
    name: "曲速引擎",
    icon: "🌀",
    branch: "research",
    branchName: "科研",
    tier: 5,
    cost: 362,
    researchTimeSec: 2172,
    needs: ["v32_res_36", "t30-mil-01"],
    needsDetail: [
      { type: "tech", ref: "v32_res_36", note: "需先研究「时间膨胀」。" },
      { type: "tech", ref: "t30-mil-01", note: "需先研究旧科技「民兵训练」。" },
    ],
    desc: "曲速引擎试飞成功，舰船航速与耐久提升。",
    fx: {
      "shipSpeedMul": 1.5,
      "shipHpMul": 1.3,
    },
    modifiers: [
      {
        key: "shipSpeedMul",
        target: "fleet.speed",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "舰船航速 ×1.5",
      },
      {
        key: "shipHpMul",
        target: "fleet.hp",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "舰船耐久 ×1.3",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-meteor"],
    mitigatesDetail: [
      { disaster: "d32-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_38"],
    comboWith: [
      { tech: "v32_res_38", note: "与「行星改造完成」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "舰船航速 ×1.5。",
      "舰船耐久 ×1.3。",
    ],
    researchCost: {
      tech: 362,
      credits: 1810,
      timeSec: 2172,
      note: "研究耗时 2172 秒，另耗星币 1810。",
    },
    levels: [
      { level: 1, cost: 362, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 724, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1448, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_38 行星改造完成 [科研·T5] 造价 380 科技点
  // 造价分析：本项 380 科技点，同档（T5）均价 353 点，本项为均价的 1.08×；研究耗时 2280 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 6010 科技点，占本系链总造价 6824 点的 88%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 3040 铁当量，约等于 253.3 座采矿机 L1 的造价。
  // 效果分解：行星改造进度 +10 点（目标 planet.terraform，add运算）。
  // 效果分解：生态圈效果 ×1.3（目标 prod.eco，mul运算）。
  // 效果分解：两项效果合计 行星改造进度 +10 点、生态圈效果 ×1.3；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 38/40 项，前置 「曲速引擎」、旧科技「深空探测」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「奇点引擎」、「戴森云」，造价分别为 290、308 点；本项 380 点，排第 6/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：加法叠加（terraformAdd）、乘法叠加（ecoMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「特大沙尘暴」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_res_38": {
    id: "v32_res_38",
    name: "行星改造完成",
    icon: "🌱",
    branch: "research",
    branchName: "科研",
    tier: 5,
    cost: 380,
    researchTimeSec: 2280,
    needs: ["v32_res_37", "t30-ds-01"],
    needsDetail: [
      { type: "tech", ref: "v32_res_37", note: "需先研究「曲速引擎」。" },
      { type: "tech", ref: "t30-ds-01", note: "需先研究旧科技「深空探测」。" },
    ],
    desc: "行星改造进入收尾，行星改造进度大幅推进。",
    fx: {
      "terraformAdd": 10,
      "ecoMul": 1.3,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 10,
        unit: "点",
        note: "行星改造进度 +10 点",
      },
      {
        key: "ecoMul",
        target: "prod.eco",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "生态圈效果 ×1.3",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-sandstorm"],
    mitigatesDetail: [
      { disaster: "d32-sandstorm", note: "缓解「特大沙尘暴」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_39"],
    comboWith: [
      { tech: "v32_res_39", note: "与「超智涌现」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +10 点。",
      "生态圈效果 ×1.3。",
    ],
    researchCost: {
      tech: 380,
      credits: 1900,
      timeSec: 2280,
      note: "研究耗时 2280 秒，另耗星币 1900。",
    },
    levels: [
      { level: 1, cost: 380, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 760, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1520, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_39 超智涌现 [科研·T5] 造价 398 科技点
  // 造价分析：本项 398 科技点，同档（T5）均价 353 点，本项为均价的 1.13×；研究耗时 2388 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 6408 科技点，占本系链总造价 6824 点的 94%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 3184 铁当量，约等于 265.3 座采矿机 L1 的造价。
  // 效果分解：胜利进度 +1 点（目标 victory.progress，add运算）。
  // 效果分解：全部生产建筑产量 ×1.15（目标 prod.all，mul运算）。
  // 效果分解：两项效果合计 胜利进度 +1 点、全部生产建筑产量 ×1.15；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 39/40 项，前置 「行星改造完成」、旧科技「廉政审计」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「奇点引擎」、「戴森云」，造价分别为 290、308 点；本项 398 点，排第 7/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：加法叠加（victoryProgressAdd）、乘法叠加（allProdMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_res_39": {
    id: "v32_res_39",
    name: "超智涌现",
    icon: "🤖",
    branch: "research",
    branchName: "科研",
    tier: 5,
    cost: 398,
    researchTimeSec: 2388,
    needs: ["v32_res_38", "t31-pol-01"],
    needsDetail: [
      { type: "tech", ref: "v32_res_38", note: "需先研究「行星改造完成」。" },
      { type: "tech", ref: "t31-pol-01", note: "需先研究旧科技「廉政审计」。" },
    ],
    desc: "超智涌现，胜利进度推进。",
    fx: {
      "victoryProgressAdd": 1,
      "allProdMul": 1.15,
    },
    modifiers: [
      {
        key: "victoryProgressAdd",
        target: "victory.progress",
        op: "add",
        value: 1,
        unit: "点",
        note: "胜利进度 +1 点",
      },
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "全部生产建筑产量 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_40"],
    comboWith: [
      { tech: "v32_res_40", note: "与「星海纪元」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "胜利进度 +1 点。",
      "全部生产建筑产量 ×1.15。",
    ],
    researchCost: {
      tech: 398,
      credits: 1990,
      timeSec: 2388,
      note: "研究耗时 2388 秒，另耗星币 1990。",
    },
    levels: [
      { level: 1, cost: 398, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 796, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1592, mul: 2.0, note: "效果 ×2。" },
    ],
  },
  // v32_res_40 星海纪元 [科研·T5] 造价 416 科技点
  // 造价分析：本项 416 科技点，同档（T5）均价 353 点，本项为均价的 1.18×；研究耗时 2496 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 6824 科技点，占本系链总造价 6824 点的 100%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 3328 铁当量，约等于 277.3 座采矿机 L1 的造价。
  // 效果分解：全部生产建筑产量 ×1.3（目标 prod.all，mul运算）。
  // 效果分解：科研速度 ×1.3（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 全部生产建筑产量 ×1.3、科研速度 ×1.3；数值全部进注册表，applyTechV32Fx 可直接执行。
  // 前置链：本系第 40/40 项，前置 「超智涌现」、旧科技「深空雷达」；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 「奇点引擎」、「戴森云」，造价分别为 290、308 点；本项 416 点，排第 8/8（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥200 人；终局科技，投入大、回报高。
  // 叠加说明：乘法叠加（allProdMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v32 建筑「火星大学」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：终局科技，资源充裕时一口气点满。
  "v32_res_40": {
    id: "v32_res_40",
    name: "星海纪元",
    icon: "🌠",
    branch: "research",
    branchName: "科研",
    tier: 5,
    cost: 416,
    researchTimeSec: 2496,
    needs: ["v32_res_39", "t31-dsp-01"],
    needsDetail: [
      { type: "tech", ref: "v32_res_39", note: "需先研究「超智涌现」。" },
      { type: "tech", ref: "t31-dsp-01", note: "需先研究旧科技「深空雷达」。" },
    ],
    desc: "星海纪元开启，全部生产与科研速度登顶。",
    fx: {
      "allProdMul": 1.3,
      "researchMul": 1.3,
    },
    modifiers: [
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "全部生产建筑产量 ×1.3",
      },
      {
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "科研速度 ×1.3",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 200,
      buildings: [],
      wonders: [],
      note: "需人口 ≥200 人，无建筑要求。",
    },
    mitigates: ["d32-blackout"],
    mitigatesDetail: [
      { disaster: "d32-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["v32_res_39"],
    comboWith: [
      { tech: "v32_res_39", note: "与「超智涌现」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "全部生产建筑产量 ×1.3。",
      "科研速度 ×1.3。",
    ],
    researchCost: {
      tech: 416,
      credits: 2080,
      timeSec: 2496,
      note: "研究耗时 2496 秒，另耗星币 2080。",
    },
    levels: [
      { level: 1, cost: 416, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 832, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1664, mul: 2.0, note: "效果 ×2。" },
    ],
  },
};

const TECH_V32_ORDER = [
  "v32_trade_01",
  "v32_trade_02",
  "v32_trade_03",
  "v32_trade_04",
  "v32_trade_05",
  "v32_trade_06",
  "v32_trade_07",
  "v32_trade_08",
  "v32_trade_09",
  "v32_trade_10",
  "v32_trade_11",
  "v32_trade_12",
  "v32_trade_13",
  "v32_trade_14",
  "v32_trade_15",
  "v32_trade_16",
  "v32_trade_17",
  "v32_trade_18",
  "v32_trade_19",
  "v32_trade_20",
  "v32_trade_21",
  "v32_trade_22",
  "v32_trade_23",
  "v32_trade_24",
  "v32_trade_25",
  "v32_trade_26",
  "v32_trade_27",
  "v32_trade_28",
  "v32_trade_29",
  "v32_trade_30",
  "v32_trade_31",
  "v32_trade_32",
  "v32_trade_33",
  "v32_trade_34",
  "v32_trade_35",
  "v32_trade_36",
  "v32_trade_37",
  "v32_trade_38",
  "v32_trade_39",
  "v32_trade_40",
  "v32_cult_01",
  "v32_cult_02",
  "v32_cult_03",
  "v32_cult_04",
  "v32_cult_05",
  "v32_cult_06",
  "v32_cult_07",
  "v32_cult_08",
  "v32_cult_09",
  "v32_cult_10",
  "v32_cult_11",
  "v32_cult_12",
  "v32_cult_13",
  "v32_cult_14",
  "v32_cult_15",
  "v32_cult_16",
  "v32_cult_17",
  "v32_cult_18",
  "v32_cult_19",
  "v32_cult_20",
  "v32_cult_21",
  "v32_cult_22",
  "v32_cult_23",
  "v32_cult_24",
  "v32_cult_25",
  "v32_cult_26",
  "v32_cult_27",
  "v32_cult_28",
  "v32_cult_29",
  "v32_cult_30",
  "v32_cult_31",
  "v32_cult_32",
  "v32_cult_33",
  "v32_cult_34",
  "v32_cult_35",
  "v32_cult_36",
  "v32_cult_37",
  "v32_cult_38",
  "v32_cult_39",
  "v32_cult_40",
  "v32_res_01",
  "v32_res_02",
  "v32_res_03",
  "v32_res_04",
  "v32_res_05",
  "v32_res_06",
  "v32_res_07",
  "v32_res_08",
  "v32_res_09",
  "v32_res_10",
  "v32_res_11",
  "v32_res_12",
  "v32_res_13",
  "v32_res_14",
  "v32_res_15",
  "v32_res_16",
  "v32_res_17",
  "v32_res_18",
  "v32_res_19",
  "v32_res_20",
  "v32_res_21",
  "v32_res_22",
  "v32_res_23",
  "v32_res_24",
  "v32_res_25",
  "v32_res_26",
  "v32_res_27",
  "v32_res_28",
  "v32_res_29",
  "v32_res_30",
  "v32_res_31",
  "v32_res_32",
  "v32_res_33",
  "v32_res_34",
  "v32_res_35",
  "v32_res_36",
  "v32_res_37",
  "v32_res_38",
  "v32_res_39",
  "v32_res_40",
];
const TECH_V32_COUNT = TECH_V32_ORDER.length;
const TECH_V32_KNOWN_OLD_TECH = ["t-surv-8", "t-prod-6", "t-orb-9", "t-orb-12", "t-prod-13", "t-surv-10", "t-prod-10", "t-surv-15", "t-orb-15", "t-build-15", "t30-pol-01", "t30-eco-01", "t30-mil-01", "t30-ds-01", "t31-pol-01", "t31-dsp-01"];

/* ============ §5 效果执行引擎 ============ */
/* 把单项 v32 科技的 fx 应用到游戏状态对象 state 上。
 * state 形如 { pop: {}, city: {}, econ: {}, military: {}, prod: {},
 *   power: {}, risk: {}, victory: {}, unlock: {}, gov: {}, cost: {},
 *   diplomacy: {}, trade: {}, fleet: {}, life: {}, planet: {}, sys: {}, culture: {} }。
 * 不存在的字段会被跳过（不抛错），返回实际生效的效果清单。 */
const TECH_V32_FX_PATH = {
  "agingMul": ["sys", "aging"],
  "allProdMul": ["prod", "all"],
  "artMul": ["culture", "art"],
  "attackMul": ["military", "attack"],
  "buildCostMul": ["cost", "build"],
  "corruptionMul": ["risk", "corruption"],
  "cultureMul": ["culture", "output"],
  "defenseMul": ["military", "defense"],
  "diplomacyMul": ["diplomacy", "relation"],
  "disasterChanceMul": ["risk", "disasterChance"],
  "disasterDurMul": ["risk", "disasterDuration"],
  "ecoMul": ["prod", "eco"],
  "foodAdd": ["prod", "foodPerMin"],
  "foodMul": ["prod", "food"],
  "foodUseMul": ["pop", "foodUse"],
  "fusionMul": ["power", "fusion"],
  "greenhouseMul": ["prod", "greenhouse"],
  "happinessAdd": ["pop", "happiness"],
  "he3Add": ["prod", "he3PerMin"],
  "ironAdd": ["prod", "ironPerMin"],
  "labMul": ["prod", "lab"],
  "launchCostMul": ["cost", "launch"],
  "meteorMul": ["risk", "meteorDamage"],
  "minerMul": ["prod", "miner"],
  "moraleMul": ["military", "morale"],
  "orbitalCostMul": ["cost", "orbital"],
  "orbitalPowerAdd": ["power", "orbital"],
  "oxygenAdd": ["life", "oxygen"],
  "pirateMul": ["risk", "pirateChance"],
  "policySlotsAdd": ["gov", "policySlots"],
  "popCapAdd": ["pop", "cap"],
  "popGrowthMul": ["pop", "growth"],
  "radiationMul": ["risk", "radiation"],
  "repairCostMul": ["cost", "repair"],
  "researchCostMul": ["cost", "research"],
  "researchMul": ["prod", "research"],
  "revoltMul": ["risk", "revoltChance"],
  "scienceMul": ["prod", "science"],
  "shieldMul": ["military", "shield"],
  "shipHpMul": ["fleet", "hp"],
  "shipSpeedMul": ["fleet", "speed"],
  "smelterMul": ["prod", "smelter"],
  "solarMul": ["power", "solar"],
  "stabilityAdd": ["city", "stability"],
  "steelAdd": ["prod", "steelPerMin"],
  "taxMul": ["econ", "taxRate"],
  "techPointAdd": ["prod", "techPerMin"],
  "terraformAdd": ["planet", "terraform"],
  "tourismMul": ["culture", "tourism"],
  "tradeMul": ["econ", "tradeIncome"],
  "tradePriceMul": ["trade", "price"],
  "tradeRouteAdd": ["trade", "routes"],
  "tradeShipCargoMul": ["trade", "cargo"],
  "tradeShipMul": ["trade", "shipInterval"],
  "unlockArchive": ["unlock", "archive"],
  "unlockBank": ["unlock", "bank"],
  "unlockBioLab": ["unlock", "bioLab"],
  "unlockExchange": ["unlock", "exchange"],
  "unlockFreeport": ["unlock", "freeport"],
  "unlockGallery": ["unlock", "gallery"],
  "unlockLibrary": ["unlock", "library"],
  "unlockMarket": ["unlock", "market"],
  "unlockMonument": ["unlock", "monument"],
  "unlockMuseum": ["unlock", "museum"],
  "unlockObservatory": ["unlock", "observatory"],
  "unlockQuantumLab": ["unlock", "quantumLab"],
  "unlockTheater": ["unlock", "theater"],
  "unlockTradeHub": ["unlock", "tradeHub"],
  "unlockUniversity": ["unlock", "university"],
  "upgradeCostMul": ["cost", "upgrade"],
  "victoryProgressAdd": ["victory", "progress"],
  "warnAddSec": ["sys", "warnTime"],
  "waterAdd": ["prod", "waterPerMin"],
  "waterUseMul": ["pop", "waterUse"],
  "waterplantMul": ["prod", "waterplant"],
};
function applyTechV32Fx(state, techId, level) {
  const def = TECH_V32_DEFS[techId];
  if (!def || !state) return [];
  const applied = [];
  const lv = (typeof level === 'number' && level > 0) ? level : 1;
  for (const key of Object.keys(def.fx)) {
    const reg = TECH_V32_FX_REGISTRY[key];
    if (!reg) continue;
    const path = TECH_V32_FX_PATH[key];
    if (!path) continue;
    const scope = state[path[0]];
    if (!scope) continue;
    const field = path[1];
    const v = def.fx[key];
    if (reg.op === 'add') { scope[field] = (scope[field] || 0) + v * lv; }
    else if (reg.op === 'mul') { scope[field] = (scope[field] || 1) * Math.pow(v, lv); }
    else if (reg.op === 'flag') { scope[field] = true; }
    applied.push({ key: key, op: reg.op, value: v, level: lv });
  }
  return applied;
}
function applyTechV32Set(state, unlockedIds) {
  const out = [];
  for (const id of (unlockedIds || [])) {
    const r = applyTechV32Fx(state, id, 1);
    if (r.length) out.push({ id: id, applied: r });
  }
  return out;
}
function techV32CanResearch(techId, unlockedSet, techPoints, pop, oldUnlockedSet) {
  const def = TECH_V32_DEFS[techId];
  if (!def) return { ok: false, reason: '科技不存在' };
  const has = (id) => (unlockedSet && unlockedSet.has(id)) || (oldUnlockedSet && oldUnlockedSet.has(id)) || TECH_V32_KNOWN_OLD_TECH.indexOf(id) !== -1;
  for (const pre of def.needs) { if (!has(pre)) return { ok: false, reason: '前置未研究：' + pre }; }
  if (typeof techPoints === 'number' && techPoints < def.cost) return { ok: false, reason: '科技点不足' };
  if (typeof pop === 'number' && pop < def.requires.minPop) return { ok: false, reason: '人口不足' };
  return { ok: true, reason: '' };
}
function techV32Name(techId) {
  const def = TECH_V32_DEFS[techId];
  return def ? def.name : techId;
}
function techV32EffectSummary(techId) {
  const def = TECH_V32_DEFS[techId];
  if (!def) return '';
  return def.effectLines.join('；');
}

/* mergeTechV32()：幂等。把 120 项并入全局 TECH_DEFS / TECH_ORDER / TECH_BRANCHES，
 * 并把 3 个新分支登记进去。旧文件未加载时只返回计数，不抛错。 */
function mergeTechV32() {
  let added = 0, skipped = 0;
  if (typeof TECH_DEFS !== 'undefined') {
    for (const id of TECH_V32_ORDER) {
      if (TECH_DEFS[id]) { skipped++; continue; }
      TECH_DEFS[id] = TECH_V32_DEFS[id];
      added++;
    }
  }
  if (typeof TECH_ORDER !== 'undefined') {
    for (const id of TECH_V32_ORDER) {
      if (TECH_ORDER.indexOf(id) === -1) TECH_ORDER.push(id);
    }
  }
  if (typeof TECH_BRANCHES !== 'undefined') {
    for (const k of Object.keys(TECH_V32_BRANCHES)) {
      if (!TECH_BRANCHES[k]) TECH_BRANCHES[k] = TECH_V32_BRANCHES[k];
    }
  }
  return { added: added, skipped: skipped, total: TECH_V32_COUNT,
    branches: Object.keys(TECH_V32_BRANCHES),
    mergedIntoGlobal: (typeof TECH_DEFS !== 'undefined') };
}

/* ============ §6 自检 ============ */
/* 校验 120 项：id 唯一、造价>0、前置存在（v32 内或旧科技树）、fx 键已注册、缓解灾难已定义。 */
function selfTestTechV32() {
  const errors = [];
  const seen = new Set();
  const counts = { trade: 0, culture: 0, research: 0 };
  for (const id of TECH_V32_ORDER) {
    const def = TECH_V32_DEFS[id];
    if (!def) { errors.push(id + ': 定义缺失'); continue; }
    if (seen.has(id)) errors.push(id + ': id 重复');
    seen.add(id);
    counts[def.branch] = (counts[def.branch] || 0) + 1;
    if (!(def.cost > 0)) errors.push(id + ': 造价无效');
    if (def.tier < 1 || def.tier > 5) errors.push(id + ': 档位无效');
    for (const pre of def.needs) {
      const inV32 = !!TECH_V32_DEFS[pre];
      const inOld = (typeof TECH_DEFS !== 'undefined') && !!TECH_DEFS[pre];
      const inKnownOld = TECH_V32_KNOWN_OLD_TECH.indexOf(pre) !== -1;
      if (!inV32 && !inOld && !inKnownOld) errors.push(id + ': 前置不存在 ' + pre);
    }
    for (const k of Object.keys(def.fx)) {
      if (!TECH_V32_FX_REGISTRY[k]) errors.push(id + ': 未注册的效果键 ' + k);
    }
    for (const d of def.mitigates) {
      if (!TECH_V32_DISASTERS[d]) errors.push(id + ': 缓解灾难未定义 ' + d);
    }
    if (!def.desc || def.desc.length < 4) errors.push(id + ': 描述缺失');
    if (def.id !== id) errors.push(id + ': 内嵌 id 不一致');
  }
  const expect = { trade: 40, culture: 40, research: 40 };
  for (const b of Object.keys(expect)) {
    if (counts[b] !== expect[b]) errors.push('分支 ' + b + ' 数量=' + counts[b] + '，应为 ' + expect[b]);
  }
  try {
    const st = { pop: {}, city: {}, econ: {}, military: {}, prod: {}, power: {}, risk: {}, victory: {}, unlock: {}, gov: {}, cost: {}, diplomacy: {}, trade: {}, fleet: {}, life: {}, planet: {}, sys: {}, culture: {} };
    const all = applyTechV32Set(st, TECH_V32_ORDER);
    if (all.length !== TECH_V32_COUNT) errors.push('冒烟：仅 ' + all.length + ' 项生效');
    if (typeof st.pop.happiness !== 'number') errors.push('冒烟：幸福度未累计');
    if (st.unlock.market !== true) errors.push('冒烟：解锁旗标未生效');
    if (typeof st.econ.tradeIncome !== 'number' || st.econ.tradeIncome <= 1) errors.push('冒烟：贸易收入未累计');
    if (typeof st.prod.research !== 'number' || st.prod.research <= 1) errors.push('冒烟：科研速度未累计');
  } catch (e) { errors.push('冒烟失败: ' + e.message); }
  return { total: TECH_V32_COUNT, counts: counts, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports = { TECH_V32_DEFS, TECH_V32_ORDER, TECH_V32_BRANCHES, TECH_V32_DISASTERS,
    TECH_V32_BUILDINGS, TECH_V32_FX_REGISTRY, TECH_V32_COUNT, TECH_V32_KNOWN_OLD_TECH,
    applyTechV32Fx, applyTechV32Set, techV32CanResearch, techV32Name,
    techV32EffectSummary, mergeTechV32, selfTestTechV32 };
}
