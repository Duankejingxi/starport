import * as THREE from 'three';
import { G, canAfford, pay } from './state.js';
import { explode } from './cinefx.js';
import { BUILD_MODELS, M, CITY_MATS, glow } from './models.js';
import { P, PID, META } from './planets.js';
import { LEVELS, inTerritory } from './city.js';
import { connectBuilding, removeRoads, updateRoads } from './roads.js';
import { updateDrones, removeHubDrones } from './drones.js';
import { has, isFree } from './systems.js';
import { getHeight, slopeAt, HALF } from './terrain.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { sunDir } from './sky.js';

// chapter: 第几章解锁
export const DEFS = {
  solar:      { name: '太阳能阵列', icon: 'sun', cat: 'life', chapter: 0, cost: { iron: 8, silicon: 6 }, power: 4, r: 2.6, hp: 120, desc: '白天发电 4 单位，夜间降至 1.6。殖民地的心跳从这里开始。' },
  oxygen:     { name: '制氧站', icon: 'o2', cat: 'life', chapter: 0, cost: { iron: 12, silicon: 4, ice: 6 }, power: -2, r: 3.0, hp: 160, o2: 6, life: 14, desc: '电解水冰制造氧气。为 6 位居民供氧，并在 14 米内为你的宇航服补氧。' },
  lamp:       { name: '照明灯', icon: 'star', cat: 'life', chapter: 0, cost: { iron: 3 }, power: 0, r: 0.6, hp: 60, desc: '照亮火星的长夜。' },
  habitat:    { name: '居住穹顶', icon: 'dome', cat: 'life', chapter: 1, cost: { iron: 25, silicon: 12 }, power: -1, r: 6.4, hp: 300, housing: 4, life: 12, desc: '可住 4 人。穹顶里有暖光、植物和家人的照片。' },
  greenhouse: { name: '温室', icon: 'food', cat: 'life', chapter: 1, cost: { iron: 14, silicon: 16, ice: 8 }, power: -2, r: 5.4, hp: 160, food: 5, desc: '在火星土壤里种出第一棵土豆。供 5 人食物。' },
  extractor:  { name: '水冰提取器', icon: 'water', cat: 'life', chapter: 1, cost: { iron: 16, silicon: 4, ice: 4 }, power: -2, r: 2.8, hp: 160, water: 6, desc: '从地下冻土中钻取水。供 6 人用水。' },
  beacon:     { name: '着陆场', icon: 'ship', cat: 'city', chapter: 1, cost: { iron: 24, silicon: 14 }, power: -1, r: 7.4, hp: 250, desc: '向地球发出信号。条件满足时，移民飞船会在这里降落。' },
  fabricator: { name: '制造工坊', icon: 'wrench', cat: 'industry', chapter: 2, cost: { iron: 22, silicon: 14 }, power: -1, r: 4.6, hp: 220, desc: '靠近按 E 制造武器与装备。' },
  drones:     { name: '无人机站', icon: 'drone', cat: 'industry', chapter: 2, cost: { iron: 30, silicon: 22 }, power: -3, r: 3.8, hp: 220, desc: '派出采矿无人机，自动采集 100 米内的矿点并运回。升级后无人机更多，满级可采钛。' },
  turret:     { name: '防御炮塔', icon: 'shield', cat: 'defense', chapter: 2, cost: { iron: 22, silicon: 10 }, power: -2, r: 1.9, hp: 200, range: 40, desc: '自动攻击 40 米内的锈蚀蛛。需要电力。' },
  reactor:    { name: '聚变反应堆', icon: 'power', cat: 'industry', chapter: 3, cost: { iron: 40, silicon: 20, titanium: 12 }, power: 20, r: 5.4, hp: 400, desc: '昼夜不停 +20 ⚡。用火星的钛，点亮人类的第二颗太阳。' },
  lab:        { name: '研究所', icon: 'book', cat: 'industry', chapter: 2, level: 1, cost: { iron: 25, silicon: 25 }, power: -2, r: 4.2, hp: 260, rp: 1, desc: '居民在这里做研究，产出科研点数。人口越多越快。按 T 打开科研。' },
  trade:      { name: '星际贸易站', icon: 'ship', cat: 'city', chapter: 2, level: 1, cost: { iron: 30, silicon: 18 }, power: -2, r: 5.0, hp: 260, desc: '与地球和其他殖民地交换物资。靠近按 E 交易。' },
  plaza:      { name: '中央广场', icon: 'planet', cat: 'city', level: 1, cost: { iron: 20, silicon: 16 }, power: -1, r: 7.4, hp: 300, desc: '中心有一座全息地球。天黑后，居民们会来这里聚在一起，看一看故乡。' },
  apartment:  { name: '公寓塔', icon: 'tower', cat: 'city', level: 2, cost: { iron: 40, silicon: 25, titanium: 4 }, power: -3, r: 4.6, hp: 400, housing: 12, life: 12, desc: '可住 12 人。窗户里的灯光，是城市的星空。' },
  vfarm:      { name: '垂直农场', icon: 'food', cat: 'city', level: 2, cost: { iron: 30, silicon: 30, ice: 15 }, power: -4, r: 4.2, hp: 260, food: 14, desc: '十四层的立体农田。供 14 人食物。' },
  lifehub:    { name: '生态中枢', icon: 'o2', cat: 'city', level: 3, cost: { iron: 45, silicon: 30, ice: 30, titanium: 6 }, power: -5, r: 6.0, hp: 400, o2: 16, water: 16, life: 20, desc: '大型氧气与水循环系统。供 16 人氧气和用水，20 米内补氧。' },
  terraformer:{ name: '大气改造塔', icon: 'planet', cat: 'stellar', chapter: 4, only: 'terraformable', cost: { iron: 100, silicon: 60, titanium: 30, ice: 50 }, power: -12, r: 7.4, hp: 800, desc: '向天空释放温室气体与水汽。让这颗星球，真正成为家。' },
  launch:     { name: '星际发射台', icon: 'ship', cat: 'stellar', chapter: 5, level: PID === 'mars' ? 5 : 4, only: 'route', cost: { iron: 160, silicon: 120, titanium: 60, ice: 60 }, power: -15, r: 9.5, hp: 900, desc: '星际航线的起点。靠近按 E 打开星图，前往新的星球或回到已开拓的家园。' },
  monument:   { name: '文明纪念碑', icon: 'monument', cat: 'stellar', level: 5, only: 'final', cost: { iron: 150, silicon: 120, titanium: 80 }, power: -6, r: 6.5, hp: 900, desc: '三颗星球，一个人类。献给所有出发的人。' },
};
// —— 建筑等级：产出、耐久、范围随等级提升 ——
export const MAX_LV = 3;
const MUL = [1, 1, 1.6, 2.2];
const NO_UPGRADE = ['lamp', 'beacon', 'fabricator', 'plaza', 'trade', 'terraformer', 'launch', 'monument'];
export function canUpgrade(b) { return !NO_UPGRADE.includes(b.type) && (b.level || 1) < MAX_LV; }
export function stat(b, k) {
  const d = b.def, lv = b.level || 1, v = d[k];
  if (!v) return 0;
  if (k === 'power') return v > 0 ? v * MUL[lv] * (b.type === 'solar' && has('pv') ? 1.5 : 1) * (b.type === 'reactor' && has('fusion') ? 1.4 : 1) : v * (1 + 0.25 * (lv - 1));
  if (k === 'life') return v + 3 * (lv - 1);
  if (k === 'range') return v + 8 * (lv - 1) + (has('plasma') ? 10 : 0);
  if (k === 'hp') return v * (1 + 0.5 * (lv - 1)) * (has('alloy') ? 1.5 : 1);
  const tm = (k === 'o2' && has('sieve')) || (k === 'food' && has('hydro')) || (k === 'water' && has('drill')) ? 1.5 : 1;
  return Math.round(v * MUL[lv] * tm);
}
export function upgradeCost(b) {
  const lv = b.level || 1, c = {};
  for (const k in b.def.cost) c[k] = Math.ceil(b.def.cost[k] * (lv === 1 ? 0.8 : 1.3));
  c.titanium = (c.titanium || 0) + (lv === 1 ? 3 : 8);
  return c;
}
export function upgradeBuilding(b) {
  if (!canUpgrade(b)) return false;
  const cost = upgradeCost(b);
  if (!canAfford(cost)) return false;
  pay(cost);
  b.level = (b.level || 1) + 1;
  applyLevel(b, true);
  audio.play('place');
  fx.ring(new THREE.Vector3(b.x, b.y, b.z), b.def.r * 1.2, 60, [0.5, 0.9, 1]);
  recalcColony();
  return true;
}
function applyLevel(b, animate) {
  const lv = b.level || 1;
  b.maxHp = stat(b, 'hp'); b.hp = Math.min(b.maxHp, animate ? b.maxHp : b.hp);
  const s = 1 + (lv - 1) * 0.12;
  b.group.scale.set(s, b.group.scale.y, s);
  b.baseScale = s;
  // 屋顶等级灯
  if (b.anim._pips) b.anim._pips.forEach(p => b.group.remove(p));
  b.anim._pips = [];
  const top = Math.max(2.5, b.def.r * 0.9);
  for (let i = 1; i < lv; i++) b.anim._pips.push(glow(0xffb35c, 1.4, b.group, (i - lv / 2) * 0.9, top + 1.2, 0));
  if (animate) {
    b.buildT = 0.35;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(b.def.r * 1.05, 0.08, 6, 48), scanMat.clone());
    ring.rotation.x = Math.PI / 2; ring.position.set(b.x, b.y, b.z); G.scene.add(ring); b.anim._scan = ring;
  }
}
// 某座建筑当前能否建造
export function unlockState(k) {
  const d = DEFS[k];
  if (d.only === 'terraformable' && !P.terraformable) return { hide: true };
  if (d.only === 'route' && !P.next && !(META.visited || []).some(v => v.id !== PID)) return { hide: true };
  if (d.only === 'final' && P.next) return { hide: true };
  if (!isFree() && PID === 'mars' && d.chapter && d.chapter > G.chapter) return { ok: false, why: `剧情推进后解锁` };
  if (d.level && d.level > G.cityLevel) return { ok: false, why: `城市等级达到「${LEVELS[d.level].name}」解锁` };
  return { ok: true };
}
export const ORDER = ['solar', 'oxygen', 'lamp', 'habitat', 'greenhouse', 'extractor', 'beacon', 'fabricator', 'drones', 'lab', 'trade', 'turret', 'reactor', 'plaza', 'apartment', 'vfarm', 'lifehub', 'terraformer', 'launch', 'monument'];
// 停电时的供电优先级
const PRIORITY = ['oxygen', 'lifehub', 'turret', 'habitat', 'apartment', 'extractor', 'greenhouse', 'vfarm', 'beacon', 'plaza', 'lab', 'trade', 'drones', 'fabricator', 'terraformer', 'launch', 'monument'];

const scanMat = new THREE.MeshBasicMaterial({ color: 0x7fe6ff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
export function createBuilding(type, x, z, rot = 0, hp, animate = false, level = 1) {
  const def = DEFS[type];
  const group = new THREE.Group(), anim = {};
  BUILD_MODELS[type](group, anim);
  const y = getHeight(x, z);
  group.position.set(x, y, z); group.rotation.y = rot;
  G.scene.add(group);
  if (animate) {
    group.scale.set(1, 0.001, 1);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(def.r * 1.05, 0.08, 6, 48), scanMat.clone());
    ring.rotation.x = Math.PI / 2; ring.position.set(x, y, z); G.scene.add(ring); anim._scan = ring;
  }
  const b = { buildT: animate ? 0 : 1, type, def, x, z, y, rot, group, anim, hp: hp ?? def.hp, broken: hp !== undefined && hp <= 0, powered: true, t: Math.random() * 10, cool: 0 };
  b.collider = G.colliders.add({ x, z, r: def.r * (type === 'beacon' ? 0.15 : type === 'plaza' ? 0.28 : 0.9), kind: 'building', b });
  // 门口区域可以走进居住穹顶的范围外缘
  b.level = level;
  b.maxHp = stat(b, 'hp'); if (hp === undefined) b.hp = b.maxHp;
  if (level > 1) applyLevel(b, false);
  G.buildings.push(b);
  G.stats.built[type] = (G.stats.built[type] || 0) + 1;
  connectBuilding(b);
  recalcColony();
  return b;
}

export function destroyBuilding(b, refund = false) {
  if (refund) for (const k in b.def.cost) G.res[k] += Math.floor(b.def.cost[k] * 0.5);
  G.scene.remove(b.group);
  G.colliders.remove(b.collider);
  removeRoads(b);
  if (b.type === 'drones') removeHubDrones(b);
  const i = G.buildings.indexOf(b); if (i >= 0) G.buildings.splice(i, 1);
  G.stats.built[b.type] = Math.max(0, (G.stats.built[b.type] || 0) - 1);
  const p = new THREE.Vector3(b.x, b.y + 2, b.z);
  fx.burst(p, [1, 0.6, 0.3], 60, 10); fx.dustPuff(p, 30, b.def.r * 2); explode(p, Math.min(3, b.def.r * 0.45), 0xffa050);
  recalcColony();
}

export function count(type) { return G.buildings.filter(b => b.type === type).length; }

// 计算电力与生命维持
export function recalcColony() {
  const C = G.colony;
  const solarK = (G.time.elevation > 0.05 ? 1 : 0.4) * P.solar;
  let prod = 0, use = 0;
  for (const b of G.buildings) {
    if (b.broken) continue;
    const pw = stat(b, 'power');
    if (pw > 0) prod += b.type === 'solar' ? pw * solarK : pw;
    else use -= pw;
  }
  let budget = prod;
  for (const b of G.buildings) { b.powered = b.def.power >= 0 && !b.broken; b.maxHp = stat(b, 'hp'); }
  for (const type of PRIORITY) for (const b of G.buildings) {
    if (b.type !== type) continue;
    const pw = stat(b, 'power');
    if (!b.broken && budget >= -pw) { budget += pw; b.powered = true; }
  }
  C.powerProd = prod; C.powerUse = use; C.deficit = use > prod + 0.001;
  C.housing = 0; C.o2 = 0; C.food = 0; C.water = 0;
  for (const b of G.buildings) {
    C.housing += stat(b, 'housing');
    if (!b.powered) continue;
    C.o2 += stat(b, 'o2'); C.food += stat(b, 'food'); C.water += stat(b, 'water');
  }
  C.support = Math.min(C.housing, C.o2, C.food, C.water);
}

export function lifeSupportAt(p) {
  for (const b of G.buildings) {
    const life = stat(b, 'life');
    if (!life || !b.powered) continue;
    const dx = b.x - p.x, dz = b.z - p.z;
    if (dx * dx + dz * dz < life * life) return b;
  }
  return null;
}

// —— 建造预览 ——
let ghost = null, ghostType = null;
const ghostOk = new THREE.MeshBasicMaterial({ color: 0x55ffaa, transparent: true, opacity: 0.35, depthWrite: false });
const ghostBad = new THREE.MeshBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.35, depthWrite: false });
let rangeRing;
export const placement = { type: null, rot: 0, valid: false, reason: '', x: 0, z: 0 };

export function setGhost(type) {
  if (ghost) { G.scene.remove(ghost); ghost = null; }
  placement.type = type; ghostType = type;
  if (!type) { if (rangeRing) rangeRing.visible = false; return; }
  const g = new THREE.Group(); BUILD_MODELS[type](g, {});
  g.traverse(o => { if (o.isMesh) { o.material = ghostOk; o.castShadow = false; o.receiveShadow = false; } if (o.isSprite || o.userData.found) o.visible = false; });
  ghost = g; G.scene.add(g);
  if (!rangeRing) {
    rangeRing = new THREE.Mesh(new THREE.RingGeometry(0.96, 1, 64), new THREE.MeshBasicMaterial({ color: 0x66ddff, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide }));
    rangeRing.rotation.x = -Math.PI / 2; G.scene.add(rangeRing);
  }
  const rr = DEFS[type].life || DEFS[type].range || 0;
  rangeRing.visible = rr > 0; rangeRing.scale.setScalar(rr || 1);
}

export function updateGhost(hit, playerPos) {
  if (!ghost) return;
  if (!hit) { ghost.visible = false; rangeRing.visible = false; placement.valid = false; placement.reason = '对准地面'; return; }
  ghost.visible = true;
  const def = DEFS[placement.type];
  let x = hit.x, z = hit.z;
  // 太近时自动把建筑推到玩家前方
  let d = Math.hypot(x - playerPos.x, z - playerPos.z);
  const minD = def.r + 1.2;
  if (d < minD) {
    const ax = d > 0.01 ? (x - playerPos.x) / d : -Math.sin(G.player.yaw), az = d > 0.01 ? (z - playerPos.z) / d : -Math.cos(G.player.yaw);
    x = playerPos.x + ax * minD; z = playerPos.z + az * minD; d = minD;
  }
  const y = getHeight(x, z);
  ghost.position.set(x, y, z); ghost.rotation.y = placement.rot;
  placement.x = x; placement.z = z;
  if (rangeRing.scale.x > 1) { rangeRing.visible = true; rangeRing.position.set(x, y + 0.3, z); }
  let reason = '';
  if (!canAfford(def.cost)) reason = '资源不足';
  else if (slopeAt(x, z, Math.max(1.5, def.r * 0.7)) > (def.r > 4 ? 0.32 : 0.45)) reason = '地面太陡';
  else if (G.colliders.overlaps(x, z, def.r * 0.85)) reason = '位置被占用';
  else if (d < def.r + 0.8) reason = '离自己太近';
  else if (Math.abs(x) > HALF - 170 || Math.abs(z) > HALF - 170) reason = '超出可建造区域';
  else if (!inTerritory(x, z, def.r)) reason = '超出殖民地领地（提升城市等级来扩张）';
  placement.valid = !reason; placement.reason = reason;
  const mat = reason ? ghostBad : ghostOk;
  ghost.traverse(o => { if (o.isMesh) o.material = mat; });
}

export function tryPlace() {
  if (!placement.type || !placement.valid) { audio.play('deny'); return null; }
  const def = DEFS[placement.type];
  pay(def.cost);
  const b = createBuilding(placement.type, placement.x, placement.z, placement.rot, undefined, true);
  audio.play('place');
  fx.ring(new THREE.Vector3(b.x, b.y, b.z), def.r, 50);
  return b;
}

// —— 每帧动画与行为 ——
let recalcT = 0;
export function updateBuildings(dt, ctx) {
  recalcT -= dt; if (recalcT <= 0) { recalcT = 0.5; recalcColony(); }
  updateRoads();
  updateDrones(dt);
  const night = G.time.night, now = performance.now() * 0.001;
  M.window.emissiveIntensity = 0.3 + night * 0.85;
  M.lamp.emissiveIntensity = night * 4;
  for (const m of CITY_MATS) m.emissiveIntensity = 0.15 + night * 1.4;
  for (const b of G.buildings) {
    const a = b.anim, on = b.powered;
    b.t += dt;
    if (b.buildT < 1) {
      // 建造动画：从地面升起，全息光环向上扫描
      b.buildT = Math.min(1, b.buildT + dt / 1.3);
      const t = b.buildT, e = 1 + 2.2 * Math.pow(t - 1, 3) + 1.2 * Math.pow(t - 1, 2);
      b.group.scale.y = Math.max(0.001, e) * (b.baseScale || 1);
      const h = Math.max(3, b.def.r * 1.4) * (b.type === 'apartment' || b.type === 'launch' || b.type === 'terraformer' || b.type === 'monument' ? 4 : 1);
      a._scan.position.y = b.y + t * h; a._scan.material.opacity = 0.8 * (1 - t);
      a._scan.scale.setScalar(1 - t * 0.25);
      if (Math.random() < 0.5) fx.spark(new THREE.Vector3(b.x + (Math.random() - 0.5) * b.def.r * 2, b.y + t * h, b.z + (Math.random() - 0.5) * b.def.r * 2), [0.5, 0.9, 1], 1, 2, 0.6);
      if (t >= 1) { G.scene.remove(a._scan); a._scan.geometry.dispose(); delete a._scan; }
    }
    if (b.hp < b.maxHp && G.time.night < 0.5) {
      b.hp = Math.min(b.maxHp, b.hp + dt * (b.broken ? 5 : 2));
      if (b.broken && b.hp >= b.maxHp * 0.5) { b.broken = false; recalcColony(); G.events.emit('toast', `✓ ${b.def.name} 已修复，恢复运转`); }
    }
    if (b.broken && Math.random() < dt * 6) fx.dustPuff(new THREE.Vector3(b.x + (Math.random() - 0.5) * b.def.r, b.y + 1.5, b.z + (Math.random() - 0.5) * b.def.r), 1, 0.5, [0.15, 0.13, 0.12]);
    switch (b.type) {
      case 'solar': {
        // 追踪太阳
        const local = new THREE.Vector3(sunDir.x, Math.max(sunDir.y, 0.2), sunDir.z).applyAxisAngle(new THREE.Vector3(0, 1, 0), -b.rot);
        a.pivot.rotation.y = Math.atan2(local.x, local.z);
        a.panel.rotation.x = Math.PI / 2 - Math.asin(Math.min(1, local.y / local.length()));
        break;
      }
      case 'oxygen': if (on) a.fan.rotation.z += dt * 8; a.light.visible = on; break;
      case 'extractor': if (on) a.drill.position.y = 3 + Math.sin(b.t * 3) * 0.8; a.light.visible = on; break;
      case 'greenhouse': a.light.material.opacity = on ? 0.3 + night * 0.5 : 0; break;
      case 'fabricator': if (on) { a.arm.rotation.y = Math.sin(b.t * 0.8) * 1.2; a.spark.visible = Math.sin(b.t * 7) > 0.6; } else a.spark.visible = false; break;
      case 'habitat': a.tip.visible = Math.sin(now * 2 + b.x) > 0.3; break;
      case 'apartment': a.tip.visible = Math.sin(now * 2 + b.z) > 0.3; break;
      case 'vfarm': a.light.material.opacity = on ? 0.25 + night * 0.5 : 0; break;
      case 'lifehub': if (on) a.fan.rotation.y += dt * 3; a.light.visible = on; break;
      case 'plaza': a.earth.rotation.y += dt * 0.25; a.earth.position.y = 4 + Math.sin(now * 0.8) * 0.15; a.earth.material.opacity = on ? 0.55 - night * 0.15 : 0.15; a.halo.material.opacity = on ? 0.25 + night * 0.2 : 0; break;
      case 'lab': if (a.scope) a.scope.rotation.z = Math.sin(now * 0.2) * 0.4; if (a.tip) a.tip.visible = Math.sin(now * 2.5) > 0; if (a.light) a.light.visible = on; break;
      case 'trade': if (a.jib) a.jib.rotation.y = Math.sin(now * 0.15) * 1.2; if (a.tip) a.tip.visible = Math.sin(now * 3) > 0; break;
      case 'monument': a.rings.forEach((r, i) => { r.rotation.x = now * (0.3 + i * 0.2); r.rotation.y = now * (0.2 + i * 0.15); }); break;
      case 'reactor': a.r1.rotation.y += dt * 0.8; a.r2.rotation.z += dt * 0.6; a.light.material.opacity = 0.5 + Math.sin(now * 3) * 0.2; break;
      case 'beacon': {
        const k = Math.floor(now * 6) % 8;
        a.lights.forEach((l, i) => { l.visible = on && (i === k || i === (k + 4) % 8 || night > 0.3); });
        a.tip.visible = Math.sin(now * 3) > 0; break;
      }
      case 'lamp': a.glow.visible = night > 0.2; a.glow.material.opacity = night * 0.6; break;
      case 'turret': updateTurret(b, dt, ctx); break;
      case 'terraformer': {
        a.rings.forEach((r, i) => { r.position.y = 10 + i * 8 + Math.sin(now * 1.5 + i) * 1.5; r.rotation.x = Math.sin(now + i) * 0.2; });
        a.beam.material.opacity = on && G.terraform < 1 ? 0.18 + Math.sin(now * 4) * 0.05 : 0;
        if (on && G.terraform < 1 && Math.random() < 0.6) fx.rise(new THREE.Vector3(b.x, b.y + 28, b.z), [0.4, 0.9, 1], 4);
        break;
      }
    }
  }
}

function updateTurret(b, dt, ctx) {
  const a = b.anim;
  a.eye.visible = b.powered;
  if (!b.powered) return;
  b.cool -= dt;
  let best = null, bd = stat(b, 'range');
  for (const e of G.enemies) {
    if (e.dead) continue;
    const d = Math.hypot(e.pos.x - b.x, e.pos.z - b.z);
    if (d < bd) { bd = d; best = e; }
  }
  if (!best) { a.head.rotation.y += dt * 0.4; return; }
  const target = Math.atan2(-(best.pos.x - b.x), -(best.pos.z - b.z)) - b.rot;
  let diff = target - a.head.rotation.y; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
  a.head.rotation.y += Math.sign(diff) * Math.min(Math.abs(diff), dt * 5);
  if (Math.abs(diff) < 0.15 && b.cool <= 0) {
    b.cool = 0.45;
    const from = new THREE.Vector3(b.x, b.y + 2.7, b.z);
    const to = best.pos.clone(); to.y += 1;
    const dir = to.sub(from).normalize();
    from.addScaledVector(dir, 2.2);
    ctx.shoot(from, dir, 15 * MUL[b.level || 1] * (has('plasma') ? 1.5 : 1), 'turret');
    audio.play('turret');
  }
}

export function serializeBuildings() { return G.buildings.map(b => [b.type, +b.x.toFixed(2), +b.z.toFixed(2), +b.rot.toFixed(3), Math.round(b.hp), b.level || 1]); }
