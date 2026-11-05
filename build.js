/* 星港 — build.js：21 种建筑 × 3 级 / 放置 / 升级 / 生产 / 维修 / 老化 */

// 存储上限（仓库系统；logistics.js 也会用到）
const STORAGE_BASE = 200;
const STORAGE_PER_WAREHOUSE = 200;

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
  // ---- v1.1 新增：6 种功能建筑 ----
  nuclear: {
    id: 'nuclear', name: '核电站', icon: '☢️',
    levels: [null,
      { cost: { steel: 50, tech: 10 }, needPop: 20, power: 30, needTech: 'unlockNuclear' },
      { cost: { steel: 120, tech: 25 }, needPop: 35, power: 70, needTech: 'unlockNuclear' },
      { cost: { steel: 250, tech: 60 }, needPop: 50, power: 150, needTech: 'unlockNuclear' },
    ],
    desc: '巨量电力，需要聚变科技解锁',
  },
  school: {
    id: 'school', name: '学校', icon: '🏫',
    levels: [null,
      { cost: { iron: 60, steel: 20 }, needPop: 15, powerUse: 2, labBonus: 0.5 },
      { cost: { steel: 60 }, needPop: 25, powerUse: 3, labBonus: 1.0 },
      { cost: { steel: 150, tech: 20 }, needPop: 40, powerUse: 4, labBonus: 2.0 },
    ],
    desc: '实验室科技产量提升',
  },
  trade: {
    id: 'trade', name: '贸易站', icon: '🏪',
    levels: [null,
      { cost: { steel: 40, tech: 5 }, needPop: 15, powerUse: 2, needTech: 'unlockTrade' },
      { cost: { steel: 100, tech: 15 }, needPop: 25, powerUse: 3, needTech: 'unlockTrade' },
      { cost: { steel: 200, tech: 40 }, needPop: 40, powerUse: 4, needTech: 'unlockTrade' },
    ],
    desc: '与地球交易资源，需要贸易协定科技',
  },
  repair: {
    id: 'repair', name: '维修站', icon: '🔧',
    levels: [null,
      { cost: { iron: 40, steel: 10 }, needPop: 10, powerUse: 1 },
      { cost: { steel: 40 }, needPop: 18, powerUse: 2, repairAura: true },
      { cost: { steel: 100, tech: 10 }, needPop: 30, powerUse: 3, repairAura: true },
    ],
    desc: '维修受损建筑，Lv2+ 自动缓慢维修',
  },
  weather: {
    id: 'weather', name: '气象站', icon: '📡',
    levels: [null,
      { cost: { steel: 30, tech: 5 }, needPop: 12, powerUse: 2, needTech: 'unlockWeather' },
      { cost: { steel: 70, tech: 12 }, needPop: 20, powerUse: 2, needTech: 'unlockWeather' },
      { cost: { steel: 150, tech: 30 }, needPop: 30, powerUse: 3, needTech: 'unlockWeather' },
    ],
    desc: '灾难预警 +10 秒，需要气象学科技',
  },
  dome: {
    id: 'dome', name: '生态穹顶', icon: '🌐',
    levels: [null,
      { cost: { steel: 80, tech: 15 }, needPop: 30, powerUse: 5, popCap: 20, growthBonus: 1.0, needTech: 'unlockDome' },
      { cost: { steel: 180, tech: 35 }, needPop: 45, powerUse: 8, popCap: 45, growthBonus: 2.0, needTech: 'unlockDome' },
      { cost: { steel: 350, tech: 80 }, needPop: 60, powerUse: 12, popCap: 90, growthBonus: 4.0, needTech: 'unlockDome' },
    ],
    desc: '巨型生态穹顶，大量人口+加速增长',
  },
  // ---- v1.1 新增：物流建筑 ----
  depot: {
    id: 'depot', name: '运输站', icon: '🚚',
    levels: [null,
      { cost: { iron: 30, rare: 10 }, needPop: 6, powerUse: 1 },
      { cost: { steel: 30 }, needPop: 12, powerUse: 2 },
      { cost: { steel: 80, tech: 10 }, needPop: 20, powerUse: 3 },
    ],
    desc: '每座提供 2 辆运输车，自动采集资源',
  },
  warehouse: {
    id: 'warehouse', name: '仓库', icon: '📦',
    levels: [null,
      { cost: { iron: 25 }, needPop: 4, powerUse: 0 },
      { cost: { iron: 60 }, needPop: 8, powerUse: 1 },
      { cost: { steel: 40 }, needPop: 15, powerUse: 1 },
    ],
    desc: '每座 +200 每种资源存储上限',
  },
  logistics: {
    id: 'logistics', name: '物流中心', icon: '🛰️',
    levels: [null,
      { cost: { steel: 50, tech: 8 }, needPop: 20, powerUse: 3 },
      { cost: { steel: 120, tech: 20 }, needPop: 30, powerUse: 4 },
      { cost: { steel: 250, tech: 50 }, needPop: 45, powerUse: 5 },
    ],
    desc: '运输车上限+2，速度+25%/座',
  },
  // ---- v1.2 新增：12 种建筑 ----
  uminer: {
    id: 'uminer', name: '铀矿机', icon: '⛏️',
    levels: [null,
      { cost: { iron: 30, rare: 15 }, needPop: 8, powerUse: 2, produce: { uranium: 1 }, produceInterval: 20000 },
      { cost: { steel: 40, rare: 30 }, needPop: 15, powerUse: 3, produce: { uranium: 3 }, produceInterval: 20000 },
      { cost: { steel: 100, tech: 20 }, needPop: 25, powerUse: 4, produce: { uranium: 8 }, produceInterval: 20000 },
    ],
    desc: '自动生产铀矿（火山口附近效率×2）',
  },
  he3rig: {
    id: 'he3rig', name: '氦3采集器', icon: '🌌',
    levels: [null,
      { cost: { steel: 60, tech: 15 }, needPop: 12, powerUse: 3, produce: { he3: 1 }, produceInterval: 40000 },
      { cost: { steel: 150, tech: 35 }, needPop: 22, powerUse: 4, produce: { he3: 3 }, produceInterval: 40000 },
      { cost: { steel: 300, tech: 80 }, needPop: 35, powerUse: 5, produce: { he3: 8 }, produceInterval: 40000 },
    ],
    desc: '从月壤/陨石坑提取氦3，极稀有',
  },
  fusion: {
    id: 'fusion', name: '聚变电站', icon: '☀️',
    levels: [null,
      { cost: { steel: 100, uranium: 20, tech: 20 }, needPop: 30, power: 100, needTech: 'unlockFusion' },
      { cost: { steel: 250, uranium: 50, tech: 50 }, needPop: 45, power: 250, needTech: 'unlockFusion' },
      { cost: { steel: 500, uranium: 120, tech: 120 }, needPop: 60, power: 600, needTech: 'unlockFusion' },
    ],
    desc: '氘-氚聚变，巨量电力，需聚变科技',
  },
  spaceport: {
    id: 'spaceport', name: '太空港', icon: '🛸',
    levels: [null,
      { cost: { steel: 150, tech: 30 }, needPop: 40, powerUse: 8 },
      { cost: { steel: 350, tech: 70 }, needPop: 60, powerUse: 12 },
      { cost: { steel: 700, tech: 150 }, needPop: 80, powerUse: 18 },
    ],
    desc: '解锁轨道建筑（电梯/卫星/天线）',
  },
  elevator: {
    id: 'elevator', name: '轨道电梯', icon: '🗼',
    levels: [null,
      { cost: { steel: 200, he3: 10, tech: 50 }, needPop: 50, powerUse: 10, needSpaceport: true },
      { cost: { steel: 500, he3: 25, tech: 120 }, needPop: 70, powerUse: 15, needSpaceport: true },
      { cost: { steel: 1000, he3: 60, tech: 250 }, needPop: 90, powerUse: 20, needSpaceport: true },
    ],
    desc: '终极物流：运输车速度×3，需太空港',
  },
  clone: {
    id: 'clone', name: '克隆中心', icon: '🧬',
    levels: [null,
      { cost: { steel: 120, tech: 40 }, needPop: 35, powerUse: 8, growthBonus: 2.0 },
      { cost: { steel: 300, tech: 90 }, needPop: 50, powerUse: 12, growthBonus: 4.0 },
      { cost: { steel: 600, tech: 200 }, needPop: 70, powerUse: 18, growthBonus: 8.0 },
    ],
    desc: '人口增长×3/×5/×9',
  },
  shield: {
    id: 'shield', name: '护盾发生器', icon: '🛡️',
    levels: [null,
      { cost: { steel: 80, tech: 25 }, needPop: 25, powerUse: 6, shieldDodge: 0.3 },
      { cost: { steel: 200, tech: 60 }, needPop: 40, powerUse: 10, shieldDodge: 0.55 },
      { cost: { steel: 400, tech: 140 }, needPop: 55, powerUse: 15, shieldDodge: 0.8 },
    ],
    desc: '能量护盾，陨石闪避率提升',
  },
  satellite: {
    id: 'satellite', name: '气象卫星', icon: '🛰️',
    levels: [null,
      { cost: { steel: 100, tech: 40 }, needPop: 30, powerUse: 4, warnBonus: 10000, needSpaceport: true },
      { cost: { steel: 250, tech: 90 }, needPop: 45, powerUse: 6, warnBonus: 20000, needSpaceport: true },
      { cost: { steel: 500, tech: 180 }, needPop: 60, powerUse: 8, warnBonus: 35000, needSpaceport: true },
    ],
    desc: '灾难预警延长，需太空港',
  },
  antenna: {
    id: 'antenna', name: '深空天线', icon: '📡',
    levels: [null,
      { cost: { steel: 120, tech: 50 }, needPop: 35, powerUse: 6, labBonus: 1.0, needSpaceport: true },
      { cost: { steel: 300, tech: 110 }, needPop: 50, powerUse: 9, labBonus: 2.0, needSpaceport: true },
      { cost: { steel: 600, tech: 220 }, needPop: 65, powerUse: 12, labBonus: 4.0, needSpaceport: true },
    ],
    desc: '接收深空信号，实验室产量×2/×3/×5，需太空港',
  },
  nanofactory: {
    id: 'nanofactory', name: '纳米工厂', icon: '⚛️',
    levels: [null,
      { cost: { steel: 150, tech: 60 }, needPop: 40, powerUse: 10, smelterBonus: 1.0 },
      { cost: { steel: 350, tech: 130 }, needPop: 55, powerUse: 15, smelterBonus: 2.0 },
      { cost: { steel: 700, tech: 260 }, needPop: 75, powerUse: 20, smelterBonus: 4.0 },
    ],
    desc: '分子组装，冶炼厂产量×2/×3/×5',
  },
  ecocircle: {
    id: 'ecocircle', name: '生态圈', icon: '🌍',
    levels: [null,
      { cost: { steel: 130, tech: 45 }, needPop: 38, powerUse: 8, greenhouseBonus: 2.0 },
      { cost: { steel: 320, tech: 100 }, needPop: 52, powerUse: 12, greenhouseBonus: 4.0 },
      { cost: { steel: 650, tech: 210 }, needPop: 68, powerUse: 16, greenhouseBonus: 8.0 },
    ],
    desc: '全封闭生态，温室产量×3/×5/×9',
  },
  ark: {
    id: 'ark', name: '方舟', icon: '🛳️',
    levels: [null,
      { cost: { steel: 500, he3: 30, tech: 100 }, needPop: 200, powerUse: 0, needSpaceport: true },
    ],
    desc: '第二胜利：人口200+科技100，建成即通关！需太空港',
  },
};

// v1.2 建筑顺序（UI 用）
const BUILD_ORDER_V12 = ['uminer', 'he3rig', 'fusion', 'spaceport', 'elevator', 'clone', 'shield', 'satellite', 'antenna', 'nanofactory', 'ecocircle', 'ark'];


// 建筑顺序（UI 用）
const BUILD_ORDER = ['habitat', 'solar', 'miner', 'pump', 'smelter', 'greenhouse', 'waterplant', 'lab', 'road', 'hospital', 'command', 'launchpad',
  'nuclear', 'school', 'trade', 'repair', 'weather', 'dome', 'depot', 'warehouse', 'logistics',
  'uminer', 'he3rig', 'fusion', 'spaceport', 'elevator', 'clone', 'shield', 'satellite', 'antenna', 'nanofactory', 'ecocircle', 'ark'];

class BuildManager {
  constructor(map) {
    this.map = map;
    this.buildings = [];  // {id, x, y, level, lastProduce, builtAt, damaged}
    this.techTree = null;   // game.js 注入
    this.disaster = null;   // game.js 注入（沙尘暴影响太阳能）
  }

  at(x, y) {
    return this.buildings.find(b => b.x === x && b.y === y) || null;
  }

  def(id) { return BUILDINGS[id]; }
  levelDef(b) { return BUILDINGS[b.id].levels[b.level]; }

  // 科技加成：乘法效果
  techMul(key) {
    return this.techTree ? this.techTree.mul(key) : 1;
  }
  // 科技加成：加法效果
  techSum(key) {
    return this.techTree ? this.techTree.sum(key) : 0;
  }

  // 建筑成本（科技打折）
  effCost(cost, isUpgrade) {
    const mul = isUpgrade ? this.techMul('upgradeCostMul') : this.techMul('buildCostMul');
    // 发射台特殊
    const out = {};
    for (const k in cost) out[k] = Math.max(1, Math.ceil(cost[k] * mul));
    return out;
  }

  // 检查放置
  canPlace(id, x, y, inv, pop) {
    const def = BUILDINGS[id];
    if (!def) return { ok: false, reason: '未知建筑' };
    const lv = def.levels[1];
    // 科技解锁检查
    if (lv.needTech && this.techTree && !this.techTree.buildingUnlocked(id)) {
      return { ok: false, reason: `需要科技解锁` };
    }
    // v1.2：太空港解锁检查
    if (lv.needSpaceport && !this.hasSpaceport()) {
      return { ok: false, reason: '先建造太空港' };
    }
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
    const cost = this.effCost(lv.cost, false);
    // 发射台科技打折
    if (id === 'launchpad') {
      const lm = this.techMul('launchCostMul');
      for (const k in cost) cost[k] = Math.max(1, Math.ceil(cost[k] * lm));
    }
    if (!canAfford(inv, cost)) return { ok: false, reason: '缺' + missingRes(inv, cost) };
    return { ok: true, cost };
  }

  place(id, x, y, inv) {
    const def = BUILDINGS[id];
    const chk = this.canPlace(id, x, y, inv, 999999); // 人口已在外层检查，这里只算成本
    const lv = def.levels[1];
    const cost = chk.cost || this.effCost(lv.cost, false);
    if (!spendRes(inv, cost)) return false;
    this.buildings.push({ id, x, y, level: 1, lastProduce: Date.now(), builtAt: Date.now(), damaged: false });
    return true;
  }

  // 检查升级
  canUpgrade(b, inv, pop) {
    const def = BUILDINGS[b.id];
    if (b.level >= def.levels.length - 1) return { ok: false, reason: '已满级' };
    const lv = def.levels[b.level + 1];
    if (pop < lv.needPop) return { ok: false, reason: `需要${lv.needPop}人口` };
    const cost = this.effCost(lv.cost, true);
    if (!canAfford(inv, cost)) return { ok: false, reason: '缺' + missingRes(inv, cost) };
    return { ok: true, cost };
  }

  upgrade(b, inv) {
    const def = BUILDINGS[b.id];
    const chk = this.canUpgrade(b, inv, 999999);
    if (!chk.ok) return false;
    if (!spendRes(inv, chk.cost)) return false;
    b.level++;
    b.lastProduce = Date.now();
    return true;
  }

  // 维修受损/老化建筑
  repairCost(b) {
    const base = { iron: 10 + b.level * 5 };
    const mul = this.techMul('repairCostMul');
    const cost = {};
    for (const k in base) cost[k] = Math.ceil(base[k] * mul);
    return cost;
  }
  canRepair(b, inv) {
    if (!b.damaged && this.agingEff(b) >= 0.99) return { ok: false, reason: '无需维修' };
    // 需要维修站
    if (this.count('repair') === 0) return { ok: false, reason: '先建造维修站' };
    const cost = this.repairCost(b);
    if (!canAfford(inv, cost)) return { ok: false, reason: '缺' + missingRes(inv, cost) };
    return { ok: true, cost };
  }
  repair(b, inv) {
    const chk = this.canRepair(b, inv);
    if (!chk.ok) return false;
    if (!spendRes(inv, chk.cost)) return false;
    b.damaged = false;
    b.builtAt = Date.now(); // 重置老化
    b.lastProduce = Date.now();
    return true;
  }

  // 设备老化效率（0.5~1.0）
  agingEff(b) {
    if (!b.builtAt) return 1;
    // AGING 由 disaster.js 提供；Node 单独测试时用默认值
    let AG = { START_MS: 600000, STEP_MS: 300000, STEP_PENALTY: 0.1, MIN_EFF: 0.5 };
    try { if (typeof AGING !== 'undefined') AG = AGING; } catch (e) {}
    const now = Date.now();
    const age = now - b.builtAt;
    if (age < AG.START_MS) return 1;
    const agingMul = this.techMul('agingMul');
    const effAge = age * agingMul;
    const steps = Math.floor((effAge - AG.START_MS) / AG.STEP_MS);
    return Math.max(AG.MIN_EFF, 1 - steps * AG.STEP_PENALTY);
  }

  // 拆除建筑（返还 50% 成本）
  demolishCost(b) {
    const lv = this.levelDef(b);
    // 返还当前等级建造成本的 50%
    const refund = {};
    for (const k in lv.cost) {
      refund[k] = Math.floor(lv.cost[k] * 0.5);
    }
    return refund;
  }

  demolish(b, inv) {
    const idx = this.buildings.indexOf(b);
    if (idx < 0) return false;
    const refund = this.demolishCost(b);
    for (const k in refund) {
      inv[k] = (inv[k] || 0) + refund[k];
    }
    this.buildings.splice(idx, 1);
    return refund;
  }

  hasCommand() {
    return this.buildings.some(b => b.id === 'command');
  }

  hasLaunchpad() {
    return this.buildings.some(b => b.id === 'launchpad');
  }

  // v1.2
  hasSpaceport() {
    return this.buildings.some(b => b.id === 'spaceport');
  }
  hasArk() {
    return this.buildings.some(b => b.id === 'ark');
  }
  // v1.2：护盾总闪避（取最高）
  shieldDodge() {
    let best = 0;
    for (const b of this.buildings) {
      if (b.id !== 'shield' || b.damaged) continue;
      const lv = this.levelDef(b);
      const eff = this.agingEff(b);
      best = Math.max(best, (lv.shieldDodge || 0) * eff);
    }
    return best;
  }
  // v1.2：卫星预警加成（毫秒）
  satelliteWarnBonus() {
    let s = 0;
    for (const b of this.buildings) {
      if (b.id !== 'satellite' || b.damaged) continue;
      const lv = this.levelDef(b);
      s += (lv.warnBonus || 0) * this.agingEff(b);
    }
    return Math.floor(s);
  }
  // v1.2：轨道电梯运输车速度倍率
  elevatorSpeedMul() {
    let m = 1;
    for (const b of this.buildings) {
      if (b.id !== 'elevator' || b.damaged) continue;
      m *= (b.level >= 3 ? 3 : (b.level === 2 ? 2 : 1.5)) * this.agingEff(b);
    }
    return m;
  }
  // v1.2：纳米工厂冶炼加成 / 生态圈温室加成（加法叠加到倍率）
  smelterBonus2() {
    let s = 0;
    for (const b of this.buildings) {
      if (b.id !== 'nanofactory' || b.damaged) continue;
      s += (this.levelDef(b).smelterBonus || 0) * this.agingEff(b);
    }
    return s;
  }
  greenhouseBonus2() {
    let s = 0;
    for (const b of this.buildings) {
      if (b.id !== 'ecocircle' || b.damaged) continue;
      s += (this.levelDef(b).greenhouseBonus || 0) * this.agingEff(b);
    }
    return s;
  }

  // 统计（含科技加成）
  totalPopCap() {
    let s = this.buildings.reduce((acc, b) => acc + (this.levelDef(b).popCap || 0), 0);
    // 居住舱科技加成
    const habCap = this.buildings
      .filter(b => b.id === 'habitat')
      .reduce((acc, b) => acc + (this.levelDef(b).popCap || 0), 0);
    s += habCap * (this.techMul('habitatCapMul') - 1);
    // 火星之子
    s += this.techSum('popCapAdd');
    return Math.floor(s);
  }
  totalPower() {
    let s = this.buildings.reduce((sum, b) => {
      const lv = this.levelDef(b);
      let p = lv.power || 0;
      // 太阳能科技加成
      if (b.id === 'solar') p *= this.techMul('solarMul');
      // 沙尘暴：太阳能打折
      if (b.id === 'solar' && this.disaster) {
        p *= this.disaster.solarMultiplier(Date.now(), this.techTree);
        // 尘卷风：路径上的太阳能板失效
        if (this.disaster.devilAffects(b.x, b.y, Date.now())) p = 0;
      }
      // 核电站不受沙尘暴影响
      // v1.2：聚变电站科技加成
      if (b.id === 'fusion') p *= this.techMul('fusionMul');
      // 老化
      p *= this.agingEff(b);
      // 损坏减半
      if (b.damaged) p *= 0.5;
      return sum + p;
    }, 0);
    // v1.2：轨道太阳能科技（无视沙尘暴）
    if (this.techTree && this.techTree.flag('orbitalPower')) {
      s += 50;
    }
    return Math.floor(s);
  }
  totalPowerUse() {
    return this.buildings.reduce((s, b) => s + (this.levelDef(b).powerUse || 0), 0);
  }
  totalGrowthBonus() {
    return this.buildings.reduce((s, b) => s + (this.levelDef(b).growthBonus || 0), 0);
  }
  // 学校加成：实验室产量
  labBonus() {
    return this.buildings.reduce((s, b) => s + (this.levelDef(b).labBonus || 0), 0);
  }
  // 存储上限
  storageCap() {
    return STORAGE_BASE + this.count('warehouse') * STORAGE_PER_WAREHOUSE;
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

  // 生产更新：电力不足时生产类建筑停工；老化/损坏降效；存储上限
  update(now, inv, onEvent, logistics) {
    const ok = this.powerOk();
    const cap = this.storageCap();
    // 太阳风暴：电子设备停工
    const flareDown = this.disaster && this.disaster.electronicsDown(now);
    const ELECTRONICS = ['lab', 'weather', 'trade', 'command'];
    // 维修站 Lv2+ 自动缓慢维修（每分钟回一点老化）
    const autoRepair = this.buildings.some(b => b.id === 'repair' && b.level >= 2);

    // v1.2：叛乱生产惩罚
    const revoltMul = this.disaster ? this.disaster.revoltProdMul(now) : 1;
    // v1.2：AI 故障时自动化建筑停机
    const aiDown = this.disaster ? this.disaster.aiFaultActive(now) : 1;
    const AI_AUTOMATED = ['miner', 'uminer', 'he3rig', 'pump'];

    for (const b of this.buildings) {
      const lv = this.levelDef(b);
      // 太阳风暴：电子设备停工
      if (flareDown && ELECTRONICS.includes(b.id)) continue;
      // v1.2：AI 故障：自动化建筑停机
      if (aiDown && AI_AUTOMATED.includes(b.id)) continue;
      const eff = this.agingEff(b) * (b.damaged ? 0.5 : 1) * revoltMul;

      // 直接生产
      if (lv.produce && now - b.lastProduce >= lv.produceInterval) {
        if (!ok && lv.powerUse > 0) continue;  // 缺电停工（旧全局逻辑）
        // v2.0：电网精细供电（玩家铺了电缆后启用，未铺沿用旧逻辑）
        if (this.powergrid && this.powergrid.cables && this.powergrid.cables.size > 0 && lv.powerUse > 0) {
          try { if (!this.powergrid.isPowered(b.x, b.y)) continue; } catch (e) {}
        }
        // v2.0：水压不足停工（仅 waterUse 建筑）
        if (this.waternet && lv.waterUse) {
          try { if (this.waternet.getPressure(b.x, b.y) < 20) continue; } catch (e) {}
        }
        b.lastProduce = now;
        for (const k in lv.produce) {
          let amount = lv.produce[k] * eff;
          // 科技加成
          if (b.id === 'miner') amount *= this.techMul('minerMul');
          if (b.id === 'pump') amount *= this.techMul('pumpMul');
          if (b.id === 'greenhouse') {
            amount *= (this.techMul('greenhouseMul') * (1 + this.greenhouseBonus2()));
            // v1.2：冰尘暴
            if (this.disaster) amount *= this.disaster.iceStormGreenhouseMul(now, this.techTree);
          }
          if (b.id === 'lab') amount *= this.techMul('labMul') * (1 + this.labBonus());
          if (b.id === 'uminer') {
            amount *= this.techMul('uminerMul');
            // v1.2：火山地形铀矿机效率×2
            try {
              if (this.map.terrain[b.y][b.x] === 5) amount *= 2;
            } catch (e) {}
          }
          if (b.id === 'he3rig') amount *= this.techMul('he3Mul');
          amount *= this.techMul('allProdMul');
          amount = Math.floor(amount * 10) / 10;
          // 存储上限检查
          const newVal = (inv[k] || 0) + amount;
          if (newVal > cap) {
            inv[k] = cap;
            if (onEvent) onEvent('storage-full', { res: k });
          } else {
            inv[k] = newVal;
          }
        }
        if (onEvent) onEvent('produce', b, lv.produce);
      }
      // 转换生产（冶炼厂/水厂）
      if (lv.convert && now - b.lastProduce >= lv.convertInterval) {
        if (!ok && lv.powerUse > 0) continue;
        if (this.powergrid && this.powergrid.cables && this.powergrid.cables.size > 0 && lv.powerUse > 0) {
          try { if (!this.powergrid.isPowered(b.x, b.y)) continue; } catch (e) {}
        }
        if (this.waternet && lv.waterUse) {
          try { if (this.waternet.getPressure(b.x, b.y) < 20) continue; } catch (e) {}
        }
        if (canAfford(inv, lv.convert.in)) {
          b.lastProduce = now;
          spendRes(inv, lv.convert.in);
          for (const k in lv.convert.out) {
            let amount = lv.convert.out[k] * eff;
            if (b.id === 'smelter') amount *= (this.techMul('smelterMul') * (1 + this.smelterBonus2()));
            if (b.id === 'waterplant') {
              amount *= this.techMul('waterplantMul');
              // v1.2：冰尘暴
              if (this.disaster) amount *= this.disaster.iceStormWaterplantMul(now, this.techTree);
            }
            amount *= this.techMul('allProdMul');
            amount = Math.floor(amount * 10) / 10;
            const newVal = (inv[k] || 0) + amount;
            inv[k] = newVal > cap ? cap : newVal;
          }
          if (onEvent) onEvent('convert', b, lv.convert.out);
        }
      }
      // 自动维修（维修站 Lv2+）
      if (autoRepair && b.damaged && now - (b._autoRepairTick || 0) > 60000) {
        b._autoRepairTick = now;
        // 1% 概率自动修好（缓慢）
        if (Math.random() < 0.1) {
          b.damaged = false;
          if (onEvent) onEvent('auto-repair', b);
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
    if (lv.labBonus) s += `｜实验室产量+${Math.round(lv.labBonus * 100)}%`;
    // v1.2
    if (lv.shieldDodge) s += `｜陨石闪避+${Math.round(lv.shieldDodge * 100)}%`;
    if (lv.warnBonus) s += `｜预警+${lv.warnBonus / 1000}秒`;
    if (lv.growthBonus && b.id === 'clone') s += `｜人口增长×${1 + lv.growthBonus}`;
    if (lv.smelterBonus) s += `｜冶炼产量×${1 + lv.smelterBonus}`;
    if (lv.greenhouseBonus) s += `｜温室产量×${1 + lv.greenhouseBonus}`;
    if (b.id === 'elevator') s += `｜运输车速度×${b.level >= 3 ? 3 : (b.level === 2 ? 2 : 1.5)}`;
    if (b.id === 'fusion') s += `｜聚变能源`;
    if (b.id === 'warehouse') s += `｜存储上限+${STORAGE_PER_WAREHOUSE}`;
    try {
      if (b.id === 'depot' && typeof TRUCK !== 'undefined') s += `｜运输车上限+${TRUCK.PER_DEPOT}`;
      if (b.id === 'logistics' && typeof TRUCK !== 'undefined') s += `｜运输车+${TRUCK.PER_LOGISTICS}，速度+${Math.round(TRUCK.SPEED_BONUS * 100)}%`;
    } catch (e) {}
    // 状态
    if (b.damaged) s += `｜⚠️ 已损坏（需维修）`;
    const eff = this.agingEff(b);
    if (eff < 0.99) s += `｜🔧 老化：效率${Math.round(eff * 100)}%`;
    // 升级预览
    if (b.level < def.levels.length - 1) {
      const nl = def.levels[b.level + 1];
      const cost = this.effCost(nl.cost, true);
      const costStr = Object.entries(cost).map(([k, v]) => `${RES_DEFS[k].name}×${v}`).join(' ');
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
      } else if (b.id === 'nuclear') {
        // 核电站：冷却塔
        ctx.fillStyle = '#4a5a7a';
        ctx.beginPath();
        ctx.moveTo(px + tile * 0.25, py + tile * 0.8);
        ctx.lineTo(px + tile * 0.35, py + tile * 0.2);
        ctx.lineTo(px + tile * 0.65, py + tile * 0.2);
        ctx.lineTo(px + tile * 0.75, py + tile * 0.8);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#facc15';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.45, tile * 0.1, 0, Math.PI * 2); ctx.fill();
        // 辐射符号
        ctx.fillStyle = '#1a1a2a';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.45, tile * 0.04, 0, Math.PI * 2); ctx.fill();
      } else if (b.id === 'school') {
        // 学校：书本楼
        ctx.fillStyle = '#8a6a3a';
        ctx.fillRect(px + tile * 0.2, py + tile * 0.3, tile * 0.6, tile * 0.5);
        ctx.fillStyle = '#f5e8dc';
        ctx.fillRect(px + tile * 0.3, py + tile * 0.15, tile * 0.4, tile * 0.2);
        ctx.strokeStyle = '#8a6a3a'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, py + tile * 0.15); ctx.lineTo(cx, py + tile * 0.35);
        ctx.stroke();
        // 窗户
        ctx.fillStyle = '#ffe9a3';
        for (const wx of [0.3, 0.55]) {
          ctx.fillRect(px + tile * wx, py + tile * 0.45, tile * 0.15, tile * 0.12);
        }
      } else if (b.id === 'trade') {
        // 贸易站：货箱
        ctx.fillStyle = '#6a5a3a';
        ctx.fillRect(px + tile * 0.15, py + tile * 0.4, tile * 0.7, tile * 0.4);
        ctx.fillStyle = '#8a7a4a';
        ctx.fillRect(px + tile * 0.15, py + tile * 0.25, tile * 0.5, tile * 0.3);
        ctx.strokeStyle = '#3a2a1a'; ctx.lineWidth = 2;
        ctx.strokeRect(px + tile * 0.15, py + tile * 0.4, tile * 0.7, tile * 0.4);
        // 地球标志
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath(); ctx.arc(px + tile * 0.78, py + tile * 0.25, tile * 0.12, 0, Math.PI * 2); ctx.fill();
      } else if (b.id === 'repair') {
        // 维修站：扳手棚
        ctx.fillStyle = '#5a5a6a';
        ctx.fillRect(px + tile * 0.2, py + tile * 0.35, tile * 0.6, tile * 0.45);
        ctx.beginPath();
        ctx.moveTo(px + tile * 0.2, py + tile * 0.35);
        ctx.lineTo(cx, py + tile * 0.15);
        ctx.lineTo(px + tile * 0.8, py + tile * 0.35);
        ctx.closePath(); ctx.fill();
        // 扳手
        ctx.strokeStyle = '#facc15'; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, tile * 0.12, 0.5, 2.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + tile * 0.08, cy + tile * 0.08);
        ctx.lineTo(cx + tile * 0.2, cy + tile * 0.2);
        ctx.stroke();
      } else if (b.id === 'weather') {
        // 气象站：雷达
        ctx.fillStyle = '#3a4a5a';
        ctx.fillRect(px + tile * 0.35, py + tile * 0.5, tile * 0.3, tile * 0.3);
        ctx.strokeStyle = '#7dd3fc'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.5, tile * 0.3, Math.PI, 0); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.5, tile * 0.18, Math.PI, 0); ctx.stroke();
        // 扫描线
        const ang = (Date.now() / 1000) % (Math.PI * 2);
        ctx.strokeStyle = '#4ade80';
        ctx.beginPath();
        ctx.moveTo(cx, py + tile * 0.5);
        ctx.lineTo(cx + Math.cos(-ang) * tile * 0.3, py + tile * 0.5 + Math.sin(-ang) * tile * 0.3);
        ctx.stroke();
      } else if (b.id === 'dome') {
        // 生态穹顶：大玻璃罩
        ctx.fillStyle = 'rgba(125,211,252,0.25)';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.75, tile * 0.42, Math.PI, 0); ctx.fill();
        ctx.strokeStyle = '#7dd3fc'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.75, tile * 0.42, Math.PI, 0); ctx.stroke();
        // 里面：树
        ctx.fillStyle = '#4ade80';
        ctx.fillRect(cx - 2, py + tile * 0.45, 4, tile * 0.2);
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.4, tile * 0.12, 0, Math.PI * 2); ctx.fill();
        // 房子
        ctx.fillStyle = '#e8e8f0';
        ctx.fillRect(cx + tile * 0.15, py + tile * 0.55, tile * 0.15, tile * 0.12);
      } else if (b.id === 'depot') {
        // 运输站：车库
        ctx.fillStyle = '#4a3a2a';
        ctx.fillRect(px + tile * 0.15, py + tile * 0.3, tile * 0.7, tile * 0.5);
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(px + tile * 0.25, py + tile * 0.45, tile * 0.5, tile * 0.35);
        // 车
        ctx.fillStyle = '#facc15';
        ctx.fillRect(px + tile * 0.3, py + tile * 0.55, tile * 0.4, tile * 0.15);
      } else if (b.id === 'warehouse') {
        // 仓库：大箱子
        ctx.fillStyle = '#6a5a4a';
        ctx.fillRect(px + tile * 0.15, py + tile * 0.3, tile * 0.7, tile * 0.5);
        ctx.strokeStyle = '#3a2a1a'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px + tile * 0.15, py + tile * 0.55);
        ctx.lineTo(px + tile * 0.85, py + tile * 0.55);
        ctx.moveTo(px + tile * 0.5, py + tile * 0.3);
        ctx.lineTo(px + tile * 0.5, py + tile * 0.8);
        ctx.stroke();
      } else if (b.id === 'logistics') {
        // 物流中心：卫星天线
        ctx.fillStyle = '#3a4a6a';
        ctx.beginPath(); ctx.arc(cx, cy, tile * 0.2, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#7dd3fc'; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy - tile * 0.2);
        ctx.lineTo(cx + tile * 0.25, cy - tile * 0.4);
        ctx.stroke();
        // 信号圈
        ctx.strokeStyle = 'rgba(125,211,252,0.5)'; ctx.lineWidth = 2;
        for (const r of [0.3, 0.38]) {
          ctx.beginPath(); ctx.arc(cx + tile * 0.25, cy - tile * 0.4, tile * r, 0, Math.PI * 2); ctx.stroke();
        }
      } else if (b.id === 'uminer') {
        // v1.2 铀矿机：钻机+辐射
        ctx.fillStyle = '#3a4a2a';
        ctx.fillRect(px + tile * 0.18, py + tile * 0.45, tile * 0.64, tile * 0.35);
        ctx.fillStyle = '#84cc16';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.3, tile * 0.12, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#1a1a2a';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.3, tile * 0.05, 0, Math.PI * 2); ctx.fill();
        // 辐射波纹
        ctx.strokeStyle = 'rgba(132,204,22,0.5)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.3, tile * 0.2, 0, Math.PI * 2); ctx.stroke();
      } else if (b.id === 'he3rig') {
        // v1.2 氦3采集器：穹顶+星光
        ctx.fillStyle = 'rgba(165,180,252,0.3)';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.7, tile * 0.35, Math.PI, 0); ctx.fill();
        ctx.strokeStyle = '#a5b4fc'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.7, tile * 0.35, Math.PI, 0); ctx.stroke();
        ctx.fillStyle = '#fef08a';
        for (const [sx, sy] of [[-0.15, 0.35], [0.12, 0.42], [0, 0.25]]) {
          ctx.beginPath(); ctx.arc(cx + sx * tile, py + sy * tile, 2, 0, Math.PI * 2); ctx.fill();
        }
      } else if (b.id === 'fusion') {
        // v1.2 聚变电站：太阳核心
        ctx.fillStyle = '#4a3a1a';
        ctx.beginPath(); ctx.arc(cx, cy, tile * 0.35, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fef08a';
        ctx.beginPath(); ctx.arc(cx, cy, tile * 0.22, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(cx, cy, tile * 0.1, 0, Math.PI * 2); ctx.fill();
        // 磁约束环
        ctx.strokeStyle = '#7dd3fc'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, tile * 0.3, 0.3, Math.PI * 2 - 0.3); ctx.stroke();
      } else if (b.id === 'spaceport') {
        // v1.2 太空港：发射架
        ctx.fillStyle = '#3a3a4a';
        ctx.fillRect(px + tile * 0.15, py + tile * 0.2, tile * 0.12, tile * 0.6);
        ctx.fillRect(px + tile * 0.73, py + tile * 0.2, tile * 0.12, tile * 0.6);
        ctx.fillStyle = '#e8e8f0';
        ctx.beginPath();
        ctx.moveTo(cx, py + tile * 0.05);
        ctx.lineTo(cx - tile * 0.1, py + tile * 0.4);
        ctx.lineTo(cx + tile * 0.1, py + tile * 0.4);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#7dd3fc';
        ctx.fillRect(px + tile * 0.15, py + tile * 0.75, tile * 0.7, tile * 0.08);
      } else if (b.id === 'elevator') {
        // v1.2 轨道电梯：通天塔
        ctx.fillStyle = '#5a5a7a';
        ctx.fillRect(cx - 3, py + tile * 0.05, 6, tile * 0.75);
        ctx.fillStyle = '#2a2a3a';
        ctx.fillRect(px + tile * 0.2, py + tile * 0.65, tile * 0.6, tile * 0.2);
        // 爬升舱
        const liftY = py + tile * 0.65 - ((Date.now() / 20) % (tile * 0.55));
        ctx.fillStyle = '#facc15';
        ctx.fillRect(cx - 5, liftY, 10, 8);
        // 顶部
        ctx.fillStyle = '#7dd3fc';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.05, 5, 0, Math.PI * 2); ctx.fill();
      } else if (b.id === 'clone') {
        // v1.2 克隆中心：培养舱
        ctx.fillStyle = '#2a4a5a';
        ctx.fillRect(px + tile * 0.15, py + tile * 0.2, tile * 0.7, tile * 0.6);
        ctx.fillStyle = 'rgba(125,211,252,0.4)';
        for (const ox of [-0.18, 0.05, 0.28]) {
          ctx.beginPath(); ctx.arc(cx + ox * tile, cy, tile * 0.11, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = '#4ade80';
        for (const ox of [-0.18, 0.05, 0.28]) {
          ctx.fillRect(cx + ox * tile - 2, cy - 4, 4, 8);
        }
      } else if (b.id === 'shield') {
        // v1.2 护盾发生器：穹顶护盾
        ctx.fillStyle = '#3a2a5a';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.75, tile * 0.25, Math.PI, 0); ctx.fill();
        ctx.strokeStyle = 'rgba(185,103,255,0.7)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.75, tile * 0.4, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke();
        ctx.fillStyle = '#b967ff';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.5, 4, 0, Math.PI * 2); ctx.fill();
      } else if (b.id === 'satellite') {
        // v1.2 气象卫星：地面站+信号
        ctx.fillStyle = '#3a4a5a';
        ctx.fillRect(cx - 3, py + tile * 0.4, 6, tile * 0.4);
        ctx.fillStyle = '#7dd3fc';
        ctx.save();
        ctx.translate(cx, py + tile * 0.35); ctx.rotate(0.5);
        ctx.fillRect(-tile * 0.25, -4, tile * 0.5, 8);
        ctx.restore();
        ctx.strokeStyle = 'rgba(125,211,252,0.5)';
        for (const r of [0.35, 0.45]) {
          ctx.beginPath(); ctx.arc(cx, py + tile * 0.2, tile * r, -0.5, 0.5); ctx.stroke();
        }
      } else if (b.id === 'antenna') {
        // v1.2 深空天线：大锅
        ctx.fillStyle = '#4a4a5a';
        ctx.fillRect(cx - 3, py + tile * 0.5, 6, tile * 0.3);
        ctx.fillStyle = '#6a6a7a';
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.45, tile * 0.3, Math.PI * 1.15, Math.PI * 1.85); ctx.fill();
        ctx.strokeStyle = '#f0abfc'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, py + tile * 0.2);
        ctx.lineTo(cx + tile * 0.3, py - tile * 0.1);
        ctx.stroke();
      } else if (b.id === 'nanofactory') {
        // v1.2 纳米工厂：六边形
        ctx.fillStyle = '#2a3a4a';
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = Math.PI / 3 * i - Math.PI / 6;
          const vx = cx + Math.cos(a) * tile * 0.32, vy = cy + Math.sin(a) * tile * 0.32;
          i === 0 ? ctx.moveTo(vx, vy) : ctx.lineTo(vx, vy);
        }
        ctx.closePath(); ctx.fill();
        ctx.strokeStyle = '#7dd3fc'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = '#f0abfc';
        ctx.beginPath(); ctx.arc(cx, cy, tile * 0.1, 0, Math.PI * 2); ctx.fill();
      } else if (b.id === 'ecocircle') {
        // v1.2 生态圈：多层穹顶
        for (const [r, col] of [[0.42, 'rgba(125,211,252,0.2)'], [0.3, 'rgba(74,222,128,0.3)'], [0.18, 'rgba(250,204,21,0.3)']]) {
          ctx.fillStyle = col;
          ctx.beginPath(); ctx.arc(cx, py + tile * 0.78, tile * r, Math.PI, 0); ctx.fill();
        }
        ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.78, tile * 0.42, Math.PI, 0); ctx.stroke();
      } else if (b.id === 'ark') {
        // v1.2 方舟：巨舰
        ctx.fillStyle = '#3a3a5a';
        ctx.beginPath();
        ctx.moveTo(px + tile * 0.1, py + tile * 0.6);
        ctx.lineTo(px + tile * 0.9, py + tile * 0.6);
        ctx.lineTo(px + tile * 0.75, py + tile * 0.85);
        ctx.lineTo(px + tile * 0.25, py + tile * 0.85);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#5a5a7a';
        ctx.fillRect(px + tile * 0.3, py + tile * 0.3, tile * 0.4, tile * 0.3);
        ctx.fillStyle = '#ffe9a3';
        for (const wx of [0.35, 0.5, 0.65]) {
          ctx.fillRect(px + tile * wx, py + tile * 0.4, tile * 0.08, tile * 0.08);
        }
        // 光环
        ctx.strokeStyle = 'rgba(250,204,21,0.6)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, py + tile * 0.55, tile * 0.45, 0, Math.PI * 2); ctx.stroke();
      }

      // 损坏标记
      if (b.damaged) {
        ctx.fillStyle = 'rgba(239,68,68,0.9)';
        ctx.font = `bold ${Math.max(10, tile * 0.35)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('⚠️', cx, py + tile * 0.3);
        ctx.textAlign = 'left';
      }
      drawLevel();
    }
  }
}

if (typeof module !== 'undefined') { module.exports = { BUILDINGS, BUILD_ORDER, BuildManager, STORAGE_BASE, STORAGE_PER_WAREHOUSE }; }
