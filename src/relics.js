import * as THREE from 'three';
import { G } from './state.js';
import { PID } from './planets.js';
import { getHeight, slopeAt, HALF } from './terrain.js';
import { mulberry32 } from './noise.js';
import { M, glow } from './models.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { radio } from './story.js';

// 遗迹：散落在星球各处、等待被发现的故事
const LORE = {
  mars: [
    { id: 'zhurong', name: '祝融号火星车', model: 'rover', who: '档案 · 祝融号', text: '中国火星车「祝融号」，2021 年着陆在乌托邦平原——就在你脚下这片土地。它的太阳能板上积满了六十多年的沙尘。人类在火星上的第一行车辙，就是它留下的。' },
    { id: 'opportunity', name: '机遇号残骸', model: 'rover2', who: '档案 · 机遇号', text: '一块写着「Opportunity」的残片，不知被哪场沙尘暴卷到了这里。它在火星上工作了十五年。它最后传回的数据，被人们翻译成一句话：「我的电量很低，天快黑了。」' },
    { id: 'viking', name: '海盗一号着陆器', model: 'lander', who: '档案 · 海盗一号', text: '1976 年，人类第一个在火星成功着陆并传回照片的探测器。照片上，就是这样一片红色的、布满石头的平原。' },
    { id: 'ingenuity', name: '机智号直升机', model: 'heli', who: '档案 · 机智号', text: '一架只有 1.8 公斤的小直升机。2021 年，它完成了人类在地球之外的第一次动力飞行。旋翼上还贴着一小块莱特兄弟飞机的布料。' },
  ],
  europa: [
    { id: 'drill', name: '冰层钻探器', model: 'drill', who: '档案 · 冰穿者号', text: '2041 年的无人钻探器「冰穿者号」。它钻到了冰下三公里，在最后一帧画面里，镜头前似乎有什么东西在发光……然后信号中断了。' },
    { id: 'hydro', name: '无人水听站', model: 'probe', who: '档案 · 水听站', text: '一台还在运转的水听器。它录到了冰下海洋里某种有节奏的低频声音，周期是 17 分钟。没有人知道那是什么。' },
    { id: 'galileo', name: '刻字的金属片', model: 'plate', who: '档案 · 无名', text: '冰里冻着一块金属片，上面刻着一个日期：1610 年 1 月 7 日。那是伽利略第一次看见木星卫星的夜晚。是谁把它带到这里的？' },
  ],
  kepler: [
    { id: 'monolith', name: '晶体方碑', model: 'monolith', who: '档案 · 未知', text: '这不是人类造的。方碑表面的纹路在你靠近时一圈圈亮起，像是在辨认你。它的年龄大约是四千万年。' },
    { id: 'pathfinder', name: '方舟探路器', model: 'probe', who: '档案 · 探路者', text: '三百年前先行出发的无人探路器。它的最后一条日志写着：「已找到适宜着陆点。我会在这里等你们。」它等了一百一十二年。' },
    { id: 'fossil', name: '巨型化石', model: 'fossil', who: '档案 · 化石', text: '一副巨大的骨架，弧形的肋骨像拱门一样立在地上。生前，它可能像那些发光的水母一样，漂浮在这片天空里。' },
  ],
};

const relics = [];
const rustMat = new THREE.MeshStandardMaterial({ color: 0x7a6a5c, roughness: 0.9, metalness: 0.3 });
const goldMat = new THREE.MeshStandardMaterial({ color: 0xc8a050, roughness: 0.4, metalness: 0.8 });
const boneMat = new THREE.MeshStandardMaterial({ color: 0xe8dcc8, roughness: 0.8, flatShading: true });
const monoMat = new THREE.MeshStandardMaterial({ color: 0x14101c, roughness: 0.15, metalness: 0.9, emissive: 0x6040ff, emissiveIntensity: 0.15 });

function mk(geo, mat, x, y, z, p, rx = 0, ry = 0, rz = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; m.receiveShadow = true; p.add(m); return m; }
const MODELS = {
  rover(g) {
    mk(new THREE.BoxGeometry(1.6, 0.5, 2.2), rustMat, 0, 0.9, 0, g, 0, 0, 0.08);
    for (const s of [-1, 1]) { mk(new THREE.BoxGeometry(1.4, 0.05, 1.6), M.solar, s * 1.4, 1.1, 0, g, 0, 0, s * 0.25); }
    mk(new THREE.CylinderGeometry(0.05, 0.05, 1.2, 6), rustMat, 0.4, 1.7, -0.7, g);
    mk(new THREE.BoxGeometry(0.3, 0.2, 0.25), rustMat, 0.4, 2.35, -0.7, g, 0, 0, 0.3);
    for (const z of [-0.9, 0, 0.9]) for (const s of [-1, 1]) mk(new THREE.CylinderGeometry(0.28, 0.28, 0.22, 10), M.dark, s * 0.95, 0.3, z, g, 0, 0, Math.PI / 2);
  },
  rover2(g) {
    mk(new THREE.BoxGeometry(1.4, 0.45, 1.8), rustMat, 0, 0.5, 0, g, 0.25, 0.4, 0.4);
    mk(new THREE.BoxGeometry(1.2, 0.05, 1.1), M.solar, 0.9, 0.35, 0.3, g, 0.1, 0, -0.6);
    mk(new THREE.CylinderGeometry(0.28, 0.28, 0.22, 10), M.dark, -1.2, 0.25, 0.8, g, 0.4, 0, 1.2);
  },
  lander(g) {
    mk(new THREE.CylinderGeometry(1.0, 1.1, 0.6, 6), goldMat, 0, 1.0, 0, g);
    for (let i = 0; i < 3; i++) { const a = i * Math.PI * 2 / 3; mk(new THREE.CylinderGeometry(0.06, 0.06, 1.4, 5), rustMat, Math.cos(a) * 1.1, 0.5, Math.sin(a) * 1.1, g, Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4); }
    mk(new THREE.CylinderGeometry(0.6, 0.6, 0.05, 16), M.white, 0, 1.6, 0.3, g, 0.6, 0, 0);
    mk(new THREE.BoxGeometry(0.2, 0.9, 0.2), rustMat, -0.5, 1.7, -0.3, g);
  },
  heli(g) {
    mk(new THREE.BoxGeometry(0.25, 0.2, 0.25), goldMat, 0, 0.45, 0, g);
    mk(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 4), rustMat, 0, 0.75, 0, g);
    mk(new THREE.BoxGeometry(1.2, 0.02, 0.08), rustMat, 0, 0.9, 0, g, 0, 0.5, 0);
    mk(new THREE.BoxGeometry(1.2, 0.02, 0.08), rustMat, 0, 0.98, 0, g, 0, -0.4, 0);
    for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + 0.6; mk(new THREE.CylinderGeometry(0.015, 0.015, 0.5, 4), rustMat, Math.cos(a) * 0.2, 0.2, Math.sin(a) * 0.2, g, Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.5); }
    g.scale.setScalar(2.2);
  },
  drill(g) {
    mk(new THREE.CylinderGeometry(0.5, 0.7, 1.4, 8), rustMat, 0, 0.7, 0, g);
    mk(new THREE.CylinderGeometry(0.15, 0.15, 4, 8), M.metal, 0, 2.6, 0, g, 0.15, 0, 0);
    for (let i = 0; i < 3; i++) { const a = i * Math.PI * 2 / 3; mk(new THREE.BoxGeometry(0.15, 3, 0.15), rustMat, Math.cos(a) * 0.9, 1.4, Math.sin(a) * 0.9, g, Math.sin(a) * 0.25, 0, -Math.cos(a) * 0.25); }
  },
  probe(g) {
    mk(new THREE.SphereGeometry(0.8, 12, 8), M.white, 0, 0.9, 0, g);
    mk(new THREE.TorusGeometry(0.85, 0.08, 6, 20), M.orange, 0, 0.9, 0, g, Math.PI / 2, 0, 0);
    mk(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 4), M.metal, 0, 2.2, 0, g);
    mk(new THREE.ConeGeometry(0.5, 0.3, 12, 1, true), M.white, 0, 3.0, 0, g, Math.PI, 0, 0);
  },
  plate(g) {
    mk(new THREE.BoxGeometry(1.2, 0.8, 0.06), goldMat, 0, 0.5, 0, g, -0.5, 0, 0.1);
    mk(new THREE.DodecahedronGeometry(0.9, 0), new THREE.MeshStandardMaterial({ color: 0xcfeeff, transparent: true, opacity: 0.6, roughness: 0.05 }), 0, 0.4, 0, g);
  },
  monolith(g) {
    mk(new THREE.BoxGeometry(1.4, 7, 0.5), monoMat, 0, 3.5, 0, g, 0, 0, 0.04);
    g.userData.rings = [];
    for (let i = 0; i < 3; i++) { const r = mk(new THREE.TorusGeometry(1.4 + i * 0.4, 0.04, 6, 32), new THREE.MeshBasicMaterial({ color: 0x8a7aff, transparent: true, opacity: 0.6 }), 0, 2 + i * 1.6, 0, g, Math.PI / 2, 0, 0); g.userData.rings.push(r); }
  },
  fossil(g) {
    for (let i = 0; i < 9; i++) { const r = mk(new THREE.TorusGeometry(3 - Math.abs(i - 4) * 0.35, 0.18, 6, 16, Math.PI), boneMat, 0, 0, -6 + i * 1.5, g); r.rotation.y = 0; }
    mk(new THREE.CylinderGeometry(0.25, 0.15, 14, 6), boneMat, 0, 3, 0, g, Math.PI / 2, 0, 0);
    mk(new THREE.DodecahedronGeometry(1.4, 0), boneMat, 0, 2.6, -8, g);
  },
};

export function initRelics() {
  const rnd = mulberry32(PID.length * 977 + 5);
  const list = LORE[PID] || [];
  list.forEach((l, i) => {
    let x = 0, z = 0;
    for (let k = 0; k < 200; k++) {
      const a = (i / list.length) * Math.PI * 2 + rnd() * 1.2, d = 160 + rnd() * 220;
      x = Math.cos(a) * d; z = Math.sin(a) * d;
      if (Math.abs(x) < HALF - 180 && Math.abs(z) < HALF - 180 && slopeAt(x, z, 3) < 0.35 && !G.colliders.overlaps(x, z, 6)) break;
    }
    const g = new THREE.Group(); MODELS[l.model](g);
    g.position.set(x, getHeight(x, z) - 0.15, z); g.rotation.y = rnd() * 6.28;
    const beacon = glow(0xffd28a, 3, G.scene, x, getHeight(x, z) + 4, z);
    G.scene.add(g);
    G.colliders.add({ x, z, r: l.model === 'fossil' ? 3 : 1.4, kind: 'relic' });
    relics.push({ ...l, x, z, g, beacon, found: (G.relicsFound || []).includes(l.id) });
  });
}

export function nearestRelic(p) {
  let best = null, bd = 1e9;
  for (const r of relics) { if (r.found) continue; const d = Math.hypot(r.x - p.x, r.z - p.z); if (d < bd) { bd = d; best = r; } }
  return best ? { r: best, d: bd } : null;
}
export function relicAt(p) { return relics.find(r => !r.found && Math.hypot(r.x - p.x, r.z - p.z) < 6); }
export function relicCount() { return { found: relics.filter(r => r.found).length, total: relics.length }; }
export function allRelics() { return relics; }

export function discover(r) {
  r.found = true;
  G.relicsFound = [...new Set([...(G.relicsFound || []), r.id])];
  radio(r.who, r.text);
  G.res.titanium += 8; G.res.silicon += 15;
  G.events.emit('pickup', { type: 'titanium', n: 8, note: r.name });
  G.events.emit('toast', `✓ 发现遗迹：${r.name}`);
  audio.play('objective');
  fx.burst(new THREE.Vector3(r.x, getHeight(r.x, r.z) + 2, r.z), [1, 0.85, 0.5], 60, 8);
}

export function updateRelics(dt) {
  const now = performance.now() * 0.001;
  for (const r of relics) {
    r.beacon.visible = !r.found;
    r.beacon.material.opacity = 0.5 + Math.sin(now * 2 + r.x) * 0.3;
    if (r.g.userData.rings) r.g.userData.rings.forEach((ring, i) => { ring.rotation.z = now * (0.3 + i * 0.2); ring.material.opacity = (r.found ? 0.8 : 0.3) + Math.sin(now * 2 + i) * 0.2; });
  }
}
