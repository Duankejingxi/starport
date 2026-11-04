/* 星港 — v15_integration.js：v1.5 系统深度集成
 * 职责：
 * 1. 新资源注册（crystal/晶体、nano/纳米、algae/深海藻、pearl/珍珠）
 * 2. 地下城产量并入主库存
 * 3. 战役胜利条件检查
 * 4. v1.5 成就/科技/灾难配置合并
 * 5. 存档版本迁移（v14 → v15）
 */

// ============ 1. 新资源注册 ============
const V15_RES = {
  crystal: { name: '晶体矿', icon: '💎', color: '#67e8f9', desc: '地下深层稀有矿物，高级建造材料' },
  nano:    { name: '纳米材料', icon: '🔬', color: '#f0abfc', desc: '纳米组装线产物，终极建筑材料' },
  algae:   { name: '深海藻', icon: '🌿', color: '#4ade80', desc: '地下冰海产物，可制食物' },
  pearl:   { name: '珍珠', icon: '🦪', color: '#fbcfe8', desc: '深海珍珠，贸易高价值' },
};

const V15_RES_VALUE = { crystal: 12, nano: 25, algae: 2, pearl: 20 };

function registerV15Resources() {
  if (typeof RES_DEFS === 'undefined') return false;
  for (const [k, v] of Object.entries(V15_RES)) {
    if (!RES_DEFS[k]) RES_DEFS[k] = { name: v.name, icon: v.icon, color: v.color };
  }
  if (typeof RES_VALUE !== 'undefined') {
    for (const [k, v] of Object.entries(V15_RES_VALUE)) {
      if (!RES_VALUE[k]) RES_VALUE[k] = v;
    }
  }
  if (typeof RES_DESC !== 'undefined') {
    for (const [k, v] of Object.entries(V15_RES)) {
      if (!RES_DESC[k]) RES_DESC[k] = v.desc;
    }
  }
  // 地下城模块的 crystal 定义兼容
  try {
    if (typeof UndergroundRES !== 'undefined' && UndergroundRES.crystal && !RES_DEFS.crystal) {
      RES_DEFS.crystal = UndergroundRES.crystal;
    }
  } catch (e) {}
  return true;
}

function v15NewInventorySlots(inv) {
  for (const k of Object.keys(V15_RES)) {
    if (inv[k] === undefined) inv[k] = 0;
  }
  return inv;
}

// ============ 2. 地下城产量结算 ============
function settleUnderground(game, dtMs) {
  const ug = game.underground;
  if (!ug || !ug.unlocked) return null;
  const out = { iron: 0, crystal: 0, power: 0, food: 0, popCap: 0 };
  try {
    // 建筑生产（地下建筑配置在 underground.js 的 UG_BUILDINGS）
    if (ug.buildings) {
      for (const b of ug.buildings) {
        const prod = ug.buildingProduction ? ug.buildingProduction(b, dtMs) : null;
        if (!prod) continue;
        for (const [k, v] of Object.entries(prod)) {
          if (out[k] === undefined) out[k] = 0;
          out[k] += v;
        }
      }
    }
    // 探险队带回（drainEvents）
    if (ug.drainEvents) {
      const evs = ug.drainEvents();
      for (const ev of evs) {
        if (ev.type === 'loot' && ev.loot) {
          for (const [k, v] of Object.entries(ev.loot)) {
            const key = k === 'crystal' ? 'crystal' : k;
            game.player.inv[key] = Math.min(99999, (game.player.inv[key] || 0) + v);
          }
          if (game.toast) game.toast(`⛏️ 探险队带回物资！`);
        } else if (ev.type === 'collapse') {
          if (game.toast) game.toast(`⚠️ 地下坍塌！${ev.detail || ''}`);
          if (game.stats) game.stats.track('underground_collapse');
        } else if (ev.type === 'gas') {
          if (game.pop && game.pop.addPop) game.pop.addPop(-5);
          if (game.toast) game.toast(`☠️ 瓦斯泄漏！人口 -5`);
        }
      }
    }
  } catch (e) { /* 防御性：地下系统异常不影响主循环 */ }
  return out;
}

// ============ 3. 海洋产量结算（补充 game.js 中的基础版） ============
function settleOcean(game, dtMs) {
  const oc = game.ocean;
  if (!oc || !oc.unlocked) return null;
  const out = { water: 0, food: 0, pearl: 0, tech: 0, popCap: 0 };
  try {
    if (oc.popCap) out.popCap = oc.popCap();
    // 藻类→食物转换（每 3 藻 = 1 食物已在 ocean.produce 处理，这里只做珍珠贸易加成）
    if (game.builder && typeof game.builder.hasBuilding === 'function') {
      // 有交易所时珍珠价值提升（仅记录，供贸易系统读取）
      out.pearlBonus = game.builder.hasBuilding('exchange') ? 0.2 : 0;
    }
  } catch (e) {}
  return out;
}

// ============ 4. 战役胜利检查 ============
function checkCampaignProgress(game) {
  const cp = game.campaign;
  if (!cp || !cp.activeLevel) return;
  try {
    const state = {
      pop: game.pop.count,
      buildings: game.builder.buildings.length,
      tech: game.player.inv.tech || 0,
      timeMs: Date.now() - cp.activeLevel.startTime,
      deaths: game.stats ? (game.stats.get('deaths') || 0) : 0,
      happiness: game.city ? game.city.happiness : 50,
    };
    const res = cp.checkVictory(cp.activeLevel.id, state);
    if (res.status === 'win') {
      cp.completeLevel(cp.activeLevel.id, state);
      if (game.toast) game.toast(`🏆 战役胜利！评分：${res.grade || 'S'}`);
      if (game.sound) game.sound.win();
    } else if (res.status === 'fail') {
      if (game.toast) game.toast(`💀 挑战失败：${res.reason}`);
      cp.failLevel(cp.activeLevel.id);
    }
  } catch (e) {}
}

// ============ 5. v1.5 内容合并 ============
function mergeV15Content(game) {
  // 科技
  try {
    if (typeof TECH_V15 !== 'undefined' && game.tech) {
      if (game.tech.addBatch) game.tech.addBatch(TECH_V15);
      else if (game.tech.items) game.tech.items.push(...TECH_V15);
    }
  } catch (e) {}
  // 成就
  try {
    if (typeof ACH_V15 !== 'undefined' && game.achievements) {
      if (game.achievements.addBatch) game.achievements.addBatch(ACH_V15);
      else if (game.achievements.items) game.achievements.items.push(...ACH_V15);
    }
  } catch (e) {}
  // 灾难（v1.5 新灾难并入 DisasterManager）
  try {
    if (typeof DISASTERS_V15 !== 'undefined' && game.disaster && game.disaster.addBatch) {
      game.disaster.addBatch(DISASTERS_V15);
    }
  } catch (e) {}
  // 奇观（并入深空/主游戏奇观列表）
  try {
    if (typeof WONDERS_V15 !== 'undefined') {
      if (!game.wonders) game.wonders = [];
      for (const w of WONDERS_V15) {
        if (!game.wonders.find(x => x.id === w.id)) game.wonders.push(w);
      }
    }
  } catch (e) {}
}

// ============ 6. 存档迁移 v14 → v15 ============
function migrateSaveToV15(save) {
  if (!save) return save;
  if (save.v15migrated) return save;
  // 背包补新资源槽
  if (save.inv) v15NewInventorySlots(save.inv);
  // 各系统存档位初始化
  if (!save.underground) save.underground = { unlocked: false };
  if (!save.ocean) save.ocean = { unlocked: false };
  if (!save.governors) save.governors = [];
  if (!save.campaign) save.campaign = { unlocked: 0, best: {} };
  save.v15migrated = true;
  return save;
}

// ============ 7. v1.5 主集成入口（game.js 每帧调用） ============
function v15Tick(game, dtMs, now) {
  // 地下城
  const ugOut = settleUnderground(game, dtMs);
  if (ugOut) {
    const inv = game.player.inv;
    if (ugOut.iron) inv.iron = Math.min(99999, inv.iron + ugOut.iron);
    if (ugOut.crystal) inv.crystal = Math.min(99999, (inv.crystal || 0) + ugOut.crystal);
    if (ugOut.food) inv.food = Math.min(99999, inv.food + ugOut.food);
    // 地热电力并入电力池（game.js 有 power 计算时叠加）
    if (ugOut.power && game._v15Power === undefined) game._v15Power = 0;
    if (ugOut.power) game._v15Power += ugOut.power;
    if (ugOut.popCap && game.pop) game.pop.bonusCap = (game.pop.bonusCap || 0) + ugOut.popCap;
  }
  // 海洋（补充）
  settleOcean(game, dtMs);
  // 战役
  checkCampaignProgress(game);
}

// ============ 8. v1.5 新手引导文本 ============
const V15_TUTORIAL = [
  { id: 'v15-1', title: '🕳️ 地下城', text: '人口达到 30 后可建造竖井，解锁地下 B1。地下有丰富的晶体矿和地热能，但要小心坍塌。' },
  { id: 'v15-2', title: '🌊 地下冰海', text: '钻探到 B2 后可能发现地下冰海。建造潜艇船坞，派遣潜艇自动运输水下资源。' },
  { id: 'v15-3', title: '🎖️ AI 总督', text: '科技达到 20 可雇佣总督。选择人格，指派分区，总督会自动建造和管理。注意忠诚度！' },
  { id: 'v15-4', title: '⚔️ 挑战战役', text: '20 个挑战关卡，从教学到地狱难度。完成获得评分，解锁更多关卡。' },
  { id: 'v15-5', title: '🔍 缩放操作', text: '双指缩放 / 滚轮缩放地图，单指拖拽平移。右上角有 +/- 按钮。点按自动吸附最近的资源/建筑（44px 容错）。' },
];

function v15TutorialHTML() {
  return V15_TUTORIAL.map(t => `
    <div class="v15-tut-card">
      <b>${t.title}</b>
      <p>${t.text}</p>
    </div>`).join('');
}

// ============ 9. v1.5 统计事件定义 ============
const V15_STATS = [
  'underground_unlock', 'underground_dig', 'underground_build',
  'ocean_unlock', 'ocean_build', 'sub_launch',
  'governor_hire', 'governor_rebel', 'governor_quest',
  'campaign_start', 'campaign_win', 'campaign_sgrade',
  'v15_building', 'crystal_mined', 'nano_crafted',
];

function trackV15(game, event, data) {
  try {
    if (game.stats && game.stats.track) game.stats.track(event, data);
    else if (game.stats && game.stats.record) game.stats.record('v15', { event, ...data });
  } catch (e) {}
}

// ============ 10. v1.5 平衡性常量 ============
const V15_BALANCE = {
  UNDERGROUND_UNLOCK_POP: 30,   // 地下城解锁人口
  UNDERGROUND_UNLOCK_COST: { iron: 100, steel: 20 },
  OCEAN_UNLOCK_TECH: 15,        // 海洋解锁科技
  OCEAN_UNLOCK_COST: { steel: 50, tech: 5 },
  GOVERNOR_BASE_COST: 20,       // 总督基础雇佣费（科技点）
  GOVERNOR_SALARY_MS: 60000,    // 发薪周期
  CAMERA_MAX_ZOOM: 4,           // 最大缩放
  TAP_TOLERANCE_PX: 44,         // 点按容错
};
