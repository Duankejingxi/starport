/* 星港 — v15_achievements.js：v1.5 成就判定逻辑
 * 为 ACH_V15 中的 50 个成就提供 check(state) 判定函数。
 * 每个成就：id 与 ACH_V15 对应，check 接收游戏状态快照，返回布尔值。
 */

// 状态快照由 game.js 传入：{pop, buildings, tech, inv, stats, underground, ocean, governor, campaign}
const ACH_V15_CHECKS = {
  // ---- 地下系 (10) ----
  'ach_ug1': s => s.underground && s.underground.unlocked,
  'ach_ug2': s => (s.stats.underground_dig || 0) >= 100,
  'ach_ug3': s => s.underground && s.underground.level >= 2,
  'ach_ug4': s => s.underground && s.underground.level >= 3,
  'ach_ug5': s => (s.inv.crystal || 0) >= 50,
  'ach_ug6': s => (s.stats.underground_build || 0) >= 8,
  'ach_ug7': s => (s.stats.explore_loot || 0) >= 10,
  'ach_ug8': s => s.underground && (s.underground.geothermal || 0) >= 100,
  'ach_ug9': s => (s.stats.underground_collapse || 0) === 0 && (s.stats.underground_dig || 0) >= 200,
  'ach_ug10': s => s.underground && s.underground.level >= 3 && (s.inv.crystal || 0) >= 100,
  // ---- 海洋系 (10) ----
  'ach_oc1': s => s.ocean && s.ocean.unlocked,
  'ach_oc2': s => (s.stats.ocean_build || 0) >= 6,
  'ach_oc3': s => (s.stats.sub_launch || 0) >= 1,
  'ach_oc4': s => (s.stats.sub_launch || 0) >= 4,
  'ach_oc5': s => (s.inv.pearl || 0) >= 30,
  'ach_oc6': s => (s.inv.algae || 0) >= 100,
  'ach_oc7': s => s.ocean && s.ocean.beastRepelled >= 3,
  'ach_oc8': s => s.ocean && s.ocean.melted,
  'ach_oc9': s => (s.stats.ocean_build || 0) >= 6 && (s.stats.sub_launch || 0) >= 2,
  'ach_oc10': s => (s.inv.pearl || 0) >= 100 && (s.inv.algae || 0) >= 200,
  // ---- 总督系 (8) ----
  'ach_gv1': s => (s.stats.governor_hire || 0) >= 1,
  'ach_gv2': s => (s.stats.governor_hire || 0) >= 3,
  'ach_gv3': s => (s.stats.governor_hire || 0) >= 6,
  'ach_gv4': s => s.governor && s.governor.maxLevel >= 5,
  'ach_gv5': s => s.governor && s.governor.maxLoyalty >= 95,
  'ach_gv6': s => (s.stats.governor_rebel || 0) >= 1,
  'ach_gv7': s => (s.stats.governor_rebel || 0) === 0 && (s.stats.governor_hire || 0) >= 3,
  'ach_gv8': s => s.governor && s.governor.allPersonalities,
  // ---- 战役系 (8) ----
  'ach_cp1': s => (s.stats.campaign_win || 0) >= 1,
  'ach_cp2': s => (s.stats.campaign_win || 0) >= 5,
  'ach_cp3': s => (s.stats.campaign_win || 0) >= 10,
  'ach_cp4': s => (s.stats.campaign_win || 0) >= 20,
  'ach_cp5': s => (s.stats.campaign_sgrade || 0) >= 1,
  'ach_cp6': s => (s.stats.campaign_sgrade || 0) >= 5,
  'ach_cp7': s => (s.stats.campaign_sgrade || 0) >= 10,
  'ach_cp8': s => s.campaign && s.campaign.hellClear,
  // ---- 建筑系 (6) ----
  'ach_b151': s => (s.stats.v15_building || 0) >= 5,
  'ach_b152': s => (s.stats.v15_building || 0) >= 15,
  'ach_b153': s => (s.inv.nano || 0) >= 20,
  'ach_b154': s => s.buildings && s.buildings.some(b => b.id === 'wormhole' && b.level >= 3),
  'ach_b155': s => s.buildings && s.buildings.some(b => b.id === 'shield_dome' && b.level >= 3),
  'ach_b156': s => (s.stats.v15_building || 0) >= 15 && s.buildings.filter(b => b.v15).every(b => b.level >= 2),
  // ---- 外交/军事 (4) ----
  'ach_di1': s => s.diplomacy && s.diplomacy.allied >= 2,
  'ach_di2': s => s.diplomacy && s.diplomacy.warsWon >= 1,
  'ach_mi1': s => s.military && s.military.raidsRepelled >= 10,
  'ach_mi2': s => s.military && s.military.nukeBuilt,
  // ---- 奇观 (4) ----
  'ach_wo1': s => s.wonders && s.wonders.some(w => w.built),
  'ach_wo2': s => s.wonders && s.wonders.filter(w => w.built).length >= 3,
  'ach_wo3': s => s.wonders && s.wonders.some(w => w.id === 'stargate' && w.built),
  'ach_wo4': s => s.wonders && s.wonders.filter(w => w.built).length >= 8,
};

// 批量检查（每 10 秒调用一次）
function checkV15Achievements(game) {
  if (!game.achievements || !game.achievements.unlock) return [];
  const unlocked = [];
  let state = null;
  try {
    state = {
      pop: game.pop ? game.pop.count : 0,
      buildings: game.builder ? game.builder.buildings : [],
      tech: game.player ? (game.player.inv.tech || 0) : 0,
      inv: game.player ? game.player.inv : {},
      stats: game.stats ? game.stats.data : {},
      underground: game.underground ? { unlocked: game.underground.unlocked, level: game.underground.level || 1 } : null,
      ocean: game.ocean ? { unlocked: game.ocean.unlocked, melted: game.ocean.melted } : null,
      governor: game.governor ? { maxLevel: Math.max(0, ...(game.governor.governors || []).map(g => g.level || 1)) } : null,
      campaign: game.campaign ? { hellClear: (game.campaign.best || {})['hell5'] === 'S' } : null,
      diplomacy: game.diplomacy ? { allied: game.diplomacy.alliedCount || 0, warsWon: game.diplomacy.warsWon || 0 } : null,
      military: game.military ? { raidsRepelled: game.military.repelled || 0, nukeBuilt: game.military.nukeBuilt } : null,
      wonders: game.wonders || [],
    };
  } catch (e) { return []; }
  for (const [id, fn] of Object.entries(ACH_V15_CHECKS)) {
    try {
      if (game.achievements.isUnlocked && game.achievements.isUnlocked(id)) continue;
      if (fn(state)) {
        game.achievements.unlock(id);
        unlocked.push(id);
      }
    } catch (e) { /* 单个成就失败不影响其他 */ }
  }
  return unlocked;
}

// v1.5 成就元数据（名称/图标/描述，与 ACH_V15 对应，供 UI 显示）
const ACH_V15_META = {
  ach_ug1: ['初探深渊', '🕳️', '解锁地下城'], ach_ug2: ['掘地百尺', '⛏️', '挖掘 100 格'],
  ach_ug3: ['深入中层', '🔽', '到达 B2'], ach_ug4: ['地心之旅', '🌋', '到达 B3'],
  ach_ug5: ['晶体收藏家', '💎', '拥有 50 晶体'], ach_ug6: ['地下建筑师', '🏗️', '建造 8 栋地下建筑'],
  ach_ug7: ['探险家', '🧭', '探险队带回 10 次'], ach_ug8: ['地热大亨', '⚡', '地热发电 100'],
  ach_ug9: ['零事故', '🛡️', '挖掘 200 格零坍塌'], ach_ug10: ['地心主宰', '👑', 'B3 + 100 晶体'],
  ach_oc1: ['发现冰海', '🌊', '解锁海洋'], ach_oc2: ['海底建设', '🏘️', '6 栋水下建筑'],
  ach_oc3: ['首航', '🚤', '第一艘潜艇'], ach_oc4: ['潜艇舰队', '🚢', '4 艘潜艇'],
  ach_oc5: ['采珠人', '🦪', '30 珍珠'], ach_oc6: ['藻类农场主', '🌿', '100 深海藻'],
  ach_oc7: ['巨兽猎人', '🦑', '驱离巨兽 3 次'], ach_oc8: ['冰盖融化', '🧊', '融化冰盖'],
  ach_oc9: ['海洋帝国', '🌐', '6 建筑+2 潜艇'], ach_oc10: ['深海富豪', '💰', '100 珍珠+200 藻'],
  ach_gv1: ['第一位总督', '🎖️', '雇佣总督'], ach_gv2: ['三驾马车', '🎖️', '3 位总督'],
  ach_gv3: ['六部尚书', '👑', '6 位总督'], ach_gv4: ['名臣', '⭐', '总督 5 级'],
  ach_gv5: ['忠心耿耿', '❤️', '忠诚 95+'], ach_gv6: ['叛乱', '💢', '经历叛变'],
  ach_gv7: ['御下有方', '🤝', '3 总督零叛变'], ach_gv8: ['集齐人格', '🎭', '5 种人格都雇过'],
  ach_cp1: ['初战告捷', '⚔️', '通关 1 关'], ach_cp2: ['五连胜', '🏆', '通关 5 关'],
  ach_cp3: ['十全十美', '💯', '通关 10 关'], ach_cp4: ['全通关', '👑', '通关 20 关'],
  ach_cp5: ['S 级', '🌟', '1 个 S 评分'], ach_cp6: ['五星上将', '🌟', '5 个 S'],
  ach_cp7: ['十星连珠', '✨', '10 个 S'], ach_cp8: ['地狱征服者', '😈', '地狱边境全 S'],
  ach_b151: ['新建筑师', '🏗️', '5 种 v15 建筑'], ach_b152: ['建筑大师', '🏛️', '15 种 v15 建筑'],
  ach_b153: ['纳米时代', '🔬', '20 纳米材料'], ach_b154: ['虫洞', '🌀', '虫洞稳定器 Lv3'],
  ach_b155: ['绝对防御', '🛡️', '护盾穹顶 Lv3'], ach_b156: ['精益求精', '💎', 'v15 建筑全 Lv2+'],
  ach_di1: ['纵横家', '🤝', '2 个盟友'], ach_di2: ['战胜国', '⚔️', '赢得战争'],
  ach_mi1: ['坚壁清野', '🏰', '击退 10 次袭击'], ach_mi2: ['核威慑', '☢️', '建造核弹井'],
  ach_wo1: ['奇观初现', '🌠', '建成 1 奇观'], ach_wo2: ['奇观三连', '🌠', '建成 3 奇观'],
  ach_wo3: ['星门', '🚪', '建成星门'], ach_wo4: ['奇观收藏家', '🏆', '建成 8 奇观'],
};
