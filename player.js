/* 星港 — player.js：玩家移动 / 采集 / 背包 */

class Player {
  constructor(map) {
    this.map = map;
    const c = Math.floor(map.size / 2);
    this.x = c; this.y = c;       // 网格坐标
    this.tx = c; this.ty = c;     // 移动目标
    this.moving = false;
    this.moveCooldown = 0;        // 移动节流（ms）
    // 背包
    this.inv = { iron: 0, ice: 0, rare: 0 };
    // 采集
    this.harvestCooldown = 0;
    this.HARVEST_CD = 800;        // 采集冷却 ms
    this.HARVEST_YIELD = 2;       // 每次采集获得
  }

  // 点击移动：设置目标
  setTarget(x, y) {
    if (!this.map.inBounds(x, y)) return;
    this.tx = x; this.ty = y;
    this.moving = true;
  }

  // WASD：立即走一格
  step(dx, dy) {
    const nx = this.x + dx, ny = this.y + dy;
    if (!this.map.inBounds(nx, ny)) return;
    this.x = nx; this.y = ny;
    this.tx = nx; this.ty = ny;
    this.moving = false;
  }

  // 采集：站在资源点上
  tryHarvest(now) {
    if (now - this.harvestCooldown < this.HARVEST_CD) return null;
    const res = this.map.resource[this.y][this.x];
    if (!res) return null;
    this.harvestCooldown = now;
    this.inv[res] += this.HARVEST_YIELD;
    return res;
  }

  canHarvest() {
    return !!this.map.resource[this.y][this.x];
  }

  // 消耗资源（建造用），返回是否成功
  spend(cost) {
    for (const k in cost) {
      if ((this.inv[k] || 0) < cost[k]) return false;
    }
    for (const k in cost) this.inv[k] -= cost[k];
    return true;
  }

  update(now, dt) {
    // 点击移动：每 140ms 走一格（朝目标直线）
    if (this.moving) {
      if (now - this.moveCooldown >= 140) {
        this.moveCooldown = now;
        if (this.x === this.tx && this.y === this.ty) {
          this.moving = false;
        } else {
          const dx = Math.sign(this.tx - this.x);
          const dy = Math.sign(this.ty - this.y);
          // 优先走差距大的轴
          if (Math.abs(this.tx - this.x) >= Math.abs(this.ty - this.y)) {
            this.x += dx;
          } else {
            this.y += dy;
          }
        }
      }
    }
  }

  render(ctx, tile) {
    const px = this.x * tile + tile / 2;
    const py = this.y * tile + tile / 2;
    const r = tile * 0.32;

    // 光晕
    ctx.fillStyle = 'rgba(125, 211, 252, 0.25)';
    ctx.beginPath(); ctx.arc(px, py, r * 1.5, 0, Math.PI * 2); ctx.fill();

    // 宇航员：头盔圆
    ctx.fillStyle = '#e8f4ff';
    ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill();
    // 面罩
    ctx.fillStyle = '#1a2a3a';
    ctx.beginPath(); ctx.arc(px, py, r * 0.62, 0, Math.PI * 2); ctx.fill();
    // 面罩反光
    ctx.fillStyle = 'rgba(125,211,252,0.5)';
    ctx.beginPath(); ctx.arc(px - r * 0.2, py - r * 0.2, r * 0.2, 0, Math.PI * 2); ctx.fill();

    // 移动目标标记
    if (this.moving && (this.tx !== this.x || this.ty !== this.y)) {
      const gx = this.tx * tile + tile / 2, gy = this.ty * tile + tile / 2;
      ctx.strokeStyle = 'rgba(125,211,252,0.7)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(gx, gy, tile * 0.3, 0, Math.PI * 2); ctx.stroke();
    }
  }
}

if (typeof module !== 'undefined') { module.exports = { Player }; }
