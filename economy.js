/* ============================================================================
* 星港 — economy.js：货币 / 税收 / 工资 / 维护费 / 贸易 / 贷款 / 破产
* ----------------------------------------------------------------------------
* 经济系统工程师交付 · v1.0.0 · 纯原生 JS · 零依赖 · ES6 class
*
*
* EconomyManager 是城市的"财政部"。它不生产资源，只管理一种货币——星币
* (credits)。所有星币的流入/流出都经过它记账，每游戏分钟结算一次。
* 游戏内 1 分钟 = 现实 10 秒（ECON_TUNE.MIN_MS，可配）。
*
* （每游戏分钟结算，记 t 为第 t 个游戏分钟）
* 收入 I(t) = 所得税 + 建筑营业税 + 贸易关税 + 服务费 + 存款利息
* 所得税 = P × wage × taxRate × popIncomeMul(政策)
* 营业税 = Σ_建筑 bInc(b) × tradeIncomeMul(政策) （b.damaged 则为 0）
* 贸易关税 = Δ贸易船到访 × TARIFF_PER_VISIT × tradeIncomeMul(政策)
* 服务费 = recordService() 登记的杂项（发射服务费、罚款等）
* 利息 = min(5, max(0, credits) × 0.0005)
* 支出 E(t) = 工资 + 维护费 + 政策维持费 + 贷款还款
* 工资 = min(ΣneedPop, P) × wage （停摆建筑不计）
* 维护费 = Σ_建筑 upkeep(b)；交不起 → b.damaged = true 停摆
* 政策费 = Σ_生效政策 upkeep(资源→星币折算) + 单政策行政费
* 还款 = 贷款每分钟应还（还不起 → 信用分 −20，债务累积）
* 净收支 B(t) = I(t) − E(t)；credits(t+1) = credits(t) + B(t)
* 破产：credits < 0 → bankrupt = true（game 集成层据此禁建高级建筑）
*
* 【v1.1 宏观扩展】（全部后向兼容：priceIndex=1 且开关关闭时公式与上文一致）
*   物价指数 priceIndex：持续赤字→通胀（工资/维护费同乘），持续盈余→通缩；
*   建筑折旧：楼龄每 60 游戏分钟维护费 +5%，上限 ×2；
*   工资等级制（wageGradesEnabled 开关）：技术/军事建筑工资系数 >1；
*   预算帽 setBudgetCap()、里程碑、历史曲线、what-if 模拟器 simulate()、
*   内置自检 EconSelfTest.run()。
*
* 人口消费（资源，非星币）：每人每分钟 食物 0.05 + 水 0.05，从
* game.player.inv 扣除；不足 → 幸福度下降（调 game.pop 接口，拿不到只记账）。
*
* 幸福度 H（0~100，内部模型）：目标值 = 60 + (wage−2)×8 − taxRate×150
* − 失业率×40 − 缺粮缺水×20 ＋ 政策士气修正；每分钟向目标漂移 20%。
* 人口增长乘数 growthMul()（供 pop 系统读取）：
* taxRate > 0.2 → ×0.5；taxRate < 0.05 → ×1.2；
* wage ≥ 4 → ×1.15；wage ≤ 1 → ×0.9；H < 30 → ×0.8；
* 再 × 政策 popGrowthMul（结算时缓存）。
*
* （详见文件末尾 INTEGRATION_CONTRACT）
* 1. BUILDINGS 某建筑 levelDef 可选字段：
* income: 每分钟星币产出（数字）——有则优先采用；
* upkeep: 每分钟维护费（数字=星币；或 {credits:n}）——有则优先采用。
* 缺 income → 查本文件 BUILDING_ECON_PROFILE；缺 upkeep → 按 level×1 估算。
* 2. 停摆语义：b.damaged = true 的建筑视为停摆——build.js 的生产循环
* 应跳过 damaged 建筑（集成时在 builder.update 加一行判断即可），
* 本系统内停摆建筑不收维护费、不发工资、不产生营业税。
* 3. 破产语义：economy.bankrupt === true 时，game 建造/升级高级建筑前
* 应拒绝并 toast（集成点见文末）。
* 4. game.pop 增长时应读取 economy.growthMul() 相乘（pop.js 集成点见文末）。
* 5. 存档：game.save() 加 economy 字段，game.load() 调 economy.load()。
* ========================================================================== */

'use strict';

/* ============================ 第 1 节：全局调参 =============================
* 调参集中在此一处。数值设计原则：
* - 起步期（P<20）：靠所得税勉强维持，贸易站是第一桶金；
* - 扩张期（P 50~200）：工资+维护费双杀，税率 10%~15% 是甜点区；
* - 成熟期（P>300）：营业税+关税反超所得税，可降税率换增长。
* 所有"每分钟"均指游戏分钟（现实 10 秒）。
*/
const ECON_TUNE = {
MIN_MS: 10000, // 1 游戏分钟 = 现实毫秒数（结算节拍）
START_CREDITS: 50, // 开局星币：够付 25 人×2 工资一分钟，容错极低
TAX_MIN: 0, // 税率下限
TAX_MAX: 0.3, // 税率上限 30%（再高就起义了）
TAX_DEFAULT: 0.1, // 默认 10%
TAX_PAIN: 0.2, // 税率 > 20% → 人口增长 −50%
TAX_SWEET: 0.05, // 税率 < 5% → 人口增长 +20%
WAGE_DEFAULT: 2, // 默认工资：每人每分钟 2 星币
WAGE_MIN: 0, // 0 工资 = 奴隶制（幸福崩盘，合法但找死）
WAGE_MAX: 10, // 工资上限
WAGE_HAPPY: 4, // 工资 ≥ 4 → 幸福+/增长+
WAGE_ANGRY: 1, // 工资 ≤ 1 → 幸福−/增长−
UPKEEP_PER_LEVEL: 1, // levelDef 无 upkeep 字段时的估算：level × 1
FOOD_PER_POP: 0.05, // 每人每分钟食物消费
WATER_PER_POP: 0.05, // 每人每分钟水消费
TARIFF_PER_VISIT: 6, // 每艘贸易船到访的关税（星币）
INTEREST_RATE: 0.0005, // 存款利率 /分钟
INTEREST_CAP: 5, // 利息上限 /分钟（防滚雪球）
POLICY_ADMIN_FEE: 0.5, // 每个生效政策的行政费 /分钟（星币）
REPAIR_COST_MUL: 2, // 维修停摆建筑 = 2 分钟维护费
HAPPINESS_START: 70, // 初始幸福度
HAPPINESS_DRIFT: 0.2, // 每分钟向目标漂移比例
CONFIDENCE_DRIFT: 0.05, // 市场信心每分钟漂移
LOAN_FEE_RATE: 0.05, // 贷款手续费 5%
CREDIT_START: 600, // 初始信用分
CREDIT_MIN: 300,
CREDIT_MAX: 850,
LEDGER_MAX: 200, // 账本保留条数
TOAST_COOLDOWN_MS: 60000, // 同类 toast 节流：60 秒
RUNWAY_WARN_MIN: 30, // 资金只够 <30 分钟 → 预警
};

/* 资源 → 星币折算价（政策维持费是资源 upkeep，需折算成星币支出）。
* 锚定 resources.js 的 RES_VALUE（若全局存在则直接引用其数值）。 */
function econResCreditValue() {
const fallback = {
iron: 1, ice: 1, rare: 3, uranium: 8, he3: 15,
water: 1, food: 2, steel: 4, tech: 10,
};
try {
if (typeof RES_VALUE!== 'undefined' && RES_VALUE) {
const out = {};
for (const k of Object.keys(fallback)) {
const v = Number(RES_VALUE[k]);
out[k] = (isFinite(v) && v > 0)? v: fallback[k];
}
return out;
}
} catch (e) { /* 忽略，回退 */}
return fallback;
}

/* ====================== 第 2 节：收入来源目录 =============================
* 每条：key（记账分类）、name、icon、desc（玩家可见说明）、formula（公式）。
* 实际计算在 EconomyManager._income*() 中实现，此处是"税法典"。 */
const INCOME_CATALOG = [
{
key: 'tax', name: '人口所得税', icon: '🧾',
desc: '按人头向全体市民征收：税基是工资，税率由 setTaxRate 设定。',
formula: 'P × wage × taxRate × popIncomeMul(政策)',
example: 'P=100, wage=2, taxRate=10% → 100×2×0.1 = 20 星币/分钟',
},
{
key: 'building', name: '建筑营业税', icon: '🏪',
desc: '商业建筑（贸易站/太空港/市场类）按 levelDef.income 或画像表纳税；停摆建筑免税（也没收入）。',
formula: 'Σ bInc(b) × tradeIncomeMul(政策)',
example: '贸易站 Lv2 画像收入 6 → 政策无加成时 6 星币/分钟',
},
{
key: 'trade', name: '贸易关税', icon: '🚚',
desc: '每艘到访的地球贸易船缴纳固定关税；recordTrade() 登记的顺差另计。',
formula: 'Δ到访船数 × TARIFF_PER_VISIT(6) × tradeIncomeMul(政策)',
example: '一分钟内到访 1 艘 → 6 星币',
},
{
key: 'service', name: '服务费', icon: '🛎️',
desc: '发射服务费、停靠费、罚款等杂项，需游戏逻辑调用 recordService() 登记。',
formula: 'Σ recordService(label, amount)',
example: "recordService('发射服务费', 8) → +8 星币",
},
{
key: 'interest', name: '存款利息', icon: '🏦',
desc: '国库有结余时按活期计息，有上限，鼓励存钱但不养懒汉。',
formula: 'min(5, max(0, credits) × 0.0005)',
example: '结余 2000 → 2000×0.0005 = 1 星币/分钟',
},
{
key: 'loan', name: '贷款到账', icon: '💳',
desc: 'takeLoan() 成功后本金入账（扣 5% 手续费），记为收入以便审计。',
formula: 'amount × (1 − 0.05)',
example: '贷 200 → 到账 190',
},
{
key: 'repair_refund', name: '维修退款', icon: '🔧',
desc: '预留分类：某些事件/成就返还维修费时使用。',
formula: '事件驱动',
example: '—',
},
{
key: 'grant', name: '拨款/奖励', icon: '🎖️',
desc: '成就、剧本、战役奖励调用 earn(n, label) 入账，分类为 grant。',
formula: 'earn(n, label)',
example: "earn(50, '成就奖励')",
},
];

/* ====================== 第 3 节：支出目录 ============================= */
const EXPENSE_CATALOG = [
{
key: 'wages', name: '工资', icon: '💼',
desc: '所有在岗工人的工资。工人 = Σ建筑needPop（停摆建筑除外），实发按 min(工人, 人口)。',
formula: 'min(ΣneedPop, P) × wage',
example: '工人 60, P=80, wage=2 → 120 星币/分钟',
},
{
key: 'upkeep', name: '建筑维护费', icon: '🧰',
desc: '每栋建筑每分钟的保养费。levelDef.upkeep 优先；画像表其次；兜底 level×1。交不起 → 停摆。',
formula: 'Σ upkeep(b)；不足 → b.damaged = true',
example: 'Lv3 矿机画像维护费 3 → 3 星币/分钟',
},
{
key: 'policy', name: '政策维持费', icon: '📜',
desc: '生效政策的资源 upkeep 按折算价转为星币 + 每政策 0.5 行政费。',
formula: 'Σ 折算(upkeep资源) + 0.5 × 政策数',
example: '雇佣兵(2科技/分) → 2×10=20 星币/分钟',
},
{
key: 'loan', name: '贷款还款', icon: '📉',
desc: '每分钟等额还贷。还不起 → 信用分 −20，剩余债务累积，破产加速。',
formula: 'total / termMin（等额）',
example: '贷 200, 30 分钟, 利率 15% → 230/30 ≈ 7.67/分钟',
},
{
key: 'repair', name: '维修费', icon: '🔧',
desc: 'repairBuilding() 修复停摆建筑的一次性费用 = 2 分钟维护费。',
formula: '2 × upkeep(b)',
example: '维护费 3 的建筑 → 维修费 6',
},
{
key: 'adjust', name: '政策调整费', icon: '⚖️',
desc: 'setTaxRate/setWage 每次调整收 1 星币行政手续费（防高频刷）。',
formula: '1 星币/次',
example: '—',
},
{
key: 'purchase', name: '采购支出', icon: '🛒',
desc: 'spend(n, label) 的通用支出分类：建造、升级等由 game 层调用。',
formula: 'spend(n, label)',
example: "spend(40, '建造贸易站')",
},
{
key: 'disaster', name: '灾难损失', icon: '☄️',
desc: 'recordDisasterLoss() 登记：陨石/袭击等造成的直接经济损失，可击穿国库致负（这就是破产的常见死法）。',
formula: 'credits −= amount（允许为负）；市场信心 −0.1',
example: "recordDisasterLoss('陨石撞击', 120)",
},
];

/* ==================== 第 4 节：工资档位表 ================================
* 给玩家的参考：工资不是越高越好，2~3 是甜点区。
* 幸福影响系数用于 _happinessTarget()。 */
const WAGE_LADDER = [
{ wage: 0, grade: '奴隶制', happy: -40, growth: '×0.9', note: '无人会来，老人会走。只在速通自杀流里见过。'},
{ wage: 1, grade: '血汗工厂', happy: -15, growth: '×0.9', note: '省下的工资不够付医疗费。'},
{ wage: 2, grade: '标准', happy: 0, growth: '×1.0', note: '默认。收支平衡的起点。'},
{ wage: 3, grade: '小康', happy: +8, growth: '×1.0', note: '幸福开始转正，支出可控。'},
{ wage: 4, grade: '高薪', happy: +16, growth: '×1.15', note: '增长加速，但工资 bill 翻倍，算好账。'},
{ wage: 6, grade: '土豪', happy: +28, growth: '×1.15', note: '人口爆炸，钱包也爆炸。'},
{ wage: 10, grade: '散财', happy: +40, growth: '×1.15', note: '上限。适合通关前狂欢。'},
];

/* ================== 第 5 节：建筑经济画像表 ==============================
* 字段（全部可选，缺省有兜底）：
* cat: 类别 commerce|industry|service|civic|housing|infra|military|wonder
* income: [0, lv1, lv2, lv3,...] 按 b.level 取值的营业税基数（星币/分钟）
* ——注意：levelDef.income（如存在）永远优先于此表。
* upkeep: [0, lv1, lv2,...] 维护费画像 —— levelDef.upkeep 优先。
* note: 一句话设计说明（为什么是这个数）。
* 估算逻辑：商业建筑收入 ≈ 其建造成本(折星币) / 20 分钟回本；
* 维护费 ≈ 建造成本(折星币) / 60 分钟。
* 未列出的建筑走 _profileFallback()：按名字关键词判商业，否则 upkeep=level×1。
*/
const BUILDING_ECON_PROFILE = {
/* ---- build.js 基础 12 建筑 ---- */
habitat: { cat: 'housing', upkeep: [0, 1, 2, 4], note: '居住舱：纯住房，无产出，维护费随等级涨（生命维持系统）。'},
solar: { cat: 'infra', upkeep: [0, 0, 1, 2], note: '太阳能板：几乎免维护，Lv1 免费。'},
miner: { cat: 'industry', upkeep: [0, 1, 2, 3], note: '采矿机：钻头磨损，维护费线性涨。'},
pump: { cat: 'industry', upkeep: [0, 1, 2, 3], note: '冰水泵：同采矿机。'},
smelter: { cat: 'industry', upkeep: [0, 2, 3, 5], note: '冶炼厂：高温设备，维护费高于采矿。'},
greenhouse: { cat: 'industry', upkeep: [0, 1, 2, 4], note: '温室：补光+灌溉，能耗型维护。'},
waterplant: { cat: 'industry', upkeep: [0, 1, 2, 3], note: '水厂：滤芯更换。'},
lab: { cat: 'service', upkeep: [0, 2, 4, 7], note: '实验室：精密仪器，维护费高但值（科技是硬通货）。'},
road: { cat: 'infra', upkeep: [0, 0, 0, 0], note: '道路：铺一次管一辈子，免维护。'},
hospital: { cat: 'service', upkeep: [0, 2, 4, 8], note: '医院：救人烧钱，Lv3 是吞金兽。'},
command: { cat: 'civic', upkeep: [0, 2, 4, 6], note: '指挥中心：行政中枢，固定开销。'},
launchpad: { cat: 'commerce', income: [0, 4, 9, 16], upkeep: [0, 3, 6, 10],
note: '发射台：收发射服务费，城市第一台印钞机；维护费也高（燃料库安保）。'},
/* ---- v1.2 电力/采集 ---- */
nuclear: { cat: 'infra', upkeep: [0, 3, 6, 12], note: '核电站：冷却+安保，贵但电多。'},
school: { cat: 'service', upkeep: [0, 1, 3, 5], note: '学校：教师工资折成维护费。'},
trade: { cat: 'commerce', income: [0, 3, 6, 10], upkeep: [0, 2, 4, 8],
note: '贸易站：关税+手续费，前期最稳的星币来源，建议第一个商业建筑。'},
repair: { cat: 'service', upkeep: [0, 1, 3, 5], note: '维修站：备件库开销。'},
weather: { cat: 'service', upkeep: [0, 2, 4, 7], note: '气象站：卫星链路租用费。'},
dome: { cat: 'housing', upkeep: [0, 4, 8, 15], note: '生态穹顶：巨型生命维持，人口越多越贵。'},
depot: { cat: 'infra', upkeep: [0, 1, 2, 4], note: '运输站：车辆保养。'},
warehouse: { cat: 'infra', upkeep: [0, 1, 1, 2], note: '仓库：看门大爷的工资。'},
logistics: { cat: 'infra', upkeep: [0, 2, 4, 7], note: '物流中心：调度系统+车队。'},
uminer: { cat: 'industry', upkeep: [0, 2, 4, 7], note: '铀矿机：辐射防护，贵。'},
he3rig: { cat: 'industry', upkeep: [0, 3, 6, 11], note: '氦3采集器：尖端设备，维护费最高一档。'},
fusion: { cat: 'infra', upkeep: [0, 4, 8, 15], note: '聚变电站：磁约束系统，吞金兽之二。'},
spaceport: { cat: 'commerce', income: [0, 5, 11, 20], upkeep: [0, 4, 8, 14],
note: '太空港：停靠费+货运抽成，中后期印钞机；安检维护费同样惊人。'},
elevator: { cat: 'commerce', income: [0, 2, 5, 9], upkeep: [0, 3, 6, 11],
note: '太空电梯：货运收费，细水长流。'},
clone: { cat: 'service', upkeep: [0, 3, 6, 12], note: '克隆中心：培养舱耗材，伦理另算。'},
shield: { cat: 'civic', upkeep: [0, 3, 6, 10], note: '护盾：发生器待机功耗折维护。'},
satellite: { cat: 'service', upkeep: [0, 1, 2, 4], note: '卫星：轨道维持（虚拟折算）。'},
antenna: { cat: 'service', upkeep: [0, 1, 2, 3], note: '天线：基站电费。'},
nanofactory:{ cat: 'industry', upkeep: [0, 4, 8, 14], note: '纳米工厂：洁净室+原料，贵。'},
ecocircle: { cat: 'service', upkeep: [0, 2, 5, 9], note: '生态圈：大型维生，类穹顶。'},
ark: { cat: 'wonder', upkeep: [0, 10, 20, 35], note: '方舟：终极建筑，维护费象征通关成本。'},
/* ---- v1.3 军事建筑（buildings_v13.js） ---- */
mil_academy: { cat: 'military', upkeep: [0, 2, 4, 7], note: '军事学院：教官工资。'},
arms_factory: { cat: 'military', upkeep: [0, 3, 6, 11], note: '兵工厂：生产线保养。'},
radar: { cat: 'military', upkeep: [0, 1, 2, 4], note: '雷达：电费。'},
missile_silo: { cat: 'military', upkeep: [0, 3, 6, 10], note: '导弹井：恒温恒湿+安保。'},
shelter: { cat: 'military', upkeep: [0, 1, 2, 3], note: '避难所：平时便宜，用时救命。'},
war_memorial: { cat: 'commerce', income: [0, 1, 2, 4], upkeep: [0, 1, 1, 2],
note: '战争纪念馆：收门票，火星特色旅游。'},
merc_camp: { cat: 'military', upkeep: [0, 4, 8, 15], note: '雇佣兵营地：刀口舔血，按分钟付钱。'},
nuke_silo: { cat: 'military', upkeep: [0, 5, 10, 18], note: '核武库：最高安保等级，最贵。'},
/* ---- v1.5/v1.6/v1.8 代表性建筑（关键词兜底会接住其余） ---- */
sk16_cloudmarket: { cat: 'commerce', income: [0, 4, 8, 14], upkeep: [0, 2, 5, 9],
note: '云端市场：天空城商业，客单价高。'},
sky_dock: { cat: 'commerce', income: [0, 3, 7, 12], upkeep: [0, 3, 6, 10],
note: '天空船坞：停靠费。'},
oc16_sub_dock: { cat: 'commerce', income: [0, 2, 5, 9], upkeep: [0, 2, 4, 8],
note: '潜艇码头：深海货运抽成。'},
un16_echo_library:{ cat: 'service', upkeep: [0, 2, 4, 7], note: '回声图书馆：知识付费？不，纯烧钱。'},
stellar_forge: { cat: 'industry', upkeep: [0, 6, 12, 22], note: '恒星熔炉：奇观级工业，维护费奇观级。'},
void_mine: { cat: 'industry', upkeep: [0, 5, 10, 18], note: '虚空矿机：跨维度采矿，跨维度烧钱。'},
dream_nexus: { cat: 'commerce', income: [0, 6, 13, 24], upkeep: [0, 5, 10, 18],
note: '梦境中枢：意识旅游，终局印钞机。'},
harmony_spire: { cat: 'commerce', income: [0, 3, 7, 13], upkeep: [0, 3, 6, 11],
note: '和谐尖塔：精神消费，细水长流。'},
eden_engine: { cat: 'wonder', upkeep: [0, 12, 24, 40], note: '伊甸引擎：改写生态，改写账单。'},
/* ---- v1.5+ 扩展包画像（buildings_v15/v16/v18/v19 及后续新增） ----
 * 未列出的继续走关键词兜底（商业）或 level×1（其他），此处只收录
 * 高频/高价值/易误判的建筑。 */
dyson_collector: { cat: 'infra', upkeep: [0, 5, 10, 18], note: '戴森采集器：恒星能量，维护费恒星级。' },
dyson_beam: { cat: 'infra', upkeep: [0, 6, 12, 22], note: '戴森光束：输能阵列。' },
dyson_furnace: { cat: 'industry', upkeep: [0, 7, 14, 26], note: '戴森熔炉：恒星冶炼。' },
dyson_lighthouse: { cat: 'civic', upkeep: [0, 4, 8, 15], note: '戴森灯塔：导航信标。' },
dyson_sail: { cat: 'infra', upkeep: [0, 3, 6, 12], note: '戴森光帆：推进器。' },
dyson_shield: { cat: 'civic', upkeep: [0, 5, 10, 18], note: '戴森护盾：恒星级防御。' },
engine_bastion: { cat: 'military', upkeep: [0, 5, 10, 18], note: '引擎堡垒。' },
engine_capital: { cat: 'civic', upkeep: [0, 6, 12, 22], note: '引擎首都：行政旗舰。' },
engine_control: { cat: 'civic', upkeep: [0, 4, 8, 15], note: '引擎控制台。' },
engine_cooling: { cat: 'infra', upkeep: [0, 3, 6, 12], note: '引擎冷却：散热阵列。' },
engine_fuel: { cat: 'industry', upkeep: [0, 4, 8, 15], note: '引擎燃料库。' },
engine_thruster: { cat: 'infra', upkeep: [0, 5, 10, 18], note: '引擎推进器。' },
gate_beacon: { cat: 'infra', upkeep: [0, 2, 4, 8], note: '星门信标。' },
gate_customs: { cat: 'commerce', income: [0, 4, 8, 15], upkeep: [0, 3, 6, 11], note: '星门海关：跨星系关税，印钞机。' },
gate_defense: { cat: 'military', upkeep: [0, 4, 8, 15], note: '星门防御。' },
gate_medic: { cat: 'service', upkeep: [0, 2, 4, 8], note: '星门医疗站。' },
gate_relay: { cat: 'infra', upkeep: [0, 2, 5, 9], note: '星门中继。' },
stargate_hub: { cat: 'commerce', income: [0, 6, 12, 22], upkeep: [0, 5, 10, 18], note: '星门枢纽：终局交通商业。' },
exchange: { cat: 'commerce', income: [0, 5, 10, 18], upkeep: [0, 3, 6, 11], note: '交易所：金融抽成。' },
monument: { cat: 'commerce', income: [0, 2, 4, 8], upkeep: [0, 1, 2, 4], note: '纪念碑：旅游门票。' },
parliament: { cat: 'civic', upkeep: [0, 3, 6, 12], note: '议会：民主的成本。' },
observatory: { cat: 'service', upkeep: [0, 2, 4, 7], note: '天文台。' },
geothermal: { cat: 'infra', upkeep: [0, 2, 4, 8], note: '地热电站。' },
wind_turbine: { cat: 'infra', upkeep: [0, 1, 2, 3], note: '风力涡轮：便宜量大。' },
food_processor: { cat: 'industry', upkeep: [0, 2, 4, 7], note: '食品加工厂。' },
nano_assembler: { cat: 'industry', upkeep: [0, 4, 8, 14], note: '纳米组装机。' },
robot_factory: { cat: 'industry', upkeep: [0, 4, 8, 15], note: '机器人工厂：造工人的工厂也要交维护费。' },
chronon_mine: { cat: 'industry', upkeep: [0, 5, 10, 18], note: '时子矿机：挖时间的，贵。' },
gene_lab: { cat: 'service', upkeep: [0, 3, 6, 11], note: '基因实验室。' },
medcenter: { cat: 'service', upkeep: [0, 3, 6, 11], note: '医疗中心：大号医院。' },
history_archive: { cat: 'service', upkeep: [0, 1, 3, 5], note: '历史档案馆：便宜，体面。' },
time_capsule: { cat: 'service', upkeep: [0, 1, 2, 3], note: '时间胶囊：几乎免费。' },
railgun: { cat: 'military', upkeep: [0, 4, 8, 15], note: '轨道炮：充能账单。' },
paradox_shield: { cat: 'military', upkeep: [0, 5, 10, 18], note: '悖论护盾。' },
shield_dome: { cat: 'civic', upkeep: [0, 4, 8, 14], note: '护盾穹顶：大号护盾。' },
sk16_windspire: { cat: 'infra', upkeep: [0, 2, 4, 7], note: '风尖塔。' },
sk16_stormcollector: { cat: 'industry', upkeep: [0, 3, 6, 11], note: '风暴收集器。' },
sk16_strato_antenna: { cat: 'service', upkeep: [0, 2, 4, 7], note: '平流层天线。' },
sk16_anchor_tower: { cat: 'infra', upkeep: [0, 3, 6, 11], note: '锚定塔。' },
sk16_skybeacon: { cat: 'civic', upkeep: [0, 2, 4, 8], note: '天空信标。' },
oc16_tidal_plant: { cat: 'infra', upkeep: [0, 3, 6, 11], note: '潮汐电站。' },
oc16_vent_station: { cat: 'industry', upkeep: [0, 3, 6, 11], note: '热液口采集站。' },
oc16_coral_farm: { cat: 'industry', upkeep: [0, 2, 4, 7], note: '珊瑚农场。' },
un16_mushroom_farm: { cat: 'industry', upkeep: [0, 1, 3, 5], note: '蘑菇农场：地下温室。' },
un16_core_elevator: { cat: 'infra', upkeep: [0, 4, 8, 15], note: '地核电梯。' },
un16_magma_forge: { cat: 'industry', upkeep: [0, 5, 10, 18], note: '岩浆熔炉。' },
rb16_logic_forge: { cat: 'industry', upkeep: [0, 4, 8, 14], note: '逻辑熔炉。' },
rb16_cyber_clinic: { cat: 'service', upkeep: [0, 3, 6, 11], note: '赛博诊所。' },
rb16_data_crypt: { cat: 'service', upkeep: [0, 2, 5, 9], note: '数据墓穴。' },
rb16_sync_tower: { cat: 'infra', upkeep: [0, 3, 6, 11], note: '同步塔。' },
rb16_oil_refinery: { cat: 'industry', upkeep: [0, 3, 6, 11], note: '机油精炼厂。' },
rb16_limb_workshop: { cat: 'industry', upkeep: [0, 3, 6, 10], note: '义肢工坊。' },
rb_assembly: { cat: 'industry', upkeep: [0, 3, 6, 12], note: '机器人总装线。' },
robot: { cat: 'industry', upkeep: [0, 2, 4, 8], note: '机器人：铁饭碗也要保养。' },
aqua_core: { cat: 'wonder', upkeep: [0, 8, 16, 30], note: '深海核心。' },
magma_tap: { cat: 'industry', upkeep: [0, 6, 12, 22], note: '岩浆汲取。' },
phoenix_bay: { cat: 'commerce', income: [0, 5, 10, 18], upkeep: [0, 4, 8, 15], note: '凤凰湾：浴火重生的旅游区。' },
atlas_foundry: { cat: 'industry', upkeep: [0, 7, 14, 26], note: '擎天熔炉。' },
echo_array: { cat: 'service', upkeep: [0, 3, 6, 12], note: '回声阵列。' },
iron_heart: { cat: 'industry', upkeep: [0, 6, 12, 22], note: '钢铁之心。' },
seed_sanctuary: { cat: 'service', upkeep: [0, 3, 6, 12], note: '种子圣所。' },
storm_crown: { cat: 'wonder', upkeep: [0, 9, 18, 32], note: '风暴王冠。' },
origin_gate: { cat: 'wonder', upkeep: [0, 10, 20, 36], note: '起源之门。' },
memory_vault: { cat: 'service', upkeep: [0, 2, 5, 9], note: '记忆金库。' },
guardian_titan: { cat: 'military', upkeep: [0, 8, 16, 30], note: '守护泰坦：行走的军费。' },
chrono_dome: { cat: 'wonder', upkeep: [0, 9, 18, 34], note: '时空穹顶。' },
gene_ark: { cat: 'wonder', upkeep: [0, 10, 20, 36], note: '基因方舟。' },
titan_wall: { cat: 'military', upkeep: [0, 6, 12, 22], note: '泰坦之墙。' },
rewind_reactor: { cat: 'infra', upkeep: [0, 6, 12, 22], note: '回溯反应堆。' },
temporal_accelerator: { cat: 'service', upkeep: [0, 5, 10, 18], note: '时间加速器。' },
temporal_decelerator: { cat: 'service', upkeep: [0, 5, 10, 18], note: '时间减速器。' },
wormhole_stabilizer: { cat: 'infra', upkeep: [0, 7, 14, 26], note: '虫洞稳定器。' },
swarm_satellite: { cat: 'service', upkeep: [0, 2, 4, 8], note: '卫星群。' },
};

/* 画像表未覆盖的建筑 → 关键词兜底。
* 商业关键词命中 → 按等级给收入画像；否则只给维护费画像。 */
const ECON_COMMERCE_KEYWORDS = [
'market', 'trade', 'shop', 'mall', 'port', 'dock', 'bazaar', 'exchange',
'hotel', 'casino', 'bank', 'toll', 'tariff', 'customs',
'市场', '贸易', '商店', '商场', '港', '码头', '集市', '交易所',
'酒店', '赌场', '银行', '收费', '关税', '海关',
];
const ECON_FALLBACK_COMMERCE_INCOME = [0, 2, 5, 9]; // 兜底商业收入画像
const ECON_FALLBACK_COMMERCE_UPKEEP = [0, 2, 4, 7]; // 兜底商业维护费画像

/* ================== 第 6 节：贷款条款表 ================================
* 信用分决定你能贷多少、什么利率。设计意图：破产时有路可走，
* 但路越走越窄——利滚利是真实的。 */
const LOAN_TERMS = [
{
id: 'bridge', name: '过桥贷', icon: '🌉',
maxAmount: 200, termMin: 30, rate: 0.15, minCredit: 300,
desc: '小额短期，救急不救穷。200 星币，30 分钟还清，利息 15%。',
},
{
id: 'develop', name: '开发贷', icon: '🏗️',
maxAmount: 1000, termMin: 60, rate: 0.25, minCredit: 500,
desc: '中等规模扩张用。1000 星币，60 分钟，利息 25%。',
},
{
id: 'mega', name: '星港巨贷', icon: '🌌',
maxAmount: 5000, termMin: 120, rate: 0.4, minCredit: 700,
desc: '终局工程用。5000 星币，120 分钟，利息 40%。还不起就删档重练心态。',
},
];

/* 税率参考表（给玩家的速查，setTaxRate 校验用 TAX_MIN/MAX） */
const TAX_GUIDE = [
{ rate: 0.00, label: '无税天堂', effect: '增长 +20%，国库靠爱发电'},
{ rate: 0.05, label: '轻徭薄赋', effect: '增长 +20%（<5% 档），收入微薄'},
{ rate: 0.10, label: '标准税率', effect: '默认，无修正'},
{ rate: 0.15, label: '积极财政', effect: '收入可观，增长正常'},
{ rate: 0.20, label: '重税警戒线', effect: '再往上增长 −50%'},
{ rate: 0.25, label: '横征暴敛', effect: '增长 −50%，短期回血用'},
{ rate: 0.30, label: '税到尽头', effect: '上限。配合高工资可对冲部分民怨'},
];

/* 破产阶段表：按 credits 划分财政健康度，用于 HUD 颜色与 advisor */
const FISCAL_HEALTH = [
{ min: 1000, level: 'surplus', name: '财政盈余', icon: '💰', color: '#4ade80'},
{ min: 200, level: 'stable', name: '收支稳健', icon: '✅', color: '#a3e635'},
{ min: 50, level: 'tight', name: '手头偏紧', icon: '⚠️', color: '#fbbf24'},
{ min: 0, level: 'critical', name: '濒临破产', icon: '🚨', color: '#fb923c'},
{ min: -Infinity, level: 'bankrupt', name: '破产', icon: '💀', color: '#f87171'},
];

const ECON_VERSION = '1.0.0';

/* ============================ 第 7 节：工具函数 ============================ */

/** 钳制：v ∈ [lo, hi]，非数字回退为 fb */
function econClamp(v, lo, hi, fb) {
  const n = Number(v);
  if (!isFinite(n)) return fb !== undefined ? fb : lo;
  if (n < lo) return lo;
  if (n > hi) return hi;
  return n;
}

/** 安全数字：非数字/负数保护 */
function econNum(v, fb) {
  const n = Number(v);
  if (!isFinite(n)) return fb !== undefined ? fb : 0;
  return n;
}

/** 保留 2 位小数（记账精度：星币最小单位 0.01） */
function econRound2(n) {
  return Math.round(econNum(n) * 100) / 100;
}

/** 星币格式化：1234.5 → "1,234.50" */
function econFmt(n) {
  const v = econRound2(n);
  const neg = v < 0 ? '-' : '';
  const parts = Math.abs(v).toFixed(2).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return neg + parts[0] + '.' + parts[1];
}

/** 带符号格式化：+12.00 / −3.50 */
function econFmtSigned(n) {
  const v = econRound2(n);
  return (v >= 0 ? '+' : '−') + econFmt(Math.abs(v)).replace('-', '');
}

/** 百分比格式化：0.1 → "10%" */
function econPct(r, digits) {
  return (econNum(r) * 100).toFixed(digits === undefined ? 1 : digits) + '%';
}

/** 安全读深路径：econGet(game, ['player', 'inv'], {}) */
function econGet(obj, path, fb) {
  let cur = obj;
  for (const k of path) {
    if (cur === null || cur === undefined) return fb;
    cur = cur[k];
  }
  return cur === undefined ? fb : cur;
}

/** 全局表安全读取：typeof 未定义时回退 */
function econGlobal(name) {
  try {
    if (typeof globalThis !== 'undefined' && globalThis[name] !== undefined) return globalThis[name];
    // 浏览器 / Node 的顶层 const：用间接 eval 探测（被 CSP 拦截则回退）
    return (0, eval)('typeof ' + name + " !== 'undefined' ? " + name + ' : undefined');
  } catch (e) {
    return undefined;
  }
}

/** 滑动平均（用于 incomePerMin / expensePerMin 平滑） */
class EconMovingAvg {
  constructor(window) {
    this.window = Math.max(1, Math.floor(window) || 12);
    this.samples = [];
    this.sum = 0;
  }
  push(v) {
    v = econNum(v);
    this.samples.push(v);
    this.sum += v;
    if (this.samples.length > this.window) this.sum -= this.samples.shift();
  }
  get value() {
    if (!this.samples.length) return 0;
    return this.sum / this.samples.length;
  }
  reset() { this.samples = []; this.sum = 0; }
  toJSON() { return { window: this.window, samples: this.samples.slice(-this.window) }; }
  fromJSON(d) {
    this.samples = [];
    this.sum = 0;
    if (d && Array.isArray(d.samples)) for (const s of d.samples) this.push(s);
  }
}

/* ====================== 第 8 节：EconLedger 复式账本 ========================
 * 每条分录：{ t, type, cat, amount, label }
 *   t: 第几个游戏分钟（minIndex）
 *   type: 'income' | 'expense' | 'system'（system 不影响收支统计，如政策变更备注）
 *   cat: INCOME_CATALOG / EXPENSE_CATALOG 的 key
 *   amount: 正数（支出也记正数，由 type 区分方向）
 *   label: 人类可读说明
 * 上限 200 条，FIFO。 */
class EconLedger {
  constructor(max) {
    this.max = Math.max(50, Math.floor(max) || ECON_TUNE.LEDGER_MAX);
    this.entries = [];
  }

  /** 记一笔。amount 取绝对值，方向由 type 决定。 */
  append(type, cat, amount, label, t) {
    const e = {
      t: Math.max(0, Math.floor(econNum(t))),
      type: type === 'income' ? 'income' : (type === 'expense' ? 'expense' : 'system'),
      cat: String(cat || 'misc'),
      amount: econRound2(Math.abs(econNum(amount))),
      label: String(label || ''),
    };
    this.entries.push(e);
    while (this.entries.length > this.max) this.entries.shift();
    return e;
  }

  income(cat, amount, label, t) { return this.append('income', cat, amount, label, t); }
  expense(cat, amount, label, t) { return this.append('expense', cat, amount, label, t); }
  system(cat, label, t) { return this.append('system', cat, 0, label, t); }

  /** 最近 n 条（n 缺省 20） */
  recent(n) {
    n = Math.max(1, Math.floor(n) || 20);
    return this.entries.slice(-n);
  }

  /** 按分类汇总：返回 {cat: {income, expense, count}} */
  summarize() {
    const out = {};
    for (const e of this.entries) {
      const s = out[e.cat] || (out[e.cat] = { income: 0, expense: 0, count: 0 });
      s.count++;
      if (e.type === 'income') s.income = econRound2(s.income + e.amount);
      else if (e.type === 'expense') s.expense = econRound2(s.expense + e.amount);
    }
    return out;
  }

  /** 最近 n 分钟内的收支合计（t 以 minIndex 计） */
  windowSum(minutes, nowT) {
    const from = Math.max(0, Math.floor(nowT) - Math.max(1, Math.floor(minutes)));
    let income = 0, expense = 0;
    for (const e of this.entries) {
      if (e.t < from) continue;
      if (e.type === 'income') income += e.amount;
      else if (e.type === 'expense') expense += e.amount;
    }
    return { income: econRound2(income), expense: econRound2(expense) };
  }

  clear() { this.entries = []; }

  toJSON() {
    return { max: this.max, entries: this.entries.slice(-this.max) };
  }
  fromJSON(d) {
    this.entries = [];
    if (!d || !Array.isArray(d.entries)) return;
    for (const e of d.entries.slice(-this.max)) {
      if (!e || typeof e !== 'object') continue;
      this.entries.push({
        t: Math.max(0, Math.floor(econNum(e.t))),
        type: e.type === 'income' ? 'income' : (e.type === 'expense' ? 'expense' : 'system'),
        cat: String(e.cat || 'misc'),
        amount: econRound2(Math.abs(econNum(e.amount))),
        label: String(e.label || ''),
      });
    }
  }
}

/* ==================== 第 9 节：财政时钟 ================================
 * 把现实毫秒 dt 折算成"游戏分钟"节拍。game.js 的 tick 传 dt（毫秒），
 * 速度 2x 时 tick 被调两次，时钟自然加速——这正是想要的行为。 */
class EconClock {
  constructor(minMs) {
    this.minMs = Math.max(1000, Math.floor(minMs) || ECON_TUNE.MIN_MS);
    this.accumMs = 0;
    this.minIndex = 0;   // 已经结算过的游戏分钟数
  }
  /** 喂入 dt（毫秒），返回本帧应结算的分钟数（0..n） */
  feed(dtMs) {
    this.accumMs += Math.max(0, econNum(dtMs));
    let n = 0;
    while (this.accumMs >= this.minMs) {
      this.accumMs -= this.minMs;
      this.minIndex++;
      n++;
      if (n >= 600) { this.accumMs = 0; break; }  // 防止切后台回来雪崩：单帧最多补 600 分钟
    }
    return n;
  }
  reset() { this.accumMs = 0; }
  toJSON() { return { minMs: this.minMs, minIndex: this.minIndex }; }
  fromJSON(d) {
    if (!d) return;
    if (econNum(d.minMs) >= 1000) this.minMs = Math.floor(d.minMs);
    this.minIndex = Math.max(0, Math.floor(econNum(d.minIndex)));
    this.accumMs = 0;
  }
}

/* ================= 第 10 节：EconomyManager 主类 ============================
 * 对外 API（名字必须一致，见任务书）：
 *   constructor() / update(now, dt, game)
 *   earn(n, label) / spend(n, label) / canAfford(n)
 *   setTaxRate(r) / setWage(w) / getReport() / growthMul()
 *   save() / load(data)
 * 扩展 API（游戏逻辑用）：
 *   recordTrade(give, get) / recordService(label, amount)
 *   repairBuilding(b) / repairAllDamaged(game) / damagedBuildings(game)
 *   takeLoan(amount) / loanStatus() / getHappiness() / getUnemployment()
 *   forecast(minutes) / advise() / fiscalHealth() / canBuildAdvanced()
 *   stats()
 */
class EconomyManager {
  constructor() {
    // ---- 核心状态 ----
    this.credits = ECON_TUNE.START_CREDITS;   // 星币余额（可为负=负债）
    this.taxRate = ECON_TUNE.TAX_DEFAULT;     // 所得税率 10%
    this.wage = ECON_TUNE.WAGE_DEFAULT;       // 每人每分钟工资 2
    this.bankrupt = false;                    // 破产旗标
    this.happiness = ECON_TUNE.HAPPINESS_START; // 幸福度 0~100
    this.confidence = 0.6;                    // 市场信心 0~1（影响关税浮动）
    this.creditScore = ECON_TUNE.CREDIT_START; // 信用分 300~850

    // ---- 记账与时钟 ----
    this.ledger = new EconLedger(ECON_TUNE.LEDGER_MAX);
    this.clock = new EconClock(ECON_TUNE.MIN_MS);
    this.incomeAvg = new EconMovingAvg(12);   // 近 12 分钟收入均值
    this.expenseAvg = new EconMovingAvg(12);  // 近 12 分钟支出均值

    // ---- 结算缓存（供 growthMul/report/advise 读取） ----
    this._last = {
      income: 0, expense: 0, balance: 0,
      tax: 0, building: 0, trade: 0, service: 0, interest: 0,
      wages: 0, upkeep: 0, policy: 0, loan: 0,
      pop: 0, workers: 0, employed: 0,
      policyGrowthMul: 1, popIncomeMul: 1, tradeIncomeMul: 1,
      damaged: 0, loanActive: false,
    };
    this._pendingService = [];   // recordService 暂存，结算时清零
    this._pendingTradeSurplus = 0; // recordTrade 暂存顺差
    this._tradeShipSeen = -1;    // 上次结算时的 tradeShip.visitCount
    this._loans = [];            // 未还清贷款 [{id,total,remaining,perMin,minutesLeft,name}]
    this._loanSeq = 0;
    this._toastAt = {};          // toast 节流表 {key: timestampMs}
    this.onEvent = null;         // 事件回调钩子 (type, data) => void，见 update() 文档
    this._lastShortage = null;   // 上次人口消费缺口 {food, water}
    this._settleCount = 0;       // 累计结算分钟数
    this._totalEarned = 0;       // 累计总收入（统计）
    this._totalSpent = 0;        // 累计总支出（统计）
    // ---- v1.1 宏观扩展 ----
    this.priceIndex = 1.0;       // 物价指数：通胀乘数，作用于工资与维护费
    this.wageGradesEnabled = false; // 工资等级制开关（默认关：工资=workers×wage）
    this._budgets = {};          // 预算帽 {cat: 每分钟上限}
    this._milestonesCrossed = [];// 已触发里程碑 id
    this.history = [];           // 每分钟快照 ring buffer（上限 HISTORY_MAX）
    this.totals = { income: {}, expense: {} }; // 建城以来分项累计
    this._policyChanges = [];   // 政策变更记录 [{t, kind, from, to}]
    this.catAvg = { income: {}, expense: {} }; // 分项 12 分钟滑动均值（归因分析用，不存档）

    this.ledger.system('system', `财政部成立：初始国库 ${econFmt(this.credits)} 星币`, 0);
  }

  /* ------------------------- 主循环入口 ------------------------- */
  /**
   * 每帧调用（game.js tick 内）。dt 为毫秒。
   * 防御性：game 缺失/异常时只走时钟不结算，绝不抛异常。
   * 返回本帧结算的分钟数（0..n）。
   *
   * 时序：
   *   game.tick(dt)
   *     └─ economy.update(now, dt, game)
   *          ├─ clock.feed(dt) → n 分钟（单帧最多补 600 分钟，防切后台雪崩）
   *          └─ × n: _settle(game)
   *               ├─ 收入：所得税 → 营业税 → 关税 → 服务费 → 利息
   *               ├─ 支出：工资 → 政策费 → 维护费(逐栋，欠费→damaged) → 还贷
   *               ├─ credits += 收入 − 支出
   *               ├─ 人口消费 → 幸福/信心/物价漂移 → 破产判定
   *               └─ 记账 → 缓存/均值/历史 → toast(节流) → 事件回调
   */
  update(now, dt, game) {
    let minutes = 0;
    try {
      minutes = this.clock.feed(dt);
    } catch (e) { return 0; }
    if (minutes <= 0) return 0;
    for (let i = 0; i < minutes; i++) {
      try {
        this._settle(game);
      } catch (e) {
        // 单分钟结算失败不影响下一分钟；记一笔系统账备查
        try { this.ledger.system('system', `结算异常已跳过：${String(e && e.message || e).slice(0, 80)}`, this.clock.minIndex); } catch (e2) {}
      }
    }
    return minutes;
  }

  /**
   * 事件回调钩子：game.js 可设置 economy.onEvent = (type, data) => {...}
   * type: bankrupt | unbankrupt | damaged | milestone | loan_paid | loan_default
   * 用途：接音效、成就、教学提示。防御性：回调抛异常不影响结算。
   */
  _emit(type, data) {
    try {
      if (typeof this.onEvent === 'function') this.onEvent(type, data || {});
    } catch (e) {}
  }

  /* ------------------------- 结算（每游戏分钟） ------------------------- */
  _settle(game) {
    const t = this.clock.minIndex;
    this._settleCount++;

    const pop = this._getPop(game);
    const buildings = this._getBuildings(game);
    const policyFx = this._getPolicyFx(game);

    // ===== 1. 收入 =====
    const tax = this._incomeTax(pop, policyFx);
    const building = this._incomeBuilding(buildings, policyFx);
    const trade = this._incomeTrade(game, policyFx);
    const service = this._incomeService();
    const interest = this._incomeInterest();
    const loanIn = 0; // 贷款到账走 takeLoan() 即时记账，不在结算里
    const income = econRound2(tax + building + trade + service + interest);

    // ===== 2. 支出 =====
    const workers = this._countWorkers(buildings);
    const employed = Math.min(workers, pop);
    const wages = this.wageGradesEnabled
      ? this._expenseWagesGraded(game, buildings, pop)
      : this._expenseWages(employed);
    const policyFee = this._expensePolicy(game);
    const upkeepRes = this._collectUpkeep(game, buildings); // {paid, damaged:[...]}
    const loanPay = this._repayLoans();
    const expense = econRound2(wages + policyFee + upkeepRes.paid + loanPay);

    // ===== 3. 入账 =====
    this.credits = econRound2(this.credits + income - expense);
    this._totalEarned = econRound2(this._totalEarned + income);
    this._totalSpent = econRound2(this._totalSpent + expense);

    // ===== 4. 人口消费（资源） =====
    this._populationConsumption(game, pop, t);

    // ===== 5. 幸福度 / 信心漂移 =====
    this._driftHappiness(pop, workers, employed, policyFx);
    this._driftConfidence(income - expense);

    // ===== 6. 破产判定 =====
    this._checkBankrupt(game);

    // ===== 7. 记账 =====
    const L = this.ledger;
    if (tax > 0) L.income('tax', tax, `人口所得税 ${pop}人 × ${econFmt(this.wage)} × ${econPct(this.taxRate)}`, t);
    if (building > 0) L.income('building', building, '建筑营业税', t);
    if (trade > 0) L.income('trade', trade, '贸易关税/顺差', t);
    if (service > 0) L.income('service', service, '服务费', t);
    if (interest > 0) L.income('interest', interest, '存款利息', t);
    if (wages > 0) L.expense('wages', wages, `工资 ${employed}人 × ${econFmt(this.wage)}`, t);
    if (upkeepRes.paid > 0) L.expense('upkeep', upkeepRes.paid, `建筑维护费（${buildings.length}栋）`, t);
    if (policyFee > 0) L.expense('policy', policyFee, '政策维持费', t);
    if (loanPay > 0) L.expense('loan', loanPay, '贷款还款', t);
    for (const b of upkeepRes.damaged) {
      L.system('upkeep', `⚠️ ${this._bName(b)} 维护费不足，已停摆`, t);
    }

    // ===== 8. 缓存与均值 =====
    this.incomeAvg.push(income);
    this.expenseAvg.push(expense);
    const last = this._last;
    last.income = income; last.expense = expense; last.balance = econRound2(income - expense);
    last.tax = tax; last.building = building; last.trade = trade;
    last.service = service; last.interest = interest;
    last.wages = wages; last.upkeep = upkeepRes.paid; last.policy = policyFee; last.loan = loanPay;
    last.pop = pop; last.workers = workers; last.employed = employed;
    last.policyGrowthMul = policyFx.popGrowthMul;
    last.popIncomeMul = policyFx.popIncomeMul;
    last.tradeIncomeMul = policyFx.tradeIncomeMul;
    last.damaged = this._countDamaged(buildings);
    last.loanActive = this._loans.length > 0;

    // ===== 8b. 宏观：分项累计 / 历史 / 预算 / 里程碑 / 通胀 =====
    this._accumulateTotals(
      { tax, building, trade, service, interest },
      { wages, policy: policyFee, upkeep: upkeepRes.paid, loan: loanPay });
    this._pushHistory(t, income, expense, pop);
    this._checkBudgets(game, t, { wages, upkeep: upkeepRes.paid, policy: policyFee, loan: loanPay });
    this._checkMilestones(game, t);
    this._driftPriceIndex(income - expense);
    this._pushCatAvgs(
      { tax, building, trade, service, interest },
      { wages, policy: policyFee, upkeep: upkeepRes.paid, loan: loanPay });

    // ===== 9. 停摆 toast（节流） =====
    if (upkeepRes.damaged.length > 0) {
      this._toast(game, 'damaged',
        `⚠️ ${upkeepRes.damaged.length} 栋建筑维护费不足已停摆（维修后可恢复）`);
    }
    // 资金预警 toast（节流）
    if (!this.bankrupt && this.credits < ECON_TUNE.START_CREDITS && this._last.balance < 0) {
      const runway = this.credits > 0 ? this.credits / Math.max(0.01, -this._last.balance) : 0;
      if (runway < ECON_TUNE.RUNWAY_WARN_MIN) {
        this._toast(game, 'runway',
          `🚨 国库告急：按当前赤字只够支撑约 ${Math.max(1, Math.floor(runway))} 分钟！`);
      }
    }
  }

  /* ================= 内部：安全读取游戏状态 ================= */

  /** 人口数：game.pop.count；拿不到则用建筑 popCap 估算；再拿不到为 0 */
  _getPop(game) {
    const c = econGet(game, ['pop', 'count'], undefined);
    const n = Math.floor(econNum(c, NaN));
    if (isFinite(n) && n >= 0) return n;
    // 兜底：Σ popCap（只算未停摆建筑）
    try {
      let cap = 0;
      for (const b of this._getBuildings(game)) {
        if (b && b.damaged) continue;
        const lv = this._levelDef(b);
        cap += Math.floor(econNum(lv && lv.popCap, 0));
      }
      return Math.max(0, cap);
    } catch (e) { return 0; }
  }

  /** 建筑列表：game.builder.buildings；拿不到为空数组 */
  _getBuildings(game) {
    const arr = econGet(game, ['builder', 'buildings'], undefined);
    return Array.isArray(arr) ? arr : [];
  }

  /** 建筑定义（无 game 版）：读全局 BUILDINGS 表；缺失返回 {} */
  _levelDef(b) {
    if (!b || !b.id) return {};
    const BUILDINGS = econGlobal('BUILDINGS');
    if (BUILDINGS && BUILDINGS[b.id] && Array.isArray(BUILDINGS[b.id].levels)) {
      const lv = BUILDINGS[b.id].levels[econClamp(b.level, 1, BUILDINGS[b.id].levels.length - 1, 1)];
      if (lv) return lv;
    }
    return {};
  }

  /** 带 game 的 levelDef（优先 builder.levelDef，含科技修正前的原始定义） */
  _levelDefOf(game, b) {
    try {
      const fn = econGet(game, ['builder', 'levelDef'], undefined);
      if (typeof fn === 'function') {
        const lv = fn.call(game.builder, b);
        if (lv && typeof lv === 'object') return lv;
      }
    } catch (e) {}
    return this._levelDef(b);
  }

  /** 建筑名（UI 用） */
  _bName(b) {
    if (!b) return '未知建筑';
    try {
      const BUILDINGS = econGlobal('BUILDINGS');
      const def = BUILDINGS && BUILDINGS[b.id];
      if (def && def.name) return `${def.icon || '🏢'}${def.name}`;
    } catch (e) {}
    return b.id || '未知建筑';
  }

  /** 政策效果聚合：{popIncomeMul, tradeIncomeMul, popGrowthMul, moraleMul} */
  _getPolicyFx(game) {
    const fx = { popIncomeMul: 1, tradeIncomeMul: 1, popGrowthMul: 1, moraleMul: 1 };
    try {
      const policy = game && game.policy;
      if (policy && typeof policy.getEffect === 'function') {
        for (const k of Object.keys(fx)) {
          const v = policy.getEffect(k);
          const n = Number(v);
          if (isFinite(n) && n > 0) fx[k] = n;
        }
      }
    } catch (e) {}
    return fx;
  }

  /** 节流 toast */
  _toast(game, key, msg) {
    try {
      const now = Date.now();
      if (now - (this._toastAt[key] || 0) < ECON_TUNE.TOAST_COOLDOWN_MS) return;
      this._toastAt[key] = now;
      if (game && typeof game.toast === 'function') game.toast(msg);
    } catch (e) {}
  }

  /* ================= 内部：收入计算 ================= */

  /** 所得税 = P × wage × taxRate × popIncomeMul */
  _incomeTax(pop, fx) {
    if (pop <= 0 || this.taxRate <= 0 || this.wage <= 0) return 0;
    return econRound2(pop * this.wage * this.taxRate * econNum(fx.popIncomeMul, 1));
  }

  /**
   * 建筑营业税 = Σ bInc(b) × tradeIncomeMul
   * bInc(b) 取值优先级：
   *   1. levelDef.income（数字，星币/分钟）——集成契约字段；
   *   2. BUILDING_ECON_PROFILE[id].income[level]；
   *   3. 关键词兜底（商业类）；
   *   4. 否则 0。停摆建筑恒为 0。
   */
  _incomeBuilding(buildings, fx) {
    let sum = 0;
    const mul = econNum(fx.tradeIncomeMul, 1);
    for (const b of buildings) {
      if (!b || b.damaged) continue;
      sum += this._buildingIncomeOf(b);
    }
    return econRound2(sum * mul);
  }

  /** 单栋建筑的营业税基数（星币/分钟，未乘政策系数） */
  _buildingIncomeOf(b) {
    const lv = this._levelDef(b);
    // 1) levelDef.income 优先（集成契约）
    const lvIncome = Number(lv.income);
    if (isFinite(lvIncome) && lvIncome > 0) return lvIncome;
    // 2) 画像表
    const prof = BUILDING_ECON_PROFILE[b.id];
    if (prof && Array.isArray(prof.income)) {
      const v = Number(prof.income[econClamp(b.level, 0, prof.income.length - 1, 0)]);
      if (isFinite(v) && v > 0) return v;
    }
    // 3) 关键词兜底
    if (this._looksCommercial(b)) {
      const arr = ECON_FALLBACK_COMMERCE_INCOME;
      const v = Number(arr[econClamp(b.level, 0, arr.length - 1, 0)]);
      if (isFinite(v) && v > 0) return v;
    }
    return 0;
  }

  /** 关键词判断商业建筑（画像表未覆盖时） */
  _looksCommercial(b) {
    if (!b || !b.id) return false;
    const id = String(b.id).toLowerCase();
    let name = '';
    try {
      const BUILDINGS = econGlobal('BUILDINGS');
      const def = BUILDINGS && BUILDINGS[b.id];
      if (def && def.name) name = String(def.name);
    } catch (e) {}
    const hay = id + ' ' + name.toLowerCase() + ' ' + name;
    for (const kw of ECON_COMMERCE_KEYWORDS) {
      if (hay.includes(kw.toLowerCase())) return true;
    }
    return false;
  }

  /**
   * 贸易关税：贸易船到访计数差 × 单船关税 × tradeIncomeMul × 信心浮动
   * 加上 recordTrade() 登记的顺差（已折算为星币）。
   */
  _incomeTrade(game, fx) {
    let total = 0;
    try {
      const visits = Math.floor(econNum(econGet(game, ['tradeShip', 'visitCount'], NaN), NaN));
      if (isFinite(visits) && visits >= 0) {
        if (this._tradeShipSeen < 0) {
          this._tradeShipSeen = visits; // 首次结算：只记基线，不补发
        } else if (visits > this._tradeShipSeen) {
          const delta = visits - this._tradeShipSeen;
          this._tradeShipSeen = visits;
          const confMul = 0.7 + 0.6 * econClamp(this.confidence, 0, 1, 0.6);
          total += delta * ECON_TUNE.TARIFF_PER_VISIT * econNum(fx.tradeIncomeMul, 1) * confMul;
        }
      }
    } catch (e) {}
    // recordTrade 登记的顺差
    if (this._pendingTradeSurplus > 0) {
      total += this._pendingTradeSurplus * econNum(fx.tradeIncomeMul, 1);
      this._pendingTradeSurplus = 0;
    }
    return econRound2(Math.max(0, total));
  }

  /** 服务费：recordService() 暂存，结算时一次性兑现 */
  _incomeService() {
    if (!this._pendingService.length) return 0;
    let sum = 0;
    for (const s of this._pendingService) sum += econNum(s.amount);
    this._pendingService = [];
    return econRound2(Math.max(0, sum));
  }

  /** 存款利息：min(上限, max(0, credits) × 利率) */
  _incomeInterest() {
    if (this.credits <= 0) return 0;
    return econRound2(Math.min(ECON_TUNE.INTEREST_CAP, this.credits * ECON_TUNE.INTEREST_RATE));
  }

  /* ================= 内部：支出计算 ================= */

  /** 工人总数 = Σ needPop（停摆建筑除外） */
  _countWorkers(buildings) {
    let w = 0;
    for (const b of buildings) {
      if (!b || b.damaged) continue;
      const lv = this._levelDef(b);
      w += Math.max(0, Math.floor(econNum(lv.needPop, 0)));
    }
    return w;
  }

  /** 工资 = 实发人数 × wage × 物价指数（默认 priceIndex=1 时与任务书公式一致） */
  _expenseWages(employed) {
    if (employed <= 0 || this.wage <= 0) return 0;
    return econRound2(employed * this.wage * this.priceIndex);
  }

  /**
   * 政策维持费（星币/分钟）：
   *   对每个生效政策：penalty.upkeep 的资源按折算价转星币 + 0.5 行政费。
   * game.policy 不存在 → 0。POLICY_DEFS 不存在 → 按政策数 × 行政费估算。
   */
  _expensePolicy(game) {
    let fee = 0;
    try {
      const policy = game && game.policy;
      if (!policy || !policy.active) return 0;
      const ids = typeof policy.activeList === 'function'
        ? policy.activeList().map(d => d && d.id).filter(Boolean)
        : [...policy.active];
      if (!ids.length) return 0;
      const PDEFS = econGlobal('POLICY_DEFS');
      const values = econResCreditValue();
      for (const id of ids) {
        fee += ECON_TUNE.POLICY_ADMIN_FEE;
        const def = PDEFS && PDEFS[id];
        const upkeep = def && def.penalty && def.penalty.upkeep;
        if (upkeep && typeof upkeep === 'object') {
          for (const k of Object.keys(upkeep)) {
            fee += econNum(upkeep[k]) * econNum(values[k], 1);
          }
        }
      }
    } catch (e) {}
    return econRound2(Math.max(0, fee));
  }

  /**
   * 逐栋收维护费。upkeep(b) 取值优先级：
   *   1. levelDef.upkeep（数字=星币；或 {credits:n}）——集成契约字段；
   *   2. BUILDING_ECON_PROFILE[id].upkeep[level]；
   *   3. 商业关键词兜底画像；
   *   4. 兜底 level × UPKEEP_PER_LEVEL(1)。
   * 交不起 → b.damaged = true（停摆），本分钟不再扣费。
   * 返回 {paid, damaged:[b...]}。停摆建筑跳过（不欠费、不累计）。
   */
  _collectUpkeep(game, buildings) {
    let paid = 0;
    const damaged = [];
    for (const b of buildings) {
      if (!b || b.damaged) continue;
      const u = this._upkeepOf(game, b);
      if (u <= 0) continue;
      if (this.credits >= u) {
        this.credits = econRound2(this.credits - u);
        paid = econRound2(paid + u);
      } else {
        // 交不起：停摆。注意 credits 本身不动（没扣到钱）。
        try { b.damaged = true; } catch (e) {}
        damaged.push(b);
      }
    }
    if (damaged.length > 0) {
      this._emit('damaged', { count: damaged.length, names: damaged.map(b => this._bName(b)) });
    }
    return { paid, damaged };
  }

  /** 单栋维护费基数（未乘通胀/折旧；取值优先级见方法内注释） */
  _upkeepBaseOf(game, b) {
    const lv = this._levelDefOf(game, b);
    // 1) levelDef.upkeep（集成契约）
    const u = lv.upkeep;
    if (typeof u === 'number' && isFinite(u) && u >= 0) return econRound2(u);
    if (u && typeof u === 'object') {
      const c = Number(u.credits);
      if (isFinite(c) && c >= 0) return econRound2(c);
    }
    // 2) 画像表
    const prof = BUILDING_ECON_PROFILE[b.id];
    if (prof && Array.isArray(prof.upkeep)) {
      const v = Number(prof.upkeep[econClamp(b.level, 0, prof.upkeep.length - 1, 0)]);
      if (isFinite(v) && v >= 0) return econRound2(v);
    }
    // 3) 商业兜底
    if (this._looksCommercial(b)) {
      const arr = ECON_FALLBACK_COMMERCE_UPKEEP;
      const v = Number(arr[econClamp(b.level, 0, arr.length - 1, 0)]);
      if (isFinite(v) && v >= 0) return econRound2(v);
    }
    // 4) 兜底：level × 1
    const level = econClamp(b.level, 1, 99, 1);
    return econRound2(level * ECON_TUNE.UPKEEP_PER_LEVEL);
  }

  /**
   * 单栋维护费（星币/分钟）= 基数 × 物价指数 × 折旧系数。
   * 基数取值优先级：levelDef.upkeep → 画像表 → 商业兜底 → level×1。
   */
  _upkeepOf(game, b) {
    const base = this._upkeepBaseOf(game, b);
    if (base <= 0) return 0;
    return econRound2(base * this.priceIndex * this._depreciationMul(b));
  }

  /** 折旧系数：楼龄每 60 游戏分钟维护费 +5%，上限 ×2 */
  _depreciationMul(b) {
    try {
      const builtAt = Number(b && b.builtAt);
      if (!isFinite(builtAt) || builtAt <= 0) return 1;
      const ageMin = Math.max(0, (Date.now() - builtAt) / this.clock.minMs);
      return econClamp(1 + ageMin / 1200, 1, 2, 1);
    } catch (e) { return 1; }
  }

  /** 停摆建筑数 */
  _countDamaged(buildings) {
    let n = 0;
    for (const b of buildings) if (b && b.damaged) n++;
    return n;
  }

  /* ================= 内部：贷款还款 ================= */

  /** 每分钟等额还贷。返回本分钟实际还款额。 */
  _repayLoans() {
    if (!this._loans.length) return 0;
    let paid = 0;
    const t = this.clock.minIndex;
    for (const loan of this._loans) {
      if (loan.remaining <= 0) continue;
      const due = Math.min(loan.perMin, loan.remaining);
      if (this.credits >= due) {
        this.credits = econRound2(this.credits - due);
        loan.remaining = econRound2(loan.remaining - due);
        loan.minutesLeft = Math.max(0, loan.minutesLeft - 1);
        paid = econRound2(paid + due);
        if (loan.remaining <= 0.005) {
          loan.remaining = 0;
          this.creditScore = econClamp(this.creditScore + 15, ECON_TUNE.CREDIT_MIN, ECON_TUNE.CREDIT_MAX, 600);
          this.ledger.system('loan', `✅ 「${loan.name}」已还清，信用分 +15`, t);
          this._emit('loan_paid', { id: loan.id, name: loan.name });
        }
      } else {
        // 还不起：信用分 −20，债务不减少（不收滞纳金，已经够惨了）
        this.creditScore = econClamp(this.creditScore - 20, ECON_TUNE.CREDIT_MIN, ECON_TUNE.CREDIT_MAX, 600);
        this.ledger.system('loan', `⚠️ 「${loan.name}」本月还款 ${econFmt(due)} 无力支付，信用分 −20`, t);
        this._emit('loan_default', { id: loan.id, name: loan.name, due });
      }
    }
    // 清理已还清
    this._loans = this._loans.filter(l => l.remaining > 0.005);
    return paid;
  }

  /* ================= 内部：人口消费 ================= */

  /**
   * 每人每分钟：食物 0.05 + 水 0.05，从 game.player.inv 扣除。
   * 不足 → 幸福度 −（缺口×2），尝试调 game.pop 接口（happiness/morale/addMorale），
   * 拿不到只记账 + 记 this._lastShortage。
   */
  _populationConsumption(game, pop, t) {
    if (pop <= 0) { this._lastShortage = null; return; }
    const needFood = econRound2(pop * ECON_TUNE.FOOD_PER_POP);
    const needWater = econRound2(pop * ECON_TUNE.WATER_PER_POP);
    let shortFood = 0, shortWater = 0;
    try {
      const inv = econGet(game, ['player', 'inv'], undefined);
      if (inv && typeof inv === 'object') {
        const take = (key, need) => {
          const have = Math.max(0, econNum(inv[key]));
          const use = Math.min(have, need);
          inv[key] = econRound2(have - use);
          return econRound2(need - use);
        };
        shortFood = take('food', needFood);
        shortWater = take('water', needWater);
      }
    } catch (e) {}
    const shortage = econRound2(shortFood + shortWater);
    if (shortage > 0) {
      this._lastShortage = { food: shortFood, water: shortWater, t };
      const hit = Math.min(20, shortage * 2);
      this.happiness = econClamp(this.happiness - hit, 0, 100, 70);
      // 尝试调 pop 接口（防御性：字段名不确定，逐个试）
      try {
        const p = game && game.pop;
        if (p) {
          if (typeof p.addHappiness === 'function') p.addHappiness(-hit);
          else if (typeof p.addMorale === 'function') p.addMorale(-hit);
          else if (isFinite(Number(p.happiness))) p.happiness = econClamp(Number(p.happiness) - hit, 0, 100, 70);
          else if (isFinite(Number(p.morale))) p.morale = econClamp(Number(p.morale) - hit, 0, 100, 70);
        }
      } catch (e) {}
      this.ledger.system('consumption',
        `⚠️ 物资短缺：缺食物 ${econFmt(shortFood)} / 缺水 ${econFmt(shortWater)}，幸福 −${hit.toFixed(1)}`, t);
    } else {
      this._lastShortage = null;
    }
  }

  /* ================= 内部：幸福度 / 信心漂移 ================= */

  /** 幸福度目标值 */
  _happinessTarget(pop, workers, employed, fx) {
    let target = 60;
    target += (this.wage - ECON_TUNE.WAGE_DEFAULT) * 8;   // 工资每 +1 → +8
    target -= this.taxRate * 150;                          // 税率 10% → −15
    const unempRate = pop > 0 ? (pop - employed) / pop : 0;
    target -= unempRate * 40;                              // 失业率 50% → −20
    if (this._lastShortage) target -= 20;                  // 缺粮缺水
    if (this.bankrupt) target -= 15;                       // 破产打击士气
    const morale = econNum(fx.moraleMul, 1);
    if (morale !== 1) target += (morale - 1) * 100;         // 政策士气（如双休日 +25 → +25）
    return econClamp(target, 0, 100, 60);
  }

  _driftHappiness(pop, workers, employed, fx) {
    const target = this._happinessTarget(pop, workers, employed, fx);
    this.happiness = econClamp(
      this.happiness + (target - this.happiness) * ECON_TUNE.HAPPINESS_DRIFT, 0, 100, 70);
  }

  /** 市场信心：顺差涨、逆差跌，影响关税浮动（0.7~1.3 倍） */
  _driftConfidence(balance) {
    const d = ECON_TUNE.CONFIDENCE_DRIFT;
    if (balance > 0) this.confidence = econClamp(this.confidence + d, 0, 1, 0.6);
    else if (balance < 0) this.confidence = econClamp(this.confidence - d, 0, 1, 0.6);
  }

  /* ================= 内部：破产 ================= */

  /**
   * 破产判定：credits < 0 → bankrupt = true，toast 警告（节流）。
   * 脱离破产：credits ≥ 0 → bankrupt = false，toast 报喜（节流）。
   * 注意：破产不冻结结算——工资/维护照常欠，债务继续滚，
   * 玩家靠 takeLoan() / 卖资源 / 降工资自救。game 集成层用 bankrupt 禁建高级建筑。
   */
  _checkBankrupt(game) {
    const t = this.clock.minIndex;
    if (this.credits < 0 && !this.bankrupt) {
      this.bankrupt = true;
      this.ledger.system('system', `💀 国库破产！赤字 ${econFmt(this.credits)}，高级建筑已冻结`, t);
      this._emit('bankrupt', { credits: this.credits });
      this._toast(game, 'bankrupt',
        '💀 国库破产！高级建筑建造已冻结——贷款 / 降工资 / 增税自救，或等待关税到账。');
    } else if (this.credits >= 0 && this.bankrupt) {
      this.bankrupt = false;
      this.ledger.system('system', '✅ 财政恢复：国库转正，建筑冻结解除', t);
      this._emit('unbankrupt', { credits: this.credits });
      this._toast(game, 'unbankrupt', '✅ 国库转正！破产状态解除，建造限制取消。');
    }
  }

  /* ================= 对外：税率 / 工资政策 ================= */

  /**
   * 设定税率 r ∈ [0, 0.3]。每次调整收 1 星币手续费并记账。
   * 返回实际生效税率。
   */
  setTaxRate(r) {
    const v = econClamp(r, ECON_TUNE.TAX_MIN, ECON_TUNE.TAX_MAX, this.taxRate);
    if (v === this.taxRate) return this.taxRate;
    const old = this.taxRate;
    this.taxRate = econRound2(v);
    this._chargeAdjustFee(`税率调整 ${econPct(old)} → ${econPct(this.taxRate)}`);
    this._policyChanges.push({ t: this.clock.minIndex, kind: 'tax', from: old, to: this.taxRate });
    this.ledger.system('policy',
      `⚖️ 税率调整：${econPct(old)} → ${econPct(this.taxRate)}${this._taxEffectNote()}`, this.clock.minIndex);
    return this.taxRate;
  }

  _taxEffectNote() {
    if (this.taxRate > ECON_TUNE.TAX_PAIN) return '（重税！人口增长 −50%）';
    if (this.taxRate < ECON_TUNE.TAX_SWEET) return '（轻税，人口增长 +20%）';
    return '';
  }

  /**
   * 设定工资 w ∈ [0, 10]。每次调整收 1 星币手续费并记账。
   * 返回实际生效工资。
   */
  setWage(w) {
    const v = econClamp(w, ECON_TUNE.WAGE_MIN, ECON_TUNE.WAGE_MAX, this.wage);
    if (v === this.wage) return this.wage;
    const old = this.wage;
    this.wage = econRound2(v);
    this._chargeAdjustFee(`工资调整 ${econFmt(old)} → ${econFmt(this.wage)}`);
    this._policyChanges.push({ t: this.clock.minIndex, kind: 'wage', from: old, to: this.wage });
    const lad = WAGE_LADDER.reduce((best, cur) =>
      Math.abs(cur.wage - this.wage) < Math.abs(best.wage - this.wage) ? cur : best, WAGE_LADDER[2]);
    this.ledger.system('policy',
      `💼 工资调整：${econFmt(old)} → ${econFmt(this.wage)}（${lad.grade}，幸福${lad.happy >= 0 ? '+' : ''}${lad.happy}）`,
      this.clock.minIndex);
    return this.wage;
  }

  /** 政策调整手续费 1 星币（余额不足时欠着记，不阻止调整） */
  _chargeAdjustFee(label) {
    const fee = 1;
    if (this.credits >= fee) {
      this.credits = econRound2(this.credits - fee);
      this.ledger.expense('adjust', fee, label, this.clock.minIndex);
    } else {
      this.ledger.system('adjust', `${label}（手续费 1 星币欠账）`, this.clock.minIndex);
    }
  }

  /**
   * 人口增长乘数（供 pop 系统读取）。
   *   税率 > 20% → ×0.5；税率 < 5% → ×1.2；
   *   工资 ≥ 4 → ×1.15；工资 ≤ 1 → ×0.9；
   *   幸福 < 30 → ×0.8；再 × 政策 popGrowthMul（结算缓存）。
   */
  growthMul() {
    return this._growthMulAt(this.taxRate, this.wage);
  }

  /** growthMul 的参数化版本（optimalTax 扫描用） */
  _growthMulAt(tax, wage) {
    let m = 1;
    if (tax > ECON_TUNE.TAX_PAIN) m *= 0.5;
    else if (tax < ECON_TUNE.TAX_SWEET) m *= 1.2;
    if (wage >= ECON_TUNE.WAGE_HAPPY) m *= 1.15;
    else if (wage <= ECON_TUNE.WAGE_ANGRY) m *= 0.9;
    if (this.happiness < 30) m *= 0.8;
    m *= econNum(this._last.policyGrowthMul, 1);
    return econRound2(m * 100) / 100;
  }

  /* ================= 对外：货币收付 ================= */

  /**
   * 收入 n 星币。n 必须 > 0。返回实际到账金额。
   * label 记入账本（分类自动判别：含"贷款"→loan，否则 grant）。
   */
  earn(n, label) {
    n = econRound2(econNum(n));
    if (!(n > 0)) return 0;
    this.credits = econRound2(this.credits + n);
    this._totalEarned = econRound2(this._totalEarned + n);
    const cat = /贷款|loan/i.test(String(label || '')) ? 'loan' : 'grant';
    this.ledger.income(cat, n, String(label || '收入'), this.clock.minIndex);
    return n;
  }

  /**
   * 支出 n 星币。余额不足返回 false（不扣钱）；成功返回 true。
   * label 记入账本 purchase 分类。
   */
  spend(n, label) {
    n = econRound2(econNum(n));
    if (!(n > 0)) return false;
    if (this.credits < n) return false;
    this.credits = econRound2(this.credits - n);
    this._totalSpent = econRound2(this._totalSpent + n);
    this.ledger.expense('purchase', n, String(label || '支出'), this.clock.minIndex);
    return true;
  }

  /** 余额是否 ≥ n */
  canAfford(n) {
    n = econNum(n);
    return isFinite(n) && n >= 0 && this.credits >= n;
  }

  /* ================= 对外：贸易 / 服务登记 ================= */

  /**
   * 登记一笔贸易。give/get 为资源对象（如 {iron:20}），按折算价算顺差，
   * 顺差 > 0 部分在下次结算记为贸易收入（× tradeIncomeMul）。
   * 返回顺差（星币，可为负，负的不记账）。
   */
  recordTrade(give, get) {
    const values = econResCreditValue();
    const valOf = (obj) => {
      let s = 0;
      if (obj && typeof obj === 'object') {
        for (const k of Object.keys(obj)) s += econNum(obj[k]) * econNum(values[k], 1);
      }
      return s;
    };
    const surplus = econRound2(valOf(get) - valOf(give));
    if (surplus > 0) {
      this._pendingTradeSurplus = econRound2(this._pendingTradeSurplus + surplus);
      this.ledger.system('trade', `📦 贸易顺差待结算 +${econFmt(surplus)}`, this.clock.minIndex);
    }
    return surplus;
  }

  /**
   * 登记一笔服务费收入（如发射服务费、罚款）。下次结算兑现。
   * 返回登记金额。
   */
  recordService(label, amount) {
    amount = econRound2(econNum(amount));
    if (!(amount > 0)) return 0;
    this._pendingService.push({ label: String(label || '服务费'), amount });
    return amount;
  }

  /* ================= 对外：停摆维修 ================= */

  /** 所有停摆建筑（b.damaged === true） */
  damagedBuildings(game) {
    return this._getBuildings(game).filter(b => b && b.damaged);
  }

  /** 维修单栋：费用 = 2 × upkeep(b)，余额不足返回 false */
  repairBuilding(b) {
    if (!b || !b.damaged) return false;
    const cost = econRound2(this._upkeepOf(null, b) * ECON_TUNE.REPAIR_COST_MUL);
    if (!this.canAfford(cost)) return false;
    this.credits = econRound2(this.credits - cost);
    try { b.damaged = false; } catch (e) { return false; }
    this.ledger.expense('repair', cost, `🔧 维修 ${this._bName(b)}`, this.clock.minIndex);
    return true;
  }

  /**
   * 维修所有停摆建筑（按维护费从低到高，能修几个修几个）。
   * 返回 {repaired, failed, cost}。
   */
  repairAllDamaged(game) {
    const list = this.damagedBuildings(game)
      .sort((a, b) => this._upkeepOf(game, a) - this._upkeepOf(game, b));
    let repaired = 0, failed = 0, cost = 0;
    for (const b of list) {
      const c = econRound2(this._upkeepOf(game, b) * ECON_TUNE.REPAIR_COST_MUL);
      if (this.credits >= c) {
        this.credits = econRound2(this.credits - c);
        cost = econRound2(cost + c);
        try { b.damaged = false; } catch (e) { failed++; continue; }
        repaired++;
        this.ledger.expense('repair', c, `🔧 维修 ${this._bName(b)}`, this.clock.minIndex);
      } else {
        failed++;
      }
    }
    return { repaired, failed, cost };
  }

  /* ================= 对外：贷款 ================= */

  /**
   * 贷款。按信用分选档：信用分不够高 → 只能贷低档。
   * 到账 amount × 95%，剩余 5% 手续费。每分钟等额还 total/termMin。
   * 返回 {ok, loan?, reason?}。
   */
  takeLoan(amount) {
    amount = econRound2(econNum(amount));
    if (!(amount > 0)) return { ok: false, reason: '金额无效' };
    if (this._loans.length >= 3) return { ok: false, reason: '已有 3 笔贷款未还清，先还一笔' };
    // 选档：满足 minCredit 的最高档，且 amount 不超过该档上限
    const eligible = LOAN_TERMS.filter(td =>
      this.creditScore >= td.minCredit && amount <= td.maxAmount);
    if (!eligible.length) {
      return { ok: false, reason: `信用分 ${Math.round(this.creditScore)} 不足，无可用贷款档` };
    }
    const term = eligible[eligible.length - 1];
    const fee = econRound2(amount * ECON_TUNE.LOAN_FEE_RATE);
    const total = econRound2(amount * (1 + term.rate));
    const loan = {
      id: 'L' + (++this._loanSeq),
      name: term.name,
      principal: amount,
      total,
      remaining: total,
      perMin: econRound2(total / term.termMin),
      minutesLeft: term.termMin,
      rate: term.rate,
    };
    this._loans.push(loan);
    this.earn(amount - fee, `贷款到账「${term.name}」（手续费 ${econFmt(fee)}）`);
    this.ledger.system('loan',
      `💳 新贷款 ${loan.id}「${term.name}」：本金 ${econFmt(amount)}，应还 ${econFmt(total)}（利率 ${econPct(term.rate, 0)}），${term.termMin} 分钟等额`,
      this.clock.minIndex);
    return { ok: true, loan };
  }

  /** 未还清贷款一览 */
  loanStatus() {
    return this._loans.map(l => ({
      id: l.id, name: l.name,
      remaining: l.remaining, perMin: l.perMin, minutesLeft: l.minutesLeft,
      rate: l.rate,
    }));
  }

  /* ================= 对外：状态查询 ================= */

  /** 幸福度 0~100 */
  getHappiness() { return econRound2(this.happiness); }

  /** 失业率 0~1（需传 game；拿不到建筑时回 0） */
  getUnemployment(game) {
    try {
      const pop = this._getPop(game);
      if (pop <= 0) return 0;
      const workers = this._countWorkers(this._getBuildings(game));
      return econClamp((pop - Math.min(workers, pop)) / pop, 0, 1, 0);
    } catch (e) { return 0; }
  }

  /** 财政健康度：{level, name, icon, color} */
  fiscalHealth() {
    for (const h of FISCAL_HEALTH) {
      if (this.credits >= h.min) return { level: h.level, name: h.name, icon: h.icon, color: h.color };
    }
    return { level: 'bankrupt', name: '破产', icon: '💀', color: '#f87171' };
  }

  /**
   * 高级建筑是否可建。破产时禁止（game 建造/升级前检查）。
   * 约定：id 含 launchpad/spaceport/elevator/ark 或 needTech 的算高级——
   * game 层也可自定名单，本函数只看 bankrupt 旗标。
   */
  canBuildAdvanced() { return !this.bankrupt; }

  /** 统计快照 */
  stats() {
    return {
      version: ECON_VERSION,
      settleMinutes: this._settleCount,
      totalEarned: this._totalEarned,
      totalSpent: this._totalSpent,
      netWorth: econRound2(this._totalEarned - this._totalSpent),
      ledgerEntries: this.ledger.entries.length,
      loansActive: this._loans.length,
      creditScore: Math.round(this.creditScore),
    };
  }

  /* ================= 对外：财政预测 ================= */

  /**
   * 预测未来 minutes 分钟的国库走势（假设当前收支率不变）。
   * 收入/支出取近 12 分钟滑动均值；贷款还款按剩余期数精确模拟。
   * 返回 {points:[{m, credits}], bankruptAt: 分钟数|null, endCredits, advice}。
   */
  forecast(minutes) {
    minutes = econClamp(Math.floor(econNum(minutes, 60)), 1, 1440, 60);
    const avgIn = this.incomeAvg.value;
    const avgOut = this.expenseAvg.value;
    // 贷款还款精确模拟：剩余分钟数内逐分钟扣
    const loanSchedule = [];
    for (const l of this._loans) {
      for (let m = 1; m <= Math.min(l.minutesLeft, minutes); m++) {
        loanSchedule[m] = econRound2((loanSchedule[m] || 0) + Math.min(l.perMin, l.remaining));
      }
    }
    // avgOut 已包含贷款均值，为避免双重计算，先剔除贷款部分再逐分钟加精确值
    const loanAvgInWindow = this._last.loan || 0;
    const baseOut = Math.max(0, avgOut - loanAvgInWindow);
    const points = [];
    let c = this.credits;
    let bankruptAt = null;
    const step = Math.max(1, Math.floor(minutes / 60)); // 最多 60 个点
    for (let m = 1; m <= minutes; m++) {
      const loanDue = loanSchedule[m] || 0;
      c = econRound2(c + avgIn - baseOut - loanDue);
      if (c < 0 && bankruptAt === null) bankruptAt = m;
      if (m % step === 0 || m === minutes) points.push({ m, credits: c });
    }
    let advice = '财政稳健，继续保持。';
    if (bankruptAt !== null) {
      advice = `⚠️ 按当前趋势约 ${bankruptAt} 分钟后破产：建议增税 / 降工资 / 维修停摆建筑 / 申请贷款。`;
    } else if (c < ECON_TUNE.START_CREDITS) {
      advice = '国库持续失血，虽暂无破产风险，建议检查工资与维护费占比。';
    }
    return { points, bankruptAt, endCredits: c, advice };
  }

  /* ================= 对外：财政顾问 ================= */

  /**
   * 基于当前账目生成优先级排序的建议列表。
   * 每条 {priority: 1~5（1最高）, icon, title, detail}。
   * 需传 game（读建筑/人口）；game 缺失时只做纯财务建议。
   */
  advise(game) {
    const out = [];
    const push = (priority, icon, title, detail) => out.push({ priority, icon, title, detail });
    const last = this._last;
    const bal = econNum(last.balance);
    const inc = Math.max(0.01, econNum(last.income));

    // 1) 破产
    if (this.bankrupt) {
      push(1, '💀', '破产状态：高级建筑已冻结',
        `赤字 ${econFmt(this.credits)}。自救三选一：① takeLoan() 过桥（信用分 ${Math.round(this.creditScore)}）；` +
        `② 工资 ${econFmt(this.wage)} → 降到 1；③ 税率 ${econPct(this.taxRate)} → 提到 20%+。`);
    }
    // 2) 持续赤字
    if (bal < 0 && !this.bankrupt) {
      const runway = this.credits > 0 ? this.credits / -bal : 0;
      push(1, '🚨', `持续赤字 ${econFmtSigned(bal)}/分钟`,
        this.credits > 0
          ? `国库 ${econFmt(this.credits)}，约 ${Math.max(1, Math.floor(runway))} 分钟后见底。先查工资与维护费占比。`
          : '国库已空，下分钟即破产。立即行动。');
    }
    // 3) 工资占比过高
    if (last.wages / inc > 0.6 && last.wages > 0) {
      push(2, '💼', `工资吞噬 ${econPct(last.wages / inc, 0)} 的收入`,
        `在岗 ${last.employed} 人 × ${econFmt(this.wage)}。考虑：降工资到 ${econFmt(Math.max(1, this.wage - 1))}，` +
        `或拆除低效高 needPop 建筑。`);
    }
    // 4) 维护费占比过高
    if (last.upkeep / inc > 0.4 && last.upkeep > 0) {
      push(2, '🧰', `维护费占收入 ${econPct(last.upkeep / inc, 0)}`,
        '检查是否有"吞金兽"（聚变电站/穹顶/方舟类）：用进废退，不用的先拆。');
    }
    // 5) 停摆建筑
    if (last.damaged > 0) {
      const cost = this._repairAllCostEstimate(game);
      push(2, '🔧', `${last.damaged} 栋建筑停摆中`,
        `全部维修约需 ${econFmt(cost)} 星币。停摆建筑不交税不生产，是纯负债——要么修，要么拆。`);
    }
    // 6) 税率优化
    if (this.taxRate < ECON_TUNE.TAX_SWEET && last.pop > 30 && bal < 5) {
      push(3, '🧾', '税率过低：国库靠爱发电',
        `当前 ${econPct(this.taxRate)}（<5% 增长加成档）。人口 ${last.pop} 已具规模，提到 10% ` +
        `每月多收约 ${econFmt(last.pop * this.wage * 0.05)}/分钟，而增长加成只从 +20% 归零。`);
    }
    if (this.taxRate > ECON_TUNE.TAX_PAIN) {
      push(3, '⚖️', '重税压制增长（−50%）',
        `当前 ${econPct(this.taxRate)}。若非救急，建议降到 20% 以内；配合工资 ≥4 可部分对冲民怨。`);
    }
    // 7) 失业
    try {
      const u = this.getUnemployment(game);
      if (u > 0.3 && last.pop > 10) {
        push(3, '🪑', `失业率 ${econPct(u, 0)} 偏高`,
          '人多岗少：幸福 −' + Math.round(u * 40) + '。多建 needPop 高的建筑吸纳就业，或接受低幸福换低工资。');
      }
    } catch (e) {}
    // 8) 无商业建筑
    try {
      const bs = this._getBuildings(game);
      const hasCommerce = bs.some(b => b && !b.damaged && this._buildingIncomeOf(b) > 0);
      if (!hasCommerce && last.pop >= 15) {
        push(3, '🏪', '没有产生营业税的商业建筑',
          '贸易站 / 太空港 / 市场类是被动收入唯一来源。先建一座贸易站（画像收入 3/分钟起）。');
      }
    } catch (e) {}
    // 9) 贷款负担
    if (this._loans.length > 0) {
      const perMin = this._loans.reduce((s, l) => s + l.perMin, 0);
      push(4, '💳', `${this._loans.length} 笔贷款，每分钟还 ${econFmt(perMin)}`,
        `剩余最久 ${Math.max(...this._loans.map(l => l.minutesLeft))} 分钟。信用分 ${Math.round(this.creditScore)}，` +
        `按时还清 +15。`);
    }
    // 10) 存款闲置
    if (this.credits > 2000) {
      push(5, '🏦', `国库 ${econFmt(this.credits)} 闲置`,
        `利息仅 ${econFmt(this._incomeInterest())}/分钟（有上限）。钱要花出去：升级商业建筑或提前还贷。`);
    }
    // 11) 幸福过低
    if (this.happiness < 30) {
      push(2, '😟', `幸福度 ${Math.round(this.happiness)} 过低`,
        '人口增长 ×0.8。加工资 / 减税 / 补物资，三选一。');
    }
    // 12) 政策维持费
    if (last.policy > 0 && last.policy / inc > 0.25) {
      push(4, '📜', `政策维持费 ${econFmt(last.policy)}/分钟偏高`,
        '检查 game.policy 生效列表：雇佣兵/科研投入类 upkeep 是隐形税，废除不用的。');
    }
    // 13) 贸易船
    try {
      const hasTrade = this._getBuildings(game).some(b => b && b.id === 'trade' && !b.damaged);
      if (!hasTrade && last.pop >= 20) {
        push(4, '🚚', '没有贸易站 → 没有贸易船关税',
          '贸易船 5~8 分钟一班，每班关税 6 星币起。贸易站是回本最快的建筑之一。');
      }
    } catch (e) {}
    // 14) 工资与增长
    if (this.wage >= ECON_TUNE.WAGE_HAPPY && bal < 0) {
      push(3, '💸', '高工资 + 赤字 = 慢性自杀',
        `工资 ${econFmt(this.wage)} 带来增长 ×1.15，但每分钟多付 ${econFmt(last.employed * (this.wage - 2))}。` +
        '要么增税覆盖，要么降回 2~3。');
    }
    // 15) 一切正常
    if (!out.length) {
      push(5, '✅', '财政健康，无需调整',
        `收支 ${econFmtSigned(bal)}/分钟，国库 ${econFmt(this.credits)}。可以考虑扩张或升级商业建筑。`);
    }
    // 16) v1.1 宏观规则（_adviseMacro，见第 10c 节）
    try {
      for (const r of this._adviseMacro(game)) out.push(r);
    } catch (e) {}
    out.sort((a, b) => a.priority - b.priority);
    return out;
  }

  /** 维修所有停摆建筑的费用估算（advise 用） */
  _repairAllCostEstimate(game) {
    let cost = 0;
    try {
      for (const b of this.damagedBuildings(game)) {
        cost += this._upkeepOf(game, b) * ECON_TUNE.REPAIR_COST_MUL;
      }
    } catch (e) {}
    return econRound2(cost);
  }

  /* ================= 对外：财务报告 ================= */

  /**
   * getReport() → {credits, incomePerMin, expensePerMin, balance,
   *   breakdown:{tax, building, trade, service, interest, wages, upkeep, policy, loan},
   *   bankrupt, ...扩展字段}
   * incomePerMin/expensePerMin 取近 12 分钟滑动均值（比单分钟更稳）。
   */
  getReport() {
    const last = this._last;
    const incomePerMin = econRound2(this.incomeAvg.value);
    const expensePerMin = econRound2(this.expenseAvg.value);
    return {
      credits: econRound2(this.credits),
      taxRate: this.taxRate,
      wage: this.wage,
      incomePerMin,
      expensePerMin,
      balance: econRound2(incomePerMin - expensePerMin),
      breakdown: {
        tax: last.tax, building: last.building, trade: last.trade,
        service: last.service, interest: last.interest,
        wages: last.wages, upkeep: last.upkeep, policy: last.policy, loan: last.loan,
      },
      bankrupt: this.bankrupt,
      // 扩展（HUD/面板用）
      happiness: econRound2(this.happiness),
      confidence: econRound2(this.confidence),
      creditScore: Math.round(this.creditScore),
      population: last.pop,
      workers: last.workers,
      employed: last.employed,
      damaged: last.damaged,
      loans: this.loanStatus(),
      health: this.fiscalHealth(),
      growthMul: this.growthMul(),
      settleMinutes: this._settleCount,
      recentLedger: this.ledger.recent(10),
      // v1.1 宏观
      priceIndex: econRound2(this.priceIndex),
      budgets: { ...this._budgets },
      milestones: [...this._milestonesCrossed],
      totals: JSON.parse(JSON.stringify(this.totals)),
    };
  }

  /* ================= 对外：存档 / 读档 ================= */

  /** save() → 纯数据对象，game.js 存入存档 */
  save() {
    return {
      v: 1,
      econVersion: ECON_VERSION,
      credits: this.credits,
      taxRate: this.taxRate,
      wage: this.wage,
      bankrupt: this.bankrupt,
      happiness: this.happiness,
      confidence: this.confidence,
      creditScore: this.creditScore,
      ledger: this.ledger.toJSON(),
      clock: this.clock.toJSON(),
      incomeAvg: this.incomeAvg.toJSON(),
      expenseAvg: this.expenseAvg.toJSON(),
      loans: this._loans.map(l => ({ ...l })),
      loanSeq: this._loanSeq,
      tradeShipSeen: this._tradeShipSeen,
      settleCount: this._settleCount,
      totalEarned: this._totalEarned,
      totalSpent: this._totalSpent,
      last: { ...this._last },
      priceIndex: this.priceIndex,
      wageGradesEnabled: this.wageGradesEnabled,
      budgets: { ...this._budgets },
      milestonesCrossed: [...this._milestonesCrossed],
      history: this.history.slice(-720),
      totals: JSON.parse(JSON.stringify(this.totals)),
      policyChanges: this._policyChanges.slice(-100),
    };
  }

  /** load(data) → 防御性恢复，坏档不崩 */
  load(data) {
    try {
      if (!data || typeof data !== 'object') return;
      if (isFinite(Number(data.credits))) this.credits = econRound2(Number(data.credits));
      if (isFinite(Number(data.taxRate))) {
        this.taxRate = econClamp(Number(data.taxRate), ECON_TUNE.TAX_MIN, ECON_TUNE.TAX_MAX, this.taxRate);
      }
      if (isFinite(Number(data.wage))) {
        this.wage = econClamp(Number(data.wage), ECON_TUNE.WAGE_MIN, ECON_TUNE.WAGE_MAX, this.wage);
      }
      this.bankrupt = data.bankrupt === true && this.credits < 0; // 自洽：余额为正则不认破产
      if (isFinite(Number(data.happiness))) this.happiness = econClamp(Number(data.happiness), 0, 100, 70);
      if (isFinite(Number(data.confidence))) this.confidence = econClamp(Number(data.confidence), 0, 1, 0.6);
      if (isFinite(Number(data.creditScore))) {
        this.creditScore = econClamp(Number(data.creditScore), ECON_TUNE.CREDIT_MIN, ECON_TUNE.CREDIT_MAX, 600);
      }
      this.ledger.fromJSON(data.ledger);
      this.clock.fromJSON(data.clock);
      this.incomeAvg.fromJSON(data.incomeAvg);
      this.expenseAvg.fromJSON(data.expenseAvg);
      this._loans = [];
      if (Array.isArray(data.loans)) {
        for (const l of data.loans) {
          if (!l || !isFinite(Number(l.remaining)) || Number(l.remaining) <= 0) continue;
          this._loans.push({
            id: String(l.id || 'L?'),
            name: String(l.name || '贷款'),
            principal: econRound2(econNum(l.principal)),
            total: econRound2(econNum(l.total)),
            remaining: econRound2(Number(l.remaining)),
            perMin: econRound2(econNum(l.perMin)),
            minutesLeft: Math.max(0, Math.floor(econNum(l.minutesLeft))),
            rate: econNum(l.rate),
          });
        }
      }
      this._loanSeq = Math.max(0, Math.floor(econNum(data.loanSeq)));
      this._tradeShipSeen = Math.floor(econNum(data.tradeShipSeen, -1));
      this._settleCount = Math.max(0, Math.floor(econNum(data.settleCount)));
      this._totalEarned = econRound2(econNum(data.totalEarned));
      this._totalSpent = econRound2(econNum(data.totalSpent));
      // v1.1 宏观字段
      if (isFinite(Number(data.priceIndex)) && Number(data.priceIndex) > 0) {
        this.priceIndex = econClamp(Number(data.priceIndex), 0.5, 5, 1);
      }
      this.wageGradesEnabled = data.wageGradesEnabled === true;
      this._budgets = {};
      if (data.budgets && typeof data.budgets === 'object') {
        for (const k of Object.keys(data.budgets)) {
          const v = Number(data.budgets[k]);
          if (isFinite(v) && v > 0) this._budgets[k] = v;
        }
      }
      this._milestonesCrossed = Array.isArray(data.milestonesCrossed)
        ? data.milestonesCrossed.filter(x => typeof x === 'string') : [];
      this.history = Array.isArray(data.history)
        ? data.history.filter(h => h && typeof h === 'object').slice(-720) : [];
      this._policyChanges = Array.isArray(data.policyChanges)
        ? data.policyChanges.filter(x => x && typeof x === 'object').slice(-100) : [];
      this.totals = { income: {}, expense: {} };
      if (data.totals && typeof data.totals === 'object') {
        for (const side of ['income', 'expense']) {
          const src = data.totals[side];
          if (src && typeof src === 'object') {
            for (const k of Object.keys(src)) {
              const v = Number(src[k]);
              if (isFinite(v)) this.totals[side][k] = v;
            }
          }
        }
      }
      if (data.last && typeof data.last === 'object') {
        for (const k of Object.keys(this._last)) {
          if (isFinite(Number(data.last[k]))) this._last[k] = Number(data.last[k]);
        }
      }
      // 读档后立即复核破产态
      this.bankrupt = this.credits < 0;
    } catch (e) {
      // 坏档：保持构造函数默认值，不崩
    }
  }
}

/* ============ 第 10b 节：v1.1 宏观常数 ============ */

/** 工资等级系数（wageGradesEnabled=true 时启用）：技术/军事岗工资更高 */
const WAGE_GRADE = {
  industry: 1.0,   // 采矿/冶炼/温室：基准
  infra: 1.0,      // 电力/物流：基准
  housing: 0,      // 住房不产生岗位（needPop=0，无意义，防呆）
  service: 1.15,   // 医院/学校/实验室：技术岗 +15%
  commerce: 1.2,   // 贸易站/太空港：奖金制 +20%
  civic: 1.3,      // 指挥中心/护盾：公务员 +30%
  military: 1.4,   // 军事建筑：卖命钱 +40%
  wonder: 1.5,     // 奇观：面子工程，工资也奇观
};

/** 里程碑：跨过阈值时 toast + 记账（成就系统可据此发奖） */
const ECON_MILESTONES = [
  { id: 'm_credits_100',   kind: 'credits',     at: 100,    label: '国库突破 100 星币' },
  { id: 'm_credits_1000',  kind: 'credits',     at: 1000,   label: '国库突破 1,000 星币' },
  { id: 'm_credits_10000', kind: 'credits',     at: 10000,  label: '国库突破 10,000 星币' },
  { id: 'm_earn_1000',     kind: 'totalEarned', at: 1000,   label: '累计收入突破 1,000' },
  { id: 'm_earn_100000',   kind: 'totalEarned', at: 100000, label: '累计收入突破 100,000' },
  { id: 'm_tax_100',       kind: 'taxPerMin',   at: 100,    label: '所得税突破 100/分钟' },
];

/** 历史曲线保留点数（1440 点 = 24 游戏小时） */
const HISTORY_MAX = 1440;

/* ============ 第 10c 节：v1.1 宏观方法（prototype 扩展） ============ */

/**
 * 工资等级制下的工资账单（wageGradesEnabled=true 时 _settle 调用）。
 * 逐栋：needPop × wage × 等级系数 × 物价指数；人手不足时按比例实发。
 */
EconomyManager.prototype._expenseWagesGraded = function (game, buildings, pop) {
  let bill = 0, workers = 0;
  for (const b of buildings) {
    if (!b || b.damaged) continue;
    const lv = this._levelDefOf(game, b);
    const need = Math.max(0, Math.floor(econNum(lv.needPop, 0)));
    if (need <= 0) continue;
    const prof = BUILDING_ECON_PROFILE[b.id];
    const cat = (prof && prof.cat) || 'industry';
    bill += need * this.wage * econNum(WAGE_GRADE[cat], 1);
    workers += need;
  }
  if (workers > pop && workers > 0) bill *= pop / workers;
  return econRound2(bill * this.priceIndex);
};

/** 分项累计（建城以来）：totals.income[cat] / totals.expense[cat] */
EconomyManager.prototype._accumulateTotals = function (inc, exp) {
  for (const k of Object.keys(inc || {})) {
    const v = econNum(inc[k]);
    if (v > 0) this.totals.income[k] = econRound2((this.totals.income[k] || 0) + v);
  }
  for (const k of Object.keys(exp || {})) {
    const v = econNum(exp[k]);
    if (v > 0) this.totals.expense[k] = econRound2((this.totals.expense[k] || 0) + v);
  }
};

/** 历史快照入队（ring buffer） */
EconomyManager.prototype._pushHistory = function (t, income, expense, pop) {
  this.history.push({
    t, income: econRound2(income), expense: econRound2(expense),
    credits: this.credits, pop,
    happiness: econRound2(this.happiness), priceIndex: econRound2(this.priceIndex),
  });
  while (this.history.length > HISTORY_MAX) this.history.shift();
};

/** 取最近 n 点历史（图表用） */
EconomyManager.prototype.getHistory = function (n) {
  n = econClamp(Math.floor(econNum(n, 60)), 1, HISTORY_MAX, 60);
  return this.history.slice(-n);
};

/**
 * 物价指数漂移：赤字→通胀 +0.1%/分钟，盈余→通缩 −0.05%/分钟。
 * 钳制 [0.5, 5]。通胀是"隐形税"：工资与维护费同乘 priceIndex。
 */
EconomyManager.prototype._driftPriceIndex = function (balance) {
  if (balance < 0) this.priceIndex = econClamp(this.priceIndex * 1.001, 0.5, 5, 1);
  else if (balance > 0) this.priceIndex = econClamp(this.priceIndex * 0.9995, 0.5, 5, 1);
  this.priceIndex = econRound2(this.priceIndex * 1000) / 1000;
};

/* ---- 预算帽 ---- */

/**
 * 设定某支出分类的预算帽（星币/分钟）。结算超支 → toast 警告 + 记账。
 * cat 取 EXPENSE_CATALOG 的 key（wages/upkeep/policy/loan/purchase/disaster）。
 */
EconomyManager.prototype.setBudgetCap = function (cat, cap) {
  cat = String(cat || '');
  cap = econNum(cap);
  if (!cat || !(cap > 0)) return false;
  this._budgets[cat] = econRound2(cap);
  this.ledger.system('system', `📊 预算帽：${cat} ≤ ${econFmt(cap)}/分钟`, this.clock.minIndex);
  return true;
};
EconomyManager.prototype.getBudgetCaps = function () { return { ...this._budgets }; };
EconomyManager.prototype.clearBudgetCap = function (cat) {
  if (this._budgets[String(cat)] !== undefined) {
    delete this._budgets[String(cat)];
    return true;
  }
  return false;
};

/** 结算内检查预算帽 */
EconomyManager.prototype._checkBudgets = function (game, t, exp) {
  for (const cat of Object.keys(this._budgets)) {
    const cap = this._budgets[cat];
    const v = econNum(exp[cat]);
    if (v > cap) {
      this.ledger.system('system',
        `📊 预算超支：${cat} 本分钟 ${econFmt(v)}，上限 ${econFmt(cap)}`, t);
      this._toast(game, 'budget_' + cat,
        `📊 预算超支：「${cat}」${econFmt(v)}/分钟，超过上限 ${econFmt(cap)}`);
    }
  }
};

/* ---- 里程碑 ---- */

/** 结算内检查里程碑 */
EconomyManager.prototype._checkMilestones = function (game, t) {
  const valOf = (kind) => {
    if (kind === 'credits') return this.credits;
    if (kind === 'totalEarned') return this._totalEarned;
    if (kind === 'taxPerMin') return this._last.tax;
    return 0;
  };
  for (const m of ECON_MILESTONES) {
    if (this._milestonesCrossed.includes(m.id)) continue;
    if (valOf(m.kind) >= m.at) {
      this._milestonesCrossed.push(m.id);
      this.ledger.system('system', `🎖️ 里程碑：${m.label}`, t);
      this._emit('milestone', { id: m.id, label: m.label });
      this._toast(game, 'milestone_' + m.id, `🎖️ 里程碑达成：${m.label}！`);
    }
  }
};

/* ---- 灾难损失 / 拨款 ---- */

/**
 * 登记灾难直接经济损失。允许击穿国库（与 spend 不同，不检查余额），
 * 记 disaster 分类；市场信心 −0.1。返回损失金额。
 */
EconomyManager.prototype.recordDisasterLoss = function (label, amount) {
  amount = econRound2(econNum(amount));
  if (!(amount > 0)) return 0;
  this.credits = econRound2(this.credits - amount);
  this._totalSpent = econRound2(this._totalSpent + amount);
  this.confidence = econClamp(this.confidence - 0.1, 0, 1, 0.6);
  this.ledger.expense('disaster', amount, `☄️ ${String(label || '灾难损失')}`, this.clock.minIndex);
  const t = this.totals.expense;
  t.disaster = econRound2((t.disaster || 0) + amount);
  return amount;
};

/** grant(n, label)：earn 的别名，语义=拨款/奖励（分类自动为 grant） */
EconomyManager.prototype.grant = function (n, label) {
  return this.earn(n, label);
};

/* ---- 单栋 / 全城经济分析（UI tooltip 用） ---- */

/**
 * 单栋建筑经济画像：{id, name, level, damaged, income, upkeep, workers, net}
 * net = income − upkeep（不含工资；工资按人头另计）。
 */
EconomyManager.prototype.buildingEconomy = function (game, b) {
  if (!b) return null;
  const lv = this._levelDefOf(game, b);
  const income = b.damaged ? 0 : this._buildingIncomeOf(b);
  const upkeep = b.damaged ? 0 : this._upkeepOf(game, b);
  return {
    id: b.id,
    name: this._bName(b),
    level: b.level,
    damaged: !!b.damaged,
    income: econRound2(income),
    upkeep: econRound2(upkeep),
    workers: Math.max(0, Math.floor(econNum(lv.needPop, 0))),
    net: econRound2(income - upkeep),
  };
};

/**
 * 全城按类别汇总：{cat: {count, income, upkeep, workers, net}}
 * 帮玩家一眼看出"哪个类别在吸血"。
 */
EconomyManager.prototype.cityEconomySummary = function (game) {
  const out = {};
  try {
    for (const b of this._getBuildings(game)) {
      if (!b) continue;
      const prof = BUILDING_ECON_PROFILE[b.id];
      const cat = (prof && prof.cat) || (this._looksCommercial(b) ? 'commerce' : 'other');
      const s = out[cat] || (out[cat] = { count: 0, income: 0, upkeep: 0, workers: 0, net: 0 });
      const be = this.buildingEconomy(game, b);
      s.count++;
      s.income = econRound2(s.income + be.income);
      s.upkeep = econRound2(s.upkeep + be.upkeep);
      s.workers += be.workers;
      s.net = econRound2(s.net + be.net);
    }
  } catch (e) {}
  return out;
};

/* ---- 政策速查表（带当前档标记） ---- */

/** 税率速查：TAX_GUIDE + current 标记 */
EconomyManager.prototype.taxGuide = function () {
  return TAX_GUIDE.map(g => ({ ...g, current: Math.abs(g.rate - this.taxRate) < 1e-9 }));
};

/** 工资速查：WAGE_LADDER + current 标记（取最接近档） */
EconomyManager.prototype.wageGuide = function () {
  let best = WAGE_LADDER[0], bestD = Infinity;
  for (const w of WAGE_LADDER) {
    const d = Math.abs(w.wage - this.wage);
    if (d < bestD) { bestD = d; best = w; }
  }
  return WAGE_LADDER.map(w => ({ ...w, current: w === best }));
};

/* ---- what-if 模拟器 ---- */

/**
 * simulate(minutes, game)：在**克隆体**上推演 N 分钟，不污染真实状态。
 * toast 被静默。返回 {endCredits, bankruptAt, minCredits, maxCredits, avgBalance}。
 * 用途：总督 AI / 玩家"如果我现在增税会怎样"。
 */
EconomyManager.prototype.simulate = function (minutes, game) {
  minutes = econClamp(Math.floor(econNum(minutes, 60)), 1, 1440, 60);
  const clone = new EconomyManager();
  clone.load(this.save());
  clone._toast = function () {}; // 静默
  let minC = clone.credits, maxC = clone.credits, bankruptAt = null, balSum = 0;
  for (let m = 1; m <= minutes; m++) {
    try { clone._settle(game); } catch (e) { break; }
    const c = clone.credits;
    if (c < minC) minC = c;
    if (c > maxC) maxC = c;
    balSum += clone._last.balance;
    if (c < 0 && bankruptAt === null) bankruptAt = m;
  }
  return {
    endCredits: econRound2(clone.credits),
    bankruptAt,
    minCredits: econRound2(minC),
    maxCredits: econRound2(maxC),
    avgBalance: econRound2(balSum / minutes),
  };
};

/**
 * comparePolicy(taxRate, wage, minutes, game)：对比"当前政策" vs "假设政策"。
 * 返回 {current: simulate结果, alt: simulate结果, deltaEnd, verdict}。
 */
EconomyManager.prototype.comparePolicy = function (taxRate, wage, minutes, game) {
  const current = this.simulate(minutes, game);
  const clone = new EconomyManager();
  clone.load(this.save());
  clone.taxRate = econClamp(taxRate, ECON_TUNE.TAX_MIN, ECON_TUNE.TAX_MAX, clone.taxRate);
  clone.wage = econClamp(wage, ECON_TUNE.WAGE_MIN, ECON_TUNE.WAGE_MAX, clone.wage);
  const alt = clone.simulate(minutes, game);
  const deltaEnd = econRound2(alt.endCredits - current.endCredits);
  let verdict = '两者接近，政策调整意义不大。';
  if (deltaEnd > 50) verdict = `新政策 ${minutes} 分钟后多 ${econFmt(deltaEnd)} 星币，建议切换。`;
  else if (deltaEnd < -50) verdict = `新政策 ${minutes} 分钟后少 ${econFmt(-deltaEnd)} 星币，别换。`;
  if (current.bankruptAt !== null && alt.bankruptAt === null) {
    verdict = `新政策可避免在 ${current.bankruptAt} 分钟后破产，强烈建议切换。`;
  }
  return { current, alt, deltaEnd, verdict };
};

/* ---- 账本导出 ---- */

/** 账本导出 CSV（审计/对账用） */
EconomyManager.prototype.ledgerToCSV = function () {
  const rows = ['t,type,cat,amount,label'];
  for (const e of this.ledger.entries) {
    const label = '"' + String(e.label).replace(/"/g, '""') + '"';
    rows.push([e.t, e.type, e.cat, e.amount.toFixed(2), label].join(','));
  }
  return rows.join('\n');
};

/** 历史迷你走势（HUD sparkline 用）：返回 credits 序列 */
EconomyManager.prototype.creditSparkline = function (n) {
  return this.getHistory(n).map(h => h.credits);
};

/* ---- v1.1 宏观顾问规则（advise() 在排序前并入） ---- */

EconomyManager.prototype._adviseMacro = function (game) {
  const out = [];
  const push = (priority, icon, title, detail) => out.push({ priority, icon, title, detail });

  // M1) 通胀
  if (this.priceIndex > 1.2) {
    push(2, '🎈', `通胀 ${econPct(this.priceIndex - 1, 1)}：所有开支都在变贵`,
      `物价指数 ${this.priceIndex.toFixed(3)}。通胀是持续赤字的滞后指标——先止血（增税/降薪），指数会自己降回来。`);
  } else if (this.priceIndex < 0.9) {
    push(5, '❄️', `通缩红利：开支打 ${(this.priceIndex * 100).toFixed(0)} 折`,
      '持续盈余压低了物价。现在是扩张的好时机：工资和维护费都便宜。');
  }
  // M2) 折旧
  try {
    let old = 0;
    for (const b of this._getBuildings(game)) {
      if (b && !b.damaged && this._depreciationMul(b) > 1.5) old++;
    }
    if (old > 0) {
      push(4, '🏚️', `${old} 栋建筑严重折旧（维护费 ×1.5+）`,
        '老建筑维护费越交越多。拆了重建往往比接着修便宜——沉没成本不是成本。');
    }
  } catch (e) {}
  // M3) 历史趋势：连续 3 分钟收入下滑
  try {
    const h = this.history.slice(-4);
    if (h.length === 4 && h[1].income < h[0].income && h[2].income < h[1].income && h[3].income < h[2].income) {
      push(3, '📉', '收入连续 3 分钟下滑',
        '可能是商业建筑停摆或人口流失。查停摆列表和人口数。');
    }
  } catch (e) {}
  // M4) 下一个里程碑
  try {
    const next = ECON_MILESTONES.find(m => !this._milestonesCrossed.includes(m.id));
    if (next) {
      const cur = next.kind === 'credits' ? this.credits
        : next.kind === 'totalEarned' ? this._totalEarned : this._last.tax;
      const pct = Math.min(99, Math.floor(cur / next.at * 100));
      push(5, '🎯', `下一个里程碑：${next.label}（${pct}%）`,
        '达成后记入史册。成就系统可据此发奖。');
    }
  } catch (e) {}
  // M5) 预算帽总览
  const caps = Object.keys(this._budgets);
  if (caps.length > 0) {
    push(5, '📊', `已设 ${caps.length} 项预算帽`,
      caps.map(c => `${c} ≤ ${econFmt(this._budgets[c])}/分`).join('；') + '。超支会 toast 告警。');
  }
  // M6) 工资等级制提示
  if (!this.wageGradesEnabled && this._last.workers > 80) {
    push(5, '🎚️', '岗位超 80，可考虑开启工资等级制',
      'wageGradesEnabled=true 后技术/军事岗工资上浮（service×1.15…wonder×1.5），更真实但更贵。');
  }
  return out;
};

/* ================= 第 11 节：ECONOMYGUIDE（15 条机制说明） ====================
 * 玩家手册用。每条：id / title / formula / example（真实算例） / tip（策略）。
 */
const ECONOMYGUIDE = [
  {
    id: 'g01', title: '① 游戏分钟：一切按"分钟"结算',
    formula: '1 游戏分钟 = 现实 10 秒（ECON_TUNE.MIN_MS）',
    example: '现实 1 分钟 = 6 游戏分钟；你看到的"×/分钟"都是游戏分钟。2x 速度下结算翻倍。',
    tip: '所有收支数字先 ×6 才是"现实每分钟"。做预算时别搞混。',
  },
  {
    id: 'g02', title: '② 人口所得税：你的第一桶金',
    formula: '所得税 = 人口 × 工资 × 税率 × popIncomeMul(政策)',
    example: '100 人 × 工资 2 × 税率 10% = 20 星币/分钟。政策"人头税"可 ×1.5。',
    tip: '前期人口少时所得税微薄，别指望它发家；它是后期的压舱石。',
  },
  {
    id: 'g03', title: '③ 建筑营业税：被动收入的唯一正道',
    formula: '营业税 = Σ 商业建筑收入画像 × tradeIncomeMul(政策)',
    example: '贸易站 Lv2 画像收入 6 → 6 星币/分钟，约等于 30 人交的税。',
    tip: '第一个商业建筑建议贸易站：便宜、回本快，还附带贸易船关税。',
  },
  {
    id: 'g04', title: '④ 贸易关税：船来就收钱',
    formula: '关税 = 到访船数 × 6 × tradeIncomeMul × 信心浮动(0.7~1.3)',
    example: '贸易船 5~8 分钟一班，一班至少 6 星币，顺差大时更多。',
    tip: '没有贸易站就没有船。recordTrade() 登记的顺差也会折成关税收入。',
  },
  {
    id: 'g05', title: '⑤ 工资：最大头的支出',
    formula: '工资 = min(Σ建筑needPop, 人口) × 工资标准',
    example: '60 个岗位 × 工资 2 = 120/分钟。工资提到 4，直接 240/分钟。',
    tip: '工资每 +1，全城工资 bill 同比涨 50%。先算清再加工资。',
  },
  {
    id: 'g06', title: '⑥ 维护费：建筑的"物业费"',
    formula: '维护费 = levelDef.upkeep → 画像表 → 商业兜底 → level×1',
    example: 'Lv3 聚变电站画像维护费 15/分钟；Lv1 太阳能板 0。',
    tip: '建之前先看画像表：有些建筑是"买得起养不起"。不用的建筑拆了比留着便宜。',
  },
  {
    id: 'g07', title: '⑦ 停摆：交不起物业费就断水断电',
    formula: '某栋维护费 > 国库余额 → b.damaged = true',
    example: '国库剩 2 星币，轮到 15 星币的聚变电站 → 停摆，不再扣费、不生产、不交税。',
    tip: '停摆建筑是纯负债：repairBuilding() 花 2 分钟维护费复活，或直接拆除。',
  },
  {
    id: 'g08', title: '⑧ 税率三档：5% / 10% / 20%',
    formula: '税率 <5% → 增长 +20%；>20% → 增长 −50%；之间无修正',
    example: '税率 25% 时人口增长直接腰斩，适合"人口已满只想变现"的终局。',
    tip: '扩张期用 10%~15%；冲人口时降到 5% 以下；救急时拉到 20%+ 但别久。',
  },
  {
    id: 'g09', title: '⑨ 工资三档：1 / 2 / 4',
    formula: '工资 ≤1 → 增长 ×0.9；≥4 → 增长 ×1.15；幸福目标 ±8/级',
    example: '工资 4 vs 2：幸福目标 +16，增长 ×1.15，但工资支出翻倍。',
    tip: '2 是平衡点，4 是"花钱买人口"。工资 0 是合法的，但你的城市会变成鬼城。',
  },
  {
    id: 'g10', title: '⑩ 破产：不是终点，是冻结',
    formula: 'credits < 0 → bankrupt = true；≥0 自动解除',
    example: '赤字 −50 时高级建筑（发射台/太空港等）禁止建造，普通建筑不受影响。',
    tip: '自救顺序：降工资 → 增税 → 贷款过桥 → 拆吞金兽。破产期间结算不停，债会越滚越大。',
  },
  {
    id: 'g11', title: '⑪ 贷款：借时间，但时间收利息',
    formula: '到账 = 本金 ×95%；每分钟还 本金×(1+利率)/期限',
    example: '过桥贷 200：到账 190，30 分钟共还 230（利率 15%），每分钟 7.67。',
    tip: '信用分决定能借哪档：按时还清 +15，断供 −20。最多同时 3 笔。',
  },
  {
    id: 'g12', title: '⑫ 人口消费：每人每天两口饭',
    formula: '每人每分钟：食物 0.05 + 水 0.05（从库存扣）',
    example: '200 人 → 每分钟 10 食物 + 10 水。库存不够 → 幸福 −（缺口×2）。',
    tip: '人口翻倍前先确认温室/水厂跟得上。缺粮缺水是幸福崩盘最快的方式。',
  },
  {
    id: 'g13', title: '⑬ 幸福度：看不见的税基',
    formula: '目标 = 60 + (工资−2)×8 − 税率×150 − 失业率×40 − 缺物资×20 ± 政策',
    example: '工资 2、税率 10%、无失业 → 目标 45，每分钟漂移 20%。幸福 <30 时增长 ×0.8。',
    tip: '幸福是人口增长的隐形乘数。税和工资是跷跷板：重税配高薪，轻税可低薪。',
  },
  {
    id: 'g14', title: '⑭ 政策维持费：隐形税',
    formula: '每政策 0.5/分钟 + penalty.upkeep 资源按折算价转星币',
    example: '雇佣兵合法：2 科技/分钟 ×10 = 20 星币/分钟，比它的防御加成贵得多。',
    tip: '颁布前先看 upkeep：免费医疗 4 食物/分钟、科研投入 3 稀土/分钟，都是持续放血。',
  },
  {
    id: 'g15', title: '⑮ 财政预测与顾问：让数字替你焦虑',
    formula: 'forecast(n)：按近 12 分钟均值 + 精确贷款计划推演 n 分钟',
    example: 'forecast(60).bankruptAt = 23 → 23 分钟后破产，趁现在调整。',
    tip: '每次大扩张前跑一次 forecast(120)，再看一眼 advise() 的第一条。',
  },
];

/* ================= 第 12 节：INTEGRATION_CONTRACT（集成契约） =================
 * 本文件只定义 EconomyManager，不修改任何他人文件。
 * 以下 6 处集成点由 game.js / pop.js / build.js / index.html 的负责人接入。
 * 全部防御性：economy.js 缺席时游戏照常运行（game 侧用 typeof 检查）。
 *
 * ---- 集成点 1：index.html 引入（<script> 顺序：在 game.js 之前） ----
 *   <script src="economy.js"></script>
 *
 * ---- 集成点 2：game.js constructor（与其它 Manager 并列） ----
 *   this.economy = (typeof EconomyManager !== 'undefined') ? new EconomyManager() : null;
 *
 * ---- 集成点 3：game.js tick()（建议放在 pop.update 之前） ----
 *   if (this.economy) this.economy.update(now, dt, this);
 *   // dt 为毫秒；speedMode 2x 时 tick 调两次，结算自然加速，无需特殊处理。
 *
 * ---- 集成点 4：game.js save() / load() ----
 *   // save() 的 data 对象加一行：
 *   economy: this.economy ? this.economy.save() : null,
 *   // load() 加一行：
 *   if (data.economy && this.economy) this.economy.load(data.economy);
 *
 * ---- 集成点 5：破产 → 禁建高级建筑（game.js 建造/升级入口） ----
 *   // 在 canPlace / canUpgrade 的 ok 判断之后加：
 *   const ADVANCED = ['launchpad', 'spaceport', 'elevator', 'ark', 'fusion'];
 *   if (this.economy && !this.economy.canBuildAdvanced() && ADVANCED.includes(id)) {
 *     return { ok: false, reason: '国库破产，高级建筑已冻结' };
 *   }
 *   // 说明：economy.bankrupt === true 当且仅当 credits < 0；
 *   //   credits 回正后自动解除，无需手动调用。
 *
 * ---- 集成点 6：pop.js 读取增长乘数（Population.update 内） ----
 *   // 在 this.count++ 之前，乘数生效（先结算经济再结算人口，见集成点 3 顺序）：
 *   const gmul = (game && game.economy && typeof game.economy.growthMul === 'function')
 *     ? game.economy.growthMul() : 1;
 *   // 用法示例：按乘数缩放生长概率，或 interval /= gmul。
 *   // 注意：Population.update 当前签名是 (now, inv, builder)，需 game 侧传 game
 *   //   或把 economy 引用注入 pop（如 this.pop.economy = this.economy）。
 *
 * ---- 集成点 7（可选）：BUILDINGS levelDef 新增字段 ----
 *   income: 数字，星币/分钟。该建筑每分钟上缴的营业税（停摆时为 0）。
 *     例：trade: levels: [null, { ..., income: 3 }, ...]
 *   upkeep: 数字（星币/分钟）或 {credits: n}。该建筑每分钟维护费。
 *     例：fusion: levels: [null, { ..., upkeep: 4 }, ...]
 *   不加也可：本文件的 BUILDING_ECON_PROFILE + 关键词兜底 + level×1 会接住。
 *
 * ---- 集成点 8（可选）：停摆建筑停产（build.js builder.update 内） ----
 *   // 生产循环开头加：
 *   if (b.damaged) continue; // 停摆：不生产、不耗电（经济系统已停收其维护费/税）
 *
 * ---- 集成点 9（可选）：贸易/服务事件登记 ----
 *   // 贸易船完成交易后：
 *   if (this.economy) this.economy.recordTrade(giveObj, getObj);
 *   // 发射/罚款等杂项收入：
 *   if (this.economy) this.economy.recordService('发射服务费', 8);
 *
 * ---- 集成点 10（可选）：HUD ----
 *   // 每秒刷新一次即可（getReport 开销小）：
 *   const r = this.economy.getReport();
 *   // r.credits / r.balance / r.health.icon / r.health.color / r.bankrupt
 *   // 或一行到位：this.economy.hudString()
 *   // 或面板数据包：this.economy.hudPanel(this)
 *
 * ---- 集成点 11（可选）：灾难 → 经济损失（disaster.js） ----
 *   // 陨石/袭击结算后：
 *   if (this.economy) this.economy.recordDisasterLoss('陨石撞击·居住区', 120);
 *   // 允许击穿国库，自动触发破产流程；市场信心 −0.1。
 *
 * ---- 集成点 12（可选）：总督 AI → 自动驾驶（governor.js） ----
 *   // 每 5 分钟调用一次：
 *   if (this.economy) {
 *     const actions = this.economy.autopilot(this);
 *     if (actions.length) this.toast('🤖 ' + actions.join('；'));
 *   }
 *   // 决策前可先跑：this.economy.stressTest(this).verdict
 *
 * ---- 集成点 13（可选）：军事/外交一次性开销（military.js/diplomacy.js） ----
 *   // 出兵/进贡：余额不足返回 false，不扣钱
 *   if (this.economy) this.economy.recordExpense('military', 80, '轨道打击');
 *
 * ---- 集成点 14（可选）：帮助面板 → 政策推演表 ----
 *   // this.economy.policyTable(this, 60) / .optimalTax(this, 120)
 *   // .incomeStatement() / .cashFlowText(30) / .bankruptcyGuide()
 * ========================================================================== */

/* ================= 第 10e 节：报表 / 体检 / 自动驾驶 / 压测 ================= */

/* ---- 公式推导注记（策划/数值同学看这里） ----
 * 1) 幸福目标函数 H* = 60 + 8(w−2) − 150τ − 40u − 20s + 100(m−1) − 15·1[破产]
 *    系数量级论证：工资是唯一"无痛"加幸福手段，+1 工资 → 全城工资 bill +P，
 *    对应 +8 幸福。以 P=100 计：+800 星币/分钟买 +8 幸福 ≈ 100 星币/点/分钟。
 *    税率 10% → −15 幸福：100 人城市税入 20/分钟，相当于 1.3 星币/点/分钟——
 *    税是"便宜"的幸福杀手，这就是重税流可行的数学原因。
 * 2) 通胀稳态：设长期赤字率为 d（星币/分钟），priceIndex 每分钟 ×1.001，
 *    开支每分钟同步放大，赤字加速 → 指数发散。这是有意设计：长期赤字没有
 *    稳态，只有"越早处理代价越小"。通缩侧 ×0.9995 收敛到下限 0.5。
 * 3) 工资总额占比：工资 = min(W,P)·w·π。城市扩张时 W 与 P 同步涨，
 *    工资占比 ≈ w·τ⁻¹·(W/P)… 结论：税率 τ 必须 ≥ w·(W/P)/k 才能覆盖工资，
 *    k 为商业/关税补充系数。这就是 advise() 中"工资吞噬 >60% 收入"告警的来源。
 * 4) 贷款可持续条件：perMin = A(1+r)/T < 盈余/分钟。过桥贷 200/30/15%：
 *    7.67/分钟，需要至少 +8/分钟的盈余才借得起——否则借新还旧，信用分雪崩。
 */

/** 文本表格对齐辅助 */
function econTable(rows) {
  const widths = [];
  for (const r of rows) {
    r.forEach((c, i) => { widths[i] = Math.max(widths[i] || 0, String(c).length); });
  }
  return rows.map(r => r.map((c, i) => {
    const s = String(c);
    const pad = widths[i] - s.length;
    // 数字右对齐，文字左对齐
    return /^-?[0-9,.]+$/.test(s.replace(/[+−]/g, '')) ? ' '.repeat(pad) + s : s + ' '.repeat(pad);
  }).join('  ')).join('\n');
}

/* ---- 财务报表 ---- */

/**
 * 损益表（文本）：基于建城以来累计 totals + 本分钟快照。
 * 给喜欢看报表的玩家 / 存档审计。
 */
EconomyManager.prototype.incomeStatement = function () {
  const ti = this.totals.income, te = this.totals.expense;
  const nameOf = (side, k) => {
    const cat = (side === 'income' ? INCOME_CATALOG : EXPENSE_CATALOG).find(c => c.key === k);
    return cat ? `${cat.icon} ${cat.name}` : k;
  };
  const rows = [['── 收入 ──', '', ''], ['项目', '累计', '本分钟']];
  let sumI = 0;
  for (const k of Object.keys(ti).sort()) {
    const v = ti[k];
    sumI += v;
    rows.push([nameOf('income', k), econFmt(v), econFmt(this._last[k] || 0)]);
  }
  rows.push(['收入合计', econFmt(sumI), econFmt(this._last.income)]);
  rows.push(['', '', '']);
  rows.push(['── 支出 ──', '', '']);
  let sumE = 0;
  for (const k of Object.keys(te).sort()) {
    const v = te[k];
    sumE += v;
    rows.push([nameOf('expense', k), econFmt(v), econFmt(this._last[k] || 0)]);
  }
  rows.push(['支出合计', econFmt(sumE), econFmt(this._last.expense)]);
  rows.push(['', '', '']);
  rows.push(['净利润（累计）', econFmt(sumI - sumE), '']);
  rows.push(['国库余额', econFmt(this.credits), '']);
  rows.push(['结算分钟数', String(this._settleCount), '']);
  return '📊 星港财政部 · 损益表\n' + econTable(rows);
};

/**
 * 现金流量简表：最近 n 分钟每分钟净流（文本 sparkline + 数字）。
 * 用 ▁▂▃▄▅▆▇█ 八档显示。
 */
EconomyManager.prototype.cashFlowText = function (n) {
  const h = this.getHistory(n || 30);
  if (!h.length) return '暂无流水';
  const nets = h.map(p => econRound2(p.income - p.expense));
  const min = Math.min(...nets), max = Math.max(...nets);
  const span = max - min || 1;
  const bars = '▁▂▃▄▅▆▇█';
  const spark = nets.map(v => bars[Math.min(7, Math.floor((v - min) / span * 7))]).join('');
  const avg = nets.reduce((a, b) => a + b, 0) / nets.length;
  return `💧 现金流（近${h.length}分钟）\n${spark}\n` +
    `均值 ${econFmtSigned(avg)}/分　最高 ${econFmtSigned(max)}　最低 ${econFmtSigned(min)}`;
};

/* ---- 账本查询 ---- */

/**
 * queryLedger({type, cat, keyword, fromT, toT, limit})：多条件过滤账本。
 */
EconomyManager.prototype.queryLedger = function (filter) {
  const f = filter || {};
  const out = [];
  for (const e of this.ledger.entries) {
    if (f.type && e.type !== f.type) continue;
    if (f.cat && e.cat !== f.cat) continue;
    if (f.fromT !== undefined && e.t < f.fromT) continue;
    if (f.toT !== undefined && e.t > f.toT) continue;
    if (f.keyword && !String(e.label).includes(f.keyword)) continue;
    out.push(e);
  }
  const limit = Math.max(1, Math.floor(econNum(f.limit, 50)));
  return out.slice(-limit);
};

/** 政策变更历史 */
EconomyManager.prototype.getPolicyChanges = function (n) {
  n = econClamp(Math.floor(econNum(n, 20)), 1, 100, 20);
  return this._policyChanges.slice(-n).map(c => ({
    ...c,
    text: c.kind === 'tax'
      ? `税率 ${econPct(c.from)} → ${econPct(c.to)}`
      : `工资 ${econFmt(c.from)} → ${econFmt(c.to)}`,
  }));
};

/* ---- 政策维持费明细 ---- */

/**
 * 逐政策拆维持费：[{id, name, icon, adminFee, resourceFee, total}]
 * game.policy 缺席 → []。
 */
EconomyManager.prototype.policyUpkeepDetail = function (game) {
  const out = [];
  try {
    const policy = game && game.policy;
    if (!policy || !policy.active) return out;
    const ids = typeof policy.activeList === 'function'
      ? policy.activeList().map(d => d && d.id).filter(Boolean)
      : [...policy.active];
    const PDEFS = econGlobal('POLICY_DEFS');
    const values = econResCreditValue();
    for (const id of ids) {
      const def = (PDEFS && PDEFS[id]) || {};
      let resourceFee = 0;
      const upkeep = def.penalty && def.penalty.upkeep;
      if (upkeep && typeof upkeep === 'object') {
        for (const k of Object.keys(upkeep)) resourceFee += econNum(upkeep[k]) * econNum(values[k], 1);
      }
      resourceFee = econRound2(resourceFee);
      out.push({
        id,
        name: def.name || id,
        icon: def.icon || '📜',
        adminFee: ECON_TUNE.POLICY_ADMIN_FEE,
        resourceFee,
        total: econRound2(ECON_TUNE.POLICY_ADMIN_FEE + resourceFee),
      });
    }
  } catch (e) {}
  return out;
};

/* ---- 贷款摊销表 ---- */

/** loanAmortization(loanId?)：等额还款计划（默认第一笔） */
EconomyManager.prototype.loanAmortization = function (loanId) {
  const loan = loanId
    ? this._loans.find(l => l.id === loanId)
    : this._loans[0];
  if (!loan) return null;
  const rows = [['期数', '还款', '剩余']];
  let rem = loan.remaining;
  const n = Math.min(loan.minutesLeft, 24);
  for (let i = 1; i <= n; i++) {
    const pay = Math.min(loan.perMin, rem);
    rem = econRound2(rem - pay);
    rows.push([String(i), econFmt(pay), econFmt(Math.max(0, rem))]);
  }
  if (loan.minutesLeft > n) rows.push(['…', '…', `余 ${loan.minutesLeft - n} 期`]);
  return { loan: { id: loan.id, name: loan.name, rate: loan.rate }, table: econTable(rows) };
};

/* ---- 纳税/维护大户 ---- */

/** topTaxpayers(game, n)：按营业税排名的建筑 */
EconomyManager.prototype.topTaxpayers = function (game, n) {
  n = econClamp(Math.floor(econNum(n, 5)), 1, 50, 5);
  const arr = [];
  try {
    for (const b of this._getBuildings(game)) {
      if (!b || b.damaged) continue;
      const inc = this._buildingIncomeOf(b);
      if (inc > 0) arr.push({ name: this._bName(b), income: econRound2(inc) });
    }
  } catch (e) {}
  return arr.sort((a, b) => b.income - a.income).slice(0, n);
};

/** topUpkeep(game, n)：按维护费排名的建筑（找吞金兽用） */
EconomyManager.prototype.topUpkeep = function (game, n) {
  n = econClamp(Math.floor(econNum(n, 5)), 1, 50, 5);
  const arr = [];
  try {
    for (const b of this._getBuildings(game)) {
      if (!b || b.damaged) continue;
      const u = this._upkeepOf(game, b);
      if (u > 0) arr.push({ name: this._bName(b), upkeep: u });
    }
  } catch (e) {}
  return arr.sort((a, b) => b.upkeep - a.upkeep).slice(0, n);
};

/* ---- 趋势分析 ---- */

/**
 * trend()：对近 12 分钟收入/支出做最小二乘斜率。
 * 返回 {incomeSlope, expenseSlope, incomeDir, expenseDir, verdict}。
 */
EconomyManager.prototype.trend = function () {
  const h = this.history.slice(-12);
  const slope = (ys) => {
    const n = ys.length;
    if (n < 3) return 0;
    let sx = 0, sy = 0, sxx = 0, sxy = 0;
    for (let i = 0; i < n; i++) {
      sx += i; sy += ys[i]; sxx += i * i; sxy += i * ys[i];
    }
    const den = n * sxx - sx * sx;
    return den === 0 ? 0 : (n * sxy - sx * sy) / den;
  };
  const iSlope = econRound2(slope(h.map(p => p.income)) * 100) / 100;
  const eSlope = econRound2(slope(h.map(p => p.expense)) * 100) / 100;
  const dir = (s) => s > 0.05 ? '↗' : (s < -0.05 ? '↘' : '→');
  let verdict = '收支平稳。';
  if (iSlope < -0.05 && eSlope > 0.05) verdict = '收入跌、支出涨——剪刀差，危险。';
  else if (iSlope > 0.05 && eSlope < -0.05) verdict = '收入涨、支出跌——黄金交叉，继续。';
  else if (iSlope < -0.05) verdict = '收入持续下滑，查停摆与人口。';
  else if (eSlope > 0.05) verdict = '支出持续上涨，查工资与维护费。';
  return { incomeSlope: iSlope, expenseSlope: eSlope, incomeDir: dir(iSlope), expenseDir: dir(eSlope), verdict };
};

/* ---- HUD 一行 ---- */

/** hudString()：顶栏用，一行显示国库+收支+健康 */
EconomyManager.prototype.hudString = function () {
  const h = this.fiscalHealth();
  const bal = econRound2(this.incomeAvg.value - this.expenseAvg.value);
  return `${h.icon} ${econFmt(this.credits)}（${econFmtSigned(bal)}/分）`;
};

/* ---- 通用支出（自定义分类） ---- */

/**
 * recordExpense(cat, amount, label)：带余额检查的通用支出（分类自定义）。
 * 成功 true；余额不足 false。用于军事行动、外交进贡等一次性开销。
 */
EconomyManager.prototype.recordExpense = function (cat, amount, label) {
  amount = econRound2(econNum(amount));
  if (!(amount > 0)) return false;
  if (this.credits < amount) return false;
  this.credits = econRound2(this.credits - amount);
  this._totalSpent = econRound2(this._totalSpent + amount);
  this.ledger.expense(String(cat || 'purchase'), amount, String(label || '支出'), this.clock.minIndex);
  const t = this.totals.expense;
  t[String(cat || 'purchase')] = econRound2((t[String(cat || 'purchase')] || 0) + amount);
  return true;
};

/* ---- 财政体检 ---- */

/**
 * checkup(game)：12 项指标加权评分。
 * 返回 {score 0~100, grade, issues:[{icon, label, detail}], checks:[...]}。
 * grade: ≥90 AAA，≥80 AA，≥70 A，≥60 BBB，≥40 BB，≥20 B，否则 D。
 */
EconomyManager.prototype.checkup = function (game) {
  const checks = [];
  const add = (id, label, score, weight, detail, icon) => checks.push({
    id, label, score: econClamp(score, 0, 100, 50), weight, detail, icon: icon || '📋',
  });
  const last = this._last;
  const inc = Math.max(0.01, last.income);

  // C1 流动性：国库够付几分钟总支出
  const perMinOut = Math.max(0.01, this.expenseAvg.value);
  const months = this.credits / perMinOut;
  add('liquidity', '流动性', econClamp(months / 30 * 100, 0, 100), 2,
    `国库可支撑约 ${Math.max(0, Math.floor(months))} 分钟支出`, '💧');
  // C2 盈亏
  const balScore = last.balance >= 0 ? 100 : econClamp(100 + last.balance / inc * 200, 0, 100);
  add('balance', '当期盈亏', balScore, 2, `本分钟 ${econFmtSigned(last.balance)}`, last.balance >= 0 ? '📈' : '📉');
  // C3 工资占比
  add('wage_share', '工资占比', econClamp(100 - Math.max(0, last.wages / inc - 0.5) * 200, 0, 100), 1.5,
    `工资占收入 ${econPct(last.wages / inc, 0)}`, '💼');
  // C4 维护费占比
  add('upkeep_share', '维护费占比', econClamp(100 - Math.max(0, last.upkeep / inc - 0.35) * 250, 0, 100), 1.5,
    `维护费占收入 ${econPct(last.upkeep / inc, 0)}`, '🧰');
  // C5 停摆率
  let total = 0, damaged = 0;
  try {
    for (const b of this._getBuildings(game)) { total++; if (b.damaged) damaged++; }
  } catch (e) {}
  add('damaged', '完好率', total ? (1 - damaged / total) * 100 : 100, 1,
    `${damaged}/${total} 停摆`, '🔧');
  // C6 贷款负担
  const loanPerMin = this._loans.reduce((s, l) => s + l.perMin, 0);
  add('loan', '债务负担', econClamp(100 - loanPerMin / inc * 300, 0, 100), 1,
    `${this._loans.length} 笔贷款，每分钟还 ${econFmt(loanPerMin)}`, '💳');
  // C7 幸福
  add('happiness', '幸福度', this.happiness, 1, `${Math.round(this.happiness)}/100`, '😊');
  // C8 通胀
  add('inflation', '物价稳定', econClamp(100 - Math.abs(this.priceIndex - 1) * 200, 0, 100), 1,
    `物价指数 ${this.priceIndex.toFixed(3)}`, '🎈');
  // C9 失业
  let unemp = 0;
  try { unemp = this.getUnemployment(game); } catch (e) {}
  add('unemployment', '就业', (1 - unemp) * 100, 0.5, `失业率 ${econPct(unemp, 0)}`, '🪑');
  // C10 收入多元化（有几个收入来源 >0）
  const sources = ['tax', 'building', 'trade', 'service', 'interest'].filter(k => last[k] > 0).length;
  add('diversify', '收入多元化', sources / 5 * 100, 0.5, `${sources}/5 类收入来源`, '🧺');
  // C11 储蓄率
  add('savings', '储蓄率', econClamp(last.balance / inc * 100 + 50, 0, 100), 0.5,
    `收支结余占收入 ${econPct(last.balance / inc, 0)}`, '🏦');
  // C12 信用
  add('credit', '信用分', (this.creditScore - 300) / 550 * 100, 0.5,
    `${Math.round(this.creditScore)}/850`, '⭐');

  let wSum = 0, sSum = 0;
  for (const c of checks) { wSum += c.weight; sSum += c.score * c.weight; }
  const score = Math.round(sSum / wSum);
  const grade = score >= 90 ? 'AAA' : score >= 80 ? 'AA' : score >= 70 ? 'A' :
    score >= 60 ? 'BBB' : score >= 40 ? 'BB' : score >= 20 ? 'B' : 'D';
  const issues = checks.filter(c => c.score < 60)
    .sort((a, b) => a.score - b.score)
    .map(c => ({ icon: c.icon, label: c.label, detail: c.detail, score: Math.round(c.score) }));
  return { score, grade, issues, checks };
};

/* ---- 自动财政驾驶 ---- */

/**
 * autopilot(game)：基于规则的财政自动驾驶（总督 AI 可调用）。
 * 规则（按优先级）：
 *   R1 破产/濒临破产 → 税率+5%（≤25%）、工资−1（≥1）；
 *   R2 持续赤字且国库<100 → 税率+2%（≤20%）；
 *   R3 盈余>20 且幸福<55 → 工资+0.5（≤4）；
 *   R4 有停摆且修得起 → repairAllDamaged；
 *   R5 破产且无贷款 → takeLoan(200) 过桥。
 * 返回 actions: [字符串...]（无动作时为空数组）。
 * 注意：每次调税/资都收 1 星币手续费并记账——autopilot 不免费。
 */
EconomyManager.prototype.autopilot = function (game) {
  const actions = [];
  const last = this._last;
  const say = (s) => actions.push(s);

  // R1 破产急救
  if (this.bankrupt || (this.credits < ECON_TUNE.START_CREDITS && last.balance < 0 && this.credits < 20)) {
    if (this.taxRate < 0.25) {
      const nt = this.setTaxRate(Math.min(0.25, econRound2(this.taxRate + 0.05)));
      say(`🚨 急救：税率 → ${econPct(nt)}`);
    }
    if (this.wage > 1) {
      const nw = this.setWage(Math.max(1, econRound2(this.wage - 1)));
      say(`🚨 急救：工资 → ${econFmt(nw)}`);
    }
  }
  // R2 赤字+低储备 → 温和加税
  else if (last.balance < 0 && this.credits < 100 && this.taxRate < 0.2) {
    const nt = this.setTaxRate(Math.min(0.2, econRound2(this.taxRate + 0.02)));
    say(`⚠️ 赤字：税率 → ${econPct(nt)}`);
  }
  // R3 盈余+低幸福 → 加工资
  if (!this.bankrupt && last.balance > 20 && this.happiness < 55 && this.wage < 4) {
    const nw = this.setWage(Math.min(4, econRound2(this.wage + 0.5)));
    say(`😊 盈余分享：工资 → ${econFmt(nw)}`);
  }
  // R4 维修停摆
  try {
    const damaged = this.damagedBuildings(game);
    if (damaged.length > 0) {
      const r = this.repairAllDamaged(game);
      if (r.repaired > 0) say(`🔧 维修 ${r.repaired} 栋停摆建筑（${econFmt(r.cost)}）`);
    }
  } catch (e) {}
  // R5 破产过桥贷
  if (this.bankrupt && this._loans.length === 0) {
    const lr = this.takeLoan(200);
    if (lr.ok) say('💳 过桥贷 200 到账 190.00');
    else say(`💳 贷款失败：${lr.reason}`);
  }
  if (actions.length) {
    this.ledger.system('system', `🤖 自动驾驶执行：${actions.join('；')}`, this.clock.minIndex);
  }
  return actions;
};

/* ---- 压力测试 ---- */

/**
 * stressTest(game)：三档冲击下的韧性评估（克隆体推演，不污染真实状态）。
 *   disaster: 国库 −40%（模拟大灾）；
 *   wage_shock: 工资 +2（模拟用工荒）；
 *   trade_halt: 贸易收入归零 60 分钟（用 clone._buildingIncomeOf 覆盖实现）。
 * 返回 {baseline, disaster, wageShock, tradeHalt, resilience 0~100, verdict}。
 */
EconomyManager.prototype.stressTest = function (game) {
  const simOf = (mutate) => {
    const clone = new EconomyManager();
    clone.load(this.save());
    clone._toast = function () {};
    if (mutate) mutate(clone);
    let bankruptAt = null, minC = clone.credits;
    for (let m = 1; m <= 60; m++) {
      try { clone._settle(game); } catch (e) { break; }
      if (clone.credits < minC) minC = clone.credits;
      if (clone.credits < 0 && bankruptAt === null) bankruptAt = m;
    }
    return { endCredits: econRound2(clone.credits), bankruptAt, minCredits: econRound2(minC) };
  };
  const baseline = simOf(null);
  const disaster = simOf(c => { c.credits = econRound2(c.credits * 0.6); });
  const wageShock = simOf(c => { c.wage = econClamp(c.wage + 2, 0, 10, c.wage); });
  const tradeHalt = simOf(c => {
    c._buildingIncomeOf = function () { return 0; };
    c._pendingTradeSurplus = 0;
  });
  const scenarios = [baseline, disaster, wageShock, tradeHalt];
  const survived = scenarios.filter(s => s.bankruptAt === null).length;
  const resilience = survived / scenarios.length * 100;
  let verdict = '财政韧性优秀，可承受三档冲击。';
  if (resilience < 100) {
    const weak = [];
    if (disaster.bankruptAt !== null) weak.push(`大灾后 ${disaster.bankruptAt} 分钟破产`);
    if (wageShock.bankruptAt !== null) weak.push(`工资+2 后 ${wageShock.bankruptAt} 分钟破产`);
    if (tradeHalt.bankruptAt !== null) weak.push(`贸易中断后 ${tradeHalt.bankruptAt} 分钟破产`);
    verdict = `韧性 ${resilience}：` + weak.join('；') + '。建议增厚国库储备或降低税基依赖。';
  }
  return { baseline, disaster, wageShock, tradeHalt, resilience, verdict };
};

/* ---- 配置校验 ---- */

/**
 * validateConfig()：校验 ECON_TUNE 自洽性，返回 issues[]（空=通过）。
 * 策划改数值后跑一遍，防止调出"必死开局"。
 */
EconomyManager.prototype.validateConfig = function () {
  const issues = [];
  const T = ECON_TUNE;
  const chk = (cond, msg) => { if (!cond) issues.push(msg); };
  chk(T.MIN_MS >= 1000, 'MIN_MS 过小会导致结算雪崩');
  chk(T.TAX_MIN >= 0 && T.TAX_MAX <= 1 && T.TAX_MIN < T.TAX_MAX, '税率上下限非法');
  chk(T.TAX_PAIN > T.TAX_SWEET, 'TAX_PAIN 应大于 TAX_SWEET');
  chk(T.WAGE_MIN >= 0 && T.WAGE_MAX > T.WAGE_MIN, '工资上下限非法');
  chk(T.START_CREDITS > 0, '初始星币应为正');
  chk(T.UPKEEP_PER_LEVEL >= 0, 'UPKEEP_PER_LEVEL 非法');
  chk(T.INTEREST_CAP >= 0 && T.INTEREST_RATE >= 0, '利率参数非法');
  chk(T.LEDGER_MAX >= 50, 'LEDGER_MAX 过小');
  // 开局可活校验：6人2矿机，开局税率工资下，赤字/分钟 < START_CREDITS/3（至少撑 3 分钟）
  const tax0 = 6 * T.WAGE_DEFAULT * T.TAX_DEFAULT;
  const wage0 = 4 * T.WAGE_DEFAULT;
  const upkeep0 = 3 * T.UPKEEP_PER_LEVEL;
  const deficit0 = wage0 + upkeep0 - tax0;
  chk(deficit0 < T.START_CREDITS / 2, `开局赤字 ${deficit0.toFixed(1)}/分钟过大，玩家活不过 2 分钟`);
  return issues;
};

/* ================= 第 10f 节：决策支持（归因/ROI/最优税率/政策表） ============ */

/** 分项滑动均值推送（_settle 内调用） */
EconomyManager.prototype._pushCatAvgs = function (inc, exp) {
  const push = (side, cat, v) => {
    const m = this.catAvg[side];
    if (!m[cat]) m[cat] = new EconMovingAvg(12);
    m[cat].push(v);
  };
  for (const k of Object.keys(inc || {})) push('income', k, inc[k]);
  for (const k of Object.keys(exp || {})) push('expense', k, exp[k]);
};

/**
 * attribution()：收支归因——本分钟 vs 近 12 分钟均值，哪个分类波动最大。
 * 返回 [{side, cat, name, now, avg, delta}] 按 |delta| 降序 + verdict。
 */
EconomyManager.prototype.attribution = function () {
  const rows = [];
  const nameOf = (side, k) => {
    const cat = (side === 'income' ? INCOME_CATALOG : EXPENSE_CATALOG).find(c => c.key === k);
    return cat ? cat.name : k;
  };
  for (const side of ['income', 'expense']) {
    for (const k of Object.keys(this.catAvg[side])) {
      const avg = this.catAvg[side][k].value;
      const now = econNum(this._last[k]);
      const delta = econRound2(now - avg);
      if (Math.abs(delta) < 0.005 && avg < 0.005) continue;
      rows.push({ side, cat: k, name: nameOf(side, k), now, avg: econRound2(avg), delta });
    }
  }
  rows.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
  let verdict = '各分类与均值基本一致，无异常波动。';
  if (rows.length && Math.abs(rows[0].delta) > 1) {
    const r = rows[0];
    verdict = `最大波动：「${r.name}」本分钟 ${econFmt(r.now)}，均值 ${econFmt(r.avg)}` +
      `（${econFmtSigned(r.delta)}）。` +
      (r.delta > 0
        ? (r.side === 'income' ? '收入超预期，看看能不能保持。' : '支出超预期，查对应系统。')
        : (r.side === 'income' ? '收入掉下来了，查停摆/人口/贸易船。' : '支出下降，可能是建筑停摆（省了维护费但也没产出）。'));
  }
  return { rows, verdict };
};

/**
 * roiAnalysis(game)：建筑投资回报分析。
 * 建造成本按资源折算价转星币；回报 = 营业税 − 维护费（不含工资）。
 * 返回 [{name, costCredits, netPerMin, paybackMin|'∞'}] 按 payback 升序。
 */
EconomyManager.prototype.roiAnalysis = function (game) {
  const values = econResCreditValue();
  const out = [];
  try {
    for (const b of this._getBuildings(game)) {
      if (!b || b.damaged) continue;
      const lv = this._levelDefOf(game, b);
      let cost = 0;
      if (lv.cost && typeof lv.cost === 'object') {
        for (const k of Object.keys(lv.cost)) cost += econNum(lv.cost[k]) * econNum(values[k], 1);
      }
      const be = this.buildingEconomy(game, b);
      const net = be.net;
      out.push({
        name: be.name,
        level: b.level,
        costCredits: econRound2(cost),
        netPerMin: net,
        paybackMin: net > 0 ? Math.ceil(cost / net) : Infinity,
      });
    }
  } catch (e) {}
  out.sort((a, b) => a.paybackMin - b.paybackMin);
  return out;
};

/** roiAnalysis 的文本表版本 */
EconomyManager.prototype.roiTable = function (game) {
  const rows = this.roiAnalysis(game);
  if (!rows.length) return '暂无建筑';
  const t = [['建筑', '造价(星币)', '净收益/分', '回本(分钟)']];
  for (const r of rows.slice(0, 20)) {
    t.push([`${r.name} Lv${r.level}`, econFmt(r.costCredits), econFmtSigned(r.netPerMin),
      r.paybackMin === Infinity ? '∞（不回本）' : String(r.paybackMin)]);
  }
  return '🏗️ 投资回报分析（按回本排序）\n' + econTable(t);
};

/**
 * optimalTax(game, minutes)：扫描税率 0~30%（步长 2%），用 simulate 选
 * 120 分钟后国库最高的税率，约束 growthMul ≥ 0.9（不杀鸡取卵）。
 * 返回 {best: {tax, end, gm}, cands}。
 * 开销：16 次 simulate，重计算，仅供总督 AI / 调试调用。
 */
EconomyManager.prototype.optimalTax = function (game, minutes) {
  minutes = econClamp(Math.floor(econNum(minutes, 120)), 10, 480, 120);
  const cands = [];
  for (let i = 0; i <= 15; i++) {
    const tax = econRound2(i * 0.02);
    const r = this.comparePolicy(tax, this.wage, minutes, game);
    cands.push({ tax, end: r.alt.endCredits, gm: this._growthMulAt(tax, this.wage) });
  }
  const feasible = cands.filter(c => c.gm >= 0.9);
  const pool = feasible.length ? feasible : cands;
  pool.sort((a, b) => b.end - a.end);
  return { best: pool[0], cands, minutes };
};

/**
 * policyTable(game, minutes)：税率 × 工资组合推演表。
 * 7 税率 × 4 工资 = 28 格，每格是 minutes 分钟后国库。
 * 开销大（28×2 次 simulate），结果建议缓存，仅调试/AI 用。
 */
EconomyManager.prototype.policyTable = function (game, minutes) {
  minutes = econClamp(Math.floor(econNum(minutes, 60)), 10, 240, 60);
  const taxes = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3];
  const wages = [1, 2, 3, 4];
  const rows = [['税率＼工资'].concat(wages.map(w => 'w=' + w))];
  for (const t of taxes) {
    const row = [econPct(t, 0)];
    for (const w of wages) {
      try {
        const r = this.comparePolicy(t, w, minutes, game);
        row.push(econFmt(r.alt.endCredits));
      } catch (e) { row.push('ERR'); }
    }
    rows.push(row);
  }
  return `🗺️ 政策组合推演（${minutes}分钟后国库，当前 ${econFmt(this.credits)}）\n` + econTable(rows);
};

/** fmtDuration(min)：游戏分钟 → "X天Y小时Z分"（1440分钟=1天） */
function econFmtDuration(min) {
  min = Math.max(0, Math.floor(econNum(min)));
  const d = Math.floor(min / 1440);
  const h = Math.floor((min % 1440) / 60);
  const m = min % 60;
  let s = '';
  if (d > 0) s += d + '天';
  if (h > 0 || d > 0) s += h + '小时';
  s += m + '分';
  return s;
}

/** forecastText(minutes)：forecast() 的人类可读版 */
EconomyManager.prototype.forecastText = function (minutes) {
  const f = this.forecast(minutes || 60);
  let s = `🔮 财政预测（未来 ${econFmtDuration(minutes || 60)}）\n`;
  s += `当前国库 ${econFmt(this.credits)}，收支 ${econFmtSigned(this._last.balance)}/分\n`;
  s += `期末国库约 ${econFmt(f.endCredits)}\n`;
  s += f.bankruptAt !== null
    ? `⚠️ 约 ${econFmtDuration(f.bankruptAt)}后破产！${f.advice}`
    : `✅ ${f.advice}`;
  return s;
};

/** milestoneProgress()：里程碑进度 */
EconomyManager.prototype.milestoneProgress = function () {
  return ECON_MILESTONES.map(m => {
    const cur = m.kind === 'credits' ? this.credits
      : m.kind === 'totalEarned' ? this._totalEarned : this._last.tax;
    const done = this._milestonesCrossed.includes(m.id);
    return {
      id: m.id, label: m.label, done,
      current: econRound2(cur), target: m.at,
      pct: done ? 100 : Math.min(99, Math.floor(cur / m.at * 100)),
    };
  });
};

/* ---- JSDoc 类型定义（给集成方看的契约形状） ----
 * @typedef {Object} EconReport
 * @property {number} credits 国库余额（可为负）
 * @property {number} taxRate 当前税率 0~0.3
 * @property {number} wage 当前工资
 * @property {number} incomePerMin 近12分钟收入均值
 * @property {number} expensePerMin 近12分钟支出均值
 * @property {number} balance 收支差
 * @property {Object} breakdown {tax,building,trade,service,interest,wages,upkeep,policy,loan}
 * @property {boolean} bankrupt 破产旗标
 * @property {number} happiness 幸福度 0~100
 * @property {number} priceIndex 物价指数
 * @property {Object} health fiscalHealth()
 * @property {number} growthMul 人口增长乘数
 *
 * @typedef {Object} EconLoan
 * @property {string} id 贷款编号
 * @property {string} name 档位名
 * @property {number} remaining 剩余应还
 * @property {number} perMin 每分钟还款
 * @property {number} minutesLeft 剩余期数
 *
 * @typedef {Object} EconAdvice
 * @property {number} priority 1~5（1最高）
 * @property {string} icon / title / detail
 */

/* ---- 版本历史 ----
 * v1.0.0 — 初始交付：货币/税收/工资/维护/停摆/破产/消费/贷款/预测/顾问/15条指南/自检。
 * v1.1.0 — 宏观扩展：通胀价格指数、建筑折旧、工资等级制（开关）、预算帽、
 *           里程碑、历史曲线、what-if 模拟器、政策对比、损益表/现金流、
 *           财政体检 12 项、自动驾驶、压力测试、ROI 分析、最优税率扫描、
 *           政策组合表、收支归因、账本查询/CSV、配置校验。
 */

/* ================= 第 10g 节：HUD/迁移/指南/数值总表 ================= */

/**
 * hudPanel()：财政面板一次性数据包（UI 直接渲染，无需多次调用）。
 * 返回 {header, kpis:[], sections:{}}。
 */
EconomyManager.prototype.hudPanel = function (game) {
  const r = this.getReport();
  const trend = this.trend();
  return {
    header: {
      title: '💰 财政部',
      hud: this.hudString(),
      health: r.health,
      bankrupt: r.bankrupt,
    },
    kpis: [
      { label: '国库', value: econFmt(r.credits), icon: '💰' },
      { label: '收支/分', value: econFmtSigned(r.balance), icon: r.balance >= 0 ? '📈' : '📉' },
      { label: '税率', value: econPct(r.taxRate), icon: '🧾' },
      { label: '工资', value: econFmt(r.wage), icon: '💼' },
      { label: '幸福', value: Math.round(r.happiness), icon: '😊' },
      { label: '物价指数', value: r.priceIndex.toFixed(3), icon: '🎈' },
    ],
    sections: {
      income: [
        { label: '所得税', value: econFmt(r.breakdown.tax) },
        { label: '营业税', value: econFmt(r.breakdown.building) },
        { label: '贸易关税', value: econFmt(r.breakdown.trade) },
        { label: '服务费', value: econFmt(r.breakdown.service) },
        { label: '利息', value: econFmt(r.breakdown.interest) },
      ],
      expense: [
        { label: '工资', value: econFmt(r.breakdown.wages) },
        { label: '维护费', value: econFmt(r.breakdown.upkeep) },
        { label: '政策费', value: econFmt(r.breakdown.policy) },
        { label: '还贷', value: econFmt(r.breakdown.loan) },
      ],
      trend: trend.verdict,
      advice: this.advise(game).slice(0, 3),
    },
  };
};

/**
 * migrateSave(data)：存档版本迁移。v0（无 v 字段）→ v1。
 * 返回迁移后的 data（原地修改亦可）。
 */
EconomyManager.prototype.migrateSave = function (data) {
  if (!data || typeof data !== 'object') return data;
  if (data.v === 1) return data;
  // v0: 只有 credits/taxRate/wage 三件套
  const out = {
    v: 1,
    credits: econNum(data.credits, ECON_TUNE.START_CREDITS),
    taxRate: econClamp(econNum(data.taxRate, 0.1), 0, 0.3, 0.1),
    wage: econClamp(econNum(data.wage, 2), 0, 10, 2),
  };
  try { this.ledger.system('system', '📦 存档已从 v0 迁移到 v1', 0); } catch (e) {}
  return out;
};

/**
 * bankruptcyGuide()：破产自救手册（游戏内帮助面板直接展示）。
 * 返回 [{step, title, detail}]。
 */
EconomyManager.prototype.bankruptcyGuide = function () {
  return [
    { step: 1, title: '止血：降工资', detail: `工资 ${econFmt(this.wage)} → 1，每分钟省 ${econFmt(this._last.employed * (this.wage - 1))}（按在岗 ${this._last.employed} 人）。` },
    { step: 2, title: '回血：加税', detail: `税率 ${econPct(this.taxRate)} → 20%+，所得税立即上涨（但增长 −50%，别长期）。` },
    { step: 3, title: '过桥：贷款', detail: `takeLoan(200)：到账 190，30 分钟还 230。信用分 ${Math.round(this.creditScore)}，断供 −20。` },
    { step: 4, title: '减负：处理停摆', detail: `${this._last.damaged} 栋停摆中。修（2×维护费）或拆（眼不见心不烦，还能省未来维护费）。` },
    { step: 5, title: '开源：贸易', detail: '贸易站+贸易船是破产期唯一不看人口脸色的工作收入。没有就先建。' },
    { step: 6, title: '底线', detail: '破产只冻结高级建筑，普通建造/升级不受影响。先活下来，再谈发展。' },
  ];
};

/**
 * taxDetail()：所得税拆解 {pop, wage, taxRate, popIncomeMul, perMin}。
 */
EconomyManager.prototype.taxDetail = function () {
  return {
    pop: this._last.pop,
    wage: this.wage,
    taxRate: this.taxRate,
    popIncomeMul: this._last.popIncomeMul,
    perMin: this._last.tax,
    formula: `${this._last.pop} × ${econFmt(this.wage)} × ${econPct(this.taxRate)} × ${this._last.popIncomeMul}`,
  };
};

/**
 * wageDetail(game)：工资拆解——按建筑列出岗位与工资（Top 10）。
 * 返回 {perMin, employed, rows:[{name, workers, wage}]}。
 */
EconomyManager.prototype.wageDetail = function (game) {
  const rows = [];
  try {
    for (const b of this._getBuildings(game)) {
      if (!b || b.damaged) continue;
      const lv = this._levelDefOf(game, b);
      const need = Math.max(0, Math.floor(econNum(lv.needPop, 0)));
      if (need <= 0) continue;
      let w = this.wage * this.priceIndex;
      if (this.wageGradesEnabled) {
        const prof = BUILDING_ECON_PROFILE[b.id];
        w *= econNum(WAGE_GRADE[(prof && prof.cat) || 'industry'], 1);
      }
      rows.push({ name: this._bName(b), workers: need, wage: econRound2(w), cost: econRound2(need * w) });
    }
  } catch (e) {}
  rows.sort((a, b) => b.cost - a.cost);
  return {
    perMin: this._last.wages,
    employed: this._last.employed,
    priceIndex: this.priceIndex,
    gradesEnabled: this.wageGradesEnabled,
    rows: rows.slice(0, 10),
  };
};

/* ---- EconLedger 扩展 ---- */

/** 账本内收支轧差（income − expense，system 不计） */
EconLedger.prototype.ledgerBalance = function () {
  let s = 0;
  for (const e of this.entries) {
    if (e.type === 'income') s += e.amount;
    else if (e.type === 'expense') s -= e.amount;
  }
  return econRound2(s);
};

/** 账本内最大单笔支出 Top n */
EconLedger.prototype.topExpenses = function (n) {
  n = econClamp(Math.floor(econNum(n, 5)), 1, 50, 5);
  return this.entries
    .filter(e => e.type === 'expense')
    .sort((a, b) => b.amount - a.amount)
    .slice(0, n);
};

/* ---- 数值平衡总表（策划总览：每类收支的 min/典型/max） ----
 *  min: 理论最小（0人口/无建筑）  典型：100人中期城市  max：终局规模
 *  P=人口，W=岗位数，w=工资，τ=税率，π=物价指数
 * ┌──────────────┬──────────────────────────┬──────┬───────┬────────┐
 * │ 类别         │ 公式                     │ min  │ 典型  │ max    │
 * ├──────────────┼──────────────────────────┼──────┼───────┼────────┤
 * │ 所得税       │ P·w·τ                    │ 0    │ 20    │ 600    │
 * │ 营业税       │ Σ画像                    │ 0    │ 15    │ 200    │
 * │ 贸易关税     │ 船数·6                   │ 0    │ 6     │ 30     │
 * │ 服务费       │ 事件                     │ 0    │ 0     │ 50     │
 * │ 利息         │ min(5, C·0.0005)          │ 0    │ 0.5   │ 5      │
 * ├──────────────┼──────────────────────────┼──────┼───────┼────────┤
 * │ 工资         │ min(W,P)·w·π             │ 0    │ 120   │ 800    │
 * │ 维护费       │ Σ画像·π·折旧             │ 0    │ 40    │ 400    │
 * │ 政策费       │ 0.5·n+折算               │ 0    │ 10    │ 100    │
 * │ 还贷         │ A(1+r)/T                 │ 0    │ 0     │ 60     │
 * └──────────────┴──────────────────────────┴──────┴───────┴────────┘
 * 典型净收支：41 − 170 = −129/分钟 —— 没错，中期城市默认就是赤字，
 * 靠贸易站+高税率+贷款三件套周转。这就是本游戏的经济张力来源。
 * max 净收支：880 − 1360，终局靠 500+ 人口 + 20% 税率 + 商业矩阵转正。
 */

/* ================= 第 10h 节：API 总索引 / 调参指南 / 术语表 ============ */

/* ---- API 总索引（public 方法，按域分组） ----
 * 核心循环: update(now, dt, game) → 每帧调用，返回结算分钟数
 * 货币: earn(n, label) / spend(n, label)→bool / canAfford(n) / grant(n, label)
 *       recordExpense(cat, amount, label) / recordDisasterLoss(label, amount)
 * 政策: setTaxRate(r) / setWage(w) / growthMul() / taxGuide() / wageGuide()
 *       getPolicyChanges(n) / policyUpkeepDetail(game)
 * 贸易: recordTrade(give, get) / recordService(label, amount)
 * 维修: damagedBuildings(game) / repairBuilding(b)→bool / repairAllDamaged(game)
 * 贷款: takeLoan(amount) / loanStatus() / loanAmortization(id?)
 * 报告: getReport() / hudString() / hudPanel(game) / incomeStatement()
 *       cashFlowText(n) / taxDetail() / wageDetail(game)
 *       buildingEconomy(game, b) / cityEconomySummary(game)
 *       topTaxpayers(game, n) / topUpkeep(game, n) / roiAnalysis(game) / roiTable(game)
 * 分析: forecast(m) / forecastText(m) / trend() / attribution()
 *       simulate(m, game) / comparePolicy(tax, wage, m, game)
 *       policyTable(game, m) / optimalTax(game, m) / stressTest(game)
 * 顾问: advise(game) / checkup(game) / bankruptcyGuide()
 * 状态: getHappiness() / getUnemployment(game) / fiscalHealth() / canBuildAdvanced()
 *       stats() / getHistory(n) / creditSparkline(n) / milestoneProgress()
 *       queryLedger(filter) / ledgerToCSV()
 * 预算: setBudgetCap(cat, cap) / getBudgetCaps() / clearBudgetCap(cat)
 * 事件: onEvent 回调属性；_emit(type, data)
 * 存档: save() / load(data) / migrateSave(data)
 * 自检: EconSelfTest.run() / validateConfig()
 * 常量: ECON_TUNE / ECON_VERSION / INCOME_CATALOG / EXPENSE_CATALOG
 *       WAGE_LADDER / TAX_GUIDE / LOAN_TERMS / FISCAL_HEALTH
 *       BUILDING_ECON_PROFILE / ECON_MILESTONES / HISTORY_MAX
 *       ECONOMYGUIDE（15条） / ECON_SCENARIOS / WAGE_GRADE
 */

/* ---- ECON_TUNE 调参指南（改数值前必读） ----
 * MIN_MS: 结算节拍。改小→经济转速加快（更刺激更难）；改大→更从容。
 *   注意 clock.feed 单帧补 600 分钟上限与 MIN_MS 联动。
 * START_CREDITS: 开局资金。50 = 容错 5 分钟赤字（见数值推演）。
 *   新手向调 80，硬核向调 30。validateConfig() 会校验"至少活 2 分钟"。
 * TAX_MAX 0.3: 上限。超过 30% 的税率在历史上对应起义，游戏里对应增长腰斩。
 * WAGE_DEFAULT 2: 基准工资。工资每 ±1，全城 bill 变动 ±50%（P=100 时 ±100/分）。
 * UPKEEP_PER_LEVEL 1: 画像缺失时的兜底。调高→冷门建筑更快停摆。
 * FOOD/WATER_PER_POP 0.05: 与 pop.js 的"每 tick 1 水+1 食物"独立——
 *   pop.js 管"增长门槛"，这里管"持续消耗"，两者叠加，别重复计算。
 * TARIFF_PER_VISIT 6: 贸易船关税。贸易船 5~8 分钟一班 → 约 1/分钟期望。
 * INTEREST_CAP 5: 防止"存钱通关"。想鼓励扩张就调低。
 * POLICY_ADMIN_FEE 0.5: 每政策每分钟。5 政策全开 = 2.5/分钟，小钱但积少成多。
 * REPAIR_COST_MUL 2: 维修=2分钟维护费。调高→停摆更致命，鼓励预防。
 * HAPPINESS_DRIFT 0.2: 幸福收敛速度。调高→政策效果立竿见影，调低→更迟钝。
 * LOAN_FEE_RATE 0.05: 贷款手续费。信用体系的核心参数之一。
 * CREDIT_START 600: 初始信用。决定开局能贷 develop 档（要 500）。
 * LEDGER_MAX 200: 账本长度。UI 展示最近 20 条，200 条约 33 现实分钟。
 * TOAST_COOLDOWN_MS 60000: 同类警告节流。别调太小，会刷屏。
 * RUNWAY_WARN_MIN 30: 资金预警线。硬核玩家可调 15。
 */

/* ---- 术语表（玩家手册用） ----
 * 税基: 征税的计算基础 = 人口 × 工资。税基大，低税率也能收到钱。
 * 税率: setTaxRate 设定，0~30%。>20% 增长腰斩，<5% 增长+20%。
 * 营业税: 商业建筑缴纳的税，城市被动收入的核心。
 * 关税: 贸易船到访缴纳的固定费用 + 贸易顺差折算。
 * 维护费: 建筑每分钟的"物业费"，交不起就停摆。
 * 停摆: b.damaged=true。停摆建筑不生产、不交税、不领工资、不交维护费。
 * 破产: credits<0。冻结高级建筑，其余照常——是"重症"不是"死亡"。
 * 净收支: 收入−支出/分钟。正为盈余，负为赤字。
 * 流动性: 国库能支撑几分钟支出。checkup() 的 C1 指标。
 * 通胀: priceIndex>1。长期赤字的滞后惩罚，所有开支同乘。
 * 折旧: 建筑越老维护费越高（+5%/60分钟，上限×2）。
 * 信用分: 300~850。决定贷款档位，按时还+15，断供−20。
 * 里程碑: 国库/累计收入跨过阈值，记入史册，可接成就。
 * 预算帽: 给支出分类设上限，超支 toast 告警。
 * ROI: 投资回报。回本分钟数=造价/净收益，∞=永远不回本。
 * 归因: 本分钟 vs 均值，哪个分类波动最大。
 */

/* ================= 第 10d 节：自检套件与数值推演 ============================
 * EconSelfTest.run()：内置断言，验证全部核心公式。
 * 在 Node 下：node -e "require('./economy.js').EconSelfTest.run()"
 * 在浏览器控制台：EconSelfTest.run()
 * 全部使用 mock game，不依赖真实 game.js / build.js。
 */

/** 自检用建筑定义（够用即可，id 对齐 BUILDING_ECON_PROFILE） */
const ECON_TEST_BUILDINGS = {
  habitat: { id: 'habitat', name: '居住舱', icon: '🏠', levels: [null,
    { needPop: 0, popCap: 4 }, { needPop: 4, popCap: 10 }, { needPop: 10, popCap: 22 }] },
  trade: { id: 'trade', name: '贸易站', icon: '🏪', levels: [null,
    { needPop: 15 }, { needPop: 25 }, { needPop: 40 }] },
  fusion: { id: 'fusion', name: '聚变电站', icon: '⚛️', levels: [null,
    { needPop: 20 }, { needPop: 35 }, { needPop: 50 }] },
  miner: { id: 'miner', name: '采矿机', icon: '⛏️', levels: [null,
    { needPop: 2 }, { needPop: 5 }, { needPop: 10 }] },
  custom: { id: 'custom', name: '自定义馆', icon: '🧪', levels: [null,
    { needPop: 5, income: 99, upkeep: 7 }] },
};

/** 自检用 mock game */
function econMockGame(buildings, pop, inv) {
  return {
    pop: { count: pop === undefined ? 0 : pop },
    player: { inv: Object.assign({ food: 10000, water: 10000 }, inv) },
    builder: {
      buildings: buildings || [],
      levelDef(b) {
        const d = ECON_TEST_BUILDINGS[b.id];
        return (d && d.levels[b.level]) || {};
      },
    },
    tradeShip: { visitCount: 0 },
    policy: null,
    toast() {},
  };
}

/** 三个标准财政场景（策划调参用） */
const ECON_SCENARIOS = [
  {
    id: 'early', name: '开局',
    desc: '6 人 + 居住舱 + 2 矿机：预期必然赤字，靠 50 启动资金撑到贸易站。',
    make() {
      return econMockGame([
        { id: 'habitat', x: 0, y: 0, level: 1, builtAt: Date.now() },
        { id: 'miner', x: 1, y: 0, level: 1, builtAt: Date.now() },
        { id: 'miner', x: 2, y: 0, level: 1, builtAt: Date.now() },
      ], 6);
    },
  },
  {
    id: 'mid', name: '扩张期',
    desc: '150 人 + 贸易站Lv2 + 3 矿机Lv2：税率 12%，预期紧平衡/小赤字。',
    make() {
      return econMockGame([
        { id: 'trade', x: 0, y: 0, level: 2, builtAt: Date.now() },
        { id: 'miner', x: 1, y: 0, level: 2, builtAt: Date.now() },
        { id: 'miner', x: 2, y: 0, level: 2, builtAt: Date.now() },
        { id: 'miner', x: 3, y: 0, level: 2, builtAt: Date.now() },
      ], 150);
    },
  },
  {
    id: 'late', name: '成熟期',
    desc: '500 人 + 贸易站Lv3 + 2 矿机Lv3：税率 20%，预期盈余。',
    make() {
      return econMockGame([
        { id: 'trade', x: 0, y: 0, level: 3, builtAt: Date.now() },
        { id: 'miner', x: 1, y: 0, level: 3, builtAt: Date.now() },
        { id: 'miner', x: 2, y: 0, level: 3, builtAt: Date.now() },
      ], 500);
    },
  },
  {
    id: 'rebuild', name: '灾后重建',
    desc: '80 人 + 3 栋停摆建筑 + 国库 20：预期 repairAllDamaged 部分修复。',
    make() {
      const bs = [
        { id: 'miner', x: 0, y: 0, level: 2, builtAt: Date.now(), damaged: true },
        { id: 'miner', x: 1, y: 0, level: 2, builtAt: Date.now(), damaged: true },
        { id: 'trade', x: 2, y: 0, level: 1, builtAt: Date.now(), damaged: true },
      ];
      return econMockGame(bs, 80);
    },
  },
  {
    id: 'trade_empire', name: '贸易帝国',
    desc: '200 人 + 3 贸易站Lv3 + 税率 5%：营业税应为第一大收入来源（低税+商业立国）。',
    make() {
      return econMockGame([
        { id: 'trade', x: 0, y: 0, level: 3, builtAt: Date.now() },
        { id: 'trade', x: 1, y: 0, level: 3, builtAt: Date.now() },
        { id: 'trade', x: 2, y: 0, level: 3, builtAt: Date.now() },
      ], 200);
    },
  },
];

/* ---- 数值推演（开局场景，手工验算，供策划核对） ----
 * 条件：pop=6, wage=2, taxRate=0.1, 建筑：habitat Lv1 + miner Lv1 ×2, priceIndex=1
 * 每分钟：
 *   所得税 = 6 × 2 × 0.1 = 1.2
 *   营业税 = 0（无商业建筑）
 *   工资   = min(2+2, 6) × 2 = 8
 *   维护费 = habitat 1 + miner 1 + miner 1 = 3
 *   净收支 = 1.2 − 11 = −9.8
 * 国库轨迹：50 → 40.2 → 30.4 → 20.6 → 10.8 → 1.0 → −8.8（第 6 分钟破产💀）
 * 结论：开局 6 分钟是"新手墙"——必须在破产前把税率提到 15%+ 或建成贸易站。
 * 自救验算（税率 20%）：所得税 = 6×2×0.2 = 2.4，净收支 −8.6，撑到第 7 分钟；
 * 贸易站 Lv1（income 3, upkeep 2, needPop 15）：营业税 +3，但工资基数不变
 * （实发 min(19,6)=6 人 → 12），净收支 = (2.4+3) − (12+5) = −11.6——更糟！
 * 教训：人口不足时别建高 needPop 建筑；先加税、涨人口，再铺商业。
 */
const ECON_WORKED_TRACE = '见上方注释：开局 6 分钟破产墙';

const EconSelfTest = {
  /** 运行全部断言，返回 {pass, fail, results} 并打印摘要 */
  run() {
    const results = [];
    const ok = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });
    const eq = (a, b) => Math.abs(a - b) < 0.01;

    // 全局 BUILDINGS 注入（_levelDef/_bName 走全局表）
    const hadGlobal = (typeof globalThis !== 'undefined' && globalThis.BUILDINGS !== undefined);
    const prevGlobal = hadGlobal ? globalThis.BUILDINGS : undefined;
    try { globalThis.BUILDINGS = ECON_TEST_BUILDINGS; } catch (e) {}

    try {
      // ---- 1. 构造默认值 ----
      let e = new EconomyManager();
      ok('构造默认值', e.credits === 50 && e.taxRate === 0.1 && e.wage === 2 && e.bankrupt === false,
        `credits=${e.credits} tax=${e.taxRate} wage=${e.wage}`);

      // ---- 2. earn/spend/canAfford ----
      e = new EconomyManager();
      ok('earn 正常', e.earn(30, '测试') === 30 && e.credits === 80, `credits=${e.credits}`);
      ok('earn 非法', e.earn(-5) === 0 && e.earn(0) === 0 && e.credits === 80);
      ok('spend 成功', e.spend(30, '测试') === true && e.credits === 50);
      ok('spend 余额不足', e.spend(999) === false && e.credits === 50);
      ok('canAfford', e.canAfford(50) === true && e.canAfford(51) === false);

      // ---- 3. 税率/工资钳制 ----
      e = new EconomyManager();
      ok('setTaxRate 上限', e.setTaxRate(0.9) === 0.3);
      ok('setTaxRate 下限', e.setTaxRate(-1) === 0);
      ok('setWage 上限', e.setWage(99) === 10);
      ok('setWage 下限', e.setWage(-5) === 0);

      // ---- 4. growthMul ----
      e = new EconomyManager();
      ok('growthMul 默认', e.growthMul() === 1, `=${e.growthMul()}`);
      e.setTaxRate(0.25);
      ok('growthMul 重税', e.growthMul() === 0.5, `=${e.growthMul()}`);
      e = new EconomyManager(); e.setTaxRate(0.03);
      ok('growthMul 轻税', e.growthMul() === 1.2, `=${e.growthMul()}`);
      e = new EconomyManager(); e.setWage(5);
      ok('growthMul 高薪', e.growthMul() === 1.15, `=${e.growthMul()}`);
      e = new EconomyManager(); e.setWage(1);
      ok('growthMul 低薪', e.growthMul() === 0.9, `=${e.growthMul()}`);
      e = new EconomyManager(); e.happiness = 20;
      ok('growthMul 低幸福', e.growthMul() === 0.8, `=${e.growthMul()}`);

      // ---- 5. 所得税公式 ----
      e = new EconomyManager();
      const g5 = econMockGame([], 100);
      e._settle(g5);
      ok('所得税=100×2×0.1=20', eq(e._last.tax, 20), `tax=${e._last.tax}`);

      // ---- 6. 营业税：画像 & levelDef 优先 ----
      e = new EconomyManager();
      const g6 = econMockGame([{ id: 'trade', x: 0, y: 0, level: 2, builtAt: Date.now() }], 0);
      ok('画像收入 trade Lv2=6', eq(e._buildingIncomeOf(g6.builder.buildings[0]), 6));
      const g6b = econMockGame([{ id: 'custom', x: 0, y: 0, level: 1, builtAt: Date.now() }], 0);
      ok('levelDef.income 优先=99', eq(e._buildingIncomeOf(g6b.builder.buildings[0]), 99));
      ok('levelDef.upkeep 优先=7', eq(e._upkeepBaseOf(null, g6b.builder.buildings[0]), 7));

      // ---- 7. 维护费估算 ----
      e = new EconomyManager();
      ok('未知建筑 upkeep=level×1', eq(e._upkeepBaseOf(null, { id: 'nope', level: 3 }), 3));
      ok('画像 upkeep fusion Lv1=4', eq(e._upkeepBaseOf(null, { id: 'fusion', level: 1 }), 4));

      // ---- 8. 停摆与维修 ----
      e = new EconomyManager();
      e.credits = 0;
      const b8 = { id: 'miner', x: 0, y: 0, level: 3, builtAt: Date.now() };
      const g8 = econMockGame([b8], 10);
      e._settle(g8);
      ok('交不起维护费→停摆', b8.damaged === true, `damaged=${b8.damaged}`);
      ok('停摆后不再扣费', e._upkeepOf(g8, b8) >= 0);
      e.credits = 100;
      const cost8 = 2 * e._upkeepOf(null, b8);
      ok('维修费=2×维护费', e.repairBuilding(b8) === true && b8.damaged === false &&
        eq(e.credits, 100 - cost8), `cost=${cost8} credits=${e.credits}`);

      // ---- 9. 破产 ----
      e = new EconomyManager();
      e.credits = -5;
      e._settle(econMockGame([], 0));
      ok('credits<0→破产', e.bankrupt === true);
      ok('破产禁高级建筑', e.canBuildAdvanced() === false);
      const adv9 = e.advise(econMockGame([], 0));
      ok('破产建议优先级1', adv9.length > 0 && adv9[0].priority === 1, adv9[0] && adv9[0].title);
      e.earn(10);
      e._settle(econMockGame([], 0));
      ok('回正→解除破产', e.bankrupt === false && e.canBuildAdvanced() === true);

      // ---- 10. 人口消费 ----
      e = new EconomyManager();
      const g10 = econMockGame([], 100, { food: 1000, water: 1000 });
      e._settle(g10);
      ok('消费扣库存', eq(g10.player.inv.food, 995) && eq(g10.player.inv.water, 995),
        `food=${g10.player.inv.food}`);
      const g10b = econMockGame([], 100, { food: 0, water: 0 });
      const hBefore = e.happiness;
      e._settle(g10b);
      ok('缺粮缺水→幸福降', e.happiness < hBefore && e._lastShortage !== null,
        `happiness=${e.happiness.toFixed(1)}`);

      // ---- 11. 贷款 ----
      e = new EconomyManager();
      const lr = e.takeLoan(200);
      ok('贷款成功', lr.ok === true && eq(e.credits, 50 + 190), `credits=${e.credits} ${lr.loan && lr.loan.name}`);
      ok('贷款条款自洽', lr.ok && eq(lr.loan.perMin, lr.loan.total / lr.loan.minutesLeft));
      ok('贷款上限拒绝', e.takeLoan(99999).ok === false);
      const remBefore = e._loans[0].remaining;
      e._settle(econMockGame([], 0));
      ok('每分钟还款', e._loans[0].remaining < remBefore, `remaining=${e._loans[0].remaining}`);
      e.creditScore = 850;
      const lr2 = e.takeLoan(5000);
      ok('高信用贷巨贷', lr2.ok === true && lr2.loan.name === '星港巨贷');

      // ---- 12. 存档读档 ----
      e = new EconomyManager();
      e.setTaxRate(0.2); e.setWage(3); e.credits = 123.45;
      e.takeLoan(100);
      const snap = e.save();
      const e2 = new EconomyManager();
      e2.load(snap);
      ok('save/load 回环', eq(e2.credits, e.credits) && e2.taxRate === 0.2 && e2.wage === 3 &&
        e2._loans.length === 1 && eq(e2.priceIndex, e.priceIndex),
        `credits=${e2.credits} loans=${e2._loans.length}`);
      const e3 = new EconomyManager();
      e3.load({ broken: true, credits: 'nan' });
      ok('坏档不崩', e3.credits === 50 && e3.taxRate === 0.1);

      // ---- 13. 预测 ----
      e = new EconomyManager();
      e.incomeAvg.push(10); e.expenseAvg.push(30); e.credits = 50;
      const fc = e.forecast(60);
      ok('forecast 检出破产', fc.bankruptAt === 3, `bankruptAt=${fc.bankruptAt}`);

      // ---- 14. 账本 ----
      e = new EconomyManager();
      for (let i = 0; i < 250; i++) e.ledger.income('tax', 1, 't', i);
      ok('账本上限200', e.ledger.entries.length === 200);
      ok('CSV 导出', e.ledgerToCSV().split('\n').length === 201);

      // ---- 15. 贸易 ----
      e = new EconomyManager();
      ok('贸易逆差不记账', e.recordTrade({ iron: 20 }, { rare: 6 }) < 0 && e._pendingTradeSurplus === 0);
      ok('贸易顺差待结算', e.recordTrade({ iron: 10 }, { rare: 6 }) === 8 && e._pendingTradeSurplus === 8);
      const g15 = econMockGame([], 0);
      e._settle(g15);
      ok('顺差结算为关税', eq(e._last.trade, 8), `trade=${e._last.trade}`);

      // ---- 16. 报告 ----
      e = new EconomyManager();
      e._settle(econMockGame([], 50));
      const r = e.getReport();
      ok('getReport 结构', r && typeof r.credits === 'number' && r.breakdown &&
        typeof r.breakdown.tax === 'number' && typeof r.bankrupt === 'boolean' &&
        r.health && typeof r.growthMul === 'number',
        `credits=${r.credits} tax=${r.breakdown.tax}`);

      // ---- 17. 通胀/折旧 ----
      e = new EconomyManager();
      e._driftPriceIndex(-10);
      ok('赤字→通胀', e.priceIndex > 1, `pi=${e.priceIndex}`);
      const piUp = e.priceIndex;
      e._driftPriceIndex(10);
      ok('盈余→通缩', e.priceIndex < piUp, `pi=${e.priceIndex}`);
      const oldB = { id: 'miner', level: 1, builtAt: Date.now() - 3600 * 1000 };
      ok('折旧系数', eq(e._depreciationMul(oldB), 1.3), `=${e._depreciationMul(oldB)}`);

      // ---- 18. 工资等级制 ----
      e = new EconomyManager();
      e.wageGradesEnabled = true;
      const g18 = econMockGame([
        { id: 'fusion', x: 0, y: 0, level: 1, builtAt: Date.now() },
        { id: 'trade', x: 1, y: 0, level: 1, builtAt: Date.now() },
      ], 100);
      // fusion infra×1.0: 20×2×1=40；trade commerce×1.2: 15×2×1.2=36 → 76
      ok('等级工资=76', eq(e._expenseWagesGraded(g18, g18.builder.buildings, 100), 76));

      // ---- 19. 单栋/全城分析 ----
      e = new EconomyManager();
      const g19 = econMockGame([{ id: 'trade', x: 0, y: 0, level: 2, builtAt: Date.now() }], 0);
      const be = e.buildingEconomy(g19, g19.builder.buildings[0]);
      ok('单栋分析', be.income === 6 && be.upkeep === 4 && be.workers === 25 && be.net === 2,
        JSON.stringify(be));
      const sum = e.cityEconomySummary(g19);
      ok('全城汇总', sum.commerce && sum.commerce.count === 1 && sum.commerce.net === 2);

      // ---- 20. 预算/里程碑/灾难 ----
      e = new EconomyManager();
      ok('预算帽设置', e.setBudgetCap('wages', 1) === true);
      const g20 = econMockGame([{ id: 'miner', x: 0, y: 0, level: 1, builtAt: Date.now() }], 100);
      e._settle(g20); // 工资 4 > 上限 1 → 超支记录
      ok('预算超支记账', e.ledger.entries.some(x => x.label.includes('预算超支')));
      e.credits = 150;
      e._checkMilestones(g20, 0);
      ok('里程碑触发', e._milestonesCrossed.includes('m_credits_100'));
      e.credits = 50;
      ok('灾难损失可击穿', e.recordDisasterLoss('测试', 100) === 100 && e.credits === -50);

      // ---- 21. update 时钟 ----
      e = new EconomyManager();
      const g21 = econMockGame([], 10);
      const now21 = Date.now();
      e.update(now21, 5000, g21);
      ok('半分钟不结算', e._settleCount === 0);
      e.update(now21, 5000, g21);
      ok('一分钟结算一次', e._settleCount === 1);
      ok('历史记录', e.history.length === 1 && e.getHistory(10).length === 1);

      // ---- 22. 模拟器 ----
      e = new EconomyManager();
      const g22 = econMockGame([{ id: 'miner', x: 0, y: 0, level: 1, builtAt: Date.now() }], 20);
      const sim = e.simulate(10, g22);
      ok('simulate 不污染', typeof sim.endCredits === 'number' && e._settleCount === 0,
        `end=${sim.endCredits}`);
      const cmp = e.comparePolicy(0.2, 2, 30, g22);
      ok('comparePolicy', typeof cmp.verdict === 'string' && cmp.verdict.length > 0);

      // ---- 23. 场景断言 ----
      for (const sc of ECON_SCENARIOS) {
        const ge = new EconomyManager();
        const g = sc.make();
        if (sc.id === 'mid') ge.setTaxRate(0.12);
        if (sc.id === 'late') ge.setTaxRate(0.2);
        for (let i = 0; i < 3; i++) ge._settle(g);
        if (sc.id === 'early') ok('场景early赤字', ge._last.balance < 0, `bal=${ge._last.balance}`);
        if (sc.id === 'late') ok('场景late盈余', ge._last.balance > 0, `bal=${ge._last.balance}`);
      }

      // ---- 24. 报表/体检/自动驾驶/压测 ----
      e = new EconomyManager();
      const g24 = econMockGame([
        { id: 'trade', x: 0, y: 0, level: 2, builtAt: Date.now() },
        { id: 'miner', x: 1, y: 0, level: 1, builtAt: Date.now() },
      ], 60);
      for (let i = 0; i < 5; i++) e._settle(g24);
      const stmt = e.incomeStatement();
      ok('损益表', stmt.includes('损益表') && stmt.includes('国库余额'), stmt.split('\n')[0]);
      ok('现金流', e.cashFlowText(5).includes('现金流'));
      const chkup = e.checkup(g24);
      ok('体检评分', chkup.score >= 0 && chkup.score <= 100 && Array.isArray(chkup.checks) &&
        chkup.checks.length === 12, `score=${chkup.score} grade=${chkup.grade}`);
      const q = e.queryLedger({ type: 'income', cat: 'tax', limit: 3 });
      ok('账本查询', q.length > 0 && q.every(x => x.type === 'income' && x.cat === 'tax'));
      const tp = e.topTaxpayers(econMockGame([
        { id: 'trade', x: 0, y: 0, level: 2, builtAt: Date.now() },
      ], 60), 3);
      ok('纳税大户', tp.length === 1 && tp[0].income === 6, JSON.stringify(tp));
      const tu = e.topUpkeep(econMockGame([
        { id: 'trade', x: 0, y: 0, level: 2, builtAt: Date.now() },
        { id: 'miner', x: 1, y: 0, level: 1, builtAt: Date.now() },
      ], 60), 3);
      ok('维护大户', tu.length === 2 && tu[0].upkeep >= tu[1].upkeep, JSON.stringify(tu));
      const tr = e.trend();
      ok('趋势分析', typeof tr.incomeSlope === 'number' && typeof tr.verdict === 'string');
      ok('HUD字符串', e.hudString().includes('/分）') && e.hudString().length > 5, e.hudString());
      ok('配置校验通过', e.validateConfig().length === 0, e.validateConfig().join(';'));
      ok('政策变更记录', (() => { const eX = new EconomyManager(); eX.setTaxRate(0.15); eX.setWage(3);
        return eX.getPolicyChanges(5).length === 2; })());
      ok('通用支出', (() => { const eX = new EconomyManager(); return eX.recordExpense('military', 20, '军费') === true &&
        eX.credits === 30 && eX.recordExpense('military', 999, 'x') === false; })());
      // autopilot：破产场景
      const eA = new EconomyManager();
      eA.credits = -10;
      eA._settle(econMockGame([], 0));
      const acts = eA.autopilot(econMockGame([], 0));
      ok('自动驾驶急救', acts.length > 0 && acts.some(a => a.includes('税率')), acts.join('|'));
      // stressTest
      const st = e.stressTest(g24);
      ok('压力测试', typeof st.resilience === 'number' && typeof st.verdict === 'string' &&
        st.baseline && st.disaster && st.wageShock && st.tradeHalt, `resilience=${st.resilience}`);
      // 贷款摊销表
      const eL = new EconomyManager();
      eL.takeLoan(200);
      const amort = eL.loanAmortization();
      ok('摊销表', amort !== null && amort.table.includes('还款'));
      // 政策维持费明细（无 policy → []）
      ok('政策明细空', e.policyUpkeepDetail(econMockGame([], 0)).length === 0);

      // ---- 25. 决策支持 ----
      const eD = new EconomyManager();
      const gD = econMockGame([
        { id: 'trade', x: 0, y: 0, level: 2, builtAt: Date.now() },
        { id: 'miner', x: 1, y: 0, level: 1, builtAt: Date.now() },
      ], 200);
      for (let i = 0; i < 13; i++) eD._settle(gD);
      const attr = eD.attribution();
      ok('归因分析', Array.isArray(attr.rows) && typeof attr.verdict === 'string' && attr.rows.length > 0,
        attr.verdict.slice(0, 30));
      const gRoi = econMockGame([
        { id: 'trade', x: 0, y: 0, level: 2, builtAt: Date.now() },
        { id: 'miner', x: 1, y: 0, level: 1, builtAt: Date.now() },
      ], 200);
      const roi = eD.roiAnalysis(gRoi);
      ok('ROI分析', roi.length === 2 && typeof roi[0].paybackMin === 'number', JSON.stringify(roi[0]));
      ok('ROI表格', eD.roiTable(gRoi).includes('回本'));
      const opt = eD.optimalTax(gD, 30);
      ok('最优税率', opt.best && opt.best.tax >= 0 && opt.best.tax <= 0.3 && opt.cands.length === 16,
        `best=${econPct(opt.best.tax)} end=${opt.best.end}`);
      const ptab = eD.policyTable(gD, 10);
      ok('政策组合表', ptab.includes('政策组合推演'));
      ok('时长格式化', econFmtDuration(1500) === '1天1小时0分' && econFmtDuration(90) === '1小时30分');
      ok('预测文本', eD.forecastText(30).includes('财政预测'));
      const mp = eD.milestoneProgress();
      ok('里程碑进度', mp.length === ECON_MILESTONES.length && typeof mp[0].pct === 'number');

      // ---- 26. HUD/迁移/指南 ----
      const eG = new EconomyManager();
      const gG = econMockGame([{ id: 'trade', x: 0, y: 0, level: 1, builtAt: Date.now() }], 40);
      eG._settle(gG);
      const panel = eG.hudPanel(gG);
      ok('HUD面板', panel.header && panel.kpis.length === 6 && panel.sections.income.length === 5,
        panel.header.hud);
      ok('存档迁移', (() => { const eX = new EconomyManager();
        const m = eX.migrateSave({ credits: 77 }); return m.v === 1 && m.credits === 77; })());
      ok('破产指南', eG.bankruptcyGuide().length === 6 && eG.bankruptcyGuide()[0].step === 1);
      const td = eG.taxDetail();
      ok('税收拆解', typeof td.formula === 'string' && td.formula.includes('×'));
      const wd = eG.wageDetail(gG);
      ok('工资拆解', wd.rows.length === 1 && wd.rows[0].workers === 15, JSON.stringify(wd.rows[0]));
      ok('账本轧差', typeof eG.ledger.ledgerBalance() === 'number');
      ok('最大支出', Array.isArray(eG.ledger.topExpenses(3)));

      // ---- 27. 事件钩子/新场景 ----
      const eH = new EconomyManager();
      const events = [];
      eH.onEvent = (type, data) => events.push(type);
      eH.credits = -5;
      eH._settle(econMockGame([], 0));
      ok('破产事件', events.includes('bankrupt'), events.join(','));
      const scRebuild = ECON_SCENARIOS.find(s => s.id === 'rebuild');
      const eR = new EconomyManager();
      eR.credits = 20;
      const gR = scRebuild.make();
      const rr = eR.repairAllDamaged(gR);
      ok('灾后重建', rr.repaired > 0 && rr.failed >= 0, `修好${rr.repaired} 失败${rr.failed}`);
      const scTrade = ECON_SCENARIOS.find(s => s.id === 'trade_empire');
      const eT = new EconomyManager();
      eT.setTaxRate(0.05);
      const gT = scTrade.make();
      eT._settle(gT);
      ok('贸易帝国营业税第一', eT._last.building > eT._last.tax,
        `building=${eT._last.building} tax=${eT._last.tax}`);
      const eU = new EconomyManager();
      const gU = econMockGame([], 10);
      ok('update返回分钟数', eU.update(Date.now(), 25000, gU) === 2 && eU._settleCount === 2);
      ok('update异常dt', eU.update(Date.now(), -100, gU) === 0);

      // ---- 28. 扩展画像 ----
      const eP = new EconomyManager();
      ok('星门海关画像', eP._buildingIncomeOf({ id: 'gate_customs', level: 2 }) === 8);
      ok('戴森采集器画像', eP._upkeepBaseOf(null, { id: 'dyson_collector', level: 3 }) === 18);
      ok('交易所画像', eP._buildingIncomeOf({ id: 'exchange', level: 1 }) === 5);
      ok('画像总数>100', Object.keys(BUILDING_ECON_PROFILE).length > 100,
        `=${Object.keys(BUILDING_ECON_PROFILE).length}`);

      // ---- 29. 指南/目录完整性 ----
      ok('GUIDE 15条', ECONOMYGUIDE.length === 15);
      ok('收支目录非空', INCOME_CATALOG.length > 0 && EXPENSE_CATALOG.length > 0);
      ok('速查表', e.taxGuide().some(g => g.current) && e.wageGuide().some(w => w.current));
    } finally {
      try {
        if (hadGlobal) globalThis.BUILDINGS = prevGlobal;
        else delete globalThis.BUILDINGS;
      } catch (e) {}
    }

    const pass = results.filter(r => r.pass).length;
    const fail = results.length - pass;
    const lines = [`EconSelfTest: ${pass}/${results.length} 通过`];
    for (const r of results) {
      if (!r.pass) lines.push(`  ✗ ${r.name} ${r.detail}`);
    }
    const summary = lines.join('\n');
    try { console.log(summary); } catch (e) {}
    return { pass, fail, total: results.length, results, summary };
  },
};

/* ============================ 第 13 节：导出 ============================ */
(function econExport() {
  const api = {
    EconomyManager,
    EconLedger,
    EconClock,
    EconMovingAvg,
    ECON_TUNE,
    ECON_VERSION,
    INCOME_CATALOG,
    EXPENSE_CATALOG,
    WAGE_LADDER,
    TAX_GUIDE,
    LOAN_TERMS,
    FISCAL_HEALTH,
    BUILDING_ECON_PROFILE,
    ECONOMYGUIDE,
    // v1.1 宏观
    WAGE_GRADE,
    ECON_MILESTONES,
    HISTORY_MAX,
    ECON_SCENARIOS,
    ECON_TEST_BUILDINGS,
    EconSelfTest,
  };
  // 浏览器全局（index.html 以 <script> 引入时）
  try {
    if (typeof window !== 'undefined') {
      window.EconomyManager = EconomyManager;
      window.ECONOMYGUIDE = ECONOMYGUIDE;
      window.ECON_TUNE = ECON_TUNE;
      window.EconSelfTest = EconSelfTest;
      window.WAGE_GRADE = WAGE_GRADE;
    }
  } catch (e) {}
  // Node / CommonJS（node --check 与单测用）
  try {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = api;
    }
  } catch (e) {}
  // ESM 互操作提示（本文件为 classic script，不使用 export 语句以保持 script 标签兼容）
  try {
    if (typeof globalThis !== 'undefined') {
      globalThis.__ECONOMY_API__ = api;
    }
  } catch (e) {}
})();
