import * as THREE from 'three';
import { G } from './state.js';
import { smoothstep, lerp, clamp } from './noise.js';

const DAY_LEN = 540; // 一个火星日（游戏秒）
let sky, stars, sun, hemi, amb, phobos, deimos, skyMat;
const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const PAL = {
  dayTop: C(0.62, 0.42, 0.29), dayHor: C(0.90, 0.68, 0.50),
  setTop: C(0.17, 0.13, 0.15), setHor: C(0.58, 0.40, 0.33),
  nightTop: C(0.006, 0.008, 0.022), nightHor: C(0.035, 0.035, 0.055),
  earthTop: C(0.22, 0.44, 0.82), earthHor: C(0.68, 0.80, 0.92),
  stormHor: C(0.62, 0.42, 0.28),
  halo: C(0.35, 0.58, 0.95),
};
const MOON = C(0.36, 0.42, 0.62);
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

  // 星空
  const sg = new THREE.BufferGeometry(), sp = [], sc = [];
  for (let i = 0; i < 2600; i++) {
    const u = Math.random() * 2 - 1, th = Math.random() * Math.PI * 2, r = Math.sqrt(1 - u * u);
    if (u < -0.05) continue;
    sp.push(r * Math.cos(th) * 3500, u * 3500, r * Math.sin(th) * 3500);
    const b = 0.5 + Math.random() * 0.5, tint = Math.random();
    sc.push(b * (tint > 0.8 ? 1 : 0.85), b * 0.9, b * (tint < 0.2 ? 1 : 0.95));
  }
  // 地球：夜空里一颗明亮的蓝星
  sp.push(-1800, 1500, -2400); sc.push(0.5, 0.75, 1.4);
  sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  sg.setAttribute('color', new THREE.Float32BufferAttribute(sc, 3));
  stars = new THREE.Points(sg, new THREE.PointsMaterial({ size: 1.6, sizeAttenuation: false, vertexColors: true, transparent: true, depthWrite: false, fog: false }));
  stars.frustumCulled = false; stars.renderOrder = -9;
  scene.add(stars);

  const moonMat = new THREE.MeshStandardMaterial({ color: 0x8a7d70, roughness: 1, fog: false, flatShading: true });
  phobos = new THREE.Mesh(new THREE.IcosahedronGeometry(60, 1), moonMat); phobos.scale.set(1.3, 0.9, 1);
  deimos = new THREE.Mesh(new THREE.IcosahedronGeometry(24, 1), moonMat);
  scene.add(phobos, deimos);

  sun = new THREE.DirectionalLight(0xfff0dd, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc2 = sun.shadow.camera; sc2.left = -70; sc2.right = 70; sc2.top = 70; sc2.bottom = -70; sc2.near = 1; sc2.far = 400;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.6;
  scene.add(sun, sun.target);
  hemi = new THREE.HemisphereLight(0xffd2b0, 0x5a2c1a, 1);
  amb = new THREE.AmbientLight(0x404a70, 0.3);
  scene.add(hemi, amb);
  scene.fog = new THREE.Fog(0xd8a070, 120, 900);
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
  stars.material.opacity = T.night * (1 - storm);

  // 卫星
  const pa = G.time.t * Math.PI * 6, da = -G.time.t * Math.PI * 2 + 2;
  phobos.position.set(camPos.x + Math.cos(pa) * 2600, camPos.y + Math.sin(pa) * 1700 + 300, camPos.z - 1300);
  phobos.lookAt(camPos);
  deimos.position.set(camPos.x + Math.cos(da) * 2800, camPos.y + Math.sin(da) * 2200, camPos.z + 1600);

  // 灯光
  const sunK = smoothstep(-0.04, 0.25, el);
  sun.intensity = 3.0 * sunK * (1 - storm * 0.6);
  sun.color.setRGB(1, lerp(0.7, 0.93, sunK), lerp(0.55, 0.85, sunK));
  sun.position.copy(camPos).addScaledVector(sunDir, 200);
  sun.target.position.copy(camPos);
  // 阴影贴图按 texel 对齐，避免移动时闪烁
  hemi.intensity = lerp(0.55, 1.1, dayK) * (1 - storm * 0.3);
  hemi.color.copy(hor).lerp(top, 0.3).lerp(MOON, T.night * 0.85);
  hemi.groundColor.setRGB(lerp(0.05, 0.38, dayK), lerp(0.04, 0.18, dayK), lerp(0.05, 0.10, dayK));
  amb.intensity = lerp(0.8, 0.2, dayK);

  // 雾
  G.scene.fog.color.copy(hor);
  G.scene.fog.near = lerp(120, 12, storm);
  G.scene.fog.far = lerp(lerp(900, 380, T.night), 90, storm);
  G.renderer.toneMappingExposure = lerp(1.0, 1.4, T.night);
}

export function clockText() {
  const h = Math.floor(G.time.t * 24.66), m = Math.floor((G.time.t * 24.66 - h) * 60);
  return `第 ${G.time.day} 火星日 · ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
