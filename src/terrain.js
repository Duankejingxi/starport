import * as THREE from 'three';
import { makeNoise2D, fbm, mulberry32, smoothstep, lerp, clamp } from './noise.js';
import { G } from './state.js';
import { P } from './planets.js';

export const WORLD = 1400, HALF = WORLD / 2, SEG = 400, STEP = WORLD / SEG;
const N = SEG + 1;
const noise = makeNoise2D(P.seed), noise2 = makeNoise2D(P.seed * 7 + 3), noise3 = makeNoise2D(P.seed + 42);
export const craters = [];
let heights, baseColors, colorAttr, geo, mesh;

function genCraters() {
  const r = mulberry32(P.seed);
  craters.push({ x: 150, z: -120, r: 70, depth: 16, rim: 6 }); // 近处的大陨石坑：冰的宝库
  while (craters.length < P.craters) {
    const x = (r() - 0.5) * (WORLD - 260), z = (r() - 0.5) * (WORLD - 260);
    if (Math.hypot(x, z) < 130) continue;
    const rad = 10 + Math.pow(r(), 2.2) * 85;
    craters.push({ x, z, r: rad, depth: rad * (0.18 + r() * 0.12), rim: rad * (0.05 + r() * 0.06) });
  }
}

const SPAWN_H = 0;
function rawHeight(x, z) {
  let h = fbm(noise, x * 0.0016, z * 0.0016, 5) * P.hills;
  const rr = 1 - Math.abs(noise2(x * 0.0042, z * 0.0042));
  h += rr * rr * rr * P.ridges;
  h += fbm(noise3, x * 0.025, z * 0.025, 3) * P.detail;
  for (const c of craters) {
    const dx = x - c.x, dz = z - c.z, d2 = dx * dx + dz * dz;
    if (d2 > c.r * c.r * 4) continue;
    const d = Math.sqrt(d2) / c.r;
    if (d < 1) h -= c.depth * (1 - d * d);
    h += c.rim * Math.exp(-(((d - 1) / 0.28) ** 2));
  }
  return h;
}
let originH = 0;
function heightAt(x, z) {
  let h = rawHeight(x, z) - originH;
  const ds = Math.hypot(x, z);
  h = lerp(SPAWN_H + noise3(x * 0.02, z * 0.02) * 0.6, h, smoothstep(45, 150, ds));
  const de = Math.max(Math.abs(x), Math.abs(z));
  const edge = HALF - 200;
  if (de > edge) { const k = (de - edge) / 200; h += k * k * 160 * (0.65 + 0.35 * noise(x * 0.01, z * 0.01)); }
  return h;
}

export function getHeight(x, z) {
  const fx = clamp((x + HALF) / STEP, 0, SEG - 0.001), fz = clamp((z + HALF) / STEP, 0, SEG - 0.001);
  const ix = Math.floor(fx), iz = Math.floor(fz), tx = fx - ix, tz = fz - iz;
  const a = heights[iz * N + ix], b = heights[iz * N + ix + 1];
  const c = heights[(iz + 1) * N + ix], d = heights[(iz + 1) * N + ix + 1];
  // 与网格三角形一致的插值（PlaneGeometry 的对角线方向）
  if (tx + tz < 1) return a + (b - a) * tx + (c - a) * tz;
  return d + (c - d) * (1 - tx) + (b - d) * (1 - tz);
}

export function slopeAt(x, z, r = 2) {
  const h = getHeight(x, z);
  return Math.max(Math.abs(getHeight(x + r, z) - h), Math.abs(getHeight(x - r, z) - h),
    Math.abs(getHeight(x, z + r) - h), Math.abs(getHeight(x, z - r) - h)) / r;
}

// 沿射线步进求与地面的交点
export function raycastTerrain(origin, dir, maxDist = 60) {
  let prev = 0;
  for (let t = 0.2; t <= maxDist; t += 0.25) {
    const x = origin.x + dir.x * t, y = origin.y + dir.y * t, z = origin.z + dir.z * t;
    if (y < getHeight(x, z)) {
      let lo = prev, hi = t;
      for (let i = 0; i < 8; i++) {
        const m = (lo + hi) / 2;
        if (origin.y + dir.y * m < getHeight(origin.x + dir.x * m, origin.z + dir.z * m)) hi = m; else lo = m;
      }
      return { dist: hi, point: new THREE.Vector3(origin.x + dir.x * hi, origin.y + dir.y * hi, origin.z + dir.z * hi) };
    }
    prev = t;
  }
  return null;
}

export function buildTerrain(scene) {
  genCraters();
  originH = rawHeight(0, 0);
  heights = new Float32Array(N * N);
  geo = new THREE.PlaneGeometry(WORLD, WORLD, SEG, SEG);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const h = heightAt(pos.getX(i), pos.getZ(i));
    pos.setY(i, h); heights[i] = h;
  }
  baseColors = new Float32Array(pos.count * 3);
  const col = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), h = heights[i];
    const ix = i % N, iz = (i / N) | 0;
    const hx = heights[iz * N + Math.min(ix + 1, SEG)] - h, hz = heights[Math.min(iz + 1, SEG) * N + ix] - h;
    const steep = clamp(Math.hypot(hx, hz) / STEP * 1.4, 0, 1);
    const n = noise(x * 0.012, z * 0.012) * 0.5 + 0.5;
    const n2 = noise2(x * 0.08, z * 0.08) * 0.5 + 0.5;
    const GA = P.ground.a, GB = P.ground.b, GS = P.ground.steep, GL = P.ground.low;
    let r = lerp(GA[0], GB[0], n), g = lerp(GA[1], GB[1], n), b = lerp(GA[2], GB[2], n);
    r *= 0.9 + n2 * 0.18; g *= 0.9 + n2 * 0.16; b *= 0.9 + n2 * 0.14;
    r = lerp(r, GS[0], steep); g = lerp(g, GS[1], steep); b = lerp(b, GS[2], steep);
    const low = smoothstep(-4, -16, h);
    r = lerp(r, GL[0], low * 0.6); g = lerp(g, GL[1], low * 0.6); b = lerp(b, GL[2], low * 0.6);
    if (P.id === 'europa') { const line = Math.abs(noise2(x * 0.006, z * 0.006)); if (line < 0.05) { const k = 1 - line / 0.05; r = lerp(r, 0.55, k * 0.7); g = lerp(g, 0.32, k * 0.7); b = lerp(b, 0.24, k * 0.7); } }
    col.setRGB(r, g, b, THREE.SRGBColorSpace);
    baseColors[i * 3] = col.r; baseColors[i * 3 + 1] = col.g; baseColors[i * 3 + 2] = col.b;
  }
  colorAttr = new THREE.BufferAttribute(baseColors.slice(), 3);
  geo.setAttribute('color', colorAttr);
  geo.computeVertexNormals();
  mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0, flatShading: true }));
  mesh.receiveShadow = true;
  scene.add(mesh);
  buildRocks(scene);
  return mesh;
}

function buildRocks(scene) {
  const r = mulberry32(99);
  const base = new THREE.DodecahedronGeometry(1, 0);
  const p = base.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const k = 0.75 + r() * 0.5;
    p.setXYZ(i, p.getX(i) * k, p.getY(i) * k * 0.8, p.getZ(i) * k);
  }
  base.computeVertexNormals();
  const COUNT = 2600;
  const inst = new THREE.InstancedMesh(base, new THREE.MeshStandardMaterial({ color: P.rock, roughness: P.id === 'europa' ? 0.3 : 0.95, flatShading: true }), COUNT);
  inst.castShadow = true; inst.receiveShadow = true;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), v = new THREE.Vector3(), e = new THREE.Euler();
  const c = new THREE.Color();
  let n = 0;
  while (n < COUNT) {
    const x = (r() - 0.5) * (WORLD - 120), z = (r() - 0.5) * (WORLD - 120);
    if (Math.hypot(x, z) < 22) continue;
    // 让石头成簇出现
    const cluster = noise(x * 0.01, z * 0.01);
    if (cluster < -0.1 && r() < 0.7) continue;
    const big = r() < 0.06;
    const sc = big ? 1.8 + r() * 2.5 : 0.2 + Math.pow(r(), 2) * 1.2;
    s.set(sc * (0.8 + r() * 0.6), sc * (0.6 + r() * 0.5), sc * (0.8 + r() * 0.6));
    e.set(r() * 0.5, r() * Math.PI * 2, r() * 0.5); q.setFromEuler(e);
    v.set(x, getHeight(x, z) + s.y * 0.25, z);
    m.compose(v, q, s); inst.setMatrixAt(n, m);
    c.setHSL(P.rockHSL[0] + r() * 0.02, P.rockHSL[1] + r() * 0.2, P.rockHSL[2] + r() * 0.14); inst.setColorAt(n, c);
    if (sc > 1.0) G.colliders.add({ x, z, r: Math.max(s.x, s.z) * 0.85, kind: 'rock' });
    n++;
  }
  scene.add(inst);
  if (P.id === 'kepler') buildFlora(scene, r);
}

// 大气改造：在改造塔周围让大地泛出绿意与水色
const green = new THREE.Color().setRGB(0.30, 0.46, 0.20, THREE.SRGBColorSpace);
const moss = new THREE.Color().setRGB(0.46, 0.50, 0.26, THREE.SRGBColorSpace);
const water = new THREE.Color().setRGB(0.20, 0.38, 0.52, THREE.SRGBColorSpace);
export function applyTerraform(centers, progress) {
  const pos = geo.attributes.position, arr = colorAttr.array;
  const radius = 60 + progress * 520;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), h = heights[i];
    let f = 0;
    for (const c of centers) {
      const d = Math.hypot(x - c.x, z - c.z);
      f = Math.max(f, smoothstep(radius, radius * 0.55, d));
    }
    let r = baseColors[i * 3], g = baseColors[i * 3 + 1], b = baseColors[i * 3 + 2];
    if (f > 0) {
      const n = noise2(x * 0.03, z * 0.03) * 0.5 + 0.5;
      const amt = f * clamp(n * 1.4 - 0.1, 0, 1) * clamp(progress * 1.5, 0, 1);
      const tgt = n > 0.6 ? green : moss;
      r = lerp(r, tgt.r, amt); g = lerp(g, tgt.g, amt); b = lerp(b, tgt.b, amt);
      if (h < -9 && progress > 0.5) { const w = f * smoothstep(-9, -13, h) * smoothstep(0.5, 1, progress); r = lerp(r, water.r, w); g = lerp(g, water.g, w); b = lerp(b, water.b, w); }
    }
    arr[i * 3] = r; arr[i * 3 + 1] = g; arr[i * 3 + 2] = b;
  }
  colorAttr.needsUpdate = true;
}

// 生成小地图用的底图
export function makeMapCanvas(size = 350) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const ctx = cv.getContext('2d'), img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const wx = (x / size - 0.5) * WORLD, wz = (y / size - 0.5) * WORLD;
    const h = getHeight(wx, wz), sh = getHeight(wx + 4, wz + 4) - h;
    const l = clamp(0.55 + h * 0.006 - sh * 0.08, 0.15, 1);
    const i = (y * size + x) * 4;
    const gc = P.ground.b; img.data[i] = 255 * gc[0] * l; img.data[i + 1] = 255 * gc[1] * l; img.data[i + 2] = 255 * gc[2] * l; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return cv;
}

// 开普勒-442b 的异星森林：夜里会发光的伞菇树
export const floraMat = new THREE.MeshStandardMaterial({ color: 0x7a3aa0, emissive: 0x40ffc0, emissiveIntensity: 0.1, roughness: 0.6, flatShading: true });
function buildFlora(scene, r) {
  const stemG = new THREE.CylinderGeometry(0.25, 0.45, 1, 6); stemG.translate(0, 0.5, 0);
  const capG = new THREE.SphereGeometry(1, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2);
  const COUNT = 900;
  const stems = new THREE.InstancedMesh(stemG, new THREE.MeshStandardMaterial({ color: 0xd8d0b8, roughness: 0.8, flatShading: true }), COUNT);
  const caps = new THREE.InstancedMesh(capG, floraMat, COUNT);
  stems.castShadow = caps.castShadow = true;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), v = new THREE.Vector3(), c = new THREE.Color();
  let n = 0;
  while (n < COUNT) {
    const x = (r() - 0.5) * (WORLD - 300), z = (r() - 0.5) * (WORLD - 300);
    if (Math.hypot(x, z) < 50 || noise(x * 0.008, z * 0.008) < 0.05) continue;
    if (slopeAt(x, z, 2) > 0.5) continue;
    const h = 3 + r() * 9, w = 1.5 + r() * 3, y = getHeight(x, z);
    s.set(1 + h * 0.05, h, 1 + h * 0.05); v.set(x, y - 0.2, z); q.identity(); m.compose(v, q, s); stems.setMatrixAt(n, m);
    s.set(w, w * 0.5, w); v.set(x, y + h - 0.3, z); m.compose(v, q, s); caps.setMatrixAt(n, m);
    c.setHSL(0.72 + r() * 0.2, 0.6, 0.4 + r() * 0.2); caps.setColorAt(n, c);
    G.colliders.add({ x, z, r: 0.6, kind: 'flora' });
    n++;
  }
  scene.add(stems, caps);
}
