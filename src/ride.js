import * as THREE from 'three';
import { G } from './state.js';
import { audio } from './audio.js';
import { buildSpace } from './film.js';
import { glowTexture } from './models.js';
import { megaBase } from './mega.js';
import { getHeight } from './terrain.js';

// —— 乘坐轨道天梯：爬升舱沿缆绳加速上升 → 穿过云层 → 轨道站俯瞰整颗火星 → 返回地面 ——
let R = null, X = null, space = null;
const ease = k => k * k * (3 - 2 * k);

function cap(lines) {
  if (R.capEl) { const o = R.capEl; o.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 700, fill: 'forwards' }).onfinish = () => o.remove(); }
  const el = document.createElement('div'); el.className = 'film-cap small';
  el.innerHTML = lines.map((l, i) => `<p style="animation-delay:${0.2 + i * 0.9}s">${l}</p>`).join('');
  document.body.appendChild(el); R.capEl = el;
}
function overlay(color) { const d = document.createElement('div'); d.className = 'film-flash'; d.style.background = color; d.style.opacity = 0; document.body.appendChild(d); return d; }

function cityLights(sp) {
  // 火星表面殖民地的灯火：晨昏线附近的一小簇暖色光点
  const g = new THREE.Group(), n = new THREE.Vector3(0.55, 0.42, 0.32).normalize(); // 晨昏线夜侧一点
  const t1 = new THREE.Vector3().crossVectors(n, new THREE.Vector3(0, 1, 0)).normalize(), t2 = new THREE.Vector3().crossVectors(n, t1);
  for (let i = 0; i < 70; i++) {
    const r = Math.pow(Math.random(), 1.6) * 9, a = Math.random() * 6.28;
    const p = n.clone().multiplyScalar(sp.R * 1.002).addScaledVector(t1, Math.cos(a) * r).addScaledVector(t2, Math.sin(a) * r);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: Math.random() < 0.8 ? 0xffc27a : 0x9fe8ff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    s.position.copy(p); s.scale.setScalar(0.6 + Math.random() * 1.4); g.add(s);
  }
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xffa860, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
  halo.position.copy(n).multiplyScalar(sp.R * 1.003); halo.scale.setScalar(34); g.add(halo);
  sp.s.add(g);
  return n;
}

export function rideActive() { return !!R; }
export function startRide(api) {
  if (R) return;
  X = api;
  if (!space) { space = buildSpace(); space.cityN = cityLights(space); space.cap.visible = false;
    // 地球：远处一颗淡蓝的星
    const e = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0x7fb4ff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    e.position.set(-5200, 1600, -4600); e.scale.setScalar(70); space.s.add(e); }
  const b = megaBase();
  R = { t: 0, base: b, phase: 'climb', cam: new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.5, 20000), look: new THREE.Vector3() };
  G.cine = true; G.riding = true; document.body.classList.add('cinema', 'film');
  if (document.pointerLockElement) document.exitPointerLock();
  audio.play('place'); audio.engine(0.4);
  cap(['ORBITAL ELEVATOR · 轨道天梯', '上升中']);
  const skip = e => { if (e.type === 'mousedown' || e.code === 'Space' || e.code === 'Escape') { if (R && R.t < 24) R.t = 24; } };
  R.skip = skip; setTimeout(() => { addEventListener('keydown', skip); addEventListener('mousedown', skip); }, 500);
  const sk = document.createElement('div'); sk.className = 'film-skip'; sk.textContent = '点击或按空格返回地面'; document.body.appendChild(sk); R.skipEl = sk;
}

const _v = new THREE.Vector3();
export function updateRide(dt) {
  if (!R) return;
  R.t += dt;
  const t = R.t, b = R.base, camera = X.camera;
  if (t < 9.5) {
    // —— 爬升：镜头在舱内，面朝殖民地，地面越来越远 ——
    const k = Math.min(1, t / 9.5), alt = 14 + Math.pow(k, 2.2) * 420;
    camera.position.set(b.x + 48, b.y + alt + 6, b.z + 48);
    _v.set(0, 0, 0); // 殖民地中心
    R.look.set(b.x * 0.4, b.y + alt * 0.25, b.z * 0.4); // 望向远处的殖民地，越升越俯瞰
    camera.lookAt(R.look);
    camera.position.x += (Math.random() - 0.5) * 0.06; camera.position.y += (Math.random() - 0.5) * 0.06;
    camera.fov = 62; camera.updateProjectionMatrix();
    audio.engine(0.3 + k * 0.6);
    if (t > 6.5 && !R.haze) { R.haze = overlay('#fff4e8'); R.haze.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 3000, fill: 'forwards', easing: 'ease-in' }); cap(['穿过云层']); }
    X.updateSky(dt, camera.position); X.scene.fog.density *= 1 - k * 0.75; X.updateFx(dt, camera.position); X.renderScene();
    return;
  }
  // —— 轨道：切换到太空场景 ——
  const S = space, cam = R.cam;
  if (R.phase === 'climb') {
    R.phase = 'orbit'; audio.engine(0); audio.play('chapter');
    if (R.haze) { const h = R.haze; h.getAnimations().forEach(a => a.cancel()); h.style.opacity = 1; h.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 2200, fill: 'forwards', easing: 'ease-out' }).onfinish = () => h.remove(); }
    cap(['轨道站 · 海拔 400 公里', '从这里看，我们的城市只是一粒光']);
    S.ark.visible = true;
  }
  const k = Math.min(1, (t - 9.5) / 15), n = S.cityN;
  cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix();
  // 镜头在城市上空的轨道上缓缓滑行，火星占据画面下方
  const up = n.clone(), side = new THREE.Vector3().crossVectors(up, new THREE.Vector3(0, 1, 0)).normalize(), fwd = new THREE.Vector3().crossVectors(side, up);
  cam.position.copy(up).multiplyScalar(S.R * 1.2).addScaledVector(fwd, -300 + k * 60).addScaledVector(side, -40 + k * 50);
  cam.up.copy(up);
  cam.lookAt(_v.copy(up).multiplyScalar(S.R * 1.0).addScaledVector(fwd, 60).addScaledVector(side, k * 30));
  // 空间站环在前景
  S.ark.position.copy(cam.position).addScaledVector(fwd, 150).addScaledVector(side, -75 + k * 20).addScaledVector(up, 22);
  S.ark.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), side.clone().multiplyScalar(-1).addScaledVector(fwd, 0.4).normalize());
  S.ring.rotation.z += dt * 0.12;
  S.mars.rotation.y = 0; S.engines.forEach(e => e.visible = false);
  if (t > 17 && !R.c2) { R.c2 = true; cap(['那颗蓝色的星是地球', '两亿两千五百万公里之外']); }
  X.renderer.render(S.s, cam);
  if (t > 24.5 && !R.out) {
    R.out = true;
    const d = overlay('#000'); d.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 900, fill: 'forwards' }).onfinish = () => {
      // 回到地面：天梯基座旁
      const p = X.player; const px = b.x + 52, pz = b.z + 30;
      p.pos.set(px, getHeight(px, pz), pz); p.vel.set(0, 0, 0); p.yaw = Math.atan2(-(b.x - px), -(b.z - pz)); p.pitch = 0.25;
      end(); X.player.update(0);
      d.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1200, fill: 'forwards' }).onfinish = () => d.remove();
    };
  }
}
function end() {
  removeEventListener('keydown', R.skip); removeEventListener('mousedown', R.skip);
  if (R.capEl) R.capEl.remove(); R.skipEl.remove();
  G.stats.rides = (G.stats.rides || 0) + 1;
  R = null; G.cine = false; G.riding = false; document.body.classList.remove('cinema', 'film');
  X.camera.fov = G.baseFov || 72; X.camera.updateProjectionMatrix();
  G.requestLock && G.requestLock();
}
