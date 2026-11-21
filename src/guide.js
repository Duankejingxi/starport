import * as THREE from 'three';
import { G, RES_INFO } from './state.js';
import { CHAPTERS } from './story.js';
import { isFree } from './systems.js';

// —— 任务指引：当前目标需要哪种矿，就在最近的那处矿点上方浮现一个标记；不在画面里时贴在屏幕边缘指向它 ——
const KEY = [['铁矿', 'iron'], ['硅晶', 'silicon'], ['水冰', 'ice'], ['钛', 'titanium']];
let el, target = null, scanT = 0, shown = 0;
const v = new THREE.Vector3();

function wantType() {
  if (isFree() || G.ended) return null;
  const ch = CHAPTERS[G.chapter]; if (!ch) return null;
  for (let j = 0; j < ch.goals.length; j++) {
    if (G.goalDone?.[G.chapter + ':' + j]) continue;
    const k = KEY.find(([w]) => ch.goals[j].text.includes(w) && ch.goals[j].text.includes('采集'));
    if (k) return k[1];
  }
  return null;
}

export function initGuide() {
  el = document.createElement('div'); el.id = 'guide';
  el.innerHTML = '<i class="gd-dia"></i><span class="gd-t"></span><b class="gd-arrow"></b>';
  document.body.appendChild(el);
}

export function updateGuide(dt, camera) {
  if (!el) return;
  scanT -= dt;
  if (scanT <= 0) {
    scanT = 0.6; target = null;
    const t = wantType();
    if (t) {
      const P = G.player.pos; let bd = 1e9;
      for (const n of G.nodes) { if (n.type !== t) continue; const d = Math.hypot(n.x - P.x, n.z - P.z); if (d < bd) { bd = d; target = n; } }
    }
  }
  const P = G.player.pos;
  const d = target ? Math.hypot(target.x - P.x, target.z - P.z) : 0;
  // 已经很近（准星锁定框会接手）或在菜单、过场里：淡出
  const want = target && G.nodes.includes(target) && d > 7 && !G.menuOpen && !G.cine && !G.driving && G.started ? 1 : 0;
  shown += (want - shown) * Math.min(1, dt * 6);
  el.style.opacity = shown.toFixed(3);
  if (shown < 0.01 || !target) return;
  v.set(target.x, target.y + 3.2 + Math.sin(performance.now() * 0.003) * 0.25, target.z).project(camera);
  const behind = v.z > 1;
  let x = (v.x * 0.5 + 0.5) * innerWidth, y = (-v.y * 0.5 + 0.5) * innerHeight;
  if (behind) { x = innerWidth - x; y = innerHeight - y; }
  // 不在画面中央区域时，把标记放到屏幕中心周围的一个椭圆上（避开两侧 HUD 面板），箭头指向目标
  const cx = innerWidth / 2, cy = innerHeight / 2, rx = innerWidth * 0.23, ry = innerHeight * 0.32;
  let dx = x - cx, dy = y - cy;
  if (behind && Math.abs(dy) < 1) dy = 1;
  const inside = !behind && (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) <= 1;
  let ang = 0;
  if (!inside) { const k = 1 / Math.sqrt((dx * dx) / (rx * rx) + (dy * dy) / (ry * ry)); x = cx + dx * k; y = cy + dy * k; ang = Math.atan2(dy, dx); }
  el.classList.toggle('edge', !inside);
  el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  el.querySelector('.gd-arrow').style.transform = `rotate(${ang}rad)`;
  const info = RES_INFO[target.type];
  el.style.setProperty('--gc', info.color);
  const txt = `${info.name} · ${Math.round(d)} 米`;
  const t = el.querySelector('.gd-t'); if (t.textContent !== txt) t.textContent = txt;
}
