import * as THREE from 'three';
import { G } from './state.js';
import { glowTexture } from './models.js';
import { getHeight } from './terrain.js';

const debris = [];
const shardGeo = new THREE.OctahedronGeometry(0.22, 0);

// 粒子池：一套加色（火花、光）与一套普通混合（尘土）
class Particles {
  constructor(scene, max, additive, size) {
    this.max = max; this.n = 0;
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 4);
    this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.base = new Float32Array(max * 4); this.grav = new Float32Array(max); this.drag = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    this.pa = new THREE.BufferAttribute(this.pos, 3); this.ca = new THREE.BufferAttribute(this.col, 4);
    this.pa.setUsage(THREE.DynamicDrawUsage); this.ca.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.pa); g.setAttribute('color', this.ca);
    this.mat = new THREE.PointsMaterial({ size, map: glowTexture(), vertexColors: true, transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, sizeAttenuation: true });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false;
    scene.add(this.points);
  }
  emit(x, y, z, vx, vy, vz, r, g, b, a, life, grav = 0, drag = 0) {
    let i = this.n < this.max ? this.n++ : Math.floor(Math.random() * this.max);
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.base[i * 4] = r; this.base[i * 4 + 1] = g; this.base[i * 4 + 2] = b; this.base[i * 4 + 3] = a;
    this.life[i] = life; this.maxLife[i] = life; this.grav[i] = grav; this.drag[i] = drag;
  }
  update(dt) {
    let n = this.n;
    for (let i = 0; i < n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        n--;
        if (i !== n) {
          for (let k = 0; k < 3; k++) { this.pos[i * 3 + k] = this.pos[n * 3 + k]; this.vel[i * 3 + k] = this.vel[n * 3 + k]; }
          for (let k = 0; k < 4; k++) this.base[i * 4 + k] = this.base[n * 4 + k];
          this.life[i] = this.life[n]; this.maxLife[i] = this.maxLife[n]; this.grav[i] = this.grav[n]; this.drag[i] = this.drag[n];
          i--;
        }
        continue;
      }
      const d = 1 - this.drag[i] * dt;
      this.vel[i * 3] *= d; this.vel[i * 3 + 2] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const f = this.life[i] / this.maxLife[i];
      this.col[i * 4] = this.base[i * 4]; this.col[i * 4 + 1] = this.base[i * 4 + 1]; this.col[i * 4 + 2] = this.base[i * 4 + 2];
      this.col[i * 4 + 3] = this.base[i * 4 + 3] * Math.min(1, f * 2.5);
    }
    this.n = n;
    this.points.geometry.setDrawRange(0, n);
    this.pa.needsUpdate = true; this.ca.needsUpdate = true;
  }
}

let sparks, dust, ambient, rain, fwk;
export function initFx(scene) {
  sparks = new Particles(scene, 3000, true, 0.35);
  fwk = new Particles(scene, 4000, true, 1.3);
  dust = new Particles(scene, 2500, false, 1.6);
  // 飘浮在空中的细尘 / 沙尘暴
  const ag = new THREE.BufferGeometry(), ap = new Float32Array(1500 * 3);
  for (let i = 0; i < ap.length; i++) ap[i] = (Math.random() - 0.5) * 80;
  ag.setAttribute('position', new THREE.BufferAttribute(ap, 3));
  ambient = new THREE.Points(ag, new THREE.PointsMaterial({ size: 0.25, map: glowTexture(), color: 0xffd0a0, transparent: true, opacity: 0.5, depthWrite: false }));
  ambient.frustumCulled = false; scene.add(ambient);
  const rg = new THREE.BufferGeometry(), rp = new Float32Array(3000 * 3);
  for (let i = 0; i < rp.length; i++) rp[i] = (Math.random() - 0.5) * 70;
  rg.setAttribute('position', new THREE.BufferAttribute(rp, 3));
  rain = new THREE.Points(rg, new THREE.PointsMaterial({ size: 0.18, map: glowTexture(), color: 0xbfe0ff, transparent: true, opacity: 0, depthWrite: false }));
  rain.frustumCulled = false; scene.add(rain);
}

export const fx = {
  // 实体碎片：带重力、会弹跳、慢慢消失
  debris(p, material, n = 8, speed = 7, size = 1) {
    for (let i = 0; i < n; i++) {
      if (debris.length > 160) { const d = debris.shift(); G.scene.remove(d.m); }
      const m = new THREE.Mesh(shardGeo, material); m.castShadow = true;
      const s = size * (0.5 + Math.random() * 0.9); m.scale.set(s, s * (1 + Math.random()), s);
      m.position.copy(p);
      G.scene.add(m);
      const a = Math.random() * Math.PI * 2, u = 0.4 + Math.random() * 0.8;
      debris.push({ m, v: new THREE.Vector3(Math.cos(a) * speed * (1 - u * 0.5), speed * u, Math.sin(a) * speed * (1 - u * 0.5)), w: new THREE.Vector3(Math.random() * 10, Math.random() * 10, Math.random() * 10), life: 3 + Math.random() * 2, s });
    }
  },
  spark(p, color = [1, 0.6, 0.2], n = 6, speed = 4, life = 0.5) {
    for (let i = 0; i < n; i++) sparks.emit(p.x, p.y, p.z, (Math.random() - 0.5) * speed, Math.random() * speed, (Math.random() - 0.5) * speed, color[0], color[1], color[2], 1, life * (0.5 + Math.random()), 6, 1);
  },
  burst(p, color = [1, 0.5, 0.2], n = 40, speed = 9) {
    for (let i = 0; i < n; i++) {
      const u = Math.random() * 2 - 1, th = Math.random() * 6.283, r = Math.sqrt(1 - u * u), s = speed * (0.4 + Math.random() * 0.6);
      sparks.emit(p.x, p.y, p.z, r * Math.cos(th) * s, u * s, r * Math.sin(th) * s, color[0], color[1], color[2], 1, 0.4 + Math.random() * 0.6, 4, 2);
    }
  },
  dustPuff(p, n = 10, spread = 2, color = [0.72, 0.45, 0.3]) {
    for (let i = 0; i < n; i++) dust.emit(p.x + (Math.random() - 0.5) * spread, p.y + Math.random() * 0.5, p.z + (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * 3, Math.random() * 1.5, (Math.random() - 0.5) * 3, color[0], color[1], color[2], 0.55, 1.2 + Math.random(), -0.2, 1.5);
  },
  ring(p, radius, n = 60, color = [0.72, 0.45, 0.3]) {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 6.283, s = 6 + Math.random() * 6;
      dust.emit(p.x + Math.cos(a) * radius, p.y + 0.4, p.z + Math.sin(a) * radius, Math.cos(a) * s, 0.5 + Math.random(), Math.sin(a) * s, color[0], color[1], color[2], 0.6, 1.5 + Math.random(), -0.1, 1.2);
    }
  },
  firework(p, vx, vy, vz, c) { fwk.emit(p.x, p.y, p.z, vx, vy, vz, c[0] * 1.6, c[1] * 1.6, c[2] * 1.6, 1, 1.6 + Math.random() * 0.8, 3, 1.4); },
  trail(p, color, size = 1) {
    sparks.emit(p.x, p.y, p.z, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4, color[0] * size, color[1] * size, color[2] * size, 1, 0.18, 0, 0);
  },
  flame(p, down = 1) {
    sparks.emit(p.x + (Math.random() - 0.5) * 0.6, p.y, p.z + (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 2, -6 * down - Math.random() * 6, (Math.random() - 0.5) * 2, 1, 0.55, 0.2, 1, 0.35, 0, 0);
  },
  rise(p, color, spread = 6) {
    sparks.emit(p.x + (Math.random() - 0.5) * spread, p.y, p.z + (Math.random() - 0.5) * spread, 0, 6 + Math.random() * 6, 0, color[0], color[1], color[2], 1, 2.5, -0.5, 0);
  },
};

let rainAmt = 0;
export function updateFx(dt, cam) {
  sparks.update(dt); dust.update(dt); fwk.update(dt);
  for (let i = debris.length - 1; i >= 0; i--) {
    const d = debris[i];
    d.life -= dt; d.v.y -= 9 * dt;
    d.m.position.addScaledVector(d.v, dt);
    d.m.rotation.x += d.w.x * dt; d.m.rotation.y += d.w.y * dt; d.m.rotation.z += d.w.z * dt;
    const gy = getHeight(d.m.position.x, d.m.position.z) + 0.1;
    if (d.m.position.y < gy) { d.m.position.y = gy; d.v.y = Math.abs(d.v.y) * 0.35; d.v.x *= 0.6; d.v.z *= 0.6; d.w.multiplyScalar(0.5); }
    if (d.life < 1) d.m.scale.setScalar(Math.max(0.001, d.s * d.life));
    if (d.life <= 0) { G.scene.remove(d.m); debris.splice(i, 1); }
  }
  const storm = G.storm;
  const ap = ambient.geometry.attributes.position, arr = ap.array;
  const wind = 1 + storm * 26;
  for (let i = 0; i < arr.length; i += 3) {
    arr[i] += wind * dt; arr[i + 1] += Math.sin(i + performance.now() * 0.0005) * dt * 0.2 - storm * dt * 1.5;
    // 粒子围绕相机循环
    const R = 40;
    if (arr[i] - cam.x > R) arr[i] -= 2 * R; if (arr[i] - cam.x < -R) arr[i] += 2 * R;
    if (arr[i + 1] - cam.y > R / 2) arr[i + 1] -= R; if (arr[i + 1] - cam.y < -R / 2) arr[i + 1] += R;
    if (arr[i + 2] - cam.z > R) arr[i + 2] -= 2 * R; if (arr[i + 2] - cam.z < -R) arr[i + 2] += 2 * R;
  }
  ap.needsUpdate = true;
  ambient.material.size = 0.25 + storm * 0.3;
  ambient.material.opacity = 0.3 + storm * 0.25;
  ambient.material.color.setRGB(1, 0.8 - G.time.night * 0.4, 0.62 - G.time.night * 0.3);

  rainAmt += ((G.raining ? 1 : 0) - rainAmt) * dt * 0.5;
  rain.material.opacity = rainAmt * 0.6;
  if (rainAmt > 0.01) {
    const rp = rain.geometry.attributes.position.array;
    for (let i = 0; i < rp.length; i += 3) {
      rp[i + 1] -= 22 * dt; rp[i] += 2 * dt;
      if (rp[i + 1] < cam.y - 20) rp[i + 1] += 40;
      if (rp[i] - cam.x > 35) rp[i] -= 70; if (rp[i] - cam.x < -35) rp[i] += 70;
      if (rp[i + 2] - cam.z > 35) rp[i + 2] -= 70; if (rp[i + 2] - cam.z < -35) rp[i + 2] += 70;
    }
    rain.geometry.attributes.position.needsUpdate = true;
  }
}
