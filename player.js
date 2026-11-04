/* 星港 — player.js：玩家移动 / 采集 / 背包 */

class Player {
  constructor(map) {
    this.map = map;
    const c = Math.floor(map.size / 2);
    this.x = c; this.y = c;
    this.tx = c; this.ty = c;
    this.moving = false;
    this.moveCooldown = 0;
    this.inv = newInventory();
    this.harvestCooldown = 0;
    this.HARVEST_CD = 800;
    this.HARVEST_YIELD = 2;
    // 道路加速由 game 每帧设置
    this.onRoad = false;
  }

  setTarget(x, y) {
    if (!this.map.inBounds(x, y)) return;
    if (!this.map.isWalkable(x, y)) return;
    this.tx = x; this.ty = y;
    this.moving = true;
  }

  step(dx, dy) {
    const nx = this.x + dx, ny = this.y + dy;
    if (!this.map.isWalkable(nx, ny)) return;
    this.x = nx; this.y = ny;
    this.tx = nx; this.ty = ny;
    this.moving = false;
  }

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

  update(now, dt, isRoad) {
    this.onRoad = !!isRoad;
    if (this.moving) {
      // 路上 70ms/格，野地 140ms/格
      const interval = this.onRoad ? 70 : 140;
      if (now - this.moveCooldown >= interval) {
        this.moveCooldown = now;
        if (this.x === this.tx && this.y === this.ty) {
          this.moving = false;
        } else {
          const dx = Math.sign(this.tx - this.x);
          const dy = Math.sign(this.ty - this.y);
          let nx = this.x, ny = this.y;
          if (Math.abs(this.tx - this.x) >= Math.abs(this.ty - this.y)) {
            nx = this.x + dx;
          } else {
            ny = this.y + dy;
          }
          // 撞墙就停
          if (this.map.isWalkable(nx, ny)) {
            this.x = nx; this.y = ny;
          } else {
            this.moving = false;
          }
        }
      }
    }
  }

  render(ctx, tile) {
    const px = this.x * tile + tile / 2;
    const py = this.y * tile + tile / 2;
    const r = tile * 0.32;

    ctx.fillStyle = 'rgba(125, 211, 252, 0.25)';
    ctx.beginPath(); ctx.arc(px, py, r * 1.5, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#e8f4ff';
    ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#1a2a3a';
    ctx.beginPath(); ctx.arc(px, py, r * 0.62, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(125,211,252,0.5)';
    ctx.beginPath(); ctx.arc(px - r * 0.2, py - r * 0.2, r * 0.2, 0, Math.PI * 2); ctx.fill();

    if (this.moving && (this.tx !== this.x || this.ty !== this.y)) {
      const gx = this.tx * tile + tile / 2, gy = this.ty * tile + tile / 2;
      ctx.strokeStyle = 'rgba(125,211,252,0.7)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(gx, gy, tile * 0.3, 0, Math.PI * 2); ctx.stroke();
    }
  }
}

if (typeof module !== 'undefined') { module.exports = { Player }; }
