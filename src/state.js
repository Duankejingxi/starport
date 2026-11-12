// 全局共享状态
export const G = {
  scene: null, camera: null, renderer: null,
  player: null,
  time: { t: 0.3, day: 1, elevation: 1, night: 0 },
  res: { iron: 0, silicon: 0, ice: 0, titanium: 0 },
  buildings: [],
  nodes: [],
  enemies: [],
  colonists: [],
  colony: { pop: 0, housing: 0, o2: 0, food: 0, water: 0, support: 0, powerProd: 0, powerUse: 0, deficit: false },
  upgrades: {},          // 已制造的升级 / 装备
  stats: { mined: { iron: 0, silicon: 0, ice: 0, titanium: 0 }, built: {}, kills: 0, arrived: 0, crafted: {} },
  chapter: 0,
  terraform: 0,
  ended: false,
  storm: 0,              // 沙尘暴强度 0..1
  menuOpen: false,
  locked: false,
  started: false,
  debug: false,
  colliders: null,
  raining: false,
  events: {
    map: {},
    on(n, f) { (this.map[n] ||= []).push(f); },
    emit(n, d) { (this.map[n] || []).forEach(f => f(d)); },
  },
};

export const RES_INFO = {
  iron:     { name: '铁矿', icon: '⬢', color: '#d08a5e' },
  silicon:  { name: '硅晶', icon: '◆', color: '#f1dca0' },
  ice:      { name: '水冰', icon: '❄', color: '#a9dcff' },
  titanium: { name: '钛矿', icon: '✦', color: '#b9a6ff' },
};

export function canAfford(cost) {
  for (const k in cost) if ((G.res[k] || 0) < cost[k]) return false;
  return true;
}
export function pay(cost) {
  for (const k in cost) G.res[k] -= cost[k];
}
export function costText(cost) {
  return Object.entries(cost)
    .map(([k, v]) => `<span class="cost ${G.res[k] >= v ? '' : 'lack'}">${RES_INFO[k].icon} ${RES_INFO[k].name} ${v}</span>`)
    .join(' ');
}

// 简单的静态碰撞网格（岩石、建筑、矿点）
export class ColliderGrid {
  constructor(cell = 16) { this.cell = cell; this.map = new Map(); }
  key(ix, iz) { return ix * 73856093 ^ iz * 19349663; }
  add(c) {
    const s = this.cell;
    const x0 = Math.floor((c.x - c.r) / s), x1 = Math.floor((c.x + c.r) / s);
    const z0 = Math.floor((c.z - c.r) / s), z1 = Math.floor((c.z + c.r) / s);
    c._keys = [];
    for (let i = x0; i <= x1; i++) for (let j = z0; j <= z1; j++) {
      const k = this.key(i, j);
      if (!this.map.has(k)) this.map.set(k, []);
      this.map.get(k).push(c); c._keys.push(k);
    }
    return c;
  }
  remove(c) {
    if (!c || !c._keys) return;
    for (const k of c._keys) {
      const a = this.map.get(k); if (!a) continue;
      const i = a.indexOf(c); if (i >= 0) a.splice(i, 1);
    }
    c._keys = null;
  }
  query(x, z) {
    return this.map.get(this.key(Math.floor(x / this.cell), Math.floor(z / this.cell))) || [];
  }
  // 检测某个圆是否与已有碰撞体重叠
  overlaps(x, z, r) {
    const s = this.cell, seen = new Set();
    for (let i = Math.floor((x - r) / s); i <= Math.floor((x + r) / s); i++)
      for (let j = Math.floor((z - r) / s); j <= Math.floor((z + r) / s); j++) {
        const a = this.map.get(this.key(i, j)); if (!a) continue;
        for (const c of a) {
          if (seen.has(c)) continue; seen.add(c);
          const dx = c.x - x, dz = c.z - z, rr = c.r + r;
          if (dx * dx + dz * dz < rr * rr) return c;
        }
      }
    return null;
  }
}
