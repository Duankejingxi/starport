/* 星港 — hall_of_fame.js：名人堂/制作名单
 * 记录版本历史、贡献者、数据统计。
 */

// ============ 版本历史 ============
const VERSION_HISTORY = [
  { v: '1.0.0', name: '启程', lines: 1619, desc: '基础框架：资源/建筑/人口/发射台胜利' },
  { v: '1.1.0', name: '扩张', lines: 5001, desc: '科技树/灾难/成就/更多建筑' },
  { v: '1.2.0', name: '繁荣', lines: 6582, desc: '贸易/外交/事件系统' },
  { v: '1.3.0', name: '深渊', lines: 11000, desc: '奇观/多胜利/高级科技' },
  { v: '1.4.0', name: '星海远征', lines: 15000, desc: '远征系统/深空探索' },
  { v: '1.5.0', name: '深渊与深海', lines: 25000, desc: '地下城/海洋/总督/战役/镜头缩放' },
  { v: '1.6.0', name: '天空与机械', lines: 35000, desc: '天空城/机器人革命/20新建筑' },
  { v: '1.7.0', name: '量子与生命', lines: 43000, desc: '量子系统/生物系统/60科技' },
  { v: '1.8.0', name: '星海无垠', lines: 50000, desc: '25终极建筑/七大胜利/终局' },
];

// ============ 游戏数据统计 ============
const GAME_STATS = {
  buildings: 90,      // v1.8 总建筑数
  techs: 310,         // 总科技数
  achievements: 337,  // 总成就数
  disasters: 25,      // 总灾难数
  wonders: 15,        // 总奇观数
  victories: 7,       // 胜利条件
  campaigns: 20,      // 战役关卡
  governor_personalities: 5,
  sky_layers: 3,
  underground_floors: 3,
  robot_models: 4,
  policies: 30,
};

// ============ 制作名单 ============
const CREDITS = [
  { role: '总工程师', name: 'Brio (Muse Spark)' },
  { role: '创意/测试', name: 'Duan' },
  { role: '灵感', name: '火星殖民梦想' },
];

// ============ 名人堂渲染 ============
function renderHallOfFame(stats) {
  let html = '<div class="hall-of-fame">';
  html += '<h2>🏆 名人堂</h2>';

  // 版本历史
  html += '<section class="hof-versions"><h3>📜 版本历史</h3><ul>';
  for (const v of VERSION_HISTORY) {
    html += `<li><b>v${v.v}「${v.name}」</b>（${v.lines}行）<br><small>${v.desc}</small></li>`;
  }
  html += '</ul></section>';

  // 游戏数据
  html += '<section class="hof-stats"><h3>📊 游戏数据</h3><div class="stat-grid">';
  const labels = {
    buildings: '建筑', techs: '科技', achievements: '成就',
    disasters: '灾难', wonders: '奇观', victories: '胜利',
    campaigns: '战役关卡', governor_personalities: '总督人格',
  };
  for (const [k, label] of Object.entries(labels)) {
    html += `<div class="stat-item"><span class="stat-num">${GAME_STATS[k]}</span><span class="stat-label">${label}</span></div>`;
  }
  html += '</div></section>';

  // 玩家统计
  if (stats) {
    const s = stats.summary ? stats.summary() : stats;
    html += '<section class="hof-player"><h3>🎮 你的战绩</h3><div class="stat-grid">';
    html += `<div class="stat-item"><span class="stat-num">${s.victories || 0}</span><span class="stat-label">胜利</span></div>`;
    html += `<div class="stat-item"><span class="stat-num">${s.maxPop || 0}</span><span class="stat-label">最高人口</span></div>`;
    html += `<div class="stat-item"><span class="stat-num">${s.maxBuildings || 0}</span><span class="stat-label">最多建筑</span></div>`;
    html += `<div class="stat-item"><span class="stat-num">${s.playTime || '-'}</span><span class="stat-label">游玩时间</span></div>`;
    html += '</div></section>';
  }

  // 制作名单
  html += '<section class="hof-credits"><h3>👥 制作</h3><ul>';
  for (const c of CREDITS) {
    html += `<li><b>${c.role}</b>：${c.name}</li>`;
  }
  html += '</ul></section>';

  html += '</div>';
  return html;
}

// ============ 成就统计 ============
function achievementProgress(achievements) {
  try {
    if (!achievements || !achievements.list) return { unlocked: 0, total: GAME_STATS.achievements };
    const unlocked = achievements.list.filter(a => a.unlocked).length;
    return { unlocked, total: GAME_STATS.achievements, pct: Math.round(unlocked / GAME_STATS.achievements * 100) };
  } catch (e) {
    return { unlocked: 0, total: GAME_STATS.achievements, pct: 0 };
  }
}

// ============ 科技统计 ============
function techProgress(tech) {
  try {
    if (!tech || !tech.researched) return { done: 0, total: GAME_STATS.techs };
    const done = Array.isArray(tech.researched) ? tech.researched.length : Object.keys(tech.researched).length;
    return { done, total: GAME_STATS.techs, pct: Math.round(done / GAME_STATS.techs * 100) };
  } catch (e) {
    return { done: 0, total: GAME_STATS.techs, pct: 0 };
  }
}

// ============ 建筑图鉴进度 ============
function buildingProgress(builder) {
  try {
    if (!builder || !builder.buildings) return { built: 0, total: GAME_STATS.buildings };
    const unique = new Set(builder.buildings.map(b => b.type));
    return { built: unique.size, total: GAME_STATS.buildings, pct: Math.round(unique.size / GAME_STATS.buildings * 100) };
  } catch (e) {
    return { built: 0, total: GAME_STATS.buildings, pct: 0 };
  }
}

// ============ 完成度总览 ============
function completionOverview(game) {
  const ach = achievementProgress(game.achievements);
  const tech = techProgress(game.tech);
  const bld = buildingProgress(game.builder);
  const overall = Math.round((ach.pct + tech.pct + bld.pct) / 3);
  return {
    achievements: ach,
    techs: tech,
    buildings: bld,
    overall,
    rank: completionRank(overall),
  };
}

function completionRank(pct) {
  if (pct >= 90) return { name: '星海传奇', icon: '🌟' };
  if (pct >= 70) return { name: '殖民大师', icon: '🏆' };
  if (pct >= 50) return { name: '开拓者', icon: '🚀' };
  if (pct >= 30) return { name: '建设者', icon: '🏗️' };
  if (pct >= 10) return { name: '新移民', icon: '🌱' };
  return { name: '访客', icon: '👋' };
}
