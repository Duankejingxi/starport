/* 星港 — ocean.js：地下冰海系统（B2 层大型水体）
 * 背景：深层钻探发现地下冰海（B2 层），含可饮用液态水、深海藻床与珍珠矿脉。
 * 纯原生 JS，中文注释。独立于地表 / 地下城：自带 40×40 网格与建筑体系。
 *
 * 对外接口：
 *   - const ocean = new OceanManager();
 *   - ocean.unlock()                                   // 解锁海洋
 *   - ocean.update(dtMs, game)                         // 主循环调用（潜艇移动/事件调度）
 *   - ocean.produce(dtMs) -> { water, food, pearl, tech }  // 主循环调用，结算产出
 *   - ocean.renderOceanPanel() -> HTML 字符串（深色主题）
 *   - ocean.serialize() / ocean.deserialize(data)     // 存档字段 ocean: {unlocked, tiles, buildings, subs}
 *   - ocean.onEvent = (type, data) => {}               // UI 事件回调，game.js 设置
 *
 * 新资源：
 *   - algae（深海藻）：1 单位藻 = 3 单位食物（produce 里已折算进 food）
 *   - pearl（珍珠矿）：高价值贸易资源，game 的贸易系统可直接使用
 */

// ============ 基础常量 ============
const OCEAN = {
  SIZE: 40,                 // 海洋网格：40×40（独立于地表/地下城）
  UNLOCK_DEPTH: 2000,       // 解锁条件：钻探深度（米），由 game 判断
  WARM_CURRENT_DURATION: 60 * 1000,   // 暖流持续 60 秒
  WARM_CURRENT_MUL: 1.5,    // 暖流期间产量 +50%
  BEAST_WARN_MS: 20 * 1000, // 巨兽预警 20 秒
  ICE_MELT_RADIUS: 6,       // 冰盖融化解锁半径（格）
  SUB_DOCK_RANGE: 3,        // 潜艇装卸货的有效半径（格）
};

// ============ 海洋地形 ============
// 0 浅海 / 1 深海 / 2 海沟 / 3 热泉口 / 4 冰盖
const TERRAIN = {
  SHALLOW: 0,
  DEEP: 1,
  TRENCH: 2,
  VENT: 3,
  ICE: 4,
};
const TERRAIN_INFO = {
  [TERRAIN.SHALLOW]: { name: '浅海',   color: '#1b6ca8', emoji: '🩵', pass: true,  moveCost: 1, build: true,  desc: '光照充足，适合建造大多数水下设施' },
  [TERRAIN.DEEP]:    { name: '深海',   color: '#0b3d6e', emoji: '💙', pass: true,  moveCost: 1, build: true,  desc: '水压较高，藻类农场产量 +20%' },
  [TERRAIN.TRENCH]:  { name: '海沟',   color: '#061a38', emoji: '🕳️', pass: true,  moveCost: 3, build: false, desc: '极深海沟，潜艇通过减速，不可建造' },
  [TERRAIN.VENT]:    { name: '热泉口', color: '#7a2e0e', emoji: '♨️', pass: true,  moveCost: 2, build: false, desc: '海底热泉：珍珠采集站建在 2 格内产量 +50%' },
  [TERRAIN.ICE]:     { name: '冰盖',   color: '#bfe6f5', emoji: '🧊', pass: false, moveCost: 99, build: false, desc: '厚冰盖：潜艇无法通过，融化事件后解锁' },
};

// ============ 新资源 ============
const OCEAN_RES = {
  algae: { name: '深海藻', emoji: '🌿', foodValue: 3, desc: '1 单位深海藻 = 3 单位食物，藻类农场产出' },
  pearl: { name: '珍珠矿', emoji: '🦪', tradeValue: 25, desc: '高价值贸易资源，珍珠采集站产出' },
};

// ============ 水下建筑配置 ============
// 等级从 1 开始（配置数组下标 0 = 1 级）。cost 为建造/升级到该级的花费。
const OCEAN_BUILDINGS = {
  // 海水淡化厂：产水 10/25/60（单位：水/分钟）
  desalinate: {
    name: '海水淡化厂', emoji: '💧', maxLevel: 3,
    desc: '将海水淡化为饮用水，城市水源的重要补充',
    needTerrain: [TERRAIN.SHALLOW, TERRAIN.DEEP],  // 可建造地形
    levels: [
      { cost: { iron: 60, energy: 40 },  water: 10, upkeep: { energy: 2 } },
      { cost: { iron: 150, energy: 100 }, water: 25, upkeep: { energy: 5 } },
      { cost: { iron: 400, energy: 260 }, water: 60, upkeep: { energy: 12 } },
    ],
  },
  // 藻类农场：产食物 8/20/50（已按藻→食物折算前为藻单位，produce 输出 food）
  algae_farm: {
    name: '藻类农场', emoji: '🌿', maxLevel: 3,
    desc: '培育深海藻，1 藻 = 3 食物；建在深海产量 +20%',
    needTerrain: [TERRAIN.SHALLOW, TERRAIN.DEEP],
    levels: [
      { cost: { iron: 50, energy: 30 },  food: 8,  upkeep: { energy: 2 } },
      { cost: { iron: 130, energy: 80 }, food: 20, upkeep: { energy: 4 } },
      { cost: { iron: 340, energy: 200 }, food: 50, upkeep: { energy: 10 } },
    ],
  },
  // 珍珠采集站：产 pearl（珍珠矿）
  pearl_station: {
    name: '珍珠采集站', emoji: '🦪', maxLevel: 3,
    desc: '采集珍珠矿；热泉口 2 格内产量 +50%，高价值贸易品',
    needTerrain: [TERRAIN.SHALLOW, TERRAIN.DEEP],
    levels: [
      { cost: { iron: 80, energy: 50 },   pearl: 2, upkeep: { energy: 3 } },
      { cost: { iron: 200, energy: 120 }, pearl: 5, upkeep: { energy: 6 } },
      { cost: { iron: 500, energy: 300 }, pearl: 12, upkeep: { energy: 14 } },
    ],
  },
  // 水下居住舱：人口 +8/20/50（人口容量）
  habitat: {
    name: '水下居住舱', emoji: '🏠', maxLevel: 3,
    desc: '耐压居住舱，提供人口容量',
    needTerrain: [TERRAIN.SHALLOW],
    levels: [
      { cost: { iron: 70, energy: 40 },  popCap: 8,  upkeep: { energy: 2 } },
      { cost: { iron: 180, energy: 110 }, popCap: 20, upkeep: { energy: 5 } },
      { cost: { iron: 450, energy: 280 }, popCap: 50, upkeep: { energy: 12 } },
    ],
  },
  // 潜艇船坞：解锁潜艇（每座船坞支持的潜艇上限）
  dock: {
    name: '潜艇船坞', emoji: '🚢', maxLevel: 3,
    desc: '建造与维护潜艇，每级 +2 艘潜艇上限',
    needTerrain: [TERRAIN.SHALLOW],
    levels: [
      { cost: { iron: 120, energy: 80 },  subCap: 2, upkeep: { energy: 4 } },
      { cost: { iron: 300, energy: 200 }, subCap: 4, upkeep: { energy: 8 } },
      { cost: { iron: 700, energy: 450 }, subCap: 6, upkeep: { energy: 16 } },
    ],
  },
  // 深海实验室：科技 ×2（产出科技点，倍率加成由 game 的科技系统叠加）
  lab: {
    name: '深海实验室', emoji: '🔬', maxLevel: 3,
    desc: '研究深海生态与热泉地质，产出科技点（×2 效率）',
    needTerrain: [TERRAIN.SHALLOW, TERRAIN.DEEP],
    levels: [
      { cost: { iron: 100, energy: 90 },  tech: 2, upkeep: { energy: 6 } },
      { cost: { iron: 260, energy: 220 }, tech: 5, upkeep: { energy: 12 } },
      { cost: { iron: 620, energy: 520 }, tech: 12, upkeep: { energy: 26 } },
    ],
  },
  // 护卫舰：防御深海巨兽（事件建筑，非生产建筑）
  frigate: {
    name: '护卫舰', emoji: '🛡️', maxLevel: 3,
    desc: '武装护卫舰，巨兽来袭时保护半径内建筑',
    needTerrain: [TERRAIN.SHALLOW, TERRAIN.DEEP],
    levels: [
      { cost: { iron: 150, energy: 100 }, guardRadius: 4, upkeep: { energy: 6 } },
      { cost: { iron: 380, energy: 250 }, guardRadius: 6, upkeep: { energy: 12 } },
      { cost: { iron: 900, energy: 600 }, guardRadius: 9, upkeep: { energy: 24 } },
    ],
  },
};

// 建筑 id → 中文名速查
const OCEAN_BUILDING_IDS = Object.keys(OCEAN_BUILDINGS);

// ============ 潜艇配置 ============
// 潜艇：在水下建筑之间自动运输资源。3 级可升级（速度/载重）。
const SUB = {
  BUILD_COST: { iron: 90, energy: 60 },  // 建造一艘的花费
  LOAD_TIME_MS: 5 * 1000,    // 装货时间
  UNLOAD_TIME_MS: 5 * 1000,  // 卸货时间
  // 等级：速度（格/秒）、载重（资源单位/趟）
  LEVELS: [
    { speed: 2,  cargo: 20,  upgradeCost: { iron: 60, energy: 40 } },    // 1 级
    { speed: 3,  cargo: 45,  upgradeCost: { iron: 150, energy: 100 } },  // 2 级
    { speed: 4.5, cargo: 100, upgradeCost: { iron: 380, energy: 250 } }, // 3 级（满级）
  ],
  MAX_LEVEL: 3,
  // 运输什么：潜艇把各建筑产出运到“集散中心”（第一座淡化厂/船坞处），
  // 简化：潜艇往返于“产出建筑 → 最近的船坞”，资源在到达船坞时计入城市库存。
  // produce() 返回的资源即“已运抵”部分 + 建筑直供部分（见 produce 注释）。
  DIRECT_RATIO: 0.4,  // 无潜艇时建筑仍有 40% 产量直供（管道/缆车），潜艇补足剩余
};

// ============ 海洋事件参数 ============
const OCEAN_EVENTS = {
  // 暖流：首次解锁后 3 分钟，之后每 6~10 分钟，产量 +50% 持续 60 秒
  WARM: { FIRST_AT: 3 * 60 * 1000, INTERVAL_MIN: 6 * 60 * 1000, INTERVAL_MAX: 10 * 60 * 1000 },
  // 深海巨兽：首次 8 分钟后，之后每 10~16 分钟；预警 20 秒后随机破坏一栋水下建筑（护卫舰可挡）
  BEAST: { FIRST_AT: 8 * 60 * 1000, INTERVAL_MIN: 10 * 60 * 1000, INTERVAL_MAX: 16 * 60 * 1000 },
  // 冰盖融化：首次 12 分钟后（一次性），融化一块冰盖区域，解锁新可建造/可通行区域
  MELT: { FIRST_AT: 12 * 60 * 1000 },
};

// ============ 小工具 ============
// 简单可播种随机数（地形生成用，保证同一存档地形一致）
function makeRng(seed) {
  let s = seed >>> 0;
  if (s === 0) s = 0x9e3779b9;
  return function () {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    s >>>= 0;
    return s / 0xffffffff;
  };
}
// 网格 key
function tkey(x, y) { return x + ',' + y; }
// 欧几里得距离
function tdist(ax, ay, bx, by) { return Math.hypot(ax - bx, ay - by); }

/* ================================================================
 * 海洋地形生成
 * 规则：
 *  - 以中心为深海，向外渐变为浅海（环形深度梯度）
 *  - 随机生成 2~3 条海沟（折线），海沟不可建造、潜艇减速
 *  - 海沟附近生成热泉口（珍珠加成点）
 *  - 边缘生成冰盖斑块（不可通行，融化事件后解锁）
 * ================================================================ */
function genOceanTerrain(seed) {
  const size = OCEAN.SIZE;
  const rng = makeRng(seed);
  const tiles = [];
  const cx = size / 2, cy = size / 2;
  const maxR = Math.hypot(cx, cy);

  // 第一遍：深度梯度 → 浅海 / 深海
  for (let y = 0; y < size; y++) {
    const row = [];
    for (let x = 0; x < size; x++) {
      const r = Math.hypot(x - cx, y - cy) / maxR;  // 0 中心 → 1 边缘
      // 中心深、外围浅，叠加噪声让海岸线不规则
      const n = (rng() - 0.5) * 0.25;
      row.push(r + n < 0.55 ? TERRAIN.DEEP : TERRAIN.SHALLOW);
    }
    tiles.push(row);
  }

  // 第二遍：海沟（2~3 条随机折线）
  const trenchCount = 2 + Math.floor(rng() * 2);
  const trenchCells = [];
  for (let t = 0; t < trenchCount; t++) {
    let x = Math.floor(rng() * size), y = Math.floor(rng() * size);
    let dx = rng() < 0.5 ? 1 : -1, dy = rng() < 0.5 ? 1 : -1;
    if (rng() < 0.5) { dx = 0; } else { dy = 0; }
    const len = 8 + Math.floor(rng() * 10);
    for (let i = 0; i < len; i++) {
      if (x >= 0 && x < size && y >= 0 && y < size) {
        tiles[y][x] = TERRAIN.TRENCH;
        trenchCells.push([x, y]);
      }
      // 随机转向，保持折线感
      if (rng() < 0.3) {
        const ndx = Math.floor(rng() * 3) - 1, ndy = Math.floor(rng() * 3) - 1;
        if (ndx !== 0 || ndy !== 0) { dx = ndx; dy = ndy; }
      }
      x += dx; y += dy;
    }
  }

  // 第三遍：热泉口（海沟邻格随机生成 4~7 个）
  let vents = 0;
  const ventTarget = 4 + Math.floor(rng() * 4);
  let guard = 0;
  while (vents < ventTarget && guard++ < 500 && trenchCells.length > 0) {
    const [tx, ty] = trenchCells[Math.floor(rng() * trenchCells.length)];
    const x = tx + Math.floor(rng() * 5) - 2;
    const y = ty + Math.floor(rng() * 5) - 2;
    if (x >= 0 && x < size && y >= 0 && y < size && tiles[y][x] !== TERRAIN.TRENCH) {
      tiles[y][x] = TERRAIN.VENT;
      vents++;
    }
  }

  // 第四遍：冰盖（边缘斑块，3~5 块，每块半径 2~4）
  const iceCount = 3 + Math.floor(rng() * 3);
  const iceRegions = [];  // 记录冰盖区域中心，供融化事件使用
  for (let i = 0; i < iceCount; i++) {
    // 选边缘位置
    const edge = Math.floor(rng() * 4);
    let ix, iy;
    if (edge === 0) { ix = Math.floor(rng() * size); iy = Math.floor(rng() * 4); }
    else if (edge === 1) { ix = Math.floor(rng() * size); iy = size - 1 - Math.floor(rng() * 4); }
    else if (edge === 2) { ix = Math.floor(rng() * 4); iy = Math.floor(rng() * size); }
    else { ix = size - 1 - Math.floor(rng() * 4); iy = Math.floor(rng() * size); }
    const rad = 2 + Math.floor(rng() * 3);
    for (let y = Math.max(0, iy - rad); y <= Math.min(size - 1, iy + rad); y++) {
      for (let x = Math.max(0, ix - rad); x <= Math.min(size - 1, ix + rad); x++) {
        if (Math.hypot(x - ix, y - iy) <= rad && rng() < 0.85) {
          tiles[y][x] = TERRAIN.ICE;
        }
      }
    }
    iceRegions.push({ x: ix, y: iy, r: rad, melted: false });
  }

  return { tiles, iceRegions };
}

/* ================================================================
 * 水下寻路：A*（简化版）
 *  - 网格 40×40，8 方向移动
 *  - 冰盖（未融化）不可通过；海沟 moveCost=3；热泉口 moveCost=2
 *  - 返回路径点数组 [{x,y}...]，无路返回 null
 * ================================================================ */
function oceanAStar(tiles, iceMelted, sx, sy, tx, ty) {
  const size = OCEAN.SIZE;
  const inB = (x, y) => x >= 0 && y >= 0 && x < size && y < size;
  if (!inB(sx, sy) || !inB(tx, ty)) return null;
  if (sx === tx && sy === ty) return [{ x: sx, y: sy }];

  // 是否可通行
  const passable = (x, y) => {
    const t = tiles[y][x];
    if (t === TERRAIN.ICE && !iceMelted) return false;
    return TERRAIN_INFO[t].pass;
  };
  if (!passable(tx, ty)) {
    // 目标不可通行时，找目标周围最近的可通行格
    let best = null, bestD = Infinity;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
      const nx = tx + dx, ny = ty + dy;
      if (inB(nx, ny) && passable(nx, ny)) {
        const d = Math.hypot(dx, dy);
        if (d < bestD) { bestD = d; best = { x: nx, y: ny }; }
      }
    }
    if (!best) return null;
    tx = best.x; ty = best.y;
  }

  const DIRS = [
    [1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1],
    [1, 1, 1.4142], [1, -1, 1.4142], [-1, 1, 1.4142], [-1, -1, 1.4142],
  ];
  const h = (x, y) => Math.hypot(x - tx, y - ty);
  const gScore = new Map();   // key -> g
  const cameFrom = new Map(); // key -> parent key
  const open = [{ x: sx, y: sy, f: h(sx, sy) }];
  gScore.set(tkey(sx, sy), 0);
  const closed = new Set();
  let guard = 0;

  while (open.length > 0 && guard++ < 8000) {
    // 取 f 最小的节点（40×40 网格规模小，线性扫描足够）
    let bi = 0;
    for (let i = 1; i < open.length; i++) if (open[i].f < open[bi].f) bi = i;
    const cur = open.splice(bi, 1)[0];
    const ck = tkey(cur.x, cur.y);
    if (closed.has(ck)) continue;
    closed.add(ck);

    if (cur.x === tx && cur.y === ty) {
      // 回溯路径
      const path = [];
      let k = ck;
      while (k) {
        const [px, py] = k.split(',').map(Number);
        path.push({ x: px, y: py });
        k = cameFrom.get(k);
      }
      path.reverse();
      return path;
    }

    for (const [dx, dy, base] of DIRS) {
      const nx = cur.x + dx, ny = cur.y + dy;
      if (!inB(nx, ny) || !passable(nx, ny)) continue;
      const nk = tkey(nx, ny);
      if (closed.has(nk)) continue;
      // 斜向移动时，两侧直行格也必须可通行（防穿墙）
      if (dx !== 0 && dy !== 0) {
        if (!passable(cur.x + dx, cur.y) || !passable(cur.x, cur.y + dy)) continue;
      }
      const moveCost = TERRAIN_INFO[tiles[ny][nx]].moveCost * base;
      const g = gScore.get(ck) + moveCost;
      if (g < (gScore.get(nk) === undefined ? Infinity : gScore.get(nk))) {
        gScore.set(nk, g);
        cameFrom.set(nk, ck);
        open.push({ x: nx, y: ny, f: g + h(nx, ny) });
      }
    }
  }
  return null;  // 无路
}

/* ================================================================
 * Submarine 潜艇
 * 职责：在水下建筑之间自动运输资源。
 * 简化调度：每艘潜艇固定服务一条“产出建筑 → 最近船坞”航线，
 * 循环执行：前往装货 → 装货 → 前往船坞 → 卸货（资源计入城市）。
 * 状态机：idle → toLoad → loading → toUnload → unloading → toLoad ...
 * ================================================================ */
let SUB_UID = 1;

class Submarine {
  constructor(dockX, dockY) {
    this.uid = SUB_UID++;          // 潜艇唯一编号
    this.level = 1;                // 等级 1~3（速度/载重）
    this.homeX = dockX; this.homeY = dockY;  // 所属船坞位置
    this.x = dockX; this.y = dockY;          // 当前位置（浮点，格为单位）
    this.state = 'idle';           // idle/toLoad/loading/toUnload/unloading
    this.stateUntil = 0;           // loading/unloading 的结束时间戳
    this.path = null;              // 当前路径 [{x,y}...]
    this.pathIdx = 0;              // 路径进度
    this.targetBx = -1; this.targetBy = -1;  // 目标建筑坐标
    this.cargo = null;             // 货物：{water, food, pearl, tech} 或 null
    this.trips = 0;                // 累计运输趟次
    this.delivered = { water: 0, food: 0, pearl: 0, tech: 0 };  // 累计运抵量
    this.waitIdle = 0;             // 无任务时的空闲计时
  }

  // 当前等级配置
  cfg() { return SUB.LEVELS[this.level - 1]; }

  // 升级花费（满级返回 null）
  upgradeCost() {
    if (this.level >= SUB.MAX_LEVEL) return null;
    return this.cfg().upgradeCost;
  }

  // 升级：返回 true/false
  upgrade() {
    if (this.level >= SUB.MAX_LEVEL) return false;
    this.level++;
    return true;
  }

  // 规划路径（A*），失败返回 false
  planPath(tiles, iceMelted, tx, ty) {
    const sx = Math.round(this.x), sy = Math.round(this.y);
    const path = oceanAStar(tiles, iceMelted, sx, sy, tx, ty);
    if (!path || path.length === 0) return false;
    this.path = path;
    this.pathIdx = 0;
    // 跳过起点（当前位置已在起点格）
    if (path.length > 1 && path[0].x === sx && path[0].y === sy) this.pathIdx = 1;
    return true;
  }

  // 沿路径移动 dtMs 毫秒，返回是否到达终点
  moveAlongPath(dtMs) {
    if (!this.path || this.pathIdx >= this.path.length) return true;
    let remain = (this.cfg().speed * dtMs) / 1000;  // 本帧可走的格数
    while (remain > 0 && this.pathIdx < this.path.length) {
      const wp = this.path[this.pathIdx];
      const d = Math.hypot(wp.x - this.x, wp.y - this.y);
      if (d <= remain) {
        this.x = wp.x; this.y = wp.y;
        remain -= d;
        this.pathIdx++;
      } else {
        this.x += (wp.x - this.x) / d * remain;
        this.y += (wp.y - this.y) / d * remain;
        remain = 0;
      }
    }
    return this.pathIdx >= this.path.length;
  }

  // 序列化
  serialize() {
    return {
      uid: this.uid, level: this.level,
      homeX: this.homeX, homeY: this.homeY,
      x: this.x, y: this.y, state: this.state,
      targetBx: this.targetBx, targetBy: this.targetBy,
      cargo: this.cargo, trips: this.trips, delivered: this.delivered,
    };
  }
  static deserialize(d) {
    const s = new Submarine(d.homeX, d.homeY);
    s.uid = d.uid; SUB_UID = Math.max(SUB_UID, d.uid + 1);
    s.level = d.level || 1;
    s.x = d.x; s.y = d.y;
    s.state = 'idle';  // 读档后回到空闲，由调度器重新派单
    s.targetBx = d.targetBx; s.targetBy = d.targetBy;
    s.cargo = null;    // 在途货物丢弃（简化），避免状态不一致
    s.trips = d.trips || 0;
    s.delivered = d.delivered || { water: 0, food: 0, pearl: 0, tech: 0 };
    s.path = null; s.pathIdx = 0;
    return s;
  }
}

/* ================================================================
 * OceanManager 海洋管理器
 * 管理：40×40 海洋网格 / 水下建筑 / 潜艇船队 / 海洋事件。
 * ================================================================ */
class OceanManager {
  constructor(seed) {
    // 地形（生成一次后固定，存档保存 tiles）
    this.seed = seed || Math.floor(Math.random() * 0xffffffff);
    const gen = genOceanTerrain(this.seed);
    this.tiles = gen.tiles;            // 40×40 地形
    this.iceRegions = gen.iceRegions;  // 冰盖区域（融化事件用）

    this.unlocked = false;             // 是否解锁（钻探到 B2）
    this.buildings = [];               // 水下建筑 [{uid,id,x,y,level,damaged,damagedAt,builtAt}]
    this.subs = [];                    // 潜艇 [Submarine]
    this.nextBId = 1;                  // 建筑 uid 计数

    // ---- 事件状态 ----
    const now = Date.now();
    this.warm = null;                  // 暖流：null / {until}
    this.nextWarm = now + OCEAN_EVENTS.WARM.FIRST_AT;
    this.beast = null;                 // 巨兽：null / {warnUntil, targetUid}
    this.nextBeast = now + OCEAN_EVENTS.BEAST.FIRST_AT;
    this.melted = false;               // 冰盖是否已融化（一次性）
    this.nextMelt = now + OCEAN_EVENTS.MELT.FIRST_AT;
    this.meltRegion = null;            // 融化的区域记录

    this.onEvent = null;               // (type, data) => {}，game.js 设置
    this._emit = (type, data) => { if (this.onEvent) this.onEvent(type, data); };
  }

  // ============ 基础查询 ============
  inBounds(x, y) {
    return x >= 0 && y >= 0 && x < OCEAN.SIZE && y < OCEAN.SIZE;
  }
  tileAt(x, y) {
    if (!this.inBounds(x, y)) return -1;
    return this.tiles[y][x];
  }
  buildingAt(x, y) {
    return this.buildings.find(b => b.x === x && b.y === y) || null;
  }
  getBuilding(uid) {
    return this.buildings.find(b => b.uid === uid) || null;
  }
  count(id) {
    return this.buildings.filter(b => b.id === id).length;
  }

  // 解锁海洋（game 在钻探深度达标后调用）
  unlock() {
    if (this.unlocked) return false;
    this.unlocked = true;
    this._emit('ocean-unlock', {});
    return true;
  }

  // ============ 建筑建造 / 升级 ============
  // 检查某格能否建造指定建筑，返回 {ok, err}
  canPlace(id, x, y) {
    if (!this.unlocked) return { ok: false, err: '海洋尚未解锁（钻探至 B2 层）' };
    const cfg = OCEAN_BUILDINGS[id];
    if (!cfg) return { ok: false, err: '未知建筑：' + id };
    if (!this.inBounds(x, y)) return { ok: false, err: '坐标超出海洋范围' };
    const t = this.tiles[y][x];
    if (!cfg.needTerrain.includes(t)) {
      return { ok: false, err: cfg.name + '不能建在' + TERRAIN_INFO[t].name + '上' };
    }
    if (this.buildingAt(x, y)) return { ok: false, err: '该位置已有建筑' };
    return { ok: true };
  }

  // 建造：返回 {ok, building?, cost?, err?}。cost 由 game 扣除。
  placeBuilding(id, x, y) {
    const chk = this.canPlace(id, x, y);
    if (!chk.ok) return chk;
    const cfg = OCEAN_BUILDINGS[id];
    const cost = Object.assign({}, cfg.levels[0].cost);
    const b = {
      uid: this.nextBId++,
      id, x, y, level: 1,
      damaged: false, damagedAt: 0,
      builtAt: Date.now(),
      stock: { water: 0, food: 0, pearl: 0, tech: 0 },  // 待潜艇运走的库存
    };
    this.buildings.push(b);
    this._emit('ocean-build', { uid: b.uid, id, x, y });
    return { ok: true, building: b, cost };
  }

  // 升级：返回 {ok, cost?, err?}
  upgradeBuilding(uid) {
    const b = this.getBuilding(uid);
    if (!b) return { ok: false, err: '建筑不存在' };
    const cfg = OCEAN_BUILDINGS[b.id];
    if (b.level >= cfg.maxLevel) return { ok: false, err: '已达最高级' };
    const cost = Object.assign({}, cfg.levels[b.level].cost);  // 下一级花费
    b.level++;
    this._emit('ocean-upgrade', { uid, level: b.level });
    return { ok: true, cost };
  }

  // 拆除：返回退还 50% 当前等级建造成本
  demolish(uid) {
    const i = this.buildings.findIndex(b => b.uid === uid);
    if (i < 0) return null;
    const b = this.buildings[i];
    const cfg = OCEAN_BUILDINGS[b.id];
    const spent = cfg.levels[b.level - 1].cost;
    const refund = {};
    for (const k in spent) refund[k] = Math.floor(spent[k] * 0.5);
    this.buildings.splice(i, 1);
    this._emit('ocean-demolish', { uid });
    return refund;
  }

  // 维修损坏建筑（巨兽破坏后），花费固定
  repairCost() { return { iron: 40, energy: 30 }; }
  repair(uid) {
    const b = this.getBuilding(uid);
    if (!b || !b.damaged) return false;
    b.damaged = false;
    b.damagedAt = 0;
    this._emit('ocean-repair', { uid });
    return true;
  }

  // 建筑当前等级配置
  buildingCfg(b) { return OCEAN_BUILDINGS[b.id].levels[b.level - 1]; }

  // ============ 潜艇管理 ============
  // 潜艇上限 = 所有船坞 subCap 之和
  subCap() {
    let cap = 0;
    for (const b of this.buildings) {
      if (b.id === 'dock' && !b.damaged) cap += this.buildingCfg(b).subCap;
    }
    return cap;
  }

  // 建造潜艇：需要船坞，返回 {ok, sub?, cost?, err?}
  buildSub() {
    const docks = this.buildings.filter(b => b.id === 'dock' && !b.damaged);
    if (docks.length === 0) return { ok: false, err: '需要先建造潜艇船坞' };
    if (this.subs.length >= this.subCap()) return { ok: false, err: '潜艇数量已达上限' };
    // 在第一座船坞处下水
    const d = docks[0];
    const s = new Submarine(d.x, d.y);
    this.subs.push(s);
    this._emit('sub-built', { uid: s.uid });
    return { ok: true, sub: s, cost: Object.assign({}, SUB.BUILD_COST) };
  }

  // 升级潜艇：返回 {ok, cost?, err?}
  upgradeSub(uid) {
    const s = this.subs.find(v => v.uid === uid);
    if (!s) return { ok: false, err: '潜艇不存在' };
    const cost = s.upgradeCost();
    if (!cost) return { ok: false, err: '潜艇已满级' };
    s.upgrade();
    this._emit('sub-upgrade', { uid, level: s.level });
    return { ok: true, cost: Object.assign({}, cost) };
  }

  // ============ 潜艇调度（自动） ============
  // 每艘空闲潜艇：找产出建筑（有库存的优先）→ 规划到该建筑 → 装货 →
  // 规划到最近船坞 → 卸货。无任务时在所属船坞附近待命。
  dispatch(now) {
    const producers = this.buildings.filter(b =>
      !b.damaged && ['desalinate', 'algae_farm', 'pearl_station', 'lab'].includes(b.id));
    const docks = this.buildings.filter(b => b.id === 'dock' && !b.damaged);
    if (docks.length === 0) return;  // 无船坞：潜艇无法卸货，全部待命

    for (const s of this.subs) {
      if (s.state === 'idle') {
        // 选目标：库存最多的产出建筑；都没有库存则选最近的产出建筑巡检
        let target = null, bestScore = -1;
        for (const b of producers) {
          const stock = b.stock.water + b.stock.food + b.stock.pearl + b.stock.tech;
          const d = tdist(s.x, s.y, b.x, b.y);
          const score = stock * 10 - d;  // 库存优先、距离次之
          if (score > bestScore) { bestScore = score; target = b; }
        }
        if (!target) { s.waitIdle += 1; continue; }
        s.targetBx = target.x; s.targetBy = target.y;
        if (s.planPath(this.tiles, this.melted, target.x, target.y)) {
          s.state = 'toLoad';
        } else {
          s.waitIdle += 1;  // 无路可走（冰盖封锁），继续等待
        }
      }
    }
  }

  // 潜艇状态机推进（每帧）
  stepSubs(dtMs, now) {
    const docks = this.buildings.filter(b => b.id === 'dock' && !b.damaged);
    const nearestDock = (x, y) => {
      let best = null, bestD = Infinity;
      for (const d of docks) {
        const dd = tdist(x, y, d.x, d.y);
        if (dd < bestD) { bestD = dd; best = d; }
      }
      return best;
    };

    for (const s of this.subs) {
      const cfg = s.cfg();
      switch (s.state) {
        case 'toLoad': {
          if (s.moveAlongPath(dtMs)) {
            s.state = 'loading';
            s.stateUntil = now + SUB.LOAD_TIME_MS;
          }
          break;
        }
        case 'loading': {
          if (now >= s.stateUntil) {
            const b = this.buildingAt(s.targetBx, s.targetBy);
            // 装货：按载重上限搬运库存
            s.cargo = { water: 0, food: 0, pearl: 0, tech: 0 };
            if (b && !b.damaged) {
              let cap = cfg.cargo;
              for (const k of ['water', 'food', 'pearl', 'tech']) {
                const take = Math.min(b.stock[k] || 0, cap);
                s.cargo[k] = take;
                b.stock[k] -= take;
                cap -= take;
                if (cap <= 0) break;
              }
            }
            // 前往最近船坞卸货
            const dock = nearestDock(s.x, s.y);
            if (dock && s.planPath(this.tiles, this.melted, dock.x, dock.y)) {
              s.state = 'toUnload';
            } else {
              s.state = 'idle';  // 无船坞/无路：货物暂存艇上，下次重试
            }
          }
          break;
        }
        case 'toUnload': {
          if (s.moveAlongPath(dtMs)) {
            s.state = 'unloading';
            s.stateUntil = now + SUB.UNLOAD_TIME_MS;
          }
          break;
        }
        case 'unloading': {
          if (now >= s.stateUntil) {
            // 卸货：货物计入“已运抵”，由 produce() 汇总进城市库存
            if (s.cargo) {
              for (const k of ['water', 'food', 'pearl', 'tech']) {
                s.delivered[k] += s.cargo[k] || 0;
              }
              s.trips++;
              s.cargo = null;
            }
            s.state = 'idle';
          }
          break;
        }
        case 'idle':
        default:
          break;
      }
    }
  }

  // ============ 主更新：game 每帧调用 ============
  update(dtMs, game) {
    const now = Date.now();
    if (!this.unlocked) return;

    // ---- 潜艇调度与移动 ----
    this.dispatch(now);
    this.stepSubs(dtMs, now);

    // ---- 事件：暖流 ----
    if (!this.warm && now >= this.nextWarm) {
      this.warm = { until: now + OCEAN.WARM_CURRENT_DURATION };
      this._emit('ocean-warm-start', {});
    }
    if (this.warm && now >= this.warm.until) {
      this.warm = null;
      const gap = OCEAN_EVENTS.WARM.INTERVAL_MIN +
        Math.random() * (OCEAN_EVENTS.WARM.INTERVAL_MAX - OCEAN_EVENTS.WARM.INTERVAL_MIN);
      this.nextWarm = now + gap;
      this._emit('ocean-warm-end', {});
    }

    // ---- 事件：深海巨兽 ----
    if (!this.beast && now >= this.nextBeast) {
      // 目标：随机一栋非护卫舰建筑
      const targets = this.buildings.filter(b => b.id !== 'frigate');
      if (targets.length > 0) {
        const t = targets[Math.floor(Math.random() * targets.length)];
        this.beast = { warnUntil: now + OCEAN.BEAST_WARN_MS, targetUid: t.uid, x: t.x, y: t.y };
        this._emit('ocean-beast-warn', { x: t.x, y: t.y, warnMs: OCEAN.BEAST_WARN_MS });
      } else {
        // 没有可破坏的建筑，跳过本轮
        const gap = OCEAN_EVENTS.BEAST.INTERVAL_MIN +
          Math.random() * (OCEAN_EVENTS.BEAST.INTERVAL_MAX - OCEAN_EVENTS.BEAST.INTERVAL_MIN);
        this.nextBeast = now + gap;
      }
    }
    if (this.beast && now >= this.beast.warnUntil) {
      const bst = this.beast;
      this.beast = null;
      const gap = OCEAN_EVENTS.BEAST.INTERVAL_MIN +
        Math.random() * (OCEAN_EVENTS.BEAST.INTERVAL_MAX - OCEAN_EVENTS.BEAST.INTERVAL_MIN);
      this.nextBeast = now + gap;
      const target = this.getBuilding(bst.targetUid);
      if (target && !target.damaged) {
        // 检查护卫舰：目标是否在任意护卫舰守卫半径内
        const guarded = this.buildings.some(b => {
          if (b.id !== 'frigate' || b.damaged) return false;
          const r = this.buildingCfg(b).guardRadius;
          return tdist(b.x, b.y, target.x, target.y) <= r;
        });
        if (guarded) {
          this._emit('ocean-beast-repelled', { x: target.x, y: target.y, uid: target.uid });
        } else {
          target.damaged = true;
          target.damagedAt = now;
          this._emit('ocean-beast-hit', { x: target.x, y: target.y, uid: target.uid, id: target.id });
        }
      } else {
        this._emit('ocean-beast-miss', {});
      }
    }

    // ---- 事件：冰盖融化（一次性） ----
    if (!this.melted && now >= this.nextMelt) {
      this.melted = true;
      // 融化第一块未融化的冰盖区域
      const region = this.iceRegions.find(r => !r.melted);
      if (region) {
        region.melted = true;
        this.meltRegion = { x: region.x, y: region.y, r: region.r };
        const rad = Math.max(region.r, OCEAN.ICE_MELT_RADIUS);
        for (let y = 0; y < OCEAN.SIZE; y++) {
          for (let x = 0; x < OCEAN.SIZE; x++) {
            if (this.tiles[y][x] === TERRAIN.ICE &&
                Math.hypot(x - region.x, y - region.y) <= rad) {
              // 融化为浅海（新区域解锁：可通行、可建造）
              this.tiles[y][x] = TERRAIN.SHALLOW;
            }
          }
        }
        this._emit('ocean-melt', { x: region.x, y: region.y, r: rad });
      }
    }
  }

  // 暖流是否生效
  warmActive(now) {
    return this.warm && now < this.warm.until;
  }
  // 当前产量倍率（暖流 +50%）
  prodMul(now) {
    return this.warmActive(now) ? OCEAN.WARM_CURRENT_MUL : 1;
  }

  // ============ 产出结算：game 主循环调用 ============
  // dtMs：经过的毫秒数。返回 { water, food, pearl, tech }（本帧产出量）。
  //
  // 产出模型：
  //  - 每栋生产建筑按“单位/分钟”产出，先进入建筑 stock（待运库存）；
  //  - 无潜艇时，40% 通过管道直供城市（SUB.DIRECT_RATIO），60% 积压在 stock；
  //  - 潜艇运抵船坞的部分（delivered）一次性计入本帧产出；
  //  - 藻类农场产出的是“藻”，按 1 藻 = 3 食物折算进 food；
  //  - 深海地形藻场 +20%，热泉口 2 格内珍珠站 +50%，暖流全局 +50%；
  //  - 损坏建筑停产。
  produce(dtMs) {
    const out = { water: 0, food: 0, pearl: 0, tech: 0 };
    if (!this.unlocked) return out;
    const now = Date.now();
    const mul = this.prodMul(now);  // 暖流倍率
    const minutes = dtMs / 60000;
    const hasSubs = this.subs.length > 0 &&
      this.buildings.some(b => b.id === 'dock' && !b.damaged);

    // 热泉口位置缓存（珍珠加成判定）
    const vents = [];
    for (let y = 0; y < OCEAN.SIZE; y++)
      for (let x = 0; x < OCEAN.SIZE; x++)
        if (this.tiles[y][x] === TERRAIN.VENT) vents.push([x, y]);
    const nearVent = (x, y) => vents.some(([vx, vy]) => tdist(x, y, vx, vy) <= 2);

    for (const b of this.buildings) {
      if (b.damaged) continue;  // 损坏停产
      const cfg = this.buildingCfg(b);
      const t = this.tiles[b.y][b.x];

      if (b.id === 'desalinate' && cfg.water) {
        const amt = cfg.water * minutes * mul;
        b.stock.water += amt * (hasSubs ? (1 - SUB.DIRECT_RATIO) : 1);
        out.water += amt * (hasSubs ? SUB.DIRECT_RATIO : 1);
      } else if (b.id === 'algae_farm' && cfg.food) {
        // 深海地形 +20%
        const terrainMul = t === TERRAIN.DEEP ? 1.2 : 1;
        const algae = cfg.food * minutes * mul * terrainMul;
        const food = algae * OCEAN_RES.algae.foodValue;  // 1 藻 = 3 食物
        b.stock.food += food * (hasSubs ? (1 - SUB.DIRECT_RATIO) : 1);
        out.food += food * (hasSubs ? SUB.DIRECT_RATIO : 1);
      } else if (b.id === 'pearl_station' && cfg.pearl) {
        // 热泉口 2 格内 +50%
        const ventMul = nearVent(b.x, b.y) ? 1.5 : 1;
        const amt = cfg.pearl * minutes * mul * ventMul;
        b.stock.pearl += amt * (hasSubs ? (1 - SUB.DIRECT_RATIO) : 1);
        out.pearl += amt * (hasSubs ? SUB.DIRECT_RATIO : 1);
      } else if (b.id === 'lab' && cfg.tech) {
        const amt = cfg.tech * minutes * mul;
        b.stock.tech += amt * (hasSubs ? (1 - SUB.DIRECT_RATIO) : 1);
        out.tech += amt * (hasSubs ? SUB.DIRECT_RATIO : 1);
      }
      // habitat / dock / frigate 无直接资源产出
    }

    // 潜艇运抵量：一次性计入本帧，然后清零（produce 每帧调用，delivered 即上帧运抵）
    for (const s of this.subs) {
      out.water += s.delivered.water;
      out.food += s.delivered.food;
      out.pearl += s.delivered.pearl;
      out.tech += s.delivered.tech;
      s.delivered = { water: 0, food: 0, pearl: 0, tech: 0 };
    }
    return out;
  }

  // 水下居住舱提供的人口容量（损坏的不算）
  popCap() {
    let cap = 0;
    for (const b of this.buildings) {
      if (b.id === 'habitat' && !b.damaged) cap += this.buildingCfg(b).popCap;
    }
    return cap;
  }

  // 待运库存总量（面板显示用）
  totalStock() {
    const t = { water: 0, food: 0, pearl: 0, tech: 0 };
    for (const b of this.buildings) {
      t.water += b.stock.water; t.food += b.stock.food;
      t.pearl += b.stock.pearl; t.tech += b.stock.tech;
    }
    return t;
  }

  // ============ 存档 / 读档 ============
  // 存档字段：ocean: { unlocked, seed, tiles, iceRegions, melted, buildings, subs, next* }
  serialize() {
    const now = Date.now();
    return {
      unlocked: this.unlocked,
      seed: this.seed,
      tiles: this.tiles,
      iceRegions: this.iceRegions,
      melted: this.melted,
      meltRegion: this.meltRegion,
      buildings: this.buildings.map(b => ({
        uid: b.uid, id: b.id, x: b.x, y: b.y, level: b.level,
        damaged: b.damaged, damagedAt: b.damagedAt, builtAt: b.builtAt,
        stock: b.stock,
      })),
      subs: this.subs.map(s => s.serialize()),
      nextBId: this.nextBId,
      nextWarmIn: Math.max(0, this.nextWarm - now),
      nextBeastIn: Math.max(0, this.nextBeast - now),
      nextMeltIn: this.melted ? 0 : Math.max(0, this.nextMelt - now),
    };
  }
  deserialize(data) {
    if (!data) return;
    const now = Date.now();
    this.unlocked = !!data.unlocked;
    this.seed = data.seed || this.seed;
    if (data.tiles && data.tiles.length === OCEAN.SIZE) {
      this.tiles = data.tiles;
    } else {
      const gen = genOceanTerrain(this.seed);
      this.tiles = gen.tiles;
      this.iceRegions = gen.iceRegions;
    }
    if (data.iceRegions) this.iceRegions = data.iceRegions;
    this.melted = !!data.melted;
    this.meltRegion = data.meltRegion || null;
    this.nextBId = data.nextBId || 1;
    this.buildings = (data.buildings || []).map(b => ({
      uid: b.uid, id: b.id, x: b.x, y: b.y, level: b.level || 1,
      damaged: !!b.damaged, damagedAt: b.damagedAt || 0, builtAt: b.builtAt || now,
      stock: b.stock || { water: 0, food: 0, pearl: 0, tech: 0 },
    }));
    this.subs = (data.subs || []).map(s => Submarine.deserialize(s));
    // 事件计时
    this.warm = null;
    this.beast = null;
    this.nextWarm = now + (data.nextWarmIn !== undefined ? data.nextWarmIn : OCEAN_EVENTS.WARM.FIRST_AT);
    this.nextBeast = now + (data.nextBeastIn !== undefined ? data.nextBeastIn : OCEAN_EVENTS.BEAST.FIRST_AT);
    this.nextMelt = now + (data.nextMeltIn !== undefined ? data.nextMeltIn : OCEAN_EVENTS.MELT.FIRST_AT);
  }

  // ============ 建造选址推荐 ============
  // 为指定建筑 id 推荐最多 limit 个建造点，按加成打分排序。
  // 评分规则：
  //  - 珍珠采集站：热泉口 2 格内 +50 分（距离越近分越高）
  //  - 藻类农场：深海地形 +30 分
  //  - 居住舱/船坞：靠近已有建筑群 +10 分（便于潜艇调度）
  //  - 护卫舰：靠近已有建筑群 +20 分（守卫半径覆盖更多建筑）
  //  - 通用：避开海沟相邻格（-5/格），已有建筑格排除
  findSpots(id, limit) {
    const cfg = OCEAN_BUILDINGS[id];
    if (!cfg) return [];
    limit = limit || 5;
    const vents = [];
    for (let y = 0; y < OCEAN.SIZE; y++)
      for (let x = 0; x < OCEAN.SIZE; x++)
        if (this.tiles[y][x] === TERRAIN.VENT) vents.push([x, y]);

    const spots = [];
    for (let y = 0; y < OCEAN.SIZE; y++) {
      for (let x = 0; x < OCEAN.SIZE; x++) {
        if (this.canPlace(id, x, y).ok === false) continue;
        let score = 0;
        const notes = [];
        const t = this.tiles[y][x];
        // 珍珠站：热泉口加成
        if (id === 'pearl_station' && vents.length > 0) {
          let best = Infinity;
          for (const [vx, vy] of vents) best = Math.min(best, tdist(x, y, vx, vy));
          if (best <= 2) { score += 50 - best * 10; notes.push('热泉口加成+50%'); }
        }
        // 藻场：深海加成
        if (id === 'algae_farm' && t === TERRAIN.DEEP) {
          score += 30; notes.push('深海产量+20%');
        }
        // 靠近已有建筑群（调度/守卫）
        if (['habitat', 'dock', 'frigate'].includes(id) && this.buildings.length > 0) {
          let best = Infinity;
          for (const b of this.buildings) best = Math.min(best, tdist(x, y, b.x, b.y));
          const near = Math.max(0, 20 - best * 2);
          score += id === 'frigate' ? near : near * 0.5;
          if (best <= 6) notes.push('靠近建筑群');
        }
        // 避开海沟邻格（潜艇绕行成本高）
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx, ny = y + dy;
          if (this.inBounds(nx, ny) && this.tiles[ny][nx] === TERRAIN.TRENCH) score -= 5;
        }
        // 中央区域略优（到各处平均距离短）
        const dc = tdist(x, y, OCEAN.SIZE / 2, OCEAN.SIZE / 2);
        score += Math.max(0, 10 - dc * 0.3);
        spots.push({ x, y, score: Math.round(score * 10) / 10, notes,
                     terrain: TERRAIN_INFO[t].name });
      }
    }
    spots.sort((a, b) => b.score - a.score);
    return spots.slice(0, limit);
  }

  // ============ 状态摘要（供 game HUD / 成就系统调用） ============
  getSummary() {
    const now = Date.now();
    const byId = {};
    for (const id of OCEAN_BUILDING_IDS) byId[id] = 0;
    let damaged = 0;
    for (const b of this.buildings) {
      byId[b.id]++;
      if (b.damaged) damaged++;
    }
    return {
      unlocked: this.unlocked,
      buildings: this.buildings.length,
      byId,
      damaged,
      subs: this.subs.length,
      subCap: this.subCap(),
      subTrips: this.subs.reduce((a, s) => a + s.trips, 0),
      popCap: this.popCap(),
      stock: this.totalStock(),
      warmActive: this.warmActive(now),
      beastWarning: !!this.beast,
      melted: this.melted,
    };
  }

  // ============ UI 面板：深色主题 HTML ============
  // 返回 HTML 字符串，由 game.js 注入页面。交互按钮带 data-ocean-action，
  // game.js 负责绑定点击事件（本文件不操作 DOM）。
  renderOceanPanel() {
    const now = Date.now();
    const D = 'font-family:inherit;';
    const card = 'background:#0d1b2e;border:1px solid #1e3a5f;border-radius:10px;padding:10px 12px;margin-bottom:10px;';
    const h3 = 'margin:0 0 8px 0;color:#7dd3fc;font-size:15px;';
    const btn = 'background:#0e4a7a;color:#e0f2fe;border:1px solid #1e6aa0;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:12px;margin:2px;';
    const btnDis = 'background:#1a2433;color:#5b6b7f;border:1px solid #2a3a4f;border-radius:6px;padding:4px 10px;font-size:12px;margin:2px;cursor:not-allowed;';
    const small = 'font-size:12px;color:#9fb3c8;';
    const val = 'color:#e0f2fe;font-weight:bold;';

    let html = `<div style="${D}background:#081222;color:#dbeafe;border-radius:12px;padding:14px;max-width:860px;">`;
    html += `<h2 style="margin:0 0 10px 0;color:#38bdf8;font-size:18px;">🌊 地下冰海 <span style="${small}">B2 层 · 40×40 独立海域</span></h2>`;

    // ---- 未解锁 ----
    if (!this.unlocked) {
      html += `<div style="${card}"><p style="${small}">钻探深度达到 <span style="${val}">${OCEAN.UNLOCK_DEPTH} 米</span> 后解锁地下冰海。` +
        `冰海蕴藏液态水、深海藻床与珍珠矿脉，并可部署潜艇运输队。</p></div></div>`;
      return html;
    }

    // ---- 事件状态条 ----
    html += `<div style="${card}"><h3 style="${h3}">📡 海况</h3><div style="${small}">`;
    if (this.warmActive(now)) {
      const left = Math.ceil((this.warm.until - now) / 1000);
      html += `🌀 <span style="color:#fbbf24;">暖流经过中</span>：全海域产量 <span style="${val}">+50%</span>（剩余 ${left}s）<br>`;
    } else {
      const next = Math.max(0, Math.ceil((this.nextWarm - now) / 1000));
      html += `🌀 暖流：平静（约 ${next}s 后到来）<br>`;
    }
    if (this.beast) {
      const left = Math.ceil((this.beast.warnUntil - now) / 1000);
      const tb = this.getBuilding(this.beast.targetUid);
      const tname = tb ? OCEAN_BUILDINGS[tb.id].name : '未知';
      html += `🦑 <span style="color:#f87171;">深海巨兽预警！</span>${left}s 后袭击 <span style="${val}">${tname}</span>（${this.beast.x},${this.beast.y}）` +
        `——建造护卫舰可将其驱离<br>`;
    } else {
      html += `🦑 深海巨兽：未发现<br>`;
    }
    if (this.melted && this.meltRegion) {
      html += `🧊 冰盖已融化：(${this.meltRegion.x},${this.meltRegion.y}) 半径 ${this.meltRegion.r} 格海域已解锁<br>`;
    } else {
      const next = Math.max(0, Math.ceil((this.nextMelt - now) / 1000));
      html += `🧊 冰盖：冻结中（约 ${next}s 后可能融化，解锁新海域）<br>`;
    }
    html += `</div></div>`;

    // ---- 海域地图（40×40 色块） ----
    html += `<div style="${card}"><h3 style="${h3}">🗺️ 海域地形</h3>`;
    html += `<div style="display:grid;grid-template-columns:repeat(40, 11px);grid-auto-rows:11px;gap:0;line-height:11px;">`;
    const bmap = new Map();
    for (const b of this.buildings) bmap.set(tkey(b.x, b.y), b);
    for (let y = 0; y < OCEAN.SIZE; y++) {
      for (let x = 0; x < OCEAN.SIZE; x++) {
        const t = this.tiles[y][x];
        const info = TERRAIN_INFO[t];
        const b = bmap.get(tkey(x, y));
        let bg = info.color, ch = '', fc = '#081222', title = `${info.name} (${x},${y})`;
        if (b) {
          const bcfg = OCEAN_BUILDINGS[b.id];
          ch = bcfg.emoji;
          bg = b.damaged ? '#7f1d1d' : '#f59e0b';
          title = `${bcfg.name} Lv.${b.level}${b.damaged ? '（损坏）' : ''} (${x},${y})`;
        } else if (t === TERRAIN.VENT) { ch = '♨'; fc = '#fff'; }
        else if (t === TERRAIN.ICE) { ch = '❄'; fc = '#0b3d6e'; }
        html += `<div title="${title}" style="background:${bg};color:${fc};font-size:8px;text-align:center;overflow:hidden;">${ch}</div>`;
      }
    }
    html += `</div><div style="${small}margin-top:6px;">`;
    for (const k of Object.keys(TERRAIN_INFO)) {
      const ti = TERRAIN_INFO[k];
      html += `<span style="display:inline-block;width:10px;height:10px;background:${ti.color};border-radius:2px;margin-right:4px;vertical-align:middle;"></span>${ti.name}　`;
    }
    html += `<span style="display:inline-block;width:10px;height:10px;background:#f59e0b;border-radius:2px;margin-right:4px;vertical-align:middle;"></span>水下建筑　`;
    html += `<span style="display:inline-block;width:10px;height:10px;background:#7f1d1d;border-radius:2px;margin-right:4px;vertical-align:middle;"></span>损坏建筑`;
    html += `</div></div>`;

    // ---- 资源与运力 ----
    const stock = this.totalStock();
    const fmt = n => (Math.round(n * 10) / 10).toString();
    html += `<div style="${card}"><h3 style="${h3}">📦 库存与运力</h3><div style="${small}">`;
    html += `待运库存：💧水 ${fmt(stock.water)}　🌿食物(藻折算) ${fmt(stock.food)}　🦪珍珠 ${fmt(stock.pearl)}　🔬科技 ${fmt(stock.tech)}<br>`;
    html += `潜艇：<span style="${val}">${this.subs.length}</span> / ${this.subCap()} 艘　` +
      `人口容量：<span style="${val}">+${this.popCap()}</span>　` +
      `建筑：<span style="${val}">${this.buildings.length}</span> 座`;
    html += `</div></div>`;

    // ---- 建筑列表 ----
    html += `<div style="${card}"><h3 style="${h3}">🏗️ 水下建筑</h3>`;
    if (this.buildings.length === 0) {
      html += `<p style="${small}">还没有水下建筑。从下方建造菜单开始。</p>`;
    } else {
      html += `<table style="width:100%;border-collapse:collapse;font-size:12px;color:#cbd5e1;">`;
      html += `<tr style="color:#7dd3fc;text-align:left;"><th>建筑</th><th>位置</th><th>等级</th><th>状态</th><th>操作</th></tr>`;
      for (const b of this.buildings) {
        const bcfg = OCEAN_BUILDINGS[b.id];
        const lv = this.buildingCfg(b);
        // 本级产出描述
        let prodDesc = '—';
        if (lv.water) prodDesc = `💧${lv.water}/分`;
        else if (lv.food) prodDesc = `🌿${lv.food}藻/分(=${lv.food * 3}食物)`;
        else if (lv.pearl) prodDesc = `🦪${lv.pearl}/分`;
        else if (lv.tech) prodDesc = `🔬${lv.tech}/分`;
        else if (lv.popCap) prodDesc = `👥+${lv.popCap}`;
        else if (lv.subCap) prodDesc = `🚢+${lv.subCap}潜艇`;
        else if (lv.guardRadius) prodDesc = `🛡️半径${lv.guardRadius}`;
        const st = b.damaged
          ? `<span style="color:#f87171;">损坏（巨兽袭击）</span>`
          : `<span style="color:#4ade80;">运行中</span>`;
        const upBtn = b.level < bcfg.maxLevel
          ? `<button style="${btn}" data-ocean-action="upgrade" data-uid="${b.uid}">升级 Lv.${b.level + 1}</button>`
          : `<span style="${small}">满级</span>`;
        const repBtn = b.damaged
          ? `<button style="${btn}" data-ocean-action="repair" data-uid="${b.uid}">维修</button>` : '';
        html += `<tr style="border-top:1px solid #1e3a5f;">` +
          `<td>${bcfg.emoji} ${bcfg.name}<br><span style="${small}">${prodDesc}</span></td>` +
          `<td>(${b.x},${b.y})</td><td>Lv.${b.level}</td><td>${st}</td>` +
          `<td>${upBtn}${repBtn}<button style="${btn}" data-ocean-action="demolish" data-uid="${b.uid}">拆除</button></td></tr>`;
      }
      html += `</table>`;
    }
    html += `</div>`;

    // ---- 建造菜单 ----
    html += `<div style="${card}"><h3 style="${h3}">🔨 建造水下建筑</h3><div style="${small}">` +
      `点击建筑后，在地图上选择浅海/深海格放置（game.js 绑定 data-ocean-action="build"）。</div><div style="margin-top:6px;">`;
    for (const id of OCEAN_BUILDING_IDS) {
      const c = OCEAN_BUILDINGS[id];
      const l0 = c.levels[0];
      const costStr = Object.entries(l0.cost).map(([k, v]) => `${k}:${v}`).join(' ');
      html += `<button style="${btn}" data-ocean-action="build" data-id="${id}" title="${c.desc}">` +
        `${c.emoji} ${c.name}（${costStr}）</button>`;
    }
    html += `</div></div>`;

    // ---- 潜艇船队 ----
    html += `<div style="${card}"><h3 style="${h3}">🚢 潜艇船队</h3>`;
    const canBuildSub = this.buildings.some(b => b.id === 'dock' && !b.damaged);
    const subBtn = (canBuildSub && this.subs.length < this.subCap())
      ? `<button style="${btn}" data-ocean-action="build-sub">建造潜艇（iron:${SUB.BUILD_COST.iron} energy:${SUB.BUILD_COST.energy}）</button>`
      : `<button style="${btnDis}" disabled>${canBuildSub ? '潜艇数量已达上限' : '需要先建造潜艇船坞'}</button>`;
    html += `<div style="margin-bottom:6px;">${subBtn}</div>`;
    if (this.subs.length === 0) {
      html += `<p style="${small}">暂无潜艇。潜艇在水下建筑之间自动运输资源；无潜艇时建筑仅 40% 产量直供。</p>`;
    } else {
      html += `<table style="width:100%;border-collapse:collapse;font-size:12px;color:#cbd5e1;">`;
      html += `<tr style="color:#7dd3fc;text-align:left;"><th>潜艇</th><th>等级</th><th>速度/载重</th><th>状态</th><th>累计趟次</th><th>操作</th></tr>`;
      const stateName = { idle: '待命', toLoad: '前往装货', loading: '装货中', toUnload: '前往卸货', unloading: '卸货中' };
      for (const s of this.subs) {
        const cfg = s.cfg();
        const up = s.upgradeCost();
        const upBtn = up
          ? `<button style="${btn}" data-ocean-action="upgrade-sub" data-uid="${s.uid}">升级（iron:${up.iron} energy:${up.energy}）</button>`
          : `<span style="${small}">满级</span>`;
        html += `<tr style="border-top:1px solid #1e3a5f;">` +
          `<td>🛸 #${s.uid}</td><td>Lv.${s.level}</td>` +
          `<td>${cfg.speed}格/秒 · ${cfg.cargo}单位</td>` +
          `<td>${stateName[s.state] || s.state}</td><td>${s.trips}</td><td>${upBtn}</td></tr>`;
      }
      html += `</table>`;
    }
    html += `</div>`;

    // ---- 图例：新资源说明 ----
    html += `<div style="${card}"><h3 style="${h3}">📖 深海资源</h3><div style="${small}">`;
    html += `🌿 <span style="${val}">深海藻</span>：${OCEAN_RES.algae.desc}<br>`;
    html += `🦪 <span style="${val}">珍珠矿</span>：${OCEAN_RES.pearl.desc}<br>`;
    html += `<span style="${small}">潜艇将各建筑产出运往船坞后计入城市库存；暖流期间全海域产量 +50%。</span>`;
    html += `</div></div>`;

    html += `</div>`;
    return html;
  }
}

// ============ 模块导出 ============
if (typeof module !== 'undefined') {
  module.exports = {
    OceanManager,
    Submarine,
    OCEAN,
    TERRAIN,
    TERRAIN_INFO,
    OCEAN_RES,
    OCEAN_BUILDINGS,
    OCEAN_BUILDING_IDS,
    SUB,
    OCEAN_EVENTS,
    oceanAStar,
    genOceanTerrain,
  };
}
