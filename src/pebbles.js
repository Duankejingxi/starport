import * as THREE from 'three';
import { G } from './state.js';
import { getHeight } from './terrain.js';
import { ROCK_TEX } from './models.js';
import { P } from './planets.js';
import { mulberry32 } from './noise.js';

// 玩家周围的碎石：随玩家移动循环铺设，给近景尺度感
const N = 6000, R = 60;
let inst, base, scales, last = new THREE.Vector3(1e9, 0, 0);
const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), v = new THREE.Vector3(), e = new THREE.Euler();

export function initPebbles() {
  const geo = new THREE.DodecahedronGeometry(0.12, 0);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true, map: ROCK_TEX.map });
  inst = new THREE.InstancedMesh(geo, mat, N);
  inst.receiveShadow = true; inst.frustumCulled = false;
  const r = mulberry32(31);
  base = new Float32Array(N * 2); scales = [];
  const c = new THREE.Color();
  for (let i = 0; i < N; i++) {
    base[i * 2] = r() * R * 2; base[i * 2 + 1] = r() * R * 2;
    const k = Math.pow(r(), 3);
    scales.push([0.4 + k * 3.2, 0.25 + r() * 0.6, 0.4 + k * 3.0, r() * 6.28, r() * 0.6]);
    c.setHSL(P.rockHSL[0] + r() * 0.03, P.rockHSL[1] * (0.5 + r() * 0.5), Math.min(0.75, P.rockHSL[2] * (1.2 + r() * 0.9))); inst.setColorAt(i, c);
  }
  G.scene.add(inst);
}

export function updatePebbles() {
  if (!inst) return;
  const p = G.player.pos;
  if (Math.abs(p.x - last.x) < 3 && Math.abs(p.z - last.z) < 3) return;
  last.copy(p);
  const ox = p.x - R, oz = p.z - R;
  for (let i = 0; i < N; i++) {
    // 以 2R 为周期平铺，保证每颗碎石在世界中的位置固定
    const x = ox + ((base[i * 2] - ox) % (R * 2) + R * 2) % (R * 2);
    const z = oz + ((base[i * 2 + 1] - oz) % (R * 2) + R * 2) % (R * 2);
    const sc = scales[i];
    s.set(sc[0], sc[0] * sc[1], sc[2]);
    e.set(sc[4], sc[3], 0); q.setFromEuler(e);
    v.set(x, getHeight(x, z) + 0.02, z);
    m.compose(v, q, s); inst.setMatrixAt(i, m);
  }
  inst.instanceMatrix.needsUpdate = true;
}
