import * as THREE from 'three';
import { G } from './state.js';
import { audio } from './audio.js';
import { glowTexture, M } from './models.js';
import { billow, shockwave } from './cinefx.js';
import { fx } from './fx.js';
import { playWarp } from './warp.js';

// —— 影片《星港》：太空 → 再入大气 → 着陆 → 城市延时生长 → 星际启航 → 虫洞 → 片名 ——
// 播完后刷新页面，回到干净的标题画面（影片里临时建造的东西不会留下）

let F = null, X = null; // F：影片状态；X：主程序注入的接口

// ================= 太空场景 =================
function noiseGLSL() {
  return `
  float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
    return mix(mix(mix(h3(i), h3(i+vec3(1,0,0)), f.x), mix(h3(i+vec3(0,1,0)), h3(i+vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i+vec3(0,0,1)), h3(i+vec3(1,0,1)), f.x), mix(h3(i+vec3(0,1,1)), h3(i+vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm3(vec3 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 6; i++){ v += a * n3(p); p *= 2.02; a *= 0.5; } return v; }`;
}
export function buildSpace() {
  const s = new THREE.Scene(); s.background = new THREE.Color(0x000000);
  const sunDir = new THREE.Vector3(-0.8, 0.25, 0.55).normalize();
  // 星空：三层亮度
  const sg = new THREE.BufferGeometry(), N = 6000, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const v = new THREE.Vector3().randomDirection().multiplyScalar(9000);
    pos.set([v.x, v.y, v.z], i * 3);
    const b = Math.pow(Math.random(), 3) * 1.4 + 0.15, t = Math.random();
    col.set([b * (t < 0.2 ? 0.8 : 1), b * (t < 0.2 ? 0.88 : t > 0.85 ? 0.85 : 1), b * (t > 0.85 ? 0.7 : 1)], i * 3);
  }
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); sg.setAttribute('color', new THREE.BufferAttribute(col, 3));
  s.add(new THREE.Points(sg, new THREE.PointsMaterial({ size: 2.2, sizeAttenuation: false, vertexColors: true, map: glowTexture(), transparent: true, depthWrite: false })));
  // 银河带
  const mw = new THREE.Mesh(new THREE.SphereGeometry(8500, 64, 32), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, transparent: true,
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: noiseGLSL() + `varying vec3 vP; void main(){ vec3 ax = normalize(vec3(0.3, 1.0, 0.2)); float band = exp(-pow(dot(vP, ax) * 4.0, 2.0));
      float n = fbm3(vP * 6.0); vec3 c = mix(vec3(0.25, 0.2, 0.35), vec3(0.6, 0.5, 0.42), n) * band * n * 0.5; gl_FragColor = vec4(c, 1.0); }`,
  })); s.add(mw);
  // 火星
  const R = 600;
  const mars = new THREE.Mesh(new THREE.SphereGeometry(R, 160, 96), new THREE.ShaderMaterial({
    uniforms: { uSun: { value: sunDir } },
    vertexShader: 'varying vec3 vN, vP, vW; void main(){ vP = position / ' + R.toFixed(1) + '; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: noiseGLSL() + `uniform vec3 uSun; varying vec3 vN, vP, vW;
      void main(){
        vec3 p = vP * 3.0;
        float c = fbm3(p + fbm3(p * 1.7) * 0.8);
        float m = smoothstep(0.45, 0.62, fbm3(p * 0.8 + 7.0));
        vec3 rust = mix(vec3(0.62, 0.28, 0.14), vec3(0.82, 0.48, 0.28), c);
        vec3 dark = vec3(0.28, 0.14, 0.09);
        vec3 col = mix(rust, dark, m * 0.75);
        // 峡谷与陨石坑的细节
        float cr = smoothstep(0.62, 0.66, fbm3(p * 6.0)) * 0.25; col *= 1.0 - cr;
        float cap = smoothstep(0.86, 0.93, abs(vP.y) + (c - 0.5) * 0.08); col = mix(col, vec3(0.95, 0.93, 0.9), cap);
        float l = dot(normalize(vN), uSun);
        float day = smoothstep(-0.08, 0.35, l);
        vec3 lit = col * (0.04 + 1.25 * max(l, 0.0)) ;
        // 晨昏线附近的暖色散射
        lit += vec3(0.5, 0.2, 0.08) * exp(-pow(l * 6.0, 2.0)) * 0.25;
        gl_FragColor = vec4(lit * mix(0.25, 1.0, day), 1.0);
      }`,
  }));
  s.add(mars);
  // 大气层：边缘发光，向阳一侧更亮
  const atm = new THREE.Mesh(new THREE.SphereGeometry(R * 1.015, 96, 64), new THREE.ShaderMaterial({
    uniforms: { uSun: { value: sunDir } }, side: THREE.FrontSide, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    vertexShader: 'varying vec3 vN, vV; void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: `uniform vec3 uSun; varying vec3 vN, vV; void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 3.5); float s = smoothstep(-0.25, 0.5, dot(vN, uSun));
      vec3 c = mix(vec3(0.9, 0.45, 0.3), vec3(1.0, 0.78, 0.6), s) * f * s * 1.4; gl_FragColor = vec4(c, 1.0); }`,
  }));
  s.add(atm);
  // 太阳
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xfff1dc, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  sun.position.copy(sunDir).multiplyScalar(7000); sun.scale.setScalar(1400); s.add(sun);
  const sun2 = sun.clone(); sun2.material = sun.material.clone(); sun2.material.color.set(0xffb070); sun2.scale.setScalar(4200); sun2.material.opacity = 0.35; s.add(sun2);
  const dl = new THREE.DirectionalLight(0xfff0dd, 3.2); dl.position.copy(sunDir).multiplyScalar(100); s.add(dl);
  s.add(new THREE.HemisphereLight(0x8a6050, 0x100808, 0.35));
  // 方舟一号：主脊 + 旋转的环形居住区 + 太阳翼 + 引擎
  const ark = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xdedad2, roughness: 0.45, metalness: 0.35 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2a2c30, roughness: 0.5, metalness: 0.6 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xc89a40, roughness: 0.3, metalness: 1 });
  const add = (geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, p = ark) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); p.add(m); return m; };
  add(new THREE.CylinderGeometry(1.6, 1.6, 60, 20), white, 0, 0, 0, Math.PI / 2);
  for (let i = -3; i <= 3; i++) add(new THREE.CylinderGeometry(2.1, 2.1, 2.2, 20), i % 2 ? dark : white, 0, 0, i * 7, Math.PI / 2);
  const ring = new THREE.Group(); ring.position.z = 6; ark.add(ring);
  add(new THREE.TorusGeometry(16, 1.9, 16, 96), white, 0, 0, 0, 0, 0, 0, ring);
  add(new THREE.TorusGeometry(16, 2.0, 4, 96), dark, 0, 0, 0, 0, 0, 0, ring).scale.set(1, 1, 0.3);
  for (let i = 0; i < 6; i++) add(new THREE.CylinderGeometry(0.35, 0.35, 16, 8), white, 0, 0, 0, 0, 0, i * Math.PI / 3, ring).position.set(Math.cos(i * Math.PI / 3 + Math.PI / 2) * 8, Math.sin(i * Math.PI / 3 + Math.PI / 2) * 8, 0);
  const winM = new THREE.MeshBasicMaterial({ color: 0xffd9a0 });
  for (let i = 0; i < 48; i++) { const a = i / 48 * Math.PI * 2; add(new THREE.BoxGeometry(0.5, 0.5, 0.3), winM, Math.cos(a) * 17.9, Math.sin(a) * 17.9, 0, 0, 0, a, ring); }
  for (const sd of [-1, 1]) {
    const w = add(new THREE.BoxGeometry(26, 0.15, 7), new THREE.MeshStandardMaterial({ color: 0x1a2a5a, roughness: 0.2, metalness: 0.7, emissive: 0x050a20 }), sd * 16, 0, -14);
    add(new THREE.BoxGeometry(26.4, 0.25, 0.3), gold, 0, 0, 3.6, 0, 0, 0, w); add(new THREE.BoxGeometry(26.4, 0.25, 0.3), gold, 0, 0, -3.6, 0, 0, 0, w);
    add(new THREE.CylinderGeometry(0.25, 0.25, 4, 8), white, sd * 3, 0, -14, 0, 0, Math.PI / 2);
  }
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4; add(new THREE.CylinderGeometry(1.0, 1.6, 4, 16), dark, Math.cos(a) * 2.6, Math.sin(a) * 2.6, -31, Math.PI / 2); }
  add(new THREE.SphereGeometry(2.6, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), gold, 0, 0, 30, -Math.PI / 2);
  const engines = [];
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4; const e = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0x7fc8ff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); e.position.set(Math.cos(a) * 2.6, Math.sin(a) * 2.6, -34); e.scale.setScalar(7); ark.add(e); engines.push(e); }
  const nav = []; for (const [x, c] of [[-29, 0xff3030], [29, 0x30ff60]]) { const n = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: c, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); n.position.set(x, 0, -14); n.scale.setScalar(2.5); ark.add(n); nav.push(n); }
  s.add(ark);
  // 再入大气的着陆舱：隔热罩 + 等离子鞘 + 尾迹
  const cap = new THREE.Group();
  add(new THREE.CylinderGeometry(1.2, 2.6, 3.2, 32), white, 0, 1.6, 0, 0, 0, 0, cap);
  add(new THREE.CylinderGeometry(2.7, 2.7, 0.5, 32), new THREE.MeshStandardMaterial({ color: 0x3a2a22, roughness: 0.9, emissive: 0xff5010, emissiveIntensity: 0.8 }), 0, -0.1, 0, 0, 0, 0, cap);
  const plasma = new THREE.Mesh(new THREE.ConeGeometry(3.4, 18, 40, 1, true), new THREE.ShaderMaterial({
    uniforms: { uT: { value: 0 } }, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    vertexShader: 'varying vec2 vUv; varying float vF; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vF = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz))); gl_Position = projectionMatrix * mv; }',
    fragmentShader: noiseGLSL() + `uniform float uT; varying vec2 vUv; varying float vF; void main(){ float k = 1.0 - vUv.y; float n = fbm3(vec3(vUv.x * 8.0, vUv.y * 4.0 - uT * 7.0, uT));
      float a = pow(1.0 - k, 1.5) * (0.4 + n) * (0.35 + 0.65 * pow(1.0 - vF, 1.5)); vec3 c = mix(vec3(1.0, 0.35, 0.08), vec3(1.0, 0.9, 0.7), pow(1.0 - k, 4.0)); gl_FragColor = vec4(c * a * 2.2, a); }`,
  }));
  plasma.position.y = 8.5; cap.add(plasma);
  const glowB = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xff7030, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); glowB.scale.setScalar(6); glowB.position.y = -0.5; cap.add(glowB);
  cap.visible = false; s.add(cap);
  // 尾迹火星（简单粒子）
  const trail = []; for (let i = 0; i < 90; i++) { const t = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xff9a50, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 })); t.visible = false; s.add(t); trail.push({ s: t, life: 0, v: new THREE.Vector3() }); }
  return { s, mars, atm, ark, ring, engines, nav, cap, plasma, trail, sunDir, R };
}

// ================= 字幕 =================
function caption(lines, small) {
  if (F.capEl) { const old = F.capEl; old.style.transition = 'opacity .8s'; old.style.opacity = 0; setTimeout(() => old.remove(), 900); }
  const el = document.createElement('div'); el.className = 'film-cap' + (small ? ' small' : '');
  el.innerHTML = lines.map((l, i) => `<p style="animation-delay:${0.3 + i * 1.1}s">${l}</p>`).join('');
  document.body.appendChild(el); F.capEl = el;
}
function flash(color = '#fff', dur = 900) {
  const d = document.createElement('div'); d.className = 'film-flash'; d.style.background = color; document.body.appendChild(d);
  d.animate([{ opacity: 1 }, { opacity: 0 }], { duration: dur, easing: 'ease-out' }).onfinish = () => d.remove();
}

// ================= 镜头时间轴 =================
const SHOTS = [
  { at: 0, name: 'space' }, { at: 15, name: 'entry' }, { at: 25, name: 'land' }, { at: 36, name: 'grow' }, { at: 56, name: 'launch' }, { at: 67, name: 'warp' },
];
const CITY = [
  ['solar', 18, 10], ['solar', 24, 10], ['oxygen', 14, -14], ['habitat', -20, 12], ['greenhouse', -4, 22], ['extractor', 26, -10],
  ['solar', 30, 10], ['habitat', -30, -4], ['fabricator', -22, -24], ['lamp', 4, 12], ['lamp', -10, 4], ['plaza', 4, 34],
  ['apartment', -16, 40], ['apartment', 18, 42], ['vfarm', 34, 26], ['reactor', 40, -2], ['lab', -40, 22], ['apartment', -4, 56], ['lifehub', 28, 58], ['lamp', 12, 26], ['lamp', -8, 30],
];

export function filmActive() { return !!F; }
export function filmSeek(t) { if (F) F.t = t; }
export function playFilm(api) {
  X = api;
  F = { t: 0, shot: -1, space: buildSpace(), cam: new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.5, 20000), built: 0, look: new THREE.Vector3() };
  G.film = true; G.cine = true;
  document.body.classList.add('cinema', 'film');
  const skip = e => { if (e.type === 'mousedown' || e.code === 'Space' || e.code === 'Escape') end(); };
  F.skip = skip; setTimeout(() => { addEventListener('keydown', skip); addEventListener('mousedown', skip); }, 600);
  audio.init(); audio.play('chapter');
  const sk = document.createElement('div'); sk.className = 'film-skip'; sk.textContent = '点击或按空格跳过'; document.body.appendChild(sk); F.skipEl = sk;
}
function end() {
  if (!F || F.ending) return; F.ending = true;
  const d = document.createElement('div'); d.className = 'film-flash'; d.style.background = '#000'; d.style.opacity = 0; document.body.appendChild(d);
  d.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 700, fill: 'forwards' }).onfinish = () => location.reload();
}
function enter(name) {
  const S = F.space;
  if (name === 'space') caption(['公元 2157 年', '地球已无法承载八十亿人', '<b>方舟一号</b> · 抵达火星轨道']);
  if (name === 'entry') { flash('#000', 700); caption(['再入大气层'], true); S.ark.visible = false; S.cap.visible = true; audio.play('rumble'); }
  if (name === 'land') {
    flash('#fff', 1200); caption(['乌托邦平原', '第 1 日'], true);
    G.time.t = 0.29; const L = X.lander.group; F.gy = X.getHeight(X.LANDER.x, X.LANDER.z) + 0.1; L.position.y = F.gy + 160;
    F.flame = new THREE.Mesh(new THREE.ConeGeometry(1.7, 10, 18, 1, true), M.flame); F.flame.rotation.x = Math.PI; F.flame.position.y = -4.2; L.add(F.flame);
    F.lamp = new THREE.PointLight(0xffa050, 0, 120, 1.4); F.lamp.position.y = -2; L.add(F.lamp);
    audio.engine(1);
  }
  if (name === 'grow') { caption(['一座，两座……'], true); F.growT0 = F.t; audio.engine(0); }
  if (name === 'launch') {
    caption(['黎明', '启航'], true);
    F.pad = X.createBuilding('launch', 70, -50, 0, undefined, false);
    // 选一个视线不被山丘挡住的机位
    const b = F.pad;
    for (let i = 0; i < 24 && !F.lcam; i++) {
      const a = i * 0.26 + 0.4, cx = b.x + Math.cos(a) * 75, cz = b.z + Math.sin(a) * 75, cy = X.getHeight(cx, cz) + 3;
      let ok = Math.hypot(cx, cz) > 50;
      for (let k = 0.05; ok && k < 0.9; k += 0.05) { const x = cx + (b.x - cx) * k, z = cz + (b.z - cz) * k; if (X.getHeight(x, z) > cy + (b.y + 4 - cy) * k) ok = false; }
      if (ok) F.lcam = new THREE.Vector3(cx, cy, cz);
    }
    if (!F.lcam) F.lcam = new THREE.Vector3(b.x + 60, X.getHeight(b.x + 60, b.z) + 12, b.z);
  }
  if (name === 'warp') {
    if (F.capEl) F.capEl.remove();
    G.warping = true;
    playWarp(['NEXT · 下一站', '<b>群星</b>', '三颗星球，一个人类'], () => {
      const t = document.createElement('div'); t.className = 'film-title'; t.innerHTML = '<h1>星港</h1><p>新 家 园</p><small>STARPORT</small>';
      document.body.appendChild(t); setTimeout(end, 4200);
    }, 6.5);
  }
}

const _v = new THREE.Vector3(), _q = new THREE.Quaternion();
export function updateFilm(dt) {
  if (!F) return;
  F.t += dt;
  let idx = 0; for (let i = 0; i < SHOTS.length; i++) if (F.t >= SHOTS[i].at) idx = i;
  if (idx !== F.shot) { F.shot = idx; enter(SHOTS[idx].name); }
  const sh = SHOTS[idx], lt = F.t - sh.at, S = F.space;
  if (G.warping) return;
  if (sh.name === 'space' || sh.name === 'entry') {
    const cam = F.cam; cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix();
    S.ring.rotation.z += dt * 0.15;
    S.nav.forEach((n, i) => { n.visible = Math.sin(F.t * 3 + i * 1.5) > 0.4; });
    S.engines.forEach(e => { e.scale.setScalar(6 + Math.random() * 1.5); });
    S.mars.rotation.y += dt * 0.004;
    if (sh.name === 'space') {
      // 方舟从画面右侧滑过，背后是缓缓转动的火星
      const k = lt / 15;
      S.ark.position.set(900 - k * 260, 120 + k * 20, 1050 - k * 60);
      S.ark.rotation.set(0.05, -Math.PI / 2 - 0.3 + k * 0.2, 0.08);
      cam.position.set(S.ark.position.x + 120 - k * 50, S.ark.position.y + 18 + k * 8, S.ark.position.z + 150 - k * 30);
      F.look.set(S.ark.position.x * 0.4, S.ark.position.y * 0.3, S.ark.position.z * 0.4);
      cam.lookAt(F.look.lerp(S.ark.position, 0.35 + k * 0.2));
    } else {
      // 再入：贴着火星表面俯冲，等离子鞘包裹着舱体，镜头剧烈抖动
      const k = lt / 10;
      const n = new THREE.Vector3(0.35, 0.55, 0.76).normalize();
      const alt = S.R + 40 - k * 32;
      const p = n.clone().multiplyScalar(alt);
      const tang = new THREE.Vector3().crossVectors(n, new THREE.Vector3(0, 1, 0)).normalize();
      const pos = p.clone().addScaledVector(tang, k * 40);
      S.cap.position.copy(pos);
      const dir = tang.clone().multiplyScalar(-1).addScaledVector(n, -0.35).normalize(); // 运动方向
      _q.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir); S.cap.quaternion.copy(_q);
      S.plasma.material.uniforms.uT.value = F.t;
      const side = tang.clone().cross(n).normalize();
      cam.position.copy(pos).addScaledVector(dir, 2).addScaledVector(n, 2.5).addScaledVector(side, 16);
      cam.position.x += (Math.random() - 0.5) * 0.5; cam.position.y += (Math.random() - 0.5) * 0.5;
      cam.up.copy(n); cam.lookAt(pos.clone().addScaledVector(dir, -4));
      // 尾迹火星
      for (const tp of S.trail) {
        if (tp.life <= 0 && Math.random() < 0.35) { tp.life = 0.6 + Math.random() * 0.6; tp.s.position.copy(pos).add(new THREE.Vector3().randomDirection().multiplyScalar(2)); tp.v.copy(dir).multiplyScalar(-30 - Math.random() * 30).add(new THREE.Vector3().randomDirection().multiplyScalar(4)); tp.s.visible = true; }
        if (tp.life > 0) { tp.life -= dt; tp.s.position.addScaledVector(tp.v, dt); tp.s.material.opacity = Math.min(1, tp.life * 2); tp.s.scale.setScalar(0.8 + tp.life * 2); if (tp.life <= 0) tp.s.visible = false; }
      }
    }
    X.renderer.render(S.s, cam);
    return;
  }
  // —— 地面镜头：用游戏场景 ——
  const camera = X.camera, L = X.lander.group, LP = X.LANDER;
  if (sh.name === 'land') {
    const k = Math.min(1, lt / 8), e = 1 - Math.pow(1 - k, 2.4);
    L.position.y = F.gy + 160 * (1 - e);
    const firing = k < 1;
    F.flame.visible = firing; F.flame.scale.set(1, 0.6 + (1 - e) + Math.random() * 0.15, 1);
    F.lamp.intensity = firing ? 400 * (0.6 + Math.random() * 0.4) : 0;
    const alt = L.position.y - F.gy;
    if (firing) { for (let i = 0; i < 3; i++) fx.flame(new THREE.Vector3(LP.x, L.position.y - 1, LP.z), 1.4); if (alt < 25 && Math.random() < 0.6) billow(new THREE.Vector3(LP.x, F.gy + 0.3, LP.z), 0.6); }
    else if (!F.landed) { F.landed = true; shockwave(new THREE.Vector3(LP.x, F.gy + 1, LP.z), 0xffd0a0, 10, 1.2); audio.play('land'); audio.engine(0); }
    camera.position.set(LP.x + 34 - k * 4, X.getHeight(LP.x + 34, LP.z + 38) + 2.2, LP.z + 38 - k * 3);
    camera.lookAt(LP.x, L.position.y + 3, LP.z);
    if (firing && alt < 60) { camera.position.x += (Math.random() - 0.5) * 0.15 * (1 - alt / 60); camera.position.y += (Math.random() - 0.5) * 0.12 * (1 - alt / 60); }
    camera.fov = 50; camera.updateProjectionMatrix();
  } else if (sh.name === 'grow') {
    // 延时摄影：太阳划过天空，建筑一座接一座升起，入夜后灯火亮起
    const k = lt / 20;
    G.time.t = 0.3 + k * 0.62;
    const want = Math.min(CITY.length, Math.floor(k * CITY.length * 1.15));
    while (F.built < want) { const [t, x, z] = CITY[F.built++]; try { X.createBuilding(t, x, z, Math.random() * 0.4 - 0.2, undefined, true); audio.play('place'); } catch (err) { /* 忽略 */ } }
    if (Math.abs(k - 0.42) < 0.01 && !F.c2) { F.c2 = true; caption(['第 40 日', '第一批移民到了'], true); }
    if (k > 0.75 && !F.c3) { F.c3 = true; caption(['第 412 日', '人类的灯火，第一次照亮另一颗星球']); }
    const a = -0.6 + k * 1.3, r = 95 - k * 25;
    camera.position.set(Math.cos(a) * r, X.getHeight(Math.cos(a) * r, Math.sin(a) * r) + 22 - k * 8, Math.sin(a) * r);
    camera.lookAt(4, 6 + k * 4, 18);
    camera.fov = 45; camera.updateProjectionMatrix();
  } else if (sh.name === 'launch') {
    const b = F.pad, ship = b.anim.ship, flame = b.anim.flame;
    G.time.t = 0.275 + lt * 0.002; // 黎明时分启航
    if (lt > 2.5) {
      if (!F.ign) { F.ign = true; flame.visible = true; shockwave(new THREE.Vector3(b.x, b.y + 1.5, b.z), 0xffd0a0, 16, 1.4); audio.play('boom'); audio.engine(1); }
      const burn = Math.min(1, (lt - 2.5) / 1); flame.scale.set(0.6 + burn * 0.5, 0.5 + burn * 1.1 + Math.random() * 0.15, 0.6 + burn * 0.5);
      if (lt > 4) { F.v = (F.v || 0) + dt * (1.5 + (lt - 4) * 4); ship.position.y += F.v * dt; }
      ship.getWorldPosition(_v);
      for (let i = 0; i < 3; i++) fx.flame(_v);
      if (_v.y - b.y < 60) for (let i = 0; i < 3; i++) billow(new THREE.Vector3(b.x, b.y + 0.5, b.z), 1.5);
    } else ship.getWorldPosition(_v);
    camera.position.copy(F.lcam);
    const tgt = _v.clone(); tgt.y += 14; F.look.lerp(tgt, Math.min(1, dt * 3)); if (lt < 0.1) F.look.copy(tgt);
    camera.lookAt(F.look);
    const dist = camera.position.distanceTo(tgt);
    camera.fov = THREE.MathUtils.clamp(THREE.MathUtils.radToDeg(2 * Math.atan(55 / dist)), 10, 50); camera.updateProjectionMatrix();
    if (F.ign) { camera.position.x += (Math.random() - 0.5) * 0.25; camera.position.y += (Math.random() - 0.5) * 0.2; }
  }
  X.updateSky(0, camera.position);
  X.updateBuildings(dt);
  X.updateFx(dt, camera.position);
  X.updateCineFx(dt);
  X.renderScene();
}
