import * as THREE from 'three';
import { G } from './state.js';
import { getHeight } from './terrain.js';
import { glowTexture } from './models.js';
import { PID } from './planets.js';

// 自动铺设的道路：每座新建筑连到最近的邻居，路边有夜间引导灯
const roads = [];
const COLOR = { mars: 0x5e463a, europa: 0x8c98a8, kepler: 0x5a5a68 }[PID];
let mat, lights, lightsDirty = true;

function material() {
  if (!mat) mat = new THREE.MeshStandardMaterial({ color: COLOR, roughness: 0.95, metalness: 0.05, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  return mat;
}

function makeStrip(ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az, len = Math.hypot(dx, dz);
  if (len < 2) return null;
  const n = Math.ceil(len / 1.5), ux = dx / len, uz = dz / len, px = -uz, pz = ux, W = 1.3;
  const pos = [], idx = [], uv = [], lamp = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, x = ax + dx * t, z = az + dz * t;
    for (const s of [-1, 1]) { const xx = x + px * W * s, zz = z + pz * W * s; pos.push(xx, getHeight(xx, zz) + 0.07, zz); uv.push(s < 0 ? 0 : 1, t * len / 3); }
    if (i < n) { const k = i * 2; idx.push(k, k + 2, k + 1, k + 1, k + 2, k + 3); }
  }
  for (let d = 4; d < len - 2; d += 9) for (const s of [-1, 1]) {
    const x = ax + ux * d + px * (W + 0.35) * s, z = az + uz * d + pz * (W + 0.35) * s;
    lamp.push(x, getHeight(x, z) + 0.25, z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  const m = new THREE.Mesh(g, material()); m.receiveShadow = true;
  G.scene.add(m);
  return { mesh: m, lamp };
}

export function connectBuilding(b) {
  if (b.type === 'lamp') return;
  let best = null, bd = 70;
  for (const o of G.buildings) {
    if (o === b || o.type === 'lamp') continue;
    const d = Math.hypot(o.x - b.x, o.z - b.z) - o.def.r - b.def.r;
    if (d < bd) { bd = d; best = o; }
  }
  if (!best) return;
  const dx = best.x - b.x, dz = best.z - b.z, len = Math.hypot(dx, dz);
  const ax = b.x + dx / len * (b.def.r + 0.5), az = b.z + dz / len * (b.def.r + 0.5);
  const bx = best.x - dx / len * (best.def.r + 0.5), bz = best.z - dz / len * (best.def.r + 0.5);
  const s = makeStrip(ax, az, bx, bz);
  if (s) { roads.push({ ...s, a: b, b: best }); lightsDirty = true; }
}

export function removeRoads(b) {
  for (let i = roads.length - 1; i >= 0; i--) {
    const r = roads[i];
    if (r.a === b || r.b === b) { G.scene.remove(r.mesh); r.mesh.geometry.dispose(); roads.splice(i, 1); lightsDirty = true; }
  }
}

export function updateRoads() {
  if (lightsDirty) {
    lightsDirty = false;
    if (lights) { G.scene.remove(lights); lights.geometry.dispose(); }
    const all = roads.flatMap(r => r.lamp);
    if (all.length) {
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(all, 3));
      lights = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.9, map: glowTexture(), color: 0x7fe6ff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      lights.frustumCulled = false; G.scene.add(lights);
    } else lights = null;
  }
  if (lights) lights.material.opacity = 0.15 + G.time.night * 0.85;
}
