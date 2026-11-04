/* 星港 — resources.js：8 种资源定义 */

// 资源定义：icon 用于 HUD，color 用于地图/提示
const RES_DEFS = {
  iron:  { name: '铁矿', icon: '🟤', color: '#e07b39' },
  ice:   { name: '冰水', icon: '🧊', color: '#7dd3fc' },
  rare:  { name: '稀土', icon: '🟣', color: '#c084fc' },
  water: { name: '水',   icon: '💧', color: '#38bdf8' },
  food:  { name: '食物', icon: '🌾', color: '#a3e635' },
  steel: { name: '钢材', icon: '🔩', color: '#94a3b8' },
  tech:  { name: '科技', icon: '🔬', color: '#f0abfc' },
  uranium: { name: '铀矿', icon: '☢️', color: '#84cc16' },
  he3:   { name: '氦3', icon: '🌌', color: '#a5b4fc' },
  // power 电力是派生资源（实时计算），不存背包
};

// 背包初始值
function newInventory() {
  return { iron: 0, ice: 0, rare: 0, water: 0, food: 0, steel: 0, tech: 0, uranium: 0, he3: 0 };
}

// v1.2：资源分类（用于贸易动态定价 / 统计）
const RES_TIERS = {
  raw: ['iron', 'ice', 'rare', 'uranium', 'he3'],   // 原材料（可采集）
  refined: ['water', 'food', 'steel'],               // 加工品
  advanced: ['tech'],                                // 高级
};

// v1.2：资源基础价值（贸易定价用）
const RES_VALUE = {
  iron: 1, ice: 1, rare: 3, uranium: 8, he3: 15,
  water: 1, food: 2, steel: 4, tech: 10,
};

// v1.2：资源描述（帮助面板用）
const RES_DESC = {
  iron: '最基础的建材，采矿机自动生产',
  ice: '极地与水厂原料，可转为水',
  rare: '稀土，高级建筑必需',
  uranium: '火山口附近采集，聚变电站燃料',
  he3: '极稀有，月壤/陨石坑中微量存在，终极科技材料',
  water: '人口生存必需，水厂生产',
  food: '人口生存必需，温室生产',
  steel: '冶炼厂用铁矿炼制',
  tech: '实验室产出，解锁科技',
};

// 检查资源是否足够
function canAfford(inv, cost) {
  for (const k in cost) {
    if ((inv[k] || 0) < cost[k]) return false;
  }
  return true;
}

// 扣除资源（先 canAfford 检查）
function spendRes(inv, cost) {
  if (!canAfford(inv, cost)) return false;
  for (const k in cost) inv[k] -= cost[k];
  return true;
}

// 资源缺口描述（用于 toast 提示）
function missingRes(inv, cost) {
  const miss = [];
  for (const k in cost) {
    const need = cost[k] - (inv[k] || 0);
    if (need > 0) miss.push(`${RES_DEFS[k].name}×${need}`);
  }
  return miss.join('、');
}

if (typeof module !== 'undefined') {
  module.exports = { RES_DEFS, RES_TIERS, RES_VALUE, RES_DESC, newInventory, canAfford, spendRes, missingRes };
}
