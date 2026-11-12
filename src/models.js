import * as THREE from 'three';

// 共享材质
export const M = {
  white: new THREE.MeshStandardMaterial({ color: 0xe9e4da, roughness: 0.55, metalness: 0.1 }),
  panel: new THREE.MeshStandardMaterial({ color: 0xc9c3b8, roughness: 0.6, metalness: 0.2 }),
  metal: new THREE.MeshStandardMaterial({ color: 0x7c7f86, roughness: 0.4, metalness: 0.7 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x2c2f36, roughness: 0.5, metalness: 0.5 }),
  orange: new THREE.MeshStandardMaterial({ color: 0xff7a2a, roughness: 0.5, metalness: 0.1 }),
  glass: new THREE.MeshStandardMaterial({ color: 0x9fd4ff, roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.35 }),
  window: new THREE.MeshStandardMaterial({ color: 0x223040, emissive: 0xffc27a, emissiveIntensity: 0.0, roughness: 0.2 }),
  solar: new THREE.MeshStandardMaterial({ color: 0x1b2c5a, roughness: 0.25, metalness: 0.8 }),
  plant: new THREE.MeshStandardMaterial({ color: 0x4fae4a, roughness: 0.8, flatShading: true }),
  cyan: new THREE.MeshStandardMaterial({ color: 0x113344, emissive: 0x33e6ff, emissiveIntensity: 2 }),
  red: new THREE.MeshStandardMaterial({ color: 0x330000, emissive: 0xff2a2a, emissiveIntensity: 3 }),
  lamp: new THREE.MeshStandardMaterial({ color: 0x332211, emissive: 0xffd9a0, emissiveIntensity: 0 }),
  found: new THREE.MeshStandardMaterial({ color: 0x8b8378, roughness: 0.9 }),
  flame: new THREE.MeshBasicMaterial({ color: 0xffb060, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }),
};

// 太阳能板的格子纹理
{
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const g = cv.getContext('2d'); g.fillStyle = '#1d3266'; g.fillRect(0, 0, 64, 64);
  g.strokeStyle = '#9fb4e0'; g.lineWidth = 1.5;
  for (let i = 0; i <= 64; i += 16) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 64); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(64, i); g.stroke(); }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 2);
  M.solar.map = t; M.solar.color.set(0xffffff);
}

function mk(geo, mat, x = 0, y = 0, z = 0, parent) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, s = 16) => new THREE.CylinderGeometry(rt, rb, h, s);

let glowTex;
export function glowTexture() {
  if (glowTex) return glowTex;
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const g = cv.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  glowTex = new THREE.CanvasTexture(cv);
  return glowTex;
}
export function glow(color, size, parent, x = 0, y = 0, z = 0) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  s.scale.set(size, size, 1); s.position.set(x, y, z);
  if (parent) parent.add(s);
  return s;
}

function foundation(g, r, square = false) {
  const f = square ? mk(box(r * 2, 4, r * 2), M.found, 0, -1.8, 0, g) : mk(cyl(r, r * 1.05, 4, 20), M.found, 0, -1.8, 0, g);
  f.castShadow = false; f.userData.found = true;
}

export const BUILD_MODELS = {
  solar(g, a) {
    foundation(g, 2.2, true);
    mk(cyl(0.18, 0.25, 2.2), M.metal, 0, 1.1, 0, g);
    const pivot = new THREE.Group(); pivot.position.y = 2.3; g.add(pivot);
    const p = mk(box(4.2, 0.12, 2.8), M.solar, 0, 0, 0, pivot);
    mk(box(4.4, 0.08, 0.1), M.metal, 0, -0.05, 1.42, pivot); mk(box(4.4, 0.08, 0.1), M.metal, 0, -0.05, -1.42, pivot);
    a.pivot = pivot; a.panel = p;
  },
  oxygen(g, a) {
    foundation(g, 3);
    mk(cyl(1.0, 1.0, 3.6), M.white, -1.3, 1.8, 0, g); mk(new THREE.SphereGeometry(1.0, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), M.white, -1.3, 3.6, 0, g);
    mk(cyl(1.0, 1.0, 3.6), M.white, 1.3, 1.8, 0, g); mk(new THREE.SphereGeometry(1.0, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), M.white, 1.3, 3.6, 0, g);
    mk(cyl(1.02, 1.02, 0.3), M.orange, -1.3, 2.4, 0, g); mk(cyl(1.02, 1.02, 0.3), M.orange, 1.3, 2.4, 0, g);
    mk(box(1.4, 1.6, 1.8), M.panel, 0, 0.8, 1.0, g);
    mk(cyl(0.12, 0.12, 2.6), M.metal, 0, 3.2, 0, g).rotation.z = Math.PI / 2;
    const fan = new THREE.Group(); fan.position.set(0, 1.75, 1.95); g.add(fan);
    for (let i = 0; i < 4; i++) { const b = mk(box(0.15, 0.7, 0.05), M.dark, 0, 0, 0, fan); b.rotation.z = i * Math.PI / 2; b.position.set(Math.sin(i * Math.PI / 2) * 0.3, Math.cos(i * Math.PI / 2) * 0.3, 0); b.rotation.z = -i * Math.PI / 2; }
    a.fan = fan;
    a.light = glow(0x66ddff, 1.2, g, 0, 1.75, 2.0);
  },
  habitat(g, a) {
    foundation(g, 6.2);
    mk(cyl(6, 6, 1.2, 28), M.panel, 0, 0.6, 0, g);
    const dome = mk(new THREE.SphereGeometry(5.8, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), M.white, 0, 1.2, 0, g);
    dome.scale.y = 0.85;
    const ring = mk(new THREE.CylinderGeometry(5.72, 5.84, 0.7, 28, 1, true), M.window, 0, 2.0, 0, g);
    mk(cyl(0.1, 0.1, 3), M.metal, 0, 7.4, 0, g); a.tip = glow(0xff4040, 1.2, g, 0, 8.9, 0);
    // 气闸舱
    mk(box(2.2, 2.6, 2.8), M.white, 0, 1.3, 6.4, g); mk(box(1.2, 2.0, 0.1), M.dark, 0, 1.1, 7.82, g);
    mk(box(2.3, 0.3, 2.9), M.orange, 0, 2.7, 6.4, g);
    a.windows = [ring];
  },
  extractor(g, a) {
    foundation(g, 2.6, true);
    mk(box(4, 0.6, 4), M.panel, 0, 0.3, 0, g);
    for (const [x, z] of [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]]) { const l = mk(cyl(0.12, 0.15, 6), M.metal, x * 0.7, 3.3, z * 0.7, g); l.rotation.set(z * 0.08, 0, -x * 0.08); }
    mk(box(1.6, 0.4, 1.6), M.orange, 0, 6.2, 0, g);
    const drill = mk(cyl(0.3, 0.3, 4.5), M.metal, 0, 3, 0, g);
    mk(cyl(0.9, 0.9, 1.6), M.white, 1.7, 1.4, 1.2, g);
    a.drill = drill;
    a.light = glow(0x9fdcff, 1.2, g, 1.7, 2.5, 1.2);
  },
  greenhouse(g, a) {
    foundation(g, 5, true);
    mk(box(10, 0.5, 6), M.panel, 0, 0.25, 0, g);
    const arch = mk(new THREE.CylinderGeometry(3, 3, 10, 20, 1, false, 0, Math.PI), M.glass, 0, 0.5, 0, g);
    arch.rotation.set(0, 0, Math.PI / 2);
    arch.castShadow = false;
    for (let i = 0; i < 5; i++) mk(new THREE.TorusGeometry(3, 0.08, 6, 20, Math.PI), M.white, -4.5 + i * 2.25, 0.5, 0, g).rotation.y = Math.PI / 2;
    for (let i = 0; i < 14; i++) {
      const x = -4.2 + (i % 7) * 1.4, z = i < 7 ? -1.2 : 1.2;
      const p = mk(new THREE.ConeGeometry(0.45, 1.2 + (i % 3) * 0.3, 6), M.plant, x, 1.2, z, g);
      p.castShadow = false;
    }
    mk(box(9.6, 0.3, 0.5), M.dark, 0, 0.7, -1.2, g); mk(box(9.6, 0.3, 0.5), M.dark, 0, 0.7, 1.2, g);
    a.light = glow(0xff66cc, 4, g, 0, 2.5, 0);
  },
  fabricator(g, a) {
    foundation(g, 4, true);
    mk(box(7, 3.6, 5), M.panel, 0, 1.8, 0, g);
    mk(box(7.1, 0.4, 5.1), M.orange, 0, 3.4, 0, g);
    mk(box(3, 2.6, 0.1), M.dark, 0, 1.3, 2.52, g);
    const arm = new THREE.Group(); arm.position.set(2.2, 3.6, 0); g.add(arm);
    mk(cyl(0.35, 0.45, 0.6), M.metal, 0, 0.3, 0, arm);
    const up = mk(box(0.3, 2.2, 0.3), M.orange, 0, 1.4, 0, arm);
    const tip = mk(box(0.25, 1.6, 0.25), M.metal, 0, 2.4, 0.6, arm); tip.rotation.x = 0.9;
    a.arm = arm; a.spark = glow(0xffcc66, 1.2, g, 2.2, 5.7, 1.2);
    mk(box(1.2, 1.2, 1.2), M.dark, -2.4, 0.6, 3.2, g); mk(box(1, 1, 1), M.dark, -1.1, 0.5, 3.1, g);
  },
  turret(g, a) {
    foundation(g, 1.8);
    mk(cyl(1.4, 1.8, 1.2, 12), M.metal, 0, 0.6, 0, g);
    mk(cyl(0.5, 0.7, 1.2, 10), M.dark, 0, 1.8, 0, g);
    const head = new THREE.Group(); head.position.y = 2.7; g.add(head);
    mk(box(1.6, 1.0, 1.8), M.white, 0, 0, 0, head);
    mk(box(1.65, 0.2, 1.85), M.orange, 0, 0.35, 0, head);
    mk(cyl(0.12, 0.12, 2.2, 8), M.dark, -0.4, 0, -1.6, head).rotation.x = Math.PI / 2;
    mk(cyl(0.12, 0.12, 2.2, 8), M.dark, 0.4, 0, -1.6, head).rotation.x = Math.PI / 2;
    a.eye = glow(0x33e6ff, 0.9, head, 0, 0.1, -0.95);
    a.head = head;
  },
  reactor(g, a) {
    foundation(g, 5.2);
    mk(cyl(5, 5.2, 1.4, 24), M.panel, 0, 0.7, 0, g);
    const core = mk(new THREE.SphereGeometry(2.0, 20, 14), M.cyan, 0, 4.2, 0, g); core.castShadow = false;
    const r1 = mk(new THREE.TorusGeometry(3.2, 0.35, 10, 32), M.white, 0, 4.2, 0, g);
    const r2 = mk(new THREE.TorusGeometry(3.2, 0.35, 10, 32), M.white, 0, 4.2, 0, g); r2.rotation.x = Math.PI / 2;
    for (let i = 0; i < 4; i++) { const an = i * Math.PI / 2; mk(box(0.6, 3, 0.6), M.metal, Math.cos(an) * 3.6, 2.2, Math.sin(an) * 3.6, g); }
    a.core = core; a.r1 = r1; a.r2 = r2; a.light = glow(0x33e6ff, 9, g, 0, 4.2, 0);
  },
  beacon(g, a) {
    const pad = mk(cyl(7, 7.3, 0.6, 8), M.found, 0, 0.0, 0, g);
    mk(cyl(7.3, 7.6, 4, 8), M.found, 0, -2.3, 0, g).castShadow = false;
    mk(new THREE.RingGeometry(4.2, 4.8, 32), M.orange, 0, 0.32, 0, g).rotation.x = -Math.PI / 2;
    mk(new THREE.RingGeometry(1.5, 2, 4), M.white, 0, 0.32, 0, g).rotation.x = -Math.PI / 2;
    a.lights = [];
    for (let i = 0; i < 8; i++) { const an = i * Math.PI / 4 + Math.PI / 8; a.lights.push(glow(0xffaa33, 1.2, g, Math.cos(an) * 6.6, 0.5, Math.sin(an) * 6.6)); }
    mk(cyl(0.18, 0.3, 9, 8), M.metal, 8.6, 4.2, 0, g);
    mk(box(1.6, 0.1, 1.2), M.white, 8.6, 8.7, 0, g).rotation.z = 0.4;
    a.tip = glow(0xff3030, 2, g, 8.6, 9.2, 0);
    pad.castShadow = false;
  },
  lamp(g, a) {
    mk(cyl(0.4, 0.5, 0.4, 8), M.found, 0, 0, 0, g);
    mk(cyl(0.08, 0.1, 4.2, 6), M.metal, 0, 2.1, 0, g);
    mk(box(0.6, 0.2, 0.6), M.dark, 0, 4.3, 0, g);
    const bulb = mk(new THREE.SphereGeometry(0.2, 8, 6), M.lamp, 0, 4.15, 0, g); bulb.castShadow = false;
    a.glow = glow(0xffd9a0, 5, g, 0, 4.1, 0);
  },
  terraformer(g, a) {
    foundation(g, 7);
    mk(cyl(7, 7.5, 2, 6), M.panel, 0, 1, 0, g);
    mk(cyl(2.5, 4.5, 26, 6), M.white, 0, 15, 0, g);
    for (let i = 0; i < 3; i++) mk(cyl(4.6 - i * 0.7, 4.6 - i * 0.7, 0.8, 6), M.orange, 0, 6 + i * 8, 0, g);
    a.rings = [];
    for (let i = 0; i < 3; i++) { const r = mk(new THREE.TorusGeometry(6 - i * 1.2, 0.25, 8, 40), M.cyan, 0, 10 + i * 8, 0, g); r.castShadow = false; a.rings.push(r); }
    for (let i = 0; i < 6; i++) { const an = i * Math.PI / 3; const p = mk(box(1.2, 10, 1.2), M.metal, Math.cos(an) * 6, 5, Math.sin(an) * 6, g); p.rotation.y = -an; }
    const beam = mk(new THREE.CylinderGeometry(0.6, 1.4, 400, 12, 1, true),new THREE.MeshBasicMaterial({ color: 0x66e6ff, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }), 0, 228, 0, g);
    beam.castShadow = false; beam.receiveShadow = false;
    a.beam = beam; a.top = glow(0x66e6ff, 10, g, 0, 28, 0);
  },
};

// 着陆舱（玩家的家：方舟一号）
export function makeLander() {
  const g = new THREE.Group();
  const body = mk(cyl(1.6, 3.2, 4.2, 16), M.white, 0, 3.6, 0, g);
  mk(cyl(1.6, 1.6, 0.5, 16), M.orange, 0, 5.9, 0, g);
  mk(new THREE.SphereGeometry(1.6, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), M.white, 0, 6.15, 0, g);
  mk(cyl(3.25, 3.25, 0.4, 16), M.dark, 0, 1.4, 0, g);
  for (let i = 0; i < 4; i++) {
    const an = i * Math.PI / 2 + Math.PI / 4;
    const leg = mk(cyl(0.12, 0.12, 3.4, 6), M.metal, Math.cos(an) * 3.3, 0.9, Math.sin(an) * 3.3, g);
    leg.rotation.set(Math.sin(an) * 0.45, 0, -Math.cos(an) * 0.45);
    mk(cyl(0.6, 0.6, 0.15, 10), M.metal, Math.cos(an) * 4.0, 0.05, Math.sin(an) * 4.0, g);
  }
  mk(cyl(0.9, 1.3, 1, 12), M.dark, 0, 0.9, 0, g);
  const win = mk(box(1.2, 0.8, 0.2), M.window, 0, 4.4, 2.5, g); win.rotation.x = -0.35;
  // 舷号
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 64;
  const cx = cv.getContext('2d'); cx.fillStyle = '#e9e4da'; cx.fillRect(0, 0, 256, 64);
  cx.fillStyle = '#d4581c'; cx.font = 'bold 40px sans-serif'; cx.textAlign = 'center'; cx.fillText('方舟一号  ARK-1', 128, 46);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  const lbl = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.8), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }));
  lbl.position.set(0, 3.0, -2.75); lbl.rotation.y = Math.PI; lbl.rotation.x = 0.35; g.add(lbl);
  const beacon = glow(0x66ff99, 1.6, g, 0, 7.9, 0);
  mk(cyl(0.05, 0.05, 1.4, 4), M.metal, 0, 7.2, 0, g);
  return { group: g, beacon, window: win };
}

// 移民运输舱
export function makeShuttle() {
  const g = new THREE.Group();
  mk(cyl(1.2, 2.4, 5, 12), M.white, 0, 3.5, 0, g);
  mk(new THREE.ConeGeometry(1.2, 2.2, 12), M.white, 0, 7.1, 0, g);
  mk(cyl(2.45, 2.45, 0.4, 12), M.orange, 0, 2.4, 0, g);
  for (let i = 0; i < 3; i++) {
    const an = i * Math.PI * 2 / 3;
    const fin = mk(box(0.2, 2.4, 1.6), M.panel, Math.cos(an) * 2.3, 1.6, Math.sin(an) * 2.3, g); fin.rotation.y = -an;
  }
  const flame = new THREE.Mesh(new THREE.ConeGeometry(1.1, 5, 12, 1, true), M.flame);
  flame.rotation.x = Math.PI; flame.position.y = -1.6; g.add(flame);
  const fg = glow(0xffa040, 9, g, 0, -0.5, 0);
  return { group: g, flame, flameGlow: fg };
}

// 移民（宇航服小人）
const visorMats = [0xff9a3a, 0x3ac0ff, 0x7dff8a, 0xff6fb5, 0xffe14a].map(c => new THREE.MeshStandardMaterial({ color: 0x111111, emissive: c, emissiveIntensity: 0.6, roughness: 0.1, metalness: 0.6 }));
const suitMats = [0xece6dc, 0xd9dde4, 0xe8d6c4].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.7 }));
export function makeColonist(seed) {
  const g = new THREE.Group();
  const suit = suitMats[seed % suitMats.length];
  const body = mk(new THREE.CapsuleGeometry(0.28, 0.6, 4, 8), suit, 0, 1.0, 0, g);
  const head = mk(new THREE.SphereGeometry(0.24, 12, 8), suit, 0, 1.62, 0, g);
  const visor = mk(new THREE.SphereGeometry(0.2, 12, 8, -Math.PI * 0.4, Math.PI * 0.8, Math.PI * 0.3, Math.PI * 0.35), visorMats[seed % visorMats.length], 0, 1.62, 0.06, g);
  mk(box(0.42, 0.5, 0.2), M.orange, 0, 1.1, -0.28, g);
  const legL = mk(cyl(0.1, 0.09, 0.6, 6), suit, -0.13, 0.3, 0, g);
  const legR = mk(cyl(0.1, 0.09, 0.6, 6), suit, 0.13, 0.3, 0, g);
  const armL = mk(cyl(0.08, 0.07, 0.55, 6), suit, -0.36, 1.05, 0, g);
  const armR = mk(cyl(0.08, 0.07, 0.55, 6), suit, 0.36, 1.05, 0, g);
  return { group: g, legL, legR, armL, armR, body, head, visor };
}

// 锈蚀蛛：火星原生的晶体生物
const crawlerBody = new THREE.MeshStandardMaterial({ color: 0x3a1d18, roughness: 0.3, metalness: 0.6, flatShading: true, emissive: 0x200500 });
const crawlerCrystal = new THREE.MeshStandardMaterial({ color: 0x8a2a10, emissive: 0xff4a10, emissiveIntensity: 0.8, roughness: 0.2, flatShading: true });
const crawlerEye = new THREE.MeshBasicMaterial({ color: 0xffd040 });
export function makeCrawler(scale = 1) {
  const g = new THREE.Group();
  const inner = new THREE.Group(); g.add(inner);
  const body = mk(new THREE.IcosahedronGeometry(0.9, 0), crawlerBody, 0, 1.0, 0, inner); body.scale.set(1, 0.6, 1.3);
  for (let i = 0; i < 5; i++) {
    const c = mk(new THREE.OctahedronGeometry(0.35, 0), crawlerCrystal, (Math.random() - 0.5) * 0.8, 1.5 + Math.random() * 0.3, (Math.random() - 0.5) * 1.2, inner);
    c.scale.y = 1.6 + Math.random(); c.rotation.set(Math.random() - 0.5, 0, Math.random() - 0.5);
  }
  mk(new THREE.SphereGeometry(0.1, 6, 4), crawlerEye, -0.25, 1.1, 1.1, inner); mk(new THREE.SphereGeometry(0.1, 6, 4), crawlerEye, 0.25, 1.1, 1.1, inner);
  const legs = [];
  for (let i = 0; i < 6; i++) {
    const side = i < 3 ? -1 : 1, k = (i % 3) - 1;
    const hip = new THREE.Group(); hip.position.set(side * 0.6, 1.0, k * 0.6); inner.add(hip);
    const up = mk(cyl(0.07, 0.09, 1.1, 5), crawlerBody, side * 0.45, 0.25, 0, hip); up.rotation.z = side * -1.1;
    const lo = mk(cyl(0.05, 0.07, 1.2, 5), crawlerBody, side * 0.95, -0.35, 0, hip); lo.rotation.z = side * 0.35;
    hip.userData.phase = (i % 2) * Math.PI + k * 0.5; hip.userData.side = side;
    legs.push(hip);
  }
  g.scale.setScalar(scale);
  return { group: g, legs, inner };
}
