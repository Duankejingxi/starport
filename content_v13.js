/* 星港 — content_v13.js：v1.3 内容扩充（成就+30 / 科技+20 / 新灾难3种）
 * 加载顺序：achievements.js、tech.js、disaster.js 之后，直接扩展全局注册表。
 * 本文件只做加法：push 进 ACHIEVEMENT_DEFS、Object.assign 进 TECH_DEFS、
 * 新增 TECH_BRANCHES.war、定义 class DisasterPack13。
 * 所有 game 对象读取均为防御式（判存在再读），外交/军事/政策管理器
 * 可能尚未接入——对应成就会在这些系统上线后自动可解锁。
 */

// ==================== v1.3 小工具（防御性取值） ====================
const P13U = {
  // 外交 / 军事 / 政策管理器（可能不存在）
  dip: (g) => (g && g.diplomacy) || null,
  mil: (g) => (g && g.military) || null,
  pol: (g) => (g && g.policy) || null,
  st: (g) => (g && g.stats) || {},
  // 建筑计数（防御）
  count: (g, id) => {
    try { return (g && g.builder && typeof g.builder.count === 'function') ? g.builder.count(id) : 0; }
    catch (e) { return 0; }
  },
  // 关系值归一化：支持数字 / {value} / {rel} / {score}
  relVal: (x) => {
    if (x && typeof x === 'object') return (x.value ?? x.rel ?? x.score ?? 0) || 0;
    return x || 0;
  },
  // 关系集合转数组：支持对象 / 数组 / Map
  relList: (r) => {
    if (!r) return [];
    if (Array.isArray(r)) return r;
    if (typeof r.values === 'function') return Array.from(r.values());
    if (typeof r === 'object') return Object.values(r);
    return [];
  },
  // 协定 / 同盟 / 战争计数：支持数组 / 对象 / 数字
  listCount: (x) => {
    if (x == null) return 0;
    if (typeof x === 'number') return x;
    if (Array.isArray(x)) return x.length;
    if (typeof x === 'object') return Object.keys(x).length;
    return 0;
  },
};

// 外交专用判定
const P13D = {
  // 是否签署过某类协定（type 如 'trade'）
  hasPact: (g, type) => {
    const d = P13U.dip(g);
    if (!d || !d.pacts) return false;
    return P13U.relList(d.pacts).some((p) => {
      const t = (p && typeof p === 'object') ? (p.type || p.kind || p.name || '') : String(p);
      return t === type;
    });
  },
  // 同盟数（外交管理器或 stats 二选一，取大）
  alliances: (g) => {
    const d = P13U.dip(g);
    const n = d ? P13U.listCount(d.alliances) : 0;
    return Math.max(n, P13U.st(g).alliancesFormed || 0);
  },
  // 宣战数（外交管理器或 stats 二选一，取大）
  wars: (g) => {
    const d = P13U.dip(g);
    const n = d ? P13U.listCount(d.wars) : 0;
    return Math.max(n, P13U.st(g).warsDeclared || 0);
  },
  // 任一关系值满足 predicate
  anyRel: (g, pred) => {
    const d = P13U.dip(g);
    if (!d || !d.relation) return false;
    return P13U.relList(d.relation).some((r) => pred(P13U.relVal(r)));
  },
};

// 政策专用判定：active 数组按类别计数（类别字段兼容 type / cat / kind）
const P13P = {
  active: (g) => {
    const p = P13U.pol(g);
    if (!p || !p.active) return [];
    return Array.isArray(p.active) ? p.active : P13U.relList(p.active);
  },
  countCat: (g, cat) => P13P.active(g).filter((p) => {
    const c = (p && typeof p === 'object') ? (p.type || p.cat || p.kind || p.branch || '') : String(p);
    return c === cat || (cat === 'mil' && c === '军事') || (cat === 'civ' && c === '民生');
  }).length,
};

// ==================== 一、成就 +30 ====================
// 字段：{id, name, icon, desc, tip, check} —— tip 为解锁提示文案，
// AchievementManager.unlock 会用 name/desc 拼 toast，tip 供成就面板展示。
if (typeof ACHIEVEMENT_DEFS !== 'undefined') ACHIEVEMENT_DEFS.push(
  // ---- 🕊️ 外交 10 项 ----
  { id: 'dip-first', name: '初次建交', icon: '🤝', desc: '与第一个势力建立外交关系',
    tip: '🕊️ 外交破冰：打个招呼，总比打一架便宜。',
    check: (g) => P13U.relList(P13U.dip(g) && P13U.dip(g).relation).length >= 1 || (P13U.st(g).dipContacts || 0) >= 1 },
  { id: 'dip-rel80', name: '情投意合', icon: '💕', desc: '与任一势力关系达到 80',
    tip: '💕 关系 80：在火星上，朋友比氧气还珍贵。',
    check: (g) => P13D.anyRel(g, (v) => v >= 80) },
  { id: 'dip-trade-pact', name: '通商互利', icon: '📜', desc: '签署第一份贸易协定',
    tip: '📜 第一份贸易协定：星际商路就此开通。',
    check: (g) => P13D.hasPact(g, 'trade') || (P13U.st(g).tradePacts || 0) >= 1 },
  { id: 'dip-alliance', name: '军事同盟', icon: '🛡️', desc: '与任一势力结成军事同盟',
    tip: '🛡️ 军事同盟：从今天起，你的战争也是我的战争。',
    check: (g) => P13D.alliances(g) >= 1 },
  { id: 'dip-war', name: '宣战', icon: '⚔️', desc: '第一次向其他势力宣战',
    tip: '⚔️ 战争开始了：愿你的炮火比你的外交辞令更有力。',
    check: (g) => P13D.wars(g) >= 1 },
  { id: 'dip-triple', name: '三方同盟', icon: '👥', desc: '同时与三个势力保持同盟',
    tip: '👥 三方同盟：你在火星牌桌上成了庄家。',
    check: (g) => P13D.alliances(g) >= 3 },
  { id: 'dip-hostile', name: '不共戴天', icon: '💔', desc: '与任一势力关系跌至 -100',
    tip: '💔 关系 -100：有些梁子，在火星上是解不开了。',
    check: (g) => P13D.anyRel(g, (v) => v <= -100) },
  { id: 'dip-gift10', name: '慷慨解囊', icon: '🎁', desc: '累计向其他势力赠送礼物 10 次',
    tip: '🎁 第 10 份礼物：糖衣炮弹，也是炮弹。',
    check: (g) => (P13U.st(g).giftsSent || 0) >= 10 },
  { id: 'dip-embassy3', name: '使节云集', icon: '🏛️', desc: '建造 3 座大使馆',
    tip: '🏛️ 第三座大使馆：你的穹顶里开始讲三种方言了。',
    check: (g) => P13U.count(g, 'embassy') >= 3 },
  { id: 'dip-foe2friend', name: '化敌为友', icon: '🕊️', desc: '曾经宣战的势力最终成为盟友',
    tip: '🕊️ 化敌为友：没有永远的敌人，只有永远的火星。',
    check: (g) => (P13U.st(g).warToAlliance || 0) >= 1 || !!(P13U.dip(g) && P13U.dip(g).foeToFriend) },

  // ---- ⚔️ 军事 10 项 ----
  { id: 'mil-tower', name: '烽火台', icon: '🗼', desc: '建造第一座防御塔',
    tip: '🗼 第一座防御塔：从今天起，星港有了牙齿。',
    check: (g) => P13U.count(g, 'tower') >= 1 },
  { id: 'mil-repel', name: '首战告捷', icon: '🛡️', desc: '击退第一次袭击',
    tip: '🛡️ 击退首次袭击：火星的夜晚，属于守夜人。',
    check: (g) => ((P13U.mil(g) && P13U.mil(g).raidsRepelled) || P13U.st(g).raidsRepelled || 0) >= 1 },
  { id: 'mil-kill100', name: '百人斩', icon: '⚔️', desc: '累计击杀 100 名袭击者',
    tip: '⚔️ 击杀 100：在红色荒漠上，你写下了自己的传奇。',
    check: (g) => ((P13U.mil(g) && P13U.mil(g).raidersKilled) || P13U.st(g).raidersKilled || 0) >= 100 },
  { id: 'mil-def100', name: '固若金汤', icon: '💪', desc: '防御总评分达到 100',
    tip: '💪 防御评分 100：这座城市，攻不下来。',
    check: (g) => { const m = P13U.mil(g); return !!(m && typeof m.defensePower === 'function' && m.defensePower() >= 100); } },
  { id: 'mil-nuke', name: '核平', icon: '☢️', desc: '发射第一枚核弹',
    tip: '☢️ 核弹升空：愿这朵蘑菇云，是最后一朵。',
    check: (g) => (P13U.st(g).nukesLaunched || 0) >= 1 },
  { id: 'mil-wall50', name: '万里长城', icon: '🧱', desc: '累计建造 50 格城墙',
    tip: '🧱 第 50 格城墙：长城在地球，火星也有了自己的。',
    check: (g) => P13U.count(g, 'wall') >= 50 || (P13U.st(g).wallsBuilt || 0) >= 50 },
  { id: 'mil-clean', name: '零伤亡', icon: '🌟', desc: '一次守城战零伤亡获胜',
    tip: '🌟 零伤亡守城：最好的胜利，是所有人都回家吃饭。',
    check: (g) => (P13U.st(g).zeroCasualtyWins || 0) >= 1 },
  { id: 'mil-merc', name: '雇佣兵', icon: '💂', desc: '雇佣兵首次参战',
    tip: '💂 雇佣兵参战：信用点能买到的，是最便宜的勇气。',
    check: (g) => (P13U.st(g).mercBattles || 0) >= 1 || !!(P13U.mil(g) && P13U.mil(g).mercActive) },
  { id: 'mil-missile', name: '导弹井', icon: '🚀', desc: '导弹井首次开火',
    tip: '🚀 导弹升空：让袭击者在天上开花。',
    check: (g) => (P13U.st(g).missilesFired || 0) >= 1 },
  { id: 'mil-annihilate', name: '全歼', icon: '💥', desc: '全歼一整波袭击者',
    tip: '💥 全歼一波：一个没跑掉，这就是星港的待客之道。',
    check: (g) => (P13U.st(g).wavesAnnihilated || 0) >= 1 },

  // ---- 📜 政策 5 项 ----
  { id: 'pol-first', name: '新政', icon: '📜', desc: '颁布第一项政策',
    tip: '📜 第一项政策：执政官的第一支笔，落下了。',
    check: (g) => P13P.active(g).length >= 1 },
  { id: 'pol-5', name: '五策并举', icon: '📋', desc: '同时生效 5 项政策',
    tip: '📋 五项政策全满：你的办公桌上，法令堆成了山。',
    check: (g) => P13P.active(g).length >= 5 },
  { id: 'pol-mil3', name: '穷兵黩武', icon: '⚔️', desc: '同时生效 3 项军事政策',
    tip: '⚔️ 三项军事政策：整个城市，都在为战争呼吸。',
    check: (g) => P13P.countCat(g, 'mil') >= 3 },
  { id: 'pol-civ3', name: '藏富于民', icon: '🏠', desc: '同时生效 3 项民生政策',
    tip: '🏠 三项民生政策：枪炮之外，面包也很重要。',
    check: (g) => P13P.countCat(g, 'civ') >= 3 },
  { id: 'pol-repeal', name: '朝令夕改', icon: '🗑️', desc: '废除一项已颁布的政策',
    tip: '🗑️ 废除政策：承认错误，也是执政的艺术。',
    check: (g) => (P13U.st(g).policiesRepealed || 0) >= 1 },

  // ---- 🔗 综合 5 项（三系统联动） ----
  { id: 'mix-war-peace', name: '战争与和平', icon: '🕊️', desc: '同一局内既宣战、又结盟',
    tip: '🕊️ 战争与和平：上午开炮，下午签约——这就是政治。',
    check: (g) => P13D.wars(g) >= 1 && P13D.alliances(g) >= 1 },
  { id: 'mix-triad', name: '三位一体', icon: '🔗', desc: '外交 / 军事 / 政策三系统同时运转',
    tip: '🔗 三位一体：外交斡旋、军事威慑、政策兜底，全都要。',
    check: (g) => !!P13U.dip(g) && !!P13U.mil(g) && P13P.active(g).length >= 1 },
  { id: 'mix-fortress-diplomat', name: '铁壁外交', icon: '🏰', desc: '拥有军事同盟的同时建成 20 格城墙',
    tip: '🏰 铁壁外交：大炮的射程之内，才有谈判桌。',
    check: (g) => P13D.alliances(g) >= 1 && (P13U.count(g, 'wall') >= 20 || (P13U.st(g).wallsBuilt || 0) >= 20) },
  { id: 'mix-war-econ', name: '战争财', icon: '💰', desc: '处于战争状态时仍保持贸易协定',
    tip: '💰 战争财：炮火连天，商路不断——这才是大玩家。',
    check: (g) => P13D.wars(g) >= 1 && (P13D.hasPact(g, 'trade') || (P13U.st(g).tradePacts || 0) >= 1) },
  { id: 'mix-hegemon', name: '星港霸主', icon: '👑', desc: '同盟≥2、防御评分≥200、生效政策≥3',
    tip: '👑 星港霸主：朋友遍天下，城墙固若金汤，法令行于四方。',
    check: (g) => {
      const m = P13U.mil(g);
      const dp = (m && typeof m.defensePower === 'function') ? m.defensePower() : 0;
      return P13D.alliances(g) >= 2 && dp >= 200 && P13P.active(g).length >= 3;
    } },
);

// ==================== 二、科技 +20（战争系） ====================
// 新增分支
if (typeof TECH_BRANCHES !== 'undefined') {
  TECH_BRANCHES.war = { name: '战争', icon: '⚔️', color: '#ef4444' };
}

// 战争系 fx 键语义（供军事系统读取；TechTree.mul() 自动做乘法叠加）：
//   towerDmgMul      防御塔伤害倍率（>1 = 提升）
//   towerRateMul     防御塔射速倍率（>1 = 更快）
//   wallHpMul        城墙生命倍率（>1 = 更耐打）
//   raidWarnMul      袭击预警时长倍率（>1 = 预警更长）
//   raidIntervalMul  袭击间隔倍率（>1 = 袭击更稀疏）
//   nukeCostMul      核弹发射成本倍率（<1 = 更便宜）
//   mercCostMul      雇佣兵雇佣成本倍率（<1 = 更便宜）
//   allyAidMul       盟友援助强度倍率（>1 = 援助更强）
if (typeof TECH_DEFS !== 'undefined') Object.assign(TECH_DEFS, {
  // -------- 第 1 列：塔伤线（towerDmgMul）--------
  't-war-1': {
    name: '穿甲弹芯', icon: '🔩', branch: 'war', cost: 8, needs: [],
    desc: '防御塔伤害 +20%。「在火星尘埃里，第一课是学会开火。」',
    fx: { towerDmgMul: 1.2 },
  },
  't-war-5': {
    name: '高爆弹头', icon: '💥', branch: 'war', cost: 20, needs: ['t-war-1'],
    desc: '防御塔伤害再 +30%（叠加）。「让每一发炮弹都物超所值。」',
    fx: { towerDmgMul: 1.3 },
  },
  't-war-9': {
    name: '电磁加速', icon: '🧲', branch: 'war', cost: 35, needs: ['t-war-5'],
    desc: '防御塔伤害再 +50%（叠加）。「磁轨推进，动能即正义。」',
    fx: { towerDmgMul: 1.5 },
  },
  't-war-13': {
    name: '轨道打击炮', icon: '🛰️', branch: 'war', cost: 55, needs: ['t-war-9'],
    desc: '防御塔伤害再 +60%（叠加）。「从天而降的审判。」',
    fx: { towerDmgMul: 1.6 },
  },
  't-war-17': {
    name: '行星防御阵列', icon: '🌐', branch: 'war', cost: 95, needs: ['t-war-13'],
    desc: '防御塔伤害 +100%（叠加）。「整颗行星，都是我们的炮台。」',
    fx: { towerDmgMul: 2.0 },
  },

  // -------- 第 2 列：射速线（towerRateMul）--------
  't-war-2': {
    name: '速射机构', icon: '⚙️', branch: 'war', cost: 8, needs: [],
    desc: '防御塔射速 +15%。「天下武功，唯快不破。」',
    fx: { towerRateMul: 1.15 },
  },
  't-war-6': {
    name: '双联装炮塔', icon: '🔫', branch: 'war', cost: 20, needs: ['t-war-2'],
    desc: '防御塔射速再 +25%（叠加）。「一门不够，那就两门。」',
    fx: { towerRateMul: 1.25 },
  },
  't-war-10': {
    name: '智能火控', icon: '🎯', branch: 'war', cost: 35, needs: ['t-war-6'],
    desc: '防御塔射速再 +30%（叠加）。「每一发，都算无遗策。」',
    fx: { towerRateMul: 1.3 },
  },
  't-war-14': {
    name: '过载射击', icon: '🔥', branch: 'war', cost: 55, needs: ['t-war-10'],
    desc: '防御塔射速再 +40%（叠加）。「炮管打红，也不能停火。」',
    fx: { towerRateMul: 1.4 },
  },
  't-war-18': {
    name: '风暴弹幕', icon: '🌪️', branch: 'war', cost: 95, needs: ['t-war-14'],
    desc: '防御塔射速 +60%（叠加）。「天空下起金属暴雨。」',
    fx: { towerRateMul: 1.6 },
  },

  // -------- 第 3 列：城防线（wallHpMul / raidIntervalMul / raidWarnMul）--------
  't-war-3': {
    name: '钢筋混凝土', icon: '🧱', branch: 'war', cost: 8, needs: [],
    desc: '城墙生命 +50%。「先有墙，才有家。」',
    fx: { wallHpMul: 1.5 },
  },
  't-war-7': {
    name: '巡逻无人机', icon: '🛸', branch: 'war', cost: 20, needs: ['t-war-3'],
    desc: '袭击间隔 +25%（袭击更稀疏）。「眼睛越多，敌人越不敢来。」',
    fx: { raidIntervalMul: 1.25 },
  },
  't-war-11': {
    name: '复合装甲墙', icon: '🛡️', branch: 'war', cost: 35, needs: ['t-war-7'],
    desc: '城墙生命再 +50%（叠加）。「撞上来，只会头破血流。」',
    fx: { wallHpMul: 1.5 },
  },
  't-war-15': {
    name: '深空预警网', icon: '📡', branch: 'war', cost: 55, needs: ['t-war-11'],
    desc: '袭击预警时长翻倍。「看见敌人，比打败敌人更早。」',
    fx: { raidWarnMul: 2.0 },
  },
  't-war-19': {
    name: '不动要塞', icon: '🏰', branch: 'war', cost: 95, needs: ['t-war-15'],
    desc: '城墙生命 +100%，袭击间隔 +50%。「这座要塞，永不陷落。」',
    fx: { wallHpMul: 2.0, raidIntervalMul: 1.5 },
  },

  // -------- 第 4 列：战略线（raidWarnMul / mercCostMul / allyAidMul / nukeCostMul）--------
  't-war-4': {
    name: '边境雷达', icon: '📻', branch: 'war', cost: 10, needs: [],
    desc: '袭击预警时长 +50%。「耳朵竖起来，荒漠里的脚步声。」',
    fx: { raidWarnMul: 1.5 },
  },
  't-war-8': {
    name: '佣兵合约', icon: '📝', branch: 'war', cost: 22, needs: ['t-war-4'],
    desc: '雇佣兵成本 -15%。「信用点，是最便宜的勇气。」',
    fx: { mercCostMul: 0.85 },
  },
  't-war-12': {
    name: '同盟军演', icon: '🤝', branch: 'war', cost: 38, needs: ['t-war-8'],
    desc: '盟友援助强度 +50%。「并肩演习过的，才是真兄弟。」',
    fx: { allyAidMul: 1.5 },
  },
  't-war-16': {
    name: '核威慑', icon: '☢️', branch: 'war', cost: 60, needs: ['t-war-12'],
    desc: '核弹发射成本 -25%。「最好的核弹，是不用发射的那一枚。」',
    fx: { nukeCostMul: 0.75 },
  },
  't-war-20': {
    name: '星际盟约', icon: '🌟', branch: 'war', cost: 110, needs: ['t-war-16'],
    desc: '盟友援助强度 +100%，核弹成本 -40%。「以星辰之名，共守火星。」',
    fx: { allyAidMul: 2.0, nukeCostMul: 0.6 },
  },
});

// 科技展示顺序：战争系排在最后（4 列 × 5 层，按列展开）
if (typeof TECH_ORDER !== 'undefined' && Array.isArray(TECH_ORDER)) {
  TECH_ORDER.push(
    't-war-1', 't-war-5', 't-war-9', 't-war-13', 't-war-17',
    't-war-2', 't-war-6', 't-war-10', 't-war-14', 't-war-18',
    't-war-3', 't-war-7', 't-war-11', 't-war-15', 't-war-19',
    't-war-4', 't-war-8', 't-war-12', 't-war-16', 't-war-20',
  );
}

// countByBranch 原实现写死了分支集合，战争系会被漏掉——防御性打补丁，
// 使其兼容任意分支（包括未来新增）。
if (typeof TechTree !== 'undefined' && TechTree.prototype && typeof TechTree.prototype.countByBranch === 'function') {
  TechTree.prototype.countByBranch = function () {
    const c = { build: 0, prod: 0, surv: 0, orbital: 0, war: 0 };
    for (const id of this.unlocked) {
      const def = (typeof TECH_DEFS !== 'undefined') ? TECH_DEFS[id] : null;
      const b = def && def.branch;
      if (b) c[b] = (c[b] || 0) + 1;
    }
    return c;
  };
}

// ==================== 三、新灾难 3 种 ====================
// 数值平衡说明（设计意图）：
//   辐射尘埃：12 分钟后首发，间隔 10~16 分钟——中盘铀矿机铺开后才有意义；
//     90 秒停工 ≈ 1.5 个生产周期，预警 20 秒足够手动抢修/接受损失；
//     半径 3 格只影响泄漏点周边，不会瘫痪全城。
//   小行星带：15 分钟后首发，间隔 14~22 分钟——与普通陨石（6~10 分钟）错峰；
//     10 波 × 每波随机 1 格，单波只伤一栋建筑，总伤害可控但持续压迫维修线。
//   火星地震：20 分钟后首发，间隔 18~28 分钟——后期灾难；
//     随机 3 栋各掉 50% hp，多次地震才会真正摧毁（100→50→25→12→…），
//     给玩家「修还是拆」的决策空间；预警 25 秒。
const RAD_DUST = {
  FIRST_AT: 12 * 60 * 1000,
  INTERVAL_MIN: 10 * 60 * 1000,
  INTERVAL_MAX: 16 * 60 * 1000,
  DURATION: 90 * 1000,   // 持续 90 秒
  WARN_MS: 20 * 1000,
  RADIUS: 3,             // 泄漏点半径 3 格内建筑停工
};
const ASTEROID_BELT = {
  FIRST_AT: 15 * 60 * 1000,
  INTERVAL_MIN: 14 * 60 * 1000,
  INTERVAL_MAX: 22 * 60 * 1000,
  WARN_MS: 15 * 1000,
  WAVES: 10,             // 连续 10 波
  WAVE_GAP: 8 * 1000,    // 每波间隔 8 秒
};
const MARSQUAKE = {
  FIRST_AT: 20 * 60 * 1000,
  INTERVAL_MIN: 18 * 60 * 1000,
  INTERVAL_MAX: 28 * 60 * 1000,
  WARN_MS: 25 * 1000,
  TARGETS: 3,            // 随机 3 栋建筑
  MAX_HP: 100,           // 建筑血量池（本包引入，默认 100）
};

const PACK13_KEY = 'starport-disaster-pack13';

class DisasterPack13 {
  constructor() {
    const now = Date.now();
    // 🌪️ 辐射尘埃：null / {warnUntil, until, cx, cy}
    this.dust = null;
    this.nextDust = now + RAD_DUST.FIRST_AT;
    // ☄️ 小行星带：null / {warnUntil, wave, nextWaveAt, until}
    this.belt = null;
    this.nextBelt = now + ASTEROID_BELT.FIRST_AT;
    // 🌋 火星地震：null / {warnUntil}
    this.quake = null;
    this.nextQuake = now + MARSQUAKE.FIRST_AT;
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

  // ---- 统计计数（防御：stats 字段不存在就自建） ----
  _bump(game, key) {
    try {
      if (game && game.stats) game.stats[key] = (game.stats[key] || 0) + 1;
    } catch (e) {}
  }

  // ---- 主调度：game loop 每帧调用 update(now, game) ----
  update(now, game) {
    if (!game) return;
    try { this._updateDust(now, game); } catch (e) {}
    try { this._updateBelt(now, game); } catch (e) {}
    try { this._updateQuake(now, game); } catch (e) {}
    // 地震 hp 自愈：被维修好的建筑（damaged=false）血量回满
    try { this._healRepaired(game); } catch (e) {}
  }

  // ================= 🌪️ 辐射尘埃：铀矿区泄漏 =================
  // 泄漏源：优先找铀矿机；没有铀矿机时降级为随机建筑（视为管道泄漏）。
  _dustSource(game) {
    const bs = (game.builder && game.builder.buildings) || [];
    if (!bs.length) return null;
    const uminers = bs.filter((b) => b.id === 'uminer');
    if (uminers.length) return uminers[Math.floor(Math.random() * uminers.length)];
    return bs[Math.floor(Math.random() * bs.length)];
  }

  _updateDust(now, game) {
    // 调度
    if (!this.dust && now >= this.nextDust) {
      const src = this._dustSource(game);
      if (!src) {  // 没建筑就不触发，推迟 1 分钟再试
        this.nextDust = now + 60 * 1000;
        return;
      }
      this.dust = {
        warnUntil: now + RAD_DUST.WARN_MS,
        until: now + RAD_DUST.WARN_MS + RAD_DUST.DURATION,
        cx: src.x, cy: src.y,
        warned: false, started: false,
      };
      this._notify(game, 'dust13-warn',
        `🌪️ 辐射泄漏预警！${Math.round(RAD_DUST.WARN_MS / 1000)}秒后铀矿区泄漏，周边建筑将停工`,
        { x: src.x, y: src.y, warnMs: RAD_DUST.WARN_MS });
    }
    const d = this.dust;
    if (!d) return;
    const bs = (game.builder && game.builder.buildings) || [];
    // 预警转生效：标记范围内建筑
    if (!d.started && now >= d.warnUntil) {
      d.started = true;
      let n = 0;
      for (const b of bs) {
        if (Math.hypot(b.x - d.cx, b.y - d.cy) <= RAD_DUST.RADIUS) {
          b.radiated = true;                    // 渲染层可据此画 ☢️ 标记
          b.radiatedUntil = d.until;
          b._dustWasDamaged = !!b.damaged;      // 记录原损坏态，结束时还原
          b._dustMarkAt = now;                // 本灾难打上的 damagedAt，还原时精确匹配
          b.damaged = true;                     // damaged → 生产降效（停工见下）
          b.damagedAt = now;
          n++;
        }
      }
      this._bump(game, 'radDustCount');
      this._notify(game, 'dust13-start',
        `🌪️ 辐射尘埃！${n} 栋建筑停工 ${Math.round(RAD_DUST.DURATION / 1000)} 秒`,
        { count: n, x: d.cx, y: d.cy });
    }
    // 停工实现：冻结受影响建筑的 lastProduce，使其永远到不了生产间隔。
    // （不碰 build.js，纯外部实现；结束时自然恢复，无副作用）
    if (d.started && now < d.until) {
      for (const b of bs) {
        if (b.radiated && now < (b.radiatedUntil || 0)) b.lastProduce = now;
      }
    }
    // 结束：清除标记，还原损坏态（期间被陨石等砸中的建筑 damagedAt 已变，不还原）
    if (now >= d.until) {
      for (const b of bs) {
        if (b.radiated) {
          b.radiated = false;
          b.radiatedUntil = 0;
          // 只还原本灾难造成的 damaged：damagedAt 仍是本灾难打上的标记才还原；
          // 期间被陨石等外部事件改过 damagedAt 的，保留损坏态
          if (b.damaged && b._dustWasDamaged === false && b.damagedAt === b._dustMarkAt) {
            b.damaged = false;
          }
          delete b._dustWasDamaged;
          delete b._dustMarkAt;
        }
      }
      this.dust = null;
      this.nextDust = now + RAD_DUST.INTERVAL_MIN +
        Math.random() * (RAD_DUST.INTERVAL_MAX - RAD_DUST.INTERVAL_MIN);
      this._notify(game, 'dust13-end', '🌤️ 辐射尘埃消散，建筑恢复生产', {});
    }
  }

  // ================= ☄️ 小行星带：连续小陨石 10 波 =================
  _beltTarget(game) {
    // 每波随机 1 格：70% 优先砸建筑，否则随机空地
    const bs = ((game.builder && game.builder.buildings) || []).filter((b) => b.id !== 'road');
    if (bs.length && Math.random() < 0.7) {
      const b = bs[Math.floor(Math.random() * bs.length)];
      return { x: b.x, y: b.y, building: b };
    }
    if (game.map && game.map.size) {
      const s = game.map.size;
      return { x: Math.floor(Math.random() * s), y: Math.floor(Math.random() * s), building: null };
    }
    return { x: 0, y: 0, building: null };
  }

  _updateBelt(now, game) {
    if (!this.belt && now >= this.nextBelt) {
      this.belt = {
        warnUntil: now + ASTEROID_BELT.WARN_MS,
        wave: 0,
        nextWaveAt: now + ASTEROID_BELT.WARN_MS,
        warned: false,
      };
      this._notify(game, 'belt13-warn',
        `☄️ 小行星带预警！${Math.round(ASTEROID_BELT.WARN_MS / 1000)}秒后 ${ASTEROID_BELT.WAVES} 波小陨石来袭`,
        { waves: ASTEROID_BELT.WAVES, warnMs: ASTEROID_BELT.WARN_MS });
    }
    const b = this.belt;
    if (!b) return;
    if (!b.warned && now >= b.warnUntil) b.warned = true;
    // 逐波结算
    while (b.wave < ASTEROID_BELT.WAVES && now >= b.nextWaveAt) {
      b.wave++;
      b.nextWaveAt = now + ASTEROID_BELT.WAVE_GAP;
      const t = this._beltTarget(game);
      if (t.building) {
        t.building.damaged = true;
        t.building.damagedAt = now;
        this._bump(game, 'beltHits');
        this._notify(game, 'belt13-hit',
          `☄️ 小行星带第 ${b.wave} 波：碎片击中了建筑！（${b.wave}/${ASTEROID_BELT.WAVES}）`,
          { wave: b.wave, x: t.x, y: t.y });
      } else {
        this._notify(game, 'belt13-miss',
          `☄️ 小行星带第 ${b.wave} 波：碎片落在空地（${b.wave}/${ASTEROID_BELT.WAVES}）`,
          { wave: b.wave, x: t.x, y: t.y });
      }
    }
    if (b.wave >= ASTEROID_BELT.WAVES) {
      this.belt = null;
      this.nextBelt = now + ASTEROID_BELT.INTERVAL_MIN +
        Math.random() * (ASTEROID_BELT.INTERVAL_MAX - ASTEROID_BELT.INTERVAL_MIN);
      this._notify(game, 'belt13-end', '🌤️ 小行星带掠过，警报解除', {});
    }
  }

  // ================= 🌋 火星地震：随机 3 栋建筑掉 50% hp =================
  // hp 机制：建筑默认满血 100（b.maxHp / b.hp，本包引入，build.js 无需改动）；
  // 每次地震 hp 减半，hp<=0 则 damaged=true（需维修）；维修好后 _healRepaired 回满。
  _updateQuake(now, game) {
    if (!this.quake && now >= this.nextQuake) {
      this.quake = { warnUntil: now + MARSQUAKE.WARN_MS, warned: false };
      this._notify(game, 'quake13-warn',
        `🌋 火星地震预警！${Math.round(MARSQUAKE.WARN_MS / 1000)}秒后强震，随机 ${MARSQUAKE.TARGETS} 栋建筑受损`,
        { warnMs: MARSQUAKE.WARN_MS });
    }
    const q = this.quake;
    if (!q || now < q.warnUntil) return;
    this.quake = null;
    this.nextQuake = now + MARSQUAKE.INTERVAL_MIN +
      Math.random() * (MARSQUAKE.INTERVAL_MAX - MARSQUAKE.INTERVAL_MIN);
    const bs = ((game.builder && game.builder.buildings) || []).filter((b) => b.id !== 'road');
    // 洗牌后取前 N 栋
    const pool = bs.slice();
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const targets = pool.slice(0, MARSQUAKE.TARGETS);
    let destroyed = 0;
    for (const b of targets) {
      if (b.maxHp == null) b.maxHp = MARSQUAKE.MAX_HP;
      if (b.hp == null) b.hp = b.maxHp;
      b.hp = Math.max(0, Math.floor(b.hp / 2));  // 掉 50% hp
      if (b.hp <= 0 && !b.damaged) {
        b.damaged = true;          // 血量耗尽 → 需维修
        b.damagedAt = now;
        destroyed++;
      }
    }
    this._bump(game, 'quakes13');
    this._notify(game, 'quake13-hit',
      `🌋 火星地震！${targets.length} 栋建筑各损失 50% 结构${destroyed ? `，${destroyed} 栋倒塌需维修` : ''}`,
      { count: targets.length, destroyed });
  }

  // 被维修好的建筑血量回满（damaged=false 且 hp<=0 → 视为修好）
  _healRepaired(game) {
    const bs = (game.builder && game.builder.buildings) || [];
    for (const b of bs) {
      if (b.hp != null && !b.damaged && b.hp <= 0) {
        b.hp = b.maxHp || MARSQUAKE.MAX_HP;
      }
    }
  }

  // ---- 存档 / 读档：只持久化下次触发时间（进行中的灾难读档后清空，避免状态错乱） ----
  save() {
    const now = Date.now();
    return {
      nextDustIn: Math.max(0, this.nextDust - now),
      nextBeltIn: Math.max(0, this.nextBelt - now),
      nextQuakeIn: Math.max(0, this.nextQuake - now),
    };
  }
  load(data, now) {
    const base = now || Date.now();
    if (!data) return;
    this.nextDust = base + (data.nextDustIn != null ? data.nextDustIn : RAD_DUST.FIRST_AT);
    this.nextBelt = base + (data.nextBeltIn != null ? data.nextBeltIn : ASTEROID_BELT.FIRST_AT);
    this.nextQuake = base + (data.nextQuakeIn != null ? data.nextQuakeIn : MARSQUAKE.FIRST_AT);
    this.dust = null;
    this.belt = null;
    this.quake = null;
  }

  // ---- 可选接入：把本包挂进已有 game 实例（不修改 game.js 源码） ----
  // 用法：DisasterPack13.attach(game) —— 在 game.js 加载后、游戏开始前调用一次。
  // 行为：每 tick 末尾调用 pack.update；save/load 时合并本包计时器；幂等（重复调用返回同一实例）。
  static attach(game) {
    if (!game || game._pack13) return (game && game._pack13) || null;
    const pack = new DisasterPack13();
    game._pack13 = pack;
    // 挂进主循环
    if (typeof game.tick === 'function' && !game._pack13TickWrapped) {
      game._pack13TickWrapped = true;
      const origTick = game.tick.bind(game);
      game.tick = function (now, dt) {
        origTick(now, dt);
        try { pack.update(now, this); } catch (e) {}
      };
    }
    // 存档合并（独立 key，不污染原存档结构）
    if (typeof game.save === 'function' && !game._pack13SaveWrapped) {
      game._pack13SaveWrapped = true;
      const origSave = game.save.bind(game);
      game.save = function () {
        origSave();
        try { localStorage.setItem(PACK13_KEY, JSON.stringify(pack.save())); } catch (e) {}
      };
      const origLoad = game.load.bind(game);
      game.load = function () {
        const ok = origLoad();
        try {
          const raw = localStorage.getItem(PACK13_KEY);
          if (raw) pack.load(JSON.parse(raw), Date.now());
        } catch (e) {}
        return ok;
      };
    }
    return pack;
  }
}

if (typeof module !== 'undefined') {
  module.exports = { DisasterPack13, RAD_DUST, ASTEROID_BELT, MARSQUAKE, PACK13_KEY };
}
