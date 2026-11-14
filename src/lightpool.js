import * as THREE from 'three';
import { G } from './state.js';

// —— 夜间真实光源：固定数量的点光源在玩家附近的建筑间平滑轮换，加上地面的彩色光池 ——
// 灯的数量固定，不会因为建筑增减而让着色器重新编译

const N = 6;
const LIGHT = {
  habitat: [0xffc27a, 3.2, 1], apartment: [0xffc27a, 6, 1.3], greenhouse: [0xff5cc8, 2.6, 1.1], vfarm: [0xff5cc8, 4, 1.2],
  lamp: [0xffd29a, 3.9, 1.15], reactor: [0x4fb2ff, 4, 1.4], plaza: [0x8fd4ff, 3.5, 1.2], lab: [0x9fe8ff, 3, 0.9],
  fabricator: [0xffa040, 2.5, 0.9], oxygen: [0x9fe0ff, 5, 0.45], extractor: [0x9fe0ff, 6, 0.5], lifehub: [0x9fffd0, 3, 1],
  trade: [0xffd080, 3, 1], launch: [0xffffff, 5, 1.4], monument: [0xffe0a0, 6, 1.3], terraformer: [0x9fffe0, 6, 1.4],
  beacon: [0xff6050, 3, 0.6], landing: [0xfff0d0, 2, 1.1],
};
const lights = [];
let poolTex, chooseT = 0;

function poolTexture() {
  if (poolTex) return poolTex;
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const g = cv.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  // 平方衰减的柔和光斑，中心不过曝
  for (let i = 0; i <= 10; i++) { const r = i / 10, a = Math.pow(1 - r, 2.2) * 0.9; gr.addColorStop(r, `rgba(255,255,255,${a.toFixed(3)})`); }
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  poolTex = new THREE.CanvasTexture(cv); poolTex.colorSpace = THREE.SRGBColorSpace;
  return poolTex;
}
// 路灯下的体积光锥：上亮下暗，边缘柔和
const coneGeo = new THREE.CylinderGeometry(0.22, 1.9, 4, 24, 1, true); coneGeo.translate(0, -2, 0);
function coneMat(color) {
  return new THREE.ShaderMaterial({
    uniforms: { uC: { value: new THREE.Color(color) }, uI: { value: 0 } },
    vertexShader: `varying float vY; varying vec3 vN, vV;
      void main(){ vY = position.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `uniform vec3 uC; uniform float uI; varying float vY; varying vec3 vN, vV;
      void main(){ float h = clamp(1.0 + vY/4.0, 0.0, 1.0); float f = abs(dot(normalize(vN), normalize(vV)));
        float a = pow(h, 1.6) * pow(f, 1.5) * uI; gl_FragColor = vec4(uC * a, a); }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
  });
}
const poolGeo = new THREE.PlaneGeometry(1, 1); poolGeo.rotateX(-Math.PI / 2);

export function initLightPool(scene) {
  for (let i = 0; i < N; i++) {
    const l = new THREE.PointLight(0xffffff, 0, 34, 1.7);
    l.userData = { b: null, i: 0 };
    scene.add(l); lights.push(l);
  }
}

function spec(b) { return LIGHT[b.type]; }

// 给建筑挂一块地面光池（随建筑一起移除）
function ensurePool(b, s) {
  const a = b.anim;
  if (a._pool !== undefined) return a._pool;
  const mat = new THREE.MeshBasicMaterial({ map: poolTexture(), color: s[0], transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  const m = new THREE.Mesh(poolGeo, mat);
  const r = Math.max(5, b.def.r * 2.6) * s[2] * 1.6;
  m.scale.set(r, 1, r); m.position.set(0, 0.18, 0); m.renderOrder = 2;
  m.castShadow = m.receiveShadow = false;
  const sc = b.baseScale || 1; m.scale.x /= sc; m.scale.z /= sc; m.position.y /= sc;
  b.group.add(m);
  a._pool = m;
  if (b.type === 'lamp') { const c = new THREE.Mesh(coneGeo, coneMat(s[0])); c.position.y = 4.1 / sc; c.scale.setScalar(1 / sc); b.group.add(c); m.userData.cone = c; }
  return m;
}

export function updateLightPool(dt) {
  const night = G.time.night, P = G.player.pos;
  const dark = Math.min(1, Math.max(0, (night - 0.08) / 0.5)) * (1 - (G.storm || 0) * 0.3);
  // 地面光池
  for (const b of G.buildings) {
    const s = spec(b); if (!s) continue;
    const m = ensurePool(b, s);
    const on = b.powered !== false && !b.broken && b.buildT >= 1;
    const flick = b.type === 'lamp' || b.type === 'habitat' ? 1 - (Math.random() < 0.004 ? 0.4 : 0) : 1;
    const tgt = on ? dark * 0.32 * flick : 0;
    m.material.opacity += (tgt - m.material.opacity) * Math.min(1, dt * 3);
    m.visible = m.material.opacity > 0.004;
    const c = m.userData.cone; if (c) { c.material.uniforms.uI.value = m.material.opacity * 1.1 * (1 - (G.storm || 0) * 0.5); c.visible = m.visible; }
  }
  // 选出最近的 N 座亮灯建筑
  chooseT -= dt;
  let want = null;
  if (chooseT <= 0) {
    chooseT = 0.3;
    want = [];
    if (dark > 0.01) {
      for (const b of G.buildings) {
        const s = spec(b); if (!s || b.broken || b.powered === false || b.buildT < 1) continue;
        const d = Math.hypot(b.x - P.x, b.z - P.z); if (d > 140) continue;
        want.push({ b, d: d / s[2] });
      }
      want.sort((x, y) => x.d - y.d); want.length = Math.min(want.length, N);
    }
  }
  if (want) {
    const set = new Set(want.map(w => w.b));
    const free = want.filter(w => !lights.some(l => l.userData.b === w.b)).map(w => w.b);
    for (const l of lights) {
      const u = l.userData;
      if (u.b && (!set.has(u.b) || !G.buildings.includes(u.b))) u.leaving = true;
      if (!u.b && free.length) assign(l, free.shift());
    }
    // 正在淡出的灯，淡完后接手新的建筑
    for (const l of lights) if (l.userData.leaving && l.intensity < 0.5 && free.length) assign(l, free.shift());
  }
  for (const l of lights) {
    const u = l.userData;
    let tgt = 0;
    if (u.b && !u.leaving) { const s = spec(u.b); tgt = s[2] * 70 * dark; }
    l.intensity += (tgt - l.intensity) * Math.min(1, dt * (tgt > l.intensity ? 2 : 4));
    if (u.leaving && l.intensity < 0.05) { u.b = null; u.leaving = false; l.intensity = 0; }
  }
}

function assign(l, b) {
  const s = spec(b);
  l.userData.b = b; l.userData.leaving = false;
  l.color.setHex(s[0]); l.intensity = 0;
  l.position.set(b.x, b.y + s[1], b.z);
  l.distance = Math.max(24, b.def.r * 6) * s[2];
}
