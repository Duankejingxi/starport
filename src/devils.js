import * as THREE from 'three';
import { G } from './state.js';
import { P } from './planets.js';
import { getHeight, HALF } from './terrain.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { spawnNode } from './resources.js';

// —— 尘卷风：白天在荒原上游荡的旋转沙柱。走进去会被卷上高空，落地处常有被卷来的硅晶 ——
const devils = [];
let spawnT = 40;
const T = { value: 0 };
const geo = (() => {
  // 下窄上宽、略带弯曲的漏斗
  const pts = [];
  for (let i = 0; i <= 24; i++) { const k = i / 24; pts.push(new THREE.Vector2(1.8 + Math.pow(k, 1.5) * 13, k * 75)); }
  return new THREE.LatheGeometry(pts, 48, 0, Math.PI * 2);
})();
function devilMat(tint) {
  return new THREE.ShaderMaterial({
    uniforms: { uT: T, uC: { value: new THREE.Color(tint) }, uA: { value: 0 }, uSeed: { value: Math.random() * 10 } },
    vertexShader: `uniform float uT, uSeed; varying vec2 vUv; varying float vF; varying vec3 vW;
      void main(){ vUv = uv; vec3 p = position; float k = p.y / 70.0;
        // 漏斗随高度摆动
        p.x += sin(k * 3.0 + uT * 0.7 + uSeed) * k * 6.0; p.z += cos(k * 2.3 + uT * 0.5 + uSeed) * k * 5.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vec3 n = normalize(normalMatrix * normal);
        vF = abs(dot(n, normalize(-mv.xyz))); vW = p; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uT, uA, uSeed; uniform vec3 uC; varying vec2 vUv; varying float vF; varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        vec2 j = vec2(mod(i.x + 1.0, 12.0), i.y); i.x = mod(i.x, 12.0);
        return mix(mix(h(i), h(vec2(j.x, i.y)), f.x), mix(h(i + vec2(0,1)), h(vec2(j.x, i.y + 1.0)), f.x), f.y); }
      void main(){
        float k = vUv.y;
        // 螺旋上升的沙带
        vec2 q = vec2(vUv.x * 12.0 + k * 9.0 - uT * 1.6, k * 9.0 - uT * 2.2 + uSeed);
        float d = n(q) * 0.65 + n(q * vec2(1.0, 2.3) + 4.0) * 0.35;
        float a = smoothstep(0.32, 0.85, d) * pow(vF, 0.8);
        a *= smoothstep(0.0, 0.08, k) * (1.0 - smoothstep(0.55, 1.0, k));
        a *= uA;
        vec3 c = uC * (0.75 + 0.5 * d) * (0.8 + 0.3 * k);
        gl_FragColor = vec4(c, a);
      }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
}

function spawn() {
  const Pp = G.player.pos;
  const a = Math.random() * Math.PI * 2, d = 120 + Math.random() * 120;
  const x = THREE.MathUtils.clamp(Pp.x + Math.cos(a) * d, -HALF + 200, HALF - 200), z = THREE.MathUtils.clamp(Pp.z + Math.sin(a) * d, -HALF + 200, HALF - 200);
  if (G.buildings.some(b => Math.hypot(b.x - x, b.z - z) < 40)) return;
  const tint = P.id === 'kepler' ? 0xb8b090 : 0xc88a5c;
  const m = new THREE.Mesh(geo, devilMat(tint)); m.frustumCulled = false; m.renderOrder = 3;
  m.position.set(x, getHeight(x, z) - 1, z); G.scene.add(m);
  const inner = new THREE.Mesh(geo, devilMat(tint)); inner.scale.set(0.55, 0.9, 0.55); m.add(inner); inner.material.uniforms.uSeed.value += 3;
  const head = Math.random() * Math.PI * 2;
  devils.push({ m, inner, x, z, life: 70 + Math.random() * 40, t: 0, head, speed: 3 + Math.random() * 2.5, snd: 0, carried: 0 });
}

export function devilCount() { return devils.length; }
export function spawnDevil() { spawn(); return devils[devils.length - 1]; }

export function updateDevils(dt) {
  T.value += dt;
  const ok = P.id !== 'europa' && G.storm < 0.3 && G.time.night < 0.2 && G.started && !G.ended;
  spawnT -= dt;
  if (ok && spawnT <= 0) { spawnT = 70 + Math.random() * 90; if (devils.length < 2) spawn(); }
  const Pl = G.player, pp = Pl.pos;
  for (let i = devils.length - 1; i >= 0; i--) {
    const v = devils[i];
    v.t += dt; v.life -= dt;
    v.head += (Math.random() - 0.5) * dt * 0.8;
    v.x += Math.cos(v.head) * v.speed * dt; v.z += Math.sin(v.head) * v.speed * dt;
    if (Math.abs(v.x) > HALF - 200 || Math.abs(v.z) > HALF - 200) v.head += Math.PI * dt;
    // 绕开建筑
    for (const b of G.buildings) { const dx = v.x - b.x, dz = v.z - b.z, d = Math.hypot(dx, dz); if (d < b.def.r + 18) { v.head = Math.atan2(dz, dx); break; } }
    const gy = getHeight(v.x, v.z);
    v.m.position.set(v.x, gy - 1, v.z);
    v.m.rotation.y -= dt * 2.4; v.inner.rotation.y -= dt * 2.2;
    const fade = Math.min(1, v.t / 5, Math.max(0, v.life) / 6);
    v.m.material.uniforms.uA.value = fade; v.inner.material.uniforms.uA.value = fade * 0.8;
    // 底部扬尘与碎石
    if (Math.random() < dt * 18 * fade) {
      const a = Math.random() * Math.PI * 2, r = 2 + Math.random() * 5;
      fx.dustPuff(new THREE.Vector3(v.x + Math.cos(a) * r, gy + 0.5, v.z + Math.sin(a) * r), 1, 1.5);
    }
    if (Math.random() < dt * 6 * fade) fx.rise(new THREE.Vector3(v.x, gy + 1 + Math.random() * 10, v.z), [0.75, 0.5, 0.35], 4);
    // 声音
    v.snd -= dt; const dd = Math.hypot(pp.x - v.x, pp.z - v.z);
    if (v.snd <= 0 && dd < 110) { v.snd = 0.55; audio.play('whoosh', new THREE.Vector3(v.x, gy, v.z)); }
    // 把玩家卷起来
    if (!G.driving && !Pl.dead && fade > 0.5) {
      const hgt = pp.y - gy;
      const R = 3.2 + Math.max(0, hgt) * 0.12;
      if (dd < R && hgt < 46) {
        const dx = pp.x - v.x, dz = pp.z - v.z, l = dd || 1;
        Pl.vel.y = Math.max(Pl.vel.y, 8 + (1 - dd / R) * 4);
        // 切向旋转 + 轻微向心
        Pl.vel.x += (-dz / l * 9 - dx / l * 2 - Pl.vel.x) * Math.min(1, dt * 4);
        Pl.vel.z += (dx / l * 9 - dz / l * 2 - Pl.vel.z) * Math.min(1, dt * 4);
        Pl.yaw -= dt * 1.6;
        G.shake = Math.max(G.shake || 0, 0.25);
        Pl.onGround = false;
        if (!v.inside) { v.inside = true; G.stats.devils = (G.stats.devils || 0) + 1; G.events.emit('toast', '被尘卷风卷起来了！'); }
        v.carried += dt;
      } else if (v.inside && (dd > R + 1 || hgt >= 46)) {
        v.inside = false;
        // 甩出去
        const dx = pp.x - v.x, dz = pp.z - v.z, l = dd || 1;
        Pl.vel.x += dx / l * 10; Pl.vel.z += dz / l * 10;
        // 尘卷风会把硅晶甩落在附近
        if (v.carried > 1.5 && !v.dropped) {
          v.dropped = true;
          const a = Math.atan2(dz, dx), rx = pp.x + Math.cos(a) * 22, rz = pp.z + Math.sin(a) * 22;
          if (!G.colliders.overlaps(rx, rz, 3)) spawnNode('silicon', rx, rz, 8 + Math.floor(Math.random() * 6));
        }
      }
    }
    if (v.life <= 0) { G.scene.remove(v.m); v.m.material.dispose(); v.inner.material.dispose(); devils.splice(i, 1); }
  }
}
