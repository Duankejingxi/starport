/* 星港 — v18_endgame.js：终局内容
 * 第六/七胜利、终极挑战、结局统计。
 */

// ============ 第六胜利：戴森球 ============
const DYSON_VICTORY = {
  id: 'dyson',
  name: '恒星主宰',
  icon: '☀️',
  desc: '建成戴森球，掌控整个恒星的能量输出',
  requirement: { building: 'dyson_sphere', level: 1 },
  reward: '解锁无尽模式+50% 全产量',
};

function checkDysonVictory(game) {
  try {
    if (game.builder && game.builder.hasBuilding) {
      return game.builder.hasBuilding('dyson_sphere');
    }
  } catch (e) {}
  return false;
}

// ============ 第七胜利：虫洞远征 ============
const WORMHOLE_VICTORY = {
  id: 'wormhole',
  name: '星门主宰',
  icon: '🌀',
  desc: '虫洞稳定器 Lv3，开启星际远征',
  requirement: { building: 'wormhole_stabilizer', level: 3 },
  reward: '解锁远征模式',
};

function checkWormholeVictory(game) {
  try {
    if (game.builder && game.builder.getBuilding) {
      const b = game.builder.getBuilding('wormhole_stabilizer');
      return b && b.level >= 3;
    }
  } catch (e) {}
  return false;
}

// ============ 终极挑战：七大胜利全收集 ============
const ULTIMATE_CHALLENGE = {
  id: 'ultimate',
  name: '七冠王',
  icon: '👑',
  desc: '达成全部七种胜利条件',
  victories: ['launch', 'ark', 'stargate', 'time_machine', 'dyson', 'wormhole', 'new_human'],
};

function checkUltimateVictory(game) {
  try {
    const wins = [];
    if (game.wins) {
      for (const v of ULTIMATE_CHALLENGE.victories) {
        if (game.wins.includes(v)) wins.push(v);
      }
    }
    // 检查当前可达成的
    if (checkDysonVictory(game) && !wins.includes('dyson')) wins.push('dyson');
    if (checkWormholeVictory(game) && !wins.includes('wormhole')) wins.push('wormhole');
    return { count: wins.length, total: 7, wins, complete: wins.length >= 7 };
  } catch (e) {
    return { count: 0, total: 7, wins: [], complete: false };
  }
}

// ============ 结局统计 ============
class EndingStats {
  constructor() {
    this.victories = [];
    this.playTimeMs = 0;
    this.maxPop = 0;
    this.maxBuildings = 0;
    this.totalTechs = 0;
  }

  recordVictory(id) {
    if (!this.victories.includes(id)) {
      this.victories.push(id);
      return true;  // 新胜利
    }
    return false;
  }

  update(game, dtMs) {
    this.playTimeMs += dtMs;
    if (game.pop && game.pop.count > this.maxPop) this.maxPop = game.pop.count;
    if (game.builder && game.builder.buildings.length > this.maxBuildings) {
      this.maxBuildings = game.builder.buildings.length;
    }
  }

  summary() {
    const hours = Math.floor(this.playTimeMs / 3600000);
    const mins = Math.floor((this.playTimeMs % 3600000) / 60000);
    return {
      victories: this.victories.length,
      playTime: `${hours}小时${mins}分`,
      maxPop: this.maxPop,
      maxBuildings: this.maxBuildings,
    };
  }

  serialize() {
    return {
      victories: this.victories,
      playTimeMs: this.playTimeMs,
      maxPop: this.maxPop,
      maxBuildings: this.maxBuildings,
    };
  }

  deserialize(d) {
    if (!d) return;
    this.victories = d.victories || [];
    this.playTimeMs = d.playTimeMs || 0;
    this.maxPop = d.maxPop || 0;
    this.maxBuildings = d.maxBuildings || 0;
  }
}

// ============ 新游戏+ ============
const NG_PLUS = {
  // 通关后继承
  inherit: ['techs', 'achievements', 'wonders'],
  // 新游戏+加成
  bonuses: [
    { victories: 1, bonus: '开局资源+50%' },
    { victories: 3, bonus: '开局科技+10' },
    { victories: 5, bonus: '开局人口+20' },
    { victories: 7, bonus: '全产量+25%' },
  ],
};

function ngPlusBonus(victoryCount) {
  const bonuses = [];
  for (const b of NG_PLUS.bonuses) {
    if (victoryCount >= b.victories) bonuses.push(b.bonus);
  }
  return bonuses;
}

// ============ 终局 UI ============
function renderVictoryPanel(victories) {
  const all = [
    { id: 'launch', name: '发射台', icon: '🚀', desc: '第一胜利：建成发射台' },
    { id: 'ark', name: '方舟', icon: '🛳️', desc: '第二胜利：方舟计划' },
    { id: 'stargate', name: '星门', icon: '🚪', desc: '第三胜利：星门网络' },
    { id: 'time_machine', name: '时间机器', icon: '⏳', desc: '第四胜利：掌控时间' },
    { id: 'dyson', name: '戴森球', icon: '☀️', desc: '第五胜利：恒星主宰' },
    { id: 'wormhole', name: '虫洞', icon: '🌀', desc: '第六胜利：星门主宰' },
    { id: 'new_human', name: '新人类', icon: '🌟', desc: '第七胜利：进化完成' },
  ];
  let html = '<div class="victory-grid">';
  for (const v of all) {
    const done = victories.includes(v.id);
    html += `
      <div class="victory-card ${done ? 'done' : ''}">
        <span class="victory-icon">${v.icon}</span>
        <b>${v.name}</b>
        <small>${v.desc}</small>
        ${done ? '<span class="victory-badge">✅</span>' : '<span class="victory-badge">🔒</span>'}
      </div>`;
  }
  html += '</div>';
  const ult = ULTIMATE_CHALLENGE;
  html += `<p class="victory-ultimate">${ult.icon} ${ult.name}：${victories.length}/7</p>`;
  return html;
}
