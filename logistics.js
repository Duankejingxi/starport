/* 星港 — logistics.js：物流系统
 * 运输车（A* 寻路自动采集） / 仓库（存储上限） / 物流中心（调度）
 *
 * 设计：
 * - 仓库：每种资源存储上限 base 200，每座仓库 +200
 * - 运输站：每座允许 2 辆运输车；点击运输站 → 点资源点 → 派车
 * - 运输车：A* 寻路往返运输站↔资源点，每 25 秒带回 6 单位
 * - 物流中心：运输车上限 +2/座，速度 +25%/座
 */

// 存储上限由 build.js 提供（浏览器全局）；Node 单独测试时兜底
function _storageBase() {
  try {
    if (typeof STORAGE_BASE !== 'undefined') return STORAGE_BASE;
  } catch (e) {}
  return 200;
}
function _storagePerWarehouse() {
  try {
    if (typeof STORAGE_PER_WAREHOUSE !== 'undefined') return STORAGE_PER_WAREHOUSE;
  } catch (e) {}
  return 200;
}

// 运输车参数
const TRUCK = {
  PER_DEPOT: 2,              // 每座运输站 2 辆
  PER_LOGISTICS: 2,          // 每座物流中心 +2 辆
  SPEED_BONUS: 0.25,         // 每座物流中心速度 +25%
  TRIP_MS: 25000,            // 每 25 秒一趟
  CARRY: 6,                  // 每趟 6 单位
  COST: { iron: 20, rare: 10 }, // 造车成本（在运输站里造）
};

// ============ A* 寻路 ============
// 网格 A*：起点→终点，返回路径 [{x,y}...]（不含起点，含终点）
// 不可走：岩石/环形山/未解锁区（道路优先：代价减半）
function astar(map, builder, sx, sy, tx, ty) {
  // 边界检查
  if (!map.inBounds(tx, ty) || !map.isUnlocked(tx, ty)) return null;
  if (sx === tx && sy === ty) return [];

  const key = (x, y) => y * map.size + x;
  const open = [];            // 优先队列（简单数组实现，地图小够用）
  const cameFrom = new Map();
  const gScore = new Map();
  const fScore = new Map();
  const closed = new Set();

  const h = (x, y) => Math.abs(x - tx) + Math.abs(y - ty); // 曼哈顿

  // 移动代价：道路 0.5，平地 1
  const cost = (x, y) => {
    const b = builder.at(x, y);
    if (b && b.id === 'road') return 0.5;
    return 1;
  };

  // 可走：平地（岩石/环形山挡路），未解锁挡路
  const walkable = (x, y) => {
    if (!map.inBounds(x, y)) return false;
    if (!map.isUnlocked(x, y)) return false;
    // 终点允许是资源点（平地）
    return map.terrain[y][x] === 0;
  };

  gScore.set(key(sx, sy), 0);
  fScore.set(key(sx, sy), h(sx, sy));
  open.push({ x: sx, y: sy, f: h(sx, sy) });

  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let guard = 0;

  while (open.length > 0 && guard++ < 10000) {
    // 取 f 最小的
    let bi = 0;
    for (let i = 1; i < open.length; i++) {
      if (open[i].f < open[bi].f) bi = i;
    }
    const cur = open.splice(bi, 1)[0];
    const ck = key(cur.x, cur.y);

    if (cur.x === tx && cur.y === ty) {
      // 重建路径
      const path = [];
      let k = ck;
      let cx = tx, cy = ty;
      while (cameFrom.has(k)) {
        path.unshift({ x: cx, y: cy });
        const p = cameFrom.get(k);
        cx = p.x; cy = p.y;
        k = key(cx, cy);
      }
      return path;
    }

    if (closed.has(ck)) continue;
    closed.add(ck);

    for (const [dx, dy] of DIRS) {
      const nx = cur.x + dx, ny = cur.y + dy;
      const nk = key(nx, ny);
      if (closed.has(nk)) continue;
      if (!walkable(nx, ny)) continue;

      const tg = gScore.get(ck) + cost(nx, ny);
      if (tg < (gScore.get(nk) ?? Infinity)) {
        cameFrom.set(nk, { x: cur.x, y: cur.y });
        gScore.set(nk, tg);
        const f = tg + h(nx, ny);
        fScore.set(nk, f);
        // 更新或加入 open
        const existing = open.find(n => n.x === nx && n.y === ny);
        if (existing) existing.f = f;
        else open.push({ x: nx, y: ny, f });
      }
    }
  }
  return null; // 无路
}

// ============ 运输车 ============
let TRUCK_SEQ = 1;

class Truck {
  constructor(depotX, depotY) {
    this.id = TRUCK_SEQ++;
    this.depotX = depotX;   // 所属运输站
    this.depotY = depotY;
    this.x = depotX;        // 当前位置（格）
    this.y = depotY;
    this.px = depotX;       // 渲染用浮点位置
    this.py = depotY;
    this.state = 'idle';    // idle | toRes | loading | toDepot | unloading
    this.resX = -1;         // 目标资源点
    this.resY = -1;
    this.resType = null;
    this.path = [];         // 当前路径
    this.pathI = 0;
    this.stateUntil = 0;    // 状态计时
    this.speed = 4;         // 格/秒（基础）
  }

  // 指派到资源点
  assign(rx, ry, resType, map, builder) {
    const path = astar(map, builder, this.depotX, this.depotY, rx, ry);
    if (!path) return false;
    this.resX = rx; this.resY = ry;
    this.resType = resType;
    this.path = path;
    this.pathI = 0;
    this.state = 'toRes';
    return true;
  }

  // 取消指派，回站
  recall(map, builder) {
    const path = astar(map, builder, Math.round(this.px), Math.round(this.py), this.depotX, this.depotY) || [];
    this.path = path;
    this.pathI = 0;
    this.state = 'toDepot';
    this.resX = -1;
  }

  // 更新：返回 {event:'deliver', type, amount} 或 null
  update(now, dt, map, builder, speedMul) {
    const spd = this.speed * speedMul; // 格/秒
    switch (this.state) {
      case 'idle':
        return null;

      case 'toRes':
      case 'toDepot': {
        if (this.pathI >= this.path.length) {
          // 到达
          if (this.state === 'toRes') {
            this.state = 'loading';
            this.stateUntil = now + 2000; // 装货 2 秒
          } else {
            this.state = 'idle';
          }
          return null;
        }
        // 沿路径移动
        const target = this.path[this.pathI];
        const dx = target.x - this.px, dy = target.y - this.py;
        const dist = Math.hypot(dx, dy);
        const step = spd * dt / 1000;
        if (dist <= step) {
          this.px = target.x; this.py = target.y;
          this.pathI++;
        } else {
          this.px += dx / dist * step;
          this.py += dy / dist * step;
        }
        return null;
      }

      case 'loading': {
        if (now >= this.stateUntil) {
          // 装完，返回
          const back = astar(map, builder, this.resX, this.resY, this.depotX, this.depotY);
          this.path = back || [];
          this.pathI = 0;
          this.state = 'toDepot';
          this._loaded = true;
        }
        return null;
      }

      case 'unloading': // 预留状态（当前卸货即时完成）
        this.state = 'idle';
        return null;
    }

    // toDepot 到达后卸货（在上面的 case 里处理到达，转 idle 前先卸货）
    return null;
  }

  // 卸货检查：由 LogisticsManager 在 truck 到达 depot 时调用
  tryUnload() {
    if (this.state === 'toDepot' && this.pathI >= this.path.length && this._loaded) {
      this._loaded = false;
      this.state = 'idle';
      // 自动再出发
      return { type: this.resType, amount: TRUCK.CARRY };
    }
    return null;
  }

  render(ctx, tile) {
    const cx = (this.px + 0.5) * tile, cy = (this.py + 0.5) * tile;
    // 车身
    ctx.fillStyle = '#facc15';
    const s = tile * 0.3;
    ctx.fillRect(cx - s, cy - s * 0.6, s * 2, s * 1.2);
    // 车头
    ctx.fillStyle = '#e07b39';
    ctx.fillRect(cx + s * 0.4, cy - s * 0.4, s * 0.6, s * 0.8);
    // 轮子
    ctx.fillStyle = '#1a1a1a';
    ctx.beginPath();
    ctx.arc(cx - s * 0.5, cy + s * 0.6, s * 0.25, 0, Math.PI * 2);
    ctx.arc(cx + s * 0.5, cy + s * 0.6, s * 0.25, 0, Math.PI * 2);
    ctx.fill();
    // 状态点
    if (this.state !== 'idle') {
      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(cx, cy - s, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

// ============ 物流管理器 ============
class LogisticsManager {
  constructor() {
    this.trucks = [];  // Truck[]
  }

  // 运输车上限 = 运输站×2 + 物流中心×2
  truckCap(builder) {
    return builder.count('depot') * TRUCK.PER_DEPOT +
           builder.count('logistics') * TRUCK.PER_LOGISTICS;
  }

  // 速度倍率 = 1 + 物流中心×0.25
  speedMul(builder) {
    let m = 1 + builder.count('logistics') * TRUCK.SPEED_BONUS;
    // v1.2：轨道电梯终极物流
    if (builder.elevatorSpeedMul) m *= builder.elevatorSpeedMul();
    return m;
  }

  // 存储上限
  storageCap(builder) {
    return _storageBase() + builder.count('warehouse') * _storagePerWarehouse();
  }

  // 是否超存（某种资源）
  isFull(inv, builder, resKey) {
    return (inv[resKey] || 0) >= this.storageCap(builder);
  }

  // 造车（在运输站）
  buildTruck(depotBuilding, inv) {
    if (this.trucks.length >= this.truckCap({ count: () => 0 })) {
      // 注意：这里简化，实际由 game 传入 builder 检查
    }
    if (!canAfford(inv, TRUCK.COST)) {
      return { ok: false, reason: '缺' + missingRes(inv, TRUCK.COST) };
    }
    spendRes(inv, TRUCK.COST);
    const t = new Truck(depotBuilding.x, depotBuilding.y);
    this.trucks.push(t);
    return { ok: true, truck: t };
  }

  // 指派运输车到资源点
  assignTruck(truck, rx, ry, map, builder) {
    const resType = map.resource[ry] && map.resource[ry][rx];
    if (!resType) return { ok: false, reason: '这里没有资源' };
    if (!truck.assign(rx, ry, resType, map, builder)) {
      return { ok: false, reason: '无路可走（被岩石挡住了？）' };
    }
    return { ok: true };
  }

  // 更新所有运输车
  update(now, dt, map, builder, inv, onEvent) {
    const sm = this.speedMul(builder);
    const cap = this.storageCap(builder);
    for (const t of this.trucks) {
      t.update(now, dt, map, builder, sm);
      const dl = t.tryUnload();
      if (dl) {
        // 检查存储上限
        if ((inv[dl.type] || 0) + dl.amount > cap) {
          const canAdd = Math.max(0, cap - (inv[dl.type] || 0));
          if (canAdd > 0) {
            inv[dl.type] += canAdd;
            if (onEvent) onEvent('truck-full', { type: dl.type });
          }
          // 满了就不出发了（保持 idle）
          continue;
        }
        inv[dl.type] = (inv[dl.type] || 0) + dl.amount;
        if (onEvent) onEvent('truck-deliver', { type: dl.type, amount: dl.amount });
        // 自动再出发
        if (t.resX >= 0) {
          const path = astar(map, builder, t.depotX, t.depotY, t.resX, t.resY);
          if (path) {
            t.path = path; t.pathI = 0; t.state = 'toRes';
          }
        }
      }
    }
  }

  render(ctx, tile) {
    for (const t of this.trucks) t.render(ctx, tile);
  }

  // 存档 / 读档
  serialize() {
    return this.trucks.map(t => ({
      depotX: t.depotX, depotY: t.depotY,
      resX: t.resX, resY: t.resY, resType: t.resType,
    }));
  }
  deserialize(arr, map, builder) {
    this.trucks = [];
    for (const d of (arr || [])) {
      const t = new Truck(d.depotX, d.depotY);
      if (d.resX >= 0 && d.resType) {
        t.assign(d.resX, d.resY, d.resType, map, builder);
      }
      this.trucks.push(t);
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = { LogisticsManager, Truck, astar, TRUCK };
}
