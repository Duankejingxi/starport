import * as THREE from 'three';
import { mulberry32 } from './noise.js';

// 程序生成的 PBR 贴图：反照率（偏白，乘材质颜色）、粗糙度、凹凸
const S = 512;
function canvas() { const c = document.createElement('canvas'); c.width = c.height = S; return c; }
function tex(cv, srgb, rep = 1) {
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep);
  t.anisotropy = 4;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function speckle(g, r, n, col, a0, a1, s0, s1) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(${col},${a0 + r() * (a1 - a0)})`;
    const s = s0 + r() * (s1 - s0); g.fillRect(r() * S, r() * S, s, s);
  }
}

// 航天器面板：接缝、铆钉、雨痕般的尘垢
export function panelSet(seed = 1, cells = 4) {
  const r = mulberry32(seed);
  const a = canvas(), ga = a.getContext('2d');
  const rg = canvas(), gr = rg.getContext('2d');
  const b = canvas(), gb = b.getContext('2d');
  ga.fillStyle = '#f2f0ec'; ga.fillRect(0, 0, S, S);
  gr.fillStyle = '#8c8c8c'; gr.fillRect(0, 0, S, S);
  gb.fillStyle = '#808080'; gb.fillRect(0, 0, S, S);
  const step = S / cells;
  // 各块面板略有色差
  for (let i = 0; i < cells; i++) for (let j = 0; j < cells; j++) {
    const v = 236 + Math.floor(r() * 18);
    ga.fillStyle = `rgb(${v},${v - 2},${v - 5})`; ga.fillRect(i * step, j * step, step, step);
    const rv = 120 + Math.floor(r() * 40); gr.fillStyle = `rgb(${rv},${rv},${rv})`; gr.fillRect(i * step, j * step, step, step);
    // 偶尔的小检修口
    if (r() < 0.35) {
      const w = step * (0.25 + r() * 0.3), h = step * (0.2 + r() * 0.25), x = i * step + step * 0.2 + r() * step * 0.3, y = j * step + step * 0.2 + r() * step * 0.3;
      gb.strokeStyle = '#4a4a4a'; gb.lineWidth = 2; gb.strokeRect(x, y, w, h);
      ga.strokeStyle = 'rgba(80,76,70,.35)'; ga.lineWidth = 1.5; ga.strokeRect(x, y, w, h);
    }
  }
  // 接缝
  for (let i = 0; i <= cells; i++) {
    const p = i * step;
    for (const [g, c, w] of [[ga, 'rgba(70,64,58,.55)', 2.5], [gb, '#303030', 4], [gr, '#d0d0d0', 3]]) {
      g.fillStyle = c; g.fillRect(p - w / 2, 0, w, S); g.fillRect(0, p - w / 2, S, w);
    }
  }
  // 铆钉
  for (let i = 0; i < cells; i++) for (let j = 0; j < cells; j++) for (const [u, v] of [[0.08, 0.08], [0.92, 0.08], [0.08, 0.92], [0.92, 0.92]]) {
    const x = (i + u) * step, y = (j + v) * step;
    gb.fillStyle = '#c8c8c8'; gb.beginPath(); gb.arc(x, y, 3, 0, 7); gb.fill();
    ga.fillStyle = 'rgba(90,86,80,.5)'; ga.beginPath(); ga.arc(x, y, 2.2, 0, 7); ga.fill();
  }
  // 尘垢：由上往下的流痕与底部积尘
  for (let i = 0; i < 70; i++) {
    const x = r() * S, len = 30 + r() * 160, y = r() * S;
    const grd = ga.createLinearGradient(0, y, 0, y + len);
    grd.addColorStop(0, 'rgba(150,90,60,0)'); grd.addColorStop(0.3, `rgba(150,90,60,${0.05 + r() * 0.08})`); grd.addColorStop(1, 'rgba(150,90,60,0)');
    ga.fillStyle = grd; ga.fillRect(x, y, 1 + r() * 3, len);
  }
  const dust = ga.createLinearGradient(0, S * 0.75, 0, S);
  dust.addColorStop(0, 'rgba(170,100,60,0)'); dust.addColorStop(1, 'rgba(170,100,60,.22)');
  ga.fillStyle = dust; ga.fillRect(0, 0, S, S);
  speckle(ga, r, 2500, '120,80,60', 0.03, 0.12, 1, 3);
  speckle(gr, r, 1800, '255,255,255', 0.05, 0.2, 1, 4);
  // 划痕
  ga.strokeStyle = 'rgba(255,255,255,.25)'; gr.strokeStyle = 'rgba(40,40,40,.4)';
  for (let i = 0; i < 40; i++) {
    const x = r() * S, y = r() * S, dx = (r() - 0.5) * 40, dy = (r() - 0.5) * 12;
    for (const g of [ga, gr]) { g.lineWidth = 0.8; g.beginPath(); g.moveTo(x, y); g.lineTo(x + dx, y + dy); g.stroke(); }
  }
  return { map: tex(a, true), roughnessMap: tex(rg, false), bumpMap: tex(b, false) };
}

// 拉丝金属
export function brushedSet(seed = 7) {
  const r = mulberry32(seed);
  const a = canvas(), ga = a.getContext('2d'), rg = canvas(), gr = rg.getContext('2d');
  ga.fillStyle = '#e6e6e6'; ga.fillRect(0, 0, S, S); gr.fillStyle = '#6a6a6a'; gr.fillRect(0, 0, S, S);
  for (let y = 0; y < S; y++) {
    const v = 210 + Math.floor(r() * 45); ga.fillStyle = `rgba(${v},${v},${v},.5)`; ga.fillRect(0, y, S, 1);
    const q = 80 + Math.floor(r() * 60); gr.fillStyle = `rgba(${q},${q},${q},.5)`; gr.fillRect(0, y, S, 1);
  }
  speckle(ga, r, 800, '60,50,40', 0.05, 0.15, 1, 3);
  return { map: tex(a, true), roughnessMap: tex(rg, false) };
}

// 混凝土 / 风化地基
export function concreteSet(seed = 3) {
  const r = mulberry32(seed);
  const a = canvas(), ga = a.getContext('2d'), b = canvas(), gb = b.getContext('2d');
  ga.fillStyle = '#d8d2c8'; ga.fillRect(0, 0, S, S); gb.fillStyle = '#808080'; gb.fillRect(0, 0, S, S);
  speckle(ga, r, 9000, '90,80,70', 0.04, 0.16, 1, 4);
  speckle(ga, r, 3000, '255,250,240', 0.04, 0.12, 1, 3);
  speckle(gb, r, 6000, '40,40,40', 0.1, 0.4, 1, 3);
  for (let i = 0; i < 6; i++) {
    ga.strokeStyle = 'rgba(70,60,50,.25)'; ga.lineWidth = 1;
    ga.beginPath(); let x = r() * S, y = r() * S; ga.moveTo(x, y);
    for (let k = 0; k < 12; k++) { x += (r() - 0.5) * 50; y += (r() - 0.5) * 50; ga.lineTo(x, y); }
    ga.stroke();
  }
  const dust = ga.createLinearGradient(0, 0, 0, S);
  dust.addColorStop(0, 'rgba(170,100,60,0)'); dust.addColorStop(1, 'rgba(170,100,60,.3)');
  ga.fillStyle = dust; ga.fillRect(0, 0, S, S);
  return { map: tex(a, true, 1), bumpMap: tex(b, false, 1) };
}

// 岩石
export function rockSet(seed = 11) {
  const r = mulberry32(seed);
  const a = canvas(), ga = a.getContext('2d'), b = canvas(), gb = b.getContext('2d');
  ga.fillStyle = '#d0c4bc'; ga.fillRect(0, 0, S, S); gb.fillStyle = '#808080'; gb.fillRect(0, 0, S, S);
  for (let i = 0; i < 300; i++) {
    const x = r() * S, y = r() * S, rad = 6 + r() * 40, v = Math.floor(150 + r() * 90);
    ga.fillStyle = `rgba(${v},${v - 15},${v - 25},.25)`; ga.beginPath(); ga.ellipse(x, y, rad, rad * (0.4 + r() * 0.6), r() * 3, 0, 7); ga.fill();
    gb.fillStyle = `rgba(${v},${v},${v},.25)`; gb.beginPath(); gb.ellipse(x, y, rad, rad * 0.6, r() * 3, 0, 7); gb.fill();
  }
  speckle(ga, r, 8000, '60,40,30', 0.05, 0.2, 1, 3);
  speckle(gb, r, 8000, '20,20,20', 0.1, 0.5, 1, 2);
  return { map: tex(a, true, 1), bumpMap: tex(b, false, 1) };
}
