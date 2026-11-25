import * as THREE from 'three';
import { G } from './state.js';
import { M, glow } from './models.js';
import { getHeight } from './terrain.js';

// —— 空中交通：城市达到「小镇」级后，悬浮小艇沿着环形航线在城市上空穿梭；夜里亮起前灯与尾灯 ——
const cars = [];
let built = 0;
const body = new THREE.MeshStandardMaterial({ color: 0xe8e4dc, roughness: 0.35, metalness: 0.5 });
const dark = new THREE.MeshStandardMaterial({ color: 0x1c2026, roughness: 0.3, metalness: 0.7 });
const glass = new THREE.MeshStandardMaterial({ color: 0x223344, roughness: 0.05, metalness: 0.9, emissive: 0x0a1a2a });

function makeCar(seed) {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 1.8, 6, 12), seed % 3 === 0 ? M.orange : body);
  hull.rotation.x = Math.PI / 2; hull.scale.set(1, 1, 0.7); g.add(hull);
  const cab = new THREE.Mesh(new THREE.SphereGeometry(0.5, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), glass); cab.position.set(0, 0.25, 0.25); cab.scale.set(0.9, 0.7, 1.3); g.add(cab);
  for (const s of [-1, 1]) { const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.9, 10), dark); pod.rotation.x = Math.PI / 2; pod.position.set(s * 0.75, -0.1, -0.3); g.add(pod); }
  const head = glow(0xfff2d8, 1.2, g, 0, 0.05, 1.85), tail = glow(0xff3a2a, 0.9, g, 0, 0.05, -1.75);
  // 两侧细灯带，夜里勾出艇身轮廓
  for (const s of [-1, 1]) { const st = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 1.6), new THREE.MeshBasicMaterial({ color: 0x8fe6ff })); st.position.set(s * 0.56, 0.05, 0); g.add(st); }
  const jets = [glow(0x7fc8ff, 1.0, g, -0.75, -0.1, -0.8), glow(0x7fc8ff, 1.0, g, 0.75, -0.1, -0.8)];
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { g, head, tail, jets };
}

// 航线：围绕城市中心的椭圆，不同高度、方向和速度
function addCar(i) {
  const c = makeCar(i);
  G.scene.add(c.g);
  const R = 50 + (i % 4) * 22 + Math.random() * 10;
  cars.push({ ...c, R, Rz: R * (0.7 + Math.random() * 0.3), alt: 16 + (i % 3) * 7, a: Math.random() * Math.PI * 2, sp: (0.11 + Math.random() * 0.06) * (i % 2 ? 1 : -1), ph: Math.random() * 6, rot: Math.random() * 0.6 });
}

export function updateTraffic(dt) {
  const want = (G.cityLevel || 0) >= 2 ? Math.min(14, 4 + ((G.cityLevel || 0) - 2) * 4) : 0;
  while (built < want) addCar(built++);
  if (!cars.length) return;
  const night = G.time.night, t = performance.now() * 0.001;
  for (const c of cars) {
    c.a += c.sp * dt * (60 / c.R);
    const x = Math.cos(c.a) * c.R, z = Math.sin(c.a) * c.Rz;
    const px = x * Math.cos(c.rot) - z * Math.sin(c.rot), pz = x * Math.sin(c.rot) + z * Math.cos(c.rot);
    const gy = Math.max(0, getHeight(px, pz));
    c.g.position.set(px, gy + c.alt + Math.sin(t * 0.7 + c.ph) * 1.2, pz);
    // 朝向：沿切线
    const dx = -Math.sin(c.a) * c.R * Math.sign(c.sp), dz = Math.cos(c.a) * c.Rz * Math.sign(c.sp);
    const tx = dx * Math.cos(c.rot) - dz * Math.sin(c.rot), tz = dx * Math.sin(c.rot) + dz * Math.cos(c.rot);
    c.g.rotation.set(0, Math.atan2(tx, tz), -Math.sign(c.sp) * 0.18);
    const lit = 0.25 + night * 0.75;
    c.head.material.opacity = lit; c.tail.material.opacity = lit * (0.7 + Math.sin(t * 6 + c.ph) * 0.3);
    c.head.scale.setScalar(0.7 + night * 0.9);
    c.jets.forEach(j => { j.material.opacity = 0.5 + Math.random() * 0.3; });
  }
}
