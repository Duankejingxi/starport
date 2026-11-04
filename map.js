/* 星港 — map.js：火星地图 / 扇区解锁 / 迷雾 */

// 地形：0=平地 1=岩石 2=环形山
const TERRAIN = { FLAT: 0, ROCK: 1, CRATER: 2 };
// 可采集资源：null / 'iron' / 'ice' / 'rare'
const MAP_RES = ['iron', 'ice', 'rare'];

// 扇区：30×30 切成 3×3 个 10×10 扇区，中心（1,1）默认解锁
const SECTOR = 10;
const SECTOR_UNLOCK_COST = { iron: 50 };

class GameMap {
  constructor(size = 30) {
    this.size = size;
    this.terrain = [];
    this.resource = [];
    // 扇区解锁状态：3×3，中心 true
    this.sectors = [];
    for (let sy = 0; sy < 3; sy++) {
      this.sectors[sy] = [];
      for (let sx = 0; sx < 3; sx++) {
        this.sectors[sy][sx] = (sx === 1 && sy === 1);
      }
    }
    this.generate();
  }

  sectorOf(x, y) {
    return { sx: Math.floor(x / SECTOR), sy: Math.floor(y / SECTOR) };
  }

  isUnlocked(x, y) {
    const { sx, sy } = this.sectorOf(x, y);
    return !!(this.sectors[sy] && this.sectors[sy][sx]);
  }

  // 解锁一个扇区，返回 {ok, reason}
  unlockSector(sx, sy, inv) {
    if (sx < 0 || sx > 2 || sy < 0 || sy > 2) return { ok: false, reason: '无效扇区' };
    if (this.sectors[sy][sx]) return { ok: false, reason: '已解锁' };
    // 必须与已解锁扇区相邻
    let adjacent = false;
    for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      const nx = sx + dx, ny = sy + dy;
      if (nx >= 0 && nx <= 2 && ny >= 0 && ny <= 2 && this.sectors[ny][nx]) {
        adjacent = true; break;
      }
    }
    if (!adjacent) return { ok: false, reason: '只能解锁相邻扇区' };
    if (!canAfford(inv, SECTOR_UNLOCK_COST)) {
      return { ok: false, reason: '需要铁矿×50，缺' + missingRes(inv, SECTOR_UNLOCK_COST) };
    }
    spendRes(inv, SECTOR_UNLOCK_COST);
    this.sectors[sy][sx] = true;
    this.scatterSector(sx, sy);
    return { ok: true };
  }

  unlockedCount() {
    let n = 0;
    for (let sy = 0; sy < 3; sy++)
      for (let sx = 0; sx < 3; sx++)
        if (this.sectors[sy][sx]) n++;
    return n;
  }

  generate() {
    const n = this.size;
    const c = Math.floor(n / 2);
    for (let y = 0; y < n; y++) {
      this.terrain[y] = [];
      this.resource[y] = [];
      for (let x = 0; x < n; x++) {
        const nearSpawn = Math.abs(x - c) <= 1 && Math.abs(y - c) <= 1;
        if (nearSpawn) {
          this.terrain[y][x] = TERRAIN.FLAT;
        } else {
          const r = Math.random();
          this.terrain[y][x] = r < 0.72 ? TERRAIN.FLAT : (r < 0.9 ? TERRAIN.ROCK : TERRAIN.CRATER);
        }
        this.resource[y][x] = null;
      }
    }
    // 中心扇区撒资源
    this.scatterSector(1, 1);
  }

  // 在指定扇区撒资源
  scatterSector(sx, sy, ironN = 14, iceN = 9, rareN = 7) {
    const c = Math.floor(this.size / 2);
    const x0 = sx * SECTOR, y0 = sy * SECTOR;
    const put = (type, count) => {
      let placed = 0, guard = 0;
      while (placed < count && guard++ < 600) {
        const x = x0 + Math.floor(Math.random() * SECTOR);
        const y = y0 + Math.floor(Math.random() * SECTOR);
        if (!this.inBounds(x, y)) continue;
        const nearSpawn = Math.abs(x - c) <= 1 && Math.abs(y - c) <= 1;
        if (nearSpawn) continue;
        if (this.terrain[y][x] !== TERRAIN.FLAT) continue;
        if (this.resource[y][x]) continue;
        this.resource[y][x] = type;
        placed++;
      }
    };
    put('iron', ironN);
    put('ice', iceN);
    put('rare', rareN);
  }

  inBounds(x, y) {
    return x >= 0 && y >= 0 && x < this.size && y < this.size;
  }

  isBuildable(x, y) {
    if (!this.inBounds(x, y)) return false;
    if (!this.isUnlocked(x, y)) return false;
    if (this.terrain[y][x] !== TERRAIN.FLAT) return false;
    if (this.resource[y][x]) return false;
    return true;
  }

  // 玩家能否走进（岩石/环形山挡路，未解锁区挡路）
  isWalkable(x, y) {
    if (!this.inBounds(x, y)) return false;
    if (!this.isUnlocked(x, y)) return false;
    return this.terrain[y][x] === TERRAIN.FLAT;
  }

  render(ctx, tile) {
    const n = this.size;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const px = x * tile, py = y * tile;
        const unlocked = this.isUnlocked(x, y);

        if (!unlocked) {
          // 迷雾
          ctx.fillStyle = '#0a0a12';
          ctx.fillRect(px, py, tile, tile);
          ctx.strokeStyle = 'rgba(120,120,180,0.12)';
          ctx.lineWidth = 1;
          ctx.strokeRect(px + 0.5, py + 0.5, tile - 1, tile - 1);
          continue;
        }

        // 地形底色
        let base;
        switch (this.terrain[y][x]) {
          case TERRAIN.ROCK: base = '#4a3226'; break;
          case TERRAIN.CRATER: base = '#1e100a'; break;
          default: base = '#5a2e1a';
        }
        ctx.fillStyle = base;
        ctx.fillRect(px, py, tile, tile);

        if (this.terrain[y][x] === TERRAIN.ROCK) {
          ctx.fillStyle = '#5c4030';
          ctx.fillRect(px + tile * 0.2, py + tile * 0.25, tile * 0.25, tile * 0.2);
          ctx.fillRect(px + tile * 0.55, py + tile * 0.6, tile * 0.3, tile * 0.25);
        } else if (this.terrain[y][x] === TERRAIN.CRATER) {
          ctx.strokeStyle = '#3a2214';
          ctx.lineWidth = Math.max(2, tile * 0.08);
          ctx.beginPath();
          ctx.arc(px + tile / 2, py + tile / 2, tile * 0.32, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = '#140a06';
          ctx.beginPath();
          ctx.arc(px + tile / 2, py + tile / 2, tile * 0.22, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = 'rgba(0,0,0,0.08)';
          const sx = ((x * 7 + y * 13) % 5) / 5, sy = ((x * 11 + y * 5) % 5) / 5;
          const d = Math.max(2, tile * 0.08);
          ctx.fillRect(px + sx * tile * 0.7, py + sy * tile * 0.7, d, d);
        }

        // 资源点
        const res = this.resource[y][x];
        if (res && RES_DEFS[res]) {
          ctx.fillStyle = RES_DEFS[res].color;
          const r = tile * 0.14;
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

        ctx.strokeStyle = 'rgba(0,0,0,0.15)';
        ctx.lineWidth = 1;
        ctx.strokeRect(px + 0.5, py + 0.5, tile - 1, tile - 1);
      }
    }

    // 扇区边界线（已解锁区边缘画虚线提示可扩张方向）
    ctx.strokeStyle = 'rgba(125,211,252,0.35)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    for (let sy = 0; sy < 3; sy++) {
      for (let sx = 0; sx < 3; sx++) {
        if (this.sectors[sy][sx]) continue;
        // 与已解锁相邻的未解锁扇区画框
        let adj = false;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const nx = sx + dx, ny = sy + dy;
          if (nx >= 0 && nx <= 2 && ny >= 0 && ny <= 2 && this.sectors[ny][nx]) { adj = true; break; }
        }
        if (adj) {
          ctx.strokeRect(sx * SECTOR * tile + 2, sy * SECTOR * tile + 2, SECTOR * tile - 4, SECTOR * tile - 4);
        }
      }
    }
    ctx.setLineDash([]);
  }
}

if (typeof module !== 'undefined') { module.exports = { GameMap, TERRAIN, SECTOR, SECTOR_UNLOCK_COST }; }
