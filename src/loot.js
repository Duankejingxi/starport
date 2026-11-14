import * as THREE from 'three';
import { G } from './state.js';
import { glow } from './models.js';
import { fx } from './fx.js';
import { audio } from './audio.js';

// —— 矿石碎片：被激光切下后弹出，旋转着划出弧线飞向玩家，连续拾取时音高逐级上升 ——
const shards = [];
const geo = new THREE.OctahedronGeometry(0.09, 0);
const mats = {};
function mat(c) {
  const k = c.join();
  return mats[k] || (mats[k] = new THREE.MeshStandardMaterial({ color: new THREE.Color(...c), emissive: new THREE.Color(...c), emissiveIntensity: 1.6, roughness: 0.3, metalness: 0.2 }));
}
let combo = 0, comboT = 0;
export function oreShard(from, color) {
  if (shards.length > 40) return;
  const m = new THREE.Mesh(geo, mat(color)); m.position.copy(from);
  const gl = glow(new THREE.Color(...color).getHex(), 0.5, m);
  G.scene.add(m);
  const v = new THREE.Vector3((Math.random() - 0.5) * 5, 3 + Math.random() * 3, (Math.random() - 0.5) * 5);
  shards.push({ m, gl, v, t: 0, color, spin: new THREE.Vector3(Math.random() * 10, Math.random() * 10, Math.random() * 10) });
}
const _t = new THREE.Vector3();
export function updateLoot(dt) {
  comboT -= dt; if (comboT <= 0) combo = 0;
  const P = G.player;
  for (let i = shards.length - 1; i >= 0; i--) {
    const s = shards[i], p = s.m.position;
    s.t += dt;
    _t.set(P.pos.x, P.pos.y + 1.1, P.pos.z);
    if (s.t < 0.22) { s.v.y -= 9 * dt; }
    else {
      // 磁吸：越飞越快，转向玩家
      const d = _t.clone().sub(p), l = d.length();
      const sp = 6 + (s.t - 0.22) * 40;
      s.v.lerp(d.multiplyScalar(sp / Math.max(l, 0.01)), Math.min(1, dt * 7));
      if (l < 0.6 || s.t > 2.5) {
        G.scene.remove(s.m); shards.splice(i, 1);
        combo = Math.min(combo + 1, 14); comboT = 0.6;
        audio.tone(660 * Math.pow(2, combo / 12), 0.07, 'sine', 0.035);
        if (Math.random() < 0.5) fx.spark(_t.clone().addScaledVector(P.fwd || new THREE.Vector3(), 0.5), s.color, 2, 1.5, 0.25);
        continue;
      }
    }
    p.addScaledVector(s.v, dt);
    s.m.rotation.x += s.spin.x * dt; s.m.rotation.y += s.spin.y * dt;
  }
}
