import * as THREE from 'three';
import { G } from './state.js';
import { getHeight } from './terrain.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { radio } from './story.js';

// —— 导航光柱 ——
let beam, beamMat;
function ensureBeam() {
  if (beam) return;
  beamMat = new THREE.MeshBasicMaterial({ color: 0xffb65c, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  beam = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 1.2, 160, 16, 1, true), beamMat);
  beam.frustumCulled = false; G.scene.add(beam);
}
function updateBeam() {
  ensureBeam();
  const w = G.waypoint;
  beam.visible = !!w;
  if (!w) return;
  beam.position.set(w.x, getHeight(w.x, w.z) + 80, w.z);
  beamMat.opacity = 0.22 + Math.sin(performance.now() * 0.004) * 0.08;
  if (Math.hypot(G.player.pos.x - w.x, G.player.pos.z - w.z) < 6) { G.waypoint = null; G.events.emit('toast', '✓ 已到达导航点'); audio.play('objective'); }
}

// —— 殖民地节日：每 5 个火星日的傍晚，广场上放烟花 ——
const rockets = [];
let festDay = -1, festT = 0, festPlaza = null;
const COLORS = [[1, 0.6, 0.2], [0.5, 0.9, 1], [1, 0.4, 0.7], [0.7, 1, 0.5], [1, 0.9, 0.4], [0.8, 0.6, 1]];
function launch(p) {
  const c = COLORS[Math.floor(Math.random() * COLORS.length)];
  rockets.push({ pos: new THREE.Vector3(p.x + (Math.random() - 0.5) * 6, p.y + 2, p.z + (Math.random() - 0.5) * 6), vel: new THREE.Vector3((Math.random() - 0.5) * 4, 34 + Math.random() * 10, (Math.random() - 0.5) * 4), t: 1.3 + Math.random() * 0.6, c });
  audio.play('jet');
}
function burst(r) {
  const n = 90, s = 16 + Math.random() * 8;
  for (let i = 0; i < n; i++) {
    const u = Math.random() * 2 - 1, th = Math.random() * 6.283, rr = Math.sqrt(1 - u * u);
    fx.firework(r.pos, rr * Math.cos(th) * s, u * s, rr * Math.sin(th) * s, r.c);
  }
  audio.play('kill');
}
export function updateFestival(dt) {
  updateBeam();
  const t = G.time.t;
  if (festT <= 0 && G.time.day % 5 === 0 && festDay !== G.time.day && t > 0.74 && t < 0.8 && G.colony.pop >= 4) {
    festPlaza = G.buildings.find(b => b.type === 'plaza' && b.powered);
    if (festPlaza) {
      festDay = G.time.day; festT = 60;
      G.stats.festivals = (G.stats.festivals || 0) + 1;
      G.events.emit('festival');
      radio('苏念 · 教师', `今天是第 ${G.time.day} 个火星日——殖民地节！大家都到广场上来了，孩子们说要放烟花给地球看。`);
    }
  }
  if (festT > 0) {
    festT -= dt;
    G.festival = true;
    const p = festPlaza; if (p && Math.random() < dt * 1.6) launch({ x: p.x, y: p.y, z: p.z });
  } else G.festival = false;
  for (let i = rockets.length - 1; i >= 0; i--) {
    const r = rockets[i];
    r.t -= dt; r.vel.y -= 9 * dt; r.pos.addScaledVector(r.vel, dt);
    for (let k = 0; k < 3; k++) fx.trail(r.pos, [1, 0.85, 0.6], 1.6);
    if (r.t <= 0) { burst(r); rockets.splice(i, 1); }
  }
}
export function startFestival() { festT = 0; festDay = -1; G.time.day = 5; G.time.t = 0.745; }
