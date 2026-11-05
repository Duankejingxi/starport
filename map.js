/* 星港 — map.js：火星地图 / 扇区解锁 / 迷雾 / v1.2 大地图 */

// 地形：0=平地 1=岩石 2=环形山 3=峡谷(不可建) 4=极地(冰×2) 5=火山(稀土×2)
const TERRAIN = { FLAT: 0, ROCK: 1, CRATER: 2, CANYON: 3, POLAR: 4, VOLCANO: 5 };
// 可采集资源：null / 'iron' / 'ice' / 'rare' / 'uranium' / 'he3'
const MAP_RES = ['iron', 'ice', 'rare', 'uranium', 'he3'];

// v1.2：50×50 切成 4×4 个扇区（16 个），中心 2×2 默认解锁
const SECTOR_N = 4;                 // 每边扇区数
const SECTOR_UNLOCK_COST = { iron: 50 };
const SECTOR_UNLOCK_COST_FAR = { iron: 120, steel: 20 };  // v1.2：外圈更贵

// v1.2：地形渲染颜色（含小地图）
const TERRAIN_COLORS = {
  0: '#5a2e1a',   // 平地
  1: '#4a3226',   // 岩石
  2: '#1e100a',   // 环形山
  3: '#0d0d18',   // 峡谷
  4: '#b8d4e8',   // 极地
  5: '#3a1510',   // 火山
};

class GameMap {
  constructor(size = 50) {
    this.size = size;
    this.sectorN = SECTOR_N;
    this.sectorSize = size / SECTOR_N;  // 12.5
    this.terrain = [];
    this.resource = [];
    // 扇区解锁状态：4×4，中心 2×2 为 true
    this.sectors = [];
    for (let sy = 0; sy < SECTOR_N; sy++) {
      this.sectors[sy] = [];
      for (let sx = 0; sx < SECTOR_N; sx++) {
        const cx = (sx === 1 || sx === 2) && (sy === 1 || sy === 2);
        this.sectors[sy][sx] = cx;
      }
    }
    this.generate();
  }

  sectorOf(x, y) {
    const sx = Math.min(SECTOR_N - 1, Math.floor(x / this.sectorSize));
    const sy = Math.min(SECTOR_N - 1, Math.floor(y / this.sectorSize));
    return { sx, sy };
  }

  isUnlocked(x, y) {
    const { sx, sy } = this.sectorOf(x, y);
    return !!(this.sectors[sy] && this.sectors[sy][sx]);
  }

  // v1.2：扇区解锁成本（外圈更贵）
  sectorCost(sx, sy) {
    // 中心 2×2 到边缘的曼哈顿距离
    const dx = sx < 1 ? 1 - sx : (sx > 2 ? sx - 2 : 0);
    const dy = sy < 1 ? 1 - sy : (sy > 2 ? sy - 2 : 0);
    const dist = dx + dy;
    return dist >= 2 ? SECTOR_UNLOCK_COST_FAR : SECTOR_UNLOCK_COST;
  }

  // 解锁一个扇区，返回 {ok, reason}
  unlockSector(sx, sy, inv) {
    if (sx < 0 || sx >= SECTOR_N || sy < 0 || sy >= SECTOR_N)
      return { ok: false, reason: '无效扇区' };
    if (this.sectors[sy][sx]) return { ok: false, reason: '已解锁' };
    // 必须与已解锁扇区相邻
    let adjacent = false;
    for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      const nx = sx + dx, ny = sy + dy;
      if (nx >= 0 && nx < SECTOR_N && ny >= 0 && ny < SECTOR_N && this.sectors[ny][nx]) {
        adjacent = true; break;
      }
    }
    if (!adjacent) return { ok: false, reason: '只能解锁相邻扇区' };
    const cost = this.sectorCost(sx, sy);
    if (!canAfford(inv, cost)) {
      return { ok: false, reason: '需要' + Object.entries(cost).map(([k,v])=>`${RES_DEFS[k].name}×${v}`).join(' ') + '，缺' + missingRes(inv, cost) };
    }
    spendRes(inv, cost);
    this.sectors[sy][sx] = true;
    this.scatterSector(sx, sy);
    this.invalidateTerrain();  // v1.9：迷雾变化，重绘离屏地形
    return { ok: true };
  }

  unlockedCount() {
    let n = 0;
    for (let sy = 0; sy < SECTOR_N; sy++)
      for (let sx = 0; sx < SECTOR_N; sx++)
        if (this.sectors[sy][sx]) n++;
    return n;
  }

  totalSectors() { return SECTOR_N * SECTOR_N; }

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
          this.terrain[y][x] = this.pickTerrain(x, y, n);
        }
        this.resource[y][x] = null;
      }
    }
    // v1.2：峡谷（两条横贯）
    this.carveCanyon();
    // v1.2：火山（3 处）
    this.placeVolcanoes();
    // 中心 2×2 扇区撒资源
    for (const sy of [1, 2]) for (const sx of [1, 2]) this.scatterSector(sx, sy);
  }

  // v1.2：地形生成（含极地带）
  pickTerrain(x, y, n) {
    // 极地带：顶部/底部 6 行
    if (y < 6 || y >= n - 6) {
      const r = Math.random();
      return r < 0.55 ? TERRAIN.POLAR : (r < 0.85 ? TERRAIN.FLAT : TERRAIN.ROCK);
    }
    const r = Math.random();
    return r < 0.70 ? TERRAIN.FLAT : (r < 0.88 ? TERRAIN.ROCK : TERRAIN.CRATER);
  }

  // v1.2：挖峡谷（不可建、不可走）
  carveCanyon() {
    const n = this.size;
    // 横向峡谷
    const y1 = Math.floor(n * 0.3), y2 = Math.floor(n * 0.72);
    for (const yy of [y1, y2]) {
      for (let x = 2; x < n - 2; x++) {
        const wob = Math.round(Math.sin(x * 0.3) * 2);
        for (let dy = -1; dy <= 1; dy++) {
          const y = yy + wob + dy;
          if (y < 0 || y >= n) continue;
          const c = Math.floor(n / 2);
          if (Math.abs(x - c) <= 2 && Math.abs(y - c) <= 2) continue; // 保护出生区
          if (this.terrain[y][x] === TERRAIN.VOLCANO) continue;
          this.terrain[y][x] = TERRAIN.CANYON;
          this.resource[y][x] = null;
        }
      }
    }
  }

  // v1.2：放 3 座火山（2×2）
  placeVolcanoes() {
    const n = this.size;
    const spots = [
      { x: Math.floor(n * 0.2), y: Math.floor(n * 0.55) },
      { x: Math.floor(n * 0.78), y: Math.floor(n * 0.35) },
      { x: Math.floor(n * 0.6), y: Math.floor(n * 0.85) },
    ];
    this.volcanoes = [];
    for (const s of spots) {
      for (let dy = 0; dy < 2; dy++) for (let dx = 0; dx < 2; dx++) {
        const x = s.x + dx, y = s.y + dy;
        if (!this.inBounds(x, y)) continue;
        const c = Math.floor(n / 2);
        if (Math.abs(x - c) <= 2 && Math.abs(y - c) <= 2) continue;
        this.terrain[y][x] = TERRAIN.VOLCANO;
        this.resource[y][x] = 'uranium';  // 火山自带铀矿
      }
      this.volcanoes.push(s);
    }
  }

  // 在指定扇区撒资源
  scatterSector(sx, sy) {
    const c = Math.floor(this.size / 2);
    const x0 = Math.floor(sx * this.sectorSize), y0 = Math.floor(sy * this.sectorSize);
    const x1 = Math.min(this.size, Math.floor((sx + 1) * this.sectorSize));
    const y1 = Math.min(this.size, Math.floor((sy + 1) * this.sectorSize));
    const put = (type, count, terrainOk) => {
      let placed = 0, guard = 0;
      while (placed < count && guard++ < 800) {
        const x = x0 + Math.floor(Math.random() * (x1 - x0));
        const y = y0 + Math.floor(Math.random() * (y1 - y0));
        if (!this.inBounds(x, y)) continue;
        const nearSpawn = Math.abs(x - c) <= 1 && Math.abs(y - c) <= 1;
        if (nearSpawn) continue;
        const t = this.terrain[y][x];
        if (terrainOk && !terrainOk.includes(t)) continue;
        if (!terrainOk && t !== TERRAIN.FLAT) continue;
        if (this.resource[y][x]) continue;
        this.resource[y][x] = type;
        placed++;
      }
    };
    put('iron', 16);
    put('ice', 10);
    put('rare', 8);
    // v1.2：极地冰×2（极地地形上多撒冰）
    put('ice', 8, [TERRAIN.POLAR]);
    // v1.2：铀矿（火山地形，扇区内有火山才撒）
    put('uranium', 6, [TERRAIN.VOLCANO, TERRAIN.FLAT]);
    // v1.2：氦3（极稀有，环形山/平地）
    put('he3', 2, [TERRAIN.CRATER, TERRAIN.FLAT]);
  }

  inBounds(x, y) {
    return x >= 0 && y >= 0 && x < this.size && y < this.size;
  }

  // v1.2：资源产量倍率（极地冰×2，火山稀土×2）
  resYieldMult(x, y, resType) {
    const t = this.terrain[y][x];
    if (resType === 'ice' && t === TERRAIN.POLAR) return 2;
    if (resType === 'rare' && t === TERRAIN.VOLCANO) return 2;
    if (resType === 'uranium' && t === TERRAIN.VOLCANO) return 2;
    return 1;
  }

  isBuildable(x, y) {
    if (!this.inBounds(x, y)) return false;
    if (!this.isUnlocked(x, y)) return false;
    const t = this.terrain[y][x];
    // 峡谷不可建；其余可建
    if (t === TERRAIN.CANYON) return false;
    if (t !== TERRAIN.FLAT && t !== TERRAIN.POLAR && t !== TERRAIN.VOLCANO) return false;
    if (this.resource[y][x]) return false;
    return true;
  }

  // 玩家能否走进
  isWalkable(x, y) {
    if (!this.inBounds(x, y)) return false;
    if (!this.isUnlocked(x, y)) return false;
    const t = this.terrain[y][x];
    return t === TERRAIN.FLAT || t === TERRAIN.POLAR || t === TERRAIN.VOLCANO;
  }

  // v1.2：地形名称（UI 用）
  terrainName(t) {
    return ['平地', '岩石', '环形山', '峡谷', '极地', '火山'][t] || '未知';
  }

  // v1.9：静态地形离屏预渲染（50×50 每帧 2500 格 fillRect+stroke 手机上太卡）
  // 地形+迷雾+扇区边框画到离屏 canvas，主循环只 drawImage；资源点稀疏，逐帧画。
  renderTerrainOffscreen(tile) {
    const n = this.size;
    if (!this._off || this._offTile !== tile) {
      this._off = document.createElement('canvas');
      this._off.width = n * tile;
      this._off.height = n * tile;
      this._offTile = tile;
    }
    const ctx = this._off.getContext('2d');
    const c = ctx;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const px = x * tile, py = y * tile;
        const unlocked = this.isUnlocked(x, y);
        if (!unlocked) {
          c.fillStyle = '#0a0a12';
          c.fillRect(px, py, tile, tile);
          c.strokeStyle = 'rgba(120,120,180,0.12)';
          c.lineWidth = 1;
          c.strokeRect(px + 0.5, py + 0.5, tile - 1, tile - 1);
          continue;
        }
        const t = this.terrain[y][x];
        c.fillStyle = TERRAIN_COLORS[t] || '#5a2e1a';
        c.fillRect(px, py, tile, tile);
        if (t === TERRAIN.ROCK) {
          c.fillStyle = '#5c4030';
          c.fillRect(px + tile * 0.2, py + tile * 0.25, tile * 0.25, tile * 0.2);
          c.fillRect(px + tile * 0.55, py + tile * 0.6, tile * 0.3, tile * 0.25);
        } else if (t === TERRAIN.CRATER) {
          c.strokeStyle = '#3a2214';
          c.lineWidth = Math.max(2, tile * 0.08);
          c.beginPath();
          c.arc(px + tile / 2, py + tile / 2, tile * 0.32, 0, Math.PI * 2);
          c.stroke();
          c.fillStyle = '#140a06';
          c.beginPath();
          c.arc(px + tile / 2, py + tile / 2, tile * 0.22, 0, Math.PI * 2);
          c.fill();
        } else if (t === TERRAIN.CANYON) {
          c.fillStyle = '#05050c';
          c.fillRect(px + tile * 0.15, py, tile * 0.7, tile);
          c.strokeStyle = '#2a2a4a';
          c.lineWidth = 1;
          c.beginPath();
          c.moveTo(px + tile * 0.15, py); c.lineTo(px + tile * 0.15, py + tile);
          c.moveTo(px + tile * 0.85, py); c.lineTo(px + tile * 0.85, py + tile);
          c.stroke();
        } else if (t === TERRAIN.POLAR) {
          c.fillStyle = 'rgba(255,255,255,0.35)';
          const sx = ((x * 7 + y * 13) % 5) / 5, sy = ((x * 11 + y * 5) % 5) / 5;
          c.fillRect(px + sx * tile * 0.7, py + sy * tile * 0.7, tile * 0.12, tile * 0.12);
          c.fillStyle = '#7dd3fc';
          c.font = `${Math.max(6, tile * 0.25)}px sans-serif`;
          c.fillText('❄', px + tile * 0.35, py + tile * 0.7);
        } else if (t === TERRAIN.VOLCANO) {
          c.fillStyle = '#ff6a2a';
          c.beginPath();
          c.arc(px + tile / 2, py + tile / 2, tile * 0.18, 0, Math.PI * 2);
          c.fill();
          c.fillStyle = '#ffd23c';
          c.beginPath();
          c.arc(px + tile / 2, py + tile / 2, tile * 0.09, 0, Math.PI * 2);
          c.fill();
        } else {
          c.fillStyle = 'rgba(0,0,0,0.08)';
          const sx = ((x * 7 + y * 13) % 5) / 5, sy = ((x * 11 + y * 5) % 5) / 5;
          const d = Math.max(2, tile * 0.08);
          c.fillRect(px + sx * tile * 0.7, py + sy * tile * 0.7, d, d);
        }
        c.strokeStyle = 'rgba(0,0,0,0.15)';
        c.lineWidth = 1;
        c.strokeRect(px + 0.5, py + 0.5, tile - 1, tile - 1);
      }
    }
    // 扇区边界虚线
    c.strokeStyle = 'rgba(125,211,252,0.35)';
    c.lineWidth = 2;
    c.setLineDash([6, 4]);
    for (let sy = 0; sy < SECTOR_N; sy++) {
      for (let sx = 0; sx < SECTOR_N; sx++) {
        if (this.sectors[sy][sx]) continue;
        let adj = false;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const nx = sx + dx, ny = sy + dy;
          if (nx >= 0 && nx < SECTOR_N && ny >= 0 && ny < SECTOR_N && this.sectors[ny][nx]) { adj = true; break; }
        }
        if (adj) {
          const ss = this.sectorSize * tile;
          c.strokeRect(sx * ss + 2, sy * ss + 2, ss - 4, ss - 4);
        }
      }
    }
    c.setLineDash([]);
    this._offDirty = false;
  }

  // 扇区解锁/资源变化后调用
  invalidateTerrain() { this._offDirty = true; }

  // 主循环调用：贴离屏 + 画资源点（稀疏）
  renderFast(ctx, tile, camView) {
    const n = this.size;
    const offTile = 32;
    if (!this._off || this._offDirty || this._offTile !== offTile) {
      this.renderTerrainOffscreen(offTile);
    }
    // 把离屏（offTile/格）缩放到当前 tile/格
    ctx.drawImage(this._off, 0, 0, n * offTile, n * offTile, 0, 0, n * tile, n * tile);
    // 资源点：只画视野内的
    const r = camView || { x0: 0, y0: 0, x1: n - 1, y1: n - 1 };
    for (let y = r.y0; y <= r.y1; y++) {
      for (let x = r.x0; x <= r.x1; x++) {
        const res = this.resource[y] && this.resource[y][x];
        if (!res || !RES_DEFS[res] || !this.isUnlocked(x, y)) continue;
        const px = x * tile, py = y * tile;
        ctx.fillStyle = RES_DEFS[res].color;
        const rr = tile * 0.14;
        for (const [ox, oy] of [[-0.18, -0.1], [0.18, -0.1], [0, 0.2]]) {
          const dx = px + tile / 2 + ox * tile, dy = py + tile / 2 + oy * tile;
          ctx.beginPath();
          ctx.moveTo(dx, dy - rr);
          ctx.lineTo(dx + rr, dy);
          ctx.lineTo(dx, dy + rr);
          ctx.lineTo(dx - rr, dy);
          ctx.closePath();
          ctx.fill();
        }
      }
    }
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
        const t = this.terrain[y][x];
        ctx.fillStyle = TERRAIN_COLORS[t] || '#5a2e1a';
        ctx.fillRect(px, py, tile, tile);

        if (t === TERRAIN.ROCK) {
          ctx.fillStyle = '#5c4030';
          ctx.fillRect(px + tile * 0.2, py + tile * 0.25, tile * 0.25, tile * 0.2);
          ctx.fillRect(px + tile * 0.55, py + tile * 0.6, tile * 0.3, tile * 0.25);
        } else if (t === TERRAIN.CRATER) {
          ctx.strokeStyle = '#3a2214';
          ctx.lineWidth = Math.max(2, tile * 0.08);
          ctx.beginPath();
          ctx.arc(px + tile / 2, py + tile / 2, tile * 0.32, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = '#140a06';
          ctx.beginPath();
          ctx.arc(px + tile / 2, py + tile / 2, tile * 0.22, 0, Math.PI * 2);
          ctx.fill();
        } else if (t === TERRAIN.CANYON) {
          // 峡谷：深沟
          ctx.fillStyle = '#05050c';
          ctx.fillRect(px + tile * 0.15, py, tile * 0.7, tile);
          ctx.strokeStyle = '#2a2a4a';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px + tile * 0.15, py); ctx.lineTo(px + tile * 0.15, py + tile);
          ctx.moveTo(px + tile * 0.85, py); ctx.lineTo(px + tile * 0.85, py + tile);
          ctx.stroke();
        } else if (t === TERRAIN.POLAR) {
          // 极地：冰晶
          ctx.fillStyle = 'rgba(255,255,255,0.35)';
          const sx = ((x * 7 + y * 13) % 5) / 5, sy = ((x * 11 + y * 5) % 5) / 5;
          ctx.fillRect(px + sx * tile * 0.7, py + sy * tile * 0.7, tile * 0.12, tile * 0.12);
          ctx.fillStyle = '#7dd3fc';
          ctx.font = `${Math.max(6, tile * 0.25)}px sans-serif`;
          ctx.fillText('❄', px + tile * 0.35, py + tile * 0.7);
        } else if (t === TERRAIN.VOLCANO) {
          // 火山：熔岩
          ctx.fillStyle = '#ff6a2a';
          ctx.beginPath();
          ctx.arc(px + tile / 2, py + tile / 2, tile * 0.18, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#ffd23c';
          ctx.beginPath();
          ctx.arc(px + tile / 2, py + tile / 2, tile * 0.09, 0, Math.PI * 2);
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

    // 扇区边界线（可扩张方向画虚线）
    ctx.strokeStyle = 'rgba(125,211,252,0.35)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    for (let sy = 0; sy < SECTOR_N; sy++) {
      for (let sx = 0; sx < SECTOR_N; sx++) {
        if (this.sectors[sy][sx]) continue;
        let adj = false;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const nx = sx + dx, ny = sy + dy;
          if (nx >= 0 && nx < SECTOR_N && ny >= 0 && ny < SECTOR_N && this.sectors[ny][nx]) { adj = true; break; }
        }
        if (adj) {
          const ss = this.sectorSize * tile;
          ctx.strokeRect(sx * ss + 2, sy * ss + 2, ss - 4, ss - 4);
        }
      }
    }
    ctx.setLineDash([]);
  }

  // v1.2：小地图地形色（含资源/建筑由 game.js 叠加）
  minimapColor(x, y) {
    if (!this.isUnlocked(x, y)) return '#0a0a12';
    const t = this.terrain[y][x];
    const res = this.resource[y][x];
    if (res && RES_DEFS[res]) return RES_DEFS[res].color;
    return TERRAIN_COLORS[t] || '#5a2e1a';
  }
}

if (typeof module !== 'undefined') { module.exports = { GameMap, TERRAIN, SECTOR_N, SECTOR_UNLOCK_COST, SECTOR_UNLOCK_COST_FAR, TERRAIN_COLORS }; }
