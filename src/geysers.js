import * as THREE from 'three';
import { G } from './state.js';
import { P } from './planets.js';
import { getHeight, HALF } from './terrain.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { shockwave, shake } from './cinefx.js';
import { spawnNode } from './resources.js';
import { mulberry32 } from './noise.js';

// —— 冰火山间歇泉（木卫二）：冰缝里冒着白汽，周期性地喷出数十米高的冰晶柱。站在喷口上会被送上高空，喷发后常留下水冰 ——
const vents = [];
const T = { value: 0 };
const colGeo = (() => {
  const pts = [];
  for (let i = 0; i <= 20; i++) { const k = i / 20; pts.push(new THREE.Vector2(0.9 + Math.pow(k, 1.3) * 7, k * 60)); }
  return new THREE.LatheGeometry(pts, 40);
})();
function colMat() {
  return new THREE.ShaderMaterial({
    uniforms: { uT: T, uA: { value: 0 }, uS: { value: Math.random() * 9 } },
    vertexShader: 'varying vec2 vUv; varying float vF; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vF = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz))); gl_Position = projectionMatrix * mv; }',
    fragmentShader: `uniform float uT, uA, uS; varying vec2 vUv; varying float vF;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); vec2 j = vec2(mod(i.x+1.0, 10.0), i.y); i.x = mod(i.x, 10.0);
        return mix(mix(h(i), h(vec2(j.x, i.y)), f.x), mix(h(i+vec2(0,1)), h(vec2(j.x, i.y+1.0)), f.x), f.y); }
      void main(){
        float k = vUv.y;
        float d = n(vec2(vUv.x * 10.0, k * 8.0 - uT * 6.0 + uS)) * 0.6 + n(vec2(vUv.x * 10.0 + 3.0, k * 18.0 - uT * 11.0)) * 0.4;
        float top = 1.0 - smoothstep(uA * 0.95 - 0.25, uA * 0.95, k); // 喷发高度随时间增长
        float a = smoothstep(0.25, 0.8, d) * pow(vF, 0.7) * top * (1.0 - k * 0.6) * min(1.0, uA * 3.0);
        vec3 c = mix(vec3(0.75, 0.88, 1.0), vec3(1.0), d) * (1.1 - k * 0.3);
        gl_FragColor = vec4(c, a * 0.72);
      }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
}
const crackMat = new THREE.MeshBasicMaterial({ color: 0x3aa8ff, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 });

export function initGeysers(scene) {
  if (P.id !== 'europa') return;
  const r = mulberry32(P.seed * 3 + 11);
  for (let tries = 0; vents.length < 6 && tries < 200; tries++) {
    const x = (r() - 0.5) * (HALF * 1.5), z = (r() - 0.5) * (HALF * 1.5);
    if (Math.hypot(x, z) < 70 || vents.some(v => Math.hypot(v.x - x, v.z - z) < 120)) continue;
    const y = getHeight(x, z);
    const g = new THREE.Group(); g.position.set(x, y, z); scene.add(g);
    // 发光的冰缝：几条放射状的细长裂纹
    for (let i = 0; i < 7; i++) {
      const a = r() * Math.PI * 2, L = 3 + r() * 6;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(L, 0.18 + r() * 0.2), crackMat);
      m.rotation.x = -Math.PI / 2; m.rotation.z = a; m.position.set(Math.cos(a) * L / 2, 0.08, -Math.sin(a) * L / 2); g.add(m);
    }
    const hole = new THREE.Mesh(new THREE.CircleGeometry(1.1, 24), new THREE.MeshBasicMaterial({ color: 0x0a1a2a })); hole.rotation.x = -Math.PI / 2; hole.position.y = 0.06; g.add(hole);
    const col = new THREE.Mesh(colGeo, colMat()); col.frustumCulled = false; col.visible = false; g.add(col);
    vents.push({ x, z, y, g, col, t: 10 + r() * 30, phase: 'idle', k: 0 });
  }
}
export function geyserList() { return vents; }
export function triggerGeyser(v) { v.phase = 'build'; v.t = 3; }

export function updateGeysers(dt) {
  if (!vents.length) return;
  T.value += dt;
  const Pl = G.player, pp = Pl.pos;
  crackMat.opacity = 0.45 + Math.sin(T.value * 2) * 0.15;
  for (const v of vents) {
    v.t -= dt;
    const dd = Math.hypot(pp.x - v.x, pp.z - v.z);
    const base = new THREE.Vector3(v.x, v.y + 0.5, v.z);
    if (v.phase === 'idle') {
      if (Math.random() < dt * 3) fx.dustPuff(base.clone().add(new THREE.Vector3((Math.random() - 0.5) * 2, 0.4, (Math.random() - 0.5) * 2)), 1, 0.6, [0.85, 0.9, 0.95]);
      if (v.t <= 0) { v.phase = 'build'; v.t = 3; if (dd < 160) audio.play('rumble', base); }
    } else if (v.phase === 'build') {
      if (Math.random() < dt * 25) fx.dustPuff(base.clone().add(new THREE.Vector3((Math.random() - 0.5) * 3, 0.3, (Math.random() - 0.5) * 3)), 2, 1.2, [0.9, 0.95, 1]);
      if (dd < 40) G.shake = Math.max(G.shake || 0, 0.12 * (1 - dd / 40));
      if (v.t <= 0) {
        v.phase = 'erupt'; v.t = 7; v.k = 0; v.col.visible = true;
        shockwave(base, 0xbfe6ff, 7, 0.9); shake(0.5, base); audio.play('boom', base);
        if (dd < 160) G.events.emit('toast', '冰火山喷发');
      }
    } else if (v.phase === 'erupt') {
      v.k = Math.min(1, v.k + dt * 1.2);
      const fade = Math.min(1, v.t / 1.5);
      v.col.material.uniforms.uA.value = v.k * fade;
      for (let i = 0; i < 6; i++) fx.rise(base.clone().setY(v.y + 1 + Math.random() * 3), [0.85, 0.95, 1], 3);
      if (Math.random() < dt * 4) fx.burst(base.clone().setY(v.y + 4), [0.8, 0.92, 1], 12, 9);
      // 冰晶落回地面
      if (Math.random() < dt * 20) { const a = Math.random() * 6.28, r = 4 + Math.random() * 14; fx.dustPuff(new THREE.Vector3(v.x + Math.cos(a) * r, v.y + 0.4, v.z + Math.sin(a) * r), 1, 0.8, [0.92, 0.96, 1]); }
      // 站在喷口上：被送上天
      if (!G.driving && !Pl.dead && dd < 2.6 && pp.y - v.y < 8 && fade > 0.5) {
        Pl.vel.y = Math.max(Pl.vel.y, 22); Pl.onGround = false;
        if (!v.launched) { v.launched = true; G.stats.geyser = (G.stats.geyser || 0) + 1; G.events.emit('toast', '被冰火山送上了天！'); }
      }
      if (v.t <= 0) {
        v.phase = 'idle'; v.t = 35 + Math.random() * 40; v.col.visible = false; v.launched = false;
        // 喷发后在附近留下一簇水冰
        if (Math.random() < 0.7) { const a = Math.random() * 6.28, x = v.x + Math.cos(a) * 9, z = v.z + Math.sin(a) * 9; if (!G.colliders.overlaps(x, z, 2)) spawnNode('ice', x, z, 10 + Math.floor(Math.random() * 8)); }
      }
    }
  }
}
