import * as THREE from 'three';
import { G } from './state.js';
import { P } from './planets.js';
import { audio } from './audio.js';
import { glowTexture } from './models.js';

// —— 天鲸（开普勒-442b）：在高空缓缓游弋的巨大生物，身体分节起伏，夜里沿身体两侧发出生物荧光 ——
// 靠近时用伙伴扫描（Q）记录它们，可获得科研点
const whales = [];
let skin, belly, fin, lum, songT = 20;

function mats() {
  skin = new THREE.MeshStandardMaterial({ color: 0x3e5a78, roughness: 0.55, metalness: 0.05, emissive: 0x0a1830, emissiveIntensity: 0.4 });
  belly = new THREE.MeshStandardMaterial({ color: 0x8aa4b4, roughness: 0.6 });
  fin = new THREE.MeshStandardMaterial({ color: 0x5a7fa0, roughness: 0.5, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false });
  lum = new THREE.SpriteMaterial({ map: glowTexture(), color: 0x6fffe0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.4 });
}

function makeWhale(len) {
  const g = new THREE.Group();
  const segs = [], N = 7;
  let parent = g;
  for (let i = 0; i < N; i++) {
    const k = i / (N - 1);
    const r = len * 0.11 * Math.sin(Math.PI * (0.18 + k * 0.82)) + len * 0.01;
    const seg = new THREE.Group(); seg.position.z = i === 0 ? 0 : -len / N; parent.add(seg);
    const body = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), skin); body.scale.set(r * 1.05, r * 0.85, len / N * 1.3); body.position.z = -len / N * 0.5; seg.add(body);
    const bel = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, Math.PI * 0.55, Math.PI * 0.45), belly); bel.scale.copy(body.scale).multiplyScalar(1.01); bel.position.copy(body.position); seg.add(bel);
    // 侧面的荧光点
    for (const sd of [-1, 1]) for (let j = 0; j < 2; j++) {
      const s = new THREE.Sprite(lum); s.scale.setScalar(r * 0.7); s.position.set(sd * r * 0.98, -r * 0.15 + j * r * 0.3, -len / N * (0.3 + j * 0.4)); seg.add(s);
    }
    if (i === 1) for (const sd of [-1, 1]) { // 胸鳍
      const f = new THREE.Mesh(new THREE.CircleGeometry(1, 16), fin); f.scale.set(len * 0.18, len * 0.06, 1); f.rotation.set(-Math.PI / 2, 0, sd * 0.4); f.position.set(sd * r * 1.6, -r * 0.3, -len / N * 0.4); seg.add(f); seg.userData.fins = (seg.userData.fins || []).concat([f]);
    }
    if (i === N - 1) { // 尾鳍
      const f = new THREE.Mesh(new THREE.CircleGeometry(1, 16), fin); f.scale.set(len * 0.16, len * 0.05, 1); f.rotation.x = -Math.PI / 2; f.position.z = -len / N * 1.1; seg.add(f);
    }
    segs.push(seg); parent = seg;
  }
  // 眼睛
  for (const sd of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(len * 0.012, 8, 6), new THREE.MeshBasicMaterial({ color: 0x9ffff0 })); e.position.set(sd * len * 0.075, len * 0.01, -len * 0.04); segs[0].add(e); }
  g.traverse(o => { o.userData.noAO = true; if (o.isMesh) o.castShadow = false; });
  return { g, segs };
}

export function initSkyWhales(scene) {
  if (P.id !== 'kepler') return;
  mats();
  for (let i = 0; i < 3; i++) {
    const len = 70 + i * 25;
    const w = makeWhale(len);
    scene.add(w.g);
    whales.push({ ...w, len, R: 200 + i * 110, alt: 130 + i * 50, ang: i * 2.1, sp: (0.018 + Math.random() * 0.01) * (i % 2 ? -1 : 1), cx: (Math.random() - 0.5) * 200, cz: (Math.random() - 0.5) * 200, ph: Math.random() * 6, scanned: false });
  }
}
export function whaleList() { return whales; }

// 被伙伴扫描到时调用：返回新记录的天鲸数量
export function scanWhales(pos, R) {
  let n = 0;
  for (const w of whales) {
    if (w.scanned) continue;
    if (w.g.position.distanceTo(pos) < R + w.alt) { w.scanned = true; n++; }
  }
  return n;
}

export function updateSkyWhales(dt) {
  if (!whales.length) return;
  const t = performance.now() * 0.001, night = G.time.night;
  lum.opacity = 0.15 + night * 0.85;
  skin.emissiveIntensity = 0.3 + night * 1.2;
  for (const w of whales) {
    w.ang += w.sp * dt;
    const x = w.cx + Math.cos(w.ang) * w.R, z = w.cz + Math.sin(w.ang) * w.R, y = w.alt + Math.sin(t * 0.13 + w.ph) * 12;
    w.g.position.set(x, y, z);
    // 朝向切线方向
    const dx = -Math.sin(w.ang) * Math.sign(w.sp), dz = Math.cos(w.ang) * Math.sign(w.sp);
    w.g.rotation.y = Math.atan2(dx, dz);
    w.g.rotation.z = -Math.sign(w.sp) * 0.12;
    // 分节波动：像在空气里游泳
    w.segs.forEach((s, i) => {
      s.rotation.x = Math.sin(t * 0.9 + w.ph - i * 0.7) * 0.07 * (i ? 1 : 0.3);
      s.rotation.y = Math.sin(t * 0.5 + w.ph - i * 0.5) * 0.03;
      if (s.userData.fins) s.userData.fins.forEach((f, k) => { f.rotation.z = (k ? 1 : -1) * (0.4 + Math.sin(t * 0.9 + w.ph) * 0.25); });
    });
  }
  // 鲸歌：低沉的滑音，偶尔响起
  songT -= dt;
  if (songT <= 0) {
    songT = 25 + Math.random() * 35;
    const w = whales[Math.floor(Math.random() * whales.length)], d = w.g.position.distanceTo(G.player.pos);
    if (d < 500) {
      const v = 0.05 * (1 - d / 500), f0 = 90 + Math.random() * 60;
      audio.tone(f0, 3.2, 'sine', v, 1.6); audio.tone(f0 * 1.5, 2.6, 'triangle', v * 0.4, 0.7, 1.1); audio.tone(f0 * 2.01, 3.5, 'sine', v * 0.5, 0.6, 2.2);
    }
  }
}
