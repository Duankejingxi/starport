/* 星港 — scenarios.js：v1.2 挑战剧本
 * 5 个预设挑战，每个有特殊规则/胜利条件/评分。
 * 纯机制，无剧情。
 */

const SCENARIOS = [
  {
    id: 'standard',
    name: '标准开局',
    icon: '🌟',
    desc: '经典模式：从零开始，建成发射台或方舟。',
    rules: {},
    goal: '建成发射台或方舟',
    difficulty: 1,
  },
  {
    id: 'meteor-storm',
    name: '陨石雨季',
    icon: '☄️',
    desc: '陨石频率×3，护盾和维修是关键。坚持 30 分钟。',
    rules: {
      meteorIntervalMul: 0.33,  // 间隔×0.33 = 3倍频率
      surviveTime: 30 * 60 * 1000,
    },
    goal: '存活 30 分钟',
    difficulty: 3,
  },
  {
    id: 'resource-poor',
    name: '贫瘠之地',
    icon: '🏜️',
    desc: '资源点减半，贸易价格+50%。考验规划能力。',
    rules: {
      resourceMul: 0.5,
      tradePriceMul: 1.5,
    },
    goal: '建成发射台',
    difficulty: 4,
  },
  {
    id: 'speedrun',
    name: '极速通关',
    icon: '⚡',
    desc: '15 分钟内建成发射台。资源×2，灾难关闭。',
    rules: {
      resourceMul: 2.0,
      noDisasters: true,
      timeLimit: 15 * 60 * 1000,
    },
    goal: '15分钟内建成发射台',
    difficulty: 2,
  },
  {
    id: 'utopia',
    name: '乌托邦',
    icon: '🌈',
    desc: '无灾难，资源×1.5。目标：人口 300，打造完美城市。',
    rules: {
      resourceMul: 1.5,
      noDisasters: true,
      popGoal: 300,
    },
    goal: '人口达到 300',
    difficulty: 1,
  },
  {
    id: 'ark-rush',
    name: '方舟竞速',
    icon: '🛳️',
    desc: '直奔方舟胜利。科技×2，但陨石×2。',
    rules: {
      techMul: 2.0,
      meteorIntervalMul: 0.5,
    },
    goal: '建成方舟（人口200+科技100）',
    difficulty: 5,
  },
];

class ScenarioManager {
  constructor() {
    this.current = SCENARIOS[0];  // 默认标准
    this.startTime = Date.now();
    this.completed = false;
    this.failed = false;
  }

  setScenario(id) {
    const sc = SCENARIOS.find(s => s.id === id);
    if (sc) {
      this.current = sc;
      this.startTime = Date.now();
      this.completed = false;
      this.failed = false;
    }
    return sc;
  }

  get rules() {
    return this.current.rules || {};
  }

  // 检查胜利/失败
  check(game) {
    if (this.completed || this.failed) return null;
    const now = Date.now();
    const r = this.rules;

    // 限时挑战
    if (r.timeLimit && now - this.startTime > r.timeLimit) {
      this.failed = true;
      return { result: 'fail', reason: '时间到！' };
    }
    // 存活挑战
    if (r.surviveTime && now - this.startTime >= r.surviveTime) {
      this.completed = true;
      return { result: 'win', reason: `存活了 ${r.surviveTime / 60000} 分钟！` };
    }
    // 人口目标
    if (r.popGoal && game.pop.count >= r.popGoal) {
      this.completed = true;
      return { result: 'win', reason: `人口达到 ${r.popGoal}！` };
    }
    return null;
  }

  // 剩余时间（限时/存活挑战）
  timeLeft() {
    const r = this.rules;
    const limit = r.timeLimit || r.surviveTime;
    if (!limit) return null;
    const left = limit - (Date.now() - this.startTime);
    return Math.max(0, Math.ceil(left / 1000));
  }

  // 评分（1-5星，按难度和用时）
  score() {
    if (!this.completed) return 0;
    const elapsed = Date.now() - this.startTime;
    const base = this.current.difficulty;
    // 越快分越高
    const timeBonus = Math.max(0, 2 - elapsed / (30 * 60 * 1000));
    return Math.min(5, Math.round(base * 0.6 + timeBonus));
  }

  serialize() {
    return {
      scenarioId: this.current.id,
      startTime: this.startTime,
      completed: this.completed,
      failed: this.failed,
    };
  }

  deserialize(data) {
    if (!data) return;
    this.setScenario(data.scenarioId || 'standard');
    this.startTime = data.startTime || Date.now();
    this.completed = !!data.completed;
    this.failed = !!data.failed;
  }
}

// 剧本选择 UI 数据（game.js 用）
function scenarioList() {
  return SCENARIOS.map(s => ({
    id: s.id,
    name: `${s.icon} ${s.name}`,
    desc: s.desc,
    goal: `目标：${s.goal}`,
    difficulty: '★'.repeat(s.difficulty) + '☆'.repeat(5 - s.difficulty),
  }));
}

if (typeof module !== 'undefined') {
  module.exports = { SCENARIOS, ScenarioManager, scenarioList };
}
