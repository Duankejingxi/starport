import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { G } from './state.js';
import { has } from './systems.js';
import { M, glow } from './models.js';
import { getHeight, HALF } from './terrain.js';
import { input } from './input.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { damageEnemy } from './combat.js';
import { P } from './planets.js';

// 加压漫游车：开得快、能补氧、能撞飞锈蚀蛛
let rover = null;
const tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler(), fwd = new THREE.Vector3();

function buildModel() {
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const mk = (geo, mat, x, y, z, p = body, rx = 0, ry = 0, rz = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; m.receiveShadow = true; p.add(m); return m; };
  const rb = (w, h, d, r = 0.08) => new RoundedBoxGeometry(w, h, d, 2, r);
  const rod = (a, b2, r, mat, p = body) => { const d = b2.clone().sub(a), m = mk(new THREE.CylinderGeometry(r, r, d.length(), 8), mat, 0, 0, 0, p); m.position.copy(a).add(b2).multiplyScalar(0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); return m; };
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  // 底盘与车身
  mk(rb(2.5, 0.35, 4.8, 0.1), M.dark, 0, 0.85, 0);
  mk(rb(2.6, 0.75, 3.4, 0.18), M.white, 0, 1.35, 0.5);
  mk(rb(2.64, 0.14, 3.44, 0.05), M.orange, 0, 1.62, 0.5);
  mk(rb(2.2, 0.5, 1.2, 0.12), M.panel, 0, 1.25, -1.9, body, -0.25, 0, 0);
  // 驾驶舱：玻璃罩 + 框架
  const cab = mk(new THREE.SphereGeometry(1.15, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), M.glass, 0, 1.72, -0.75); cab.scale.set(1, 0.8, 1.15); cab.castShadow = false;
  for (let i = 0; i < 5; i++) { const t = mk(new THREE.TorusGeometry(1.16, 0.035, 6, 24, Math.PI), M.metal, 0, 1.72, -0.75, body, 0, i * Math.PI / 5, 0); t.scale.set(1, 0.8, 1.15); }
  // 防滚架
  for (const x of [-1.15, 1.15]) { rod(V(x, 1.7, 0.6), V(x * 0.9, 2.75, 0.9), 0.06, M.metal); rod(V(x, 1.7, 2.1), V(x * 0.9, 2.75, 1.9), 0.06, M.metal); }
  rod(V(-1.04, 2.75, 0.9), V(1.04, 2.75, 0.9), 0.06, M.metal); rod(V(-1.04, 2.75, 1.9), V(1.04, 2.75, 1.9), 0.06, M.metal);
  rod(V(-1.04, 2.75, 0.9), V(-1.04, 2.75, 1.9), 0.06, M.metal); rod(V(1.04, 2.75, 0.9), V(1.04, 2.75, 1.9), 0.06, M.metal);
  // 车顶灯条
  mk(rb(1.8, 0.16, 0.22, 0.05), M.dark, 0, 2.82, 0.9);
  const heads = [];
  for (let i = 0; i < 4; i++) { mk(new THREE.CircleGeometry(0.07, 12), M.lamp, -0.6 + i * 0.4, 2.82, 0.78, body, 0, Math.PI, 0); heads.push(glow(0xfff2dd, 0.9, body, -0.6 + i * 0.4, 2.82, 0.75)); }
  for (const x of [-0.85, 0.85]) heads.push(glow(0xfff2dd, 1.2, body, x, 1.2, -2.5));
  for (const x of [-0.85, 0.85]) mk(rb(0.35, 0.18, 0.08, 0.04), M.lamp, x, 1.2, -2.42);
  // 货架与货箱
  mk(rb(2.3, 0.08, 1.5, 0.03), M.metal, 0, 1.78, 1.6);
  for (const [x, z, s] of [[-0.5, 1.4, 0.6], [0.4, 1.7, 0.7], [0.5, 1.1, 0.45]]) mk(rb(s, s * 0.8, s, 0.04), M.dark, x, 1.82 + s * 0.4, z);
  mk(new THREE.CylinderGeometry(0.02, 0.02, 1.6, 4), M.metal, 0.9, 3.5, 1.9);
  const tip = glow(0xff4040, 0.6, body, 0.9, 4.3, 1.9);
  // 侧梯与工具
  for (let i = 0; i < 3; i++) mk(rb(0.06, 0.06, 0.5, 0.02), M.metal, 1.33, 0.75 + i * 0.28, -0.2);
  mk(rb(0.1, 0.4, 1.0, 0.04), M.orange, -1.32, 1.3, 1.0);
  // 车轮：胎纹轮胎 + 辐条轮毂 + 悬挂摇臂
  const wheels = [];
  const tread = new THREE.TorusGeometry(0.46, 0.2, 12, 28);
  for (const z of [-1.65, 0, 1.65]) for (const x of [-1.5, 1.5]) {
    const w = new THREE.Group(); w.position.set(x, 0.62, z); g.add(w);
    const t = mk(tread, M.rubber, 0, 0, 0, w, 0, Math.PI / 2, 0);
    for (let k = 0; k < 14; k++) { const an = k / 14 * Math.PI * 2; mk(new THREE.BoxGeometry(0.42, 0.06, 0.1), M.rubber, 0, Math.cos(an) * 0.64, Math.sin(an) * 0.64, w, an, 0, 0); }
    mk(new THREE.CylinderGeometry(0.34, 0.34, 0.3, 20), M.metal, 0, 0, 0, w, 0, 0, Math.PI / 2);
    for (let k = 0; k < 5; k++) mk(new THREE.BoxGeometry(0.32, 0.06, 0.06), M.dark, x > 0 ? 0.16 : -0.16, 0, 0, w, k * Math.PI / 5, 0, 0).scale.set(0.3, 1, 9);
    mk(new THREE.CylinderGeometry(0.1, 0.1, 0.34, 10), M.chrome, 0, 0, 0, w, 0, 0, Math.PI / 2);
    rod(V(x * 0.62, 0.95, z), V(x * 0.95, 0.66, z), 0.07, M.metal, g);
    rod(V(x * 0.7, 1.15, z + 0.3), V(x * 0.95, 0.75, z), 0.04, M.chrome, g);
    wheels.push(w);
  }
  const lamp = new THREE.SpotLight(0xfff2dd, 0, 60, 0.5, 0.5, 1.2);
  lamp.position.set(0, 1.2, -2.4); lamp.target.position.set(0, 0, -20); body.add(lamp, lamp.target);
  return { g, body, wheels, tip, lamp, heads };
}

export function spawnRover(x, z, h = 0) {
  if (rover) return rover;
  const m = buildModel();
  G.scene.add(m.g);
  rover = { ...m, x, z, y: getHeight(x, z), h, speed: 0, vy: 0, lookYaw: 0, pitch: -0.05, spin: 0, hitT: 0, air: false };
  rover.collider = G.colliders.add({ x, z, r: 2.0, kind: 'rover' });
  placeModel(0);
  return rover;
}
export function getRover() { return rover; }
export function roverState() { return rover ? { x: +rover.x.toFixed(1), z: +rover.z.toFixed(1), h: +rover.h.toFixed(2) } : null; }

function sample(x, z) { return getHeight(x, z); }
function placeModel(dt) {
  const r = rover, s = Math.sin(r.h), c = Math.cos(r.h);
  const fx_ = -s, fz = -c, rx = c, rz = -s;
  const hF = sample(r.x + fx_ * 1.8, r.z + fz * 1.8), hB = sample(r.x - fx_ * 1.8, r.z - fz * 1.8);
  const hL = sample(r.x - rx * 1.3, r.z - rz * 1.3), hR = sample(r.x + rx * 1.3, r.z + rz * 1.3);
  const pitch = Math.atan2(hF - hB, 3.6), roll = Math.atan2(hR - hL, 2.6);
  r.g.position.set(r.x, r.y, r.z);
  tmpE.set(r.air ? r.g.rotation.x : pitch, r.h, r.air ? r.g.rotation.z : -roll, 'YXZ');
  if (!r.air) r.g.rotation.copy(tmpE);
  r.spin += r.speed * dt / 0.55;
  for (const w of r.wheels) w.rotation.x = -r.spin;
  return (hF + hB + hL + hR) / 4;
}

export function enterRover() {
  if (!rover) return;
  G.driving = true; rover.lookYaw = 0; rover.pitch = -0.08;
  G.colliders.remove(rover.collider);
  audio.play('place');
}
export function exitRover(player) {
  const r = rover; if (!r) return;
  G.driving = false; audio.engine(0);
  const c = Math.cos(r.h), s = Math.sin(r.h);
  let px = r.x + c * 3, pz = r.z - s * 3;
  if (G.colliders.overlaps(px, pz, 0.5)) { px = r.x - c * 3; pz = r.z + s * 3; }
  player.pos.set(px, getHeight(px, pz), pz); player.vel.set(0, 0, 0);
  player.yaw = r.h + r.lookYaw; player.pitch = r.pitch;
  r.speed = 0; r.lamp.intensity = 0;
  r.collider = G.colliders.add({ x: r.x, z: r.z, r: 2.0, kind: 'rover' });
}

export function updateRover(dt, player, camera) {
  if (!rover) return;
  const r = rover;
  r.tip.visible = Math.sin(performance.now() * 0.005) > 0;
  if (!G.driving) { r.y = placeModel(0); return; }

  // 视角（相对车身自由环视）
  if (G.locked) {
    r.lookYaw = THREE.MathUtils.clamp(r.lookYaw - input.dx * input.sens, -2.4, 2.4);
    r.pitch = THREE.MathUtils.clamp(r.pitch - input.dy * input.sens, -1.0, 0.9);
  }
  // 驾驶
  const thr = (input.down('KeyW') || input.down('ArrowUp') ? 1 : 0) - (input.down('KeyS') || input.down('ArrowDown') ? 1 : 0);
  const steer = (input.down('KeyA') || input.down('ArrowLeft') ? 1 : 0) - (input.down('KeyD') || input.down('ArrowRight') ? 1 : 0);
  const max = (input.down('ShiftLeft') ? 28 : 17) * (has('terrain') ? 1.3 : 1);
  if (!r.air) {
    if (thr > 0) r.speed += (r.speed < 0 ? 22 : 11) * dt;
    else if (thr < 0) r.speed -= (r.speed > 0 ? 22 : 7) * dt;
    else r.speed *= 1 - 0.7 * dt;
    if (input.down('Space')) r.speed *= 1 - 3.5 * dt;
    r.speed = THREE.MathUtils.clamp(r.speed, -7, max);
    if (r.speed > max) r.speed -= 20 * dt;
    r.h += steer * dt * 1.5 * THREE.MathUtils.clamp(r.speed / 5, -1, 1);
  }
  fwd.set(-Math.sin(r.h), 0, -Math.cos(r.h));
  G.stats.driven = (G.stats.driven || 0) + Math.abs(r.speed) * dt;
  r.x = THREE.MathUtils.clamp(r.x + fwd.x * r.speed * dt, -HALF + 125, HALF - 125);
  r.z = THREE.MathUtils.clamp(r.z + fwd.z * r.speed * dt, -HALF + 125, HALF - 125);
  // 碰撞
  for (const c of G.colliders.query(r.x, r.z)) {
    if (c.kind === 'flora' && Math.abs(r.speed) > 0) { /* 伞菇树当作硬物 */ }
    const dx = r.x - c.x, dz = r.z - c.z, d = Math.hypot(dx, dz), rr = c.r + 1.9;
    if (d < rr && d > 0.001) {
      if (c.kind === 'rock' && c.r < 1.3) continue; // 小石头直接碾过
      r.x = c.x + dx / d * rr; r.z = c.z + dz / d * rr;
      if (Math.abs(r.speed) > 5) { audio.play('land'); fx.dustPuff(new THREE.Vector3(r.x, r.y + 1, r.z), 6, 2); }
      r.speed *= -0.25;
    }
  }
  // 撞击锈蚀蛛
  r.hitT -= dt;
  if (Math.abs(r.speed) > 6 && r.hitT <= 0) {
    for (const e of G.enemies) {
      if (e.dead) continue;
      if (Math.hypot(e.pos.x - r.x, e.pos.z - r.z) < 2.6 + e.scale) {
        damageEnemy(e, Math.abs(r.speed) * 4, 'player'); r.hitT = 0.4; r.speed *= 0.7;
        fx.burst(new THREE.Vector3(e.pos.x, e.pos.y + 1, e.pos.z), [1, 0.5, 0.2], 20, 6);
      }
    }
  }
  // 地形跟随与腾空
  const ground = getHeight(r.x, r.z);
  if (r.air) {
    r.vy -= P.gravity * dt; r.y += r.vy * dt;
    if (r.y <= ground) { r.y = ground; r.air = false; if (r.vy < -5) { audio.play('land'); fx.dustPuff(new THREE.Vector3(r.x, r.y, r.z), 14, 3); } r.vy = 0; }
  } else {
    // 只有冲过坡顶、地面下降得比抛物线还快时才会腾空
    const ballistic = r.y + r.vy * dt - 0.5 * P.gravity * dt * dt;
    if (ground < ballistic - 0.25 && r.vy > 1.5 && Math.abs(r.speed) > 12) { r.air = true; r.vy = Math.min(r.vy, 7); r.y = ballistic; }
    else { const nv = (ground - r.y) / Math.max(dt, 0.001); r.vy = r.vy * 0.6 + nv * 0.4; r.y = ground; }
  }
  placeModel(dt);
  if (Math.abs(r.speed) > 4 && !r.air && Math.random() < 0.6) {
    const back = new THREE.Vector3(r.x - fwd.x * 2.5 + (Math.random() - 0.5) * 2, r.y + 0.3, r.z - fwd.z * 2.5);
    fx.dustPuff(back, 1, 0.5);
  }
  r.lamp.intensity = G.time.night > 0.3 ? 80 : 0;
  for (const h of r.heads) h.visible = G.time.night > 0.3;

  // 驾驶舱视角
  tmpQ.setFromEuler(tmpE.set(r.pitch, r.lookYaw, 0, 'YXZ'));
  camera.quaternion.copy(r.body.getWorldQuaternion(new THREE.Quaternion())).multiply(tmpQ);
  const eye = new THREE.Vector3(0, 2.15, -0.7).applyQuaternion(r.g.quaternion).add(r.g.position);
  camera.position.copy(eye);
  camera.getWorldDirection(player.fwd);
  player.pos.set(r.x, r.y, r.z);
  player.vel.set(0, 0, 0);
  // 车舱加压：补氧
  player.inLife = true;
  player.o2 = Math.min(player.maxO2, player.o2 + 20 * dt);
  player.energy = Math.min(100, player.energy + 10 * dt);
  player.hurtT = Math.max(0, player.hurtT - dt);
  audio.engine(Math.abs(r.speed) / 28);
}
export function roverSpeed() { return rover ? Math.round(Math.abs(rover.speed) * 3.6) : 0; }
