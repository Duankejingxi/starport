/* 星港 — tech_v30.js：v3.0 新科技 100 项（政治 25 / 深空 25 / 生态 25 / 军事 25）
 * 每一项都有真实效果：fx 键全部登记在 TECH_V30_FX_REGISTRY，
 * applyTechV30Fx(state, id) 可直接对游戏状态对象执行加成；
 * mergeTechV30() 把 100 项并入全局 TECH_DEFS / TECH_ORDER / TECH_BRANCHES。
 * 前置链：同系内 5 档递进，跨系前置只引用已存在的旧科技 id。
 * 描述一律一句话，不写故事。
 */

'use strict';

/* ============ §1 效果键注册表（键 -> 目标系统 / 运算 / 单位） ============ */
const TECH_V30_FX_REGISTRY = {
  "agingMul": { target: "sys.aging", op: "mul", unit: "倍", note: "设备老化速度 ×{v}" },
  "allProdMul": { target: "prod.all", op: "mul", unit: "倍", note: "全部生产建筑产量 ×{v}" },
  "asteroidIronAdd": { target: "prod.ironPerMin", op: "add", unit: "/分钟", note: "铁矿 +{v}/分钟" },
  "asteroidRareAdd": { target: "prod.rarePerMin", op: "add", unit: "/分钟", note: "稀土 +{v}/分钟" },
  "asteroidYieldMul": { target: "prod.asteroid", op: "mul", unit: "倍", note: "小行星采矿产量 ×{v}" },
  "attackMul": { target: "military.attack", op: "mul", unit: "倍", note: "攻击力 ×{v}" },
  "buildCostMul": { target: "cost.build", op: "mul", unit: "倍", note: "建筑建造成本 ×{v}" },
  "corruptionMul": { target: "risk.corruption", op: "mul", unit: "倍", note: "腐败发生率 ×{v}" },
  "coupMul": { target: "risk.coupChance", op: "mul", unit: "倍", note: "政变概率 ×{v}" },
  "defenseAdd": { target: "military.defense", op: "add", unit: "点", note: "防御力 +{v} 点" },
  "defenseMul": { target: "military.defense", op: "mul", unit: "倍", note: "防御力 ×{v}" },
  "diplomacyMul": { target: "diplomacy.relation", op: "mul", unit: "倍", note: "外交关系增速 ×{v}" },
  "disasterChanceMul": { target: "risk.disasterChance", op: "mul", unit: "倍", note: "灾难发生概率 ×{v}" },
  "disasterDurMul": { target: "risk.disasterDuration", op: "mul", unit: "倍", note: "灾难持续时间 ×{v}" },
  "ecoMul": { target: "prod.eco", op: "mul", unit: "倍", note: "生态圈效果 ×{v}" },
  "foodAdd": { target: "prod.foodPerMin", op: "add", unit: "/分钟", note: "食物 +{v}/分钟" },
  "foodMul": { target: "prod.food", op: "mul", unit: "倍", note: "食物产量 ×{v}" },
  "foodUseMul": { target: "pop.foodUse", op: "mul", unit: "倍", note: "人口耗食物 ×{v}" },
  "greenhouseMul": { target: "prod.greenhouse", op: "mul", unit: "倍", note: "温室产量 ×{v}" },
  "happinessAdd": { target: "pop.happiness", op: "add", unit: "点", note: "居民幸福度 +{v} 点" },
  "he3Add": { target: "prod.he3PerMin", op: "add", unit: "/分钟", note: "氦3 +{v}/分钟" },
  "iceStormMul": { target: "risk.iceStorm", op: "mul", unit: "倍", note: "冰尘暴影响 ×{v}" },
  "invasionMul": { target: "risk.invasionChance", op: "mul", unit: "倍", note: "外星入侵概率 ×{v}" },
  "ironAdd": { target: "prod.ironPerMin", op: "add", unit: "/分钟", note: "铁矿 +{v}/分钟" },
  "labMul": { target: "prod.lab", op: "mul", unit: "倍", note: "实验室科技产量 ×{v}" },
  "meteorMul": { target: "risk.meteorDamage", op: "mul", unit: "倍", note: "陨石伤害 ×{v}" },
  "minerMul": { target: "prod.miner", op: "mul", unit: "倍", note: "采矿机产量 ×{v}" },
  "orbitalCostMul": { target: "cost.orbital", op: "mul", unit: "倍", note: "轨道建筑成本 ×{v}" },
  "orbitalPowerAdd": { target: "power.orbital", op: "add", unit: "电", note: "轨道电力 +{v}" },
  "oxygenAdd": { target: "life.oxygen", op: "add", unit: "点", note: "氧气供给 +{v} 点" },
  "pirateMul": { target: "risk.pirateChance", op: "mul", unit: "倍", note: "海盗袭击概率 ×{v}" },
  "policySlotsAdd": { target: "gov.policySlots", op: "add", unit: "个", note: "政策槽位 +{v} 个" },
  "popCapAdd": { target: "pop.cap", op: "add", unit: "人", note: "人口上限 +{v} 人" },
  "popGrowthMul": { target: "pop.growth", op: "mul", unit: "倍", note: "人口增长速度 ×{v}" },
  "radiationMul": { target: "risk.radiation", op: "mul", unit: "倍", note: "辐射伤害 ×{v}" },
  "revoltImmune": { target: "risk.revoltImmune", op: "flag", unit: "", note: "叛乱免疫" },
  "revoltMul": { target: "risk.revoltChance", op: "mul", unit: "倍", note: "叛乱概率 ×{v}" },
  "sandstormMul": { target: "risk.sandstorm", op: "mul", unit: "倍", note: "沙尘暴影响 ×{v}" },
  "shieldMul": { target: "military.shield", op: "mul", unit: "倍", note: "护盾强度 ×{v}" },
  "shipHpMul": { target: "fleet.hp", op: "mul", unit: "倍", note: "舰船耐久 ×{v}" },
  "shipSpeedMul": { target: "fleet.speed", op: "mul", unit: "倍", note: "舰船航速 ×{v}" },
  "smelterMul": { target: "prod.smelter", op: "mul", unit: "倍", note: "冶炼厂产量 ×{v}" },
  "solarMul": { target: "power.solar", op: "mul", unit: "倍", note: "太阳能板电力 ×{v}" },
  "stabilityAdd": { target: "city.stability", op: "add", unit: "点", note: "殖民地稳定度 +{v} 点" },
  "steelAdd": { target: "prod.steelPerMin", op: "add", unit: "/分钟", note: "钢材 +{v}/分钟" },
  "strikeMul": { target: "risk.strikeChance", op: "mul", unit: "倍", note: "罢工概率 ×{v}" },
  "taxMul": { target: "econ.taxRate", op: "mul", unit: "倍", note: "税收效率 ×{v}" },
  "terraformAdd": { target: "planet.terraform", op: "add", unit: "点", note: "行星改造进度 +{v} 点" },
  "tradeMul": { target: "econ.tradeIncome", op: "mul", unit: "倍", note: "贸易收入 ×{v}" },
  "tradeShipMul": { target: "trade.shipInterval", op: "mul", unit: "倍", note: "贸易船到访间隔 ×{v}" },
  "unlockAcademy": { target: "unlock.academy", op: "flag", unit: "", note: "解锁军官学院" },
  "unlockBunker": { target: "unlock.bunker", op: "flag", unit: "", note: "解锁地堡" },
  "unlockEmbassy": { target: "unlock.embassy", op: "flag", unit: "", note: "解锁大使馆" },
  "unlockIntel": { target: "unlock.intel", op: "flag", unit: "", note: "解锁情报局" },
  "unlockMoonBase": { target: "unlock.moonBase", op: "flag", unit: "", note: "解锁月球基地" },
  "unlockPropaganda": { target: "unlock.propaganda", op: "flag", unit: "", note: "解锁宣传中心" },
  "unlockRanch": { target: "unlock.ranch", op: "flag", unit: "", note: "解锁牧场" },
  "unlockStargate": { target: "unlock.stargate", op: "flag", unit: "", note: "解锁星门" },
  "unlockTitan": { target: "unlock.titan", op: "flag", unit: "", note: "解锁泰坦机甲" },
  "victoryProgressAdd": { target: "victory.progress", op: "add", unit: "点", note: "胜利进度 +{v} 点" },
  "warnAddSec": { target: "sys.warnTime", op: "add", unit: "秒", note: "灾难预警时间 +{v} 秒" },
  "waterAdd": { target: "prod.waterPerMin", op: "add", unit: "/分钟", note: "水 +{v}/分钟" },
  "waterUseMul": { target: "pop.waterUse", op: "mul", unit: "倍", note: "人口耗水 ×{v}" },
  "waterplantMul": { target: "prod.waterplant", op: "mul", unit: "倍", note: "水厂产量 ×{v}" },
};

/* ============ §2 新分支（4 系） ============ */
const TECH_V30_BRANCHES = {
  "politics": { name: "政治", icon: "🏛️", color: "#f59e0b", v30: true },
  "deepSpace": { name: "深空", icon: "🚀", color: "#a5b4fc", v30: true },
  "eco": { name: "生态", icon: "🌿", color: "#4ade80", v30: true },
  "military": { name: "军事", icon: "⚔️", color: "#f87171", v30: true },
};

/* ============ §3 v30 科技解锁的新建筑（造价 / 效果均为真实数值） ============ */
const TECH_V30_BUILDINGS = {
  "b30-propaganda": {
    id: "b30-propaganda", name: "宣传中心", icon: "📣", v30: true,
    cost: { "steel": 40, "tech": 0 },
    fx: { "happinessAdd": 4, "stabilityAdd": 2 },
    note: "每分钟 +2 稳定度。",
  },
  "b30-intel": {
    id: "b30-intel", name: "情报局", icon: "🕵️", v30: true,
    cost: { "steel": 60, "nano": 10 },
    fx: { "pirateMul": 0.9, "coupMul": 0.9 },
    note: "海盗与政变概率再 -10%。",
  },
  "b30-embassy": {
    id: "b30-embassy", name: "大使馆", icon: "🏛️", v30: true,
    cost: { "steel": 80, "nano": 20 },
    fx: { "diplomacyMul": 1.2, "tradeMul": 1.1 },
    note: "外交与贸易收益提升。",
  },
  "b30-moonbase": {
    id: "b30-moonbase", name: "月球基地", icon: "🌙", v30: true,
    cost: { "steel": 120, "nano": 30 },
    fx: { "he3Add": 3, "ironAdd": 5 },
    note: "每分钟 +3 氦3、+5 铁矿。",
  },
  "b30-stargate": {
    id: "b30-stargate", name: "星门", icon: "🌀", v30: true,
    cost: { "nano": 500, "he3": 200 },
    fx: { "victoryProgressAdd": 1, "tradeMul": 1.2 },
    note: "建成即为第十胜利进度 +1。",
  },
  "b30-ranch": {
    id: "b30-ranch", name: "牧场", icon: "🐄", v30: true,
    cost: { "steel": 30 },
    fx: { "foodAdd": 4, "foodMul": 1.1 },
    note: "每分钟 +4 食物。",
  },
  "b30-academy": {
    id: "b30-academy", name: "军官学院", icon: "🎓", v30: true,
    cost: { "steel": 50 },
    fx: { "attackMul": 1.1, "defenseMul": 1.1 },
    note: "攻防各 +10%。",
  },
  "b30-bunker": {
    id: "b30-bunker", name: "地堡", icon: "🕳️", v30: true,
    cost: { "steel": 40 },
    fx: { "defenseAdd": 50 },
    note: "防御力 +50。",
  },
  "b30-titan": {
    id: "b30-titan", name: "泰坦机甲库", icon: "🦾", v30: true,
    cost: { "steel": 200, "uranium": 50 },
    fx: { "defenseAdd": 100, "attackMul": 1.2 },
    note: "防御 +100，攻击 ×1.2。",
  },
};

/* ============ §4 科技定义（100 项） ============ */
const TECH_V30_DEFS = {
  // ---------- 政治系（25 项） ----------
  // t30-pol-01 基层民主 [政治·T1] 造价 25 科技点
  "t30-pol-01": {
    id: "t30-pol-01",
    name: "基层民主",
    icon: "🗳️",
    branch: "politics",
    branchName: "政治",
    tier: 1,
    cost: 25,
    researchTimeSec: 150,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "居民投票选出第一届殖民地议事会。",
    fx: {
      "happinessAdd": 5,
      "stabilityAdd": 3,
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
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d30-protest"],
    mitigatesDetail: [
      { disaster: "d30-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-02", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-02", note: "与「市民议会」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +5 点。",
      "殖民地稳定度 +3 点。",
    ],
    researchCost: {
      tech: 25,
      credits: 125,
      timeSec: 150,
      note: "研究耗时 150 秒，另耗星币 125。",
    },
    levels: [
      { level: 1, cost: 25, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 50, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 100, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 2,
      urgency: 5,
      note: "AI 总督推荐权重：T1 科技优先度 2。",
    },
    balance: {
      costPerEffect: 12.5,
      powerRating: 16,
      note: "性价比 12.5 科技点/效果项，强度评级 16。",
    },
  },
  // t30-pol-02 市民议会 [政治·T1] 造价 35 科技点
  "t30-pol-02": {
    id: "t30-pol-02",
    name: "市民议会",
    icon: "🏛️",
    branch: "politics",
    branchName: "政治",
    tier: 1,
    cost: 35,
    researchTimeSec: 210,
    needs: ["t30-pol-01"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-01", note: "需先研究「基层民主」。" },
    ],
    desc: "议会常设化，可同时推行一项额外政策。",
    fx: {
      "policySlotsAdd": 1,
      "stabilityAdd": 3,
    },
    modifiers: [
      {
        key: "policySlotsAdd",
        target: "gov.policySlots",
        op: "add",
        value: 1,
        unit: "个",
        note: "政策槽位 +1 个",
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
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d30-protest"],
    mitigatesDetail: [
      { disaster: "d30-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-03", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-03", note: "与「直接民主」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "政策槽位 +1 个。",
      "殖民地稳定度 +3 点。",
    ],
    researchCost: {
      tech: 35,
      credits: 175,
      timeSec: 210,
      note: "研究耗时 210 秒，另耗星币 175。",
    },
    levels: [
      { level: 1, cost: 35, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 70, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 140, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 2,
      urgency: 5,
      note: "AI 总督推荐权重：T1 科技优先度 2。",
    },
    balance: {
      costPerEffect: 17.5,
      powerRating: 16,
      note: "性价比 17.5 科技点/效果项，强度评级 16。",
    },
  },
  // t30-pol-03 直接民主 [政治·T2] 造价 50 科技点
  "t30-pol-03": {
    id: "t30-pol-03",
    name: "直接民主",
    icon: "📢",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 50,
    researchTimeSec: 300,
    needs: ["t30-pol-02"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-02", note: "需先研究「市民议会」。" },
    ],
    desc: "重大决策由全体居民公投决定。",
    fx: {
      "happinessAdd": 8,
      "revoltMul": 0.9,
    },
    modifiers: [
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 8,
        unit: "点",
        note: "居民幸福度 +8 点",
      },
      {
        key: "revoltMul",
        target: "risk.revoltChance",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "叛乱概率 ×0.9",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-strike", "d30-protest"],
    mitigatesDetail: [
      { disaster: "d30-strike", note: "缓解「大罢工」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-04", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-04", note: "与「代议制」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +8 点。",
      "叛乱概率 ×0.9。",
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
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 25.0,
      powerRating: 26,
      note: "性价比 25.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-pol-04 代议制 [政治·T2] 造价 45 科技点
  "t30-pol-04": {
    id: "t30-pol-04",
    name: "代议制",
    icon: "🪑",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 45,
    researchTimeSec: 270,
    needs: ["t30-pol-01"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-01", note: "需先研究「基层民主」。" },
    ],
    desc: "选出代表代行议政，提高决策效率。",
    fx: {
      "stabilityAdd": 5,
      "policySlotsAdd": 1,
    },
    modifiers: [
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 5,
        unit: "点",
        note: "殖民地稳定度 +5 点",
      },
      {
        key: "policySlotsAdd",
        target: "gov.policySlots",
        op: "add",
        value: 1,
        unit: "个",
        note: "政策槽位 +1 个",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-coup"],
    mitigatesDetail: [
      { disaster: "d30-coup", note: "缓解「政变」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-05", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-05", note: "与「两院议会」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "殖民地稳定度 +5 点。",
      "政策槽位 +1 个。",
    ],
    researchCost: {
      tech: 45,
      credits: 225,
      timeSec: 270,
      note: "研究耗时 270 秒，另耗星币 225。",
    },
    levels: [
      { level: 1, cost: 45, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 90, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 180, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 22.5,
      powerRating: 26,
      note: "性价比 22.5 科技点/效果项，强度评级 26。",
    },
  },
  // t30-pol-05 两院议会 [政治·T2] 造价 70 科技点
  "t30-pol-05": {
    id: "t30-pol-05",
    name: "两院议会",
    icon: "🏛️",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 70,
    researchTimeSec: 420,
    needs: ["t30-pol-04"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-04", note: "需先研究「代议制」。" },
    ],
    desc: "上下两院互相制衡，立法更稳健。",
    fx: {
      "policySlotsAdd": 1,
      "stabilityAdd": 5,
    },
    modifiers: [
      {
        key: "policySlotsAdd",
        target: "gov.policySlots",
        op: "add",
        value: 1,
        unit: "个",
        note: "政策槽位 +1 个",
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
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-coup"],
    mitigatesDetail: [
      { disaster: "d30-coup", note: "缓解「政变」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-06", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-06", note: "与「政党制度」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "政策槽位 +1 个。",
      "殖民地稳定度 +5 点。",
    ],
    researchCost: {
      tech: 70,
      credits: 350,
      timeSec: 420,
      note: "研究耗时 420 秒，另耗星币 350。",
    },
    levels: [
      { level: 1, cost: 70, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 140, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 280, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 35.0,
      powerRating: 26,
      note: "性价比 35.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-pol-06 政党制度 [政治·T2] 造价 60 科技点
  "t30-pol-06": {
    id: "t30-pol-06",
    name: "政党制度",
    icon: "🎌",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 60,
    researchTimeSec: 360,
    needs: ["t30-pol-02"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-02", note: "需先研究「市民议会」。" },
    ],
    desc: "政党竞争让政策辩论公开化。",
    fx: {
      "happinessAdd": 5,
      "taxMul": 1.05,
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
        key: "taxMul",
        target: "econ.taxRate",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "税收效率 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-protest"],
    mitigatesDetail: [
      { disaster: "d30-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-07", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-07", note: "与「选举改革」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +5 点。",
      "税收效率 ×1.05。",
    ],
    researchCost: {
      tech: 60,
      credits: 300,
      timeSec: 360,
      note: "研究耗时 360 秒，另耗星币 300。",
    },
    levels: [
      { level: 1, cost: 60, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 120, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 240, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 30.0,
      powerRating: 26,
      note: "性价比 30.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-pol-07 选举改革 [政治·T2] 造价 80 科技点
  "t30-pol-07": {
    id: "t30-pol-07",
    name: "选举改革",
    icon: "🗳️",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 80,
    researchTimeSec: 480,
    needs: ["t30-pol-05", "t30-pol-06"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-05", note: "需先研究「两院议会」。" },
      { type: "tech", ref: "t30-pol-06", note: "需先研究「政党制度」。" },
    ],
    desc: "任期与罢免规则写进宪法。",
    fx: {
      "stabilityAdd": 8,
      "revoltMul": 0.85,
    },
    modifiers: [
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 8,
        unit: "点",
        note: "殖民地稳定度 +8 点",
      },
      {
        key: "revoltMul",
        target: "risk.revoltChance",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "叛乱概率 ×0.85",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-coup", "d30-strike"],
    mitigatesDetail: [
      { disaster: "d30-coup", note: "缓解「政变」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-strike", note: "缓解「大罢工」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-08", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-08", note: "与「新闻自由」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "殖民地稳定度 +8 点。",
      "叛乱概率 ×0.85。",
    ],
    researchCost: {
      tech: 80,
      credits: 400,
      timeSec: 480,
      note: "研究耗时 480 秒，另耗星币 400。",
    },
    levels: [
      { level: 1, cost: 80, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 160, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 320, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 40.0,
      powerRating: 26,
      note: "性价比 40.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-pol-08 新闻自由 [政治·T2] 造价 55 科技点
  "t30-pol-08": {
    id: "t30-pol-08",
    name: "新闻自由",
    icon: "📰",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 55,
    researchTimeSec: 330,
    needs: ["t30-pol-01"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-01", note: "需先研究「基层民主」。" },
    ],
    desc: "独立媒体监督市政，贪腐无处藏身。",
    fx: {
      "happinessAdd": 6,
      "corruptionMul": 0.8,
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
        key: "corruptionMul",
        target: "risk.corruption",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "腐败发生率 ×0.8",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-corrupt"],
    mitigatesDetail: [
      { disaster: "d30-corrupt", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-09", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-09", note: "与「宣传中心」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +6 点。",
      "腐败发生率 ×0.8。",
    ],
    researchCost: {
      tech: 55,
      credits: 275,
      timeSec: 330,
      note: "研究耗时 330 秒，另耗星币 275。",
    },
    levels: [
      { level: 1, cost: 55, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 110, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 220, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 27.5,
      powerRating: 26,
      note: "性价比 27.5 科技点/效果项，强度评级 26。",
    },
  },
  // t30-pol-09 宣传中心 [政治·T2] 造价 65 科技点
  "t30-pol-09": {
    id: "t30-pol-09",
    name: "宣传中心",
    icon: "📣",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 65,
    researchTimeSec: 390,
    needs: ["t30-pol-08"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-08", note: "需先研究「新闻自由」。" },
    ],
    desc: "官方频道统一发布市政信息。",
    fx: {
      "happinessAdd": 8,
      "stabilityAdd": 5,
    },
    modifiers: [
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 8,
        unit: "点",
        note: "居民幸福度 +8 点",
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
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: ["b30-propaganda"],
    unlockBuildings: ["b30-propaganda"],
    requires: {
      minPop: 20,
      buildings: ["lab"],
      wonders: [],
      note: "需人口 ≥20 人且拥有实验室。",
    },
    mitigates: ["d30-protest"],
    mitigatesDetail: [
      { disaster: "d30-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-10", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-10", note: "与「舆论引导」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +8 点。",
      "殖民地稳定度 +5 点。",
      "解锁建筑「宣传中心」。",
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
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 32.5,
      powerRating: 26,
      note: "性价比 32.5 科技点/效果项，强度评级 26。",
    },
  },
  // t30-pol-10 舆论引导 [政治·T3] 造价 90 科技点
  "t30-pol-10": {
    id: "t30-pol-10",
    name: "舆论引导",
    icon: "🎙️",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 90,
    researchTimeSec: 540,
    needs: ["t30-pol-09"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-09", note: "需先研究「宣传中心」。" },
    ],
    desc: "危机时快速统一口径，安抚居民情绪。",
    fx: {
      "stabilityAdd": 8,
      "revoltMul": 0.8,
    },
    modifiers: [
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 8,
        unit: "点",
        note: "殖民地稳定度 +8 点",
      },
      {
        key: "revoltMul",
        target: "risk.revoltChance",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "叛乱概率 ×0.8",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-strike", "d30-protest"],
    mitigatesDetail: [
      { disaster: "d30-strike", note: "缓解「大罢工」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-11", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-11", note: "与「心理战」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "殖民地稳定度 +8 点。",
      "叛乱概率 ×0.8。",
    ],
    researchCost: {
      tech: 90,
      credits: 450,
      timeSec: 540,
      note: "研究耗时 540 秒，另耗星币 450。",
    },
    levels: [
      { level: 1, cost: 90, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 180, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 360, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 45.0,
      powerRating: 36,
      note: "性价比 45.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-pol-11 心理战 [政治·T3] 造价 110 科技点
  "t30-pol-11": {
    id: "t30-pol-11",
    name: "心理战",
    icon: "🧠",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 110,
    researchTimeSec: 660,
    needs: ["t30-pol-10"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-10", note: "需先研究「舆论引导」。" },
    ],
    desc: "用广播与传单瓦解敌方士气。",
    fx: {
      "stabilityAdd": 5,
      "attackMul": 1.1,
    },
    modifiers: [
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 5,
        unit: "点",
        note: "殖民地稳定度 +5 点",
      },
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "攻击力 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-12", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "殖民地稳定度 +5 点。",
      "攻击力 ×1.1。",
    ],
    researchCost: {
      tech: 110,
      credits: 550,
      timeSec: 660,
      note: "研究耗时 660 秒，另耗星币 550。",
    },
    levels: [
      { level: 1, cost: 110, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 220, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 440, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 55.0,
      powerRating: 36,
      note: "性价比 55.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-pol-12 情报局 [政治·T2] 造价 75 科技点
  "t30-pol-12": {
    id: "t30-pol-12",
    name: "情报局",
    icon: "🕵️",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 75,
    researchTimeSec: 450,
    needs: ["t30-pol-01"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-01", note: "需先研究「基层民主」。" },
    ],
    desc: "秘密情报网提前发现针对殖民地的阴谋。",
    fx: {
      "pirateMul": 0.85,
      "coupMul": 0.85,
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
        key: "coupMul",
        target: "risk.coupChance",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "政变概率 ×0.85",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: ["b30-intel"],
    unlockBuildings: ["b30-intel"],
    requires: {
      minPop: 20,
      buildings: ["lab"],
      wonders: [],
      note: "需人口 ≥20 人且拥有实验室。",
    },
    mitigates: ["d30-coup", "d30-pirate"],
    mitigatesDetail: [
      { disaster: "d30-coup", note: "缓解「政变」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-13", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-13", note: "与「反间谍」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "海盗袭击概率 ×0.85。",
      "政变概率 ×0.85。",
      "解锁建筑「情报局」。",
    ],
    researchCost: {
      tech: 75,
      credits: 375,
      timeSec: 450,
      note: "研究耗时 450 秒，另耗星币 375。",
    },
    levels: [
      { level: 1, cost: 75, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 150, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 300, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 37.5,
      powerRating: 26,
      note: "性价比 37.5 科技点/效果项，强度评级 26。",
    },
  },
  // t30-pol-13 反间谍 [政治·T3] 造价 100 科技点
  "t30-pol-13": {
    id: "t30-pol-13",
    name: "反间谍",
    icon: "🔍",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 100,
    researchTimeSec: 600,
    needs: ["t30-pol-12"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-12", note: "需先研究「情报局」。" },
    ],
    desc: "甄别内奸，切断敌方情报链。",
    fx: {
      "coupMul": 0.6,
      "pirateMul": 0.8,
    },
    modifiers: [
      {
        key: "coupMul",
        target: "risk.coupChance",
        op: "mul",
        value: 0.6,
        unit: "倍",
        note: "政变概率 ×0.6",
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
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-coup", "d30-pirate"],
    mitigatesDetail: [
      { disaster: "d30-coup", note: "缓解「政变」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-14", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-14", note: "与「信号情报」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "政变概率 ×0.6。",
      "海盗袭击概率 ×0.8。",
    ],
    researchCost: {
      tech: 100,
      credits: 500,
      timeSec: 600,
      note: "研究耗时 600 秒，另耗星币 500。",
    },
    levels: [
      { level: 1, cost: 100, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 200, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 400, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 50.0,
      powerRating: 36,
      note: "性价比 50.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-pol-14 信号情报 [政治·T3] 造价 120 科技点
  "t30-pol-14": {
    id: "t30-pol-14",
    name: "信号情报",
    icon: "📡",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 120,
    researchTimeSec: 720,
    needs: ["t30-pol-12"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-12", note: "需先研究「情报局」。" },
    ],
    desc: "截获敌方通讯，预警时间延长 10 秒。",
    fx: {
      "warnAddSec": 10,
      "pirateMul": 0.75,
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
        key: "pirateMul",
        target: "risk.pirateChance",
        op: "mul",
        value: 0.75,
        unit: "倍",
        note: "海盗袭击概率 ×0.75",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-pirate", "d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-15", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-15", note: "与「深空监听」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "灾难预警时间 +10 秒。",
      "海盗袭击概率 ×0.75。",
    ],
    researchCost: {
      tech: 120,
      credits: 600,
      timeSec: 720,
      note: "研究耗时 720 秒，另耗星币 600。",
    },
    levels: [
      { level: 1, cost: 120, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 240, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 480, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 60.0,
      powerRating: 36,
      note: "性价比 60.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-pol-15 深空监听 [政治·T4] 造价 140 科技点
  "t30-pol-15": {
    id: "t30-pol-15",
    name: "深空监听",
    icon: "🛰️",
    branch: "politics",
    branchName: "政治",
    tier: 4,
    cost: 140,
    researchTimeSec: 840,
    needs: ["t30-pol-14"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-14", note: "需先研究「信号情报」。" },
    ],
    desc: "深空阵列 24 小时监听不明信号。",
    fx: {
      "warnAddSec": 15,
      "invasionMul": 0.8,
    },
    modifiers: [
      {
        key: "warnAddSec",
        target: "sys.warnTime",
        op: "add",
        value: 15,
        unit: "秒",
        note: "灾难预警时间 +15 秒",
      },
      {
        key: "invasionMul",
        target: "risk.invasionChance",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "外星入侵概率 ×0.8",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-16", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-16", note: "与「外交学院」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "灾难预警时间 +15 秒。",
      "外星入侵概率 ×0.8。",
    ],
    researchCost: {
      tech: 140,
      credits: 700,
      timeSec: 840,
      note: "研究耗时 840 秒，另耗星币 700。",
    },
    levels: [
      { level: 1, cost: 140, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 280, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 560, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 70.0,
      powerRating: 46,
      note: "性价比 70.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-pol-16 外交学院 [政治·T2] 造价 70 科技点
  "t30-pol-16": {
    id: "t30-pol-16",
    name: "外交学院",
    icon: "🎓",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 70,
    researchTimeSec: 420,
    needs: ["t30-pol-04"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-04", note: "需先研究「代议制」。" },
    ],
    desc: "培养职业外交官，对外谈判更有利。",
    fx: {
      "diplomacyMul": 1.2,
      "tradeMul": 1.1,
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
        value: 1.1,
        unit: "倍",
        note: "贸易收入 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-pol-17", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-17", note: "与「贸易谈判」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.2。",
      "贸易收入 ×1.1。",
    ],
    researchCost: {
      tech: 70,
      credits: 350,
      timeSec: 420,
      note: "研究耗时 420 秒，另耗星币 350。",
    },
    levels: [
      { level: 1, cost: 70, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 140, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 280, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 35.0,
      powerRating: 26,
      note: "性价比 35.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-pol-17 贸易谈判 [政治·T3] 造价 95 科技点
  "t30-pol-17": {
    id: "t30-pol-17",
    name: "贸易谈判",
    icon: "🤝",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 95,
    researchTimeSec: 570,
    needs: ["t30-pol-16"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-16", note: "需先研究「外交学院」。" },
    ],
    desc: "关税与航线谈判为殖民地多争取 25% 收益。",
    fx: {
      "tradeMul": 1.25,
      "diplomacyMul": 1.1,
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
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "外交关系增速 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-pol-18", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-18", note: "与「星际条约」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.25。",
      "外交关系增速 ×1.1。",
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
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 47.5,
      powerRating: 36,
      note: "性价比 47.5 科技点/效果项，强度评级 36。",
    },
  },
  // t30-pol-18 星际条约 [政治·T3] 造价 130 科技点
  "t30-pol-18": {
    id: "t30-pol-18",
    name: "星际条约",
    icon: "📜",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 130,
    researchTimeSec: 780,
    needs: ["t30-pol-16", "t30-pol-05"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-16", note: "需先研究「外交学院」。" },
      { type: "tech", ref: "t30-pol-05", note: "需先研究「两院议会」。" },
    ],
    desc: "与地球、月球签署长期互助条约。",
    fx: {
      "diplomacyMul": 1.5,
    },
    modifiers: [
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "外交关系增速 ×1.5",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: ["b30-embassy"],
    unlockBuildings: ["b30-embassy"],
    requires: {
      minPop: 40,
      buildings: ["lab"],
      wonders: [],
      note: "需人口 ≥40 人且拥有实验室。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-pol-19", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-19", note: "与「同盟体系」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.5。",
      "解锁建筑「大使馆」。",
    ],
    researchCost: {
      tech: 130,
      credits: 650,
      timeSec: 780,
      note: "研究耗时 780 秒，另耗星币 650。",
    },
    levels: [
      { level: 1, cost: 130, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 260, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 520, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 130.0,
      powerRating: 33,
      note: "性价比 130.0 科技点/效果项，强度评级 33。",
    },
  },
  // t30-pol-19 同盟体系 [政治·T4] 造价 160 科技点
  "t30-pol-19": {
    id: "t30-pol-19",
    name: "同盟体系",
    icon: "🛡️",
    branch: "politics",
    branchName: "政治",
    tier: 4,
    cost: 160,
    researchTimeSec: 960,
    needs: ["t30-pol-18"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-18", note: "需先研究「星际条约」。" },
    ],
    desc: "盟友舰队在战时驰援星港。",
    fx: {
      "defenseMul": 1.2,
      "diplomacyMul": 1.2,
    },
    modifiers: [
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "防御力 ×1.2",
      },
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "外交关系增速 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: ["d30-alien", "d30-pirate"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-20", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-20", note: "与「殖民宪章」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 ×1.2。",
      "外交关系增速 ×1.2。",
    ],
    researchCost: {
      tech: 160,
      credits: 800,
      timeSec: 960,
      note: "研究耗时 960 秒，另耗星币 800。",
    },
    levels: [
      { level: 1, cost: 160, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 320, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 640, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 80.0,
      powerRating: 46,
      note: "性价比 80.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-pol-20 殖民宪章 [政治·T3] 造价 100 科技点
  "t30-pol-20": {
    id: "t30-pol-20",
    name: "殖民宪章",
    icon: "📖",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 100,
    researchTimeSec: 600,
    needs: ["t30-pol-05"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-05", note: "需先研究「两院议会」。" },
    ],
    desc: "宪章保障居民权利，吸引更多移民。",
    fx: {
      "popCapAdd": 20,
      "popGrowthMul": 1.15,
    },
    modifiers: [
      {
        key: "popCapAdd",
        target: "pop.cap",
        op: "add",
        value: 20,
        unit: "人",
        note: "人口上限 +20 人",
      },
      {
        key: "popGrowthMul",
        target: "pop.growth",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "人口增长速度 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-protest"],
    mitigatesDetail: [
      { disaster: "d30-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-21", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-21", note: "与「火星宪法」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口上限 +20 人。",
      "人口增长速度 ×1.15。",
    ],
    researchCost: {
      tech: 100,
      credits: 500,
      timeSec: 600,
      note: "研究耗时 600 秒，另耗星币 500。",
    },
    levels: [
      { level: 1, cost: 100, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 200, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 400, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 50.0,
      powerRating: 36,
      note: "性价比 50.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-pol-21 火星宪法 [政治·T4] 造价 150 科技点
  "t30-pol-21": {
    id: "t30-pol-21",
    name: "火星宪法",
    icon: "⚖️",
    branch: "politics",
    branchName: "政治",
    tier: 4,
    cost: 150,
    researchTimeSec: 900,
    needs: ["t30-pol-20", "t-surv-15"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-20", note: "需先研究「殖民宪章」。" },
      { type: "tech", ref: "t-surv-15", note: "需先研究「火星公民」。" },
    ],
    desc: "火星宪法生效，叛乱被釜底抽薪。",
    fx: {
      "popCapAdd": 30,
      "revoltImmune": 1,
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
        key: "revoltImmune",
        target: "risk.revoltImmune",
        op: "flag",
        value: 1,
        unit: "",
        note: "叛乱免疫",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: ["d30-coup", "d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-coup", note: "缓解「政变」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-22", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-22", note: "与「廉政公署」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口上限 +30 人。",
      "叛乱免疫。",
    ],
    researchCost: {
      tech: 150,
      credits: 750,
      timeSec: 900,
      note: "研究耗时 900 秒，另耗星币 750。",
    },
    levels: [
      { level: 1, cost: 150, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 300, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 600, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 75.0,
      powerRating: 46,
      note: "性价比 75.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-pol-22 廉政公署 [政治·T3] 造价 85 科技点
  "t30-pol-22": {
    id: "t30-pol-22",
    name: "廉政公署",
    icon: "⚖️",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 85,
    researchTimeSec: 510,
    needs: ["t30-pol-08"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-08", note: "需先研究「新闻自由」。" },
    ],
    desc: "独立反腐机构审计每一笔市政开支。",
    fx: {
      "corruptionMul": 0.5,
      "taxMul": 1.1,
    },
    modifiers: [
      {
        key: "corruptionMul",
        target: "risk.corruption",
        op: "mul",
        value: 0.5,
        unit: "倍",
        note: "腐败发生率 ×0.5",
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
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-corrupt"],
    mitigatesDetail: [
      { disaster: "d30-corrupt", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-23", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-23", note: "与「审计制度」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "腐败发生率 ×0.5。",
      "税收效率 ×1.1。",
    ],
    researchCost: {
      tech: 85,
      credits: 425,
      timeSec: 510,
      note: "研究耗时 510 秒，另耗星币 425。",
    },
    levels: [
      { level: 1, cost: 85, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 170, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 340, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 42.5,
      powerRating: 36,
      note: "性价比 42.5 科技点/效果项，强度评级 36。",
    },
  },
  // t30-pol-23 审计制度 [政治·T3] 造价 110 科技点
  "t30-pol-23": {
    id: "t30-pol-23",
    name: "审计制度",
    icon: "🧾",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 110,
    researchTimeSec: 660,
    needs: ["t30-pol-22"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-22", note: "需先研究「廉政公署」。" },
    ],
    desc: "年度审计追回流失税款。",
    fx: {
      "taxMul": 1.15,
      "corruptionMul": 0.7,
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
        key: "corruptionMul",
        target: "risk.corruption",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "腐败发生率 ×0.7",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-corrupt"],
    mitigatesDetail: [
      { disaster: "d30-corrupt", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-24", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-24", note: "与「危机管理」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "税收效率 ×1.15。",
      "腐败发生率 ×0.7。",
    ],
    researchCost: {
      tech: 110,
      credits: 550,
      timeSec: 660,
      note: "研究耗时 660 秒，另耗星币 550。",
    },
    levels: [
      { level: 1, cost: 110, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 220, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 440, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 55.0,
      powerRating: 36,
      note: "性价比 55.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-pol-24 危机管理 [政治·T3] 造价 120 科技点
  "t30-pol-24": {
    id: "t30-pol-24",
    name: "危机管理",
    icon: "🚨",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 120,
    researchTimeSec: 720,
    needs: ["t30-pol-07"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-07", note: "需先研究「选举改革」。" },
    ],
    desc: "应急指挥体系让所有灾难缩短 15%。",
    fx: {
      "disasterDurMul": 0.85,
      "stabilityAdd": 10,
    },
    modifiers: [
      {
        key: "disasterDurMul",
        target: "risk.disasterDuration",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "灾难持续时间 ×0.85",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 10,
        unit: "点",
        note: "殖民地稳定度 +10 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-ecocollapse", "d30-water"],
    mitigatesDetail: [
      { disaster: "d30-ecocollapse", note: "缓解「生态崩溃」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-water", note: "缓解「水源污染」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-25", "t30-mil-10"],
    comboWith: [
      { tech: "t30-pol-25", note: "与「星际民主」同研时，两项效果各 +10%。" },
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "灾难持续时间 ×0.85。",
      "殖民地稳定度 +10 点。",
    ],
    researchCost: {
      tech: 120,
      credits: 600,
      timeSec: 720,
      note: "研究耗时 720 秒，另耗星币 600。",
    },
    levels: [
      { level: 1, cost: 120, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 240, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 480, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 60.0,
      powerRating: 36,
      note: "性价比 60.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-pol-25 星际民主 [政治·T5] 造价 280 科技点
  "t30-pol-25": {
    id: "t30-pol-25",
    name: "星际民主",
    icon: "🌟",
    branch: "politics",
    branchName: "政治",
    tier: 5,
    cost: 280,
    researchTimeSec: 1680,
    needs: ["t30-pol-07", "t30-pol-18", "t30-pol-21"],
    needsDetail: [
      { type: "tech", ref: "t30-pol-07", note: "需先研究「选举改革」。" },
      { type: "tech", ref: "t30-pol-18", note: "需先研究「星际条约」。" },
      { type: "tech", ref: "t30-pol-21", note: "需先研究「火星宪法」。" },
    ],
    desc: "全人类第一次星际民主实践，第十胜利进度 +1。",
    fx: {
      "allProdMul": 1.1,
      "happinessAdd": 15,
      "stabilityAdd": 15,
      "victoryProgressAdd": 1,
    },
    modifiers: [
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "全部生产建筑产量 ×1.1",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 15,
        unit: "点",
        note: "居民幸福度 +15 点",
      },
      {
        key: "stabilityAdd",
        target: "city.stability",
        op: "add",
        value: 15,
        unit: "点",
        note: "殖民地稳定度 +15 点",
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
      { scope: "perPop", base: 5, perUnit: 0.5, cap: 25, note: "每 100 人口，效果额外提升 50%，上限 250%。" },
      { scope: "perBuilding", base: 5, perUnit: 0.25, cap: 15, note: "每座同系建筑，效果额外提升 25%，上限 150%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 80,
      buildings: [],
      wonders: [],
      note: "需人口 ≥80 人，无建筑要求。",
    },
    mitigates: ["d30-coup", "d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-coup", note: "缓解「政变」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-10"],
    comboWith: [
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "全部生产建筑产量 ×1.1。",
      "居民幸福度 +15 点。",
      "殖民地稳定度 +15 点。",
      "胜利进度 +1 点。",
    ],
    researchCost: {
      tech: 280,
      credits: 1400,
      timeSec: 1680,
      note: "研究耗时 1680 秒，另耗星币 1400。",
    },
    levels: [
      { level: 1, cost: 280, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 560, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1120, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 10,
      urgency: 1,
      note: "AI 总督推荐权重：T5 科技优先度 10。",
    },
    balance: {
      costPerEffect: 70.0,
      powerRating: 62,
      note: "性价比 70.0 科技点/效果项，强度评级 62。",
    },
  },
  // ---------- 深空系（25 项） ----------
  // t30-ds-01 轨道力学进阶 [深空·T1] 造价 30 科技点
  "t30-ds-01": {
    id: "t30-ds-01",
    name: "轨道力学进阶",
    icon: "🛰️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 1,
    cost: 30,
    researchTimeSec: 180,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "更省燃料的变轨算法，轨道建筑便宜 10%。",
    fx: {
      "orbitalCostMul": 0.9,
    },
    modifiers: [
      {
        key: "orbitalCostMul",
        target: "cost.orbital",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "轨道建筑成本 ×0.9",
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
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-02", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-02", note: "与「霍曼转移优化」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "轨道建筑成本 ×0.9。",
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
    aiWeight: {
      priority: 2,
      urgency: 5,
      note: "AI 总督推荐权重：T1 科技优先度 2。",
    },
    balance: {
      costPerEffect: 30.0,
      powerRating: 13,
      note: "性价比 30.0 科技点/效果项，强度评级 13。",
    },
  },
  // t30-ds-02 霍曼转移优化 [深空·T2] 造价 45 科技点
  "t30-ds-02": {
    id: "t30-ds-02",
    name: "霍曼转移优化",
    icon: "🔄",
    branch: "deepSpace",
    branchName: "深空",
    tier: 2,
    cost: 45,
    researchTimeSec: 270,
    needs: ["t30-ds-01"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-01", note: "需先研究「轨道力学进阶」。" },
    ],
    desc: "贸易船走最优转移窗口，到访更快。",
    fx: {
      "tradeShipMul": 0.9,
    },
    modifiers: [
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
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-03", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-03", note: "与「月球基地」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易船到访间隔 ×0.9。",
    ],
    researchCost: {
      tech: 45,
      credits: 225,
      timeSec: 270,
      note: "研究耗时 270 秒，另耗星币 225。",
    },
    levels: [
      { level: 1, cost: 45, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 90, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 180, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 45.0,
      powerRating: 23,
      note: "性价比 45.0 科技点/效果项，强度评级 23。",
    },
  },
  // t30-ds-03 月球基地 [深空·T2] 造价 60 科技点
  "t30-ds-03": {
    id: "t30-ds-03",
    name: "月球基地",
    icon: "🌙",
    branch: "deepSpace",
    branchName: "深空",
    tier: 2,
    cost: 60,
    researchTimeSec: 360,
    needs: ["t30-ds-01"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-01", note: "需先研究「轨道力学进阶」。" },
    ],
    desc: "在月球南极建立永久前哨站。",
    fx: {
      "unlockMoonBase": 1,
    },
    modifiers: [
      {
        key: "unlockMoonBase",
        target: "unlock.moonBase",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁月球基地",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: ["b30-moonbase"],
    unlockBuildings: ["b30-moonbase"],
    requires: {
      minPop: 20,
      buildings: ["lab"],
      wonders: [],
      note: "需人口 ≥20 人且拥有实验室。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-04", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-04", note: "与「月壤开采」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁月球基地。",
      "解锁建筑「月球基地」。",
    ],
    researchCost: {
      tech: 60,
      credits: 300,
      timeSec: 360,
      note: "研究耗时 360 秒，另耗星币 300。",
    },
    levels: [
      { level: 1, cost: 60, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 120, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 240, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 60.0,
      powerRating: 23,
      note: "性价比 60.0 科技点/效果项，强度评级 23。",
    },
  },
  // t30-ds-04 月壤开采 [深空·T2] 造价 80 科技点
  "t30-ds-04": {
    id: "t30-ds-04",
    name: "月壤开采",
    icon: "⛏️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 2,
    cost: 80,
    researchTimeSec: 480,
    needs: ["t30-ds-03"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-03", note: "需先研究「月球基地」。" },
    ],
    desc: "加热月壤提取氦3与金属。",
    fx: {
      "minerMul": 1.2,
      "he3Add": 2,
    },
    modifiers: [
      {
        key: "minerMul",
        target: "prod.miner",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "采矿机产量 ×1.2",
      },
      {
        key: "he3Add",
        target: "prod.he3PerMin",
        op: "add",
        value: 2,
        unit: "/分钟",
        note: "氦3 +2/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-05", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-05", note: "与「月球穹顶」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "采矿机产量 ×1.2。",
      "氦3 +2/分钟。",
    ],
    researchCost: {
      tech: 80,
      credits: 400,
      timeSec: 480,
      note: "研究耗时 480 秒，另耗星币 400。",
    },
    levels: [
      { level: 1, cost: 80, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 160, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 320, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 40.0,
      powerRating: 26,
      note: "性价比 40.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-ds-05 月球穹顶 [深空·T3] 造价 100 科技点
  "t30-ds-05": {
    id: "t30-ds-05",
    name: "月球穹顶",
    icon: "🌐",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 100,
    researchTimeSec: 600,
    needs: ["t30-ds-03"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-03", note: "需先研究「月球基地」。" },
    ],
    desc: "月球居民区扩建，可容纳更多人口。",
    fx: {
      "popCapAdd": 15,
      "popGrowthMul": 1.1,
    },
    modifiers: [
      {
        key: "popCapAdd",
        target: "pop.cap",
        op: "add",
        value: 15,
        unit: "人",
        note: "人口上限 +15 人",
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
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-06", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口上限 +15 人。",
      "人口增长速度 ×1.1。",
    ],
    researchCost: {
      tech: 100,
      credits: 500,
      timeSec: 600,
      note: "研究耗时 600 秒，另耗星币 500。",
    },
    levels: [
      { level: 1, cost: 100, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 200, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 400, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 50.0,
      powerRating: 36,
      note: "性价比 50.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-ds-06 小行星捕获 [深空·T3] 造价 90 科技点
  "t30-ds-06": {
    id: "t30-ds-06",
    name: "小行星捕获",
    icon: "☄️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 90,
    researchTimeSec: 540,
    needs: ["t30-ds-02"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-02", note: "需先研究「霍曼转移优化」。" },
    ],
    desc: "引力拖船把近地小行星拖回加工轨道。",
    fx: {
      "asteroidYieldMul": 2,
    },
    modifiers: [
      {
        key: "asteroidYieldMul",
        target: "prod.asteroid",
        op: "mul",
        value: 2,
        unit: "倍",
        note: "小行星采矿产量 ×2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-07", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-07", note: "与「小行星精炼」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "小行星采矿产量 ×2。",
    ],
    researchCost: {
      tech: 90,
      credits: 450,
      timeSec: 540,
      note: "研究耗时 540 秒，另耗星币 450。",
    },
    levels: [
      { level: 1, cost: 90, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 180, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 360, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 90.0,
      powerRating: 33,
      note: "性价比 90.0 科技点/效果项，强度评级 33。",
    },
  },
  // t30-ds-07 小行星精炼 [深空·T3] 造价 120 科技点
  "t30-ds-07": {
    id: "t30-ds-07",
    name: "小行星精炼",
    icon: "🏭",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 120,
    researchTimeSec: 720,
    needs: ["t30-ds-06"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-06", note: "需先研究「小行星捕获」。" },
    ],
    desc: "轨道精炼厂把小行星变成钢材。",
    fx: {
      "steelAdd": 5,
      "asteroidYieldMul": 1.5,
    },
    modifiers: [
      {
        key: "steelAdd",
        target: "prod.steelPerMin",
        op: "add",
        value: 5,
        unit: "/分钟",
        note: "钢材 +5/分钟",
      },
      {
        key: "asteroidYieldMul",
        target: "prod.asteroid",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "小行星采矿产量 ×1.5",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-08", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-08", note: "与「深空采矿船」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "钢材 +5/分钟。",
      "小行星采矿产量 ×1.5。",
    ],
    researchCost: {
      tech: 120,
      credits: 600,
      timeSec: 720,
      note: "研究耗时 720 秒，另耗星币 600。",
    },
    levels: [
      { level: 1, cost: 120, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 240, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 480, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 60.0,
      powerRating: 36,
      note: "性价比 60.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-ds-08 深空采矿船 [深空·T4] 造价 150 科技点
  "t30-ds-08": {
    id: "t30-ds-08",
    name: "深空采矿船",
    icon: "🚀",
    branch: "deepSpace",
    branchName: "深空",
    tier: 4,
    cost: 150,
    researchTimeSec: 900,
    needs: ["t30-ds-07"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-07", note: "需先研究「小行星精炼」。" },
    ],
    desc: "采矿船队常驻小行星带回运矿石。",
    fx: {
      "ironAdd": 10,
      "asteroidRareAdd": 3,
    },
    modifiers: [
      {
        key: "ironAdd",
        target: "prod.ironPerMin",
        op: "add",
        value: 10,
        unit: "/分钟",
        note: "铁矿 +10/分钟",
      },
      {
        key: "asteroidRareAdd",
        target: "prod.rarePerMin",
        op: "add",
        value: 3,
        unit: "/分钟",
        note: "稀土 +3/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-09", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-09", note: "与「太阳帆舰队」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "铁矿 +10/分钟。",
      "稀土 +3/分钟。",
    ],
    researchCost: {
      tech: 150,
      credits: 750,
      timeSec: 900,
      note: "研究耗时 900 秒，另耗星币 750。",
    },
    levels: [
      { level: 1, cost: 150, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 300, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 600, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 75.0,
      powerRating: 46,
      note: "性价比 75.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-ds-09 太阳帆舰队 [深空·T2] 造价 70 科技点
  "t30-ds-09": {
    id: "t30-ds-09",
    name: "太阳帆舰队",
    icon: "⛵",
    branch: "deepSpace",
    branchName: "深空",
    tier: 2,
    cost: 70,
    researchTimeSec: 420,
    needs: ["t30-ds-02"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-02", note: "需先研究「霍曼转移优化」。" },
    ],
    desc: "光压帆船队让贸易航线更快更便宜。",
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
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-10", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-10", note: "与「离子推进」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易船到访间隔 ×0.8。",
      "贸易收入 ×1.1。",
    ],
    researchCost: {
      tech: 70,
      credits: 350,
      timeSec: 420,
      note: "研究耗时 420 秒，另耗星币 350。",
    },
    levels: [
      { level: 1, cost: 70, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 140, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 280, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 35.0,
      powerRating: 26,
      note: "性价比 35.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-ds-10 离子推进 [深空·T3] 造价 85 科技点
  "t30-ds-10": {
    id: "t30-ds-10",
    name: "离子推进",
    icon: "⚡",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 85,
    researchTimeSec: 510,
    needs: ["t30-ds-01"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-01", note: "需先研究「轨道力学进阶」。" },
    ],
    desc: "离子引擎让舰船巡航速度提升 50%。",
    fx: {
      "shipSpeedMul": 1.5,
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
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-11", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-11", note: "与「核热推进」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "舰船航速 ×1.5。",
    ],
    researchCost: {
      tech: 85,
      credits: 425,
      timeSec: 510,
      note: "研究耗时 510 秒，另耗星币 425。",
    },
    levels: [
      { level: 1, cost: 85, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 170, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 340, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 85.0,
      powerRating: 33,
      note: "性价比 85.0 科技点/效果项，强度评级 33。",
    },
  },
  // t30-ds-11 核热推进 [深空·T3] 造价 130 科技点
  "t30-ds-11": {
    id: "t30-ds-11",
    name: "核热推进",
    icon: "☢️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 130,
    researchTimeSec: 780,
    needs: ["t30-ds-10"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-10", note: "需先研究「离子推进」。" },
    ],
    desc: "核热火箭把航程时间砍半。",
    fx: {
      "shipSpeedMul": 2.0,
      "shipHpMul": 1.2,
    },
    modifiers: [
      {
        key: "shipSpeedMul",
        target: "fleet.speed",
        op: "mul",
        value: 2.0,
        unit: "倍",
        note: "舰船航速 ×2.0",
      },
      {
        key: "shipHpMul",
        target: "fleet.hp",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "舰船耐久 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-12", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-12", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "舰船航速 ×2.0。",
      "舰船耐久 ×1.2。",
    ],
    researchCost: {
      tech: 130,
      credits: 650,
      timeSec: 780,
      note: "研究耗时 780 秒，另耗星币 650。",
    },
    levels: [
      { level: 1, cost: 130, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 260, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 520, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 65.0,
      powerRating: 36,
      note: "性价比 65.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-ds-12 曲速理论 [深空·T4] 造价 200 科技点
  "t30-ds-12": {
    id: "t30-ds-12",
    name: "曲速理论",
    icon: "🌀",
    branch: "deepSpace",
    branchName: "深空",
    tier: 4,
    cost: 200,
    researchTimeSec: 1200,
    needs: ["t30-ds-11"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-11", note: "需先研究「核热推进」。" },
    ],
    desc: "曲速泡理论突破，星际航行成为可能。",
    fx: {
      "shipSpeedMul": 3.0,
      "tradeMul": 1.2,
    },
    modifiers: [
      {
        key: "shipSpeedMul",
        target: "fleet.speed",
        op: "mul",
        value: 3.0,
        unit: "倍",
        note: "舰船航速 ×3.0",
      },
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "贸易收入 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-13", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-13", note: "与「飞船装甲」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "舰船航速 ×3.0。",
      "贸易收入 ×1.2。",
    ],
    researchCost: {
      tech: 200,
      credits: 1000,
      timeSec: 1200,
      note: "研究耗时 1200 秒，另耗星币 1000。",
    },
    levels: [
      { level: 1, cost: 200, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 400, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 800, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 100.0,
      powerRating: 46,
      note: "性价比 100.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-ds-13 飞船装甲 [深空·T2] 造价 75 科技点
  "t30-ds-13": {
    id: "t30-ds-13",
    name: "飞船装甲",
    icon: "🛡️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 2,
    cost: 75,
    researchTimeSec: 450,
    needs: ["t30-ds-01"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-01", note: "需先研究「轨道力学进阶」。" },
    ],
    desc: "复合装甲让舰船更耐打。",
    fx: {
      "defenseAdd": 30,
      "shipHpMul": 1.5,
    },
    modifiers: [
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 30,
        unit: "点",
        note: "防御力 +30 点",
      },
      {
        key: "shipHpMul",
        target: "fleet.hp",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "舰船耐久 ×1.5",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-pirate"],
    mitigatesDetail: [
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-ds-14", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-14", note: "与「飞船武器」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 +30 点。",
      "舰船耐久 ×1.5。",
    ],
    researchCost: {
      tech: 75,
      credits: 375,
      timeSec: 450,
      note: "研究耗时 450 秒，另耗星币 375。",
    },
    levels: [
      { level: 1, cost: 75, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 150, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 300, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 37.5,
      powerRating: 26,
      note: "性价比 37.5 科技点/效果项，强度评级 26。",
    },
  },
  // t30-ds-14 飞船武器 [深空·T3] 造价 110 科技点
  "t30-ds-14": {
    id: "t30-ds-14",
    name: "飞船武器",
    icon: "🔫",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 110,
    researchTimeSec: 660,
    needs: ["t30-ds-13"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-13", note: "需先研究「飞船装甲」。" },
    ],
    desc: "舰载激光炮列装，火力提升 30%。",
    fx: {
      "attackMul": 1.3,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "攻击力 ×1.3",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-pirate", "d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-ds-15", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-15", note: "与「舰队指挥」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.3。",
    ],
    researchCost: {
      tech: 110,
      credits: 550,
      timeSec: 660,
      note: "研究耗时 660 秒，另耗星币 550。",
    },
    levels: [
      { level: 1, cost: 110, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 220, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 440, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 110.0,
      powerRating: 33,
      note: "性价比 110.0 科技点/效果项，强度评级 33。",
    },
  },
  // t30-ds-15 舰队指挥 [深空·T4] 造价 140 科技点
  "t30-ds-15": {
    id: "t30-ds-15",
    name: "舰队指挥",
    icon: "🎖️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 4,
    cost: 140,
    researchTimeSec: 840,
    needs: ["t30-ds-14"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-14", note: "需先研究「飞船武器」。" },
    ],
    desc: "旗舰指挥链让整支舰队协同作战。",
    fx: {
      "attackMul": 1.5,
      "defenseMul": 1.2,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "攻击力 ×1.5",
      },
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "防御力 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-ds-16", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-16", note: "与「外星语言学」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.5。",
      "防御力 ×1.2。",
    ],
    researchCost: {
      tech: 140,
      credits: 700,
      timeSec: 840,
      note: "研究耗时 840 秒，另耗星币 700。",
    },
    levels: [
      { level: 1, cost: 140, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 280, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 560, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 70.0,
      powerRating: 46,
      note: "性价比 70.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-ds-16 外星语言学 [深空·T3] 造价 90 科技点
  "t30-ds-16": {
    id: "t30-ds-16",
    name: "外星语言学",
    icon: "👽",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 90,
    researchTimeSec: 540,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "破译外星信号的语言结构。",
    fx: {
      "diplomacyMul": 1.3,
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
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-ds-17", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-17", note: "与「外星考古」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.3。",
    ],
    researchCost: {
      tech: 90,
      credits: 450,
      timeSec: 540,
      note: "研究耗时 540 秒，另耗星币 450。",
    },
    levels: [
      { level: 1, cost: 90, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 180, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 360, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 90.0,
      powerRating: 33,
      note: "性价比 90.0 科技点/效果项，强度评级 33。",
    },
  },
  // t30-ds-17 外星考古 [深空·T3] 造价 120 科技点
  "t30-ds-17": {
    id: "t30-ds-17",
    name: "外星考古",
    icon: "🏺",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 120,
    researchTimeSec: 720,
    needs: ["t30-ds-16"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-16", note: "需先研究「外星语言学」。" },
    ],
    desc: "研究坠落的外星遗迹，实验室产出提升。",
    fx: {
      "labMul": 1.2,
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
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-ds-18", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-18", note: "与「外星生物学」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "实验室科技产量 ×1.2。",
    ],
    researchCost: {
      tech: 120,
      credits: 600,
      timeSec: 720,
      note: "研究耗时 720 秒，另耗星币 600。",
    },
    levels: [
      { level: 1, cost: 120, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 240, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 480, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 120.0,
      powerRating: 33,
      note: "性价比 120.0 科技点/效果项，强度评级 33。",
    },
  },
  // t30-ds-18 外星生物学 [深空·T4] 造价 150 科技点
  "t30-ds-18": {
    id: "t30-ds-18",
    name: "外星生物学",
    icon: "🧬",
    branch: "deepSpace",
    branchName: "深空",
    tier: 4,
    cost: 150,
    researchTimeSec: 900,
    needs: ["t30-ds-17"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-17", note: "需先研究「外星考古」。" },
    ],
    desc: "外星基因库改良火星作物与居民体质。",
    fx: {
      "foodMul": 1.2,
      "popGrowthMul": 1.2,
    },
    modifiers: [
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "食物产量 ×1.2",
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
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: ["d30-ecocollapse"],
    mitigatesDetail: [
      { disaster: "d30-ecocollapse", note: "缓解「生态崩溃」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-ds-19", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-19", note: "与「逆向工程」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "食物产量 ×1.2。",
      "人口增长速度 ×1.2。",
    ],
    researchCost: {
      tech: 150,
      credits: 750,
      timeSec: 900,
      note: "研究耗时 900 秒，另耗星币 750。",
    },
    levels: [
      { level: 1, cost: 150, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 300, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 600, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 75.0,
      powerRating: 46,
      note: "性价比 75.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-ds-19 逆向工程 [深空·T4] 造价 180 科技点
  "t30-ds-19": {
    id: "t30-ds-19",
    name: "逆向工程",
    icon: "🔧",
    branch: "deepSpace",
    branchName: "深空",
    tier: 4,
    cost: 180,
    researchTimeSec: 1080,
    needs: ["t30-ds-17"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-17", note: "需先研究「外星考古」。" },
    ],
    desc: "拆解外星设备，全产业效率提升。",
    fx: {
      "allProdMul": 1.1,
      "labMul": 1.1,
    },
    modifiers: [
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "全部生产建筑产量 ×1.1",
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
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-20", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-20", note: "与「星门工程」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "全部生产建筑产量 ×1.1。",
      "实验室科技产量 ×1.1。",
    ],
    researchCost: {
      tech: 180,
      credits: 900,
      timeSec: 1080,
      note: "研究耗时 1080 秒，另耗星币 900。",
    },
    levels: [
      { level: 1, cost: 180, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 360, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 720, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 90.0,
      powerRating: 46,
      note: "性价比 90.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-ds-20 星门工程 [深空·T5] 造价 220 科技点
  "t30-ds-20": {
    id: "t30-ds-20",
    name: "星门工程",
    icon: "🌀",
    branch: "deepSpace",
    branchName: "深空",
    tier: 5,
    cost: 220,
    researchTimeSec: 1320,
    needs: ["t30-ds-12", "t30-ds-19"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-12", note: "需先研究「曲速理论」。" },
      { type: "tech", ref: "t30-ds-19", note: "需先研究「逆向工程」。" },
    ],
    desc: "建造通往半人马座的稳定星门，胜利进度 +1。",
    fx: {
      "unlockStargate": 1,
      "victoryProgressAdd": 1,
    },
    modifiers: [
      {
        key: "unlockStargate",
        target: "unlock.stargate",
        op: "flag",
        value: 1,
        unit: "",
        note: "解锁星门",
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
      { scope: "perPop", base: 5, perUnit: 0.5, cap: 25, note: "每 100 人口，效果额外提升 50%，上限 250%。" },
      { scope: "perBuilding", base: 5, perUnit: 0.25, cap: 15, note: "每座同系建筑，效果额外提升 25%，上限 150%。" },
    ],
    unlocks: ["b30-stargate"],
    unlockBuildings: ["b30-stargate"],
    requires: {
      minPop: 80,
      buildings: ["lab"],
      wonders: [],
      note: "需人口 ≥80 人且拥有实验室。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-21", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-21", note: "与「戴森群理论」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "解锁星门。",
      "胜利进度 +1 点。",
      "解锁建筑「星门」。",
    ],
    researchCost: {
      tech: 220,
      credits: 1100,
      timeSec: 1320,
      note: "研究耗时 1320 秒，另耗星币 1100。",
    },
    levels: [
      { level: 1, cost: 220, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 440, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 880, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 10,
      urgency: 1,
      note: "AI 总督推荐权重：T5 科技优先度 10。",
    },
    balance: {
      costPerEffect: 110.0,
      powerRating: 56,
      note: "性价比 110.0 科技点/效果项，强度评级 56。",
    },
  },
  // t30-ds-21 戴森群理论 [深空·T4] 造价 200 科技点
  "t30-ds-21": {
    id: "t30-ds-21",
    name: "戴森群理论",
    icon: "☀️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 4,
    cost: 200,
    researchTimeSec: 1200,
    needs: ["t30-ds-06"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-06", note: "需先研究「小行星捕获」。" },
    ],
    desc: "环绕太阳的卫星群截获恒星能量。",
    fx: {
      "solarMul": 2.0,
      "orbitalPowerAdd": 100,
    },
    modifiers: [
      {
        key: "solarMul",
        target: "power.solar",
        op: "mul",
        value: 2.0,
        unit: "倍",
        note: "太阳能板电力 ×2.0",
      },
      {
        key: "orbitalPowerAdd",
        target: "power.orbital",
        op: "add",
        value: 100,
        unit: "电",
        note: "轨道电力 +100",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-22", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-22", note: "与「轨道环」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "太阳能板电力 ×2.0。",
      "轨道电力 +100。",
    ],
    researchCost: {
      tech: 200,
      credits: 1000,
      timeSec: 1200,
      note: "研究耗时 1200 秒，另耗星币 1000。",
    },
    levels: [
      { level: 1, cost: 200, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 400, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 800, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 100.0,
      powerRating: 46,
      note: "性价比 100.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-ds-22 轨道环 [深空·T5] 造价 240 科技点
  "t30-ds-22": {
    id: "t30-ds-22",
    name: "轨道环",
    icon: "💍",
    branch: "deepSpace",
    branchName: "深空",
    tier: 5,
    cost: 240,
    researchTimeSec: 1440,
    needs: ["t30-ds-21", "t30-ds-05"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-21", note: "需先研究「戴森群理论」。" },
      { type: "tech", ref: "t30-ds-05", note: "需先研究「月球穹顶」。" },
    ],
    desc: "环绕火星的轨道环成为第二座城市。",
    fx: {
      "allProdMul": 1.15,
      "popCapAdd": 40,
    },
    modifiers: [
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "全部生产建筑产量 ×1.15",
      },
      {
        key: "popCapAdd",
        target: "pop.cap",
        op: "add",
        value: 40,
        unit: "人",
        note: "人口上限 +40 人",
      },
    ],
    scaling: [
      { scope: "perPop", base: 5, perUnit: 0.5, cap: 25, note: "每 100 人口，效果额外提升 50%，上限 250%。" },
      { scope: "perBuilding", base: 5, perUnit: 0.25, cap: 15, note: "每座同系建筑，效果额外提升 25%，上限 150%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 80,
      buildings: [],
      wonders: [],
      note: "需人口 ≥80 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-23", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-23", note: "与「深空殖民」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "全部生产建筑产量 ×1.15。",
      "人口上限 +40 人。",
    ],
    researchCost: {
      tech: 240,
      credits: 1200,
      timeSec: 1440,
      note: "研究耗时 1440 秒，另耗星币 1200。",
    },
    levels: [
      { level: 1, cost: 240, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 480, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 960, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 10,
      urgency: 1,
      note: "AI 总督推荐权重：T5 科技优先度 10。",
    },
    balance: {
      costPerEffect: 120.0,
      powerRating: 56,
      note: "性价比 120.0 科技点/效果项，强度评级 56。",
    },
  },
  // t30-ds-23 深空殖民 [深空·T4] 造价 160 科技点
  "t30-ds-23": {
    id: "t30-ds-23",
    name: "深空殖民",
    icon: "🌌",
    branch: "deepSpace",
    branchName: "深空",
    tier: 4,
    cost: 160,
    researchTimeSec: 960,
    needs: ["t30-ds-05", "t30-ds-08"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-05", note: "需先研究「月球穹顶」。" },
      { type: "tech", ref: "t30-ds-08", note: "需先研究「深空采矿船」。" },
    ],
    desc: "小行星带与木卫殖民点并入星港版图。",
    fx: {
      "popCapAdd": 30,
      "tradeMul": 1.15,
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
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "贸易收入 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-ds-24", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-24", note: "与「星际导航」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口上限 +30 人。",
      "贸易收入 ×1.15。",
    ],
    researchCost: {
      tech: 160,
      credits: 800,
      timeSec: 960,
      note: "研究耗时 960 秒，另耗星币 800。",
    },
    levels: [
      { level: 1, cost: 160, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 320, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 640, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 80.0,
      powerRating: 46,
      note: "性价比 80.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-ds-24 星际导航 [深空·T3] 造价 100 科技点
  "t30-ds-24": {
    id: "t30-ds-24",
    name: "星际导航",
    icon: "🧭",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 100,
    researchTimeSec: 600,
    needs: ["t30-ds-10"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-10", note: "需先研究「离子推进」。" },
    ],
    desc: "脉冲星导航网让深空航行不再迷路。",
    fx: {
      "warnAddSec": 5,
      "tradeShipMul": 0.85,
    },
    modifiers: [
      {
        key: "warnAddSec",
        target: "sys.warnTime",
        op: "add",
        value: 5,
        unit: "秒",
        note: "灾难预警时间 +5 秒",
      },
      {
        key: "tradeShipMul",
        target: "trade.shipInterval",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "贸易船到访间隔 ×0.85",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-ds-25", "t30-eco-16"],
    comboWith: [
      { tech: "t30-ds-25", note: "与「银河测绘」同研时，两项效果各 +10%。" },
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "灾难预警时间 +5 秒。",
      "贸易船到访间隔 ×0.85。",
    ],
    researchCost: {
      tech: 100,
      credits: 500,
      timeSec: 600,
      note: "研究耗时 600 秒，另耗星币 500。",
    },
    levels: [
      { level: 1, cost: 100, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 200, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 400, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 50.0,
      powerRating: 36,
      note: "性价比 50.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-ds-25 银河测绘 [深空·T5] 造价 260 科技点
  "t30-ds-25": {
    id: "t30-ds-25",
    name: "银河测绘",
    icon: "🗺️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 5,
    cost: 260,
    researchTimeSec: 1560,
    needs: ["t30-ds-12", "t30-ds-24"],
    needsDetail: [
      { type: "tech", ref: "t30-ds-12", note: "需先研究「曲速理论」。" },
      { type: "tech", ref: "t30-ds-24", note: "需先研究「星际导航」。" },
    ],
    desc: "完整银河星图让每条航线都物尽其用。",
    fx: {
      "tradeMul": 1.3,
      "allProdMul": 1.1,
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
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "全部生产建筑产量 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 5, perUnit: 0.5, cap: 25, note: "每 100 人口，效果额外提升 50%，上限 250%。" },
      { scope: "perBuilding", base: 5, perUnit: 0.25, cap: 15, note: "每座同系建筑，效果额外提升 25%，上限 150%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 80,
      buildings: [],
      wonders: [],
      note: "需人口 ≥80 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-16"],
    comboWith: [
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.3。",
      "全部生产建筑产量 ×1.1。",
    ],
    researchCost: {
      tech: 260,
      credits: 1300,
      timeSec: 1560,
      note: "研究耗时 1560 秒，另耗星币 1300。",
    },
    levels: [
      { level: 1, cost: 260, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 520, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1040, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 10,
      urgency: 1,
      note: "AI 总督推荐权重：T5 科技优先度 10。",
    },
    balance: {
      costPerEffect: 130.0,
      powerRating: 56,
      note: "性价比 130.0 科技点/效果项，强度评级 56。",
    },
  },
  // ---------- 生态系（25 项） ----------
  // t30-eco-01 大气采样 [生态·T1] 造价 25 科技点
  "t30-eco-01": {
    id: "t30-eco-01",
    name: "大气采样",
    icon: "🌡️",
    branch: "eco",
    branchName: "生态",
    tier: 1,
    cost: 25,
    researchTimeSec: 150,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "全境布设大气采样站，摸清改造起点。",
    fx: {
      "terraformAdd": 1,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 1,
        unit: "点",
        note: "行星改造进度 +1 点",
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
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-02", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-02", note: "与「温室气体释放」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +1 点。",
    ],
    researchCost: {
      tech: 25,
      credits: 125,
      timeSec: 150,
      note: "研究耗时 150 秒，另耗星币 125。",
    },
    levels: [
      { level: 1, cost: 25, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 50, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 100, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 2,
      urgency: 5,
      note: "AI 总督推荐权重：T1 科技优先度 2。",
    },
    balance: {
      costPerEffect: 25.0,
      powerRating: 13,
      note: "性价比 25.0 科技点/效果项，强度评级 13。",
    },
  },
  // t30-eco-02 温室气体释放 [生态·T1] 造价 40 科技点
  "t30-eco-02": {
    id: "t30-eco-02",
    name: "温室气体释放",
    icon: "💨",
    branch: "eco",
    branchName: "生态",
    tier: 1,
    cost: 40,
    researchTimeSec: 240,
    needs: ["t30-eco-01"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-01", note: "需先研究「大气采样」。" },
    ],
    desc: "释放封存 CO2，温室升温提速。",
    fx: {
      "terraformAdd": 2,
      "greenhouseMul": 1.2,
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
        key: "greenhouseMul",
        target: "prod.greenhouse",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "温室产量 ×1.2",
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
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-03", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-03", note: "与「极地冰盖融化」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +2 点。",
      "温室产量 ×1.2。",
    ],
    researchCost: {
      tech: 40,
      credits: 200,
      timeSec: 240,
      note: "研究耗时 240 秒，另耗星币 200。",
    },
    levels: [
      { level: 1, cost: 40, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 80, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 160, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 2,
      urgency: 5,
      note: "AI 总督推荐权重：T1 科技优先度 2。",
    },
    balance: {
      costPerEffect: 20.0,
      powerRating: 16,
      note: "性价比 20.0 科技点/效果项，强度评级 16。",
    },
  },
  // t30-eco-03 极地冰盖融化 [生态·T2] 造价 60 科技点
  "t30-eco-03": {
    id: "t30-eco-03",
    name: "极地冰盖融化",
    icon: "🧊",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 60,
    researchTimeSec: 360,
    needs: ["t30-eco-02"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-02", note: "需先研究「温室气体释放」。" },
    ],
    desc: "聚光镜融化极冠，液态水回归火星。",
    fx: {
      "terraformAdd": 3,
      "waterAdd": 5,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 3,
        unit: "点",
        note: "行星改造进度 +3 点",
      },
      {
        key: "waterAdd",
        target: "prod.waterPerMin",
        op: "add",
        value: 5,
        unit: "/分钟",
        note: "水 +5/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-04", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-04", note: "与「磁场发生器」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +3 点。",
      "水 +5/分钟。",
    ],
    researchCost: {
      tech: 60,
      credits: 300,
      timeSec: 360,
      note: "研究耗时 360 秒，另耗星币 300。",
    },
    levels: [
      { level: 1, cost: 60, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 120, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 240, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 30.0,
      powerRating: 26,
      note: "性价比 30.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-eco-04 磁场发生器 [生态·T3] 造价 120 科技点
  "t30-eco-04": {
    id: "t30-eco-04",
    name: "磁场发生器",
    icon: "🧲",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 120,
    researchTimeSec: 720,
    needs: ["t30-eco-03"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-03", note: "需先研究「极地冰盖融化」。" },
    ],
    desc: "人造磁场挡住太阳风，辐射伤害减半。",
    fx: {
      "terraformAdd": 5,
      "radiationMul": 0.5,
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
        key: "radiationMul",
        target: "risk.radiation",
        op: "mul",
        value: 0.5,
        unit: "倍",
        note: "辐射伤害 ×0.5",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-05", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-05", note: "与「蓝天计划」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +5 点。",
      "辐射伤害 ×0.5。",
    ],
    researchCost: {
      tech: 120,
      credits: 600,
      timeSec: 720,
      note: "研究耗时 720 秒，另耗星币 600。",
    },
    levels: [
      { level: 1, cost: 120, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 240, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 480, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 60.0,
      powerRating: 36,
      note: "性价比 60.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-eco-05 蓝天计划 [生态·T4] 造价 180 科技点
  "t30-eco-05": {
    id: "t30-eco-05",
    name: "蓝天计划",
    icon: "🌤️",
    branch: "eco",
    branchName: "生态",
    tier: 4,
    cost: 180,
    researchTimeSec: 1080,
    needs: ["t30-eco-04"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-04", note: "需先研究「磁场发生器」。" },
    ],
    desc: "天空第一次呈现蓝色，大气改造过半。",
    fx: {
      "terraformAdd": 8,
      "oxygenAdd": 10,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 8,
        unit: "点",
        note: "行星改造进度 +8 点",
      },
      {
        key: "oxygenAdd",
        target: "life.oxygen",
        op: "add",
        value: 10,
        unit: "点",
        note: "氧气供给 +10 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-06", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-06", note: "与「氧气工厂」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +8 点。",
      "氧气供给 +10 点。",
    ],
    researchCost: {
      tech: 180,
      credits: 900,
      timeSec: 1080,
      note: "研究耗时 1080 秒，另耗星币 900。",
    },
    levels: [
      { level: 1, cost: 180, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 360, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 720, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 90.0,
      powerRating: 46,
      note: "性价比 90.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-eco-06 氧气工厂 [生态·T2] 造价 55 科技点
  "t30-eco-06": {
    id: "t30-eco-06",
    name: "氧气工厂",
    icon: "💨",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 55,
    researchTimeSec: 330,
    needs: ["t30-eco-01"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-01", note: "需先研究「大气采样」。" },
    ],
    desc: "电解水制氧，室内氧气不再紧缺。",
    fx: {
      "oxygenAdd": 5,
      "popGrowthMul": 1.1,
    },
    modifiers: [
      {
        key: "oxygenAdd",
        target: "life.oxygen",
        op: "add",
        value: 5,
        unit: "点",
        note: "氧气供给 +5 点",
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
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-07", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-07", note: "与「藻类农场」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "氧气供给 +5 点。",
      "人口增长速度 ×1.1。",
    ],
    researchCost: {
      tech: 55,
      credits: 275,
      timeSec: 330,
      note: "研究耗时 330 秒，另耗星币 275。",
    },
    levels: [
      { level: 1, cost: 55, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 110, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 220, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 27.5,
      powerRating: 26,
      note: "性价比 27.5 科技点/效果项，强度评级 26。",
    },
  },
  // t30-eco-07 藻类农场 [生态·T2] 造价 70 科技点
  "t30-eco-07": {
    id: "t30-eco-07",
    name: "藻类农场",
    icon: "🦠",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 70,
    researchTimeSec: 420,
    needs: ["t30-eco-06"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-06", note: "需先研究「氧气工厂」。" },
    ],
    desc: "基因藻既产氧又能吃。",
    fx: {
      "oxygenAdd": 8,
      "foodMul": 1.15,
    },
    modifiers: [
      {
        key: "oxygenAdd",
        target: "life.oxygen",
        op: "add",
        value: 8,
        unit: "点",
        note: "氧气供给 +8 点",
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
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-08", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-08", note: "与「基因作物」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "氧气供给 +8 点。",
      "食物产量 ×1.15。",
    ],
    researchCost: {
      tech: 70,
      credits: 350,
      timeSec: 420,
      note: "研究耗时 420 秒，另耗星币 350。",
    },
    levels: [
      { level: 1, cost: 70, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 140, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 280, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 35.0,
      powerRating: 26,
      note: "性价比 35.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-eco-08 基因作物 [生态·T2] 造价 50 科技点
  "t30-eco-08": {
    id: "t30-eco-08",
    name: "基因作物",
    icon: "🌱",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 50,
    researchTimeSec: 300,
    needs: ["t30-eco-01"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-01", note: "需先研究「大气采样」。" },
    ],
    desc: "抗寒抗旱作物让温室产量提升 50%。",
    fx: {
      "greenhouseMul": 1.5,
      "foodUseMul": 0.9,
    },
    modifiers: [
      {
        key: "greenhouseMul",
        target: "prod.greenhouse",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "温室产量 ×1.5",
      },
      {
        key: "foodUseMul",
        target: "pop.foodUse",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "人口耗食物 ×0.9",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-09", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-09", note: "与「抗寒小麦」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "温室产量 ×1.5。",
      "人口耗食物 ×0.9。",
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
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 25.0,
      powerRating: 26,
      note: "性价比 25.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-eco-09 抗寒小麦 [生态·T2] 造价 75 科技点
  "t30-eco-09": {
    id: "t30-eco-09",
    name: "抗寒小麦",
    icon: "🌾",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 75,
    researchTimeSec: 450,
    needs: ["t30-eco-08"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-08", note: "需先研究「基因作物」。" },
    ],
    desc: "零下 40 度仍能生长的小麦品种。",
    fx: {
      "greenhouseMul": 1.3,
      "foodMul": 1.1,
    },
    modifiers: [
      {
        key: "greenhouseMul",
        target: "prod.greenhouse",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "温室产量 ×1.3",
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
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-10", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-10", note: "与「转基因树木」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "温室产量 ×1.3。",
      "食物产量 ×1.1。",
    ],
    researchCost: {
      tech: 75,
      credits: 375,
      timeSec: 450,
      note: "研究耗时 450 秒，另耗星币 375。",
    },
    levels: [
      { level: 1, cost: 75, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 150, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 300, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 37.5,
      powerRating: 26,
      note: "性价比 37.5 科技点/效果项，强度评级 26。",
    },
  },
  // t30-eco-10 转基因树木 [生态·T3] 造价 110 科技点
  "t30-eco-10": {
    id: "t30-eco-10",
    name: "转基因树木",
    icon: "🌲",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 110,
    researchTimeSec: 660,
    needs: ["t30-eco-08"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-08", note: "需先研究「基因作物」。" },
    ],
    desc: "速生改造树开始固碳造氧。",
    fx: {
      "terraformAdd": 4,
      "oxygenAdd": 6,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 4,
        unit: "点",
        note: "行星改造进度 +4 点",
      },
      {
        key: "oxygenAdd",
        target: "life.oxygen",
        op: "add",
        value: 6,
        unit: "点",
        note: "氧气供给 +6 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-11", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-11", note: "与「火星森林」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +4 点。",
      "氧气供给 +6 点。",
    ],
    researchCost: {
      tech: 110,
      credits: 550,
      timeSec: 660,
      note: "研究耗时 660 秒，另耗星币 550。",
    },
    levels: [
      { level: 1, cost: 110, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 220, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 440, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 55.0,
      powerRating: 36,
      note: "性价比 55.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-eco-11 火星森林 [生态·T4] 造价 160 科技点
  "t30-eco-11": {
    id: "t30-eco-11",
    name: "火星森林",
    icon: "🌳",
    branch: "eco",
    branchName: "生态",
    tier: 4,
    cost: 160,
    researchTimeSec: 960,
    needs: ["t30-eco-10"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-10", note: "需先研究「转基因树木」。" },
    ],
    desc: "第一片森林成林，居民幸福度大涨。",
    fx: {
      "terraformAdd": 6,
      "happinessAdd": 10,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 6,
        unit: "点",
        note: "行星改造进度 +6 点",
      },
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 10,
        unit: "点",
        note: "居民幸福度 +10 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-12", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-12", note: "与「动物驯化」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +6 点。",
      "居民幸福度 +10 点。",
    ],
    researchCost: {
      tech: 160,
      credits: 800,
      timeSec: 960,
      note: "研究耗时 960 秒，另耗星币 800。",
    },
    levels: [
      { level: 1, cost: 160, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 320, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 640, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 80.0,
      powerRating: 46,
      note: "性价比 80.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-eco-12 动物驯化 [生态·T2] 造价 45 科技点
  "t30-eco-12": {
    id: "t30-eco-12",
    name: "动物驯化",
    icon: "🐐",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 45,
    researchTimeSec: 270,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "火星山羊驯化成功，餐桌有了肉。",
    fx: {
      "foodMul": 1.2,
    },
    modifiers: [
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "食物产量 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: ["b30-ranch"],
    unlockBuildings: ["b30-ranch"],
    requires: {
      minPop: 20,
      buildings: ["lab"],
      wonders: [],
      note: "需人口 ≥20 人且拥有实验室。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-13", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-13", note: "与「火星畜牧」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "食物产量 ×1.2。",
      "解锁建筑「牧场」。",
    ],
    researchCost: {
      tech: 45,
      credits: 225,
      timeSec: 270,
      note: "研究耗时 270 秒，另耗星币 225。",
    },
    levels: [
      { level: 1, cost: 45, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 90, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 180, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 45.0,
      powerRating: 23,
      note: "性价比 45.0 科技点/效果项，强度评级 23。",
    },
  },
  // t30-eco-13 火星畜牧 [生态·T2] 造价 80 科技点
  "t30-eco-13": {
    id: "t30-eco-13",
    name: "火星畜牧",
    icon: "🐄",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 80,
    researchTimeSec: 480,
    needs: ["t30-eco-12"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-12", note: "需先研究「动物驯化」。" },
    ],
    desc: "牧场规模化，食物稳定增产。",
    fx: {
      "foodAdd": 5,
      "foodMul": 1.1,
    },
    modifiers: [
      {
        key: "foodAdd",
        target: "prod.foodPerMin",
        op: "add",
        value: 5,
        unit: "/分钟",
        note: "食物 +5/分钟",
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
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-14", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-14", note: "与「生态循环」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "食物 +5/分钟。",
      "食物产量 ×1.1。",
    ],
    researchCost: {
      tech: 80,
      credits: 400,
      timeSec: 480,
      note: "研究耗时 480 秒，另耗星币 400。",
    },
    levels: [
      { level: 1, cost: 80, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 160, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 320, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 40.0,
      powerRating: 26,
      note: "性价比 40.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-eco-14 生态循环 [生态·T3] 造价 95 科技点
  "t30-eco-14": {
    id: "t30-eco-14",
    name: "生态循环",
    icon: "♻️",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 95,
    researchTimeSec: 570,
    needs: ["t30-eco-07", "t30-eco-12"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-07", note: "需先研究「藻类农场」。" },
      { type: "tech", ref: "t30-eco-12", note: "需先研究「动物驯化」。" },
    ],
    desc: "种养结合的闭环生态大幅节水增产。",
    fx: {
      "foodMul": 1.3,
      "waterUseMul": 0.85,
    },
    modifiers: [
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "食物产量 ×1.3",
      },
      {
        key: "waterUseMul",
        target: "pop.waterUse",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "人口耗水 ×0.85",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-ecocollapse"],
    mitigatesDetail: [
      { disaster: "d30-ecocollapse", note: "缓解「生态崩溃」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-eco-15", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-15", note: "与「授粉昆虫」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "食物产量 ×1.3。",
      "人口耗水 ×0.85。",
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
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 47.5,
      powerRating: 36,
      note: "性价比 47.5 科技点/效果项，强度评级 36。",
    },
  },
  // t30-eco-15 授粉昆虫 [生态·T3] 造价 85 科技点
  "t30-eco-15": {
    id: "t30-eco-15",
    name: "授粉昆虫",
    icon: "🐝",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 85,
    researchTimeSec: 510,
    needs: ["t30-eco-12"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-12", note: "需先研究「动物驯化」。" },
    ],
    desc: "改造蜜蜂让温室授粉率翻倍。",
    fx: {
      "greenhouseMul": 1.4,
    },
    modifiers: [
      {
        key: "greenhouseMul",
        target: "prod.greenhouse",
        op: "mul",
        value: 1.4,
        unit: "倍",
        note: "温室产量 ×1.4",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-16", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-16", note: "与「气候卫星」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "温室产量 ×1.4。",
    ],
    researchCost: {
      tech: 85,
      credits: 425,
      timeSec: 510,
      note: "研究耗时 510 秒，另耗星币 425。",
    },
    levels: [
      { level: 1, cost: 85, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 170, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 340, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 85.0,
      powerRating: 33,
      note: "性价比 85.0 科技点/效果项，强度评级 33。",
    },
  },
  // t30-eco-16 气候卫星 [生态·T3] 造价 100 科技点
  "t30-eco-16": {
    id: "t30-eco-16",
    name: "气候卫星",
    icon: "🛰️",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 100,
    researchTimeSec: 600,
    needs: ["t30-eco-02"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-02", note: "需先研究「温室气体释放」。" },
    ],
    desc: "气候卫星网提前疏导风暴，灾害影响减弱。",
    fx: {
      "sandstormMul": 0.7,
      "iceStormMul": 0.7,
    },
    modifiers: [
      {
        key: "sandstormMul",
        target: "risk.sandstorm",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "沙尘暴影响 ×0.7",
      },
      {
        key: "iceStormMul",
        target: "risk.iceStorm",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "冰尘暴影响 ×0.7",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-17", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-17", note: "与「人工降雨」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "沙尘暴影响 ×0.7。",
      "冰尘暴影响 ×0.7。",
    ],
    researchCost: {
      tech: 100,
      credits: 500,
      timeSec: 600,
      note: "研究耗时 600 秒，另耗星币 500。",
    },
    levels: [
      { level: 1, cost: 100, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 200, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 400, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 50.0,
      powerRating: 36,
      note: "性价比 50.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-eco-17 人工降雨 [生态·T3] 造价 130 科技点
  "t30-eco-17": {
    id: "t30-eco-17",
    name: "人工降雨",
    icon: "🌧️",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 130,
    researchTimeSec: 780,
    needs: ["t30-eco-16"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-16", note: "需先研究「气候卫星」。" },
    ],
    desc: "碘化银播云让雨水落进集水区。",
    fx: {
      "waterplantMul": 1.5,
      "waterAdd": 3,
    },
    modifiers: [
      {
        key: "waterplantMul",
        target: "prod.waterplant",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "水厂产量 ×1.5",
      },
      {
        key: "waterAdd",
        target: "prod.waterPerMin",
        op: "add",
        value: 3,
        unit: "/分钟",
        note: "水 +3/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-18", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-18", note: "与「风暴控制」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "水厂产量 ×1.5。",
      "水 +3/分钟。",
    ],
    researchCost: {
      tech: 130,
      credits: 650,
      timeSec: 780,
      note: "研究耗时 780 秒，另耗星币 650。",
    },
    levels: [
      { level: 1, cost: 130, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 260, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 520, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 65.0,
      powerRating: 36,
      note: "性价比 65.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-eco-18 风暴控制 [生态·T4] 造价 150 科技点
  "t30-eco-18": {
    id: "t30-eco-18",
    name: "风暴控制",
    icon: "🌪️",
    branch: "eco",
    branchName: "生态",
    tier: 4,
    cost: 150,
    researchTimeSec: 900,
    needs: ["t30-eco-16"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-16", note: "需先研究「气候卫星」。" },
    ],
    desc: "用能量阵列提前引爆沙尘暴，化整为零。",
    fx: {
      "sandstormMul": 0.5,
      "disasterDurMul": 0.9,
    },
    modifiers: [
      {
        key: "sandstormMul",
        target: "risk.sandstorm",
        op: "mul",
        value: 0.5,
        unit: "倍",
        note: "沙尘暴影响 ×0.5",
      },
      {
        key: "disasterDurMul",
        target: "risk.disasterDuration",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "灾难持续时间 ×0.9",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-19", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-19", note: "与「海洋计划」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "沙尘暴影响 ×0.5。",
      "灾难持续时间 ×0.9。",
    ],
    researchCost: {
      tech: 150,
      credits: 750,
      timeSec: 900,
      note: "研究耗时 900 秒，另耗星币 750。",
    },
    levels: [
      { level: 1, cost: 150, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 300, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 600, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 75.0,
      powerRating: 46,
      note: "性价比 75.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-eco-19 海洋计划 [生态·T4] 造价 200 科技点
  "t30-eco-19": {
    id: "t30-eco-19",
    name: "海洋计划",
    icon: "🌊",
    branch: "eco",
    branchName: "生态",
    tier: 4,
    cost: 200,
    researchTimeSec: 1200,
    needs: ["t30-eco-03", "t30-eco-17"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-03", note: "需先研究「极地冰盖融化」。" },
      { type: "tech", ref: "t30-eco-17", note: "需先研究「人工降雨」。" },
    ],
    desc: "低洼盆地蓄水成湖，火星有了海洋。",
    fx: {
      "terraformAdd": 10,
      "waterAdd": 10,
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
        key: "waterAdd",
        target: "prod.waterPerMin",
        op: "add",
        value: 10,
        unit: "/分钟",
        note: "水 +10/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-20", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-20", note: "与「土壤改造」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +10 点。",
      "水 +10/分钟。",
    ],
    researchCost: {
      tech: 200,
      credits: 1000,
      timeSec: 1200,
      note: "研究耗时 1200 秒，另耗星币 1000。",
    },
    levels: [
      { level: 1, cost: 200, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 400, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 800, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 100.0,
      powerRating: 46,
      note: "性价比 100.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-eco-20 土壤改造 [生态·T3] 造价 90 科技点
  "t30-eco-20": {
    id: "t30-eco-20",
    name: "土壤改造",
    icon: "🟤",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 90,
    researchTimeSec: 540,
    needs: ["t30-eco-08"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-08", note: "需先研究「基因作物」。" },
    ],
    desc: "微生物+蚯蚓把火星壤变成可耕种土壤。",
    fx: {
      "greenhouseMul": 1.3,
      "foodMul": 1.2,
    },
    modifiers: [
      {
        key: "greenhouseMul",
        target: "prod.greenhouse",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "温室产量 ×1.3",
      },
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "食物产量 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-21", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-21", note: "与「微生物工程」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "温室产量 ×1.3。",
      "食物产量 ×1.2。",
    ],
    researchCost: {
      tech: 90,
      credits: 450,
      timeSec: 540,
      note: "研究耗时 540 秒，另耗星币 450。",
    },
    levels: [
      { level: 1, cost: 90, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 180, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 360, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 45.0,
      powerRating: 36,
      note: "性价比 45.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-eco-21 微生物工程 [生态·T3] 造价 120 科技点
  "t30-eco-21": {
    id: "t30-eco-21",
    name: "微生物工程",
    icon: "🦠",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 120,
    researchTimeSec: 720,
    needs: ["t30-eco-20"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-20", note: "需先研究「土壤改造」。" },
    ],
    desc: "工程菌分解矿物，采矿与改造双赢。",
    fx: {
      "terraformAdd": 4,
      "minerMul": 1.1,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 4,
        unit: "点",
        note: "行星改造进度 +4 点",
      },
      {
        key: "minerMul",
        target: "prod.miner",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "采矿机产量 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-22", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-22", note: "与「生态穹顶III」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +4 点。",
      "采矿机产量 ×1.1。",
    ],
    researchCost: {
      tech: 120,
      credits: 600,
      timeSec: 720,
      note: "研究耗时 720 秒，另耗星币 600。",
    },
    levels: [
      { level: 1, cost: 120, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 240, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 480, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 60.0,
      powerRating: 36,
      note: "性价比 60.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-eco-22 生态穹顶III [生态·T4] 造价 140 科技点
  "t30-eco-22": {
    id: "t30-eco-22",
    name: "生态穹顶III",
    icon: "🌍",
    branch: "eco",
    branchName: "生态",
    tier: 4,
    cost: 140,
    researchTimeSec: 840,
    needs: ["t30-eco-10"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-10", note: "需先研究「转基因树木」。" },
    ],
    desc: "第三代生态穹顶自成完整生物圈。",
    fx: {
      "ecoMul": 1.5,
      "popCapAdd": 20,
    },
    modifiers: [
      {
        key: "ecoMul",
        target: "prod.eco",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "生态圈效果 ×1.5",
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
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: ["d30-ecocollapse"],
    mitigatesDetail: [
      { disaster: "d30-ecocollapse", note: "缓解「生态崩溃」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-eco-23", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-23", note: "与「行星花园」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "生态圈效果 ×1.5。",
      "人口上限 +20 人。",
    ],
    researchCost: {
      tech: 140,
      credits: 700,
      timeSec: 840,
      note: "研究耗时 840 秒，另耗星币 700。",
    },
    levels: [
      { level: 1, cost: 140, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 280, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 560, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 70.0,
      powerRating: 46,
      note: "性价比 70.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-eco-23 行星花园 [生态·T5] 造价 220 科技点
  "t30-eco-23": {
    id: "t30-eco-23",
    name: "行星花园",
    icon: "🌸",
    branch: "eco",
    branchName: "生态",
    tier: 5,
    cost: 220,
    researchTimeSec: 1320,
    needs: ["t30-eco-11", "t30-eco-19"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-11", note: "需先研究「火星森林」。" },
      { type: "tech", ref: "t30-eco-19", note: "需先研究「海洋计划」。" },
    ],
    desc: "全行星公园带建成，宜居度拉满。",
    fx: {
      "happinessAdd": 15,
      "popGrowthMul": 1.3,
    },
    modifiers: [
      {
        key: "happinessAdd",
        target: "pop.happiness",
        op: "add",
        value: 15,
        unit: "点",
        note: "居民幸福度 +15 点",
      },
      {
        key: "popGrowthMul",
        target: "pop.growth",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "人口增长速度 ×1.3",
      },
    ],
    scaling: [
      { scope: "perPop", base: 5, perUnit: 0.5, cap: 25, note: "每 100 人口，效果额外提升 50%，上限 250%。" },
      { scope: "perBuilding", base: 5, perUnit: 0.25, cap: 15, note: "每座同系建筑，效果额外提升 25%，上限 150%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 80,
      buildings: [],
      wonders: [],
      note: "需人口 ≥80 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-eco-24", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-24", note: "与「盖亚工程」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +15 点。",
      "人口增长速度 ×1.3。",
    ],
    researchCost: {
      tech: 220,
      credits: 1100,
      timeSec: 1320,
      note: "研究耗时 1320 秒，另耗星币 1100。",
    },
    levels: [
      { level: 1, cost: 220, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 440, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 880, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 10,
      urgency: 1,
      note: "AI 总督推荐权重：T5 科技优先度 10。",
    },
    balance: {
      costPerEffect: 110.0,
      powerRating: 56,
      note: "性价比 110.0 科技点/效果项，强度评级 56。",
    },
  },
  // t30-eco-24 盖亚工程 [生态·T5] 造价 280 科技点
  "t30-eco-24": {
    id: "t30-eco-24",
    name: "盖亚工程",
    icon: "🌍",
    branch: "eco",
    branchName: "生态",
    tier: 5,
    cost: 280,
    researchTimeSec: 1680,
    needs: ["t30-eco-05", "t30-eco-19"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-05", note: "需先研究「蓝天计划」。" },
      { type: "tech", ref: "t30-eco-19", note: "需先研究「海洋计划」。" },
    ],
    desc: "行星级生态调控系统上线，改造进度 +15。",
    fx: {
      "terraformAdd": 15,
      "allProdMul": 1.1,
    },
    modifiers: [
      {
        key: "terraformAdd",
        target: "planet.terraform",
        op: "add",
        value: 15,
        unit: "点",
        note: "行星改造进度 +15 点",
      },
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "全部生产建筑产量 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 5, perUnit: 0.5, cap: 25, note: "每 100 人口，效果额外提升 50%，上限 250%。" },
      { scope: "perBuilding", base: 5, perUnit: 0.25, cap: 15, note: "每座同系建筑，效果额外提升 25%，上限 150%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 80,
      buildings: [],
      wonders: [],
      note: "需人口 ≥80 人，无建筑要求。",
    },
    mitigates: ["d30-ecocollapse"],
    mitigatesDetail: [
      { disaster: "d30-ecocollapse", note: "缓解「生态崩溃」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-eco-25", "t30-ds-06"],
    comboWith: [
      { tech: "t30-eco-25", note: "与「生态平衡」同研时，两项效果各 +10%。" },
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +15 点。",
      "全部生产建筑产量 ×1.1。",
    ],
    researchCost: {
      tech: 280,
      credits: 1400,
      timeSec: 1680,
      note: "研究耗时 1680 秒，另耗星币 1400。",
    },
    levels: [
      { level: 1, cost: 280, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 560, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1120, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 10,
      urgency: 1,
      note: "AI 总督推荐权重：T5 科技优先度 10。",
    },
    balance: {
      costPerEffect: 140.0,
      powerRating: 56,
      note: "性价比 140.0 科技点/效果项，强度评级 56。",
    },
  },
  // t30-eco-25 生态平衡 [生态·T5] 造价 250 科技点
  "t30-eco-25": {
    id: "t30-eco-25",
    name: "生态平衡",
    icon: "⚖️",
    branch: "eco",
    branchName: "生态",
    tier: 5,
    cost: 250,
    researchTimeSec: 1500,
    needs: ["t30-eco-14", "t30-eco-23"],
    needsDetail: [
      { type: "tech", ref: "t30-eco-14", note: "需先研究「生态循环」。" },
      { type: "tech", ref: "t30-eco-23", note: "需先研究「行星花园」。" },
    ],
    desc: "生态自我调节成熟，灾难概率降低 20%。",
    fx: {
      "allProdMul": 1.15,
      "disasterChanceMul": 0.8,
    },
    modifiers: [
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "全部生产建筑产量 ×1.15",
      },
      {
        key: "disasterChanceMul",
        target: "risk.disasterChance",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "灾难发生概率 ×0.8",
      },
    ],
    scaling: [
      { scope: "perPop", base: 5, perUnit: 0.5, cap: 25, note: "每 100 人口，效果额外提升 50%，上限 250%。" },
      { scope: "perBuilding", base: 5, perUnit: 0.25, cap: 15, note: "每座同系建筑，效果额外提升 25%，上限 150%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 80,
      buildings: [],
      wonders: [],
      note: "需人口 ≥80 人，无建筑要求。",
    },
    mitigates: ["d30-ecocollapse", "d30-water"],
    mitigatesDetail: [
      { disaster: "d30-ecocollapse", note: "缓解「生态崩溃」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-water", note: "缓解「水源污染」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-ds-06"],
    comboWith: [
      { tech: "t30-ds-06", note: "与「小行星捕获」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "全部生产建筑产量 ×1.15。",
      "灾难发生概率 ×0.8。",
    ],
    researchCost: {
      tech: 250,
      credits: 1250,
      timeSec: 1500,
      note: "研究耗时 1500 秒，另耗星币 1250。",
    },
    levels: [
      { level: 1, cost: 250, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 500, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1000, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 10,
      urgency: 1,
      note: "AI 总督推荐权重：T5 科技优先度 10。",
    },
    balance: {
      costPerEffect: 125.0,
      powerRating: 56,
      note: "性价比 125.0 科技点/效果项，强度评级 56。",
    },
  },
  // ---------- 军事系（25 项） ----------
  // t30-mil-01 民兵训练 [军事·T1] 造价 30 科技点
  "t30-mil-01": {
    id: "t30-mil-01",
    name: "民兵训练",
    icon: "🎯",
    branch: "military",
    branchName: "军事",
    tier: 1,
    cost: 30,
    researchTimeSec: 180,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "全体居民轮训，城市防御 +20。",
    fx: {
      "defenseAdd": 20,
    },
    modifiers: [
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 20,
        unit: "点",
        note: "防御力 +20 点",
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
    mitigates: ["d30-pirate"],
    mitigatesDetail: [
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-02", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-02", note: "与「激光武器」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 +20 点。",
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
    aiWeight: {
      priority: 2,
      urgency: 5,
      note: "AI 总督推荐权重：T1 科技优先度 2。",
    },
    balance: {
      costPerEffect: 30.0,
      powerRating: 13,
      note: "性价比 30.0 科技点/效果项，强度评级 13。",
    },
  },
  // t30-mil-02 激光武器 [军事·T2] 造价 55 科技点
  "t30-mil-02": {
    id: "t30-mil-02",
    name: "激光武器",
    icon: "🔆",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 55,
    researchTimeSec: 330,
    needs: ["t30-mil-01"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-01", note: "需先研究「民兵训练」。" },
    ],
    desc: "激光步枪列装，火力提升 20%。",
    fx: {
      "attackMul": 1.2,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "攻击力 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-pirate"],
    mitigatesDetail: [
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-03", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-03", note: "与「等离子炮」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.2。",
    ],
    researchCost: {
      tech: 55,
      credits: 275,
      timeSec: 330,
      note: "研究耗时 330 秒，另耗星币 275。",
    },
    levels: [
      { level: 1, cost: 55, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 110, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 220, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 55.0,
      powerRating: 23,
      note: "性价比 55.0 科技点/效果项，强度评级 23。",
    },
  },
  // t30-mil-03 等离子炮 [军事·T3] 造价 90 科技点
  "t30-mil-03": {
    id: "t30-mil-03",
    name: "等离子炮",
    icon: "💥",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 90,
    researchTimeSec: 540,
    needs: ["t30-mil-02"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-02", note: "需先研究「激光武器」。" },
    ],
    desc: "等离子炮塔让来犯之敌有来无回。",
    fx: {
      "attackMul": 1.4,
      "defenseAdd": 30,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.4,
        unit: "倍",
        note: "攻击力 ×1.4",
      },
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 30,
        unit: "点",
        note: "防御力 +30 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-04", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-04", note: "与「轨道炮」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.4。",
      "防御力 +30 点。",
    ],
    researchCost: {
      tech: 90,
      credits: 450,
      timeSec: 540,
      note: "研究耗时 540 秒，另耗星币 450。",
    },
    levels: [
      { level: 1, cost: 90, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 180, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 360, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 45.0,
      powerRating: 36,
      note: "性价比 45.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-04 轨道炮 [军事·T3] 造价 130 科技点
  "t30-mil-04": {
    id: "t30-mil-04",
    name: "轨道炮",
    icon: "🛰️",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 130,
    researchTimeSec: 780,
    needs: ["t30-mil-03"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-03", note: "需先研究「等离子炮」。" },
    ],
    desc: "天基动能炮从轨道直接打击地面目标。",
    fx: {
      "attackMul": 1.6,
      "defenseAdd": 50,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.6,
        unit: "倍",
        note: "攻击力 ×1.6",
      },
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 50,
        unit: "点",
        note: "防御力 +50 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-05", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-05", note: "与「动能拦截」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.6。",
      "防御力 +50 点。",
    ],
    researchCost: {
      tech: 130,
      credits: 650,
      timeSec: 780,
      note: "研究耗时 780 秒，另耗星币 650。",
    },
    levels: [
      { level: 1, cost: 130, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 260, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 520, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 65.0,
      powerRating: 36,
      note: "性价比 65.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-05 动能拦截 [军事·T2] 造价 70 科技点
  "t30-mil-05": {
    id: "t30-mil-05",
    name: "动能拦截",
    icon: "🎯",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 70,
    researchTimeSec: 420,
    needs: ["t30-mil-01"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-01", note: "需先研究「民兵训练」。" },
    ],
    desc: "拦截弹在半空击碎陨石。",
    fx: {
      "meteorMul": 0.5,
      "shieldMul": 1.2,
    },
    modifiers: [
      {
        key: "meteorMul",
        target: "risk.meteorDamage",
        op: "mul",
        value: 0.5,
        unit: "倍",
        note: "陨石伤害 ×0.5",
      },
      {
        key: "shieldMul",
        target: "military.shield",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "护盾强度 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-mil-06", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-06", note: "与「护盾发生器II」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "陨石伤害 ×0.5。",
      "护盾强度 ×1.2。",
    ],
    researchCost: {
      tech: 70,
      credits: 350,
      timeSec: 420,
      note: "研究耗时 420 秒，另耗星币 350。",
    },
    levels: [
      { level: 1, cost: 70, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 140, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 280, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 35.0,
      powerRating: 26,
      note: "性价比 35.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-mil-06 护盾发生器II [军事·T3] 造价 100 科技点
  "t30-mil-06": {
    id: "t30-mil-06",
    name: "护盾发生器II",
    icon: "🛡️",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 100,
    researchTimeSec: 600,
    needs: ["t30-mil-05"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-05", note: "需先研究「动能拦截」。" },
    ],
    desc: "第二代护盾覆盖全城。",
    fx: {
      "shieldMul": 1.5,
      "defenseAdd": 40,
    },
    modifiers: [
      {
        key: "shieldMul",
        target: "military.shield",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "护盾强度 ×1.5",
      },
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 40,
        unit: "点",
        note: "防御力 +40 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-07", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-07", note: "与「能量护盾」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "护盾强度 ×1.5。",
      "防御力 +40 点。",
    ],
    researchCost: {
      tech: 100,
      credits: 500,
      timeSec: 600,
      note: "研究耗时 600 秒，另耗星币 500。",
    },
    levels: [
      { level: 1, cost: 100, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 200, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 400, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 50.0,
      powerRating: 36,
      note: "性价比 50.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-07 能量护盾 [军事·T4] 造价 150 科技点
  "t30-mil-07": {
    id: "t30-mil-07",
    name: "能量护盾",
    icon: "🔷",
    branch: "military",
    branchName: "军事",
    tier: 4,
    cost: 150,
    researchTimeSec: 900,
    needs: ["t30-mil-06"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-06", note: "需先研究「护盾发生器II」。" },
    ],
    desc: "能量护盾强度翻倍，城市固若金汤。",
    fx: {
      "shieldMul": 2.0,
      "defenseAdd": 80,
    },
    modifiers: [
      {
        key: "shieldMul",
        target: "military.shield",
        op: "mul",
        value: 2.0,
        unit: "倍",
        note: "护盾强度 ×2.0",
      },
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 80,
        unit: "点",
        note: "防御力 +80 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: ["d30-alien", "d30-pirate"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-08", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-08", note: "与「装甲合金」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "护盾强度 ×2.0。",
      "防御力 +80 点。",
    ],
    researchCost: {
      tech: 150,
      credits: 750,
      timeSec: 900,
      note: "研究耗时 900 秒，另耗星币 750。",
    },
    levels: [
      { level: 1, cost: 150, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 300, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 600, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 75.0,
      powerRating: 46,
      note: "性价比 75.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-mil-08 装甲合金 [军事·T2] 造价 60 科技点
  "t30-mil-08": {
    id: "t30-mil-08",
    name: "装甲合金",
    icon: "🔩",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 60,
    researchTimeSec: 360,
    needs: ["t30-mil-01"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-01", note: "需先研究「民兵训练」。" },
    ],
    desc: "新型合金让所有工事更耐打。",
    fx: {
      "defenseMul": 1.2,
    },
    modifiers: [
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "防御力 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-mil-09", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-09", note: "与「纳米装甲」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 ×1.2。",
    ],
    researchCost: {
      tech: 60,
      credits: 300,
      timeSec: 360,
      note: "研究耗时 360 秒，另耗星币 300。",
    },
    levels: [
      { level: 1, cost: 60, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 120, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 240, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 60.0,
      powerRating: 23,
      note: "性价比 60.0 科技点/效果项，强度评级 23。",
    },
  },
  // t30-mil-09 纳米装甲 [军事·T3] 造价 110 科技点
  "t30-mil-09": {
    id: "t30-mil-09",
    name: "纳米装甲",
    icon: "⚛️",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 110,
    researchTimeSec: 660,
    needs: ["t30-mil-08"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-08", note: "需先研究「装甲合金」。" },
    ],
    desc: "自修复纳米装甲，防御提升且老化减慢。",
    fx: {
      "defenseMul": 1.4,
      "agingMul": 0.8,
    },
    modifiers: [
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.4,
        unit: "倍",
        note: "防御力 ×1.4",
      },
      {
        key: "agingMul",
        target: "sys.aging",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "设备老化速度 ×0.8",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-mil-10", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-10", note: "与「军官学校」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 ×1.4。",
      "设备老化速度 ×0.8。",
    ],
    researchCost: {
      tech: 110,
      credits: 550,
      timeSec: 660,
      note: "研究耗时 660 秒，另耗星币 550。",
    },
    levels: [
      { level: 1, cost: 110, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 220, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 440, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 55.0,
      powerRating: 36,
      note: "性价比 55.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-10 军官学校 [军事·T2] 造价 65 科技点
  "t30-mil-10": {
    id: "t30-mil-10",
    name: "军官学校",
    icon: "🎓",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 65,
    researchTimeSec: 390,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "军官学校培养出第一批职业指挥官。",
    fx: {
      "attackMul": 1.15,
      "defenseMul": 1.15,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "攻击力 ×1.15",
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
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: ["b30-academy"],
    unlockBuildings: ["b30-academy"],
    requires: {
      minPop: 20,
      buildings: ["lab"],
      wonders: [],
      note: "需人口 ≥20 人且拥有实验室。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-mil-11", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-11", note: "与「参谋部」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.15。",
      "防御力 ×1.15。",
      "解锁建筑「军官学院」。",
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
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 32.5,
      powerRating: 26,
      note: "性价比 32.5 科技点/效果项，强度评级 26。",
    },
  },
  // t30-mil-11 参谋部 [军事·T3] 造价 95 科技点
  "t30-mil-11": {
    id: "t30-mil-11",
    name: "参谋部",
    icon: "🗺️",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 95,
    researchTimeSec: 570,
    needs: ["t30-mil-10"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-10", note: "需先研究「军官学校」。" },
    ],
    desc: "参谋部统一调度，全军协同作战。",
    fx: {
      "attackMul": 1.3,
      "defenseAdd": 30,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "攻击力 ×1.3",
      },
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 30,
        unit: "点",
        note: "防御力 +30 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-12", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-12", note: "与「特种部队」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.3。",
      "防御力 +30 点。",
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
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 47.5,
      powerRating: 36,
      note: "性价比 47.5 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-12 特种部队 [军事·T3] 造价 120 科技点
  "t30-mil-12": {
    id: "t30-mil-12",
    name: "特种部队",
    icon: "🥷",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 120,
    researchTimeSec: 720,
    needs: ["t30-mil-10"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-10", note: "需先研究「军官学校」。" },
    ],
    desc: "特种部队专打海盗与叛军据点。",
    fx: {
      "pirateMul": 0.6,
      "coupMul": 0.7,
    },
    modifiers: [
      {
        key: "pirateMul",
        target: "risk.pirateChance",
        op: "mul",
        value: 0.6,
        unit: "倍",
        note: "海盗袭击概率 ×0.6",
      },
      {
        key: "coupMul",
        target: "risk.coupChance",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "政变概率 ×0.7",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-pirate", "d30-coup"],
    mitigatesDetail: [
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-coup", note: "缓解「政变」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-13", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-13", note: "与「游击战术」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "海盗袭击概率 ×0.6。",
      "政变概率 ×0.7。",
    ],
    researchCost: {
      tech: 120,
      credits: 600,
      timeSec: 720,
      note: "研究耗时 720 秒，另耗星币 600。",
    },
    levels: [
      { level: 1, cost: 120, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 240, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 480, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 60.0,
      powerRating: 36,
      note: "性价比 60.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-13 游击战术 [军事·T2] 造价 80 科技点
  "t30-mil-13": {
    id: "t30-mil-13",
    name: "游击战术",
    icon: "🌵",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 80,
    researchTimeSec: 480,
    needs: ["t30-mil-10"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-10", note: "需先研究「军官学校」。" },
    ],
    desc: "化整为零的游击战让入侵者寸步难行。",
    fx: {
      "defenseAdd": 40,
      "defenseMul": 1.1,
    },
    modifiers: [
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 40,
        unit: "点",
        note: "防御力 +40 点",
      },
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "防御力 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-14", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-14", note: "与「闪电战」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 +40 点。",
      "防御力 ×1.1。",
    ],
    researchCost: {
      tech: 80,
      credits: 400,
      timeSec: 480,
      note: "研究耗时 480 秒，另耗星币 400。",
    },
    levels: [
      { level: 1, cost: 80, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 160, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 320, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 40.0,
      powerRating: 26,
      note: "性价比 40.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-mil-14 闪电战 [军事·T4] 造价 140 科技点
  "t30-mil-14": {
    id: "t30-mil-14",
    name: "闪电战",
    icon: "⚡",
    branch: "military",
    branchName: "军事",
    tier: 4,
    cost: 140,
    researchTimeSec: 840,
    needs: ["t30-mil-11"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-11", note: "需先研究「参谋部」。" },
    ],
    desc: "集中火力快速歼灭敌军主力。",
    fx: {
      "attackMul": 1.5,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "攻击力 ×1.5",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: ["d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-15", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-15", note: "与「防御工事」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.5。",
    ],
    researchCost: {
      tech: 140,
      credits: 700,
      timeSec: 840,
      note: "研究耗时 840 秒，另耗星币 700。",
    },
    levels: [
      { level: 1, cost: 140, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 280, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 560, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 140.0,
      powerRating: 43,
      note: "性价比 140.0 科技点/效果项，强度评级 43。",
    },
  },
  // t30-mil-15 防御工事 [军事·T2] 造价 75 科技点
  "t30-mil-15": {
    id: "t30-mil-15",
    name: "防御工事",
    icon: "🏰",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 75,
    researchTimeSec: 450,
    needs: ["t30-mil-08"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-08", note: "需先研究「装甲合金」。" },
    ],
    desc: "环城防线与碉堡群建成。",
    fx: {
      "defenseAdd": 60,
    },
    modifiers: [
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 60,
        unit: "点",
        note: "防御力 +60 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: ["b30-bunker"],
    unlockBuildings: ["b30-bunker"],
    requires: {
      minPop: 20,
      buildings: ["lab"],
      wonders: [],
      note: "需人口 ≥20 人且拥有实验室。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-mil-16", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-16", note: "与「地堡网络」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 +60 点。",
      "解锁建筑「地堡」。",
    ],
    researchCost: {
      tech: 75,
      credits: 375,
      timeSec: 450,
      note: "研究耗时 450 秒，另耗星币 375。",
    },
    levels: [
      { level: 1, cost: 75, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 150, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 300, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 75.0,
      powerRating: 23,
      note: "性价比 75.0 科技点/效果项，强度评级 23。",
    },
  },
  // t30-mil-16 地堡网络 [军事·T3] 造价 110 科技点
  "t30-mil-16": {
    id: "t30-mil-16",
    name: "地堡网络",
    icon: "🕳️",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 110,
    researchTimeSec: 660,
    needs: ["t30-mil-15"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-15", note: "需先研究「防御工事」。" },
    ],
    desc: "地下地堡网可容纳全城居民避难。",
    fx: {
      "defenseAdd": 100,
      "popCapAdd": 10,
    },
    modifiers: [
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 100,
        unit: "点",
        note: "防御力 +100 点",
      },
      {
        key: "popCapAdd",
        target: "pop.cap",
        op: "add",
        value: 10,
        unit: "人",
        note: "人口上限 +10 人",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-17", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-17", note: "与「防空系统」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 +100 点。",
      "人口上限 +10 人。",
    ],
    researchCost: {
      tech: 110,
      credits: 550,
      timeSec: 660,
      note: "研究耗时 660 秒，另耗星币 550。",
    },
    levels: [
      { level: 1, cost: 110, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 220, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 440, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 55.0,
      powerRating: 36,
      note: "性价比 55.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-17 防空系统 [军事·T3] 造价 90 科技点
  "t30-mil-17": {
    id: "t30-mil-17",
    name: "防空系统",
    icon: "🚀",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 90,
    researchTimeSec: 540,
    needs: ["t30-mil-05"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-05", note: "需先研究「动能拦截」。" },
    ],
    desc: "防空火力网覆盖全城空域。",
    fx: {
      "meteorMul": 0.4,
      "invasionMul": 0.7,
    },
    modifiers: [
      {
        key: "meteorMul",
        target: "risk.meteorDamage",
        op: "mul",
        value: 0.4,
        unit: "倍",
        note: "陨石伤害 ×0.4",
      },
      {
        key: "invasionMul",
        target: "risk.invasionChance",
        op: "mul",
        value: 0.7,
        unit: "倍",
        note: "外星入侵概率 ×0.7",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-18", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-18", note: "与「导弹防御」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "陨石伤害 ×0.4。",
      "外星入侵概率 ×0.7。",
    ],
    researchCost: {
      tech: 90,
      credits: 450,
      timeSec: 540,
      note: "研究耗时 540 秒，另耗星币 450。",
    },
    levels: [
      { level: 1, cost: 90, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 180, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 360, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 45.0,
      powerRating: 36,
      note: "性价比 45.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-18 导弹防御 [军事·T3] 造价 130 科技点
  "t30-mil-18": {
    id: "t30-mil-18",
    name: "导弹防御",
    icon: "🎯",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 130,
    researchTimeSec: 780,
    needs: ["t30-mil-17"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-17", note: "需先研究「防空系统」。" },
    ],
    desc: "反导系统拦截一切来袭飞行器。",
    fx: {
      "invasionMul": 0.5,
      "defenseAdd": 60,
    },
    modifiers: [
      {
        key: "invasionMul",
        target: "risk.invasionChance",
        op: "mul",
        value: 0.5,
        unit: "倍",
        note: "外星入侵概率 ×0.5",
      },
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 60,
        unit: "点",
        note: "防御力 +60 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-alien"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-19", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-19", note: "与「机器人军团」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外星入侵概率 ×0.5。",
      "防御力 +60 点。",
    ],
    researchCost: {
      tech: 130,
      credits: 650,
      timeSec: 780,
      note: "研究耗时 780 秒，另耗星币 650。",
    },
    levels: [
      { level: 1, cost: 130, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 260, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 520, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 65.0,
      powerRating: 36,
      note: "性价比 65.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-19 机器人军团 [军事·T4] 造价 160 科技点
  "t30-mil-19": {
    id: "t30-mil-19",
    name: "机器人军团",
    icon: "🤖",
    branch: "military",
    branchName: "军事",
    tier: 4,
    cost: 160,
    researchTimeSec: 960,
    needs: ["t30-mil-09", "t30-mil-11"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-09", note: "需先研究「纳米装甲」。" },
      { type: "tech", ref: "t30-mil-11", note: "需先研究「参谋部」。" },
    ],
    desc: "战斗机器人军团 24 小时值守。",
    fx: {
      "attackMul": 1.6,
      "defenseAdd": 80,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.6,
        unit: "倍",
        note: "攻击力 ×1.6",
      },
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 80,
        unit: "点",
        note: "防御力 +80 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 60,
      buildings: [],
      wonders: [],
      note: "需人口 ≥60 人，无建筑要求。",
    },
    mitigates: ["d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-20", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-20", note: "与「泰坦机甲」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.6。",
      "防御力 +80 点。",
    ],
    researchCost: {
      tech: 160,
      credits: 800,
      timeSec: 960,
      note: "研究耗时 960 秒，另耗星币 800。",
    },
    levels: [
      { level: 1, cost: 160, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 320, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 640, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 80.0,
      powerRating: 46,
      note: "性价比 80.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-mil-20 泰坦机甲 [军事·T4] 造价 200 科技点
  "t30-mil-20": {
    id: "t30-mil-20",
    name: "泰坦机甲",
    icon: "🦾",
    branch: "military",
    branchName: "军事",
    tier: 4,
    cost: 200,
    researchTimeSec: 1200,
    needs: ["t30-mil-19"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-19", note: "需先研究「机器人军团」。" },
    ],
    desc: "百米泰坦机甲成为城市守护神。",
    fx: {
      "attackMul": 2.0,
      "defenseAdd": 120,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 2.0,
        unit: "倍",
        note: "攻击力 ×2.0",
      },
      {
        key: "defenseAdd",
        target: "military.defense",
        op: "add",
        value: 120,
        unit: "点",
        note: "防御力 +120 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 4, perUnit: 0.4, cap: 20, note: "每 100 人口，效果额外提升 40%，上限 200%。" },
      { scope: "perBuilding", base: 4, perUnit: 0.2, cap: 12, note: "每座同系建筑，效果额外提升 20%，上限 120%。" },
    ],
    unlocks: ["b30-titan"],
    unlockBuildings: ["b30-titan"],
    requires: {
      minPop: 60,
      buildings: ["lab"],
      wonders: [],
      note: "需人口 ≥60 人且拥有实验室。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-mil-21", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-21", note: "与「心理防御」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×2.0。",
      "防御力 +120 点。",
      "解锁建筑「泰坦机甲库」。",
    ],
    researchCost: {
      tech: 200,
      credits: 1000,
      timeSec: 1200,
      note: "研究耗时 1200 秒，另耗星币 1000。",
    },
    levels: [
      { level: 1, cost: 200, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 400, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 800, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 8,
      urgency: 2,
      note: "AI 总督推荐权重：T4 科技优先度 8。",
    },
    balance: {
      costPerEffect: 100.0,
      powerRating: 46,
      note: "性价比 100.0 科技点/效果项，强度评级 46。",
    },
  },
  // t30-mil-21 心理防御 [军事·T2] 造价 70 科技点
  "t30-mil-21": {
    id: "t30-mil-21",
    name: "心理防御",
    icon: "🧠",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 70,
    researchTimeSec: 420,
    needs: ["t30-mil-10"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-10", note: "需先研究「军官学校」。" },
    ],
    desc: "政委体系稳住军心民心。",
    fx: {
      "revoltMul": 0.7,
      "coupMul": 0.8,
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
        key: "coupMul",
        target: "risk.coupChance",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "政变概率 ×0.8",
      },
    ],
    scaling: [
      { scope: "perPop", base: 2, perUnit: 0.2, cap: 10, note: "每 100 人口，效果额外提升 20%，上限 100%。" },
      { scope: "perBuilding", base: 2, perUnit: 0.1, cap: 6, note: "每座同系建筑，效果额外提升 10%，上限 60%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 20,
      buildings: [],
      wonders: [],
      note: "需人口 ≥20 人，无建筑要求。",
    },
    mitigates: ["d30-coup", "d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-coup", note: "缓解「政变」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-22", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-22", note: "与「军事工业」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "叛乱概率 ×0.7。",
      "政变概率 ×0.8。",
    ],
    researchCost: {
      tech: 70,
      credits: 350,
      timeSec: 420,
      note: "研究耗时 420 秒，另耗星币 350。",
    },
    levels: [
      { level: 1, cost: 70, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 140, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 280, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 4,
      urgency: 4,
      note: "AI 总督推荐权重：T2 科技优先度 4。",
    },
    balance: {
      costPerEffect: 35.0,
      powerRating: 26,
      note: "性价比 35.0 科技点/效果项，强度评级 26。",
    },
  },
  // t30-mil-22 军事工业 [军事·T3] 造价 85 科技点
  "t30-mil-22": {
    id: "t30-mil-22",
    name: "军事工业",
    icon: "🏭",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 85,
    researchTimeSec: 510,
    needs: ["t30-mil-02"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-02", note: "需先研究「激光武器」。" },
    ],
    desc: "军工生产线让冶炼与建造都更快。",
    fx: {
      "smelterMul": 1.3,
      "buildCostMul": 0.9,
    },
    modifiers: [
      {
        key: "smelterMul",
        target: "prod.smelter",
        op: "mul",
        value: 1.3,
        unit: "倍",
        note: "冶炼厂产量 ×1.3",
      },
      {
        key: "buildCostMul",
        target: "cost.build",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "建筑建造成本 ×0.9",
      },
    ],
    scaling: [
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: [],
    mitigatesDetail: [
      { disaster: "", note: "无直接缓解的灾难，效果作用于生产 / 人口 / 军事。" },
    ],
    synergy: ["t30-mil-23", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-23", note: "与「战时经济」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "冶炼厂产量 ×1.3。",
      "建筑建造成本 ×0.9。",
    ],
    researchCost: {
      tech: 85,
      credits: 425,
      timeSec: 510,
      note: "研究耗时 510 秒，另耗星币 425。",
    },
    levels: [
      { level: 1, cost: 85, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 170, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 340, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 42.5,
      powerRating: 36,
      note: "性价比 42.5 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-23 战时经济 [军事·T3] 造价 120 科技点
  "t30-mil-23": {
    id: "t30-mil-23",
    name: "战时经济",
    icon: "💰",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 120,
    researchTimeSec: 720,
    needs: ["t30-mil-22"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-22", note: "需先研究「军事工业」。" },
    ],
    desc: "战时配给制让全城生产为战争服务。",
    fx: {
      "allProdMul": 1.15,
      "taxMul": 1.1,
    },
    modifiers: [
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "全部生产建筑产量 ×1.15",
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
      { scope: "perPop", base: 3, perUnit: 0.3, cap: 15, note: "每 100 人口，效果额外提升 30%，上限 150%。" },
      { scope: "perBuilding", base: 3, perUnit: 0.15, cap: 9, note: "每座同系建筑，效果额外提升 15%，上限 90%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 40,
      buildings: [],
      wonders: [],
      note: "需人口 ≥40 人，无建筑要求。",
    },
    mitigates: ["d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-24", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-24", note: "与「星际舰队」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "全部生产建筑产量 ×1.15。",
      "税收效率 ×1.1。",
    ],
    researchCost: {
      tech: 120,
      credits: 600,
      timeSec: 720,
      note: "研究耗时 720 秒，另耗星币 600。",
    },
    levels: [
      { level: 1, cost: 120, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 240, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 480, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 6,
      urgency: 3,
      note: "AI 总督推荐权重：T3 科技优先度 6。",
    },
    balance: {
      costPerEffect: 60.0,
      powerRating: 36,
      note: "性价比 60.0 科技点/效果项，强度评级 36。",
    },
  },
  // t30-mil-24 星际舰队 [军事·T5] 造价 240 科技点
  "t30-mil-24": {
    id: "t30-mil-24",
    name: "星际舰队",
    icon: "🚀",
    branch: "military",
    branchName: "军事",
    tier: 5,
    cost: 240,
    researchTimeSec: 1440,
    needs: ["t30-mil-20", "t30-ds-15"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-20", note: "需先研究「泰坦机甲」。" },
      { type: "tech", ref: "t30-ds-15", note: "需先研究「舰队指挥」。" },
    ],
    desc: "星际舰队成军，制空权牢牢在手。",
    fx: {
      "attackMul": 1.8,
      "defenseMul": 1.5,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.8,
        unit: "倍",
        note: "攻击力 ×1.8",
      },
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "防御力 ×1.5",
      },
    ],
    scaling: [
      { scope: "perPop", base: 5, perUnit: 0.5, cap: 25, note: "每 100 人口，效果额外提升 50%，上限 250%。" },
      { scope: "perBuilding", base: 5, perUnit: 0.25, cap: 15, note: "每座同系建筑，效果额外提升 25%，上限 150%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 80,
      buildings: [],
      wonders: [],
      note: "需人口 ≥80 人，无建筑要求。",
    },
    mitigates: ["d30-alien", "d30-pirate"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-mil-25", "t30-pol-12"],
    comboWith: [
      { tech: "t30-mil-25", note: "与「全面战争」同研时，两项效果各 +10%。" },
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.8。",
      "防御力 ×1.5。",
    ],
    researchCost: {
      tech: 240,
      credits: 1200,
      timeSec: 1440,
      note: "研究耗时 1440 秒，另耗星币 1200。",
    },
    levels: [
      { level: 1, cost: 240, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 480, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 960, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 10,
      urgency: 1,
      note: "AI 总督推荐权重：T5 科技优先度 10。",
    },
    balance: {
      costPerEffect: 120.0,
      powerRating: 56,
      note: "性价比 120.0 科技点/效果项，强度评级 56。",
    },
  },
  // t30-mil-25 全面战争 [军事·T5] 造价 280 科技点
  "t30-mil-25": {
    id: "t30-mil-25",
    name: "全面战争",
    icon: "⚔️",
    branch: "military",
    branchName: "军事",
    tier: 5,
    cost: 280,
    researchTimeSec: 1680,
    needs: ["t30-mil-24", "t30-mil-14"],
    needsDetail: [
      { type: "tech", ref: "t30-mil-24", note: "需先研究「星际舰队」。" },
      { type: "tech", ref: "t30-mil-14", note: "需先研究「闪电战」。" },
    ],
    desc: "总动员令下，全城即是战争机器。",
    fx: {
      "attackMul": 2.0,
      "defenseMul": 1.5,
      "allProdMul": 1.1,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 2.0,
        unit: "倍",
        note: "攻击力 ×2.0",
      },
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.5,
        unit: "倍",
        note: "防御力 ×1.5",
      },
      {
        key: "allProdMul",
        target: "prod.all",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "全部生产建筑产量 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 5, perUnit: 0.5, cap: 25, note: "每 100 人口，效果额外提升 50%，上限 250%。" },
      { scope: "perBuilding", base: 5, perUnit: 0.25, cap: 15, note: "每座同系建筑，效果额外提升 25%，上限 150%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 80,
      buildings: [],
      wonders: [],
      note: "需人口 ≥80 人，无建筑要求。",
    },
    mitigates: ["d30-alien", "d30-civilwar"],
    mitigatesDetail: [
      { disaster: "d30-alien", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
      { disaster: "d30-civilwar", note: "缓解「内战」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t30-pol-12"],
    comboWith: [
      { tech: "t30-pol-12", note: "与「情报局」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×2.0。",
      "防御力 ×1.5。",
      "全部生产建筑产量 ×1.1。",
    ],
    researchCost: {
      tech: 280,
      credits: 1400,
      timeSec: 1680,
      note: "研究耗时 1680 秒，另耗星币 1400。",
    },
    levels: [
      { level: 1, cost: 280, mul: 1.0, note: "基础效果。" },
      { level: 2, cost: 560, mul: 1.5, note: "效果 ×1.5。" },
      { level: 3, cost: 1120, mul: 2.0, note: "效果 ×2。" },
    ],
    aiWeight: {
      priority: 10,
      urgency: 1,
      note: "AI 总督推荐权重：T5 科技优先度 10。",
    },
    balance: {
      costPerEffect: 93.3,
      powerRating: 59,
      note: "性价比 93.3 科技点/效果项，强度评级 59。",
    },
  },
};

/* ============ §5 展示顺序（按分支分组） ============ */
const TECH_V30_ORDER = [
  "t30-pol-01",
  "t30-pol-02",
  "t30-pol-03",
  "t30-pol-04",
  "t30-pol-05",
  "t30-pol-06",
  "t30-pol-07",
  "t30-pol-08",
  "t30-pol-09",
  "t30-pol-10",
  "t30-pol-11",
  "t30-pol-12",
  "t30-pol-13",
  "t30-pol-14",
  "t30-pol-15",
  "t30-pol-16",
  "t30-pol-17",
  "t30-pol-18",
  "t30-pol-19",
  "t30-pol-20",
  "t30-pol-21",
  "t30-pol-22",
  "t30-pol-23",
  "t30-pol-24",
  "t30-pol-25",
  "t30-ds-01",
  "t30-ds-02",
  "t30-ds-03",
  "t30-ds-04",
  "t30-ds-05",
  "t30-ds-06",
  "t30-ds-07",
  "t30-ds-08",
  "t30-ds-09",
  "t30-ds-10",
  "t30-ds-11",
  "t30-ds-12",
  "t30-ds-13",
  "t30-ds-14",
  "t30-ds-15",
  "t30-ds-16",
  "t30-ds-17",
  "t30-ds-18",
  "t30-ds-19",
  "t30-ds-20",
  "t30-ds-21",
  "t30-ds-22",
  "t30-ds-23",
  "t30-ds-24",
  "t30-ds-25",
  "t30-eco-01",
  "t30-eco-02",
  "t30-eco-03",
  "t30-eco-04",
  "t30-eco-05",
  "t30-eco-06",
  "t30-eco-07",
  "t30-eco-08",
  "t30-eco-09",
  "t30-eco-10",
  "t30-eco-11",
  "t30-eco-12",
  "t30-eco-13",
  "t30-eco-14",
  "t30-eco-15",
  "t30-eco-16",
  "t30-eco-17",
  "t30-eco-18",
  "t30-eco-19",
  "t30-eco-20",
  "t30-eco-21",
  "t30-eco-22",
  "t30-eco-23",
  "t30-eco-24",
  "t30-eco-25",
  "t30-mil-01",
  "t30-mil-02",
  "t30-mil-03",
  "t30-mil-04",
  "t30-mil-05",
  "t30-mil-06",
  "t30-mil-07",
  "t30-mil-08",
  "t30-mil-09",
  "t30-mil-10",
  "t30-mil-11",
  "t30-mil-12",
  "t30-mil-13",
  "t30-mil-14",
  "t30-mil-15",
  "t30-mil-16",
  "t30-mil-17",
  "t30-mil-18",
  "t30-mil-19",
  "t30-mil-20",
  "t30-mil-21",
  "t30-mil-22",
  "t30-mil-23",
  "t30-mil-24",
  "t30-mil-25",
];

/* v30 科技总数（自检用） */
const TECH_V30_COUNT = 100;

/* 数据中引用的旧科技 id（tech.js 已有；自检时视为合法前置）。 */
const TECH_V30_KNOWN_OLD_TECH = ["t-surv-15", "t-orb-15", "t-prod-15", "t-build-15", "t-orb-12"];

/* ============ §6 效果执行引擎 ============ */

/* 把单项 v30 科技的 fx 应用到游戏状态对象 state 上。
 * state 形如 { pop: {happiness, cap, growth, waterUse, foodUse},
 *   city: {stability}, econ: {taxRate, tradeIncome}, military: {defense, attack, shield},
 *   prod: {all, miner, smelter, greenhouse, waterplant, food, ironPerMin, ...},
 *   power: {solar, orbital}, risk: {revoltChance, ...}, victory: {progress},
 *   unlock: {moonBase, stargate, ...}, gov: {policySlots} }。
 * 不存在的字段会被跳过（不抛错），返回实际生效的效果清单。 */
function applyTechV30Fx(state, techId, level) {
  const def = TECH_V30_DEFS[techId];
  if (!def || !state) return [];
  const lv = (level && level >= 1 && level <= 3) ? level : 1;
  const lvMul = def.levels[lv - 1].mul;
  const applied = [];
  for (const key of Object.keys(def.fx)) {
    const reg = TECH_V30_FX_REGISTRY[key];
    if (!reg) continue;
    const parts = reg.target.split('.');
    let obj = state;
    for (let i = 0; i < parts.length - 1; i++) {
      if (obj[parts[i]] === undefined) { obj = null; break; }
      obj = obj[parts[i]];
    }
    if (!obj) continue;
    const leaf = parts[parts.length - 1];
    const raw = def.fx[key] * lvMul;
    if (reg.op === 'add') {
      if (typeof obj[leaf] !== 'number') obj[leaf] = 0;
      obj[leaf] += raw;
    } else if (reg.op === 'mul') {
      if (typeof obj[leaf] !== 'number') obj[leaf] = 1;
      obj[leaf] *= raw;
    } else if (reg.op === 'flag') {
      obj[leaf] = 1;
    }
    applied.push({ key: key, target: reg.target, op: reg.op, value: raw });
  }
  return applied;
}

/* 对一整套已研究科技批量应用效果（按 TECH_V30_ORDER 顺序）。 */
function applyTechV30Set(state, unlockedIds) {
  const out = [];
  const set = new Set(unlockedIds || []);
  for (const id of TECH_V30_ORDER) {
    if (!set.has(id)) continue;
    const r = applyTechV30Fx(state, id, 1);
    if (r.length) out.push({ tech: id, applied: r });
  }
  return out;
}

/* 是否可研究：前置全解锁 + 未研究 + 科技点足够 + 人口达标。
 * oldUnlockedSet：旧科技树已解锁集合（可选）；传入时才校验旧科技前置，
 * 未传入时旧前置由调用方另行校验（旧树状态不在本文件内）。 */
function techV30CanResearch(techId, unlockedSet, techPoints, pop, oldUnlockedSet) {
  const def = TECH_V30_DEFS[techId];
  if (!def) return { ok: false, reason: '未知科技' };
  const has = unlockedSet instanceof Set ? unlockedSet : new Set(unlockedSet || []);
  if (has.has(techId)) return { ok: false, reason: '已研究' };
  for (const pre of def.needs) {
    if (pre.indexOf('t30-') === 0) {
      if (!has.has(pre)) {
        return { ok: false, reason: '需要先研究「' + techV30Name(pre) + '」' };
      }
    } else if (oldUnlockedSet) {
      const oldHas = oldUnlockedSet instanceof Set ? oldUnlockedSet : new Set(oldUnlockedSet);
      if (!oldHas.has(pre)) {
        const oldName = (typeof TECH_DEFS !== 'undefined' && TECH_DEFS[pre]) ? TECH_DEFS[pre].name : pre;
        return { ok: false, reason: '需要先研究旧科技「' + oldName + '」' };
      }
    }
  }
  if ((techPoints || 0) < def.cost) return { ok: false, reason: '需要科技点×' + def.cost };
  if ((pop || 0) < def.requires.minPop) return { ok: false, reason: '需要人口≥' + def.requires.minPop };
  return { ok: true };
}

function techV30Name(techId) {
  if (TECH_V30_DEFS[techId]) return TECH_V30_DEFS[techId].name;
  if (typeof TECH_DEFS !== 'undefined' && TECH_DEFS[techId]) return TECH_DEFS[techId].name;
  return techId;
}

/* 单项效果一句话汇总（UI 用）。 */
function techV30EffectSummary(techId) {
  const def = TECH_V30_DEFS[techId];
  if (!def) return '';
  return def.effectLines.join(' ');
}

/* ============ §7 合并进主科技树 ============ */
/* mergeTechV30()：幂等。把 100 项并入全局 TECH_DEFS / TECH_ORDER / TECH_BRANCHES，
 * 并把 4 个新分支登记进去。旧文件未加载时只返回计数，不抛错。 */
function mergeTechV30() {
  let added = 0, skipped = 0;
  if (typeof TECH_DEFS !== 'undefined') {
    for (const id of TECH_V30_ORDER) {
      if (TECH_DEFS[id]) { skipped++; continue; }
      TECH_DEFS[id] = TECH_V30_DEFS[id];
      added++;
    }
  }
  if (typeof TECH_ORDER !== 'undefined') {
    for (const id of TECH_V30_ORDER) {
      if (TECH_ORDER.indexOf(id) === -1) TECH_ORDER.push(id);
    }
  }
  if (typeof TECH_BRANCHES !== 'undefined') {
    for (const k of Object.keys(TECH_V30_BRANCHES)) {
      if (!TECH_BRANCHES[k]) TECH_BRANCHES[k] = TECH_V30_BRANCHES[k];
    }
  }
  return { added: added, skipped: skipped, total: TECH_V30_COUNT,
    branches: Object.keys(TECH_V30_BRANCHES),
    mergedIntoGlobal: (typeof TECH_DEFS !== 'undefined') };
}

/* ============ §8 自检 ============ */
/* 校验 100 项：id 唯一、造价>0、前置存在（v30 内或旧科技树）、fx 键已注册、解锁建筑已定义。 */
function selfTestTechV30() {
  const errors = [];
  const seen = new Set();
  const counts = { politics: 0, deepSpace: 0, eco: 0, military: 0 };
  for (const id of TECH_V30_ORDER) {
    const def = TECH_V30_DEFS[id];
    if (!def) { errors.push(id + ': 定义缺失'); continue; }
    if (seen.has(id)) errors.push(id + ': id 重复');
    seen.add(id);
    counts[def.branch] = (counts[def.branch] || 0) + 1;
    if (!(def.cost > 0)) errors.push(id + ': 造价无效');
    if (def.tier < 1 || def.tier > 5) errors.push(id + ': 档位无效');
    for (const pre of def.needs) {
      const inV30 = !!TECH_V30_DEFS[pre];
      const inOld = (typeof TECH_DEFS !== 'undefined') && !!TECH_DEFS[pre];
      const inKnownOld = TECH_V30_KNOWN_OLD_TECH.indexOf(pre) !== -1;
      if (!inV30 && !inOld && !inKnownOld) errors.push(id + ': 前置不存在 ' + pre);
    }
    for (const k of Object.keys(def.fx)) {
      if (!TECH_V30_FX_REGISTRY[k]) errors.push(id + ': 未注册的效果键 ' + k);
    }
    for (const b of def.unlocks) {
      if (!TECH_V30_BUILDINGS[b]) errors.push(id + ': 解锁建筑未定义 ' + b);
    }
    if (!def.desc || def.desc.length < 4) errors.push(id + ': 描述缺失');
  }
  for (const b of Object.keys(counts)) {
    if (counts[b] !== 25) errors.push('分支 ' + b + ' 数量=' + counts[b] + '，应为 25');
  }
  // 冒烟：对空状态应用全部效果，不得抛错
  try {
    const st = { pop: {}, city: {}, econ: {}, military: {}, prod: {}, power: {}, risk: {}, victory: {}, unlock: {}, gov: {} };
    applyTechV30Set(st, TECH_V30_ORDER);
    if (typeof st.pop.happiness !== 'number') errors.push('冒烟：幸福度未累计');
  } catch (e) { errors.push('冒烟失败: ' + e.message); }
  return { total: TECH_V30_COUNT, counts: counts, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports = { TECH_V30_DEFS, TECH_V30_ORDER, TECH_V30_BRANCHES, TECH_V30_BUILDINGS,
    TECH_V30_FX_REGISTRY, TECH_V30_COUNT, TECH_V30_KNOWN_OLD_TECH, applyTechV30Fx, applyTechV30Set,
    techV30CanResearch, techV30Name, techV30EffectSummary, mergeTechV30, selfTestTechV30 };
}
