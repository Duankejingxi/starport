/* 星港 — tech_v31.js：v3.1 新科技 50 项（政治 12 / 深空 13 / 生态 12 / 军事 13）
 * 每一项都有真实效果：fx 键全部登记在 TECH_V31_FX_REGISTRY，
 * applyTechV31Fx(state, id) 可直接对游戏状态对象执行加成；
 * mergeTechV31() 把 50 项并入全局 TECH_DEFS / TECH_ORDER / TECH_BRANCHES。
 * 前置链：同系内按档递进，T1 无前置或只引用已存在的旧科技 id。
 * 描述一律一句话，不写故事。
 */

'use strict';

/* ============ §1 效果键注册表（键 -> 目标系统 / 运算 / 单位） ============ */
const TECH_V31_FX_REGISTRY = {
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
  "happinessAdd": { target: "pop.happiness", op: "add", unit: "点", note: "居民幸福度 +{v} 点" },
  "he3Add": { target: "prod.he3PerMin", op: "add", unit: "/分钟", note: "氦3 +{v}/分钟" },
  "invasionMul": { target: "risk.invasionChance", op: "mul", unit: "倍", note: "外星入侵概率 ×{v}" },
  "ironAdd": { target: "prod.ironPerMin", op: "add", unit: "/分钟", note: "铁矿 +{v}/分钟" },
  "labMul": { target: "prod.lab", op: "mul", unit: "倍", note: "实验室科技产量 ×{v}" },
  "launchCostMul": { target: "cost.launch", op: "mul", unit: "倍", note: "发射花费 ×{v}" },
  "meteorMul": { target: "risk.meteorDamage", op: "mul", unit: "倍", note: "陨石伤害 ×{v}" },
  "moraleMul": { target: "military.morale", op: "mul", unit: "倍", note: "士气 ×{v}" },
  "orbitalPowerAdd": { target: "power.orbital", op: "add", unit: "电", note: "轨道电力 +{v}" },
  "oxygenAdd": { target: "life.oxygen", op: "add", unit: "点", note: "氧气供给 +{v} 点" },
  "pirateMul": { target: "risk.pirateChance", op: "mul", unit: "倍", note: "海盗袭击概率 ×{v}" },
  "policySlotsAdd": { target: "gov.policySlots", op: "add", unit: "个", note: "政策槽位 +{v} 个" },
  "popGrowthMul": { target: "pop.growth", op: "mul", unit: "倍", note: "人口增长速度 ×{v}" },
  "radiationMul": { target: "risk.radiation", op: "mul", unit: "倍", note: "辐射伤害 ×{v}" },
  "researchMul": { target: "prod.research", op: "mul", unit: "倍", note: "科研速度 ×{v}" },
  "revoltMul": { target: "risk.revoltChance", op: "mul", unit: "倍", note: "叛乱概率 ×{v}" },
  "shieldMul": { target: "military.shield", op: "mul", unit: "倍", note: "护盾强度 ×{v}" },
  "shipHpMul": { target: "fleet.hp", op: "mul", unit: "倍", note: "舰船耐久 ×{v}" },
  "shipSpeedMul": { target: "fleet.speed", op: "mul", unit: "倍", note: "舰船航速 ×{v}" },
  "stabilityAdd": { target: "city.stability", op: "add", unit: "点", note: "殖民地稳定度 +{v} 点" },
  "taxMul": { target: "econ.taxRate", op: "mul", unit: "倍", note: "税收效率 ×{v}" },
  "terraformAdd": { target: "planet.terraform", op: "add", unit: "点", note: "行星改造进度 +{v} 点" },
  "tradeMul": { target: "econ.tradeIncome", op: "mul", unit: "倍", note: "贸易收入 ×{v}" },
  "tradeShipMul": { target: "trade.shipInterval", op: "mul", unit: "倍", note: "贸易船到访间隔 ×{v}" },
  "victoryProgressAdd": { target: "victory.progress", op: "add", unit: "点", note: "胜利进度 +{v} 点" },
  "warnAddSec": { target: "sys.warnTime", op: "add", unit: "秒", note: "灾难预警时间 +{v} 秒" },
  "waterAdd": { target: "prod.waterPerMin", op: "add", unit: "/分钟", note: "水 +{v}/分钟" },
  "waterUseMul": { target: "pop.waterUse", op: "mul", unit: "倍", note: "人口耗水 ×{v}" },
  "waterplantMul": { target: "prod.waterplant", op: "mul", unit: "倍", note: "水厂产量 ×{v}" },
};

/* ============ §2 新分支（4 系） ============ */
const TECH_V31_BRANCHES = {
  "politics": { name: "政治", icon: "🏛️", color: "#f59e0b", v31: true },
  "deepSpace": { name: "深空", icon: "🚀", color: "#a5b4fc", v31: true },
  "eco": { name: "生态", icon: "🌿", color: "#4ade80", v31: true },
  "military": { name: "军事", icon: "⚔️", color: "#f87171", v31: true },
};

/* v31 缓解的灾难代码（自检用）： */
const TECH_V31_DISASTERS = {
  "d31-protest": "大规模抗议",
  "d31-corruption": "腐败丑闻",
  "d31-coup": "政变阴谋",
  "d31-sandstorm": "特大沙尘暴",
  "d31-meteor": "陨石雨",
  "d31-pirate": "海盗袭击",
  "d31-invasion": "外星入侵",
  "d31-radiation": "辐射泄漏",
  "d31-drought": "大干旱",
  "d31-plague": "瘟疫蔓延",
  "d31-quake": "火星震",
  "d31-blackout": "全城断电",
};

/* ============ §3 科技定义（50 项） ============ */
const TECH_V31_DEFS = {
  // ---------- 政治系（12 项） ----------
  // t31-pol-01 廉政审计 [政治·T1] 造价 30 科技点
  // 造价分析：本项 30 科技点，同档（T1）均价 40 点，本项为均价的 0.75×；研究耗时 180 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 30 科技点，占本系链总造价 2280 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 240 铁当量，约等于 20.0 座采矿机 L1 的造价。
  // 效果分解：腐败发生率 ×0.9（目标 risk.corruption，mul运算）。
  // 效果分解：殖民地稳定度 +2 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 腐败发生率 ×0.9、殖民地稳定度 +2 点；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 1/12 项，无前置，任意时间可研究；是本系链的起点。
  // 横向对比：同档同系另有 阳光法案、全民公投，造价分别为 40、50 点；本项 30 点，排第 1/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（corruptionMul）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「廉政公署」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "t31-pol-01": {
    id: "t31-pol-01",
    name: "廉政审计",
    icon: "🔍",
    branch: "politics",
    branchName: "政治",
    tier: 1,
    cost: 30,
    researchTimeSec: 180,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "审计全部公共账目，揪出第一批蛀虫。",
    fx: {
      "corruptionMul": 0.9,
      "stabilityAdd": 2,
    },
    modifiers: [
      {
        key: "corruptionMul",
        target: "risk.corruption",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "腐败发生率 ×0.9",
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
    mitigates: ["d31-corruption"],
    mitigatesDetail: [
      { disaster: "d31-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-02", "t31-pol-03"],
    comboWith: [
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-03", note: "与「全民公投」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "腐败发生率 ×0.9。",
      "殖民地稳定度 +2 点。",
    ],
  },
  // t31-pol-02 阳光法案 [政治·T1] 造价 40 科技点
  // 造价分析：本项 40 科技点，同档（T1）均价 40 点，本项为均价的 1.00×；研究耗时 240 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 70 科技点，占本系链总造价 2280 点的 3%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 320 铁当量，约等于 26.7 座采矿机 L1 的造价。
  // 效果分解：腐败发生率 ×0.85（目标 risk.corruption，mul运算）。
  // 效果分解：居民幸福度 +3 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 腐败发生率 ×0.85、居民幸福度 +3 点；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 2/12 项，前置 t31-pol-01；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 廉政审计、全民公投，造价分别为 30、50 点；本项 40 点，排第 2/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（corruptionMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「廉政公署」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-02": {
    id: "t31-pol-02",
    name: "阳光法案",
    icon: "☀️",
    branch: "politics",
    branchName: "政治",
    tier: 1,
    cost: 40,
    researchTimeSec: 240,
    needs: ["t31-pol-01"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-01", note: "前置科技「廉政审计」，需先研究。" },
    ],
    desc: "所有预算公开上网，阳光是最好的防腐剂。",
    fx: {
      "corruptionMul": 0.85,
      "happinessAdd": 3,
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
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d31-corruption"],
    mitigatesDetail: [
      { disaster: "d31-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-03"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-03", note: "与「全民公投」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "腐败发生率 ×0.85。",
      "居民幸福度 +3 点。",
    ],
  },
  // t31-pol-03 全民公投 [政治·T1] 造价 50 科技点
  // 造价分析：本项 50 科技点，同档（T1）均价 40 点，本项为均价的 1.25×；研究耗时 300 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 120 科技点，占本系链总造价 2280 点的 5%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 400 铁当量，约等于 33.3 座采矿机 L1 的造价。
  // 效果分解：居民幸福度 +4 点（目标 pop.happiness，add运算）。
  // 效果分解：殖民地稳定度 +3 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 居民幸福度 +4 点、殖民地稳定度 +3 点；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 3/12 项，前置 t31-pol-02；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 廉政审计、阳光法案，造价分别为 30、40 点；本项 50 点，排第 3/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（happinessAdd）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「选举委员会」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-03": {
    id: "t31-pol-03",
    name: "全民公投",
    icon: "🗳️",
    branch: "politics",
    branchName: "政治",
    tier: 1,
    cost: 50,
    researchTimeSec: 300,
    needs: ["t31-pol-02"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-02", note: "前置科技「阳光法案」，需先研究。" },
    ],
    desc: "重大决策交由全体居民投票决定。",
    fx: {
      "happinessAdd": 4,
      "stabilityAdd": 3,
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
    mitigates: ["d31-protest"],
    mitigatesDetail: [
      { disaster: "d31-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +4 点。",
      "殖民地稳定度 +3 点。",
    ],
  },
  // t31-pol-04 选举监督 [政治·T2] 造价 90 科技点
  // 造价分析：本项 90 科技点，同档（T2）均价 110 点，本项为均价的 0.82×；研究耗时 540 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 210 科技点，占本系链总造价 2280 点的 9%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 720 铁当量，约等于 60.0 座采矿机 L1 的造价。
  // 效果分解：政变概率 ×0.9（目标 risk.coupChance，mul运算）。
  // 效果分解：殖民地稳定度 +3 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 政变概率 ×0.9、殖民地稳定度 +3 点；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 4/12 项，前置 t31-pol-03；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 新闻自由、媒体素养，造价分别为 110、130 点；本项 90 点，排第 1/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：乘法叠加（coupMul）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「选举委员会」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「政变阴谋」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-04": {
    id: "t31-pol-04",
    name: "选举监督",
    icon: "👁️",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 90,
    researchTimeSec: 540,
    needs: ["t31-pol-03"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-03", note: "前置科技「全民公投」，需先研究。" },
    ],
    desc: "独立监票员进驻每个投票站，舞弊无处藏身。",
    fx: {
      "coupMul": 0.9,
      "stabilityAdd": 3,
    },
    modifiers: [
      {
        key: "coupMul",
        target: "risk.coupChance",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "政变概率 ×0.9",
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
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d31-coup"],
    mitigatesDetail: [
      { disaster: "d31-coup", note: "缓解「政变阴谋」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "政变概率 ×0.9。",
      "殖民地稳定度 +3 点。",
    ],
  },
  // t31-pol-05 新闻自由 [政治·T2] 造价 110 科技点
  // 造价分析：本项 110 科技点，同档（T2）均价 110 点，本项为均价的 1.00×；研究耗时 660 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 320 科技点，占本系链总造价 2280 点的 14%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 880 铁当量，约等于 73.3 座采矿机 L1 的造价。
  // 效果分解：居民幸福度 +3 点（目标 pop.happiness，add运算）。
  // 效果分解：科研速度 ×1.05（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 居民幸福度 +3 点、科研速度 ×1.05；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 5/12 项，前置 t31-pol-04；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 选举监督、媒体素养，造价分别为 90、130 点；本项 110 点，排第 2/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：加法叠加（happinessAdd）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「新闻中心」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-05": {
    id: "t31-pol-05",
    name: "新闻自由",
    icon: "📰",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 110,
    researchTimeSec: 660,
    needs: ["t31-pol-04"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-04", note: "前置科技「选举监督」，需先研究。" },
    ],
    desc: "解除新闻审查，记者可以调查任何机构。",
    fx: {
      "happinessAdd": 3,
      "researchMul": 1.05,
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
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d31-protest"],
    mitigatesDetail: [
      { disaster: "d31-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +3 点。",
      "科研速度 ×1.05。",
    ],
  },
  // t31-pol-06 媒体素养 [政治·T2] 造价 130 科技点
  // 造价分析：本项 130 科技点，同档（T2）均价 110 点，本项为均价的 1.18×；研究耗时 780 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 450 科技点，占本系链总造价 2280 点的 20%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1040 铁当量，约等于 86.7 座采矿机 L1 的造价。
  // 效果分解：叛乱概率 ×0.9（目标 risk.revoltChance，mul运算）。
  // 效果分解：居民幸福度 +2 点（目标 pop.happiness，add运算）。
  // 效果分解：两项效果合计 叛乱概率 ×0.9、居民幸福度 +2 点；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 6/12 项，前置 t31-pol-05；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 选举监督、新闻自由，造价分别为 90、110 点；本项 130 点，排第 3/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：乘法叠加（revoltMul）、加法叠加（happinessAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「新闻中心」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-06": {
    id: "t31-pol-06",
    name: "媒体素养",
    icon: "🎓",
    branch: "politics",
    branchName: "政治",
    tier: 2,
    cost: 130,
    researchTimeSec: 780,
    needs: ["t31-pol-05"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-05", note: "前置科技「新闻自由」，需先研究。" },
    ],
    desc: "全民媒体素养课，谣言传不出三个街区。",
    fx: {
      "revoltMul": 0.9,
      "happinessAdd": 2,
    },
    modifiers: [
      {
        key: "revoltMul",
        target: "risk.revoltChance",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "叛乱概率 ×0.9",
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
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d31-protest"],
    mitigatesDetail: [
      { disaster: "d31-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "叛乱概率 ×0.9。",
      "居民幸福度 +2 点。",
    ],
  },
  // t31-pol-07 智库资助 [政治·T3] 造价 180 科技点
  // 造价分析：本项 180 科技点，同档（T3）均价 210 点，本项为均价的 0.86×；研究耗时 1080 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 630 科技点，占本系链总造价 2280 点的 28%；单项造价占链总价的 8%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1440 铁当量，约等于 120.0 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.08（目标 prod.research，mul运算）。
  // 效果分解：实验室科技产量 ×1.1（目标 prod.lab，mul运算）。
  // 效果分解：两项效果合计 科研速度 ×1.08、实验室科技产量 ×1.1；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 7/12 项，前置 t31-pol-06；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 政策沙盘、外交豁免，造价分别为 210、240 点；本项 180 点，排第 1/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：乘法叠加（researchMul）、乘法叠加（labMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「智库」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-07": {
    id: "t31-pol-07",
    name: "智库资助",
    icon: "🧠",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 180,
    researchTimeSec: 1080,
    needs: ["t31-pol-06"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-06", note: "前置科技「媒体素养」，需先研究。" },
    ],
    desc: "政府出资养一批不说漂亮话的研究员。",
    fx: {
      "researchMul": 1.08,
      "labMul": 1.1,
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
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-blackout"],
    mitigatesDetail: [
      { disaster: "d31-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.08。",
      "实验室科技产量 ×1.1。",
    ],
  },
  // t31-pol-08 政策沙盘 [政治·T3] 造价 210 科技点
  // 造价分析：本项 210 科技点，同档（T3）均价 210 点，本项为均价的 1.00×；研究耗时 1260 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 840 科技点，占本系链总造价 2280 点的 37%；单项造价占链总价的 9%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1680 铁当量，约等于 140.0 座采矿机 L1 的造价。
  // 效果分解：建筑建造成本 ×0.95（目标 cost.build，mul运算）。
  // 效果分解：税收效率 ×1.05（目标 econ.taxRate，mul运算）。
  // 效果分解：两项效果合计 建筑建造成本 ×0.95、税收效率 ×1.05；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 8/12 项，前置 t31-pol-07；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 智库资助、外交豁免，造价分别为 180、240 点；本项 210 点，排第 2/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：乘法叠加（buildCostMul）、乘法叠加（taxMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「智库」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「火星震」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-08": {
    id: "t31-pol-08",
    name: "政策沙盘",
    icon: "🎲",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 210,
    researchTimeSec: 1260,
    needs: ["t31-pol-07"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-07", note: "前置科技「智库资助」，需先研究。" },
    ],
    desc: "每项政策先在沙盘里推演十遍再落地。",
    fx: {
      "buildCostMul": 0.95,
      "taxMul": 1.05,
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
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-quake"],
    mitigatesDetail: [
      { disaster: "d31-quake", note: "缓解「火星震」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "建筑建造成本 ×0.95。",
      "税收效率 ×1.05。",
    ],
  },
  // t31-pol-09 外交豁免 [政治·T3] 造价 240 科技点
  // 造价分析：本项 240 科技点，同档（T3）均价 210 点，本项为均价的 1.14×；研究耗时 1440 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1080 科技点，占本系链总造价 2280 点的 47%；单项造价占链总价的 11%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1920 铁当量，约等于 160.0 座采矿机 L1 的造价。
  // 效果分解：外交关系增速 ×1.15（目标 diplomacy.relation，mul运算）。
  // 效果分解：贸易收入 ×1.08（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 外交关系增速 ×1.15、贸易收入 ×1.08；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 9/12 项，前置 t31-pol-08；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 智库资助、政策沙盘，造价分别为 180、210 点；本项 240 点，排第 3/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：乘法叠加（diplomacyMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「新闻中心」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗袭击」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-09": {
    id: "t31-pol-09",
    name: "外交豁免",
    icon: "🤝",
    branch: "politics",
    branchName: "政治",
    tier: 3,
    cost: 240,
    researchTimeSec: 1440,
    needs: ["t31-pol-08"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-08", note: "前置科技「政策沙盘」，需先研究。" },
    ],
    desc: "与地球各国签署外交豁免与贸易协定。",
    fx: {
      "diplomacyMul": 1.15,
      "tradeMul": 1.08,
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
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-pirate"],
    mitigatesDetail: [
      { disaster: "d31-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.15。",
      "贸易收入 ×1.08。",
    ],
  },
  // t31-pol-10 星际法庭 [政治·T4] 造价 320 科技点
  // 造价分析：本项 320 科技点，同档（T4）均价 340 点，本项为均价的 0.94×；研究耗时 1920 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1400 科技点，占本系链总造价 2280 点的 61%；单项造价占链总价的 14%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2560 铁当量，约等于 213.3 座采矿机 L1 的造价。
  // 效果分解：腐败发生率 ×0.8（目标 risk.corruption，mul运算）。
  // 效果分解：外交关系增速 ×1.1（目标 diplomacy.relation，mul运算）。
  // 效果分解：两项效果合计 腐败发生率 ×0.8、外交关系增速 ×1.1；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 10/12 项，前置 t31-pol-09；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 公民陪审，造价分别为 360 点；本项 320 点，排第 1/2（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥600 人；后期决胜科技。
  // 叠加说明：乘法叠加（corruptionMul）、乘法叠加（diplomacyMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「廉政公署」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「腐败丑闻」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-10": {
    id: "t31-pol-10",
    name: "星际法庭",
    icon: "⚖️",
    branch: "politics",
    branchName: "政治",
    tier: 4,
    cost: 320,
    researchTimeSec: 1920,
    needs: ["t31-pol-09"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-09", note: "前置科技「外交豁免」，需先研究。" },
    ],
    desc: "火星有了自己的最高法庭，判决全太阳系有效。",
    fx: {
      "corruptionMul": 0.8,
      "diplomacyMul": 1.1,
    },
    modifiers: [
      {
        key: "corruptionMul",
        target: "risk.corruption",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "腐败发生率 ×0.8",
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
      minPop: 600,
      buildings: [],
      wonders: [],
      note: "需人口 ≥600 人，无建筑要求。",
    },
    mitigates: ["d31-corruption"],
    mitigatesDetail: [
      { disaster: "d31-corruption", note: "缓解「腐败丑闻」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "腐败发生率 ×0.8。",
      "外交关系增速 ×1.1。",
    ],
  },
  // t31-pol-11 公民陪审 [政治·T4] 造价 360 科技点
  // 造价分析：本项 360 科技点，同档（T4）均价 340 点，本项为均价的 1.06×；研究耗时 2160 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1760 科技点，占本系链总造价 2280 点的 77%；单项造价占链总价的 16%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2880 铁当量，约等于 240.0 座采矿机 L1 的造价。
  // 效果分解：殖民地稳定度 +5 点（目标 city.stability，add运算）。
  // 效果分解：叛乱概率 ×0.85（目标 risk.revoltChance，mul运算）。
  // 效果分解：两项效果合计 殖民地稳定度 +5 点、叛乱概率 ×0.85；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 11/12 项，前置 t31-pol-10；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 星际法庭，造价分别为 320 点；本项 360 点，排第 2/2（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥600 人；后期决胜科技。
  // 叠加说明：加法叠加（stabilityAdd）、乘法叠加（revoltMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「公民广场」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大规模抗议」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-11": {
    id: "t31-pol-11",
    name: "公民陪审",
    icon: "👥",
    branch: "politics",
    branchName: "政治",
    tier: 4,
    cost: 360,
    researchTimeSec: 2160,
    needs: ["t31-pol-10"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-10", note: "前置科技「星际法庭」，需先研究。" },
    ],
    desc: "随机抽选的居民陪审团裁决重大案件。",
    fx: {
      "stabilityAdd": 5,
      "revoltMul": 0.85,
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
        key: "revoltMul",
        target: "risk.revoltChance",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "叛乱概率 ×0.85",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 600,
      buildings: [],
      wonders: [],
      note: "需人口 ≥600 人，无建筑要求。",
    },
    mitigates: ["d31-protest"],
    mitigatesDetail: [
      { disaster: "d31-protest", note: "缓解「大规模抗议」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "殖民地稳定度 +5 点。",
      "叛乱概率 ×0.85。",
    ],
  },
  // t31-pol-12 宪政基石 [政治·T5] 造价 520 科技点
  // 造价分析：本项 520 科技点，同档（T5）均价 520 点，本项为均价的 1.00×；研究耗时 3120 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2280 科技点，占本系链总造价 2280 点的 100%；单项造价占链总价的 23%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 4160 铁当量，约等于 346.7 座采矿机 L1 的造价。
  // 效果分解：政策槽位 +1 个（目标 gov.policySlots，add运算）。
  // 效果分解：殖民地稳定度 +6 点（目标 city.stability，add运算）。
  // 效果分解：两项效果合计 政策槽位 +1 个、殖民地稳定度 +6 点；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 12/12 项，前置 t31-pol-11；断链时本项不可研究，先补前置。
  // 横向对比：本档同系仅此一项，无同档竞争；跨档比较请看造价分析。
  // 适用阶段：T5 科技，需求人口 ≥1000 人；后期决胜科技。
  // 叠加说明：加法叠加（policySlotsAdd）、加法叠加（stabilityAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「公民广场」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「政变阴谋」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-pol-12": {
    id: "t31-pol-12",
    name: "宪政基石",
    icon: "📜",
    branch: "politics",
    branchName: "政治",
    tier: 5,
    cost: 520,
    researchTimeSec: 3120,
    needs: ["t31-pol-11"],
    needsDetail: [
      { type: "tech", ref: "t31-pol-11", note: "前置科技「公民陪审」，需先研究。" },
    ],
    desc: "颁布火星宪法，权力第一次有了边界。",
    fx: {
      "policySlotsAdd": 1,
      "stabilityAdd": 6,
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
        value: 6,
        unit: "点",
        note: "殖民地稳定度 +6 点",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 1000,
      buildings: [],
      wonders: [],
      note: "需人口 ≥1000 人，无建筑要求。",
    },
    mitigates: ["d31-coup"],
    mitigatesDetail: [
      { disaster: "d31-coup", note: "缓解「政变阴谋」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-pol-01", "t31-pol-02"],
    comboWith: [
      { tech: "t31-pol-01", note: "与「廉政审计」同研时，两项效果各 +10%。" },
      { tech: "t31-pol-02", note: "与「阳光法案」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "政策槽位 +1 个。",
      "殖民地稳定度 +6 点。",
    ],
  },
  // ---------- 深空系（13 项） ----------
  // t31-dsp-01 曲速理论 [深空·T1] 造价 35 科技点
  // 造价分析：本项 35 科技点，同档（T1）均价 45 点，本项为均价的 0.78×；研究耗时 210 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 35 科技点，占本系链总造价 2980 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 280 铁当量，约等于 23.3 座采矿机 L1 的造价。
  // 效果分解：舰船航速 ×1.1（目标 fleet.speed，mul运算）。
  // 效果分解：发射花费 ×0.95（目标 cost.launch，mul运算）。
  // 效果分解：两项效果合计 舰船航速 ×1.1、发射花费 ×0.95；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 1/13 项，无前置，任意时间可研究；是本系链的起点。
  // 横向对比：同档同系另有 曲速线圈、星门测绘，造价分别为 45、55 点；本项 35 点，排第 1/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（shipSpeedMul）、乘法叠加（launchCostMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「曲速引擎工厂」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "t31-dsp-01": {
    id: "t31-dsp-01",
    name: "曲速理论",
    icon: "🌀",
    branch: "deepSpace",
    branchName: "深空",
    tier: 1,
    cost: 35,
    researchTimeSec: 210,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "曲速泡的数学第一次在黑板上成立。",
    fx: {
      "shipSpeedMul": 1.1,
      "launchCostMul": 0.95,
    },
    modifiers: [
      {
        key: "shipSpeedMul",
        target: "fleet.speed",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "舰船航速 ×1.1",
      },
      {
        key: "launchCostMul",
        target: "cost.launch",
        op: "mul",
        value: 0.95,
        unit: "倍",
        note: "发射花费 ×0.95",
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
    mitigates: ["d31-meteor"],
    mitigatesDetail: [
      { disaster: "d31-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-02", "t31-dsp-03"],
    comboWith: [
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-03", note: "与「星门测绘」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "舰船航速 ×1.1。",
      "发射花费 ×0.95。",
    ],
  },
  // t31-dsp-02 曲速线圈 [深空·T1] 造价 45 科技点
  // 造价分析：本项 45 科技点，同档（T1）均价 45 点，本项为均价的 1.00×；研究耗时 270 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 80 科技点，占本系链总造价 2980 点的 3%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 360 铁当量，约等于 30.0 座采矿机 L1 的造价。
  // 效果分解：舰船航速 ×1.15（目标 fleet.speed，mul运算）。
  // 效果分解：舰船耐久 ×1.1（目标 fleet.hp，mul运算）。
  // 效果分解：两项效果合计 舰船航速 ×1.15、舰船耐久 ×1.1；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 2/13 项，前置 t31-dsp-01；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 曲速理论、星门测绘，造价分别为 35、55 点；本项 45 点，排第 2/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（shipSpeedMul）、乘法叠加（shipHpMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「曲速引擎工厂」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-02": {
    id: "t31-dsp-02",
    name: "曲速线圈",
    icon: "🧲",
    branch: "deepSpace",
    branchName: "深空",
    tier: 1,
    cost: 45,
    researchTimeSec: 270,
    needs: ["t31-dsp-01"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-01", note: "前置科技「曲速理论」，需先研究。" },
    ],
    desc: "第一只曲速线圈在实验室里亮了起来。",
    fx: {
      "shipSpeedMul": 1.15,
      "shipHpMul": 1.1,
    },
    modifiers: [
      {
        key: "shipSpeedMul",
        target: "fleet.speed",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "舰船航速 ×1.15",
      },
      {
        key: "shipHpMul",
        target: "fleet.hp",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "舰船耐久 ×1.1",
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
    mitigates: ["d31-meteor"],
    mitigatesDetail: [
      { disaster: "d31-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-03"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-03", note: "与「星门测绘」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "舰船航速 ×1.15。",
      "舰船耐久 ×1.1。",
    ],
  },
  // t31-dsp-03 星门测绘 [深空·T1] 造价 55 科技点
  // 造价分析：本项 55 科技点，同档（T1）均价 45 点，本项为均价的 1.22×；研究耗时 330 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 135 科技点，占本系链总造价 2980 点的 5%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 440 铁当量，约等于 36.7 座采矿机 L1 的造价。
  // 效果分解：贸易收入 ×1.1（目标 econ.tradeIncome，mul运算）。
  // 效果分解：发射花费 ×0.9（目标 cost.launch，mul运算）。
  // 效果分解：两项效果合计 贸易收入 ×1.1、发射花费 ×0.9；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 3/13 项，前置 t31-dsp-02；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 曲速理论、曲速线圈，造价分别为 35、45 点；本项 55 点，排第 3/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（tradeMul）、乘法叠加（launchCostMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「星门枢纽」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗袭击」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-03": {
    id: "t31-dsp-03",
    name: "星门测绘",
    icon: "🗺️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 1,
    cost: 55,
    researchTimeSec: 330,
    needs: ["t31-dsp-02"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-02", note: "前置科技「曲速线圈」，需先研究。" },
    ],
    desc: "绘出第一张可用的星门航道图。",
    fx: {
      "tradeMul": 1.1,
      "launchCostMul": 0.9,
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
      minPop: 0,
      buildings: [],
      wonders: [],
      note: "需人口 ≥0 人，无建筑要求。",
    },
    mitigates: ["d31-pirate"],
    mitigatesDetail: [
      { disaster: "d31-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.1。",
      "发射花费 ×0.9。",
    ],
  },
  // t31-dsp-04 星门稳定 [深空·T2] 造价 95 科技点
  // 造价分析：本项 95 科技点，同档（T2）均价 115 点，本项为均价的 0.83×；研究耗时 570 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 230 科技点，占本系链总造价 2980 点的 8%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 760 铁当量，约等于 63.3 座采矿机 L1 的造价。
  // 效果分解：贸易收入 ×1.15（目标 econ.tradeIncome，mul运算）。
  // 效果分解：贸易船到访间隔 ×0.9（目标 trade.shipInterval，mul运算）。
  // 效果分解：两项效果合计 贸易收入 ×1.15、贸易船到访间隔 ×0.9；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 4/13 项，前置 t31-dsp-03；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 深空望远镜、探测器群，造价分别为 115、135 点；本项 95 点，排第 1/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：乘法叠加（tradeMul）、乘法叠加（tradeShipMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「星门枢纽」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗袭击」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-04": {
    id: "t31-dsp-04",
    name: "星门稳定",
    icon: "⚓",
    branch: "deepSpace",
    branchName: "深空",
    tier: 2,
    cost: 95,
    researchTimeSec: 570,
    needs: ["t31-dsp-03"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-03", note: "前置科技「星门测绘」，需先研究。" },
    ],
    desc: "星门通过率从七成提到九成九。",
    fx: {
      "tradeMul": 1.15,
      "tradeShipMul": 0.9,
    },
    modifiers: [
      {
        key: "tradeMul",
        target: "econ.tradeIncome",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "贸易收入 ×1.15",
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
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d31-pirate"],
    mitigatesDetail: [
      { disaster: "d31-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易收入 ×1.15。",
      "贸易船到访间隔 ×0.9。",
    ],
  },
  // t31-dsp-05 深空望远镜 [深空·T2] 造价 115 科技点
  // 造价分析：本项 115 科技点，同档（T2）均价 115 点，本项为均价的 1.00×；研究耗时 690 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 345 科技点，占本系链总造价 2980 点的 12%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 920 铁当量，约等于 76.7 座采矿机 L1 的造价。
  // 效果分解：科研速度 ×1.08（目标 prod.research，mul运算）。
  // 效果分解：小行星采矿产量 ×1.1（目标 prod.asteroid，mul运算）。
  // 效果分解：两项效果合计 科研速度 ×1.08、小行星采矿产量 ×1.1；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 5/13 项，前置 t31-dsp-04；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 星门稳定、探测器群，造价分别为 95、135 点；本项 115 点，排第 2/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：乘法叠加（researchMul）、乘法叠加（asteroidYieldMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「深空探测器站」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-05": {
    id: "t31-dsp-05",
    name: "深空望远镜",
    icon: "🔭",
    branch: "deepSpace",
    branchName: "深空",
    tier: 2,
    cost: 115,
    researchTimeSec: 690,
    needs: ["t31-dsp-04"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-04", note: "前置科技「星门稳定」，需先研究。" },
    ],
    desc: "望远镜阵列一次看清十二颗小行星的成分。",
    fx: {
      "researchMul": 1.08,
      "asteroidYieldMul": 1.1,
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
        key: "asteroidYieldMul",
        target: "prod.asteroid",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "小行星采矿产量 ×1.1",
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
    mitigates: ["d31-meteor"],
    mitigatesDetail: [
      { disaster: "d31-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "科研速度 ×1.08。",
      "小行星采矿产量 ×1.1。",
    ],
  },
  // t31-dsp-06 探测器群 [深空·T2] 造价 135 科技点
  // 造价分析：本项 135 科技点，同档（T2）均价 115 点，本项为均价的 1.17×；研究耗时 810 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 480 科技点，占本系链总造价 2980 点的 16%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1080 铁当量，约等于 90.0 座采矿机 L1 的造价。
  // 效果分解：铁矿 +4/分钟（目标 prod.ironPerMin，add运算）。
  // 效果分解：稀土 +2/分钟（目标 prod.rarePerMin，add运算）。
  // 效果分解：两项效果合计 铁矿 +4/分钟、稀土 +2/分钟；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 6/13 项，前置 t31-dsp-05；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 星门稳定、深空望远镜，造价分别为 95、115 点；本项 135 点，排第 3/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：加法叠加（asteroidIronAdd）、加法叠加（asteroidRareAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「深空探测器站」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-06": {
    id: "t31-dsp-06",
    name: "探测器群",
    icon: "📡",
    branch: "deepSpace",
    branchName: "深空",
    tier: 2,
    cost: 135,
    researchTimeSec: 810,
    needs: ["t31-dsp-05"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-05", note: "前置科技「深空望远镜」，需先研究。" },
    ],
    desc: "一百个探测器撒向小行星带，矿点全亮了。",
    fx: {
      "asteroidIronAdd": 4,
      "asteroidRareAdd": 2,
    },
    modifiers: [
      {
        key: "asteroidIronAdd",
        target: "prod.ironPerMin",
        op: "add",
        value: 4,
        unit: "/分钟",
        note: "铁矿 +4/分钟",
      },
      {
        key: "asteroidRareAdd",
        target: "prod.rarePerMin",
        op: "add",
        value: 2,
        unit: "/分钟",
        note: "稀土 +2/分钟",
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
    mitigates: ["d31-meteor"],
    mitigatesDetail: [
      { disaster: "d31-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "铁矿 +4/分钟。",
      "稀土 +2/分钟。",
    ],
  },
  // t31-dsp-07 小行星拖曳 [深空·T3] 造价 190 科技点
  // 造价分析：本项 190 科技点，同档（T3）均价 220 点，本项为均价的 0.86×；研究耗时 1140 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 670 科技点，占本系链总造价 2980 点的 22%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1520 铁当量，约等于 126.7 座采矿机 L1 的造价。
  // 效果分解：小行星采矿产量 ×1.25（目标 prod.asteroid，mul运算）。
  // 效果分解：铁矿 +6/分钟（目标 prod.ironPerMin，add运算）。
  // 效果分解：两项效果合计 小行星采矿产量 ×1.25、铁矿 +6/分钟；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 7/13 项，前置 t31-dsp-06；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 氦3精炼、外星语言学，造价分别为 220、250 点；本项 190 点，排第 1/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：乘法叠加（asteroidYieldMul）、加法叠加（ironAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「深空探测器站」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-07": {
    id: "t31-dsp-07",
    name: "小行星拖曳",
    icon: "🪨",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 190,
    researchTimeSec: 1140,
    needs: ["t31-dsp-06"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-06", note: "前置科技「探测器群」，需先研究。" },
    ],
    desc: "第一颗小行星被拖回火星轨道开矿。",
    fx: {
      "asteroidYieldMul": 1.25,
      "ironAdd": 6,
    },
    modifiers: [
      {
        key: "asteroidYieldMul",
        target: "prod.asteroid",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "小行星采矿产量 ×1.25",
      },
      {
        key: "ironAdd",
        target: "prod.ironPerMin",
        op: "add",
        value: 6,
        unit: "/分钟",
        note: "铁矿 +6/分钟",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-meteor"],
    mitigatesDetail: [
      { disaster: "d31-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "小行星采矿产量 ×1.25。",
      "铁矿 +6/分钟。",
    ],
  },
  // t31-dsp-08 氦3精炼 [深空·T3] 造价 220 科技点
  // 造价分析：本项 220 科技点，同档（T3）均价 220 点，本项为均价的 1.00×；研究耗时 1320 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 890 科技点，占本系链总造价 2980 点的 30%；单项造价占链总价的 7%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1760 铁当量，约等于 146.7 座采矿机 L1 的造价。
  // 效果分解：氦3 +4/分钟（目标 prod.he3PerMin，add运算）。
  // 效果分解：轨道电力 +10（目标 power.orbital，add运算）。
  // 效果分解：两项效果合计 氦3 +4/分钟、轨道电力 +10；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 8/13 项，前置 t31-dsp-07；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 小行星拖曳、外星语言学，造价分别为 190、250 点；本项 220 点，排第 2/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：加法叠加（he3Add）、加法叠加（orbitalPowerAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「曲速引擎工厂」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-08": {
    id: "t31-dsp-08",
    name: "氦3精炼",
    icon: "⚛️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 220,
    researchTimeSec: 1320,
    needs: ["t31-dsp-07"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-07", note: "前置科技「小行星拖曳」，需先研究。" },
    ],
    desc: "月壤里的氦3第一次变成可用的聚变燃料。",
    fx: {
      "he3Add": 4,
      "orbitalPowerAdd": 10,
    },
    modifiers: [
      {
        key: "he3Add",
        target: "prod.he3PerMin",
        op: "add",
        value: 4,
        unit: "/分钟",
        note: "氦3 +4/分钟",
      },
      {
        key: "orbitalPowerAdd",
        target: "power.orbital",
        op: "add",
        value: 10,
        unit: "电",
        note: "轨道电力 +10",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-blackout"],
    mitigatesDetail: [
      { disaster: "d31-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "氦3 +4/分钟。",
      "轨道电力 +10。",
    ],
  },
  // t31-dsp-09 外星语言学 [深空·T3] 造价 250 科技点
  // 造价分析：本项 250 科技点，同档（T3）均价 220 点，本项为均价的 1.14×；研究耗时 1500 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1140 科技点，占本系链总造价 2980 点的 38%；单项造价占链总价的 8%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2000 铁当量，约等于 166.7 座采矿机 L1 的造价。
  // 效果分解：外交关系增速 ×1.1（目标 diplomacy.relation，mul运算）。
  // 效果分解：科研速度 ×1.08（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 外交关系增速 ×1.1、科研速度 ×1.08；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 9/13 项，前置 t31-dsp-08；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 小行星拖曳、氦3精炼，造价分别为 190、220 点；本项 250 点，排第 3/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：乘法叠加（diplomacyMul）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「外星文物馆」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-09": {
    id: "t31-dsp-09",
    name: "外星语言学",
    icon: "👽",
    branch: "deepSpace",
    branchName: "深空",
    tier: 3,
    cost: 250,
    researchTimeSec: 1500,
    needs: ["t31-dsp-08"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-08", note: "前置科技「氦3精炼」，需先研究。" },
    ],
    desc: "破译了文物上的第一句外星文字。",
    fx: {
      "diplomacyMul": 1.1,
      "researchMul": 1.08,
    },
    modifiers: [
      {
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "外交关系增速 ×1.1",
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
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "外交关系增速 ×1.1。",
      "科研速度 ×1.08。",
    ],
  },
  // t31-dsp-10 文物修复 [深空·T4] 造价 330 科技点
  // 造价分析：本项 330 科技点，同档（T4）均价 350 点，本项为均价的 0.94×；研究耗时 1980 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1470 科技点，占本系链总造价 2980 点的 49%；单项造价占链总价的 11%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2640 铁当量，约等于 220.0 座采矿机 L1 的造价。
  // 效果分解：居民幸福度 +4 点（目标 pop.happiness，add运算）。
  // 效果分解：科研速度 ×1.1（目标 prod.research，mul运算）。
  // 效果分解：两项效果合计 居民幸福度 +4 点、科研速度 ×1.1；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 10/13 项，前置 t31-dsp-09；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 星际航道，造价分别为 370 点；本项 330 点，排第 1/2（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥600 人；后期决胜科技。
  // 叠加说明：加法叠加（happinessAdd）、乘法叠加（researchMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「外星文物馆」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-10": {
    id: "t31-dsp-10",
    name: "文物修复",
    icon: "🏺",
    branch: "deepSpace",
    branchName: "深空",
    tier: 4,
    cost: 330,
    researchTimeSec: 1980,
    needs: ["t31-dsp-09"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-09", note: "前置科技「外星语言学」，需先研究。" },
    ],
    desc: "修复的外星文物在展馆里重新亮起。",
    fx: {
      "happinessAdd": 4,
      "researchMul": 1.1,
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
        key: "researchMul",
        target: "prod.research",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "科研速度 ×1.1",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 600,
      buildings: [],
      wonders: [],
      note: "需人口 ≥600 人，无建筑要求。",
    },
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "居民幸福度 +4 点。",
      "科研速度 ×1.1。",
    ],
  },
  // t31-dsp-11 星际航道 [深空·T4] 造价 370 科技点
  // 造价分析：本项 370 科技点，同档（T4）均价 350 点，本项为均价的 1.06×；研究耗时 2220 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1840 科技点，占本系链总造价 2980 点的 62%；单项造价占链总价的 12%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2960 铁当量，约等于 246.7 座采矿机 L1 的造价。
  // 效果分解：贸易船到访间隔 ×0.8（目标 trade.shipInterval，mul运算）。
  // 效果分解：贸易收入 ×1.12（目标 econ.tradeIncome，mul运算）。
  // 效果分解：两项效果合计 贸易船到访间隔 ×0.8、贸易收入 ×1.12；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 11/13 项，前置 t31-dsp-10；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 文物修复，造价分别为 330 点；本项 370 点，排第 2/2（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥600 人；后期决胜科技。
  // 叠加说明：乘法叠加（tradeShipMul）、乘法叠加（tradeMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「星际港口」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗袭击」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-11": {
    id: "t31-dsp-11",
    name: "星际航道",
    icon: "🛤️",
    branch: "deepSpace",
    branchName: "深空",
    tier: 4,
    cost: 370,
    researchTimeSec: 2220,
    needs: ["t31-dsp-10"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-10", note: "前置科技「文物修复」，需先研究。" },
    ],
    desc: "定期航班开通，商船按时刻表进港。",
    fx: {
      "tradeShipMul": 0.8,
      "tradeMul": 1.12,
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
        value: 1.12,
        unit: "倍",
        note: "贸易收入 ×1.12",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 600,
      buildings: [],
      wonders: [],
      note: "需人口 ≥600 人，无建筑要求。",
    },
    mitigates: ["d31-pirate"],
    mitigatesDetail: [
      { disaster: "d31-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "贸易船到访间隔 ×0.8。",
      "贸易收入 ×1.12。",
    ],
  },
  // t31-dsp-12 跃迁信标 [深空·T5] 造价 540 科技点
  // 造价分析：本项 540 科技点，同档（T5）均价 570 点，本项为均价的 0.95×；研究耗时 3240 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2380 科技点，占本系链总造价 2980 点的 80%；单项造价占链总价的 18%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 4320 铁当量，约等于 360.0 座采矿机 L1 的造价。
  // 效果分解：发射花费 ×0.8（目标 cost.launch，mul运算）。
  // 效果分解：舰船航速 ×1.2（目标 fleet.speed，mul运算）。
  // 效果分解：两项效果合计 发射花费 ×0.8、舰船航速 ×1.2；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 12/13 项，前置 t31-dsp-11；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 银河宪章，造价分别为 600 点；本项 540 点，排第 1/2（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥1000 人；后期决胜科技。
  // 叠加说明：乘法叠加（launchCostMul）、乘法叠加（shipSpeedMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「星际港口」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-12": {
    id: "t31-dsp-12",
    name: "跃迁信标",
    icon: "📍",
    branch: "deepSpace",
    branchName: "深空",
    tier: 5,
    cost: 540,
    researchTimeSec: 3240,
    needs: ["t31-dsp-11"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-11", note: "前置科技「星际航道」，需先研究。" },
    ],
    desc: "信标链铺开，跃迁事故率降到接近零。",
    fx: {
      "launchCostMul": 0.8,
      "shipSpeedMul": 1.2,
    },
    modifiers: [
      {
        key: "launchCostMul",
        target: "cost.launch",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "发射花费 ×0.8",
      },
      {
        key: "shipSpeedMul",
        target: "fleet.speed",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "舰船航速 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 1000,
      buildings: [],
      wonders: [],
      note: "需人口 ≥1000 人，无建筑要求。",
    },
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "发射花费 ×0.8。",
      "舰船航速 ×1.2。",
    ],
  },
  // t31-dsp-13 银河宪章 [深空·T5] 造价 600 科技点
  // 造价分析：本项 600 科技点，同档（T5）均价 570 点，本项为均价的 1.05×；研究耗时 3600 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2980 科技点，占本系链总造价 2980 点的 100%；单项造价占链总价的 20%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 4800 铁当量，约等于 400.0 座采矿机 L1 的造价。
  // 效果分解：胜利进度 +1 点（目标 victory.progress，add运算）。
  // 效果分解：外交关系增速 ×1.2（目标 diplomacy.relation，mul运算）。
  // 效果分解：两项效果合计 胜利进度 +1 点、外交关系增速 ×1.2；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 13/13 项，前置 t31-dsp-12；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 跃迁信标，造价分别为 540 点；本项 600 点，排第 2/2（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥1000 人；后期决胜科技。
  // 叠加说明：加法叠加（victoryProgressAdd）、乘法叠加（diplomacyMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「星门枢纽」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-dsp-13": {
    id: "t31-dsp-13",
    name: "银河宪章",
    icon: "🌌",
    branch: "deepSpace",
    branchName: "深空",
    tier: 5,
    cost: 600,
    researchTimeSec: 3600,
    needs: ["t31-dsp-12"],
    needsDetail: [
      { type: "tech", ref: "t31-dsp-12", note: "前置科技「跃迁信标」，需先研究。" },
    ],
    desc: "火星签署银河宪章，成为星际社会的一员。",
    fx: {
      "victoryProgressAdd": 1,
      "diplomacyMul": 1.2,
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
        key: "diplomacyMul",
        target: "diplomacy.relation",
        op: "mul",
        value: 1.2,
        unit: "倍",
        note: "外交关系增速 ×1.2",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 1000,
      buildings: [],
      wonders: [],
      note: "需人口 ≥1000 人，无建筑要求。",
    },
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-dsp-01", "t31-dsp-02"],
    comboWith: [
      { tech: "t31-dsp-01", note: "与「曲速理论」同研时，两项效果各 +10%。" },
      { tech: "t31-dsp-02", note: "与「曲速线圈」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "胜利进度 +1 点。",
      "外交关系增速 ×1.2。",
    ],
  },
  // ---------- 生态系（12 项） ----------
  // t31-eco-01 大气播种 [生态·T1] 造价 30 科技点
  // 造价分析：本项 30 科技点，同档（T1）均价 40 点，本项为均价的 0.75×；研究耗时 180 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 30 科技点，占本系链总造价 2280 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 240 铁当量，约等于 20.0 座采矿机 L1 的造价。
  // 效果分解：行星改造进度 +3 点（目标 planet.terraform，add运算）。
  // 效果分解：氧气供给 +4 点（目标 life.oxygen，add运算）。
  // 效果分解：两项效果合计 行星改造进度 +3 点、氧气供给 +4 点；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 1/12 项，无前置，任意时间可研究；是本系链的起点。
  // 横向对比：同档同系另有 氧气藻类、海洋播种，造价分别为 40、50 点；本项 30 点，排第 1/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（terraformAdd）、加法叠加（oxygenAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「大气处理器」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「特大沙尘暴」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "t31-eco-01": {
    id: "t31-eco-01",
    name: "大气播种",
    icon: "🌬️",
    branch: "eco",
    branchName: "生态",
    tier: 1,
    cost: 30,
    researchTimeSec: 180,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "向高空播撒催化剂，大气开始一点点变厚。",
    fx: {
      "terraformAdd": 3,
      "oxygenAdd": 4,
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
        key: "oxygenAdd",
        target: "life.oxygen",
        op: "add",
        value: 4,
        unit: "点",
        note: "氧气供给 +4 点",
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
    mitigates: ["d31-sandstorm"],
    mitigatesDetail: [
      { disaster: "d31-sandstorm", note: "缓解「特大沙尘暴」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-02", "t31-eco-03"],
    comboWith: [
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-03", note: "与「海洋播种」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +3 点。",
      "氧气供给 +4 点。",
    ],
  },
  // t31-eco-02 氧气藻类 [生态·T1] 造价 40 科技点
  // 造价分析：本项 40 科技点，同档（T1）均价 40 点，本项为均价的 1.00×；研究耗时 240 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 70 科技点，占本系链总造价 2280 点的 3%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 320 铁当量，约等于 26.7 座采矿机 L1 的造价。
  // 效果分解：氧气供给 +6 点（目标 life.oxygen，add运算）。
  // 效果分解：食物产量 ×1.05（目标 prod.food，mul运算）。
  // 效果分解：两项效果合计 氧气供给 +6 点、食物产量 ×1.05；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 2/12 项，前置 t31-eco-01；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 大气播种、海洋播种，造价分别为 30、50 点；本项 40 点，排第 2/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（oxygenAdd）、乘法叠加（foodMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「雨林」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-02": {
    id: "t31-eco-02",
    name: "氧气藻类",
    icon: "🦠",
    branch: "eco",
    branchName: "生态",
    tier: 1,
    cost: 40,
    researchTimeSec: 240,
    needs: ["t31-eco-01"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-01", note: "前置科技「大气播种」，需先研究。" },
    ],
    desc: "基因改造藻类在水箱里拼命吐氧。",
    fx: {
      "oxygenAdd": 6,
      "foodMul": 1.05,
    },
    modifiers: [
      {
        key: "oxygenAdd",
        target: "life.oxygen",
        op: "add",
        value: 6,
        unit: "点",
        note: "氧气供给 +6 点",
      },
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "食物产量 ×1.05",
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
    mitigates: ["d31-drought"],
    mitigatesDetail: [
      { disaster: "d31-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-03"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-03", note: "与「海洋播种」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "氧气供给 +6 点。",
      "食物产量 ×1.05。",
    ],
  },
  // t31-eco-03 海洋播种 [生态·T1] 造价 50 科技点
  // 造价分析：本项 50 科技点，同档（T1）均价 40 点，本项为均价的 1.25×；研究耗时 300 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 120 科技点，占本系链总造价 2280 点的 5%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 400 铁当量，约等于 33.3 座采矿机 L1 的造价。
  // 效果分解：水 +6/分钟（目标 prod.waterPerMin，add运算）。
  // 效果分解：食物 +4/分钟（目标 prod.foodPerMin，add运算）。
  // 效果分解：两项效果合计 水 +6/分钟、食物 +4/分钟；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 3/12 项，前置 t31-eco-02；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 大气播种、氧气藻类，造价分别为 30、40 点；本项 50 点，排第 3/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（waterAdd）、加法叠加（foodAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「海洋」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-03": {
    id: "t31-eco-03",
    name: "海洋播种",
    icon: "🌊",
    branch: "eco",
    branchName: "生态",
    tier: 1,
    cost: 50,
    researchTimeSec: 300,
    needs: ["t31-eco-02"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-02", note: "前置科技「氧气藻类」，需先研究。" },
    ],
    desc: "第一片人工海出现浮游生物的踪迹。",
    fx: {
      "waterAdd": 6,
      "foodAdd": 4,
    },
    modifiers: [
      {
        key: "waterAdd",
        target: "prod.waterPerMin",
        op: "add",
        value: 6,
        unit: "/分钟",
        note: "水 +6/分钟",
      },
      {
        key: "foodAdd",
        target: "prod.foodPerMin",
        op: "add",
        value: 4,
        unit: "/分钟",
        note: "食物 +4/分钟",
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
    mitigates: ["d31-drought"],
    mitigatesDetail: [
      { disaster: "d31-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "水 +6/分钟。",
      "食物 +4/分钟。",
    ],
  },
  // t31-eco-04 冰川融水 [生态·T2] 造价 90 科技点
  // 造价分析：本项 90 科技点，同档（T2）均价 110 点，本项为均价的 0.82×；研究耗时 540 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 210 科技点，占本系链总造价 2280 点的 9%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 720 铁当量，约等于 60.0 座采矿机 L1 的造价。
  // 效果分解：水 +8/分钟（目标 prod.waterPerMin，add运算）。
  // 效果分解：水厂产量 ×1.15（目标 prod.waterplant，mul运算）。
  // 效果分解：两项效果合计 水 +8/分钟、水厂产量 ×1.15；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 4/12 项，前置 t31-eco-03；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 雨林穹顶、草原轮牧，造价分别为 110、130 点；本项 90 点，排第 1/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：加法叠加（waterAdd）、乘法叠加（waterplantMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「冰川」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-04": {
    id: "t31-eco-04",
    name: "冰川融水",
    icon: "❄️",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 90,
    researchTimeSec: 540,
    needs: ["t31-eco-03"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-03", note: "前置科技「海洋播种」，需先研究。" },
    ],
    desc: "极地冰川的融水第一次流入城市管网。",
    fx: {
      "waterAdd": 8,
      "waterplantMul": 1.15,
    },
    modifiers: [
      {
        key: "waterAdd",
        target: "prod.waterPerMin",
        op: "add",
        value: 8,
        unit: "/分钟",
        note: "水 +8/分钟",
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
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d31-drought"],
    mitigatesDetail: [
      { disaster: "d31-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "水 +8/分钟。",
      "水厂产量 ×1.15。",
    ],
  },
  // t31-eco-05 雨林穹顶 [生态·T2] 造价 110 科技点
  // 造价分析：本项 110 科技点，同档（T2）均价 110 点，本项为均价的 1.00×；研究耗时 660 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 320 科技点，占本系链总造价 2280 点的 14%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 880 铁当量，约等于 73.3 座采矿机 L1 的造价。
  // 效果分解：氧气供给 +8 点（目标 life.oxygen，add运算）。
  // 效果分解：食物产量 ×1.1（目标 prod.food，mul运算）。
  // 效果分解：两项效果合计 氧气供给 +8 点、食物产量 ×1.1；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 5/12 项，前置 t31-eco-04；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 冰川融水、草原轮牧，造价分别为 90、130 点；本项 110 点，排第 2/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：加法叠加（oxygenAdd）、乘法叠加（foodMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「雨林」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-05": {
    id: "t31-eco-05",
    name: "雨林穹顶",
    icon: "🌴",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 110,
    researchTimeSec: 660,
    needs: ["t31-eco-04"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-04", note: "前置科技「冰川融水」，需先研究。" },
    ],
    desc: "穹顶里下起第一场人造雨，雨林活了。",
    fx: {
      "oxygenAdd": 8,
      "foodMul": 1.1,
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
      minPop: 100,
      buildings: [],
      wonders: [],
      note: "需人口 ≥100 人，无建筑要求。",
    },
    mitigates: ["d31-plague"],
    mitigatesDetail: [
      { disaster: "d31-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "氧气供给 +8 点。",
      "食物产量 ×1.1。",
    ],
  },
  // t31-eco-06 草原轮牧 [生态·T2] 造价 130 科技点
  // 造价分析：本项 130 科技点，同档（T2）均价 110 点，本项为均价的 1.18×；研究耗时 780 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 450 科技点，占本系链总造价 2280 点的 20%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1040 铁当量，约等于 86.7 座采矿机 L1 的造价。
  // 效果分解：食物产量 ×1.12（目标 prod.food，mul运算）。
  // 效果分解：食物 +5/分钟（目标 prod.foodPerMin，add运算）。
  // 效果分解：两项效果合计 食物产量 ×1.12、食物 +5/分钟；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 6/12 项，前置 t31-eco-05；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 冰川融水、雨林穹顶，造价分别为 90、110 点；本项 130 点，排第 3/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：乘法叠加（foodMul）、加法叠加（foodAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「草原」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-06": {
    id: "t31-eco-06",
    name: "草原轮牧",
    icon: "🌾",
    branch: "eco",
    branchName: "生态",
    tier: 2,
    cost: 130,
    researchTimeSec: 780,
    needs: ["t31-eco-05"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-05", note: "前置科技「雨林穹顶」，需先研究。" },
    ],
    desc: "轮牧制度让草原产量翻了一番还不退化。",
    fx: {
      "foodMul": 1.12,
      "foodAdd": 5,
    },
    modifiers: [
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.12,
        unit: "倍",
        note: "食物产量 ×1.12",
      },
      {
        key: "foodAdd",
        target: "prod.foodPerMin",
        op: "add",
        value: 5,
        unit: "/分钟",
        note: "食物 +5/分钟",
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
    mitigates: ["d31-plague"],
    mitigatesDetail: [
      { disaster: "d31-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "食物产量 ×1.12。",
      "食物 +5/分钟。",
    ],
  },
  // t31-eco-07 绿洲工程 [生态·T3] 造价 180 科技点
  // 造价分析：本项 180 科技点，同档（T3）均价 210 点，本项为均价的 0.86×；研究耗时 1080 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 630 科技点，占本系链总造价 2280 点的 28%；单项造价占链总价的 8%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1440 铁当量，约等于 120.0 座采矿机 L1 的造价。
  // 效果分解：水 +6/分钟（目标 prod.waterPerMin，add运算）。
  // 效果分解：人口增长速度 ×1.1（目标 pop.growth，mul运算）。
  // 效果分解：两项效果合计 水 +6/分钟、人口增长速度 ×1.1；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 7/12 项，前置 t31-eco-06；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 珊瑚培育、湿地净化，造价分别为 210、240 点；本项 180 点，排第 1/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：加法叠加（waterAdd）、乘法叠加（popGrowthMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「沙漠绿洲」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「大干旱」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-07": {
    id: "t31-eco-07",
    name: "绿洲工程",
    icon: "🏝️",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 180,
    researchTimeSec: 1080,
    needs: ["t31-eco-06"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-06", note: "前置科技「草原轮牧」，需先研究。" },
    ],
    desc: "地下水被引上地面，沙漠里长出第三片绿洲。",
    fx: {
      "waterAdd": 6,
      "popGrowthMul": 1.1,
    },
    modifiers: [
      {
        key: "waterAdd",
        target: "prod.waterPerMin",
        op: "add",
        value: 6,
        unit: "/分钟",
        note: "水 +6/分钟",
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
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-drought"],
    mitigatesDetail: [
      { disaster: "d31-drought", note: "缓解「大干旱」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "水 +6/分钟。",
      "人口增长速度 ×1.1。",
    ],
  },
  // t31-eco-08 珊瑚培育 [生态·T3] 造价 210 科技点
  // 造价分析：本项 210 科技点，同档（T3）均价 210 点，本项为均价的 1.00×；研究耗时 1260 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 840 科技点，占本系链总造价 2280 点的 37%；单项造价占链总价的 9%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1680 铁当量，约等于 140.0 座采矿机 L1 的造价。
  // 效果分解：食物 +6/分钟（目标 prod.foodPerMin，add运算）。
  // 效果分解：氧气供给 +5 点（目标 life.oxygen，add运算）。
  // 效果分解：两项效果合计 食物 +6/分钟、氧气供给 +5 点；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 8/12 项，前置 t31-eco-07；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 绿洲工程、湿地净化，造价分别为 180、240 点；本项 210 点，排第 2/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：加法叠加（foodAdd）、加法叠加（oxygenAdd）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「珊瑚礁」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「瘟疫蔓延」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-08": {
    id: "t31-eco-08",
    name: "珊瑚培育",
    icon: "🪸",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 210,
    researchTimeSec: 1260,
    needs: ["t31-eco-07"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-07", note: "前置科技「绿洲工程」，需先研究。" },
    ],
    desc: "人工珊瑚礁长出第一批鱼群。",
    fx: {
      "foodAdd": 6,
      "oxygenAdd": 5,
    },
    modifiers: [
      {
        key: "foodAdd",
        target: "prod.foodPerMin",
        op: "add",
        value: 6,
        unit: "/分钟",
        note: "食物 +6/分钟",
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
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-plague"],
    mitigatesDetail: [
      { disaster: "d31-plague", note: "缓解「瘟疫蔓延」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "食物 +6/分钟。",
      "氧气供给 +5 点。",
    ],
  },
  // t31-eco-09 湿地净化 [生态·T3] 造价 240 科技点
  // 造价分析：本项 240 科技点，同档（T3）均价 210 点，本项为均价的 1.14×；研究耗时 1440 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1080 科技点，占本系链总造价 2280 点的 47%；单项造价占链总价的 11%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1920 铁当量，约等于 160.0 座采矿机 L1 的造价。
  // 效果分解：人口耗水 ×0.9（目标 pop.waterUse，mul运算）。
  // 效果分解：灾难发生概率 ×0.9（目标 risk.disasterChance，mul运算）。
  // 效果分解：两项效果合计 人口耗水 ×0.9、灾难发生概率 ×0.9；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 9/12 项，前置 t31-eco-08；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 绿洲工程、珊瑚培育，造价分别为 180、210 点；本项 240 点，排第 3/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：乘法叠加（waterUseMul）、乘法叠加（disasterChanceMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「湿地」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「火星震」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-09": {
    id: "t31-eco-09",
    name: "湿地净化",
    icon: "💧",
    branch: "eco",
    branchName: "生态",
    tier: 3,
    cost: 240,
    researchTimeSec: 1440,
    needs: ["t31-eco-08"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-08", note: "前置科技「珊瑚培育」，需先研究。" },
    ],
    desc: "湿地滤掉最后一批工业废水，河水能直接喝了。",
    fx: {
      "waterUseMul": 0.9,
      "disasterChanceMul": 0.9,
    },
    modifiers: [
      {
        key: "waterUseMul",
        target: "pop.waterUse",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "人口耗水 ×0.9",
      },
      {
        key: "disasterChanceMul",
        target: "risk.disasterChance",
        op: "mul",
        value: 0.9,
        unit: "倍",
        note: "灾难发生概率 ×0.9",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-quake"],
    mitigatesDetail: [
      { disaster: "d31-quake", note: "缓解「火星震」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口耗水 ×0.9。",
      "灾难发生概率 ×0.9。",
    ],
  },
  // t31-eco-10 苔原适应 [生态·T4] 造价 320 科技点
  // 造价分析：本项 320 科技点，同档（T4）均价 340 点，本项为均价的 0.94×；研究耗时 1920 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1400 科技点，占本系链总造价 2280 点的 61%；单项造价占链总价的 14%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2560 铁当量，约等于 213.3 座采矿机 L1 的造价。
  // 效果分解：灾难持续时间 ×0.85（目标 risk.disasterDuration，mul运算）。
  // 效果分解：辐射伤害 ×0.85（目标 risk.radiation，mul运算）。
  // 效果分解：两项效果合计 灾难持续时间 ×0.85、辐射伤害 ×0.85；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 10/12 项，前置 t31-eco-09；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 地热利用，造价分别为 360 点；本项 320 点，排第 1/2（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥600 人；后期决胜科技。
  // 叠加说明：乘法叠加（disasterDurMul）、乘法叠加（radiationMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「苔原」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「特大沙尘暴」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-10": {
    id: "t31-eco-10",
    name: "苔原适应",
    icon: "🏔️",
    branch: "eco",
    branchName: "生态",
    tier: 4,
    cost: 320,
    researchTimeSec: 1920,
    needs: ["t31-eco-09"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-09", note: "前置科技「湿地净化」，需先研究。" },
    ],
    desc: "耐寒作物在苔原上越冬成功，极寒不再可怕。",
    fx: {
      "disasterDurMul": 0.85,
      "radiationMul": 0.85,
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
        key: "radiationMul",
        target: "risk.radiation",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "辐射伤害 ×0.85",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 600,
      buildings: [],
      wonders: [],
      note: "需人口 ≥600 人，无建筑要求。",
    },
    mitigates: ["d31-sandstorm"],
    mitigatesDetail: [
      { disaster: "d31-sandstorm", note: "缓解「特大沙尘暴」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "灾难持续时间 ×0.85。",
      "辐射伤害 ×0.85。",
    ],
  },
  // t31-eco-11 地热利用 [生态·T4] 造价 360 科技点
  // 造价分析：本项 360 科技点，同档（T4）均价 340 点，本项为均价的 1.06×；研究耗时 2160 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1760 科技点，占本系链总造价 2280 点的 77%；单项造价占链总价的 16%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2880 铁当量，约等于 240.0 座采矿机 L1 的造价。
  // 效果分解：生态圈效果 ×1.15（目标 prod.eco，mul运算）。
  // 效果分解：食物产量 ×1.05（目标 prod.food，mul运算）。
  // 效果分解：两项效果合计 生态圈效果 ×1.15、食物产量 ×1.05；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 11/12 项，前置 t31-eco-10；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 苔原适应，造价分别为 320 点；本项 360 点，排第 2/2（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥600 人；后期决胜科技。
  // 叠加说明：乘法叠加（ecoMul）、乘法叠加（foodMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「火山温泉」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「全城断电」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-11": {
    id: "t31-eco-11",
    name: "地热利用",
    icon: "♨️",
    branch: "eco",
    branchName: "生态",
    tier: 4,
    cost: 360,
    researchTimeSec: 2160,
    needs: ["t31-eco-10"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-10", note: "前置科技「苔原适应」，需先研究。" },
    ],
    desc: "火山地热并网，全城取暖不再烧宝贵的电。",
    fx: {
      "ecoMul": 1.15,
      "foodMul": 1.05,
    },
    modifiers: [
      {
        key: "ecoMul",
        target: "prod.eco",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "生态圈效果 ×1.15",
      },
      {
        key: "foodMul",
        target: "prod.food",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "食物产量 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 600,
      buildings: [],
      wonders: [],
      note: "需人口 ≥600 人，无建筑要求。",
    },
    mitigates: ["d31-blackout"],
    mitigatesDetail: [
      { disaster: "d31-blackout", note: "缓解「全城断电」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "生态圈效果 ×1.15。",
      "食物产量 ×1.05。",
    ],
  },
  // t31-eco-12 盖亚计划 [生态·T5] 造价 520 科技点
  // 造价分析：本项 520 科技点，同档（T5）均价 520 点，本项为均价的 1.00×；研究耗时 3120 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2280 科技点，占本系链总造价 2280 点的 100%；单项造价占链总价的 23%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 4160 铁当量，约等于 346.7 座采矿机 L1 的造价。
  // 效果分解：行星改造进度 +10 点（目标 planet.terraform，add运算）。
  // 效果分解：生态圈效果 ×1.25（目标 prod.eco，mul运算）。
  // 效果分解：两项效果合计 行星改造进度 +10 点、生态圈效果 ×1.25；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 12/12 项，前置 t31-eco-11；断链时本项不可研究，先补前置。
  // 横向对比：本档同系仅此一项，无同档竞争；跨档比较请看造价分析。
  // 适用阶段：T5 科技，需求人口 ≥1000 人；后期决胜科技。
  // 叠加说明：加法叠加（terraformAdd）、乘法叠加（ecoMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「大气处理器」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「特大沙尘暴」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-eco-12": {
    id: "t31-eco-12",
    name: "盖亚计划",
    icon: "🌍",
    branch: "eco",
    branchName: "生态",
    tier: 5,
    cost: 520,
    researchTimeSec: 3120,
    needs: ["t31-eco-11"],
    needsDetail: [
      { type: "tech", ref: "t31-eco-11", note: "前置科技「地热利用」，需先研究。" },
    ],
    desc: "行星改造进入不可逆阶段，火星开始像地球。",
    fx: {
      "terraformAdd": 10,
      "ecoMul": 1.25,
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
        value: 1.25,
        unit: "倍",
        note: "生态圈效果 ×1.25",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 1000,
      buildings: [],
      wonders: [],
      note: "需人口 ≥1000 人，无建筑要求。",
    },
    mitigates: ["d31-sandstorm"],
    mitigatesDetail: [
      { disaster: "d31-sandstorm", note: "缓解「特大沙尘暴」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-eco-01", "t31-eco-02"],
    comboWith: [
      { tech: "t31-eco-01", note: "与「大气播种」同研时，两项效果各 +10%。" },
      { tech: "t31-eco-02", note: "与「氧气藻类」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "行星改造进度 +10 点。",
      "生态圈效果 ×1.25。",
    ],
  },
  // ---------- 军事系（13 项） ----------
  // t31-mil-01 轨道哨兵 [军事·T1] 造价 35 科技点
  // 造价分析：本项 35 科技点，同档（T1）均价 45 点，本项为均价的 0.78×；研究耗时 210 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 35 科技点，占本系链总造价 2980 点的 1%；单项造价占链总价的 1%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 280 铁当量，约等于 23.3 座采矿机 L1 的造价。
  // 效果分解：防御力 +20 点（目标 military.defense，add运算）。
  // 效果分解：灾难预警时间 +30 秒（目标 sys.warnTime，add运算）。
  // 效果分解：两项效果合计 防御力 +20 点、灾难预警时间 +30 秒；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 1/13 项，无前置，任意时间可研究；是本系链的起点。
  // 横向对比：同档同系另有 动能拦截、机甲骨架，造价分别为 45、55 点；本项 35 点，排第 1/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：加法叠加（defenseAdd）、加法叠加（warnAddSec）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「轨道防御平台」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：开局优先度高，尽早点出以解锁链条。
  "t31-mil-01": {
    id: "t31-mil-01",
    name: "轨道哨兵",
    icon: "🛰️",
    branch: "military",
    branchName: "军事",
    tier: 1,
    cost: 35,
    researchTimeSec: 210,
    needs: [],
    needsDetail: [
      { type: "none", ref: "", note: "无前置，任意时间可研究。" },
    ],
    desc: "哨兵卫星升空，陨石提前一小时预警。",
    fx: {
      "defenseAdd": 20,
      "warnAddSec": 30,
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
      {
        key: "warnAddSec",
        target: "sys.warnTime",
        op: "add",
        value: 30,
        unit: "秒",
        note: "灾难预警时间 +30 秒",
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
    mitigates: ["d31-meteor"],
    mitigatesDetail: [
      { disaster: "d31-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-02", "t31-mil-03"],
    comboWith: [
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-03", note: "与「机甲骨架」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 +20 点。",
      "灾难预警时间 +30 秒。",
    ],
  },
  // t31-mil-02 动能拦截 [军事·T1] 造价 45 科技点
  // 造价分析：本项 45 科技点，同档（T1）均价 45 点，本项为均价的 1.00×；研究耗时 270 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 80 科技点，占本系链总造价 2980 点的 3%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 360 铁当量，约等于 30.0 座采矿机 L1 的造价。
  // 效果分解：防御力 ×1.1（目标 military.defense，mul运算）。
  // 效果分解：陨石伤害 ×0.8（目标 risk.meteorDamage，mul运算）。
  // 效果分解：两项效果合计 防御力 ×1.1、陨石伤害 ×0.8；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 2/13 项，前置 t31-mil-01；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 轨道哨兵、机甲骨架，造价分别为 35、55 点；本项 45 点，排第 2/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（defenseMul）、乘法叠加（meteorMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「激光防御网」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-02": {
    id: "t31-mil-02",
    name: "动能拦截",
    icon: "🎯",
    branch: "military",
    branchName: "军事",
    tier: 1,
    cost: 45,
    researchTimeSec: 270,
    needs: ["t31-mil-01"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-01", note: "前置科技「轨道哨兵」，需先研究。" },
    ],
    desc: "拦截弹第一次在轨道上撞碎陨石。",
    fx: {
      "defenseMul": 1.1,
      "meteorMul": 0.8,
    },
    modifiers: [
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "防御力 ×1.1",
      },
      {
        key: "meteorMul",
        target: "risk.meteorDamage",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "陨石伤害 ×0.8",
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
    mitigates: ["d31-meteor"],
    mitigatesDetail: [
      { disaster: "d31-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-03"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-03", note: "与「机甲骨架」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 ×1.1。",
      "陨石伤害 ×0.8。",
    ],
  },
  // t31-mil-03 机甲骨架 [军事·T1] 造价 55 科技点
  // 造价分析：本项 55 科技点，同档（T1）均价 45 点，本项为均价的 1.22×；研究耗时 330 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 135 科技点，占本系链总造价 2980 点的 5%；单项造价占链总价的 2%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 440 铁当量，约等于 36.7 座采矿机 L1 的造价。
  // 效果分解：攻击力 ×1.1（目标 military.attack，mul运算）。
  // 效果分解：舰船耐久 ×1.1（目标 fleet.hp，mul运算）。
  // 效果分解：两项效果合计 攻击力 ×1.1、舰船耐久 ×1.1；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 3/13 项，前置 t31-mil-02；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 轨道哨兵、动能拦截，造价分别为 35、45 点；本项 55 点，排第 3/3（由低到高）。
  // 适用阶段：T1 科技，需求人口 ≥0 人；开局即可研究。
  // 叠加说明：乘法叠加（attackMul）、乘法叠加（shipHpMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「机甲工厂」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-03": {
    id: "t31-mil-03",
    name: "机甲骨架",
    icon: "🦿",
    branch: "military",
    branchName: "军事",
    tier: 1,
    cost: 55,
    researchTimeSec: 330,
    needs: ["t31-mil-02"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-02", note: "前置科技「动能拦截」，需先研究。" },
    ],
    desc: "轻量化骨架让机甲跑得比卡车还快。",
    fx: {
      "attackMul": 1.1,
      "shipHpMul": 1.1,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "攻击力 ×1.1",
      },
      {
        key: "shipHpMul",
        target: "fleet.hp",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "舰船耐久 ×1.1",
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
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.1。",
      "舰船耐久 ×1.1。",
    ],
  },
  // t31-mil-04 隐形涂层 [军事·T2] 造价 95 科技点
  // 造价分析：本项 95 科技点，同档（T2）均价 115 点，本项为均价的 0.83×；研究耗时 570 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 230 科技点，占本系链总造价 2980 点的 8%；单项造价占链总价的 3%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 760 铁当量，约等于 63.3 座采矿机 L1 的造价。
  // 效果分解：攻击力 ×1.12（目标 military.attack，mul运算）。
  // 效果分解：海盗袭击概率 ×0.85（目标 risk.pirateChance，mul运算）。
  // 效果分解：两项效果合计 攻击力 ×1.12、海盗袭击概率 ×0.85；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 4/13 项，前置 t31-mil-03；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 核威慑、激光阵列，造价分别为 115、135 点；本项 95 点，排第 1/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：乘法叠加（attackMul）、乘法叠加（pirateMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「隐形战机机库」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗袭击」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-04": {
    id: "t31-mil-04",
    name: "隐形涂层",
    icon: "🥷",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 95,
    researchTimeSec: 570,
    needs: ["t31-mil-03"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-03", note: "前置科技「机甲骨架」，需先研究。" },
    ],
    desc: "战机涂上吸波涂层，雷达上只剩一片雪花。",
    fx: {
      "attackMul": 1.12,
      "pirateMul": 0.85,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.12,
        unit: "倍",
        note: "攻击力 ×1.12",
      },
      {
        key: "pirateMul",
        target: "risk.pirateChance",
        op: "mul",
        value: 0.85,
        unit: "倍",
        note: "海盗袭击概率 ×0.85",
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
    mitigates: ["d31-pirate"],
    mitigatesDetail: [
      { disaster: "d31-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.12。",
      "海盗袭击概率 ×0.85。",
    ],
  },
  // t31-mil-05 核威慑 [军事·T2] 造价 115 科技点
  // 造价分析：本项 115 科技点，同档（T2）均价 115 点，本项为均价的 1.00×；研究耗时 690 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 345 科技点，占本系链总造价 2980 点的 12%；单项造价占链总价的 4%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 920 铁当量，约等于 76.7 座采矿机 L1 的造价。
  // 效果分解：攻击力 ×1.15（目标 military.attack，mul运算）。
  // 效果分解：外星入侵概率 ×0.8（目标 risk.invasionChance，mul运算）。
  // 效果分解：两项效果合计 攻击力 ×1.15、外星入侵概率 ×0.8；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 5/13 项，前置 t31-mil-04；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 隐形涂层、激光阵列，造价分别为 95、135 点；本项 115 点，排第 2/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：乘法叠加（attackMul）、乘法叠加（invasionMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「核导弹井」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-05": {
    id: "t31-mil-05",
    name: "核威慑",
    icon: "☢️",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 115,
    researchTimeSec: 690,
    needs: ["t31-mil-04"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-04", note: "前置科技「隐形涂层」，需先研究。" },
    ],
    desc: "导弹井公开亮相，入侵者开始重新算账。",
    fx: {
      "attackMul": 1.15,
      "invasionMul": 0.8,
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
        key: "invasionMul",
        target: "risk.invasionChance",
        op: "mul",
        value: 0.8,
        unit: "倍",
        note: "外星入侵概率 ×0.8",
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
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.15。",
      "外星入侵概率 ×0.8。",
    ],
  },
  // t31-mil-06 激光阵列 [军事·T2] 造价 135 科技点
  // 造价分析：本项 135 科技点，同档（T2）均价 115 点，本项为均价的 1.17×；研究耗时 810 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 480 科技点，占本系链总造价 2980 点的 16%；单项造价占链总价的 5%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1080 铁当量，约等于 90.0 座采矿机 L1 的造价。
  // 效果分解：防御力 +40 点（目标 military.defense，add运算）。
  // 效果分解：护盾强度 ×1.15（目标 military.shield，mul运算）。
  // 效果分解：两项效果合计 防御力 +40 点、护盾强度 ×1.15；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 6/13 项，前置 t31-mil-05；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 隐形涂层、核威慑，造价分别为 95、115 点；本项 135 点，排第 3/3（由低到高）。
  // 适用阶段：T2 科技，需求人口 ≥100 人；中期核心科技。
  // 叠加说明：加法叠加（defenseAdd）、乘法叠加（shieldMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「激光防御网」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-06": {
    id: "t31-mil-06",
    name: "激光阵列",
    icon: "🔆",
    branch: "military",
    branchName: "军事",
    tier: 2,
    cost: 135,
    researchTimeSec: 810,
    needs: ["t31-mil-05"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-05", note: "前置科技「核威慑」，需先研究。" },
    ],
    desc: "激光塔联网，一座开火等于全城开火。",
    fx: {
      "defenseAdd": 40,
      "shieldMul": 1.15,
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
        key: "shieldMul",
        target: "military.shield",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "护盾强度 ×1.15",
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
    mitigates: ["d31-meteor"],
    mitigatesDetail: [
      { disaster: "d31-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 +40 点。",
      "护盾强度 ×1.15。",
    ],
  },
  // t31-mil-07 电磁加速 [军事·T3] 造价 190 科技点
  // 造价分析：本项 190 科技点，同档（T3）均价 220 点，本项为均价的 0.86×；研究耗时 1140 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 670 科技点，占本系链总造价 2980 点的 22%；单项造价占链总价的 6%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1520 铁当量，约等于 126.7 座采矿机 L1 的造价。
  // 效果分解：攻击力 ×1.18（目标 military.attack，mul运算）。
  // 效果分解：防御力 ×1.1（目标 military.defense，mul运算）。
  // 效果分解：两项效果合计 攻击力 ×1.18、防御力 ×1.1；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 7/13 项，前置 t31-mil-06；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 要塞工程、军官轮训，造价分别为 220、250 点；本项 190 点，排第 1/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：乘法叠加（attackMul）、乘法叠加（defenseMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「电磁炮阵地」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-07": {
    id: "t31-mil-07",
    name: "电磁加速",
    icon: "⚡",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 190,
    researchTimeSec: 1140,
    needs: ["t31-mil-06"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-06", note: "前置科技「激光阵列」，需先研究。" },
    ],
    desc: "电磁炮初速翻倍，射程覆盖整个半球。",
    fx: {
      "attackMul": 1.18,
      "defenseMul": 1.1,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.18,
        unit: "倍",
        note: "攻击力 ×1.18",
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
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.18。",
      "防御力 ×1.1。",
    ],
  },
  // t31-mil-08 要塞工程 [军事·T3] 造价 220 科技点
  // 造价分析：本项 220 科技点，同档（T3）均价 220 点，本项为均价的 1.00×；研究耗时 1320 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 890 科技点，占本系链总造价 2980 点的 30%；单项造价占链总价的 7%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 1760 铁当量，约等于 146.7 座采矿机 L1 的造价。
  // 效果分解：防御力 +60 点（目标 military.defense，add运算）。
  // 效果分解：防御力 ×1.15（目标 military.defense，mul运算）。
  // 效果分解：两项效果合计 防御力 +60 点、防御力 ×1.15；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 8/13 项，前置 t31-mil-07；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 电磁加速、军官轮训，造价分别为 190、250 点；本项 220 点，排第 2/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：加法叠加（defenseAdd）、乘法叠加（defenseMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「太空要塞」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-08": {
    id: "t31-mil-08",
    name: "要塞工程",
    icon: "🏰",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 220,
    researchTimeSec: 1320,
    needs: ["t31-mil-07"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-07", note: "前置科技「电磁加速」，需先研究。" },
    ],
    desc: "轨道要塞龙骨合龙，全城有了不沉的盾。",
    fx: {
      "defenseAdd": 60,
      "defenseMul": 1.15,
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
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "防御力 +60 点。",
      "防御力 ×1.15。",
    ],
  },
  // t31-mil-09 军官轮训 [军事·T3] 造价 250 科技点
  // 造价分析：本项 250 科技点，同档（T3）均价 220 点，本项为均价的 1.14×；研究耗时 1500 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1140 科技点，占本系链总造价 2980 点的 38%；单项造价占链总价的 8%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2000 铁当量，约等于 166.7 座采矿机 L1 的造价。
  // 效果分解：士气 ×1.1（目标 military.morale，mul运算）。
  // 效果分解：攻击力 ×1.05（目标 military.attack，mul运算）。
  // 效果分解：两项效果合计 士气 ×1.1、攻击力 ×1.05；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 9/13 项，前置 t31-mil-08；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 电磁加速、要塞工程，造价分别为 190、220 点；本项 250 点，排第 3/3（由低到高）。
  // 适用阶段：T3 科技，需求人口 ≥300 人；中期核心科技。
  // 叠加说明：乘法叠加（moraleMul）、乘法叠加（attackMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「军事学院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-09": {
    id: "t31-mil-09",
    name: "军官轮训",
    icon: "🎖️",
    branch: "military",
    branchName: "军事",
    tier: 3,
    cost: 250,
    researchTimeSec: 1500,
    needs: ["t31-mil-08"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-08", note: "前置科技「要塞工程」，需先研究。" },
    ],
    desc: "军官轮训制度落地，指挥失误率减半。",
    fx: {
      "moraleMul": 1.1,
      "attackMul": 1.05,
    },
    modifiers: [
      {
        key: "moraleMul",
        target: "military.morale",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "士气 ×1.1",
      },
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.05,
        unit: "倍",
        note: "攻击力 ×1.05",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 300,
      buildings: [],
      wonders: [],
      note: "需人口 ≥300 人，无建筑要求。",
    },
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "士气 ×1.1。",
      "攻击力 ×1.05。",
    ],
  },
  // t31-mil-10 战时动员 [军事·T4] 造价 330 科技点
  // 造价分析：本项 330 科技点，同档（T4）均价 350 点，本项为均价的 0.94×；研究耗时 1980 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1470 科技点，占本系链总造价 2980 点的 49%；单项造价占链总价的 11%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2640 铁当量，约等于 220.0 座采矿机 L1 的造价。
  // 效果分解：人口增长速度 ×1.1（目标 pop.growth，mul运算）。
  // 效果分解：士气 ×1.12（目标 military.morale，mul运算）。
  // 效果分解：两项效果合计 人口增长速度 ×1.1、士气 ×1.12；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 10/13 项，前置 t31-mil-09；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 护盾发生器，造价分别为 370 点；本项 330 点，排第 1/2（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥600 人；后期决胜科技。
  // 叠加说明：乘法叠加（popGrowthMul）、乘法叠加（moraleMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「军事学院」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-10": {
    id: "t31-mil-10",
    name: "战时动员",
    icon: "📣",
    branch: "military",
    branchName: "军事",
    tier: 4,
    cost: 330,
    researchTimeSec: 1980,
    needs: ["t31-mil-09"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-09", note: "前置科技「军官轮训」，需先研究。" },
    ],
    desc: "动员令下达，预备役三天内全部归建。",
    fx: {
      "popGrowthMul": 1.1,
      "moraleMul": 1.12,
    },
    modifiers: [
      {
        key: "popGrowthMul",
        target: "pop.growth",
        op: "mul",
        value: 1.1,
        unit: "倍",
        note: "人口增长速度 ×1.1",
      },
      {
        key: "moraleMul",
        target: "military.morale",
        op: "mul",
        value: 1.12,
        unit: "倍",
        note: "士气 ×1.12",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 600,
      buildings: [],
      wonders: [],
      note: "需人口 ≥600 人，无建筑要求。",
    },
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "人口增长速度 ×1.1。",
      "士气 ×1.12。",
    ],
  },
  // t31-mil-11 护盾发生器 [军事·T4] 造价 370 科技点
  // 造价分析：本项 370 科技点，同档（T4）均价 350 点，本项为均价的 1.06×；研究耗时 2220 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 1840 科技点，占本系链总造价 2980 点的 62%；单项造价占链总价的 12%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 2960 铁当量，约等于 246.7 座采矿机 L1 的造价。
  // 效果分解：护盾强度 ×1.25（目标 military.shield，mul运算）。
  // 效果分解：舰船耐久 ×1.15（目标 fleet.hp，mul运算）。
  // 效果分解：两项效果合计 护盾强度 ×1.25、舰船耐久 ×1.15；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 11/13 项，前置 t31-mil-10；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 战时动员，造价分别为 330 点；本项 370 点，排第 2/2（由低到高）。
  // 适用阶段：T4 科技，需求人口 ≥600 人；后期决胜科技。
  // 叠加说明：乘法叠加（shieldMul）、乘法叠加（shipHpMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「太空要塞」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「陨石雨」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-11": {
    id: "t31-mil-11",
    name: "护盾发生器",
    icon: "🛡️",
    branch: "military",
    branchName: "军事",
    tier: 4,
    cost: 370,
    researchTimeSec: 2220,
    needs: ["t31-mil-10"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-10", note: "前置科技「战时动员」，需先研究。" },
    ],
    desc: "城市级护盾第一次笼罩整座穹顶。",
    fx: {
      "shieldMul": 1.25,
      "shipHpMul": 1.15,
    },
    modifiers: [
      {
        key: "shieldMul",
        target: "military.shield",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "护盾强度 ×1.25",
      },
      {
        key: "shipHpMul",
        target: "fleet.hp",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "舰船耐久 ×1.15",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 600,
      buildings: [],
      wonders: [],
      note: "需人口 ≥600 人，无建筑要求。",
    },
    mitigates: ["d31-meteor"],
    mitigatesDetail: [
      { disaster: "d31-meteor", note: "缓解「陨石雨」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "护盾强度 ×1.25。",
      "舰船耐久 ×1.15。",
    ],
  },
  // t31-mil-12 舰队指挥 [军事·T5] 造价 540 科技点
  // 造价分析：本项 540 科技点，同档（T5）均价 570 点，本项为均价的 0.95×；研究耗时 3240 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2380 科技点，占本系链总造价 2980 点的 80%；单项造价占链总价的 18%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 4320 铁当量，约等于 360.0 座采矿机 L1 的造价。
  // 效果分解：舰船航速 ×1.15（目标 fleet.speed，mul运算）。
  // 效果分解：舰船耐久 ×1.2（目标 fleet.hp，mul运算）。
  // 效果分解：两项效果合计 舰船航速 ×1.15、舰船耐久 ×1.2；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 12/13 项，前置 t31-mil-11；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 总体战，造价分别为 600 点；本项 540 点，排第 1/2（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥1000 人；后期决胜科技。
  // 叠加说明：乘法叠加（shipSpeedMul）、乘法叠加（shipHpMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「星际舰队基地」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「海盗袭击」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-12": {
    id: "t31-mil-12",
    name: "舰队指挥",
    icon: "⚓",
    branch: "military",
    branchName: "军事",
    tier: 5,
    cost: 540,
    researchTimeSec: 3240,
    needs: ["t31-mil-11"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-11", note: "前置科技「护盾发生器」，需先研究。" },
    ],
    desc: "舰队指挥链打通，多舰协同像一个人。",
    fx: {
      "shipSpeedMul": 1.15,
      "shipHpMul": 1.2,
    },
    modifiers: [
      {
        key: "shipSpeedMul",
        target: "fleet.speed",
        op: "mul",
        value: 1.15,
        unit: "倍",
        note: "舰船航速 ×1.15",
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
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 1000,
      buildings: [],
      wonders: [],
      note: "需人口 ≥1000 人，无建筑要求。",
    },
    mitigates: ["d31-pirate"],
    mitigatesDetail: [
      { disaster: "d31-pirate", note: "缓解「海盗袭击」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "舰船航速 ×1.15。",
      "舰船耐久 ×1.2。",
    ],
  },
  // t31-mil-13 总体战 [军事·T5] 造价 600 科技点
  // 造价分析：本项 600 科技点，同档（T5）均价 570 点，本项为均价的 1.05×；研究耗时 3600 秒（每点 6 秒）。
  // 造价分析：链内累计到本项共 2980 科技点，占本系链总造价 2980 点的 100%；单项造价占链总价的 20%。
  // 造价分析：按 1 科技点 ≈ 8 铁当量折算，本项约合 4800 铁当量，约等于 400.0 座采矿机 L1 的造价。
  // 效果分解：攻击力 ×1.25（目标 military.attack，mul运算）。
  // 效果分解：防御力 ×1.25（目标 military.defense，mul运算）。
  // 效果分解：两项效果合计 攻击力 ×1.25、防御力 ×1.25；数值全部进注册表，applyTechV31Fx 可直接执行。
  // 前置链：本系第 13/13 项，前置 t31-mil-12；断链时本项不可研究，先补前置。
  // 横向对比：同档同系另有 舰队指挥，造价分别为 540 点；本项 600 点，排第 2/2（由低到高）。
  // 适用阶段：T5 科技，需求人口 ≥1000 人；后期决胜科技。
  // 叠加说明：乘法叠加（attackMul）、乘法叠加（defenseMul）；与同系其他科技的效果分别累计，不互相覆盖。
  // 联动建筑：与 v31 建筑「太空要塞」同系同主题，建筑提供常驻效果，本科技提供全局加成，两者叠加不冲突。
  // 缓解灾害：缓解「外星入侵」，对应灾难概率 / 影响下降；灾害来临前优先研究。
  // 研究建议：先点前置再点本项，链式研究不要跳档。
  "t31-mil-13": {
    id: "t31-mil-13",
    name: "总体战",
    icon: "🔥",
    branch: "military",
    branchName: "军事",
    tier: 5,
    cost: 600,
    researchTimeSec: 3600,
    needs: ["t31-mil-12"],
    needsDetail: [
      { type: "tech", ref: "t31-mil-12", note: "前置科技「舰队指挥」，需先研究。" },
    ],
    desc: "全城转入总体战体制，攻防同时拉满。",
    fx: {
      "attackMul": 1.25,
      "defenseMul": 1.25,
    },
    modifiers: [
      {
        key: "attackMul",
        target: "military.attack",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "攻击力 ×1.25",
      },
      {
        key: "defenseMul",
        target: "military.defense",
        op: "mul",
        value: 1.25,
        unit: "倍",
        note: "防御力 ×1.25",
      },
    ],
    scaling: [
      { scope: "perPop", base: 1, perUnit: 0.1, cap: 5, note: "每 100 人口，效果额外提升 10%，上限 50%。" },
      { scope: "perBuilding", base: 1, perUnit: 0.05, cap: 3, note: "每座同系建筑，效果额外提升 5%，上限 30%。" },
    ],
    unlocks: [],
    unlockBuildings: [],
    requires: {
      minPop: 1000,
      buildings: [],
      wonders: [],
      note: "需人口 ≥1000 人，无建筑要求。",
    },
    mitigates: ["d31-invasion"],
    mitigatesDetail: [
      { disaster: "d31-invasion", note: "缓解「外星入侵」：对应灾难概率 / 影响下降。" },
    ],
    synergy: ["t31-mil-01", "t31-mil-02"],
    comboWith: [
      { tech: "t31-mil-01", note: "与「轨道哨兵」同研时，两项效果各 +10%。" },
      { tech: "t31-mil-02", note: "与「动能拦截」同研时，两项效果各 +10%。" },
    ],
    effectLines: [
      "攻击力 ×1.25。",
      "防御力 ×1.25。",
    ],
  },
};

const TECH_V31_ORDER = [
  "t31-pol-01",
  "t31-pol-02",
  "t31-pol-03",
  "t31-pol-04",
  "t31-pol-05",
  "t31-pol-06",
  "t31-pol-07",
  "t31-pol-08",
  "t31-pol-09",
  "t31-pol-10",
  "t31-pol-11",
  "t31-pol-12",
  "t31-dsp-01",
  "t31-dsp-02",
  "t31-dsp-03",
  "t31-dsp-04",
  "t31-dsp-05",
  "t31-dsp-06",
  "t31-dsp-07",
  "t31-dsp-08",
  "t31-dsp-09",
  "t31-dsp-10",
  "t31-dsp-11",
  "t31-dsp-12",
  "t31-dsp-13",
  "t31-eco-01",
  "t31-eco-02",
  "t31-eco-03",
  "t31-eco-04",
  "t31-eco-05",
  "t31-eco-06",
  "t31-eco-07",
  "t31-eco-08",
  "t31-eco-09",
  "t31-eco-10",
  "t31-eco-11",
  "t31-eco-12",
  "t31-mil-01",
  "t31-mil-02",
  "t31-mil-03",
  "t31-mil-04",
  "t31-mil-05",
  "t31-mil-06",
  "t31-mil-07",
  "t31-mil-08",
  "t31-mil-09",
  "t31-mil-10",
  "t31-mil-11",
  "t31-mil-12",
  "t31-mil-13",
];
const TECH_V31_COUNT = TECH_V31_ORDER.length;
const TECH_V31_KNOWN_OLD_TECH = ["t-surv-15", "t-orb-15", "t-prod-15", "t-build-15", "t-orb-12"];

/* ============ §4 效果执行引擎 ============ */
/* 把单项 v31 科技的 fx 应用到游戏状态对象 state 上。
 * state 形如 { pop: {}, city: {}, econ: {}, military: {}, prod: {},
 *   power: {}, risk: {}, victory: {}, unlock: {}, gov: {}, cost: {},
 *   diplomacy: {}, trade: {}, fleet: {}, life: {}, planet: {}, sys: {} }。
 * 不存在的字段会被跳过（不抛错），返回实际生效的效果清单。 */
const TECH_V31_FX_PATH = {
  "asteroidIronAdd": ["prod", "ironPerMin"],
  "asteroidRareAdd": ["prod", "rarePerMin"],
  "asteroidYieldMul": ["prod", "asteroid"],
  "attackMul": ["military", "attack"],
  "buildCostMul": ["cost", "build"],
  "corruptionMul": ["risk", "corruption"],
  "coupMul": ["risk", "coupChance"],
  "defenseAdd": ["military", "defense"],
  "defenseMul": ["military", "defense"],
  "diplomacyMul": ["diplomacy", "relation"],
  "disasterChanceMul": ["risk", "disasterChance"],
  "disasterDurMul": ["risk", "disasterDuration"],
  "ecoMul": ["prod", "eco"],
  "foodAdd": ["prod", "foodPerMin"],
  "foodMul": ["prod", "food"],
  "happinessAdd": ["pop", "happiness"],
  "he3Add": ["prod", "he3PerMin"],
  "invasionMul": ["risk", "invasionChance"],
  "ironAdd": ["prod", "ironPerMin"],
  "labMul": ["prod", "lab"],
  "launchCostMul": ["cost", "launch"],
  "meteorMul": ["risk", "meteorDamage"],
  "moraleMul": ["military", "morale"],
  "orbitalPowerAdd": ["power", "orbital"],
  "oxygenAdd": ["life", "oxygen"],
  "pirateMul": ["risk", "pirateChance"],
  "policySlotsAdd": ["gov", "policySlots"],
  "popGrowthMul": ["pop", "growth"],
  "radiationMul": ["risk", "radiation"],
  "researchMul": ["prod", "research"],
  "revoltMul": ["risk", "revoltChance"],
  "shieldMul": ["military", "shield"],
  "shipHpMul": ["fleet", "hp"],
  "shipSpeedMul": ["fleet", "speed"],
  "stabilityAdd": ["city", "stability"],
  "taxMul": ["econ", "taxRate"],
  "terraformAdd": ["planet", "terraform"],
  "tradeMul": ["econ", "tradeIncome"],
  "tradeShipMul": ["trade", "shipInterval"],
  "victoryProgressAdd": ["victory", "progress"],
  "warnAddSec": ["sys", "warnTime"],
  "waterAdd": ["prod", "waterPerMin"],
  "waterUseMul": ["pop", "waterUse"],
  "waterplantMul": ["prod", "waterplant"],
};
function applyTechV31Fx(state, techId, level) {
  const def = TECH_V31_DEFS[techId];
  if (!def || !state) return [];
  const applied = [];
  const lv = (typeof level === 'number' && level > 0) ? level : 1;
  for (const key of Object.keys(def.fx)) {
    const reg = TECH_V31_FX_REGISTRY[key];
    if (!reg) continue;
    const path = TECH_V31_FX_PATH[key];
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
function applyTechV31Set(state, unlockedIds) {
  const out = [];
  for (const id of (unlockedIds || [])) {
    const r = applyTechV31Fx(state, id, 1);
    if (r.length) out.push({ id: id, applied: r });
  }
  return out;
}
function techV31CanResearch(techId, unlockedSet, techPoints, pop, oldUnlockedSet) {
  const def = TECH_V31_DEFS[techId];
  if (!def) return { ok: false, reason: '科技不存在' };
  const has = (id) => (unlockedSet && unlockedSet.has(id)) || (oldUnlockedSet && oldUnlockedSet.has(id)) || TECH_V31_KNOWN_OLD_TECH.indexOf(id) !== -1;
  for (const pre of def.needs) { if (!has(pre)) return { ok: false, reason: '前置未研究：' + pre }; }
  if (typeof techPoints === 'number' && techPoints < def.cost) return { ok: false, reason: '科技点不足' };
  if (typeof pop === 'number' && pop < def.requires.minPop) return { ok: false, reason: '人口不足' };
  return { ok: true, reason: '' };
}
function techV31Name(techId) {
  const def = TECH_V31_DEFS[techId];
  return def ? def.name : techId;
}
function techV31EffectSummary(techId) {
  const def = TECH_V31_DEFS[techId];
  if (!def) return '';
  return def.effectLines.join('；');
}

/* mergeTechV31()：幂等。把 50 项并入全局 TECH_DEFS / TECH_ORDER / TECH_BRANCHES，
 * 并把 4 个新分支登记进去。旧文件未加载时只返回计数，不抛错。 */
function mergeTechV31() {
  let added = 0, skipped = 0;
  if (typeof TECH_DEFS !== 'undefined') {
    for (const id of TECH_V31_ORDER) {
      if (TECH_DEFS[id]) { skipped++; continue; }
      TECH_DEFS[id] = TECH_V31_DEFS[id];
      added++;
    }
  }
  if (typeof TECH_ORDER !== 'undefined') {
    for (const id of TECH_V31_ORDER) {
      if (TECH_ORDER.indexOf(id) === -1) TECH_ORDER.push(id);
    }
  }
  if (typeof TECH_BRANCHES !== 'undefined') {
    for (const k of Object.keys(TECH_V31_BRANCHES)) {
      if (!TECH_BRANCHES[k]) TECH_BRANCHES[k] = TECH_V31_BRANCHES[k];
    }
  }
  return { added: added, skipped: skipped, total: TECH_V31_COUNT,
    branches: Object.keys(TECH_V31_BRANCHES),
    mergedIntoGlobal: (typeof TECH_DEFS !== 'undefined') };
}

/* ============ §5 自检 ============ */
/* 校验 50 项：id 唯一、造价>0、前置存在（v31 内或旧科技树）、fx 键已注册、缓解灾难已定义。 */
function selfTestTechV31() {
  const errors = [];
  const seen = new Set();
  const counts = { politics: 0, deepSpace: 0, eco: 0, military: 0 };
  for (const id of TECH_V31_ORDER) {
    const def = TECH_V31_DEFS[id];
    if (!def) { errors.push(id + ': 定义缺失'); continue; }
    if (seen.has(id)) errors.push(id + ': id 重复');
    seen.add(id);
    counts[def.branch] = (counts[def.branch] || 0) + 1;
    if (!(def.cost > 0)) errors.push(id + ': 造价无效');
    if (def.tier < 1 || def.tier > 5) errors.push(id + ': 档位无效');
    for (const pre of def.needs) {
      const inV31 = !!TECH_V31_DEFS[pre];
      const inOld = (typeof TECH_DEFS !== 'undefined') && !!TECH_DEFS[pre];
      const inKnownOld = TECH_V31_KNOWN_OLD_TECH.indexOf(pre) !== -1;
      if (!inV31 && !inOld && !inKnownOld) errors.push(id + ': 前置不存在 ' + pre);
    }
    for (const k of Object.keys(def.fx)) {
      if (!TECH_V31_FX_REGISTRY[k]) errors.push(id + ': 未注册的效果键 ' + k);
    }
    for (const d of def.mitigates) {
      if (!TECH_V31_DISASTERS[d]) errors.push(id + ': 缓解灾难未定义 ' + d);
    }
    if (!def.desc || def.desc.length < 4) errors.push(id + ': 描述缺失');
  }
  const expect = { politics: 12, deepSpace: 13, eco: 12, military: 13 };
  for (const b of Object.keys(expect)) {
    if (counts[b] !== expect[b]) errors.push('分支 ' + b + ' 数量=' + counts[b] + '，应为 ' + expect[b]);
  }
  try {
    const st = { pop: {}, city: {}, econ: {}, military: {}, prod: {}, power: {}, risk: {}, victory: {}, unlock: {}, gov: {}, cost: {}, diplomacy: {}, trade: {}, fleet: {}, life: {}, planet: {}, sys: {} };
    applyTechV31Set(st, TECH_V31_ORDER);
    if (typeof st.pop.happiness !== 'number') errors.push('冒烟：幸福度未累计');
  } catch (e) { errors.push('冒烟失败: ' + e.message); }
  return { total: TECH_V31_COUNT, counts: counts, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports = { TECH_V31_DEFS, TECH_V31_ORDER, TECH_V31_BRANCHES, TECH_V31_DISASTERS,
    TECH_V31_FX_REGISTRY, TECH_V31_COUNT, TECH_V31_KNOWN_OLD_TECH, applyTechV31Fx, applyTechV31Set,
    techV31CanResearch, techV31Name, techV31EffectSummary, mergeTechV31, selfTestTechV31 };
}
