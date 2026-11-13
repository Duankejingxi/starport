import * as THREE from 'three';
import { G, ColliderGrid, RES_INFO } from './state.js';
import { buildTerrain, makeMapCanvas, getHeight, applyTerraform, floraMat } from './terrain.js';
import { buildSky, updateSky } from './sky.js';
import { initFx, updateFx, fx } from './fx.js';
import { audio } from './audio.js';
import { generateNodes, updateNodes, serializeNodes, loadNodes } from './resources.js';
import { createBuilding, updateBuildings, serializeBuildings, recalcColony, destroyBuilding, DEFS, setGhost, placement, canUpgrade, upgradeCost, upgradeBuilding, MAX_LV } from './buildings.js';
import { costText } from './state.js';
import { updateProjectiles, updateEnemies, shoot, clearEnemies, rayEnemy } from './combat.js';
import { Player, LANDER_POS } from './player.js';
import { initTools, updateTools, renderViewmodel, tool } from './tools.js';
import { updateColony, lookColonist, serializeColonists, loadColonists } from './colony.js';
import { updateStory, startChapter, radio, CHAPTERS, setStormState, stormState, resetStoryEnding } from './story.js';
import { initUI, updateUI, toast, chapterCard, openMenu, closeMenus, setPausePane, archiveHTML, buildMenuKey } from './ui.js';
import { updateAchievements, achievementsHTML } from './achievements.js';
import { updateAmbient } from './ambient.js';
import { ic } from './icons.js';
import { initRelics, updateRelics, relicAt, discover } from './relics.js';
import { input, initInput } from './input.js';
import { makeLander } from './models.js';
import { P, PID, PLANETS, SAVE_KEY, META, saveMeta, loadMeta, clearAll } from './planets.js';
import { initCity, updateCity, LEVELS } from './city.js';
import { spawnRover, getRover, roverState, enterRover, exitRover, updateRover, roverSpeed } from './rover.js';
import { updateEvents } from './events.js';

const $ = id => document.getElementById(id);
G.debug = /[?&]debug/.test(location.search);

// —— 渲染器与场景 ——
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
// 画质：默认按设备性能自动选择
let quality = 'high';
try { quality = localStorage.getItem('starport-quality') || ((navigator.hardwareConcurrency || 8) <= 4 ? 'mid' : 'high'); } catch (e) { /* 忽略 */ }
function applyQuality(q, live) {
  quality = q;
  renderer.setPixelRatio(q === 'high' ? Math.min(window.devicePixelRatio, 1.5) : q === 'mid' ? 1 : 0.75);
  renderer.setSize(window.innerWidth, window.innerHeight);
  const sh = q !== 'low';
  if (renderer.shadowMap.enabled !== sh) {
    renderer.shadowMap.enabled = sh;
    if (live) G.scene.traverse(o => { if (o.material) [].concat(o.material).forEach(m => { m.needsUpdate = true; }); });
  }
}
applyQuality(quality, false);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 6000);
G.scene = scene; G.camera = camera; G.renderer = renderer;
G.colliders = new ColliderGrid(16);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// —— 世界生成 ——
buildSky(scene);
buildTerrain(scene);
initFx(scene);
const lander = makeLander();
lander.group.position.set(LANDER_POS.x, getHeight(LANDER_POS.x, LANDER_POS.z) + 0.1, LANDER_POS.z);
lander.group.rotation.y = 0.6;
scene.add(lander.group);
G.colliders.add({ x: LANDER_POS.x, z: LANDER_POS.z, r: 3.4, kind: 'lander' });
const player = new Player(camera);
G.player = player;
initTools(camera);
initInput(canvas);
initUI(makeMapCanvas(350));
initCity(scene);

// —— 指针锁定 ——
G.requestLock = () => {
  if (G.debug) { G.locked = true; return; }
  try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* 忽略 */ }
};
document.addEventListener('pointerlockchange', () => {
  G.locked = document.pointerLockElement === canvas;
  if (!G.locked && G.started && !G.menuOpen && !player.dead && !G.endingShown && !G.cine) openMenu('pause');
});
canvas.addEventListener('click', () => {
  audio.init();
  if (G.started && !G.locked && !G.menuOpen && !player.dead) G.requestLock();
});

// —— 存档 ——
function save(silent) {
  if (!G.started) return;
  const data = {
    v: 1, res: G.res, upgrades: G.upgrades, stats: G.stats, chapter: G.chapter, goalDone: G.goalDone, terraform: G.terraform, ended: G.ended, nights: G.nightsSurvived || 0, city: G.cityLevel, pop: G.popTotal || 0, launched: !!G.launched, rover: roverState(), relics: G.relicsFound || [],
    time: { t: G.time.t, day: G.time.day },
    player: { x: player.pos.x, z: player.pos.z, yaw: player.yaw, o2: player.o2, hp: player.health },
    buildings: serializeBuildings(), nodes: serializeNodes(), colonists: serializeColonists(), storm: stormState(),
  };
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); if (!silent) toast('已保存'); } catch (e) { if (!silent) toast('保存失败'); }
}
function loadSave() {
  try { return JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) { return null; }
}
function applySave(d) {
  Object.assign(G.res, d.res);
  G.upgrades = d.upgrades || {};
  loadNodes(d.nodes);
  for (const [t, x, z, r, hp, lv] of d.buildings) if (DEFS[t]) createBuilding(t, x, z, r, hp, false, lv || 1);
  G.stats = d.stats; G.goalDone = d.goalDone || {};
  G.terraform = d.terraform || 0; G.ended = !!d.ended; G.nightsSurvived = d.nights || 0;
  resetStoryEnding(G.terraform >= 1);
  G.time.t = d.time.t; G.time.day = d.time.day;
  player.pos.set(d.player.x, getHeight(d.player.x, d.player.z), d.player.z);
  player.yaw = d.player.yaw; player.o2 = d.player.o2; player.health = Math.max(30, d.player.hp);
  loadColonists(d.colonists || []);
  if (d.rover) spawnRover(d.rover.x, d.rover.z, d.rover.h);
  G.relicsFound = d.relics || [];
  G.cityLevel = d.city || 0; G.popTotal = d.pop ?? (d.colonists || []).length; G.launched = !!d.launched;
  initCity(scene);
  setStormState(d.storm);
  startChapter(d.chapter, true);
  recalcColony();
  if (G.terraform > 0) applyTerraform(terraCenters(), G.terraform);
}
const terraCenters = () => G.buildings.filter(b => b.type === 'terraformer').map(b => ({ x: b.x, z: b.z }));

// —— 开场 ——
const STORY = P.intro;
document.querySelector('.logo span').textContent = P.title;
document.title = '星港：' + P.title;
if (META.visited?.length) $('touch-note').innerHTML = '已开拓：' + META.visited.map(v => `${PLANETS[v.id].name}（${v.pop} 人）`).join(' · ');
$('story').innerHTML = STORY.map((s, i) => `<p style="animation-delay:${0.4 + i * 1.1}s">${s}</p>`).join('');
const existing = loadSave();
if (existing) {
  $('btn-continue').classList.remove('hidden');
  $('cont-info').textContent = `${P.name} · ${CHAPTERS[existing.chapter]?.title || ''} · 第 ${existing.time.day} 日 · ${existing.pop ?? existing.colonists?.length ?? 0} 位居民`;
}
if (matchMedia('(pointer: coarse)').matches) $('touch-note').innerHTML += '本游戏需要键盘和鼠标，请在电脑上游玩。';

// —— 开场字幕：黑场中逐行浮现，可跳过 ——
function playCine(done) {
  if (G.debug) { setTimeout(done, 1200); return; }
  const el = $('cine'), lines = P.intro;
  G.cine = true;
  el.classList.remove('hidden', 'out');
  $('cine-lines').innerHTML = lines.map((s, i) => `<p style="animation-delay:${0.6 + i * 2.1}s">${s}</p>`).join('');
  let finished = false;
  const end = () => {
    if (finished) return; finished = true;
    el.classList.add('out'); G.cine = false;
    window.removeEventListener('keydown', key); window.removeEventListener('mousedown', end);
    setTimeout(() => el.classList.add('hidden'), 1500);
    setTimeout(done, 900);
  };
  const key = e => { if (e.code === 'Space' || e.code === 'Escape' || e.code === 'Enter') end(); };
  window.addEventListener('keydown', key); window.addEventListener('mousedown', end);
  setTimeout(end, 1500 + lines.length * 2100 + 1800);
}
function begin(fromSave) {
  audio.init();
  if (fromSave && existing) applySave(existing);
  else {
    localStorage.removeItem(SAVE_KEY);
    generateNodes();
    // 从上一颗星球带来的装备与物资
    if (META.carry && PID !== 'mars') {
      Object.assign(G.upgrades, META.carry.upgrades || {});
      for (const k in META.carry.res) G.res[k] += META.carry.res[k];
      if (G.upgrades.rover) spawnRover(LANDER_POS.x + 10, LANDER_POS.z + 4, 0.5);
      setTimeout(() => toast('随舰物资已卸载，所有装备已同步'), 4000);
    }
    G.time.t = 0.29; // 清晨
    startChapter(0, true);
    playCine(() => { chapterCard(CHAPTERS[0]); CHAPTERS[0].radio.forEach(r => radio(r[0], r[1])); });
  }
  initRelics();
  $('intro').classList.add('hidden');
  document.body.classList.add('playing');
  G.started = true;
  G.requestLock();
}
$('btn-new').addEventListener('click', () => {
  if (existing && !confirm('开始新的旅程会覆盖现有存档，确定吗？')) return;
  begin(false);
});
$('btn-continue').addEventListener('click', () => begin(true));
$('tele-planet').textContent = `${P.name} · ${P.place}`;
const HELP = `<h3>操作</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>移动</span></div><div><kbd>鼠标</kbd><span>环视</span></div>
  <div><kbd>Shift</kbd><span>冲刺</span></div><div><kbd>空格</kbd><span>跳跃 / 喷气背包</span></div>
  <div><kbd>左键</kbd><span>采矿 · 射击 · 放置建筑</span></div><div><kbd>右键</kbd><span>取消建造</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>切换工具</span></div><div><kbd>B</kbd><span>建造蓝图</span></div>
  <div><kbd>E</kbd><span>互动 · 交谈 · 上车</span></div><div><kbd>U</kbd><span>升级注视的建筑</span></div>
  <div><kbd>F</kbd><span>手电筒</span></div><div><kbd>Tab</kbd><span>殖民地档案</span></div>
  <div><kbd>P</kbd><span>拍照模式</span></div><div><kbd>Esc</kbd><span>暂停</span></div></div>
  <h3>生存</h3><p>氧气会持续消耗。着陆舱、制氧站和居住穹顶附近会自动补氧。建好住房、氧气、食物、水和着陆场，移民飞船就会到来。夜里要提防锈蚀蛛。</p>`;
const togglePane = html => { const el = $('intro-pane'); if (!el.classList.contains('hidden') && el.dataset.k === html.slice(0, 20)) { el.classList.add('hidden'); return; } el.dataset.k = html.slice(0, 20); el.innerHTML = html; el.classList.remove('hidden'); audio.play('tick'); };
$('btn-t-help').addEventListener('click', () => togglePane(HELP));
$('btn-t-achv').addEventListener('click', () => togglePane(achievementsHTML()));
if (PID !== 'mars' && !existing) $('btn-new').textContent = `登陆 ${P.name}`;
if (META.autoResume && existing) {
  const m = loadMeta(); delete m.autoResume; saveMeta(m);
  setTimeout(() => { begin(true); toast(`欢迎回来 · ${P.name}`); }, 50);
}
$('btn-save').addEventListener('click', () => save(false));
$('btn-archive').addEventListener('click', () => setPausePane(archiveHTML()));
$('btn-achv').addEventListener('click', () => setPausePane(achievementsHTML()));
$('btn-restart').addEventListener('click', () => { if (confirm('将删除所有星球的进度，从火星重新开始。确定吗？')) { clearAll(); G.started = false; location.href = location.pathname + (G.debug ? '?debug' : ''); } });
$('vol').addEventListener('input', e => audio.setVolume(+e.target.value));
$('quality').value = quality;
G.baseFov = 72;
try { const f = +localStorage.getItem('starport-fov'); if (f >= 60 && f <= 100) { G.baseFov = f; camera.fov = f; camera.updateProjectionMatrix(); $('fov').value = f; } } catch (e) { /* 忽略 */ }
$('fov').addEventListener('input', e => { G.baseFov = +e.target.value; camera.fov = +e.target.value; camera.updateProjectionMatrix(); try { localStorage.setItem('starport-fov', e.target.value); } catch (err) { /* 忽略 */ } });
$('quality').addEventListener('change', e => { applyQuality(e.target.value, true); try { localStorage.setItem('starport-quality', e.target.value); } catch (err) { /* 忽略 */ } });
$('sens').addEventListener('input', e => { input.sens = +e.target.value; });
$('btn-respawn').addEventListener('click', () => { if (G.driving) exitRover(player); player.respawn(); $('death').classList.add('hidden'); G.requestLock(); });
$('btn-endcont').addEventListener('click', () => { $('ending').classList.add('hidden'); G.endingShown = false; G.requestLock(); });

// —— 事件 ——
G.events.on('chapter', ch => chapterCard(ch));
G.events.on('crafted', k => {
  if (k !== 'rover') return;
  const fab = G.buildings.find(b => b.type === 'fabricator');
  const base = fab || player.pos;
  for (let i = 0; i < 12; i++) {
    const a = i * 0.9, d = (fab ? fab.def.r : 0) + 5 + i;
    const x = base.x + Math.cos(a) * d, z = base.z + Math.sin(a) * d;
    if (!G.colliders.overlaps(x, z, 2.6)) { spawnRover(x, z, -a); break; }
  }
  radio('方舟 · AI', '漫游车已出厂。车舱加压，可以在车里补氧。小心别开下悬崖。');
});
G.events.on('cityLevel', lv => {
  chapterCard({ k: `COLONY LEVEL ${['I', 'II', 'III', 'IV', 'V', 'VI'][G.cityLevel]}`, title: lv.name, sub: `城市升级 · 领地扩展至 ${lv.r} 米` });
  const lines = {
    1: ['方舟 · AI', '殖民地升级为定居点。领地扩大了，更远的土地可以建造了。'],
    2: ['方舟 · AI', '小镇规模达成。公寓塔与垂直农场的设计图已解锁。'],
    3: ['方舟 · AI', '这里已经是一座城市了。生态中枢的设计图已解锁。'],
    4: ['方舟 · AI', '大都会。夜里，从轨道上能看见你们的灯光。'],
    5: ['方舟 · AI', '城市等级达到「星港」——人类可以从这里飞向下一颗星球了。'],
  }[G.cityLevel];
  if (lines) radio(lines[0], lines[1]);
  save(true);
});
G.events.on('openBuild', () => openMenu('build'));
G.events.on('death', why => {
  audio.laser(false);
  setTimeout(() => {
    if (G.endingShown) { player.respawn(); return; }
    $('death-why').textContent = why; $('death').classList.remove('hidden');
    if (document.pointerLockElement) document.exitPointerLock();
  }, 1500);
});
G.events.on('tide', n => {
  audio.play('night');
  chapterCard({ k: 'CRYSTAL TIDE', title: '晶潮之夜', sub: `雷达探测到约 ${n} 个信号 · 守住殖民地` });
  radio('方舟 · AI', '警告：晶潮正在逼近。数量是平时的两倍……地震仪还记录到一个巨大的信号，它正在向地表移动。');
});
G.events.on('bossSpawn', () => { toast('晶母破土而出', 'boss', 'warn'); radio('方舟 · AI', '是晶母！体长超过十米。它的冲击波能震碎建筑——用步枪和炮塔集中火力！'); });
G.events.on('bossDown', () => { toast('晶母陨落', 'boss', 'good'); radio('地球指挥中心 · 林舟', '……你们做到了。整个指挥中心都在欢呼。它的核心里有大量的钛，拿去建设吧。'); });
let firstNight = true;
G.events.on('nightfall', n => {
  audio.play('night');
  toast(`夜幕降临 · 约 ${n} 个移动信号接近`, 'moon', 'warn');
  if (firstNight) { firstNight = false; radio('方舟一号 · AI', '它们来了。锈蚀蛛会攻击建筑和人。用激光或步枪击退它们——它们的晶体残骸里含有钛。'); }
});
G.events.on('broken', b => toast(`${b.def.name} 受损停机，白天会自动修复`, 'warn', 'warn'));
let firstArrival = true;
G.events.on('shuttleIncoming', n => toast(`移民飞船正在降落 · ${n} 人`, 'ship'));
G.events.on('colonistsArrived', list => {
  if (!list.length) return;
  toast(`欢迎回家：${list.map(c => c.name).join('、')}`);
  if (firstArrival && G.stats.arrived <= 4) {
    firstArrival = false;
    radio(list[0].name, '你好……这就是火星？比照片上还要红。谢谢你，为我们点亮了这里的灯。');
  }
});
const BUILT_MSG = {
  habitat: ['方舟一号 · AI', '居住穹顶加压完成。室内温度 21 摄氏度，湿度 45%。这是火星上第一个可以脱下头盔的地方。'],
  greenhouse: ['方舟一号 · AI', '温室启动。第一批种子已经播下：土豆、小麦、番茄……和一株向日葵。'],
  beacon: ['地球指挥中心 · 林舟', '收到着陆场的信标信号了！只要殖民地能养活他们，移民飞船就会出发。'],
  reactor: ['方舟一号 · AI', '聚变反应堆点火成功。输出稳定。'],
  terraformer: ['地球指挥中心 · 林舟', '大气改造塔……启动了。我们见证的，是一颗星球的苏醒。'],
  apartment: ['方舟 · AI', '第一座公寓塔落成。城市开始向天空生长。'],
  launch: ['方舟 · AI', '星际发射台完工。殖民舰已加注完毕，随时可以出发。'],
  monument: ['方舟 · AI', '纪念碑上刻着一行字：「致第一个出发的人」。'],
  turret: ['方舟一号 · AI', '防御炮塔上线。它们需要电力才能运转。'],
  fabricator: ['方舟一号 · AI', '制造工坊就绪。靠近后按 E 打开。'],
};
G.events.on('built', b => {
  const m = BUILT_MSG[b.type];
  if (m && G.stats.built[b.type] === 1) radio(m[0], m[1]);
  if (b.type === 'monument' && G.stats.built.monument === 1) setTimeout(finalEnding, 6000);
  save(true);
});
G.events.on('ending', () => {
  radio('Nadia Volkova', '大家快出来看！天空……天空变蓝了！');
  radio('赵小雨', '下雨了！这是火星上的第一场雨！');
  setTimeout(showEnding, 14000);
});
function showEnding() {
  G.ended = true; G.endingShown = true;
  if (player.dead) player.respawn();
  $('death').classList.add('hidden');
  if (document.pointerLockElement) document.exitPointerLock();
  const s = G.stats;
  const lines = [
    '从着陆舱的舱门第一次打开，到今天，过去了 ' + G.time.day + ' 个火星日。',
    '曾经只有风声的平原上，如今住着 ' + G.colony.pop + ' 个人。',
    '他们来自地球上不同的国家，说着不同的语言。',
    '但从今天起，他们有了同一个地址。',
    '<div class="big">火星 · 新家园</div>',
    '孩子们第一次在火星上，看见了蓝色的天空。',
    `<span class="stats">采集资源 ${s.mined.iron + s.mined.silicon + s.mined.ice + s.mined.titanium} · 建造设施 ${G.buildings.length} · 击退锈蚀蛛 ${s.kills} · 迎接移民 ${s.arrived}</span>`,
  ];
  $('ending-text').innerHTML = lines.map((l, i) => `<p style="animation-delay:${i * 1.6}s">${l}</p>`).join('');
  $('ending').classList.remove('hidden');
  audio.play('chapter');
  save(true);
}

// 键盘：菜单与互动
window.addEventListener('keydown', e => {
  if (!G.started) return;
  buildMenuKey(e);
  if (e.code === 'Tab' && !G.endingShown && !player.dead) {
    if (G.menuOpen === 'archive') closeMenus(true); else if (!G.menuOpen) openMenu('archive');
    return;
  }
  if (e.code === 'KeyP' && !G.menuOpen) { G.photo = !G.photo; G.usedPhoto = true; document.body.classList.toggle('photo', G.photo); return; }
  if (G.menuOpen === 'archive' && e.code === 'Escape') { closeMenus(true); return; }
  if (G.menuOpen === 'build' && (e.code === 'Escape' || e.code === 'KeyB')) { closeMenus(true); if (!G.locked) showClickHint(); }
  else if (G.menuOpen === 'craft' && (e.code === 'Escape' || e.code === 'KeyE')) { closeMenus(true); }
  else if (G.menuOpen === 'starmap' && e.code === 'Escape') { closeMenus(true); }
});
function showClickHint() { /* 由每帧逻辑显示 */ }

let interact = null, demolishArm = 0, autosave = 30, terraT = 0;
let launchArm = 0;
// —— 情境提示：每条只出现一次 ——
let hintSeen = {}; try { hintSeen = JSON.parse(localStorage.getItem('starport-hints')) || {}; } catch (e) { /* 忽略 */ }
let hintCur = null, hintT = 0, playT = 0;
const HINTS = [
  { id: 'move', text: '<kbd>W A S D</kbd>移动　<kbd>鼠标</kbd>环视　<kbd>Shift</kbd>冲刺　<kbd>空格</kbd>跳跃', when: () => playT > 0.5 && playT < 40 },
  { id: 'mine', text: '对准发光的矿石，<kbd>按住左键</kbd> 用采矿激光采集', when: () => playT > 6 && G.stats.mined.iron + G.stats.mined.silicon === 0 },
  { id: 'build', text: '资源够了！按 <kbd>B</kbd> 打开建造菜单', when: () => G.buildings.length === 0 && G.res.iron >= 8 && G.res.silicon >= 6 },
  { id: 'o2', text: '氧气在持续消耗。回到着陆舱或制氧站附近会自动补氧', when: () => !player.inLife && player.o2 < player.maxO2 * 0.5 },
  { id: 'night', text: '天黑了，按 <kbd>F</kbd> 打开手电筒', when: () => G.time.night > 0.6 && !player.flashlight },
  { id: 'craft', text: '靠近制造工坊按 <kbd>E</kbd> 制造武器和装备——试试加压漫游车', when: () => G.buildings.some(b => b.type === 'fabricator') && !G.upgrades.rifle },
  { id: 'drive', text: '漫游车就在附近，走过去按 <kbd>E</kbd> 上车', when: () => getRover() && !G.driving && !hintSeen.drove },
  { id: 'talk', text: '对准居民按 <kbd>E</kbd>，听听他们的故事', when: () => G.colonists.some(c => c.pos.distanceTo(player.pos) < 10) },
  { id: 'level', text: '人口和设施越多，城市等级越高，领地也会扩大（看左上角）', when: () => G.colony.pop >= 2 },
];
function hintPrompt(dt) {
  playT += dt;
  if (G.driving) hintSeen.drove = true;
  if (hintCur) {
    hintT -= dt;
    if (hintT <= 0 || !hintCur.when()) { hintSeen[hintCur.id] = true; hintCur = null; try { localStorage.setItem('starport-hints', JSON.stringify(hintSeen)); } catch (e) { /* 忽略 */ } }
    else return hintCur.text;
  }
  for (const h of HINTS) if (!hintSeen[h.id] && h.when()) { hintCur = h; hintT = 12; return h.text; }
  return '';
}
// —— 星图：前往新星球，或回到已开拓的家园 ——
function destinations() {
  const meta = loadMeta(), seen = new Map((meta.visited || []).map(v => [v.id, v]));
  const list = [];
  if (P.next) list.push({ id: P.next, fresh: !seen.has(P.next) && !hasSave(P.next) });
  for (const id of Object.keys(PLANETS)) if (id !== PID && id !== P.next && (seen.has(id) || hasSave(id))) list.push({ id, fresh: false, info: seen.get(id) });
  return list;
}
function hasSave(id) { try { return !!localStorage.getItem(id === 'mars' ? 'starport-newhome-v1' : 'starport-planet-' + id); } catch (e) { return false; } }
function openStarmap(pad) {
  openMenu('starmap');
  $('starmap-list').innerHTML = destinations().map(d => {
    const pl = PLANETS[d.id];
    const en = { mars: 'MARS', europa: 'EUROPA', kepler: 'KEPLER-442b' }[d.id];
    return `<div class="dest" data-id="${d.id}"><div class="orb ${d.id}"></div><span class="badge ${d.fresh ? 'new' : 'home'}">${d.fresh ? 'UNCHARTED' : 'COLONY'}</span>
      <div class="dn">${pl.name}</div><div class="de">${en}</div>
      <div class="dst">${pl.title} · ${pl.place}${d.info ? `<br>居民 ${d.info.pop} 人 · 第 ${d.info.day} 日离开` : ''}${d.fresh ? '<br>装备同步 · 携带部分物资' : '<br>回到你建立的城市'}</div></div>`;
  }).join('');
  $('starmap-list').querySelectorAll('.dest').forEach(el => el.addEventListener('click', () => { closeMenus(true); startLaunch(pad, el.dataset.id); }));
}
function startLaunch(b, dest) {
  G.launching = { b, t: 0, dest };
  G.launched = true;
  audio.play('rumble');
  radio('方舟 · AI', `殖民舰点火。目标：${PLANETS[dest].name}。全体乘员，祝你们好运。`);
  b.anim.flame.visible = true;
}
function updateLaunch(dt) {
  const L = G.launching; if (!L) return;
  L.t += dt;
  const ship = L.b.anim.ship;
  if (L.t > 2) ship.position.y += dt * (2 + (L.t - 2) * 9);
  const base = new THREE.Vector3(L.b.x, L.b.y + ship.position.y, L.b.z);
  for (let i = 0; i < 6; i++) fx.flame(base);
  if (L.t < 5) fx.dustPuff(new THREE.Vector3(L.b.x + (Math.random() - 0.5) * 16, L.b.y + 1, L.b.z + (Math.random() - 0.5) * 16), 3, 4);
  player.landDip = Math.max(player.landDip, Math.min(0.15, 0.03 * L.t) * Math.random());
  if (L.t > 9 && !L.faded) { L.faded = true; $('fade').classList.add('on'); }
  if (L.t > 11.5 && !L.done) { L.done = true; travel(L.dest); }
}
function travel(dest) {
  const meta = loadMeta();
  meta.visited = (meta.visited || []).filter(v => v.id !== PID).concat([{ id: PID, pop: G.colony.pop, day: G.time.day }]);
  meta.planet = dest;
  meta.autoResume = hasSave(dest);
  const carry = {};
  for (const k in G.res) carry[k] = Math.min(Math.floor(G.res[k] * 0.4), 80);
  meta.carry = { upgrades: G.upgrades, res: carry };
  save(true);
  saveMeta(meta);
  const nx = PLANETS[dest];
  $('ending-text').innerHTML = [`曲速航行中……`, `目的地：<b>${nx.name}</b>${meta.autoResume ? '（已开拓）' : ''}`, `<span class="stats">${P.name}的 ${G.colony.pop} 位居民，会替你守着那里的灯火。</span>`].map((l, i) => `<p style="animation-delay:${i * 1.2}s">${l}</p>`).join('');
  document.querySelector('#ending .btns').classList.add('hidden');
  $('ending').classList.remove('hidden'); $('fade').classList.remove('on');
  G.endingShown = true;
  if (document.pointerLockElement) document.exitPointerLock();
  setTimeout(() => { location.href = location.pathname + (G.debug ? '?debug' : ''); }, 5000);
}
function finalEnding() {
  G.endingShown = true;
  if (document.pointerLockElement) document.exitPointerLock();
  const meta = loadMeta();
  const all = (meta.visited || []).concat([{ id: PID, pop: G.colony.pop }]);
  const total = all.reduce((s, v) => s + v.pop, 0);
  const lines = [
    '很久很久以前，一个人独自站在火星的红色尘土里。',
    '氧气只够撑三分钟，身边只有一座着陆舱。',
    all.map(v => `${PLANETS[v.id].name} · ${v.pop} 人`).join('　'),
    `今天，${total} 个人，生活在三颗星球上。`,
    '<div class="big">星际文明</div>',
    '这一切，都从你迈出的第一步开始。',
    '<span class="stats">感谢游玩《星港》。你可以继续建设，城市会一直在这里等你。</span>',
  ];
  $('ending-text').innerHTML = lines.map((l, i) => `<p style="animation-delay:${i * 1.8}s">${l}</p>`).join('');
  $('ending').classList.remove('hidden');
  audio.play('chapter');
  save(true);
}

function handleInteraction(dt) {
  const ctx = { prompt: '', crossClass: '' };
  if (player.dead || G.menuOpen) return ctx;
  if (G.driving) { ctx.prompt = `<span class="big">${roverSpeed()}</span> KM/H<br><kbd>W S</kbd> 油门 · <kbd>A D</kbd> 转向 · <kbd>Shift</kbd> 加速 · <kbd>空格</kbd> 刹车 · <kbd>E</kbd> 下车`; return ctx; }
  const relic = relicAt(player.pos);
  if (relic) {
    ctx.prompt = `<b>${relic.name}</b><br><kbd>E</kbd>调查`;
    if (input.hit('KeyE')) discover(relic);
    return ctx;
  }
  const rv = getRover();
  if (rv && Math.hypot(rv.x - player.pos.x, rv.z - player.pos.z) < 4.5) {
    ctx.prompt = '<b>加压漫游车</b><br><kbd>E</kbd>上车';
    if (input.hit('KeyE')) { enterRover(); input.pressed.delete('KeyE'); }
    return ctx;
  }
  const origin = camera.position, dir = player.fwd;
  const col = lookColonist(origin, dir);
  const fab = G.buildings.find(b => b.type === 'fabricator' && Math.hypot(b.x - player.pos.x, b.z - player.pos.z) < b.def.r + 6);
  demolishArm = Math.max(0, demolishArm - dt); launchArm = Math.max(0, launchArm - dt);
  const launchPad = G.buildings.find(b => b.type === 'launch' && Math.hypot(b.x - player.pos.x, b.z - player.pos.z) < b.def.r + 8);
  if (col) {
    ctx.crossClass = 'talk';
    ctx.prompt = `<b>${col.name}</b> · ${col.job}<br><kbd>E</kbd> 交谈`;
    if (input.hit('KeyE')) { radio(col.name, col.line); const t = G.stats.talked = G.stats.talked || []; if (!t.includes(col.idx)) t.push(col.idx); }
  } else if (launchPad && !G.launching) {
    if (!launchPad.powered) ctx.prompt = '星际发射台 · <span class="badc">电力不足</span>';
    else if (!destinations().length) ctx.prompt = '星际发射台 · 暂无可用航线';
    else {
      ctx.prompt = `<b>殖民舰已就绪</b><br><kbd>E</kbd>打开星图`;
      if (input.hit('KeyE')) openStarmap(launchPad);
    }
  } else if (fab) {
    ctx.prompt = `<kbd>E</kbd> 打开制造工坊${fab.powered ? '' : '（停电中）'}`;
    if (input.hit('KeyE')) { if (fab.powered) openMenu('craft'); else toast('制造工坊没有电力'); }
  }
  const lb = G.lookBuilding;
  if (!ctx.prompt && lb && tool.id !== 'build') {
    const d = lb.def;
    const lv = lb.level || 1;
    const up = canUpgrade(lb) ? `<br><kbd>U</kbd>升级到 Lv.${lv + 1}　${costText(upgradeCost(lb))}` : '';
    ctx.prompt = `<b>${d.name}</b>　Lv.${lv}${lv >= MAX_LV ? '（满级）' : ''} · 耐久 ${Math.ceil(lb.hp)}/${Math.round(lb.maxHp)}${d.power < 0 ? (lb.powered ? ' · <span class="okc">供电中</span>' : ' · <span class="badc">停电</span>') : ''}${up}<br><kbd>X</kbd>${demolishArm > 0 ? '<span class="badc">再按一次确认拆除（返还 50%）</span>' : '拆除'}`;
    if (lb.broken) ctx.prompt = ctx.prompt.replace('</b>', '</b> <span class="badc">受损停机 · 白天自动修复</span>');
    if (input.hit('KeyU') && canUpgrade(lb)) {
      if (upgradeBuilding(lb)) toast(`${d.name} 升级到 Lv.${lb.level}`, 'star', 'good');
      else { audio.play('deny'); toast('升级材料不足', 'warn', 'warn'); }
    }
    if (input.hit('KeyX')) {
      if (demolishArm > 0) { destroyBuilding(lb, true); demolishArm = 0; toast(`已拆除 ${d.name}`); }
      else demolishArm = 2;
    }
  }
  if (tool.id === 'laser') {
    if (G.aimNode && !ctx.crossClass) ctx.crossClass = 'node';
    if (rayEnemy(origin, dir, 9)) ctx.crossClass = 'enemy';
  } else if (tool.id === 'rifle' && rayEnemy(origin, dir, 120)) ctx.crossClass = 'enemy';
  return ctx;
}

// —— 主循环 ——
const clock = new THREE.Clock();
let introCam = 0;
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (!G.started) {
    // 标题画面：缓慢环绕着陆舱
    introCam += dt * 0.05;
    const r = 30;
    camera.position.set(LANDER_POS.x + Math.cos(introCam) * r, getHeight(LANDER_POS.x, LANDER_POS.z) + 6, LANDER_POS.z + Math.sin(introCam) * r);
    camera.lookAt(LANDER_POS.x, getHeight(LANDER_POS.x, LANDER_POS.z) + 4, LANDER_POS.z);
    G.time.t = 0.27 + Math.sin(introCam * 0.5) * 0.01;
    updateSky(0, camera.position);
    updateFx(dt, camera.position);
    renderer.render(scene, camera);
    return;
  }
  if (G.debug) G.locked = true;
  const running = G.locked && !G.menuOpen && !G.endingShown && !G.cine;
  $('clickhint').classList.toggle('hidden', !(G.started && !G.locked && !G.menuOpen && !player.dead && !G.endingShown && !G.cine));
  if (running) {
    update(dt);
  } else {
    updateUI(0, { prompt: '' });
    updateSky(0, camera.position);
  }
  updateFx(running ? dt : 0, camera.position);
  input.endFrame();
  renderer.render(scene, camera);
  renderViewmodel(renderer);
}
function update(dt) {
  {
    if (G.driving) { if (input.hit('KeyE') && !G.menuOpen) { exitRover(player); input.pressed.delete('KeyE'); } }
    if (!G.driving) player.update(dt);
    updateRover(dt, player, camera);
    updateSky(dt, camera.position);
    if (G.time.dawn) { G.time.dawn = false; toast(`第 ${G.time.day} 日 · 黎明`, 'sun'); }
    updateNodes(dt);
    if (!G.driving) updateTools(dt, player, camera); else G.lookBuilding = null;
    updateBuildings(dt, { shoot });
    updateColony(dt);
    updateCity(dt, tool.id === 'build' && !!placement.type);
    updateLaunch(dt);
    floraMat.emissiveIntensity = 0.06 + G.time.night * (0.55 + Math.sin(performance.now() * 0.0015) * 0.15);
    updateEnemies(dt);
    updateEvents(dt);
    updateProjectiles(dt);
    updateStory(dt);
    lander.beacon.visible = Math.sin(performance.now() * 0.004) > 0;
    updateAchievements(dt);
    updateAmbient(dt);
    updateRelics(dt);
    const ctx = handleInteraction(dt);
    ctx.tip = hintPrompt(dt);
    updateUI(dt, ctx);
    audio.update(G.storm, G.time.night);
    autosave -= dt; if (autosave <= 0) { autosave = 45; save(true); }
    if (G.terraform > 0 && G.terraform <= 1) { terraT -= dt; if (terraT <= 0) { terraT = 4; applyTerraform(terraCenters(), G.terraform); } }
  }
}
$('loading').style.transition = 'opacity .8s'; $('loading').style.opacity = 0; setTimeout(() => $('loading').remove(), 900);
frame();

window.addEventListener('beforeunload', () => save(true));

// 调试接口（自动化测试用）
window.__G = G;
window.__dbg = {
  give(n = 200) { for (const k in RES_INFO) G.res[k] += n; },
  tp(x, z) { player.pos.set(x, getHeight(x, z), z); },
  time(t) { G.time.t = t; },
  build: (t, x, z) => createBuilding(t, x, z, 0),
  chapter: i => startChapter(i),
  look(yaw, pitch) { player.yaw = yaw; player.pitch = pitch; },
  begin: () => begin(false),
  step(sec, dt = 0.05) { for (let t = 0; t < sec; t += dt) { update(dt); updateFx(dt, camera.position); input.endFrame(); } },
  input,
  save, toast, setGhost, openMenu, closeMenus, tool, placement, rover: getRover,
};
