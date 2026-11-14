import * as THREE from 'three';
import { G } from './state.js';
import { glowTexture, M } from './models.js';
import { fx } from './fx.js';
import { audio } from './audio.js';

// ================= 着色器噪声 =================
const NOISE = `
  float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm3(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * n3(p); p *= 2.07; a *= 0.5; } return s; }`;
const T = { value: 0 };

// ================= 推进器火焰：蓝白内核 → 橙色外焰，湍流抖动 =================
export const flameMat = new THREE.ShaderMaterial({
  uniforms: { uT: T, uPow: { value: 1 } },
  vertexShader: `uniform float uT; varying vec2 vUv; varying vec3 vN, vV;
    void main(){ vUv = uv; vec3 p = position;
      float w = sin(uv.y * 14.0 - uT * 40.0) * 0.06 * uv.y;
      p.x += w; p.z += cos(uv.y * 11.0 - uT * 33.0) * 0.06 * uv.y;
      vec4 mv = modelViewMatrix * vec4(p, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv; }`,
  fragmentShader: `uniform float uT, uPow; varying vec2 vUv; varying vec3 vN, vV; ${NOISE}
    void main(){
      float v = vUv.y;
      float n = fbm3(vec3(vUv.x * 6.0, v * 5.0 - uT * 9.0, uT * 2.0));
      float edge = pow(abs(dot(vN, vV)), 1.4);
      float body = (1.0 - smoothstep(0.0, 0.95, v + n * 0.35)) * edge;
      vec3 core = vec3(0.75, 0.88, 1.0), mid = vec3(1.0, 0.72, 0.32), tail = vec3(0.9, 0.28, 0.08);
      vec3 c = mix(core, mid, smoothstep(0.02, 0.22, v + n * 0.1)); c = mix(c, tail, smoothstep(0.3, 0.8, v));
      // 激波钻石（马赫环）
      float dia = smoothstep(0.75, 1.0, sin(v * 38.0 - 1.5)) * (1.0 - smoothstep(0.1, 0.45, v)) * 0.8;
      gl_FragColor = vec4(c * (body * 2.2 + dia) * uPow, 1.0);
    }`,
  transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
});

// ================= 能量光束：白热内核 + 流动的能量外层 =================
export function beamMaterial(color) {
  return new THREE.ShaderMaterial({
    uniforms: { uT: T, uLen: { value: 1 }, uC: { value: new THREE.Color(color) }, uI: { value: 1 } },
    vertexShader: `varying vec2 vUv; varying vec3 vN, vV;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uT, uLen, uI; uniform vec3 uC; varying vec2 vUv; varying vec3 vN, vV; ${NOISE}
      void main(){
        float f = pow(abs(dot(vN, vV)), 2.5);
        float flow = fbm3(vec3(vUv.x * 3.0, vUv.y * uLen * 1.5 - uT * 26.0, uT * 3.0));
        float pulses = smoothstep(0.55, 1.0, sin(vUv.y * uLen * 4.0 - uT * 50.0)) * 0.6;
        float ends = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
        vec3 c = uC * (0.6 + flow * 1.4 + pulses) + vec3(1.0) * pow(f, 6.0) * 1.5;
        gl_FragColor = vec4(c * f * ends * uI, 1.0);
      }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
  });
}

// ================= 瞬态特效：火球、冲击波、闪光 =================
const live = [];
const lights = [];
for (let i = 0; i < 2; i++) { const l = new THREE.PointLight(0xffa050, 0, 30, 1.6); lights.push({ l, t: 0, dur: 1, peak: 0 }); }
let lightsAdded = false;
// 开局就把闪光灯放进场景，避免第一次爆炸时所有材质重新编译导致卡顿
export function addFlashLights() { if (lightsAdded || !G.scene) return; lights.forEach(o => G.scene.add(o.l)); lightsAdded = true; }
export function flash(pos, color, peak, range, dur) {
  if (!lightsAdded) addFlashLights();
  const o = lights.reduce((a, b) => (a.t / a.dur > b.t / b.dur || a.peak === 0 ? a : b));
  o.l.position.copy(pos); o.l.color.set(color); o.l.distance = range; o.t = 0; o.dur = dur; o.peak = peak;
}
const ringTex = (() => {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256; const g = cv.getContext('2d');
  const gr = g.createRadialGradient(128, 128, 70, 128, 128, 128);
  gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.75, 'rgba(255,255,255,.9)'); gr.addColorStop(0.85, 'rgba(255,255,255,.4)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256); return new THREE.CanvasTexture(cv);
})();
const fireTex = (() => {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const g = cv.getContext('2d');
  for (let i = 0; i < 14; i++) {
    const x = 64 + (Math.random() - 0.5) * 50, y = 64 + (Math.random() - 0.5) * 50, r = 18 + Math.random() * 34;
    const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(cv);
})();
const smokeTex = fireTex;

function sprite(tex, color, blending, opacity) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color, transparent: true, depthWrite: false, blending, opacity }));
  G.scene.add(s); return s;
}
// 冲击波：地面扩散的光环 + 面向镜头的空气激波
export function shockwave(pos, color = 0xffc080, size = 6, dur = 0.7, ground = true) {
  const s = sprite(ringTex, color, THREE.AdditiveBlending, 1); s.position.copy(pos);
  live.push({ o: s, t: 0, dur, upd: (k, o) => { const e = 1 - Math.pow(1 - k, 3); o.scale.setScalar(0.5 + e * size * 2); o.material.opacity = (1 - k) * (1 - k) * 0.55; } });
  if (ground) {
    const m = new THREE.Mesh(new THREE.RingGeometry(0.94, 1, 96), new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    m.rotation.x = -Math.PI / 2; m.position.set(pos.x, pos.y - 0.6, pos.z); G.scene.add(m);
    live.push({ o: m, t: 0, dur: dur * 1.4, upd: (k, o) => { const e = 1 - Math.pow(1 - k, 2.5); o.scale.setScalar(0.3 + e * size * 1.5); o.material.opacity = (1 - k) * (1 - k) * 0.85; } });
  }
}
// 爆炸：闪光 → 火球翻滚上升并转为黑烟 → 冲击波 → 镜头震动
const recent = [];
export function explode(pos, scale = 1, color = 0xff8a3a) {
  // 同一时间多次爆炸叠加会过曝：按近期爆炸数量衰减亮度
  const now = performance.now(); while (recent.length && now - recent[0] > 350) recent.shift(); recent.push(now);
  const att = 1 / Math.sqrt(recent.length);
  if (recent.length <= 3) audio.play('boom', pos);
  flash(pos, color, 60 * scale * att, 24 * scale, 0.6);
  const core = sprite(glowTexture(), 0xfff2d0, THREE.AdditiveBlending, 1); core.position.copy(pos);
  live.push({ o: core, t: 0, dur: 0.28, upd: (k, o) => { o.scale.setScalar((1.6 + k * 4) * scale); o.material.opacity = (1 - k) * (1 - k) * att; } });
  for (let i = 0; i < 11; i++) {
    const f = sprite(fireTex, 0xffffff, THREE.AdditiveBlending, 1);
    const off = new THREE.Vector3((Math.random() - 0.5) * 2.4, Math.random() * 1.6, (Math.random() - 0.5) * 2.4).multiplyScalar(scale);
    f.position.copy(pos).add(off); f.material.rotation = Math.random() * 6;
    const rise = 1.5 + Math.random() * 2.5, sz = (1.6 + Math.random() * 1.6) * scale, dur = 0.6 + Math.random() * 0.5;
    live.push({ o: f, t: 0, dur, upd: (k, o, dt) => {
      o.position.y += dt * rise * scale; o.material.rotation += dt * 0.8;
      o.scale.setScalar(sz * (0.5 + k * 1.2));
      const c = o.material.color, w = Math.max(0, 1 - k * 6), hot = 3.2 * (1 - k) + 0.4; c.setRGB(hot, hot * (0.42 + w * 0.3 - k * 0.2), hot * (0.1 + w * 0.25)); o.material.opacity = (k < 0.45 ? 1 : (1 - k) / 0.55) * att;
    } });
  }
  for (let i = 0; i < 14; i++) {
    const g = 0.2 + Math.random() * 0.1;
    const s = sprite(smokeTex, new THREE.Color().setRGB(g * 1.15, g * 0.9, g * 0.78), THREE.NormalBlending, 0);
    const a = Math.random() * Math.PI * 2, r = Math.random() * 2.2;
    s.position.copy(pos).add(new THREE.Vector3(Math.cos(a) * r, 0.3 + Math.random() * 1.2, Math.sin(a) * r).multiplyScalar(scale));
    const sz = (2.5 + Math.random() * 3) * scale, dur = 2.8 + Math.random() * 1.8, rise = 0.8 + Math.random() * 1.6, drift = new THREE.Vector3(Math.cos(a), 0, Math.sin(a)).multiplyScalar(0.6 + Math.random());
    s.material.rotation = Math.random() * 6;
    live.push({ o: s, t: -(0.08 + 0.04 * i), dur, upd: (k, o, dt) => { o.position.y += dt * rise * scale * (1 - k * 0.6); o.position.addScaledVector(drift, dt * scale); o.scale.setScalar(sz * (0.5 + k * 1.3)); o.material.opacity = Math.sin(Math.min(1, k) * Math.PI) * 0.42; o.material.rotation += dt * 0.25; } });
  }
  fx.ring(new THREE.Vector3(pos.x, pos.y - 1.2, pos.z), 1.2 * scale, Math.round(70 * scale));
  shockwave(pos, 0xffd2a0, 4 * scale, 0.6);
  fx.burst(pos, [1, 0.55, 0.15], Math.round(40 * scale), 14 * Math.sqrt(scale));
  shake(Math.min(1, 0.35 * scale), pos);
}
// 火箭尾焰卷起的地面烟云：沿地面向外翻涌，逐渐变大变淡
export function billow(pos, scale = 1, tint = [0.78, 0.6, 0.48]) {
  if (live.length > 420) return;
  const a = Math.random() * Math.PI * 2, sp = (10 + Math.random() * 14) * scale;
  const g = 0.75 + Math.random() * 0.35;
  const s = sprite(smokeTex, new THREE.Color().setRGB(tint[0] * g, tint[1] * g, tint[2] * g), THREE.NormalBlending, 0);
  s.position.set(pos.x + Math.cos(a) * 1.5 * scale, pos.y + 0.8 + Math.random() * 1.5, pos.z + Math.sin(a) * 1.5 * scale);
  s.material.rotation = Math.random() * 6;
  const v = new THREE.Vector3(Math.cos(a) * sp, 0.6 + Math.random() * 2.2, Math.sin(a) * sp), sz = (4 + Math.random() * 4) * scale, dur = 4 + Math.random() * 3;
  live.push({ o: s, t: 0, dur, upd: (k, o, dt) => {
    o.position.addScaledVector(v, dt); v.multiplyScalar(Math.pow(0.42, dt)); v.y += dt * 0.5;
    o.scale.setScalar(sz * (0.4 + Math.sqrt(k) * 1.8)); o.material.rotation += dt * 0.15;
    o.material.opacity = Math.min(1, k * 8) * (1 - k) * 0.75;
  } });
}
// 炮口焰：极短的强光 + 前向十字星芒
export function muzzle(pos, dir, color = 0xffc070, size = 1) {
  flash(pos, color, 30 * size, 14 * size, 0.09);
  const s = sprite(glowTexture(), color, THREE.AdditiveBlending, 1); s.position.copy(pos);
  live.push({ o: s, t: 0, dur: 0.09, upd: (k, o) => { o.scale.setScalar((1.8 - k) * size); o.material.opacity = 1 - k; } });
  const f = sprite(fireTex, 0xffe0b0, THREE.AdditiveBlending, 1); f.position.copy(pos).addScaledVector(dir, 0.6 * size); f.material.rotation = Math.random() * 6;
  live.push({ o: f, t: 0, dur: 0.07, upd: (k, o) => { o.scale.setScalar((1.2 + k) * size); o.material.opacity = 1 - k; } });
}
// 小型命中：闪光 + 小冲击环
export function impact(pos, color = 0x8ee7ff, size = 1) {
  flash(pos, color, 18 * size, 8 * size, 0.18);
  const s = sprite(glowTexture(), color, THREE.AdditiveBlending, 1); s.position.copy(pos);
  live.push({ o: s, t: 0, dur: 0.22, upd: (k, o) => { o.scale.setScalar((1 + k * 3) * size); o.material.opacity = 1 - k; } });
  shockwave(pos, color, 1.2 * size, 0.35, false);
}
export function shake(amount, from) {
  const d = from ? from.distanceTo(G.player.pos) : 0;
  G.shake = Math.max(G.shake || 0, amount * Math.max(0, 1 - d / 120));
}

export function updateCineFx(dt) {
  T.value = performance.now() * 0.001;
  for (let i = live.length - 1; i >= 0; i--) {
    const e = live[i]; e.t += dt;
    if (e.t < 0) { e.o.visible = false; continue; }
    e.o.visible = true;
    const k = Math.min(1, e.t / e.dur);
    e.upd(k, e.o, dt);
    if (k >= 1) { G.scene.remove(e.o); e.o.material.dispose(); if (e.o.geometry && !e.o.isSprite) e.o.geometry.dispose(); live.splice(i, 1); }
  }
  for (const o of lights) {
    if (o.peak <= 0) continue;
    o.t += dt; const k = o.t / o.dur;
    o.l.intensity = k >= 1 ? 0 : o.peak * Math.pow(1 - k, 2);
    if (k >= 1) o.peak = 0;
  }
  G.shake = (G.shake || 0) * Math.pow(0.02, dt);
}

export function initCineFx() { M.flame = flameMat; addFlashLights(); }
