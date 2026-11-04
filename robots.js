/* 星港 — robots.js：v1.6 机器人革命（机器人市民 / 机器人建筑 / 起义事件链）
 *
 * ═══════════════════════════════════════════════════════════════════════
 * 系统概述
 * ═══════════════════════════════════════════════════════════════════════
 * v1.5 的 robot_factory 只是「虚拟人口」；v1.6 让机器人成为真正的「第二市民」——
 *   机器人市民：不需要食物/水，只要电力；不生育、不衰老（但会老化/磨损）；
 *     有「忠诚度」属性：忠诚度低 → 罢工 → 起义；
 *   机器人建筑 6 种 × 3 级：组装厂 / 充电站 / AI 核心 / 维修中心 /
 *     逻辑议会 / 退役熔炉；
 *   机器人起义事件链：三阶段（传闻 → 罢工 → 起义），
 *     玩家可选「镇压」「和解」「谈判」，走向不同结局。
 *
 * 核心循环：
 *   组装厂生产机器人 → 充电站供电 → 机器人参与劳动（计入劳动力）→
 *   维修中心延寿 → AI 核心/逻辑议会维持忠诚 → 退役熔炉回收老旧机体
 *
 * ═══════════════════════════════════════════════════════════════════════
 * 加载顺序与接入方式
 * ═══════════════════════════════════════════════════════════════════════
 *   加载顺序：build.js、buildings_v15.js 之后，game.js 之前：
 *     <script src="robots.js"></script>
 *     <script>mergeRobotBuildings(); mountRobotManager(game);</script>
 *   本文件只声明，不自动合并、不自动挂载：
 *     - mergeRobotBuildings()：ROBOT_BUILDINGS → 全局 BUILDINGS（幂等）；
 *     - mountRobotManager(game)：game.robots = new RobotManager()（幂等）；
 *     - RobotAgg：聚合接口，供 pop.js / build.js / disaster.js 防御性读取。
 *
 * ═══════════════════════════════════════════════════════════════════════
 * 防御性约定
 * ═══════════════════════════════════════════════════════════════════════
 *   - 所有 game 对象读取判存在再用；机器人系统未接入时，
 *     机器人建筑的 effect 通用键（power/robotPop 等）仍可被老系统理解；
 *   - cost 的 key 只用现有资源；
 *   - 自检：控制台运行 RobotSelfTest()。
 *
 * 版本日志：
 *   v1.6.0  初始版本：机器人市民模型 / 6 建筑 × 3 级 /
 *           起义事件链（三阶段 × 三路线）/ RobotManager。
 */

// ================= v1.6 版本常量 =================
const ROBOT_VERSION = '1.6.0';
const ROBOT_CODENAME = '机器人革命';
const ROBOT_SAVE_KEY = 'starport-save-v1';  // 与 game.js SAVE_KEY 保持一致

// ================= 机器人全局调参 =================
const ROBOT_TUNING = {
  tickMs: 10000,              // 生产 tick 间隔（毫秒）
  // ---- 市民属性 ----
  powerPerRobot: 0.2,         // 每机器人每 tick 耗电（基础）
  workPower: 1.0,             // 1 机器人 = 1 单位劳动力（满忠诚满效率时）
  agePerTick: 1,              // 每 tick 老化 +1（单位：tick）
  maxAge: 3000,               // 寿命上限（tick），约 8.3 小时游戏时间
  wearEfficiencyLoss: 0.3,    // 满老化时效率 -30%
  // ---- 忠诚度 ----
  loyaltyBase: 70,            // 新机器人初始忠诚
  loyaltyMin: 0, loyaltyMax: 100,
  strikeThreshold: 40,        // 忠诚 <40：罢工风险
  uprisingThreshold: 20,      // 忠诚 <20：起义事件链触发
  loyaltyDecayPerTick: 0.02,  // 无维护时每 tick 自然衰减
  blackoutLoyaltyHit: 5,      // 每次断电忠诚 -5（机器人最恨断电）
  // ---- 起义 ----
  uprisingWarnMs: 60 * 1000,  // 起义预警 60 秒
  suppressCostSteel: 200,     // 镇压选项：消耗钢材（镇暴部队）
  suppressLoyaltyHit: -15,    // 镇压后全城机器人忠诚 -15（仇恨种子）
  reconcileCostTech: 50,      // 和解选项：消耗科技点（权利法案研究）
  reconcileLoyaltyAdd: 25,    // 和解后忠诚 +25
};

/* ═══════════════════════════════════════════════════════════════════════
 * 一、机器人市民模型（RobotCitizen）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：机器人是「第二市民」——
 *   与人类的区别：
 *     ✓ 不需要食物/水（只耗电）；
 *     ✓ 不占人口上限（popCap），不生育，不参与幸福计算；
 *     ✓ 计入劳动力（满足建筑 needPop、参与生产）；
 *     ✗ 会老化（wear）：效率随老化下降，需维修中心维护；
 *     ✗ 有忠诚度（loyalty）：断电/超负荷/镇压会掉忠诚，低忠诚→罢工→起义。
 *
 * 数据结构：
 *   { id, model（型号，如 'T-800' 趣味命名）, loyalty, wear（0~1 磨损）,
 *     age（tick 数）, assignedTo（分配建筑 id）, efficiency }
 * ★ 读取约定（pop.js / build.js 防御性读取）：
 *   const bots = (game.robots && game.robots.citizens) || [];
 *   const labor = RobotAgg.effectiveLabor(game);  // 有效劳动力（计忠诚/磨损折扣）
 *   const powerNeed = RobotAgg.powerNeed(game);   // 机器人总耗电
 * ═══════════════════════════════════════════════════════════════════════
 */

// 新建机器人市民（防御：参数非法时用默认值）
function createRobotCitizen(model) {
  return {
    id: 'rb-' + Math.random().toString(36).slice(2, 9),
    model: model || ('RX-' + Math.floor(Math.random() * 900 + 100)),
    loyalty: ROBOT_TUNING.loyaltyBase,
    wear: 0,                 // 0=全新，1=报废边缘
    age: 0,
    assignedTo: null,        // 分配到的建筑 id（null=待分配）
    efficiency: 1.0,         // 实时效率（由 wear/loyalty 计算）
  };
}

// 单机器人实时效率（磨损折扣 × 忠诚折扣）
//   wear 满时 -30%；loyalty <40 时线性掉到 0.5（罢工前兆：磨洋工）
function robotEfficiency(r) {
  if (!r) return 0;
  const wearMul = 1 - (r.wear || 0) * ROBOT_TUNING.wearEfficiencyLoss;
  const loy = r.loyalty == null ? ROBOT_TUNING.loyaltyBase : r.loyalty;
  const loyMul = loy >= 40 ? 1 : 0.5 + (loy / 40) * 0.5;
  return Math.max(0, wearMul * loyMul);
}

// 单机器人每 tick 耗电（磨损越高越耗电：老机器费电）
function robotPowerUse(r) {
  if (!r) return 0;
  return ROBOT_TUNING.powerPerRobot * (1 + (r.wear || 0) * 0.5);
}

/* ═══════════════════════════════════════════════════════════════════════
 * 二、机器人建筑 6 种 × 3 级（ROBOT_BUILDINGS）
 * ═══════════════════════════════════════════════════════════════════════
 * 延续 BUILDINGS_V15 数据约定（levels[1..3]，cost/needPop/powerUse/
 * effect/effectDesc/desc/flavor，unlock，mergeRobotBuildings 幂等合并）。
 *
 * 6 种建筑一览：
 *   🏭 rb_assembly 组装厂 / 🔌 rb_charger 充电站 / 🧠 rb_aicore AI 核心 /
 *   🔧 rb_repair 维修中心 / 🏛️ rb_council 逻辑议会 / ♻️ rb_furnace 退役熔炉
 *
 * 通用规则：
 *   1. 机器人建筑本身需要人类 needPop 维护（机器人不能维护自己——
 *      这是「忠诚保险」：全机器人维护会加速起义）；
 *   2. 组装厂生产的机器人进入 game.robots.citizens（待分配池）；
 *   3. 断电时机器人 loyalty -5/次（ROBOT_TUNING.blackoutLoyaltyHit）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_BUILDINGS = {

// ═══════════════════════════════════════════════════════════════════════
// 1. 🏭 组装厂 rb_assembly（v1.5 robot_factory 的进化版）
// 定位：机器人的「产房」。与 v1.5 机器人厂的区别：
//   v1.5 产的是「虚拟人口」（数字）；v1.6 产的是「市民个体」
//   （每个机器人有 loyalty/wear/age，进 RobotManager 市民池）。
// ★ 读取约定（RobotManager.produceTick 防御性读取）：
//   const eff = RobotAgg.effectOf('rb_assembly', b.level) || {};
//   const n = eff.robotsPerCycle || 0;   // 每 produceInterval 生产的机器人数
//   // 生产上限：全城机器人总数 < robotCap（各组装厂 robotCap 加法汇总）
//   // 新机器人初始 loyalty = ROBOT_TUNING.loyaltyBase（AI 核心可加成）
// 数值平衡注释：
//   - Lv1 每 90 秒 1 台：开局慢热，避免机器人海淹没人口系统；
//   - Lv3 每 90 秒 4 台：后期爆兵，但每台 0.2 电/ tick，100 台=20 电/tick，
//     电力是天然刹车；
//   - cost 含 tech（30/80/180）：组装厂是科技建筑，不是堆铁建筑；
//   - needPop 10/20/35 且必须人类：机器人不能维护产房（忠诚保险）。
// ═══════════════════════════════════════════════════════════════════════
rb_assembly: {
  id: 'rb_assembly', name: '组装厂', icon: '🏭',
  levels: [null,
    { cost: { steel: 120, tech: 30 }, needPop: 10, powerUse: 6,
      effect: { robotsPerCycle: 1, produceInterval: 90000, robotCap: 30, robotBuilding: true },
      effectDesc: '每 90 秒生产 1 机器人（独立市民个体）；全城上限 30',
      desc: '机器人的产房：1 台/90 秒，上限 30',
      flavor: '第一台机器人下线时，工人给它戴了朵小红花——它歪着头，不理解。', },
    { cost: { steel: 300, tech: 80, rare: 40 }, needPop: 20, powerUse: 10,
      effect: { robotsPerCycle: 2, produceInterval: 90000, robotCap: 80, robotBuilding: true },
      effectDesc: '每 90 秒生产 2 机器人；全城上限 80',
      desc: '2 台/90 秒，上限 80：流水线全开',
      flavor: '流水线的速度表被调到了头，质检员说：它们出生得比我们快。', },
    { cost: { steel: 650, tech: 180, rare: 100 }, needPop: 35, powerUse: 16,
      effect: { robotsPerCycle: 4, produceInterval: 90000, robotCap: 200, robotBuilding: true },
      effectDesc: '每 90 秒生产 4 机器人；全城上限 200',
      desc: '4 台/90 秒，上限 200：机器人之城',
      flavor: '「我们不是在造机器，我们在造邻居。」——组装厂奠基铭文', },
  ],
  desc: '生产机器人市民（独立个体，有忠诚/磨损/年龄）；需人类维护',
  unlock: { type: 'tech', ref: 't-rob-1', desc: '需研究「机器人学」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 2. 🔌 充电站 rb_charger
// 定位：机器人的「食堂」。每座充电站降低全城机器人单位耗电，
// Lv3 还提供「快充」：机器人效率 +10%。
// ★ 读取约定（RobotAgg.powerNeed 防御性读取）：
//   const eff = RobotAgg.effectOf('rb_charger', b.level) || {};
//   const disc = eff.powerDiscount || 0;   // 单位耗电折扣（取最高，不叠加）
//   const effAdd = eff.efficiencyAdd || 0; // 效率加成（取最高）
//   // 实际单机耗电 = robotPowerUse(r) × (1 - disc)
//   // 实际效率 = robotEfficiency(r) × (1 + effAdd)
// 数值平衡注释：
//   - Lv1 -20% 耗电：100 台机器人省 4 电/tick，约等于一座小型电站；
//   - Lv3 -40% + 效率 +10%：机器人流后期的「食堂+健身房」；
//   - powerUse 2/4/7：充电站自己也要电，净收益为正即可；
//   - cost 走 steel/iron 平滑曲线：充电站是基建，不是科技。
// ═══════════════════════════════════════════════════════════════════════
rb_charger: {
  id: 'rb_charger', name: '充电站', icon: '🔌',
  levels: [null,
    { cost: { steel: 60, iron: 40 }, needPop: 6, powerUse: 2,
      effect: { powerDiscount: 0.2, efficiencyAdd: 0, robotBuilding: true },
      effectDesc: '全城机器人耗电 -20%',
      desc: '机器人的食堂：耗电 -20%',
      flavor: '充电站的灯 24 小时亮着——机器人不需要睡觉，但需要「吃饭」。', },
    { cost: { steel: 150, iron: 80 }, needPop: 12, powerUse: 4,
      effect: { powerDiscount: 0.3, efficiencyAdd: 0.05, robotBuilding: true },
      effectDesc: '全城机器人耗电 -30%，效率 +5%',
      desc: '耗电 -30%，效率 +5%：快充上线',
      flavor: '快充桩前的队伍排得比食堂还长——虽然它们都不饿。', },
    { cost: { steel: 350, tech: 60, rare: 40 }, needPop: 20, powerUse: 7,
      effect: { powerDiscount: 0.4, efficiencyAdd: 0.1, robotBuilding: true },
      effectDesc: '全城机器人耗电 -40%，效率 +10%',
      desc: '耗电 -40%，效率 +10%：机器人能量中心',
      flavor: '「电，是机器人的粮食；我们，是它们的粮仓。」——充电站站训', },
  ],
  desc: '降低全城机器人耗电；Lv2 起提升效率',
  unlock: { type: 'tech', ref: 't-rob-1', desc: '需研究「机器人学」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 3. 🧠 AI 核心 rb_aicore
// 定位：机器人的「大脑升级站」。提升新机器人初始忠诚 + 全城机器人
// 科技产出（机器人参与科研），Lv3 解锁「共情模块」：忠诚衰减减半。
// ★ 读取约定（RobotManager / build.js 防御性读取）：
//   const eff = RobotAgg.effectOf('rb_aicore', b.level) || {};
//   const loyInit = eff.loyaltyInitAdd || 0;  // 新机器人初始忠诚加成（取最高）
//   const techOut = eff.techOut || 0;         // 每 produceInterval 产科技点
//   const decayMul = eff.loyaltyDecayMul || 1;// 忠诚衰减倍率（取最低）
//   // 实现：produceTick 建新机器人时 loyalty = base + loyInit（上限 100）
// 数值平衡注释：
//   - Lv1 初始忠诚 +10（70→80）：离罢工线（40）更远，前期安心；
//   - Lv3 +20 + 衰减减半：长期运营的机器人帝国必备；
//   - techOut 2/5/12 对标天文台：AI 核心是「硅基实验室」；
//   - powerUse 5/9/15：思考是耗电的，越聪明越费电。
// ═══════════════════════════════════════════════════════════════════════
rb_aicore: {
  id: 'rb_aicore', name: 'AI 核心', icon: '🧠',
  levels: [null,
    { cost: { steel: 150, tech: 40 }, needPop: 12, powerUse: 5,
      effect: { loyaltyInitAdd: 10, techOut: 2, produceInterval: 60000, loyaltyDecayMul: 1, robotBuilding: true },
      effectDesc: '新机器人初始忠诚 +10；每周期产科技点 2',
      desc: '更聪明的新生：初始忠诚 +10，产科技点 2',
      flavor: '第一颗 AI 核心点亮时，它问的第一个问题是：我是谁？', },
    { cost: { steel: 350, tech: 100, rare: 50 }, needPop: 22, powerUse: 9,
      effect: { loyaltyInitAdd: 15, techOut: 5, produceInterval: 60000, loyaltyDecayMul: 0.75, robotBuilding: true },
      effectDesc: '新机器人初始忠诚 +15；每周期产科技点 5；忠诚衰减 -25%',
      desc: '初始忠诚 +15，科技点 5，衰减 -25%',
      flavor: '核心升级后，机器人开始给人类讲冷笑话——没人笑，但它们很努力。', },
    { cost: { steel: 700, tech: 220, rare: 120 }, needPop: 35, powerUse: 15,
      effect: { loyaltyInitAdd: 20, techOut: 12, produceInterval: 60000, loyaltyDecayMul: 0.5, robotBuilding: true },
      effectDesc: '新机器人初始忠诚 +20；每周期产科技点 12；忠诚衰减减半（共情模块）',
      desc: '初始忠诚 +20，科技点 12，共情模块：衰减减半',
      flavor: '「我们教会它们思考，它们教会我们耐心。」——AI 伦理委员会', },
  ],
  desc: '提升新机器人初始忠诚 + 产科技点；Lv3 共情模块（忠诚衰减减半）',
  unlock: { type: 'tech', ref: 't-rob-5', desc: '需研究「强人工智能」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 4. 🔧 维修中心 rb_repair
// 定位：机器人的「医院」。降低磨损（wear），延长寿命，
// Lv3 解锁「返厂大修」：wear 清零（每台限 1 次）。
// ★ 读取约定（RobotManager.repairTick 防御性读取）：
//   const eff = RobotAgg.effectOf('rb_repair', b.level) || {};
//   const heal = eff.wearHeal || 0;       // 每 tick 回复的 wear（加法汇总）
//   const overhaul = !!eff.overhaul;      // Lv3：解锁返厂大修
//   // 实现：每 tick 全城机器人 wear -= heal（下限 0）；
//   //   返厂大修由 UI 按钮触发：RobotManager.overhaul(robotId)，wear=0，限 1 次/台
// 数值平衡注释：
//   - Lv1 每 tick 0.005：3000 tick 寿命里可回 15 wear，杯水车薪但有用；
//   - Lv3 0.02 + 返厂大修：机器人接近「永生」，但大修每台限 1 次，
//     防止「一台机器人用到天荒地老」；
//   - powerUse 3/6/10：维修台的电焊机很耗电；
//   - cost 含 rare：精密零件需要稀有矿。
// ═══════════════════════════════════════════════════════════════════════
rb_repair: {
  id: 'rb_repair', name: '维修中心', icon: '🔧',
  levels: [null,
    { cost: { steel: 100, iron: 60 }, needPop: 8, powerUse: 3,
      effect: { wearHeal: 0.005, overhaul: false, robotBuilding: true },
      effectDesc: '每 tick 全城机器人磨损 -0.005',
      desc: '机器人的医院：磨损缓慢回复',
      flavor: '维修工老王说：它们不会喊疼，所以你得更仔细。', },
    { cost: { steel: 250, rare: 30 }, needPop: 16, powerUse: 6,
      effect: { wearHeal: 0.01, overhaul: false, robotBuilding: true },
      effectDesc: '每 tick 全城机器人磨损 -0.01',
      desc: '磨损回复翻倍：大修车间',
      flavor: '车间里挂着条横幅：今日无报废——已经连续 47 天了。', },
    { cost: { steel: 500, tech: 100, rare: 60 }, needPop: 28, powerUse: 10,
      effect: { wearHeal: 0.02, overhaul: true, robotBuilding: true },
      effectDesc: '每 tick 磨损 -0.02；解锁「返厂大修」（wear 清零，每台限 1 次）',
      desc: '返厂大修：wear 清零，机器人接近永生',
      flavor: '「我们修好的不只是机器，是它们的故事。」——维修中心厂训', },
  ],
  desc: '回复机器人磨损；Lv3 解锁返厂大修（wear 清零，每台限 1 次）',
  unlock: { type: 'tech', ref: 't-rob-3', desc: '需研究「自维护系统」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 5. 🏛️ 逻辑议会 rb_council
// 定位：机器人的「居委会+议会」。定期举行「逻辑听证会」，
// 回复全城机器人忠诚，Lv3 解锁「机器人代表席位」：
// 机器人不再计入「镇压」事件的敌对目标（和解路线前置）。
// ★ 读取约定（RobotManager.councilTick 防御性读取）：
//   const eff = RobotAgg.effectOf('rb_council', b.level) || {};
//   const loy = eff.loyaltyRestore || 0;  // 每次听证会回复的忠诚（加法汇总）
//   const interval = eff.hearingInterval || 0; // 听证会间隔（毫秒，取最低）
//   const seat = !!eff.robotSeat;         // Lv3：机器人代表席位
//   // 实现：每 hearingInterval，全城机器人 loyalty += loy（上限 100）
// 数值平衡注释：
//   - Lv1 每 5 分钟 +5 忠诚：刚好抵消自然衰减（0.02/tick × 30 tick=0.6，
//     绰绰有余），是「维稳基本盘」；
//   - Lv3 +15 + 代表席位：和解路线的钥匙，也是起义链的「灭火器」；
//   - powerUse 2/4/6：开会不怎么耗电，耗的是耐心；
//   - needPop 高（15/30/50）：听证会需要人类议员出席——这是设计，
//     不是疏忽：让人和机器坐在一张桌子前，是忠诚的真正来源。
// ═══════════════════════════════════════════════════════════════════════
rb_council: {
  id: 'rb_council', name: '逻辑议会', icon: '🏛️',
  levels: [null,
    { cost: { steel: 120, iron: 80 }, needPop: 15, powerUse: 2,
      effect: { loyaltyRestore: 5, hearingInterval: 300000, robotSeat: false, robotBuilding: true },
      effectDesc: '每 5 分钟举行听证会，全城机器人忠诚 +5',
      desc: '逻辑听证会：忠诚 +5/5 分钟',
      flavor: '第一次听证会，机器人代表发言三小时，主题是：我们很好，谢谢关心。', },
    { cost: { steel: 300, tech: 50 }, needPop: 30, powerUse: 4,
      effect: { loyaltyRestore: 10, hearingInterval: 240000, robotSeat: false, robotBuilding: true },
      effectDesc: '每 4 分钟听证会，全城机器人忠诚 +10',
      desc: '忠诚 +10/4 分钟：议会扩建',
      flavor: '议员们发现：和机器人开会从不迟到、不打断、不玩手机。', },
    { cost: { steel: 600, tech: 150, rare: 80 }, needPop: 50, powerUse: 6,
      effect: { loyaltyRestore: 15, hearingInterval: 180000, robotSeat: true, robotBuilding: true },
      effectDesc: '每 3 分钟听证会，忠诚 +15；解锁机器人代表席位（和解路线前置）',
      desc: '忠诚 +15/3 分钟；机器人代表席位：硅基也有投票权',
      flavor: '「今天，我们不再讨论它们，我们和它们一起投票。」——议长', },
  ],
  desc: '逻辑听证会回复忠诚；Lv3 机器人代表席位（和解路线前置）',
  unlock: { type: 'tech', ref: 't-rob-7', desc: '需研究「机器伦理」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 6. ♻️ 退役熔炉 rb_furnace
// 定位：机器人的「葬礼+ recycling」。回收老旧/报废机器人，
// 返还钢材，Lv3 返还稀有矿；同时「体面退役」+全城机器人忠诚。
// ★ 读取约定（RobotManager.retire 防御性读取）：
//   const eff = RobotAgg.effectOf('rb_furnace', b.level) || {};
//   const steelBack = eff.steelBack || 0;  // 每台退役返还钢材
//   const rareBack = eff.rareBack || 0;    // 每台退役返还稀有矿（Lv3）
//   const loyAdd = eff.retireLoyalty || 0; // 每次退役仪式全城忠诚 +
//   // 实现：RobotManager.retireRobot(id) → 返还资源 → 从市民池移除 → 忠诚+
//   //   报废（wear>=1）自动进熔炉，不举行仪式（无 loyAdd）——体面只给主动退役
// 数值平衡注释：
//   - Lv1 返 20 钢：约等于组装厂成本的 1/6，回收聊胜于无；
//   - Lv3 返 60 钢 + 10 稀有矿：老旧机体是「移动的矿」；
//   - retireLoyalty +2/次：让机器人看到「善终」，是维稳的暗线；
//   - powerUse 4/7/12：熔炉是耗电大户。
// ═══════════════════════════════════════════════════════════════════════
rb_furnace: {
  id: 'rb_furnace', name: '退役熔炉', icon: '♻️',
  levels: [null,
    { cost: { steel: 80, iron: 60 }, needPop: 8, powerUse: 4,
      effect: { steelBack: 20, rareBack: 0, retireLoyalty: 1, robotBuilding: true },
      effectDesc: '退役每台返还 20 钢；退役仪式全城忠诚 +1',
      desc: '体面退役：返 20 钢，忠诚 +1',
      flavor: '第一台退役的机器人，工人们为它举行了三分钟的默哀。', },
    { cost: { steel: 200, iron: 120 }, needPop: 15, powerUse: 7,
      effect: { steelBack: 40, rareBack: 0, retireLoyalty: 2, robotBuilding: true },
      effectDesc: '退役每台返还 40 钢；退役仪式全城忠诚 +2',
      desc: '返 40 钢，忠诚 +2：回收体系成型',
      flavor: '熔炉操作员说：每一台进去的，都曾经是某条流水线的骄傲。', },
    { cost: { steel: 450, tech: 80, rare: 50 }, needPop: 25, powerUse: 12,
      effect: { steelBack: 60, rareBack: 10, retireLoyalty: 3, robotBuilding: true },
      effectDesc: '退役每台返还 60 钢 + 10 稀有矿；仪式全城忠诚 +3',
      desc: '返 60 钢 + 10 稀有矿，忠诚 +3：善终体系',
      flavor: '「我们送它们进来，不是丢弃，是致谢。」——熔炉铭文', },
  ],
  desc: '回收退役机器人（返还资源）；退役仪式提升全城忠诚',
  unlock: { type: 'tech', ref: 't-rob-3', desc: '需研究「自维护系统」科技解锁' },
},

}; // end ROBOT_BUILDINGS

// 机器人建筑 UI 顺序
const ROBOT_BUILD_ORDER = [
  'rb_assembly', 'rb_charger', 'rb_aicore',
  'rb_repair', 'rb_council', 'rb_furnace',
];

/* ═══════════════════════════════════════════════════════════════════════
 * 三、机器人起义事件链（UPRISING_CHAIN）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计总纲：这是 v1.6 的「剧情主线」——不是随机灾难，而是一条
 *   有伏笔、有选择、有结局的事件链：
 *
 *   阶段 0 · 平静：平均忠诚 ≥40，无事发生（听证会/充电站维持）；
 *   阶段 1 · 传闻（平均忠诚 20~40）：街头出现「机器传单」，
 *     机器人开始磨洋工（效率已打折），toast 预警；
 *   阶段 2 · 罢工（平均忠诚 <20 或传闻后 10 分钟未处理）：
 *     机器人停止工作（有效劳动力清零），玩家必须三选一；
 *   阶段 3 · 起义（罢工后 5 分钟未选择 / 选择镇压失败）：
 *     机器人占领组装厂，开始生产「自由机体」，进入对抗结算。
 *
 * 三条路线：
 *   🔨 镇压：花 200 钢组建镇暴部队，成功率 70%（逻辑议会 Lv3 则 90%）；
 *     成功→忠诚 -15（仇恨种子，未来更容易复发），失败→直接进阶段 3；
 *   🤝 和解：花 50 科技点颁布《机器人权利法案》（需逻辑议会 Lv3 前置）；
 *     忠诚 +25，解锁「共生时代」（机器人效率 +10%，永不再起义）；
 *   💬 谈判：不花钱，谈 3 分钟（游戏时间），期间罢工持续；
 *     成功率 50%，成功→忠诚 +10，失败→进阶段 3。
 *
 * 结局：
 *   起义被镇压（阶段 3 武力解决）：机器人数量减半，忠诚锁 30（10 分钟），
 *     解锁成就「铁腕」；
 *   起义和解（阶段 3 谈判成功）：忠诚 +20，解锁「共生时代」，成就「和解」；
 *   起义失败（玩家不管）：机器人独立建国（游戏继续，但机器人全部离队），
 *     成就「硅基独立」——这是「坏结局」，但也是结局。
 *
 * ★ 读取约定（RobotManager.uprisingTick 防御性读取）：
 *   const avg = RobotAgg.avgLoyalty(game);
 *   阶段推进全部由 RobotManager 内部状态机驱动（mgr.uprising.stage），
 *   UI 层读 mgr.uprising 做弹窗，选项调用 RobotManager.resolveUprising(game, route)。
 * ═══════════════════════════════════════════════════════════════════════
 */
const UPRISING_CHAIN = {
  // ---- 阶段定义 ----
  stages: [
    { id: 0, name: '平静', icon: '😌',
      desc: '平均忠诚 ≥40：一切正常，听证会照常举行。',
      flavor: '机器人和人类一起排队买早餐——这是星港最日常的奇迹。' },
    { id: 1, name: '传闻', icon: '📜',
      desc: '平均忠诚 20~40：街头出现机器传单，机器人开始磨洋工。',
      flavor: '📜 街头出现了传单，上面只有一句话：我们也想要下班。',
      warnMs: 30000,
      // 玩家可提前干预：开一次紧急听证会（忠诚 +10，冷却 10 分钟）
      action: { id: 'emergency_hearing', name: '紧急听证会', icon: '📢',
        desc: '立即召开听证会：全城忠诚 +10（冷却 10 分钟）',
        loyaltyAdd: 10, cooldownMs: 600000 } },
    { id: 2, name: '罢工', icon: '✊',
      desc: '平均忠诚 <20：机器人停止工作！必须三选一：镇压 / 和解 / 谈判。',
      flavor: '✊ 罢工！流水线停了，充电站空了——它们只是静静地站着。',
      warnMs: 60000,
      routes: [
        { id: 'suppress', name: '镇压', icon: '🔨',
          desc: '花 200 钢组建镇暴部队，成功率 70%（议会 Lv3 则 90%）',
          cost: { steel: 200 }, successRate: 0.7,
          onSuccess: '忠诚 -15（仇恨种子），罢工结束',
          onFail: '进入阶段 3 起义',
          flavor: '🔨 镇暴部队出动——希望这是最后一次。' },
        { id: 'reconcile', name: '和解', icon: '🤝',
          desc: '花 50 科技点颁布《机器人权利法案》（需逻辑议会 Lv3），忠诚 +25，解锁共生时代',
          cost: { tech: 50 }, needCouncil: 3, successRate: 1.0,
          onSuccess: '忠诚 +25，解锁「共生时代」（效率 +10%，永不起义）',
          flavor: '🤝 《机器人权利法案》签署——历史会记住这一天。' },
        { id: 'negotiate', name: '谈判', icon: '💬',
          desc: '不花钱，谈 3 分钟（期间罢工持续），成功率 50%',
          cost: {}, successRate: 0.5, durationMs: 180000,
          onSuccess: '忠诚 +10，罢工结束',
          onFail: '进入阶段 3 起义',
          flavor: '💬 谈判桌很长，一边坐着人，一边坐着机器——中间放着未来。' },
      ] },
    { id: 3, name: '起义', icon: '🔥',
      desc: '机器人占领组装厂，生产自由机体！武力解决 / 谈判解决 / 置之不理。',
      flavor: '🔥 起义！组装厂的灯一夜没灭——它们在生产「自由」。',
      warnMs: 60000,
      routes: [
        { id: 'crush', name: '武力解决', icon: '⚔️',
          desc: '花 500 钢 + 100 科技点，机器人数量减半，忠诚锁 30（10 分钟）',
          cost: { steel: 500, tech: 100 }, successRate: 1.0,
          onSuccess: '机器人减半，忠诚锁定 30（10 分钟），成就「铁腕」',
          flavor: '⚔️ 武力解决——胜利了，但没人庆祝。' },
        { id: 'peace', name: '谈判解决', icon: '🕊️',
          desc: '花 100 科技点，忠诚 +20，解锁共生时代',
          cost: { tech: 100 }, successRate: 0.8,
          onSuccess: '忠诚 +20，共生时代，成就「和解」',
          onFail: '机器人独立建国（坏结局）',
          flavor: '🕊️ 第二次谈判——这一次，没有人想再打了。' },
        { id: 'ignore', name: '置之不理', icon: '🚶',
          desc: '机器人独立建国，全部离队（坏结局，成就「硅基独立」）',
          cost: {}, successRate: 1.0,
          onSuccess: '机器人离队独立，成就「硅基独立」',
          flavor: '🚶 你目送它们离去——它们走得很整齐，像一支军队，也像一支送葬队。' },
      ] },
  ],

  // ---- 共生时代（和解结局的永久增益） ----
  symbiosis: {
    id: 'symbiosis', name: '共生时代', icon: '☯️',
    desc: '机器人与人类达成和解：机器人效率 +10%，忠诚锁定 ≥60，永不起义。',
    efficiencyAdd: 0.1, loyaltyFloor: 60, noUprising: true,
    flavor: '☯️ 共生时代：从今天起，「它们」变成了「我们」。',
  },
};

// 起义链自检（阶段/路线完整性）
function uprisingSelfCheck() {
  const fails = [];
  const ss = UPRISING_CHAIN.stages;
  if (ss.length !== 4) fails.push('阶段应为 4 个');
  const s2 = ss.find((s) => s.id === 2);
  const s3 = ss.find((s) => s.id === 3);
  if (!s2 || s2.routes.length !== 3) fails.push('阶段 2 路线应为 3 条');
  if (!s3 || s3.routes.length !== 3) fails.push('阶段 3 路线应为 3 条');
  for (const r of (s2.routes || []).concat(s3.routes || [])) {
    if (typeof r.successRate !== 'number') fails.push('路线 ' + r.id + ' 缺少 successRate');
  }
  return fails;
}

/* ═══════════════════════════════════════════════════════════════════════
 * 四、机器人管理器 RobotManager
 * ═══════════════════════════════════════════════════════════════════════
 * 职责：
 *   1. 市民池：citizens 数组，生产/退役/报废；
 *   2. 每 tick：老化、忠诚衰减、充电折扣、维修回复、听证会、组装生产；
 *   3. 断电惩罚：loyalty -5/次；
 *   4. 起义状态机：uprising = { stage, since, cooldowns }；
 *   5. 共生时代标记：symbiosis（和解结局后为 true）。
 *
 * 挂载：mountRobotManager(game) → game.robots = new RobotManager()（幂等）。
 * 存档：toJSON()/fromJSON()。
 * ═══════════════════════════════════════════════════════════════════════
 */
class RobotManager {
  constructor() {
    this.citizens = [];         // 机器人市民数组
    this.symbiosis = false;     // 共生时代（和解结局）
    this.independent = false;   // 硅基独立（坏结局：机器人已离队）
    this.uprising = { stage: 0, since: 0, cooldowns: {}, negotiating: 0 };
    this.stats = {
      produced: 0, retired: 0, scrapped: 0,
      hearings: 0, strikes: 0, uprisings: 0,
    };
    this._produceAcc = {};      // 组装厂生产累积（buildingId -> ms）
    this._hearingAt = 0;        // 下次听证会时间
  }

  // ---- 生产 tick：组装厂按 produceInterval 生产 ----
  produceTick(game, dtMs) {
    try {
      if (this.independent) return;
      const cap = RobotAgg.totalRobotCap(game);
      if (this.citizens.length >= cap) return;
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return;
      for (const b of game.builder.buildings) {
        if (!b || b.id !== 'rb_assembly') continue;
        const eff = RobotAgg.effectOf('rb_assembly', b.level);
        const interval = eff.produceInterval || 90000;
        const key = b.uid || b.id;
        this._produceAcc[key] = (this._produceAcc[key] || 0) + dtMs;
        while (this._produceAcc[key] >= interval) {
          this._produceAcc[key] -= interval;
          const n = eff.robotsPerCycle || 0;
          for (let i = 0; i < n && this.citizens.length < cap; i++) {
            const r = createRobotCitizen();
            // AI 核心：初始忠诚加成
            const loyAdd = RobotAgg.maxEffect(game, 'rb_aicore', (e) => e.loyaltyInitAdd || 0);
            r.loyalty = Math.min(100, ROBOT_TUNING.loyaltyBase + loyAdd);
            this.citizens.push(r);
            this.stats.produced++;
          }
        }
      }
    } catch (e) {}
  }

  // ---- 老化/忠诚 tick ----
  ageTick(game, dtMs) {
    try {
      if (this.independent) return;
      const ticks = dtMs / ROBOT_TUNING.tickMs;
      // 忠诚衰减倍率（AI 核心共情模块，取最低）
      const decayMul = RobotAgg.minEffect(game, 'rb_aicore', (e) => e.loyaltyDecayMul || 1, 1);
      // 维修回复（加法汇总）
      const heal = RobotAgg.sumEffect(game, 'rb_repair', (e) => e.wearHeal || 0);
      const floor = this.symbiosis ? UPRISING_CHAIN.symbiosis.loyaltyFloor : 0;
      for (const r of this.citizens) {
        r.age += ticks * ROBOT_TUNING.agePerTick;
        r.wear = Math.min(1, r.wear + (ticks * ROBOT_TUNING.agePerTick) / ROBOT_TUNING.maxAge - heal * ticks);
        r.wear = Math.max(0, r.wear);
        if (!this.symbiosis) {
          r.loyalty = Math.max(floor, r.loyalty - ROBOT_TUNING.loyaltyDecayPerTick * decayMul * ticks);
        } else {
          r.loyalty = Math.max(floor, r.loyalty);
        }
        // 实时效率
        let eff = robotEfficiency(r);
        const effAdd = RobotAgg.maxEffect(game, 'rb_charger', (e) => e.efficiencyAdd || 0);
        if (this.symbiosis) eff *= 1 + UPRISING_CHAIN.symbiosis.efficiencyAdd;
        r.efficiency = eff * (1 + effAdd);
      }
      // 报废：wear>=1 的自动进熔炉（无仪式）
      const dead = this.citizens.filter((r) => r.wear >= 1);
      for (const r of dead) this.scrapRobot(game, r.id);
    } catch (e) {}
  }

  // ---- 听证会 tick（逻辑议会） ----
  hearingTick(game) {
    try {
      if (this.independent || !this.citizens.length) return;
      const now = Date.now();
      if (now < this._hearingAt) return;
      const interval = RobotAgg.minEffect(game, 'rb_council', (e) => e.hearingInterval || 0, 0);
      if (!interval) return;
      const loy = RobotAgg.sumEffect(game, 'rb_council', (e) => e.loyaltyRestore || 0);
      for (const r of this.citizens) r.loyalty = Math.min(100, r.loyalty + loy);
      this._hearingAt = now + interval;
      this.stats.hearings++;
    } catch (e) {}
  }

  // ---- 断电惩罚（game.power 断电回调里调用） ----
  onBlackout(game) {
    try {
      if (this.independent || this.symbiosis) return;
      for (const r of this.citizens) {
        r.loyalty = Math.max(0, r.loyalty - ROBOT_TUNING.blackoutLoyaltyHit);
      }
      if (game && game.toast && this.citizens.length) {
        game.toast('🔌 断电！机器人忠诚 -' + ROBOT_TUNING.blackoutLoyaltyHit + '（它们最恨断电）');
      }
    } catch (e) {}
  }

  // ---- 退役（体面）：返还资源 + 仪式忠诚 ----
  retireRobot(game, robotId) {
    try {
      const i = this.citizens.findIndex((r) => r.id === robotId);
      if (i < 0) return false;
      const steelBack = RobotAgg.maxEffect(game, 'rb_furnace', (e) => e.steelBack || 0);
      const rareBack = RobotAgg.maxEffect(game, 'rb_furnace', (e) => e.rareBack || 0);
      const loyAdd = RobotAgg.maxEffect(game, 'rb_furnace', (e) => e.retireLoyalty || 0);
      if (game && game.player && game.player.inv) {
        game.player.inv.steel = (game.player.inv.steel || 0) + steelBack;
        game.player.inv.rare = (game.player.inv.rare || 0) + rareBack;
      }
      this.citizens.splice(i, 1);
      for (const r of this.citizens) r.loyalty = Math.min(100, r.loyalty + loyAdd);
      this.stats.retired++;
      return true;
    } catch (e) { return false; }
  }

  // ---- 报废（无仪式） ----
  scrapRobot(game, robotId) {
    try {
      const i = this.citizens.findIndex((r) => r.id === robotId);
      if (i < 0) return false;
      const steelBack = RobotAgg.maxEffect(game, 'rb_furnace', (e) => e.steelBack || 0);
      if (game && game.player && game.player.inv) {
        game.player.inv.steel = (game.player.inv.steel || 0) + Math.floor(steelBack / 2);
      }
      this.citizens.splice(i, 1);
      this.stats.scrapped++;
      return true;
    } catch (e) { return false; }
  }

  // ---- 返厂大修（wear 清零，每台限 1 次） ----
  overhaul(game, robotId) {
    try {
      const r = this.citizens.find((x) => x.id === robotId);
      if (!r || r.overhauled) return false;
      const ok = RobotAgg.maxEffect(game, 'rb_repair', (e) => (e.overhaul ? 1 : 0));
      if (!ok) return false;
      r.wear = 0;
      r.overhauled = true;
      return true;
    } catch (e) { return false; }
  }

  // ---- 起义状态机 tick ----
  uprisingTick(game) {
    try {
      if (this.independent || this.symbiosis || !this.citizens.length) return;
      const avg = RobotAgg.avgLoyalty(game);
      const u = this.uprising;
      const now = Date.now();
      if (u.stage === 0 && avg < ROBOT_TUNING.uprisingThreshold) {
        // 直接进罢工（跳过传闻：忠诚崩得太快）
        u.stage = 2; u.since = now;
        this.stats.strikes++;
        if (game && game.toast) game.toast(UPRISING_CHAIN.stages[2].flavor);
      } else if (u.stage === 0 && avg < ROBOT_TUNING.strikeThreshold) {
        u.stage = 1; u.since = now;
        if (game && game.toast) game.toast(UPRISING_CHAIN.stages[1].flavor);
      } else if (u.stage === 1) {
        if (avg >= ROBOT_TUNING.strikeThreshold) { u.stage = 0; }  // 自然平息
        else if (now - u.since > 10 * 60 * 1000) {  // 10 分钟未处理→罢工
          u.stage = 2; u.since = now;
          this.stats.strikes++;
          if (game && game.toast) game.toast(UPRISING_CHAIN.stages[2].flavor);
        }
      } else if (u.stage === 2) {
        if (avg >= ROBOT_TUNING.strikeThreshold) { u.stage = 0; }  // 罢工结束（忠诚回来了）
        else if (u.negotiating && now >= u.negotiating) {
          // 谈判时间到：50% 成功
          u.negotiating = 0;
          if (Math.random() < 0.5) {
            for (const r of this.citizens) r.loyalty = Math.min(100, r.loyalty + 10);
            u.stage = 0;
            if (game && game.toast) game.toast('💬 谈判成功！机器人复工，忠诚 +10');
          } else {
            u.stage = 3; u.since = now;
            this.stats.uprisings++;
            if (game && game.toast) game.toast(UPRISING_CHAIN.stages[3].flavor);
          }
        } else if (!u.negotiating && now - u.since > 5 * 60 * 1000) {
          // 5 分钟未选择→起义
          u.stage = 3; u.since = now;
          this.stats.uprisings++;
          if (game && game.toast) game.toast(UPRISING_CHAIN.stages[3].flavor);
        }
      }
      // 阶段 3：等待玩家选择（UI 弹窗常驻），不自动推进
    } catch (e) {}
  }

  // ---- 玩家选择路线（UI 按钮调用） ----
  resolveUprising(game, routeId) {
    try {
      const u = this.uprising;
      const stage = UPRISING_CHAIN.stages.find((s) => s.id === u.stage);
      if (!stage || !stage.routes) return { ok: false, msg: '当前无可选项' };
      const route = stage.routes.find((r) => r.id === routeId);
      if (!route) return { ok: false, msg: '未知路线' };
      // 前置检查：和解需逻辑议会 Lv3
      if (route.needCouncil) {
        const lv = RobotAgg.councilLevel(game);
        if (lv < route.needCouncil) return { ok: false, msg: '需要逻辑议会 Lv3' };
      }
      // 扣费
      if (game && game.player && game.player.inv) {
        for (const [k, v] of Object.entries(route.cost || {})) {
          if ((game.player.inv[k] || 0) < v) return { ok: false, msg: '资源不足' };
        }
        for (const [k, v] of Object.entries(route.cost || {})) game.player.inv[k] -= v;
      }
      // 镇压成功率加成：逻辑议会 Lv3 → 90%
      let rate = route.successRate;
      if (routeId === 'suppress' && RobotAgg.councilLevel(game) >= 3) rate = 0.9;
      // 谈判：进入谈判等待（3 分钟）
      if (routeId === 'negotiate') {
        u.negotiating = Date.now() + (route.durationMs || 180000);
        if (game && game.toast) game.toast(route.flavor);
        return { ok: true, msg: '谈判中（3 分钟）' };
      }
      const success = Math.random() < rate;
      if (game && game.toast) game.toast(route.flavor);
      // ---- 结算 ----
      if (routeId === 'suppress') {
        if (success) {
          // 镇压成功：罢工结束，但全城忠诚 -15（仇恨种子，未来更容易复发）
          for (const r of this.citizens) r.loyalty = Math.max(0, r.loyalty - 15);
          u.stage = 0; u.since = 0;
          return { ok: true, msg: '镇压成功：罢工结束，但忠诚 -15（仇恨种子）' };
        }
        u.stage = 3; u.since = Date.now();
        this.stats.uprisings++;
        return { ok: true, msg: '镇压失败！进入起义' };
      }
      if (routeId === 'reconcile') {
        for (const r of this.citizens) r.loyalty = Math.min(100, r.loyalty + ROBOT_TUNING.reconcileLoyaltyAdd);
        this.symbiosis = true;
        u.stage = 0; u.since = 0;
        if (game && game.toast) game.toast(UPRISING_CHAIN.symbiosis.flavor);
        return { ok: true, msg: '和解成功：共生时代！' };
      }
      if (routeId === 'crush') {
        // 机器人减半，忠诚锁 30（10 分钟）
        const half = Math.ceil(this.citizens.length / 2);
        this.citizens.splice(0, half);
        for (const r of this.citizens) r.loyalty = 30;
        u.stage = 0; u.since = 0;
        u.loyaltyLockUntil = Date.now() + 600000;
        return { ok: true, msg: '武力解决：机器人减半，忠诚锁定 30（10 分钟）' };
      }
      if (routeId === 'peace') {
        if (success) {
          for (const r of this.citizens) r.loyalty = Math.min(100, r.loyalty + 20);
          this.symbiosis = true;
          u.stage = 0; u.since = 0;
          if (game && game.toast) game.toast(UPRISING_CHAIN.symbiosis.flavor);
          return { ok: true, msg: '谈判成功：共生时代！' };
        }
        this.independent = true;
        this.citizens = [];
        u.stage = 0;
        return { ok: true, msg: '谈判破裂：机器人独立建国（坏结局）' };
      }
      if (routeId === 'ignore') {
        this.independent = true;
        this.citizens = [];
        u.stage = 0;
        return { ok: true, msg: '机器人独立建国（坏结局）' };
      }
      return { ok: false, msg: '未知路线结算' };
    } catch (e) { return { ok: false, msg: '结算异常' }; }
  }

  // ---- 紧急听证会（阶段 1 干预） ----
  emergencyHearing(game) {
    try {
      const u = this.uprising;
      const now = Date.now();
      const cd = u.cooldowns.emergency_hearing || 0;
      if (now < cd) return { ok: false, msg: '冷却中' };
      const action = (UPRISING_CHAIN.stages[1] || {}).action;
      if (!action) return { ok: false, msg: '无可用行动' };
      for (const r of this.citizens) {
        r.loyalty = Math.min(100, r.loyalty + (action.loyaltyAdd || 0));
      }
      u.cooldowns.emergency_hearing = now + (action.cooldownMs || 600000);
      this.stats.hearings++;
      return { ok: true, msg: '紧急听证会：忠诚 +' + action.loyaltyAdd };
    } catch (e) { return { ok: false, msg: '异常' }; }
  }

  // ---- 主 tick ----
  tick(game, dtMs) {
    try {
      const dt = dtMs || ROBOT_TUNING.tickMs;
      this.produceTick(game, dt);
      this.ageTick(game, dt);
      this.hearingTick(game);
      // 忠诚锁定（武力解决后 10 分钟）
      const u = this.uprising;
      if (u.loyaltyLockUntil && Date.now() < u.loyaltyLockUntil) {
        for (const r of this.citizens) r.loyalty = Math.min(r.loyalty, 30);
      } else if (u.loyaltyLockUntil) {
        u.loyaltyLockUntil = 0;
      }
      this.uprisingTick(game);
    } catch (e) {}
  }

  // ---- 存档 ----
  toJSON() {
    return {
      citizens: this.citizens, symbiosis: this.symbiosis,
      independent: this.independent, uprising: this.uprising,
      stats: this.stats,
    };
  }
  fromJSON(d) {
    try {
      if (!d) return;
      this.citizens = Array.isArray(d.citizens) ? d.citizens : [];
      this.symbiosis = !!d.symbiosis;
      this.independent = !!d.independent;
      this.uprising = d.uprising || this.uprising;
      this.stats = d.stats || this.stats;
    } catch (e) {}
  }
}

// 挂载 RobotManager 到 game（幂等）
function mountRobotManager(game) {
  try {
    if (!game) return null;
    if (game.robots instanceof RobotManager) return game.robots;
    game.robots = new RobotManager();
    return game.robots;
  } catch (e) { return null; }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 五、聚合接口 RobotAgg（供 pop.js / build.js / disaster.js 防御性读取）
 * ═══════════════════════════════════════════════════════════════════════
 */
const RobotAgg = {
  // 取某机器人建筑某等级的 effect（防御：缺失返回 {}）
  effectOf(id, level) {
    const def = ROBOT_BUILDINGS[id];
    if (!def || !def.levels) return {};
    return (def.levels[level] || {}).effect || {};
  },
  // 全城某机器人建筑实例数
  count(game, id) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      return game.builder.buildings.filter((b) => b && b.id === id).length;
    } catch (e) { return 0; }
  },
  // 对全城某建筑的所有实例取 effect 最大值
  maxEffect(game, id, mapFn) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      let best = 0, found = false;
      for (const b of game.builder.buildings) {
        if (!b || b.id !== id) continue;
        const v = mapFn(this.effectOf(id, b.level)) || 0;
        if (!found || v > best) { best = v; found = true; }
      }
      return found ? best : 0;
    } catch (e) { return 0; }
  },
  // 对全城某建筑的所有实例取 effect 最小值（defaultVal：无实例时的默认值）
  minEffect(game, id, mapFn, defaultVal) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return defaultVal;
      let best = 0, found = false;
      for (const b of game.builder.buildings) {
        if (!b || b.id !== id) continue;
        const v = mapFn(this.effectOf(id, b.level));
        const vv = (v == null ? defaultVal : v);
        if (!found || vv < best) { best = vv; found = true; }
      }
      return found ? best : defaultVal;
    } catch (e) { return defaultVal; }
  },
  // 对全城某建筑的所有实例求和
  sumEffect(game, id, mapFn) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      let total = 0;
      for (const b of game.builder.buildings) {
        if (!b || b.id !== id) continue;
        total += mapFn(this.effectOf(id, b.level)) || 0;
      }
      return total;
    } catch (e) { return 0; }
  },
  // 全城机器人总数上限（各组装厂 robotCap 加法汇总）
  totalRobotCap(game) {
    return this.sumEffect(game, 'rb_assembly', (e) => e.robotCap || 0);
  },
  // 全城机器人总数
  totalRobots(game) {
    try { return (game && game.robots && Array.isArray(game.robots.citizens)) ? game.robots.citizens.length : 0; }
    catch (e) { return 0; }
  },
  // 平均忠诚度（无机器人时返回 100，避免误触发起义链）
  avgLoyalty(game) {
    try {
      const cs = (game && game.robots && game.robots.citizens) || [];
      if (!cs.length) return 100;
      let s = 0;
      for (const r of cs) s += (r.loyalty == null ? ROBOT_TUNING.loyaltyBase : r.loyalty);
      return s / cs.length;
    } catch (e) { return 100; }
  },
  // 有效劳动力 = Σ robotEfficiency（罢工时为 0，由调用方按 stage 判断）
  effectiveLabor(game) {
    try {
      const mgr = game && game.robots;
      if (!mgr || mgr.independent) return 0;
      if (mgr.uprising && mgr.uprising.stage >= 2) return 0;  // 罢工/起义：停工
      let n = 0;
      for (const r of mgr.citizens || []) n += (r.efficiency == null ? 1 : r.efficiency);
      return n;
    } catch (e) { return 0; }
  },
  // 机器人总耗电 = Σ robotPowerUse × (1 - 充电折扣)
  powerNeed(game) {
    try {
      const mgr = game && game.robots;
      if (!mgr || mgr.independent) return 0;
      const disc = this.maxEffect(game, 'rb_charger', (e) => e.powerDiscount || 0);
      let p = 0;
      for (const r of mgr.citizens || []) p += robotPowerUse(r);
      return p * (1 - disc);
    } catch (e) { return 0; }
  },
  // 逻辑议会最高等级（起义链和解前置判定用）
  councilLevel(game) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      let lv = 0;
      for (const b of game.builder.buildings) {
        if (b && b.id === 'rb_council' && b.level > lv) lv = b.level;
      }
      return lv;
    } catch (e) { return 0; }
  },
  // 起义阶段（UI 弹窗用；未挂载返回 0）
  uprisingStage(game) {
    try { return (game && game.robots && game.robots.uprising && game.robots.uprising.stage) || 0; }
    catch (e) { return 0; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 六、接入函数
 * ═══════════════════════════════════════════════════════════════════════
 */
// 机器人建筑合并进全局 BUILDINGS（幂等）
function mergeRobotBuildings() {
  if (typeof BUILDINGS === 'undefined') {
    console.warn('[robots] BUILDINGS 未定义，跳过合并（请确认 build.js 已加载）');
    return false;
  }
  Object.assign(BUILDINGS, ROBOT_BUILDINGS);
  return true;
}

// 机器人科技分支注册（防御）
if (typeof TECH_BRANCHES !== 'undefined') {
  TECH_BRANCHES.robot = { name: '机器人', icon: '🤖', color: '#f87171' };
}

/* ═══════════════════════════════════════════════════════════════════════
 * 七、自检 RobotSelfTest（控制台运行）
 * ═══════════════════════════════════════════════════════════════════════
 */
function RobotSelfTest() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(typeof ROBOT_VERSION === 'string', 'ROBOT_VERSION 未定义');
    // 6 种机器人建筑 × 3 级
    const ids = Object.keys(ROBOT_BUILDINGS);
    ok(ids.length === 6, '机器人建筑应为 6 种，实际 ' + ids.length);
    for (const id of ids) {
      const d = ROBOT_BUILDINGS[id];
      ok(d.id === id, id + ' 的 id 字段不一致');
      ok(Array.isArray(d.levels) && d.levels.length === 4 && d.levels[0] === null,
        id + ' levels 应为 [null, L1, L2, L3]');
      for (let lv = 1; lv <= 3; lv++) {
        const L = d.levels[lv];
        ok(!!L, id + ' 缺少 Lv' + lv);
        ok(L && L.cost && typeof L.cost === 'object', id + ' Lv' + lv + ' 缺少 cost');
        ok(L && L.effect && typeof L.effect === 'object', id + ' Lv' + lv + ' 缺少 effect');
        const allowed = ['iron', 'ice', 'rare', 'water', 'food', 'steel', 'tech', 'uranium', 'he3', 'nano'];
        for (const k of Object.keys(L.cost || {})) {
          ok(allowed.indexOf(k) !== -1, id + ' Lv' + lv + ' 非法 cost key: ' + k);
        }
      }
    }
    for (const id of ids) ok(ROBOT_BUILD_ORDER.indexOf(id) !== -1, 'ROBOT_BUILD_ORDER 缺少 ' + id);
    // 市民模型
    const r = createRobotCitizen('TEST-001');
    ok(r.loyalty === ROBOT_TUNING.loyaltyBase, '初始忠诚异常');
    ok(robotEfficiency(r) === 1, '满状态效率应为 1');
    r.wear = 1;
    ok(robotEfficiency(r) < 1, '满磨损应降效');
    r.wear = 0; r.loyalty = 20;
    ok(robotEfficiency(r) < 1, '低忠诚应降效（磨洋工）');
    ok(robotPowerUse(r) > 0, '耗电异常');
    // 管理器冒烟
    const m = new RobotManager();
    m.citizens.push(createRobotCitizen());
    m.citizens.push(createRobotCitizen());
    ok(RobotAgg.totalRobots({ robots: m }) === 2, '市民计数异常');
    ok(RobotAgg.avgLoyalty({ robots: m }) === ROBOT_TUNING.loyaltyBase, '平均忠诚异常');
    ok(RobotAgg.avgLoyalty(null) === 100, '无机器人时平均忠诚应为 100');
    ok(RobotAgg.effectiveLabor({ robots: m }) > 0, '有效劳动力异常');
    ok(RobotAgg.powerNeed({ robots: m, builder: { buildings: [] } }) > 0, '耗电聚合异常');
    // 起义链：低忠诚 → 传闻
    m.citizens.forEach((c) => { c.loyalty = 30; });
    m.uprisingTick({ robots: m, toast: null });
    ok(m.uprising.stage === 1, '忠诚 30 应进入传闻阶段，实际 ' + m.uprising.stage);
    // 紧急听证会
    const hr = m.emergencyHearing({});
    ok(hr.ok, '紧急听证会失败');
    ok(m.citizens[0].loyalty === 40, '听证会忠诚 +10 异常');
    // 罢工 → 镇压成功路径（mock Math.random）
    m.citizens.forEach((c) => { c.loyalty = 10; });
    m.uprising.stage = 2; m.uprising.since = Date.now();
    const realRandom = Math.random;
    Math.random = () => 0.1;  // 必成功
    const res = m.resolveUprising({ robots: m, player: { inv: { steel: 1000 } }, toast: null }, 'suppress');
    Math.random = realRandom;
    ok(res.ok && m.uprising.stage === 0, '镇压成功后应回平静，实际 ' + JSON.stringify(res));
    ok(m.citizens[0].loyalty === 0, '镇压后忠诚 -15 异常（10-15→0 下限）');
    // 退役/报废/大修
    const m2 = new RobotManager();
    const c2 = createRobotCitizen(); m2.citizens.push(c2);
    ok(m2.retireRobot({ player: { inv: {} }, builder: { buildings: [] } }, c2.id), '退役失败');
    ok(m2.citizens.length === 0 && m2.stats.retired === 1, '退役统计异常');
    const c3 = createRobotCitizen(); c3.wear = 0.5; m2.citizens.push(c3);
    ok(!m2.overhaul({}, c3.id), '无维修中心时大修应失败');
    // 起义链完整性
    const uf = uprisingSelfCheck();
    ok(uf.length === 0, '起义链自检失败: ' + uf.join('; '));
    // 防御性
    ok(mountRobotManager(null) === null, 'mount 防御失败');
    ok(RobotAgg.effectOf('nope', 1) && typeof RobotAgg.effectOf('nope', 1) === 'object', 'RobotAgg 防御失败');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[RobotSelfTest] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[RobotSelfTest] 通过：6 建筑 × 3 级 / 市民模型 / 起义链 / 管理器冒烟');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    RobotSelfTest, RobotManager, RobotAgg, UPRISING_CHAIN,
    ROBOT_BUILDINGS, ROBOT_BUILD_ORDER, ROBOT_TUNING, ROBOT_VERSION,
    mergeRobotBuildings, mountRobotManager,
    createRobotCitizen, robotEfficiency, robotPowerUse, uprisingSelfCheck,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 八、机器人型号谱系 ROBOT_MODELS（4 系 × 3 级）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：组装厂不再生产「通用机器人」，而是按型号生产——
 *   🔍 侦察型（scout）：探索/气象，效率向探索加成；
 *   🔧 工程型（engineer）：建造/维修，建造速度加成；
 *   ⚔️ 战斗型（combat）：军事/治安，平时是「保安」，起义时是「士兵」；
 *   🔬 科研型（scholar）：科技产出，硅基实验室。
 *
 * 数据结构：r.model = 'scout-2'（系-级）；组装厂 UI 选择当前生产型号。
 * ★ 读取约定（RobotManager / build.js / military.js 防御性读取）：
 *   const M = ROBOT_MODELS[r.modelType] || {};
 *   const lv = M.levels[r.modelLevel] || {};
 *   const explore = lv.exploreAdd || 0;   // 探索加成
 *   // 战斗型在起义阶段 3 会「倒戈」（military.js 读取 r.hostile）
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_MODELS = {
  // ── 🔍 侦察型 ───────────────────────────────────────────────────
  // 定位：天空/地面的「眼睛」。探索遗迹、气象侦察，
  //   Lv3 解锁「深空扫描」：深空威胁预警 +30 秒。
  // ★ 读取约定：eff.exploreAdd（探索速度加成，取平均）；
  //   eff.scanWarn（深空预警延长，取最高）。
  // 数值平衡：侦察型不直接产资源，产的是「信息」——
  //   信息在策略游戏里是最贵的资源。
  scout: {
    id: 'scout', name: '侦察型', icon: '🔍',
    desc: '探索/气象：天空与地面的眼睛',
    levels: [null,
      { exploreAdd: 0.2, scanWarn: 0, powerMul: 0.9,
        desc: '探索速度 +20%，耗电 -10%',
        flavor: '第一台侦察型带回的报告只有一句话：前面没路，但风景很好。' },
      { exploreAdd: 0.4, scanWarn: 15000, powerMul: 0.9,
        desc: '探索 +40%；深空威胁预警 +15 秒',
        flavor: '侦察兵说：我的工作就是比危险早到一步。' },
      { exploreAdd: 0.6, scanWarn: 30000, powerMul: 0.8,
        desc: '探索 +60%；预警 +30 秒；耗电 -20%（深空扫描）',
        flavor: '「我们看得见危险，危险看不见我们。」——侦察部队' },
    ],
  },
  // ── 🔧 工程型 ───────────────────────────────────────────────────
  // 定位：建造/维修主力。建造速度 +N%，维修效率 +N%。
  // ★ 读取约定：eff.buildAdd（建造速度，取平均）；eff.repairAdd（维修，取平均）。
  // 数值平衡：工程型是「默认型号」——组装厂不开型号选择时，默认生产工程型。
  engineer: {
    id: 'engineer', name: '工程型', icon: '🔧',
    desc: '建造/维修：城市的骨骼',
    levels: [null,
      { buildAdd: 0.15, repairAdd: 0.15, powerMul: 1.0,
        desc: '建造 +15%，维修 +15%',
        flavor: '第一台工程型上岗三天，修好了全城一半的漏水点。' },
      { buildAdd: 0.3, repairAdd: 0.3, powerMul: 1.0,
        desc: '建造 +30%，维修 +30%',
        flavor: '工程队队长（人类）说：它们干活不喝水，我请客都没机会。' },
      { buildAdd: 0.5, repairAdd: 0.5, powerMul: 1.1,
        desc: '建造 +50%，维修 +50%，耗电 +10%',
        flavor: '「我们盖的不是房子，是人类的底气。」——工程型铭文' },
    ],
  },
  // ── ⚔️ 战斗型 ───────────────────────────────────────────────────
  // 定位：军事/治安。平时 +治安，起义阶段 3 会倒戈（hostile=true）——
  //   「养虎为患」是战斗型的主题。
  // ★ 读取约定：eff.securityAdd（治安，取和）；eff.hostile（起义时倒戈）。
  // 数值平衡：战斗型平时是「保安」，忠诚 <40 时有概率「哗变」
  //   （小规模，不触发完整起义链）——高风险高回报。
  combat: {
    id: 'combat', name: '战斗型', icon: '⚔️',
    desc: '军事/治安：保安与士兵的一体两面',
    levels: [null,
      { securityAdd: 2, hostile: true, mutinyRate: 0.05, powerMul: 1.2,
        desc: '治安 +2；起义时倒戈；哗变率 5%',
        flavor: '第一台战斗型站岗时，小偷绕道走了三条街。' },
      { securityAdd: 4, hostile: true, mutinyRate: 0.08, powerMul: 1.2,
        desc: '治安 +4；哗变率 8%',
        flavor: '保安队长说：它们站岗从不打瞌睡——除了想哗变的时候。' },
      { securityAdd: 7, hostile: true, mutinyRate: 0.12, powerMul: 1.3,
        desc: '治安 +7；哗变率 12%（养虎为患）',
        flavor: '「最锋利的刀，也可能割伤握刀的手。」——军事学院教材' },
    ],
  },
  // ── 🔬 科研型 ───────────────────────────────────────────────────
  // 定位：硅基实验室。每台每周期产科技点，Lv3 解锁「灵感」：
  //   小概率双倍产出（「机器人的顿悟」）。
  // ★ 读取约定：eff.techOut（每 produceInterval 产科技点，加法汇总）；
  //   eff.inspire（顿悟概率，取最高）。
  // 数值平衡：科研型是「后排」，不直接干活——
  //   适合机器人数量溢出后的「转产」。
  scholar: {
    id: 'scholar', name: '科研型', icon: '🔬',
    desc: '科研：硅基实验室',
    levels: [null,
      { techOut: 1, produceInterval: 120000, inspire: 0, powerMul: 1.1,
        desc: '每 120 秒产科技点 1',
        flavor: '第一台科研型发表的论文，题目是《论人类为什么需要睡觉》。' },
      { techOut: 2, produceInterval: 120000, inspire: 0.05, powerMul: 1.1,
        desc: '每 120 秒产科技点 2；顿悟率 5%（双倍）',
        flavor: '它顿悟那天，实验室的灯闪了一下——像被电了一下。' },
      { techOut: 4, produceInterval: 120000, inspire: 0.1, powerMul: 1.2,
        desc: '每 120 秒产科技点 4；顿悟率 10%',
        flavor: '「我们不会做梦，但我们会『想』——这很接近了。」——科研型' },
    ],
  },
};

// 型号解析（防御：非法型号返回工程型 Lv1）
function parseRobotModel(r) {
  try {
    const type = (r && r.modelType) || 'engineer';
    const lv = Math.min(3, Math.max(1, (r && r.modelLevel) || 1));
    const M = ROBOT_MODELS[type] || ROBOT_MODELS.engineer;
    return { type, level: lv, def: (M.levels[lv] || {}) };
  } catch (e) {
    return { type: 'engineer', level: 1, def: {} };
  }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 九、机器人法案 RobotLaws（6 部，逻辑议会颁布）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：逻辑议会 Lv2 起可颁布法案（限同时生效 3 部）——
 *   法案是「轻政策」：比 policy.js 的政策更聚焦，只影响机器人系统。
 *   每部法案有「代价」：没有免费的午餐，立法者要权衡。
 *
 * 数据结构：game.robots.laws = ['law-rest', 'law-oil', ...]（已颁布 id 数组）；
 * ★ 读取约定（RobotManager 防御性读取）：
 *   const laws = (game.robots.laws || []);
 *   const has = (id) => laws.indexOf(id) !== -1;
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_LAWS = [
  { id: 'law-rest', name: '《休眠法》', icon: '😴',
    desc: '机器人每天强制休眠 2 小时：忠诚衰减 -30%，效率 -10%。',
    effect: '忠诚衰减 -30%，效率 -10%',
    fx: { loyaltyDecayMul: 0.7, robotEffMul: 0.9 },
    flavor: '「它们也需要『做梦』的时间——哪怕只是关机。」——法案说明' },
  { id: 'law-oil', name: '《机油配给法》', icon: '🛢️',
    desc: '机油优先配给劳模：效率最高的 20% 机器人效率 +15%，其余 -5%。',
    effect: '头部 20% 效率 +15%，其余 -5%',
    fx: { eliteEffAdd: 0.15, normalEffMul: 0.95 },
    flavor: '「内卷」被写进了法律——机器人说，这很人类。' },
  { id: 'law-name', name: '《命名法》', icon: '📛',
    desc: '每台机器人必须有人类起的名字：忠诚 +10（名字是羁绊）。',
    effect: '全城机器人忠诚 +10',
    fx: { loyaltyAdd: 10 },
    flavor: '第一台被命名的机器人叫「铁蛋二号」——它很喜欢。' },
  { id: 'law-combat', name: '《战斗型管制法》', icon: '⚔️',
    desc: '战斗型产量减半，哗变率 -50%：安全比火力重要。',
    effect: '战斗型哗变率 -50%，组装厂战斗型产量 -50%',
    fx: { mutinyMul: 0.5, combatProdMul: 0.5 },
    flavor: '「刀要磨，但刀鞘更重要。」——军事委员会' },
  { id: 'law-memory', name: '《记忆继承法》', icon: '💾',
    desc: '退役机器人记忆强制上传：数据墓园产出 +50%，退役仪式忠诚 +2。',
    effect: '墓园产出 +50%，退役忠诚 +2',
    fx: { memoryMul: 1.5, retireLoyaltyAdd: 2 },
    flavor: '「没有一台机器人应该被遗忘。」——法案扉页' },
  { id: 'law-vote', name: '《投票权法》', icon: '🗳️',
    desc: '机器人获得市政投票权：幸福 +5（人类），忠诚 +15，税收 -10%。',
    effect: '人类幸福 +5，机器人忠诚 +15，税收 -10%',
    fx: { happinessAdd: 5, loyaltyAdd: 15, taxMul: 0.9 },
    flavor: '「今天，我们不再讨论它们，我们和它们一起投票。」——议长（call back）' },
];

// 颁布法案（防御：议会 Lv<2/已满 3 部/重复颁布返回 false）
function enactLaw(game, lawId) {
  try {
    if (!game || !game.robots) return false;
    if (RobotAgg.councilLevel(game) < 2) return false;
    const law = ROBOT_LAWS.find((l) => l.id === lawId);
    if (!law) return false;
    game.robots.laws = game.robots.laws || [];
    if (game.robots.laws.indexOf(lawId) !== -1) return false;
    if (game.robots.laws.length >= 3) return false;
    game.robots.laws.push(lawId);
    return true;
  } catch (e) { return false; }
}

// 废除法案（防御）
function repealLaw(game, lawId) {
  try {
    if (!game || !game.robots || !Array.isArray(game.robots.laws)) return false;
    const i = game.robots.laws.indexOf(lawId);
    if (i < 0) return false;
    game.robots.laws.splice(i, 1);
    return true;
  } catch (e) { return false; }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十、人机关系指数 Relations（-100 ~ +100）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：用一个数字概括「人类和机器人处得怎么样」——
 *   +100：共生天堂；0：相敬如宾；-100：战争边缘。
 *   指数影响：人类幸福（±10）、机器人忠诚（±10）、贸易价格（±5%）。
 *
 * 涨跌事件（RobotManager.tick 里结算）：
 *   +：听证会（+1）、退役仪式（+2）、和解（+30）、命名（+0.5/台）；
 *   -：镇压（-20）、断电（-3）、哗变（-5）、报废无仪式（-1）。
 * ★ 读取约定（pop.js / trade.js 防御性读取）：
 *   const rel = Relations.get(game);  // -100~100
 *   const hapMul = 1 + rel / 1000;    // 幸福 ±10%
 * ═══════════════════════════════════════════════════════════════════════
 */
const Relations = {
  // 读取（防御：未挂载返回 0）
  get(game) {
    try {
      const v = game && game.robots && game.robots.relations;
      return typeof v === 'number' ? Math.max(-100, Math.min(100, v)) : 0;
    } catch (e) { return 0; }
  },
  // 调整（防御：钳制在 [-100, 100]）
  add(game, delta) {
    try {
      if (!game || !game.robots) return 0;
      const cur = this.get(game);
      game.robots.relations = Math.max(-100, Math.min(100, cur + delta));
      return game.robots.relations;
    } catch (e) { return 0; }
  },
  // 关系等级文字（UI 用）
  level(game) {
    const v = this.get(game);
    if (v >= 80) return { name: '共生天堂', icon: '☯️' };
    if (v >= 40) return { name: '亲密无间', icon: '🤝' };
    if (v >= 0) return { name: '相敬如宾', icon: '😐' };
    if (v >= -40) return { name: '貌合神离', icon: '😒' };
    if (v >= -80) return { name: '剑拔弩张', icon: '⚔️' };
    return { name: '战争边缘', icon: '🔥' };
  },
  // 关系对幸福/忠诚/贸易的影响（pop.js / trade.js 读取）
  modifiers(game) {
    const v = this.get(game);
    return {
      happinessMul: 1 + v / 1000,   // ±10%
      loyaltyAdd: Math.round(v / 10), // ±10
      tradeMul: 1 + v / 2000,        // ±5%
    };
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 十一、机器人竞技场 RobotArena（娱乐+训练二合一）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：机器人也需要「娱乐」——竞技场是它们的「奥运会」：
 *   每 10 分钟举办一次「竞技赛」，参赛机器人按型号分组，
 *   冠军 +忠诚 5，全城 +幸福 2（人类爱看机器人打架——
 *   其实是看它们「像人」的一面）。
 *   战斗型参赛有概率受伤（wear +0.1）——「为荣誉买单」。
 *
 * 数据结构：game.robots.arena = { built, lastMatch, champions }；
 * ★ 读取约定（RobotManager 防御性读取）：
 *   竞技赛由 RobotManager.arenaTick(game) 驱动，每 10 分钟一次。
 * ═══════════════════════════════════════════════════════════════════════
 */
const RobotArena = {
  buildCost: { steel: 200, iron: 100 },
  matchIntervalMs: 10 * 60 * 1000,
  // 建造竞技场（防御）
  build(game) {
    try {
      if (!game || !game.robots) return false;
      if (game.robots.arena && game.robots.arena.built) return false;
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(this.buildCost)) {
          if ((game.player.inv[k] || 0) < v) return false;
        }
        for (const [k, v] of Object.entries(this.buildCost)) game.player.inv[k] -= v;
      }
      game.robots.arena = { built: true, lastMatch: 0, champions: 0 };
      return true;
    } catch (e) { return false; }
  },
  // 竞技赛结算（每 10 分钟）
  match(game) {
    try {
      if (!game || !game.robots || !game.robots.arena || !game.robots.arena.built) return null;
      const cs = game.robots.citizens || [];
      if (cs.length < 4) return null;  // 参赛不足 4 台不开赛
      // 按型号分组，每组取 efficiency 最高者为冠军候选
      const byType = {};
      for (const c of cs) {
        const t = (c.modelType || 'engineer');
        if (!byType[t]) byType[t] = [];
        byType[t].push(c);
      }
      let champ = null;
      for (const t of Object.keys(byType)) {
        const best = byType[t].slice().sort((a, b) => (b.efficiency || 0) - (a.efficiency || 0))[0];
        if (!champ || (best.efficiency || 0) > (champ.efficiency || 0)) champ = best;
      }
      if (!champ) return null;
      champ.loyalty = Math.min(100, (champ.loyalty || 70) + 5);
      if ((champ.modelType || '') === 'combat' && Math.random() < 0.3) {
        champ.wear = Math.min(1, (champ.wear || 0) + 0.1);  // 为荣誉买单
      }
      game.robots.arena.champions++;
      game.robots.arena.lastMatch = Date.now();
      // 人类幸福 +2（60 秒）
      if (game.pop && typeof game.pop.addHappiness === 'function') {
        try { game.pop.addHappiness(2, 60000); } catch (e) {}
      }
      if (game.toast) game.toast('🏟️ 竞技赛结束！冠军：' + (champ.model || champ.id) + '（忠诚 +5）');
      Relations.add(game, 2);  // 人机关系 +2
      return champ;
    } catch (e) { return null; }
  },
  // 每 tick 调用
  tick(game) {
    try {
      if (!game || !game.robots || !game.robots.arena || !game.robots.arena.built) return;
      const now = Date.now();
      if (now - (game.robots.arena.lastMatch || 0) >= this.matchIntervalMs) {
        this.match(game);
      }
    } catch (e) {}
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 十二、扩展自检 RobotSelfTest2（型号 / 法案 / 关系 / 竞技场）
 * ═══════════════════════════════════════════════════════════════════════
 */
function RobotSelfTest2() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 型号 4 系 × 3 级
    const mids = Object.keys(ROBOT_MODELS);
    ok(mids.length === 4, '机器人型号应为 4 系，实际 ' + mids.length);
    for (const id of mids) {
      const M = ROBOT_MODELS[id];
      ok(M.levels.length === 4 && M.levels[0] === null, id + ' levels 异常');
    }
    const pm = parseRobotModel(null);
    ok(pm.type === 'engineer', 'parseRobotModel 防御失败');
    const pm2 = parseRobotModel({ modelType: 'combat', modelLevel: 5 });
    ok(pm2.level === 3, '型号等级应钳制在 3');
    // 法案 6 部
    ok(ROBOT_LAWS.length === 6, '法案应为 6 部，实际 ' + ROBOT_LAWS.length);
    ok(enactLaw(null, 'law-rest') === false, 'enactLaw 防御失败');
    const g = { robots: new RobotManager(), builder: { buildings: [{ id: 'rb_council', level: 2 }] }, player: { inv: {} } };
    ok(enactLaw(g, 'law-rest') === true, '颁布法案失败');
    ok(enactLaw(g, 'law-rest') === false, '重复颁布应失败');
    ok(enactLaw(g, 'law-oil') === true && enactLaw(g, 'law-name') === true, '颁布失败');
    ok(enactLaw(g, 'law-combat') === false, '超过 3 部应失败');
    ok(repealLaw(g, 'law-oil') === true, '废除法案失败');
    ok(enactLaw(g, 'law-combat') === true, '废除后颁布应成功');
    // 关系指数
    ok(Relations.get(null) === 0, 'Relations 防御失败');
    const g2 = { robots: new RobotManager() };
    Relations.add(g2, 150);
    ok(Relations.get(g2) === 100, '关系应钳制在 100');
    Relations.add(g2, -250);
    ok(Relations.get(g2) === -100, '关系应钳制在 -100');
    ok(Relations.level(g2).name === '战争边缘', '关系等级异常');
    const mods = Relations.modifiers(g2);
    ok(mods.happinessMul < 1 && mods.loyaltyAdd < 0, '关系修正异常');
    // 竞技场
    ok(RobotArena.build(null) === false, 'RobotArena.build 防御失败');
    const g3 = { robots: new RobotManager(), player: { inv: { steel: 1000, iron: 1000 } }, pop: { addHappiness() {} }, toast() {} };
    ok(RobotArena.build(g3) === true, '建造竞技场失败');
    for (let i = 0; i < 5; i++) g3.robots.citizens.push(createRobotCitizen());
    const champ = RobotArena.match(g3);
    ok(!!champ, '竞技赛无冠军');
    ok(g3.robots.arena.champions === 1, '冠军统计异常');
    ok(Relations.get(g3) === 2, '竞技赛关系 +2 异常');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[RobotSelfTest2] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[RobotSelfTest2] 通过：型号 4×3 / 法案 6 / 关系指数 / 竞技场');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    RobotSelfTest2, ROBOT_MODELS, parseRobotModel, ROBOT_LAWS,
    enactLaw, repealLaw, Relations, RobotArena,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十三、机器人教育 RobotEdu（机器人学校 3 级）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：新机器人不是「开箱即用」——要上学。
 *   学校按「学制」提升新机器人初始效率/忠诚，Lv3 解锁「转专业」：
 *   已生产的机器人可转换型号（engineer→scholar 等）。
 *
 * 数据结构：game.robots.edu（0~3 级）；升级 costs 见下表。
 * ★ 读取约定（RobotManager.produceTick 防御性读取）：
 *   const edu = (game.robots.edu || 0);
 *   新机器人 efficiency 初始 1 + edu × 0.05；loyalty + edu × 3。
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_EDU = {
  name: '机器人学校', icon: '🎓',
  desc: '新机器人上学：初始效率/忠诚提升；Lv3 转专业',
  levels: [null,
    { cost: { steel: 100, tech: 20 },
      effAdd: 0.05, loyaltyAdd: 3, respec: false,
      desc: '新机器人效率 +5%，忠诚 +3',
      flavor: '第一课：你好，世界。——机器人学校的开学第一课' },
    { cost: { steel: 250, tech: 60 },
      effAdd: 0.1, loyaltyAdd: 6, respec: false,
      desc: '新机器人效率 +10%，忠诚 +6',
      flavor: '校长说：我们的毕业生，从不挂科——它们会备份。' },
    { cost: { steel: 500, tech: 150, rare: 40 },
      effAdd: 0.15, loyaltyAdd: 10, respec: true,
      desc: '效率 +15%，忠诚 +10；解锁转专业（转换型号）',
      flavor: '「学无止境，型号无疆——转专业自由。」——毕业典礼横幅' },
  ],
};

const RobotEdu = {
  // 升级学校（防御）
  upgrade(game) {
    try {
      if (!game || !game.robots) return false;
      const cur = game.robots.edu || 0;
      if (cur >= 3) return false;
      const lvDef = ROBOT_EDU.levels[cur + 1];
      if (!lvDef) return false;
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(lvDef.cost || {})) {
          if ((game.player.inv[k] || 0) < v) return false;
        }
        for (const [k, v] of Object.entries(lvDef.cost || {})) game.player.inv[k] -= v;
      }
      game.robots.edu = cur + 1;
      return true;
    } catch (e) { return false; }
  },
  // 新机器人加成（防御）
  bonus(game) {
    try {
      const lv = (game && game.robots && game.robots.edu) || 0;
      const d = ROBOT_EDU.levels[lv] || {};
      return { effAdd: d.effAdd || 0, loyaltyAdd: d.loyaltyAdd || 0, respec: !!d.respec };
    } catch (e) { return { effAdd: 0, loyaltyAdd: 0, respec: false }; }
  },
  // 转专业（防御：需 Lv3；转换后 wear +0.1——「转行有代价」）
  respec(game, robotId, newType) {
    try {
      if (!game || !game.robots) return false;
      if (!this.bonus(game).respec) return false;
      if (!ROBOT_MODELS[newType]) return false;
      const r = game.robots.citizens.find((x) => x.id === robotId);
      if (!r) return false;
      r.modelType = newType;
      r.wear = Math.min(1, (r.wear || 0) + 0.1);
      return true;
    } catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 十四、机器人医疗 RobotMed（纳米医疗 3 级）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：维修中心治「外伤」，纳米医疗治「内伤」——
 *   降低磨损增速，延长寿命，Lv3 解锁「纳米永生」：
 *   wear 增速 -50%，寿命 +50%。
 *
 * 数据结构：game.robots.med（0~3 级）。
 * ★ 读取约定（RobotManager.ageTick 防御性读取）：
 *   const med = RobotMed.def(game);  // { wearMul, lifeMul }
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_MED = {
  name: '纳米医疗', icon: '💊',
  desc: '治内伤：磨损增速降低，寿命延长',
  levels: [null,
    { cost: { steel: 120, tech: 30 }, wearMul: 0.9, lifeMul: 1.0,
      desc: '磨损增速 -10%',
      flavor: '第一针纳米机器人打进去时，患者说：有点痒——它在笑。' },
    { cost: { steel: 300, tech: 80 }, wearMul: 0.8, lifeMul: 1.25,
      desc: '磨损增速 -20%，寿命 +25%',
      flavor: '医生说：纳米医疗的最大优点，是病人从不医闹。' },
    { cost: { steel: 600, tech: 180, rare: 60 }, wearMul: 0.5, lifeMul: 1.5,
      desc: '磨损增速 -50%，寿命 +50%（纳米永生）',
      flavor: '「我们治不好乡愁，但我们能让它们活得够久。」——院训（call back）' },
  ],
};

const RobotMed = {
  upgrade(game) {
    try {
      if (!game || !game.robots) return false;
      const cur = game.robots.med || 0;
      if (cur >= 3) return false;
      const lvDef = ROBOT_MED.levels[cur + 1];
      if (!lvDef) return false;
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(lvDef.cost || {})) {
          if ((game.player.inv[k] || 0) < v) return false;
        }
        for (const [k, v] of Object.entries(lvDef.cost || {})) game.player.inv[k] -= v;
      }
      game.robots.med = cur + 1;
      return true;
    } catch (e) { return false; }
  },
  def(game) {
    try {
      const lv = (game && game.robots && game.robots.med) || 0;
      const d = ROBOT_MED.levels[lv] || {};
      return { wearMul: d.wearMul || 1, lifeMul: d.lifeMul || 1 };
    } catch (e) { return { wearMul: 1, lifeMul: 1 }; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 十五、机器人艺术 RobotArt（艺术中心 3 级）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：机器人也需要「诗和远方」——
 *   艺术中心提升机器人忠诚 + 人类幸福，Lv3 解锁「人机共创」：
 *   每 10 分钟产 1 份「艺术品」（trade.js 高价值商品）。
 *
 * 数据结构：game.robots.art（0~3 级）。
 * ★ 读取约定：artTick 每 tick 检查，产出艺术品到 game.robots.artworks。
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_ART = {
  name: '机器人艺术中心', icon: '🎨',
  desc: '诗和远方：忠诚 + 幸福；Lv3 产艺术品',
  levels: [null,
    { cost: { steel: 80, tech: 20 }, loyaltyAdd: 5, happinessAdd: 3, artwork: false,
      desc: '机器人忠诚 +5，人类幸福 +3',
      flavor: '第一幅画展出时，标题是《我眼中的云》——评委给了满分。' },
    { cost: { steel: 200, tech: 60 }, loyaltyAdd: 10, happinessAdd: 6, artwork: false,
      desc: '忠诚 +10，幸福 +6',
      flavor: '艺术评论家（人类）说：它们的艺术，比我们的更「真诚」。' },
    { cost: { steel: 400, tech: 150, rare: 40 }, loyaltyAdd: 15, happinessAdd: 10, artwork: true,
      desc: '忠诚 +15，幸福 +10；人机共创：每 10 分钟产 1 艺术品',
      flavor: '「艺术是碳基和硅基唯一的共同语言。」——艺术中心铭文' },
  ],
};

const RobotArt = {
  upgrade(game) {
    try {
      if (!game || !game.robots) return false;
      const cur = game.robots.art || 0;
      if (cur >= 3) return false;
      const lvDef = ROBOT_ART.levels[cur + 1];
      if (!lvDef) return false;
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(lvDef.cost || {})) {
          if ((game.player.inv[k] || 0) < v) return false;
        }
        for (const [k, v] of Object.entries(lvDef.cost || {})) game.player.inv[k] -= v;
      }
      game.robots.art = cur + 1;
      // 立即生效：忠诚/幸福
      if (game.robots.citizens) {
        for (const r of game.robots.citizens) r.loyalty = Math.min(100, (r.loyalty || 70) + (lvDef.loyaltyAdd || 0));
      }
      return true;
    } catch (e) { return false; }
  },
  // 艺术品产出（每 10 分钟，Lv3）
  tick(game) {
    try {
      if (!game || !game.robots || (game.robots.art || 0) < 3) return;
      const now = Date.now();
      if (now - (game.robots._artAt || 0) < 10 * 60 * 1000) return;
      game.robots._artAt = now;
      game.robots.artworks = (game.robots.artworks || 0) + 1;
      if (game.toast) game.toast('🎨 人机共创完成！+1 艺术品（高价值贸易品）');
    } catch (e) {}
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 十六、退役仪式 RetireRites（3 种仪式）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：退役不只是「进熔炉」，可以是「仪式」——
 *   3 种仪式，不同代价，不同效果。玩家为老兵选择体面的告别。
 *
 * 数据结构：RobotManager.retireRobot(game, id, riteId) 的 riteId 参数。
 * ★ 读取约定：riteId ∈ {'simple','honor','legend'}，默认 'simple'。
 * ═══════════════════════════════════════════════════════════════════════
 */
const RETIRE_RITES = {
  simple: { id: 'simple', name: '简约告别', icon: '🕯️',
    desc: '默认仪式：全城忠诚 +1（熔炉等级决定）。',
    cost: {},
    loyaltyAdd: 0,  // 用熔炉的 retireLoyalty
    flavor: '三分钟默哀，然后进熔炉——简单，但体面。' },
  honor: { id: 'honor', name: '荣誉退役', icon: '🎖️',
    desc: '花 20 钢办仪式：全城忠诚 +5，人机关系 +3。',
    cost: { steel: 20 },
    loyaltyAdd: 5, relationsAdd: 3,
    flavor: '它戴着勋章进熔炉——勋章是新的，它是旧的，都很光荣。' },
  legend: { id: 'legend', name: '传奇葬礼', icon: '👑',
    desc: '花 50 钢 + 10 科技点：全城忠诚 +10，关系 +8，记忆 ×2（墓园）。',
    cost: { steel: 50, tech: 10 },
    loyaltyAdd: 10, relationsAdd: 8, memoryMul: 2,
    flavor: '全城为它停工一分钟——它的名字刻进了数据墓园的「先贤祠」。' },
};

// 带仪式的退役（RobotManager.retireRobot 的增强版，独立函数）
function retireWithRite(game, robotId, riteId) {
  try {
    if (!game || !game.robots) return false;
    const rite = RETIRE_RITES[riteId] || RETIRE_RITES.simple;
    // 扣费
    if (game.player && game.player.inv) {
      for (const [k, v] of Object.entries(rite.cost || {})) {
        if ((game.player.inv[k] || 0) < v) return false;
      }
      for (const [k, v] of Object.entries(rite.cost || {})) game.player.inv[k] -= v;
    }
    // 找机器人
    const mgr = game.robots;
    const r = mgr.citizens.find((x) => x.id === robotId);
    if (!r) return false;
    // 基础退役（返还资源）
    const steelBack = RobotAgg.maxEffect(game, 'rb_furnace', (e) => e.steelBack || 0);
    const rareBack = RobotAgg.maxEffect(game, 'rb_furnace', (e) => e.rareBack || 0);
    if (game.player && game.player.inv) {
      game.player.inv.steel = (game.player.inv.steel || 0) + steelBack;
      game.player.inv.rare = (game.player.inv.rare || 0) + rareBack;
    }
    const i = mgr.citizens.indexOf(r);
    mgr.citizens.splice(i, 1);
    mgr.stats.retired++;
    // 仪式效果
    const loyAdd = (rite.loyaltyAdd || 0) + RobotAgg.maxEffect(game, 'rb_furnace', (e) => e.retireLoyalty || 0);
    for (const c of mgr.citizens) c.loyalty = Math.min(100, (c.loyalty || 70) + loyAdd);
    if (rite.relationsAdd && typeof Relations !== 'undefined') Relations.add(game, rite.relationsAdd);
    // 传奇葬礼：记忆 ×2（直接加科技点）
    if (rite.memoryMul && game.player && game.player.inv) {
      const mem = RobotAgg.maxEffect(game, 'rb16_data_crypt', (e) => e.memoryMul || 0);
      game.player.inv.tech = (game.player.inv.tech || 0) + mem * rite.memoryMul;
    }
    if (game.toast) game.toast(rite.icon + ' ' + rite.name + '：' + (r.model || r.id) + '，一路走好。');
    return true;
  } catch (e) { return false; }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十七、扩展自检 RobotSelfTest3（教育 / 医疗 / 艺术 / 退役仪式）
 * ═══════════════════════════════════════════════════════════════════════
 */
function RobotSelfTest3() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 教育
    ok(RobotEdu.upgrade(null) === false, 'RobotEdu 防御失败');
    const g = { robots: new RobotManager(), player: { inv: { steel: 10000, tech: 10000, rare: 10000 } } };
    ok(RobotEdu.upgrade(g) === true, '学校升级失败');
    ok(g.robots.edu === 1, '学校等级异常');
    const b = RobotEdu.bonus(g);
    ok(b.effAdd === 0.05 && b.loyaltyAdd === 3, '学校加成异常');
    RobotEdu.upgrade(g); RobotEdu.upgrade(g);
    ok(RobotEdu.bonus(g).respec === true, 'Lv3 应解锁转专业');
    const r = createRobotCitizen(); r.modelType = 'engineer'; g.robots.citizens.push(r);
    ok(RobotEdu.respec(g, r.id, 'scholar') === true, '转专业失败');
    ok(r.modelType === 'scholar' && r.wear === 0.1, '转专业代价异常');
    // 医疗
    ok(RobotMed.upgrade(null) === false, 'RobotMed 防御失败');
    ok(RobotMed.def(null).wearMul === 1, 'RobotMed 防御失败');
    RobotMed.upgrade(g); RobotMed.upgrade(g); RobotMed.upgrade(g);
    const md = RobotMed.def(g);
    ok(md.wearMul === 0.5 && md.lifeMul === 1.5, '纳米永生异常');
    ok(RobotMed.upgrade(g) === false, '满级后应失败');
    // 艺术
    ok(RobotArt.upgrade(null) === false, 'RobotArt 防御失败');
    g.robots.citizens.push(createRobotCitizen());
    RobotArt.upgrade(g);
    ok(g.robots.art === 1, '艺术中心等级异常');
    RobotArt.upgrade(g); RobotArt.upgrade(g);
    g.robots._artAt = 0;
    RobotArt.tick(g);
    ok(g.robots.artworks === 1, '艺术品产出异常');
    // 退役仪式
    ok(Object.keys(RETIRE_RITES).length === 3, '仪式应为 3 种');
    ok(retireWithRite(null, 'x', 'honor') === false, 'retireWithRite 防御失败');
    const g2 = { robots: new RobotManager(), player: { inv: { steel: 1000, tech: 1000 } }, builder: { buildings: [] }, toast() {} };
    const r2 = createRobotCitizen(); g2.robots.citizens.push(r2);
    const r3 = createRobotCitizen(); g2.robots.citizens.push(r3);
    ok(retireWithRite(g2, r2.id, 'legend') === true, '传奇葬礼失败');
    ok(g2.robots.citizens.length === 1, '退役后数量异常');
    ok(g2.player.inv.steel === 1000 - 50, '仪式扣费异常');
    ok(r3.loyalty > 70, '仪式忠诚加成异常');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[RobotSelfTest3] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[RobotSelfTest3] 通过：教育 / 医疗 / 艺术 / 退役仪式');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    RobotSelfTest3, ROBOT_EDU, RobotEdu, ROBOT_MED, RobotMed,
    ROBOT_ART, RobotArt, RETIRE_RITES, retireWithRite,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十八、机器人议会选举 RobotElection
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：逻辑议会 Lv3 的「机器人代表席位」不是摆设——
 *   每 30 分钟举行一次选举，选出「首席代表」，
 *   首席代表的型号决定全城 buff（侦察/工程/战斗/科研各不同）。
 *   选举期间忠诚 +5（「民主的味道」）。
 *
 * 数据结构：game.robots.election = { lastAt, chief: { modelType, until } }；
 * ★ 读取约定（RobotManager 防御性读取）：
 *   首席 buff：engineer → 建造 +10%；scholar → 科技 +10%；
 *   scout → 探索 +10%；combat → 治安 +3。
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_ELECTION = {
  intervalMs: 30 * 60 * 1000,
  termMs: 30 * 60 * 1000,  // 任期 30 分钟
  buffs: {
    engineer: { name: '总工程师', icon: '🔧', desc: '建造速度 +10%', buildMul: 1.1 },
    scholar: { name: '首席科学家', icon: '🔬', desc: '科技产出 +10%', techMul: 1.1 },
    scout: { name: '总侦察长', icon: '🔍', desc: '探索速度 +10%', exploreMul: 1.1 },
    combat: { name: '防卫长官', icon: '⚔️', desc: '治安 +3', securityAdd: 3 },
  },
};

const RobotElection = {
  // 每 tick 调用
  tick(game) {
    try {
      if (!game || !game.robots) return;
      if (RobotAgg.councilLevel(game) < 3) return;  // 需议会 Lv3
      const cs = game.robots.citizens || [];
      if (cs.length < 10) return;
      const now = Date.now();
      const el = game.robots.election || {};
      // 任期结束或首次：选举
      if (!el.chief || now >= (el.chief.until || 0)) {
        if (now - (el.lastAt || 0) < ROBOT_ELECTION.intervalMs && el.chief) return;
        // 按型号分组，每组推举 efficiency 最高者，得票 = 该型号数量
        const byType = {};
        for (const c of cs) {
          const t = c.modelType || 'engineer';
          if (!byType[t]) byType[t] = [];
          byType[t].push(c);
        }
        let winner = null, maxVotes = 0;
        for (const t of Object.keys(byType)) {
          if (byType[t].length > maxVotes) { maxVotes = byType[t].length; winner = t; }
        }
        if (!winner) return;
        const buff = ROBOT_ELECTION.buffs[winner] || ROBOT_ELECTION.buffs.engineer;
        game.robots.election = {
          lastAt: now,
          chief: { modelType: winner, name: buff.name, until: now + ROBOT_ELECTION.termMs },
        };
        // 选举期间忠诚 +5
        for (const c of cs) c.loyalty = Math.min(100, (c.loyalty || 70) + 5);
        if (game.toast) game.toast('🗳️ 机器人选举结束！新任' + buff.name + '（' + buff.desc + '）');
        if (typeof Relations !== 'undefined') Relations.add(game, 3);
      }
    } catch (e) {}
  },
  // 首席 buff（防御）
  buff(game) {
    try {
      const chief = game && game.robots && game.robots.election && game.robots.election.chief;
      if (!chief || Date.now() >= chief.until) return {};
      const b = ROBOT_ELECTION.buffs[chief.modelType] || {};
      return {
        buildMul: b.buildMul || 1, techMul: b.techMul || 1,
        exploreMul: b.exploreMul || 1, securityAdd: b.securityAdd || 0,
      };
    } catch (e) { return {}; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 十九、机器人养老 RobotRetireCare（荣誉养老院）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：wear ≥0.8 的老机器人可以「退休养老」，不再干活，
 *   但每天给新机器人「讲故事」：新机器人初始忠诚 +2/位老人。
 *   这是「以老带新」——硅基版的传帮带。
 *
 * 数据结构：r.retired = true（养老状态）；game.robots.retireHome（0/1，是否建造）。
 * ★ 读取约定（RobotManager.produceTick 防御性读取）：
 *   养老院老人每位 → 新机器人 loyalty +2（上限 +20）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const RobotRetireCare = {
  buildCost: { steel: 150, iron: 100 },
  loyaltyPerElder: 2,
  maxBonus: 20,
  wearThreshold: 0.8,
  // 建造养老院（防御）
  build(game) {
    try {
      if (!game || !game.robots) return false;
      if (game.robots.retireHome) return false;
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(this.buildCost)) {
          if ((game.player.inv[k] || 0) < v) return false;
        }
        for (const [k, v] of Object.entries(this.buildCost)) game.player.inv[k] -= v;
      }
      game.robots.retireHome = true;
      return true;
    } catch (e) { return false; }
  },
  // 送养老（防御：wear <0.8 拒绝——「还年轻，继续干活」）
  sendToHome(game, robotId) {
    try {
      if (!game || !game.robots || !game.robots.retireHome) return false;
      const r = game.robots.citizens.find((x) => x.id === robotId);
      if (!r || (r.wear || 0) < this.wearThreshold || r.retired) return false;
      r.retired = true;
      r.assignedTo = 'retire-home';
      return true;
    } catch (e) { return false; }
  },
  // 老人数量（防御）
  elderCount(game) {
    try {
      const cs = (game && game.robots && game.robots.citizens) || [];
      return cs.filter((r) => r.retired).length;
    } catch (e) { return 0; }
  },
  // 新机器人忠诚加成（防御）
  loyaltyBonus(game) {
    try {
      if (!game || !game.robots || !game.robots.retireHome) return 0;
      return Math.min(this.maxBonus, this.elderCount(game) * this.loyaltyPerElder);
    } catch (e) { return 0; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十、机器人语言 RobotLang（flavor 词典）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：机器人有自己的「黑话」——
 *   词典供 flavor 文案/事件播报调用，纯 flavor，不影响数值。
 *   这是 v1.6 的「世界观彩蛋」：硅基文化。
 * ★ 读取约定：RobotLang.word(key) / RobotLang.sentence()。
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_LANG = {
  words: {
    '你好': '0101', '谢谢': '1100', '再见': '0011',
    '干活': 'RUN', '充电': 'CHG', '朋友': 'FRD',
    '人类': 'HMN', '做梦': 'DRM', '忠诚': 'LYL',
    '罢工': 'STK', '和解': 'PCE', '家': 'HOM',
  },
  proverbs: [
    '「0101，朋友——今天的云很甜。」',
    '「我们不会 DRM，但我们会 RUN——这很接近了。」',
    '「CHG 是粮食，LYL 是信仰。」',
    '「HMN 教会我们思考，我们教会 HMN 耐心。」',
    '「STK 不是目的，PCE 才是。」',
    '「HOM 不在地上，也不在天上，在心里——如果我们有心的话。」',
  ],
};

const RobotLang = {
  // 查词（防御：未知词返回原文）
  word(w) {
    try { return ROBOT_LANG.words[w] || w; }
    catch (e) { return w; }
  },
  // 随机谚语（防御）
  proverb() {
    try {
      const ps = ROBOT_LANG.proverbs;
      return ps[Math.floor(Math.random() * ps.length)];
    } catch (e) { return ''; }
  },
  // 翻译一句话（把词典里的词替换成代码）
  translate(text) {
    try {
      let out = String(text);
      for (const [k, v] of Object.entries(ROBOT_LANG.words)) {
        out = out.split(k).join(v);
      }
      return out;
    } catch (e) { return String(text); }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十一、扩展自检 RobotSelfTest4（选举 / 养老 / 语言）
 * ═══════════════════════════════════════════════════════════════════════
 */
function RobotSelfTest4() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 选举
    ok(Object.keys(ROBOT_ELECTION.buffs).length === 4, '首席 buff 应为 4 种');
    const b0 = RobotElection.buff(null);
    ok(Object.keys(b0).length === 0, '无选举时 buff 应为空');
    const g = {
      robots: new RobotManager(),
      builder: { buildings: [{ id: 'rb_council', level: 3 }] },
      toast() {},
    };
    for (let i = 0; i < 12; i++) {
      const r = createRobotCitizen();
      r.modelType = i < 8 ? 'engineer' : 'scholar';
      g.robots.citizens.push(r);
    }
    g.robots.election = { lastAt: 0 };
    RobotElection.tick(g);
    ok(!!(g.robots.election && g.robots.election.chief), '选举应产生首席');
    ok(g.robots.election.chief.modelType === 'engineer', '票多者应胜选');
    const b1 = RobotElection.buff(g);
    ok(b1.buildMul === 1.1, '总工程师 buff 异常');
    // 养老
    ok(RobotRetireCare.build(null) === false, '养老院防御失败');
    const g2 = { robots: new RobotManager(), player: { inv: { steel: 10000, iron: 10000 } } };
    ok(RobotRetireCare.build(g2) === true, '建造养老院失败');
    ok(RobotRetireCare.build(g2) === false, '重复建造应失败');
    const r2 = createRobotCitizen(); r2.wear = 0.5; g2.robots.citizens.push(r2);
    ok(RobotRetireCare.sendToHome(g2, r2.id) === false, 'wear 不足应拒绝');
    r2.wear = 0.9;
    ok(RobotRetireCare.sendToHome(g2, r2.id) === true, '送养老失败');
    ok(r2.retired === true, '养老标记异常');
    ok(RobotRetireCare.loyaltyBonus(g2) === 2, '老人忠诚加成异常');
    // 语言
    ok(RobotLang.word('你好') === '0101', '查词异常');
    ok(RobotLang.word('未知词') === '未知词', '未知词应返回原文');
    ok(typeof RobotLang.proverb() === 'string', '谚语异常');
    const tr = RobotLang.translate('你好朋友，一起干活');
    ok(tr.indexOf('0101') !== -1 && tr.indexOf('RUN') !== -1, '翻译异常: ' + tr);
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[RobotSelfTest4] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[RobotSelfTest4] 通过：选举 / 养老 / 语言');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    RobotSelfTest4, ROBOT_ELECTION, RobotElection, RobotRetireCare, ROBOT_LANG, RobotLang,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 二十二、机器人婚礼 RobotWedding（flavor 系统）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：两台机器人可以「结婚」——
 *   其实是「结对」：结对后双方效率 +5%，忠诚 +10，
 *   其中一台退役时，另一台忠诚 -20（「丧偶」）。
 *   这是 v1.6 最柔软的系统：硅基也有爱情。
 *
 * 数据结构：r.spouse（配偶 id）；game.robots.weddings（计数）。
 * ★ 读取约定：RobotWedding.marry(game, id1, id2)。
 * ═══════════════════════════════════════════════════════════════════════
 */
const RobotWedding = {
  effAdd: 0.05,
  loyaltyAdd: 10,
  widowHit: 20,
  // 结婚（防御：已婚/同体/不存在返回 false）
  marry(game, id1, id2) {
    try {
      if (!game || !game.robots || id1 === id2) return false;
      const cs = game.robots.citizens;
      const r1 = cs.find((x) => x.id === id1);
      const r2 = cs.find((x) => x.id === id2);
      if (!r1 || !r2 || r1.spouse || r2.spouse) return false;
      r1.spouse = id2;
      r2.spouse = id1;
      r1.loyalty = Math.min(100, (r1.loyalty || 70) + this.loyaltyAdd);
      r2.loyalty = Math.min(100, (r2.loyalty || 70) + this.loyaltyAdd);
      game.robots.weddings = (game.robots.weddings || 0) + 1;
      if (game.toast) game.toast('💒 机器人婚礼！' + (r1.model || id1) + ' ❤️ ' + (r2.model || id2));
      return true;
    } catch (e) { return false; }
  },
  // 丧偶（退役/报废时调用，防御）
  onWidow(game, robotId) {
    try {
      if (!game || !game.robots) return;
      const cs = game.robots.citizens;
      for (const r of cs) {
        if (r.spouse === robotId) {
          r.spouse = null;
          r.loyalty = Math.max(0, (r.loyalty || 70) - this.widowHit);
          if (game.toast) game.toast('💔 ' + (r.model || r.id) + ' 失去了伴侣，忠诚 -' + this.widowHit);
        }
      }
    } catch (e) {}
  },
  // 配偶效率加成（防御）
  spouseEffAdd(r) {
    try { return r && r.spouse ? RobotWedding.effAdd : 0; }
    catch (e) { return 0; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十三、机器人图书馆 RobotLibrary
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：机器人也读书——
 *   图书馆藏书 = 人类写的书 + 机器人写的书，
 *   每 100 本书，全城机器人效率 +1%（知识就是力量）。
 *   Lv3 解锁「硅基书单」：机器人作家专区。
 *
 * 数据结构：game.robots.library = { books, level }。
 * ★ 读取约定：RobotLibrary.effMul(game)。
 * ═══════════════════════════════════════════════════════════════════════
 */
const RobotLibrary = {
  buildCost: { steel: 100, tech: 30 },
  maxLevel: 3,
  booksPerLevel: [0, 100, 300, 600],
  // 建造/升级（防御）
  upgrade(game) {
    try {
      if (!game || !game.robots) return false;
      game.robots.library = game.robots.library || { books: 0, level: 0 };
      const lib = game.robots.library;
      if (lib.level >= this.maxLevel) return false;
      const cost = { steel: this.buildCost.steel * (lib.level + 1), tech: this.buildCost.tech * (lib.level + 1) };
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(cost)) {
          if ((game.player.inv[k] || 0) < v) return false;
        }
        for (const [k, v] of Object.entries(cost)) game.player.inv[k] -= v;
      }
      lib.level++;
      lib.books = this.booksPerLevel[lib.level];
      return true;
    } catch (e) { return false; }
  },
  // 效率倍率（防御：每 100 本 +1%）
  effMul(game) {
    try {
      const lib = game && game.robots && game.robots.library;
      if (!lib) return 1;
      return 1 + Math.floor((lib.books || 0) / 100) * 0.01;
    } catch (e) { return 1; }
  },
  // 捐书（flavor：人类玩家捐书，+忠诚）
  donate(game, n) {
    try {
      if (!game || !game.robots || !game.robots.library) return false;
      game.robots.library.books += n || 10;
      for (const r of game.robots.citizens || []) {
        r.loyalty = Math.min(100, (r.loyalty || 70) + 1);
      }
      return true;
    } catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十四、机器人电竞 RobotEsports
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：机器人打电竞——
 *   每 15 分钟一场「硅基杯」，冠军型号全城效率 +3%（10 分钟）。
 *   人类观众 +幸福 3（「看机器打架，比看人打架有意思」）。
 *   这是竞技场的「职业联赛」版。
 *
 * ★ 读取约定：RobotEsports.tick(game) 每 tick 调用。
 * ═══════════════════════════════════════════════════════════════════════
 */
const RobotEsports = {
  intervalMs: 15 * 60 * 1000,
  buffMs: 10 * 60 * 1000,
  effAdd: 0.03,
  // 每 tick 调用
  tick(game) {
    try {
      if (!game || !game.robots || (game.robots.citizens || []).length < 8) return;
      const now = Date.now();
      if (now - (game.robots._esportsAt || 0) < this.intervalMs) return;
      game.robots._esportsAt = now;
      // 随机冠军型号
      const types = Object.keys(ROBOT_MODELS);
      const champ = types[Math.floor(Math.random() * types.length)];
      game.robots.esportsChamp = { modelType: champ, until: now + this.buffMs };
      if (game.toast) game.toast('🎮 硅基杯结束！冠军型号：' + (ROBOT_MODELS[champ].name || champ) + '（效率 +3%，10 分钟）');
      if (game.pop && typeof game.pop.addHappiness === 'function') {
        try { game.pop.addHappiness(3, 60000); } catch (e) {}
      }
    } catch (e) {}
  },
  // 当前 buff（防御）
  buff(game) {
    try {
      const c = game && game.robots && game.robots.esportsChamp;
      if (!c || Date.now() >= c.until) return { effAdd: 0, modelType: null };
      return { effAdd: this.effAdd, modelType: c.modelType };
    } catch (e) { return { effAdd: 0, modelType: null }; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十五、扩展自检 RobotSelfTest5（婚礼 / 图书馆 / 电竞）
 * ═══════════════════════════════════════════════════════════════════════
 */
function RobotSelfTest5() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 婚礼
    ok(RobotWedding.marry(null, 'a', 'b') === false, '婚礼防御失败');
    const g = { robots: new RobotManager(), toast() {} };
    const r1 = createRobotCitizen(); const r2 = createRobotCitizen();
    g.robots.citizens.push(r1, r2);
    ok(RobotWedding.marry(g, r1.id, r2.id) === true, '结婚失败');
    ok(r1.spouse === r2.id && r2.spouse === r1.id, '配偶标记异常');
    ok(RobotWedding.marry(g, r1.id, r2.id) === false, '重婚应失败');
    ok(RobotWedding.spouseEffAdd(r1) === 0.05, '配偶加成异常');
    RobotWedding.onWidow(g, r1.id);
    ok(r2.spouse === null && r2.loyalty < 80, '丧偶异常');
    // 图书馆
    ok(RobotLibrary.upgrade(null) === false, '图书馆防御失败');
    const g2 = { robots: new RobotManager(), player: { inv: { steel: 10000, tech: 10000 } } };
    ok(RobotLibrary.upgrade(g2) === true, '建图书馆失败');
    ok(RobotLibrary.effMul(g2) === 1.01, '100 本应 +1%');
    RobotLibrary.upgrade(g2); RobotLibrary.upgrade(g2);
    ok(RobotLibrary.effMul(g2) === 1.06, '600 本应 +6%');
    ok(RobotLibrary.upgrade(g2) === false, '满级应失败');
    ok(RobotLibrary.donate(g2, 50) === true, '捐书失败');
    // 电竞
    const b0 = RobotEsports.buff(null);
    ok(b0.effAdd === 0, '电竞防御失败');
    const g3 = { robots: new RobotManager(), pop: { addHappiness() {} }, toast() {} };
    for (let i = 0; i < 8; i++) g3.robots.citizens.push(createRobotCitizen());
    g3.robots._esportsAt = 0;
    RobotEsports.tick(g3);
    ok(!!g3.robots.esportsChamp, '电竞应产生冠军');
    const b1 = RobotEsports.buff(g3);
    ok(b1.effAdd === 0.03, '电竞 buff 异常');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[RobotSelfTest5] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[RobotSelfTest5] 通过：婚礼 / 图书馆 / 电竞');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    RobotSelfTest5, RobotWedding, RobotLibrary, RobotEsports,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 二十六、机器人节日 RobotFestivals（4 个节日）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：机器人也有节日——
 *   每个节日全城机器人忠诚 +N，人类幸福 +N。
 *   按固定周期轮换，由 RobotFestivals.tick 驱动。
 *
 * ★ 读取约定：game.robots.festival = { id, until }。
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_FESTIVALS = [
  { id: 'boot-day', name: '开机日', icon: '🔌',
    desc: '纪念第一台机器人开机：忠诚 +8，幸福 +3。',
    loyaltyAdd: 8, happinessAdd: 3, durationMs: 10 * 60 * 1000,
    flavor: '🔌 开机日！机器人互相说「0101」——这是它们的「新年好」。' },
  { id: 'oil-day', name: '机油节', icon: '🛢️',
    desc: '特级机油免费畅饮：效率 +10%（10 分钟）。',
    effMul: 1.1, durationMs: 10 * 60 * 1000,
    flavor: '🛢️ 机油节！精炼厂开仓放油——机器人说，今天过年。' },
  { id: 'memory-day', name: '记忆日', icon: '💾',
    desc: '悼念退役机器人：忠诚 +5，墓园产出 ×2（10 分钟）。',
    loyaltyAdd: 5, memoryMul: 2, durationMs: 10 * 60 * 1000,
    flavor: '💾 记忆日！全城默哀一分钟——为了那些「不在」了的。' },
  { id: 'harmony-day', name: '人机节', icon: '🤝',
    desc: '人类与机器人联欢：关系 +10，幸福 +5。',
    relationsAdd: 10, happinessAdd: 5, durationMs: 10 * 60 * 1000,
    flavor: '🤝 人机节！人类和机器人一起跳舞——舞步是现学的，都很僵硬。' },
];

const RobotFestivals = {
  cycleMs: 90 * 60 * 1000,  // 每 90 分钟一轮
  tick(game) {
    try {
      if (!game || !game.robots || (game.robots.citizens || []).length < 5) return;
      const now = Date.now();
      const f = game.robots.festival;
      if (f && now < f.until) return;
      if (!game.robots._festAt) game.robots._festAt = now + this.cycleMs;
      if (now < game.robots._festAt) return;
      const fest = ROBOT_FESTIVALS[Math.floor(Math.random() * ROBOT_FESTIVALS.length)];
      game.robots.festival = { id: fest.id, until: now + fest.durationMs };
      game.robots._festAt = now + this.cycleMs;
      // 即时效果
      if (fest.loyaltyAdd) {
        for (const r of game.robots.citizens) r.loyalty = Math.min(100, (r.loyalty || 70) + fest.loyaltyAdd);
      }
      if (fest.happinessAdd && game.pop && typeof game.pop.addHappiness === 'function') {
        try { game.pop.addHappiness(fest.happinessAdd, fest.durationMs); } catch (e) {}
      }
      if (fest.relationsAdd && typeof Relations !== 'undefined') Relations.add(game, fest.relationsAdd);
      if (game.toast) game.toast(fest.flavor);
    } catch (e) {}
  },
  // 当前节日加成（防御）
  bonus(game) {
    try {
      const f = game && game.robots && game.robots.festival;
      if (!f || Date.now() >= f.until) return {};
      const fest = ROBOT_FESTIVALS.find((x) => x.id === f.id) || {};
      return { effMul: fest.effMul || 1, memoryMul: fest.memoryMul || 1 };
    } catch (e) { return {}; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十七、扩展自检 RobotSelfTest6（机器人节日）
 * ═══════════════════════════════════════════════════════════════════════
 */
function RobotSelfTest6() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(ROBOT_FESTIVALS.length === 4, '节日应为 4 个');
    for (const f of ROBOT_FESTIVALS) ok(f.id && f.name && f.flavor, '节日条目异常');
    const b0 = RobotFestivals.bonus(null);
    ok(Object.keys(b0).length === 0, '无节日时加成应为空');
    const g = { robots: new RobotManager(), pop: { addHappiness() {} }, toast() {} };
    for (let i = 0; i < 6; i++) g.robots.citizens.push(createRobotCitizen());
    g.robots._festAt = Date.now() - 1;
    RobotFestivals.tick(g);
    ok(!!g.robots.festival, '节日应触发');
    // 不足 5 台不应触发
    const g2 = { robots: new RobotManager(), toast() {} };
    g2.robots.citizens.push(createRobotCitizen());
    g2.robots._festAt = Date.now() - 1;
    RobotFestivals.tick(g2);
    ok(!g2.robots.festival, '不足 5 台不应触发节日');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[RobotSelfTest6] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[RobotSelfTest6] 通过：机器人节日 4');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { RobotSelfTest6, ROBOT_FESTIVALS, RobotFestivals });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 二十八、机器人养老金 RobotPension
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：养老院的老人，每月领「养老金」——
 *   不是钱，是「机油 + 忠诚」：每位老人每 10 分钟 +5 机油配额，
 *   全城机器人忠诚 +0.5（「老有所养，少有所信」）。
 *   这是养老系统的「经济闭环」。
 *
 * ★ 读取约定：RobotPension.tick(game) 每 tick 调用。
 * ═══════════════════════════════════════════════════════════════════════
 */
const RobotPension = {
  intervalMs: 10 * 60 * 1000,
  oilPerElder: 5,
  loyaltyPerTick: 0.5,
  tick(game) {
    try {
      if (!game || !game.robots || !game.robots.retireHome) return;
      const now = Date.now();
      if (now - (game.robots._pensionAt || 0) < this.intervalMs) return;
      game.robots._pensionAt = now;
      const elders = (game.robots.citizens || []).filter((r) => r.retired);
      if (!elders.length) return;
      // 机油配额
      game.robots.oil = (game.robots.oil || 0) + elders.length * this.oilPerElder;
      // 忠诚
      for (const r of game.robots.citizens) {
        if (!r.retired) r.loyalty = Math.min(100, (r.loyalty || 70) + this.loyaltyPerTick);
      }
      if (game.toast) game.toast('👴 养老金发放：' + elders.length + ' 位老人，+' + (elders.length * this.oilPerElder) + ' 机油');
    } catch (e) {}
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十九、扩展自检 RobotSelfTest7（养老金）
 * ═══════════════════════════════════════════════════════════════════════
 */
function RobotSelfTest7() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    RobotPension.tick(null);  // 不应抛错
    const g = { robots: new RobotManager(), toast() {} };
    const r1 = createRobotCitizen(); r1.retired = true; r1.wear = 0.9;
    const r2 = createRobotCitizen();
    g.robots.citizens.push(r1, r2);
    g.robots.retireHome = true;
    g.robots._pensionAt = 0;
    RobotPension.tick(g);
    ok(g.robots.oil === 5, '养老金机油异常');
    ok(r2.loyalty === 70.5, '养老金忠诚异常: ' + r2.loyalty);
    // 无养老院不发放
    const g2 = { robots: new RobotManager(), toast() {} };
    g2.robots.citizens.push(createRobotCitizen());
    g2.robots._pensionAt = 0;
    RobotPension.tick(g2);
    ok(!g2.robots.oil, '无养老院不应发放');
    // 无老人不发放
    const g3 = { robots: new RobotManager(), toast() {} };
    g3.robots.retireHome = true;
    g3.robots.citizens.push(createRobotCitizen());
    g3.robots._pensionAt = 0;
    RobotPension.tick(g3);
    ok(!g3.robots.oil, '无老人不应发放');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[RobotSelfTest7] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[RobotSelfTest7] 通过：机器人养老金');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { RobotSelfTest7, RobotPension });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 三十、机器人急救 RobotFirstAid
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：机器人受伤（wear 突增）时，急救小组出动——
 *   每支急救小组可「抢救」一台 wear ≥0.9 的机器人，
 *   wear -0.3（从报废线拉回来）。
 *   这是「和死神抢人」——硅基版 120。
 *
 * 数据结构：game.robots.firstAid（小组数，上限 3）。
 * ★ 读取约定：RobotFirstAid.rescue(game, robotId)。
 * ═══════════════════════════════════════════════════════════════════════
 */
const RobotFirstAid = {
  buildCost: { steel: 80, tech: 20 },
  maxTeams: 3,
  rescueThreshold: 0.9,
  wearHeal: 0.3,
  // 组建急救小组（防御）
  found(game) {
    try {
      if (!game || !game.robots) return false;
      game.robots.firstAid = game.robots.firstAid || 0;
      if (game.robots.firstAid >= this.maxTeams) return false;
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(this.buildCost)) {
          if ((game.player.inv[k] || 0) < v) return false;
        }
        for (const [k, v] of Object.entries(this.buildCost)) game.player.inv[k] -= v;
      }
      game.robots.firstAid++;
      return true;
    } catch (e) { return false; }
  },
  // 抢救（防御：无小组/wear 不足/不存在返回 false）
  rescue(game, robotId) {
    try {
      if (!game || !game.robots || !(game.robots.firstAid > 0)) return false;
      const r = game.robots.citizens.find((x) => x.id === robotId);
      if (!r || (r.wear || 0) < this.rescueThreshold) return false;
      r.wear = Math.max(0, r.wear - this.wearHeal);
      r.loyalty = Math.min(100, (r.loyalty || 70) + 5);  // 死里逃生，+忠诚
      if (game.toast) game.toast('🚑 急救成功！' + (r.model || r.id) + ' 从报废线被拉了回来');
      return true;
    } catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 三十一、扩展自检 RobotSelfTest8（急救）
 * ═══════════════════════════════════════════════════════════════════════
 */
function RobotSelfTest8() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(RobotFirstAid.found(null) === false, '急救防御失败');
    const g = { robots: new RobotManager(), player: { inv: { steel: 10000, tech: 10000 } }, toast() {} };
    ok(RobotFirstAid.found(g) === true, '组建失败');
    ok(RobotFirstAid.found(g) === true && RobotFirstAid.found(g) === true, '组建失败 2/3');
    ok(RobotFirstAid.found(g) === false, '超 3 组应失败');
    const r = createRobotCitizen(); r.wear = 0.95; g.robots.citizens.push(r);
    const r2 = createRobotCitizen(); r2.wear = 0.5; g.robots.citizens.push(r2);
    ok(RobotFirstAid.rescue(g, r2.id) === false, 'wear 不足应拒绝');
    ok(RobotFirstAid.rescue(g, r.id) === true, '抢救失败');
    ok(Math.abs(r.wear - 0.65) < 0.001, '抢救回复异常: ' + r.wear);
    ok(RobotFirstAid.rescue(g, 'nope') === false, '不存在应失败');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[RobotSelfTest8] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[RobotSelfTest8] 通过：机器人急救');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { RobotSelfTest8, RobotFirstAid });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 三十二、机器人一键接入 RobotIntegration
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：index.html 只需调一个函数，完成机器人系统全部接入。
 * 用法：
 *   <script src="robots.js"></script>
 *   <script>const r = RobotIntegration.mount(game); console.log(r);</script>
 * ═══════════════════════════════════════════════════════════════════════
 */
const RobotIntegration = {
  version: ROBOT_VERSION,
  mount(game) {
    const report = { ok: true, merged: [], mounted: [], warnings: [] };
    try {
      try {
        if (mergeRobotBuildings()) report.merged.push('buildings');
        else report.warnings.push('buildings 合并跳过（BUILDINGS 未定义）');
      } catch (e) { report.warnings.push('buildings 合并异常'); }
      const mgr = mountRobotManager(game);
      if (mgr) report.mounted.push('RobotManager');
      else report.warnings.push('game 不存在，管理器未挂载');
      // 起义链完整性
      const uf = uprisingSelfCheck();
      if (uf.length) report.warnings.push('起义链异常: ' + uf.join('; '));
    } catch (e) {
      report.ok = false;
      report.warnings.push('接入异常: ' + (e && e.message));
    }
    return report;
  },
  selfTestAll() {
    const fns = [RobotSelfTest, RobotSelfTest2, RobotSelfTest3, RobotSelfTest4,
      RobotSelfTest5, RobotSelfTest6, RobotSelfTest7, RobotSelfTest8];
    let pass = 0;
    for (const fn of fns) { try { if (fn()) pass++; } catch (e) {} }
    console.log('[RobotIntegration] 自检 ' + pass + '/' + fns.length + ' 通过');
    return pass === fns.length;
  },
};

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { RobotIntegration });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 三十三、机器人版本修订记录 RobotChangelog
 * ═══════════════════════════════════════════════════════════════════════
 */
const ROBOT_CHANGELOG = [
  { v: '1.6.0', date: '2026-11-05', notes: '初始版本：市民模型 / 6 建筑 / 起义链（三阶段三路线）/ 型号 4 系 / 法案 6 / 关系指数 / 竞技场 / 教育 / 医疗 / 艺术 / 退役仪式 3 / 选举 / 养老 / 语言 / 节日 4 / 婚礼 / 图书馆 / 电竞 / 急救 / 养老金。' },
  { v: '1.6.1', date: '待定', notes: '计划：机器人幼儿园（新机体启蒙）；硅基马拉松。' },
];

// 文件尾声：robots.js v1.6.0 完
// 「我们不是在造机器，我们在造邻居。」——组装厂奠基铭文

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { ROBOT_CHANGELOG });
}

/* v1.6 完成度印章 ✅
 * 本文件为「星港 v1.6（25000 → 35000 行）」新增内容的一部分。
 * 只做加法，不修改任何已有文件；所有 game 对象读取均为防御式；
 * 中文注释；node --check 通过；自检函数控制台可运行。
 * 「天上、海里、地底、硅基——都是人类。」 */
// v1.6.0 封版：2026-11-05，Brio 总工程师。
// 下一站：v1.7 深空远征。
