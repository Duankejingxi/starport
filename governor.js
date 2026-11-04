/* 星港 — governor.js：AI 总督系统（分区自治 / 人格 / 忠诚 / 叛变） */

// ============================== 设计说明 ==============================
// GovernorManager 由主游戏注入三个回调，避免与 game.js 循环依赖：
//   canBuild(sectorId, buildingId, fx, fy) -> { ok:true } | { ok:false, reason:'...' }
//       sectorId: 分区 id；fx/fy: 0~1 的地图相对坐标（分区矩形内随机取点）
//   doBuild(sectorId, buildingId, fx, fy)  -> 成功返回真值（对象/true），失败返回假值
//   getState() -> {
//       inv: { iron, food, water, energy, tech, ... },   // 资源库存（读取用）
//       buildings: [{ ref, id, x, y, level }],           // 全城建筑列表（ref 供升级回调用）
//       disasterIncoming: 'sandstorm'|'meteor'|...|null, // 即将到来的灾难
//       timeMin: number,                                 // 游戏内分钟（可选，用于任期）
//     }
// 可选回调（有则用，没有则降级）：
//   doUpgrade(buildingRef)   -> 真值=升级成功   （总督自动升级建筑用）
//   spend(costMap)           -> 真值=扣费成功   （镇压叛乱用；无则尝试直接扣 inv）
//   enactPolicy(policyId)    -> 真值=颁布成功   （总督推荐政策用）
//   notify(msg)              -> 通知玩家（toast/log 用）
//
// 存档：manager.save() -> { governors:[...], sectors:[...], nextGovId, candidates, log }
//       manager.load(data) 恢复。
//
// 游戏主循环每帧/每秒调用：manager.tick(dtSeconds)。

// ============================== 分区定义（最多 6 个） ==============================
// 每个分区是地图上的矩形区域，用相对坐标 fx/fy (0~1) 描述；
// 总督选址时在分区矩形内随机取点，交给 canBuild 校验合法性。
const SECTOR_DEFS = [
  {
    id: 'alpha', name: '曙光区', icon: '🌅', color: '#ffd166',
    fx0: 0.02, fy0: 0.02, fx1: 0.48, fy1: 0.48,
    desc: '城市发源地，居住与商业的核心区。',
    buff: { popGrowthBonus: 0.05 },   // 分区被动：人口增长 +5%
  },
  {
    id: 'beta', name: '熔炉区', icon: '⚙️', color: '#ef8354',
    fx0: 0.52, fy0: 0.02, fx1: 0.98, fy1: 0.48,
    desc: '重工业带，采矿与冶炼的轰鸣之地。',
    buff: { minerBonus: 0.08 },       // 分区被动：采矿产量 +8%
  },
  {
    id: 'gamma', name: '绿洲区', icon: '🌿', color: '#90be6d',
    fx0: 0.02, fy0: 0.52, fx1: 0.48, fy1: 0.98,
    desc: '农业与生态穹顶，城市的粮仓。',
    buff: { foodBonus: 0.08 },        // 分区被动：食物产量 +8%
  },
  {
    id: 'delta', name: '灯塔区', icon: '🔬', color: '#4cc9f0',
    fx0: 0.52, fy0: 0.52, fx1: 0.98, fy1: 0.98,
    desc: '科研高地，实验室与天线林立。',
    buff: { techBonus: 0.08 },        // 分区被动：科技产出 +8%
  },
  {
    id: 'epsilon', name: '壁垒区', icon: '🛡️', color: '#b56576',
    fx0: 0.25, fy0: 0.25, fx1: 0.75, fy1: 0.75,
    desc: '中央要塞区，军事与指挥中枢。',
    buff: { defenseBonus: 0.10 },     // 分区被动：防御力 +10%
  },
  {
    id: 'zeta', name: '远疆区', icon: '🚀', color: '#9b5de5',
    fx0: 0.60, fy0: 0.60, fx1: 0.98, fy1: 0.98,
    desc: '边境开拓区，发射场与深空设施。',
    buff: { tradeBonus: 0.08 },       // 分区被动：贸易收入 +8%
  },
];
const MAX_SECTORS = 6;

// ============================== 总督人格（5 种） ==============================
// buildWeights: 建筑 id -> 建造偏好权重（越大越爱建；缺省=1）
//   居住类：habitat / 采矿类：miner, uminer, he3rig / 能源：solar, nuclear, fusion
//   科研：lab, satellite, antenna / 军事：mil_academy, arms_factory, radar,
//         missile_silo, shelter, merc_camp, nuke_silo, shield
//   民生：greenhouse, waterplant, hospital, school, dome / 工业：smelter, nanofactory
//   商业：trade, spaceport / 基础设施：depot, warehouse, logistics, road, repair
// policyLean: 该人格会推荐的政策 id（见 policy.js 的 POLICY_DEFS）
// disaster: 灾难应对策略：'stockpile'(存电存粮) 'fortify'(加固防御) 'research'(加速科研)
//           'evac'(疏散保人) 'raid'(趁乱出击，战争贩子专属)
const PERSONALITY_DEFS = {
  // ---- 🌐 扩张者：多建居住 + 采矿，铺摊子 ----
  // 台词风格：豪迈、爱画饼
  expander: {
    id: 'expander', name: '扩张者', icon: '🌐', color: '#ffd166',
    desc: '眼里只有增长曲线：拼命铺居住舱和采矿机，城市边界就是他的勋章。',
    buildWeights: {
      habitat: 10, miner: 9, uminer: 8, he3rig: 7, solar: 6, road: 6,
      depot: 5, warehouse: 5, logistics: 5, greenhouse: 4, waterplant: 4,
      smelter: 4, pump: 4, dome: 3, trade: 3, hospital: 2, school: 2,
      lab: 1, shield: 1, missile_silo: 1,
    },
    policyLean: ['progressive_tax', 'resource_tax', 'estate_tax'],
    disaster: 'stockpile',
    buildCdBase: 75,        // 基础建造间隔（秒），越小越勤快
    upgradeBias: 0.6,       // 升级 vs 新建的倾向（<1 偏新建）
    loyaltyBase: 62,        // 忠诚度自然回归值
    salaryMul: 1.0,         // 薪水倍率
    quotes: {
      hire:    '「把地图交给我，三年内这片荒漠全是灯火！」',
      build:   '「又一座新建筑拔地而起！扩张，永不停歇！」',
      upgrade: '「旧的不去新的不来——升级它，扩建它！」',
      praise:  '「看看这片城区，这都是我的功绩！」',
      complain:'「资源给得太少了！巧妇难为无米之炊！」',
      idle:    '「地盘还空着，我的手已经痒了。」',
      rebel:   '「这座城市本该更大——既然你不懂，那就换我来当家！」',
      event:   '「我有个大胆的计划，需要你的点头。」',
    },
  },
  // ---- 🛡️ 保守者：重防御 + 储备，稳扎稳打 ----
  // 台词风格：谨慎、爱囤货
  conservative: {
    id: 'conservative', name: '保守者', icon: '🛡️', color: '#90be6d',
    desc: '信奉"手中有粮心不慌"：优先防御工事与仓储，绝不冒进。',
    buildWeights: {
      shield: 10, shelter: 9, warehouse: 9, depot: 8, missile_silo: 7,
      radar: 7, greenhouse: 6, waterplant: 6, habitat: 5, hospital: 5,
      repair: 5, dome: 5, nuclear: 4, solar: 4, miner: 3, smelter: 3,
      lab: 2, trade: 2, nuke_silo: 1,
    },
    policyLean: ['conscription', 'military_industry', 'poll_tax'],
    disaster: 'fortify',
    buildCdBase: 110,
    upgradeBias: 1.4,       // 偏升级现有建筑而非新建
    loyaltyBase: 70,
    salaryMul: 0.9,
    quotes: {
      hire:    '「慢就是快。我会把这里建成打不烂的堡垒。」',
      build:   '「仓库又满了一格。今晚能睡个好觉了。」',
      upgrade: '「加固，再加固。火星从不同情侥幸。」',
      praise:  '「零事故的第 {n} 天。稳健，是一种美德。」',
      complain:'「储备线告急了，再这样下去我可要写报告了。」',
      idle:    '「无事发生，就是最好的消息。」',
      rebel:   '「你把城市带向了深渊——为了大家，我必须接管。」',
      event:   '「防患于未然，我有几条稳妥的建议。」',
    },
  },
  // ---- 🔬 科研狂：实验室 + 科技，烧钱搞研究 ----
  // 台词风格：狂热、满口术语
  researcher: {
    id: 'researcher', name: '科研狂', icon: '🔬', color: '#4cc9f0',
    desc: '为科技可以不吃不喝：实验室、天线、卫星有多少建多少。',
    buildWeights: {
      lab: 10, satellite: 9, antenna: 8, nanofactory: 7, fusion: 6,
      nuclear: 5, solar: 5, school: 5, hospital: 4, habitat: 3,
      greenhouse: 3, miner: 3, he3rig: 3, spaceport: 3, ecocircle: 3,
      shield: 2, trade: 2, warehouse: 2, ark: 2,
    },
    policyLean: ['trade_tax', 'progressive_tax'],
    disaster: 'research',
    buildCdBase: 95,
    upgradeBias: 1.2,
    loyaltyBase: 55,        // 科研狂心思在别处，忠诚回归值偏低
    salaryMul: 1.25,        // 但要价高（要科研经费）
    quotes: {
      hire:    '「给我实验室和算力，我还你一个未来！」',
      build:   '「新的实验设施上线了！数据，美味的数据！」',
      upgrade: '「把旧设备拆了，换上第 7 代原型机！」',
      praise:  '「突破！我们离可控聚变又近了一步！」',
      complain:'「经费！经费！没有经费的科学就是玄学！」',
      idle:    '「算力空转中……这简直是犯罪。」',
      rebel:   '「愚昧的官僚阻碍了科学——实验室宣布独立！」',
      event:   '「我的最新论文需要一点点……资源支持。」',
    },
  },
  // ---- ⚔️ 战争贩子：军事建筑 + 踊跃袭击 ----
  // 台词风格：好战、嗜血
  warmonger: {
    id: 'warmonger', name: '战争贩子', icon: '⚔️', color: '#e63946',
    desc: '和平是战争的间隙：狂建军工厂与导弹井，灾难来了都想反打一波。',
    buildWeights: {
      arms_factory: 10, missile_silo: 9, mil_academy: 9, merc_camp: 8,
      radar: 8, nuke_silo: 7, shelter: 6, shield: 6, war_memorial: 4,
      smelter: 5, miner: 5, uminer: 4, nuclear: 4, habitat: 3,
      hospital: 3, repair: 4, logistics: 3, lab: 2, greenhouse: 2,
    },
    policyLean: ['conscription', 'military_industry'],
    disaster: 'raid',
    buildCdBase: 85,
    upgradeBias: 0.9,
    loyaltyBase: 50,        // 最难管的人格
    salaryMul: 1.15,
    quotes: {
      hire:    '「战争是政治的延续，而我是延续的专家。」',
      build:   '「新的战争机器就位！让敌人颤抖吧！」',
      upgrade: '「火力不足？那就翻倍！再翻倍！」',
      praise:  '「上一场袭击，我们零伤亡全歼敌军！」',
      complain:'「弹药库见底了！你想让我的士兵拿扳手上战场吗？」',
      idle:    '「和平……真让人手痒。」',
      rebel:   '「懦弱的统治者不配拥有军队——政变开始！」',
      event:   '「我嗅到了战机。给我授权，剩下的交给我。」',
    },
  },
  // ---- ⚖️ 平衡者：均衡发展，水桶型 ----
  // 台词风格：温和、讲道理
  balancer: {
    id: 'balancer', name: '平衡者', icon: '⚖️', color: '#b8c0ff',
    desc: '不偏科的万金油：居住、生产、科研、防御雨露均沾，稳中求进。',
    buildWeights: {
      habitat: 6, miner: 6, greenhouse: 6, solar: 6, lab: 6,
      hospital: 5, school: 5, waterplant: 5, smelter: 5, trade: 5,
      shield: 4, warehouse: 4, depot: 4, dome: 4, road: 4,
      nuclear: 3, antenna: 3, repair: 3, logistics: 3, radar: 2,
    },
    policyLean: ['progressive_tax', 'trade_tax'],
    disaster: 'evac',
    buildCdBase: 100,
    upgradeBias: 1.0,
    loyaltyBase: 68,
    salaryMul: 1.0,
    quotes: {
      hire:    '「均衡不是平庸，是最高级的智慧。」',
      build:   '「短板补上了，城市又健康了一分。」',
      upgrade: '「查漏补缺，稳步提升。」',
      praise:  '「各项指标都很健康，继续保持。」',
      complain:'「某项资源倾斜太严重了，需要再平衡。」',
      idle:    '「一切运转良好，静待花开。」',
      rebel:   '「失衡的权力必须被纠正——即使手段激烈。」',
      event:   '「我权衡了利弊，有个折中的方案。」',
    },
  },
};
const PERSONALITY_IDS = Object.keys(PERSONALITY_DEFS);

// 人格相性：派系斗争的对立组合（机制：斗争事件只在对立人格之间触发）
const PERSONALITY_CONFLICTS = [
  ['expander', 'conservative'],   // 激进扩张 vs 稳健囤积
  ['researcher', 'warmonger'],    // 烧钱科研 vs 烧钱打仗
  ['expander', 'balancer'],       // 偏科 vs 均衡
  ['conservative', 'warmonger'],  // 死守 vs 主动出击
];

// ============================== 总督特长（8 种） ==============================
// 特长给总督一个被动加成，雇佣时随机抽取
const SPECIALTY_DEFS = {
  logistics:   { id: 'logistics',   name: '物流大师', icon: '🚚', desc: '建造间隔 -15%', fx: { buildCdMul: 0.85 } },
  engineer:    { id: 'engineer',    name: '工程奇才', icon: '🔧', desc: '升级速度 +25%', fx: { upgradeCdMul: 0.75 } },
  economist:   { id: 'economist',    name: '理财好手', icon: '💹', desc: '月薪 -20%',    fx: { salaryMul: 0.8 } },
  charmer:     { id: 'charmer',      name: '亲和力强', icon: '🤝', desc: '忠诚衰减 -50%', fx: { loyaltyDecayMul: 0.5 } },
  veteran:     { id: 'veteran',      name: '沙场老兵', icon: '🎖️', desc: '灾难应对效果 +40%', fx: { disasterFxMul: 1.4 } },
  architect:   { id: 'architect',    name: '规划大师', icon: '📐', desc: '建造成功率直觉 +30%（选址重试次数更多）', fx: { siteTriesBonus: 6 } },
  workaholic:  { id: 'workaholic',   name: '工作狂',   icon: '⏰', desc: '建造间隔 -10%，但忠诚衰减 +30%', fx: { buildCdMul: 0.9, loyaltyDecayMul: 1.3 } },
  miser:       { id: 'miser',        name: '铁公鸡',   icon: '🪙', desc: '月薪 -35%，但加薪要求更频繁', fx: { salaryMul: 0.65, raiseFreqMul: 1.6 } },
};
const SPECIALTY_IDS = Object.keys(SPECIALTY_DEFS);

// ============================== 数值配置 ==============================
const GOV_TUNE = {
  maxGovernors: 6,            // 最多雇佣数（与分区数对齐）
  hireCostTech: 40,           // 雇佣花费科技点（基础）
  hireCostTechPerGov: 15,     // 每多一名总督，雇佣费递增
  baseSalaryFood: 12,         // 基础月薪（食物/60秒）
  salaryFoodPerLevel: 6,      // 每级追加的食物月薪
  salaryEnergyPerLevel: 4,    // 每级追加的能量月薪
  salaryInterval: 60,         // 发薪周期（秒）
  xpPerBuild: 4,              // 每次建造的经验
  xpPerUpgrade: 3,            // 每次升级的经验
  xpPerDisaster: 10,          // 每次灾难应对的经验
  xpPerLevel: 50,             // 升级所需经验 = 等级 * 此值
  maxLevel: 5,
  loyaltyTick: 30,            // 忠诚回归判定间隔（秒）
  loyaltyDecayIdle: 0.6,      // 无分区总督每 tick 忠诚衰减
  eventIntervalMin: 90,       // 事件判定最小间隔（秒）
  eventIntervalMax: 200,      // 事件判定最大间隔（秒）
  rebelCheckInterval: 20,     // 叛变判定间隔（秒）
  rebelBaseChance: 0.06,      // 忠诚<20 时每次判定的基础叛变概率
  strikeThreshold: 35,        // 低于此值罢工（停止一切工作）
  recoverThreshold: 45,       // 回到此值以上复工
  siteTries: 8,               // 每次建造选址尝试次数（基础）
  upgradeMaxLevel: 5,         // 总督只升级到此等级为止
  suppressCost: { iron: 60, food: 40 },  // 镇压叛乱花费
  severanceFood: 30,          // 解雇遣散费（食物）
};

// 总督候选人中文名池（雇佣列表用，抽取不重复）
const GOVERNOR_NAMES = [
  '陈默', '林晓', '赵铁柱', '苏青', '王磊', '李娜', '张衡', '刘洋',
  '黄石', '周岩', '吴刚', '郑爽', '冯远', '褚亮', '卫东', '蒋欣',
  '沈括', '韩信', '曹冲', '谢安', '董卓', '袁野', '薛定谔', '牛顿',
];

// 总督事件类型
const GOV_EVENT_TYPES = {
  raise:      { id: 'raise',      name: '要求加薪', icon: '💰' },
  policy:     { id: 'policy',     name: '政策建言', icon: '📜' },
  faction:    { id: 'faction',    name: '派系斗争', icon: '⚡' },
  tribute:    { id: 'tribute',    name: '进献物资', icon: '🎁' },
  sabotage:   { id: 'sabotage',   name: '暗中破坏', icon: '🗡️' },
};

// ============================== 工具函数 ==============================
function _govRand(a, b) { return a + Math.random() * (b - a); }
function _govPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function _govClamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function _govUid(prefix) {
  return prefix + '_' + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
}
function _govEsc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}
// 深拷贝（存档用，防引用污染）
function _govClone(o) { return JSON.parse(JSON.stringify(o)); }

// ============================== Governor：单个总督 ==============================
class Governor {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id || _govUid('gov');
    this.name = opts.name || _govPick(GOVERNOR_NAMES);
    this.personality = opts.personality || _govPick(PERSONALITY_IDS);
    this.specialty = opts.specialty || _govPick(SPECIALTY_IDS);
    this.level = opts.level || 1;
    this.xp = opts.xp || 0;
    this.loyalty = opts.loyalty != null ? opts.loyalty : 60;
    this.sectorId = opts.sectorId || null;   // 指派的分区 id
    this.salary = opts.salary || { food: GOV_TUNE.baseSalaryFood, energy: 0 };
    this.hiredAt = opts.hiredAt || Date.now();
    this.striking = !!opts.striking;          // 是否罢工中
    this.rebelled = !!opts.rebelled;          // 是否已叛变
    this.buffs = opts.buffs ? _govClone(opts.buffs) : [];  // [{key, mul, until(ts)}]
    this.debuffs = opts.debuffs ? _govClone(opts.debuffs) : [];
    // 计时器（秒）
    this.buildCd = opts.buildCd != null ? opts.buildCd : _govRand(20, 60);
    this.upgradeCd = opts.upgradeCd != null ? opts.upgradeCd : _govRand(60, 120);
    this.raiseCd = opts.raiseCd != null ? opts.raiseCd : _govRand(180, 420);
    // 战绩统计
    this.stats = Object.assign(
      { built: 0, upgraded: 0, disasters: 0, salaryPaid: 0, arrears: 0 },
      opts.stats || {}
    );
  }

  // ---- 人格 / 特长定义快捷访问 ----
  get pdef() { return PERSONALITY_DEFS[this.personality]; }
  get sdef() { return SPECIALTY_DEFS[this.specialty]; }

  // ---- 特长效果乘区查询 ----
  fx(key, defVal) {
    const f = this.sdef && this.sdef.fx;
    return (f && f[key] != null) ? f[key] : (defVal == null ? 1 : defVal);
  }

  // ---- 临时 buff/debuff 乘区 ----
  // key 如 'buildCdMul'；buff 使建造更快则 mul<1；返回连乘结果
  effMul(key) {
    const now = Date.now();
    let m = 1;
    for (const b of this.buffs) {
      if (b.key === key && b.until > now) m *= b.mul;
    }
    for (const d of this.debuffs) {
      if (d.key === key && d.until > now) m *= d.mul;
    }
    // 清理过期
    this.buffs = this.buffs.filter(b => b.until > now);
    this.debuffs = this.debuffs.filter(d => d.until > now);
    return m;
  }
  addBuff(key, mul, durSec) {
    this.buffs.push({ key, mul, until: Date.now() + durSec * 1000 });
  }
  addDebuff(key, mul, durSec) {
    this.debuffs.push({ key, mul, until: Date.now() + durSec * 1000 });
  }

  // ---- 建造间隔（秒）：人格基础 × 特长 × buff × 等级折扣 ----
  buildInterval() {
    const base = this.pdef.buildCdBase * this.fx('buildCdMul', 1);
    const lvlDiscount = 1 - (this.level - 1) * 0.07;   // 每级 -7%
    return base * lvlDiscount * this.effMul('buildCdMul');
  }
  // ---- 升级间隔 ----
  upgradeInterval() {
    const base = 150 * this.fx('upgradeCdMul', 1);
    return base * this.effMul('upgradeCdMul');
  }

  // ---- 是否处于可工作状态 ----
  canWork() {
    return !this.striking && !this.rebelled && !!this.sectorId;
  }

  // ---- 忠诚度调整（带钳制），返回实际变化量 ----
  addLoyalty(delta) {
    const before = this.loyalty;
    this.loyalty = _govClamp(this.loyalty + delta, 0, 100);
    // 罢工/复工状态机
    if (this.loyalty < GOV_TUNE.strikeThreshold) this.striking = true;
    if (this.loyalty >= GOV_TUNE.recoverThreshold) this.striking = false;
    return this.loyalty - before;
  }

  // ---- 经验与升级 ----
  addXp(n) {
    this.xp += n;
    let leveled = false;
    while (this.level < GOV_TUNE.maxLevel && this.xp >= this.level * GOV_TUNE.xpPerLevel) {
      this.xp -= this.level * GOV_TUNE.xpPerLevel;
      this.level++;
      leveled = true;
      this.addLoyalty(5);   // 升级涨忠诚：被认可的感觉
    }
    return leveled;
  }

  // ---- 月薪计算（食物 + 能量） ----
  salaryCost() {
    const mul = this.pdef.salaryMul * this.fx('salaryMul', 1);
    return {
      food: Math.round((GOV_TUNE.baseSalaryFood + (this.level - 1) * GOV_TUNE.salaryFoodPerLevel) * mul),
      energy: Math.round((this.level - 1) * GOV_TUNE.salaryEnergyPerLevel * mul),
    };
  }

  // ---- 存档序列化 ----
  toSave() {
    return {
      id: this.id, name: this.name, personality: this.personality,
      specialty: this.specialty, level: this.level, xp: this.xp,
      loyalty: Math.round(this.loyalty * 10) / 10, sectorId: this.sectorId,
      salary: _govClone(this.salary), hiredAt: this.hiredAt,
      striking: this.striking, rebelled: this.rebelled,
      buffs: _govClone(this.buffs), debuffs: _govClone(this.debuffs),
      buildCd: this.buildCd, upgradeCd: this.upgradeCd, raiseCd: this.raiseCd,
      stats: _govClone(this.stats),
    };
  }
  static fromSave(d) { return new Governor(d); }
}

// ============================== GovernorManager：总督系统 ==============================
class GovernorManager {
  // callbacks: { canBuild, doBuild, getState, doUpgrade?, spend?, enactPolicy?, notify? }
  constructor(callbacks) {
    this.cb = callbacks || {};
    this.governors = [];          // Governor[]
    this.sectors = SECTOR_DEFS.map(s => ({  // 分区运行时状态
      defId: s.id, governorId: null, rebelledBy: null,
      tempBuffs: [],             // [{key, mul, until}] 灾难应对等临时加成
    }));
    this.candidates = [];         // 待雇佣候选人 [{cid, name, personality, specialty, hireCost, salaryMul}]
    this.pendingEvents = [];      // 待玩家抉择的事件 [{eid, type, govId, ...}]
    this.log = [];                // 总督日志（UI 用，最多保留 60 条）
    this.nextGovId = 1;
    // 全局计时器（秒）
    this._salaryTimer = GOV_TUNE.salaryInterval;
    this._loyaltyTimer = GOV_TUNE.loyaltyTick;
    this._eventTimer = _govRand(GOV_TUNE.eventIntervalMin, GOV_TUNE.eventIntervalMax);
    this._rebelTimer = GOV_TUNE.rebelCheckInterval;
    this._uiSeq = 0;              // UI 刷新序号（防重复绑定）
    this._refreshCandidates();
  }

  // ==================== 内部工具 ====================
  _notify(msg) {
    try { this.cb.notify && this.cb.notify(msg); } catch (e) { /* 忽略通知失败 */ }
  }
  _state() {
    try { return this.cb.getState ? this.cb.getState() : {}; }
    catch (e) { return {}; }
  }
  _log(msg, icon) {
    this.log.unshift({ t: Date.now(), msg, icon: icon || '🤖' });
    if (this.log.length > 60) this.log.length = 60;
  }
  gov(id) { return this.governors.find(g => g.id === id) || null; }
  sector(defId) { return this.sectors.find(s => s.defId === defId) || null; }
  sectorDef(defId) { return SECTOR_DEFS.find(s => s.id === defId) || null; }
  // 某分区是否处于叛乱（被总督割据）
  isSectorRebelled(defId) {
    const s = this.sector(defId);
    return !!(s && s.rebelledBy);
  }
  // 分区当前总督（含叛变者）
  sectorGovernor(defId) {
    const s = this.sector(defId);
    return s && s.governorId ? this.gov(s.governorId) : null;
  }

  // 扣费：优先用 cb.spend，否则直接扣 getState().inv
  _spend(cost) {
    if (!cost) return true;
    try {
      if (this.cb.spend) return !!this.cb.spend(cost);
    } catch (e) { return false; }
    const st = this._state();
    const inv = st.inv || {};
    for (const k of Object.keys(cost)) {
      if ((inv[k] || 0) < cost[k]) return false;
    }
    for (const k of Object.keys(cost)) inv[k] -= cost[k];
    return true;
  }
  // 资源是否足够（只读检查）
  _affordable(cost) {
    if (!cost) return true;
    const inv = (this._state().inv) || {};
    return Object.keys(cost).every(k => (inv[k] || 0) >= cost[k]);
  }

  // ==================== 候选人池 ====================
  // 雇佣列表：维持 3 名候选人，每次雇佣/刷新后补充
  _refreshCandidates() {
    const usedNames = new Set([
      ...this.governors.map(g => g.name),
      ...this.candidates.map(c => c.name),
    ]);
    while (this.candidates.length < 3) {
      const pool = GOVERNOR_NAMES.filter(n => !usedNames.has(n));
      const name = pool.length ? _govPick(pool) : ('总督' + this.nextGovId);
      usedNames.add(name);
      const personality = _govPick(PERSONALITY_IDS);
      const pdef = PERSONALITY_DEFS[personality];
      this.candidates.push({
        cid: _govUid('cand'),
        name,
        personality,
        specialty: _govPick(SPECIALTY_IDS),
        hireCost: this._hireCost(),
        salaryMul: pdef.salaryMul,
      });
    }
  }
  _hireCost() {
    return GOV_TUNE.hireCostTech + this.governors.length * GOV_TUNE.hireCostTechPerGov;
  }

  // ==================== 雇佣 / 解雇 ====================
  // 雇佣：花费科技点；返回 Governor 或 null
  hire(cid) {
    if (this.governors.length >= GOV_TUNE.maxGovernors) {
      this._notify('⚠️ 总督席位已满（' + GOV_TUNE.maxGovernors + '/' + GOV_TUNE.maxGovernors + '）');
      return null;
    }
    const idx = this.candidates.findIndex(c => c.cid === cid);
    if (idx < 0) return null;
    const c = this.candidates[idx];
    if (!this._spend({ tech: c.hireCost })) {
      this._notify('⚠️ 科技点不足：雇佣「' + c.name + '」需要 ' + c.hireCost + ' 科技点');
      return null;
    }
    const g = new Governor({
      id: 'gov_' + (this.nextGovId++),
      name: c.name, personality: c.personality, specialty: c.specialty,
      loyalty: 60 + Math.round(_govRand(-5, 10)),
    });
    g.salary = g.salaryCost();
    this.governors.push(g);
    this.candidates.splice(idx, 1);
    this._refreshCandidates();
    this._log(g.pdef.icon + ' 雇佣了总督「' + g.name + '」（' + g.pdef.name + '·' + g.sdef.name + '）', g.pdef.icon);
    this._notify(g.pdef.icon + ' 「' + g.name + '」走马上任！' + g.pdef.quotes.hire);
    return g;
  }

  // 解雇：付遣散费；其他总督忠诚 -5（兔死狐悲）；分区腾空
  fire(gid) {
    const idx = this.governors.findIndex(g => g.id === gid);
    if (idx < 0) return false;
    const g = this.governors[idx];
    if (g.rebelled) {
      this._notify('⚠️ 「' + g.name + '」已叛变！请先镇压其割据的分区。');
      return false;
    }
    if (!this._spend({ food: GOV_TUNE.severanceFood })) {
      this._notify('⚠️ 食物不足：解雇遣散费需要 ' + GOV_TUNE.severanceFood + ' 食物');
      return false;
    }
    this._unassign(gid);
    this.governors.splice(idx, 1);
    for (const other of this.governors) other.addLoyalty(-5);
    this._log('📤 解雇了总督「' + g.name + '」，其余总督忠诚 -5', '📤');
    this._notify('📤 「' + g.name + '」被解职了，其他总督人心惶惶（忠诚 -5）。');
    return true;
  }

  // ==================== 分区指派 ====================
  // 指派总督到分区；一个分区同时只能有一名总督，一名总督同时只管一个分区
  assignSector(gid, sectorId) {
    const g = this.gov(gid);
    const s = this.sector(sectorId);
    if (!g || !s) return false;
    if (g.rebelled) { this._notify('⚠️ 叛变总督不能指派分区'); return false; }
    if (s.rebelledBy) { this._notify('⚠️ 该分区处于叛乱割据中，请先镇压'); return false; }
    // 腾出总督旧分区
    this._unassign(gid);
    // 若分区已有总督，把他撤下来（不解雇）
    if (s.governorId) {
      const prev = this.gov(s.governorId);
      if (prev) { prev.sectorId = null; prev.addLoyalty(-4); }
    }
    s.governorId = gid;
    g.sectorId = sectorId;
    g.addLoyalty(6);   // 被委以重任，小涨忠诚
    const sd = this.sectorDef(sectorId);
    this._log(g.pdef.icon + ' 「' + g.name + '」接管了' + sd.name, g.pdef.icon);
    this._notify(g.pdef.icon + ' 「' + g.name + '」已接管 ' + sd.icon + sd.name + '！');
    return true;
  }
  // 撤下总督（保留雇佣关系）
  _unassign(gid) {
    const g = this.gov(gid);
    if (!g || !g.sectorId) return;
    const s = this.sector(g.sectorId);
    if (s && s.governorId === gid) s.governorId = null;
    g.sectorId = null;
  }
  recall(gid) {
    const g = this.gov(gid);
    if (!g) return false;
    this._unassign(gid);
    g.addLoyalty(-3);
    this._notify('📥 「' + g.name + '」被召回待命（忠诚 -3）。');
    return true;
  }

  // ==================== 主 tick ====================
  // dt: 秒；由游戏主循环调用
  tick(dt) {
    if (!dt || dt <= 0) return;
    // ---- 发薪（每 60 秒） ----
    this._salaryTimer -= dt;
    if (this._salaryTimer <= 0) {
      this._salaryTimer += GOV_TUNE.salaryInterval;
      this._paySalaries();
    }
    // ---- 忠诚回归（每 30 秒） ----
    this._loyaltyTimer -= dt;
    if (this._loyaltyTimer <= 0) {
      this._loyaltyTimer += GOV_TUNE.loyaltyTick;
      this._loyaltyDrift();
    }
    // ---- 叛变判定（每 20 秒） ----
    this._rebelTimer -= dt;
    if (this._rebelTimer <= 0) {
      this._rebelTimer += GOV_TUNE.rebelCheckInterval;
      this._rebelCheck();
    }
    // ---- 事件判定 ----
    this._eventTimer -= dt;
    if (this._eventTimer <= 0) {
      this._eventTimer = _govRand(GOV_TUNE.eventIntervalMin, GOV_TUNE.eventIntervalMax);
      this._rollEvent();
    }
    // ---- 每个总督的行为 ----
    for (const g of this.governors) {
      if (g.rebelled) { this._rebelTick(g, dt); continue; }
      if (!g.canWork()) continue;
      // 建造
      g.buildCd -= dt;
      if (g.buildCd <= 0) {
        g.buildCd = g.buildInterval() * _govRand(0.85, 1.15);
        this._governorBuild(g);
      }
      // 升级
      g.upgradeCd -= dt;
      if (g.upgradeCd <= 0) {
        g.upgradeCd = g.upgradeInterval() * _govRand(0.85, 1.15);
        this._governorUpgrade(g);
      }
      // 加薪要求冷却
      g.raiseCd -= dt;
      if (g.raiseCd <= 0) {
        g.raiseCd = _govRand(240, 600) / g.fx('raiseFreqMul', 1);
        this._pushEvent(this._makeRaiseEvent(g));
      }
      // 灾难应对（每 tick 检查一次，用内部冷却防刷屏）
      this._disasterResponse(g, dt);
    }
    // 分区临时 buff 过期清理
    const now = Date.now();
    for (const s of this.sectors) {
      s.tempBuffs = s.tempBuffs.filter(b => b.until > now);
    }
  }

  // ==================== 发薪 ====================
  _paySalaries() {
    for (const g of this.governors) {
      if (g.rebelled) continue;
      const cost = g.salaryCost();
      g.salary = cost;   // 月薪随等级动态调整
      if (this._spend(cost)) {
        g.stats.salaryPaid++;
        g.stats.arrears = 0;
        g.addLoyalty(1.5);
      } else {
        // 欠薪：忠诚大跌
        g.stats.arrears++;
        const drop = 6 + g.stats.arrears * 3;
        g.addLoyalty(-drop);
        this._log('💸 发不出「' + g.name + '」的月薪！忠诚 -' + drop, '💸');
        this._notify('💸 国库空虚，拖欠「' + g.name + '」的月薪（忠诚 -' + drop + '）！');
        if (g.stats.arrears >= 3) {
          this._notify('⚠️ 「' + g.name + '」已被拖欠 3 次月薪，叛变风险极高！');
        }
      }
    }
  }

  // ==================== 忠诚自然回归 ====================
  _loyaltyDrift() {
    for (const g of this.governors) {
      if (g.rebelled) continue;
      const decayMul = g.fx('loyaltyDecayMul', 1);
      if (!g.sectorId) {
        // 闲置总督：缓慢掉忠诚（怀才不遇）
        g.addLoyalty(-GOV_TUNE.loyaltyDecayIdle * decayMul);
        continue;
      }
      // 向人格基准回归
      const base = g.pdef.loyaltyBase;
      const diff = base - g.loyalty;
      if (Math.abs(diff) > 1) {
        g.addLoyalty(Math.sign(diff) * Math.min(Math.abs(diff), 1.2) * decayMul);
      }
      // 罢工中的总督额外掉一点（怨气积累）
      if (g.striking) g.addLoyalty(-0.8 * decayMul);
    }
  }

  // ==================== 总督自动建造 ====================
  // 按人格权重选建筑 -> 在分区内随机选址 -> canBuild 校验 -> doBuild 执行
  _governorBuild(g) {
    if (!this.cb.canBuild || !this.cb.doBuild) return;
    const sd = this.sectorDef(g.sectorId);
    if (!sd) return;
    const buildingId = this._pickBuildingByPersonality(g);
    if (!buildingId) return;
    const tries = GOV_TUNE.siteTries + Math.round(g.fx('siteTriesBonus', 0));
    for (let i = 0; i < tries; i++) {
      const fx = _govRand(sd.fx0, sd.fx1);
      const fy = _govRand(sd.fy0, sd.fy1);
      let check = null;
      try { check = this.cb.canBuild(g.sectorId, buildingId, fx, fy); }
      catch (e) { return; }   // 回调异常：本轮放弃
      if (!check || !check.ok) continue;
      let done = false;
      try { done = !!this.cb.doBuild(g.sectorId, buildingId, fx, fy); }
      catch (e) { done = false; }
      if (done) {
        g.stats.built++;
        const leveled = g.addXp(GOV_TUNE.xpPerBuild);
        this._log(g.pdef.icon + ' 「' + g.name + '」在' + sd.name + '建成了' + this._bName(buildingId), g.pdef.icon);
        if (leveled) {
          this._notify('⬆️ 总督「' + g.name + '」升级到 Lv.' + g.level + '！建造更快了。');
        } else if (Math.random() < 0.25) {
          this._notify(g.pdef.icon + ' ' + g.pdef.quotes.build);
        }
        return;
      }
    }
    // 选址全部失败：小扣忠诚（巧妇难为无米之炊的怨气）
    if (Math.random() < 0.3) {
      g.addLoyalty(-1);
      if (Math.random() < 0.4) this._notify(g.pdef.icon + ' 「' + g.name + '」：' + g.pdef.quotes.complain);
    }
  }

  // 按人格权重轮盘赌选建筑；灾难将至时优先防御/应急建筑
  _pickBuildingByPersonality(g) {
    const w = Object.assign({}, g.pdef.buildWeights);
    const st = this._state();
    const incoming = st.disasterIncoming;
    if (incoming) {
      // 灾难应对策略影响选型
      const strat = g.pdef.disaster;
      const boost = { stockpile: 0, fortify: 0, research: 0, evac: 0, raid: 0 };
      if (strat === 'fortify') { boostAll(w, ['shield', 'shelter', 'missile_silo', 'dome', 'repair'], 4); }
      else if (strat === 'stockpile') { boostAll(w, ['solar', 'nuclear', 'warehouse', 'depot', 'greenhouse'], 4); }
      else if (strat === 'research') { boostAll(w, ['lab', 'weather', 'satellite'], 4); }
      else if (strat === 'evac') { boostAll(w, ['shelter', 'hospital', 'habitat', 'dome'], 4); }
      else if (strat === 'raid') { boostAll(w, ['missile_silo', 'arms_factory', 'radar', 'mercenary_camp', 'merc_camp'], 5); }
      function boostAll(map, ids, mul) {
        for (const id of ids) map[id] = (map[id] || 1) * mul;
      }
    }
    // 轮盘赌
    let total = 0;
    for (const k of Object.keys(w)) total += Math.max(0, w[k]);
    if (total <= 0) return null;
    let r = Math.random() * total;
    for (const k of Object.keys(w)) {
      r -= Math.max(0, w[k]);
      if (r <= 0) return k;
    }
    return Object.keys(w)[0];
  }

  // 建筑 id -> 中文名（UI 用；未知 id 回退原文）
  _bName(id) {
    const map = {
      habitat: '居住舱', solar: '太阳能板', miner: '采矿机', pump: '水泵', smelter: '冶炼厂',
      greenhouse: '温室', waterplant: '水处理厂', lab: '实验室', road: '道路', hospital: '医院',
      command: '指挥中心', launchpad: '发射台', nuclear: '核电站', school: '学校', trade: '贸易站',
      repair: '维修站', weather: '天气控制站', dome: '生态穹顶', depot: '物资站', warehouse: '仓库',
      logistics: '物流中心', uminer: '无人采矿车', he3rig: '氦3采集器', fusion: '聚变电站',
      spaceport: '太空港', elevator: '太空电梯', clone: '克隆中心', shield: '护盾发生器',
      satellite: '卫星', antenna: '通讯天线', nanofactory: '纳米工厂', ecocircle: '生态循环舱',
      ark: '方舟舰', mil_academy: '军事学院', arms_factory: '军工厂', radar: '雷达站',
      missile_silo: '导弹发射井', shelter: '避难所', war_memorial: '战争纪念碑',
      merc_camp: '佣兵营地', nuke_silo: '核导弹井',
    };
    return map[id] || id;
  }

  // ==================== 总督自动升级 ====================
  // 从 getState().buildings 里找分区内可升级的建筑，按人格偏好挑
  _governorUpgrade(g) {
    const st = this._state();
    const list = st.buildings || [];
    const sd = this.sectorDef(g.sectorId);
    if (!sd || !list.length) return;
    // 分区内建筑：用相对坐标判断
    const inSector = list.filter(b =>
      b.x >= sd.fx0 && b.x <= sd.fx1 && b.y >= sd.fy0 && b.y <= sd.fy1 &&
      (b.level || 1) < GOV_TUNE.upgradeMaxLevel
    );
    if (!inSector.length) return;
    // 人格升级偏好：权重高的建筑优先升级
    const w = g.pdef.buildWeights;
    inSector.sort((a, b) => (w[b.id] || 1) - (w[a.id] || 1));
    // 保守者偏好先升级低等级建筑（查漏补缺），扩张者偏好升级高权重建筑
    const target = g.personality === 'conservative'
      ? inSector.slice().sort((a, b) => (a.level || 1) - (b.level || 1))[0]
      : inSector[0];
    let done = false;
    try {
      if (this.cb.doUpgrade) done = !!this.cb.doUpgrade(target.ref != null ? target.ref : target);
      // 无 doUpgrade 回调时降级：尝试用 doBuild 在原地"重建"（由主游戏决定是否支持）
      else if (this.cb.doBuild) done = !!this.cb.doBuild(g.sectorId, target.id, target.x, target.y);
    } catch (e) { done = false; }
    if (done) {
      g.stats.upgraded++;
      const leveled = g.addXp(GOV_TUNE.xpPerUpgrade);
      this._log('⬆️ 「' + g.name + '」升级了' + this._bName(target.id) + '（Lv.' + ((target.level || 1) + 1) + '）', '⬆️');
      if (leveled) this._notify('⬆️ 总督「' + g.name + '」升级到 Lv.' + g.level + '！');
    }
  }

  // ==================== 灾难自动应对 ====================
  // 每 tick 检查 getState().disasterIncoming，按人格策略给分区挂临时 buff
  _disasterResponse(g, dt) {
    g._disCd = (g._disCd || 0) - dt;
    if (g._disCd > 0) return;
    const st = this._state();
    const incoming = st.disasterIncoming;
    if (!incoming) return;
    g._disCd = 45;   // 同一总督 45 秒内只应对一次
    const s = this.sector(g.sectorId);
    if (!s) return;
    const strat = g.pdef.disaster;
    const fxMul = g.fx('disasterFxMul', 1);
    const dur = 120;  // buff 持续 120 秒
    const lvlBonus = 1 + (g.level - 1) * 0.05;
    const push = (key, mul) => {
      s.tempBuffs.push({ key, mul: 1 - (1 - mul) * fxMul * lvlBonus, until: Date.now() + dur * 1000 });
    };
    const dName = this._disasterName(incoming);
    let msg = '';
    if (strat === 'fortify') {
      push('damageMul', 0.75); msg = '加固防御工事';
    } else if (strat === 'stockpile') {
      push('powerUseMul', 0.7); push('foodUseMul', 0.8); msg = '提前储能储粮、降低消耗';
    } else if (strat === 'research') {
      push('damageMul', 0.85); push('techBonus', 1.2); msg = '启动应急科研协议';
    } else if (strat === 'evac') {
      push('damageMul', 0.8); push('popLossMul', 0.6); msg = '组织分区疏散';
    } else if (strat === 'raid') {
      push('raidBonus', 1.5); push('damageMul', 0.9); msg = '整军备战，准备反击';
    }
    g.stats.disasters++;
    g.addXp(GOV_TUNE.xpPerDisaster);
    g.addLoyalty(2);   // 临危受命，被信任的感觉
    const sd = this.sectorDef(g.sectorId);
    this._log('🌪️ 「' + g.name + '」应对' + dName + '：' + msg + '（' + sd.name + '）', '🌪️');
    this._notify('🌪️ ' + g.pdef.icon + ' 「' + g.name + '」' + msg + '，' + sd.name + '已进入' + dName + '应急状态！');
  }
  _disasterName(id) {
    const map = {
      sandstorm: '沙尘暴', meteor: '陨石雨', solar_flare: '太阳耀斑', dust_devil: '尘卷风',
      ice_storm: '冰风暴', volcano: '火山喷发', revolt: '暴动', ai_fault: 'AI 故障',
      radiation: '辐射尘埃', marsquake: '火星地震',
    };
    return map[id] || id;
  }

  // ==================== 总督事件 ====================
  _pushEvent(ev) {
    if (!ev) return;
    // 同一总督同类型事件不堆积
    if (this.pendingEvents.some(e => e.govId === ev.govId && e.type === ev.type)) return;
    if (this.pendingEvents.length >= 5) return;   // 上限 5 个待处理
    this.pendingEvents.push(ev);
    const g = this.gov(ev.govId);
    this._notify('❗ 总督事件：' + (g ? '「' + g.name + '」' : '') + ev.title);
  }

  // ---- 事件1：要求加薪 ----
  _makeRaiseEvent(g) {
    const pct = Math.round(_govRand(15, 40));
    return {
      eid: _govUid('ev'), type: 'raise', govId: g.id,
      title: '要求加薪：月薪 +' + pct + '%',
      desc: '「' + g.name + '」认为自己的功绩值得更高的待遇。' +
            (g.stats.built > 10 ? '他搬出了自己建造的 ' + g.stats.built + ' 座建筑作为筹码。' : '他暗示，外面有开价更高的殖民地。'),
      icon: '💰', raisePct: pct,
      choices: [
        { id: 'accept', label: '同意加薪', hint: '忠诚 +12' },
        { id: 'reject', label: '拒绝', hint: '忠诚 -12，可能罢工' },
      ],
    };
  }
  // ---- 事件2：推荐政策 ----
  _makePolicyEvent(g) {
    const st = this._state();
    const activePolicies = st.activePolicies || [];
    const lean = (g.pdef.policyLean || []).filter(p => !activePolicies.includes(p));
    const policyId = lean.length ? _govPick(lean) : _govPick(g.pdef.policyLean || []);
    return {
      eid: _govUid('ev'), type: 'policy', govId: g.id,
      title: '政策建言：推荐颁布「' + this._policyName(policyId) + '」',
      desc: '「' + g.name + '」上书：以他的施政理念，' + this._policyName(policyId) + ' 最契合当前分区发展。' +
            '采纳将提升他的威望，驳回则让他觉得你不信任他。',
      icon: '📜', policyId,
      choices: [
        { id: 'accept', label: '采纳建言', hint: '忠诚 +8，总督获得施政 buff' },
        { id: 'reject', label: '驳回', hint: '忠诚 -6' },
      ],
    };
  }
  _policyName(pid) {
    // policy.js 的 POLICY_DEFS 在全局；防御性读取
    try {
      if (typeof POLICY_DEFS !== 'undefined' && POLICY_DEFS[pid]) return POLICY_DEFS[pid].name;
    } catch (e) { /* 忽略 */ }
    return pid || '未知政策';
  }
  // ---- 事件3：派系斗争 ----
  _makeFactionEvent(g1, g2) {
    return {
      eid: _govUid('ev'), type: 'faction', govId: g1.id, otherGovId: g2.id,
      title: '派系斗争：「' + g1.name + '」vs「' + g2.name + '」',
      desc: '「' + g1.name + '」（' + g1.pdef.name + '）与「' + g2.name + '」（' + g2.pdef.name +
            '）在总督会议上公开决裂，互相指责对方误国。你必须站队——胜者气焰大涨，败者怀恨在心。',
      icon: '⚡',
      choices: [
        { id: 'side_a', label: '支持「' + g1.name + '」', hint: g1.name + '忠诚+10、建造加速；' + g2.name + '忠诚-15' },
        { id: 'side_b', label: '支持「' + g2.name + '」', hint: g2.name + '忠诚+10、建造加速；' + g1.name + '忠诚-15' },
        { id: 'both_down', label: '各打五十大板', hint: '两人都忠诚 -8，但斗争平息' },
      ],
    };
  }
  // ---- 事件4：进献物资（忠诚高的总督主动上供） ----
  _makeTributeEvent(g) {
    const tribute = { iron: 20 + g.level * 10, food: 15 + g.level * 8 };
    return {
      eid: _govUid('ev'), type: 'tribute', govId: g.id,
      title: '进献物资：「' + g.name + '」上供',
      desc: '「' + g.name + '」从分区结余中挤出一批物资进献：铁矿 ' + tribute.iron + '、食物 ' + tribute.food + '。收下还是退回？',
      icon: '🎁', tribute,
      choices: [
        { id: 'accept', label: '笑纳', hint: '获得物资，忠诚 +4' },
        { id: 'reject', label: '退回（体恤）', hint: '忠诚 +10，无物资' },
      ],
    };
  }
  // ---- 事件5：暗中破坏（忠诚极低的总督搞小动作，未叛变前兆） ----
  _makeSabotageEvent(g) {
    return {
      eid: _govUid('ev'), type: 'sabotage', govId: g.id,
      title: '密报：「' + g.name + '」暗中串联',
      desc: '情报部门密报：「' + g.name + '」近来与分区卫队过从甚密，似有异动。' +
            '你可以安抚（花资源）、警告（可能激化），或装作不知。',
      icon: '🗡️',
      choices: [
        { id: 'soothe', label: '赏赐安抚（30 食物）', hint: '忠诚 +18' },
        { id: 'warn', label: '严厉警告', hint: '50% 忠诚 +5，50% 忠诚 -10' },
        { id: 'ignore', label: '按兵不动', hint: '无事发生，但叛变概率上升' },
      ],
    };
  }

  // 事件判定：按总督状态加权随机
  _rollEvent() {
    const pool = this.governors.filter(g => !g.rebelled);
    if (!pool.length) return;
    const r = Math.random();
    if (r < 0.30) {
      // 加薪：随机一名有分区的总督
      const gs = pool.filter(g => g.sectorId);
      if (gs.length) this._pushEvent(this._makeRaiseEvent(_govPick(gs)));
    } else if (r < 0.52) {
      const g = _govPick(pool);
      this._pushEvent(this._makePolicyEvent(g));
    } else if (r < 0.66) {
      // 派系斗争：找一对人格对立的总督
      const pair = this._findConflictPair();
      if (pair) this._pushEvent(this._makeFactionEvent(pair[0], pair[1]));
      else this._pushEvent(this._makeTributeEvent(_govPick(pool)));
    } else if (r < 0.82) {
      // 进献：忠诚 >= 70 的总督
      const loyal = pool.filter(g => g.loyalty >= 70 && g.sectorId);
      if (loyal.length) this._pushEvent(this._makeTributeEvent(_govPick(loyal)));
      else this._pushEvent(this._makePolicyEvent(_govPick(pool)));
    } else {
      // 密报：忠诚 < 35 的总督
      const shady = pool.filter(g => g.loyalty < 35 && g.sectorId);
      if (shady.length) this._pushEvent(this._makeSabotageEvent(_govPick(shady)));
    }
  }
  _findConflictPair() {
    for (const [a, b] of PERSONALITY_CONFLICTS) {
      const ga = this.governors.find(g => !g.rebelled && g.personality === a);
      const gb = this.governors.find(g => !g.rebelled && g.personality === b);
      if (ga && gb && ga.id !== gb.id) return Math.random() < 0.5 ? [ga, gb] : [gb, ga];
    }
    return null;
  }

  // 玩家抉择事件：返回结果描述字符串
  resolveEvent(eid, choiceId) {
    const idx = this.pendingEvents.findIndex(e => e.eid === eid);
    if (idx < 0) return '事件已过期';
    const ev = this.pendingEvents[idx];
    this.pendingEvents.splice(idx, 1);
    const g = this.gov(ev.govId);
    if (!g) return '总督已不在任';
    let result = '';
    if (ev.type === 'raise') {
      if (choiceId === 'accept') {
        const cur = g.salaryCost();
        g.salary = {
          food: Math.round(cur.food * (1 + ev.raisePct / 100)),
          energy: Math.round(cur.energy * (1 + ev.raisePct / 100)),
        };
        g.addLoyalty(12);
        result = '「' + g.name + '」心满意足（忠诚 +12），月薪提升 ' + ev.raisePct + '%。';
      } else {
        g.addLoyalty(-12);
        result = '「' + g.name + '」拂袖而去（忠诚 -12）。' +
                 (g.striking ? '他宣布罢工了！' : '他警告：下次不会这么好说话。');
      }
    } else if (ev.type === 'policy') {
      if (choiceId === 'accept') {
        let enacted = false;
        try { enacted = this.cb.enactPolicy ? !!this.cb.enactPolicy(ev.policyId) : false; }
        catch (e) { enacted = false; }
        g.addLoyalty(8);
        g.addBuff('buildCdMul', 0.9, 300);   // 圣眷正隆：5 分钟建造加速
        result = '采纳建言' + (enacted ? '，「' + this._policyName(ev.policyId) + '」已颁布' : '（政策系统未接入，仅记录）') +
                 '。「' + g.name + '」忠诚 +8，建造加速 5 分钟。';
      } else {
        g.addLoyalty(-6);
        result = '建言被驳回，「' + g.name + '」忠诚 -6，闷闷不乐。';
      }
    } else if (ev.type === 'faction') {
      const other = this.gov(ev.otherGovId);
      const dur = 600;  // buff/debuff 持续 10 分钟
      if (choiceId === 'side_a' || choiceId === 'side_b') {
        const winner = choiceId === 'side_a' ? g : other;
        const loser = choiceId === 'side_a' ? other : g;
        if (winner) { winner.addLoyalty(10); winner.addBuff('buildCdMul', 0.8, dur); }
        if (loser) { loser.addLoyalty(-15); loser.addDebuff('buildCdMul', 1.5, dur); }
        result = '你支持了「' + (winner ? winner.name : '?') + '」。胜者忠诚 +10、建造加速 10 分钟；' +
                 '「' + (loser ? loser.name : '?') + '」忠诚 -15、消极怠工 10 分钟。';
      } else {
        g.addLoyalty(-8);
        if (other) other.addLoyalty(-8);
        result = '各打五十大板：两人都忠诚 -8，但斗争暂时平息。';
      }
    } else if (ev.type === 'tribute') {
      if (choiceId === 'accept') {
        const st = this._state();
        const inv = st.inv || {};
        for (const k of Object.keys(ev.tribute)) inv[k] = (inv[k] || 0) + ev.tribute[k];
        g.addLoyalty(4);
        result = '笑纳物资：铁矿 +' + ev.tribute.iron + '、食物 +' + ev.tribute.food + '。「' + g.name + '」忠诚 +4。';
      } else {
        g.addLoyalty(10);
        result = '你退回了物资并嘉奖了「' + g.name + '」。他感激涕零，忠诚 +10。';
      }
    } else if (ev.type === 'sabotage') {
      if (choiceId === 'soothe') {
        if (this._spend({ food: 30 })) {
          g.addLoyalty(18);
          result = '重赏之下，「' + g.name + '」暂时安分了（忠诚 +18）。';
        } else {
          result = '食物不足，安抚失败！「' + g.name + '」忠诚 -5。';
          g.addLoyalty(-5);
        }
      } else if (choiceId === 'warn') {
        if (Math.random() < 0.5) { g.addLoyalty(5); result = '警告奏效，「' + g.name + '」收敛了（忠诚 +5）。'; }
        else { g.addLoyalty(-10); result = '警告激化了矛盾！「' + g.name + '」忠诚 -10。'; }
      } else {
        g._ignoreCount = (g._ignoreCount || 0) + 1;
        result = '你选择了按兵不动。密报存档，叛变风险暗中上升。';
      }
    }
    this._log('❗ 事件「' + ev.title + '」已裁决：' + result, ev.icon);
    this._notify('❗ ' + result);
    return result;
  }

  // ==================== 叛变机制 ====================
  _rebelCheck() {
    for (const g of this.governors) {
      if (g.rebelled || !g.sectorId) continue;
      if (g.loyalty >= 20) continue;
      // 忠诚越低越容易叛变；被无视的密报次数增加概率
      const despair = (20 - g.loyalty) / 20;   // 0~1
      let chance = GOV_TUNE.rebelBaseChance * (0.5 + despair);
      chance *= 1 + (g._ignoreCount || 0) * 0.5;
      if (g.personality === 'warmonger') chance *= 1.5;   // 战争贩子更易反
      if (g.personality === 'conservative') chance *= 0.7;
      if (Math.random() < chance) this._startRebellion(g);
    }
  }
  _startRebellion(g) {
    g.rebelled = true;
    g.striking = false;
    const s = this.sector(g.sectorId);
    if (s) { s.rebelledBy = g.id; }
    const sd = this.sectorDef(g.sectorId);
    this._log('🔥 「' + g.name + '」叛变！割据了' + (sd ? sd.name : '分区'), '🔥');
    this._notify('🔥 警报！总督「' + g.name + '」叛变，' + (sd ? sd.icon + sd.name : '其分区') + '宣布独立！' + g.pdef.quotes.rebel);
    this._notify('⚔️ 分区已失控：总督不再建造，该分区建筑停摆。请组织军事镇压！');
  }
  // 叛变总督每 tick：小概率搞破坏（纯机制：给玩家压力）
  _rebelTick(g, dt) {
    g._rebelActCd = (g._rebelActCd || 30) - dt;
    if (g._rebelActCd > 0) return;
    g._rebelActCd = _govRand(60, 120);
    // 叛军骚扰：随机给玩家一个 debuff 提示（实际效果由主游戏读取 isSectorRebelled 实现）
    if (Math.random() < 0.5) {
      const sd = this.sectorDef(g.sectorId);
      this._notify('🔥 叛军「' + g.name + '」在' + (sd ? sd.name : '分区') + '构筑工事，镇压难度在上升！');
    }
  }

  // 军事镇压：花费资源，成功后叛变总督被革职，分区收复
  // 返回 { ok, msg }
  suppressRebellion(sectorId) {
    const s = this.sector(sectorId);
    if (!s || !s.rebelledBy) return { ok: false, msg: '该分区并未叛乱' };
    const g = this.gov(s.rebelledBy);
    if (!this._spend(_govClone(GOV_TUNE.suppressCost))) {
      return { ok: false, msg: '⚠️ 镇压需要铁矿 ' + GOV_TUNE.suppressCost.iron + '、食物 ' + GOV_TUNE.suppressCost.food + '，资源不足' };
    }
    // 镇压成功率：固定 85%，战争贩子叛军更难打
    const hard = g && g.personality === 'warmonger';
    const winChance = hard ? 0.7 : 0.85;
    const sd = this.sectorDef(sectorId);
    if (Math.random() < winChance) {
      s.rebelledBy = null;
      s.governorId = null;
      if (g) {
        // 革职：从总督名单移除；其他总督忠诚 -8（杀鸡儆猴的寒意）
        this.governors = this.governors.filter(x => x.id !== g.id);
        for (const other of this.governors) other.addLoyalty(-8);
      }
      this._log('⚔️ 镇压成功！' + sd.name + '重回掌控，叛首「' + (g ? g.name : '?') + '」被革职', '⚔️');
      this._notify('⚔️ 镇压成功！' + sd.icon + sd.name + '已收复。其余总督忠诚 -8（兔死狐悲）。');
      return { ok: true, msg: '镇压成功，' + sd.name + '已收复' };
    }
    this._log('⚔️ 镇压' + sd.name + '失败，叛军负隅顽抗', '⚔️');
    this._notify('⚔️ 镇压失败！叛军「' + (g ? g.name : '?') + '」负隅顽抗，请整军再战。');
    return { ok: false, msg: '镇压失败，叛军仍在抵抗' };
  }

  // ==================== 分区 buff 查询（主游戏用） ====================
  // 返回某分区的生效 buff 乘区，供主游戏在结算时读取
  // key 如 'damageMul' / 'minerBonus' 等
  getSectorFx(sectorId, key) {
    const s = this.sector(sectorId);
    const sd = this.sectorDef(sectorId);
    let mul = 1, add = 0;
    if (sd && sd.buff && sd.buff[key] != null) add += sd.buff[key];  // 分区被动（加区）
    if (s) {
      const now = Date.now();
      for (const b of s.tempBuffs) {
        if (b.key === key && b.until > now) mul *= b.mul;
      }
    }
    return { mul, add };
  }

  // ==================== 存档 ====================
  save() {
    return {
      v: 1,
      nextGovId: this.nextGovId,
      governors: this.governors.map(g => g.toSave()),
      sectors: this.sectors.map(s => ({
        defId: s.defId, governorId: s.governorId, rebelledBy: s.rebelledBy,
        tempBuffs: _govClone(s.tempBuffs),
      })),
      candidates: _govClone(this.candidates),
      pendingEvents: _govClone(this.pendingEvents),
      log: _govClone(this.log.slice(0, 30)),
    };
  }
  load(data) {
    if (!data) return false;
    try {
      this.nextGovId = data.nextGovId || 1;
      this.governors = (data.governors || []).map(d => Governor.fromSave(d));
      // 分区：按 defId 匹配恢复
      for (const sd of (data.sectors || [])) {
        const s = this.sector(sd.defId);
        if (s) {
          s.governorId = sd.governorId || null;
          s.rebelledBy = sd.rebelledBy || null;
          s.tempBuffs = sd.tempBuffs || [];
        }
      }
      this.candidates = data.candidates || [];
      this.pendingEvents = data.pendingEvents || [];
      this.log = data.log || [];
      this._refreshCandidates();
      return true;
    } catch (e) {
      return false;
    }
  }

  // ==================== UI：总督面板 ====================
  // 返回深色主题 HTML 字符串；交互通过 window.__govMgr.action(...) 挂接
  // action 参数：{act:'hire'|'fire'|'assign'|'recall'|'event'|'suppress'|'refreshUI', ...}
  renderGovernorPanel() {
    if (typeof window !== 'undefined') window.__govMgr = this;  // 浏览器内挂接 UI 动作入口
    const css = this._panelCss();
    const html = [];
    html.push('<div class="gov-panel">');
    html.push(this._renderHeader());
    html.push(this._renderEvents());
    html.push(this._renderSectors());
    html.push(this._renderGovernors());
    html.push(this._renderCandidates());
    html.push(this._renderLog());
    html.push('</div>');
    return '<style>' + css + '</style>' + html.join('\n');
  }

  // UI 动作分发（onclick 调用）
  action(act, a, b) {
    let needRerender = true;
    if (act === 'hire') this.hire(a);
    else if (act === 'fire') { if (confirm('确定解雇「' + (this.gov(a) || {}).name + '」吗？将支付遣散费。')) this.fire(a); else needRerender = false; }
    else if (act === 'assign') this.assignSector(a, b);
    else if (act === 'recall') this.recall(a);
    else if (act === 'event') this.resolveEvent(a, b);
    else if (act === 'suppress') { const r = this.suppressRebellion(a); this._notify(r.msg); }
    else if (act === 'dismissEvent') { this.pendingEvents = this.pendingEvents.filter(e => e.eid !== a); }
    else needRerender = false;
    if (needRerender) this._rerenderPanel();
  }
  // 重新渲染面板（查找页面上的 .gov-panel 容器）
  _rerenderPanel() {
    try {
      const el = document.querySelector('.gov-panel');
      if (el) {
        const tmp = document.createElement('div');
        tmp.innerHTML = this.renderGovernorPanel();
        el.replaceWith(tmp.firstChild);
      }
    } catch (e) { /* 非浏览器环境忽略 */ }
  }

  // ---------- 面板样式（深色主题） ----------
  _panelCss() {
    return [
      '.gov-panel{background:#0d1117;color:#e6edf3;font-family:system-ui,"PingFang SC","Microsoft YaHei",sans-serif;',
      ' padding:16px;border-radius:12px;max-width:960px;margin:0 auto;line-height:1.5;}',
      '.gov-panel h2{margin:0 0 4px;font-size:20px;}',
      '.gov-panel .gov-sub{color:#8b949e;font-size:12px;margin-bottom:12px;}',
      '.gov-sec{margin:14px 0;padding:12px;background:#161b22;border:1px solid #30363d;border-radius:10px;}',
      '.gov-sec h3{margin:0 0 8px;font-size:15px;color:#f0f6fc;}',
      '.gov-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:10px;}',
      '.gov-card{background:#0d1117;border:1px solid #30363d;border-radius:10px;padding:10px;}',
      '.gov-card.rebel{border-color:#e63946;box-shadow:0 0 8px rgba(230,57,70,.4);}',
      '.gov-card.strike{border-color:#d29922;}',
      '.gov-card h4{margin:0 0 6px;font-size:14px;}',
      '.gov-tag{display:inline-block;font-size:11px;padding:1px 8px;border-radius:20px;margin-right:4px;}',
      '.gov-bar{height:8px;background:#21262d;border-radius:4px;overflow:hidden;margin:4px 0;}',
      '.gov-bar>i{display:block;height:100%;border-radius:4px;}',
      '.gov-row{display:flex;justify-content:space-between;font-size:12px;color:#8b949e;margin:2px 0;}',
      '.gov-row b{color:#e6edf3;}',
      '.gov-btn{background:#238636;border:none;color:#fff;padding:5px 12px;border-radius:6px;cursor:pointer;font-size:12px;margin:2px 4px 2px 0;}',
      '.gov-btn:hover{background:#2ea043;}',
      '.gov-btn.danger{background:#a40e26;} .gov-btn.danger:hover{background:#c11f36;}',
      '.gov-btn.ghost{background:#21262d;border:1px solid #30363d;} .gov-btn.ghost:hover{background:#30363d;}',
      '.gov-btn.warn{background:#9e6a03;} .gov-btn.warn:hover{background:#bb8009;}',
      '.gov-btn:disabled{opacity:.45;cursor:not-allowed;}',
      '.gov-quote{font-size:12px;color:#8b949e;font-style:italic;margin:6px 0;padding-left:8px;border-left:2px solid #30363d;}',
      '.gov-event{background:#1c2128;border-left:3px solid #d29922;padding:8px 10px;border-radius:0 8px 8px 0;margin:6px 0;}',
      '.gov-event.urgent{border-left-color:#e63946;}',
      '.gov-event h4{margin:0 0 4px;font-size:13px;}',
      '.gov-event p{margin:4px 0;font-size:12px;color:#8b949e;}',
      '.gov-log{font-size:12px;color:#8b949e;max-height:150px;overflow-y:auto;}',
      '.gov-log div{padding:2px 0;border-bottom:1px dashed #21262d;}',
      '.gov-loyal-high{color:#3fb950;} .gov-loyal-mid{color:#d29922;} .gov-loyal-low{color:#e63946;}',
      '.gov-sectors{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;}',
      '.gov-sector{background:#0d1117;border:1px solid #30363d;border-radius:8px;padding:8px;text-align:center;font-size:12px;}',
      '.gov-sector.rebelled{border-color:#e63946;}',
      '.gov-sector select{background:#21262d;color:#e6edf3;border:1px solid #30363d;border-radius:6px;font-size:12px;max-width:100%;margin-top:4px;}',
    ].join('\n');
  }

  _loyaltyClass(v) {
    if (v >= 60) return 'gov-loyal-high';
    if (v >= 35) return 'gov-loyal-mid';
    return 'gov-loyal-low';
  }
  _loyaltyLabel(v) {
    if (v >= 80) return '忠心耿耿';
    if (v >= 60) return '尽心尽力';
    if (v >= 35) return '心存不满';
    if (v >= 20) return '离心离德';
    return '叛变在即';
  }

  _renderHeader() {
    const n = this.governors.length;
    const rebel = this.governors.filter(g => g.rebelled).length;
    const strike = this.governors.filter(g => g.striking && !g.rebelled).length;
    return '<h2>🤖 AI 总督府</h2>' +
      '<div class="gov-sub">在任 ' + n + '/' + GOV_TUNE.maxGovernors +
      (rebel ? '　<span class="gov-loyal-low">🔥 叛乱 ' + rebel + '</span>' : '') +
      (strike ? '　<span class="gov-loyal-mid">✊ 罢工 ' + strike + '</span>' : '') +
      '　| 每 60 秒发放一次月薪，拖欠会掉忠诚</div>';
  }

  // 待处理事件
  _renderEvents() {
    if (!this.pendingEvents.length) return '';
    const items = this.pendingEvents.map(ev => {
      const g = this.gov(ev.govId);
      const urgent = ev.type === 'sabotage' ? ' urgent' : '';
      const btns = ev.choices.map(c =>
        '<button class="gov-btn' + (ev.type === 'sabotage' && c.id === 'soothe' ? ' warn' : '') + '"' +
        ' onclick="window.__govMgr.action(\'event\',\'' + ev.eid + '\',\'' + c.id + '\')"' +
        ' title="' + _govEsc(c.hint || '') + '">' + _govEsc(c.label) + '</button>'
      ).join('');
      return '<div class="gov-event' + urgent + '"><h4>' + ev.icon + ' ' + _govEsc(ev.title) + '</h4>' +
        '<p>' + _govEsc(ev.desc) + '</p>' +
        '<div>' + btns +
        '<button class="gov-btn ghost" onclick="window.__govMgr.action(\'dismissEvent\',\'' + ev.eid + '\')">稍后</button></div></div>';
    }).join('');
    return '<div class="gov-sec"><h3>❗ 待裁决事件（' + this.pendingEvents.length + '）</h3>' + items + '</div>';
  }

  // 分区总览 + 指派
  _renderSectors() {
    const idleGovs = this.governors.filter(g => !g.rebelled && !g.sectorId);
    const cards = this.sectors.map(s => {
      const sd = this.sectorDef(s.defId);
      const g = s.governorId ? this.gov(s.governorId) : null;
      const rebelled = !!s.rebelledBy;
      const rg = rebelled ? this.gov(s.rebelledBy) : null;
      const buffDesc = Object.keys(sd.buff || {}).map(k => k + ' +' + Math.round(sd.buff[k] * 100) + '%').join('、');
      let body;
      if (rebelled) {
        body = '<div class="gov-loyal-low">🔥 叛军割据（' + _govEsc(rg ? rg.name : '?') + '）</div>' +
          '<button class="gov-btn danger" onclick="window.__govMgr.action(\'suppress\',\'' + s.defId + '\')" ' +
          'title="花费铁矿 ' + GOV_TUNE.suppressCost.iron + '、食物 ' + GOV_TUNE.suppressCost.food + '">⚔️ 军事镇压</button>';
      } else if (g) {
        body = '<div>' + g.pdef.icon + ' <b>' + _govEsc(g.name) + '</b></div>' +
          '<div class="gov-row"><span>忠诚</span><b class="' + this._loyaltyClass(g.loyalty) + '">' +
          Math.round(g.loyalty) + ' · ' + this._loyaltyLabel(g.loyalty) + '</b></div>' +
          '<button class="gov-btn ghost" onclick="window.__govMgr.action(\'recall\',\'' + g.id + '\')">召回</button>';
      } else {
        const opts = idleGovs.map(x =>
          '<option value="' + x.id + '">' + _govEsc(x.name) + '（' + x.pdef.name + '）</option>').join('');
        body = '<div style="color:#8b949e">空置</div>' +
          (idleGovs.length
            ? '<select id="assign_' + s.defId + '">' + opts + '</select><br>' +
              '<button class="gov-btn" style="margin-top:4px" onclick="window.__govMgr.action(\'assign\',document.getElementById(\'assign_' + s.defId + '\').value,\'' + s.defId + '\')">指派</button>'
            : '<div style="color:#8b949e;font-size:11px">无待命总督</div>');
      }
      return '<div class="gov-sector' + (rebelled ? ' rebelled' : '') + '" style="border-top:3px solid ' + sd.color + '">' +
        '<div style="font-size:20px">' + sd.icon + '</div><b>' + sd.name + '</b>' +
        '<div style="color:#8b949e;font-size:11px" title="' + _govEsc(sd.desc) + '">被动：' + _govEsc(buffDesc) + '</div>' +
        '<div style="margin-top:6px">' + body + '</div></div>';
    }).join('');
    return '<div class="gov-sec"><h3>🗺️ 分区指派（' + MAX_SECTORS + ' 区）</h3><div class="gov-sectors">' + cards + '</div></div>';
  }

  // 总督卡片
  _renderGovernors() {
    if (!this.governors.length) {
      return '<div class="gov-sec"><h3>👥 在任总督</h3><div class="gov-sub">暂无总督，去下面雇佣一位吧。</div></div>';
    }
    const cards = this.governors.map(g => {
      const sd = g.sectorId ? this.sectorDef(g.sectorId) : null;
      const cls = g.rebelled ? ' rebel' : (g.striking ? ' strike' : '');
      const status = g.rebelled ? '<span class="gov-loyal-low">🔥 已叛变</span>'
        : g.striking ? '<span class="gov-loyal-mid">✊ 罢工中</span>'
        : !g.sectorId ? '<span style="color:#8b949e">💤 待命</span>'
        : '<span class="gov-loyal-high">✅ 履职中</span>';
      const xpNeed = g.level * GOV_TUNE.xpPerLevel;
      const xpPct = Math.min(100, Math.round(g.xp / xpNeed * 100));
      const buffs = [...g.buffs.map(b => '✨' + b.key), ...g.debuffs.map(d => '💀' + d.key)].join(' ');
      // 台词：按状态选一句
      const q = g.rebelled ? g.pdef.quotes.rebel
        : g.striking ? g.pdef.quotes.complain
        : !g.sectorId ? g.pdef.quotes.idle
        : g.loyalty < 35 ? g.pdef.quotes.complain
        : g.pdef.quotes.praise;
      const quote = q.replace('{n}', String(Math.floor((Date.now() - g.hiredAt) / 86400000)));
      return '<div class="gov-card' + cls + '">' +
        '<h4><span class="gov-tag" style="background:' + g.pdef.color + '22;color:' + g.pdef.color + ';border:1px solid ' + g.pdef.color + '">' +
        g.pdef.icon + g.pdef.name + '</span> ' + _govEsc(g.name) +
        ' <span class="gov-tag" style="background:#21262d;color:#8b949e">Lv.' + g.level + '</span> ' + status + '</h4>' +
        '<div class="gov-row"><span>特长</span><b>' + g.sdef.icon + _govEsc(g.sdef.name) + '</b></div>' +
        '<div class="gov-row"><span>分区</span><b>' + (sd ? sd.icon + sd.name : '—') + '</b></div>' +
        '<div class="gov-row"><span>忠诚度</span><b class="' + this._loyaltyClass(g.loyalty) + '">' +
        Math.round(g.loyalty) + ' · ' + this._loyaltyLabel(g.loyalty) + '</b></div>' +
        '<div class="gov-bar"><i style="width:' + Math.round(g.loyalty) + '%;background:' +
        (g.loyalty >= 60 ? '#3fb950' : g.loyalty >= 35 ? '#d29922' : '#e63946') + '"></i></div>' +
        '<div class="gov-row"><span>经验</span><b>' + g.xp + '/' + xpNeed + '（' + xpPct + '%）</b></div>' +
        '<div class="gov-row"><span>月薪</span><b>🍖' + g.salary.food + ' ⚡' + g.salary.energy + ' /60s</b></div>' +
        '<div class="gov-row"><span>战绩</span><b>🏗️' + g.stats.built + ' ⬆️' + g.stats.upgraded + ' 🌪️' + g.stats.disasters + '</b></div>' +
        (buffs ? '<div class="gov-row"><span>状态</span><b>' + _govEsc(buffs) + '</b></div>' : '') +
        '<div class="gov-quote">' + _govEsc(quote) + '</div>' +
        '<div><span class="gov-tag" style="background:#21262d;color:#8b949e" title="' + _govEsc(g.sdef.desc) + '">' +
        g.sdef.icon + _govEsc(g.sdef.name) + '</span> ' +
        '<span class="gov-tag" style="background:#21262d;color:#8b949e" title="' + _govEsc(g.pdef.desc) + '">人格说明</span></div>' +
        '<div style="margin-top:6px">' +
        (g.rebelled
          ? '<button class="gov-btn danger" onclick="window.__govMgr.action(\'suppress\',\'' + g.sectorId + '\')">⚔️ 镇压其分区</button>'
          : '<button class="gov-btn danger" onclick="window.__govMgr.action(\'fire\',\'' + g.id + '\')">解雇</button>') +
        '</div></div>';
    }).join('');
    return '<div class="gov-sec"><h3>👥 在任总督（' + this.governors.length + '/' + GOV_TUNE.maxGovernors + '）</h3>' +
      '<div class="gov-grid">' + cards + '</div></div>';
  }

  // 雇佣列表
  _renderCandidates() {
    const cards = this.candidates.map(c => {
      const p = PERSONALITY_DEFS[c.personality];
      const sp = SPECIALTY_DEFS[c.specialty];
      const full = this.governors.length >= GOV_TUNE.maxGovernors;
      return '<div class="gov-card"><h4>' + p.icon + ' ' + _govEsc(c.name) +
        ' <span class="gov-tag" style="background:' + p.color + '22;color:' + p.color + ';border:1px solid ' + p.color + '">' + p.name + '</span></h4>' +
        '<div class="gov-row"><span>特长</span><b>' + sp.icon + _govEsc(sp.name) + '</b></div>' +
        '<div class="gov-row"><span>雇佣费</span><b>🔬 ' + c.hireCost + ' 科技点</b></div>' +
        '<div class="gov-row"><span>薪水倍率</span><b>×' + c.salaryMul + '</b></div>' +
        '<div class="gov-quote">' + _govEsc(p.quotes.hire) + '</div>' +
        '<div class="gov-sub" title="' + _govEsc(p.desc) + '">' + _govEsc(p.desc.slice(0, 26)) + '…</div>' +
        '<button class="gov-btn" ' + (full ? 'disabled' : '') +
        ' onclick="window.__govMgr.action(\'hire\',\'' + c.cid + '\')">' +
        (full ? '席位已满' : '💼 雇佣（' + c.hireCost + '🔬）') + '</button></div>';
    }).join('');
    return '<div class="gov-sec"><h3>📋 总督候选人</h3><div class="gov-grid">' + cards + '</div></div>';
  }

  // 日志
  _renderLog() {
    const items = this.log.slice(0, 20).map(l =>
      '<div>' + (l.icon || '') + ' ' + _govEsc(l.msg) + '</div>').join('');
    return '<div class="gov-sec"><h3>📜 总督府邸报</h3><div class="gov-log">' +
      (items || '<div>暂无动态。</div>') + '</div></div>';
  }
}

// ============================== 导出 ==============================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GovernorManager, Governor,
    SECTOR_DEFS, MAX_SECTORS, PERSONALITY_DEFS, PERSONALITY_IDS,
    PERSONALITY_CONFLICTS, SPECIALTY_DEFS, SPECIALTY_IDS, GOV_TUNE,
    GOVERNOR_NAMES, GOV_EVENT_TYPES,
  };
}
if (typeof window !== 'undefined') {
  window.GovernorManager = GovernorManager;
  window.Governor = Governor;
  window.SECTOR_DEFS = SECTOR_DEFS;
  window.PERSONALITY_DEFS = PERSONALITY_DEFS;
  window.SPECIALTY_DEFS = SPECIALTY_DEFS;
  window.GOV_TUNE = GOV_TUNE;
}
