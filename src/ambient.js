import * as THREE from 'three';
import { G } from './state.js';
import { PID } from './planets.js';
import { getHeight, HALF, craters } from './terrain.js';
import { glowTexture } from './models.js';
import { audio } from './audio.js';

// 每颗星球的环境生命：火星的尘卷风、欧罗巴的冰泉、开普勒的发光水母
let inited = false;
const devils = [], geysers = [], jellies = [];

function columnPoints(n, color, size, opacity, additive) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const m = new THREE.PointsMaterial({ size, map: glowTexture(), color, transparent: true, opacity, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending });
  const p = new THREE.Points(g, m); p.frustumCulled = false;
  G.scene.add(p);
  const seed = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { seed[i * 3] = Math.random(); seed[i * 3 + 1] = Math.random() * Math.PI * 2; seed[i * 3 + 2] = Math.random(); }
  return { p, seed, n };
}

function init() {
  inited = true;
  if (PID === 'mars') {
    for (let i = 0; i < 3; i++) {
      const c = columnPoints(420, 0xd89a6a, 2.4, 0.45, false);
      devils.push({ ...c, x: 0, z: 0, vx: 0, vz: 0, h: 40 + Math.random() * 30, life: 0, k: 0 });
    }
  } else if (PID === 'europa') {
    const spots = craters.slice(0, 8).map(c => ({ x: c.x + (Math.random() - 0.5) * c.r * 0.6, z: c.z + (Math.random() - 0.5) * c.r * 0.6 }));
    spots.push({ x: 60, z: 70 }, { x: -90, z: -40 }, { x: 120, z: 140 });
    for (const s of spots) {
      if (Math.abs(s.x) > HALF - 200 || Math.abs(s.z) > HALF - 200) continue;
      const c = columnPoints(500, 0xe8f6ff, 2.6, 0.6, true);
      geysers.push({ ...c, x: s.x, z: s.z, y: getHeight(s.x, s.z), t: Math.random() * 30, on: 0 });
    }
  } else if (PID === 'kepler') {
    const capG = new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    for (let i = 0; i < 34; i++) {
      const hue = 0.45 + Math.random() * 0.4;
      const col = new THREE.Color().setHSL(hue, 0.9, 0.6);
      const m = new THREE.Mesh(capG, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: col, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      const tent = new THREE.Mesh(new THREE.ConeGeometry(0.6, 3, 6, 1, true), m.material);
      tent.position.y = -1.6; tent.rotation.x = Math.PI;
      const g = new THREE.Group(); g.add(m, s, tent); s.scale.setScalar(6);
      const sc = 0.6 + Math.random() * 1.2; g.scale.setScalar(sc);
      G.scene.add(g);
      jellies.push({ g, m, s, x: (Math.random() - 0.5) * 500, z: (Math.random() - 0.5) * 500, alt: 14 + Math.random() * 30, ph: Math.random() * 6, sp: 0.5 + Math.random() });
    }
  }
}

const tmp = new THREE.Vector3();
let hissT = 0;
export function updateAmbient(dt) {
  if (!inited) init();
  const P = G.player.pos, now = performance.now() * 0.001, day = 1 - G.time.night;

  // —— 尘卷风 ——
  for (const d of devils) {
    d.life -= dt;
    if (d.life <= 0) {
      const a = Math.random() * Math.PI * 2, r = 90 + Math.random() * 200;
      d.x = THREE.MathUtils.clamp(P.x + Math.cos(a) * r, -HALF + 160, HALF - 160); d.z = THREE.MathUtils.clamp(P.z + Math.sin(a) * r, -HALF + 160, HALF - 160);
      const b = Math.random() * Math.PI * 2; d.vx = Math.cos(b) * 3; d.vz = Math.sin(b) * 3; d.life = 40 + Math.random() * 40; d.h = 35 + Math.random() * 40;
    }
    d.x += d.vx * dt; d.z += d.vz * dt;
    const fade = Math.min(1, d.life / 5, (60 - d.life) / 5 + 1) * day * (1 - G.storm) * (G.terraform < 1 ? 1 : 0.2);
    d.k += (fade - d.k) * Math.min(1, dt);
    d.p.material.opacity = 0.45 * d.k;
    const arr = d.p.geometry.attributes.position.array, y0 = getHeight(d.x, d.z);
    for (let i = 0; i < d.n; i++) {
      const s = d.seed, f = (s[i * 3] + now * 0.08 * (0.6 + s[i * 3 + 2])) % 1;
      const ang = s[i * 3 + 1] + now * (3 + (1 - f) * 2);
      const rad = 0.8 + f * f * 9 + s[i * 3 + 2] * 1.5;
      const wob = Math.sin(now * 0.7 + f * 4) * f * 3;
      arr[i * 3] = d.x + Math.cos(ang) * rad + wob; arr[i * 3 + 1] = y0 + f * d.h; arr[i * 3 + 2] = d.z + Math.sin(ang) * rad;
    }
    d.p.geometry.attributes.position.needsUpdate = true;
    // 靠得太近会被推一下
    const dist = Math.hypot(P.x - d.x, P.z - d.z);
    if (dist < 8 && d.k > 0.5 && !G.driving) { G.player.vel.x += (P.x - d.x) / dist * dt * 20; G.player.vel.z += (P.z - d.z) / dist * dt * 20; }
  }

  // —— 冰泉 ——
  hissT -= dt;
  for (const g of geysers) {
    g.t -= dt;
    if (g.t <= 0 && g.on <= 0) { g.on = 9; g.t = 25 + Math.random() * 30; if (Math.hypot(P.x - g.x, P.z - g.z) < 120) audio.play('rumble'); }
    g.on -= dt;
    const k = THREE.MathUtils.clamp(Math.min(g.on, 9 - g.on), 0, 1.5) / 1.5;
    g.p.material.opacity = 0.6 * k;
    if (k <= 0) continue;
    const arr = g.p.geometry.attributes.position.array, H = 70;
    for (let i = 0; i < g.n; i++) {
      const s = g.seed, f = (s[i * 3] + now * 0.35) % 1;
      const rad = 0.4 + f * 9 * s[i * 3 + 2] + f * f * 4;
      arr[i * 3] = g.x + Math.cos(s[i * 3 + 1]) * rad; arr[i * 3 + 1] = g.y + Math.sin(f * Math.PI * 0.9) * H * (0.6 + s[i * 3 + 2] * 0.4); arr[i * 3 + 2] = g.z + Math.sin(s[i * 3 + 1]) * rad;
    }
    g.p.geometry.attributes.position.needsUpdate = true;
    if (Math.hypot(P.x - g.x, P.z - g.z) < 40 && hissT <= 0) { hissT = 0.5; audio.play('jet'); }
  }

  // —— 发光水母 ——
  for (const j of jellies) {
    j.ph += dt * j.sp;
    j.x += Math.sin(j.ph * 0.3) * dt * 2; j.z += Math.cos(j.ph * 0.23) * dt * 2;
    if (Math.abs(j.x - P.x) > 260) j.x = P.x - Math.sign(j.x - P.x) * 250;
    if (Math.abs(j.z - P.z) > 260) j.z = P.z - Math.sign(j.z - P.z) * 250;
    const y = getHeight(j.x, j.z) + j.alt + Math.sin(j.ph) * 2;
    j.g.position.set(j.x, y, j.z);
    const pulse = 0.75 + Math.sin(j.ph * 3) * 0.25;
    j.m.scale.set(1 + Math.sin(j.ph * 3) * 0.12, 1 - Math.sin(j.ph * 3) * 0.1, 1 + Math.sin(j.ph * 3) * 0.12);
    const vis = 0.15 + G.time.night * 0.85;
    j.m.material.opacity = 0.5 * vis * pulse; j.s.material.opacity = 0.7 * vis * pulse;
  }
}
