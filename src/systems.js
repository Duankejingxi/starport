import { G, RES_INFO, canAfford, pay } from './state.js';
import { audio } from './audio.js';

// ================= 模式与难度 =================
export const DIFFS = {
  peace:  { name: '和平', desc: '没有锈蚀蛛，安心建设', o2: 0.7, foe: 0, dmg: 0, yield: 1.3 },
  normal: { name: '标准', desc: '推荐的体验', o2: 1, foe: 1, dmg: 1, yield: 1 },
  hard:   { name: '困难', desc: '氧气消耗更快，敌人更多更凶', o2: 1.35, foe: 1.6, dmg: 1.5, yield: 0.85 },
};
export const MODES = {
  story: { name: '剧情模式', desc: '跟随章节，从着陆一路走到星际文明' },
  free:  { name: '自由模式', desc: '没有主线，按自己的节奏开拓。居民委托会给你方向' },
};
export const D = () => DIFFS[G.diffKey || 'normal'];
export const isFree = () => G.mode === 'free';

// ================= 科研 =================
export const TECHS = {
  pv:      { name: '高效光伏', cat: '生产', icon: 'sun', cost: 25, desc: '太阳能发电 +50%' },
  sieve:   { name: '分子筛制氧', cat: '生存', icon: 'o2', cost: 30, desc: '制氧站与生态中枢供氧 +50%' },
  hydro:   { name: '水培技术', cat: '生存', icon: 'food', cost: 30, desc: '温室与垂直农场产出 +50%' },
  drill:   { name: '深层钻探', cat: '生存', icon: 'water', cost: 30, desc: '水冰提取器与生态中枢供水 +50%' },
  laser2:  { name: '采矿激光 II', cat: '生产', icon: 'laser', cost: 35, desc: '手动采矿速度 +50%' },
  suit:    { name: '宇航服循环系统', cat: '生存', icon: 'tank', cost: 40, desc: '野外氧气消耗 -35%' },
  alloy:   { name: '强化合金', cat: '军事', icon: 'shield', cost: 50, desc: '所有建筑耐久 +50%' },
  plasma:  { name: '等离子聚焦', cat: '军事', icon: 'focus', cost: 60, desc: '炮塔伤害 +50%，射程 +10 米' },
  swarm:   { name: '无人机集群', cat: '生产', icon: 'drone', cost: 60, desc: '每座无人机站多一架无人机' },
  terrain: { name: '全地形悬挂', cat: '生产', icon: 'rover', cost: 45, desc: '漫游车极速 +30%' },
  pr:      { name: '移民宣传', cat: '殖民', icon: 'pop', cost: 70, desc: '移民飞船来得更勤，每次多带 2 人' },
  atmo:    { name: '大气工程', cat: '殖民', icon: 'planet', cost: 120, desc: '大气改造速度 ×2' },
  fusion:  { name: '紧凑聚变', cat: '生产', icon: 'power', cost: 100, desc: '聚变反应堆发电 +40%' },
  culture: { name: '殖民地文化', cat: '殖民', icon: 'book', cost: 80, desc: '居民工作产出 ×2' },
};
export const has = id => !!(G.tech && G.tech[id]);
export function research(id) {
  const t = TECHS[id];
  if (!t || has(id) || (G.rp || 0) < t.cost) { audio.play('deny'); return false; }
  G.rp -= t.cost; G.tech = { ...(G.tech || {}), [id]: true };
  audio.play('craft');
  G.events.emit('toast', `✓ 研究完成：${t.name}`);
  G.events.emit('researched', id);
  return true;
}
export function rpRate() {
  let lab = 0;
  for (const b of G.buildings) if (b.type === 'lab' && b.powered) lab += [0, 1, 1.6, 2.2][b.level || 1];
  return lab * (0.12 + G.colony.pop * 0.01);
}

// ================= 星际贸易 =================
const VALUE = { iron: 1, ice: 1.2, silicon: 1.5, titanium: 6 };
export function tradeQuote(from, to, n) {
  const fee = 0.8; // 运输损耗
  return Math.floor(n * VALUE[from] / VALUE[to] * fee);
}
export function doTrade(from, to, n) {
  const got = tradeQuote(from, to, n);
  if (from === to || got <= 0 || (G.res[from] || 0) < n) { audio.play('deny'); return 0; }
  G.res[from] -= n; G.res[to] += got;
  audio.play('pickup');
  G.stats.traded = (G.stats.traded || 0) + 1;
  return got;
}

// ================= 居民委托 =================
const GIVERS = ['林晓', 'Amara Okafor', '陈默', 'Mateo Silva', '苏念', 'Yuki Tanaka', '王大山', '周青禾', 'Priya Sharma', '李长风'];
const NAME = { solar: '太阳能阵列', oxygen: '制氧站', lamp: '照明灯', habitat: '居住穹顶', greenhouse: '温室', extractor: '水冰提取器', turret: '防御炮塔', drones: '无人机站', plaza: '中央广场', lab: '研究所', trade: '贸易站', apartment: '公寓塔', vfarm: '垂直农场' };
const LINES = {
  build: ['我们需要一座{x}。拜托了！', '如果有{x}，大家的日子会好过很多。', '能再建一座{x}吗？'],
  mine: ['仓库里的{x}快见底了，能帮忙采一些吗？', '我的实验需要{x}。'],
  kill: ['夜里那些锈蚀蛛吵得孩子们睡不着。', '巡逻队需要支援，帮我们清理一下附近。'],
  upgrade: ['设施该升级了，能把哪一座升到 2 级吗？'],
  relic: ['我在旧档案里看到附近有遗迹的记录，你能去看看吗？'],
  pop: ['我们准备好迎接更多的人了。'],
  scan: ['让小星扫描一下附近的矿藏吧，我想画一张地图。'],
};
const pick = a => a[Math.floor(Math.random() * a.length)];

function count(type) { return G.buildings.filter(b => b.type === type).length; }
function makeRequest(ctx) {
  const kinds = ['build', 'build', 'mine', 'mine', 'scan'];
  if (G.enemies.length || (G.nightsSurvived || 0) > 0) kinds.push('kill');
  if (G.buildings.length > 4) kinds.push('upgrade');
  if (ctx.relicLeft()) kinds.push('relic');
  if (G.buildings.some(b => b.type === 'beacon')) kinds.push('pop');
  const kind = pick(kinds);
  const giver = G.colonists.length ? pick(G.colonists).name : pick(GIVERS);
  const r = { id: Date.now() + Math.random(), kind, giver };
  const scale = 1 + (G.cityLevel || 0) * 0.5;
  if (kind === 'build') {
    const opts = Object.keys(NAME).filter(k => ctx.unlocked(k));
    const t = pick(opts.length ? opts : ['solar']);
    Object.assign(r, { t, base: count(t), n: 1, text: `建造${NAME[t]}`, line: pick(LINES.build).replace('{x}', NAME[t]) });
  } else if (kind === 'mine') {
    const t = pick(G.cityLevel >= 2 ? ['iron', 'silicon', 'ice', 'titanium'] : ['iron', 'silicon', 'ice']);
    const n = Math.round((t === 'titanium' ? 8 : 25) * scale);
    Object.assign(r, { t, base: G.stats.mined[t], n, text: `采集${RES_INFO[t].name} ${n}`, line: pick(LINES.mine).replace('{x}', RES_INFO[t].name) });
  } else if (kind === 'kill') {
    const n = Math.round(4 * scale);
    Object.assign(r, { base: G.stats.kills, n, text: `击退锈蚀蛛 ${n} 只`, line: pick(LINES.kill) });
  } else if (kind === 'upgrade') {
    Object.assign(r, { base: G.buildings.filter(b => (b.level || 1) >= 2).length, n: 1, text: '把一座建筑升到 2 级', line: pick(LINES.upgrade) });
  } else if (kind === 'relic') {
    Object.assign(r, { base: ctx.relicFound(), n: 1, text: '调查一处遗迹', line: pick(LINES.relic) });
  } else if (kind === 'pop') {
    Object.assign(r, { base: G.colony.pop, n: 4, text: '迎接 4 位新移民', line: pick(LINES.pop) });
  } else {
    Object.assign(r, { base: G.stats.scans || 0, n: 1, text: '用小星扫描一次（Q）', line: pick(LINES.scan) });
  }
  const k = ['iron', 'silicon', 'ice'];
  r.reward = { [pick(k)]: Math.round(20 * scale), [pick(k)]: Math.round(15 * scale) };
  if (G.cityLevel >= 1) r.reward.titanium = Math.round(2 * scale);
  r.rp = Math.round(8 * scale);
  return r;
}
function progress(r, ctx) {
  switch (r.kind) {
    case 'build': return count(r.t) - r.base;
    case 'mine': return G.stats.mined[r.t] - r.base;
    case 'kill': return G.stats.kills - r.base;
    case 'upgrade': return G.buildings.filter(b => (b.level || 1) >= 2).length - r.base;
    case 'relic': return ctx.relicFound() - r.base;
    case 'pop': return G.colony.pop - r.base;
    default: return (G.stats.scans || 0) - r.base;
  }
}
export function requestProgress(r, ctx) { return Math.max(0, Math.min(r.n, progress(r, ctx))); }

let reqT = 25, chkT = 0;
export function updateSystems(dt, ctx) {
  updateMorale(dt);
  // 科研点
  G.rp = (G.rp || 0) + rpRate() * dt;
  // 委托：殖民地有了第一座建筑之后开始出现
  G.requests = G.requests || [];
  if (G.buildings.length && !G.ended) {
    reqT -= dt;
    const cap = isFree() ? 3 : 2;
    if (reqT <= 0 && G.requests.length < cap) {
      reqT = isFree() ? 60 : 110;
      const r = makeRequest(ctx);
      G.requests.push(r);
      G.events.emit('request', r);
    }
  }
  chkT -= dt;
  if (chkT > 0) return;
  chkT = 0.5;
  for (let i = G.requests.length - 1; i >= 0; i--) {
    const r = G.requests[i];
    if (progress(r, ctx) >= r.n) {
      G.requests.splice(i, 1);
      for (const k in r.reward) { G.res[k] += r.reward[k]; G.events.emit('pickup', { type: k, n: r.reward[k], note: '委托奖励' }); }
      G.rp = (G.rp || 0) + r.rp;
      G.stats.requests = (G.stats.requests || 0) + 1;
      audio.play('objective');
      G.events.emit('requestDone', r);
    }
  }
}
export function abandonRequest(i) { G.requests.splice(i, 1); reqT = Math.min(reqT, 20); }

// ================= 居民幸福度 =================
// 0~100。影响居民工作产出与移民到来的速度
let moraleT = 0;
export function updateMorale(dt) {
  moraleT -= dt; if (moraleT > 0) return;
  moraleT = 2;
  const C = G.colony, pop = Math.max(1, C.pop);
  const f = [];
  let m = 55;
  const sur = k => Math.max(-1, Math.min(1, (C[k] - C.pop) / pop));
  const res = (sur('food') + sur('o2') + sur('water')) * 6; m += res; f.push(['生活物资', res]);
  const lamps = G.buildings.filter(b => b.type === 'lamp').length, plaza = G.buildings.some(b => b.type === 'plaza' && b.powered);
  const lit = Math.min(8, lamps * 1.5) + (plaza ? 12 : 0); m += lit; f.push(['照明与广场', lit]);
  const green = Math.min(10, G.buildings.filter(b => b.type === 'greenhouse' || b.type === 'vfarm').length * 3); m += green; f.push(['绿色植物', green]);
  const broken = G.buildings.filter(b => b.broken).length * -6 + (C.deficit ? -10 : 0); m += broken; f.push(['损坏与停电', broken]);
  const safe = G.buildings.some(b => b.type === 'turret') ? 6 : (D().foe > 0 && (G.nightsSurvived || 0) > 0 ? -8 : 0); m += safe; f.push(['安全感', safe]);
  const crowd = C.housing && C.pop > C.housing * 0.9 ? -8 : 0; m += crowd; f.push(['住房拥挤', crowd]);
  if (has('culture')) { m += 10; f.push(['殖民地文化', 10]); }
  G.morale = Math.round(Math.max(0, Math.min(100, m)));
  G.moraleFactors = f.filter(x => Math.abs(x[1]) >= 0.5);
}
export const moraleMul = () => 0.5 + (G.morale ?? 60) / 100;
