import * as THREE from 'three';
import { G } from './state.js';
import { getHeight } from './terrain.js';
import { M, glow } from './models.js';
import { radio } from './story.js';
import { audio } from './audio.js';
import { PID } from './planets.js';

// 轨道天梯：城市达到「城市」级后，在远方拔地而起，直通轨道上的环形空间站
let root = null, climbers = [], beacons = [], rise = 0, station, ringA, ringB;
const POS = { mars: [-420, -380], europa: [400, -420], kepler: [-380, 420] }[PID] || [-420, -380];
const H = 2400;

function build() {
  root = new THREE.Group();
  const [x, z] = POS, y = getHeight(x, z);
  root.position.set(x, y - 2, z);
  const mk = (geo, mat, px, py, pz) => { const m = new THREE.Mesh(geo, mat); m.position.set(px, py, pz); m.castShadow = true; root.add(m); return m; };
  // 基座：阶梯式金字塔 + 六根斜撑
  for (let i = 0; i < 4; i++) mk(new THREE.CylinderGeometry(38 - i * 8, 42 - i * 8, 10, 6), i % 2 ? M.white : M.panel, 0, 5 + i * 10, 0);
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3, b = new THREE.Vector3(Math.cos(a) * 46, 0, Math.sin(a) * 46), t = new THREE.Vector3(0, 120, 0);
    const d = t.clone().sub(b), m = mk(new THREE.CylinderGeometry(2.2, 3.2, d.length(), 8), M.metal, 0, 0, 0);
    m.position.copy(b).add(t).multiplyScalar(0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  }
  // 主塔身与缆绳
  mk(new THREE.CylinderGeometry(6, 14, 160, 6), M.white, 0, 120, 0);
  const tether = new THREE.MeshBasicMaterial({ color: 0x9fe0ff, transparent: true, opacity: 0.55, fog: false, blending: THREE.AdditiveBlending, depthWrite: false });
  for (let i = 0; i < 3; i++) { const a = i * Math.PI * 2 / 3; mk(new THREE.CylinderGeometry(0.9, 1.4, H, 6), tether, Math.cos(a) * 3, 200 + H / 2, Math.sin(a) * 3).castShadow = false; }
  const core = new THREE.MeshStandardMaterial({ color: 0x223040, metalness: 0.8, roughness: 0.4, fog: false });
  mk(new THREE.CylinderGeometry(1.6, 1.6, H, 8), core, 0, 200 + H / 2, 0);
  // 高空航空灯
  for (let h = 260; h < H; h += 180) beacons.push(glow(0xff3a2a, 18, root, 0, h, 0));
  // 爬升舱
  for (let i = 0; i < 4; i++) {
    const c = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 10, 12), new THREE.MeshStandardMaterial({ color: 0xe8e4dc, metalness: 0.3, roughness: 0.5, fog: false }));
    c.add(body, glow(0x9fe0ff, 40, null, 0, 0, 0));
    root.add(c); climbers.push({ g: c, t: i / 4, dir: i % 2 ? 1 : -1 });
  }
  // 轨道空间站
  station = new THREE.Group(); station.position.y = 200 + H; root.add(station);
  const sm = new THREE.MeshStandardMaterial({ color: 0x8a8f99, metalness: 0.8, roughness: 0.35, emissive: 0x112233, fog: false });
  ringA = new THREE.Mesh(new THREE.TorusGeometry(160, 9, 12, 96), sm); ringA.rotation.x = Math.PI / 2; station.add(ringA);
  ringB = new THREE.Mesh(new THREE.TorusGeometry(110, 5, 10, 80), sm); ringB.rotation.x = Math.PI / 2; ringB.position.y = -40; station.add(ringB);
  for (let i = 0; i < 6; i++) { const s = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 160, 6), sm); s.rotation.z = Math.PI / 2; s.rotation.y = i * Math.PI / 6; station.add(s); }
  station.add(new THREE.Mesh(new THREE.SphereGeometry(30, 24, 16), sm));
  for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; station.add(glow(i % 2 ? 0xffd9a0 : 0x9fe0ff, 30, null, Math.cos(a) * 160, 0, Math.sin(a) * 160)); }
  root.scale.y = 0.001;
  G.scene.add(root);
}

export function updateMega(dt) {
  if (!root) {
    if ((G.cityLevel || 0) < 3) return;
    build();
    rise = G.megaSeen ? 1 : 0;
    if (!G.megaSeen) {
      G.megaSeen = true; audio.play('rumble');
      radio('方舟 · AI', '轨道天梯合龙。从今天起，殖民地与轨道之间只隔一部电梯。抬头看——它就在地平线上。');
      G.events.emit('toast', '轨道天梯完工');
    }
  }
  if (rise < 1) { rise = Math.min(1, rise + dt / 12); root.scale.y = Math.max(0.001, 1 - Math.pow(1 - rise, 3)); }
  const now = performance.now() * 0.001;
  for (const c of climbers) {
    c.t += dt * 0.012 * c.dir;
    if (c.t > 1) { c.t = 1; c.dir = -1; } if (c.t < 0) { c.t = 0; c.dir = 1; }
    c.g.position.y = 210 + c.t * (H - 20);
  }
  beacons.forEach((b, i) => { b.visible = Math.sin(now * 2 + i * 0.6) > 0.2; });
  station.rotation.y += dt * 0.02;
}
