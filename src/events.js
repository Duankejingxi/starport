import * as THREE from 'three';
import { G } from './state.js';
import { glow } from './models.js';
import { getHeight, HALF } from './terrain.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { spawnNode } from './resources.js';
import { radio } from './story.js';

// —— 流星雨：夜空中的火流星，少数会坠落在附近，留下富含钛的陨石 ——
const meteors = [];
const tailGeo = new THREE.ConeGeometry(1, 1, 8, 1, true); tailGeo.rotateX(Math.PI); tailGeo.translate(0, -0.5, 0); // 头宽尾尖，沿 -y 延伸
const UP = new THREE.Vector3(0, 1, 0);
let shower = 0, spawnT = 0, impactT = 0, impacts = 0, rolledNight = -1;

export function startShower() {
  shower = 45; impacts = 0; impactT = 6;
  radio('方舟 · AI', '看天上——流星雨！有几颗会落到附近。陨石里富含钛，去坠落点看看。');
  G.events.emit('toast', '☄ 流星雨');
}

function launchMeteor(impact) {
  const P = G.player.pos;
  let target;
  if (impact) {
    for (let i = 0; i < 20; i++) {
      const a = Math.random() * Math.PI * 2, d = 40 + Math.random() * 110;
      const x = THREE.MathUtils.clamp(P.x + Math.cos(a) * d, -HALF + 180, HALF - 180), z = THREE.MathUtils.clamp(P.z + Math.sin(a) * d, -HALF + 180, HALF - 180);
      if (G.buildings.some(b => Math.hypot(b.x - x, b.z - z) < b.def.r + 14)) continue;
      target = new THREE.Vector3(x, getHeight(x, z), z); break;
    }
    if (!target) return;
  } else {
    const a = Math.random() * Math.PI * 2, d = 150 + Math.random() * 350;
    target = new THREE.Vector3(P.x + Math.cos(a) * d, P.y + 110 + Math.random() * 140, P.z + Math.sin(a) * d);
  }
  const dir = new THREE.Vector3((Math.random() - 0.5) * 1.2, -0.55 - Math.random() * 0.3, (Math.random() - 0.5) * 1.2).normalize();
  const dist = impact ? 520 : 420;
  const start = target.clone().addScaledVector(dir, -dist);
  const head = glow(impact ? 0xffb070 : 0xffe0c0, impact ? 18 : 10, G.scene);
  head.material.fog = false; head.position.copy(start);
  const tail = new THREE.Mesh(tailGeo, new THREE.MeshBasicMaterial({ color: impact ? 0xff9a50 : 0xffd8a8, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  const len = impact ? 90 : 70 + Math.random() * 70, w = impact ? 2.2 : 1.3;
  tail.scale.set(w, len, w);
  tail.quaternion.setFromUnitVectors(UP, dir);
  tail.position.copy(start); G.scene.add(tail);
  meteors.push({ pos: start, vel: dir.multiplyScalar(impact ? 150 : 220), head, tail, impact, target, life: dist / (impact ? 150 : 220) });
}

export function updateEvents(dt) {
  const night = G.time.night > 0.7;
  // 每个夜晚掷一次骰子
  if (night && rolledNight !== G.time.day && G.time.day >= 2 && G.storm < 0.1 && !G.ended) {
    rolledNight = G.time.day;
    if (Math.random() < 0.4) startShower();
  }
  if (shower > 0) {
    shower -= dt; spawnT -= dt; impactT -= dt;
    if (spawnT <= 0) { spawnT = 0.15 + Math.random() * 0.35; launchMeteor(false); }
    if (impactT <= 0 && impacts < 4) { impactT = 7 + Math.random() * 5; impacts++; launchMeteor(true); }
  }
  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i];
    m.life -= dt;
    m.pos.addScaledVector(m.vel, dt);
    m.head.position.copy(m.pos); m.tail.position.copy(m.pos);
    for (let k = 0; k < 3; k++) fx.trail(m.pos.clone().addScaledVector(m.vel, -dt * k / 3), m.impact ? [1, 0.6, 0.3] : [1, 0.85, 0.6], m.impact ? 1.2 : 0.7);
    if (m.life <= 0) {
      G.scene.remove(m.head); G.scene.remove(m.tail); m.tail.material.dispose(); meteors.splice(i, 1);
      if (m.impact) impact(m.target);
    }
  }
}

function impact(p) {
  const up = p.clone(); up.y += 1.5;
  fx.burst(up, [1, 0.55, 0.2], 120, 22);
  fx.ring(p, 2, 90);
  fx.dustPuff(up, 40, 8);
  audio.play('rumble'); audio.play('kill');
  const d = p.distanceTo(G.player.pos);
  if (d < 80) G.player.landDip = Math.max(G.player.landDip, 0.4 * (1 - d / 80));
  if (!G.colliders.overlaps(p.x, p.z, 2.5)) {
    const n = spawnNode('titanium', p.x, p.z, 10 + Math.floor(Math.random() * 8));
    n.meteor = true;
  }
  G.events.emit('toast', `☄ 陨石坠落在 ${Math.round(d)} 米外`);
}
