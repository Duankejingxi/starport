import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { M, glow, BUILD_MODELS } from './models.js';

// ================= 高精度建模工具 =================
const V = (x, y, z) => new THREE.Vector3(x, y, z);
function mk(geo, mat, x = 0, y = 0, z = 0, parent, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = true; m.receiveShadow = true; if (parent) parent.add(m); return m;
}
const rbox = (w, h, d, r = 0.06) => new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2.1, h / 2.1, d / 2.1));
const cyl = (rt, rb, h, s = 24, open = false) => new THREE.CylinderGeometry(rt, rb, h, s, 1, open);
const lathe = (pts, seg = 32) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
// 两点之间的圆管
function rod(a, b, r, mat, parent, seg = 10) {
  const d = b.clone().sub(a), len = d.length();
  const m = mk(cyl(r, r, len, seg), mat, 0, 0, 0, parent);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize());
  return m;
}
// 带法兰的管道
function pipe(a, b, r, mat, parent) {
  const m = rod(a, b, r, mat, parent);
  for (const p of [a, b]) { const f = rod(p.clone().lerp(b === p ? a : b, 0.02), p, r * 1.6, M.metal, parent); f.scale.y = 1; }
  return m;
}
// 沿曲线的管线
function tube(points, r, mat, parent, seg = 32) {
  const c = new THREE.CatmullRomCurve3(points);
  return mk(new THREE.TubeGeometry(c, seg, r, 8, false), mat, 0, 0, 0, parent);
}
// 下垂线缆
function cable(a, b, sag, r, mat, parent) {
  const mid = a.clone().lerp(b, 0.5); mid.y -= sag;
  return tube([a, a.clone().lerp(mid, 0.5).add(V(0, -sag * 0.15, 0)), mid, b.clone().lerp(mid, 0.5).add(V(0, -sag * 0.15, 0)), b], r, mat, parent, 24);
}
function ladder(parent, x, y, z, h, ry = 0, w = 0.5) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; parent.add(g);
  mk(cyl(0.035, 0.035, h, 6), M.metal, -w / 2, h / 2, 0, g); mk(cyl(0.035, 0.035, h, 6), M.metal, w / 2, h / 2, 0, g);
  for (let i = 0.25; i < h; i += 0.32) mk(cyl(0.022, 0.022, w, 6), M.metal, 0, i, 0, g, 0, 0, Math.PI / 2);
  return g;
}
function grille(parent, w, h, x, y, z, ry = 0, n = 8) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; parent.add(g);
  mk(rbox(w, h, 0.08, 0.02), M.dark, 0, 0, 0, g);
  for (let i = 0; i < n; i++) mk(new THREE.BoxGeometry(w * 0.9, h / n * 0.45, 0.04), M.metal, 0, -h / 2 + (i + 0.5) * h / n, 0.05, g, -0.4, 0, 0);
  return g;
}
function porthole(parent, x, y, z, r, ry = 0, rx = 0) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.set(rx, ry, 0); parent.add(g);
  mk(new THREE.TorusGeometry(r, r * 0.18, 8, 24), M.metal, 0, 0, 0, g);
  mk(new THREE.CircleGeometry(r * 0.95, 24), M.window, 0, 0, -0.01, g);
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; mk(new THREE.SphereGeometry(r * 0.06, 6, 4), M.metal, Math.cos(a) * r * 1.12, Math.sin(a) * r * 1.12, 0.02, g); }
  return g;
}
function bolts(parent, r, y, n, size = 0.05) {
  for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; mk(cyl(size, size, size * 1.2, 6), M.metal, Math.cos(a) * r, y, Math.sin(a) * r, parent); }
}
function valve(parent, x, y, z, r = 0.22, rx = 0, ry = 0) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.set(rx, ry, 0); parent.add(g);
  mk(new THREE.TorusGeometry(r, r * 0.12, 6, 18), M.red2, 0, 0, 0, g);
  for (let i = 0; i < 3; i++) mk(new THREE.BoxGeometry(r * 2, r * 0.12, r * 0.12), M.red2, 0, 0, 0, g, 0, 0, i * Math.PI / 3);
  mk(cyl(r * 0.25, r * 0.25, r * 0.6, 8), M.metal, 0, 0, -r * 0.3, g, Math.PI / 2, 0, 0);
  return g;
}
function gauge(parent, x, y, z, ry = 0) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; parent.add(g);
  mk(cyl(0.13, 0.13, 0.06, 18), M.metal, 0, 0, 0, g, Math.PI / 2, 0, 0);
  mk(new THREE.CircleGeometry(0.11, 18), M.screen, 0, 0, 0.032, g);
  return g;
}
function hazard(parent, w, h, x, y, z, ry = 0) { return mk(new THREE.BoxGeometry(w, h, 0.02), M.hazard, x, y, z, parent, 0, ry, 0); }
// 表面散布的机械细节
function greebles(parent, rng, n, x0, x1, y0, y1, z, ry = 0) {
  const g = new THREE.Group(); g.rotation.y = ry; parent.add(g);
  for (let i = 0; i < n; i++) {
    const w = 0.12 + rng() * 0.35, h = 0.1 + rng() * 0.3, d = 0.04 + rng() * 0.12;
    const t = rng();
    const mat = t < 0.5 ? M.panel : t < 0.8 ? M.dark : M.metal;
    if (rng() < 0.3) mk(cyl(w * 0.3, w * 0.3, d * 2, 10), mat, x0 + rng() * (x1 - x0), y0 + rng() * (y1 - y0), z + d, g, Math.PI / 2, 0, 0);
    else mk(rbox(w, h, d, 0.015), mat, x0 + rng() * (x1 - x0), y0 + rng() * (y1 - y0), z + d / 2, g);
  }
  return g;
}
function rng(seed) { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

// 额外材质
{
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 32;
  const g = cv.getContext('2d'); g.fillStyle = '#f2c11a'; g.fillRect(0, 0, 128, 32);
  g.fillStyle = '#1a1a1a'; for (let x = -32; x < 160; x += 24) { g.beginPath(); g.moveTo(x, 32); g.lineTo(x + 12, 32); g.lineTo(x + 44, 0); g.lineTo(x + 32, 0); g.fill(); }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.repeat.set(2, 1);
  M.hazard = new THREE.MeshStandardMaterial({ map: t, roughness: 0.7 });
  M.red2 = new THREE.MeshStandardMaterial({ color: 0xc8321e, roughness: 0.5, metalness: 0.3 });
  M.chrome = new THREE.MeshStandardMaterial({ color: 0xe0e4ea, roughness: 0.15, metalness: 1 });
  M.rubber = new THREE.MeshStandardMaterial({ color: 0x1c1c1e, roughness: 0.92 });
  M.ablative = new THREE.MeshStandardMaterial({ color: 0x3a2a22, roughness: 0.95, map: M.found.map, bumpMap: M.found.bumpMap, bumpScale: 3 });
  M.soil = new THREE.MeshStandardMaterial({ color: 0x3b2418, roughness: 1 });
  M.leaf = new THREE.MeshStandardMaterial({ color: 0x3f9a3a, roughness: 0.7, flatShading: true });
  M.leaf2 = new THREE.MeshStandardMaterial({ color: 0x6cc24a, roughness: 0.7, flatShading: true });
  M.fruit = new THREE.MeshStandardMaterial({ color: 0xe0381c, roughness: 0.4 });
  M.growlight = new THREE.MeshStandardMaterial({ color: 0x220011, emissive: 0xff4fd8, emissiveIntensity: 2.2 });
  const sc = document.createElement('canvas'); sc.width = sc.height = 64;
  const s = sc.getContext('2d'); s.fillStyle = '#0a1a14'; s.fillRect(0, 0, 64, 64);
  s.strokeStyle = '#6dffb5'; s.lineWidth = 3; s.beginPath(); s.arc(32, 36, 22, Math.PI * 1.1, Math.PI * 1.9); s.stroke();
  s.beginPath(); s.moveTo(32, 36); s.lineTo(46, 22); s.stroke();
  const st = new THREE.CanvasTexture(sc); st.colorSpace = THREE.SRGBColorSpace;
  M.screen = new THREE.MeshStandardMaterial({ map: st, emissive: 0xffffff, emissiveMap: st, emissiveIntensity: 0.9 });
  const cell = document.createElement('canvas'); cell.width = 128; cell.height = 128;
  const c = cell.getContext('2d'); const gr = c.createLinearGradient(0, 0, 128, 128);
  gr.addColorStop(0, '#16285a'); gr.addColorStop(0.5, '#2a4a9a'); gr.addColorStop(1, '#122048');
  c.fillStyle = gr; c.fillRect(0, 0, 128, 128);
  c.strokeStyle = 'rgba(200,220,255,.55)'; c.lineWidth = 1; for (let i = 16; i < 128; i += 16) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, 128); c.stroke(); }
  c.strokeStyle = 'rgba(220,230,255,.8)'; c.lineWidth = 2; c.beginPath(); c.moveTo(0, 64); c.lineTo(128, 64); c.stroke();
  const ct = new THREE.CanvasTexture(cell); ct.colorSpace = THREE.SRGBColorSpace; ct.anisotropy = 8;
  M.cell = new THREE.MeshStandardMaterial({ map: ct, roughness: 0.12, metalness: 0.6, envMapIntensity: 1.8 });
}
function foundation(g, r, square = false) {
  const f = square ? mk(rbox(r * 2, 4, r * 2, 0.12), M.found, 0, -1.8, 0, g) : mk(cyl(r, r * 1.05, 4, 32), M.found, 0, -1.8, 0, g);
  f.castShadow = false; f.userData.found = true;
}

// ================= 建筑 =================
Object.assign(BUILD_MODELS, {
  solar(g, a) {
    foundation(g, 2.2, true);
    mk(rbox(1.4, 0.25, 1.4, 0.05), M.panel, 0, 0.12, 0, g); bolts(g, 0.55, 0.27, 8, 0.04);
    mk(lathe([[0, 0], [0.3, 0], [0.26, 0.4], [0.17, 0.6], [0.15, 2.1], [0, 2.1]]), M.metal, 0, 0.25, 0, g);
    mk(rbox(0.5, 0.6, 0.4, 0.05), M.dark, 0.32, 0.65, 0, g); gauge(g, 0.57, 0.7, 0, Math.PI / 2);
    cable(V(0.4, 0.5, 0.15), V(1.3, 0.05, 0.9), 0.15, 0.03, M.rubber, g);
    const pivot = new THREE.Group(); pivot.position.y = 2.45; g.add(pivot);
    mk(rbox(0.5, 0.42, 0.5, 0.06), M.dark, 0, 0, 0, pivot);
    mk(cyl(0.12, 0.12, 0.9, 12), M.chrome, 0, 0.1, 0, pivot, 0, 0, Math.PI / 2);
    const panel = new THREE.Group(); panel.position.y = 0.25; pivot.add(panel);
    mk(rbox(4.4, 0.1, 3.0, 0.03), M.metal, 0, -0.02, 0, panel);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) {
      const c = mk(new THREE.BoxGeometry(1.02, 0.03, 0.92), M.cell, -1.6 + i * 1.07, 0.045, -0.97 + j * 0.97, panel);
      c.castShadow = true;
    }
    // 背部桁架
    for (const z of [-1.1, 1.1]) mk(new THREE.BoxGeometry(4.2, 0.08, 0.06), M.metal, 0, -0.1, z, panel);
    for (const x of [-1.5, 0, 1.5]) mk(new THREE.BoxGeometry(0.06, 0.08, 2.6), M.metal, x, -0.1, 0, panel);
    rod(V(-1.5, -0.12, -1.1), V(0, -0.35, 0), 0.03, M.metal, panel); rod(V(1.5, -0.12, 1.1), V(0, -0.35, 0), 0.03, M.metal, panel);
    rod(V(1.5, -0.12, -1.1), V(0, -0.35, 0), 0.03, M.metal, panel); rod(V(-1.5, -0.12, 1.1), V(0, -0.35, 0), 0.03, M.metal, panel);
    mk(rbox(0.3, 0.12, 0.2, 0.02), M.dark, 1.9, 0.08, 1.35, panel);
    a.pivot = pivot; a.panel = panel;
  },
  oxygen(g, a) {
    foundation(g, 3);
    const R = rng(11);
    mk(cyl(3, 3.1, 0.35, 40), M.panel, 0, 0.17, 0, g);
    for (const x of [-1.35, 1.35]) {
      const tank = new THREE.Group(); tank.position.set(x, 0.35, -0.3); g.add(tank);
      mk(lathe([[0, 0.2], [0.55, 0.22], [0.9, 0.45], [1.0, 0.8], [1.0, 3.2], [0.9, 3.55], [0.55, 3.78], [0, 3.8]], 40), M.white, 0, 0, 0, tank);
      for (const y of [1.2, 2.4]) mk(new THREE.TorusGeometry(1.005, 0.03, 6, 40), M.metal, 0, y, 0, tank, Math.PI / 2, 0, 0);
      mk(cyl(1.015, 1.015, 0.25, 40, true), M.orange, 0, 1.8, 0, tank);
      for (const z of [-0.6, 0.6]) mk(rbox(1.6, 0.35, 0.2, 0.04), M.dark, 0, 0.25, z, tank);
      mk(cyl(0.12, 0.12, 0.3, 12), M.metal, 0, 3.9, 0, tank); valve(tank, 0, 4.1, 0, 0.18, Math.PI / 2, 0);
      gauge(tank, 0, 2.2, 1.02);
      ladder(tank, 0, 0.3, -1.05, 3.4, Math.PI);
    }
    // 电解单元
    mk(rbox(1.7, 1.9, 1.6, 0.1), M.panel, 0, 1.3, 1.2, g);
    mk(rbox(1.8, 0.2, 1.7, 0.05), M.orange, 0, 2.3, 1.2, g);
    greebles(g, R, 10, -0.7, 0.7, 0.6, 2.0, 1.95);
    grille(g, 1.0, 0.5, 0.0, 0.7, 2.01, 0, 6);
    // 风扇
    mk(new THREE.TorusGeometry(0.42, 0.06, 8, 28), M.dark, 0, 1.75, 2.02, g);
    const fan = new THREE.Group(); fan.position.set(0, 1.75, 2.03); g.add(fan);
    for (let i = 0; i < 6; i++) mk(new THREE.BoxGeometry(0.1, 0.36, 0.02), M.metal, Math.sin(i * Math.PI / 3) * 0.2, Math.cos(i * Math.PI / 3) * 0.2, 0, fan, 0, 0.4, -i * Math.PI / 3);
    mk(cyl(0.08, 0.08, 0.06, 12), M.chrome, 0, 0, 0, fan, Math.PI / 2, 0, 0);
    a.fan = fan;
    // 管道
    for (const x of [-1.35, 1.35]) tube([V(x, 3.2, 0.5), V(x * 0.7, 3.0, 0.9), V(x * 0.3, 2.4, 1.2), V(x * 0.25, 2.2, 1.3)], 0.07, M.metal, g);
    pipe(V(-1.35, 0.9, 0.7), V(1.35, 0.9, 0.7), 0.06, M.metal, g);
    valve(g, 0.8, 0.9, 0.85, 0.15, 0, 0);
    gauge(g, -0.5, 2.0, 2.01); gauge(g, 0.5, 2.0, 2.01);
    a.light = glow(0x66ddff, 0.45, g, 0.6, 2.05, 2.05);
    hazard(g, 1.8, 0.12, 0, 0.42, 2.02);
  },
  habitat(g, a) {
    foundation(g, 6.2);
    const R = rng(23);
    // 基座：带倒角的阶梯环
    mk(lathe([[0, 0], [6.25, 0], [6.3, 0.15], [6.25, 0.9], [6.05, 1.05], [5.95, 1.25], [0, 1.25]], 64), M.panel, 0, 0, 0, g);
    for (let i = 0; i < 16; i++) { const an = i / 16 * Math.PI * 2; if (Math.abs(an - Math.PI / 2) < 0.3) continue; grille(g, 0.7, 0.4, Math.cos(an) * 6.28, 0.55, Math.sin(an) * 6.28, -an + Math.PI / 2, 4); }
    // 穹顶与肋拱
    const dome = mk(new THREE.SphereGeometry(5.8, 64, 24, 0, Math.PI * 2, 0, Math.PI / 2), M.white, 0, 1.2, 0, g); dome.scale.y = 0.85;
    for (let i = 0; i < 12; i++) {
      const rib = mk(new THREE.TorusGeometry(5.86, 0.08, 6, 32, Math.PI / 2), M.panel, 0, 1.2, 0, g, 0, i * Math.PI / 6, 0);
      rib.scale.set(1, 0.85, 1);
    }
    for (const [y, r] of [[2.6, 5.62], [4.3, 4.6]]) mk(new THREE.TorusGeometry(r, 0.07, 6, 64), M.panel, 0, y, 0, g, Math.PI / 2, 0, 0);
    // 舷窗带
    a.windows = [];
    for (let i = 0; i < 14; i++) {
      const an = i / 14 * Math.PI * 2 + 0.11; if (Math.abs(an - Math.PI / 2) < 0.35) continue;
      const w = new THREE.Group(); w.position.set(Math.cos(an) * 5.76, 2.0, Math.sin(an) * 5.76); w.rotation.y = -an + Math.PI / 2; w.rotation.x = -0.18; g.add(w);
      mk(rbox(1.15, 0.62, 0.16, 0.08), M.metal, 0, 0, 0, w);
      mk(rbox(1.0, 0.48, 0.1, 0.07), M.window, 0, 0, 0.05, w);
    }
    // 屋顶枢纽
    mk(cyl(1.2, 1.4, 0.5, 32), M.panel, 0, 6.05, 0, g); mk(new THREE.SphereGeometry(1.0, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2), M.glass, 0, 6.3, 0, g).castShadow = false;
    mk(new THREE.TorusGeometry(1.05, 0.06, 6, 32), M.metal, 0, 6.3, 0, g, Math.PI / 2, 0, 0);
    mk(cyl(0.06, 0.09, 3.2, 8), M.metal, 1.6, 7.0, 0, g); a.tip = glow(0xff4040, 1.0, g, 1.6, 8.7, 0);
    const dish = mk(new THREE.SphereGeometry(0.55, 20, 8, 0, Math.PI * 2, 0, Math.PI / 3), M.white, -1.4, 6.6, 0.6, g); dish.rotation.set(-0.9, 0.5, 0);
    mk(cyl(0.05, 0.05, 0.9, 6), M.metal, -1.4, 6.1, 0.6, g);
    ladder(g, 0, 1.25, -5.4, 3.2, 0, 0.45).rotation.x = -0.6;
    // 气闸舱
    const al = new THREE.Group(); al.position.set(0, 0, 6.2); g.add(al);
    mk(rbox(2.6, 2.9, 3.0, 0.25), M.white, 0, 1.45, 0.2, al);
    mk(rbox(2.64, 0.12, 3.04, 0.05), M.orange, 0, 2.62, 0.2, al);
    mk(rbox(1.5, 2.2, 0.15, 0.12), M.metal, 0, 1.25, 1.72, al);
    mk(rbox(1.2, 1.95, 0.1, 0.1), M.dark, 0, 1.2, 1.78, al);
    porthole(al, 0, 1.75, 1.84, 0.22);
    mk(rbox(0.12, 0.4, 0.08, 0.03), M.chrome, 0.45, 1.1, 1.85, al);
    hazard(al, 1.5, 0.14, 0, 0.12, 1.85);
    for (let i = 0; i < 3; i++) mk(rbox(1.4, 0.12, 0.35, 0.03), M.metal, 0, 0.06 + i * 0.0, 2.05 + i * 0.35, al).position.y = 0.3 - i * 0.12;
    glow(0xffe0a0, 0.8, al, 1.0, 2.5, 1.8);
    mk(rbox(0.5, 0.35, 0.3, 0.04), M.dark, -1.0, 2.4, 1.75, al);
    greebles(al, R, 8, -1.2, 1.2, 0.4, 2.6, 1.7, 0);
    // 外接管线与设备
    tube([V(4.5, 1.0, 3.5), V(5.6, 0.6, 4.2), V(6.6, 0.25, 4.6), V(7.6, 0.2, 4.6)], 0.12, M.metal, g);
    tube([V(-4.5, 1.0, 3.5), V(-5.4, 0.7, 4.4), V(-6.4, 0.25, 5.0)], 0.1, M.orange, g);
    for (const [x, z, ry] of [[-6.3, -2.4, 0.4], [6.4, -2.0, -0.3]]) {
      const u = new THREE.Group(); u.position.set(x, 0, z); u.rotation.y = ry; g.add(u);
      mk(rbox(1.4, 1.1, 1.0, 0.08), M.panel, 0, 0.55, 0, u); grille(u, 0.9, 0.7, 0, 0.6, 0.51, 0, 6);
      mk(new THREE.TorusGeometry(0.35, 0.05, 6, 20), M.dark, 0, 1.12, 0, u, Math.PI / 2, 0, 0);
    }
  },
  extractor(g, a) {
    foundation(g, 2.6, true);
    mk(rbox(4.6, 0.5, 4.6, 0.08), M.panel, 0, 0.25, 0, g);
    hazard(g, 4.6, 0.15, 0, 0.42, 2.31); hazard(g, 4.6, 0.15, 0, 0.42, -2.31);
    // 井架：四根立柱 + X 形斜撑
    const H = 6.4, top = 0.6, bot = 1.6;
    const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    for (const [x, z] of corners) rod(V(x * bot, 0.5, z * bot), V(x * top, H, z * top), 0.09, M.orange, g);
    for (let lv = 0; lv < 3; lv++) {
      const y0 = 0.5 + lv * (H - 0.5) / 3, y1 = y0 + (H - 0.5) / 3;
      const s0 = bot + (top - bot) * (lv / 3), s1 = bot + (top - bot) * ((lv + 1) / 3);
      for (let i = 0; i < 4; i++) {
        const [ax, az] = corners[i], [bx, bz] = corners[(i + 1) % 4];
        rod(V(ax * s0, y0, az * s0), V(bx * s1, y1, bz * s1), 0.035, M.metal, g);
        rod(V(bx * s0, y0, bz * s0), V(ax * s1, y1, az * s1), 0.035, M.metal, g);
        rod(V(ax * s1, y1, az * s1), V(bx * s1, y1, bz * s1), 0.04, M.metal, g);
      }
    }
    mk(rbox(1.8, 0.3, 1.8, 0.05), M.dark, 0, H + 0.1, 0, g);
    for (const [x, z] of corners) mk(cyl(0.03, 0.03, 0.7, 6), M.metal, x * 0.85, H + 0.6, z * 0.85, g);
    mk(cyl(0.45, 0.45, 0.6, 20), M.white, 0, H + 0.55, 0, g);
    a.light = glow(0x9fdcff, 1.0, g, 0, H + 1.1, 0);
    // 钻杆
    const drill = new THREE.Group(); drill.position.y = 3; g.add(drill);
    mk(cyl(0.18, 0.18, 4.6, 16), M.chrome, 0, 0, 0, drill);
    for (let i = 0; i < 5; i++) mk(new THREE.TorusGeometry(0.2, 0.04, 6, 16), M.metal, 0, -2 + i * 1, 0, drill, Math.PI / 2, 0, 0);
    mk(new THREE.ConeGeometry(0.3, 0.7, 16), M.dark, 0, -2.6, 0, drill, Math.PI, 0, 0);
    a.drill = drill;
    // 冰浆罐与管道
    mk(lathe([[0, 0], [0.9, 0], [1.0, 0.2], [1.0, 1.8], [0.8, 2.1], [0, 2.15]], 32), M.white, 2.1, 0.5, 1.3, g);
    mk(cyl(1.01, 1.01, 0.2, 32, true), M.orange, 2.1, 1.6, 1.3, g);
    gauge(g, 2.1, 1.2, 2.31);
    tube([V(0.3, 1.0, 0.3), V(0.9, 1.2, 0.8), V(1.5, 1.6, 1.2), V(2.1, 2.7, 1.3)], 0.08, M.metal, g);
    valve(g, 1.2, 1.25, 1.1, 0.14, 0, 0.6);
    mk(rbox(1.2, 1.0, 0.9, 0.08), M.dark, -1.7, 1.0, 1.4, g); grille(g, 0.8, 0.5, -1.7, 1.0, 1.86, 0, 5);
  },
  greenhouse(g, a) {
    foundation(g, 5, true);
    mk(rbox(10.4, 0.5, 6.4, 0.1), M.panel, 0, 0.25, 0, g);
    const glass = mk(new THREE.CylinderGeometry(3, 3, 10, 40, 1, true, 0, Math.PI), M.glass, 0, 0.5, 0, g, 0, 0, Math.PI / 2); glass.castShadow = false;
    for (let i = 0; i < 9; i++) mk(new THREE.TorusGeometry(3.02, 0.06, 6, 28, Math.PI), M.white, -4.8 + i * 1.2, 0.5, 0, g, 0, Math.PI / 2, 0);
    for (let k = 1; k < 6; k++) { const an = k / 6 * Math.PI; mk(cyl(0.035, 0.035, 9.8, 6), M.white, 0, 0.5 + Math.sin(an) * 3.02, Math.cos(an) * 3.02, g, 0, 0, Math.PI / 2); }
    // 端墙与门
    for (const s of [-1, 1]) {
      const end = mk(new THREE.CircleGeometry(3, 32, 0, Math.PI), M.glass, s * 5, 0.5, 0, g, 0, s * Math.PI / 2, 0); end.castShadow = false;
      mk(rbox(0.12, 2.2, 1.3, 0.04), M.white, s * 5.0, 1.6, 0, g);
    }
    mk(rbox(0.1, 1.9, 1.0, 0.05), M.dark, 5.05, 1.45, 0, g);
    // 种植床与作物
    const R = rng(71);
    for (const z of [-1.5, 0, 1.5]) {
      mk(rbox(9, 0.5, 0.9, 0.05), M.dark, 0, 0.75, z, g);
      mk(new THREE.BoxGeometry(8.8, 0.06, 0.8), M.soil, 0, 1.01, z, g);
      for (let i = 0; i < 10; i++) {
        const x = -4.1 + i * 0.9 + (R() - 0.5) * 0.2, kind = (i + Math.round(z)) % 3;
        if (kind === 0) {
          for (let k = 0; k < 4; k++) mk(new THREE.IcosahedronGeometry(0.22 + R() * 0.12, 0), k % 2 ? M.leaf : M.leaf2, x + (R() - 0.5) * 0.3, 1.2 + R() * 0.25, z + (R() - 0.5) * 0.3, g).castShadow = false;
        } else if (kind === 1) {
          mk(cyl(0.02, 0.02, 1.2, 4), M.leaf, x, 1.6, z, g);
          for (let k = 0; k < 5; k++) mk(new THREE.IcosahedronGeometry(0.14, 0), M.leaf2, x + (R() - 0.5) * 0.3, 1.2 + k * 0.22, z + (R() - 0.5) * 0.3, g).castShadow = false;
          for (let k = 0; k < 3; k++) mk(new THREE.SphereGeometry(0.07, 8, 6), M.fruit, x + (R() - 0.5) * 0.3, 1.3 + R() * 0.8, z + (R() - 0.5) * 0.25, g);
        } else {
          for (let k = 0; k < 6; k++) { const l = mk(new THREE.ConeGeometry(0.05, 0.5, 4), M.leaf2, x + (R() - 0.5) * 0.25, 1.25, z + (R() - 0.5) * 0.25, g, (R() - 0.5) * 0.6, 0, (R() - 0.5) * 0.6); l.castShadow = false; }
        }
      }
    }
    for (const z of [-0.75, 0.75]) mk(rbox(9, 0.06, 0.12, 0.02), M.growlight, 0, 2.7, z, g);
    a.light = glow(0xff66cc, 4, g, 0, 2.3, 0);
    // 外部水箱
    mk(lathe([[0, 0], [0.6, 0], [0.65, 0.1], [0.65, 1.5], [0.5, 1.7], [0, 1.72]], 24), M.white, -4.4, 0.5, 3.6, g);
    tube([V(-4.4, 1.6, 3.6), V(-4.2, 1.9, 3.0), V(-4.0, 1.5, 2.6)], 0.05, M.metal, g);
  },
});

Object.assign(BUILD_MODELS, {
  fabricator(g, a) {
    foundation(g, 4, true);
    const R = rng(41);
    mk(rbox(7.4, 0.4, 5.4, 0.08), M.panel, 0, 0.2, 0, g);
    // 主厂房：带拱顶
    mk(rbox(7, 3.2, 5, 0.18), M.white, 0, 2.0, 0, g);
    mk(new THREE.CylinderGeometry(2.5, 2.5, 7, 32, 1, false, 0, Math.PI), M.panel, 0, 3.6, 0, g, 0, 0, Math.PI / 2).scale.set(1, 1, 0.35);
    for (let i = 0; i < 6; i++) mk(new THREE.TorusGeometry(2.52, 0.05, 6, 24, Math.PI), M.metal, -3.3 + i * 1.32, 3.6, 0, g, 0, Math.PI / 2, 0).scale.set(1, 0.35, 1);
    mk(rbox(7.1, 0.2, 5.1, 0.05), M.orange, 0, 3.55, 0, g);
    // 卷帘门
    mk(rbox(3.4, 2.7, 0.2, 0.06), M.metal, 0, 1.75, 2.52, g);
    for (let i = 0; i < 12; i++) mk(new THREE.BoxGeometry(3.0, 0.16, 0.05), M.dark, 0, 0.55 + i * 0.2, 2.64, g);
    hazard(g, 3.4, 0.14, 0, 0.35, 2.66);
    for (const x of [-1.9, 1.9]) glow(0xffe0a0, 0.7, g, x, 3.0, 2.6);
    // 侧面设备与管线
    greebles(g, R, 16, -3.2, 3.2, 0.8, 3.0, -2.5, Math.PI);
    grille(g, 1.2, 0.8, 2.6, 1.6, 2.52, 0, 6); grille(g, 1.2, 0.8, -2.6, 1.6, 2.52, 0, 6);
    tube([V(3.5, 3.0, -1.5), V(4.2, 2.5, -1.8), V(4.4, 1.0, -2.0), V(4.4, 0.4, -2.0)], 0.1, M.metal, g);
    // 屋顶机械臂
    const arm = new THREE.Group(); arm.position.set(2.2, 3.85, 0); g.add(arm);
    mk(cyl(0.45, 0.55, 0.4, 24), M.dark, 0, 0.2, 0, arm);
    const seg1 = new THREE.Group(); seg1.position.y = 0.4; seg1.rotation.z = 0.35; arm.add(seg1);
    mk(rbox(0.32, 1.8, 0.32, 0.08), M.orange, 0, 0.9, 0, seg1); mk(cyl(0.22, 0.22, 0.45, 16), M.metal, 0, 1.8, 0, seg1, Math.PI / 2, 0, 0);
    const seg2 = new THREE.Group(); seg2.position.y = 1.8; seg2.rotation.z = -1.4; seg1.add(seg2);
    mk(rbox(0.25, 1.4, 0.25, 0.06), M.orange, 0, 0.7, 0, seg2);
    mk(cyl(0.12, 0.05, 0.35, 12), M.chrome, 0, 1.55, 0, seg2);
    a.arm = arm; a.spark = glow(0xffcc66, 1.0, seg2, 0, 1.8, 0);
    // 货箱
    for (const [x, z, s] of [[-2.6, 3.4, 1.1], [-1.4, 3.3, 0.9], [-2.1, 3.6, 0.6]]) { mk(rbox(s, s, s, 0.05), M.dark, x, s / 2 + (s < 0.7 ? 1.1 : 0), z, g); mk(new THREE.BoxGeometry(s * 1.01, 0.06, s * 1.01), M.orange, x, s * 0.7 + (s < 0.7 ? 1.1 : 0), z, g); }
  },
  turret(g, a) {
    foundation(g, 1.8);
    mk(lathe([[0, 0], [1.9, 0], [1.95, 0.15], [1.6, 0.9], [1.2, 1.2], [0, 1.2]], 32), M.metal, 0, 0, 0, g);
    bolts(g, 1.7, 0.2, 12, 0.06);
    mk(cyl(0.65, 0.8, 1.2, 24), M.dark, 0, 1.75, 0, g);
    const head = new THREE.Group(); head.position.y = 2.75; g.add(head);
    mk(rbox(1.7, 1.05, 2.0, 0.2), M.white, 0, 0, 0.1, head);
    mk(rbox(1.75, 0.18, 2.05, 0.06), M.orange, 0, 0.32, 0.1, head);
    mk(rbox(0.9, 0.35, 0.6, 0.08), M.dark, 0, 0.6, 0.4, head);
    for (const x of [-0.42, 0.42]) {
      mk(cyl(0.16, 0.16, 0.5, 16), M.dark, x, 0, -0.95, head, Math.PI / 2, 0, 0);
      mk(cyl(0.09, 0.09, 1.9, 16), M.metal, x, 0, -1.9, head, Math.PI / 2, 0, 0);
      for (let i = 0; i < 3; i++) mk(new THREE.TorusGeometry(0.11, 0.025, 6, 16), M.cyan, x, 0, -1.4 - i * 0.35, head);
      mk(cyl(0.13, 0.11, 0.25, 16), M.dark, x, 0, -2.9, head, Math.PI / 2, 0, 0);
    }
    mk(cyl(0.18, 0.18, 0.1, 16), M.cyan, 0, 0.1, -0.92, head, Math.PI / 2, 0, 0);
    a.eye = glow(0x33e6ff, 0.6, head, 0, 0.1, -0.98);
    grille(head, 0.9, 0.4, 0, -0.1, 1.12, 0, 4);
    a.head = head;
  },
  reactor(g, a) {
    foundation(g, 5.2);
    mk(lathe([[0, 0], [5.2, 0], [5.3, 0.2], [5.0, 1.3], [4.6, 1.5], [0, 1.5]], 48), M.panel, 0, 0, 0, g);
    hazard(g, 2.5, 0.16, 0, 1.0, 5.06);
    for (let i = 0; i < 16; i++) { const an = i / 16 * Math.PI * 2; grille(g, 0.6, 0.45, Math.cos(an) * 5.1, 0.75, Math.sin(an) * 5.1, -an + Math.PI / 2, 4); }
    // 托卡马克环形腔
    mk(new THREE.TorusGeometry(2.6, 0.9, 24, 64), M.white, 0, 3.0, 0, g, Math.PI / 2, 0, 0);
    for (let i = 0; i < 16; i++) { const an = i / 16 * Math.PI * 2; const c = mk(new THREE.TorusGeometry(1.0, 0.12, 8, 24), M.dark, Math.cos(an) * 2.6, 3.0, Math.sin(an) * 2.6, g); c.rotation.y = -an; }
    const core = mk(new THREE.SphereGeometry(1.2, 32, 24), M.cyan, 0, 3.0, 0, g); core.castShadow = false;
    const r1 = mk(new THREE.TorusGeometry(3.9, 0.12, 10, 64), M.chrome, 0, 3.0, 0, g);
    const r2 = mk(new THREE.TorusGeometry(3.9, 0.12, 10, 64), M.chrome, 0, 3.0, 0, g); r2.rotation.x = Math.PI / 2;
    for (let i = 0; i < 6; i++) { const an = i * Math.PI / 3; rod(V(Math.cos(an) * 4.6, 1.5, Math.sin(an) * 4.6), V(Math.cos(an) * 3.2, 3.0, Math.sin(an) * 3.2), 0.18, M.metal, g); }
    for (let i = 0; i < 4; i++) { const an = i * Math.PI / 2 + Math.PI / 4; mk(lathe([[0, 0], [0.7, 0], [0.75, 0.1], [0.75, 4.2], [0.6, 4.5], [0, 4.5]], 24), M.white, Math.cos(an) * 4.4, 1.5, Math.sin(an) * 4.4, g); }
    a.core = core; a.r1 = r1; a.r2 = r2; a.light = glow(0x33e6ff, 7, g, 0, 3.0, 0);
  },
  beacon(g, a) {
    mk(lathe([[0, 0], [7.4, 0], [7.5, 0.1], [7.2, 0.5], [0, 0.5]], 8), M.found, 0, -0.2, 0, g, 0, Math.PI / 8, 0).castShadow = false;
    mk(cyl(7.6, 7.9, 4, 8), M.found, 0, -2.3, 0, g, 0, Math.PI / 8, 0).castShadow = false;
    mk(new THREE.RingGeometry(4.2, 4.8, 64), M.orange, 0, 0.32, 0, g, -Math.PI / 2, 0, 0);
    mk(new THREE.RingGeometry(5.6, 5.75, 64), M.white, 0, 0.32, 0, g, -Math.PI / 2, 0, 0);
    const hc = document.createElement('canvas'); hc.width = hc.height = 128; const hx = hc.getContext('2d');
    hx.fillStyle = '#e8e4dc'; hx.font = 'bold 110px sans-serif'; hx.textAlign = 'center'; hx.fillText('H', 64, 104);
    const ht = new THREE.CanvasTexture(hc); ht.colorSpace = THREE.SRGBColorSpace;
    mk(new THREE.PlaneGeometry(3, 3), new THREE.MeshStandardMaterial({ map: ht, transparent: true, roughness: 0.8 }), 0, 0.33, 0, g, -Math.PI / 2, 0, 0);
    a.lights = [];
    for (let i = 0; i < 8; i++) { const an = i * Math.PI / 4 + Math.PI / 8; mk(cyl(0.15, 0.2, 0.15, 12), M.dark, Math.cos(an) * 6.6, 0.38, Math.sin(an) * 6.6, g); a.lights.push(glow(0xffaa33, 1.0, g, Math.cos(an) * 6.6, 0.55, Math.sin(an) * 6.6)); }
    // 信标塔
    const tw = new THREE.Group(); tw.position.set(8.6, 0, 0); g.add(tw);
    for (const [x, z] of [[-0.35, -0.35], [0.35, -0.35], [0.35, 0.35], [-0.35, 0.35]]) rod(V(x * 1.6, 0, z * 1.6), V(x * 0.5, 8.5, z * 0.5), 0.05, M.metal, tw);
    for (let y = 1; y < 8.5; y += 1.1) { const s = 1.6 - (y / 8.5) * 1.1; mk(new THREE.TorusGeometry(s * 0.5, 0.025, 4, 4), M.metal, 0, y, 0, tw, Math.PI / 2, 0, Math.PI / 4); }
    const dish = mk(new THREE.SphereGeometry(0.9, 24, 8, 0, Math.PI * 2, 0, Math.PI / 3), M.white, 0, 8.4, 0.4, tw); dish.rotation.set(-1.0, 0, 0);
    a.tip = glow(0xff3030, 1.6, tw, 0, 9.3, 0);
    mk(rbox(1.2, 1.0, 0.8, 0.08), M.dark, -9.6, 0.5, 4.5, g); gauge(g, -9.6, 0.6, 4.92);
  },
});

// ================= 着陆舱「方舟一号」 =================
export function makeLanderHD() {
  const g = new THREE.Group(), R = rng(5);
  // 隔热罩
  mk(lathe([[0, 1.0], [2.6, 1.05], [3.25, 1.25], [3.35, 1.45], [3.2, 1.6], [0, 1.6]], 48), M.ablative, 0, 0, 0, g);
  // 主舱体：略带弧度的锥台
  mk(lathe([[3.05, 1.6], [3.0, 2.2], [2.75, 3.4], [2.35, 4.6], [1.95, 5.6], [1.75, 6.0], [0, 6.0]], 48), M.white, 0, 0, 0, g);
  mk(lathe([[3.02, 2.05], [3.04, 2.35], [2.98, 2.4]], 48), M.orange, 0, 0, 0, g);
  mk(lathe([[2.0, 5.45], [2.02, 5.6], [1.95, 5.62]], 48), M.orange, 0, 0, 0, g);
  // 对接环与头锥
  mk(cyl(1.6, 1.75, 0.35, 40), M.panel, 0, 6.15, 0, g);
  mk(new THREE.TorusGeometry(1.25, 0.12, 10, 40), M.metal, 0, 6.38, 0, g, Math.PI / 2, 0, 0);
  mk(new THREE.SphereGeometry(1.15, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2), M.white, 0, 6.35, 0, g).scale.y = 0.6;
  bolts(g, 1.45, 6.34, 16, 0.04);
  // 舷窗
  const win = porthole(g, 0, 4.55, 2.33, 0.36, 0, -0.33);
  porthole(g, -0.95, 4.35, 2.2, 0.26, -0.42, -0.33); porthole(g, 0.95, 4.35, 2.2, 0.26, 0.42, -0.33);
  // 舱门与舷梯（朝 +x）
  const door = new THREE.Group(); door.position.set(2.82, 2.75, 0); door.rotation.set(0, Math.PI / 2, 0.22); g.add(door);
  mk(rbox(1.25, 1.75, 0.14, 0.12), M.metal, 0, 0, 0, door);
  mk(rbox(1.05, 1.55, 0.1, 0.1), M.panel, 0, 0, 0.06, door);
  mk(rbox(0.1, 0.45, 0.08, 0.03), M.chrome, 0.38, -0.05, 0.13, door);
  porthole(door, 0, 0.45, 0.13, 0.15);
  hazard(door, 1.25, 0.1, 0, -0.92, 0.08);
  for (let i = 0; i < 6; i++) mk(rbox(0.9, 0.06, 0.28, 0.02), M.metal, 3.3 + i * 0.2, 1.75 - i * 0.29, 0, g);
  rod(V(3.2, 1.9, -0.48), V(4.4, 0.1, -0.48), 0.035, M.metal, g); rod(V(3.2, 1.9, 0.48), V(4.4, 0.1, 0.48), 0.035, M.metal, g);
  // RCS 姿态推进器
  for (let i = 0; i < 4; i++) {
    const an = i * Math.PI / 2 + Math.PI / 4;
    const q = new THREE.Group(); q.position.set(Math.cos(an) * 2.15, 5.0, Math.sin(an) * 2.15); q.rotation.y = -an; g.add(q);
    mk(rbox(0.36, 0.36, 0.36, 0.05), M.dark, 0, 0, 0, q);
    for (const [dx, dy] of [[0.25, 0], [-0.25, 0], [0, 0.25], [0, -0.25]]) {
      const c = mk(new THREE.ConeGeometry(0.07, 0.16, 10, 1, true), M.metal, 0, dy, dx, q);
      c.rotation.x = dy ? (dy > 0 ? 0 : Math.PI) : (dx > 0 ? Math.PI / 2 : -Math.PI / 2);
    }
  }
  // 主发动机
  for (let i = 0; i < 4; i++) {
    const an = i * Math.PI / 2;
    const n = mk(lathe([[0.18, 1.05], [0.22, 0.85], [0.42, 0.45], [0.55, 0.2], [0.5, 0.2], [0.38, 0.45], [0.15, 0.85]], 24), M.dark, Math.cos(an) * 1.2, 0, Math.sin(an) * 1.2, g);
    n.material = M.metal;
  }
  mk(cyl(0.7, 0.9, 0.5, 24), M.dark, 0, 0.8, 0, g);
  // 着陆腿：上撑杆、关节、液压活塞、斜撑、脚垫
  for (let i = 0; i < 4; i++) {
    const an = i * Math.PI / 2 + Math.PI / 4, c = Math.cos(an), s = Math.sin(an);
    const hip = V(c * 2.7, 2.1, s * 2.7), knee = V(c * 3.55, 1.0, s * 3.55), foot = V(c * 4.1, 0.18, s * 4.1);
    rod(hip, knee, 0.11, M.white, g);
    mk(new THREE.SphereGeometry(0.15, 12, 8), M.metal, knee.x, knee.y, knee.z, g);
    rod(knee, foot, 0.075, M.chrome, g);
    rod(knee.clone().lerp(foot, 0.3), knee.clone().lerp(foot, 0.3).add(V(0, 0.01, 0)), 0.1, M.metal, g);
    rod(V(c * 2.4, 1.3, s * 2.4), knee.clone().lerp(foot, 0.25), 0.05, M.metal, g);
    rod(V(c * 2.6 - s * 0.6, 1.7, s * 2.6 + c * 0.6), knee, 0.035, M.metal, g);
    rod(V(c * 2.6 + s * 0.6, 1.7, s * 2.6 - c * 0.6), knee, 0.035, M.metal, g);
    mk(lathe([[0, 0], [0.55, 0], [0.6, 0.06], [0.35, 0.2], [0.1, 0.22], [0, 0.22]], 24), M.metal, foot.x, 0, foot.z, g);
  }
  // 天线阵与线缆
  mk(cyl(0.04, 0.05, 1.8, 8), M.metal, 0.6, 7.1, -0.4, g);
  const dish = mk(new THREE.SphereGeometry(0.5, 24, 8, 0, Math.PI * 2, 0, Math.PI / 3.2), M.white, -0.7, 6.95, 0.3, g); dish.rotation.set(-0.8, 0.6, 0);
  mk(cyl(0.04, 0.04, 0.8, 6), M.metal, -0.7, 6.55, 0.3, g);
  tube([V(-1.6, 5.7, -1.4), V(-2.3, 4.3, -1.9), V(-2.9, 2.6, -2.1), V(-3.05, 1.7, -2.2)], 0.05, M.dark, g);
  tube([V(1.6, 5.7, -1.4), V(2.3, 4.3, -1.9), V(2.9, 2.6, -2.05)], 0.04, M.orange, g);
  greebles(g, R, 14, -1.2, 1.2, 2.4, 3.6, -2.95, Math.PI);
  // 舷号
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 96;
  const cx = cv.getContext('2d'); cx.clearRect(0, 0, 512, 96);
  cx.fillStyle = '#d4581c'; cx.font = 'bold 54px sans-serif'; cx.textAlign = 'center'; cx.fillText('方舟一号 · ARK-1', 256, 66);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  const lbl = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.64), new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.6 }));
  lbl.position.set(0, 3.2, -2.87); lbl.rotation.set(0.32, Math.PI, 0); g.add(lbl);
  const beacon = glow(0x66ff99, 1.4, g, 0.6, 8.05, -0.4);
  return { group: g, beacon, window: win };
}

// ================= 锈蚀蛛：分节肢体、晶体背甲、发光关节 =================
const cb = new THREE.MeshStandardMaterial({ color: 0x2a1512, roughness: 0.28, metalness: 0.7, flatShading: true });
const cleg = new THREE.MeshStandardMaterial({ color: 0x2a1512, roughness: 0.35, metalness: 0.7 });
export function makeCrawlerHD(scale, crystalMat, eyeMat) {
  const g = new THREE.Group(), inner = new THREE.Group(); g.add(inner);
  const joint = new THREE.MeshStandardMaterial({ color: 0x220800, emissive: crystalMat.emissive, emissiveIntensity: 1.6 });
  // 身体：胸节 + 腹节 + 头
  const thorax = mk(new THREE.IcosahedronGeometry(0.75, 1), cb, 0, 1.0, 0.2, inner); thorax.scale.set(1.05, 0.62, 1.0);
  const abd = mk(new THREE.IcosahedronGeometry(0.85, 1), cb, 0, 1.1, -0.85, inner); abd.scale.set(0.95, 0.7, 1.25);
  const head = mk(new THREE.IcosahedronGeometry(0.42, 1), cb, 0, 0.95, 1.0, inner); head.scale.set(1.1, 0.7, 1.0);
  // 背甲上的晶簇
  const R = rng(Math.floor(Math.random() * 1e6) + 1);
  for (let i = 0; i < 9; i++) {
    const c = mk(new THREE.OctahedronGeometry(0.22 + R() * 0.15, 0), crystalMat, (R() - 0.5) * 0.9, 1.45 + R() * 0.25, -1.1 + R() * 1.4, inner, (R() - 0.5) * 0.8, R() * 3, (R() - 0.5) * 0.8);
    c.scale.y = 1.8 + R() * 1.4;
  }
  // 眼与颚
  for (const [x, y, s] of [[-0.17, 1.03, 0.05], [0.17, 1.03, 0.05], [-0.1, 1.12, 0.035], [0.1, 1.12, 0.035]]) mk(new THREE.SphereGeometry(s, 10, 8), eyeMat, x, y, 1.36, inner);
  for (const s of [-1, 1]) { const m = mk(new THREE.ConeGeometry(0.06, 0.45, 6), cb, s * 0.16, 0.78, 1.42, inner); m.rotation.set(Math.PI / 2 + 0.3, 0, s * 0.35); }
  // 六条分节腿
  const legs = [];
  for (let i = 0; i < 6; i++) {
    const side = i < 3 ? -1 : 1, k = (i % 3) - 1;
    const hip = new THREE.Group(); hip.position.set(side * 0.62, 1.0, k * 0.55 + 0.1); inner.add(hip);
    const p0 = V(0, 0, 0), p1 = V(side * 0.75, 0.45, k * 0.15), p2 = V(side * 1.35, 0.1, k * 0.25), p3 = V(side * 1.55, -0.98, k * 0.35);
    rod(p0, p1, 0.08, cleg, hip, 14); rod(p1, p2, 0.065, cleg, hip, 14); rod(p2, p3, 0.045, cleg, hip, 14);
    for (const p of [p1, p2]) mk(new THREE.SphereGeometry(0.09, 8, 6), joint, p.x, p.y, p.z, hip);
    mk(new THREE.ConeGeometry(0.05, 0.18, 6), crystalMat, p3.x, p3.y - 0.05, p3.z, hip, Math.PI, 0, 0);
    hip.userData.phase = (i % 2) * Math.PI + k * 0.5; hip.userData.side = side;
    legs.push(hip);
  }
  g.scale.setScalar(scale);
  return { group: g, legs, inner };
}
