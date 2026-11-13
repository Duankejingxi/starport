import * as THREE from 'three';
import { G } from './state.js';
import { makeColonist, makeShuttle } from './models.js';
import { getHeight } from './terrain.js';
import { fx } from './fx.js';
import { audio } from './audio.js';

// 每一位移民都是一个人，有名字、职业，和一句想说的话
const PEOPLE = [
  ['林晓', '植物学家', '我从云南带来了一包茶树种子。总有一天，火星上也能泡一壶热茶。'],
  ['Amara Okafor', '医生', '在地球上，我救过很多人。在这里，我想看着孩子们平安长大。'],
  ['陈默', '工程师', '这里的每一颗螺丝，都是我们亲手拧上去的。'],
  ['Mateo Silva', '地质学家', '你看见那些岩层了吗？它们比人类的历史还要古老四十亿年。'],
  ['苏念', '教师', '我的第一堂课，就叫"我们为什么来到火星"。'],
  ['Yuki Tanaka', '飞行员', '从轨道上看，你们的灯光像是红色沙漠里的一串珍珠。'],
  ['王大山', '厨师', '温室里的第一批土豆，我做了一锅土豆炖菜。大家都哭了。'],
  ['Elena Petrova', '天文学家', '晚上抬头，那颗最亮的蓝星，就是地球。'],
  ['赵小雨', '学生', '我十六岁。我会是第一代在火星长大的人。'],
  ['Kwame Mensah', '电工', '只要灯还亮着，这里就是家。'],
  ['周青禾', '水文学家', '冰层下面有水。有水，就有生命。'],
  ['Priya Sharma', '程序员', '我写的代码在控制制氧站。别担心，我测试过三千遍了。'],
  ['李长风', '老兵', '我年轻时守过边疆。现在，我守着人类的新边疆。'],
  ['Sofia Rossi', '建筑师', '穹顶的弧度，是我照着故乡教堂的圆顶画的。'],
  ['何安', '护士', '想家的时候，我就去温室里闻闻泥土的味道。'],
  ['Jonas Berg', '机械师', '火星的沙子会钻进任何缝隙。但我们比沙子更固执。'],
  ['马晴', '记者', '我要记录下这一切。几百年后的人会想知道，最初是怎样的。'],
  ['Omar Haddad', '农学家', '我祖父在沙漠里种出了椰枣。我要在火星种出森林。'],
  ['吴桐', '画家', '火星的日落是蓝色的。地球上没有人会相信。'],
  ['Grace Kim', '心理医生', '离家很远的时候，我们彼此就是家。'],
  ['郭远', '父亲', '我女儿在飞船上出生。她的出生证明上写着：出生地，星际空间。'],
  ['Lucas Moreau', '音乐家', '我带了一把吉他。今晚穹顶里有音乐会，你来吗？'],
  ['钱多多', '会计', '我算过了：照这个速度，二十年后这里会有一座城市。'],
  ['Aiko Sato', '生物学家', '那些锈蚀蛛……也许它们只是在保护自己的家园。'],
  ['邓卓', '矿工', '钛矿里藏着火星的心跳。'],
  ['Nadia Volkova', '气象学家', '大气改造塔启动后，也许我们能看见火星上的第一片云。'],
  ['黄一鸣', '机器人专家', '机器可以替我们干活，但只有人，才能把一个地方变成家。'],
  ['Samuel Okoro', '牧师', '无论在哪颗星球上，我们都会为新生的孩子祝福。'],
  ['叶知秋', '诗人', '"此心安处是吾乡。"——苏轼。我想，他说得对。'],
  ['Hannah Weber', '物理学家', '聚变反应堆的光，和太阳是同一种光。'],
  ['小满', '孩子', '叔叔，地球是什么样子的？'],
  ['Diego Ramírez', '登山家', '奥林帕斯山有两万米高。总有一天我要站上去。'],
];
let nextPerson = 0;

export function spawnColonist(x, z, saved) {
  const idx = saved?.idx ?? nextPerson++;
  const p = PEOPLE[idx % PEOPLE.length];
  const m = makeColonist(idx);
  m.group.position.set(x, getHeight(x, z), z);
  G.scene.add(m.group);
  const c = { ...m, idx, name: p[0] + (idx >= PEOPLE.length ? ` ${Math.floor(idx / PEOPLE.length) + 1}世` : ''), job: p[1], line: p[2],
    pos: m.group.position, target: null, wait: Math.random() * 3, phase: Math.random() * 6, talked: 0 };
  G.colonists.push(c);
  return c;
}

function pickTarget(c) {
  const homes = G.buildings.filter(b => b.type !== 'lamp');
  if (!homes.length) return new THREE.Vector3(c.pos.x + (Math.random() - 0.5) * 10, 0, c.pos.z + (Math.random() - 0.5) * 10);
  let list = homes;
  if (G.time.night > 0.5) { const h = homes.filter(b => b.type === 'habitat'); if (h.length) list = h; }
  const b = list[Math.floor(Math.random() * list.length)];
  const a = Math.random() * Math.PI * 2, d = b.def.r + 1.5 + Math.random() * 5;
  return new THREE.Vector3(b.x + Math.cos(a) * d, 0, b.z + Math.sin(a) * d);
}

// —— 移民飞船 ——
let shuttle = null, arrivalT = 25;
const shuttleObj = { phase: 'idle' };
function startLanding(pad, n) {
  const s = makeShuttle(); s.group.userData.shuttle = true;
  s.group.position.set(pad.x, pad.y + 260, pad.z);
  G.scene.add(s.group);
  shuttle = { ...s, pad, n, t: 0, phase: 'descend' };
  audio.play('rumble');
  G.events.emit('shuttleIncoming', n);
}

export function updateColony(dt) {
  const C = G.colony;
  G.popTotal = Math.max(G.popTotal || 0, G.colonists.length);
  C.pop = G.popTotal;
  // 每位居民都在工作：缓慢产出资源
  if (C.pop) {
    G._work = (G._work || 0) + dt * C.pop * 0.04;
    while (G._work >= 1) { G._work -= 1; const k = Math.random() < 0.55 ? 'iron' : (Math.random() < 0.6 ? 'silicon' : 'ice'); G.res[k]++; }
  }
  // 是否满足移民条件
  const pads = G.buildings.filter(b => b.type === 'beacon' && b.powered);
  const room = C.support - C.pop;
  if (!shuttle && pads.length && room > 0 && !G.ended) {
    arrivalT -= dt;
    if (arrivalT <= 0) {
      arrivalT = Math.max(20, 50 / pads.length);
      startLanding(pads[Math.floor(Math.random() * pads.length)], Math.min(room, 4 + (G.cityLevel || 0) * 2));
    }
  }
  if (shuttle) updateShuttle(dt);

  // 移民行为
  const now = performance.now() * 0.001;
  for (const c of G.colonists) {
    if (!c.target) { c.wait -= dt; if (c.wait <= 0) c.target = pickTarget(c); }
    let moving = false;
    if (c.target) {
      const dx = c.target.x - c.pos.x, dz = c.target.z - c.pos.z, d = Math.hypot(dx, dz);
      if (d < 0.6) { c.target = null; c.wait = 3 + Math.random() * 8; }
      else {
        const sp = 1.7;
        c.pos.x += dx / d * sp * dt; c.pos.z += dz / d * sp * dt;
        for (const k of G.colliders.query(c.pos.x, c.pos.z)) {
          if (k.kind !== 'building') continue;
          const ox = c.pos.x - k.x, oz = c.pos.z - k.z, od = Math.hypot(ox, oz), rr = k.r + 0.4;
          if (od < rr && od > 0.01) { c.pos.x = k.x + ox / od * rr; c.pos.z = k.z + oz / od * rr; }
        }
        c.group.rotation.y = Math.atan2(dx, dz);
        moving = true;
      }
    }
    // 看向玩家
    const pd = Math.hypot(G.player.pos.x - c.pos.x, G.player.pos.z - c.pos.z);
    if (pd < 4 && !moving) c.group.rotation.y = Math.atan2(G.player.pos.x - c.pos.x, G.player.pos.z - c.pos.z);
    c.pos.y = getHeight(c.pos.x, c.pos.z);
    const ph = now * 7 + c.phase;
    const sw = moving ? Math.sin(ph) * 0.6 : 0;
    c.legL.rotation.x = sw; c.legR.rotation.x = -sw; c.armL.rotation.x = -sw * 0.8; c.armR.rotation.x = sw * 0.8;
    if (!moving && pd < 4) c.armR.rotation.x = -2.6 + Math.sin(now * 6) * 0.3; // 挥手
    c.body.position.y = 0.72 + (moving ? Math.abs(Math.sin(ph)) * 0.04 : 0);
    c.talked = Math.max(0, c.talked - dt);
  }
}

function updateShuttle(dt) {
  const s = shuttle; s.t += dt;
  const P = s.pad, g = s.group;
  if (s.phase === 'descend') {
    const k = Math.min(1, s.t / 11), e = 1 - Math.pow(1 - k, 3);
    g.position.y = P.y + 0.6 + 260 * (1 - e);
    s.flame.scale.set(1, 0.6 + (1 - e) * 1.2 + Math.random() * 0.2, 1);
    for (let i = 0; i < 3; i++) fx.flame(g.position);
    if (k > 0.85 && Math.random() < 0.5) fx.dustPuff(new THREE.Vector3(P.x, P.y, P.z), 4, 10);
    if (k >= 1) { s.phase = 'landed'; s.t = 0; fx.ring(new THREE.Vector3(P.x, P.y, P.z), 3, 80); s.flame.visible = false; s.flameGlow.visible = false; }
  } else if (s.phase === 'landed') {
    s.total = s.total || s.n;
    if (s.n > 0 && s.t > 2 + (s.total - s.n) * 0.6) {
      // 依次走下飞船（画面上最多 40 人，其余住进城里）
      let c;
      if (G.colonists.length < 40) {
        c = spawnColonist(P.x + (Math.random() - 0.5) * 2, P.z + 3);
        c.target = new THREE.Vector3(P.x + (Math.random() - 0.5) * 20, 0, P.z + 10 + Math.random() * 8);
      } else { const p = PEOPLE[nextPerson++ % PEOPLE.length]; c = { name: p[0] }; }
      s.n--; s.arrived = (s.arrived || []).concat([c]);
      G.popTotal = (G.popTotal || 0) + 1;
      G.stats.arrived++;
    }
    if (s.n <= 0 && s.t > 7) { s.phase = 'ascend'; s.t = 0; s.flame.visible = true; s.flameGlow.visible = true; audio.play('rumble'); G.events.emit('colonistsArrived', s.arrived || []); }
  } else if (s.phase === 'ascend') {
    g.position.y += dt * (5 + s.t * 12);
    for (let i = 0; i < 3; i++) fx.flame(g.position);
    if (s.t < 1.5) fx.dustPuff(new THREE.Vector3(P.x, P.y, P.z), 3, 10);
    if (s.t > 12) { G.scene.remove(g); shuttle = null; }
  }
}

// 玩家注视着的居民
const oc = new THREE.Vector3();
export function lookColonist(origin, dir) {
  let best = null, bd = 6;
  for (const c of G.colonists) {
    oc.set(c.pos.x - origin.x, c.pos.y + 1.1 - origin.y, c.pos.z - origin.z);
    const t = oc.dot(dir); if (t < 0 || t > bd) continue;
    if (oc.lengthSq() - t * t < 0.8 * 0.8) { bd = t; best = c; }
  }
  return best;
}

export function serializeColonists() { return G.colonists.map(c => [c.idx, +c.pos.x.toFixed(1), +c.pos.z.toFixed(1)]); }
export function loadColonists(list) {
  for (const [idx, x, z] of list) spawnColonist(x, z, { idx });
  nextPerson = Math.max(nextPerson, ...list.map(l => l[0] + 1), 0);
}
export function shuttleBusy() { return !!shuttle; }
export function personCount() { return PEOPLE.length; }
