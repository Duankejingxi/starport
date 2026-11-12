import * as THREE from 'three';
import { G, ColliderGrid, RES_INFO } from './state.js';
import { buildTerrain, makeMapCanvas, getHeight, applyTerraform } from './terrain.js';
import { buildSky, updateSky } from './sky.js';
import { initFx, updateFx, fx } from './fx.js';
import { audio } from './audio.js';
import { generateNodes, updateNodes, serializeNodes, loadNodes } from './resources.js';
import { createBuilding, updateBuildings, serializeBuildings, recalcColony, destroyBuilding, DEFS, setGhost, placement } from './buildings.js';
import { updateProjectiles, updateEnemies, shoot, clearEnemies, rayEnemy } from './combat.js';
import { Player, LANDER_POS } from './player.js';
import { initTools, updateTools, renderViewmodel, tool } from './tools.js';
import { updateColony, lookColonist, serializeColonists, loadColonists } from './colony.js';
import { updateStory, startChapter, radio, CHAPTERS, setStormState, stormState, resetStoryEnding } from './story.js';
import { initUI, updateUI, toast, chapterCard, openMenu, closeMenus } from './ui.js';
import { input, initInput } from './input.js';
import { makeLander } from './models.js';

const SAVE_KEY = 'starport-newhome-v1';
const $ = id => document.getElementById(id);
G.debug = /[?&]debug/.test(location.search);

// —— 渲染器与场景 ——
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
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

// —— 指针锁定 ——
G.requestLock = () => {
  if (G.debug) { G.locked = true; return; }
  try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* 忽略 */ }
};
document.addEventListener('pointerlockchange', () => {
  G.locked = document.pointerLockElement === canvas;
  if (!G.locked && G.started && !G.menuOpen && !player.dead && !G.endingShown) openMenu('pause');
});
canvas.addEventListener('click', () => {
  if (G.started && !G.locked && !G.menuOpen && !player.dead) G.requestLock();
});

// —— 存档 ——
function save(silent) {
  if (!G.started) return;
  const data = {
    v: 1, res: G.res, upgrades: G.upgrades, stats: G.stats, chapter: G.chapter, goalDone: G.goalDone, terraform: G.terraform, ended: G.ended, nights: G.nightsSurvived || 0,
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
  for (const [t, x, z, r, hp] of d.buildings) if (DEFS[t]) createBuilding(t, x, z, r, hp);
  G.stats = d.stats; G.goalDone = d.goalDone || {};
  G.terraform = d.terraform || 0; G.ended = !!d.ended; G.nightsSurvived = d.nights || 0;
  resetStoryEnding(G.terraform >= 1);
  G.time.t = d.time.t; G.time.day = d.time.day;
  player.pos.set(d.player.x, getHeight(d.player.x, d.player.z), d.player.z);
  player.yaw = d.player.yaw; player.o2 = d.player.o2; player.health = Math.max(30, d.player.hp);
  loadColonists(d.colonists || []);
  setStormState(d.storm);
  startChapter(d.chapter, true);
  recalcColony();
  if (G.terraform > 0) applyTerraform(terraCenters(), G.terraform);
}
const terraCenters = () => G.buildings.filter(b => b.type === 'terraformer').map(b => ({ x: b.x, z: b.z }));

// —— 开场 ——
const STORY = [
  '2089 年。',
  '地球依然美丽，但已经太拥挤、太炎热、太疲惫。',
  '「方舟计划」把人类的未来，押在了一颗红色星球上。',
  '经过七个月、两亿两千五百万公里的航行——',
  '你的着陆舱，在乌托邦平原的晨光中落地。',
  '你是第一个。<b style="color:#ff8a3d">但不会是最后一个。</b>',
];
$('story').innerHTML = STORY.map((s, i) => `<p style="animation-delay:${0.4 + i * 1.1}s">${s}</p>`).join('');
const existing = loadSave();
if (existing) {
  $('btn-continue').classList.remove('hidden');
  $('cont-info').textContent = `${CHAPTERS[existing.chapter]?.title || ''} · 第 ${existing.time.day} 火星日 · ${existing.colonists?.length || 0} 位居民`;
}
if (matchMedia('(pointer: coarse)').matches) $('touch-note').textContent = '本游戏需要键盘和鼠标，请在电脑上游玩。';

function begin(fromSave) {
  audio.init();
  if (fromSave && existing) applySave(existing);
  else {
    localStorage.removeItem(SAVE_KEY);
    generateNodes();
    G.time.t = 0.29; // 清晨
    startChapter(0, true);
    setTimeout(() => { chapterCard(CHAPTERS[0]); CHAPTERS[0].radio.forEach(r => radio(r[0], r[1])); }, 1200);
  }
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
$('btn-save').addEventListener('click', () => save(false));
$('btn-restart').addEventListener('click', () => { if (confirm('确定删除存档并重新开始？')) { localStorage.removeItem(SAVE_KEY); G.started = false; location.reload(); } });
$('vol').addEventListener('input', e => audio.setVolume(+e.target.value));
$('sens').addEventListener('input', e => { input.sens = +e.target.value; });
$('btn-respawn').addEventListener('click', () => { player.respawn(); $('death').classList.add('hidden'); G.requestLock(); });
$('btn-endcont').addEventListener('click', () => { $('ending').classList.add('hidden'); G.endingShown = false; G.requestLock(); });

// —— 事件 ——
G.events.on('chapter', ch => chapterCard(ch));
G.events.on('openBuild', () => openMenu('build'));
G.events.on('death', why => {
  audio.laser(false);
  setTimeout(() => {
    if (G.endingShown) { player.respawn(); return; }
    $('death-why').textContent = why; $('death').classList.remove('hidden');
    if (document.pointerLockElement) document.exitPointerLock();
  }, 1500);
});
let firstNight = true;
G.events.on('nightfall', n => {
  audio.play('night');
  toast(`夜幕降临 · 雷达探测到约 ${n} 个移动信号`);
  if (firstNight) { firstNight = false; radio('方舟一号 · AI', '它们来了。锈蚀蛛会攻击建筑和人。用激光或步枪击退它们——它们的晶体残骸里含有钛。'); }
});
G.events.on('broken', b => toast(`⚠ ${b.def.name} 受损停机！白天会自动修复`));
let firstArrival = true;
G.events.on('shuttleIncoming', n => toast(`🚀 移民飞船正在降落 · ${n} 人`));
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
  turret: ['方舟一号 · AI', '防御炮塔上线。它们需要电力才能运转。'],
  fabricator: ['方舟一号 · AI', '制造工坊就绪。靠近后按 E 打开。'],
};
G.events.on('built', b => {
  const m = BUILT_MSG[b.type];
  if (m && G.stats.built[b.type] === 1) radio(m[0], m[1]);
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
  if (G.menuOpen === 'build' && (e.code === 'Escape' || e.code === 'KeyB')) { closeMenus(true); if (!G.locked) showClickHint(); }
  else if (G.menuOpen === 'craft' && (e.code === 'Escape' || e.code === 'KeyE')) { closeMenus(true); }
});
function showClickHint() { /* 由每帧逻辑显示 */ }

let interact = null, demolishArm = 0, autosave = 30, terraT = 0;
function handleInteraction(dt) {
  const ctx = { prompt: '', crossClass: '' };
  if (player.dead || G.menuOpen) return ctx;
  const origin = camera.position, dir = player.fwd;
  const col = lookColonist(origin, dir);
  const fab = G.buildings.find(b => b.type === 'fabricator' && Math.hypot(b.x - player.pos.x, b.z - player.pos.z) < b.def.r + 6);
  demolishArm = Math.max(0, demolishArm - dt);
  if (col) {
    ctx.crossClass = 'talk';
    ctx.prompt = `<b>${col.name}</b> · ${col.job}<br><kbd>E</kbd> 交谈`;
    if (input.hit('KeyE')) { radio(col.name, col.line); }
  } else if (fab) {
    ctx.prompt = `<kbd>E</kbd> 打开制造工坊${fab.powered ? '' : '（停电中）'}`;
    if (input.hit('KeyE')) { if (fab.powered) openMenu('craft'); else toast('制造工坊没有电力'); }
  }
  const lb = G.lookBuilding;
  if (!ctx.prompt && lb && tool.id !== 'build') {
    const d = lb.def;
    ctx.prompt = `<b>${d.icon} ${d.name}</b> · 耐久 ${Math.ceil(lb.hp)}/${d.hp}${d.power < 0 ? (lb.powered ? ' · <span class="okc">供电中</span>' : ' · <span class="badc">停电</span>') : ''}<br><kbd>X</kbd> ${demolishArm > 0 ? '<span class="badc">再按一次确认拆除（返还 50%）</span>' : '拆除'}`;
    if (lb.broken) ctx.prompt = ctx.prompt.replace('<br>', ' · <span class="badc">受损停机（白天自动修复）</span><br>');
    if (input.hit('KeyX')) {
      if (demolishArm > 0) { destroyBuilding(lb, true); demolishArm = 0; toast(`已拆除 ${d.name}`); }
      else demolishArm = 2;
    }
  }
  if (tool.id === 'laser') {
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
  const running = G.locked && !G.menuOpen && !G.endingShown;
  $('clickhint').classList.toggle('hidden', !(G.started && !G.locked && !G.menuOpen && !player.dead && !G.endingShown));
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
    player.update(dt);
    updateSky(dt, camera.position);
    if (G.time.dawn) { G.time.dawn = false; toast(`☀ 第 ${G.time.day} 个火星日的黎明`); }
    updateNodes(dt);
    updateTools(dt, player, camera);
    updateBuildings(dt, { shoot });
    updateColony(dt);
    updateEnemies(dt);
    updateProjectiles(dt);
    updateStory(dt);
    lander.beacon.visible = Math.sin(performance.now() * 0.004) > 0;
    const ctx = handleInteraction(dt);
    updateUI(dt, ctx);
    audio.update(G.storm, G.time.night);
    autosave -= dt; if (autosave <= 0) { autosave = 45; save(true); }
    if (G.terraform > 0 && G.terraform <= 1) { terraT -= dt; if (terraT <= 0) { terraT = 4; applyTerraform(terraCenters(), G.terraform); } }
  }
}
$('loading').remove();
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
  save, toast, setGhost, openMenu, closeMenus, tool, placement,
};
