import * as THREE from 'three';
import { G } from './state.js';
import { D, has } from './systems.js';
import { P } from './planets.js';
import { getHeight, HALF } from './terrain.js';
import { input } from './input.js';
import { audio } from './audio.js';
import { fx } from './fx.js';
import { lifeSupportAt } from './buildings.js';

const GRAVITY = P.gravity, EYE = 1.7;
export const LANDER_POS = new THREE.Vector3(-6, 0, -6);

export class Player {
  constructor(camera) {
    this.cam = camera;
    this.pos = new THREE.Vector3(0, 0, 6);
    this.pos.y = getHeight(this.pos.x, this.pos.z);
    this.vel = new THREE.Vector3();
    this.yaw = Math.PI * 0.85; this.pitch = -0.05;
    this.onGround = true;
    this.maxHealth = 100; this.health = 100;
    this.maxO2 = 100; this.o2 = 100;
    this.energy = 100;
    this.bob = 0; this.stepT = 0; this.landDip = 0;
    this.dead = false; this.hurtT = 0; this.flashlight = false;
    this.inLife = false; this.alarmT = 0; this.lastHitDir = 0;
    this.moving = false; this.sprinting = false; this.jetting = false; this.roll = 0;
    this.fwd = new THREE.Vector3();
  }

  get eye() { return new THREE.Vector3(this.pos.x, this.pos.y + EYE + this.bobY, this.pos.z); }

  damage(n, from) {
    if (this.dead) return;
    const armor = G.upgrades.armor ? 0.6 : 1;
    this.health -= n * armor;
    this.hurtT = 0.5;
    if (from) this.lastHitDir = Math.atan2(from.x - this.pos.x, from.z - this.pos.z);
    audio.play('hurt');
    G.events.emit('hurt', n);
    if (this.health <= 0) this.die('你倒在了火星的尘土里');
  }

  die(why) {
    if (this.dead) return;
    this.dead = true; this.health = 0;
    G.events.emit('death', why);
  }

  respawn() {
    const home = G.buildings.find(b => b.type === 'habitat') || null;
    const p = home ? new THREE.Vector3(home.x, 0, home.z + 9) : LANDER_POS.clone().add(new THREE.Vector3(5, 0, 8));
    // 损失部分资源
    for (const k in G.res) G.res[k] = Math.floor(G.res[k] * 0.75);
    this.pos.set(p.x, getHeight(p.x, p.z), p.z);
    this.vel.set(0, 0, 0);
    this.health = this.maxHealth; this.o2 = this.maxO2; this.energy = 100;
    this.dead = false;
  }

  update(dt) {
    this.maxO2 = G.upgrades.tank ? 180 : 100;
    this.maxHealth = G.upgrades.armor ? 150 : 100;
    if (this.dead) { this.cam.position.y -= dt * 0.3; return; }

    // 视角
    if (G.locked) {
      this.yaw -= input.dx * input.sens;
      this.pitch = THREE.MathUtils.clamp(this.pitch - input.dy * input.sens, -1.5, 1.5);
    }

    // 移动
    let fx_ = 0, fz = 0;
    if (!G.menuOpen) {
      if (input.down('KeyW') || input.down('ArrowUp')) fz -= 1;
      if (input.down('KeyS') || input.down('ArrowDown')) fz += 1;
      if (input.down('KeyA') || input.down('ArrowLeft')) fx_ -= 1;
      if (input.down('KeyD') || input.down('ArrowRight')) fx_ += 1;
    }
    const len = Math.hypot(fx_, fz);
    this.moving = len > 0;
    this.sprinting = this.moving && input.down('ShiftLeft') && fz < 0 && this.o2 > 5;
    const speed = this.sprinting ? 10.5 : 6.2;
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    let wx = 0, wz = 0;
    if (len) { const a = fx_ / len, b = fz / len; wx = a * cos + b * sin; wz = -a * sin + b * cos; }
    const accel = this.onGround ? 12 : 2.5;
    this.vel.x += (wx * speed - this.vel.x) * Math.min(1, accel * dt);
    this.vel.z += (wz * speed - this.vel.z) * Math.min(1, accel * dt);

    // 跳跃与喷气背包
    this.jetting = false;
    if (!G.menuOpen && input.hit('Space') && this.onGround) { this.vel.y = 5.4; this.onGround = false; audio.play('jump'); }
    else if (!G.menuOpen && input.down('Space') && !this.onGround && G.upgrades.jetpack && this.energy > 1 && this.vel.y < 6) {
      this.vel.y += 15 * dt; this.energy -= 22 * dt; this.jetting = true;
      if (Math.random() < 0.5) audio.play('jet');
      const back = new THREE.Vector3(this.pos.x + sin * 0.4, this.pos.y + 0.8, this.pos.z + cos * 0.4);
      fx.flame(back); fx.flame(back);
    }
    this.vel.y -= GRAVITY * dt;

    const nx = this.pos.x + this.vel.x * dt, nz = this.pos.z + this.vel.z * dt;
    this.pos.x = THREE.MathUtils.clamp(nx, -HALF + 120, HALF - 120);
    this.pos.z = THREE.MathUtils.clamp(nz, -HALF + 120, HALF - 120);
    this.pos.y += this.vel.y * dt;

    // 碰撞：推出圆形障碍物
    for (const c of G.colliders.query(this.pos.x, this.pos.z)) {
      const dx = this.pos.x - c.x, dz = this.pos.z - c.z, d = Math.hypot(dx, dz), r = c.r + 0.45;
      if (d < r && d > 0.0001) {
        // 能跳上矮小的障碍
        if (c.kind === 'rock' && this.pos.y > getHeight(c.x, c.z) + c.r * 0.6) continue;
        this.pos.x = c.x + dx / d * r; this.pos.z = c.z + dz / d * r;
      }
    }
    const ground = getHeight(this.pos.x, this.pos.z);
    if (this.pos.y <= ground) {
      if (!this.onGround && this.vel.y < -4) { this.landDip = Math.min(0.35, -this.vel.y * 0.04); audio.play('land'); fx.dustPuff(this.pos, 6, 1); }
      this.pos.y = ground; this.vel.y = 0; this.onGround = true;
    } else if (this.onGround && this.pos.y - ground < 0.5 && this.vel.y <= 0) {
      this.pos.y = ground; this.vel.y = 0;
    } else this.onGround = false;

    // 镜头晃动与脚步
    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (this.onGround && hs > 0.5) {
      this.bob += dt * hs * 1.25;
      this.stepT += dt * hs;
      if (this.stepT > 2.6) { this.stepT = 0; audio.play('step'); if (Math.random() < 0.4) fx.dustPuff(this.pos, 2, 0.4); }
    }
    this.landDip *= Math.pow(0.002, dt);
    this.bobY = Math.sin(this.bob * 2) * 0.05 * Math.min(1, hs / 6) - this.landDip;
    this.cam.position.set(this.pos.x, this.pos.y + EYE + this.bobY, this.pos.z);
    // 冲刺时视野变宽，左右平移时镜头微倾
    this.roll += ((-fx_ * 0.025) - this.roll) * Math.min(1, dt * 6);
    const fovT = (G.baseFov || 72) + (this.sprinting ? 8 : 0) + (this.jetting ? 4 : 0);
    if (Math.abs(this.cam.fov - fovT) > 0.05) { this.cam.fov += (fovT - this.cam.fov) * Math.min(1, dt * 5); this.cam.updateProjectionMatrix(); }
    this.cam.rotation.set(this.pitch, this.yaw, this.roll + Math.sin(this.bob) * 0.006 * Math.min(1, hs / 6), 'YXZ');
    this.cam.getWorldDirection(this.fwd);

    // 生存：氧气、生命、能量
    const ls = lifeSupportAt(this.pos);
    const landerNear = this.pos.distanceTo(LANDER_POS) < 11;
    this.inLife = !!ls || landerNear;
    if (this.inLife) {
      this.o2 = Math.min(this.maxO2, this.o2 + 30 * dt);
      this.health = Math.min(this.maxHealth, this.health + 4 * dt);
    } else {
      let drain = 0.55 + (this.sprinting ? 0.6 : 0) + (this.jetting ? 0.6 : 0);
      drain *= (1 + G.storm * 0.8) * D().o2 * (has('suit') ? 0.65 : 1);
      if (G.terraform >= 1) drain *= 0.5;
      this.o2 = Math.max(0, this.o2 - drain * dt);
    }
    if (this.o2 <= 0) { this.health -= 9 * dt; if (this.health <= 0) this.die('氧气耗尽'); }
    if (this.o2 < this.maxO2 * 0.2 && !this.inLife) {
      this.alarmT -= dt; if (this.alarmT <= 0) { this.alarmT = 2; audio.play('alarm'); }
    }
    if (!this.jetting) this.energy = Math.min(100, this.energy + (this.onGround ? 14 : 4) * dt);
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.health = Math.min(this.health, this.maxHealth);
  }
}
