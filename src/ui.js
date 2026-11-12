import { G, RES_INFO, canAfford, costText, pay } from './state.js';
import { DEFS, ORDER, setGhost, placement } from './buildings.js';
import { CHAPTERS, RECIPES, radioCurrent } from './story.js';
import { tool, TOOLS } from './tools.js';
import { clockText } from './sky.js';
import { audio } from './audio.js';
import { LANDER_POS } from './player.js';
import { WORLD } from './terrain.js';

const $ = id => document.getElementById(id);
let mapCv, mm, mmx;

export function initUI(mapCanvas) {
  mapCv = mapCanvas;
  mm = $('minimap'); mmx = mm.getContext('2d');
  $('hotbar').innerHTML = TOOLS.map((t, i) => `<div class="slot" data-i="${i}"><span class="key">${i + 1}</span><span class="ic">${t.icon}</span><span class="nm">${t.name}</span></div>`).join('');
  $('res').innerHTML = Object.entries(RES_INFO).map(([k, r]) => `<div class="r" id="r-${k}"><span class="ic" style="color:${r.color}">${r.icon}</span><span class="nm">${r.name}</span><b>0</b></div>`).join('');
  G.events.on('toast', t => toast(t));
  G.events.on('pickup', p => pickup(p));
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => closeMenus(true)));
}

export function toast(text) {
  const el = document.createElement('div'); el.className = 'toast'; el.textContent = text;
  const box = $('toasts'); box.appendChild(el);
  while (box.children.length > 3) box.firstChild.remove();
  setTimeout(() => el.classList.add('out'), 2600);
  setTimeout(() => el.remove(), 3200);
}

const feedMap = {};
function pickup({ type, n, note }) {
  audio.play('pickup');
  let f = feedMap[type];
  if (f && f.el.isConnected) { f.n += n; clearTimeout(f.to); }
  else {
    f = feedMap[type] = { n, el: document.createElement('div') };
    f.el.className = 'feed'; $('feed').appendChild(f.el);
  }
  const r = RES_INFO[type];
  f.el.innerHTML = `<span style="color:${r.color}">${r.icon}</span> +${f.n} ${r.name}${note ? ` <small>${note}</small>` : ''}`;
  f.el.classList.remove('out');
  f.to = setTimeout(() => { f.el.classList.add('out'); setTimeout(() => { f.el.remove(); delete feedMap[type]; }, 500); }, 1800);
  const rr = $('r-' + type); rr.classList.remove('flash'); void rr.offsetWidth; rr.classList.add('flash');
}

export function chapterCard(ch) {
  const el = $('chapter');
  el.innerHTML = `<div class="t">${ch.title}</div><div class="s">${ch.sub}</div>`;
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
}

// —— 菜单 ——
export function openMenu(id) {
  closeMenus(false);
  G.menuOpen = id;
  $(id).classList.remove('hidden');
  if (document.pointerLockElement) document.exitPointerLock();
  if (id === 'build') renderBuild();
  if (id === 'craft') renderCraft();
}
export function closeMenus(relock) {
  ['build', 'craft', 'pause'].forEach(id => $(id).classList.add('hidden'));
  const was = G.menuOpen;
  G.menuOpen = false;
  if (was === 'build' && !placement.type) tool.index = 0;
  if (relock) G.requestLock();
}

function renderBuild() {
  $('build-list').innerHTML = ORDER.map(k => {
    const d = DEFS[k], locked = d.chapter > G.chapter, ok = canAfford(d.cost);
    const pw = d.power > 0 ? `<span class="pw plus">+${d.power} ⚡</span>` : d.power < 0 ? `<span class="pw">${d.power} ⚡</span>` : '';
    return `<div class="card ${locked ? 'locked' : ''} ${ok ? '' : 'poor'}" data-k="${k}">
      <div class="h"><span class="ic">${locked ? '🔒' : d.icon}</span><b>${d.name}</b>${pw}</div>
      <div class="d">${locked ? `在「${CHAPTERS[d.chapter].title}」解锁` : d.desc}</div>
      <div class="c">${locked ? '' : costText(d.cost)}</div></div>`;
  }).join('');
  $('build-list').querySelectorAll('.card').forEach(el => el.addEventListener('click', () => {
    const k = el.dataset.k, d = DEFS[k];
    if (d.chapter > G.chapter) { audio.play('deny'); return; }
    audio.play('ui');
    placement.rot = 0;
    setGhost(k); tool.index = 2;
    closeMenus(true);
    if (!canAfford(d.cost)) toast('资源不足——放置前先去采集吧');
  }));
}

function renderCraft() {
  $('craft-list').innerHTML = Object.entries(RECIPES).map(([k, r]) => {
    const has = G.upgrades[k], ok = canAfford(r.cost), blocked = r.need && !G.upgrades[r.need];
    return `<div class="card ${has ? 'done' : ''} ${ok && !blocked ? '' : 'poor'}" data-k="${k}">
      <div class="h"><span class="ic">${r.icon}</span><b>${r.name}</b>${has ? '<span class="pw plus">已制造</span>' : ''}</div>
      <div class="d">${r.desc}${blocked ? '（需先制造等离子步枪）' : ''}</div>
      <div class="c">${has ? '' : costText(r.cost)}</div></div>`;
  }).join('');
  $('craft-list').querySelectorAll('.card').forEach(el => el.addEventListener('click', () => {
    const k = el.dataset.k, r = RECIPES[k];
    if (G.upgrades[k] || (r.need && !G.upgrades[r.need]) || !canAfford(r.cost)) { audio.play('deny'); return; }
    pay(r.cost); G.upgrades[k] = true; G.stats.crafted[k] = true;
    audio.play('craft'); toast(`制造完成：${r.name}`);
    if (k === 'tank') G.player.o2 = 180;
    if (k === 'rifle') tool.index = 1;
    G.events.emit('crafted', k);
    renderCraft();
  }));
}

// —— 每帧刷新 HUD ——
let slowT = 0;
export function updateUI(dt, ctx) {
  const P = G.player, C = G.colony;
  slowT -= dt;
  if (slowT <= 0) {
    slowT = 0.2;
    for (const k in RES_INFO) $('r-' + k).querySelector('b').textContent = G.res[k];
    const pw = `${Math.round(C.powerProd)}/${C.powerUse}`;
    $('colony').innerHTML = `
      <div class="${C.deficit ? 'warn' : ''}">⚡ 电力 <b>${pw}</b>${C.deficit ? ' 不足' : ''}</div>
      <div>👥 人口 <b>${C.pop}</b> <small>/ 可容纳 ${C.support}</small></div>
      <div class="sub">🏠${C.housing} 🫧${C.o2} 🌱${C.food} 💧${C.water}</div>
      ${G.terraform > 0 ? `<div>🌍 大气改造 <b>${Math.floor(G.terraform * 100)}%</b></div>` : ''}`;
    $('clock').textContent = clockText() + (G.storm > 0.3 ? ' · 沙尘暴' : '') + (G.time.night > 0.5 ? ' · 夜' : '');
    // 目标
    const ch = CHAPTERS[G.chapter];
    $('goals').innerHTML = `<div class="gt">${ch.title}</div>` + ch.goals.map((g, i) => {
      const done = G.goalDone?.[G.chapter + ':' + i];
      return `<div class="g ${done ? 'done' : ''}"><span class="cb">${done ? '✓' : ''}</span>${g.text}${g.prog && !done ? ` <small>${g.prog()}</small>` : ''}</div>`;
    }).join('');
    document.querySelectorAll('#hotbar .slot').forEach((s, i) => {
      s.classList.toggle('on', i === tool.index);
      s.classList.toggle('lock', !!(TOOLS[i].need && !G.upgrades[TOOLS[i].need]));
    });
  }
  setBar('hp', P.health / P.maxHealth, `${Math.ceil(P.health)}`);
  setBar('o2', P.o2 / P.maxO2, `${Math.ceil(P.o2)}`);
  setBar('en', P.energy / 100, `${Math.ceil(P.energy)}`);
  $('o2-state').textContent = P.inLife ? '生命维持中 · 补氧' : (P.o2 < P.maxO2 * 0.2 ? '氧气不足！返回补氧' : '');
  $('o2-state').className = P.inLife ? 'ok' : 'bad';
  $('bars').classList.toggle('low', P.o2 < P.maxO2 * 0.2 && !P.inLife);

  // 无线电
  const r = radioCurrent();
  const re = $('radio');
  if (r) { if (re.dataset.k !== r[1]) { re.dataset.k = r[1]; re.innerHTML = `<div class="who">📻 ${r[0]}</div><div class="txt">${r[1]}</div>`; } re.classList.add('show'); }
  else re.classList.remove('show');

  // 提示
  $('prompt').innerHTML = ctx.prompt || '';
  $('prompt').classList.toggle('show', !!ctx.prompt);
  // 建造模式提示
  const bh = $('buildhint');
  if (tool.id === 'build' && placement.type && !G.menuOpen) {
    const d = DEFS[placement.type];
    bh.innerHTML = `<b>${d.icon} ${d.name}</b> ${costText(d.cost)}<br>${placement.valid ? '<span class="okc">左键放置</span>' : `<span class="badc">${placement.reason}</span>`} · R/滚轮 旋转 · 右键 取消 · B 换建筑`;
    bh.classList.add('show');
  } else bh.classList.remove('show');

  // 视觉效果
  $('hurt').style.opacity = Math.min(1, P.hurtT * 1.6 + (P.o2 <= 0 ? 0.5 + Math.sin(performance.now() * 0.01) * 0.2 : 0));
  $('lowo2').style.opacity = !P.inLife && P.o2 < P.maxO2 * 0.2 ? (0.4 + Math.sin(performance.now() * 0.006) * 0.3) * (1 - P.o2 / (P.maxO2 * 0.2) * 0.6) : 0;
  $('crosshair').className = ctx.crossClass || '';
  drawCompass();
  drawMinimap();
}
function setBar(id, f, txt) {
  const el = $('bar-' + id);
  el.querySelector('i').style.width = Math.max(0, Math.min(1, f)) * 100 + '%';
  el.querySelector('b').textContent = txt;
}

// —— 罗盘 ——
function drawCompass() {
  const P = G.player, fw = P.fwd;
  const heading = Math.atan2(fw.x, -fw.z) * 180 / Math.PI;
  const marks = [['北', 0], ['东北', 45], ['东', 90], ['东南', 135], ['南', 180], ['西南', 225], ['西', 270], ['西北', 315]];
  const items = marks.map(([t, a]) => ({ t, a, cls: t.length === 1 ? 'big' : '' }));
  const bearing = (x, z) => Math.atan2(x - P.pos.x, -(z - P.pos.z)) * 180 / Math.PI;
  items.push({ t: '⌂', a: bearing(LANDER_POS.x, LANDER_POS.z), cls: 'home' });
  if (G.upgrades.scanner) {
    let best = null, bd = 1e9;
    for (const n of G.nodes) if (n.type === 'titanium') { const d = Math.hypot(n.x - P.pos.x, n.z - P.pos.z); if (d < bd) { bd = d; best = n; } }
    if (best) items.push({ t: `✦ ${Math.round(bd)}m`, a: bearing(best.x, best.z), cls: 'ti' });
  }
  let html = '';
  for (const it of items) {
    let d = ((it.a - heading + 540) % 360) - 180;
    if (Math.abs(d) > 75) continue;
    html += `<span class="${it.cls}" style="left:${50 + d / 75 * 50}%">${it.t}</span>`;
  }
  $('compass').innerHTML = html + '<i></i>';
}

// —— 小地图 ——
function drawMinimap() {
  const P = G.player, S = mm.width, range = G.upgrades.scanner ? 220 : 110;
  const k = mapCv.width / WORLD;
  mmx.save();
  mmx.clearRect(0, 0, S, S);
  mmx.beginPath(); mmx.arc(S / 2, S / 2, S / 2 - 1, 0, Math.PI * 2); mmx.clip();
  mmx.fillStyle = '#1a0d08'; mmx.fillRect(0, 0, S, S);
  mmx.drawImage(mapCv, (P.pos.x - range + WORLD / 2) * k, (P.pos.z - range + WORLD / 2) * k, range * 2 * k, range * 2 * k, 0, 0, S, S);
  const sc = S / (range * 2);
  const tx = x => (x - P.pos.x) * sc + S / 2, tz = z => (z - P.pos.z) * sc + S / 2;
  const dot = (x, z, r, c) => { mmx.fillStyle = c; mmx.beginPath(); mmx.arc(tx(x), tz(z), r, 0, Math.PI * 2); mmx.fill(); };
  for (const n of G.nodes) {
    if (Math.abs(n.x - P.pos.x) > range || Math.abs(n.z - P.pos.z) > range) continue;
    dot(n.x, n.z, n.type === 'titanium' ? 3 : 2, RES_INFO[n.type].color);
  }
  for (const b of G.buildings) {
    mmx.fillStyle = b.powered ? '#f2efe8' : '#ff8a6a';
    const r = Math.max(2, b.def.r * sc);
    mmx.fillRect(tx(b.x) - r, tz(b.z) - r, r * 2, r * 2);
  }
  mmx.fillStyle = '#7dff9a';
  for (const c of G.colonists) mmx.fillRect(tx(c.pos.x) - 1, tz(c.pos.z) - 1, 2, 2);
  for (const e of G.enemies) dot(e.pos.x, e.pos.z, e.guardian ? 3.5 : 2.5, '#ff3b2a');
  dot(LANDER_POS.x, LANDER_POS.z, 3, '#66ff99');
  // 玩家箭头
  const a = Math.atan2(P.fwd.x, -P.fwd.z);
  mmx.translate(S / 2, S / 2); mmx.rotate(a);
  mmx.fillStyle = '#fff'; mmx.beginPath(); mmx.moveTo(0, -7); mmx.lineTo(5, 5); mmx.lineTo(0, 2); mmx.lineTo(-5, 5); mmx.closePath(); mmx.fill();
  mmx.restore();
}
