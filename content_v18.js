/* 星港 — content_v18.js：v1.8 内容（时间/维度/终极科技+60 / 成就+60 / 新灾难×5 / 新奇观×5 / 终极政策×10）
 *
 * 版本日志：
 *   v1.8.0  初始版本：科技×60（TECH_V18：时间/维度/终极三系，每系 20）/
 *           成就×60（ACH_V18：时间 12 / 维度 12 / 终极 12 / 建筑 8 /
 *           灾难 8 / 奇观 8）/ 新灾难×5（DISASTERS_V18 +
 *           class HazardPack18）/ 新奇观×5（WONDERS_V18，时间机器=第五胜利）/
 *           终极政策×10（POLICIES_V18，新分类「终极」）。
 * 维护约定（与 v1.5 一致）：
 *   - 本文件只做加法：不修改任何已有文件的源码，只扩展全局注册表、打防御性补丁；
 *   - 所有 game 对象读取均为防御式（判存在再读），时间/维度等管理器
 *     可能尚未接入——对应成就与灾难在这些系统上线后自动生效；
 *   - 新增建筑 cost 的 key 只用现有资源：
 *     iron / ice / rare / water / food / steel / tech / uranium / he3；
 *     时间机器奇观的 chronon 造价是例外（新资源，需 resources.js 先注册，
 *     未注册时按「材料不足」处理，防御性）；
 *   - 新增科技 fx 键见「一、科技 +60」处的键语义注释，TechTree.mul() 自动乘法叠加，
 *     加法型键（paradoxResist / heatDeathResist / overheatResist 等）由对应系统
 *     读取时自行加法汇总（上限 0.9）；
 *   - 自检：控制台运行 ContentV18SelfTest()。
 */

/* ═══════════════════════════════════════════════════════════════════════
 * 星港 v1.8 内容包（纯加法，不改任何已有文件）
 * 加载顺序：build.js、tech.js、achievements.js、disaster.js、policy.js、
 *   content_v15.js、buildings_v18.js 之后，直接扩展全局注册表：
 *   Object.assign(TECH_DEFS)、ACHIEVEMENT_DEFS.push、Object.assign(BUILDINGS)、
 *   Object.assign(POLICY_DEFS)，新增 TECH_BRANCHES.time/dim/omega、
 *   POLICY_CATS.omega，定义 class HazardPack18（新灾难调度器）。
 *
 * 六大块：
 *   一、科技 +60 —— TECH_V18 数组：时间系×20 / 维度系×20 / 终极系×20，
 *      每系 2 列 × 10 层 pre 链，终极项带跨列双前置；
 *   二、成就 +60 —— ACH_V18 数组：时间 12 / 维度 12 / 终极 12 /
 *      建筑 8 / 灾难 8 / 奇观 8，check 字段为判定描述文字，
 *      checkFn 为防御式判定函数；
 *   三、新灾难 ×5 —— DISASTERS_V18 配置表：维度裂缝 / 时间悖论 /
 *      热寂前兆 / 恒星风暴 / 引擎过热，每种含 warnMs / durationMs /
 *      effect / counter；
 *   四、新奇观 ×5 —— WONDERS_V18 配置表：时间机器（第五胜利）/
 *      维度之门 / 戴森球 / 行星引擎 / 欧米茄档案馆，
 *      同时注册进 BUILDINGS（单级、限建 1 座）；
 *   五、时间机器胜利补丁（第五胜利条件）；
 *   六、终极政策 ×10 —— POLICIES_V18：时间税 / 维度开放 / 戴森配额 /
 *      引擎优先 / 悖论管制 / 恒星国有化 / 档案公开 / 星门自由港 /
 *      热寂预案 / 欧米茄宪章。
 *
 * 防御性约定（game 对象接口一律判存在）：
 *   game.builder.buildings / game.pop.count / game.tech.has(id) 用前判存在；
 *   时间子（chronon）未注册时，相关成就 checkFn 恒为 false，
 *   时间机器奇观按「材料不足」处理（build.js 实现侧防御）。
 *
 * 自定义效果字段「★ 读取约定」：所有新字段（chrononYieldMul / paradoxResist /
 * heatDeathResist / dimCostMul / gateYieldMul / omegaYieldMul / winsGame='time_machine'
 * 等）都在对应条目注释里写清读取方式，供 build.js / disaster.js / resources.js /
 * tech.js / policy.js 防御性读取。
 * ═══════════════════════════════════════════════════════════════════════ */

// ==================== v1.8 小工具（防御性取值） ====================
const P18U = {
  st: (g) => (g && g.stats) || {},
  pop: (g) => (g && g.pop && typeof g.pop.count === 'number') ? g.pop.count : 0,
  // 建筑计数（防御）
  count: (g, id) => {
    try { return (g && g.builder && typeof g.builder.count === 'function') ? g.builder.count(id) : 0; }
    catch (e) { return 0; }
  },
  // 科技是否已解锁（防御）
  hasTech: (g, id) => {
    try { return !!(g && g.tech && typeof g.tech.has === 'function' && g.tech.has(id)); }
    catch (e) { return false; }
  },
  // 地面建筑总数（防御）
  buildingsTotal: (g) => {
    try { return (g && g.builder && Array.isArray(g.builder.buildings)) ? g.builder.buildings.length : 0; }
    catch (e) { return 0; }
  },
  // 某建筑最高等级（防御）
  maxLevel: (g, id) => {
    try {
      if (g && g.builder && Array.isArray(g.builder.buildings)) {
        let m = 0;
        for (const b of g.builder.buildings) if (b && b.id === id && !b.damaged) m = Math.max(m, b.level || 0);
        return m;
      }
      return (P18U.st(g)['maxLv_' + id] || 0);
    } catch (e) { return 0; }
  },
  // 时间子库存（防御：未注册返回 0）
  chronon: (g) => {
    try {
      if (g && g.resources && typeof g.resources.get === 'function') return g.resources.get('chronon') || 0;
      if (g && g.resources && g.resources.store) return g.resources.store.chronon || 0;
      return P18U.st(g).chronon || 0;
    } catch (e) { return 0; }
  },
};

// ==================== 一、科技 +60（总数 310） ====================
// 设计总纲：v1.8 的科技线是「时间、维度、终极」——
//   时间系（⏳）：玩弄时间本身，是第五胜利（时间机器）的门票；
//   维度系（🌀）：玩弄空间本身，是星门网络与维度之门的门票；
//   终极系（🌌）：欧米茄协议，是数值毕业与行星引擎的门票。
// 定价逻辑：三系单系点满约 5400 科技点，三系全满约 16200 点 ≈
//   v1.5 四系（3390 点）的 4.8 倍——v1.8 是给「已经赢过四次」的玩家准备的。
// 数组字段：{id, name, icon, desc, cost（科技点）, pre（前置 id 数组）, effect（效果描述文字）}，
//   另附 fx（机器可读倍率）/ branch / hint 供 tech.js 接入；
//   注册时 needs = pre，原样转入 TECH_DEFS。
// 新增分支（TECH_BRANCHES 未定义时跳过，不报错）
if (typeof TECH_BRANCHES !== 'undefined') {
  TECH_BRANCHES.time = { name: '时间', icon: '⏳', color: '#f0abfc' };
  TECH_BRANCHES.dim  = { name: '维度', icon: '🌀', color: '#67e8f9' };
  TECH_BRANCHES.omega = { name: '终极', icon: '🌌', color: '#fda4af' };
}

// v1.8 新增 fx 键语义（供时间/维度/终极系统读取；TechTree.mul() 自动乘法叠加）：
//   chrononYieldMul  时间子产量倍率（>1 = 更多）
//   buildSpeedMul    建造速度倍率（>1 = 更快）
//   paradoxResist    时间悖论/维度裂缝伤害减免（0~1，加法汇总，上限 0.9）
//   rewindEff        维修效率倍率（>1 = 更快，与回溯反应堆乘法叠加）
//   dimCostMul       维度系建筑建造成本倍率（<1 = 更便宜）
//   dimYieldMul      维度系建筑产量倍率（>1 = 更多）
//   gateYieldMul     星门系建筑产量倍率（>1 = 更多）
//   riftResist       维度裂缝伤害减免（0~1，加法汇总，上限 0.9）
//   omegaYieldMul    终极全局产量倍率（>1 = 更多）
//   omegaPowerMul    终极全局电力倍率（>1 = 更多）
//   heatDeathResist  热寂前兆伤害减免（0~1，加法汇总，上限 0.9）
// 布局：每系 2 列 × 10 层 pre 链，终极项为跨列双前置（逼双线毕业）。
const TECH_V18 = [
  // ═══════════ ⏳ 时间系 ×20 ═══════════
  // A 列 时间子线（t-time-1/3/5/…/19）：chrononYieldMul 十层叠加
  //   1.2×1.25×1.3×1.35×1.4×1.45×1.5×1.6×1.7×1.8 ≈ 39.2，
  //   时间子产量翻 39 倍 —— 「时间自由」的官方答案；
  // B 列 时间操控线（t-time-2/4/6/…/18）：buildSpeedMul / paradoxResist /
  //   rewindEff 交替，「快、硬、修」三修。
  // ── A 列：时间子线 ──
  // t-time-1 时间褶皱学：v1.8 开局第一科技 —— 时间子矿井的钥匙。
  //   数值：chrononYieldMul ×1.2，时间子产量的第一刀；
  //   定位：不点它，第五胜利连门都摸不着。
//   ※ 推演：矿井 Lv1（1/60 秒）→ 1.2/60 秒；50 chronon 从 50 分钟 → 42 分钟。
  { id: 't-time-1', name: '时间褶皱学', icon: '⏳', cost: 40, pre: [],
    desc: '时间不是一条河，是有很多褶皱的布 —— 我们学会了找褶皱。',
    effect: '时间子产量 +20%',
    fx: { chrononYieldMul: 1.2 }, branch: 'time',
    hint: '💡 v1.8 开局第一科技：解锁时间子矿井（chronon_mine）。' },
  // t-time-3 褶皱采矿术：chrononYieldMul ×1.25（叠加）。
  //   数值：1.2×1.25 = 1.5，时间子产量 +50%；
  //   联动：矿井 Lv1（1/60 秒）→ 1.5/60 秒。
//   ※ 推演：累计 ×1.5；矿井 Lv1 → 1.5/60 秒；50 chronon → 33 分钟。
  { id: 't-time-3', name: '褶皱采矿术', icon: '⛏️', cost: 60, pre: ['t-time-1'],
    desc: '从褶皱里「掏」时间子，手法越来越熟练。',
    effect: '时间子产量再 +25%（叠加）',
    fx: { chrononYieldMul: 1.25 }, branch: 'time',
    hint: '💡 时间子产量的第二刀，矿井回本加速。' },
  // t-time-5 因果筛：chrononYieldMul ×1.3（叠加）。
  //   数值：1.5×1.3 = 1.95，时间子产量接近翻倍。
//   ※ 推演：累计 ×1.95；矿井 Lv2（3/60 秒）→ 5.85/60 秒；50 chronon → 8.5 分钟。
  { id: 't-time-5', name: '因果筛', icon: '🕸️', cost: 90, pre: ['t-time-3'],
    desc: '把因果链筛一遍，时间子就漏下来了 —— 像筛金子。',
    effect: '时间子产量再 +30%（叠加）',
    fx: { chrononYieldMul: 1.3 }, branch: 'time',
    hint: '💡 筛金子式采矿，时间子产量接近翻倍。' },
  // t-time-7 褶皱深潜：chrononYieldMul ×1.35（叠加）。
  //   数值：1.95×1.35 ≈ 2.63，时间子产量翻 2.6 倍。
//   ※ 推演：累计 ×2.63；矿井 Lv3（8/60 秒）→ 21/60 秒；50 chronon → 2.4 分钟。
  { id: 't-time-7', name: '褶皱深潜', icon: '🤿', cost: 130, pre: ['t-time-5'],
    desc: '潜入更深的褶皱 —— 那里的时间子更「肥」。',
    effect: '时间子产量再 +35%（叠加）',
    fx: { chrononYieldMul: 1.35 }, branch: 'time',
    hint: '💡 深潜！时间子产量翻 2.6 倍。' },
  // t-time-9 时间富矿：chrononYieldMul ×1.4（叠加）。
  //   数值：2.63×1.4 ≈ 3.68，发现「时间富矿」。
//   ※ 推演：累计 ×3.68；单座 Lv3 → 29.4/60 秒；时间富矿名副其实。
  { id: 't-time-9', name: '时间富矿', icon: '💎', cost: 180, pre: ['t-time-7'],
    desc: '找到了一处时间富矿 —— 时间子的「金矿」。',
    effect: '时间子产量再 +40%（叠加）',
    fx: { chrononYieldMul: 1.4 }, branch: 'time',
    hint: '💡 时间富矿！产量翻 3.7 倍，矿井开始赚钱。' },
  // t-time-11 褶皱农场：chrononYieldMul ×1.45（叠加）。
  //   数值：3.68×1.45 ≈ 5.34 —— 从「采矿」到「种田」，时间子可再生了。
//   ※ 推演：累计 ×5.34；时间子从「采矿」变「种田」，可再生。
  { id: 't-time-11', name: '褶皱农场', icon: '🌾', cost: 240, pre: ['t-time-9'],
    desc: '我们不挖褶皱了，我们「种」褶皱 —— 时间子可再生了。',
    effect: '时间子产量再 +45%（叠加）',
    fx: { chrononYieldMul: 1.45 }, branch: 'time',
    hint: '💡 从采矿到种田：时间子可再生，产量翻 5.3 倍。' },
  // t-time-13 时间灌溉：chrononYieldMul ×1.5（叠加）。
  //   数值：5.34×1.5 ≈ 8.0，时间子产量翻 8 倍。
//   ※ 推演：累计 ×8.0；4 座 Lv3 → 256/60 秒；50 chronon → 12 秒。
  { id: 't-time-13', name: '时间灌溉', icon: '💧', cost: 310, pre: ['t-time-11'],
    desc: '给褶皱「浇水」—— 浇的是因果，长的的是时间子。',
    effect: '时间子产量再 +50%（叠加）',
    fx: { chrononYieldMul: 1.5 }, branch: 'time',
    hint: '💡 时间灌溉！产量翻 8 倍，时间子自由在望。' },
  // t-time-15 褶皱丰收：chrononYieldMul ×1.6（叠加）。
  //   数值：8.0×1.6 = 12.8，时间子产量翻 12.8 倍。
//   ※ 推演：累计 ×12.8；时间子管够，矿工「失业派对」。
  { id: 't-time-15', name: '褶皱丰收', icon: '🌟', cost: 390, pre: ['t-time-13'],
    desc: '丰收！褶皱农场的产量让矿工们举行了「失业派对」。',
    effect: '时间子产量再 +60%（叠加）',
    fx: { chrononYieldMul: 1.6 }, branch: 'time',
    hint: '💡 大丰收！产量翻 12.8 倍，时间子管够。' },
  // t-time-17 时间粮仓：chrononYieldMul ×1.7（叠加）。
  //   数值：12.8×1.7 ≈ 21.8，时间子产量翻 21.8 倍 —— 「粮仓」。
//   ※ 推演：累计 ×21.8；时间子成为硬通货，8 座 Lv3 → 1395/60 秒。
  { id: 't-time-17', name: '时间粮仓', icon: '🏚️', cost: 480, pre: ['t-time-15'],
    desc: '建一座粮仓，存的不是粮食，是「时间」—— 最硬的通货。',
    effect: '时间子产量再 +70%（叠加）',
    fx: { chrononYieldMul: 1.7 }, branch: 'time',
    hint: '💡 时间粮仓！产量翻 21.8 倍，时间子就是钱。' },
  // t-time-19 时间自由：chrononYieldMul ×1.8（叠加，A 列毕业）。
  //   数值：21.8×1.8 ≈ 39.2，时间子产量翻 39 倍 —— A 列毕业。
//   ※ 推演：累计 ×39.2（A 列毕业）；时间自由 —— 时间是零花钱。
  { id: 't-time-19', name: '时间自由', icon: '🕊️', cost: 580, pre: ['t-time-17'],
    desc: '时间子自由了 —— 从今天起，时间是我们的「零花钱」。',
    effect: '时间子产量再 +80%（叠加，A 列毕业，累计约 39 倍）',
    fx: { chrononYieldMul: 1.8 }, branch: 'time',
    hint: '💡 A 列毕业！时间子产量翻 39 倍，时间自由。' },
  // ── B 列：时间操控线 ──
  // t-time-2 时间流体力学：buildSpeedMul ×1.15 —— 建造速度的第一刀。
  //   数值：全城建造速度 +15%，奇观建造周期肉眼可见地缩短；
  //   联动：temporal_accelerator 的解锁前置（buildings_v18.js）。
//   ※ 推演：奇观 30 分钟工期 → 26 分钟；联动：解锁时间加速器。
  { id: 't-time-2', name: '时间流体力学', icon: '🌊', cost: 40, pre: [],
    desc: '时间像水一样流动 —— 我们学会了「顺流」建造。',
    effect: '全城建造速度 +15%',
    fx: { buildSpeedMul: 1.15 }, branch: 'time',
    hint: '💡 建造加速！解锁时间加速器（temporal_accelerator）。' },
  // t-time-4 因果护甲：paradoxResist 0.1 —— 时间系减伤的第一刀。
  //   数值：时间悖论/维度裂缝伤害 -10%（加法，上限 0.9）。
//   ※ 推演：悖论 1000 伤害 → 900；时间系减伤起点。
  { id: 't-time-4', name: '因果护甲', icon: '🛡️', cost: 60, pre: ['t-time-2'],
    desc: '给城市穿上因果护甲 —— 悖论来了，先问过护甲。',
    effect: '时间悖论/维度裂缝伤害 -10%',
    fx: { paradoxResist: 0.1 }, branch: 'time',
    hint: '💡 时间系减伤起点，悖论灾难的官方解法之一。' },
  // t-time-6 时间脚手架：buildSpeedMul ×1.2（叠加）。
  //   数值：1.15×1.2 = 1.38，建造速度 +38%。
//   ※ 推演：累计 ×1.38；奇观 30 分钟 → 22 分钟。
  { id: 't-time-6', name: '时间脚手架', icon: '🏗️', cost: 90, pre: ['t-time-4'],
    desc: '在时间里搭脚手架 —— 工人站在「昨天」上，盖「明天」的楼。',
    effect: '全城建造速度再 +20%（叠加）',
    fx: { buildSpeedMul: 1.2 }, branch: 'time',
    hint: '💡 建造速度 +38%，奇观工期大幅缩短。' },
  // t-time-8 倒带维修：rewindEff ×1.3 —— 维修效率的第一刀。
  //   数值：全城维修速度 +30%，与回溯反应堆乘法叠加。
//   ※ 推演：维修 30 分钟 → 23 分钟；与回溯反应堆 ×1.5 乘法 → ×1.95。
  { id: 't-time-8', name: '倒带维修', icon: '🔧', cost: 130, pre: ['t-time-6'],
    desc: '维修的新方法：把损坏的部分「倒带」回去 —— 像没坏过。',
    effect: '全城维修速度 +30%',
    fx: { rewindEff: 1.3 }, branch: 'time',
    hint: '💡 维修加速！与回溯反应堆乘法叠加。' },
  // t-time-10 悖论缓冲：paradoxResist +0.15（叠加）。
  //   数值：0.1+0.15 = 0.25，悖论/裂缝伤害 -25%。
//   ※ 推演：累计 -25%；悖论 1000 伤害 → 750，从灭顶变麻烦。
  { id: 't-time-10', name: '悖论缓冲', icon: '🧽', cost: 180, pre: ['t-time-8'],
    desc: '在时间线上垫一层「缓冲垫」—— 悖论摔下来，不疼。',
    effect: '时间悖论/维度裂缝伤害再 -15%（叠加）',
    fx: { paradoxResist: 0.15 }, branch: 'time',
    hint: '💡 减伤叠到 -25%，悖论从「灭顶」变「麻烦」。' },
  // t-time-12 时间预制件：buildSpeedMul ×1.25（叠加）。
  //   数值：1.38×1.25 ≈ 1.73，建造速度 +73%。
//   ※ 推演：累计 ×1.73；奇观 30 分钟 → 17 分钟，搭积木速度。
  { id: 't-time-12', name: '时间预制件', icon: '📦', cost: 240, pre: ['t-time-10'],
    desc: '在「昨天」预制好构件，「今天」直接组装 —— 工期砍半。',
    effect: '全城建造速度再 +25%（叠加）',
    fx: { buildSpeedMul: 1.25 }, branch: 'time',
    hint: '💡 建造速度 +73%，奇观像搭积木一样快。' },
  // t-time-14 因果焊接：rewindEff ×1.5（叠加）。
  //   数值：1.3×1.5 = 1.95，维修速度接近翻倍。
//   ※ 推演：累计 ×1.95；维修 30 分钟 → 15 分钟，灾后重建神器。
  { id: 't-time-14', name: '因果焊接', icon: '🔥', cost: 310, pre: ['t-time-12'],
    desc: '用因果链做焊条 —— 焊上的，比原来还结实。',
    effect: '全城维修速度再 +50%（叠加）',
    fx: { rewindEff: 1.5 }, branch: 'time',
    hint: '💡 维修速度 ×1.95，灾后重建神器。' },
  // t-time-16 悖论免疫（Ⅰ）：paradoxResist +0.2（叠加）。
  //   数值：0.25+0.2 = 0.45，悖论/裂缝伤害 -45%。
//   ※ 推演：累计 -45%；悖论 1000 伤害 → 550，基本无害化。
  { id: 't-time-16', name: '悖论免疫（Ⅰ）', icon: '💉', cost: 390, pre: ['t-time-14'],
    desc: '给城市打第一针「悖论疫苗」—— 副作用是：偶尔会梦见明天。',
    effect: '时间悖论/维度裂缝伤害再 -20%（叠加）',
    fx: { paradoxResist: 0.2 }, branch: 'time',
    hint: '💡 减伤叠到 -45%，悖论基本无害化。' },
  // t-time-18 时间3D打印：buildSpeedMul ×1.3（叠加，B 列毕业）。
  //   数值：1.73×1.3 ≈ 2.24，建造速度翻 2.2 倍 —— B 列毕业。
//   ※ 推演：累计 ×2.24（B 列毕业）；奇观 30 分钟 → 13 分钟。
  { id: 't-time-18', name: '时间3D打印', icon: '🖨️', cost: 480, pre: ['t-time-16'],
    desc: '终极建造术：从时间里「打印」建筑 —— 墨盒是昨天，纸是明天。',
    effect: '全城建造速度再 +30%（叠加，B 列毕业，累计约 2.2 倍）',
    fx: { buildSpeedMul: 1.3 }, branch: 'time',
    hint: '💡 B 列毕业！建造速度翻 2.2 倍，基建狂魔完全体。' },
  // t-time-20 欧米茄钟：双线毕业，时间系终点 —— 解锁时间机器奇观。
  //   数值：chrononYieldMul ×2.0 + buildSpeedMul ×1.5；
  //   前置：t-time-18（B 列毕业）+ t-time-19（A 列毕业），逼双线毕业。
//   ※ 推演：时间子 ×2.0（A 列 39.2 → 78.4）；建造 ×1.5；解锁时间机器。
  { id: 't-time-20', name: '欧米茄钟', icon: '⏰', cost: 700, pre: ['t-time-18', 't-time-19'],
    desc: '宇宙的终极时钟 —— 滴答声里，藏着时间机器的图纸。双线毕业，时间系终点。',
    effect: '时间子产量 ×2.0，建造速度 ×1.5；解锁奇观「时间机器」建造',
    fx: { chrononYieldMul: 2.0, buildSpeedMul: 1.5 }, branch: 'time',
    hint: '💡 时间系终点：解锁时间机器！第五胜利的门票。' },
  // ═══════════ 🌀 维度系 ×20 ═══════════
  // A 列 维度建筑线（t-dim-1/3/5/…/19）：dimCostMul 十层叠加
  //   0.92×0.9×0.88×0.85×0.82×0.8×0.78×0.75×0.72×0.7 ≈ 0.12，
  //   维度系建筑成本打 1.2 折 —— 「维度基建狂魔」的官方答案；
  // B 列 星门线（t-dim-2/4/6/…/18）：gateYieldMul / riftResist 交替，
  //   星门系产量与裂缝减伤双修。
  // ── A 列：维度建筑线 ──
  // t-dim-1 维度测绘：dimCostMul ×0.92 —— 维度建筑成本的第一刀。
  //   数值：维度系建筑（星门系建筑）建造成本 -8%；
  //   定位：维度玩法的起点，星门流必点。
//   ※ 推演：星门（假设 1000 钢）→ 920 钢；维度起点，星门流必点。
  { id: 't-dim-1', name: '维度测绘', icon: '🗺️', cost: 40, pre: [],
    desc: '先画地图，再盖房子 —— 维度也一样，只是地图有 11 维。',
    effect: '维度系建筑建造成本 -8%',
    fx: { dimCostMul: 0.92 }, branch: 'dim',
    hint: '💡 维度起点：解锁星门信标（gate_beacon），星门流必点。' },
  // t-dim-3 维度建材：dimCostMul ×0.9（叠加）。
  //   数值：0.92×0.9 = 0.828，成本打 8.3 折。
//   ※ 推演：累计 ×0.828；星门 → 828 钢，开始便宜。
  { id: 't-dim-3', name: '维度建材', icon: '🧱', cost: 60, pre: ['t-dim-1'],
    desc: '从维度褶皱里开采建材 —— 比钢轻，比钢硬，还便宜。',
    effect: '维度系建筑建造成本再 -10%（叠加）',
    fx: { dimCostMul: 0.9 }, branch: 'dim',
    hint: '💡 维度建材！成本打 8.3 折，星门越建越便宜。' },
  // t-dim-5 维度施工队：dimCostMul ×0.88（叠加）。
  //   数值：0.828×0.88 ≈ 0.729，成本打 7.3 折。
//   ※ 推演：累计 ×0.729；星门 → 729 钢；联动：解锁星门炮台。
  { id: 't-dim-5', name: '维度施工队', icon: '👷', cost: 90, pre: ['t-dim-3'],
    desc: '一支能在维度里施工的队伍 —— 他们的安全帽有 11 个面。',
    effect: '维度系建筑建造成本再 -12%（叠加）',
    fx: { dimCostMul: 0.88 }, branch: 'dim',
    hint: '💡 维度施工队！成本打 7.3 折，解锁星门炮台（gate_defense）。' },
  // t-dim-7 跨维度物流：dimCostMul ×0.85（叠加）。
  //   数值：0.729×0.85 ≈ 0.62，成本打 6.2 折。
//   ※ 推演：累计 ×0.62；星门 → 620 钢；联动：解锁星门医疗站。
  { id: 't-dim-7', name: '跨维度物流', icon: '🚚', cost: 130, pre: ['t-dim-5'],
    desc: '建材走维度捷径运输 —— 运费砍半，时间砍到 0。',
    effect: '维度系建筑建造成本再 -15%（叠加）',
    fx: { dimCostMul: 0.85 }, branch: 'dim',
    hint: '💡 维度物流！成本打 6.2 折，解锁星门医疗站（gate_medic）。' },
  // t-dim-9 维度预制：dimCostMul ×0.82（叠加）。
  //   数值：0.62×0.82 ≈ 0.508，成本打 5 折 —— 腰斩。
//   ※ 推演：累计 ×0.508（腰斩）；星门 → 508 钢；联动：解锁中继站。
  { id: 't-dim-9', name: '维度预制', icon: '📦', cost: 180, pre: ['t-dim-7'],
    desc: '在维度里预制建筑，运出来直接组装 —— 成本腰斩。',
    effect: '维度系建筑建造成本再 -18%（叠加，累计约 5 折）',
    fx: { dimCostMul: 0.82 }, branch: 'dim',
    hint: '💡 成本腰斩！解锁星门中继站（gate_relay）。' },
  // t-dim-11 维度折叠：dimCostMul ×0.8（叠加）。
  //   数值：0.508×0.8 ≈ 0.406，成本打 4 折。
//   ※ 推演：累计 ×0.406；星门 → 406 钢，星门变日用品。
  { id: 't-dim-11', name: '维度折叠', icon: '🌀', cost: 240, pre: ['t-dim-9'],
    desc: '把建筑「折」小再运 —— 运费按体积算，折叠后 почти不要钱。',
    effect: '维度系建筑建造成本再 -20%（叠加）',
    fx: { dimCostMul: 0.8 }, branch: 'dim',
    hint: '💡 维度折叠！成本打 4 折，星门变日用品。' },
  // t-dim-13 维度打印：dimCostMul ×0.78（叠加）。
  //   数值：0.406×0.78 ≈ 0.317，成本打 3.2 折。
//   ※ 推演：累计 ×0.317；星门 → 317 钢，印钞机模式。
  { id: 't-dim-13', name: '维度打印', icon: '🖨️', cost: 310, pre: ['t-dim-11'],
    desc: '直接从维度里「打印」建筑 —— 墨盒是空间，纸也是空间。',
    effect: '维度系建筑建造成本再 -22%（叠加）',
    fx: { dimCostMul: 0.78 }, branch: 'dim',
    hint: '💡 维度打印！成本打 3.2 折，基建进入印钞机模式。' },
  // t-dim-15 维度批发：dimCostMul ×0.75（叠加）。
  //   数值：0.317×0.75 ≈ 0.238，成本打 2.4 折。
//   ※ 推演：累计 ×0.238；星门 → 238 钢，论斤卖。
  { id: 't-dim-15', name: '维度批发', icon: '🏷️', cost: 390, pre: ['t-dim-13'],
    desc: '维度建材搞批发 —— 量大从优，优到离谱。',
    effect: '维度系建筑建造成本再 -25%（叠加）',
    fx: { dimCostMul: 0.75 }, branch: 'dim',
    hint: '💡 维度批发！成本打 2.4 折，星门论斤卖。' },
  // t-dim-17 维度免费：dimCostMul ×0.72（叠加）。
  //   数值：0.238×0.72 ≈ 0.171，成本打 1.7 折 —— 接近免费。
//   ※ 推演：累计 ×0.171；星门 → 171 钢，几乎免费。
  { id: 't-dim-17', name: '维度免费', icon: '🎁', cost: 480, pre: ['t-dim-15'],
    desc: '维度建筑的成本，第一次比「人工费」还低 —— 几乎免费。',
    effect: '维度系建筑建造成本再 -28%（叠加）',
    fx: { dimCostMul: 0.72 }, branch: 'dim',
    hint: '💡 接近免费！成本打 1.7 折，星门随便建。' },
  // t-dim-19 维度共产：dimCostMul ×0.7（叠加，A 列毕业）。
  //   数值：0.171×0.7 ≈ 0.12，成本打 1.2 折 —— A 列毕业。
//   ※ 推演：累计 ×0.12（A 列毕业）；星门 → 120 钢，随便建。
  { id: 't-dim-19', name: '维度共产', icon: '🌈', cost: 580, pre: ['t-dim-17'],
    desc: '维度里的物质，按需分配 —— 建造成本打 1.2 折，A 列毕业。',
    effect: '维度系建筑建造成本再 -30%（叠加，A 列毕业，累计约 1.2 折）',
    fx: { dimCostMul: 0.7 }, branch: 'dim',
    hint: '💡 A 列毕业！维度建筑成本打 1.2 折，基建狂魔毕业。' },
  // ── B 列：星门线 ──
  // t-dim-2 维度信标学：gateYieldMul ×1.2 —— 星门系产量的第一刀。
  //   数值：星门系建筑产量 +20%；
  //   联动：gate_beacon 的解锁前置（buildings_v18.js）。
//   ※ 推演：信标贸易量 100 → 120；联动：解锁星门信标。
  { id: 't-dim-2', name: '维度信标学', icon: '📡', cost: 40, pre: [],
    desc: '信标是维度的灯塔 —— 先有点亮灯塔的知识，才有贸易。',
    effect: '星门系建筑产量 +20%',
    fx: { gateYieldMul: 1.2 }, branch: 'dim',
    hint: '💡 星门产量第一刀：解锁星门信标（gate_beacon）。' },
  // t-dim-4 裂缝预警：riftResist 0.1 —— 裂缝减伤的第一刀。
  //   数值：维度裂缝伤害 -10%（加法，上限 0.9）。
//   ※ 推演：裂缝 1000 伤害 → 900；裂缝减伤起点。
  { id: 't-dim-4', name: '裂缝预警', icon: '⚠️', cost: 60, pre: ['t-dim-2'],
    desc: '裂缝张开前 30 秒，警报先响 —— 30 秒，够疏散一座城。',
    effect: '维度裂缝伤害 -10%',
    fx: { riftResist: 0.1 }, branch: 'dim',
    hint: '💡 裂缝减伤起点，维度裂缝灾难的官方解法之一。' },
  // t-dim-6 星门增压：gateYieldMul ×1.25（叠加）。
  //   数值：1.2×1.25 = 1.5，星门系产量 +50%。
//   ※ 推演：累计 ×1.5；信标贸易量 100 → 150，开始起飞。
  { id: 't-dim-6', name: '星门增压', icon: '🔋', cost: 90, pre: ['t-dim-4'],
    desc: '给星门「增压」—— 通过量翻倍，产量跟着翻。',
    effect: '星门系建筑产量再 +25%（叠加）',
    fx: { gateYieldMul: 1.25 }, branch: 'dim',
    hint: '💡 星门产量 +50%，贸易量开始起飞。' },
  // t-dim-8 裂缝封堵：riftResist +0.15（叠加）。
  //   数值：0.1+0.15 = 0.25，裂缝伤害 -25%。
//   ※ 推演：累计 -25%；裂缝 1000 伤害 → 750，小裂缝不致命。
  { id: 't-dim-8', name: '裂缝封堵', icon: '🧱', cost: 130, pre: ['t-dim-6'],
    desc: '小裂缝，直接拿东西堵上 —— 简单粗暴，但有效。',
    effect: '维度裂缝伤害再 -15%（叠加）',
    fx: { riftResist: 0.15 }, branch: 'dim',
    hint: '💡 裂缝减伤 -25%，小裂缝不再致命。' },
  // t-dim-10 星门扩容：gateYieldMul ×1.3（叠加）。
  //   数值：1.5×1.3 = 1.95，星门系产量接近翻倍。
//   ※ 推演：累计 ×1.95；信标贸易量 100 → 195，贸易质变。
  { id: 't-dim-10', name: '星门扩容', icon: '🚪', cost: 180, pre: ['t-dim-8'],
    desc: '星门从「单车道」扩成「八车道」—— 产量接近翻倍。',
    effect: '星门系建筑产量再 +30%（叠加）',
    fx: { gateYieldMul: 1.3 }, branch: 'dim',
    hint: '💡 星门产量翻倍！贸易流质变点。' },
  // t-dim-12 裂缝缝合：riftResist +0.2（叠加）。
  //   数值：0.25+0.2 = 0.45，裂缝伤害 -45%。
//   ※ 推演：累计 -45%；裂缝 1000 伤害 → 550，基本无害化。
  { id: 't-dim-12', name: '裂缝缝合', icon: '🪡', cost: 240, pre: ['t-dim-10'],
    desc: '大裂缝，用维度线「缝」上 —— 针脚很密，裂缝很疼。',
    effect: '维度裂缝伤害再 -20%（叠加）',
    fx: { riftResist: 0.2 }, branch: 'dim',
    hint: '💡 裂缝减伤 -45%，维度裂缝基本无害化。' },
  // t-dim-14 星门网络协议：gateYieldMul ×1.35（叠加）。
  //   数值：1.95×1.35 ≈ 2.63，星门系产量翻 2.6 倍。
//   ※ 推演：累计 ×2.63；网络效应，星门产量翻 2.6 倍。
  { id: 't-dim-14', name: '星门网络协议', icon: '📜', cost: 310, pre: ['t-dim-12'],
    desc: '所有星门用同一套协议 —— 网络效应，产量翻 2.6 倍。',
    effect: '星门系建筑产量再 +35%（叠加）',
    fx: { gateYieldMul: 1.35 }, branch: 'dim',
    hint: '💡 网络效应！星门产量翻 2.6 倍。' },
  // t-dim-16 裂缝免疫（Ⅰ）：riftResist +0.2（叠加）。
  //   数值：0.45+0.2 = 0.65，裂缝伤害 -65%。
//   ※ 推演：累计 -65%；裂缝 1000 伤害 → 350，裂缝变景观。
  { id: 't-dim-16', name: '裂缝免疫（Ⅰ）', icon: '💉', cost: 390, pre: ['t-dim-14'],
    desc: '给城市打第一针「裂缝疫苗」—— 副作用是：偶尔看见重影。',
    effect: '维度裂缝伤害再 -20%（叠加）',
    fx: { riftResist: 0.2 }, branch: 'dim',
    hint: '💡 裂缝减伤 -65%，裂缝从灾难变景观。' },
  // t-dim-18 星门奇点：gateYieldMul ×1.4（叠加，B 列毕业）。
  //   数值：2.63×1.4 ≈ 3.68，星门系产量翻 3.7 倍 —— B 列毕业。
//   ※ 推演：累计 ×3.68（B 列毕业）；信标贸易量 100 → 368。
  { id: 't-dim-18', name: '星门奇点', icon: '🌟', cost: 480, pre: ['t-dim-16'],
    desc: '星门的终极形态：奇点 —— 通过量无限，产量翻 3.7 倍，B 列毕业。',
    effect: '星门系建筑产量再 +40%（叠加，B 列毕业，累计约 3.7 倍）',
    fx: { gateYieldMul: 1.4 }, branch: 'dim',
    hint: '💡 B 列毕业！星门产量翻 3.7 倍，贸易自由。' },
  // t-dim-20 维度之心：双线毕业，维度系终点 —— 解锁维度之门奇观。
  //   数值：dimYieldMul ×2.0 + riftResist +0.3；
  //   前置：t-dim-18（B 列毕业）+ t-dim-19（A 列毕业），逼双线毕业。
//   ※ 推演：维度产量 ×2.0；裂缝减伤叠满 0.95（上限 0.9）；解锁维度之门。
  { id: 't-dim-20', name: '维度之心', icon: '💙', cost: 700, pre: ['t-dim-18', 't-dim-19'],
    desc: '维度的心脏 —— 跳动声里，藏着维度之门的钥匙。双线毕业，维度系终点。',
    effect: '维度系建筑产量 ×2.0，裂缝伤害再 -30%；解锁奇观「维度之门」建造',
    fx: { dimYieldMul: 2.0, riftResist: 0.3 }, branch: 'dim',
    hint: '💡 维度系终点：解锁维度之门！裂缝减伤叠满 0.95（上限 0.9）。' },
  // ═══════════ 🌌 终极系 ×20 ═══════════
  // A 列 欧米茄产量线（t-omega-1/3/5/…/19）：omegaYieldMul 十层叠加
  //   1.15^10 ≈ 4.05，全局产量翻 4 倍 —— 「欧米茄」的含义；
  // B 列 热寂防御线（t-omega-2/4/6/…/18）：heatDeathResist / omegaPowerMul 交替，
  //   热寂减伤加法叠满 0.75（上限 0.9），电力乘区叠满约 ×2.0。
  // ── A 列：欧米茄产量线 ──
  // t-omega-1 行星引擎原理：omegaYieldMul ×1.15 —— 终极产量的第一刀。
  //   数值：全局产量 +15%；
  //   联动：engine_thruster 的解锁前置（buildings_v18.js）。
//   ※ 推演：铁矿 10/周期 → 11.5；联动：解锁行星推进器。
  { id: 't-omega-1', name: '行星引擎原理', icon: '🚀', cost: 50, pre: [],
    desc: '第一课：行星是可以「开」的 —— 原理很简单，工程很难。',
    effect: '全局产量 +15%',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 终极起点：解锁行星推进器（engine_thruster）。' },
  // t-omega-3 废热利用：omegaYieldMul ×1.15（叠加）。
  //   数值：1.15×1.15 ≈ 1.32；联动：engine_cooling 的解锁前置。
//   ※ 推演：累计 ×1.32；联动：解锁引擎冷却塔。
  { id: 't-omega-3', name: '废热利用', icon: '♨️', cost: 80, pre: ['t-omega-1'],
    desc: '废热不是垃圾，是没放对地方的能源 —— 捡起来。',
    effect: '全局产量再 +15%（叠加）',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 废热变宝！解锁引擎冷却塔（engine_cooling）。' },
  // t-omega-5 行星级调度：omegaYieldMul ×1.15（叠加）。
  //   数值：1.32×1.15 ≈ 1.52；联动：engine_control 的解锁前置。
//   ※ 推演：累计 ×1.52；联动：解锁引擎控制中心。
  { id: 't-omega-5', name: '行星级调度', icon: '🎛️', cost: 120, pre: ['t-omega-3'],
    desc: '调度一座城市很难，调度一颗行星 —— 需要新的数学。',
    effect: '全局产量再 +15%（叠加）',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 行星级调度！解锁引擎控制中心（engine_control）。' },
  // t-omega-7 聚变燃料学：omegaYieldMul ×1.15（叠加）。
  //   数值：1.52×1.15 ≈ 1.75；联动：engine_fuel 的解锁前置。
//   ※ 推演：累计 ×1.75；联动：解锁燃料精炼厂。
  { id: 't-omega-7', name: '聚变燃料学', icon: '⚛️', cost: 170, pre: ['t-omega-5'],
    desc: 'He3 的 108 种用法 —— 第 109 种，我们正在发明。',
    effect: '全局产量再 +15%（叠加）',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 燃料学！解锁燃料精炼厂（engine_fuel）。' },
  // t-omega-9 行星防御学：omegaYieldMul ×1.15（叠加）。
  //   数值：1.75×1.15 ≈ 2.01，产量翻倍；联动：engine_bastion 的解锁前置。
//   ※ 推演：累计 ×2.01（产量翻倍）；联动：解锁引擎堡垒。
  { id: 't-omega-9', name: '行星防御学', icon: '🛡️', cost: 230, pre: ['t-omega-7'],
    desc: '防御一颗行星 —— 城墙要修到「大气层」那么高。',
    effect: '全局产量再 +15%（叠加，累计约 2 倍）',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 产量翻倍！解锁引擎堡垒（engine_bastion）。' },
  // t-omega-11 欧米茄农业：omegaYieldMul ×1.15（叠加）。
  //   数值：2.01×1.15 ≈ 2.31。
//   ※ 推演：累计 ×2.31；食物自由。
  { id: 't-omega-11', name: '欧米茄农业', icon: '🌾', cost: 300, pre: ['t-omega-9'],
    desc: '在行星引擎的废热里种田 —— 产量翻倍，口味翻倍。',
    effect: '全局产量再 +15%（叠加）',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 欧米茄农业！产量翻 2.3 倍，食物自由。' },
  // t-omega-13 欧米茄工业：omegaYieldMul ×1.15（叠加）。
  //   数值：2.31×1.15 ≈ 2.66。
//   ※ 推演：累计 ×2.66；工业毕业。
  { id: 't-omega-13', name: '欧米茄工业', icon: '🏭', cost: 380, pre: ['t-omega-11'],
    desc: '工业的终极形态：全自动化、全智能、全产量。',
    effect: '全局产量再 +15%（叠加）',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 欧米茄工业！产量翻 2.7 倍，工业毕业。' },
  // t-omega-15 欧米茄商业：omegaYieldMul ×1.15（叠加）。
  //   数值：2.66×1.15 ≈ 3.06，产量翻 3 倍。
//   ※ 推演：累计 ×3.06；商业毕业，钱只是数字。
  { id: 't-omega-15', name: '欧米茄商业', icon: '💱', cost: 470, pre: ['t-omega-13'],
    desc: '商业的终极形态：买与卖之间，没有「等待」。',
    effect: '全局产量再 +15%（叠加，累计约 3 倍）',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 产量翻 3 倍！商业毕业，钱只是数字。' },
  // t-omega-17 欧米茄社会：omegaYieldMul ×1.15（叠加）。
  //   数值：3.06×1.15 ≈ 3.52。
//   ※ 推演：累计 ×3.52；大同社会 Pro。
  { id: 't-omega-17', name: '欧米茄社会', icon: '🌈', cost: 570, pre: ['t-omega-15'],
    desc: '社会的终极形态：每个人做每件事，都是「最优解」。',
    effect: '全局产量再 +15%（叠加）',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 产量翻 3.5 倍！社会毕业，大同社会 Pro。' },
  // t-omega-19 欧米茄文明：omegaYieldMul ×1.15（叠加，A 列毕业）。
  //   数值：3.52×1.15 ≈ 4.05，产量翻 4 倍 —— A 列毕业。
//   ※ 推演：累计 ×4.05（A 列毕业）；解锁欧米茄档案馆奇观。
  { id: 't-omega-19', name: '欧米茄文明', icon: '🌌', cost: 680, pre: ['t-omega-17'],
    desc: '文明的终极形态：欧米茄 —— 产量翻 4 倍，A 列毕业。',
    effect: '全局产量再 +15%（叠加，A 列毕业，累计约 4 倍）',
    fx: { omegaYieldMul: 1.15 }, branch: 'omega',
    hint: '💡 A 列毕业！产量翻 4 倍，解锁欧米茄档案馆奇观。' },
  // ── B 列：热寂防御线 ──
  // t-omega-2 热寂观测：heatDeathResist 0.1 —— 热寂减伤的第一刀。
  //   数值：热寂前兆伤害 -10%（加法，上限 0.9）。
//   ※ 推演：热寂 1000 伤害 → 900；热寂减伤起点。
  { id: 't-omega-2', name: '热寂观测', icon: '🔭', cost: 50, pre: [],
    desc: '宇宙在变冷 —— 我们第一次「看见」了热寂。',
    effect: '热寂前兆伤害 -10%',
    fx: { heatDeathResist: 0.1 }, branch: 'omega',
    hint: '💡 热寂减伤起点，热寂前兆灾难的官方解法之一。' },
  // t-omega-4 欧米茄电网：omegaPowerMul ×1.15 —— 电力乘区的第一刀。
  //   数值：全城电力 +15%，与 gate_relay 乘法叠加。
//   ※ 推演：电力 660 → 759；与中继站 ×1.35 乘法 → ×1.55。
  { id: 't-omega-4', name: '欧米茄电网', icon: '⚡', cost: 80, pre: ['t-omega-2'],
    desc: '电网的终极形态：欧米茄 —— 电，到处都是电。',
    effect: '全城电力 +15%',
    fx: { omegaPowerMul: 1.15 }, branch: 'omega',
    hint: '💡 电力 +15%！与星门中继站乘法叠加。' },
  // t-omega-6 热寂护甲：heatDeathResist +0.12（叠加）。
  //   数值：0.1+0.12 = 0.22，热寂伤害 -22%。
//   ※ 推演：累计 -22%；热寂 1000 伤害 → 780，城市保暖。
  { id: 't-omega-6', name: '热寂护甲', icon: '🧥', cost: 120, pre: ['t-omega-4'],
    desc: '给城市穿上「保暖衣」—— 热寂来了，先问过衣服。',
    effect: '热寂前兆伤害再 -12%（叠加）',
    fx: { heatDeathResist: 0.12 }, branch: 'omega',
    hint: '💡 热寂减伤 -22%，城市开始「保暖」。' },
  // t-omega-8 欧米茄电站：omegaPowerMul ×1.2（叠加）。
  //   数值：1.15×1.2 = 1.38，电力 +38%。
//   ※ 推演：累计 ×1.38；电力 660 → 911。
  { id: 't-omega-8', name: '欧米茄电站', icon: '🔋', cost: 170, pre: ['t-omega-6'],
    desc: '电站的终极形态：欧米茄 —— 一座，顶一百座。',
    effect: '全城电力再 +20%（叠加）',
    fx: { omegaPowerMul: 1.2 }, branch: 'omega',
    hint: '💡 电力 +38%！电站毕业。' },
  // t-omega-10 热寂缓冲：heatDeathResist +0.15（叠加）。
  //   数值：0.22+0.15 = 0.37，热寂伤害 -37%。
//   ※ 推演：累计 -37%；热寂 1000 伤害 → 630；联动：解锁引擎首都。
  { id: 't-omega-10', name: '热寂缓冲', icon: '🧽', cost: 230, pre: ['t-omega-8'],
    desc: '在热寂和城市之间，垫一层「缓冲垫」—— 冷，传过来就慢了。',
    effect: '热寂前兆伤害再 -15%（叠加）',
    fx: { heatDeathResist: 0.15 }, branch: 'omega',
    hint: '💡 热寂减伤 -37%！解锁引擎首都（engine_capital）。' },
  // t-omega-12 欧米茄输电：omegaPowerMul ×1.25（叠加）。
  //   数值：1.38×1.25 ≈ 1.73，电力 +73%。
//   ※ 推演：累计 ×1.73；电力 660 → 1142，零损耗。
  { id: 't-omega-12', name: '欧米茄输电', icon: '🔌', cost: 300, pre: ['t-omega-10'],
    desc: '输电的终极形态：零损耗 —— 发多少，到多少。',
    effect: '全城电力再 +25%（叠加）',
    fx: { omegaPowerMul: 1.25 }, branch: 'omega',
    hint: '💡 电力 +73%！输电零损耗。' },
  // t-omega-14 热寂对抗：heatDeathResist +0.18（叠加）。
  //   数值：0.37+0.18 = 0.55，热寂伤害 -55%。
//   ※ 推演：累计 -55%；热寂 1000 伤害 → 450，热寂变天气。
  { id: 't-omega-14', name: '热寂对抗', icon: '🔥', cost: 380, pre: ['t-omega-12'],
    desc: '对抗热寂的终极方法：自己「发热」—— 比宇宙冷得慢。',
    effect: '热寂前兆伤害再 -18%（叠加）',
    fx: { heatDeathResist: 0.18 }, branch: 'omega',
    hint: '💡 热寂减伤 -55%！热寂从灾难变天气。' },
  // t-omega-16 欧米茄储能：omegaPowerMul ×1.3（叠加，B 列电力毕业）。
  //   数值：1.73×1.3 ≈ 2.24，电力翻 2.2 倍。
//   ※ 推演：累计 ×2.24；电力 660 → 1478，停电成历史。
  { id: 't-omega-16', name: '欧米茄储能', icon: '🪫', cost: 470, pre: ['t-omega-14'],
    desc: '储能的终极形态：欧米茄 —— 存下的电，够用一百年。',
    effect: '全城电力再 +30%（叠加，电力累计约 2.2 倍）',
    fx: { omegaPowerMul: 1.3 }, branch: 'omega',
    hint: '💡 电力翻 2.2 倍！储能毕业，停电成为历史。' },
  // t-omega-18 热寂免疫（Ⅰ）：heatDeathResist +0.2（叠加，B 列毕业）。
  //   数值：0.55+0.2 = 0.75，热寂伤害 -75% —— B 列毕业。
//   ※ 推演：累计 -75%（B 列毕业）；热寂 1000 伤害 → 250。
  { id: 't-omega-18', name: '热寂免疫（Ⅰ）', icon: '💉', cost: 570, pre: ['t-omega-16'],
    desc: '给城市打第一针「热寂疫苗」—— 副作用是：冬天不再冷。',
    effect: '热寂前兆伤害再 -20%（叠加，B 列毕业，累计 -75%）',
    fx: { heatDeathResist: 0.2 }, branch: 'omega',
    hint: '💡 B 列毕业！热寂减伤 -75%，热寂基本无害化。' },
  // t-omega-20 欧米茄协议：双线毕业，终极系终点 —— 解锁行星引擎奇观。
  //   数值：omegaYieldMul ×1.5 + heatDeathResist +0.15（叠满 0.9 上限）；
  //   前置：t-omega-18（B 列毕业）+ t-omega-19（A 列毕业），逼双线毕业。
//   ※ 推演：产量 ×1.5（累计 ×6.1）；热寂叠满 0.9；解锁行星引擎。
  { id: 't-omega-20', name: '欧米茄协议', icon: '📜', cost: 800, pre: ['t-omega-18', 't-omega-19'],
    desc: '终极协议 —— 签署之日，行星引擎点火。双线毕业，终极系终点。',
    effect: '全局产量 ×1.5，热寂伤害再 -15%（叠满上限 0.9）；解锁奇观「行星引擎」建造',
    fx: { omegaYieldMul: 1.5, heatDeathResist: 0.15 }, branch: 'omega',
    hint: '💡 终极系终点：解锁行星引擎！v1.8 的毕业典礼。' },
];

// ---- TECH_V18 → TECH_DEFS 注册（防御式；needs = pre） ----
if (typeof TECH_DEFS !== 'undefined') {
  const _defs18 = {};
  for (const t of TECH_V18) {
    _defs18[t.id] = {
      name: t.name, icon: t.icon, branch: t.branch, cost: t.cost,
      needs: Array.isArray(t.pre) ? t.pre.slice() : [],
      desc: t.desc + ' [' + t.effect + ']',
      hint: t.hint, fx: t.fx || {},
    };
  }
  Object.assign(TECH_DEFS, _defs18);
}

// 科技展示顺序：三系依次排布（每系按列展开：A 列 10 层 → B 列 10 层）
if (typeof TECH_ORDER !== 'undefined' && Array.isArray(TECH_ORDER)) {
  TECH_ORDER.push(
    't-time-1', 't-time-3', 't-time-5', 't-time-7', 't-time-9',
    't-time-11', 't-time-13', 't-time-15', 't-time-17', 't-time-19',
    't-time-2', 't-time-4', 't-time-6', 't-time-8', 't-time-10',
    't-time-12', 't-time-14', 't-time-16', 't-time-18', 't-time-20',
    't-dim-1', 't-dim-3', 't-dim-5', 't-dim-7', 't-dim-9',
    't-dim-11', 't-dim-13', 't-dim-15', 't-dim-17', 't-dim-19',
    't-dim-2', 't-dim-4', 't-dim-6', 't-dim-8', 't-dim-10',
    't-dim-12', 't-dim-14', 't-dim-16', 't-dim-18', 't-dim-20',
    't-omega-1', 't-omega-3', 't-omega-5', 't-omega-7', 't-omega-9',
    't-omega-11', 't-omega-13', 't-omega-15', 't-omega-17', 't-omega-19',
    't-omega-2', 't-omega-4', 't-omega-6', 't-omega-8', 't-omega-10',
    't-omega-12', 't-omega-14', 't-omega-16', 't-omega-18', 't-omega-20',
  );
}

// ==================== 二、成就 +60（总数 337） ====================
// 设计总纲：60 项 = 时间 12（玩弄时间的故事）+ 维度 12（玩弄空间的故事）+
//   终极 12（毕业的故事）+ 建筑 8（盖终极房子的故事）+
//   灾难 8（与终极灾难搏斗的故事）+ 奇观 8（封神的故事）。
// 数组字段：{id, name, icon, desc, check（判定描述文字）, cat（类别）}；
//   另附 tip（解锁 toast 文案）/ hint（解锁指引）/ checkFn（防御式判定函数）。
// 注册时 ACHIEVEMENT_DEFS.push({id, name, icon, desc, tip, hint, check: checkFn})，
//   与 v1.5 的 dx-/hy-/zd-/zy-/jz-/wj-/js-/qg- 体系衔接，id 前缀不重叠。
// 所有 checkFn 均为防御式：空 game（null/{}）下绝不抛错（自检覆盖）。
const ACH_V18 = [
  // ---- ⏳ 时间 12 项 ----
  // 设计：时间成就按「第一铲→铺开→加速→减速→护盾→档案→反应堆→
  //   产量毕业→建造毕业→减伤毕业→双线毕业→时间自由」排布。
  // ※ 难度：★☆☆☆☆ · 时机：开局（t-time-1 后立刻）
  // ※ 路线：t-time-1（40 点）→ 矿井 Lv1，v1.8 开局 5 分钟。
  { id: 'tm-first', name: '第一铲·时间', icon: '⏱️', cat: '时间',
    desc: '建成第一个时间子矿井', check: '时间子矿井（chronon_mine）≥ 1',
    tip: '⏱️ 第一铲·时间：星港的疆域，从此有了「时间」这一层。',
    hint: '💡 建成时间子矿井 chronon_mine，需科技 t-time-1。',
    checkFn: (g) => P18U.count(g, 'chronon_mine') >= 1 },
  // ※ 难度：★☆☆☆☆ · 时机：前期（10 分钟）
  // ※ 路线：矿井 Lv1（1.2/60 秒）→ 9 分钟攒够。
  { id: 'tm-10chronon', name: '时间富翁', icon: '💰', cat: '时间',
    desc: '时间子库存达到 10', check: '时间子库存 ≥ 10',
    tip: '💰 时间富翁：你的钱包里，装着 10 个「时间子」。',
    hint: '💡 攒 10 个时间子（chronon，需 resources.js 注册）。',
    checkFn: (g) => P18U.chronon(g) >= 10 },
  // ※ 难度：★★☆☆☆ · 时机：前期（电力富余后）
  // ※ 路线：t-time-3（累计 100 点）→ 加速器 Lv1，电力富余后。
  { id: 'tm-accel', name: '快进人生', icon: '⏩', cat: '时间',
    desc: '建成时间加速器', check: '时间加速器（temporal_accelerator）≥ 1',
    tip: '⏩ 时间加速器建成：全城按下了快进键。',
    hint: '💡 建成时间加速器，需科技 t-time-3。',
    checkFn: (g) => P18U.count(g, 'temporal_accelerator') >= 1 },
  // ※ 难度：★★☆☆☆ · 时机：中期（32 分钟灾难前）
  // ※ 路线：t-time-5（累计 190 点）→ 减速罩 Lv1，32 分钟灾难前。
  { id: 'tm-decel', name: '慢放灾难', icon: '⏪', cat: '时间',
    desc: '建成时间减速罩', check: '时间减速罩（temporal_decelerator）≥ 1',
    tip: '⏪ 时间减速罩展开：灾难？慢放一下。',
    hint: '💡 建成时间减速罩，需科技 t-time-5。',
    checkFn: (g) => P18U.count(g, 'temporal_decelerator') >= 1 },
  // ※ 难度：★★★☆☆ · 时机：中期（He3 攒够后）
  // ※ 路线：t-time-7（累计 320 点）→ 护盾 Lv3，He3 攒够后。
  { id: 'tm-paradox', name: '悖论驯服', icon: '🌀', cat: '时间',
    desc: '建成悖论护盾 Lv3', check: '悖论护盾（paradox_shield）Lv3 ≥ 1',
    tip: '🌀 悖论护盾 Lv3：时间机器的门票，到手了。',
    hint: '💡 把悖论护盾升到 Lv3，需科技 t-time-7。',
    checkFn: (g) => P18U.maxLevel(g, 'paradox_shield') >= 3 },
  // ※ 难度：★★☆☆☆ · 时机：中期（成就流）
  // ※ 路线：t-time-2（40 点）→ 档案馆 Lv1，成就流中期。
  { id: 'tm-archive', name: '未来图书馆', icon: '📜', cat: '时间',
    desc: '建成历史档案馆', check: '历史档案馆（history_archive）≥ 1',
    tip: '📜 历史档案馆开馆：明天的报纸，今天看。',
    hint: '💡 建成历史档案馆，需科技 t-time-2。',
    checkFn: (g) => P18U.count(g, 'history_archive') >= 1 },
  // ※ 难度：★★☆☆☆ · 时机：中期（灾难频发期）
  // ※ 路线：t-time-9（累计 500 点）→ 反应堆 Lv1，灾难频发期。
  { id: 'tm-rewind', name: '昨天修好', icon: '♻️', cat: '时间',
    desc: '建成回溯反应堆', check: '回溯反应堆（rewind_reactor）≥ 1',
    tip: '♻️ 回溯反应堆点火：坏了？没事，我们昨天修。',
    hint: '💡 建成回溯反应堆，需科技 t-time-9。',
    checkFn: (g) => P18U.count(g, 'rewind_reactor') >= 1 },
  // ※ 难度：★★★☆☆ · 时机：后期（时间机器开工前）
  // ※ 路线：4 座矿井 Lv2（23.4/60 秒）→ 2 分钟攒够。
  { id: 'tm-50chronon', name: '时间机器材料', icon: '🧪', cat: '时间',
    desc: '时间子库存达到 50（时间机器造价）', check: '时间子库存 ≥ 50',
    tip: '🧪 50 时间子集齐：时间机器的材料，够了！',
    hint: '💡 攒 50 个时间子 —— 时间机器奇观的造价。',
    checkFn: (g) => P18U.chronon(g) >= 50 },
  // ※ 难度：★★★★☆ · 时机：后期（B 列 10 项）
  // ※ 路线：B 列 10 项（累计 2620 点）→ 建造 ×2.24。
  { id: 'tm-buildspeed', name: '基建狂魔·终极', icon: '🏗️', cat: '时间',
    desc: '解锁全部 10 项时间操控线科技', check: 't-time-2 ~ t-time-20 偶数项全解锁',
    tip: '🏗️ 时间操控线毕业：建造速度翻 2.2 倍，基建狂魔完全体。',
    hint: '💡 点满 B 列 10 项时间操控科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = ['t-time-2','t-time-4','t-time-6','t-time-8','t-time-10',
                   't-time-12','t-time-14','t-time-16','t-time-18','t-time-20'];
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  // ※ 难度：★★★★☆ · 时机：后期（A 列 10 项）
  // ※ 路线：A 列 10 项（累计 2500 点）→ 产量 ×39.2。
  { id: 'tm-chronon39', name: '时间自由', icon: '🕊️', cat: '时间',
    desc: '解锁全部 10 项时间子线科技', check: 't-time-1 ~ t-time-19 奇数项全解锁',
    tip: '🕊️ 时间子线毕业：产量翻 39 倍，时间自由！',
    hint: '💡 点满 A 列 10 项时间子科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = ['t-time-1','t-time-3','t-time-5','t-time-7','t-time-9',
                   't-time-11','t-time-13','t-time-15','t-time-17','t-time-19'];
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  // ※ 难度：★★★★★ · 时机：后期（双线毕业）
  // ※ 路线：双线毕业（5120 点）→ t-time-20。
  { id: 'tm-omega-clock', name: '欧米茄钟', icon: '⏰', cat: '时间',
    desc: '研究「欧米茄钟」（t-time-20）', check: 't-time-20 已解锁',
    tip: '⏰ 欧米茄钟：宇宙的终极时钟，为你而鸣。',
    hint: '💡 双线毕业，点出 t-time-20。',
    checkFn: (g) => P18U.hasTech(g, 't-time-20') },
  // ※ 难度：★★★★★ · 时机：毕业（20 项全满）
  // ※ 路线：20 项全满（5120 点）→ 时间之主。
  { id: 'tm-timemaster', name: '时间之主', icon: '👑', cat: '时间',
    desc: '解锁全部 20 项时间系科技', check: 't-time-1 ~ t-time-20 全部解锁',
    tip: '👑 时间系全满：从时间褶皱学到欧米茄钟，你读完了时间这本书。',
    hint: '💡 点满全部 20 项时间系科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      for (let i = 1; i <= 20; i++) if (!g.tech.has('t-time-' + i)) return false;
      return true;
    } catch (e) { return false; } } },

  // ---- 🌀 维度 12 项 ----
  // 设计：维度成就按「测绘→信标→炮台→医疗→中继→枢纽→
  //   成本毕业→产量毕业→减伤毕业→双线毕业→维度之心→维度之主」排布。
  // ※ 难度：★☆☆☆☆ · 时机：开局
  // ※ 路线：t-dim-1（40 点），维度开局。
  { id: 'dm-first', name: '第一张维度地图', icon: '🗺️', cat: '维度',
    desc: '研究「维度测绘」（t-dim-1）', check: 't-dim-1 已解锁',
    tip: '🗺️ 维度测绘完成：11 维的地图，画好了。',
    hint: '💡 研究 t-dim-1，维度玩法的起点。',
    checkFn: (g) => P18U.hasTech(g, 't-dim-1') },
  // ※ 难度：★☆☆☆☆ · 时机：前期（贸易流）
  // ※ 路线：t-dim-1 → 信标 Lv1，贸易流前期。
  { id: 'dm-beacon', name: '点亮信标', icon: '📡', cat: '维度',
    desc: '建成星门信标', check: '星门信标（gate_beacon）≥ 1',
    tip: '📡 星门信标点亮：贸易的扩音器，开机了。',
    hint: '💡 建成星门信标，需科技 t-dim-1。',
    checkFn: (g) => P18U.count(g, 'gate_beacon') >= 1 },
  // ※ 难度：★★☆☆☆ · 时机：中期（裂缝 32 分钟前）
  // ※ 路线：t-dim-5（累计 190 点）→ 炮台 Lv1，裂缝 32 分钟前。
  { id: 'dm-defense', name: '星门门卫', icon: '💥', cat: '维度',
    desc: '建成星门炮台', check: '星门炮台（gate_defense）≥ 1',
    tip: '💥 星门炮台就位：这扇门，我们说了算。',
    hint: '💡 建成星门炮台，需科技 t-dim-5。',
    checkFn: (g) => P18U.count(g, 'gate_defense') >= 1 },
  // ※ 难度：★★☆☆☆ · 时机：中期（人口流）
  // ※ 路线：t-dim-7（累计 320 点）→ 医疗站 Lv1，人口流中期。
  { id: 'dm-medic', name: '全宇宙医生', icon: '⚕️', cat: '维度',
    desc: '建成星门医疗站', check: '星门医疗站（gate_medic）≥ 1',
    tip: '⚕️ 星门医疗站开业：全宇宙的医生，为你服务。',
    hint: '💡 建成星门医疗站，需科技 t-dim-7。',
    checkFn: (g) => P18U.count(g, 'gate_medic') >= 1 },
  // ※ 难度：★★☆☆☆ · 时机：中期（电力缺口）
  // ※ 路线：t-dim-9（累计 500 点）→ 中继站 Lv1，电力缺口期。
  { id: 'dm-relay', name: '星门充电宝', icon: '🔗', cat: '维度',
    desc: '建成星门中继站', check: '星门中继站（gate_relay）≥ 1',
    tip: '🔗 星门中继站上线：全城电力 ×1.1，充电宝开机。',
    hint: '💡 建成星门中继站，需科技 t-dim-9。',
    checkFn: (g) => P18U.count(g, 'gate_relay') >= 1 },
  // ※ 难度：★★★☆☆ · 时机：中期（2 座星门后）
  // ※ 路线：2 座星门 → 枢纽 Lv1，星门流中期。
  { id: 'dm-hub', name: '星门总调度', icon: '🚪', cat: '维度',
    desc: '建成星门枢纽', check: '星门枢纽（stargate_hub）≥ 1',
    tip: '🚪 星门枢纽启用：星门不是门，是地铁站。',
    hint: '💡 建成星门枢纽，需先有星门（stargate）。',
    checkFn: (g) => P18U.count(g, 'stargate_hub') >= 1 },
  // ※ 难度：★★★☆☆ · 时机：后期（星门系全家福）
  // ※ 路线：6 种星门建筑各 1 座，后期全家福。
  { id: 'dm-6gate', name: '星门六子', icon: '🚪', cat: '维度',
    desc: '集齐 6 种星门网络系建筑', check: '6 种星门系建筑各 ≥ 1',
    tip: '🚪 星门六子集齐：枢纽、信标、海关、炮台、医疗站、中继站 —— 全家福！',
    hint: '💡 集齐 6 种星门网络系建筑。',
    checkFn: (g) => ['stargate_hub','gate_beacon','gate_customs',
      'gate_defense','gate_medic','gate_relay'].every((id) => P18U.count(g, id) >= 1) },
  // ※ 难度：★★★★☆ · 时机：后期（A 列 10 项）
  // ※ 路线：A 列 10 项（2500 点）→ 成本 ×0.12。
  { id: 'dm-cost12', name: '维度基建狂魔', icon: '🏗️', cat: '维度',
    desc: '解锁全部 10 项维度建筑线科技', check: 't-dim-1 ~ t-dim-19 奇数项全解锁',
    tip: '🏗️ 维度建筑线毕业：成本打 1.2 折，基建狂魔毕业。',
    hint: '💡 点满 A 列 10 项维度建筑科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = ['t-dim-1','t-dim-3','t-dim-5','t-dim-7','t-dim-9',
                   't-dim-11','t-dim-13','t-dim-15','t-dim-17','t-dim-19'];
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  // ※ 难度：★★★★☆ · 时机：后期（B 列 10 项）
  // ※ 路线：B 列 10 项（1920 点）→ 产量 ×3.68。
  { id: 'dm-yield37', name: '星门奇点', icon: '🌟', cat: '维度',
    desc: '解锁全部 10 项星门线科技', check: 't-dim-2 ~ t-dim-20 偶数项全解锁',
    tip: '🌟 星门线毕业：产量翻 3.7 倍，星门奇点！',
    hint: '💡 点满 B 列 10 项星门科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = ['t-dim-2','t-dim-4','t-dim-6','t-dim-8','t-dim-10',
                   't-dim-12','t-dim-14','t-dim-16','t-dim-18','t-dim-20'];
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  // ※ 难度：★★★★★ · 时机：后期（双线毕业）
  // ※ 路线：双线毕业（5120 点）→ t-dim-20。
  { id: 'dm-heart', name: '维度之心', icon: '💙', cat: '维度',
    desc: '研究「维度之心」（t-dim-20）', check: 't-dim-20 已解锁',
    tip: '💙 维度之心：维度的心脏，为你而跳。',
    hint: '💡 双线毕业，点出 t-dim-20。',
    checkFn: (g) => P18U.hasTech(g, 't-dim-20') },
  // ※ 难度：★★★★☆ · 时机：后期（贸易完全体）
  // ※ 路线：信标 Lv3 + 交易所 Lv3 + 灯塔 Lv3 → 贸易完全体。
  { id: 'dm-trade1m', name: '维度富豪', icon: '💱', cat: '维度',
    desc: '单周期星门贸易收益突破 5000', check: '单周期星门贸易收益 ≥ 5000',
    tip: '💱 单周期贸易破 5000：星门的印钞机，开足马力了。',
    hint: '💡 星门信标 + 交易所 + 灯塔，贸易完全体。',
    checkFn: (g) => (P18U.st(g).maxGateTradePerCycle || 0) >= 5000 },
  // ※ 难度：★★★★★ · 时机：毕业（20 项全满）
  // ※ 路线：20 项全满（5120 点）→ 维度之主。
  { id: 'dm-dimmaster', name: '维度之主', icon: '👑', cat: '维度',
    desc: '解锁全部 20 项维度系科技', check: 't-dim-1 ~ t-dim-20 全部解锁',
    tip: '👑 维度系全满：从维度测绘到维度之心，你读完了空间这本书。',
    hint: '💡 点满全部 20 项维度系科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      for (let i = 1; i <= 20; i++) if (!g.tech.has('t-dim-' + i)) return false;
      return true;
    } catch (e) { return false; } } },

  // ---- 🌌 终极 12 项 ----
  // 设计：终极成就按「引擎原理→推进器→冷却塔→控制中心→精炼厂→堡垒→
  //   首都→产量毕业→电力毕业→减伤毕业→欧米茄协议→终极之主」排布。
  // ※ 难度：★☆☆☆☆ · 时机：开局
  // ※ 路线：t-omega-1（50 点），终极开局。
  { id: 'om-engine', name: '行星引擎原理', icon: '🚀', cat: '终极',
    desc: '研究「行星引擎原理」（t-omega-1）', check: 't-omega-1 已解锁',
    tip: '🚀 行星引擎原理：第一课 —— 行星是可以「开」的。',
    hint: '💡 研究 t-omega-1，终极玩法的起点。',
    checkFn: (g) => P18U.hasTech(g, 't-omega-1') },
  // ※ 难度：★★☆☆☆ · 时机：前期（定引擎线）
  // ※ 路线：t-omega-1 → 推进器 Lv1，定引擎线后。
  { id: 'om-thruster', name: '点火！', icon: '🔥', cat: '终极',
    desc: '建成行星推进器', check: '行星推进器（engine_thruster）≥ 1',
    tip: '🔥 行星推进器点火：火星挪了 0.1 毫米 —— 历史性的一步！',
    hint: '💡 建成行星推进器，需科技 t-omega-1。',
    checkFn: (g) => P18U.count(g, 'engine_thruster') >= 1 },
  // ※ 难度：★★☆☆☆ · 时机：前期（点火前）
  // ※ 路线：t-omega-3（累计 130 点）→ 冷却塔 Lv1，点火前。
  { id: 'om-cooling', name: '行星退烧', icon: '❄️', cat: '终极',
    desc: '建成引擎冷却塔', check: '引擎冷却塔（engine_cooling）≥ 1',
    tip: '❄️ 引擎冷却塔上线：推进器负责推，我们负责擦汗。',
    hint: '💡 建成引擎冷却塔，需科技 t-omega-3。',
    checkFn: (g) => P18U.count(g, 'engine_cooling') >= 1 },
  // ※ 难度：★★★☆☆ · 时机：中期（三驾马车后）
  // ※ 路线：t-omega-5（累计 250 点）→ 控制中心 Lv1，三驾马车后。
  { id: 'om-control', name: '火星前额叶', icon: '🎛️', cat: '终极',
    desc: '建成引擎控制中心', check: '引擎控制中心（engine_control）≥ 1',
    tip: '🎛️ 引擎控制中心上线：火星有了「前额叶」。',
    hint: '💡 建成引擎控制中心，需科技 t-omega-5。',
    checkFn: (g) => P18U.count(g, 'engine_control') >= 1 },
  // ※ 难度：★★☆☆☆ · 时机：中期（He3 自由后）
  // ※ 路线：t-omega-7（累计 420 点）→ 精炼厂 Lv1，He3 自由后。
  { id: 'om-fuel', name: '小太阳加油站', icon: '🛢️', cat: '终极',
    desc: '建成燃料精炼厂', check: '燃料精炼厂（engine_fuel）≥ 1',
    tip: '🛢️ 燃料精炼厂开业：内含一颗小太阳，请轻拿轻放。',
    hint: '💡 建成燃料精炼厂，需科技 t-omega-7。',
    checkFn: (g) => P18U.count(g, 'engine_fuel') >= 1 },
  // ※ 难度：★★★☆☆ · 时机：中期（军事流）
  // ※ 路线：t-omega-9（累计 650 点）→ 堡垒 Lv1，军事流中期。
  { id: 'om-bastion', name: '行星城墙', icon: '🏰', cat: '终极',
    desc: '建成引擎堡垒', check: '引擎堡垒（engine_bastion）≥ 1',
    tip: '🏰 引擎堡垒落成：此门之后，是火星的发动机。',
    hint: '💡 建成引擎堡垒，需科技 t-omega-9。',
    checkFn: (g) => P18U.count(g, 'engine_bastion') >= 1 },
  // ※ 难度：★★★★☆ · 时机：后期（t-omega-10 后）
  // ※ 路线：t-omega-10（累计 880 点）→ 首都 Lv1，后期。
  { id: 'om-capital', name: '行星驾驶舱', icon: '👑', cat: '终极',
    desc: '建成引擎首都', check: '引擎首都（engine_capital）≥ 1',
    tip: '👑 引擎首都挂牌：市长搬进了控制中心 —— 离方向盘近点。',
    hint: '💡 建成引擎首都，需科技 t-omega-10。',
    checkFn: (g) => P18U.count(g, 'engine_capital') >= 1 },
  // ※ 难度：★★★☆☆ · 时机：后期（2 座 Lv3）
  // ※ 路线：2 座推进器 Lv3（推力 8）→ 前置达成。
  { id: 'om-thrust6', name: '推力达标', icon: '🚀', cat: '终极',
    desc: '全城行星推力达到 6（行星引擎前置）', check: '全城推力 ≥ 6',
    tip: '🚀 推力达标！行星引擎的前置条件，达成了。',
    hint: '💡 推力 ≥ 6（2 座 Lv3 或 3 座 Lv2），行星引擎开工。',
    checkFn: (g) => { try {
      if (g && typeof g.cityThrust === 'function') return g.cityThrust() >= 6;
      return (P18U.st(g).cityThrust || 0) >= 6;
    } catch (e) { return false; } } },
  // ※ 难度：★★★★☆ · 时机：后期（A 列 10 项）
  // ※ 路线：A 列 10 项（3050 点）→ 产量 ×4.05。
  { id: 'om-yield4', name: '欧米茄产量', icon: '📈', cat: '终极',
    desc: '解锁全部 10 项欧米茄产量线科技', check: 't-omega-1 ~ t-omega-19 奇数项全解锁',
    tip: '📈 欧米茄产量线毕业：全局产量翻 4 倍！',
    hint: '💡 点满 A 列 10 项欧米茄产量科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = ['t-omega-1','t-omega-3','t-omega-5','t-omega-7','t-omega-9',
                   't-omega-11','t-omega-13','t-omega-15','t-omega-17','t-omega-19'];
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  // ※ 难度：★★★★☆ · 时机：后期（B 列 9 项）
  // ※ 路线：B 列 9 项（2370 点）→ 热寂 -75%。
  { id: 'om-heat75', name: '热寂无害', icon: '🧥', cat: '终极',
    desc: '解锁全部 10 项热寂防御线科技', check: 't-omega-2 ~ t-omega-18 偶数项全解锁',
    tip: '🧥 热寂防御线毕业：热寂伤害 -75%，冬天不再冷。',
    hint: '💡 点满 B 列 10 项热寂防御科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = ['t-omega-2','t-omega-4','t-omega-6','t-omega-8','t-omega-10',
                   't-omega-12','t-omega-14','t-omega-16','t-omega-18'];
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  // ※ 难度：★★★★★ · 时机：后期（双线毕业）
  // ※ 路线：双线毕业（6220 点）→ t-omega-20。
  { id: 'om-protocol', name: '欧米茄协议', icon: '📜', cat: '终极',
    desc: '研究「欧米茄协议」（t-omega-20）', check: 't-omega-20 已解锁',
    tip: '📜 欧米茄协议签署：行星引擎，点火！',
    hint: '💡 双线毕业，点出 t-omega-20。',
    checkFn: (g) => P18U.hasTech(g, 't-omega-20') },
  // ※ 难度：★★★★★ · 时机：毕业（20 项全满）
  // ※ 路线：20 项全满（6220 点）→ 欧米茄之主。
  { id: 'om-omegamaster', name: '欧米茄之主', icon: '🌌', cat: '终极',
    desc: '解锁全部 20 项终极系科技', check: 't-omega-1 ~ t-omega-20 全部解锁',
    tip: '🌌 终极系全满：从行星引擎原理到欧米茄协议，你读完了终极这本书。',
    hint: '💡 点满全部 20 项终极系科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      for (let i = 1; i <= 20; i++) if (!g.tech.has('t-omega-' + i)) return false;
      return true;
    } catch (e) { return false; } } },
  // ---- 🏗️ 建筑 8 项 ----
  // 设计：建筑成就考「戴森球系集齐→时间系集齐→星门系集齐→引擎系集齐→
  //   终极建筑满级→电力破千→He3 自由→25 种全收集」。
  // ※ 难度：★★★☆☆ · 时机：后期（戴森系全家福）
  // ※ 路线：7 种戴森建筑各 1 座，后期全家福。
  { id: 'bx-dyson7', name: '戴森七子', icon: '☀️', cat: '建筑',
    desc: '集齐 7 种戴森球系建筑', check: '7 种戴森球系建筑各 ≥ 1',
    tip: '☀️ 戴森七子集齐：帆、光束、采集器、熔炉、卫星群、护盾、灯塔 —— 全家福！',
    hint: '💡 集齐 7 种戴森球系建筑（buildings_v18.js）。',
    checkFn: (g) => ['dyson_sail','dyson_beam','dyson_collector','dyson_furnace',
      'swarm_satellite','dyson_shield','dyson_lighthouse'].every((id) => P18U.count(g, id) >= 1) },
  // ※ 难度：★★★☆☆ · 时机：后期（时间系全家福）
  // ※ 路线：6 种时间建筑各 1 座，后期全家福。
  { id: 'bx-time6', name: '时间六子', icon: '⏳', cat: '建筑',
    desc: '集齐 6 种时间机器系建筑', check: '6 种时间系建筑各 ≥ 1',
    tip: '⏳ 时间六子集齐：矿井、加速器、减速罩、护盾、档案馆、反应堆 —— 全家福！',
    hint: '💡 集齐 6 种时间机器系建筑。',
    checkFn: (g) => ['chronon_mine','temporal_accelerator','temporal_decelerator',
      'paradox_shield','history_archive','rewind_reactor'].every((id) => P18U.count(g, id) >= 1) },
  // ※ 难度：★★★☆☆ · 时机：后期（引擎系全家福）
  // ※ 路线：6 种引擎建筑各 1 座，后期全家福。
  { id: 'bx-engine6', name: '引擎六子', icon: '🚀', cat: '建筑',
    desc: '集齐 6 种行星引擎系建筑', check: '6 种引擎系建筑各 ≥ 1',
    tip: '🚀 引擎六子集齐：推进器、冷却塔、控制中心、精炼厂、堡垒、首都 —— 全家福！',
    hint: '💡 集齐 6 种行星引擎系建筑。',
    checkFn: (g) => ['engine_thruster','engine_cooling','engine_control',
      'engine_fuel','engine_bastion','engine_capital'].every((id) => P18U.count(g, id) >= 1) },
  // ※ 难度：★★★★★ · 时机：毕业（25 种全收集）
  // ※ 路线：25 种全收集，毕业收藏。
  { id: 'bx-25all', name: '终极收藏家', icon: '🏆', cat: '建筑',
    desc: '集齐 v1.8 全部 25 种终极建筑', check: '25 种建筑各 ≥ 1',
    tip: '🏆 25 种终极建筑集齐！你是星港的「终极收藏家」。',
    hint: '💡 集齐全部 25 种 v1.8 建筑 —— 终极收藏。',
    checkFn: (g) => { try {
      if (typeof BUILDINGS_V18 === 'undefined') return false;
      return Object.keys(BUILDINGS_V18).every((id) => P18U.count(g, id) >= 1);
    } catch (e) { return false; } } },
  // ※ 难度：★★★★☆ · 时机：后期（10 种满级）
  // ※ 路线：10 种升 Lv3，后期满级。
  { id: 'bx-max10', name: '终极满级', icon: '⬆️', cat: '建筑',
    desc: '10 种终极建筑升到满级（Lv3）', check: '满级终极建筑种类 ≥ 10',
    tip: '⬆️ 10 种终极建筑满级：不鸣则已，一鸣就要满级。',
    hint: '💡 把 10 种 v1.8 建筑升到 Lv3。',
    checkFn: (g) => (P18U.st(g).maxedV18Types || 0) >= 10 },
  // ※ 难度：★★★☆☆ · 时机：后期（电力破千）
  // ※ 路线：戴森帆 3 座 Lv3 + 中继站 → 电力破千。
  { id: 'bx-power1k', name: '电力破千', icon: '⚡', cat: '建筑',
    desc: '全城电力盈余达到 1000', check: '电力盈余 ≥ 1000',
    tip: '⚡ 电力盈余破千！星港的夜晚，比太阳还亮。',
    hint: '💡 戴森帆 + 中继站，电力破千。',
    checkFn: (g) => { try {
      if (g && g.builder && typeof g.builder.powerSurplus === 'function') return g.builder.powerSurplus() >= 1000;
      return (P18U.st(g).powerSurplus || 0) >= 1000;
    } catch (e) { return false; } } },
  // ※ 难度：★★★☆☆ · 时机：后期（He3 破 500）
  // ※ 路线：采集器 3 座 Lv3 → He3 破 500。
  { id: 'bx-he3free', name: 'He3 自由', icon: '⚛️', cat: '建筑',
    desc: 'He3 库存达到 500', check: 'He3 库存 ≥ 500',
    tip: '⚛️ He3 库存破 500：He3 自由！敞开烧！',
    hint: '💡 恒星采集器 Lv3 多建，He3 自由。',
    checkFn: (g) => { try {
      if (g && g.resources && typeof g.resources.get === 'function') return (g.resources.get('he3') || 0) >= 500;
      return (P18U.st(g).he3 || 0) >= 500;
    } catch (e) { return false; } } },
  // ※ 难度：★★★★☆ · 时机：后期（8 座矿井）
  // ※ 路线：8 座矿井并行 → 时间自由。
  { id: 'bx-chrononfree', name: '时间自由·建筑', icon: '⏱️', cat: '建筑',
    desc: '时间子矿井达到 8 座', check: '时间子矿井 ≥ 8 座',
    tip: '⏱️ 8 座时间子矿井：时间自由！94 秒攒够时间机器。',
    hint: '💡 8 座矿井并行，时间子自由。',
    checkFn: (g) => P18U.count(g, 'chronon_mine') >= 8 },

  // ---- 🌪️ 灾难 8 项 ----
  // 设计：灾难成就按「遭遇→扛住→无伤→反杀→全免疫」排布，
  //   与 v1.8 五新灾难形成「矛与盾」的叙事。
  // ※ 难度：★☆☆☆☆ · 时机：32 分钟（活着就行）
  // ※ 路线：活过 32 分钟，裂缝首发。
  { id: 'hz-rift', name: '裂缝初现', icon: '🌀', cat: '灾难',
    desc: '遭遇第一次维度裂缝', check: '遭遇维度裂缝 ≥ 1 次',
    tip: '🌀 维度裂缝！空间裂开了 —— 迎接 v1.8 的新灾难。',
    hint: '💡 32 分钟后，维度裂缝首发。',
    checkFn: (g) => (P18U.st(g).riftEncounters || 0) >= 1 },
  // ※ 难度：★☆☆☆☆ · 时机：34 分钟（活着就行）
  // ※ 路线：活过 34 分钟，悖论首发。
  { id: 'hz-paradox', name: '悖论初现', icon: '⏳', cat: '灾难',
    desc: '遭遇第一次时间悖论', check: '遭遇时间悖论 ≥ 1 次',
    tip: '⏳ 时间悖论！因果乱了 —— 迎接 v1.8 的新灾难。',
    hint: '💡 34 分钟后，时间悖论首发。',
    checkFn: (g) => (P18U.st(g).paradoxEncounters || 0) >= 1 },
  // ※ 难度：★☆☆☆☆ · 时机：36 分钟（活着就行）
  // ※ 路线：活过 36 分钟，热寂首发。
  { id: 'hz-heat', name: '热寂初现', icon: '🥶', cat: '灾难',
    desc: '遭遇第一次热寂前兆', check: '遭遇热寂前兆 ≥ 1 次',
    tip: '🥶 热寂前兆！宇宙在变冷 —— 迎接 v1.8 的新灾难。',
    hint: '💡 36 分钟后，热寂前兆首发。',
    checkFn: (g) => (P18U.st(g).heatDeathEncounters || 0) >= 1 },
  // ※ 难度：★☆☆☆☆ · 时机：38 分钟（活着就行）
  // ※ 路线：活过 38 分钟，风暴首发。
  { id: 'hz-stellar', name: '恒星风暴初现', icon: '☀️', cat: '灾难',
    desc: '遭遇第一次恒星风暴', check: '遭遇恒星风暴 ≥ 1 次',
    tip: '☀️ 恒星风暴！太阳发脾气了 —— 迎接 v1.8 的新灾难。',
    hint: '💡 38 分钟后，恒星风暴首发。',
    checkFn: (g) => (P18U.st(g).stellarStormEncounters || 0) >= 1 },
  // ※ 难度：★☆☆☆☆ · 时机：40 分钟（活着就行）
  // ※ 路线：活过 40 分钟，过热首发（先建冷却塔）。
  { id: 'hz-overheat', name: '引擎过热初现', icon: '🔥', cat: '灾难',
    desc: '遭遇第一次引擎过热', check: '遭遇引擎过热 ≥ 1 次',
    tip: '🔥 引擎过热！推进器烧起来了 —— 迎接 v1.8 的新灾难。',
    hint: '💡 40 分钟后，引擎过热首发。先建冷却塔！',
    checkFn: (g) => (P18U.st(g).overheatEncounters || 0) >= 1 },
  // ※ 难度：★★☆☆☆ · 时机：40 分钟（活过就行）
  // ※ 路线：活过 40 分钟，五灾临门。
  { id: 'hz-all5', name: '五灾临门', icon: '🌪️', cat: '灾难',
    desc: '遭遇全部 5 种 v1.8 新灾难', check: '5 种新灾难各遭遇 ≥ 1 次',
    tip: '🌪️ 五灾临门！裂缝、悖论、热寂、风暴、过热 —— 全见过了。',
    hint: '💡 活过 40 分钟，集齐五种新灾难。',
    checkFn: (g) => { const s = P18U.st(g); return (s.riftEncounters || 0) >= 1 &&
      (s.paradoxEncounters || 0) >= 1 && (s.heatDeathEncounters || 0) >= 1 &&
      (s.stellarStormEncounters || 0) >= 1 && (s.overheatEncounters || 0) >= 1; } },
  // ※ 难度：★★★★☆ · 时机：后期（减伤毕业）
  // ※ 路线：减伤毕业 + 减速罩 → 零损坏。
  { id: 'hz-nodamage18', name: '终极不动如山', icon: '🛡️', cat: '灾难',
    desc: '一次 v1.8 新灾难中建筑零损坏', check: '新灾难零损坏 ≥ 1 次',
    tip: '🛡️ 新灾难零损坏！灾难来了，房子没晃 —— 这就叫终极工程。',
    hint: '💡 减伤 + 减速罩，扛住一次新灾难零损坏。',
    checkFn: (g) => (P18U.st(g).v18NoDamage || 0) >= 1 },
  // ※ 难度：★★★★★ · 时机：毕业（三灾难免疫）
  // ※ 路线：三灾难免疫 → 灾难毕业。
  { id: 'hz-immune18', name: '灾难毕业', icon: '🌟', cat: '灾难',
    desc: '同时免疫维度裂缝/时间悖论/热寂前兆', check: '三灾难免疫 = true',
    tip: '🌟 灾难毕业！裂缝、悖论、热寂 —— 全免疫。',
    hint: '💡 减伤叠满 + 维度之门，灾难毕业。',
    checkFn: (g) => (P18U.st(g).v18Immune || 0) >= 1 },

  // ---- 🌟 奇观 8 项 ----
  // 设计：一奇观一项，无水分；qw-all18 是 v1.8 毕业；qw-time（第五胜利）
  //   是 v1.8 的终极答案，与星门网络（第四胜利）形成新的胜利台阶。
  // ※ 难度：★★★★★ · 时机：毕业（第五胜利钥匙）
  // ※ 路线：t-time-20 + 护盾 Lv3 + 50 时间子 → 时间机器。
  { id: 'qw-time', name: '时间机器', icon: '⏰', cat: '奇观',
    desc: '建成时间机器', check: '时间机器（time_machine）≥ 1',
    tip: '⏰ 时间机器建成！第五胜利的钥匙，到手了。',
    hint: '💡 建成时间机器：需 t-time-20 + 悖论护盾 Lv3 + 50 时间子。',
    checkFn: (g) => P18U.count(g, 'time_machine') >= 1 },
  // ※ 难度：★★★★☆ · 时机：后期（t-dim-20 后）
  // ※ 路线：t-dim-20 → 维度之门。
  { id: 'qw-dim', name: '维度之门', icon: '🌀', cat: '奇观',
    desc: '建成维度之门', check: '维度之门（dim_gate）≥ 1',
    tip: '🌀 维度之门开启！裂缝？那是门没关好 —— 现在我们有钥匙了。',
    hint: '💡 建成维度之门：需科技 t-dim-20。',
    checkFn: (g) => P18U.count(g, 'dim_gate') >= 1 },
  // ※ 难度：★★★★☆ · 时机：后期（5000 钢）
  // ※ 路线：t-ult-9 → 5000 钢 → 戴森球。
  { id: 'qw-dyson', name: '戴森球', icon: '☀️', cat: '奇观',
    desc: '建成戴森球', check: '戴森球（dyson_sphere）≥ 1',
    tip: '☀️ 戴森球完工！恒星，正式成为星港的「员工」。',
    hint: '💡 建成戴森球：需科技 t-ult-9，5000 钢。',
    checkFn: (g) => P18U.count(g, 'dyson_sphere') >= 1 },
  // ※ 难度：★★★★☆ · 时机：后期（推力 ≥ 6）
  // ※ 路线：t-omega-20 + 推力 6 → 行星引擎。
  { id: 'qw-engine', name: '行星引擎', icon: '🌍', cat: '奇观',
    desc: '建成行星引擎', check: '行星引擎（planet_engine）≥ 1',
    tip: '🌍 行星引擎点火！火星，正式成为星港的「座驾」。',
    hint: '💡 建成行星引擎：需 t-omega-20 + 全城推力 ≥ 6。',
    checkFn: (g) => P18U.count(g, 'planet_engine') >= 1 },
  // ※ 难度：★★★★☆ · 时机：后期（t-omega-19 后）
  // ※ 路线：t-omega-19 → 欧米茄档案馆。
  { id: 'qw-omega', name: '欧米茄档案馆', icon: '📚', cat: '奇观',
    desc: '建成欧米茄档案馆', check: '欧米茄档案馆（omega_archive）≥ 1',
    tip: '📚 欧米茄档案馆落成！全宇宙的知识，在这里安家。',
    hint: '💡 建成欧米茄档案馆：需科技 t-omega-19。',
    checkFn: (g) => P18U.count(g, 'omega_archive') >= 1 },
  // ※ 难度：★★★★★ · 时机：毕业（五奇观集齐）
  // ※ 路线：五奇观集齐 → 五位一体。
  { id: 'qw-all18', name: '五位一体', icon: '🌟', cat: '奇观',
    desc: '集齐 v1.8 全部 5 种新奇观', check: '五奇观各 ≥ 1',
    tip: '🌟 v1.8 五奇观集齐！时间、维度、戴森球、引擎、档案馆 —— 五位一体！',
    hint: '💡 集齐时间机器、维度之门、戴森球、行星引擎、欧米茄档案馆。',
    checkFn: (g) => ['time_machine', 'dim_gate', 'dyson_sphere',
      'planet_engine', 'omega_archive'].every((id) => P18U.count(g, id) >= 1) },
  // ※ 难度：★★★★★ · 时机：毕业（第五胜利）
  // ※ 路线：时间机器建成 → 第五胜利。
  { id: 'qw-timetravel', name: '时间旅行', icon: '🚀', cat: '奇观',
    desc: '通过时间机器完成第一次时间旅行（第五胜利）', check: 'city.timeTraveled = true',
    tip: '🚀 时间旅行成功！第五胜利！我们在时间里，见到了自己。',
    hint: '💡 建成时间机器并完成「第一次时间旅行」仪式。',
    checkFn: (g) => !!(g && g.city && (g.city.timeTraveled || g.city.timeMachineWon)) },
  // ※ 难度：★★★★☆ · 时机：后期（火星位移 1 公里）
  // ※ 路线：行星引擎全功率 → 火星位移 1 公里。
  { id: 'qw-moving', name: '开车！', icon: '🌍', cat: '奇观',
    desc: '行星引擎推动火星移动 1 公里', check: '火星位移 ≥ 1 公里',
    tip: '🌍 火星移动了 1 公里！我们，真的在「开车」。',
    hint: '💡 行星引擎全功率运行，推着火星走。',
    checkFn: (g) => (P18U.st(g).planetMovedKm || 0) >= 1 },
];

// ---- ACH_V18 → ACHIEVEMENT_DEFS 注册（防御式） ----
if (typeof ACHIEVEMENT_DEFS !== 'undefined') {
  for (const a of ACH_V18) {
    ACHIEVEMENT_DEFS.push({
      id: a.id, name: a.name, icon: a.icon, desc: a.desc,
      tip: a.tip, hint: a.hint, check: a.checkFn,
    });
  }
}

// ==================== 三、新灾难 ×5 ====================
// 设计总纲：v1.8 的灾难是「终极战争」——
//   维度裂缝打星门、时间悖论打全城、热寂前兆打电力、恒星风暴打戴森球、
//   引擎过热打行星引擎，五个维度各一刀，没有「安全区」，
//   但每一刀都有官方解法（counter 建筑/科技）。
// 首发时间 32/34/36/38/40 分钟，与 v1.5 新灾难（22/24/26/28/30 分钟）交错，
//   保证超大后期每 2 分钟有一件事。
// 防御三原则（与 v1.5 一致）：① 对应系统不存在时 update 直接返回；
//   ② 无目标时不触发、推迟再试（不空放预警）；③ 只读写约定字段，
//   删建筑/维修永远是各系统的权力。
// 配置表字段：{id, name, icon, desc, warnMs, durationMs, effect（效果描述）, counter（应对建筑）}，
//   另附 flavor（播报轮换文案）/ firstAt / interval（调度常量）。
// ★ 读取约定（disaster.js / HazardPack18 防御性读取）：
//   维度之门（dim_gate）建成 → 维度裂缝免疫（riftSeal）；
//   行星护盾（shield_planet）建成 → 全部灾难免疫（沿用 v1.5 口径）；
//   时间系 paradoxResist / 维度系 riftResist / 终极系 heatDeathResist →
//     对应灾难伤害加法减免（上限 0.9）；
//   时间减速罩 disasterDurationMul → 持续时间统一打折。
const DISASTERS_V18 = [

  // ── 应对剧本：维度裂缝 ──
  //   32 分钟前：建星门炮台 Lv1（40% 拦截）+ 点 t-dim-4（裂缝预警，-10%）；
  //   进行中：炮台自动开火，裂缝生物入侵走军事结算 —— 别手动，交给炮台；
  //   后期：维度之门建成 → 直接免疫，裂缝从灾难变「景观」；
  //   翻车点：星门系建筑扎堆 —— 裂缝专打星门，分散布局。
  { id: 'rift', name: '维度裂缝', icon: '🌀',
    desc: '空间像玻璃一样裂开，裂缝里伸出了「不属于这个维度」的东西。',
    warnMs: 30 * 1000, durationMs: 180 * 1000,  // 持续 180 秒
    effect: '随机 4 座星门系建筑各损失 20~40% 耐久；裂缝生物入侵（军事结算）',
    counter: 'gate_defense（星门炮台）/ 科技 t-dim-8（裂缝封堵）/ 奇观维度之门（免疫）',
    flavor: [
      '🌀 维度裂缝！空间裂开了，炮台开火 —— 迎接不速之客。',
      '🌀 裂缝扩大 —— 星门防务司令：所有炮台，自由开火！',
    ],
    firstAt: 32 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    targets: 4, dmgMin: 20, dmgMax: 40, duration: 180 * 1000 },

  // ── 应对剧本：时间悖论 ──
  //   34 分钟前：建悖论护盾 Lv1（-15%）+ 点 t-time-10（悖论缓冲，-15%）；
  //   进行中：全城产量 -40%，时间子矿井停工 —— 别慌，180 秒；
  //   后期：护盾 Lv3（-50%）+ 减速罩（×0.4）→ 综合影响 20%；
  //   翻车点：悖论期间硬攒时间子 —— 矿井停工，攒了也白攒。
  { id: 'paradox', name: '时间悖论', icon: '⏳',
    desc: '因果链打结了：全城产量骤降，时间子矿井停工。',
    warnMs: 30 * 1000, durationMs: 180 * 1000,  // 持续 180 秒
    effect: '全城所有产量 -40%，持续 180 秒；时间子矿井停工',
    counter: 'paradox_shield（悖论护盾）/ 科技 t-time-10（悖论缓冲）',
    flavor: [
      '⏳ 时间悖论！因果打结了 —— 产量跳水，矿井停工。',
      '⏳ 悖论扩大 —— 护盾全开，不然明天都过不好。',
    ],
    firstAt: 34 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    yieldMul: 0.6, duration: 180 * 1000 },

  // ── 应对剧本：热寂前兆 ──
  //   36 分钟前：点 t-omega-2（热寂观测，-10%）+ 建冷却塔 Lv1；
  //   进行中：全城电力 -50%，300 秒 —— 关掉非必要建筑（加速器 70 电）；
  //   后期：t-omega-18（-75%）+ 热寂预案政策 → 基本无害化；
  //   翻车点：电力规划没留余量 —— 热寂期间电网崩溃，连锁停工。
  { id: 'heatdeath', name: '热寂前兆', icon: '🥶',
    desc: '宇宙的寒意提前到了：全城电力大幅下降，持续 300 秒。',
    warnMs: 35 * 1000, durationMs: 300 * 1000,  // 持续 300 秒
    effect: '全城电力 -50%，持续 300 秒',
    counter: 'engine_cooling（废热）/ 科技 t-omega-14（热寂对抗）',
    flavor: [
      '🥶 热寂前兆！宇宙在变冷 —— 电力跳水，保暖！',
      '🥶 寒意蔓延 —— 冷却塔反转（制热），全城进入「冬季模式」。',
    ],
    firstAt: 36 * 60 * 1000, intervalMin: 14 * 60 * 1000, intervalMax: 20 * 60 * 1000,
    powerMul: 0.5, duration: 300 * 1000 },

  // ── 应对剧本：恒星风暴 ──
  //   38 分钟前：建恒星风护盾 Lv3（dyson_shield）→ 直接免疫；
  //   进行中：戴森球系建筑停工 150 秒 —— 地面建筑不受影响，生产转移；
  //   后期：戴森球奇观建成 → 永久免疫，风暴变「极光表演」；
  //   翻车点：把全部电力押在戴森帆上 —— 风暴一来，全城停电。
  { id: 'stellarstorm', name: '恒星风暴', icon: '☀️',
    desc: '太阳发脾气了：日冕物质直扑戴森球系建筑，全线停工 150 秒。',
    warnMs: 30 * 1000, durationMs: 150 * 1000,  // 持续 150 秒
    effect: '所有戴森球系建筑停工 150 秒',
    counter: 'dyson_shield（恒星风护盾 Lv3 免疫）/ 奇观戴森球（建成即免疫）',
    flavor: [
      '☀️ 恒星风暴！太阳发脾气了 —— 戴森球系建筑集体「装死」。',
      '☀️ 日冕物质抵达 —— 帆矩阵收帆，采集器闭眼，等风头过去。',
    ],
    firstAt: 38 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    duration: 150 * 1000 },

  // ── 应对剧本：引擎过热 ──
  //   40 分钟前：建冷却塔 Lv1（-30%）—— 点火前必须建好；
  //   进行中：3 座引擎系建筑 30~50% 耐久损失 —— 维修队待命；
  //   后期：2 座冷却塔 Lv3（-80%，上限 0.9）→ 过热变「通知」；
  //   翻车点：推进器点火前不建冷却塔 —— 过热教你做人。
  { id: 'overheat', name: '引擎过热', icon: '🔥',
    desc: '行星推进器过热了：废热失控，随机引擎系建筑受损。',
    warnMs: 25 * 1000, durationMs: 0,  // 瞬时伤害，无持续
    effect: '随机 3 座行星引擎系建筑各损失 30~50% 耐久',
    counter: 'engine_cooling（引擎冷却塔）/ 科技 t-omega-3（废热利用）',
    flavor: [
      '🔥 引擎过热！推进器烧起来了 —— 冷却塔全开！',
      '🔥 废热失控 —— 引擎系建筑高温报警，疏散！',
    ],
    firstAt: 40 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    targets: 3, dmgMin: 30, dmgMax: 50 },
];

const PACK18_KEY = 'starport-hazard-pack18';

// v1.8 新灾难调度器：与 HazardPack15、v1.4 OrbitalHazards、v1.3 DisasterPack13
// 各自独立调度，tick 四挂载互不干扰。
// 免疫优先级：行星护盾（全部免疫）> 维度之门（裂缝免疫）>
//   戴森球（恒星风暴免疫）> 各建筑/科技减伤。
class HazardPack18 {
  constructor() {
    const now = Date.now();
    this.active = {};   // id -> {warnUntil, until} 进行中的灾难
    this.next = {};     // id -> 下次触发时间戳
    for (const d of DISASTERS_V18) {
      this.active[d.id] = null;
      this.next[d.id] = now + d.firstAt;
    }
  }

  // ---- 统一通知：toast 直发 + 复用 game.disaster.onEvent 通道（均判存在） ----
  _notify(game, type, msg, data) {
    if (game && typeof game.toast === 'function') {
      try { game.toast(msg); } catch (e) {}
    }
    if (game && game.disaster && typeof game.disaster.onEvent === 'function') {
      try { game.disaster.onEvent(type, msg, data || {}); } catch (e) {}
    }
  }

  // ---- 免疫判定（防御）：行星护盾全免疫 / 维度之门裂缝免疫 / 戴森球风暴免疫 ----
  _immune(game, d) {
    try {
      if (!game || !game.builder || typeof game.builder.count !== 'function') return false;
      if (game.builder.count('shield_planet') >= 1) return true;   // v1.5 行星护盾：全免疫
      if (d.id === 'rift' && game.builder.count('dim_gate') >= 1) return true;
      if (d.id === 'stellarstorm' && game.builder.count('dyson_sphere') >= 1) return true;
      if (d.id === 'stellarstorm') {
        // 恒星风护盾 Lv3：太阳风/恒星风暴免疫（buildings_v18.js solarWindImmune）
        if (game.builder.buildings && typeof BUILDINGS !== 'undefined') {
          for (const b of game.builder.buildings) {
            if (b && b.id === 'dyson_shield' && !b.damaged) {
              const eff = ((BUILDINGS.dyson_shield.levels || [])[b.level] || {}).effect || {};
              if (eff.solarWindImmune) return true;
            }
          }
        }
      }
    } catch (e) {}
    return false;
  }

  // ---- 灾难减伤聚合（防御）：科技减伤键 + 建筑 disasterMitigation ----
  //   rift → riftResist + paradoxResist；paradox → paradoxResist；
  //   heatdeath → heatDeathResist；overheat → overheatResist（建筑）；
  //   stellarstorm → 无减伤（只有免疫），by design。
  _mitigation(game, d) {
    let mit = 0;
    try {
      if (game && game.tech && typeof game.tech.mul === 'function') {
        // 加法键：tech.js 约定 *Resist 为加法键（上限 0.9），此处防御性读取
        const resistKeys = d.id === 'rift' ? ['riftResist', 'paradoxResist']
          : d.id === 'paradox' ? ['paradoxResist']
          : d.id === 'heatdeath' ? ['heatDeathResist'] : [];
        for (const k of resistKeys) {
          // 防御性：优先读加法汇总接口（tech.add），回退到 mul
          if (typeof game.tech.add === 'function') {
            const v = game.tech.add(k);
            if (typeof v === 'number' && v > 0) mit += v;
          } else {
            const m = game.tech.mul(k);
            if (typeof m === 'number' && m > 1) mit += (m - 1);
          }
        }
      }
      // 建筑 disasterMitigation（取最高）+ overheatResist（加法）
      if (game && game.builder && Array.isArray(game.builder.buildings) && typeof BUILDINGS !== 'undefined') {
        let bestMit = 0, ohResist = 0;
        for (const b of game.builder.buildings) {
          if (!b || b.damaged) continue;
          const def = BUILDINGS[b.id];
          const lv = (def && def.levels && def.levels[b.level]) || {};
          const eff = lv.effect || {};
          if (typeof eff.disasterMitigation === 'number') bestMit = Math.max(bestMit, eff.disasterMitigation);
          if (d.id === 'overheat' && typeof eff.overheatResist === 'number') ohResist += eff.overheatResist;
        }
        mit += bestMit + Math.min(0.9, ohResist);
      }
      // 时间减速罩：时长乘区（在 _fire 里单独处理，此处只处理伤害）
    } catch (e) {}
    return Math.min(0.9, Math.max(0, mit));  // 上限 0.9
  }

  // ---- 灾难时长乘区（防御）：时间减速罩取最低 ----
  _durationMul(game) {
    try {
      if (game && game.builder && Array.isArray(game.builder.buildings) && typeof BUILDINGS !== 'undefined') {
        let best = 1;
        for (const b of game.builder.buildings) {
          if (!b || b.damaged || b.id !== 'temporal_decelerator') continue;
          const def = BUILDINGS.temporal_decelerator;
          const lv = (def && def.levels && def.levels[b.level]) || {};
          const eff = lv.effect || {};
          if (typeof eff.disasterDurationMul === 'number') best = Math.min(best, eff.disasterDurationMul);
        }
        return best;
      }
    } catch (e) {}
    return 1;
  }

  // ---- 取某类建筑列表（防御：只读 id/damaged 字段） ----
  _targets(game, kind) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return [];
      const all = game.builder.buildings.filter((b) => b && !b.damaged);
      if (kind === 'gate') {
        const ids = ['stargate_hub','gate_beacon','gate_customs','gate_defense','gate_medic','gate_relay'];
        return all.filter((b) => ids.indexOf(b.id) !== -1);
      }
      if (kind === 'engine') {
        const ids = ['engine_thruster','engine_cooling','engine_control','engine_fuel','engine_bastion','engine_capital'];
        return all.filter((b) => ids.indexOf(b.id) !== -1);
      }
      if (kind === 'dyson') {
        const ids = ['dyson_sail','dyson_beam','dyson_collector','dyson_furnace','swarm_satellite','dyson_shield','dyson_lighthouse'];
        return all.filter((b) => ids.indexOf(b.id) !== -1);
      }
    } catch (e) {}
    return [];
  }

  _pick(arr, n) {
    const c = arr.slice();
    const out = [];
    while (c.length && out.length < n) out.push(c.splice(Math.floor(Math.random() * c.length), 1)[0]);
    return out;
  }

  _rand(a, b) { return a + Math.random() * (b - a); }

  // ---- 主循环：game.tick 里调用 hz.update(Date.now(), game) ----
  update(now, game) {
    if (!game) return;
    for (const d of DISASTERS_V18) {
      if (this._immune(game, d)) continue;  // 免疫：直接跳过
      const st = this.active[d.id];
      // 进行中：检查是否结束
      if (st) {
        if (st.warnUntil && now < st.warnUntil) continue;       // 预警中
        if (!st.fired) { this._fire(d, game, now); st.fired = true; }  // 预警结束→触发
        if (st.until && now >= st.until) {                      // 持续结束
          this.active[d.id] = null;
          this.next[d.id] = now + this._rand(d.intervalMin, d.intervalMax);
          this._notify(game, d.id + '_end', d.icon + ' ' + d.name + '过去了，星港挺过来了。');
        }
        continue;
      }
      // 未触发：检查时间
      if (now < this.next[d.id]) continue;
      if (!this._hasTarget(game, d)) {  // 无目标→推迟 2 分钟再试，不空放预警
        this.next[d.id] = now + 2 * 60 * 1000;
        continue;
      }
      this.active[d.id] = { warnUntil: now + d.warnMs, until: 0, fired: false };
      const msg = d.flavor[Math.floor(Math.random() * d.flavor.length)];
      this._notify(game, d.id + '_warn', '⚠️ 预警：' + msg);
      // ★ 统计口径：遭遇次数（成就 hz-rift 等读取）
      try {
        if (game.stats) {
          const key = { rift: 'riftEncounters', paradox: 'paradoxEncounters',
            heatdeath: 'heatDeathEncounters', stellarstorm: 'stellarStormEncounters',
            overheat: 'overheatEncounters' }[d.id];
          if (key) game.stats[key] = (game.stats[key] || 0) + 1;
        }
      } catch (e) {}
    }
  }

  // 有无可打击目标（防御：系统未上线→无目标→推迟）
  _hasTarget(game, d) {
    if (d.id === 'rift') return this._targets(game, 'gate').length > 0;
    if (d.id === 'paradox') return P18U.buildingsTotal(game) > 0;
    if (d.id === 'heatdeath') return P18U.buildingsTotal(game) > 0;
    if (d.id === 'stellarstorm') return this._targets(game, 'dyson').length > 0;
    if (d.id === 'overheat') return this._targets(game, 'engine').length > 0;
    return false;
  }

  // 触发结算
  _fire(d, game, now) {
    const mit = this._mitigation(game, d);       // 伤害减伤 0~0.9
    const durMul = this._durationMul(game);      // 时长乘区（减速罩）
    const msg = d.flavor[Math.floor(Math.random() * d.flavor.length)];
    if (d.id === 'rift' || d.id === 'overheat') {
      const kind = d.id === 'rift' ? 'gate' : 'engine';
      const victims = this._pick(this._targets(game, kind), d.targets);
      let noDmg = true;
      for (const b of victims) {
        const pct = Math.round(this._rand(d.dmgMin, d.dmgMax) * (1 - mit));
        if (pct > 0) noDmg = false;
        try {
          b.hp = Math.max(0, (typeof b.hp === 'number' ? b.hp : 100) - pct);
          if (b.hp <= 0) b.damaged = true;  // 摧毁标记：维修是各系统的权力
        } catch (e) {}
      }
      // ★ 零损坏统计（成就 hz-nodamage18 读取）
      try { if (noDmg && game.stats) game.stats.v18NoDamage = (game.stats.v18NoDamage || 0) + 1; } catch (e) {}
      this._notify(game, d.id, msg + '（' + victims.length + ' 座建筑受损）', { count: victims.length });
      this.active[d.id] = null;
      this.next[d.id] = now + this._rand(d.intervalMin, d.intervalMax);
      // 裂缝生物入侵：挂载军事事件（military.js 可选实现）
      if (d.id === 'rift') {
        this._notify(game, 'rift_invasion', '🌀 裂缝生物正在入侵！星门炮台自动开火。');
      }
    } else if (d.id === 'paradox') {
      // 时间悖论：挂载全局产量 debuff + 时间子矿井停工
      const dur = d.duration * durMul;
      this.active[d.id].until = now + dur;
      // ★ 读取约定：resources.js 产量结算处读取 game.hazard18.paradoxMul()
      // ★ 读取约定：build.js 生产逻辑读取 game.hazard18.paradoxActive()，
      //   时间子矿井（chronon_mine）停工（跳过产出）
      this._notify(game, d.id, msg + '（全城产量 -40%，时间子矿井停工，' + Math.round(dur / 1000) + ' 秒）');
    } else if (d.id === 'heatdeath') {
      // 热寂前兆：挂载全局电力 debuff
      const dur = d.duration * durMul;
      this.active[d.id].until = now + dur;
      // ★ 读取约定：build.js 电力聚合读取 game.hazard18.heatdeathPowerMul()
      this._notify(game, d.id, msg + '（全城电力 -50%，' + Math.round(dur / 1000) + ' 秒）');
    } else if (d.id === 'stellarstorm') {
      // 恒星风暴：戴森球系建筑停工
      const mods = this._targets(game, 'dyson');
      const dur = d.duration * durMul;
      const until = now + dur;
      for (const m of mods) {
        try { m.offline = true; m.offlineUntil = until; } catch (e) {}
      }
      this.active[d.id].until = until;
      this._notify(game, d.id, msg + '（' + mods.length + ' 座戴森球系建筑停工 ' + Math.round(dur / 1000) + ' 秒）',
        { count: mods.length });
    }
  }

  // ---- 供其他系统读取的查询接口（全部防御式） ----
  paradoxMul() {  // 时间悖论进行中→ 0.6，否则 1
    const st = this.active.paradox;
    return (st && st.fired && st.until && Date.now() < st.until) ? 0.6 : 1;
  }
  paradoxActive() {  // 时间悖论进行中→ true（时间子矿井停工判定）
    const st = this.active.paradox;
    return !!(st && st.fired && st.until && Date.now() < st.until);
  }
  heatdeathPowerMul() {  // 热寂前兆进行中→ 0.5，否则 1
    const st = this.active.heatdeath;
    return (st && st.fired && st.until && Date.now() < st.until) ? 0.5 : 1;
  }
  riftActive() {  // 维度裂缝进行中→ true
    const st = this.active.rift;
    return !!(st && st.fired && st.until && Date.now() < st.until);
  }

  // ---- 存档 ----
  save() {
    const now = Date.now();
    const nextIn = {};
    for (const d of DISASTERS_V18) nextIn[d.id] = Math.max(0, this.next[d.id] - now);
    return { v: 18, nextIn };
  }
  load(s) {
    const now = Date.now();
    try {
      if (s && s.nextIn) {
        for (const d of DISASTERS_V18) {
          if (typeof s.nextIn[d.id] === 'number') this.next[d.id] = now + s.nextIn[d.id];
        }
      }
    } catch (e) {}
  }

  // ---- 自动接入 game.tick / game.save / game.load（防御式打补丁） ----
  static attach(game) {
    if (!game || game.hazard18) return game.hazard18 || null;
    const hz = new HazardPack18();
    game.hazard18 = hz;
    if (typeof game.tick === 'function') {
      const _tick = game.tick;
      game.tick = function (now, dt) { try { hz.update(now, this); } catch (e) {} return _tick.call(this, now, dt); };
    }
    if (typeof game.save === 'function') {
      const _save = game.save;
      game.save = function () { const s = _save.call(this) || {}; try { s[PACK18_KEY] = hz.save(); } catch (e) {} return s; };
    }
    if (typeof game.load === 'function') {
      const _load = game.load;
      game.load = function (s) { const r = _load.call(this, s); try { if (s && s[PACK18_KEY]) hz.load(s[PACK18_KEY]); } catch (e) {} return r; };
    }
    return hz;
  }
}

// ==================== 四、新奇观 ×5 ====================
// 设计总纲：v1.8 的五奇观是「终极五件套」——
//   时间机器（⏰）：第五胜利 —— 穿越时间，「回家」之后是「回家看看过去」；
//   维度之门（🌀）：维度裂缝的终极答案 —— 有门，就不怕裂缝；
//   戴森球（☀️）：能源的终点 —— 恒星成为「员工」，产电 1000；
//   行星引擎（🌍）：行星的终点 —— 火星成为「座驾」，推力翻倍；
//   欧米茄档案馆（📚）：知识的终点 —— 每周期 200 科技点，知识永恒。
// 五条铁律（沿用 v1.5）：每种只有 1 级 / 极贵 / 各有前置锁 / 限建 1 座 /
//   胜利层级递增：发射台（一）< 方舟（二）< 星门（三）< 星门网络（四）< 时间机器（五）。
// 配置表字段：{id, name, icon, desc, cost（巨额）, effect}，
//   另附前置 needTech / needBuilding / needPop 与 BUILDINGS 注册体（含 lore×3 / buildStages×3）。
// ★ 读取约定：
//   time_machine：levels[1].winsGame='time_machine'，city.js 读取
//     checkTimeMachineVictory（本文件已打补丁），game.js 主循环可直接调用，
//     或用 TimeMachineVictory.attach(game) 自动接入；showVictory 新增
//     'time_machine' 分支（文案见附录 C）；
//     建造前置：needTech='t-time-20' + needBuilding='paradox_shield'（需 Lv3，
//     build.js 实现侧检查）+ cost.chronon=50（需 resources.js 注册 chronon）；
//   dim_gate：levels[1].riftSeal=true，HazardPack18._immune 读取
//     builder.count('dim_gate')>=1 → 维度裂缝跳过（免疫）；
//   dyson_sphere：levels[1].power=1000，build.js 电力聚合读取（加法汇总）；
//     levels[1].dysonComplete=true，HazardPack18._immune 读取 → 恒星风暴免疫；
//   planet_engine：levels[1].thrustMul=2.0，game.js 全城推力计算读取
//     （推力 = Σ推进器 × thrustMul）；levels[1].planetMoving=true，
//     city.js 可选实现「火星位移」事件（成就 qw-moving 读取 stats.planetMovedKm）；
//   omega_archive：levels[1].techOut=200，build.js 生产逻辑读取
//     （每 produceInterval 产科技点，加法汇总）。
const WONDERS_V18 = [

  // ── 建造剧本：时间机器 ──
  //   前置链：t-time-20（双线毕业）→ 悖论护盾 Lv3（门票）→ 50 时间子（材料）；
  //   材料：8 座矿井 Lv3（64/60 秒）→ 47 秒攒够，别一座一座慢慢挖；
  //   时机：第五胜利是 v1.8 的主线，建议 50 分钟开工；
  //   翻车点：chronon 未注册 —— 材料永远「不足」，先去 resources.js。
  { id: 'time_machine', name: '时间机器', icon: '⏰',
    desc: '穿越时间的机器：建成即开启第五胜利 —— 「时间旅行」。',
    cost: { steel: 3000, tech: 800, he3: 150, chronon: 50 },
    effect: '第五胜利：时间旅行；时间子产量 +50%（机器的「余热」）',
    needTech: 't-time-20', needBuilding: 'paradox_shield', needBuildingLevel: 3,
    needPop: 300, powerUse: 150,
    flavor: '「我们征服了空间，我们回家了 —— 现在，我们要去看看『昨天』。」——时间机器点火' },

  // ── 建造剧本：维度之门 ──
  //   前置链：t-dim-20（双线毕业）→ 3500 钢 + 900 科技 + 200 He3；
  //   收益：维度裂缝免疫 + 维度贸易 ×2 —— 防御+贸易双收；
  //   时机：裂缝频发期（40 分钟+）建成，裂缝变景观；
  //   翻车点：和星门网络抢 He3 —— 先定胜利路线，别双线。
  { id: 'dim_gate', name: '维度之门', icon: '🌀',
    desc: '维度的终极之门：建成后免疫维度裂缝，维度贸易 ×2。',
    cost: { steel: 3500, tech: 900, he3: 200 },
    effect: '免疫维度裂缝；维度贸易收益 ×2',
    needTech: 't-dim-20', needPop: 350, powerUse: 180,
    flavor: '「裂缝？那是门没关好 —— 现在，我们有钥匙了。」——维度之门开启' },

  // ── 建造剧本：戴森球 ──
  //   前置链：t-ult-9（创世引擎）→ 5000 钢 + 1200 科技 + 300 He3；
  //   收益：产电 1000 + 恒星风暴免疫 —— 能源毕业；
  //   时机：戴森帆 3 座 Lv3 后，钢产能 342/分钟 → 15 分钟攒够；
  //   翻车点：500 人口 —— 戴森球要 500 人，先涨人口。
  { id: 'dyson_sphere', name: '戴森球', icon: '☀️',
    desc: '包裹恒星的终极工程：产电 1000，免疫恒星风暴。',
    cost: { steel: 5000, tech: 1200, he3: 300 },
    effect: '稳定产电 1000；免疫恒星风暴',
    needTech: 't-ult-9', needPop: 500, powerUse: 0,
    flavor: '「从今天起，恒星是我们的『员工』—— 它从不请假。」——戴森球完工' },

  // ── 建造剧本：行星引擎 ──
  //   前置链：t-omega-20（双线毕业）→ 全城推力 ≥ 6（2 座推进器 Lv3）；
  //   收益：全城推力 ×2 + 火星位移事件 —— 行星成为座驾；
  //   时机：推进器 2 座 Lv3 + 冷却塔 2 座 Lv3 后开工；
  //   翻车点：推力不够 6 —— 前置检查会拦你，先攒推力。
  { id: 'planet_engine', name: '行星引擎', icon: '🌍',
    desc: '推动行星的终极引擎：全城推力 ×2，火星成为「座驾」。',
    cost: { steel: 4000, tech: 1000, uranium: 400 },
    effect: '全城推力 ×2；解锁「火星位移」事件',
    needTech: 't-omega-20', needThrust: 6, needPop: 400, powerUse: 200,
    flavor: '「以前我们仰望星空，现在我们推着星空走 —— 系好安全带。」——行星引擎点火' },

  // ── 建造剧本：欧米茄档案馆 ──
  //   前置链：t-omega-19（A 列毕业）→ 2500 钢 + 1500 科技 + 800 稀土；
  //   收益：科技 200/周期 + 科技消耗 -20% —— 知识永恒；
  //   时机：科研缺口期建成，200/周期碾压一切；
  //   翻车点：800 稀土 —— 稀土是隐形瓶颈，提前挖。
  { id: 'omega_archive', name: '欧米茄档案馆', icon: '📚',
    desc: '知识的终极殿堂：每周期产科技点 200，知识永恒。',
    cost: { steel: 2500, tech: 1500, rare: 800 },
    effect: '每周期产科技点 200；全城科技点消耗 -20%',
    needTech: 't-omega-19', needPop: 250, powerUse: 60,
    flavor: '「全宇宙的知识，在这里安家 —— 房租是好奇心。」——欧米茄档案馆落成' },
];

// ---- WONDERS_V18 → BUILDINGS 注册（单级、限建 1 座，前置只做数据声明） ----
if (typeof BUILDINGS !== 'undefined') Object.assign(BUILDINGS, {
  // ═══════════ 1. ⏰ 时间机器 time_machine —— 第五胜利 ═══════════
  time_machine: {
    id: 'time_machine', name: '时间机器', icon: '⏰',
    levels: [null,
      { cost: { steel: 3000, tech: 800, he3: 150, chronon: 50 }, needPop: 300, powerUse: 150,
        needTech: 't-time-20', needBuilding: 'paradox_shield', needBuildingLevel: 3,
        winsGame: 'time_machine', chrononYieldMul: 1.5,
        desc: '建成即第五胜利！需 t-time-20 + 悖论护盾 Lv3 + 50 时间子 + 人口 300',
        flavor: '「我们征服了空间，我们回家了 —— 现在，我们要去看看『昨天』。」——时间机器点火', },
    ],
    desc: '终极奇观：建成即第五胜利（时间旅行）。需 t-time-20、悖论护盾 Lv3、50 时间子',
    flavor: '时间，是最后的边疆。',
    buildFlavor: '时间机器点火时，全城的钟同时停了一秒 —— 然后，昨天来了。',
    buildStages: [
      '奠基：在时间褶皱最深处打下第一根桩，桩基深入「昨天」3 米。',
      '组装：50 个时间子注入核心，机器轻轻震了一下 —— 像心跳。',
      '点火：第一次时间旅行，目的地：昨天。单程：0 秒。',
    ],
    lore: [
      '时间机器点火那天，一位老人走进了机器，出来时年轻了 40 岁 —— 他说：我去看了看我妈。',
      '物理学家在庆功宴上哭了：我们证明了时间旅行可能 —— 代价是 50 个时间子。',
      '时间管理局成立了，局长是时间机器的总设计师 —— 她的第一条规定：不许剧透。',
    ],
  },

  // ═══════════ 2. 🌀 维度之门 dim_gate —— 裂缝免疫 ═══════════
  dim_gate: {
    id: 'dim_gate', name: '维度之门', icon: '🌀',
    levels: [null,
      { cost: { steel: 3500, tech: 900, he3: 200 }, needPop: 350, powerUse: 180,
        needTech: 't-dim-20', riftSeal: true, dimTradeMul: 2.0,
        desc: '免疫维度裂缝！维度贸易 ×2。需维度系终点 t-dim-20、人口 350',
        flavor: '「裂缝？那是门没关好 —— 现在，我们有钥匙了。」——维度之门开启', },
    ],
    desc: '终极防御奇观：免疫维度裂缝，维度贸易 ×2，需维度系终点 t-dim-20',
    flavor: '有门，就不怕裂缝。',
    buildFlavor: '维度之门开启时，所有的裂缝同时「合上」了 —— 像拉链。',
    buildStages: [
      '定位：在维度最薄处标记门址， 11 维坐标同步校准。',
      '铸门：用维度建材铸造门框，门框比「存在」还硬。',
      '开启：门开了，裂缝关了 —— 宇宙第一次有了「门卫」。',
    ],
    lore: [
      '维度之门开启那天，裂缝生物在门外排队 —— 门卫说：要办签证。',
      '星门海关的生意翻了一倍 —— 维度贸易，税也得交。',
      '有人在门上刻字：「此门之后，是 11 个宇宙。」—— 导游说，这是夸张，其实是 11 维。',
    ],
  },

  // ═══════════ 3. ☀️ 戴森球 dyson_sphere —— 能源终极 ═══════════
  dyson_sphere: {
    id: 'dyson_sphere', name: '戴森球', icon: '☀️',
    levels: [null,
      { cost: { steel: 5000, tech: 1200, he3: 300 }, needPop: 500, powerUse: 0,
        needTech: 't-ult-9', power: 1000, dysonComplete: true,
        desc: '稳定产电 1000！免疫恒星风暴。需终极科技 t-ult-9、人口 500',
        flavor: '「从今天起，恒星是我们的『员工』—— 它从不请假。」——戴森球完工', },
    ],
    desc: '终极能源奇观：产电 1000，免疫恒星风暴，需终极系 t-ult-9',
    flavor: '恒星，正式入职了。',
    buildFlavor: '戴森球合拢的瞬间，太阳「暗」了一下 —— 然后，星港的灯全亮了。',
    buildStages: [
      '铺帆：百万面太阳帆升空，夜空被「打码」了一半。',
      '组网：帆矩阵连成球，恒星第一次有了「壳」。',
      '合拢：戴森球完工，产电 1000 —— 能源自由，毕业。',
    ],
    lore: [
      '戴森球完工那天，能源部长宣布：电费，从今天起按「心情」收。',
      '地球发来贺电：「你们把太阳『包』起来了？我们也想包一个。」',
      '戴森球的维护手册只有一句话：「太阳还有 50 亿年，别慌。」',
    ],
  },

  // ═══════════ 4. 🌍 行星引擎 planet_engine —— 行星终极 ═══════════
  planet_engine: {
    id: 'planet_engine', name: '行星引擎', icon: '🌍',
    levels: [null,
      { cost: { steel: 4000, tech: 1000, uranium: 400 }, needPop: 400, powerUse: 200,
        needTech: 't-omega-20', needThrust: 6, thrustMul: 2.0, planetMoving: true,
        desc: '全城推力 ×2！火星成为「座驾」。需 t-omega-20 + 全城推力 ≥ 6 + 人口 400',
        flavor: '「以前我们仰望星空，现在我们推着星空走 —— 系好安全带。」——行星引擎点火', },
    ],
    desc: '终极行星奇观：全城推力 ×2，需 t-omega-20、全城推力 ≥ 6',
    flavor: '火星，正式成为座驾了。',
    buildFlavor: '行星引擎点火时，全球地震仪集体「跳」了一下 —— 然后，火星出发了。',
    buildStages: [
      '点火：全城推进器同步点火，推力达标，行星引擎「认主」。',
      '加速：火星开始加速，0.1 毫米、1 毫米、1 米 —— 越来越快。',
      '巡航：火星进入巡航速度，目的地：下一个恒星。预计：很久。',
    ],
    lore: [
      '行星引擎点火那天，市长系上了安全带 —— 全城都系上了。',
      '火星移动 1 公里那天，全城放假 —— 庆祝人类第一次「开车」上班。',
      '导航员的日志：「今日行程：1 公里。油耗：一颗行星的耐心。」',
    ],
  },

  // ═══════════ 5. 📚 欧米茄档案馆 omega_archive —— 知识终极 ═══════════
  omega_archive: {
    id: 'omega_archive', name: '欧米茄档案馆', icon: '📚',
    levels: [null,
      { cost: { steel: 2500, tech: 1500, rare: 800 }, needPop: 250, powerUse: 60,
        needTech: 't-omega-19', techOut: 200, produceInterval: 30000,
        techCostMul: 0.8, knowledgeEternal: true,
        desc: '每周期产科技点 200！科技消耗 -20%。需终极系 t-omega-19、人口 250',
        flavor: '「全宇宙的知识，在这里安家 —— 房租是好奇心。」——欧米茄档案馆落成', },
    ],
    desc: '终极知识奇观：科技点 200/周期，科技消耗 -20%，需 t-omega-19',
    flavor: '知识，永恒了。',
    buildFlavor: '档案馆落成时，所有的书同时「翻」了一页 —— 像在鼓掌。',
    buildStages: [
      '奠基：在知识最深处打下第一根桩，桩基深入「未知」3 米。',
      '藏书：全宇宙的知识运进来，书架从火星排到了星门。',
      '开馆：知识永恒，科技点 200/周期 —— 学习，毕业了。',
    ],
    lore: [
      '档案馆的借书证是全宇宙通用的 —— 包括 11 个维度。',
      '馆长的口头禅：「不知道？去档案馆 —— 它知道。」',
      '有学生在档案馆住了三年，出来时成了博士 —— 论文题目：《论我为什么住在图书馆》。',
    ],
  },
});

// ==================== 五、时间机器胜利补丁（第五胜利条件） ====================
// 与 v1.5 的星门网络胜利补丁同构：City.prototype.checkTimeMachineVictory +
// TimeMachineVictory.attach。防御式：City 未定义时跳过。
(function () {
  try {
    if (typeof City !== 'undefined' && City.prototype && !City.prototype.checkTimeMachineVictory) {
      // 前置：时间机器建成（builder.count 双通道）→ 第五胜利
      City.prototype.checkTimeMachineVictory = function (builder) {
        try {
          if (this.timeTraveled) return true;
          let n = 0;
          if (builder && typeof builder.count === 'function') n = builder.count('time_machine');
          else if (builder && Array.isArray(builder.buildings))
            n = builder.buildings.filter((b) => b && b.id === 'time_machine').length;
          if (n >= 1) { this.timeTraveled = true; return true; }
        } catch (e) {}
        return false;
      };
      // anyVictory 纳入第五胜利（v1.5 补丁已处理 earthLinked，此处追加 timeTraveled）
      if (typeof City.prototype.anyVictory === 'function' && !City.prototype._v18patched) {
        const _any = City.prototype.anyVictory;
        City.prototype.anyVictory = function () {
          try { if (_any.call(this)) return true; } catch (e) {}
          return !!this.timeTraveled;
        };
        City.prototype._v18patched = true;
      }
    }
  } catch (e) {}
})();

const TimeMachineVictory = {
  // 自动接入：每 tick 检查一次，首次达标弹胜利面板（game.js 需实现 showVictory('time_machine')）
  attach(game) {
    if (!game || game._timeMachineWinAttached) return;
    game._timeMachineWinAttached = true;
    try {
      if (typeof game.tick === 'function') {
        const _tick = game.tick;
        game.tick = function (now, dt) {
          try {
            if (this.city && typeof this.city.checkTimeMachineVictory === 'function' &&
                this.city.checkTimeMachineVictory(this.builder) && !this._timeMachineWinShown) {
              this._timeMachineWinShown = true;
              if (typeof this.showVictory === 'function') this.showVictory('time_machine');
            }
          } catch (e) {}
          return _tick.call(this, now, dt);
        };
      }
    } catch (e) {}
  },
};

// ==================== 六、终极政策 ×10 ====================
// 设计总纲：v1.8 的终极政策是「毕业政策」—— 每一条都又贵又强，
//   对应一个终极主题：时间、维度、戴森球、引擎、悖论、国有化、
//   知识、自由港、热寂、欧米茄宪章。
// 新分类「终极」（POLICY_CATS.omega），图标 🌌。
// 互斥组（defensive push 进 EXCLUSIVE_GROUPS）：
//   ['dyson_quota', 'gate_freeport'] —— 计划（配额）vs 市场（自由港），二选一。
// 数组字段：{id, name, icon, cat, desc, cost, bonus, penalty, needs, flavor}，
//   bonus / penalty 键沿用 tech.js fx 风格（*Mul 乘区 / *Add 加区 / upkeep 维持费）。
// ★ 读取约定：policy.js 的 PolicyManager 按既有规则读取 bonus/penalty；
//   新增 bonus 键（chrononYieldMul / omegaYieldMul 等）按 tech.js fx 语义接入。
if (typeof POLICY_CATS !== 'undefined' && !POLICY_CATS.omega) {
  POLICY_CATS.omega = { name: '终极', icon: '🌌' };
}

const POLICIES_V18 = [
  // ── 1. ⏳ 时间税 time_tax ──
  // 平衡：时间子 +20% 是第五胜利的加速器；代价是增长 -10% + 每分钟 5 科技点，
  //   适合时间子矿井成群之后。前置无，颁布费 50 科技点。
  //   ※ 组合技：时间税 + 悖论管制 → 时间子 +20% -10% = 净 +8%，减伤 -15%，求稳套装。
  { id: 'time_tax', name: '时间税', icon: '⏳', cat: 'omega',
    desc: '对时间征税：时间子产量 +20%。人口增长 -10%，每分钟维持费 5 科技点。',
    cost: { tech: 50 },
    bonus: { chrononYieldMul: 1.2 },
    penalty: { popGrowthMul: 0.9, upkeep: { tech: 5 } },
    needs: [],
    flavor: '「时间是最贵的资源，所以我们决定 —— 对它征税。」', },
  // ── 2. 🌀 维度开放 dim_open ──
  // 平衡：贸易收入 +30% 是星门流的印钞机；代价是动乱 +15%（维度开放带来「外来者」），
  //   适合治安良好的后期城市。颁布费 60 科技点。
  //   ※ 组合技：维度开放 + 星门自由港 → 贸易 +30% +40% = ×1.82，贸易完全体（需 dim_open 前置）。
  { id: 'dim_open', name: '维度开放', icon: '🌀', cat: 'omega',
    desc: '打开维度大门：贸易收入 +30%。动乱概率 +15%。',
    cost: { tech: 60 },
    bonus: { tradeIncomeMul: 1.3 },
    penalty: { unrestMul: 1.15 },
    needs: [],
    flavor: '「宇宙这么大，多一个维度多条路 —— 也有多一点麻烦。」', },
  // ── 3. ☀️ 戴森配额 dyson_quota ──
  // 平衡：全城电力 +20% 是电力自由的答案；代价是建筑成本 +10%（配额制效率损失），
  //   与星门自由港互斥（计划 vs 市场）。颁布费 70 科技点。
  //   ※ 组合技：戴森配额 + 恒星国有化 → 电力 +20%，戴森成本 -15%，戴森流毕业套装。
  { id: 'dyson_quota', name: '戴森配额', icon: '☀️', cat: 'omega',
    desc: '恒星能配额制：全城电力 +20%。全城建筑成本 +10%。（与星门自由港互斥）',
    cost: { tech: 70 },
    bonus: { powerMul: 1.2 },
    penalty: { buildCostMul: 1.1 },
    needs: [],
    flavor: '「阳光是公共财产，配额是最公平的分配。」', },
  // ── 4. 🚀 引擎优先 engine_first ──
  // 平衡：建造速度 +25% 是奇观冲刺的神器；代价是增长 -15%（资源倾斜），
  //   适合「all in 行星引擎」的终极玩家。颁布费 80 科技点。
  //   ※ 组合技：引擎优先 + 欧米茄宪章 → 建造 +25%，产量 +20%，奇观冲刺套装（需 engine_first 前置）。
  { id: 'engine_first', name: '引擎优先', icon: '🚀', cat: 'omega',
    desc: '一切为了引擎：建造速度 +25%。人口增长 -15%。',
    cost: { tech: 80 },
    bonus: { buildSpeedMul: 1.25 },
    penalty: { popGrowthMul: 0.85 },
    needs: [],
    flavor: '「引擎可以等，人不能等 —— 所以让人等引擎。」', },
  // ── 5. 🌀 悖论管制 paradox_control ──
  // 平衡：灾难伤害 -15% 是终极减伤；代价是时间子 -10%（管制降低开采效率），
  //   适合「求稳」的第五胜利玩家。颁布费 90 科技点。
  //   ※ 组合技：悖论管制 + 热寂预案 → 灾难 -15% -10% = -23.5%，终极减伤套装。
  { id: 'paradox_control', name: '悖论管制', icon: '🌀', cat: 'omega',
    desc: '管制悖论：所有灾难伤害 -15%。时间子产量 -10%。',
    cost: { tech: 90 },
    bonus: { disasterMul: 0.85 },
    penalty: { chrononYieldMul: 0.9 },
    needs: ['time_tax'],
    flavor: '「悖论也要持证上岗 —— 无证悖论，罚款。」', },
  // ── 6. ☀️ 恒星国有化 stellar_nationalize ──
  // 平衡：戴森系建筑成本 -15% 是戴森球流的答案；代价是贸易收入 -10%（国有化吓跑商人），
  //   适合「自力更生」的玩家。颁布费 100 科技点。
  //   ※ 组合技：恒星国有化 + 戴森配额 → 戴森成本 -15%，电力 +20%，自力更生套装（需 dyson_quota 前置）。
  { id: 'stellar_nationalize', name: '恒星国有化', icon: '☀️', cat: 'omega',
    desc: '恒星收归国有：戴森系建筑成本 -15%。贸易收入 -10%。',
    cost: { tech: 100 },
    bonus: { dysonCostMul: 0.85 },
    penalty: { tradeIncomeMul: 0.9 },
    needs: ['dyson_quota'],
    flavor: '「太阳是大家的 —— 国有化，只是补了个手续。」', },
  // ── 7. 📚 档案公开 archive_open ──
  // 平衡：科技产出 +15% 是科研毕业的答案；代价是每分钟 3 科技点（公开的维护费），
  //   适合科研流后期。颁布费 110 科技点。
  //   ※ 组合技：档案公开 + 欧米茄档案馆 → 科技 +15% + 200/周期，科研毕业套装。
  { id: 'archive_open', name: '档案公开', icon: '📚', cat: 'omega',
    desc: '知识全公开：科技产出 +15%。每分钟维持费 3 科技点。',
    cost: { tech: 110 },
    bonus: { techMul: 1.15 },
    penalty: { upkeep: { tech: 3 } },
    needs: [],
    flavor: '「知识不公开，等于没知识 —— 公开的代价，我们付。」', },
  // ── 8. 🚪 星门自由港 gate_freeport ──
  // 平衡：贸易收入 +40% 是全场最高单项贸易加成；代价是税收 -20%（免税港），
  //   与戴森配额互斥（市场 vs 计划）。颁布费 120 科技点。
  //   ※ 组合技：星门自由港 + 维度开放 + 信标 → 贸易 ×1.4 ×1.3 ×2.0 = ×3.64，印钞机 Pro Max。
  { id: 'gate_freeport', name: '星门自由港', icon: '🚪', cat: 'omega',
    desc: '星门免税港：贸易收入 +40%。全城税收 -20%。（与戴森配额互斥）',
    cost: { tech: 120 },
    bonus: { tradeIncomeMul: 1.4 },
    penalty: { taxMul: 0.8 },
    needs: ['dim_open'],
    flavor: '「船来船往，税？什么税？ —— 自由港没有税，只有朋友。」', },
  // ── 9. 🥶 热寂预案 heatdeath_plan ──
  // 平衡：灾难伤害 -10% + 热寂专项 -10% 是热寂的官方政策解法；
  //   代价是电力 -5%（预案储备），适合热寂频发期。颁布费 130 科技点。
  //   ※ 组合技：热寂预案 + t-omega-18 → 热寂 -10% -75% = -77.5%，热寂无害化。
  { id: 'heatdeath_plan', name: '热寂预案', icon: '🥶', cat: 'omega',
    desc: '热寂应急预案：所有灾难伤害 -10%。全城电力 -5%。',
    cost: { tech: 130 },
    bonus: { disasterMul: 0.9, heatDeathResistAdd: 0.1 },
    penalty: { powerMul: 0.95 },
    needs: [],
    flavor: '「宇宙会冷，但我们有预案 —— 预案的第一条：多穿点。」', },
  // ── 10. 🌌 欧米茄宪章 omega_charter ──
  // 平衡：终极政策的毕业 —— 全局产量 +20%，代价是每分钟 2 He3（宪章的「年费」），
  //   前置引擎优先（终极路线的门票）。颁布费 200 科技点。
  //   ※ 组合技：欧米茄宪章 + 引擎优先 + 加速器 → 产量 ×1.2 ×2.0 = ×2.4，数值毕业套装。
  { id: 'omega_charter', name: '欧米茄宪章', icon: '🌌', cat: 'omega',
    desc: '终极宪章：全局产量 +20%。每分钟维持费 2 氦-3。',
    cost: { tech: 200 },
    bonus: { omegaYieldMul: 1.2 },
    penalty: { upkeep: { he3: 2 } },
    needs: ['engine_first'],
    flavor: '「我们投票，我们负责，我们留下 —— 我们还开车，我们还穿越时间。」', },
];

// ---- POLICIES_V18 → POLICY_DEFS 注册（防御式） ----
if (typeof POLICY_DEFS !== 'undefined') {
  for (const p of POLICIES_V18) {
    POLICY_DEFS[p.id] = {
      id: p.id, name: p.name, icon: p.icon, cat: p.cat,
      desc: p.desc, cost: p.cost, bonus: p.bonus,
      penalty: p.penalty, needs: p.needs.slice(), flavor: p.flavor,
    };
  }
}

// ---- 互斥组：戴森配额 vs 星门自由港（计划 vs 市场，二选一） ----
if (typeof EXCLUSIVE_GROUPS !== 'undefined' && Array.isArray(EXCLUSIVE_GROUPS)) {
  const _has = EXCLUSIVE_GROUPS.some((g) => Array.isArray(g) &&
    g.indexOf('dyson_quota') !== -1 && g.indexOf('gate_freeport') !== -1);
  if (!_has) EXCLUSIVE_GROUPS.push(['dyson_quota', 'gate_freeport']);
}

// ==================== 附录 A：v1.8 自检 ====================
function ContentV18SelfTest() {
  const errors = [];
  const ok = (cond, msg) => { if (!cond) errors.push(msg); };
  try {
    // —— 科技 60 项 ——
    ok(Array.isArray(TECH_V18), 'TECH_V18 未定义');
    ok(TECH_V18.length === 60, '科技应为 60 项，实际 ' + (TECH_V18 && TECH_V18.length));
    const KNOWN_FX18 = ['chrononYieldMul','buildSpeedMul','paradoxResist','rewindEff',
      'dimCostMul','dimYieldMul','gateYieldMul','riftResist',
      'omegaYieldMul','omegaPowerMul','heatDeathResist'];
    const seen = {};
    for (const t of TECH_V18) {
      ok(t.id && t.name && t.icon && t.desc, '科技缺字段: ' + (t && t.id));
      ok(typeof t.cost === 'number' && t.cost > 0, (t && t.id) + ' cost 非法');
      ok(Array.isArray(t.pre), (t && t.id) + ' pre 应为数组');
      ok(!!t.effect, (t && t.id) + ' 缺少 effect');
      ok(!!t.hint, (t && t.id) + ' 缺少 hint');
      ok(!seen[t.id], '科技 id 重复: ' + t.id); seen[t.id] = 1;
    }
    for (const t of TECH_V18) for (const p of (t.pre || [])) ok(!!seen[p], t.id + ' 的前置 ' + p + ' 不存在');
    for (const t of TECH_V18) for (const k of Object.keys(t.fx || {})) ok(KNOWN_FX18.indexOf(k) !== -1, t.id + ' 未知 fx 键: ' + k);
    // 分支校验：time/dim/omega 各 20
    const byBranch = { time: 0, dim: 0, omega: 0 };
    for (const t of TECH_V18) if (byBranch[t.branch] !== undefined) byBranch[t.branch]++;
    ok(byBranch.time === 20 && byBranch.dim === 20 && byBranch.omega === 20,
      '三系应各 20 项，实际 ' + JSON.stringify(byBranch));
    if (typeof TECH_DEFS !== 'undefined') {
      for (const t of TECH_V18) {
        ok(!!TECH_DEFS[t.id], 'TECH_DEFS 缺少 ' + t.id);
        if (TECH_DEFS[t.id]) ok(TECH_DEFS[t.id].branch === t.branch, t.id + ' 分支不一致');
      }
      const order18 = (typeof TECH_ORDER !== 'undefined' ? TECH_ORDER : []).filter((id) => seen[id]);
      ok(order18.length === 60, 'TECH_ORDER 缺少 v1.8 科技，实际 ' + order18.length);
    }
    if (typeof TECH_BRANCHES !== 'undefined') {
      for (const b of ['time','dim','omega']) ok(!!TECH_BRANCHES[b], 'TECH_BRANCHES 缺少分支: ' + b);
    }
    // —— 成就 60 项 ——
    ok(Array.isArray(ACH_V18), 'ACH_V18 未定义');
    ok(ACH_V18.length === 60, '成就应为 60 项，实际 ' + (ACH_V18 && ACH_V18.length));
    const cats = {};
    const aseen = {};
    for (const a of ACH_V18) {
      ok(a.id && a.name && a.icon && a.desc, '成就缺字段: ' + (a && a.id));
      ok(!!a.check && typeof a.check === 'string', (a && a.id) + ' check 应为判定描述文字');
      ok(!aseen[a.id], '成就 id 重复: ' + a.id); aseen[a.id] = 1;
      cats[a.cat] = (cats[a.cat] || 0) + 1;
      ok(typeof a.checkFn === 'function', (a && a.id) + ' 缺少 checkFn');
      try { a.checkFn(null); a.checkFn({}); }
      catch (e) { errors.push(a.id + ' checkFn 在空 game 下抛错: ' + e.message); }
    }
    const expectCats = { '时间': 12, '维度': 12, '终极': 12, '建筑': 8, '灾难': 8, '奇观': 8 };
    for (const c of Object.keys(expectCats)) ok(cats[c] === expectCats[c], '类别「' + c + '」应为 ' + expectCats[c] + ' 项，实际 ' + (cats[c] || 0));
    if (typeof ACHIEVEMENT_DEFS !== 'undefined') {
      const found = {};
      for (const a of ACHIEVEMENT_DEFS) found[a.id] = a;
      for (const a of ACH_V18) ok(!!found[a.id], 'ACHIEVEMENT_DEFS 缺少 ' + a.id);
    }
    // —— 灾难 5 种 ——
    ok(Array.isArray(DISASTERS_V18), 'DISASTERS_V18 未定义');
    ok(DISASTERS_V18.length === 5, '灾难应为 5 种，实际 ' + (DISASTERS_V18 && DISASTERS_V18.length));
    for (const d of DISASTERS_V18) {
      ok(d.id && d.name && d.icon && d.desc, '灾难缺字段: ' + (d && d.id));
      ok(typeof d.warnMs === 'number' && typeof d.durationMs === 'number', d.id + ' warnMs/durationMs 非法');
      ok(!!d.effect && !!d.counter, d.id + ' 缺少 effect/counter');
      ok(Array.isArray(d.flavor) && d.flavor.length >= 2, d.id + ' flavor 应 ≥ 2 条');
    }
    ok(typeof HazardPack18 === 'function', 'HazardPack18 未定义');
    const hz = new HazardPack18();
    hz.update(Date.now(), null); hz.update(Date.now(), {});  // 空 game 不应抛错
    ok(hz.paradoxMul() === 1 && hz.heatdeathPowerMul() === 1, '查询接口默认值异常');
    ok(hz.paradoxActive() === false && hz.riftActive() === false, '查询接口默认值异常');
    const sv = hz.save();
    ok(sv && sv.v === 18 && sv.nextIn && Object.keys(sv.nextIn).length === 5, 'save 字段缺失');
    ok(typeof HazardPack18.attach === 'function', 'HazardPack18.attach 缺失');
    // —— 奇观 5 种 ——
    ok(Array.isArray(WONDERS_V18), 'WONDERS_V18 未定义');
    ok(WONDERS_V18.length === 5, '奇观应为 5 种，实际 ' + (WONDERS_V18 && WONDERS_V18.length));
    const wids = ['time_machine', 'dim_gate', 'dyson_sphere', 'planet_engine', 'omega_archive'];
    for (const w of WONDERS_V18) {
      ok(w.id && w.name && w.icon && w.desc, '奇观缺字段: ' + (w && w.id));
      ok(w.cost && typeof w.cost === 'object', w.id + ' 缺少 cost');
      ok(!!w.effect, w.id + ' 缺少 effect');
    }
    if (typeof BUILDINGS !== 'undefined') {
      for (const id of wids) {
        const w = BUILDINGS[id];
        ok(!!w, 'BUILDINGS 缺少奇观: ' + id);
        if (w) {
          ok(Array.isArray(w.levels) && w.levels.length === 2 && !!w.levels[1], id + ' 应为单级');
          ok(Array.isArray(w.lore) && w.lore.length === 3, id + ' lore 应为 3 条');
          ok(Array.isArray(w.buildStages) && w.buildStages.length === 3, id + ' buildStages 应为 3 段');
        }
      }
      ok((BUILDINGS.time_machine.levels[1] || {}).winsGame === 'time_machine', '时间机器缺少 winsGame 标记');
      ok((BUILDINGS.dim_gate.levels[1] || {}).riftSeal === true, '维度之门缺少 riftSeal 标记');
      ok((BUILDINGS.dyson_sphere.levels[1] || {}).power === 1000, '戴森球缺少 power 标记');
      ok((BUILDINGS.planet_engine.levels[1] || {}).thrustMul === 2.0, '行星引擎缺少 thrustMul 标记');
      ok((BUILDINGS.omega_archive.levels[1] || {}).techOut === 200, '欧米茄档案馆缺少 techOut 标记');
    }
    // —— 第五胜利补丁 ——
    if (typeof City !== 'undefined') {
      ok(typeof City.prototype.checkTimeMachineVictory === 'function', 'City.checkTimeMachineVictory 补丁缺失');
    }
    ok(typeof TimeMachineVictory === 'object' && typeof TimeMachineVictory.attach === 'function', 'TimeMachineVictory 缺失');
    // —— 终极政策 10 项 ——
    ok(Array.isArray(POLICIES_V18), 'POLICIES_V18 未定义');
    ok(POLICIES_V18.length === 10, '政策应为 10 项，实际 ' + (POLICIES_V18 && POLICIES_V18.length));
    const pseen = {};
    for (const p of POLICIES_V18) {
      ok(p.id && p.name && p.icon && p.desc, '政策缺字段: ' + (p && p.id));
      ok(p.cost && typeof p.cost === 'object', (p && p.id) + ' 缺少 cost');
      ok(p.bonus && typeof p.bonus === 'object', (p && p.id) + ' 缺少 bonus');
      ok(p.penalty && typeof p.penalty === 'object', (p && p.id) + ' 缺少 penalty');
      ok(Array.isArray(p.needs), (p && p.id) + ' needs 应为数组');
      ok(!!p.flavor, (p && p.id) + ' 缺少 flavor');
      ok(!pseen[p.id], '政策 id 重复: ' + p.id); pseen[p.id] = 1;
      ok(p.cat === 'omega', (p && p.id) + ' cat 应为 omega');
    }
    if (typeof POLICY_DEFS !== 'undefined') {
      for (const p of POLICIES_V18) ok(!!POLICY_DEFS[p.id], 'POLICY_DEFS 缺少 ' + p.id);
    }
    if (typeof POLICY_CATS !== 'undefined') {
      ok(!!POLICY_CATS.omega, 'POLICY_CATS 缺少 omega 分类');
    }
    if (typeof EXCLUSIVE_GROUPS !== 'undefined') {
      const has = EXCLUSIVE_GROUPS.some((g) => Array.isArray(g) &&
        g.indexOf('dyson_quota') !== -1 && g.indexOf('gate_freeport') !== -1);
      ok(has, 'EXCLUSIVE_GROUPS 缺少 dyson_quota/gate_freeport 互斥组');
    }
    // —— 小工具 ——
    ok(typeof P18U === 'object', 'P18U 未定义');
    try { P18U.count(null, 'x'); P18U.chronon({}); P18U.maxLevel(null, 'x'); }
    catch (e) { errors.push('P18U 在空 game 下抛错: ' + e.message); }
  } catch (e) { errors.push('自检异常: ' + (e && e.message)); }
  return { pass: errors.length === 0, fail: errors.length, errors };
}

// ==================== 附录 B：第五胜利面板文案 ====================
// game.js 的 showVictory(type) 新增 'time_machine' 分支时可直接引用本对象。
const TIME_MACHINE_VICTORY_TEXT = {
  title: '⏰ 时间机器点火！',
  body: '第一次时间旅行，目的地：昨天。单程：0 秒。我们在时间里，见到了自己 —— 第五胜利达成！',
  hint: '征服是向外走，回家是向心里走，时间旅行是向「昨天」走。时间，是最后的边疆。',
};

if (typeof module !== 'undefined') {
  Object.assign(module.exports, {
    ContentV18SelfTest, TECH_V18, ACH_V18, DISASTERS_V18, WONDERS_V18,
    POLICIES_V18, HazardPack18, TimeMachineVictory, P18U,
    TIME_MACHINE_VICTORY_TEXT,
  });
}

// ==================== 附录 C：v1.8 科技数值总表 ====================
// 格式：id | 名称 | cost | 核心 fx
// ── ⏳ 时间系（20）──
// A 列·时间子线：
//   t-time-1  | 时间褶皱学   | 40  | chrononYieldMul ×1.2
//   t-time-3  | 褶皱采矿术   | 60  | chrononYieldMul ×1.25（累计 ×1.5）
//   t-time-5  | 因果筛       | 90  | chrononYieldMul ×1.3（累计 ×1.95）
//   t-time-7  | 褶皱深潜     | 130 | chrononYieldMul ×1.35（累计 ×2.63）
//   t-time-9  | 时间富矿     | 180 | chrononYieldMul ×1.4（累计 ×3.68）
//   t-time-11 | 褶皱农场     | 240 | chrononYieldMul ×1.45（累计 ×5.34）
//   t-time-13 | 时间灌溉     | 310 | chrononYieldMul ×1.5（累计 ×8.0）
//   t-time-15 | 褶皱丰收     | 390 | chrononYieldMul ×1.6（累计 ×12.8）
//   t-time-17 | 时间粮仓     | 480 | chrononYieldMul ×1.7（累计 ×21.8）
//   t-time-19 | 时间自由     | 580 | chrononYieldMul ×1.8（累计 ×39.2，A 列毕业）
// B 列·时间操控线：
//   t-time-2  | 时间流体力学 | 40  | buildSpeedMul ×1.15
//   t-time-4  | 因果护甲     | 60  | paradoxResist 0.1
//   t-time-6  | 时间脚手架   | 90  | buildSpeedMul ×1.2（累计 ×1.38）
//   t-time-8  | 倒带维修     | 130 | rewindEff ×1.3
//   t-time-10 | 悖论缓冲     | 180 | paradoxResist +0.15（累计 0.25）
//   t-time-12 | 时间预制件   | 240 | buildSpeedMul ×1.25（累计 ×1.73）
//   t-time-14 | 因果焊接     | 310 | rewindEff ×1.5（累计 ×1.95）
//   t-time-16 | 悖论免疫（Ⅰ）| 390 | paradoxResist +0.2（累计 0.45）
//   t-time-18 | 时间3D打印   | 480 | buildSpeedMul ×1.3（累计 ×2.24，B 列毕业）
//   t-time-20 | 欧米茄钟     | 700 | chrononYieldMul ×2.0 + buildSpeedMul ×1.5（双线毕业）
//   时间系合计：40+60+90+130+180+240+310+390+480+580（A 列 2500）+
//              40+60+90+130+180+240+310+390+480（B 列 1920）+ 700 = 5120 科技点
// ── 🌀 维度系（20）──
// A 列·维度建筑线：
//   t-dim-1  | 维度测绘   | 40  | dimCostMul ×0.92
//   t-dim-3  | 维度建材   | 60  | dimCostMul ×0.9（累计 0.828）
//   t-dim-5  | 维度施工队 | 90  | dimCostMul ×0.88（累计 0.729）
//   t-dim-7  | 跨维度物流 | 130 | dimCostMul ×0.85（累计 0.62）
//   t-dim-9  | 维度预制   | 180 | dimCostMul ×0.82（累计 0.508，腰斩）
//   t-dim-11 | 维度折叠   | 240 | dimCostMul ×0.8（累计 0.406）
//   t-dim-13 | 维度打印   | 310 | dimCostMul ×0.78（累计 0.317）
//   t-dim-15 | 维度批发   | 390 | dimCostMul ×0.75（累计 0.238）
//   t-dim-17 | 维度免费   | 480 | dimCostMul ×0.72（累计 0.171）
//   t-dim-19 | 维度共产   | 580 | dimCostMul ×0.7（累计 0.12，A 列毕业）
// B 列·星门线：
//   t-dim-2  | 维度信标学   | 40  | gateYieldMul ×1.2
//   t-dim-4  | 裂缝预警     | 60  | riftResist 0.1
//   t-dim-6  | 星门增压     | 90  | gateYieldMul ×1.25（累计 ×1.5）
//   t-dim-8  | 裂缝封堵     | 130 | riftResist +0.15（累计 0.25）
//   t-dim-10 | 星门扩容     | 180 | gateYieldMul ×1.3（累计 ×1.95）
//   t-dim-12 | 裂缝缝合     | 240 | riftResist +0.2（累计 0.45）
//   t-dim-14 | 星门网络协议 | 310 | gateYieldMul ×1.35（累计 ×2.63）
//   t-dim-16 | 裂缝免疫（Ⅰ）| 390 | riftResist +0.2（累计 0.65）
//   t-dim-18 | 星门奇点     | 480 | gateYieldMul ×1.4（累计 ×3.68，B 列毕业）
//   t-dim-20 | 维度之心     | 700 | dimYieldMul ×2.0 + riftResist +0.3（双线毕业）
//   维度系合计：2500（A 列）+ 1920（B 列）+ 700 = 5120 科技点
// ── 🌌 终极系（20）──
// A 列·欧米茄产量线（每项 omegaYieldMul ×1.15）：
//   t-omega-1  | 行星引擎原理 | 50  | ×1.15（累计 1.15）
//   t-omega-3  | 废热利用     | 80  | ×1.15（累计 1.32）
//   t-omega-5  | 行星级调度   | 120 | ×1.15（累计 1.52）
//   t-omega-7  | 聚变燃料学   | 170 | ×1.15（累计 1.75）
//   t-omega-9  | 行星防御学   | 230 | ×1.15（累计 2.01，产量翻倍）
//   t-omega-11 | 欧米茄农业   | 300 | ×1.15（累计 2.31）
//   t-omega-13 | 欧米茄工业   | 380 | ×1.15（累计 2.66）
//   t-omega-15 | 欧米茄商业   | 470 | ×1.15（累计 3.06）
//   t-omega-17 | 欧米茄社会   | 570 | ×1.15（累计 3.52）
//   t-omega-19 | 欧米茄文明   | 680 | ×1.15（累计 4.05，A 列毕业）
// B 列·热寂防御线：
//   t-omega-2  | 热寂观测   | 50  | heatDeathResist 0.1
//   t-omega-4  | 欧米茄电网 | 80  | omegaPowerMul ×1.15
//   t-omega-6  | 热寂护甲   | 120 | heatDeathResist +0.12（累计 0.22）
//   t-omega-8  | 欧米茄电站 | 170 | omegaPowerMul ×1.2（累计 ×1.38）
//   t-omega-10 | 热寂缓冲   | 230 | heatDeathResist +0.15（累计 0.37）
//   t-omega-12 | 欧米茄输电 | 300 | omegaPowerMul ×1.25（累计 ×1.73）
//   t-omega-14 | 热寂对抗   | 380 | heatDeathResist +0.18（累计 0.55）
//   t-omega-16 | 欧米茄储能 | 470 | omegaPowerMul ×1.3（累计 ×2.24）
//   t-omega-18 | 热寂免疫（Ⅰ）| 570 | heatDeathResist +0.2（累计 0.75，B 列毕业）
//   t-omega-20 | 欧米茄协议 | 800 | omegaYieldMul ×1.5 + heatDeathResist +0.15（双线毕业）
//   终极系合计：3050（A 列）+ 2370（B 列）+ 800 = 6220 科技点
// 三系全满 = 5120 + 5120 + 6220 = 16460 科技点 ≈ v1.5 四系（3390）的 4.9 倍。
// 关键叠加验算：
//   时间子产量：39.2（A 列）× 2.0（t-time-20）= 78.4 倍 —— 时间自由；
//   维度建筑成本：0.12（A 列）—— 打 1.2 折；
//   星门系产量：3.68（B 列）× 2.0（t-dim-20）= 7.36 倍；
//   全局产量：4.05（A 列）× 1.5（t-omega-20）= 6.08 倍；
//   全局电力：2.24（B 列）；热寂减伤：0.9（叠满上限）；裂缝减伤：0.9（叠满上限）。

// ==================== 附录 D：v1.8 实战剧本（0~60 分钟） ====================
//   0~5 分钟（v1.5 毕业存档开局）：
//     点 t-time-1（40 点）→ 建时间子矿井 Lv1 —— 第五胜利倒计时开始；
//     点 t-dim-1（40 点）→ 建星门信标 Lv1 —— 贸易量 ×1.2；
//   5~15 分钟：
//     时间子线点到 t-time-5（累计 190 点），矿井产量 ×1.95；
//     建时间加速器 Lv1（t-time-3 解锁）→ 全城 ×1.2；
//     建恒星采集器 Lv1（t-ult-7 已有）→ He3 开始积累；
//   15~25 分钟：
//     维度建筑线点到 t-dim-9（累计 460 点），星门成本腰斩；
//     建星门炮台 Lv1（t-dim-5 解锁）→ 维度裂缝 32 分钟前就位；
//     建时间减速罩 Lv1（t-time-5 解锁）→ 灾难 ×0.8 保命；
//   25~35 分钟（五新灾难首发期）：
//     32 分钟 维度裂缝 → 炮台开火 + 裂缝预警（t-dim-4）；
//     34 分钟 时间悖论 → 悖论护盾 Lv1（t-time-7 解锁）+ 悖论缓冲（t-time-10）；
//     35 分钟前：建悖论护盾，目标 Lv3（时间机器门票）；
//   35~45 分钟：
//     36 分钟 热寂前兆 → 热寂观测（t-omega-2）+ 冷却塔；
//     38 分钟 恒星风暴 → 恒星风护盾 Lv3（dyson_shield）免疫；
//     40 分钟 引擎过热 → 冷却塔 Lv2（过热 -50%）；
//     定胜利路线：时间机器（第五胜利）/ 行星引擎 / 虫洞（第四胜利）三选一；
//   45~60 分钟（决战）：
//     时间线：8 座矿井 Lv3 + t-time-20 → 50 chronon → 时间机器开工 → 第五胜利；
//     引擎线：2 座推进器 Lv3（推力 8）+ t-omega-20 → 行星引擎开工；
//     虫洞线：采集器 Lv3 + 虫洞稳定器 Lv3 → 第四胜利（v1.5 内容）；
//     不要三线并进 —— 16460 科技点 + 89300 钢，资源不够。
//   剧本总成本（时间线）：科技 ~6000 点 + 钢 ~25000 —— v1.5 毕业玩家的 60 分钟体量。

// ==================== 附录 E：胜利条件总览（一 ~ 五） ====================
//   第一胜利 · 发射台（v1.0）：发射台建成 → 「星辰大海」；
//   第二胜利 · 方舟（v1.3）：方舟建成 → 「诺亚方舟」；
//   第三胜利 · 星门（v1.4）：星门建成 → 「星门远征」；
//   第四胜利 · 星门网络（v1.5）：星门网络建成 → 「回家」（连接地球）；
//   第五胜利 · 时间机器（v1.8）：时间机器建成 → 「时间旅行」（本文件新增）。
//   胜利含金量递增：发射台 < 方舟 < 星门 < 星门网络 < 时间机器。
//   每一级胜利都是上一级的「毕业」：v1.8 是给「赢过四次」的玩家准备的。

// ==================== 附录 F：灾难时间轴总表（v1.3 ~ v1.8） ====================
//   v1.3 地面三灾难：12 / 15 / 20 分钟（沙尘暴/陨石/设备事故）；
//   v1.4 轨道三灾难：10 / 14 / 18 分钟（轨道 debris/信号中断/太阳耀斑）；
//   v1.5 新灾难：22 / 24 / 26 / 28 / 30 分钟（地震/海啸/火山灰/叛乱升级/太阳风）；
//   v1.8 新灾难：32 / 34 / 36 / 38 / 40 分钟（维度裂缝/时间悖论/热寂前兆/恒星风暴/引擎过热）。
//   大后期（40 分钟+）：每 2~4 分钟一件事 —— 「终极战争」的节奏。
//   免疫总表：
//     行星护盾（v1.5）→ 全部灾难免疫；
//     维度之门（v1.8）→ 维度裂缝免疫；
//     戴森球（v1.8）→ 恒星风暴免疫；
//     恒星风护盾 Lv3（v1.8）→ 太阳风/恒星风暴免疫；
//     护盾穹顶 Lv3（v1.5）→ 陨石免疫。

// ==================== 附录 G：接入清单（给集成者） ====================
//   1. tech.js：TECH_BRANCHES.time/dim/omega 三分支配色已注册；
//      新增 fx 键（键语义见文件头注释）按既有规则接入 TechTree.mul()，
//      paradoxResist / riftResist / heatDeathResist 为加法键（上限 0.9），
//      由 disaster.js / HazardPack18 读取时加法汇总；
//      buildSpeedMul / rewindEff 为乘法键，由 build.js 读取。
//   2. achievements.js：ACH_V18 已 push 进 ACHIEVEMENT_DEFS（check = checkFn）；
//      成就面板如需展示判定文字，可从 ACH_V18 按 id 取 check 字段；
//      难度/时机见各条目「※ 难度」注释行。
//   3. 灾难：HazardPack18.attach(game) 接入 tick/save/load；
//      resources.js 产量结算处读取 game.hazard18.paradoxMul()（时间悖论 -40%）；
//      build.js 电力聚合读取 game.hazard18.heatdeathPowerMul()（热寂 -50%）；
//      build.js 生产逻辑读取 game.hazard18.paradoxActive()（时间子矿井停工）；
//      disaster.js 结算处读取免疫（行星护盾/维度之门/戴森球/恒星风护盾 Lv3）。
//   4. 奇观：BUILDINGS 已注册 time_machine / dim_gate / dyson_sphere /
//      planet_engine / omega_archive（单级、限建 1 座）；
//      前置检查（needTech / needBuilding / needBuildingLevel / needThrust /
//      needPop）需 build.js 实现，本文件只做数据声明；
//      时间机器的 chronon 造价需 resources.js 先注册 chronon；
//      game.js 主循环调用 city.checkTimeMachineVictory(builder) 或
//      TimeMachineVictory.attach(game)，showVictory 新增 'time_machine'
//      分支（文案见附录 B）。
//   5. 政策：POLICIES_V18 已注册进 POLICY_DEFS，新分类 POLICY_CATS.omega；
//      互斥组 dyson_quota/gate_freeport 已 push 进 EXCLUSIVE_GROUPS；
//      新增 bonus 键（chrononYieldMul / omegaYieldMul / dysonCostMul /
//      techMul / heatDeathResistAdd）按 tech.js fx 语义接入 policy.js。
//   6. 时间子（chronon）：resources.js 注册 RES_DEFS.chronon =
//      { name:'时间子', icon:'⏱️', base:0, cap:200 }，并在 STORAGE 计算中纳入；
//      未注册前，时间机器奇观按「材料不足」处理（build.js 防御）。
//   7. He3 存储上限建议提高（采集器 Lv3 12/60 秒，旧上限可能爆仓）。

// ==================== 附录 H：已知限制与诚实声明 ====================
//   1. 本文件只声明数据：科技 fx 键的实际生效、奇观前置检查、政策效果、
//      灾难调度器的 tick 接入，都需要各系统实现 —— 未实现前，
//      相关成就 checkFn 恒为 false，灾难不会触发（这是设计，不是 bug）。
//   2. 新资源 chronon 需要 resources.js 注册 —— 未注册前，时间子矿井产出
//      静默丢弃，时间机器无法建造（第五胜利 blocked）。这是 v1.8 接入的
//      第一优先级（见附录 G 第 6 条）。
//   3. 时间机器的 chronon 造价（50）是 cost 白名单的例外 —— build.js 的
//      造价检查需防御性处理未知资源键（按「材料不足」而非抛错）。
//   4. 数值（成本/产出/叠加倍率/灾难间隔）均为纸面推演，未经真实游玩验证；
//      附录 C 的总表说明了如何只改常量调难度。
//   5. ContentV18SelfTest() 验证的是「注册表完整性」，不是「好不好玩」——
//      平衡性请以实际游玩为准。
//   6. flavor/tip 中的事件多为 flavor 设定，数值实现侧可选择性落地 ——
//      不要为 flavor 写复杂逻辑。

// ==================== 文件统计 ====================
//   一、科技 +60（TECH_V18：时间/维度/终极各 20，2 列 × 10 层 pre 链，
//      终极项跨列双前置；fx 键语义注释；TECH_DEFS/TECH_ORDER 注册；
//      每项含「※ 推演」数值注释）
//   二、成就 +60（ACH_V18：时间 12 / 维度 12 / 终极 12 / 建筑 8 /
//      灾难 8 / 奇观 8；check 判定文字 + checkFn 防御式判定 +「※ 难度」；
//      ACHIEVEMENT_DEFS 注册）
//   三、新灾难 ×5（DISASTERS_V18 配置表 + class HazardPack18：
//      constructor/update/save/load/attach + paradoxMul/heatdeathPowerMul/
//      paradoxActive/riftActive 查询接口 + 遭遇统计）
//   四、新奇观 ×5（WONDERS_V18 配置表 + BUILDINGS 注册：lore×3 / buildStages×3；
//      时间机器=第五胜利，维度之门=裂缝免疫，戴森球=产电 1000，
//      行星引擎=推力 ×2，欧米茄档案馆=科技 200/周期）
//   五、时间机器胜利补丁（City.prototype.checkTimeMachineVictory +
//      TimeMachineVictory.attach + TIME_MACHINE_VICTORY_TEXT）
//   六、终极政策 ×10（POLICIES_V18：POLICY_DEFS 注册 + POLICY_CATS.omega +
//      EXCLUSIVE_GROUPS 互斥组）
//   附录 A~H：自检 / 第五胜利文案 / 科技数值总表 / 实战剧本 / 胜利总览 /
//      灾难时间轴 / 接入清单 / 已知限制

// ==================== 附录 I：v1.8 成就清单总表（60 项速查） ====================
// 格式：id | 名称 | 判定
// ── ⏳ 时间 12 ──
//   tm-first      | 第一铲·时间   | 时间子矿井 ≥ 1
//   tm-10chronon  | 时间富翁      | 时间子库存 ≥ 10
//   tm-accel      | 快进人生      | 时间加速器 ≥ 1
//   tm-decel      | 慢放灾难      | 时间减速罩 ≥ 1
//   tm-paradox    | 悖论驯服      | 悖论护盾 Lv3 ≥ 1
//   tm-archive    | 未来图书馆    | 历史档案馆 ≥ 1
//   tm-rewind     | 昨天修好      | 回溯反应堆 ≥ 1
//   tm-50chronon  | 时间机器材料  | 时间子库存 ≥ 50
//   tm-buildspeed | 基建狂魔·终极 | B 列 10 项全解锁
//   tm-chronon39  | 时间自由      | A 列 10 项全解锁
//   tm-omega-clock| 欧米茄钟      | t-time-20 已解锁
//   tm-timemaster | 时间之主      | 20 项全解锁
// ── 🌀 维度 12 ──
//   dm-first      | 第一张维度地图 | t-dim-1 已解锁
//   dm-beacon     | 点亮信标      | 星门信标 ≥ 1
//   dm-defense    | 星门门卫      | 星门炮台 ≥ 1
//   dm-medic      | 全宇宙医生    | 星门医疗站 ≥ 1
//   dm-relay      | 星门充电宝    | 星门中继站 ≥ 1
//   dm-hub        | 星门总调度    | 星门枢纽 ≥ 1
//   dm-6gate      | 星门六子      | 6 种星门建筑各 ≥ 1
//   dm-cost12     | 维度基建狂魔  | A 列 10 项全解锁
//   dm-yield37    | 星门奇点      | B 列 10 项全解锁
//   dm-heart      | 维度之心      | t-dim-20 已解锁
//   dm-trade1m    | 维度富豪      | 单周期星门贸易 ≥ 5000
//   dm-dimmaster  | 维度之主      | 20 项全解锁
// ── 🌌 终极 12 ──
//   om-engine     | 行星引擎原理  | t-omega-1 已解锁
//   om-thruster   | 点火！        | 行星推进器 ≥ 1
//   om-cooling    | 行星退烧      | 引擎冷却塔 ≥ 1
//   om-control    | 火星前额叶    | 引擎控制中心 ≥ 1
//   om-fuel       | 小太阳加油站  | 燃料精炼厂 ≥ 1
//   om-bastion    | 行星城墙      | 引擎堡垒 ≥ 1
//   om-capital    | 行星驾驶舱    | 引擎首都 ≥ 1
//   om-thrust6    | 推力达标      | 全城推力 ≥ 6
//   om-yield4     | 欧米茄产量    | A 列 10 项全解锁
//   om-heat75     | 热寂无害      | B 列 9 项全解锁
//   om-protocol   | 欧米茄协议    | t-omega-20 已解锁
//   om-omegamaster| 欧米茄之主    | 20 项全解锁
// ── 🏗️ 建筑 8 ──
//   bx-dyson7     | 戴森七子      | 7 种戴森建筑各 ≥ 1
//   bx-time6      | 时间六子      | 6 种时间建筑各 ≥ 1
//   bx-engine6    | 引擎六子      | 6 种引擎建筑各 ≥ 1
//   bx-25all      | 终极收藏家    | 25 种全 ≥ 1
//   bx-max10      | 终极满级      | 10 种 Lv3
//   bx-power1k    | 电力破千      | 电力盈余 ≥ 1000
//   bx-he3free    | He3 自由      | He3 库存 ≥ 500
//   bx-chrononfree| 时间自由·建筑 | 矿井 ≥ 8 座
// ── 🌪️ 灾难 8 ──
//   hz-rift       | 裂缝初现      | 遭遇维度裂缝 ≥ 1
//   hz-paradox    | 悖论初现      | 遭遇时间悖论 ≥ 1
//   hz-heat       | 热寂初现      | 遭遇热寂前兆 ≥ 1
//   hz-stellar    | 恒星风暴初现  | 遭遇恒星风暴 ≥ 1
//   hz-overheat   | 引擎过热初现  | 遭遇引擎过热 ≥ 1
//   hz-all5       | 五灾临门      | 5 种各 ≥ 1
//   hz-nodamage18 | 终极不动如山  | 新灾难零损坏 ≥ 1
//   hz-immune18   | 灾难毕业      | 三灾难免疫
// ── 🌟 奇观 8 ──
//   qw-time       | 时间机器      | time_machine ≥ 1
//   qw-dim        | 维度之门      | dim_gate ≥ 1
//   qw-dyson      | 戴森球        | dyson_sphere ≥ 1
//   qw-engine     | 行星引擎      | planet_engine ≥ 1
//   qw-omega      | 欧米茄档案馆  | omega_archive ≥ 1
//   qw-all18      | 五位一体      | 五奇观各 ≥ 1
//   qw-timetravel | 时间旅行      | 第五胜利
//   qw-moving     | 开车！        | 火星位移 ≥ 1 公里

// ==================== 附录 J：v1.8 终极政策数值总表 ====================
// 格式：id | 名称 | 颁布费 | bonus | penalty | needs
//   time_tax            | 时间税       | 50 科技 | 时间子 +20%        | 增长 -10%， upkeep 5 科技/分钟 | —
//   dim_open            | 维度开放     | 60 科技 | 贸易 +30%          | 动乱 +15%                     | —
//   dyson_quota         | 戴森配额     | 70 科技 | 电力 +20%          | 建筑成本 +10%                 | —（互斥自由港）
//   engine_first        | 引擎优先     | 80 科技 | 建造 +25%          | 增长 -15%                     | —
//   paradox_control     | 悖论管制     | 90 科技 | 灾难 -15%          | 时间子 -10%                   | time_tax
//   stellar_nationalize | 恒星国有化   | 100 科技| 戴森成本 -15%      | 贸易 -10%                     | dyson_quota
//   archive_open        | 档案公开     | 110 科技| 科技 +15%          | upkeep 3 科技/分钟            | —
//   gate_freeport       | 星门自由港   | 120 科技| 贸易 +40%          | 税收 -20%                     | dim_open（互斥配额）
//   heatdeath_plan      | 热寂预案     | 130 科技| 灾难 -10%          | 电力 -5%                      | —
//   omega_charter       | 欧米茄宪章   | 200 科技| 产量 +20%          | upkeep 2 He3/分钟             | engine_first
//   颁布费总计：50+60+70+80+90+100+110+120+130+200 = 1010 科技点。
//   政策槽：v1.5 基础 5 槽 + 议会/首都加成 —— 终极政策 10 项全颁布需 10+ 槽，
//     逼玩家建议会大厦 + 引擎首都（政策流完全体）。

// ==================== 附录 K：奇观造价对比表（v1.4 / v1.5 / v1.8） ====================
//   v1.4 星门（第三胜利）：钢 ~1500 + 科技 ~300（口径示例）；
//   v1.5 行星护盾：钢 2500 + 科技 200 + 稀土 400 + 铀 100；
//   v1.5 星门网络（第四胜利）：钢 3000 + 科技 300 + 稀土 600 + He3 150；
//   v1.5 泰坦熔炉：钢 2000 + 科技 250 + 稀土 500 + 铀 150；
//   v1.8 时间机器（第五胜利）：钢 3000 + 科技 800 + He3 150 + 时间子 50；
//   v1.8 维度之门：钢 3500 + 科技 900 + He3 200；
//   v1.8 戴森球：钢 5000 + 科技 1200 + He3 300；
//   v1.8 行星引擎：钢 4000 + 科技 1000 + 铀 400；
//   v1.8 欧米茄档案馆：钢 2500 + 科技 1500 + 稀土 800。
//   五奇观总计：钢 18000 + 科技 5400 + He3 650 + 时间子 50 + 铀 400 + 稀土 800。
//   对比 v1.5 三奇观（钢 7500）：v1.8 是 v1.5 的 2.4 倍 —— 「终极」的体量。
//   最贵单项：戴森球（5000 钢）—— 包一颗恒星，就该这么贵。

// ==================== 附录 L：v1.8 终极产业链总图 ====================
//   时间链（第五胜利主线）：
//     t-time-1 → [时间子矿井] ──chronon──→ [时间机器]（50 chronon）→ 第五胜利
//         ↑电力                              ↑前置 [悖论护盾 Lv3]
//     [时间加速器]（×2）→ 全城产量 → 加速 chronon → 正反馈闭环
//     科技线：t-time A 列（×39.2）→ 时间自由
//   维度链（星门网络）：
//     t-dim-1 → [星门信标] ──贸易量──→ [星门枢纽] ──成本×0.65──→ [维度之门]
//         ↑                                    ↑免疫裂缝
//     [星门炮台] ──裂缝特攻──→ [维度裂缝灾难] ──→ 被门「关上」
//     科技线：t-dim A 列（×0.12 成本）→ 维度基建狂魔
//   终极链（行星引擎）：
//     t-omega-1 → [行星推进器] ──推力≥6──→ [行星引擎]（推力 ×2）
//         ↑                                 ↑
//     [冷却塔]（过热-80%）            [控制中心]（效率×1.5）
//     [精炼厂]（He3→电）              [堡垒]（防御+军事）
//     [首都]（政策+幸福）
//     科技线：t-omega A 列（×4.05）→ 欧米茄文明
//   能源暗线（贯穿三链）：
//     [戴森帆]（220 电）→ [采集器]（He3）→ [精炼厂]（+400 电）→ [时间机器]（150 电）
//     He3 是 v1.8 的石油，电力是 v1.8 的血液，时间子是第五胜利的门票。
//   三链交汇点：
//     时间机器（时间链终点）需要 He3（能源暗线）+ 悖论护盾（时间链）；
//     行星引擎（终极链终点）需要 He3（能源暗线）+ 推力（终极链）；
//     维度之门（维度链终点）需要 He3（能源暗线）+ t-dim-20（维度链）。
//     结论：He3 是 v1.8 的「硬通货」，采集器是第一优先级。

// ==================== 附录 M：v1.8 数值平衡白皮书 ====================
// M1. 设计哲学：v1.8 是「终极」版本 —— 数值毕业、灾难毕业、胜利毕业。
//   v1.5 的毕业线是「灾难脱敏」（-75% + 免疫），v1.8 的毕业线是「数值自由」
//   （产量 ×15、电力 ×1.755、时间子 ×78.4）+ 「第五胜利」（时间旅行）。
//   毕业不等于无聊：五新灾难（32~40 分钟）保证毕业后仍有挑战。
// M2. 科技定价逻辑：三系 16460 点 ≈ v1.5 四系（3390）的 4.9 倍。
//   推导：v1.5 毕业玩家科技产出约 270/分钟（3 座卫星群 Lv3），
//     16460 / 270 ≈ 61 分钟 —— 一局游戏的长度，by design。
//   单系 5120~6220 点 ≈ 20 分钟 —— 一条胜利路线的长度，by design。
// M3. 乘法链总览（v1.8 完全体）：
//   产量 = 基础 × 终极科技(6.08) × 加速器(2.0) × 控制中心(1.5) × 熔炉(2.0)
//        ≈ 基础 × 36.5；
//   再 × v1.5 终极科技(2.5) ≈ 基础 × 91 —— 「数值毕业」的数学含义。
//   纸面 warning：×91 是理论上限，实际受电力/人口/灾难 debuff 制约，
//     体感约 ×20~30 —— 仍是 v1.5 的 10 倍，by design。
// M4. 灾难平衡：五新灾难首发 32~40 分钟，间隔 12~20 分钟。
//   推导：v1.5 玩家 30 分钟毕业（第四胜利），v1.8 新灾难在 32 分钟「迎接」
//     毕业玩家 —— 「毕业典礼」之后是「终极战争」，by design。
//   减伤叠满：paradoxResist(0.45) + 建筑 mit(0.5) → 上限 0.9；
//     时长 ×0.4（减速罩）；综合影响 = 0.1 × 0.4 = 4% —— 灾难毕业。
// M5. 胜利路线平衡（三选一）：
//   时间线：科技 6000 点 + 钢 25000 + 50 时间子 → 第五胜利（~50 分钟）；
//   引擎线：科技 7000 点 + 钢 30000 + 推力 6 → 行星引擎（~55 分钟）；
//   虫洞线：科技 4000 点 + 钢 20000 + He3 200 → 第四胜利（~45 分钟，v1.5 内容）。
//   三线成本接近 —— 没有「最优解」，只有「最喜欢的」，by design。
// M6. He3 经济平衡：
//   产出：采集器 Lv3（12/60 秒）× deepSpaceMul(3.0) = 36/60 秒；
//   消耗：时间机器（150）+ 维度之门（200）+ 炮台（150）+ 精炼厂（6/60 秒）；
//   结论：3 座采集器 Lv3 是 v1.8 的「标配」—— He3 自由是毕业的前提。
// M7. 政策平衡：10 项终极政策颁布费 1010 点，维持费最高 2 He3/分钟。
//   推导：政策槽 5（基础）+ 议会（4）+ 首都（5）= 14 槽 —— 10 项全颁布
//     需要政策流完全体，by design（逼玩家走政策线）。
// M8. 成就平衡：60 项中新灾难 8 项是「活着就行」（★），
//   终极 12 项是「毕业」（★★★★★）—— 难度梯度覆盖所有玩家。
// M9. 已知不平衡（诚实声明）：
//   - 时间子 ×78.4 可能过强 —— 50 chronon 的时间机器造价可能 1 分钟攒够，
//     届时请上调至 200（只改 WONDERS_V18.cost.chronon）；
//   - 产量 ×91 可能导致后期数字溢出 —— resources.js 的 cap 需同步提高；
//   - 五新灾难的间隔（12~20 分钟）可能过密 —— 可放宽至 15~25 分钟
//    （只改 DISASTERS_V18.intervalMin/Max）。
// M10. 调难度指南：所有数值都是常量 —— 改 TECH_V18.fx / DISASTERS_V18 /
//   WONDERS_V18.cost 即可，不用碰逻辑代码。

// ==================== 附录 N：三线胜利完整剧本 ====================
// ── 时间线（第五胜利，推荐 50 分钟）──
//   0~10 分钟：t-time-1 → 2 座矿井 Lv1 → 时间子开始积累；
//     建加速器 Lv1（×1.2）→ 全城增产；
//   10~20 分钟：时间子线点到 t-time-9（×3.68），矿井升 Lv2；
//     建悖论护盾 Lv1 → 32 分钟裂缝/34 分钟悖论前就位；
//   20~30 分钟：8 座矿井并行（1.2×8=9.6/60 秒）；
//     建减速罩 Lv1（×0.8）→ 五新灾难保命；
//   30~40 分钟：扛过五新灾难首发；护盾升 Lv3（门票）；
//     时间子线点到 t-time-15（×12.8）；
//   40~50 分钟：t-time-20（双线毕业）→ 8 座矿井 Lv3（×78.4）；
//     50 chronon → 47 秒 → 时间机器开工 → 第五胜利！
//   总成本：科技 ~6000 点 + 钢 ~25000 + He3 150。
// ── 引擎线（行星引擎，推荐 55 分钟）──
//   0~10 分钟：t-omega-1 → 推进器 Lv1 → 推力 1；
//     建冷却塔 Lv1（点火前必须）；
//   10~25 分钟：t-omega-9（×2.01），推进器 2 座 Lv2（推力 4）；
//     建控制中心 Lv1（×1.15）→ 全城增产；
//   25~40 分钟：扛过五新灾难；推进器 2 座 Lv3（推力 8 ≥ 6）；
//     建堡垒 Lv1 → 军事+防御；
//   40~55 分钟：t-omega-20（双线毕业）→ 行星引擎开工 → 推力 ×2；
//     火星位移 1 公里 → 成就「开车！」；
//   总成本：科技 ~7000 点 + 钢 ~30000 + 铀 400。
// ── 虫洞线（第四胜利，v1.5 内容，推荐 45 分钟）──
//   0~10 分钟：t-ult-10（v1.5 已有）→ 虫洞稳定器 Lv1；
//   10~25 分钟：采集器 3 座 Lv3（He3 自由）；
//     建星门枢纽 Lv2（×0.8）→ 星门网络铺开；
//   25~40 分钟：扛过五新灾难；稳定器升 Lv3（120 He3）；
//   40~45 分钟：星门网络建成 → 第四胜利「回家」；
//   总成本：科技 ~4000 点 + 钢 ~20000 + He3 200。
// ── 三线对比 ──
//   时间线：最难（双线毕业 + 50 时间子），但胜利含金量最高（第五胜利）；
//   引擎线：最贵（30000 钢），但最爽（开着火星走）；
//   虫洞线：最快（45 分钟），但那是 v1.5 的胜利 —— v1.8 建议走时间线。
