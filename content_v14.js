/* 星港 — content_v14.js：v1.4 内容（奇观建筑 / 深空科技+20 / 成就+30 / 轨道灾难3）
 *
 * 版本日志：
 *   v1.4.0  初始版本：奇观×5 / 深空科技×20（新分支 deep）/ 成就×30 / 轨道灾难×3 /
 *           星门胜利补丁（City.prototype.checkStargateVictory + StargateVictory.attach）。
 * 维护约定：
 *   - 本文件只做加法：不修改任何已有文件的源码，只扩展全局注册表、打防御性补丁；
 *   - 所有 game 对象读取均为防御式（判存在再读），轨道/深空/外交/军事/政策
 *     管理器可能尚未接入——对应成就与灾难在这些系统上线后自动生效；
 *   - 新增建筑 cost 的 key 只能用现有资源：
 *     iron / ice / rare / water / food / steel / tech / uranium / he3；
 *   - 新增科技 fx 键见「二、深空科技」处的键语义注释，TechTree.mul() 自动乘法叠加；
 *   - 自检：控制台运行 ContentV14SelfTest()。
 */

/* ═══════════════════════════════════════════════════════════════════════
 * 星港 v1.4 内容包（纯加法，不改任何已有文件）
 * 加载顺序：build.js、tech.js、achievements.js、disaster.js 之后，
 * 直接扩展全局注册表：Object.assign(BUILDINGS / TECH_DEFS)，
 * ACHIEVEMENT_DEFS.push，新增 TECH_BRANCHES.deep，定义 class OrbitalHazards。
 *
 * 四大块：
 *   一、奇观建筑 ×5 —— 每种只有 1 级、极贵；星门是第三胜利条件；
 *   二、深空科技 ×20 —— 新分支 deep（🌠），4 列 × 5 层 needs 链；
 *   三、成就 ×30 —— 轨道 10 / 深空 10 / 奇观 5 / 综合 5；
 *   四、轨道灾难 ×3 —— 空间碎片云 / 轨道太阳风暴 / 小行星撞击空间站。
 *
 * 防御性约定（game 对象接口一律判存在）：
 *   game.orbital   可能不存在（轨道系统尚未实装）——对应成就/灾难在系统上线后自动生效；
 *   game.deepSpace  可能不存在（深空系统尚未实装）——同上；
 *   game.military / game.diplomacy / game.policy  可能不存在——奇观效果字段只做数据声明；
 *   game.builder.buildings / game.pop.count / game.tech.has(id)  用前判存在。
 *
 * 自定义效果字段「★ 读取约定」：所有新字段（winsGame / power / needOrbital /
 * needBuilding / globalYieldMul / disasterMul / diplomacyFloor / policySlots /
 * defenseScore / raidIntervalMul 等）都在对应建筑注释里写清读取方式，
 * 供 build.js / military.js / diplomacy.js / policy.js / city.js 防御性读取。
 * ═══════════════════════════════════════════════════════════════════════ */

// ==================== v1.4 小工具（防御性取值） ====================
const P14U = {
  // 轨道 / 深空管理器（可能不存在）
  orb: (g) => (g && g.orbital) || null,
  deep: (g) => (g && g.deepSpace) || null,
  mil: (g) => (g && g.military) || null,
  dip: (g) => (g && g.diplomacy) || null,
  pol: (g) => (g && g.policy) || null,
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
};

// 轨道专用判定：orbital 系统的形状尚未冻结，这里做多重回退——
// 支持 modules 数组 / modules 对象 / moduleCount 数字 / slots 数组。
// 期望的模块形状（未来 orbital 系统实现时参考）：
//   { type: 'solar_sail', hp: 100, maxHp: 100, offline: false, offlineUntil: 0 }
//   type 取值：'solar_sail' 太阳能帆 / 'ring' 轨道环 / 'ship' 飞船 /
//             'stargate_dock' 星门坞 / 'defense' 防御平台 / 'trade' 贸易港 …
const P14O = {
  modules: (g) => {
    const o = P14U.orb(g);
    if (!o) return [];
    if (Array.isArray(o.modules)) return o.modules;
    if (o.modules && typeof o.modules === 'object') return Object.values(o.modules);
    if (Array.isArray(o.slots)) return o.slots.filter((s) => s && (s.module || s.id || s.type));
    return [];
  },
  // 模块类型归一化：type / kind / id / name
  typeOf: (m) => (m && (m.type || m.kind || m.id || m.name)) || '',
  // 某类模块数量
  countType: (g, type) => P14O.modules(g).filter((m) => P14O.typeOf(m) === type).length,
  // 已占用槽位数（模块数 ≥ 槽数时取大；系统未实装时返回 0）
  slotsFilled: (g) => {
    const o = P14U.orb(g);
    if (!o) return 0;
    const n = P14O.modules(g).length;
    if (typeof o.slotsFilled === 'number') return Math.max(n, o.slotsFilled);
    if (Array.isArray(o.slots)) return Math.max(n, o.slots.filter((s) => s && (s.filled || s.module)).length);
    return n;
  },
  // 是否拥有指定建筑/模块（地面建筑 + 轨道模块双通道，取或）
  has: (g, id) => P14U.count(g, id) >= 1 || P14O.countType(g, id) >= 1,
};

// 深空专用判定：deepSpace 系统形状同样多重回退
// 期望的深空形状（未来 deepSpace 系统实现时参考）：
//   { launches: 0,            // 累计深空任务次数
//     fleetSize: 0,           // 船队船只数
//     ruinsFound: 0,          // 发现的遗迹数（共 3 处）
//     visited: ['belt'],      // 到访目标：'belt' 小行星带 / 'phobos' 火卫一 / 'kuiper' 柯伊伯带
//     anomalySeen: false,     // 是否收到异常信号
//     vortexEntered: false }  // 是否穿越引力漩涡
const P14D = {
  probes: (g) => { const d = P14U.deep(g); return (d && (d.launches ?? d.probesLaunched ?? 0)) || P14U.st(g).deepLaunches || 0; },
  fleet: (g) => { const d = P14U.deep(g); return (d && (d.fleetSize ?? d.ships ?? 0)) || P14U.st(g).deepFleet || 0; },
  ruins: (g) => { const d = P14U.deep(g); return (d && (d.ruinsFound ?? d.ruins ?? 0)) || P14U.st(g).ruinsFound || 0; },
  anomaly: (g) => { const d = P14U.deep(g); return !!((d && (d.anomalySeen || d.signalFound)) || P14U.st(g).deepAnomaly); },
  vortex: (g) => { const d = P14U.deep(g); return !!((d && (d.vortexEntered || d.vortexFound)) || P14U.st(g).deepVortex); },
  visited: (g, key) => {  // 是否到访过某深空目标（belt / phobos / kuiper）
    const d = P14U.deep(g);
    if (d && d.visited) {
      if (Array.isArray(d.visited)) return d.visited.includes(key);
      if (typeof d.visited === 'object') return !!d.visited[key];
    }
    return (P14U.st(g)['deepVisited_' + key] || 0) >= 1;
  },
};

// ==================== 一、奇观建筑 ×5 ====================
// 设计总纲：奇观是「一局游戏的句号」。五条铁律——
//   ① 每种只有 1 级：奇观不升级，一步到位，省掉升级线的数值膨胀；
//   ② 极贵：最便宜的议会（800 钢）也相当于 8 座发射台，奇观就该让全城为它打工；
//   ③ 各有前置锁：星门（星门坞+科技+人口三重门）、戴森云（帆×5）、
//      行星引擎（铀 200）、议会（星门线）、堡垒（战争线终点）——
//      没有一条是「攒够钱就行」的，每条都逼玩家先玩明白一个子系统；
//   ④ 限建 1 座：build.js 应对 winsGame / 奇观 id 做唯一性限制（本文件只做数据声明）；
//   ⑤ 胜利层级：发射台（第一胜利，建成即赢）< 方舟（第二胜利，pop200+tech100）<
//      星门（第三胜利，三重门+科技线毕业）——含金量递增，互不贬值。
// 约定：★ 读取约定见每种建筑下方的注释块。
if (typeof BUILDINGS !== 'undefined') Object.assign(BUILDINGS, {

  // ═══════════════════════════════════════════════════════════════════════
  // 1. 🌀 星门 stargate —— 第三胜利条件
  // 定位：整局游戏的终极答案。建成瞬间即胜利，超越「发射台建成」
  // （第一胜利）与「方舟启程」（第二胜利）。
  // 前置三重门（缺一不可）：
  //   ① 星门坞 stargate_dock 已建成（轨道设施，地面/轨道双通道判定）；
  //   ② 累计消耗科技点 ×200（不是「持有」，是「花掉」——防止囤点速通）；
  //   ③ 人口 ≥300（星港必须先成为真正的城市，才有资格叩开星门）。
  // ★ 读取约定（city.js / game.js 防御性读取）：
  //   const lv = BUILDINGS.stargate.levels[b.level] || {};
  //   if (lv.winsGame === 'stargate' && !game.city.gateWon) → 触发第三胜利；
  //   前置检查：P14O.has(game, 'stargate_dock') && stats.techSpent>=200 && pop.count>=300；
  //   techSpent：stats.techSpent（累计消耗科技点），无则回退为 tech.totalUnlocked()*平均成本；
  //   game.js 胜利面板新增 type 'stargate' 文案：「🌀 星门开启！第一批殖民舰队
  //   穿越星门，人类文明正式迈入星际时代。」此文件已为 City.prototype 打上
  //   checkStargateVictory 补丁（见文件末尾），game.js 主循环可直接调用，
  //   或用 StargateVictory.attach(game) 自动接入。
  //   读取示例（game.js 胜利检查处）：
  //     if (this.city.checkStargateVictory(this.builder) && !this._gateWinShown) {
  //       this._gateWinShown = true;
  //       this.showVictory('stargate');  // 面板新增 'stargate' 文案分支
  //     }
  //   建造前置示例（build.js canBuild 处）：
  //     const lv = BUILDINGS.stargate.levels[1];
  //     if (!P14O.has(game, lv.needBuilding)) return { ok: false, reason: '需要先建成星门坞' };
  //     if ((game.stats.techSpent || 0) < lv.needTechSpent) return { ok: false, reason: '累计消耗科技点不足 200' };
  //     if (game.pop.count < lv.needPop) return { ok: false, reason: '人口不足 300' };
  // 数值平衡注释：
  //   - 成本 2000 钢 / 500 稀有矿 / 100 氦-3 / 200 科技点：约等于 3 座方舟的
  //     资源量，设计意图是「方舟是逃离，星门是征服」——星门必须明显更贵，
  //     否则玩家永远选便宜的胜利路线，第三胜利就失去意义。
  //   - needTech: 't-deep-20'：星门科技线终点锁死，跳过深空线不可能速通；
  //     stargateCostMul（星门线科技）可把成本压到 40%，满科技后约 800 钢，
  //     仍是天文数字——折扣是奖励，不是捷径。
  //   - powerUse 50：星门待机就是一座城市的耗电量，逼玩家先解决戴森云/核电；
  //     停电时星门不工作（建造不受影响，已建成胜利不受影响）。
  //   - 只能建 1 座：build.js 建造菜单应对 winsGame 字段做唯一性限制
  //     （已有同 id 建筑时禁用建造按钮），本文件只做数据声明。
  // ═══════════════════════════════════════════════════════════════════════
  stargate: {
    id: 'stargate', name: '星门', icon: '🌀',
    levels: [null,
      { cost: { steel: 2000, tech: 200, rare: 500, he3: 100 }, needPop: 300, powerUse: 50,
        needTech: 't-deep-20', needBuilding: 'stargate_dock', needTechSpent: 200,
        winsGame: 'stargate',
        desc: '建成即开启第三胜利！需星门坞+累计消耗科技200点+人口300',
        flavor: '「当第一束星光从门环中涌出的那一刻，整个星港的人都停下了手中的活——他们知道，火星只是起点。」——《星门纪元·开篇》', },
    ],
    desc: '终极奇观：建成即胜利（第三胜利条件）。需星门坞、科技线终点、人口300',
    flavor: '不是门，是人类文明给宇宙递出的名片。',
    // 建造 flavor：建造过程中的阶段性播报（build.js 可按建造进度取用）
    buildFlavor: '星门地基浇筑完成时，整个星港停电了三秒——不是故障，是门环在「试呼吸」。',
    buildStages: [
      '地基：在星门坞旁浇筑反重力地基，整个星港都能感到地面在「呼吸」。',
      '门环：第一块门环合金吊装完成，300 个名字刻在横梁上。',
      '点火：门环另一侧传回 11 秒音频——语言学家说，那是「你好」。',
    ],
    lore: [
      '第一块门环合金吊装那天，工程师们在横梁上刻了 300 个名字——那是星港全部的人口。',
      '试运行时，门环另一侧传回了一段 11 秒的音频。语言学家说，那不是噪音，是「你好」。',
      '星门建成后，发射台变成了博物馆，方舟变成了摆渡船。胜利的方式，升级了。',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // 2. ☀️ 戴森云 dyson_swarm —— 终极能源
  // 定位：电力问题的「毕业答案」。+1000 电力，一座戴森云可供养整座星港
  // 加上星门待机（50）还有富余，核电站从此退居二线。
  // 前置：轨道太阳能帆 solar_sail ×5（轨道设施）——先有帆，才有云。
  // ★ 读取约定（build.js 防御性读取）：
  //   const lv = BUILDINGS.dyson_swarm.levels[b.level] || {};
  //   const p = lv.power || 0;              // 并入 totalPower()，与核电站同口径
  //   前置检查：P14O.countType(game, 'solar_sail') >= (lv.needOrbital_solar_sail || 5)；
  //   损坏时 power 归零（build.js 损坏建筑不计 power 的既有规则自动覆盖）。
  // 数值平衡注释：
  //   - +1000 电力 vs 核电站 Lv3 150：约 6.7 倍，是「质变」不是「量变」；
  //     成本 1500 钢 / 300 稀有矿 / 150 科技点 ≈ 10 座核电站 Lv3 的造价，
  //     但省下了 10 个建筑格位和 200 人口——奇观卖的是「格位」和「上限」。
  //   - needOrbital_solar_sail: 5：逼玩家先把轨道玩明白（帆板是轨道线早期
  //     模块），戴森云是轨道玩法的毕业奖励，不是空降的数值怪。
  //   - powerUse 0 / power 1000：纯发电建筑，不耗电；渲染层可据此画
  //     ☀️ 光晕特效（buildings 的 power>0 既有高亮规则自动覆盖）。
  //   读取示例（build.js totalPower 处，无需改动既有逻辑）：
  //     // 损坏的戴森云按既有规则不计 power；前置检查：
  //     if (P14O.countType(game, 'solar_sail') + P14U.count(game, 'solar_sail') < 5)
  //       return { ok: false, reason: '需要 5 面轨道太阳能帆' };
  //   - 与行星引擎的联动：两者都建成 = 「能源自由 + 产量自由」，是三胜
  //     利之外的「完美通关」隐藏目标（成就 wonder 系 + 综合系覆盖）。
  // ═══════════════════════════════════════════════════════════════════════
  dyson_swarm: {
    id: 'dyson_swarm', name: '戴森云', icon: '☀️',
    levels: [null,
      { cost: { steel: 1500, tech: 150, rare: 300 }, needPop: 120, power: 1000,
        needTech: 't-deep-9', needOrbital_solar_sail: 5,
        desc: '+1000 电力！终极能源，需 5 面轨道太阳能帆',
        flavor: '「我们不再收集阳光，我们饲养阳光。」——戴森云总工程师开工致辞', },
    ],
    desc: '终极能源奇观：+1000 电力，需 5 面轨道太阳能帆打底',
    flavor: '把恒星变成自家电厂的第一步。',
    buildFlavor: '第一万面反射帆展开时，火星北极的夜空亮如白昼——那是人类第一次「点亮」一颗恒星。',
    buildStages: [
      '奠基：在轨道上展开第一组装配平台，帆板开始列阵。',
      '列阵：第一万面反射帆展开，火星北极的夜空亮如白昼。',
      '并网：戴森云首次满功率输出，电网读数直接爆表。',
    ],
    lore: [
      '戴森云的每一面帆上，都印着捐款人的名字。星港人说：这是全城人凑钱买的「太阳」。',
      '建成那天，核电站举行了退役仪式。老站长说：我烧了一辈子铀，今天终于下岗了，挺好。',
      '电力富余之后，星港开始给过路飞船「充电」收费——宇宙里第一家充电站，开张了。',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // 3. 🌍 行星引擎 planet_engine —— 火星改造
  // 定位：把「火星」本身变成一台机器。全局产量 +25%、灾难伤害 -50%，
  // 是数值膨胀的终点，也是后期灾难（辐射尘埃/小行星带/火星地震/v1.4 轨道
  // 灾难）的官方解法——与其修修补补，不如直接改造行星。
  // ★ 读取约定（resources.js / disaster.js / OrbitalHazards 防御性读取）：
  //   const lv = BUILDINGS.planet_engine.levels[b.level] || {};
  //   全局产量倍率 = ∏(1 + (lv.globalYieldMul || 0))，多座奇观加法汇总后
  //   再与科技 minerMul 等乘法叠加：最终产量 = 基础 × 科技倍率 × (1+引擎加成)；
  //   灾难减伤：disaster.js 结算伤害时 × (1 - (lv.disasterMul || 0))，
  //   OrbitalHazards 同理（碎片云掉血/风暴/撞击统一打 5 折）；
  //   损坏的引擎不计加成（build.js 损坏跳过规则自动覆盖）。
  //   读取示例（resources.js 产量结算处）：
  //     let engineMul = 0;
  //     for (const b of game.builder.buildings) {
  //       if (b.id === 'planet_engine' && !b.damaged)
  //         engineMul += (BUILDINGS.planet_engine.levels[b.level] || {}).globalYieldMul || 0;
  //     }
  //     yield = base * techMul * (1 + engineMul);
  //   减伤示例（disaster.js / OrbitalHazards 结算处）：
  //     const mit = /* 同上聚合的 disasterMul，加法汇总，上限 0.9 */;
  //     damage = Math.round(damage * (1 - mit));
  // 数值平衡注释：
  //   - +25% 全局产量：约等于整条生产科技线（t-prod 全解锁 ≈ +30%）的
  //     八成，但一座建筑搞定——奇观的价值在于「省科技点、省格位」；
  //     与科技是乘法叠加而非加法，避免后期数值崩坏（1.3×1.25=1.625，
  //     而不是 1.55，差距可控）。
  //   - 灾难 -50%：火星地震每次掉 50% hp → 变成 25%，需要 4 次地震才倒塌
  //     一栋满血建筑；小行星带 10 波的压迫感减半。注意这是「减伤」不是
  //     「免疫」——灾难依然存在，只是从「灭顶」变成「麻烦」。
  //   - 成本 3000 钢 / 250 科技点 / 200 铀：全奇观最贵，铀 200 逼玩家
  //     点出铀矿机体系（v1.3 辐射尘埃灾难的泄漏源），形成「铀矿→尘埃
  //     风险→引擎减伤」的闭环叙事。
  //   - needPop 200：引擎需要一整座城市为它打工。
  // ═══════════════════════════════════════════════════════════════════════
  planet_engine: {
    id: 'planet_engine', name: '行星引擎', icon: '🌍',
    levels: [null,
      { cost: { steel: 3000, tech: 250, uranium: 200 }, needPop: 200, powerUse: 80,
        needTech: 't-deep-17', globalYieldMul: 0.25, disasterMul: 0.5,
        desc: '火星改造引擎：全局产量 +25%，所有灾难伤害 -50%',
        flavor: '「我们给火星装上了发动机。从今天起，行星为我们打工。」——行星引擎点火仪式', },
    ],
    desc: '改造火星本身：全局产量 +25%、灾难伤害 -50%，后期灾难的官方解法',
    flavor: '当一颗行星开始为你工作，灾难就只是天气。',
    buildFlavor: '引擎点火测试时，整个火星晃了一下。地震仪记录到：行星「心跳」了三秒。',
    buildStages: [
      '钻探：向地幔打出 12 口深井，火星第一次「发烧」。',
      '点火：引擎试车三秒，全球地震仪记录到行星「心跳」。',
      '全功率：磁场开始恢复，大气工程师开香槟了。',
    ],
    lore: [
      '行星引擎的控制室里有一块牌子：「本机器保修期：40 亿年。」',
      '引擎启动后，火星的磁场开始恢复。大气工程师说：再过一百年，户外不用戴头盔了。',
      '有人问总工程师，改造行星最大的风险是什么。他说：成功之后，我们就没借口了。',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // 4. 🏛️ 人类议会 hall_of_humanity —— 外交与政策
  // 定位：外交线的「毕业建筑」。两大效果：
  //   ① 所有外交关系锁定 ≥0（再也不会跌成负数，宣战后也能保底）；
  //   ② 政策槽 +2（v1.3 政策系统上限突破，多同时生效两项政策）。
  // ★ 读取约定（diplomacy.js / policy.js 防御性读取）：
  //   const lv = BUILDINGS.hall_of_humanity.levels[b.level] || {};
  //   关系下限：diplomacy.js 结算关系变化时，result = Math.max(result,
  //     lv.diplomacyFloor != null ? lv.diplomacyFloor : -Infinity)；
  //   政策槽：policy.js 计算上限时 + (lv.policySlots || 0)，多座议会加法汇总
  //   （但奇观限建 1 座，汇总恒为 +2）；损坏的议会不计（损坏跳过规则）。
  //   注意：diplomacyFloor 只锁「下限」，关系依然可以涨到 100；
  //   宣战行为本身不受影响（该打还是打，只是打完关系不会跌破 0）。
  //   读取示例（diplomacy.js 关系结算处）：
  //     const floor = /* 聚合 hall_of_humanity 的 diplomacyFloor，未建成则 -Infinity */;
  //     rel.value = Math.max(floor, rel.value + delta);
  //   政策槽示例（policy.js 上限计算处）：
  //     const maxActive = BASE_POLICY_SLOTS + /* 聚合的 policySlots（损坏跳过） */;
  // 数值平衡注释：
  //   - 关系锁 0 的强度：v1.3 成就 dip-hostile（关系 -100）将变得不可达成——
  //     这是故意的：建了议会 = 选择和平路线，战争系成就请在此之前拿完；
  //     成就 check 里对 gateWon/diplomacyFloor 不做豁免，保持「选择有代价」。
  //   - 政策槽 +2：v1.3 政策上限 5 → 7，pol-5 成就（五策并举）难度下降，
  //     但这是奇观应得的奖励；穷兵黩武/藏富于民（各需 3 项同类）依然要取舍。
  //   - 成本 800 钢 / 120 科技点 / 200 稀有矿：五奇观里最便宜，因为它是
  //     「辅助型」奇观——不直接加数值，加的是「可能性」。
  //   - needTech: 't-deep-12'：议会需要星门线的外交哲学（同盟军演 t-war-12
  //     是前置隐喻），科技叙事上自洽。
  // ═══════════════════════════════════════════════════════════════════════
  hall_of_humanity: {
    id: 'hall_of_humanity', name: '人类议会', icon: '🏛️',
    levels: [null,
      { cost: { steel: 800, tech: 120, rare: 200 }, needPop: 150, powerUse: 10,
        needTech: 't-deep-12', diplomacyFloor: 0, policySlots: 2,
        desc: '外交关系锁定≥0不再交恶，政策槽 +2',
        flavor: '「在这里，每一种语言都有一个座位，每一种分歧都有一张桌子。」——议会大厅铭文', },
    ],
    desc: '外交毕业奇观：关系永不为负，政策槽 +2',
    flavor: '火星上第一个「吵架也不会掀桌子」的地方。',
    buildFlavor: '议会大厅封顶那天，三个互相宣战过的势力代表，在同一张桌子上吃了午饭。',
    buildStages: [
      '奠基：圆桌地基浇筑完成——设计师坚持：圆桌没有主位。',
      '封顶：大厅封顶那天，三个交战势力的代表同桌吃了午饭。',
      '开议：第一项决议全票通过：《关于禁止在会议期间拔枪的补充条款》。',
    ],
    lore: [
      '议会的座位是圆的。设计师说：圆桌没有主位，火星也没有主人，只有房客。',
      '第一任议长是个种地的。他说：我不懂外交，但我懂怎么让一桌子人吃饱。',
      '议会通过的第一项决议是：《关于禁止在会议期间拔枪的补充条款》。全票通过。',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // 5. ⚔️ 战争堡垒 war_fortress —— 军事终极
  // 定位：v1.3 军事体系的毕业建筑。防御总评 +200（直接加到 military.js
  // 的 defensePower() 上），袭击间隔翻倍（raidInterval ×2）。
  // ★ 读取约定（military.js 防御性读取）：
  //   const lv = BUILDINGS.war_fortress.levels[b.level] || {};
  //   防御总评：defensePower() 返回值 + (lv.defenseScore || 0)，多座加法汇总
  //   （奇观限建 1 座，恒为 +200）；损坏的堡垒不计；
  //   袭击间隔：military.js 调度下次袭击时 × (lv.raidIntervalMul || 1)，
  //   与科技 raidIntervalMul（t-war-7/t-war-19）乘法叠加：
  //   满配 = 2.0(堡垒) × 1.5(不动要塞) × 1.25(巡逻无人机) = 3.75 倍间隔，
  //   袭击从「家常便饭」变成「节日限定」。
  //   读取示例（military.js defensePower / 袭击调度处）：
  //     let dp = baseDefensePower();
  //     for (const b of game.builder.buildings) {
  //       if (b.id === 'war_fortress' && !b.damaged)
  //         dp += (BUILDINGS.war_fortress.levels[b.level] || {}).defenseScore || 0;
  //     }
  //     let intervalMul = game.tech.mul('raidIntervalMul');  // 科技部分
  //     if (hasFortress) intervalMul *= 2.0;                  // 堡垒部分
  //     nextRaidAt = now + baseInterval * intervalMul;
  // 数值平衡注释：
  //   - 防御 +200：v1.3 成就 mil-def100（防御 100）/ mix-hegemon（防御 200）
  //     的存在说明后期防御 200 是「霸主线」门槛；一座堡垒直接送 200，
  //     等于把军事流毕业时间砍掉一半——这是奇观该有的分量。
  //   - 袭击间隔翻倍 vs t-war 系科技：科技是「渐进」，堡垒是「质变」；
  //     两者乘法叠加是刻意设计，让纯军事流玩家有「毕业爽感」。
  //   - 成本 1200 钢 / 100 科技点 / 100 铀：铀 100 对应「堡垒的炮弹是核的」，
  //     叙事自洽；比行星引擎便宜，因为它是「单系统」奇观（只管军事）。
  //   - needTech: 't-war-20'（星际盟约）：军事线终点锁死，逼军事玩家
  //     先走完战争科技树——奇观是毕业，不是跳级。
  //   - 与人类议会的对立叙事：堡垒 = 以战止战，议会 = 以和止战；
  //     两座都建 = 「大棒加胡萝卜」，成就 mix-hegemon 的终极形态。
  // ═══════════════════════════════════════════════════════════════════════
  war_fortress: {
    id: 'war_fortress', name: '战争堡垒', icon: '⚔️',
    levels: [null,
      { cost: { steel: 1200, tech: 100, uranium: 100 }, needPop: 180, powerUse: 30,
        needTech: 't-war-20', defenseScore: 200, raidIntervalMul: 2.0,
        desc: '防御总评 +200，袭击间隔翻倍',
        flavor: '「它的影子落在荒漠上，连沙尘暴都要绕道。」——袭击者俘虏的口供', },
    ],
    desc: '军事毕业奇观：防御 +200、袭击间隔 ×2，与战争科技乘法叠加',
    flavor: '星港的拳头，整个火星都看得见。',
    buildFlavor: '堡垒主炮试射那天，靶场设在 50 公里外。炮弹飞过去用了 11 秒，回来的是寂静。',
    buildStages: [
      '筑基：城墙地基里埋入第一座倒塌防御塔的残骸。',
      '主炮：主炮吊装完成，50 公里外的靶场开始紧张。',
      '试射：炮弹飞行 11 秒，回来的是寂静——和 100 公里外掉头的侦察兵。',
    ],
    lore: [
      '堡垒的城墙里埋着第一座倒塌的防御塔残骸。铭文：「我们记得每一座倒下的塔。」',
      '建成后，袭击者的侦察兵在 100 公里外就掉头了。雷达员说：这比开火管用。',
      '堡垒司令的办公室挂着人类议会的锦旗。底下小字：「大棒和胡萝卜，我们全都要。」',
    ],
  },
});

// ==================== 二、深空科技 +20 ====================
// 设计总纲：深空线是「胜利之后」的游戏。定价逻辑——
//   全点满 1695 科技点 ≈ 方舟胜利所需（100 点）的 17 倍，
//   玩家要么已经赢过一次（方舟/发射台），要么正在冲第三胜利；
//   四列分工：A 列省钱（轨道折扣）、B 列速度与收益（深空任务）、
//   C 列彩票（遗迹倍率）、D 列门票（星门成本）；
//   D 列终点 t-deep-20 是全树唯一的双前置，C 列顶层 t-deep-19 是其中之一——
//   「读懂先驱者，才能造出星门」，机制与叙事同一句话。
// 新增分支
if (typeof TECH_BRANCHES !== 'undefined') {
  TECH_BRANCHES.deep = { name: '深空', icon: '🌠', color: '#67e8f4' };
}

// 深空系 fx 键语义（供轨道/深空系统读取；TechTree.mul() 自动做乘法叠加）：
//   orbitalCostMul   轨道模块建造成本倍率（<1 = 更便宜）
//   probeSpeedMul    探测器/深空任务速度倍率（>1 = 更快）
//   fleetYieldMul    深空船队采集收益倍率（>1 = 更多）
//   ruinBonusMul     遗迹研究加成倍率（>1 = 遗迹奖励更多）
//   stargateCostMul  星门建造成本倍率（<1 = 更便宜，叠满 0.4）
//   stationPowerMul  空间站/轨道设施电力倍率（>1 = 帆板等发电更多）
// 布局：4 列 × 5 层 needs 链——
//   A 列 轨道建造线（t-deep-1/5/9/13/17）：orbitalCostMul 为主，顶层带 stationPowerMul；
//   B 列 深空探索线（t-deep-2/6/10/14/18）：probeSpeedMul 与 fleetYieldMul 交替；
//   C 列 遗迹研究线（t-deep-3/7/11/15/19）：ruinBonusMul 单线深挖；
//   D 列 星门线（t-deep-4/8/12/16/20）：stargateCostMul 单线，终点解锁星门建造。
if (typeof TECH_DEFS !== 'undefined') Object.assign(TECH_DEFS, {
  // -------- A 列：轨道建造线（orbitalCostMul）--------
  // 设计说明：本列是「省钱列」。五层 orbitalCostMul 均为 <1 的乘法叠加：
  //   0.9 × 0.9 × 0.9 × 0.8 × 0.7 = 0.408，点满后轨道模块成本打 4 折；
  //   顶层两格额外带 stationPowerMul（1.2 / 1.3），与帆板发电乘法叠加，
  //   是戴森云前置的必经之路。cost 曲线 15/35/60/100/150，约等于
  //   两条 v1.2 轨道科技线的总和——深空是后期的游戏，定价也要后期的样子。
  't-deep-1': {
    name: '轨道船坞学', icon: '🛠️', branch: 'deep', cost: 15, needs: [],
    desc: '轨道模块建造成本 -10%。「先学会在天上盖房子。」',
    hint: '💡 轨道玩法的起点：造第一个模块之前先点它，越早越省。',
    fx: { orbitalCostMul: 0.9 },
  },
  't-deep-5': {
    name: '模块化组装', icon: '🧩', branch: 'deep', cost: 35, needs: ['t-deep-1'],
    desc: '轨道模块建造成本再 -10%（叠加）。「像搭积木一样搭空间站。」',
    hint: '💡 模块铺开后，省下的成本非常可观。',
    fx: { orbitalCostMul: 0.9 },
  },
  't-deep-9': {
    name: '在轨制造', icon: '🏭', branch: 'deep', cost: 60, needs: ['t-deep-5'],
    desc: '轨道模块建造成本再 -10%（叠加）。「把工厂搬上天，运费就省了。」',
    hint: '💡 在轨制造是轨道中期的核心折扣。',
    fx: { orbitalCostMul: 0.9 },
  },
  't-deep-13': {
    name: '巨型桁架', icon: '🌉', branch: 'deep', cost: 100, needs: ['t-deep-9'],
    desc: '轨道模块建造成本 -20%（叠加），空间站电力 +20%。「骨架有多大，梦想就有多大。」',
    hint: '💡 桁架同时加电力，帆板流必点。',
    fx: { orbitalCostMul: 0.8, stationPowerMul: 1.2 },
  },
  't-deep-17': {
    name: '轨道工业综合体', icon: '🏗️', branch: 'deep', cost: 150, needs: ['t-deep-13'],
    desc: '轨道模块建造成本 -30%（叠加），空间站电力 +30%。「天上也有一座星港了。」',
    hint: '💡 轨道毕业科技，戴森云的最佳拍档。',
    fx: { orbitalCostMul: 0.7, stationPowerMul: 1.3 },
  },

  // -------- B 列：深空探索线（probeSpeedMul / fleetYieldMul）--------
  // 设计说明：本列是「速度与收益列」。probeSpeedMul 与 fleetYieldMul 交替出现，
  //   模拟「飞得更快 → 采得更多 → 飞得更远」的循环：
  //   速度总倍率 1.25 × 1.5 × 2.0 = 3.75，收益总倍率 1.3 × 1.5 = 1.95；
  //   顶层「曲速前夜」致敬经典科幻——速度翻倍是深空任务体验质变的关键帧。
  //   注意 t-deep-10 的 needs 是 t-deep-6（跨键交替），不是 t-deep-2，
  //   保证 needs 链严格按列向下不断裂。
  't-deep-2': {
    name: '深空导航', icon: '🧭', branch: 'deep', cost: 15, needs: [],
    desc: '探测器速度 +25%。「星图的第一笔，总是从迷路开始。」',
    hint: '💡 深空第一步：探测器飞得更快，早期探索必点。',
    fx: { probeSpeedMul: 1.25 },
  },
  't-deep-6': {
    name: '小行星采矿协议', icon: '⛏️', branch: 'deep', cost: 35, needs: ['t-deep-2'],
    desc: '深空船队采集收益 +30%。「小行星带是挂在天上的矿脉。」',
    hint: '💡 船队回本周期缩短，早出早享受。',
    fx: { fleetYieldMul: 1.3 },
  },
  't-deep-10': {
    name: '离子推进阵列', icon: '🚀', branch: 'deep', cost: 60, needs: ['t-deep-6'],
    desc: '探测器速度再 +50%（叠加）。「慢工出细活，但快工能去柯伊伯带。」',
    hint: '💡 去柯伊伯带之前先点它，少飞一半时间。',
    fx: { probeSpeedMul: 1.5 },
  },
  't-deep-14': {
    name: '舰队补给链', icon: '🔗', branch: 'deep', cost: 100, needs: ['t-deep-10'],
    desc: '深空船队采集收益再 +50%（叠加）。「船队走多远，补给线就有多长。」',
    hint: '💡 10 船舰队的收益放大器，舰队流核心。',
    fx: { fleetYieldMul: 1.5 },
  },
  't-deep-18': {
    name: '曲速前夜', icon: '💫', branch: 'deep', cost: 150, needs: ['t-deep-14'],
    desc: '探测器速度 +100%（叠加）。「光速还是梦想，但我们已经在路上了。」',
    hint: '💡 深空终极速度，刷遗迹 3 之前建议点满。',
    fx: { probeSpeedMul: 2.0 },
  },

  // -------- C 列：遗迹研究线（ruinBonusMul）--------
  // 设计说明：本列是「单线深挖列」。ruinBonusMul 从 1.3 一路涨到 3.0，
  //   五层乘法叠加 1.3 × 1.5 × 2.0 × 2.5 × 3.0 = 29.25 倍——遗迹是深空
  //   玩法里最「彩票」的部分，倍率给得慷慨，因为触发频率最低；
  //   顶层 t-deep-19 同时是星门终点 t-deep-20 的前置之一，
  //   叙事上「读懂先驱者，才能造出星门」，机制上逼双线毕业。
  't-deep-3': {
    name: '异星考古学', icon: '🏺', branch: 'deep', cost: 20, needs: [],
    desc: '遗迹研究加成 +30%。「每一块碎片，都是一封来自远古的信。」',
    hint: '💡 遗迹党起点：越早破译，遗迹奖励滚雪球越大。',
    fx: { ruinBonusMul: 1.3 },
  },
  't-deep-7': {
    name: '符文破译', icon: '📜', branch: 'deep', cost: 40, needs: ['t-deep-3'],
    desc: '遗迹研究加成再 +50%（叠加）。「他们用的不是文字，是数学。」',
    hint: '💡 破译越早，遗迹奖励滚雪球越大。',
    fx: { ruinBonusMul: 1.5 },
  },
  't-deep-11': {
    name: '先驱者数据库', icon: '💾', branch: 'deep', cost: 70, needs: ['t-deep-7'],
    desc: '遗迹研究加成再 +100%（叠加）。「我们站在巨人的硬盘上。」',
    hint: '💡 数据库是遗迹线的质变点，奖励翻倍。',
    fx: { ruinBonusMul: 2.0 },
  },
  't-deep-15': {
    name: '逆向工程', icon: '⚙️', branch: 'deep', cost: 110, needs: ['t-deep-11'],
    desc: '遗迹研究加成再 +150%（叠加）。「看不懂没关系，先抄下来。」',
    hint: '💡 配合舰队双线收益，越到后期越香。',
    fx: { ruinBonusMul: 2.5 },
  },
  't-deep-19': {
    name: '先驱者遗产', icon: '👽', branch: 'deep', cost: 160, needs: ['t-deep-15'],
    desc: '遗迹研究加成 +200%（叠加）。「他们留下的，我们全都要。」',
    hint: '💡 遗迹毕业，同时是解锁星门的前置之一。',
    fx: { ruinBonusMul: 3.0 },
  },

  // -------- D 列：星门线（stargateCostMul）--------
  // 设计说明：本列是「胜利列」。stargateCostMul 五层叠加
  //   0.9 × 0.9 × 0.9 × 0.75 × 0.8 = 0.437，约等于 spec 要求的叠满 0.4；
  //   终点 t-deep-20 是全深空线唯一的双前置（t-deep-16 + t-deep-19），
  //   也是星门建筑 needTech 锁死的科技——跳过任何一列都造不出星门；
  //   D 列 cost 最高（25/50/80/120/180），因为它是通往第三胜利的门票。
  't-deep-4': {
    name: '虫洞理论', icon: '🌀', branch: 'deep', cost: 25, needs: [],
    desc: '星门建造成本 -10%。「理论上，门是存在的。」',
    hint: '💡 星门线起点：贵，但每一刀都砍在星门成本上。',
    fx: { stargateCostMul: 0.9 },
  },
  't-deep-8': {
    name: '奇点约束', icon: '⚫', branch: 'deep', cost: 50, needs: ['t-deep-4'],
    desc: '星门建造成本再 -10%（叠加）。「把一个黑洞，关进一个笼子。」',
    hint: '💡 星门成本的关键一刀，冲刺星门前必点。',
    fx: { stargateCostMul: 0.9 },
  },
  't-deep-12': {
    name: '门环工程学', icon: '⭕', branch: 'deep', cost: 80, needs: ['t-deep-8'],
    desc: '星门建造成本再 -10%（叠加）。「门环每扩大一米，宇宙就近一寸。」',
    hint: '💡 人类议会的前置科技，外交流也要路过。',
    fx: { stargateCostMul: 0.9 },
  },
  't-deep-16': {
    name: '跨维度锚定', icon: '⚓', branch: 'deep', cost: 120, needs: ['t-deep-12'],
    desc: '星门建造成本 -25%（叠加）。「把门钉在时空上，它就不会跑了。」',
    hint: '💡 锚定之后，星门成本腰斩在望。',
    fx: { stargateCostMul: 0.75 },
  },
  't-deep-20': {
    name: '星门创世', icon: '🌠', branch: 'deep', cost: 180, needs: ['t-deep-16', 't-deep-19'],
    desc: '星门建造成本 -20%（叠加，叠满 0.4），解锁星门建造。「以星辰之名，开门。」',
    hint: '💡 解锁星门建造！需要遗迹线也走到头。',
    fx: { stargateCostMul: 0.8 },
  },
});

// 科技展示顺序：深空系排在最后（4 列 × 5 层，按列展开）
if (typeof TECH_ORDER !== 'undefined' && Array.isArray(TECH_ORDER)) {
  TECH_ORDER.push(
    't-deep-1', 't-deep-5', 't-deep-9', 't-deep-13', 't-deep-17',
    't-deep-2', 't-deep-6', 't-deep-10', 't-deep-14', 't-deep-18',
    't-deep-3', 't-deep-7', 't-deep-11', 't-deep-15', 't-deep-19',
    't-deep-4', 't-deep-8', 't-deep-12', 't-deep-16', 't-deep-20',
  );
}

// countByBranch 兼容任意分支（v1.3 已打过补丁；此处防御性再确认一次，
// 防止加载顺序变化导致 deep 分支被漏计）
if (typeof TechTree !== 'undefined' && TechTree.prototype && typeof TechTree.prototype.countByBranch === 'function') {
  const _src = TechTree.prototype.countByBranch.toString();
  if (_src.indexOf('c[b] = (c[b] || 0) + 1') === -1 && _src.indexOf("(c[b]||0)+1") === -1) {
    TechTree.prototype.countByBranch = function () {
      const c = {};
      for (const id of this.unlocked) {
        const def = (typeof TECH_DEFS !== 'undefined') ? TECH_DEFS[id] : null;
        const b = def && def.branch;
        if (b) c[b] = (c[b] || 0) + 1;
      }
      return c;
    };
  }
}

// ==================== 三、成就 +30 ====================
// 设计总纲：30 项 = 轨道 10（天的故事）+ 深空 10（远的故事）+
//   奇观 5（大的故事）+ 综合 5（全的故事）。
// 字段：{id, name, icon, desc, tip, hint, check} ——
//   tip 是解锁时的 toast 文案（感性），hint 是解锁指引（理性），
//   AchievementManager.unlock 用 name/desc 拼 toast，tip/hint 供成就面板展示。
// 所有 check 均为防御式：game.orbital / game.deepSpace 可能不存在，
// 对应成就会在轨道/深空系统上线后自动可解锁（此前恒为 false，不报错）。
// 命名空间：id 统一 orb-/deep-/wonder-/mix- 前缀，与 v1.3 的 dip-/mil-/pol- 体系衔接。
if (typeof ACHIEVEMENT_DEFS !== 'undefined') ACHIEVEMENT_DEFS.push(
  // ---- 🛰️ 轨道 10 项 ----
  // 设计：轨道成就按「部署→填满→玩出花→奇观」四段排布——
  //   orb-first（首个模块）→ orb-12（12 槽全满）是数量线；
  //   orb-sail5 / orb-shipyard / orb-trade / orb-defense / orb-ring2 是玩法线
  //   （帆/船坞/贸易/防御/第二环各一种）；
  //   orb-dock（星门坞）是胜利前置；orb-dyson / orb-engine 复用奇观计数，
  //   与奇观分组的 wonder-dyson2 / wonder-engine2 同条件——分组不同、叙事不同，
  //   玩家一次建造可同时点亮两项，这是刻意的「双重奖励」。
  { id: 'orb-first', name: '天外来客', icon: '🛰️', desc: '发射并部署第一个轨道模块',
    tip: '🛰️ 首个轨道模块：星港的疆域，从此有了「天上」这一层。',
    hint: '💡 在轨道面板部署任意一个模块即可。',
    check: (g) => P14O.slotsFilled(g) >= 1 || (P14U.st(g).orbitalModules || 0) >= 1 },
  { id: 'orb-12', name: '十二星宫', icon: '🌌', desc: '轨道槽位 12 槽全满',
    tip: '🌌 12 槽全满：抬头看，天上那一圈全是你的。',
    hint: '💡 把 12 个轨道槽位全部填满。',
    check: (g) => P14O.slotsFilled(g) >= 12 },
  { id: 'orb-sail5', name: '帆影连天', icon: '⛵', desc: '部署 5 面轨道太阳能帆',
    tip: '⛵ 第 5 面太阳能帆：戴森云的前置作业，完成。',
    hint: '💡 部署 5 面太阳能帆——也是戴森云的前置。',
    check: (g) => P14O.countType(g, 'solar_sail') >= 5 || P14U.count(g, 'solar_sail') >= 5 },
  { id: 'orb-shipyard', name: '天船开工', icon: '🚢', desc: '轨道船坞建造第一艘飞船',
    tip: '🚢 船坞首船下水：在天上造船，听起来就很贵。',
    hint: '💡 轨道船坞开工，造出第一艘飞船。',
    check: (g) => (P14U.st(g).orbitalShipsBuilt || 0) >= 1 || P14O.countType(g, 'ship') >= 1 },
  { id: 'orb-trade', name: '星际商路', icon: '💱', desc: '轨道贸易港完成第一单贸易',
    tip: '💱 贸易港首单：地月之间的快递，正式开张。',
    hint: '💡 轨道贸易港完成第一单贸易。',
    check: (g) => (P14U.st(g).orbitalTrades || 0) >= 1 },
  { id: 'orb-defense', name: '天网开火', icon: '🔫', desc: '轨道防御平台首次开火',
    tip: '🔫 防御平台开火：从今天起，陨石也要看黄历。',
    hint: '💡 让轨道防御平台开一次火。',
    check: (g) => (P14U.st(g).orbitalDefenseFired || 0) >= 1 },
  { id: 'orb-ring2', name: '双环临空', icon: '🪐', desc: '建成第二条轨道环',
    tip: '🪐 第二条轨道环：火星开始有了「光环」。',
    hint: '💡 建成第二条轨道环。',
    check: (g) => P14O.countType(g, 'ring') >= 2 || (P14U.st(g).orbitalRings || 0) >= 2 },
  { id: 'orb-dock', name: '星门地基', icon: '🏗️', desc: '建成星门坞',
    tip: '🏗️ 星门坞落成：门还没影，地基先打好——这叫格局。',
    hint: '💡 建成星门坞——星门的前置地基。',
    check: (g) => P14O.has(g, 'stargate_dock') },
  { id: 'orb-dyson', name: '饲养恒星', icon: '☀️', desc: '建成戴森云',
    tip: '☀️ 戴森云点亮：从今天起，停电这个词从星港字典里删除。',
    hint: '💡 建成戴森云奇观。',
    check: (g) => P14U.count(g, 'dyson_swarm') >= 1 },
  { id: 'orb-engine', name: '行星改造者', icon: '🌍', desc: '建成行星引擎',
    tip: '🌍 行星引擎点火：火星，从此是你的打工仔。',
    hint: '💡 建成行星引擎奇观。',
    check: (g) => P14U.count(g, 'planet_engine') >= 1 },

  // ---- 🌠 深空 10 项 ----
  // 设计：深空成就按「距离」排布——首航 → 小行星带 → 火卫一 → 柯伊伯带，
  //   越远越难；遗迹 1→3 是收集线；舰队 10 船是规模线；
  //   异常信号 / 漩涡是事件线（看脸）；深空 100 次是耐力线。
  //   全部 check 走 P14D 多重回退：deepSpace 系统上线前恒 false，
  //   上线后历史 stats 也能回溯（stats.deepLaunches 等），老存档不亏。
  { id: 'deep-first', name: '深空首航', icon: '🚀', desc: '发射第一艘深空探测器',
    tip: '🌠 首次深空发射：火星再见，星辰大海你好。',
    hint: '💡 发射第一艘深空探测器。',
    check: (g) => P14D.probes(g) >= 1 },
  { id: 'deep-belt', name: '小行星猎人', icon: '⛏️', desc: '探测器抵达小行星带',
    tip: '⛏️ 抵达小行星带：天上掉下来的，都是矿。',
    hint: '💡 派探测器前往小行星带。',
    check: (g) => P14D.visited(g, 'belt') },
  { id: 'deep-phobos', name: '火卫一登陆', icon: '🌙', desc: '登陆火卫一',
    tip: '🌙 火卫一登陆：家门口的月亮，也值得一去。',
    hint: '💡 登陆火卫一，家门口的月亮。',
    check: (g) => P14D.visited(g, 'phobos') },
  { id: 'deep-kuiper', name: '边疆', icon: '❄️', desc: '探测器抵达柯伊伯带',
    tip: '❄️ 抵达柯伊伯带：太阳系的边缘，插上了你的旗。',
    hint: '💡 前往柯伊伯带，建议先点离子推进阵列。',
    check: (g) => P14D.visited(g, 'kuiper') },
  { id: 'deep-ruin1', name: '远古回响', icon: '🏺', desc: '发现第一处先驱者遗迹',
    tip: '🏺 第一处遗迹：有人比我们先到——而且先走了很久。',
    hint: '💡 探索并发现第一处先驱者遗迹。',
    check: (g) => P14D.ruins(g) >= 1 },
  { id: 'deep-ruin3', name: '遗产继承人', icon: '👽', desc: '发现全部 3 处先驱者遗迹',
    tip: '👽 遗迹全收集：先驱者的遗产，现在姓「星港」。',
    hint: '💡 找齐全部 3 处先驱者遗迹。',
    check: (g) => P14D.ruins(g) >= 3 },
  { id: 'deep-fleet10', name: '星际舰队', icon: '🛸', desc: '深空船队达到 10 艘船',
    tip: '🛸 第 10 艘船入列：这已经不是船队了，这是舰队。',
    hint: '💡 把深空船队扩充到 10 艘船。',
    check: (g) => P14D.fleet(g) >= 10 },
  { id: 'deep-signal', name: '异常信号', icon: '📡', desc: '接收到深空异常信号',
    tip: '📡 异常信号：宇宙深处，有人在敲门。',
    hint: '💡 留意深空中的异常信号事件。',
    check: (g) => P14D.anomaly(g) },
  { id: 'deep-vortex', name: '漩涡', icon: '🌀', desc: '探测器进入引力漩涡并返航',
    tip: '🌀 穿越漩涡：进去的时候是探测器，出来的时候是传奇。',
    hint: '💡 让探测器穿越引力漩涡并返航。',
    check: (g) => P14D.vortex(g) },
  { id: 'deep-100', name: '深空百航', icon: '💯', desc: '累计完成 100 次深空任务',
    tip: '💯 第 100 次深空任务：星图上的每一个点，都是你的脚印。',
    hint: '💡 累计完成 100 次深空任务。',
    check: (g) => P14D.probes(g) >= 100 || (P14U.st(g).deepMissions || 0) >= 100 },

  // ---- 🏛️ 奇观 5 项 ----
  // 设计：一奇观一项，无水分。wonder-gate 额外认 city.gateWon，
  //   防止「星门建成就胜利弹窗、建筑因胜利结算被移除」的极端情况下成就漏发。
  { id: 'wonder-gate', name: '开门', icon: '🌀', desc: '建成星门（第三胜利）',
    tip: '🌀 星门建成：第三胜利！人类文明，正式成为星际物种。',
    hint: '💡 建成星门：需星门坞 + 累计消耗科技 200 + 人口 300。',
    check: (g) => P14U.count(g, 'stargate') >= 1 || !!(g && g.city && g.city.gateWon) },
  { id: 'wonder-dyson2', name: '人造太阳', icon: '☀️', desc: '建成戴森云',
    tip: '☀️ 戴森云建成：你拥有了一颗恒星的电费账单——是收入那一栏。',
    hint: '💡 建成戴森云：先备好 5 面太阳能帆。',
    check: (g) => P14U.count(g, 'dyson_swarm') >= 1 },
  { id: 'wonder-engine2', name: '改天换地', icon: '🌍', desc: '建成行星引擎',
    tip: '🌍 行星引擎建成：改造一颗行星，听起来像神话，做起来像工程。',
    hint: '💡 建成行星引擎：准备好 200 铀。',
    check: (g) => P14U.count(g, 'planet_engine') >= 1 },
  { id: 'wonder-hall', name: '万国来朝', icon: '🏛️', desc: '建成人类议会',
    tip: '🏛️ 人类议会落成：从今天起，吵架也有了专门的场地。',
    hint: '💡 建成人类议会：和平路线的毕业。',
    check: (g) => P14U.count(g, 'hall_of_humanity') >= 1 },
  { id: 'wonder-fort', name: '不落要塞', icon: '⚔️', desc: '建成战争堡垒',
    tip: '⚔️ 战争堡垒落成：这座要塞的名字，叫「别来惹我」。',
    hint: '💡 建成战争堡垒：需要走完战争科技线。',
    check: (g) => P14U.count(g, 'war_fortress') >= 1 },

  // ---- 🔗 综合 5 项 ----
  // 设计：综合成就考「跨系统」，每一项都至少横跨两个系统——
  //   mix-triple-win（三种胜利）、mix-double-empire（地面+轨道）、
  //   mix-deep-scholar（科技全满）、mix-wonders-all（奇观收藏）、
  //   mix-cosmos（五奇观+科技全满，v1.4 终极毕业）。
  //   注意 mix-deep-scholar / mix-cosmos 的 20 个 id 是显式列表，
  //   与 TECH_ORDER 的深空段保持一致，改科技 id 时两处同步。
  { id: 'mix-triple-win', name: '三冠王', icon: '👑', desc: '同一局内达成全部三种胜利（发射台+方舟+星门）',
    tip: '👑 三种胜利集齐：发射台、方舟、星门——你玩通了三种人生。',
    hint: '💡 同一局内集齐发射台、方舟、星门三种胜利。',
    check: (g) => !!(g && g.city && g.city.won && g.city.arkWon && g.city.gateWon) },
  { id: 'mix-double-empire', name: '双层帝国', icon: '🏰', desc: '地面建筑≥100 且轨道槽位 12 槽全满',
    tip: '🏰 双层帝国：地上百城，天上十二宫——这才叫帝国。',
    hint: '💡 地面建筑≥100 且轨道 12 槽全满。',
    check: (g) => P14U.buildingsTotal(g) >= 100 && P14O.slotsFilled(g) >= 12 },
  { id: 'mix-deep-scholar', name: '深空学者', icon: '🎓', desc: '解锁全部 20 项深空科技',
    tip: '🎓 深空科技全解锁：从轨道船坞到星门创世，你读完了整本天书。',
    hint: '💡 点满全部 20 项深空科技。',
    check: (g) => {
      try {
        if (!g || !g.tech || typeof g.tech.has !== 'function') return false;
        const ids = ['t-deep-1','t-deep-5','t-deep-9','t-deep-13','t-deep-17',
                     't-deep-2','t-deep-6','t-deep-10','t-deep-14','t-deep-18',
                     't-deep-3','t-deep-7','t-deep-11','t-deep-15','t-deep-19',
                     't-deep-4','t-deep-8','t-deep-12','t-deep-16','t-deep-20'];
        return ids.every((id) => g.tech.has(id));
      } catch (e) { return false; }
    } },
  { id: 'mix-wonders-all', name: '奇观收藏家', icon: '🌟', desc: '建成全部 5 种奇观建筑',
    tip: '🌟 五奇观集齐：星门、戴森云、行星引擎、议会、堡垒——你的城市是传奇。',
    hint: '💡 建成全部 5 种奇观建筑。',
    check: (g) => ['stargate', 'dyson_swarm', 'planet_engine', 'hall_of_humanity', 'war_fortress']
      .every((id) => P14U.count(g, id) >= 1) },
  { id: 'mix-cosmos', name: '宇宙建筑师', icon: '🌠', desc: '五奇观集齐且深空科技全解锁',
    tip: '🌠 宇宙建筑师：v1.4 的终极毕业——地上地下天上深空，全是你的作品。',
    hint: '💡 五奇观集齐 + 深空科技全满，v1.4 终极毕业。',
    check: (g) => {
      try {
        const wonders = ['stargate', 'dyson_swarm', 'planet_engine', 'hall_of_humanity', 'war_fortress']
          .every((id) => P14U.count(g, id) >= 1);
        if (!wonders || !g || !g.tech || typeof g.tech.has !== 'function') return false;
        const ids = ['t-deep-1','t-deep-5','t-deep-9','t-deep-13','t-deep-17',
                     't-deep-2','t-deep-6','t-deep-10','t-deep-14','t-deep-18',
                     't-deep-3','t-deep-7','t-deep-11','t-deep-15','t-deep-19',
                     't-deep-4','t-deep-8','t-deep-12','t-deep-16','t-deep-20'];
        return ids.every((id) => g.tech.has(id));
      } catch (e) { return false; }
    } },
);

// ==================== 四、轨道灾难 ×3 ====================
// 设计总纲：灾难只碰 game.orbital，地面建筑完全不受影响——
//   「天上刮风，地上不冷」。三灾难分工：
//   碎片云（入门，随机掉血）→ 太阳风暴（能源，帆板停工）→ 小行星撞击（后期，结构重创），
//   首发时间 10/14/18 分钟，与 v1.3 地面三灾难（12/15/20 分钟）交错，
//   保证中后期每 3~5 分钟有一件事发生。
// 防御三原则：① orbital 不存在时 update 直接返回；② 没模块/没帆板时不触发、
//   推迟再试（不空放预警）；③ 只读写 type/hp/maxHp/offline/offlineUntil 五个字段，
//   不假设 orbital 有任何其他 API，删模块/维修永远是 orbital 系统的权力。
// 数值平衡说明（设计意图）：
//   碎片云：10 分钟后首发，间隔 8~14 分钟——轨道系统上线初期的「入门灾难」；
//     每次随机 4 个模块各掉 20~40 hp（模块默认满血 100），单次不会致命，
//     但连续两次不修就会开始掉模块，逼玩家点出维修/冗余。
//   太阳风暴：14 分钟后首发，间隔 12~18 分钟——针对太阳能帆的「能源灾难」；
//     120 秒停工 ≈ 戴森云前置的帆板体系会断电 2 分钟，预警 25 秒足够切备用电源；
//     行星引擎的 disasterMul -50% 可把停工压到 60 秒（减伤同样作用于时长）。
//   小行星撞击：18 分钟后首发，间隔 15~22 分钟——后期灾难；
//     随机 1 个模块直接掉 50% hp，多次撞击才会摧毁（100→50→25→…），
//     与火星地震（v1.3）同口径，给玩家「修还是拆」的决策空间；预警 30 秒。
// 模块形状约定（orbital 系统尚未冻结，全部防御性读写）：
//   game.orbital.modules —— 数组（或对象/ slots，见 P14O.modules 回退）；
//   模块字段：type/kind/id（类型）、hp/maxHp（血量，默认 100）、
//             offline（是否停工）、offlineUntil（停工到何时）。
//   本包只读写这些字段，不假设 orbital 有任何其他 API。
// 碎片云播报 flavor（_notify 可轮换使用，避免每次文案重复）
const DEBRIS_FLAVOR=[
  '🛰️ 碎片云掠过！轨道上像下了一场铁雨。',
  '🛰️ 警报：碎片云穿过轨道层，几个模块被「擦」了一下。',
];
const DEBRIS_CLOUD = {
  FIRST_AT: 10 * 60 * 1000,
  INTERVAL_MIN: 8 * 60 * 1000,
  INTERVAL_MAX: 14 * 60 * 1000,
  WARN_MS: 20 * 1000,
  TARGETS: 4,            // 随机 4 个模块
  DMG_MIN: 20, DMG_MAX: 40,
};
// 太阳风暴播报 flavor
const STORM_FLAVOR=[
  '🌪️ 太阳打了个喷嚏，帆板们集体「装死」。',
  '🌪️ 日冕物质抛射抵达！帆板过载保护启动，暂时下线。',
];
const SOLAR_STORM = {
  FIRST_AT: 14 * 60 * 1000,
  INTERVAL_MIN: 12 * 60 * 1000,
  INTERVAL_MAX: 18 * 60 * 1000,
  WARN_MS: 25 * 1000,
  DURATION: 120 * 1000,  // 帆板停工 120 秒
};
// 小行星撞击播报 flavor
const IMPACT_FLAVOR=[
  '☄️ 空间站晃了一下——有颗不速之客「亲」了上来。',
  '☄️ 撞击！结构完整性下降，维修队已经出舱了。',
];
const ASTEROID_IMPACT = {
  FIRST_AT: 18 * 60 * 1000,
  INTERVAL_MIN: 15 * 60 * 1000,
  INTERVAL_MAX: 22 * 60 * 1000,
  WARN_MS: 30 * 1000,
};

const PACK14_KEY = 'starport-orbital-hazards';

class OrbitalHazards {
  constructor() {
    const now = Date.now();
    // 🛰️ 碎片云：null / {warnUntil}
    this.debris = null;
    this.nextDebris = now + DEBRIS_CLOUD.FIRST_AT;
    // 🌪️ 太阳风暴：null / {warnUntil, until}
    this.storm = null;
    this.nextStorm = now + SOLAR_STORM.FIRST_AT;
    // ☄️ 小行星撞击：null / {warnUntil}
    this.impact = null;
    this.nextImpact = now + ASTEROID_IMPACT.FIRST_AT;
  }

  // ---- 统一通知：toast 直发 + 复用 game.disaster.onEvent 通道（均判存在） ----
  _notify(game, type, msg, data) {
    if (game && typeof game.toast === 'function') {
      try { game.toast(msg); } catch (e) {}
    }
    if (game && game.disaster && typeof game.disaster.onEvent === 'function') {
      try { game.disaster.onEvent(type, data || {}); } catch (e) {}
    }
  }

  // ---- 统计计数（防御） ----
  _bump(game, key) {
    try {
      if (game && game.stats) game.stats[key] = (game.stats[key] || 0) + 1;
    } catch (e) {}
  }

  // ---- 行星引擎减伤：disasterMul（默认 0），有引擎则伤害/时长 ×(1-减伤) ----
  _mitigate(game) {
    try {
      const bs = (game.builder && game.builder.buildings) || [];
      let mul = 0;
      for (const b of bs) {
        if (b.damaged) continue;
        const lv = (typeof BUILDINGS !== 'undefined' && BUILDINGS.planet_engine)
          ? (BUILDINGS.planet_engine.levels[b.level] || {}) : {};
        if (b.id === 'planet_engine') mul += (lv.disasterMul || 0);
      }
      return Math.min(0.9, mul);  // 上限 90%，永不免疫
    } catch (e) { return 0; }
  }

  // ---- 模块血量初始化（防御：hp/maxHp 不存在则补 100） ----
  _ensureHp(m) {
    if (m.maxHp == null) m.maxHp = 100;
    if (m.hp == null) m.hp = m.maxHp;
  }

  // ---- 主调度：game loop 每帧调用 update(now, game) ----
  // 轨道系统不存在时直接返回——灾难随系统上线自动生效。
  update(now, game) {
    if (!game || !P14U.orb(game)) return;
    try { this._updateDebris(now, game); } catch (e) {}
    try { this._updateStorm(now, game); } catch (e) {}
    try { this._updateImpact(now, game); } catch (e) {}
  }

  // ================= 🛰️ 空间碎片云：随机模块掉血 =================
  // 渲染建议（orbital 系统实现时）：预警时在受影响轨道层画黄色虚线圈，
  //   掠过时给受击模块加 1 秒抖动 + 火花粒子；离线模块图标变灰。
  // 联动：行星引擎的 disasterMul 按比例减伤（_mitigate，上限 90%）；
  //   与 v1.3 小行星带（地面版）同名不同系统，互不干扰。
  _updateDebris(now, game) {
    if (!this.debris && now >= this.nextDebris) {
      const mods = P14O.modules(game);
      if (!mods.length) {  // 没模块就不触发，推迟 1 分钟再试
        this.nextDebris = now + 60 * 1000;
        return;
      }
      this.debris = { warnUntil: now + DEBRIS_CLOUD.WARN_MS };
      this._notify(game, 'debris14-warn',
        `🛰️ 碎片云预警！${Math.round(DEBRIS_CLOUD.WARN_MS / 1000)}秒后碎片云掠过轨道`,
        { warnMs: DEBRIS_CLOUD.WARN_MS });
    }
    const d = this.debris;
    if (!d || now < d.warnUntil) return;
    this.debris = null;
    this.nextDebris = now + DEBRIS_CLOUD.INTERVAL_MIN +
      Math.random() * (DEBRIS_CLOUD.INTERVAL_MAX - DEBRIS_CLOUD.INTERVAL_MIN);
    const mods = P14O.modules(game);
    // 洗牌取前 N 个
    const pool = mods.slice();
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const mit = this._mitigate(game);
    let hit = 0, destroyed = 0;
    for (const m of pool.slice(0, DEBRIS_CLOUD.TARGETS)) {
      this._ensureHp(m);
      const dmg = Math.round((DEBRIS_CLOUD.DMG_MIN +
        Math.random() * (DEBRIS_CLOUD.DMG_MAX - DEBRIS_CLOUD.DMG_MIN)) * (1 - mit));
      m.hp = Math.max(0, m.hp - dmg);
      hit++;
      if (m.hp <= 0 && !m.offline) { m.offline = true; destroyed++; }  // 血量耗尽 → 模块离线
    }
    this._bump(game, 'debrisClouds14');
    this._notify(game, 'debris14-hit',
      `🛰️ 碎片云掠过！${hit} 个轨道模块受损${mit > 0 ? '（行星引擎减伤生效）' : ''}${destroyed ? `，${destroyed} 个模块离线` : ''}`,
      { hit, destroyed });
  }

  // ================= 🌪️ 太阳风暴（轨道版）：帆板过载停工 =================
  // 渲染建议：风暴期间全屏加淡橙色辉光，帆板图标显示 ⚡ 过载标记；
  //   注意与 v1.3 辐射尘埃（地面 🌪️）区分：本灾难只碰 orbital 模块，
  //   地面建筑完全不受影响——「天上刮风，地上不冷」。
  // 联动：行星引擎减伤同时压缩停工时长（120 秒 → 最低 12 秒），
  //   这是 disasterMul 作用于「时长」而非仅「伤害」的唯一案例。
  _updateStorm(now, game) {
    if (!this.storm && now >= this.nextStorm) {
      const sails = P14O.modules(game).filter((m) => P14O.typeOf(m) === 'solar_sail');
      if (!sails.length) {  // 没帆板就不触发，推迟 2 分钟再试
        this.nextStorm = now + 2 * 60 * 1000;
        return;
      }
      this.storm = { warnUntil: now + SOLAR_STORM.WARN_MS, until: 0, started: false };
      this._notify(game, 'storm14-warn',
        `🌪️ 太阳风暴预警！${Math.round(SOLAR_STORM.WARN_MS / 1000)}秒后风暴抵达，太阳能帆将过载停工`,
        { warnMs: SOLAR_STORM.WARN_MS });
    }
    const s = this.storm;
    if (!s) return;
    // 预警转生效：所有帆板离线
    if (!s.started && now >= s.warnUntil) {
      s.started = true;
      const mit = this._mitigate(game);
      const dur = Math.round(SOLAR_STORM.DURATION * (1 - mit));  // 引擎减伤同样压时长
      s.until = now + dur;
      let n = 0;
      for (const m of P14O.modules(game)) {
        if (P14O.typeOf(m) === 'solar_sail') {
          m.offline = true;           // 帆板过载停工
          m.offlineUntil = s.until;
          n++;
        }
      }
      this._bump(game, 'solarStorms14');
      this._notify(game, 'storm14-start',
        `🌪️ 太阳风暴！${n} 面太阳能帆过载停工 ${Math.round(dur / 1000)} 秒${mit > 0 ? '（行星引擎减伤生效）' : ''}`,
        { count: n, durationMs: dur });
    }
    // 结束：清除离线标记（期间被碎片云打离线的模块 offline 无 offlineUntil，不碰）
    if (s.started && now >= s.until) {
      for (const m of P14O.modules(game)) {
        if (m.offline && m.offlineUntil === s.until) {
          m.offline = false;
          m.offlineUntil = 0;
        }
      }
      this.storm = null;
      this.nextStorm = now + SOLAR_STORM.INTERVAL_MIN +
        Math.random() * (SOLAR_STORM.INTERVAL_MAX - SOLAR_STORM.INTERVAL_MIN);
      this._notify(game, 'storm14-end', '🌤️ 太阳风暴过去，帆板恢复工作', {});
    }
  }

  // ================= ☄️ 小行星撞击：空间站结构损伤 =================
  // 渲染建议：预警时在目标模块上画红色准星（30 秒），撞击瞬间白闪 + 震屏；
  //   与 v1.3 火星地震（随机 3 栋掉 50% hp）同口径：都是「减半再减半」，
  //   玩家对「几次会塌」有统一的心智模型。
  // 联动：被撞掉到 0 hp 的模块 offline=true，需维修（维修逻辑由 orbital 系统提供，
  //   本包只打标记不删除模块——删模块是 orbital 系统的权力）。
  _updateImpact(now, game) {
    if (!this.impact && now >= this.nextImpact) {
      const mods = P14O.modules(game);
      if (!mods.length) {
        this.nextImpact = now + 60 * 1000;
        return;
      }
      this.impact = { warnUntil: now + ASTEROID_IMPACT.WARN_MS };
      this._notify(game, 'impact14-warn',
        `☄️ 撞击预警！${Math.round(ASTEROID_IMPACT.WARN_MS / 1000)}秒后小行星撞击空间站`,
        { warnMs: ASTEROID_IMPACT.WARN_MS });
    }
    const im = this.impact;
    if (!im || now < im.warnUntil) return;
    this.impact = null;
    this.nextImpact = now + ASTEROID_IMPACT.INTERVAL_MIN +
      Math.random() * (ASTEROID_IMPACT.INTERVAL_MAX - ASTEROID_IMPACT.INTERVAL_MIN);
    const mods = P14O.modules(game);
    const m = mods[Math.floor(Math.random() * mods.length)];
    this._ensureHp(m);
    const mit = this._mitigate(game);
    // 掉 50% hp（减伤后按比例少扣）
    const loss = Math.round(m.hp * 0.5 * (1 - mit));
    m.hp = Math.max(0, m.hp - loss);
    let destroyed = false;
    if (m.hp <= 0 && !m.offline) { m.offline = true; destroyed = true; }
    this._bump(game, 'asteroidImpacts14');
    const label = P14O.typeOf(m) || '轨道模块';
    this._notify(game, 'impact14-hit',
      `☄️ 小行星撞击空间站！「${label}」结构损伤 -${loss} hp${mit > 0 ? '（行星引擎减伤生效）' : ''}${destroyed ? '，模块离线' : ''}`,
      { type: label, loss, destroyed });
  }

  // ---- 存档 / 读档：只持久化下次触发时间（进行中的灾难读档后清空） ----
  save() {
    const now = Date.now();
    return {
      nextDebrisIn: Math.max(0, this.nextDebris - now),
      nextStormIn: Math.max(0, this.nextStorm - now),
      nextImpactIn: Math.max(0, this.nextImpact - now),
    };
  }
  load(data, now) {
    const base = now || Date.now();
    if (!data) return;
    this.nextDebris = base + (data.nextDebrisIn != null ? data.nextDebrisIn : DEBRIS_CLOUD.FIRST_AT);
    this.nextStorm = base + (data.nextStormIn != null ? data.nextStormIn : SOLAR_STORM.FIRST_AT);
    this.nextImpact = base + (data.nextImpactIn != null ? data.nextImpactIn : ASTEROID_IMPACT.FIRST_AT);
    this.debris = null;
    this.storm = null;
    this.impact = null;
  }

  // ---- 可选接入：OrbitalHazards.attach(game) —— 在 game.js 加载后调用一次 ----
  // 行为：每 tick 末尾调用 hazards.update；save/load 时合并本包计时器；幂等。
  // 调参指南（灾难太难/太简单时，只改本文件顶部的三个常量，不用碰逻辑）：
  //   太难 → 把 INTERVAL_MIN/MAX 拉大（如碎片云 8~14 → 12~20 分钟），
  //           或把 DMG_MIN/DMG_MAX 调小（如 20~40 → 15~30）；
  //   太简单 → 反向操作；或把 TARGETS 4 → 6，让碎片云一次打更多模块；
  //   想让新手期更友好 → 把 FIRST_AT 统一往后推 5 分钟；
  //   想做「灾难周」活动 → 临时把三个 INTERVAL 都改成 3~5 分钟，一周后改回。
  // 注意：OrbitalHazards 与 DisasterPack13（v1.3）各自独立挂载 tick，
  //   两个 attach 都调用时互不覆盖（不同的 _wrapped 标记）。
  static attach(game) {
    if (!game || game._hazards14) return (game && game._hazards14) || null;
    const hz = new OrbitalHazards();
    game._hazards14 = hz;
    if (typeof game.tick === 'function' && !game._hazards14TickWrapped) {
      game._hazards14TickWrapped = true;
      const origTick = game.tick.bind(game);
      game.tick = function (now, dt) {
        origTick(now, dt);
        try { hz.update(now, this); } catch (e) {}
      };
    }
    if (typeof game.save === 'function' && !game._hazards14SaveWrapped) {
      game._hazards14SaveWrapped = true;
      const origSave = game.save.bind(game);
      game.save = function () {
        origSave();
        try { localStorage.setItem(PACK14_KEY, JSON.stringify(hz.save())); } catch (e) {}
      };
      const origLoad = game.load.bind(game);
      game.load = function () {
        const ok = origLoad();
        try {
          const raw = localStorage.getItem(PACK14_KEY);
          if (raw) hz.load(JSON.parse(raw), Date.now());
        } catch (e) {}
        return ok;
      };
    }
    return hz;
  }
}

// ==================== 五、星门胜利补丁（第三胜利条件） ====================
// City.prototype 防御性扩展：game.js 主循环可直接调用
//   game.city.checkStargateVictory(game.builder)
// 或用 StargateVictory.attach(game) 自动接入 tick。game.js 无需改动。
if (typeof City !== 'undefined' && City.prototype) {
  if (typeof City.prototype.checkStargateVictory !== 'function') {
    City.prototype.checkStargateVictory = function (builder) {
      if (this.gateWon) return false;
      try {
        const bs = (builder && builder.buildings) || [];
        const gate = bs.find((b) => b && b.id === 'stargate' && !b.damaged);
        if (gate) {
          this.gateWon = true;
          this.gateWinTime = Date.now();
          return true;
        }
      } catch (e) {}
      return false;
    };
  }
  // anyVictory 纳入星门（防御：原实现存在才包装）
  if (typeof City.prototype.anyVictory === 'function' && !City.prototype._anyVictory14Wrapped) {
    City.prototype._anyVictory14Wrapped = true;
    const _origAny = City.prototype.anyVictory;
    City.prototype.anyVictory = function () {
      try { return !!(_origAny.call(this) || this.gateWon); }
      catch (e) { return !!this.gateWon; }
    };
  }
}

// StargateVictory.attach(game)：tick 末尾检查星门胜利并弹胜利面板（幂等）
// game.js 手动接入示例（不调 attach 时，把下面这段放进主循环的胜利检查区，
// 与 checkVictory / checkArkVictory 并列）：
//   // v1.4：星门胜利（第三胜利条件）
//   if (this.city.checkStargateVictory(this.builder) && !this._gateWinShown) {
//     this._gateWinShown = true;
//     this.showVictory('stargate');
//   }
// showVictory('stargate') 分支示例（game.js showVictory 内，参照 'ark' 分支）：
//   if (type === 'stargate') {
//     if (title) title.textContent = STARGATE_VICTORY_TEXT.title;
//     if (desc) desc.textContent = STARGATE_VICTORY_TEXT.desc;
//   }
// 注意：checkStargateVictory 只认「未损坏的星门」（b.damaged 跳过），
//   星门在胜利前被小行星/袭击打坏 → 胜利不触发，修好后下一 tick 触发。
//   这是刻意的：奇观胜利也需要「守住」。
const StargateVictory = {
  attach(game) {
    if (!game || game._stargateV14) return (game && game._stargateV14) || null;
    game._stargateV14 = true;
    if (typeof game.tick === 'function' && !game._stargateV14TickWrapped) {
      game._stargateV14TickWrapped = true;
      const origTick = game.tick.bind(game);
      game.tick = function (now, dt) {
        origTick(now, dt);
        try {
          if (game.city && typeof game.city.checkStargateVictory === 'function' &&
              game.city.checkStargateVictory(game.builder) &&
              typeof game.showVictory === 'function' && !game._gateWinShown) {
            game._gateWinShown = true;
            game.showVictory('stargate');
          }
        } catch (e) {}
      };
    }
    return true;
  },
};

if (typeof module !== 'undefined') {
  module.exports = { OrbitalHazards, StargateVictory, DEBRIS_CLOUD, SOLAR_STORM, ASTEROID_IMPACT, PACK14_KEY };
}

// ==================== 附录 A：v1.4 数值总表 ====================
// 奇观建造成本一览（均为 1 级，needPop / powerUse 见上文）：
//   星门       steel 2000 / tech 200 / rare 500 / he3 100  + 星门坞 + techSpent 200 + pop 300 + t-deep-20
//   戴森云     steel 1500 / tech 150 / rare 300           + 太阳能帆×5 + t-deep-9        → +1000 电力
//   行星引擎   steel 3000 / tech 250 / uranium 200        + t-deep-17                   → 产量+25% / 灾难-50%
//   人类议会   steel 800  / tech 120 / rare 200           + t-deep-12                   → 关系锁≥0 / 政策槽+2
//   战争堡垒   steel 1200 / tech 100 / uranium 100        + t-war-20                    → 防御+200 / 袭击间隔×2
// 设计意图：星门最贵（第三胜利必须是最难的一条路），行星引擎次之（双效果），
//   议会最便宜（辅助型奇观，卖的是可能性不是数值）。
//
// 深空科技 cost 曲线一览：
//   A 列 15 / 35 / 60 / 100 / 150     B 列 15 / 35 / 60 / 100 / 150
//   C 列 20 / 40 / 70 / 110 / 160     D 列 25 / 50 / 80 / 120 / 180
//   全点满共 1695 科技点 ≈ 方舟胜利所需科技点（100）的 17 倍——
//   深空线是「胜利之后」的游戏，定价对标终局。
//
// 轨道灾难时间轴一览（首发 / 间隔 / 预警）：
//   碎片云   10 分钟 / 8~14 分钟  / 20 秒   → 4 模块各掉 20~40 hp
//   太阳风暴 14 分钟 / 12~18 分钟 / 25 秒   → 帆板停工 120 秒
//   小行星撞击 18 分钟 / 15~22 分钟 / 30 秒 → 1 模块掉 50% hp
//   与 v1.3 地面灾难错峰：辐射尘埃 12 分钟 / 小行星带 15 分钟 / 火星地震 20 分钟，
//   两套灾难系统的时间轴交错，保证中后期「每 3~5 分钟有一件事发生」。

// ==================== 附录 B：成就 — 系统映射表 ====================
// 轨道 10（依赖 game.orbital；系统未实装前恒 false）：
//   orb-first / orb-12        → orbital.slotsFilled / modules 计数
//   orb-sail5                 → solar_sail 模块计数（也是戴森云前置）
//   orb-shipyard              → stats.orbitalShipsBuilt
//   orb-trade                 → stats.orbitalTrades
//   orb-defense               → stats.orbitalDefenseFired
//   orb-ring2                 → ring 模块计数 / stats.orbitalRings
//   orb-dock                  → stargate_dock（地面/轨道双通道）
//   orb-dyson / orb-engine    → 奇观建筑计数（与奇观 5 的 wonder-dyson2 / wonder-engine2 同条件，
//                                分属不同分组是刻意的：轨道分组讲「天上」，奇观分组讲「收藏」）
// 深空 10（依赖 game.deepSpace；未实装前恒 false）：
//   deep-first / deep-100     → deepSpace.launches（回退 stats.deepLaunches / deepMissions）
//   deep-belt / phobos / kuiper → deepSpace.visited（数组/对象/stats 回退三通道）
//   deep-ruin1 / ruin3        → deepSpace.ruinsFound
//   deep-fleet10              → deepSpace.fleetSize
//   deep-signal / vortex      → deepSpace.anomalySeen / vortexEntered
// 奇观 5：builder.count(id) ≥ 1，wonder-gate 额外认 city.gateWon
// 综合 5：mix-triple-win 认 city.won && city.arkWon && city.gateWon（需本文件 City 补丁）；
//   mix-double-empire 地面 100 + 轨道 12；mix-deep-scholar 20 深空科技全解锁；
//   mix-wonders-all 五奇观；mix-cosmos 五奇观 + 20 科技（终极毕业）

// ==================== 附录 C：接入清单（给集成者） ====================
// 1. index.html：在 content_v13.js 之后、game.js 之前加一行：
//      <script src="content_v14.js"></script>
//    （顺序要求：BUILDINGS/TECH_DEFS/TECH_BRANCHES/TECH_ORDER/ACHIEVEMENT_DEFS/
//     TechTree/City 已定义；game.js 之前加载可让 City 补丁先生效。）
// 2. game.js（可选，不改也能跑）：
//    - 主循环调用 game.city.checkStargateVictory(game.builder)，胜利时 showVictory('stargate')；
//      或一行接入：StargateVictory.attach(game)；OrbitalHazards.attach(game)
//    - showVictory 新增 'stargate' 分支文案：「🌀 星门开启！第一批殖民舰队穿越星门，
//      人类文明正式迈入星际时代。你可以继续自由建造。」
//    - build.js 建造前置：星门（星门坞/techSpent/pop 三重门）、戴森云（帆×5）
//      的 needBuilding / needOrbital_solar_sail / needTechSpent 检查；
//      奇观限建 1 座（winsGame 字段可作为唯一性标记）。
//    - resources.js / disaster.js：行星引擎 globalYieldMul / disasterMul 聚合（示例见上文）。
//    - military.js：战争堡垒 defenseScore / raidIntervalMul（示例见上文）。
//    - diplomacy.js / policy.js：议会 diplomacyFloor / policySlots（示例见上文）。
// 3. 轨道系统（未来）：game.orbital.modules 数组，模块字段 type/hp/maxHp/offline/offlineUntil；
//    深空系统（未来）：game.deepSpace.launches/fleetSize/ruinsFound/visited/anomalySeen/vortexEntered。
//    在这些系统上线前，本文件所有相关成就要恒 false、灾难自动跳过——
//    这是设计，不是 bug。

// ==================== 附录 D：v1.4 内容自检 ====================
// ContentV14SelfTest()：在控制台跑一遍，验证注册表完整性。
// 返回 {pass, fail, errors[]}；fail>0 说明集成出了问题。
// 用法：打开游戏页面控制台，输入 ContentV14SelfTest()
function ContentV14SelfTest() {
  const errors = [];
  const ok = (cond, msg) => { if (!cond) errors.push(msg); };
  try {
    // —— 奇观 5 种 ——
    const wonders = ['stargate', 'dyson_swarm', 'planet_engine', 'hall_of_humanity', 'war_fortress'];
    ok(typeof BUILDINGS !== 'undefined', 'BUILDINGS 未定义');
    for (const id of wonders) {
      const w = BUILDINGS[id];
      ok(!!w, '奇观缺失: ' + id);
      if (w) {
        ok(Array.isArray(w.levels) && w.levels.length === 2 && !!w.levels[1], id + ' 应为单级 (levels=[null, {...}])');
        ok(!!w.buildFlavor, id + ' 缺少 buildFlavor');
        ok(Array.isArray(w.lore) && w.lore.length === 3, id + ' lore 应为 3 条');
        const lv = w.levels[1] || {};
        ok(lv.cost && typeof lv.cost === 'object', id + ' 缺少 cost');
      }
    }
    ok((BUILDINGS.stargate.levels[1] || {}).winsGame === 'stargate', '星门缺少 winsGame 标记');
    // —— 深空科技 20 项 ——
    ok(typeof TECH_DEFS !== 'undefined', 'TECH_DEFS 未定义');
    const deepIds = Object.keys(TECH_DEFS).filter((k) => k.indexOf('t-deep-') === 0);
    ok(deepIds.length === 20, '深空科技应为 20 项，实际 ' + deepIds.length);
    const KNOWN_FX = ['orbitalCostMul', 'probeSpeedMul', 'fleetYieldMul', 'ruinBonusMul', 'stargateCostMul', 'stationPowerMul'];
    for (const id of deepIds) {
      const t = TECH_DEFS[id];
      ok(t.branch === 'deep', id + ' 分支应为 deep');
      ok(!!t.hint, id + ' 缺少 hint');
      for (const n of (t.needs || [])) ok(!!TECH_DEFS[n], id + ' 的前置 ' + n + ' 不存在');
      for (const k of Object.keys(t.fx || {})) ok(KNOWN_FX.indexOf(k) !== -1, id + ' 未知 fx 键: ' + k);
    }
    ok(TECH_BRANCHES.deep && TECH_BRANCHES.deep.icon === '🌠', 'TECH_BRANCHES.deep 缺失');
    ok(TECH_ORDER.filter((id) => id.indexOf('t-deep-') === 0).length === 20, 'TECH_ORDER 缺少深空科技');
    // —— 成就 30 项 ——
    ok(typeof ACHIEVEMENT_DEFS !== 'undefined', 'ACHIEVEMENT_DEFS 未定义');
    const v14ids = ['orb-first','orb-12','orb-sail5','orb-shipyard','orb-trade','orb-defense','orb-ring2','orb-dock','orb-dyson','orb-engine',
      'deep-first','deep-belt','deep-phobos','deep-kuiper','deep-ruin1','deep-ruin3','deep-fleet10','deep-signal','deep-vortex','deep-100',
      'wonder-gate','wonder-dyson2','wonder-engine2','wonder-hall','wonder-fort',
      'mix-triple-win','mix-double-empire','mix-deep-scholar','mix-wonders-all','mix-cosmos'];
    const found = {};
    for (const a of ACHIEVEMENT_DEFS) found[a.id] = a;
    for (const id of v14ids) {
      ok(!!found[id], '成就缺失: ' + id);
      if (found[id]) {
        ok(!!found[id].tip && !!found[id].hint, id + ' 缺少 tip/hint');
        try { found[id].check(null); found[id].check({}); }
        catch (e) { errors.push(id + ' check 在空 game 下抛错: ' + e.message); }
      }
    }
    // —— 轨道灾难 ——
    ok(typeof OrbitalHazards === 'function', 'OrbitalHazards 未定义');
    const hz = new OrbitalHazards();
    hz.update(Date.now(), null); hz.update(Date.now(), {});  // 空 game 不应抛错
    const sv = hz.save();
    ok(typeof sv.nextDebrisIn === 'number' && typeof sv.nextStormIn === 'number' && typeof sv.nextImpactIn === 'number', 'save 字段缺失');
    // —— 星门胜利补丁 ——
    ok(typeof City !== 'undefined' && typeof City.prototype.checkStargateVictory === 'function', 'City.checkStargateVictory 补丁缺失');
  } catch (e) { errors.push('自检异常: ' + (e && e.message)); }
  return { pass: errors.length === 0, fail: errors.length, errors };
}

if (typeof module !== 'undefined') {
  Object.assign(module.exports, { ContentV14SelfTest, P14U, P14O, P14D });
}

// ==================== 附录 E：星门胜利面板文案 ====================
// game.js 的 showVictory(type) 新增 'stargate' 分支时可直接引用本对象，
// 保持文案与内容包同源（改一处即可）。
const STARGATE_VICTORY_TEXT = {
  title: '🌀 星门开启！',
  desc: '第一批殖民舰队穿越星门，人类文明正式迈入星际时代！你可以继续自由建造。',
  // 备选标题（节日/彩蛋用）：'🌠 人类，星际物种',
};

// ==================== 附录 F：深空科技叠加推演（数值验算） ====================
// 以下乘法均由 TechTree.mul() 自动完成，此处手算一遍供平衡评审：
//   A 列 orbitalCostMul：0.9×0.9×0.9×0.8×0.7 = 0.408 → 轨道模块成本打 4.1 折；
//   B 列 probeSpeedMul：1.25×1.5×2.0 = 3.75 → 探测器 3.75 倍速；
//   B 列 fleetYieldMul：1.3×1.5 = 1.95 → 船队收益约翻倍；
//   C 列 ruinBonusMul：1.3×1.5×2.0×2.5×3.0 = 29.25 → 遗迹奖励 29 倍（彩票倍率，触发稀少）；
//   D 列 stargateCostMul：0.9×0.9×0.9×0.75×0.8 = 0.437 → 星门成本打 4.4 折；
//   stationPowerMul：1.2×1.3 = 1.56 → 帆板发电 1.56 倍。
// 星门最终成本（满科技）：steel 2000×0.437 ≈ 874，tech 200×0.437 ≈ 87，
//   rare 500×0.437 ≈ 219，he3 100×0.437 ≈ 44 —— 依然是天文数字，
//   但从「不可能」变成了「终局可及」。这正是 D 列存在的意义。
// 行星引擎 × 深空 B 列：船队收益 1.95（科技）× 1.25（引擎）= 2.44 倍，
//   双线毕业的玩家应得的奖励。
// 战争堡垒 × 战争科技：袭击间隔 2.0（堡垒）× 1.5（t-war-19）× 1.25（t-war-7）= 3.75 倍，
//   袭击从「家常便饭」变成「节日限定」——军事流毕业爽感的数学来源。

// ==================== 附录 G：推荐点法（给玩家的非官方攻略） ====================
// 轨道流：t-deep-1 → 铺帆 → t-deep-5 → t-deep-9 → t-deep-13（帆板加电）→ 戴森云；
// 遗迹流：t-deep-3 → t-deep-7 → t-deep-11（质变）→ 船队同步扩张 → t-deep-19；
// 星门流：D 列一路向下，同时把 C 列点到 t-deep-19（双前置），
//   期间用 A 列折扣铺轨道、B 列收益养船队——四列其实是一盘棋；
// 军事流：先走完 t-war 全线拿战争堡垒，再回头补 D 列转星门——
//   堡垒的 3.75 倍袭击间隔能让你安稳种田攒星门。

if (typeof module !== 'undefined') {
  Object.assign(module.exports, {
    STARGATE_VICTORY_TEXT,
    DEBRIS_FLAVOR, STORM_FLAVOR, IMPACT_FLAVOR,
  });
}

// ==================== 文件统计 ====================
//   一、奇观建筑 ×5（含 buildFlavor / lore×3 / buildStages×3 / 读取示例）
//   二、深空科技 ×20（4 列 × 5 层 needs 链，hint + 列设计说明）
//   三、成就 ×30（tip + hint，check 全防御式）
//   四、轨道灾难 ×3（class OrbitalHazards：constructor/update/save/load/attach）
//   五、星门胜利补丁（City.prototype + StargateVictory.attach）
//   附录 A~G：数值总表 / 成就-系统映射 / 接入清单 / 自检 / 胜利文案 / 叠加推演 / 推荐点法

// ==================== 附录 H：v1.4 × v1.2/v1.3 联动清单 ====================
// v1.4 不是孤岛，以下是与既有内容的全部交叉点（实现相关系统时逐项核对）：
//   [v1.3 战争科技]
//     - war_fortress 的 needTech 锁 t-war-20（星际盟约）：军事流必须先毕业战争线；
//     - 堡垒 raidIntervalMul 2.0 与 t-war-7/t-war-19 乘法叠加（3.75 倍，见附录 F）；
//     - 堡垒 defenseScore +200 直接计入 military.js defensePower()，
//       v1.3 成就 mil-def100 / mix-hegemon 难度应声下降——这是奇观红利，by design。
//   [v1.3 外交/政策]
//     - hall_of_humanity 建成后，v1.3 成就 dip-hostile（关系 -100）将无法达成：
//       选择和平路线就要放弃战争系成就，check 不做豁免，「选择有代价」；
//     - 政策槽 +2 使 pol-5（五策并举）变容易，但 pol-mil3 / pol-civ3 的取舍仍在；
//     - t-deep-12（门环工程学）是议会的 needTech：外交流也要经过星门线，叙事闭环。
//   [v1.3 灾难包]
//     - planet_engine 的 disasterMul 同样作用于 v1.3 三灾难（disaster.js 结算处
//       按附录读取示例接入即可）：辐射尘埃停工 90 秒 → 45 秒，
//       火星地震掉 50% hp → 25%，小行星带单波伤害减半；
//     - OrbitalHazards 与 DisasterPack13 各自独立调度（tick 双挂载，互不干扰），
//       时间轴交错设计见附录 A。
//   [v1.2 轨道/方舟]
//     - dyson_swarm 的 needOrbital_solar_sail: 5 认 v1.2 轨道帆板（P14O 双通道计数）；
//     - stargate 是第三胜利：city.js 的 won（发射台）/ arkWon（方舟）/ gateWon（星门）
//       三足鼎立，anyVictory 已打补丁纳入 gateWon；
//     - 方舟胜利要求 pop 200 / tech 100，星门要求 pop 300 / techSpent 200 / 星门坞 /
//       t-deep-20 —— 星门是更难的一条路，数值上保证「胜利含金量」递增。
//   [成就互斥提醒]
//     - 先建人类议会 → 永久错过 dip-hostile；先冲战争堡垒 → 袭击变稀疏，
//       mil-annihilate（全歼一波）反而更难刷——成就党注意顺序。

// ==================== 附录 I：已知限制与诚实声明 ====================
// 本文件是「内容包」，不是「系统实现」。以下事项明确标记为未验证/待实现，
// 集成者请勿当作已完成功能：
//   1. game.orbital / game.deepSpace 两个系统在 v1.4 时点尚未实现——
//      本文件所有轨道/深空成就 check 在系统上线前恒为 false，
//      OrbitalHazards.update 在无 orbital 时直接返回。这是设计，不是 bug，
//      但「轨道玩法好不好玩」未经验证。
//   2. 星门胜利的 showVictory('stargate') 分支需要 game.js 手动添加
//      （文案已备好：STARGATE_VICTORY_TEXT），或调 StargateVictory.attach；
//      未接入前，星门建成只会触发成就 wonder-gate，不会弹胜利面板。
//   3. 奇观建造前置（星门坞/techSpent/pop 三重门、帆×5、限建 1 座）
//      需要 build.js 实现 needBuilding / needOrbital_solar_sail /
//      needTechSpent 检查——本文件只声明数据，未实现检查逻辑。
//      stats.techSpent（累计消耗科技点）字段需要 tech.js 或 game.js 维护。
//   4. 行星引擎 / 战争堡垒 / 人类议会的效果字段需要 resources.js /
//      disaster.js / military.js / diplomacy.js / policy.js 各自实现读取——
//      读取示例已写在每种奇观的注释里，实现时照抄即可。
//   5. 数值（成本/伤害/间隔）均为纸面推演，未经真实游玩验证；
//      附录 A 的调参指南说明了如何只改常量调难度。
//   6. ContentV14SelfTest() 验证的是「注册表完整性」，不是「好不好玩」——
//      平衡性请以实际游玩为准。
