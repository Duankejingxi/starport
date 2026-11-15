import * as THREE from 'three';
import { G } from './state.js';
import { P } from './planets.js';
import { stormWarn } from './story.js';
import { audio } from './audio.js';

// —— 沙暴前锋：预警期间，一堵数百米高、翻滚着的沙墙从地平线压过来，到达时与沙暴的浓雾衔接 ——
let wall = null, dir = 0, active = false, rumbleT = 0;
function build(scene) {
  const g = new THREE.CylinderGeometry(1, 1, 1, 96, 1, true, -1.25, 2.5); g.translate(0, 0.5, 0);
  const sc = P.sky.storm;
  const mat = new THREE.ShaderMaterial({
    uniforms: { uT: { value: 0 }, uA: { value: 0 }, uC: { value: new THREE.Color().setRGB(sc[0], sc[1], sc[2], THREE.SRGBColorSpace) }, uSun: { value: 1 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform float uT, uA, uSun; uniform vec3 uC; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a * n(p); p *= 2.1; a *= 0.5; } return v; }
      void main(){
        vec2 p = vec2(vUv.x * 34.0, vUv.y * 7.0);
        float b = fbm(p + vec2(uT * 0.05, -uT * 0.08));
        // 顶部翻滚的轮廓
        float top = 0.55 + fbm(vec2(vUv.x * 9.0 + uT * 0.03, uT * 0.05)) * 0.4;
        float a = 1.0 - smoothstep(top - 0.12, top + 0.02, vUv.y - (b - 0.5) * 0.12);
        a *= smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        // 底部更浓更暗，顶部被阳光照亮
        float rim = smoothstep(top - 0.1, top, vUv.y + (b - 0.5) * 0.1);
        vec3 c = uC * mix(0.28, 0.72, smoothstep(0.0, top, vUv.y)) * (0.6 + b * 0.8) + uC * rim * 0.5;
        c *= mix(0.35, 1.0, uSun);
        gl_FragColor = vec4(c, a * uA);
      }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false,
  });
  wall = new THREE.Mesh(g, mat); wall.frustumCulled = false; wall.userData.noAO = true; wall.renderOrder = 4;
  wall.visible = false; scene.add(wall);
}
export function updateHaboob(dt) {
  if (P.id === 'europa') return;
  if (!wall) build(G.scene);
  const k = stormWarn();
  if (k > 0 && k < 1) {
    if (!active) { active = true; dir = Math.random() * Math.PI * 2; rumbleT = 0; }
    const d = 950 * Math.pow(1 - k, 1.15) + 25;
    const P_ = G.player.pos;
    wall.visible = true;
    wall.position.set(P_.x, P_.y - 40, P_.z);
    wall.scale.set(d, 320 + (1 - k) * 80, d);
    wall.rotation.y = dir;
    const U = wall.material.uniforms; U.uT.value += dt; U.uA.value = Math.min(1, k * 5) * (d < 45 ? Math.max(0, (d - 25) / 20) : 1);
    U.uSun.value = 1 - G.time.night * 0.8;
    rumbleT -= dt; if (rumbleT <= 0) { rumbleT = 3; audio.play('rumble'); }
  } else { wall.visible = false; active = false; }
}
