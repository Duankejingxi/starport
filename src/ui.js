import { G, RES_INFO, canAfford, costText, pay } from './state.js';
import { DEFS, ORDER, setGhost, placement, unlockState } from './buildings.js';
import { LEVELS, nextLevelInfo, CENTER } from './city.js';
import { P as PLANET, PID, PLANETS, META } from './planets.js';
import { CHAPTERS, RECIPES, radioCurrent } from './story.js';
import { tool, TOOLS } from './tools.js';
import { clockText } from './sky.js';
import { audio } from './audio.js';
import { LANDER_POS } from './player.js';
import { WORLD } from './terrain.js';
import { ic, iconSprite } from './icons.js';
import { buildingThumbs } from './thumbs.js';
import { nearestRelic, allRelics, relicCount } from './relics.js';
import { nearestPod, allPods } from './events.js';
import { bossAlive } from './combat.js';
import { TECHS, has, research, rpRate, tradeQuote, doTrade, isFree, requestProgress, abandonRequest, MODES, DIFFS } from './systems.js';

const $ = id => document.getElementById(id);
let mapCv, mm, mmx, thumbs = {};
const EN = { mars: 'MARS', europa: 'EUROPA', kepler: 'KEPLER-442b' };
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

export function initUI(mapCanvas) {
  mapCv = mapCanvas;
  document.body.insertAdjacentHTML('afterbegin', iconSprite());
  mm = $('minimap'); mmx = mm.getContext('2d');
  $('pl-cn').textContent = PLANET.name;
  $('kick-planet').textContent = EN[PID];
  $('hotbar').innerHTML = TOOLS.map((t, i) => `<div class="slot" data-i="${i}"><span class="key">${i + 1}</span><span class="ic">${ic(t.icon)}</span><span class="nm">${t.name}</span></div>`).join('');
  $('res').innerHTML = Object.entries(RES_INFO).map(([k, r]) => `<div class="r" id="r-${k}" style="--rc:${r.color}"><span class="ic">${ic(k)}</span><span class="tx"><small>${r.name}</small><b>0</b></span></div>`).join('');
  G.events.on('toast', t => toast(t));
  G.events.on('pickup', p => pickup(p));
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => { audio.play('ui'); closeMenus(true); }));
  document.querySelectorAll('.menu button, .bp-tabs button').forEach(b => b.addEventListener('mouseenter', () => audio.play('tick')));
  try { thumbs = buildingThumbs(ORDER.filter(k => !unlockState(k).hide)); } catch (e) { thumbs = {}; }
}

// —— 通知 ——
const LEAD = { '✓': ['check', 'good'], '⚠': ['warn', 'warn'], '🔧': ['wrench', ''], '☀': ['sun', ''], '☄': ['meteor', ''], '🚀': ['ship', ''] };
export function toast(text, icon = 'radio', kind = '') {
  const ch = [...text][0];
  if (LEAD[ch]) { [icon, kind] = LEAD[ch]; text = text.slice(ch.length).trim(); }
  // 紧急信息 → 罗盘下方红色横幅（只保留一条）；其余 → 左侧事件记录
  if (kind === 'warn' || icon === 'boss') return alertBanner(text, icon, kind);
  const box = $('log');
  const same = [...box.children].find(e => e.dataset.t === text && !e.classList.contains('out'));
  if (same) { const n = (+same.dataset.n || 1) + 1; same.dataset.n = n; same.querySelector('em').textContent = '×' + n; clearTimeout(same._to); same._to = setTimeout(() => fadeOut(same), 5000); return; }
  const el = document.createElement('div'); el.className = 'ev ' + kind; el.dataset.t = text;
  el.innerHTML = `${ic(icon)}<span>${text}</span><em></em>`;
  box.appendChild(el);
  while (box.children.length > 3) box.firstChild.remove();
  el._to = setTimeout(() => fadeOut(el), 5000);
}
function fadeOut(el) { el.classList.add('out'); setTimeout(() => el.remove(), 600); }
let alertTo, alertPri = 0, alertUntil = 0;
function alertBanner(text, icon, kind) {
  const pri = icon === 'boss' ? 2 : 1, now = performance.now();
  if (pri < alertPri && now < alertUntil) {
    // 更重要的警报正在显示：这条记进事件列表
    const box = $('log'), el = document.createElement('div'); el.className = 'ev warn';
    el.innerHTML = `${ic(icon === 'radio' ? 'warn' : icon)}<span>${text}</span><em></em>`;
    box.appendChild(el); while (box.children.length > 3) box.firstChild.remove();
    setTimeout(() => fadeOut(el), 5000); return;
  }
  alertPri = pri; alertUntil = now + 4500;
  const el = $('alert');
  el.className = 'show ' + (kind === 'good' ? 'good' : '');
  el.innerHTML = `${ic(icon === 'radio' ? 'warn' : icon)}<span>${text}</span>`;
  audio.play('alarm');
  clearTimeout(alertTo); alertTo = setTimeout(() => { el.className = ''; }, 4500);
}

const feedMap = {};
function pickup({ type, n, note }) {
  audio.play('pickup');
  let f = feedMap[type];
  if (f && f.el.isConnected) { f.n += n; clearTimeout(f.to); }
  else { f = feedMap[type] = { n, el: document.createElement('div') }; f.el.className = 'feed'; $('feed').appendChild(f.el); }
  const r = RES_INFO[type];
  f.el.style.setProperty('--rc', r.color);
  f.el.innerHTML = `<span class="nm">${note || r.name}</span>${ic(type)}<span class="q">+${f.n}</span>`;
  f.el.classList.remove('out');
  f.to = setTimeout(() => { f.el.classList.add('out'); setTimeout(() => { f.el.remove(); delete feedMap[type]; }, 500); }, 1800);
  const rr = $('r-' + type); rr.classList.remove('flash'); void rr.offsetWidth; rr.classList.add('flash');
}

// 大标题：同一时间只显示一个，其余排队
const cardQ = []; let cardBusy = false;
export function chapterCard(ch) {
  if (cardBusy) { cardQ.length = 0; cardQ.push(ch); return; }
  cardBusy = true;
  setTimeout(() => { cardBusy = false; if (cardQ.length) chapterCard(cardQ.shift()); }, 5200);
  const el = $('chapter');
  const i = CHAPTERS.indexOf(ch);
  const k = ch.k || (i >= 0 ? `CHAPTER ${String(i + 1).padStart(2, '0')}` : '');
  const title = ch.title.replace(/^第.章 · |^终章 · /, '');
  el.innerHTML = `<div class="k">${k}</div><div class="t">${title}</div><div class="ln"></div><div class="s">${ch.sub}</div>`;
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
}

// —— 菜单 ——
const MENUS = ['build', 'craft', 'pause', 'starmap', 'archive', 'research', 'trade'];
export function openMenu(id) {
  closeMenus(false);
  G.menuOpen = id;
  $(id).classList.remove('hidden');
  if (document.pointerLockElement) document.exitPointerLock();
  audio.play('open');
  if (id === 'build') renderBuild();
  if (id === 'craft') renderCraft();
  if (id === 'research') renderResearch();
  if (id === 'trade') renderTrade();
  if (id === 'archive') $('archive-body').innerHTML = archiveHTML();
  if (id === 'pause') $('pause-pane').innerHTML = '';
}
export function closeMenus(relock) {
  MENUS.forEach(id => $(id).classList.add('hidden'));
  const was = G.menuOpen;
  G.menuOpen = false;
  if (was === 'build' && !placement.type) tool.index = 0;
  if (relock) G.requestLock();
}
export function setPausePane(html) { $('pause-pane').innerHTML = html; }

const CATS = { all: '全部', life: '生存', city: '城市', industry: '工业', defense: '防御', stellar: '星际' };
let bpCat = 'all', bpSel = null;
function resBar(id) {
  $(id).innerHTML = Object.entries(RES_INFO).map(([k, r]) => `<span style="--rc:${r.color}">${ic(k)}${G.res[k]}</span>`).join('');
}
function needRows(cost) {
  return `<div class="need">${Object.entries(cost).map(([k, v]) => `<div class="row ${G.res[k] >= v ? '' : 'lack'}" style="--rc:${RES_INFO[k].color}">${ic(k)}<span class="nm">${RES_INFO[k].name}</span>${Math.floor(G.res[k])} / ${v}</div>`).join('')}</div>`;
}
function renderBuild() {
  resBar('bp-res');
  const vis = ORDER.filter(k => !unlockState(k).hide);
  const cats = ['all', ...Object.keys(CATS).filter(c => c !== 'all' && vis.some(k => DEFS[k].cat === c))];
  $('bp-tabs').innerHTML = cats.map(c => `<button data-c="${c}" class="${c === bpCat ? 'on' : ''}">${CATS[c]}</button>`).join('');
  $('bp-tabs').querySelectorAll('button').forEach(b => b.addEventListener('click', () => { bpCat = b.dataset.c; audio.play('tick'); renderBuild(); }));
  const list = vis.filter(k => bpCat === 'all' || DEFS[k].cat === bpCat);
  if (!bpSel || !list.includes(bpSel)) bpSel = list.find(k => unlockState(k).ok) || list[0];
  $('build-list').innerHTML = list.map(k => {
    const d = DEFS[k], us = unlockState(k), ok = canAfford(d.cost);
    return `<div class="tile ${us.ok ? '' : 'locked'} ${ok ? '' : 'poor'} ${k === bpSel ? 'sel' : ''}" data-k="${k}">
      <div class="th">${thumbs[k] ? `<img src="${thumbs[k]}" alt="">` : ic(d.icon)}</div>
      ${us.ok ? '' : `<div class="lk">${ic('lock')}</div>`}
      <div class="nm">${d.name}</div><div class="cs">${us.ok ? costText(d.cost) : ''}</div></div>`;
  }).join('');
  $('build-list').querySelectorAll('.tile').forEach(el => {
    el.addEventListener('click', () => { bpSel = el.dataset.k; audio.play('tick'); renderBuild(); });
    el.addEventListener('dblclick', () => chooseBuilding(el.dataset.k));
  });
  renderBuildDetail();
}
function whyLocked(k) {
  const d = DEFS[k], us = unlockState(k);
  return PID === 'mars' && d.chapter > G.chapter ? `在「${CHAPTERS[d.chapter].title}」解锁` : us.why;
}
function renderBuildDetail() {
  const k = bpSel; if (!k) { $('bp-detail').innerHTML = ''; return; }
  const d = DEFS[k], us = unlockState(k), ok = canAfford(d.cost);
  const st = [];
  if (d.power) st.push(['电力', `${d.power > 0 ? '+' : ''}${d.power}`, d.power > 0 ? 'pos' : 'neg']);
  if (d.housing) st.push(['住房', `${d.housing} 人`]);
  if (d.o2) st.push(['供氧', `${d.o2} 人`]);
  if (d.food) st.push(['食物', `${d.food} 人`]);
  if (d.water) st.push(['用水', `${d.water} 人`]);
  if (d.life) st.push(['补氧半径', `${d.life} m`]);
  if (d.range) st.push(['射程', `${d.range} m`]);
  st.push(['耐久', d.hp]);
  $('bp-detail').innerHTML = `<div class="pv">${thumbs[k] ? `<img src="${thumbs[k]}" alt="">` : ic(d.icon)}</div>
    <div class="cat">${CATS[d.cat] || ''} · BLUEPRINT</div><h3>${d.name}</h3>
    <div class="ds">${d.desc}</div>
    <div class="stats">${st.map(s => `<div><small>${s[0]}</small><b class="${s[2] || ''}">${s[1]}</b></div>`).join('')}</div>
    ${us.ok ? needRows(d.cost) : `<div class="why">${ic('lock')} ${whyLocked(k)}</div>`}
    <button class="go" ${us.ok ? '' : 'disabled'}>${us.ok ? (ok ? '开始建造' : '放置蓝图（资源不足）') : '尚未解锁'}</button>`;
  $('bp-detail').querySelector('.go').addEventListener('click', () => chooseBuilding(k));
}
function chooseBuilding(k) {
  const d = DEFS[k];
  if (!unlockState(k).ok) { audio.play('deny'); return; }
  audio.play('ui');
  placement.rot = 0;
  setGhost(k); tool.index = 2;
  closeMenus(true);
  if (!canAfford(d.cost)) toast('资源不足，放置前先去采集吧', 'warn', 'warn');
}
export function buildMenuKey(e) {
  if (G.menuOpen === 'build' && e.code === 'Enter' && bpSel) chooseBuilding(bpSel);
  if (G.menuOpen === 'craft' && e.code === 'Enter' && crSel) craft(crSel);
}

let crSel = null;
function renderCraft() {
  resBar('cr-res');
  const ks = Object.keys(RECIPES);
  if (!crSel) crSel = ks.find(k => !G.upgrades[k]) || ks[0];
  $('craft-list').innerHTML = ks.map(k => {
    const r = RECIPES[k], has = G.upgrades[k], ok = canAfford(r.cost), blocked = r.need && !G.upgrades[r.need];
    return `<div class="tile ${has ? 'done' : ''} ${ok && !blocked ? '' : 'poor'} ${k === crSel ? 'sel' : ''}" data-k="${k}">
      ${has ? '<span class="tag">已装备</span>' : ''}
      <div class="th">${ic(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${has ? '' : costText(r.cost)}</div></div>`;
  }).join('');
  $('craft-list').querySelectorAll('.tile').forEach(el => {
    el.addEventListener('click', () => { crSel = el.dataset.k; audio.play('tick'); renderCraft(); });
    el.addEventListener('dblclick', () => craft(el.dataset.k));
  });
  const r = RECIPES[crSel], has = G.upgrades[crSel], blocked = r.need && !G.upgrades[r.need];
  $('craft-detail').innerHTML = `<div class="pv">${ic(r.icon)}</div><div class="cat">EQUIPMENT</div><h3>${r.name}</h3>
    <div class="ds">${r.desc}</div>
    ${has ? '<div class="why okc">已制造并装备</div>' : blocked ? `<div class="why">${ic('lock')} 需要先制造等离子步枪</div>` : needRows(r.cost)}
    <button class="go" ${has || blocked || !canAfford(r.cost) ? 'disabled' : ''}>${has ? '已装备' : canAfford(r.cost) ? '制造' : '资源不足'}</button>`;
  $('craft-detail').querySelector('.go').addEventListener('click', () => craft(crSel));
}
function craft(k) {
  const r = RECIPES[k];
  if (G.upgrades[k] || (r.need && !G.upgrades[r.need]) || !canAfford(r.cost)) { audio.play('deny'); return; }
  pay(r.cost); G.upgrades[k] = true; G.stats.crafted[k] = true;
  audio.play('craft'); toast(`制造完成：${r.name}`, r.icon, 'good');
  if (k === 'tank') G.player.o2 = 180;
  if (k === 'rifle') tool.index = 1;
  G.events.emit('crafted', k);
  crSel = Object.keys(RECIPES).find(x => !G.upgrades[x]) || k;
  renderCraft();
}

export const reqCtx = { unlocked: () => true, relicLeft: () => false, relicFound: () => 0 };

// —— 科研 ——
let rsSel = null;
function renderResearch() {
  $('rs-res').innerHTML = `<span style="--rc:var(--cyan)">${ic('book')}${Math.floor(G.rp || 0)} 科研点</span><span style="--rc:var(--dim)"><small>+${rpRate().toFixed(2)}/秒</small></span>`;
  const ks = Object.keys(TECHS);
  if (!rsSel) rsSel = ks.find(k => !has(k)) || ks[0];
  $('research-list').innerHTML = ks.map(k => {
    const t = TECHS[k], done = has(k), ok = (G.rp || 0) >= t.cost;
    return `<div class="tile ${done ? 'done' : ''} ${ok || done ? '' : 'poor'} ${k === rsSel ? 'sel' : ''}" data-k="${k}">${done ? '<span class="tag">已完成</span>' : ''}
      <div class="th">${ic(t.icon)}</div><div class="nm">${t.name}</div><div class="cs"><span class="cost ${ok ? '' : 'lack'}" style="--rc:var(--cyan)">${ic('book')}${t.cost}</span> <small>${t.cat}</small></div></div>`;
  }).join('');
  $('research-list').querySelectorAll('.tile').forEach(el => {
    el.addEventListener('click', () => { rsSel = el.dataset.k; audio.play('tick'); renderResearch(); });
    el.addEventListener('dblclick', () => { if (research(el.dataset.k)) renderResearch(); });
  });
  const t = TECHS[rsSel], done = has(rsSel), ok = (G.rp || 0) >= t.cost;
  const labs = G.buildings.some(b => b.type === 'lab');
  $('research-detail').innerHTML = `<div class="pv">${ic(t.icon)}</div><div class="cat">${t.cat} · TECHNOLOGY</div><h3>${t.name}</h3>
    <div class="ds">${t.desc}</div>
    ${labs ? '' : '<div class="why">建造研究所来产出科研点数</div>'}
    <div class="need"><div class="row ${ok || done ? '' : 'lack'}" style="--rc:var(--cyan)">${ic('book')}<span class="nm">科研点数</span>${Math.floor(G.rp || 0)} / ${t.cost}</div></div>
    <button class="go" ${done || !ok ? 'disabled' : ''}>${done ? '已完成' : ok ? '开始研究' : '科研点数不足'}</button>`;
  $('research-detail').querySelector('.go').addEventListener('click', () => { if (research(rsSel)) { rsSel = Object.keys(TECHS).find(k => !has(k)) || rsSel; renderResearch(); } });
}

// —— 星际贸易 ——
let trFrom = 'iron', trTo = 'silicon', trN = 10;
function renderTrade() {
  $('tr-res').innerHTML = Object.entries(RES_INFO).map(([k, r]) => `<span style="--rc:${r.color}">${ic(k)}${Math.floor(G.res[k])}</span>`).join('');
  const opt = sel => Object.entries(RES_INFO).map(([k, r]) => `<button class="rs ${k === sel ? 'on' : ''}" data-k="${k}" style="--rc:${r.color}">${ic(k)}<span>${r.name}</span><b>${Math.floor(G.res[k])}</b></button>`).join('');
  const got = tradeQuote(trFrom, trTo, trN);
  $('trade-body').innerHTML = `<div class="tcol"><h4>交出</h4><div class="rsl" id="tr-from">${opt(trFrom)}</div></div>
    <div class="tmid"><div class="amt">${[10, 25, 50, 100].map(n => `<button class="${n === trN ? 'on' : ''}" data-n="${n}">${n}</button>`).join('')}</div>
      <div class="deal"><span style="--rc:${RES_INFO[trFrom].color}">${ic(trFrom)}${trN}</span><i>→</i><span style="--rc:${RES_INFO[trTo].color}">${ic(trTo)}${got}</span></div>
      <div class="note2">汇率按地球市场价计算，含 20% 运输损耗</div>
      <button class="go" ${trFrom === trTo || got <= 0 || G.res[trFrom] < trN ? 'disabled' : ''}>交易</button></div>
    <div class="tcol"><h4>换取</h4><div class="rsl" id="tr-to">${opt(trTo)}</div></div>`;
  $('tr-from').querySelectorAll('.rs').forEach(b => b.addEventListener('click', () => { trFrom = b.dataset.k; audio.play('tick'); renderTrade(); }));
  $('tr-to').querySelectorAll('.rs').forEach(b => b.addEventListener('click', () => { trTo = b.dataset.k; audio.play('tick'); renderTrade(); }));
  $('trade-body').querySelectorAll('.amt button').forEach(b => b.addEventListener('click', () => { trN = +b.dataset.n; audio.play('tick'); renderTrade(); }));
  $('trade-body').querySelector('.go').addEventListener('click', () => { const n = doTrade(trFrom, trTo, trN); if (n) toast(`交易完成：获得${RES_INFO[trTo].name} ${n}`, trTo, 'good'); renderTrade(); });
}

// —— 殖民地档案 ——
export function archiveHTML() {
  const C = G.colony, s = G.stats;
  const mined = s.mined.iron + s.mined.silicon + s.mined.ice + s.mined.titanium;
  const kv = [['人口', C.pop], ['城市等级', LEVELS[G.cityLevel].name], ['设施', G.buildings.length], ['火星日', G.time.day],
    ['电力', `${Math.round(C.powerProd)} / ${C.powerUse}`], ['遗迹', `${relicCount().found} / ${relicCount().total}`], ['可容纳', C.support], ['采集资源', mined], ['击退锈蚀蛛', s.kills], ['行驶里程', `${((s.driven || 0) / 1000).toFixed(1)} km`], ['居民交谈', (s.talked || []).length], ['幸福度', G.morale ?? '—'], ['补给舱', s.pods || 0]];
  const meta = META.visited || [];
  const planets = Object.keys(PLANETS).map(id => {
    const v = id === PID ? { pop: C.pop } : meta.find(m => m.id === id);
    return `<div><small>${PLANETS[id].name}</small><b>${v ? v.pop + ' 人' : '—'}</b></div>`;
  }).join('');
  const people = G.colonists.map(c => `<div class="person" data-i="${[...c.name][0]}"><span class="pn">${c.name}</span><span class="pj">${c.job}</span><div class="pl">“${c.line}”</div></div>`).join('');
  const more = C.pop - G.colonists.length;
  return `<h3>概况 · ${PLANET.name}</h3><div class="kv">${kv.map(x => `<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div>
    ${G.moraleFactors && C.pop ? `<h3>幸福度构成</h3><div class="kv">${G.moraleFactors.map(f => `<div><small>${f[0]}</small><b style="color:${f[1] >= 0 ? 'var(--green)' : 'var(--red)'}">${f[1] > 0 ? '+' : ''}${Math.round(f[1])}</b></div>`).join('')}</div>` : ''}
    <h3>人类的足迹</h3><div class="kv">${planets}<div><small>星际总人口</small><b>${meta.filter(m => m.id !== PID).reduce((a, m) => a + m.pop, 0) + C.pop}</b></div></div>
    <h3>居民名册</h3>${people ? `<div class="people">${people}</div>` : '<p style="color:var(--dim)">还没有居民。建好住房、氧气、食物、水和着陆场，移民飞船就会到来。</p>'}
    ${more > 0 ? `<p style="color:var(--dim);margin-top:14px">……以及另外 ${more} 位居民。</p>` : ''}`;
}

// —— 每帧刷新 HUD ——
let slowT = 0, radioKey = '', radioChars = 0, lastGoals = '';
export function updateUI(dt, ctx) {
  const P = G.player, C = G.colony;
  slowT -= dt;
  if (slowT <= 0) {
    slowT = 0.2;
    for (const k in RES_INFO) $('r-' + k).querySelector('b').textContent = Math.floor(G.res[k]);
    const n = nextLevelInfo(), L = LEVELS[G.cityLevel];
    const prog = n ? Math.min(1, Math.min(C.pop / n.pop, G.buildings.length / Math.max(1, n.b))) : 1;
    const cityHTML = `<span class="lv">LV.${ROMAN[G.cityLevel]}</span><span class="nm">${L.name}</span>${n ? `<div class="pg"><i style="width:${prog * 100}%"></i></div><div class="nx">下一级「${n.name}」· 人口 ${Math.min(C.pop, n.pop)}/${n.pop} · 设施 ${Math.min(G.buildings.length, n.b)}/${n.b}</div>` : '<div class="nx">已达到最高等级</div>'}`;
    if ($('city').dataset.k !== cityHTML) { $('city').dataset.k = cityHTML; $('city').innerHTML = cityHTML; }
    // 殖民地：电力与人口常驻，短缺时显示醒目提醒
    let col = '';
    if (G.buildings.length) {
      col += `<div class="st ${C.deficit ? 'warn' : ''}">${ic('power')}<div><small>电力</small><b>${Math.round(C.powerProd)}<em>/${C.powerUse}</em></b></div></div>`;
      col += `<div class="st">${ic('pop')}<div><small>人口</small><b>${C.pop}<em>/${C.support}</em></b></div></div>`;
      if (C.pop > 0 && G.morale !== undefined) { const mo = G.morale; col += `<div class="st ${mo < 35 ? 'warn' : mo >= 75 ? 'tf' : ''}">${ic('star')}<div><small>幸福</small><b>${mo}</b></div></div>`; if (mo < 35) col += `<div class="chip">${ic('warn')}居民不开心：建照明灯、广场、温室，修好受损设施</div>`; }
      if (G.terraform > 0) col += `<div class="st tf">${ic('planet')}<div><small>大气改造</small><b>${Math.floor(G.terraform * 100)}%</b></div></div>`;
      if (C.deficit) col += `<div class="chip">${ic('warn')}电力不足：多建太阳能或反应堆</div>`;
      if (C.housing && G.buildings.some(b => b.type === 'beacon') && C.support <= C.pop) {
        const need = [['housing', '住房', 'house', '居住穹顶'], ['o2', '氧气', 'o2', '制氧站'], ['food', '食物', 'food', '温室'], ['water', '水', 'water', '水冰提取器']].sort((a, b) => C[a[0]] - C[b[0]])[0];
        col += `<div class="chip">${ic(need[2])}缺少${need[1]}：建造${need[3]}来迎接新移民</div>`;
      }
    }
    if ($('colony').dataset.k !== col) { $('colony').dataset.k = col; $('colony').innerHTML = col; }
    const wx = G.storm > 0.3 ? '沙尘暴' : G.raining ? '降雨' : '';
    $('clock').innerHTML = clockText().replace(/^.*? · /, '') + (wx ? `<span class="wx">${wx}</span>` : '');
    const ch = CHAPTERS[G.chapter], i = G.chapter;
    const goals = isFree() ? [] : ch.goals;
    let gh = goals.map((g, j) => {
      const done = G.goalDone?.[i + ':' + j];
      const pr = g.prog && !done ? g.prog() : '';
      const m = /^(\d+)\/(\d+)$/.exec(pr);
      return `<div class="g ${done ? 'done' : ''}"><span class="cb"></span><div class="gx">${g.text}${pr ? `<small>${pr}</small>` : ''}${m ? `<div class="gp"><i style="width:${Math.min(100, m[1] / m[2] * 100)}%"></i></div>` : ''}</div></div>`;
    }).join('');
    const reqs = G.requests || [];
    if (reqs.length) {
      gh += `<div class="rq-h">居民委托</div>` + reqs.map(r => {
        const p = requestProgress(r, reqCtx);
        return `<div class="g rq"><span class="cb"></span><div class="gx">${r.text}<small>${r.giver}${r.n > 1 ? ` · ${p}/${r.n}` : ''}</small>${r.n > 1 ? `<div class="gp"><i style="width:${p / r.n * 100}%"></i></div>` : ''}</div></div>`;
      }).join('');
    } else if (isFree()) gh += '<div class="g"><div class="gx" style="color:var(--dim)">先建一座设施，居民们会开始提出委托</div></div>';
    if (G.rp > 0.5 || G.buildings.some(b => b.type === 'lab')) gh += `<div class="rq-h">科研 <b>${Math.floor(G.rp)}</b> 点 <small>+${rpRate().toFixed(1)}/秒 · T 打开</small></div>`;
    if (gh !== lastGoals) { lastGoals = gh; $('goals').innerHTML = gh; $('goal-ch').textContent = isFree() ? `自由模式 · ${DIFFS[G.diffKey || 'normal'].name}` : ch.title.replace(/ · /, ' '); }
    document.querySelectorAll('#hotbar .slot').forEach((s, j) => {
      s.classList.toggle('on', j === tool.index);
      s.classList.toggle('lock', !!(TOOLS[j].need && !G.upgrades[TOOLS[j].need]));
    });
  }
  dial('d-hp', 70, P.health / P.maxHealth); dial('d-o2', 58, P.o2 / P.maxO2); dial('d-en', 47, P.energy / 100);
  $('d-o2n').textContent = Math.ceil(P.o2 / P.maxO2 * 100); $('d-hpn').textContent = Math.ceil(P.health); $('d-enn').textContent = Math.ceil(P.energy);
  $('pl-en').textContent = clockText().split(' · ')[0] === PLANET.name ? EN[PID] : EN[PID];
  const os = $('o2-state');
  const ost = P.inLife ? `${ic('o2')} 补氧中` : (P.o2 < P.maxO2 * 0.2 ? `${ic('warn')} 氧气不足，立即返回` : '');
  if (os.dataset.k !== ost) { os.dataset.k = ost; os.innerHTML = ost; }
  os.className = P.inLife ? 'ok' : 'bad';
  $('suit').classList.toggle('low', P.o2 < P.maxO2 * 0.2 && !P.inLife);

  // 无线电：打字机效果
  const r = radioCurrent(), re = $('radio');
  if (r) {
    if (radioKey !== r[1]) { radioKey = r[1]; radioChars = 0; re.querySelector('.who').textContent = r[0]; }
    const total = r[1].length;
    if (radioChars < total) { radioChars = Math.min(total, radioChars + dt * 26 + 0.0001); if (dt === 0) radioChars = total; }
    const shown = Math.floor(radioChars);
    re.querySelector('.txt').innerHTML = r[1].slice(0, shown) + (shown < total ? '<span class="cur"></span>' : '');
    re.classList.toggle('idle', shown >= total);
    re.classList.add('show');
  } else re.classList.remove('show');

  const pr = $('prompt');
  if (pr.dataset.k !== (ctx.prompt || '')) { pr.dataset.k = ctx.prompt || ''; pr.innerHTML = ctx.prompt || ''; }
  pr.classList.toggle('show', !!ctx.prompt);
  pr.classList.toggle('drive', !!G.driving);
  const bh = $('buildhint');
  if (tool.id === 'build' && placement.type && !G.menuOpen) {
    const d = DEFS[placement.type];
    bh.innerHTML = `<div class="bn">${d.name}</div><div>${costText(d.cost)}</div>
      <div class="st">${placement.valid ? '<span class="okc">左键放置</span>' : `<span class="badc">${placement.reason}</span>`}</div>
      <div><kbd>R</kbd>旋转 <kbd>右键</kbd>取消 <kbd>B</kbd>更换蓝图</div>`;
    bh.classList.add('show');
  } else bh.classList.remove('show');

  $('hurt').style.opacity = Math.min(1, P.hurtT * 1.6 + (P.o2 <= 0 ? 0.5 + Math.sin(performance.now() * 0.01) * 0.2 : 0));
  $('lowo2').style.opacity = !P.inLife && P.o2 < P.maxO2 * 0.2 ? (0.4 + Math.sin(performance.now() * 0.006) * 0.3) * (1 - P.o2 / (P.maxO2 * 0.2) * 0.6) : 0;
  $('crosshair').className = ctx.crossClass || '';
  const tip = $('tip');
  if (tip.dataset.k !== (ctx.tip || '')) { tip.dataset.k = ctx.tip || ''; tip.innerHTML = ctx.tip ? `<div class="tk">提示</div><div>${ctx.tip}</div>` : ''; }
  tip.classList.toggle('show', !!ctx.tip);
  const boss = bossAlive();
  const showBoss = boss && Math.hypot(boss.pos.x - P.pos.x, boss.pos.z - P.pos.z) < 260;
  $('bossbar').classList.toggle('hidden', !showBoss);
  if (showBoss) $('bossbar').querySelector('i').style.width = Math.max(0, boss.hp / boss.maxHp * 100) + '%';
  drawCompass();
  drawMinimap();
}
function dial(id, r, f) {
  const c = 2 * Math.PI * r, el = $(id);
  el.style.strokeDasharray = c; el.style.strokeDashoffset = c * (1 - Math.max(0, Math.min(1, f)));
}

// —— 刻度罗盘 ——
const DIRS = { 0: '北', 45: '东北', 90: '东', 135: '东南', 180: '南', 225: '西南', 270: '西', 315: '西北' };
function drawCompass() {
  const P = G.player, fw = P.fwd;
  const heading = Math.atan2(fw.x, -fw.z) * 180 / Math.PI;
  const span = 80, W = 520, px = d => W / 2 + d / span * (W / 2);
  let html = '';
  const start = Math.ceil((heading - span) / 5) * 5;
  for (let a = start; a <= heading + span; a += 5) {
    const d = a - heading, n = ((a % 360) + 360) % 360;
    if (DIRS[n] !== undefined) html += `<span class="lb ${n % 90 === 0 ? 'big' : ''}" style="left:${px(d)}px">${DIRS[n]}</span>`;
    else html += `<span class="tk ${n % 15 === 0 ? 'm' : ''}" style="left:${px(d)}px"></span>`;
  }
  const bearing = (x, z) => Math.atan2(x - P.pos.x, -(z - P.pos.z)) * 180 / Math.PI;
  const marks = [{ c: 'home', t: `${ic('house')}${Math.round(Math.hypot(LANDER_POS.x - P.pos.x, LANDER_POS.z - P.pos.z))}m`, a: bearing(LANDER_POS.x, LANDER_POS.z) }];
  if (G.upgrades.scanner) {
    let best = null, bd = 1e9;
    for (const n of G.nodes) if (n.type === 'titanium') { const d = Math.hypot(n.x - P.pos.x, n.z - P.pos.z); if (d < bd) { bd = d; best = n; } }
    if (best) marks.push({ c: 'ti', t: `${ic('titanium')}${Math.round(bd)}m`, a: bearing(best.x, best.z) });
  }
  const np = nearestPod(P.pos);
  if (np) marks.push({ c: 'home', t: `${ic('ship')}补给 ${Math.round(np.d)}m`, a: bearing(np.p.x, np.p.z) });
  const nr = nearestRelic(P.pos);
  if (nr) marks.push({ c: 'ship', t: `? ${Math.round(nr.d)}m`, a: bearing(nr.r.x, nr.r.z) });
  for (const m of marks) {
    const d = ((m.a - heading + 540) % 360) - 180;
    if (Math.abs(d) < span) html += `<span class="mk ${m.c}" style="left:${px(d)}px;top:16px">${m.t}</span>`;
  }
  $('compass').innerHTML = html;
}

// —— 雷达式小地图 ——
function drawMinimap() {
  const P = G.player, S = mm.width, R = S / 2 - 6, range = G.upgrades.scanner ? 220 : 110;
  const k = mapCv.width / WORLD;
  mmx.clearRect(0, 0, S, S);
  mmx.save();
  mmx.beginPath(); mmx.arc(S / 2, S / 2, R, 0, Math.PI * 2); mmx.clip();
  mmx.fillStyle = '#0c0807'; mmx.fillRect(0, 0, S, S);
  mmx.globalAlpha = 0.75;
  const sc = (R * 2) / (range * 2);
  mmx.drawImage(mapCv, (P.pos.x - range + WORLD / 2) * k, (P.pos.z - range + WORLD / 2) * k, range * 2 * k, range * 2 * k, S / 2 - R, S / 2 - R, R * 2, R * 2);
  mmx.globalAlpha = 1;
  const tx = x => (x - P.pos.x) * sc + S / 2, tz = z => (z - P.pos.z) * sc + S / 2;
  // 距离环
  mmx.strokeStyle = 'rgba(255,255,255,.1)'; mmx.lineWidth = 1;
  for (const f of [0.33, 0.66]) { mmx.beginPath(); mmx.arc(S / 2, S / 2, R * f, 0, Math.PI * 2); mmx.stroke(); }
  mmx.strokeStyle = 'rgba(127,230,255,.55)'; mmx.setLineDash([3, 4]);
  mmx.beginPath(); mmx.arc(tx(CENTER.x), tz(CENTER.z), LEVELS[G.cityLevel].r * sc, 0, Math.PI * 2); mmx.stroke(); mmx.setLineDash([]);
  const dot = (x, z, r, c) => { mmx.fillStyle = c; mmx.beginPath(); mmx.arc(tx(x), tz(z), r, 0, Math.PI * 2); mmx.fill(); };
  for (const n of G.nodes) {
    if (Math.abs(n.x - P.pos.x) > range || Math.abs(n.z - P.pos.z) > range) continue;
    const c = RES_INFO[n.type].color, x = tx(n.x), y = tz(n.z), s = n.type === 'titanium' ? 3.2 : 2.2;
    mmx.fillStyle = c; mmx.beginPath(); mmx.moveTo(x, y - s); mmx.lineTo(x + s, y); mmx.lineTo(x, y + s); mmx.lineTo(x - s, y); mmx.fill();
  }
  for (const b of G.buildings) {
    const r = Math.max(2, b.def.r * sc * 0.8);
    mmx.fillStyle = b.broken ? '#ff5a45' : b.powered ? '#ece6dc' : '#ffb35c';
    mmx.fillRect(tx(b.x) - r, tz(b.z) - r, r * 2, r * 2);
  }
  mmx.fillStyle = '#8dffb0';
  for (const c of G.colonists) mmx.fillRect(tx(c.pos.x) - 1, tz(c.pos.z) - 1, 2, 2);
  const blink = Math.sin(performance.now() * 0.008) > 0;
  for (const e of G.enemies) dot(e.pos.x, e.pos.z, e.guardian ? 3.5 : 2.6, blink ? '#ff5a45' : '#a02818');
  dot(LANDER_POS.x, LANDER_POS.z, 3, '#8dffb0');
  for (const p of allPods()) { mmx.fillStyle = '#8bf0a9'; mmx.beginPath(); mmx.arc(tx(p.x), tz(p.z), 4.5, 0, Math.PI * 2); mmx.fill(); }
  for (const r of allRelics()) {
    if (Math.abs(r.x - P.pos.x) > range * 1.2 || Math.abs(r.z - P.pos.z) > range * 1.2) continue;
    mmx.strokeStyle = r.found ? 'rgba(255,210,138,.4)' : '#ffd28a'; mmx.lineWidth = 1.5;
    mmx.beginPath(); mmx.arc(tx(r.x), tz(r.z), 4, 0, Math.PI * 2); mmx.stroke();
  }
  mmx.restore();
  // 外圈刻度
  mmx.save(); mmx.translate(S / 2, S / 2);
  mmx.strokeStyle = 'rgba(236,230,220,.35)'; mmx.lineWidth = 1;
  mmx.beginPath(); mmx.arc(0, 0, R + 0.5, 0, Math.PI * 2); mmx.stroke();
  for (let i = 0; i < 72; i++) {
    const a = i / 72 * Math.PI * 2, l = i % 18 === 0 ? 6 : i % 6 === 0 ? 4 : 2;
    mmx.strokeStyle = i % 18 === 0 ? 'rgba(255,179,92,.9)' : 'rgba(236,230,220,.3)';
    mmx.beginPath(); mmx.moveTo(Math.sin(a) * (R + 1), -Math.cos(a) * (R + 1)); mmx.lineTo(Math.sin(a) * (R + 1 + l), -Math.cos(a) * (R + 1 + l)); mmx.stroke();
  }
  // 视野扇形与玩家
  const a = Math.atan2(P.fwd.x, -P.fwd.z);
  mmx.rotate(a);
  const gr = mmx.createRadialGradient(0, 0, 0, 0, 0, R * 0.6);
  gr.addColorStop(0, 'rgba(255,179,92,.35)'); gr.addColorStop(1, 'rgba(255,179,92,0)');
  mmx.fillStyle = gr; mmx.beginPath(); mmx.moveTo(0, 0); mmx.arc(0, 0, R * 0.6, -Math.PI / 2 - 0.55, -Math.PI / 2 + 0.55); mmx.closePath(); mmx.fill();
  mmx.fillStyle = '#fff'; mmx.beginPath(); mmx.moveTo(0, -7); mmx.lineTo(5, 5); mmx.lineTo(0, 2.5); mmx.lineTo(-5, 5); mmx.closePath(); mmx.fill();
  mmx.restore();
}
