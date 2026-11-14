import * as THREE from 'three';
import { G } from './state.js';
import { glowTexture as glowTex } from './models.js';
import { smoothstep, lerp, clamp } from './noise.js';
import { P } from './planets.js';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

const DAY_LEN = 540; // 一个火星日（游戏秒）
let sky, stars, sun, hemi, amb, phobos, deimos, skyMat;
const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const PS = P.sky, CC = a => C(a[0], a[1], a[2]);
const PAL = {
  dayTop: CC(PS.dayTop), dayHor: CC(PS.dayHor),
  setTop: CC(PS.setTop), setHor: CC(PS.setHor),
  nightTop: CC(PS.nightTop), nightHor: CC(PS.nightHor),
  earthTop: C(0.22, 0.44, 0.82), earthHor: C(0.68, 0.80, 0.92),
  stormHor: CC(PS.storm),
  halo: CC(PS.halo),
};
let extra = {};
// —— 镜头光晕：光斑 + 横向变形光条（星际穿越式） ——
let flareAnchor, flareEls = [];
function flareTex(kind) {
  const S = 256, cv = document.createElement('canvas'); cv.width = cv.height = S; const g = cv.getContext('2d');
  if (kind === 'streak') {
    const gr = g.createLinearGradient(0, 0, S, 0);
    gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, S / 2 - 2, S, 4);
    const v = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2); v.addColorStop(0, 'rgba(255,255,255,.35)'); v.addColorStop(1, 'rgba(255,255,255,0)');
    g.globalCompositeOperation = 'destination-in'; g.fillStyle = v; g.fillRect(0, 0, S, S);
  } else if (kind === 'ring') {
    const gr = g.createRadialGradient(S / 2, S / 2, S * 0.36, S / 2, S / 2, S / 2);
    gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.7, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
  } else if (kind === 'hex') {
    g.fillStyle = 'rgba(255,255,255,.22)'; g.beginPath();
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; g[i ? 'lineTo' : 'moveTo'](S / 2 + Math.cos(a) * S * 0.45, S / 2 + Math.sin(a) * S * 0.45); } g.fill();
  } else {
    const gr = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.15, 'rgba(255,240,220,.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
  }
  return new THREE.CanvasTexture(cv);
}
function buildFlare(scene) {
  flareAnchor = new THREE.Object3D(); scene.add(flareAnchor);
  const lf = new Lensflare();
  const add = (kind, size, dist, col) => { const e = new LensflareElement(flareTex(kind), size, dist, new THREE.Color(col)); e.base = new THREE.Color(col); lf.addElement(e); flareEls.push(e); };
  add('glow', 380, 0, 0xffe8cc); add('streak', 1600, 0, 0x9ad8ff); add('streak', 900, 0, 0xffd0a0);
  // 鬼影克制：只留几枚很淡的暖色光斑和一圈若有若无的光环，像真实镜头而不是游戏贴图
  add('glow', 46, 0.4, 0x3a2c22); add('ring', 130, 0.62, 0x241c1a); add('glow', 80, 0.86, 0x2a2018); add('ring', 240, 1.12, 0x161a22);
  flareAnchor.add(lf);
}
let envScene, envSky, pmrem, envRT = null, envT = 0;
// 极光：按星球设定颜色与强度
const AURORA = { mars: [0.35, [0.2, 0.9, 0.7], [0.3, 0.5, 1.0]], europa: [0.6, [0.4, 0.6, 1.0], [0.8, 0.4, 1.0]], kepler: [1.0, [0.3, 1.0, 0.5], [0.9, 0.3, 0.9]] }[P.id];
let aurora;
function buildAurora(scene) {
  const g = new THREE.CylinderGeometry(1700, 1700, 900, 160, 1, true, -1.2, 2.6);
  aurora = new THREE.Mesh(g, new THREE.ShaderMaterial({
    uniforms: { uT: { value: 0 }, uI: { value: 0 }, uC1: { value: new THREE.Color(...AURORA[1]) }, uC2: { value: new THREE.Color(...AURORA[2]) } },
    vertexShader: `uniform float uT; varying vec2 vUv;
      void main(){ vUv = uv; vec3 p = position; float w = sin(uv.x * 18.0 + uT * 0.25) * 0.06 + sin(uv.x * 41.0 - uT * 0.4) * 0.025;
        p.xz *= 1.0 + w; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
    fragmentShader: `uniform float uT, uI; uniform vec3 uC1, uC2; varying vec2 vUv;
      void main(){
        float x = vUv.x * 60.0 + sin(vUv.x * 9.0 + uT * 0.2) * 4.0;
        float rays = (0.5 + 0.5 * sin(x * 2.1 + uT * 0.7)) * (0.55 + 0.45 * sin(x * 5.3 - uT * 1.1)) * (0.6 + 0.4 * sin(x * 0.7 + uT * 0.3));
        float band = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.35, vUv.y);
        float edge = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float glowB = exp(-pow((vUv.y - 0.12) * 9.0, 2.0)) * 0.6;
        vec3 col = mix(uC1, uC2, smoothstep(0.15, 0.85, vUv.y));
        float a = (rays * band + glowB * (0.5 + 0.5 * sin(x * 0.9 + uT))) * edge * uI;
        gl_FragColor = vec4(col * a, 1.0);
      }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false,
  }));
  aurora.position.y = 700; aurora.rotation.y = 2.2; aurora.frustumCulled = false; aurora.renderOrder = -8;
  scene.add(aurora);
}
const MOON = C(0.36, 0.42, 0.62), JUP = C(0.75, 0.65, 0.55);
const tmpA = new THREE.Color(), tmpB = new THREE.Color();
export const sunDir = new THREE.Vector3();

export function buildSky(scene) {
  skyMat = new THREE.ShaderMaterial({
    uniforms: {
      uTop: { value: new THREE.Color() }, uHor: { value: new THREE.Color() },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uSunCol: { value: new THREE.Color(1, 0.95, 0.85) },
      uHalo: { value: new THREE.Color() }, uSunVis: { value: 1 },
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,
    fragmentShader: `
      uniform vec3 uTop, uHor, uSunDir, uSunCol, uHalo; uniform float uSunVis; varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        float h = clamp(d.y, 0.0, 1.0);
        vec3 col = mix(uHor, uTop, pow(h, 0.5));
        if (d.y < 0.0) col = uHor * (1.0 + d.y * 0.6);
        float sd = max(dot(d, uSunDir), 0.0);
        col += uHalo * pow(sd, 6.0) * 0.55;
        col += uSunCol * (pow(sd, 1400.0) * 6.0 + pow(sd, 90.0) * 0.35) * uSunVis;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    side: THREE.BackSide, depthWrite: false,
  });
  sky = new THREE.Mesh(new THREE.SphereGeometry(4000, 32, 16), skyMat);
  sky.frustumCulled = false; sky.renderOrder = -10;
  scene.add(sky);
  buildAurora(scene);

  // 星空
  const sg = new THREE.BufferGeometry(), sp = [], sc = [];
  for (let i = 0; i < 2600; i++) {
    const u = Math.random() * 2 - 1, th = Math.random() * Math.PI * 2, r = Math.sqrt(1 - u * u);
    if (u < -0.05) continue;
    sp.push(r * Math.cos(th) * 3500, u * 3500, r * Math.sin(th) * 3500);
    const b = 0.35 + Math.random() * 0.45, tint = Math.random();
    sc.push(b * (tint > 0.8 ? 1 : 0.85), b * 0.9, b * (tint < 0.2 ? 1 : 0.95));
  }
  // 地球：夜空里一颗明亮的蓝星
  sp.push(-1800, 1500, -2400); sc.push(0.5, 0.75, 1.4);
  sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  sg.setAttribute('color', new THREE.Float32BufferAttribute(sc, 3));
  stars = new THREE.Points(sg, new THREE.PointsMaterial({ size: 3, map: glowTex(), sizeAttenuation: false, vertexColors: true, transparent: true, depthWrite: false, fog: false }));
  stars.frustumCulled = false; stars.renderOrder = -9;
  scene.add(stars);

  const moonMat = new THREE.MeshStandardMaterial({ color: 0x8a7d70, roughness: 1, fog: false, flatShading: true });
  phobos = new THREE.Mesh(new THREE.IcosahedronGeometry(60, 1), moonMat); phobos.scale.set(1.3, 0.9, 1);
  deimos = new THREE.Mesh(new THREE.IcosahedronGeometry(24, 1), moonMat);
  if (P.extras === 'moons') scene.add(phobos, deimos);
  if (P.extras === 'jupiter') {
    // 木星：带条纹的巨大行星
    const cv = document.createElement('canvas'); cv.width = 512; cv.height = 256;
    const g = cv.getContext('2d');
    const bands = ['#e8d8c0', '#c89a70', '#f0e6d4', '#b07850', '#e0c8a8', '#9a6a48', '#efe2cc', '#c8a07a', '#e6d6bc'];
    for (let y = 0; y < 256; y++) { g.fillStyle = bands[Math.floor((y / 256) * bands.length * 2 + Math.sin(y * 0.3) * 0.6) % bands.length]; g.fillRect(0, y, 512, 1); }
    g.globalAlpha = 0.25; for (let i = 0; i < 400; i++) { g.fillStyle = bands[i % bands.length]; g.fillRect(Math.random() * 512, Math.random() * 256, 30 + Math.random() * 80, 2); }
    g.globalAlpha = 1; g.fillStyle = '#b8583a'; g.beginPath(); g.ellipse(330, 165, 34, 16, 0, 0, Math.PI * 2); g.fill();
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
    const jup = new THREE.Mesh(new THREE.SphereGeometry(900, 48, 32), new THREE.MeshBasicMaterial({ map: tex, fog: false }));
    jup.rotation.z = 0.06;
    const shade = new THREE.Mesh(new THREE.SphereGeometry(905, 48, 32, Math.PI * 0.55, Math.PI), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.55, fog: false }));
    jup.add(shade);
    const io = new THREE.Mesh(new THREE.IcosahedronGeometry(30, 2), new THREE.MeshBasicMaterial({ color: 0xe8d070, fog: false }));
    scene.add(jup, io); extra = { jup, io };
  }
  if (P.extras === 'twinsuns') {
    const s2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: 0xff9a60, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    s2.scale.set(500, 500, 1);
    const ring = new THREE.Mesh(new THREE.RingGeometry(700, 1100, 64), new THREE.MeshBasicMaterial({ color: 0xd8c8ff, transparent: true, opacity: 0.35, side: THREE.DoubleSide, fog: false, depthWrite: false }));
    const gas = new THREE.Mesh(new THREE.SphereGeometry(420, 32, 24), new THREE.MeshBasicMaterial({ color: 0x8a7ad0, fog: false }));
    gas.add(ring); ring.rotation.x = 1.2;
    scene.add(s2, gas); extra = { s2, gas };
    // 卡冈图雅：黑洞与吸积盘（含经过引力透镜弯折、从上下方绕过来的那一圈）
    const dc = document.createElement('canvas'); dc.width = dc.height = 512; const dg = dc.getContext('2d');
    const gr = dg.createRadialGradient(256, 256, 120, 256, 256, 256);
    gr.addColorStop(0, 'rgba(255,250,230,0)'); gr.addColorStop(0.08, 'rgba(255,245,220,1)'); gr.addColorStop(0.3, 'rgba(255,190,110,.85)'); gr.addColorStop(0.7, 'rgba(200,90,40,.35)'); gr.addColorStop(1, 'rgba(120,40,20,0)');
    dg.fillStyle = gr; dg.fillRect(0, 0, 512, 512);
    dg.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < 40; i++) { dg.strokeStyle = `rgba(0,0,0,${0.1 + Math.random() * 0.2})`; dg.lineWidth = 1 + Math.random() * 3; dg.beginPath(); dg.arc(256, 256, 130 + Math.random() * 120, 0, Math.PI * 2); dg.stroke(); }
    const dt2 = new THREE.CanvasTexture(dc);
    const bh = new THREE.Group();
    const dmat = (op) => { const m = new THREE.MeshBasicMaterial({ map: dt2, transparent: true, opacity: op, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }); return m; };
    const disk = new THREE.Mesh(new THREE.RingGeometry(150, 560, 96, 1), dmat(0.9)); disk.userData.op = 0.9;
    disk.rotation.x = -1.35; bh.add(disk);
    const halo = new THREE.Mesh(new THREE.RingGeometry(150, 330, 96, 1), dmat(0.75)); halo.userData.op = 0.75; bh.add(halo);
    const core = new THREE.Mesh(new THREE.CircleGeometry(150, 64), new THREE.MeshBasicMaterial({ color: 0x000000, fog: false, transparent: true, depthWrite: false })); core.userData.op = 1; core.position.z = 1; bh.add(core);
    const rim = new THREE.Mesh(new THREE.RingGeometry(150, 158, 96), new THREE.MeshBasicMaterial({ color: 0xffe6c0, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, fog: false, depthWrite: false })); rim.userData.op = 0.9; rim.position.z = 2; bh.add(rim);
    bh.renderOrder = -7; scene.add(bh);
    extra.bh = bh; extra.disk = disk;
  }

  sun = new THREE.DirectionalLight(0xfff0dd, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(G.hiShadows ? 4096 : 2048, G.hiShadows ? 4096 : 2048);
  const sc2 = sun.shadow.camera; sc2.left = -70; sc2.right = 70; sc2.top = 70; sc2.bottom = -70; sc2.near = 1; sc2.far = 400;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.6;
  scene.add(sun, sun.target);
  buildFlare(scene);
  hemi = new THREE.HemisphereLight(0xffd2b0, 0x5a2c1a, 1);
  amb = new THREE.AmbientLight(0x404a70, 0.3);
  scene.add(hemi, amb);
  scene.fog = new THREE.FogExp2(0xd8a070, 0.0016);
  buildClouds(scene);
  // 环境反射：用只含天空的小场景生成 PMREM
  envScene = new THREE.Scene();
  envSky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), skyMat);
  envScene.add(envSky);
  pmrem = new THREE.PMREMGenerator(G.renderer);
}

// —— 高空云层：把视线投射到一个高空平面上采样分形噪声，随风缓慢移动 ——
let clouds = null;
function buildClouds(scene) {
  if (P.id === 'europa') return;
  const mat = new THREE.ShaderMaterial({
    uniforms: { uT: { value: 0 }, uHor: { value: new THREE.Color() }, uSunC: { value: new THREE.Color() }, uSunD: { value: new THREE.Vector3() }, uNight: { value: 0 }, uStorm: { value: 0 }, uCov: { value: P.id === 'kepler' ? 0.58 : 0.5 }, uTint: { value: new THREE.Color(P.id === 'kepler' ? 0xffffff : 0xf2d6c0) } },
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }',
    fragmentShader: `uniform float uT, uNight, uStorm, uCov; uniform vec3 uHor, uSunC, uSunD, uTint; varying vec3 vD;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a * n(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vD); if (d.y < 0.0) discard;
        vec2 uv = d.xz / (d.y + 0.12) * 1.6;
        vec2 w = vec2(uT * 0.012, uT * 0.004);
        // 拉长的卷云：x 方向拉伸
        float c = fbm(uv * vec2(0.7, 1.6) + w) * 0.65 + fbm(uv * 3.1 - w * 1.7) * 0.35;
        float cov = uCov + uStorm * 0.35;
        float a = smoothstep(1.0 - cov, 1.0 - cov + 0.26, c);
        a *= smoothstep(0.0, 0.22, d.y) * (1.0 - uStorm * 0.4);
        float s = max(dot(d, normalize(uSunD)), 0.0);
        vec3 lit = mix(uHor * 1.05, uSunC * 1.25, 0.35 + pow(s, 6.0) * 0.6) * uTint;
        lit += uSunC * pow(s, 24.0) * (1.0 - a) * 1.5; // 云边银光
        vec3 col = mix(lit, vec3(0.05, 0.06, 0.09), uNight * 0.85);
        gl_FragColor = vec4(col, a * mix(0.9, 0.4, uNight));
      }`,
    transparent: true, depthWrite: false, fog: false, side: THREE.BackSide,
  });
  clouds = new THREE.Mesh(new THREE.SphereGeometry(3000, 48, 24), mat);
  clouds.frustumCulled = false; clouds.renderOrder = -2; clouds.userData.noAO = true;
  scene.add(clouds);
}

export function updateSky(dt, camPos) {
  const T = G.time;
  const prevT = T.t;
  T.t += (dt / DAY_LEN) * (T.elevation < 0 ? 1.5 : 1);
  if (T.t >= 1) { T.t -= 1; }
  if (prevT < 0.25 && T.t >= 0.25) { T.day++; T.dawn = true; }

  const th = (T.t - 0.25) * Math.PI * 2;
  sunDir.set(Math.cos(th), Math.sin(th), 0.35).normalize();
  const el = sunDir.y;
  T.elevation = el;
  T.night = smoothstep(0.05, -0.18, el);
  const tf = smoothstep(0, 1, G.terraform);
  const storm = G.storm;

  // 天空颜色
  const dayK = smoothstep(-0.05, 0.35, el), setK = 1 - Math.abs(clamp((el - 0.05) / 0.3, -1, 1));
  tmpA.copy(PAL.dayTop).lerp(PAL.earthTop, tf); tmpB.copy(PAL.dayHor).lerp(PAL.earthHor, tf);
  const top = skyMat.uniforms.uTop.value, hor = skyMat.uniforms.uHor.value;
  top.copy(PAL.nightTop).lerp(PAL.setTop, smoothstep(-0.25, 0.0, el)).lerp(tmpA, dayK);
  hor.copy(PAL.nightHor).lerp(PAL.setHor, smoothstep(-0.25, 0.0, el)).lerp(tmpB, dayK);
  if (storm > 0) { tmpA.copy(PAL.stormHor).multiplyScalar(0.25 + 0.75 * (1 - T.night)); top.lerp(tmpA, storm * 0.85); hor.lerp(tmpA, storm); }
  skyMat.uniforms.uHalo.value.copy(PAL.halo).multiplyScalar(clamp(setK, 0, 1) * (1 - tf * 0.5) * (1 - storm));
  skyMat.uniforms.uSunDir.value.copy(sunDir);
  skyMat.uniforms.uSunVis.value = smoothstep(-0.08, 0.02, el) * (1 - storm * 0.85);
  sky.position.copy(camPos); stars.position.copy(camPos);
  aurora.position.set(camPos.x, camPos.y + 700, camPos.z);
  aurora.material.uniforms.uT.value = performance.now() * 0.001;
  aurora.material.uniforms.uI.value = AURORA[0] * T.night * (1 - storm) * (0.75 + 0.25 * Math.sin(performance.now() * 0.00007 + T.day));
  stars.material.opacity = Math.max(T.night, P.id === 'europa' ? 0.85 : 0) * (1 - storm);

  // 卫星
  const pa = G.time.t * Math.PI * 6, da = -G.time.t * Math.PI * 2 + 2;
  phobos.position.set(camPos.x + Math.cos(pa) * 2600, camPos.y + Math.sin(pa) * 1700 + 300, camPos.z - 1300);
  phobos.lookAt(camPos);
  deimos.position.set(camPos.x + Math.cos(da) * 2800, camPos.y + Math.sin(da) * 2200, camPos.z + 1600);
  if (extra.jup) {
    extra.jup.position.set(camPos.x - 1800, camPos.y + 650, camPos.z - 2600);
    extra.jup.rotation.y += 0.00004;
    const ia = G.time.t * Math.PI * 8;
    extra.io.position.set(camPos.x - 1800 + Math.cos(ia) * 1400, camPos.y + 650 + Math.sin(ia) * 300, camPos.z - 2600 + Math.sin(ia) * 1400);
  }
  if (flareAnchor) {
    flareAnchor.position.copy(camPos).addScaledVector(sunDir, 3000);
    const v = smoothstep(-0.03, 0.12, el) * (1 - storm) * (P.id === 'europa' ? 0.6 : 1);
    for (const e of flareEls) e.color.copy(e.base).multiplyScalar(v);
  }
  if (extra.bh) {
    extra.bh.position.set(camPos.x - 2200, camPos.y + 900, camPos.z + 1900);
    extra.bh.lookAt(camPos);
    extra.disk.rotation.z += dt * 0.05;
    extra.bh.children.forEach(m => { if (m.material && m.material.opacity !== undefined && m.userData.op) m.material.opacity = m.userData.op * (0.45 + T.night * 0.55); });
  }
  if (extra.s2) {
    extra.s2.position.copy(camPos).addScaledVector(new THREE.Vector3(sunDir.x * 0.8 - 0.3, sunDir.y * 0.9 - 0.05, sunDir.z + 0.4).normalize(), 3000);
    extra.s2.material.opacity = smoothstep(-0.2, 0.05, el) * 0.9;
    extra.gas.position.set(camPos.x + 1600, camPos.y + 1100, camPos.z + 2400);
  }

  // 灯光
  const sunK = smoothstep(-0.04, 0.25, el);
  sun.intensity = 3.0 * sunK * (1 - storm * 0.6);
  sun.color.setRGB(1, lerp(0.7, 0.93, sunK), lerp(0.55, 0.85, sunK));
  sun.position.copy(camPos).addScaledVector(sunDir, 200);
  sun.target.position.copy(camPos);
  // 阴影贴图按 texel 对齐，避免移动时闪烁
  hemi.intensity = lerp(0.45, 0.8, dayK) * (1 - storm * 0.3);
  hemi.color.copy(hor).lerp(top, 0.3).lerp(MOON, T.night * 0.85);
  if (P.id === 'europa') hemi.color.lerp(JUP, 0.6);
  hemi.groundColor.setRGB(lerp(0.05, 0.38, dayK), lerp(0.04, 0.18, dayK), lerp(0.05, 0.10, dayK));
  amb.intensity = lerp(0.8, 0.2, dayK);

  // 雾
  G.scene.fog.color.copy(hor);
  if (clouds) {
    const U = clouds.material.uniforms; clouds.position.copy(camPos);
    U.uT.value += dt * 60; U.uHor.value.copy(hor); U.uSunC.value.copy(sun.color).multiplyScalar(Math.max(0.15, sunK)); U.uSunD.value.copy(sunDir);
    U.uNight.value = T.night; U.uStorm.value = storm;
  }
  G.scene.fog.density = lerp(lerp(0.0016, 0.0032, T.night), 0.03, storm) * (P.id === 'europa' ? 0.55 : 1);
  const nowMs = performance.now();
  if (nowMs - envT > 4000 || !envRT) {
    envT = nowMs;
    const old = envRT;
    envRT = pmrem.fromScene(envScene, 0.04, 1, 1000);
    G.scene.environment = envRT.texture;
    G.scene.environmentIntensity = lerp(0.85, 0.35, T.night);
    if (old) old.dispose();
  }
  G.renderer.toneMappingExposure = lerp(1.0, 1.4, T.night);
}

export function clockText() {
  const h = Math.floor(G.time.t * 24.66), m = Math.floor((G.time.t * 24.66 - h) * 60);
  return `${P.name} · 第 ${G.time.day} 日 · ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
