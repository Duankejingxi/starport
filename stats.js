/* 星港 — stats.js：统计系统
 * 追踪游戏数据：采集/生产/建造/灾难/贸易等，用于成就和结算
 */

class StatsManager {
  constructor() {
    this.reset();
  }

  reset() {
    this.startTime = Date.now();
    this.harvestCount = 0;       // 手动采集次数
    this.harvestTotal = 0;       // 手动采集总量
    this.steelProduced = 0;      // 钢材生产总量
    this.techProduced = 0;       // 科技点生产总量
    this.buildingsBuilt = 0;     // 建造总数
    this.upgradesDone = 0;       // 升级总数
    this.trucksBuilt = 0;        // 运输车总数
    this.tradesDone = 0;         // 贸易次数
    this.sandstormsSurvived = 0; // 度过的沙尘暴
    this.meteorsHit = 0;         // 陨石命中次数
    this.meteorsRepaired = 0;    // 陨石修复次数
    this.repairsDone = 0;        // 维修总数
    this.techsUnlocked = 0;      // 科技解锁数
    this.maxPop = 2;             // 历史最高人口
    this.maxBuildings = 0;       // 历史最高建筑数
    this.demolishCount = 0;      // 拆除数
    this.speedTime = 0;          // 双倍速累计毫秒
  }

  // 记录事件
  record(event, data) {
    switch (event) {
      case 'harvest':
        this.harvestCount++;
        this.harvestTotal += (data && data.amount) || 2;
        break;
      case 'produce':
        if (data && data.steel) this.steelProduced += data.steel;
        if (data && data.tech) this.techProduced += data.tech;
        break;
      case 'build':
        this.buildingsBuilt++;
        break;
      case 'upgrade':
        this.upgradesDone++;
        break;
      case 'truck':
        this.trucksBuilt++;
        break;
      case 'trade':
        this.tradesDone++;
        break;
      case 'sandstorm-end':
        this.sandstormsSurvived++;
        break;
      case 'meteor-hit':
        this.meteorsHit++;
        break;
      case 'repair':
        this.repairsDone++;
        if (data && data.wasMeteor) this.meteorsRepaired++;
        break;
      case 'tech':
        this.techsUnlocked++;
        break;
      case 'demolish':
        this.demolishCount++;
        break;
    }
  }

  // 更新最高纪录
  updateMax(pop, buildings) {
    if (pop > this.maxPop) this.maxPop = pop;
    if (buildings > this.maxBuildings) this.maxBuildings = buildings;
  }

  // 游戏时长（分钟）
  playMinutes() {
    return Math.floor((Date.now() - this.startTime) / 60000);
  }

  // 存档 / 读档
  serialize() {
    return {
      startTime: this.startTime,
      harvestCount: this.harvestCount,
      harvestTotal: this.harvestTotal,
      steelProduced: this.steelProduced,
      techProduced: this.techProduced,
      buildingsBuilt: this.buildingsBuilt,
      upgradesDone: this.upgradesDone,
      trucksBuilt: this.trucksBuilt,
      tradesDone: this.tradesDone,
      sandstormsSurvived: this.sandstormsSurvived,
      meteorsHit: this.meteorsHit,
      meteorsRepaired: this.meteorsRepaired,
      repairsDone: this.repairsDone,
      techsUnlocked: this.techsUnlocked,
      maxPop: this.maxPop,
      maxBuildings: this.maxBuildings,
      demolishCount: this.demolishCount,
      speedTime: this.speedTime,
    };
  }

  deserialize(d) {
    if (!d) return;
    for (const k of Object.keys(this.serialize())) {
      if (d[k] !== undefined) this[k] = d[k];
    }
  }

  // 统计面板 HTML
  renderHTML() {
    const rows = [
      ['⏱️ 游戏时长', `${this.playMinutes()} 分钟`],
      ['⛏️ 手动采集', `${this.harvestCount} 次 / ${this.harvestTotal} 单位`],
      ['🏗️ 建造', `${this.buildingsBuilt} 座`],
      ['⬆️ 升级', `${this.upgradesDone} 次`],
      ['🔩 钢材生产', `${Math.floor(this.steelProduced)}`],
      ['🔬 科技生产', `${Math.floor(this.techProduced)}`],
      ['🚚 运输车', `${this.trucksBuilt} 辆`],
      ['🤝 贸易', `${this.tradesDone} 次`],
      ['⛈️ 沙尘暴', `${this.sandstormsSurvived} 次`],
      ['☄️ 陨石命中', `${this.meteorsHit} 次`],
      ['🔧 维修', `${this.repairsDone} 次`],
      ['📖 科技解锁', `${this.techsUnlocked} 项`],
      ['👥 最高人口', `${this.maxPop}`],
      ['🏙️ 最高建筑', `${this.maxBuildings} 座`],
      ['💥 拆除', `${this.demolishCount} 座`],
      ['⏩ 双倍速', `${Math.floor(this.speedTime / 60000)} 分钟`],
    ];
    return rows.map(([k, v]) =>
      `<div class="stat-row"><span>${k}</span><b>${v}</b></div>`
    ).join('');
  }
}

if (typeof module !== 'undefined') { module.exports = { StatsManager }; }
