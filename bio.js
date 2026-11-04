/* 星港 — bio.js：v1.7 生物系统（基因库 / 克隆缸 / 生物圈3号） */

/* =====================================================================
 * 星港 v1.7 —— 生物系统
 * ---------------------------------------------------------------------
 * 内容：dna（基因点）/ biomass（生物质）新资源 / 基因库（基因样本与
 *       基因改造研究）/ 克隆缸（人口克隆）/ 生物圈3号（闭环生态）/
 *       基因改造树（力量·智力·适应三系 18 项）/ 生态群落（12 种）/
 *       克隆模板（10 种）/ 生物科技（15 项）/ 基因瘟疫（8 种毒株）/
 *       生物事件（14 种）/ 生物合同（8 个）/ 生物日志 / 存档
 *
 * 设计原则（纯机制，无剧情）：
 *   1. 时间模型：update(now, game) 内用 dt = now - 上次 tick 自动推进；
 *      game.speedMode === 2 时 2 倍速；暂停时主循环不调用 update，
 *      克隆/生态/瘟疫自然停摆。
 *   2. 所有 game 接口防御性读取：game.player.inv / game.builder.buildings /
 *      game.pop.count / game.tech.has(id) / game.toast / game.sound /
 *      game.achievements，缺谁都不崩。
 *   3. 数值锚点见下方「数值平衡」注释（以 resources.js 的 RES_VALUE 为准：
 *      铁1 / 冰1 / 稀土3 / 铀8 / 氦3=15 / 钢材4 / 科技10 / 食物2）。
 *   4. dna 是高级资源：1 dna ≈ 60 价值（≈ 6 科技点），产自基因库与生态；
 *      biomass 是基础资源：1 biomass ≈ 3 价值，产自生物圈与温室。
 *
 * 集成（给 game.js / index.html / resources.js，接入方照抄即可）：
 *   index.html：在 quantum.js 之后、game.js 之前加
 *     <script src="bio.js"></script>
 *   resources.js 的 RES_DEFS 里加：
 *     dna:     { name: '基因点', icon: '🧬', color: '#4ade80' },
 *     biomass: { name: '生物质', icon: '🦠', color: '#a3e635' },
 *   resources.js 的 newInventory() 返回对象里加：dna: 0, biomass: 0,
 *   resources.js 的 RES_TIERS 里：raw 加 'biomass'，advanced 加 'dna'，
 *   RES_VALUE 里加 dna: 60, biomass: 3；RES_DESC 里加两者描述。
 *   game.js 构造函数：
 *     this.bio = new BioManager();
 *     if (this.bio.bindUI) this.bio.bindUI(this);
 *   game.js tick(...) 内：
 *     if (this.bio) this.bio.update(now, this);
 *   game.js save() 的 data 里加：
 *     bio: this.bio ? this.bio.save() : null,
 *   game.js load() 里加：
 *     if (data.bio && this.bio) this.bio.load(data.bio);
 *   人口增长处乘生物加成：
 *     const bioMul = game.bio ? game.bio.getBuffs().popGrowthMul : 1;
 *   温室/水厂产量处乘：
 *     const bioFood = game.bio ? game.bio.getBuffs().greenhouseMul : 1;
 * ===================================================================== */

// 版本号（存档兼容检查用）
const BIO_VERSION = '1.7.0';

// ---------------------------------------------------------------------
// 🧮 数值平衡总表（调数值只改这里，注释写清期望收益）
// ---------------------------------------------------------------------
const BTUNE = {
  // —— 资源价值锚 ——
  DNA_VALUE: 60,       // 🧬 1 dna ≈ 6 科技点
  BIOMASS_VALUE: 3,    // 🦠 1 biomass ≈ 1 稀土

  // —— 基因库 dna 产出 ——
  // 基因库：每 90 秒产 1 dna（= 40 价值/分钟）。
  // 对比量子实验室 120 价值/分钟：生物线更便宜、更前期，
  // 但 dna 消耗大户是基因改造（动辄几十点）。
  GENEBANK_INTERVAL_MS: 90000,  // 🧬 基础产出间隔：90 秒 / dna
  GENEBANK_YIELD: 1,            // 每次产出 dna 数
  GENEBANK_POWER: 10,           // 每座耗电 10
  GENEBANK_UPKEEP_BIOMASS_PER_MIN: 2,  // 每分钟消耗生物质 2（培养基）

  // —— 基因库升级：每座独立 3 级 ——
  GENEBANK_UP_COST: [
    { steel: 40, tech: 30 },    // Lv1：约 460 价值
    { steel: 100, tech: 80 },   // Lv2：约 1200 价值
    { steel: 220, tech: 170 },  // Lv3：约 2580 价值
  ],

  // —— 克隆缸 ——
  // 每座克隆缸同时培养 1 批；每批基础 5 人，耗时 5 分钟；
  // 消耗：每批 biomass×20、dna×2、水×30。
  // 对比自然增长：克隆是可控的人口爆发手段，但吃资源。
  CLONE_BATCH_SIZE: 5,          // 🧫 每批基础人数
  CLONE_BATCH_MS: 5 * 60 * 1000,// 每批耗时 5 分钟
  CLONE_COST: { biomass: 20, dna: 2, water: 30 },
  CLONE_POWER: 15,              // 每座耗电 15

  // —— 生物圈3号 ——
  // 每座：每分钟产 biomass×6、食物×4；人口增长 +10%；
  // 维护：每分钟水×5、电 20。
  BIOSPHERE_BIOMASS_PER_MIN: 6,
  BIOSPHERE_FOOD_PER_MIN: 4,
  BIOSPHERE_GROWTH_BONUS: 0.10, // 每座人口增长 +10%
  BIOSPHERE_WATER_PER_MIN: 5,
  BIOSPHERE_POWER: 20,

  // —— 生态群落 ——
  // 每座生物圈可搭载 2 个生态群落；群落提供特种加成。

  // —— 基因改造 ——
  // 三系各 6 级，dna 费用递增；效果为人口属性强化（全局乘区）。

  // —— 基因瘟疫 ——
  // 每 15~25 分钟掷一次（需人口 ≥ 20）。
  // 毒株 8 种：传播率 / 致死率 / 效果各异；隔离协议可压制。
  PLAGUE_MIN_GAP: 15 * 60 * 1000,
  PLAGUE_MAX_GAP: 25 * 60 * 1000,
  PLAGUE_MIN_POP: 20,           // 人口 < 20 不爆发
  // 治疗：每种毒株有 cureDna（一次性 dna 消耗治愈）

  // —— 生物事件 ——
  // 每 10~16 分钟掷一次（需 ≥1 座生物建筑）。
  BIOEVENT_MIN_GAP: 10 * 60 * 1000,
  BIOEVENT_MAX_GAP: 16 * 60 * 1000,

  // —— 生物合同 ——
  // 每 12~20 分钟刷新一个，最多挂 3 个。

  // —— 日志 ——
  BLOG_MAX: 30,                 // 📜 生物日志只保留最近 30 条
  DT_CLAMP_MS: 120000,          // 单次 tick 最多推进 120 秒
  PANEL_REFRESH_MS: 1000,
};

// ---------------------------------------------------------------------
// 🧬 dna / 🦠 biomass 资源定义（接入方并入 RES_DEFS / newInventory）
// ---------------------------------------------------------------------
// 本地镜像定义：即使 resources.js 未接入，BioManager 也能独立工作。
const BIO_RES = {
  dna: {
    key: 'dna',
    name: '基因点',
    icon: '🧬',
    color: '#4ade80',
    value: 60,  // 对标 RES_VALUE（科技=10 → 1 dna ≈ 6 科技点）
    desc: '基因库与生态群落产出的高级资源，用于基因改造与瘟疫治疗',
    tier: 'advanced',
  },
  biomass: {
    key: 'biomass',
    name: '生物质',
    icon: '🦠',
    color: '#a3e635',
    value: 3,  // 对标 RES_VALUE（稀土=3）
    desc: '生物圈与温室产出的基础资源，克隆培养基与基因库耗材',
    tier: 'raw',
  },
};

// 确保库存对象有 dna / biomass 键（防御性）
function ensureBio(inv) {
  if (!inv) return { dna: 0, biomass: 0 };
  if (typeof inv.dna !== 'number' || isNaN(inv.dna)) inv.dna = 0;
  if (typeof inv.biomass !== 'number' || isNaN(inv.biomass)) inv.biomass = 0;
  return inv;
}

// dna 是否足够 / 扣除 / 增加
function canAffordDna(inv, n) {
  ensureBio(inv);
  return (inv.dna || 0) >= n;
}
function spendDna(inv, n) {
  ensureBio(inv);
  if ((inv.dna || 0) < n) return false;
  inv.dna -= n;
  return true;
}
function gainDna(inv, n) {
  ensureBio(inv);
  inv.dna = Math.min(999999, (inv.dna || 0) + n);
  return inv.dna;
}
// biomass 增加（无上限焦虑，钳制防溢出显示）
function gainBiomass(inv, n) {
  ensureBio(inv);
  inv.biomass = Math.min(9999999, (inv.biomass || 0) + n);
  return inv.biomass;
}
function spendBiomass(inv, n) {
  ensureBio(inv);
  if ((inv.biomass || 0) < n) return false;
  inv.biomass -= n;
  return true;
}

// 生物资源格式化显示
function fmtBio(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(2) + 'M';
  if (n >= 10000) return (n / 1000).toFixed(1) + 'k';
  if (n >= 100) return Math.floor(n).toString();
  return n.toFixed(1);
}

// ---------------------------------------------------------------------
// 💪🧠🌿 基因改造 GENEMOD_DEFS（力量·智力·适应三系，各 6 级，共 18 项）
// ---------------------------------------------------------------------
// 字段说明：
//   id        改造唯一 id（存档引用，勿改）
//   name/icon 展示名
//   branch    分支：str（力量）/ int（智力）/ adp（适应）
//   tier      等级 1~6（同分支需按顺序解锁）
//   cost      消耗 { dna: N, biomass: N }（一次性）
//   desc      说明
//   fx        效果键值（见下方「效果键说明」）
//   flavor    一句设定（纯设定，无伦理评判，只谈机制）
//
// 效果键说明（全部作用于人口属性，为全局乘区）：
//   力量系：
//     minerMul      采矿机产量倍率（力量→体力劳动）
//     buildSpeedMul 建筑建造速度倍率
//     carryMul      手动采集携带量倍率
//     repairMul     维修速度倍率
//   智力系：
//     labMul        实验室科技产出倍率
//     researchMul   科技研究速度倍率（科技点消耗 -N% 用 researchCostMul）
//     researchCostMul 科技解锁费用倍率（<1 = 更便宜）
//     tradeMul      贸易议价收益倍率
//   适应系：
//     consumeMul    人口水/食物消耗倍率（<1 = 更少）
//     disasterMul   灾难伤害倍率（<1 = 更抗）
//     growthMul     人口增长速度倍率
//     plagueResist  瘟疫抗性（0~1，减免感染概率与致死）
const GENEMOD_DEFS = {
  // ==================== 力量系（str）：体力与工程 ====================
  'g-str-1': {
    name: '肌纤维强化I', icon: '💪', branch: 'str', tier: 1,
    cost: { dna: 5, biomass: 20 },
    desc: '慢肌纤维密度 +20%，采矿机产量 +10%。',
    fx: { minerMul: 1.1 },
    flavor: '第一代改造者能单手提起采矿钻头。',
  },
  'g-str-2': {
    name: '肌纤维强化II', icon: '💪', branch: 'str', tier: 2,
    cost: { dna: 12, biomass: 50 },
    desc: '快肌纤维同步优化，采矿机产量再 +15%（叠加）。',
    fx: { minerMul: 1.15 },
    flavor: '肌肉记忆被写进了基因。',
  },
  'g-str-3': {
    name: '骨骼致密化', icon: '🦴', branch: 'str', tier: 3,
    cost: { dna: 25, biomass: 100 },
    desc: '骨密度 +40%，建筑建造速度 +20%。',
    fx: { buildSpeedMul: 1.2 },
    flavor: '脚手架上的工人不再需要外骨骼。',
  },
  'g-str-4': {
    name: '代谢加速', icon: '🔥', branch: 'str', tier: 4,
    cost: { dna: 45, biomass: 180 },
    desc: 'ATP 合成效率提升，手动采集携带量 +50%。',
    fx: { carryMul: 1.5 },
    flavor: '一趟顶过去三趟。',
  },
  'g-str-5': {
    name: '工程直觉', icon: '🔧', branch: 'str', tier: 5,
    cost: { dna: 70, biomass: 280 },
    desc: '空间感知强化，维修速度 +40%。',
    fx: { repairMul: 1.4 },
    flavor: '看一眼就知道哪里松了。',
  },
  'g-str-6': {
    name: '泰坦之躯', icon: '🦍', branch: 'str', tier: 6,
    cost: { dna: 110, biomass: 450 },
    desc: '终极力量改造：采矿 +20%、建造 +20%（叠加）。',
    fx: { minerMul: 1.2, buildSpeedMul: 1.2 },
    flavor: '火星重力下，他们像超人一样工作。',
  },

  // ==================== 智力系（int）：科研与贸易 ====================
  'g-int-1': {
    name: '神经可塑性I', icon: '🧠', branch: 'int', tier: 1,
    cost: { dna: 5, biomass: 20 },
    desc: '突触可塑性增强，实验室科技产出 +10%。',
    fx: { labMul: 1.1 },
    flavor: '学习速度翻倍，忘性减半。',
  },
  'g-int-2': {
    name: '神经可塑性II', icon: '🧠', branch: 'int', tier: 2,
    cost: { dna: 12, biomass: 50 },
    desc: '髓鞘化加速，实验室科技产出再 +15%（叠加）。',
    fx: { labMul: 1.15 },
    flavor: '思维在超导。',
  },
  'g-int-3': {
    name: '记忆宫殿', icon: '🏛️', branch: 'int', tier: 3,
    cost: { dna: 25, biomass: 100 },
    desc: '工作记忆扩容，科技解锁费用 -15%。',
    fx: { researchCostMul: 0.85 },
    flavor: '整本手册背下来，只用看一遍。',
  },
  'g-int-4': {
    name: '模式识别', icon: '🔍', branch: 'int', tier: 4,
    cost: { dna: 45, biomass: 180 },
    desc: '前额叶优化，贸易议价收益 +20%。',
    fx: { tradeMul: 1.2 },
    flavor: '地球商人开始抱怨火星人太精。',
  },
  'g-int-5': {
    name: '群体智能', icon: '🐝', branch: 'int', tier: 5,
    cost: { dna: 70, biomass: 280 },
    desc: '镜像神经元强化，科研速度 +25%（科技点产出再 +25%）。',
    fx: { researchMul: 1.25 },
    flavor: '一个实验室像一个大脑一样思考。',
  },
  'g-int-6': {
    name: '超脑', icon: '🌌', branch: 'int', tier: 6,
    cost: { dna: 110, biomass: 450 },
    desc: '终极智力改造：实验室 +20%、科研费用 -10%（叠加）。',
    fx: { labMul: 1.2, researchCostMul: 0.9 },
    flavor: '他们解方程像呼吸一样自然。',
  },

  // ==================== 适应系（adp）：生存与韧性 ====================
  'g-adp-1': {
    name: '低氧耐受I', icon: '🫁', branch: 'adp', tier: 1,
    cost: { dna: 5, biomass: 20 },
    desc: '血红蛋白优化，人口水/食物消耗 -10%。',
    fx: { consumeMul: 0.9 },
    flavor: '一口空气用出两口的效果。',
  },
  'g-adp-2': {
    name: '辐射修复I', icon: '☢️', branch: 'adp', tier: 2,
    cost: { dna: 12, biomass: 50 },
    desc: 'DNA 损伤修复增强，灾难伤害 -15%。',
    fx: { disasterMul: 0.85 },
    flavor: '细胞自带维修队。',
  },
  'g-adp-3': {
    name: '代谢休眠', icon: '😴', branch: 'adp', tier: 3,
    cost: { dna: 25, biomass: 100 },
    desc: '可控低代谢状态，人口消耗再 -15%（叠加）。',
    fx: { consumeMul: 0.85 },
    flavor: '沙尘暴天，全城一起"省电模式"。',
  },
  'g-adp-4': {
    name: '免疫矩阵', icon: '🛡️', branch: 'adp', tier: 4,
    cost: { dna: 45, biomass: 180 },
    desc: '广谱免疫记忆，瘟疫抗性 +0.3。',
    fx: { plagueResist: 0.3 },
    flavor: '病毒见了他们绕道走。',
  },
  'g-adp-5': {
    name: '快速繁育', icon: '👶', branch: 'adp', tier: 5,
    cost: { dna: 70, biomass: 280 },
    desc: '生殖周期优化，人口增长速度 +30%。',
    fx: { growthMul: 1.3 },
    flavor: '火星婴儿潮。',
  },
  'g-adp-6': {
    name: '火星之子', icon: '🌟', branch: 'adp', tier: 6,
    cost: { dna: 110, biomass: 450 },
    desc: '终极适应改造：全灾难 -15%、瘟疫抗性 +0.2（叠加）。',
    fx: { disasterMul: 0.85, plagueResist: 0.2 },
    flavor: '他们不再是地球人，是火星人。',
  },
};

// 基因改造展示顺序（按分支/等级）
const GENEMOD_ORDER = [
  'g-str-1', 'g-str-2', 'g-str-3', 'g-str-4', 'g-str-5', 'g-str-6',
  'g-int-1', 'g-int-2', 'g-int-3', 'g-int-4', 'g-int-5', 'g-int-6',
  'g-adp-1', 'g-adp-2', 'g-adp-3', 'g-adp-4', 'g-adp-5', 'g-adp-6',
];

// 基因改造分支定义（UI 用）
const GENEMOD_BRANCHES = {
  str: { name: '力量', icon: '💪', color: '#f87171' },
  int: { name: '智力', icon: '🧠', color: '#a5b4fc' },
  adp: { name: '适应', icon: '🌿', color: '#4ade80' },
};

// ---------------------------------------------------------------------
// 🏢 生物建筑定义 BBUILD_DEFS（8 种）
// ---------------------------------------------------------------------
// 字段说明：
//   id        建筑 id（与 builder.buildings 里的 b.id 对应）
//   name/icon 展示名；cost 建造成本；power 耗电
//   upkeep    每分钟维护；needBTech 前置生物科技 id（无则 null）
//   desc 说明；fxText 效果文本；flavor 一句设定
//
// 平衡：生物建筑是中前期线，单座造价对标「温室级」（~500 价值），
// 回本靠 dna 的高价值（60/个）与人口增长。
const BBUILD_DEFS = {
  'genebank': {
    name: '基因库', icon: '🧬',
    cost: { steel: 40, tech: 30, biomass: 30 },
    // 造价：160+300+90 = 550 价值
    power: 10,
    upkeep: { biomass: 2 },  // 每分钟 2 生物质（培养基）
    needBTech: null,  // 基础建筑：人口 ≥10 即解锁
    desc: '存储基因样本，产出基因点。每 90 秒产 1 dna。',
    fxText: ['每 90 秒 +1 🧬', '耗电 10', '每分钟耗生物质×2'],
    flavor: '全城的基因备份，存在零下 80 度里。',
  },
  'clonevat': {
    name: '克隆缸', icon: '🧫',
    cost: { steel: 60, tech: 50, biomass: 40 },
    // 造价：240+500+120 = 860 价值
    power: 15,
    upkeep: {},
    needBTech: 'b-clone-1',
    desc: '培养克隆体：每批 5 人，耗时 5 分钟，消耗生物质×20、dna×2、水×30。',
    fxText: ['每批 +5 人口', '每批 5 分钟', '耗电 15'],
    flavor: '缸里的水温和羊水一样。',
  },
  'biosphere': {
    name: '生物圈3号', icon: '🌍',
    cost: { steel: 80, tech: 40, biomass: 60 },
    // 造价：320+400+180 = 900 价值
    power: 20,
    upkeep: { water: 5 },  // 每分钟 5 水
    needBTech: null,  // 基础建筑：人口 ≥15 即解锁
    desc: '闭环生态：每分钟产 biomass×6、食物×4；每座人口增长 +10%。',
    fxText: ['每分钟生物质×6、食物×4', '人口增长 +10%/座', '耗电 20'],
    flavor: '一个不需要地球的小地球。',
  },
  'seqcenter': {
    name: '测序中心', icon: '🔬',
    cost: { steel: 50, tech: 60, biomass: 20 },
    // 造价：200+600+60 = 860 价值
    power: 15,
    upkeep: { tech: 1 },
    needBTech: 'b-gene-1',
    desc: '高速基因测序：基因库 dna 产出 +50%，基因改造费用 -10%。',
    fxText: ['基因库产出 +50%', '基因改造 -10% 费用', '耗电 15'],
    flavor: '一天读完一个人的全部基因。',
  },
  'quarantine': {
    name: '隔离站', icon: '🚧',
    cost: { steel: 70, tech: 30, biomass: 40 },
    // 造价：280+300+120 = 700 价值
    power: 10,
    upkeep: {},
    needBTech: 'b-med-1',
    desc: '瘟疫隔离：瘟疫传播速度 -40%/座，治愈费用 -20%/座。',
    fxText: ['瘟疫传播 -40%/座', '治愈费用 -20%/座'],
    flavor: '大门一关，病毒就急了。',
  },
  'geneforge': {
    name: '基因熔炉', icon: '⚗️',
    cost: { steel: 120, tech: 100, biomass: 100 },
    // 造价：480+1000+300 = 1780 价值
    power: 30,
    upkeep: { biomass: 5 },
    needBTech: 'b-gene-3',
    desc: '定向基因编辑工厂：基因改造费用 -25%，可执行"基因重铸"（重置改造返还 50% dna）。',
    fxText: ['基因改造 -25% 费用', '解锁基因重铸', '耗电 30'],
    flavor: '在这里，基因是橡皮泥。',
  },
  'spore': {
    name: '孢子塔', icon: '🍄',
    cost: { steel: 60, tech: 40, biomass: 80 },
    // 造价：240+400+240 = 880 价值
    power: 10,
    upkeep: { water: 3 },
    needBTech: 'b-eco-2',
    desc: '大气孢子塔：每分钟向大气释放孢子，全城食物 +5%/座（上限 +25%）。',
    fxText: ['全城食物 +5%/座', '上限 +25%'],
    flavor: '蘑菇的梦想是改变大气。',
  },
  'arkvault': {
    name: '方舟基因库', icon: '🛳️',
    cost: { steel: 200, tech: 150, biomass: 150 },
    // 造价：800+1500+450 = 2750 价值（旗舰）
    power: 25,
    upkeep: { biomass: 3 },
    needBTech: 'b-gene-4',
    desc: '终极基因库：dna 产出 +100%，瘟疫抗性 +0.2，基因改造费用 -15%（叠加）。',
    fxText: ['dna 产出 +100%', '瘟疫抗性 +0.2', '基因改造 -15%'],
    flavor: '地球生命的火种，存在火星。',
  },
};
const BBUILD_ORDER = [
  'genebank', 'clonevat', 'biosphere', 'seqcenter',
  'quarantine', 'geneforge', 'spore', 'arkvault',
];

// 生物建筑 id 集合
const BBUILD_IDS = new Set(BBUILD_ORDER);

// ---------------------------------------------------------------------
// ⬆️ 生物建筑升级 BUPGRADE_DEFS（8 种建筑，各 2 级）
// ---------------------------------------------------------------------
// 字段说明：
//   levels[i]：升到 i+2 级的配置（i=0 → 升 2 级，i=1 → 升 3 级）
//   cost   升级费用；desc 一句话；fxText UI 文本；fx 效果键
// 效果键说明（mode 含义见 BioManager.bbUpgradeFx）：
//   intervalMul  基因库产出间隔倍率（mul）   yieldAdd   基因库每次 +N dna（add）
//   timeMul      克隆耗时倍率（mul）          batchAdd   克隆每批 +N 人（add）
//   outputMul    生物圈产出倍率（mul）        slotsAdd   群落槽位 +N（add）
//   geneMul      测序中心基因库加成（set）    geneCostMul 改造费用倍率（mul）
//   spreadMul    隔离站传播倍率（mul）        cureMul    治愈费用倍率（mul）
//   respecRefund 重铸返还比例（set）          foodAdd    孢子塔食物加成（add）
//   capAdd       孢子塔上限加成（add）        dnaMul     方舟 dna 倍率（set）
//   resistAdd    方舟抗性加成（add）
const BUPGRADE_DEFS = {
  'genebank': {
    name: '基因库',
    levels: [
      {
        cost: { steel: 40, tech: 30 },
        desc: 'Lv2：低温优化，产出间隔 ×0.85。',
        fxText: ['产出间隔 ×0.85'],
        fx: { intervalMul: 0.85 },
      },
      {
        cost: { steel: 100, tech: 80 },
        desc: 'Lv3：并行培养，每次产出 +1 dna。',
        fxText: ['每次 +1 dna'],
        fx: { yieldAdd: 1 },
      },
    ],
  },
  'clonevat': {
    name: '克隆缸',
    levels: [
      {
        cost: { steel: 60, tech: 50 },
        desc: 'Lv2：营养优化，培养耗时 -20%。',
        fxText: ['耗时 -20%'],
        fx: { timeMul: 0.8 },
      },
      {
        cost: { steel: 150, tech: 120 },
        desc: 'Lv3：多胚培养，每批 +2 人。',
        fxText: ['每批 +2 人'],
        fx: { batchAdd: 2 },
      },
    ],
  },
  'biosphere': {
    name: '生物圈3号',
    levels: [
      {
        cost: { steel: 80, tech: 40 },
        desc: 'Lv2：生态强化，产出 +30%。',
        fxText: ['产出 +30%'],
        fx: { outputMul: 1.3 },
      },
      {
        cost: { steel: 180, tech: 100 },
        desc: 'Lv3：空间扩展，群落槽位 +1。',
        fxText: ['槽位 +1'],
        fx: { slotsAdd: 1 },
      },
    ],
  },
  'seqcenter': {
    name: '测序中心',
    levels: [
      {
        cost: { steel: 50, tech: 60 },
        desc: 'Lv2：通量提升，基因库加成 50% → 80%。',
        fxText: ['基因库加成 →80%'],
        fx: { geneMul: 1.8 },
      },
      {
        cost: { steel: 120, tech: 140 },
        desc: 'Lv3：成本优化，基因改造费用 -20%（叠加）。',
        fxText: ['改造费用 -20%'],
        fx: { geneCostMul: 0.8 },
      },
    ],
  },
  'quarantine': {
    name: '隔离站',
    levels: [
      {
        cost: { steel: 70, tech: 30 },
        desc: 'Lv2：负压隔离，瘟疫传播 -60%（单座）。',
        fxText: ['传播 -60%'],
        fx: { spreadMul: 0.4 },
      },
      {
        cost: { steel: 160, tech: 80 },
        desc: 'Lv3：快速检测，治愈费用 -35%（单座）。',
        fxText: ['治愈 -35%'],
        fx: { cureMul: 0.65 },
      },
    ],
  },
  'geneforge': {
    name: '基因熔炉',
    levels: [
      {
        cost: { steel: 120, tech: 100 },
        desc: 'Lv2：编辑优化，基因改造费用 -35%（叠加）。',
        fxText: ['改造费用 -35%'],
        fx: { geneCostMul: 0.65 },
      },
      {
        cost: { steel: 280, tech: 220 },
        desc: 'Lv3：材料回收，基因重铸返还 70%。',
        fxText: ['重铸返还 70%'],
        fx: { respecRefund: 0.7 },
      },
    ],
  },
  'spore': {
    name: '孢子塔',
    levels: [
      {
        cost: { steel: 60, tech: 40 },
        desc: 'Lv2：孢子增产，每座食物 +8%。',
        fxText: ['食物 +8%/座'],
        fx: { foodAdd: 0.08 },
      },
      {
        cost: { steel: 140, tech: 100 },
        desc: 'Lv3：大气改造，加成上限 → 40%。',
        fxText: ['上限 →40%'],
        fx: { capAdd: 0.15 },
      },
    ],
  },
  'arkvault': {
    name: '方舟基因库',
    levels: [
      {
        cost: { steel: 200, tech: 150 },
        desc: 'Lv2：深低温存储，dna 产出 +150%。',
        fxText: ['dna +150%'],
        fx: { dnaMul: 2.5 },
      },
      {
        cost: { steel: 450, tech: 320 },
        desc: 'Lv3：免疫档案，瘟疫抗性 +0.3。',
        fxText: ['抗性 +0.3'],
        fx: { resistAdd: 0.3 },
      },
    ],
  },
};

// ---------------------------------------------------------------------
// 🌿 生态群落 ECO_DEFS（12 种）
// ---------------------------------------------------------------------
// 字段说明：
//   id        群落唯一 id
//   name/icon 展示名
//   cost      入驻费用（一次性 { biomass, dna }）
//   needBTech 前置生物科技
//   desc      说明
//   fxText    效果文本
//   fx        效果键值（BioManager.getBuffs 汇总，按生物圈座数叠加）
// 效果键说明：
//   biomassMul   生物质产出倍率      foodMul    食物产出倍率
//   dnaMul       dna 产出倍率         growthMul  人口增长倍率
//   waterMul     水产出倍率           powerAdd   电力 +N（生物发电）
//   plagueResist 瘟疫抗性 +N          consumeMul 人口消耗倍率
// 规则：每座生物圈3号可搭载 2 个群落；群落可重复入驻不同生物圈。
const ECO_DEFS = {
  'eco-algae': {
    name: '藻类塘', icon: '🟢',
    cost: { biomass: 30 }, needBTech: null,
    desc: '基础光合群落：生物质产出 +30%。',
    fxText: ['生物质 +30%'],
    fx: { biomassMul: 1.3 },
  },
  'eco-fungi': {
    name: '真菌网', icon: '🍄',
    cost: { biomass: 40 }, needBTech: null,
    desc: '分解者网络：食物产出 +20%。',
    fxText: ['食物 +20%'],
    fx: { foodMul: 1.2 },
  },
  'eco-moss': {
    name: '苔藓毯', icon: '🟩',
    cost: { biomass: 50 }, needBTech: 'b-eco-1',
    desc: '保水苔藓：水产出 +25%。',
    fxText: ['水 +25%'],
    fx: { waterMul: 1.25 },
  },
  'eco-bee': {
    name: '授粉蜂群', icon: '🐝',
    cost: { biomass: 60, dna: 2 }, needBTech: 'b-eco-1',
    desc: '基因改良蜜蜂：食物产出 +35%。',
    fxText: ['食物 +35%'],
    fx: { foodMul: 1.35 },
  },
  'eco-worm': {
    name: '蚯蚓床', icon: '🪱',
    cost: { biomass: 60 }, needBTech: 'b-eco-1',
    desc: '土壤改良：生物质产出 +40%。',
    fxText: ['生物质 +40%'],
    fx: { biomassMul: 1.4 },
  },
  'eco-battery': {
    name: '电细菌', icon: '⚡',
    cost: { biomass: 80, dna: 3 }, needBTech: 'b-eco-2',
    desc: '产电细菌群落：每座生物圈 +8 电力。',
    fxText: ['电力 +8/座'],
    fx: { powerAdd: 8 },
  },
  'eco-pharma': {
    name: '药用植物园', icon: '💊',
    cost: { biomass: 80, dna: 5 }, needBTech: 'b-med-1',
    desc: '药用植物：瘟疫抗性 +0.15。',
    fxText: ['瘟疫抗性 +0.15'],
    fx: { plagueResist: 0.15 },
  },
  'eco-fruit': {
    name: '果林', icon: '🍎',
    cost: { biomass: 100, dna: 3 }, needBTech: 'b-eco-2',
    desc: '多年生果林：食物产出 +50%，人口增长 +5%。',
    fxText: ['食物 +50%', '人口增长 +5%'],
    fx: { foodMul: 1.5, growthMul: 1.05 },
  },
  'eco-kelp': {
    name: '巨藻林', icon: '🌊',
    cost: { biomass: 100, dna: 4 }, needBTech: 'b-eco-2',
    desc: '水下巨藻：生物质 +50%，水 +15%。',
    fxText: ['生物质 +50%', '水 +15%'],
    fx: { biomassMul: 1.5, waterMul: 1.15 },
  },
  'eco-bird': {
    name: '候鸟群', icon: '🐦',
    cost: { biomass: 120, dna: 6 }, needBTech: 'b-eco-3',
    desc: '生态指示物种：人口增长 +15%。',
    fxText: ['人口增长 +15%'],
    fx: { growthMul: 1.15 },
  },
  'eco-carnivore': {
    name: '顶级捕食者', icon: '🦁',
    cost: { biomass: 150, dna: 10 }, needBTech: 'b-eco-3',
    desc: '完整食物链：全生态产出 +20%。',
    fxText: ['生物质/食物/水 +20%'],
    fx: { biomassMul: 1.2, foodMul: 1.2, waterMul: 1.2 },
  },
  'eco-gaia': {
    name: '盖亚核心', icon: '🌟',
    cost: { biomass: 300, dna: 25 }, needBTech: 'b-eco-4',
    desc: '自调节生态核心：dna 产出 +50%，人口消耗 -10%。',
    fxText: ['dna +50%', '人口消耗 -10%'],
    fx: { dnaMul: 1.5, consumeMul: 0.9 },
  },
};
const ECO_ORDER = Object.keys(ECO_DEFS);

// ---------------------------------------------------------------------
// 🧫 克隆模板 CLONE_DEFS（10 种）
// ---------------------------------------------------------------------
// 字段说明：
//   id        模板唯一 id
//   name/icon 展示名
//   batchMul  每批人数倍率（基础 5 人 × batchMul）
//   timeMul   每批耗时倍率（<1 = 更快）
//   costMul   每批资源消耗倍率
//   needBTech 前置生物科技
//   desc      说明
//   fxText    效果文本
//   trait     克隆体特性：population 属性微调（getBuffs 汇总）
//             键：minerMul / labMul / growthMul / consumeMul（与基因改造同名）
// 平衡：特化模板用更高成本换定向加成；通用模板便宜量大。
const CLONE_DEFS = {
  'cl-std': {
    name: '标准克隆体', icon: '🧑‍🤝‍🧑',
    batchMul: 1, timeMul: 1, costMul: 1, needBTech: 'b-clone-1',
    desc: '通用型克隆体，无特性，性价比最高。',
    fxText: ['每批 5 人', '无特性'],
    trait: {},
  },
  'cl-worker': {
    name: '工兵克隆体', icon: '👷',
    batchMul: 1, timeMul: 1.2, costMul: 1.3, needBTech: 'b-clone-2',
    desc: '力量强化克隆：采矿产量 +5%（按克隆人口比例折算，见 traitScale）。',
    fxText: ['采矿 +5%（按比例）', '耗时 +20%'],
    trait: { minerMul: 1.05 },
  },
  'cl-scholar': {
    name: '学者克隆体', icon: '👩‍🔬',
    batchMul: 0.8, timeMul: 1.5, costMul: 1.6, needBTech: 'b-clone-2',
    desc: '智力强化克隆：实验室产出 +8%（按比例）。',
    fxText: ['实验室 +8%（按比例）', '每批 4 人'],
    trait: { labMul: 1.08 },
  },
  'cl-soldier': {
    name: '卫兵克隆体', icon: '💂',
    batchMul: 1, timeMul: 1.3, costMul: 1.4, needBTech: 'b-clone-3',
    desc: '战斗克隆：城市防御 +10%（按比例，需军事系统）。',
    fxText: ['防御 +10%（按比例）'],
    trait: { defenseMul: 1.1 },
  },
  'cl-swarm': {
    name: '蜂群克隆体', icon: '🐝',
    batchMul: 2, timeMul: 1, costMul: 1.8, needBTech: 'b-clone-3',
    desc: '快速增殖型：每批 10 人，但消耗 +80%。',
    fxText: ['每批 10 人', '消耗 +80%'],
    trait: {},
  },
  'cl-eco': {
    name: '生态克隆体', icon: '🌿',
    batchMul: 1, timeMul: 1, costMul: 1.2, needBTech: 'b-clone-2',
    desc: '低消耗克隆：人口水/食物消耗 -10%（按比例）。',
    fxText: ['消耗 -10%（按比例）'],
    trait: { consumeMul: 0.9 },
  },
  'cl-medic': {
    name: '医护克隆体', icon: '👩‍⚕️',
    batchMul: 0.8, timeMul: 1.2, costMul: 1.5, needBTech: 'b-med-2',
    desc: '医疗克隆：瘟疫抗性 +0.1（按比例），人口增长 +5%。',
    fxText: ['瘟疫抗性 +0.1', '增长 +5%'],
    trait: { plagueResist: 0.1, growthMul: 1.05 },
  },
  'cl-elder': {
    name: '智者克隆体', icon: '🧙',
    batchMul: 0.6, timeMul: 2, costMul: 2, needBTech: 'b-clone-4',
    desc: '记忆移植克隆：科技产出 +15%（按比例），但每批仅 3 人。',
    fxText: ['科技 +15%（按比例）', '每批 3 人'],
    trait: { labMul: 1.15 },
  },
  'cl-titan': {
    name: '泰坦克隆体', icon: '🦍',
    batchMul: 0.4, timeMul: 2.5, costMul: 3, needBTech: 'b-clone-4',
    desc: '巨型克隆：建造速度 +20%（按比例），每批仅 2 人。',
    fxText: ['建造 +20%（按比例）', '每批 2 人'],
    trait: { buildSpeedMul: 1.2 },
  },
  'cl-prime': {
    name: '原体', icon: '🌟',
    batchMul: 0.2, timeMul: 3, costMul: 5, needBTech: 'b-clone-5',
    desc: '完美克隆体：全属性 +10%（按比例），每批仅 1 人。',
    fxText: ['全属性 +10%', '每批 1 人'],
    trait: { minerMul: 1.1, labMul: 1.1, growthMul: 1.1 },
  },
};
const CLONE_ORDER = Object.keys(CLONE_DEFS);

// 克隆特性折算：特性按克隆人口占总人口比例线性折算
// 例：克隆人口占比 20%，工兵 trait minerMul=1.05 → 实际 1 + 0.05×0.2 = 1.01
function scaleTrait(traitMul, ratio) {
  return 1 + (traitMul - 1) * Math.max(0, Math.min(1, ratio));
}

// ---------------------------------------------------------------------
// 🔬 生物科技 BTECH_DEFS（15 项）
// ---------------------------------------------------------------------
// 字段说明：
//   id        科技唯一 id（存档引用，勿改）
//   name/icon 展示名；cost { dna, tech }（一次性）；needs 前置
//   desc 说明；fx 效果键值；flavor 一句设定
// 效果键说明：
//   geneCostMul    基因改造费用倍率      geneIntervalMul 基因库产出间隔倍率
//   geneYieldAdd   基因库每次产出 +N dna  cloneTimeMul   克隆耗时倍率
//   cloneBatchAdd  克隆每批人数 +N       ecoSlotsAdd     生物圈群落槽位 +N
//   cureCostMul    瘟疫治愈费用倍率      plagueGapMul    瘟疫间隔倍率（>1 = 更少）
//   plagueSpreadMul 瘟疫传播倍率        biomassMul      生物质产出倍率
//   unlockBBuilding 解锁生物建筑 id（0/1 开关，见 BBUILD_DEFS.needBTech 注释）
const BTECH_DEFS = {
  'b-gene-1': {
    name: '基因测序', icon: '🔬', cost: { dna: 3 }, needs: [],
    desc: '全基因组测序，解锁测序中心。',
    fx: { unlockBBuilding: 'seqcenter' },
    flavor: '先读懂，再改写。',
  },
  'b-gene-2': {
    name: 'CRISPR 阵列', icon: '✂️', cost: { dna: 10 }, needs: ['b-gene-1'],
    desc: '高效基因编辑，基因改造费用 -15%。',
    fx: { geneCostMul: 0.85 },
    flavor: '基因剪刀，咔嚓。',
  },
  'b-gene-3': {
    name: '定向进化', icon: '🧪', cost: { dna: 25 }, needs: ['b-gene-2'],
    desc: '实验室定向进化，解锁基因熔炉。',
    fx: { unlockBBuilding: 'geneforge' },
    flavor: '把一万年压缩成一星期。',
  },
  'b-gene-4': {
    name: '全基因组合成', icon: '🌟', cost: { dna: 60 }, needs: ['b-gene-3'],
    desc: '从零合成基因组，解锁方舟基因库。',
    fx: { unlockBBuilding: 'arkvault' },
    flavor: '生命 2.0，从培养皿开始。',
  },
  'b-clone-1': {
    name: '克隆基础', icon: '🧫', cost: { dna: 8 }, needs: [],
    desc: '体细胞克隆，解锁克隆缸。',
    fx: { unlockBBuilding: 'clonevat' },
    flavor: '第一个克隆体睁开了眼睛。',
  },
  'b-clone-2': {
    name: '分化诱导', icon: '🧑‍🤝‍🧑', cost: { dna: 20 }, needs: ['b-clone-1'],
    desc: '定向分化，克隆每批人数 +1。',
    fx: { cloneBatchAdd: 1 },
    flavor: '想长成什么样，就长成什么样。',
  },
  'b-clone-3': {
    name: '加速培养', icon: '⏩', cost: { dna: 35 }, needs: ['b-clone-2'],
    desc: '培养加速，克隆耗时 -25%。',
    fx: { cloneTimeMul: 0.75 },
    flavor: '五年长大，压缩到五分钟。',
  },
  'b-clone-4': {
    name: '记忆移植', icon: '🧠', cost: { dna: 55 }, needs: ['b-clone-3'],
    desc: '记忆编码移植，解锁智者/泰坦克隆体。',
    fx: {},
    flavor: '经验不再随死亡消失。',
  },
  'b-clone-5': {
    name: '完美克隆', icon: '💎', cost: { dna: 90 }, needs: ['b-clone-4'],
    desc: '零缺陷克隆，解锁原体，克隆耗时再 -20%（叠加）。',
    fx: { cloneTimeMul: 0.8 },
    flavor: '没有瑕疵的生命。',
  },
  'b-eco-1': {
    name: '闭环生态', icon: '♻️', cost: { dna: 6 }, needs: [],
    desc: '生态循环理论，生物质产出 +25%。',
    fx: { biomassMul: 1.25 },
    flavor: '废物只是放错地方的资源。',
  },
  'b-eco-2': {
    name: '生态位工程', icon: '🌿', cost: { dna: 18 }, needs: ['b-eco-1'],
    desc: '人工生态位，生物圈群落槽位 +1（每座 3 个）。',
    fx: { ecoSlotsAdd: 1 },
    flavor: '给每个物种安排一个工位。',
  },
  'b-eco-3': {
    name: '顶级生态', icon: '🦁', cost: { dna: 40 }, needs: ['b-eco-2'],
    desc: '完整食物链，生物质产出再 +25%（叠加）。',
    fx: { biomassMul: 1.25 },
    flavor: '有捕食者的生态才是活的。',
  },
  'b-eco-4': {
    name: '盖亚工程', icon: '🌍', cost: { dna: 80 }, needs: ['b-eco-3'],
    desc: '行星生态工程，解锁盖亚核心群落。',
    fx: {},
    flavor: '把火星当成一个生命来治。',
  },
  'b-med-1': {
    name: '基因疫苗', icon: '💉', cost: { dna: 15 }, needs: [],
    desc: '广谱基因疫苗，解锁隔离站，瘟疫传播 -20%。',
    fx: { unlockBBuilding: 'quarantine', plagueSpreadMul: 0.8 },
    flavor: '一针管一辈子。',
  },
  'b-med-2': {
    name: '瘟疫建模', icon: '📊', cost: { dna: 45 }, needs: ['b-med-1'],
    desc: '流行病学模型，瘟疫治愈费用 -30%，预警 +10 秒。',
    fx: { cureCostMul: 0.7 },
    flavor: '在病毒动手前算出它的每一步。',
  },
};
const BTECH_ORDER = Object.keys(BTECH_DEFS);

// ---------------------------------------------------------------------
// 🦠 基因瘟疫毒株 PLAGUE_DEFS（8 种）
// ---------------------------------------------------------------------
// 字段说明：
//   id        毒株唯一 id
//   name/icon 展示名
//   w         随机权重
//   spread    基础传播率（每分钟新增感染比例，0~1）
//   lethal    致死率（每分钟感染者死亡比例，0~1）
//   cureDna   治愈需要的一次性 dna 消耗
//   durationMs 自然持续时间（超时自动消退，感染者部分死亡）
//   effects   持续效果：{ prodMul（全城生产倍率）, growthMul（人口增长倍率）,
//                        labMul（实验室倍率）, buildMul（建造速度倍率） }
//   desc      说明；flavor 一句设定
//
// 平衡：瘟疫是中后期人口威胁；隔离站 + 基因改造 + 科技三重压制；
// 治愈费对标毒株强度（10~60 dna）。
const PLAGUE_DEFS = {
  'pl-flu': {
    name: '火星流感', icon: '🤧', w: 25,
    spread: 0.08, lethal: 0.005, cureDna: 10, durationMs: 3 * 60 * 1000,
    effects: { prodMul: 0.95, growthMul: 0.9 },
    desc: '常见呼吸道变异株：生产 -5%，增长 -10%。',
    flavor: '火星的第一场感冒。',
  },
  'pl-rust': {
    name: '锈蚀热', icon: '🥵', w: 20,
    spread: 0.06, lethal: 0.01, cureDna: 15, durationMs: 4 * 60 * 1000,
    effects: { prodMul: 0.9, buildMul: 0.9 },
    desc: '高热伴随金属代谢紊乱：生产 -10%，建造 -10%。',
    flavor: '汗水里带着铁锈味。',
  },
  'pl-spore': {
    name: '孢子肺炎', icon: '🍄', w: 15,
    spread: 0.12, lethal: 0.008, cureDna: 20, durationMs: 4 * 60 * 1000,
    effects: { prodMul: 0.9, labMul: 0.85 },
    desc: '真菌孢子感染：传播快，实验室 -15%。',
    flavor: '孢子塔的叛逆期。',
  },
  'pl-gene': {
    name: '基因崩解', icon: '🧬', w: 12,
    spread: 0.05, lethal: 0.02, cureDna: 30, durationMs: 5 * 60 * 1000,
    effects: { prodMul: 0.85, growthMul: 0.7, labMul: 0.9 },
    desc: '逆转录病毒攻击基因改造：致死 2%/分钟，增长 -30%。',
    flavor: '改造过的基因成了靶子。',
  },
  'pl-neuro': {
    name: '神经朊毒', icon: '🧠', w: 10,
    spread: 0.04, lethal: 0.015, cureDna: 35, durationMs: 5 * 60 * 1000,
    effects: { labMul: 0.7, prodMul: 0.9 },
    desc: '攻击神经系统：实验室 -30%。',
    flavor: '患者先忘记名字，再忘记呼吸。',
  },
  'pl-blood': {
    name: '赤沙热', icon: '🩸', w: 8,
    spread: 0.07, lethal: 0.025, cureDna: 45, durationMs: 6 * 60 * 1000,
    effects: { prodMul: 0.8, growthMul: 0.6, buildMul: 0.85 },
    desc: '出血热变异株：致死 2.5%/分钟，全城生产 -20%。',
    flavor: '沙尘暴里带来的不速之客。',
  },
  'pl-clone': {
    name: '克隆排斥', icon: '🧫', w: 6,
    spread: 0.10, lethal: 0.012, cureDna: 40, durationMs: 5 * 60 * 1000,
    effects: { growthMul: 0.5, prodMul: 0.9 },
    desc: '只感染克隆体：克隆人口增长 -50%，自然人口无影响。',
    flavor: '缸里长大的孩子病了。',
    cloneOnly: true,  // 只影响克隆人口
  },
  'pl-omega': {
    name: '欧米茄株', icon: '☠️', w: 4,
    spread: 0.09, lethal: 0.04, cureDna: 60, durationMs: 8 * 60 * 1000,
    effects: { prodMul: 0.7, growthMul: 0.4, labMul: 0.7, buildMul: 0.8 },
    desc: '终极毒株：致死 4%/分钟，全城生产 -30%。',
    flavor: '它不想杀死城市，它想成为城市。',
  },
};
const PLAGUE_ORDER = Object.keys(PLAGUE_DEFS);

// ---------------------------------------------------------------------
// 🌱 生物事件 BEVENT_DEFS（14 种）
// ---------------------------------------------------------------------
// 字段说明：
//   id        事件唯一 id
//   name/icon 展示名
//   kind      类型：good（好）/ bad（坏）/ plague（瘟疫）/ odd（奇）
//   w         随机权重（同 kind 内归一化；plague 单独掷骰）
//   desc      描述；fxText 效果文本
//   handler   结算方法名（BioManager 上的方法）
const BEVENT_DEFS = {
  // ==================== 好事件（5） ====================
  'ev-bio-bloom': {
    name: '生态繁荣', icon: '🌸', kind: 'good', w: 25,
    desc: '生物圈迎来繁荣期：生物质 +15% 库存，食物 +10% 库存。',
    fxText: ['生物质 +15%', '食物 +10%'],
    handler: 'onBioBloom',
  },
  'ev-bio-mutation': {
    name: '有益突变', icon: '✨', kind: 'good', w: 20,
    desc: '作物发生有益突变：温室产量 +30%，持续 5 分钟。',
    fxText: ['温室 +30% × 5 分钟'],
    handler: 'onBioMutation',
  },
  'ev-bio-genefind': {
    name: '基因宝藏', icon: '💎', kind: 'good', w: 20,
    desc: '在极地冰芯中发现古老基因：dna +8。',
    fxText: ['dna +8'],
    handler: 'onBioGeneFind',
  },
  'ev-bio-babyboom': {
    name: '婴儿潮', icon: '👶', kind: 'good', w: 20,
    desc: '火星婴儿潮：人口增长 +50%，持续 10 分钟。',
    fxText: ['人口增长 +50% × 10 分钟'],
    handler: 'onBioBabyBoom',
  },
  'ev-bio-symbiosis': {
    name: '共生突破', icon: '🤝', kind: 'good', w: 15,
    desc: '发现新的共生关系：随机一个生态群落免费入驻一座生物圈。',
    fxText: ['免费群落入驻 ×1'],
    handler: 'onBioSymbiosis',
  },

  // ==================== 坏事件（4） ====================
  'ev-bio-blight': {
    name: '生态枯萎', icon: '🥀', kind: 'bad', w: 30,
    desc: '生态群落枯萎：生物质 -15% 库存，食物 -10% 库存。',
    fxText: ['生物质 -15%', '食物 -10%'],
    handler: 'onBioBlight',
  },
  'ev-bio-clonefail': {
    name: '克隆事故', icon: '⚠️', kind: 'bad', w: 25,
    desc: '克隆缸污染：当前所有培养批次报废，生物质 -50。',
    fxText: ['培养批次清空', '生物质 -50'],
    handler: 'onBioCloneFail',
  },
  'ev-bio-pest': {
    name: '基因害虫', icon: '🐛', kind: 'bad', w: 25,
    desc: '基因害虫爆发：温室停产 60 秒。',
    fxText: ['温室停产 60 秒'],
    handler: 'onBioPest',
  },
  'ev-bio-leak': {
    name: '基因泄漏', icon: '☣️', kind: 'bad', w: 20,
    desc: '基因库泄漏：dna -5，相干度式"生物安全度" -0.1（见 biosafety）。',
    fxText: ['dna -5', '生物安全度 -0.1'],
    handler: 'onBioLeak',
  },

  // ==================== 瘟疫事件（2，由瘟疫掷骰触发） ====================
  'ev-bio-plague': {
    name: '基因瘟疫爆发', icon: '🦠', kind: 'plague', w: 80,
    desc: '一种基因瘟疫毒株开始传播！',
    fxText: ['随机毒株爆发'],
    handler: 'onBioPlague',
  },
  'ev-bio-plague-mild': {
    name: '轻微疫情', icon: '🤧', kind: 'plague', w: 20,
    desc: '轻微疫情：小规模感染，1 分钟后自然消退。',
    fxText: ['小规模感染 60 秒'],
    handler: 'onBioPlagueMild',
  },

  // ==================== 奇事件（3） ====================
  'ev-bio-awaken': {
    name: '基因觉醒', icon: '👁️', kind: 'odd', w: 35,
    desc: '一批市民自发表达了休眠基因：随机一项未解锁的基因改造 5 折 10 分钟。',
    fxText: ['随机基因改造 5 折 × 10 分钟'],
    handler: 'onBioAwaken',
  },
  'ev-bio-fusion': {
    name: '基因融合', icon: '🌀', kind: 'odd', w: 35,
    desc: '两种生态群落自发融合：随机生物圈的群落效果翻倍 5 分钟。',
    fxText: ['随机生物圈群落 ×2，5 分钟'],
    handler: 'onBioFusion',
  },
  'ev-bio-ark': {
    name: '方舟信号', icon: '📡', kind: 'odd', w: 30,
    desc: '方舟基因库收到地球基因数据：dna +5，或已解锁全部改造时转为 biomass +200。',
    fxText: ['dna +5'],
    handler: 'onBioArk',
  },
};
const BEVENT_ORDER = Object.keys(BEVENT_DEFS);

// ---------------------------------------------------------------------
// 📜 生物合同 BMISSION_DEFS（8 个）
// ---------------------------------------------------------------------
// 字段说明：
//   id        合同唯一 id；name/icon 展示名；desc 说明
//   need      需求；reward 奖励 { res: {...}, dna: N }
//   flavor    一句设定
const BMISSION_DEFS = {
  'bm-gene-1': {
    name: '地球基因订单', icon: '📦',
    desc: '交付 dna×15，用于地球基因库备份。',
    need: { dna: 15 },
    reward: { res: { tech: 80, steel: 50 } },
    flavor: '地球也想备份一份火星。',
  },
  'bm-gene-2': {
    name: '火星生态调查', icon: '🔍',
    desc: '入驻 6 个生态群落（累计）。',
    need: { ecoCount: 6 },
    reward: { dna: 10, res: { biomass: 200 } },
    flavor: '数一数，我们有多少种生命。',
  },
  'bm-clone-1': {
    name: '殖民开拓团', icon: '🧑‍🤝‍🧑',
    desc: '通过克隆新增 20 人口（累计）。',
    need: { clonedPop: 20 },
    reward: { dna: 8, res: { food: 200 } },
    flavor: '新城需要新市民。',
  },
  'bm-mod-1': {
    name: '全民改造计划', icon: '💪',
    desc: '完成 6 项基因改造。',
    need: { genemodCount: 6 },
    reward: { dna: 12 },
    flavor: '让每个人都更强一点。',
  },
  'bm-plague-1': {
    name: '瘟疫防控', icon: '🛡️',
    desc: '治愈 2 次基因瘟疫（累计）。',
    need: { plagueCured: 2 },
    reward: { dna: 15, res: { tech: 60 } },
    flavor: '最好的治疗是不生病。',
  },
  'bm-eco-1': {
    name: '生物圈验收', icon: '🌍',
    desc: '同时运行 3 座生物圈3号。',
    need: { biospheres: 3 },
    reward: { dna: 10, res: { biomass: 300 } },
    flavor: '三个小地球同时呼吸。',
  },
  'bm-biomass-1': {
    name: '生物质期货', icon: '🦠',
    desc: '交付 biomass×500。',
    need: { biomass: 500 },
    reward: { dna: 6, res: { steel: 100 } },
    flavor: '期货市场开到了火星。',
  },
  'bm-gaia-1': {
    name: '盖亚计划', icon: '🌟',
    desc: '将生物安全度维持在 0.8 以上累计 10 分钟。',
    need: { safetyHold: { level: 0.8, sec: 600 } },
    reward: { dna: 20 },
    flavor: '稳定本身就是一种交付。',
  },
};
const BMISSION_ORDER = Object.keys(BMISSION_DEFS);

// 合同刷新间隔
const BMISSION_TUNE = {
  MIN_GAP: 12 * 60 * 1000,
  MAX_GAP: 20 * 60 * 1000,
  MAX_ACTIVE: 3,
};

// =====================================================================
// 🧬 BioManager：生物系统总管
// =====================================================================
// 职责：
//   1. dna / biomass 资源记账
//   2. 基因库 dna 产出 tick（电力 / 生物质维护）
//   3. 基因改造研究（力量·智力·适应三系）
//   4. 生物科技解锁
//   5. 克隆缸培养队列 tick（模板 / 批次 / 人口结算）
//   6. 生物圈3号生态产出 tick（群落入驻 / 加成汇总）
//   7. 基因瘟疫（毒株爆发 / 传播 / 治愈 / 隔离）
//   8. 生物安全度（城市生物健康度 0~1）
//   9. 生物事件掷骰与结算
//   10. 生物合同刷新与结算
//   11. 存档 / 读档 / 面板数据
class BioManager {
  constructor() {
    // —— 基因改造 ——
    this.genemods = new Set();       // 已解锁基因改造 id
    this.genemodDiscount = null;     // { id, mul, until } 基因觉醒折扣

    // —— 生物科技 ——
    this.btech = new Set();          // 已解锁生物科技 id

    // —— 基因库 ——
    this.genebankState = {};         // key=`${x},${y}` → { progressMs, level }
    this.lastGeneUpkeepMin = 0;

    // —— 克隆缸 ——
    // vats: key=`${x},${y}` → { templateId, progressMs, batchMs, batchSize, cost }
    this.vats = {};
    this.clonePop = 0;               // 克隆人口总数（特性折算用）
    this.clonePopByTrait = {};       // templateId → 人数
    this.totalCloned = 0;            // 累计克隆人数（合同用）

    // —— 生物圈 ——
    // spheres: key=`${x},${y}` → { ecos: [ecoId, ecoId] }
    this.spheres = {};
    this.ecoInstalled = 0;           // 累计入驻群落数（合同用）

    // —— 瘟疫 ——
    this.plague = null;              // { strainId, infected, until, warned }
    this.plagueCured = 0;            // 累计治愈次数（合同用）
    const now = Date.now();
    this.nextPlague = now + BTUNE.PLAGUE_MIN_GAP +
      Math.random() * (BTUNE.PLAGUE_MAX_GAP - BTUNE.PLAGUE_MIN_GAP);

    // —— 生物安全度 ——
    this.safety = 1.0;               // 0~1

    // —— 事件 ——
    this.nextBioEvent = now + BTUNE.BIOEVENT_MIN_GAP +
      Math.random() * (BTUNE.BIOEVENT_MAX_GAP - BTUNE.BIOEVENT_MIN_GAP);
    this.greenhouseDownUntil = 0;    // 基因害虫：温室停产

    // —— 合同 ——
    this.missions = [];              // [{ id, progress, done }]
    this.nextMission = now + BMISSION_TUNE.MIN_GAP;

    // —— 限时 buff ——
    this.buffs = {};                 // key → { mul, until }

    // —— 日志 ——
    this.log = [];

    // —— 统计 ——
    this.stats = {
      dnaMined: 0,        // 累计产出 dna
      dnaSpent: 0,        // 累计消耗 dna
      biomassMined: 0,    // 累计产出 biomass
      cloned: 0,          // 累计克隆人数
      genemodsDone: 0,    // 基因改造完成数
      plagues: 0,         // 瘟疫爆发次数
      bioEvents: 0,       // 生物事件次数
    };

    // —— 回调 ——
    this.onEvent = null;  // (type, data) => {}

    // —— tick ——
    this._lastTick = 0;
    this._lastSphereMin = 0;
  }

  bindUI(game) {
    this._game = game;
  }

  emit(type, data) {
    if (this.onEvent) {
      try { this.onEvent(type, data); } catch (e) { /* 回调异常不影响主循环 */ }
    }
  }

  blog(icon, text) {
    this.log.push({ t: Date.now(), icon, text });
    if (this.log.length > BTUNE.BLOG_MAX) {
      this.log.splice(0, this.log.length - BTUNE.BLOG_MAX);
    }
  }

  // ---------------- 通用 ----------------

  bkey(b) {
    return b.x + ',' + b.y;
  }

  // 在线生物建筑（game.builder.buildings 里 id 在 BBUILD_IDS 的）
  bbuildings(game, bid) {
    if (!game.builder || !game.builder.buildings) return [];
    return game.builder.buildings.filter(b =>
      BBUILD_IDS.has(b.id) && (!bid || b.id === bid) && !b.damaged);
  }

  // 生物建筑是否因缺电停摆（简化：全城电力 < 0 则停摆）
  bioPowered(game) {
    if (game.builder && typeof game.builder.powerBalance === 'function') {
      try { return game.builder.powerBalance() >= 0; } catch (e) { return true; }
    }
    return true;
  }

  // 人口数（防御性）
  popCount(game) {
    if (game.pop && typeof game.pop.count === 'number') return game.pop.count;
    return 0;
  }

  // ---------------- 生物安全度 ----------------

  // 安全度上限恒为 1
  biosafety() {
    return Math.max(0, Math.min(1, this.safety));
  }

  addSafety(n, reason) {
    const before = this.biosafety();
    this.safety = Math.max(0, Math.min(1, this.safety + n));
    if (reason && this.safety !== before) {
      this.blog('🛡️', `生物安全度 ${before.toFixed(2)} → ${this.biosafety().toFixed(2)}（${reason}）`);
    }
    return this.biosafety();
  }

  // ---------------- 基因改造 ----------------

  // 是否可解锁：按分支等级顺序
  canGenemod(id, inv) {
    const def = GENEMOD_DEFS[id];
    if (!def) return { ok: false, reason: '未知改造' };
    if (this.genemods.has(id)) return { ok: false, reason: '已解锁' };
    // 同分支上一级必须先解锁
    if (def.tier > 1) {
      const prevId = `g-${def.branch}-${def.tier - 1}`;
      if (!this.genemods.has(prevId)) {
        return { ok: false, reason: `需要先解锁「${GENEMOD_DEFS[prevId].name}」` };
      }
    }
    // 费用：测序中心/基因熔炉/方舟按建筑等级叠加折扣
    const g = this._game || {};
    let costMul = 1;
    for (const s of this.bbuildings(g, 'seqcenter')) {
      costMul *= 0.9 * this.bbUpgradeFx(s, 'geneCostMul', 'mul', 1);
    }
    for (const f of this.bbuildings(g, 'geneforge')) {
      costMul *= 0.75 * this.bbUpgradeFx(f, 'geneCostMul', 'mul', 1);
    }
    if (this.bbuildings(g, 'arkvault').length > 0) costMul *= 0.85;
    // 基因觉醒折扣
    let cost = {};
    for (const k in def.cost) cost[k] = Math.ceil(def.cost[k] * costMul);
    if (this.genemodDiscount && this.genemodDiscount.id === id &&
        Date.now() < this.genemodDiscount.until) {
      for (const k in cost) cost[k] = Math.max(1, Math.ceil(cost[k] * this.genemodDiscount.mul));
    }
    for (const k in cost) {
      if ((inv[k] || 0) < cost[k]) {
        const nm = (BIO_RES[k] && BIO_RES[k].name) || k;
        return { ok: false, reason: `需要${nm}×${cost[k]}` };
      }
    }
    return { ok: true, cost };
  }

  // 解锁基因改造
  doGenemod(id, game) {
    const inv = ensureBio(game.player.inv);
    const chk = this.canGenemod(id, inv);
    if (!chk.ok) return chk;
    for (const k in chk.cost) inv[k] -= chk.cost[k];
    this.stats.dnaSpent += (chk.cost.dna || 0);
    this.genemods.add(id);
    this.stats.genemodsDone++;
    const def = GENEMOD_DEFS[id];
    this.blog(def.icon, `基因改造完成：${def.name}`);
    this.emit('genemod', { id, name: def.name, icon: def.icon, branch: def.branch });
    if (game.toast) game.toast(`${def.icon} 基因改造完成：${def.name}`, 'good');
    if (game.sound) game.sound('research');
    this.checkMissions(game);
    return { ok: true };
  }

  // 基因重铸：重置所有基因改造，返还 50% dna（需基因熔炉）
  geneRespec(game) {
    if (this.bbuildings(game, 'geneforge').length === 0) {
      return { ok: false, reason: '需要建造基因熔炉' };
    }
    if (this.genemods.size === 0) return { ok: false, reason: '没有已解锁的改造' };
    // 重铸返还比例：基础 50%，基因熔炉等级提升至 70%
    let rate = 0.5;
    for (const f of this.bbuildings(game, 'geneforge')) {
      rate = Math.max(rate, this.bbUpgradeFx(f, 'respecRefund', 'set', 0.5));
    }
    let refund = 0;
    for (const id of this.genemods) {
      refund += Math.floor((GENEMOD_DEFS[id].cost.dna || 0) * rate);
    }
    this.genemods.clear();
    const inv = ensureBio(game.player.inv);
    gainDna(inv, refund);
    this.stats.dnaMined += refund;
    this.blog('⚗️', `基因重铸：重置 ${this.stats.genemodsDone} 项改造，返还 dna×${refund}`);
    this.emit('generespec', { refund });
    if (game.toast) game.toast(`⚗️ 基因重铸完成，返还 dna×${refund}`, 'info');
    return { ok: true, refund };
  }

  // 某效果键的乘法总倍率（基因改造 + 克隆特性折算）
  gmul(key, game) {
    let v = 1;
    for (const id of this.genemods) {
      const fx = GENEMOD_DEFS[id].fx;
      if (fx && fx[key] !== undefined && typeof fx[key] === 'number') {
        if (key === 'plagueResist') continue;  // 抗性走加法
        v *= fx[key];
      }
    }
    // 克隆特性按比例折算
    if (game) {
      const ratio = this.cloneRatio(game);
      if (ratio > 0) {
        for (const tid in this.clonePopByTrait) {
          const trait = CLONE_DEFS[tid] && CLONE_DEFS[tid].trait;
          if (trait && trait[key] !== undefined && key !== 'plagueResist') {
            v *= scaleTrait(trait[key], ratio * (this.clonePopByTrait[tid] / Math.max(1, this.clonePop)));
          }
        }
      }
    }
    return v;
  }

  // 瘟疫抗性总和（0~0.9 上限）
  plagueResist(game) {
    let r = 0;
    for (const id of this.genemods) {
      const fx = GENEMOD_DEFS[id].fx;
      if (fx && fx.plagueResist) r += fx.plagueResist;
    }
    // 生态群落
    r += this.ecoFxSum('plagueResist');
    // 方舟基因库（按等级）
    for (const a of this.bbuildings(game || {}, 'arkvault')) {
      r += this.bbUpgradeFx(a, 'resistAdd', 'add', 0.2);
    }
    // 克隆特性（按比例）
    if (game) {
      const ratio = this.cloneRatio(game);
      for (const tid in this.clonePopByTrait) {
        const trait = CLONE_DEFS[tid] && CLONE_DEFS[tid].trait;
        if (trait && trait.plagueResist) {
          r += trait.plagueResist * ratio * (this.clonePopByTrait[tid] / Math.max(1, this.clonePop));
        }
      }
    }
    return Math.min(0.9, r);
  }

  // 克隆人口占比
  cloneRatio(game) {
    const pop = this.popCount(game);
    if (pop <= 0) return 0;
    return Math.min(1, this.clonePop / pop);
  }

  // ---------------- 生物科技 ----------------

  hasBTech(id) {
    return this.btech.has(id);
  }

  canBTech(id, inv) {
    const def = BTECH_DEFS[id];
    if (!def) return { ok: false, reason: '未知科技' };
    if (this.btech.has(id)) return { ok: false, reason: '已解锁' };
    for (const pre of def.needs) {
      if (!this.btech.has(pre)) {
        return { ok: false, reason: `需要先解锁「${BTECH_DEFS[pre].name}」` };
      }
    }
    for (const k in def.cost) {
      if ((inv[k] || 0) < def.cost[k]) {
        const nm = (BIO_RES[k] && BIO_RES[k].name) || k;
        return { ok: false, reason: `需要${nm}×${def.cost[k]}` };
      }
    }
    return { ok: true };
  }

  doBTech(id, game) {
    const inv = ensureBio(game.player.inv);
    const chk = this.canBTech(id, inv);
    if (!chk.ok) return chk;
    const def = BTECH_DEFS[id];
    for (const k in def.cost) inv[k] -= def.cost[k];
    this.stats.dnaSpent += (def.cost.dna || 0);
    this.btech.add(id);
    this.blog(def.icon, `生物科技完成：${def.name}`);
    this.emit('btech', { id, name: def.name, icon: def.icon });
    if (game.toast) game.toast(`${def.icon} 生物科技完成：${def.name}`, 'good');
    if (game.sound) game.sound('research');
    return { ok: true };
  }

  // 某效果键的乘法总倍率（生物科技）
  bmul(key) {
    let v = 1;
    for (const id of this.btech) {
      const fx = BTECH_DEFS[id].fx;
      if (fx && fx[key] !== undefined && typeof fx[key] === 'number') {
        if (key.startsWith('unlock')) continue;
        v *= fx[key];
      }
    }
    return v;
  }

  // 某效果键的加法总和（生物科技）
  bsum(key) {
    let v = 0;
    for (const id of this.btech) {
      const fx = BTECH_DEFS[id].fx;
      if (fx && fx[key] !== undefined && typeof fx[key] === 'number') v += fx[key];
    }
    return v;
  }

  // 生物建筑是否解锁
  bBuildingUnlocked(bid, game) {
    const def = BBUILD_DEFS[bid];
    if (!def) return false;
    if (def.needBTech && !this.btech.has(def.needBTech)) return false;
    // 基础建筑人口门槛
    if (bid === 'genebank' && this.popCount(game) < 10) return false;
    if (bid === 'biosphere' && this.popCount(game) < 15) return false;
    return true;
  }

  // ---------------- 基因库 ----------------

  // 基因库产出间隔（毫秒）
  genebankIntervalMs() {
    return BTUNE.GENEBANK_INTERVAL_MS * this.bmul('geneIntervalMul');
  }

  // 基因库每次产出 dna 数（含测序中心/方舟等级加成）
  genebankYield(game) {
    let y = BTUNE.GENEBANK_YIELD + this.bsum('geneYieldAdd');
    let seqMul = 1, arkMul = 1;
    for (const s of this.bbuildings(game, 'seqcenter')) {
      seqMul = Math.max(seqMul, this.bbUpgradeFx(s, 'geneMul', 'set', 1.5));
    }
    for (const a of this.bbuildings(game, 'arkvault')) {
      arkMul = Math.max(arkMul, this.bbUpgradeFx(a, 'dnaMul', 'set', 2));
    }
    y *= seqMul * arkMul;
    // 生态群落 dnaMul
    y *= this.ecoFxMul('dnaMul');
    return y;
  }

  // 基因库等级（1~3）
  geneLevelOf(b) {
    const key = this.bkey(b);
    const st = this.genebankState[key];
    return (st && st.level) || b.blevel || 1;
  }

  // 升级基因库
  upgradeGenebank(b, game) {
    const lv = this.geneLevelOf(b);
    if (lv >= 3) return { ok: false, reason: '已满级' };
    const cost = BTUNE.GENEBANK_UP_COST[lv - 1];
    const inv = game.player.inv;
    for (const k in cost) {
      if ((inv[k] || 0) < cost[k]) return { ok: false, reason: '资源不足' };
    }
    for (const k in cost) inv[k] -= cost[k];
    const key = this.bkey(b);
    b.blevel = lv + 1;
    if (!this.genebankState[key]) this.genebankState[key] = { progressMs: 0, level: lv + 1 };
    else this.genebankState[key].level = lv + 1;
    this.blog('🧬', `基因库升级到 Lv${lv + 1}`);
    this.emit('genebank-upgrade', { x: b.x, y: b.y, level: lv + 1 });
    return { ok: true, level: lv + 1 };
  }

  // ---------------- 生物建筑通用升级 ----------------

  // 生物建筑等级（1~3）：genebank 存 genebankState，其余存 bbLevel
  blevelOf(b) {
    const key = this.bkey(b);
    if (b.id === 'genebank') {
      const st = this.genebankState[key];
      return (st && st.level) || b.blevel || 1;
    }
    return (this.bbLevel && this.bbLevel[key]) || b.blevel || 1;
  }

  // 设置生物建筑等级（建筑对象 + 管理器镜像双写）
  setBLevel(b, lv) {
    const key = this.bkey(b);
    b.blevel = lv;
    if (b.id === 'genebank') {
      if (!this.genebankState[key]) this.genebankState[key] = { progressMs: 0, level: lv };
      else this.genebankState[key].level = lv;
    } else {
      if (!this.bbLevel) this.bbLevel = {};
      this.bbLevel[key] = lv;
    }
  }

  // 升级效果汇总：
  //   mode='add' 加法累加；mode='mul' 乘法累加；mode='set' 取最后设定值
  bbUpgradeFx(b, key, mode, defVal) {
    const udef = BUPGRADE_DEFS[b.id];
    if (!udef || !udef.levels) return defVal;
    const lv = this.blevelOf(b);
    let v = defVal;
    for (let i = 0; i < lv - 1 && i < udef.levels.length; i++) {
      const fx = udef.levels[i].fx || {};
      if (fx[key] === undefined) continue;
      if (mode === 'add') v += fx[key];
      else if (mode === 'mul') v *= fx[key];
      else v = fx[key];
    }
    return v;
  }

  // 按建筑 key 查找建筑对象（防御性）
  findBuilding(game, key) {
    const bs = (game.builder && game.builder.buildings) || [];
    return bs.find(b => this.bkey(b) === key) || null;
  }

  // 通用升级（genebank 走 upgradeGenebank）
  upgradeBBuilding(b, game) {
    if (!b || !BBUILD_DEFS[b.id]) return { ok: false, reason: '未知建筑' };
    if (b.id === 'genebank') return this.upgradeGenebank(b, game);
    const def = BUPGRADE_DEFS[b.id];
    if (!def || !def.levels || def.levels.length === 0) {
      return { ok: false, reason: '该建筑不可升级' };
    }
    const lv = this.blevelOf(b);
    if (lv > def.levels.length) return { ok: false, reason: '已满级' };
    const cfg = def.levels[lv - 1];  // lv=1 → levels[0]（升 2 级）
    const inv = game.player.inv;
    for (const k in cfg.cost) {
      if ((inv[k] || 0) < cfg.cost[k]) {
        return { ok: false, reason: `资源不足（缺 ${k}×${cfg.cost[k] - (inv[k] || 0)}）` };
      }
    }
    for (const k in cfg.cost) inv[k] -= cfg.cost[k];
    this.setBLevel(b, lv + 1);
    this.blog(BBUILD_DEFS[b.id].icon, `${def.name}升级到 Lv${lv + 1}：${cfg.desc}`);
    this.emit('bbuilding-upgrade', { id: b.id, x: b.x, y: b.y, level: lv + 1 });
    if (game.toast) game.toast(`${BBUILD_DEFS[b.id].icon} ${def.name} Lv${lv + 1}`, 'good');
    if (game.sound) game.sound('upgrade');
    return { ok: true, level: lv + 1 };
  }

  // 升级面板数据（UI 用）
  upgradePanelB(b) {
    if (!b || !BBUILD_DEFS[b.id]) return null;
    if (b.id === 'genebank') {
      const lv = this.blevelOf(b);
      if (lv >= 3) return { maxed: true, level: lv };
      const cost = BTUNE.GENEBANK_UP_COST[lv - 1];
      return {
        maxed: false, level: lv, next: lv + 1, cost,
        desc: lv === 1 ? 'Lv2：产出间隔 ×0.85' : 'Lv3：每次产出 +1 dna',
        fxText: lv === 1 ? ['产出间隔 ×0.85'] : ['每次 +1 dna'],
      };
    }
    const def = BUPGRADE_DEFS[b.id];
    const lv = this.blevelOf(b);
    if (lv > def.levels.length) return { maxed: true, level: lv };
    const cfg = def.levels[lv - 1];
    return {
      maxed: false, level: lv, next: lv + 1, cost: cfg.cost,
      desc: cfg.desc, fxText: cfg.fxText,
    };
  }

  // 基因库 tick
  tickGenebank(now, dt, game) {
    const banks = this.bbuildings(game, 'genebank');
    if (banks.length === 0) return;
    if (!this.bioPowered(game)) return;
    const inv = ensureBio(game.player.inv);
    // 生物质维护：每分钟检查
    let upkeepOk = true;
    const minTick = Math.floor(now / 60000);
    if (minTick !== this.lastGeneUpkeepMin) {
      this.lastGeneUpkeepMin = minTick;
      const need = banks.length * BTUNE.GENEBANK_UPKEEP_BIOMASS_PER_MIN;
      if ((inv.biomass || 0) >= need) {
        inv.biomass -= need;
      } else {
        upkeepOk = false;
        this.blog('🦠', `生物质不足，基因库降速 50%（需 ${need}/分钟）`);
      }
    }
    const speedMul = upkeepOk ? 1 : 0.5;
    const interval = this.genebankIntervalMs();
    const yld = this.genebankYield(game);
    for (const bk of banks) {
      const key = this.bkey(bk);
      if (!this.genebankState[key]) {
        this.genebankState[key] = { progressMs: 0, level: bk.blevel || 1 };
      }
      const st = this.genebankState[key];
      st.level = bk.blevel || 1;
      const lvMul = Math.pow(0.85, st.level - 1);
      // 等级升级效果：间隔倍率 / 每次 +N
      const upIntervalMul = this.bbUpgradeFx(bk, 'intervalMul', 'mul', 1);
      const upYieldAdd = this.bbUpgradeFx(bk, 'yieldAdd', 'add', 0);
      st.progressMs += dt * speedMul / lvMul / upIntervalMul;
      if (st.progressMs >= interval) {
        st.progressMs -= interval;
        const gain = (yld + upYieldAdd) * (st.level >= 3 ? 2 : 1);  // Lv3 产出翻倍
        gainDna(inv, gain);
        this.stats.dnaMined += gain;
        this.blog('🧬', `基因库产出 dna×${gain.toFixed(1)}`);
      }
    }
    // 清理已拆除的
    const alive = new Set(banks.map(b => this.bkey(b)));
    for (const k in this.genebankState) {
      if (!alive.has(k)) delete this.genebankState[k];
    }
  }

  // ---------------- 克隆缸 ----------------

  // 开始一批克隆（templateId）
  startClone(vatKey, templateId, game) {
    const def = CLONE_DEFS[templateId];
    if (!def) return { ok: false, reason: '未知克隆模板' };
    if (def.needBTech && !this.btech.has(def.needBTech)) {
      return { ok: false, reason: `需要科技「${BTECH_DEFS[def.needBTech].name}」` };
    }
    if (this.vats[vatKey] && this.vats[vatKey].progressMs >= 0) {
      return { ok: false, reason: '该克隆缸正在培养中' };
    }
    const inv = ensureBio(game.player.inv);
    // 克隆缸等级：耗时倍率 / 每批 +N
    const vatB = this.findBuilding(game, vatKey);
    let timeMul = this.bmul('cloneTimeMul');
    let batchAdd = this.bsum('cloneBatchAdd');
    if (vatB) {
      timeMul *= this.bbUpgradeFx(vatB, 'timeMul', 'mul', 1);
      batchAdd += this.bbUpgradeFx(vatB, 'batchAdd', 'add', 0);
    }
    const batchSize = Math.max(1, Math.round(
      BTUNE.CLONE_BATCH_SIZE * def.batchMul + batchAdd));
    const cost = {
      biomass: Math.ceil(BTUNE.CLONE_COST.biomass * def.costMul),
      dna: Math.ceil(BTUNE.CLONE_COST.dna * def.costMul),
      water: Math.ceil(BTUNE.CLONE_COST.water * def.costMul),
    };
    for (const k in cost) {
      if ((inv[k] || 0) < cost[k]) {
        const nm = (BIO_RES[k] && BIO_RES[k].name) || k;
        return { ok: false, reason: `需要${nm}×${cost[k]}` };
      }
    }
    for (const k in cost) inv[k] -= cost[k];
    this.stats.dnaSpent += cost.dna;
    const batchMs = BTUNE.CLONE_BATCH_MS * def.timeMul * timeMul;
    this.vats[vatKey] = {
      templateId, progressMs: 0, batchMs, batchSize, cost,
    };
    this.blog(def.icon, `克隆开始：${def.name}×${batchSize}（${Math.round(batchMs / 60000)} 分钟）`);
    this.emit('clone-start', { vatKey, templateId, batchSize });
    return { ok: true, batchSize };
  }

  // 取消培养（返还 50% 生物质）
  cancelClone(vatKey, game) {
    const vat = this.vats[vatKey];
    if (!vat || vat.progressMs < 0) return { ok: false, reason: '没有进行中的培养' };
    const inv = ensureBio(game.player.inv);
    const refund = Math.floor((vat.cost.biomass || 0) * 0.5);
    gainBiomass(inv, refund);
    delete this.vats[vatKey];
    this.blog('🧫', `克隆取消：返还生物质×${refund}`);
    return { ok: true, refund };
  }

  // 克隆 tick：推进培养进度，完成则人口 += 批次
  tickClones(now, dt, game) {
    const vats = this.bbuildings(game, 'clonevat');
    if (vats.length === 0) return;
    if (!this.bioPowered(game)) return;
    const vatKeys = new Set(vats.map(v => this.bkey(v)));
    // 清理已拆除缸的培养
    for (const k in this.vats) {
      if (!vatKeys.has(k)) delete this.vats[k];
    }
    let dirty = false;
    for (const k in this.vats) {
      const vat = this.vats[k];
      if (vat.progressMs < 0) continue;  // 空闲标记
      vat.progressMs += Math.min(dt, BTUNE.DT_CLAMP_MS);
      if (vat.progressMs >= vat.batchMs) {
        // 完成：人口 += 批次
        const n = vat.batchSize;
        if (game.pop && typeof game.pop.count === 'number') {
          game.pop.count += n;
        }
        this.clonePop += n;
        this.clonePopByTrait[vat.templateId] =
          (this.clonePopByTrait[vat.templateId] || 0) + n;
        this.totalCloned += n;
        this.stats.cloned += n;
        const def = CLONE_DEFS[vat.templateId];
        this.blog(def.icon, `克隆完成：${def.name}×${n}（克隆人口 ${this.clonePop}）`);
        this.emit('clone-done', { templateId: vat.templateId, count: n });
        if (game.toast) game.toast(`${def.icon} 克隆完成：+${n} 人口`, 'good');
        if (game.sound) game.sound('complete');
        vat.progressMs = -1;  // 标记空闲
        dirty = true;
      }
    }
    if (dirty) this.checkMissions(game);
  }

  // ---------------- 生物圈3号与生态群落 ----------------

  // 生物圈群落槽位（基础 2 + 科技）
  ecoSlots() {
    return 2 + this.bsum('ecoSlotsAdd');
  }

  // 某座生物圈的群落槽位（含建筑等级）
  ecoSlotsFor(sphereKey, game) {
    let slots = this.ecoSlots();
    const b = this.findBuilding(game, sphereKey);
    if (b && b.id === 'biosphere') {
      slots += this.bbUpgradeFx(b, 'slotsAdd', 'add', 0);
    }
    return slots;
  }

  // 入驻生态群落（sphereKey 生物圈，ecoId 群落）
  installEco(sphereKey, ecoId, game) {
    const def = ECO_DEFS[ecoId];
    if (!def) return { ok: false, reason: '未知群落' };
    if (def.needBTech && !this.btech.has(def.needBTech)) {
      return { ok: false, reason: `需要科技「${BTECH_DEFS[def.needBTech].name}」` };
    }
    if (!this.spheres[sphereKey]) this.spheres[sphereKey] = { ecos: [] };
    const sp = this.spheres[sphereKey];
    const slots = this.ecoSlotsFor(sphereKey, game);
    if (sp.ecos.length >= slots) {
      return { ok: false, reason: `群落槽位已满（${slots}）` };
    }
    if (sp.ecos.includes(ecoId)) return { ok: false, reason: '该群落已入驻' };
    const inv = ensureBio(game.player.inv);
    for (const k in def.cost) {
      if ((inv[k] || 0) < def.cost[k]) {
        const nm = (BIO_RES[k] && BIO_RES[k].name) || k;
        return { ok: false, reason: `需要${nm}×${def.cost[k]}` };
      }
    }
    for (const k in def.cost) inv[k] -= def.cost[k];
    this.stats.dnaSpent += (def.cost.dna || 0);
    sp.ecos.push(ecoId);
    this.ecoInstalled++;
    this.blog(def.icon, `生态群落入驻：${def.name}`);
    this.emit('eco-install', { sphereKey, ecoId, name: def.name });
    this.checkMissions(game);
    return { ok: true };
  }

  // 移除生态群落（返还 50% 生物质）
  removeEco(sphereKey, ecoId, game) {
    const sp = this.spheres[sphereKey];
    if (!sp || !sp.ecos.includes(ecoId)) return { ok: false, reason: '群落未入驻' };
    sp.ecos = sp.ecos.filter(e => e !== ecoId);
    const inv = ensureBio(game.player.inv);
    const refund = Math.floor(((ECO_DEFS[ecoId].cost.biomass) || 0) * 0.5);
    gainBiomass(inv, refund);
    this.blog('🌿', `群落移除：${ECO_DEFS[ecoId].name}（返还生物质×${refund}）`);
    return { ok: true, refund };
  }

  // 生态群落某效果键乘法汇总（按入驻数叠加）
  ecoFxMul(key) {
    let v = 1;
    for (const sk in this.spheres) {
      for (const eid of this.spheres[sk].ecos) {
        const fx = ECO_DEFS[eid].fx;
        if (fx && fx[key] !== undefined && typeof fx[key] === 'number') v *= fx[key];
      }
    }
    return v;
  }

  // 生态群落某效果键加法汇总
  ecoFxSum(key) {
    let v = 0;
    for (const sk in this.spheres) {
      for (const eid of this.spheres[sk].ecos) {
        const fx = ECO_DEFS[eid].fx;
        if (fx && fx[key] !== undefined && typeof fx[key] === 'number') v += fx[key];
      }
    }
    return v;
  }

  // 生物圈 tick：每分钟产出 biomass/食物
  tickSpheres(now, dt, game) {
    const spheres = this.bbuildings(game, 'biosphere');
    if (spheres.length === 0) return;
    if (!this.bioPowered(game)) return;
    const inv = ensureBio(game.player.inv);
    // 清理已拆除的生物圈群落记录
    const alive = new Set(spheres.map(s => this.bkey(s)));
    for (const k in this.spheres) {
      if (!alive.has(k)) delete this.spheres[k];
    }
    const minTick = Math.floor(now / 60000);
    if (minTick === this._lastSphereMin) return;
    this._lastSphereMin = minTick;
    // 维护：每座每分钟水×5
    const waterNeed = spheres.length * BTUNE.BIOSPHERE_WATER_PER_MIN;
    let upkeepOk = true;
    if ((inv.water || 0) >= waterNeed) {
      inv.water -= waterNeed;
    } else {
      upkeepOk = false;
    }
    const eff = upkeepOk ? 1 : 0.5;
    // 产出（含生物圈等级加成，逐座计算）
    const biomassMul = this.bmul('biomassMul') * this.ecoFxMul('biomassMul');
    const foodMul = this.ecoFxMul('foodMul');
    const sporeMul = this.sporeFoodMul(game);
    let biomassGain = 0, foodGain = 0;
    for (const s of spheres) {
      const outMul = this.bbUpgradeFx(s, 'outputMul', 'mul', 1);
      biomassGain += BTUNE.BIOSPHERE_BIOMASS_PER_MIN * eff * biomassMul * outMul;
      foodGain += BTUNE.BIOSPHERE_FOOD_PER_MIN * eff * foodMul * sporeMul * outMul;
    }
    gainBiomass(inv, Math.floor(biomassGain));
    inv.food = (inv.food || 0) + Math.floor(foodGain);
    this.stats.biomassMined += Math.floor(biomassGain);
  }

  // 孢子塔食物加成（含等级：每座 +N，上限 +N）
  sporeFoodMul(game) {
    const spores = this.bbuildings(game, 'spore');
    if (spores.length === 0) return 1;
    let add = 0, cap = 0.25;
    for (const s of spores) {
      add += this.bbUpgradeFx(s, 'foodAdd', 'add', 0.05);
      cap = Math.max(cap, 0.25 + this.bbUpgradeFx(s, 'capAdd', 'add', 0));
    }
    return Math.min(1 + cap, 1 + add);
  }

  // ---------------- 加成汇总 ----------------

  // 汇总所有生物加成（game.js 在各处调用）
  getBuffs(game) {
    const now = Date.now();
    const alive = {};
    for (const k in this.buffs) {
      if (this.buffs[k].until > now) alive[k] = this.buffs[k];
    }
    const spheres = game ? this.bbuildings(game, 'biosphere') : [];
    // 基因融合：生态产出翻倍 5 分钟
    const ecoFusion = alive['ecofusion'] ? alive['ecofusion'].mul : 1;
    // 人口增长：基因改造 × 生物圈 × 生态 × 限时
    let growthMul = this.gmul('growthMul', game) *
      Math.pow(1 + BTUNE.BIOSPHERE_GROWTH_BONUS, spheres.length) *
      this.ecoFxMul('growthMul');
    if (alive['babyboom']) growthMul *= alive['babyboom'].mul;
    // 瘟疫期增长惩罚
    if (this.plague) {
      const fx = PLAGUE_DEFS[this.plague.strainId].effects;
      if (fx.growthMul) growthMul *= fx.growthMul;
    }
    // 消耗：基因改造 × 生态 × 克隆特性
    let consumeMul = this.gmul('consumeMul', game) * this.ecoFxMul('consumeMul');
    // 灾难减免
    let disasterMul = this.gmul('disasterMul', game);
    // 温室食物
    let greenhouseMul = this.ecoFxMul('foodMul');
    if (alive['greenhouse']) greenhouseMul *= alive['greenhouse'].mul;
    if (game) greenhouseMul *= this.sporeFoodMul(game);
    greenhouseMul *= ecoFusion;
    // 生产总倍率（瘟疫期）
    let prodMul = 1;
    if (this.plague) {
      const fx = PLAGUE_DEFS[this.plague.strainId].effects;
      if (fx.prodMul) prodMul *= fx.prodMul;
    }
    return {
      popGrowthMul: growthMul,
      consumeMul,            // 人口水/食物消耗倍率
      disasterMul,           // 灾难伤害倍率
      greenhouseMul,         // 温室/食物产出倍率
      prodMul,               // 全城生产倍率（瘟疫）
      minerMul: this.gmul('minerMul', game),
      labMul: this.gmul('labMul', game),
      buildSpeedMul: this.gmul('buildSpeedMul', game),
      carryMul: this.gmul('carryMul', game),
      repairMul: this.gmul('repairMul', game),
      researchMul: this.gmul('researchMul', game),
      researchCostMul: this.gmul('researchCostMul', game),
      tradeMul: this.gmul('tradeMul', game),
      defenseMul: this.gmul('defenseMul', game),
      biomassMul: this.bmul('biomassMul') * this.ecoFxMul('biomassMul') * ecoFusion,
      dnaMul: this.ecoFxMul('dnaMul') * ecoFusion,
      waterMul: this.ecoFxMul('waterMul') * ecoFusion,
      ecoPowerAdd: this.ecoFxSum('powerAdd'),
      plagueResist: game ? this.plagueResist(game) : this.plagueResist(null),
      plague: this.plague ? {
        strainId: this.plague.strainId,
        name: PLAGUE_DEFS[this.plague.strainId].name,
        icon: PLAGUE_DEFS[this.plague.strainId].icon,
        infected: Math.floor(this.plague.infected),
        remainSec: Math.max(0, Math.ceil((this.plague.until - now) / 1000)),
      } : null,
    };
  }

  // ---------------- 基因瘟疫 ----------------

  // 爆发一次瘟疫（strainId 可选，不指定则按权重随机）
  startPlague(game, strainId) {
    if (this.plague) return { ok: false, reason: '已有瘟疫在流行' };
    const pop = this.popCount(game);
    if (pop < BTUNE.PLAGUE_MIN_POP) return { ok: false, reason: '人口不足' };
    let sid = strainId;
    if (!sid) {
      const total = PLAGUE_ORDER.reduce((s, id) => s + PLAGUE_DEFS[id].w, 0);
      let r = Math.random() * total;
      sid = PLAGUE_ORDER[0];
      for (const id of PLAGUE_ORDER) {
        r -= PLAGUE_DEFS[id].w;
        if (r <= 0) { sid = id; break; }
      }
    }
    const def = PLAGUE_DEFS[sid];
    if (!def) return { ok: false, reason: '未知毒株' };
    // 抗性减免初始感染
    const resist = this.plagueResist(game);
    const initInfected = Math.max(1, Math.floor(pop * 0.05 * (1 - resist)));
    const now = Date.now();
    this.plague = {
      strainId: sid,
      infected: initInfected,
      until: now + def.durationMs,
      lastSpreadMin: Math.floor(now / 60000),
    };
    this.stats.plagues++;
    this.addSafety(-0.15, `瘟疫爆发：${def.name}`);
    this.blog(def.icon, `基因瘟疫爆发：${def.name}（初始感染 ${initInfected} 人）`);
    this.emit('plague-start', { strainId: sid, name: def.name, icon: def.icon, infected: initInfected });
    if (game.toast) game.toast(`${def.icon} 基因瘟疫爆发：${def.name}！`, 'bad');
    if (game.sound) game.sound('disaster');
    return { ok: true, strainId: sid };
  }

  // 治愈费用（dna）：基础 × 隔离站折扣（按等级） × 科技折扣
  cureCost(game) {
    if (!this.plague) return 0;
    const def = PLAGUE_DEFS[this.plague.strainId];
    let mul = 1;
    for (const q of this.bbuildings(game, 'quarantine')) {
      mul *= 0.8 * this.bbUpgradeFx(q, 'cureMul', 'mul', 1);
    }
    mul *= this.bmul('cureCostMul');
    return Math.max(1, Math.ceil(def.cureDna * mul));
  }

  // 治愈当前瘟疫（一次性 dna 消耗）
  curePlague(game) {
    if (!this.plague) return { ok: false, reason: '当前没有瘟疫' };
    const cost = this.cureCost(game);
    const inv = ensureBio(game.player.inv);
    if (!spendDna(inv, cost)) return { ok: false, reason: `需要 dna×${cost}` };
    this.stats.dnaSpent += cost;
    const def = PLAGUE_DEFS[this.plague.strainId];
    this.plague = null;
    this.plagueCured++;
    this.addSafety(0.2, `治愈瘟疫：${def.name}`);
    this.blog('💊', `瘟疫治愈：${def.name}（消耗 dna×${cost}）`);
    this.emit('plague-cure', { name: def.name, icon: def.icon, cost });
    if (game.toast) game.toast(`💊 瘟疫治愈：${def.name}`, 'good');
    if (game.sound) game.sound('complete');
    this.checkMissions(game);
    return { ok: true };
  }

  // 瘟疫 tick：传播 / 致死 / 自然消退
  tickPlague(now, dt, game) {
    // 掷骰：爆发新瘟疫
    if (!this.plague && now >= this.nextPlague) {
      const gap = BTUNE.PLAGUE_MIN_GAP +
        Math.random() * (BTUNE.PLAGUE_MAX_GAP - BTUNE.PLAGUE_MIN_GAP);
      this.nextPlague = now + gap * this.bmul('plagueGapMul');
      const pop = this.popCount(game);
      if (pop >= BTUNE.PLAGUE_MIN_POP) {
        // 85% 爆发普通毒株，15% 轻微疫情
        if (Math.random() < 0.85) this.startPlague(game);
        else this.onBioPlagueMild(game);
      }
    }
    if (!this.plague) return;
    const p = this.plague;
    const def = PLAGUE_DEFS[p.strainId];
    const pop = this.popCount(game);
    // 自然消退
    if (now >= p.until || pop <= 0) {
      this.blog(def.icon, `瘟疫消退：${def.name}（自然）`);
      this.emit('plague-end', { strainId: p.strainId, name: def.name, natural: true });
      this.plague = null;
      this.addSafety(0.1, '瘟疫自然消退');
      return;
    }
    // 每分钟结算传播与致死
    const minTick = Math.floor(now / 60000);
    if (minTick === p.lastSpreadMin) return;
    p.lastSpreadMin = minTick;
    const resist = this.plagueResist(game);
    // 隔离站：按等级叠加传播压制
    let spreadMul = 1;
    for (const q of this.bbuildings(game, 'quarantine')) {
      spreadMul *= this.bbUpgradeFx(q, 'spreadMul', 'mul', 0.6);
    }
    spreadMul *= this.bmul('plagueSpreadMul');
    // 传播：新增感染 = 易感者 × spread × spreadMul × (1-抗性)
    const susceptible = Math.max(0, pop - p.infected);
    const newInfected = susceptible * def.spread * spreadMul * (1 - resist);
    p.infected += newInfected;
    // 致死：感染者 × lethal × (1-抗性×0.5)
    // cloneOnly 毒株只杀克隆人口
    let deaths = p.infected * def.lethal * (1 - resist * 0.5);
    if (def.cloneOnly) {
      deaths = Math.min(deaths, this.clonePop);
      this.clonePop = Math.max(0, this.clonePop - deaths);
    }
    deaths = Math.min(deaths, pop - 1);  // 至少留 1 人
    if (game.pop && typeof game.pop.count === 'number') {
      game.pop.count = Math.max(1, game.pop.count - Math.floor(deaths));
    }
    p.infected = Math.max(0, p.infected - deaths);
    if (deaths >= 1) {
      this.blog(def.icon, `${def.name}：死亡 ${Math.floor(deaths)} 人，感染 ${Math.floor(p.infected)} 人`);
    }
  }

  // ---------------- 生物事件 ----------------

  // 生物事件掷骰 tick
  tickBioEvents(now, game) {
    if (now < this.nextBioEvent) return;
    const gap = BTUNE.BIOEVENT_MIN_GAP +
      Math.random() * (BTUNE.BIOEVENT_MAX_GAP - BTUNE.BIOEVENT_MIN_GAP);
    this.nextBioEvent = now + gap;
    if (this.bbuildings(game).length === 0) return;
    this.stats.bioEvents++;
    // 5 好 / 4 坏 / 3 奇，加权
    const pool = [];
    for (const id of BEVENT_ORDER) {
      const d = BEVENT_DEFS[id];
      if (d.kind === 'plague') continue;  // 瘟疫走独立掷骰
      pool.push({ id, w: d.w });
    }
    const total = pool.reduce((s, e) => s + e.w, 0);
    let r = Math.random() * total;
    let pickId = pool[0].id;
    for (const e of pool) {
      r -= e.w;
      if (r <= 0) { pickId = e.id; break; }
    }
    const def = BEVENT_DEFS[pickId];
    this.blog(def.icon, `生物事件：${def.name} —— ${def.desc}`);
    this[def.handler](game);
    this.emit('bioevent', { id: pickId, name: def.name, icon: def.icon, kind: def.kind });
    if (game.toast) {
      const tone = def.kind === 'bad' ? 'bad' : (def.kind === 'good' ? 'good' : 'info');
      game.toast(`${def.icon} ${def.name}`, tone);
    }
    if (game.sound) game.sound(def.kind === 'bad' ? 'disaster' : 'event');
  }

  // —— 好事件结算 ——
  onBioBloom(game) {
    const inv = ensureBio(game.player.inv);
    const bq = Math.floor((inv.biomass || 0) * 0.15);
    const fq = Math.floor((inv.food || 0) * 0.10);
    gainBiomass(inv, bq);
    inv.food = (inv.food || 0) + fq;
    this.stats.biomassMined += bq;
    this.addSafety(0.03, '生态繁荣');
  }
  onBioMutation(game) {
    this.buffs['greenhouse'] = { mul: 1.3, until: Date.now() + 5 * 60 * 1000 };
  }
  onBioGeneFind(game) {
    const inv = ensureBio(game.player.inv);
    gainDna(inv, 8);
    this.stats.dnaMined += 8;
  }
  onBioBabyBoom(game) {
    this.buffs['babyboom'] = { mul: 1.5, until: Date.now() + 10 * 60 * 1000 };
  }
  onBioSymbiosis(game) {
    // 随机生物圈免费入驻一个随机群落
    const spheres = this.bbuildings(game, 'biosphere');
    if (spheres.length === 0) return;
    const sp = spheres[Math.floor(Math.random() * spheres.length)];
    const key = this.bkey(sp);
    if (!this.spheres[key]) this.spheres[key] = { ecos: [] };
    const cur = this.spheres[key].ecos;
    const cands = ECO_ORDER.filter(e =>
      !cur.includes(e) && (!ECO_DEFS[e].needBTech || this.btech.has(ECO_DEFS[e].needBTech)));
    if (cands.length === 0 || cur.length >= this.ecoSlotsFor(key, game)) return;
    const pick = cands[Math.floor(Math.random() * cands.length)];
    cur.push(pick);
    this.ecoInstalled++;
    this.blog(ECO_DEFS[pick].icon, `共生突破：${ECO_DEFS[pick].name}免费入驻`);
  }

  // —— 坏事件结算 ——
  onBioBlight(game) {
    const inv = ensureBio(game.player.inv);
    inv.biomass = Math.max(0, (inv.biomass || 0) - Math.floor((inv.biomass || 0) * 0.15));
    inv.food = Math.max(0, (inv.food || 0) - Math.floor((inv.food || 0) * 0.10));
    this.addSafety(-0.05, '生态枯萎');
  }
  onBioCloneFail(game) {
    // 清空所有培养进度
    for (const k in this.vats) {
      if (this.vats[k].progressMs >= 0) this.vats[k].progressMs = -1;
    }
    const inv = ensureBio(game.player.inv);
    inv.biomass = Math.max(0, (inv.biomass || 0) - 50);
    this.addSafety(-0.05, '克隆事故');
  }
  onBioPest(game) {
    this.greenhouseDownUntil = Date.now() + 60000;
    this.blog('🐛', '基因害虫：温室停产 60 秒');
  }
  onBioLeak(game) {
    const inv = ensureBio(game.player.inv);
    inv.dna = Math.max(0, (inv.dna || 0) - 5);
    this.stats.dnaSpent += 5;
    this.addSafety(-0.1, '基因泄漏');
  }

  // —— 瘟疫事件结算 ——
  onBioPlague(game) {
    this.startPlague(game);
  }
  onBioPlagueMild(game) {
    // 轻微疫情：小规模感染 60 秒（简化：直接扣少量人口）
    const pop = this.popCount(game);
    const loss = Math.min(Math.max(1, Math.floor(pop * 0.02)), pop - 1);
    if (loss > 0 && game.pop && typeof game.pop.count === 'number') {
      game.pop.count -= loss;
      this.blog('🤧', `轻微疫情：${loss} 人患病休养（人口 -${loss}）`);
    }
    this.addSafety(-0.03, '轻微疫情');
  }

  // —— 奇事件结算 ——
  onBioAwaken(game) {
    const locked = GENEMOD_ORDER.filter(id => !this.genemods.has(id));
    if (locked.length === 0) return;
    const pick = locked[Math.floor(Math.random() * locked.length)];
    this.genemodDiscount = { id: pick, mul: 0.5, until: Date.now() + 10 * 60 * 1000 };
    this.blog('👁️', `基因觉醒：改造「${GENEMOD_DEFS[pick].name}」5 折 10 分钟`);
  }
  onBioFusion(game) {
    // 随机生物圈群落效果翻倍 5 分钟：简化为全城生态产出 +100% 5 分钟
    this.buffs['ecofusion'] = { mul: 2, until: Date.now() + 5 * 60 * 1000 };
    this.blog('🌀', '基因融合：生态产出翻倍 5 分钟');
  }
  onBioArk(game) {
    const inv = ensureBio(game.player.inv);
    if (this.genemods.size >= GENEMOD_ORDER.length) {
      gainBiomass(inv, 200);
      this.stats.biomassMined += 200;
      this.blog('📡', '方舟信号：改造已全满，转为 biomass×200');
    } else {
      gainDna(inv, 5);
      this.stats.dnaMined += 5;
      this.blog('📡', '方舟信号：dna +5');
    }
  }

  // 温室是否因基因害虫停产（game.js 温室产量处调用）
  greenhouseDown(now) {
    return now < this.greenhouseDownUntil;
  }

  // ---------------- 生物安全度 tick ----------------

  tickSafety(now, dt, game) {
    const dtMin = Math.min(dt, BTUNE.DT_CLAMP_MS) / 60000;
    // 自然恢复 +0.01/分钟；瘟疫流行时 -0.02/分钟
    let delta = 0.01;
    if (this.plague) delta = -0.02;
    // 药用植物园群落加速恢复
    delta += this.ecoFxSum('plagueResist') * 0.02;
    this.safety = Math.max(0, Math.min(1, this.safety + delta * dtMin));
    // 合同：安全度维持累计
    for (const m of this.missions) {
      if (m.done) continue;
      const def = BMISSION_DEFS[m.id];
      if (def.need.safetyHold && this.biosafety() >= def.need.safetyHold.level) {
        m.progress += dtMin * 60;
      }
    }
  }

  // ---------------- 生物合同 ----------------

  tickMissions(now, game) {
    if (now < this.nextMission) return;
    const gap = BMISSION_TUNE.MIN_GAP +
      Math.random() * (BMISSION_TUNE.MAX_GAP - BMISSION_TUNE.MIN_GAP);
    this.nextMission = now + gap;
    this.missions = this.missions.filter(m => !m.done);
    if (this.missions.length >= BMISSION_TUNE.MAX_ACTIVE) return;
    const active = new Set(this.missions.map(m => m.id));
    const cands = BMISSION_ORDER.filter(id => !active.has(id));
    if (cands.length === 0) return;
    const pick = cands[Math.floor(Math.random() * cands.length)];
    this.missions.push({ id: pick, progress: 0, done: false, acceptedAt: now });
    const def = BMISSION_DEFS[pick];
    this.blog(def.icon, `新生物合同：${def.name}`);
    this.emit('bmission-new', { id: pick, name: def.name });
  }

  checkMissions(game) {
    const inv = ensureBio(game.player.inv);
    for (const m of this.missions) {
      if (m.done) continue;
      const def = BMISSION_DEFS[m.id];
      const need = def.need;
      let done = false;
      if (need.dna) {
        if (spendDna(inv, need.dna)) {
          this.stats.dnaSpent += need.dna;
          done = true;
        }
      } else if (need.biomass) {
        if (spendBiomass(inv, need.biomass)) done = true;
      } else if (need.ecoCount) {
        if (this.ecoInstalled >= need.ecoCount) done = true;
      } else if (need.clonedPop) {
        if (this.totalCloned >= need.clonedPop) done = true;
      } else if (need.genemodCount) {
        if (this.genemods.size >= need.genemodCount) done = true;
      } else if (need.plagueCured) {
        if (this.plagueCured >= need.plagueCured) done = true;
      } else if (need.biospheres) {
        if (this.bbuildings(game, 'biosphere').length >= need.biospheres) done = true;
      } else if (need.safetyHold) {
        if (m.progress >= need.safetyHold.sec) done = true;
      }
      if (done) {
        m.done = true;
        this._missionsDone = (this._missionsDone || 0) + 1;
        if (def.reward.res) {
          for (const k in def.reward.res) {
            if (k === 'dna') gainDna(inv, def.reward.res[k]);
            else if (k === 'biomass') gainBiomass(inv, def.reward.res[k]);
            else inv[k] = (inv[k] || 0) + def.reward.res[k];
          }
        }
        if (def.reward.dna) {
          gainDna(inv, def.reward.dna);
          this.stats.dnaMined += def.reward.dna;
        }
        this.blog(def.icon, `生物合同完成：${def.name}`);
        this.emit('bmission-done', { id: m.id, name: def.name, icon: def.icon });
        if (game.toast) game.toast(`${def.icon} 生物合同完成：${def.name}`, 'good');
        if (game.sound) game.sound('complete');
      }
    }
  }

  // ---------------- 主更新 ----------------

  update(now, game) {
    if (!game || !game.player || !game.player.inv) return;
    const dt = this._lastTick ? now - this._lastTick : 0;
    this._lastTick = now;
    if (dt <= 0 || dt > 3600000) return;
    const cdt = Math.min(dt, BTUNE.DT_CLAMP_MS);

    // 清理过期 buff
    for (const k in this.buffs) {
      if (this.buffs[k].until <= now) delete this.buffs[k];
    }
    // 基因觉醒折扣过期
    if (this.genemodDiscount && this.genemodDiscount.until <= now) {
      this.genemodDiscount = null;
    }

    this.tickSafety(now, cdt, game);
    this.tickGenebank(now, cdt, game);
    this.tickClones(now, cdt, game);
    this.tickSpheres(now, cdt, game);
    this.tickPlague(now, cdt, game);
    this.tickBioEvents(now, game);
    this.tickMissions(now, game);
    this.checkMissions(game);

    // 成就追踪
    const inv = game.player.inv;
    this._lastDnaSeen = Math.max(this._lastDnaSeen || 0, inv.dna || 0);
    this._lastSpheresSeen = Math.max(this._lastSpheresSeen || 0,
      this.bbuildings(game, 'biosphere').length);
  }

  // ---------------- 生物成就 ----------------

  checkAchievements() {
    if (!this._achUnlocked) this._achUnlocked = new Set();
    const newly = [];
    for (const id of BACH_ORDER) {
      if (this._achUnlocked.has(id)) continue;
      try {
        if (BACH_DEFS[id].check(this)) {
          this._achUnlocked.add(id);
          newly.push(id);
          this.blog(BACH_DEFS[id].icon, `生物成就：${BACH_DEFS[id].name}`);
        }
      } catch (e) { /* 判定异常跳过 */ }
    }
    if (newly.length > 0) this.emit('bach', { ids: newly });
    return newly;
  }

  achievementPanel() {
    if (!this._achUnlocked) this._achUnlocked = new Set();
    return BACH_ORDER.map(id => ({
      id,
      name: BACH_DEFS[id].name,
      icon: BACH_DEFS[id].icon,
      desc: BACH_DEFS[id].desc,
      done: this._achUnlocked.has(id),
    }));
  }

  // ---------------- 面板数据 ----------------

  panelData(game) {
    const now = Date.now();
    const buffs = this.getBuffs(game);
    const inv = ensureBio(game.player.inv);
    return {
      version: BIO_VERSION,
      dna: Math.floor((inv.dna || 0) * 10) / 10,
      dnaFmt: fmtBio(inv.dna || 0),
      biomass: Math.floor(inv.biomass || 0),
      biomassFmt: fmtBio(inv.biomass || 0),
      safety: this.biosafety(),
      genebanks: this.bbuildings(game, 'genebank').length,
      vats: this.bbuildings(game, 'clonevat').length,
      vatsBusy: Object.keys(this.vats).filter(k => this.vats[k].progressMs >= 0).length,
      spheres: this.bbuildings(game, 'biosphere').length,
      ecoSlots: this.ecoSlots(),
      ecoInstalled: Object.keys(this.spheres).reduce((s, k) => s + this.spheres[k].ecos.length, 0),
      clonePop: this.clonePop,
      cloneRatio: this.cloneRatio(game),
      genemodsDone: this.genemods.size,
      genemodsTotal: GENEMOD_ORDER.length,
      btechDone: this.btech.size,
      btechTotal: BTECH_ORDER.length,
      plague: buffs.plague,
      cureCost: this.cureCost(game),
      greenhouseDown: this.greenhouseDown(now),
      buffs,
      missions: this.missions.filter(m => !m.done).map(m => ({
        id: m.id,
        name: BMISSION_DEFS[m.id].name,
        icon: BMISSION_DEFS[m.id].icon,
        desc: BMISSION_DEFS[m.id].desc,
      })),
      stats: Object.assign({}, this.stats),
      log: this.log.slice(-10).reverse(),
    };
  }

  // 基因改造面板
  genemodPanel(game) {
    const now = Date.now();
    return GENEMOD_ORDER.map(id => {
      const def = GENEMOD_DEFS[id];
      const chk = this.canGenemod(id, (game && game.player && game.player.inv) || {});
      return {
        id, name: def.name, icon: def.icon, branch: def.branch, tier: def.tier,
        desc: def.desc, flavor: def.flavor,
        cost: chk.cost || def.cost,
        discount: !!(this.genemodDiscount && this.genemodDiscount.id === id &&
          now < this.genemodDiscount.until),
        done: this.genemods.has(id),
        canDo: chk.ok,
        reason: chk.reason || null,
      };
    });
  }

  // 生物科技面板
  btechPanel(game) {
    const inv = (game && game.player && game.player.inv) || {};
    return BTECH_ORDER.map(id => {
      const def = BTECH_DEFS[id];
      const chk = this.canBTech(id, inv);
      return {
        id, name: def.name, icon: def.icon, cost: def.cost,
        desc: def.desc, flavor: def.flavor, needs: def.needs,
        needsMet: def.needs.every(p => this.btech.has(p)),
        done: this.btech.has(id),
        canDo: chk.ok, reason: chk.reason || null,
      };
    });
  }

  // 克隆面板
  clonePanel(game) {
    const vats = this.bbuildings(game, 'clonevat');
    return {
      vats: vats.map(v => {
        const key = this.bkey(v);
        const vat = this.vats[key];
        return {
          key, x: v.x, y: v.y,
          busy: !!(vat && vat.progressMs >= 0),
          templateId: vat ? vat.templateId : null,
          templateName: vat ? CLONE_DEFS[vat.templateId].name : null,
          pct: vat && vat.progressMs >= 0 ?
            Math.max(0, Math.min(1, vat.progressMs / vat.batchMs)) : 0,
          remainSec: vat && vat.progressMs >= 0 ?
            Math.max(0, Math.ceil((vat.batchMs - vat.progressMs) / 1000)) : 0,
        };
      }),
      templates: CLONE_ORDER.map(id => {
        const def = CLONE_DEFS[id];
        return {
          id, name: def.name, icon: def.icon, desc: def.desc, fxText: def.fxText,
          batchSize: Math.max(1, Math.round(
            BTUNE.CLONE_BATCH_SIZE * def.batchMul + this.bsum('cloneBatchAdd'))),
          batchMin: Math.round(
            BTUNE.CLONE_BATCH_MS * def.timeMul * this.bmul('cloneTimeMul') / 60000),
          needMet: !def.needBTech || this.btech.has(def.needBTech),
          needName: def.needBTech ? BTECH_DEFS[def.needBTech].name : null,
        };
      }),
      clonePop: this.clonePop,
      clonePopByTrait: Object.assign({}, this.clonePopByTrait),
    };
  }

  // 生态面板
  ecoPanel(game) {
    const spheres = this.bbuildings(game, 'biosphere');
    return {
      slots: this.ecoSlots(),
      spheres: spheres.map(s => {
        const key = this.bkey(s);
        const cur = (this.spheres[key] && this.spheres[key].ecos) || [];
        return {
          key, x: s.x, y: s.y,
          ecos: cur.map(eid => ({
            id: eid, name: ECO_DEFS[eid].name, icon: ECO_DEFS[eid].icon,
          })),
        };
      }),
      catalog: ECO_ORDER.map(id => {
        const def = ECO_DEFS[id];
        return {
          id, name: def.name, icon: def.icon, cost: def.cost,
          desc: def.desc, fxText: def.fxText,
          needMet: !def.needBTech || this.btech.has(def.needBTech),
          needName: def.needBTech ? BTECH_DEFS[def.needBTech].name : null,
        };
      }),
    };
  }

  // 瘟疫面板
  plaguePanel(game) {
    return {
      active: this.plague ? {
        strainId: this.plague.strainId,
        name: PLAGUE_DEFS[this.plague.strainId].name,
        icon: PLAGUE_DEFS[this.plague.strainId].icon,
        desc: PLAGUE_DEFS[this.plague.strainId].desc,
        infected: Math.floor(this.plague.infected),
        remainSec: Math.max(0, Math.ceil((this.plague.until - Date.now()) / 1000)),
        cureCost: this.cureCost(game),
      } : null,
      resist: this.plagueResist(game),
      quarantines: this.bbuildings(game, 'quarantine').length,
      safety: this.biosafety(),
      strains: PLAGUE_ORDER.map(id => ({
        id, name: PLAGUE_DEFS[id].name, icon: PLAGUE_DEFS[id].icon,
        desc: PLAGUE_DEFS[id].desc,
        spread: PLAGUE_DEFS[id].spread, lethal: PLAGUE_DEFS[id].lethal,
        cureDna: PLAGUE_DEFS[id].cureDna,
      })),
      cured: this.plagueCured,
    };
  }

  // ---------------- 存档 / 读档 ----------------

  save() {
    const now = Date.now();
    return {
      v: BIO_VERSION,
      genemods: Array.from(this.genemods),
      genemodDiscount: this.genemodDiscount,
      btech: Array.from(this.btech),
      genebankState: this.genebankState,
      bbLevel: this.bbLevel || {},
      vats: this.vats,
      clonePop: this.clonePop,
      clonePopByTrait: this.clonePopByTrait,
      totalCloned: this.totalCloned,
      spheres: this.spheres,
      ecoInstalled: this.ecoInstalled,
      plague: this.plague,
      plagueCured: this.plagueCured,
      nextPlagueIn: Math.max(0, this.nextPlague - now),
      safety: this.safety,
      nextBioEventIn: Math.max(0, this.nextBioEvent - now),
      greenhouseDownIn: Math.max(0, this.greenhouseDownUntil - now),
      missions: this.missions,
      nextMissionIn: Math.max(0, this.nextMission - now),
      buffs: this.buffs,
      achUnlocked: this._achUnlocked ? Array.from(this._achUnlocked) : [],
      missionsDone: this._missionsDone || 0,
      lastDnaSeen: this._lastDnaSeen || 0,
      lastSpheresSeen: this._lastSpheresSeen || 0,
      log: this.log.slice(-BTUNE.BLOG_MAX),
      stats: this.stats,
    };
  }

  load(data) {
    if (!data) return;
    const now = Date.now();
    this.genemods = new Set(data.genemods || []);
    this.genemodDiscount = data.genemodDiscount || null;
    this.btech = new Set(data.btech || []);
    this.genebankState = data.genebankState || {};
    this.bbLevel = data.bbLevel || {};
    this.vats = data.vats || {};
    this.clonePop = data.clonePop || 0;
    this.clonePopByTrait = data.clonePopByTrait || {};
    this.totalCloned = data.totalCloned || 0;
    this.spheres = data.spheres || {};
    this.ecoInstalled = data.ecoInstalled || 0;
    this.plague = data.plague || null;
    this.plagueCured = data.plagueCured || 0;
    this.nextPlague = now + (data.nextPlagueIn || BTUNE.PLAGUE_MIN_GAP);
    this.safety = (typeof data.safety === 'number') ? data.safety : 1.0;
    this.nextBioEvent = now + (data.nextBioEventIn || BTUNE.BIOEVENT_MIN_GAP);
    this.greenhouseDownUntil = now + (data.greenhouseDownIn || 0);
    this.missions = data.missions || [];
    this.nextMission = now + (data.nextMissionIn || BMISSION_TUNE.MIN_GAP);
    this.buffs = data.buffs || {};
    this._achUnlocked = new Set(data.achUnlocked || []);
    this._missionsDone = data.missionsDone || 0;
    this._lastDnaSeen = data.lastDnaSeen || 0;
    this._lastSpheresSeen = data.lastSpheresSeen || 0;
    this.log = data.log || [];
    this.stats = Object.assign({
      dnaMined: 0, dnaSpent: 0, biomassMined: 0, cloned: 0,
      genemodsDone: 0, plagues: 0, bioEvents: 0,
    }, data.stats);
    this._lastTick = 0;
  }
}

// ---------------------------------------------------------------------
// 🏆 生物成就 BACH_DEFS（12 项）
// ---------------------------------------------------------------------
// 接入：在 game.js 成就检查处调用
//   if (game.bio) for (const id of game.bio.checkAchievements()) game.achievements.unlock(id);
const BACH_DEFS = {
  'bach-first-dna': {
    name: '生命密码', icon: '🧬',
    desc: '产出第一个基因点。',
    check: (bm) => bm.stats.dnaMined >= 1,
  },
  'bach-hundred-dna': {
    name: '基因富翁', icon: '💰',
    desc: 'dna 库存达到 100。',
    check: (bm) => bm._lastDnaSeen >= 100,
  },
  'bach-genemod-6': {
    name: '改造新手', icon: '💪',
    desc: '完成 6 项基因改造。',
    check: (bm) => bm.genemods.size >= 6,
  },
  'bach-genemod-12': {
    name: '改造专家', icon: '🧠',
    desc: '完成 12 项基因改造。',
    check: (bm) => bm.genemods.size >= 12,
  },
  'bach-genemod-18': {
    name: '新人类', icon: '🌟',
    desc: '完成全部 18 项基因改造。',
    check: (bm) => bm.genemods.size >= 18,
  },
  'bach-clone-20': {
    name: '克隆先锋', icon: '🧫',
    desc: '累计克隆 20 人口。',
    check: (bm) => bm.totalCloned >= 20,
  },
  'bach-clone-100': {
    name: '复制军团', icon: '🧑‍🤝‍🧑',
    desc: '累计克隆 100 人口。',
    check: (bm) => bm.totalCloned >= 100,
  },
  'bach-eco-10': {
    name: '生态学家', icon: '🌿',
    desc: '累计入驻 10 个生态群落。',
    check: (bm) => bm.ecoInstalled >= 10,
  },
  'bach-plague-cure': {
    name: '白衣天使', icon: '💊',
    desc: '治愈 1 次基因瘟疫。',
    check: (bm) => bm.plagueCured >= 1,
  },
  'bach-plague-3': {
    name: '瘟疫克星', icon: '🛡️',
    desc: '累计治愈 3 次基因瘟疫。',
    check: (bm) => bm.plagueCured >= 3,
  },
  'bach-sphere-3': {
    name: '三球共生', icon: '🌍',
    desc: '同时运行 3 座生物圈3号。',
    check: (bm) => bm._lastSpheresSeen >= 3,
  },
  'bach-gaia': {
    name: '盖亚之心', icon: '💚',
    desc: '入驻盖亚核心群落。',
    check: (bm) => {
      for (const k in bm.spheres) {
        if (bm.spheres[k].ecos.includes('eco-gaia')) return true;
      }
      return false;
    },
  },
};
const BACH_ORDER = Object.keys(BACH_DEFS);

// ---------------------------------------------------------------------
// 🧪 自检（浏览器控制台 / node 手动调用）：BioSelfTest()
// ---------------------------------------------------------------------
// 不自动运行；接入方可在开发时调用排查。
function BioSelfTest() {
  const results = [];
  const ok = (name, cond) => results.push({ name, ok: !!cond });
  // 基因改造表完整性
  for (const id of GENEMOD_ORDER) {
    const d = GENEMOD_DEFS[id];
    ok('改造表 ' + id, !!d && !!d.branch && d.tier >= 1 && d.tier <= 6 && !!d.cost && !!d.fx);
    if (d.tier > 1) {
      ok('改造顺序 ' + id, !!GENEMOD_DEFS[`g-${d.branch}-${d.tier - 1}`]);
    }
  }
  // 建筑表完整性
  for (const id of BBUILD_ORDER) {
    const d = BBUILD_DEFS[id];
    ok('建筑表 ' + id, !!d && !!d.name && !!d.cost && typeof d.power === 'number');
    if (d.needBTech) ok('建筑前置 ' + id, !!BTECH_DEFS[d.needBTech]);
  }
  // 生态群落表完整性
  for (const id of ECO_ORDER) {
    const d = ECO_DEFS[id];
    ok('群落表 ' + id, !!d && !!d.cost && !!d.fx);
    if (d.needBTech) ok('群落前置 ' + id, !!BTECH_DEFS[d.needBTech]);
  }
  // 克隆模板表完整性
  for (const id of CLONE_ORDER) {
    const d = CLONE_DEFS[id];
    ok('克隆表 ' + id, !!d && d.batchMul > 0 && d.timeMul > 0);
    if (d.needBTech) ok('克隆前置 ' + id, !!BTECH_DEFS[d.needBTech]);
  }
  // 生物科技表完整性
  for (const id of BTECH_ORDER) {
    const d = BTECH_DEFS[id];
    ok('科技表 ' + id, !!d && !!d.cost && Array.isArray(d.needs));
    for (const pre of d.needs) ok('科技前置 ' + id + '→' + pre, !!BTECH_DEFS[pre]);
  }
  // 毒株表完整性
  for (const id of PLAGUE_ORDER) {
    const d = PLAGUE_DEFS[id];
    ok('毒株表 ' + id, !!d && d.spread > 0 && d.lethal >= 0 && d.cureDna > 0 && !!d.effects);
  }
  // 事件表完整性
  for (const id of BEVENT_ORDER) {
    const d = BEVENT_DEFS[id];
    ok('事件表 ' + id, !!d && !!d.handler &&
      typeof BioManager.prototype[d.handler] === 'function');
  }
  // 合同表完整性
  for (const id of BMISSION_ORDER) {
    const d = BMISSION_DEFS[id];
    ok('合同表 ' + id, !!d && !!d.need && !!d.reward);
  }
  // 升级表完整性
  for (const bid of Object.keys(BUPGRADE_DEFS)) {
    const d = BUPGRADE_DEFS[bid];
    ok('升级表 ' + bid, !!d && Array.isArray(d.levels) && d.levels.length === 2);
    for (const lv of d.levels) ok('升级费用 ' + bid, !!lv.cost && !!lv.fx);
    ok('升级建筑存在 ' + bid, !!BBUILD_DEFS[bid]);
  }
  // 成就表完整性
  for (const id of BACH_ORDER) {
    ok('成就表 ' + id, typeof BACH_DEFS[id].check === 'function');
  }
  // 管理器冒烟
  const bm = new BioManager();
  ok('管理器构造', bm.biosafety() === 1 && bm.genemods.size === 0);
  const inv = { dna: 100, biomass: 500, water: 500, food: 100 };
  const chk = bm.canGenemod('g-str-1', inv);
  ok('改造检查', chk.ok === true);
  const r = bm.doGenemod('g-str-1', { player: { inv }, pop: { count: 30 }, builder: { buildings: [] }, toast: null, sound: null });
  ok('改造执行', r.ok === true && bm.gmul('minerMul', null) === 1.1);
  // 克隆流程冒烟
  ok('克隆流程', (() => {
    const m = new BioManager();
    m.btech.add('b-clone-1');
    const vat = { id: 'clonevat', x: 0, y: 0 };
    const g = {
      player: { inv: { dna: 50, biomass: 500, water: 500 } },
      pop: { count: 30 },
      builder: { buildings: [vat] },
      toast: null, sound: null,
    };
    const s = m.startClone('0,0', 'cl-std', g);
    if (!s.ok) return false;
    // 把进度推到接近完成，再跑 61 秒 tick
    m.vats['0,0'].progressMs = m.vats['0,0'].batchMs - 1000;
    const now = Date.now();
    m._lastTick = now - 61000;
    m.update(now, g);
    return g.pop.count === 35 && m.clonePop === 5;
  })());
  // 瘟疫流程冒烟
  ok('瘟疫流程', (() => {
    const m = new BioManager();
    const g = {
      player: { inv: { dna: 100, biomass: 0 } },
      pop: { count: 50 },
      builder: { buildings: [] },
      toast: null, sound: null,
    };
    const s = m.startPlague(g, 'pl-flu');
    if (!s.ok || !m.plague) return false;
    const c = m.curePlague(g);
    return c.ok === true && m.plague === null && m.plagueCured === 1;
  })());
  // 群落入驻冒烟
  ok('群落入驻', (() => {
    const m = new BioManager();
    const g = {
      player: { inv: { dna: 0, biomass: 500 } },
      pop: { count: 30 },
      builder: { buildings: [{ id: 'biosphere', x: 1, y: 1 }] },
      toast: null, sound: null,
    };
    const r1 = m.installEco('1,1', 'eco-algae', g);
    const r2 = m.installEco('1,1', 'eco-fungi', g);
    const r3 = m.installEco('1,1', 'eco-moss', g);  // 槽位只有 2，应失败
    return r1.ok && r2.ok && !r3.ok && m.ecoFxMul('biomassMul') === 1.3;
  })());
  // 存档读档
  const saved = bm.save();
  const bm2 = new BioManager();
  bm2.load(saved);
  ok('存档读档', bm2.genemods.has('g-str-1') && bm2.biosafety() === 1);
  // 资源记账
  ok('dna 记账', (() => { const i = {}; gainDna(i, 5); return i.dna === 5 && spendDna(i, 2) && i.dna === 3; })());
  ok('biomass 记账', (() => { const i = {}; gainBiomass(i, 10); return i.biomass === 10 && spendBiomass(i, 4) && i.biomass === 6; })());
  // 成就冒烟
  ok('成就冒烟', (() => {
    const m = new BioManager();
    m.stats.dnaMined = 1;
    return m.checkAchievements().includes('bach-first-dna');
  })());
  // 建筑升级冒烟
  ok('升级冒烟', (() => {
    const m = new BioManager();
    const b = { id: 'clonevat', x: 2, y: 3 };
    const g = {
      player: { inv: { steel: 10000, tech: 10000 } },
      builder: { buildings: [b] },
      toast: null, sound: null,
    };
    const r1 = m.upgradeBBuilding(b, g);
    const fx = m.bbUpgradeFx(b, 'timeMul', 'mul', 1);
    const panel = m.upgradePanelB(b);
    return r1.ok && m.blevelOf(b) === 2 && fx === 0.8 && panel.level === 2;
  })());
  const failed = results.filter(x => !x.ok);
  return { total: results.length, failed: failed.length, failedList: failed.map(f => f.name) };
}

if (typeof module !== 'undefined') {
  module.exports = {
    BIO_VERSION, BTUNE, BIO_RES,
    ensureBio, canAffordDna, spendDna, gainDna,
    gainBiomass, spendBiomass, fmtBio,
    GENEMOD_DEFS, GENEMOD_ORDER, GENEMOD_BRANCHES,
    BBUILD_DEFS, BBUILD_ORDER, BBUILD_IDS, BUPGRADE_DEFS,
    ECO_DEFS, ECO_ORDER,
    CLONE_DEFS, CLONE_ORDER, scaleTrait,
    BTECH_DEFS, BTECH_ORDER,
    PLAGUE_DEFS, PLAGUE_ORDER,
    BEVENT_DEFS, BEVENT_ORDER,
    BMISSION_DEFS, BMISSION_ORDER, BMISSION_TUNE,
    BACH_DEFS, BACH_ORDER,
    BioManager, BioSelfTest,
  };
}
