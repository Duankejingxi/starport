/* 星港 — content_v15.js：v1.5 内容（地下/海洋/治理/终极科技+40 / 成就+50 / 新灾难×5 / 新奇观×3）
 *
 * 版本日志：
 *   v1.5.0  初始版本：科技×40（地下/海洋/治理/终极四系，TECH_V15）/
 *           成就×50（ACH_V15，8 大类）/ 新灾难×5（DISASTERS_V15 +
 *           class HazardPack15）/ 新奇观×3（WONDERS_V15，星门网络=第四胜利）。
 * 维护约定（与 v1.4 一致）：
 *   - 本文件只做加法：不修改任何已有文件的源码，只扩展全局注册表、打防御性补丁；
 *   - 所有 game 对象读取均为防御式（判存在再读），地下/海洋/总督/战役等
 *     管理器可能尚未接入——对应成就与灾难在这些系统上线后自动生效；
 *   - 新增建筑 cost 的 key 只能用现有资源：
 *     iron / ice / rare / water / food / steel / tech / uranium / he3；
 *   - 新增科技 fx 键见「一、科技 +40」处的键语义注释，TechTree.mul() 自动乘法叠加，
 *     加法型键（loyaltyAdd 等）由对应系统读取时自行加法汇总；
 *   - 自检：控制台运行 ContentV15SelfTest()。
 */

/* ═══════════════════════════════════════════════════════════════════════
 * 星港 v1.5 内容包（纯加法，不改任何已有文件）
 * 加载顺序：build.js、tech.js、achievements.js、disaster.js、content_v14.js 之后，
 * 直接扩展全局注册表：Object.assign(BUILDINGS / TECH_DEFS)，
 * ACHIEVEMENT_DEFS.push，新增 TECH_BRANCHES.under/ocean/gov/ult，
 * 定义 class HazardPack15（新灾难调度器）。
 *
 * 四大块：
 *   一、科技 +40 —— TECH_V15 数组：地下系×10 / 海洋系×10 / 治理系×10 / 终极系×10，
 *      每系 2 列 × 5 层 pre 链，终极项带跨列双前置；
 *   二、成就 +50 —— ACH_V15 数组：地下 7 / 海洋 7 / 总督 7 / 战役 6 /
 *      建筑 6 / 外交 6 / 军事 6 / 奇观 5，check 字段为判定描述文字，
 *      checkFn 为防御式判定函数（接入 ACHIEVEMENT_DEFS 时使用）；
 *   三、新灾难 ×5 —— DISASTERS_V15 配置表：地震 / 海啸 / 火山灰 /
 *      叛乱升级 / 太阳风，每种含 warnMs / durationMs / effect / counter；
 *   四、新奇观 ×3 —— WONDERS_V15 配置表：行星护盾（免疫灾难）/
 *      星门网络（第四胜利：连接地球）/ 泰坦熔炉（全局产量×2），
 *      同时注册进 BUILDINGS（单级、限建 1 座）。
 *
 * 防御性约定（game 对象接口一律判存在）：
 *   game.underground / game.ocean / game.governor / game.campaign
 *   可能不存在（子系统尚未实装）——对应成就/灾难在系统上线后自动生效；
 *   game.builder.buildings / game.pop.count / game.tech.has(id)  用前判存在。
 *
 * 自定义效果字段「★ 读取约定」：所有新字段（quakeResist / tsunamiResist /
 * disasterImmune / globalYieldMul / winsGame='gate_network' 等）都在对应
 * 条目注释里写清读取方式，供 build.js / disaster.js / resources.js /
 * orbital.js / city.js 防御性读取。
 * ═══════════════════════════════════════════════════════════════════════ */

// ==================== v1.5 小工具（防御性取值） ====================
const P15U = {
  // 子系统管理器（可能不存在）
  under: (g) => (g && g.underground) || null,   // 地下系统
  ocean: (g) => (g && g.ocean) || null,         // 海洋系统
  govn: (g) => (g && g.governor) || null,       // 总督系统
  camp: (g) => (g && g.campaign) || null,       // 战役系统
  mil: (g) => (g && g.military) || null,
  dip: (g) => (g && g.diplomacy) || null,
  orb: (g) => (g && g.orbital) || null,
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
  // 地下建筑计数：优先地下系统，否则回退到 builder（地下建筑 id 约定前缀 'u-'）
  underCount: (g, id) => {
    const u = P15U.under(g);
    try {
      if (u && typeof u.count === 'function') return u.count(id);
      if (u && u.buildings) {
        if (Array.isArray(u.buildings)) return u.buildings.filter((b) => !id || (b && (b.id === id || b.type === id))).length;
        if (typeof u.buildings === 'object' && id) return u.buildings[id] || 0;
      }
    } catch (e) { /* 回退 */ }
    if (id) return P15U.count(g, id);
    // 无 id 时统计全部地下建筑：builder 中 id 以 'u-' 开头
    try {
      if (g && g.builder && Array.isArray(g.builder.buildings))
        return g.builder.buildings.filter((b) => b && typeof b.id === 'string' && b.id.indexOf('u-') === 0).length;
    } catch (e) {}
    return P15U.st(g).undergroundBuildings || 0;
  },
  // 海洋建筑计数：同理（海洋建筑 id 约定前缀 'o-'）
  oceanCount: (g, id) => {
    const o = P15U.ocean(g);
    try {
      if (o && typeof o.count === 'function') return o.count(id);
      if (o && o.buildings) {
        if (Array.isArray(o.buildings)) return o.buildings.filter((b) => !id || (b && (b.id === id || b.type === id))).length;
        if (typeof o.buildings === 'object' && id) return o.buildings[id] || 0;
      }
    } catch (e) { /* 回退 */ }
    if (id) return P15U.count(g, id);
    try {
      if (g && g.builder && Array.isArray(g.builder.buildings))
        return g.builder.buildings.filter((b) => b && typeof b.id === 'string' && b.id.indexOf('o-') === 0).length;
    } catch (e) {}
    return P15U.st(g).oceanBuildings || 0;
  },
  // 总督数量（防御）
  governorCount: (g) => {
    const gv = P15U.govn(g);
    try {
      if (gv) {
        if (typeof gv.count === 'number') return gv.count;
        if (Array.isArray(gv.governors)) return gv.governors.length;
        if (Array.isArray(gv.list)) return gv.list.length;
      }
    } catch (e) {}
    return P15U.st(g).governorCount || 0;
  },
  // 地面建筑总数（防御）
  buildingsTotal: (g) => {
    try { return (g && g.builder && Array.isArray(g.builder.buildings)) ? g.builder.buildings.length : 0; }
    catch (e) { return 0; }
  },
};

// ==================== 一、科技 +40（总数 140） ====================
// 设计总纲：v1.5 的科技线是「向下、向海、向人、向上」——
//   地下系（🕳️）：往地壳里要空间与矿产，是中期的产能答案；
//   海洋系（🌊）：往水里要食物与水，是人口上限的答案；
//   治理系（🏛️）：往「人」上要效率，是总督/政策玩法的答案；
//   终极系（🌌）：往天上要「毕业」，是第四胜利的门票。
// 定价逻辑：四系单系点满约 700~900 科技点，四系全满约 3200 点 ≈
//   深空线（1695 点）的两倍——v1.5 是给「已经赢过一次」的玩家准备的。
// 数组字段：{id, name, icon, desc, cost（科技点）, pre（前置 id 数组）, effect（效果描述文字）}，
//   另附 fx（机器可读倍率）/ branch / hint 供 tech.js 接入；
//   注册时 needs = pre，原样转入 TECH_DEFS。
// 新增分支（TECH_BRANCHES 未定义时跳过，不报错）
if (typeof TECH_BRANCHES !== 'undefined') {
  TECH_BRANCHES.under = { name: '地下', icon: '🕳️', color: '#a78bfa' };
  TECH_BRANCHES.ocean = { name: '海洋', icon: '🌊', color: '#38bdf8' };
  TECH_BRANCHES.gov   = { name: '治理', icon: '🏛️', color: '#fbbf24' };
  TECH_BRANCHES.ult   = { name: '终极', icon: '🌌', color: '#f472b6' };
}

// v1.5 新增 fx 键语义（供地下/海洋/总督/终极系统读取；TechTree.mul() 自动乘法叠加）：
//   underCostMul    地下建筑建造成本倍率（<1 = 更便宜）
//   underYieldMul   地下建筑产量倍率（>1 = 更多）
//   quakeResist     地震伤害减免（0~1，加法汇总，上限 0.9）
//   geoYieldMul     地热/深层矿产产量倍率（>1 = 更多）
//   oceanCostMul    海洋建筑建造成本倍率（<1 = 更便宜）
//   oceanYieldMul   海洋建筑产量倍率（>1 = 更多）
//   tsunamiResist   海啸伤害减免（0~1，加法汇总，上限 0.9）
//   waterMul        水资源产量倍率（>1 = 更多）
//   loyaltyAdd      总督忠诚度加值（加法，每点 +N 点忠诚）
//   taxMul          税收倍率（>1 = 更多）
//   popGrowthMul    人口增长倍率（>1 = 更快）
//   unrestMul       动乱/叛乱概率倍率（<1 = 更低）
//   globalYieldMul  全局产量倍率（>1 = 更多，与行星引擎加法汇总后再与科技乘法叠加）
//   disasterMul     灾难伤害倍率（<1 = 更低，行星引擎同键）
//   techCostMul     科技点消耗倍率（<1 = 更便宜）
//   powerMul        全城电力倍率（>1 = 更多）
// 布局：每系 2 列 × 5 层 pre 链，终极项为跨列双前置（逼双线毕业）。
const TECH_V15 = [
  // ═══════════ 🕳️ 地下系 ×10 ═══════════
  // A 列 地下建造线（t-under-1/3/5/7/9）：underCostMul 五层叠加
  //   0.9 × 0.9 × 0.85 × 0.8 × 0.75 = 0.413，地下建筑成本打 4 折；
  // B 列 地下产出线（t-under-2/4/6/8/10）：underYieldMul 五层叠加
  //   1.2 × 1.25 × 1.3 × 1.4 × 1.5 = 4.095，地下产能翻两番——
  //   「向下挖」是中期产能爆炸的官方答案。
  { id: 't-under-1', name: '隧道掘进术', icon: '⛏️', cost: 20, pre: [],
    desc: '第一条隧道：从地表向下，人类文明的第二层开始了。',
    effect: '地下建筑建造成本 -10%',
    fx: { underCostMul: 0.9 }, branch: 'under',
    hint: '💡 地下玩法的起点：挖第一个地下建筑前先点。' },
  { id: 't-under-2', name: '地热利用', icon: '🌋', cost: 20, pre: [],
    desc: '把火星的「体温」变成电。地热，是行星送的暖气。',
    effect: '地下建筑产量 +20%',
    fx: { underYieldMul: 1.2 }, branch: 'under',
    hint: '💡 地下第一桶金：地热让地下建筑立刻回本。' },
  { id: 't-under-3', name: '支护结构学', icon: '🧱', cost: 40, pre: ['t-under-1'],
    desc: '隧道不再塌方。地下建筑建造成本再 -10%（叠加）。',
    effect: '地下建筑建造成本再 -10%（叠加）',
    fx: { underCostMul: 0.9 }, branch: 'under',
    hint: '💡 地下铺开后，省下的成本非常可观。' },
  { id: 't-under-4', name: '深层钻探', icon: '🛢️', cost: 40, pre: ['t-under-2'],
    desc: '钻头向下再探 500 米，矿脉的含金量翻倍。',
    effect: '地下建筑产量再 +25%（叠加）',
    fx: { underYieldMul: 1.25 }, branch: 'under',
    hint: '💡 深层矿脉是地下中期的核心收益。' },
  { id: 't-under-5', name: '地下物流网', icon: '🚇', cost: 70, pre: ['t-under-3'],
    desc: '隧道连成网，建材在地下跑得比地上快。',
    effect: '地下建筑建造成本再 -15%（叠加）',
    fx: { underCostMul: 0.85 }, branch: 'under',
    hint: '💡 地下物流是地下扩张期的加速器。' },
  { id: 't-under-6', name: '岩浆房发电', icon: '🔥', cost: 70, pre: ['t-under-4'],
    desc: '在岩浆房边上建电站——离地狱越近，离天堂越近。',
    effect: '地下建筑产量再 +30%（叠加），地热产量 +50%',
    fx: { underYieldMul: 1.3, geoYieldMul: 1.5 }, branch: 'under',
    hint: '💡 岩浆房是地下能源的质变点。' },
  { id: 't-under-7', name: '抗震穹顶', icon: '🛡️', cost: 110, pre: ['t-under-5'],
    desc: '穹顶能「呼吸」，地震来了跟着晃，就是不塌。',
    effect: '地下建筑建造成本再 -20%（叠加），地震伤害 -20%',
    fx: { underCostMul: 0.8, quakeResist: 0.2 }, branch: 'under',
    hint: '💡 地震灾难的官方解法之一，地下流必点。' },
  { id: 't-under-8', name: '地幔矿机', icon: '⚙️', cost: 110, pre: ['t-under-6'],
    desc: '机器直接伸进地幔「喝」矿浆。',
    effect: '地下建筑产量再 +40%（叠加）',
    fx: { underYieldMul: 1.4 }, branch: 'under',
    hint: '💡 地幔矿机让地下产能进入快车道。' },
  { id: 't-under-9', name: '地下都市规划', icon: '🏙️', cost: 160, pre: ['t-under-7'],
    desc: '地下不再只是矿洞，它是一座城市——有街道、有广场、有夜灯。',
    effect: '地下建筑建造成本再 -25%（叠加，叠满约 4 折）',
    fx: { underCostMul: 0.75 }, branch: 'under',
    hint: '💡 地下毕业科技，地下城玩法的门票。' },
  { id: 't-under-10', name: '地心熔炉', icon: '🌋', cost: 180, pre: ['t-under-8', 't-under-9'],
    desc: '在地心点一盏灯，整座地下城都暖了。双线毕业，地下系终点。',
    effect: '地下建筑产量再 +50%（叠加），解锁奇观「泰坦熔炉」建造',
    fx: { underYieldMul: 1.5 }, branch: 'under',
    hint: '💡 地下系终点：解锁泰坦熔炉！需要建造线也走到头。' },

  // ═══════════ 🌊 海洋系 ×10 ═══════════
  // A 列 海洋建造线（t-ocean-1/3/5/7/9）：oceanCostMul 五层叠加
  //   0.9 × 0.9 × 0.85 × 0.8 × 0.75 = 0.413；
  // B 列 海洋产出线（t-ocean-2/4/6/8/10）：oceanYieldMul / waterMul 交替，
  //   水 + 食物双线：海洋是人口上限的答案。
  { id: 't-ocean-1', name: '浮岛工程', icon: '🏝️', cost: 20, pre: [],
    desc: '第一块浮岛下水。火星的水，从「喝」变成了「住」。',
    effect: '海洋建筑建造成本 -10%',
    fx: { oceanCostMul: 0.9 }, branch: 'ocean',
    hint: '💡 海洋玩法的起点：下水第一个海洋建筑前先点。' },
  { id: 't-ocean-2', name: '海水淡化', icon: '💧', cost: 20, pre: [],
    desc: '把咸水变成甜水。每一滴淡水，都是人口上限的一块砖。',
    effect: '海洋建筑产量 +20%，水资源产量 +30%',
    fx: { oceanYieldMul: 1.2, waterMul: 1.3 }, branch: 'ocean',
    hint: '💡 缺水警告的终结者，人口流必点。' },
  { id: 't-ocean-3', name: '防腐建材', icon: '🧪', cost: 40, pre: ['t-ocean-1'],
    desc: '盐水啃不动的建材。海洋建筑建造成本再 -10%（叠加）。',
    effect: '海洋建筑建造成本再 -10%（叠加）',
    fx: { oceanCostMul: 0.9 }, branch: 'ocean',
    hint: '💡 海洋铺开后，防腐是省钱的关键。' },
  { id: 't-ocean-4', name: '海洋农场', icon: '🌾', cost: 40, pre: ['t-ocean-2'],
    desc: '在海里种田。藻类长得比小麦快十倍——只是不好吃。',
    effect: '海洋建筑产量再 +25%（叠加）',
    fx: { oceanYieldMul: 1.25 }, branch: 'ocean',
    hint: '💡 食物产能翻倍，养得起更多人口。' },
  { id: 't-ocean-5', name: '潮汐电站', icon: '🌊', cost: 70, pre: ['t-ocean-3'],
    desc: '潮汐每天两次，准时得像打卡。海洋建筑建造成本再 -15%（叠加）。',
    effect: '海洋建筑建造成本再 -15%（叠加）',
    fx: { oceanCostMul: 0.85 }, branch: 'ocean',
    hint: '💡 潮汐电是海洋中期的稳定能源。' },
  { id: 't-ocean-6', name: '深海养殖', icon: '🐟', cost: 70, pre: ['t-ocean-4'],
    desc: '深海鱼群在网箱里挤成了「鱼海」。食物，管够。',
    effect: '海洋建筑产量再 +30%（叠加），水资源产量再 +30%（叠加）',
    fx: { oceanYieldMul: 1.3, waterMul: 1.3 }, branch: 'ocean',
    hint: '💡 深海养殖是食物线的质变点。' },
  { id: 't-ocean-7', name: '防波堤体系', icon: '🌉', cost: 110, pre: ['t-ocean-5'],
    desc: '三层防波堤，海啸来了也只是「大一点的浪」。',
    effect: '海洋建筑建造成本再 -20%（叠加），海啸伤害 -30%',
    fx: { oceanCostMul: 0.8, tsunamiResist: 0.3 }, branch: 'ocean',
    hint: '💡 海啸灾难的官方解法，海洋流必点。' },
  { id: 't-ocean-8', name: '海底采矿', icon: '⛏️', cost: 110, pre: ['t-ocean-6'],
    desc: '海底的锰结核，是挂在海床上的矿脉。',
    effect: '海洋建筑产量再 +40%（叠加）',
    fx: { oceanYieldMul: 1.4 }, branch: 'ocean',
    hint: '💡 海底矿脉让海洋产能进入快车道。' },
  { id: 't-ocean-9', name: '海上都市圈', icon: '🌃', cost: 160, pre: ['t-ocean-7'],
    desc: '浮岛连成群，灯火在海面上铺成第二片星空。',
    effect: '海洋建筑建造成本再 -25%（叠加，叠满约 4 折）',
    fx: { oceanCostMul: 0.75 }, branch: 'ocean',
    hint: '💡 海洋毕业科技，海上都市的门票。' },
  { id: 't-ocean-10', name: '海洋之心', icon: '💙', cost: 180, pre: ['t-ocean-8', 't-ocean-9'],
    desc: '整片海洋变成一台机器：产水、产粮、产电、产矿。双线毕业，海洋系终点。',
    effect: '海洋建筑产量再 +50%（叠加），水资源产量再 +50%（叠加）',
    fx: { oceanYieldMul: 1.5, waterMul: 1.5 }, branch: 'ocean',
    hint: '💡 海洋系终点：水与食物自由，双线毕业。' },

// ═══════════ 🏛️ 治理系 ×10 ═══════════
// A 列 总督线（t-gov-1/3/5/7/9）：loyaltyAdd 加法五层
// +10/+15/+20/+25/+30 = +100 忠诚，满编总督「永不叛变」；
// B 列 民生线（t-gov-2/4/6/8/10）：taxMul / popGrowthMul / unrestMul 交替，
// 「人」才是生产力——治理系是人口与税收的答案。
{ id: 't-gov-1', name: '总督任命制', icon: '📜', cost: 20, pre: [],
desc: '第一位总督走马上任。城市太大，一个人管不过来了。',
effect: '总督忠诚度 +10',
fx: { loyaltyAdd: 10}, branch: 'gov',
hint: '💡 总督玩法的起点：任命前先点，忠诚开局更高。'},
{ id: 't-gov-2', name: '户籍制度', icon: '📋', cost: 20, pre: [],
desc: '每个人都有编号，每栋房子都有主人——管理从数人头开始。',
effect: '人口增长 +15%，税收 +10%',
fx: { popGrowthMul: 1.15, taxMul: 1.1}, branch: 'gov',
hint: '💡 人口流起点：先数清楚人，再谈发展。'},
{ id: 't-gov-3', name: '总督学院', icon: '🎓', cost: 40, pre: ['t-gov-1'],
desc: '总督也要上学。毕业的总督，忠诚是必修课。',
effect: '总督忠诚度再 +15（叠加）',
fx: { loyaltyAdd: 15}, branch: 'gov',
hint: '💡 忠诚是可以「教」出来的。'},
{ id: 't-gov-4', name: '市集税制', icon: '💰', cost: 40, pre: ['t-gov-2'],
desc: '每个摊位都交税，每笔交易都有记录——钱，开始自己长腿走来。',
effect: '税收再 +15%（叠加）',
fx: { taxMul: 1.15}, branch: 'gov',
hint: '💡 税收是治理的燃料，早点满早享受。'},
{ id: 't-gov-5', name: '巡查制度', icon: '🔍', cost: 70, pre: ['t-gov-3'],
desc: '总督的桌上，多了一本「巡查日志」。',
effect: '总督忠诚度再 +20（叠加），动乱概率 -10%',
fx: { loyaltyAdd: 20, unrestMul: 0.9}, branch: 'gov',
hint: '💡 忠诚与治安双收，叛乱的前置解法。'},
{ id: 't-gov-6', name: '民生工程', icon: '🏠', cost: 70, pre: ['t-gov-4'],
desc: '供水、供暖、学校、医院——幸福感是可以施工的。',
effect: '人口增长再 +20%（叠加），动乱概率再 -10%（叠加）',
fx: { popGrowthMul: 1.2, unrestMul: 0.9}, branch: 'gov',
hint: '💡 吃饱穿暖的人，不想造反。'},
{ id: 't-gov-7', name: '总督议会', icon: '🏛️', cost: 110, pre: ['t-gov-5'],
desc: '总督们坐到一张桌子上吵架——吵完架，忠诚反而更高了。',
effect: '总督忠诚度再 +25（叠加）',
fx: { loyaltyAdd: 25}, branch: 'gov',
hint: '💡 议会是忠诚的放大器，多总督流核心。'},
{ id: 't-gov-8', name: '全民医保', icon: '🏥', cost: 110, pre: ['t-gov-6'],
desc: '生病不再倾家荡产。人口增长再 +25%（叠加）。',
effect: '人口增长再 +25%（叠加）',
fx: { popGrowthMul: 1.25}, branch: 'gov',
hint: '💡 人口上限流的毕业前置。'},
{ id: 't-gov-9', name: '铁腕与怀柔', icon: '⚖️', cost: 160, pre: ['t-gov-7'],
desc: '左手律法，右手面包。忠诚的终极答案。',
effect: '总督忠诚度再 +30（叠加，叠满 +100），动乱概率 -20%（叠加）',
fx: { loyaltyAdd: 30, unrestMul: 0.8}, branch: 'gov',
hint: '💡 治理系毕业：满编总督永不叛变。'},
{ id: 't-gov-10', name: '大同社会', icon: '🌈', cost: 180, pre: ['t-gov-8', 't-gov-9'],
desc: '夜不闭户，路不拾遗——教科书里的社会，建成了。双线毕业，治理系终点。',
effect: '人口增长再 +30%（叠加），税收再 +30%（叠加），动乱概率 -30%（叠加）',
fx: { popGrowthMul: 1.3, taxMul: 1.3, unrestMul: 0.7}, branch: 'gov',
hint: '💡 治理系终点：人口、税收、治安三丰收。'},

// ═══════════ 🌌 终极系 ×10 ═══════════
// A 列 创世线（t-ult-1/3/5/7/9）：globalYieldMul 五层叠加
// 1.1 × 1.15 × 1.2 × 1.25 × 1.3 = 2.47，全局产量翻 2.5 倍；
// B 列 永恒线（t-ult-2/4/6/8/10）：disasterMul 五层叠加
// 0.9 × 0.85 × 0.8 × 0.75 × 0.7 = 0.32，灾难伤害打 3 折——
// 「终极」的含义：数值毕业 + 灾难毕业 + 胜利门票。
{ id: 't-ult-1', name: '行星共鸣', icon: '🌍', cost: 30, pre: [],
desc: '城市与行星同频共振。每一座建筑，都多产出一点。',
effect: '全局产量 +10%',
fx: { globalYieldMul: 1.1}, branch: 'ult',
hint: '💡 终极系起点：全城增产，哪里都吃得到。'},
{ id: 't-ult-2', name: '灾难预演', icon: '🔮', cost: 30, pre: [],
desc: '在模拟器里先被灾难「杀」一百次，现实中就死不了了。',
effect: '所有灾难伤害 -10%',
fx: { disasterMul: 0.9}, branch: 'ult',
hint: '💡 灾难减伤的起点，越早越安心。'},
{ id: 't-ult-3', name: '物质重组', icon: '⚛️', cost: 50, pre: ['t-ult-1'],
desc: '原子级别的「点石成金」。全局产量再 +15%（叠加）。',
effect: '全局产量再 +15%（叠加）',
fx: { globalYieldMul: 1.15}, branch: 'ult',
hint: '💡 增产线的第二刀，砍在全局上。'},
{ id: 't-ult-4', name: '应急协议', icon: '🚨', cost: 50, pre: ['t-ult-2'],
desc: '灾难发生后 60 秒，全城自动进入战时状态。',
effect: '所有灾难伤害再 -15%（叠加）',
fx: { disasterMul: 0.85}, branch: 'ult',
hint: '💡 减伤叠加后，地震从「灭顶」变「麻烦」。'},
{ id: 't-ult-5', name: '能量奇点', icon: '✨', cost: 80, pre: ['t-ult-3'],
desc: '一座奇点电站，顶一百座核电站。',
effect: '全局产量再 +20%（叠加），全城电力 +30%',
fx: { globalYieldMul: 1.2, powerMul: 1.3}, branch: 'ult',
hint: '💡 产量与电力双收，终极线的甜点。'},
{ id: 't-ult-6', name: '行星护甲', icon: '🛡️', cost: 80, pre: ['t-ult-4'],
desc: '给火星穿上一层「看不见的盔甲」。',
effect: '所有灾难伤害再 -20%（叠加）',
fx: { disasterMul: 0.8}, branch: 'ult',
hint: '💡 行星护盾奇观的前置科技之一。'},
{ id: 't-ult-7', name: '知识奇点', icon: '🧠', cost: 120, pre: ['t-ult-5'],
desc: 'AI 接管了科研。科技点，花得更值了。',
effect: '全局产量再 +25%（叠加），科技点消耗 -20%',
fx: { globalYieldMul: 1.25, techCostMul: 0.8}, branch: 'ult',
hint: '💡 后期科技越点越便宜，滚雪球的开始。'},
{ id: 't-ult-8', name: '天命所归', icon: '👑', cost: 120, pre: ['t-ult-6'],
desc: '当灾难也杀不死你，灾难就改名叫「天气」。',
effect: '所有灾难伤害再 -25%（叠加，叠满约 3 折）',
fx: { disasterMul: 0.75}, branch: 'ult',
hint: '💡 灾难毕业科技，配合行星护盾可免疫。'},
{ id: 't-ult-9', name: '创世引擎', icon: '🌠', cost: 170, pre: ['t-ult-7'],
desc: '引擎轰鸣，物质从虚空中「长」出来。',
effect: '全局产量再 +30%（叠加，叠满约 2.5 倍）',
fx: { globalYieldMul: 1.3}, branch: 'ult',
hint: '💡 终极产量毕业，第四胜利的经济底气。'},
{ id: 't-ult-10', name: '星海征途', icon: '🚀', cost: 200, pre: ['t-ult-8', 't-ult-9'],
desc: '「我们的征途是星辰大海。」——这句话，第一次有了施工图。双线毕业，终极系终点。',
effect: '所有灾难伤害再 -30%（叠加），解锁奇观「星门网络」建造',
fx: { disasterMul: 0.7}, branch: 'ult',
hint: '💡 终极系终点：解锁星门网络！第四胜利的门票。'},
];

// ---- TECH_V15 → TECH_DEFS 注册（防御式；needs = pre） ----
if (typeof TECH_DEFS!== 'undefined') {
const _defs = {};
for (const t of TECH_V15) {
_defs[t.id] = {
name: t.name, icon: t.icon, branch: t.branch, cost: t.cost,
needs: Array.isArray(t.pre)? t.pre.slice(): [],
desc: t.desc + ' [' + t.effect + ']',
hint: t.hint, fx: t.fx || {},
};
}
Object.assign(TECH_DEFS, _defs);
}

// 科技展示顺序：四系依次排布（每系按列展开：A 列 5 层 → B 列 5 层）
if (typeof TECH_ORDER!== 'undefined' && Array.isArray(TECH_ORDER)) {
TECH_ORDER.push(
't-under-1', 't-under-3', 't-under-5', 't-under-7', 't-under-9',
't-under-2', 't-under-4', 't-under-6', 't-under-8', 't-under-10',
't-ocean-1', 't-ocean-3', 't-ocean-5', 't-ocean-7', 't-ocean-9',
't-ocean-2', 't-ocean-4', 't-ocean-6', 't-ocean-8', 't-ocean-10',
't-gov-1', 't-gov-3', 't-gov-5', 't-gov-7', 't-gov-9',
't-gov-2', 't-gov-4', 't-gov-6', 't-gov-8', 't-gov-10',
't-ult-1', 't-ult-3', 't-ult-5', 't-ult-7', 't-ult-9',
't-ult-2', 't-ult-4', 't-ult-6', 't-ult-8', 't-ult-10',
);
}

// ==================== 二、成就 +50（总数 177） ====================
// 设计总纲：50 项 = 地下 7（往下挖的故事）+ 海洋 7（往水里走的故事）+
//   总督 7（管人的故事）+ 战役 6（打仗的故事）+ 建筑 6（盖房子的故事）+
//   外交 6（交朋友的故事）+ 军事 6（亮剑的故事）+ 奇观 5（封神的故事）。
// 数组字段：{id, name, icon, desc, check（判定描述文字）, cat（类别）}；
//   另附 tip（解锁 toast 文案）/ hint（解锁指引）/ checkFn（防御式判定函数）。
// 注册时 ACHIEVEMENT_DEFS.push({id, name, icon, desc, tip, hint, check: checkFn})，
//   与 v1.4 的 orb-/deep-/wonder-/mix- 体系衔接，id 前缀不重叠。
// 所有 checkFn 均为防御式：地下/海洋/总督/战役等系统未上线时恒为 false，
//   上线后自动可解锁；空 game（null/{}）下绝不抛错（自检覆盖）。
const ACH_V15 = [
  // ---- 🕳️ 地下 7 项 ----
  // 设计：地下成就按「第一铲→铺开→能源→深挖→住人→抗震→毕业」排布。
  { id: 'dx-first', name: '第一铲', icon: '⛏️', cat: '地下',
    desc: '建成第一个地下建筑', check: '地下建筑数量 ≥ 1',
    tip: '⛏️ 第一铲：星港的疆域，从此有了「地下」这一层。',
    hint: '💡 建成任意一个地下建筑（id 以 u- 开头）。',
    checkFn: (g) => P15U.underCount(g) >= 1 || (P15U.st(g).undergroundBuildings || 0) >= 1 },
  { id: 'dx-10', name: '地下街区', icon: '🏘️', cat: '地下',
    desc: '地下建筑达到 10 座', check: '地下建筑数量 ≥ 10',
    tip: '🏘️ 第 10 座地下建筑：地底下，也有了街区。',
    hint: '💡 把地下建筑铺到 10 座。',
    checkFn: (g) => P15U.underCount(g) >= 10 || (P15U.st(g).undergroundBuildings || 0) >= 10 },
  { id: 'dx-geo', name: '地心取暖', icon: '🌋', cat: '地下',
    desc: '建成地热电站', check: '拥有地热电站（u-geothermal）≥ 1',
    tip: '🌋 地热电站并网：火星的体温，变成了你家的暖气。',
    hint: '💡 建成地热电站 u-geothermal。',
    checkFn: (g) => P15U.underCount(g, 'u-geothermal') >= 1 || P15U.count(g, 'u-geothermal') >= 1 },
  { id: 'dx-deep', name: '直达地幔', icon: '🕳️', cat: '地下',
    desc: '建成深层矿井', check: '拥有深层矿井（u-deepmine）≥ 1',
    tip: '🕳️ 深层矿井投产：钻头停下的地方，是地幔。',
    hint: '💡 建成深层矿井 u-deepmine。',
    checkFn: (g) => P15U.underCount(g, 'u-deepmine') >= 1 || P15U.count(g, 'u-deepmine') >= 1 },
  { id: 'dx-city', name: '地下城', icon: '🏙️', cat: '地下',
    desc: '地下建筑达到 30 座', check: '地下建筑数量 ≥ 30',
    tip: '🏙️ 第 30 座地下建筑：这不是矿洞了，这是一座地下城。',
    hint: '💡 地下建筑铺到 30 座，建议先点地下建造线。',
    checkFn: (g) => P15U.underCount(g) >= 30 || (P15U.st(g).undergroundBuildings || 0) >= 30 },
  { id: 'dx-quakeproof', name: '不动如山', icon: '🛡️', cat: '地下',
    desc: '地震中地下建筑零损坏', check: '经历地震且地下建筑损坏数 = 0',
    tip: '🛡️ 地震零损坏：地晃了，房子没晃——这就叫工程。',
    hint: '💡 点出抗震穹顶（t-under-7）再迎接地震。',
    checkFn: (g) => (P15U.st(g).quakeSurvivedNoDamage || 0) >= 1 },
  { id: 'dx-master', name: '地底君王', icon: '👑', cat: '地下',
    desc: '解锁全部 10 项地下科技', check: 't-under-1 ~ t-under-10 全部解锁',
    tip: '👑 地下科技全满：从隧道掘进术到地心熔炉，你读完了地底这本书。',
    hint: '💡 点满全部 10 项地下科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = ['t-under-1','t-under-2','t-under-3','t-under-4','t-under-5',
                   't-under-6','t-under-7','t-under-8','t-under-9','t-under-10'];
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },

  // ---- 🌊 海洋 7 项 ----
  // 设计：海洋成就按「下水→喝水→吃饭→能源→深海→住人→毕业」排布。
  { id: 'hy-first', name: '下水', icon: '🏝️', cat: '海洋',
    desc: '建成第一个海洋建筑', check: '海洋建筑数量 ≥ 1',
    tip: '🏝️ 第一块浮岛：星港的疆域，从此有了「海上」这一层。',
    hint: '💡 建成任意一个海洋建筑（id 以 o- 开头）。',
    checkFn: (g) => P15U.oceanCount(g) >= 1 || (P15U.st(g).oceanBuildings || 0) >= 1 },
  { id: 'hy-water', name: '甘霖', icon: '💧', cat: '海洋',
    desc: '建成海水淡化厂', check: '拥有海水淡化厂（o-desal）≥ 1',
    tip: '💧 淡化厂出水：第一滴「海里来的甜水」，甜得不像话。',
    hint: '💡 建成海水淡化厂 o-desal。',
    checkFn: (g) => P15U.oceanCount(g, 'o-desal') >= 1 || P15U.count(g, 'o-desal') >= 1 },
  { id: 'hy-farm5', name: '海上粮仓', icon: '🌾', cat: '海洋',
    desc: '海洋农场达到 5 座', check: '海洋农场（o-farm）数量 ≥ 5',
    tip: '🌾 第 5 座海洋农场：海里种出的粮食，养活了半座城。',
    hint: '💡 建成 5 座海洋农场 o-farm。',
    checkFn: (g) => P15U.oceanCount(g, 'o-farm') >= 5 || P15U.count(g, 'o-farm') >= 5 },
  { id: 'hy-tide', name: '潮汐之力', icon: '🌊', cat: '海洋',
    desc: '建成潮汐电站', check: '拥有潮汐电站（o-tidal）≥ 1',
    tip: '🌊 潮汐电站并网：大海每天两次打卡，从不迟到。',
    hint: '💡 建成潮汐电站 o-tidal。',
    checkFn: (g) => P15U.oceanCount(g, 'o-tidal') >= 1 || P15U.count(g, 'o-tidal') >= 1 },
  { id: 'hy-deep', name: '深海宝藏', icon: '🐟', cat: '海洋',
    desc: '建成深海采矿站', check: '拥有深海采矿站（o-deepmine）≥ 1',
    tip: '🐟 深海采矿站投产：海底的锰结核，是挂在海床上的矿。',
    hint: '💡 建成深海采矿站 o-deepmine。',
    checkFn: (g) => P15U.oceanCount(g, 'o-deepmine') >= 1 || P15U.count(g, 'o-deepmine') >= 1 },
  { id: 'hy-city', name: '海上都市', icon: '🌃', cat: '海洋',
    desc: '海洋建筑达到 30 座', check: '海洋建筑数量 ≥ 30',
    tip: '🌃 第 30 座海洋建筑：灯火在海面上，铺成了第二片星空。',
    hint: '💡 海洋建筑铺到 30 座，建议先点海洋建造线。',
    checkFn: (g) => P15U.oceanCount(g) >= 30 || (P15U.st(g).oceanBuildings || 0) >= 30 },
  { id: 'hy-master', name: '海神', icon: '🔱', cat: '海洋',
    desc: '解锁全部 10 项海洋科技', check: 't-ocean-1 ~ t-ocean-10 全部解锁',
    tip: '🔱 海洋科技全满：从浮岛工程到海洋之心，大海成了你的后花园。',
    hint: '💡 点满全部 10 项海洋科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      const ids = ['t-ocean-1','t-ocean-2','t-ocean-3','t-ocean-4','t-ocean-5',
                   't-ocean-6','t-ocean-7','t-ocean-8','t-ocean-9','t-ocean-10'];
      return ids.every((id) => g.tech.has(id));
    } catch (e) { return false; } } },

  // ---- 🏛️ 总督 7 项 ----
  // 设计：总督成就按「上任→扩编→忠诚→治安→税收→议会→平叛」排布，
  //   与 v1.5 新灾难「叛乱升级」形成「矛与盾」的叙事。
  { id: 'zd-first', name: '封疆', icon: '📜', cat: '总督',
    desc: '任命第一位总督', check: '总督数量 ≥ 1',
    tip: '📜 首位总督上任：城市太大，一个人管不过来了——这是好事。',
    hint: '💡 任命第一位总督。',
    checkFn: (g) => P15U.governorCount(g) >= 1 },
  { id: 'zd-5', name: '五虎上将', icon: '🎖️', cat: '总督',
    desc: '同时拥有 5 位总督', check: '总督数量 ≥ 5',
    tip: '🎖️ 第 5 位总督：你的城市，现在有 5 个「小朝廷」。',
    hint: '💡 把总督扩充到 5 位。',
    checkFn: (g) => P15U.governorCount(g) >= 5 },
  { id: 'zd-loyal', name: '忠心耿耿', icon: '❤️', cat: '总督',
    desc: '一位总督忠诚度达到 100', check: '任意总督忠诚度 ≥ 100',
    tip: '❤️ 忠诚度 100：这位总督，把星港当成了家。',
    hint: '💡 点治理系总督线，把一位总督忠诚堆到 100。',
    checkFn: (g) => { try {
      const gv = P15U.govn(g);
      if (gv) {
        const list = gv.governors || gv.list || [];
        if (Array.isArray(list) && list.some((x) => x && (x.loyalty || 0) >= 100)) return true;
      }
      return (P15U.st(g).maxGovernorLoyalty || 0) >= 100;
    } catch (e) { return false; } } },
  { id: 'zd-peace100', name: '夜不闭户', icon: '🕊️', cat: '总督',
    desc: '连续 100 天零动乱', check: '连续无动乱天数 ≥ 100',
    tip: '🕊️ 百日无动乱：夜不闭户，路不拾遗——教科书照进了现实。',
    hint: '💡 点民生线 + 保持幸福度，熬过 100 天。',
    checkFn: (g) => (P15U.st(g).peacefulDays || 0) >= 100 },
  { id: 'zd-tax', name: '国库充盈', icon: '💰', cat: '总督',
    desc: '单日税收突破 10000', check: '单日税收 ≥ 10000',
    tip: '💰 单日税收破万：国库的门，快被金币挤坏了。',
    hint: '💡 点满市集税制，把税收到单日破万。',
    checkFn: (g) => (P15U.st(g).maxDailyTax || 0) >= 10000 },
  { id: 'zd-council', name: '圆桌', icon: '🏛️', cat: '总督',
    desc: '建成总督议会', check: '拥有总督议会（gov-council）≥ 1',
    tip: '🏛️ 总督议会落成：总督们坐到一张桌子上——吵完架更忠诚了。',
    hint: '💡 建成总督议会 gov-council，需科技 t-gov-7。',
    checkFn: (g) => P15U.count(g, 'gov-council') >= 1 },
  { id: 'zd-quell', name: '平叛', icon: '⚔️', cat: '总督',
    desc: '平定一次总督叛乱', check: '平定叛乱次数 ≥ 1',
    tip: '⚔️ 叛乱平定：刀举起来了，又放下了——这才是治理。',
    hint: '💡 叛乱升级灾难中保住城市，或镇压一次总督叛变。',
    checkFn: (g) => (P15U.st(g).rebellionsQuelled || 0) >= 1 },

  // ---- ⚔️ 战役 6 项 ----
  // 设计：战役成就按「首胜→量产→零伤亡→以少胜多→全 S→通关」排布，
  //   难度递增，最后一项是战役玩法的毕业。
  { id: 'zy-first', name: '首战告捷', icon: '⚔️', cat: '战役',
    desc: '赢得第一场战役', check: '战役胜利场次 ≥ 1',
    tip: '⚔️ 首场战役胜利：第一滴血，是敌人的。',
    hint: '💡 赢下第一场战役。',
    checkFn: (g) => { const c = P15U.camp(g); return !!((c && (c.wins || 0) >= 1) || (P15U.st(g).campaignWins || 0) >= 1); } },
  { id: 'zy-10', name: '百战之师', icon: '🎖️', cat: '战役',
    desc: '累计赢得 10 场战役', check: '战役胜利场次 ≥ 10',
    tip: '🎖️ 第 10 场胜利：这支军队的名字，叫「常胜」。',
    hint: '💡 累计赢下 10 场战役。',
    checkFn: (g) => { const c = P15U.camp(g); return !!((c && (c.wins || 0) >= 10) || (P15U.st(g).campaignWins || 0) >= 10); } },
  { id: 'zy-flawless', name: '无伤通关', icon: '✨', cat: '战役',
    desc: '一场战役零伤亡获胜', check: '零伤亡胜利次数 ≥ 1',
    tip: '✨ 零伤亡胜利：去的时候多少人，回来的时候还是多少人。',
    hint: '💡 以绝对优势兵力碾压，争取零伤亡。',
    checkFn: (g) => (P15U.st(g).flawlessWins || 0) >= 1 },
  { id: 'zy-underdog', name: '以少胜多', icon: '🔥', cat: '战役',
    desc: '以一半以下兵力赢得战役', check: '兵力劣势（≤50%）胜利次数 ≥ 1',
    tip: '🔥 以少胜多：兵力只有一半，勇气是两倍。',
    hint: '💡 用劣势兵力打赢一场硬仗，靠战术。',
    checkFn: (g) => (P15U.st(g).underdogWins || 0) >= 1 },
  { id: 'zy-allS', name: '全 S 评价', icon: '🏆', cat: '战役',
    desc: '所有战役关卡均获得 S 评价', check: 'S 评价关卡数 = 战役总关卡数（≥1）',
    tip: '🏆 全 S 通关：每一场战役，都是教科书级别的。',
    hint: '💡 把每个战役关卡都打到 S 评价。',
    checkFn: (g) => { try {
      const c = P15U.camp(g);
      const s = (c && (c.sRanks || c.sCount)) || P15U.st(g).campaignSRanks || 0;
      const total = (c && (c.totalLevels || c.levels)) || P15U.st(g).campaignLevels || 0;
      return total >= 1 && s >= total;
    } catch (e) { return false; } } },
  { id: 'zy-clear', name: '战役通关', icon: '👑', cat: '战役',
    desc: '通关全部战役关卡', check: '战役通关标志 = true',
    tip: '👑 战役全通关：战争结束了，和平是打出来的。',
    hint: '💡 通关全部战役关卡。',
    checkFn: (g) => { const c = P15U.camp(g); return !!((c && (c.cleared || c.completed)) || P15U.st(g).campaignCleared); } },

  // ---- 🏗️ 建筑 6 项 ----
  // 设计：建筑成就考「规模→专精→电网→爱护→满级→收藏」，
  //   与奇观分组呼应，最后一项是 v1.5 三奇观收藏。
  { id: 'jz-200', name: '千城之国', icon: '🏗️', cat: '建筑',
    desc: '建筑总数达到 200', check: '建筑总数 ≥ 200',
    tip: '🏗️ 第 200 座建筑：从星港到「千城之国」，只差 800 座。',
    hint: '💡 把建筑总数铺到 200 座。',
    checkFn: (g) => P15U.buildingsTotal(g) >= 200 },
  { id: 'jz-30same', name: '量产', icon: '🏭', cat: '建筑',
    desc: '同一种建筑达到 30 座', check: '任意单类建筑数量 ≥ 30',
    tip: '🏭 第 30 座同类建筑：量产，是工业浪漫的最高形式。',
    hint: '💡 把某一种建筑铺到 30 座。',
    checkFn: (g) => { try {
      if (g && g.builder && Array.isArray(g.builder.buildings)) {
        const m = {};
        for (const b of g.builder.buildings) { if (b && b.id) m[b.id] = (m[b.id] || 0) + 1; }
        return Object.keys(m).some((k) => m[k] >= 30);
      }
      return (P15U.st(g).maxSameBuilding || 0) >= 30;
    } catch (e) { return false; } } },
  { id: 'jz-power', name: '灯火通明', icon: '💡', cat: '建筑',
    desc: '全城电力盈余达到 500', check: '电力盈余 ≥ 500',
    tip: '💡 电力盈余 500：从今天起，星港的夜晚比白天更亮。',
    hint: '💡 把电力盈余堆到 500（戴森云/核电多建）。',
    checkFn: (g) => { try {
      if (g && g.builder && typeof g.builder.powerSurplus === 'function') return g.builder.powerSurplus() >= 500;
      return (P15U.st(g).powerSurplus || 0) >= 500;
    } catch (e) { return false; } } },
  { id: 'jz-nodamage', name: '爱惜羽毛', icon: '🛡️', cat: '建筑',
    desc: '连续 30 天建筑零损坏', check: '连续无损坏天数 ≥ 30',
    tip: '🛡️ 30 天零损坏：每一栋楼都完好无损——这是被好好爱着的城市。',
    hint: '💡 点减伤科技 + 建应对建筑，熬过 30 天。',
    checkFn: (g) => (P15U.st(g).noDamageDays || 0) >= 30 },
  { id: 'jz-maxlevel', name: '满级大佬', icon: '⬆️', cat: '建筑',
    desc: '10 种建筑升到满级', check: '满级建筑种类 ≥ 10',
    tip: '⬆️ 10 种建筑满级：不鸣则已，一鸣就要满级。',
    hint: '💡 把 10 种不同的建筑升到满级。',
    checkFn: (g) => (P15U.st(g).maxedBuildingTypes || 0) >= 10 },
  { id: 'jz-wonders15', name: '新三样', icon: '🌟', cat: '建筑',
    desc: '建成 v1.5 全部 3 种新奇观', check: '行星护盾 + 星门网络 + 泰坦熔炉各 ≥ 1',
    tip: '🌟 v1.5 三奇观集齐：护盾、星门、熔炉——新时代的三件套。',
    hint: '💡 建成行星护盾、星门网络、泰坦熔炉。',
    checkFn: (g) => ['shield_planet', 'gate_network', 'titan_forge']
      .every((id) => P15U.count(g, id) >= 1) },

  // ---- 🤝 外交 6 项 ----
  // 设计：外交成就按「建交→朋友圈→做生意→灭火→开大会→大一统」排布。
  { id: 'wj-first', name: '第一封国书', icon: '🤝', cat: '外交',
    desc: '与第一个派系建交', check: '建交派系数 ≥ 1',
    tip: '🤝 第一封国书：宇宙这么大，多一个朋友多条路。',
    hint: '💡 与第一个派系建立外交关系。',
    checkFn: (g) => { const d = P15U.dip(g); return !!((d && (d.allies || d.relations)) || (P15U.st(g).diploRelations || 0) >= 1); } },
  { id: 'wj-5', name: '朋友遍天下', icon: '🌐', cat: '外交',
    desc: '同时与 5 个派系保持友好', check: '友好派系数 ≥ 5',
    tip: '🌐 5 个朋友：你的通讯录，是一本「宇宙黄页」。',
    hint: '💡 把友好派系扩到 5 个。',
    checkFn: (g) => (P15U.st(g).friendlyFactions || 0) >= 5 },
  { id: 'wj-trade', name: '富可敌国', icon: '💱', cat: '外交',
    desc: '累计外交贸易额突破 100000', check: '累计贸易额 ≥ 100000',
    tip: '💱 贸易额破十万：星港的商队，走到哪都是财神爷。',
    hint: '💡 多做外交贸易，累计破十万。',
    checkFn: (g) => (P15U.st(g).diploTradeTotal || 0) >= 100000 },
  { id: 'wj-crisis', name: '灭火队员', icon: '🧯', cat: '外交',
    desc: '化解一次外交危机', check: '化解危机次数 ≥ 1',
    tip: '🧯 危机化解：一场战争，消灭在谈判桌上。',
    hint: '💡 在关系跌破冰点前，用外交手段灭火。',
    checkFn: (g) => (P15U.st(g).crisesResolved || 0) >= 1 },
  { id: 'wj-summit', name: '星际峰会', icon: '🏛️', cat: '外交',
    desc: '主办一次星际峰会', check: '主办峰会次数 ≥ 1',
    tip: '🏛️ 星际峰会开幕：全宇宙的大人物，都来你的地盘开会。',
    hint: '💡 声望足够后，主办一次星际峰会。',
    checkFn: (g) => (P15U.st(g).summitsHosted || 0) >= 1 },
  { id: 'wj-allmax', name: '天下大同', icon: '🕊️', cat: '外交',
    desc: '所有派系好感度达到满值', check: '全派系好感 = 满（且派系数 ≥ 3）',
    tip: '🕊️ 全派系满好感：宇宙里没有敌人——这句话第一次是真的。',
    hint: '💡 把所有已知派系的好感刷满。',
    checkFn: (g) => { try {
      const d = P15U.dip(g);
      if (d && d.factions) {
        const fs = Array.isArray(d.factions) ? d.factions : Object.values(d.factions);
        return fs.length >= 3 && fs.every((f) => f && (f.relation || f.favor || 0) >= 100);
      }
      return (P15U.st(g).allFactionsMax || 0) >= 1;
    } catch (e) { return false; } } },

  // ---- 🛡️ 军事 6 项 ----
  // 设计：军事成就按「建军→杀敌→布防→零损失→科技→歼灭」排布。
  { id: 'js-first', name: '建军', icon: '🛡️', cat: '军事',
    desc: '组建第一支舰队', check: '舰队数量 ≥ 1',
    tip: '🛡️ 第一支舰队：从今天起，星港有了「拳头」。',
    hint: '💡 组建第一支舰队。',
    checkFn: (g) => { const m = P15U.mil(g); return !!((m && (m.fleets || m.fleetCount || 0) >= 1) || (P15U.st(g).fleets || 0) >= 1); } },
  { id: 'js-100kills', name: '百人斩', icon: '⚔️', cat: '军事',
    desc: '累计歼敌 100 单位', check: '累计歼敌 ≥ 100',
    tip: '⚔️ 歼敌破百：敌人的残骸，在轨道上铺成了一条路。',
    hint: '💡 累计歼灭 100 个敌方单位。',
    checkFn: (g) => (P15U.st(g).enemiesDestroyed || 0) >= 100 },
  { id: 'js-defense', name: '天罗地网', icon: '🕸️', cat: '军事',
    desc: '轨道防御平台达到 10 座', check: '轨道防御平台 ≥ 10',
    tip: '🕸️ 第 10 座防御平台：从今天起，陨石也要提前预约。',
    hint: '💡 部署 10 座轨道防御平台。',
    checkFn: (g) => P15U.count(g, 'orbital_defense') >= 10 || (P15U.st(g).defensePlatforms || 0) >= 10 },
  { id: 'js-nodefenseloss', name: '固若金汤', icon: '🏰', cat: '军事',
    desc: '一次防御战零损失获胜', check: '零损失防御胜利次数 ≥ 1',
    tip: '🏰 零损失防御战：敌人来了，又走了——什么都没带走。',
    hint: '💡 把防御堆到溢出，打一场零损失的防御战。',
    checkFn: (g) => (P15U.st(g).flawlessDefenses || 0) >= 1 },
  { id: 'js-techmax', name: '武装到牙齿', icon: '🔫', cat: '军事',
    desc: '解锁全部军事科技', check: '军事系科技全解锁（v1.3 t-war 全系）',
    tip: '🔫 军事科技全满：从今天起，星港的「道理」最大。',
    hint: '💡 点满 v1.3 战争科技线全部科技。',
    checkFn: (g) => { try {
      if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
      // v1.3 战争线 id 约定 t-war-1 ~ t-war-20（防御式：只校验存在的）
      let total = 0, got = 0;
      for (let i = 1; i <= 20; i++) {
        const id = 't-war-' + i;
        if (typeof TECH_DEFS !== 'undefined' && !TECH_DEFS[id]) continue;
        total++;
        if (g.tech.has(id)) got++;
      }
      return total > 0 && got >= total;
    } catch (e) { return false; } } },
  { id: 'js-annihilate', name: '全歼', icon: '💥', cat: '军事',
    desc: '全歼一波入侵者', check: '全歼入侵波次 ≥ 1',
    tip: '💥 全歼一波入侵：一个没跑掉——这就是星港的待客之道。',
    hint: '💡 在一波入侵中消灭全部敌人。',
    checkFn: (g) => (P15U.st(g).wavesAnnihilated || 0) >= 1 },

  // ---- 🌟 奇观 5 项 ----
  // 设计：一奇观一项，无水分；qg-all15 是 v1.5 毕业；qg-earth（第四胜利）
  //   是 v1.5 的终极答案，与星门（第三胜利）形成「胜利含金量」新台阶。
  { id: 'qg-shield', name: '天佑星港', icon: '🛡️', cat: '奇观',
    desc: '建成行星护盾', check: '行星护盾（shield_planet）≥ 1',
    tip: '🛡️ 行星护盾升起：从今天起，灾难要先问过护盾。',
    hint: '💡 建成行星护盾：需科技 t-ult-6。',
    checkFn: (g) => P15U.count(g, 'shield_planet') >= 1 },
  { id: 'qg-gate', name: '星门网络', icon: '🌀', cat: '奇观',
    desc: '建成星门网络', check: '星门网络（gate_network）≥ 1',
    tip: '🌀 星门网络点亮：火星与地球之间，第一次有了「门」。',
    hint: '💡 建成星门网络：需科技 t-ult-10。',
    checkFn: (g) => P15U.count(g, 'gate_network') >= 1 },
  { id: 'qg-forge', name: '火力全开', icon: '🔥', cat: '奇观',
    desc: '建成泰坦熔炉', check: '泰坦熔炉（titan_forge）≥ 1',
    tip: '🔥 泰坦熔炉点火：全城产量翻倍——这不是熔炉，是印钞机。',
    hint: '💡 建成泰坦熔炉：需科技 t-under-10。',
    checkFn: (g) => P15U.count(g, 'titan_forge') >= 1 },
  { id: 'qg-all15', name: '三位一体', icon: '🌟', cat: '奇观',
    desc: '集齐 v1.5 全部 3 种新奇观', check: '三奇观各 ≥ 1',
    tip: '🌟 v1.5 三奇观集齐：护盾、星门、熔炉——新时代的三位一体。',
    hint: '💡 集齐行星护盾、星门网络、泰坦熔炉。',
    checkFn: (g) => ['shield_planet', 'gate_network', 'titan_forge']
      .every((id) => P15U.count(g, id) >= 1) },
  { id: 'qg-earth', name: '回家', icon: '🌍', cat: '奇观',
    desc: '通过星门网络连接地球（第四胜利）', check: 'city.earthLinked = true',
    tip: '🌍 连接地球！第四胜利！第一批飞船穿过星门，地球在另一端挥手。',
    hint: '💡 建成星门网络并完成「连接地球」仪式。',
    checkFn: (g) => !!(g && g.city && (g.city.earthLinked || g.city.gateNetworkWon)) },
];

// ---- ACH_V15 → ACHIEVEMENT_DEFS 注册（防御式） ----
if (typeof ACHIEVEMENT_DEFS !== 'undefined') {
  for (const a of ACH_V15) {
    ACHIEVEMENT_DEFS.push({
      id: a.id, name: a.name, icon: a.icon, desc: a.desc,
      tip: a.tip, hint: a.hint, check: a.checkFn,
    });
  }
}

// ==================== 三、新灾难 ×5 ====================
// 设计总纲：v1.5 的灾难是「立体战争」——
//   地震打地下、海啸打海洋、火山灰打全城、叛乱升级打人心、太阳风打轨道，
//   五个维度各一刀，没有「安全区」，但每一刀都有官方解法（counter 建筑）。
// 首发时间 22/24/26/28/30 分钟，与 v1.3 地面三灾难（12/15/20 分钟）、
//   v1.4 轨道三灾难（10/14/18 分钟）交错，保证大后期每 2~4 分钟有一件事。
// 防御三原则（与 v1.4 一致）：① 对应系统不存在时 update 直接返回；
//   ② 无目标时不触发、推迟再试（不空放预警）；③ 只读写约定字段，
//   删建筑/维修永远是各系统的权力。
// 配置表字段：{id, name, icon, desc, warnMs, durationMs, effect（效果描述）, counter（应对建筑）}，
//   另附 flavor（播报轮换文案）/ firstAt / interval（调度常量）。
// ★ 读取约定（disaster.js / HazardPack15 防御性读取）：
//   行星护盾（shield_planet）建成 → 全部灾难免疫（disasterImmune）；
//   行星引擎 disasterMul / 终极系 disasterMul → 伤害与时长统一打折。
const DISASTERS_V15 = [
  { id: 'quake', name: '火星地震', icon: '🌋',
    desc: '地壳深处传来闷响，地下隧道开始落石。',
    warnMs: 20 * 1000, durationMs: 0,  // 瞬时伤害，无持续
    effect: '随机 6 座地下建筑各损失 20~40% 耐久',
    counter: 'u-quakebrace（抗震支柱）/ 科技 t-under-7（抗震穹顶）',
    flavor: [
      '🌋 地震！地下隧道落石，支护结构正在尖叫。',
      '🌋 地壳闷响——地下城晃了三下，像喝醉了一样。',
    ],
    firstAt: 22 * 60 * 1000, intervalMin: 10 * 60 * 1000, intervalMax: 16 * 60 * 1000,
    targets: 6, dmgMin: 20, dmgMax: 40 },
  { id: 'tsunami', name: '海啸', icon: '🌊',
    desc: '海面隆起一道水墙，向浮岛群压来。',
    warnMs: 25 * 1000, durationMs: 0,  // 瞬时伤害，无持续
    effect: '随机 6 座海洋建筑各损失 20~40% 耐久',
    counter: 'o-breakwater（防波堤）/ 科技 t-ocean-7（防波堤体系）',
    flavor: [
      '🌊 海啸预警！水墙正在逼近浮岛群。',
      '🌊 海面隆起——防波堤，证明自己的时候到了。',
    ],
    firstAt: 24 * 60 * 1000, intervalMin: 10 * 60 * 1000, intervalMax: 16 * 60 * 1000,
    targets: 6, dmgMin: 20, dmgMax: 40 },
  { id: 'ashfall', name: '火山灰', icon: '🌫️',
    desc: '远处火山喷发，灰云遮住了太阳，全城蒙上一层灰。',
    warnMs: 30 * 1000, durationMs: 180 * 1000,  // 持续 180 秒
    effect: '全城所有产量 -30%，持续 180 秒',
    counter: 'air-purifier（空气净化塔）：每座 -10 秒持续时间',
    flavor: [
      '🌫️ 火山灰遮天！太阳变成了咸蛋黄，产量开始跳水。',
      '🌫️ 灰云压境——净化塔全开，不然全城都要「吃灰」。',
    ],
    firstAt: 26 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    yieldMul: 0.7, duration: 180 * 1000 },
  { id: 'uprising', name: '叛乱升级', icon: '🔥',
    desc: '街头出现传单，总督府门口聚集了人群——有人在煽动。',
    warnMs: 30 * 1000, durationMs: 240 * 1000,  // 持续 240 秒
    effect: '持续 240 秒：总督叛变概率 +50%，动乱概率 +30%',
    counter: 'gov-garrison（治安局）/ 科技 t-gov-9（铁腕与怀柔）',
    flavor: [
      '🔥 叛乱升级！传单满天飞，总督们的电话开始占线。',
      '🔥 人群聚集——治安局出动，议会紧急开会。',
    ],
    firstAt: 28 * 60 * 1000, intervalMin: 14 * 60 * 1000, intervalMax: 20 * 60 * 1000,
    betrayAdd: 0.5, unrestAdd: 0.3, duration: 240 * 1000 },
  { id: 'solarwind', name: '太阳风', icon: '☀️',
    desc: '日冕物质抛射抵达火星轨道，带电粒子 storm 席卷而来。',
    warnMs: 25 * 1000, durationMs: 120 * 1000,  // 持续 120 秒
    effect: '所有轨道建筑停工 120 秒',
    counter: 'orb-shield（磁屏蔽罩）/ 奇观行星护盾（免疫）',
    flavor: [
      '☀️ 太阳风抵达！轨道建筑集体「装死」，等风头过去。',
      '☀️ 带电粒子 storm——轨道上所有设备过载保护启动。',
    ],
    firstAt: 30 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    duration: 120 * 1000 },
];

const PACK15_KEY = 'starport-hazard-pack15';

// v1.5 新灾难调度器：与 v1.4 OrbitalHazards、v1.3 DisasterPack13 各自独立调度，
// tick 三挂载互不干扰。行星护盾建成时全部灾难直接跳过（免疫）。
class HazardPack15 {
  constructor() {
    const now = Date.now();
    this.active = {};   // id -> {warnUntil, until} 进行中的灾难
    this.next = {};     // id -> 下次触发时间戳
    for (const d of DISASTERS_V15) {
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

  // ---- 行星护盾免疫判定（防御） ----
  _immune(game) {
    try {
      return !!(game && game.builder && typeof game.builder.count === 'function' &&
        game.builder.count('shield_planet') >= 1);
    } catch (e) { return false; }
  }

  // ---- 灾难减伤聚合：行星引擎 disasterMul + 终极系 disasterMul（防御） ----
  _mitigation(game) {
    let mit = 0;
    try {
      if (game && game.builder && Array.isArray(game.builder.buildings) && typeof BUILDINGS !== 'undefined') {
        for (const b of game.builder.buildings) {
          if (!b || b.damaged) continue;
          const lv = (BUILDINGS[b.id] && BUILDINGS[b.id].levels && BUILDINGS[b.id].levels[b.level]) || {};
          if (typeof lv.disasterMul === 'number') mit += lv.disasterMul;
        }
      }
      if (game && game.tech && typeof game.tech.mul === 'function') {
        const m = game.tech.mul('disasterMul');
        if (typeof m === 'number' && m < 1) mit += (1 - m);
      }
    } catch (e) {}
    return Math.min(0.9, Math.max(0, mit));  // 上限 0.9
  }

  // ---- 取某类建筑列表（防御：只读 id/hp/maxHp/damaged/offline 字段） ----
  _targets(game, kind) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return [];
      const all = game.builder.buildings.filter((b) => b && !b.damaged);
      if (kind === 'under') return all.filter((b) => typeof b.id === 'string' && b.id.indexOf('u-') === 0);
      if (kind === 'ocean') return all.filter((b) => typeof b.id === 'string' && b.id.indexOf('o-') === 0);
      if (kind === 'orbital') {
        // 轨道模块：走 P15U.orb 多重回退（与 v1.4 P14O 同口径）
        const o = P15U.orb(game);
        if (!o) return [];
        if (Array.isArray(o.modules)) return o.modules.filter((m) => m && !m.offline);
        if (o.modules && typeof o.modules === 'object') return Object.values(o.modules).filter((m) => m && !m.offline);
        return [];
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
    if (this._immune(game)) return;  // 行星护盾：全免疫
    for (const d of DISASTERS_V15) {
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
    }
  }

  // 有无可打击目标（防御：系统未上线→无目标→推迟）
  _hasTarget(game, d) {
    if (d.id === 'quake') return this._targets(game, 'under').length > 0;
    if (d.id === 'tsunami') return this._targets(game, 'ocean').length > 0;
    if (d.id === 'ashfall') return P15U.buildingsTotal(game) > 0;
    if (d.id === 'uprising') return P15U.governorCount(game) > 0 || P15U.pop(game) > 0;
    if (d.id === 'solarwind') return this._targets(game, 'orbital').length > 0;
    return false;
  }

  // 触发结算
  _fire(d, game, now) {
    const mit = this._mitigation(game);  // 减伤 0~0.9
    const msg = d.flavor[Math.floor(Math.random() * d.flavor.length)];
    if (d.id === 'quake' || d.id === 'tsunami') {
      const kind = d.id === 'quake' ? 'under' : 'ocean';
      const victims = this._pick(this._targets(game, kind), d.targets);
      for (const b of victims) {
        const pct = Math.round(this._rand(d.dmgMin, d.dmgMax) * (1 - mit));
        try {
          b.hp = Math.max(0, (typeof b.hp === 'number' ? b.hp : 100) - pct);
          if (b.hp <= 0) b.damaged = true;  // 摧毁标记：维修是各系统的权力
        } catch (e) {}
      }
      this._notify(game, d.id, msg + '（' + victims.length + ' 座建筑受损）', { count: victims.length });
      this.active[d.id] = null;
      this.next[d.id] = now + this._rand(d.intervalMin, d.intervalMax);
    } else if (d.id === 'ashfall') {
      // 火山灰：挂载全局产量 debuff，duration 受减伤与净化塔缩短
      let dur = d.duration * (1 - mit);
      try {
        const purifiers = P15U.count(game, 'air-purifier');
        dur = Math.max(30 * 1000, dur - purifiers * 10 * 1000);
      } catch (e) {}
      this.active[d.id].until = now + dur;
      // ★ 读取约定：resources.js 产量结算处读取 game.hazard15.ashfallMul()
      this._notify(game, d.id, msg + '（全城产量 -30%，' + Math.round(dur / 1000) + ' 秒）');
    } else if (d.id === 'uprising') {
      const dur = d.duration * (1 - mit);
      this.active[d.id].until = now + dur;
      // ★ 读取约定：总督系统读取 game.hazard15.uprisingActive()，
      //   叛变概率 += betrayAdd，动乱概率 += unrestAdd
      this._notify(game, d.id, msg + '（总督叛变概率 +' +
        Math.round(d.betrayAdd * 100) + '%，' + Math.round(dur / 1000) + ' 秒）');
    } else if (d.id === 'solarwind') {
      const mods = this._targets(game, 'orbital');
      const dur = d.duration * (1 - mit);
      const until = now + dur;
      for (const m of mods) {
        try { m.offline = true; m.offlineUntil = until; } catch (e) {}
      }
      this.active[d.id].until = until;
      this._notify(game, d.id, msg + '（' + mods.length + ' 个轨道模块停工 ' + Math.round(dur / 1000) + ' 秒）',
        { count: mods.length });
    }
  }

  // ---- 供其他系统读取的查询接口（全部防御式） ----
  ashfallMul() {  // 火山灰进行中→ 0.7，否则 1
    const st = this.active.ashfall;
    return (st && st.fired && st.until && Date.now() < st.until) ? 0.7 : 1;
  }
  uprisingActive() {  // 叛乱升级进行中→ true
    const st = this.active.uprising;
    return !!(st && st.fired && st.until && Date.now() < st.until);
  }
  uprisingBetrayAdd() { return this.uprisingActive() ? 0.5 : 0; }
  uprisingUnrestAdd() { return this.uprisingActive() ? 0.3 : 0; }

  // ---- 存档 ----
  save() {
    const now = Date.now();
    const nextIn = {};
    for (const d of DISASTERS_V15) nextIn[d.id] = Math.max(0, this.next[d.id] - now);
    return { v: 15, nextIn };
  }
  load(s) {
    const now = Date.now();
    try {
      if (s && s.nextIn) {
        for (const d of DISASTERS_V15) {
          if (typeof s.nextIn[d.id] === 'number') this.next[d.id] = now + s.nextIn[d.id];
        }
      }
    } catch (e) {}
  }

  // ---- 自动接入 game.tick / game.save / game.load（防御式打补丁） ----
  static attach(game) {
    if (!game || game.hazard15) return game.hazard15 || null;
    const hz = new HazardPack15();
    game.hazard15 = hz;
    if (typeof game.tick === 'function') {
      const _tick = game.tick;
      game.tick = function (now, dt) { try { hz.update(now, this); } catch (e) {} return _tick.call(this, now, dt); };
    }
    if (typeof game.save === 'function') {
      const _save = game.save;
      game.save = function () { const s = _save.call(this) || {}; try { s[PACK15_KEY] = hz.save(); } catch (e) {} return s; };
    }
    if (typeof game.load === 'function') {
      const _load = game.load;
      game.load = function (s) { const r = _load.call(this, s); try { if (s && s[PACK15_KEY]) hz.load(s[PACK15_KEY]); } catch (e) {} return r; };
    }
    return hz;
  }
}

// ==================== 四、新奇观 ×3 ====================
// 设计总纲：v1.5 的三奇观是「毕业三件套」——
//   行星护盾（🛡️）：灾难的终点——免疫一切，代价是天文数字的造价；
//   星门网络（🌀）：第四胜利——连接地球，「回家」是比「征服」更动人的胜利；
//   泰坦熔炉（🔥）：产量的终点——全局×2，一座熔炉顶半座城。
// 五条铁律（沿用 v1.4）：每种只有 1 级 / 极贵 / 各有前置锁 / 限建 1 座 /
//   胜利层级递增：发射台（一）< 方舟（二）< 星门（三）< 星门网络（四）。
// 配置表字段：{id, name, icon, desc, cost（巨额）, effect}，
//   另附前置 needTech / needPop 与 BUILDINGS 注册体（含 lore×3 / buildStages×3）。
// ★ 读取约定：
//   shield_planet：HazardPack15._immune / disaster.js 结算处读取
//     builder.count('shield_planet')>=1 → 全部灾难跳过（免疫）；
//   gate_network：levels[1].winsGame='gate_network'，city.js 读取
//     checkGateNetworkVictory（本文件已打补丁），game.js 主循环可直接调用，
//     或用 GateNetworkVictory.attach(game) 自动接入；showVictory 新增
//     'gate_network' 分支（文案见附录 E）；
//   titan_forge：levels[1].globalYieldMul=1.0，resources.js 读取
//     最终产量 = 基础 × 科技倍率 × (1+引擎加成) × (1+熔炉加成)。
const WONDERS_V15 = [
  { id: 'shield_planet', name: '行星护盾', icon: '🛡️',
    desc: '笼罩整颗火星的能量护盾：建成后免疫一切灾难。',
    cost: { steel: 2500, tech: 200, rare: 400, uranium: 100 },
    effect: '免疫所有灾难（地震/海啸/火山灰/叛乱/太阳风及既有灾难全部跳过）',
    needTech: 't-ult-6', needPop: 150, powerUse: 60,
    flavor: '「从今天起，火星有了屋顶。」——行星护盾升起仪式' },
  { id: 'gate_network', name: '星门网络', icon: '🌀',
    desc: '连接地球的星门网络：建成即开启第四胜利——「回家」。',
    cost: { steel: 3000, tech: 300, rare: 600, he3: 150 },
    effect: '第四胜利：连接地球；星门建造成本 -20%（网络效应）',
    needTech: 't-ult-10', needBuilding: 'stargate', needPop: 400, powerUse: 100,
    flavor: '「门的那一边，是地球。38 万公里，第一次像隔壁。」——星门网络点火' },
  { id: 'titan_forge', name: '泰坦熔炉', icon: '🔥',
    desc: '地心深处的终极熔炉：全城产量翻倍。',
    cost: { steel: 2000, tech: 250, rare: 500, uranium: 150 },
    effect: '全局产量 ×2（与行星引擎乘法叠加）',
    needTech: 't-under-10', needPop: 180, powerUse: 80,
    flavor: '「这不是熔炉，这是印钞机——印的是整个文明的未来。」——熔炉点火仪式' },
];

// ---- WONDERS_V15 → BUILDINGS 注册（单级、限建 1 座，前置只做数据声明） ----
if (typeof BUILDINGS !== 'undefined') Object.assign(BUILDINGS, {
  // ═══════════ 1. 🛡️ 行星护盾 shield_planet —— 灾难免疫 ═══════════
  shield_planet: {
    id: 'shield_planet', name: '行星护盾', icon: '🛡️',
    levels: [null,
      { cost: { steel: 2500, tech: 200, rare: 400, uranium: 100 }, needPop: 150, powerUse: 60,
        needTech: 't-ult-6', disasterImmune: true,
        desc: '免疫一切灾难！需终极科技 t-ult-6、人口 150',
        flavor: '「从今天起，火星有了屋顶。」——行星护盾升起仪式', },
    ],
    desc: '终极防御奇观：免疫所有灾难，需终极系科技 t-ult-6',
    flavor: '灾难敲门之前，先问过护盾。',
    buildFlavor: '护盾发生器第一次全功率运行时，整个火星的天空闪了一下——像有人给行星撑起了伞。',
    buildStages: [
      '奠基：在奥林帕斯山顶浇筑护盾基座，全球 12 个节点同步开工。',
      '充能：第一次全功率测试，天空闪了一下——伞，撑起来了。',
      '升起：护盾覆盖全球，气象卫星拍到：火星多了一层「蛋壳」。',
    ],
    lore: [
      '护盾升起那天，地震仪第一次「失业」了——它记录到的最大震动，是孩子们在护盾内放的烟花。',
      '气象学家说：火星从此没有「坏天气」了，只有「护盾外的坏天气」。',
      '有人提议在护盾上刻字。最后刻的是：「天佑星港。」',
    ],
  },

  // ═══════════ 2. 🌀 星门网络 gate_network —— 第四胜利 ═══════════
  gate_network: {
    id: 'gate_network', name: '星门网络', icon: '🌀',
    levels: [null,
      { cost: { steel: 3000, tech: 300, rare: 600, he3: 150 }, needPop: 400, powerUse: 100,
        needTech: 't-ult-10', needBuilding: 'stargate', winsGame: 'gate_network',
        stargateCostMul: 0.8,
        desc: '建成即开启第四胜利！需星门 + 终极科技 t-ult-10 + 人口 400',
        flavor: '「门的那一边，是地球。38 万公里，第一次像隔壁。」——星门网络点火', },
    ],
    desc: '终极奇观：建成即第四胜利（连接地球）。需星门、t-ult-10、人口 400',
    flavor: '征服是向外走，回家是向心里走。',
    buildFlavor: '第一座子星门点火时，主星门轻轻震了一下——像母亲听到了孩子的第一声啼哭。',
    buildStages: [
      '组网：在火星轨道布设 12 座子星门，主星门是它们的「妈妈」。',
      '对接：第一束信号穿过星门抵达地球，延迟：0 秒。',
      '回家：第一批飞船启程，目的地：地球。单程：11 秒。',
    ],
    lore: [
      '星门网络通车那天，地球发来贺电，只有一句话：「欢迎回家。」',
      '发射台变成了博物馆，方舟变成了摆渡船，星门变成了地铁站——胜利的方式，又升级了。',
      '有老人在星门前坐了一整天。他说：我等了一辈子，就是想看看「回家」长什么样。',
    ],
  },

  // ═══════════ 3. 🔥 泰坦熔炉 titan_forge —— 全局产量×2 ═══════════
  titan_forge: {
    id: 'titan_forge', name: '泰坦熔炉', icon: '🔥',
    levels: [null,
      { cost: { steel: 2000, tech: 250, rare: 500, uranium: 150 }, needPop: 180, powerUse: 80,
        needTech: 't-under-10', globalYieldMul: 1.0,
        desc: '全局产量 ×2！需地下科技 t-under-10、人口 180',
        flavor: '「这不是熔炉，这是印钞机——印的是整个文明的未来。」——熔炉点火仪式', },
    ],
    desc: '终极产能奇观：全局产量 ×2，需地下系终点 t-under-10',
    flavor: '当地心开始为你打工，产量就只是数字。',
    buildFlavor: '熔炉点火时，地心传来一声闷响——整个地下城的人都听到了，他们说：那是行星在「打鼾」。',
    buildStages: [
      '钻探：向地心打出 36 口深井，地下城第一次「发烧」到 60℃。',
      '点火：熔炉试车三秒，全球电网读数翻了一倍。',
      '全功率：熔炉全开，星港的产量报表后面，多了一个 0。',
    ],
    lore: [
      '泰坦熔炉的控制室里有一块牌子：「本机器保修期：40 亿年。」——和行星引擎那块一模一样。',
      '熔炉点火后，矿工们举行了「失业派对」——机器产的矿，比他们挖的多一百倍。',
      '经济学家算了一笔账：泰坦熔炉的回本周期，是 11 天。然后他辞职去开了家面包店。',
    ],
  },
});

// ==================== 五、星门网络胜利补丁（第四胜利条件） ====================
// 与 v1.4 的星门胜利补丁同构：City.prototype.checkGateNetworkVictory +
// GateNetworkVictory.attach。防御式：City 未定义时跳过。
(function () {
  try {
    if (typeof City !== 'undefined' && City.prototype && !City.prototype.checkGateNetworkVictory) {
      // 前置：星门网络建成（builder.count 双通道）→ 第四胜利
      City.prototype.checkGateNetworkVictory = function (builder) {
        try {
          if (this.earthLinked) return true;
          let n = 0;
          if (builder && typeof builder.count === 'function') n = builder.count('gate_network');
          else if (builder && Array.isArray(builder.buildings))
            n = builder.buildings.filter((b) => b && b.id === 'gate_network').length;
          if (n >= 1) { this.earthLinked = true; return true; }
        } catch (e) {}
        return false;
      };
      // anyVictory 纳入第四胜利（v1.4 补丁已处理 gateWon，此处追加 earthLinked）
      if (typeof City.prototype.anyVictory === 'function' && !City.prototype._v15patched) {
        const _any = City.prototype.anyVictory;
        City.prototype.anyVictory = function () {
          try { if (_any.call(this)) return true; } catch (e) {}
          return !!this.earthLinked;
        };
        City.prototype._v15patched = true;
      }
    }
  } catch (e) {}
})();

const GateNetworkVictory = {
  // 自动接入：每 tick 检查一次，首次达标弹胜利面板（game.js 需实现 showVictory('gate_network')）
  attach(game) {
    if (!game || game._gateNetWinAttached) return;
    game._gateNetWinAttached = true;
    try {
      if (typeof game.tick === 'function') {
        const _tick = game.tick;
        game.tick = function (now, dt) {
          try {
            if (this.city && typeof this.city.checkGateNetworkVictory === 'function' &&
                this.city.checkGateNetworkVictory(this.builder) && !this._gateNetWinShown) {
              this._gateNetWinShown = true;
              if (typeof this.showVictory === 'function') this.showVictory('gate_network');
            }
          } catch (e) {}
          return _tick.call(this, now, dt);
        };
      }
    } catch (e) {}
  },
};

// ==================== 附录 A：v1.5 数值总表 ====================
// 科技 cost（科技点）汇总：
//   地下系：20/20/40/40/70/70/110/110/160/180 = 820
//   海洋系：20/20/40/40/70/70/110/110/160/180 = 820
//   治理系：20/20/40/40/70/70/110/110/160/180 = 820
//   终极系：30/30/50/50/80/80/120/120/170/200 = 930
//   四系全满 = 3390 科技点 ≈ 深空线（1695）的 2 倍，v1.5 是「赢过一次之后」的游戏。
// 关键叠加验算：
//   地下建造成本：0.9×0.9×0.85×0.8×0.75 = 0.413（约 4 折）
//   地下产量：1.2×1.25×1.3×1.4×1.5 = 4.095（约 4 倍）
//   海洋建造成本：同地下 = 0.413；海洋产量：1.2×1.25×1.3×1.4×1.5 = 4.095
//   总督忠诚：10+15+20+25+30 = +100（满编总督永不叛变，by design）
//   终极全局产量：1.1×1.15×1.2×1.25×1.3 = 2.467（约 2.5 倍）
//   终极灾难减伤：0.9×0.85×0.8×0.75×0.7 = 0.321（伤害打 3 折）
// 灾难时间轴（首发）：v1.3 地面 12/15/20 分钟 → v1.4 轨道 10/14/18 分钟 →
//   v1.5 新灾难 22/24/26/28/30 分钟，大后期每 2~4 分钟一件事。
// 奇观造价（最贵三项）：星门网络 3000 钢 / 行星护盾 2500 钢 / 泰坦熔炉 2000 钢。

// ==================== 附录 B：v1.5 自检 ====================
function ContentV15SelfTest() {
  const errors = [];
  const ok = (cond, msg) => { if (!cond) errors.push(msg); };
  try {
    // —— 科技 40 项 ——
    ok(Array.isArray(TECH_V15), 'TECH_V15 未定义');
    ok(TECH_V15.length === 40, '科技应为 40 项，实际 ' + (TECH_V15 && TECH_V15.length));
    const KNOWN_FX = ['underCostMul','underYieldMul','quakeResist','geoYieldMul',
      'oceanCostMul','oceanYieldMul','tsunamiResist','waterMul',
      'loyaltyAdd','taxMul','popGrowthMul','unrestMul',
      'globalYieldMul','disasterMul','techCostMul','powerMul'];
    const seen = {};
    for (const t of TECH_V15) {
      ok(t.id && t.name && t.icon && t.desc, '科技缺字段: ' + (t && t.id));
      ok(typeof t.cost === 'number' && t.cost > 0, (t && t.id) + ' cost 非法');
      ok(Array.isArray(t.pre), (t && t.id) + ' pre 应为数组');
      ok(!!t.effect, (t && t.id) + ' 缺少 effect');
      ok(!seen[t.id], '科技 id 重复: ' + t.id); seen[t.id] = 1;
    }
    for (const t of TECH_V15) for (const p of (t.pre || [])) ok(!!seen[p], t.id + ' 的前置 ' + p + ' 不存在');
    for (const t of TECH_V15) for (const k of Object.keys(t.fx || {})) ok(KNOWN_FX.indexOf(k) !== -1, t.id + ' 未知 fx 键: ' + k);
    if (typeof TECH_DEFS !== 'undefined') {
      for (const t of TECH_V15) {
        ok(!!TECH_DEFS[t.id], 'TECH_DEFS 缺少 ' + t.id);
        if (TECH_DEFS[t.id]) ok(TECH_DEFS[t.id].branch === t.branch, t.id + ' 分支不一致');
      }
      const order15 = (typeof TECH_ORDER !== 'undefined' ? TECH_ORDER : []).filter((id) => seen[id]);
      ok(order15.length === 40, 'TECH_ORDER 缺少 v1.5 科技，实际 ' + order15.length);
    }
    if (typeof TECH_BRANCHES !== 'undefined') {
      for (const b of ['under','ocean','gov','ult']) ok(!!TECH_BRANCHES[b], 'TECH_BRANCHES 缺少分支: ' + b);
    }
    // —— 成就 50 项 ——
    ok(Array.isArray(ACH_V15), 'ACH_V15 未定义');
    ok(ACH_V15.length === 50, '成就应为 50 项，实际 ' + (ACH_V15 && ACH_V15.length));
    const cats = {};
    const aseen = {};
    for (const a of ACH_V15) {
      ok(a.id && a.name && a.icon && a.desc, '成就缺字段: ' + (a && a.id));
      ok(!!a.check && typeof a.check === 'string', (a && a.id) + ' check 应为判定描述文字');
      ok(!aseen[a.id], '成就 id 重复: ' + a.id); aseen[a.id] = 1;
      cats[a.cat] = (cats[a.cat] || 0) + 1;
      ok(typeof a.checkFn === 'function', (a && a.id) + ' 缺少 checkFn');
      try { a.checkFn(null); a.checkFn({}); }
      catch (e) { errors.push(a.id + ' checkFn 在空 game 下抛错: ' + e.message); }
    }
    const expectCats = { '地下': 7, '海洋': 7, '总督': 7, '战役': 6, '建筑': 6, '外交': 6, '军事': 6, '奇观': 5 };
    for (const c of Object.keys(expectCats)) ok(cats[c] === expectCats[c], '类别「' + c + '」应为 ' + expectCats[c] + ' 项，实际 ' + (cats[c] || 0));
    if (typeof ACHIEVEMENT_DEFS !== 'undefined') {
      const found = {};
      for (const a of ACHIEVEMENT_DEFS) found[a.id] = a;
      for (const a of ACH_V15) ok(!!found[a.id], 'ACHIEVEMENT_DEFS 缺少 ' + a.id);
    }
    // —— 灾难 5 种 ——
    ok(Array.isArray(DISASTERS_V15), 'DISASTERS_V15 未定义');
    ok(DISASTERS_V15.length === 5, '灾难应为 5 种，实际 ' + (DISASTERS_V15 && DISASTERS_V15.length));
    for (const d of DISASTERS_V15) {
      ok(d.id && d.name && d.icon && d.desc, '灾难缺字段: ' + (d && d.id));
      ok(typeof d.warnMs === 'number' && typeof d.durationMs === 'number', d.id + ' warnMs/durationMs 非法');
      ok(!!d.effect && !!d.counter, d.id + ' 缺少 effect/counter');
    }
    ok(typeof HazardPack15 === 'function', 'HazardPack15 未定义');
    const hz = new HazardPack15();
    hz.update(Date.now(), null); hz.update(Date.now(), {});  // 空 game 不应抛错
    ok(hz.ashfallMul() === 1 && hz.uprisingActive() === false, '查询接口默认值异常');
    const sv = hz.save();
    ok(sv && sv.v === 15 && sv.nextIn && Object.keys(sv.nextIn).length === 5, 'save 字段缺失');
    // —— 奇观 3 种 ——
    ok(Array.isArray(WONDERS_V15), 'WONDERS_V15 未定义');
    ok(WONDERS_V15.length === 3, '奇观应为 3 种，实际 ' + (WONDERS_V15 && WONDERS_V15.length));
    const wids = ['shield_planet', 'gate_network', 'titan_forge'];
    for (const w of WONDERS_V15) {
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
        }
      }
      ok((BUILDINGS.gate_network.levels[1] || {}).winsGame === 'gate_network', '星门网络缺少 winsGame 标记');
      ok((BUILDINGS.shield_planet.levels[1] || {}).disasterImmune === true, '行星护盾缺少 disasterImmune 标记');
      ok((BUILDINGS.titan_forge.levels[1] || {}).globalYieldMul === 1.0, '泰坦熔炉缺少 globalYieldMul 标记');
    }
    // —— 第四胜利补丁 ——
    if (typeof City !== 'undefined') {
      ok(typeof City.prototype.checkGateNetworkVictory === 'function', 'City.checkGateNetworkVictory 补丁缺失');
    }
    ok(typeof GateNetworkVictory === 'object' && typeof GateNetworkVictory.attach === 'function', 'GateNetworkVictory 缺失');
  } catch (e) { errors.push('自检异常: ' + (e && e.message)); }
  return { pass: errors.length === 0, fail: errors.length, errors };
}

if (typeof module !== 'undefined') {
  Object.assign(module.exports, { ContentV15SelfTest, TECH_V15, ACH_V15, DISASTERS_V15, WONDERS_V15, HazardPack15, GateNetworkVictory, P15U });
}

// ==================== 附录 C：第四胜利面板文案 ====================
// game.js 的 showVictory(type) 新增 'gate_network' 分支时可直接引用本对象。
const GATE_NETWORK_VICTORY_TEXT = {
  title: '🌀 星门网络贯通！',
  body: '第一批飞船穿过星门，11 秒后抵达地球。地球发来贺电，只有一句话：「欢迎回家。」——第四胜利达成！',
  hint: '火星与地球之间，第一次有了「门」。征服是向外走，回家是向心里走。',
};

// ==================== 附录 D：接入清单（给集成者） ====================
//   1. tech.js：TECH_BRANCHES.under/ocean/gov/ult 四分支配色已注册；
//      新增 fx 键（键语义见文件头注释）按既有规则接入 TechTree.mul()，
//      loyaltyAdd 为加法键，由总督系统读取时加法汇总；
//      quakeResist / tsunamiResist 为加法键（上限 0.9），由 disaster.js 读取。
//   2. achievements.js：ACH_V15 已 push 进 ACHIEVEMENT_DEFS（check = checkFn）；
//      成就面板如需展示判定文字，可从 ACH_V15 按 id 取 check 字段。
//   3. 灾难：HazardPack15.attach(game) 接入 tick/save/load；
//      resources.js 产量结算处读取 game.hazard15.ashfallMul()（火山灰 -30%）；
//      总督系统读取 game.hazard15.uprisingActive() / uprisingBetrayAdd() / uprisingUnrestAdd()；
//      disaster.js 结算处读取行星护盾免疫（builder.count('shield_planet')>=1 → 跳过）。
//   4. 奇观：BUILDINGS 已注册 shield_planet / gate_network / titan_forge（单级、限建 1 座）；
//      前置检查（needTech / needBuilding / needPop）需 build.js 实现，本文件只做数据声明；
//      resources.js 读取泰坦熔炉 globalYieldMul（与行星引擎乘法叠加）；
//      game.js 主循环调用 city.checkGateNetworkVictory(builder) 或 GateNetworkVictory.attach(game)，
//      showVictory 新增 'gate_network' 分支（文案见附录 C）。
//   5. 地下/海洋建筑 id 约定：地下 'u-' 前缀、海洋 'o-' 前缀（P15U.underCount / oceanCount 回退逻辑依赖此约定）。

// ==================== 附录 E：已知限制与诚实声明 ====================
//   1. game.underground / game.ocean / game.governor / game.campaign 四个系统
//      在 v1.5 时点尚未实现——相关成就 checkFn 在系统上线前恒为 false，
//      HazardPack15.update 在无目标时推迟再试。这是设计，不是 bug，
//      但「地下/海洋/总督玩法好不好玩」未经验证。
//   2. 奇观建造前置（needTech / needBuilding / needPop / 限建 1 座）需要 build.js
//      实现检查逻辑——本文件只声明数据，未实现检查逻辑。
//   3. 第四胜利的 showVictory('gate_network') 分支需要 game.js 手动添加
//      （文案已备好：GATE_NETWORK_VICTORY_TEXT），或调 GateNetworkVictory.attach；
//      未接入前，星门网络建成只会触发成就 qg-gate，不会弹胜利面板。
//   4. 数值（成本/伤害/间隔/叠加倍率）均为纸面推演，未经真实游玩验证；
//      附录 A 的总表说明了如何只改常量调难度。
//   5. ContentV15SelfTest() 验证的是「注册表完整性」，不是「好不好玩」——
//      平衡性请以实际游玩为准。

// ==================== 文件统计 ====================
//   一、科技 +40（TECH_V15：地下/海洋/治理/终极各 10，2 列 × 5 层 pre 链，
//      终极项跨列双前置；fx 键语义注释；TECH_DEFS/TECH_ORDER 注册）
//   二、成就 +50（ACH_V15：地下 7 / 海洋 7 / 总督 7 / 战役 6 /
//      建筑 6 / 外交 6 / 军事 6 / 奇观 5；check 判定文字 + checkFn 防御式判定；
//      ACHIEVEMENT_DEFS 注册）
//   三、新灾难 ×5（DISASTERS_V15 配置表 + class HazardPack15：
//      constructor/update/save/load/attach + ashfallMul/uprisingActive 查询接口）
//   四、新奇观 ×3（WONDERS_V15 配置表 + BUILDINGS 注册：lore×3 / buildStages×3）
//   五、星门网络胜利补丁（City.prototype.checkGateNetworkVictory + GateNetworkVictory.attach）
//   附录 A~E：数值总表 / 自检 / 第四胜利文案 / 接入清单 / 已知限制
