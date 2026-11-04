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
  // power 电力是派生资源（实时计算），不存背包
};

// 背包初始值
function newInventory() {
  return { iron: 0, ice: 0, rare: 0, water: 0, food: 0, steel: 0, tech: 0 };
}

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
  module.exports = { RES_DEFS, newInventory, canAfford, spendRes, missingRes };
}
