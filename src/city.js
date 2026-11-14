import * as THREE from 'three';
import { G } from './state.js';
import { getHeight } from './terrain.js';
import { audio } from './audio.js';
import { fx } from './fx.js';

// 城市等级：人口与设施越多，领地越大
export const LEVELS = [
  { name: '前哨站', pop: 0, b: 0, r: 75 },
  { name: '定居点', pop: 4, b: 6, r: 120 },
  { name: '小镇', pop: 12, b: 14, r: 175 },
  { name: '城市', pop: 24, b: 22, r: 240 },
  { name: '大都会', pop: 36, b: 32, r: 310 },
  { name: '星港', pop: 50, b: 42, r: 390 },
];
export const CENTER = { x: 0, z: 0 };

let ring, ringMat, shown = 0;
export function initCity(scene) {
  // 全息围栏：底部一条亮线向上渐隐，流动的刻度光点；只在镜头附近可见，远处不会变成一条色带
  ringMat = new THREE.ShaderMaterial({
    uniforms: { opacity: { value: 0.1 }, uT: { value: 0 }, uCam: { value: new THREE.Vector3() }, uC: { value: new THREE.Color(0x66e6ff) } },
    vertexShader: 'attribute vec2 uv2; varying vec2 vU; varying vec3 vW; void main(){ vU = uv2; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: `uniform float opacity, uT; uniform vec3 uCam, uC; varying vec2 vU; varying vec3 vW;
      void main(){
        float v = vU.y;
        float base = exp(-v * 9.0) * 0.9 + exp(-v * 2.2) * 0.25;
        float dash = step(0.55, fract(vU.x * 0.25 - uT * 0.6)) * smoothstep(0.35, 0.0, abs(v - 0.06)) * 0.9;
        float tick = smoothstep(0.92, 1.0, fract(vU.x * 0.05)) * (1.0 - v) * 0.8;
        float d = distance(vW.xz, uCam.xz);
        float near = 1.0 - smoothstep(25.0, 70.0, d);
        float a = (base + dash + tick) * opacity * (0.15 + 0.85 * near) * smoothstep(1.0, 0.7, v);
        gl_FragColor = vec4(uC * a * 2.0, a);
      }`,
    transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  G.cityLevel = G.cityLevel || 0;
  shown = LEVELS[G.cityLevel].r;
  buildRing(shown);
}

function buildRing(r) {
  if (ring) { G.scene.remove(ring); ring.geometry.dispose(); }
  const N = Math.ceil(r * 1.2), pos = [], idx = [], uv = [], H = 2.2, L = 2 * Math.PI * r;
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * Math.PI * 2, x = CENTER.x + Math.cos(a) * r, z = CENTER.z + Math.sin(a) * r, y = getHeight(x, z);
    pos.push(x, y, z, x, y + H, z); uv.push(i / N * L, 0, i / N * L, 1);
    if (i < N) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv2', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
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
  const U = ringMat.uniforms; U.opacity.value += ((buildMode ? 0.7 : 0.22) - U.opacity.value) * Math.min(1, dt * 4);
  U.uT.value += dt; if (G.camera) U.uCam.value.copy(G.camera.position);
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
