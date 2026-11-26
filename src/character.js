import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { M, glow } from './models.js';
import { G } from './state.js';

// —— 殖民者：带骨骼层级的宇航服角色 + 程序化步态 ——
// 层级：根（脚底）→ 髋 → 腰/胸 → 颈/头、肩 → 上臂 → 肘 → 前臂 → 手；髋 → 大腿 → 膝 → 小腿 → 踝 → 靴
// 几何体全部共享，减少内存；远处的角色自动隐藏，节省绘制

const suitMats = [0xece8e0, 0xdfe3e8, 0xeadccb, 0xe2e6dc].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.62, metalness: 0.05 }));
const visorMats = [0xffb070, 0x70c8ff, 0x90ffb0, 0xff9ad0, 0xffe070].map(c => new THREE.MeshStandardMaterial({ color: 0x1a1410, emissive: c, emissiveIntensity: 0.12, roughness: 0.04, metalness: 1.0, envMapIntensity: 2.2 }));
const accentMats = [0xf07a2a, 0x3a8ad8, 0x4ab070, 0xd04a6a, 0xd8b030].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.5 }));
const fabric = new THREE.MeshStandardMaterial({ color: 0x5a5e66, roughness: 0.9 });
const sole = new THREE.MeshStandardMaterial({ color: 0x2a2624, roughness: 0.95 });
const screen = new THREE.MeshBasicMaterial({ color: 0x7fffd0 });

const rb = (w, h, d, r) => new RoundedBoxGeometry(w, h, d, 3, r);
const GEO = {
  pelvis: rb(0.34, 0.18, 0.22, 0.07),
  belt: new THREE.TorusGeometry(0.16, 0.028, 6, 20),
  torso: new THREE.LatheGeometry([[0, 0], [0.16, 0], [0.2, 0.08], [0.22, 0.28], [0.21, 0.4], [0.13, 0.48], [0, 0.48]].map(([x, y]) => new THREE.Vector2(x, y)), 16),
  chestPlate: rb(0.3, 0.2, 0.08, 0.035),
  chestScreen: new THREE.PlaneGeometry(0.09, 0.05),
  pack: rb(0.34, 0.42, 0.17, 0.05),
  tank: new THREE.CapsuleGeometry(0.055, 0.3, 4, 10),
  hose: new THREE.TorusGeometry(0.09, 0.018, 6, 14, Math.PI),
  neck: new THREE.TorusGeometry(0.12, 0.03, 8, 20),
  helmet: new THREE.SphereGeometry(0.19, 20, 16),
  visor: new THREE.SphereGeometry(0.193, 20, 14, Math.PI * 0.08, Math.PI * 0.84, Math.PI * 0.28, Math.PI * 0.38), // 朝向 +z（正前方）
  visorRim: new THREE.TorusGeometry(0.165, 0.015, 6, 24, Math.PI * 1.1),
  lamp: new THREE.CylinderGeometry(0.03, 0.035, 0.08, 10),
  joint: new THREE.SphereGeometry(1, 12, 10),
  upperArm: new THREE.CapsuleGeometry(0.058, 0.2, 4, 10),
  forearm: new THREE.CapsuleGeometry(0.052, 0.18, 4, 10),
  cuff: new THREE.CylinderGeometry(0.062, 0.062, 0.05, 12),
  glove: rb(0.08, 0.1, 0.06, 0.025),
  thigh: new THREE.CapsuleGeometry(0.075, 0.27, 4, 10),
  shin: new THREE.CapsuleGeometry(0.066, 0.27, 4, 10),
  kneePad: new THREE.SphereGeometry(0.07, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2),
  boot: rb(0.13, 0.11, 0.24, 0.04),
  soleG: rb(0.135, 0.035, 0.25, 0.012),
};
const THIGH = 0.42, SHIN = 0.41, ANKLE_H = 0.1, HIP_Y = THIGH + SHIN + ANKLE_H;

export function makeColonistHD(seed) {
  const suit = suitMats[seed % suitMats.length], visorM = visorMats[seed % visorMats.length], acc = accentMats[seed % accentMats.length];
  const root = new THREE.Group();
  const mesh = (geo, mat, p, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; p.add(m); return m; };
  const grp = (p, x = 0, y = 0, z = 0) => { const g = new THREE.Group(); g.position.set(x, y, z); p.add(g); return g; };

  const hips = grp(root, 0, HIP_Y, 0);
  mesh(GEO.pelvis, suit, hips, 0, 0.02, 0);
  mesh(GEO.belt, M.dark, hips, 0, 0.09, 0, Math.PI / 2).scale.set(1.05, 0.8, 1);
  mesh(GEO.glove, fabric, hips, 0.17, 0.02, 0.03).scale.set(0.9, 0.9, 1.1); // 腰包

  // 上身
  const torso = grp(hips, 0, 0.1, 0);
  const chest = mesh(GEO.torso, suit, torso, 0, 0, 0); chest.scale.z = 0.78;
  mesh(GEO.chestPlate, M.panel || suit, torso, 0, 0.27, 0.14, -0.12);
  mesh(GEO.chestScreen, screen, torso, -0.05, 0.28, 0.185, -0.12).castShadow = false;
  mesh(GEO.glove, acc, torso, 0.08, 0.28, 0.17, -0.12).scale.set(0.9, 0.5, 0.5);
  // 生命维持背包：双气瓶 + 软管
  const pack = mesh(GEO.pack, M.white || suit, torso, 0, 0.26, -0.2);
  for (const s of [-1, 1]) mesh(GEO.tank, M.metal || suit, torso, s * 0.1, 0.26, -0.31);
  mesh(GEO.hose, M.dark, torso, 0.15, 0.36, -0.04, 0, Math.PI / 2, 0);
  mesh(GEO.glove, acc, torso, 0, 0.49, -0.2).scale.set(3.6, 0.35, 1.7);
  const packLight = glow(0x8dffb0, 0.18, torso, -0.12, 0.42, -0.3);
  void pack;

  // 头盔
  const neck = grp(torso, 0, 0.49, 0);
  mesh(GEO.neck, M.metal || M.dark, neck, 0, 0, 0, Math.PI / 2);
  const head = grp(neck, 0, 0.17, 0);
  const helmet = mesh(GEO.helmet, suit, head, 0, 0, 0);
  const visor = mesh(GEO.visor, visorM, head, 0, 0.005, 0.004);
  mesh(GEO.lamp, M.dark, head, 0.17, 0.06, 0.05, Math.PI / 2);
  const headLamp = glow(0xfff2d8, 0.5, head, 0.17, 0.06, 0.1);
  mesh(GEO.joint, M.metal || M.dark, head, -0.12, 0.13, -0.06).scale.setScalar(0.015);
  void helmet;

  // 手臂
  const arm = s => {
    const sh = grp(torso, s * 0.25, 0.4, 0);
    mesh(GEO.joint, suit, sh, 0, 0, 0).scale.setScalar(0.085);
    mesh(GEO.upperArm, suit, sh, 0, -0.16, 0);
    mesh(GEO.glove, acc, sh, s * 0.05, -0.06, 0).scale.set(0.35, 0.9, 1.1); // 肩章
    const el = grp(sh, 0, -0.32, 0);
    mesh(GEO.joint, M.dark, el, 0, 0, 0).scale.setScalar(0.058);
    mesh(GEO.forearm, suit, el, 0, -0.14, 0);
    mesh(GEO.cuff, acc, el, 0, -0.27, 0);
    const hand = grp(el, 0, -0.32, 0);
    mesh(GEO.glove, M.dark, hand, 0, -0.02, 0);
    sh.rotation.z = s * 0.1;
    return { sh, el, hand };
  };
  const aL = arm(-1), aR = arm(1);

  // 腿
  const leg = s => {
    const th = grp(hips, s * 0.1, -0.02, 0);
    mesh(GEO.thigh, suit, th, 0, -THIGH / 2, 0);
    const kn = grp(th, 0, -THIGH, 0);
    mesh(GEO.kneePad, acc, kn, 0, 0, 0.045, Math.PI / 2);
    mesh(GEO.shin, suit, kn, 0, -SHIN / 2, 0);
    mesh(GEO.cuff, M.dark, kn, 0, -SHIN + 0.06, 0).scale.set(1.15, 1, 1.15);
    const an = grp(kn, 0, -SHIN, 0);
    mesh(GEO.boot, sole, an, 0, -0.045, 0.04);
    mesh(GEO.soleG, M.dark, an, 0, -0.095, 0.04);
    mesh(GEO.glove, acc, an, 0, -0.01, 0.13).scale.set(1.2, 0.35, 0.5);
    return { th, kn, an };
  };
  const lL = leg(-1), lR = leg(1);

  return {
    group: root, body: torso, head, visor,
    // 兼容旧接口
    legL: lL.th, legR: lR.th, armL: aL.sh, armR: aR.sh,
    rig: { hips, torso, neck, head, aL, aR, lL, lR, packLight, headLamp },
    anim: { phase: Math.random() * 6.28, walkW: 0, waveW: 0, look: 0, seed },
  };
}

// —— 程序化动画 ——
// moving：是否在走；speed：米/秒；wave：是否在挥手；lookAt：要看的世界坐标（可空）
const _v = new THREE.Vector3();
export function animateColonist(c, dt, moving, speed, wave, lookAt, now) {
  const R = c.rig, A = c.anim; if (!R) return;
  // 远处的人不画
  const cam = G.camera; if (cam) { const d = cam.position.distanceTo(c.group.position); c.group.visible = d < 110; if (d > 110) return; }
  A.walkW += ((moving ? 1 : 0) - A.walkW) * Math.min(1, dt * 6);
  A.waveW += ((wave ? 1 : 0) - A.waveW) * Math.min(1, dt * 5);
  const w = A.walkW, idle = 1 - w;
  A.phase += dt * (speed / 0.62) * Math.PI * Math.max(0.35, w); // 每步约 0.62 米
  const p = A.phase, s = Math.sin(p), co = Math.cos(p);
  const t = now + A.seed * 1.7;

  // —— 腿：大腿前后摆，摆动相膝盖弯曲，着地相伸直，脚掌随之翻转 ——
  const legPose = (L, ph) => {
    const sp = Math.sin(ph), cp = Math.cos(ph);
    const thigh = -sp * 0.5 * w;
    const knee = (0.06 + 0.95 * Math.pow(Math.max(0, cp), 1.6) + 0.12 * Math.max(0, -sp)) * w + idle * 0.05;
    L.th.rotation.x = thigh;
    L.kn.rotation.x = knee;
    L.an.rotation.x = (-thigh - knee) * 0.55 + Math.max(0, sp) * 0.25 * w;
  };
  legPose(R.lL, p); legPose(R.lR, p + Math.PI);
  // 闲置时轻微重心转移
  const shift = Math.sin(t * 0.45) * idle;
  R.lL.th.rotation.z = 0.02 + shift * 0.03; R.lR.th.rotation.z = -0.02 + shift * 0.03;

  // —— 髋与上身：步态起伏、侧倾、扭转，上身反向扭转保持平衡 ——
  R.hips.position.y = HIP_Y - 0.035 * w + Math.abs(co) * 0.035 * w + Math.sin(t * 1.7) * 0.004 * idle - 0.012 * idle;
  R.hips.position.x = shift * 0.025;
  R.hips.rotation.y = s * 0.14 * w;
  R.hips.rotation.z = s * 0.045 * w - shift * 0.04;
  R.torso.rotation.y = -s * 0.22 * w;
  R.torso.rotation.x = 0.07 * w * Math.min(1, speed / 2) + Math.sin(t * 1.6) * 0.015 * idle; // 走路前倾；呼吸
  R.torso.rotation.z = -R.hips.rotation.z * 0.6;
  R.torso.scale.y = 1 + Math.sin(t * 1.6) * 0.008 * idle;

  // —— 手臂：与对侧腿同步摆动，手肘自然弯曲 ——
  const armPose = (Ar, ph, side) => {
    const sp = Math.sin(ph);
    Ar.sh.rotation.x = sp * 0.45 * w + Math.sin(t * 1.6 + side) * 0.03 * idle;
    Ar.el.rotation.x = -(0.22 + 0.35 * Math.max(0, sp)) * w - 0.12 * idle;
    Ar.sh.rotation.z = side * (0.1 + 0.04 * w);
    Ar.el.rotation.z = 0;
  };
  armPose(R.aL, p + Math.PI, -1); armPose(R.aR, p, 1);
  if (A.waveW > 0.01) {
    // 挥手：右臂抬起，前臂左右摆动
    const k = A.waveW;
    R.aR.sh.rotation.x += (-2.5 - R.aR.sh.rotation.x) * k;
    R.aR.sh.rotation.z += (0.35 - R.aR.sh.rotation.z) * k;
    R.aR.el.rotation.x += (-0.35 - R.aR.el.rotation.x) * k;
    R.aR.el.rotation.z = Math.sin(now * 9) * 0.55 * k;
  }

  // —— 头：走路时稳住视线；闲置时四处张望；有目标时看向目标 ——
  let yaw = Math.sin(t * 0.31) * 0.45 * idle + Math.sin(t * 0.13) * 0.2 * idle, pitch = -R.torso.rotation.x * 0.6 + Math.sin(t * 0.23) * 0.08 * idle;
  if (lookAt) {
    c.group.updateMatrixWorld();
    _v.copy(lookAt); R.neck.worldToLocal(_v);
    const ly = Math.atan2(_v.x, _v.z), lp = -Math.atan2(_v.y - 0.15, Math.hypot(_v.x, _v.z));
    A.look += (1 - A.look) * Math.min(1, dt * 4);
    yaw = yaw * (1 - A.look) + THREE.MathUtils.clamp(ly, -1.1, 1.1) * A.look;
    pitch = pitch * (1 - A.look) + THREE.MathUtils.clamp(lp, -0.5, 0.4) * A.look;
  } else A.look += (0 - A.look) * Math.min(1, dt * 3);
  R.neck.rotation.y += (yaw - R.neck.rotation.y) * Math.min(1, dt * 5);
  R.head.rotation.x += (pitch - R.head.rotation.x) * Math.min(1, dt * 5);
  R.neck.rotation.y -= R.torso.rotation.y * 0.8 * w;

  // 夜里：头灯与背包指示灯
  const night = G.time.night;
  R.headLamp.visible = night > 0.45; R.headLamp.material.opacity = 0.8;
  R.packLight.material.opacity = 0.5 + Math.sin(now * 3 + A.seed) * 0.4;
}
