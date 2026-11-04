/* 星港 — tech.js：科技树（30 项 / 建造 / 生产 / 生存三系） */

// 科技分支
const TECH_BRANCHES = {
  build: { name: '建造', icon: '🏗️', color: '#e07b39' },
  prod:  { name: '生产', icon: '⚙️', color: '#38bdf8' },
  surv:  { name: '生存', icon: '💚', color: '#4ade80' },
};

// 科技定义：cost = 科技点；needs = 前置科技 id；fx = 效果键值
// 效果键说明：
//   buildCostMul   建筑建造成本倍率（<1 = 便宜）
//   upgradeCostMul 升级成本倍率
//   habitatCapMul  居住舱容量倍率
//   minerMul       采矿机产量倍率
//   pumpMul        抽水机产量倍率
//   smelterMul     冶炼厂产量倍率
//   waterplantMul  水厂产量倍率
//   greenhouseMul  温室产量倍率
//   solarMul       太阳能产量倍率
//   labMul         实验室产量倍率
//   allProdMul     全部生产倍率（叠加）
//   popGrowthMul   人口增长速度倍率
//   waterUseMul    人口耗水倍率
//   foodUseMul     人口耗食物倍率
//   popCapAdd      人口上限 +N
//   sandstormMul   沙尘暴影响倍率（<1 = 减免）
//   meteorMul      陨石伤害倍率
//   repairCostMul  维修成本倍率
//   tradeMul       贸易收益倍率
//   agingMul       老化速度倍率（<1 = 变慢）
//   harvestBonus   手动采集 +N
//   launchCostMul  发射台成本倍率
//   unlockNuclear  解锁核电站（0/1）
//   unlockDome     解锁生态穹顶（0/1）
//   unlockTrade    解锁贸易站（0/1）
//   unlockWeather  解锁气象站（0/1）
//   meteorImmune   免疫陨石（0/1）
const TECH_DEFS = {
  // ============ 建造系 ============
  't-build-1': {
    name: '高效建造', icon: '🧱', branch: 'build', cost: 5, needs: [],
    desc: '标准化施工流程，所有建筑建造成本 -10%。',
    fx: { buildCostMul: 0.9 },
  },
  't-build-2': {
    name: '模块化建造', icon: '🧩', branch: 'build', cost: 12, needs: ['t-build-1'],
    desc: '预制模块现场组装，建筑建造成本再 -15%（叠加）。',
    fx: { buildCostMul: 0.85 },
  },
  't-build-3': {
    name: '快速升级', icon: '⚡', branch: 'build', cost: 10, needs: ['t-build-1'],
    desc: '工程队经验丰富，建筑升级成本 -15%。',
    fx: { upgradeCostMul: 0.85 },
  },
  't-build-4': {
    name: '坚固结构', icon: '🛡️', branch: 'build', cost: 20, needs: ['t-build-2'],
    desc: '抗冲击合金框架，建筑免疫陨石损坏。',
    fx: { meteorImmune: 1 },
  },
  't-build-5': {
    name: '立体城市', icon: '🏙️', branch: 'build', cost: 15, needs: ['t-build-2'],
    desc: '垂直空间利用，居住舱人口容量 +50%。',
    fx: { habitatCapMul: 1.5 },
  },
  't-build-6': {
    name: '自动化开采', icon: '🤖', branch: 'build', cost: 15, needs: ['t-build-3'],
    desc: '无人钻机 24 小时作业，采矿机产量 +30%。',
    fx: { minerMul: 1.3 },
  },
  't-build-7': {
    name: '精密工程', icon: '🔧', branch: 'build', cost: 25, needs: ['t-build-3'],
    desc: '纳米级装配精度，建筑升级成本再 -20%（叠加）。',
    fx: { upgradeCostMul: 0.8 },
  },
  't-build-8': {
    name: '纳米修复', icon: '✨', branch: 'build', cost: 25, needs: ['t-build-7'],
    desc: '建筑表面纳米涂层，设备老化速度 -50%。',
    fx: { agingMul: 0.5 },
  },
  't-build-9': {
    name: '巨型结构', icon: '🌐', branch: 'build', cost: 30, needs: ['t-build-5'],
    desc: '掌握大型穹顶建造技术，解锁生态穹顶。',
    fx: { unlockDome: 1 },
  },
  't-build-10': {
    name: '星港蓝图', icon: '📐', branch: 'build', cost: 40, needs: ['t-build-7'],
    desc: '发射台优化设计，建造成本 -20%。',
    fx: { launchCostMul: 0.8 },
  },

  // ============ 生产系 ============
  't-prod-1': {
    name: '高效冶炼', icon: '🔥', branch: 'prod', cost: 5, needs: [],
    desc: '电弧炉升级，冶炼厂钢材产量 +50%。',
    fx: { smelterMul: 1.5 },
  },
  't-prod-2': {
    name: '水循环', icon: '♻️', branch: 'prod', cost: 8, needs: [],
    desc: '冷凝水回收系统，水厂产量 +50%。',
    fx: { waterplantMul: 1.5 },
  },
  't-prod-3': {
    name: '无土栽培', icon: '🌱', branch: 'prod', cost: 8, needs: [],
    desc: '水培营养液配方，温室食物产量 +50%。',
    fx: { greenhouseMul: 1.5 },
  },
  't-prod-4': {
    name: '深层钻探', icon: '⛏️', branch: 'prod', cost: 12, needs: [],
    desc: '深层矿脉探测，手动采集稀土 +1。',
    fx: { harvestBonus: 1 },
  },
  't-prod-5': {
    name: '聚变前置', icon: '☢️', branch: 'prod', cost: 20, needs: ['t-prod-1'],
    desc: '可控聚变理论突破，解锁核电站。',
    fx: { unlockNuclear: 1 },
  },
  't-prod-6': {
    name: '量子计算', icon: '💻', branch: 'prod', cost: 30, needs: ['t-prod-5'],
    desc: '量子模拟优化实验流程，实验室科技产量 +100%。',
    fx: { labMul: 2.0 },
  },
  't-prod-7': {
    name: '物质重组', icon: '⚛️', branch: 'prod', cost: 20, needs: ['t-prod-1'],
    desc: '分子级重构，冶炼厂钢材产量再 +50%（叠加）。',
    fx: { smelterMul: 1.5 },
  },
  't-prod-8': {
    name: '大气改造', icon: '🌍', branch: 'prod', cost: 25, needs: ['t-prod-3'],
    desc: '局部大气 CO2 富集，温室产量再 +50%（叠加）。',
    fx: { greenhouseMul: 1.5 },
  },
  't-prod-9': {
    name: '无限能源', icon: '🔆', branch: 'prod', cost: 25, needs: ['t-prod-5'],
    desc: '光伏转换率突破，太阳能板电力 +50%。',
    fx: { solarMul: 1.5 },
  },
  't-prod-10': {
    name: '奇点', icon: '🌟', branch: 'prod', cost: 50, needs: ['t-prod-6', 't-prod-7'],
    desc: '技术奇点，所有生产建筑产量 +25%。',
    fx: { allProdMul: 1.25 },
  },

  // ============ 生存系 ============
  't-surv-1': {
    name: '医疗协议', icon: '🏥', branch: 'surv', cost: 5, needs: [],
    desc: '标准化医疗流程，人口增长速度 +25%。',
    fx: { popGrowthMul: 1.25 },
  },
  't-surv-2': {
    name: '水净化', icon: '💧', branch: 'surv', cost: 8, needs: [],
    desc: '高效净水循环，人口耗水 -25%。',
    fx: { waterUseMul: 0.75 },
  },
  't-surv-3': {
    name: '营养学', icon: '🍎', branch: 'surv', cost: 8, needs: [],
    desc: '合成营养餐，人口耗食物 -25%。',
    fx: { foodUseMul: 0.75 },
  },
  't-surv-4': {
    name: '防辐射', icon: '☂️', branch: 'surv', cost: 12, needs: [],
    desc: '建筑防辐射涂层，沙尘暴影响 -50%。',
    fx: { sandstormMul: 0.5 },
  },
  't-surv-5': {
    name: '气象学', icon: '📡', branch: 'surv', cost: 15, needs: ['t-surv-4'],
    desc: '大气模型预测，解锁气象站，灾难预警 +10 秒。',
    fx: { unlockWeather: 1 },
  },
  't-surv-6': {
    name: '生态学', icon: '🌿', branch: 'surv', cost: 15, needs: ['t-surv-1'],
    desc: '闭环生态系统理论，解锁生态穹顶。',
    fx: { unlockDome: 1 },
  },
  't-surv-7': {
    name: '应急协议', icon: '🚨', branch: 'surv', cost: 18, needs: [],
    desc: '陨石应急预案，陨石伤害 -50%。',
    fx: { meteorMul: 0.5 },
  },
  't-surv-8': {
    name: '贸易协定', icon: '🤝', branch: 'surv', cost: 20, needs: [],
    desc: '与地球达成贸易协定，解锁贸易站，交易收益 +20%。',
    fx: { unlockTrade: 1, tradeMul: 1.2 },
  },
  't-surv-9': {
    name: '维护手册', icon: '📖', branch: 'surv', cost: 20, needs: ['t-surv-7'],
    desc: '标准维护流程，建筑维修成本 -50%。',
    fx: { repairCostMul: 0.5 },
  },
  't-surv-10': {
    name: '火星之子', icon: '👶', branch: 'surv', cost: 35, needs: ['t-surv-1', 't-surv-6'],
    desc: '第一代火星出生者，人口上限 +20。',
    fx: { popCapAdd: 20 },
  },
};

// 科技顺序（UI 展示用，按分支分组）
const TECH_ORDER = [
  // 建造系
  't-build-1', 't-build-2', 't-build-3', 't-build-4', 't-build-5',
  't-build-6', 't-build-7', 't-build-8', 't-build-9', 't-build-10',
  // 生产系
  't-prod-1', 't-prod-2', 't-prod-3', 't-prod-4', 't-prod-5',
  't-prod-6', 't-prod-7', 't-prod-8', 't-prod-9', 't-prod-10',
  // 生存系
  't-surv-1', 't-surv-2', 't-surv-3', 't-surv-4', 't-surv-5',
  't-surv-6', 't-surv-7', 't-surv-8', 't-surv-9', 't-surv-10',
];

class TechTree {
  constructor() {
    this.unlocked = new Set();  // 已解锁科技 id
  }

  // 是否已解锁
  has(id) {
    return this.unlocked.has(id);
  }

  // 是否可解锁：前置都解锁 + 未解锁 + 科技点足够
  canUnlock(id, techPoints) {
    const def = TECH_DEFS[id];
    if (!def) return { ok: false, reason: '未知科技' };
    if (this.unlocked.has(id)) return { ok: false, reason: '已解锁' };
    for (const pre of def.needs) {
      if (!this.unlocked.has(pre)) {
        return { ok: false, reason: `需要先解锁「${TECH_DEFS[pre].name}」` };
      }
    }
    if (techPoints < def.cost) {
      return { ok: false, reason: `需要科技点×${def.cost}` };
    }
    return { ok: true };
  }

  // 解锁（调用前先 canUnlock 检查）
  unlock(id, inv) {
    const def = TECH_DEFS[id];
    if (!def) return false;
    if ((inv.tech || 0) < def.cost) return false;
    inv.tech -= def.cost;
    this.unlocked.add(id);
    return true;
  }

  // 计算某效果键的总倍率（乘法叠加，默认 1）
  // 对于加法效果（popCapAdd/harvestBonus/unlock*），用 sum()
  mul(key) {
    let v = 1;
    for (const id of this.unlocked) {
      const fx = TECH_DEFS[id].fx;
      if (fx && fx[key] !== undefined && key !== 'popCapAdd' && key !== 'harvestBonus') {
        // 解锁类是 0/1 开关，不参与乘法
        if (key.startsWith('unlock') || key === 'meteorImmune') continue;
        v *= fx[key];
      }
    }
    return v;
  }

  // 加法效果求和
  sum(key) {
    let v = 0;
    for (const id of this.unlocked) {
      const fx = TECH_DEFS[id].fx;
      if (fx && fx[key] !== undefined) v += fx[key];
    }
    return v;
  }

  // 是否解锁了某个开关
  flag(key) {
    for (const id of this.unlocked) {
      const fx = TECH_DEFS[id].fx;
      if (fx && fx[key]) return true;
    }
    return false;
  }

  // 建筑是否被科技解锁（核电站/生态穹顶/贸易站/气象站需要科技）
  buildingUnlocked(buildingId) {
    switch (buildingId) {
      case 'nuclear': return this.flag('unlockNuclear');
      case 'dome': return this.flag('unlockDome');
      case 'trade': return this.flag('unlockTrade');
      case 'weather': return this.flag('unlockWeather');
      default: return true;
    }
  }

  // 按分支统计解锁数
  countByBranch() {
    const c = { build: 0, prod: 0, surv: 0 };
    for (const id of this.unlocked) {
      const b = TECH_DEFS[id].branch;
      if (c[b] !== undefined) c[b]++;
    }
    return c;
  }

  // 总解锁数
  totalUnlocked() {
    return this.unlocked.size;
  }

  // 存档 / 读档
  serialize() {
    return Array.from(this.unlocked);
  }
  deserialize(arr) {
    this.unlocked = new Set(arr || []);
  }
}

if (typeof module !== 'undefined') {
  module.exports = { TECH_DEFS, TECH_ORDER, TECH_BRANCHES, TechTree };
}
