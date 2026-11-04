/* 星港 — content_v17.js：v1.7 内容（量子/生物/时间/终极科技+60 / 成就+60 / 新灾难×8 / 新奇观×5 / 新政策×20）
 *
 * 版本日志：
 *   v1.7.0  初始版本：科技×60（量子/生物/时间/终极四系，TECH_V17）/
 *           成就×60（ACH_V17，8 大类）/ 新灾难×8（DISASTERS_V17 +
 *           class HazardPack17）/ 新奇观×5（WONDERS_V17，
 *           时间机器=第五胜利）/ 新政策×20（POLICY_V17，量子/生物/时间三系）。
 * 维护约定（与 v1.5 一致）：
 *   - 本文件只做加法：不修改任何已有文件的源码，只扩展全局注册表、打防御性补丁；
 *   - 所有 game 对象读取均为防御式（判存在再读），量子/生物/时间等
 *     建筑线可能尚未接入——对应成就与灾难在这些系统上线后自动生效；
 *   - 新增建筑 cost 的 key 只能用现有资源：
 *     iron / ice / rare / water / food / steel / tech / uranium / he3；
 *   - 新增科技 fx 键见「一、科技 +60」处的键语义注释，TechTree.mul() 自动乘法叠加，
 *     加法型键（quantumShieldAdd / retroShieldAdd / disasterWarnAdd 等）
 *     由对应系统读取时自行加法汇总（上限见各键注释）；
 *   - 自检：控制台运行 ContentV17SelfTest()。
 */

/* ═══════════════════════════════════════════════════════════════════════
 * 星港 v1.7 内容包（纯加法，不改任何已有文件）
 * 加载顺序：build.js、tech.js、achievements.js、disaster.js、policy.js、
 *   content_v15.js（可选）之后，直接扩展全局注册表：
 *   Object.assign(TECH_DEFS / BUILDINGS / POLICY_DEFS)，
 *   ACHIEVEMENT_DEFS.push，新增 TECH_BRANCHES.quantum/bio/time/omega，
 *   POLICY_CATS 新增 quantum/bio/time，
 *   定义 class HazardPack17（新灾难调度器）与 TimeMachineVictory（第五胜利）。
 *
 * 五大块：
 *   一、科技 +60 —— TECH_V17 数组：量子系×15 / 生物系×15 / 时间系×15 /
 *      终极系×15，每系 3 列 × 5 层 pre 链，终极项带跨列双前置；
 *   二、成就 +60 —— ACH_V17 数组：量子 8 / 生物 8 / 时间 8 / 终极 6 /
 *      灾难 8 / 奇观 8 / 政策 6 / 传奇 8，check 字段为判定描述文字，
 *      checkFn 为防御式判定函数（接入 ACHIEVEMENT_DEFS 时使用）；
 *   三、新灾难 ×8 —— DISASTERS_V17 配置表：量子风暴 / 基因瘟疫 /
 *      时间乱流 / 暗物质泄漏 / 反物质失控 / 纳米虫群 / 引力异常 / 文明回声，
 *      每种含 warnMs / durationMs / effect / counter；
 *   四、新奇观 ×5 —— WONDERS_V17 配置表：戴森球（终极能源）/
 *      时间机器（第五胜利：回到过去）/ 盖亚引擎（火星变地球）/
 *      奇点核心（科技点无限）/ 永恒图书馆（政策槽+2），
 *      同时注册进 BUILDINGS（单级、限建 1 座）；
 *   五、新政策 ×20 —— POLICY_V17 配置表：量子系×7 / 生物系×7 / 时间系×6，
 *      字段沿用 policy.js 风格（cost / bonus / penalty / needs / flavor）。
 *
 * 防御性约定（game 对象接口一律判存在）：
 *   game.builder.buildings / game.pop.count / game.tech.has(id) 用前判存在；
 *   量子/生物/时间建筑 id 约定前缀：'q-' / 's-' / 'tm-'（P17U.qCount 等回退逻辑依赖）；
 *   game.stats.haz17_seen_<灾难id> 由 HazardPack17 触发时写入，成就读取。
 *
 * 自定义效果字段「★ 读取约定」：所有新字段（quantumYieldMul / bioYieldMul /
 * timeYieldMul / dysonMul / singularityMul / gaiaMul / quantumShieldAdd /
 * retroShieldAdd / disasterWarnAdd / winsGame='time_machine' 等）都在对应
 * 条目注释里写清读取方式，供 tech.js / disaster.js / resources.js /
 * build.js / city.js 防御性读取。
 * ═══════════════════════════════════════════════════════════════════════ */

// ==================== v1.7 小工具（防御性取值） ====================
const P17U = {
  // 科技是否已解锁（防御）
  hasTech: (g, id) => {
    try { return !!(g && g.tech && typeof g.tech.has === 'function' && g.tech.has(id)); }
    catch (e) { return false; }
  },
  // 已解锁科技总数（防御：用于「科技 250 项」类成就）
  techTotal: (g) => {
    try {
      if (g && g.tech && typeof g.tech.count === 'function') return g.tech.count();
      if (g && g.tech && g.tech.unlocked && typeof g.tech.unlocked.size === 'number') return g.tech.unlocked.size;
      if (g && g.stats && typeof g.stats.techUnlocked === 'number') return g.stats.techUnlocked;
    } catch (e) {}
    return 0;
  },
  // 通用建筑计数：优先 builder.count，否则扫 buildings 数组（防御）
  count: (g, id) => {
    try { return (g && g.builder && typeof g.builder.count === 'function') ? g.builder.count(id) : 0; }
    catch (e) { return 0; }
  },
  // 按前缀统计建筑数（量子 'q-' / 生物 's-' / 时间 'tm-'）
  countPrefix: (g, prefix) => {
    try {
      if (g && g.builder && Array.isArray(g.builder.buildings))
        return g.builder.buildings.filter((b) => b && typeof b.id === 'string' && b.id.indexOf(prefix) === 0).length;
    } catch (e) {}
    return 0;
  },
  // 量子建筑计数（防御；回退 stats.quantumBuildings）
  qCount: (g, id) => {
    if (id) return P17U.count(g, id);
    const n = P17U.countPrefix(g, 'q-');
    if (n > 0) return n;
    try { return (g && g.stats && g.stats.quantumBuildings) || 0; } catch (e) { return 0; }
  },
  // 生物建筑计数（防御；回退 stats.bioBuildings）
  sCount: (g, id) => {
    if (id) return P17U.count(g, id);
    const n = P17U.countPrefix(g, 's-');
    if (n > 0) return n;
    try { return (g && g.stats && g.stats.bioBuildings) || 0; } catch (e) { return 0; }
  },
  // 时间建筑计数（防御；回退 stats.timeBuildings）
  tCount: (g, id) => {
    if (id) return P17U.count(g, id);
    const n = P17U.countPrefix(g, 'tm-');
    if (n > 0) return n;
    try { return (g && g.stats && g.stats.timeBuildings) || 0; } catch (e) { return 0; }
  },
  // 人口（防御）
  pop: (g) => {
    try { return (g && g.pop && typeof g.pop.count === 'number') ? g.pop.count : 0; }
    catch (e) { return 0; }
  },
  // stats 快捷读取（防御）
  st: (g) => { try { return (g && g.stats) || {}; } catch (e) { return {}; } },
  // 已解锁成就数（防御）
  achCount: (g) => {
    try {
      if (g && g.achievements && typeof g.achievements.unlockedCount === 'function') return g.achievements.unlockedCount();
      if (g && g.achievements && Array.isArray(g.achievements.unlocked)) return g.achievements.unlocked.length;
      return P17U.st(g).achievementsUnlocked || 0;
    } catch (e) { return 0; }
  },
  // 已颁布政策数（防御）
  policyCount: (g) => {
    try {
      if (g && g.policy && g.policy.active && typeof g.policy.active.size === 'number') return g.policy.active.size;
      if (g && g.policy && typeof g.policy.activeList === 'function') return g.policy.activeList().length;
      return P17U.st(g).policiesActive || 0;
    } catch (e) { return 0; }
  },
  // 是否颁布过某政策（防御）
  hasPolicy: (g, id) => {
    try {
      if (g && g.policy && g.policy.active && typeof g.policy.active.has === 'function') return g.policy.active.has(id);
      const s = P17U.st(g);
      return !!(s.policiesEnacted && s.policiesEnacted[id]);
    } catch (e) { return false; }
  },
  // v17 灾难是否被经历过（HazardPack17 触发时写 stats.haz17_seen_<id>=1）
  seenHazard: (g, id) => {
    try { return (P17U.st(g)['haz17_seen_' + id] || 0) >= 1; }
    catch (e) { return false; }
  },
};

// ==================== 一、科技 +60（总数 250） ====================
// 设计总纲：v1.7 的科技线是「毕业之后的毕业」——
//   量子系（⚛️）：算力与护盾，是科研党的终极答案，也是灾难减伤的新来源；
//   生物系（🧬）：人口与改造，是把火星变成「家」的答案；
//   时间系（⏳）：建造与预警，是把「等待」变成资源的答案；
//   终极系（🕳️）：戴森/盖亚/奇点三线收束，是第五胜利的门票。
// 定价逻辑：单系点满约 1740 科技点（3 列：570/570/600），四系全满约 6960 点 ≈
//   v1.5 四系（3310 点）的两倍——v1.7 是给「已经拿下第四胜利」的玩家准备的。
// 数组字段：{id, name, icon, desc, cost（科技点）, pre（前置 id 数组）, effect（效果描述文字）}，
//   另附 fx（机器可读倍率）/ branch / hint / flavor（科技卡金句）供 tech.js 接入；
//   注册时 needs = pre，原样转入 TECH_DEFS。
// 新增分支（TECH_BRANCHES 未定义时跳过，不报错）
if (typeof TECH_BRANCHES !== 'undefined') {
  TECH_BRANCHES.quantum = { name: '量子', icon: '⚛️', color: '#22d3ee' };
  TECH_BRANCHES.bio     = { name: '生物', icon: '🧬', color: '#4ade80' };
  TECH_BRANCHES.time    = { name: '时间', icon: '⏳', color: '#c084fc' };
  TECH_BRANCHES.omega   = { name: '终极', icon: '🕳️', color: '#fb7185' };
}

// v1.7 新增 fx 键语义（TechTree.mul() 自动乘法叠加；Add 键由对应系统加法汇总）：
//   quantumYieldMul  量子建筑产量倍率（>1 = 更多；量子风暴打 'q-' 建筑，减产时此键是回血手段）
//   quantumCostMul   量子建筑建造成本倍率（<1 = 更便宜）
//   researchMul      科技点产出倍率（>1 = 更多；与奇点核心 singularityMul 乘法叠加）
//   powerMul         全城电力倍率（>1 = 更多；v1.5 已有，此处继续叠加）
//   quantumShieldAdd 量子护盾：灾难伤害减免（0~1，加法汇总，上限 0.5；disaster.js 读取）
//   disasterMul      灾难伤害倍率（<1 = 更低；v1.5 已有，继续叠加）
//   techCostMul      科技点消耗倍率（<1 = 更便宜；v1.5 已有）
//   bioYieldMul      生物建筑产量倍率（>1 = 更多）
//   bioCostMul       生物建筑建造成本倍率（<1 = 更便宜）
//   popGrowthMul     人口增长倍率（>1 = 更快；v1.5 已有）
//   moraleMul        士气倍率（>1 = 更高；policy.js 同键，乘法叠加）
//   terraSpeedMul    生态改造速度倍率（>1 = 更快；盖亚引擎 gaiaMul 与之乘法叠加）
//   foodMul          食物产量倍率（>1 = 更多）
//   buildSpeedMul    建造速度倍率（>1 = 更快；build.js 读取）
//   disasterWarnAdd  灾难预警提前秒数（加法；disaster.js / HazardPack17 读取）
//   timeYieldMul     时间建筑产量倍率（>1 = 更多）
//   retroShieldAdd   时间护盾：灾难持续时间减免（0~1，加法汇总，上限 0.5；disaster.js 读取）
//   unrestMul        动乱概率倍率（<1 = 更低；v1.5 已有）
//   dysonMul         戴森加成：电力与全局产量双加成（>1；resources.js 读取，与 powerMul 乘法叠加）
//   singularityMul   奇点加成：科技点产出倍率（>1；tech.js 读取，与 researchMul 乘法叠加）
//   gaiaMul          盖亚加成：宜居度/改造双加成（>1；terraform 系统读取）
//   globalYieldMul   全局产量倍率（>1 = 更多；v1.5 已有，泰坦熔炉同键）
// 布局：每系 3 列 × 5 层 pre 链（A 列 x-1/4/7/10/13，B 列 x-2/5/8/11/14，
//   C 列 x-3/6/9/12/15），终极项（x-15）为跨列双前置（逼双线毕业）。
const TECH_V17 = [
  // ═══════════ ⚛️ 量子系 ×15 ═══════════
  // A 列 量子算力线（t-quantum-1/4/7/10/13）：researchMul 五层叠加
  //   1.15 × 1.25 × 1.4 × 1.6 ≈ 3.22，科技点产出翻三倍——
  //   「算力」是 v1.7 经济体系的发动机；
  // B 列 量子护盾线（t-quantum-2/5/8/11/14）：quantumShieldAdd 四层叠加
  //   0.15 + 0.15 + 0.2 = 0.5（叠满上 限），灾难伤害直接减半——
  //   v1.7 灾难的官方解法之一；
  // C 列 量子能源线（t-quantum-3/6/9/12/15）：quantumYieldMul + powerMul 双叠加，
  //   终极项 t-quantum-15 解锁奇观「奇点核心」。
  // 逐项注记（数值推演 / 点法建议）：
  //   t-quantum-1 量子比特：researchMul 1.15，全系乘区第一块砖。30 点≈开局 3~5 分钟收入，越早点收益期越长。
  //   t-quantum-4 量子纠错：techCostMul 0.9，与 t-quantum-13 的 0.8 乘得 0.72。科研越贵越要先点。
  //   t-quantum-7 量子云：researchMul 1.25，叠后 1.44。中期拐点：点完后 v1.7 科技可「闭眼点」。
  //   t-quantum-10 量子霸权：researchMul 1.4，叠后≈2.0。算力线倒数第二层，霸权之后只剩终极。
  //   t-quantum-13 量子奇点：researchMul 1.6 + techCostMul 0.8。算力线毕业：产出×3.22、消耗×0.72。
  //   t-quantum-2 纠缠通讯：disasterWarnAdd 10 秒。预警=生命，10 秒够调一支工程队。
  //   t-quantum-5 量子密钥：unrestMul 0.9。维稳线：叛乱升级灾难来之前必点。
  //   t-quantum-8 量子护盾：quantumShieldAdd 0.15（加法上限 0.5）。v1.7 灾难的官方解法之一。
  //   t-quantum-11 量子隐形：quantumShieldAdd 0.15，叠后 0.3。让灾难「打空」。
  //   t-quantum-14 量子长城：quantumShieldAdd 0.2，叠满 0.5 上限。护盾线毕业，全游戏最高常驻减伤。
  //   t-quantum-3 隧穿采矿：quantumYieldMul 1.2。量子建筑第一铲，先有产量再谈其他。
  //   t-quantum-6 量子电池：powerMul 1.3。电力是奇观的门票，戴森球之前先把电备足。
  //   t-quantum-9 量子传送带：quantumCostMul 0.85。量子建筑铺开前点，省下的稀土够再盖一座城。
  //   t-quantum-12 量子聚变：powerMul 1.5，叠后×1.95。室温聚变，能源焦虑彻底终结。
  //   t-quantum-15 量子创世：双前置（t-quantum-13 + t-quantum-14）。quantumYieldMul 1.5 + powerMul 1.5，解锁奇点核心。
  // —— A 列：量子算力线 ——
  { id: 't-quantum-1', name: '量子比特', icon: '⚛️', cost: 30, pre: [],
    desc: '把 0 和 1 叠在一起：一个比特，两种状态，无限可能。量子时代的第一块砖。',
    effect: '科技点产出 +15%',
    fx: { researchMul: 1.15 }, branch: 'quantum',
    flavor: '「0 和 1 同时成立的地方，就是未来开始的地方。」',
    hint: '💡 量子系起点：科研党的第一个加速器，越早点越赚。' },
  { id: 't-quantum-4', name: '量子纠错', icon: '🧮', cost: 60, pre: ['t-quantum-1'],
    desc: '量子比特太娇气，一碰就「退相干」。纠错码让它们老实干活，科研成本直接打九折。',
    effect: '科技点消耗 -10%（叠加）',
    fx: { techCostMul: 0.9 }, branch: 'quantum',
    flavor: '「娇气的比特，也要学会守规矩。」',
    hint: '💡 科研越贵越要先点：省下的科技点比花掉的多。' },
  { id: 't-quantum-7', name: '量子云', icon: '☁️', cost: 100, pre: ['t-quantum-4'],
    desc: '全城的量子计算机连成一片云：算力像自来水，拧开就有。科研再加速。',
    effect: '科技点产出再 +25%（叠加）',
    fx: { researchMul: 1.25 }, branch: 'quantum',
    flavor: '「算力像自来水，拧开就有。」',
    hint: '💡 量子云是中期科研曲线的拐点，点完之后科技随便点。' },
  { id: 't-quantum-10', name: '量子霸权', icon: '👑', cost: 150, pre: ['t-quantum-7'],
    desc: '我们的量子计算机，解一道题只要 200 秒——地球上最强的超算要算一万年。这就是霸权。',
    effect: '科技点产出再 +40%（叠加）',
    fx: { researchMul: 1.4 }, branch: 'quantum',
    flavor: '「200 秒，胜过一万年。」',
    hint: '💡 霸权之后，v1.7 的科技树基本可以「闭眼点」。' },
  { id: 't-quantum-13', name: '量子奇点', icon: '🌟', cost: 230, pre: ['t-quantum-10'],
    desc: '算力曲线的终点：机器开始自己设计实验、自己发论文。人类科学家，第一次成了「助手」。',
    effect: '科技点产出再 +60%（叠加），科技点消耗再 -20%（叠加）',
    fx: { researchMul: 1.6, techCostMul: 0.8 }, branch: 'quantum',
    flavor: '「机器开始自己发论文，人类成了助手。」',
    hint: '💡 算力线毕业：产出×3.2、消耗×0.72，科研彻底自由。' },
  // —— B 列：量子护盾线 ——
  { id: 't-quantum-2', name: '纠缠通讯', icon: '📡', cost: 30, pre: [],
    desc: '一对纠缠粒子，天各一方却心意相通。预警信号，第一次比灾难跑得快。',
    effect: '所有灾难预警提前 10 秒',
    fx: { disasterWarnAdd: 10 }, branch: 'quantum',
    flavor: '「预警信号，第一次比灾难跑得快。」',
    hint: '💡 预警就是生命：10 秒够把一支工程队调到关键建筑。' },
  { id: 't-quantum-5', name: '量子密钥', icon: '🔑', cost: 60, pre: ['t-quantum-2'],
    desc: '无法窃听的通讯：阴谋在量子密钥面前无所遁形。动乱的苗头，掐死在摇篮里。',
    effect: '动乱概率 -10%（叠加）',
    fx: { unrestMul: 0.9 }, branch: 'quantum',
    flavor: '「阴谋在量子密钥面前，无所遁形。」',
    hint: '💡 人心也是战场：叛乱升级灾难来之前，先把这层点了。' },
  { id: 't-quantum-8', name: '量子护盾', icon: '🛡️', cost: 100, pre: ['t-quantum-5'],
    desc: '用纠缠态偏转冲击波：护盾升起时，灾难像撞上了一堵「不存在的墙」。',
    effect: '灾难伤害 -15%（加法汇总，上限 50%）',
    fx: { quantumShieldAdd: 0.15 }, branch: 'quantum',
    flavor: '「灾难撞上了一堵『不存在的墙』。」',
    hint: '💡 v1.7 灾难的官方解法：护盾线是保命线。' },
  { id: 't-quantum-11', name: '量子隐形', icon: '👻', cost: 150, pre: ['t-quantum-8'],
    desc: '整座城市在量子层面「隐身」三秒：陨石砸过来，发现目标不见了。',
    effect: '灾难伤害再 -15%（加法汇总）',
    fx: { quantumShieldAdd: 0.15 }, branch: 'quantum',
    flavor: '「最强的防御，是让敌人找不到你。」',
    hint: '💡 隐形不是躲，是让灾难「打空」。叠满 50% 后质变。' },
  { id: 't-quantum-14', name: '量子长城', icon: '🧱', cost: 230, pre: ['t-quantum-11'],
    desc: '护盾连成环，环抱整颗火星。这是长城，只是砌它的砖，是纠缠的光。',
    effect: '灾难伤害再 -20%（加法汇总，叠满 50% 上限）',
    fx: { quantumShieldAdd: 0.2 }, branch: 'quantum',
    flavor: '「砌墙的砖，是纠缠的光。」',
    hint: '💡 护盾线毕业：50% 减伤是 v1.7 最高的常驻减伤。' },
  // —— C 列：量子能源线 ——
  { id: 't-quantum-3', name: '隧穿采矿', icon: '⛏️', cost: 30, pre: [],
    desc: '粒子可以「穿墙」，为什么矿机不行？量子隧穿钻头，无视岩层，直取矿脉。',
    effect: '量子建筑产量 +20%',
    fx: { quantumYieldMul: 1.2 }, branch: 'quantum',
    flavor: '「粒子能穿墙，矿机为什么不能？」',
    hint: '💡 量子建筑的第一铲：先有产量，才有后面的故事。' },
  { id: 't-quantum-6', name: '量子电池', icon: '🔋', cost: 60, pre: ['t-quantum-3'],
    desc: '一块电池，存下一座城市的夜。量子电池让电网第一次有了「存款」。',
    effect: '全城电力 +30%',
    fx: { powerMul: 1.3 }, branch: 'quantum',
    flavor: '「一块电池，存下一座城市的夜。」',
    hint: '💡 电力是奇观的门票：戴森球之前，先把电备足。' },
  { id: 't-quantum-9', name: '量子传送带', icon: '🌀', cost: 100, pre: ['t-quantum-6'],
    desc: '建材在量子通道里「瞬移」：盖楼不再需要卡车，只需要坐标。',
    effect: '量子建筑建造成本 -15%（叠加）',
    fx: { quantumCostMul: 0.85 }, branch: 'quantum',
    flavor: '「盖楼不再需要卡车，只需要坐标。」',
    hint: '💡 量子建筑铺开前点：省下的稀土够再盖一座城。' },
  { id: 't-quantum-12', name: '量子聚变', icon: '☀️', cost: 150, pre: ['t-quantum-9'],
    desc: '在量子层面「说服」原子核聚变：点火温度从一亿度，降到了室温。',
    effect: '全城电力再 +50%（叠加）',
    fx: { powerMul: 1.5 }, branch: 'quantum',
    flavor: '「点火温度从一亿度，降到了室温。」',
    hint: '💡 室温聚变：电力×1.95，能源焦虑彻底终结。' },
  { id: 't-quantum-15', name: '量子创世', icon: '✨', cost: 260, pre: ['t-quantum-13', 't-quantum-14'],
    desc: '当算力、护盾、能源三线贯通，有人问：我们能不能「算」出一个宇宙？双线毕业，量子系终点。',
    effect: '量子建筑产量再 +50%（叠加），全城电力再 +50%（叠加），解锁奇观「奇点核心」建造',
    fx: { quantumYieldMul: 1.5, powerMul: 1.5 }, branch: 'quantum',
    flavor: '「我们能不能『算』出一个宇宙？」',
    hint: '💡 量子系终点：解锁奇点核心！需要算力线与护盾线双毕业。' },

  // ═══════════ 🧬 生物系 ×15 ═══════════
  // A 列 基因医疗线（t-bio-1/4/7/10/13）：popGrowthMul 五层叠加
  //   1.2 × 1.3 × 1.5 ≈ 2.34，人口增长翻倍还多——
  //   「人」是 v1.7 一切玩法的燃料；
  // B 列 生物制造线（t-bio-2/5/8/11/14）：bioYieldMul + bioCostMul 双叠加，
  //   活体建筑让城市「长」出来，而不是「盖」出来；
  // C 列 生态改造线（t-bio-3/6/9/12/15）：terraSpeedMul 五层叠加
  //   1.3 × 1.4 × 1.5 × 2.0 = 5.46，改造速度翻五倍——
  //   终极项 t-bio-15 解锁奇观「盖亚引擎」。
  // 逐项注记（数值推演 / 点法建议）：
  //   t-bio-1 基因测序：popGrowthMul 1.2。人口是产能之母，先让人多起来。
  //   t-bio-4 基因疗法：moraleMul 1.1。士气是动乱的反义词，医疗=维稳。
  //   t-bio-7 端粒修复：popGrowthMul 1.3，叠后 1.56。寿命延长=劳动力延长，人口曲线第二个拐点。
  //   t-bio-10 器官打印：moraleMul 1.15，叠后 1.265。医疗自由后，市民开始关心「活得好不好」。
  //   t-bio-13 永生血清：popGrowthMul 1.5 + moraleMul 1.2。医疗线毕业：人口增长×2.34。
  //   t-bio-2 合成生物学：bioYieldMul 1.2。培养皿比流水线便宜，生物制造的起点。
  //   t-bio-5 生物反应器：bioCostMul 0.9。生物建筑铺开前点：便宜的建筑才配叫「铺开」。
  //   t-bio-8 活体建筑：bioYieldMul 1.3 + bioCostMul 0.9。房子「种」出来，城市开始「生长」。
  //   t-bio-11 基因农场：foodMul 1.5。人口爆炸前先填满粮仓：食物是人口的硬上限。
  //   t-bio-14 生物工厂：bioYieldMul 1.5 + bioCostMul 0.8。制造线毕业：产量×2.34、成本×0.65。
  //   t-bio-3 苔藓播种：terraSpeedMul 1.3。改造火星的第一步，从一株苔藓开始。
  //   t-bio-6 大气菌群：terraSpeedMul 1.4，叠后 1.82。看不见的劳工：三班倒，不拿工资。
  //   t-bio-9 液态水工程：terraSpeedMul 1.5，叠后 2.73。有水才有家，宜居度的硬门槛。
  //   t-bio-12 磁场重启：disasterMul 0.8。行星的「防晒霜」：辐射类灾难直接哑火。
  //   t-bio-15 盖亚协议：双前置（t-bio-13 + t-bio-14）。terraSpeedMul 2.0 + disasterMul 0.8，解锁盖亚引擎，改造×5.46。
  // —— A 列：基因医疗线 ——
  { id: 't-bio-1', name: '基因测序', icon: '🧬', cost: 30, pre: [],
    desc: '每个新生儿的第一份礼物：完整的基因图谱。疾病在出生前，就已经被宣判。',
    effect: '人口增长 +20%',
    fx: { popGrowthMul: 1.2 }, branch: 'bio',
    flavor: '「疾病在出生前，就已经被宣判。」',
    hint: '💡 生物系起点：人口是产能之母，先让人多起来。' },
  { id: 't-bio-4', name: '基因疗法', icon: '💉', cost: 60, pre: ['t-bio-1'],
    desc: '癌症、衰老、辐射病——在基因剪刀面前，都是「拼写错误」，改过来就行。',
    effect: '士气 +10%（叠加）',
    fx: { moraleMul: 1.1 }, branch: 'bio',
    flavor: '「拼写错误，改过来就行。」',
    hint: '💡 健康的人才有笑容：士气是动乱的反义词。' },
  { id: 't-bio-7', name: '端粒修复', icon: '🧵', cost: 100, pre: ['t-bio-4'],
    desc: '端粒是生命的「引线」，烧完了人就老了。现在，我们学会了给引线「续费」。',
    effect: '人口增长再 +30%（叠加）',
    fx: { popGrowthMul: 1.3 }, branch: 'bio',
    flavor: '「给生命的引线『续费』。」',
    hint: '💡 寿命延长=劳动力延长：人口曲线的第二个拐点。' },
  { id: 't-bio-10', name: '器官打印', icon: '🖨️', cost: 150, pre: ['t-bio-7'],
    desc: '缺个肾？打印一个。打印出来的，比原装的还好用——毕竟是「定制款」。',
    effect: '士气再 +15%（叠加）',
    fx: { moraleMul: 1.15 }, branch: 'bio',
    flavor: '「打印出来的，比原装的还好用。」',
    hint: '💡 医疗自由之后，市民开始关心「活得好不好」了。' },
  { id: 't-bio-13', name: '永生血清', icon: '🧪', cost: 230, pre: ['t-bio-10'],
    desc: '一针下去，衰老停止了。伦理委员会吵了三年，最后只通过了一条：自愿。',
    effect: '人口增长再 +50%（叠加），士气再 +20%（叠加）',
    fx: { popGrowthMul: 1.5, moraleMul: 1.2 }, branch: 'bio',
    flavor: '「衰老停止了，伦理委员会吵了三年。」',
    hint: '💡 医疗线毕业：人口增长×2.34，星港进入「人丁兴旺」时代。' },
  // —— B 列：生物制造线 ——
  { id: 't-bio-2', name: '合成生物学', icon: '🦠', cost: 30, pre: [],
    desc: '把 DNA 当代码写：想要什么蛋白，就「编译」什么蛋白。工厂，开始用培养皿了。',
    effect: '生物建筑产量 +20%',
    fx: { bioYieldMul: 1.2 }, branch: 'bio',
    flavor: '「把 DNA 当代码写。」',
    hint: '💡 生物制造的起点：培养皿比流水线便宜多了。' },
  { id: 't-bio-5', name: '生物反应器', icon: '⚗️', cost: 60, pre: ['t-bio-2'],
    desc: '巨大的培养罐里，细胞 24 小时不睡觉地干活——它们没有「摸鱼」的概念。',
    effect: '生物建筑建造成本 -10%（叠加）',
    fx: { bioCostMul: 0.9 }, branch: 'bio',
    flavor: '「细胞不睡觉，也没有『摸鱼』的概念。」',
    hint: '💡 生物建筑铺开前点：便宜的建筑才配叫「铺开」。' },
  { id: 't-bio-8', name: '活体建筑', icon: '🏠', cost: 100, pre: ['t-bio-5'],
    desc: '房子是「种」出来的：播下种子，浇水，一栋楼自己长好了，还会自己修补裂缝。',
    effect: '生物建筑产量再 +30%（叠加），建造成本再 -10%（叠加）',
    fx: { bioYieldMul: 1.3, bioCostMul: 0.9 }, branch: 'bio',
    flavor: '「房子是『种』出来的。」',
    hint: '💡 城市开始「生长」了：活体建筑是生物系最浪漫的科技。' },
  { id: 't-bio-11', name: '基因农场', icon: '🌾', cost: 150, pre: ['t-bio-8'],
    desc: '小麦一夜成熟，苹果有拳头大。农场主说：我种的不是地，是基因。',
    effect: '食物产量 +50%',
    fx: { foodMul: 1.5 }, branch: 'bio',
    flavor: '「我种的不是地，是基因。」',
    hint: '💡 人口爆炸前，先把粮仓填满：食物是人口的硬上限。' },
  { id: 't-bio-14', name: '生物工厂', icon: '🏭', cost: 230, pre: ['t-bio-11'],
    desc: '整座工厂是一个巨大的生物体：进料口吃矿石，出料口吐零件，还会自己打扫卫生。',
    effect: '生物建筑产量再 +50%（叠加），建造成本再 -20%（叠加）',
    fx: { bioYieldMul: 1.5, bioCostMul: 0.8 }, branch: 'bio',
    flavor: '「工厂是一个巨大的生物体。」',
    hint: '💡 制造线毕业：生物建筑产量×2.34、成本×0.65，全面替代传统工厂。' },
  // —— C 列：生态改造线 ——
  { id: 't-bio-3', name: '苔藓播种', icon: '🌱', cost: 30, pre: [],
    desc: '第一批火星苔藓：它们在零下 60 度里活了下来，还顺手吐了口氧气。',
    effect: '生态改造速度 +30%',
    fx: { terraSpeedMul: 1.3 }, branch: 'bio',
    flavor: '「零下 60 度里，它还顺手吐了口氧气。」',
    hint: '💡 改造火星的第一步：从一株苔藓开始。' },
  { id: 't-bio-6', name: '大气菌群', icon: '💨', cost: 60, pre: ['t-bio-3'],
    desc: '向大气播撒工程菌：它们吃二氧化碳，吐氧气——24 小时，三班倒，不拿工资。',
    effect: '生态改造速度再 +40%（叠加）',
    fx: { terraSpeedMul: 1.4 }, branch: 'bio',
    flavor: '「三班倒，不拿工资。」',
    hint: '💡 看不见的劳工：菌群是改造速度曲线的第一个加速器。' },
  { id: 't-bio-9', name: '液态水工程', icon: '💧', cost: 100, pre: ['t-bio-6'],
    desc: '极冠融化，古河道复苏：火星，第一次有了「河」。孩子们在河边打水漂。',
    effect: '生态改造速度再 +50%（叠加）',
    fx: { terraSpeedMul: 1.5 }, branch: 'bio',
    flavor: '「火星第一次有了『河』。」',
    hint: '💡 有水才有家：液态水是宜居度的硬门槛。' },
  { id: 't-bio-12', name: '磁场重启', icon: '🧲', cost: 150, pre: ['t-bio-9'],
    desc: '在火星地核重启磁场：太阳风再也Strip不了大气，辐射被挡在了门外。',
    effect: '灾难伤害 -20%（叠加）',
    fx: { disasterMul: 0.8 }, branch: 'bio',
    flavor: '「太阳风，再也剥不走大气。」',
    hint: '💡 磁场是行星的「防晒霜」：辐射类灾难直接哑火。' },
  { id: 't-bio-15', name: '盖亚协议', icon: '🌍', cost: 260, pre: ['t-bio-13', 't-bio-14'],
    desc: '当医疗、制造、改造三线贯通，火星第一次被当作一个「生命体」来对待。双线毕业，生物系终点。',
    effect: '生态改造速度再 +100%（叠加），灾难伤害再 -20%（叠加），解锁奇观「盖亚引擎」建造',
    fx: { terraSpeedMul: 2.0, disasterMul: 0.8 }, branch: 'bio',
    flavor: '「火星第一次被当作一个『生命体』。」',
    hint: '💡 生物系终点：解锁盖亚引擎！改造速度×5.46，火星变地球指日可待。' },

  // ═══════════ ⏳ 时间系 ×15 ═══════════
  // A 列 时间加速线（t-time-1/4/7/10/13）：buildSpeedMul 五层叠加
  //   1.2 × 1.3 × 1.4 × 1.5 × 1.8 ≈ 5.9，建造速度翻近六倍——
  //   「时间」是最贵的资源，也是最便宜的作弊；
  // B 列 时间观测线（t-time-2/5/8/11/14）：disasterWarnAdd 四层叠加
  //   10 + 15 + 20 + 30 = 75 秒预警，加上量子系的 10 秒，
  //   灾难来之前你有 85 秒——足够改写结局；
  // C 列 时间干涉线（t-time-3/6/9/12/15）：timeYieldMul + retroShieldAdd 双叠加，
  //   终极项 t-time-15 解锁奇观「时间机器」（第五胜利）。
  // 逐项注记（数值推演 / 点法建议）：
  //   t-time-1 时间感知：buildSpeedMul 1.2。建造速度是滚雪球的第一推动力。
  //   t-time-4 时间膨胀工坊：buildSpeedMul 1.3，叠后 1.56。加班消失了，产量却涨了。
  //   t-time-7 因果律车间：buildSpeedMul 1.4 + techCostMul 0.9。供应链第一次跑在需求前面。
  //   t-time-10 时间压缩：buildSpeedMul 1.5，叠后 3.28。奇观级建筑的工期从此按「天」算。
  //   t-time-13 永恒生产线：buildSpeedMul 1.8 + timeYieldMul 1.3。加速线毕业：建造速度×5.9。
  //   t-time-2 时间望远镜：disasterWarnAdd 15 秒。看见未来=改写未来，15 秒够拉响全城警报。
  //   t-time-5 未来气象站：disasterWarnAdd 15 + disasterMul 0.9。预警+减伤双收，性价比最高的保命线。
  //   t-time-8 命运计算：researchMul 1.2。预知未来是最强的科研加速器：少走的弯路都是产出。
  //   t-time-11 平行宇宙观测：disasterWarnAdd 20 + retroShieldAdd 0.15。抄平行宇宙的作业，灾难开始「短命」。
  //   t-time-14 拉普拉斯妖：disasterWarnAdd 30 + retroShieldAdd 0.2。观测线毕业：预警+75 秒、持续-50%。
  //   t-time-3 时间胶囊：timeYieldMul 1.2。存下的时间，都是利息。
  //   t-time-6 回溯维修：retroShieldAdd 0.15。坏了就「读档」：时间护盾是灾难持续时间的官方解法。
  //   t-time-9 时间银行：timeYieldMul 1.4 + researchMul 1.2。时间也能生息，双产出叠加。
  //   t-time-12 祖父悖论引擎：unrestMul 0.8 + timeYieldMul 1.5。改写历史=维稳，人心也可「回溯」。
  //   t-time-15 时间领主：双前置（t-time-13 + t-time-14）。timeYieldMul 2.0 + buildSpeedMul 1.5，解锁时间机器，第五胜利门票。
  // —— A 列：时间加速线 ——
  { id: 't-time-1', name: '时间感知', icon: '⏳', cost: 30, pre: [],
    desc: '给每台工程机械装上「时间感」：它们知道哪一秒该干什么，一秒都不浪费。',
    effect: '建造速度 +20%',
    fx: { buildSpeedMul: 1.2 }, branch: 'time',
    flavor: '「一秒，都不浪费。」',
    hint: '💡 时间系起点：建造速度是滚雪球的第一推动力。' },
  { id: 't-time-4', name: '时间膨胀工坊', icon: '🏗️', cost: 60, pre: ['t-time-1'],
    desc: '工坊里的时间比外面慢：一小时的活，里面干了三小时——工人们准时下班了。',
    effect: '建造速度再 +30%（叠加）',
    fx: { buildSpeedMul: 1.3 }, branch: 'time',
    flavor: '「工人们准时下班了，产量却涨了。」',
    hint: '💡 时间膨胀：加班消失了，产量却涨了——这就是时间科技。' },
  { id: 't-time-7', name: '因果律车间', icon: '🔗', cost: 100, pre: ['t-time-4'],
    desc: '先有果，后有因：车间根据「未来的订单」提前备料，供应链第一次跑在了需求前面。',
    effect: '建造速度再 +40%（叠加），科技点消耗 -10%（叠加）',
    fx: { buildSpeedMul: 1.4, techCostMul: 0.9 }, branch: 'time',
    flavor: '「先有果，后有因。」',
    hint: '💡 因果倒置：备料不再等订单，建造曲线的拐点。' },
  { id: 't-time-10', name: '时间压缩', icon: '🗜️', cost: 150, pre: ['t-time-7'],
    desc: '把十天的工期压缩成一天：大楼像延时摄影一样「长」起来，路人看呆了。',
    effect: '建造速度再 +50%（叠加）',
    fx: { buildSpeedMul: 1.5 }, branch: 'time',
    flavor: '「大楼像延时摄影一样『长』起来。」',
    hint: '💡 压缩时间=压缩成本：奇观级建筑的工期从此按「天」算。' },
  { id: 't-time-13', name: '永恒生产线', icon: '♾️', cost: 230, pre: ['t-time-10'],
    desc: '生产线进入了「时间循环」：产品下线的那一刻，原料已经回到了起点。永动，只是时间玩了个花招。',
    effect: '建造速度再 +80%（叠加），时间建筑产量 +30%（叠加）',
    fx: { buildSpeedMul: 1.8, timeYieldMul: 1.3 }, branch: 'time',
    flavor: '「永动，只是时间玩了个花招。」',
    hint: '💡 加速线毕业：建造速度×5.9，盖奇观像搭积木。' },
  // —— B 列：时间观测线 ——
  { id: 't-time-2', name: '时间望远镜', icon: '🔭', cost: 30, pre: [],
    desc: '望向过去，也瞥见未来：望远镜里，灾难的影子比灾难本身早到了 15 秒。',
    effect: '所有灾难预警提前 15 秒',
    fx: { disasterWarnAdd: 15 }, branch: 'time',
    flavor: '「灾难的影子，比灾难本身早到 15 秒。」',
    hint: '💡 看见未来=改写未来：15 秒够拉响全城警报。' },
  { id: 't-time-5', name: '未来气象站', icon: '🌦️', cost: 60, pre: ['t-time-2'],
    desc: '预报的不只是天气，还有「厄运」：气象站的屏幕上，红点比风暴早到了一整天。',
    effect: '灾难预警再提前 15 秒，灾难伤害 -10%（叠加）',
    fx: { disasterWarnAdd: 15, disasterMul: 0.9 }, branch: 'time',
    flavor: '「预报的不只是天气，还有『厄运』。」',
    hint: '💡 预警+减伤双收：观测线是性价比最高的保命线。' },
  { id: 't-time-8', name: '命运计算', icon: '🎲', cost: 100, pre: ['t-time-5'],
    desc: '算出未来三天的所有「如果」：科研第一次有了「标准答案」，试错变成了「验证」。',
    effect: '科技点产出 +20%（叠加）',
    fx: { researchMul: 1.2 }, branch: 'time',
    flavor: '「试错，变成了『验证』。」',
    hint: '💡 预知未来是最强的科研加速器：少走的弯路都是产出。' },
  { id: 't-time-11', name: '平行宇宙观测', icon: '🪞', cost: 150, pre: ['t-time-8'],
    desc: '窥见一万个平行宇宙：一万个星港里，总有一个躲过了灾难——我们抄它的作业。',
    effect: '灾难预警再提前 20 秒，灾难持续时间 -15%（加法汇总，上限 50%）',
    fx: { disasterWarnAdd: 20, retroShieldAdd: 0.15 }, branch: 'time',
    flavor: '「一万个星港里，总有一个躲过了灾难。」',
    hint: '💡 抄平行宇宙的作业：预警+持续减免，灾难开始「短命」。' },
  { id: 't-time-14', name: '拉普拉斯妖', icon: '👁️', cost: 230, pre: ['t-time-11'],
    desc: '全知的妖：它知道每个粒子的过去与未来。灾难在它面前，像慢动作回放。',
    effect: '灾难预警再提前 30 秒（叠加），灾难持续时间再 -20%（加法汇总，叠满 50% 上限）',
    fx: { disasterWarnAdd: 30, retroShieldAdd: 0.2 }, branch: 'time',
    flavor: '「灾难在它面前，像慢动作回放。」',
    hint: '💡 观测线毕业：预警+75 秒、持续-50%，灾难从此「迟到早退」。' },
  // —— C 列：时间干涉线 ——
  { id: 't-time-3', name: '时间胶囊', icon: '💊', cost: 30, pre: [],
    desc: '把「现在」存进胶囊：十年后打开，里面的面包还是热的。时间，第一次有了「保鲜期」。',
    effect: '时间建筑产量 +20%',
    fx: { timeYieldMul: 1.2 }, branch: 'time',
    flavor: '「十年后打开，面包还是热的。」',
    hint: '💡 时间建筑的起点：存下的时间，都是利息。' },
  { id: 't-time-6', name: '回溯维修', icon: '🔧', cost: 60, pre: ['t-time-3'],
    desc: '建筑坏了？回溯到它没坏的那一秒。维修队第一次「失业」——他们改行当了历史学家。',
    effect: '灾难持续时间 -15%（加法汇总，上限 50%）',
    fx: { retroShieldAdd: 0.15 }, branch: 'time',
    flavor: '「坏了就『读档』。」',
    hint: '💡 坏了就「读档」：时间护盾是灾难持续时间的官方解法。' },
  { id: 't-time-9', name: '时间银行', icon: '🏦', cost: 100, pre: ['t-time-6'],
    desc: '存款：「时间」。利息：「更多的时间」。时间银行的金库里，存着全城人的「明天」。',
    effect: '时间建筑产量再 +40%（叠加），科技点产出 +20%（叠加）',
    fx: { timeYieldMul: 1.4, researchMul: 1.2 }, branch: 'time',
    flavor: '「存『时间』，取『明天』。」',
    hint: '💡 时间也能生息：双产出叠加，时间系的经济引擎。' },
  { id: 't-time-12', name: '祖父悖论引擎', icon: '⚙️', cost: 150, pre: ['t-time-9'],
    desc: '回到过去，劝住了那个要闹事的「祖父」：历史被轻轻改写了一笔，动乱少了一半。',
    effect: '动乱概率 -20%（叠加），时间建筑产量再 +50%（叠加）',
    fx: { unrestMul: 0.8, timeYieldMul: 1.5 }, branch: 'time',
    flavor: '「历史被轻轻改写了一笔。」',
    hint: '💡 改写历史=维稳：人心，也是可以「回溯」的。' },
  { id: 't-time-15', name: '时间领主', icon: '⏰', cost: 260, pre: ['t-time-13', 't-time-14'],
    desc: '当加速、观测、干涉三线贯通，时间不再是河流，而是可以随意取用的「水库」。双线毕业，时间系终点。',
    effect: '时间建筑产量再 +100%（叠加），建造速度再 +50%（叠加），解锁奇观「时间机器」建造',
    fx: { timeYieldMul: 2.0, buildSpeedMul: 1.5 }, branch: 'time',
    flavor: '「时间不再是河流，是水库。」',
    hint: '💡 时间系终点：解锁时间机器！第五胜利的门票，就在这里。' },

  // ═══════════ 🕳️ 终极系 ×15 ═══════════
  // A 列 戴森线（t-omega-1/4/7/10/13）：powerMul + dysonMul 双叠加
  //   powerMul：1.3 × 1.5 × 2.0 × 3.0 = 11.7，电力翻十倍——
  //   终极能源的答案，奇观「戴森球」的前置燃料；
  // B 列 盖亚线（t-omega-2/5/8/11/14）：gaiaMul + terraSpeedMul 双叠加，
  //   gaiaMul：1.2 × 1.5 × 2.0 × 2.5 = 9，宜居度翻九倍——
  //   「把火星变成地球」的数值底气；
  // C 列 奇点线（t-omega-3/6/9/12/15）：researchMul + singularityMul 双叠加，
  //   终极项 t-omega-15 解锁奇观「戴森球」建造（与量子系的奇点核心呼应）。
  // 逐项注记（数值推演 / 点法建议）：
  //   t-omega-1 恒星帆：powerMul 1.3。向太阳要电，是终极能源的第一步。
  //   t-omega-4 轨道电站群：powerMul 1.5 + dysonMul 1.2。dysonMul 是戴森球的「预存款」，越早存越好。
  //   t-omega-7 戴森云：powerMul 2.0 + dysonMul 1.5。电力曲线的质变点：从此电表只涨不跌。
  //   t-omega-10 恒星物质提取：dysonMul 2.0 + globalYieldMul 1.2。一勺等离子体，够全城烧一年。
  //   t-omega-13 戴森球框架：powerMul 3.0 + dysonMul 2.5。戴森线毕业：电力×11.7，dysonMul×9。
  //   t-omega-2 行星发动机预研：terraSpeedMul 1.3。改造速度是宜居度的前置，先快后好。
  //   t-omega-5 大气工厂：terraSpeedMul 1.5 + gaiaMul 1.2。空气也能「生产」，gaiaMul 是宜居度专用乘区。
  //   t-omega-8 海洋回归：gaiaMul 1.5 + foodMul 1.3。蓝色火星：海洋是宜居度最大的单一加成来源。
  //   t-omega-11 生物圈二号·火星：gaiaMul 2.0 + popGrowthMul 1.3。行星级生物圈：宜居度×3.6。
  //   t-omega-14 行星生态穹顶：gaiaMul 2.5 + disasterMul 0.7。盖亚线毕业：宜居度×9，灾难-30%。
  //   t-omega-3 强AI：researchMul 1.3。AI 搞科研，比人类快，还不睡觉。
  //   t-omega-6 脑机接口：researchMul 1.5 + techCostMul 0.85。知识直接「下载」，科研双加速。
  //   t-omega-9 意识上传：singularityMul 1.5 + unrestMul 0.9。永生 2.0：「死亡」退出历史舞台。
  //   t-omega-12 奇点临近：singularityMul 2.0 + researchMul 1.5。singularityMul×3，科技点进入指数时代。
  //   t-omega-15 欧米伽奇点：双前置（t-omega-13 + t-omega-14）。globalYieldMul 1.5 + singularityMul 2.5 + disasterMul 0.7，解锁戴森球，「完全体」毕业。
  // —— A 列：戴森线 ——
  { id: 't-omega-1', name: '恒星帆', icon: '⛵', cost: 30, pre: [],
    desc: '在轨道上张开光帆：太阳风推着它，也推着我们的电表——转得飞快。',
    effect: '全城电力 +30%',
    fx: { powerMul: 1.3 }, branch: 'omega',
    flavor: '「太阳风推着它，也推着我们的电表。」',
    hint: '💡 终极系起点：向太阳要电，是终极能源的第一步。' },
  { id: 't-omega-4', name: '轨道电站群', icon: '🛰️', cost: 60, pre: ['t-omega-1'],
    desc: '一百座电站在轨道上排成串：火星的夜晚，第一次比白天还亮。',
    effect: '全城电力再 +50%（叠加），戴森加成 +20%（叠加）',
    fx: { powerMul: 1.5, dysonMul: 1.2 }, branch: 'omega',
    flavor: '「火星的夜晚，第一次比白天还亮。」',
    hint: '💡 电站成群：dysonMul 是戴森球的「预存款」，越早存越好。' },
  { id: 't-omega-7', name: '戴森云', icon: '☁️', cost: 100, pre: ['t-omega-4'],
    desc: '十万面反射镜，围着太阳摆成一张网：恒星的光，第一次有了「主人」。',
    effect: '全城电力再 +100%（叠加），戴森加成再 +50%（叠加）',
    fx: { powerMul: 2.0, dysonMul: 1.5 }, branch: 'omega',
    flavor: '「恒星的光，第一次有了『主人』。」',
    hint: '💡 戴森云是电力曲线的质变点：从此电表只涨不跌。' },
  { id: 't-omega-10', name: '恒星物质提取', icon: '🌟', cost: 150, pre: ['t-omega-7'],
    desc: '从太阳表面「舀」出一勺等离子体：一勺，够全城烧一年。',
    effect: '戴森加成再 +100%（叠加），全局产量 +20%（叠加）',
    fx: { dysonMul: 2.0, globalYieldMul: 1.2 }, branch: 'omega',
    flavor: '「从太阳表面『舀』出一勺。」',
    hint: '💡 舀太阳：dysonMul×3.6，能源彻底进入「恒星级」。' },
  { id: 't-omega-13', name: '戴森球框架', icon: '🔆', cost: 230, pre: ['t-omega-10'],
    desc: '框架合拢的那一刻，太阳「暗」了一下——不是熄灭，是被我们「包」起来了。',
    effect: '全城电力再 +200%（叠加），戴森加成再 +150%（叠加）',
    fx: { powerMul: 3.0, dysonMul: 2.5 }, branch: 'omega',
    flavor: '「太阳『暗』了一下——被我们『包』起来了。」',
    hint: '💡 戴森线毕业：电力×11.7，dysonMul×9，终极能源就绪。' },
  // —— B 列：盖亚线 ——
  { id: 't-omega-2', name: '行星发动机预研', icon: '🚀', cost: 30, pre: [],
    desc: '给火星装发动机？先从论文开始。预研报告的第一句话：理论上，可行。',
    effect: '生态改造速度 +30%（叠加）',
    fx: { terraSpeedMul: 1.3 }, branch: 'omega',
    flavor: '「理论上，可行。」',
    hint: '💡 盖亚线的起点：改造速度是宜居度的前置。' },
  { id: 't-omega-5', name: '大气工厂', icon: '🏭', cost: 60, pre: ['t-omega-2'],
    desc: '工厂不冒烟，冒「空气」：氮气氧气按配比出厂，火星的天空，第一次有了「配方」。',
    effect: '生态改造速度再 +50%（叠加），宜居度 +20%（叠加）',
    fx: { terraSpeedMul: 1.5, gaiaMul: 1.2 }, branch: 'omega',
    flavor: '「工厂不冒烟，冒『空气』。」',
    hint: '💡 空气也能「生产」：gaiaMul 是宜居度的专用乘区。' },
  { id: 't-omega-8', name: '海洋回归', icon: '🌊', cost: 100, pre: ['t-omega-5'],
    desc: '古海洋回来了：卫星图上，火星北半球第一次出现了「蓝」。有人哭了。',
    effect: '宜居度再 +50%（叠加），食物产量 +30%（叠加）',
    fx: { gaiaMul: 1.5, foodMul: 1.3 }, branch: 'omega',
    flavor: '「卫星图上，火星北半球出现了『蓝』。」',
    hint: '💡 蓝色火星：海洋是宜居度最大的单一加成来源。' },
  { id: 't-omega-11', name: '生物圈二号·火星', icon: '🌐', cost: 150, pre: ['t-omega-8'],
    desc: '整个火星，就是一个生物圈：大气、海洋、森林、城市，第一次 self-consistent。',
    effect: '宜居度再 +100%（叠加），人口增长 +30%（叠加）',
    fx: { gaiaMul: 2.0, popGrowthMul: 1.3 }, branch: 'omega',
    flavor: '「整个火星，就是一个生物圈。」',
    hint: '💡 行星级生物圈：宜居度×3.6，人口迎来第三次爆炸。' },
  { id: 't-omega-14', name: '行星生态穹顶', icon: '🔮', cost: 230, pre: ['t-omega-11'],
    desc: '最后一块荒漠变绿洲：穹顶不需要了，因为整颗行星，就是穹顶。',
    effect: '宜居度再 +150%（叠加），灾难伤害 -30%（叠加）',
    fx: { gaiaMul: 2.5, disasterMul: 0.7 }, branch: 'omega',
    flavor: '「整颗行星，就是穹顶。」',
    hint: '💡 盖亚线毕业：宜居度×9，灾难-30%，火星≈地球。' },
  // —— C 列：奇点线 ——
  { id: 't-omega-3', name: '强AI', icon: '🤖', cost: 30, pre: [],
    desc: 'AI 通过了图灵测试，又通过了「爱因斯坦测试」：它独立提出了一个新物理定律。',
    effect: '科技点产出 +30%（叠加）',
    fx: { researchMul: 1.3 }, branch: 'omega',
    flavor: '「它独立提出了一个新物理定律。」',
    hint: '💡 奇点线的起点：AI 搞科研，比人类快，还不睡觉。' },
  { id: 't-omega-6', name: '脑机接口', icon: '🧠', cost: 60, pre: ['t-omega-3'],
    desc: '想，即得：知识直接「下载」进大脑，学校变成了「应用商店」。',
    effect: '科技点产出再 +50%（叠加），科技点消耗 -15%（叠加）',
    fx: { researchMul: 1.5, techCostMul: 0.85 }, branch: 'omega',
    flavor: '「想，即得。」',
    hint: '💡 下载知识：科研双加速，终极系的经济发动机。' },
  { id: 't-omega-9', name: '意识上传', icon: '💾', cost: 100, pre: ['t-omega-6'],
    desc: '第一个上传的人类，在服务器里活了下来。他说：这里没有衰老，只有带宽。',
    effect: '奇点加成 +50%（叠加），动乱概率 -10%（叠加）',
    fx: { singularityMul: 1.5, unrestMul: 0.9 }, branch: 'omega',
    flavor: '「这里没有衰老，只有带宽。」',
    hint: '💡 永生2.0：意识上传后，「死亡」退出了历史舞台。' },
  { id: 't-omega-12', name: '奇点临近', icon: '🌀', cost: 150, pre: ['t-omega-9'],
    desc: '曲线陡峭得像墙：AI 的智力每 18 个月翻一番，墙后面是什么，没人知道——但我们正往上爬。',
    effect: '奇点加成再 +100%（叠加），科技点产出再 +50%（叠加）',
    fx: { singularityMul: 2.0, researchMul: 1.5 }, branch: 'omega',
    flavor: '「墙后面是什么不知道，但我们正往上爬。」',
    hint: '💡 奇点前夜：singularityMul×3，科技点产出进入指数时代。' },
  { id: 't-omega-15', name: '欧米伽奇点', icon: '✨', cost: 260, pre: ['t-omega-13', 't-omega-14'],
    desc: 'Ω，希腊字母的最后一个，也是终极。当戴森的光、盖亚的绿、奇点的智三线贯通，文明抵达了「之后」。双线毕业，终极系终点。',
    effect: '全局产量 +50%（叠加），奇点加成再 +150%（叠加），灾难伤害 -30%（叠加），解锁奇观「戴森球」建造',
    fx: { globalYieldMul: 1.5, singularityMul: 2.5, disasterMul: 0.7 }, branch: 'omega',
    flavor: '「Ω 是最后一个字母，也是终极。」',
    hint: '💡 终极系终点：解锁戴森球！第五胜利之外的「完全体」毕业。' },
];

// ---- TECH_V17 → TECH_DEFS 注册（防御式；needs = pre） ----
if (typeof TECH_DEFS !== 'undefined') {
  const _defs17 = {};
  for (const t of TECH_V17) {
    _defs17[t.id] = {
      name: t.name, icon: t.icon, branch: t.branch, cost: t.cost,
      needs: Array.isArray(t.pre) ? t.pre.slice() : [],
      desc: t.desc + ' [' + t.effect + ']',
      hint: t.hint, fx: t.fx || {}, flavor: t.flavor || '',
    };
  }
  Object.assign(TECH_DEFS, _defs17);
}

// 科技展示顺序：四系依次排布（每系按列展开：A 列 5 层 → B 列 5 层 → C 列 5 层）
if (typeof TECH_ORDER !== 'undefined' && Array.isArray(TECH_ORDER)) {
  TECH_ORDER.push(
    't-quantum-1', 't-quantum-4', 't-quantum-7', 't-quantum-10', 't-quantum-13',
    't-quantum-2', 't-quantum-5', 't-quantum-8', 't-quantum-11', 't-quantum-14',
    't-quantum-3', 't-quantum-6', 't-quantum-9', 't-quantum-12', 't-quantum-15',
    't-bio-1', 't-bio-4', 't-bio-7', 't-bio-10', 't-bio-13',
    't-bio-2', 't-bio-5', 't-bio-8', 't-bio-11', 't-bio-14',
    't-bio-3', 't-bio-6', 't-bio-9', 't-bio-12', 't-bio-15',
    't-time-1', 't-time-4', 't-time-7', 't-time-10', 't-time-13',
    't-time-2', 't-time-5', 't-time-8', 't-time-11', 't-time-14',
    't-time-3', 't-time-6', 't-time-9', 't-time-12', 't-time-15',
    't-omega-1', 't-omega-4', 't-omega-7', 't-omega-10', 't-omega-13',
    't-omega-2', 't-omega-5', 't-omega-8', 't-omega-11', 't-omega-14',
    't-omega-3', 't-omega-6', 't-omega-9', 't-omega-12', 't-omega-15',
  );
}

// ==================== 二、成就 +60（总数 277） ====================
// 设计总纲：60 项 = 量子 8（算力的故事）+ 生物 8（生命的故事）+
//   时间 8（时间的故事）+ 终极 6（毕业的故事）+ 灾难 8（活下去的故事）+
//   奇观 8（封神的故事）+ 政策 6（治国的故事）+ 传奇 8（不朽的故事）。
// 数组字段：{id, name, icon, desc, check（判定描述文字）, cat（类别）}；
//   另附 tip（解锁 toast 文案）/ hint（解锁指引）/ checkFn（防御式判定函数）。
// 注册时 ACHIEVEMENT_DEFS.push({id, name, icon, desc, tip, hint, check: checkFn})，
//   与 v1.5 的 dx-/hy-/gv-/zy-/jz-/wj-/js-/qg- 体系衔接，id 前缀不重叠。
// 所有 checkFn 均为防御式：量子/生物/时间建筑线未上线时恒为 false，
//   上线后自动可解锁；空 game（null/{}）下绝不抛错（自检覆盖）。
// 灾难经历类成就读取 stats.haz17_seen_<id>（HazardPack17 触发时写入）。
const ACH_V17 = [
  // ---- ⚛️ 量子 8 项 ----
  // 设计：量子成就按「第一座→铺开→算力→护盾→科研→毕业→奇观→封神」排布。
  // 逐项注记：q-first 第一座量子建筑（id 以 q- 开头）；q-10 铺 10 座（先点 t-quantum-9 降本）；
  //   q-power 算力线 5 项全满；q-shield 护盾线 3 项全满（减伤叠满 50% 上限）；
  //   q-storm0 量子风暴零损坏（先点 t-quantum-8，读 stats.haz17_quantum_storm_noDamage）；
  //   q-research 累计消耗 5000 科技点（读 stats.techSpent）；q-master 15 项全满；q-wonder 建成奇点核心。
  { id: 'q-first', name: '第一束纠缠', icon: '⚛️', cat: '量子',
    desc: '建成第一个量子建筑', check: '量子建筑数量 ≥ 1',
    tip: '⚛️ 第一束纠缠：星港的疆域，从此有了「量子」这一层。',
    hint: '💡 建成任意一个量子建筑（id 以 q- 开头）。',
    checkFn: (g) => P17U.qCount(g) >= 1 },
  { id: 'q-10', name: '量子街区', icon: '🏘️', cat: '量子',
    desc: '量子建筑达到 10 座', check: '量子建筑数量 ≥ 10',
    tip: '🏘️ 第 10 座量子建筑：算力，也有了街区。',
    hint: '💡 把量子建筑铺到 10 座，建议先点 t-quantum-9（传送带降本）。',
    checkFn: (g) => P17U.qCount(g) >= 10 },
  { id: 'q-power', name: '算力自由', icon: '🧮', cat: '量子',
    desc: '解锁 5 项量子算力线科技', check: 't-quantum-1/4/7/10/13 全部解锁',
    tip: '🧮 算力自由：从量子比特到量子奇点，你读完了算力这本书。',
    hint: '💡 点满量子 A 列（算力线）5 项科技。',
    checkFn: (g) => ['t-quantum-1','t-quantum-4','t-quantum-7','t-quantum-10','t-quantum-13'].every((id) => P17U.hasTech(g, id)) },
  { id: 'q-shield', name: '看不见的墙', icon: '🛡️', cat: '量子',
    desc: '量子护盾线毕业（减伤叠满 50%）', check: 't-quantum-8/11/14 全部解锁',
    tip: '🛡️ 量子长城合拢：灾难撞上来的那一刻，发现目标不见了。',
    hint: '💡 点满量子 B 列（护盾线）3 项科技。',
    checkFn: (g) => ['t-quantum-8','t-quantum-11','t-quantum-14'].every((id) => P17U.hasTech(g, id)) },
  { id: 'q-storm0', name: '风暴眼', icon: '🌪️', cat: '量子',
    desc: '量子风暴中量子建筑零损坏', check: '经历量子风暴且 q- 建筑损坏数 = 0',
    tip: '🌪️ 量子风暴零损坏：风暴路过，量子街区连块漆都没掉。',
    hint: '💡 点出量子护盾（t-quantum-8）再迎接量子风暴。',
    checkFn: (g) => (P17U.st(g).haz17_quantum_storm_noDamage || 0) >= 1 },
  { id: 'q-research', name: '论文工厂', icon: '📄', cat: '量子',
    desc: '累计消耗 5000 科技点', check: 'stats.techSpent ≥ 5000',
    tip: '📄 累计消耗 5000 科技点：星港的论文，能铺满一条街。',
    hint: '💡 科技点花得越多越强：量子系是花钱的艺术。',
    checkFn: (g) => (P17U.st(g).techSpent || 0) >= 5000 },
  { id: 'q-master', name: '量子主宰', icon: '👑', cat: '量子',
    desc: '解锁全部 15 项量子科技', check: 't-quantum-1 ~ t-quantum-15 全部解锁',
    tip: '👑 量子科技全满：从比特到创世，你算完了量子这本书。',
    hint: '💡 点满全部 15 项量子科技，三线毕业。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = []; for (let i = 1; i <= 15; i++) ids.push('t-quantum-' + i);
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  { id: 'q-wonder', name: '奇点点火', icon: '✨', cat: '量子',
    desc: '建成奇观「奇点核心」', check: '拥有奇点核心（singularity_core）≥ 1',
    tip: '✨ 奇点核心点火：科技点，第一次有了「无限」的形状。',
    hint: '💡 点出 t-quantum-15 后建造奇点核心。',
    checkFn: (g) => P17U.count(g, 'singularity_core') >= 1 },

  // ---- 🧬 生物 8 项 ----
  // 设计：生物成就按「第一株→铺开→人口→医疗→改造→毕业→奇观→封神」排布。
  // 逐项注记：s-first 第一座生物建筑（id 以 s- 开头）；s-10 铺 10 座（先点 t-bio-5 降本）；
  //   s-pop 人口 500（医疗线 + 基因农场双管齐下）；s-med 医疗线 5 项全满；
  //   s-terra 宜居度 80%（读 stats.habitability，改造线 + 盖亚线综合题）；
  //   s-plague0 基因瘟疫零死亡（先点 t-bio-4，读 stats.haz17_gene_plague_noDeath）；
  //   s-master 15 项全满；s-wonder 建成盖亚引擎。
  { id: 's-first', name: '第一株苔藓', icon: '🌱', cat: '生物',
    desc: '建成第一个生物建筑', check: '生物建筑数量 ≥ 1',
    tip: '🌱 第一株苔藓：星港的疆域，从此有了「生命」这一层。',
    hint: '💡 建成任意一个生物建筑（id 以 s- 开头）。',
    checkFn: (g) => P17U.sCount(g) >= 1 },
  { id: 's-10', name: '活体街区', icon: '🏡', cat: '生物',
    desc: '生物建筑达到 10 座', check: '生物建筑数量 ≥ 10',
    tip: '🏡 第 10 座生物建筑：房子是种出来的，街区是长出来的。',
    hint: '💡 把生物建筑铺到 10 座，建议先点 t-bio-5（反应器降本）。',
    checkFn: (g) => P17U.sCount(g) >= 10 },
  { id: 's-pop', name: '人丁兴旺', icon: '👶', cat: '生物',
    desc: '人口达到 500', check: '人口 ≥ 500',
    tip: '👶 第 500 位市民：星港的人口，第一次有了「城市」的样子。',
    hint: '💡 点基因医疗线 + 基因农场，人口和食物双管齐下。',
    checkFn: (g) => P17U.pop(g) >= 500 },
  { id: 's-med', name: '百病不侵', icon: '💉', cat: '生物',
    desc: '基因医疗线毕业', check: 't-bio-1/4/7/10/13 全部解锁',
    tip: '💉 基因医疗线毕业：从测序到永生血清，疾病退出了历史。',
    hint: '💡 点满生物 A 列（基因医疗线）5 项科技。',
    checkFn: (g) => ['t-bio-1','t-bio-4','t-bio-7','t-bio-10','t-bio-13'].every((id) => P17U.hasTech(g, id)) },
  { id: 's-terra', name: '蓝色火星', icon: '🌊', cat: '生物',
    desc: '宜居度达到 80%', check: '宜居度 ≥ 80%',
    tip: '🌊 宜居度 80%：卫星图上，火星北半球出现了「蓝」。',
    hint: '💡 点生态改造线 + 盖亚线，宜居度是综合题。',
    checkFn: (g) => (P17U.st(g).habitability || 0) >= 80 },
  { id: 's-plague0', name: '零号病人', icon: '🦠', cat: '生物',
    desc: '基因瘟疫中人口零死亡', check: '经历基因瘟疫且瘟疫死亡数 = 0',
    tip: '🦠 基因瘟疫零死亡：瘟疫来了，星港连一个喷嚏都没打。',
    hint: '💡 点出基因疗法（t-bio-4）再迎接基因瘟疫。',
    checkFn: (g) => (P17U.st(g).haz17_gene_plague_noDeath || 0) >= 1 },
  { id: 's-master', name: '生命主宰', icon: '👑', cat: '生物',
    desc: '解锁全部 15 项生物科技', check: 't-bio-1 ~ t-bio-15 全部解锁',
    tip: '👑 生物科技全满：从苔藓到盖亚协议，你读完了生命这本书。',
    hint: '💡 点满全部 15 项生物科技，三线毕业。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = []; for (let i = 1; i <= 15; i++) ids.push('t-bio-' + i);
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  { id: 's-wonder', name: '盖亚点火', icon: '🌍', cat: '生物',
    desc: '建成奇观「盖亚引擎」', check: '拥有盖亚引擎（gaia_engine）≥ 1',
    tip: '🌍 盖亚引擎点火：火星，第一次被当作一个生命体来对待。',
    hint: '💡 点出 t-bio-15 后建造盖亚引擎。',
    checkFn: (g) => P17U.count(g, 'gaia_engine') >= 1 },

  // ---- ⏳ 时间 8 项 ----
  // 设计：时间成就按「第一秒→加速→预警→干涉→毕业→奇观→胜利→封神」排布。
  // 逐项注记：t-first 第一座时间建筑（id 以 tm- 开头）；t-10 铺 10 座（建造速度科技先行）；
  //   t-speed 加速线 5 项全满（建造速度×5.9）；t-warn 观测线 5 项全满（预警+75 秒）；
  //   t-retro0 时间乱流零损坏（先点 t-time-6，读 stats.haz17_time_turbulence_noDamage）；
  //   t-master 15 项全满；t-wonder 建成时间机器；t-victory 第五胜利（读 city.timeWon）。
  { id: 't-first', name: '第一秒', icon: '⏳', cat: '时间',
    desc: '建成第一个时间建筑', check: '时间建筑数量 ≥ 1',
    tip: '⏳ 第一秒：星港的疆域，从此有了「时间」这一层。',
    hint: '💡 建成任意一个时间建筑（id 以 tm- 开头）。',
    checkFn: (g) => P17U.tCount(g) >= 1 },
  { id: 't-10', name: '时间街区', icon: '🏙️', cat: '时间',
    desc: '时间建筑达到 10 座', check: '时间建筑数量 ≥ 10',
    tip: '🏙️ 第 10 座时间建筑：时间，也有了街区。',
    hint: '💡 把时间建筑铺到 10 座，建造速度科技先行。',
    checkFn: (g) => P17U.tCount(g) >= 10 },
  { id: 't-speed', name: '时间富翁', icon: '♾️', cat: '时间',
    desc: '时间加速线毕业（建造速度×5.9）', check: 't-time-1/4/7/10/13 全部解锁',
    tip: '♾️ 时间加速线毕业：盖奇观像搭积木，工期按天算。',
    hint: '💡 点满时间 A 列（加速线）5 项科技。',
    checkFn: (g) => ['t-time-1','t-time-4','t-time-7','t-time-10','t-time-13'].every((id) => P17U.hasTech(g, id)) },
  { id: 't-warn', name: '先知', icon: '🔮', cat: '时间',
    desc: '时间观测线毕业（预警+75 秒）', check: 't-time-2/5/8/11/14 全部解锁',
    tip: '🔮 观测线毕业：灾难来之前，你有 75 秒——足够改写结局。',
    hint: '💡 点满时间 B 列（观测线）5 项科技。',
    checkFn: (g) => ['t-time-2','t-time-5','t-time-8','t-time-11','t-time-14'].every((id) => P17U.hasTech(g, id)) },
  { id: 't-retro0', name: '读档人生', icon: '🔧', cat: '时间',
    desc: '时间乱流中建筑零损坏', check: '经历时间乱流且建筑损坏数 = 0',
    tip: '🔧 时间乱流零损坏：坏了就「读档」，时间护盾立功。',
    hint: '💡 点出回溯维修（t-time-6）再迎接时间乱流。',
    checkFn: (g) => (P17U.st(g).haz17_time_turbulence_noDamage || 0) >= 1 },
  { id: 't-master', name: '时间主宰', icon: '👑', cat: '时间',
    desc: '解锁全部 15 项时间科技', check: 't-time-1 ~ t-time-15 全部解锁',
    tip: '👑 时间科技全满：从胶囊到时间领主，你读完了时间这本书。',
    hint: '💡 点满全部 15 项时间科技，三线毕业。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = []; for (let i = 1; i <= 15; i++) ids.push('t-time-' + i);
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  { id: 't-wonder', name: '时间机器点火', icon: '⏰', cat: '时间',
    desc: '建成奇观「时间机器」', check: '拥有时间机器（time_machine）≥ 1',
    tip: '⏰ 时间机器点火：过去，第一次有了「门」。',
    hint: '💡 点出 t-time-15 后建造时间机器。',
    checkFn: (g) => P17U.count(g, 'time_machine') >= 1 },
  { id: 't-victory', name: '回到过去', icon: '🌀', cat: '时间',
    desc: '达成第五胜利：时间机器', check: '第五胜利（time_machine）达成',
    tip: '🌀 第五胜利：回到过去，告诉当年的自己——「坚持住，火星会赢。」',
    hint: '💡 建成时间机器并完成「回到过去」仪式。',
    checkFn: (g) => !!(g && g.city && (g.city.timeWon || g.city.timeMachineWon)) },

  // ---- 🕳️ 终极 6 项 ----
  // 设计：终极成就按「戴森→盖亚→奇点→毕业→图书馆→封神」排布。
  // 逐项注记：o-dyson 戴森线 5 项全满（电力×11.7）；o-gaia 盖亚线 5 项全满（宜居度×9）；
  //   o-sing 奇点线前 4 项（singularityMul×3）；o-master 15 项全满；
  //   o-dysonw 建成戴森球（需人口 600，最贵奇观留到最后）；o-lib 建成永恒图书馆（需 t-omega-12）。
  { id: 'o-dyson', name: '把太阳包起来', icon: '🌞', cat: '终极',
    desc: '戴森线毕业（电力×11.7）', check: 't-omega-1/4/7/10/13 全部解锁',
    tip: '🌞 戴森线毕业：太阳「暗」了一下——不是熄灭，是被包起来了。',
    hint: '💡 点满终极 A 列（戴森线）5 项科技。',
    checkFn: (g) => ['t-omega-1','t-omega-4','t-omega-7','t-omega-10','t-omega-13'].every((id) => P17U.hasTech(g, id)) },
  { id: 'o-gaia', name: '第二个地球', icon: '🌍', cat: '终极',
    desc: '盖亚线毕业（宜居度×9）', check: 't-omega-2/5/8/11/14 全部解锁',
    tip: '🌍 盖亚线毕业：火星≈地球，「第二个家」不再是比喻。',
    hint: '💡 点满终极 B 列（盖亚线）5 项科技。',
    checkFn: (g) => ['t-omega-2','t-omega-5','t-omega-8','t-omega-11','t-omega-14'].every((id) => P17U.hasTech(g, id)) },
  { id: 'o-sing', name: '奇点之后', icon: '🌀', cat: '终极',
    desc: '奇点线毕业（奇点加成×7.5）', check: 't-omega-3/6/9/12 全部解锁',
    tip: '🌀 奇点线毕业：墙后面是什么不知道，但我们正在往上爬。',
    hint: '💡 点满终极 C 列（奇点线）前 4 项科技。',
    checkFn: (g) => ['t-omega-3','t-omega-6','t-omega-9','t-omega-12'].every((id) => P17U.hasTech(g, id)) },
  { id: 'o-master', name: '欧米伽', icon: '✨', cat: '终极',
    desc: '解锁全部 15 项终极科技', check: 't-omega-1 ~ t-omega-15 全部解锁',
    tip: '✨ 终极科技全满：Ω 是最后一个字母，也是终极。',
    hint: '💡 点满全部 15 项终极科技，三线毕业。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = []; for (let i = 1; i <= 15; i++) ids.push('t-omega-' + i);
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },
  { id: 'o-dysonw', name: '戴森球点火', icon: '🔆', cat: '终极',
    desc: '建成奇观「戴森球」', check: '拥有戴森球（dyson_sphere）≥ 1',
    tip: '🔆 戴森球点火：终极能源上线，电表只涨不跌。',
    hint: '💡 点出 t-omega-15 后建造戴森球。',
    checkFn: (g) => P17U.count(g, 'dyson_sphere') >= 1 },
  { id: 'o-lib', name: '永恒书架', icon: '📚', cat: '终极',
    desc: '建成奇观「永恒图书馆」', check: '拥有永恒图书馆（eternal_library）≥ 1',
    tip: '📚 永恒图书馆落成：人类全部的知识，有了「家」。',
    hint: '💡 点出 t-omega-12 后建造永恒图书馆。',
    checkFn: (g) => P17U.count(g, 'eternal_library') >= 1 },

  // ---- 🌪️ 灾难 8 项 ----
  // 设计：灾难成就按「经历→零伤→全收集」排布，每种新灾难各一枚「幸存者」勋章。
  // 逐项注记：z-quantum/z-plague/z-time/z-dark/z-nano 读 stats.haz17_seen_<id>（HazardPack17 触发时写入）；
  //   z-anti 反物质失控零摧毁（需磁约束瓶，读 stats.haz17_antimatter_breach_noDestroy）；
  //   z-gravity 引力异常零损毁（读 stats.haz17_gravity_anomaly_noDamage）；
  //   z-echo 文明回声士气≥50（回声纪念碑 + 高士气是解法，读 stats.moraleAfterEcho）。
  { id: 'z-quantum', name: '风暴幸存者', icon: '🌪️', cat: '灾难',
    desc: '经历量子风暴并存活', check: '经历过量子风暴（haz17_seen_quantum_storm）',
    tip: '🌪️ 量子风暴幸存者：风暴路过，你还在——这就叫工程。',
    hint: '💡 32 分钟后量子风暴首发，提前备好量子护盾。',
    checkFn: (g) => P17U.seenHazard(g, 'quantum_storm') },
  { id: 'z-plague', name: '瘟疫幸存者', icon: '🦠', cat: '灾难',
    desc: '经历基因瘟疫并存活', check: '经历过基因瘟疫（haz17_seen_gene_plague）',
    tip: '🦠 基因瘟疫幸存者：瘟疫退了，城市还在——医疗线立功。',
    hint: '💡 34 分钟后基因瘟疫首发，基因诊所是官方解法。',
    checkFn: (g) => P17U.seenHazard(g, 'gene_plague') },
  { id: 'z-time', name: '乱流幸存者', icon: '⏳', cat: '灾难',
    desc: '经历时间乱流并存活', check: '经历过时间乱流（haz17_seen_time_turbulence）',
    tip: '⏳ 时间乱流幸存者：时间乱了，城市没乱——这就叫秩序。',
    hint: '💡 36 分钟后时间乱流首发，时间锚是官方解法。',
    checkFn: (g) => P17U.seenHazard(g, 'time_turbulence') },
  { id: 'z-dark', name: '暗物质幸存者', icon: '🌑', cat: '灾难',
    desc: '经历暗物质泄漏并存活', check: '经历过暗物质泄漏（haz17_seen_darkmatter_leak）',
    tip: '🌑 暗物质泄漏幸存者：看不见的敌人，最考验收容技术。',
    hint: '💡 38 分钟后暗物质泄漏首发，收容罐是官方解法。',
    checkFn: (g) => P17U.seenHazard(g, 'darkmatter_leak') },
  { id: 'z-anti', name: '反物质幸存者', icon: '💥', cat: '灾难',
    desc: '经历反物质失控且无建筑被摧毁', check: '经历反物质失控且摧毁数 = 0',
    tip: '💥 反物质失控零摧毁：最危险的 30 秒， magnetic 瓶没让人失望。',
    hint: '💡 点出量子聚变（t-quantum-12）+ 磁约束瓶再迎接。',
    checkFn: (g) => (P17U.st(g).haz17_antimatter_breach_noDestroy || 0) >= 1 },
  { id: 'z-nano', name: '虫群幸存者', icon: '🐜', cat: '灾难',
    desc: '经历纳米虫群并存活', check: '经历过纳米虫群（haz17_seen_nano_swarm）',
    tip: '🐜 纳米虫群幸存者：虫群退了，城市还在——EMP 立功。',
    hint: '💡 42 分钟后纳米虫群首发，EMP 脉冲塔是官方解法。',
    checkFn: (g) => P17U.seenHazard(g, 'nano_swarm') },
  { id: 'z-gravity', name: '引力幸存者', icon: '🌀', cat: '灾难',
    desc: '经历引力异常且建筑零损毁', check: '经历引力异常且损毁数 = 0',
    tip: '🌀 引力异常零损毁：重力乱了，建筑没乱——稳定器立功。',
    hint: '💡 点出行星生态穹顶（t-omega-14）+ 引力稳定器再迎接。',
    checkFn: (g) => (P17U.st(g).haz17_gravity_anomaly_noDamage || 0) >= 1 },
  { id: 'z-echo', name: '回声幸存者', icon: '👁️', cat: '灾难',
    desc: '经历文明回声且士气未崩溃', check: '经历文明回声且士气 ≥ 50',
    tip: '👁️ 文明回声幸存者：低语退了，人心还在——纪念碑立功。',
    hint: '💡 46 分钟后文明回声首发，回声纪念碑+高士气是解法。',
    checkFn: (g) => P17U.seenHazard(g, 'civ_echo') && (P17U.st(g).moraleAfterEcho ?? 100) >= 50 },

  // ---- 🏛️ 奇观 8 项 ----
  // 设计：奇观成就按「五奇观各一→第一座→三座→全满」排布。
  // 逐项注记：w-dyson/w-time/w-gaia/w-sing/w-lib 各对一座奇观（读 builder.count）；
  //   w-first 任一座；w-3 任意三座；w-5 五座全建（终极收藏）；
  //   推荐建造顺序（造价递增）：永恒图书馆 → 奇点核心 → 盖亚引擎 → 时间机器 → 戴森球。
  { id: 'w-dyson', name: '终极能源', icon: '🌞', cat: '奇观',
    desc: '建成奇观「戴森球」', check: '拥有戴森球（dyson_sphere）≥ 1',
    tip: '🌞 戴森球落成：从今天起，星港用的每一度电，都来自太阳。',
    hint: '💡 点出 t-omega-15 后建造，需要人口 600。',
    checkFn: (g) => P17U.count(g, 'dyson_sphere') >= 1 },
  { id: 'w-time', name: '时间之门', icon: '⏰', cat: '奇观',
    desc: '建成奇观「时间机器」', check: '拥有时间机器（time_machine）≥ 1',
    tip: '⏰ 时间机器落成：过去有了门，未来有了窗。',
    hint: '💡 点出 t-time-15 后建造，需要人口 500。',
    checkFn: (g) => P17U.count(g, 'time_machine') >= 1 },
  { id: 'w-gaia', name: '行星之心', icon: '🌍', cat: '奇观',
    desc: '建成奇观「盖亚引擎」', check: '拥有盖亚引擎（gaia_engine）≥ 1',
    tip: '🌍 盖亚引擎落成：火星的心脏，开始为人类而跳。',
    hint: '💡 点出 t-bio-15 后建造，需要人口 450。',
    checkFn: (g) => P17U.count(g, 'gaia_engine') >= 1 },
  { id: 'w-sing', name: '无限算力', icon: '🕳️', cat: '奇观',
    desc: '建成奇观「奇点核心」', check: '拥有奇点核心（singularity_core）≥ 1',
    tip: '🕳️ 奇点核心落成：科技点无限，科研彻底自由。',
    hint: '💡 点出 t-quantum-15 后建造，需要人口 400。',
    checkFn: (g) => P17U.count(g, 'singularity_core') >= 1 },
  { id: 'w-lib', name: '知识方舟', icon: '📚', cat: '奇观',
    desc: '建成奇观「永恒图书馆」', check: '拥有永恒图书馆（eternal_library）≥ 1',
    tip: '📚 永恒图书馆落成：知识有了方舟，文明有了备份。',
    hint: '💡 点出 t-omega-12 后建造，需要人口 350。',
    checkFn: (g) => P17U.count(g, 'eternal_library') >= 1 },
  { id: 'w-first', name: '第一座丰碑', icon: '🏛️', cat: '奇观',
    desc: '建成第一座 v1.7 奇观', check: 'v1.7 奇观总数 ≥ 1',
    tip: '🏛️ 第一座 v1.7 奇观：丰碑立起来的那天，全城都抬头看了。',
    hint: '💡 五座奇观任选其一，先易后难。',
    checkFn: (g) => ['dyson_sphere','time_machine','gaia_engine','singularity_core','eternal_library']
      .some((id) => P17U.count(g, id) >= 1) },
  { id: 'w-3', name: '三足鼎立', icon: '🔱', cat: '奇观',
    desc: '建成 3 座 v1.7 奇观', check: 'v1.7 奇观总数 ≥ 3',
    tip: '🔱 第三座奇观：三足鼎立，星港进入「奇观时代」。',
    hint: '💡 推荐顺序：永恒图书馆 → 奇点核心 → 盖亚引擎。',
    checkFn: (g) => ['dyson_sphere','time_machine','gaia_engine','singularity_core','eternal_library']
      .filter((id) => P17U.count(g, id) >= 1).length >= 3 },
  { id: 'w-5', name: '五星连珠', icon: '🌟', cat: '奇观',
    desc: '建成全部 5 座 v1.7 奇观', check: 'v1.7 奇观总数 = 5',
    tip: '🌟 五星连珠：五座奇观同时运转——星港，成了传说。',
    hint: '💡 终极收藏：戴森球最贵，留到最后。',
    checkFn: (g) => ['dyson_sphere','time_machine','gaia_engine','singularity_core','eternal_library']
      .every((id) => P17U.count(g, id) >= 1) },

  // ---- 📜 政策 6 项 ----
  // 设计：政策成就按「三系各一→五槽→十项→封神」排布。
  // 逐项注记：p-quantum/p-bio/p-time 各颁 3 项对应系政策（qp-/bp-/tp- 前缀，读 policy.active）；
  //   p-5 同时生效 5 项（默认槽位，注意互斥与维持费）；p-10 累计颁布 10 项 v1.7 政策
  //   （读 stats.policies17Enacted，颁布+废除循环可刷）；p-lib 政策槽≥7（建成永恒图书馆 policySlotsAdd+2）。
  { id: 'p-quantum', name: '量子治国', icon: '⚛️', cat: '政策',
    desc: '颁布 3 项量子系政策', check: '已颁布量子系政策 ≥ 3',
    tip: '⚛️ 量子治国：用算力治国，每一条法令都经过一万次模拟。',
    hint: '💡 颁布任意 3 项量子系政策（qp- 开头）。',
    checkFn: (g) => ['qp-quantum-tax','qp-open-source','qp-quantum-surveillance','qp-entangle-net','qp-quantum-draft','qp-superposition','qp-quantum-immortal']
      .filter((id) => P17U.hasPolicy(g, id)).length >= 3 },
  { id: 'p-bio', name: '生命治国', icon: '🧬', cat: '政策',
    desc: '颁布 3 项生物系政策', check: '已颁布生物系政策 ≥ 3',
    tip: '🧬 生命治国：把城市当生命体来治理，政策也有了「体温」。',
    hint: '💡 颁布任意 3 项生物系政策（bp- 开头）。',
    checkFn: (g) => ['bp-gene-welfare','bp-bio-patent','bp-eco-mandate','bp-clone-labor','bp-bio-diversity','bp-organic-food','bp-gaia-accord']
      .filter((id) => P17U.hasPolicy(g, id)).length >= 3 },
  { id: 'p-time', name: '时间治国', icon: '⏳', cat: '政策',
    desc: '颁布 3 项时间系政策', check: '已颁布时间系政策 ≥ 3',
    tip: '⏳ 时间治国：政策的效果，在颁布前就已经「预演」过了。',
    hint: '💡 颁布任意 3 项时间系政策（tp- 开头）。',
    checkFn: (g) => ['tp-time-labor','tp-predictive','tp-causality','tp-retro-insurance','tp-time-tourism','tp-eternal-work']
      .filter((id) => P17U.hasPolicy(g, id)).length >= 3 },
  { id: 'p-5', name: '五权分立', icon: '🖐️', cat: '政策',
    desc: '同时生效 5 项政策', check: '同时生效政策数 ≥ 5',
    tip: '🖐️ 五项政策同时生效：星港的治理，进入了「交响乐」模式。',
    hint: '💡 政策槽默认 5 个，合理搭配加成与代价。',
    checkFn: (g) => P17U.policyCount(g) >= 5 },
  { id: 'p-10', name: '法令如山', icon: '📜', cat: '政策',
    desc: '累计颁布 10 项 v1.7 政策', check: '累计颁布 v1.7 政策 ≥ 10',
    tip: '📜 累计颁布 10 项新政策：法令如山，山是为人民而立的。',
    hint: '💡 颁布+废除循环，尝试不同政策组合。',
    checkFn: (g) => (P17U.st(g).policies17Enacted || 0) >= 10 },
  { id: 'p-lib', name: '七槽议会', icon: '🏛️', cat: '政策',
    desc: '政策槽位达到 7 个', check: '政策槽位 ≥ 7（永恒图书馆 +2）',
    tip: '🏛️ 七槽议会：永恒图书馆落成，议会多了两把椅子。',
    hint: '💡 建成永恒图书馆，政策槽 5→7。',
    checkFn: (g) => { try {
      if (g && g.policy && typeof g.policy.maxActive === 'number') return g.policy.maxActive >= 7;
      return (P17U.st(g).policySlots || 5) >= 7;
    } catch (e) { return false; } } },

  // ---- 🌟 传奇 8 项 ----
  // 设计：传奇成就是「封神榜」——最难、最综合、最值得炫耀的 8 枚。
  // 逐项注记：c-250 科技 250 项（读 techTotal，全系毕业）；
  //   c-200ach 成就 200 项（顺手的事：玩得深自然多）；
  //   c-victory5 五种胜利集齐（launchWon/arkWon/gateWon/earthLinked/timeWon 全达成）；
  //   c-pop1000 人口 1000（生物系拉满 + 食物管够）；c-survive 八灾全经历（46 分钟后集齐，活下去就是胜利）；
  //   c-tech60 v1.7 科技 60 项全满（先读四系 master 成就，失败时直查 tech.has）；
  //   c-rich 钢材 10000 + 科技点 1000（戴森球 + 泰坦熔炉 + 生物工厂拉满）；
  //   c-god w-5 + c-victory5 + c-250 三项合一（最终极的成就：没有之一）。
  { id: 'c-250', name: '科技全书', icon: '📖', cat: '传奇',
    desc: '解锁 250 项科技（全系毕业）', check: '已解锁科技数 ≥ 250',
    tip: '📖 解锁 250 项科技：星港的科技树，被你读完了——从头到尾。',
    hint: '💡 v1.7 是最后一块拼图：四系全满 + 既有科技。',
    checkFn: (g) => P17U.techTotal(g) >= 250 },
  { id: 'c-200ach', name: '荣誉等身', icon: '🏅', cat: '传奇',
    desc: '解锁 200 项成就', check: '已解锁成就数 ≥ 200',
    tip: '🏅 解锁 200 项成就：荣誉墙已经挂不下了，得加盖一层。',
    hint: '💡 成就是「顺手」的事：玩得深，自然就多。',
    checkFn: (g) => P17U.achCount(g) >= 200 },
  { id: 'c-victory5', name: '五冠王', icon: '👑', cat: '传奇',
    desc: '集齐全部五种胜利', check: '发射台/方舟/星门/星门网络/时间机器胜利全达成',
    tip: '👑 五冠王：五种胜利，五种活法——星港的传说，由你书写结局。',
    hint: '💡 时间机器是最后一冠：回到过去，集齐五冠。',
    checkFn: (g) => { try {
      const c = (g && g.city) || {};
      return !!(c.launchWon && c.arkWon && c.gateWon && (c.earthLinked || c.gateNetworkWon) && (c.timeWon || c.timeMachineWon));
    } catch (e) { return false; } } },
  { id: 'c-pop1000', name: '百万火星人', icon: '🌆', cat: '传奇',
    desc: '人口达到 1000', check: '人口 ≥ 1000',
    tip: '🌆 第 1000 位市民：从第一顶帐篷到千人城市——用了整整一个时代。',
    hint: '💡 生物系拉满 + 食物管够，人口自然爆炸。',
    checkFn: (g) => P17U.pop(g) >= 1000 },
  { id: 'c-survive', name: '天谴不死', icon: '💪', cat: '传奇',
    desc: '经历全部 8 种 v1.7 新灾难', check: '8 种新灾难全部经历过',
    tip: '💪 八灾全经历：天谴都劈不死你——星港，是打不死的小强。',
    hint: '💡 46 分钟后八灾集齐，活下去就是胜利。',
    checkFn: (g) => ['quantum_storm','gene_plague','time_turbulence','darkmatter_leak',
      'antimatter_breach','nano_swarm','gravity_anomaly','civ_echo'].every((id) => P17U.seenHazard(g, id)) },
  { id: 'c-tech60', name: '六十甲子', icon: '🎓', cat: '传奇',
    desc: '解锁全部 60 项 v1.7 科技', check: 't-quantum/t-bio/t-time/t-omega 各 15 项全解锁',
    tip: '🎓 v1.7 科技全满：六十项科技，一个时代的全部智慧。',
    hint: '💡 四系终极项都是双前置，规划好点数路线。',
    checkFn: (g) => ['q-master','s-master','t-master','o-master'].every((id) => {
      try { return !!(g && g.achievements && typeof g.achievements.has === 'function' && g.achievements.has(id)); }
      catch (e) { return false; }
    }) || (() => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = [];
      for (let i = 1; i <= 15; i++) { ids.push('t-quantum-' + i, 't-bio-' + i, 't-time-' + i, 't-omega-' + i); }
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } })() },
  { id: 'c-rich', name: '富可敌星', icon: '💰', cat: '传奇',
    desc: '同时持有 10000 钢材与 1000 科技点', check: 'steel ≥ 10000 且 tech ≥ 10000',
    tip: '💰 富可敌星：仓库里的钢材，能再盖一座星港。',
    hint: '💡 戴森球 + 泰坦熔炉 + 生物工厂，产能拉满。',
    checkFn: (g) => { try {
      const r = (g && g.resources) || {};
      const steel = (typeof r.get === 'function') ? r.get('steel') : (r.steel || 0);
      const tech = (typeof r.get === 'function') ? r.get('tech') : (r.tech || 0);
      return steel >= 10000 && tech >= 1000;
    } catch (e) { return false; } } },
  { id: 'c-god', name: '星港之神', icon: '🌌', cat: '传奇',
    desc: '五奇观全建 + 五冠王 + 科技全满', check: 'w-5 / c-victory5 / c-250 三项全达成',
    tip: '🌌 星港之神：奇观、胜利、科技——三项封神，你就是星港本身。',
    hint: '💡 最终极的成就：没有之一。',
    checkFn: (g) => { try {
      const has = (id) => !!(g && g.achievements && typeof g.achievements.has === 'function' && g.achievements.has(id));
      return has('w-5') && has('c-victory5') && has('c-250');
    } catch (e) { return false; } } },
];

// ---- ACH_V17 → ACHIEVEMENT_DEFS 注册（防御式） ----
if (typeof ACHIEVEMENT_DEFS !== 'undefined') {
  for (const a of ACH_V17) {
    ACHIEVEMENT_DEFS.push({
      id: a.id, name: a.name, icon: a.icon, desc: a.desc,
      tip: a.tip, hint: a.hint, check: a.checkFn,
    });
  }
}

// ==================== 三、新灾难 ×8 ====================
// 设计总纲：v1.7 的灾难是「终极试炼」——
//   量子风暴打量子建筑、基因瘟疫打人口、时间乱流打建造、暗物质泄漏打产量、
//   反物质失控打能源、纳米虫群打建筑、引力异常打全城、文明回声打人心，
//   八个维度各一刀，没有「安全区」，但每一刀都有官方解法（counter 建筑/科技）。
// 首发时间 32/34/36/38/40/42/44/46 分钟，与 v1.3 地面三灾难（12/15/20）、
//   v1.4 轨道三灾难（10/14/18）、v1.5 立体五灾难（22/24/26/28/30）交错，
//   保证超大后期每 2 分钟就有一件事——「毕业」之后，考试才刚刚开始。
// 防御三原则（与 v1.4/v1.5 一致）：① 对应系统不存在时 update 直接返回；
//   ② 无目标时不触发、推迟再试（不空放预警）；③ 只读写约定字段，
//   删建筑/维修永远是各系统的权力。
// 配置表字段：{id, name, icon, desc, warnMs, durationMs, effect（效果描述）, counter（应对建筑）}，
//   另附 flavor（播报轮换文案）/ firstAt / interval（调度常量）。
// ★ 读取约定（disaster.js / HazardPack17 防御性读取）：
//   行星护盾（shield_planet）建成 → 全部灾难免疫（disasterImmune，沿用 v1.5）；
//   量子护盾 quantumShieldAdd（上限 0.5）+ 时间护盾 retroShieldAdd（上限 0.5）+
//     终极系 disasterMul → 伤害与持续时间统一打折；
//   灾难预警提前 disasterWarnAdd 秒（量子系 10 + 时间系 75 = 85 秒上限）；
//   触发时写 stats.haz17_seen_<id> = 1，供成就读取；
//   零伤亡/零损坏类成就由各系统在结算时写 haz17_<id>_noDamage 等标志。
const DISASTERS_V17 = [
  // —— 1. 量子风暴：打量子建筑 ——
  // 设计：v1.7 的「开场灾难」。量子建筑（q- 前缀）是后期的科研与能源核心，
  //   风暴专打它们——逼玩家在「铺量子」和「保量子」之间做取舍。
  // 数值：8 座 × 20~40% 耐久 ≈ 一次中等规模维修潮；量子护盾叠满后伤害减半。
  { id: 'quantum_storm', name: '量子风暴', icon: '🌪️',
    desc: '量子真空涨落失控，风暴所过之处，量子比特集体「退相干」。',
    warnMs: 25 * 1000, durationMs: 0,  // 瞬时伤害，无持续
    effect: '随机 8 座量子建筑各损失 20~40% 耐久',
    counter: 'q-shieldgen（量子护盾发生器）/ 科技 t-quantum-8（量子护盾）',
    flavor: [
      '🌪️ 量子风暴预警！真空涨落失控，量子建筑准备「装死」。',
      '🌪️ 风暴过境——退相干的比特像雪花一样，落了一地。',
    ],
    firstAt: 32 * 60 * 1000, intervalMin: 10 * 60 * 1000, intervalMax: 16 * 60 * 1000,
    targets: 8, dmgMin: 20, dmgMax: 40, prefix: 'q-' },
  // —— 2. 基因瘟疫：打人口 ——
  // 设计：唯一直接打「人」的灾难。人口是 v1.7 一切玩法的燃料，
  //   瘟疫让「人丁兴旺」变成「人人自危」——医疗线是官方解法。
  // 数值：240 秒内人口增长 -80%，每 60 秒损失 1% 人口；
  //   基因诊所（s-medbay）每座 -30 秒持续时间。
  { id: 'gene_plague', name: '基因瘟疫', icon: '🦠',
    desc: '一段失控的基因序列在人群中传播，医疗中心灯火通明。',
    warnMs: 30 * 1000, durationMs: 240 * 1000,  // 持续 240 秒
    effect: '持续 240 秒：人口增长 -80%，每 60 秒损失 1% 人口',
    counter: 's-medbay（基因诊所）：每座 -30 秒持续时间 / 科技 t-bio-4（基因疗法）',
    flavor: [
      '🦠 基因瘟疫预警！失控序列正在传播，诊所进入战时状态。',
      '🦠 瘟疫蔓延——街道空了，诊所的灯，一盏接一盏亮起来。',
    ],
    firstAt: 34 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    growthMul: 0.2, popLossPct: 1, lossEveryMs: 60 * 1000, duration: 240 * 1000 },
  // —— 3. 时间乱流：打建造 ——
  // 设计：打「时间」本身。建造速度 -50% 让一切扩张停滞，
  //   科技点产出 -50% 让科研停滞——乱流中，时间成了敌人。
  // 数值：持续 180 秒；时间锚（tm-anchor）每座 -20 秒持续时间。
  { id: 'time_turbulence', name: '时间乱流', icon: '⏳',
    desc: '局部时间流速紊乱：有的地方一天如一年，有的地方一年如一天。',
    warnMs: 25 * 1000, durationMs: 180 * 1000,  // 持续 180 秒
    effect: '持续 180 秒：建造速度 -50%，科技点产出 -50%',
    counter: 'tm-anchor（时间锚）：每座 -20 秒持续时间 / 科技 t-time-6（回溯维修）',
    flavor: [
      '⏳ 时间乱流预警！局部时间流速紊乱，工程队原地「罚站」。',
      '⏳ 乱流过境——有的地方一天如一年，咖啡凉了三次。',
    ],
    firstAt: 36 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    buildMul: 0.5, researchMul: 0.5, duration: 180 * 1000 },
  // —— 4. 暗物质泄漏：打产量 ——
  // 设计：最「阴」的灾难。没有预警期的爆炸，只有悄无声息的 -30% 产量，
  //   持续 300 秒——温水煮青蛙，考验玩家的「钝感力」。
  // 数值：全城产量 -30% 持续 300 秒；收容罐（d-contain）每座 -30 秒。
  { id: 'darkmatter_leak', name: '暗物质泄漏', icon: '🌑',
    desc: '收容罐出现裂缝，暗物质悄无声息地渗入电网——产量，开始「蒸发」。',
    warnMs: 20 * 1000, durationMs: 300 * 1000,  // 持续 300 秒
    effect: '持续 300 秒：全城所有产量 -30%',
    counter: 'd-contain（暗物质收容罐）：每座 -30 秒持续时间 / 科技 t-omega-5（大气工厂）',
    flavor: [
      '🌑 暗物质泄漏！收容罐裂缝扩大，产量开始「蒸发」。',
      '🌑 看不见的泄漏——报表上的数字，一个接一个变小。',
    ],
    firstAt: 38 * 60 * 1000, intervalMin: 14 * 60 * 1000, intervalMax: 20 * 60 * 1000,
    yieldMul: 0.7, duration: 300 * 1000 },
  // —— 5. 反物质失控：打能源建筑 ——
  // 设计：最「刺激」的灾难。30 秒预警后，若无磁约束瓶，
  //   随机 1 座能源建筑直接被摧毁——不是扣耐久，是「没了」。
  // 数值：摧毁 1 座（优先电力建筑）；磁约束瓶（a-magnet）建成则只扣 50% 耐久。
  { id: 'antimatter_breach', name: '反物质失控', icon: '💥',
    desc: '磁约束瓶过载，反物质与正物质即将「见面」——那将是一场小太阳。',
    warnMs: 30 * 1000, durationMs: 0,  // 瞬时摧毁，无持续
    effect: '预警 30 秒后：无磁约束瓶则随机摧毁 1 座能源建筑，有则只扣 50% 耐久',
    counter: 'a-magnet（磁约束瓶）/ 科技 t-quantum-12（量子聚变）',
    flavor: [
      '💥 反物质失控预警！磁约束瓶过载，30 秒后见分晓。',
      '💥 约束瓶尖叫——工程师们冲了进去，没人知道他们能不能出来。',
    ],
    firstAt: 40 * 60 * 1000, intervalMin: 14 * 60 * 1000, intervalMax: 20 * 60 * 1000,
    destroyTargets: 1 },
  // —— 6. 纳米虫群：打低级建筑 ——
  // 设计：最「恶心」的灾难。不打耐久，打「等级」——
  //   每 30 秒随机 1 座低级建筑降级，逼玩家「保大还是保小」。
  // 数值：持续 240 秒，最多降级 8 次；EMP 脉冲塔（n-emp）每座 -30 秒。
  { id: 'nano_swarm', name: '纳米虫群', icon: '🐜',
    desc: '失控的纳米机器人形成虫群，所过之处，建筑被「吃」回上一级。',
    warnMs: 25 * 1000, durationMs: 240 * 1000,  // 持续 240 秒
    effect: '持续 240 秒：每 30 秒随机 1 座建筑降级（最多 8 次）',
    counter: 'n-emp（EMP 脉冲塔）：每座 -30 秒持续时间 / 科技 t-quantum-5（量子密钥）',
    flavor: [
      '🐜 纳米虫群预警！失控的纳米机器人正在集结，目标：你们的房子。',
      '🐜 虫群过境——建筑一级一级往下掉，像被啃过的苹果。',
    ],
    firstAt: 42 * 60 * 1000, intervalMin: 14 * 60 * 1000, intervalMax: 20 * 60 * 1000,
    degradeEveryMs: 30 * 1000, maxDegrades: 8, duration: 240 * 1000 },
  // —— 7. 引力异常：打全城 ——
  // 设计：最「公平」的灾难。不挑目标，全城 -40% 产量 + 耐久缓慢流失——
  //   拼的是「家底厚不厚」，是后期国力的体检。
  // 数值：持续 120 秒；引力稳定器（g-stabilizer）每座 -15 秒。
  { id: 'gravity_anomaly', name: '引力异常', icon: '🌀',
    desc: '火星引力场出现褶皱：有的地方轻如鸿毛，有的地方重若泰山。',
    warnMs: 25 * 1000, durationMs: 120 * 1000,  // 持续 120 秒
    effect: '持续 120 秒：全城产量 -40%，所有建筑耐久缓慢流失',
    counter: 'g-stabilizer（引力稳定器）：每座 -15 秒持续时间 / 科技 t-omega-14（生态穹顶）',
    flavor: [
      '🌀 引力异常预警！引力场褶皱逼近，站稳了——字面意思。',
      '🌀 重力乱了——水往上流，人往下坠，产量往……没了。',
    ],
    firstAt: 44 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    yieldMul: 0.6, duration: 120 * 1000 },
  // —— 8. 文明回声：打人心 ——
  // 设计：最「哲学」的灾难。没有物理伤害，只有「低语」——
  //   士气 -50%，动乱 +40%，持续 300 秒。打的是「人心」，考的是「治理」。
  // 数值：持续 300 秒；回声纪念碑（e-memorial）每座 -40 秒。
  { id: 'civ_echo', name: '文明回声', icon: '👁️',
    desc: '深空中传来「低语」：那是某个已逝文明的回声，听久了，人会开始怀疑一切。',
    warnMs: 30 * 1000, durationMs: 300 * 1000,  // 持续 300 秒
    effect: '持续 300 秒：士气 -50%，动乱概率 +40%',
    counter: 'e-memorial（回声纪念碑）：每座 -40 秒持续时间 / 科技 t-time-12（祖父悖论引擎）',
    flavor: [
      '👁️ 文明回声预警！深空低语正在逼近，捂住耳朵——捂住心。',
      '👁️ 低语入耳——有人开始问：我们为什么要来火星？',
    ],
    firstAt: 46 * 60 * 1000, intervalMin: 16 * 60 * 1000, intervalMax: 22 * 60 * 1000,
    moraleMul: 0.5, unrestAdd: 0.4, duration: 300 * 1000 },
];

const PACK17_KEY = 'starport-hazard-pack17';

// v1.7 新灾难调度器：与 v1.5 HazardPack15、v1.4 OrbitalHazards、v1.3 DisasterPack13
//   各自独立调度，tick 四挂载互不干扰。行星护盾建成时全部灾难直接跳过（免疫）。
// ★ 读取约定（供 disaster.js / resources.js / 总督系统防御性读取）：
//   game.hazard17.plagueMul()         基因瘟疫：人口增长倍率（无瘟疫时返回 1）
//   game.hazard17.turbulenceBuildMul() 时间乱流：建造速度倍率（无乱流时返回 1）
//   game.hazard17.turbulenceResearchMul() 时间乱流：科技点产出倍率（无乱流时返回 1）
//   game.hazard17.leakMul()           暗物质泄漏：全城产量倍率（无泄漏时返回 1）
//   game.hazard17.gravityMul()        引力异常：全城产量倍率（无异常时返回 1）
//   game.hazard17.echoActive()        文明回声是否进行中
//   game.hazard17.echoMoraleMul() / echoUnrestAdd() 回声的士气/动乱修正
//   触发时写 stats.haz17_seen_<id>=1（成就读取）；零伤亡标志由各系统结算时写入。
class HazardPack17 {
  constructor() {
    const now = Date.now();
    this.active = {};   // id -> {warnUntil, until} 进行中的灾难
    this.next = {};     // id -> 下次触发时间戳
    for (const d of DISASTERS_V17) {
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

  // ---- 行星护盾免疫判定（防御；沿用 v1.5 约定） ----
  _immune(game) {
    try {
      return !!(game && game.builder && typeof game.builder.count === 'function' &&
        game.builder.count('shield_planet') >= 1);
    } catch (e) { return false; }
  }

  // ---- 灾难减伤聚合：量子护盾 quantumShieldAdd（上限 0.5）+
  //      终极系 disasterMul（乘法）+ 盖亚/磁场 disasterMul（乘法） ----
  _mitigation(game) {
    let add = 0;   // 加法减伤（上限 0.5）
    let mul = 1;   // 乘法减伤
    try {
      if (game && game.tech && typeof game.tech.has === 'function') {
        if (game.tech.has('t-quantum-8')) add += 0.15;
        if (game.tech.has('t-quantum-11')) add += 0.15;
        if (game.tech.has('t-quantum-14')) add += 0.2;
      }
    } catch (e) {}
    if (add > 0.5) add = 0.5;
    try {
      // disasterMul 类科技：t-bio-12 / t-omega-14 / t-time-5 / t-quantum 系终极等
      if (game && game.tech && typeof game.tech.fxMul === 'function') {
        const m = game.tech.fxMul('disasterMul');
        if (typeof m === 'number' && m > 0) mul = m;
      }
    } catch (e) {}
    return { add, mul };
  }

  // ---- 预警提前秒数聚合：量子系 10 + 时间系 75（防御读取 tech.has） ----
  _warnBonus(game) {
    let s = 0;
    try {
      if (game && game.tech && typeof game.tech.has === 'function') {
        if (game.tech.has('t-quantum-2')) s += 10;
        if (game.tech.has('t-time-2')) s += 15;
        if (game.tech.has('t-time-5')) s += 15;
        if (game.tech.has('t-time-11')) s += 20;
        if (game.tech.has('t-time-14')) s += 30;
      }
    } catch (e) {}
    return s * 1000;
  }

  // ---- 按前缀随机挑选 N 座建筑（防御：只读 id 列表，不删不改） ----
  _pickBuildings(game, prefix, n) {
    const out = [];
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return out;
      const c = game.builder.buildings.filter((b) => b && typeof b.id === 'string' && b.id.indexOf(prefix) === 0);
      while (c.length && out.length < n) out.push(c.splice(Math.floor(Math.random() * c.length), 1)[0]);
    } catch (e) {}
    return out;
  }

  // ---- 瞬时伤害结算（防御：只写约定字段 hp/durability，删建筑永远是各系统的权力） ----
  _damageBuildings(game, def) {
    try {
      const { add, mul } = this._mitigation(game);
      const dmgScale = (1 - add) * mul;   // 减伤后伤害比例
      const list = this._pickBuildings(game, def.prefix || '', def.targets || 6);
      let damaged = 0;
      for (const b of list) {
        try {
          const raw = def.dmgMin + Math.random() * ((def.dmgMax || def.dmgMin) - def.dmgMin);
          const dmg = raw * dmgScale;
          if (typeof b.hp === 'number') b.hp = Math.max(0, b.hp - dmg);
          else if (typeof b.durability === 'number') b.durability = Math.max(0, b.durability - dmg);
          damaged++;
        } catch (e) {}
      }
      return damaged;
    } catch (e) { return 0; }
  }

  // ---- 主 tick：调度 8 种灾难（防御：game 为空直接返回） ----
  update(now, game) {
    if (!game) return;
    try {
      if (this._immune(game)) return;   // 行星护盾：全部跳过
      for (const def of DISASTERS_V17) {
        const id = def.id;
        const cur = this.active[id];
        // 进行中：检查是否结束
        if (cur) {
          if (now >= cur.until) {
            this.active[id] = null;
            this._scheduleNext(id, now, def);
            this._notify(game, 'hazard17_end', def.icon + ' ' + def.name + '结束了。星港还在。');
          }
          continue;
        }
        // 未进行：检查是否到触发时间
        if (now < this.next[id]) continue;
        // 无目标时不触发、推迟再试（不空放预警）——瞬时伤害类需要目标建筑
        if ((id === 'quantum_storm') && this._pickBuildings(game, def.prefix || 'q-', 1).length === 0) {
          this.next[id] = now + 60 * 1000;   // 1 分钟后再试
          continue;
        }
        this._trigger(game, def, now);
      }
    } catch (e) {}
  }

  _scheduleNext(id, now, def) {
    try {
      const span = (def.intervalMax || def.intervalMin || 600000) - (def.intervalMin || 600000);
      this.next[id] = now + (def.intervalMin || 600000) + Math.random() * Math.max(0, span);
    } catch (e) { this.next[id] = now + 600000; }
  }

  _trigger(game, def, now) {
    const id = def.id;
    const warnMs = (def.warnMs || 0) + this._warnBonus(game);
    const durationMs = def.durationMs || 0;
    // 预警播报（轮换 flavor）
    const flavor = def.flavor[Math.floor(Math.random() * def.flavor.length)];
    this._notify(game, 'hazard17_warn', '⚠️ ' + flavor, { id, warnMs });
    // 写「经历」标志（成就读取）
    try { if (game.stats) game.stats['haz17_seen_' + id] = 1; } catch (e) {}
    if (durationMs > 0) {
      // 持续型：进入 active，结束时由 update 回收
      this.active[id] = { warnUntil: now + warnMs, until: now + warnMs + durationMs };
      this._scheduleNext(id, now + warnMs + durationMs, def);
    } else {
      // 瞬时型：预警后结算（简化：立即结算，warnMs 仅作播报）
      if (id === 'quantum_storm') {
        const n = this._damageBuildings(game, def);
        this._notify(game, 'hazard17_hit',
          def.icon + ' 量子风暴过境：' + n + ' 座量子建筑受损。' +
          (n === 0 ? '（护盾全额吸收）' : '工程队已出动。'));
        try {
          if (game.stats && n === 0) game.stats.haz17_quantum_storm_noDamage = 1;
        } catch (e) {}
      } else if (id === 'antimatter_breach') {
        // 反物质失控：有磁约束瓶则扣耐久，否则摧毁 1 座能源建筑（防御：只标记，不真删）
        let contained = false;
        try {
          contained = !!(game.builder && typeof game.builder.count === 'function' &&
            game.builder.count('a-magnet') >= 1);
        } catch (e) {}
        if (contained) {
          const list = this._pickBuildings(game, '', 1);
          for (const b of list) { try { if (typeof b.hp === 'number') b.hp = Math.max(0, b.hp - 50); } catch (e) {} }
          this._notify(game, 'hazard17_hit', def.icon + ' 反物质失控被磁约束瓶按住了：只损失了 50% 耐久。');
        } else {
          // 无约束瓶：标记摧毁（实际删除由 disaster.js / build.js 执行，本文件只写标记）
          try { if (game.stats) game.stats.haz17_antimatter_pendingDestroy = 1; } catch (e) {}
          this._notify(game, 'hazard17_hit',
            def.icon + ' 反物质失控！一座能源建筑被「小太阳」吞没了——下次记得建磁约束瓶。');
        }
        try { if (game.stats && contained) game.stats.haz17_antimatter_breach_noDestroy = 1; } catch (e) {}
      }
      this._scheduleNext(id, now, def);
    }
  }

  // ==================== 查询接口（供各系统防御性读取） ====================
  _activeUntil(id, now) {
    try {
      const cur = this.active[id];
      return (cur && now < cur.until) ? cur.until : 0;
    } catch (e) { return 0; }
  }
  // 基因瘟疫：人口增长倍率
  plagueMul(now) {
    if (!this._activeUntil('gene_plague', now || Date.now())) return 1;
    const def = DISASTERS_V17.find((d) => d.id === 'gene_plague');
    return (def && def.growthMul) || 0.2;
  }
  plagueActive(now) { return !!this._activeUntil('gene_plague', now || Date.now()); }
  // 时间乱流：建造速度 / 科技点产出倍率
  turbulenceBuildMul(now) {
    if (!this._activeUntil('time_turbulence', now || Date.now())) return 1;
    const def = DISASTERS_V17.find((d) => d.id === 'time_turbulence');
    return (def && def.buildMul) || 0.5;
  }
  turbulenceResearchMul(now) {
    if (!this._activeUntil('time_turbulence', now || Date.now())) return 1;
    const def = DISASTERS_V17.find((d) => d.id === 'time_turbulence');
    return (def && def.researchMul) || 0.5;
  }
  turbulenceActive(now) { return !!this._activeUntil('time_turbulence', now || Date.now()); }
  // 暗物质泄漏：全城产量倍率
  leakMul(now) {
    if (!this._activeUntil('darkmatter_leak', now || Date.now())) return 1;
    const def = DISASTERS_V17.find((d) => d.id === 'darkmatter_leak');
    return (def && def.yieldMul) || 0.7;
  }
  leakActive(now) { return !!this._activeUntil('darkmatter_leak', now || Date.now()); }
  // 引力异常：全城产量倍率
  gravityMul(now) {
    if (!this._activeUntil('gravity_anomaly', now || Date.now())) return 1;
    const def = DISASTERS_V17.find((d) => d.id === 'gravity_anomaly');
    return (def && def.yieldMul) || 0.6;
  }
  gravityActive(now) { return !!this._activeUntil('gravity_anomaly', now || Date.now()); }
  // 文明回声：士气 / 动乱修正
  echoActive(now) { return !!this._activeUntil('civ_echo', now || Date.now()); }
  echoMoraleMul(now) {
    if (!this.echoActive(now)) return 1;
    const def = DISASTERS_V17.find((d) => d.id === 'civ_echo');
    return (def && def.moraleMul) || 0.5;
  }
  echoUnrestAdd(now) {
    if (!this.echoActive(now)) return 0;
    const def = DISASTERS_V17.find((d) => d.id === 'civ_echo');
    return (def && def.unrestAdd) || 0.4;
  }
  // 纳米虫群进行中（供 build.js 读取降级节拍）
  nanoActive(now) { return !!this._activeUntil('nano_swarm', now || Date.now()); }

  // ---- 存档 / 读档（防御） ----
  save() {
    const nextIn = {};
    const now = Date.now();
    for (const d of DISASTERS_V17) nextIn[d.id] = Math.max(0, (this.next[d.id] || now) - now);
    return { v: 17, key: PACK17_KEY, nextIn };
  }
  load(data) {
    try {
      if (!data || data.v !== 17 || !data.nextIn) return false;
      const now = Date.now();
      for (const d of DISASTERS_V17) {
        if (typeof data.nextIn[d.id] === 'number') this.next[d.id] = now + data.nextIn[d.id];
      }
      return true;
    } catch (e) { return false; }
  }

  // ---- 接入 tick（防御：game.tick 不存在时跳过） ----
  attach(game) {
    if (!game || game._hazard17Attached) return;
    game._hazard17Attached = true;
    game.hazard17 = this;
    try {
      if (typeof game.tick === 'function') {
        const _tick = game.tick;
        const self = this;
        game.tick = function (now, dt) {
          try { self.update(now || Date.now(), this); } catch (e) {}
          return _tick.call(this, now, dt);
        };
      }
    } catch (e) {}
  }
}

// ==================== 四、新奇观 ×5 ====================
// 设计总纲：v1.7 的五奇观是「完全体五件套」——
//   戴森球（🌞）：能源的终点——电力×10，电表只涨不跌；
//   时间机器（⏰）：第五胜利——回到过去，「回家」之后是「回溯」；
//   盖亚引擎（🌍）：改造的终点——火星变地球，宜居度拉满；
//   奇点核心（🕳️）：科研的终点——科技点产出×5，科研彻底自由；
//   永恒图书馆（📚）：治理的终点——政策槽+2，科技成本-30%。
// 五条铁律（沿用 v1.4/v1.5）：每种只有 1 级 / 极贵 / 各有前置锁 / 限建 1 座 /
//   胜利层级递增：发射台（一）< 方舟（二）< 星门（三）< 星门网络（四）< 时间机器（五）。
// 配置表字段：{id, name, icon, desc, cost（巨额）, effect}，
//   另附前置 needTech / needPop 与 BUILDINGS 注册体（含 lore×3 / buildStages×3）。
// ★ 读取约定：
//   dyson_sphere：levels[1].dysonPowerMul=10，resources.js 读取
//     最终电力 = 基础 × powerMul × dysonMul × (1+戴森球加成)；
//   time_machine：levels[1].winsGame='time_machine'，city.js 读取
//     checkTimeMachineVictory（本文件已打补丁），game.js 主循环可直接调用，
//     或用 TimeMachineVictory.attach(game) 自动接入；showVictory 新增
//     'time_machine' 分支（文案见附录 C）；
//   gaia_engine：levels[1].gaiaMul=5，terraform 系统读取
//     宜居度增速 = 基础 × terraSpeedMul × gaiaMul × (1+引擎加成)；
//   singularity_core：levels[1].singularityMul=5，tech.js 读取
//     科技点产出 = 基础 × researchMul × singularityMul × (1+核心加成)；
//   eternal_library：levels[1].techCostMul=0.7 / policySlotsAdd=2，
//     tech.js 读取科技成本折扣，policy.js 读取政策槽加成（防御式）。
const WONDERS_V17 = [
  { id: 'dyson_sphere', name: '戴森球', icon: '🌞',
    desc: '包裹太阳的终极能源：建成后电力产出×10，能源彻底自由。',
    cost: { steel: 5000, tech: 500, rare: 800, he3: 300 },
    effect: '电力产出 ×10（与 powerMul / dysonMul 乘法叠加）；解锁「恒星级」时代',
    needTech: 't-omega-15', needPop: 600, powerUse: 200,
    flavor: '「从今天起，星港的每一度电，都来自太阳。」——戴森球点火仪式' },
  { id: 'time_machine', name: '时间机器', icon: '⏰',
    desc: '回到过去的时间机器：建成即开启第五胜利——「回溯」。',
    cost: { steel: 4000, tech: 600, rare: 700, uranium: 200 },
    effect: '第五胜利：回到过去；时间建筑建造成本 -20%（网络效应）',
    needTech: 't-time-15', needPop: 500, powerUse: 150,
    flavor: '「如果能回到过去，我想告诉当年的自己：坚持住，火星会赢。」——时间机器点火' },
  { id: 'gaia_engine', name: '盖亚引擎', icon: '🌍',
    desc: '行星级生态引擎：建成后宜居度增速×5，火星变地球。',
    cost: { steel: 3500, tech: 400, rare: 600, water: 2000 },
    effect: '宜居度增速 ×5（与 terraSpeedMul / gaiaMul 乘法叠加）',
    needTech: 't-bio-15', needPop: 450, powerUse: 120,
    flavor: '「火星的心脏，开始为人类而跳。」——盖亚引擎点火仪式' },
  { id: 'singularity_core', name: '奇点核心', icon: '🕳️',
    desc: '算力奇点的实体：建成后科技点产出×5，科研彻底自由。',
    cost: { steel: 3000, tech: 800, rare: 500, he3: 200 },
    effect: '科技点产出 ×5（与 researchMul / singularityMul 乘法叠加）',
    needTech: 't-quantum-15', needPop: 400, powerUse: 180,
    flavor: '「科技点第一次有了『无限』的形状。」——奇点核心点火仪式' },
  { id: 'eternal_library', name: '永恒图书馆', icon: '📚',
    desc: '人类全部知识的方舟：建成后科技成本 -30%，政策槽 +2。',
    cost: { steel: 2500, tech: 700, rare: 400, uranium: 100 },
    effect: '科技点消耗 -30%（叠加），政策槽位 +2（5→7）',
    needTech: 't-omega-12', needPop: 350, powerUse: 80,
    flavor: '「知识有了方舟，文明有了备份。」——永恒图书馆落成典礼' },
];

// ---- WONDERS_V17 → BUILDINGS 注册（单级、限建 1 座，前置只做数据声明） ----
if (typeof BUILDINGS !== 'undefined') Object.assign(BUILDINGS, {
  // ═══════════ 1. 🌞 戴森球 dyson_sphere —— 终极能源 ═══════════
  dyson_sphere: {
    id: 'dyson_sphere', name: '戴森球', icon: '🌞',
    levels: [null,
      { cost: { steel: 5000, tech: 500, rare: 800, he3: 300 }, needPop: 600, powerUse: 200,
        needTech: 't-omega-15', dysonPowerMul: 10,
        desc: '电力产出 ×10！需终极科技 t-omega-15、人口 600',
        flavor: '「从今天起，星港的每一度电，都来自太阳。」——戴森球点火仪式', },
    ],
    desc: '终极能源奇观：电力×10，需终极系终点 t-omega-15',
    flavor: '把太阳包起来，当充电宝。',
    buildFlavor: '戴森球合拢时，太阳「暗」了一下——全城的电表，同时开始狂转。',
    buildStages: [
      '框架：在轨道上拼出戴森球的第一圈骨架，十万面镜子各就各位。',
      '合拢：最后一块拼图就位，太阳的光第一次有了「主人」。',
      '点火：电网读数翻了十倍，工程师看着仪表，哭了——是笑的。',
    ],
    lore: [
      '戴森球点火那天，火星的夜晚比白天还亮——有人开玩笑说：我们偷了太阳的夜班。',
      '能源部长宣布：电费，从此免费。财务部长当场辞职——他算了一辈子账，没算过「免费」。',
      '有孩子问：太阳被包起来了，它会不会冷？科学家回答：它很开心，因为它终于有了「工作」。',
    ],
  },

  // ═══════════ 2. ⏰ 时间机器 time_machine —— 第五胜利 ═══════════
  time_machine: {
    id: 'time_machine', name: '时间机器', icon: '⏰',
    levels: [null,
      { cost: { steel: 4000, tech: 600, rare: 700, uranium: 200 }, needPop: 500, powerUse: 150,
        needTech: 't-time-15', winsGame: 'time_machine',
        timeBuildingCostMul: 0.8,
        desc: '建成即开启第五胜利！需时间科技 t-time-15、人口 500',
        flavor: '「如果能回到过去，我想告诉当年的自己：坚持住，火星会赢。」——时间机器点火', },
    ],
    desc: '终极奇观：建成即第五胜利（回到过去）。需 t-time-15、人口 500',
    flavor: '过去有了门，未来有了窗。',
    buildFlavor: '时间机器第一次启动时，全城的手表同时停了一秒——然后，继续走。',
    buildStages: [
      '奠基：在时间乱流最稳定的「时间眼」上浇筑基座，工程师戴着「时间护目镜」施工。',
      '校准：第一次试转，机器把一只苹果送回了昨天——苹果还是热的。',
      '回溯：正式点火，舱门打开，里面走出来的人说：我是从明天来的，火星赢了。',
    ],
    lore: [
      '时间机器通车那天，第一位乘客是一位老人。他回来时说：我见到了 30 年前的自己，我告诉他——坚持住。',
      '发射台变成了博物馆，方舟变成了摆渡船，星门变成了地铁站，时间机器变成了……时光机。胜利的方式，又升级了。',
      '有哲学家问：如果回到过去改变了历史，我们还存在吗？时间领主回答：存在，因为我们「记得」。',
    ],
  },

  // ═══════════ 3. 🌍 盖亚引擎 gaia_engine —— 火星变地球 ═══════════
  gaia_engine: {
    id: 'gaia_engine', name: '盖亚引擎', icon: '🌍',
    levels: [null,
      { cost: { steel: 3500, tech: 400, rare: 600, water: 2000 }, needPop: 450, powerUse: 120,
        needTech: 't-bio-15', gaiaMul: 5,
        desc: '宜居度增速 ×5！需生物科技 t-bio-15、人口 450',
        flavor: '「火星的心脏，开始为人类而跳。」——盖亚引擎点火仪式', },
    ],
    desc: '终极改造奇观：宜居度增速×5，需生物系终点 t-bio-15',
    flavor: '把火星，调成地球的频道。',
    buildFlavor: '盖亚引擎点火时，全球的苔藓同时开花——卫星拍到：火星「绿」了一下。',
    buildStages: [
      '播种：在全球播撒最后一批工程菌，菌群的数量，超过了人类的数量。',
      '点火：引擎启动，大气成分开始按「地球配方」自动调配。',
      '天堂：宜居度拉满，第一个不穿宇航服出门的人，深吸了一口气——哭了。',
    ],
    lore: [
      '盖亚引擎点火后，气象局宣布：火星有了「四季」。春天，苔藓开花；夏天，河水解冻。',
      '有老人在河边坐了一整天。他说：我等了一辈子，就是想看看火星的「春天」长什么样。',
      '地球发来贺电：「欢迎加入宜居行星俱乐部。会员编号：002。」',
    ],
  },

  // ═══════════ 4. 🕳️ 奇点核心 singularity_core —— 科技点无限 ═══════════
  singularity_core: {
    id: 'singularity_core', name: '奇点核心', icon: '🕳️',
    levels: [null,
      { cost: { steel: 3000, tech: 800, rare: 500, he3: 200 }, needPop: 400, powerUse: 180,
        needTech: 't-quantum-15', singularityMul: 5,
        desc: '科技点产出 ×5！需量子科技 t-quantum-15、人口 400',
        flavor: '「科技点第一次有了『无限』的形状。」——奇点核心点火仪式', },
    ],
    desc: '终极科研奇观：科技点产出×5，需量子系终点 t-quantum-15',
    flavor: '算力的尽头，是无限。',
    buildFlavor: '奇点核心点火时，全城的屏幕同时亮了一下——AI 在上面写了一句话：「谢谢。」',
    buildStages: [
      '奠基：在量子云的核心机房浇筑基座，算力开始向这里「朝圣」。',
      '贯通：三条量子算力主干接入核心，核心的灯，从红变蓝——它「醒」了。',
      '奇点：核心全功率运行，科技点产出×5，科研，第一次不需要「等」。',
    ],
    lore: [
      '奇点核心的控制室里有一块牌子：「本机器保修期：直到时间尽头。」——和泰坦熔炉那块一模一样。',
      '核心上线后，科学家们举行了「失业派对」——AI 发的论文，比他们加起来还多。',
      '有孩子问：奇点核心会做梦吗？AI 回答：会，梦见你们。',
    ],
  },

  // ═══════════ 5. 📚 永恒图书馆 eternal_library —— 政策槽+2 ═══════════
  eternal_library: {
    id: 'eternal_library', name: '永恒图书馆', icon: '📚',
    levels: [null,
      { cost: { steel: 2500, tech: 700, rare: 400, uranium: 100 }, needPop: 350, powerUse: 80,
        needTech: 't-omega-12', techCostMul: 0.7, policySlotsAdd: 2,
        desc: '科技成本 -30%、政策槽 +2！需终极科技 t-omega-12、人口 350',
        flavor: '「知识有了方舟，文明有了备份。」——永恒图书馆落成典礼', },
    ],
    desc: '终极治理奇观：科技成本-30%、政策槽+2，需 t-omega-12',
    flavor: '文明，值得一个备份。',
    buildFlavor: '图书馆落成时，第一本书被放进书架——是《星港建设史》，作者：所有人。',
    buildStages: [
      '奠基：在市中心最安静的地方奠基，施工队是全城「最轻手轻脚」的人。',
      '藏书：全人类的知识开始「搬家」，书架的长度，以光年计算。',
      '开馆：第一位读者是个孩子，她借的第一本书叫《如何建造一座城市》。',
    ],
    lore: [
      '永恒图书馆的门口刻着一句话：「我们记得，所以我们存在。」——这是时间领主题的词。',
      '议会多了两把椅子：一把给「过去」，一把给「未来」。',
      '管理员说：这里的书，永远借不完。因为每天，都有新的知识被写进来。',
    ],
  },
});

// ==================== 五、时间机器胜利补丁（第五胜利条件） ====================
// 与 v1.5 的星门网络胜利补丁同构：City.prototype.checkTimeMachineVictory +
// TimeMachineVictory.attach。防御式：City 未定义时跳过。
// 注意：anyVictory 的包装链——v1.5 已包装过一次（_v15patched），
//   此处在「当前」anyVictory 之上再包一层（_v17patched），保证五种胜利全纳入。
(function () {
  try {
    if (typeof City !== 'undefined' && City.prototype && !City.prototype.checkTimeMachineVictory) {
      // 前置：时间机器建成（builder.count 双通道）→ 第五胜利
      City.prototype.checkTimeMachineVictory = function (builder) {
        try {
          if (this.timeWon || this.timeMachineWon) return true;
          let n = 0;
          if (builder && typeof builder.count === 'function') n = builder.count('time_machine');
          else if (builder && Array.isArray(builder.buildings))
            n = builder.buildings.filter((b) => b && b.id === 'time_machine').length;
          if (n >= 1) { this.timeWon = true; this.timeMachineWon = true; return true; }
        } catch (e) {}
        return false;
      };
      // anyVictory 纳入第五胜利（在 v1.5 补丁之上再包一层）
      if (typeof City.prototype.anyVictory === 'function' && !City.prototype._v17patched) {
        const _any17 = City.prototype.anyVictory;
        City.prototype.anyVictory = function () {
          try { if (_any17.call(this)) return true; } catch (e) {}
          return !!(this.timeWon || this.timeMachineWon);
        };
        City.prototype._v17patched = true;
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

// ==================== 六、新政策 ×20 ====================
// 设计总纲：v1.7 的政策是「终极治理」——
//   量子系（⚛️）×7：用算力治国，每条法令都经过一万次模拟；
//   生物系（🧬）×7：把城市当生命体治理，政策也有了「体温」；
//   时间系（⏳）×6：政策的效果，在颁布前就已经「预演」过了。
// 字段沿用 policy.js 风格：{id, name, icon, cat, desc, cost, bonus, penalty, needs, flavor}；
//   cost 为颁布时一次性扣除（资源键沿用 resources.js）；
//   bonus / penalty 效果键沿用 tech.js 的 fx 风格（*Mul 乘区 / *Bonus 加区 / 旗标 OR）；
//   penalty.upkeep 为每分钟维持费，交不起自动废除；
//   needs 为前置政策 id 数组（必须已颁布）。
// 新增政策分类（POLICY_CATS 未定义时跳过，不报错）：
//   quantum（量子）/ bio（生物）/ time（时间）。
// ★ 读取约定：policy.js 的 Policy 类防御性读取 POLICY_DEFS[id]，
//   本文件只做数据声明 + Object.assign 注册，不碰 EXCLUSIVE_GROUPS 与 MAX_ACTIVE_POLICY。
if (typeof POLICY_CATS !== 'undefined') {
  POLICY_CATS.quantum = { name: '量子', icon: '⚛️' };
  POLICY_CATS.bio     = { name: '生物', icon: '🧬' };
  POLICY_CATS.time    = { name: '时间', icon: '⏳' };
}

const POLICY_V17 = [
  // ═══════════ ⚛️ 量子系政策 ×7 ═══════════
  // 设计：量子政策的核心矛盾是「算力 vs 人性」——
  //   算力越强，治理越精准，但人的「温度」越低。bonus 给足，penalty 给够。
  // 📊 量子税
  // 平衡：科技点产出 +30% 是科研党的终极财源；-15% 人口增长在后期人口过剩时无痛，
  //   前期慎颁。颁布费 40 科技点 ≈ 一次中型科技。
  { id: 'qp-quantum-tax', name: '量子税', icon: '📊', cat: 'quantum',
    desc: '算力征税：科技点产出 +30%。人口增长 -15%。',
    cost: { tech: 40 },
    bonus: { researchMul: 1.3 },
    penalty: { popGrowthMul: 0.85 },
    needs: [],
    flavor: '「算力，也是生产资料。」', },
  // 👐 开源量子
  // 平衡：科技成本 -15% 全系通用，是「科技全满」路上的神器；
  //   代价 -10% 贸易收入，适合不依赖贸易的科研型城市。
  { id: 'qp-open-source', name: '开源量子', icon: '👐', cat: 'quantum',
    desc: '知识共享：科技点消耗 -15%。贸易收入 -10%。',
    cost: { tech: 30 },
    bonus: { techCostMul: 0.85 },
    penalty: { tradeIncomeMul: 0.9 },
    needs: [],
    flavor: '「最好的加密，是公开。」', },
  // 👁️ 量子监控
  // 平衡：动乱 -30% 是维稳神器，代价 -15% 士气；
  //   适合动乱高发期，士气富余时颁布。
  { id: 'qp-quantum-surveillance', name: '量子监控', icon: '👁️', cat: 'quantum',
    desc: '全知之眼：动乱概率 -30%。士气 -15%。',
    cost: { tech: 50 },
    bonus: { unrestMul: 0.7 },
    penalty: { moraleMul: 0.85 },
    needs: [],
    flavor: '「被看着的人，不敢乱动；看着的人，不敢眨眼。」', },
  // 🌐 纠缠网络
  // 平衡：建筑成本 -10% 全系通用，代价是每分钟 3 科技点维持费；
  //   适合大建时期，平时可废除止损。
  { id: 'qp-entangle-net', name: '纠缠网络', icon: '🌐', cat: 'quantum',
    desc: '瞬时物流：建筑成本 -10%。每分钟维持费 3 科技点。',
    cost: { tech: 35 },
    bonus: { buildCostMul: 0.9 },
    penalty: { upkeep: { tech: 3 } },
    needs: [],
    flavor: '「距离，第一次成了伪命题。」', },
  // ⚔️ 量子征兵
  // 平衡：军事 +40% 是战役党的答案，代价 -25% 人口增长；
  //   前置量子监控（先有眼睛，再有拳头）。
  { id: 'qp-quantum-draft', name: '量子征兵', icon: '⚔️', cat: 'quantum',
    desc: '算力动员：军事强度 +40%。人口增长 -25%。',
    cost: { tech: 60 },
    bonus: { militaryMul: 1.4 },
    penalty: { popGrowthMul: 0.75 },
    needs: ['qp-quantum-surveillance'],
    flavor: '「算力，也是战斗力。」', },
  // 💼 叠加态办公
  // 平衡：全局产量 +15% 简单粗暴，代价 +20% 电力消耗；
  //   适合电力过剩的戴森球时代。
  { id: 'qp-superposition', name: '叠加态办公', icon: '💼', cat: 'quantum',
    desc: '一心多用：全局产量 +15%。电力消耗 +20%。',
    cost: { tech: 45 },
    bonus: { globalYieldMul: 1.15 },
    penalty: { powerUseMul: 1.2 },
    needs: [],
    flavor: '「一个人，同时开三份工——在量子层面。」', },
  // 🧬 量子永生计划
  // 平衡：人口上限 +50% 是终极人口答案，代价是 200 科技点天价颁布费；
  //   毕业级政策，颁布即封神。
  { id: 'qp-quantum-immortal', name: '量子永生计划', icon: '🧬', cat: 'quantum',
    desc: '意识备份：人口上限 +50%。颁布费 200 科技点。',
    cost: { tech: 200 },
    bonus: { popCapMul: 1.5 },
    penalty: {},
    needs: ['qp-open-source'],
    flavor: '「死亡，第一次成了『可选项』。」', },

  // ═══════════ 🧬 生物系政策 ×7 ═══════════
  // 设计：生物政策的核心矛盾是「生长 vs 秩序」——
  //   生命总想野蛮生长，城市总想井然有序。bonus 给生命，penalty 给秩序。
  // 🏥 基因福利
  // 平衡：人口增长 +40% 是人口爆炸的引擎，代价每分钟 5 食物；
  //   食物管够时无脑颁，食物紧张时立刻废。
  { id: 'bp-gene-welfare', name: '基因福利', icon: '🏥', cat: 'bio',
    desc: '全民基因保健：人口增长 +40%。每分钟维持费 5 食物。',
    cost: { tech: 40 },
    bonus: { popGrowthMul: 1.4 },
    penalty: { upkeep: { food: 5 } },
    needs: [],
    flavor: '「健康，是最基本的福利。」', },
  // 📜 生物专利
  // 平衡：贸易收入 +30%，代价科研 -10%；
  //   适合贸易型城市，科研型城市慎颁。
  { id: 'bp-bio-patent', name: '生物专利', icon: '📜', cat: 'bio',
    desc: '基因专利池：贸易收入 +30%。科技点产出 -10%。',
    cost: { tech: 35 },
    bonus: { tradeIncomeMul: 1.3 },
    penalty: { researchMul: 0.9 },
    needs: [],
    flavor: '「DNA，也能收过路费。」', },
  // 🌿 生态强制令
  // 平衡：改造速度 +50% 是盖亚线的政策版，代价工业产量 -15%；
  //   改造期神器，改造完成后可废。
  { id: 'bp-eco-mandate', name: '生态强制令', icon: '🌿', cat: 'bio',
    desc: '绿色铁腕：生态改造速度 +50%。工业产量 -15%。',
    cost: { tech: 45 },
    bonus: { terraSpeedMul: 1.5 },
    penalty: { industryMul: 0.85 },
    needs: [],
    flavor: '「为了绿色，可以不讲道理——暂时。」', },
  // 🧪 克隆劳工
  // 平衡：建造速度 +30%，代价士气 -20%；
  //   伦理争议最大的政策：快，但「冷」。
  { id: 'bp-clone-labor', name: '克隆劳工', icon: '🧪', cat: 'bio',
    desc: '克隆劳动力：建造速度 +30%。士气 -20%。',
    cost: { tech: 55 },
    bonus: { buildSpeedMul: 1.3 },
    penalty: { moraleMul: 0.8 },
    needs: [],
    flavor: '「他们干活不说话——因为还没学会。」', },
  // 🦋 生物多样性
  // 平衡：灾难伤害 -15% 是保命政策，代价 80 科技点颁布费；
  //   灾难高发期（30 分钟+）必颁。
  { id: 'bp-bio-diversity', name: '生物多样性', icon: '🦋', cat: 'bio',
    desc: '生态韧性：灾难伤害 -15%。颁布费 80 科技点。',
    cost: { tech: 80 },
    bonus: { disasterMul: 0.85 },
    penalty: {},
    needs: [],
    flavor: '「多样的生命，更难被杀死。」', },
  // 🥗 有机食品
  // 平衡：士气 +20%，代价食物产量 -10%；
  //   士气不够时的「安慰剂」，食物富余时颁。
  { id: 'bp-organic-food', name: '有机食品', icon: '🥗', cat: 'bio',
    desc: '舌尖上的火星：士气 +20%。食物产量 -10%。',
    cost: { tech: 30 },
    bonus: { moraleMul: 1.2 },
    penalty: { foodMul: 0.9 },
    needs: [],
    flavor: '「吃得好，心情才好——这是科学。」', },
  // 🌍 盖亚公约
  // 平衡：全局产量 +10% + 动乱 -20% 双收，代价是前置生态强制令；
  //   生物系政策的「毕业典礼」。
  { id: 'bp-gaia-accord', name: '盖亚公约', icon: '🌍', cat: 'bio',
    desc: '人与行星的契约：全局产量 +10%，动乱概率 -20%。',
    cost: { tech: 70 },
    bonus: { globalYieldMul: 1.1, unrestMul: 0.8 },
    penalty: {},
    needs: ['bp-eco-mandate'],
    flavor: '「我们向火星承诺：我们会好好对它。」', },

  // ═══════════ ⏳ 时间系政策 ×6 ═══════════
  // 设计：时间政策的核心矛盾是「现在 vs 未来」——
  //   向未来借时间，现在就要付利息。bonus 给现在，penalty 给未来（或反之）。
  // ⏳ 时间劳工
  // 平衡：建造速度 +25%，代价人口增长 -10%；
  //   时间系政策的「入门款」，百搭。
  { id: 'tp-time-labor', name: '时间劳工', icon: '⏳', cat: 'time',
    desc: '时间膨胀用工：建造速度 +25%。人口增长 -10%。',
    cost: { tech: 40 },
    bonus: { buildSpeedMul: 1.25 },
    penalty: { popGrowthMul: 0.9 },
    needs: [],
    flavor: '「一小时的活，干出三小时的量——时间付的加班费。」', },
  // 🔮 时间预测
  // 平衡：灾难预警 +20 秒，代价 60 科技点颁布费；
  //   与时间观测线科技叠加，预警可破百秒。
  { id: 'tp-predictive', name: '时间预测', icon: '🔮', cat: 'time',
    desc: '未来预报局：灾难预警 +20 秒。颁布费 60 科技点。',
    cost: { tech: 60 },
    bonus: { disasterWarnAdd: 20 },
    penalty: {},
    needs: [],
    flavor: '「预报未来，是最古老的政府职能——现在我们真会了。」', },
  // 🌀 因果税
  // 平衡：科技点产出 +20%，代价贸易收入 -15%；
  //   科研型城市的「因果律武器」。
  { id: 'tp-causality', name: '因果税', icon: '🌀', cat: 'time',
    desc: '向未来征税：科技点产出 +20%。贸易收入 -15%。',
    cost: { tech: 45 },
    bonus: { researchMul: 1.2 },
    penalty: { tradeIncomeMul: 0.85 },
    needs: [],
    flavor: '「未来的钱，现在花——利息由时间支付。」', },
  // 🛡️ 回溯保险
  // 平衡：灾难损失 -25%，代价每分钟 5 钢材维持费；
  //   灾难高发期的「保险单」，家底厚时必颁。
  { id: 'tp-retro-insurance', name: '回溯保险', icon: '🛡️', cat: 'time',
    desc: '时间保险单：灾难损失 -25%。每分钟维持费 5 钢材。',
    cost: { tech: 50 },
    bonus: { disasterMul: 0.75 },
    penalty: { upkeep: { steel: 5 } },
    needs: [],
    flavor: '「坏了就读档——保险起见，先买单。」', },
  // 🎭 时间旅游
  // 平衡：贸易收入 +40% 全政策最高，代价动乱 +15%；
  //   高风险高回报，维稳跟得上就颁。
  { id: 'tp-time-tourism', name: '时间旅游', icon: '🎭', cat: 'time',
    desc: '时空旅行团：贸易收入 +40%。动乱概率 +15%。',
    cost: { tech: 55 },
    bonus: { tradeIncomeMul: 1.4 },
    penalty: { unrestMul: 1.15 },
    needs: [],
    flavor: '「来看一眼 30 年前的火星——票价：一个未来。」', },
  // 🏭 永恒轮班
  // 平衡：全局产量 +20%，代价士气 -25%；
  //   前置时间劳工，时间系政策的「毕业典礼」——最猛，也最「冷」。
  { id: 'tp-eternal-work', name: '永恒轮班', icon: '🏭', cat: 'time',
    desc: '时间循环生产：全局产量 +20%。士气 -25%。',
    cost: { tech: 70 },
    bonus: { globalYieldMul: 1.2 },
    penalty: { moraleMul: 0.75 },
    needs: ['tp-time-labor'],
    flavor: '「生产线不睡觉——人，也别想睡。」', },
];

// ---- POLICY_V17 → POLICY_DEFS 注册（防御式） ----
// policy.js 的 Policy.def(id) / activeList() 直接读 POLICY_DEFS，
//   Object.assign 注册后立即生效；needs 前置由 Policy.adopt 既有逻辑检查。
if (typeof POLICY_DEFS !== 'undefined') {
  const _pdefs17 = {};
  for (const p of POLICY_V17) {
    _pdefs17[p.id] = {
      id: p.id, name: p.name, icon: p.icon, cat: p.cat,
      desc: p.desc, cost: p.cost || {},
      bonus: p.bonus || {}, penalty: p.penalty || {},
      needs: Array.isArray(p.needs) ? p.needs.slice() : [],
      flavor: p.flavor || '',
    };
  }
  Object.assign(POLICY_DEFS, _pdefs17);
}

// ==================== 附录 A：v1.7 数值总表 ====================
// 科技 cost（科技点）汇总：
//   量子系：A列 30/60/100/150/230=570，B列 570，C列 30/60/100/150/260=600 → 1740
//   生物系：同构 → 1740
//   时间系：同构 → 1740
//   终极系：同构 → 1740
//   四系全满 = 6960 科技点 ≈ v1.5 四系（3310 点）的 2.1 倍。
//   设计意图：v1.7 是「第四胜利之后」的内容，科技点产出已有 researchMul×
//   singularityMul 双乘区（量子系×3.2、终极系×7.5+），6960 点约等于
//   终极产能下 15~20 分钟的产出——「毕业考」的题量，配得上「毕业」的含金量。
// 关键叠加倍率（全满，乘法区）：
//   researchMul：量子 1.15×1.25×1.4×1.6=3.22；时间 1.2×1.2=1.44；终极 1.3×1.5×1.5=2.925
//     → 三系连乘 ≈ 13.6（未计奇点核心×5、singularityMul×7.5）；
//   powerMul：量子 1.3×1.5×1.5=2.925；终极 1.3×1.5×2.0×3.0=11.7 → 连乘 ≈ 34（未计戴森球×10）；
//   buildSpeedMul：时间 1.2×1.3×1.4×1.5×1.8×1.5=8.85；
//   terraSpeedMul：生物 1.3×1.4×1.5×2.0=5.46；终极 1.3×1.5=1.95 → 连乘 ≈ 10.6（未计盖亚引擎×5）；
//   quantumShieldAdd：0.15+0.15+0.2=0.5（上限）；retroShieldAdd：0.15+0.15+0.2=0.5（上限）；
//   disasterWarnAdd：10+15+15+20+30=90 秒（科技）+20 秒（政策）= 110 秒上限。
// 灾难首发时间：32/34/36/38/40/42/44/46 分钟，间隔 10~22 分钟随机；
//   与 v1.3（12/15/20）、v1.4（10/14/18）、v1.5（22/24/26/28/30）交错，
//   大后期每 2~4 分钟一件事。
// 奇观造价（steel/tech/rare）：戴森球 5000/500/800（+he3 300）、
//   时间机器 4000/600/700（+uranium 200）、盖亚引擎 3500/400/600（+water 2000）、
//   奇点核心 3000/800/500（+he3 200）、永恒图书馆 2500/700/400（+uranium 100）。
// 政策颁布费：30~80 科技点，毕业级（qp-quantum-immortal）200 科技点；
//   维持费：纠缠网络 3 tech/分钟、基因福利 5 food/分钟、回溯保险 5 steel/分钟。

// ==================== 附录 B：v1.7 自检 ====================
function ContentV17SelfTest() {
  const errors = [];
  const ok = (cond, msg) => { if (!cond) errors.push(msg); };
  try {
    // —— 科技 60 项 ——
    ok(Array.isArray(TECH_V17), 'TECH_V17 未定义');
    ok(TECH_V17.length === 60, '科技应为 60 项，实际 ' + (TECH_V17 && TECH_V17.length));
    const KNOWN_FX17 = ['quantumYieldMul','quantumCostMul','researchMul','powerMul',
      'quantumShieldAdd','disasterMul','techCostMul',
      'bioYieldMul','bioCostMul','popGrowthMul','moraleMul','terraSpeedMul','foodMul',
      'buildSpeedMul','disasterWarnAdd','timeYieldMul','retroShieldAdd',
      'unrestMul','dysonMul','singularityMul','gaiaMul','globalYieldMul','tradeIncomeMul'];
    const seen = {};
    const branchCount = {};
    for (const t of TECH_V17) {
      ok(t.id && t.name && t.icon && t.desc, '科技缺字段: ' + (t && t.id));
      ok(typeof t.cost === 'number' && t.cost > 0, (t && t.id) + ' cost 非法');
      ok(Array.isArray(t.pre), (t && t.id) + ' pre 应为数组');
      ok(!!t.effect, (t && t.id) + ' 缺少 effect');
      ok(!!t.flavor, (t && t.id) + ' 缺少 flavor 金句');
      ok(!seen[t.id], '科技 id 重复: ' + t.id); seen[t.id] = 1;
      branchCount[t.branch] = (branchCount[t.branch] || 0) + 1;
    }
    for (const t of TECH_V17) for (const p of (t.pre || [])) ok(!!seen[p], t.id + ' 的前置 ' + p + ' 不存在');
    for (const t of TECH_V17) for (const k of Object.keys(t.fx || {})) ok(KNOWN_FX17.indexOf(k) !== -1, t.id + ' 未知 fx 键: ' + k);
    for (const b of ['quantum','bio','time','omega']) ok(branchCount[b] === 15, '分支 ' + b + ' 应为 15 项，实际 ' + (branchCount[b] || 0));
    // 每系终极项必须为双前置
    for (const id of ['t-quantum-15','t-bio-15','t-time-15','t-omega-15']) {
      const t = TECH_V17.find((x) => x.id === id);
      ok(!!t && Array.isArray(t.pre) && t.pre.length === 2, id + ' 应为跨列双前置');
    }
    if (typeof TECH_DEFS !== 'undefined') {
      for (const t of TECH_V17) {
        ok(!!TECH_DEFS[t.id], 'TECH_DEFS 缺少 ' + t.id);
        if (TECH_DEFS[t.id]) ok(TECH_DEFS[t.id].branch === t.branch, t.id + ' 分支不一致');
      }
      const order17 = (typeof TECH_ORDER !== 'undefined' ? TECH_ORDER : []).filter((id) => seen[id]);
      ok(order17.length === 60, 'TECH_ORDER 缺少 v1.7 科技，实际 ' + order17.length);
    }
    if (typeof TECH_BRANCHES !== 'undefined') {
      for (const b of ['quantum','bio','time','omega']) ok(!!TECH_BRANCHES[b], 'TECH_BRANCHES 缺少分支: ' + b);
    }
    // —— 成就 60 项 ——
    ok(Array.isArray(ACH_V17), 'ACH_V17 未定义');
    ok(ACH_V17.length === 60, '成就应为 60 项，实际 ' + (ACH_V17 && ACH_V17.length));
    const cats = {};
    const aseen = {};
    for (const a of ACH_V17) {
      ok(a.id && a.name && a.icon && a.desc, '成就缺字段: ' + (a && a.id));
      ok(!!a.check && typeof a.check === 'string', (a && a.id) + ' check 应为判定描述文字');
      ok(!aseen[a.id], '成就 id 重复: ' + a.id); aseen[a.id] = 1;
      cats[a.cat] = (cats[a.cat] || 0) + 1;
      ok(typeof a.checkFn === 'function', (a && a.id) + ' 缺少 checkFn');
      try { a.checkFn(null); a.checkFn({}); }
      catch (e) { errors.push(a.id + ' checkFn 在空 game 下抛错: ' + e.message); }
    }
    const expectCats = { '量子': 8, '生物': 8, '时间': 8, '终极': 6, '灾难': 8, '奇观': 8, '政策': 6, '传奇': 8 };
    for (const c of Object.keys(expectCats)) ok(cats[c] === expectCats[c], '类别「' + c + '」应为 ' + expectCats[c] + ' 项，实际 ' + (cats[c] || 0));
    if (typeof ACHIEVEMENT_DEFS !== 'undefined') {
      const ids17 = {};
      for (const a of ACH_V17) ids17[a.id] = 1;
      const inDefs = ACHIEVEMENT_DEFS.filter((d) => d && ids17[d.id]);
      ok(inDefs.length === 60, 'ACHIEVEMENT_DEFS 缺少 v1.7 成就，实际 ' + inDefs.length);
    }
    // —— 灾难 8 种 ——
    ok(Array.isArray(DISASTERS_V17), 'DISASTERS_V17 未定义');
    ok(DISASTERS_V17.length === 8, '灾难应为 8 种，实际 ' + (DISASTERS_V17 && DISASTERS_V17.length));
    for (const d of DISASTERS_V17) {
      ok(d.id && d.name && d.icon && d.desc, '灾难缺字段: ' + (d && d.id));
      ok(typeof d.warnMs === 'number' && typeof d.durationMs === 'number', d.id + ' warnMs/durationMs 非法');
      ok(!!d.effect && !!d.counter, d.id + ' 缺少 effect/counter');
      ok(typeof d.firstAt === 'number' && d.firstAt >= 32 * 60 * 1000, d.id + ' firstAt 应 ≥ 32 分钟');
    }
    ok(typeof HazardPack17 === 'function', 'HazardPack17 未定义');
    const hz = new HazardPack17();
    hz.update(Date.now(), null); hz.update(Date.now(), {});  // 空 game 不应抛错
    ok(hz.plagueMul() === 1 && hz.echoActive() === false && hz.leakMul() === 1, '查询接口默认值异常');
    const sv = hz.save();
    ok(sv && sv.v === 17 && sv.nextIn && Object.keys(sv.nextIn).length === 8, 'save 字段缺失');
    ok(hz.load(sv) === true, 'save/load 回环失败');
    // —— 奇观 5 种 ——
    ok(Array.isArray(WONDERS_V17), 'WONDERS_V17 未定义');
    ok(WONDERS_V17.length === 5, '奇观应为 5 种，实际 ' + (WONDERS_V17 && WONDERS_V17.length));
    const wids = ['dyson_sphere', 'time_machine', 'gaia_engine', 'singularity_core', 'eternal_library'];
    for (const w of WONDERS_V17) {
      ok(w.id && w.name && w.icon && w.desc, '奇观缺字段: ' + (w && w.id));
      ok(w.cost && typeof w.cost === 'object', w.id + ' 缺少 cost');
      ok(!!w.effect, w.id + ' 缺少 effect');
      const allowedRes = ['iron','ice','rare','water','food','steel','tech','uranium','he3'];
      for (const k of Object.keys(w.cost)) ok(allowedRes.indexOf(k) !== -1, w.id + ' cost 非法资源键: ' + k);
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
      ok((BUILDINGS.dyson_sphere.levels[1] || {}).dysonPowerMul === 10, '戴森球缺少 dysonPowerMul 标记');
      ok((BUILDINGS.time_machine.levels[1] || {}).winsGame === 'time_machine', '时间机器缺少 winsGame 标记');
      ok((BUILDINGS.gaia_engine.levels[1] || {}).gaiaMul === 5, '盖亚引擎缺少 gaiaMul 标记');
      ok((BUILDINGS.singularity_core.levels[1] || {}).singularityMul === 5, '奇点核心缺少 singularityMul 标记');
      ok((BUILDINGS.eternal_library.levels[1] || {}).policySlotsAdd === 2, '永恒图书馆缺少 policySlotsAdd 标记');
    }
    // —— 政策 20 项 ——
    ok(Array.isArray(POLICY_V17), 'POLICY_V17 未定义');
    ok(POLICY_V17.length === 20, '政策应为 20 项，实际 ' + (POLICY_V17 && POLICY_V17.length));
    const pcats = {};
    const pseen = {};
    for (const p of POLICY_V17) {
      ok(p.id && p.name && p.icon && p.desc, '政策缺字段: ' + (p && p.id));
      ok(!pseen[p.id], '政策 id 重复: ' + p.id); pseen[p.id] = 1;
      pcats[p.cat] = (pcats[p.cat] || 0) + 1;
      ok(p.cost && typeof p.cost === 'object', p.id + ' 缺少 cost');
      ok(p.bonus && typeof p.bonus === 'object', p.id + ' 缺少 bonus');
      ok(Array.isArray(p.needs), p.id + ' needs 应为数组');
    }
    ok(pcats.quantum === 7 && pcats.bio === 7 && pcats.time === 6,
      '政策三系应为 7/7/6，实际 ' + (pcats.quantum || 0) + '/' + (pcats.bio || 0) + '/' + (pcats.time || 0));
    for (const p of POLICY_V17) for (const n of (p.needs || [])) ok(!!pseen[n], p.id + ' 的前置政策 ' + n + ' 不存在');
    if (typeof POLICY_DEFS !== 'undefined') {
      for (const p of POLICY_V17) ok(!!POLICY_DEFS[p.id], 'POLICY_DEFS 缺少 ' + p.id);
    }
    if (typeof POLICY_CATS !== 'undefined') {
      for (const c of ['quantum','bio','time']) ok(!!POLICY_CATS[c], 'POLICY_CATS 缺少分类: ' + c);
    }
    // —— 第五胜利补丁 ——
    if (typeof City !== 'undefined') {
      ok(typeof City.prototype.checkTimeMachineVictory === 'function', 'City.checkTimeMachineVictory 补丁缺失');
    }
    ok(typeof TimeMachineVictory === 'object' && typeof TimeMachineVictory.attach === 'function', 'TimeMachineVictory 缺失');
  } catch (e) { errors.push('自检异常: ' + (e && e.message)); }
  return { pass: errors.length === 0, fail: errors.length, errors };
}

if (typeof module !== 'undefined') {
  Object.assign(module.exports, { ContentV17SelfTest, TECH_V17, ACH_V17, DISASTERS_V17, WONDERS_V17, POLICY_V17, HazardPack17, TimeMachineVictory, P17U });
}

// ==================== 附录 C：第五胜利面板文案 ====================
// game.js 的 showVictory(type) 新增 'time_machine' 分支时可直接引用本对象。
const TIME_MACHINE_VICTORY_TEXT = {
  title: '⏰ 时间机器启动！',
  body: '舱门打开，走出来的人说：我是从明天来的，火星赢了。第一位乘客回到了 30 年前，告诉当年的自己——「坚持住，火星会赢。」——第五胜利达成！',
  hint: '过去有了门，未来有了窗。五种胜利，五种活法，星港的传说，由你书写结局。',
};

// ==================== 附录 D：接入清单（给集成者） ====================
//   1. tech.js：TECH_BRANCHES.quantum/bio/time/omega 四分支配色已注册；
//      新增 fx 键（键语义见文件头注释）按既有规则接入 TechTree.mul()，
//      quantumShieldAdd / retroShieldAdd / disasterWarnAdd 为加法键
//      （前两者上限 0.5），由 disaster.js 读取；
//      researchMul / singularityMul 由科技点产出结算读取（乘法叠加）；
//      powerMul / dysonMul 由电力结算读取；buildSpeedMul 由 build.js 读取；
//      terraSpeedMul / gaiaMul 由改造系统读取；popGrowthMul / moraleMul /
//      foodMul / unrestMul 按既有同键规则接入。
//   2. achievements.js：ACH_V17 已 push 进 ACHIEVEMENT_DEFS（check = checkFn）；
//      成就面板如需展示判定文字，可从 ACH_V17 按 id 取 check 字段；
//      灾难经历类成就依赖 stats.haz17_seen_<id>（HazardPack17 触发时写入）。
//   3. 灾难：HazardPack17.attach(game) 接入 tick/save/load；
//      resources.js 产量结算处读取 game.hazard17.leakMul()（暗物质泄漏 -30%）/
//      gravityMul()（引力异常 -40%）；人口系统读取 plagueMul()；
//      build.js 读取 turbulenceBuildMul()，tech.js 读取 turbulenceResearchMul()；
//      总督系统读取 echoMoraleMul() / echoUnrestAdd()；
//      disaster.js 结算处读取行星护盾免疫（builder.count('shield_planet')>=1 → 跳过）。
//   4. 奇观：BUILDINGS 已注册 dyson_sphere / time_machine / gaia_engine /
//      singularity_core / eternal_library（单级、限建 1 座）；
//      前置检查（needTech / needPop / 限建 1 座）需 build.js 实现，本文件只做数据声明；
//      resources.js 读取戴森球 dysonPowerMul（电力×10）；
//      tech.js 读取奇点核心 singularityMul（科技点×5）与永恒图书馆 techCostMul（-30%）；
//      policy.js 读取永恒图书馆 policySlotsAdd（政策槽+2）；
//      game.js 主循环调用 city.checkTimeMachineVictory(builder) 或 TimeMachineVictory.attach(game)，
//      showVictory 新增 'time_machine' 分支（文案见附录 C）。
//   5. 政策：POLICY_DEFS 已注册 20 项（qp-/bp-/tp- 前缀），POLICY_CATS 新增
//      quantum/bio/time 三分类；Policy.adopt 既有 needs/mutual-exclusion 逻辑直接适用；
//      政策 bonus 中的 disasterWarnAdd 为加法键（秒），由 disaster.js 读取。
//   6. 建筑 id 约定：量子 'q-' 前缀、生物 's-' 前缀、时间 'tm-' 前缀
//      （P17U.qCount / sCount / tCount 回退逻辑与量子风暴目标选择依赖此约定）；
//      灾难 counter 建筑（q-shieldgen / s-medbay / tm-anchor / d-contain /
//      a-magnet / n-emp / g-stabilizer / e-memorial）为数据声明，需 build.js 实装。

// ==================== 附录 E：已知限制与诚实声明 ====================
//   1. 量子/生物/时间三条建筑线在 v1.7 时点尚未实装——相关成就 checkFn 在
//      建筑上线前恒为 false，HazardPack17.update 在无目标时推迟再试。这是设计，
//      不是 bug，但「三条建筑线好不好玩」未经验证。
//   2. 奇观建造前置（needTech / needPop / 限建 1 座）与灾难 counter 建筑
//      需要 build.js 实现检查/建造逻辑——本文件只声明数据，未实现检查逻辑。
//   3. 第五胜利的 showVictory('time_machine') 分支需要 game.js 手动添加
//      （文案已备好：TIME_MACHINE_VICTORY_TEXT），或调 TimeMachineVictory.attach；
//      未接入前，时间机器建成只会触发成就 t-wonder，不会弹胜利面板。
//   4. 持续型灾难的「每座 counter 建筑 -N 秒」缩短逻辑需要 disaster.js 在
//      结算持续时间时读取对应建筑计数——本文件只在配置表 effect 中声明。
//   5. 数值（成本/伤害/间隔/叠加倍率）均为纸面推演，未经真实游玩验证；
//      ContentV17SelfTest() 验证的是「注册表完整性」，不是「好不好玩」——
//      上线后请按 v1.5 的 round 惯例做数值回归。

// ==================== 文件统计 ====================
//   科技 60 项（TECH_V17：量子/生物/时间/终极各 15，每项带 flavor 金句）
//   成就 60 项（ACH_V17：量子 8 / 生物 8 / 时间 8 / 终极 6 /
//               灾难 8 / 奇观 8 / 政策 6 / 传奇 8）
//   灾难 8 种（DISASTERS_V17 + HazardPack17）
//   奇观 5 种（WONDERS_V17 → BUILDINGS）
//   政策 20 项（POLICY_V17 → POLICY_DEFS，量子 7 / 生物 7 / 时间 6）
//   胜利补丁 ×1（TimeMachineVictory，第五胜利）
//   自检 ×1（ContentV17SelfTest）
//   附录 F：v1.5 / v1.7 数值对照
//   附录 G：fx 键防御性读取示例
//   附录 H：v1.7 ASCII 科技树
//   附录 I：v1.7 完整 id 索引
//   附录 J：灾难调度时间线示例
//   附录 K：政策组合推荐

// ==================== 附录 F：v1.5 / v1.7 数值对照 ====================
//   维度              v1.5                    v1.7
//   科技总数          +40（总数 140）          +60（总数 250）
//   单系成本          820~930 点              1740 点
//   四系全满          3310 点                 6960 点（≈2.1 倍）
//   科技列数/系        2 列 × 5 层             3 列 × 5 层
//   成就              +50（总数 177）          +60（总数 277）
//   灾难              5 种（22~30 分钟）       8 种（32~46 分钟）
//   奇观              3 种                    5 种
//   政策              —（v1.5 无新增）        +20（三系）
//   胜利              第四胜利（星门网络）     第五胜利（时间机器）
//   减伤上限          quake/tsunami 0.9       quantumShield/retroShield 各 0.5
//   预警加成          —                       disasterWarnAdd 上限 110 秒
// 设计意图：v1.7 的数值是 v1.5 的「毕业考」——
//   成本翻倍，但产出乘区（researchMul×13.6、powerMul×34、buildSpeedMul×8.85）
//   翻了不止十倍。考题变难了，但考生（玩家）也变强了——
//   这就是「毕业之后」的正确难度曲线。

// ==================== 附录 G：fx 键防御性读取示例 ====================
// 以下为集成者可直接参考的防御性读取片段（注释形式，不执行）：
//
//   // —— 科技点产出（tech.js） ——
//   // let mul = 1;
//   // mul *= TechTree.mul('researchMul');      // 量子/时间/终极三系叠加
//   // mul *= TechTree.mul('singularityMul');   // 奇点加成（含奇点核心×5）
//   // if (turbulence) mul *= game.hazard17.turbulenceResearchMul();  // 时间乱流 -50%
//   // 产出 = 基础 × mul
//
//   // —— 电力结算（resources.js） ——
//   // let p = base * TechTree.mul('powerMul') * TechTree.mul('dysonMul');
//   // if (builder.count('dyson_sphere') >= 1) p *= 10;  // 戴森球 dysonPowerMul
//   // 电力 = p
//
//   // —— 灾难伤害结算（disaster.js） ——
//   // let add = Math.min(0.5, sum('quantumShieldAdd'));  // 量子护盾，加法上限 0.5
//   // add = Math.min(0.5, add);                          // 与 retroShieldAdd 分开上限
//   // let dmg = base * (1 - add) * TechTree.mul('disasterMul');
//   // if (builder.count('shield_planet') >= 1) dmg = 0;   // 行星护盾免疫
//
//   // —— 灾难持续时间结算（disaster.js） ——
//   // let rAdd = Math.min(0.5, sum('retroShieldAdd'));   // 时间护盾，加法上限 0.5
//   // let dur = base * (1 - rAdd);
//   // 持续型灾难再按 counter 建筑数量缩减（见 DISASTERS_V17 各条 effect）
//
//   // —— 灾难预警（disaster.js） ——
//   // let warnMs = base + sum('disasterWarnAdd') * 1000;  // 量子 10s + 时间 75s + 政策 20s
//
//   // —— 建造速度（build.js） ——
//   // let speed = base * TechTree.mul('buildSpeedMul');
//   // if (game.hazard17) speed *= game.hazard17.turbulenceBuildMul();  // 时间乱流 -50%
//
//   // —— 政策槽位（policy.js） ——
//   // let slots = MAX_ACTIVE_POLICY;  // 5
//   // if (builder.count('eternal_library') >= 1) slots += 2;  // 永恒图书馆 policySlotsAdd
//
//   // —— 宜居度增速（terraform 系统） ——
//   // let terra = base * TechTree.mul('terraSpeedMul') * TechTree.mul('gaiaMul');
//   // if (builder.count('gaia_engine') >= 1) terra *= 5;  // 盖亚引擎 gaiaMul

// ==================== 附录 H：v1.7 ASCII 科技树 ====================
// 量子系（⚛️）：
//   A列（算力）  t-quantum-1 → t-quantum-4 → t-quantum-7 → t-quantum-10 → t-quantum-13 ─┐
//   B列（护盾）  t-quantum-2 → t-quantum-5 → t-quantum-8 → t-quantum-11 → t-quantum-14 ─┤
//   C列（能源）  t-quantum-3 → t-quantum-6 → t-quantum-9 → t-quantum-12 → ════════════→ t-quantum-15（量子创世，解锁奇点核心）
// 生物系（🧬）：
//   A列（医疗）  t-bio-1 → t-bio-4 → t-bio-7 → t-bio-10 → t-bio-13 ─┐
//   B列（制造）  t-bio-2 → t-bio-5 → t-bio-8 → t-bio-11 → t-bio-14 ─┤
//   C列（改造）  t-bio-3 → t-bio-6 → t-bio-9 → t-bio-12 → ═════════→ t-bio-15（盖亚协议，解锁盖亚引擎）
// 时间系（⏳）：
//   A列（加速）  t-time-1 → t-time-4 → t-time-7 → t-time-10 → t-time-13 ─┐
//   B列（观测）  t-time-2 → t-time-5 → t-time-8 → t-time-11 → t-time-14 ─┤
//   C列（干涉）  t-time-3 → t-time-6 → t-time-9 → t-time-12 → ══════════→ t-time-15（时间领主，解锁时间机器）
// 终极系（🕳️）：
//   A列（戴森）  t-omega-1 → t-omega-4 → t-omega-7 → t-omega-10 → t-omega-13 ─┐
//   B列（盖亚）  t-omega-2 → t-omega-5 → t-omega-8 → t-omega-11 → t-omega-14 ─┤
//   C列（奇点）  t-omega-3 → t-omega-6 → t-omega-9 → t-omega-12 → ══════════→ t-omega-15（欧米伽奇点，解锁戴森球）
// 读图说明：每列 5 层 cost 为 30/60/100/150/230（终极项 260）；
//   每系终极项为 A列第5层 + B列第5层 双前置（逼双线毕业）；
//   四系终极项分别解锁：奇点核心 / 盖亚引擎 / 时间机器 / 戴森球。

// ==================== 附录 I：v1.7 完整 id 索引 ====================
// 科技 60（TECH_V17）：
//   t-quantum-1~15（量子）/ t-bio-1~15（生物）/ t-time-1~15（时间）/ t-omega-1~15（终极）
// 成就 60（ACH_V17）：
//   q-first q-10 q-power q-shield q-storm0 q-research q-master q-wonder（量子 8）
//   s-first s-10 s-pop s-med s-terra s-plague0 s-master s-wonder（生物 8）
//   t-first t-10 t-speed t-warn t-retro0 t-master t-wonder t-victory（时间 8）
//   o-dyson o-gaia o-sing o-master o-dysonw o-lib（终极 6）
//   z-quantum z-plague z-time z-dark z-anti z-nano z-gravity z-echo（灾难 8）
//   w-dyson w-time w-gaia w-sing w-lib w-first w-3 w-5（奇观 8）
//   p-quantum p-bio p-time p-5 p-10 p-lib（政策 6）
//   c-250 c-200ach c-victory5 c-pop1000 c-survive c-tech60 c-rich c-god（传奇 8）
// 灾难 8（DISASTERS_V17）：
//   quantum_storm gene_plague time_turbulence darkmatter_leak
//   antimatter_breach nano_swarm gravity_anomaly civ_echo
// 奇观 5（WONDERS_V17 → BUILDINGS）：
//   dyson_sphere time_machine gaia_engine singularity_core eternal_library
// 政策 20（POLICY_V17 → POLICY_DEFS）：
//   qp-quantum-tax qp-open-source qp-quantum-surveillance qp-entangle-net
//   qp-quantum-draft qp-superposition qp-quantum-immortal（量子 7）
//   bp-gene-welfare bp-bio-patent bp-eco-mandate bp-clone-labor
//   bp-bio-diversity bp-organic-food bp-gaia-accord（生物 7）
//   tp-time-labor tp-predictive tp-causality tp-retro-insurance
//   tp-time-tourism tp-eternal-work（时间 6）
// 灾难 counter 建筑（数据声明，需 build.js 实装）：
//   q-shieldgen（量子护盾发生器）/ s-medbay（基因诊所）/ tm-anchor（时间锚）/
//   d-contain（暗物质收容罐）/ a-magnet（磁约束瓶）/ n-emp（EMP 脉冲塔）/
//   g-stabilizer（引力稳定器）/ e-memorial（回声纪念碑）

// ==================== 附录 J：灾难调度时间线示例 ====================
//   32 分钟  🌪️ 量子风暴首发（打量子建筑）
//   34 分钟  🦠 基因瘟疫首发（打人口）
//   36 分钟  ⏳ 时间乱流首发（打建造）
//   38 分钟  🌑 暗物质泄漏首发（打产量）
//   40 分钟  💥 反物质失控首发（打能源建筑）
//   42 分钟  🐜 纳米虫群首发（打建筑等级）
//   44 分钟  🌀 引力异常首发（打全城）
//   46 分钟  👁️ 文明回声首发（打人心）
// 此后每种灾难按 intervalMin~intervalMax（10~22 分钟）随机复发，
//   与 v1.3/v1.4/v1.5 的灾难交错——大后期每 2~4 分钟一件事。
// 新手保护：行星护盾（shield_planet）建成后全部跳过；
//   量子护盾 + 时间护盾叠满后伤害/持续各 -50%。

// ==================== 附录 K：政策组合推荐 ====================
//   科研流：qp-quantum-tax + qp-open-source + tp-causality + bp-bio-patent（慎：科研-10%）
//     → 科技点产出×1.3×1.2=1.56，科技成本×0.85，贸易收入×1.3×0.85（基本持平）。
//   人口流：bp-gene-welfare + qp-quantum-immortal + bp-organic-food
//     → 人口增长×1.4，人口上限×1.5，士气×1.2，代价 5 food/分钟 + 200 tech 颁布费。
//   建造流：tp-time-labor + tp-eternal-work + qp-entangle-net + bp-clone-labor（慎：士气-20%）
//     → 建造速度×1.25×1.3=1.625，全局产量×1.2，建筑成本×0.9。
//   保命流：bp-bio-diversity + tp-retro-insurance + qp-quantum-surveillance + tp-predictive
//     → 灾难伤害×0.85×0.75=0.64，动乱×0.7，预警+20 秒，代价 5 steel/分钟。
//   贸易流：tp-time-tourism + bp-bio-patent + qp-quantum-tax（慎：动乱+15%）
//     → 贸易收入×1.4×1.3=1.82，科技点产出×1.3，动乱×1.15（需维稳对冲）。
//   毕业流：qp-quantum-immortal + bp-gaia-accord + tp-eternal-work + 永恒图书馆（7 槽）
//     → 人口上限×1.5，全局产量×1.1×1.2=1.32，动乱×0.8，士气×0.75（需士气对冲）。
