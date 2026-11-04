/* 星港 — v15_balance.js：v1.5 平衡性工具
 * 难度预设、开局加成、数值模拟器（供调试/自定义开局）。
 */

// ============ 难度预设 ============
const V15_DIFFICULTY = {
  story: {
    name: '剧情模式', icon: '📖', desc: '轻松体验，无灾难，资源+50%',
    mods: { disasterFreqMul: 0, resourceMul: 1.5, buildCostMul: 0.8, raidFreqMul: 0 },
  },
  normal: {
    name: '标准', icon: '⚖️', desc: '默认体验',
    mods: { disasterFreqMul: 1, resourceMul: 1, buildCostMul: 1, raidFreqMul: 1 },
  },
  hard: {
    name: '困难', icon: '🔥', desc: '灾难×2，资源-25%，袭击×1.5',
    mods: { disasterFreqMul: 2, resourceMul: 0.75, buildCostMul: 1.2, raidFreqMul: 1.5 },
  },
  nightmare: {
    name: '噩梦', icon: '😈', desc: '灾难×3，资源-40%，袭击×2',
    mods: { disasterFreqMul: 3, resourceMul: 0.6, buildCostMul: 1.5, raidFreqMul: 2 },
  },
  sandbox: {
    name: '沙盒', icon: '🧪', desc: '无限资源，随意建造',
    mods: { disasterFreqMul: 0, resourceMul: 999, buildCostMul: 0, raidFreqMul: 0 },
  },
};

// ============ 开局加成选项 ============
const V15_START_BONUS = [
  { id: 'none', name: '无加成', desc: '标准开局', cost: 0 },
  { id: 'rich', name: '富庶开局', desc: '铁×100，食物×50', cost: 0, give: { iron: 100, food: 50 } },
  { id: 'tech', name: '科技开局', desc: '科技×10', cost: 0, give: { tech: 10 } },
  { id: 'pop', name: '人口开局', desc: '人口+10，食物×30', cost: 0, give: { pop: 10, food: 30 } },
  { id: 'military', name: '军事开局', desc: '防御塔×2，铁×50', cost: 0, give: { iron: 50 }, buildings: ['turret_mg', 'turret_mg'] },
];

// ============ 数值模拟器（平衡性验证用） ============
const V15_SIM = {
  // 模拟：给定建筑组合，计算每分钟净产量
  simulateProduction(buildings) {
    // buildings: [{id, level}]
    const out = {};
    const RATES = {
      miner: [2, 5, 12], solar: [3, 8, 18], pump: [2, 5, 12],
      smelter: [1, 2, 4], greenhouse: [4, 10, 24], waterworks: [4, 10, 24],
      lab: [1, 3, 8], geothermal: [20, 50, 120], deepminer: [6, 15, 36],
    };
    for (const b of buildings) {
      const rates = RATES[b.id];
      if (!rates) continue;
      const rate = rates[(b.level || 1) - 1] || 0;
      const key = b.id === 'miner' || b.id === 'deepminer' ? 'iron'
        : b.id === 'solar' || b.id === 'geothermal' ? 'power'
        : b.id === 'pump' ? 'ice'
        : b.id === 'smelter' ? 'steel'
        : b.id === 'greenhouse' ? 'food'
        : b.id === 'waterworks' ? 'water'
        : b.id === 'lab' ? 'tech' : 'other';
      out[key] = (out[key] || 0) + rate * 6;  // 每 10 秒 → 每分钟 ×6
    }
    return out;
  },

  // 模拟：人口增长到目标需要多久（秒）
  simulatePopGrowth(fromPop, toPop, hasHospital, hasGeneLab) {
    let pop = fromPop;
    let seconds = 0;
    let growthInterval = 20;  // 基础 20 秒+1
    if (hasHospital) growthInterval *= 0.8;
    if (hasGeneLab) growthInterval *= 0.5;
    while (pop < toPop && seconds < 36000) {
      pop += 1;
      seconds += growthInterval;
    }
    return { seconds, minutes: Math.round(seconds / 60), reached: pop >= toPop };
  },

  // 模拟：科技解锁到指定项需要多久
  simulateTechRush(targetTech, labCount, labLevel) {
    const labRate = [1, 3, 8][labLevel - 1] || 1;
    const perMin = labCount * labRate * 6;
    if (perMin <= 0) return { minutes: Infinity };
    return { minutes: Math.ceil(targetTech / perMin) };
  },

  // 回合制战斗模拟（袭击 vs 防御）
  simulateRaid(attackers, defenders) {
    // attackers: [{hp, dmg}], defenders: [{hp, dmg}]
    const a = attackers.map(x => ({ ...x }));
    const d = defenders.map(x => ({ ...x }));
    let rounds = 0;
    while (a.some(x => x.hp > 0) && d.some(x => x.hp > 0) && rounds < 100) {
      rounds++;
      // 防御方先手
      for (const def of d) {
        if (def.hp <= 0) continue;
        const tgt = a.find(x => x.hp > 0);
        if (tgt) tgt.hp -= def.dmg;
      }
      for (const atk of a) {
        if (atk.hp <= 0) continue;
        const tgt = d.find(x => x.hp > 0);
        if (tgt) tgt.hp -= atk.dmg;
      }
    }
    return {
      rounds,
      attackersWin: a.some(x => x.hp > 0),
      defendersWin: d.some(x => x.hp > 0),
      attackersLeft: a.filter(x => x.hp > 0).length,
      defendersLeft: d.filter(x => x.hp > 0).length,
    };
  },
};

// ============ v1.5 新增建筑数值速查 ============
const V15_BUILDING_STATS = {
  wind: { power: [2, 4, 8], stormMul: 2 },
  geothermal_well: { power: [12, 25, 45] },
  food_factory: { happiness: [3, 6, 12], growthMul: [1.2, 1.4, 1.6] },
  robot_factory: { robots: [4, 10, 20] },
  nano_line: { ratio: ['4→1', '4→2', '6→4'] },
  observatory: { tech: [2, 5, 12] },
  gene_lab: { growthMul: [1.5, 2, 3] },
  orbital_cannon: { intercept: [0.3, 0.5, 0.8], dmg: [100, 300, 800] },
  shield_dome: { reduction: [0.25, 0.5, 0.75] },
  parliament: { policySlots: [2, 3, 4] },
  exchange: { priceBonus: [0.2, 0.35, 0.5] },
  med_center: { growthMul: [1.5, 2, 2.5] },
  time_capsule: { capacity: [200, 600, 1500] },
  monument: { achievementPts: [1, 3, 6], happiness: [5, 12, 25] },
  wormhole: { stability: [1, 2, 3] },
};

// ============ 难度应用 ============
function applyDifficulty(game, diffId) {
  const d = V15_DIFFICULTY[diffId];
  if (!d || !game) return false;
  game.difficulty = diffId;
  game.difficultyMods = { ...d.mods };
  // 应用到灾难系统
  if (game.disaster && d.mods.disasterFreqMul !== undefined) {
    game.disaster.freqMul = d.mods.disasterFreqMul;
  }
  // 应用到军事袭击
  if (game.military && d.mods.raidFreqMul !== undefined) {
    game.military.raidFreqMul = d.mods.raidFreqMul;
  }
  return true;
}

function applyStartBonus(game, bonusId) {
  const b = V15_START_BONUS.find(x => x.id === bonusId);
  if (!b || !game) return false;
  if (b.give) {
    for (const [k, v] of Object.entries(b.give)) {
      if (k === 'pop') {
        if (game.pop) game.pop.count += v;
      } else if (game.player && game.player.inv[k] !== undefined) {
        game.player.inv[k] += v;
      }
    }
  }
  return true;
}

// ============ v1.5 快捷键 ============
const V15_HOTKEYS = [
  { key: '+/=  ', desc: '放大镜头' },
  { key: '-/_  ', desc: '缩小镜头' },
  { key: '0    ', desc: '重置镜头' },
  { key: 'u    ', desc: '打开地下城' },
  { key: 'o    ', desc: '打开海洋' },
  { key: 'g    ', desc: '打开总督' },
  { key: 'c    ', desc: '打开战役' },
  { key: 'm    ', desc: '打开新纪元菜单' },
];

function bindV15Hotkeys(game) {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const k = e.key.toLowerCase();
    if (!game.camera) return;
    if (k === '+' || k === '=') { game.camera.zoomIn(); game.updateZoomUI(); }
    else if (k === '-' || k === '_') { game.camera.zoomOut(); game.updateZoomUI(); }
    else if (k === '0') { game.camera.reset(); game.updateZoomUI(); }
    else if (k === 'm' && game.v15ui) { game.v15ui.toggleMenu(); }
    else if (k === 'u' && game.v15ui) { game.v15ui.openPanel('underground'); }
    else if (k === 'o' && game.v15ui) { game.v15ui.openPanel('ocean'); }
    else if (k === 'g' && game.v15ui) { game.v15ui.openPanel('governor'); }
    else if (k === 'c' && game.v15ui) { game.v15ui.openPanel('campaign'); }
  });
}

// ============ v1.5 调试命令（控制台） ============
const V15_DEBUG = {
  help() {
    console.log('星港 v1.5 调试命令:');
    console.log('  V15_DEBUG.give("iron", 1000) - 给资源');
    console.log('  V15_DEBUG.unlockAll() - 解锁全部');
    console.log('  V15_DEBUG.win() - 直接胜利');
    console.log('  V15_DEBUG.stats() - 显示统计');
  },
  give(res, n) {
    const g = window.__game;
    if (g && g.player) { g.player.inv[res] = (g.player.inv[res] || 0) + n; g.updateHUD(); }
  },
  unlockAll() {
    const g = window.__game;
    if (!g) return;
    if (g.underground) g.underground.unlocked = true;
    if (g.ocean) g.ocean.unlocked = true;
    if (g.tech && g.tech.items) g.tech.items.forEach(t => { try { g.tech.unlock(t.id); } catch (e) {} });
    g.updateHUD();
  },
  win() {
    const g = window.__game;
    if (g) { g.player.inv.steel = 9999; g.player.inv.tech = 9999; g.pop.count = 100; g.updateHUD(); }
  },
  stats() {
    const g = window.__game;
    if (!g) return;
    console.log('人口:', g.pop.count, '建筑:', g.builder.buildings.length);
    console.log('科技:', g.player.inv.tech, '成就:', g.achievements.unlockedCount);
  },
};
if (typeof window !== 'undefined') window.V15_DEBUG = V15_DEBUG;

// ============ v1.5 性能优化标记 ============
// 地下城/海洋使用独立画布，避免主地图重绘开销
const V15_PERF = {
  undergroundCanvas: true,   // 地下城独立渲染
  oceanCanvas: true,          // 海洋独立渲染
  lazyPanels: true,           // 面板懒加载
  maxParticles: 100,          // 粒子上限（移动端）
};

// ============ v1.5 无障碍 ============
const V15_A11Y = {
  // 所有按钮已有 aria-label，面板支持 ESC 关闭
  escClosesPanels: true,
  // 色盲友好：资源图标+文字双重标识
  colorblindSafe: true,
  // 字体缩放跟随系统
  respectFontScale: true,
};

// ============ v1.5 发布检查清单 ============
// [x] 地下城系统完整
// [x] 海洋系统完整
// [x] AI 总督完整
// [x] 15 新建筑完整
// [x] 20 战役关卡完整
// [x] 科技 140 / 成就 177
// [x] 镜头缩放 + 44px 触屏
// [x] 所有文件 node --check 通过
// [x] 集成冒烟测试通过
// v1.5 代码冻结，准备发布
const V15_RELEASE = { version: '1.5.0', codename: '深渊与深海', frozen: true };
