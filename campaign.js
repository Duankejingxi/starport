/* 星港 — campaign.js：挑战战役系统（v1.0）
 * ============================================================================
 * 无主线剧情，纯挑战关卡。20 个关卡分 3 幕：
 *   第一幕「新兵训练」(5 关·教学)：限时建造 / 资源赛跑 / 人口冲刺 / 电力危机 / 第一次灾难
 *   第二幕「火星试炼」(10 关·进阶)：贫瘠开局 / 孤岛 / 科技封锁 / 军事压力 / 极限扩张 /
 *                              贸易禁运 / 地下开局 / 海洋开局 / 灾难连击 / 外交孤立
 *   第三幕「地狱边境」(5 关·地狱)：全灾难 / 零人口开局 / 单人通关 / 光速胜利 / 完美城市
 *
 * 每关数据结构：
 *   id / act / name / icon / desc / difficulty(1-5)
 *   initial:   初始资源背包增量 / 初始人口 / 预置建筑
 *   limits:    限制条件（禁用建筑 / 象限上限 / 贸易禁运 / 外交禁用 / 关闭灾难·袭击）
 *   modifiers: 数值修饰器（见 MODIFIERS 配置表）
 *   victory:   { conditions:[...], timeLimitMs? } 胜利条件 + 可选限时（超时判负）
 *   rating:    三星评分标准（S/A/B 用时阈值 + 采集效率基准 + 死亡容忍）
 *   tip:       通关提示
 *
 * 对外接口：
 *   CampaignManager#startLevel(id) -> 初始状态对象（供主游戏 game.js 加载）
 *   CampaignManager#checkVictory(id, state) -> { status, reason, progress }
 *   CampaignManager#rateLevel(id, run) -> 'S' | 'A' | 'B' | 'C'
 *   renderCampaignPanel(manager?) -> 深色主题 HTML（关卡列表 + 评分 + 开始按钮）
 *
 * 存档：localStorage['starport:campaign:v1'] = { unlocked, best:{id:{grade,timeMs}}, completedAt }
 * 纯原生 JS，零依赖；浏览器 / Node 均可加载（Node 下用 module.exports 导出）。
 * ============================================================================
 */

'use strict';

// ---------------- 存档与通用常量 ----------------

/** localStorage 存档键 */
const CAMPAIGN_SAVE_KEY = 'starport:campaign:v1';

/** 评分等级顺序（用于比较"是否刷新最佳"） */
const GRADE_ORDER = ['C', 'B', 'A', 'S'];
const GRADE_SCORE = { C: 1, B: 2, A: 3, S: 4 };

/** 评分徽章颜色（深色主题） */
const GRADE_COLORS = {
  S: '#ffd700',  // 金
  A: '#c084fc',  // 紫
  B: '#60a5fa',  // 蓝
  C: '#9ca3af',  // 灰
};

/** 城市评级顺序（用于 rank 型胜利条件判定） */
const RANK_ORDER = ['聚落', '城镇', '都市', '大都会', '星港'];

/** 分钟 -> 毫秒 */
const MIN = 60 * 1000;

/** HTML 转义（渲染面板用，防注入） */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** 毫秒 -> "mm:ss" / "hh:mm:ss" */
function fmtTime(ms) {
  if (ms == null || ms < 0) ms = 0;
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const p2 = n => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${p2(m)}:${p2(sec)}` : `${m}:${p2(sec)}`;
}

// ============================================================================
// 关卡修饰器配置表 MODIFIERS
// ----------------------------------------------------------------------------
// 每个修饰器：key -> { def: 默认值, desc: 中文说明, fmt: 值格式化函数 }
// 关卡只需写"与默认不同"的项；resolveModifiers() 会补全默认值。
// 数值倍率语义：1 = 不变；<1 = 削弱；>1 = 增强。
//   *FreqMul 类（灾难/袭击）：倍率作用于"间隔"，越小越频繁（0.5 = 2 倍频率）。
// ============================================================================

const MODIFIERS = {
  // ---- 资源与建造 ----
  resourceMul:  { def: 1,     desc: '资源采集倍率：采矿机/抽水机/采集产量', fmt: v => `×${v}` },
  buildCostMul: { def: 1,     desc: '建造费用倍率：所有建筑花费',           fmt: v => `×${v}` },
  tradeMul:     { def: 1,     desc: '贸易收益倍率：贸易站卖出价格',         fmt: v => `×${v}` },
  powerMul:     { def: 1,     desc: '电力产出倍率：太阳能/核电站发电量',    fmt: v => `×${v}` },
  labMul:       { def: 1,     desc: '实验室产出倍率：科技点获取',           fmt: v => `×${v}` },
  // ---- 人口 ----
  popGrowthMul: { def: 1,     desc: '人口增长倍率：人口 tick 间隔',         fmt: v => `×${v}` },
  deathMul:     { def: 1,     desc: '人口死亡倍率：灾难/袭击致死',          fmt: v => `×${v}` },
  happyMul:     { def: 1,     desc: '幸福度获取倍率',                       fmt: v => `×${v}` },
  // ---- 灾难与袭击 ----
  disasterFreqMul: { def: 1,  desc: '灾难频率倍率：作用于灾难间隔，越小越频繁', fmt: v => `间隔×${v}` },
  raidFreqMul:     { def: 1,  desc: '袭击频率倍率：作用于袭击间隔，越小越频繁', fmt: v => `间隔×${v}` },
  raidPowerMul:    { def: 1,  desc: '袭击强度倍率：敌方血量/伤害',               fmt: v => `×${v}` },
  // ---- 开局覆盖 ----
  popStart:     { def: null,  desc: '初始人口（覆盖默认 POP_START=2）',     fmt: v => `${v}人` },
  popCap:       { def: null,  desc: '人口上限覆盖（null = 按住房计算）',    fmt: v => `${v}人` },
  // ---- 开关型 ----
  noDisasters:  { def: false, desc: '关闭所有灾难',                         fmt: v => (v ? '关闭' : '开启') },
  noRaids:      { def: false, desc: '关闭袭击',                             fmt: v => (v ? '关闭' : '开启') },
  tradeBan:     { def: false, desc: '贸易禁运：禁用贸易站与一切贸易',       fmt: v => (v ? '禁运' : '允许') },
  diploBan:     { def: false, desc: '外交孤立：无 AI 殖民地、无条约',       fmt: v => (v ? '孤立' : '正常') },
  maxQuadrants: { def: null,  desc: '可解锁象限上限（null = 不限）',        fmt: v => `${v}个` },
  bans:         { def: [],    desc: '禁用建筑 id 列表',                     fmt: v => v.join('、') || '无' },
};

/** 合并关卡修饰器与默认值，返回完整修饰器对象（深拷贝 bans 数组） */
function resolveModifiers(mod) {
  const out = {};
  for (const k in MODIFIERS) out[k] = MODIFIERS[k].def;
  if (mod) {
    for (const k in mod) {
      if (k in MODIFIERS) out[k] = (k === 'bans') ? [...mod[k]] : mod[k];
    }
  }
  return out;
}

/** 把"与默认不同"的修饰器转成中文描述行（面板展示用） */
function describeModifiers(mod) {
  const lines = [];
  for (const k in MODIFIERS) {
    const def = MODIFIERS[k];
    const v = mod[k];
    const d = def.def;
    const changed = Array.isArray(d) ? JSON.stringify(v) !== JSON.stringify(d) : v !== d;
    if (changed) lines.push(`${def.desc.split('：')[0]}：${def.fmt(v)}`);
  }
  return lines;
}

/** 把 limits（限制条件）转成中文描述行（面板展示用） */
function describeLimits(limits) {
  const L = limits || {};
  const lines = [];
  if (L.bans && L.bans.length) lines.push(`⛔ 禁用建筑：${L.bans.map(b => BUILDING_NAMES[b] || b).join('、')}`);
  if (L.maxQuadrants) lines.push(`🗺️ 最多解锁 ${L.maxQuadrants} 个象限`);
  if (L.tradeBan) lines.push('🚫 贸易禁运：不可贸易');
  if (L.diploBan) lines.push('🚫 外交孤立：无 AI 殖民地');
  if (L.noDisasters) lines.push('🛡️ 无灾难');
  if (L.noRaids) lines.push('🛡️ 无袭击');
  return lines;
}

/** 建筑 id -> 中文名（limits 展示用；未知 id 回退原文） */
const BUILDING_NAMES = {
  habitat: '居住舱', solar: '太阳能板', miner: '采矿机', pump: '抽水机',
  smelter: '冶炼厂', greenhouse: '温室', waterplant: '水厂', lab: '实验室',
  road: '道路', hospital: '医院', command: '指挥中心', launchpad: '发射台',
  nuclear: '核电站', school: '学校', trade: '贸易站', repair: '维修站',
  weather: '气象站', dome: '生态穹顶', ark: '方舟', shield: '护盾发生器',
  mg_turret: '机枪塔', ms_turret: '导弹塔',
};

// ============================================================================
// 胜利条件求值
// ----------------------------------------------------------------------------
// 条件类型：
//   launchpad            发射台建成            state.hasLaunchpad
//   ark                  方舟建成              state.hasArk
//   survive{minutes}     存活 N 分钟           state.elapsedMs
//   pop{value}           人口达到 N            state.pop
//   building{id,count}   某建筑达到 N 栋        state.buildings[id]
//   buildTotal{count}    建筑总数达到 N        state.buildingsTotal
//   power{value}         总电力达到 N          state.power
//   rank{name}           城市评级达到 name     state.rank（中文名，按 RANK_ORDER 比较）
//   tech{value}          科技点达到 N          state.tech
//   happiness{value}     幸福度达到 N          state.happiness
//   deaths{max}          死亡数不超过 max      state.deaths
//   robots{value}        机器人达到 N          state.robots
//   collected{res,value} 累计采集某资源 N      state.collected[res]
//   and{conditions} / or{conditions} 组合
// ============================================================================

/** 资源 key -> 中文名（胜利进度展示用） */
const RES_NAMES = {
  iron: '铁矿', ice: '冰水', rare: '稀土', water: '水', food: '食物',
  steel: '钢材', tech: '科技点', uranium: '铀矿', he3: '氦3',
};

/** 单个条件求值 -> { done, label, cur, goal } */
function evalCondition(cond, state) {
  const st = state || {};
  const b = st.buildings || {};
  const col = st.collected || {};
  switch (cond.type) {
    case 'launchpad':
      return { done: !!st.hasLaunchpad, label: '建成发射台 🚀', cur: st.hasLaunchpad ? 1 : 0, goal: 1 };
    case 'ark':
      return { done: !!st.hasArk, label: '建成方舟 🛳️', cur: st.hasArk ? 1 : 0, goal: 1 };
    case 'survive': {
      const goal = cond.minutes * MIN;
      const cur = Math.min(st.elapsedMs || 0, goal);
      return { done: (st.elapsedMs || 0) >= goal, label: `存活 ${cond.minutes} 分钟 ⏳`, cur, goal, isTime: true };
    }
    case 'pop':
      return { done: (st.pop || 0) >= cond.value, label: `人口达到 ${cond.value} 🧑‍🚀`, cur: st.pop || 0, goal: cond.value };
    case 'building': {
      const name = BUILDING_NAMES[cond.id] || cond.id;
      const cur = b[cond.id] || 0;
      return { done: cur >= cond.count, label: `${name}×${cond.count}`, cur, goal: cond.count };
    }
    case 'buildTotal': {
      const cur = st.buildingsTotal != null ? st.buildingsTotal
        : Object.values(b).reduce((a, x) => a + x, 0);
      return { done: cur >= cond.count, label: `建筑总数 ${cond.count} 栋 🏗️`, cur, goal: cond.count };
    }
    case 'power':
      return { done: (st.power || 0) >= cond.value, label: `总电力 ${cond.value} ⚡`, cur: st.power || 0, goal: cond.value };
    case 'rank': {
      const curIdx = RANK_ORDER.indexOf(st.rank);
      const goalIdx = RANK_ORDER.indexOf(cond.name);
      const done = curIdx >= 0 && goalIdx >= 0 && curIdx >= goalIdx;
      return { done, label: `城市评级达到「${cond.name}」${(RANK_ORDER[goalIdx] || {}).icon || ''}`, cur: Math.max(0, curIdx), goal: Math.max(0, goalIdx), isRank: true, curName: st.rank || '聚落' };
    }
    case 'tech':
      return { done: (st.tech || 0) >= cond.value, label: `科技点 ${cond.value} 🔬`, cur: st.tech || 0, goal: cond.value };
    case 'happiness':
      return { done: (st.happiness || 0) >= cond.value, label: `幸福度 ${cond.value} 😊`, cur: st.happiness || 0, goal: cond.value };
    case 'deaths': {
      const max = cond.max == null ? 0 : cond.max;
      const done = (st.deaths || 0) <= max;
      const label = max === 0 ? '零死亡 💀' : `死亡不超过 ${max} 人`;
      return { done, label, cur: st.deaths || 0, goal: max, invert: true };
    }
    case 'robots':
      return { done: (st.robots || 0) >= cond.value, label: `机器人 ${cond.value} 🤖`, cur: st.robots || 0, goal: cond.value };
    case 'collected': {
      const name = RES_NAMES[cond.res] || cond.res;
      const cur = col[cond.res] || 0;
      return { done: cur >= cond.value, label: `累计采集${name} ${cond.value}`, cur, goal: cond.value };
    }
    case 'and': {
      const subs = (cond.conditions || []).map(c => evalCondition(c, st));
      return { done: subs.every(s => s.done), label: '全部达成', subs, isGroup: true };
    }
    case 'or': {
      const subs = (cond.conditions || []).map(c => evalCondition(c, st));
      return { done: subs.some(s => s.done), label: '达成任意一项', subs, isGroup: true };
    }
    default:
      return { done: false, label: `未知条件(${cond.type})`, cur: 0, goal: 1 };
  }
}

/** 把条件树拍平成"叶子条件"列表（进度条展示用） */
function flattenProgress(node, out) {
  out = out || [];
  if (node.isGroup && node.subs) {
    node.subs.forEach(s => flattenProgress(s, out));
  } else {
    out.push(node);
  }
  return out;
}

// ============================================================================
// 20 挑战关卡数据
// ----------------------------------------------------------------------------
// rating: 三星评分标准
//   s / a / b   用时阈值（毫秒）：≤s→S 档，≤a→A 档，≤b→B 档，超时→C 档
//   collectPar  采集效率基准（单位/分钟）：用于"资源效率"维度
//   deathsA/B   死亡容忍：≤deathsA→存活A 档，≤deathsB→存活B 档，超了→C 档
//   maxDeaths   死亡硬上限：超过则最高只能拿 B（完美城市等关卡用 0 锁死 S）
// ============================================================================

const ACTS = [
  { id: 1, name: '新兵训练', icon: '🎓', color: '#60a5fa', desc: '学会火星生存的基本功：建造、采集、人口、电力、灾难。' },
  { id: 2, name: '火星试炼', icon: '🔥', color: '#fb923c', desc: '极端开局与特殊规则，考验规划与应变。' },
  { id: 3, name: '地狱边境', icon: '💀', color: '#f87171', desc: '只有真正的指挥官能活着走出来。' },
];

const CAMPAIGN_LEVELS = [

// ==================== 第一幕：新兵训练（教学向） ====================
{
  id: 'boot-build',
  act: 1,
  name: '第一块砖',
  icon: '🧱',
  desc: '限时建造：10 分钟内建成居住舱×3、太阳能板×2。熟悉建造与电力。',
  difficulty: 1,
  initial: { inv: { iron: 80, ice: 30 }, pop: 2, prebuilt: [] },
  limits: { noDisasters: true, noRaids: true },
  modifiers: {},
  victory: {
    conditions: [
      { type: 'building', id: 'habitat', count: 3 },
      { type: 'building', id: 'solar', count: 2 },
    ],
    timeLimitMs: 10 * MIN,
  },
  rating: { s: 4 * MIN, a: 6 * MIN, b: 8 * MIN, collectPar: 12, deathsA: 0, deathsB: 2, maxDeaths: 5 },
  tip: '先放居住舱锁人口上限，再补太阳能。铁矿 80 开局够 5 栋建筑，别乱花。',
},
{
  id: 'boot-race',
  act: 1,
  name: '资源赛跑',
  icon: '⛏️',
  desc: '资源赛跑：8 分钟内累计采集铁矿×150。采矿机是你的腿。',
  difficulty: 1,
  initial: { inv: { iron: 40 }, pop: 2, prebuilt: [] },
  limits: { noDisasters: true, noRaids: true },
  modifiers: {},
  victory: {
    conditions: [{ type: 'collected', res: 'iron', value: 150 }],
    timeLimitMs: 8 * MIN,
  },
  rating: { s: 3 * MIN, a: 5 * MIN, b: 7 * MIN, collectPar: 30, deathsA: 0, deathsB: 1, maxDeaths: 3 },
  tip: '开局 40 铁正好 2 台采矿机，并行采集比单台升级快得多。',
},
{
  id: 'boot-pop',
  act: 1,
  name: '人口冲刺',
  icon: '🧑‍🚀',
  desc: '人口冲刺：12 分钟内人口达到 20。水、食物、电力缺一不可。',
  difficulty: 2,
  initial: { inv: { iron: 60, ice: 40 }, pop: 2, prebuilt: [] },
  limits: { noDisasters: true, noRaids: true },
  modifiers: {},
  victory: {
    conditions: [{ type: 'pop', value: 20 }],
    timeLimitMs: 12 * MIN,
  },
  rating: { s: 6 * MIN, a: 8 * MIN, b: 10 * MIN, collectPar: 15, deathsA: 1, deathsB: 3, maxDeaths: 6 },
  tip: '人口每 20 秒+1，上限看住房。温室+水厂先行，否则人口会卡住。',
},
{
  id: 'boot-power',
  act: 1,
  name: '电力危机',
  icon: '⚡',
  desc: '电力危机：开局 0 电力，发电效率减半。8 分钟内总电力达到 20。',
  difficulty: 2,
  initial: { inv: { iron: 100 }, pop: 4, prebuilt: [] },
  limits: { noDisasters: true, noRaids: true },
  modifiers: { powerMul: 0.5 },  // 发电减半：逼你多造太阳能板
  victory: {
    conditions: [{ type: 'power', value: 20 }],
    timeLimitMs: 8 * MIN,
  },
  rating: { s: 4 * MIN, a: 6 * MIN, b: 7 * MIN, collectPar: 14, deathsA: 0, deathsB: 2, maxDeaths: 5 },
  tip: '电力减半意味着要造双倍太阳能板。先堆 6~8 块板子再考虑别的。',
},
{
  id: 'boot-disaster',
  act: 1,
  name: '第一次灾难',
  icon: '☄️',
  desc: '第一次灾难：陨石频率×2，存活 12 分钟。学会维修与止损。',
  difficulty: 2,
  initial: { inv: { iron: 80, ice: 40 }, pop: 6, prebuilt: ['repair'] },
  limits: { noRaids: true },
  modifiers: { disasterFreqMul: 0.5 },  // 间隔×0.5 = 2 倍频率
  victory: {
    conditions: [{ type: 'survive', minutes: 12 }],
  },
  rating: { s: 12 * MIN, a: 12 * MIN, b: 12 * MIN, collectPar: 10, deathsA: 2, deathsB: 5, maxDeaths: 10 },
  tip: '开局送你一座维修站。陨石预警 12 秒，提前把人口疏散思路记牢：建筑可修，人死了难补。',
},

// ==================== 第二幕：火星试炼（进阶） ====================
{
  id: 'adv-poor',
  act: 2,
  name: '贫瘠开局',
  icon: '🏜️',
  desc: '贫瘠开局：资源采集-50%，初始资源-50%。建成发射台。',
  difficulty: 3,
  initial: { inv: { iron: 30, ice: 15 }, pop: 2, prebuilt: [] },
  limits: {},
  modifiers: { resourceMul: 0.5 },
  victory: {
    conditions: [{ type: 'launchpad' }],
  },
  rating: { s: 35 * MIN, a: 50 * MIN, b: 70 * MIN, collectPar: 8, deathsA: 3, deathsB: 8, maxDeaths: 15 },
  tip: '产量减半，规划要翻倍精细。优先冶炼厂把铁变成钢，发射台要 100 钢。',
},
{
  id: 'adv-island',
  act: 2,
  name: '孤岛',
  icon: '🏝️',
  desc: '孤岛：只能解锁 1 个象限，在巴掌大的地方养出 50 人。',
  difficulty: 3,
  initial: { inv: { iron: 80, ice: 50 }, pop: 4, prebuilt: [] },
  limits: { maxQuadrants: 1 },
  modifiers: {},
  victory: {
    conditions: [{ type: 'pop', value: 50 }],
  },
  rating: { s: 20 * MIN, a: 30 * MIN, b: 45 * MIN, collectPar: 14, deathsA: 3, deathsB: 8, maxDeaths: 15 },
  tip: '地方小就往高密度走：生态穹顶+居住舱 Lv3。单象限资源点有限，贸易站是生命线。',
},
{
  id: 'adv-nolab',
  act: 2,
  name: '科技封锁',
  icon: '🔒',
  desc: '科技封锁：实验室被禁用，科技树锁死。靠蛮力把人口冲到 60。',
  difficulty: 3,
  initial: { inv: { iron: 100, ice: 60 }, pop: 4, prebuilt: [] },
  limits: { bans: ['lab'] },
  modifiers: { labMul: 0 },
  victory: {
    conditions: [{ type: 'pop', value: 60 }],
  },
  rating: { s: 25 * MIN, a: 35 * MIN, b: 50 * MIN, collectPar: 15, deathsA: 3, deathsB: 8, maxDeaths: 15 },
  tip: '没有科技加成，人口增长全靠医院和穹顶硬堆。食物和水产能要超配 30%。',
},
{
  id: 'adv-raid',
  act: 2,
  name: '军事压力',
  icon: '⚔️',
  desc: '军事压力：袭击频率×3、强度×1.5。存活 20 分钟且建筑≥12 栋。',
  difficulty: 4,
  initial: { inv: { iron: 120 }, pop: 6, prebuilt: ['mg_turret', 'mg_turret'] },
  limits: {},
  modifiers: { raidFreqMul: 0.33, raidPowerMul: 1.5 },
  victory: {
    conditions: [
      { type: 'survive', minutes: 20 },
      { type: 'buildTotal', count: 12 },
    ],
  },
  rating: { s: 20 * MIN, a: 20 * MIN, b: 20 * MIN, collectPar: 12, deathsA: 4, deathsB: 10, maxDeaths: 20 },
  tip: '开局送 2 座机枪塔。导弹塔清群怪，机枪塔点杀。预警 20 秒，提前修城墙思路：别把电厂放外围。',
},
{
  id: 'adv-rush',
  act: 2,
  name: '极限扩张',
  icon: '🌆',
  desc: '极限扩张：10 分钟内把聚落干到「都市」（人口 30）。超时判负。',
  difficulty: 4,
  initial: { inv: { iron: 120, ice: 60 }, pop: 4, prebuilt: [] },
  limits: { noDisasters: true, noRaids: true },
  modifiers: { resourceMul: 1.5 },
  victory: {
    conditions: [{ type: 'rank', name: '都市' }],
    timeLimitMs: 10 * MIN,
  },
  rating: { s: 6 * MIN, a: 8 * MIN, b: 9.5 * MIN, collectPar: 25, deathsA: 1, deathsB: 3, maxDeaths: 8 },
  tip: '10 分钟 30 人 = 每 20 秒不能断增长。住房、水、食物三线并行，别等。',
},
{
  id: 'adv-embargo',
  act: 2,
  name: '贸易禁运',
  icon: '🚫',
  desc: '贸易禁运：贸易站被禁用，一切靠自给自足。建成发射台。',
  difficulty: 4,
  initial: { inv: { iron: 60, ice: 40 }, pop: 4, prebuilt: [] },
  limits: { tradeBan: true, bans: ['trade'] },
  modifiers: { resourceMul: 1.2 },  // 自给补偿：采集+20%
  victory: {
    conditions: [{ type: 'launchpad' }],
  },
  rating: { s: 40 * MIN, a: 55 * MIN, b: 75 * MIN, collectPar: 10, deathsA: 3, deathsB: 8, maxDeaths: 15 },
  tip: '没有贸易补稀土，稀土采集机要早铺。100 钢+30 科技全靠自己，一步都不能错。',
},
{
  id: 'adv-under',
  act: 2,
  name: '地下开局',
  icon: '🕳️',
  desc: '地下开局：地面施工困难，建造费用×1.5。人口达到 40。',
  difficulty: 3,
  initial: { inv: { iron: 90, ice: 50 }, pop: 4, prebuilt: [] },
  limits: {},
  modifiers: { buildCostMul: 1.5 },
  victory: {
    conditions: [{ type: 'pop', value: 40 }],
  },
  rating: { s: 22 * MIN, a: 32 * MIN, b: 45 * MIN, collectPar: 12, deathsA: 3, deathsB: 8, maxDeaths: 15 },
  tip: '贵 50% 意味着每栋建筑都要算 ROI。先保证生存链，再谈扩张。升级比新建划算。',
},
{
  id: 'adv-ocean',
  act: 2,
  name: '海洋开局',
  icon: '🌊',
  desc: '海洋开局：冰水开局×200，铁矿采集-50%。水厂×2、温室×2，人口 30。',
  difficulty: 3,
  initial: { inv: { iron: 40, ice: 200, water: 100 }, pop: 4, prebuilt: [] },
  limits: {},
  modifiers: { resourceMul: 0.5 },  // 铁矿采集减半（水资源管够）
  victory: {
    conditions: [
      { type: 'building', id: 'waterplant', count: 2 },
      { type: 'building', id: 'greenhouse', count: 2 },
      { type: 'pop', value: 30 },
    ],
  },
  rating: { s: 18 * MIN, a: 26 * MIN, b: 38 * MIN, collectPar: 10, deathsA: 3, deathsB: 8, maxDeaths: 15 },
  tip: '水不是问题，铁是。开局 200 冰直接转水卖时间，采矿机能铺几台铺几台。',
},
{
  id: 'adv-combo',
  act: 2,
  name: '灾难连击',
  icon: '🌪️',
  desc: '灾难连击：灾难频率×4，沙尘暴+陨石+太阳风暴轮番上阵。存活 15 分钟。',
  difficulty: 4,
  initial: { inv: { iron: 100, ice: 60 }, pop: 8, prebuilt: ['weather', 'repair'] },
  limits: { noRaids: true },
  modifiers: { disasterFreqMul: 0.25 },  // 间隔×0.25 = 4 倍频率
  victory: {
    conditions: [{ type: 'survive', minutes: 15 }],
  },
  rating: { s: 15 * MIN, a: 15 * MIN, b: 15 * MIN, collectPar: 10, deathsA: 5, deathsB: 12, maxDeaths: 25 },
  tip: '开局送气象站+维修站。预警就是生命：沙尘暴前切核电，陨石后立刻修。别贪扩张。',
},
{
  id: 'adv-alone',
  act: 2,
  name: '外交孤立',
  icon: '🛰️',
  desc: '外交孤立：没有 AI 殖民地，没有条约，没有援助。采集+20% 补偿，建成发射台。',
  difficulty: 4,
  initial: { inv: { iron: 60, ice: 40 }, pop: 4, prebuilt: [] },
  limits: { diploBan: true },
  modifiers: { resourceMul: 1.2 },
  victory: {
    conditions: [{ type: 'launchpad' }],
  },
  rating: { s: 40 * MIN, a: 55 * MIN, b: 75 * MIN, collectPar: 10, deathsA: 3, deathsB: 8, maxDeaths: 15 },
  tip: '没有军事同盟，袭击只能自己扛。防御塔预算要提前留 20%。',
},

// ==================== 第三幕：地狱边境 ====================
{
  id: 'hell-all',
  act: 3,
  name: '全灾难',
  icon: '🌋',
  desc: '全灾难：灾难频率×3、袭击频率×2、袭击强度×1.5。存活 20 分钟。',
  difficulty: 5,
  initial: { inv: { iron: 150, ice: 80 }, pop: 10, prebuilt: ['weather', 'repair', 'shield'] },
  limits: {},
  modifiers: { disasterFreqMul: 0.33, raidFreqMul: 0.5, raidPowerMul: 1.5 },
  victory: {
    conditions: [{ type: 'survive', minutes: 20 }],
  },
  rating: { s: 20 * MIN, a: 20 * MIN, b: 20 * MIN, collectPar: 8, deathsA: 8, deathsB: 18, maxDeaths: 35 },
  tip: '开局送气象站+维修站+护盾。这一关没有"发育"，只有"止血"。电力冗余 50% 是底线。',
},
{
  id: 'hell-robots',
  act: 3,
  name: '零人口开局',
  icon: '🤖',
  desc: '零人口开局：0 个活人，全机器人干活。建造费×0.8，建成发射台。',
  difficulty: 5,
  initial: { inv: { iron: 120, ice: 60 }, pop: 0, prebuilt: [] },
  limits: {},
  modifiers: { popStart: 0, popGrowthMul: 0, buildCostMul: 0.8 },
  victory: {
    conditions: [
      { type: 'launchpad' },
      { type: 'robots', value: 10 },
    ],
  },
  rating: { s: 45 * MIN, a: 60 * MIN, b: 85 * MIN, collectPar: 10, deathsA: 0, deathsB: 0, maxDeaths: 0 },
  tip: '没有人口增长，也就没有生存消耗。机器人不吃不喝，全力铺采集+冶炼，速冲 100 钢。',
},
{
  id: 'hell-solo',
  act: 3,
  name: '单人通关',
  icon: '🧍',
  desc: '单人通关：人口上限锁死 10 人。用 10 个人建成发射台。',
  difficulty: 5,
  initial: { inv: { iron: 80, ice: 40 }, pop: 2, prebuilt: [] },
  limits: {},
  modifiers: { popCap: 10 },
  victory: {
    conditions: [{ type: 'launchpad' }],
  },
  rating: { s: 50 * MIN, a: 70 * MIN, b: 95 * MIN, collectPar: 8, deathsA: 1, deathsB: 3, maxDeaths: 5 },
  tip: '10 人意味着高级建筑的人口需求是紧箍咒。自动化（运输车/物流）替代人力，死一个就少 10% 劳动力。',
},
{
  id: 'hell-speed',
  act: 3,
  name: '光速胜利',
  icon: '🚀',
  desc: '光速胜利：15 分钟内建成发射台。资源×2，无灾难无袭击，纯粹的速度。',
  difficulty: 5,
  initial: { inv: { iron: 150, ice: 80 }, pop: 6, prebuilt: [] },
  limits: { noDisasters: true, noRaids: true },
  modifiers: { resourceMul: 2.0 },
  victory: {
    conditions: [{ type: 'launchpad' }],
    timeLimitMs: 15 * MIN,
  },
  rating: { s: 9 * MIN, a: 12 * MIN, b: 14 * MIN, collectPar: 30, deathsA: 1, deathsB: 3, maxDeaths: 8 },
  tip: '15 分钟 100 钢+30 科技：冶炼厂开局 3 座并行，实验室 2 座，人口 30 保底。一秒都别浪费。',
},
{
  id: 'hell-utopia',
  act: 3,
  name: '完美城市',
  icon: '🌈',
  desc: '完美城市：人口 100、幸福度 95、零死亡，三者同时达成。终极考验。',
  difficulty: 5,
  initial: { inv: { iron: 100, ice: 60 }, pop: 6, prebuilt: [] },
  limits: { noRaids: true },
  modifiers: { disasterFreqMul: 0.5, deathMul: 0.5 },
  victory: {
    conditions: [
      { type: 'pop', value: 100 },
      { type: 'happiness', value: 95 },
      { type: 'deaths', max: 0 },
    ],
  },
  rating: { s: 60 * MIN, a: 80 * MIN, b: 110 * MIN, collectPar: 12, deathsA: 0, deathsB: 0, maxDeaths: 0 },
  tip: '死一个人就重来。医院+护盾+维修站拉满，灾难预警一响就停工保人。幸福度靠穹顶和生态圈。',
},

];  // CAMPAIGN_LEVELS 结束

/** 关卡 id -> 关卡对象 */
const LEVEL_MAP = {};
CAMPAIGN_LEVELS.forEach(lv => { LEVEL_MAP[lv.id] = lv; });

/** 关卡 id -> 在数组中的索引（解锁进度用） */
const LEVEL_INDEX = {};
CAMPAIGN_LEVELS.forEach((lv, i) => { LEVEL_INDEX[lv.id] = i; });

// ============================================================================
// 评分系统：按用时 / 资源效率 / 人口存活算 S / A / B / C
// ----------------------------------------------------------------------------
// run = {
//   elapsedMs,      本次用时（毫秒）
//   deaths,         死亡人数
//   collectedTotal, 本次累计采集资源总量（单位）
// }
// 三个维度各 0~3 分，取平均：
//   ≥2.6 → S，≥1.9 → A，≥1.1 → B，否则 C
// 硬规则：死亡超过 rating.maxDeaths → 最高 B；超时未通关不评分。
// ============================================================================

function rateRun(level, run) {
  const r = level.rating || {};
  const elapsed = Math.max(0, run.elapsedMs || 0);
  const deaths = Math.max(0, run.deaths || 0);

  // —— 维度 1：用时（越快分越高）——
  let timeScore;
  if (elapsed <= (r.s || Infinity)) timeScore = 3;
  else if (elapsed <= (r.a || Infinity)) timeScore = 2;
  else if (elapsed <= (r.b || Infinity)) timeScore = 1;
  else timeScore = 0;

  // —— 维度 2：人口存活 ——
  let survScore;
  if (deaths <= (r.deathsA == null ? 0 : r.deathsA)) survScore = 3;
  else if (deaths <= (r.deathsB == null ? 2 : r.deathsB)) survScore = 2;
  else if (deaths <= (r.maxDeaths == null ? 10 : r.maxDeaths)) survScore = 1;
  else survScore = 0;

  // —— 维度 3：资源效率（单位/分钟 vs 关卡基准）——
  let effScore = 2;  // 无基准的关卡取中性分
  if (r.collectPar && r.collectPar > 0 && elapsed > 0) {
    const perMin = (run.collectedTotal || 0) / (elapsed / MIN);
    const ratio = perMin / r.collectPar;
    if (ratio >= 1.5) effScore = 3;
    else if (ratio >= 1.0) effScore = 2;
    else if (ratio >= 0.6) effScore = 1;
    else effScore = 0;
  }

  const avg = (timeScore + survScore + effScore) / 3;
  let grade;
  if (avg >= 2.6) grade = 'S';
  else if (avg >= 1.9) grade = 'A';
  else if (avg >= 1.1) grade = 'B';
  else grade = 'C';

  // 硬规则：死亡超标 → 最高 B
  if (r.maxDeaths != null && deaths > r.maxDeaths && GRADE_SCORE[grade] > GRADE_SCORE.B) {
    grade = 'B';
  }
  return { grade, detail: { timeScore, survScore, effScore, avg: Math.round(avg * 100) / 100 } };
}

/** 评分徽章 HTML（小圆点 + 字母） */
function gradeBadge(grade) {
  if (!grade) return '<span class="cp-grade cp-grade-none">未通关</span>';
  const c = GRADE_COLORS[grade] || '#9ca3af';
  return `<span class="cp-grade" style="color:${c};border-color:${c}">${grade}</span>`;
}

/** 难度星星 HTML */
function diffStars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

// ============================================================================
// CampaignManager：战役进度 / 关卡启动 / 胜利判定 / 评分 / 存档
// ============================================================================

class CampaignManager {
  constructor() {
    // 运行态
    this.currentId = null;      // 当前进行的关卡 id
    this.runStartMs = 0;        // 本次挑战开始时间戳
    this.runDeaths0 = 0;        // 开始时的死亡数（用于计算本次死亡）
    this.runCollected0 = 0;     // 开始时的累计采集量
    this.finished = false;      // 本次是否已结算（胜/负）
    // 存档态
    this.unlocked = 0;          // 已解锁到的关卡索引（0-based，可玩 0..unlocked）
    this.best = {};             // { levelId: { grade, timeMs, deaths } }
    this.completedAt = {};      // { levelId: timestamp }
    this.load();
  }

  // ---------------- 存档 ----------------

  /** 默认存档对象 */
  static defaultSave() {
    return { unlocked: 0, best: {}, completedAt: {} };
  }

  /** 从 localStorage 读取（Node/无 localStorage 环境下降级为内存默认） */
  load() {
    try {
      if (typeof localStorage === 'undefined') return false;
      const raw = localStorage.getItem(CAMPAIGN_SAVE_KEY);
      if (!raw) return false;
      const d = JSON.parse(raw);
      this.unlocked = Math.max(0, Math.min(CAMPAIGN_LEVELS.length - 1, d.unlocked | 0));
      this.best = d.best || {};
      this.completedAt = d.completedAt || {};
      return true;
    } catch (e) {
      return false;
    }
  }

  /** 写入 localStorage */
  save() {
    try {
      if (typeof localStorage === 'undefined') return false;
      localStorage.setItem(CAMPAIGN_SAVE_KEY, JSON.stringify({
        unlocked: this.unlocked,
        best: this.best,
        completedAt: this.completedAt,
      }));
      return true;
    } catch (e) {
      return false;
    }
  }

  /** 序列化（供外部存档系统调用） */
  serialize() {
    return {
      currentId: this.currentId,
      runStartMs: this.runStartMs,
      unlocked: this.unlocked,
      best: this.best,
      completedAt: this.completedAt,
    };
  }

  /** 反序列化 */
  deserialize(d) {
    if (!d) return;
    this.currentId = d.currentId || null;
    this.runStartMs = d.runStartMs || 0;
    this.unlocked = d.unlocked | 0 || 0;
    this.best = d.best || {};
    this.completedAt = d.completedAt || {};
  }

  /** 清空战役存档（重新开始） */
  reset() {
    this.currentId = null;
    this.finished = false;
    this.unlocked = 0;
    this.best = {};
    this.completedAt = {};
    this.save();
  }

  // ---------------- 关卡查询 ----------------

  /** 全部关卡（带幕信息） */
  get levels() { return CAMPAIGN_LEVELS; }

  /** 取关卡对象（不存在返回 null） */
  getLevel(id) { return LEVEL_MAP[id] || null; }

  /** 关卡索引（不存在返回 -1） */
  levelIndex(id) { return (id in LEVEL_INDEX) ? LEVEL_INDEX[id] : -1; }

  /** 是否已解锁 */
  isUnlocked(id) {
    const i = this.levelIndex(id);
    return i >= 0 && i <= this.unlocked;
  }

  /** 是否已通关 */
  isCompleted(id) { return !!this.completedAt[id]; }

  /** 某关最佳成绩 */
  getBest(id) { return this.best[id] || null; }

  /** 总体进度 { done, total, pct } */
  progress() {
    const done = CAMPAIGN_LEVELS.filter(lv => this.completedAt[lv.id]).length;
    return { done, total: CAMPAIGN_LEVELS.length, pct: Math.round(done / CAMPAIGN_LEVELS.length * 100) };
  }

  /** 按幕分组的关卡（面板渲染用） */
  levelsByAct() {
    return ACTS.map(act => ({
      act,
      levels: CAMPAIGN_LEVELS
        .map((lv, i) => ({ lv, i }))
        .filter(x => x.lv.act === act.id),
    }));
  }

  // ---------------- startLevel(id)：生成初始状态 ----------------
  // 返回供主游戏加载的初始状态对象：
  // {
  //   levelId, levelName, startTimeMs,
  //   inv:        初始资源背包（各资源数量）
  //   popStart,  初始人口
  //   prebuilt:  预置建筑 id 列表
  //   modifiers: 解析后的完整修饰器（主游戏各系统读取）
  //   limits:    限制条件原文
  //   victory:   胜利条件原文（供 HUD 展示目标）
  // }
  // 未解锁 / 不存在 -> 返回 null。

  startLevel(id) {
    const lv = this.getLevel(id);
    if (!lv) return null;
    if (!this.isUnlocked(id)) return null;

    const inv = {
      iron: 0, ice: 0, rare: 0, water: 0, food: 0,
      steel: 0, tech: 0, uranium: 0, he3: 0,
    };
    const init = lv.initial || {};
    if (init.inv) {
      for (const k in init.inv) {
        if (k in inv) inv[k] = init.inv[k];
      }
    }

    const modifiers = resolveModifiers(lv.modifiers);
    // limits 里的开关同样并入 modifiers，方便主游戏只读一处
    const limits = lv.limits || {};
    if (limits.noDisasters) modifiers.noDisasters = true;
    if (limits.noRaids) modifiers.noRaids = true;
    if (limits.tradeBan) modifiers.tradeBan = true;
    if (limits.diploBan) modifiers.diploBan = true;
    if (limits.maxQuadrants) modifiers.maxQuadrants = limits.maxQuadrants;
    if (limits.bans && limits.bans.length) modifiers.bans = [...limits.bans];

    this.currentId = id;
    this.runStartMs = Date.now();
    this.finished = false;
    this.runDeaths0 = 0;
    this.runCollected0 = 0;

    return {
      levelId: id,
      levelName: `${lv.icon} ${lv.name}`,
      startTimeMs: this.runStartMs,
      inv,
      popStart: (modifiers.popStart != null) ? modifiers.popStart : (init.pop != null ? init.pop : 2),
      prebuilt: [...(init.prebuilt || [])],
      modifiers,
      limits,
      victory: lv.victory,
      rating: lv.rating,
      tip: lv.tip,
    };
  }

  /** 记录本次挑战的死亡/采集基线（主游戏在加载完初始状态后调用一次） */
  markRunBaseline(deaths, collectedTotal) {
    this.runDeaths0 = deaths | 0;
    this.runCollected0 = collectedTotal | 0;
  }

  // ---------------- checkVictory(id, state)：胜利判定 ----------------
  // state（主游戏每 tick 传入的快照）：
  // {
  //   elapsedMs, pop, buildings:{id:count}, buildingsTotal, power, rank,
  //   tech, happiness, deaths, robots, hasLaunchpad, hasArk, collected:{res:n}
  // }
  // 返回 { status:'win'|'fail'|'ongoing', reason, progress:[{label,cur,goal,done}] }
  // 同一关卡只结算一次（finished 锁）。

  checkVictory(id, state) {
    const lv = this.getLevel(id);
    if (!lv) return { status: 'ongoing', reason: '未知关卡', progress: [] };
    const st = state || {};
    const v = lv.victory || {};
    const elapsed = st.elapsedMs != null ? st.elapsedMs
      : (this.runStartMs ? Date.now() - this.runStartMs : 0);

    // 1) 超时判负（限时关）
    if (v.timeLimitMs && elapsed > v.timeLimitMs) {
      const res = { status: 'fail', reason: `⏰ 时间到！未能在 ${fmtTime(v.timeLimitMs)} 内完成目标。`, progress: [] };
      if (id === this.currentId) this.finished = true;
      return res;
    }

    // 2) 条件求值
    const root = evalCondition({ type: 'and', conditions: v.conditions || [] }, { ...st, elapsedMs: elapsed });
    const progress = flattenProgress(root, []);

    if (root.done) {
      if (id === this.currentId) this.finished = true;
      return { status: 'win', reason: `🎉 挑战成功：「${lv.name}」！`, progress };
    }
    return { status: 'ongoing', reason: '', progress };
  }

  // ---------------- 结算与评分 ----------------
  // run = { elapsedMs, deaths, collectedTotal }（本次增量，主游戏在胜利时传入）
  // 返回 { grade, detail, newBest, newlyUnlocked }

  completeLevel(id, run) {
    const lv = this.getLevel(id);
    if (!lv) return null;
    const r = run || {};
    const { grade, detail } = rateRun(lv, {
      elapsedMs: r.elapsedMs != null ? r.elapsedMs : (Date.now() - this.runStartMs),
      deaths: Math.max(0, (r.deaths | 0) - this.runDeaths0),
      collectedTotal: Math.max(0, (r.collectedTotal | 0) - this.runCollected0),
    });

    const prev = this.best[id];
    const newBest = !prev || GRADE_SCORE[grade] > GRADE_SCORE[prev.grade] ||
      (grade === prev.grade && (r.elapsedMs || 0) < (prev.timeMs || Infinity));
    if (newBest) {
      this.best[id] = { grade, timeMs: r.elapsedMs | 0, deaths: Math.max(0, (r.deaths | 0) - this.runDeaths0) };
    }

    const firstClear = !this.completedAt[id];
    this.completedAt[id] = Date.now();

    // 解锁下一关
    let newlyUnlocked = null;
    const idx = this.levelIndex(id);
    if (idx >= 0 && idx === this.unlocked && idx + 1 < CAMPAIGN_LEVELS.length) {
      this.unlocked = idx + 1;
      newlyUnlocked = CAMPAIGN_LEVELS[idx + 1].id;
    }

    this.save();
    if (id === this.currentId) this.finished = true;
    return { grade, detail, newBest, firstClear, newlyUnlocked };
  }

  /** 失败结算（仅标记本轮结束，不影响存档） */
  failLevel(id) {
    if (id === this.currentId) this.finished = true;
    return { status: 'fail' };
  }

  /** 便捷：直接评分（不写存档），面板"模拟评分"或测试用 */
  rateLevel(id, run) {
    const lv = this.getLevel(id);
    if (!lv) return null;
    return rateRun(lv, run || {});
  }

  /** 当前关卡剩余时间（限时关卡，毫秒；非限时返回 null） */
  timeLeft(id) {
    const lv = this.getLevel(id || this.currentId);
    if (!lv || !lv.victory || !lv.victory.timeLimitMs) return null;
    const elapsed = this.runStartMs ? Date.now() - this.runStartMs : 0;
    return Math.max(0, lv.victory.timeLimitMs - elapsed);
  }
}

// ============================================================================
// UI：renderCampaignPanel() — 深色主题战役面板 HTML
// ----------------------------------------------------------------------------
// 返回完整 HTML 字符串（含 <style>），game.js 可直接塞进弹窗/面板容器。
// 开始按钮：<button class="cp-start" data-level-id="...">，由 game.js 绑定点击。
// ============================================================================

const CP_CSS = `
.cp-wrap{font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;
  background:#0d1117;color:#e6edf3;border-radius:12px;padding:16px;max-width:860px;margin:0 auto;}
.cp-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}
.cp-title{font-size:20px;font-weight:700;}
.cp-sub{font-size:12px;color:#8b949e;margin-top:2px;}
.cp-prog{display:flex;align-items:center;gap:8px;font-size:13px;color:#8b949e;}
.cp-progbar{width:140px;height:8px;background:#21262d;border-radius:4px;overflow:hidden;}
.cp-progbar>i{display:block;height:100%;background:linear-gradient(90deg,#f0a35e,#f778ba);border-radius:4px;}
.cp-act{margin:18px 0 6px;padding:8px 12px;border-radius:8px;background:#161b22;
  border-left:4px solid #888;display:flex;align-items:center;gap:10px;}
.cp-act h3{margin:0;font-size:16px;}
.cp-act p{margin:0;font-size:12px;color:#8b949e;}
.cp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px;}
.cp-card{background:#161b22;border:1px solid #30363d;border-radius:10px;padding:12px;
  position:relative;transition:border-color .15s,transform .15s;}
.cp-card:hover{border-color:#58a6ff;transform:translateY(-1px);}
.cp-card.locked{opacity:.55;filter:grayscale(.4);}
.cp-card.done{border-color:#3fb950;}
.cp-chead{display:flex;align-items:center;gap:8px;margin-bottom:6px;}
.cp-icon{font-size:22px;}
.cp-name{font-weight:700;font-size:15px;flex:1;}
.cp-diff{font-size:11px;color:#f0a35e;letter-spacing:1px;}
.cp-desc{font-size:12.5px;color:#c9d1d9;line-height:1.5;margin:6px 0;min-height:38px;}
.cp-sec{font-size:11.5px;color:#8b949e;line-height:1.6;margin:4px 0;}
.cp-sec b{color:#e6edf3;font-weight:600;}
.cp-sec .k{color:#79c0ff;}
.cp-mods{font-size:11.5px;color:#d29922;line-height:1.6;margin:4px 0;}
.cp-limits{font-size:11.5px;color:#f778ba;line-height:1.6;margin:4px 0;}
.cp-goal{font-size:12px;color:#3fb950;margin:6px 0;line-height:1.5;}
.cp-rate{font-size:11.5px;color:#8b949e;margin:4px 0;line-height:1.6;}
.cp-foot{display:flex;align-items:center;justify-content:space-between;margin-top:10px;}
.cp-grade{display:inline-block;min-width:26px;text-align:center;font-weight:800;font-size:14px;
  border:2px solid;border-radius:8px;padding:1px 8px;}
.cp-grade-none{font-size:11px;color:#6e7681;border:1px dashed #30363d;border-radius:8px;padding:2px 8px;}
.cp-start{background:#238636;color:#fff;border:none;border-radius:8px;padding:7px 18px;
  font-size:13px;font-weight:700;cursor:pointer;}
.cp-start:hover{background:#2ea043;}
.cp-start:disabled{background:#21262d;color:#6e7681;cursor:not-allowed;}
.cp-lock{position:absolute;top:10px;right:10px;font-size:18px;}
.cp-tip{font-size:11px;color:#6e7681;margin-top:6px;line-height:1.5;border-top:1px dashed #30363d;padding-top:6px;}
.cp-best{font-size:11px;color:#8b949e;}
`;

/** 单个关卡卡片 HTML */
function renderLevelCard(lv, idx, mgr) {
  const unlocked = mgr.isUnlocked(lv.id);
  const done = mgr.isCompleted(lv.id);
  const best = mgr.getBest(lv.id);
  const act = ACTS.find(a => a.id === lv.act) || ACTS[0];

  // 初始资源行
  const inv = (lv.initial && lv.initial.inv) || {};
  const invParts = Object.keys(inv).filter(k => inv[k] > 0)
    .map(k => `${RES_NAMES[k] || k}×${inv[k]}`);
  if (lv.initial && lv.initial.pop) invParts.push(`人口×${lv.initial.pop}`);
  if (lv.initial && lv.initial.prebuilt && lv.initial.prebuilt.length) {
    invParts.push(`预置:${lv.initial.prebuilt.map(b => BUILDING_NAMES[b] || b).join('、')}`);
  }

  // 胜利条件行（用 evalCondition 生成中文 label）
  const vroot = evalCondition({ type: 'and', conditions: (lv.victory && lv.victory.conditions) || [] }, {});
  const goals = flattenProgress(vroot, []).map(p => esc(p.label)).join(' ＋ ');
  const timeLimit = lv.victory && lv.victory.timeLimitMs
    ? ` ⏰限时${fmtTime(lv.victory.timeLimitMs)}` : '';

  // 修饰器 / 限制行
  const mods = describeModifiers(resolveModifiers(lv.modifiers)).map(esc).join('<br>');
  const limits = describeLimits(lv.limits).map(esc).join('<br>');

  // 评分标准行
  const r = lv.rating || {};
  const rateLine = `S≤${fmtTime(r.s)} / A≤${fmtTime(r.a)} / B≤${fmtTime(r.b)}${r.maxDeaths === 0 ? ' / 必须零死亡' : ''}`;

  const cardCls = ['cp-card', unlocked ? '' : 'locked', done ? 'done' : ''].join(' ').trim();
  return `
  <div class="${cardCls}" data-level="${esc(lv.id)}">
    ${unlocked ? '' : '<div class="cp-lock">🔒</div>'}
    <div class="cp-chead">
      <span class="cp-icon">${esc(lv.icon)}</span>
      <span class="cp-name">${esc(lv.name)}</span>
      <span class="cp-diff" title="难度">${diffStars(lv.difficulty)}</span>
    </div>
    <div class="cp-desc">${esc(lv.desc)}</div>
    <div class="cp-sec"><b>🎒 初始</b>：<span class="k">${invParts.length ? esc(invParts.join('、')) : '标准开局'}</span></div>
    ${limits ? `<div class="cp-limits">${limits}</div>` : ''}
    ${mods ? `<div class="cp-mods">🔧 ${mods}</div>` : ''}
    <div class="cp-goal"><b>🏆 目标</b>：${goals}${esc(timeLimit)}</div>
    <div class="cp-rate"><b>⭐ 评分</b>：${esc(rateLine)}</div>
    <div class="cp-tip">💡 ${esc(lv.tip || '')}</div>
    <div class="cp-foot">
      <span>${gradeBadge(best && best.grade)}</span>
      ${best ? `<span class="cp-best">最佳 ${fmtTime(best.timeMs)}</span>` : '<span></span>'}
      <button class="cp-start" data-level-id="${esc(lv.id)}" ${unlocked ? '' : 'disabled'}>
        ${done ? '再来一次' : (unlocked ? '开始挑战' : '未解锁')}
      </button>
    </div>
  </div>`;
}

/** 战役面板 HTML（深色主题）。不传 manager 则用默认进度（全锁/首关解锁）。 */
function renderCampaignPanel(manager) {
  const mgr = manager || new CampaignManager();
  const p = mgr.progress();
  const actsHtml = mgr.levelsByAct().map(({ act, levels }) => `
    <div class="cp-act" style="border-left-color:${act.color}">
      <span style="font-size:20px">${act.icon}</span>
      <div><h3>第${['一', '二', '三'][act.id - 1]}幕 · ${esc(act.name)}</h3><p>${esc(act.desc)}</p></div>
    </div>
    <div class="cp-grid">
      ${levels.map(({ lv, i }) => renderLevelCard(lv, i, mgr)).join('')}
    </div>`).join('');

  return `<style>${CP_CSS}</style>
<div class="cp-wrap">
  <div class="cp-head">
    <div>
      <div class="cp-title">🚀 星港挑战战役</div>
      <div class="cp-sub">20 个挑战关卡 · 通关解锁下一关 · 按用时/效率/存活评 S/A/B/C</div>
    </div>
    <div class="cp-prog">
      <span>${p.done}/${p.total}（${p.pct}%）</span>
      <span class="cp-progbar"><i style="width:${p.pct}%"></i></span>
    </div>
  </div>
  ${actsHtml}
</div>`;
}

// ============================================================================
// 导出（Node / 浏览器通用）
// ============================================================================

const CampaignExports = {
  CAMPAIGN_SAVE_KEY,
  MODIFIERS,
  ACTS,
  CAMPAIGN_LEVELS,
  LEVEL_MAP,
  GRADE_ORDER,
  GRADE_COLORS,
  RANK_ORDER,
  MIN,
  resolveModifiers,
  describeModifiers,
  describeLimits,
  evalCondition,
  flattenProgress,
  rateRun,
  gradeBadge,
  diffStars,
  fmtTime,
  esc,
  renderLevelCard,
  renderCampaignPanel,
  CampaignManager,
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CampaignExports;
}
if (typeof window !== 'undefined') {
  window.Campaign = CampaignExports;
}

// ============================================================================
// 关卡数据自检 validateLevels()：校验 20 关数据的完整性
// ----------------------------------------------------------------------------
// 检查项：id 唯一 / 必填字段齐全 / 胜利条件类型合法 / 评分阈值 s<a<b /
//         引用建筑 id 真实存在 / 修饰器 key 合法。
// 返回 { ok, errors:[...] }。建议 game.js 在开发模式下调用一次。
// ============================================================================

const VALID_COND_TYPES = new Set([
  'launchpad', 'ark', 'survive', 'pop', 'building', 'buildTotal',
  'power', 'rank', 'tech', 'happiness', 'deaths', 'robots', 'collected',
  'and', 'or',
]);

function validateCondition(cond, path, errors) {
  if (!cond || typeof cond !== 'object') {
    errors.push(`${path}：条件不是对象`);
    return;
  }
  if (!VALID_COND_TYPES.has(cond.type)) {
    errors.push(`${path}：未知条件类型 "${cond.type}"`);
    return;
  }
  if ((cond.type === 'and' || cond.type === 'or')) {
    (cond.conditions || []).forEach((c, i) => validateCondition(c, `${path}.${cond.type}[${i}]`, errors));
  }
  if (cond.type === 'building' && !(cond.id in BUILDING_NAMES)) {
    errors.push(`${path}：未知建筑 id "${cond.id}"`);
  }
  if (cond.type === 'rank' && !RANK_ORDER.includes(cond.name)) {
    errors.push(`${path}：未知城市评级 "${cond.name}"`);
  }
  if (cond.type === 'collected' && !(cond.res in RES_NAMES)) {
    errors.push(`${path}：未知资源 "${cond.res}"`);
  }
}

function validateLevels() {
  const errors = [];
  const seen = new Set();

  CAMPAIGN_LEVELS.forEach((lv, i) => {
    const tag = `关卡[${i}](${lv.id || '?'})`;
    // id 唯一
    if (!lv.id) errors.push(`${tag}：缺少 id`);
    else if (seen.has(lv.id)) errors.push(`${tag}：id 重复`);
    else seen.add(lv.id);
    // 必填字段
    ['act', 'name', 'icon', 'desc', 'difficulty', 'victory', 'rating', 'tip'].forEach(k => {
      if (lv[k] == null || lv[k] === '') errors.push(`${tag}：缺少字段 "${k}"`);
    });
    if (![1, 2, 3].includes(lv.act)) errors.push(`${tag}：act 非法 (${lv.act})`);
    if (!(lv.difficulty >= 1 && lv.difficulty <= 5)) errors.push(`${tag}：difficulty 非法`);
    // 胜利条件
    const v = lv.victory || {};
    if (!Array.isArray(v.conditions) || v.conditions.length === 0) {
      errors.push(`${tag}：victory.conditions 为空`);
    } else {
      v.conditions.forEach((c, ci) => validateCondition(c, `${tag}.victory[${ci}]`, errors));
    }
    // 评分阈值顺序
    const r = lv.rating || {};
    if (!(r.s > 0 && r.s <= r.a && r.a <= r.b)) {
      errors.push(`${tag}：rating 阈值顺序非法 (s=${r.s}, a=${r.a}, b=${r.b})`);
    }
    // 修饰器 key 合法
    Object.keys(lv.modifiers || {}).forEach(k => {
      if (!(k in MODIFIERS)) errors.push(`${tag}：未知修饰器 "${k}"`);
    });
    // limits.bans 建筑存在性
    ((lv.limits || {}).bans || []).forEach(b => {
      if (!(b in BUILDING_NAMES)) errors.push(`${tag}：bans 未知建筑 "${b}"`);
    });
    // prebuilt 建筑存在性
    (((lv.initial || {}).prebuilt) || []).forEach(b => {
      if (!(b in BUILDING_NAMES)) errors.push(`${tag}：prebuilt 未知建筑 "${b}"`);
    });
  });

  // 幕分布校验：5 / 10 / 5
  [1, 2, 3].forEach(a => {
    const n = CAMPAIGN_LEVELS.filter(lv => lv.act === a).length;
    const expect = { 1: 5, 2: 10, 3: 5 }[a];
    if (n !== expect) errors.push(`第${a}幕关卡数=${n}，期望 ${expect}`);
  });
  if (CAMPAIGN_LEVELS.length !== 20) errors.push(`关卡总数=${CAMPAIGN_LEVELS.length}，期望 20`);

  return { ok: errors.length === 0, errors };
}

// ============================================================================
// 胜利条件文本化 + 关卡简报 UI
// ----------------------------------------------------------------------------
// describeVictory(level)：返回中文目标行数组（HUD / 简报用）。
// renderLevelBrief(manager, id)：单个关卡的详情面板 HTML（深色主题）。
// progressBarHTML(p)：胜利进度条 HTML（p = evalCondition 叶子节点）。
// ============================================================================

/** 胜利条件 -> 中文目标行（含限时） */
function describeVictory(lv) {
  const v = (lv && lv.victory) || {};
  const root = evalCondition({ type: 'and', conditions: v.conditions || [] }, {});
  const lines = flattenProgress(root, []).map(p => p.label);
  if (v.timeLimitMs) lines.push(`⏰ 限时 ${fmtTime(v.timeLimitMs)}（超时判负）`);
  return lines;
}

/** 单个进度条 HTML（胜利进度展示用） */
function progressBarHTML(p) {
  const pct = p.goal > 0 ? Math.min(100, Math.round(p.cur / p.goal * 100)) : (p.done ? 100 : 0);
  const cur = p.isTime ? fmtTime(p.cur) : p.cur;
  const goal = p.isTime ? fmtTime(p.goal) : (p.isRank ? p.curName : p.goal);
  const color = p.done ? '#3fb950' : '#58a6ff';
  const mark = p.done ? ' ✅' : '';
  return `
  <div style="margin:6px 0;font-size:12.5px;">
    <div style="display:flex;justify-content:space-between;color:#c9d1d9;">
      <span>${esc(p.label)}${mark}</span><span>${esc(String(cur))} / ${esc(String(goal))}</span>
    </div>
    <div style="height:6px;background:#21262d;border-radius:3px;overflow:hidden;margin-top:3px;">
      <i style="display:block;height:100%;width:${pct}%;background:${color};border-radius:3px;"></i>
    </div>
  </div>`;
}

/** 关卡简报面板 HTML（点击卡片后展示详情用） */
function renderLevelBrief(manager, id) {
  const mgr = manager || new CampaignManager();
  const lv = mgr.getLevel(id);
  if (!lv) return '<div class="cp-wrap">未知关卡</div>';
  const act = ACTS.find(a => a.id === lv.act) || ACTS[0];
  const unlocked = mgr.isUnlocked(id);
  const best = mgr.getBest(id);
  const idx = mgr.levelIndex(id);
  const r = lv.rating || {};

  const goals = describeVictory(lv).map(g => `<li>${esc(g)}</li>`).join('');
  const mods = describeModifiers(resolveModifiers(lv.modifiers));
  const limits = describeLimits(lv.limits);

  return `<style>${CP_CSS}</style>
<div class="cp-wrap">
  <div class="cp-head">
    <div>
      <div class="cp-title">${esc(lv.icon)} ${esc(lv.name)}</div>
      <div class="cp-sub">第${['一', '二', '三'][act.id - 1]}幕 · ${esc(act.name)} ｜ 难度 ${diffStars(lv.difficulty)} ｜ 第 ${idx + 1} / 20 关</div>
    </div>
    <div>${gradeBadge(best && best.grade)}</div>
  </div>
  <div class="cp-desc" style="font-size:14px;">${esc(lv.desc)}</div>
  <div class="cp-sec"><b>🏆 胜利条件</b><ul style="margin:4px 0;padding-left:18px;color:#3fb950;">${goals}</ul></div>
  ${limits.length ? `<div class="cp-limits"><b>⛔ 限制条件</b><br>${limits.map(esc).join('<br>')}</div>` : ''}
  ${mods.length ? `<div class="cp-mods"><b>🔧 关卡修饰器</b><br>${mods.map(esc).join('<br>')}</div>` : ''}
  <div class="cp-rate"><b>⭐ 三星标准</b>：S ≤ ${fmtTime(r.s)} ｜ A ≤ ${fmtTime(r.a)} ｜ B ≤ ${fmtTime(r.b)}
    <br><span style="color:#6e7681;">评分 = 用时 33% ＋ 资源效率 33% ＋ 人口存活 33%；死亡超标最高 B。${r.maxDeaths === 0 ? '本关死亡即无缘 S。' : ''}</span></div>
  ${best ? `<div class="cp-best">📊 最佳成绩：${best.grade} 级，用时 ${fmtTime(best.timeMs)}，死亡 ${best.deaths} 人</div>` : ''}
  <div class="cp-tip">💡 ${esc(lv.tip || '')}</div>
  <div class="cp-foot">
    <span></span>
    <button class="cp-start" data-level-id="${esc(lv.id)}" ${unlocked ? '' : 'disabled'}>
      ${unlocked ? '开始挑战' : '🔒 通关上一关以解锁'}
    </button>
  </div>
</div>`;
}

// ============================================================================
// 战役总览文本（成就/分享用）：纯文本摘要
// ============================================================================

/** 返回纯文本战役进度摘要 */
function campaignSummary(manager) {
  const mgr = manager || new CampaignManager();
  const p = mgr.progress();
  const lines = [`🚀 星港挑战战役：${p.done}/${p.total} 关（${p.pct}%）`];
  mgr.levelsByAct().forEach(({ act, levels }) => {
    const done = levels.filter(({ lv }) => mgr.isCompleted(lv.id)).length;
    lines.push(`  ${act.icon} ${act.name}：${done}/${levels.length}`);
    levels.forEach(({ lv }) => {
      const best = mgr.getBest(lv.id);
      const mark = best ? `${best.grade}(${fmtTime(best.timeMs)})` : (mgr.isUnlocked(lv.id) ? '可挑战' : '🔒');
      lines.push(`    ${lv.icon} ${lv.name}：${mark}`);
    });
  });
  return lines.join('\n');
}

// ---------------- 导出补充 ----------------
Object.assign(CampaignExports, {
  BUILDING_NAMES,
  RES_NAMES,
  VALID_COND_TYPES,
  validateCondition,
  validateLevels,
  describeVictory,
  progressBarHTML,
  renderLevelBrief,
  campaignSummary,
});
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CampaignExports;
}

// ============================================================================
// 工具函数：关卡导航 / 评分文本 / game.js 集成指南
// ----------------------------------------------------------------------------
// game.js 集成步骤（建议）：
//   1. 在主菜单加"挑战战役"入口：panel.innerHTML = renderCampaignPanel(campaignMgr)
//   2. 绑定开始按钮：document.querySelectorAll('.cp-start').forEach(b =>
//        b.onclick = () => { const st = campaignMgr.startLevel(b.dataset.levelId);
//                            if (st) game.loadCampaignState(st); });
//   3. game.loadCampaignState(st)：
//        - 背包 = st.inv；人口 = st.popStart；摆下 st.prebuilt 建筑；
//        - 把 st.modifiers 存到 game.campaignMods，各系统读取：
//            resources/build：resourceMul（采集）、buildCostMul（造价）
//            disaster.js：disasterFreqMul（间隔）、noDisasters（跳过调度）
//            military.js：raidFreqMul / raidPowerMul / noRaids
//            trade.js：tradeBan（禁用面板）、tradeMul（价格）
//            diplomacy.js：diploBan（禁用 AI 殖民地）
//            pop.js：popGrowthMul（tick 间隔）、popCap（上限覆盖）
//            tech.js：labMul（实验室产出）、bans（含 'lab' 则禁用建造）
//            map.js：maxQuadrants（解锁上限）、bans（禁用建造菜单项）
//        - 调用 campaignMgr.markRunBaseline(game.deaths, game.stats.collectedTotal)
//   4. 主循环每 tick：
//        const chk = campaignMgr.checkVictory(st.levelId, {
//          elapsedMs: Date.now() - st.startTimeMs,
//          pop: game.pop.count, buildings: game.builder.countById(),
//          buildingsTotal: game.builder.buildings.length,
//          power: game.builder.totalPower(), rank: game.city.rank(game.pop.count).name,
//          tech: game.player.inv.tech, happiness: game.city.happiness || 0,
//          deaths: game.deaths, robots: game.robots || 0,
//          hasLaunchpad: game.builder.hasLaunchpad(), hasArk: game.builder.hasArk(),
//          collected: game.stats.collectedByRes,
//        });
//        if (chk.status === 'win')
//          campaignMgr.completeLevel(st.levelId, { elapsedMs, deaths: game.deaths,
//                                                 collectedTotal: game.stats.collectedTotal });
//        else if (chk.status === 'fail') campaignMgr.failLevel(st.levelId);
//   5. 进度条：chk.progress.map(progressBarHTML).join('') 塞进 HUD 目标栏。
// ============================================================================

/** 下一关 id（本关通关后解锁的那一关；已是最后一关返回 null） */
function nextLevelId(id) {
  const i = LEVEL_INDEX[id];
  if (i == null || i < 0 || i + 1 >= CAMPAIGN_LEVELS.length) return null;
  return CAMPAIGN_LEVELS[i + 1].id;
}

/** 关卡所属幕对象 */
function actOf(id) {
  const lv = LEVEL_MAP[id];
  if (!lv) return null;
  return ACTS.find(a => a.id === lv.act) || null;
}

/** 评分标准 -> 中文一行（面板/简报复用） */
function describeRating(lv) {
  const r = (lv && lv.rating) || {};
  let s = `S≤${fmtTime(r.s)} / A≤${fmtTime(r.a)} / B≤${fmtTime(r.b)}`;
  if (r.maxDeaths === 0) s += ' / 零死亡';
  else if (r.maxDeaths != null) s += ` / 死亡≤${r.maxDeaths}`;
  return s;
}

/** 某幕的完成度 { done, total } */
function actProgress(manager, actId) {
  const mgr = manager || new CampaignManager();
  const levels = CAMPAIGN_LEVELS.filter(lv => lv.act === actId);
  const done = levels.filter(lv => mgr.isCompleted(lv.id)).length;
  return { done, total: levels.length };
}

// ---------------- 导出补充 ----------------
Object.assign(CampaignExports, {
  nextLevelId,
  actOf,
  describeRating,
  actProgress,
});
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CampaignExports;
}
