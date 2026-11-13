import * as THREE from 'three';
import { G } from './state.js';
import { makeCrawler, glow } from './models.js';
import { getHeight, HALF } from './terrain.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { recalcColony } from './buildings.js';
import { THREAT_FROM } from './story.js';

// —— 弹道 ——
const projectiles = [];
const COLORS = { player: 0x66e6ff, turret: 0xffb040 };
export function shoot(from, dir, dmg, owner) {
  const s = glow(COLORS[owner], owner === 'player' ? 1.1 : 0.9, G.scene);
  s.position.copy(from);
  projectiles.push({ pos: from.clone(), vel: dir.clone().multiplyScalar(owner === 'player' ? 110 : 80), life: 1.4, dmg, owner, s });
}

function hitEnemy(p, radiusBonus = 0) {
  for (const e of G.enemies) {
    if (e.dead) continue;
    const r = 1.3 * e.scale + radiusBonus;
    const dx = p.x - e.pos.x, dy = p.y - (e.pos.y + 1.0 * e.scale), dz = p.z - e.pos.z;
    if (dx * dx + dy * dy + dz * dz < r * r) return e;
  }
  return null;
}

export function updateProjectiles(dt) {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const pr = projectiles[i];
    pr.life -= dt;
    let dead = pr.life <= 0;
    // 分步检测，避免高速穿透
    const steps = 3;
    for (let k = 0; k < steps && !dead; k++) {
      pr.pos.addScaledVector(pr.vel, dt / steps);
      const e = hitEnemy(pr.pos);
      if (e) { damageEnemy(e, pr.dmg, pr.owner); fx.spark(pr.pos, [0.5, 0.9, 1], 10, 6); dead = true; }
      else if (pr.pos.y < getHeight(pr.pos.x, pr.pos.z)) { fx.spark(pr.pos, [1, 0.7, 0.4], 6, 4); fx.dustPuff(pr.pos, 3, 0.5); dead = true; }
    }
    pr.s.position.copy(pr.pos);
    if (Math.random() < 0.8) fx.trail(pr.pos, pr.owner === 'player' ? [0.3, 0.8, 1] : [1, 0.6, 0.2], 0.6);
    if (dead) { G.scene.remove(pr.s); projectiles.splice(i, 1); }
  }
}

// —— 锈蚀蛛 ——
export function spawnCrawler(x, z, guardian = false) {
  const scale = guardian ? 1.35 : 0.85 + Math.random() * 0.35;
  const m = makeCrawler(scale);
  const y = getHeight(x, z);
  m.group.position.set(x, y, z);
  G.scene.add(m.group);
  const hp = guardian ? 90 : 36 + G.time.day * 3;
  const e = { ...m, pos: m.group.position, hp, maxHp: hp, scale, guardian, home: guardian ? new THREE.Vector3(x, y, z) : null,
    awake: !guardian, speed: (guardian ? 5.2 : 4.4) + Math.random() * 1.2, phase: Math.random() * 6, atk: 0, flash: 0, sink: 0, target: null, retarget: 0 };
  G.enemies.push(e);
  return e;
}

export function damageEnemy(e, dmg, owner) {
  if (e.dead) return;
  e.hp -= dmg; e.flash = 0.12; e.awake = true;
  if (owner === 'player') audio.play('hit');
  if (e.hp <= 0) killEnemy(e, owner);
}

function killEnemy(e, owner) {
  e.dead = true;
  const p = e.pos.clone(); p.y += 1;
  fx.burst(p, [1, 0.4, 0.1], 50, 9); fx.dustPuff(p, 12, 2);
  fx.debris(p, e.legs[0].children[0].material, 6, 5, 0.45 * e.scale);
  fx.debris(p, e.inner.children[1].material, 8, 6, 0.5 * e.scale);
  audio.play('kill');
  G.scene.remove(e.group);
  G.stats.kills++;
  if (e.guardian) G.stats.guardKills = (G.stats.guardKills || 0) + 1;
  // 晶体残骸里含有钛
  const drop = e.guardian ? 3 : (Math.random() < 0.5 ? 1 : 0);
  if (drop) { G.res.titanium += drop; G.stats.mined.titanium += drop; G.events.emit('pickup', { type: 'titanium', n: drop, note: '晶体残骸' }); }
}

let spawnT = 0, nightBudget = 0, wasNight = false, guardT = 5;
function colonyCenter() {
  if (!G.buildings.length) return new THREE.Vector3(0, 0, 0);
  const c = new THREE.Vector3();
  for (const b of G.buildings) { c.x += b.x; c.z += b.z; }
  return c.multiplyScalar(1 / G.buildings.length);
}

export function updateEnemies(dt) {
  const P = G.player.pos;
  const night = G.time.night > 0.6;
  const threat = G.chapter >= THREAT_FROM && G.terraform < 1;
  if (night && !wasNight && threat) {
    nightBudget = Math.min(3 + (G.nightsSurvived || 0) * 2 + Math.floor(G.colony.pop / 4), 26);
    G.nightsSurvived = (G.nightsSurvived || 0) + 1;
    G.events.emit('nightfall', nightBudget);
  }
  wasNight = night;
  if (night && threat && nightBudget > 0) {
    spawnT -= dt;
    if (spawnT <= 0) {
      spawnT = 3 + Math.random() * 5;
      const c = colonyCenter();
      const n = Math.min(nightBudget, 1 + Math.floor(Math.random() * 3));
      const a = Math.random() * Math.PI * 2, d = 110 + Math.random() * 50;
      for (let i = 0; i < n; i++) {
        const x = THREE.MathUtils.clamp(c.x + Math.cos(a) * d + (Math.random() - 0.5) * 10, -HALF + 180, HALF - 180);
        const z = THREE.MathUtils.clamp(c.z + Math.sin(a) * d + (Math.random() - 0.5) * 10, -HALF + 180, HALF - 180);
        const e = spawnCrawler(x, z); e.sink = -2; // 从地底钻出
        fx.dustPuff(new THREE.Vector3(x, getHeight(x, z), z), 14, 3);
      }
      nightBudget -= n;
    }
  }
  // 钛矿守卫
  guardT -= dt;
  if (guardT <= 0) {
    guardT = 30;
    for (const n of G.nodes) {
      if (n.type !== 'titanium') continue;
      if (Math.hypot(n.x - P.x, n.z - P.z) < 90) continue;
      const has = G.enemies.some(e => e.guardian && !e.dead && e.home.distanceTo(n.mesh.position) < 25);
      if (!has && G.terraform < 1) { const a = Math.random() * 6.28; spawnCrawler(n.x + Math.cos(a) * 6, n.z + Math.sin(a) * 6, true); }
    }
  }

  const now = performance.now() * 0.001;
  for (let i = G.enemies.length - 1; i >= 0; i--) {
    const e = G.enemies[i];
    if (e.dead) { G.enemies.splice(i, 1); continue; }
    // 黎明时钻回地底
    if (!e.guardian && (G.time.night < 0.3 || G.terraform >= 1)) {
      e.sink -= dt * 1.5;
      e.group.position.y = getHeight(e.pos.x, e.pos.z) + e.sink;
      if (e.sink < -3) { G.scene.remove(e.group); G.enemies.splice(i, 1); }
      continue;
    }
    if (e.sink < 0) e.sink = Math.min(0, e.sink + dt * 1.5);
    const dP = Math.hypot(P.x - e.pos.x, P.z - e.pos.z);
    // 选目标
    e.retarget -= dt;
    if (e.retarget <= 0) {
      e.retarget = 1;
      e.target = null;
      if (e.guardian) {
        if (dP < 22) e.awake = true;
        if (e.awake && dP < 70 && !G.player.dead) e.target = { kind: 'player' };
        else { e.awake = false; e.target = { kind: 'home' }; }
      } else {
        if (dP < 32 && !G.player.dead) e.target = { kind: 'player' };
        else {
          let best = null, bd = 400;
          for (const b of G.buildings) {
            if (b.type === 'lamp' || b.broken) continue;
            const d = Math.hypot(b.x - e.pos.x, b.z - e.pos.z) - b.def.r;
            if (d < bd) { bd = d; best = b; }
          }
          e.target = best ? { kind: 'building', b: best } : { kind: 'player' };
        }
      }
    }
    let tx = P.x, tz = P.z, reach = 1.8 * e.scale;
    const t = e.target;
    if (t?.kind === 'building') { if (!G.buildings.includes(t.b) || t.b.broken) { e.retarget = 0; continue; } tx = t.b.x; tz = t.b.z; reach = t.b.def.r * 0.9 + 1.4; }
    else if (t?.kind === 'home') { tx = e.home.x; tz = e.home.z; reach = 2; }
    let dx = tx - e.pos.x, dz = tz - e.pos.z;
    const dist = Math.hypot(dx, dz);
    let moving = false;
    if (dist > reach) {
      dx /= dist; dz /= dist;
      // 群体分离
      for (const o of G.enemies) {
        if (o === e) continue;
        const ox = e.pos.x - o.pos.x, oz = e.pos.z - o.pos.z, od = Math.hypot(ox, oz);
        if (od < 2.5 && od > 0.01) { dx += ox / od * 0.6; dz += oz / od * 0.6; }
      }
      const l = Math.hypot(dx, dz) || 1;
      const sp = e.speed * (e.target?.kind === 'home' ? 0.5 : 1);
      e.pos.x += dx / l * sp * dt; e.pos.z += dz / l * sp * dt;
      // 不穿过建筑
      for (const c of G.colliders.query(e.pos.x, e.pos.z)) {
        if (c.kind !== 'building') continue;
        const cx = e.pos.x - c.x, cz = e.pos.z - c.z, cd = Math.hypot(cx, cz), rr = c.r + 0.8;
        if (cd < rr && cd > 0.01) { e.pos.x = c.x + cx / cd * rr; e.pos.z = c.z + cz / cd * rr; }
      }
      e.group.rotation.y = Math.atan2(dx, dz);
      moving = true;
    } else if (t && t.kind !== 'home') {
      e.group.rotation.y = Math.atan2(dx, dz);
      e.atk -= dt;
      if (e.atk <= 0) {
        e.atk = 1.0;
        if (t.kind === 'player') G.player.damage(e.guardian ? 14 : 9, e.pos);
        else { t.b.hp -= e.guardian ? 20 : 8; fx.spark(new THREE.Vector3(e.pos.x, e.pos.y + 1, e.pos.z), [1, 0.5, 0.2], 8, 5); if (t.b.hp <= 0) { t.b.hp = 0; t.b.broken = true; e.retarget = 0; G.events.emit('broken', t.b); recalcColony(); } }
        e.inner.position.z = 0.6;
      }
    }
    e.inner.position.z *= 0.85;
    e.pos.y = getHeight(e.pos.x, e.pos.z) + e.sink;
    // 腿部动画
    const ph = now * (moving ? 12 : 2) + e.phase;
    for (const l of e.legs) {
      l.rotation.x = Math.sin(ph + l.userData.phase) * (moving ? 0.5 : 0.08);
      l.rotation.z = Math.max(0, Math.cos(ph + l.userData.phase)) * 0.25 * l.userData.side * (moving ? 1 : 0);
    }
    e.inner.position.y = Math.abs(Math.sin(ph)) * 0.08;
    if (e.flash > 0) { e.flash -= dt; e.inner.scale.setScalar(1 + e.flash * 1.2); } else e.inner.scale.setScalar(1);
    if (Math.random() < dt * 4) fx.trail(new THREE.Vector3(e.pos.x, e.pos.y + 1.6 * e.scale, e.pos.z), [1, 0.35, 0.1], 0.8);
  }
}

// 射线与敌人的相交（激光、准星）
export function rayEnemy(origin, dir, maxDist) {
  let best = null, bt = maxDist;
  const oc = new THREE.Vector3();
  for (const e of G.enemies) {
    if (e.dead) continue;
    const r = 1.3 * e.scale;
    oc.set(e.pos.x - origin.x, e.pos.y + 1.0 * e.scale - origin.y, e.pos.z - origin.z);
    const tca = oc.dot(dir); if (tca < 0) continue;
    const d2 = oc.lengthSq() - tca * tca; if (d2 > r * r) continue;
    const t = tca - Math.sqrt(r * r - d2);
    if (t < bt) { bt = t; best = e; }
  }
  return best ? { e: best, dist: bt } : null;
}

export function clearEnemies() {
  for (const e of G.enemies) G.scene.remove(e.group);
  G.enemies.length = 0;
  for (const p of projectiles) G.scene.remove(p.s);
  projectiles.length = 0;
}
