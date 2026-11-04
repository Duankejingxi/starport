/* 星港 — map.js：火星地图生成与渲染 */

// 地形：0=平地 1=岩石 2=环形山
const TERRAIN = { FLAT: 0, ROCK: 1, CRATER: 2 };
// 资源：null / 'iron' / 'ice' / 'rare'
const RES_INFO = {
  iron: { name: '铁矿', color: '#e07b39' },
  ice:  { name: '冰水', color: '#7dd3fc' },
  rare: { name: '稀土', color: '#c084fc' },
};

class GameMap {
  constructor(size = 20) {
    this.size = size;
    this.terrain = [];   // [y][x] -> TERRAIN
    this.resource = [];  // [y][x] -> null | 'iron' | 'ice' | 'rare'
    this.generate();
  }

  generate() {
    const n = this.size;
    const cx = Math.floor(n / 2), cy = Math.floor(n / 2);
    for (let y = 0; y < n; y++) {
      this.terrain[y] = [];
      this.resource[y] = [];
      for (let x = 0; x < n; x++) {
        // 出生点周围 3x3 强制平地
        const nearSpawn = Math.abs(x - cx) <= 1 && Math.abs(y - cy) <= 1;
        if (nearSpawn) {
          this.terrain[y][x] = TERRAIN.FLAT;
        } else {
          const r = Math.random();
          this.terrain[y][x] = r < 0.7 ? TERRAIN.FLAT : (r < 0.9 ? TERRAIN.ROCK : TERRAIN.CRATER);
        }
        this.resource[y][x] = null;
      }
    }
    // 随机撒资源（只放在平地上，避开出生区）
    this.scatter('iron', 15);
    this.scatter('ice', 10);
    this.scatter('rare', 8);
  }

  scatter(type, count) {
    const n = this.size;
    const cx = Math.floor(n / 2), cy = Math.floor(n / 2);
    let placed = 0, guard = 0;
    while (placed < count && guard++ < 500) {
      const x = Math.floor(Math.random() * n);
      const y = Math.floor(Math.random() * n);
      const nearSpawn = Math.abs(x - cx) <= 1 && Math.abs(y - cy) <= 1;
      if (nearSpawn) continue;
      if (this.terrain[y][x] !== TERRAIN.FLAT) continue;
      if (this.resource[y][x]) continue;
      this.resource[y][x] = type;
      placed++;
    }
  }

  inBounds(x, y) {
    return x >= 0 && y >= 0 && x < this.size && y < this.size;
  }

  isBuildable(x, y) {
    // 平地、无资源、无建筑才能建
    if (!this.inBounds(x, y)) return false;
    if (this.terrain[y][x] !== TERRAIN.FLAT) return false;
    if (this.resource[y][x]) return false;
    return true;
  }

  render(ctx, tile) {
    const n = this.size;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const px = x * tile, py = y * tile;
        // 地形底色
        let base;
        switch (this.terrain[y][x]) {
          case TERRAIN.ROCK: base = '#4a3226'; break;
          case TERRAIN.CRATER: base = '#1e100a'; break;
          default: base = '#5a2e1a';
        }
        ctx.fillStyle = base;
        ctx.fillRect(px, py, tile, tile);

        // 地形细节
        if (this.terrain[y][x] === TERRAIN.ROCK) {
          ctx.fillStyle = '#5c4030';
          ctx.fillRect(px + tile * 0.2, py + tile * 0.25, tile * 0.25, tile * 0.2);
          ctx.fillRect(px + tile * 0.55, py + tile * 0.6, tile * 0.3, tile * 0.25);
        } else if (this.terrain[y][x] === TERRAIN.CRATER) {
          ctx.strokeStyle = '#3a2214';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(px + tile / 2, py + tile / 2, tile * 0.32, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = '#140a06';
          ctx.beginPath();
          ctx.arc(px + tile / 2, py + tile / 2, tile * 0.22, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // 平地噪点
          ctx.fillStyle = 'rgba(0,0,0,0.08)';
          const sx = ((x * 7 + y * 13) % 5) / 5, sy = ((x * 11 + y * 5) % 5) / 5;
          ctx.fillRect(px + sx * tile * 0.7, py + sy * tile * 0.7, 3, 3);
        }

        // 资源点
        const res = this.resource[y][x];
        if (res) {
          ctx.fillStyle = RES_INFO[res].color;
          const r = tile * 0.16;
          // 三个小菱形
          for (const [ox, oy] of [[-0.18, -0.1], [0.18, -0.1], [0, 0.2]]) {
            const dx = px + tile / 2 + ox * tile, dy = py + tile / 2 + oy * tile;
            ctx.beginPath();
            ctx.moveTo(dx, dy - r);
            ctx.lineTo(dx + r, dy);
            ctx.lineTo(dx, dy + r);
            ctx.lineTo(dx - r, dy);
            ctx.closePath();
            ctx.fill();
          }
        }

        // 网格线（淡）
        ctx.strokeStyle = 'rgba(0,0,0,0.15)';
        ctx.lineWidth = 1;
        ctx.strokeRect(px + 0.5, py + 0.5, tile - 1, tile - 1);
      }
    }
  }
}

// 供 node --check 验证（浏览器环境外不执行）
if (typeof module !== 'undefined') { module.exports = { GameMap, TERRAIN, RES_INFO }; }
