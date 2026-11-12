import * as THREE from 'three';
import { G } from './state.js';
import { getHeight, slopeAt, craters, HALF } from './terrain.js';
import { fx } from './fx.js';
import { glow } from './models.js';

const MAT = {
  iron: new THREE.MeshStandardMaterial({ color: 0x5a3a2e, roughness: 0.45, metalness: 0.75, flatShading: true }),
  ironVein: new THREE.MeshStandardMaterial({ color: 0x9c5a3a, roughness: 0.3, metalness: 0.9, flatShading: true, emissive: 0x3a1408 }),
  ice: new THREE.MeshStandardMaterial({ color: 0xcfeeff, roughness: 0.08, metalness: 0.1, flatShading: true, transparent: true, opacity: 0.9, emissive: 0x16384a }),
  silicon: new THREE.MeshStandardMaterial({ color: 0xf3e1a6, roughness: 0.15, metalness: 0.4, flatShading: true, emissive: 0x2a2208 }),
  titanium: new THREE.MeshStandardMaterial({ color: 0x9b8cff, roughness: 0.1, metalness: 0.5, flatShading: true, emissive: 0x5a3cff, emissiveIntensity: 0.6 }),
  base: new THREE.MeshStandardMaterial({ color: 0x6e3b26, roughness: 0.95, flatShading: true }),
};
const GLOW = { iron: null, ice: 0x88ddff, silicon: 0xffe6a0, titanium: 0x8a6cff };
export const NODE_COLOR = { iron: [1, 0.55, 0.3], ice: [0.6, 0.9, 1], silicon: [1, 0.9, 0.55], titanium: [0.7, 0.55, 1] };

function crystal(mat, h, r) {
  const g = new THREE.ConeGeometry(r, h, 5, 1); g.translate(0, h / 2, 0);
  const m = new THREE.Mesh(g, mat); m.castShadow = true; return m;
}

function makeNodeMesh(type, rnd) {
  const g = new THREE.Group();
  if (type === 'iron') {
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.DodecahedronGeometry(0.6 + rnd() * 0.7, 0), i === 0 ? MAT.ironVein : MAT.iron);
      m.position.set((rnd() - 0.5) * 1.8, 0.3 + rnd() * 0.4, (rnd() - 0.5) * 1.8); m.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
      m.scale.y = 0.8; m.castShadow = true; g.add(m);
    }
  } else {
    const base = new THREE.Mesh(new THREE.DodecahedronGeometry(1.1, 0), MAT.base); base.scale.set(1.2, 0.45, 1.2); base.castShadow = true; g.add(base);
    const n = type === 'titanium' ? 6 : 7;
    for (let i = 0; i < n; i++) {
      const c = crystal(MAT[type], 0.8 + rnd() * (type === 'ice' ? 1.6 : 1.9), 0.18 + rnd() * 0.22);
      const a = rnd() * 6.28, d = rnd() * 0.8;
      c.position.set(Math.cos(a) * d, 0.2, Math.sin(a) * d);
      c.rotation.set((rnd() - 0.5) * 0.9, rnd() * 3, (rnd() - 0.5) * 0.9);
      g.add(c);
    }
    if (GLOW[type]) g.add(glow(GLOW[type], type === 'titanium' ? 5 : 3, null, 0, 1.2, 0));
  }
  return g;
}

let rnd = Math.random;
export function spawnNode(type, x, z, amount) {
  const mesh = makeNodeMesh(type, rnd);
  const y = getHeight(x, z);
  mesh.position.set(x, y, z); mesh.rotation.y = rnd() * 6.28;
  G.scene.add(mesh);
  const max = amount ?? { iron: 30, ice: 25, silicon: 25, titanium: 14 }[type];
  const node = { type, x, z, y, amount: max, max, mesh, r: 1.6 };
  node.collider = G.colliders.add({ x, z, r: 1.3, kind: 'node' });
  G.nodes.push(node);
  return node;
}

function randomSpot(type, near) {
  for (let tries = 0; tries < 200; tries++) {
    let x, z;
    if (type === 'ice' && Math.random() < 0.75) {
      const c = craters[Math.floor(Math.random() * Math.min(craters.length, 30))];
      const a = Math.random() * 6.28, d = Math.random() * c.r * 0.7;
      x = c.x + Math.cos(a) * d; z = c.z + Math.sin(a) * d;
    } else if (near) {
      const a = Math.random() * 6.28, d = near[0] + Math.random() * (near[1] - near[0]);
      x = Math.cos(a) * d; z = Math.sin(a) * d;
    } else {
      x = (Math.random() - 0.5) * (2 * HALF - 300); z = (Math.random() - 0.5) * (2 * HALF - 300);
    }
    const dc = Math.hypot(x, z);
    if (type === 'titanium' && dc < 260) continue;
    if (dc < 18) continue;
    if (Math.abs(x) > HALF - 160 || Math.abs(z) > HALF - 160) continue;
    if (slopeAt(x, z, 2) > 0.6) continue;
    if (G.colliders.overlaps(x, z, 3)) continue;
    return [x, z];
  }
  return null;
}

export function generateNodes() {
  // 起点附近保证有资源
  const starter = [['iron', 22, 8], ['iron', -18, 20], ['iron', 30, -25], ['silicon', -26, -14], ['silicon', 12, 34], ['ice', 40, 10], ['iron', -40, -38], ['silicon', 45, 42]];
  for (const [t, x, z] of starter) spawnNode(t, x, z);
  const counts = { iron: 70, silicon: 50, ice: 40, titanium: 22 };
  for (const t in counts) for (let i = 0; i < counts[t]; i++) {
    const p = randomSpot(t, t === 'titanium' ? null : (i < counts[t] * 0.35 ? [40, 220] : null));
    if (p) spawnNode(t, p[0], p[1]);
  }
}

export function removeNode(node) {
  G.scene.remove(node.mesh);
  G.colliders.remove(node.collider);
  const i = G.nodes.indexOf(node); if (i >= 0) G.nodes.splice(i, 1);
}

// 被采集后缩小，采光后在别处重生
const respawnQueue = [];
export function mineNode(node, amount) {
  node.amount -= amount;
  const k = 0.35 + 0.65 * Math.max(0, node.amount / node.max);
  node.mesh.scale.setScalar(k);
  if (node.amount <= 0) {
    const p = node.mesh.position.clone(); p.y += 1;
    fx.burst(p, NODE_COLOR[node.type], 50, 7);
    fx.dustPuff(p, 16, 3);
    removeNode(node);
    respawnQueue.push({ type: node.type, t: 90 + Math.random() * 60 });
    return true;
  }
  return false;
}
export function updateNodes(dt) {
  for (let i = respawnQueue.length - 1; i >= 0; i--) {
    respawnQueue[i].t -= dt;
    if (respawnQueue[i].t <= 0) {
      const t = respawnQueue[i].type; respawnQueue.splice(i, 1);
      const p = randomSpot(t, t === 'titanium' ? null : [60, 400]);
      if (p) spawnNode(t, p[0], p[1]);
    }
  }
  // 发光晶体缓慢脉动
  const s = 1 + Math.sin(performance.now() * 0.002) * 0.15;
  MAT.titanium.emissiveIntensity = 0.5 * s;
}

export function serializeNodes() { return G.nodes.map(n => [n.type, +n.x.toFixed(1), +n.z.toFixed(1), Math.round(n.amount)]); }
export function loadNodes(list) {
  for (const n of [...G.nodes]) removeNode(n);
  for (const [t, x, z, a] of list) { const n = spawnNode(t, x, z); n.amount = a; n.mesh.scale.setScalar(0.35 + 0.65 * a / n.max); }
}
