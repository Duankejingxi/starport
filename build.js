/* 星港 — build.js：12 种建筑 × 3 级 / 放置 / 升级 / 生产 */

// 建筑定义：levels[1..3]，每级 {cost, needPop, ...}
const BUILDINGS = {
  habitat: {
    id: 'habitat', name: '居住舱', icon: '🏠',
    levels: [null,
      { cost: { iron: 10 }, needPop: 0, popCap: 4, powerUse: 0 },
      { cost: { iron: 25 }, needPop: 4, popCap: 10, powerUse: 1 },
      { cost: { iron: 60, steel: 10 }, needPop: 10, popCap: 22, powerUse: 2 },
    ],
    desc: '提供人口上限',
  },
  solar: {
    id: 'solar', name: '太阳能板', icon: '🔆',
    levels: [null,
      { cost: { iron: 8 }, needPop: 0, power: 3 },
      { cost: { iron: 20 }, needPop: 0, power: 8 },
      { cost: { iron: 45, steel: 5 }, needPop: 0, power: 18 },
    ],
    desc: '生产电力',
  },
  miner: {
    id: 'miner', name: '采矿机', icon: '🏭',
    levels: [null,
      { cost: { iron: 12, rare: 4 }, needPop: 2, powerUse: 1, produce: { iron: 2 }, produceInterval: 10000 },
      { cost: { iron: 30, rare: 10 }, needPop: 5, powerUse: 2, produce: { iron: 5 }, produceInterval: 10000 },
      { cost: { iron: 70, steel: 15 }, needPop: 10, powerUse: 3, produce: { iron: 12 }, produceInterval: 10000 },
    ],
    desc: '自动生产铁矿',
  },
  pump: {
    id: 'pump', name: '抽水机', icon: '💧',
    levels: [null,
      { cost: { iron: 10 }, needPop: 2, powerUse: 1, produce: { ice: 2 }, produceInterval: 12000 },
      { cost: { iron: 25 }, needPop: 5, powerUse: 2, produce: { ice: 5 }, produceInterval: 12000 },
      { cost: { iron: 60, steel: 10 }, needPop: 10, powerUse: 3, produce: { ice: 12 }, produceInterval: 12000 },
    ],
    desc: '自动生产冰水',
  },
  smelter: {
    id: 'smelter', name: '冶炼厂', icon: '🔥',
    levels: [null,
      { cost: { iron: 30, rare: 8 }, needPop: 6, powerUse: 2, convert: { in: { iron: 4 }, out: { steel: 1 } }, convertInterval: 15000 },
      { cost: { iron: 70, rare: 20 }, needPop: 12, powerUse: 3, convert: { in: { iron: 4 }, out: { steel: 2 } }, convertInterval: 15000 },
      { cost: { steel: 30, rare: 40 }, needPop: 20, powerUse: 4, convert: { in: { iron: 4 }, out: { steel: 4 } }, convertInterval: 15000 },
    ],
    desc: '铁矿 → 钢材',
  },
  greenhouse: {
    id: 'greenhouse', name: '温室', icon: '🌾',
    levels: [null,
      { cost: { iron: 20, ice: 10 }, needPop: 4, powerUse: 1, produce: { food: 2 }, produceInterval: 15000 },
      { cost: { iron: 50, ice: 25 }, needPop: 8, powerUse: 2, produce: { food: 5 }, produceInterval: 15000 },
      { cost: { steel: 20, ice: 50 }, needPop: 15, powerUse: 3, produce: { food: 12 }, produceInterval: 15000 },
    ],
    desc: '生产食物',
  },
  waterplant: {
    id: 'waterplant', name: '水厂', icon: '🚰',
    levels: [null,
      { cost: { iron: 20 }, needPop: 4, powerUse: 1, convert: { in: { ice: 2 }, out: { water: 2 } }, convertInterval: 12000 },
      { cost: { iron: 50 }, needPop: 8, powerUse: 2, convert: { in: { ice: 2 }, out: { water: 5 } }, convertInterval: 12000 },
      { cost: { steel: 15 }, needPop: 15, powerUse: 3, convert: { in: { ice: 2 }, out: { water: 12 } }, convertInterval: 12000 },
    ],
    desc: '冰水 → 水',
  },
  lab: {
    id: 'lab', name: '实验室', icon: '🔬',
    levels: [null,
      { cost: { iron: 40, rare: 15 }, needPop: 8, powerUse: 2, produce: { tech: 1 }, produceInterval: 30000 },
      { cost: { steel: 30, rare: 30 }, needPop: 15, powerUse: 3, produce: { tech: 3 }, produceInterval: 30000 },
      { cost: { steel: 80, rare: 60 }, needPop: 25, powerUse: 4, produce: { tech: 8 }, produceInterval: 30000 },
    ],
    desc: '生产科技点',
  },
  road: {
    id: 'road', name: '道路', icon: '🛤️',
    levels: [null,
      { cost: { iron: 2 }, needPop: 0, powerUse: 0 },
    ],
    desc: '铺路，移动速度×2（无等级）',
  },
  hospital: {
    id: 'hospital', name: '医院', icon: '🏥',
    levels: [null,
      { cost: { iron: 50, steel: 10 }, needPop: 12, powerUse: 2, growthBonus: 0.5 },
      { cost: { steel: 40 }, needPop: 20, powerUse: 3, growthBonus: 1.0 },
      { cost: { steel: 100, tech: 10 }, needPop: 35, powerUse: 4, growthBonus: 2.0 },
    ],
    desc: '人口增长加速',
  },
  command: {
    id: 'command', name: '指挥中心', icon: '🎛️',
    levels: [null,
      { cost: { steel: 40, tech: 5 }, needPop: 20, powerUse: 3 },
      { cost: { steel: 100, tech: 15 }, needPop: 35, powerUse: 4 },
      { cost: { steel: 200, tech: 40 }, needPop: 50, powerUse: 5 },
    ],
    desc: '解锁发射台（需 Lv1）',
  },
  launchpad: {
    id: 'launchpad', name: '发射台', icon: '🚀',
    levels: [null,
      { cost: { steel: 100, tech: 30 }, needPop: 60, powerUse: 0, needCommand: true },
    ],
    desc: '建成即通关！需要指挥中心',
  },
};

// 建筑顺序（UI 用）
const BUILD_ORDER = ['habitat', 'solar', 'miner', 'pump', 'smelter', 'greenhouse', 'waterplant', 'lab', 'road', 'hospital', 'command', 'launchpad'];

class BuildManager {
  constructor(map) {
    this.map = map;
    this.buildings = [];  // {id, x, y, level, lastProduce}
  }

  at(x, y) {
    return this.buildings.find(b => b.x === x && b.y === y) || null;
  }

  def(id) { return BUILDINGS[id]; }
  levelDef(b) { return BUILDINGS[b.id].levels[b.level]; }

  // 检查放置
  canPlace(id, x, y, inv, pop) {
    const def = BUILDINGS[id];
    if (!def) return { ok: false, reason: '未知建筑' };
    const lv = def.levels[1];
    if (id === 'road') {
      // 道路可以铺在平地上（覆盖资源点不行）
      if (!this.map.inBounds(x, y)) return { ok: false, reason: '超出边界' };
      if (!this.map.isUnlocked(x, y)) return { ok: false, reason: '未解锁区域' };
      if (this.map.terrain[y][x] !== TERRAIN.FLAT) return { ok: false, reason: '地形不行' };
    } else {
      if (!this.map.isBuildable(x, y)) return { ok: false, reason: '这里不能建' };
    }
    if (this.at(x, y)) return { ok: false, reason: '已有建筑' };
    if (pop < lv.needPop) return { ok: false, reason: `需要${lv.needPop}人口` };
    if (id === 'launchpad' && !this.hasCommand()) return { ok: false, reason: '先建造指挥中心' };
    if (!canAfford(inv, lv.cost)) return { ok: false, reason: '缺' + missingRes(inv, lv.cost) };
    return { ok: true };
  }

  place(id, x, y, inv) {
    const def = BUILDINGS[id];
    const lv = def.levels[1];
    if (!spendRes(inv, lv.cost)) return false;
    this.buildings.push({ id, x, y, level: 1, lastProduce: Date.now() });
    return true;
  }

  // 检查升级
  canUpgrade(b, inv, pop) {
    const def = BUILDINGS[b.id];
    if (b.level >= def.levels.length - 1) return { ok: false, reason: '已满级' };
    const lv = def.levels[b.level + 1];
    if (pop < lv.needPop) return { ok: false, reason: `需要${lv.needPop}人口` };
    if (!canAfford(inv, lv.cost)) return { ok: false, reason: '缺' + missingRes(inv, lv.cost) };
    return { ok: true, cost: lv.cost };
  }

  upgrade(b, inv) {
    const def = BUILDINGS[b.id];
    const lv = def.levels[b.level + 1];
    if (!lv || !spendRes(inv, lv.cost)) return false;
    b.level++;
    b.lastProduce = Date.now();
    return true;
  }

  hasCommand() {
    return this.buildings.some(b => b.id === 'command');
  }

  hasLaunchpad() {
    return this.buildings.some(b => b.id === 'launchpad');
  }

  // 统计
  totalPopCap() {
    return this.buildings.reduce((s, b) => s + (this.levelDef(b).popCap || 0), 0);
  }
  totalPower() {
    return this.buildings.reduce((s, b) => s + (this.levelDef(b).power || 0), 0);
  }
  totalPowerUse() {
    return this.buildings.reduce((s, b) => s + (this.levelDef(b).powerUse || 0), 0);
  }
  totalGrowthBonus() {
    return this.buildings.reduce((s, b) => s + (this.levelDef(b).growthBonus || 0), 0);
  }
  // 电力是否充足
  powerOk() {
    return this.totalPower() >= this.totalPowerUse();
  }

  isRoad(x, y) {
    const b = this.at(x, y);
    return b && b.id === 'road';
  }

  count(id) {
    return this.buildings.filter(b => b.id === id).length;
  }

  // 生产更新：电力不足时生产类建筑停工
  update(now, inv, onEvent) {
    const ok = this.powerOk();
    for (const b of this.buildings) {
      const lv = this.levelDef(b);
      // 直接生产
      if (lv.produce && now - b.lastProduce >= lv.produceInterval) {
        if (!ok && lv.powerUse > 0) continue;  // 缺电停工
        b.lastProduce = now;
        for (const k in lv.produce) inv[k] = (inv[k] || 0) + lv.produce[k];
        if (onEvent) onEvent('produce', b, lv.produce);
      }
      // 转换生产（冶炼厂/水厂）
      if (lv.convert && now - b.lastProduce >= lv.convertInterval) {
        if (!ok && lv.powerUse > 0) continue;
        if (canAfford(inv, lv.convert.in)) {
          b.lastProduce = now;
          spendRes(inv, lv.convert.in);
          for (const k in lv.convert.out) inv[k] = (inv[k] || 0) + lv.convert.out[k];
          if (onEvent) onEvent('convert', b, lv.convert.out);
        }
      }
    }
  }

  // 建筑描述（含等级）
  describe(b) {
    const def = BUILDINGS[b.id];
    const lv = this.levelDef(b);
    let s = `${def.icon} ${def.name} Lv${b.level}：${def.desc}`;
    if (lv.popCap) s += `｜+${lv.popCap}人口上限`;
    if (lv.power) s += `｜+${lv.power}电力`;
    if (lv.produce) {
      const p = Object.entries(lv.produce).map(([k, v]) => `+${v}${RES_DEFS[k].name}`).join('');
      s += `｜${p}/${lv.produceInterval / 1000}秒`;
    }
    if (lv.convert) {
      const inp = Object.entries(lv.convert.in).map(([k, v]) => `${v}${RES_DEFS[k].name}`).join('');
      const out = Object.entries(lv.convert.out).map(([k, v]) => `${v}${RES_DEFS[k].name}`).join('');
      s += `｜${inp}→${out}`;
    }
    // 升级预览
    if (b.level < def.levels.length - 1) {
      const nl = def.levels[b.level + 1];
      const costStr = Object.entries(nl.cost).map(([k, v]) => `${RES_DEFS[k].name}×${v}`).join(' ');
      s += `｜升Lv${b.level + 1}：${costStr}`;
    } else {
      s += `｜已满级`;
    }
    return s;
  }

  render(ctx, tile) {
    for (const b of this.buildings) {
      const px = b.x * tile, py = b.y * tile;
      const cx = px + tile / 2, cy = py + tile / 2;
      // 等级角标背景
      const drawLevel = () => {
        if (b.level > 1) {
          ctx.fillStyle = '#facc15';
          ctx.font = `bold ${Math.max(8, tile * 0.3)}px sans-serif`;
          ctx.textAlign = 'right';
          ctx.fillText(b.level, px + tile - 2, py + tile * 0.32);
          ctx.textAlign = 'left';
        }
      };

      if (b.id === 'road') {
        ctx.fillStyle = '#3a3a45';
        ctx.fillRect(px + 1, py + 1, tile - 2, tile - 2);
        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.moveTo(px + tile / 2, py + 2);
        ctx.lineTo(px + tile / 2, py + tile - 2);
        ctx.stroke();
        ctx.setLineDash([]);
        continue;
      }

      if (b.id === 'habitat') {
        ctx.fillStyle = '#8a9bb0';
        ctx.beginPath(); ctx.arc(cx, cy + tile * 0.15, tile * 0.34, Math.PI, 0); ctx.fill();
        ctx.fillStyle = '#6a7b90';
        ctx.fillRect(px + tile * 0.16, cy + tile * 0.12, tile * 0.68, tile * 0.22);
        ctx.fillStyle = '#ffe9a3';
        ctx.fillRect(cx - tile * 0.18, cy - tile * 0.02, tile * 0.12, tile * 0.1);
        ctx.fillRect(cx + tile * 0.06, cy - tile * 0.02, tile * 0.12, tile * 0.1);
      } else if (b.id === 'solar') {
        ctx.fillStyle = '#1e3a5f';
        ctx.save();
        ctx.translate(cx, cy); ctx.rotate(-0.3);
        ctx.fillRect(-tile * 0.36, -tile * 0.22, tile * 0.72, tile * 0.44);
        ctx.strokeStyle = '#3a6a9f'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-tile * 0.36, 0); ctx.lineTo(tile * 0.36, 0);
        ctx.moveTo(0, -tile * 0.22); ctx.lineTo(0, tile * 0.22);
        ctx.stroke();
        ctx.restore();
        ctx.fillStyle = '#4a5a6a';
        ctx.fillRect(cx - 2, cy + tile * 0.18, 4, tile * 0.18);
      } else if (b.id === 'miner') {
        ctx.fillStyle = '#5a4a3a';
        ctx.fillRect(px + tile * 0.18, py + tile * 0.45, tile * 0.64, tile * 0.35);
        ctx.fillStyle = '#7a6a5a';
        ctx.fillRect(px + tile * 0.28, py + tile * 0.2, tile * 0.44, tile * 0.3);
        ctx.fillStyle = '#c9a37e';
        ctx.beginPath();
        ctx.moveTo(cx, py + tile * 0.5);
        ctx.lineTo(cx - tile * 0.1, py + tile * 0.85);
        ctx.lineTo(cx + tile * 0.1, py + tile * 0.85);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#4ade80';
        ctx.beginPath(); ctx.arc(cx + tile * 0.22, py + tile * 0.28, 3, 0, Math.PI * 2); ctx.fill();
      } else if (b.id === 'pump') {
        // 抽水机：水塔
        ctx.fillStyle = '#2a6a8a';
        ctx.fillRect(px + tile * 0.25, py + tile * 0.15, tile * 0.5, tile * 0.5);
        ctx.fillStyle = '#7dd3fc';
        ctx.fillRect(px + tile * 0.3, py + tile * 0.4, tile * 0.4, tile * 0.2);
        ctx.fillStyle = '#1a4a6a';
        ctx.fillRect(px + tile * 0.4, py + tile * 0.65, tile * 0.2, tile * 0.2);
      } else if (b.id === 'smelter') {
        // 冶炼厂：烟囱
        ctx.fillStyle = '#6a3a2a';
        ctx.fillRect(px + tile * 0.2, py + tile * 0.35, tile * 0.6, tile * 0.45);
        ctx.fillStyle = '#8a4a3a';
        ctx.fillRect(px + tile * 0.3, py + tile * 0.1, tile * 0.15, tile * 0.3);
        ctx.fillRect(px + tile * 0.55, py + tile * 0.1, tile * 0.15, tile * 0.3);
        // 火光
        ctx.fillStyle = '#ff9a3c';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.55, tile * 0.12, 0, Math.PI * 2); ctx.fill();
      } else if (b.id === 'greenhouse') {
        // 温室：玻璃房
        ctx.fillStyle = 'rgba(163,230,53,0.35)';
        ctx.fillRect(px + tile * 0.15, py + tile * 0.3, tile * 0.7, tile * 0.5);
        ctx.strokeStyle = '#a3e635'; ctx.lineWidth = 2;
        ctx.strokeRect(px + tile * 0.15, py + tile * 0.3, tile * 0.7, tile * 0.5);
        ctx.beginPath();
        ctx.moveTo(px + tile * 0.15, py + tile * 0.3);
        ctx.lineTo(cx, py + tile * 0.1);
        ctx.lineTo(px + tile * 0.85, py + tile * 0.3);
        ctx.stroke();
        // 苗
        ctx.fillStyle = '#4ade80';
        ctx.fillRect(cx - 3, py + tile * 0.55, 6, tile * 0.15);
      } else if (b.id === 'waterplant') {
        // 水厂：水箱
        ctx.fillStyle = '#1e5a8a';
        ctx.beginPath(); ctx.arc(cx, cy, tile * 0.32, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath(); ctx.arc(cx, cy, tile * 0.22, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#e8f4ff';
        ctx.beginPath(); ctx.arc(cx - tile * 0.08, cy - tile * 0.08, tile * 0.07, 0, Math.PI * 2); ctx.fill();
      } else if (b.id === 'lab') {
        // 实验室：烧瓶楼
        ctx.fillStyle = '#5a3a8a';
        ctx.fillRect(px + tile * 0.25, py + tile * 0.25, tile * 0.5, tile * 0.55);
        ctx.fillStyle = '#f0abfc';
        ctx.fillRect(px + tile * 0.35, py + tile * 0.45, tile * 0.3, tile * 0.2);
        ctx.fillStyle = '#e8f4ff';
        ctx.fillRect(px + tile * 0.3, py + tile * 0.3, tile * 0.4, tile * 0.08);
      } else if (b.id === 'hospital') {
        // 医院：白楼红十字
        ctx.fillStyle = '#e8e8ee';
        ctx.fillRect(px + tile * 0.2, py + tile * 0.25, tile * 0.6, tile * 0.55);
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(cx - tile * 0.12, cy - tile * 0.04, tile * 0.24, tile * 0.08);
        ctx.fillRect(cx - tile * 0.04, cy - tile * 0.12, tile * 0.08, tile * 0.24);
      } else if (b.id === 'command') {
        // 指挥中心：天线塔
        ctx.fillStyle = '#3a4a6a';
        ctx.fillRect(px + tile * 0.3, py + tile * 0.3, tile * 0.4, tile * 0.5);
        ctx.strokeStyle = '#7dd3fc'; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, py + tile * 0.3);
        ctx.lineTo(cx, py + tile * 0.05);
        ctx.stroke();
        ctx.fillStyle = '#facc15';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.05, 4, 0, Math.PI * 2); ctx.fill();
        // 信号波
        ctx.strokeStyle = 'rgba(250,204,21,0.6)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.05, tile * 0.2, -0.6, 0.6); ctx.stroke();
      } else if (b.id === 'launchpad') {
        // 发射台：火箭
        ctx.fillStyle = '#4a4a5a';
        ctx.fillRect(px + tile * 0.15, py + tile * 0.6, tile * 0.7, tile * 0.2);
        ctx.fillStyle = '#e8e8f0';
        ctx.beginPath();
        ctx.moveTo(cx, py + tile * 0.05);
        ctx.lineTo(cx - tile * 0.12, py + tile * 0.45);
        ctx.lineTo(cx + tile * 0.12, py + tile * 0.45);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(cx - tile * 0.12, py + tile * 0.32, tile * 0.05, tile * 0.13);
        ctx.fillRect(cx + tile * 0.07, py + tile * 0.32, tile * 0.05, tile * 0.13);
        // 火焰
        ctx.fillStyle = '#ff9a3c';
        ctx.beginPath();
        ctx.moveTo(cx - tile * 0.08, py + tile * 0.45);
        ctx.lineTo(cx, py + tile * 0.62);
        ctx.lineTo(cx + tile * 0.08, py + tile * 0.45);
        ctx.closePath(); ctx.fill();
      }
      drawLevel();
    }
  }
}

if (typeof module !== 'undefined') { module.exports = { BUILDINGS, BUILD_ORDER, BuildManager }; }
