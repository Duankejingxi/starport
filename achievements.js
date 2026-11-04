/* 星港 — achievements.js：成就系统（67 项）
 * 条件成就，达成时 toast + 音效，localStorage 持久化
 */

const ACHIEVEMENTS_KEY = 'starport-achievements';

// 成就定义：{id, name, icon, desc, check(game) -> bool}
const ACHIEVEMENT_DEFS = [
  // ---- 起步 ----
  { id: 'first-step', name: '第一步', icon: '👣', desc: '移动宇航员',
    check: (g) => g._tutorialMoved === true },
  { id: 'first-harvest', name: '自力更生', icon: '⛏️', desc: '手动采集 10 次',
    check: (g) => (g.stats.harvestCount || 0) >= 10 },
  { id: 'first-build', name: '奠基', icon: '🏠', desc: '建造第一座建筑',
    check: (g) => g.builder.buildings.length >= 1 },
  { id: 'pop-5', name: '人丁兴旺', icon: '👥', desc: '人口达到 5',
    check: (g) => g.pop.count >= 5 },
  { id: 'pop-10', name: '小有规模', icon: '🏘️', desc: '人口达到 10',
    check: (g) => g.pop.count >= 10 },

  // ---- 发展 ----
  { id: 'sector-2', name: '开疆拓土', icon: '🗺️', desc: '解锁第 2 个扇区',
    check: (g) => g.map.unlockedCount() >= 2 },
  { id: 'sector-5', name: '版图扩张', icon: '🌍', desc: '解锁 5 个扇区',
    check: (g) => g.map.unlockedCount() >= 5 },
  { id: 'sector-9', name: '一统火星', icon: '🌟', desc: '解锁全部 9 个扇区',
    check: (g) => g.map.unlockedCount() >= 9 },
  { id: 'build-10', name: '建筑师', icon: '🏗️', desc: '拥有 10 座建筑',
    check: (g) => g.builder.buildings.length >= 10 },
  { id: 'build-25', name: '大兴土木', icon: '🏙️', desc: '拥有 25 座建筑',
    check: (g) => g.builder.buildings.length >= 25 },
  { id: 'upgrade-1', name: '升级！', icon: '⬆️', desc: '升级一座建筑',
    check: (g) => g.builder.buildings.some(b => b.level >= 2) },
  { id: 'max-level', name: '登峰造极', icon: '💯', desc: '一座建筑升到 Lv3',
    check: (g) => g.builder.buildings.some(b => b.level >= 3) },

  // ---- 资源 ----
  { id: 'iron-100', name: '铁腕', icon: '🟤', desc: '铁矿存量达到 100',
    check: (g) => (g.player.inv.iron || 0) >= 100 },
  { id: 'steel-1', name: '钢铁时代', icon: '🔩', desc: '生产出第一块钢材',
    check: (g) => (g.stats.steelProduced || 0) >= 1 },
  { id: 'tech-1', name: '科学萌芽', icon: '🔬', desc: '获得第一个科技点',
    check: (g) => (g.stats.techProduced || 0) >= 1 },
  { id: 'power-50', name: '电力充沛', icon: '⚡', desc: '电力供应达到 50',
    check: (g) => g.builder.totalPower() >= 50 },

  // ---- 科技 ----
  { id: 'tech-1-unlock', name: '求知者', icon: '📖', desc: '解锁第一项科技',
    check: (g) => g.tech.totalUnlocked() >= 1 },
  { id: 'tech-10', name: '博学者', icon: '🎓', desc: '解锁 10 项科技',
    check: (g) => g.tech.totalUnlocked() >= 10 },
  { id: 'tech-30', name: '全知全能', icon: '🧠', desc: '解锁全部 30 项科技',
    check: (g) => g.tech.totalUnlocked() >= 30 },

  // ---- 物流 ----
  { id: 'truck-1', name: '车队初建', icon: '🚚', desc: '拥有第一辆运输车',
    check: (g) => g.logistics.trucks.length >= 1 },
  { id: 'truck-5', name: '物流大亨', icon: '🛰️', desc: '拥有 5 辆运输车',
    check: (g) => g.logistics.trucks.length >= 5 },
  { id: 'warehouse-1', name: '仓储', icon: '📦', desc: '建造第一座仓库',
    check: (g) => g.builder.count('warehouse') >= 1 },

  // ---- 灾难 ----
  { id: 'survive-storm', name: '处变不惊', icon: '⛈️', desc: '度过第一次沙尘暴',
    check: (g) => (g.stats.sandstormsSurvived || 0) >= 1 },
  { id: 'survive-meteor', name: '大难不死', icon: '☄️', desc: '建筑被陨石击中后修复',
    check: (g) => (g.stats.meteorsRepaired || 0) >= 1 },
  { id: 'nuclear-1', name: '原子时代', icon: '☢️', desc: '建造核电站',
    check: (g) => g.builder.count('nuclear') >= 1 },

  // ---- 城市 ----
  { id: 'rank-town', name: '城镇', icon: '🏘️', desc: '达到城镇评级',
    check: (g) => g.pop.count >= 10 },
  { id: 'rank-city', name: '都市', icon: '🌆', desc: '达到都市评级',
    check: (g) => g.pop.count >= 30 },
  { id: 'rank-metro', name: '大都会', icon: '🏙️', desc: '达到大都会评级',
    check: (g) => g.pop.count >= 60 },
  { id: 'rank-starport', name: '星港', icon: '🌟', desc: '达到星港评级',
    check: (g) => g.pop.count >= 100 },

  // ---- 终极 ----
  { id: 'trade-1', name: '星际商人', icon: '🤝', desc: '完成第一次贸易',
    check: (g) => (g.stats.tradesDone || 0) >= 1 },
  { id: 'launchpad', name: '星辰大海', icon: '🚀', desc: '建成发射台通关',
    check: (g) => g.city.won },

  // ---- 隐藏 ----
  { id: 'speed-demon', name: '时间领主', icon: '⏩', desc: '使用双倍速累计 10 分钟',
    check: (g) => (g.stats.speedTime || 0) >= 600000 },
  { id: 'demolisher', name: '拆迁大队', icon: '💥', desc: '拆除 5 座建筑',
    check: (g) => (g.stats.demolishCount || 0) >= 5 },
  { id: 'helper', name: '好学', icon: '❓', desc: '打开帮助手册',
    check: (g) => g._helpOpened === true },
  { id: 'storm-3', name: '久经考验', icon: '🌪️', desc: '度过 3 次沙尘暴',
    check: (g) => (g.stats.sandstormsSurvived || 0) >= 3 },
  { id: 'pop-50', name: '人山人海', icon: '👨‍👩‍👧‍👦', desc: '人口达到 50',
    check: (g) => g.pop.count >= 50 },
  { id: 'power-100', name: '电网', icon: '🔌', desc: '电力供应达到 100',
    check: (g) => g.builder.totalPower() >= 100 },
  { id: 'tech-20', name: '科学家', icon: '⚗️', desc: '解锁 20 项科技',
    check: (g) => g.tech.totalUnlocked() >= 20 },
  { id: 'truck-10', name: '车水马龙', icon: '🚛', desc: '拥有 10 辆运输车',
    check: (g) => g.logistics.trucks.length >= 10 },
  { id: 'rich', name: '富可敌国', icon: '💰', desc: '同时拥有铁/钢各 200',
    check: (g) => (g.player.inv.iron || 0) >= 200 && (g.player.inv.steel || 0) >= 200 },

  // ============ v1.2：新纪元成就（30 项） ============
  // ---- 大地图 ----
  { id: 'sector-16', name: '火星之王', icon: '👑', desc: '解锁全部 16 个扇区',
    check: (g) => g.map.unlockedCount() >= 16 },
  { id: 'visit-polar', name: '极地探险', icon: '❄️', desc: '踏上极地',
    check: (g) => g._visitedPolar === true },
  { id: 'visit-volcano', name: '火山口', icon: '🌋', desc: '接近火山',
    check: (g) => g._visitedVolcano === true },
  { id: 'cross-canyon', name: '飞跃峡谷', icon: '🏔️', desc: '拥有横跨峡谷两侧的建筑',
    check: (g) => g._crossCanyon === true },

  // ---- 新资源 ----
  { id: 'uranium-1', name: '核时代', icon: '☢️', desc: '获得第一块铀矿',
    check: (g) => (g.player.inv.uranium || 0) >= 1 || (g.stats.uraniumMined || 0) >= 1 },
  { id: 'uranium-50', name: '铀矿大亨', icon: '☢️', desc: '铀矿存量 50',
    check: (g) => (g.player.inv.uranium || 0) >= 50 },
  { id: 'he3-1', name: '月壤之光', icon: '🌌', desc: '获得第一份氦3',
    check: (g) => (g.player.inv.he3 || 0) >= 1 || (g.stats.he3Mined || 0) >= 1 },
  { id: 'he3-10', name: '聚变燃料', icon: '🌌', desc: '氦3存量 10',
    check: (g) => (g.player.inv.he3 || 0) >= 10 },

  // ---- 新建筑 ----
  { id: 'build-fusion', name: '人造太阳', icon: '☀️', desc: '建造聚变电站',
    check: (g) => g.builder.count('fusion') >= 1 },
  { id: 'build-spaceport', name: '星门', icon: '🛸', desc: '建造太空港',
    check: (g) => g.builder.count('spaceport') >= 1 },
  { id: 'build-elevator', name: '通天塔', icon: '🗼', desc: '建造轨道电梯',
    check: (g) => g.builder.count('elevator') >= 1 },
  { id: 'build-shield', name: '能量护盾', icon: '🛡️', desc: '建造护盾发生器',
    check: (g) => g.builder.count('shield') >= 1 },
  { id: 'build-clone', name: '复制人', icon: '🧬', desc: '建造克隆中心',
    check: (g) => g.builder.count('clone') >= 1 },
  { id: 'build-ark', name: '诺亚方舟', icon: '🛳️', desc: '建造方舟',
    check: (g) => g.builder.count('ark') >= 1 },
  { id: 'build-40', name: '超级都市', icon: '🌆', desc: '拥有 40 座建筑',
    check: (g) => g.builder.buildings.length >= 40 },

  // ---- 科技 ----
  { id: 'tech-orbital', name: '太空时代', icon: '🛰️', desc: '解锁第一个轨道科技',
    check: (g) => { const c = g.tech.countByBranch(); return (c.orbital || 0) >= 1; } },
  { id: 'tech-40', name: '博学', icon: '🎓', desc: '解锁 40 项科技',
    check: (g) => g.tech.totalUnlocked() >= 40 },
  { id: 'tech-60', name: '全知', icon: '🧠', desc: '解锁全部 60 项科技',
    check: (g) => g.tech.totalUnlocked() >= 60 },

  // ---- 灾难 ----
  { id: 'survive-flare2', name: '硬抗耀斑', icon: '☀️', desc: '在太阳耀斑中存活',
    check: (g) => (g.stats.flare2Survived || 0) >= 1 },
  { id: 'survive-volcano', name: '火山幸存者', icon: '🌋', desc: '在火山喷发中存活',
    check: (g) => (g.stats.volcanoSurvived || 0) >= 1 },
  { id: 'survive-revolt', name: '平息叛乱', icon: '⚠️', desc: '平息一次叛乱',
    check: (g) => (g.stats.revoltSurvived || 0) >= 1 },
  { id: 'shield-save', name: '护盾立功', icon: '🛡️', desc: '护盾挡住一次陨石',
    check: (g) => (g.stats.shieldSaves || 0) >= 1 },

  // ---- 贸易 ----
  { id: 'ship-1', name: '第一桶金', icon: '🛸', desc: '迎接第一艘贸易船',
    check: (g) => (g.tradeShip && g.tradeShip.visitCount >= 1) },
  { id: 'ship-5', name: '贸易枢纽', icon: '🏪', desc: '迎接 5 艘贸易船',
    check: (g) => (g.tradeShip && g.tradeShip.visitCount >= 5) },
  { id: 'trade-dyn', name: '精明商人', icon: '💹', desc: '完成一次动态价格交易',
    check: (g) => (g.stats.dynTrades || 0) >= 1 },

  // ---- 胜利 ----
  { id: 'win-ark', name: '星辰大海', icon: '🛳️', desc: '方舟胜利：人类成为多行星物种',
    check: (g) => g.city.arkWon === true },
  { id: 'pop-200', name: '人山人海', icon: '👥', desc: '人口达到 200',
    check: (g) => g.pop.count >= 200 },
];

class AchievementManager {
  constructor(game) {
    this.game = game;
    this.unlocked = new Set();
    this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(ACHIEVEMENTS_KEY);
      if (raw) this.unlocked = new Set(JSON.parse(raw));
    } catch (e) {}
  }

  save() {
    try {
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(Array.from(this.unlocked)));
    } catch (e) {}
  }

  // 每帧检查（节流：每 2 秒一次）
  update(now) {
    if (this._lastCheck && now - this._lastCheck < 2000) return;
    this._lastCheck = now;
    for (const def of ACHIEVEMENT_DEFS) {
      if (this.unlocked.has(def.id)) continue;
      try {
        if (def.check(this.game)) {
          this.unlock(def);
        }
      } catch (e) { /* 条件检查异常不打断 */ }
    }
  }

  unlock(def) {
    this.unlocked.add(def.id);
    this.save();
    this.game.toast(`🏆 成就解锁：${def.icon} ${def.name} — ${def.desc}`);
    if (this.game.sound) this.game.sound.achieve();
    // 更新成就面板（如果开着）
    if (this.game.renderAchievements) this.game.renderAchievements();
  }

  count() {
    return this.unlocked.size;
  }

  total() {
    return ACHIEVEMENT_DEFS.length;
  }
}

if (typeof module !== 'undefined') {
  module.exports = { AchievementManager, ACHIEVEMENT_DEFS, ACHIEVEMENTS_KEY };
}
