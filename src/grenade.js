import * as THREE from 'three';
import { G } from './state.js';
import { getHeight } from './terrain.js';
import { glow, M } from './models.js';
import { explode, shockwave } from './cinefx.js';
import { damageEnemy } from './combat.js';
import { fx } from './fx.js';
import { audio } from './audio.js';

// —— 震荡雷：抛物线投掷，落地弹跳，引信结束或碰到敌人时爆炸，冲击波击退并眩晕范围内的锈蚀蛛 ——
export const GRENADE_CD = 8;
const list = [];
let cd = 0;
const bodyGeo = new THREE.IcosahedronGeometry(0.16, 1), bandGeo = new THREE.TorusGeometry(0.165, 0.025, 6, 20);
export function grenadeCooldown() { return cd; }
export function throwGrenade(camera, player) {
  if (!G.upgrades.grenade) return false;
  if (cd > 0) { audio.play('deny'); return false; }
  cd = GRENADE_CD;
  const g = new THREE.Group();
  const b = new THREE.Mesh(bodyGeo, M.dark); b.castShadow = true; g.add(b);
  const band = new THREE.Mesh(bandGeo, M.orange); band.rotation.x = Math.PI / 2; g.add(band);
  const led = glow(0xff4030, 0.7, g, 0, 0.12, 0);
  const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  const pos = camera.position.clone().addScaledVector(dir, 0.6); pos.y -= 0.2;
  g.position.copy(pos); G.scene.add(g);
  const vel = dir.multiplyScalar(21); vel.y += 4.5;
  if (player.vel) vel.add(new THREE.Vector3(player.vel.x, 0, player.vel.z));
  list.push({ g, led, vel, t: 0, fuse: 1.9, spin: new THREE.Vector3(Math.random() * 8, Math.random() * 8, 0) });
  audio.play('whoosh', pos);
  G.stats.grenades = (G.stats.grenades || 0) + 1;
  return true;
}
function detonate(n) {
  const p = n.g.position.clone(); p.y += 0.6;
  G.scene.remove(n.g); n.led.material.dispose();
  explode(p, 1.7, 0xffa040);
  shockwave(p, 0x9fdcff, 9, 0.8);
  fx.dustPuff(p, 30, 7);
  const R = 9;
  for (const e of G.enemies) {
    if (e.dead) continue;
    const dx = e.pos.x - p.x, dz = e.pos.z - p.z, d = Math.hypot(dx, dz);
    if (d > R * (e.boss ? 1.3 : 1)) continue;
    const k = 1 - d / (R * (e.boss ? 1.3 : 1));
    damageEnemy(e, (e.boss ? 90 : 25) + 55 * k, 'player');
    if (!e.boss) { const l = d || 1; e.kb = { x: dx / l * 16 * k + 0.01, z: dz / l * 16 * k }; e.stun = 1.1 + k; }
  }
  const P = G.player, dp = P.pos.distanceTo(p);
  if (dp < 6 && !G.driving) { P.landDip = Math.max(P.landDip, 0.3 * (1 - dp / 6)); }
}
export function updateGrenades(dt) {
  cd = Math.max(0, cd - dt);
  for (let i = list.length - 1; i >= 0; i--) {
    const n = list[i], p = n.g.position;
    n.t += dt;
    n.vel.y -= 11 * dt;
    p.addScaledVector(n.vel, dt);
    n.g.rotation.x += n.spin.x * dt; n.g.rotation.y += n.spin.y * dt;
    const gy = getHeight(p.x, p.z) + 0.16;
    if (p.y < gy) {
      p.y = gy;
      if (Math.abs(n.vel.y) > 1.5) { audio.play('tick'); fx.dustPuff(p.clone(), 3, 0.8); }
      n.vel.y = Math.abs(n.vel.y) * 0.35; n.vel.x *= 0.55; n.vel.z *= 0.55; n.spin.multiplyScalar(0.6);
    }
    // 引信：越接近爆炸闪得越快
    const left = n.fuse - n.t;
    n.led.visible = Math.sin(n.t * (10 + (1.9 - left) * 22)) > 0;
    if (Math.random() < dt * 30) fx.trail(p.clone(), [1, 0.4, 0.2], 0.25);
    let hit = left <= 0;
    for (const e of G.enemies) { if (!e.dead && Math.hypot(e.pos.x - p.x, e.pos.z - p.z) < 1.3 * e.scale && p.y < e.pos.y + 2.5 * e.scale) { hit = true; break; } }
    if (hit) { list.splice(i, 1); detonate(n); }
  }
}
