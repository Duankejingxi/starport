import * as THREE from 'three';
import { G } from './state.js';
import { M, glow, glowTexture } from './models.js';
import { getHeight } from './terrain.js';
import { input } from './input.js';
import { audio } from './audio.js';
import { radio } from './story.js';
import { NODE_COLOR } from './resources.js';
import { PID } from './planets.js';

// 小星：跟随玩家的 AI 伙伴。夜间照明、危险提醒、按 Q 扫描矿藏
let bot, eye, ring, lamp, pulse, pulseMat, markers = [];
let scanCd = 0, pulseT = -1, talkCd = 20, idleT = 0;
const pos = new THREE.Vector3(), vel = new THREE.Vector3();
const said = new Set();
const SCAN_R = 140;

export function initCompanion() {
  bot = new THREE.Group();
  const shell = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 14), M.white);
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.04, 8, 28), M.orange); band.rotation.x = Math.PI / 2;
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 10, -Math.PI * 0.35, Math.PI * 0.7, Math.PI * 0.3, Math.PI * 0.4), new THREE.MeshStandardMaterial({ color: 0x0a1418, roughness: 0.1, metalness: 0.6 }));
  face.position.z = 0.15; face.rotation.y = Math.PI;
  eye = glow(0x7fe6ff, 0.45, null, 0, 0.02, 0.33);
  ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.015, 6, 40), new THREE.MeshBasicMaterial({ color: 0x7fe6ff, transparent: true, opacity: 0.6 }));
  ring.rotation.x = Math.PI / 2;
  const fin = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.25, 6), M.metal); fin.position.y = 0.38;
  bot.add(shell, band, face, eye, ring, fin, glow(0xff6a3a, 0.25, null, 0, 0.5, 0));
  bot.traverse(o => { if (o.isMesh) o.castShadow = true; });
  bot.scale.setScalar(0.8);
  lamp = new THREE.PointLight(0xbfefff, 0, 22, 1.6);
  bot.add(lamp);
  G.scene.add(bot);
  const P = G.player.pos;
  pos.set(P.x + 1.5, P.y + 2.2, P.z + 1.5); bot.position.copy(pos);
  pulseMat = new THREE.MeshBasicMaterial({ color: 0x7fe6ff, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
  pulse = new THREE.Mesh(new THREE.RingGeometry(0.94, 1, 96), pulseMat); pulse.rotation.x = -Math.PI / 2; pulse.visible = false;
  G.scene.add(pulse);
}

function say(id, text, once = true) {
  if (once && said.has(id)) return;
  if (talkCd > 0 && once) return;
  said.add(id); talkCd = 45;
  radio('小星 · 伙伴机器人', text);
}

let _mark;
function markTex() {
  if (_mark) return _mark;
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const g = cv.getContext('2d');
  g.translate(32, 32); g.rotate(Math.PI / 4);
  g.strokeStyle = '#fff'; g.lineWidth = 5; g.strokeRect(-14, -14, 28, 28);
  g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(-9, -9, 18, 18);
  _mark = new THREE.CanvasTexture(cv); return _mark;
}
function scan() {
  if (scanCd > 0) { G.events.emit('toast', `扫描冷却中 · ${Math.ceil(scanCd)} 秒`); audio.play('deny'); return; }
  scanCd = 12; pulseT = 0;
  audio.play('scan');
  for (const m of markers) G.scene.remove(m.s);
  markers = [];
  const P = G.player.pos, counts = {};
  for (const n of G.nodes) {
    const d = Math.hypot(n.x - P.x, n.z - P.z);
    if (d > SCAN_R) continue;
    const c = NODE_COLOR[n.type];
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: markTex(), color: new THREE.Color(c[0], c[1], c[2]), transparent: true, depthTest: false, depthWrite: false, opacity: 0, sizeAttenuation: false }));
    s.scale.setScalar(n.type === 'titanium' ? 0.05 : 0.036); s.position.set(n.x, n.y + 3, n.z); s.renderOrder = 999;
    G.scene.add(s);
    markers.push({ s, delay: d / 90, life: 10 });
    counts[n.type] = (counts[n.type] || 0) + 1;
  }
  const names = { iron: '铁矿', silicon: '硅晶', ice: '水冰', titanium: '钛矿' };
  const txt = Object.entries(counts).map(([k, v]) => `${names[k]} ${v}`).join(' · ');
  G.events.emit('toast', txt ? `扫描完成 · ${txt}` : '扫描完成 · 附近没有矿藏');
  G.stats.scans = (G.stats.scans || 0) + 1;
}

export function updateCompanion(dt) {
  if (!bot) return;
  const P = G.player, now = performance.now() * 0.001;
  scanCd = Math.max(0, scanCd - dt); talkCd -= dt;
  if (input.hit('KeyQ') && !G.menuOpen && !P.dead) scan();

  // 跟随：停在玩家右后方，驾驶时跟在车旁
  const yaw = G.driving ? P.yaw : P.yaw;
  // 飞在视野右前方，让玩家看得到它
  const side = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw)), fwd = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
  const target = P.pos.clone().addScaledVector(side, G.driving ? 3.5 : 3.0).addScaledVector(fwd, G.driving ? 2 : 5.5);
  target.y = Math.max(P.pos.y + 1.55, getHeight(target.x, target.z) + 0.8) + Math.sin(now * 2) * 0.12;
  if (G.driving) target.y += 2.2;
  const k = pos.distanceTo(target) > 30 ? 1 : Math.min(1, dt * 3);
  vel.lerp(target.clone().sub(pos).multiplyScalar(4), k);
  pos.addScaledVector(vel, dt);
  if (pos.distanceTo(target) > 40) pos.copy(target);
  bot.position.copy(pos);
  // 看向玩家视线前方
  const look = P.pos.clone().addScaledVector(P.fwd, 12); look.y += 1.5;
  bot.lookAt(look);
  ring.rotation.z += dt * 1.5; ring.rotation.x = Math.PI / 2 + Math.sin(now * 1.3) * 0.3;
  eye.material.opacity = 0.75 + Math.sin(now * 4) * 0.25;
  lamp.intensity = G.time.night > 0.4 ? 18 * G.time.night : 0;

  // 扫描脉冲
  if (pulseT >= 0) {
    pulseT += dt;
    const r = pulseT * 90;
    pulse.visible = r < SCAN_R;
    pulse.position.set(P.pos.x, P.pos.y + 0.6, P.pos.z);
    pulse.scale.setScalar(Math.max(0.1, r));
    pulseMat.opacity = 0.7 * (1 - r / SCAN_R);
    if (r >= SCAN_R) pulseT = -1;
  }
  for (let i = markers.length - 1; i >= 0; i--) {
    const m = markers[i];
    m.delay -= dt;
    if (m.delay > 0) continue;
    m.life -= dt;
    m.s.material.opacity = Math.min(1, (10 - m.life) * 3, m.life / 2) * (0.75 + Math.sin(now * 5 + i) * 0.25);
    if (m.life <= 0) { G.scene.remove(m.s); m.s.material.dispose(); markers.splice(i, 1); }
  }

  // 情境对白
  const moving = Math.hypot(P.vel.x, P.vel.z) > 0.5;
  idleT = moving ? 0 : idleT + dt;
  if (!P.inLife && P.o2 < P.maxO2 * 0.3) say('o2' + Math.floor(now / 120), '氧气不多了！最近的补氧点在罗盘上那个房子图标的方向。', false);
  if (G.time.night > 0.6 && !P.flashlight) say('dark', '好黑……按 F 打开手电筒吧。我也会帮你照着点。');
  if (G.enemies.some(e => !e.dead && !e.guardian && e.pos.distanceTo(P.pos) < 25)) say('enemy' + Math.floor(now / 90), '检测到锈蚀蛛靠近！小心！', false);
  if (G.nodes.some(n => n.type === 'titanium' && Math.hypot(n.x - P.pos.x, n.z - P.pos.z) < 40)) say('ti', '附近有钛矿的信号！紫色的那种，很稀有哦。');
  if (idleT > 40) { idleT = -200; say('idle' + Math.floor(now / 300), IDLE[PID][Math.floor(Math.random() * IDLE[PID].length)], false); }
  if (G.stats.scans === undefined && G.time.day >= 1 && now > 30) say('scanhint', '我能扫描附近的矿藏——按 Q 试试。');
}

const IDLE = {
  mars: ['你知道吗？火星上的一天比地球长 37 分钟。', '火星的日落是蓝色的。等傍晚的时候抬头看看吧。', '那座最高的山叫奥林帕斯，是地球珠峰的两倍多高。', '我的数据库里有一首地球的歌，叫《月亮代表我的心》。要我哼给你听吗？……算了，我跑调。'],
  europa: ['木星好大……感觉它随时会掉下来。', '冰层下面的海，可能比地球所有的海加起来还要多。', '这里的重力很小，跳高一点没关系的。'],
  kepler: ['两个太阳！影子都有两个！', '那些发光的水母……它们是在看我们吗？', '空气里的氧气已经有 14% 了。再过几十年，也许就能摘下头盔了。'],
};
