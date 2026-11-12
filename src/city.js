import * as THREE from 'three';
import { G } from './state.js';
import { getHeight } from './terrain.js';
import { audio } from './audio.js';
import { fx } from './fx.js';

// 城市等级：人口与设施越多，领地越大
export const LEVELS = [
  { name: '前哨站', icon: '⛺', pop: 0, b: 0, r: 75 },
  { name: '定居点', icon: '🏘', pop: 4, b: 6, r: 120 },
  { name: '小镇', icon: '🏡', pop: 12, b: 14, r: 175 },
  { name: '城市', icon: '🏙', pop: 24, b: 22, r: 240 },
  { name: '大都会', icon: '🌆', pop: 36, b: 32, r: 310 },
  { name: '星港', icon: '🚀', pop: 50, b: 42, r: 390 },
];
export const CENTER = { x: 0, z: 0 };

let ring, ringMat, shown = 0;
export function initCity(scene) {
  ringMat = new THREE.MeshBasicMaterial({ color: 0x66e6ff, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
  G.cityLevel = G.cityLevel || 0;
  shown = LEVELS[G.cityLevel].r;
  buildRing(shown);
}

function buildRing(r) {
  if (ring) { G.scene.remove(ring); ring.geometry.dispose(); }
  const N = Math.ceil(r * 1.2), pos = [], idx = [], H = 1.4;
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * Math.PI * 2, x = CENTER.x + Math.cos(a) * r, z = CENTER.z + Math.sin(a) * r, y = getHeight(x, z);
    pos.push(x, y, z, x, y + H, z);
    if (i < N) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx);
  ring = new THREE.Mesh(g, ringMat); ring.frustumCulled = false;
  G.scene.add(ring);
}

export function territory() { return shown; }
export function inTerritory(x, z, pad = 0) { return Math.hypot(x - CENTER.x, z - CENTER.z) <= LEVELS[G.cityLevel].r - pad; }

export function nextLevelInfo() {
  const n = LEVELS[G.cityLevel + 1];
  if (!n) return null;
  return { ...n, curPop: G.colony.pop, curB: G.buildings.length };
}

let checkT = 0;
export function updateCity(dt, buildMode) {
  ringMat.opacity += ((buildMode ? 0.45 : 0.1) - ringMat.opacity) * Math.min(1, dt * 4);
  // 领地扩张动画
  const target = LEVELS[G.cityLevel].r;
  if (shown < target) { shown = Math.min(target, shown + dt * 40); buildRing(shown); }
  checkT -= dt; if (checkT > 0) return;
  checkT = 1;
  const n = LEVELS[G.cityLevel + 1];
  if (n && G.colony.pop >= n.pop && G.buildings.length >= n.b) {
    G.cityLevel++;
    audio.play('chapter');
    G.events.emit('cityLevel', LEVELS[G.cityLevel]);
    const p = new THREE.Vector3(CENTER.x, getHeight(CENTER.x, CENTER.z) + 2, CENTER.z);
    fx.burst(p, [0.4, 0.9, 1], 120, 18);
  }
}
