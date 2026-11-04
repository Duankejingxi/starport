/* 星港 — v18_integration.js：v1.6-v1.8 系统深度集成
 * 职责：
 * 1. 天空城/机器人/量子/生物系统接入主循环
 * 2. 新资源注册（qubit/dna/biomass/chronon 等）
 * 3. v16-v18 内容合并（建筑/科技/成就/灾难/奇观）
 * 4. 跨系统联动（天空+机器人，量子+生物）
 */

// ============ 1. v1.6-v1.8 新资源注册 ============
const V18_RES = {
  qubit:   { name: '量子比特', icon: '⚛️', color: '#a5b4fc', desc: '量子计算机产物' },
  dna:     { name: '基因点', icon: '🧬', color: '#4ade80', desc: '基因库产物' },
  biomass: { name: '生物质', icon: '🌱', color: '#86efac', desc: '生物系统基础材料' },
  chronon: { name: '时间子', icon: '⏳', color: '#fcd34d', desc: '时间机器必需材料' },
};

const V18_RES_VALUE = { qubit: 120, dna: 60, biomass: 3, chronon: 200 };

function registerV18Resources() {
  if (typeof RES_DEFS === 'undefined') return false;
  for (const [k, v] of Object.entries(V18_RES)) {
    if (!RES_DEFS[k]) RES_DEFS[k] = { name: v.name, icon: v.icon, color: v.color };
  }
  if (typeof RES_VALUE !== 'undefined') {
    for (const [k, v] of Object.entries(V18_RES_VALUE)) {
      if (!RES_VALUE[k]) RES_VALUE[k] = v;
    }
  }
  return true;
}

function v18NewInventorySlots(inv) {
  for (const k of Object.keys(V18_RES)) {
    if (inv[k] === undefined) inv[k] = 0;
  }
  // v1.6-v1.7 资源
  for (const k of ['crystal', 'nano', 'algae', 'pearl']) {
    if (inv[k] === undefined) inv[k] = 0;
  }
  return inv;
}

// ============ 2. 天空城结算 ============
function settleSky(game, dtMs) {
  const sky = game.sky;
  if (!sky || !sky.unlocked) return null;
  const out = { power: 0, food: 0, tech: 0 };
  try {
    if (sky.produce) {
      const p = sky.produce(dtMs);
      if (p) {
        if (p.power) out.power += p.power;
        if (p.food) out.food += p.food;
        if (p.tech) out.tech += p.tech;
      }
    }
    // 天空天气影响
    if (sky.weather === 'storm' && game.toast && !game._skyStormWarned) {
      game._skyStormWarned = true;
      game.toast('🌪️ 天空风暴！浮空建筑产量-50%');
      setTimeout(() => { game._skyStormWarned = false; }, 60000);
    }
  } catch (e) {}
  return out;
}

// ============ 3. 机器人结算 ============
function settleRobots(game, dtMs) {
  const rb = game.robots;
  if (!rb) return null;
  const out = { robots: 0, power_used: 0 };
  try {
    if (rb.produce) {
      const p = rb.produce(dtMs);
      if (p && p.robots) out.robots = p.robots;
    }
    // 机器人起义检查
    if (rb.checkUprising) {
      const uprising = rb.checkUprising();
      if (uprising && game.toast && !game._robotUprisingWarned) {
        game._robotUprisingWarned = true;
        game.toast('🤖 机器人不满情绪高涨！注意安抚');
        setTimeout(() => { game._robotUprisingWarned = false; }, 120000);
      }
    }
  } catch (e) {}
  return out;
}

// ============ 4. 量子结算 ============
function settleQuantum(game, dtMs) {
  const q = game.quantum;
  if (!q) return null;
  try {
    if (q.tick) q.tick(dtMs, game);
    // 量子隧穿事件
    if (q.checkTunnel && Math.random() < 0.001) {
      const res = q.checkTunnel();
      if (res && game.toast) game.toast(`⚛️ 量子隧穿：${res.desc}`);
    }
  } catch (e) {}
  return null;
}

// ============ 5. 生物结算 ============
function settleBio(game, dtMs) {
  const b = game.bio;
  if (!b) return null;
  try {
    if (b.tick) b.tick(dtMs, game);
    // 基因瘟疫检查
    if (b.checkPlague && b.checkPlague()) {
      if (game.toast && !game._plagueWarned) {
        game._plagueWarned = true;
        game.toast('🦠 基因瘟疫爆发！建造隔离站');
        setTimeout(() => { game._plagueWarned = false; }, 120000);
      }
    }
  } catch (e) {}
  return null;
}

// ============ 6. v1.6-v1.8 主集成 tick ============
function v18Tick(game, dtMs, now) {
  // 资源注册（首次）
  if (!game._v18res) {
    game._v18res = true;
    try { registerV18Resources(); } catch (e) {}
    try { if (game.player && game.player.inv) v18NewInventorySlots(game.player.inv); } catch (e) {}
  }
  // 各系统结算
  const skyOut = settleSky(game, dtMs);
  if (skyOut && game.player) {
    if (skyOut.food) game.player.inv.food = Math.min(99999, game.player.inv.food + skyOut.food);
    if (skyOut.tech) game.player.inv.tech = Math.min(99999, game.player.inv.tech + skyOut.tech);
  }
  settleRobots(game, dtMs);
  settleQuantum(game, dtMs);
  settleBio(game, dtMs);
}

// ============ 7. 跨系统联动加成 ============
function v18Synergies(game) {
  const bonus = { power: 0, tech: 0, food: 0 };
  try {
    // 天空 + 机器人：无人机维护天空平台，效率+10%
    if (game.sky && game.sky.unlocked && game.robots && (game.robots.count || 0) > 10) {
      bonus.power += 0.1;
    }
    // 量子 + 生物：量子计算加速基因研究
    if (game.quantum && game.bio) {
      bonus.tech += 0.15;
    }
    // 戴森球 + 量子：能源过剩时量子计算+50%
    if (game.builder && game.builder.hasBuilding && game.builder.hasBuilding('dyson_sphere')) {
      bonus.tech += 0.5;
    }
  } catch (e) {}
  return bonus;
}

// ============ 8. v1.8 胜利条件检查 ============
function checkV18Victories(game) {
  const wins = [];
  try {
    // 时间机器胜利（第五胜利）
    if (game.builder && game.builder.hasBuilding && game.builder.hasBuilding('time_machine')) {
      wins.push({ id: 'time', name: '时间主宰', desc: '建成时间机器，掌控时间' });
    }
    // 戴森球胜利（第六胜利）
    if (game.builder && game.builder.hasBuilding && game.builder.hasBuilding('dyson_sphere')) {
      wins.push({ id: 'dyson', name: '恒星主宰', desc: '建成戴森球，掌控恒星' });
    }
    // 虫洞胜利（第七胜利）
    if (game.builder && game.builder.hasBuilding && game.builder.hasBuilding('wormhole_stabilizer')) {
      const b = game.builder.getBuilding('wormhole_stabilizer');
      if (b && b.level >= 3) wins.push({ id: 'wormhole', name: '星门主宰', desc: '虫洞稳定器 Lv3' });
    }
  } catch (e) {}
  return wins;
}

// ============ 9. 存档迁移 v17 → v18 ============
function migrateSaveToV18(save) {
  if (!save || save.v18migrated) return save;
  if (save.inv) v18NewInventorySlots(save.inv);
  if (!save.sky) save.sky = { unlocked: false };
  if (!save.robots) save.robots = { count: 0 };
  if (!save.quantum) save.quantum = {};
  if (!save.bio) save.bio = {};
  save.v18migrated = true;
  return save;
}

// ============ 10. v1.8 统计 ============
const V18_STATS = [
  'sky_unlock', 'sky_build', 'robot_built', 'robot_uprising',
  'quantum_research', 'bio_modify', 'wonder_built', 'victory_5',
];

function trackV18(game, event, data) {
  try {
    if (game.stats && game.stats.track) game.stats.track(event, data);
  } catch (e) {}
}
