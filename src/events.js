import * as THREE from 'three';
import { G } from './state.js';
import { explode } from './cinefx.js';
import { glow, M } from './models.js';
import { makePodHD } from './models_hd.js';
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
  updatePods(dt);
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
  fx.burst(up, [1, 0.55, 0.2], 120, 22); explode(up, 2.6, 0xff8a40);
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

// —— 地球补给舱：定期从天而降，落点有信标，按 E 打开 ——
const pods = [];
let podT = 150;
function buildPod() { return makePodHD(); }
export function dropPod(nearPlayer = true) {
  const P = G.player.pos;
  let x = 0, z = 0;
  for (let i = 0; i < 30; i++) {
    const a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 130;
    x = THREE.MathUtils.clamp(P.x + Math.cos(a) * d, -HALF + 180, HALF - 180); z = THREE.MathUtils.clamp(P.z + Math.sin(a) * d, -HALF + 180, HALF - 180);
    if (!G.colliders.overlaps(x, z, 4)) break;
  }
  const m = buildPod(), y = getHeight(x, z);
  m.g.position.set(x, y + 320, z);
  G.scene.add(m.g);
  const pod = { ...m, x, z, y, t: 0, landed: false, life: 300 };
  pods.push(pod);
  audio.play('rumble');
  G.events.emit('toast', `地球补给舱正在降落 · ${Math.round(Math.hypot(x - P.x, z - P.z))} 米外`);
  return pod;
}
export function updatePods(dt) {
  if (G.buildings.length && !G.ended && G.time.night < 0.5) { podT -= dt; if (podT <= 0) { podT = 240 + Math.random() * 180; dropPod(); } }
  const now = performance.now() * 0.001;
  for (let i = pods.length - 1; i >= 0; i--) {
    const p = pods[i];
    if (!p.landed) {
      p.t += dt;
      const k = Math.min(1, p.t / 8), e = 1 - Math.pow(1 - k, 2.4);
      p.g.position.y = p.y + 320 * (1 - e);
      p.flame.scale.y = 0.6 + (1 - e) + Math.random() * 0.2;
      for (let j = 0; j < 2; j++) fx.flame(p.g.position);
      if (k >= 1) { p.landed = true; p.flame.visible = false; fx.ring(new THREE.Vector3(p.x, p.y, p.z), 2, 70); audio.play('land'); }
    } else {
      p.life -= dt;
      p.beacon.material.opacity = 0.55 + Math.sin(now * 4) * 0.4;
      if (p.life <= 0) { G.scene.remove(p.g); pods.splice(i, 1); }
    }
  }
}
export function podAt(pos) { return pods.find(p => p.landed && Math.hypot(p.x - pos.x, p.z - pos.z) < 3.5); }
export function nearestPod(pos) { let b = null, bd = 1e9; for (const p of pods) { const d = Math.hypot(p.x - pos.x, p.z - pos.z); if (d < bd) { bd = d; b = p; } } return b ? { p: b, d: bd } : null; }
export function allPods() { return pods; }
export function openPod(p) {
  const scale = 1 + (G.cityLevel || 0) * 0.4;
  const loot = { iron: Math.round((20 + Math.random() * 20) * scale), silicon: Math.round((15 + Math.random() * 15) * scale), ice: Math.round((10 + Math.random() * 15) * scale) };
  if (Math.random() < 0.6) loot.titanium = Math.round((3 + Math.random() * 5) * scale);
  for (const k in loot) { G.res[k] += loot[k]; G.events.emit('pickup', { type: k, n: loot[k], note: '补给舱' }); }
  const rp = Math.round(10 * scale); G.rp = (G.rp || 0) + rp;
  G.stats.pods = (G.stats.pods || 0) + 1;
  const notes = ['包裹里夹着一张孩子画的画：一座红色星球，上面有很多小房子。', '附言：「地球这边一切都好。照顾好自己。」', '箱子底部有一包种子，标签上写着：向日葵。', '一封手写信：「我儿子在你们的殖民地。请替我告诉他，妈妈为他骄傲。」', '补给清单最后一行：「巧克力 ×2——给第一个拆箱的人。」'];
  radio('地球指挥中心 · 补给', notes[Math.floor(Math.random() * notes.length)] + ` 附带科研数据 ${rp} 点。`);
  audio.play('craft');
  fx.burst(new THREE.Vector3(p.x, p.y + 1.5, p.z), [0.5, 1, 0.7], 50, 6);
  G.scene.remove(p.g); pods.splice(pods.indexOf(p), 1);
}
