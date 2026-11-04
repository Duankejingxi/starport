/* 星港 — build.js：建筑定义 / 放置 / 生产 */

// 建筑定义
const BUILDINGS = {
  habitat: {
    id: 'habitat', name: '居住舱', icon: '🏠',
    cost: { iron: 10 },
    needPop: 0,
    popCap: 4, power: 0,
    desc: '铁×10 ｜ +4人口上限',
  },
  solar: {
    id: 'solar', name: '太阳能板', icon: '🔆',
    cost: { iron: 8 },
    needPop: 0,
    popCap: 0, power: 3,
    desc: '铁×8 ｜ +3电力',
  },
  miner: {
    id: 'miner', name: '采矿机', icon: '🏭',
    cost: { iron: 12, rare: 4 },
    needPop: 2,
    popCap: 0, power: 0,
    desc: '铁×12 稀土×4 ｜ 需2人口 ｜ 每10秒产2铁',
    produce: { iron: 2 }, produceInterval: 10000,
  },
};

class BuildManager {
  constructor(map) {
    this.map = map;
    this.buildings = [];  // {id, x, y, lastProduce}
  }

  at(x, y) {
    return this.buildings.find(b => b.x === x && b.y === y) || null;
  }

  // 检查能否放置，返回 {ok, reason}
  canPlace(id, x, y, player, pop) {
    const def = BUILDINGS[id];
    if (!def) return { ok: false, reason: '未知建筑' };
    if (!this.map.isBuildable(x, y)) return { ok: false, reason: '这里不能建' };
    if (this.at(x, y)) return { ok: false, reason: '已有建筑' };
    if (pop < def.needPop) return { ok: false, reason: `需要${def.needPop}人口` };
    for (const k in def.cost) {
      if ((player.inv[k] || 0) < def.cost[k]) return { ok: false, reason: '资源不足' };
    }
    return { ok: true };
  }

  place(id, x, y, player) {
    const def = BUILDINGS[id];
    if (!player.spend(def.cost)) return false;
    this.buildings.push({ id, x, y, lastProduce: Date.now() });
    return true;
  }

  // 人口上限 / 电力 统计
  totalPopCap() {
    return this.buildings.reduce((s, b) => s + (BUILDINGS[b.id].popCap || 0), 0);
  }
  totalPower() {
    return this.buildings.reduce((s, b) => s + (BUILDINGS[b.id].power || 0), 0);
  }

  // 自动生产（采矿机）
  update(now, player, onProduce) {
    for (const b of this.buildings) {
      const def = BUILDINGS[b.id];
      if (def.produce && now - b.lastProduce >= def.produceInterval) {
        b.lastProduce = now;
        for (const k in def.produce) player.inv[k] += def.produce[k];
        if (onProduce) onProduce(b, def.produce);
      }
    }
  }

  render(ctx, tile) {
    for (const b of this.buildings) {
      const px = b.x * tile, py = b.y * tile;
      const cx = px + tile / 2, cy = py + tile / 2;
      if (b.id === 'habitat') {
        // 穹顶居住舱
        ctx.fillStyle = '#8a9bb0';
        ctx.beginPath(); ctx.arc(cx, cy + tile * 0.15, tile * 0.34, Math.PI, 0); ctx.fill();
        ctx.fillStyle = '#6a7b90';
        ctx.fillRect(px + tile * 0.16, cy + tile * 0.12, tile * 0.68, tile * 0.22);
        // 舷窗
        ctx.fillStyle = '#ffe9a3';
        ctx.fillRect(cx - tile * 0.18, cy - tile * 0.02, tile * 0.12, tile * 0.1);
        ctx.fillRect(cx + tile * 0.06, cy - tile * 0.02, tile * 0.12, tile * 0.1);
      } else if (b.id === 'solar') {
        // 太阳能板
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
        // 支架
        ctx.fillStyle = '#4a5a6a';
        ctx.fillRect(cx - 2, cy + tile * 0.18, 4, tile * 0.18);
      } else if (b.id === 'miner') {
        // 采矿机：底座 + 钻头
        ctx.fillStyle = '#5a4a3a';
        ctx.fillRect(px + tile * 0.18, py + tile * 0.45, tile * 0.64, tile * 0.35);
        ctx.fillStyle = '#7a6a5a';
        ctx.fillRect(px + tile * 0.28, py + tile * 0.2, tile * 0.44, tile * 0.3);
        // 钻头
        ctx.fillStyle = '#c9a37e';
        ctx.beginPath();
        ctx.moveTo(cx, py + tile * 0.5);
        ctx.lineTo(cx - tile * 0.1, py + tile * 0.85);
        ctx.lineTo(cx + tile * 0.1, py + tile * 0.85);
        ctx.closePath(); ctx.fill();
        // 指示灯
        ctx.fillStyle = '#4ade80';
        ctx.beginPath(); ctx.arc(cx + tile * 0.22, py + tile * 0.28, 3, 0, Math.PI * 2); ctx.fill();
      }
    }
  }
}

if (typeof module !== 'undefined') { module.exports = { BUILDINGS, BuildManager }; }
