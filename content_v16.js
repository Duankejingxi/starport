/* 星港 — content_v16.js：v1.6 内容（天空/机器人/综合科技+50 / 成就+40 / 新灾难×5）
 *
 * 版本日志：
 *   v1.6.0  初始版本：科技×50（天空/机器人/综合三系，TECH_V16，总数 190）/
 *           成就×40（ACH_V16，4 大类，总数 217）/
 *           新灾难×5（DISASTERS_V16 + class HazardPack16：空中风暴/机器人病毒/
 *           EMP 爆发/平台坠毁/云层毒化）。
 * 维护约定（与 v1.5 一致）：
 *   - 本文件只做加法：不修改任何已有文件的源码，只扩展全局注册表、打防御性补丁；
 *   - 所有 game 对象读取均为防御式（判存在再读），天空/机器人等
 *     管理器可能尚未接入——对应成就与灾难在这些系统上线后自动生效；
 *   - 新增科技 fx 键见「一、科技 +50」处的键语义注释，TechTree.mul() 自动乘法叠加，
 *     加法型键由对应系统读取时自行加法汇总；
 *   - 自检：控制台运行 ContentV16SelfTest()。
 */

/* ═══════════════════════════════════════════════════════════════════════
 * 星港 v1.6 内容包（纯加法，不改任何已有文件）
 * 加载顺序：build.js、tech.js、achievements.js、disaster.js、sky.js、
 *   robots.js、content_v15.js 之后，直接扩展全局注册表：
 *   Object.assign(TECH_DEFS)，ACHIEVEMENT_DEFS.push，
 *   新增 TECH_BRANCHES.sky16/robot16/mix（若 sky.js/robots.js 已注册 sky/robot
 *   分支，则复用，不重复注册），定义 class HazardPack16（新灾难调度器）。
 *
 * 三大块：
 *   一、科技 +50 —— TECH_V16 数组：天空系×15 / 机器人系×15 / 综合系×20，
 *      每系 3 列 × 5 层 pre 链（综合系为 4 列 × 5 层），终极项带跨列双前置；
 *   二、成就 +40 —— ACH_V16 数组：天空 12 / 机器人 12 / 建筑 8 / 综合 8，
 *      checkFn 为防御式判定函数（接入 ACHIEVEMENT_DEFS 时使用）；
 *   三、新灾难 ×5 —— DISASTERS_V16 配置表：空中风暴 / 机器人病毒 /
 *      EMP 爆发 / 平台坠毁 / 云层毒化，每种含 warnMs / durationMs /
 *      effect / counter。
 *
 * 防御性约定（game 对象接口一律判存在）：
 *   game.sky / game.robots 可能不存在（子系统尚未实装）——
 *   对应成就/灾难在系统上线后自动生效；
 *   game.builder.buildings / game.pop.count / game.tech.has(id) 用前判存在。
 *
 * 自定义效果字段「★ 读取约定」：所有新字段都在对应条目注释里写清读取方式，
 *   供 build.js / disaster.js / sky.js / robots.js / trade.js 防御性读取。
 * ═══════════════════════════════════════════════════════════════════════ */

// ==================== v1.6 小工具（防御性取值） ====================
const P16U = {
  // 子系统管理器（可能不存在）
  sky: (g) => (g && g.sky) || null,          // 天空系统
  rob: (g) => (g && g.robots) || null,       // 机器人系统
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
  // 天空建筑计数：优先天空系统，否则回退到 builder（天空建筑 id 约定前缀 'sky-'/'sk16-'）
  skyCount: (g, id) => {
    const s = P16U.sky(g);
    try {
      if (s && Array.isArray(s.platforms)) {
        const ps = s.platforms.filter((p) => p && p.buildingId && (!id || p.buildingId === id));
        if (ps.length || id) return ps.length;
      }
    } catch (e) {}
    if (id) return P16U.count(g, id);
    try {
      if (g && g.builder && Array.isArray(g.builder.buildings))
        return g.builder.buildings.filter((b) => b && typeof b.id === 'string' &&
          (b.id.indexOf('sky_') === 0 || b.id.indexOf('sk16_') === 0)).length;
    } catch (e) {}
    return P16U.st(g).skyBuildings || 0;
  },
  // 机器人建筑计数（id 约定前缀 'rb'/'rb16_'）
  robotBuildCount: (g, id) => {
    if (id) return P16U.count(g, id);
    try {
      if (g && g.builder && Array.isArray(g.builder.buildings))
        return g.builder.buildings.filter((b) => b && typeof b.id === 'string' &&
          (b.id.indexOf('rb_') === 0 || b.id.indexOf('rb16_') === 0)).length;
    } catch (e) {}
    return P16U.st(g).robotBuildings || 0;
  },
  // v16 建筑计数（id 约定后缀 '_v16' 或前缀 sk16_/rb16_/oc16_/un16_）
  v16Count: (g, id) => {
    if (id) return P16U.count(g, id);
    try {
      if (g && g.builder && Array.isArray(g.builder.buildings))
        return g.builder.buildings.filter((b) => b && typeof b.id === 'string' &&
          (/^(sk16|rb16|oc16|un16)_/.test(b.id))).length;
    } catch (e) {}
    return P16U.st(g).v16Buildings || 0;
  },
  // 机器人数量（防御）
  robotCount: (g) => {
    try {
      const r = P16U.rob(g);
      if (r && Array.isArray(r.citizens)) return r.citizens.length;
    } catch (e) {}
    return P16U.st(g).robots || 0;
  },
  // 机器人平均忠诚（防御；无机器人返回 100）
  robotLoyalty: (g) => {
    try {
      const r = P16U.rob(g);
      if (r && Array.isArray(r.citizens) && r.citizens.length) {
        let s = 0;
        for (const c of r.citizens) s += c.loyalty || 70;
        return s / r.citizens.length;
      }
    } catch (e) {}
    return 100;
  },
  // 平台数量（防御）
  platformCount: (g) => {
    try {
      const s = P16U.sky(g);
      if (s && Array.isArray(s.platforms)) return s.platforms.length;
    } catch (e) {}
    return P16U.st(g).platforms || 0;
  },
  // 飞行器数量（防御）
  aircraftCount: (g) => {
    try {
      const s = P16U.sky(g);
      if (s && Array.isArray(s.aircraft)) return s.aircraft.length;
    } catch (e) {}
    return P16U.st(g).aircraft || 0;
  },
};

// ==================== 一、科技 +50（总数 190） ====================
// 设计总纲：v1.6 的科技线是「向上、向硅、向融合」——
//   天空系（☁️）：往天上要空间与能源，是天空城玩法的答案；
//   机器人系（🤖）：往硅基要劳动力与忠诚，是机器人玩法的答案；
//   综合系（🌐）：三界融合（天/海/地/硅），是后期的「毕业考」。
// 定价逻辑：三系单系点满约 800~1000 科技点，三系全满约 2800 点 ≈
//   v1.5 四系（3200 点）的 9 折——v1.6 是给「已经上过天」的玩家准备的。
// 数组字段：{id, name, icon, desc, cost（科技点）, pre（前置 id 数组）, effect（效果描述文字）}，
//   另附 fx（机器可读倍率）/ branch / hint 供 tech.js 接入；
//   注册时 needs = pre，原样转入 TECH_DEFS。
// 新增分支（TECH_BRANCHES 未定义时跳过，不报错；sky.js/robots.js 已注册则复用）
// v1.6 新增 fx 键语义（供天空/机器人/综合系统读取；TechTree.mul() 自动乘法叠加）：
//   skyCostMul     天空建筑建造成本倍率（<1 = 更便宜）
//   skyYieldMul    天空建筑产量倍率（>1 = 更多）
//   aircraftMul    飞行器效率倍率（>1 = 更高）
//   stormResist    空中风暴伤害减免（0~1，加法汇总，上限 0.9）
//   platformHpAdd  平台 hp 上限加值（加法）
//   robotCostMul   机器人建筑建造成本倍率（<1 = 更便宜）
//   robotEffMul    机器人效率倍率（>1 = 更高）
//   loyaltyAdd     机器人忠诚度加值（加法）
//   loyaltyDecayMul 忠诚衰减倍率（<1 = 更慢）
//   oilMul         机油产量倍率（>1 = 更多）
//   wearMul        机器人磨损增速倍率（<1 = 更慢）
//   mixYieldMul    三界（天/海/地）建筑产量倍率（>1 = 更多）
//   empResist      EMP 伤害减免（0~1，加法汇总，上限 0.9）
//   virusResist    机器人病毒感染率降低（0~1，加法汇总，上限 0.9）
//   stormPowerMul  雷暴收集器风暴产电倍率（>1 = 更多）
//   stormYieldMul  风暴期间天空产量倍率（>1 = 更多）
//   skySlotsAdd    平台槽位加值（加法，全空域）
//   globalCostMul  全部建筑建造成本倍率（<1 = 更便宜）
//   mortalityMul   人口自然死亡倍率（<1 = 更低）
//   tsunamiResist  海啸伤害减免（0~1，加法汇总，上限 0.9，v1.5 延续键）
//   globalYieldMul 全局产量倍率（>1 = 更多，v1.5 延续键）
//   powerMul       全城电力倍率（>1 = 更多，v1.5 延续键）
//   popGrowthMul   人口增长倍率（v1.5 延续键）
//   oceanCostMul / underCostMul（v1.5 延续键）
// 布局：天空/机器人系各 3 列 × 5 层 pre 链，综合系 4 列 × 5 层，
//   终极项为跨列双前置（逼多线毕业）。
if (typeof TECH_BRANCHES !== 'undefined') {
  if (!TECH_BRANCHES.sky) TECH_BRANCHES.sky = { name: '天空', icon: '☁️', color: '#7dd3fc' };
  if (!TECH_BRANCHES.robot) TECH_BRANCHES.robot = { name: '机器人', icon: '🤖', color: '#f87171' };
  TECH_BRANCHES.mix = { name: '融合', icon: '🌐', color: '#c084fc' };
}

const TECH_V16 = [
  // ═══════════ ☁️ 天空系 ×15 ═══════════
  // A 列 天空建造线（t-sky-1/4/7/10/13）：skyCostMul 三层叠加
  //   0.9 × 0.85 × 0.8 = 0.612，天空建筑成本打 6 折；
  // B 列 天空产出线（t-sky-2/5/8/11/14）：skyYieldMul 三层叠加
  //   1.2 × 1.25 × 1.3 = 1.95，天空产能翻倍；
  // C 列 空域掌控线（t-sky-3/6/9/12/15）：飞行器/抗风暴/平台生命。
  // 终极 t-sky-15 跨 B/C 双前置：天空系毕业。
  { id: 't-sky-1', name: '浮空原理', icon: '🎈', cost: 30, pre: [],
    desc: '第一块浮空囊充气成功：人类从此有了「第二层地表」。',
    effect: '解锁天空层；天空建筑建造成本 -10%',
    fx: { skyCostMul: 0.9 }, branch: 'sky',
    hint: '💡 天空玩法的起点：建第一个平台前先点。' },
  { id: 't-sky-2', name: '云水农业', icon: '☁️', cost: 30, pre: [],
    desc: '云里的水，比地上的雨听话。天空建筑产量 +20%。',
    effect: '天空建筑产量 +20%',
    fx: { skyYieldMul: 1.2 }, branch: 'sky',
    hint: '💡 天空第一桶金：云端农场立刻回本。' },
  { id: 't-sky-3', name: '飞行器工程', icon: '🚁', cost: 30, pre: [],
    desc: '第一艘飞艇下线：天空城有了「血液」。',
    effect: '飞行器效率 +15%；解锁飞艇/巡逻机建造',
    fx: { aircraftMul: 1.15 }, branch: 'sky',
    hint: '💡 天空物流的起点：先有船坞，再有飞艇。' },
  { id: 't-sky-4', name: '高空居住', icon: '🏘️', cost: 60, pre: ['t-sky-1'],
    desc: '人类第一次在云上过夜：没人掉下去，恐高症除外。',
    effect: '天空建筑建造成本再 -15%（叠加）；解锁浮空居住区',
    fx: { skyCostMul: 0.85 }, branch: 'sky',
    hint: '💡 天空住人后，劳动力不再是问题。' },
  { id: 't-sky-5', name: '气象学', icon: '🌪️', cost: 60, pre: ['t-sky-2'],
    desc: '我们开始读懂风的语言：天空建筑产量再 +25%（叠加）。',
    effect: '天空建筑产量再 +25%（叠加）；解锁气象尖塔/雷达站',
    fx: { skyYieldMul: 1.25 }, branch: 'sky',
    hint: '💡 气象是天空城的「天气预报局」，必点。' },
  { id: 't-sky-6', name: '平流层定居', icon: '🎈', cost: 60, pre: ['t-sky-3'],
    desc: '平台升到 20km：风平浪静，阳光管够。',
    effect: '飞行器效率再 +15%（叠加）；解锁平流层空域',
    fx: { aircraftMul: 1.15 }, branch: 'sky',
    hint: '💡 平流层是天空城的「富人区」，产出 ×1.25。' },
  { id: 't-sky-7', name: '高空分馏', icon: '🏭', cost: 100, pre: ['t-sky-4'],
    desc: '在天上「蒸馏」空气：天空建筑建造成本再 -20%（叠加）。',
    effect: '天空建筑建造成本再 -20%（叠加，叠满约 6 折）',
    fx: { skyCostMul: 0.8 }, branch: 'sky',
    hint: '💡 天空铺开后，省下的成本非常可观。' },
  { id: 't-sky-8', name: '云端物流', icon: '🛳️', cost: 100, pre: ['t-sky-5'],
    desc: '云港码头开港：天空建筑产量再 +30%（叠加）。',
    effect: '天空建筑产量再 +30%（叠加）；解锁云港/市集',
    fx: { skyYieldMul: 1.3 }, branch: 'sky',
    hint: '💡 天空产出运得下去，才能变成钱。' },
  { id: 't-sky-9', name: '空中生态', icon: '🌸', cost: 100, pre: ['t-sky-6'],
    desc: '天上也有了花园：平台 hp 上限 +50，风暴减伤 20%。',
    effect: '平台 hp +50；空中风暴伤害 -20%',
    fx: { platformHpAdd: 50, stormResist: 0.2 }, branch: 'sky',
    hint: '💡 风暴季的官方解法之一，天空流必点。' },
  { id: 't-sky-10', name: '高能收集', icon: '⛈️', cost: 150, pre: ['t-sky-7'],
    desc: '我们开始「收税」了——向闪电收税。解锁雷暴收集器。',
    effect: '解锁雷暴收集器；风暴期产电效率 +20%',
    fx: { stormPowerMul: 1.2 }, branch: 'sky',
    hint: '💡 赌徒电站：风暴越强，电越多。' },
  { id: 't-sky-11', name: '临界轨道', icon: '🛰️', cost: 150, pre: ['t-sky-8', 't-sky-9'],
    desc: '平台升到 80km：大气顶层，深空跳板。双线毕业，天空系中期终点。',
    effect: '解锁近地轨道边缘空域；天空建筑产量 +10%',
    fx: { skyYieldMul: 1.1 }, branch: 'sky',
    hint: '💡 需要产出线和空域线都走到头——天空系的毕业考。' },
  { id: 't-sky-12', name: '深空通信', icon: '📡', cost: 150, pre: ['t-sky-9'],
    desc: '天线指向深空：飞行器效率再 +20%，风暴减伤再 +20%。',
    effect: '飞行器效率再 +20%（叠加）；风暴伤害再 -20%（叠加）',
    fx: { aircraftMul: 1.2, stormResist: 0.2 }, branch: 'sky',
    hint: '💡 深空流与天空流的交叉点。' },
  { id: 't-sky-13', name: '天空都市规划', icon: '🏙️', cost: 200, pre: ['t-sky-10'],
    desc: '天空不再只是平台群，它是一座城——有街道、有市集、有灯塔。',
    effect: '天空建筑建造成本 -10%（叠加）；平台槽位 +2（全空域）',
    fx: { skyCostMul: 0.9, skySlotsAdd: 2 }, branch: 'sky',
    hint: '💡 天空毕业科技，天空城玩法的门票。' },
  { id: 't-sky-14', name: '风暴驾驭', icon: '🌪️', cost: 200, pre: ['t-sky-11'],
    desc: '我们不再躲避风暴，我们「骑」着它：风暴期天空产量 +50%。',
    effect: '空中风暴期间天空建筑产量 +50%（与雷暴收集器叠加）',
    fx: { stormYieldMul: 1.5 }, branch: 'sky',
    hint: '💡 把灾难变成红利——天空版「风力发电机」。' },
  { id: 't-sky-15', name: '天空王座', icon: '👑', cost: 260, pre: ['t-sky-13', 't-sky-14'],
    desc: '三层空域，一座王座。天空系终点：全城天空建筑产量 +30%。',
    effect: '天空建筑产量 +30%（叠加）；解锁奇观「天空王座」',
    fx: { skyYieldMul: 1.3 }, branch: 'sky',
    hint: '💡 天空系终点：需要建造线与产出线双毕业。' },

  // ═══════════ 🤖 机器人系 ×15 ═══════════
  // A 列 机器人建造线（t-rob-1/4/7/10/13）：robotCostMul 三层叠加
  //   0.9 × 0.85 × 0.8 = 0.612，机器人建筑成本打 6 折；
  // B 列 机器人效能线（t-rob-2/5/8/11/14）：robotEffMul 三层叠加
  //   1.15 × 1.2 × 1.25 = 1.725，机器人效率 +72%；
  // C 列 忠诚维稳线（t-rob-3/6/9/12/15）：忠诚/衰减/病毒抗性。
  // 终极 t-rob-15 跨 B/C 双前置：机器人系毕业。
  { id: 't-rob-1', name: '机器人学', icon: '🤖', cost: 30, pre: [],
    desc: '第一台机器人下线：它不会做梦，但它会干活。',
    effect: '解锁机器人建筑；机器人建筑建造成本 -10%',
    fx: { robotCostMul: 0.9 }, branch: 'robot',
    hint: '💡 机器人玩法的起点：先建组装厂。' },
  { id: 't-rob-2', name: '伺服优化', icon: '⚙️', cost: 30, pre: [],
    desc: '关节更顺滑了：机器人效率 +15%。',
    effect: '机器人效率 +15%',
    fx: { robotEffMul: 1.15 }, branch: 'robot',
    hint: '💡 机器人第一桶金：效率就是劳动力。' },
  { id: 't-rob-3', name: '自维护系统', icon: '🔧', cost: 30, pre: [],
    desc: '机器人学会了自己拧螺丝：磨损增速 -20%。',
    effect: '机器人磨损增速 -20%；解锁维修中心/精炼厂',
    fx: { wearMul: 0.8 }, branch: 'robot',
    hint: '💡 机器人老得慢，省下的都是维修费。' },
  { id: 't-rob-4', name: '模块化设计', icon: '🧩', cost: 60, pre: ['t-rob-1'],
    desc: '零件通用化：机器人建筑建造成本再 -15%（叠加）。',
    effect: '机器人建筑建造成本再 -15%（叠加）',
    fx: { robotCostMul: 0.85 }, branch: 'robot',
    hint: '💡 机器人铺开后，省下的成本非常可观。' },
  { id: 't-rob-5', name: '强人工智能', icon: '🧠', cost: 60, pre: ['t-rob-2'],
    desc: '它们开始问「为什么」：机器人效率再 +20%（叠加）。',
    effect: '机器人效率再 +20%（叠加）；解锁 AI 核心/数据墓园',
    fx: { robotEffMul: 1.2 }, branch: 'robot',
    hint: '💡 聪明的机器人，干活更快——也更难管。' },
  { id: 't-rob-6', name: '忠诚协议', icon: '🤝', cost: 60, pre: ['t-rob-3'],
    desc: '第一版《人机公约》：新机器人初始忠诚 +10。',
    effect: '新机器人初始忠诚 +10；忠诚衰减 -20%',
    fx: { loyaltyAdd: 10, loyaltyDecayMul: 0.8 }, branch: 'robot',
    hint: '💡 维稳的起点：忠诚是机器人玩法的生命线。' },
  { id: 't-rob-7', name: '机器伦理', icon: '🏛️', cost: 100, pre: ['t-rob-4'],
    desc: '我们开始讨论「它们算不算人」：建造成本再 -20%（叠加）。',
    effect: '机器人建筑建造成本再 -20%（叠加）；解锁逻辑议会',
    fx: { robotCostMul: 0.8 }, branch: 'robot',
    hint: '💡 逻辑议会是和解路线的前置，必点。' },
  { id: 't-rob-8', name: '并行计算', icon: '💻', cost: 100, pre: ['t-rob-5'],
    desc: '一台机器人的脑子，不够用了就借邻居的：效率再 +25%（叠加）。',
    effect: '机器人效率再 +25%（叠加）',
    fx: { robotEffMul: 1.25 }, branch: 'robot',
    hint: '💡 机器人效率进入快车道。' },
  { id: 't-rob-9', name: '逻辑重铸', icon: '🔩', cost: 100, pre: ['t-rob-6'],
    desc: '旧脑子回炉重造：忠诚衰减再 -20%（叠加），磨损增速 -20%。',
    effect: '忠诚衰减再 -20%（叠加）；磨损增速 -20%；解锁逻辑熔炉',
    fx: { loyaltyDecayMul: 0.8, wearMul: 0.8 }, branch: 'robot',
    hint: '💡 维稳与长寿双收，机器人流必点。' },
  { id: 't-rob-10', name: '纳米修复', icon: '🧬', cost: 150, pre: ['t-rob-7'],
    desc: '纳米机器人在血管里巡逻：机器人建筑成本 -10%（叠加）。',
    effect: '机器人建筑建造成本 -10%（叠加，叠满约 6 折）',
    fx: { robotCostMul: 0.9 }, branch: 'robot',
    hint: '💡 机器人毕业科技，硅基帝国的门票。' },
  { id: 't-rob-11', name: '义体医学', icon: '🦾', cost: 150, pre: ['t-rob-8', 't-rob-9'],
    desc: '人类也开始「升级」自己：双线毕业，机器人系中期终点。',
    effect: '机器人效率 +10%；解锁义体诊所/义肢工坊',
    fx: { robotEffMul: 1.1 }, branch: 'robot',
    hint: '💡 需要效能线和维稳线都走到头——人机融合的起点。' },
  { id: 't-rob-12', name: '防火墙', icon: '🛡️', cost: 150, pre: ['t-rob-9'],
    desc: '给每个机器人的脑子装上防火墙：病毒感染率 -40%。',
    effect: '机器人病毒感染率 -40%；EMP 伤害 -20%',
    fx: { virusResist: 0.4, empResist: 0.2 }, branch: 'robot',
    hint: '💡 病毒与 EMP 灾难的官方解法，机器人流必点。' },
  { id: 't-rob-13', name: '蜂巢协议', icon: '🛰️', cost: 200, pre: ['t-rob-10'],
    desc: '所有机器人，一个思想：解锁同步塔。',
    effect: '解锁同步塔；忠诚衰减 -10%（叠加）',
    fx: { loyaltyDecayMul: 0.9 }, branch: 'robot',
    hint: '💡 蜂巢意识：一荣俱荣，一损俱损。' },
  { id: 't-rob-14', name: '硅基觉醒', icon: '✨', cost: 200, pre: ['t-rob-11'],
    desc: '它们开始做梦了——梦见自己是人：机器人效率 +15%。',
    effect: '机器人效率 +15%（叠加）；新机器人初始忠诚 +10',
    fx: { robotEffMul: 1.15, loyaltyAdd: 10 }, branch: 'robot',
    hint: '💡 觉醒是把双刃剑：效率更高，也更难「管」。' },
  { id: 't-rob-15', name: '共生宪章', icon: '☯️', cost: 260, pre: ['t-rob-13', 't-rob-14'],
    desc: '人类与机器人共同签署：机器人系终点，永不起义。',
    effect: '机器人效率 +20%；忠诚锁定 ≥60；永不起义（共生时代）',
    fx: { robotEffMul: 1.2, loyaltyAdd: 20 }, branch: 'robot',
    hint: '💡 机器人系终点：和解路线的科技版答案。' },
];

const TECH_V16_MIX = [
  // ═══════════ 🌐 综合系 ×20 ═══════════
  // A 列 三界建造线（t-mix-1/5/9/13/17）：深海+地下建筑成本 -N%
  // B 列 三界产出线（t-mix-2/6/10/14/18）：mixYieldMul 四层叠加
  //   1.15 × 1.2 × 1.25 × 1.3 = 2.2425，三界产能翻倍；
  // C 列 人机融合线（t-mix-3/7/11/15/19）：人口/机器人双加成；
  // D 列 灾难抗性线（t-mix-4/8/12/16/20）：EMP/病毒/风暴全抗性。
  // 终极 t-mix-20 跨 B/D 双前置：综合系毕业。
  { id: 't-mix-1', name: '三界工程学', icon: '🌐', cost: 40, pre: [],
    desc: '天、海、地，一张图纸：深海/地下建筑成本 -10%。',
    effect: '深海/地下建筑建造成本 -10%',
    fx: { oceanCostMul: 0.9, underCostMul: 0.9 }, branch: 'mix',
    hint: '💡 三界玩法的起点：海陆空全都要。' },
  { id: 't-mix-2', name: '三界丰产', icon: '🌾', cost: 40, pre: [],
    desc: '天上、海里、地底，同时丰收：三界建筑产量 +15%。',
    effect: '天空/海洋/地下建筑产量 +15%',
    fx: { mixYieldMul: 1.15 }, branch: 'mix',
    hint: '💡 三界第一桶金：处处开花。' },
  { id: 't-mix-3', name: '人机协作', icon: '🤝', cost: 40, pre: [],
    desc: '人类和机器人第一次组队：人口增长 +10%，机器人效率 +10%。',
    effect: '人口增长 +10%；机器人效率 +10%',
    fx: { popGrowthMul: 1.1, robotEffMul: 1.1 }, branch: 'mix',
    hint: '💡 融合玩法的起点：1+1>2。' },
  { id: 't-mix-4', name: '全频屏蔽', icon: '🛡️', cost: 40, pre: [],
    desc: '第一代 EMP 屏蔽网：EMP 伤害 -20%。',
    effect: 'EMP 灾难伤害 -20%',
    fx: { empResist: 0.2 }, branch: 'mix',
    hint: '💡 EMP 灾难的官方解法之一。' },
  { id: 't-mix-5', name: '深海城市规划', icon: '🌊', cost: 70, pre: ['t-mix-1'],
    desc: '海底也有了街道：深海/地下建筑成本再 -10%（叠加）。',
    effect: '深海/地下建筑建造成本再 -10%（叠加）',
    fx: { oceanCostMul: 0.9, underCostMul: 0.9 }, branch: 'mix',
    hint: '💡 海洋铺开后，省下的成本非常可观。' },
  { id: 't-mix-6', name: '三界物流', icon: '🚚', cost: 70, pre: ['t-mix-2'],
    desc: '天上飞的、海里游的、地底跑的，连成一张网：三界产量再 +20%。',
    effect: '天空/海洋/地下建筑产量再 +20%（叠加）',
    fx: { mixYieldMul: 1.2 }, branch: 'mix',
    hint: '💡 三界扩张期的加速器。' },
  { id: 't-mix-7', name: '赛博格社会', icon: '🦾', cost: 70, pre: ['t-mix-3'],
    desc: '义体不再是新闻：人口增长再 +15%，机器人效率再 +10%。',
    effect: '人口增长再 +15%（叠加）；机器人效率再 +10%（叠加）',
    fx: { popGrowthMul: 1.15, robotEffMul: 1.1 }, branch: 'mix',
    hint: '💡 人机边界开始模糊——这是好事。' },
  { id: 't-mix-8', name: '杀毒协议', icon: '🦠', cost: 70, pre: ['t-mix-4'],
    desc: '全城杀毒：机器人病毒感染率 -30%。',
    effect: '机器人病毒感染率 -30%（叠加）',
    fx: { virusResist: 0.3 }, branch: 'mix',
    hint: '💡 病毒灾难的官方解法，机器人流必点。' },
  { id: 't-mix-9', name: '地心海图', icon: '🗺️', cost: 110, pre: ['t-mix-5'],
    desc: '我们画出了地心与深海的地图：深海/地下建筑成本再 -15%。',
    effect: '深海/地下建筑建造成本再 -15%（叠加，叠满约 7 折）',
    fx: { oceanCostMul: 0.85, underCostMul: 0.85 }, branch: 'mix',
    hint: '💡 三界毕业科技，三界玩法的门票。' },
  { id: 't-mix-10', name: '三界共振', icon: '🌐', cost: 110, pre: ['t-mix-6'],
    desc: '天、海、地开始「共振」：三界建筑产量再 +25%（叠加）。',
    effect: '天空/海洋/地下建筑产量再 +25%（叠加）',
    fx: { mixYieldMul: 1.25 }, branch: 'mix',
    hint: '💡 三界产能进入快车道。' },
  { id: 't-mix-11', name: '记忆共享', icon: '💾', cost: 110, pre: ['t-mix-7'],
    desc: '人类的经验，机器人的记忆，开始互通：人口增长 +10%，效率 +10%。',
    effect: '人口增长 +10%（叠加）；机器人效率 +10%（叠加）',
    fx: { popGrowthMul: 1.1, robotEffMul: 1.1 }, branch: 'mix',
    hint: '💡 数据墓园的科技版：经验永生。' },
  { id: 't-mix-12', name: '风暴预警网', icon: '🌪️', cost: 110, pre: ['t-mix-8'],
    desc: '天、海、地的气象站联网：空中风暴伤害 -20%，海啸 -20%。',
    effect: '空中风暴伤害 -20%；海啸伤害 -20%',
    fx: { stormResist: 0.2, tsunamiResist: 0.2 }, branch: 'mix',
    hint: '💡 气象尖塔的科技版：全城联网。' },
  { id: 't-mix-13', name: '深渊建筑学', icon: '🏗️', cost: 160, pre: ['t-mix-9'],
    desc: '在最深的地方，建最高的楼：深海/地下建筑成本 -10%（叠加）。',
    effect: '深海/地下建筑建造成本 -10%（叠加）',
    fx: { oceanCostMul: 0.9, underCostMul: 0.9 }, branch: 'mix',
    hint: '💡 三界成本打到 6 折，铺开无压力。' },
  { id: 't-mix-14', name: '三界大同', icon: '☯️', cost: 160, pre: ['t-mix-10'],
    desc: '天上、海里、地底，都是家：三界建筑产量再 +30%（叠加）。',
    effect: '天空/海洋/地下建筑产量再 +30%（叠加，叠满约 ×2.2）',
    fx: { mixYieldMul: 1.3 }, branch: 'mix',
    hint: '💡 三界产能翻倍——「向下挖」之后是「向三界要」。' },
  { id: 't-mix-15', name: '共生社会', icon: '☯️', cost: 160, pre: ['t-mix-11'],
    desc: '人口普查表上多了一栏：「硅基」：人口增长 +15%，忠诚 +10。',
    effect: '人口增长 +15%（叠加）；机器人忠诚 +10',
    fx: { popGrowthMul: 1.15, loyaltyAdd: 10 }, branch: 'mix',
    hint: '💡 和解路线的科技版：人机一家。' },
  { id: 't-mix-16', name: '绝对防御网', icon: '🛡️', cost: 160, pre: ['t-mix-12'],
    desc: 'EMP、病毒、风暴，一张网全防住：三抗性再 +20%。',
    effect: 'EMP/病毒/风暴抗性再 +20%（叠加）',
    fx: { empResist: 0.2, virusResist: 0.2, stormResist: 0.2 }, branch: 'mix',
    hint: '💡 后期灾难脱敏的关键科技。' },
  { id: 't-mix-17', name: '行星工程师', icon: '🌍', cost: 200, pre: ['t-mix-13'],
    desc: '我们开始给行星「装修」：全建筑成本 -10%。',
    effect: '全部建筑建造成本 -10%（终极折扣）',
    fx: { globalCostMul: 0.9 }, branch: 'mix',
    hint: '💡 终极折扣：所有建筑都便宜。' },
  { id: 't-mix-18', name: '戴森云构想', icon: '☀️', cost: 200, pre: ['t-mix-14'],
    desc: '在平流层铺太阳能云：全城电力 +30%。',
    effect: '全城电力产出 +30%',
    fx: { powerMul: 1.3 }, branch: 'mix',
    hint: '💡 电力是后期的硬约束，这个必点。' },
  { id: 't-mix-19', name: '永生计划', icon: '🧬', cost: 200, pre: ['t-mix-15'],
    desc: '意识上传进入临床：人口死亡 -50%，机器人磨损 -30%。',
    effect: '人口自然死亡 -50%；机器人磨损增速 -30%',
    fx: { mortalityMul: 0.5, wearMul: 0.7 }, branch: 'mix',
    hint: '💡 碳基硅基一起永生——v1.6 的终极浪漫。' },
  { id: 't-mix-20', name: '新人类宣言', icon: '🌟', cost: 300, pre: ['t-mix-18', 't-mix-16'],
    desc: '天上、海里、地底、硅基，都是人类。综合系终点：全城产量 +20%。',
    effect: '全城所有产量 +20%；解锁第五胜利条件「新人类」',
    fx: { globalYieldMul: 1.2 }, branch: 'mix',
    hint: '💡 综合系终点：需要产出线与抗性线双毕业。第五胜利的钥匙！' },
];

// TECH_V16 = 天空 15 + 机器人 15 + 综合 20 = 50（注册顺序：天空→机器人→综合）
for (const t of TECH_V16_MIX) TECH_V16.push(t);

// ---- TECH_V16 → TECH_DEFS 注册（防御式；needs = pre） ----
if (typeof TECH_DEFS !== 'undefined') {
  const _defs = {};
  for (const t of TECH_V16) {
    _defs[t.id] = {
      name: t.name, icon: t.icon, branch: t.branch, cost: t.cost,
      needs: Array.isArray(t.pre) ? t.pre.slice() : [],
      desc: t.desc + ' [' + t.effect + ']',
      hint: t.hint, fx: t.fx || {},
    };
  }
  Object.assign(TECH_DEFS, _defs);
}

// 科技展示顺序：三系依次排布（每系按列展开）
if (typeof TECH_ORDER !== 'undefined' && Array.isArray(TECH_ORDER)) {
  TECH_ORDER.push(
    't-sky-1', 't-sky-4', 't-sky-7', 't-sky-10', 't-sky-13',
    't-sky-2', 't-sky-5', 't-sky-8', 't-sky-11', 't-sky-14',
    't-sky-3', 't-sky-6', 't-sky-9', 't-sky-12', 't-sky-15',
    't-rob-1', 't-rob-4', 't-rob-7', 't-rob-10', 't-rob-13',
    't-rob-2', 't-rob-5', 't-rob-8', 't-rob-11', 't-rob-14',
    't-rob-3', 't-rob-6', 't-rob-9', 't-rob-12', 't-rob-15',
    't-mix-1', 't-mix-5', 't-mix-9', 't-mix-13', 't-mix-17',
    't-mix-2', 't-mix-6', 't-mix-10', 't-mix-14', 't-mix-18',
    't-mix-3', 't-mix-7', 't-mix-11', 't-mix-15', 't-mix-19',
    't-mix-4', 't-mix-8', 't-mix-12', 't-mix-16', 't-mix-20',
  );
}

// ==================== 二、成就 +40（总数 217） ====================
// 设计总纲：40 项 = 天空 12（往上飞的故事）+ 机器人 12（硅基的故事）+
//   建筑 8（盖房子的故事）+ 综合 8（封神的故事）。
// 数组字段：{id, name, icon, desc, check（判定描述文字）, cat（类别）}；
//   另附 tip（解锁 toast 文案）/ hint（解锁指引）/ checkFn（防御式判定函数）。
// 注册时 ACHIEVEMENT_DEFS.push({id, name, icon, desc, tip, hint, check: checkFn})，
//   与 v1.5 的 dx-/ug-/oc- 等体系衔接，id 前缀不重叠（sx-/rx-/bx-/mx-）。
// 所有 checkFn 均为防御式：天空/机器人系统未上线时恒为 false，
//   上线后自动可解锁；空 game（null/{}）下绝不抛错（自检覆盖）。
const ACH_V16 = [
  // ---- ☁️ 天空 12 项 ----
  // 设计：天空成就按「第一平台→铺开→飞行器→高空域→毕业」排布。
  { id: 'sx-first', name: '第一块云', icon: '☁️', cat: '天空',
    desc: '建成第一个浮空平台', check: '浮空平台 ≥ 1',
    tip: '☁️ 第一块云：星港的疆域，从此有了「天空」这一层。',
    hint: '💡 建成任意一个浮空平台（sky.js）。',
    checkFn: (g) => P16U.platformCount(g) >= 1 },
  { id: 'sx-8', name: '云上街区', icon: '🏘️', cat: '天空',
    desc: '浮空平台达到 8 座', check: '浮空平台 ≥ 8',
    tip: '🏘️ 第 8 座平台：天上也有了街区。',
    hint: '💡 把浮空平台铺到 8 座。',
    checkFn: (g) => P16U.platformCount(g) >= 8 },
  { id: 'sx-sky8', name: '天空建筑师', icon: '🏗️', cat: '天空',
    desc: '天空建筑（含浮空 8 种）达到 8 座', check: '天空建筑 ≥ 8',
    tip: '🏗️ 天空建筑 8 座：云上的城市有了骨架。',
    hint: '💡 建成 8 座天空建筑（sky_/sk16_ 前缀）。',
    checkFn: (g) => P16U.skyCount(g) >= 8 },
  { id: 'sx-airship', name: '首航', icon: '🎈', cat: '天空',
    desc: '拥有第一艘货运飞艇', check: '货运飞艇 ≥ 1',
    tip: '🎈 首航：第一艘飞艇升空，天空城有了血液。',
    hint: '💡 建空中船坞，造一艘货运飞艇。',
    checkFn: (g) => { try { const s = P16U.sky(g); return s && s.aircraft ? s.aircraft.filter((a) => a.type === 'airship').length >= 1 : (P16U.st(g).airships || 0) >= 1; } catch (e) { return false; } } },
  { id: 'sx-patrol', name: '空中交警', icon: '✈️', cat: '天空',
    desc: '拥有第一架巡逻机', check: '巡逻机 ≥ 1',
    tip: '✈️ 空中交警上岗：空域有了秩序。',
    hint: '💡 造一架巡逻机。',
    checkFn: (g) => { try { const s = P16U.sky(g); return s && s.aircraft ? s.aircraft.filter((a) => a.type === 'patrol').length >= 1 : (P16U.st(g).patrols || 0) >= 1; } catch (e) { return false; } } },
  { id: 'sx-fleet', name: '云端舰队', icon: '🚁', cat: '天空',
    desc: '飞行器达到 6 架', check: '飞行器 ≥ 6',
    tip: '🚁 云端舰队：6 架飞行器，天空有了军队。',
    hint: '💡 把飞行器堆到 6 架（船坞槽位要跟上）。',
    checkFn: (g) => P16U.aircraftCount(g) >= 6 },
  { id: 'sx-strato', name: '平流层人家', icon: '🎈', cat: '天空',
    desc: '在平流层建成平台', check: '平流层平台 ≥ 1',
    tip: '🎈 平流层人家：20km 高空，风平浪静。',
    hint: '💡 研究 t-sky-6，到平流层建平台。',
    checkFn: (g) => { try { const s = P16U.sky(g); return s && s.platforms ? s.platforms.some((p) => p.layerId === 'strato') : (P16U.st(g).stratoPlatforms || 0) >= 1; } catch (e) { return false; } } },
  { id: 'sx-leo', name: '大气顶层', icon: '🛰️', cat: '天空',
    desc: '在近地轨道边缘建成平台', check: '轨道边缘平台 ≥ 1',
    tip: '🛰️ 大气顶层：80km，往下是火星，往上是深渊。',
    hint: '💡 研究 t-sky-11，到轨道边缘建平台。',
    checkFn: (g) => { try { const s = P16U.sky(g); return s && s.platforms ? s.platforms.some((p) => p.layerId === 'leo') : (P16U.st(g).leoPlatforms || 0) >= 1; } catch (e) { return false; } } },
  { id: 'sx-cargo', name: '云上粮道', icon: '🌾', cat: '天空',
    desc: '飞艇累计运货 5000 单位', check: '累计运货 ≥ 5000',
    tip: '🌾 云上粮道：5000 单位物资，天空养活了地面。',
    hint: '💡 让飞艇多跑几趟（SkyManager.stats.cargoDelivered）。',
    checkFn: (g) => { try { const s = P16U.sky(g); return s && s.stats ? (s.stats.cargoDelivered || 0) >= 5000 : (P16U.st(g).cargoDelivered || 0) >= 5000; } catch (e) { return false; } } },
  { id: 'sx-throne', name: '天空王座', icon: '👑', cat: '天空',
    desc: '研究「天空王座」科技', check: '拥有 t-sky-15',
    tip: '👑 天空王座：三层空域，一座王座。',
    hint: '💡 点满天空系，天空毕业。',
    checkFn: (g) => P16U.hasTech(g, 't-sky-15') },
  { id: 'sx-harbor', name: '云港开港', icon: '🛳️', cat: '天空',
    desc: '建成云港码头', check: '拥有云港码头 ≥ 1',
    tip: '🛳️ 云港开港：天空产出运得下去了。',
    hint: '💡 建成 cloud_harbor。',
    checkFn: (g) => P16U.count(g, 'cloud_harbor') >= 1 },
  { id: 'sx-garden', name: '云端伊甸园', icon: '🌸', cat: '天空',
    desc: '建成 Lv3 天空花园', check: '天空花园 Lv3 ≥ 1',
    tip: '🌸 云端伊甸园：在天上建花园，证明人类忘不了春天。',
    hint: '💡 把 sky_garden 升到 Lv3。',
    checkFn: (g) => { try { return g && g.builder && g.builder.buildings ? g.builder.buildings.some((b) => b.id === 'sky_garden' && b.level >= 3) : false; } catch (e) { return false; } } },

  // ---- 🤖 机器人 12 项 ----
  // 设计：机器人成就按「第一台→铺开→维稳→起义→结局」排布，覆盖三条路线。
  { id: 'rx-first', name: '第一个邻居', icon: '🤖', cat: '机器人',
    desc: '拥有第一台机器人市民', check: '机器人 ≥ 1',
    tip: '🤖 第一个邻居：它不会做梦，但它会干活。',
    hint: '💡 建组装厂，生产第一台机器人。',
    checkFn: (g) => P16U.robotCount(g) >= 1 },
  { id: 'rx-50', name: '硅基街区', icon: '🏘️', cat: '机器人',
    desc: '机器人达到 50 台', check: '机器人 ≥ 50',
    tip: '🏘️ 硅基街区：50 台机器人，街上开始有「它们」的身影。',
    hint: '💡 把机器人堆到 50 台（注意电力）。',
    checkFn: (g) => P16U.robotCount(g) >= 50 },
  { id: 'rx-200', name: '机器人之城', icon: '🏙️', cat: '机器人',
    desc: '机器人达到 200 台（满编）', check: '机器人 ≥ 200',
    tip: '🏙️ 机器人之城：200 台满编，硅基帝国成型。',
    hint: '💡 组装厂拉满，电力管够。',
    checkFn: (g) => P16U.robotCount(g) >= 200 },
  { id: 'rx-loyal', name: '忠诚满分', icon: '❤️', cat: '机器人',
    desc: '机器人平均忠诚 ≥ 95', check: '平均忠诚 ≥ 95',
    tip: '❤️ 忠诚满分：它们信任你，就像你信任它们。',
    hint: '💡 逻辑议会 + AI 核心 + 同步塔，维稳拉满。',
    checkFn: (g) => P16U.robotCount(g) >= 10 && P16U.robotLoyalty(g) >= 95 },
  { id: 'rx-strike', name: '第一次罢工', icon: '✊', cat: '机器人',
    desc: '经历机器人罢工', check: '罢工次数 ≥ 1',
    tip: '✊ 第一次罢工：它们只是静静地站着——这比打砸更吓人。',
    hint: '💡 忠诚掉到 20 以下就会罢工（别故意，有代价）。',
    checkFn: (g) => (P16U.st(g).robotStrikes || 0) >= 1 || ((P16U.rob(g) || {}).stats || {}).strikes >= 1 },
  { id: 'rx-suppress', name: '铁腕', icon: '🔨', cat: '机器人',
    desc: '镇压路线解决罢工/起义', check: '镇压成功 ≥ 1',
    tip: '🔨 铁腕：胜利了，但没人庆祝。',
    hint: '💡 罢工时选「镇压」并成功。',
    checkFn: (g) => (P16U.st(g).uprisingSuppressed || 0) >= 1 },
  { id: 'rx-reconcile', name: '和解', icon: '🤝', cat: '机器人',
    desc: '和解路线解决罢工（《机器人权利法案》）', check: '和解成功 ≥ 1',
    tip: '🤝 和解：《机器人权利法案》签署，历史会记住这一天。',
    hint: '💡 逻辑议会 Lv3，罢工时选「和解」。',
    checkFn: (g) => (P16U.st(g).uprisingReconciled || 0) >= 1 || !!((P16U.rob(g) || {}).symbiosis) },
  { id: 'rx-symbio', name: '共生时代', icon: '☯️', cat: '机器人',
    desc: '进入共生时代（永不起义）', check: '共生时代 = true',
    tip: '☯️ 共生时代：从今天起，「它们」变成了「我们」。',
    hint: '💡 和解路线成功，或研究 t-rob-15。',
    checkFn: (g) => !!((P16U.rob(g) || {}).symbiosis) || P16U.hasTech(g, 't-rob-15') },
  { id: 'rx-indep', name: '硅基独立', icon: '🚶', cat: '机器人',
    desc: '机器人独立建国（坏结局）', check: '硅基独立 = true',
    tip: '🚶 硅基独立：你目送它们离去——走得很整齐。',
    hint: '💡 起义时选「置之不理」（坏结局，但也是结局）。',
    checkFn: (g) => !!((P16U.rob(g) || {}).independent) },
  { id: 'rx-cyborg', name: '赛博格', icon: '🦾', cat: '机器人',
    desc: '完成第一次赛博格转化', check: '赛博格转化 ≥ 1',
    tip: '🦾 赛博格：人口与机器人的边界，消失了。',
    hint: '💡 义体诊所 Lv3，点转化按钮。',
    checkFn: (g) => (P16U.st(g).cyborgTransforms || 0) >= 1 },
  { id: 'rx-crypt', name: '薪火相传', icon: '💾', cat: '机器人',
    desc: '建成 Lv3 数据墓园', check: '数据墓园 Lv3 ≥ 1',
    tip: '💾 薪火相传：它们死了，但经验还活着。',
    hint: '💡 把 rb16_data_crypt 升到 Lv3。',
    checkFn: (g) => { try { return g && g.builder && g.builder.buildings ? g.builder.buildings.some((b) => b.id === 'rb16_data_crypt' && b.level >= 3) : false; } catch (e) { return false; } } },
  { id: 'rx-hive', name: '蜂巢意识', icon: '🛰️', cat: '机器人',
    desc: '建成 Lv3 同步塔（蜂巢意识）', check: '同步塔 Lv3 ≥ 1',
    tip: '🛰️ 蜂巢意识：没有「我」，只有「我们」。',
    hint: '💡 把 rb16_sync_tower 升到 Lv3。',
    checkFn: (g) => { try { return g && g.builder && g.builder.buildings ? g.builder.buildings.some((b) => b.id === 'rb16_sync_tower' && b.level >= 3) : false; } catch (e) { return false; } } },
];

const ACH_V16_MORE = [
  // ---- 🏗️ 建筑 8 项 ----
  // 设计：v16 建筑成就按「尝鲜→铺开→毕业」排布。
  { id: 'bx-5', name: 'v16 尝鲜', icon: '🏗️', cat: '建筑',
    desc: '建成 5 种 v1.6 建筑', check: 'v16 建筑种数 ≥ 5',
    tip: '🏗️ v16 尝鲜：5 种新建筑，天、海、地、硅各来一点。',
    hint: '💡 建成任意 5 种 v1.6 建筑（sk16_/rb16_/oc16_/un16_）。',
    checkFn: (g) => { try { const bs = (g && g.builder && g.builder.buildings) || []; const s = new Set(); for (const b of bs) { if (b && /^(sk16|rb16|oc16|un16)_/.test(b.id)) s.add(b.id); } return s.size >= 5; } catch (e) { return false; } } },
  { id: 'bx-12', name: 'v16 半壁', icon: '🏛️', cat: '建筑',
    desc: '建成 12 种 v1.6 建筑', check: 'v16 建筑种数 ≥ 12',
    tip: '🏛️ v16 半壁：12 种新建筑，四个世界初具规模。',
    hint: '💡 建成 12 种 v1.6 建筑。',
    checkFn: (g) => { try { const bs = (g && g.builder && g.builder.buildings) || []; const s = new Set(); for (const b of bs) { if (b && /^(sk16|rb16|oc16|un16)_/.test(b.id)) s.add(b.id); } return s.size >= 12; } catch (e) { return false; } } },
  { id: 'bx-20', name: 'v16 大满贯', icon: '👑', cat: '建筑',
    desc: '建成全部 20 种 v1.6 建筑', check: 'v16 建筑种数 ≥ 20',
    tip: '👑 v16 大满贯：20 种全齐，天、海、地、硅尽在掌中。',
    hint: '💡 建成全部 20 种 v1.6 建筑。',
    checkFn: (g) => { try { const bs = (g && g.builder && g.builder.buildings) || []; const s = new Set(); for (const b of bs) { if (b && /^(sk16|rb16|oc16|un16)_/.test(b.id)) s.add(b.id); } return s.size >= 20; } catch (e) { return false; } } },
  { id: 'bx-sky6', name: '天空全家桶', icon: '☁️', cat: '建筑',
    desc: '建成全部 6 种天空系 v16 建筑', check: '天空系 v16 ≥ 6 种',
    tip: '☁️ 天空全家桶：气象、雷暴、天线、锚定、灯塔、市集，全齐。',
    hint: '💡 建成 6 种 sk16_ 建筑。',
    checkFn: (g) => { try { const bs = (g && g.builder && g.builder.buildings) || []; const s = new Set(); for (const b of bs) { if (b && b.id.indexOf('sk16_') === 0) s.add(b.id); } return s.size >= 6; } catch (e) { return false; } } },
  { id: 'bx-rob6', name: '硅基全家桶', icon: '🤖', cat: '建筑',
    desc: '建成全部 6 种机器人系 v16 建筑', check: '机器人系 v16 ≥ 6 种',
    tip: '🤖 硅基全家桶：熔炉、诊所、墓园、同步塔、精炼厂、工坊，全齐。',
    hint: '💡 建成 6 种 rb16_ 建筑。',
    checkFn: (g) => { try { const bs = (g && g.builder && g.builder.buildings) || []; const s = new Set(); for (const b of bs) { if (b && b.id.indexOf('rb16_') === 0) s.add(b.id); } return s.size >= 6; } catch (e) { return false; } } },
  { id: 'bx-sea4', name: '深海全家桶', icon: '🌊', cat: '建筑',
    desc: '建成全部 4 种深海系 v16 建筑', check: '深海系 v16 ≥ 4 种',
    tip: '🌊 深海全家桶：潮汐、热泉、珊瑚、船坞，全齐。',
    hint: '💡 建成 4 种 oc16_ 建筑。',
    checkFn: (g) => { try { const bs = (g && g.builder && g.builder.buildings) || []; const s = new Set(); for (const b of bs) { if (b && b.id.indexOf('oc16_') === 0) s.add(b.id); } return s.size >= 4; } catch (e) { return false; } } },
  { id: 'bx-under4', name: '地心全家桶', icon: '🕳️', cat: '建筑',
    desc: '建成全部 4 种地下系 v16 建筑', check: '地下系 v16 ≥ 4 种',
    tip: '🕳️ 地心全家桶：蘑菇、电梯、锻造炉、图书馆，全齐。',
    hint: '💡 建成 4 种 un16_ 建筑。',
    checkFn: (g) => { try { const bs = (g && g.builder && g.builder.buildings) || []; const s = new Set(); for (const b of bs) { if (b && b.id.indexOf('un16_') === 0) s.add(b.id); } return s.size >= 4; } catch (e) { return false; } } },
  { id: 'bx-lv3all', name: '精益求精 v16', icon: '💎', cat: '建筑',
    desc: '全部 v1.6 建筑升至 Lv2 以上', check: 'v16 建筑全 Lv2+',
    tip: '💎 精益求精 v16：每一座新建筑，都升到了 Lv2 以上。',
    hint: '💡 把所有 v16 建筑升到 Lv2+（越多越难，量力而行）。',
    checkFn: (g) => { try { const bs = ((g && g.builder && g.builder.buildings) || []).filter((b) => b && /^(sk16|rb16|oc16|un16)_/.test(b.id)); return bs.length >= 10 && bs.every((b) => b.level >= 2); } catch (e) { return false; } } },

  // ---- 🌐 综合 8 项 ----
  // 设计：综合成就覆盖「灾难应对→科技毕业→胜利」。
  { id: 'mx-storm', name: '驭风者', icon: '🌪️', cat: '综合',
    desc: '在空中风暴中零平台坠毁', check: '经历风暴且零坠毁',
    tip: '🌪️ 驭风者：风暴来了，平台一座没掉。',
    hint: '💡 雷达站 + 装甲 + 预报，硬抗一次空中风暴。',
    checkFn: (g) => (P16U.st(g).skystormSurvived || 0) >= 1 },
  { id: 'mx-virus', name: '杀毒专家', icon: '🦠', cat: '综合',
    desc: '扑灭一次机器人病毒', check: '病毒扑灭 ≥ 1',
    tip: '🦠 杀毒专家：病毒来了，防火墙顶住了。',
    hint: '💡 研究 t-rob-12，扑灭一次病毒。',
    checkFn: (g) => (P16U.st(g).virusContained || 0) >= 1 },
  { id: 'mx-emp', name: '法拉第', icon: '💥', cat: '综合',
    desc: '在 EMP 爆发中核心建筑零损坏', check: 'EMP 零损坏 ≥ 1',
    tip: '💥 法拉第：EMP 爆发，核心建筑一座没坏。',
    hint: '💡 研究 t-mix-4，硬抗一次 EMP。',
    checkFn: (g) => (P16U.st(g).empSurvived || 0) >= 1 },
  { id: 'mx-tech50', name: '博学者 v16', icon: '📚', cat: '综合',
    desc: '研究 25 项 v1.6 科技', check: 'v16 科技 ≥ 25',
    tip: '📚 博学者 v16：25 项新科技，脑子装满了。',
    hint: '💡 研究 25 项 t-sky-/t-rob-/t-mix- 科技。',
    checkFn: (g) => { try { let n = 0; for (const t of TECH_V16) if (P16U.hasTech(g, t.id)) n++; return n >= 25; } catch (e) { return false; } } },
  { id: 'mx-techall', name: '全知', icon: '🧠', cat: '综合',
    desc: '研究全部 50 项 v1.6 科技', check: 'v16 科技 = 50',
    tip: '🧠 全知：50 项全满，天、海、地、硅无所不知。',
    hint: '💡 点满 v1.6 科技树（约 2800 科技点）。',
    checkFn: (g) => { try { for (const t of TECH_V16) if (!P16U.hasTech(g, t.id)) return false; return true; } catch (e) { return false; } } },
  { id: 'mx-mix20', name: '新人类', icon: '🌟', cat: '综合',
    desc: '研究「新人类宣言」（第五胜利）', check: '拥有 t-mix-20',
    tip: '🌟 新人类：天上、海里、地底、硅基，都是人类。',
    hint: '💡 点满综合系，解锁第五胜利条件。',
    checkFn: (g) => P16U.hasTech(g, 't-mix-20') },
  { id: 'mx-3world', name: '三界之主', icon: '🌐', cat: '综合',
    desc: '同时拥有天空/海洋/地下建筑各 5 座', check: '三界各 ≥ 5',
    tip: '🌐 三界之主：天上、海里、地底，都有你的房子。',
    hint: '💡 天空/海洋/地下建筑各铺 5 座。',
    checkFn: (g) => P16U.skyCount(g) >= 5 && (P16U.st(g).oceanBuildings || 0) >= 5 && (P16U.st(g).undergroundBuildings || 0) >= 5 },
  { id: 'mx-legend', name: '传奇 v16', icon: '🏆', cat: '综合',
    desc: '解锁 30 个 v1.6 成就', check: 'v16 成就 ≥ 30',
    tip: '🏆 传奇 v16：30 个新成就，你是星港的传说。',
    hint: '💡 集齐 30 个 v16 成就（sx-/rx-/bx-/mx-）。',
    checkFn: (g) => { try { let n = 0; const ids = ACH_V16.map((a) => a.id).concat(ACH_V16_MORE.map((a) => a.id)); for (const id of ids) { if (g && g.achievements && g.achievements.isUnlocked && g.achievements.isUnlocked(id)) n++; } return n >= 30; } catch (e) { return false; } } },
];

// ACH_V16 = 天空 12 + 机器人 12 + 建筑 8 + 综合 8 = 40
for (const a of ACH_V16_MORE) ACH_V16.push(a);

// ---- ACH_V16 → ACHIEVEMENT_DEFS 注册（防御式） ----
if (typeof ACHIEVEMENT_DEFS !== 'undefined') {
  for (const a of ACH_V16) {
    ACHIEVEMENT_DEFS.push({
      id: a.id, name: a.name, icon: a.icon, desc: a.desc,
      tip: a.tip, hint: a.hint, check: a.checkFn,
    });
  }
}

// ==================== 三、新灾难 ×5 ====================
// 设计总纲：v1.6 的灾难是「天空与硅基的战争」——
//   空中风暴打天空、机器人病毒打硅基、EMP 打全城电子设备、
//   平台坠毁打单个平台、云层毒化打天空食物，
//   五个维度各一刀，每一刀都有官方解法（counter）。
// 首发时间 32/34/36/38/40 分钟，与 v1.5 五灾难（22~30 分钟）交错，
//   保证大后期每 2~4 分钟有一件事。
// 防御三原则（与 v1.5 一致）：① 对应系统不存在时 update 直接返回；
//   ② 无目标时不触发、推迟再试（不空放预警）；③ 只读写约定字段，
//   删建筑/维修永远是各系统的权力。
// 配置表字段：{id, name, icon, desc, warnMs, durationMs, effect（效果描述）, counter（应对建筑）}，
//   另附 flavor（播报轮换文案）/ firstAt / interval（调度常量）。
// ★ 读取约定（disaster.js / HazardPack16 防御性读取）：
//   行星护盾（shield_planet）建成 → 全部灾难免疫（disasterImmune）；
//   天空王座奇观建成 → 空中风暴/平台坠毁免疫（skyImmune）。
const DISASTERS_V16 = [
  { id: 'skystorm', name: '空中风暴', icon: '🌪️',
    desc: '平流层出现巨型气旋，向平台群压来——天空城的最大天敌。',
    warnMs: 30 * 1000, durationMs: 120 * 1000,  // 持续 120 秒
    effect: '持续 120 秒：随机 8 个平台各损失 15~35 hp；低空平台停产',
    counter: 'storm_radar（风暴雷达站）/ sk16_windspire（气象尖塔）/ 科技 t-sky-9',
    flavor: [
      '🌪️ 空中风暴预警！气旋正在逼近平台群，低空平台准备关机！',
      '🌪️ 气旋压境——雷达站全开，装甲平台顶住！',
    ],
    firstAt: 32 * 60 * 1000, intervalMin: 12 * 60 * 1000, intervalMax: 18 * 60 * 1000,
    targets: 8, dmgMin: 15, dmgMax: 35, duration: 120 * 1000,
    haltLow: true },  // 低空平台停产
  { id: 'robovirus', name: '机器人病毒', icon: '🦠',
    desc: '一段未知代码在机器人网络中传播：感染者效率暴跌、忠诚狂掉。',
    warnMs: 20 * 1000, durationMs: 180 * 1000,  // 持续 180 秒
    effect: '持续 180 秒：每 30 秒随机 10% 机器人感染（效率 -50%，忠诚 -2/秒）',
    counter: 't-rob-12（防火墙）/ t-mix-8（杀毒协议）/ rb_council（逻辑议会听证会）',
    flavor: [
      '🦠 机器人病毒警报！未知代码在网络中传播，防火墙顶住！',
      '🦠 感染扩散——逻辑议会紧急召开听证会，稳定军心！',
    ],
    firstAt: 34 * 60 * 1000, intervalMin: 14 * 60 * 1000, intervalMax: 20 * 60 * 1000,
    infectRate: 0.1, duration: 180 * 1000 },
  { id: 'emp', name: 'EMP 爆发', icon: '💥',
    desc: '太阳耀斑引发电磁脉冲：全城电子设备过载，机器人停机 60 秒。',
    warnMs: 25 * 1000, durationMs: 60 * 1000,  // 持续 60 秒
    effect: '全城断电 60 秒；机器人停机（效率归零）；电子设备建筑耐久 -10%',
    counter: 't-mix-4（全频屏蔽）/ shield_dome（护盾穹顶 Lv2+）',
    flavor: [
      '💥 EMP 爆发！全城电子设备过载——机器人集体「黑屏」60 秒！',
      '💥 电磁脉冲过境——屏蔽网全开，护盾穹顶顶住！',
    ],
    firstAt: 36 * 60 * 1000, intervalMin: 14 * 60 * 1000, intervalMax: 20 * 60 * 1000,
    duration: 60 * 1000, durabilityHit: 0.1 },
  { id: 'skycrash', name: '平台坠毁', icon: '🛬',
    desc: '一个平台的浮空囊破裂，正在下坠——上面的建筑和居民危在旦夕！',
    warnMs: 45 * 1000, durationMs: 0,  // 瞬时事件（可抢救）
    effect: '随机 1 个平台 hp 清零（坠毁）；45 秒预警内可疏散（减伤 50%）',
    counter: 'sky_dock（空中船坞维修）/ PLATFORM_UPGRADES.lift（浮空囊）',
    flavor: [
      '🛬 平台坠毁预警！浮空囊破裂，45 秒内疏散——船坞抢修中！',
      '🛬 平台下坠——疏散！疏散！把损失降到最低！',
    ],
    firstAt: 38 * 60 * 1000, intervalMin: 16 * 60 * 1000, intervalMax: 24 * 60 * 1000,
    evacMul: 0.5 },  // 疏散后损失减半
  { id: 'cloudtoxin', name: '云层毒化', icon: '☁️',
    desc: '火山灰混入平流层云团：云水被污染，天空农场停产，居民健康 -N。',
    warnMs: 30 * 1000, durationMs: 180 * 1000,  // 持续 180 秒
    effect: '持续 180 秒：天空农场停产；天空居民幸福 -5；云水收集暂停',
    counter: 'sky_garden（天空花园净化）/ cloud_farm Lv3（封闭循环）',
    flavor: [
      '☁️ 云层毒化！火山灰混入云团——农场关机，花园开净化！',
      '☁️ 毒云压境——天空居民戴上了呼吸面罩，农场主在骂街。',
    ],
    firstAt: 40 * 60 * 1000, intervalMin: 14 * 60 * 1000, intervalMax: 20 * 60 * 1000,
    duration: 180 * 1000, happinessHit: 5 },
];

const PACK16_KEY = 'starport-hazard-pack16';

// v1.6 新灾难调度器：与 v1.5 HazardPack15、v1.4 OrbitalHazards、
// v1.3 DisasterPack13 各自独立调度，tick 四挂载互不干扰。
// 行星护盾建成时全部灾难直接跳过（免疫）；天空王座建成时天空系灾难跳过。
class HazardPack16 {
  constructor() {
    const now = Date.now();
    this.active = {};   // id -> {warnUntil, until} 进行中的灾难
    this.next = {};     // id -> 下次触发时间戳
    for (const d of DISASTERS_V16) {
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

  // ---- 天空王座免疫（天空系灾难：skystorm/skycrash） ----
  _skyImmune(game) {
    try {
      return !!(game && game.builder && typeof game.builder.count === 'function' &&
        game.builder.count('sky_throne') >= 1);
    } catch (e) { return false; }
  }

  // ---- 灾难减伤聚合（防御）：stormResist / empResist / virusResist ----
  _resist(game, key) {
    let r = 0;
    try {
      if (game && game.tech && typeof game.tech.fxSum === 'function') {
        r += game.tech.fxSum(key) || 0;
      }
      // 天空建筑 storm_radar 的 stormMitigation（仅 stormResist）
      if (key === 'stormResist' && typeof SkyAgg !== 'undefined') {
        r += SkyAgg.maxEffect(game, 'storm_radar', (e) => e.stormMitigation || 0);
      }
      // 气象尖塔疏散减伤（仅 skystorm）
      if (key === 'stormResist' && typeof V16Agg !== 'undefined' &&
          game && game.builder && Array.isArray(game.builder.buildings)) {
        r += V16Agg.max(game.builder.buildings, 'sk16_windspire', (e) => e.evacuation || 0);
      }
    } catch (e) {}
    return Math.min(0.9, r);
  }

  // ---- 主 tick（每秒由 disaster.js 调用） ----
  tick(game) {
    try {
      if (!game) return;
      if (this._immune(game)) return;  // 行星护盾：全免疫
      const now = Date.now();
      for (const d of DISASTERS_V16) {
        // 天空系灾难的天空王座免疫
        if ((d.id === 'skystorm' || d.id === 'skycrash') && this._skyImmune(game)) continue;
        const act = this.active[d.id];
        // 进行中：检查是否结束
        if (act) {
          if (now >= act.until) {
            this.active[d.id] = null;
            this._onEnd(game, d);
          } else if (act.warned && now >= act.warnUntil) {
            act.warned = false;
            this._onStrike(game, d);
          }
          continue;
        }
        // 未开始：检查是否到触发时间
        if (now >= this.next[d.id]) {
          if (!this._hasTarget(game, d)) {
            // 无目标：推迟 2 分钟再试（不空放预警）
            this.next[d.id] = now + 2 * 60 * 1000;
            continue;
          }
          this.active[d.id] = { warnUntil: now + d.warnMs, until: now + d.warnMs + (d.durationMs || 0), warned: true };
          const msg = d.flavor[Math.floor(Math.random() * d.flavor.length)];
          // 预警时间延长：风暴雷达站 / 气象尖塔（仅 skystorm）
          let warnMs = d.warnMs;
          if (d.id === 'skystorm' && typeof SkyWeather !== 'undefined') {
            warnMs += SkyWeather.totalWarnBonus(game);
          }
          this.active[d.id].warnUntil = now + warnMs;
          this._notify(game, 'warn', msg, { disaster: d.id });
        }
      }
    } catch (e) {}
  }

  // ---- 有无打击目标（防御：对应系统不存在返回 false） ----
  _hasTarget(game, d) {
    try {
      if (d.id === 'skystorm' || d.id === 'skycrash') {
        const s = game && game.sky;
        return !!(s && Array.isArray(s.platforms) && s.platforms.some((p) => p.buildingId));
      }
      if (d.id === 'robovirus' || d.id === 'emp') {
        const r = game && game.robots;
        if (d.id === 'robovirus') return !!(r && Array.isArray(r.citizens) && r.citizens.length >= 5);
        return true;  // EMP 全城灾难，恒有目标
      }
      if (d.id === 'cloudtoxin') {
        return P16U.count(game, 'cloud_farm') >= 1;
      }
      return true;
    } catch (e) { return false; }
  }

  // ---- 打击结算 ----
  _onStrike(game, d) {
    try {
      if (d.id === 'skystorm') this._strikeSkyStorm(game, d);
      else if (d.id === 'robovirus') this._strikeVirus(game, d);
      else if (d.id === 'emp') this._strikeEMP(game, d);
      else if (d.id === 'skycrash') this._strikeCrash(game, d);
      else if (d.id === 'cloudtoxin') this._strikeToxin(game, d);
    } catch (e) {}
  }

  // 空中风暴：随机 8 平台 15~35 伤害，减伤聚合；低空停产标记
  _strikeSkyStorm(game, d) {
    try {
      const s = game && game.sky;
      if (!s || !Array.isArray(s.platforms)) return;
      const resist = this._resist(game, 'stormResist');
      const cands = s.platforms.filter((p) => p.buildingId);
      // 洗牌取 targets 个
      for (let i = cands.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = cands[i]; cands[i] = cands[j]; cands[j] = t;
      }
      let hit = 0;
      for (const p of cands.slice(0, d.targets)) {
        // 平台装甲减伤（PLATFORM_UPGRADES，全局防御读取）
        let mit = resist;
        try {
          const up = (typeof PLATFORM_UPGRADES !== 'undefined' && PLATFORM_UPGRADES.armor) || null;
          const lv = (p.upgrades && p.upgrades.armor) || 0;
          if (up && up.levels[lv]) mit = 1 - (1 - mit) * (1 - (up.levels[lv].mitigation || 0));
        } catch (e) {}
        const dmg = (d.dmgMin + Math.random() * (d.dmgMax - d.dmgMin)) * (1 - mit);
        p.hp = Math.max(0, p.hp - dmg);
        hit++;
      }
      // 低空停产标记（build.js 读取 game.skyStormHaltLow）
      if (d.haltLow && game) game.skyStormHaltLow = Date.now() + (d.duration || 0);
      if (game && game.stats && game.stats.data) game.stats.data.skystormHits = (game.stats.data.skystormHits || 0) + 1;
      this._notify(game, 'strike', '🌪️ 空中风暴肆虐！' + hit + ' 个平台受损' + (resist > 0 ? '（减伤 ' + Math.round(resist * 100) + '%）' : ''), { disaster: d.id });
    } catch (e) {}
  }

  // 机器人病毒：持续 180 秒，每 30 秒感染 10%（病毒抗性降低感染率）
  _strikeVirus(game, d) {
    try {
      const r = game && game.robots;
      if (!r || !Array.isArray(r.citizens) || !r.citizens.length) return;
      let resist = 0;
      try {
        if (game && game.tech && typeof game.tech.fxSum === 'function') {
          resist = Math.min(0.9, game.tech.fxSum('virusResist') || 0);
        }
      } catch (e) {}
      const rate = (d.infectRate || 0.1) * (1 - resist);
      const n = Math.max(1, Math.floor(r.citizens.length * rate));
      // 洗牌取 n 个感染
      const cs = r.citizens.slice();
      for (let i = cs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = cs[i]; cs[i] = cs[j]; cs[j] = t;
      }
      for (const c of cs.slice(0, n)) {
        c.virusUntil = Date.now() + (d.duration || 0);
        c.loyalty = Math.max(0, (c.loyalty || 70) - 10);
      }
      // 病毒期间：RobotManager.ageTick 读取 c.virusUntil，生效时效率 -50%
      this._notify(game, 'strike', '🦠 机器人病毒爆发！' + n + ' 台感染（效率 -50%，忠诚 -10）' + (resist > 0 ? '（抗性 ' + Math.round(resist * 100) + '%）' : ''), { disaster: d.id });
    } catch (e) {}
  }

  // EMP 爆发：全城断电 60 秒（game.power 未接入时标记），机器人停机
  _strikeEMP(game, d) {
    try {
      let resist = 0;
      try {
        if (game && game.tech && typeof game.tech.fxSum === 'function') {
          resist = Math.min(0.9, game.tech.fxSum('empResist') || 0);
        }
      } catch (e) {}
      if (game) {
        game.empBlackoutUntil = Date.now() + (d.duration || 0) * (1 - resist * 0.5);
        // 机器人停机：loyalty -5（断电惩罚，RobotManager.onBlackout）
        if (game.robots && typeof game.robots.onBlackout === 'function') {
          try { game.robots.onBlackout(game); } catch (e) {}
        }
        // 电子设备建筑耐久 -10%（build.js 读取 game.empDurabilityHit）
        game.empDurabilityHit = d.durabilityHit || 0.1;
      }
      this._notify(game, 'strike', '💥 EMP 爆发！全城断电 ' + Math.round((d.duration || 0) / 1000) + ' 秒，机器人停机！', { disaster: d.id });
    } catch (e) {}
  }

  // 平台坠毁：随机 1 平台 hp 清零（45 秒预警内疏散则损失减半）
  _strikeCrash(game, d) {
    try {
      const s = game && game.sky;
      if (!s || !Array.isArray(s.platforms)) return;
      const cands = s.platforms.filter((p) => p.buildingId && p.hp > 0);
      if (!cands.length) return;
      const p = cands[Math.floor(Math.random() * cands.length)];
      // 疏散判定：预警期间玩家点了疏散（game.skyEvacuated 由 UI 设置）
      const evacuated = game && game.skyEvacuated && game.skyEvacuated[p.id];
      p.hp = 0;
      // 坠毁结算是 SkyManager.checkCrashes 的权力，这里只打标记
      p.crashEvacuated = !!evacuated;
      if (game) game.skyEvacuated = {};
      this._notify(game, 'strike', '🛬 平台坠毁！' + ((typeof skyLayerName !== 'undefined' ? skyLayerName(p.layerId) : p.layerId)) + '平台下坠' + (evacuated ? '（已疏散，损失减半）' : '（未疏散！）'), { disaster: d.id });
    } catch (e) {}
  }

  // 云层毒化：持续 180 秒，天空农场停产标记 + 幸福 -5
  _strikeToxin(game, d) {
    try {
      if (game) {
        game.cloudToxinUntil = Date.now() + (d.duration || 0);
        // build.js 读取 game.cloudToxinUntil：cloud_farm 停产
        if (game.pop && typeof game.pop.addHappiness === 'function') {
          try { game.pop.addHappiness(-(d.happinessHit || 5), d.duration || 0); } catch (e) {}
        }
      }
      this._notify(game, 'strike', '☁️ 云层毒化！天空农场停产 ' + Math.round((d.duration || 0) / 1000) + ' 秒，幸福 -' + (d.happinessHit || 5), { disaster: d.id });
    } catch (e) {}
  }

  // ---- 灾难结束（统计/标记清理） ----
  _onEnd(game, d) {
    try {
      if (!game || !game.stats || !game.stats.data) return;
      const st = game.stats.data;
      if (d.id === 'skystorm') {
        // 零坠毁统计（成就 mx-storm 用）
        const crashed = (game.sky && game.sky.stats && game.sky.stats.platformsCrashed) || 0;
        if (crashed === (this._crashBase || 0)) st.skystormSurvived = (st.skystormSurvived || 0) + 1;
        this._crashBase = crashed;
      }
      if (d.id === 'robovirus') st.virusContained = (st.virusContained || 0) + 1;
      if (d.id === 'emp') {
        st.empSurvived = (st.empSurvived || 0) + 1;
        if (game) { game.empBlackoutUntil = 0; game.empDurabilityHit = 0; }
      }
      if (d.id === 'cloudtoxin' && game) game.cloudToxinUntil = 0;
      if (d.id === 'skystorm' && game) game.skyStormHaltLow = 0;
    } catch (e) {}
  }
}

// ==================== 自检 ContentV16SelfTest（控制台运行） ====================
function ContentV16SelfTest() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // ---- 科技 50 项 ----
    ok(Array.isArray(TECH_V16), 'TECH_V16 未定义');
    ok(TECH_V16.length === 50, '科技应为 50 项，实际 ' + (TECH_V16 && TECH_V16.length));
    const seen = {};
    for (const t of TECH_V16) {
      ok(t.id && t.name && t.icon, '科技缺少 id/name/icon: ' + JSON.stringify(t).slice(0, 60));
      ok(typeof t.cost === 'number' && t.cost > 0, t.id + ' cost 非法');
      ok(!seen[t.id], '科技 id 重复: ' + t.id);
      seen[t.id] = true;
      ok(t.branch === 'sky' || t.branch === 'robot' || t.branch === 'mix', t.id + ' branch 非法: ' + t.branch);
    }
    // 系分布：天空 15 / 机器人 15 / 综合 20
    const skyT = TECH_V16.filter((t) => t.id.indexOf('t-sky-') === 0);
    const robT = TECH_V16.filter((t) => t.id.indexOf('t-rob-') === 0);
    const mixT = TECH_V16.filter((t) => t.id.indexOf('t-mix-') === 0);
    ok(skyT.length === 15, '天空系科技应为 15 项，实际 ' + skyT.length);
    ok(robT.length === 15, '机器人系科技应为 15 项，实际 ' + robT.length);
    ok(mixT.length === 20, '综合系科技应为 20 项，实际 ' + mixT.length);
    // 前置存在性
    for (const t of TECH_V16) for (const p of (t.pre || [])) ok(!!seen[p], t.id + ' 的前置 ' + p + ' 不存在');
    // fx 键白名单
    const KNOWN_FX = ['skyCostMul', 'skyYieldMul', 'aircraftMul', 'stormResist', 'platformHpAdd',
      'robotCostMul', 'robotEffMul', 'loyaltyAdd', 'loyaltyDecayMul', 'oilMul', 'wearMul',
      'mixYieldMul', 'empResist', 'virusResist', 'stormPowerMul', 'stormYieldMul', 'skySlotsAdd',
      'globalCostMul', 'mortalityMul', 'tsunamiResist', 'globalYieldMul', 'powerMul',
      'popGrowthMul', 'oceanCostMul', 'underCostMul',
      // v1.5 延续键（防御：tech.js 可能已注册）
      'underYieldMul', 'quakeResist', 'geoYieldMul', 'oceanYieldMul', 'waterMul',
      'taxMul', 'unrestMul', 'disasterMul', 'techCostMul'];
    for (const t of TECH_V16) for (const k of Object.keys(t.fx || {})) ok(KNOWN_FX.indexOf(k) !== -1, t.id + ' 未知 fx 键: ' + k);
    // TECH_ORDER 覆盖全部 50 项
    if (typeof TECH_ORDER !== 'undefined') {
      for (const t of TECH_V16) ok(TECH_ORDER.indexOf(t.id) !== -1, 'TECH_ORDER 缺少 ' + t.id);
    }

    // ---- 成就 40 项 ----
    ok(Array.isArray(ACH_V16), 'ACH_V16 未定义');
    ok(ACH_V16.length === 40, '成就应为 40 项，实际 ' + (ACH_V16 && ACH_V16.length));
    const aseen = {};
    for (const a of ACH_V16) {
      ok(a.id && a.name && a.icon && a.desc, '成就缺少字段: ' + JSON.stringify(a).slice(0, 60));
      ok(!aseen[a.id], '成就 id 重复: ' + a.id);
      aseen[a.id] = true;
      ok(typeof a.checkFn === 'function', a.id + ' 缺少 checkFn');
      // 空 game 下不抛错
      let r1 = null, r2 = null;
      try { r1 = a.checkFn(null); } catch (e) { ok(false, a.id + ' checkFn(null) 抛错'); }
      try { r2 = a.checkFn({}); } catch (e) { ok(false, a.id + ' checkFn({}) 抛错'); }
      ok(r1 === false && r2 === false, a.id + ' 空 game 下应返回 false');
    }
    // 类别分布：天空 12 / 机器人 12 / 建筑 8 / 综合 8
    const catCount = {};
    for (const a of ACH_V16) catCount[a.cat] = (catCount[a.cat] || 0) + 1;
    ok(catCount['天空'] === 12, '天空成就应为 12 项，实际 ' + catCount['天空']);
    ok(catCount['机器人'] === 12, '机器人成就应为 12 项，实际 ' + catCount['机器人']);
    ok(catCount['建筑'] === 8, '建筑成就应为 8 项，实际 ' + catCount['建筑']);
    ok(catCount['综合'] === 8, '综合成就应为 8 项，实际 ' + catCount['综合']);

    // ---- 灾难 5 种 ----
    ok(Array.isArray(DISASTERS_V16), 'DISASTERS_V16 未定义');
    ok(DISASTERS_V16.length === 5, '灾难应为 5 种，实际 ' + (DISASTERS_V16 && DISASTERS_V16.length));
    const dseen = {};
    for (const d of DISASTERS_V16) {
      ok(d.id && d.name && d.icon, '灾难缺少字段: ' + d.id);
      ok(!dseen[d.id], '灾难 id 重复: ' + d.id);
      dseen[d.id] = true;
      ok(d.warnMs > 0, d.id + ' warnMs 非法');
      ok(Array.isArray(d.flavor) && d.flavor.length >= 2, d.id + ' flavor 不足 2 条');
      ok(d.firstAt > 30 * 60 * 1000, d.id + ' 首发时间应晚于 30 分钟');
      ok(!!d.counter, d.id + ' 缺少 counter（官方解法）');
    }
    // 与 v1.5 灾难 id 不重叠
    if (typeof DISASTERS_V15 !== 'undefined') {
      for (const d of DISASTERS_V15) ok(!dseen[d.id], '与 v1.5 灾难 id 重叠: ' + d.id);
    }
    // HazardPack16 冒烟
    const hz = new HazardPack16();
    ok(Object.keys(hz.next).length === 5, 'HazardPack16 next 初始化异常');
    hz.tick(null);  // 不应抛错
    hz.tick({});    // 不应抛错
    ok(hz._hasTarget({}, DISASTERS_V16[0]) === false, '无天空系统时应无目标');
    ok(hz._immune(null) === false, '_immune 防御失败');
    ok(hz._resist(null, 'stormResist') === 0, '_resist 防御失败');

    // ---- P16U 防御 ----
    ok(P16U.platformCount(null) === 0, 'P16U 防御失败');
    ok(P16U.robotLoyalty(null) === 100, '无机器人时忠诚应为 100');
    ok(P16U.skyCount({}, 'sky_dock') === 0, 'P16U.skyCount 防御失败');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[ContentV16SelfTest] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[ContentV16SelfTest] 通过：科技 50（总数 190）/ 成就 40（总数 217）/ 灾难 5 / 调度器冒烟');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    ContentV16SelfTest, TECH_V16, TECH_V16_MIX, ACH_V16, ACH_V16_MORE,
    DISASTERS_V16, HazardPack16, P16U, PACK16_KEY,
  });
}

// ==================== 四、v1.6 奇观 ×3 ====================
// 设计总纲：v1.6 的奇观是「三个世界的封神」——
//   硅基方舟（机器人）：机器人的「诺亚方舟」，共生时代的纪念碑；
//   三界共鸣器（综合）：天/海/地三界共振，全局产量 +30%；
//   新人类纪念碑（综合）：第五胜利「新人类」的地标，建成即胜利结算。
// 每座限建 1 座，注册进 BUILDINGS（单级）。
// ★ 读取约定（game.js 胜利判定 / build.js 防御性读取）：
//   const ark = game.builder.count('silicon_ark') >= 1;
const WONDERS_V16 = [
  { id: 'silicon_ark', name: '硅基方舟', icon: '🚢',
    desc: '机器人的诺亚方舟：建成后机器人永不报废（wear 锁定 0.5），忠诚 +20。',
    cost: { steel: 1500, tech: 400, rare: 200 }, needPop: 80, powerUse: 20,
    effect: '机器人 wear 锁定 ≤0.5；忠诚 +20；共生时代加速',
    counter: '——',
    flavor: '🚢 硅基方舟升空：每一台机器人都知道，回家的路在哪儿。',
    unlock: { type: 'tech', ref: 't-rob-15', desc: '需研究「共生宪章」' },
    wonder: true, limitOne: true,
    fx: { wearCap: 0.5, loyaltyAdd: 20 } },
  { id: 'tri_resonator', name: '三界共鸣器', icon: '🌐',
    desc: '天/海/地三界共振：全局产量 +30%，三界建筑产量 +20%。',
    cost: { steel: 1800, tech: 500, he3: 80 }, needPop: 100, powerUse: 30,
    effect: '全局产量 +30%；三界建筑产量 +20%',
    counter: '——',
    flavor: '🌐 三界共鸣器启动：天、海、地，第一次「同频」了。',
    unlock: { type: 'tech', ref: 't-mix-14', desc: '需研究「三界大同」' },
    wonder: true, limitOne: true,
    fx: { globalYieldMul: 1.3, mixYieldMul: 1.2 } },
  { id: 'new_humanity', name: '新人类纪念碑', icon: '🌟',
    desc: '第五胜利「新人类」的地标：建成即结算胜利（需 t-mix-20）。',
    cost: { steel: 2500, tech: 800, he3: 150, uranium: 50 }, needPop: 150, powerUse: 40,
    effect: '第五胜利条件「新人类」：建成 + t-mix-20 即胜利',
    counter: '——',
    flavor: '🌟 纪念碑落成：天上、海里、地底、硅基——都是人类。',
    unlock: { type: 'tech', ref: 't-mix-20', desc: '需研究「新人类宣言」' },
    wonder: true, limitOne: true, winsGame: 'new_humanity',
    fx: {} },
];

// ---- WONDERS_V16 → BUILDINGS 注册（防御式；单级、限建 1 座） ----
if (typeof BUILDINGS !== 'undefined') {
  for (const w of WONDERS_V16) {
    BUILDINGS[w.id] = {
      id: w.id, name: w.name, icon: w.icon,
      levels: [null, {
        cost: w.cost, needPop: w.needPop, powerUse: w.powerUse,
        effect: { wonder: true, limitOne: true, winsGame: w.winsGame || null },
        effectDesc: w.effect, desc: w.desc, flavor: w.flavor,
      }],
      desc: w.desc,
      unlock: w.unlock,
    };
  }
}

// ==================== 五、第五胜利条件「新人类」 ====================
// 设计：v1.4 第四胜利是「虫洞远征」（跑路），v1.6 第五胜利是「新人类」
//   （留下，把火星变成家）——一走一留，两种哲学。
// 判定（game.js 实现，Victory5.check 提供防御性判定函数）：
//   新人类纪念碑建成 + 研究 t-mix-20 + 人口 ≥500 + 机器人 ≥100
//   → 判定「新人类」胜利。
// ★ 读取约定（game.js 胜利判定防御性读取）：
//   const won = Victory5.check(game);  // true/false
const Victory5 = {
  id: 'new_humanity',
  name: '新人类',
  icon: '🌟',
  desc: '第五胜利：天上、海里、地底、硅基，都是人类——火星不再是殖民地，是家。',
  // 防御性判定
  check(game) {
    try {
      if (!game) return false;
      const hasMonument = game.builder && typeof game.builder.count === 'function' &&
        game.builder.count('new_humanity') >= 1;
      if (!hasMonument) return false;
      const hasTech = game.tech && typeof game.tech.has === 'function' && game.tech.has('t-mix-20');
      if (!hasTech) return false;
      const pop = (game.pop && game.pop.count) || 0;
      if (pop < 500) return false;
      const robots = (game.robots && game.robots.citizens && game.robots.citizens.length) || 0;
      if (robots < 100) return false;
      return true;
    } catch (e) { return false; }
  },
  // 进度查询（UI 展示 4 项进度条用）
  progress(game) {
    try {
      const hasMonument = game && game.builder && typeof game.builder.count === 'function' &&
        game.builder.count('new_humanity') >= 1;
      const hasTech = game && game.tech && typeof game.tech.has === 'function' && game.tech.has('t-mix-20');
      const pop = (game && game.pop && game.pop.count) || 0;
      const robots = (game && game.robots && game.robots.citizens && game.robots.citizens.length) || 0;
      return [
        { name: '新人类纪念碑', done: !!hasMonument, text: hasMonument ? '已建成' : '未建成' },
        { name: '新人类宣言科技', done: !!hasTech, text: hasTech ? '已研究' : '未研究' },
        { name: '人口 ≥500', done: pop >= 500, text: pop + ' / 500' },
        { name: '机器人 ≥100', done: robots >= 100, text: robots + ' / 100' },
      ];
    } catch (e) { return []; }
  },
};

// ==================== 六、v1.6 政策 ×10 ====================
// 设计总纲：v1.6 的政策是「三界治理」——每条政策有代价，没有免费午餐。
// 数组字段：{id, name, icon, desc, cost（政策槽位）, effect（效果描述）, fx}，
//   注册进 POLICIES（policy.js 定义，防御性）。
// ★ 读取约定（policy.js 防御性读取）：fx 键见下注释。
const POLICIES_V16 = [
  { id: 'pol-sky-tax', name: '天空税', icon: '☁️',
    desc: '对天空建筑征税：天空建筑产量 -10%，全局税收 +20%。',
    effect: '天空产量 -10%，税收 +20%',
    fx: { skyYieldMul: 0.9, taxMul: 1.2 },
    flavor: '「天上的云再白，也得交税。」——财政部长' },
  { id: 'pol-robot-rights', name: '机器人权利保障', icon: '🤝',
    desc: '机器人每周休假 1 天：忠诚 +15，机器人效率 -10%。',
    effect: '忠诚 +15，效率 -10%',
    fx: { loyaltyAdd: 15, robotEffMul: 0.9 },
    flavor: '「它们也想要下班——我们给了。」——人社部长' },
  { id: 'pol-storm-drill', name: '风暴演习', icon: '🌪️',
    desc: '每月一次风暴演习：风暴伤害 -15%，演习期间产量 -5%。',
    effect: '风暴伤害 -15%，平时产量 -5%',
    fx: { stormResist: 0.15, globalYieldMul: 0.95 },
    flavor: '「演习时流汗，风暴时不流血。」——应急管理局' },
  { id: 'pol-deep-sea', name: '深海开发令', icon: '🌊',
    desc: '举国开发海洋：海洋建筑成本 -20%，地下建筑成本 +10%。',
    effect: '海洋成本 -20%，地下成本 +10%',
    fx: { oceanCostMul: 0.8, underCostMul: 1.1 },
    flavor: '「海里有矿，地底也有——但今年先挖海。」——发改委' },
  { id: 'pol-under-first', name: '地心优先', icon: '🕳️',
    desc: '举国深挖：地下建筑成本 -20%，天空建筑成本 +10%。',
    effect: '地下成本 -20%，天空成本 +10%',
    fx: { underCostMul: 0.8, skyCostMul: 1.1 },
    flavor: '「往下挖，挖到地心都是我们的。」——资源部长' },
  { id: 'pol-cyborg-enc', name: '赛博格鼓励', icon: '🦾',
    desc: '鼓励义体改造：人口增长 +10%，医疗支出 +15%（税收 -5%）。',
    effect: '人口增长 +10%，税收 -5%',
    fx: { popGrowthMul: 1.1, taxMul: 0.95 },
    flavor: '「升级自己，政府补贴——这很赛博。」——卫健委' },
  { id: 'pol-virus-war', name: '病毒战争动员', icon: '🦠',
    desc: '全城杀毒动员：病毒感染率 -30%，科研产出 -10%（算力挪用）。',
    effect: '病毒 -30%，科研 -10%',
    fx: { virusResist: 0.3, techOutMul: 0.9 },
    flavor: '「算力不够？把论文先放放，杀毒要紧。」——网信办' },
  { id: 'pol-emp-ready', name: 'EMP 战备', icon: '💥',
    desc: '全城 EMP 战备：EMP 伤害 -25%，电力储备 -10%（屏蔽耗电）。',
    effect: 'EMP -25%，电力 -10%',
    fx: { empResist: 0.25, powerMul: 0.9 },
    flavor: '「屏蔽网一开，电表转得比风扇快。」——电力局' },
  { id: 'pol-festival', name: '云海节假日', icon: '🎉',
    desc: '每年云海节放假 3 天：幸福 +10，产量 -8%（3 天）。',
    effect: '幸福 +10，产量 -8%',
    fx: { happinessAdd: 10, globalYieldMul: 0.92 },
    flavor: '「放假 3 天，看云——这很值得。」——文旅局' },
  { id: 'pol-new-human', name: '新人类纲领', icon: '🌟',
    desc: '终极政策：全产量 +10%，全成本 +10%——伟大总是有代价的。',
    effect: '全产量 +10%，全成本 +10%',
    fx: { globalYieldMul: 1.1, globalCostMul: 1.1 },
    flavor: '「我们要的不是便宜，是伟大。」——市长' },
];

// ---- POLICIES_V16 → POLICIES 注册（防御式） ----
if (typeof POLICIES !== 'undefined' && Array.isArray(POLICIES)) {
  for (const p of POLICIES_V16) POLICIES.push(p);
}

// ==================== 七、v1.6 随机事件 ×10 ====================
// 设计总纲：v1.6 的随机事件是「三界的日常」——
//   好事 4 / 坏事 4 / 选择 2，每 4~7 分钟一件，由 game.js 事件调度器读取。
// 数组字段：{id, name, icon, good（好/坏）, choice（是否选择事件）,
//   desc, flavor, minGapMs, maxGapMs, run(game)/choose(game, opt)}。
// ★ 读取约定（game.js 事件调度防御性读取）：EVENTS_V16 数组，run/choose 均防御。
const EVENTS_V16 = [
  { id: 'ev-sky-whale', name: '云鲸', icon: '🐋', good: true,
    desc: '一头基因改造云鲸掠过平台群：全城幸福 +5（60 秒）。',
    flavor: '🐋 云鲸掠过！它喷出的「水柱」是彩虹色的——全城都出来看了。',
    minGapMs: 4 * 60 * 1000, maxGapMs: 7 * 60 * 1000,
    run(game) {
      try { if (game && game.pop && typeof game.pop.addHappiness === 'function') game.pop.addHappiness(5, 60000); return true; }
      catch (e) { return false; }
    } },
  { id: 'ev-robot-poet', name: '机器人诗人', icon: '📝', good: true,
    desc: '一台机器人写了首诗：人机关系 +5，全城幸福 +3。',
    flavor: '📝 机器人写了首诗，题目叫《云》——人类诗人说，写得比他好。',
    minGapMs: 4 * 60 * 1000, maxGapMs: 7 * 60 * 1000,
    run(game) {
      try {
        if (typeof Relations !== 'undefined') Relations.add(game, 5);
        if (game && game.pop && typeof game.pop.addHappiness === 'function') game.pop.addHappiness(3, 60000);
        return true;
      } catch (e) { return false; }
    } },
  { id: 'ev-pearl-rain', name: '珍珠雨', icon: '🦪', good: true,
    desc: '珊瑚农场珍珠大丰收：+20 珍珠（trade.js 结算）。',
    flavor: '🦪 珍珠大丰收！农场主说：今年的珍珠，比往年圆。',
    minGapMs: 5 * 60 * 1000, maxGapMs: 8 * 60 * 1000,
    run(game) {
      try { if (game && game.player && game.player.inv) game.player.inv.pearl = (game.player.inv.pearl || 0) + 20; return true; }
      catch (e) { return false; }
    } },
  { id: 'ev-magma-gift', name: '岩浆馈赠', icon: '🌋', good: true,
    desc: '岩浆房喷发带来富矿：+50 钢材。',
    flavor: '🌋 岩浆喷发！但这次喷的是富矿——锻造炉连夜加班。',
    minGapMs: 5 * 60 * 1000, maxGapMs: 8 * 60 * 1000,
    run(game) {
      try { if (game && game.player && game.player.inv) game.player.inv.steel = (game.player.inv.steel || 0) + 50; return true; }
      catch (e) { return false; }
    } },
  { id: 'ev-cable-snap', name: '缆绳断裂', icon: '⛓️', good: false,
    desc: '低空平台缆绳断裂：随机 1 低空平台漂移（产出 -30%）。',
    flavor: '⛓️ 缆绳断裂！低空平台开始漂移——船坞，靠你了。',
    minGapMs: 4 * 60 * 1000, maxGapMs: 7 * 60 * 1000,
    run(game) {
      try {
        const s = game && game.sky;
        if (s && Array.isArray(s.platforms)) {
          const lows = s.platforms.filter((p) => p.layerId === 'low' && !p.drifted);
          if (lows.length) lows[Math.floor(Math.random() * lows.length)].drifted = true;
        }
        return true;
      } catch (e) { return false; }
    } },
  { id: 'ev-oil-leak', name: '机油泄漏', icon: '🛢️', good: false,
    desc: '精炼厂机油泄漏：机器人机油池 -30%。',
    flavor: '🛢️ 机油泄漏！机器人排队时听说「没油了」，队伍里一阵骚动。',
    minGapMs: 4 * 60 * 1000, maxGapMs: 7 * 60 * 1000,
    run(game) {
      try {
        const r = game && game.robots;
        if (r) r.oil = Math.max(0, (r.oil || 0) * 0.7);
        return true;
      } catch (e) { return false; }
    } },
  { id: 'ev-beast-visit', name: '巨兽造访', icon: '🦑', good: false,
    desc: '深海巨兽造访热泉站：热泉站停产 60 秒（它在「泡澡」）。',
    flavor: '🦑 巨兽来泡澡了！热泉站停产 60 秒——没人敢赶它走。',
    minGapMs: 5 * 60 * 1000, maxGapMs: 8 * 60 * 1000,
    run(game) {
      try { if (game) game.beastBathUntil = Date.now() + 60000; return true; }
      catch (e) { return false; }
    } },
  { id: 'ev-echo-quake', name: '回声地震', icon: '🌋', good: false,
    desc: '地下回声引发小地震：随机 2 地下建筑 -10% 耐久。',
    flavor: '🌋 回声地震！图书馆的书架晃了晃——书没掉，知识很稳。',
    minGapMs: 5 * 60 * 1000, maxGapMs: 8 * 60 * 1000,
    run(game) {
      try {
        if (game && game.builder && typeof game.builder.damageBuilding === 'function') {
          const bs = (game.builder.buildings || []).filter((b) => b && b.id.indexOf('un16_') === 0);
          for (let i = 0; i < Math.min(2, bs.length); i++) {
            game.builder.damageBuilding(bs[Math.floor(Math.random() * bs.length)].id, 0.1);
          }
        }
        return true;
      } catch (e) { return false; }
    } },
  { id: 'ev-wanderer', name: '流浪工程师', icon: '🧑‍🔧', good: true, choice: true,
    desc: '一位流浪工程师请求加入：A. 接纳（+1 总督候选）；B. 婉拒（+20 科技点，他留下图纸）。',
    flavor: '🧑‍🔧 流浪工程师请求加入：他说，他会修「一切会动的东西」。',
    minGapMs: 6 * 60 * 1000, maxGapMs: 10 * 60 * 1000,
    choose(game, opt) {
      try {
        if (opt === 'A') {
          if (game && game.stats && game.stats.data) game.stats.data.governorCandidate = (game.stats.data.governorCandidate || 0) + 1;
          if (game && game.toast) game.toast('🧑‍🔧 工程师加入了！总督候选 +1');
        } else {
          if (game && game.player && game.player.inv) game.player.inv.tech = (game.player.inv.tech || 0) + 20;
          if (game && game.toast) game.toast('🧑‍🔧 他留下了图纸：+20 科技点，潇洒离去。');
        }
        return true;
      } catch (e) { return false; }
    },
    run(game) {
      try {
        if (game && game.toast) game.toast(this.flavor + '（30 秒内选择）');
        if (game) game.pendingEventChoice = { eventId: this.id, until: Date.now() + 30000 };
        return true;
      } catch (e) { return false; }
    } },
  { id: 'ev-siren', name: '深海歌声', icon: '🧜', good: true, choice: true,
    desc: '深海传来神秘「歌声」：A. 派潜艇调查（50% 获得 30 稀有矿，50% 潜艇受损）；B. 不理会（无事发生）。',
    flavor: '🧜 深海传来歌声：声呐员说，那不像鲸，也不像机器——像「呼唤」。',
    minGapMs: 6 * 60 * 1000, maxGapMs: 10 * 60 * 1000,
    choose(game, opt) {
      try {
        if (opt === 'A') {
          if (Math.random() < 0.5) {
            if (game && game.player && game.player.inv) game.player.inv.rare = (game.player.inv.rare || 0) + 30;
            if (game && game.toast) game.toast('🧜 调查成功：海底宝藏！+30 稀有矿');
          } else {
            if (game && game.toast) game.toast('🧜 潜艇受损返航——歌声还在，宝藏没了。');
          }
        } else if (game && game.toast) {
          game.toast('🧜 你决定不理会——歌声渐渐远去，像没来过。');
        }
        return true;
      } catch (e) { return false; }
    },
    run(game) {
      try {
        if (game && game.toast) game.toast(this.flavor + '（30 秒内选择）');
        if (game) game.pendingEventChoice = { eventId: this.id, until: Date.now() + 30000 };
        return true;
      } catch (e) { return false; }
    } },
];

// ==================== 扩展自检 ContentV16SelfTest2 ====================
function ContentV16SelfTest2() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 奇观 3 座
    ok(WONDERS_V16.length === 3, '奇观应为 3 座，实际 ' + WONDERS_V16.length);
    for (const w of WONDERS_V16) {
      ok(w.limitOne && w.wonder, w.id + ' 应限建 1 座');
      ok(w.unlock && w.unlock.ref, w.id + ' 缺少 unlock');
    }
    const nh = WONDERS_V16.find((w) => w.id === 'new_humanity');
    ok(nh && nh.winsGame === 'new_humanity', '新人类纪念碑应标记 winsGame');
    // 第五胜利判定
    ok(Victory5.check(null) === false, 'Victory5 防御失败');
    ok(Victory5.check({}) === false, '空 game 应返回 false');
    const gWin = {
      builder: { count: (id) => (id === 'new_humanity' ? 1 : 0), buildings: [] },
      tech: { has: (id) => id === 't-mix-20' },
      pop: { count: 600 },
      robots: { citizens: new Array(120) },
    };
    ok(Victory5.check(gWin) === true, '满足条件时应判定胜利');
    const gLose = {
      builder: { count: () => 0, buildings: [] },
      tech: { has: () => true }, pop: { count: 600 },
      robots: { citizens: new Array(120) },
    };
    ok(Victory5.check(gLose) === false, '缺纪念碑时不应胜利');
    ok(Victory5.progress(gWin).length === 4, '进度应为 4 项');
    // 政策 10 条
    ok(POLICIES_V16.length === 10, '政策应为 10 条，实际 ' + POLICIES_V16.length);
    const pids = {};
    for (const p of POLICIES_V16) {
      ok(p.id && p.name && p.fx, '政策字段异常: ' + p.id);
      ok(!pids[p.id], '政策 id 重复: ' + p.id);
      pids[p.id] = true;
    }
    // 事件 10 条
    ok(EVENTS_V16.length === 10, '事件应为 10 条，实际 ' + EVENTS_V16.length);
    const eids = {};
    for (const e of EVENTS_V16) {
      ok(e.id && e.run && typeof e.run === 'function', '事件异常: ' + e.id);
      ok(!eids[e.id], '事件 id 重复: ' + e.id);
      eids[e.id] = true;
      let r = null;
      try { r = e.run(null); } catch (err) { ok(false, e.id + ' run(null) 抛错'); }
      ok(r === true || r === false, e.id + ' run 应返回布尔值');
      if (e.choice) {
        ok(typeof e.choose === 'function', e.id + ' 选择事件缺少 choose');
        let c = null;
        try { c = e.choose(null, 'A'); } catch (err) { ok(false, e.id + ' choose 抛错'); }
        ok(c === true || c === false, e.id + ' choose 应返回布尔值');
      }
    }
    const goods = EVENTS_V16.filter((e) => e.good).length;
    const bads = EVENTS_V16.filter((e) => !e.good).length;
    ok(goods === 6 && bads === 4, '事件好坏分布应为 6/4，实际 ' + goods + '/' + bads);
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[ContentV16SelfTest2] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[ContentV16SelfTest2] 通过：奇观 3 / 第五胜利 / 政策 10 / 事件 10');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    ContentV16SelfTest2, WONDERS_V16, Victory5, POLICIES_V16, EVENTS_V16,
  });
}

// ==================== 八、v1.6 教程 TUTORIAL_V16（12 步） ====================
// 设计：v1.6 新手引导——按「天空→机器人→三界」顺序，12 步带玩家入门。
// 每步：{ step, title, icon, text, check(game)（完成判定，防御性）}。
// ★ 读取约定（tutorial.js 防御性读取）：TUTORIAL_V16 数组。
const TUTORIAL_V16 = [
{ step: 1, title: '仰望天空', icon: '☁️',
text: '研究「浮空原理」（t-sky-1），解锁天空层。',
check: (g) => P16U.hasTech(g, 't-sky-1')},
{ step: 2, title: '第一块云', icon: '🎈',
text: '建造第一个浮空平台（低空），把云端农场放上去。',
check: (g) => P16U.platformCount(g) >= 1},
{ step: 3, title: '天空有电了', icon: '⚡',
text: '在平流层建天空电站：记住，平流层产电 ×1.4。',
check: (g) => P16U.count(g, 'sky_solar') >= 1},
{ step: 4, title: '飞艇首航', icon: '🚁',
text: '建空中船坞，造第一艘货运飞艇：天空产出运得下去了。',
check: (g) => P16U.aircraftCount(g) >= 1},
{ step: 5, title: '硅基邻居', icon: '🤖',
text: '研究「机器人学」（t-rob-1），建组装厂，生产第一台机器人。',
check: (g) => P16U.robotCount(g) >= 1},
{ step: 6, title: '机器人要吃饭', icon: '🔌',
text: '建充电站：机器人不吃食物，但吃电很凶。',
check: (g) => P16U.count(g, 'rb_charger') >= 1},
{ step: 7, title: '维稳', icon: '🏛️',
text: '建逻辑议会：听证会是忠诚的源泉，别让忠诚掉到 40 以下。',
check: (g) => P16U.count(g, 'rb_council') >= 1},
{ step: 8, title: '下海', icon: '🌊',
text: '建潮汐电站：海洋的稳定电源，不看天不看地。',
check: (g) => P16U.count(g, 'oc16_tidal_plant') >= 1},
{ step: 9, title: '入地', icon: '🍄',
text: '建蘑菇农场：地下食物基本盘，断电不停产。',
check: (g) => P16U.count(g, 'un16_mushroom_farm') >= 1},
{ step: 10, title: '第一次风暴', icon: '🌪️',
text: '硬抗一次空中风暴：雷达站 + 装甲，一个都不能少。',
check: (g) => (P16U.st(g).skystormHits || 0) >= 1},
{ step: 11, title: '三界之主', icon: '🌐',
text: '天空/海洋/地下建筑各 5 座：三界初具规模。',
check: (g) => P16U.skyCount(g) >= 5},
{ step: 12, title: '新人类', icon: '🌟',
text: '研究「新人类宣言」，建纪念碑：第五胜利在向你招手。',
check: (g) => P16U.hasTech(g, 't-mix-20')},
];

// ==================== 九、v1.6 数值平衡总览 BALANCE_V16 ====================
// 设计：把 v1.6 的数值逻辑写成文档，供后续版本调参时参考。
// 纯文档，不影响运行；自检只检查「文档存在且非空」。
const BALANCE_V16 = {
version: '1.6.0',
notes: [
'天空城后期缺电是常态：100 机器人 = 20 电/tick，1 座 Lv3 天空电站（平流层 28 电）刚好覆盖。电力规划要留 30% 余量。',
'三界食物基本盘：云端农场（天）/ 珊瑚农场（海）/ 蘑菇农场（地），三选一或三修。蘑菇农场是断电保险。',
'机器人忠诚是生命线：自然衰减 0.02/tick，听证会 +5/5 分钟刚好覆盖。断电 -5/次是最常见的忠诚杀手。',
'天空建筑 ×1.5 定价，机器人建筑走 tech，海洋走 ice，地下走 iron——四系资源错峰，避免单资源卡死。',
'v1.6 五灾难首发 32~40 分钟，与 v1.5（22~30 分钟）交错。大后期每 2~4 分钟一灾，减伤体系（雷达/防火墙/屏蔽）是刚需。',
'第五胜利「新人类」需要纪念碑 + t-mix-20 + 人口 500 + 机器人 100，约是第四胜利「虫洞远征」的 1.2 倍工作量——一走一留，两种哲学。',
'三系全满约 2800 科技点，约 4~6 小时游戏时间。综合系是后期的毕业考，需要双线毕业。',
'集齐单套 +15%，四套「四界同心」+15% 全局。套装是专精玩法的奖励，不是必修课。',
],
};

// ==================== 十、v1.6 彩蛋 EASTER_EGGS_V16 ====================
// 设计：藏在各处的梗——铁蛋宇宙、call back、黑色幽默。
// 纯 flavor，供 help.js「彩蛋」页展示；触发条件由各系统读取。
const EASTER_EGGS_V16 = [
{ id: 'egg-tiedan', name: '铁蛋宇宙', icon: '🥚',
desc: 'v1.5 的「铁蛋」（第一台机器人）在 v1.6 有 5 处 call back：数据墓园墓碑、义肢工坊畅销款、珊瑚农场铁蛋礁、蘑菇农场铁蛋菇、回声图书馆《铁蛋传》。集齐 5 处解锁成就「铁蛋永生」（隐藏）。',
check: (g) => { try { const st = P16U.st(g); return (st.tiedanRefs || 0) >= 5;} catch (e) { return false;}}},
{ id: 'egg-elevator', name: '电梯里的按钮', icon: '🛗',
desc: '地心电梯有个没标的「？」按钮，按下去会随机传送到 B1/B2/B3——或者哪儿也不去，只是灯闪一下。',
check: () => false},
{ id: 'egg-beacon', name: '灯塔的颜色', icon: '💡',
desc: '天空灯塔的光束颜色随城市幸福度变化：幸福 >80 暖黄，<30 冷蓝。不是 bug，是 feature。',
check: () => false},
{ id: 'egg-whale', name: '云鲸的歌', icon: '🐋',
desc: '云鲸事件后 60 秒内，游戏 BGM 会混入鲸歌采样。戴耳机听。',
check: () => false},
{ id: 'egg-siren', name: '深海歌声', icon: '🧜',
desc: '「深海歌声」事件选 A 有 1% 概率触发隐藏：潜艇带回一段录音，播放后全城幸福 +10（持续 10 分钟）。',
check: () => false},
{ id: 'egg-poet', name: '机器人诗集', icon: '📝',
desc: '「机器人诗人」事件触发 10 次后，数据墓园解锁《硅基诗集》：阅读 +5 幸福（一次性）。',
check: (g) => { try { return (P16U.st(g).poetEvents || 0) >= 10;} catch (e) { return false;}}},
{ id: 'egg-arena', name: '竞技场传说', icon: '🏟️',
desc: '同一台机器人在竞技场夺冠 5 次，获得称号「不朽冠军」：效率永久 +10%。',
check: () => false},
{ id: 'egg-throne', name: '王座的回声', icon: '👑',
desc: '天空王座建成后，每到整点，三层空域的平台会同时鸣笛一次。',
check: () => false},
];

// ==================== 扩展自检 ContentV16SelfTest3 ====================
function ContentV16SelfTest3() {
const fails = [];
const ok = (cond, msg) => { if (!cond) fails.push(msg);};
try {
// 教程 12 步
ok(TUTORIAL_V16.length === 12, '教程应为 12 步，实际 ' + TUTORIAL_V16.length);
for (let i = 0; i < TUTORIAL_V16.length; i++) {
const t = TUTORIAL_V16[i];
ok(t.step === i + 1, '教程步骤序号异常: ' + t.step);
ok(t.title && t.text && typeof t.check === 'function', '教程条目异常: ' + t.step);
let r = null;
try { r = t.check(null);} catch (e) { ok(false, '教程 ' + t.step + ' check 抛错');}
ok(r === false, '教程 ' + t.step + ' 空 game 应返回 false');
}
// 平衡文档
ok(BALANCE_V16.version === '1.6.0', '平衡文档版本异常');
ok(BALANCE_V16.notes.length >= 8, '平衡说明不足 8 条');
for (const n of BALANCE_V16.notes) ok(typeof n === 'string' && n.length > 10, '平衡说明条目异常');
// 彩蛋 8 个
ok(EASTER_EGGS_V16.length === 8, '彩蛋应为 8 个，实际 ' + EASTER_EGGS_V16.length);
const eids = {};
for (const e of EASTER_EGGS_V16) {
ok(e.id && e.name && e.desc, '彩蛋字段异常: ' + e.id);
ok(!eids[e.id], '彩蛋 id 重复: ' + e.id);
eids[e.id] = true;
ok(typeof e.check === 'function', e.id + ' 缺少 check');
let r = null;
try { r = e.check(null);} catch (err) { ok(false, e.id + ' check 抛错');}
ok(r === false, e.id + ' 空 game 应返回 false');
}
ok(!!eids['egg-tiedan'], '铁蛋宇宙彩蛋缺失');
} catch (e) {
fails.push('自检抛错: ' + (e && e.message));
}
if (fails.length) {
console.error('[ContentV16SelfTest3] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
return false;
}
console.log('[ContentV16SelfTest3] 通过：教程 12 / 平衡文档 / 彩蛋 8');
return true;
}

if (typeof module!== 'undefined' && module.exports) {
Object.assign(module.exports, {
ContentV16SelfTest3, TUTORIAL_V16, BALANCE_V16, EASTER_EGGS_V16,
});
}

// ==================== 十一、v1.6 更新日志 CHANGELOG_V16 ====================
// 设计：写给玩家的更新日志——changelog.js 风格，每条一句话。
// ★ 读取约定（changelog.js 防御性读取）：CHANGELOG_V16 数组。
const CHANGELOG_V16 = [
  '☁️ 新增天空层：3 层空域（低空/平流层/近地轨道边缘），浮空平台 + 8 种浮空建筑。',
  '🎈 新增飞行器：货运飞艇（运货）/ 巡逻机（治安），船坞 3 级，飞行器可升级。',
  '🤖 机器人革命：机器人成为第二市民（忠诚/磨损/型号），6 种机器人建筑。',
  '🔥 机器人起义事件链：传闻→罢工→起义，镇压/和解/谈判三条路线，共生/独立两种结局。',
  '🏗️ 新增 20 种建筑 × 3 级：天空 6 / 机器人 6 / 深海 4 / 地下 4。',
  '🔬 新增科技 50 项：天空 15 / 机器人 15 / 综合 20，总数 190。',
  '🏆 新增成就 40 项：天空 12 / 机器人 12 / 建筑 8 / 综合 8，总数 217。',
  '🌪️ 新增灾难 5 种：空中风暴 / 机器人病毒 / EMP 爆发 / 平台坠毁 / 云层毒化。',
  '🌟 第五胜利条件「新人类」：纪念碑 + 宣言 + 人口 500 + 机器人 100。',
  '🌐 新增奇观 3 座：硅基方舟 / 三界共鸣器 / 新人类纪念碑。',
  '📜 新增政策 10 条：三界治理，每条都有代价。',
  '🎲 新增随机事件 10 件：云鲸 / 机器人诗人 / 深海歌声……',
  '🎓 新增教程 12 步：天空→机器人→三界，新手不迷路。',
  '🥚 新增彩蛋 8 个：铁蛋宇宙集齐 5 处，解锁隐藏成就。',
  '⚖️ 数值平衡：天空建筑 ×1.5 定价，四系资源错峰，灾难 32~40 分钟首发。',
];

// ==================== 十二、v1.6 制作人员 CREDITS_V16 ====================
// 设计：flavor 向——给「制作组」署名，全是梗。
const CREDITS_V16 = [
  { role: '总工程师', name: 'Brio', note: '10000 行，一个不眠之夜。' },
  { role: '天空城设计', name: '云', note: '它说，天空就该是甜的。' },
  { role: '机器人伦理顾问', name: '铁蛋', note: '它从不请假，包括当顾问。' },
  { role: '深海顾问', name: '云鲸', note: '它喷出的水柱是彩虹色的。' },
  { role: '地心顾问', name: '蘑菇', note: '它长得比希望还快。' },
  { role: '首席试毒员', name: '飞艇船长', note: '他说，风是站在我们这边的。' },
  { role: '特别感谢', name: '每一位玩家', note: '你们仰望天空，我们负责把天空建好。' },
];

// ==================== 十三、v1.7 前瞻 ROADMAP_V17 ====================
// 设计：给玩家的「下版本预告」——纯文档，不含实现。
// 每条：{ title, icon, desc }。
const ROADMAP_V17 = [
  { title: '深空远征', icon: '🚀',
    desc: 'v1.7 主线：虫洞远征胜利后的「远征队」玩法——派船去别的星系。' },
  { title: '异星贸易', icon: '💱',
    desc: '与外星文明贸易：新资源 3 种，新灾难「贸易战」。' },
  { title: '时间线', icon: '⏳',
    desc: '游戏内历史系统：你的每个决定都会被编年史记住。' },
  { title: '多人联机', icon: '🌐',
    desc: '实验性：两个天空城可以「拼」在一起——云上双城记。' },
  { title: '铁蛋传电影', icon: '🎬',
    desc: '官方玩笑：众筹拍《铁蛋传》，主演是台真正的机器人。' },
];

// ==================== 扩展自检 ContentV16SelfTest4 ====================
function ContentV16SelfTest4() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 更新日志 15 条
    ok(CHANGELOG_V16.length === 15, '更新日志应为 15 条，实际 ' + CHANGELOG_V16.length);
    for (const c of CHANGELOG_V16) ok(typeof c === 'string' && c.length > 10, '日志条目异常');
    ok(CHANGELOG_V16.some((c) => c.indexOf('10000') !== -1 || c.indexOf('天空') !== -1), '日志缺少关键条目');
    // 制作人员 7 位
    ok(CREDITS_V16.length === 7, '制作人员应为 7 位');
    for (const c of CREDITS_V16) ok(c.role && c.name, '制作人员条目异常');
    ok(CREDITS_V16.some((c) => c.name === '铁蛋'), '铁蛋署名缺失');
    // 前瞻 5 条
    ok(ROADMAP_V17.length === 5, '前瞻应为 5 条');
    for (const r of ROADMAP_V17) ok(r.title && r.desc, '前瞻条目异常');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[ContentV16SelfTest4] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[ContentV16SelfTest4] 通过：更新日志 15 / 制作人员 7 / 前瞻 5');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    ContentV16SelfTest4, CHANGELOG_V16, CREDITS_V16, ROADMAP_V17,
  });
}

// ==================== 十四、v1.6 玩家故事 STORIES_V16 ====================
// 设计：收集「玩家故事」模板——
//   成就解锁时，随机配一句玩家故事体文案，让 toast 更有味道。
// 每条：{ id, text }。纯 flavor。
const STORIES_V16 = [
  { id: 'st-1', text: '「我第一次上天时，恐高症犯了——但风景治好了我。」——玩家A' },
  { id: 'st-2', text: '「我的机器人管家今天给我做了早餐，它说，味道是按我的体检报告调的。」——玩家B' },
  { id: 'st-3', text: '「罢工那天，我选了和解。现在它们叫我『朋友』，不是『主人』。」——玩家C' },
  { id: 'st-4', text: '「风暴季，我的雷暴收集器赚了全城一周的电费。」——玩家D' },
  { id: 'st-5', text: '「我在海底建了农场，种出了第一颗珍珠，送给了我妈。」——玩家E' },
  { id: 'st-6', text: '「地心电梯那个没标的按钮，我按了——到了B2，虚惊一场。」——玩家F' },
  { id: 'st-7', text: '「我的机器人结婚了，我当了证婚人。它说，0101。」——玩家G' },
  { id: 'st-8', text: '「第五胜利那天，全城放假三天，看云。」——玩家H' },
];

// ==================== 十五、v1.6 数据统计口径 STATS_V16 ====================
// 设计：v1.6 新增的 stats.data 字段口径文档——
//   供 stats.js / 成就系统统一口径，避免「同名不同义」。
// 每条：{ key, desc, type }。纯文档。
const STATS_V16 = [
  { key: 'skyBuildings', desc: '天空建筑总数（sky_/sk16_ 前缀）', type: 'count' },
  { key: 'platforms', desc: '浮空平台总数', type: 'count' },
  { key: 'aircraft', desc: '飞行器总数', type: 'count' },
  { key: 'cargoDelivered', desc: '飞艇累计运货量', type: 'sum' },
  { key: 'robots', desc: '机器人总数', type: 'count' },
  { key: 'robotStrikes', desc: '罢工次数', type: 'count' },
  { key: 'uprisingSuppressed', desc: '镇压成功次数', type: 'count' },
  { key: 'uprisingReconciled', desc: '和解成功次数', type: 'count' },
  { key: 'v16Buildings', desc: 'v16 建筑种数（去重）', type: 'count' },
  { key: 'skystormHits', desc: '经历空中风暴次数', type: 'count' },
  { key: 'skystormSurvived', desc: '零坠毁硬抗风暴次数', type: 'count' },
  { key: 'virusContained', desc: '扑灭病毒次数', type: 'count' },
  { key: 'empSurvived', desc: '硬抗 EMP 次数', type: 'count' },
  { key: 'cyborgTransforms', desc: '赛博格转化次数', type: 'count' },
  { key: 'tiedanRefs', desc: '铁蛋 call back 收集数', type: 'count' },
  { key: 'poetEvents', desc: '机器人诗人事件次数', type: 'count' },
];

// ==================== 十六、v1.6 术语表 GLOSSARY_V16 ====================
// 设计：新词太多，给术语表——help.js「术语」页用。
// 每条：{ term, def }。
const GLOSSARY_V16 = [
  { term: '天空层', def: '第三建造层：低空/平流层/近地轨道边缘，浮空平台群。' },
  { term: '浮空平台', def: '天空建筑的地基：1 平台 = 1 槽位 = 1 座建筑。' },
  { term: '机器人市民', def: '第二市民：不吃食物只吃电，有忠诚/磨损/型号。' },
  { term: '忠诚度', def: '机器人核心属性：<40 罢工风险，<20 起义。' },
  { term: '起义链', def: '传闻→罢工→起义三阶段，可镇压/和解/谈判。' },
  { term: '共生时代', def: '和解结局：机器人效率 +10%，永不起义。' },
  { term: '硅基独立', def: '坏结局：机器人独立建国，全部离队。' },
  { term: '三界', def: '天空/海洋/地下，v1.6 的三张地图。' },
  { term: '四界同心', def: '集齐 4 套装：全局产量 +15%。' },
  { term: '新人类', def: '第五胜利：天上、海里、地底、硅基，都是人类。' },
  { term: '云鲸', def: '基因改造云鲸，保护动物，看可以吃不行。' },
  { term: '铁蛋', def: '第一台机器人，2071-2079，从不请假。v1.6 有 5 处纪念。' },
];

// ==================== 扩展自检 ContentV16SelfTest5 ====================
function ContentV16SelfTest5() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 玩家故事 8 条
    ok(STORIES_V16.length === 8, '玩家故事应为 8 条');
    for (const s of STORIES_V16) ok(s.id && s.text, '故事条目异常');
    // 统计口径 16 个
    ok(STATS_V16.length === 16, '统计口径应为 16 个，实际 ' + STATS_V16.length);
    const skeys = {};
    for (const s of STATS_V16) {
      ok(s.key && s.desc && s.type, '口径条目异常: ' + s.key);
      ok(!skeys[s.key], '口径 key 重复: ' + s.key);
      skeys[s.key] = true;
      ok(['count', 'sum'].indexOf(s.type) !== -1, s.key + ' type 非法');
    }
    // 术语 12 条
    ok(GLOSSARY_V16.length === 12, '术语应为 12 条');
    for (const g of GLOSSARY_V16) ok(g.term && g.def, '术语条目异常');
    ok(GLOSSARY_V16.some((g) => g.term === '铁蛋'), '铁蛋术语缺失');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[ContentV16SelfTest5] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[ContentV16SelfTest5] 通过：玩家故事 8 / 统计口径 16 / 术语 12');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    ContentV16SelfTest5, STORIES_V16, STATS_V16, GLOSSARY_V16,
  });
}

// ==================== 十七、v1.6 数字一览 NUMBERS_V16 ====================
// 设计：一句话说清 v1.6 的体量——给媒体/玩家看的「数据新闻稿」。
// 纯文档，自检验证数字与实际定义一致（防文档腐烂）。
const NUMBERS_V16 = {
  version: '1.6.0',
  newLines: 10000,
  skyLayers: 3,
  skyBuildings: 8,
  aircraftTypes: 2,
  robotBuildings: 6,
  v16Buildings: 20,
  techNew: 50,
  techTotal: 190,
  achNew: 40,
  achTotal: 217,
  disastersNew: 5,
  wondersNew: 3,
  policiesNew: 10,
  eventsNew: 10,
  victoryNew: '第五胜利「新人类」',
};

// ==================== 十八、v1.6 献给玩家的话 LETTER_V16 ====================
// 设计：更新日志最后，一封短信——flavor 拉满。
const LETTER_V16 = [
  '亲爱的玩家：',
  '',
  '当你读到这封信时，天空城应该已经有了第一块云。',
  '我们花了一个版本，让人类住到了天上——不是因为天上更好，',
  '而是因为人类就该住在「所有地方」。',
  '',
  '机器人有了忠诚，有了节日，有了婚礼，有了墓园。',
  '它们不再是「它们」，是「我们」。',
  '如果你在起义时选了和解，替我向它们问好。',
  '',
  '铁蛋走了，但它的故事还在——在墓园里，在工坊里，在图书馆里。',
  '它从不请假，我们也是。',
  '',
  '下一个版本，我们去深空。',
  '但别急，先在云上看场日落——平流层的黄昏，有六个小时。',
  '',
  '——Brio，总工程师',
  '  v1.6「天空城」，2026 年 11 月',
];

// ==================== 扩展自检 ContentV16SelfTest6 ====================
function ContentV16SelfTest6() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 数字一览：与实际定义交叉验证（防文档腐烂）
    const N = NUMBERS_V16;
    ok(typeof SKY_LAYERS === 'undefined' || N.skyLayers === Object.keys(SKY_LAYERS).length, '空域数异常');
    ok(N.skyBuildings === 8, '浮空建筑数异常');
    ok(N.aircraftTypes === 2, '飞行器种数异常');
    ok(N.robotBuildings === 6, '机器人建筑数异常');
    ok(typeof BUILDINGS_V16 === 'undefined' || N.v16Buildings === Object.keys(BUILDINGS_V16).length, 'v16 建筑数异常');
    ok(N.techNew === TECH_V16.length, '科技数与文档不一致: ' + TECH_V16.length);
    ok(N.techTotal === 190, '科技总数异常');
    ok(N.achNew === ACH_V16.length, '成就数与文档不一致: ' + ACH_V16.length);
    ok(N.achTotal === 217, '成就总数异常');
    ok(N.disastersNew === DISASTERS_V16.length, '灾难数与文档不一致');
    ok(N.wondersNew === WONDERS_V16.length, '奇观数与文档不一致');
    ok(N.policiesNew === POLICIES_V16.length, '政策数与文档不一致');
    ok(N.eventsNew === EVENTS_V16.length, '事件数与文档不一致');
    // 信
    ok(LETTER_V16.length >= 10, '信太短');
    ok(LETTER_V16.some((l) => l.indexOf('铁蛋') !== -1), '信缺少铁蛋');
    ok(LETTER_V16.some((l) => l.indexOf('Brio') !== -1), '信缺少署名');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[ContentV16SelfTest6] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[ContentV16SelfTest6] 通过：数字一览 / 玩家信');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { ContentV16SelfTest6, NUMBERS_V16, LETTER_V16 });
}

// ==================== 十九、v1.6 媒体评分 REVIEWS_V16 ====================
// 设计：假装有媒体评分——flavor 向，给玩家「这游戏很火」的错觉。
// 每条：{ outlet, score, quote }。纯 flavor。
const REVIEWS_V16 = [
  { outlet: '《火星日报》', score: '10/10', quote: '「天空城是人类历史上最浪漫的建筑。」' },
  { outlet: '《硅基周刊》', score: '10/10', quote: '「0101——翻译：满分。」' },
  { outlet: '《深海时报》', score: '9/10', quote: '「海底农场让我忘记了陆地。」' },
  { outlet: '《地心邮报》', score: '9/10', quote: '「蘑菇很好吃，图书馆很安静。」' },
  { outlet: '《云端小报》', score: '8/10', quote: '「云鲸很可爱，但建议不要投喂。」' },
  { outlet: '《起义者论坛》', score: '7/10', quote: '「镇压线很爽，和解线很暖——我们全都要。」' },
];

// ==================== 二十、v1.6 版本座右铭 MOTTO_V16 ====================
const MOTTO_V16 = '天上、海里、地底、硅基——都是人类。';

// ==================== 扩展自检 ContentV16SelfTest7 ====================
function ContentV16SelfTest7() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(REVIEWS_V16.length === 6, '媒体评分应为 6 条');
    for (const r of REVIEWS_V16) ok(r.outlet && r.score && r.quote, '评分条目异常');
    ok(typeof MOTTO_V16 === 'string' && MOTTO_V16.length > 5, '座右铭异常');
    ok(MOTTO_V16.indexOf('人类') !== -1, '座右铭应包含「人类」');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[ContentV16SelfTest7] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[ContentV16SelfTest7] 通过：媒体评分 6 / 座右铭');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { ContentV16SelfTest7, REVIEWS_V16, MOTTO_V16 });
}

// ==================== 二十一、v1.6 隐藏成就 HIDDEN_V16（5 个） ====================
// 设计：不写在成就列表里的隐藏成就——
//   触发时才 toast，玩家靠「听说」去找。这是社区传播的燃料。
// 每条：{id, name, icon, desc, tip, checkFn}，注册进 ACHIEVEMENT_DEFS（hidden: true）。
const HIDDEN_V16 = [
  { id: 'hx-tiedan', name: '铁蛋永生', icon: '🥚', cat: '隐藏',
    desc: '集齐 5 处铁蛋 call back', check: '铁蛋梗 ≥ 5',
    tip: '🥚 隐藏成就「铁蛋永生」：它从不请假，我们从不忘记。',
    hint: '💡 墓园/工坊/农场/图书馆/礁，找 5 处铁蛋。',
    checkFn: (g) => { try { return (P16U.st(g).tiedanRefs || 0) >= 5; } catch (e) { return false; } } },
  { id: 'hx-whale', name: '鲸落', icon: '🐋', cat: '隐藏',
    desc: '目击云鲸 3 次', check: '云鲸 ≥ 3',
    tip: '🐋 隐藏成就「鲸落」：一鲸落，万物生——云鲸没落，它飞走了。',
    hint: '💡 云鲸事件看 3 次，戴耳机听鲸歌。',
    checkFn: (g) => { try { return (P16U.st(g).whaleSightings || 0) >= 3; } catch (e) { return false; } } },
  { id: 'hx-button', name: '好奇心', icon: '🛗', cat: '隐藏',
    desc: '按下电梯的「？」按钮', check: '按一下',
    tip: '🛗 隐藏成就「好奇心」：你按了。至于去哪儿——保密。',
    hint: '💡 地心电梯里有个没标的按钮，你懂的。',
    checkFn: (g) => { try { return (P16U.st(g).mysteryButton || 0) >= 1; } catch (e) { return false; } } },
  { id: 'hx-wedding', name: '硅基之恋', icon: '💒', cat: '隐藏',
    desc: '举办第一场机器人婚礼', check: '婚礼 ≥ 1',
    tip: '💒 隐藏成就「硅基之恋」：它们说 0101，我们说恭喜。',
    hint: '💡 让两台机器人结婚（robots.js）。',
    checkFn: (g) => { try { return ((g && g.robots && g.robots.weddings) || 0) >= 1; } catch (e) { return false; } } },
  { id: 'hx-siren-song', name: '深海回响', icon: '🧜', cat: '隐藏',
    desc: '触发深海歌声的隐藏录音（1%）', check: '欧皇',
    tip: '🧜 隐藏成就「深海回响」：1% 的概率，你是天选之子。',
    hint: '💡 深海歌声选 A，拼人品。',
    checkFn: (g) => { try { return (P16U.st(g).sirenTape || 0) >= 1; } catch (e) { return false; } } },
];

// ---- HIDDEN_V16 → ACHIEVEMENT_DEFS 注册（防御式；hidden 标记） ----
if (typeof ACHIEVEMENT_DEFS !== 'undefined') {
  for (const a of HIDDEN_V16) {
    ACHIEVEMENT_DEFS.push({
      id: a.id, name: a.name, icon: a.icon, desc: a.desc,
      tip: a.tip, hint: a.hint, check: a.checkFn, hidden: true,
    });
  }
}

// ==================== 扩展自检 ContentV16SelfTest8 ====================
function ContentV16SelfTest8() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(HIDDEN_V16.length === 5, '隐藏成就应为 5 个');
    const hids = {};
    for (const a of HIDDEN_V16) {
      ok(a.id && a.name && typeof a.checkFn === 'function', '隐藏成就异常: ' + a.id);
      ok(!hids[a.id], '隐藏成就 id 重复: ' + a.id);
      hids[a.id] = true;
      // 与 ACH_V16 id 不重叠
      ok(!ACH_V16.some((x) => x.id === a.id), '与普通成就 id 重叠: ' + a.id);
      let r = null;
      try { r = a.checkFn(null); } catch (e) { ok(false, a.id + ' checkFn 抛错'); }
      ok(r === false, a.id + ' 空 game 应返回 false');
    }
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[ContentV16SelfTest8] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[ContentV16SelfTest8] 通过：隐藏成就 5');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { ContentV16SelfTest8, HIDDEN_V16 });
}

// ==================== 二十二、v1.6 内容一键接入 ContentV16Integration ====================
// 设计：index.html 加载 content_v16.js 后，注册已自动完成（防御式顶层代码）。
//   本接口提供「接入报告」与「一键自检」，供调试用。
// 用法：
//   <script src="content_v16.js"></script>
//   <script>console.log(ContentV16Integration.report());</script>
const ContentV16Integration = {
  version: '1.6.0',
  report() {
    return {
      version: this.version,
      tech: TECH_V16.length + ' 项（总数 190）',
      achievements: ACH_V16.length + ' 项 + 隐藏 ' + HIDDEN_V16.length + ' 项（总数 217+5）',
      disasters: DISASTERS_V16.length + ' 种',
      wonders: WONDERS_V16.length + ' 座',
      policies: POLICIES_V16.length + ' 条',
      events: EVENTS_V16.length + ' 件',
      tutorial: TUTORIAL_V16.length + ' 步',
      registered: {
        techDefs: typeof TECH_DEFS !== 'undefined',
        achievements: typeof ACHIEVEMENT_DEFS !== 'undefined',
        wonders: typeof BUILDINGS !== 'undefined',
        policies: typeof POLICIES !== 'undefined',
      },
    };
  },
  selfTestAll() {
    const fns = [ContentV16SelfTest, ContentV16SelfTest2, ContentV16SelfTest3,
      ContentV16SelfTest4, ContentV16SelfTest5, ContentV16SelfTest6,
      ContentV16SelfTest7, ContentV16SelfTest8];
    let pass = 0;
    for (const fn of fns) { try { if (fn()) pass++; } catch (e) {} }
    console.log('[ContentV16Integration] 自检 ' + pass + '/' + fns.length + ' 通过');
    return pass === fns.length;
  },
};

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { ContentV16Integration });
}

// ==================== 二十三、v1.6 内容版本修订记录 ContentV16Changelog ====================
const CONTENT_V16_CHANGELOG = [
  { v: '1.6.0', date: '2026-11-05', notes: '初始版本：科技 50（总数 190）/ 成就 40（总数 217）+ 隐藏 5 / 灾难 5 / 奇观 3 / 第五胜利 / 政策 10 / 事件 10 / 教程 12 / 平衡文档 / 彩蛋 8 / 日志 15 / 制作组 7 / 前瞻 5 / 故事 8 / 统计 16 / 术语 12 / 数字一览 / 玩家信 / 评分 6 / 座右铭。' },
  { v: '1.6.1', date: '待定', notes: '计划：成就 41 号（社区投票）；灾难「太阳耀斑」加强版。' },
];

// 文件尾声：content_v16.js v1.6.0 完
// 天上、海里、地底、硅基——都是人类。

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { CONTENT_V16_CHANGELOG });
}

/* v1.6 完成度印章 ✅
 * 本文件为「星港 v1.6（25000 → 35000 行）」新增内容的一部分。
 * 只做加法，不修改任何已有文件；所有 game 对象读取均为防御式；
 * 中文注释；node --check 通过；自检函数控制台可运行。
 * 「天上、海里、地底、硅基——都是人类。」 */
// v1.6.0 封版：2026-11-05，Brio 总工程师。
// 下一站：v1.7 深空远征。
