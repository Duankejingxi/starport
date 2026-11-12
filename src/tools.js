import * as THREE from 'three';
import { G } from './state.js';
import { input } from './input.js';
import { M, glow } from './models.js';
import { raycastTerrain } from './terrain.js';
import { mineNode, NODE_COLOR } from './resources.js';
import { rayEnemy, damageEnemy, shoot } from './combat.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { placement, updateGhost, tryPlace, setGhost } from './buildings.js';

export const TOOLS = [
  { id: 'laser', name: '采矿激光', icon: '⛏' },
  { id: 'rifle', name: '等离子步枪', icon: '🔫', need: 'rifle' },
  { id: 'build', name: '建造', icon: '🏗' },
];
export const tool = { index: 0, get id() { return TOOLS[this.index].id; } };

let vmScene, vmCam, models = {}, beamCore, beamOuter, beamGlow, flash, muzzleFlash;
const MUZZLE = new THREE.Vector3(0.24, -0.21, -0.82);

export function initTools(camera) {
  vmScene = new THREE.Scene();
  vmCam = new THREE.PerspectiveCamera(camera.fov, camera.aspect, 0.01, 10);
  vmScene.add(new THREE.HemisphereLight(0xffe0c8, 0x402018, 1.4));
  const dl = new THREE.DirectionalLight(0xffffff, 1.5); dl.position.set(1, 2, 1); vmScene.add(dl);
  vmScene.userData.dl = dl;

  const mk = (geo, mat, x, y, z, p) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); p.add(m); return m; };
  // 采矿激光
  const laser = new THREE.Group();
  mk(new THREE.BoxGeometry(0.11, 0.13, 0.42), M.panel, 0, 0, 0, laser);
  mk(new THREE.BoxGeometry(0.115, 0.04, 0.3), M.orange, 0, 0.07, 0.02, laser);
  mk(new THREE.CylinderGeometry(0.035, 0.05, 0.2, 10), M.metal, 0, 0, -0.29, laser).rotation.x = Math.PI / 2;
  mk(new THREE.BoxGeometry(0.06, 0.16, 0.07), M.dark, 0, -0.12, 0.1, laser).rotation.x = 0.3;
  const lt = mk(new THREE.SphereGeometry(0.03, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffa060 }), 0, 0, -0.4, laser);
  laser.userData.tip = lt;
  // 等离子步枪
  const rifle = new THREE.Group();
  mk(new THREE.BoxGeometry(0.1, 0.12, 0.6), M.white, 0, 0, -0.05, rifle);
  mk(new THREE.BoxGeometry(0.07, 0.07, 0.3), M.dark, 0, 0.0, -0.45, rifle);
  for (let i = 0; i < 3; i++) mk(new THREE.TorusGeometry(0.06, 0.012, 6, 14), M.cyan, 0, 0, -0.36 - i * 0.07, rifle);
  mk(new THREE.BoxGeometry(0.06, 0.15, 0.08), M.dark, 0, -0.13, 0.12, rifle).rotation.x = 0.3;
  mk(new THREE.BoxGeometry(0.04, 0.05, 0.2), M.orange, 0, 0.08, -0.05, rifle);
  // 建造平板
  const tab = new THREE.Group();
  mk(new THREE.BoxGeometry(0.3, 0.2, 0.02), M.dark, 0, 0, 0, tab);
  const scr = mk(new THREE.PlaneGeometry(0.27, 0.17), new THREE.MeshBasicMaterial({ color: 0x33ccff, transparent: true, opacity: 0.85 }), 0, 0, 0.011, tab);
  tab.userData.scr = scr;
  tab.rotation.set(-0.5, 0.25, 0);
  models = { laser, rifle, build: tab };
  for (const k in models) { models[k].scale.setScalar(k === 'build' ? 0.45 : 0.6); models[k].visible = false; vmScene.add(models[k]); }

  // 光束（世界空间）
  const bg = new THREE.CylinderGeometry(1, 1, 1, 8, 1, true); bg.translate(0, 0.5, 0);
  beamCore = new THREE.Mesh(bg, new THREE.MeshBasicMaterial({ color: 0xfff0d0, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
  beamOuter = new THREE.Mesh(bg, new THREE.MeshBasicMaterial({ color: 0xff7020, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false }));
  beamCore.visible = beamOuter.visible = false; beamCore.frustumCulled = beamOuter.frustumCulled = false;
  G.scene.add(beamCore, beamOuter);
  beamGlow = glow(0xff9040, 1.6, G.scene); beamGlow.visible = false;
  muzzleFlash = glow(0x66e6ff, 0.35, vmScene); muzzleFlash.visible = false;

  // 手电筒
  flash = new THREE.SpotLight(0xfff2dd, 0, 70, 0.42, 0.45, 1.2);
  camera.add(flash); flash.position.set(0.3, -0.2, 0); flash.target.position.set(0, 0, -10); camera.add(flash.target);
  G.scene.add(camera);
}

export function selectTool(i) {
  const t = TOOLS[i];
  if (t.need && !G.upgrades[t.need]) { G.events.emit('toast', `尚未制造：${t.name}（在制造工坊制作）`); audio.play('deny'); return; }
  if (tool.index === i && t.id !== 'build') return;
  tool.index = i; audio.play('ui');
  if (t.id === 'build') G.events.emit('openBuild');
  else setGhost(null);
}

let mineAcc = 0, fireCool = 0, kick = 0, mineSoundT = 0, swap = 0, lastTool = -1;
const tmp = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), oc = new THREE.Vector3();

function rayNode(origin, dir, maxDist) {
  let best = null, bt = maxDist;
  for (const n of G.nodes) {
    const s = n.mesh.scale.x, r = 1.5 * s + 0.3;
    oc.set(n.x - origin.x, n.y + 0.7 * s - origin.y, n.z - origin.z);
    const tca = oc.dot(dir); if (tca < 0 || tca > maxDist + r) continue;
    const d2 = oc.lengthSq() - tca * tca; if (d2 > r * r) continue;
    const t = tca - Math.sqrt(r * r - d2);
    if (t < bt) { bt = Math.max(0.3, t); best = n; }
  }
  return best ? { n: best, dist: bt } : null;
}
function rayBuilding(origin, dir, maxDist) {
  let best = null, bt = maxDist;
  for (const b of G.buildings) {
    const r = Math.max(1.2, b.def.r);
    oc.set(b.x - origin.x, b.y + Math.min(r, 3) * 0.6 - origin.y, b.z - origin.z);
    const tca = oc.dot(dir); if (tca < 0) continue;
    const d2 = oc.lengthSq() - tca * tca; if (d2 > r * r) continue;
    const t = tca - Math.sqrt(r * r - d2);
    if (t < bt) { bt = t; best = b; }
  }
  return best;
}

export function updateTools(dt, player, camera) {
  const id = tool.id;
  if (lastTool !== tool.index) { swap = 1; lastTool = tool.index; }
  swap = Math.max(0, swap - dt * 4);
  for (const k in models) models[k].visible = k === id;
  const m = models[id];
  const hs = Math.hypot(player.vel.x, player.vel.z);
  const bx = Math.sin(player.bob) * 0.012 * Math.min(1, hs / 6), by = Math.abs(Math.cos(player.bob)) * 0.012 * Math.min(1, hs / 6);
  kick *= Math.pow(0.0001, dt);
  const base = id === 'build' ? [0.2, -0.24, -0.6] : [0.24, -0.22, -0.58];
  m.position.set(base[0] + bx, base[1] + by - swap * 0.3 - (player.sprinting ? 0.04 : 0), base[2] + kick * 0.08);
  m.rotation.x = (id === 'build' ? -0.5 : 0) + kick * 0.15 + (player.sprinting ? -0.25 : 0);
  if (id === 'build') m.userData.scr.material.opacity = 0.6 + Math.sin(performance.now() * 0.005) * 0.2;
  vmCam.aspect = camera.aspect; vmCam.fov = camera.fov; vmCam.updateProjectionMatrix();
  const sunI = 0.4 + (1 - G.time.night) * 1.2;
  vmScene.userData.dl.intensity = sunI;

  // 手电筒
  if (input.hit('KeyF') && !G.menuOpen) { player.flashlight = !player.flashlight; audio.play('ui'); }
  flash.intensity = player.flashlight ? 60 : 0;

  const origin = camera.position, dir = player.fwd;
  G.lookBuilding = G.menuOpen ? null : rayBuilding(origin, dir, 14);

  // 切换工具
  if (!G.menuOpen && !player.dead) {
    if (input.hit('Digit1')) selectTool(0);
    if (input.hit('Digit2')) selectTool(1);
    if (input.hit('Digit3') || input.hit('KeyB')) selectTool(2);
    if (input.wheel && tool.id !== 'build') {
      let i = tool.index;
      for (let k = 0; k < 2; k++) { i = (i + (input.wheel > 0 ? 1 : 2)) % 2; if (!TOOLS[i].need || G.upgrades[TOOLS[i].need]) break; }
      if (i !== tool.index) selectTool(i);
    }
    if (tool.id === 'build' && placement.type && input.wheel) placement.rot += input.wheel * 0.3;
  }

  beamCore.visible = beamOuter.visible = beamGlow.visible = false;
  muzzleFlash.visible = false;
  fireCool -= dt;
  const firing = input.mouse[0] && !G.menuOpen && !player.dead && G.locked;

  if (id === 'laser') {
    if (firing) {
      const range = 9;
      const nh = rayNode(origin, dir, range), eh = rayEnemy(origin, dir, range), th = raycastTerrain(origin, dir, range);
      let dist = range, kind = null;
      if (th && th.dist < dist) { dist = th.dist; kind = 'ground'; }
      if (nh && nh.dist <= dist) { dist = nh.dist; kind = 'node'; }
      if (eh && eh.dist < dist) { dist = eh.dist; kind = 'enemy'; }
      const end = tmp.copy(origin).addScaledVector(dir, dist);
      const start = camera.localToWorld(MUZZLE.clone());
      const seg = end.clone().sub(start), len = seg.length();
      seg.normalize();
      const q = new THREE.Quaternion().setFromUnitVectors(up, seg);
      const wob = 1 + Math.sin(performance.now() * 0.05) * 0.2;
      beamCore.position.copy(start); beamCore.quaternion.copy(q); beamCore.scale.set(0.012 * wob, len, 0.012 * wob);
      beamOuter.position.copy(start); beamOuter.quaternion.copy(q); beamOuter.scale.set(0.04 * wob, len, 0.04 * wob);
      beamCore.visible = beamOuter.visible = true;
      beamGlow.position.copy(end); beamGlow.visible = true; beamGlow.scale.setScalar(1.2 + Math.random() * 0.8);
      kick = Math.max(kick, 0.15 + Math.random() * 0.1);
      if (kind === 'node') {
        const n = nh.n;
        mineAcc += dt * 3.2 * (G.upgrades.overclock ? 2 : 1);
        if (Math.random() < 0.7) fx.spark(end, NODE_COLOR[n.type], 2, 5, 0.4);
        mineSoundT -= dt; if (mineSoundT <= 0) { mineSoundT = 0.09; audio.play('mine'); }
        while (mineAcc >= 1 && G.nodes.includes(n)) {
          mineAcc -= 1;
          G.res[n.type]++; G.stats.mined[n.type]++;
          G.events.emit('pickup', { type: n.type, n: 1 });
          if (mineNode(n, 1)) { audio.play('deplete'); mineAcc = 0; break; }
        }
      } else if (kind === 'enemy') {
        damageEnemy(eh.e, 16 * dt * (G.upgrades.overclock ? 1.5 : 1), 'laser');
        if (Math.random() < 0.5) fx.spark(end, [1, 0.5, 0.2], 3, 5);
      } else if (kind === 'ground') {
        if (Math.random() < 0.3) fx.spark(end, [1, 0.6, 0.3], 1, 3);
        if (Math.random() < 0.1) fx.dustPuff(end, 1, 0.3);
      }
      audio.laser(true);
    } else { audio.laser(false); mineAcc = Math.min(mineAcc, 0.9); }
  } else audio.laser(false);

  if (id === 'rifle' && firing && fireCool <= 0) {
    if (player.energy >= 5) {
      fireCool = 0.16; player.energy -= 5; kick = 1;
      const start = camera.localToWorld(MUZZLE.clone());
      // 瞄准点：屏幕中心射线的远处
      const eh = rayEnemy(origin, dir, 200), th = raycastTerrain(origin, dir, 200);
      let aimDist = 200; if (th) aimDist = th.dist; if (eh && eh.dist < aimDist) aimDist = eh.dist;
      const aim = origin.clone().addScaledVector(dir, aimDist);
      const d = aim.sub(start).normalize();
      shoot(start, d, G.upgrades.rifle2 ? 30 : 19, 'player');
      audio.play('shoot');
      muzzleFlash.visible = true; muzzleFlash.position.set(0.24, -0.21, -0.86);
    } else if (input.clicked[0]) { audio.play('deny'); G.events.emit('toast', '能量不足'); }
  }

  if (id === 'build') {
    const hit = !G.menuOpen && placement.type ? raycastTerrain(origin, dir, 40) : null;
    updateGhost(hit ? hit.point : null, player.pos);
    if (!G.menuOpen && placement.type) {
      if (input.hit('KeyR')) placement.rot += Math.PI / 4;
      if (input.clicked[0]) {
        if (placement.valid) { const b = tryPlace(); if (b) G.events.emit('built', b); }
        else { audio.play('deny'); G.events.emit('toast', placement.reason); }
      }
    }
    if (input.clicked[2]) { setGhost(null); tool.index = 0; audio.play('ui'); }
  }
}

export function renderViewmodel(renderer) {
  if (G.player.dead) return;
  renderer.autoClear = false;
  renderer.clearDepth();
  renderer.render(vmScene, vmCam);
  renderer.autoClear = true;
}
