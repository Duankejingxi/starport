import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { sunDir } from './sky.js';
import { initPebbles, updatePebbles } from './pebbles.js';
import { G, ColliderGrid, RES_INFO } from './state.js';
import { buildTerrain, makeMapCanvas, getHeight, applyTerraform, floraMat, buildSkyline, updateSkyline } from './terrain.js';
import { buildSky, updateSky } from './sky.js';
import { initFx, updateFx, fx } from './fx.js';
import { audio } from './audio.js';
import { generateNodes, updateNodes, serializeNodes, loadNodes } from './resources.js';
import { createBuilding, updateBuildings, serializeBuildings, recalcColony, destroyBuilding, DEFS, setGhost, placement, canUpgrade, upgradeCost, upgradeBuilding, MAX_LV } from './buildings.js';
import { costText } from './state.js';
import { updateProjectiles, updateEnemies, shoot, clearEnemies, rayEnemy, spawnCrawler, spawnWasp } from './combat.js';
import { Player, LANDER_POS } from './player.js';
import { initTools, updateTools, renderViewmodel, tool } from './tools.js';
import { updateColony, lookColonist, serializeColonists, loadColonists } from './colony.js';
import { updateStory, startChapter, radio, CHAPTERS, setStormState, stormState, resetStoryEnding } from './story.js';
import { visorBoot } from './ui.js';
import { initUI, updateUI, toast, chapterCard, openMenu, closeMenus, setPausePane, archiveHTML, buildMenuKey } from './ui.js';
import { updateAchievements, achievementsHTML } from './achievements.js';
import { updateAmbient } from './ambient.js';
import { ic } from './icons.js';
import { initRelics, updateRelics, relicAt, discover } from './relics.js';
import { initCompanion, updateCompanion } from './companion.js';
import { updateSystems, isFree, MODES, DIFFS } from './systems.js';
import { reqCtx } from './ui.js';
import { relicCount } from './relics.js';
import { unlockState } from './buildings.js';
import { input, initInput } from './input.js';
import { M as MAT, glow } from './models.js';
import { makeLanderHD as makeLander } from './models_hd.js';
import { P, PID, PLANETS, SAVE_KEY, META, saveMeta, loadMeta, clearAll } from './planets.js';
import { initCity, updateCity, LEVELS } from './city.js';
import { spawnRover, getRover, roverState, enterRover, exitRover, updateRover, roverSpeed } from './rover.js';
import { updateEvents, podAt, openPod, dropPod } from './events.js';
import { updateFestival, startFestival } from './festival.js';
import { updateMega } from './mega.js';
import { initCineFx, updateCineFx, explode, billow, shockwave, flash as cineFlash, shake as cineShake } from './cinefx.js';
import { playWarp } from './warp.js';
import { throwGrenade, updateGrenades } from './grenade.js';
import { updateDevils, spawnDevil } from './devils.js';
import { updateLoot } from './loot.js';
import { initGeysers, updateGeysers, geyserList, triggerGeyser } from './geysers.js';
import { initLightPool, updateLightPool } from './lightpool.js';

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
  if (composer) composer.setPixelRatio(renderer.getPixelRatio()), composer.setSize(window.innerWidth, window.innerHeight);
}
// 泛光后期：仅高画质开启
let composer = null, bloom = null;
function setupComposer() {
  const rt = new THREE.WebGLRenderTarget(window.innerWidth * renderer.getPixelRatio(), window.innerHeight * renderer.getPixelRatio(), { type: THREE.HalfFloatType });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  // 环境光遮蔽：缝隙、接缝、贴地处的柔和阴影
  gtao = new GTAOPass(scene, camera, window.innerWidth, window.innerHeight);
  gtao.output = GTAOPass.OUTPUT.Default; gtao.blendIntensity = 1.0;
  // 法线/深度预渲染只要实体：精灵、粒子、加法发光体都隐藏，否则会在 AO 里留下黑色方块
  gtao.overrideVisibility = function () {
    const cache = this._visibilityCache;
    this.scene.traverse(o => {
      cache.set(o, o.visible);
      const m = o.material;
      if (o.isPoints || o.isLine || o.isSprite || o.userData.noAO || (m && !Array.isArray(m) && m.transparent && (m.depthWrite === false || m.blending === THREE.AdditiveBlending))) o.visible = false;
    });
  };
  gtao.updateGtaoMaterial({ radius: 1.6, distanceExponent: 1.4, thickness: 1.5, scale: 1.2, samples: 12 });
  gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
  composer.addPass(gtao);
  // 体积光：从太阳屏幕位置向外的径向光束
  shafts = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uSun: { value: new THREE.Vector2(0.5, 0.5) }, uK: { value: 0 }, uAsp: { value: 1 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uK, uAsp; varying vec2 vUv;
      void main(){
        vec4 base = texture2D(tDiffuse, vUv);
        if (uK < 0.001) { gl_FragColor = base; return; }
        vec2 d = (uSun - vUv); float dist = length(d * vec2(uAsp, 1.0));
        d *= 0.92 / 48.0;
        vec2 uv = vUv; float decay = 1.0; vec3 acc = vec3(0.0);
        for (int i = 0; i < 48; i++) {
          uv += d;
          vec3 s = texture2D(tDiffuse, clamp(uv, 0.001, 0.999)).rgb;
          float b = max(max(s.r, s.g), s.b);
          acc += s * smoothstep(1.3, 3.0, b) * decay;
          decay *= 0.965;
        }
        acc *= 0.035 * uK * (1.0 - smoothstep(0.2, 1.1, dist) * 0.6);
        gl_FragColor = vec4(base.rgb + acc, base.a);
      }`,
  });
  composer.addPass(shafts);
  bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.55, 0.5, 0.88);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  // 电影调色：轻微对比、暖高光冷阴影、暗角、胶片颗粒、边缘色散
  grade = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uT: { value: 0 }, uNight: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform sampler2D tDiffuse; uniform float uT, uNight; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uT) * 43758.5453); }
      void main(){
        vec2 d = vUv - 0.5; float r2 = dot(d, d);
        vec2 off = d * r2 * 0.012;
        vec3 c = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
        float l = dot(c, vec3(0.299, 0.587, 0.114));
        c = mix(vec3(l), c, 1.08);
        c = (c - 0.5) * 1.06 + 0.5;
        c += mix(vec3(-0.012, 0.0, 0.025), vec3(0.03, 0.012, -0.02), smoothstep(0.2, 0.8, l));
        c *= 1.0 - r2 * mix(0.55, 0.8, uNight);
        c += (h(vUv * 917.0) - 0.5) * mix(0.022, 0.04, uNight);
        gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
      }`,
  });
  composer.addPass(grade);
  // 后处理抗锯齿（SMAA）：不影响粒子，开销小
  smaa = new SMAAPass(window.innerWidth * renderer.getPixelRatio(), window.innerHeight * renderer.getPixelRatio());
  composer.addPass(smaa);
}
let grade = null, gtao = null, shafts = null, smaa = null;
const _sv = new THREE.Vector3();
function renderScene() {
  updateSkyline(camera.position, scene.fog.color);
  if (quality === 'high' && composer) {
    // 夜里泛光更强，白天收敛，避免天空过曝
    bloom.strength = 0.3 + G.time.night * 0.22;
    bloom.threshold = 0.9;
    // 体积光：太阳在屏幕内且在地平线以上时才出现
    _sv.copy(camera.position).addScaledVector(sunDir, 1000).project(camera);
    const onScr = _sv.z < 1 && Math.abs(_sv.x) < 1.6 && Math.abs(_sv.y) < 1.6;
    const sk = onScr ? THREE.MathUtils.smoothstep(sunDir.y, -0.02, 0.12) * (1 - G.storm) * (1 - THREE.MathUtils.smoothstep(Math.max(Math.abs(_sv.x), Math.abs(_sv.y)), 1.0, 1.6)) : 0;
    shafts.uniforms.uK.value += (sk - shafts.uniforms.uK.value) * 0.1;
    shafts.uniforms.uSun.value.set(_sv.x * 0.5 + 0.5, _sv.y * 0.5 + 0.5);
    shafts.uniforms.uAsp.value = camera.aspect;
    grade.uniforms.uT.value = (performance.now() * 0.001) % 100; grade.uniforms.uNight.value = G.time.night;
    composer.render();
  } else renderer.render(scene, camera);
}
applyQuality(quality, false);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 6000);
setupComposer();
G.scene = scene; G.camera = camera; G.renderer = renderer;
G.colliders = new ColliderGrid(16);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  if (composer) composer.setSize(window.innerWidth, window.innerHeight);
  if (gtao) gtao.setSize(window.innerWidth, window.innerHeight);
});

// —— 世界生成 ——
initCineFx();
G.hiShadows = quality === 'high';
buildSky(scene);
buildTerrain(scene);
buildSkyline(scene);
initFx(scene);
initLightPool(scene, quality === 'high');
initGeysers(scene);
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
  // Chrome 在刚退出锁定后约 1 秒内会拒绝再次锁定：失败时稍后自动重试一次
  const retry = () => setTimeout(() => { if (!G.locked && G.started && !G.menuOpen) { try { const q = canvas.requestPointerLock(); if (q && q.catch) q.catch(() => {}); } catch (e) { /* 忽略 */ } } }, 1100);
  try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(retry); } catch (e) { retry(); }
};
let lockErr = 0;
document.addEventListener('pointerlockerror', () => { if (++lockErr <= 2) setTimeout(() => { if (!G.locked && G.started && !G.menuOpen) try { canvas.requestPointerLock(); } catch (e) { /* 忽略 */ } }, 1100); });
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === canvas) lockErr = 0;
  G.locked = document.pointerLockElement === canvas;
  if (!G.locked && G.started && !G.menuOpen && !player.dead && !G.endingShown && !G.cine) openMenu('pause');
});
// 提示「点击画面继续」时，按任意键（Esc 除外）也能继续
window.addEventListener('keydown', e => {
  if (e.code !== 'Escape' && G.started && !G.locked && !G.menuOpen && !player.dead && !G.endingShown && !G.cine && !$('clickhint').classList.contains('hidden')) G.requestLock();
});
canvas.addEventListener('click', () => {
  audio.init();
  if (G.started && !G.locked && !G.menuOpen && !player.dead) G.requestLock();
});

// —— 存档 ——
function save(silent) {
  if (!G.started) return;
  const data = {
    v: 1, res: G.res, upgrades: G.upgrades, stats: G.stats, chapter: G.chapter, goalDone: G.goalDone, terraform: G.terraform, ended: G.ended, nights: G.nightsSurvived || 0, city: G.cityLevel, pop: G.popTotal || 0, launched: !!G.launched, rover: roverState(), relics: G.relicsFound || [], plazaSeen: !!G.plazaSeen, mode: G.mode, diff: G.diffKey, morale: G.morale, waypoint: G.waypoint || null, megaSeen: !!G.megaSeen, tech: G.tech || {}, rp: G.rp || 0, requests: G.requests || [],
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
  G.relicsFound = d.relics || []; G.plazaSeen = !!d.plazaSeen;
  G.morale = d.morale; G.waypoint = d.waypoint || null; G.megaSeen = !!d.megaSeen; G.mode = d.mode || 'story'; G.diffKey = d.diff || 'normal'; G.tech = d.tech || {}; G.rp = d.rp || 0; G.requests = d.requests || [];
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
  $('cont-info').textContent = `${existing.mode === 'free' ? '自由' : '剧情'} · ${P.name} · ${CHAPTERS[existing.chapter]?.title || ''} · 第 ${existing.time.day} 日 · ${existing.pop ?? existing.colonists?.length ?? 0} 位居民`;
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
  if (fromSave && existing) { applySave(existing); setTimeout(visorBoot, 300); }
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
    G.mode = G.mode || 'story'; G.diffKey = G.diffKey || 'normal';
    startChapter(0, true);
    if (isFree()) {
      playLanding(() => {
        visorBoot();
        setTimeout(() => chapterCard({ k: 'FREE MODE', title: P.name, sub: `自由开拓 · ${DIFFS[G.diffKey].name}` }), 1600);
        radio('方舟 · AI', '自由模式已启动。没有任务清单，这片土地完全属于你。建好第一座设施后，居民和指挥中心会陆续提出委托。');
        radio('方舟 · AI', '提示：B 建造，T 科研，Tab 殖民地档案。祝你好运。');
      });
    } else playCine(() => playLanding(() => { visorBoot(); setTimeout(() => chapterCard(CHAPTERS[0]), 1600); CHAPTERS[0].radio.forEach(r => radio(r[0], r[1])); }));
  }
  initRelics();
  initCompanion();
  if (quality !== 'low') initPebbles();
  $('intro').classList.add('hidden');
  document.body.classList.add('playing');
  G.started = true;
  G.requestLock();
}
// —— 开局设置：模式、难度、星球 ——
const setup = { mode: 'story', diff: 'normal', planet: 'mars' };
function renderSetup() {
  const card = (grp, k, name, desc, on) => `<button class="opt ${on ? 'on' : ''}" data-g="${grp}" data-k="${k}"><b>${name}</b><span>${desc}</span></button>`;
  const planets = setup.mode === 'free'
    ? `<h3>星球</h3><div class="opts">${Object.values(PLANETS).map(p => card('planet', p.id, p.name, p.title + ' · ' + p.place, setup.planet === p.id)).join('')}</div>`
    : '<p class="sm">剧情从火星开始。完成每颗星球的故事后，乘殖民舰前往下一颗。</p>';
  $('intro-pane').innerHTML = `<h3>模式</h3><div class="opts">${Object.entries(MODES).map(([k, m]) => card('mode', k, m.name, m.desc, setup.mode === k)).join('')}</div>
    <h3>难度</h3><div class="opts three">${Object.entries(DIFFS).map(([k, d]) => card('diff', k, d.name, d.desc, setup.diff === k)).join('')}</div>
    ${planets}
    <button class="launch" id="btn-launch">出发</button>`;
  $('intro-pane').dataset.k = 'setup';
  $('intro-pane').classList.remove('hidden');
  $('intro-pane').querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => { setup[b.dataset.g] = b.dataset.k; if (b.dataset.g === 'mode' && b.dataset.k === 'story') setup.planet = 'mars'; audio.play('tick'); renderSetup(); }));
  $('btn-launch').addEventListener('click', launchNew);
}
function launchNew() {
  const target = setup.mode === 'story' ? 'mars' : setup.planet;
  if (setup.mode === 'story') {
    if (META.visited?.length || existing) { if (!confirm('剧情模式会从火星重新开始，并清除所有星球的进度。确定吗？')) return; }
    clearAll();
  } else {
    if (hasSave(target) && !confirm(`将覆盖 ${PLANETS[target].name} 的现有存档，确定吗？`)) return;
    try { localStorage.removeItem(target === 'mars' ? 'starport-newhome-v1' : 'starport-planet-' + target); } catch (e) { /* 忽略 */ }
    const m = loadMeta(); delete m.carry; m.planet = target; saveMeta(m);
  }
  if (target === PID) { G.mode = setup.mode; G.diffKey = setup.diff; begin(false); return; }
  try { localStorage.setItem('starport-newgame', JSON.stringify({ mode: setup.mode, diff: setup.diff })); } catch (e) { /* 忽略 */ }
  const m = loadMeta(); m.planet = target; saveMeta(m);
  location.href = location.pathname + (G.debug ? '?debug' : '');
}
$('btn-new').addEventListener('click', () => {
  audio.init();
  // 乘殖民舰抵达的新星球：直接登陆，沿用原来的模式与难度
  if (PID !== 'mars' && !existing && META.visited?.length && !META.freshFree) { G.mode = META.mode || 'story'; G.diffKey = META.diff || 'normal'; begin(false); return; }
  renderSetup();
});
// 从设置页跳转过来的新游戏：自动开始
try {
  const pend = JSON.parse(localStorage.getItem('starport-newgame'));
  if (pend) { localStorage.removeItem('starport-newgame'); G.mode = pend.mode; G.diffKey = pend.diff; setTimeout(() => begin(false), 60); }
} catch (e) { /* 忽略 */ }
$('btn-continue').addEventListener('click', () => begin(true));
$('tele-planet').textContent = `${P.name} · ${P.place}`;
const HELP = `<h3>操作</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>移动</span></div><div><kbd>鼠标</kbd><span>环视</span></div>
  <div><kbd>Shift</kbd><span>冲刺</span></div><div><kbd>空格</kbd><span>跳跃 / 喷气背包</span></div>
  <div><kbd>左键</kbd><span>采矿 · 射击 · 放置建筑</span></div><div><kbd>右键</kbd><span>取消建造</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>切换工具</span></div><div><kbd>B</kbd><span>建造蓝图</span></div>
  <div><kbd>E</kbd><span>互动 · 交谈 · 上车</span></div><div><kbd>U</kbd><span>升级注视的建筑</span></div><div><kbd>T</kbd><span>科研</span></div>
  <div><kbd>Q</kbd><span>小星扫描矿藏</span></div><div><kbd>M</kbd><span>星球地图 / 导航</span></div><div><kbd>F</kbd><span>手电筒</span></div><div><kbd>Tab</kbd><span>殖民地档案</span></div>
  <div><kbd>P</kbd><span>拍照模式</span></div><div><kbd>Esc</kbd><span>暂停</span></div></div>
  <h3>生存</h3><p>氧气会持续消耗。着陆舱、制氧站和居住穹顶附近会自动补氧。建好住房、氧气、食物、水和着陆场，移民飞船就会到来。夜里要提防锈蚀蛛。</p>`;
const togglePane = html => { const el = $('intro-pane'); if (!el.classList.contains('hidden') && el.dataset.k === html.slice(0, 20)) { el.classList.add('hidden'); return; } el.dataset.k = html.slice(0, 20); el.innerHTML = html; el.classList.remove('hidden'); audio.play('tick'); };
$('btn-t-help').addEventListener('click', () => togglePane(HELP));
$('btn-t-achv').addEventListener('click', () => togglePane(achievementsHTML()));
if (PID !== 'mars' && !existing) $('btn-new').textContent = `登陆 ${P.name}`;
if (PID !== 'mars' && !existing && META.visited?.length) $('btn-setup').classList.remove('hidden');
$('btn-setup').addEventListener('click', () => { audio.init(); renderSetup(); });
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
reqCtx.unlocked = k => unlockState(k).ok;
reqCtx.relicLeft = () => relicCount().found < relicCount().total;
reqCtx.relicFound = () => relicCount().found;
G.events.on('request', r => { toast(`新委托：${r.text}`, 'radio'); radio(`${r.giver} · 委托`, r.line); });
G.events.on('requestDone', r => { toast(`委托完成：${r.text}`, 'check', 'good'); radio(r.giver, ['谢谢你！这帮了大忙。', '太好了，大家都会记得的。', '辛苦了！这是一点心意。'][Math.floor(Math.random() * 3)]); });
G.events.on('researched', id => { if (id === 'swarm' || id === 'alloy') recalcColony(); });
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
  if (e.code === 'KeyM' && !G.endingShown && !player.dead) { if (G.menuOpen === 'mapscr') closeMenus(true); else if (!G.menuOpen) openMenu('mapscr'); return; }
  if (G.menuOpen === 'mapscr' && e.code === 'Escape') { closeMenus(true); return; }
  if (e.code === 'KeyT' && !G.endingShown && !player.dead) { if (G.menuOpen === 'research') closeMenus(true); else if (!G.menuOpen) openMenu('research'); return; }
  if (G.menuOpen === 'research' && e.code === 'Escape') { closeMenus(true); return; }
  if (G.menuOpen === 'trade' && (e.code === 'Escape' || e.code === 'KeyE')) { closeMenus(true); return; }
  if (e.code === 'KeyP' && !G.menuOpen) { G.photo = !G.photo; G.usedPhoto = true; document.body.classList.toggle('photo', G.photo); setFilter(G.photo ? filterIdx : 0); audio.play('tick'); return; }
  if (G.photo && !G.menuOpen) {
    const n = ['Digit1', 'Digit2', 'Digit3', 'Digit4'].indexOf(e.code);
    if (n >= 0) { filterIdx = n; setFilter(n); audio.play('tick'); e.stopImmediatePropagation(); return; }
    if (e.code === 'Enter') { G.snap = true; return; }
  }
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
  { id: 'move', text: '<kbd>W A S D</kbd>移动　<kbd>Shift</kbd>冲刺<br><kbd>鼠标</kbd>环视　<kbd>空格</kbd>跳跃', when: () => playT > 0.5 && playT < 40 },
  { id: 'mine', text: '对准发光的矿石，<kbd>按住左键</kbd> 用采矿激光采集', when: () => playT > 6 && G.stats.mined.iron + G.stats.mined.silicon === 0 },
  { id: 'build', text: '资源够了！按 <kbd>B</kbd> 打开建造菜单', when: () => G.buildings.length === 0 && G.res.iron >= 8 && G.res.silicon >= 6 },
  { id: 'o2', text: '氧气在持续消耗。回到着陆舱或制氧站附近会自动补氧', when: () => !player.inLife && player.o2 < player.maxO2 * 0.5 },
  { id: 'night', text: '天黑了，按 <kbd>F</kbd> 打开手电筒', when: () => G.time.night > 0.6 && !player.flashlight },
  { id: 'craft', text: '靠近制造工坊按 <kbd>E</kbd> 制造武器和装备——试试加压漫游车', when: () => G.buildings.some(b => b.type === 'fabricator') && !G.upgrades.rifle },
  { id: 'drive', text: '漫游车就在附近，走过去按 <kbd>E</kbd> 上车', when: () => getRover() && !G.driving && !hintSeen.drove },
  { id: 'research', text: '研究所已建成，按 <kbd>T</kbd> 用科研点数解锁科技', when: () => G.buildings.some(b => b.type === 'lab') && (G.rp || 0) >= 20 },
  { id: 'request', text: '居民提出了委托（右侧任务栏），完成后有奖励', when: () => (G.requests || []).length > 0 },
  { id: 'map', text: '按 <kbd>M</kbd> 打开星球地图，点击可设置导航点', when: () => playT > 90 },
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
// —— 星际发射：倒计时 → 点火 → 地面烟云翻涌 → 升空追踪镜头 → 白光 → 虫洞穿越 ——
function startLaunch(b, dest) {
  const pad = new THREE.Vector3(b.x, b.y, b.z);
  // 选机位：背对太阳（顺光），视线上没有建筑和山体遮挡
  const sunA = Math.atan2(sunDir.z, sunDir.x);
  let dir = null, cam = null;
  for (let i = 0; i < 24 && !cam; i++) {
    const a = sunA + (i % 2 ? 1 : -1) * Math.ceil(i / 2) * 0.26, D = 74;
    const d = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
    const c = pad.clone().addScaledVector(d, D); c.y = getHeight(c.x, c.z) + 2.6;
    let ok = !G.colliders.overlaps(c.x, c.z, 6);
    for (let k = 0.05; ok && k < 0.85; k += 0.05) {
      const x = c.x + (pad.x - c.x) * k, z = c.z + (pad.z - c.z) * k;
      if (G.colliders.overlaps(x, z, 2.5) || getHeight(x, z) > c.y + (b.y + 10 - c.y) * k) ok = false;
    }
    if (ok) { dir = d; cam = c; }
  }
  if (!cam) { dir = new THREE.Vector3(Math.cos(sunA), 0, Math.sin(sunA)); cam = pad.clone().addScaledVector(dir, 74); cam.y = getHeight(cam.x, cam.z) + 2.6; }
  const cap = document.createElement('div'); cap.id = 'launch-cap'; cap.innerHTML = '<div class="lc-k">LAUNCH SEQUENCE · ' + PLANETS[dest].name + '</div><div class="lc-n"></div>'; document.body.appendChild(cap);
  G.launching = { b, t: 0, dest, pad, dir, cam, cap, n: -1, look: pad.clone().setY(b.y + 14), fov: camera.fov, v: 0 };
  G.launched = true; G.cine = true;
  document.body.classList.add('cinema');
  if (document.pointerLockElement) document.exitPointerLock();
  audio.play('rumble');
  radio('方舟 · AI', `殖民舰进入发射程序。目标：${PLANETS[dest].name}。全体乘员，祝你们好运。`);
  const skip = e => { if (e.type === 'mousedown' || e.code === 'Space' || e.code === 'Escape') G.launching.t = Math.max(G.launching.t, 11); };
  G.launching.skip = skip;
  setTimeout(() => { window.addEventListener('keydown', skip); window.addEventListener('mousedown', skip); }, 300);
}
const _lv = new THREE.Vector3();
function updateLaunch(dt) {
  const L = G.launching; if (!L) return;
  L.t += dt;
  const ship = L.b.anim.ship, flame = L.b.anim.flame;
  const IGN = 3.6, LIFT = 5.2;
  // 倒计时字幕
  const n = L.t < 0.3 ? -1 : L.t < 1.4 ? 3 : L.t < 2.5 ? 2 : L.t < IGN ? 1 : L.t < LIFT + 1.5 ? 0 : -2;
  if (n !== L.n) {
    L.n = n; const el = L.cap.querySelector('.lc-n');
    if (n === -2) L.cap.classList.add('out');
    else if (n >= 0) { el.textContent = n > 0 ? 'T – ' + n : '点火'; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); if (n > 0) audio.play('click'); }
  }
  ship.getWorldPosition(_lv);
  const base = _lv.clone();
  if (L.t < IGN) {
    // 发射前：底部排气、白色蒸汽
    if (Math.random() < dt * 14) fx.dustPuff(new THREE.Vector3(L.pad.x + (Math.random() - 0.5) * 6, L.pad.y + 2 + Math.random() * 3, L.pad.z + (Math.random() - 0.5) * 6), 1, 1.2, [0.9, 0.9, 0.92]);
  } else {
    if (!L.ign) {
      L.ign = true; flame.visible = true;
      shockwave(base.clone().setY(L.pad.y + 1.5), 0xffd0a0, 18, 1.4);
      cineShake(1.2); audio.play('kill'); audio.engine(1);
    }
    const burn = Math.min(1, (L.t - IGN) / 1.2);
    flame.scale.set(0.6 + burn * 0.5, 0.4 + burn * 1.1 + Math.random() * 0.15, 0.6 + burn * 0.5);
    const alt = base.y - L.pad.y;
    const rate = Math.max(0, 1 - alt / 70);
    for (let i = 0; i < Math.round(4 * rate); i++) billow(L.pad.clone().setY(L.pad.y + 0.5), 1.5);
    for (let i = 0; i < 4; i++) fx.flame(base);
    const lp = base.clone(); lp.y -= 4;
    cineFlash(lp, 0xffa860, (2500 + Math.random() * 900) * burn, 260, 0.12);
    G.shake = Math.max(G.shake || 0, 0.35 * rate + 0.08);
    if (L.t > LIFT) { L.v += dt * (1.2 + (L.t - LIFT) * 3.2); ship.position.y += L.v * dt; }
  }
  // 镜头：缓慢推近 → 仰拍追踪，焦距逐渐拉长
  const push = Math.min(1, L.t / 6);
  const cp = L.cam.clone().addScaledVector(L.dir, -push * 10);
  camera.position.copy(cp);
  const tgt = base.clone(); tgt.y += 14;
  L.look.lerp(tgt, 1 - Math.pow(0.02, dt));
  camera.lookAt(L.look);
  // 长焦跟拍：让飞船在画面里保持一定大小
  const dist = camera.position.distanceTo(tgt);
  const want = THREE.MathUtils.radToDeg(2 * Math.atan(48 / dist));
  camera.fov = THREE.MathUtils.clamp(want, 9, L.fov); camera.updateProjectionMatrix();
  const sh = G.shake || 0;
  if (sh > 0.01) { camera.position.x += (Math.random() - 0.5) * sh * 0.6; camera.position.y += (Math.random() - 0.5) * sh * 0.5; }
  G.shake = sh * Math.pow(0.1, dt);
  if (L.t > 11 && !L.faded) { L.faded = true; $('fade').classList.add('white', 'on'); audio.engine(0); }
  if (L.t > 12.6 && !L.done) {
    L.done = true;
    window.removeEventListener('keydown', L.skip); window.removeEventListener('mousedown', L.skip);
    travel(L.dest);
  }
}
function travel(dest) {
  const meta = loadMeta();
  meta.visited = (meta.visited || []).filter(v => v.id !== PID).concat([{ id: PID, pop: G.colony.pop, day: G.time.day }]);
  meta.planet = dest; meta.mode = G.mode || 'story'; meta.diff = G.diffKey || 'normal';
  meta.autoResume = hasSave(dest);
  const carry = {};
  for (const k in G.res) carry[k] = Math.min(Math.floor(G.res[k] * 0.4), 80);
  meta.carry = { upgrades: G.upgrades, res: carry };
  save(true);
  saveMeta(meta);
  const nx = PLANETS[dest];
  G.endingShown = true;
  if (document.pointerLockElement) document.exitPointerLock();
  audio.play('chapter');
  setTimeout(() => { G.warping = true; }, 1300);
  playWarp([`WORMHOLE TRANSIT · 虫洞穿越`, `<b>${nx.name}</b>`, `${nx.title}${meta.autoResume ? ' · 已开拓' : ''}`, `<span class="stats">${P.name}的 ${G.colony.pop} 位居民，会替你守着那里的灯火。</span>`], () => {
    location.href = location.pathname + (G.debug ? '?debug' : '');
  }, 7.5);
  setTimeout(() => $('fade').classList.remove('on', 'white'), 400);
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
  const pod = podAt(player.pos);
  if (pod) { ctx.prompt = '<b>地球补给舱</b><br><kbd>E</kbd>打开'; if (input.hit('KeyE')) openPod(pod); return ctx; }
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
  const tradeSt = G.buildings.find(b => b.type === 'trade' && Math.hypot(b.x - player.pos.x, b.z - player.pos.z) < b.def.r + 5);
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
  } else if (tradeSt) {
    ctx.prompt = `<b>星际贸易站</b>${tradeSt.powered ? '' : ' · <span class="badc">停电</span>'}<br><kbd>E</kbd>交易`;
    if (input.hit('KeyE')) { if (tradeSt.powered) openMenu('trade'); else toast('贸易站没有电力', 'warn', 'warn'); }
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

// —— 拍照模式：电影遮幅、滤镜、保存照片 ——
const FILTERS = [['原色', 'none'], ['胶片', 'sepia(.35) contrast(1.12) saturate(1.15) brightness(1.03)'], ['黑白', 'grayscale(1) contrast(1.25)'], ['冷调', 'hue-rotate(-18deg) saturate(.85) contrast(1.08) brightness(1.05)']];
let filterIdx = 0;
function setFilter(i) {
  canvas.style.filter = FILTERS[i][1] === 'none' ? '' : FILTERS[i][1];
  $('photo-bar').innerHTML = FILTERS.map((f, j) => `<span class="${j === i ? 'on' : ''}"><kbd>${j + 1}</kbd>${f[0]}</span>`).join('') + '<span class="sep"></span><span><kbd>Enter</kbd>保存照片</span><span><kbd>P</kbd>退出</span>';
}
function snapshot() {
  const W = canvas.width, H = canvas.height, bar = Math.round(H * 0.1);
  const out = document.createElement('canvas'); out.width = W; out.height = H;
  const g = out.getContext('2d');
  g.filter = FILTERS[filterIdx][1];
  g.drawImage(canvas, 0, 0);
  g.filter = 'none';
  g.fillStyle = '#000'; g.fillRect(0, 0, W, bar); g.fillRect(0, H - bar, W, bar);
  const fs = Math.round(H * 0.022);
  g.font = `300 ${fs * 1.6}px "Noto Sans SC", sans-serif`; g.fillStyle = '#fff'; g.textBaseline = 'middle';
  g.fillText('星 港', fs * 2, H - bar / 2);
  g.font = `400 ${fs}px "Noto Sans SC", sans-serif`; g.fillStyle = 'rgba(255,255,255,.7)'; g.textAlign = 'right';
  g.fillText(`${P.name} · ${P.place} · 第 ${G.time.day} 日 · 人口 ${G.colony.pop}`, W - fs * 2, H - bar / 2);
  const a = document.createElement('a');
  a.download = `星港-${P.name}-第${G.time.day}日.png`; a.href = out.toDataURL('image/png');
  document.body.appendChild(a); a.click(); a.remove();
  $('shutter').classList.remove('on'); void $('shutter').offsetWidth; $('shutter').classList.add('on');
  audio.play('shutter');
  G.stats.photos = (G.stats.photos || 0) + 1;
}

// —— 开场着陆：镜头看着着陆舱从天而降，落地后推进到第一人称 ——
let landing = null;
const DESCENT = 9.5;
function playLanding(done) {
  if (G.debug && !/landing/.test(location.search)) { done(); return; }
  G.cine = true; document.body.classList.add('cinema');
  const lg = lander.group, gy = getHeight(LANDER_POS.x, LANDER_POS.z) + 0.1;
  const flame = new THREE.Mesh(new THREE.ConeGeometry(1.7, 10, 18, 1, true), MAT.flame);
  flame.rotation.x = Math.PI; flame.position.y = -4.2; lg.add(flame);
  const fglow = glow(0xffa040, 22, lg, 0, -0.5, 0);
  const lamp = new THREE.PointLight(0xffa050, 0, 120, 1.4); lamp.position.y = -2; lg.add(lamp);
  const camAt = new THREE.Vector3(LANDER_POS.x + 20, 0, LANDER_POS.z + 25);
  camAt.y = getHeight(camAt.x, camAt.z) + 3.2;
  G.time.t = 0.282;
  landing = { t: 0, gy, flame, fglow, lamp, done, camAt, landed: false, shake: 0 };
  lg.position.y = gy + 460;
  audio.play('rumble'); audio.engine(1);
  const skip = e => { if (e.type === 'mousedown' || e.code === 'Space' || e.code === 'Escape') { landing.t = Math.max(landing.t, DESCENT + 6); } };
  landing.skip = skip;
  window.addEventListener('keydown', skip); window.addEventListener('mousedown', skip);
}
const _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _e = new THREE.Euler(), _m = new THREE.Matrix4();
function updateLanding(dt) {
  const L = landing; L.t += dt;
  const lg = lander.group;
  const k = Math.min(1, L.t / DESCENT), e = 1 - Math.pow(1 - k, 2.6);
  lg.position.y = L.gy + 460 * (1 - e);
  lg.rotation.z = Math.sin(L.t * 1.1) * 0.05 * (1 - k);
  const firing = k < 1;
  L.flame.visible = L.fglow.visible = firing;
  L.flame.scale.set(1, 0.5 + (1 - e) * 0.9 + Math.random() * 0.15, 1);
  L.lamp.intensity = firing ? 400 * (0.6 + Math.random() * 0.4) : 0;
  const alt = lg.position.y - L.gy;
  if (firing) {
    const bottom = new THREE.Vector3(lg.position.x, lg.position.y - 1, lg.position.z);
    for (let i = 0; i < 4; i++) fx.flame(bottom, 1.4);
    if (alt < 40) for (let i = 0; i < 3; i++) {
      const a = Math.random() * Math.PI * 2, d = 2 + Math.random() * (14 - alt * 0.25);
      fx.dustPuff(new THREE.Vector3(LANDER_POS.x + Math.cos(a) * d, L.gy + 0.3, LANDER_POS.z + Math.sin(a) * d), 1, 2);
    }
    L.shake = Math.max(L.shake, Math.max(0, 1 - alt / 120) * 0.25);
  } else if (!L.landed) {
    L.landed = true; L.shake = 1;
    fx.ring(new THREE.Vector3(LANDER_POS.x, L.gy, LANDER_POS.z), 4, 160);
    fx.dustPuff(new THREE.Vector3(LANDER_POS.x, L.gy + 1, LANDER_POS.z), 70, 16);
    audio.play('land'); audio.play('rumble'); audio.engine(0);
  }
  L.shake *= Math.pow(0.15, dt);
  updateSky(0, camera.position);
  updateFx(dt, camera.position);
  // 镜头：先在地面仰望着陆舱，落地后推进到舱门旁的第一人称视角
  const look = new THREE.Vector3(lg.position.x, lg.position.y + 3, lg.position.z);
  const t2 = L.t - DESCENT - 2.2;
  if (t2 < 0) {
    camera.position.copy(L.camAt);
    camera.position.x += Math.sin(L.t * 0.15) * 4;
    camera.lookAt(look);
  } else {
    const u = Math.min(1, t2 / 3.2), s = u * u * (3 - 2 * u);
    const eye = new THREE.Vector3(player.pos.x, player.pos.y + 1.7, player.pos.z);
    camera.position.lerpVectors(L.camAt, eye, s);
    _m.lookAt(L.camAt, look, camera.up); _q1.setFromRotationMatrix(_m);
    _q2.setFromEuler(_e.set(player.pitch, player.yaw, 0, 'YXZ'));
    camera.quaternion.slerpQuaternions(_q1, _q2, s);
    if (u >= 1) {
      lg.remove(L.flame, L.fglow, L.lamp); lg.position.y = L.gy; lg.rotation.z = 0;
      window.removeEventListener('keydown', L.skip); window.removeEventListener('mousedown', L.skip);
      document.body.classList.remove('cinema'); G.cine = false; landing = null;
      audio.engine(0);
      L.done();
      return;
    }
  }
  if (L.shake > 0.01) { camera.position.x += (Math.random() - 0.5) * L.shake * 0.5; camera.position.y += (Math.random() - 0.5) * L.shake * 0.4; }
}

// —— 性能守护：帧率持续偏低时逐级降低开销，保证操作跟手 ——
const perf = { n: 0, t0: 0, step: 0, last: 0 };
function perfGovernor(now) {
  if (!perf.t0) { perf.t0 = now; perf.n = 0; return; }
  perf.n++;
  const span = now - perf.t0;
  if (span < 4) return;
  const fps = perf.n / span; perf.t0 = now; perf.n = 0;
  if (fps >= 32 || perf.step >= 3 || now - perf.last < 6) return;
  perf.step++; perf.last = now;
  if (perf.step === 1 && quality === 'high') { if (gtao) gtao.enabled = false; renderer.setPixelRatio(1); composer && composer.setPixelRatio(1); renderer.setSize(innerWidth, innerHeight); composer && composer.setSize(innerWidth, innerHeight); }
  else if (quality === 'high') { applyQuality('mid', true); toast('已自动调低画质，保持流畅', 'gear'); }
  else if (quality === 'mid') { applyQuality('low', true); toast('已自动调低画质，保持流畅', 'gear'); }
}

// —— 主循环 ——
const clock = new THREE.Clock();
let introCam = 0;
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (G.warping) return; // 虫洞画面接管屏幕时不再渲染场景
  if (landing) { updateLanding(dt); updateCineFx(dt); renderScene(); input.endFrame(); return; }
  if (G.launching && !G.endingShown) { updateLaunch(dt); updateSky(dt, camera.position); updateBuildings(dt, { shoot }); updateLightPool(dt); updateFx(dt, camera.position); updateCineFx(dt); renderScene(); input.endFrame(); return; }
  if (!G.started) {
    // 标题画面：缓慢环绕着陆舱
    introCam += dt * 0.05;
    const r = 30;
    camera.position.set(LANDER_POS.x + Math.cos(introCam) * r, getHeight(LANDER_POS.x, LANDER_POS.z) + 6, LANDER_POS.z + Math.sin(introCam) * r);
    camera.lookAt(LANDER_POS.x, getHeight(LANDER_POS.x, LANDER_POS.z) + 4, LANDER_POS.z);
    G.time.t = 0.27 + Math.sin(introCam * 0.5) * 0.01;
    updateSky(0, camera.position);
    updateFx(dt, camera.position); updateCineFx(dt);
    renderScene();
    return;
  }
  if (G.debug) G.locked = true;
  const running = G.locked && !G.menuOpen && !G.endingShown && !G.cine;
  if (running && !G.debug) perfGovernor(clock.elapsedTime);
  $('clickhint').classList.toggle('hidden', !(G.started && !G.locked && !G.menuOpen && !player.dead && !G.endingShown && !G.cine));
  if (running) {
    update(dt);
  } else {
    updateUI(0, { prompt: '' });
    updateSky(0, camera.position);
  }
  updateFx(running ? dt : 0, camera.position); updateCineFx(running ? dt : 0);
  input.endFrame();
  renderScene();
  renderViewmodel(renderer);
  if (G.snap) { G.snap = false; snapshot(); }
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
    if (input.hit('KeyG') && !G.menuOpen && !player.dead && !G.driving) throwGrenade(camera, player);
    updateGrenades(dt);
    updateDevils(dt);
    updateLoot(dt);
    updateGeysers(dt);
    updateBuildings(dt, { shoot });
    updateLightPool(dt);
    updateColony(dt);
    updateCity(dt, tool.id === 'build' && !!placement.type);
    floraMat.emissiveIntensity = 0.06 + G.time.night * (0.55 + Math.sin(performance.now() * 0.0015) * 0.15);
    updateEnemies(dt);
    updateEvents(dt);
    updateProjectiles(dt);
    updateStory(dt);
    lander.beacon.visible = Math.sin(performance.now() * 0.004) > 0;
    updateAchievements(dt);
    updateAmbient(dt);
    updateRelics(dt);
    updateCompanion(dt);
    updateSystems(dt, reqCtx);
    updateFestival(dt);
    updateMega(dt);
    updatePebbles();
    if (!G.plazaSeen && G.time.night > 0.6 && G.colonists.filter(c => c.atPlaza && !c.target).length >= 4) {
      G.plazaSeen = true;
      radio('苏念 · 教师', '今晚大家都来了。我们就这样站着，看着那颗蓝色的星球转啊转……孩子问我，那是哪里。我说，那是我们出发的地方。');
    }
    const ctx = handleInteraction(dt);
    ctx.tip = hintPrompt(dt);
    updateUI(dt, ctx);
    audio.update(G.storm, G.time.night);
    autosave -= dt; if (autosave <= 0) { autosave = 45; save(true); }
    if (G.terraform > 0 && G.terraform <= 1) { terraT -= dt; if (terraT <= 0) { terraT = 4; applyTerraform(terraCenters(), G.terraform); } }
  }
}
// 后台并行编译所有着色器，避免进入游戏时主线程长时间卡死
{
  const hide = () => { $('loading').style.transition = 'opacity .8s'; $('loading').style.opacity = 0; setTimeout(() => $('loading').remove(), 900); };
  let p = null; try { p = renderer.compileAsync ? renderer.compileAsync(scene, camera) : null; } catch (e) { p = null; }
  if (p && p.then) Promise.race([p, new Promise(r => setTimeout(r, 8000))]).then(hide, hide); else hide();
}
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
  fest: () => startFestival(),
  boom: (x, y, z, s) => explode(new THREE.Vector3(x, y, z), s),
  pod: () => dropPod(),
  audio, spawnCrawler, spawnDevil, spawnWasp, geyserList, triggerGeyser,
  slope: (x, z) => getHeight(x + 3, z) - getHeight(x, z),
  landStep(sec) { for (let t = 0; t < sec && landing; t += 0.05) updateLanding(0.05); return !!landing; },
  launch(d = "europa") { const b = G.buildings.find(b => b.type === "launch"); startLaunch(b, d); },
  launchStep(sec) { for (let t = 0; t < sec && G.launching && !G.endingShown; t += 0.05) { updateLaunch(0.05); updateFx(0.05, camera.position); updateCineFx(0.05); } return G.launching.t; },
  step(sec, dt = 0.05) { for (let t = 0; t < sec; t += dt) { update(dt); updateFx(dt, camera.position); input.endFrame(); } },
  input,
  save, toast, setGhost, openMenu, closeMenus, tool, placement, rover: getRover,
};
