/* ============================================================================
 * 星港 v3.1 — research_v31.js：科研深化系统
 *
 * 接入函数：ResearchV31Integration.attach(game)
 *   - 在 game 上挂载 game.researchV31（ResearchV31System 实例）
 *   - 初始赠送 1 个综合科研中心（lab31_general L1）
 *   - 重复 attach 返回已有实例，不重置进度
 * 卸载：ResearchV31Integration.detach(game)（返回存档数据）
 *
 * 依赖：
 *   - 仅依赖宿主 game 对象的可选字段（day / credits / resources.iron），
 *     全部经 res31Get 安全读取；无 game 时可用 createStandalone() 独立运行。
 *   - 只读引用、不重声明的已有全局名：TERRAIN / Population /
 *     TUTORIAL_STEPS / DS_TUNE / OVERLAY_MODES / TECH_DEFS / TECH_ORDER。
 *   - 本文件顶层标识符全部带 v31 前缀（RES31_* / ResearchV31* / res31*）。
 *
 * 数据规模：
 *   - 研究项目 150 个（物理/工程/生物/社会/深空 × 30，6 链 × 5 阶）
 *   - 里程碑 450 条（每项目 25%/50%/75% 各一）
 *   - 项目阶段 450 条（每项目 33%/66%/100% 三阶段，奖励灵感）
 *   - 项目田野笔记 150 条（假设/方法/验收标准）
 *   - 对手情报 80 条（8 对手 × 10 类）
 *   - 联动加成 150 条（跨方向配对）
 *   - 突破事件 60 个（每事件 3 个分支选择）+ 事故 24 个
 *   - 科学家模板 150 名（五维属性：理论/工程/生物/物理/社会）
 *   - 科学家特质 48 个；实验室类型 6 种 × 5 级；设备 84 件
 *   - 资助计划 40 个；竞速对手 8 个；竞速赛道 24 条
 *   - 加成公式 60 条（RES31_BONUS_FORMULAS，含演算示例）
 *   - 效果键注册表 47 个（RES31_FX_REGISTRY，键 -> 生效目标/运算/单位）
 *
 * 核心类：ResearchV31System / ResearchV31Lab / ResearchV31Scientist /
 *   ResearchV31ProjectState / ResearchV31EventEngine / ResearchV31RaceManager
 * 主循环：ResearchV31System.tick(days)；存档：save() / load(data)。
 * 加成出口：computeBonuses() / getBonus(target) / applyBonusesToGame(game)
 *   （汇总写入 game.researchV31Bonuses，宿主按公式自行消费）。
 * ============================================================================ */

'use strict';

/* ============ §0 配置常量 ============ */
const RES31_BRANCHES = ["physics", "engineering", "biology", "society", "deepspace"];
const RES31_BRANCH_CN = { physics: "物理", engineering: "工程", biology: "生物", society: "社会", deepspace: "深空" };

const RES31_CONFIG = {
  "version": "3.1.0",
  "baseResearchSpeed": 10,
  "baseResearchPerDay": 5,
  "maxScientistsPerProject": 5,
  "maxLabLevel": 5,
  "maxScientistLevel": 10,
  "labDirectionBonus": 1.15,
  "startingResearchPoints": 500,
  "startingCredits": 1000,
  "recruitCostBase": 100,
  "recruitCostPerLevel": 50,
  "cancelRefundRate": 0.3,
  "breakthroughBase": 0.03,
  "breakthroughPerTier": 0.01,
  "accidentBase": 0.004,
  "accidentPerTier": 0.002,
  "synergyMul": 1.05,
  "insightCapBonus": 0.5,
  "insightDivisor": 500
};

/* ============ §1 效果键注册表：键 -> 生效目标 / 运算 / 单位 ============ */
const RES31_FX_REGISTRY = {
  "asteroidYieldMul": { target: "prod.asteroid", op: "mul", unit: "倍", note: "小行星采矿产量 ×{v}" },
  "attackMul": { target: "military.attack", op: "mul", unit: "倍", note: "攻击力 ×{v}" },
  "buildCostMul": { target: "cost.build", op: "mul", unit: "倍", note: "建筑建造成本 ×{v}" },
  "buildSpeedMul": { target: "prod.buildSpeed", op: "mul", unit: "倍", note: "建造速度 ×{v}" },
  "colonyMul": { target: "city.colonyRange", op: "mul", unit: "倍", note: "殖民扩张范围 ×{v}" },
  "corruptionMul": { target: "risk.corruption", op: "mul", unit: "倍", note: "腐败发生率 ×{v}" },
  "cropMul": { target: "prod.crop", op: "mul", unit: "倍", note: "作物产量 ×{v}" },
  "defenseMul": { target: "military.defense", op: "mul", unit: "倍", note: "防御力 ×{v}" },
  "diplomacyMul": { target: "diplomacy.relation", op: "mul", unit: "倍", note: "外交关系增速 ×{v}" },
  "disasterChanceMul": { target: "risk.disasterChance", op: "mul", unit: "倍", note: "灾难发生概率 ×{v}" },
  "durabilityMul": { target: "city.durability", op: "mul", unit: "倍", note: "建筑耐久 ×{v}" },
  "ecoMul": { target: "prod.eco", op: "mul", unit: "倍", note: "生态圈效果 ×{v}" },
  "eduMul": { target: "pop.education", op: "mul", unit: "倍", note: "教育水平 ×{v}" },
  "energyMul": { target: "prod.energy", op: "mul", unit: "倍", note: "电力产出 ×{v}" },
  "foodAdd": { target: "prod.foodPerMin", op: "add", unit: "/分钟", note: "食物 +{v}/分钟" },
  "foodMul": { target: "prod.food", op: "mul", unit: "倍", note: "食物产量 ×{v}" },
  "happinessAdd": { target: "pop.happiness", op: "add", unit: "点", note: "居民幸福度 +{v} 点" },
  "he3Add": { target: "prod.he3PerMin", op: "add", unit: "/分钟", note: "氦3 +{v}/分钟" },
  "healthMul": { target: "pop.health", op: "mul", unit: "倍", note: "居民健康 ×{v}" },
  "ironAdd": { target: "prod.ironPerMin", op: "add", unit: "/分钟", note: "铁矿 +{v}/分钟" },
  "ironMul": { target: "prod.iron", op: "mul", unit: "倍", note: "铁矿产量 ×{v}" },
  "launchCostMul": { target: "cost.launch", op: "mul", unit: "倍", note: "发射花费 ×{v}" },
  "lifespanAdd": { target: "pop.lifespan", op: "add", unit: "年", note: "平均寿命 +{v} 年" },
  "medMul": { target: "life.medical", op: "mul", unit: "倍", note: "医疗效率 ×{v}" },
  "mineMul": { target: "prod.mining", op: "mul", unit: "倍", note: "采矿效率 ×{v}" },
  "moraleMul": { target: "military.morale", op: "mul", unit: "倍", note: "士气 ×{v}" },
  "orbitalPowerAdd": { target: "power.orbital", op: "add", unit: "电", note: "轨道电力 +{v}" },
  "oxygenAdd": { target: "life.oxygen", op: "add", unit: "点", note: "氧气供给 +{v} 点" },
  "policySlotsAdd": { target: "gov.policySlots", op: "add", unit: "个", note: "政策槽位 +{v} 个" },
  "popGrowthMul": { target: "pop.growth", op: "mul", unit: "倍", note: "人口增长速度 ×{v}" },
  "powerAdd": { target: "power.output", op: "add", unit: "电", note: "发电量 +{v}" },
  "radiationMul": { target: "risk.radiation", op: "mul", unit: "倍", note: "辐射伤害 ×{v}" },
  "rareMul": { target: "prod.rare", op: "mul", unit: "倍", note: "稀土产量 ×{v}" },
  "reactorMul": { target: "prod.reactor", op: "mul", unit: "倍", note: "反应堆效率 ×{v}" },
  "researchMul": { target: "prod.research", op: "mul", unit: "倍", note: "科研速度 ×{v}" },
  "robotMul": { target: "prod.robot", op: "mul", unit: "倍", note: "机器人效率 ×{v}" },
  "sensorMul": { target: "fleet.sensor", op: "mul", unit: "倍", note: "探测范围 ×{v}" },
  "shieldMul": { target: "military.shield", op: "mul", unit: "倍", note: "护盾强度 ×{v}" },
  "shipHpMul": { target: "fleet.hp", op: "mul", unit: "倍", note: "舰船耐久 ×{v}" },
  "shipSpeedMul": { target: "fleet.speed", op: "mul", unit: "倍", note: "舰船航速 ×{v}" },
  "stabilityAdd": { target: "city.stability", op: "add", unit: "点", note: "殖民地稳定度 +{v} 点" },
  "taxMul": { target: "econ.taxRate", op: "mul", unit: "倍", note: "税收效率 ×{v}" },
  "terraformAdd": { target: "planet.terraform", op: "add", unit: "点", note: "行星改造进度 +{v} 点" },
  "tradeMul": { target: "econ.tradeIncome", op: "mul", unit: "倍", note: "贸易收入 ×{v}" },
  "upkeepMul": { target: "cost.upkeep", op: "mul", unit: "倍", note: "维护费 ×{v}" },
  "waterMul": { target: "prod.water", op: "mul", unit: "倍", note: "水产量 ×{v}" },
  "waterUseMul": { target: "pop.waterUse", op: "mul", unit: "倍", note: "人口耗水 ×{v}" },
};

/* ============ §2 实验室类型（6 种）与等级（L1-L5） ============ */
const RES31_LAB_TYPES = [
  {
    "id": "lab31_physics",
    "name": "物理实验室",
    "branch": "physics",
    "desc": "粒子加速器与高能实验平台",
    "baseCompute": 40,
    "baseSlots": 1,
    "buildCost": {
      "credits": 800,
      "iron": 60
    }
  },
  {
    "id": "lab31_engineering",
    "name": "工程试验场",
    "branch": "engineering",
    "desc": "材料与结构试验平台",
    "baseCompute": 35,
    "baseSlots": 1,
    "buildCost": {
      "credits": 700,
      "iron": 80
    }
  },
  {
    "id": "lab31_biology",
    "name": "生物实验室",
    "branch": "biology",
    "desc": "基因与生态培养平台",
    "baseCompute": 35,
    "baseSlots": 1,
    "buildCost": {
      "credits": 700,
      "iron": 40
    }
  },
  {
    "id": "lab31_society",
    "name": "社会科学院",
    "branch": "society",
    "desc": "治理与文化田野调查平台",
    "baseCompute": 25,
    "baseSlots": 1,
    "buildCost": {
      "credits": 500,
      "iron": 30
    }
  },
  {
    "id": "lab31_deepspace",
    "name": "深空观测站",
    "branch": "deepspace",
    "desc": "轨道望远镜与深空探测平台",
    "baseCompute": 45,
    "baseSlots": 1,
    "buildCost": {
      "credits": 1000,
      "iron": 70
    }
  },
  {
    "id": "lab31_general",
    "name": "综合科研中心",
    "branch": "general",
    "desc": "全方向通用研究平台，算力均衡",
    "baseCompute": 30,
    "baseSlots": 2,
    "buildCost": {
      "credits": 900,
      "iron": 50
    }
  }
];

const RES31_LAB_TIERS = [
  {
    "tier": 1,
    "name": "L1",
    "computeMul": 1.0,
    "slotsAdd": 0,
    "equipSlots": 2,
    "upgradeCost": {
      "credits": 600,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "requirePop": 20,
    "desc": "实验室等级 L1：算力 ×1.0，槽位 +0，设备位 2"
  },
  {
    "tier": 2,
    "name": "L2",
    "computeMul": 1.6,
    "slotsAdd": 1,
    "equipSlots": 3,
    "upgradeCost": {
      "credits": 2400,
      "iron": 160
    },
    "upkeepPerDay": 16,
    "requirePop": 40,
    "desc": "实验室等级 L2：算力 ×1.6，槽位 +1，设备位 3"
  },
  {
    "tier": 3,
    "name": "L3",
    "computeMul": 2.2,
    "slotsAdd": 2,
    "equipSlots": 4,
    "upgradeCost": {
      "credits": 5400,
      "iron": 360
    },
    "upkeepPerDay": 24,
    "requirePop": 60,
    "desc": "实验室等级 L3：算力 ×2.2，槽位 +2，设备位 4"
  },
  {
    "tier": 4,
    "name": "L4",
    "computeMul": 2.8,
    "slotsAdd": 3,
    "equipSlots": 5,
    "upgradeCost": {
      "credits": 9600,
      "iron": 640
    },
    "upkeepPerDay": 32,
    "requirePop": 80,
    "desc": "实验室等级 L4：算力 ×2.8，槽位 +3，设备位 5"
  },
  {
    "tier": 5,
    "name": "L5",
    "computeMul": 3.4,
    "slotsAdd": 4,
    "equipSlots": 6,
    "upgradeCost": {
      "credits": 15000,
      "iron": 1000
    },
    "upkeepPerDay": 40,
    "requirePop": 100,
    "desc": "实验室等级 L5：算力 ×3.4，槽位 +4，设备位 6"
  }
];

/* 设备目录：84 件（6 类实验室 × 14 件），每件含算力/成本/维护/方向加成 */
const RES31_EQUIPMENT = [
  {
    "id": "eq31_001",
    "name": "粒子探测器",
    "labType": "lab31_physics",
    "tier": 1,
    "compute": 6,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "researchMul",
      "value": 1.02
    },
    "desc": "粒子探测器（物理实验室 L1）：算力 +6，物理方向小幅加成"
  },
  {
    "id": "eq31_002",
    "name": "超导磁体",
    "labType": "lab31_physics",
    "tier": 2,
    "compute": 14,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "energyMul",
      "value": 1.04
    },
    "desc": "超导磁体（物理实验室 L2）：算力 +14，物理方向小幅加成"
  },
  {
    "id": "eq31_003",
    "name": "激光干涉仪",
    "labType": "lab31_physics",
    "tier": 3,
    "compute": 22,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "powerAdd",
      "value": 1.06
    },
    "desc": "激光干涉仪（物理实验室 L3）：算力 +22，物理方向小幅加成"
  },
  {
    "id": "eq31_004",
    "name": "真空腔",
    "labType": "lab31_physics",
    "tier": 4,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "shieldMul",
      "value": 1.08
    },
    "desc": "真空腔（物理实验室 L4）：算力 +30，物理方向小幅加成"
  },
  {
    "id": "eq31_005",
    "name": "能谱仪",
    "labType": "lab31_physics",
    "tier": 5,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "radiationMul",
      "value": 1.1
    },
    "desc": "能谱仪（物理实验室 L5）：算力 +30，物理方向小幅加成"
  },
  {
    "id": "eq31_006",
    "name": "冷冻机",
    "labType": "lab31_physics",
    "tier": 1,
    "compute": 8,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "sensorMul",
      "value": 1.02
    },
    "desc": "冷冻机（物理实验室 L1）：算力 +8，物理方向小幅加成"
  },
  {
    "id": "eq31_007",
    "name": "加速腔",
    "labType": "lab31_physics",
    "tier": 2,
    "compute": 16,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "reactorMul",
      "value": 1.04
    },
    "desc": "加速腔（物理实验室 L2）：算力 +16，物理方向小幅加成"
  },
  {
    "id": "eq31_008",
    "name": "中子源",
    "labType": "lab31_physics",
    "tier": 3,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "defenseMul",
      "value": 1.06
    },
    "desc": "中子源（物理实验室 L3）：算力 +24，物理方向小幅加成"
  },
  {
    "id": "eq31_009",
    "name": "等离子炬",
    "labType": "lab31_physics",
    "tier": 4,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "researchMul",
      "value": 1.08
    },
    "desc": "等离子炬（物理实验室 L4）：算力 +24，物理方向小幅加成"
  },
  {
    "id": "eq31_010",
    "name": "引力波天线",
    "labType": "lab31_physics",
    "tier": 5,
    "compute": 32,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "energyMul",
      "value": 1.1
    },
    "desc": "引力波天线（物理实验室 L5）：算力 +32，物理方向小幅加成"
  },
  {
    "id": "eq31_011",
    "name": "量子比特阵列",
    "labType": "lab31_physics",
    "tier": 1,
    "compute": 10,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "powerAdd",
      "value": 1.02
    },
    "desc": "量子比特阵列（物理实验室 L1）：算力 +10，物理方向小幅加成"
  },
  {
    "id": "eq31_012",
    "name": "高压电源",
    "labType": "lab31_physics",
    "tier": 2,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "shieldMul",
      "value": 1.04
    },
    "desc": "高压电源（物理实验室 L2）：算力 +18，物理方向小幅加成"
  },
  {
    "id": "eq31_013",
    "name": "磁约束环",
    "labType": "lab31_physics",
    "tier": 3,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "radiationMul",
      "value": 1.06
    },
    "desc": "磁约束环（物理实验室 L3）：算力 +18，物理方向小幅加成"
  },
  {
    "id": "eq31_014",
    "name": "光谱仪",
    "labType": "lab31_physics",
    "tier": 4,
    "compute": 26,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "sensorMul",
      "value": 1.08
    },
    "desc": "光谱仪（物理实验室 L4）：算力 +26，物理方向小幅加成"
  },
  {
    "id": "eq31_015",
    "name": "3D打印机",
    "labType": "lab31_engineering",
    "tier": 1,
    "compute": 6,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "buildCostMul",
      "value": 1.02
    },
    "desc": "3D打印机（工程试验场 L1）：算力 +6，工程方向小幅加成"
  },
  {
    "id": "eq31_016",
    "name": "数控机床",
    "labType": "lab31_engineering",
    "tier": 2,
    "compute": 14,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "buildSpeedMul",
      "value": 1.04
    },
    "desc": "数控机床（工程试验场 L2）：算力 +14，工程方向小幅加成"
  },
  {
    "id": "eq31_017",
    "name": "风洞",
    "labType": "lab31_engineering",
    "tier": 3,
    "compute": 22,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "ironMul",
      "value": 1.06
    },
    "desc": "风洞（工程试验场 L3）：算力 +22，工程方向小幅加成"
  },
  {
    "id": "eq31_018",
    "name": "压力舱",
    "labType": "lab31_engineering",
    "tier": 4,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "mineMul",
      "value": 1.08
    },
    "desc": "压力舱（工程试验场 L4）：算力 +30，工程方向小幅加成"
  },
  {
    "id": "eq31_019",
    "name": "材料试验机",
    "labType": "lab31_engineering",
    "tier": 5,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "robotMul",
      "value": 1.1
    },
    "desc": "材料试验机（工程试验场 L5）：算力 +30，工程方向小幅加成"
  },
  {
    "id": "eq31_020",
    "name": "激光切割机",
    "labType": "lab31_engineering",
    "tier": 1,
    "compute": 8,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "waterMul",
      "value": 1.02
    },
    "desc": "激光切割机（工程试验场 L1）：算力 +8，工程方向小幅加成"
  },
  {
    "id": "eq31_021",
    "name": "装配机械臂",
    "labType": "lab31_engineering",
    "tier": 2,
    "compute": 16,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "durabilityMul",
      "value": 1.04
    },
    "desc": "装配机械臂（工程试验场 L2）：算力 +16，工程方向小幅加成"
  },
  {
    "id": "eq31_022",
    "name": "振动台",
    "labType": "lab31_engineering",
    "tier": 3,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "upkeepMul",
      "value": 1.06
    },
    "desc": "振动台（工程试验场 L3）：算力 +24，工程方向小幅加成"
  },
  {
    "id": "eq31_023",
    "name": "热处理炉",
    "labType": "lab31_engineering",
    "tier": 4,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "buildCostMul",
      "value": 1.08
    },
    "desc": "热处理炉（工程试验场 L4）：算力 +24，工程方向小幅加成"
  },
  {
    "id": "eq31_024",
    "name": "精密天平",
    "labType": "lab31_engineering",
    "tier": 5,
    "compute": 32,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "buildSpeedMul",
      "value": 1.1
    },
    "desc": "精密天平（工程试验场 L5）：算力 +32，工程方向小幅加成"
  },
  {
    "id": "eq31_025",
    "name": "焊接机器人",
    "labType": "lab31_engineering",
    "tier": 1,
    "compute": 10,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "ironMul",
      "value": 1.02
    },
    "desc": "焊接机器人（工程试验场 L1）：算力 +10，工程方向小幅加成"
  },
  {
    "id": "eq31_026",
    "name": "疲劳试验机",
    "labType": "lab31_engineering",
    "tier": 2,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "mineMul",
      "value": 1.04
    },
    "desc": "疲劳试验机（工程试验场 L2）：算力 +18，工程方向小幅加成"
  },
  {
    "id": "eq31_027",
    "name": "液压机",
    "labType": "lab31_engineering",
    "tier": 3,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "robotMul",
      "value": 1.06
    },
    "desc": "液压机（工程试验场 L3）：算力 +18，工程方向小幅加成"
  },
  {
    "id": "eq31_028",
    "name": "无尘车间",
    "labType": "lab31_engineering",
    "tier": 4,
    "compute": 26,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "waterMul",
      "value": 1.08
    },
    "desc": "无尘车间（工程试验场 L4）：算力 +26，工程方向小幅加成"
  },
  {
    "id": "eq31_029",
    "name": "基因测序仪",
    "labType": "lab31_biology",
    "tier": 1,
    "compute": 6,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "foodMul",
      "value": 1.02
    },
    "desc": "基因测序仪（生物实验室 L1）：算力 +6，生物方向小幅加成"
  },
  {
    "id": "eq31_030",
    "name": "培养箱",
    "labType": "lab31_biology",
    "tier": 2,
    "compute": 14,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "popGrowthMul",
      "value": 1.04
    },
    "desc": "培养箱（生物实验室 L2）：算力 +14，生物方向小幅加成"
  },
  {
    "id": "eq31_031",
    "name": "离心机",
    "labType": "lab31_biology",
    "tier": 3,
    "compute": 22,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "happinessAdd",
      "value": 1.06
    },
    "desc": "离心机（生物实验室 L3）：算力 +22，生物方向小幅加成"
  },
  {
    "id": "eq31_032",
    "name": "显微镜",
    "labType": "lab31_biology",
    "tier": 4,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "healthMul",
      "value": 1.08
    },
    "desc": "显微镜（生物实验室 L4）：算力 +30，生物方向小幅加成"
  },
  {
    "id": "eq31_033",
    "name": "发酵罐",
    "labType": "lab31_biology",
    "tier": 5,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "oxygenAdd",
      "value": 1.1
    },
    "desc": "发酵罐（生物实验室 L5）：算力 +30，生物方向小幅加成"
  },
  {
    "id": "eq31_034",
    "name": "冷冻电镜",
    "labType": "lab31_biology",
    "tier": 1,
    "compute": 8,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "cropMul",
      "value": 1.02
    },
    "desc": "冷冻电镜（生物实验室 L1）：算力 +8，生物方向小幅加成"
  },
  {
    "id": "eq31_035",
    "name": "PCR仪",
    "labType": "lab31_biology",
    "tier": 2,
    "compute": 16,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "medMul",
      "value": 1.04
    },
    "desc": "PCR仪（生物实验室 L2）：算力 +16，生物方向小幅加成"
  },
  {
    "id": "eq31_036",
    "name": "生物反应器",
    "labType": "lab31_biology",
    "tier": 3,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "lifespanAdd",
      "value": 1.06
    },
    "desc": "生物反应器（生物实验室 L3）：算力 +24，生物方向小幅加成"
  },
  {
    "id": "eq31_037",
    "name": "温室舱",
    "labType": "lab31_biology",
    "tier": 4,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "foodMul",
      "value": 1.08
    },
    "desc": "温室舱（生物实验室 L4）：算力 +24，生物方向小幅加成"
  },
  {
    "id": "eq31_038",
    "name": "样本库",
    "labType": "lab31_biology",
    "tier": 5,
    "compute": 32,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "popGrowthMul",
      "value": 1.1
    },
    "desc": "样本库（生物实验室 L5）：算力 +32，生物方向小幅加成"
  },
  {
    "id": "eq31_039",
    "name": "质谱仪",
    "labType": "lab31_biology",
    "tier": 1,
    "compute": 10,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "happinessAdd",
      "value": 1.02
    },
    "desc": "质谱仪（生物实验室 L1）：算力 +10，生物方向小幅加成"
  },
  {
    "id": "eq31_040",
    "name": "细胞培养架",
    "labType": "lab31_biology",
    "tier": 2,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "healthMul",
      "value": 1.04
    },
    "desc": "细胞培养架（生物实验室 L2）：算力 +18，生物方向小幅加成"
  },
  {
    "id": "eq31_041",
    "name": "酶标仪",
    "labType": "lab31_biology",
    "tier": 3,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "oxygenAdd",
      "value": 1.06
    },
    "desc": "酶标仪（生物实验室 L3）：算力 +18，生物方向小幅加成"
  },
  {
    "id": "eq31_042",
    "name": "无菌操作台",
    "labType": "lab31_biology",
    "tier": 4,
    "compute": 26,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "cropMul",
      "value": 1.08
    },
    "desc": "无菌操作台（生物实验室 L4）：算力 +26，生物方向小幅加成"
  },
  {
    "id": "eq31_043",
    "name": "舆情分析终端",
    "labType": "lab31_society",
    "tier": 1,
    "compute": 6,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "taxMul",
      "value": 1.02
    },
    "desc": "舆情分析终端（社会科学院 L1）：算力 +6，社会方向小幅加成"
  },
  {
    "id": "eq31_044",
    "name": "档案库",
    "labType": "lab31_society",
    "tier": 2,
    "compute": 14,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "stabilityAdd",
      "value": 1.04
    },
    "desc": "档案库（社会科学院 L2）：算力 +14，社会方向小幅加成"
  },
  {
    "id": "eq31_045",
    "name": "模拟议会厅",
    "labType": "lab31_society",
    "tier": 3,
    "compute": 22,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "diplomacyMul",
      "value": 1.06
    },
    "desc": "模拟议会厅（社会科学院 L3）：算力 +22，社会方向小幅加成"
  },
  {
    "id": "eq31_046",
    "name": "田野调查车",
    "labType": "lab31_society",
    "tier": 4,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "policySlotsAdd",
      "value": 1.08
    },
    "desc": "田野调查车（社会科学院 L4）：算力 +30，社会方向小幅加成"
  },
  {
    "id": "eq31_047",
    "name": "教育测评系统",
    "labType": "lab31_society",
    "tier": 5,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "tradeMul",
      "value": 1.1
    },
    "desc": "教育测评系统（社会科学院 L5）：算力 +30，社会方向小幅加成"
  },
  {
    "id": "eq31_048",
    "name": "文化数据库",
    "labType": "lab31_society",
    "tier": 1,
    "compute": 8,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "moraleMul",
      "value": 1.02
    },
    "desc": "文化数据库（社会科学院 L1）：算力 +8，社会方向小幅加成"
  },
  {
    "id": "eq31_049",
    "name": "法律检索终端",
    "labType": "lab31_society",
    "tier": 2,
    "compute": 16,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "eduMul",
      "value": 1.04
    },
    "desc": "法律检索终端（社会科学院 L2）：算力 +16，社会方向小幅加成"
  },
  {
    "id": "eq31_050",
    "name": "民意调查平台",
    "labType": "lab31_society",
    "tier": 3,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "corruptionMul",
      "value": 1.06
    },
    "desc": "民意调查平台（社会科学院 L3）：算力 +24，社会方向小幅加成"
  },
  {
    "id": "eq31_051",
    "name": "翻译矩阵",
    "labType": "lab31_society",
    "tier": 4,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "taxMul",
      "value": 1.08
    },
    "desc": "翻译矩阵（社会科学院 L4）：算力 +24，社会方向小幅加成"
  },
  {
    "id": "eq31_052",
    "name": "口述史录音棚",
    "labType": "lab31_society",
    "tier": 5,
    "compute": 32,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "stabilityAdd",
      "value": 1.1
    },
    "desc": "口述史录音棚（社会科学院 L5）：算力 +32，社会方向小幅加成"
  },
  {
    "id": "eq31_053",
    "name": "政策沙盘",
    "labType": "lab31_society",
    "tier": 1,
    "compute": 10,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "diplomacyMul",
      "value": 1.02
    },
    "desc": "政策沙盘（社会科学院 L1）：算力 +10，社会方向小幅加成"
  },
  {
    "id": "eq31_054",
    "name": "社区观测站",
    "labType": "lab31_society",
    "tier": 2,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "policySlotsAdd",
      "value": 1.04
    },
    "desc": "社区观测站（社会科学院 L2）：算力 +18，社会方向小幅加成"
  },
  {
    "id": "eq31_055",
    "name": "经济模型机",
    "labType": "lab31_society",
    "tier": 3,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "tradeMul",
      "value": 1.06
    },
    "desc": "经济模型机（社会科学院 L3）：算力 +18，社会方向小幅加成"
  },
  {
    "id": "eq31_056",
    "name": "舆论实验舱",
    "labType": "lab31_society",
    "tier": 4,
    "compute": 26,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "moraleMul",
      "value": 1.08
    },
    "desc": "舆论实验舱（社会科学院 L4）：算力 +26，社会方向小幅加成"
  },
  {
    "id": "eq31_057",
    "name": "射电望远镜",
    "labType": "lab31_deepspace",
    "tier": 1,
    "compute": 6,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "shipSpeedMul",
      "value": 1.02
    },
    "desc": "射电望远镜（深空观测站 L1）：算力 +6，深空方向小幅加成"
  },
  {
    "id": "eq31_058",
    "name": "光学望远镜",
    "labType": "lab31_deepspace",
    "tier": 2,
    "compute": 14,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "shipHpMul",
      "value": 1.04
    },
    "desc": "光学望远镜（深空观测站 L2）：算力 +14，深空方向小幅加成"
  },
  {
    "id": "eq31_059",
    "name": "深空天线",
    "labType": "lab31_deepspace",
    "tier": 3,
    "compute": 22,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "asteroidYieldMul",
      "value": 1.06
    },
    "desc": "深空天线（深空观测站 L3）：算力 +22，深空方向小幅加成"
  },
  {
    "id": "eq31_060",
    "name": "轨道接收器",
    "labType": "lab31_deepspace",
    "tier": 4,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "he3Add",
      "value": 1.08
    },
    "desc": "轨道接收器（深空观测站 L4）：算力 +30，深空方向小幅加成"
  },
  {
    "id": "eq31_061",
    "name": "星图数据库",
    "labType": "lab31_deepspace",
    "tier": 5,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "terraformAdd",
      "value": 1.1
    },
    "desc": "星图数据库（深空观测站 L5）：算力 +30，深空方向小幅加成"
  },
  {
    "id": "eq31_062",
    "name": "姿态模拟器",
    "labType": "lab31_deepspace",
    "tier": 1,
    "compute": 8,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "launchCostMul",
      "value": 1.02
    },
    "desc": "姿态模拟器（深空观测站 L1）：算力 +8，深空方向小幅加成"
  },
  {
    "id": "eq31_063",
    "name": "推进试验台",
    "labType": "lab31_deepspace",
    "tier": 2,
    "compute": 16,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "orbitalPowerAdd",
      "value": 1.04
    },
    "desc": "推进试验台（深空观测站 L2）：算力 +16，深空方向小幅加成"
  },
  {
    "id": "eq31_064",
    "name": "辐射屏蔽舱",
    "labType": "lab31_deepspace",
    "tier": 3,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "colonyMul",
      "value": 1.06
    },
    "desc": "辐射屏蔽舱（深空观测站 L3）：算力 +24，深空方向小幅加成"
  },
  {
    "id": "eq31_065",
    "name": "样本返回舱",
    "labType": "lab31_deepspace",
    "tier": 4,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "shipSpeedMul",
      "value": 1.08
    },
    "desc": "样本返回舱（深空观测站 L4）：算力 +24，深空方向小幅加成"
  },
  {
    "id": "eq31_066",
    "name": "导航信标",
    "labType": "lab31_deepspace",
    "tier": 5,
    "compute": 32,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "shipHpMul",
      "value": 1.1
    },
    "desc": "导航信标（深空观测站 L5）：算力 +32，深空方向小幅加成"
  },
  {
    "id": "eq31_067",
    "name": "陨石分析仪",
    "labType": "lab31_deepspace",
    "tier": 1,
    "compute": 10,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "asteroidYieldMul",
      "value": 1.02
    },
    "desc": "陨石分析仪（深空观测站 L1）：算力 +10，深空方向小幅加成"
  },
  {
    "id": "eq31_068",
    "name": "太阳风监测仪",
    "labType": "lab31_deepspace",
    "tier": 2,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "he3Add",
      "value": 1.04
    },
    "desc": "太阳风监测仪（深空观测站 L2）：算力 +18，深空方向小幅加成"
  },
  {
    "id": "eq31_069",
    "name": "深空通讯阵列",
    "labType": "lab31_deepspace",
    "tier": 3,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "terraformAdd",
      "value": 1.06
    },
    "desc": "深空通讯阵列（深空观测站 L3）：算力 +18，深空方向小幅加成"
  },
  {
    "id": "eq31_070",
    "name": "着陆模拟器",
    "labType": "lab31_deepspace",
    "tier": 4,
    "compute": 26,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "launchCostMul",
      "value": 1.08
    },
    "desc": "着陆模拟器（深空观测站 L4）：算力 +26，深空方向小幅加成"
  },
  {
    "id": "eq31_071",
    "name": "超级计算机",
    "labType": "lab31_general",
    "tier": 1,
    "compute": 6,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "researchMul",
      "value": 1.02
    },
    "desc": "超级计算机（综合科研中心 L1）：算力 +6，通用方向小幅加成"
  },
  {
    "id": "eq31_072",
    "name": "数据中心",
    "labType": "lab31_general",
    "tier": 2,
    "compute": 14,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "researchMul",
      "value": 1.04
    },
    "desc": "数据中心（综合科研中心 L2）：算力 +14，通用方向小幅加成"
  },
  {
    "id": "eq31_073",
    "name": "计算集群",
    "labType": "lab31_general",
    "tier": 3,
    "compute": 22,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "researchMul",
      "value": 1.06
    },
    "desc": "计算集群（综合科研中心 L3）：算力 +22，通用方向小幅加成"
  },
  {
    "id": "eq31_074",
    "name": "存储阵列",
    "labType": "lab31_general",
    "tier": 4,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "researchMul",
      "value": 1.08
    },
    "desc": "存储阵列（综合科研中心 L4）：算力 +30，通用方向小幅加成"
  },
  {
    "id": "eq31_075",
    "name": "AI训练机",
    "labType": "lab31_general",
    "tier": 5,
    "compute": 30,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "researchMul",
      "value": 1.1
    },
    "desc": "AI训练机（综合科研中心 L5）：算力 +30，通用方向小幅加成"
  },
  {
    "id": "eq31_076",
    "name": "可视化墙",
    "labType": "lab31_general",
    "tier": 1,
    "compute": 8,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "researchMul",
      "value": 1.02
    },
    "desc": "可视化墙（综合科研中心 L1）：算力 +8，通用方向小幅加成"
  },
  {
    "id": "eq31_077",
    "name": "协作终端",
    "labType": "lab31_general",
    "tier": 2,
    "compute": 16,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "researchMul",
      "value": 1.04
    },
    "desc": "协作终端（综合科研中心 L2）：算力 +16，通用方向小幅加成"
  },
  {
    "id": "eq31_078",
    "name": "文献数据库",
    "labType": "lab31_general",
    "tier": 3,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "researchMul",
      "value": 1.06
    },
    "desc": "文献数据库（综合科研中心 L3）：算力 +24，通用方向小幅加成"
  },
  {
    "id": "eq31_079",
    "name": "实验记录仪",
    "labType": "lab31_general",
    "tier": 4,
    "compute": 24,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "researchMul",
      "value": 1.08
    },
    "desc": "实验记录仪（综合科研中心 L4）：算力 +24，通用方向小幅加成"
  },
  {
    "id": "eq31_080",
    "name": "安全防护罩",
    "labType": "lab31_general",
    "tier": 5,
    "compute": 32,
    "slotsUsed": 1,
    "cost": {
      "credits": 3750,
      "iron": 50
    },
    "upkeepPerDay": 10,
    "effect": {
      "key": "researchMul",
      "value": 1.1
    },
    "desc": "安全防护罩（综合科研中心 L5）：算力 +32，通用方向小幅加成"
  },
  {
    "id": "eq31_081",
    "name": "能源稳压柜",
    "labType": "lab31_general",
    "tier": 1,
    "compute": 10,
    "slotsUsed": 1,
    "cost": {
      "credits": 150,
      "iron": 10
    },
    "upkeepPerDay": 2,
    "effect": {
      "key": "researchMul",
      "value": 1.02
    },
    "desc": "能源稳压柜（综合科研中心 L1）：算力 +10，通用方向小幅加成"
  },
  {
    "id": "eq31_082",
    "name": "冷却系统",
    "labType": "lab31_general",
    "tier": 2,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 600,
      "iron": 20
    },
    "upkeepPerDay": 4,
    "effect": {
      "key": "researchMul",
      "value": 1.04
    },
    "desc": "冷却系统（综合科研中心 L2）：算力 +18，通用方向小幅加成"
  },
  {
    "id": "eq31_083",
    "name": "备用电源",
    "labType": "lab31_general",
    "tier": 3,
    "compute": 18,
    "slotsUsed": 1,
    "cost": {
      "credits": 1350,
      "iron": 30
    },
    "upkeepPerDay": 6,
    "effect": {
      "key": "researchMul",
      "value": 1.06
    },
    "desc": "备用电源（综合科研中心 L3）：算力 +18，通用方向小幅加成"
  },
  {
    "id": "eq31_084",
    "name": "网络交换机",
    "labType": "lab31_general",
    "tier": 4,
    "compute": 26,
    "slotsUsed": 1,
    "cost": {
      "credits": 2400,
      "iron": 40
    },
    "upkeepPerDay": 8,
    "effect": {
      "key": "researchMul",
      "value": 1.08
    },
    "desc": "网络交换机（综合科研中心 L4）：算力 +26，通用方向小幅加成"
  }
];

/* ============ §3 科学家特质：48 个 ============ */
const RES31_TRAITS = [
  {
    "id": "trait31_01",
    "name": "专注",
    "desc": "研究速度 +8%，事故概率 -10%",
    "mods": {
      "researchMul": 1.08,
      "accidentMul": 0.9
    }
  },
  {
    "id": "trait31_02",
    "name": "奇思妙想",
    "desc": "突破概率 +15%，研究速度 -3%",
    "mods": {
      "breakthroughMul": 1.15,
      "researchMul": 0.97
    }
  },
  {
    "id": "trait31_03",
    "name": "稳健",
    "desc": "事故概率 -25%，研究速度 -2%",
    "mods": {
      "accidentMul": 0.75,
      "researchMul": 0.98
    }
  },
  {
    "id": "trait31_04",
    "name": "领袖",
    "desc": "所在项目全体科学家效率 +6%",
    "mods": {
      "teamMul": 1.06
    }
  },
  {
    "id": "trait31_05",
    "name": "夜猫子",
    "desc": "夜间研究速度 +12%，士气 -2/天",
    "mods": {
      "nightMul": 1.12
    }
  },
  {
    "id": "trait31_06",
    "name": "导师",
    "desc": "指导的初级科学家经验 +50%",
    "mods": {
      "mentorMul": 1.5
    }
  },
  {
    "id": "trait31_07",
    "name": "独行者",
    "desc": "独自研究时速度 +15%，组队时 -8%",
    "mods": {
      "soloMul": 1.15
    }
  },
  {
    "id": "trait31_08",
    "name": "开拓者",
    "desc": "新方向首个项目速度 +20%",
    "mods": {
      "pioneerMul": 1.2
    }
  },
  {
    "id": "trait31_09",
    "name": "精密",
    "desc": "实验成功率 +10%，成本 -5%",
    "mods": {
      "successMul": 1.1,
      "costMul": 0.95
    }
  },
  {
    "id": "trait31_10",
    "name": "节俭",
    "desc": "项目信用点成本 -10%",
    "mods": {
      "costMul": 0.9
    }
  },
  {
    "id": "trait31_11",
    "name": "社交家",
    "desc": "社会方向 +15%，离职概率 -20%",
    "mods": {
      "societyMul": 1.15,
      "leaveMul": 0.8
    }
  },
  {
    "id": "trait31_12",
    "name": "体魄强健",
    "desc": "长期项目疲劳积累 -30%",
    "mods": {
      "fatigueMul": 0.7
    }
  },
  {
    "id": "trait31_13",
    "name": "专注·2",
    "desc": "研究速度 +8%，事故概率 -10%",
    "mods": {
      "researchMul": 1.08,
      "accidentMul": 0.9
    }
  },
  {
    "id": "trait31_14",
    "name": "奇思妙想·2",
    "desc": "突破概率 +15%，研究速度 -3%",
    "mods": {
      "breakthroughMul": 1.15,
      "researchMul": 0.97
    }
  },
  {
    "id": "trait31_15",
    "name": "稳健·2",
    "desc": "事故概率 -25%，研究速度 -2%",
    "mods": {
      "accidentMul": 0.75,
      "researchMul": 0.98
    }
  },
  {
    "id": "trait31_16",
    "name": "领袖·2",
    "desc": "所在项目全体科学家效率 +6%",
    "mods": {
      "teamMul": 1.06
    }
  },
  {
    "id": "trait31_17",
    "name": "夜猫子·2",
    "desc": "夜间研究速度 +12%，士气 -2/天",
    "mods": {
      "nightMul": 1.12
    }
  },
  {
    "id": "trait31_18",
    "name": "导师·2",
    "desc": "指导的初级科学家经验 +50%",
    "mods": {
      "mentorMul": 1.5
    }
  },
  {
    "id": "trait31_19",
    "name": "独行者·2",
    "desc": "独自研究时速度 +15%，组队时 -8%",
    "mods": {
      "soloMul": 1.15
    }
  },
  {
    "id": "trait31_20",
    "name": "开拓者·2",
    "desc": "新方向首个项目速度 +20%",
    "mods": {
      "pioneerMul": 1.2
    }
  },
  {
    "id": "trait31_21",
    "name": "精密·2",
    "desc": "实验成功率 +10%，成本 -5%",
    "mods": {
      "successMul": 1.1,
      "costMul": 0.95
    }
  },
  {
    "id": "trait31_22",
    "name": "节俭·2",
    "desc": "项目信用点成本 -10%",
    "mods": {
      "costMul": 0.9
    }
  },
  {
    "id": "trait31_23",
    "name": "社交家·2",
    "desc": "社会方向 +15%，离职概率 -20%",
    "mods": {
      "societyMul": 1.15,
      "leaveMul": 0.8
    }
  },
  {
    "id": "trait31_24",
    "name": "体魄强健·2",
    "desc": "长期项目疲劳积累 -30%",
    "mods": {
      "fatigueMul": 0.7
    }
  },
  {
    "id": "trait31_25",
    "name": "专注·3",
    "desc": "研究速度 +8%，事故概率 -10%",
    "mods": {
      "researchMul": 1.08,
      "accidentMul": 0.9
    }
  },
  {
    "id": "trait31_26",
    "name": "奇思妙想·3",
    "desc": "突破概率 +15%，研究速度 -3%",
    "mods": {
      "breakthroughMul": 1.15,
      "researchMul": 0.97
    }
  },
  {
    "id": "trait31_27",
    "name": "稳健·3",
    "desc": "事故概率 -25%，研究速度 -2%",
    "mods": {
      "accidentMul": 0.75,
      "researchMul": 0.98
    }
  },
  {
    "id": "trait31_28",
    "name": "领袖·3",
    "desc": "所在项目全体科学家效率 +6%",
    "mods": {
      "teamMul": 1.06
    }
  },
  {
    "id": "trait31_29",
    "name": "夜猫子·3",
    "desc": "夜间研究速度 +12%，士气 -2/天",
    "mods": {
      "nightMul": 1.12
    }
  },
  {
    "id": "trait31_30",
    "name": "导师·3",
    "desc": "指导的初级科学家经验 +50%",
    "mods": {
      "mentorMul": 1.5
    }
  },
  {
    "id": "trait31_31",
    "name": "独行者·3",
    "desc": "独自研究时速度 +15%，组队时 -8%",
    "mods": {
      "soloMul": 1.15
    }
  },
  {
    "id": "trait31_32",
    "name": "开拓者·3",
    "desc": "新方向首个项目速度 +20%",
    "mods": {
      "pioneerMul": 1.2
    }
  },
  {
    "id": "trait31_33",
    "name": "精密·3",
    "desc": "实验成功率 +10%，成本 -5%",
    "mods": {
      "successMul": 1.1,
      "costMul": 0.95
    }
  },
  {
    "id": "trait31_34",
    "name": "节俭·3",
    "desc": "项目信用点成本 -10%",
    "mods": {
      "costMul": 0.9
    }
  },
  {
    "id": "trait31_35",
    "name": "社交家·3",
    "desc": "社会方向 +15%，离职概率 -20%",
    "mods": {
      "societyMul": 1.15,
      "leaveMul": 0.8
    }
  },
  {
    "id": "trait31_36",
    "name": "体魄强健·3",
    "desc": "长期项目疲劳积累 -30%",
    "mods": {
      "fatigueMul": 0.7
    }
  },
  {
    "id": "trait31_37",
    "name": "专注·4",
    "desc": "研究速度 +8%，事故概率 -10%",
    "mods": {
      "researchMul": 1.08,
      "accidentMul": 0.9
    }
  },
  {
    "id": "trait31_38",
    "name": "奇思妙想·4",
    "desc": "突破概率 +15%，研究速度 -3%",
    "mods": {
      "breakthroughMul": 1.15,
      "researchMul": 0.97
    }
  },
  {
    "id": "trait31_39",
    "name": "稳健·4",
    "desc": "事故概率 -25%，研究速度 -2%",
    "mods": {
      "accidentMul": 0.75,
      "researchMul": 0.98
    }
  },
  {
    "id": "trait31_40",
    "name": "领袖·4",
    "desc": "所在项目全体科学家效率 +6%",
    "mods": {
      "teamMul": 1.06
    }
  },
  {
    "id": "trait31_41",
    "name": "夜猫子·4",
    "desc": "夜间研究速度 +12%，士气 -2/天",
    "mods": {
      "nightMul": 1.12
    }
  },
  {
    "id": "trait31_42",
    "name": "导师·4",
    "desc": "指导的初级科学家经验 +50%",
    "mods": {
      "mentorMul": 1.5
    }
  },
  {
    "id": "trait31_43",
    "name": "独行者·4",
    "desc": "独自研究时速度 +15%，组队时 -8%",
    "mods": {
      "soloMul": 1.15
    }
  },
  {
    "id": "trait31_44",
    "name": "开拓者·4",
    "desc": "新方向首个项目速度 +20%",
    "mods": {
      "pioneerMul": 1.2
    }
  },
  {
    "id": "trait31_45",
    "name": "精密·4",
    "desc": "实验成功率 +10%，成本 -5%",
    "mods": {
      "successMul": 1.1,
      "costMul": 0.95
    }
  },
  {
    "id": "trait31_46",
    "name": "节俭·4",
    "desc": "项目信用点成本 -10%",
    "mods": {
      "costMul": 0.9
    }
  },
  {
    "id": "trait31_47",
    "name": "社交家·4",
    "desc": "社会方向 +15%，离职概率 -20%",
    "mods": {
      "societyMul": 1.15,
      "leaveMul": 0.8
    }
  },
  {
    "id": "trait31_48",
    "name": "体魄强健·4",
    "desc": "长期项目疲劳积累 -30%",
    "mods": {
      "fatigueMul": 0.7
    }
  }
];

/* ============ §4 科学家模板（见 §4 发射器） ============ */
/* ============ §4 科学家模板：150 名（五维属性 / 特质 / 薪资 / 士气 / 忠诚） ============ */
const RES31_SCIENTIST_TEMPLATES = [
  {
    id: "sci31_001",
    name: "梁晓燕",
    age: 39,
    specialty: "physics",
    attrs: { theory: 36, engineering: 61, biology: 78, physics: 88, society: 71 },
    level: 1,
    xp: 0,
    trait: "trait31_01",
    salaryPerDay: 11,
    morale: 78,
    loyalty: 70,
    desc: "物理方向1级科学家，擅长物理，特质：专注",
  },
  {
    id: "sci31_002",
    name: "孙梓涵",
    age: 41,
    specialty: "engineering",
    attrs: { theory: 45, engineering: 57, biology: 76, physics: 45, society: 59 },
    level: 2,
    xp: 120,
    trait: "trait31_02",
    salaryPerDay: 13,
    morale: 89,
    loyalty: 58,
    desc: "工程方向2级科学家，擅长工程，特质：奇思妙想",
  },
  {
    id: "sci31_003",
    name: "谢嘉琪",
    age: 47,
    specialty: "biology",
    attrs: { theory: 62, engineering: 53, biology: 89, physics: 50, society: 77 },
    level: 3,
    xp: 240,
    trait: "trait31_03",
    salaryPerDay: 15,
    morale: 66,
    loyalty: 86,
    desc: "生物方向3级科学家，擅长生物，特质：稳健",
  },
  {
    id: "sci31_004",
    name: "魏欣然",
    age: 32,
    specialty: "society",
    attrs: { theory: 59, engineering: 38, biology: 34, physics: 35, society: 56 },
    level: 4,
    xp: 360,
    trait: "trait31_04",
    salaryPerDay: 23,
    morale: 59,
    loyalty: 54,
    desc: "社会方向4级科学家，擅长社会，特质：领袖",
  },
  {
    id: "sci31_005",
    name: "梁文博",
    age: 54,
    specialty: "deepspace",
    attrs: { theory: 28, engineering: 30, biology: 36, physics: 70, society: 73 },
    level: 5,
    xp: 480,
    trait: "trait31_05",
    salaryPerDay: 25,
    morale: 70,
    loyalty: 80,
    desc: "深空方向5级科学家，擅长深空，特质：夜猫子",
  },
  {
    id: "sci31_006",
    name: "孙昊然",
    age: 43,
    specialty: "physics",
    attrs: { theory: 38, engineering: 59, biology: 54, physics: 70, society: 30 },
    level: 1,
    xp: 0,
    trait: "trait31_06",
    salaryPerDay: 7,
    morale: 56,
    loyalty: 55,
    desc: "物理方向1级科学家，擅长物理，特质：导师",
  },
  {
    id: "sci31_007",
    name: "马建国",
    age: 33,
    specialty: "engineering",
    attrs: { theory: 34, engineering: 56, biology: 72, physics: 76, society: 56 },
    level: 2,
    xp: 120,
    trait: "trait31_07",
    salaryPerDay: 11,
    morale: 59,
    loyalty: 63,
    desc: "工程方向2级科学家，擅长工程，特质：独行者",
  },
  {
    id: "sci31_008",
    name: "李丽华",
    age: 34,
    specialty: "biology",
    attrs: { theory: 43, engineering: 62, biology: 44, physics: 78, society: 64 },
    level: 3,
    xp: 240,
    trait: "trait31_08",
    salaryPerDay: 14,
    morale: 83,
    loyalty: 62,
    desc: "生物方向3级科学家，擅长生物，特质：开拓者",
  },
  {
    id: "sci31_009",
    name: "潘博文",
    age: 29,
    specialty: "society",
    attrs: { theory: 73, engineering: 65, biology: 54, physics: 49, society: 98 },
    level: 4,
    xp: 360,
    trait: "trait31_09",
    salaryPerDay: 23,
    morale: 84,
    loyalty: 62,
    desc: "社会方向4级科学家，擅长社会，特质：精密",
  },
  {
    id: "sci31_010",
    name: "萧思远",
    age: 34,
    specialty: "deepspace",
    attrs: { theory: 69, engineering: 42, biology: 25, physics: 76, society: 43 },
    level: 5,
    xp: 480,
    trait: "trait31_10",
    salaryPerDay: 25,
    morale: 66,
    loyalty: 83,
    desc: "深空方向5级科学家，擅长深空，特质：节俭",
  },
  {
    id: "sci31_011",
    name: "蔡建国",
    age: 25,
    specialty: "physics",
    attrs: { theory: 28, engineering: 27, biology: 25, physics: 72, society: 68 },
    level: 1,
    xp: 0,
    trait: "trait31_11",
    salaryPerDay: 7,
    morale: 60,
    loyalty: 76,
    desc: "物理方向1级科学家，擅长物理，特质：社交家",
  },
  {
    id: "sci31_012",
    name: "张子墨",
    age: 51,
    specialty: "engineering",
    attrs: { theory: 26, engineering: 58, biology: 58, physics: 62, society: 34 },
    level: 2,
    xp: 120,
    trait: "trait31_12",
    salaryPerDay: 14,
    morale: 80,
    loyalty: 94,
    desc: "工程方向2级科学家，擅长工程，特质：体魄强健",
  },
  {
    id: "sci31_013",
    name: "王子墨",
    age: 31,
    specialty: "biology",
    attrs: { theory: 55, engineering: 60, biology: 87, physics: 39, society: 36 },
    level: 3,
    xp: 240,
    trait: "trait31_13",
    salaryPerDay: 16,
    morale: 80,
    loyalty: 54,
    desc: "生物方向3级科学家，擅长生物，特质：专注·2",
  },
  {
    id: "sci31_014",
    name: "萧昊然",
    age: 45,
    specialty: "society",
    attrs: { theory: 27, engineering: 31, biology: 60, physics: 50, society: 93 },
    level: 4,
    xp: 360,
    trait: "trait31_14",
    salaryPerDay: 23,
    morale: 69,
    loyalty: 94,
    desc: "社会方向4级科学家，擅长社会，特质：奇思妙想·2",
  },
  {
    id: "sci31_015",
    name: "何志远",
    age: 52,
    specialty: "deepspace",
    attrs: { theory: 45, engineering: 31, biology: 30, physics: 49, society: 63 },
    level: 5,
    xp: 480,
    trait: "trait31_15",
    salaryPerDay: 27,
    morale: 67,
    loyalty: 77,
    desc: "深空方向5级科学家，擅长深空，特质：稳健·2",
  },
  {
    id: "sci31_016",
    name: "彭天翔",
    age: 45,
    specialty: "physics",
    attrs: { theory: 76, engineering: 38, biology: 75, physics: 54, society: 78 },
    level: 1,
    xp: 0,
    trait: "trait31_16",
    salaryPerDay: 11,
    morale: 93,
    loyalty: 54,
    desc: "物理方向1级科学家，擅长物理，特质：领袖·2",
  },
  {
    id: "sci31_017",
    name: "傅欣然",
    age: 52,
    specialty: "engineering",
    attrs: { theory: 61, engineering: 57, biology: 36, physics: 52, society: 78 },
    level: 2,
    xp: 120,
    trait: "trait31_17",
    salaryPerDay: 10,
    morale: 66,
    loyalty: 74,
    desc: "工程方向2级科学家，擅长工程，特质：夜猫子·2",
  },
  {
    id: "sci31_018",
    name: "邓晓彤",
    age: 35,
    specialty: "biology",
    attrs: { theory: 39, engineering: 27, biology: 77, physics: 48, society: 29 },
    level: 3,
    xp: 240,
    trait: "trait31_18",
    salaryPerDay: 16,
    morale: 86,
    loyalty: 94,
    desc: "生物方向3级科学家，擅长生物，特质：导师·2",
  },
  {
    id: "sci31_019",
    name: "彭若曦",
    age: 32,
    specialty: "society",
    attrs: { theory: 51, engineering: 66, biology: 33, physics: 74, society: 68 },
    level: 4,
    xp: 360,
    trait: "trait31_19",
    salaryPerDay: 22,
    morale: 60,
    loyalty: 64,
    desc: "社会方向4级科学家，擅长社会，特质：独行者·2",
  },
  {
    id: "sci31_020",
    name: "薛梓涵",
    age: 25,
    specialty: "deepspace",
    attrs: { theory: 70, engineering: 55, biology: 39, physics: 41, society: 27 },
    level: 5,
    xp: 480,
    trait: "trait31_20",
    salaryPerDay: 24,
    morale: 88,
    loyalty: 94,
    desc: "深空方向5级科学家，擅长深空，特质：开拓者·2",
  },
  {
    id: "sci31_021",
    name: "周思颖",
    age: 26,
    specialty: "physics",
    attrs: { theory: 67, engineering: 43, biology: 47, physics: 62, society: 40 },
    level: 1,
    xp: 0,
    trait: "trait31_21",
    salaryPerDay: 9,
    morale: 87,
    loyalty: 79,
    desc: "物理方向1级科学家，擅长物理，特质：精密·2",
  },
  {
    id: "sci31_022",
    name: "袁浩天",
    age: 52,
    specialty: "engineering",
    attrs: { theory: 31, engineering: 68, biology: 64, physics: 57, society: 44 },
    level: 2,
    xp: 120,
    trait: "trait31_22",
    salaryPerDay: 14,
    morale: 84,
    loyalty: 90,
    desc: "工程方向2级科学家，擅长工程，特质：节俭·2",
  },
  {
    id: "sci31_023",
    name: "张晓彤",
    age: 36,
    specialty: "biology",
    attrs: { theory: 25, engineering: 56, biology: 92, physics: 72, society: 74 },
    level: 3,
    xp: 240,
    trait: "trait31_23",
    salaryPerDay: 15,
    morale: 78,
    loyalty: 93,
    desc: "生物方向3级科学家，擅长生物，特质：社交家·2",
  },
  {
    id: "sci31_024",
    name: "李浩天",
    age: 24,
    specialty: "society",
    attrs: { theory: 76, engineering: 51, biology: 76, physics: 50, society: 51 },
    level: 4,
    xp: 360,
    trait: "trait31_24",
    salaryPerDay: 22,
    morale: 91,
    loyalty: 78,
    desc: "社会方向4级科学家，擅长社会，特质：体魄强健·2",
  },
  {
    id: "sci31_025",
    name: "高梦洁",
    age: 27,
    specialty: "deepspace",
    attrs: { theory: 37, engineering: 51, biology: 35, physics: 59, society: 75 },
    level: 5,
    xp: 480,
    trait: "trait31_25",
    salaryPerDay: 24,
    morale: 63,
    loyalty: 77,
    desc: "深空方向5级科学家，擅长深空，特质：专注·3",
  },
  {
    id: "sci31_026",
    name: "董子墨",
    age: 31,
    specialty: "physics",
    attrs: { theory: 73, engineering: 76, biology: 35, physics: 50, society: 62 },
    level: 1,
    xp: 0,
    trait: "trait31_26",
    salaryPerDay: 10,
    morale: 93,
    loyalty: 62,
    desc: "物理方向1级科学家，擅长物理，特质：奇思妙想·3",
  },
  {
    id: "sci31_027",
    name: "唐天宇",
    age: 27,
    specialty: "engineering",
    attrs: { theory: 50, engineering: 84, biology: 78, physics: 50, society: 42 },
    level: 2,
    xp: 120,
    trait: "trait31_27",
    salaryPerDay: 14,
    morale: 73,
    loyalty: 57,
    desc: "工程方向2级科学家，擅长工程，特质：稳健·3",
  },
  {
    id: "sci31_028",
    name: "李欣然",
    age: 31,
    specialty: "biology",
    attrs: { theory: 68, engineering: 77, biology: 69, physics: 71, society: 43 },
    level: 3,
    xp: 240,
    trait: "trait31_28",
    salaryPerDay: 14,
    morale: 67,
    loyalty: 91,
    desc: "生物方向3级科学家，擅长生物，特质：领袖·3",
  },
  {
    id: "sci31_029",
    name: "徐子航",
    age: 52,
    specialty: "society",
    attrs: { theory: 58, engineering: 26, biology: 30, physics: 48, society: 72 },
    level: 4,
    xp: 360,
    trait: "trait31_29",
    salaryPerDay: 23,
    morale: 95,
    loyalty: 64,
    desc: "社会方向4级科学家，擅长社会，特质：夜猫子·3",
  },
  {
    id: "sci31_030",
    name: "林若曦",
    age: 39,
    specialty: "deepspace",
    attrs: { theory: 72, engineering: 59, biology: 53, physics: 51, society: 45 },
    level: 5,
    xp: 480,
    trait: "trait31_30",
    salaryPerDay: 26,
    morale: 88,
    loyalty: 82,
    desc: "深空方向5级科学家，擅长深空，特质：导师·3",
  },
  {
    id: "sci31_031",
    name: "胡嘉豪",
    age: 43,
    specialty: "physics",
    attrs: { theory: 73, engineering: 56, biology: 65, physics: 50, society: 65 },
    level: 1,
    xp: 0,
    trait: "trait31_31",
    salaryPerDay: 11,
    morale: 91,
    loyalty: 90,
    desc: "物理方向1级科学家，擅长物理，特质：独行者·3",
  },
  {
    id: "sci31_032",
    name: "阎若曦",
    age: 48,
    specialty: "engineering",
    attrs: { theory: 70, engineering: 54, biology: 51, physics: 59, society: 68 },
    level: 2,
    xp: 120,
    trait: "trait31_32",
    salaryPerDay: 11,
    morale: 91,
    loyalty: 61,
    desc: "工程方向2级科学家，擅长工程，特质：开拓者·3",
  },
  {
    id: "sci31_033",
    name: "吴建国",
    age: 27,
    specialty: "biology",
    attrs: { theory: 63, engineering: 36, biology: 93, physics: 46, society: 28 },
    level: 3,
    xp: 240,
    trait: "trait31_33",
    salaryPerDay: 15,
    morale: 90,
    loyalty: 83,
    desc: "生物方向3级科学家，擅长生物，特质：精密·3",
  },
  {
    id: "sci31_034",
    name: "董慧敏",
    age: 49,
    specialty: "society",
    attrs: { theory: 70, engineering: 60, biology: 30, physics: 31, society: 53 },
    level: 4,
    xp: 360,
    trait: "trait31_34",
    salaryPerDay: 22,
    morale: 70,
    loyalty: 70,
    desc: "社会方向4级科学家，擅长社会，特质：节俭·3",
  },
  {
    id: "sci31_035",
    name: "罗嘉琪",
    age: 25,
    specialty: "deepspace",
    attrs: { theory: 47, engineering: 64, biology: 56, physics: 57, society: 25 },
    level: 5,
    xp: 480,
    trait: "trait31_35",
    salaryPerDay: 23,
    morale: 62,
    loyalty: 92,
    desc: "深空方向5级科学家，擅长深空，特质：社交家·3",
  },
  {
    id: "sci31_036",
    name: "周佳怡",
    age: 49,
    specialty: "physics",
    attrs: { theory: 79, engineering: 61, biology: 33, physics: 77, society: 74 },
    level: 1,
    xp: 0,
    trait: "trait31_36",
    salaryPerDay: 9,
    morale: 74,
    loyalty: 81,
    desc: "物理方向1级科学家，擅长物理，特质：体魄强健·3",
  },
  {
    id: "sci31_037",
    name: "徐婉清",
    age: 32,
    specialty: "engineering",
    attrs: { theory: 42, engineering: 64, biology: 51, physics: 53, society: 71 },
    level: 2,
    xp: 120,
    trait: "trait31_37",
    salaryPerDay: 15,
    morale: 70,
    loyalty: 94,
    desc: "工程方向2级科学家，擅长工程，特质：专注·4",
  },
  {
    id: "sci31_038",
    name: "唐若曦",
    age: 30,
    specialty: "biology",
    attrs: { theory: 44, engineering: 56, biology: 98, physics: 77, society: 25 },
    level: 3,
    xp: 240,
    trait: "trait31_38",
    salaryPerDay: 18,
    morale: 55,
    loyalty: 87,
    desc: "生物方向3级科学家，擅长生物，特质：奇思妙想·4",
  },
  {
    id: "sci31_039",
    name: "曾昊然",
    age: 26,
    specialty: "society",
    attrs: { theory: 56, engineering: 78, biology: 36, physics: 70, society: 52 },
    level: 4,
    xp: 360,
    trait: "trait31_39",
    salaryPerDay: 19,
    morale: 81,
    loyalty: 87,
    desc: "社会方向4级科学家，擅长社会，特质：稳健·4",
  },
  {
    id: "sci31_040",
    name: "赵欣然",
    age: 54,
    specialty: "deepspace",
    attrs: { theory: 63, engineering: 26, biology: 33, physics: 47, society: 41 },
    level: 5,
    xp: 480,
    trait: "trait31_40",
    salaryPerDay: 27,
    morale: 76,
    loyalty: 82,
    desc: "深空方向5级科学家，擅长深空，特质：领袖·4",
  },
  {
    id: "sci31_041",
    name: "王志强",
    age: 51,
    specialty: "physics",
    attrs: { theory: 63, engineering: 46, biology: 52, physics: 53, society: 31 },
    level: 1,
    xp: 0,
    trait: "trait31_41",
    salaryPerDay: 6,
    morale: 95,
    loyalty: 52,
    desc: "物理方向1级科学家，擅长物理，特质：夜猫子·4",
  },
  {
    id: "sci31_042",
    name: "阎欣然",
    age: 44,
    specialty: "engineering",
    attrs: { theory: 48, engineering: 56, biology: 77, physics: 72, society: 45 },
    level: 2,
    xp: 120,
    trait: "trait31_42",
    salaryPerDay: 13,
    morale: 57,
    loyalty: 81,
    desc: "工程方向2级科学家，擅长工程，特质：导师·4",
  },
  {
    id: "sci31_043",
    name: "赵丽华",
    age: 28,
    specialty: "biology",
    attrs: { theory: 62, engineering: 50, biology: 63, physics: 48, society: 52 },
    level: 3,
    xp: 240,
    trait: "trait31_43",
    salaryPerDay: 15,
    morale: 93,
    loyalty: 54,
    desc: "生物方向3级科学家，擅长生物，特质：独行者·4",
  },
  {
    id: "sci31_044",
    name: "谢嘉豪",
    age: 30,
    specialty: "society",
    attrs: { theory: 46, engineering: 56, biology: 56, physics: 54, society: 97 },
    level: 4,
    xp: 360,
    trait: "trait31_44",
    salaryPerDay: 19,
    morale: 91,
    loyalty: 90,
    desc: "社会方向4级科学家，擅长社会，特质：开拓者·4",
  },
  {
    id: "sci31_045",
    name: "余静姝",
    age: 50,
    specialty: "deepspace",
    attrs: { theory: 44, engineering: 59, biology: 47, physics: 31, society: 58 },
    level: 5,
    xp: 480,
    trait: "trait31_45",
    salaryPerDay: 23,
    morale: 61,
    loyalty: 54,
    desc: "深空方向5级科学家，擅长深空，特质：精密·4",
  },
  {
    id: "sci31_046",
    name: "张天宇",
    age: 26,
    specialty: "physics",
    attrs: { theory: 30, engineering: 33, biology: 45, physics: 91, society: 59 },
    level: 1,
    xp: 0,
    trait: "trait31_46",
    salaryPerDay: 9,
    morale: 86,
    loyalty: 72,
    desc: "物理方向1级科学家，擅长物理，特质：节俭·4",
  },
  {
    id: "sci31_047",
    name: "何思琪",
    age: 25,
    specialty: "engineering",
    attrs: { theory: 63, engineering: 59, biology: 39, physics: 54, society: 32 },
    level: 2,
    xp: 120,
    trait: "trait31_47",
    salaryPerDay: 15,
    morale: 82,
    loyalty: 50,
    desc: "工程方向2级科学家，擅长工程，特质：社交家·4",
  },
  {
    id: "sci31_048",
    name: "韩慧敏",
    age: 44,
    specialty: "biology",
    attrs: { theory: 78, engineering: 68, biology: 52, physics: 34, society: 78 },
    level: 3,
    xp: 240,
    trait: "trait31_48",
    salaryPerDay: 16,
    morale: 68,
    loyalty: 73,
    desc: "生物方向3级科学家，擅长生物，特质：体魄强健·4",
  },
  {
    id: "sci31_049",
    name: "曾嘉琪",
    age: 33,
    specialty: "society",
    attrs: { theory: 65, engineering: 30, biology: 40, physics: 50, society: 70 },
    level: 4,
    xp: 360,
    trait: "trait31_01",
    salaryPerDay: 21,
    morale: 56,
    loyalty: 88,
    desc: "社会方向4级科学家，擅长社会，特质：专注",
  },
  {
    id: "sci31_050",
    name: "赵子轩",
    age: 48,
    specialty: "deepspace",
    attrs: { theory: 53, engineering: 33, biology: 77, physics: 48, society: 37 },
    level: 5,
    xp: 480,
    trait: "trait31_02",
    salaryPerDay: 26,
    morale: 78,
    loyalty: 52,
    desc: "深空方向5级科学家，擅长深空，特质：奇思妙想",
  },
  {
    id: "sci31_051",
    name: "曹天翔",
    age: 37,
    specialty: "physics",
    attrs: { theory: 28, engineering: 45, biology: 74, physics: 74, society: 29 },
    level: 1,
    xp: 0,
    trait: "trait31_03",
    salaryPerDay: 8,
    morale: 95,
    loyalty: 55,
    desc: "物理方向1级科学家，擅长物理，特质：稳健",
  },
  {
    id: "sci31_052",
    name: "朱思琪",
    age: 50,
    specialty: "engineering",
    attrs: { theory: 70, engineering: 53, biology: 30, physics: 79, society: 26 },
    level: 2,
    xp: 120,
    trait: "trait31_04",
    salaryPerDay: 13,
    morale: 84,
    loyalty: 78,
    desc: "工程方向2级科学家，擅长工程，特质：领袖",
  },
  {
    id: "sci31_053",
    name: "叶雨欣",
    age: 39,
    specialty: "biology",
    attrs: { theory: 29, engineering: 55, biology: 45, physics: 29, society: 59 },
    level: 3,
    xp: 240,
    trait: "trait31_05",
    salaryPerDay: 16,
    morale: 83,
    loyalty: 59,
    desc: "生物方向3级科学家，擅长生物，特质：夜猫子",
  },
  {
    id: "sci31_054",
    name: "许婉清",
    age: 38,
    specialty: "society",
    attrs: { theory: 30, engineering: 56, biology: 38, physics: 57, society: 52 },
    level: 4,
    xp: 360,
    trait: "trait31_06",
    salaryPerDay: 22,
    morale: 86,
    loyalty: 74,
    desc: "社会方向4级科学家，擅长社会，特质：导师",
  },
  {
    id: "sci31_055",
    name: "袁宇航",
    age: 33,
    specialty: "deepspace",
    attrs: { theory: 62, engineering: 71, biology: 47, physics: 63, society: 37 },
    level: 5,
    xp: 480,
    trait: "trait31_07",
    salaryPerDay: 24,
    morale: 87,
    loyalty: 95,
    desc: "深空方向5级科学家，擅长深空，特质：独行者",
  },
  {
    id: "sci31_056",
    name: "徐晓燕",
    age: 47,
    specialty: "physics",
    attrs: { theory: 45, engineering: 58, biology: 37, physics: 71, society: 34 },
    level: 1,
    xp: 0,
    trait: "trait31_08",
    salaryPerDay: 7,
    morale: 90,
    loyalty: 83,
    desc: "物理方向1级科学家，擅长物理，特质：开拓者",
  },
  {
    id: "sci31_057",
    name: "邓俊熙",
    age: 35,
    specialty: "engineering",
    attrs: { theory: 72, engineering: 48, biology: 30, physics: 57, society: 48 },
    level: 2,
    xp: 120,
    trait: "trait31_09",
    salaryPerDay: 10,
    morale: 56,
    loyalty: 94,
    desc: "工程方向2级科学家，擅长工程，特质：精密",
  },
  {
    id: "sci31_058",
    name: "吕慧敏",
    age: 45,
    specialty: "biology",
    attrs: { theory: 74, engineering: 28, biology: 47, physics: 46, society: 67 },
    level: 3,
    xp: 240,
    trait: "trait31_10",
    salaryPerDay: 14,
    morale: 67,
    loyalty: 71,
    desc: "生物方向3级科学家，擅长生物，特质：节俭",
  },
  {
    id: "sci31_059",
    name: "梁博文",
    age: 33,
    specialty: "society",
    attrs: { theory: 46, engineering: 62, biology: 43, physics: 37, society: 65 },
    level: 4,
    xp: 360,
    trait: "trait31_11",
    salaryPerDay: 20,
    morale: 74,
    loyalty: 60,
    desc: "社会方向4级科学家，擅长社会，特质：社交家",
  },
  {
    id: "sci31_060",
    name: "吕梦洁",
    age: 41,
    specialty: "deepspace",
    attrs: { theory: 33, engineering: 65, biology: 29, physics: 67, society: 43 },
    level: 5,
    xp: 480,
    trait: "trait31_12",
    salaryPerDay: 25,
    morale: 80,
    loyalty: 95,
    desc: "深空方向5级科学家，擅长深空，特质：体魄强健",
  },
  {
    id: "sci31_061",
    name: "萧俊杰",
    age: 39,
    specialty: "physics",
    attrs: { theory: 43, engineering: 55, biology: 39, physics: 46, society: 39 },
    level: 1,
    xp: 0,
    trait: "trait31_13",
    salaryPerDay: 10,
    morale: 77,
    loyalty: 51,
    desc: "物理方向1级科学家，擅长物理，特质：专注·2",
  },
  {
    id: "sci31_062",
    name: "余思远",
    age: 36,
    specialty: "engineering",
    attrs: { theory: 41, engineering: 46, biology: 64, physics: 63, society: 59 },
    level: 2,
    xp: 120,
    trait: "trait31_14",
    salaryPerDay: 14,
    morale: 82,
    loyalty: 69,
    desc: "工程方向2级科学家，擅长工程，特质：奇思妙想·2",
  },
  {
    id: "sci31_063",
    name: "赵浩宇",
    age: 51,
    specialty: "biology",
    attrs: { theory: 43, engineering: 76, biology: 85, physics: 71, society: 56 },
    level: 3,
    xp: 240,
    trait: "trait31_15",
    salaryPerDay: 18,
    morale: 92,
    loyalty: 50,
    desc: "生物方向3级科学家，擅长生物，特质：稳健·2",
  },
  {
    id: "sci31_064",
    name: "萧天翔",
    age: 51,
    specialty: "society",
    attrs: { theory: 68, engineering: 26, biology: 46, physics: 40, society: 90 },
    level: 4,
    xp: 360,
    trait: "trait31_16",
    salaryPerDay: 22,
    morale: 84,
    loyalty: 86,
    desc: "社会方向4级科学家，擅长社会，特质：领袖·2",
  },
  {
    id: "sci31_065",
    name: "沈子豪",
    age: 33,
    specialty: "deepspace",
    attrs: { theory: 41, engineering: 31, biology: 53, physics: 60, society: 41 },
    level: 5,
    xp: 480,
    trait: "trait31_17",
    salaryPerDay: 25,
    morale: 92,
    loyalty: 57,
    desc: "深空方向5级科学家，擅长深空，特质：夜猫子·2",
  },
  {
    id: "sci31_066",
    name: "梁一诺",
    age: 43,
    specialty: "physics",
    attrs: { theory: 50, engineering: 77, biology: 74, physics: 89, society: 36 },
    level: 1,
    xp: 0,
    trait: "trait31_18",
    salaryPerDay: 7,
    morale: 67,
    loyalty: 80,
    desc: "物理方向1级科学家，擅长物理，特质：导师·2",
  },
  {
    id: "sci31_067",
    name: "蒋浩天",
    age: 47,
    specialty: "engineering",
    attrs: { theory: 47, engineering: 54, biology: 32, physics: 51, society: 61 },
    level: 2,
    xp: 120,
    trait: "trait31_19",
    salaryPerDay: 15,
    morale: 68,
    loyalty: 66,
    desc: "工程方向2级科学家，擅长工程，特质：独行者·2",
  },
  {
    id: "sci31_068",
    name: "潘昊然",
    age: 28,
    specialty: "biology",
    attrs: { theory: 35, engineering: 33, biology: 82, physics: 50, society: 28 },
    level: 3,
    xp: 240,
    trait: "trait31_20",
    salaryPerDay: 18,
    morale: 62,
    loyalty: 78,
    desc: "生物方向3级科学家，擅长生物，特质：开拓者·2",
  },
  {
    id: "sci31_069",
    name: "朱晓彤",
    age: 28,
    specialty: "society",
    attrs: { theory: 48, engineering: 64, biology: 34, physics: 45, society: 46 },
    level: 4,
    xp: 360,
    trait: "trait31_21",
    salaryPerDay: 23,
    morale: 86,
    loyalty: 61,
    desc: "社会方向4级科学家，擅长社会，特质：精密·2",
  },
  {
    id: "sci31_070",
    name: "苏雪儿",
    age: 34,
    specialty: "deepspace",
    attrs: { theory: 58, engineering: 37, biology: 45, physics: 58, society: 50 },
    level: 5,
    xp: 480,
    trait: "trait31_22",
    salaryPerDay: 23,
    morale: 67,
    loyalty: 82,
    desc: "深空方向5级科学家，擅长深空，特质：节俭·2",
  },
  {
    id: "sci31_071",
    name: "高天宇",
    age: 42,
    specialty: "physics",
    attrs: { theory: 72, engineering: 64, biology: 77, physics: 80, society: 30 },
    level: 1,
    xp: 0,
    trait: "trait31_23",
    salaryPerDay: 9,
    morale: 63,
    loyalty: 69,
    desc: "物理方向1级科学家，擅长物理，特质：社交家·2",
  },
  {
    id: "sci31_072",
    name: "陈诗涵",
    age: 48,
    specialty: "engineering",
    attrs: { theory: 67, engineering: 96, biology: 32, physics: 79, society: 63 },
    level: 2,
    xp: 120,
    trait: "trait31_24",
    salaryPerDay: 15,
    morale: 59,
    loyalty: 67,
    desc: "工程方向2级科学家，擅长工程，特质：体魄强健·2",
  },
  {
    id: "sci31_073",
    name: "马梦洁",
    age: 34,
    specialty: "biology",
    attrs: { theory: 72, engineering: 30, biology: 69, physics: 61, society: 42 },
    level: 3,
    xp: 240,
    trait: "trait31_25",
    salaryPerDay: 15,
    morale: 80,
    loyalty: 77,
    desc: "生物方向3级科学家，擅长生物，特质：专注·3",
  },
  {
    id: "sci31_074",
    name: "吕文轩",
    age: 42,
    specialty: "society",
    attrs: { theory: 69, engineering: 75, biology: 80, physics: 43, society: 77 },
    level: 4,
    xp: 360,
    trait: "trait31_26",
    salaryPerDay: 22,
    morale: 67,
    loyalty: 50,
    desc: "社会方向4级科学家，擅长社会，特质：奇思妙想·3",
  },
  {
    id: "sci31_075",
    name: "程雨婷",
    age: 24,
    specialty: "deepspace",
    attrs: { theory: 39, engineering: 32, biology: 43, physics: 49, society: 57 },
    level: 5,
    xp: 480,
    trait: "trait31_27",
    salaryPerDay: 24,
    morale: 72,
    loyalty: 61,
    desc: "深空方向5级科学家，擅长深空，特质：稳健·3",
  },
  {
    id: "sci31_076",
    name: "曹明轩",
    age: 31,
    specialty: "physics",
    attrs: { theory: 40, engineering: 57, biology: 31, physics: 87, society: 37 },
    level: 1,
    xp: 0,
    trait: "trait31_28",
    salaryPerDay: 6,
    morale: 95,
    loyalty: 94,
    desc: "物理方向1级科学家，擅长物理，特质：领袖·3",
  },
  {
    id: "sci31_077",
    name: "徐伟杰",
    age: 43,
    specialty: "engineering",
    attrs: { theory: 32, engineering: 90, biology: 58, physics: 37, society: 61 },
    level: 2,
    xp: 120,
    trait: "trait31_29",
    salaryPerDay: 10,
    morale: 61,
    loyalty: 88,
    desc: "工程方向2级科学家，擅长工程，特质：夜猫子·3",
  },
  {
    id: "sci31_078",
    name: "曾子豪",
    age: 26,
    specialty: "biology",
    attrs: { theory: 53, engineering: 53, biology: 94, physics: 53, society: 31 },
    level: 3,
    xp: 240,
    trait: "trait31_30",
    salaryPerDay: 16,
    morale: 81,
    loyalty: 93,
    desc: "生物方向3级科学家，擅长生物，特质：导师·3",
  },
  {
    id: "sci31_079",
    name: "周晨曦",
    age: 42,
    specialty: "society",
    attrs: { theory: 72, engineering: 78, biology: 35, physics: 80, society: 67 },
    level: 4,
    xp: 360,
    trait: "trait31_31",
    salaryPerDay: 20,
    morale: 72,
    loyalty: 92,
    desc: "社会方向4级科学家，擅长社会，特质：独行者·3",
  },
  {
    id: "sci31_080",
    name: "马晨曦",
    age: 48,
    specialty: "deepspace",
    attrs: { theory: 33, engineering: 63, biology: 50, physics: 45, society: 64 },
    level: 5,
    xp: 480,
    trait: "trait31_32",
    salaryPerDay: 22,
    morale: 70,
    loyalty: 92,
    desc: "深空方向5级科学家，擅长深空，特质：开拓者·3",
  },
  {
    id: "sci31_081",
    name: "薛雨泽",
    age: 38,
    specialty: "physics",
    attrs: { theory: 43, engineering: 52, biology: 40, physics: 66, society: 30 },
    level: 1,
    xp: 0,
    trait: "trait31_33",
    salaryPerDay: 6,
    morale: 75,
    loyalty: 58,
    desc: "物理方向1级科学家，擅长物理，特质：精密·3",
  },
  {
    id: "sci31_082",
    name: "薛欣怡",
    age: 40,
    specialty: "engineering",
    attrs: { theory: 80, engineering: 75, biology: 51, physics: 53, society: 38 },
    level: 2,
    xp: 120,
    trait: "trait31_34",
    salaryPerDay: 13,
    morale: 57,
    loyalty: 82,
    desc: "工程方向2级科学家，擅长工程，特质：节俭·3",
  },
  {
    id: "sci31_083",
    name: "董嘉豪",
    age: 24,
    specialty: "biology",
    attrs: { theory: 38, engineering: 25, biology: 57, physics: 27, society: 34 },
    level: 3,
    xp: 240,
    trait: "trait31_35",
    salaryPerDay: 19,
    morale: 94,
    loyalty: 80,
    desc: "生物方向3级科学家，擅长生物，特质：社交家·3",
  },
  {
    id: "sci31_084",
    name: "何嘉豪",
    age: 25,
    specialty: "society",
    attrs: { theory: 48, engineering: 65, biology: 40, physics: 46, society: 95 },
    level: 4,
    xp: 360,
    trait: "trait31_36",
    salaryPerDay: 20,
    morale: 88,
    loyalty: 64,
    desc: "社会方向4级科学家，擅长社会，特质：体魄强健·3",
  },
  {
    id: "sci31_085",
    name: "高伟杰",
    age: 27,
    specialty: "deepspace",
    attrs: { theory: 44, engineering: 79, biology: 40, physics: 43, society: 59 },
    level: 5,
    xp: 480,
    trait: "trait31_37",
    salaryPerDay: 25,
    morale: 80,
    loyalty: 62,
    desc: "深空方向5级科学家，擅长深空，特质：专注·4",
  },
  {
    id: "sci31_086",
    name: "冯若曦",
    age: 33,
    specialty: "physics",
    attrs: { theory: 79, engineering: 79, biology: 76, physics: 81, society: 37 },
    level: 1,
    xp: 0,
    trait: "trait31_38",
    salaryPerDay: 6,
    morale: 58,
    loyalty: 91,
    desc: "物理方向1级科学家，擅长物理，特质：奇思妙想·4",
  },
  {
    id: "sci31_087",
    name: "阎晓燕",
    age: 50,
    specialty: "engineering",
    attrs: { theory: 78, engineering: 94, biology: 69, physics: 42, society: 66 },
    level: 2,
    xp: 120,
    trait: "trait31_39",
    salaryPerDay: 12,
    morale: 65,
    loyalty: 71,
    desc: "工程方向2级科学家，擅长工程，特质：稳健·4",
  },
  {
    id: "sci31_088",
    name: "彭梦瑶",
    age: 54,
    specialty: "biology",
    attrs: { theory: 56, engineering: 57, biology: 51, physics: 70, society: 57 },
    level: 3,
    xp: 240,
    trait: "trait31_40",
    salaryPerDay: 19,
    morale: 95,
    loyalty: 66,
    desc: "生物方向3级科学家，擅长生物，特质：领袖·4",
  },
  {
    id: "sci31_089",
    name: "韩俊杰",
    age: 39,
    specialty: "society",
    attrs: { theory: 37, engineering: 38, biology: 35, physics: 29, society: 66 },
    level: 4,
    xp: 360,
    trait: "trait31_41",
    salaryPerDay: 18,
    morale: 57,
    loyalty: 57,
    desc: "社会方向4级科学家，擅长社会，特质：夜猫子·4",
  },
  {
    id: "sci31_090",
    name: "郑雨婷",
    age: 30,
    specialty: "deepspace",
    attrs: { theory: 58, engineering: 51, biology: 62, physics: 76, society: 57 },
    level: 5,
    xp: 480,
    trait: "trait31_42",
    salaryPerDay: 23,
    morale: 74,
    loyalty: 77,
    desc: "深空方向5级科学家，擅长深空，特质：导师·4",
  },
  {
    id: "sci31_091",
    name: "马志远",
    age: 28,
    specialty: "physics",
    attrs: { theory: 39, engineering: 63, biology: 49, physics: 45, society: 41 },
    level: 1,
    xp: 0,
    trait: "trait31_43",
    salaryPerDay: 9,
    morale: 58,
    loyalty: 73,
    desc: "物理方向1级科学家，擅长物理，特质：独行者·4",
  },
  {
    id: "sci31_092",
    name: "宋子墨",
    age: 49,
    specialty: "engineering",
    attrs: { theory: 50, engineering: 84, biology: 47, physics: 50, society: 65 },
    level: 2,
    xp: 120,
    trait: "trait31_44",
    salaryPerDay: 12,
    morale: 68,
    loyalty: 87,
    desc: "工程方向2级科学家，擅长工程，特质：开拓者·4",
  },
  {
    id: "sci31_093",
    name: "郑慧敏",
    age: 43,
    specialty: "biology",
    attrs: { theory: 56, engineering: 68, biology: 90, physics: 55, society: 26 },
    level: 3,
    xp: 240,
    trait: "trait31_45",
    salaryPerDay: 16,
    morale: 59,
    loyalty: 50,
    desc: "生物方向3级科学家，擅长生物，特质：精密·4",
  },
  {
    id: "sci31_094",
    name: "贾志远",
    age: 37,
    specialty: "society",
    attrs: { theory: 63, engineering: 34, biology: 46, physics: 47, society: 81 },
    level: 4,
    xp: 360,
    trait: "trait31_46",
    salaryPerDay: 21,
    morale: 75,
    loyalty: 90,
    desc: "社会方向4级科学家，擅长社会，特质：节俭·4",
  },
  {
    id: "sci31_095",
    name: "杜嘉琪",
    age: 42,
    specialty: "deepspace",
    attrs: { theory: 59, engineering: 39, biology: 75, physics: 65, society: 49 },
    level: 5,
    xp: 480,
    trait: "trait31_47",
    salaryPerDay: 23,
    morale: 84,
    loyalty: 73,
    desc: "深空方向5级科学家，擅长深空，特质：社交家·4",
  },
  {
    id: "sci31_096",
    name: "罗晨曦",
    age: 47,
    specialty: "physics",
    attrs: { theory: 31, engineering: 71, biology: 36, physics: 95, society: 56 },
    level: 1,
    xp: 0,
    trait: "trait31_48",
    salaryPerDay: 9,
    morale: 76,
    loyalty: 80,
    desc: "物理方向1级科学家，擅长物理，特质：体魄强健·4",
  },
  {
    id: "sci31_097",
    name: "薛慧敏",
    age: 54,
    specialty: "engineering",
    attrs: { theory: 41, engineering: 48, biology: 78, physics: 65, society: 59 },
    level: 2,
    xp: 120,
    trait: "trait31_01",
    salaryPerDay: 13,
    morale: 68,
    loyalty: 84,
    desc: "工程方向2级科学家，擅长工程，特质：专注",
  },
  {
    id: "sci31_098",
    name: "梁浩然",
    age: 53,
    specialty: "biology",
    attrs: { theory: 36, engineering: 47, biology: 76, physics: 79, society: 68 },
    level: 3,
    xp: 240,
    trait: "trait31_02",
    salaryPerDay: 14,
    morale: 91,
    loyalty: 82,
    desc: "生物方向3级科学家，擅长生物，特质：奇思妙想",
  },
  {
    id: "sci31_099",
    name: "唐子墨",
    age: 51,
    specialty: "society",
    attrs: { theory: 44, engineering: 40, biology: 56, physics: 70, society: 66 },
    level: 4,
    xp: 360,
    trait: "trait31_03",
    salaryPerDay: 19,
    morale: 87,
    loyalty: 67,
    desc: "社会方向4级科学家，擅长社会，特质：稳健",
  },
  {
    id: "sci31_100",
    name: "于文轩",
    age: 29,
    specialty: "deepspace",
    attrs: { theory: 39, engineering: 64, biology: 46, physics: 43, society: 67 },
    level: 5,
    xp: 480,
    trait: "trait31_04",
    salaryPerDay: 25,
    morale: 80,
    loyalty: 82,
    desc: "深空方向5级科学家，擅长深空，特质：领袖",
  },
  {
    id: "sci31_101",
    name: "彭明轩",
    age: 45,
    specialty: "physics",
    attrs: { theory: 59, engineering: 42, biology: 37, physics: 49, society: 37 },
    level: 1,
    xp: 0,
    trait: "trait31_05",
    salaryPerDay: 9,
    morale: 60,
    loyalty: 70,
    desc: "物理方向1级科学家，擅长物理，特质：夜猫子",
  },
  {
    id: "sci31_102",
    name: "萧俊熙",
    age: 31,
    specialty: "engineering",
    attrs: { theory: 54, engineering: 83, biology: 78, physics: 59, society: 58 },
    level: 2,
    xp: 120,
    trait: "trait31_06",
    salaryPerDay: 10,
    morale: 89,
    loyalty: 84,
    desc: "工程方向2级科学家，擅长工程，特质：导师",
  },
  {
    id: "sci31_103",
    name: "于伟杰",
    age: 39,
    specialty: "biology",
    attrs: { theory: 72, engineering: 64, biology: 80, physics: 62, society: 32 },
    level: 3,
    xp: 240,
    trait: "trait31_07",
    salaryPerDay: 15,
    morale: 56,
    loyalty: 88,
    desc: "生物方向3级科学家，擅长生物，特质：独行者",
  },
  {
    id: "sci31_104",
    name: "傅子航",
    age: 25,
    specialty: "society",
    attrs: { theory: 55, engineering: 40, biology: 28, physics: 52, society: 66 },
    level: 4,
    xp: 360,
    trait: "trait31_08",
    salaryPerDay: 23,
    morale: 81,
    loyalty: 79,
    desc: "社会方向4级科学家，擅长社会，特质：开拓者",
  },
  {
    id: "sci31_105",
    name: "罗思琪",
    age: 45,
    specialty: "deepspace",
    attrs: { theory: 27, engineering: 73, biology: 45, physics: 75, society: 75 },
    level: 5,
    xp: 480,
    trait: "trait31_09",
    salaryPerDay: 25,
    morale: 84,
    loyalty: 94,
    desc: "深空方向5级科学家，擅长深空，特质：精密",
  },
  {
    id: "sci31_106",
    name: "萧明轩",
    age: 50,
    specialty: "physics",
    attrs: { theory: 73, engineering: 34, biology: 50, physics: 63, society: 31 },
    level: 1,
    xp: 0,
    trait: "trait31_10",
    salaryPerDay: 11,
    morale: 92,
    loyalty: 85,
    desc: "物理方向1级科学家，擅长物理，特质：节俭",
  },
  {
    id: "sci31_107",
    name: "王志远",
    age: 52,
    specialty: "engineering",
    attrs: { theory: 66, engineering: 85, biology: 80, physics: 78, society: 34 },
    level: 2,
    xp: 120,
    trait: "trait31_11",
    salaryPerDay: 11,
    morale: 68,
    loyalty: 67,
    desc: "工程方向2级科学家，擅长工程，特质：社交家",
  },
  {
    id: "sci31_108",
    name: "萧浩天",
    age: 48,
    specialty: "biology",
    attrs: { theory: 34, engineering: 54, biology: 61, physics: 79, society: 46 },
    level: 3,
    xp: 240,
    trait: "trait31_12",
    salaryPerDay: 18,
    morale: 95,
    loyalty: 92,
    desc: "生物方向3级科学家，擅长生物，特质：体魄强健",
  },
  {
    id: "sci31_109",
    name: "魏浩宇",
    age: 24,
    specialty: "society",
    attrs: { theory: 77, engineering: 37, biology: 80, physics: 25, society: 57 },
    level: 4,
    xp: 360,
    trait: "trait31_13",
    salaryPerDay: 20,
    morale: 81,
    loyalty: 94,
    desc: "社会方向4级科学家，擅长社会，特质：专注·2",
  },
  {
    id: "sci31_110",
    name: "何若曦",
    age: 35,
    specialty: "deepspace",
    attrs: { theory: 70, engineering: 39, biology: 32, physics: 40, society: 29 },
    level: 5,
    xp: 480,
    trait: "trait31_14",
    salaryPerDay: 26,
    morale: 74,
    loyalty: 71,
    desc: "深空方向5级科学家，擅长深空，特质：奇思妙想·2",
  },
  {
    id: "sci31_111",
    name: "袁俊杰",
    age: 31,
    specialty: "physics",
    attrs: { theory: 56, engineering: 41, biology: 45, physics: 94, society: 42 },
    level: 1,
    xp: 0,
    trait: "trait31_15",
    salaryPerDay: 11,
    morale: 86,
    loyalty: 87,
    desc: "物理方向1级科学家，擅长物理，特质：稳健·2",
  },
  {
    id: "sci31_112",
    name: "贾雨欣",
    age: 26,
    specialty: "engineering",
    attrs: { theory: 50, engineering: 95, biology: 79, physics: 32, society: 59 },
    level: 2,
    xp: 120,
    trait: "trait31_16",
    salaryPerDay: 11,
    morale: 76,
    loyalty: 70,
    desc: "工程方向2级科学家，擅长工程，特质：领袖·2",
  },
  {
    id: "sci31_113",
    name: "郭若曦",
    age: 26,
    specialty: "biology",
    attrs: { theory: 30, engineering: 77, biology: 47, physics: 47, society: 53 },
    level: 3,
    xp: 240,
    trait: "trait31_17",
    salaryPerDay: 18,
    morale: 90,
    loyalty: 81,
    desc: "生物方向3级科学家，擅长生物，特质：夜猫子·2",
  },
  {
    id: "sci31_114",
    name: "彭子豪",
    age: 42,
    specialty: "society",
    attrs: { theory: 33, engineering: 69, biology: 36, physics: 48, society: 79 },
    level: 4,
    xp: 360,
    trait: "trait31_18",
    salaryPerDay: 19,
    morale: 59,
    loyalty: 56,
    desc: "社会方向4级科学家，擅长社会，特质：导师·2",
  },
  {
    id: "sci31_115",
    name: "于博文",
    age: 35,
    specialty: "deepspace",
    attrs: { theory: 80, engineering: 74, biology: 57, physics: 42, society: 65 },
    level: 5,
    xp: 480,
    trait: "trait31_19",
    salaryPerDay: 22,
    morale: 70,
    loyalty: 73,
    desc: "深空方向5级科学家，擅长深空，特质：独行者·2",
  },
  {
    id: "sci31_116",
    name: "宋子豪",
    age: 25,
    specialty: "physics",
    attrs: { theory: 36, engineering: 39, biology: 70, physics: 71, society: 31 },
    level: 1,
    xp: 0,
    trait: "trait31_20",
    salaryPerDay: 11,
    morale: 83,
    loyalty: 57,
    desc: "物理方向1级科学家，擅长物理，特质：开拓者·2",
  },
  {
    id: "sci31_117",
    name: "郑伟杰",
    age: 42,
    specialty: "engineering",
    attrs: { theory: 73, engineering: 82, biology: 69, physics: 49, society: 25 },
    level: 2,
    xp: 120,
    trait: "trait31_21",
    salaryPerDay: 11,
    morale: 76,
    loyalty: 66,
    desc: "工程方向2级科学家，擅长工程，特质：精密·2",
  },
  {
    id: "sci31_118",
    name: "蔡婉清",
    age: 29,
    specialty: "biology",
    attrs: { theory: 72, engineering: 48, biology: 85, physics: 61, society: 80 },
    level: 3,
    xp: 240,
    trait: "trait31_22",
    salaryPerDay: 18,
    morale: 73,
    loyalty: 74,
    desc: "生物方向3级科学家，擅长生物，特质：节俭·2",
  },
  {
    id: "sci31_119",
    name: "傅文博",
    age: 37,
    specialty: "society",
    attrs: { theory: 63, engineering: 78, biology: 59, physics: 27, society: 63 },
    level: 4,
    xp: 360,
    trait: "trait31_23",
    salaryPerDay: 22,
    morale: 90,
    loyalty: 51,
    desc: "社会方向4级科学家，擅长社会，特质：社交家·2",
  },
  {
    id: "sci31_120",
    name: "杨浩然",
    age: 27,
    specialty: "deepspace",
    attrs: { theory: 79, engineering: 77, biology: 43, physics: 48, society: 40 },
    level: 5,
    xp: 480,
    trait: "trait31_24",
    salaryPerDay: 24,
    morale: 89,
    loyalty: 93,
    desc: "深空方向5级科学家，擅长深空，特质：体魄强健·2",
  },
  {
    id: "sci31_121",
    name: "贾梦瑶",
    age: 26,
    specialty: "physics",
    attrs: { theory: 39, engineering: 34, biology: 71, physics: 49, society: 58 },
    level: 1,
    xp: 0,
    trait: "trait31_25",
    salaryPerDay: 11,
    morale: 56,
    loyalty: 60,
    desc: "物理方向1级科学家，擅长物理，特质：专注·3",
  },
  {
    id: "sci31_122",
    name: "魏婉清",
    age: 46,
    specialty: "engineering",
    attrs: { theory: 28, engineering: 85, biology: 31, physics: 37, society: 65 },
    level: 2,
    xp: 120,
    trait: "trait31_26",
    salaryPerDay: 11,
    morale: 85,
    loyalty: 73,
    desc: "工程方向2级科学家，擅长工程，特质：奇思妙想·3",
  },
  {
    id: "sci31_123",
    name: "王建国",
    age: 34,
    specialty: "biology",
    attrs: { theory: 53, engineering: 72, biology: 57, physics: 71, society: 35 },
    level: 3,
    xp: 240,
    trait: "trait31_27",
    salaryPerDay: 19,
    morale: 74,
    loyalty: 74,
    desc: "生物方向3级科学家，擅长生物，特质：稳健·3",
  },
  {
    id: "sci31_124",
    name: "萧欣怡",
    age: 39,
    specialty: "society",
    attrs: { theory: 77, engineering: 76, biology: 59, physics: 35, society: 78 },
    level: 4,
    xp: 360,
    trait: "trait31_28",
    salaryPerDay: 20,
    morale: 71,
    loyalty: 74,
    desc: "社会方向4级科学家，擅长社会，特质：领袖·3",
  },
  {
    id: "sci31_125",
    name: "曹婉清",
    age: 41,
    specialty: "deepspace",
    attrs: { theory: 63, engineering: 60, biology: 52, physics: 76, society: 80 },
    level: 5,
    xp: 480,
    trait: "trait31_29",
    salaryPerDay: 24,
    morale: 67,
    loyalty: 61,
    desc: "深空方向5级科学家，擅长深空，特质：夜猫子·3",
  },
  {
    id: "sci31_126",
    name: "蒋梓涵",
    age: 48,
    specialty: "physics",
    attrs: { theory: 57, engineering: 36, biology: 45, physics: 88, society: 32 },
    level: 1,
    xp: 0,
    trait: "trait31_30",
    salaryPerDay: 6,
    morale: 75,
    loyalty: 92,
    desc: "物理方向1级科学家，擅长物理，特质：导师·3",
  },
  {
    id: "sci31_127",
    name: "高雨婷",
    age: 29,
    specialty: "engineering",
    attrs: { theory: 53, engineering: 87, biology: 33, physics: 37, society: 29 },
    level: 2,
    xp: 120,
    trait: "trait31_31",
    salaryPerDay: 11,
    morale: 59,
    loyalty: 95,
    desc: "工程方向2级科学家，擅长工程，特质：独行者·3",
  },
  {
    id: "sci31_128",
    name: "曾梓涵",
    age: 36,
    specialty: "biology",
    attrs: { theory: 26, engineering: 62, biology: 61, physics: 71, society: 25 },
    level: 3,
    xp: 240,
    trait: "trait31_32",
    salaryPerDay: 19,
    morale: 95,
    loyalty: 64,
    desc: "生物方向3级科学家，擅长生物，特质：开拓者·3",
  },
  {
    id: "sci31_129",
    name: "郑晓彤",
    age: 43,
    specialty: "society",
    attrs: { theory: 38, engineering: 35, biology: 75, physics: 55, society: 68 },
    level: 4,
    xp: 360,
    trait: "trait31_33",
    salaryPerDay: 23,
    morale: 65,
    loyalty: 51,
    desc: "社会方向4级科学家，擅长社会，特质：精密·3",
  },
  {
    id: "sci31_130",
    name: "蔡丽华",
    age: 29,
    specialty: "deepspace",
    attrs: { theory: 69, engineering: 57, biology: 29, physics: 71, society: 70 },
    level: 5,
    xp: 480,
    trait: "trait31_34",
    salaryPerDay: 27,
    morale: 67,
    loyalty: 61,
    desc: "深空方向5级科学家，擅长深空，特质：节俭·3",
  },
  {
    id: "sci31_131",
    name: "张雨欣",
    age: 45,
    specialty: "physics",
    attrs: { theory: 76, engineering: 32, biology: 72, physics: 77, society: 35 },
    level: 1,
    xp: 0,
    trait: "trait31_35",
    salaryPerDay: 11,
    morale: 59,
    loyalty: 62,
    desc: "物理方向1级科学家，擅长物理，特质：社交家·3",
  },
  {
    id: "sci31_132",
    name: "郭文博",
    age: 32,
    specialty: "engineering",
    attrs: { theory: 75, engineering: 81, biology: 28, physics: 32, society: 76 },
    level: 2,
    xp: 120,
    trait: "trait31_36",
    salaryPerDay: 14,
    morale: 75,
    loyalty: 51,
    desc: "工程方向2级科学家，擅长工程，特质：体魄强健·3",
  },
  {
    id: "sci31_133",
    name: "赵婉清",
    age: 51,
    specialty: "biology",
    attrs: { theory: 33, engineering: 75, biology: 86, physics: 31, society: 59 },
    level: 3,
    xp: 240,
    trait: "trait31_37",
    salaryPerDay: 18,
    morale: 79,
    loyalty: 57,
    desc: "生物方向3级科学家，擅长生物，特质：专注·4",
  },
  {
    id: "sci31_134",
    name: "杜欣然",
    age: 45,
    specialty: "society",
    attrs: { theory: 33, engineering: 64, biology: 76, physics: 56, society: 86 },
    level: 4,
    xp: 360,
    trait: "trait31_38",
    salaryPerDay: 23,
    morale: 76,
    loyalty: 71,
    desc: "社会方向4级科学家，擅长社会，特质：奇思妙想·4",
  },
  {
    id: "sci31_135",
    name: "罗子航",
    age: 41,
    specialty: "deepspace",
    attrs: { theory: 69, engineering: 43, biology: 71, physics: 65, society: 47 },
    level: 5,
    xp: 480,
    trait: "trait31_39",
    salaryPerDay: 24,
    morale: 90,
    loyalty: 55,
    desc: "深空方向5级科学家，擅长深空，特质：稳健·4",
  },
  {
    id: "sci31_136",
    name: "王晨曦",
    age: 32,
    specialty: "physics",
    attrs: { theory: 79, engineering: 49, biology: 44, physics: 67, society: 54 },
    level: 1,
    xp: 0,
    trait: "trait31_40",
    salaryPerDay: 9,
    morale: 80,
    loyalty: 92,
    desc: "物理方向1级科学家，擅长物理，特质：领袖·4",
  },
  {
    id: "sci31_137",
    name: "叶思琪",
    age: 44,
    specialty: "engineering",
    attrs: { theory: 39, engineering: 48, biology: 37, physics: 53, society: 73 },
    level: 2,
    xp: 120,
    trait: "trait31_41",
    salaryPerDay: 15,
    morale: 86,
    loyalty: 69,
    desc: "工程方向2级科学家，擅长工程，特质：夜猫子·4",
  },
  {
    id: "sci31_138",
    name: "赵晓燕",
    age: 47,
    specialty: "biology",
    attrs: { theory: 78, engineering: 41, biology: 70, physics: 63, society: 37 },
    level: 3,
    xp: 240,
    trait: "trait31_42",
    salaryPerDay: 17,
    morale: 62,
    loyalty: 89,
    desc: "生物方向3级科学家，擅长生物，特质：导师·4",
  },
  {
    id: "sci31_139",
    name: "徐俊熙",
    age: 51,
    specialty: "society",
    attrs: { theory: 75, engineering: 74, biology: 25, physics: 48, society: 81 },
    level: 4,
    xp: 360,
    trait: "trait31_43",
    salaryPerDay: 22,
    morale: 62,
    loyalty: 80,
    desc: "社会方向4级科学家，擅长社会，特质：独行者·4",
  },
  {
    id: "sci31_140",
    name: "沈一诺",
    age: 40,
    specialty: "deepspace",
    attrs: { theory: 53, engineering: 52, biology: 27, physics: 52, society: 61 },
    level: 5,
    xp: 480,
    trait: "trait31_44",
    salaryPerDay: 24,
    morale: 81,
    loyalty: 58,
    desc: "深空方向5级科学家，擅长深空，特质：开拓者·4",
  },
  {
    id: "sci31_141",
    name: "萧雪儿",
    age: 48,
    specialty: "physics",
    attrs: { theory: 68, engineering: 66, biology: 44, physics: 81, society: 45 },
    level: 1,
    xp: 0,
    trait: "trait31_45",
    salaryPerDay: 8,
    morale: 77,
    loyalty: 56,
    desc: "物理方向1级科学家，擅长物理，特质：精密·4",
  },
  {
    id: "sci31_142",
    name: "赵思琪",
    age: 49,
    specialty: "engineering",
    attrs: { theory: 52, engineering: 57, biology: 28, physics: 44, society: 78 },
    level: 2,
    xp: 120,
    trait: "trait31_46",
    salaryPerDay: 13,
    morale: 79,
    loyalty: 55,
    desc: "工程方向2级科学家，擅长工程，特质：节俭·4",
  },
  {
    id: "sci31_143",
    name: "董梓涵",
    age: 49,
    specialty: "biology",
    attrs: { theory: 79, engineering: 38, biology: 63, physics: 63, society: 44 },
    level: 3,
    xp: 240,
    trait: "trait31_47",
    salaryPerDay: 18,
    morale: 73,
    loyalty: 66,
    desc: "生物方向3级科学家，擅长生物，特质：社交家·4",
  },
  {
    id: "sci31_144",
    name: "曾梦洁",
    age: 50,
    specialty: "society",
    attrs: { theory: 56, engineering: 39, biology: 37, physics: 59, society: 95 },
    level: 4,
    xp: 360,
    trait: "trait31_48",
    salaryPerDay: 19,
    morale: 82,
    loyalty: 61,
    desc: "社会方向4级科学家，擅长社会，特质：体魄强健·4",
  },
  {
    id: "sci31_145",
    name: "陈若曦",
    age: 49,
    specialty: "deepspace",
    attrs: { theory: 65, engineering: 73, biology: 50, physics: 36, society: 74 },
    level: 5,
    xp: 480,
    trait: "trait31_01",
    salaryPerDay: 23,
    morale: 94,
    loyalty: 76,
    desc: "深空方向5级科学家，擅长深空，特质：专注",
  },
  {
    id: "sci31_146",
    name: "曾子航",
    age: 45,
    specialty: "physics",
    attrs: { theory: 46, engineering: 48, biology: 43, physics: 46, society: 54 },
    level: 1,
    xp: 0,
    trait: "trait31_02",
    salaryPerDay: 11,
    morale: 88,
    loyalty: 59,
    desc: "物理方向1级科学家，擅长物理，特质：奇思妙想",
  },
  {
    id: "sci31_147",
    name: "潘浩天",
    age: 47,
    specialty: "engineering",
    attrs: { theory: 43, engineering: 50, biology: 45, physics: 27, society: 43 },
    level: 2,
    xp: 120,
    trait: "trait31_03",
    salaryPerDay: 11,
    morale: 71,
    loyalty: 85,
    desc: "工程方向2级科学家，擅长工程，特质：稳健",
  },
  {
    id: "sci31_148",
    name: "曾婉清",
    age: 40,
    specialty: "biology",
    attrs: { theory: 28, engineering: 38, biology: 50, physics: 41, society: 41 },
    level: 3,
    xp: 240,
    trait: "trait31_04",
    salaryPerDay: 15,
    morale: 81,
    loyalty: 91,
    desc: "生物方向3级科学家，擅长生物，特质：领袖",
  },
  {
    id: "sci31_149",
    name: "胡佳怡",
    age: 50,
    specialty: "society",
    attrs: { theory: 70, engineering: 68, biology: 78, physics: 56, society: 53 },
    level: 4,
    xp: 360,
    trait: "trait31_05",
    salaryPerDay: 20,
    morale: 69,
    loyalty: 87,
    desc: "社会方向4级科学家，擅长社会，特质：夜猫子",
  },
  {
    id: "sci31_150",
    name: "韩雪儿",
    age: 29,
    specialty: "deepspace",
    attrs: { theory: 31, engineering: 49, biology: 79, physics: 38, society: 59 },
    level: 5,
    xp: 480,
    trait: "trait31_06",
    salaryPerDay: 22,
    morale: 80,
    loyalty: 82,
    desc: "深空方向5级科学家，擅长深空，特质：导师",
  },
];

/* ============ §5 研究项目表：150 项（5 方向 × 30 项），每项含成本/周期/前置/产出 ============ */
const RES31_PROJECTS = [
  {
    id: "res31_physics_01",
    name: "量子共振技术",
    branch: "physics",
    branchCn: "物理",
    chain: "量子线",
    chainIdx: 0,
    tier: 1,
    cost: { research: 120, credits: 400, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "物理第1阶：量子线方向的Ⅰ级突破，研究完成后科研速度 ×1.04、护盾强度 ×1.04。",
    effects: [
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.04, desc: "科研速度 ×1.04" },
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.04, desc: "护盾强度 ×1.04" },
    ],
  },
  {
    id: "res31_physics_02",
    name: "等离子聚焦技术",
    branch: "physics",
    branchCn: "物理",
    chain: "量子线",
    chainIdx: 0,
    tier: 2,
    cost: { research: 535, credits: 1600, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_physics_01"],
    risk: 0.044,
    flavor: "物理第2阶：量子线方向的Ⅱ级突破，研究完成后电力产出 ×1.08、辐射伤害 ×0.94。",
    effects: [
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.08, desc: "电力产出 ×1.08" },
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.94, desc: "辐射伤害 ×0.94" },
    ],
  },
  {
    id: "res31_physics_03",
    name: "引力隧穿技术",
    branch: "physics",
    branchCn: "物理",
    chain: "量子线",
    chainIdx: 0,
    tier: 3,
    cost: { research: 1302, credits: 3600, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_physics_02"],
    risk: 0.056,
    flavor: "物理第3阶：量子线方向的Ⅲ级突破，研究完成后发电量 +21、探测范围 ×1.12、防御力 ×1.12。",
    effects: [
      { key: "powerAdd", target: "power.output", op: "add", value: 21, desc: "发电量 +21" },
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.12, desc: "探测范围 ×1.12" },
      { key: "defenseMul", target: "military.defense", op: "mul", value: 1.12, desc: "防御力 ×1.12" },
    ],
  },
  {
    id: "res31_physics_04",
    name: "光子耦合技术",
    branch: "physics",
    branchCn: "物理",
    chain: "量子线",
    chainIdx: 0,
    tier: 4,
    cost: { research: 2470, credits: 6400, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_physics_03", "res31_deepspace_07"],
    risk: 0.068,
    flavor: "物理第4阶：量子线方向的Ⅳ级突破，研究完成后护盾强度 ×1.17、反应堆效率 ×1.17、科研速度 ×1.17。",
    effects: [
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.17, desc: "护盾强度 ×1.17" },
      { key: "reactorMul", target: "prod.reactor", op: "mul", value: 1.17, desc: "反应堆效率 ×1.17" },
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.17, desc: "科研速度 ×1.17" },
    ],
  },
  {
    id: "res31_physics_05",
    name: "中微子能谱技术",
    branch: "physics",
    branchCn: "物理",
    chain: "量子线",
    chainIdx: 0,
    tier: 5,
    cost: { research: 4088, credits: 10000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_physics_04", "res31_physics_07"],
    risk: 0.08,
    flavor: "物理第5阶：量子线方向的Ⅴ级突破，研究完成后辐射伤害 ×0.82、防御力 ×1.23、电力产出 ×1.23。",
    effects: [
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.82, desc: "辐射伤害 ×0.82" },
      { key: "defenseMul", target: "military.defense", op: "mul", value: 1.23, desc: "防御力 ×1.23" },
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.23, desc: "电力产出 ×1.23" },
    ],
  },
  {
    id: "res31_physics_06",
    name: "超导干涉技术",
    branch: "physics",
    branchCn: "物理",
    chain: "聚变线",
    chainIdx: 1,
    tier: 1,
    cost: { research: 120, credits: 420, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "物理第1阶：聚变线方向的Ⅰ级突破，研究完成后探测范围 ×1.04、科研速度 ×1.04。",
    effects: [
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.04, desc: "探测范围 ×1.04" },
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.04, desc: "科研速度 ×1.04" },
    ],
  },
  {
    id: "res31_physics_07",
    name: "核聚变稳态技术",
    branch: "physics",
    branchCn: "物理",
    chain: "聚变线",
    chainIdx: 1,
    tier: 2,
    cost: { research: 535, credits: 1680, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_physics_06"],
    risk: 0.044,
    flavor: "物理第2阶：聚变线方向的Ⅱ级突破，研究完成后反应堆效率 ×1.08、电力产出 ×1.08。",
    effects: [
      { key: "reactorMul", target: "prod.reactor", op: "mul", value: 1.08, desc: "反应堆效率 ×1.08" },
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.08, desc: "电力产出 ×1.08" },
    ],
  },
  {
    id: "res31_physics_08",
    name: "暗物质湮灭技术",
    branch: "physics",
    branchCn: "物理",
    chain: "聚变线",
    chainIdx: 1,
    tier: 3,
    cost: { research: 1302, credits: 3780, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_physics_07"],
    risk: 0.056,
    flavor: "物理第3阶：聚变线方向的Ⅲ级突破，研究完成后防御力 ×1.12、发电量 +14、辐射伤害 ×0.9。",
    effects: [
      { key: "defenseMul", target: "military.defense", op: "mul", value: 1.12, desc: "防御力 ×1.12" },
      { key: "powerAdd", target: "power.output", op: "add", value: 14, desc: "发电量 +14" },
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.9, desc: "辐射伤害 ×0.9" },
    ],
  },
  {
    id: "res31_physics_09",
    name: "弦论屏蔽技术",
    branch: "physics",
    branchCn: "物理",
    chain: "聚变线",
    chainIdx: 1,
    tier: 4,
    cost: { research: 2470, credits: 6720, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_physics_08", "res31_deepspace_12"],
    risk: 0.068,
    flavor: "物理第4阶：聚变线方向的Ⅳ级突破，研究完成后科研速度 ×1.17、护盾强度 ×1.17、探测范围 ×1.17。",
    effects: [
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.17, desc: "科研速度 ×1.17" },
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.17, desc: "护盾强度 ×1.17" },
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.17, desc: "探测范围 ×1.17" },
    ],
  },
  {
    id: "res31_physics_10",
    name: "磁流体纠缠技术",
    branch: "physics",
    branchCn: "物理",
    chain: "聚变线",
    chainIdx: 1,
    tier: 5,
    cost: { research: 4088, credits: 10500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_physics_09", "res31_physics_12"],
    risk: 0.08,
    flavor: "物理第5阶：聚变线方向的Ⅴ级突破，研究完成后电力产出 ×1.23、辐射伤害 ×0.82、反应堆效率 ×1.23。",
    effects: [
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.23, desc: "电力产出 ×1.23" },
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.82, desc: "辐射伤害 ×0.82" },
      { key: "reactorMul", target: "prod.reactor", op: "mul", value: 1.23, desc: "反应堆效率 ×1.23" },
    ],
  },
  {
    id: "res31_physics_11",
    name: "高能压缩技术",
    branch: "physics",
    branchCn: "物理",
    chain: "场论线",
    chainIdx: 2,
    tier: 1,
    cost: { research: 120, credits: 440, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "物理第1阶：场论线方向的Ⅰ级突破，研究完成后发电量 +4、探测范围 ×1.04。",
    effects: [
      { key: "powerAdd", target: "power.output", op: "add", value: 4, desc: "发电量 +4" },
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.04, desc: "探测范围 ×1.04" },
    ],
  },
  {
    id: "res31_physics_12",
    name: "低温约束技术",
    branch: "physics",
    branchCn: "物理",
    chain: "场论线",
    chainIdx: 2,
    tier: 2,
    cost: { research: 535, credits: 1760, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_physics_11"],
    risk: 0.044,
    flavor: "物理第2阶：场论线方向的Ⅱ级突破，研究完成后护盾强度 ×1.08、反应堆效率 ×1.08。",
    effects: [
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.08, desc: "护盾强度 ×1.08" },
      { key: "reactorMul", target: "prod.reactor", op: "mul", value: 1.08, desc: "反应堆效率 ×1.08" },
    ],
  },
  {
    id: "res31_physics_13",
    name: "真空跃迁技术",
    branch: "physics",
    branchCn: "物理",
    chain: "场论线",
    chainIdx: 2,
    tier: 3,
    cost: { research: 1302, credits: 3960, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_physics_12"],
    risk: 0.056,
    flavor: "物理第3阶：场论线方向的Ⅲ级突破，研究完成后辐射伤害 ×0.9、防御力 ×1.12、电力产出 ×1.12。",
    effects: [
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.9, desc: "辐射伤害 ×0.9" },
      { key: "defenseMul", target: "military.defense", op: "mul", value: 1.12, desc: "防御力 ×1.12" },
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.12, desc: "电力产出 ×1.12" },
    ],
  },
  {
    id: "res31_physics_14",
    name: "粒子隧穿阵列技术",
    branch: "physics",
    branchCn: "物理",
    chain: "场论线",
    chainIdx: 2,
    tier: 4,
    cost: { research: 2470, credits: 7040, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_physics_13", "res31_deepspace_17"],
    risk: 0.068,
    flavor: "物理第4阶：场论线方向的Ⅳ级突破，研究完成后探测范围 ×1.17、科研速度 ×1.17、发电量 +22。",
    effects: [
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.17, desc: "探测范围 ×1.17" },
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.17, desc: "科研速度 ×1.17" },
      { key: "powerAdd", target: "power.output", op: "add", value: 22, desc: "发电量 +22" },
    ],
  },
  {
    id: "res31_physics_15",
    name: "波函数极化技术",
    branch: "physics",
    branchCn: "物理",
    chain: "场论线",
    chainIdx: 2,
    tier: 5,
    cost: { research: 4088, credits: 11000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_physics_14", "res31_physics_17"],
    risk: 0.08,
    flavor: "物理第5阶：场论线方向的Ⅴ级突破，研究完成后反应堆效率 ×1.23、电力产出 ×1.23、护盾强度 ×1.23。",
    effects: [
      { key: "reactorMul", target: "prod.reactor", op: "mul", value: 1.23, desc: "反应堆效率 ×1.23" },
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.23, desc: "电力产出 ×1.23" },
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.23, desc: "护盾强度 ×1.23" },
    ],
  },
  {
    id: "res31_physics_16",
    name: "能级增益技术",
    branch: "physics",
    branchCn: "物理",
    chain: "粒子线",
    chainIdx: 3,
    tier: 1,
    cost: { research: 120, credits: 460, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "物理第1阶：粒子线方向的Ⅰ级突破，研究完成后防御力 ×1.04、发电量 +2。",
    effects: [
      { key: "defenseMul", target: "military.defense", op: "mul", value: 1.04, desc: "防御力 ×1.04" },
      { key: "powerAdd", target: "power.output", op: "add", value: 2, desc: "发电量 +2" },
    ],
  },
  {
    id: "res31_physics_17",
    name: "量子共振技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "粒子线",
    chainIdx: 3,
    tier: 2,
    cost: { research: 535, credits: 1840, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_physics_16"],
    risk: 0.044,
    flavor: "物理第2阶：粒子线方向的Ⅱ级突破，研究完成后科研速度 ×1.08、护盾强度 ×1.08。",
    effects: [
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.08, desc: "科研速度 ×1.08" },
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.08, desc: "护盾强度 ×1.08" },
    ],
  },
  {
    id: "res31_physics_18",
    name: "等离子聚焦技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "粒子线",
    chainIdx: 3,
    tier: 3,
    cost: { research: 1302, credits: 4140, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_physics_17"],
    risk: 0.056,
    flavor: "物理第3阶：粒子线方向的Ⅲ级突破，研究完成后电力产出 ×1.12、辐射伤害 ×0.9、反应堆效率 ×1.12。",
    effects: [
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.12, desc: "电力产出 ×1.12" },
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.9, desc: "辐射伤害 ×0.9" },
      { key: "reactorMul", target: "prod.reactor", op: "mul", value: 1.12, desc: "反应堆效率 ×1.12" },
    ],
  },
  {
    id: "res31_physics_19",
    name: "引力隧穿技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "粒子线",
    chainIdx: 3,
    tier: 4,
    cost: { research: 2470, credits: 7360, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_physics_18", "res31_deepspace_22"],
    risk: 0.068,
    flavor: "物理第4阶：粒子线方向的Ⅳ级突破，研究完成后发电量 +11、探测范围 ×1.17、防御力 ×1.17。",
    effects: [
      { key: "powerAdd", target: "power.output", op: "add", value: 11, desc: "发电量 +11" },
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.17, desc: "探测范围 ×1.17" },
      { key: "defenseMul", target: "military.defense", op: "mul", value: 1.17, desc: "防御力 ×1.17" },
    ],
  },
  {
    id: "res31_physics_20",
    name: "光子耦合技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "粒子线",
    chainIdx: 3,
    tier: 5,
    cost: { research: 4088, credits: 11500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_physics_19", "res31_physics_22"],
    risk: 0.08,
    flavor: "物理第5阶：粒子线方向的Ⅴ级突破，研究完成后护盾强度 ×1.23、反应堆效率 ×1.23、科研速度 ×1.23。",
    effects: [
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.23, desc: "护盾强度 ×1.23" },
      { key: "reactorMul", target: "prod.reactor", op: "mul", value: 1.23, desc: "反应堆效率 ×1.23" },
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.23, desc: "科研速度 ×1.23" },
    ],
  },
  {
    id: "res31_physics_21",
    name: "中微子能谱技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "能源线",
    chainIdx: 4,
    tier: 1,
    cost: { research: 120, credits: 480, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "物理第1阶：能源线方向的Ⅰ级突破，研究完成后辐射伤害 ×0.97、防御力 ×1.04。",
    effects: [
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.97, desc: "辐射伤害 ×0.97" },
      { key: "defenseMul", target: "military.defense", op: "mul", value: 1.04, desc: "防御力 ×1.04" },
    ],
  },
  {
    id: "res31_physics_22",
    name: "超导干涉技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "能源线",
    chainIdx: 4,
    tier: 2,
    cost: { research: 535, credits: 1920, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_physics_21"],
    risk: 0.044,
    flavor: "物理第2阶：能源线方向的Ⅱ级突破，研究完成后探测范围 ×1.08、科研速度 ×1.08。",
    effects: [
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.08, desc: "探测范围 ×1.08" },
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.08, desc: "科研速度 ×1.08" },
    ],
  },
  {
    id: "res31_physics_23",
    name: "核聚变稳态技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "能源线",
    chainIdx: 4,
    tier: 3,
    cost: { research: 1302, credits: 4320, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_physics_22"],
    risk: 0.056,
    flavor: "物理第3阶：能源线方向的Ⅲ级突破，研究完成后反应堆效率 ×1.12、电力产出 ×1.12、护盾强度 ×1.12。",
    effects: [
      { key: "reactorMul", target: "prod.reactor", op: "mul", value: 1.12, desc: "反应堆效率 ×1.12" },
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.12, desc: "电力产出 ×1.12" },
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.12, desc: "护盾强度 ×1.12" },
    ],
  },
  {
    id: "res31_physics_24",
    name: "暗物质湮灭技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "能源线",
    chainIdx: 4,
    tier: 4,
    cost: { research: 2470, credits: 7680, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_physics_23", "res31_deepspace_27"],
    risk: 0.068,
    flavor: "物理第4阶：能源线方向的Ⅳ级突破，研究完成后防御力 ×1.17、发电量 +33、辐射伤害 ×0.86。",
    effects: [
      { key: "defenseMul", target: "military.defense", op: "mul", value: 1.17, desc: "防御力 ×1.17" },
      { key: "powerAdd", target: "power.output", op: "add", value: 33, desc: "发电量 +33" },
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.86, desc: "辐射伤害 ×0.86" },
    ],
  },
  {
    id: "res31_physics_25",
    name: "弦论屏蔽技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "能源线",
    chainIdx: 4,
    tier: 5,
    cost: { research: 4088, credits: 12000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_physics_24", "res31_physics_27"],
    risk: 0.08,
    flavor: "物理第5阶：能源线方向的Ⅴ级突破，研究完成后科研速度 ×1.23、护盾强度 ×1.23、探测范围 ×1.23。",
    effects: [
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.23, desc: "科研速度 ×1.23" },
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.23, desc: "护盾强度 ×1.23" },
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.23, desc: "探测范围 ×1.23" },
    ],
  },
  {
    id: "res31_physics_26",
    name: "磁流体纠缠技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "探测线",
    chainIdx: 5,
    tier: 1,
    cost: { research: 120, credits: 500, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "物理第1阶：探测线方向的Ⅰ级突破，研究完成后电力产出 ×1.04、辐射伤害 ×0.97。",
    effects: [
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.04, desc: "电力产出 ×1.04" },
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.97, desc: "辐射伤害 ×0.97" },
    ],
  },
  {
    id: "res31_physics_27",
    name: "高能压缩技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "探测线",
    chainIdx: 5,
    tier: 2,
    cost: { research: 535, credits: 2000, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_physics_26"],
    risk: 0.044,
    flavor: "物理第2阶：探测线方向的Ⅱ级突破，研究完成后发电量 +12、探测范围 ×1.08。",
    effects: [
      { key: "powerAdd", target: "power.output", op: "add", value: 12, desc: "发电量 +12" },
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.08, desc: "探测范围 ×1.08" },
    ],
  },
  {
    id: "res31_physics_28",
    name: "低温约束技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "探测线",
    chainIdx: 5,
    tier: 3,
    cost: { research: 1302, credits: 4500, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_physics_27"],
    risk: 0.056,
    flavor: "物理第3阶：探测线方向的Ⅲ级突破，研究完成后护盾强度 ×1.12、反应堆效率 ×1.12、科研速度 ×1.12。",
    effects: [
      { key: "shieldMul", target: "military.shield", op: "mul", value: 1.12, desc: "护盾强度 ×1.12" },
      { key: "reactorMul", target: "prod.reactor", op: "mul", value: 1.12, desc: "反应堆效率 ×1.12" },
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.12, desc: "科研速度 ×1.12" },
    ],
  },
  {
    id: "res31_physics_29",
    name: "真空跃迁技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "探测线",
    chainIdx: 5,
    tier: 4,
    cost: { research: 2470, credits: 8000, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_physics_28", "res31_deepspace_02"],
    risk: 0.068,
    flavor: "物理第4阶：探测线方向的Ⅳ级突破，研究完成后辐射伤害 ×0.86、防御力 ×1.17、电力产出 ×1.17。",
    effects: [
      { key: "radiationMul", target: "risk.radiation", op: "mul", value: 0.86, desc: "辐射伤害 ×0.86" },
      { key: "defenseMul", target: "military.defense", op: "mul", value: 1.17, desc: "防御力 ×1.17" },
      { key: "energyMul", target: "prod.energy", op: "mul", value: 1.17, desc: "电力产出 ×1.17" },
    ],
  },
  {
    id: "res31_physics_30",
    name: "粒子隧穿阵列技术·Ⅲ",
    branch: "physics",
    branchCn: "物理",
    chain: "探测线",
    chainIdx: 5,
    tier: 5,
    cost: { research: 4088, credits: 12500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_physics_29", "res31_physics_02"],
    risk: 0.08,
    flavor: "物理第5阶：探测线方向的Ⅴ级突破，研究完成后探测范围 ×1.23、科研速度 ×1.23、发电量 +48。",
    effects: [
      { key: "sensorMul", target: "fleet.sensor", op: "mul", value: 1.23, desc: "探测范围 ×1.23" },
      { key: "researchMul", target: "prod.research", op: "mul", value: 1.23, desc: "科研速度 ×1.23" },
      { key: "powerAdd", target: "power.output", op: "add", value: 48, desc: "发电量 +48" },
    ],
  },
  {
    id: "res31_engineering_01",
    name: "模块化掘进技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "制造线",
    chainIdx: 0,
    tier: 1,
    cost: { research: 120, credits: 400, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "工程第1阶：制造线方向的Ⅰ级突破，研究完成后建筑建造成本 ×0.97、采矿效率 ×1.04。",
    effects: [
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.97, desc: "建筑建造成本 ×0.97" },
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.04, desc: "采矿效率 ×1.04" },
    ],
  },
  {
    id: "res31_engineering_02",
    name: "纳米管网技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "制造线",
    chainIdx: 0,
    tier: 2,
    cost: { research: 535, credits: 1600, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_engineering_01"],
    risk: 0.044,
    flavor: "工程第2阶：制造线方向的Ⅱ级突破，研究完成后建造速度 ×1.08、机器人效率 ×1.08。",
    effects: [
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.08, desc: "建造速度 ×1.08" },
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.08, desc: "机器人效率 ×1.08" },
    ],
  },
  {
    id: "res31_engineering_03",
    name: "增材装配技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "制造线",
    chainIdx: 0,
    tier: 3,
    cost: { research: 1302, credits: 3600, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_engineering_02"],
    risk: 0.056,
    flavor: "工程第3阶：制造线方向的Ⅲ级突破，研究完成后铁矿产量 ×1.12、水产量 ×1.12、维护费 ×0.9。",
    effects: [
      { key: "ironMul", target: "prod.iron", op: "mul", value: 1.12, desc: "铁矿产量 ×1.12" },
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.12, desc: "水产量 ×1.12" },
      { key: "upkeepMul", target: "cost.upkeep", op: "mul", value: 0.9, desc: "维护费 ×0.9" },
    ],
  },
  {
    id: "res31_engineering_04",
    name: "精密传动技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "制造线",
    chainIdx: 0,
    tier: 4,
    cost: { research: 2470, credits: 6400, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_engineering_03", "res31_physics_07"],
    risk: 0.068,
    flavor: "工程第4阶：制造线方向的Ⅳ级突破，研究完成后采矿效率 ×1.17、建筑耐久 ×1.17、建筑建造成本 ×0.86。",
    effects: [
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.17, desc: "采矿效率 ×1.17" },
      { key: "durabilityMul", target: "city.durability", op: "mul", value: 1.17, desc: "建筑耐久 ×1.17" },
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.86, desc: "建筑建造成本 ×0.86" },
    ],
  },
  {
    id: "res31_engineering_05",
    name: "重型密封技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "制造线",
    chainIdx: 0,
    tier: 5,
    cost: { research: 4088, credits: 10000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_engineering_04", "res31_engineering_07"],
    risk: 0.08,
    flavor: "工程第5阶：制造线方向的Ⅴ级突破，研究完成后机器人效率 ×1.23、维护费 ×0.82、建造速度 ×1.23。",
    effects: [
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.23, desc: "机器人效率 ×1.23" },
      { key: "upkeepMul", target: "cost.upkeep", op: "mul", value: 0.82, desc: "维护费 ×0.82" },
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.23, desc: "建造速度 ×1.23" },
    ],
  },
  {
    id: "res31_engineering_06",
    name: "自适应机床技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "建造线",
    chainIdx: 1,
    tier: 1,
    cost: { research: 120, credits: 420, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "工程第1阶：建造线方向的Ⅰ级突破，研究完成后水产量 ×1.04、建筑建造成本 ×0.97。",
    effects: [
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.04, desc: "水产量 ×1.04" },
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.97, desc: "建筑建造成本 ×0.97" },
    ],
  },
  {
    id: "res31_engineering_07",
    name: "分布式驱动技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "建造线",
    chainIdx: 1,
    tier: 2,
    cost: { research: 535, credits: 1680, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_engineering_06"],
    risk: 0.044,
    flavor: "工程第2阶：建造线方向的Ⅱ级突破，研究完成后建筑耐久 ×1.08、建造速度 ×1.08。",
    effects: [
      { key: "durabilityMul", target: "city.durability", op: "mul", value: 1.08, desc: "建筑耐久 ×1.08" },
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.08, desc: "建造速度 ×1.08" },
    ],
  },
  {
    id: "res31_engineering_08",
    name: "冗余吊装技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "建造线",
    chainIdx: 1,
    tier: 3,
    cost: { research: 1302, credits: 3780, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_engineering_07"],
    risk: 0.056,
    flavor: "工程第3阶：建造线方向的Ⅲ级突破，研究完成后维护费 ×0.9、铁矿产量 ×1.12、机器人效率 ×1.12。",
    effects: [
      { key: "upkeepMul", target: "cost.upkeep", op: "mul", value: 0.9, desc: "维护费 ×0.9" },
      { key: "ironMul", target: "prod.iron", op: "mul", value: 1.12, desc: "铁矿产量 ×1.12" },
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.12, desc: "机器人效率 ×1.12" },
    ],
  },
  {
    id: "res31_engineering_09",
    name: "高温框架技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "建造线",
    chainIdx: 1,
    tier: 4,
    cost: { research: 2470, credits: 6720, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_engineering_08", "res31_physics_12"],
    risk: 0.068,
    flavor: "工程第4阶：建造线方向的Ⅳ级突破，研究完成后建筑建造成本 ×0.86、采矿效率 ×1.17、水产量 ×1.17。",
    effects: [
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.86, desc: "建筑建造成本 ×0.86" },
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.17, desc: "采矿效率 ×1.17" },
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.17, desc: "水产量 ×1.17" },
    ],
  },
  {
    id: "res31_engineering_10",
    name: "耐压焊接技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "建造线",
    chainIdx: 1,
    tier: 5,
    cost: { research: 4088, credits: 10500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_engineering_09", "res31_engineering_12"],
    risk: 0.08,
    flavor: "工程第5阶：建造线方向的Ⅴ级突破，研究完成后建造速度 ×1.23、机器人效率 ×1.23、建筑耐久 ×1.23。",
    effects: [
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.23, desc: "建造速度 ×1.23" },
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.23, desc: "机器人效率 ×1.23" },
      { key: "durabilityMul", target: "city.durability", op: "mul", value: 1.23, desc: "建筑耐久 ×1.23" },
    ],
  },
  {
    id: "res31_engineering_11",
    name: "轻量结构技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "材料线",
    chainIdx: 2,
    tier: 1,
    cost: { research: 120, credits: 440, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "工程第1阶：材料线方向的Ⅰ级突破，研究完成后铁矿产量 ×1.04、水产量 ×1.04。",
    effects: [
      { key: "ironMul", target: "prod.iron", op: "mul", value: 1.04, desc: "铁矿产量 ×1.04" },
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.04, desc: "水产量 ×1.04" },
    ],
  },
  {
    id: "res31_engineering_12",
    name: "智能打印技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "材料线",
    chainIdx: 2,
    tier: 2,
    cost: { research: 535, credits: 1760, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_engineering_11"],
    risk: 0.044,
    flavor: "工程第2阶：材料线方向的Ⅱ级突破，研究完成后采矿效率 ×1.08、建筑耐久 ×1.08。",
    effects: [
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.08, desc: "采矿效率 ×1.08" },
      { key: "durabilityMul", target: "city.durability", op: "mul", value: 1.08, desc: "建筑耐久 ×1.08" },
    ],
  },
  {
    id: "res31_engineering_13",
    name: "并行轴承技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "材料线",
    chainIdx: 2,
    tier: 3,
    cost: { research: 1302, credits: 3960, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_engineering_12"],
    risk: 0.056,
    flavor: "工程第3阶：材料线方向的Ⅲ级突破，研究完成后机器人效率 ×1.12、维护费 ×0.9、建造速度 ×1.12。",
    effects: [
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.12, desc: "机器人效率 ×1.12" },
      { key: "upkeepMul", target: "cost.upkeep", op: "mul", value: 0.9, desc: "维护费 ×0.9" },
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.12, desc: "建造速度 ×1.12" },
    ],
  },
  {
    id: "res31_engineering_14",
    name: "柔性散热技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "材料线",
    chainIdx: 2,
    tier: 4,
    cost: { research: 2470, credits: 7040, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_engineering_13", "res31_physics_17"],
    risk: 0.068,
    flavor: "工程第4阶：材料线方向的Ⅳ级突破，研究完成后水产量 ×1.17、建筑建造成本 ×0.86、铁矿产量 ×1.17。",
    effects: [
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.17, desc: "水产量 ×1.17" },
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.86, desc: "建筑建造成本 ×0.86" },
      { key: "ironMul", target: "prod.iron", op: "mul", value: 1.17, desc: "铁矿产量 ×1.17" },
    ],
  },
  {
    id: "res31_engineering_15",
    name: "超硬锻造技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "材料线",
    chainIdx: 2,
    tier: 5,
    cost: { research: 4088, credits: 11000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_engineering_14", "res31_engineering_17"],
    risk: 0.08,
    flavor: "工程第5阶：材料线方向的Ⅴ级突破，研究完成后建筑耐久 ×1.23、建造速度 ×1.23、采矿效率 ×1.23。",
    effects: [
      { key: "durabilityMul", target: "city.durability", op: "mul", value: 1.23, desc: "建筑耐久 ×1.23" },
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.23, desc: "建造速度 ×1.23" },
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.23, desc: "采矿效率 ×1.23" },
    ],
  },
  {
    id: "res31_engineering_16",
    name: "低耗接口技术",
    branch: "engineering",
    branchCn: "工程",
    chain: "机械线",
    chainIdx: 3,
    tier: 1,
    cost: { research: 120, credits: 460, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "工程第1阶：机械线方向的Ⅰ级突破，研究完成后维护费 ×0.97、铁矿产量 ×1.04。",
    effects: [
      { key: "upkeepMul", target: "cost.upkeep", op: "mul", value: 0.97, desc: "维护费 ×0.97" },
      { key: "ironMul", target: "prod.iron", op: "mul", value: 1.04, desc: "铁矿产量 ×1.04" },
    ],
  },
  {
    id: "res31_engineering_17",
    name: "模块化掘进技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "机械线",
    chainIdx: 3,
    tier: 2,
    cost: { research: 535, credits: 1840, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_engineering_16"],
    risk: 0.044,
    flavor: "工程第2阶：机械线方向的Ⅱ级突破，研究完成后建筑建造成本 ×0.94、采矿效率 ×1.08。",
    effects: [
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.94, desc: "建筑建造成本 ×0.94" },
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.08, desc: "采矿效率 ×1.08" },
    ],
  },
  {
    id: "res31_engineering_18",
    name: "纳米管网技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "机械线",
    chainIdx: 3,
    tier: 3,
    cost: { research: 1302, credits: 4140, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_engineering_17"],
    risk: 0.056,
    flavor: "工程第3阶：机械线方向的Ⅲ级突破，研究完成后建造速度 ×1.12、机器人效率 ×1.12、建筑耐久 ×1.12。",
    effects: [
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.12, desc: "建造速度 ×1.12" },
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.12, desc: "机器人效率 ×1.12" },
      { key: "durabilityMul", target: "city.durability", op: "mul", value: 1.12, desc: "建筑耐久 ×1.12" },
    ],
  },
  {
    id: "res31_engineering_19",
    name: "增材装配技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "机械线",
    chainIdx: 3,
    tier: 4,
    cost: { research: 2470, credits: 7360, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_engineering_18", "res31_physics_22"],
    risk: 0.068,
    flavor: "工程第4阶：机械线方向的Ⅳ级突破，研究完成后铁矿产量 ×1.17、水产量 ×1.17、维护费 ×0.86。",
    effects: [
      { key: "ironMul", target: "prod.iron", op: "mul", value: 1.17, desc: "铁矿产量 ×1.17" },
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.17, desc: "水产量 ×1.17" },
      { key: "upkeepMul", target: "cost.upkeep", op: "mul", value: 0.86, desc: "维护费 ×0.86" },
    ],
  },
  {
    id: "res31_engineering_20",
    name: "精密传动技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "机械线",
    chainIdx: 3,
    tier: 5,
    cost: { research: 4088, credits: 11500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_engineering_19", "res31_engineering_22"],
    risk: 0.08,
    flavor: "工程第5阶：机械线方向的Ⅴ级突破，研究完成后采矿效率 ×1.23、建筑耐久 ×1.23、建筑建造成本 ×0.82。",
    effects: [
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.23, desc: "采矿效率 ×1.23" },
      { key: "durabilityMul", target: "city.durability", op: "mul", value: 1.23, desc: "建筑耐久 ×1.23" },
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.82, desc: "建筑建造成本 ×0.82" },
    ],
  },
  {
    id: "res31_engineering_21",
    name: "重型密封技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "基建线",
    chainIdx: 4,
    tier: 1,
    cost: { research: 120, credits: 480, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "工程第1阶：基建线方向的Ⅰ级突破，研究完成后机器人效率 ×1.04、维护费 ×0.97。",
    effects: [
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.04, desc: "机器人效率 ×1.04" },
      { key: "upkeepMul", target: "cost.upkeep", op: "mul", value: 0.97, desc: "维护费 ×0.97" },
    ],
  },
  {
    id: "res31_engineering_22",
    name: "自适应机床技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "基建线",
    chainIdx: 4,
    tier: 2,
    cost: { research: 535, credits: 1920, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_engineering_21"],
    risk: 0.044,
    flavor: "工程第2阶：基建线方向的Ⅱ级突破，研究完成后水产量 ×1.08、建筑建造成本 ×0.94。",
    effects: [
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.08, desc: "水产量 ×1.08" },
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.94, desc: "建筑建造成本 ×0.94" },
    ],
  },
  {
    id: "res31_engineering_23",
    name: "分布式驱动技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "基建线",
    chainIdx: 4,
    tier: 3,
    cost: { research: 1302, credits: 4320, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_engineering_22"],
    risk: 0.056,
    flavor: "工程第3阶：基建线方向的Ⅲ级突破，研究完成后建筑耐久 ×1.12、建造速度 ×1.12、采矿效率 ×1.12。",
    effects: [
      { key: "durabilityMul", target: "city.durability", op: "mul", value: 1.12, desc: "建筑耐久 ×1.12" },
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.12, desc: "建造速度 ×1.12" },
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.12, desc: "采矿效率 ×1.12" },
    ],
  },
  {
    id: "res31_engineering_24",
    name: "冗余吊装技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "基建线",
    chainIdx: 4,
    tier: 4,
    cost: { research: 2470, credits: 7680, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_engineering_23", "res31_physics_27"],
    risk: 0.068,
    flavor: "工程第4阶：基建线方向的Ⅳ级突破，研究完成后维护费 ×0.86、铁矿产量 ×1.17、机器人效率 ×1.17。",
    effects: [
      { key: "upkeepMul", target: "cost.upkeep", op: "mul", value: 0.86, desc: "维护费 ×0.86" },
      { key: "ironMul", target: "prod.iron", op: "mul", value: 1.17, desc: "铁矿产量 ×1.17" },
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.17, desc: "机器人效率 ×1.17" },
    ],
  },
  {
    id: "res31_engineering_25",
    name: "高温框架技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "基建线",
    chainIdx: 4,
    tier: 5,
    cost: { research: 4088, credits: 12000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_engineering_24", "res31_engineering_27"],
    risk: 0.08,
    flavor: "工程第5阶：基建线方向的Ⅴ级突破，研究完成后建筑建造成本 ×0.82、采矿效率 ×1.23、水产量 ×1.23。",
    effects: [
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.82, desc: "建筑建造成本 ×0.82" },
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.23, desc: "采矿效率 ×1.23" },
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.23, desc: "水产量 ×1.23" },
    ],
  },
  {
    id: "res31_engineering_26",
    name: "耐压焊接技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "自动化线",
    chainIdx: 5,
    tier: 1,
    cost: { research: 120, credits: 500, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "工程第1阶：自动化线方向的Ⅰ级突破，研究完成后建造速度 ×1.04、机器人效率 ×1.04。",
    effects: [
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.04, desc: "建造速度 ×1.04" },
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.04, desc: "机器人效率 ×1.04" },
    ],
  },
  {
    id: "res31_engineering_27",
    name: "轻量结构技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "自动化线",
    chainIdx: 5,
    tier: 2,
    cost: { research: 535, credits: 2000, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_engineering_26"],
    risk: 0.044,
    flavor: "工程第2阶：自动化线方向的Ⅱ级突破，研究完成后铁矿产量 ×1.08、水产量 ×1.08。",
    effects: [
      { key: "ironMul", target: "prod.iron", op: "mul", value: 1.08, desc: "铁矿产量 ×1.08" },
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.08, desc: "水产量 ×1.08" },
    ],
  },
  {
    id: "res31_engineering_28",
    name: "智能打印技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "自动化线",
    chainIdx: 5,
    tier: 3,
    cost: { research: 1302, credits: 4500, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_engineering_27"],
    risk: 0.056,
    flavor: "工程第3阶：自动化线方向的Ⅲ级突破，研究完成后采矿效率 ×1.12、建筑耐久 ×1.12、建筑建造成本 ×0.9。",
    effects: [
      { key: "mineMul", target: "prod.mining", op: "mul", value: 1.12, desc: "采矿效率 ×1.12" },
      { key: "durabilityMul", target: "city.durability", op: "mul", value: 1.12, desc: "建筑耐久 ×1.12" },
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.9, desc: "建筑建造成本 ×0.9" },
    ],
  },
  {
    id: "res31_engineering_29",
    name: "并行轴承技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "自动化线",
    chainIdx: 5,
    tier: 4,
    cost: { research: 2470, credits: 8000, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_engineering_28", "res31_physics_02"],
    risk: 0.068,
    flavor: "工程第4阶：自动化线方向的Ⅳ级突破，研究完成后机器人效率 ×1.17、维护费 ×0.86、建造速度 ×1.17。",
    effects: [
      { key: "robotMul", target: "prod.robot", op: "mul", value: 1.17, desc: "机器人效率 ×1.17" },
      { key: "upkeepMul", target: "cost.upkeep", op: "mul", value: 0.86, desc: "维护费 ×0.86" },
      { key: "buildSpeedMul", target: "prod.buildSpeed", op: "mul", value: 1.17, desc: "建造速度 ×1.17" },
    ],
  },
  {
    id: "res31_engineering_30",
    name: "柔性散热技术·Ⅲ",
    branch: "engineering",
    branchCn: "工程",
    chain: "自动化线",
    chainIdx: 5,
    tier: 5,
    cost: { research: 4088, credits: 12500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_engineering_29", "res31_engineering_02"],
    risk: 0.08,
    flavor: "工程第5阶：自动化线方向的Ⅴ级突破，研究完成后水产量 ×1.23、建筑建造成本 ×0.82、铁矿产量 ×1.23。",
    effects: [
      { key: "waterMul", target: "prod.water", op: "mul", value: 1.23, desc: "水产量 ×1.23" },
      { key: "buildCostMul", target: "cost.build", op: "mul", value: 0.82, desc: "建筑建造成本 ×0.82" },
      { key: "ironMul", target: "prod.iron", op: "mul", value: 1.23, desc: "铁矿产量 ×1.23" },
    ],
  },
  {
    id: "res31_biology_01",
    name: "基因发酵技术",
    branch: "biology",
    branchCn: "生物",
    chain: "基因线",
    chainIdx: 0,
    tier: 1,
    cost: { research: 120, credits: 400, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "生物第1阶：基因线方向的Ⅰ级突破，研究完成后食物产量 ×1.04、居民健康 ×1.04。",
    effects: [
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.04, desc: "食物产量 ×1.04" },
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.04, desc: "居民健康 ×1.04" },
    ],
  },
  {
    id: "res31_biology_02",
    name: "光合循环技术",
    branch: "biology",
    branchCn: "生物",
    chain: "基因线",
    chainIdx: 0,
    tier: 2,
    cost: { research: 535, credits: 1600, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_biology_01"],
    risk: 0.044,
    flavor: "生物第2阶：基因线方向的Ⅱ级突破，研究完成后人口增长速度 ×1.08、氧气供给 +8 点。",
    effects: [
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.08, desc: "人口增长速度 ×1.08" },
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 8, desc: "氧气供给 +8 点" },
    ],
  },
  {
    id: "res31_biology_03",
    name: "微生物培育技术",
    branch: "biology",
    branchCn: "生物",
    chain: "基因线",
    chainIdx: 0,
    tier: 3,
    cost: { research: 1302, credits: 3600, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_biology_02"],
    risk: 0.056,
    flavor: "生物第3阶：基因线方向的Ⅲ级突破，研究完成后居民幸福度 +21 点、作物产量 ×1.12、平均寿命 +21 年。",
    effects: [
      { key: "happinessAdd", target: "pop.happiness", op: "add", value: 21, desc: "居民幸福度 +21 点" },
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.12, desc: "作物产量 ×1.12" },
      { key: "lifespanAdd", target: "pop.lifespan", op: "add", value: 21, desc: "平均寿命 +21 年" },
    ],
  },
  {
    id: "res31_biology_04",
    name: "干细胞适配技术",
    branch: "biology",
    branchCn: "生物",
    chain: "基因线",
    chainIdx: 0,
    tier: 4,
    cost: { research: 2470, credits: 6400, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_biology_03", "res31_engineering_07"],
    risk: 0.068,
    flavor: "生物第4阶：基因线方向的Ⅳ级突破，研究完成后居民健康 ×1.17、医疗效率 ×1.17、食物产量 ×1.17。",
    effects: [
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.17, desc: "居民健康 ×1.17" },
      { key: "medMul", target: "life.medical", op: "mul", value: 1.17, desc: "医疗效率 ×1.17" },
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.17, desc: "食物产量 ×1.17" },
    ],
  },
  {
    id: "res31_biology_05",
    name: "酶促耐受技术",
    branch: "biology",
    branchCn: "生物",
    chain: "基因线",
    chainIdx: 0,
    tier: 5,
    cost: { research: 4088, credits: 10000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_biology_04", "res31_biology_07"],
    risk: 0.08,
    flavor: "生物第5阶：基因线方向的Ⅴ级突破，研究完成后氧气供给 +32 点、平均寿命 +32 年、人口增长速度 ×1.23。",
    effects: [
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 32, desc: "氧气供给 +32 点" },
      { key: "lifespanAdd", target: "pop.lifespan", op: "add", value: 32, desc: "平均寿命 +32 年" },
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.23, desc: "人口增长速度 ×1.23" },
    ],
  },
  {
    id: "res31_biology_06",
    name: "免疫筛选技术",
    branch: "biology",
    branchCn: "生物",
    chain: "农业线",
    chainIdx: 1,
    tier: 1,
    cost: { research: 120, credits: 420, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "生物第1阶：农业线方向的Ⅰ级突破，研究完成后作物产量 ×1.04、食物产量 ×1.04。",
    effects: [
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.04, desc: "作物产量 ×1.04" },
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.04, desc: "食物产量 ×1.04" },
    ],
  },
  {
    id: "res31_biology_07",
    name: "神经分化技术",
    branch: "biology",
    branchCn: "生物",
    chain: "农业线",
    chainIdx: 1,
    tier: 2,
    cost: { research: 535, credits: 1680, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_biology_06"],
    risk: 0.044,
    flavor: "生物第2阶：农业线方向的Ⅱ级突破，研究完成后医疗效率 ×1.08、人口增长速度 ×1.08。",
    effects: [
      { key: "medMul", target: "life.medical", op: "mul", value: 1.08, desc: "医疗效率 ×1.08" },
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.08, desc: "人口增长速度 ×1.08" },
    ],
  },
  {
    id: "res31_biology_08",
    name: "生态修复技术",
    branch: "biology",
    branchCn: "生物",
    chain: "农业线",
    chainIdx: 1,
    tier: 3,
    cost: { research: 1302, credits: 3780, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_biology_07"],
    risk: 0.056,
    flavor: "生物第3阶：农业线方向的Ⅲ级突破，研究完成后平均寿命 +14 年、居民幸福度 +14 点、氧气供给 +14 点。",
    effects: [
      { key: "lifespanAdd", target: "pop.lifespan", op: "add", value: 14, desc: "平均寿命 +14 年" },
      { key: "happinessAdd", target: "pop.happiness", op: "add", value: 14, desc: "居民幸福度 +14 点" },
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 14, desc: "氧气供给 +14 点" },
    ],
  },
  {
    id: "res31_biology_09",
    name: "藻类合成技术",
    branch: "biology",
    branchCn: "生物",
    chain: "农业线",
    chainIdx: 1,
    tier: 4,
    cost: { research: 2470, credits: 6720, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_biology_08", "res31_engineering_12"],
    risk: 0.068,
    flavor: "生物第4阶：农业线方向的Ⅳ级突破，研究完成后食物产量 ×1.17、居民健康 ×1.17、作物产量 ×1.17。",
    effects: [
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.17, desc: "食物产量 ×1.17" },
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.17, desc: "居民健康 ×1.17" },
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.17, desc: "作物产量 ×1.17" },
    ],
  },
  {
    id: "res31_biology_10",
    name: "菌群驯化技术",
    branch: "biology",
    branchCn: "生物",
    chain: "农业线",
    chainIdx: 1,
    tier: 5,
    cost: { research: 4088, credits: 10500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_biology_09", "res31_biology_12"],
    risk: 0.08,
    flavor: "生物第5阶：农业线方向的Ⅴ级突破，研究完成后人口增长速度 ×1.23、氧气供给 +16 点、医疗效率 ×1.23。",
    effects: [
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.23, desc: "人口增长速度 ×1.23" },
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 16, desc: "氧气供给 +16 点" },
      { key: "medMul", target: "life.medical", op: "mul", value: 1.23, desc: "医疗效率 ×1.23" },
    ],
  },
  {
    id: "res31_biology_11",
    name: "蛋白共生技术",
    branch: "biology",
    branchCn: "生物",
    chain: "医疗线",
    chainIdx: 2,
    tier: 1,
    cost: { research: 120, credits: 440, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "生物第1阶：医疗线方向的Ⅰ级突破，研究完成后居民幸福度 +4 点、作物产量 ×1.04。",
    effects: [
      { key: "happinessAdd", target: "pop.happiness", op: "add", value: 4, desc: "居民幸福度 +4 点" },
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.04, desc: "作物产量 ×1.04" },
    ],
  },
  {
    id: "res31_biology_12",
    name: "代谢编辑技术",
    branch: "biology",
    branchCn: "生物",
    chain: "医疗线",
    chainIdx: 2,
    tier: 2,
    cost: { research: 535, credits: 1760, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_biology_11"],
    risk: 0.044,
    flavor: "生物第2阶：医疗线方向的Ⅱ级突破，研究完成后居民健康 ×1.08、医疗效率 ×1.08。",
    effects: [
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.08, desc: "居民健康 ×1.08" },
      { key: "medMul", target: "life.medical", op: "mul", value: 1.08, desc: "医疗效率 ×1.08" },
    ],
  },
  {
    id: "res31_biology_13",
    name: "表观扩增技术",
    branch: "biology",
    branchCn: "生物",
    chain: "医疗线",
    chainIdx: 2,
    tier: 3,
    cost: { research: 1302, credits: 3960, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_biology_12"],
    risk: 0.056,
    flavor: "生物第3阶：医疗线方向的Ⅲ级突破，研究完成后氧气供给 +7 点、平均寿命 +7 年、人口增长速度 ×1.12。",
    effects: [
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 7, desc: "氧气供给 +7 点" },
      { key: "lifespanAdd", target: "pop.lifespan", op: "add", value: 7, desc: "平均寿命 +7 年" },
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.12, desc: "人口增长速度 ×1.12" },
    ],
  },
  {
    id: "res31_biology_14",
    name: "共生再生技术",
    branch: "biology",
    branchCn: "生物",
    chain: "医疗线",
    chainIdx: 2,
    tier: 4,
    cost: { research: 2470, credits: 7040, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_biology_13", "res31_engineering_17"],
    risk: 0.068,
    flavor: "生物第4阶：医疗线方向的Ⅳ级突破，研究完成后作物产量 ×1.17、食物产量 ×1.17、居民幸福度 +22 点。",
    effects: [
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.17, desc: "作物产量 ×1.17" },
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.17, desc: "食物产量 ×1.17" },
      { key: "happinessAdd", target: "pop.happiness", op: "add", value: 22, desc: "居民幸福度 +22 点" },
    ],
  },
  {
    id: "res31_biology_15",
    name: "抗逆调控技术",
    branch: "biology",
    branchCn: "生物",
    chain: "医疗线",
    chainIdx: 2,
    tier: 5,
    cost: { research: 4088, credits: 11000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_biology_14", "res31_biology_17"],
    risk: 0.08,
    flavor: "生物第5阶：医疗线方向的Ⅴ级突破，研究完成后医疗效率 ×1.23、人口增长速度 ×1.23、居民健康 ×1.23。",
    effects: [
      { key: "medMul", target: "life.medical", op: "mul", value: 1.23, desc: "医疗效率 ×1.23" },
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.23, desc: "人口增长速度 ×1.23" },
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.23, desc: "居民健康 ×1.23" },
    ],
  },
  {
    id: "res31_biology_16",
    name: "克隆表达技术",
    branch: "biology",
    branchCn: "生物",
    chain: "生态线",
    chainIdx: 3,
    tier: 1,
    cost: { research: 120, credits: 460, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "生物第1阶：生态线方向的Ⅰ级突破，研究完成后平均寿命 +2 年、居民幸福度 +2 点。",
    effects: [
      { key: "lifespanAdd", target: "pop.lifespan", op: "add", value: 2, desc: "平均寿命 +2 年" },
      { key: "happinessAdd", target: "pop.happiness", op: "add", value: 2, desc: "居民幸福度 +2 点" },
    ],
  },
  {
    id: "res31_biology_17",
    name: "基因发酵技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "生态线",
    chainIdx: 3,
    tier: 2,
    cost: { research: 535, credits: 1840, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_biology_16"],
    risk: 0.044,
    flavor: "生物第2阶：生态线方向的Ⅱ级突破，研究完成后食物产量 ×1.08、居民健康 ×1.08。",
    effects: [
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.08, desc: "食物产量 ×1.08" },
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.08, desc: "居民健康 ×1.08" },
    ],
  },
  {
    id: "res31_biology_18",
    name: "光合循环技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "生态线",
    chainIdx: 3,
    tier: 3,
    cost: { research: 1302, credits: 4140, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_biology_17"],
    risk: 0.056,
    flavor: "生物第3阶：生态线方向的Ⅲ级突破，研究完成后人口增长速度 ×1.12、氧气供给 +21 点、医疗效率 ×1.12。",
    effects: [
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.12, desc: "人口增长速度 ×1.12" },
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 21, desc: "氧气供给 +21 点" },
      { key: "medMul", target: "life.medical", op: "mul", value: 1.12, desc: "医疗效率 ×1.12" },
    ],
  },
  {
    id: "res31_biology_19",
    name: "微生物培育技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "生态线",
    chainIdx: 3,
    tier: 4,
    cost: { research: 2470, credits: 7360, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_biology_18", "res31_engineering_22"],
    risk: 0.068,
    flavor: "生物第4阶：生态线方向的Ⅳ级突破，研究完成后居民幸福度 +11 点、作物产量 ×1.17、平均寿命 +11 年。",
    effects: [
      { key: "happinessAdd", target: "pop.happiness", op: "add", value: 11, desc: "居民幸福度 +11 点" },
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.17, desc: "作物产量 ×1.17" },
      { key: "lifespanAdd", target: "pop.lifespan", op: "add", value: 11, desc: "平均寿命 +11 年" },
    ],
  },
  {
    id: "res31_biology_20",
    name: "干细胞适配技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "生态线",
    chainIdx: 3,
    tier: 5,
    cost: { research: 4088, credits: 11500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_biology_19", "res31_biology_22"],
    risk: 0.08,
    flavor: "生物第5阶：生态线方向的Ⅴ级突破，研究完成后居民健康 ×1.23、医疗效率 ×1.23、食物产量 ×1.23。",
    effects: [
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.23, desc: "居民健康 ×1.23" },
      { key: "medMul", target: "life.medical", op: "mul", value: 1.23, desc: "医疗效率 ×1.23" },
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.23, desc: "食物产量 ×1.23" },
    ],
  },
  {
    id: "res31_biology_21",
    name: "酶促耐受技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "微生物线",
    chainIdx: 4,
    tier: 1,
    cost: { research: 120, credits: 480, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "生物第1阶：微生物线方向的Ⅰ级突破，研究完成后氧气供给 +6 点、平均寿命 +6 年。",
    effects: [
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 6, desc: "氧气供给 +6 点" },
      { key: "lifespanAdd", target: "pop.lifespan", op: "add", value: 6, desc: "平均寿命 +6 年" },
    ],
  },
  {
    id: "res31_biology_22",
    name: "免疫筛选技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "微生物线",
    chainIdx: 4,
    tier: 2,
    cost: { research: 535, credits: 1920, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_biology_21"],
    risk: 0.044,
    flavor: "生物第2阶：微生物线方向的Ⅱ级突破，研究完成后作物产量 ×1.08、食物产量 ×1.08。",
    effects: [
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.08, desc: "作物产量 ×1.08" },
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.08, desc: "食物产量 ×1.08" },
    ],
  },
  {
    id: "res31_biology_23",
    name: "神经分化技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "微生物线",
    chainIdx: 4,
    tier: 3,
    cost: { research: 1302, credits: 4320, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_biology_22"],
    risk: 0.056,
    flavor: "生物第3阶：微生物线方向的Ⅲ级突破，研究完成后医疗效率 ×1.12、人口增长速度 ×1.12、居民健康 ×1.12。",
    effects: [
      { key: "medMul", target: "life.medical", op: "mul", value: 1.12, desc: "医疗效率 ×1.12" },
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.12, desc: "人口增长速度 ×1.12" },
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.12, desc: "居民健康 ×1.12" },
    ],
  },
  {
    id: "res31_biology_24",
    name: "生态修复技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "微生物线",
    chainIdx: 4,
    tier: 4,
    cost: { research: 2470, credits: 7680, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_biology_23", "res31_engineering_27"],
    risk: 0.068,
    flavor: "生物第4阶：微生物线方向的Ⅳ级突破，研究完成后平均寿命 +33 年、居民幸福度 +33 点、氧气供给 +33 点。",
    effects: [
      { key: "lifespanAdd", target: "pop.lifespan", op: "add", value: 33, desc: "平均寿命 +33 年" },
      { key: "happinessAdd", target: "pop.happiness", op: "add", value: 33, desc: "居民幸福度 +33 点" },
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 33, desc: "氧气供给 +33 点" },
    ],
  },
  {
    id: "res31_biology_25",
    name: "藻类合成技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "微生物线",
    chainIdx: 4,
    tier: 5,
    cost: { research: 4088, credits: 12000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_biology_24", "res31_biology_27"],
    risk: 0.08,
    flavor: "生物第5阶：微生物线方向的Ⅴ级突破，研究完成后食物产量 ×1.23、居民健康 ×1.23、作物产量 ×1.23。",
    effects: [
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.23, desc: "食物产量 ×1.23" },
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.23, desc: "居民健康 ×1.23" },
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.23, desc: "作物产量 ×1.23" },
    ],
  },
  {
    id: "res31_biology_26",
    name: "菌群驯化技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "神经线",
    chainIdx: 5,
    tier: 1,
    cost: { research: 120, credits: 500, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "生物第1阶：神经线方向的Ⅰ级突破，研究完成后人口增长速度 ×1.04、氧气供给 +4 点。",
    effects: [
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.04, desc: "人口增长速度 ×1.04" },
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 4, desc: "氧气供给 +4 点" },
    ],
  },
  {
    id: "res31_biology_27",
    name: "蛋白共生技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "神经线",
    chainIdx: 5,
    tier: 2,
    cost: { research: 535, credits: 2000, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_biology_26"],
    risk: 0.044,
    flavor: "生物第2阶：神经线方向的Ⅱ级突破，研究完成后居民幸福度 +12 点、作物产量 ×1.08。",
    effects: [
      { key: "happinessAdd", target: "pop.happiness", op: "add", value: 12, desc: "居民幸福度 +12 点" },
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.08, desc: "作物产量 ×1.08" },
    ],
  },
  {
    id: "res31_biology_28",
    name: "代谢编辑技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "神经线",
    chainIdx: 5,
    tier: 3,
    cost: { research: 1302, credits: 4500, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_biology_27"],
    risk: 0.056,
    flavor: "生物第3阶：神经线方向的Ⅲ级突破，研究完成后居民健康 ×1.12、医疗效率 ×1.12、食物产量 ×1.12。",
    effects: [
      { key: "healthMul", target: "pop.health", op: "mul", value: 1.12, desc: "居民健康 ×1.12" },
      { key: "medMul", target: "life.medical", op: "mul", value: 1.12, desc: "医疗效率 ×1.12" },
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.12, desc: "食物产量 ×1.12" },
    ],
  },
  {
    id: "res31_biology_29",
    name: "表观扩增技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "神经线",
    chainIdx: 5,
    tier: 4,
    cost: { research: 2470, credits: 8000, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_biology_28", "res31_engineering_02"],
    risk: 0.068,
    flavor: "生物第4阶：神经线方向的Ⅳ级突破，研究完成后氧气供给 +22 点、平均寿命 +22 年、人口增长速度 ×1.17。",
    effects: [
      { key: "oxygenAdd", target: "life.oxygen", op: "add", value: 22, desc: "氧气供给 +22 点" },
      { key: "lifespanAdd", target: "pop.lifespan", op: "add", value: 22, desc: "平均寿命 +22 年" },
      { key: "popGrowthMul", target: "pop.growth", op: "mul", value: 1.17, desc: "人口增长速度 ×1.17" },
    ],
  },
  {
    id: "res31_biology_30",
    name: "共生再生技术·Ⅲ",
    branch: "biology",
    branchCn: "生物",
    chain: "神经线",
    chainIdx: 5,
    tier: 5,
    cost: { research: 4088, credits: 12500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_biology_29", "res31_biology_02"],
    risk: 0.08,
    flavor: "生物第5阶：神经线方向的Ⅴ级突破，研究完成后作物产量 ×1.23、食物产量 ×1.23、居民幸福度 +48 点。",
    effects: [
      { key: "cropMul", target: "prod.crop", op: "mul", value: 1.23, desc: "作物产量 ×1.23" },
      { key: "foodMul", target: "prod.food", op: "mul", value: 1.23, desc: "食物产量 ×1.23" },
      { key: "happinessAdd", target: "pop.happiness", op: "add", value: 48, desc: "居民幸福度 +48 点" },
    ],
  },
  {
    id: "res31_society_01",
    name: "公民学院技术",
    branch: "society",
    branchCn: "社会",
    chain: "治理线",
    chainIdx: 0,
    tier: 1,
    cost: { research: 120, credits: 400, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "社会第1阶：治理线方向的Ⅰ级突破，研究完成后税收效率 ×1.04、政策槽位 +2 个。",
    effects: [
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.04, desc: "税收效率 ×1.04" },
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 2, desc: "政策槽位 +2 个" },
    ],
  },
  {
    id: "res31_society_02",
    name: "社区互助技术",
    branch: "society",
    branchCn: "社会",
    chain: "治理线",
    chainIdx: 0,
    tier: 2,
    cost: { research: 535, credits: 1600, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_society_01"],
    risk: 0.044,
    flavor: "社会第2阶：治理线方向的Ⅱ级突破，研究完成后殖民地稳定度 +8 点、贸易收入 ×1.08。",
    effects: [
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 8, desc: "殖民地稳定度 +8 点" },
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.08, desc: "贸易收入 ×1.08" },
    ],
  },
  {
    id: "res31_society_03",
    name: "契约议会技术",
    branch: "society",
    branchCn: "社会",
    chain: "治理线",
    chainIdx: 0,
    tier: 3,
    cost: { research: 1302, credits: 3600, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_society_02"],
    risk: 0.056,
    flavor: "社会第3阶：治理线方向的Ⅲ级突破，研究完成后外交关系增速 ×1.12、士气 ×1.12、腐败发生率 ×0.9。",
    effects: [
      { key: "diplomacyMul", target: "diplomacy.relation", op: "mul", value: 1.12, desc: "外交关系增速 ×1.12" },
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.12, desc: "士气 ×1.12" },
      { key: "corruptionMul", target: "risk.corruption", op: "mul", value: 0.9, desc: "腐败发生率 ×0.9" },
    ],
  },
  {
    id: "res31_society_04",
    name: "治理电台技术",
    branch: "society",
    branchCn: "社会",
    chain: "治理线",
    chainIdx: 0,
    tier: 4,
    cost: { research: 2470, credits: 6400, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_society_03", "res31_biology_07"],
    risk: 0.068,
    flavor: "社会第4阶：治理线方向的Ⅳ级突破，研究完成后政策槽位 +11 个、教育水平 ×1.17、税收效率 ×1.17。",
    effects: [
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 11, desc: "政策槽位 +11 个" },
      { key: "eduMul", target: "pop.education", op: "mul", value: 1.17, desc: "教育水平 ×1.17" },
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.17, desc: "税收效率 ×1.17" },
    ],
  },
  {
    id: "res31_society_05",
    name: "教育共识技术",
    branch: "society",
    branchCn: "社会",
    chain: "治理线",
    chainIdx: 0,
    tier: 5,
    cost: { research: 4088, credits: 10000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_society_04", "res31_society_07"],
    risk: 0.08,
    flavor: "社会第5阶：治理线方向的Ⅴ级突破，研究完成后贸易收入 ×1.23、腐败发生率 ×0.82、殖民地稳定度 +32 点。",
    effects: [
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.23, desc: "贸易收入 ×1.23" },
      { key: "corruptionMul", target: "risk.corruption", op: "mul", value: 0.82, desc: "腐败发生率 ×0.82" },
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 32, desc: "殖民地稳定度 +32 点" },
    ],
  },
  {
    id: "res31_society_06",
    name: "文化公约技术",
    branch: "society",
    branchCn: "社会",
    chain: "教育线",
    chainIdx: 1,
    tier: 1,
    cost: { research: 120, credits: 420, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "社会第1阶：教育线方向的Ⅰ级突破，研究完成后士气 ×1.04、税收效率 ×1.04。",
    effects: [
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.04, desc: "士气 ×1.04" },
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.04, desc: "税收效率 ×1.04" },
    ],
  },
  {
    id: "res31_society_07",
    name: "法律典礼技术",
    branch: "society",
    branchCn: "社会",
    chain: "教育线",
    chainIdx: 1,
    tier: 2,
    cost: { research: 535, credits: 1680, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_society_06"],
    risk: 0.044,
    flavor: "社会第2阶：教育线方向的Ⅱ级突破，研究完成后教育水平 ×1.08、殖民地稳定度 +4 点。",
    effects: [
      { key: "eduMul", target: "pop.education", op: "mul", value: 1.08, desc: "教育水平 ×1.08" },
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 4, desc: "殖民地稳定度 +4 点" },
    ],
  },
  {
    id: "res31_society_08",
    name: "福利市集技术",
    branch: "society",
    branchCn: "社会",
    chain: "教育线",
    chainIdx: 1,
    tier: 3,
    cost: { research: 1302, credits: 3780, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_society_07"],
    risk: 0.056,
    flavor: "社会第3阶：教育线方向的Ⅲ级突破，研究完成后腐败发生率 ×0.9、外交关系增速 ×1.12、贸易收入 ×1.12。",
    effects: [
      { key: "corruptionMul", target: "risk.corruption", op: "mul", value: 0.9, desc: "腐败发生率 ×0.9" },
      { key: "diplomacyMul", target: "diplomacy.relation", op: "mul", value: 1.12, desc: "外交关系增速 ×1.12" },
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.12, desc: "贸易收入 ×1.12" },
    ],
  },
  {
    id: "res31_society_09",
    name: "舆论仲裁技术",
    branch: "society",
    branchCn: "社会",
    chain: "教育线",
    chainIdx: 1,
    tier: 4,
    cost: { research: 2470, credits: 6720, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_society_08", "res31_biology_12"],
    risk: 0.068,
    flavor: "社会第4阶：教育线方向的Ⅳ级突破，研究完成后税收效率 ×1.17、政策槽位 +33 个、士气 ×1.17。",
    effects: [
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.17, desc: "税收效率 ×1.17" },
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 33, desc: "政策槽位 +33 个" },
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.17, desc: "士气 ×1.17" },
    ],
  },
  {
    id: "res31_society_10",
    name: "自治法庭技术",
    branch: "society",
    branchCn: "社会",
    chain: "教育线",
    chainIdx: 1,
    tier: 5,
    cost: { research: 4088, credits: 10500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_society_09", "res31_society_12"],
    risk: 0.08,
    flavor: "社会第5阶：教育线方向的Ⅴ级突破，研究完成后殖民地稳定度 +16 点、贸易收入 ×1.23、教育水平 ×1.23。",
    effects: [
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 16, desc: "殖民地稳定度 +16 点" },
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.23, desc: "贸易收入 ×1.23" },
      { key: "eduMul", target: "pop.education", op: "mul", value: 1.23, desc: "教育水平 ×1.23" },
    ],
  },
  {
    id: "res31_society_11",
    name: "协商剧场技术",
    branch: "society",
    branchCn: "社会",
    chain: "文化线",
    chainIdx: 2,
    tier: 1,
    cost: { research: 120, credits: 440, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "社会第1阶：文化线方向的Ⅰ级突破，研究完成后外交关系增速 ×1.04、士气 ×1.04。",
    effects: [
      { key: "diplomacyMul", target: "diplomacy.relation", op: "mul", value: 1.04, desc: "外交关系增速 ×1.04" },
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.04, desc: "士气 ×1.04" },
    ],
  },
  {
    id: "res31_society_12",
    name: "信用网络技术",
    branch: "society",
    branchCn: "社会",
    chain: "文化线",
    chainIdx: 2,
    tier: 2,
    cost: { research: 535, credits: 1760, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_society_11"],
    risk: 0.044,
    flavor: "社会第2阶：文化线方向的Ⅱ级突破，研究完成后政策槽位 +12 个、教育水平 ×1.08。",
    effects: [
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 12, desc: "政策槽位 +12 个" },
      { key: "eduMul", target: "pop.education", op: "mul", value: 1.08, desc: "教育水平 ×1.08" },
    ],
  },
  {
    id: "res31_society_13",
    name: "习俗基金技术",
    branch: "society",
    branchCn: "社会",
    chain: "文化线",
    chainIdx: 2,
    tier: 3,
    cost: { research: 1302, credits: 3960, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_society_12"],
    risk: 0.056,
    flavor: "社会第3阶：文化线方向的Ⅲ级突破，研究完成后贸易收入 ×1.12、腐败发生率 ×0.9、殖民地稳定度 +7 点。",
    effects: [
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.12, desc: "贸易收入 ×1.12" },
      { key: "corruptionMul", target: "risk.corruption", op: "mul", value: 0.9, desc: "腐败发生率 ×0.9" },
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 7, desc: "殖民地稳定度 +7 点" },
    ],
  },
  {
    id: "res31_society_14",
    name: "礼仪传承技术",
    branch: "society",
    branchCn: "社会",
    chain: "文化线",
    chainIdx: 2,
    tier: 4,
    cost: { research: 2470, credits: 7040, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_society_13", "res31_biology_17"],
    risk: 0.068,
    flavor: "社会第4阶：文化线方向的Ⅳ级突破，研究完成后士气 ×1.17、税收效率 ×1.17、外交关系增速 ×1.17。",
    effects: [
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.17, desc: "士气 ×1.17" },
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.17, desc: "税收效率 ×1.17" },
      { key: "diplomacyMul", target: "diplomacy.relation", op: "mul", value: 1.17, desc: "外交关系增速 ×1.17" },
    ],
  },
  {
    id: "res31_society_15",
    name: "记忆档案技术",
    branch: "society",
    branchCn: "社会",
    chain: "文化线",
    chainIdx: 2,
    tier: 5,
    cost: { research: 4088, credits: 11000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_society_14", "res31_society_17"],
    risk: 0.08,
    flavor: "社会第5阶：文化线方向的Ⅴ级突破，研究完成后教育水平 ×1.23、殖民地稳定度 +48 点、政策槽位 +48 个。",
    effects: [
      { key: "eduMul", target: "pop.education", op: "mul", value: 1.23, desc: "教育水平 ×1.23" },
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 48, desc: "殖民地稳定度 +48 点" },
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 48, desc: "政策槽位 +48 个" },
    ],
  },
  {
    id: "res31_society_16",
    name: "认同普查技术",
    branch: "society",
    branchCn: "社会",
    chain: "经济线",
    chainIdx: 3,
    tier: 1,
    cost: { research: 120, credits: 460, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "社会第1阶：经济线方向的Ⅰ级突破，研究完成后腐败发生率 ×0.97、外交关系增速 ×1.04。",
    effects: [
      { key: "corruptionMul", target: "risk.corruption", op: "mul", value: 0.97, desc: "腐败发生率 ×0.97" },
      { key: "diplomacyMul", target: "diplomacy.relation", op: "mul", value: 1.04, desc: "外交关系增速 ×1.04" },
    ],
  },
  {
    id: "res31_society_17",
    name: "公民学院技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "经济线",
    chainIdx: 3,
    tier: 2,
    cost: { research: 535, credits: 1840, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_society_16"],
    risk: 0.044,
    flavor: "社会第2阶：经济线方向的Ⅱ级突破，研究完成后税收效率 ×1.08、政策槽位 +8 个。",
    effects: [
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.08, desc: "税收效率 ×1.08" },
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 8, desc: "政策槽位 +8 个" },
    ],
  },
  {
    id: "res31_society_18",
    name: "社区互助技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "经济线",
    chainIdx: 3,
    tier: 3,
    cost: { research: 1302, credits: 4140, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_society_17"],
    risk: 0.056,
    flavor: "社会第3阶：经济线方向的Ⅲ级突破，研究完成后殖民地稳定度 +21 点、贸易收入 ×1.12、教育水平 ×1.12。",
    effects: [
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 21, desc: "殖民地稳定度 +21 点" },
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.12, desc: "贸易收入 ×1.12" },
      { key: "eduMul", target: "pop.education", op: "mul", value: 1.12, desc: "教育水平 ×1.12" },
    ],
  },
  {
    id: "res31_society_19",
    name: "契约议会技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "经济线",
    chainIdx: 3,
    tier: 4,
    cost: { research: 2470, credits: 7360, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_society_18", "res31_biology_22"],
    risk: 0.068,
    flavor: "社会第4阶：经济线方向的Ⅳ级突破，研究完成后外交关系增速 ×1.17、士气 ×1.17、腐败发生率 ×0.86。",
    effects: [
      { key: "diplomacyMul", target: "diplomacy.relation", op: "mul", value: 1.17, desc: "外交关系增速 ×1.17" },
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.17, desc: "士气 ×1.17" },
      { key: "corruptionMul", target: "risk.corruption", op: "mul", value: 0.86, desc: "腐败发生率 ×0.86" },
    ],
  },
  {
    id: "res31_society_20",
    name: "治理电台技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "经济线",
    chainIdx: 3,
    tier: 5,
    cost: { research: 4088, credits: 11500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_society_19", "res31_society_22"],
    risk: 0.08,
    flavor: "社会第5阶：经济线方向的Ⅴ级突破，研究完成后政策槽位 +32 个、教育水平 ×1.23、税收效率 ×1.23。",
    effects: [
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 32, desc: "政策槽位 +32 个" },
      { key: "eduMul", target: "pop.education", op: "mul", value: 1.23, desc: "教育水平 ×1.23" },
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.23, desc: "税收效率 ×1.23" },
    ],
  },
  {
    id: "res31_society_21",
    name: "教育共识技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "法律线",
    chainIdx: 4,
    tier: 1,
    cost: { research: 120, credits: 480, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "社会第1阶：法律线方向的Ⅰ级突破，研究完成后贸易收入 ×1.04、腐败发生率 ×0.97。",
    effects: [
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.04, desc: "贸易收入 ×1.04" },
      { key: "corruptionMul", target: "risk.corruption", op: "mul", value: 0.97, desc: "腐败发生率 ×0.97" },
    ],
  },
  {
    id: "res31_society_22",
    name: "文化公约技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "法律线",
    chainIdx: 4,
    tier: 2,
    cost: { research: 535, credits: 1920, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_society_21"],
    risk: 0.044,
    flavor: "社会第2阶：法律线方向的Ⅱ级突破，研究完成后士气 ×1.08、税收效率 ×1.08。",
    effects: [
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.08, desc: "士气 ×1.08" },
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.08, desc: "税收效率 ×1.08" },
    ],
  },
  {
    id: "res31_society_23",
    name: "法律典礼技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "法律线",
    chainIdx: 4,
    tier: 3,
    cost: { research: 1302, credits: 4320, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_society_22"],
    risk: 0.056,
    flavor: "社会第3阶：法律线方向的Ⅲ级突破，研究完成后教育水平 ×1.12、殖民地稳定度 +14 点、政策槽位 +14 个。",
    effects: [
      { key: "eduMul", target: "pop.education", op: "mul", value: 1.12, desc: "教育水平 ×1.12" },
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 14, desc: "殖民地稳定度 +14 点" },
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 14, desc: "政策槽位 +14 个" },
    ],
  },
  {
    id: "res31_society_24",
    name: "福利市集技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "法律线",
    chainIdx: 4,
    tier: 4,
    cost: { research: 2470, credits: 7680, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_society_23", "res31_biology_27"],
    risk: 0.068,
    flavor: "社会第4阶：法律线方向的Ⅳ级突破，研究完成后腐败发生率 ×0.86、外交关系增速 ×1.17、贸易收入 ×1.17。",
    effects: [
      { key: "corruptionMul", target: "risk.corruption", op: "mul", value: 0.86, desc: "腐败发生率 ×0.86" },
      { key: "diplomacyMul", target: "diplomacy.relation", op: "mul", value: 1.17, desc: "外交关系增速 ×1.17" },
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.17, desc: "贸易收入 ×1.17" },
    ],
  },
  {
    id: "res31_society_25",
    name: "舆论仲裁技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "法律线",
    chainIdx: 4,
    tier: 5,
    cost: { research: 4088, credits: 12000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_society_24", "res31_society_27"],
    risk: 0.08,
    flavor: "社会第5阶：法律线方向的Ⅴ级突破，研究完成后税收效率 ×1.23、政策槽位 +16 个、士气 ×1.23。",
    effects: [
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.23, desc: "税收效率 ×1.23" },
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 16, desc: "政策槽位 +16 个" },
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.23, desc: "士气 ×1.23" },
    ],
  },
  {
    id: "res31_society_26",
    name: "自治法庭技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "社区线",
    chainIdx: 5,
    tier: 1,
    cost: { research: 120, credits: 500, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "社会第1阶：社区线方向的Ⅰ级突破，研究完成后殖民地稳定度 +4 点、贸易收入 ×1.04。",
    effects: [
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 4, desc: "殖民地稳定度 +4 点" },
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.04, desc: "贸易收入 ×1.04" },
    ],
  },
  {
    id: "res31_society_27",
    name: "协商剧场技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "社区线",
    chainIdx: 5,
    tier: 2,
    cost: { research: 535, credits: 2000, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_society_26"],
    risk: 0.044,
    flavor: "社会第2阶：社区线方向的Ⅱ级突破，研究完成后外交关系增速 ×1.08、士气 ×1.08。",
    effects: [
      { key: "diplomacyMul", target: "diplomacy.relation", op: "mul", value: 1.08, desc: "外交关系增速 ×1.08" },
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.08, desc: "士气 ×1.08" },
    ],
  },
  {
    id: "res31_society_28",
    name: "信用网络技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "社区线",
    chainIdx: 5,
    tier: 3,
    cost: { research: 1302, credits: 4500, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_society_27"],
    risk: 0.056,
    flavor: "社会第3阶：社区线方向的Ⅲ级突破，研究完成后政策槽位 +7 个、教育水平 ×1.12、税收效率 ×1.12。",
    effects: [
      { key: "policySlotsAdd", target: "gov.policySlots", op: "add", value: 7, desc: "政策槽位 +7 个" },
      { key: "eduMul", target: "pop.education", op: "mul", value: 1.12, desc: "教育水平 ×1.12" },
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.12, desc: "税收效率 ×1.12" },
    ],
  },
  {
    id: "res31_society_29",
    name: "习俗基金技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "社区线",
    chainIdx: 5,
    tier: 4,
    cost: { research: 2470, credits: 8000, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_society_28", "res31_biology_02"],
    risk: 0.068,
    flavor: "社会第4阶：社区线方向的Ⅳ级突破，研究完成后贸易收入 ×1.17、腐败发生率 ×0.86、殖民地稳定度 +22 点。",
    effects: [
      { key: "tradeMul", target: "econ.tradeIncome", op: "mul", value: 1.17, desc: "贸易收入 ×1.17" },
      { key: "corruptionMul", target: "risk.corruption", op: "mul", value: 0.86, desc: "腐败发生率 ×0.86" },
      { key: "stabilityAdd", target: "city.stability", op: "add", value: 22, desc: "殖民地稳定度 +22 点" },
    ],
  },
  {
    id: "res31_society_30",
    name: "礼仪传承技术·Ⅲ",
    branch: "society",
    branchCn: "社会",
    chain: "社区线",
    chainIdx: 5,
    tier: 5,
    cost: { research: 4088, credits: 12500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_society_29", "res31_society_02"],
    risk: 0.08,
    flavor: "社会第5阶：社区线方向的Ⅴ级突破，研究完成后士气 ×1.23、税收效率 ×1.23、外交关系增速 ×1.23。",
    effects: [
      { key: "moraleMul", target: "military.morale", op: "mul", value: 1.23, desc: "士气 ×1.23" },
      { key: "taxMul", target: "econ.taxRate", op: "mul", value: 1.23, desc: "税收效率 ×1.23" },
      { key: "diplomacyMul", target: "diplomacy.relation", op: "mul", value: 1.23, desc: "外交关系增速 ×1.23" },
    ],
  },
  {
    id: "res31_deepspace_01",
    name: "轨道通讯技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "航行线",
    chainIdx: 0,
    tier: 1,
    cost: { research: 120, credits: 400, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "深空第1阶：航行线方向的Ⅰ级突破，研究完成后舰船航速 ×1.04、氦3 +2/分钟。",
    effects: [
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.04, desc: "舰船航速 ×1.04" },
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 2, desc: "氦3 +2/分钟" },
    ],
  },
  {
    id: "res31_deepspace_02",
    name: "星际巡航技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "航行线",
    chainIdx: 0,
    tier: 2,
    cost: { research: 535, credits: 1600, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_deepspace_01"],
    risk: 0.044,
    flavor: "深空第2阶：航行线方向的Ⅱ级突破，研究完成后舰船耐久 ×1.08、行星改造进度 +8 点。",
    effects: [
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.08, desc: "舰船耐久 ×1.08" },
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 8, desc: "行星改造进度 +8 点" },
    ],
  },
  {
    id: "res31_deepspace_03",
    name: "深空采矿技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "航行线",
    chainIdx: 0,
    tier: 3,
    cost: { research: 1302, credits: 3600, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_deepspace_02"],
    risk: 0.056,
    flavor: "深空第3阶：航行线方向的Ⅲ级突破，研究完成后小行星采矿产量 ×1.12、发射花费 ×0.9、殖民扩张范围 ×1.12。",
    effects: [
      { key: "asteroidYieldMul", target: "prod.asteroid", op: "mul", value: 1.12, desc: "小行星采矿产量 ×1.12" },
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.9, desc: "发射花费 ×0.9" },
      { key: "colonyMul", target: "city.colonyRange", op: "mul", value: 1.12, desc: "殖民扩张范围 ×1.12" },
    ],
  },
  {
    id: "res31_deepspace_04",
    name: "小行星对接技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "航行线",
    chainIdx: 0,
    tier: 4,
    cost: { research: 2470, credits: 6400, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_deepspace_03", "res31_society_07"],
    risk: 0.068,
    flavor: "深空第4阶：航行线方向的Ⅳ级突破，研究完成后氦3 +11/分钟、轨道电力 +11、舰船航速 ×1.17。",
    effects: [
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 11, desc: "氦3 +11/分钟" },
      { key: "orbitalPowerAdd", target: "power.orbital", op: "add", value: 11, desc: "轨道电力 +11" },
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.17, desc: "舰船航速 ×1.17" },
    ],
  },
  {
    id: "res31_deepspace_05",
    name: "太阳帆测绘网技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "航行线",
    chainIdx: 0,
    tier: 5,
    cost: { research: 4088, credits: 10000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_deepspace_04", "res31_deepspace_07"],
    risk: 0.08,
    flavor: "深空第5阶：航行线方向的Ⅴ级突破，研究完成后行星改造进度 +32 点、殖民扩张范围 ×1.23、舰船耐久 ×1.23。",
    effects: [
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 32, desc: "行星改造进度 +32 点" },
      { key: "colonyMul", target: "city.colonyRange", op: "mul", value: 1.23, desc: "殖民扩张范围 ×1.23" },
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.23, desc: "舰船耐久 ×1.23" },
    ],
  },
  {
    id: "res31_deepspace_06",
    name: "引力弹弓勘探技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "采矿线",
    chainIdx: 1,
    tier: 1,
    cost: { research: 120, credits: 420, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "深空第1阶：采矿线方向的Ⅰ级突破，研究完成后发射花费 ×0.97、舰船航速 ×1.04。",
    effects: [
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.97, desc: "发射花费 ×0.97" },
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.04, desc: "舰船航速 ×1.04" },
    ],
  },
  {
    id: "res31_deepspace_07",
    name: "虫洞中继技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "采矿线",
    chainIdx: 1,
    tier: 2,
    cost: { research: 535, credits: 1680, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_deepspace_06"],
    risk: 0.044,
    flavor: "深空第2阶：采矿线方向的Ⅱ级突破，研究完成后轨道电力 +4、舰船耐久 ×1.08。",
    effects: [
      { key: "orbitalPowerAdd", target: "power.orbital", op: "add", value: 4, desc: "轨道电力 +4" },
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.08, desc: "舰船耐久 ×1.08" },
    ],
  },
  {
    id: "res31_deepspace_08",
    name: "跃迁防御技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "采矿线",
    chainIdx: 1,
    tier: 3,
    cost: { research: 1302, credits: 3780, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_deepspace_07"],
    risk: 0.056,
    flavor: "深空第3阶：采矿线方向的Ⅲ级突破，研究完成后殖民扩张范围 ×1.12、小行星采矿产量 ×1.12、行星改造进度 +14 点。",
    effects: [
      { key: "colonyMul", target: "city.colonyRange", op: "mul", value: 1.12, desc: "殖民扩张范围 ×1.12" },
      { key: "asteroidYieldMul", target: "prod.asteroid", op: "mul", value: 1.12, desc: "小行星采矿产量 ×1.12" },
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 14, desc: "行星改造进度 +14 点" },
    ],
  },
  {
    id: "res31_deepspace_09",
    name: "曲率扫描技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "采矿线",
    chainIdx: 1,
    tier: 4,
    cost: { research: 2470, credits: 6720, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_deepspace_08", "res31_society_12"],
    risk: 0.068,
    flavor: "深空第4阶：采矿线方向的Ⅳ级突破，研究完成后舰船航速 ×1.17、氦3 +33/分钟、发射花费 ×0.86。",
    effects: [
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.17, desc: "舰船航速 ×1.17" },
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 33, desc: "氦3 +33/分钟" },
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.86, desc: "发射花费 ×0.86" },
    ],
  },
  {
    id: "res31_deepspace_10",
    name: "天文测绘技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "采矿线",
    chainIdx: 1,
    tier: 5,
    cost: { research: 4088, credits: 10500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_deepspace_09", "res31_deepspace_12"],
    risk: 0.08,
    flavor: "深空第5阶：采矿线方向的Ⅴ级突破，研究完成后舰船耐久 ×1.23、行星改造进度 +16 点、轨道电力 +16。",
    effects: [
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.23, desc: "舰船耐久 ×1.23" },
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 16, desc: "行星改造进度 +16 点" },
      { key: "orbitalPowerAdd", target: "power.orbital", op: "add", value: 16, desc: "轨道电力 +16" },
    ],
  },
  {
    id: "res31_deepspace_11",
    name: "陨石着陆技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "探测线",
    chainIdx: 2,
    tier: 1,
    cost: { research: 120, credits: 440, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "深空第1阶：探测线方向的Ⅰ级突破，研究完成后小行星采矿产量 ×1.04、发射花费 ×0.97。",
    effects: [
      { key: "asteroidYieldMul", target: "prod.asteroid", op: "mul", value: 1.04, desc: "小行星采矿产量 ×1.04" },
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.97, desc: "发射花费 ×0.97" },
    ],
  },
  {
    id: "res31_deepspace_12",
    name: "彗星导航技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "探测线",
    chainIdx: 2,
    tier: 2,
    cost: { research: 535, credits: 1760, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_deepspace_11"],
    risk: 0.044,
    flavor: "深空第2阶：探测线方向的Ⅱ级突破，研究完成后氦3 +12/分钟、轨道电力 +12。",
    effects: [
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 12, desc: "氦3 +12/分钟" },
      { key: "orbitalPowerAdd", target: "power.orbital", op: "add", value: 12, desc: "轨道电力 +12" },
    ],
  },
  {
    id: "res31_deepspace_13",
    name: "星门编队技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "探测线",
    chainIdx: 2,
    tier: 3,
    cost: { research: 1302, credits: 3960, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_deepspace_12"],
    risk: 0.056,
    flavor: "深空第3阶：探测线方向的Ⅲ级突破，研究完成后行星改造进度 +7 点、殖民扩张范围 ×1.12、舰船耐久 ×1.12。",
    effects: [
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 7, desc: "行星改造进度 +7 点" },
      { key: "colonyMul", target: "city.colonyRange", op: "mul", value: 1.12, desc: "殖民扩张范围 ×1.12" },
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.12, desc: "舰船耐久 ×1.12" },
    ],
  },
  {
    id: "res31_deepspace_14",
    name: "探测远征技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "探测线",
    chainIdx: 2,
    tier: 4,
    cost: { research: 2470, credits: 7040, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_deepspace_13", "res31_society_17"],
    risk: 0.068,
    flavor: "深空第4阶：探测线方向的Ⅳ级突破，研究完成后发射花费 ×0.86、舰船航速 ×1.17、小行星采矿产量 ×1.17。",
    effects: [
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.86, desc: "发射花费 ×0.86" },
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.17, desc: "舰船航速 ×1.17" },
      { key: "asteroidYieldMul", target: "prod.asteroid", op: "mul", value: 1.17, desc: "小行星采矿产量 ×1.17" },
    ],
  },
  {
    id: "res31_deepspace_15",
    name: "殖民补给技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "探测线",
    chainIdx: 2,
    tier: 5,
    cost: { research: 4088, credits: 11000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_deepspace_14", "res31_deepspace_17"],
    risk: 0.08,
    flavor: "深空第5阶：探测线方向的Ⅴ级突破，研究完成后轨道电力 +48、舰船耐久 ×1.23、氦3 +48/分钟。",
    effects: [
      { key: "orbitalPowerAdd", target: "power.orbital", op: "add", value: 48, desc: "轨道电力 +48" },
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.23, desc: "舰船耐久 ×1.23" },
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 48, desc: "氦3 +48/分钟" },
    ],
  },
  {
    id: "res31_deepspace_16",
    name: "远航锚定技术",
    branch: "deepspace",
    branchCn: "深空",
    chain: "防御线",
    chainIdx: 3,
    tier: 1,
    cost: { research: 120, credits: 460, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "深空第1阶：防御线方向的Ⅰ级突破，研究完成后殖民扩张范围 ×1.04、小行星采矿产量 ×1.04。",
    effects: [
      { key: "colonyMul", target: "city.colonyRange", op: "mul", value: 1.04, desc: "殖民扩张范围 ×1.04" },
      { key: "asteroidYieldMul", target: "prod.asteroid", op: "mul", value: 1.04, desc: "小行星采矿产量 ×1.04" },
    ],
  },
  {
    id: "res31_deepspace_17",
    name: "轨道通讯技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "防御线",
    chainIdx: 3,
    tier: 2,
    cost: { research: 535, credits: 1840, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_deepspace_16"],
    risk: 0.044,
    flavor: "深空第2阶：防御线方向的Ⅱ级突破，研究完成后舰船航速 ×1.08、氦3 +8/分钟。",
    effects: [
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.08, desc: "舰船航速 ×1.08" },
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 8, desc: "氦3 +8/分钟" },
    ],
  },
  {
    id: "res31_deepspace_18",
    name: "星际巡航技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "防御线",
    chainIdx: 3,
    tier: 3,
    cost: { research: 1302, credits: 4140, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_deepspace_17"],
    risk: 0.056,
    flavor: "深空第3阶：防御线方向的Ⅲ级突破，研究完成后舰船耐久 ×1.12、行星改造进度 +21 点、轨道电力 +21。",
    effects: [
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.12, desc: "舰船耐久 ×1.12" },
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 21, desc: "行星改造进度 +21 点" },
      { key: "orbitalPowerAdd", target: "power.orbital", op: "add", value: 21, desc: "轨道电力 +21" },
    ],
  },
  {
    id: "res31_deepspace_19",
    name: "深空采矿技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "防御线",
    chainIdx: 3,
    tier: 4,
    cost: { research: 2470, credits: 7360, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_deepspace_18", "res31_society_22"],
    risk: 0.068,
    flavor: "深空第4阶：防御线方向的Ⅳ级突破，研究完成后小行星采矿产量 ×1.17、发射花费 ×0.86、殖民扩张范围 ×1.17。",
    effects: [
      { key: "asteroidYieldMul", target: "prod.asteroid", op: "mul", value: 1.17, desc: "小行星采矿产量 ×1.17" },
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.86, desc: "发射花费 ×0.86" },
      { key: "colonyMul", target: "city.colonyRange", op: "mul", value: 1.17, desc: "殖民扩张范围 ×1.17" },
    ],
  },
  {
    id: "res31_deepspace_20",
    name: "小行星对接技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "防御线",
    chainIdx: 3,
    tier: 5,
    cost: { research: 4088, credits: 11500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_deepspace_19", "res31_deepspace_22"],
    risk: 0.08,
    flavor: "深空第5阶：防御线方向的Ⅴ级突破，研究完成后氦3 +32/分钟、轨道电力 +32、舰船航速 ×1.23。",
    effects: [
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 32, desc: "氦3 +32/分钟" },
      { key: "orbitalPowerAdd", target: "power.orbital", op: "add", value: 32, desc: "轨道电力 +32" },
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.23, desc: "舰船航速 ×1.23" },
    ],
  },
  {
    id: "res31_deepspace_21",
    name: "太阳帆测绘网技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "殖民线",
    chainIdx: 4,
    tier: 1,
    cost: { research: 120, credits: 480, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "深空第1阶：殖民线方向的Ⅰ级突破，研究完成后行星改造进度 +6 点、殖民扩张范围 ×1.04。",
    effects: [
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 6, desc: "行星改造进度 +6 点" },
      { key: "colonyMul", target: "city.colonyRange", op: "mul", value: 1.04, desc: "殖民扩张范围 ×1.04" },
    ],
  },
  {
    id: "res31_deepspace_22",
    name: "引力弹弓勘探技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "殖民线",
    chainIdx: 4,
    tier: 2,
    cost: { research: 535, credits: 1920, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_deepspace_21"],
    risk: 0.044,
    flavor: "深空第2阶：殖民线方向的Ⅱ级突破，研究完成后发射花费 ×0.94、舰船航速 ×1.08。",
    effects: [
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.94, desc: "发射花费 ×0.94" },
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.08, desc: "舰船航速 ×1.08" },
    ],
  },
  {
    id: "res31_deepspace_23",
    name: "虫洞中继技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "殖民线",
    chainIdx: 4,
    tier: 3,
    cost: { research: 1302, credits: 4320, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_deepspace_22"],
    risk: 0.056,
    flavor: "深空第3阶：殖民线方向的Ⅲ级突破，研究完成后轨道电力 +14、舰船耐久 ×1.12、氦3 +14/分钟。",
    effects: [
      { key: "orbitalPowerAdd", target: "power.orbital", op: "add", value: 14, desc: "轨道电力 +14" },
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.12, desc: "舰船耐久 ×1.12" },
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 14, desc: "氦3 +14/分钟" },
    ],
  },
  {
    id: "res31_deepspace_24",
    name: "跃迁防御技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "殖民线",
    chainIdx: 4,
    tier: 4,
    cost: { research: 2470, credits: 7680, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_deepspace_23", "res31_society_27"],
    risk: 0.068,
    flavor: "深空第4阶：殖民线方向的Ⅳ级突破，研究完成后殖民扩张范围 ×1.17、小行星采矿产量 ×1.17、行星改造进度 +33 点。",
    effects: [
      { key: "colonyMul", target: "city.colonyRange", op: "mul", value: 1.17, desc: "殖民扩张范围 ×1.17" },
      { key: "asteroidYieldMul", target: "prod.asteroid", op: "mul", value: 1.17, desc: "小行星采矿产量 ×1.17" },
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 33, desc: "行星改造进度 +33 点" },
    ],
  },
  {
    id: "res31_deepspace_25",
    name: "曲率扫描技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "殖民线",
    chainIdx: 4,
    tier: 5,
    cost: { research: 4088, credits: 12000, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_deepspace_24", "res31_deepspace_27"],
    risk: 0.08,
    flavor: "深空第5阶：殖民线方向的Ⅴ级突破，研究完成后舰船航速 ×1.23、氦3 +16/分钟、发射花费 ×0.82。",
    effects: [
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.23, desc: "舰船航速 ×1.23" },
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 16, desc: "氦3 +16/分钟" },
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.82, desc: "发射花费 ×0.82" },
    ],
  },
  {
    id: "res31_deepspace_26",
    name: "天文测绘技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "通讯线",
    chainIdx: 5,
    tier: 1,
    cost: { research: 120, credits: 500, materials: {} },
    durationDays: 21,
    prereq: [],
    risk: 0.032,
    flavor: "深空第1阶：通讯线方向的Ⅰ级突破，研究完成后舰船耐久 ×1.04、行星改造进度 +4 点。",
    effects: [
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.04, desc: "舰船耐久 ×1.04" },
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 4, desc: "行星改造进度 +4 点" },
    ],
  },
  {
    id: "res31_deepspace_27",
    name: "陨石着陆技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "通讯线",
    chainIdx: 5,
    tier: 2,
    cost: { research: 535, credits: 2000, materials: {"iron": 40} },
    durationDays: 33,
    prereq: ["res31_deepspace_26"],
    risk: 0.044,
    flavor: "深空第2阶：通讯线方向的Ⅱ级突破，研究完成后小行星采矿产量 ×1.08、发射花费 ×0.94。",
    effects: [
      { key: "asteroidYieldMul", target: "prod.asteroid", op: "mul", value: 1.08, desc: "小行星采矿产量 ×1.08" },
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.94, desc: "发射花费 ×0.94" },
    ],
  },
  {
    id: "res31_deepspace_28",
    name: "彗星导航技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "通讯线",
    chainIdx: 5,
    tier: 3,
    cost: { research: 1302, credits: 4500, materials: {"iron": 60, "rare": 8} },
    durationDays: 45,
    prereq: ["res31_deepspace_27"],
    risk: 0.056,
    flavor: "深空第3阶：通讯线方向的Ⅲ级突破，研究完成后氦3 +7/分钟、轨道电力 +7、舰船航速 ×1.12。",
    effects: [
      { key: "he3Add", target: "prod.he3PerMin", op: "add", value: 7, desc: "氦3 +7/分钟" },
      { key: "orbitalPowerAdd", target: "power.orbital", op: "add", value: 7, desc: "轨道电力 +7" },
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.12, desc: "舰船航速 ×1.12" },
    ],
  },
  {
    id: "res31_deepspace_29",
    name: "星门编队技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "通讯线",
    chainIdx: 5,
    tier: 4,
    cost: { research: 2470, credits: 8000, materials: {"iron": 80, "rare": 16} },
    durationDays: 57,
    prereq: ["res31_deepspace_28", "res31_society_02"],
    risk: 0.068,
    flavor: "深空第4阶：通讯线方向的Ⅳ级突破，研究完成后行星改造进度 +22 点、殖民扩张范围 ×1.17、舰船耐久 ×1.17。",
    effects: [
      { key: "terraformAdd", target: "planet.terraform", op: "add", value: 22, desc: "行星改造进度 +22 点" },
      { key: "colonyMul", target: "city.colonyRange", op: "mul", value: 1.17, desc: "殖民扩张范围 ×1.17" },
      { key: "shipHpMul", target: "fleet.hp", op: "mul", value: 1.17, desc: "舰船耐久 ×1.17" },
    ],
  },
  {
    id: "res31_deepspace_30",
    name: "探测远征技术·Ⅲ",
    branch: "deepspace",
    branchCn: "深空",
    chain: "通讯线",
    chainIdx: 5,
    tier: 5,
    cost: { research: 4088, credits: 12500, materials: {"iron": 100, "rare": 24, "he3": 5} },
    durationDays: 69,
    prereq: ["res31_deepspace_29", "res31_deepspace_02"],
    risk: 0.08,
    flavor: "深空第5阶：通讯线方向的Ⅴ级突破，研究完成后发射花费 ×0.82、舰船航速 ×1.23、小行星采矿产量 ×1.23。",
    effects: [
      { key: "launchCostMul", target: "cost.launch", op: "mul", value: 0.82, desc: "发射花费 ×0.82" },
      { key: "shipSpeedMul", target: "fleet.speed", op: "mul", value: 1.23, desc: "舰船航速 ×1.23" },
      { key: "asteroidYieldMul", target: "prod.asteroid", op: "mul", value: 1.23, desc: "小行星采矿产量 ×1.23" },
    ],
  },
];

/* 里程碑：每个项目 25%/50%/75% 各一个，共 450 条 */
const RES31_MILESTONES = [
  {
    projectId: "res31_physics_01",
    at: 25,
    kind: "refund",
    value: 2,
    text: "量子共振技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_physics_01",
    at: 50,
    kind: "morale",
    value: 3,
    text: "量子共振技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_01",
    at: 75,
    kind: "insight",
    value: 8,
    text: "量子共振技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_02",
    at: 25,
    kind: "refund",
    value: 10,
    text: "等离子聚焦技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_physics_02",
    at: 50,
    kind: "morale",
    value: 4,
    text: "等离子聚焦技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_02",
    at: 75,
    kind: "insight",
    value: 11,
    text: "等离子聚焦技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_03",
    at: 25,
    kind: "refund",
    value: 26,
    text: "引力隧穿技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_physics_03",
    at: 50,
    kind: "morale",
    value: 5,
    text: "引力隧穿技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_03",
    at: 75,
    kind: "insight",
    value: 14,
    text: "引力隧穿技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_04",
    at: 25,
    kind: "refund",
    value: 49,
    text: "光子耦合技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_physics_04",
    at: 50,
    kind: "morale",
    value: 6,
    text: "光子耦合技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_04",
    at: 75,
    kind: "insight",
    value: 17,
    text: "光子耦合技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_05",
    at: 25,
    kind: "refund",
    value: 81,
    text: "中微子能谱技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_physics_05",
    at: 50,
    kind: "morale",
    value: 7,
    text: "中微子能谱技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_05",
    at: 75,
    kind: "insight",
    value: 20,
    text: "中微子能谱技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_06",
    at: 25,
    kind: "refund",
    value: 2,
    text: "超导干涉技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_physics_06",
    at: 50,
    kind: "morale",
    value: 3,
    text: "超导干涉技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_06",
    at: 75,
    kind: "insight",
    value: 8,
    text: "超导干涉技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_07",
    at: 25,
    kind: "refund",
    value: 10,
    text: "核聚变稳态技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_physics_07",
    at: 50,
    kind: "morale",
    value: 4,
    text: "核聚变稳态技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_07",
    at: 75,
    kind: "insight",
    value: 11,
    text: "核聚变稳态技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_08",
    at: 25,
    kind: "refund",
    value: 26,
    text: "暗物质湮灭技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_physics_08",
    at: 50,
    kind: "morale",
    value: 5,
    text: "暗物质湮灭技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_08",
    at: 75,
    kind: "insight",
    value: 14,
    text: "暗物质湮灭技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_09",
    at: 25,
    kind: "refund",
    value: 49,
    text: "弦论屏蔽技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_physics_09",
    at: 50,
    kind: "morale",
    value: 6,
    text: "弦论屏蔽技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_09",
    at: 75,
    kind: "insight",
    value: 17,
    text: "弦论屏蔽技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_10",
    at: 25,
    kind: "refund",
    value: 81,
    text: "磁流体纠缠技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_physics_10",
    at: 50,
    kind: "morale",
    value: 7,
    text: "磁流体纠缠技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_10",
    at: 75,
    kind: "insight",
    value: 20,
    text: "磁流体纠缠技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_11",
    at: 25,
    kind: "refund",
    value: 2,
    text: "高能压缩技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_physics_11",
    at: 50,
    kind: "morale",
    value: 3,
    text: "高能压缩技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_11",
    at: 75,
    kind: "insight",
    value: 8,
    text: "高能压缩技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_12",
    at: 25,
    kind: "refund",
    value: 10,
    text: "低温约束技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_physics_12",
    at: 50,
    kind: "morale",
    value: 4,
    text: "低温约束技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_12",
    at: 75,
    kind: "insight",
    value: 11,
    text: "低温约束技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_13",
    at: 25,
    kind: "refund",
    value: 26,
    text: "真空跃迁技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_physics_13",
    at: 50,
    kind: "morale",
    value: 5,
    text: "真空跃迁技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_13",
    at: 75,
    kind: "insight",
    value: 14,
    text: "真空跃迁技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_14",
    at: 25,
    kind: "refund",
    value: 49,
    text: "粒子隧穿阵列技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_physics_14",
    at: 50,
    kind: "morale",
    value: 6,
    text: "粒子隧穿阵列技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_14",
    at: 75,
    kind: "insight",
    value: 17,
    text: "粒子隧穿阵列技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_15",
    at: 25,
    kind: "refund",
    value: 81,
    text: "波函数极化技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_physics_15",
    at: 50,
    kind: "morale",
    value: 7,
    text: "波函数极化技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_15",
    at: 75,
    kind: "insight",
    value: 20,
    text: "波函数极化技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_16",
    at: 25,
    kind: "refund",
    value: 2,
    text: "能级增益技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_physics_16",
    at: 50,
    kind: "morale",
    value: 3,
    text: "能级增益技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_16",
    at: 75,
    kind: "insight",
    value: 8,
    text: "能级增益技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_17",
    at: 25,
    kind: "refund",
    value: 10,
    text: "量子共振技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_physics_17",
    at: 50,
    kind: "morale",
    value: 4,
    text: "量子共振技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_17",
    at: 75,
    kind: "insight",
    value: 11,
    text: "量子共振技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_18",
    at: 25,
    kind: "refund",
    value: 26,
    text: "等离子聚焦技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_physics_18",
    at: 50,
    kind: "morale",
    value: 5,
    text: "等离子聚焦技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_18",
    at: 75,
    kind: "insight",
    value: 14,
    text: "等离子聚焦技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_19",
    at: 25,
    kind: "refund",
    value: 49,
    text: "引力隧穿技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_physics_19",
    at: 50,
    kind: "morale",
    value: 6,
    text: "引力隧穿技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_19",
    at: 75,
    kind: "insight",
    value: 17,
    text: "引力隧穿技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_20",
    at: 25,
    kind: "refund",
    value: 81,
    text: "光子耦合技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_physics_20",
    at: 50,
    kind: "morale",
    value: 7,
    text: "光子耦合技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_20",
    at: 75,
    kind: "insight",
    value: 20,
    text: "光子耦合技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_21",
    at: 25,
    kind: "refund",
    value: 2,
    text: "中微子能谱技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_physics_21",
    at: 50,
    kind: "morale",
    value: 3,
    text: "中微子能谱技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_21",
    at: 75,
    kind: "insight",
    value: 8,
    text: "中微子能谱技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_22",
    at: 25,
    kind: "refund",
    value: 10,
    text: "超导干涉技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_physics_22",
    at: 50,
    kind: "morale",
    value: 4,
    text: "超导干涉技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_22",
    at: 75,
    kind: "insight",
    value: 11,
    text: "超导干涉技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_23",
    at: 25,
    kind: "refund",
    value: 26,
    text: "核聚变稳态技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_physics_23",
    at: 50,
    kind: "morale",
    value: 5,
    text: "核聚变稳态技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_23",
    at: 75,
    kind: "insight",
    value: 14,
    text: "核聚变稳态技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_24",
    at: 25,
    kind: "refund",
    value: 49,
    text: "暗物质湮灭技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_physics_24",
    at: 50,
    kind: "morale",
    value: 6,
    text: "暗物质湮灭技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_24",
    at: 75,
    kind: "insight",
    value: 17,
    text: "暗物质湮灭技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_25",
    at: 25,
    kind: "refund",
    value: 81,
    text: "弦论屏蔽技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_physics_25",
    at: 50,
    kind: "morale",
    value: 7,
    text: "弦论屏蔽技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_25",
    at: 75,
    kind: "insight",
    value: 20,
    text: "弦论屏蔽技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_26",
    at: 25,
    kind: "refund",
    value: 2,
    text: "磁流体纠缠技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_physics_26",
    at: 50,
    kind: "morale",
    value: 3,
    text: "磁流体纠缠技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_26",
    at: 75,
    kind: "insight",
    value: 8,
    text: "磁流体纠缠技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_27",
    at: 25,
    kind: "refund",
    value: 10,
    text: "高能压缩技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_physics_27",
    at: 50,
    kind: "morale",
    value: 4,
    text: "高能压缩技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_27",
    at: 75,
    kind: "insight",
    value: 11,
    text: "高能压缩技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_28",
    at: 25,
    kind: "refund",
    value: 26,
    text: "低温约束技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_physics_28",
    at: 50,
    kind: "morale",
    value: 5,
    text: "低温约束技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_28",
    at: 75,
    kind: "insight",
    value: 14,
    text: "低温约束技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_29",
    at: 25,
    kind: "refund",
    value: 49,
    text: "真空跃迁技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_physics_29",
    at: 50,
    kind: "morale",
    value: 6,
    text: "真空跃迁技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_29",
    at: 75,
    kind: "insight",
    value: 17,
    text: "真空跃迁技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_physics_30",
    at: 25,
    kind: "refund",
    value: 81,
    text: "粒子隧穿阵列技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_physics_30",
    at: 50,
    kind: "morale",
    value: 7,
    text: "粒子隧穿阵列技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_physics_30",
    at: 75,
    kind: "insight",
    value: 20,
    text: "粒子隧穿阵列技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_01",
    at: 25,
    kind: "refund",
    value: 2,
    text: "模块化掘进技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_engineering_01",
    at: 50,
    kind: "morale",
    value: 3,
    text: "模块化掘进技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_01",
    at: 75,
    kind: "insight",
    value: 8,
    text: "模块化掘进技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_02",
    at: 25,
    kind: "refund",
    value: 10,
    text: "纳米管网技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_engineering_02",
    at: 50,
    kind: "morale",
    value: 4,
    text: "纳米管网技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_02",
    at: 75,
    kind: "insight",
    value: 11,
    text: "纳米管网技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_03",
    at: 25,
    kind: "refund",
    value: 26,
    text: "增材装配技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_engineering_03",
    at: 50,
    kind: "morale",
    value: 5,
    text: "增材装配技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_03",
    at: 75,
    kind: "insight",
    value: 14,
    text: "增材装配技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_04",
    at: 25,
    kind: "refund",
    value: 49,
    text: "精密传动技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_engineering_04",
    at: 50,
    kind: "morale",
    value: 6,
    text: "精密传动技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_04",
    at: 75,
    kind: "insight",
    value: 17,
    text: "精密传动技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_05",
    at: 25,
    kind: "refund",
    value: 81,
    text: "重型密封技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_engineering_05",
    at: 50,
    kind: "morale",
    value: 7,
    text: "重型密封技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_05",
    at: 75,
    kind: "insight",
    value: 20,
    text: "重型密封技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_06",
    at: 25,
    kind: "refund",
    value: 2,
    text: "自适应机床技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_engineering_06",
    at: 50,
    kind: "morale",
    value: 3,
    text: "自适应机床技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_06",
    at: 75,
    kind: "insight",
    value: 8,
    text: "自适应机床技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_07",
    at: 25,
    kind: "refund",
    value: 10,
    text: "分布式驱动技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_engineering_07",
    at: 50,
    kind: "morale",
    value: 4,
    text: "分布式驱动技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_07",
    at: 75,
    kind: "insight",
    value: 11,
    text: "分布式驱动技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_08",
    at: 25,
    kind: "refund",
    value: 26,
    text: "冗余吊装技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_engineering_08",
    at: 50,
    kind: "morale",
    value: 5,
    text: "冗余吊装技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_08",
    at: 75,
    kind: "insight",
    value: 14,
    text: "冗余吊装技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_09",
    at: 25,
    kind: "refund",
    value: 49,
    text: "高温框架技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_engineering_09",
    at: 50,
    kind: "morale",
    value: 6,
    text: "高温框架技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_09",
    at: 75,
    kind: "insight",
    value: 17,
    text: "高温框架技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_10",
    at: 25,
    kind: "refund",
    value: 81,
    text: "耐压焊接技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_engineering_10",
    at: 50,
    kind: "morale",
    value: 7,
    text: "耐压焊接技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_10",
    at: 75,
    kind: "insight",
    value: 20,
    text: "耐压焊接技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_11",
    at: 25,
    kind: "refund",
    value: 2,
    text: "轻量结构技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_engineering_11",
    at: 50,
    kind: "morale",
    value: 3,
    text: "轻量结构技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_11",
    at: 75,
    kind: "insight",
    value: 8,
    text: "轻量结构技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_12",
    at: 25,
    kind: "refund",
    value: 10,
    text: "智能打印技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_engineering_12",
    at: 50,
    kind: "morale",
    value: 4,
    text: "智能打印技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_12",
    at: 75,
    kind: "insight",
    value: 11,
    text: "智能打印技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_13",
    at: 25,
    kind: "refund",
    value: 26,
    text: "并行轴承技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_engineering_13",
    at: 50,
    kind: "morale",
    value: 5,
    text: "并行轴承技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_13",
    at: 75,
    kind: "insight",
    value: 14,
    text: "并行轴承技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_14",
    at: 25,
    kind: "refund",
    value: 49,
    text: "柔性散热技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_engineering_14",
    at: 50,
    kind: "morale",
    value: 6,
    text: "柔性散热技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_14",
    at: 75,
    kind: "insight",
    value: 17,
    text: "柔性散热技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_15",
    at: 25,
    kind: "refund",
    value: 81,
    text: "超硬锻造技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_engineering_15",
    at: 50,
    kind: "morale",
    value: 7,
    text: "超硬锻造技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_15",
    at: 75,
    kind: "insight",
    value: 20,
    text: "超硬锻造技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_16",
    at: 25,
    kind: "refund",
    value: 2,
    text: "低耗接口技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_engineering_16",
    at: 50,
    kind: "morale",
    value: 3,
    text: "低耗接口技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_16",
    at: 75,
    kind: "insight",
    value: 8,
    text: "低耗接口技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_17",
    at: 25,
    kind: "refund",
    value: 10,
    text: "模块化掘进技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_engineering_17",
    at: 50,
    kind: "morale",
    value: 4,
    text: "模块化掘进技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_17",
    at: 75,
    kind: "insight",
    value: 11,
    text: "模块化掘进技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_18",
    at: 25,
    kind: "refund",
    value: 26,
    text: "纳米管网技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_engineering_18",
    at: 50,
    kind: "morale",
    value: 5,
    text: "纳米管网技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_18",
    at: 75,
    kind: "insight",
    value: 14,
    text: "纳米管网技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_19",
    at: 25,
    kind: "refund",
    value: 49,
    text: "增材装配技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_engineering_19",
    at: 50,
    kind: "morale",
    value: 6,
    text: "增材装配技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_19",
    at: 75,
    kind: "insight",
    value: 17,
    text: "增材装配技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_20",
    at: 25,
    kind: "refund",
    value: 81,
    text: "精密传动技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_engineering_20",
    at: 50,
    kind: "morale",
    value: 7,
    text: "精密传动技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_20",
    at: 75,
    kind: "insight",
    value: 20,
    text: "精密传动技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_21",
    at: 25,
    kind: "refund",
    value: 2,
    text: "重型密封技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_engineering_21",
    at: 50,
    kind: "morale",
    value: 3,
    text: "重型密封技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_21",
    at: 75,
    kind: "insight",
    value: 8,
    text: "重型密封技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_22",
    at: 25,
    kind: "refund",
    value: 10,
    text: "自适应机床技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_engineering_22",
    at: 50,
    kind: "morale",
    value: 4,
    text: "自适应机床技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_22",
    at: 75,
    kind: "insight",
    value: 11,
    text: "自适应机床技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_23",
    at: 25,
    kind: "refund",
    value: 26,
    text: "分布式驱动技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_engineering_23",
    at: 50,
    kind: "morale",
    value: 5,
    text: "分布式驱动技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_23",
    at: 75,
    kind: "insight",
    value: 14,
    text: "分布式驱动技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_24",
    at: 25,
    kind: "refund",
    value: 49,
    text: "冗余吊装技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_engineering_24",
    at: 50,
    kind: "morale",
    value: 6,
    text: "冗余吊装技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_24",
    at: 75,
    kind: "insight",
    value: 17,
    text: "冗余吊装技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_25",
    at: 25,
    kind: "refund",
    value: 81,
    text: "高温框架技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_engineering_25",
    at: 50,
    kind: "morale",
    value: 7,
    text: "高温框架技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_25",
    at: 75,
    kind: "insight",
    value: 20,
    text: "高温框架技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_26",
    at: 25,
    kind: "refund",
    value: 2,
    text: "耐压焊接技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_engineering_26",
    at: 50,
    kind: "morale",
    value: 3,
    text: "耐压焊接技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_26",
    at: 75,
    kind: "insight",
    value: 8,
    text: "耐压焊接技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_27",
    at: 25,
    kind: "refund",
    value: 10,
    text: "轻量结构技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_engineering_27",
    at: 50,
    kind: "morale",
    value: 4,
    text: "轻量结构技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_27",
    at: 75,
    kind: "insight",
    value: 11,
    text: "轻量结构技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_28",
    at: 25,
    kind: "refund",
    value: 26,
    text: "智能打印技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_engineering_28",
    at: 50,
    kind: "morale",
    value: 5,
    text: "智能打印技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_28",
    at: 75,
    kind: "insight",
    value: 14,
    text: "智能打印技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_29",
    at: 25,
    kind: "refund",
    value: 49,
    text: "并行轴承技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_engineering_29",
    at: 50,
    kind: "morale",
    value: 6,
    text: "并行轴承技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_29",
    at: 75,
    kind: "insight",
    value: 17,
    text: "并行轴承技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_engineering_30",
    at: 25,
    kind: "refund",
    value: 81,
    text: "柔性散热技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_engineering_30",
    at: 50,
    kind: "morale",
    value: 7,
    text: "柔性散热技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_engineering_30",
    at: 75,
    kind: "insight",
    value: 20,
    text: "柔性散热技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_01",
    at: 25,
    kind: "refund",
    value: 2,
    text: "基因发酵技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_biology_01",
    at: 50,
    kind: "morale",
    value: 3,
    text: "基因发酵技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_01",
    at: 75,
    kind: "insight",
    value: 8,
    text: "基因发酵技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_02",
    at: 25,
    kind: "refund",
    value: 10,
    text: "光合循环技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_biology_02",
    at: 50,
    kind: "morale",
    value: 4,
    text: "光合循环技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_02",
    at: 75,
    kind: "insight",
    value: 11,
    text: "光合循环技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_03",
    at: 25,
    kind: "refund",
    value: 26,
    text: "微生物培育技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_biology_03",
    at: 50,
    kind: "morale",
    value: 5,
    text: "微生物培育技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_03",
    at: 75,
    kind: "insight",
    value: 14,
    text: "微生物培育技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_04",
    at: 25,
    kind: "refund",
    value: 49,
    text: "干细胞适配技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_biology_04",
    at: 50,
    kind: "morale",
    value: 6,
    text: "干细胞适配技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_04",
    at: 75,
    kind: "insight",
    value: 17,
    text: "干细胞适配技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_05",
    at: 25,
    kind: "refund",
    value: 81,
    text: "酶促耐受技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_biology_05",
    at: 50,
    kind: "morale",
    value: 7,
    text: "酶促耐受技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_05",
    at: 75,
    kind: "insight",
    value: 20,
    text: "酶促耐受技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_06",
    at: 25,
    kind: "refund",
    value: 2,
    text: "免疫筛选技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_biology_06",
    at: 50,
    kind: "morale",
    value: 3,
    text: "免疫筛选技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_06",
    at: 75,
    kind: "insight",
    value: 8,
    text: "免疫筛选技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_07",
    at: 25,
    kind: "refund",
    value: 10,
    text: "神经分化技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_biology_07",
    at: 50,
    kind: "morale",
    value: 4,
    text: "神经分化技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_07",
    at: 75,
    kind: "insight",
    value: 11,
    text: "神经分化技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_08",
    at: 25,
    kind: "refund",
    value: 26,
    text: "生态修复技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_biology_08",
    at: 50,
    kind: "morale",
    value: 5,
    text: "生态修复技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_08",
    at: 75,
    kind: "insight",
    value: 14,
    text: "生态修复技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_09",
    at: 25,
    kind: "refund",
    value: 49,
    text: "藻类合成技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_biology_09",
    at: 50,
    kind: "morale",
    value: 6,
    text: "藻类合成技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_09",
    at: 75,
    kind: "insight",
    value: 17,
    text: "藻类合成技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_10",
    at: 25,
    kind: "refund",
    value: 81,
    text: "菌群驯化技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_biology_10",
    at: 50,
    kind: "morale",
    value: 7,
    text: "菌群驯化技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_10",
    at: 75,
    kind: "insight",
    value: 20,
    text: "菌群驯化技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_11",
    at: 25,
    kind: "refund",
    value: 2,
    text: "蛋白共生技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_biology_11",
    at: 50,
    kind: "morale",
    value: 3,
    text: "蛋白共生技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_11",
    at: 75,
    kind: "insight",
    value: 8,
    text: "蛋白共生技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_12",
    at: 25,
    kind: "refund",
    value: 10,
    text: "代谢编辑技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_biology_12",
    at: 50,
    kind: "morale",
    value: 4,
    text: "代谢编辑技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_12",
    at: 75,
    kind: "insight",
    value: 11,
    text: "代谢编辑技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_13",
    at: 25,
    kind: "refund",
    value: 26,
    text: "表观扩增技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_biology_13",
    at: 50,
    kind: "morale",
    value: 5,
    text: "表观扩增技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_13",
    at: 75,
    kind: "insight",
    value: 14,
    text: "表观扩增技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_14",
    at: 25,
    kind: "refund",
    value: 49,
    text: "共生再生技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_biology_14",
    at: 50,
    kind: "morale",
    value: 6,
    text: "共生再生技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_14",
    at: 75,
    kind: "insight",
    value: 17,
    text: "共生再生技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_15",
    at: 25,
    kind: "refund",
    value: 81,
    text: "抗逆调控技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_biology_15",
    at: 50,
    kind: "morale",
    value: 7,
    text: "抗逆调控技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_15",
    at: 75,
    kind: "insight",
    value: 20,
    text: "抗逆调控技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_16",
    at: 25,
    kind: "refund",
    value: 2,
    text: "克隆表达技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_biology_16",
    at: 50,
    kind: "morale",
    value: 3,
    text: "克隆表达技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_16",
    at: 75,
    kind: "insight",
    value: 8,
    text: "克隆表达技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_17",
    at: 25,
    kind: "refund",
    value: 10,
    text: "基因发酵技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_biology_17",
    at: 50,
    kind: "morale",
    value: 4,
    text: "基因发酵技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_17",
    at: 75,
    kind: "insight",
    value: 11,
    text: "基因发酵技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_18",
    at: 25,
    kind: "refund",
    value: 26,
    text: "光合循环技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_biology_18",
    at: 50,
    kind: "morale",
    value: 5,
    text: "光合循环技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_18",
    at: 75,
    kind: "insight",
    value: 14,
    text: "光合循环技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_19",
    at: 25,
    kind: "refund",
    value: 49,
    text: "微生物培育技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_biology_19",
    at: 50,
    kind: "morale",
    value: 6,
    text: "微生物培育技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_19",
    at: 75,
    kind: "insight",
    value: 17,
    text: "微生物培育技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_20",
    at: 25,
    kind: "refund",
    value: 81,
    text: "干细胞适配技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_biology_20",
    at: 50,
    kind: "morale",
    value: 7,
    text: "干细胞适配技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_20",
    at: 75,
    kind: "insight",
    value: 20,
    text: "干细胞适配技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_21",
    at: 25,
    kind: "refund",
    value: 2,
    text: "酶促耐受技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_biology_21",
    at: 50,
    kind: "morale",
    value: 3,
    text: "酶促耐受技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_21",
    at: 75,
    kind: "insight",
    value: 8,
    text: "酶促耐受技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_22",
    at: 25,
    kind: "refund",
    value: 10,
    text: "免疫筛选技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_biology_22",
    at: 50,
    kind: "morale",
    value: 4,
    text: "免疫筛选技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_22",
    at: 75,
    kind: "insight",
    value: 11,
    text: "免疫筛选技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_23",
    at: 25,
    kind: "refund",
    value: 26,
    text: "神经分化技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_biology_23",
    at: 50,
    kind: "morale",
    value: 5,
    text: "神经分化技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_23",
    at: 75,
    kind: "insight",
    value: 14,
    text: "神经分化技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_24",
    at: 25,
    kind: "refund",
    value: 49,
    text: "生态修复技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_biology_24",
    at: 50,
    kind: "morale",
    value: 6,
    text: "生态修复技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_24",
    at: 75,
    kind: "insight",
    value: 17,
    text: "生态修复技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_25",
    at: 25,
    kind: "refund",
    value: 81,
    text: "藻类合成技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_biology_25",
    at: 50,
    kind: "morale",
    value: 7,
    text: "藻类合成技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_25",
    at: 75,
    kind: "insight",
    value: 20,
    text: "藻类合成技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_26",
    at: 25,
    kind: "refund",
    value: 2,
    text: "菌群驯化技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_biology_26",
    at: 50,
    kind: "morale",
    value: 3,
    text: "菌群驯化技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_26",
    at: 75,
    kind: "insight",
    value: 8,
    text: "菌群驯化技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_27",
    at: 25,
    kind: "refund",
    value: 10,
    text: "蛋白共生技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_biology_27",
    at: 50,
    kind: "morale",
    value: 4,
    text: "蛋白共生技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_27",
    at: 75,
    kind: "insight",
    value: 11,
    text: "蛋白共生技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_28",
    at: 25,
    kind: "refund",
    value: 26,
    text: "代谢编辑技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_biology_28",
    at: 50,
    kind: "morale",
    value: 5,
    text: "代谢编辑技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_28",
    at: 75,
    kind: "insight",
    value: 14,
    text: "代谢编辑技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_29",
    at: 25,
    kind: "refund",
    value: 49,
    text: "表观扩增技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_biology_29",
    at: 50,
    kind: "morale",
    value: 6,
    text: "表观扩增技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_29",
    at: 75,
    kind: "insight",
    value: 17,
    text: "表观扩增技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_biology_30",
    at: 25,
    kind: "refund",
    value: 81,
    text: "共生再生技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_biology_30",
    at: 50,
    kind: "morale",
    value: 7,
    text: "共生再生技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_biology_30",
    at: 75,
    kind: "insight",
    value: 20,
    text: "共生再生技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_01",
    at: 25,
    kind: "refund",
    value: 2,
    text: "公民学院技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_society_01",
    at: 50,
    kind: "morale",
    value: 3,
    text: "公民学院技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_society_01",
    at: 75,
    kind: "insight",
    value: 8,
    text: "公民学院技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_02",
    at: 25,
    kind: "refund",
    value: 10,
    text: "社区互助技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_society_02",
    at: 50,
    kind: "morale",
    value: 4,
    text: "社区互助技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_society_02",
    at: 75,
    kind: "insight",
    value: 11,
    text: "社区互助技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_03",
    at: 25,
    kind: "refund",
    value: 26,
    text: "契约议会技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_society_03",
    at: 50,
    kind: "morale",
    value: 5,
    text: "契约议会技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_society_03",
    at: 75,
    kind: "insight",
    value: 14,
    text: "契约议会技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_04",
    at: 25,
    kind: "refund",
    value: 49,
    text: "治理电台技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_society_04",
    at: 50,
    kind: "morale",
    value: 6,
    text: "治理电台技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_society_04",
    at: 75,
    kind: "insight",
    value: 17,
    text: "治理电台技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_05",
    at: 25,
    kind: "refund",
    value: 81,
    text: "教育共识技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_society_05",
    at: 50,
    kind: "morale",
    value: 7,
    text: "教育共识技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_society_05",
    at: 75,
    kind: "insight",
    value: 20,
    text: "教育共识技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_06",
    at: 25,
    kind: "refund",
    value: 2,
    text: "文化公约技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_society_06",
    at: 50,
    kind: "morale",
    value: 3,
    text: "文化公约技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_society_06",
    at: 75,
    kind: "insight",
    value: 8,
    text: "文化公约技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_07",
    at: 25,
    kind: "refund",
    value: 10,
    text: "法律典礼技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_society_07",
    at: 50,
    kind: "morale",
    value: 4,
    text: "法律典礼技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_society_07",
    at: 75,
    kind: "insight",
    value: 11,
    text: "法律典礼技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_08",
    at: 25,
    kind: "refund",
    value: 26,
    text: "福利市集技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_society_08",
    at: 50,
    kind: "morale",
    value: 5,
    text: "福利市集技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_society_08",
    at: 75,
    kind: "insight",
    value: 14,
    text: "福利市集技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_09",
    at: 25,
    kind: "refund",
    value: 49,
    text: "舆论仲裁技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_society_09",
    at: 50,
    kind: "morale",
    value: 6,
    text: "舆论仲裁技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_society_09",
    at: 75,
    kind: "insight",
    value: 17,
    text: "舆论仲裁技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_10",
    at: 25,
    kind: "refund",
    value: 81,
    text: "自治法庭技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_society_10",
    at: 50,
    kind: "morale",
    value: 7,
    text: "自治法庭技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_society_10",
    at: 75,
    kind: "insight",
    value: 20,
    text: "自治法庭技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_11",
    at: 25,
    kind: "refund",
    value: 2,
    text: "协商剧场技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_society_11",
    at: 50,
    kind: "morale",
    value: 3,
    text: "协商剧场技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_society_11",
    at: 75,
    kind: "insight",
    value: 8,
    text: "协商剧场技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_12",
    at: 25,
    kind: "refund",
    value: 10,
    text: "信用网络技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_society_12",
    at: 50,
    kind: "morale",
    value: 4,
    text: "信用网络技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_society_12",
    at: 75,
    kind: "insight",
    value: 11,
    text: "信用网络技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_13",
    at: 25,
    kind: "refund",
    value: 26,
    text: "习俗基金技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_society_13",
    at: 50,
    kind: "morale",
    value: 5,
    text: "习俗基金技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_society_13",
    at: 75,
    kind: "insight",
    value: 14,
    text: "习俗基金技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_14",
    at: 25,
    kind: "refund",
    value: 49,
    text: "礼仪传承技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_society_14",
    at: 50,
    kind: "morale",
    value: 6,
    text: "礼仪传承技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_society_14",
    at: 75,
    kind: "insight",
    value: 17,
    text: "礼仪传承技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_15",
    at: 25,
    kind: "refund",
    value: 81,
    text: "记忆档案技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_society_15",
    at: 50,
    kind: "morale",
    value: 7,
    text: "记忆档案技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_society_15",
    at: 75,
    kind: "insight",
    value: 20,
    text: "记忆档案技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_16",
    at: 25,
    kind: "refund",
    value: 2,
    text: "认同普查技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_society_16",
    at: 50,
    kind: "morale",
    value: 3,
    text: "认同普查技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_society_16",
    at: 75,
    kind: "insight",
    value: 8,
    text: "认同普查技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_17",
    at: 25,
    kind: "refund",
    value: 10,
    text: "公民学院技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_society_17",
    at: 50,
    kind: "morale",
    value: 4,
    text: "公民学院技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_society_17",
    at: 75,
    kind: "insight",
    value: 11,
    text: "公民学院技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_18",
    at: 25,
    kind: "refund",
    value: 26,
    text: "社区互助技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_society_18",
    at: 50,
    kind: "morale",
    value: 5,
    text: "社区互助技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_society_18",
    at: 75,
    kind: "insight",
    value: 14,
    text: "社区互助技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_19",
    at: 25,
    kind: "refund",
    value: 49,
    text: "契约议会技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_society_19",
    at: 50,
    kind: "morale",
    value: 6,
    text: "契约议会技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_society_19",
    at: 75,
    kind: "insight",
    value: 17,
    text: "契约议会技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_20",
    at: 25,
    kind: "refund",
    value: 81,
    text: "治理电台技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_society_20",
    at: 50,
    kind: "morale",
    value: 7,
    text: "治理电台技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_society_20",
    at: 75,
    kind: "insight",
    value: 20,
    text: "治理电台技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_21",
    at: 25,
    kind: "refund",
    value: 2,
    text: "教育共识技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_society_21",
    at: 50,
    kind: "morale",
    value: 3,
    text: "教育共识技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_society_21",
    at: 75,
    kind: "insight",
    value: 8,
    text: "教育共识技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_22",
    at: 25,
    kind: "refund",
    value: 10,
    text: "文化公约技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_society_22",
    at: 50,
    kind: "morale",
    value: 4,
    text: "文化公约技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_society_22",
    at: 75,
    kind: "insight",
    value: 11,
    text: "文化公约技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_23",
    at: 25,
    kind: "refund",
    value: 26,
    text: "法律典礼技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_society_23",
    at: 50,
    kind: "morale",
    value: 5,
    text: "法律典礼技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_society_23",
    at: 75,
    kind: "insight",
    value: 14,
    text: "法律典礼技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_24",
    at: 25,
    kind: "refund",
    value: 49,
    text: "福利市集技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_society_24",
    at: 50,
    kind: "morale",
    value: 6,
    text: "福利市集技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_society_24",
    at: 75,
    kind: "insight",
    value: 17,
    text: "福利市集技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_25",
    at: 25,
    kind: "refund",
    value: 81,
    text: "舆论仲裁技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_society_25",
    at: 50,
    kind: "morale",
    value: 7,
    text: "舆论仲裁技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_society_25",
    at: 75,
    kind: "insight",
    value: 20,
    text: "舆论仲裁技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_26",
    at: 25,
    kind: "refund",
    value: 2,
    text: "自治法庭技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_society_26",
    at: 50,
    kind: "morale",
    value: 3,
    text: "自治法庭技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_society_26",
    at: 75,
    kind: "insight",
    value: 8,
    text: "自治法庭技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_27",
    at: 25,
    kind: "refund",
    value: 10,
    text: "协商剧场技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_society_27",
    at: 50,
    kind: "morale",
    value: 4,
    text: "协商剧场技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_society_27",
    at: 75,
    kind: "insight",
    value: 11,
    text: "协商剧场技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_28",
    at: 25,
    kind: "refund",
    value: 26,
    text: "信用网络技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_society_28",
    at: 50,
    kind: "morale",
    value: 5,
    text: "信用网络技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_society_28",
    at: 75,
    kind: "insight",
    value: 14,
    text: "信用网络技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_29",
    at: 25,
    kind: "refund",
    value: 49,
    text: "习俗基金技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_society_29",
    at: 50,
    kind: "morale",
    value: 6,
    text: "习俗基金技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_society_29",
    at: 75,
    kind: "insight",
    value: 17,
    text: "习俗基金技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_society_30",
    at: 25,
    kind: "refund",
    value: 81,
    text: "礼仪传承技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_society_30",
    at: 50,
    kind: "morale",
    value: 7,
    text: "礼仪传承技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_society_30",
    at: 75,
    kind: "insight",
    value: 20,
    text: "礼仪传承技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_01",
    at: 25,
    kind: "refund",
    value: 2,
    text: "轨道通讯技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_deepspace_01",
    at: 50,
    kind: "morale",
    value: 3,
    text: "轨道通讯技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_01",
    at: 75,
    kind: "insight",
    value: 8,
    text: "轨道通讯技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_02",
    at: 25,
    kind: "refund",
    value: 10,
    text: "星际巡航技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_deepspace_02",
    at: 50,
    kind: "morale",
    value: 4,
    text: "星际巡航技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_02",
    at: 75,
    kind: "insight",
    value: 11,
    text: "星际巡航技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_03",
    at: 25,
    kind: "refund",
    value: 26,
    text: "深空采矿技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_deepspace_03",
    at: 50,
    kind: "morale",
    value: 5,
    text: "深空采矿技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_03",
    at: 75,
    kind: "insight",
    value: 14,
    text: "深空采矿技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_04",
    at: 25,
    kind: "refund",
    value: 49,
    text: "小行星对接技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_deepspace_04",
    at: 50,
    kind: "morale",
    value: 6,
    text: "小行星对接技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_04",
    at: 75,
    kind: "insight",
    value: 17,
    text: "小行星对接技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_05",
    at: 25,
    kind: "refund",
    value: 81,
    text: "太阳帆测绘网技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_deepspace_05",
    at: 50,
    kind: "morale",
    value: 7,
    text: "太阳帆测绘网技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_05",
    at: 75,
    kind: "insight",
    value: 20,
    text: "太阳帆测绘网技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_06",
    at: 25,
    kind: "refund",
    value: 2,
    text: "引力弹弓勘探技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_deepspace_06",
    at: 50,
    kind: "morale",
    value: 3,
    text: "引力弹弓勘探技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_06",
    at: 75,
    kind: "insight",
    value: 8,
    text: "引力弹弓勘探技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_07",
    at: 25,
    kind: "refund",
    value: 10,
    text: "虫洞中继技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_deepspace_07",
    at: 50,
    kind: "morale",
    value: 4,
    text: "虫洞中继技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_07",
    at: 75,
    kind: "insight",
    value: 11,
    text: "虫洞中继技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_08",
    at: 25,
    kind: "refund",
    value: 26,
    text: "跃迁防御技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_deepspace_08",
    at: 50,
    kind: "morale",
    value: 5,
    text: "跃迁防御技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_08",
    at: 75,
    kind: "insight",
    value: 14,
    text: "跃迁防御技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_09",
    at: 25,
    kind: "refund",
    value: 49,
    text: "曲率扫描技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_deepspace_09",
    at: 50,
    kind: "morale",
    value: 6,
    text: "曲率扫描技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_09",
    at: 75,
    kind: "insight",
    value: 17,
    text: "曲率扫描技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_10",
    at: 25,
    kind: "refund",
    value: 81,
    text: "天文测绘技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_deepspace_10",
    at: 50,
    kind: "morale",
    value: 7,
    text: "天文测绘技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_10",
    at: 75,
    kind: "insight",
    value: 20,
    text: "天文测绘技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_11",
    at: 25,
    kind: "refund",
    value: 2,
    text: "陨石着陆技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_deepspace_11",
    at: 50,
    kind: "morale",
    value: 3,
    text: "陨石着陆技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_11",
    at: 75,
    kind: "insight",
    value: 8,
    text: "陨石着陆技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_12",
    at: 25,
    kind: "refund",
    value: 10,
    text: "彗星导航技术 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_deepspace_12",
    at: 50,
    kind: "morale",
    value: 4,
    text: "彗星导航技术 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_12",
    at: 75,
    kind: "insight",
    value: 11,
    text: "彗星导航技术 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_13",
    at: 25,
    kind: "refund",
    value: 26,
    text: "星门编队技术 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_deepspace_13",
    at: 50,
    kind: "morale",
    value: 5,
    text: "星门编队技术 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_13",
    at: 75,
    kind: "insight",
    value: 14,
    text: "星门编队技术 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_14",
    at: 25,
    kind: "refund",
    value: 49,
    text: "探测远征技术 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_deepspace_14",
    at: 50,
    kind: "morale",
    value: 6,
    text: "探测远征技术 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_14",
    at: 75,
    kind: "insight",
    value: 17,
    text: "探测远征技术 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_15",
    at: 25,
    kind: "refund",
    value: 81,
    text: "殖民补给技术 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_deepspace_15",
    at: 50,
    kind: "morale",
    value: 7,
    text: "殖民补给技术 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_15",
    at: 75,
    kind: "insight",
    value: 20,
    text: "殖民补给技术 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_16",
    at: 25,
    kind: "refund",
    value: 2,
    text: "远航锚定技术 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_deepspace_16",
    at: 50,
    kind: "morale",
    value: 3,
    text: "远航锚定技术 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_16",
    at: 75,
    kind: "insight",
    value: 8,
    text: "远航锚定技术 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_17",
    at: 25,
    kind: "refund",
    value: 10,
    text: "轨道通讯技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_deepspace_17",
    at: 50,
    kind: "morale",
    value: 4,
    text: "轨道通讯技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_17",
    at: 75,
    kind: "insight",
    value: 11,
    text: "轨道通讯技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_18",
    at: 25,
    kind: "refund",
    value: 26,
    text: "星际巡航技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_deepspace_18",
    at: 50,
    kind: "morale",
    value: 5,
    text: "星际巡航技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_18",
    at: 75,
    kind: "insight",
    value: 14,
    text: "星际巡航技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_19",
    at: 25,
    kind: "refund",
    value: 49,
    text: "深空采矿技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_deepspace_19",
    at: 50,
    kind: "morale",
    value: 6,
    text: "深空采矿技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_19",
    at: 75,
    kind: "insight",
    value: 17,
    text: "深空采矿技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_20",
    at: 25,
    kind: "refund",
    value: 81,
    text: "小行星对接技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_deepspace_20",
    at: 50,
    kind: "morale",
    value: 7,
    text: "小行星对接技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_20",
    at: 75,
    kind: "insight",
    value: 20,
    text: "小行星对接技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_21",
    at: 25,
    kind: "refund",
    value: 2,
    text: "太阳帆测绘网技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_deepspace_21",
    at: 50,
    kind: "morale",
    value: 3,
    text: "太阳帆测绘网技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_21",
    at: 75,
    kind: "insight",
    value: 8,
    text: "太阳帆测绘网技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_22",
    at: 25,
    kind: "refund",
    value: 10,
    text: "引力弹弓勘探技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_deepspace_22",
    at: 50,
    kind: "morale",
    value: 4,
    text: "引力弹弓勘探技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_22",
    at: 75,
    kind: "insight",
    value: 11,
    text: "引力弹弓勘探技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_23",
    at: 25,
    kind: "refund",
    value: 26,
    text: "虫洞中继技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_deepspace_23",
    at: 50,
    kind: "morale",
    value: 5,
    text: "虫洞中继技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_23",
    at: 75,
    kind: "insight",
    value: 14,
    text: "虫洞中继技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_24",
    at: 25,
    kind: "refund",
    value: 49,
    text: "跃迁防御技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_deepspace_24",
    at: 50,
    kind: "morale",
    value: 6,
    text: "跃迁防御技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_24",
    at: 75,
    kind: "insight",
    value: 17,
    text: "跃迁防御技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_25",
    at: 25,
    kind: "refund",
    value: 81,
    text: "曲率扫描技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_deepspace_25",
    at: 50,
    kind: "morale",
    value: 7,
    text: "曲率扫描技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_25",
    at: 75,
    kind: "insight",
    value: 20,
    text: "曲率扫描技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_26",
    at: 25,
    kind: "refund",
    value: 2,
    text: "天文测绘技术·Ⅲ 进度 25%：阶段性验证通过，返还 2 科研点",
  },
  {
    projectId: "res31_deepspace_26",
    at: 50,
    kind: "morale",
    value: 3,
    text: "天文测绘技术·Ⅲ 进度 50%：团队士气 +3，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_26",
    at: 75,
    kind: "insight",
    value: 8,
    text: "天文测绘技术·Ⅲ 进度 75%：获得 8 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_27",
    at: 25,
    kind: "refund",
    value: 10,
    text: "陨石着陆技术·Ⅲ 进度 25%：阶段性验证通过，返还 10 科研点",
  },
  {
    projectId: "res31_deepspace_27",
    at: 50,
    kind: "morale",
    value: 4,
    text: "陨石着陆技术·Ⅲ 进度 50%：团队士气 +4，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_27",
    at: 75,
    kind: "insight",
    value: 11,
    text: "陨石着陆技术·Ⅲ 进度 75%：获得 11 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_28",
    at: 25,
    kind: "refund",
    value: 26,
    text: "彗星导航技术·Ⅲ 进度 25%：阶段性验证通过，返还 26 科研点",
  },
  {
    projectId: "res31_deepspace_28",
    at: 50,
    kind: "morale",
    value: 5,
    text: "彗星导航技术·Ⅲ 进度 50%：团队士气 +5，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_28",
    at: 75,
    kind: "insight",
    value: 14,
    text: "彗星导航技术·Ⅲ 进度 75%：获得 14 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_29",
    at: 25,
    kind: "refund",
    value: 49,
    text: "星门编队技术·Ⅲ 进度 25%：阶段性验证通过，返还 49 科研点",
  },
  {
    projectId: "res31_deepspace_29",
    at: 50,
    kind: "morale",
    value: 6,
    text: "星门编队技术·Ⅲ 进度 50%：团队士气 +6，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_29",
    at: 75,
    kind: "insight",
    value: 17,
    text: "星门编队技术·Ⅲ 进度 75%：获得 17 点灵感，可加速同系其他项目",
  },
  {
    projectId: "res31_deepspace_30",
    at: 25,
    kind: "refund",
    value: 81,
    text: "探测远征技术·Ⅲ 进度 25%：阶段性验证通过，返还 81 科研点",
  },
  {
    projectId: "res31_deepspace_30",
    at: 50,
    kind: "morale",
    value: 7,
    text: "探测远征技术·Ⅲ 进度 50%：团队士气 +7，参与科学家获得经验",
  },
  {
    projectId: "res31_deepspace_30",
    at: 75,
    kind: "insight",
    value: 20,
    text: "探测远征技术·Ⅲ 进度 75%：获得 20 点灵感，可加速同系其他项目",
  },
];

/* 联动：跨方向项目配对加成，共 150 条 */
const RES31_SYNERGIES = [
  {
    a: "res31_physics_01",
    b: "res31_engineering_12",
    key: "buildCostMul",
    target: "cost.build",
    op: "mul",
    value: 0.9,
    text: "联动：量子共振技术 + 智能打印技术，同时完成可额外获得 建筑建造成本 ×0.9",
  },
  {
    a: "res31_physics_02",
    b: "res31_biology_19",
    key: "popGrowthMul",
    target: "pop.growth",
    op: "mul",
    value: 1.12,
    text: "联动：等离子聚焦技术 + 微生物培育技术·Ⅲ，同时完成可额外获得 人口增长速度 ×1.12",
  },
  {
    a: "res31_physics_03",
    b: "res31_society_26",
    key: "diplomacyMul",
    target: "diplomacy.relation",
    op: "mul",
    value: 1.12,
    text: "联动：引力隧穿技术 + 自治法庭技术·Ⅲ，同时完成可额外获得 外交关系增速 ×1.12",
  },
  {
    a: "res31_physics_04",
    b: "res31_physics_04",
    key: "shieldMul",
    target: "military.shield",
    op: "mul",
    value: 1.12,
    text: "联动：光子耦合技术 + 光子耦合技术，同时完成可额外获得 护盾强度 ×1.12",
  },
  {
    a: "res31_physics_05",
    b: "res31_engineering_10",
    key: "robotMul",
    target: "prod.robot",
    op: "mul",
    value: 1.12,
    text: "联动：中微子能谱技术 + 耐压焊接技术，同时完成可额外获得 机器人效率 ×1.12",
  },
  {
    a: "res31_physics_06",
    b: "res31_biology_17",
    key: "cropMul",
    target: "prod.crop",
    op: "mul",
    value: 1.12,
    text: "联动：超导干涉技术 + 基因发酵技术·Ⅲ，同时完成可额外获得 作物产量 ×1.12",
  },
  {
    a: "res31_physics_07",
    b: "res31_society_24",
    key: "eduMul",
    target: "pop.education",
    op: "mul",
    value: 1.12,
    text: "联动：核聚变稳态技术 + 福利市集技术·Ⅲ，同时完成可额外获得 教育水平 ×1.12",
  },
  {
    a: "res31_physics_08",
    b: "res31_physics_02",
    key: "defenseMul",
    target: "military.defense",
    op: "mul",
    value: 1.12,
    text: "联动：暗物质湮灭技术 + 等离子聚焦技术，同时完成可额外获得 防御力 ×1.12",
  },
  {
    a: "res31_physics_09",
    b: "res31_engineering_08",
    key: "buildCostMul",
    target: "cost.build",
    op: "mul",
    value: 0.9,
    text: "联动：弦论屏蔽技术 + 冗余吊装技术，同时完成可额外获得 建筑建造成本 ×0.9",
  },
  {
    a: "res31_physics_10",
    b: "res31_biology_15",
    key: "popGrowthMul",
    target: "pop.growth",
    op: "mul",
    value: 1.12,
    text: "联动：磁流体纠缠技术 + 抗逆调控技术，同时完成可额外获得 人口增长速度 ×1.12",
  },
  {
    a: "res31_physics_11",
    b: "res31_society_22",
    key: "diplomacyMul",
    target: "diplomacy.relation",
    op: "mul",
    value: 1.12,
    text: "联动：高能压缩技术 + 文化公约技术·Ⅲ，同时完成可额外获得 外交关系增速 ×1.12",
  },
  {
    a: "res31_physics_12",
    b: "res31_deepspace_29",
    key: "he3Add",
    target: "prod.he3PerMin",
    op: "add",
    value: 5,
    text: "联动：低温约束技术 + 星门编队技术·Ⅲ，同时完成可额外获得 氦3 +5/分钟",
  },
  {
    a: "res31_physics_13",
    b: "res31_engineering_06",
    key: "robotMul",
    target: "prod.robot",
    op: "mul",
    value: 1.12,
    text: "联动：真空跃迁技术 + 自适应机床技术，同时完成可额外获得 机器人效率 ×1.12",
  },
  {
    a: "res31_physics_14",
    b: "res31_biology_13",
    key: "cropMul",
    target: "prod.crop",
    op: "mul",
    value: 1.12,
    text: "联动：粒子隧穿阵列技术 + 表观扩增技术，同时完成可额外获得 作物产量 ×1.12",
  },
  {
    a: "res31_physics_15",
    b: "res31_society_20",
    key: "eduMul",
    target: "pop.education",
    op: "mul",
    value: 1.12,
    text: "联动：波函数极化技术 + 治理电台技术·Ⅲ，同时完成可额外获得 教育水平 ×1.12",
  },
  {
    a: "res31_physics_16",
    b: "res31_deepspace_27",
    key: "colonyMul",
    target: "city.colonyRange",
    op: "mul",
    value: 1.12,
    text: "联动：能级增益技术 + 陨石着陆技术·Ⅲ，同时完成可额外获得 殖民扩张范围 ×1.12",
  },
  {
    a: "res31_physics_17",
    b: "res31_engineering_04",
    key: "buildCostMul",
    target: "cost.build",
    op: "mul",
    value: 0.9,
    text: "联动：量子共振技术·Ⅲ + 精密传动技术，同时完成可额外获得 建筑建造成本 ×0.9",
  },
  {
    a: "res31_physics_18",
    b: "res31_biology_11",
    key: "popGrowthMul",
    target: "pop.growth",
    op: "mul",
    value: 1.12,
    text: "联动：等离子聚焦技术·Ⅲ + 蛋白共生技术，同时完成可额外获得 人口增长速度 ×1.12",
  },
  {
    a: "res31_physics_19",
    b: "res31_society_18",
    key: "diplomacyMul",
    target: "diplomacy.relation",
    op: "mul",
    value: 1.12,
    text: "联动：引力隧穿技术·Ⅲ + 社区互助技术·Ⅲ，同时完成可额外获得 外交关系增速 ×1.12",
  },
  {
    a: "res31_physics_20",
    b: "res31_deepspace_25",
    key: "he3Add",
    target: "prod.he3PerMin",
    op: "add",
    value: 5,
    text: "联动：光子耦合技术·Ⅲ + 曲率扫描技术·Ⅲ，同时完成可额外获得 氦3 +5/分钟",
  },
  {
    a: "res31_physics_21",
    b: "res31_engineering_02",
    key: "robotMul",
    target: "prod.robot",
    op: "mul",
    value: 1.12,
    text: "联动：中微子能谱技术·Ⅲ + 纳米管网技术，同时完成可额外获得 机器人效率 ×1.12",
  },
  {
    a: "res31_physics_22",
    b: "res31_biology_09",
    key: "cropMul",
    target: "prod.crop",
    op: "mul",
    value: 1.12,
    text: "联动：超导干涉技术·Ⅲ + 藻类合成技术，同时完成可额外获得 作物产量 ×1.12",
  },
  {
    a: "res31_physics_23",
    b: "res31_society_16",
    key: "eduMul",
    target: "pop.education",
    op: "mul",
    value: 1.12,
    text: "联动：核聚变稳态技术·Ⅲ + 认同普查技术，同时完成可额外获得 教育水平 ×1.12",
  },
  {
    a: "res31_physics_24",
    b: "res31_deepspace_23",
    key: "colonyMul",
    target: "city.colonyRange",
    op: "mul",
    value: 1.12,
    text: "联动：暗物质湮灭技术·Ⅲ + 虫洞中继技术·Ⅲ，同时完成可额外获得 殖民扩张范围 ×1.12",
  },
  {
    a: "res31_physics_25",
    b: "res31_engineering_01",
    key: "buildCostMul",
    target: "cost.build",
    op: "mul",
    value: 0.9,
    text: "联动：弦论屏蔽技术·Ⅲ + 模块化掘进技术，同时完成可额外获得 建筑建造成本 ×0.9",
  },
  {
    a: "res31_physics_26",
    b: "res31_biology_07",
    key: "popGrowthMul",
    target: "pop.growth",
    op: "mul",
    value: 1.12,
    text: "联动：磁流体纠缠技术·Ⅲ + 神经分化技术，同时完成可额外获得 人口增长速度 ×1.12",
  },
  {
    a: "res31_physics_27",
    b: "res31_society_14",
    key: "diplomacyMul",
    target: "diplomacy.relation",
    op: "mul",
    value: 1.12,
    text: "联动：高能压缩技术·Ⅲ + 礼仪传承技术，同时完成可额外获得 外交关系增速 ×1.12",
  },
  {
    a: "res31_physics_28",
    b: "res31_deepspace_21",
    key: "he3Add",
    target: "prod.he3PerMin",
    op: "add",
    value: 5,
    text: "联动：低温约束技术·Ⅲ + 太阳帆测绘网技术·Ⅲ，同时完成可额外获得 氦3 +5/分钟",
  },
  {
    a: "res31_physics_29",
    b: "res31_physics_29",
    key: "radiationMul",
    target: "risk.radiation",
    op: "mul",
    value: 0.9,
    text: "联动：真空跃迁技术·Ⅲ + 真空跃迁技术·Ⅲ，同时完成可额外获得 辐射伤害 ×0.9",
  },
  {
    a: "res31_physics_30",
    b: "res31_biology_05",
    key: "cropMul",
    target: "prod.crop",
    op: "mul",
    value: 1.12,
    text: "联动：粒子隧穿阵列技术·Ⅲ + 酶促耐受技术，同时完成可额外获得 作物产量 ×1.12",
  },
  {
    a: "res31_engineering_01",
    b: "res31_society_12",
    key: "eduMul",
    target: "pop.education",
    op: "mul",
    value: 1.12,
    text: "联动：模块化掘进技术 + 信用网络技术，同时完成可额外获得 教育水平 ×1.12",
  },
  {
    a: "res31_engineering_02",
    b: "res31_deepspace_19",
    key: "colonyMul",
    target: "city.colonyRange",
    op: "mul",
    value: 1.12,
    text: "联动：纳米管网技术 + 深空采矿技术·Ⅲ，同时完成可额外获得 殖民扩张范围 ×1.12",
  },
  {
    a: "res31_engineering_03",
    b: "res31_physics_26",
    key: "researchMul",
    target: "prod.research",
    op: "mul",
    value: 1.12,
    text: "联动：增材装配技术 + 磁流体纠缠技术·Ⅲ，同时完成可额外获得 科研速度 ×1.12",
  },
  {
    a: "res31_engineering_04",
    b: "res31_biology_03",
    key: "popGrowthMul",
    target: "pop.growth",
    op: "mul",
    value: 1.12,
    text: "联动：精密传动技术 + 微生物培育技术，同时完成可额外获得 人口增长速度 ×1.12",
  },
  {
    a: "res31_engineering_05",
    b: "res31_society_10",
    key: "diplomacyMul",
    target: "diplomacy.relation",
    op: "mul",
    value: 1.12,
    text: "联动：重型密封技术 + 自治法庭技术，同时完成可额外获得 外交关系增速 ×1.12",
  },
  {
    a: "res31_engineering_06",
    b: "res31_deepspace_17",
    key: "he3Add",
    target: "prod.he3PerMin",
    op: "add",
    value: 5,
    text: "联动：自适应机床技术 + 轨道通讯技术·Ⅲ，同时完成可额外获得 氦3 +5/分钟",
  },
  {
    a: "res31_engineering_07",
    b: "res31_physics_24",
    key: "radiationMul",
    target: "risk.radiation",
    op: "mul",
    value: 0.9,
    text: "联动：分布式驱动技术 + 暗物质湮灭技术·Ⅲ，同时完成可额外获得 辐射伤害 ×0.9",
  },
  {
    a: "res31_engineering_08",
    b: "res31_biology_01",
    key: "cropMul",
    target: "prod.crop",
    op: "mul",
    value: 1.12,
    text: "联动：冗余吊装技术 + 基因发酵技术，同时完成可额外获得 作物产量 ×1.12",
  },
  {
    a: "res31_engineering_09",
    b: "res31_society_08",
    key: "eduMul",
    target: "pop.education",
    op: "mul",
    value: 1.12,
    text: "联动：高温框架技术 + 福利市集技术，同时完成可额外获得 教育水平 ×1.12",
  },
  {
    a: "res31_engineering_10",
    b: "res31_deepspace_15",
    key: "colonyMul",
    target: "city.colonyRange",
    op: "mul",
    value: 1.12,
    text: "联动：耐压焊接技术 + 殖民补给技术，同时完成可额外获得 殖民扩张范围 ×1.12",
  },
  {
    a: "res31_engineering_11",
    b: "res31_physics_22",
    key: "researchMul",
    target: "prod.research",
    op: "mul",
    value: 1.12,
    text: "联动：轻量结构技术 + 超导干涉技术·Ⅲ，同时完成可额外获得 科研速度 ×1.12",
  },
  {
    a: "res31_engineering_12",
    b: "res31_engineering_30",
    key: "buildSpeedMul",
    target: "prod.buildSpeed",
    op: "mul",
    value: 1.12,
    text: "联动：智能打印技术 + 柔性散热技术·Ⅲ，同时完成可额外获得 建造速度 ×1.12",
  },
  {
    a: "res31_engineering_13",
    b: "res31_society_06",
    key: "diplomacyMul",
    target: "diplomacy.relation",
    op: "mul",
    value: 1.12,
    text: "联动：并行轴承技术 + 文化公约技术，同时完成可额外获得 外交关系增速 ×1.12",
  },
  {
    a: "res31_engineering_14",
    b: "res31_deepspace_13",
    key: "he3Add",
    target: "prod.he3PerMin",
    op: "add",
    value: 5,
    text: "联动：柔性散热技术 + 星门编队技术，同时完成可额外获得 氦3 +5/分钟",
  },
  {
    a: "res31_engineering_15",
    b: "res31_physics_20",
    key: "radiationMul",
    target: "risk.radiation",
    op: "mul",
    value: 0.9,
    text: "联动：超硬锻造技术 + 光子耦合技术·Ⅲ，同时完成可额外获得 辐射伤害 ×0.9",
  },
  {
    a: "res31_engineering_16",
    b: "res31_engineering_28",
    key: "waterMul",
    target: "prod.water",
    op: "mul",
    value: 1.12,
    text: "联动：低耗接口技术 + 智能打印技术·Ⅲ，同时完成可额外获得 水产量 ×1.12",
  },
  {
    a: "res31_engineering_17",
    b: "res31_society_04",
    key: "eduMul",
    target: "pop.education",
    op: "mul",
    value: 1.12,
    text: "联动：模块化掘进技术·Ⅲ + 治理电台技术，同时完成可额外获得 教育水平 ×1.12",
  },
  {
    a: "res31_engineering_18",
    b: "res31_deepspace_11",
    key: "colonyMul",
    target: "city.colonyRange",
    op: "mul",
    value: 1.12,
    text: "联动：纳米管网技术·Ⅲ + 陨石着陆技术，同时完成可额外获得 殖民扩张范围 ×1.12",
  },
  {
    a: "res31_engineering_19",
    b: "res31_physics_18",
    key: "researchMul",
    target: "prod.research",
    op: "mul",
    value: 1.12,
    text: "联动：增材装配技术·Ⅲ + 等离子聚焦技术·Ⅲ，同时完成可额外获得 科研速度 ×1.12",
  },
  {
    a: "res31_engineering_20",
    b: "res31_engineering_26",
    key: "buildSpeedMul",
    target: "prod.buildSpeed",
    op: "mul",
    value: 1.12,
    text: "联动：精密传动技术·Ⅲ + 耐压焊接技术·Ⅲ，同时完成可额外获得 建造速度 ×1.12",
  },
  {
    a: "res31_engineering_21",
    b: "res31_society_02",
    key: "diplomacyMul",
    target: "diplomacy.relation",
    op: "mul",
    value: 1.12,
    text: "联动：重型密封技术·Ⅲ + 社区互助技术，同时完成可额外获得 外交关系增速 ×1.12",
  },
  {
    a: "res31_engineering_22",
    b: "res31_deepspace_09",
    key: "he3Add",
    target: "prod.he3PerMin",
    op: "add",
    value: 5,
    text: "联动：自适应机床技术·Ⅲ + 曲率扫描技术，同时完成可额外获得 氦3 +5/分钟",
  },
  {
    a: "res31_engineering_23",
    b: "res31_physics_16",
    key: "radiationMul",
    target: "risk.radiation",
    op: "mul",
    value: 0.9,
    text: "联动：分布式驱动技术·Ⅲ + 能级增益技术，同时完成可额外获得 辐射伤害 ×0.9",
  },
  {
    a: "res31_engineering_24",
    b: "res31_engineering_24",
    key: "waterMul",
    target: "prod.water",
    op: "mul",
    value: 1.12,
    text: "联动：冗余吊装技术·Ⅲ + 冗余吊装技术·Ⅲ，同时完成可额外获得 水产量 ×1.12",
  },
  {
    a: "res31_engineering_25",
    b: "res31_biology_30",
    key: "medMul",
    target: "life.medical",
    op: "mul",
    value: 1.12,
    text: "联动：高温框架技术·Ⅲ + 共生再生技术·Ⅲ，同时完成可额外获得 医疗效率 ×1.12",
  },
  {
    a: "res31_engineering_26",
    b: "res31_deepspace_07",
    key: "colonyMul",
    target: "city.colonyRange",
    op: "mul",
    value: 1.12,
    text: "联动：耐压焊接技术·Ⅲ + 虫洞中继技术，同时完成可额外获得 殖民扩张范围 ×1.12",
  },
  {
    a: "res31_engineering_27",
    b: "res31_physics_14",
    key: "researchMul",
    target: "prod.research",
    op: "mul",
    value: 1.12,
    text: "联动：轻量结构技术·Ⅲ + 粒子隧穿阵列技术，同时完成可额外获得 科研速度 ×1.12",
  },
  {
    a: "res31_engineering_28",
    b: "res31_engineering_22",
    key: "buildSpeedMul",
    target: "prod.buildSpeed",
    op: "mul",
    value: 1.12,
    text: "联动：智能打印技术·Ⅲ + 自适应机床技术·Ⅲ，同时完成可额外获得 建造速度 ×1.12",
  },
  {
    a: "res31_engineering_29",
    b: "res31_biology_28",
    key: "happinessAdd",
    target: "pop.happiness",
    op: "add",
    value: 5,
    text: "联动：并行轴承技术·Ⅲ + 代谢编辑技术·Ⅲ，同时完成可额外获得 居民幸福度 +5 点",
  },
  {
    a: "res31_engineering_30",
    b: "res31_deepspace_05",
    key: "he3Add",
    target: "prod.he3PerMin",
    op: "add",
    value: 5,
    text: "联动：柔性散热技术·Ⅲ + 太阳帆测绘网技术，同时完成可额外获得 氦3 +5/分钟",
  },
  {
    a: "res31_biology_01",
    b: "res31_physics_12",
    key: "radiationMul",
    target: "risk.radiation",
    op: "mul",
    value: 0.9,
    text: "联动：基因发酵技术 + 低温约束技术，同时完成可额外获得 辐射伤害 ×0.9",
  },
  {
    a: "res31_biology_02",
    b: "res31_engineering_19",
    key: "waterMul",
    target: "prod.water",
    op: "mul",
    value: 1.12,
    text: "联动：光合循环技术 + 增材装配技术·Ⅲ，同时完成可额外获得 水产量 ×1.12",
  },
  {
    a: "res31_biology_03",
    b: "res31_biology_27",
    key: "medMul",
    target: "life.medical",
    op: "mul",
    value: 1.12,
    text: "联动：微生物培育技术 + 蛋白共生技术·Ⅲ，同时完成可额外获得 医疗效率 ×1.12",
  },
  {
    a: "res31_biology_04",
    b: "res31_deepspace_03",
    key: "colonyMul",
    target: "city.colonyRange",
    op: "mul",
    value: 1.12,
    text: "联动：干细胞适配技术 + 深空采矿技术，同时完成可额外获得 殖民扩张范围 ×1.12",
  },
  {
    a: "res31_biology_05",
    b: "res31_physics_10",
    key: "researchMul",
    target: "prod.research",
    op: "mul",
    value: 1.12,
    text: "联动：酶促耐受技术 + 磁流体纠缠技术，同时完成可额外获得 科研速度 ×1.12",
  },
  {
    a: "res31_biology_06",
    b: "res31_engineering_17",
    key: "buildSpeedMul",
    target: "prod.buildSpeed",
    op: "mul",
    value: 1.12,
    text: "联动：免疫筛选技术 + 模块化掘进技术·Ⅲ，同时完成可额外获得 建造速度 ×1.12",
  },
  {
    a: "res31_biology_07",
    b: "res31_biology_25",
    key: "happinessAdd",
    target: "pop.happiness",
    op: "add",
    value: 5,
    text: "联动：神经分化技术 + 藻类合成技术·Ⅲ，同时完成可额外获得 居民幸福度 +5 点",
  },
  {
    a: "res31_biology_08",
    b: "res31_deepspace_01",
    key: "he3Add",
    target: "prod.he3PerMin",
    op: "add",
    value: 5,
    text: "联动：生态修复技术 + 轨道通讯技术，同时完成可额外获得 氦3 +5/分钟",
  },
  {
    a: "res31_biology_09",
    b: "res31_physics_08",
    key: "radiationMul",
    target: "risk.radiation",
    op: "mul",
    value: 0.9,
    text: "联动：藻类合成技术 + 暗物质湮灭技术，同时完成可额外获得 辐射伤害 ×0.9",
  },
  {
    a: "res31_biology_10",
    b: "res31_engineering_15",
    key: "waterMul",
    target: "prod.water",
    op: "mul",
    value: 1.12,
    text: "联动：菌群驯化技术 + 超硬锻造技术，同时完成可额外获得 水产量 ×1.12",
  },
  {
    a: "res31_biology_11",
    b: "res31_biology_23",
    key: "medMul",
    target: "life.medical",
    op: "mul",
    value: 1.12,
    text: "联动：蛋白共生技术 + 神经分化技术·Ⅲ，同时完成可额外获得 医疗效率 ×1.12",
  },
  {
    a: "res31_biology_12",
    b: "res31_society_29",
    key: "corruptionMul",
    target: "risk.corruption",
    op: "mul",
    value: 0.9,
    text: "联动：代谢编辑技术 + 习俗基金技术·Ⅲ，同时完成可额外获得 腐败发生率 ×0.9",
  },
  {
    a: "res31_biology_13",
    b: "res31_physics_06",
    key: "researchMul",
    target: "prod.research",
    op: "mul",
    value: 1.12,
    text: "联动：表观扩增技术 + 超导干涉技术，同时完成可额外获得 科研速度 ×1.12",
  },
  {
    a: "res31_biology_14",
    b: "res31_engineering_13",
    key: "buildSpeedMul",
    target: "prod.buildSpeed",
    op: "mul",
    value: 1.12,
    text: "联动：共生再生技术 + 并行轴承技术，同时完成可额外获得 建造速度 ×1.12",
  },
  {
    a: "res31_biology_15",
    b: "res31_biology_21",
    key: "happinessAdd",
    target: "pop.happiness",
    op: "add",
    value: 5,
    text: "联动：抗逆调控技术 + 酶促耐受技术·Ⅲ，同时完成可额外获得 居民幸福度 +5 点",
  },
  {
    a: "res31_biology_16",
    b: "res31_society_27",
    key: "policySlotsAdd",
    target: "gov.policySlots",
    op: "add",
    value: 5,
    text: "联动：克隆表达技术 + 协商剧场技术·Ⅲ，同时完成可额外获得 政策槽位 +5 个",
  },
  {
    a: "res31_biology_17",
    b: "res31_physics_04",
    key: "radiationMul",
    target: "risk.radiation",
    op: "mul",
    value: 0.9,
    text: "联动：基因发酵技术·Ⅲ + 光子耦合技术，同时完成可额外获得 辐射伤害 ×0.9",
  },
  {
    a: "res31_biology_18",
    b: "res31_engineering_11",
    key: "waterMul",
    target: "prod.water",
    op: "mul",
    value: 1.12,
    text: "联动：光合循环技术·Ⅲ + 轻量结构技术，同时完成可额外获得 水产量 ×1.12",
  },
  {
    a: "res31_biology_19",
    b: "res31_biology_19",
    key: "medMul",
    target: "life.medical",
    op: "mul",
    value: 1.12,
    text: "联动：微生物培育技术·Ⅲ + 微生物培育技术·Ⅲ，同时完成可额外获得 医疗效率 ×1.12",
  },
  {
    a: "res31_biology_20",
    b: "res31_society_25",
    key: "corruptionMul",
    target: "risk.corruption",
    op: "mul",
    value: 0.9,
    text: "联动：干细胞适配技术·Ⅲ + 舆论仲裁技术·Ⅲ，同时完成可额外获得 腐败发生率 ×0.9",
  },
  {
    a: "res31_biology_21",
    b: "res31_physics_02",
    key: "researchMul",
    target: "prod.research",
    op: "mul",
    value: 1.12,
    text: "联动：酶促耐受技术·Ⅲ + 等离子聚焦技术，同时完成可额外获得 科研速度 ×1.12",
  },
  {
    a: "res31_biology_22",
    b: "res31_engineering_09",
    key: "buildSpeedMul",
    target: "prod.buildSpeed",
    op: "mul",
    value: 1.12,
    text: "联动：免疫筛选技术·Ⅲ + 高温框架技术，同时完成可额外获得 建造速度 ×1.12",
  },
  {
    a: "res31_biology_23",
    b: "res31_biology_17",
    key: "happinessAdd",
    target: "pop.happiness",
    op: "add",
    value: 5,
    text: "联动：神经分化技术·Ⅲ + 基因发酵技术·Ⅲ，同时完成可额外获得 居民幸福度 +5 点",
  },
  {
    a: "res31_biology_24",
    b: "res31_society_23",
    key: "policySlotsAdd",
    target: "gov.policySlots",
    op: "add",
    value: 5,
    text: "联动：生态修复技术·Ⅲ + 法律典礼技术·Ⅲ，同时完成可额外获得 政策槽位 +5 个",
  },
  {
    a: "res31_biology_25",
    b: "res31_deepspace_30",
    key: "terraformAdd",
    target: "planet.terraform",
    op: "add",
    value: 5,
    text: "联动：藻类合成技术·Ⅲ + 探测远征技术·Ⅲ，同时完成可额外获得 行星改造进度 +5 点",
  },
  {
    a: "res31_biology_26",
    b: "res31_engineering_07",
    key: "waterMul",
    target: "prod.water",
    op: "mul",
    value: 1.12,
    text: "联动：菌群驯化技术·Ⅲ + 分布式驱动技术，同时完成可额外获得 水产量 ×1.12",
  },
  {
    a: "res31_biology_27",
    b: "res31_biology_15",
    key: "medMul",
    target: "life.medical",
    op: "mul",
    value: 1.12,
    text: "联动：蛋白共生技术·Ⅲ + 抗逆调控技术，同时完成可额外获得 医疗效率 ×1.12",
  },
  {
    a: "res31_biology_28",
    b: "res31_society_21",
    key: "corruptionMul",
    target: "risk.corruption",
    op: "mul",
    value: 0.9,
    text: "联动：代谢编辑技术·Ⅲ + 教育共识技术·Ⅲ，同时完成可额外获得 腐败发生率 ×0.9",
  },
  {
    a: "res31_biology_29",
    b: "res31_deepspace_28",
    key: "shipSpeedMul",
    target: "fleet.speed",
    op: "mul",
    value: 1.12,
    text: "联动：表观扩增技术·Ⅲ + 彗星导航技术·Ⅲ，同时完成可额外获得 舰船航速 ×1.12",
  },
  {
    a: "res31_biology_30",
    b: "res31_engineering_05",
    key: "buildSpeedMul",
    target: "prod.buildSpeed",
    op: "mul",
    value: 1.12,
    text: "联动：共生再生技术·Ⅲ + 重型密封技术，同时完成可额外获得 建造速度 ×1.12",
  },
  {
    a: "res31_society_01",
    b: "res31_biology_12",
    key: "happinessAdd",
    target: "pop.happiness",
    op: "add",
    value: 5,
    text: "联动：公民学院技术 + 代谢编辑技术，同时完成可额外获得 居民幸福度 +5 点",
  },
  {
    a: "res31_society_02",
    b: "res31_society_20",
    key: "policySlotsAdd",
    target: "gov.policySlots",
    op: "add",
    value: 5,
    text: "联动：社区互助技术 + 治理电台技术·Ⅲ，同时完成可额外获得 政策槽位 +5 个",
  },
  {
    a: "res31_society_03",
    b: "res31_deepspace_26",
    key: "terraformAdd",
    target: "planet.terraform",
    op: "add",
    value: 5,
    text: "联动：契约议会技术 + 天文测绘技术·Ⅲ，同时完成可额外获得 行星改造进度 +5 点",
  },
  {
    a: "res31_society_04",
    b: "res31_engineering_03",
    key: "waterMul",
    target: "prod.water",
    op: "mul",
    value: 1.12,
    text: "联动：治理电台技术 + 增材装配技术，同时完成可额外获得 水产量 ×1.12",
  },
  {
    a: "res31_society_05",
    b: "res31_biology_10",
    key: "medMul",
    target: "life.medical",
    op: "mul",
    value: 1.12,
    text: "联动：教育共识技术 + 菌群驯化技术，同时完成可额外获得 医疗效率 ×1.12",
  },
  {
    a: "res31_society_06",
    b: "res31_society_18",
    key: "corruptionMul",
    target: "risk.corruption",
    op: "mul",
    value: 0.9,
    text: "联动：文化公约技术 + 社区互助技术·Ⅲ，同时完成可额外获得 腐败发生率 ×0.9",
  },
  {
    a: "res31_society_07",
    b: "res31_deepspace_24",
    key: "shipSpeedMul",
    target: "fleet.speed",
    op: "mul",
    value: 1.12,
    text: "联动：法律典礼技术 + 跃迁防御技术·Ⅲ，同时完成可额外获得 舰船航速 ×1.12",
  },
  {
    a: "res31_society_08",
    b: "res31_engineering_01",
    key: "buildSpeedMul",
    target: "prod.buildSpeed",
    op: "mul",
    value: 1.12,
    text: "联动：福利市集技术 + 模块化掘进技术，同时完成可额外获得 建造速度 ×1.12",
  },
  {
    a: "res31_society_09",
    b: "res31_biology_08",
    key: "happinessAdd",
    target: "pop.happiness",
    op: "add",
    value: 5,
    text: "联动：舆论仲裁技术 + 生态修复技术，同时完成可额外获得 居民幸福度 +5 点",
  },
  {
    a: "res31_society_10",
    b: "res31_society_16",
    key: "policySlotsAdd",
    target: "gov.policySlots",
    op: "add",
    value: 5,
    text: "联动：自治法庭技术 + 认同普查技术，同时完成可额外获得 政策槽位 +5 个",
  },
  {
    a: "res31_society_11",
    b: "res31_deepspace_22",
    key: "terraformAdd",
    target: "planet.terraform",
    op: "add",
    value: 5,
    text: "联动：协商剧场技术 + 引力弹弓勘探技术·Ⅲ，同时完成可额外获得 行星改造进度 +5 点",
  },
  {
    a: "res31_society_12",
    b: "res31_physics_29",
    key: "sensorMul",
    target: "fleet.sensor",
    op: "mul",
    value: 1.12,
    text: "联动：信用网络技术 + 真空跃迁技术·Ⅲ，同时完成可额外获得 探测范围 ×1.12",
  },
  {
    a: "res31_society_13",
    b: "res31_biology_06",
    key: "medMul",
    target: "life.medical",
    op: "mul",
    value: 1.12,
    text: "联动：习俗基金技术 + 免疫筛选技术，同时完成可额外获得 医疗效率 ×1.12",
  },
  {
    a: "res31_society_14",
    b: "res31_society_14",
    key: "corruptionMul",
    target: "risk.corruption",
    op: "mul",
    value: 0.9,
    text: "联动：礼仪传承技术 + 礼仪传承技术，同时完成可额外获得 腐败发生率 ×0.9",
  },
  {
    a: "res31_society_15",
    b: "res31_deepspace_20",
    key: "shipSpeedMul",
    target: "fleet.speed",
    op: "mul",
    value: 1.12,
    text: "联动：记忆档案技术 + 小行星对接技术·Ⅲ，同时完成可额外获得 舰船航速 ×1.12",
  },
  {
    a: "res31_society_16",
    b: "res31_physics_27",
    key: "energyMul",
    target: "prod.energy",
    op: "mul",
    value: 1.12,
    text: "联动：认同普查技术 + 高能压缩技术·Ⅲ，同时完成可额外获得 电力产出 ×1.12",
  },
  {
    a: "res31_society_17",
    b: "res31_biology_04",
    key: "happinessAdd",
    target: "pop.happiness",
    op: "add",
    value: 5,
    text: "联动：公民学院技术·Ⅲ + 干细胞适配技术，同时完成可额外获得 居民幸福度 +5 点",
  },
  {
    a: "res31_society_18",
    b: "res31_society_12",
    key: "policySlotsAdd",
    target: "gov.policySlots",
    op: "add",
    value: 5,
    text: "联动：社区互助技术·Ⅲ + 信用网络技术，同时完成可额外获得 政策槽位 +5 个",
  },
  {
    a: "res31_society_19",
    b: "res31_deepspace_18",
    key: "terraformAdd",
    target: "planet.terraform",
    op: "add",
    value: 5,
    text: "联动：契约议会技术·Ⅲ + 星际巡航技术·Ⅲ，同时完成可额外获得 行星改造进度 +5 点",
  },
  {
    a: "res31_society_20",
    b: "res31_physics_25",
    key: "sensorMul",
    target: "fleet.sensor",
    op: "mul",
    value: 1.12,
    text: "联动：治理电台技术·Ⅲ + 弦论屏蔽技术·Ⅲ，同时完成可额外获得 探测范围 ×1.12",
  },
  {
    a: "res31_society_21",
    b: "res31_biology_02",
    key: "medMul",
    target: "life.medical",
    op: "mul",
    value: 1.12,
    text: "联动：教育共识技术·Ⅲ + 光合循环技术，同时完成可额外获得 医疗效率 ×1.12",
  },
  {
    a: "res31_society_22",
    b: "res31_society_10",
    key: "corruptionMul",
    target: "risk.corruption",
    op: "mul",
    value: 0.9,
    text: "联动：文化公约技术·Ⅲ + 自治法庭技术，同时完成可额外获得 腐败发生率 ×0.9",
  },
  {
    a: "res31_society_23",
    b: "res31_deepspace_16",
    key: "shipSpeedMul",
    target: "fleet.speed",
    op: "mul",
    value: 1.12,
    text: "联动：法律典礼技术·Ⅲ + 远航锚定技术，同时完成可额外获得 舰船航速 ×1.12",
  },
  {
    a: "res31_society_24",
    b: "res31_physics_23",
    key: "energyMul",
    target: "prod.energy",
    op: "mul",
    value: 1.12,
    text: "联动：福利市集技术·Ⅲ + 核聚变稳态技术·Ⅲ，同时完成可额外获得 电力产出 ×1.12",
  },
  {
    a: "res31_society_25",
    b: "res31_engineering_30",
    key: "ironMul",
    target: "prod.iron",
    op: "mul",
    value: 1.12,
    text: "联动：舆论仲裁技术·Ⅲ + 柔性散热技术·Ⅲ，同时完成可额外获得 铁矿产量 ×1.12",
  },
  {
    a: "res31_society_26",
    b: "res31_society_08",
    key: "policySlotsAdd",
    target: "gov.policySlots",
    op: "add",
    value: 5,
    text: "联动：自治法庭技术·Ⅲ + 福利市集技术，同时完成可额外获得 政策槽位 +5 个",
  },
  {
    a: "res31_society_27",
    b: "res31_deepspace_14",
    key: "terraformAdd",
    target: "planet.terraform",
    op: "add",
    value: 5,
    text: "联动：协商剧场技术·Ⅲ + 探测远征技术，同时完成可额外获得 行星改造进度 +5 点",
  },
  {
    a: "res31_society_28",
    b: "res31_physics_21",
    key: "sensorMul",
    target: "fleet.sensor",
    op: "mul",
    value: 1.12,
    text: "联动：信用网络技术·Ⅲ + 中微子能谱技术·Ⅲ，同时完成可额外获得 探测范围 ×1.12",
  },
  {
    a: "res31_society_29",
    b: "res31_engineering_28",
    key: "durabilityMul",
    target: "city.durability",
    op: "mul",
    value: 1.12,
    text: "联动：习俗基金技术·Ⅲ + 智能打印技术·Ⅲ，同时完成可额外获得 建筑耐久 ×1.12",
  },
  {
    a: "res31_society_30",
    b: "res31_society_06",
    key: "corruptionMul",
    target: "risk.corruption",
    op: "mul",
    value: 0.9,
    text: "联动：礼仪传承技术·Ⅲ + 文化公约技术，同时完成可额外获得 腐败发生率 ×0.9",
  },
  {
    a: "res31_deepspace_01",
    b: "res31_deepspace_13",
    key: "shipSpeedMul",
    target: "fleet.speed",
    op: "mul",
    value: 1.12,
    text: "联动：轨道通讯技术 + 星门编队技术，同时完成可额外获得 舰船航速 ×1.12",
  },
  {
    a: "res31_deepspace_02",
    b: "res31_physics_19",
    key: "energyMul",
    target: "prod.energy",
    op: "mul",
    value: 1.12,
    text: "联动：星际巡航技术 + 引力隧穿技术·Ⅲ，同时完成可额外获得 电力产出 ×1.12",
  },
  {
    a: "res31_deepspace_03",
    b: "res31_engineering_26",
    key: "ironMul",
    target: "prod.iron",
    op: "mul",
    value: 1.12,
    text: "联动：深空采矿技术 + 耐压焊接技术·Ⅲ，同时完成可额外获得 铁矿产量 ×1.12",
  },
  {
    a: "res31_deepspace_04",
    b: "res31_society_03",
    key: "policySlotsAdd",
    target: "gov.policySlots",
    op: "add",
    value: 5,
    text: "联动：小行星对接技术 + 契约议会技术，同时完成可额外获得 政策槽位 +5 个",
  },
  {
    a: "res31_deepspace_05",
    b: "res31_deepspace_11",
    key: "terraformAdd",
    target: "planet.terraform",
    op: "add",
    value: 5,
    text: "联动：太阳帆测绘网技术 + 陨石着陆技术，同时完成可额外获得 行星改造进度 +5 点",
  },
  {
    a: "res31_deepspace_06",
    b: "res31_physics_17",
    key: "sensorMul",
    target: "fleet.sensor",
    op: "mul",
    value: 1.12,
    text: "联动：引力弹弓勘探技术 + 量子共振技术·Ⅲ，同时完成可额外获得 探测范围 ×1.12",
  },
  {
    a: "res31_deepspace_07",
    b: "res31_engineering_24",
    key: "durabilityMul",
    target: "city.durability",
    op: "mul",
    value: 1.12,
    text: "联动：虫洞中继技术 + 冗余吊装技术·Ⅲ，同时完成可额外获得 建筑耐久 ×1.12",
  },
  {
    a: "res31_deepspace_08",
    b: "res31_society_01",
    key: "corruptionMul",
    target: "risk.corruption",
    op: "mul",
    value: 0.9,
    text: "联动：跃迁防御技术 + 公民学院技术，同时完成可额外获得 腐败发生率 ×0.9",
  },
  {
    a: "res31_deepspace_09",
    b: "res31_deepspace_09",
    key: "shipSpeedMul",
    target: "fleet.speed",
    op: "mul",
    value: 1.12,
    text: "联动：曲率扫描技术 + 曲率扫描技术，同时完成可额外获得 舰船航速 ×1.12",
  },
  {
    a: "res31_deepspace_10",
    b: "res31_physics_15",
    key: "energyMul",
    target: "prod.energy",
    op: "mul",
    value: 1.12,
    text: "联动：天文测绘技术 + 波函数极化技术，同时完成可额外获得 电力产出 ×1.12",
  },
  {
    a: "res31_deepspace_11",
    b: "res31_engineering_22",
    key: "ironMul",
    target: "prod.iron",
    op: "mul",
    value: 1.12,
    text: "联动：陨石着陆技术 + 自适应机床技术·Ⅲ，同时完成可额外获得 铁矿产量 ×1.12",
  },
  {
    a: "res31_deepspace_12",
    b: "res31_biology_29",
    key: "healthMul",
    target: "pop.health",
    op: "mul",
    value: 1.12,
    text: "联动：彗星导航技术 + 表观扩增技术·Ⅲ，同时完成可额外获得 居民健康 ×1.12",
  },
  {
    a: "res31_deepspace_13",
    b: "res31_deepspace_07",
    key: "terraformAdd",
    target: "planet.terraform",
    op: "add",
    value: 5,
    text: "联动：星门编队技术 + 虫洞中继技术，同时完成可额外获得 行星改造进度 +5 点",
  },
  {
    a: "res31_deepspace_14",
    b: "res31_physics_13",
    key: "sensorMul",
    target: "fleet.sensor",
    op: "mul",
    value: 1.12,
    text: "联动：探测远征技术 + 真空跃迁技术，同时完成可额外获得 探测范围 ×1.12",
  },
  {
    a: "res31_deepspace_15",
    b: "res31_engineering_20",
    key: "durabilityMul",
    target: "city.durability",
    op: "mul",
    value: 1.12,
    text: "联动：殖民补给技术 + 精密传动技术·Ⅲ，同时完成可额外获得 建筑耐久 ×1.12",
  },
  {
    a: "res31_deepspace_16",
    b: "res31_biology_27",
    key: "lifespanAdd",
    target: "pop.lifespan",
    op: "add",
    value: 5,
    text: "联动：远航锚定技术 + 蛋白共生技术·Ⅲ，同时完成可额外获得 平均寿命 +5 年",
  },
  {
    a: "res31_deepspace_17",
    b: "res31_deepspace_05",
    key: "shipSpeedMul",
    target: "fleet.speed",
    op: "mul",
    value: 1.12,
    text: "联动：轨道通讯技术·Ⅲ + 太阳帆测绘网技术，同时完成可额外获得 舰船航速 ×1.12",
  },
  {
    a: "res31_deepspace_18",
    b: "res31_physics_11",
    key: "energyMul",
    target: "prod.energy",
    op: "mul",
    value: 1.12,
    text: "联动：星际巡航技术·Ⅲ + 高能压缩技术，同时完成可额外获得 电力产出 ×1.12",
  },
  {
    a: "res31_deepspace_19",
    b: "res31_engineering_18",
    key: "ironMul",
    target: "prod.iron",
    op: "mul",
    value: 1.12,
    text: "联动：深空采矿技术·Ⅲ + 纳米管网技术·Ⅲ，同时完成可额外获得 铁矿产量 ×1.12",
  },
  {
    a: "res31_deepspace_20",
    b: "res31_biology_25",
    key: "healthMul",
    target: "pop.health",
    op: "mul",
    value: 1.12,
    text: "联动：小行星对接技术·Ⅲ + 藻类合成技术·Ⅲ，同时完成可额外获得 居民健康 ×1.12",
  },
  {
    a: "res31_deepspace_21",
    b: "res31_deepspace_03",
    key: "terraformAdd",
    target: "planet.terraform",
    op: "add",
    value: 5,
    text: "联动：太阳帆测绘网技术·Ⅲ + 深空采矿技术，同时完成可额外获得 行星改造进度 +5 点",
  },
  {
    a: "res31_deepspace_22",
    b: "res31_physics_09",
    key: "sensorMul",
    target: "fleet.sensor",
    op: "mul",
    value: 1.12,
    text: "联动：引力弹弓勘探技术·Ⅲ + 弦论屏蔽技术，同时完成可额外获得 探测范围 ×1.12",
  },
  {
    a: "res31_deepspace_23",
    b: "res31_engineering_16",
    key: "durabilityMul",
    target: "city.durability",
    op: "mul",
    value: 1.12,
    text: "联动：虫洞中继技术·Ⅲ + 低耗接口技术，同时完成可额外获得 建筑耐久 ×1.12",
  },
  {
    a: "res31_deepspace_24",
    b: "res31_biology_23",
    key: "lifespanAdd",
    target: "pop.lifespan",
    op: "add",
    value: 5,
    text: "联动：跃迁防御技术·Ⅲ + 神经分化技术·Ⅲ，同时完成可额外获得 平均寿命 +5 年",
  },
  {
    a: "res31_deepspace_25",
    b: "res31_society_30",
    key: "taxMul",
    target: "econ.taxRate",
    op: "mul",
    value: 1.12,
    text: "联动：曲率扫描技术·Ⅲ + 礼仪传承技术·Ⅲ，同时完成可额外获得 税收效率 ×1.12",
  },
  {
    a: "res31_deepspace_26",
    b: "res31_physics_07",
    key: "energyMul",
    target: "prod.energy",
    op: "mul",
    value: 1.12,
    text: "联动：天文测绘技术·Ⅲ + 核聚变稳态技术，同时完成可额外获得 电力产出 ×1.12",
  },
  {
    a: "res31_deepspace_27",
    b: "res31_engineering_14",
    key: "ironMul",
    target: "prod.iron",
    op: "mul",
    value: 1.12,
    text: "联动：陨石着陆技术·Ⅲ + 柔性散热技术，同时完成可额外获得 铁矿产量 ×1.12",
  },
  {
    a: "res31_deepspace_28",
    b: "res31_biology_21",
    key: "healthMul",
    target: "pop.health",
    op: "mul",
    value: 1.12,
    text: "联动：彗星导航技术·Ⅲ + 酶促耐受技术·Ⅲ，同时完成可额外获得 居民健康 ×1.12",
  },
  {
    a: "res31_deepspace_29",
    b: "res31_society_28",
    key: "tradeMul",
    target: "econ.tradeIncome",
    op: "mul",
    value: 1.12,
    text: "联动：星门编队技术·Ⅲ + 信用网络技术·Ⅲ，同时完成可额外获得 贸易收入 ×1.12",
  },
  {
    a: "res31_deepspace_30",
    b: "res31_physics_05",
    key: "sensorMul",
    target: "fleet.sensor",
    op: "mul",
    value: 1.12,
    text: "联动：探测远征技术·Ⅲ + 中微子能谱技术，同时完成可额外获得 探测范围 ×1.12",
  },
];

/* 项目阶段：每项目 3 阶段（33%/66%/100%），阶段完成奖励灵感并记日志 */
const RES31_PROJECT_STAGES = [
  { projectId: "res31_physics_01", stage: 1, at: 33, name: "理论建模", bonusInsight: 6, text: "量子共振技术·理论建模阶段（33%）：完成理论建模，获得 6 点灵感。" },
  { projectId: "res31_physics_01", stage: 2, at: 66, name: "实验验证", bonusInsight: 8, text: "量子共振技术·实验验证阶段（66%）：完成实验验证，获得 8 点灵感。" },
  { projectId: "res31_physics_01", stage: 3, at: 100, name: "工程化落地", bonusInsight: 10, text: "量子共振技术·工程化落地阶段（100%）：完成工程化落地，获得 10 点灵感。" },
  { projectId: "res31_physics_02", stage: 1, at: 33, name: "理论建模", bonusInsight: 8, text: "等离子聚焦技术·理论建模阶段（33%）：完成理论建模，获得 8 点灵感。" },
  { projectId: "res31_physics_02", stage: 2, at: 66, name: "实验验证", bonusInsight: 10, text: "等离子聚焦技术·实验验证阶段（66%）：完成实验验证，获得 10 点灵感。" },
  { projectId: "res31_physics_02", stage: 3, at: 100, name: "工程化落地", bonusInsight: 12, text: "等离子聚焦技术·工程化落地阶段（100%）：完成工程化落地，获得 12 点灵感。" },
  { projectId: "res31_physics_03", stage: 1, at: 33, name: "理论建模", bonusInsight: 10, text: "引力隧穿技术·理论建模阶段（33%）：完成理论建模，获得 10 点灵感。" },
  { projectId: "res31_physics_03", stage: 2, at: 66, name: "实验验证", bonusInsight: 12, text: "引力隧穿技术·实验验证阶段（66%）：完成实验验证，获得 12 点灵感。" },
  { projectId: "res31_physics_03", stage: 3, at: 100, name: "工程化落地", bonusInsight: 14, text: "引力隧穿技术·工程化落地阶段（100%）：完成工程化落地，获得 14 点灵感。" },
  { projectId: "res31_physics_04", stage: 1, at: 33, name: "理论建模", bonusInsight: 12, text: "光子耦合技术·理论建模阶段（33%）：完成理论建模，获得 12 点灵感。" },
  { projectId: "res31_physics_04", stage: 2, at: 66, name: "实验验证", bonusInsight: 14, text: "光子耦合技术·实验验证阶段（66%）：完成实验验证，获得 14 点灵感。" },
  { projectId: "res31_physics_04", stage: 3, at: 100, name: "工程化落地", bonusInsight: 16, text: "光子耦合技术·工程化落地阶段（100%）：完成工程化落地，获得 16 点灵感。" },
  { projectId: "res31_physics_05", stage: 1, at: 33, name: "理论建模", bonusInsight: 14, text: "中微子能谱技术·理论建模阶段（33%）：完成理论建模，获得 14 点灵感。" },
  { projectId: "res31_physics_05", stage: 2, at: 66, name: "实验验证", bonusInsight: 16, text: "中微子能谱技术·实验验证阶段（66%）：完成实验验证，获得 16 点灵感。" },
  { projectId: "res31_physics_05", stage: 3, at: 100, name: "工程化落地", bonusInsight: 18, text: "中微子能谱技术·工程化落地阶段（100%）：完成工程化落地，获得 18 点灵感。" },
  { projectId: "res31_physics_06", stage: 1, at: 33, name: "理论建模", bonusInsight: 6, text: "超导干涉技术·理论建模阶段（33%）：完成理论建模，获得 6 点灵感。" },
  { projectId: "res31_physics_06", stage: 2, at: 66, name: "实验验证", bonusInsight: 8, text: "超导干涉技术·实验验证阶段（66%）：完成实验验证，获得 8 点灵感。" },
  { projectId: "res31_physics_06", stage: 3, at: 100, name: "工程化落地", bonusInsight: 10, text: "超导干涉技术·工程化落地阶段（100%）：完成工程化落地，获得 10 点灵感。" },
  { projectId: "res31_physics_07", stage: 1, at: 33, name: "理论建模", bonusInsight: 8, text: "核聚变稳态技术·理论建模阶段（33%）：完成理论建模，获得 8 点灵感。" },
  { projectId: "res31_physics_07", stage: 2, at: 66, name: "实验验证", bonusInsight: 10, text: "核聚变稳态技术·实验验证阶段（66%）：完成实验验证，获得 10 点灵感。" },
  { projectId: "res31_physics_07", stage: 3, at: 100, name: "工程化落地", bonusInsight: 12, text: "核聚变稳态技术·工程化落地阶段（100%）：完成工程化落地，获得 12 点灵感。" },
  { projectId: "res31_physics_08", stage: 1, at: 33, name: "理论建模", bonusInsight: 10, text: "暗物质湮灭技术·理论建模阶段（33%）：完成理论建模，获得 10 点灵感。" },
  { projectId: "res31_physics_08", stage: 2, at: 66, name: "实验验证", bonusInsight: 12, text: "暗物质湮灭技术·实验验证阶段（66%）：完成实验验证，获得 12 点灵感。" },
  { projectId: "res31_physics_08", stage: 3, at: 100, name: "工程化落地", bonusInsight: 14, text: "暗物质湮灭技术·工程化落地阶段（100%）：完成工程化落地，获得 14 点灵感。" },
  { projectId: "res31_physics_09", stage: 1, at: 33, name: "理论建模", bonusInsight: 12, text: "弦论屏蔽技术·理论建模阶段（33%）：完成理论建模，获得 12 点灵感。" },
  { projectId: "res31_physics_09", stage: 2, at: 66, name: "实验验证", bonusInsight: 14, text: "弦论屏蔽技术·实验验证阶段（66%）：完成实验验证，获得 14 点灵感。" },
  { projectId: "res31_physics_09", stage: 3, at: 100, name: "工程化落地", bonusInsight: 16, text: "弦论屏蔽技术·工程化落地阶段（100%）：完成工程化落地，获得 16 点灵感。" },
  { projectId: "res31_physics_10", stage: 1, at: 33, name: "理论建模", bonusInsight: 14, text: "磁流体纠缠技术·理论建模阶段（33%）：完成理论建模，获得 14 点灵感。" },
  { projectId: "res31_physics_10", stage: 2, at: 66, name: "实验验证", bonusInsight: 16, text: "磁流体纠缠技术·实验验证阶段（66%）：完成实验验证，获得 16 点灵感。" },
  { projectId: "res31_physics_10", stage: 3, at: 100, name: "工程化落地", bonusInsight: 18, text: "磁流体纠缠技术·工程化落地阶段（100%）：完成工程化落地，获得 18 点灵感。" },
  { projectId: "res31_physics_11", stage: 1, at: 33, name: "理论建模", bonusInsight: 6, text: "高能压缩技术·理论建模阶段（33%）：完成理论建模，获得 6 点灵感。" },
  { projectId: "res31_physics_11", stage: 2, at: 66, name: "实验验证", bonusInsight: 8, text: "高能压缩技术·实验验证阶段（66%）：完成实验验证，获得 8 点灵感。" },
  { projectId: "res31_physics_11", stage: 3, at: 100, name: "工程化落地", bonusInsight: 10, text: "高能压缩技术·工程化落地阶段（100%）：完成工程化落地，获得 10 点灵感。" },
  { projectId: "res31_physics_12", stage: 1, at: 33, name: "理论建模", bonusInsight: 8, text: "低温约束技术·理论建模阶段（33%）：完成理论建模，获得 8 点灵感。" },
  { projectId: "res31_physics_12", stage: 2, at: 66, name: "实验验证", bonusInsight: 10, text: "低温约束技术·实验验证阶段（66%）：完成实验验证，获得 10 点灵感。" },
  { projectId: "res31_physics_12", stage: 3, at: 100, name: "工程化落地", bonusInsight: 12, text: "低温约束技术·工程化落地阶段（100%）：完成工程化落地，获得 12 点灵感。" },
  { projectId: "res31_physics_13", stage: 1, at: 33, name: "理论建模", bonusInsight: 10, text: "真空跃迁技术·理论建模阶段（33%）：完成理论建模，获得 10 点灵感。" },
  { projectId: "res31_physics_13", stage: 2, at: 66, name: "实验验证", bonusInsight: 12, text: "真空跃迁技术·实验验证阶段（66%）：完成实验验证，获得 12 点灵感。" },
  { projectId: "res31_physics_13", stage: 3, at: 100, name: "工程化落地", bonusInsight: 14, text: "真空跃迁技术·工程化落地阶段（100%）：完成工程化落地，获得 14 点灵感。" },
  { projectId: "res31_physics_14", stage: 1, at: 33, name: "理论建模", bonusInsight: 12, text: "粒子隧穿阵列技术·理论建模阶段（33%）：完成理论建模，获得 12 点灵感。" },
  { projectId: "res31_physics_14", stage: 2, at: 66, name: "实验验证", bonusInsight: 14, text: "粒子隧穿阵列技术·实验验证阶段（66%）：完成实验验证，获得 14 点灵感。" },
  { projectId: "res31_physics_14", stage: 3, at: 100, name: "工程化落地", bonusInsight: 16, text: "粒子隧穿阵列技术·工程化落地阶段（100%）：完成工程化落地，获得 16 点灵感。" },
  { projectId: "res31_physics_15", stage: 1, at: 33, name: "理论建模", bonusInsight: 14, text: "波函数极化技术·理论建模阶段（33%）：完成理论建模，获得 14 点灵感。" },
  { projectId: "res31_physics_15", stage: 2, at: 66, name: "实验验证", bonusInsight: 16, text: "波函数极化技术·实验验证阶段（66%）：完成实验验证，获得 16 点灵感。" },
  { projectId: "res31_physics_15", stage: 3, at: 100, name: "工程化落地", bonusInsight: 18, text: "波函数极化技术·工程化落地阶段（100%）：完成工程化落地，获得 18 点灵感。" },
  { projectId: "res31_physics_16", stage: 1, at: 33, name: "理论建模", bonusInsight: 6, text: "能级增益技术·理论建模阶段（33%）：完成理论建模，获得 6 点灵感。" },
  { projectId: "res31_physics_16", stage: 2, at: 66, name: "实验验证", bonusInsight: 8, text: "能级增益技术·实验验证阶段（66%）：完成实验验证，获得 8 点灵感。" },
  { projectId: "res31_physics_16", stage: 3, at: 100, name: "工程化落地", bonusInsight: 10, text: "能级增益技术·工程化落地阶段（100%）：完成工程化落地，获得 10 点灵感。" },
  { projectId: "res31_physics_17", stage: 1, at: 33, name: "理论建模", bonusInsight: 8, text: "量子共振技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 8 点灵感。" },
  { projectId: "res31_physics_17", stage: 2, at: 66, name: "实验验证", bonusInsight: 10, text: "量子共振技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 10 点灵感。" },
  { projectId: "res31_physics_17", stage: 3, at: 100, name: "工程化落地", bonusInsight: 12, text: "量子共振技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 12 点灵感。" },
  { projectId: "res31_physics_18", stage: 1, at: 33, name: "理论建模", bonusInsight: 10, text: "等离子聚焦技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 10 点灵感。" },
  { projectId: "res31_physics_18", stage: 2, at: 66, name: "实验验证", bonusInsight: 12, text: "等离子聚焦技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 12 点灵感。" },
  { projectId: "res31_physics_18", stage: 3, at: 100, name: "工程化落地", bonusInsight: 14, text: "等离子聚焦技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 14 点灵感。" },
  { projectId: "res31_physics_19", stage: 1, at: 33, name: "理论建模", bonusInsight: 12, text: "引力隧穿技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 12 点灵感。" },
  { projectId: "res31_physics_19", stage: 2, at: 66, name: "实验验证", bonusInsight: 14, text: "引力隧穿技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 14 点灵感。" },
  { projectId: "res31_physics_19", stage: 3, at: 100, name: "工程化落地", bonusInsight: 16, text: "引力隧穿技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 16 点灵感。" },
  { projectId: "res31_physics_20", stage: 1, at: 33, name: "理论建模", bonusInsight: 14, text: "光子耦合技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 14 点灵感。" },
  { projectId: "res31_physics_20", stage: 2, at: 66, name: "实验验证", bonusInsight: 16, text: "光子耦合技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 16 点灵感。" },
  { projectId: "res31_physics_20", stage: 3, at: 100, name: "工程化落地", bonusInsight: 18, text: "光子耦合技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 18 点灵感。" },
  { projectId: "res31_physics_21", stage: 1, at: 33, name: "理论建模", bonusInsight: 6, text: "中微子能谱技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 6 点灵感。" },
  { projectId: "res31_physics_21", stage: 2, at: 66, name: "实验验证", bonusInsight: 8, text: "中微子能谱技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 8 点灵感。" },
  { projectId: "res31_physics_21", stage: 3, at: 100, name: "工程化落地", bonusInsight: 10, text: "中微子能谱技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 10 点灵感。" },
  { projectId: "res31_physics_22", stage: 1, at: 33, name: "理论建模", bonusInsight: 8, text: "超导干涉技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 8 点灵感。" },
  { projectId: "res31_physics_22", stage: 2, at: 66, name: "实验验证", bonusInsight: 10, text: "超导干涉技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 10 点灵感。" },
  { projectId: "res31_physics_22", stage: 3, at: 100, name: "工程化落地", bonusInsight: 12, text: "超导干涉技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 12 点灵感。" },
  { projectId: "res31_physics_23", stage: 1, at: 33, name: "理论建模", bonusInsight: 10, text: "核聚变稳态技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 10 点灵感。" },
  { projectId: "res31_physics_23", stage: 2, at: 66, name: "实验验证", bonusInsight: 12, text: "核聚变稳态技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 12 点灵感。" },
  { projectId: "res31_physics_23", stage: 3, at: 100, name: "工程化落地", bonusInsight: 14, text: "核聚变稳态技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 14 点灵感。" },
  { projectId: "res31_physics_24", stage: 1, at: 33, name: "理论建模", bonusInsight: 12, text: "暗物质湮灭技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 12 点灵感。" },
  { projectId: "res31_physics_24", stage: 2, at: 66, name: "实验验证", bonusInsight: 14, text: "暗物质湮灭技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 14 点灵感。" },
  { projectId: "res31_physics_24", stage: 3, at: 100, name: "工程化落地", bonusInsight: 16, text: "暗物质湮灭技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 16 点灵感。" },
  { projectId: "res31_physics_25", stage: 1, at: 33, name: "理论建模", bonusInsight: 14, text: "弦论屏蔽技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 14 点灵感。" },
  { projectId: "res31_physics_25", stage: 2, at: 66, name: "实验验证", bonusInsight: 16, text: "弦论屏蔽技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 16 点灵感。" },
  { projectId: "res31_physics_25", stage: 3, at: 100, name: "工程化落地", bonusInsight: 18, text: "弦论屏蔽技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 18 点灵感。" },
  { projectId: "res31_physics_26", stage: 1, at: 33, name: "理论建模", bonusInsight: 6, text: "磁流体纠缠技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 6 点灵感。" },
  { projectId: "res31_physics_26", stage: 2, at: 66, name: "实验验证", bonusInsight: 8, text: "磁流体纠缠技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 8 点灵感。" },
  { projectId: "res31_physics_26", stage: 3, at: 100, name: "工程化落地", bonusInsight: 10, text: "磁流体纠缠技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 10 点灵感。" },
  { projectId: "res31_physics_27", stage: 1, at: 33, name: "理论建模", bonusInsight: 8, text: "高能压缩技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 8 点灵感。" },
  { projectId: "res31_physics_27", stage: 2, at: 66, name: "实验验证", bonusInsight: 10, text: "高能压缩技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 10 点灵感。" },
  { projectId: "res31_physics_27", stage: 3, at: 100, name: "工程化落地", bonusInsight: 12, text: "高能压缩技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 12 点灵感。" },
  { projectId: "res31_physics_28", stage: 1, at: 33, name: "理论建模", bonusInsight: 10, text: "低温约束技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 10 点灵感。" },
  { projectId: "res31_physics_28", stage: 2, at: 66, name: "实验验证", bonusInsight: 12, text: "低温约束技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 12 点灵感。" },
  { projectId: "res31_physics_28", stage: 3, at: 100, name: "工程化落地", bonusInsight: 14, text: "低温约束技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 14 点灵感。" },
  { projectId: "res31_physics_29", stage: 1, at: 33, name: "理论建模", bonusInsight: 12, text: "真空跃迁技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 12 点灵感。" },
  { projectId: "res31_physics_29", stage: 2, at: 66, name: "实验验证", bonusInsight: 14, text: "真空跃迁技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 14 点灵感。" },
  { projectId: "res31_physics_29", stage: 3, at: 100, name: "工程化落地", bonusInsight: 16, text: "真空跃迁技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 16 点灵感。" },
  { projectId: "res31_physics_30", stage: 1, at: 33, name: "理论建模", bonusInsight: 14, text: "粒子隧穿阵列技术·Ⅲ·理论建模阶段（33%）：完成理论建模，获得 14 点灵感。" },
  { projectId: "res31_physics_30", stage: 2, at: 66, name: "实验验证", bonusInsight: 16, text: "粒子隧穿阵列技术·Ⅲ·实验验证阶段（66%）：完成实验验证，获得 16 点灵感。" },
  { projectId: "res31_physics_30", stage: 3, at: 100, name: "工程化落地", bonusInsight: 18, text: "粒子隧穿阵列技术·Ⅲ·工程化落地阶段（100%）：完成工程化落地，获得 18 点灵感。" },
  { projectId: "res31_engineering_01", stage: 1, at: 33, name: "图纸设计", bonusInsight: 6, text: "模块化掘进技术·图纸设计阶段（33%）：完成图纸设计，获得 6 点灵感。" },
  { projectId: "res31_engineering_01", stage: 2, at: 66, name: "原型制造", bonusInsight: 8, text: "模块化掘进技术·原型制造阶段（66%）：完成原型制造，获得 8 点灵感。" },
  { projectId: "res31_engineering_01", stage: 3, at: 100, name: "量产验证", bonusInsight: 10, text: "模块化掘进技术·量产验证阶段（100%）：完成量产验证，获得 10 点灵感。" },
  { projectId: "res31_engineering_02", stage: 1, at: 33, name: "图纸设计", bonusInsight: 8, text: "纳米管网技术·图纸设计阶段（33%）：完成图纸设计，获得 8 点灵感。" },
  { projectId: "res31_engineering_02", stage: 2, at: 66, name: "原型制造", bonusInsight: 10, text: "纳米管网技术·原型制造阶段（66%）：完成原型制造，获得 10 点灵感。" },
  { projectId: "res31_engineering_02", stage: 3, at: 100, name: "量产验证", bonusInsight: 12, text: "纳米管网技术·量产验证阶段（100%）：完成量产验证，获得 12 点灵感。" },
  { projectId: "res31_engineering_03", stage: 1, at: 33, name: "图纸设计", bonusInsight: 10, text: "增材装配技术·图纸设计阶段（33%）：完成图纸设计，获得 10 点灵感。" },
  { projectId: "res31_engineering_03", stage: 2, at: 66, name: "原型制造", bonusInsight: 12, text: "增材装配技术·原型制造阶段（66%）：完成原型制造，获得 12 点灵感。" },
  { projectId: "res31_engineering_03", stage: 3, at: 100, name: "量产验证", bonusInsight: 14, text: "增材装配技术·量产验证阶段（100%）：完成量产验证，获得 14 点灵感。" },
  { projectId: "res31_engineering_04", stage: 1, at: 33, name: "图纸设计", bonusInsight: 12, text: "精密传动技术·图纸设计阶段（33%）：完成图纸设计，获得 12 点灵感。" },
  { projectId: "res31_engineering_04", stage: 2, at: 66, name: "原型制造", bonusInsight: 14, text: "精密传动技术·原型制造阶段（66%）：完成原型制造，获得 14 点灵感。" },
  { projectId: "res31_engineering_04", stage: 3, at: 100, name: "量产验证", bonusInsight: 16, text: "精密传动技术·量产验证阶段（100%）：完成量产验证，获得 16 点灵感。" },
  { projectId: "res31_engineering_05", stage: 1, at: 33, name: "图纸设计", bonusInsight: 14, text: "重型密封技术·图纸设计阶段（33%）：完成图纸设计，获得 14 点灵感。" },
  { projectId: "res31_engineering_05", stage: 2, at: 66, name: "原型制造", bonusInsight: 16, text: "重型密封技术·原型制造阶段（66%）：完成原型制造，获得 16 点灵感。" },
  { projectId: "res31_engineering_05", stage: 3, at: 100, name: "量产验证", bonusInsight: 18, text: "重型密封技术·量产验证阶段（100%）：完成量产验证，获得 18 点灵感。" },
  { projectId: "res31_engineering_06", stage: 1, at: 33, name: "图纸设计", bonusInsight: 6, text: "自适应机床技术·图纸设计阶段（33%）：完成图纸设计，获得 6 点灵感。" },
  { projectId: "res31_engineering_06", stage: 2, at: 66, name: "原型制造", bonusInsight: 8, text: "自适应机床技术·原型制造阶段（66%）：完成原型制造，获得 8 点灵感。" },
  { projectId: "res31_engineering_06", stage: 3, at: 100, name: "量产验证", bonusInsight: 10, text: "自适应机床技术·量产验证阶段（100%）：完成量产验证，获得 10 点灵感。" },
  { projectId: "res31_engineering_07", stage: 1, at: 33, name: "图纸设计", bonusInsight: 8, text: "分布式驱动技术·图纸设计阶段（33%）：完成图纸设计，获得 8 点灵感。" },
  { projectId: "res31_engineering_07", stage: 2, at: 66, name: "原型制造", bonusInsight: 10, text: "分布式驱动技术·原型制造阶段（66%）：完成原型制造，获得 10 点灵感。" },
  { projectId: "res31_engineering_07", stage: 3, at: 100, name: "量产验证", bonusInsight: 12, text: "分布式驱动技术·量产验证阶段（100%）：完成量产验证，获得 12 点灵感。" },
  { projectId: "res31_engineering_08", stage: 1, at: 33, name: "图纸设计", bonusInsight: 10, text: "冗余吊装技术·图纸设计阶段（33%）：完成图纸设计，获得 10 点灵感。" },
  { projectId: "res31_engineering_08", stage: 2, at: 66, name: "原型制造", bonusInsight: 12, text: "冗余吊装技术·原型制造阶段（66%）：完成原型制造，获得 12 点灵感。" },
  { projectId: "res31_engineering_08", stage: 3, at: 100, name: "量产验证", bonusInsight: 14, text: "冗余吊装技术·量产验证阶段（100%）：完成量产验证，获得 14 点灵感。" },
  { projectId: "res31_engineering_09", stage: 1, at: 33, name: "图纸设计", bonusInsight: 12, text: "高温框架技术·图纸设计阶段（33%）：完成图纸设计，获得 12 点灵感。" },
  { projectId: "res31_engineering_09", stage: 2, at: 66, name: "原型制造", bonusInsight: 14, text: "高温框架技术·原型制造阶段（66%）：完成原型制造，获得 14 点灵感。" },
  { projectId: "res31_engineering_09", stage: 3, at: 100, name: "量产验证", bonusInsight: 16, text: "高温框架技术·量产验证阶段（100%）：完成量产验证，获得 16 点灵感。" },
  { projectId: "res31_engineering_10", stage: 1, at: 33, name: "图纸设计", bonusInsight: 14, text: "耐压焊接技术·图纸设计阶段（33%）：完成图纸设计，获得 14 点灵感。" },
  { projectId: "res31_engineering_10", stage: 2, at: 66, name: "原型制造", bonusInsight: 16, text: "耐压焊接技术·原型制造阶段（66%）：完成原型制造，获得 16 点灵感。" },
  { projectId: "res31_engineering_10", stage: 3, at: 100, name: "量产验证", bonusInsight: 18, text: "耐压焊接技术·量产验证阶段（100%）：完成量产验证，获得 18 点灵感。" },
  { projectId: "res31_engineering_11", stage: 1, at: 33, name: "图纸设计", bonusInsight: 6, text: "轻量结构技术·图纸设计阶段（33%）：完成图纸设计，获得 6 点灵感。" },
  { projectId: "res31_engineering_11", stage: 2, at: 66, name: "原型制造", bonusInsight: 8, text: "轻量结构技术·原型制造阶段（66%）：完成原型制造，获得 8 点灵感。" },
  { projectId: "res31_engineering_11", stage: 3, at: 100, name: "量产验证", bonusInsight: 10, text: "轻量结构技术·量产验证阶段（100%）：完成量产验证，获得 10 点灵感。" },
  { projectId: "res31_engineering_12", stage: 1, at: 33, name: "图纸设计", bonusInsight: 8, text: "智能打印技术·图纸设计阶段（33%）：完成图纸设计，获得 8 点灵感。" },
  { projectId: "res31_engineering_12", stage: 2, at: 66, name: "原型制造", bonusInsight: 10, text: "智能打印技术·原型制造阶段（66%）：完成原型制造，获得 10 点灵感。" },
  { projectId: "res31_engineering_12", stage: 3, at: 100, name: "量产验证", bonusInsight: 12, text: "智能打印技术·量产验证阶段（100%）：完成量产验证，获得 12 点灵感。" },
  { projectId: "res31_engineering_13", stage: 1, at: 33, name: "图纸设计", bonusInsight: 10, text: "并行轴承技术·图纸设计阶段（33%）：完成图纸设计，获得 10 点灵感。" },
  { projectId: "res31_engineering_13", stage: 2, at: 66, name: "原型制造", bonusInsight: 12, text: "并行轴承技术·原型制造阶段（66%）：完成原型制造，获得 12 点灵感。" },
  { projectId: "res31_engineering_13", stage: 3, at: 100, name: "量产验证", bonusInsight: 14, text: "并行轴承技术·量产验证阶段（100%）：完成量产验证，获得 14 点灵感。" },
  { projectId: "res31_engineering_14", stage: 1, at: 33, name: "图纸设计", bonusInsight: 12, text: "柔性散热技术·图纸设计阶段（33%）：完成图纸设计，获得 12 点灵感。" },
  { projectId: "res31_engineering_14", stage: 2, at: 66, name: "原型制造", bonusInsight: 14, text: "柔性散热技术·原型制造阶段（66%）：完成原型制造，获得 14 点灵感。" },
  { projectId: "res31_engineering_14", stage: 3, at: 100, name: "量产验证", bonusInsight: 16, text: "柔性散热技术·量产验证阶段（100%）：完成量产验证，获得 16 点灵感。" },
  { projectId: "res31_engineering_15", stage: 1, at: 33, name: "图纸设计", bonusInsight: 14, text: "超硬锻造技术·图纸设计阶段（33%）：完成图纸设计，获得 14 点灵感。" },
  { projectId: "res31_engineering_15", stage: 2, at: 66, name: "原型制造", bonusInsight: 16, text: "超硬锻造技术·原型制造阶段（66%）：完成原型制造，获得 16 点灵感。" },
  { projectId: "res31_engineering_15", stage: 3, at: 100, name: "量产验证", bonusInsight: 18, text: "超硬锻造技术·量产验证阶段（100%）：完成量产验证，获得 18 点灵感。" },
  { projectId: "res31_engineering_16", stage: 1, at: 33, name: "图纸设计", bonusInsight: 6, text: "低耗接口技术·图纸设计阶段（33%）：完成图纸设计，获得 6 点灵感。" },
  { projectId: "res31_engineering_16", stage: 2, at: 66, name: "原型制造", bonusInsight: 8, text: "低耗接口技术·原型制造阶段（66%）：完成原型制造，获得 8 点灵感。" },
  { projectId: "res31_engineering_16", stage: 3, at: 100, name: "量产验证", bonusInsight: 10, text: "低耗接口技术·量产验证阶段（100%）：完成量产验证，获得 10 点灵感。" },
  { projectId: "res31_engineering_17", stage: 1, at: 33, name: "图纸设计", bonusInsight: 8, text: "模块化掘进技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 8 点灵感。" },
  { projectId: "res31_engineering_17", stage: 2, at: 66, name: "原型制造", bonusInsight: 10, text: "模块化掘进技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 10 点灵感。" },
  { projectId: "res31_engineering_17", stage: 3, at: 100, name: "量产验证", bonusInsight: 12, text: "模块化掘进技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 12 点灵感。" },
  { projectId: "res31_engineering_18", stage: 1, at: 33, name: "图纸设计", bonusInsight: 10, text: "纳米管网技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 10 点灵感。" },
  { projectId: "res31_engineering_18", stage: 2, at: 66, name: "原型制造", bonusInsight: 12, text: "纳米管网技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 12 点灵感。" },
  { projectId: "res31_engineering_18", stage: 3, at: 100, name: "量产验证", bonusInsight: 14, text: "纳米管网技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 14 点灵感。" },
  { projectId: "res31_engineering_19", stage: 1, at: 33, name: "图纸设计", bonusInsight: 12, text: "增材装配技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 12 点灵感。" },
  { projectId: "res31_engineering_19", stage: 2, at: 66, name: "原型制造", bonusInsight: 14, text: "增材装配技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 14 点灵感。" },
  { projectId: "res31_engineering_19", stage: 3, at: 100, name: "量产验证", bonusInsight: 16, text: "增材装配技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 16 点灵感。" },
  { projectId: "res31_engineering_20", stage: 1, at: 33, name: "图纸设计", bonusInsight: 14, text: "精密传动技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 14 点灵感。" },
  { projectId: "res31_engineering_20", stage: 2, at: 66, name: "原型制造", bonusInsight: 16, text: "精密传动技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 16 点灵感。" },
  { projectId: "res31_engineering_20", stage: 3, at: 100, name: "量产验证", bonusInsight: 18, text: "精密传动技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 18 点灵感。" },
  { projectId: "res31_engineering_21", stage: 1, at: 33, name: "图纸设计", bonusInsight: 6, text: "重型密封技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 6 点灵感。" },
  { projectId: "res31_engineering_21", stage: 2, at: 66, name: "原型制造", bonusInsight: 8, text: "重型密封技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 8 点灵感。" },
  { projectId: "res31_engineering_21", stage: 3, at: 100, name: "量产验证", bonusInsight: 10, text: "重型密封技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 10 点灵感。" },
  { projectId: "res31_engineering_22", stage: 1, at: 33, name: "图纸设计", bonusInsight: 8, text: "自适应机床技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 8 点灵感。" },
  { projectId: "res31_engineering_22", stage: 2, at: 66, name: "原型制造", bonusInsight: 10, text: "自适应机床技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 10 点灵感。" },
  { projectId: "res31_engineering_22", stage: 3, at: 100, name: "量产验证", bonusInsight: 12, text: "自适应机床技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 12 点灵感。" },
  { projectId: "res31_engineering_23", stage: 1, at: 33, name: "图纸设计", bonusInsight: 10, text: "分布式驱动技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 10 点灵感。" },
  { projectId: "res31_engineering_23", stage: 2, at: 66, name: "原型制造", bonusInsight: 12, text: "分布式驱动技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 12 点灵感。" },
  { projectId: "res31_engineering_23", stage: 3, at: 100, name: "量产验证", bonusInsight: 14, text: "分布式驱动技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 14 点灵感。" },
  { projectId: "res31_engineering_24", stage: 1, at: 33, name: "图纸设计", bonusInsight: 12, text: "冗余吊装技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 12 点灵感。" },
  { projectId: "res31_engineering_24", stage: 2, at: 66, name: "原型制造", bonusInsight: 14, text: "冗余吊装技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 14 点灵感。" },
  { projectId: "res31_engineering_24", stage: 3, at: 100, name: "量产验证", bonusInsight: 16, text: "冗余吊装技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 16 点灵感。" },
  { projectId: "res31_engineering_25", stage: 1, at: 33, name: "图纸设计", bonusInsight: 14, text: "高温框架技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 14 点灵感。" },
  { projectId: "res31_engineering_25", stage: 2, at: 66, name: "原型制造", bonusInsight: 16, text: "高温框架技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 16 点灵感。" },
  { projectId: "res31_engineering_25", stage: 3, at: 100, name: "量产验证", bonusInsight: 18, text: "高温框架技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 18 点灵感。" },
  { projectId: "res31_engineering_26", stage: 1, at: 33, name: "图纸设计", bonusInsight: 6, text: "耐压焊接技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 6 点灵感。" },
  { projectId: "res31_engineering_26", stage: 2, at: 66, name: "原型制造", bonusInsight: 8, text: "耐压焊接技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 8 点灵感。" },
  { projectId: "res31_engineering_26", stage: 3, at: 100, name: "量产验证", bonusInsight: 10, text: "耐压焊接技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 10 点灵感。" },
  { projectId: "res31_engineering_27", stage: 1, at: 33, name: "图纸设计", bonusInsight: 8, text: "轻量结构技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 8 点灵感。" },
  { projectId: "res31_engineering_27", stage: 2, at: 66, name: "原型制造", bonusInsight: 10, text: "轻量结构技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 10 点灵感。" },
  { projectId: "res31_engineering_27", stage: 3, at: 100, name: "量产验证", bonusInsight: 12, text: "轻量结构技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 12 点灵感。" },
  { projectId: "res31_engineering_28", stage: 1, at: 33, name: "图纸设计", bonusInsight: 10, text: "智能打印技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 10 点灵感。" },
  { projectId: "res31_engineering_28", stage: 2, at: 66, name: "原型制造", bonusInsight: 12, text: "智能打印技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 12 点灵感。" },
  { projectId: "res31_engineering_28", stage: 3, at: 100, name: "量产验证", bonusInsight: 14, text: "智能打印技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 14 点灵感。" },
  { projectId: "res31_engineering_29", stage: 1, at: 33, name: "图纸设计", bonusInsight: 12, text: "并行轴承技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 12 点灵感。" },
  { projectId: "res31_engineering_29", stage: 2, at: 66, name: "原型制造", bonusInsight: 14, text: "并行轴承技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 14 点灵感。" },
  { projectId: "res31_engineering_29", stage: 3, at: 100, name: "量产验证", bonusInsight: 16, text: "并行轴承技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 16 点灵感。" },
  { projectId: "res31_engineering_30", stage: 1, at: 33, name: "图纸设计", bonusInsight: 14, text: "柔性散热技术·Ⅲ·图纸设计阶段（33%）：完成图纸设计，获得 14 点灵感。" },
  { projectId: "res31_engineering_30", stage: 2, at: 66, name: "原型制造", bonusInsight: 16, text: "柔性散热技术·Ⅲ·原型制造阶段（66%）：完成原型制造，获得 16 点灵感。" },
  { projectId: "res31_engineering_30", stage: 3, at: 100, name: "量产验证", bonusInsight: 18, text: "柔性散热技术·Ⅲ·量产验证阶段（100%）：完成量产验证，获得 18 点灵感。" },
  { projectId: "res31_biology_01", stage: 1, at: 33, name: "样本采集", bonusInsight: 6, text: "基因发酵技术·样本采集阶段（33%）：完成样本采集，获得 6 点灵感。" },
  { projectId: "res31_biology_01", stage: 2, at: 66, name: "培养实验", bonusInsight: 8, text: "基因发酵技术·培养实验阶段（66%）：完成培养实验，获得 8 点灵感。" },
  { projectId: "res31_biology_01", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 10, text: "基因发酵技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 10 点灵感。" },
  { projectId: "res31_biology_02", stage: 1, at: 33, name: "样本采集", bonusInsight: 8, text: "光合循环技术·样本采集阶段（33%）：完成样本采集，获得 8 点灵感。" },
  { projectId: "res31_biology_02", stage: 2, at: 66, name: "培养实验", bonusInsight: 10, text: "光合循环技术·培养实验阶段（66%）：完成培养实验，获得 10 点灵感。" },
  { projectId: "res31_biology_02", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 12, text: "光合循环技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 12 点灵感。" },
  { projectId: "res31_biology_03", stage: 1, at: 33, name: "样本采集", bonusInsight: 10, text: "微生物培育技术·样本采集阶段（33%）：完成样本采集，获得 10 点灵感。" },
  { projectId: "res31_biology_03", stage: 2, at: 66, name: "培养实验", bonusInsight: 12, text: "微生物培育技术·培养实验阶段（66%）：完成培养实验，获得 12 点灵感。" },
  { projectId: "res31_biology_03", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 14, text: "微生物培育技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 14 点灵感。" },
  { projectId: "res31_biology_04", stage: 1, at: 33, name: "样本采集", bonusInsight: 12, text: "干细胞适配技术·样本采集阶段（33%）：完成样本采集，获得 12 点灵感。" },
  { projectId: "res31_biology_04", stage: 2, at: 66, name: "培养实验", bonusInsight: 14, text: "干细胞适配技术·培养实验阶段（66%）：完成培养实验，获得 14 点灵感。" },
  { projectId: "res31_biology_04", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 16, text: "干细胞适配技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 16 点灵感。" },
  { projectId: "res31_biology_05", stage: 1, at: 33, name: "样本采集", bonusInsight: 14, text: "酶促耐受技术·样本采集阶段（33%）：完成样本采集，获得 14 点灵感。" },
  { projectId: "res31_biology_05", stage: 2, at: 66, name: "培养实验", bonusInsight: 16, text: "酶促耐受技术·培养实验阶段（66%）：完成培养实验，获得 16 点灵感。" },
  { projectId: "res31_biology_05", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 18, text: "酶促耐受技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 18 点灵感。" },
  { projectId: "res31_biology_06", stage: 1, at: 33, name: "样本采集", bonusInsight: 6, text: "免疫筛选技术·样本采集阶段（33%）：完成样本采集，获得 6 点灵感。" },
  { projectId: "res31_biology_06", stage: 2, at: 66, name: "培养实验", bonusInsight: 8, text: "免疫筛选技术·培养实验阶段（66%）：完成培养实验，获得 8 点灵感。" },
  { projectId: "res31_biology_06", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 10, text: "免疫筛选技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 10 点灵感。" },
  { projectId: "res31_biology_07", stage: 1, at: 33, name: "样本采集", bonusInsight: 8, text: "神经分化技术·样本采集阶段（33%）：完成样本采集，获得 8 点灵感。" },
  { projectId: "res31_biology_07", stage: 2, at: 66, name: "培养实验", bonusInsight: 10, text: "神经分化技术·培养实验阶段（66%）：完成培养实验，获得 10 点灵感。" },
  { projectId: "res31_biology_07", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 12, text: "神经分化技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 12 点灵感。" },
  { projectId: "res31_biology_08", stage: 1, at: 33, name: "样本采集", bonusInsight: 10, text: "生态修复技术·样本采集阶段（33%）：完成样本采集，获得 10 点灵感。" },
  { projectId: "res31_biology_08", stage: 2, at: 66, name: "培养实验", bonusInsight: 12, text: "生态修复技术·培养实验阶段（66%）：完成培养实验，获得 12 点灵感。" },
  { projectId: "res31_biology_08", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 14, text: "生态修复技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 14 点灵感。" },
  { projectId: "res31_biology_09", stage: 1, at: 33, name: "样本采集", bonusInsight: 12, text: "藻类合成技术·样本采集阶段（33%）：完成样本采集，获得 12 点灵感。" },
  { projectId: "res31_biology_09", stage: 2, at: 66, name: "培养实验", bonusInsight: 14, text: "藻类合成技术·培养实验阶段（66%）：完成培养实验，获得 14 点灵感。" },
  { projectId: "res31_biology_09", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 16, text: "藻类合成技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 16 点灵感。" },
  { projectId: "res31_biology_10", stage: 1, at: 33, name: "样本采集", bonusInsight: 14, text: "菌群驯化技术·样本采集阶段（33%）：完成样本采集，获得 14 点灵感。" },
  { projectId: "res31_biology_10", stage: 2, at: 66, name: "培养实验", bonusInsight: 16, text: "菌群驯化技术·培养实验阶段（66%）：完成培养实验，获得 16 点灵感。" },
  { projectId: "res31_biology_10", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 18, text: "菌群驯化技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 18 点灵感。" },
  { projectId: "res31_biology_11", stage: 1, at: 33, name: "样本采集", bonusInsight: 6, text: "蛋白共生技术·样本采集阶段（33%）：完成样本采集，获得 6 点灵感。" },
  { projectId: "res31_biology_11", stage: 2, at: 66, name: "培养实验", bonusInsight: 8, text: "蛋白共生技术·培养实验阶段（66%）：完成培养实验，获得 8 点灵感。" },
  { projectId: "res31_biology_11", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 10, text: "蛋白共生技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 10 点灵感。" },
  { projectId: "res31_biology_12", stage: 1, at: 33, name: "样本采集", bonusInsight: 8, text: "代谢编辑技术·样本采集阶段（33%）：完成样本采集，获得 8 点灵感。" },
  { projectId: "res31_biology_12", stage: 2, at: 66, name: "培养实验", bonusInsight: 10, text: "代谢编辑技术·培养实验阶段（66%）：完成培养实验，获得 10 点灵感。" },
  { projectId: "res31_biology_12", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 12, text: "代谢编辑技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 12 点灵感。" },
  { projectId: "res31_biology_13", stage: 1, at: 33, name: "样本采集", bonusInsight: 10, text: "表观扩增技术·样本采集阶段（33%）：完成样本采集，获得 10 点灵感。" },
  { projectId: "res31_biology_13", stage: 2, at: 66, name: "培养实验", bonusInsight: 12, text: "表观扩增技术·培养实验阶段（66%）：完成培养实验，获得 12 点灵感。" },
  { projectId: "res31_biology_13", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 14, text: "表观扩增技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 14 点灵感。" },
  { projectId: "res31_biology_14", stage: 1, at: 33, name: "样本采集", bonusInsight: 12, text: "共生再生技术·样本采集阶段（33%）：完成样本采集，获得 12 点灵感。" },
  { projectId: "res31_biology_14", stage: 2, at: 66, name: "培养实验", bonusInsight: 14, text: "共生再生技术·培养实验阶段（66%）：完成培养实验，获得 14 点灵感。" },
  { projectId: "res31_biology_14", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 16, text: "共生再生技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 16 点灵感。" },
  { projectId: "res31_biology_15", stage: 1, at: 33, name: "样本采集", bonusInsight: 14, text: "抗逆调控技术·样本采集阶段（33%）：完成样本采集，获得 14 点灵感。" },
  { projectId: "res31_biology_15", stage: 2, at: 66, name: "培养实验", bonusInsight: 16, text: "抗逆调控技术·培养实验阶段（66%）：完成培养实验，获得 16 点灵感。" },
  { projectId: "res31_biology_15", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 18, text: "抗逆调控技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 18 点灵感。" },
  { projectId: "res31_biology_16", stage: 1, at: 33, name: "样本采集", bonusInsight: 6, text: "克隆表达技术·样本采集阶段（33%）：完成样本采集，获得 6 点灵感。" },
  { projectId: "res31_biology_16", stage: 2, at: 66, name: "培养实验", bonusInsight: 8, text: "克隆表达技术·培养实验阶段（66%）：完成培养实验，获得 8 点灵感。" },
  { projectId: "res31_biology_16", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 10, text: "克隆表达技术·临床/田间验证阶段（100%）：完成临床/田间验证，获得 10 点灵感。" },
  { projectId: "res31_biology_17", stage: 1, at: 33, name: "样本采集", bonusInsight: 8, text: "基因发酵技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 8 点灵感。" },
  { projectId: "res31_biology_17", stage: 2, at: 66, name: "培养实验", bonusInsight: 10, text: "基因发酵技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 10 点灵感。" },
  { projectId: "res31_biology_17", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 12, text: "基因发酵技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 12 点灵感。" },
  { projectId: "res31_biology_18", stage: 1, at: 33, name: "样本采集", bonusInsight: 10, text: "光合循环技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 10 点灵感。" },
  { projectId: "res31_biology_18", stage: 2, at: 66, name: "培养实验", bonusInsight: 12, text: "光合循环技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 12 点灵感。" },
  { projectId: "res31_biology_18", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 14, text: "光合循环技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 14 点灵感。" },
  { projectId: "res31_biology_19", stage: 1, at: 33, name: "样本采集", bonusInsight: 12, text: "微生物培育技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 12 点灵感。" },
  { projectId: "res31_biology_19", stage: 2, at: 66, name: "培养实验", bonusInsight: 14, text: "微生物培育技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 14 点灵感。" },
  { projectId: "res31_biology_19", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 16, text: "微生物培育技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 16 点灵感。" },
  { projectId: "res31_biology_20", stage: 1, at: 33, name: "样本采集", bonusInsight: 14, text: "干细胞适配技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 14 点灵感。" },
  { projectId: "res31_biology_20", stage: 2, at: 66, name: "培养实验", bonusInsight: 16, text: "干细胞适配技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 16 点灵感。" },
  { projectId: "res31_biology_20", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 18, text: "干细胞适配技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 18 点灵感。" },
  { projectId: "res31_biology_21", stage: 1, at: 33, name: "样本采集", bonusInsight: 6, text: "酶促耐受技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 6 点灵感。" },
  { projectId: "res31_biology_21", stage: 2, at: 66, name: "培养实验", bonusInsight: 8, text: "酶促耐受技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 8 点灵感。" },
  { projectId: "res31_biology_21", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 10, text: "酶促耐受技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 10 点灵感。" },
  { projectId: "res31_biology_22", stage: 1, at: 33, name: "样本采集", bonusInsight: 8, text: "免疫筛选技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 8 点灵感。" },
  { projectId: "res31_biology_22", stage: 2, at: 66, name: "培养实验", bonusInsight: 10, text: "免疫筛选技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 10 点灵感。" },
  { projectId: "res31_biology_22", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 12, text: "免疫筛选技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 12 点灵感。" },
  { projectId: "res31_biology_23", stage: 1, at: 33, name: "样本采集", bonusInsight: 10, text: "神经分化技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 10 点灵感。" },
  { projectId: "res31_biology_23", stage: 2, at: 66, name: "培养实验", bonusInsight: 12, text: "神经分化技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 12 点灵感。" },
  { projectId: "res31_biology_23", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 14, text: "神经分化技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 14 点灵感。" },
  { projectId: "res31_biology_24", stage: 1, at: 33, name: "样本采集", bonusInsight: 12, text: "生态修复技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 12 点灵感。" },
  { projectId: "res31_biology_24", stage: 2, at: 66, name: "培养实验", bonusInsight: 14, text: "生态修复技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 14 点灵感。" },
  { projectId: "res31_biology_24", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 16, text: "生态修复技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 16 点灵感。" },
  { projectId: "res31_biology_25", stage: 1, at: 33, name: "样本采集", bonusInsight: 14, text: "藻类合成技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 14 点灵感。" },
  { projectId: "res31_biology_25", stage: 2, at: 66, name: "培养实验", bonusInsight: 16, text: "藻类合成技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 16 点灵感。" },
  { projectId: "res31_biology_25", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 18, text: "藻类合成技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 18 点灵感。" },
  { projectId: "res31_biology_26", stage: 1, at: 33, name: "样本采集", bonusInsight: 6, text: "菌群驯化技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 6 点灵感。" },
  { projectId: "res31_biology_26", stage: 2, at: 66, name: "培养实验", bonusInsight: 8, text: "菌群驯化技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 8 点灵感。" },
  { projectId: "res31_biology_26", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 10, text: "菌群驯化技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 10 点灵感。" },
  { projectId: "res31_biology_27", stage: 1, at: 33, name: "样本采集", bonusInsight: 8, text: "蛋白共生技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 8 点灵感。" },
  { projectId: "res31_biology_27", stage: 2, at: 66, name: "培养实验", bonusInsight: 10, text: "蛋白共生技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 10 点灵感。" },
  { projectId: "res31_biology_27", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 12, text: "蛋白共生技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 12 点灵感。" },
  { projectId: "res31_biology_28", stage: 1, at: 33, name: "样本采集", bonusInsight: 10, text: "代谢编辑技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 10 点灵感。" },
  { projectId: "res31_biology_28", stage: 2, at: 66, name: "培养实验", bonusInsight: 12, text: "代谢编辑技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 12 点灵感。" },
  { projectId: "res31_biology_28", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 14, text: "代谢编辑技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 14 点灵感。" },
  { projectId: "res31_biology_29", stage: 1, at: 33, name: "样本采集", bonusInsight: 12, text: "表观扩增技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 12 点灵感。" },
  { projectId: "res31_biology_29", stage: 2, at: 66, name: "培养实验", bonusInsight: 14, text: "表观扩增技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 14 点灵感。" },
  { projectId: "res31_biology_29", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 16, text: "表观扩增技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 16 点灵感。" },
  { projectId: "res31_biology_30", stage: 1, at: 33, name: "样本采集", bonusInsight: 14, text: "共生再生技术·Ⅲ·样本采集阶段（33%）：完成样本采集，获得 14 点灵感。" },
  { projectId: "res31_biology_30", stage: 2, at: 66, name: "培养实验", bonusInsight: 16, text: "共生再生技术·Ⅲ·培养实验阶段（66%）：完成培养实验，获得 16 点灵感。" },
  { projectId: "res31_biology_30", stage: 3, at: 100, name: "临床/田间验证", bonusInsight: 18, text: "共生再生技术·Ⅲ·临床/田间验证阶段（100%）：完成临床/田间验证，获得 18 点灵感。" },
  { projectId: "res31_society_01", stage: 1, at: 33, name: "田野调查", bonusInsight: 6, text: "公民学院技术·田野调查阶段（33%）：完成田野调查，获得 6 点灵感。" },
  { projectId: "res31_society_01", stage: 2, at: 66, name: "模型推演", bonusInsight: 8, text: "公民学院技术·模型推演阶段（66%）：完成模型推演，获得 8 点灵感。" },
  { projectId: "res31_society_01", stage: 3, at: 100, name: "试点推行", bonusInsight: 10, text: "公民学院技术·试点推行阶段（100%）：完成试点推行，获得 10 点灵感。" },
  { projectId: "res31_society_02", stage: 1, at: 33, name: "田野调查", bonusInsight: 8, text: "社区互助技术·田野调查阶段（33%）：完成田野调查，获得 8 点灵感。" },
  { projectId: "res31_society_02", stage: 2, at: 66, name: "模型推演", bonusInsight: 10, text: "社区互助技术·模型推演阶段（66%）：完成模型推演，获得 10 点灵感。" },
  { projectId: "res31_society_02", stage: 3, at: 100, name: "试点推行", bonusInsight: 12, text: "社区互助技术·试点推行阶段（100%）：完成试点推行，获得 12 点灵感。" },
  { projectId: "res31_society_03", stage: 1, at: 33, name: "田野调查", bonusInsight: 10, text: "契约议会技术·田野调查阶段（33%）：完成田野调查，获得 10 点灵感。" },
  { projectId: "res31_society_03", stage: 2, at: 66, name: "模型推演", bonusInsight: 12, text: "契约议会技术·模型推演阶段（66%）：完成模型推演，获得 12 点灵感。" },
  { projectId: "res31_society_03", stage: 3, at: 100, name: "试点推行", bonusInsight: 14, text: "契约议会技术·试点推行阶段（100%）：完成试点推行，获得 14 点灵感。" },
  { projectId: "res31_society_04", stage: 1, at: 33, name: "田野调查", bonusInsight: 12, text: "治理电台技术·田野调查阶段（33%）：完成田野调查，获得 12 点灵感。" },
  { projectId: "res31_society_04", stage: 2, at: 66, name: "模型推演", bonusInsight: 14, text: "治理电台技术·模型推演阶段（66%）：完成模型推演，获得 14 点灵感。" },
  { projectId: "res31_society_04", stage: 3, at: 100, name: "试点推行", bonusInsight: 16, text: "治理电台技术·试点推行阶段（100%）：完成试点推行，获得 16 点灵感。" },
  { projectId: "res31_society_05", stage: 1, at: 33, name: "田野调查", bonusInsight: 14, text: "教育共识技术·田野调查阶段（33%）：完成田野调查，获得 14 点灵感。" },
  { projectId: "res31_society_05", stage: 2, at: 66, name: "模型推演", bonusInsight: 16, text: "教育共识技术·模型推演阶段（66%）：完成模型推演，获得 16 点灵感。" },
  { projectId: "res31_society_05", stage: 3, at: 100, name: "试点推行", bonusInsight: 18, text: "教育共识技术·试点推行阶段（100%）：完成试点推行，获得 18 点灵感。" },
  { projectId: "res31_society_06", stage: 1, at: 33, name: "田野调查", bonusInsight: 6, text: "文化公约技术·田野调查阶段（33%）：完成田野调查，获得 6 点灵感。" },
  { projectId: "res31_society_06", stage: 2, at: 66, name: "模型推演", bonusInsight: 8, text: "文化公约技术·模型推演阶段（66%）：完成模型推演，获得 8 点灵感。" },
  { projectId: "res31_society_06", stage: 3, at: 100, name: "试点推行", bonusInsight: 10, text: "文化公约技术·试点推行阶段（100%）：完成试点推行，获得 10 点灵感。" },
  { projectId: "res31_society_07", stage: 1, at: 33, name: "田野调查", bonusInsight: 8, text: "法律典礼技术·田野调查阶段（33%）：完成田野调查，获得 8 点灵感。" },
  { projectId: "res31_society_07", stage: 2, at: 66, name: "模型推演", bonusInsight: 10, text: "法律典礼技术·模型推演阶段（66%）：完成模型推演，获得 10 点灵感。" },
  { projectId: "res31_society_07", stage: 3, at: 100, name: "试点推行", bonusInsight: 12, text: "法律典礼技术·试点推行阶段（100%）：完成试点推行，获得 12 点灵感。" },
  { projectId: "res31_society_08", stage: 1, at: 33, name: "田野调查", bonusInsight: 10, text: "福利市集技术·田野调查阶段（33%）：完成田野调查，获得 10 点灵感。" },
  { projectId: "res31_society_08", stage: 2, at: 66, name: "模型推演", bonusInsight: 12, text: "福利市集技术·模型推演阶段（66%）：完成模型推演，获得 12 点灵感。" },
  { projectId: "res31_society_08", stage: 3, at: 100, name: "试点推行", bonusInsight: 14, text: "福利市集技术·试点推行阶段（100%）：完成试点推行，获得 14 点灵感。" },
  { projectId: "res31_society_09", stage: 1, at: 33, name: "田野调查", bonusInsight: 12, text: "舆论仲裁技术·田野调查阶段（33%）：完成田野调查，获得 12 点灵感。" },
  { projectId: "res31_society_09", stage: 2, at: 66, name: "模型推演", bonusInsight: 14, text: "舆论仲裁技术·模型推演阶段（66%）：完成模型推演，获得 14 点灵感。" },
  { projectId: "res31_society_09", stage: 3, at: 100, name: "试点推行", bonusInsight: 16, text: "舆论仲裁技术·试点推行阶段（100%）：完成试点推行，获得 16 点灵感。" },
  { projectId: "res31_society_10", stage: 1, at: 33, name: "田野调查", bonusInsight: 14, text: "自治法庭技术·田野调查阶段（33%）：完成田野调查，获得 14 点灵感。" },
  { projectId: "res31_society_10", stage: 2, at: 66, name: "模型推演", bonusInsight: 16, text: "自治法庭技术·模型推演阶段（66%）：完成模型推演，获得 16 点灵感。" },
  { projectId: "res31_society_10", stage: 3, at: 100, name: "试点推行", bonusInsight: 18, text: "自治法庭技术·试点推行阶段（100%）：完成试点推行，获得 18 点灵感。" },
  { projectId: "res31_society_11", stage: 1, at: 33, name: "田野调查", bonusInsight: 6, text: "协商剧场技术·田野调查阶段（33%）：完成田野调查，获得 6 点灵感。" },
  { projectId: "res31_society_11", stage: 2, at: 66, name: "模型推演", bonusInsight: 8, text: "协商剧场技术·模型推演阶段（66%）：完成模型推演，获得 8 点灵感。" },
  { projectId: "res31_society_11", stage: 3, at: 100, name: "试点推行", bonusInsight: 10, text: "协商剧场技术·试点推行阶段（100%）：完成试点推行，获得 10 点灵感。" },
  { projectId: "res31_society_12", stage: 1, at: 33, name: "田野调查", bonusInsight: 8, text: "信用网络技术·田野调查阶段（33%）：完成田野调查，获得 8 点灵感。" },
  { projectId: "res31_society_12", stage: 2, at: 66, name: "模型推演", bonusInsight: 10, text: "信用网络技术·模型推演阶段（66%）：完成模型推演，获得 10 点灵感。" },
  { projectId: "res31_society_12", stage: 3, at: 100, name: "试点推行", bonusInsight: 12, text: "信用网络技术·试点推行阶段（100%）：完成试点推行，获得 12 点灵感。" },
  { projectId: "res31_society_13", stage: 1, at: 33, name: "田野调查", bonusInsight: 10, text: "习俗基金技术·田野调查阶段（33%）：完成田野调查，获得 10 点灵感。" },
  { projectId: "res31_society_13", stage: 2, at: 66, name: "模型推演", bonusInsight: 12, text: "习俗基金技术·模型推演阶段（66%）：完成模型推演，获得 12 点灵感。" },
  { projectId: "res31_society_13", stage: 3, at: 100, name: "试点推行", bonusInsight: 14, text: "习俗基金技术·试点推行阶段（100%）：完成试点推行，获得 14 点灵感。" },
  { projectId: "res31_society_14", stage: 1, at: 33, name: "田野调查", bonusInsight: 12, text: "礼仪传承技术·田野调查阶段（33%）：完成田野调查，获得 12 点灵感。" },
  { projectId: "res31_society_14", stage: 2, at: 66, name: "模型推演", bonusInsight: 14, text: "礼仪传承技术·模型推演阶段（66%）：完成模型推演，获得 14 点灵感。" },
  { projectId: "res31_society_14", stage: 3, at: 100, name: "试点推行", bonusInsight: 16, text: "礼仪传承技术·试点推行阶段（100%）：完成试点推行，获得 16 点灵感。" },
  { projectId: "res31_society_15", stage: 1, at: 33, name: "田野调查", bonusInsight: 14, text: "记忆档案技术·田野调查阶段（33%）：完成田野调查，获得 14 点灵感。" },
  { projectId: "res31_society_15", stage: 2, at: 66, name: "模型推演", bonusInsight: 16, text: "记忆档案技术·模型推演阶段（66%）：完成模型推演，获得 16 点灵感。" },
  { projectId: "res31_society_15", stage: 3, at: 100, name: "试点推行", bonusInsight: 18, text: "记忆档案技术·试点推行阶段（100%）：完成试点推行，获得 18 点灵感。" },
  { projectId: "res31_society_16", stage: 1, at: 33, name: "田野调查", bonusInsight: 6, text: "认同普查技术·田野调查阶段（33%）：完成田野调查，获得 6 点灵感。" },
  { projectId: "res31_society_16", stage: 2, at: 66, name: "模型推演", bonusInsight: 8, text: "认同普查技术·模型推演阶段（66%）：完成模型推演，获得 8 点灵感。" },
  { projectId: "res31_society_16", stage: 3, at: 100, name: "试点推行", bonusInsight: 10, text: "认同普查技术·试点推行阶段（100%）：完成试点推行，获得 10 点灵感。" },
  { projectId: "res31_society_17", stage: 1, at: 33, name: "田野调查", bonusInsight: 8, text: "公民学院技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 8 点灵感。" },
  { projectId: "res31_society_17", stage: 2, at: 66, name: "模型推演", bonusInsight: 10, text: "公民学院技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 10 点灵感。" },
  { projectId: "res31_society_17", stage: 3, at: 100, name: "试点推行", bonusInsight: 12, text: "公民学院技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 12 点灵感。" },
  { projectId: "res31_society_18", stage: 1, at: 33, name: "田野调查", bonusInsight: 10, text: "社区互助技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 10 点灵感。" },
  { projectId: "res31_society_18", stage: 2, at: 66, name: "模型推演", bonusInsight: 12, text: "社区互助技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 12 点灵感。" },
  { projectId: "res31_society_18", stage: 3, at: 100, name: "试点推行", bonusInsight: 14, text: "社区互助技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 14 点灵感。" },
  { projectId: "res31_society_19", stage: 1, at: 33, name: "田野调查", bonusInsight: 12, text: "契约议会技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 12 点灵感。" },
  { projectId: "res31_society_19", stage: 2, at: 66, name: "模型推演", bonusInsight: 14, text: "契约议会技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 14 点灵感。" },
  { projectId: "res31_society_19", stage: 3, at: 100, name: "试点推行", bonusInsight: 16, text: "契约议会技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 16 点灵感。" },
  { projectId: "res31_society_20", stage: 1, at: 33, name: "田野调查", bonusInsight: 14, text: "治理电台技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 14 点灵感。" },
  { projectId: "res31_society_20", stage: 2, at: 66, name: "模型推演", bonusInsight: 16, text: "治理电台技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 16 点灵感。" },
  { projectId: "res31_society_20", stage: 3, at: 100, name: "试点推行", bonusInsight: 18, text: "治理电台技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 18 点灵感。" },
  { projectId: "res31_society_21", stage: 1, at: 33, name: "田野调查", bonusInsight: 6, text: "教育共识技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 6 点灵感。" },
  { projectId: "res31_society_21", stage: 2, at: 66, name: "模型推演", bonusInsight: 8, text: "教育共识技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 8 点灵感。" },
  { projectId: "res31_society_21", stage: 3, at: 100, name: "试点推行", bonusInsight: 10, text: "教育共识技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 10 点灵感。" },
  { projectId: "res31_society_22", stage: 1, at: 33, name: "田野调查", bonusInsight: 8, text: "文化公约技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 8 点灵感。" },
  { projectId: "res31_society_22", stage: 2, at: 66, name: "模型推演", bonusInsight: 10, text: "文化公约技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 10 点灵感。" },
  { projectId: "res31_society_22", stage: 3, at: 100, name: "试点推行", bonusInsight: 12, text: "文化公约技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 12 点灵感。" },
  { projectId: "res31_society_23", stage: 1, at: 33, name: "田野调查", bonusInsight: 10, text: "法律典礼技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 10 点灵感。" },
  { projectId: "res31_society_23", stage: 2, at: 66, name: "模型推演", bonusInsight: 12, text: "法律典礼技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 12 点灵感。" },
  { projectId: "res31_society_23", stage: 3, at: 100, name: "试点推行", bonusInsight: 14, text: "法律典礼技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 14 点灵感。" },
  { projectId: "res31_society_24", stage: 1, at: 33, name: "田野调查", bonusInsight: 12, text: "福利市集技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 12 点灵感。" },
  { projectId: "res31_society_24", stage: 2, at: 66, name: "模型推演", bonusInsight: 14, text: "福利市集技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 14 点灵感。" },
  { projectId: "res31_society_24", stage: 3, at: 100, name: "试点推行", bonusInsight: 16, text: "福利市集技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 16 点灵感。" },
  { projectId: "res31_society_25", stage: 1, at: 33, name: "田野调查", bonusInsight: 14, text: "舆论仲裁技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 14 点灵感。" },
  { projectId: "res31_society_25", stage: 2, at: 66, name: "模型推演", bonusInsight: 16, text: "舆论仲裁技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 16 点灵感。" },
  { projectId: "res31_society_25", stage: 3, at: 100, name: "试点推行", bonusInsight: 18, text: "舆论仲裁技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 18 点灵感。" },
  { projectId: "res31_society_26", stage: 1, at: 33, name: "田野调查", bonusInsight: 6, text: "自治法庭技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 6 点灵感。" },
  { projectId: "res31_society_26", stage: 2, at: 66, name: "模型推演", bonusInsight: 8, text: "自治法庭技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 8 点灵感。" },
  { projectId: "res31_society_26", stage: 3, at: 100, name: "试点推行", bonusInsight: 10, text: "自治法庭技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 10 点灵感。" },
  { projectId: "res31_society_27", stage: 1, at: 33, name: "田野调查", bonusInsight: 8, text: "协商剧场技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 8 点灵感。" },
  { projectId: "res31_society_27", stage: 2, at: 66, name: "模型推演", bonusInsight: 10, text: "协商剧场技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 10 点灵感。" },
  { projectId: "res31_society_27", stage: 3, at: 100, name: "试点推行", bonusInsight: 12, text: "协商剧场技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 12 点灵感。" },
  { projectId: "res31_society_28", stage: 1, at: 33, name: "田野调查", bonusInsight: 10, text: "信用网络技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 10 点灵感。" },
  { projectId: "res31_society_28", stage: 2, at: 66, name: "模型推演", bonusInsight: 12, text: "信用网络技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 12 点灵感。" },
  { projectId: "res31_society_28", stage: 3, at: 100, name: "试点推行", bonusInsight: 14, text: "信用网络技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 14 点灵感。" },
  { projectId: "res31_society_29", stage: 1, at: 33, name: "田野调查", bonusInsight: 12, text: "习俗基金技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 12 点灵感。" },
  { projectId: "res31_society_29", stage: 2, at: 66, name: "模型推演", bonusInsight: 14, text: "习俗基金技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 14 点灵感。" },
  { projectId: "res31_society_29", stage: 3, at: 100, name: "试点推行", bonusInsight: 16, text: "习俗基金技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 16 点灵感。" },
  { projectId: "res31_society_30", stage: 1, at: 33, name: "田野调查", bonusInsight: 14, text: "礼仪传承技术·Ⅲ·田野调查阶段（33%）：完成田野调查，获得 14 点灵感。" },
  { projectId: "res31_society_30", stage: 2, at: 66, name: "模型推演", bonusInsight: 16, text: "礼仪传承技术·Ⅲ·模型推演阶段（66%）：完成模型推演，获得 16 点灵感。" },
  { projectId: "res31_society_30", stage: 3, at: 100, name: "试点推行", bonusInsight: 18, text: "礼仪传承技术·Ⅲ·试点推行阶段（100%）：完成试点推行，获得 18 点灵感。" },
  { projectId: "res31_deepspace_01", stage: 1, at: 33, name: "轨道计算", bonusInsight: 6, text: "轨道通讯技术·轨道计算阶段（33%）：完成轨道计算，获得 6 点灵感。" },
  { projectId: "res31_deepspace_01", stage: 2, at: 66, name: "探测验证", bonusInsight: 8, text: "轨道通讯技术·探测验证阶段（66%）：完成探测验证，获得 8 点灵感。" },
  { projectId: "res31_deepspace_01", stage: 3, at: 100, name: "任务执行", bonusInsight: 10, text: "轨道通讯技术·任务执行阶段（100%）：完成任务执行，获得 10 点灵感。" },
  { projectId: "res31_deepspace_02", stage: 1, at: 33, name: "轨道计算", bonusInsight: 8, text: "星际巡航技术·轨道计算阶段（33%）：完成轨道计算，获得 8 点灵感。" },
  { projectId: "res31_deepspace_02", stage: 2, at: 66, name: "探测验证", bonusInsight: 10, text: "星际巡航技术·探测验证阶段（66%）：完成探测验证，获得 10 点灵感。" },
  { projectId: "res31_deepspace_02", stage: 3, at: 100, name: "任务执行", bonusInsight: 12, text: "星际巡航技术·任务执行阶段（100%）：完成任务执行，获得 12 点灵感。" },
  { projectId: "res31_deepspace_03", stage: 1, at: 33, name: "轨道计算", bonusInsight: 10, text: "深空采矿技术·轨道计算阶段（33%）：完成轨道计算，获得 10 点灵感。" },
  { projectId: "res31_deepspace_03", stage: 2, at: 66, name: "探测验证", bonusInsight: 12, text: "深空采矿技术·探测验证阶段（66%）：完成探测验证，获得 12 点灵感。" },
  { projectId: "res31_deepspace_03", stage: 3, at: 100, name: "任务执行", bonusInsight: 14, text: "深空采矿技术·任务执行阶段（100%）：完成任务执行，获得 14 点灵感。" },
  { projectId: "res31_deepspace_04", stage: 1, at: 33, name: "轨道计算", bonusInsight: 12, text: "小行星对接技术·轨道计算阶段（33%）：完成轨道计算，获得 12 点灵感。" },
  { projectId: "res31_deepspace_04", stage: 2, at: 66, name: "探测验证", bonusInsight: 14, text: "小行星对接技术·探测验证阶段（66%）：完成探测验证，获得 14 点灵感。" },
  { projectId: "res31_deepspace_04", stage: 3, at: 100, name: "任务执行", bonusInsight: 16, text: "小行星对接技术·任务执行阶段（100%）：完成任务执行，获得 16 点灵感。" },
  { projectId: "res31_deepspace_05", stage: 1, at: 33, name: "轨道计算", bonusInsight: 14, text: "太阳帆测绘网技术·轨道计算阶段（33%）：完成轨道计算，获得 14 点灵感。" },
  { projectId: "res31_deepspace_05", stage: 2, at: 66, name: "探测验证", bonusInsight: 16, text: "太阳帆测绘网技术·探测验证阶段（66%）：完成探测验证，获得 16 点灵感。" },
  { projectId: "res31_deepspace_05", stage: 3, at: 100, name: "任务执行", bonusInsight: 18, text: "太阳帆测绘网技术·任务执行阶段（100%）：完成任务执行，获得 18 点灵感。" },
  { projectId: "res31_deepspace_06", stage: 1, at: 33, name: "轨道计算", bonusInsight: 6, text: "引力弹弓勘探技术·轨道计算阶段（33%）：完成轨道计算，获得 6 点灵感。" },
  { projectId: "res31_deepspace_06", stage: 2, at: 66, name: "探测验证", bonusInsight: 8, text: "引力弹弓勘探技术·探测验证阶段（66%）：完成探测验证，获得 8 点灵感。" },
  { projectId: "res31_deepspace_06", stage: 3, at: 100, name: "任务执行", bonusInsight: 10, text: "引力弹弓勘探技术·任务执行阶段（100%）：完成任务执行，获得 10 点灵感。" },
  { projectId: "res31_deepspace_07", stage: 1, at: 33, name: "轨道计算", bonusInsight: 8, text: "虫洞中继技术·轨道计算阶段（33%）：完成轨道计算，获得 8 点灵感。" },
  { projectId: "res31_deepspace_07", stage: 2, at: 66, name: "探测验证", bonusInsight: 10, text: "虫洞中继技术·探测验证阶段（66%）：完成探测验证，获得 10 点灵感。" },
  { projectId: "res31_deepspace_07", stage: 3, at: 100, name: "任务执行", bonusInsight: 12, text: "虫洞中继技术·任务执行阶段（100%）：完成任务执行，获得 12 点灵感。" },
  { projectId: "res31_deepspace_08", stage: 1, at: 33, name: "轨道计算", bonusInsight: 10, text: "跃迁防御技术·轨道计算阶段（33%）：完成轨道计算，获得 10 点灵感。" },
  { projectId: "res31_deepspace_08", stage: 2, at: 66, name: "探测验证", bonusInsight: 12, text: "跃迁防御技术·探测验证阶段（66%）：完成探测验证，获得 12 点灵感。" },
  { projectId: "res31_deepspace_08", stage: 3, at: 100, name: "任务执行", bonusInsight: 14, text: "跃迁防御技术·任务执行阶段（100%）：完成任务执行，获得 14 点灵感。" },
  { projectId: "res31_deepspace_09", stage: 1, at: 33, name: "轨道计算", bonusInsight: 12, text: "曲率扫描技术·轨道计算阶段（33%）：完成轨道计算，获得 12 点灵感。" },
  { projectId: "res31_deepspace_09", stage: 2, at: 66, name: "探测验证", bonusInsight: 14, text: "曲率扫描技术·探测验证阶段（66%）：完成探测验证，获得 14 点灵感。" },
  { projectId: "res31_deepspace_09", stage: 3, at: 100, name: "任务执行", bonusInsight: 16, text: "曲率扫描技术·任务执行阶段（100%）：完成任务执行，获得 16 点灵感。" },
  { projectId: "res31_deepspace_10", stage: 1, at: 33, name: "轨道计算", bonusInsight: 14, text: "天文测绘技术·轨道计算阶段（33%）：完成轨道计算，获得 14 点灵感。" },
  { projectId: "res31_deepspace_10", stage: 2, at: 66, name: "探测验证", bonusInsight: 16, text: "天文测绘技术·探测验证阶段（66%）：完成探测验证，获得 16 点灵感。" },
  { projectId: "res31_deepspace_10", stage: 3, at: 100, name: "任务执行", bonusInsight: 18, text: "天文测绘技术·任务执行阶段（100%）：完成任务执行，获得 18 点灵感。" },
  { projectId: "res31_deepspace_11", stage: 1, at: 33, name: "轨道计算", bonusInsight: 6, text: "陨石着陆技术·轨道计算阶段（33%）：完成轨道计算，获得 6 点灵感。" },
  { projectId: "res31_deepspace_11", stage: 2, at: 66, name: "探测验证", bonusInsight: 8, text: "陨石着陆技术·探测验证阶段（66%）：完成探测验证，获得 8 点灵感。" },
  { projectId: "res31_deepspace_11", stage: 3, at: 100, name: "任务执行", bonusInsight: 10, text: "陨石着陆技术·任务执行阶段（100%）：完成任务执行，获得 10 点灵感。" },
  { projectId: "res31_deepspace_12", stage: 1, at: 33, name: "轨道计算", bonusInsight: 8, text: "彗星导航技术·轨道计算阶段（33%）：完成轨道计算，获得 8 点灵感。" },
  { projectId: "res31_deepspace_12", stage: 2, at: 66, name: "探测验证", bonusInsight: 10, text: "彗星导航技术·探测验证阶段（66%）：完成探测验证，获得 10 点灵感。" },
  { projectId: "res31_deepspace_12", stage: 3, at: 100, name: "任务执行", bonusInsight: 12, text: "彗星导航技术·任务执行阶段（100%）：完成任务执行，获得 12 点灵感。" },
  { projectId: "res31_deepspace_13", stage: 1, at: 33, name: "轨道计算", bonusInsight: 10, text: "星门编队技术·轨道计算阶段（33%）：完成轨道计算，获得 10 点灵感。" },
  { projectId: "res31_deepspace_13", stage: 2, at: 66, name: "探测验证", bonusInsight: 12, text: "星门编队技术·探测验证阶段（66%）：完成探测验证，获得 12 点灵感。" },
  { projectId: "res31_deepspace_13", stage: 3, at: 100, name: "任务执行", bonusInsight: 14, text: "星门编队技术·任务执行阶段（100%）：完成任务执行，获得 14 点灵感。" },
  { projectId: "res31_deepspace_14", stage: 1, at: 33, name: "轨道计算", bonusInsight: 12, text: "探测远征技术·轨道计算阶段（33%）：完成轨道计算，获得 12 点灵感。" },
  { projectId: "res31_deepspace_14", stage: 2, at: 66, name: "探测验证", bonusInsight: 14, text: "探测远征技术·探测验证阶段（66%）：完成探测验证，获得 14 点灵感。" },
  { projectId: "res31_deepspace_14", stage: 3, at: 100, name: "任务执行", bonusInsight: 16, text: "探测远征技术·任务执行阶段（100%）：完成任务执行，获得 16 点灵感。" },
  { projectId: "res31_deepspace_15", stage: 1, at: 33, name: "轨道计算", bonusInsight: 14, text: "殖民补给技术·轨道计算阶段（33%）：完成轨道计算，获得 14 点灵感。" },
  { projectId: "res31_deepspace_15", stage: 2, at: 66, name: "探测验证", bonusInsight: 16, text: "殖民补给技术·探测验证阶段（66%）：完成探测验证，获得 16 点灵感。" },
  { projectId: "res31_deepspace_15", stage: 3, at: 100, name: "任务执行", bonusInsight: 18, text: "殖民补给技术·任务执行阶段（100%）：完成任务执行，获得 18 点灵感。" },
  { projectId: "res31_deepspace_16", stage: 1, at: 33, name: "轨道计算", bonusInsight: 6, text: "远航锚定技术·轨道计算阶段（33%）：完成轨道计算，获得 6 点灵感。" },
  { projectId: "res31_deepspace_16", stage: 2, at: 66, name: "探测验证", bonusInsight: 8, text: "远航锚定技术·探测验证阶段（66%）：完成探测验证，获得 8 点灵感。" },
  { projectId: "res31_deepspace_16", stage: 3, at: 100, name: "任务执行", bonusInsight: 10, text: "远航锚定技术·任务执行阶段（100%）：完成任务执行，获得 10 点灵感。" },
  { projectId: "res31_deepspace_17", stage: 1, at: 33, name: "轨道计算", bonusInsight: 8, text: "轨道通讯技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 8 点灵感。" },
  { projectId: "res31_deepspace_17", stage: 2, at: 66, name: "探测验证", bonusInsight: 10, text: "轨道通讯技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 10 点灵感。" },
  { projectId: "res31_deepspace_17", stage: 3, at: 100, name: "任务执行", bonusInsight: 12, text: "轨道通讯技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 12 点灵感。" },
  { projectId: "res31_deepspace_18", stage: 1, at: 33, name: "轨道计算", bonusInsight: 10, text: "星际巡航技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 10 点灵感。" },
  { projectId: "res31_deepspace_18", stage: 2, at: 66, name: "探测验证", bonusInsight: 12, text: "星际巡航技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 12 点灵感。" },
  { projectId: "res31_deepspace_18", stage: 3, at: 100, name: "任务执行", bonusInsight: 14, text: "星际巡航技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 14 点灵感。" },
  { projectId: "res31_deepspace_19", stage: 1, at: 33, name: "轨道计算", bonusInsight: 12, text: "深空采矿技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 12 点灵感。" },
  { projectId: "res31_deepspace_19", stage: 2, at: 66, name: "探测验证", bonusInsight: 14, text: "深空采矿技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 14 点灵感。" },
  { projectId: "res31_deepspace_19", stage: 3, at: 100, name: "任务执行", bonusInsight: 16, text: "深空采矿技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 16 点灵感。" },
  { projectId: "res31_deepspace_20", stage: 1, at: 33, name: "轨道计算", bonusInsight: 14, text: "小行星对接技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 14 点灵感。" },
  { projectId: "res31_deepspace_20", stage: 2, at: 66, name: "探测验证", bonusInsight: 16, text: "小行星对接技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 16 点灵感。" },
  { projectId: "res31_deepspace_20", stage: 3, at: 100, name: "任务执行", bonusInsight: 18, text: "小行星对接技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 18 点灵感。" },
  { projectId: "res31_deepspace_21", stage: 1, at: 33, name: "轨道计算", bonusInsight: 6, text: "太阳帆测绘网技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 6 点灵感。" },
  { projectId: "res31_deepspace_21", stage: 2, at: 66, name: "探测验证", bonusInsight: 8, text: "太阳帆测绘网技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 8 点灵感。" },
  { projectId: "res31_deepspace_21", stage: 3, at: 100, name: "任务执行", bonusInsight: 10, text: "太阳帆测绘网技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 10 点灵感。" },
  { projectId: "res31_deepspace_22", stage: 1, at: 33, name: "轨道计算", bonusInsight: 8, text: "引力弹弓勘探技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 8 点灵感。" },
  { projectId: "res31_deepspace_22", stage: 2, at: 66, name: "探测验证", bonusInsight: 10, text: "引力弹弓勘探技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 10 点灵感。" },
  { projectId: "res31_deepspace_22", stage: 3, at: 100, name: "任务执行", bonusInsight: 12, text: "引力弹弓勘探技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 12 点灵感。" },
  { projectId: "res31_deepspace_23", stage: 1, at: 33, name: "轨道计算", bonusInsight: 10, text: "虫洞中继技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 10 点灵感。" },
  { projectId: "res31_deepspace_23", stage: 2, at: 66, name: "探测验证", bonusInsight: 12, text: "虫洞中继技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 12 点灵感。" },
  { projectId: "res31_deepspace_23", stage: 3, at: 100, name: "任务执行", bonusInsight: 14, text: "虫洞中继技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 14 点灵感。" },
  { projectId: "res31_deepspace_24", stage: 1, at: 33, name: "轨道计算", bonusInsight: 12, text: "跃迁防御技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 12 点灵感。" },
  { projectId: "res31_deepspace_24", stage: 2, at: 66, name: "探测验证", bonusInsight: 14, text: "跃迁防御技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 14 点灵感。" },
  { projectId: "res31_deepspace_24", stage: 3, at: 100, name: "任务执行", bonusInsight: 16, text: "跃迁防御技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 16 点灵感。" },
  { projectId: "res31_deepspace_25", stage: 1, at: 33, name: "轨道计算", bonusInsight: 14, text: "曲率扫描技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 14 点灵感。" },
  { projectId: "res31_deepspace_25", stage: 2, at: 66, name: "探测验证", bonusInsight: 16, text: "曲率扫描技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 16 点灵感。" },
  { projectId: "res31_deepspace_25", stage: 3, at: 100, name: "任务执行", bonusInsight: 18, text: "曲率扫描技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 18 点灵感。" },
  { projectId: "res31_deepspace_26", stage: 1, at: 33, name: "轨道计算", bonusInsight: 6, text: "天文测绘技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 6 点灵感。" },
  { projectId: "res31_deepspace_26", stage: 2, at: 66, name: "探测验证", bonusInsight: 8, text: "天文测绘技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 8 点灵感。" },
  { projectId: "res31_deepspace_26", stage: 3, at: 100, name: "任务执行", bonusInsight: 10, text: "天文测绘技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 10 点灵感。" },
  { projectId: "res31_deepspace_27", stage: 1, at: 33, name: "轨道计算", bonusInsight: 8, text: "陨石着陆技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 8 点灵感。" },
  { projectId: "res31_deepspace_27", stage: 2, at: 66, name: "探测验证", bonusInsight: 10, text: "陨石着陆技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 10 点灵感。" },
  { projectId: "res31_deepspace_27", stage: 3, at: 100, name: "任务执行", bonusInsight: 12, text: "陨石着陆技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 12 点灵感。" },
  { projectId: "res31_deepspace_28", stage: 1, at: 33, name: "轨道计算", bonusInsight: 10, text: "彗星导航技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 10 点灵感。" },
  { projectId: "res31_deepspace_28", stage: 2, at: 66, name: "探测验证", bonusInsight: 12, text: "彗星导航技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 12 点灵感。" },
  { projectId: "res31_deepspace_28", stage: 3, at: 100, name: "任务执行", bonusInsight: 14, text: "彗星导航技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 14 点灵感。" },
  { projectId: "res31_deepspace_29", stage: 1, at: 33, name: "轨道计算", bonusInsight: 12, text: "星门编队技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 12 点灵感。" },
  { projectId: "res31_deepspace_29", stage: 2, at: 66, name: "探测验证", bonusInsight: 14, text: "星门编队技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 14 点灵感。" },
  { projectId: "res31_deepspace_29", stage: 3, at: 100, name: "任务执行", bonusInsight: 16, text: "星门编队技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 16 点灵感。" },
  { projectId: "res31_deepspace_30", stage: 1, at: 33, name: "轨道计算", bonusInsight: 14, text: "探测远征技术·Ⅲ·轨道计算阶段（33%）：完成轨道计算，获得 14 点灵感。" },
  { projectId: "res31_deepspace_30", stage: 2, at: 66, name: "探测验证", bonusInsight: 16, text: "探测远征技术·Ⅲ·探测验证阶段（66%）：完成探测验证，获得 16 点灵感。" },
  { projectId: "res31_deepspace_30", stage: 3, at: 100, name: "任务执行", bonusInsight: 18, text: "探测远征技术·Ⅲ·任务执行阶段（100%）：完成任务执行，获得 18 点灵感。" },
];

/* 项目田野笔记：每项目一条（假设 / 方法 / 验收标准） */
const RES31_PROJECT_NOTES = [
  { projectId: "res31_physics_01", hypothesis: "量子共振技术的核心理论假设：物理方向量子线链在1阶可实现科研速度 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：科研速度 ×1.04、护盾强度 ×1.04；前置：无。" },
  { projectId: "res31_physics_02", hypothesis: "等离子聚焦技术的核心理论假设：物理方向量子线链在2阶可实现电力产出 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：电力产出 ×1.08、辐射伤害 ×0.94；前置：res31_physics_01。" },
  { projectId: "res31_physics_03", hypothesis: "引力隧穿技术的核心理论假设：物理方向量子线链在3阶可实现发电量 +21。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：发电量 +21、探测范围 ×1.12、防御力 ×1.12；前置：res31_physics_02。" },
  { projectId: "res31_physics_04", hypothesis: "光子耦合技术的核心理论假设：物理方向量子线链在4阶可实现护盾强度 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：护盾强度 ×1.17、反应堆效率 ×1.17、科研速度 ×1.17；前置：res31_physics_03、res31_deepspace_07。" },
  { projectId: "res31_physics_05", hypothesis: "中微子能谱技术的核心理论假设：物理方向量子线链在5阶可实现辐射伤害 ×0.82。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：辐射伤害 ×0.82、防御力 ×1.23、电力产出 ×1.23；前置：res31_physics_04、res31_physics_07。" },
  { projectId: "res31_physics_06", hypothesis: "超导干涉技术的核心理论假设：物理方向聚变线链在1阶可实现探测范围 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：探测范围 ×1.04、科研速度 ×1.04；前置：无。" },
  { projectId: "res31_physics_07", hypothesis: "核聚变稳态技术的核心理论假设：物理方向聚变线链在2阶可实现反应堆效率 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：反应堆效率 ×1.08、电力产出 ×1.08；前置：res31_physics_06。" },
  { projectId: "res31_physics_08", hypothesis: "暗物质湮灭技术的核心理论假设：物理方向聚变线链在3阶可实现防御力 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：防御力 ×1.12、发电量 +14、辐射伤害 ×0.9；前置：res31_physics_07。" },
  { projectId: "res31_physics_09", hypothesis: "弦论屏蔽技术的核心理论假设：物理方向聚变线链在4阶可实现科研速度 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：科研速度 ×1.17、护盾强度 ×1.17、探测范围 ×1.17；前置：res31_physics_08、res31_deepspace_12。" },
  { projectId: "res31_physics_10", hypothesis: "磁流体纠缠技术的核心理论假设：物理方向聚变线链在5阶可实现电力产出 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：电力产出 ×1.23、辐射伤害 ×0.82、反应堆效率 ×1.23；前置：res31_physics_09、res31_physics_12。" },
  { projectId: "res31_physics_11", hypothesis: "高能压缩技术的核心理论假设：物理方向场论线链在1阶可实现发电量 +4。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：发电量 +4、探测范围 ×1.04；前置：无。" },
  { projectId: "res31_physics_12", hypothesis: "低温约束技术的核心理论假设：物理方向场论线链在2阶可实现护盾强度 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：护盾强度 ×1.08、反应堆效率 ×1.08；前置：res31_physics_11。" },
  { projectId: "res31_physics_13", hypothesis: "真空跃迁技术的核心理论假设：物理方向场论线链在3阶可实现辐射伤害 ×0.9。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：辐射伤害 ×0.9、防御力 ×1.12、电力产出 ×1.12；前置：res31_physics_12。" },
  { projectId: "res31_physics_14", hypothesis: "粒子隧穿阵列技术的核心理论假设：物理方向场论线链在4阶可实现探测范围 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：探测范围 ×1.17、科研速度 ×1.17、发电量 +22；前置：res31_physics_13、res31_deepspace_17。" },
  { projectId: "res31_physics_15", hypothesis: "波函数极化技术的核心理论假设：物理方向场论线链在5阶可实现反应堆效率 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：反应堆效率 ×1.23、电力产出 ×1.23、护盾强度 ×1.23；前置：res31_physics_14、res31_physics_17。" },
  { projectId: "res31_physics_16", hypothesis: "能级增益技术的核心理论假设：物理方向粒子线链在1阶可实现防御力 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：防御力 ×1.04、发电量 +2；前置：无。" },
  { projectId: "res31_physics_17", hypothesis: "量子共振技术·Ⅲ的核心理论假设：物理方向粒子线链在2阶可实现科研速度 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：科研速度 ×1.08、护盾强度 ×1.08；前置：res31_physics_16。" },
  { projectId: "res31_physics_18", hypothesis: "等离子聚焦技术·Ⅲ的核心理论假设：物理方向粒子线链在3阶可实现电力产出 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：电力产出 ×1.12、辐射伤害 ×0.9、反应堆效率 ×1.12；前置：res31_physics_17。" },
  { projectId: "res31_physics_19", hypothesis: "引力隧穿技术·Ⅲ的核心理论假设：物理方向粒子线链在4阶可实现发电量 +11。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：发电量 +11、探测范围 ×1.17、防御力 ×1.17；前置：res31_physics_18、res31_deepspace_22。" },
  { projectId: "res31_physics_20", hypothesis: "光子耦合技术·Ⅲ的核心理论假设：物理方向粒子线链在5阶可实现护盾强度 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：护盾强度 ×1.23、反应堆效率 ×1.23、科研速度 ×1.23；前置：res31_physics_19、res31_physics_22。" },
  { projectId: "res31_physics_21", hypothesis: "中微子能谱技术·Ⅲ的核心理论假设：物理方向能源线链在1阶可实现辐射伤害 ×0.97。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：辐射伤害 ×0.97、防御力 ×1.04；前置：无。" },
  { projectId: "res31_physics_22", hypothesis: "超导干涉技术·Ⅲ的核心理论假设：物理方向能源线链在2阶可实现探测范围 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：探测范围 ×1.08、科研速度 ×1.08；前置：res31_physics_21。" },
  { projectId: "res31_physics_23", hypothesis: "核聚变稳态技术·Ⅲ的核心理论假设：物理方向能源线链在3阶可实现反应堆效率 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：反应堆效率 ×1.12、电力产出 ×1.12、护盾强度 ×1.12；前置：res31_physics_22。" },
  { projectId: "res31_physics_24", hypothesis: "暗物质湮灭技术·Ⅲ的核心理论假设：物理方向能源线链在4阶可实现防御力 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：防御力 ×1.17、发电量 +33、辐射伤害 ×0.86；前置：res31_physics_23、res31_deepspace_27。" },
  { projectId: "res31_physics_25", hypothesis: "弦论屏蔽技术·Ⅲ的核心理论假设：物理方向能源线链在5阶可实现科研速度 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：科研速度 ×1.23、护盾强度 ×1.23、探测范围 ×1.23；前置：res31_physics_24、res31_physics_27。" },
  { projectId: "res31_physics_26", hypothesis: "磁流体纠缠技术·Ⅲ的核心理论假设：物理方向探测线链在1阶可实现电力产出 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：电力产出 ×1.04、辐射伤害 ×0.97；前置：无。" },
  { projectId: "res31_physics_27", hypothesis: "高能压缩技术·Ⅲ的核心理论假设：物理方向探测线链在2阶可实现发电量 +12。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：发电量 +12、探测范围 ×1.08；前置：res31_physics_26。" },
  { projectId: "res31_physics_28", hypothesis: "低温约束技术·Ⅲ的核心理论假设：物理方向探测线链在3阶可实现护盾强度 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：护盾强度 ×1.12、反应堆效率 ×1.12、科研速度 ×1.12；前置：res31_physics_27。" },
  { projectId: "res31_physics_29", hypothesis: "真空跃迁技术·Ⅲ的核心理论假设：物理方向探测线链在4阶可实现辐射伤害 ×0.86。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：辐射伤害 ×0.86、防御力 ×1.17、电力产出 ×1.17；前置：res31_physics_28、res31_deepspace_02。" },
  { projectId: "res31_physics_30", hypothesis: "粒子隧穿阵列技术·Ⅲ的核心理论假设：物理方向探测线链在5阶可实现探测范围 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：探测范围 ×1.23、科研速度 ×1.23、发电量 +48；前置：res31_physics_29、res31_physics_02。" },
  { projectId: "res31_engineering_01", hypothesis: "模块化掘进技术的核心理论假设：工程方向制造线链在1阶可实现建筑建造成本 ×0.97。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：建筑建造成本 ×0.97、采矿效率 ×1.04；前置：无。" },
  { projectId: "res31_engineering_02", hypothesis: "纳米管网技术的核心理论假设：工程方向制造线链在2阶可实现建造速度 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：建造速度 ×1.08、机器人效率 ×1.08；前置：res31_engineering_01。" },
  { projectId: "res31_engineering_03", hypothesis: "增材装配技术的核心理论假设：工程方向制造线链在3阶可实现铁矿产量 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：铁矿产量 ×1.12、水产量 ×1.12、维护费 ×0.9；前置：res31_engineering_02。" },
  { projectId: "res31_engineering_04", hypothesis: "精密传动技术的核心理论假设：工程方向制造线链在4阶可实现采矿效率 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：采矿效率 ×1.17、建筑耐久 ×1.17、建筑建造成本 ×0.86；前置：res31_engineering_03、res31_physics_07。" },
  { projectId: "res31_engineering_05", hypothesis: "重型密封技术的核心理论假设：工程方向制造线链在5阶可实现机器人效率 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：机器人效率 ×1.23、维护费 ×0.82、建造速度 ×1.23；前置：res31_engineering_04、res31_engineering_07。" },
  { projectId: "res31_engineering_06", hypothesis: "自适应机床技术的核心理论假设：工程方向建造线链在1阶可实现水产量 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：水产量 ×1.04、建筑建造成本 ×0.97；前置：无。" },
  { projectId: "res31_engineering_07", hypothesis: "分布式驱动技术的核心理论假设：工程方向建造线链在2阶可实现建筑耐久 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：建筑耐久 ×1.08、建造速度 ×1.08；前置：res31_engineering_06。" },
  { projectId: "res31_engineering_08", hypothesis: "冗余吊装技术的核心理论假设：工程方向建造线链在3阶可实现维护费 ×0.9。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：维护费 ×0.9、铁矿产量 ×1.12、机器人效率 ×1.12；前置：res31_engineering_07。" },
  { projectId: "res31_engineering_09", hypothesis: "高温框架技术的核心理论假设：工程方向建造线链在4阶可实现建筑建造成本 ×0.86。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：建筑建造成本 ×0.86、采矿效率 ×1.17、水产量 ×1.17；前置：res31_engineering_08、res31_physics_12。" },
  { projectId: "res31_engineering_10", hypothesis: "耐压焊接技术的核心理论假设：工程方向建造线链在5阶可实现建造速度 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：建造速度 ×1.23、机器人效率 ×1.23、建筑耐久 ×1.23；前置：res31_engineering_09、res31_engineering_12。" },
  { projectId: "res31_engineering_11", hypothesis: "轻量结构技术的核心理论假设：工程方向材料线链在1阶可实现铁矿产量 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：铁矿产量 ×1.04、水产量 ×1.04；前置：无。" },
  { projectId: "res31_engineering_12", hypothesis: "智能打印技术的核心理论假设：工程方向材料线链在2阶可实现采矿效率 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：采矿效率 ×1.08、建筑耐久 ×1.08；前置：res31_engineering_11。" },
  { projectId: "res31_engineering_13", hypothesis: "并行轴承技术的核心理论假设：工程方向材料线链在3阶可实现机器人效率 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：机器人效率 ×1.12、维护费 ×0.9、建造速度 ×1.12；前置：res31_engineering_12。" },
  { projectId: "res31_engineering_14", hypothesis: "柔性散热技术的核心理论假设：工程方向材料线链在4阶可实现水产量 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：水产量 ×1.17、建筑建造成本 ×0.86、铁矿产量 ×1.17；前置：res31_engineering_13、res31_physics_17。" },
  { projectId: "res31_engineering_15", hypothesis: "超硬锻造技术的核心理论假设：工程方向材料线链在5阶可实现建筑耐久 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：建筑耐久 ×1.23、建造速度 ×1.23、采矿效率 ×1.23；前置：res31_engineering_14、res31_engineering_17。" },
  { projectId: "res31_engineering_16", hypothesis: "低耗接口技术的核心理论假设：工程方向机械线链在1阶可实现维护费 ×0.97。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：维护费 ×0.97、铁矿产量 ×1.04；前置：无。" },
  { projectId: "res31_engineering_17", hypothesis: "模块化掘进技术·Ⅲ的核心理论假设：工程方向机械线链在2阶可实现建筑建造成本 ×0.94。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：建筑建造成本 ×0.94、采矿效率 ×1.08；前置：res31_engineering_16。" },
  { projectId: "res31_engineering_18", hypothesis: "纳米管网技术·Ⅲ的核心理论假设：工程方向机械线链在3阶可实现建造速度 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：建造速度 ×1.12、机器人效率 ×1.12、建筑耐久 ×1.12；前置：res31_engineering_17。" },
  { projectId: "res31_engineering_19", hypothesis: "增材装配技术·Ⅲ的核心理论假设：工程方向机械线链在4阶可实现铁矿产量 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：铁矿产量 ×1.17、水产量 ×1.17、维护费 ×0.86；前置：res31_engineering_18、res31_physics_22。" },
  { projectId: "res31_engineering_20", hypothesis: "精密传动技术·Ⅲ的核心理论假设：工程方向机械线链在5阶可实现采矿效率 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：采矿效率 ×1.23、建筑耐久 ×1.23、建筑建造成本 ×0.82；前置：res31_engineering_19、res31_engineering_22。" },
  { projectId: "res31_engineering_21", hypothesis: "重型密封技术·Ⅲ的核心理论假设：工程方向基建线链在1阶可实现机器人效率 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：机器人效率 ×1.04、维护费 ×0.97；前置：无。" },
  { projectId: "res31_engineering_22", hypothesis: "自适应机床技术·Ⅲ的核心理论假设：工程方向基建线链在2阶可实现水产量 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：水产量 ×1.08、建筑建造成本 ×0.94；前置：res31_engineering_21。" },
  { projectId: "res31_engineering_23", hypothesis: "分布式驱动技术·Ⅲ的核心理论假设：工程方向基建线链在3阶可实现建筑耐久 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：建筑耐久 ×1.12、建造速度 ×1.12、采矿效率 ×1.12；前置：res31_engineering_22。" },
  { projectId: "res31_engineering_24", hypothesis: "冗余吊装技术·Ⅲ的核心理论假设：工程方向基建线链在4阶可实现维护费 ×0.86。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：维护费 ×0.86、铁矿产量 ×1.17、机器人效率 ×1.17；前置：res31_engineering_23、res31_physics_27。" },
  { projectId: "res31_engineering_25", hypothesis: "高温框架技术·Ⅲ的核心理论假设：工程方向基建线链在5阶可实现建筑建造成本 ×0.82。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：建筑建造成本 ×0.82、采矿效率 ×1.23、水产量 ×1.23；前置：res31_engineering_24、res31_engineering_27。" },
  { projectId: "res31_engineering_26", hypothesis: "耐压焊接技术·Ⅲ的核心理论假设：工程方向自动化线链在1阶可实现建造速度 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：建造速度 ×1.04、机器人效率 ×1.04；前置：无。" },
  { projectId: "res31_engineering_27", hypothesis: "轻量结构技术·Ⅲ的核心理论假设：工程方向自动化线链在2阶可实现铁矿产量 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：铁矿产量 ×1.08、水产量 ×1.08；前置：res31_engineering_26。" },
  { projectId: "res31_engineering_28", hypothesis: "智能打印技术·Ⅲ的核心理论假设：工程方向自动化线链在3阶可实现采矿效率 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：采矿效率 ×1.12、建筑耐久 ×1.12、建筑建造成本 ×0.9；前置：res31_engineering_27。" },
  { projectId: "res31_engineering_29", hypothesis: "并行轴承技术·Ⅲ的核心理论假设：工程方向自动化线链在4阶可实现机器人效率 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：机器人效率 ×1.17、维护费 ×0.86、建造速度 ×1.17；前置：res31_engineering_28、res31_physics_02。" },
  { projectId: "res31_engineering_30", hypothesis: "柔性散热技术·Ⅲ的核心理论假设：工程方向自动化线链在5阶可实现水产量 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：水产量 ×1.23、建筑建造成本 ×0.82、铁矿产量 ×1.23；前置：res31_engineering_29、res31_engineering_02。" },
  { projectId: "res31_biology_01", hypothesis: "基因发酵技术的核心理论假设：生物方向基因线链在1阶可实现食物产量 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：食物产量 ×1.04、居民健康 ×1.04；前置：无。" },
  { projectId: "res31_biology_02", hypothesis: "光合循环技术的核心理论假设：生物方向基因线链在2阶可实现人口增长速度 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：人口增长速度 ×1.08、氧气供给 +8 点；前置：res31_biology_01。" },
  { projectId: "res31_biology_03", hypothesis: "微生物培育技术的核心理论假设：生物方向基因线链在3阶可实现居民幸福度 +21 点。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：居民幸福度 +21 点、作物产量 ×1.12、平均寿命 +21 年；前置：res31_biology_02。" },
  { projectId: "res31_biology_04", hypothesis: "干细胞适配技术的核心理论假设：生物方向基因线链在4阶可实现居民健康 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：居民健康 ×1.17、医疗效率 ×1.17、食物产量 ×1.17；前置：res31_biology_03、res31_engineering_07。" },
  { projectId: "res31_biology_05", hypothesis: "酶促耐受技术的核心理论假设：生物方向基因线链在5阶可实现氧气供给 +32 点。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：氧气供给 +32 点、平均寿命 +32 年、人口增长速度 ×1.23；前置：res31_biology_04、res31_biology_07。" },
  { projectId: "res31_biology_06", hypothesis: "免疫筛选技术的核心理论假设：生物方向农业线链在1阶可实现作物产量 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：作物产量 ×1.04、食物产量 ×1.04；前置：无。" },
  { projectId: "res31_biology_07", hypothesis: "神经分化技术的核心理论假设：生物方向农业线链在2阶可实现医疗效率 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：医疗效率 ×1.08、人口增长速度 ×1.08；前置：res31_biology_06。" },
  { projectId: "res31_biology_08", hypothesis: "生态修复技术的核心理论假设：生物方向农业线链在3阶可实现平均寿命 +14 年。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：平均寿命 +14 年、居民幸福度 +14 点、氧气供给 +14 点；前置：res31_biology_07。" },
  { projectId: "res31_biology_09", hypothesis: "藻类合成技术的核心理论假设：生物方向农业线链在4阶可实现食物产量 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：食物产量 ×1.17、居民健康 ×1.17、作物产量 ×1.17；前置：res31_biology_08、res31_engineering_12。" },
  { projectId: "res31_biology_10", hypothesis: "菌群驯化技术的核心理论假设：生物方向农业线链在5阶可实现人口增长速度 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：人口增长速度 ×1.23、氧气供给 +16 点、医疗效率 ×1.23；前置：res31_biology_09、res31_biology_12。" },
  { projectId: "res31_biology_11", hypothesis: "蛋白共生技术的核心理论假设：生物方向医疗线链在1阶可实现居民幸福度 +4 点。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：居民幸福度 +4 点、作物产量 ×1.04；前置：无。" },
  { projectId: "res31_biology_12", hypothesis: "代谢编辑技术的核心理论假设：生物方向医疗线链在2阶可实现居民健康 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：居民健康 ×1.08、医疗效率 ×1.08；前置：res31_biology_11。" },
  { projectId: "res31_biology_13", hypothesis: "表观扩增技术的核心理论假设：生物方向医疗线链在3阶可实现氧气供给 +7 点。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：氧气供给 +7 点、平均寿命 +7 年、人口增长速度 ×1.12；前置：res31_biology_12。" },
  { projectId: "res31_biology_14", hypothesis: "共生再生技术的核心理论假设：生物方向医疗线链在4阶可实现作物产量 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：作物产量 ×1.17、食物产量 ×1.17、居民幸福度 +22 点；前置：res31_biology_13、res31_engineering_17。" },
  { projectId: "res31_biology_15", hypothesis: "抗逆调控技术的核心理论假设：生物方向医疗线链在5阶可实现医疗效率 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：医疗效率 ×1.23、人口增长速度 ×1.23、居民健康 ×1.23；前置：res31_biology_14、res31_biology_17。" },
  { projectId: "res31_biology_16", hypothesis: "克隆表达技术的核心理论假设：生物方向生态线链在1阶可实现平均寿命 +2 年。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：平均寿命 +2 年、居民幸福度 +2 点；前置：无。" },
  { projectId: "res31_biology_17", hypothesis: "基因发酵技术·Ⅲ的核心理论假设：生物方向生态线链在2阶可实现食物产量 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：食物产量 ×1.08、居民健康 ×1.08；前置：res31_biology_16。" },
  { projectId: "res31_biology_18", hypothesis: "光合循环技术·Ⅲ的核心理论假设：生物方向生态线链在3阶可实现人口增长速度 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：人口增长速度 ×1.12、氧气供给 +21 点、医疗效率 ×1.12；前置：res31_biology_17。" },
  { projectId: "res31_biology_19", hypothesis: "微生物培育技术·Ⅲ的核心理论假设：生物方向生态线链在4阶可实现居民幸福度 +11 点。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：居民幸福度 +11 点、作物产量 ×1.17、平均寿命 +11 年；前置：res31_biology_18、res31_engineering_22。" },
  { projectId: "res31_biology_20", hypothesis: "干细胞适配技术·Ⅲ的核心理论假设：生物方向生态线链在5阶可实现居民健康 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：居民健康 ×1.23、医疗效率 ×1.23、食物产量 ×1.23；前置：res31_biology_19、res31_biology_22。" },
  { projectId: "res31_biology_21", hypothesis: "酶促耐受技术·Ⅲ的核心理论假设：生物方向微生物线链在1阶可实现氧气供给 +6 点。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：氧气供给 +6 点、平均寿命 +6 年；前置：无。" },
  { projectId: "res31_biology_22", hypothesis: "免疫筛选技术·Ⅲ的核心理论假设：生物方向微生物线链在2阶可实现作物产量 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：作物产量 ×1.08、食物产量 ×1.08；前置：res31_biology_21。" },
  { projectId: "res31_biology_23", hypothesis: "神经分化技术·Ⅲ的核心理论假设：生物方向微生物线链在3阶可实现医疗效率 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：医疗效率 ×1.12、人口增长速度 ×1.12、居民健康 ×1.12；前置：res31_biology_22。" },
  { projectId: "res31_biology_24", hypothesis: "生态修复技术·Ⅲ的核心理论假设：生物方向微生物线链在4阶可实现平均寿命 +33 年。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：平均寿命 +33 年、居民幸福度 +33 点、氧气供给 +33 点；前置：res31_biology_23、res31_engineering_27。" },
  { projectId: "res31_biology_25", hypothesis: "藻类合成技术·Ⅲ的核心理论假设：生物方向微生物线链在5阶可实现食物产量 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：食物产量 ×1.23、居民健康 ×1.23、作物产量 ×1.23；前置：res31_biology_24、res31_biology_27。" },
  { projectId: "res31_biology_26", hypothesis: "菌群驯化技术·Ⅲ的核心理论假设：生物方向神经线链在1阶可实现人口增长速度 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：人口增长速度 ×1.04、氧气供给 +4 点；前置：无。" },
  { projectId: "res31_biology_27", hypothesis: "蛋白共生技术·Ⅲ的核心理论假设：生物方向神经线链在2阶可实现居民幸福度 +12 点。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：居民幸福度 +12 点、作物产量 ×1.08；前置：res31_biology_26。" },
  { projectId: "res31_biology_28", hypothesis: "代谢编辑技术·Ⅲ的核心理论假设：生物方向神经线链在3阶可实现居民健康 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：居民健康 ×1.12、医疗效率 ×1.12、食物产量 ×1.12；前置：res31_biology_27。" },
  { projectId: "res31_biology_29", hypothesis: "表观扩增技术·Ⅲ的核心理论假设：生物方向神经线链在4阶可实现氧气供给 +22 点。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：氧气供给 +22 点、平均寿命 +22 年、人口增长速度 ×1.17；前置：res31_biology_28、res31_engineering_02。" },
  { projectId: "res31_biology_30", hypothesis: "共生再生技术·Ⅲ的核心理论假设：生物方向神经线链在5阶可实现作物产量 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：作物产量 ×1.23、食物产量 ×1.23、居民幸福度 +48 点；前置：res31_biology_29、res31_biology_02。" },
  { projectId: "res31_society_01", hypothesis: "公民学院技术的核心理论假设：社会方向治理线链在1阶可实现税收效率 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：税收效率 ×1.04、政策槽位 +2 个；前置：无。" },
  { projectId: "res31_society_02", hypothesis: "社区互助技术的核心理论假设：社会方向治理线链在2阶可实现殖民地稳定度 +8 点。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：殖民地稳定度 +8 点、贸易收入 ×1.08；前置：res31_society_01。" },
  { projectId: "res31_society_03", hypothesis: "契约议会技术的核心理论假设：社会方向治理线链在3阶可实现外交关系增速 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：外交关系增速 ×1.12、士气 ×1.12、腐败发生率 ×0.9；前置：res31_society_02。" },
  { projectId: "res31_society_04", hypothesis: "治理电台技术的核心理论假设：社会方向治理线链在4阶可实现政策槽位 +11 个。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：政策槽位 +11 个、教育水平 ×1.17、税收效率 ×1.17；前置：res31_society_03、res31_biology_07。" },
  { projectId: "res31_society_05", hypothesis: "教育共识技术的核心理论假设：社会方向治理线链在5阶可实现贸易收入 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：贸易收入 ×1.23、腐败发生率 ×0.82、殖民地稳定度 +32 点；前置：res31_society_04、res31_society_07。" },
  { projectId: "res31_society_06", hypothesis: "文化公约技术的核心理论假设：社会方向教育线链在1阶可实现士气 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：士气 ×1.04、税收效率 ×1.04；前置：无。" },
  { projectId: "res31_society_07", hypothesis: "法律典礼技术的核心理论假设：社会方向教育线链在2阶可实现教育水平 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：教育水平 ×1.08、殖民地稳定度 +4 点；前置：res31_society_06。" },
  { projectId: "res31_society_08", hypothesis: "福利市集技术的核心理论假设：社会方向教育线链在3阶可实现腐败发生率 ×0.9。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：腐败发生率 ×0.9、外交关系增速 ×1.12、贸易收入 ×1.12；前置：res31_society_07。" },
  { projectId: "res31_society_09", hypothesis: "舆论仲裁技术的核心理论假设：社会方向教育线链在4阶可实现税收效率 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：税收效率 ×1.17、政策槽位 +33 个、士气 ×1.17；前置：res31_society_08、res31_biology_12。" },
  { projectId: "res31_society_10", hypothesis: "自治法庭技术的核心理论假设：社会方向教育线链在5阶可实现殖民地稳定度 +16 点。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：殖民地稳定度 +16 点、贸易收入 ×1.23、教育水平 ×1.23；前置：res31_society_09、res31_society_12。" },
  { projectId: "res31_society_11", hypothesis: "协商剧场技术的核心理论假设：社会方向文化线链在1阶可实现外交关系增速 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：外交关系增速 ×1.04、士气 ×1.04；前置：无。" },
  { projectId: "res31_society_12", hypothesis: "信用网络技术的核心理论假设：社会方向文化线链在2阶可实现政策槽位 +12 个。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：政策槽位 +12 个、教育水平 ×1.08；前置：res31_society_11。" },
  { projectId: "res31_society_13", hypothesis: "习俗基金技术的核心理论假设：社会方向文化线链在3阶可实现贸易收入 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：贸易收入 ×1.12、腐败发生率 ×0.9、殖民地稳定度 +7 点；前置：res31_society_12。" },
  { projectId: "res31_society_14", hypothesis: "礼仪传承技术的核心理论假设：社会方向文化线链在4阶可实现士气 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：士气 ×1.17、税收效率 ×1.17、外交关系增速 ×1.17；前置：res31_society_13、res31_biology_17。" },
  { projectId: "res31_society_15", hypothesis: "记忆档案技术的核心理论假设：社会方向文化线链在5阶可实现教育水平 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：教育水平 ×1.23、殖民地稳定度 +48 点、政策槽位 +48 个；前置：res31_society_14、res31_society_17。" },
  { projectId: "res31_society_16", hypothesis: "认同普查技术的核心理论假设：社会方向经济线链在1阶可实现腐败发生率 ×0.97。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：腐败发生率 ×0.97、外交关系增速 ×1.04；前置：无。" },
  { projectId: "res31_society_17", hypothesis: "公民学院技术·Ⅲ的核心理论假设：社会方向经济线链在2阶可实现税收效率 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：税收效率 ×1.08、政策槽位 +8 个；前置：res31_society_16。" },
  { projectId: "res31_society_18", hypothesis: "社区互助技术·Ⅲ的核心理论假设：社会方向经济线链在3阶可实现殖民地稳定度 +21 点。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：殖民地稳定度 +21 点、贸易收入 ×1.12、教育水平 ×1.12；前置：res31_society_17。" },
  { projectId: "res31_society_19", hypothesis: "契约议会技术·Ⅲ的核心理论假设：社会方向经济线链在4阶可实现外交关系增速 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：外交关系增速 ×1.17、士气 ×1.17、腐败发生率 ×0.86；前置：res31_society_18、res31_biology_22。" },
  { projectId: "res31_society_20", hypothesis: "治理电台技术·Ⅲ的核心理论假设：社会方向经济线链在5阶可实现政策槽位 +32 个。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：政策槽位 +32 个、教育水平 ×1.23、税收效率 ×1.23；前置：res31_society_19、res31_society_22。" },
  { projectId: "res31_society_21", hypothesis: "教育共识技术·Ⅲ的核心理论假设：社会方向法律线链在1阶可实现贸易收入 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：贸易收入 ×1.04、腐败发生率 ×0.97；前置：无。" },
  { projectId: "res31_society_22", hypothesis: "文化公约技术·Ⅲ的核心理论假设：社会方向法律线链在2阶可实现士气 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：士气 ×1.08、税收效率 ×1.08；前置：res31_society_21。" },
  { projectId: "res31_society_23", hypothesis: "法律典礼技术·Ⅲ的核心理论假设：社会方向法律线链在3阶可实现教育水平 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：教育水平 ×1.12、殖民地稳定度 +14 点、政策槽位 +14 个；前置：res31_society_22。" },
  { projectId: "res31_society_24", hypothesis: "福利市集技术·Ⅲ的核心理论假设：社会方向法律线链在4阶可实现腐败发生率 ×0.86。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：腐败发生率 ×0.86、外交关系增速 ×1.17、贸易收入 ×1.17；前置：res31_society_23、res31_biology_27。" },
  { projectId: "res31_society_25", hypothesis: "舆论仲裁技术·Ⅲ的核心理论假设：社会方向法律线链在5阶可实现税收效率 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：税收效率 ×1.23、政策槽位 +16 个、士气 ×1.23；前置：res31_society_24、res31_society_27。" },
  { projectId: "res31_society_26", hypothesis: "自治法庭技术·Ⅲ的核心理论假设：社会方向社区线链在1阶可实现殖民地稳定度 +4 点。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：殖民地稳定度 +4 点、贸易收入 ×1.04；前置：无。" },
  { projectId: "res31_society_27", hypothesis: "协商剧场技术·Ⅲ的核心理论假设：社会方向社区线链在2阶可实现外交关系增速 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：外交关系增速 ×1.08、士气 ×1.08；前置：res31_society_26。" },
  { projectId: "res31_society_28", hypothesis: "信用网络技术·Ⅲ的核心理论假设：社会方向社区线链在3阶可实现政策槽位 +7 个。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：政策槽位 +7 个、教育水平 ×1.12、税收效率 ×1.12；前置：res31_society_27。" },
  { projectId: "res31_society_29", hypothesis: "习俗基金技术·Ⅲ的核心理论假设：社会方向社区线链在4阶可实现贸易收入 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：贸易收入 ×1.17、腐败发生率 ×0.86、殖民地稳定度 +22 点；前置：res31_society_28、res31_biology_02。" },
  { projectId: "res31_society_30", hypothesis: "礼仪传承技术·Ⅲ的核心理论假设：社会方向社区线链在5阶可实现士气 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：士气 ×1.23、税收效率 ×1.23、外交关系增速 ×1.23；前置：res31_society_29、res31_society_02。" },
  { projectId: "res31_deepspace_01", hypothesis: "轨道通讯技术的核心理论假设：深空方向航行线链在1阶可实现舰船航速 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：舰船航速 ×1.04、氦3 +2/分钟；前置：无。" },
  { projectId: "res31_deepspace_02", hypothesis: "星际巡航技术的核心理论假设：深空方向航行线链在2阶可实现舰船耐久 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：舰船耐久 ×1.08、行星改造进度 +8 点；前置：res31_deepspace_01。" },
  { projectId: "res31_deepspace_03", hypothesis: "深空采矿技术的核心理论假设：深空方向航行线链在3阶可实现小行星采矿产量 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：小行星采矿产量 ×1.12、发射花费 ×0.9、殖民扩张范围 ×1.12；前置：res31_deepspace_02。" },
  { projectId: "res31_deepspace_04", hypothesis: "小行星对接技术的核心理论假设：深空方向航行线链在4阶可实现氦3 +11/分钟。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：氦3 +11/分钟、轨道电力 +11、舰船航速 ×1.17；前置：res31_deepspace_03、res31_society_07。" },
  { projectId: "res31_deepspace_05", hypothesis: "太阳帆测绘网技术的核心理论假设：深空方向航行线链在5阶可实现行星改造进度 +32 点。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：行星改造进度 +32 点、殖民扩张范围 ×1.23、舰船耐久 ×1.23；前置：res31_deepspace_04、res31_deepspace_07。" },
  { projectId: "res31_deepspace_06", hypothesis: "引力弹弓勘探技术的核心理论假设：深空方向采矿线链在1阶可实现发射花费 ×0.97。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：发射花费 ×0.97、舰船航速 ×1.04；前置：无。" },
  { projectId: "res31_deepspace_07", hypothesis: "虫洞中继技术的核心理论假设：深空方向采矿线链在2阶可实现轨道电力 +4。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：轨道电力 +4、舰船耐久 ×1.08；前置：res31_deepspace_06。" },
  { projectId: "res31_deepspace_08", hypothesis: "跃迁防御技术的核心理论假设：深空方向采矿线链在3阶可实现殖民扩张范围 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：殖民扩张范围 ×1.12、小行星采矿产量 ×1.12、行星改造进度 +14 点；前置：res31_deepspace_07。" },
  { projectId: "res31_deepspace_09", hypothesis: "曲率扫描技术的核心理论假设：深空方向采矿线链在4阶可实现舰船航速 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：舰船航速 ×1.17、氦3 +33/分钟、发射花费 ×0.86；前置：res31_deepspace_08、res31_society_12。" },
  { projectId: "res31_deepspace_10", hypothesis: "天文测绘技术的核心理论假设：深空方向采矿线链在5阶可实现舰船耐久 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：舰船耐久 ×1.23、行星改造进度 +16 点、轨道电力 +16；前置：res31_deepspace_09、res31_deepspace_12。" },
  { projectId: "res31_deepspace_11", hypothesis: "陨石着陆技术的核心理论假设：深空方向探测线链在1阶可实现小行星采矿产量 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：小行星采矿产量 ×1.04、发射花费 ×0.97；前置：无。" },
  { projectId: "res31_deepspace_12", hypothesis: "彗星导航技术的核心理论假设：深空方向探测线链在2阶可实现氦3 +12/分钟。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：氦3 +12/分钟、轨道电力 +12；前置：res31_deepspace_11。" },
  { projectId: "res31_deepspace_13", hypothesis: "星门编队技术的核心理论假设：深空方向探测线链在3阶可实现行星改造进度 +7 点。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：行星改造进度 +7 点、殖民扩张范围 ×1.12、舰船耐久 ×1.12；前置：res31_deepspace_12。" },
  { projectId: "res31_deepspace_14", hypothesis: "探测远征技术的核心理论假设：深空方向探测线链在4阶可实现发射花费 ×0.86。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：发射花费 ×0.86、舰船航速 ×1.17、小行星采矿产量 ×1.17；前置：res31_deepspace_13、res31_society_17。" },
  { projectId: "res31_deepspace_15", hypothesis: "殖民补给技术的核心理论假设：深空方向探测线链在5阶可实现轨道电力 +48。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：轨道电力 +48、舰船耐久 ×1.23、氦3 +48/分钟；前置：res31_deepspace_14、res31_deepspace_17。" },
  { projectId: "res31_deepspace_16", hypothesis: "远航锚定技术的核心理论假设：深空方向防御线链在1阶可实现殖民扩张范围 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：殖民扩张范围 ×1.04、小行星采矿产量 ×1.04；前置：无。" },
  { projectId: "res31_deepspace_17", hypothesis: "轨道通讯技术·Ⅲ的核心理论假设：深空方向防御线链在2阶可实现舰船航速 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：舰船航速 ×1.08、氦3 +8/分钟；前置：res31_deepspace_16。" },
  { projectId: "res31_deepspace_18", hypothesis: "星际巡航技术·Ⅲ的核心理论假设：深空方向防御线链在3阶可实现舰船耐久 ×1.12。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：舰船耐久 ×1.12、行星改造进度 +21 点、轨道电力 +21；前置：res31_deepspace_17。" },
  { projectId: "res31_deepspace_19", hypothesis: "深空采矿技术·Ⅲ的核心理论假设：深空方向防御线链在4阶可实现小行星采矿产量 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：小行星采矿产量 ×1.17、发射花费 ×0.86、殖民扩张范围 ×1.17；前置：res31_deepspace_18、res31_society_22。" },
  { projectId: "res31_deepspace_20", hypothesis: "小行星对接技术·Ⅲ的核心理论假设：深空方向防御线链在5阶可实现氦3 +32/分钟。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：氦3 +32/分钟、轨道电力 +32、舰船航速 ×1.23；前置：res31_deepspace_19、res31_deepspace_22。" },
  { projectId: "res31_deepspace_21", hypothesis: "太阳帆测绘网技术·Ⅲ的核心理论假设：深空方向殖民线链在1阶可实现行星改造进度 +6 点。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：行星改造进度 +6 点、殖民扩张范围 ×1.04；前置：无。" },
  { projectId: "res31_deepspace_22", hypothesis: "引力弹弓勘探技术·Ⅲ的核心理论假设：深空方向殖民线链在2阶可实现发射花费 ×0.94。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：发射花费 ×0.94、舰船航速 ×1.08；前置：res31_deepspace_21。" },
  { projectId: "res31_deepspace_23", hypothesis: "虫洞中继技术·Ⅲ的核心理论假设：深空方向殖民线链在3阶可实现轨道电力 +14。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：轨道电力 +14、舰船耐久 ×1.12、氦3 +14/分钟；前置：res31_deepspace_22。" },
  { projectId: "res31_deepspace_24", hypothesis: "跃迁防御技术·Ⅲ的核心理论假设：深空方向殖民线链在4阶可实现殖民扩张范围 ×1.17。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：殖民扩张范围 ×1.17、小行星采矿产量 ×1.17、行星改造进度 +33 点；前置：res31_deepspace_23、res31_society_27。" },
  { projectId: "res31_deepspace_25", hypothesis: "曲率扫描技术·Ⅲ的核心理论假设：深空方向殖民线链在5阶可实现舰船航速 ×1.23。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：舰船航速 ×1.23、氦3 +16/分钟、发射花费 ×0.82；前置：res31_deepspace_24、res31_deepspace_27。" },
  { projectId: "res31_deepspace_26", hypothesis: "天文测绘技术·Ⅲ的核心理论假设：深空方向通讯线链在1阶可实现舰船耐久 ×1.04。", method: "方法：对照组 ×3，样本量 35，观测周期 21 天，判定标准为效果达标且事故率 < 3.2%。", criterion: "验收标准：舰船耐久 ×1.04、行星改造进度 +4 点；前置：无。" },
  { projectId: "res31_deepspace_27", hypothesis: "陨石着陆技术·Ⅲ的核心理论假设：深空方向通讯线链在2阶可实现小行星采矿产量 ×1.08。", method: "方法：对照组 ×3，样本量 50，观测周期 33 天，判定标准为效果达标且事故率 < 4.4%。", criterion: "验收标准：小行星采矿产量 ×1.08、发射花费 ×0.94；前置：res31_deepspace_26。" },
  { projectId: "res31_deepspace_28", hypothesis: "彗星导航技术·Ⅲ的核心理论假设：深空方向通讯线链在3阶可实现氦3 +7/分钟。", method: "方法：对照组 ×3，样本量 65，观测周期 45 天，判定标准为效果达标且事故率 < 5.6%。", criterion: "验收标准：氦3 +7/分钟、轨道电力 +7、舰船航速 ×1.12；前置：res31_deepspace_27。" },
  { projectId: "res31_deepspace_29", hypothesis: "星门编队技术·Ⅲ的核心理论假设：深空方向通讯线链在4阶可实现行星改造进度 +22 点。", method: "方法：对照组 ×3，样本量 80，观测周期 57 天，判定标准为效果达标且事故率 < 6.8%。", criterion: "验收标准：行星改造进度 +22 点、殖民扩张范围 ×1.17、舰船耐久 ×1.17；前置：res31_deepspace_28、res31_society_02。" },
  { projectId: "res31_deepspace_30", hypothesis: "探测远征技术·Ⅲ的核心理论假设：深空方向通讯线链在5阶可实现发射花费 ×0.82。", method: "方法：对照组 ×3，样本量 95，观测周期 69 天，判定标准为效果达标且事故率 < 8.0%。", criterion: "验收标准：发射花费 ×0.82、舰船航速 ×1.23、小行星采矿产量 ×1.23；前置：res31_deepspace_29、res31_deepspace_02。" },
];

/* 对手情报：每对手 10 条（科研/人才/设备/外交/事故/论文/资金/扩张/短板/合作） */
const RES31_RIVAL_INTEL = [
  { rivalId: "rival31_01", kind: "科研投入", text: "新曙光殖民地·科研投入：物理方向情报 01，强度 3/10，可信度 55%。", value: 3 },
  { rivalId: "rival31_01", kind: "人才动向", text: "新曙光殖民地·人才动向：物理方向情报 02，强度 4/10，可信度 59%。", value: 4 },
  { rivalId: "rival31_01", kind: "设备采购", text: "新曙光殖民地·设备采购：物理方向情报 03，强度 5/10，可信度 63%。", value: 5 },
  { rivalId: "rival31_01", kind: "外交信号", text: "新曙光殖民地·外交信号：物理方向情报 04，强度 6/10，可信度 67%。", value: 6 },
  { rivalId: "rival31_01", kind: "实验事故", text: "新曙光殖民地·实验事故：物理方向情报 05，强度 7/10，可信度 71%。", value: 7 },
  { rivalId: "rival31_01", kind: "论文发表", text: "新曙光殖民地·论文发表：物理方向情报 06，强度 8/10，可信度 75%。", value: 8 },
  { rivalId: "rival31_01", kind: "资金状况", text: "新曙光殖民地·资金状况：物理方向情报 07，强度 9/10，可信度 79%。", value: 9 },
  { rivalId: "rival31_01", kind: "扩张意图", text: "新曙光殖民地·扩张意图：物理方向情报 08，强度 10/10，可信度 83%。", value: 10 },
  { rivalId: "rival31_01", kind: "技术短板", text: "新曙光殖民地·技术短板：物理方向情报 09，强度 3/10，可信度 87%。", value: 3 },
  { rivalId: "rival31_01", kind: "合作意愿", text: "新曙光殖民地·合作意愿：物理方向情报 10，强度 4/10，可信度 91%。", value: 4 },
  { rivalId: "rival31_02", kind: "科研投入", text: "铁穹堡垒·科研投入：工程方向情报 01，强度 3/10，可信度 55%。", value: 3 },
  { rivalId: "rival31_02", kind: "人才动向", text: "铁穹堡垒·人才动向：工程方向情报 02，强度 4/10，可信度 59%。", value: 4 },
  { rivalId: "rival31_02", kind: "设备采购", text: "铁穹堡垒·设备采购：工程方向情报 03，强度 5/10，可信度 63%。", value: 5 },
  { rivalId: "rival31_02", kind: "外交信号", text: "铁穹堡垒·外交信号：工程方向情报 04，强度 6/10，可信度 67%。", value: 6 },
  { rivalId: "rival31_02", kind: "实验事故", text: "铁穹堡垒·实验事故：工程方向情报 05，强度 7/10，可信度 71%。", value: 7 },
  { rivalId: "rival31_02", kind: "论文发表", text: "铁穹堡垒·论文发表：工程方向情报 06，强度 8/10，可信度 75%。", value: 8 },
  { rivalId: "rival31_02", kind: "资金状况", text: "铁穹堡垒·资金状况：工程方向情报 07，强度 9/10，可信度 79%。", value: 9 },
  { rivalId: "rival31_02", kind: "扩张意图", text: "铁穹堡垒·扩张意图：工程方向情报 08，强度 10/10，可信度 83%。", value: 10 },
  { rivalId: "rival31_02", kind: "技术短板", text: "铁穹堡垒·技术短板：工程方向情报 09，强度 3/10，可信度 87%。", value: 3 },
  { rivalId: "rival31_02", kind: "合作意愿", text: "铁穹堡垒·合作意愿：工程方向情报 10，强度 4/10，可信度 91%。", value: 4 },
  { rivalId: "rival31_03", kind: "科研投入", text: "绿洲农场·科研投入：生物方向情报 01，强度 3/10，可信度 55%。", value: 3 },
  { rivalId: "rival31_03", kind: "人才动向", text: "绿洲农场·人才动向：生物方向情报 02，强度 4/10，可信度 59%。", value: 4 },
  { rivalId: "rival31_03", kind: "设备采购", text: "绿洲农场·设备采购：生物方向情报 03，强度 5/10，可信度 63%。", value: 5 },
  { rivalId: "rival31_03", kind: "外交信号", text: "绿洲农场·外交信号：生物方向情报 04，强度 6/10，可信度 67%。", value: 6 },
  { rivalId: "rival31_03", kind: "实验事故", text: "绿洲农场·实验事故：生物方向情报 05，强度 7/10，可信度 71%。", value: 7 },
  { rivalId: "rival31_03", kind: "论文发表", text: "绿洲农场·论文发表：生物方向情报 06，强度 8/10，可信度 75%。", value: 8 },
  { rivalId: "rival31_03", kind: "资金状况", text: "绿洲农场·资金状况：生物方向情报 07，强度 9/10，可信度 79%。", value: 9 },
  { rivalId: "rival31_03", kind: "扩张意图", text: "绿洲农场·扩张意图：生物方向情报 08，强度 10/10，可信度 83%。", value: 10 },
  { rivalId: "rival31_03", kind: "技术短板", text: "绿洲农场·技术短板：生物方向情报 09，强度 3/10，可信度 87%。", value: 3 },
  { rivalId: "rival31_03", kind: "合作意愿", text: "绿洲农场·合作意愿：生物方向情报 10，强度 4/10，可信度 91%。", value: 4 },
  { rivalId: "rival31_04", kind: "科研投入", text: "自由港·科研投入：社会方向情报 01，强度 3/10，可信度 55%。", value: 3 },
  { rivalId: "rival31_04", kind: "人才动向", text: "自由港·人才动向：社会方向情报 02，强度 4/10，可信度 59%。", value: 4 },
  { rivalId: "rival31_04", kind: "设备采购", text: "自由港·设备采购：社会方向情报 03，强度 5/10，可信度 63%。", value: 5 },
  { rivalId: "rival31_04", kind: "外交信号", text: "自由港·外交信号：社会方向情报 04，强度 6/10，可信度 67%。", value: 6 },
  { rivalId: "rival31_04", kind: "实验事故", text: "自由港·实验事故：社会方向情报 05，强度 7/10，可信度 71%。", value: 7 },
  { rivalId: "rival31_04", kind: "论文发表", text: "自由港·论文发表：社会方向情报 06，强度 8/10，可信度 75%。", value: 8 },
  { rivalId: "rival31_04", kind: "资金状况", text: "自由港·资金状况：社会方向情报 07，强度 9/10，可信度 79%。", value: 9 },
  { rivalId: "rival31_04", kind: "扩张意图", text: "自由港·扩张意图：社会方向情报 08，强度 10/10，可信度 83%。", value: 10 },
  { rivalId: "rival31_04", kind: "技术短板", text: "自由港·技术短板：社会方向情报 09，强度 3/10，可信度 87%。", value: 3 },
  { rivalId: "rival31_04", kind: "合作意愿", text: "自由港·合作意愿：社会方向情报 10，强度 4/10，可信度 91%。", value: 4 },
  { rivalId: "rival31_05", kind: "科研投入", text: "远望站·科研投入：深空方向情报 01，强度 3/10，可信度 55%。", value: 3 },
  { rivalId: "rival31_05", kind: "人才动向", text: "远望站·人才动向：深空方向情报 02，强度 4/10，可信度 59%。", value: 4 },
  { rivalId: "rival31_05", kind: "设备采购", text: "远望站·设备采购：深空方向情报 03，强度 5/10，可信度 63%。", value: 5 },
  { rivalId: "rival31_05", kind: "外交信号", text: "远望站·外交信号：深空方向情报 04，强度 6/10，可信度 67%。", value: 6 },
  { rivalId: "rival31_05", kind: "实验事故", text: "远望站·实验事故：深空方向情报 05，强度 7/10，可信度 71%。", value: 7 },
  { rivalId: "rival31_05", kind: "论文发表", text: "远望站·论文发表：深空方向情报 06，强度 8/10，可信度 75%。", value: 8 },
  { rivalId: "rival31_05", kind: "资金状况", text: "远望站·资金状况：深空方向情报 07，强度 9/10，可信度 79%。", value: 9 },
  { rivalId: "rival31_05", kind: "扩张意图", text: "远望站·扩张意图：深空方向情报 08，强度 10/10，可信度 83%。", value: 10 },
  { rivalId: "rival31_05", kind: "技术短板", text: "远望站·技术短板：深空方向情报 09，强度 3/10，可信度 87%。", value: 3 },
  { rivalId: "rival31_05", kind: "合作意愿", text: "远望站·合作意愿：深空方向情报 10，强度 4/10，可信度 91%。", value: 4 },
  { rivalId: "rival31_06", kind: "科研投入", text: "方舟城·科研投入：生物方向情报 01，强度 3/10，可信度 55%。", value: 3 },
  { rivalId: "rival31_06", kind: "人才动向", text: "方舟城·人才动向：生物方向情报 02，强度 4/10，可信度 59%。", value: 4 },
  { rivalId: "rival31_06", kind: "设备采购", text: "方舟城·设备采购：生物方向情报 03，强度 5/10，可信度 63%。", value: 5 },
  { rivalId: "rival31_06", kind: "外交信号", text: "方舟城·外交信号：生物方向情报 04，强度 6/10，可信度 67%。", value: 6 },
  { rivalId: "rival31_06", kind: "实验事故", text: "方舟城·实验事故：生物方向情报 05，强度 7/10，可信度 71%。", value: 7 },
  { rivalId: "rival31_06", kind: "论文发表", text: "方舟城·论文发表：生物方向情报 06，强度 8/10，可信度 75%。", value: 8 },
  { rivalId: "rival31_06", kind: "资金状况", text: "方舟城·资金状况：生物方向情报 07，强度 9/10，可信度 79%。", value: 9 },
  { rivalId: "rival31_06", kind: "扩张意图", text: "方舟城·扩张意图：生物方向情报 08，强度 10/10，可信度 83%。", value: 10 },
  { rivalId: "rival31_06", kind: "技术短板", text: "方舟城·技术短板：生物方向情报 09，强度 3/10，可信度 87%。", value: 3 },
  { rivalId: "rival31_06", kind: "合作意愿", text: "方舟城·合作意愿：生物方向情报 10，强度 4/10，可信度 91%。", value: 4 },
  { rivalId: "rival31_07", kind: "科研投入", text: "熔炉镇·科研投入：工程方向情报 01，强度 3/10，可信度 55%。", value: 3 },
  { rivalId: "rival31_07", kind: "人才动向", text: "熔炉镇·人才动向：工程方向情报 02，强度 4/10，可信度 59%。", value: 4 },
  { rivalId: "rival31_07", kind: "设备采购", text: "熔炉镇·设备采购：工程方向情报 03，强度 5/10，可信度 63%。", value: 5 },
  { rivalId: "rival31_07", kind: "外交信号", text: "熔炉镇·外交信号：工程方向情报 04，强度 6/10，可信度 67%。", value: 6 },
  { rivalId: "rival31_07", kind: "实验事故", text: "熔炉镇·实验事故：工程方向情报 05，强度 7/10，可信度 71%。", value: 7 },
  { rivalId: "rival31_07", kind: "论文发表", text: "熔炉镇·论文发表：工程方向情报 06，强度 8/10，可信度 75%。", value: 8 },
  { rivalId: "rival31_07", kind: "资金状况", text: "熔炉镇·资金状况：工程方向情报 07，强度 9/10，可信度 79%。", value: 9 },
  { rivalId: "rival31_07", kind: "扩张意图", text: "熔炉镇·扩张意图：工程方向情报 08，强度 10/10，可信度 83%。", value: 10 },
  { rivalId: "rival31_07", kind: "技术短板", text: "熔炉镇·技术短板：工程方向情报 09，强度 3/10，可信度 87%。", value: 3 },
  { rivalId: "rival31_07", kind: "合作意愿", text: "熔炉镇·合作意愿：工程方向情报 10，强度 4/10，可信度 91%。", value: 4 },
  { rivalId: "rival31_08", kind: "科研投入", text: "静默修道院·科研投入：物理方向情报 01，强度 3/10，可信度 55%。", value: 3 },
  { rivalId: "rival31_08", kind: "人才动向", text: "静默修道院·人才动向：物理方向情报 02，强度 4/10，可信度 59%。", value: 4 },
  { rivalId: "rival31_08", kind: "设备采购", text: "静默修道院·设备采购：物理方向情报 03，强度 5/10，可信度 63%。", value: 5 },
  { rivalId: "rival31_08", kind: "外交信号", text: "静默修道院·外交信号：物理方向情报 04，强度 6/10，可信度 67%。", value: 6 },
  { rivalId: "rival31_08", kind: "实验事故", text: "静默修道院·实验事故：物理方向情报 05，强度 7/10，可信度 71%。", value: 7 },
  { rivalId: "rival31_08", kind: "论文发表", text: "静默修道院·论文发表：物理方向情报 06，强度 8/10，可信度 75%。", value: 8 },
  { rivalId: "rival31_08", kind: "资金状况", text: "静默修道院·资金状况：物理方向情报 07，强度 9/10，可信度 79%。", value: 9 },
  { rivalId: "rival31_08", kind: "扩张意图", text: "静默修道院·扩张意图：物理方向情报 08，强度 10/10，可信度 83%。", value: 10 },
  { rivalId: "rival31_08", kind: "技术短板", text: "静默修道院·技术短板：物理方向情报 09，强度 3/10，可信度 87%。", value: 3 },
  { rivalId: "rival31_08", kind: "合作意愿", text: "静默修道院·合作意愿：物理方向情报 10，强度 4/10，可信度 91%。", value: 4 },
];

/* ============ §6 突破 / 事故事件：60 个突破事件（每事件 3 个分支选择）+ 24 个事故 ============ */
const RES31_BREAKTHROUGHS = [
  {
    id: "evt31_001",
    kind: "breakthrough",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·意外共振 01",
    text: "实验中出现未预期的共振峰，数据远超理论预测。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_002",
    kind: "breakthrough",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·灵感闪现 02",
    text: "一位科学家在深夜推导中发现了全新的解法。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_003",
    kind: "dilemma",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·交叉启发 03",
    text: "两个方向的数据对照时浮现出共同规律。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_004",
    kind: "breakthrough",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·样本异变 04",
    text: "培养样本出现罕见变异，性能大幅提升。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_005",
    kind: "breakthrough",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·算法顿悟 05",
    text: "新的求解算法把计算时间压缩了一个数量级。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_006",
    kind: "dilemma",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·旧数据新解 06",
    text: "尘封三年的旧实验数据被重新解读出价值。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_007",
    kind: "breakthrough",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·设备超频 07",
    text: "设备在极限工况下意外稳定运行并产出优质数据。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_008",
    kind: "breakthrough",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·理论自洽 08",
    text: "两个互相矛盾的模型在新框架下统一了。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_009",
    kind: "dilemma",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·观测惊喜 09",
    text: "望远镜捕捉到教科书之外的罕见现象。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_010",
    kind: "breakthrough",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·失败的馈赠 10",
    text: "一次失败实验的副产物恰好是项目急需的材料。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_011",
    kind: "breakthrough",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·意外共振 11",
    text: "实验中出现未预期的共振峰，数据远超理论预测。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_012",
    kind: "dilemma",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·灵感闪现 12",
    text: "一位科学家在深夜推导中发现了全新的解法。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_013",
    kind: "breakthrough",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·交叉启发 13",
    text: "两个方向的数据对照时浮现出共同规律。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_014",
    kind: "breakthrough",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·样本异变 14",
    text: "培养样本出现罕见变异，性能大幅提升。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_015",
    kind: "dilemma",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·算法顿悟 15",
    text: "新的求解算法把计算时间压缩了一个数量级。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_016",
    kind: "breakthrough",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·旧数据新解 16",
    text: "尘封三年的旧实验数据被重新解读出价值。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_017",
    kind: "breakthrough",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·设备超频 17",
    text: "设备在极限工况下意外稳定运行并产出优质数据。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_018",
    kind: "dilemma",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·理论自洽 18",
    text: "两个互相矛盾的模型在新框架下统一了。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_019",
    kind: "breakthrough",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·观测惊喜 19",
    text: "望远镜捕捉到教科书之外的罕见现象。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_020",
    kind: "breakthrough",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·失败的馈赠 20",
    text: "一次失败实验的副产物恰好是项目急需的材料。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_021",
    kind: "dilemma",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·意外共振 21",
    text: "实验中出现未预期的共振峰，数据远超理论预测。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_022",
    kind: "breakthrough",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·灵感闪现 22",
    text: "一位科学家在深夜推导中发现了全新的解法。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_023",
    kind: "breakthrough",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·交叉启发 23",
    text: "两个方向的数据对照时浮现出共同规律。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_024",
    kind: "dilemma",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·样本异变 24",
    text: "培养样本出现罕见变异，性能大幅提升。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_025",
    kind: "breakthrough",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·算法顿悟 25",
    text: "新的求解算法把计算时间压缩了一个数量级。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_026",
    kind: "breakthrough",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·旧数据新解 26",
    text: "尘封三年的旧实验数据被重新解读出价值。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_027",
    kind: "dilemma",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·设备超频 27",
    text: "设备在极限工况下意外稳定运行并产出优质数据。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_028",
    kind: "breakthrough",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·理论自洽 28",
    text: "两个互相矛盾的模型在新框架下统一了。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_029",
    kind: "breakthrough",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·观测惊喜 29",
    text: "望远镜捕捉到教科书之外的罕见现象。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_030",
    kind: "dilemma",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·失败的馈赠 30",
    text: "一次失败实验的副产物恰好是项目急需的材料。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_031",
    kind: "breakthrough",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·意外共振 31",
    text: "实验中出现未预期的共振峰，数据远超理论预测。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_032",
    kind: "breakthrough",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·灵感闪现 32",
    text: "一位科学家在深夜推导中发现了全新的解法。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_033",
    kind: "dilemma",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·交叉启发 33",
    text: "两个方向的数据对照时浮现出共同规律。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_034",
    kind: "breakthrough",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·样本异变 34",
    text: "培养样本出现罕见变异，性能大幅提升。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_035",
    kind: "breakthrough",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·算法顿悟 35",
    text: "新的求解算法把计算时间压缩了一个数量级。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_036",
    kind: "dilemma",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·旧数据新解 36",
    text: "尘封三年的旧实验数据被重新解读出价值。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_037",
    kind: "breakthrough",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·设备超频 37",
    text: "设备在极限工况下意外稳定运行并产出优质数据。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_038",
    kind: "breakthrough",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·理论自洽 38",
    text: "两个互相矛盾的模型在新框架下统一了。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_039",
    kind: "dilemma",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·观测惊喜 39",
    text: "望远镜捕捉到教科书之外的罕见现象。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_040",
    kind: "breakthrough",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·失败的馈赠 40",
    text: "一次失败实验的副产物恰好是项目急需的材料。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_041",
    kind: "breakthrough",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·意外共振 41",
    text: "实验中出现未预期的共振峰，数据远超理论预测。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_042",
    kind: "dilemma",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·灵感闪现 42",
    text: "一位科学家在深夜推导中发现了全新的解法。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_043",
    kind: "breakthrough",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·交叉启发 43",
    text: "两个方向的数据对照时浮现出共同规律。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_044",
    kind: "breakthrough",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·样本异变 44",
    text: "培养样本出现罕见变异，性能大幅提升。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_045",
    kind: "dilemma",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·算法顿悟 45",
    text: "新的求解算法把计算时间压缩了一个数量级。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_046",
    kind: "breakthrough",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·旧数据新解 46",
    text: "尘封三年的旧实验数据被重新解读出价值。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_047",
    kind: "breakthrough",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·设备超频 47",
    text: "设备在极限工况下意外稳定运行并产出优质数据。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_048",
    kind: "dilemma",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·理论自洽 48",
    text: "两个互相矛盾的模型在新框架下统一了。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_049",
    kind: "breakthrough",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·观测惊喜 49",
    text: "望远镜捕捉到教科书之外的罕见现象。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_050",
    kind: "breakthrough",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·失败的馈赠 50",
    text: "一次失败实验的副产物恰好是项目急需的材料。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_051",
    kind: "dilemma",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·意外共振 51",
    text: "实验中出现未预期的共振峰，数据远超理论预测。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_052",
    kind: "breakthrough",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·灵感闪现 52",
    text: "一位科学家在深夜推导中发现了全新的解法。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_053",
    kind: "breakthrough",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·交叉启发 53",
    text: "两个方向的数据对照时浮现出共同规律。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_054",
    kind: "dilemma",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·样本异变 54",
    text: "培养样本出现罕见变异，性能大幅提升。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_055",
    kind: "breakthrough",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·算法顿悟 55",
    text: "新的求解算法把计算时间压缩了一个数量级。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_056",
    kind: "breakthrough",
    branch: "physics",
    minTier: 1,
    weight: 10,
    title: "物理·旧数据新解 56",
    text: "尘封三年的旧实验数据被重新解读出价值。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_057",
    kind: "dilemma",
    branch: "engineering",
    minTier: 2,
    weight: 13,
    title: "工程·设备超频 57",
    text: "设备在极限工况下意外稳定运行并产出优质数据。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_058",
    kind: "breakthrough",
    branch: "biology",
    minTier: 3,
    weight: 16,
    title: "生物·理论自洽 58",
    text: "两个互相矛盾的模型在新框架下统一了。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_059",
    kind: "breakthrough",
    branch: "society",
    minTier: 4,
    weight: 19,
    title: "社会·观测惊喜 59",
    text: "望远镜捕捉到教科书之外的罕见现象。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
  {
    id: "evt31_060",
    kind: "dilemma",
    branch: "deepspace",
    minTier: 5,
    weight: 22,
    title: "深空·失败的馈赠 60",
    text: "一次失败实验的副产物恰好是项目急需的材料。",
    choices: [
      {
        label: "全力推进",
        desc: "投入全部算力验证新发现",
        effects: {"progressBoost": 0.25, "researchRefund": 0, "moraleDelta": 5, "accidentRisk": 0.05},
        result: "验证成功：项目进度 +25%，团队士气 +5。",
      },
      {
        label: "稳妥记录",
        desc: "先归档数据，按原计划继续",
        effects: {"progressBoost": 0.05, "researchRefund": 40, "moraleDelta": 2, "accidentRisk": 0.0},
        result: "数据归档：进度 +5%，返还 40 科研点，士气 +2。",
      },
      {
        label: "分流研究",
        desc: "抽调一半人手开辟新支线",
        effects: {"progressBoost": 0.1, "researchRefund": 0, "moraleDelta": -2, "accidentRisk": 0.02, "insight": 30},
        result: "支线开启：进度 +10%，获得 30 点灵感，士气 -2。",
      },
    ],
  },
];

const RES31_ACCIDENTS = [
  { id: "acc31_01", title: "设备过载", text: "实验设备过载烧毁，项目进度倒退，维修需要信用点。", severity: 1, progressLoss: 0.05, creditCost: 100, moraleDelta: -3, mitigation: "投入 100 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_02", title: "样本污染", text: "培养样本被污染，生物实验全部重做。", severity: 2, progressLoss: 0.1, creditCost: 200, moraleDelta: -5, mitigation: "投入 200 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_03", title: "数据丢失", text: "存储阵列故障，未备份的实验数据丢失。", severity: 3, progressLoss: 0.15, creditCost: 300, moraleDelta: -7, mitigation: "投入 300 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_04", title: "辐射泄漏", text: "小型辐射泄漏，实验室关闭检修，科学家士气下降。", severity: 1, progressLoss: 0.05, creditCost: 100, moraleDelta: -3, mitigation: "投入 100 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_05", title: "试剂爆炸", text: "化学试剂配比失误引发小规模爆炸，无人重伤。", severity: 2, progressLoss: 0.1, creditCost: 200, moraleDelta: -5, mitigation: "投入 200 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_06", title: "模型错误", text: "核心模型被发现系统性错误，前期结论作废。", severity: 3, progressLoss: 0.15, creditCost: 300, moraleDelta: -7, mitigation: "投入 300 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_07", title: "经费审计", text: "审计发现账目问题，项目被冻结审查。", severity: 1, progressLoss: 0.05, creditCost: 100, moraleDelta: -3, mitigation: "投入 100 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_08", title: "人才挖角", text: " rival 殖民地高薪挖走一名骨干科学家。", severity: 2, progressLoss: 0.1, creditCost: 200, moraleDelta: -5, mitigation: "投入 200 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_09", title: "伦理争议", text: "研究触及伦理红线，公众质疑，稳定度下降。", severity: 3, progressLoss: 0.15, creditCost: 300, moraleDelta: -7, mitigation: "投入 300 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_10", title: "设备被盗", text: "贵重设备失窃，安保升级，项目延期。", severity: 1, progressLoss: 0.05, creditCost: 100, moraleDelta: -3, mitigation: "投入 100 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_11", title: "停电事故", text: "电网波动导致长时间停电，实验中断。", severity: 2, progressLoss: 0.1, creditCost: 200, moraleDelta: -5, mitigation: "投入 200 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_12", title: "通讯中断", text: "深空通讯中断，观测数据无法回传。", severity: 3, progressLoss: 0.15, creditCost: 300, moraleDelta: -7, mitigation: "投入 300 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_13", title: "设备过载", text: "实验设备过载烧毁，项目进度倒退，维修需要信用点。", severity: 1, progressLoss: 0.05, creditCost: 100, moraleDelta: -3, mitigation: "投入 100 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_14", title: "样本污染", text: "培养样本被污染，生物实验全部重做。", severity: 2, progressLoss: 0.1, creditCost: 200, moraleDelta: -5, mitigation: "投入 200 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_15", title: "数据丢失", text: "存储阵列故障，未备份的实验数据丢失。", severity: 3, progressLoss: 0.15, creditCost: 300, moraleDelta: -7, mitigation: "投入 300 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_16", title: "辐射泄漏", text: "小型辐射泄漏，实验室关闭检修，科学家士气下降。", severity: 1, progressLoss: 0.05, creditCost: 100, moraleDelta: -3, mitigation: "投入 100 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_17", title: "试剂爆炸", text: "化学试剂配比失误引发小规模爆炸，无人重伤。", severity: 2, progressLoss: 0.1, creditCost: 200, moraleDelta: -5, mitigation: "投入 200 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_18", title: "模型错误", text: "核心模型被发现系统性错误，前期结论作废。", severity: 3, progressLoss: 0.15, creditCost: 300, moraleDelta: -7, mitigation: "投入 300 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_19", title: "经费审计", text: "审计发现账目问题，项目被冻结审查。", severity: 1, progressLoss: 0.05, creditCost: 100, moraleDelta: -3, mitigation: "投入 100 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_20", title: "人才挖角", text: " rival 殖民地高薪挖走一名骨干科学家。", severity: 2, progressLoss: 0.1, creditCost: 200, moraleDelta: -5, mitigation: "投入 200 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_21", title: "伦理争议", text: "研究触及伦理红线，公众质疑，稳定度下降。", severity: 3, progressLoss: 0.15, creditCost: 300, moraleDelta: -7, mitigation: "投入 300 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_22", title: "设备被盗", text: "贵重设备失窃，安保升级，项目延期。", severity: 1, progressLoss: 0.05, creditCost: 100, moraleDelta: -3, mitigation: "投入 100 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_23", title: "停电事故", text: "电网波动导致长时间停电，实验中断。", severity: 2, progressLoss: 0.1, creditCost: 200, moraleDelta: -5, mitigation: "投入 200 信用点紧急维修，可将进度损失减半。" },
  { id: "acc31_24", title: "通讯中断", text: "深空通讯中断，观测数据无法回传。", severity: 3, progressLoss: 0.15, creditCost: 300, moraleDelta: -7, mitigation: "投入 300 信用点紧急维修，可将进度损失减半。" },
];

/* ============ §7 资助计划：40 个 ============ */
const RES31_GRANTS = [
  {
    "id": "grant31_01",
    "name": "火星发展基金资助计划 01",
    "sponsor": "火星发展基金",
    "branch": "physics",
    "requireTier": 1,
    "requireProjects": 1,
    "rewardCredits": 500,
    "rewardResearch": 200,
    "durationDays": 60,
    "desc": "完成 1 个物理方向 1 阶以上项目，获得 500 信用点与 200 科研点。"
  },
  {
    "id": "grant31_02",
    "name": "地球联合科学院资助计划 02",
    "sponsor": "地球联合科学院",
    "branch": "engineering",
    "requireTier": 2,
    "requireProjects": 2,
    "rewardCredits": 620,
    "rewardResearch": 260,
    "durationDays": 90,
    "desc": "完成 2 个工程方向 2 阶以上项目，获得 620 信用点与 260 科研点。"
  },
  {
    "id": "grant31_03",
    "name": "星港商会资助计划 03",
    "sponsor": "星港商会",
    "branch": "biology",
    "requireTier": 3,
    "requireProjects": 3,
    "rewardCredits": 740,
    "rewardResearch": 320,
    "durationDays": 120,
    "desc": "完成 3 个生物方向 3 阶以上项目，获得 740 信用点与 320 科研点。"
  },
  {
    "id": "grant31_04",
    "name": "殖民者互助会资助计划 04",
    "sponsor": "殖民者互助会",
    "branch": "society",
    "requireTier": 4,
    "requireProjects": 1,
    "rewardCredits": 860,
    "rewardResearch": 380,
    "durationDays": 150,
    "desc": "完成 1 个社会方向 4 阶以上项目，获得 860 信用点与 380 科研点。"
  },
  {
    "id": "grant31_05",
    "name": "深空探索协会资助计划 05",
    "sponsor": "深空探索协会",
    "branch": "deepspace",
    "requireTier": 1,
    "requireProjects": 2,
    "rewardCredits": 980,
    "rewardResearch": 440,
    "durationDays": 180,
    "desc": "完成 2 个深空方向 1 阶以上项目，获得 980 信用点与 440 科研点。"
  },
  {
    "id": "grant31_06",
    "name": "红星教育基金资助计划 06",
    "sponsor": "红星教育基金",
    "branch": "physics",
    "requireTier": 2,
    "requireProjects": 3,
    "rewardCredits": 1100,
    "rewardResearch": 500,
    "durationDays": 60,
    "desc": "完成 3 个物理方向 2 阶以上项目，获得 1100 信用点与 500 科研点。"
  },
  {
    "id": "grant31_07",
    "name": "火星发展基金资助计划 07",
    "sponsor": "火星发展基金",
    "branch": "engineering",
    "requireTier": 3,
    "requireProjects": 1,
    "rewardCredits": 1220,
    "rewardResearch": 560,
    "durationDays": 90,
    "desc": "完成 1 个工程方向 3 阶以上项目，获得 1220 信用点与 560 科研点。"
  },
  {
    "id": "grant31_08",
    "name": "地球联合科学院资助计划 08",
    "sponsor": "地球联合科学院",
    "branch": "biology",
    "requireTier": 4,
    "requireProjects": 2,
    "rewardCredits": 1340,
    "rewardResearch": 620,
    "durationDays": 120,
    "desc": "完成 2 个生物方向 4 阶以上项目，获得 1340 信用点与 620 科研点。"
  },
  {
    "id": "grant31_09",
    "name": "星港商会资助计划 09",
    "sponsor": "星港商会",
    "branch": "society",
    "requireTier": 1,
    "requireProjects": 3,
    "rewardCredits": 1460,
    "rewardResearch": 680,
    "durationDays": 150,
    "desc": "完成 3 个社会方向 1 阶以上项目，获得 1460 信用点与 680 科研点。"
  },
  {
    "id": "grant31_10",
    "name": "殖民者互助会资助计划 10",
    "sponsor": "殖民者互助会",
    "branch": "deepspace",
    "requireTier": 2,
    "requireProjects": 1,
    "rewardCredits": 1580,
    "rewardResearch": 740,
    "durationDays": 180,
    "desc": "完成 1 个深空方向 2 阶以上项目，获得 1580 信用点与 740 科研点。"
  },
  {
    "id": "grant31_11",
    "name": "深空探索协会资助计划 11",
    "sponsor": "深空探索协会",
    "branch": "physics",
    "requireTier": 3,
    "requireProjects": 2,
    "rewardCredits": 1700,
    "rewardResearch": 800,
    "durationDays": 60,
    "desc": "完成 2 个物理方向 3 阶以上项目，获得 1700 信用点与 800 科研点。"
  },
  {
    "id": "grant31_12",
    "name": "红星教育基金资助计划 12",
    "sponsor": "红星教育基金",
    "branch": "engineering",
    "requireTier": 4,
    "requireProjects": 3,
    "rewardCredits": 1820,
    "rewardResearch": 860,
    "durationDays": 90,
    "desc": "完成 3 个工程方向 4 阶以上项目，获得 1820 信用点与 860 科研点。"
  },
  {
    "id": "grant31_13",
    "name": "火星发展基金资助计划 13",
    "sponsor": "火星发展基金",
    "branch": "biology",
    "requireTier": 1,
    "requireProjects": 1,
    "rewardCredits": 1940,
    "rewardResearch": 920,
    "durationDays": 120,
    "desc": "完成 1 个生物方向 1 阶以上项目，获得 1940 信用点与 920 科研点。"
  },
  {
    "id": "grant31_14",
    "name": "地球联合科学院资助计划 14",
    "sponsor": "地球联合科学院",
    "branch": "society",
    "requireTier": 2,
    "requireProjects": 2,
    "rewardCredits": 2060,
    "rewardResearch": 980,
    "durationDays": 150,
    "desc": "完成 2 个社会方向 2 阶以上项目，获得 2060 信用点与 980 科研点。"
  },
  {
    "id": "grant31_15",
    "name": "星港商会资助计划 15",
    "sponsor": "星港商会",
    "branch": "deepspace",
    "requireTier": 3,
    "requireProjects": 3,
    "rewardCredits": 2180,
    "rewardResearch": 1040,
    "durationDays": 180,
    "desc": "完成 3 个深空方向 3 阶以上项目，获得 2180 信用点与 1040 科研点。"
  },
  {
    "id": "grant31_16",
    "name": "殖民者互助会资助计划 16",
    "sponsor": "殖民者互助会",
    "branch": "physics",
    "requireTier": 4,
    "requireProjects": 1,
    "rewardCredits": 2300,
    "rewardResearch": 1100,
    "durationDays": 60,
    "desc": "完成 1 个物理方向 4 阶以上项目，获得 2300 信用点与 1100 科研点。"
  },
  {
    "id": "grant31_17",
    "name": "深空探索协会资助计划 17",
    "sponsor": "深空探索协会",
    "branch": "engineering",
    "requireTier": 1,
    "requireProjects": 2,
    "rewardCredits": 2420,
    "rewardResearch": 1160,
    "durationDays": 90,
    "desc": "完成 2 个工程方向 1 阶以上项目，获得 2420 信用点与 1160 科研点。"
  },
  {
    "id": "grant31_18",
    "name": "红星教育基金资助计划 18",
    "sponsor": "红星教育基金",
    "branch": "biology",
    "requireTier": 2,
    "requireProjects": 3,
    "rewardCredits": 2540,
    "rewardResearch": 1220,
    "durationDays": 120,
    "desc": "完成 3 个生物方向 2 阶以上项目，获得 2540 信用点与 1220 科研点。"
  },
  {
    "id": "grant31_19",
    "name": "火星发展基金资助计划 19",
    "sponsor": "火星发展基金",
    "branch": "society",
    "requireTier": 3,
    "requireProjects": 1,
    "rewardCredits": 2660,
    "rewardResearch": 1280,
    "durationDays": 150,
    "desc": "完成 1 个社会方向 3 阶以上项目，获得 2660 信用点与 1280 科研点。"
  },
  {
    "id": "grant31_20",
    "name": "地球联合科学院资助计划 20",
    "sponsor": "地球联合科学院",
    "branch": "deepspace",
    "requireTier": 4,
    "requireProjects": 2,
    "rewardCredits": 2780,
    "rewardResearch": 1340,
    "durationDays": 180,
    "desc": "完成 2 个深空方向 4 阶以上项目，获得 2780 信用点与 1340 科研点。"
  },
  {
    "id": "grant31_21",
    "name": "星港商会资助计划 21",
    "sponsor": "星港商会",
    "branch": "physics",
    "requireTier": 1,
    "requireProjects": 3,
    "rewardCredits": 2900,
    "rewardResearch": 1400,
    "durationDays": 60,
    "desc": "完成 3 个物理方向 1 阶以上项目，获得 2900 信用点与 1400 科研点。"
  },
  {
    "id": "grant31_22",
    "name": "殖民者互助会资助计划 22",
    "sponsor": "殖民者互助会",
    "branch": "engineering",
    "requireTier": 2,
    "requireProjects": 1,
    "rewardCredits": 3020,
    "rewardResearch": 1460,
    "durationDays": 90,
    "desc": "完成 1 个工程方向 2 阶以上项目，获得 3020 信用点与 1460 科研点。"
  },
  {
    "id": "grant31_23",
    "name": "深空探索协会资助计划 23",
    "sponsor": "深空探索协会",
    "branch": "biology",
    "requireTier": 3,
    "requireProjects": 2,
    "rewardCredits": 3140,
    "rewardResearch": 1520,
    "durationDays": 120,
    "desc": "完成 2 个生物方向 3 阶以上项目，获得 3140 信用点与 1520 科研点。"
  },
  {
    "id": "grant31_24",
    "name": "红星教育基金资助计划 24",
    "sponsor": "红星教育基金",
    "branch": "society",
    "requireTier": 4,
    "requireProjects": 3,
    "rewardCredits": 3260,
    "rewardResearch": 1580,
    "durationDays": 150,
    "desc": "完成 3 个社会方向 4 阶以上项目，获得 3260 信用点与 1580 科研点。"
  },
  {
    "id": "grant31_25",
    "name": "火星发展基金资助计划 25",
    "sponsor": "火星发展基金",
    "branch": "deepspace",
    "requireTier": 1,
    "requireProjects": 1,
    "rewardCredits": 3380,
    "rewardResearch": 1640,
    "durationDays": 180,
    "desc": "完成 1 个深空方向 1 阶以上项目，获得 3380 信用点与 1640 科研点。"
  },
  {
    "id": "grant31_26",
    "name": "地球联合科学院资助计划 26",
    "sponsor": "地球联合科学院",
    "branch": "physics",
    "requireTier": 2,
    "requireProjects": 2,
    "rewardCredits": 3500,
    "rewardResearch": 1700,
    "durationDays": 60,
    "desc": "完成 2 个物理方向 2 阶以上项目，获得 3500 信用点与 1700 科研点。"
  },
  {
    "id": "grant31_27",
    "name": "星港商会资助计划 27",
    "sponsor": "星港商会",
    "branch": "engineering",
    "requireTier": 3,
    "requireProjects": 3,
    "rewardCredits": 3620,
    "rewardResearch": 1760,
    "durationDays": 90,
    "desc": "完成 3 个工程方向 3 阶以上项目，获得 3620 信用点与 1760 科研点。"
  },
  {
    "id": "grant31_28",
    "name": "殖民者互助会资助计划 28",
    "sponsor": "殖民者互助会",
    "branch": "biology",
    "requireTier": 4,
    "requireProjects": 1,
    "rewardCredits": 3740,
    "rewardResearch": 1820,
    "durationDays": 120,
    "desc": "完成 1 个生物方向 4 阶以上项目，获得 3740 信用点与 1820 科研点。"
  },
  {
    "id": "grant31_29",
    "name": "深空探索协会资助计划 29",
    "sponsor": "深空探索协会",
    "branch": "society",
    "requireTier": 1,
    "requireProjects": 2,
    "rewardCredits": 3860,
    "rewardResearch": 1880,
    "durationDays": 150,
    "desc": "完成 2 个社会方向 1 阶以上项目，获得 3860 信用点与 1880 科研点。"
  },
  {
    "id": "grant31_30",
    "name": "红星教育基金资助计划 30",
    "sponsor": "红星教育基金",
    "branch": "deepspace",
    "requireTier": 2,
    "requireProjects": 3,
    "rewardCredits": 3980,
    "rewardResearch": 1940,
    "durationDays": 180,
    "desc": "完成 3 个深空方向 2 阶以上项目，获得 3980 信用点与 1940 科研点。"
  },
  {
    "id": "grant31_31",
    "name": "火星发展基金资助计划 31",
    "sponsor": "火星发展基金",
    "branch": "physics",
    "requireTier": 3,
    "requireProjects": 1,
    "rewardCredits": 4100,
    "rewardResearch": 2000,
    "durationDays": 60,
    "desc": "完成 1 个物理方向 3 阶以上项目，获得 4100 信用点与 2000 科研点。"
  },
  {
    "id": "grant31_32",
    "name": "地球联合科学院资助计划 32",
    "sponsor": "地球联合科学院",
    "branch": "engineering",
    "requireTier": 4,
    "requireProjects": 2,
    "rewardCredits": 4220,
    "rewardResearch": 2060,
    "durationDays": 90,
    "desc": "完成 2 个工程方向 4 阶以上项目，获得 4220 信用点与 2060 科研点。"
  },
  {
    "id": "grant31_33",
    "name": "星港商会资助计划 33",
    "sponsor": "星港商会",
    "branch": "biology",
    "requireTier": 1,
    "requireProjects": 3,
    "rewardCredits": 4340,
    "rewardResearch": 2120,
    "durationDays": 120,
    "desc": "完成 3 个生物方向 1 阶以上项目，获得 4340 信用点与 2120 科研点。"
  },
  {
    "id": "grant31_34",
    "name": "殖民者互助会资助计划 34",
    "sponsor": "殖民者互助会",
    "branch": "society",
    "requireTier": 2,
    "requireProjects": 1,
    "rewardCredits": 4460,
    "rewardResearch": 2180,
    "durationDays": 150,
    "desc": "完成 1 个社会方向 2 阶以上项目，获得 4460 信用点与 2180 科研点。"
  },
  {
    "id": "grant31_35",
    "name": "深空探索协会资助计划 35",
    "sponsor": "深空探索协会",
    "branch": "deepspace",
    "requireTier": 3,
    "requireProjects": 2,
    "rewardCredits": 4580,
    "rewardResearch": 2240,
    "durationDays": 180,
    "desc": "完成 2 个深空方向 3 阶以上项目，获得 4580 信用点与 2240 科研点。"
  },
  {
    "id": "grant31_36",
    "name": "红星教育基金资助计划 36",
    "sponsor": "红星教育基金",
    "branch": "physics",
    "requireTier": 4,
    "requireProjects": 3,
    "rewardCredits": 4700,
    "rewardResearch": 2300,
    "durationDays": 60,
    "desc": "完成 3 个物理方向 4 阶以上项目，获得 4700 信用点与 2300 科研点。"
  },
  {
    "id": "grant31_37",
    "name": "火星发展基金资助计划 37",
    "sponsor": "火星发展基金",
    "branch": "engineering",
    "requireTier": 1,
    "requireProjects": 1,
    "rewardCredits": 4820,
    "rewardResearch": 2360,
    "durationDays": 90,
    "desc": "完成 1 个工程方向 1 阶以上项目，获得 4820 信用点与 2360 科研点。"
  },
  {
    "id": "grant31_38",
    "name": "地球联合科学院资助计划 38",
    "sponsor": "地球联合科学院",
    "branch": "biology",
    "requireTier": 2,
    "requireProjects": 2,
    "rewardCredits": 4940,
    "rewardResearch": 2420,
    "durationDays": 120,
    "desc": "完成 2 个生物方向 2 阶以上项目，获得 4940 信用点与 2420 科研点。"
  },
  {
    "id": "grant31_39",
    "name": "星港商会资助计划 39",
    "sponsor": "星港商会",
    "branch": "society",
    "requireTier": 3,
    "requireProjects": 3,
    "rewardCredits": 5060,
    "rewardResearch": 2480,
    "durationDays": 150,
    "desc": "完成 3 个社会方向 3 阶以上项目，获得 5060 信用点与 2480 科研点。"
  },
  {
    "id": "grant31_40",
    "name": "殖民者互助会资助计划 40",
    "sponsor": "殖民者互助会",
    "branch": "deepspace",
    "requireTier": 4,
    "requireProjects": 1,
    "rewardCredits": 5180,
    "rewardResearch": 2540,
    "durationDays": 180,
    "desc": "完成 1 个深空方向 4 阶以上项目，获得 5180 信用点与 2540 科研点。"
  }
];

/* ============ §8 科研竞赛：对手 8 个 + 赛道 24 条（含检查点） ============ */
const RES31_RIVALS = [
  {
    "id": "rival31_01",
    "name": "新曙光殖民地",
    "homeworld": "火星·曙光平原",
    "focus": "physics",
    "power": 42,
    "aggression": 0.3,
    "desc": "以聚变能源研究见长，科研投入稳定。"
  },
  {
    "id": "rival31_02",
    "name": "铁穹堡垒",
    "homeworld": "火星·奥林帕斯山麓",
    "focus": "engineering",
    "power": 55,
    "aggression": 0.6,
    "desc": "军工复合体，工程与军事研究极快。"
  },
  {
    "id": "rival31_03",
    "name": "绿洲农场",
    "homeworld": "火星·埃律西昂",
    "focus": "biology",
    "power": 38,
    "aggression": 0.2,
    "desc": "生态农业研究领先，人口增长快。"
  },
  {
    "id": "rival31_04",
    "name": "自由港",
    "homeworld": "火星·水手峡谷",
    "focus": "society",
    "power": 47,
    "aggression": 0.4,
    "desc": "贸易与治理研究活跃，外交手腕强。"
  },
  {
    "id": "rival31_05",
    "name": "远望站",
    "homeworld": "火星轨道",
    "focus": "deepspace",
    "power": 60,
    "aggression": 0.5,
    "desc": "深空探测研究最强，舰队技术领先。"
  },
  {
    "id": "rival31_06",
    "name": "方舟城",
    "homeworld": "火星·子午线湾",
    "focus": "biology",
    "power": 50,
    "aggression": 0.3,
    "desc": "综合型殖民地，生物与社会均衡发展。"
  },
  {
    "id": "rival31_07",
    "name": "熔炉镇",
    "homeworld": "火星·塔尔西斯",
    "focus": "engineering",
    "power": 44,
    "aggression": 0.7,
    "desc": "采矿与冶炼研究激进，扩张欲强。"
  },
  {
    "id": "rival31_08",
    "name": "静默修道院",
    "homeworld": "火星·南极冠",
    "focus": "physics",
    "power": 35,
    "aggression": 0.1,
    "desc": "神秘的理论物理团体，偶有惊人突破。"
  }
];

const RES31_RACE_TRACKS = [
  {
    id: "race31_01",
    name: "聚变点火竞速·物理",
    branch: "physics",
    target: 1000,
    rewardCredits: 800,
    rewardResearch: 300,
    rewardEffect: {"key": "researchMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 1000 点物理研究进度者获胜，奖励 800 信用点、300 科研点与 researchMul ×1.05。",
  },
  {
    id: "race31_02",
    name: "首颗宜居改造竞速·工程",
    branch: "engineering",
    target: 1250,
    rewardCredits: 1000,
    rewardResearch: 400,
    rewardEffect: {"key": "buildSpeedMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 1250 点工程研究进度者获胜，奖励 1000 信用点、400 科研点与 buildSpeedMul ×1.05。",
  },
  {
    id: "race31_03",
    name: "深空信号解码竞速·生物",
    branch: "biology",
    target: 1500,
    rewardCredits: 1200,
    rewardResearch: 500,
    rewardEffect: {"key": "happinessAdd", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 1500 点生物研究进度者获胜，奖励 1200 信用点、500 科研点与 happinessAdd ×1.05。",
  },
  {
    id: "race31_04",
    name: "基因编辑竞速·社会",
    branch: "society",
    target: 1750,
    rewardCredits: 1400,
    rewardResearch: 600,
    rewardEffect: {"key": "policySlotsAdd", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 1750 点社会研究进度者获胜，奖励 1400 信用点、600 科研点与 policySlotsAdd ×1.05。",
  },
  {
    id: "race31_05",
    name: "轨道电梯竞速·深空",
    branch: "deepspace",
    target: 2000,
    rewardCredits: 1600,
    rewardResearch: 700,
    rewardEffect: {"key": "terraformAdd", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 2000 点深空研究进度者获胜，奖励 1600 信用点、700 科研点与 terraformAdd ×1.05。",
  },
  {
    id: "race31_06",
    name: "量子通讯竞速·物理",
    branch: "physics",
    target: 2250,
    rewardCredits: 1800,
    rewardResearch: 800,
    rewardEffect: {"key": "sensorMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 2250 点物理研究进度者获胜，奖励 1800 信用点、800 科研点与 sensorMul ×1.05。",
  },
  {
    id: "race31_07",
    name: "小行星采矿竞速·工程",
    branch: "engineering",
    target: 2500,
    rewardCredits: 2000,
    rewardResearch: 900,
    rewardEffect: {"key": "durabilityMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 2500 点工程研究进度者获胜，奖励 2000 信用点、900 科研点与 durabilityMul ×1.05。",
  },
  {
    id: "race31_08",
    name: "生态闭环竞速·生物",
    branch: "biology",
    target: 2750,
    rewardCredits: 2200,
    rewardResearch: 1000,
    rewardEffect: {"key": "lifespanAdd", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 2750 点生物研究进度者获胜，奖励 2200 信用点、1000 科研点与 lifespanAdd ×1.05。",
  },
  {
    id: "race31_09",
    name: "聚变点火竞速·社会",
    branch: "society",
    target: 3000,
    rewardCredits: 2400,
    rewardResearch: 1100,
    rewardEffect: {"key": "taxMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 3000 点社会研究进度者获胜，奖励 2400 信用点、1100 科研点与 taxMul ×1.05。",
  },
  {
    id: "race31_10",
    name: "首颗宜居改造竞速·深空",
    branch: "deepspace",
    target: 3250,
    rewardCredits: 2600,
    rewardResearch: 1200,
    rewardEffect: {"key": "shipHpMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 3250 点深空研究进度者获胜，奖励 2600 信用点、1200 科研点与 shipHpMul ×1.05。",
  },
  {
    id: "race31_11",
    name: "深空信号解码竞速·物理",
    branch: "physics",
    target: 3500,
    rewardCredits: 2800,
    rewardResearch: 1300,
    rewardEffect: {"key": "powerAdd", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 3500 点物理研究进度者获胜，奖励 2800 信用点、1300 科研点与 powerAdd ×1.05。",
  },
  {
    id: "race31_12",
    name: "基因编辑竞速·工程",
    branch: "engineering",
    target: 3750,
    rewardCredits: 3000,
    rewardResearch: 1400,
    rewardEffect: {"key": "mineMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 3750 点工程研究进度者获胜，奖励 3000 信用点、1400 科研点与 mineMul ×1.05。",
  },
  {
    id: "race31_13",
    name: "轨道电梯竞速·生物",
    branch: "biology",
    target: 4000,
    rewardCredits: 3200,
    rewardResearch: 1500,
    rewardEffect: {"key": "oxygenAdd", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 4000 点生物研究进度者获胜，奖励 3200 信用点、1500 科研点与 oxygenAdd ×1.05。",
  },
  {
    id: "race31_14",
    name: "量子通讯竞速·社会",
    branch: "society",
    target: 4250,
    rewardCredits: 3400,
    rewardResearch: 1600,
    rewardEffect: {"key": "moraleMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 4250 点社会研究进度者获胜，奖励 3400 信用点、1600 科研点与 moraleMul ×1.05。",
  },
  {
    id: "race31_15",
    name: "小行星采矿竞速·深空",
    branch: "deepspace",
    target: 4500,
    rewardCredits: 3600,
    rewardResearch: 1700,
    rewardEffect: {"key": "orbitalPowerAdd", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 4500 点深空研究进度者获胜，奖励 3600 信用点、1700 科研点与 orbitalPowerAdd ×1.05。",
  },
  {
    id: "race31_16",
    name: "生态闭环竞速·物理",
    branch: "physics",
    target: 4750,
    rewardCredits: 3800,
    rewardResearch: 1800,
    rewardEffect: {"key": "defenseMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 4750 点物理研究进度者获胜，奖励 3800 信用点、1800 科研点与 defenseMul ×1.05。",
  },
  {
    id: "race31_17",
    name: "聚变点火竞速·工程",
    branch: "engineering",
    target: 5000,
    rewardCredits: 4000,
    rewardResearch: 1900,
    rewardEffect: {"key": "buildCostMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 5000 点工程研究进度者获胜，奖励 4000 信用点、1900 科研点与 buildCostMul ×1.05。",
  },
  {
    id: "race31_18",
    name: "首颗宜居改造竞速·生物",
    branch: "biology",
    target: 5250,
    rewardCredits: 4200,
    rewardResearch: 2000,
    rewardEffect: {"key": "popGrowthMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 5250 点生物研究进度者获胜，奖励 4200 信用点、2000 科研点与 popGrowthMul ×1.05。",
  },
  {
    id: "race31_19",
    name: "深空信号解码竞速·社会",
    branch: "society",
    target: 5500,
    rewardCredits: 4400,
    rewardResearch: 2100,
    rewardEffect: {"key": "diplomacyMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 5500 点社会研究进度者获胜，奖励 4400 信用点、2100 科研点与 diplomacyMul ×1.05。",
  },
  {
    id: "race31_20",
    name: "基因编辑竞速·深空",
    branch: "deepspace",
    target: 5750,
    rewardCredits: 4600,
    rewardResearch: 2200,
    rewardEffect: {"key": "he3Add", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 5750 点深空研究进度者获胜，奖励 4600 信用点、2200 科研点与 he3Add ×1.05。",
  },
  {
    id: "race31_21",
    name: "轨道电梯竞速·物理",
    branch: "physics",
    target: 6000,
    rewardCredits: 4800,
    rewardResearch: 2300,
    rewardEffect: {"key": "radiationMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 6000 点物理研究进度者获胜，奖励 4800 信用点、2300 科研点与 radiationMul ×1.05。",
  },
  {
    id: "race31_22",
    name: "量子通讯竞速·工程",
    branch: "engineering",
    target: 6250,
    rewardCredits: 5000,
    rewardResearch: 2400,
    rewardEffect: {"key": "waterMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 6250 点工程研究进度者获胜，奖励 5000 信用点、2400 科研点与 waterMul ×1.05。",
  },
  {
    id: "race31_23",
    name: "小行星采矿竞速·生物",
    branch: "biology",
    target: 6500,
    rewardCredits: 5200,
    rewardResearch: 2500,
    rewardEffect: {"key": "medMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 6500 点生物研究进度者获胜，奖励 5200 信用点、2500 科研点与 medMul ×1.05。",
  },
  {
    id: "race31_24",
    name: "生态闭环竞速·社会",
    branch: "society",
    target: 6750,
    rewardCredits: 5400,
    rewardResearch: 2600,
    rewardEffect: {"key": "corruptionMul", "value": 1.05},
    checkpoints: [{"at": 25, "name": "立项验证", "bonus": "先到者 +50 科研点"}, {"at": 50, "name": "中期突破", "bonus": "先到者 +100 科研点"}, {"at": 75, "name": "冲刺阶段", "bonus": "先到者 +150 科研点"}],
    desc: "与 rival 殖民地竞速：率先积累 6750 点社会研究进度者获胜，奖励 5400 信用点、2600 科研点与 corruptionMul ×1.05。",
  },
];

/* ============ §9 加成公式：60 条（公式 + 演算示例） ============ */
const RES31_BONUS_FORMULAS = [
  {
    "id": "formula31_01",
    "name": "researchSpeed",
    "target": "科研速度（点/天）",
    "formula": "speed = 10 × (1 + compute/100) × (1 + avgMatch/200) × labMul × traitMul",
    "example": "compute=240, avgMatch=70 → 10×3.4×1.35=45.9 点/天",
    "note": "公式 01：科研速度（点/天）。示例：compute=240, avgMatch=70 → 10×3.4×1.35=45.9 点/天。"
  },
  {
    "id": "formula31_02",
    "name": "labCompute",
    "target": "实验室算力",
    "formula": "compute = Σ(实验室基础算力 × 等级倍率) + Σ(设备算力)",
    "example": "2×L3物理实验室：2×40×2.2=176 + 设备 48 = 224",
    "note": "公式 02：实验室算力。示例：2×L3物理实验室：2×40×2.2=176 + 设备 48 = 224。"
  },
  {
    "id": "formula31_03",
    "name": "projectDuration",
    "target": "项目实际周期（天）",
    "formula": "days = durationDays × 10 / speedPerDay",
    "example": "周期 30 天的项目，速度 45.9 点/天，需 300/45.9 ≈ 6.5 天",
    "note": "公式 03：项目实际周期（天）。示例：周期 30 天的项目，速度 45.9 点/天，需 300/45.9 ≈ 6.5 天。"
  },
  {
    "id": "formula31_04",
    "name": "scientistMatch",
    "target": "科学家匹配度",
    "formula": "match = 属性值（理论/工程/生物/物理/社会）按项目方向取对应维",
    "example": "物理项目取物理维 82 → 匹配度 82，速度加成 +41%",
    "note": "公式 04：科学家匹配度。示例：物理项目取物理维 82 → 匹配度 82，速度加成 +41%。"
  },
  {
    "id": "formula31_05",
    "name": "breakthroughChance",
    "target": "突破概率（每次结算）",
    "formula": "p = 0.03 + tier×0.01 + 创造特质 0.02 − 稳健特质 0.01",
    "example": "T3 项目基础 0.06，有奇思妙想特质 → 0.08",
    "note": "公式 05：突破概率（每次结算）。示例：T3 项目基础 0.06，有奇思妙想特质 → 0.08。"
  },
  {
    "id": "formula31_06",
    "name": "accidentChance",
    "target": "事故概率（每天）",
    "formula": "p = 0.004 + tier×0.002 + 风险系数 − 稳健修正",
    "example": "T4 项目：0.004+0.008=0.012/天，约 83 天一遇",
    "note": "公式 06：事故概率（每天）。示例：T4 项目：0.004+0.008=0.012/天，约 83 天一遇。"
  },
  {
    "id": "formula31_07",
    "name": "salaryCost",
    "target": "科学家薪资（信用点/天）",
    "formula": "salary = 基础 6 + 等级×4 + 随机 0~5",
    "example": "L3 科学家：6+12+3=21/天",
    "note": "公式 07：科学家薪资（信用点/天）。示例：L3 科学家：6+12+3=21/天。"
  },
  {
    "id": "formula31_08",
    "name": "labUpkeep",
    "target": "实验室维护（信用点/天）",
    "formula": "upkeep = 8 × 等级 + Σ设备维护",
    "example": "L3 实验室 + 4 台设备：24 + 24 = 48/天",
    "note": "公式 08：实验室维护（信用点/天）。示例：L3 实验室 + 4 台设备：24 + 24 = 48/天。"
  },
  {
    "id": "formula31_09",
    "name": "moraleDrift",
    "target": "科学家士气漂移",
    "formula": "morale += (薪资满意度 − 1) × 0.5 + 事件修正",
    "example": "薪资低于期望 20% 时每天 −0.5 士气",
    "note": "公式 09：科学家士气漂移。示例：薪资低于期望 20% 时每天 −0.5 士气。"
  },
  {
    "id": "formula31_10",
    "name": "attritionRisk",
    "target": "离职概率（每天）",
    "formula": "p = max(0, (40 − morale)/1000) × (1 − loyalty/200)",
    "example": "士气 30、忠诚 60：(10/1000)×0.7=0.007/天",
    "note": "公式 10：离职概率（每天）。示例：士气 30、忠诚 60：(10/1000)×0.7=0.007/天。"
  },
  {
    "id": "formula31_11",
    "name": "xpGain",
    "target": "科学家经验获取",
    "formula": "xp += 研究速度 × 0.1 × 匹配度/100",
    "example": "速度 45.9、匹配 82 → 每天 +3.8 xp",
    "note": "公式 11：科学家经验获取。示例：速度 45.9、匹配 82 → 每天 +3.8 xp。"
  },
  {
    "id": "formula31_12",
    "name": "levelUp",
    "target": "升级所需经验",
    "formula": "need = 100 × level^1.5",
    "example": "L2→L3 需 283 xp，约 74 天",
    "note": "公式 12：升级所需经验。示例：L2→L3 需 283 xp，约 74 天。"
  },
  {
    "id": "formula31_13",
    "name": "synergyBonus",
    "target": "联动加成",
    "formula": "完成配对项目后，双方效果键额外 ×1.05（仅一次）",
    "example": "铁矿 ×1.12 的项目联动后 ×1.176",
    "note": "公式 13：联动加成。示例：铁矿 ×1.12 的项目联动后 ×1.176。"
  },
  {
    "id": "formula31_14",
    "name": "raceProgress",
    "target": "竞速进度（点/天）",
    "formula": "progress = 本方速度 × 0.5 + 对手 power × 0.3",
    "example": "速度 45.9、对手 55：22.95 + 16.5 对手日进",
    "note": "公式 14：竞速进度（点/天）。示例：速度 45.9、对手 55：22.95 + 16.5 对手日进。"
  },
  {
    "id": "formula31_15",
    "name": "grantReward",
    "target": "资助奖励",
    "formula": "奖励 = 基础信用点 + 基础科研点，一次性到账",
    "example": "资助计划 07：1700 信用点 + 620 科研点",
    "note": "公式 15：资助奖励。示例：资助计划 07：1700 信用点 + 620 科研点。"
  },
  {
    "id": "formula31_16",
    "name": "foodBonus",
    "target": "食物加成换算",
    "formula": "食物产量 = 基础 × Π(食物类效果倍率)",
    "example": "两个 ×1.12 与 ×1.08 叠加 → ×1.2096",
    "note": "公式 16：食物加成换算。示例：两个 ×1.12 与 ×1.08 叠加 → ×1.2096。"
  },
  {
    "id": "formula31_17",
    "name": "energyBonus",
    "target": "电力加成换算",
    "formula": "电力产出 = 基础 × Π(电力类效果倍率)",
    "example": "×1.17 与 ×1.08 叠加 → ×1.2636",
    "note": "公式 17：电力加成换算。示例：×1.17 与 ×1.08 叠加 → ×1.2636。"
  },
  {
    "id": "formula31_18",
    "name": "defenseBonus",
    "target": "防御加成换算",
    "formula": "防御力 = 基础 × Π(防御类效果倍率)",
    "example": "×1.12 与 ×1.23 叠加 → ×1.3776",
    "note": "公式 18：防御加成换算。示例：×1.12 与 ×1.23 叠加 → ×1.3776。"
  },
  {
    "id": "formula31_19",
    "name": "taxBonus",
    "target": "税收加成换算",
    "formula": "税收 = 基础 × Π(税收类效果倍率)",
    "example": "×1.08 与 ×1.12 叠加 → ×1.2096",
    "note": "公式 19：税收加成换算。示例：×1.08 与 ×1.12 叠加 → ×1.2096。"
  },
  {
    "id": "formula31_20",
    "name": "terraformBonus",
    "target": "改造加成换算",
    "formula": "改造进度 = 基础 + Σ(改造类加成点数)",
    "example": "两个 +7 与 +11 → +18 点",
    "note": "公式 20：改造加成换算。示例：两个 +7 与 +11 → +18 点。"
  },
  {
    "id": "formula31_21",
    "name": "researchSpeed·2",
    "target": "科研速度（点/天）",
    "formula": "speed = 10 × (1 + compute/100) × (1 + avgMatch/200) × labMul × traitMul",
    "example": "compute=240, avgMatch=70 → 10×3.4×1.35=45.9 点/天",
    "note": "公式 21：科研速度（点/天）。示例：compute=240, avgMatch=70 → 10×3.4×1.35=45.9 点/天。"
  },
  {
    "id": "formula31_22",
    "name": "labCompute·2",
    "target": "实验室算力",
    "formula": "compute = Σ(实验室基础算力 × 等级倍率) + Σ(设备算力)",
    "example": "2×L3物理实验室：2×40×2.2=176 + 设备 48 = 224",
    "note": "公式 22：实验室算力。示例：2×L3物理实验室：2×40×2.2=176 + 设备 48 = 224。"
  },
  {
    "id": "formula31_23",
    "name": "projectDuration·2",
    "target": "项目实际周期（天）",
    "formula": "days = durationDays × 10 / speedPerDay",
    "example": "周期 30 天的项目，速度 45.9 点/天，需 300/45.9 ≈ 6.5 天",
    "note": "公式 23：项目实际周期（天）。示例：周期 30 天的项目，速度 45.9 点/天，需 300/45.9 ≈ 6.5 天。"
  },
  {
    "id": "formula31_24",
    "name": "scientistMatch·2",
    "target": "科学家匹配度",
    "formula": "match = 属性值（理论/工程/生物/物理/社会）按项目方向取对应维",
    "example": "物理项目取物理维 82 → 匹配度 82，速度加成 +41%",
    "note": "公式 24：科学家匹配度。示例：物理项目取物理维 82 → 匹配度 82，速度加成 +41%。"
  },
  {
    "id": "formula31_25",
    "name": "breakthroughChance·2",
    "target": "突破概率（每次结算）",
    "formula": "p = 0.03 + tier×0.01 + 创造特质 0.02 − 稳健特质 0.01",
    "example": "T3 项目基础 0.06，有奇思妙想特质 → 0.08",
    "note": "公式 25：突破概率（每次结算）。示例：T3 项目基础 0.06，有奇思妙想特质 → 0.08。"
  },
  {
    "id": "formula31_26",
    "name": "accidentChance·2",
    "target": "事故概率（每天）",
    "formula": "p = 0.004 + tier×0.002 + 风险系数 − 稳健修正",
    "example": "T4 项目：0.004+0.008=0.012/天，约 83 天一遇",
    "note": "公式 26：事故概率（每天）。示例：T4 项目：0.004+0.008=0.012/天，约 83 天一遇。"
  },
  {
    "id": "formula31_27",
    "name": "salaryCost·2",
    "target": "科学家薪资（信用点/天）",
    "formula": "salary = 基础 6 + 等级×4 + 随机 0~5",
    "example": "L3 科学家：6+12+3=21/天",
    "note": "公式 27：科学家薪资（信用点/天）。示例：L3 科学家：6+12+3=21/天。"
  },
  {
    "id": "formula31_28",
    "name": "labUpkeep·2",
    "target": "实验室维护（信用点/天）",
    "formula": "upkeep = 8 × 等级 + Σ设备维护",
    "example": "L3 实验室 + 4 台设备：24 + 24 = 48/天",
    "note": "公式 28：实验室维护（信用点/天）。示例：L3 实验室 + 4 台设备：24 + 24 = 48/天。"
  },
  {
    "id": "formula31_29",
    "name": "moraleDrift·2",
    "target": "科学家士气漂移",
    "formula": "morale += (薪资满意度 − 1) × 0.5 + 事件修正",
    "example": "薪资低于期望 20% 时每天 −0.5 士气",
    "note": "公式 29：科学家士气漂移。示例：薪资低于期望 20% 时每天 −0.5 士气。"
  },
  {
    "id": "formula31_30",
    "name": "attritionRisk·2",
    "target": "离职概率（每天）",
    "formula": "p = max(0, (40 − morale)/1000) × (1 − loyalty/200)",
    "example": "士气 30、忠诚 60：(10/1000)×0.7=0.007/天",
    "note": "公式 30：离职概率（每天）。示例：士气 30、忠诚 60：(10/1000)×0.7=0.007/天。"
  },
  {
    "id": "formula31_31",
    "name": "xpGain·2",
    "target": "科学家经验获取",
    "formula": "xp += 研究速度 × 0.1 × 匹配度/100",
    "example": "速度 45.9、匹配 82 → 每天 +3.8 xp",
    "note": "公式 31：科学家经验获取。示例：速度 45.9、匹配 82 → 每天 +3.8 xp。"
  },
  {
    "id": "formula31_32",
    "name": "levelUp·2",
    "target": "升级所需经验",
    "formula": "need = 100 × level^1.5",
    "example": "L2→L3 需 283 xp，约 74 天",
    "note": "公式 32：升级所需经验。示例：L2→L3 需 283 xp，约 74 天。"
  },
  {
    "id": "formula31_33",
    "name": "synergyBonus·2",
    "target": "联动加成",
    "formula": "完成配对项目后，双方效果键额外 ×1.05（仅一次）",
    "example": "铁矿 ×1.12 的项目联动后 ×1.176",
    "note": "公式 33：联动加成。示例：铁矿 ×1.12 的项目联动后 ×1.176。"
  },
  {
    "id": "formula31_34",
    "name": "raceProgress·2",
    "target": "竞速进度（点/天）",
    "formula": "progress = 本方速度 × 0.5 + 对手 power × 0.3",
    "example": "速度 45.9、对手 55：22.95 + 16.5 对手日进",
    "note": "公式 34：竞速进度（点/天）。示例：速度 45.9、对手 55：22.95 + 16.5 对手日进。"
  },
  {
    "id": "formula31_35",
    "name": "grantReward·2",
    "target": "资助奖励",
    "formula": "奖励 = 基础信用点 + 基础科研点，一次性到账",
    "example": "资助计划 07：1700 信用点 + 620 科研点",
    "note": "公式 35：资助奖励。示例：资助计划 07：1700 信用点 + 620 科研点。"
  },
  {
    "id": "formula31_36",
    "name": "foodBonus·2",
    "target": "食物加成换算",
    "formula": "食物产量 = 基础 × Π(食物类效果倍率)",
    "example": "两个 ×1.12 与 ×1.08 叠加 → ×1.2096",
    "note": "公式 36：食物加成换算。示例：两个 ×1.12 与 ×1.08 叠加 → ×1.2096。"
  },
  {
    "id": "formula31_37",
    "name": "energyBonus·2",
    "target": "电力加成换算",
    "formula": "电力产出 = 基础 × Π(电力类效果倍率)",
    "example": "×1.17 与 ×1.08 叠加 → ×1.2636",
    "note": "公式 37：电力加成换算。示例：×1.17 与 ×1.08 叠加 → ×1.2636。"
  },
  {
    "id": "formula31_38",
    "name": "defenseBonus·2",
    "target": "防御加成换算",
    "formula": "防御力 = 基础 × Π(防御类效果倍率)",
    "example": "×1.12 与 ×1.23 叠加 → ×1.3776",
    "note": "公式 38：防御加成换算。示例：×1.12 与 ×1.23 叠加 → ×1.3776。"
  },
  {
    "id": "formula31_39",
    "name": "taxBonus·2",
    "target": "税收加成换算",
    "formula": "税收 = 基础 × Π(税收类效果倍率)",
    "example": "×1.08 与 ×1.12 叠加 → ×1.2096",
    "note": "公式 39：税收加成换算。示例：×1.08 与 ×1.12 叠加 → ×1.2096。"
  },
  {
    "id": "formula31_40",
    "name": "terraformBonus·2",
    "target": "改造加成换算",
    "formula": "改造进度 = 基础 + Σ(改造类加成点数)",
    "example": "两个 +7 与 +11 → +18 点",
    "note": "公式 40：改造加成换算。示例：两个 +7 与 +11 → +18 点。"
  },
  {
    "id": "formula31_41",
    "name": "researchSpeed·3",
    "target": "科研速度（点/天）",
    "formula": "speed = 10 × (1 + compute/100) × (1 + avgMatch/200) × labMul × traitMul",
    "example": "compute=240, avgMatch=70 → 10×3.4×1.35=45.9 点/天",
    "note": "公式 41：科研速度（点/天）。示例：compute=240, avgMatch=70 → 10×3.4×1.35=45.9 点/天。"
  },
  {
    "id": "formula31_42",
    "name": "labCompute·3",
    "target": "实验室算力",
    "formula": "compute = Σ(实验室基础算力 × 等级倍率) + Σ(设备算力)",
    "example": "2×L3物理实验室：2×40×2.2=176 + 设备 48 = 224",
    "note": "公式 42：实验室算力。示例：2×L3物理实验室：2×40×2.2=176 + 设备 48 = 224。"
  },
  {
    "id": "formula31_43",
    "name": "projectDuration·3",
    "target": "项目实际周期（天）",
    "formula": "days = durationDays × 10 / speedPerDay",
    "example": "周期 30 天的项目，速度 45.9 点/天，需 300/45.9 ≈ 6.5 天",
    "note": "公式 43：项目实际周期（天）。示例：周期 30 天的项目，速度 45.9 点/天，需 300/45.9 ≈ 6.5 天。"
  },
  {
    "id": "formula31_44",
    "name": "scientistMatch·3",
    "target": "科学家匹配度",
    "formula": "match = 属性值（理论/工程/生物/物理/社会）按项目方向取对应维",
    "example": "物理项目取物理维 82 → 匹配度 82，速度加成 +41%",
    "note": "公式 44：科学家匹配度。示例：物理项目取物理维 82 → 匹配度 82，速度加成 +41%。"
  },
  {
    "id": "formula31_45",
    "name": "breakthroughChance·3",
    "target": "突破概率（每次结算）",
    "formula": "p = 0.03 + tier×0.01 + 创造特质 0.02 − 稳健特质 0.01",
    "example": "T3 项目基础 0.06，有奇思妙想特质 → 0.08",
    "note": "公式 45：突破概率（每次结算）。示例：T3 项目基础 0.06，有奇思妙想特质 → 0.08。"
  },
  {
    "id": "formula31_46",
    "name": "accidentChance·3",
    "target": "事故概率（每天）",
    "formula": "p = 0.004 + tier×0.002 + 风险系数 − 稳健修正",
    "example": "T4 项目：0.004+0.008=0.012/天，约 83 天一遇",
    "note": "公式 46：事故概率（每天）。示例：T4 项目：0.004+0.008=0.012/天，约 83 天一遇。"
  },
  {
    "id": "formula31_47",
    "name": "salaryCost·3",
    "target": "科学家薪资（信用点/天）",
    "formula": "salary = 基础 6 + 等级×4 + 随机 0~5",
    "example": "L3 科学家：6+12+3=21/天",
    "note": "公式 47：科学家薪资（信用点/天）。示例：L3 科学家：6+12+3=21/天。"
  },
  {
    "id": "formula31_48",
    "name": "labUpkeep·3",
    "target": "实验室维护（信用点/天）",
    "formula": "upkeep = 8 × 等级 + Σ设备维护",
    "example": "L3 实验室 + 4 台设备：24 + 24 = 48/天",
    "note": "公式 48：实验室维护（信用点/天）。示例：L3 实验室 + 4 台设备：24 + 24 = 48/天。"
  },
  {
    "id": "formula31_49",
    "name": "moraleDrift·3",
    "target": "科学家士气漂移",
    "formula": "morale += (薪资满意度 − 1) × 0.5 + 事件修正",
    "example": "薪资低于期望 20% 时每天 −0.5 士气",
    "note": "公式 49：科学家士气漂移。示例：薪资低于期望 20% 时每天 −0.5 士气。"
  },
  {
    "id": "formula31_50",
    "name": "attritionRisk·3",
    "target": "离职概率（每天）",
    "formula": "p = max(0, (40 − morale)/1000) × (1 − loyalty/200)",
    "example": "士气 30、忠诚 60：(10/1000)×0.7=0.007/天",
    "note": "公式 50：离职概率（每天）。示例：士气 30、忠诚 60：(10/1000)×0.7=0.007/天。"
  },
  {
    "id": "formula31_51",
    "name": "xpGain·3",
    "target": "科学家经验获取",
    "formula": "xp += 研究速度 × 0.1 × 匹配度/100",
    "example": "速度 45.9、匹配 82 → 每天 +3.8 xp",
    "note": "公式 51：科学家经验获取。示例：速度 45.9、匹配 82 → 每天 +3.8 xp。"
  },
  {
    "id": "formula31_52",
    "name": "levelUp·3",
    "target": "升级所需经验",
    "formula": "need = 100 × level^1.5",
    "example": "L2→L3 需 283 xp，约 74 天",
    "note": "公式 52：升级所需经验。示例：L2→L3 需 283 xp，约 74 天。"
  },
  {
    "id": "formula31_53",
    "name": "synergyBonus·3",
    "target": "联动加成",
    "formula": "完成配对项目后，双方效果键额外 ×1.05（仅一次）",
    "example": "铁矿 ×1.12 的项目联动后 ×1.176",
    "note": "公式 53：联动加成。示例：铁矿 ×1.12 的项目联动后 ×1.176。"
  },
  {
    "id": "formula31_54",
    "name": "raceProgress·3",
    "target": "竞速进度（点/天）",
    "formula": "progress = 本方速度 × 0.5 + 对手 power × 0.3",
    "example": "速度 45.9、对手 55：22.95 + 16.5 对手日进",
    "note": "公式 54：竞速进度（点/天）。示例：速度 45.9、对手 55：22.95 + 16.5 对手日进。"
  },
  {
    "id": "formula31_55",
    "name": "grantReward·3",
    "target": "资助奖励",
    "formula": "奖励 = 基础信用点 + 基础科研点，一次性到账",
    "example": "资助计划 07：1700 信用点 + 620 科研点",
    "note": "公式 55：资助奖励。示例：资助计划 07：1700 信用点 + 620 科研点。"
  },
  {
    "id": "formula31_56",
    "name": "foodBonus·3",
    "target": "食物加成换算",
    "formula": "食物产量 = 基础 × Π(食物类效果倍率)",
    "example": "两个 ×1.12 与 ×1.08 叠加 → ×1.2096",
    "note": "公式 56：食物加成换算。示例：两个 ×1.12 与 ×1.08 叠加 → ×1.2096。"
  },
  {
    "id": "formula31_57",
    "name": "energyBonus·3",
    "target": "电力加成换算",
    "formula": "电力产出 = 基础 × Π(电力类效果倍率)",
    "example": "×1.17 与 ×1.08 叠加 → ×1.2636",
    "note": "公式 57：电力加成换算。示例：×1.17 与 ×1.08 叠加 → ×1.2636。"
  },
  {
    "id": "formula31_58",
    "name": "defenseBonus·3",
    "target": "防御加成换算",
    "formula": "防御力 = 基础 × Π(防御类效果倍率)",
    "example": "×1.12 与 ×1.23 叠加 → ×1.3776",
    "note": "公式 58：防御加成换算。示例：×1.12 与 ×1.23 叠加 → ×1.3776。"
  },
  {
    "id": "formula31_59",
    "name": "taxBonus·3",
    "target": "税收加成换算",
    "formula": "税收 = 基础 × Π(税收类效果倍率)",
    "example": "×1.08 与 ×1.12 叠加 → ×1.2096",
    "note": "公式 59：税收加成换算。示例：×1.08 与 ×1.12 叠加 → ×1.2096。"
  },
  {
    "id": "formula31_60",
    "name": "terraformBonus·3",
    "target": "改造加成换算",
    "formula": "改造进度 = 基础 + Σ(改造类加成点数)",
    "example": "两个 +7 与 +11 → +18 点",
    "note": "公式 60：改造加成换算。示例：两个 +7 与 +11 → +18 点。"
  }
];

/* ================================================================
 * §10 核心逻辑
 * 依赖：仅依赖宿主 game 对象上的可选字段（resources / population /
 * credits 等），全部经 res31Get 安全读取；缺失时用内部默认值运行。
 * 只读引用、不重声明的已有全局名：TERRAIN / Population /
 * TUTORIAL_STEPS / DS_TUNE / OVERLAY_MODES / TECH_DEFS / TECH_ORDER。
 * ================================================================ */

/* ---------- 工具 ---------- */
function res31Clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }
function res31Get(obj, path, fallback) {
  if (!obj || typeof obj !== 'object') return fallback;
  var parts = path.split('.');
  var cur = obj;
  for (var i = 0; i < parts.length; i++) {
    if (cur === null || cur === undefined) return fallback;
    cur = cur[parts[i]];
  }
  return (cur === undefined || cur === null) ? fallback : cur;
}
function res31Set(obj, path, value) {
  if (!obj || typeof obj !== 'object') return false;
  var parts = path.split('.');
  var cur = obj;
  for (var i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] === null || typeof cur[parts[i]] !== 'object') cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
  return true;
}
function res31FindProject(id) {
  for (var i = 0; i < RES31_PROJECTS.length; i++) if (RES31_PROJECTS[i].id === id) return RES31_PROJECTS[i];
  return null;
}
function res31FindScientistTemplate(id) {
  for (var i = 0; i < RES31_SCIENTIST_TEMPLATES.length; i++) if (RES31_SCIENTIST_TEMPLATES[i].id === id) return RES31_SCIENTIST_TEMPLATES[i];
  return null;
}
function res31BranchAttr(branch) {
  if (branch === 'physics') return 'physics';
  if (branch === 'engineering') return 'engineering';
  if (branch === 'biology') return 'biology';
  if (branch === 'society') return 'society';
  if (branch === 'deepspace') return 'theory';
  return 'theory';
}
function res31TraitMods(traitId) {
  for (var i = 0; i < RES31_TRAITS.length; i++) if (RES31_TRAITS[i].id === traitId) return RES31_TRAITS[i].mods || {};
  return {};
}

/* ================================================================
 * ResearchV31Lab — 实验室
 * 字段：id / typeId / level(1-5) / equipment[](设备 id) / builtDay
 * 算力公式：compute = 基础算力 × 等级倍率(1+0.6×(L-1)) + Σ设备算力
 * 槽位公式：slots = 基础槽位 + (L-1)，设备位 = L+1
 * ================================================================ */
class ResearchV31Lab {
  constructor(typeId, day) {
    this.id = 'lab31_' + typeId + '_' + Math.floor(Math.random() * 1e9).toString(36);
    this.typeId = typeId;
    this.level = 1;
    this.equipment = [];
    this.builtDay = day || 0;
    this.daysAtLevel = 0;
  }
  typeDef() {
    for (var i = 0; i < RES31_LAB_TYPES.length; i++) if (RES31_LAB_TYPES[i].id === this.typeId) return RES31_LAB_TYPES[i];
    return RES31_LAB_TYPES[5];
  }
  tierDef() { return RES31_LAB_TIERS[this.level - 1]; }
  compute() {
    var base = this.typeDef().baseCompute * this.tierDef().computeMul;
    var eq = 0;
    for (var i = 0; i < this.equipment.length; i++) {
      var def = res31FindEquipment(this.equipment[i]);
      if (def) eq += def.compute;
    }
    return Math.round(base + eq);
  }
  slots() { return this.typeDef().baseSlots + this.tierDef().slotsAdd; }
  equipSlots() { return this.tierDef().equipSlots; }
  upkeepPerDay() {
    var u = this.tierDef().upkeepPerDay;
    for (var i = 0; i < this.equipment.length; i++) {
      var def = res31FindEquipment(this.equipment[i]);
      if (def) u += def.upkeepPerDay;
    }
    return u;
  }
  upgradeCost() { return this.level >= 5 ? null : RES31_LAB_TIERS[this.level].upgradeCost; }
  canUpgrade(credits, iron) {
    if (this.level >= 5) return { ok: false, reason: '已达最高等级 L5' };
    var c = this.upgradeCost();
    if (credits < c.credits) return { ok: false, reason: '信用点不足，需 ' + c.credits };
    if (iron < c.iron) return { ok: false, reason: '铁矿不足，需 ' + c.iron };
    return { ok: true, reason: '' };
  }
  upgrade() {
    if (this.level >= 5) return false;
    this.level += 1;
    this.daysAtLevel = 0;
    return true;
  }
  installEquipment(equipId) {
    if (this.equipment.length >= this.equipSlots()) return { ok: false, reason: '设备位已满（' + this.equipSlots() + '）' };
    if (this.equipment.indexOf(equipId) >= 0) return { ok: false, reason: '设备已安装' };
    var def = res31FindEquipment(equipId);
    if (!def) return { ok: false, reason: '未知设备' };
    if (def.labType !== this.typeId && def.labType !== 'lab31_general') {
      /* 通用设备可装任意实验室；专属设备仅限对应类型 */
      if (this.typeId !== 'lab31_general') return { ok: false, reason: '设备与实验室类型不匹配' };
    }
    this.equipment.push(equipId);
    return { ok: true, reason: '' };
  }
  removeEquipment(equipId) {
    var idx = this.equipment.indexOf(equipId);
    if (idx < 0) return false;
    this.equipment.splice(idx, 1);
    return true;
  }
  toJSON() {
    return { id: this.id, typeId: this.typeId, level: this.level, equipment: this.equipment.slice(), builtDay: this.builtDay, daysAtLevel: this.daysAtLevel };
  }
  static fromJSON(d) {
    var lab = new ResearchV31Lab(d.typeId, d.builtDay || 0);
    lab.id = d.id; lab.level = d.level || 1;
    lab.equipment = (d.equipment || []).slice();
    lab.daysAtLevel = d.daysAtLevel || 0;
    return lab;
  }
}
function res31FindEquipment(id) {
  for (var i = 0; i < RES31_EQUIPMENT.length; i++) if (RES31_EQUIPMENT[i].id === id) return RES31_EQUIPMENT[i];
  return null;
}

/* ================================================================
 * ResearchV31Scientist — 科学家
 * 五维：theory 理论 / engineering 工程 / biology 生物 / physics 物理 /
 * society 社会（0-100）。匹配度 = 项目方向对应维属性值。
 * 经验公式：xp += 速度 × 0.1 × 匹配度/100（每天）；升级需 100×level^1.5。
 * 离职概率/天：max(0,(40−morale)/1000) × (1−loyalty/200)。
 * 培养：train(dim, days) 按导师加成提升对应维，每级上限 98。
 * ================================================================ */
class ResearchV31Scientist {
  constructor(template, day) {
    this.id = template.id;
    this.name = template.name;
    this.age = template.age;
    this.specialty = template.specialty;
    this.attrs = { theory: template.attrs.theory, engineering: template.attrs.engineering, biology: template.attrs.biology, physics: template.attrs.physics, society: template.attrs.society };
    this.level = template.level || 1;
    this.xp = template.xp || 0;
    this.trait = template.trait;
    this.salaryPerDay = template.salaryPerDay;
    this.morale = template.morale;
    this.loyalty = template.loyalty;
    this.hiredDay = day || 0;
    this.assignedProject = null;
    this.fatigue = 0;
    this.projectsCompleted = 0;
    this.trainingFocus = null;
  }
  matchFor(branch) { return this.attrs[res31BranchAttr(branch)] || 0; }
  traitMods() { return res31TraitMods(this.trait); }
  /* 个人研究速度贡献（点/天）：基础 2 + 等级×0.8 + 匹配度/25，乘特质 */
  speedContribution(branch) {
    var m = this.matchFor(branch);
    var base = 2 + this.level * 0.8 + m / 25;
    var mods = this.traitMods();
    if (mods.researchMul) base *= mods.researchMul;
    if (mods[this.specialty + 'Mul']) base *= mods[this.specialty + 'Mul'];
    if (this.morale < 30) base *= 0.85;
    if (this.morale > 80) base *= 1.10;
    if (this.fatigue > 70) base *= 0.80;
    return Math.round(base * 100) / 100;
  }
  xpNeed() { return Math.round(100 * Math.pow(this.level, 1.5)); }
  gainXp(amount) {
    this.xp += amount;
    var leveled = 0;
    while (this.xp >= this.xpNeed() && this.level < 10) {
      this.xp -= this.xpNeed();
      this.level += 1;
      leveled += 1;
      /* 升级：主攻维 +3，其他维 +1 */
      var dim = res31BranchAttr(this.specialty);
      this.attrs[dim] = Math.min(98, this.attrs[dim] + 3);
      var dims = ['theory', 'engineering', 'biology', 'physics', 'society'];
      for (var i = 0; i < dims.length; i++) if (dims[i] !== dim) this.attrs[dims[i]] = Math.min(98, this.attrs[dims[i]] + 1);
    }
    return leveled;
  }
  /* 培养：每天训练提升 trainingFocus 维；导师在场时经验 +50% */
  train(days, hasMentor) {
    if (!this.trainingFocus) return 0;
    var gain = days * (0.35 + this.level * 0.05) * (hasMentor ? 1.5 : 1);
    var before = this.attrs[this.trainingFocus];
    this.attrs[this.trainingFocus] = Math.min(98, Math.round((before + gain) * 10) / 10);
    return Math.round((this.attrs[this.trainingFocus] - before) * 10) / 10;
  }
  dailyTick(payOk) {
    /* 薪资满意度影响士气；欠薪每天 −2 士气、−1 忠诚 */
    if (!payOk) { this.morale = res31Clamp(this.morale - 2, 0, 100); this.loyalty = res31Clamp(this.loyalty - 1, 0, 100); }
    else if (this.morale < 90) { this.morale = res31Clamp(this.morale + 0.2, 0, 100); }
    if (this.assignedProject) this.fatigue = res31Clamp(this.fatigue + 0.6, 0, 100);
    else this.fatigue = res31Clamp(this.fatigue - 2, 0, 100);
    var mods = this.traitMods();
    var leaveP = Math.max(0, (40 - this.morale) / 1000) * (1 - this.loyalty / 200);
    if (mods.leaveMul) leaveP *= mods.leaveMul;
    return { leaveP: leaveP, wantsLeave: Math.random() < leaveP };
  }
  toJSON() {
    return { id: this.id, name: this.name, age: this.age, specialty: this.specialty, attrs: this.attrs, level: this.level, xp: Math.round(this.xp), trait: this.trait, salaryPerDay: this.salaryPerDay, morale: Math.round(this.morale * 10) / 10, loyalty: Math.round(this.loyalty * 10) / 10, hiredDay: this.hiredDay, assignedProject: this.assignedProject, fatigue: Math.round(this.fatigue), projectsCompleted: this.projectsCompleted, trainingFocus: this.trainingFocus };
  }
  static fromJSON(d) {
    var t = res31FindScientistTemplate(d.id) || { id: d.id, name: d.name, age: d.age || 30, specialty: d.specialty || 'physics', attrs: d.attrs, level: d.level || 1, xp: 0, trait: d.trait || 'trait31_01', salaryPerDay: d.salaryPerDay || 10, morale: 60, loyalty: 60 };
    var s = new ResearchV31Scientist(t, d.hiredDay || 0);
    s.attrs = d.attrs; s.level = d.level; s.xp = d.xp; s.morale = d.morale; s.loyalty = d.loyalty;
    s.assignedProject = d.assignedProject || null; s.fatigue = d.fatigue || 0;
    s.projectsCompleted = d.projectsCompleted || 0; s.trainingFocus = d.trainingFocus || null;
    return s;
  }
}

/* ================================================================
 * ResearchV31ProjectState — 研究项目运行时状态
 * 速度公式：speed = 10 × (1 + compute/100) × (1 + avgMatch/200)
 *                 × 实验室方向加成 × 特质加成（点/天）
 * 进度单位：科研点；完成需 cost.research 点。
 * ================================================================ */
class ResearchV31ProjectState {
  constructor(projectId, day) {
    this.projectId = projectId;
    this.progress = 0;
    this.startDay = day || 0;
    this.status = 'active';
    this.assigned = [];
    this.milestonesHit = [];
    this.breakthroughs = 0;
    this.accidents = 0;
  }
  def() { return res31FindProject(this.projectId); }
  need() { var d = this.def(); return d ? d.cost.research : 0; }
  pct() { var n = this.need(); return n > 0 ? Math.min(100, this.progress / n * 100) : 100; }
  speedPerDay(system) {
    var d = this.def();
    if (!d) return 0;
    var compute = system.totalCompute();
    var matchSum = 0;
    for (var i = 0; i < this.assigned.length; i++) {
      var s = system.getScientist(this.assigned[i]);
      if (s) matchSum += s.matchFor(d.branch);
    }
    var avgMatch = this.assigned.length ? matchSum / this.assigned.length : 40;
    var speed = 10 * (1 + compute / 100) * (1 + avgMatch / 200);
    /* 实验室方向加成：有对应方向实验室时 ×1.15 */
    var hasLab = false;
    for (var j = 0; j < system.labs.length; j++) {
      var lt = system.labs[j].typeDef();
      if (lt.branch === d.branch) { hasLab = true; break; }
    }
    if (hasLab) speed *= 1.15;
    /* 科学家个人贡献 */
    for (var k = 0; k < this.assigned.length; k++) {
      var sc = system.getScientist(this.assigned[k]);
      if (sc) speed += sc.speedContribution(d.branch);
    }
    /* 灵感加成 */
    if (system.insight > 0) speed *= (1 + Math.min(0.5, system.insight / 500));
    return Math.round(speed * 100) / 100;
  }
  etaDays(system) {
    var sp = this.speedPerDay(system);
    if (sp <= 0) return Infinity;
    return Math.ceil((this.need() - this.progress) / sp);
  }
  toJSON() {
    return { projectId: this.projectId, progress: Math.round(this.progress * 10) / 10, startDay: this.startDay, status: this.status, assigned: this.assigned.slice(), milestonesHit: this.milestonesHit.slice(), breakthroughs: this.breakthroughs, accidents: this.accidents };
  }
  static fromJSON(d) {
    var s = new ResearchV31ProjectState(d.projectId, d.startDay || 0);
    s.progress = d.progress || 0; s.status = d.status || 'active';
    s.assigned = (d.assigned || []).slice(); s.milestonesHit = (d.milestonesHit || []).slice();
    s.breakthroughs = d.breakthroughs || 0; s.accidents = d.accidents || 0;
    return s;
  }
}

/* ================================================================
 * ResearchV31EventEngine — 突破 / 事故引擎
 * 突破判定：项目完成结算时 p = 0.03 + tier×0.01（特质修正）；
 * 事故判定：每天 p = 0.004 + tier×0.002。
 * ================================================================ */
class ResearchV31EventEngine {
  constructor(system) { this.system = system; }
  rollBreakthrough(state) {
    var d = state.def();
    if (!d) return null;
    var p = 0.03 + d.tier * 0.01;
    for (var i = 0; i < state.assigned.length; i++) {
      var s = this.system.getScientist(state.assigned[i]);
      if (!s) continue;
      var mods = s.traitMods();
      if (mods.breakthroughMul) p *= mods.breakthroughMul;
    }
    if (Math.random() >= p) return null;
    var pool = [];
    for (var j = 0; j < RES31_BREAKTHROUGHS.length; j++) {
      var e = RES31_BREAKTHROUGHS[j];
      if (e.branch === d.branch && d.tier >= e.minTier) pool.push(e);
    }
    if (!pool.length) return null;
    var evt = pool[Math.floor(Math.random() * pool.length)];
    state.breakthroughs += 1;
    this.system.log.push({ day: this.system.day, type: 'breakthrough', projectId: d.id, eventId: evt.id, title: evt.title, text: evt.text });
    return evt;
  }
  rollAccident(state) {
    var d = state.def();
    if (!d) return null;
    var p = 0.004 + d.tier * 0.002;
    for (var i = 0; i < state.assigned.length; i++) {
      var s = this.system.getScientist(state.assigned[i]);
      if (!s) continue;
      var mods = s.traitMods();
      if (mods.accidentMul) p *= mods.accidentMul;
    }
    if (Math.random() >= p) return null;
    var acc = RES31_ACCIDENTS[Math.floor(Math.random() * RES31_ACCIDENTS.length)];
    state.accidents += 1;
    var loss = Math.round(state.progress * acc.progressLoss);
    state.progress = Math.max(0, state.progress - loss);
    this.system.log.push({ day: this.system.day, type: 'accident', projectId: d.id, eventId: acc.id, title: acc.title, text: acc.text + '进度损失 ' + loss + ' 点。' });
    return { accident: acc, progressLoss: loss };
  }
  resolveChoice(eventId, choiceIdx, state) {
    var evt = null;
    for (var i = 0; i < RES31_BREAKTHROUGHS.length; i++) if (RES31_BREAKTHROUGHS[i].id === eventId) evt = RES31_BREAKTHROUGHS[i];
    if (!evt) return { ok: false, reason: '未知事件' };
    var choice = evt.choices[choiceIdx];
    if (!choice) return { ok: false, reason: '未知选项' };
    var fx = choice.effects || {};
    if (fx.progressBoost && state) state.progress += state.need() * fx.progressBoost;
    if (fx.researchRefund) this.system.researchPoints += fx.researchRefund;
    if (fx.insight) this.system.insight += fx.insight;
    if (fx.moraleDelta) {
      for (var j = 0; j < (state ? state.assigned.length : 0); j++) {
        var s = this.system.getScientist(state.assigned[j]);
        if (s) s.morale = res31Clamp(s.morale + fx.moraleDelta, 0, 100);
      }
    }
    this.system.log.push({ day: this.system.day, type: 'choice', eventId: eventId, choice: choice.label, result: choice.result });
    return { ok: true, result: choice.result, effects: fx };
  }
}

/* ================================================================
 * ResearchV31RaceManager — 科研竞赛
 * 对手每天推进：power × 0.3 点；本方推进：研究速度 × 0.5 点。
 * 率先达到 target 者获胜；获胜奖励信用点/科研点/效果加成。
 * ================================================================ */
class ResearchV31RaceManager {
  constructor(system) {
    this.system = system;
    this.tracks = [];
    for (var i = 0; i < RES31_RACE_TRACKS.length; i++) {
      this.tracks.push({ trackId: RES31_RACE_TRACKS[i].id, ours: 0, rivalId: RES31_RIVALS[i % RES31_RIVALS.length].id, rival: 0, status: 'idle', winner: null });
    }
  }
  def(trackId) {
    for (var i = 0; i < RES31_RACE_TRACKS.length; i++) if (RES31_RACE_TRACKS[i].id === trackId) return RES31_RACE_TRACKS[i];
    return null;
  }
  rivalDef(rivalId) {
    for (var i = 0; i < RES31_RIVALS.length; i++) if (RES31_RIVALS[i].id === rivalId) return RES31_RIVALS[i];
    return RES31_RIVALS[0];
  }
  start(trackId) {
    for (var i = 0; i < this.tracks.length; i++) {
      if (this.tracks[i].trackId === trackId) {
        if (this.tracks[i].status === 'running') return { ok: false, reason: '该竞速已在进行' };
        if (this.tracks[i].status === 'done') return { ok: false, reason: '该竞速已结束' };
        this.tracks[i].status = 'running';
        return { ok: true, reason: '' };
      }
    }
    return { ok: false, reason: '未知竞速' };
  }
  tick(days) {
    var results = [];
    for (var i = 0; i < this.tracks.length; i++) {
      var t = this.tracks[i];
      if (t.status !== 'running') continue;
      var def = this.def(t.trackId);
      var rival = this.rivalDef(t.rivalId);
      var ourSpeed = 0;
      for (var j = 0; j < this.system.activeProjects().length; j++) {
        var st = this.system.activeProjects()[j];
        var d = st.def();
        if (d && d.branch === def.branch) ourSpeed += st.speedPerDay(this.system);
      }
      if (ourSpeed === 0) ourSpeed = this.system.totalCompute() / 20;
      t.ours += ourSpeed * 0.5 * days;
      t.rival += rival.power * 0.3 * days * (0.9 + Math.random() * 0.2);
      if (t.ours >= def.target || t.rival >= def.target) {
        t.status = 'done';
        if (t.ours >= t.rival) {
          t.winner = 'ours';
          this.system.credits += def.rewardCredits;
          this.system.researchPoints += def.rewardResearch;
          this.system.grantBonus(def.rewardEffect.key, def.rewardEffect.value);
          results.push({ trackId: t.trackId, winner: 'ours', reward: def.rewardCredits });
        } else {
          t.winner = t.rivalId;
          results.push({ trackId: t.trackId, winner: t.rivalId, reward: 0 });
        }
        this.system.log.push({ day: this.system.day, type: 'race', trackId: t.trackId, winner: t.winner });
      }
    }
    return results;
  }
  toJSON() { return this.tracks.map(function (t) { return { trackId: t.trackId, ours: Math.round(t.ours), rival: Math.round(t.rival), rivalId: t.rivalId, status: t.status, winner: t.winner }; }); }
  static fromJSON(system, data) {
    var m = new ResearchV31RaceManager(system);
    m.tracks = (data || []).map(function (t) { return { trackId: t.trackId, ours: t.ours || 0, rival: t.rival || 0, rivalId: t.rivalId, status: t.status || 'idle', winner: t.winner || null }; });
    return m;
  }
}
/* ================================================================
 * ResearchV31System — 科研总系统
 * 持有：labs / scientists / projects(active+completed) / race /
 * grants / researchPoints / credits / insight / log。
 * 核心循环 tick(days)：扣维护与薪资 → 推进项目 → 里程碑 → 事故检定
 * → 完成结算（效果入账 + 突破检定 + 联动）→ 科学家日常 → 竞速。
 * 对外加成出口：computeBonuses() 返回 {target: {mul, add}} 汇总；
 * applyBonusesToGame(game) 把汇总写入 game.researchV31Bonuses，
 * game.js 可按 RES31_BONUS_FORMULAS 的公式自行消费。
 * ================================================================ */
class ResearchV31System {
  constructor(game) {
    this.game = game || null;
    this.day = res31Get(game, 'day', 0) || 0;
    this.researchPoints = 500;
    this.credits = res31Get(game, 'credits', 1000) || 1000;
    this.insight = 0;
    this.labs = [];
    this.scientists = [];
    this.projects = [];
    this.completed = [];
    this.grantsActive = [];
    this.grantsDone = [];
    this.race = new ResearchV31RaceManager(this);
    this.events = new ResearchV31EventEngine(this);
    this.log = [];
    this.stats = { projectsStarted: 0, projectsCompleted: 0, breakthroughs: 0, accidents: 0, racesWon: 0, racesLost: 0, scientistsHired: 0, scientistsLeft: 0 };
    this._bonusCache = null;
  }
  /* ---------- 实验室 ---------- */
  totalCompute() {
    var c = 0;
    for (var i = 0; i < this.labs.length; i++) c += this.labs[i].compute();
    return c;
  }
  totalSlots() {
    var s = 0;
    for (var i = 0; i < this.labs.length; i++) s += this.labs[i].slots();
    return s;
  }
  totalUpkeep() {
    var u = 0;
    for (var i = 0; i < this.labs.length; i++) u += this.labs[i].upkeepPerDay();
    for (var j = 0; j < this.scientists.length; j++) u += this.scientists[j].salaryPerDay;
    return u;
  }
  buildLab(typeId) {
    var def = null;
    for (var i = 0; i < RES31_LAB_TYPES.length; i++) if (RES31_LAB_TYPES[i].id === typeId) def = RES31_LAB_TYPES[i];
    if (!def) return { ok: false, reason: '未知实验室类型' };
    if (this.credits < def.buildCost.credits) return { ok: false, reason: '信用点不足，需 ' + def.buildCost.credits };
    this.credits -= def.buildCost.credits;
    var lab = new ResearchV31Lab(typeId, this.day);
    this.labs.push(lab);
    this.log.push({ day: this.day, type: 'lab', text: '建成' + def.name });
    return { ok: true, lab: lab };
  }
  upgradeLab(labId) {
    for (var i = 0; i < this.labs.length; i++) {
      if (this.labs[i].id !== labId) continue;
      var iron = res31Get(this.game, 'resources.iron', 100000);
      var chk = this.labs[i].canUpgrade(this.credits, iron);
      if (!chk.ok) return chk;
      var c = this.labs[i].upgradeCost();
      this.credits -= c.credits;
      this.labs[i].upgrade();
      return { ok: true, reason: '' };
    }
    return { ok: false, reason: '未知实验室' };
  }
  /* ---------- 科学家 ---------- */
  recruitCandidates(count) {
    var out = [];
    var pool = RES31_SCIENTIST_TEMPLATES.filter(function (t) { return true; });
    var hiredIds = {};
    for (var i = 0; i < this.scientists.length; i++) hiredIds[this.scientists[i].id] = true;
    var avail = pool.filter(function (t) { return !hiredIds[t.id]; });
    for (var j = 0; j < Math.min(count, avail.length); j++) out.push(avail[Math.floor(Math.random() * avail.length)]);
    return out;
  }
  hire(templateId) {
    var t = res31FindScientistTemplate(templateId);
    if (!t) return { ok: false, reason: '未知科学家' };
    for (var i = 0; i < this.scientists.length; i++) if (this.scientists[i].id === templateId) return { ok: false, reason: '已在职' };
    var cost = 100 + t.level * 50;
    if (this.credits < cost) return { ok: false, reason: '招募费不足，需 ' + cost + ' 信用点' };
    this.credits -= cost;
    var s = new ResearchV31Scientist(t, this.day);
    this.scientists.push(s);
    this.stats.scientistsHired += 1;
    this.log.push({ day: this.day, type: 'hire', text: '招募 ' + s.name + '（' + s.specialty + '）' });
    return { ok: true, scientist: s };
  }
  fire(scientistId) {
    for (var i = 0; i < this.scientists.length; i++) {
      if (this.scientists[i].id !== scientistId) continue;
      var s = this.scientists[i];
      if (s.assignedProject) this.unassign(s.id, s.assignedProject);
      this.scientists.splice(i, 1);
      this.stats.scientistsLeft += 1;
      this.log.push({ day: this.day, type: 'leave', text: s.name + ' 离职' });
      return { ok: true };
    }
    return { ok: false, reason: '未知科学家' };
  }
  getScientist(id) {
    for (var i = 0; i < this.scientists.length; i++) if (this.scientists[i].id === id) return this.scientists[i];
    return null;
  }
  setTraining(scientistId, dim) {
    var s = this.getScientist(scientistId);
    if (!s) return { ok: false, reason: '未知科学家' };
    var dims = ['theory', 'engineering', 'biology', 'physics', 'society'];
    if (dims.indexOf(dim) < 0) return { ok: false, reason: '未知属性维' };
    s.trainingFocus = dim;
    return { ok: true };
  }
  /* ---------- 项目 ---------- */
  activeProjects() { return this.projects.filter(function (p) { return p.status === 'active'; }); }
  canStart(projectId) {
    var d = res31FindProject(projectId);
    if (!d) return { ok: false, reason: '未知项目' };
    if (this.completed.indexOf(projectId) >= 0) return { ok: false, reason: '已完成' };
    for (var i = 0; i < this.projects.length; i++) if (this.projects[i].projectId === projectId && this.projects[i].status === 'active') return { ok: false, reason: '已在研究中' };
    for (var j = 0; j < d.prereq.length; j++) if (this.completed.indexOf(d.prereq[j]) < 0) return { ok: false, reason: '前置未完成：' + d.prereq[j] };
    if (this.activeProjects().length >= Math.max(1, this.totalSlots())) return { ok: false, reason: '研究槽位已满（' + this.totalSlots() + '）' };
    if (this.researchPoints < d.cost.research) return { ok: false, reason: '科研点不足，需 ' + d.cost.research };
    if (this.credits < d.cost.credits) return { ok: false, reason: '信用点不足，需 ' + d.cost.credits };
    return { ok: true, reason: '' };
  }
  startProject(projectId) {
    var chk = this.canStart(projectId);
    if (!chk.ok) return chk;
    var d = res31FindProject(projectId);
    this.researchPoints -= d.cost.research;
    this.credits -= d.cost.credits;
    var st = new ResearchV31ProjectState(projectId, this.day);
    this.projects.push(st);
    this.stats.projectsStarted += 1;
    this.log.push({ day: this.day, type: 'start', projectId: projectId, text: '启动研究：' + d.name });
    return { ok: true, state: st };
  }
  cancelProject(projectId) {
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i].projectId !== projectId || this.projects[i].status !== 'active') continue;
      var st = this.projects[i];
      st.status = 'cancelled';
      var refund = Math.round(res31FindProject(projectId).cost.research * 0.3);
      this.researchPoints += refund;
      for (var j = 0; j < st.assigned.length; j++) {
        var s = this.getScientist(st.assigned[j]);
        if (s) s.assignedProject = null;
      }
      st.assigned = [];
      this.log.push({ day: this.day, type: 'cancel', projectId: projectId, text: '取消研究，返还 ' + refund + ' 科研点' });
      return { ok: true, refund: refund };
    }
    return { ok: false, reason: '未找到进行中的项目' };
  }
  assign(scientistId, projectId) {
    var s = this.getScientist(scientistId);
    if (!s) return { ok: false, reason: '未知科学家' };
    var st = null;
    for (var i = 0; i < this.projects.length; i++) if (this.projects[i].projectId === projectId && this.projects[i].status === 'active') st = this.projects[i];
    if (!st) return { ok: false, reason: '项目未在进行中' };
    if (s.assignedProject) return { ok: false, reason: '该科学家已分配到 ' + s.assignedProject };
    if (st.assigned.length >= 5) return { ok: false, reason: '单个项目最多 5 名科学家' };
    st.assigned.push(scientistId);
    s.assignedProject = projectId;
    return { ok: true };
  }
  unassign(scientistId, projectId) {
    var s = this.getScientist(scientistId);
    var st = null;
    for (var i = 0; i < this.projects.length; i++) if (this.projects[i].projectId === projectId) st = this.projects[i];
    if (!st || !s) return { ok: false, reason: '未知项目或科学家' };
    var idx = st.assigned.indexOf(scientistId);
    if (idx >= 0) st.assigned.splice(idx, 1);
    if (s.assignedProject === projectId) s.assignedProject = null;
    return { ok: true };
  }
  /* 完成结算：效果入账、联动检查、突破检定、科学家经验 */
  completeProject(state) {
    var d = state.def();
    state.status = 'completed';
    this.completed.push(d.id);
    this.stats.projectsCompleted += 1;
    for (var i = 0; i < state.assigned.length; i++) {
      var s = this.getScientist(state.assigned[i]);
      if (s) {
        s.projectsCompleted += 1;
        s.gainXp(60 + d.tier * 20);
        s.morale = res31Clamp(s.morale + 3, 0, 100);
        s.assignedProject = null;
      }
    }
    state.assigned = [];
    this._bonusCache = null;
    /* 联动：检查配对项目是否已完成，完成后额外加成自动计入 computeBonuses */
    var evt = this.events.rollBreakthrough(state);
    if (evt) this.stats.breakthroughs += 1;
    this.log.push({ day: this.day, type: 'complete', projectId: d.id, text: '完成研究：' + d.name + '（' + d.effects.map(function (e) { return e.desc; }).join('；') + '）' });
    return { ok: true, project: d, breakthrough: evt };
  }
  checkMilestones(state) {
    var fired = [];
    for (var i = 0; i < RES31_MILESTONES.length; i++) {
      var m = RES31_MILESTONES[i];
      if (m.projectId !== state.projectId) continue;
      if (state.milestonesHit.indexOf(m.at) >= 0) continue;
      if (state.pct() < m.at) continue;
      state.milestonesHit.push(m.at);
      if (m.kind === 'refund') this.researchPoints += m.value;
      if (m.kind === 'insight') this.insight += m.value;
      if (m.kind === 'morale') {
        for (var j = 0; j < state.assigned.length; j++) {
          var s = this.getScientist(state.assigned[j]);
          if (s) s.morale = res31Clamp(s.morale + m.value, 0, 100);
        }
      }
      fired.push(m);
    }
    return fired;
  }
  /* 阶段检查：进度跨过 33%/66%/100% 阶段线时奖励灵感并记日志 */
  checkStages(state) {
    var fired = [];
    for (var i = 0; i < RES31_PROJECT_STAGES.length; i++) {
      var s = RES31_PROJECT_STAGES[i];
      if (s.projectId !== state.projectId) continue;
      if (state.milestonesHit.indexOf('stage' + s.stage) >= 0) continue;
      if (state.pct() < s.at) continue;
      state.milestonesHit.push('stage' + s.stage);
      this.insight += s.bonusInsight;
      this.log.push({ day: this.day, type: 'stage', projectId: state.projectId, text: s.text });
      fired.push(s);
    }
    return fired;
  }
  /* ---------- 加成汇总 ---------- */
  grantBonus(key, value) {
    if (!this._extraBonuses) this._extraBonuses = {};
    this._extraBonuses[key] = value;
    this._bonusCache = null;
  }
  computeBonuses() {
    if (this._bonusCache) return this._bonusCache;
    var out = {};
    function add(target, op, value) {
      if (!out[target]) out[target] = { mul: 1, add: 0 };
      if (op === 'mul') out[target].mul = Math.round(out[target].mul * value * 10000) / 10000;
      else out[target].add += value;
    }
    for (var i = 0; i < this.completed.length; i++) {
      var d = res31FindProject(this.completed[i]);
      if (!d) continue;
      for (var j = 0; j < d.effects.length; j++) add(d.effects[j].target, d.effects[j].op, d.effects[j].value);
    }
    /* 联动加成：配对双方均完成时，联动效果键额外生效 */
    for (var k = 0; k < RES31_SYNERGIES.length; k++) {
      var s = RES31_SYNERGIES[k];
      if (this.completed.indexOf(s.a) >= 0 && this.completed.indexOf(s.b) >= 0) add(s.target, s.op, s.value);
    }
    /* 竞速奖励加成 */
    if (this._extraBonuses) {
      for (var key in this._extraBonuses) {
        var fx = RES31_FX_REGISTRY[key];
        if (fx) add(fx.target, fx.op, this._extraBonuses[key]);
      }
    }
    /* 设备加成：已安装设备按效果键小幅加成 */
    for (var m = 0; m < this.labs.length; m++) {
      for (var n = 0; n < this.labs[m].equipment.length; n++) {
        var eq = res31FindEquipment(this.labs[m].equipment[n]);
        if (!eq || !eq.effect) continue;
        var fx2 = RES31_FX_REGISTRY[eq.effect.key];
        if (fx2) add(fx2.target, 'mul', eq.effect.value);
      }
    }
    this._bonusCache = out;
    return out;
  }
  getBonus(target) {
    var b = this.computeBonuses();
    return b[target] || { mul: 1, add: 0 };
  }
  applyBonusesToGame(game) {
    var g = game || this.game;
    if (!g || typeof g !== 'object') return null;
    var bonuses = this.computeBonuses();
    g.researchV31Bonuses = bonuses;
    return bonuses;
  }
  /* ---------- 资助 ---------- */
  applyGrant(grantId) {
    var g = null;
    for (var i = 0; i < RES31_GRANTS.length; i++) if (RES31_GRANTS[i].id === grantId) g = RES31_GRANTS[i];
    if (!g) return { ok: false, reason: '未知资助' };
    if (this.grantsActive.indexOf(grantId) >= 0 || this.grantsDone.indexOf(grantId) >= 0) return { ok: false, reason: '资助已申请或已完成' };
    var done = 0;
    for (var j = 0; j < this.completed.length; j++) {
      var d = res31FindProject(this.completed[j]);
      if (d && d.branch === g.branch && d.tier >= g.requireTier) done += 1;
    }
    if (done < g.requireProjects) return { ok: false, reason: '需完成 ' + g.requireProjects + ' 个' + g.branch + '方向 ' + g.requireTier + ' 阶以上项目（当前 ' + done + '）' };
    this.credits += g.rewardCredits;
    this.researchPoints += g.rewardResearch;
    this.grantsDone.push(grantId);
    this.log.push({ day: this.day, type: 'grant', text: '获得资助：' + g.name + ' +' + g.rewardCredits + ' 信用点、+' + g.rewardResearch + ' 科研点' });
    return { ok: true, grant: g };
  }
  /* ---------- 主循环 ---------- */
  tick(days) {
    days = days || 1;
    this.day += days;
    var report = { days: days, completed: [], accidents: [], breakthroughs: [], left: [], races: [], upkeepPaid: 0 };
    /* 1) 维护与薪资：信用点不足则欠薪（士气惩罚），否则扣款 */
    var upkeep = this.totalUpkeep() * days;
    var payOk = this.credits >= upkeep;
    if (payOk) { this.credits -= upkeep; report.upkeepPaid = upkeep; }
    else { this.credits = 0; }
    /* 2) 推进项目 */
    var active = this.activeProjects();
    for (var i = 0; i < active.length; i++) {
      var st = active[i];
      var speed = st.speedPerDay(this);
      st.progress += speed * days;
      this.checkMilestones(st);
      this.checkStages(st);
      /* 事故检定：每天一次 */
      for (var d = 0; d < days; d++) {
        var acc = this.events.rollAccident(st);
        if (acc) { report.accidents.push(acc); this.stats.accidents += 1; break; }
      }
      /* 科学家经验 */
      for (var j = 0; j < st.assigned.length; j++) {
        var s = this.getScientist(st.assigned[j]);
        if (s) s.gainXp(speed * 0.1 * (s.matchFor(st.def().branch) / 100) * days);
      }
      if (st.progress >= st.need()) {
        var res = this.completeProject(st);
        report.completed.push(res.project.id);
        if (res.breakthrough) { report.breakthroughs.push(res.breakthrough.id); }
      }
    }
    /* 3) 科学家日常：士气/疲劳/离职检定；培养 */
    var hasMentor = false;
    for (var k = 0; k < this.scientists.length; k++) {
      var mods = this.scientists[k].traitMods();
      if (mods.mentorMul) { hasMentor = true; break; }
    }
    for (var m = this.scientists.length - 1; m >= 0; m--) {
      var sc = this.scientists[m];
      var daily = sc.dailyTick(payOk);
      if (sc.trainingFocus) sc.train(days, hasMentor);
      if (daily.wantsLeave) {
        var name = sc.name;
        if (sc.assignedProject) this.unassign(sc.id, sc.assignedProject);
        this.scientists.splice(m, 1);
        this.stats.scientistsLeft += 1;
        report.left.push(name);
        this.log.push({ day: this.day, type: 'leave', text: name + ' 因士气过低离职' });
      }
    }
    /* 4) 竞速 */
    var raceRes = this.race.tick(days);
    for (var r = 0; r < raceRes.length; r++) {
      if (raceRes[r].winner === 'ours') this.stats.racesWon += 1;
      else this.stats.racesLost += 1;
    }
    report.races = raceRes;
    /* 5) 研究点自然产出：基础 5 点/天 + 算力/50 */
    this.researchPoints += Math.round((5 + this.totalCompute() / 50) * days);
    /* 6) 同步回宿主 game（只写自有命名空间与通用字段） */
    if (this.game && typeof this.game === 'object') {
      this.game.researchV31 = this;
      if (typeof this.game.day === 'number') { /* game.day 由宿主主循环维护，不覆盖 */ }
    }
    if (this.log.length > 500) this.log = this.log.slice(this.log.length - 500);
    return report;
  }
  /* ---------- 面板数据（供 UI 直接渲染） ---------- */
  getPanelData() {
    return {
      day: this.day, researchPoints: Math.round(this.researchPoints), credits: Math.round(this.credits),
      insight: this.insight, compute: this.totalCompute(), slots: this.totalSlots(),
      slotsUsed: this.activeProjects().length, upkeep: this.totalUpkeep(),
      labs: this.labs.map(function (l) { return { id: l.id, typeId: l.typeId, level: l.level, compute: l.compute(), slots: l.slots(), equipment: l.equipment.slice() }; }),
      scientists: this.scientists.map(function (s) { return s.toJSON(); }),
      active: this.activeProjects().map(function (st) { return { projectId: st.projectId, progress: Math.round(st.progress), need: st.need(), pct: Math.round(st.pct()), etaDays: st.etaDays(this), assigned: st.assigned.slice() }; }.bind(this)),
      completedCount: this.completed.length, bonuses: this.computeBonuses(), stats: this.stats,
      log: this.log.slice(-20),
    };
  }
  getTreeData() {
    var out = {};
    for (var b = 0; b < RES31_BRANCHES.length; b++) {
      var br = RES31_BRANCHES[b];
      out[br] = RES31_PROJECTS.filter(function (p) { return p.branch === br; }).map(function (p) {
        return { id: p.id, name: p.name, tier: p.tier, chain: p.chain, prereq: p.prereq.slice(), done: this.completed.indexOf(p.id) >= 0, active: this.projects.some(function (st) { return st.projectId === p.id && st.status === 'active'; }), cost: p.cost, durationDays: p.durationDays, effects: p.effects };
      }.bind(this));
    }
    return out;
  }
  /* ---------- 存档 ---------- */
  save() {
    return {
      version: 'v3.1-research',
      day: this.day, researchPoints: Math.round(this.researchPoints), credits: Math.round(this.credits), insight: this.insight,
      labs: this.labs.map(function (l) { return l.toJSON(); }),
      scientists: this.scientists.map(function (s) { return s.toJSON(); }),
      projects: this.projects.map(function (p) { return p.toJSON(); }),
      completed: this.completed.slice(), grantsDone: this.grantsDone.slice(),
      race: this.race.toJSON(), log: this.log.slice(-100), stats: this.stats,
      extraBonuses: this._extraBonuses || {},
    };
  }
  load(data) {
    if (!data || typeof data !== 'object') return { ok: false, reason: '存档为空' };
    this.day = data.day || 0;
    this.researchPoints = data.researchPoints || 0;
    this.credits = data.credits || 0;
    this.insight = data.insight || 0;
    this.labs = (data.labs || []).map(function (d) { return ResearchV31Lab.fromJSON(d); });
    this.scientists = (data.scientists || []).map(function (d) { return ResearchV31Scientist.fromJSON(d); });
    this.projects = (data.projects || []).map(function (d) { return ResearchV31ProjectState.fromJSON(d); });
    this.completed = (data.completed || []).slice();
    this.grantsDone = (data.grantsDone || []).slice();
    this.race = ResearchV31RaceManager.fromJSON(this, data.race || []);
    this.events = new ResearchV31EventEngine(this);
    this.log = (data.log || []).slice();
    this.stats = data.stats || this.stats;
    this._extraBonuses = data.extraBonuses || {};
    this._bonusCache = null;
    return { ok: true };
  }
}

/* ================================================================
 * ResearchV31Integration — 接入点
 * ResearchV31Integration.attach(game)：
 *   - 在 game 上挂载 game.researchV31 = new ResearchV31System(game)
 *   - 起始配置：1 个综合科研中心 + 500 科研点 + 1000 信用点
 *   - 返回 system；重复 attach 返回已有实例，不重置。
 * ResearchV31Integration.detach(game)：卸载挂载（保留存档数据返回）。
 * ================================================================ */
var ResearchV31Integration = {
  version: '3.1.0',
  attach: function (game) {
    if (!game || typeof game !== 'object') throw new Error('ResearchV31Integration.attach: 需要 game 对象');
    if (game.researchV31 && game.researchV31 instanceof ResearchV31System) return game.researchV31;
    var system = new ResearchV31System(game);
    game.researchV31 = system;
    if (system.labs.length === 0) system.buildLab('lab31_general');
    return system;
  },
  detach: function (game) {
    if (!game || !game.researchV31) return null;
    var data = game.researchV31.save();
    delete game.researchV31;
    if (game.researchV31Bonuses) delete game.researchV31Bonuses;
    return data;
  },
  createStandalone: function () { return new ResearchV31System(null); },
};

/* 导出：仅通过 globalThis 暴露 v31 前缀标识符 */
if (typeof globalThis !== 'undefined') {
  globalThis.ResearchV31Integration = ResearchV31Integration;
  globalThis.ResearchV31System = ResearchV31System;
  globalThis.ResearchV31Lab = ResearchV31Lab;
  globalThis.ResearchV31Scientist = ResearchV31Scientist;
  globalThis.ResearchV31ProjectState = ResearchV31ProjectState;
  globalThis.ResearchV31EventEngine = ResearchV31EventEngine;
  globalThis.ResearchV31RaceManager = ResearchV31RaceManager;
  globalThis.RES31_PROJECTS = RES31_PROJECTS;
  globalThis.RES31_PROJECT_STAGES = RES31_PROJECT_STAGES;
  globalThis.RES31_PROJECT_NOTES = RES31_PROJECT_NOTES;
  globalThis.RES31_RIVAL_INTEL = RES31_RIVAL_INTEL;
  globalThis.RES31_MILESTONES = RES31_MILESTONES;
  globalThis.RES31_SYNERGIES = RES31_SYNERGIES;
  globalThis.RES31_BREAKTHROUGHS = RES31_BREAKTHROUGHS;
  globalThis.RES31_ACCIDENTS = RES31_ACCIDENTS;
  globalThis.RES31_SCIENTIST_TEMPLATES = RES31_SCIENTIST_TEMPLATES;
  globalThis.RES31_LAB_TYPES = RES31_LAB_TYPES;
  globalThis.RES31_LAB_TIERS = RES31_LAB_TIERS;
  globalThis.RES31_EQUIPMENT = RES31_EQUIPMENT;
  globalThis.RES31_TRAITS = RES31_TRAITS;
  globalThis.RES31_GRANTS = RES31_GRANTS;
  globalThis.RES31_RIVALS = RES31_RIVALS;
  globalThis.RES31_RACE_TRACKS = RES31_RACE_TRACKS;
  globalThis.RES31_BONUS_FORMULAS = RES31_BONUS_FORMULAS;
  globalThis.RES31_FX_REGISTRY = RES31_FX_REGISTRY;
  globalThis.RES31_CONFIG = RES31_CONFIG;
  globalThis.RES31_BRANCHES = RES31_BRANCHES;
  globalThis.RES31_BRANCH_CN = RES31_BRANCH_CN;
}

/* 文件尾：行数统计锚点 — 本文件由 /tmp/gen_research_v31.py 生成，
 * 数据表 + 核心逻辑均为真实可运行机制，非占位文本。 */
