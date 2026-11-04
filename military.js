/* 星港 — military.js：军事系统（防御塔 / 袭击 / 城墙）
 * 5 种防御塔 + 城墙 + 碉堡；袭击调度 / 自动战斗 / 雷达预警；军事面板 UI。
 * 加载顺序：build.js 之后、game.js 之前；依赖全局 BUILDINGS。
 * 全局类 MilitaryManager 挂 window，game.js 里：new MilitaryManager() → bindUI(game) → 每帧 update(now, dt, game)。
 */

// ================= 袭击调度参数 =================
const RAID_SCHED = {
  FIRST_AT: 6 * 60 * 1000,       // ⏳ 首次袭击：开局 6 分钟后
  INTERVAL_MIN: 6 * 60 * 1000,   // 🔁 袭击间隔 6~10 分钟（城市越大越短）
  INTERVAL_MAX: 10 * 60 * 1000,
  WARN_MS: 20 * 1000,            // 🚨 基础预警 20 秒（有雷达站则翻倍）
  GROWTH_PER_MIN: 0.06,          // 📈 袭击强度随时间成长（每分钟 +6%）
  BLD_MUL: 0.05,                 // 🏠 每栋建筑 +5% 强度
  POP_MUL: 0.01,                 // 🧑‍🚀 每人口 +1% 强度
  KAMIKAZE_MIN: 8,               // 💥 强度≥8 才出现自爆无人机
  BRUTE_MIN: 4,                  // 🦍 强度≥4 才出现重装
};

// ================= 建筑注册：5 种防御塔 =================
// 格式照抄 build.js：Object.assign(BUILDINGS, { id: { id, name, icon, levels:[null, {...}], desc } })
// levels[1..3]：cost / needPop / powerUse / range(格) / dmg / rate(毫秒)
Object.assign(BUILDINGS, {
  // 🔫 机枪塔：便宜、低伤高频，前期主力
  mg_turret: {
    id: 'mg_turret', name: '机枪塔', icon: '🔫', cat: 'military',
    levels: [null,
      { cost: { iron: 20 }, needPop: 2, powerUse: 1, range: 5, dmg: 10, rate: 1000 },
      { cost: { iron: 60, steel: 10 }, needPop: 4, powerUse: 1, range: 6, dmg: 16, rate: 800 },
      { cost: { iron: 150, steel: 40, rare: 5 }, needPop: 8, powerUse: 2, range: 7, dmg: 24, rate: 650 },
    ],
    desc: '🔫 便宜可靠的动能防御，低伤高频，适合清理杂兵。',
  },
  // 🚀 导弹塔：范围伤害、射速慢，一发清一片
  ms_turret: {
    id: 'ms_turret', name: '导弹塔', icon: '🚀', cat: 'military',
    levels: [null,
      { cost: { iron: 60, steel: 15 }, needPop: 4, powerUse: 2, range: 6, dmg: 35, rate: 2600, aoe: 1.5 },
      { cost: { iron: 140, steel: 40, rare: 10 }, needPop: 8, powerUse: 3, range: 7, dmg: 55, rate: 2400, aoe: 2 },
      { cost: { steel: 120, rare: 30, tech: 10 }, needPop: 14, powerUse: 4, range: 8, dmg: 90, rate: 2200, aoe: 2.5 },
    ],
    desc: '🚀 范围杀伤，射速慢但一发入魂，集群敌人的噩梦。',
  },
  // 🔆 激光塔：高伤、耗电大，点杀利器
  laser_turret: {
    id: 'laser_turret', name: '激光塔', icon: '🔆', cat: 'military',
    levels: [null,
      { cost: { iron: 80, rare: 15 }, needPop: 3, powerUse: 4, range: 6, dmg: 45, rate: 1800 },
      { cost: { iron: 180, steel: 60, rare: 30 }, needPop: 6, powerUse: 6, range: 7, dmg: 75, rate: 1600 },
      { cost: { steel: 150, rare: 60, tech: 20 }, needPop: 12, powerUse: 9, range: 8, dmg: 120, rate: 1400 },
    ],
    desc: '🔆 高能激光点杀，伤害爆炸但非常耗电。',
  },
  // 🧲 电磁塔：减速敌人，控场辅助
  emp_turret: {
    id: 'emp_turret', name: '电磁塔', icon: '🧲', cat: 'military',
    levels: [null,
      { cost: { iron: 50, rare: 20 }, needPop: 2, powerUse: 3, range: 5, dmg: 6, rate: 1500, slow: 0.5, slowDur: 4000 },
      { cost: { iron: 120, steel: 30, rare: 40 }, needPop: 5, powerUse: 4, range: 6, dmg: 10, rate: 1400, slow: 0.6, slowDur: 5000 },
      { cost: { steel: 100, rare: 80, tech: 15 }, needPop: 10, powerUse: 6, range: 7, dmg: 16, rate: 1200, slow: 0.7, slowDur: 6000 },
    ],
    desc: '🧲 电磁脉冲减速敌人，为输出塔争取时间。',
  },
  // ⚡ 等离子塔：高伤高耗，需科技点+稀土（顶级防御）
  plasma_turret: {
    id: 'plasma_turret', name: '等离子塔', icon: '⚡', cat: 'military',
    levels: [null,
      { cost: { iron: 120, steel: 50, rare: 30, tech: 10 }, needPop: 6, powerUse: 6, range: 7, dmg: 90, rate: 2200 },
      { cost: { steel: 150, rare: 70, tech: 25 }, needPop: 12, powerUse: 9, range: 8, dmg: 140, rate: 2000 },
      { cost: { steel: 350, rare: 150, tech: 60 }, needPop: 20, powerUse: 14, range: 9, dmg: 220, rate: 1800 },
    ],
    desc: '⚡ 等离子洪流，终极防御。造价含科技点与稀土，耗电巨大。',
  },

  // ================= 城墙与碉堡 =================
  // 🧱 城墙：极便宜、单级、占格阻挡，血量厚，替建筑挡刀
  wall: {
    id: 'wall', name: '城墙', icon: '🧱', cat: 'military',
    levels: [null,
      { cost: { iron: 5 }, needPop: 0, powerUse: 0, fortHp: 400 },
    ],
    desc: '🧱 极便宜的屏障，占一格阻挡敌人，为防御塔争取输出时间。',
  },
  // 🛡️ 碉堡：高血量，驻军光环加成周围防御塔伤害
  bunker: {
    id: 'bunker', name: '碉堡', icon: '🛡️', cat: 'military',
    levels: [null,
      { cost: { iron: 80, steel: 20 }, needPop: 4, powerUse: 1, fortHp: 900, aura: 6, auraBonus: 0.15 },
      { cost: { iron: 200, steel: 80, rare: 10 }, needPop: 8, powerUse: 2, fortHp: 1800, aura: 7, auraBonus: 0.2 },
      { cost: { steel: 250, rare: 50, tech: 10 }, needPop: 14, powerUse: 3, fortHp: 3200, aura: 8, auraBonus: 0.25 },
    ],
    desc: '🛡️ 高血量堡垒，驻军为周围防御塔提供伤害加成。',
  },
});

// 防御塔 id 集合（战斗逻辑用）
const TURRET_IDS = ['mg_turret', 'ms_turret', 'laser_turret', 'emp_turret', 'plasma_turret'];

// ================= 袭击者种类 =================
// 战术克制表（给玩家的备战提示）：
//   👹 劫掠者 → 🔫 机枪塔清理（便宜高频）
//   🦍 重装   → 🔆 激光塔点杀（高伤破甲）
//   💥 自爆机 → 🧲 电磁塔减速（放风筝）+ 🚀 导弹塔 AoE
// 每种 ~40 行：属性 + 行为注释 + 生成权重逻辑
const RAIDER_TYPES = {
  // 👹 劫掠者：最常见的炮灰，速度中等，伤害低，成群出现
  raider: {
    id: 'raider', name: '劫掠者', icon: '👹',
    hp: 60,            // 基础血量
    speed: 1.4,        // 格/秒
    dmg: 8,            // 每次攻击伤害
    atkRate: 1200,     // 攻击间隔毫秒
    loot: { iron: 3 }, // 击杀掉落
    minStrength: 0,    // 任何强度都会出现
    prefer: 'any',     // 🎯 目标偏好：any=最近建筑
    desc: '👹 荒漠流民组成的劫掠队，数量多但个体弱。',
  },
  // 🦍 重装突击兵：高血低速，专门拆建筑，需要集火
  brute: {
    id: 'brute', name: '重装突击兵', icon: '🦍',
    hp: 220,
    speed: 0.7,
    dmg: 22,
    atkRate: 1800,
    loot: { iron: 8, steel: 2 },
    minStrength: RAID_SCHED.BRUTE_MIN,
    prefer: 'any',     // 🎯 目标偏好：any=最近建筑（皮糙肉厚，无脑拆）
    desc: '🦍 身披废土装甲的重装单位，血厚攻高，激光塔优先点杀。',
  },
  // 💥 自爆无人机：高速低血，贴脸自爆，高威胁
  kamikaze: {
    id: 'kamikaze', name: '自爆无人机', icon: '💥',
    hp: 35,
    speed: 2.2,
    dmg: 70,           // 自爆伤害（一次性）
    atkRate: 0,        // 0 = 接触即自爆，不循环攻击
    loot: { iron: 2 },
    minStrength: RAID_SCHED.KAMIKAZE_MIN,
    prefer: 'turret',  // 🎯 目标偏好：优先炸防御塔（拆防空火力）
    desc: '💥 高速自爆无人机，贴近建筑即引爆，电磁塔减速克制。',
  },
};

// ================= MilitaryManager =================
class MilitaryManager {
  constructor() {
    this.raiders = [];            // 袭击者数组 {id,type,x,y,hp,maxHp,speed,dmg,atkRate,slowUntil,slowMul,nextAtk,drill}
    this._raidSeq = 0;            // 袭击者序号
    this.nextRaid = Date.now() + RAID_SCHED.FIRST_AT;  // 下次袭击时间戳
    this.warnUntil = 0;           // 预警结束时间（0=无预警）
    this.raidActive = false;      // 袭击进行中
    this.raidStrength = 0;        // 当前/上次袭击强度
    this.threat = 0;              // 威胁等级 0~100
    this.kills = { total: 0, byType: {}, byTower: {} };  // 🗡️ 击杀统计（按敌人 / 按塔）
    this.log = [];                // 📜 战斗日志（最近 15 条）
    this.allyBonus = 0;           // 🤝 盟友援军火力加成
    this.allyUntil = 0;           // 援军有效期
    this._warnToasted = false;    // 预警提示去重
    this._panelT = 0;             // 面板刷新节流
    this._startAt = Date.now();   // 开局时间（强度成长基准）
  }

  // ---------- 小工具 ----------
  _sfx(game, name) {
    // 🔊 防御性音效：优先 game.sound.play(name)，不存在则映射到已知方法
    const s = game && game.sound;
    if (!s) return;
    try {
      if (typeof s.play === 'function') { s.play(name); return; }
      const map = { alarm: 'warning', shoot: 'click', boom: 'meteorHit', win: 'victory', click: 'click', raid: 'warning' };
      const m = map[name];
      if (m && typeof s[m] === 'function') s[m]();
    } catch (e) { /* 静默 */ }
  }

  _toast(game, msg) {
    if (game && typeof game.toast === 'function') game.toast(msg);
  }

  _log(msg) {
    // 📜 战斗日志：最新在前，最多 15 条
    const t = new Date();
    const ts = `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`;
    this.log.unshift(`[${ts}] ${msg}`);
    if (this.log.length > 15) this.log.length = 15;
  }

  _buildings(game) {
    // 🛡️ 防御性读取建筑数组
    if (game && game.builder && Array.isArray(game.builder.buildings)) return game.builder.buildings;
    return [];
  }

  // ---------- 雷达站 ----------
  hasRadar(game) {
    // 📡 雷达站存在则预警时间翻倍（读建筑 id==='radar'，判存在）
    return this._buildings(game).some(b => b && b.id === 'radar');
  }

  // ---------- 威胁等级 ----------
  updateThreat(game) {
    // 📊 威胁 = 时间成长 + 城市规模（建筑数/人口）
    const min = (Date.now() - this._startAt) / 60000;
    const n = this._buildings(game).length;
    const pop = (game && game.pop && game.pop.count) || 0;
    this.threat = Math.min(100, Math.round(min * 2 + n * 1.5 + pop * 0.4));
  }

  // ---------- 袭击调度 ----------
  currentStrength(game) {
    // 💪 袭击强度：随游戏时长 / 建筑数 / 人口增强
    const min = (Date.now() - this._startAt) / 60000;
    const n = this._buildings(game).length;
    const pop = (game && game.pop && game.pop.count) || 0;
    return 1 + min * RAID_SCHED.GROWTH_PER_MIN + n * RAID_SCHED.BLD_MUL + pop * RAID_SCHED.POP_MUL;
  }

  scheduleNext(now, game) {
    // 🔁 安排下一次袭击：城市越大间隔越短
    const n = this._buildings(game).length;
    const shrink = Math.min(0.3, n * 0.005);
    const gap = RAID_SCHED.INTERVAL_MIN +
      Math.random() * (RAID_SCHED.INTERVAL_MAX - RAID_SCHED.INTERVAL_MIN);
    this.nextRaid = now + gap * (1 - shrink);
    this.warnUntil = 0;
    this._warnToasted = false;
  }

  // startRaid 可被外部（外交）调用：立即发动一波指定强度的袭击
  startRaid(strength, game, opts) {
    opts = opts || {};
    const now = Date.now();
    this.raidStrength = Math.max(0.5, strength || 1);
    this.raidActive = true;
    this.warnUntil = 0;
    const size = game && game.map && game.map.size ? game.map.size : 50;
    // 👥 袭击者数量随强度增长
    const count = Math.round(3 + this.raidStrength * 2);
    const avail = Object.values(RAIDER_TYPES).filter(t => this.raidStrength >= t.minStrength);
    for (let i = 0; i < count; i++) {
      // 强度越高，越可能刷出重装/自爆
      const pool = avail.length ? avail : [RAIDER_TYPES.raider];
      const weights = pool.map(t => t.id === 'raider' ? 5 : t.id === 'brute' ? 2 : 1);
      const type = this._pickWeighted(pool, weights);
      // 🧭 从地图边缘随机生成
      const p = this._edgeSpawn(size);
      this.spawnRaider(type.id, p.x, p.y, { drill: !!opts.drill });
    }
    if (!opts.silent) {
      this._toast(game, opts.drill ? '🎯 演习开始！模拟袭击者接近中…' : `🚨 袭击！${count} 名敌人从边缘逼近！`);
      this._sfx(game, 'alarm');
      this._log(`${opts.drill ? '🎯 演习' : '🚨 袭击'}开始：${count} 名敌人，强度 ${this.raidStrength.toFixed(1)}`);
    }
    return count;
  }

  _pickWeighted(pool, weights) {
    let sum = 0;
    for (const w of weights) sum += w;
    let r = Math.random() * sum;
    for (let i = 0; i < pool.length; i++) {
      r -= weights[i];
      if (r <= 0) return pool[i];
    }
    return pool[pool.length - 1];
  }

  _edgeSpawn(size) {
    // 🧭 地图四条边缘随机一点
    const e = Math.floor(Math.random() * 4);
    if (e === 0) return { x: Math.random() * size, y: 0 };
    if (e === 1) return { x: Math.random() * size, y: size - 1 };
    if (e === 2) return { x: 0, y: Math.random() * size };
    return { x: size - 1, y: Math.random() * size };
  }

  spawnRaider(typeId, x, y, opts) {
    // 👹 生成一个袭击者（强度加成血量）
    const t = RAIDER_TYPES[typeId] || RAIDER_TYPES.raider;
    const hpMul = 1 + this.raidStrength * 0.15;
    const r = {
      id: ++this._raidSeq, type: typeId, icon: t.icon, name: t.name,
      x, y,
      hp: Math.round(t.hp * hpMul), maxHp: Math.round(t.hp * hpMul),
      speed: t.speed, dmg: t.dmg, atkRate: t.atkRate,
      loot: t.loot, nextAtk: 0,
      slowUntil: 0, slowMul: 1,
      drill: !!(opts && opts.drill),
    };
    this.raiders.push(r);
    return r;
  }

  // ---------- 主更新（game.js 每帧调用） ----------
  update(now, dt, game) {
    if (!game) return;
    this.updateThreat(game);

    // ⏳ 袭击倒计时 → 预警 → 开打
    if (!this.raidActive && this.warnUntil === 0 && now >= this.nextRaid) {
      const warnMs = RAID_SCHED.WARN_MS * (this.hasRadar(game) ? 2 : 1);  // 📡 雷达预警翻倍
      this.warnUntil = now + warnMs;
      if (!this._warnToasted) {
        this._warnToasted = true;
        this._toast(game, `🚨 预警：敌方袭击队接近中！${Math.round(warnMs / 1000)} 秒后抵达${this.hasRadar(game) ? '（雷达预警×2）' : ''}`);
        this._sfx(game, 'alarm');
        this._log(`🚨 袭击预警：${Math.round(warnMs / 1000)} 秒后抵达`);
      }
    }
    if (!this.raidActive && this.warnUntil > 0 && now >= this.warnUntil) {
      this.startRaid(this.currentStrength(game), game);
    }

    // 🔫 防御塔开火
    this._updateTowers(now, dt, game);
    // 🏃 袭击者移动与攻击
    this._updateRaiders(now, dt, game);

    // 🏁 袭击结束：敌人清空 → 结算 → 安排下次
    if (this.raidActive && this.raiders.length === 0) {
      this.raidActive = false;
      this._toast(game, '✅ 袭击被击退！城市安然无恙');
      this._sfx(game, 'win');
      this._log('✅ 袭击被击退');
      this.scheduleNext(now, game);
    }

    // 🖥️ 面板节流刷新
    if (now - this._panelT > 500) {
      this._panelT = now;
      this.refreshPanel(game, now);
    }
  }

  // ---------- 防御塔自动开火 ----------
  _updateTowers(now, dt, game) {
    const buildings = this._buildings(game);
    if (!buildings.length || !this.raiders.length) return;
    // 🛡️ 碉堡驻军光环：收集所有碉堡位置与加成
    const bunkers = [];
    for (const b of buildings) {
      const d = BUILDINGS[b.id];
      if (b.id === 'bunker' && d && d.levels[b.level]) {
        bunkers.push({ x: b.x, y: b.y, aura: d.levels[b.level].aura || 6, bonus: d.levels[b.level].auraBonus || 0 });
      }
    }
    const allyActive = this.allyBonus > 0 && now < this.allyUntil;  // 🤝 援军火力
    for (const b of buildings) {
      if (TURRET_IDS.indexOf(b.id) < 0) continue;
      const def = BUILDINGS[b.id];
      const lv = def && def.levels[b.level];
      if (!lv || !lv.dmg) continue;
      if (b._milCd && now < b._milCd) continue;  // ⏱️ 射速冷却
      // 🎯 找射程内最近的敌人
      let best = null, bestD = Infinity;
      for (const r of this.raiders) {
        const d = Math.hypot(r.x - b.x, r.y - b.y);
        if (d <= lv.range && d < bestD) { best = r; bestD = d; }
      }
      if (!best) continue;
      b._milCd = now + lv.rate;
      // 🛡️ 碉堡光环加成（驻军）
      let mul = 1;
      for (const k of bunkers) {
        if (Math.hypot(k.x - b.x, k.y - b.y) <= k.aura) mul += k.bonus;
      }
      let dmg = lv.dmg * mul;
      if (allyActive) dmg += this.allyBonus;  // 🤝 盟友援军临时火力
      this._fireAt(best, dmg, lv, game, now, b);
    }
  }

  _fireAt(target, dmg, lv, game, now, tower) {
    // 💥 开火结算：直伤 + 导弹 AoE + 电磁减速
    dmg = Math.max(1, Math.round(dmg));
    if (lv.aoe) {
      // 🚀 范围伤害：目标周围 aoe 格内所有敌人
      for (const r of this.raiders) {
        if (Math.hypot(r.x - target.x, r.y - target.y) <= lv.aoe) this._damageRaider(r, dmg, game, tower);
      }
    } else {
      this._damageRaider(target, dmg, game, tower);
    }
    if (lv.slow) {
      // 🧲 电磁减速
      for (const r of this.raiders) {
        if (r === target || (lv.aoe && Math.hypot(r.x - target.x, r.y - target.y) <= lv.aoe)) {
          r.slowUntil = now + (lv.slowDur || 4000);
          r.slowMul = Math.max(0.2, 1 - lv.slow);
        }
      }
    }
  }

  _damageRaider(r, dmg, game, tower) {
    r.hp -= dmg;
    if (r.hp > 0) return;
    // ☠️ 敌人死亡：移除 + 战利品 + 统计
    const i = this.raiders.indexOf(r);
    if (i >= 0) this.raiders.splice(i, 1);
    this.kills.total++;
    this.kills.byType[r.type] = (this.kills.byType[r.type] || 0) + 1;
    // 🎯 按防御塔类型统计击杀（供面板 / 成就读取）
    const tid = tower && tower.id ? tower.id : 'unknown';
    this.kills.byTower[tid] = (this.kills.byTower[tid] || 0) + 1;
    // 🗡️ 击杀统计挂钩 game.stats（判存在）
    if (game && game.stats && typeof game.stats.record === 'function') {
      try { game.stats.record('raid-kill', { type: r.type }); } catch (e) { /* 忽略 */ }
    }
    // 💰 少量铁矿战利品
    if (r.loot && game && game.player && game.player.inv) {
      for (const k of Object.keys(r.loot)) {
        game.player.inv[k] = (game.player.inv[k] || 0) + r.loot[k];
      }
    }
    const tname = (tower && BUILDINGS[tower.id]) ? BUILDINGS[tower.id].name : '防御塔';
    this._log(`☠️ ${tname} 击杀 ${r.icon}${r.name}（+${r.loot && r.loot.iron || 0}铁矿）`);
  }

  // ---------- 袭击者移动与攻击 ----------
  _updateRaiders(now, dt, game) {
    if (!this.raiders.length) return;
    const buildings = this._buildings(game);
    const dtS = dt / 1000;  // 秒
    for (let i = this.raiders.length - 1; i >= 0; i--) {
      const r = this.raiders[i];
      // 🧲 减速状态
      const slowed = now < r.slowUntil;
      const sp = r.speed * (slowed ? r.slowMul : 1);
      // 🎯 走向目标：自爆机优先找最近的防御塔，其余找最近建筑
      const preferTurret = (RAIDER_TYPES[r.type] && RAIDER_TYPES[r.type].prefer) === 'turret';
      let best = null, bestD = Infinity;
      const consider = (b) => {
        const d = Math.hypot(b.x - r.x, b.y - r.y);
        if (d < bestD) { best = b; bestD = d; }
      };
      if (preferTurret) {
        for (const b of buildings) if (TURRET_IDS.indexOf(b.id) >= 0) consider(b);
      }
      if (!best) for (const b of buildings) consider(b);  // 兜底：无塔则打最近建筑
      if (!best) continue;  // 无建筑可打，原地待命
      if (bestD <= 1.5) {
        // ⚔️ 贴脸攻击
        if (r.atkRate === 0) {
          // 💥 自爆无人机：接触即引爆
          this._explode(r, best, game);
          this.raiders.splice(i, 1);
          continue;
        }
        if (now >= r.nextAtk) {
          r.nextAtk = now + r.atkRate;
          this._hitBuilding(best, r.dmg * (r.drill ? 0.1 : 1), game, r);  // 🎯 演习伤害×0.1
        }
      } else {
        // 🏃 移动
        const dx = best.x - r.x, dy = best.y - r.y;
        const len = Math.hypot(dx, dy) || 1;
        r.x += (dx / len) * sp * dtS;
        r.y += (dy / len) * sp * dtS;
      }
    }
  }

  _explode(r, target, game) {
    // 💥 自爆：对目标建筑造成一次性高伤害
    const dmg = r.dmg * (r.drill ? 0.1 : 1);
    this._log(`💥 ${r.icon}${r.name} 自爆！对建筑造成 ${Math.round(dmg)} 点伤害`);
    this._hitBuilding(target, dmg, game, r);
    this._sfx(game, 'boom');
  }

  _buildingMaxHp(b) {
    // 🏠 建筑血量：城墙/碉堡用 fortHp，其余默认 100 + 等级×50
    const def = BUILDINGS[b.id];
    const lv = def && def.levels[b.level];
    if (lv && lv.fortHp) return lv.fortHp;
    return 100 + (b.level || 1) * 50;
  }

  _hitBuilding(b, dmg, game, r) {
    // 🧱 袭击者攻击建筑
    if (b._milHp === undefined) b._milHp = this._buildingMaxHp(b);
    // 🎯 演习保护：建筑血量不低于 1（只练手不拆家）
    const floor = r && r.drill ? 1 : 0;
    b._milHp = Math.max(floor, b._milHp - dmg);
    if (b._milHp <= 0) {
      this.destroyBuilding(game, b);
    }
  }

  // 建筑被摧毁：只做移除 + 通知（不碰 build.js 的维修逻辑）
  destroyBuilding(game, b) {
    const arr = game && game.builder && game.builder.buildings;
    if (arr) {
      const i = arr.indexOf(b);
      if (i >= 0) arr.splice(i, 1);
    }
    const def = (typeof BUILDINGS !== 'undefined' && BUILDINGS[b.id]) || {};
    const label = `${def.icon || '🏚️'}${def.name || b.id}`;
    this._toast(game, `💥 ${label} 被袭击者摧毁了！`);
    this._sfx(game, 'boom');
    this._log(`💥 ${label} 被摧毁`);
  }

  // ---------- 防御总评（供外交/成就读取） ----------
  defensePower(game) {
    // 🛡️ 防御总评 = 各塔 DPS×射程系数 + 碉堡驻军 + 城墙象征分 + 援军
    let p = 0;
    const now = Date.now();
    for (const b of this._buildings(game)) {
      const def = BUILDINGS[b.id];
      const lv = def && def.levels[b.level];
      if (!lv) continue;
      if (lv.dmg) p += ((lv.dmg * 1000) / Math.max(1, lv.rate)) * (1 + (lv.range || 0) * 0.15);
      if (b.id === 'bunker') p += 20 * (b.level || 1);  // 🛡️ 驻军威慑
      if (b.id === 'wall') p += 2;                     // 🧱 城墙象征分
    }
    if (this.allyBonus > 0 && now < this.allyUntil) p += this.allyBonus * 10;  // 🤝 援军
    return Math.round(p);
  }

  // 🤝 盟友援军：临时 +n 防御塔火力（120 秒）
  addAllyDefense(n) {
    this.allyBonus = Math.max(0, n || 0);
    this.allyUntil = Date.now() + 120 * 1000;
    this._log(`🤝 盟友援军抵达：防御塔火力 +${this.allyBonus}（120 秒）`);
  }

  // 🎯 各防御塔击杀统计（供面板 / 成就读取）
  // 返回 [{id, name, icon, kills}]，按击杀数降序
  towerStats() {
    const rows = [];
    for (const tid of Object.keys(this.kills.byTower)) {
      const def = (typeof BUILDINGS !== 'undefined' && BUILDINGS[tid]) || {};
      rows.push({
        id: tid,
        name: def.name || tid,
        icon: def.icon || '🗼',
        kills: this.kills.byTower[tid] || 0,
      });
    }
    rows.sort((a, b) => b.kills - a.kills);
    return rows;
  }

  // 📋 袭击战报摘要（供外交 / 成就读取）
  // 返回 {active, enemies, strength, threat, power, kills, lastLog}
  raidSummary(game) {
    return {
      active: this.raidActive,
      enemies: this.raiders.length,
      strength: Math.round(this.raidStrength * 10) / 10,
      threat: this.threat,
      power: this.defensePower(game),
      kills: this.kills.total,
      towerStats: this.towerStats(),
      lastLog: this.log.slice(0, 5),
    };
  }

  // 🔮 预测下一波袭击构成（供面板展示 / 玩家备战）
  // 返回 {count, strength, types:[{icon,name,count}]}，纯计算不产生副作用
  previewWave(game) {
    const s = this.currentStrength(game);
    const count = Math.round(3 + s * 2);
    const avail = Object.values(RAIDER_TYPES).filter(t => s >= t.minStrength);
    const pool = avail.length ? avail : [RAIDER_TYPES.raider];
    // 按权重估算各类型数量
    const weights = pool.map(t => t.id === 'raider' ? 5 : t.id === 'brute' ? 2 : 1);
    const sum = weights.reduce((a, b) => a + b, 0);
    const types = pool.map((t, i) => ({
      icon: t.icon, name: t.name,
      count: Math.max(i === 0 ? 1 : 0, Math.round(count * weights[i] / sum)),
      counter: t.id === 'kamikaze' ? '🧲 电磁塔减速克制' : t.id === 'brute' ? '🔆 激光塔点杀' : '🔫 机枪塔清理',
    }));
    return { count, strength: Math.round(s * 10) / 10, types };
  }

  // 🎯 演习：花资源模拟一波小袭击练手（建筑不会被拆）
  drill(game) {
    const cost = { iron: 30, food: 20 };
    const inv = game && game.player && game.player.inv;
    if (!inv) return;
    // 💰 资源检查（防御性使用全局 canAfford/spendRes）
    let ok = true;
    if (typeof canAfford === 'function') ok = canAfford(inv, cost);
    else ok = (inv.iron || 0) >= cost.iron && (inv.food || 0) >= cost.food;
    if (!ok) {
      this._toast(game, '⚠️ 演习需要 铁矿×30 食物×20，资源不足');
      return;
    }
    if (typeof spendRes === 'function') spendRes(inv, cost);
    else { inv.iron -= cost.iron; inv.food -= cost.food; }
    this._sfx(game, 'click');
    this.startRaid(1.5, game, { drill: true });
  }

  // ---------- UI：军事按钮 + 面板 ----------
  bindUI(game) {
    if (typeof document === 'undefined') return;
    // 🛡️ 工具栏加「军事」按钮
    const toolbar = document.getElementById('toolbar');
    if (toolbar && !document.getElementById('btn-military')) {
      const btn = document.createElement('button');
      btn.id = 'btn-military';
      btn.className = 'tool-btn';
      btn.innerHTML = '🛡️<small>军事</small>';
      btn.addEventListener('click', () => {
        this.togglePanel(game);
        this._sfx(game, 'click');
      });
      toolbar.appendChild(btn);
    }
    // 🖥️ 军事面板（威胁等级条 / 倒计时 / 防御总评 / 演习 / 战斗日志）
    if (!document.getElementById('military-panel')) {
      const panel = document.createElement('div');
      panel.id = 'military-panel';
      panel.className = 'hidden';
      panel.innerHTML = `
        <div class="panel-header">
          <span>🛡️ 军事防御</span>
          <button id="btn-close-military">✖</button>
        </div>
        <div class="panel-body">
          <div class="mil-row"><span>📊 威胁等级</span>
            <div class="mil-bar"><div id="mil-threat-fill" class="mil-fill"></div></div>
            <b id="mil-threat-num">0</b>
          </div>
          <div class="mil-row"><span>⏳ 下次袭击</span><b id="mil-next">--</b></div>
          <div class="mil-row"><span>🛡️ 防御总评</span><b id="mil-power">0</b></div>
          <div class="mil-row"><span>🗡️ 击杀</span><b id="mil-kills">0</b>
            <span style="margin-left:8px">⚔️ 交战中</span><b id="mil-fighting">0</b></div>
          <div class="mil-row"><span>🎯 各塔击杀</span><b id="mil-bytower" style="font-size:12px">--</b></div>
          <div class="mil-row"><span>🔮 下波预测</span><b id="mil-preview" style="font-size:12px">--</b></div>
          <div class="mil-row"><span>📡 雷达预警</span><b id="mil-radar">无</b></div>
          <div class="mil-actions">
            <button id="btn-mil-drill">🎯 演习（铁×30 食×20）</button>
          </div>
          <div class="mil-log-title">📜 战斗日志（最近 15 条）</div>
          <div id="mil-log" class="mil-log"></div>
        </div>`;
      document.body.appendChild(panel);
      document.getElementById('btn-close-military').addEventListener('click', () => {
        panel.classList.add('hidden');
      });
      document.getElementById('btn-mil-drill').addEventListener('click', () => this.drill(game));
      // 💅 面板样式（内联，避免改 styles.css）
      const st = document.createElement('style');
      st.textContent = `
        #military-panel{position:fixed;right:12px;top:64px;width:300px;max-height:70vh;overflow-y:auto;
          background:#141a26;border:1px solid #3b4a63;border-radius:10px;color:#dbe6f5;z-index:60;
          box-shadow:0 8px 24px rgba(0,0,0,.5);font-size:13px}
        #military-panel .panel-body{padding:10px 12px}
        .mil-row{display:flex;align-items:center;gap:8px;margin:6px 0}
        .mil-row span:first-child{color:#9fb2cc;min-width:76px}
        .mil-bar{flex:1;height:10px;background:#0b0f18;border-radius:5px;overflow:hidden}
        .mil-fill{height:100%;width:0%;background:linear-gradient(90deg,#4ade80,#facc15,#ef4444);transition:width .4s}
        .mil-actions{margin:8px 0;text-align:center}
        #btn-mil-drill{background:#1d4ed8;color:#fff;border:none;border-radius:6px;padding:6px 12px;cursor:pointer}
        #btn-mil-drill:hover{background:#2563eb}
        .mil-log-title{margin-top:6px;color:#9fb2cc}
        .mil-log{max-height:150px;overflow-y:auto;background:#0b0f18;border-radius:6px;padding:6px 8px;margin-top:4px}
        .mil-log div{padding:2px 0;border-bottom:1px solid #1e293b;font-size:12px}`;
      document.head.appendChild(st);
    }
  }

  togglePanel(game) {
    const p = document.getElementById('military-panel');
    if (!p) return;
    p.classList.toggle('hidden');
    if (!p.classList.contains('hidden')) this.refreshPanel(game, Date.now());
  }

  refreshPanel(game, now) {
    // 🖥️ 刷新面板数据（update 内节流调用）
    if (typeof document === 'undefined') return;
    const panel = document.getElementById('military-panel');
    if (!panel || panel.classList.contains('hidden')) return;
    now = now || Date.now();
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    // 📊 威胁等级条
    const fill = document.getElementById('mil-threat-fill');
    if (fill) fill.style.width = this.threat + '%';
    set('mil-threat-num', this.threat);
    // ⏳ 下次袭击倒计时
    let nextTxt;
    if (this.raidActive) nextTxt = `⚔️ 袭击进行中（${this.raiders.length} 敌）`;
    else if (this.warnUntil > now) nextTxt = `🚨 预警！${Math.ceil((this.warnUntil - now) / 1000)} 秒`;
    else {
      const s = Math.max(0, Math.ceil((this.nextRaid - now) / 1000));
      nextTxt = `${Math.floor(s / 60)} 分 ${s % 60} 秒`;
    }
    set('mil-next', nextTxt);
    // 🛡️ 防御总评 / 🗡️ 击杀 / 📡 雷达
    set('mil-power', this.defensePower(game));
    set('mil-kills', this.kills.total);
    set('mil-fighting', this.raiders.length);
    // 🎯 各塔击杀
    const ts = this.towerStats().slice(0, 4).map(t => `${t.icon}${t.kills}`).join(' ');
    set('mil-bytower', ts || '--');
    // 🔮 下波预测（含克制提示）
    if (!this.raidActive) {
      const pv = this.previewWave(game);
      const det = pv.types.map(t => `${t.icon}×${t.count}`).join(' ');
      set('mil-preview', `${pv.count}敌 ${det}`);
      const pvEl = document.getElementById('mil-preview');
      if (pvEl) pvEl.title = pv.types.map(t => `${t.icon}${t.name}：${t.counter}`).join('\n');
    } else {
      set('mil-preview', '交战中…');
    }
    set('mil-radar', this.hasRadar(game) ? '✅ 预警×2' : '无');
    // 📜 战斗日志
    const logEl = document.getElementById('mil-log');
    if (logEl) logEl.innerHTML = this.log.map(l => `<div>${l}</div>`).join('') || '<div>暂无战斗记录</div>';
  }

  // ---------- 存档 ----------
  save() {
    // 💾 只存调度与统计，不存进行中的袭击者（读档后重新调度）
    return {
      v: 1,
      nextRaid: this.nextRaid,
      threat: this.threat,
      kills: this.kills,
      log: this.log.slice(0, 15),
      allyBonus: this.allyBonus,
      allyUntil: this.allyUntil,
      startAt: this._startAt,
    };
  }

  load(data) {
    // 📂 读档恢复（防御性：字段缺失则用默认值）
    if (!data || typeof data !== 'object') return;
    const now = Date.now();
    this.threat = data.threat || 0;
    this.kills = data.kills && typeof data.kills.total === 'number'
      ? { total: data.kills.total, byType: data.kills.byType || {}, byTower: data.kills.byTower || {} }
      : { total: 0, byType: {}, byTower: {} };
    this.log = Array.isArray(data.log) ? data.log.slice(0, 15) : [];
    this.allyBonus = data.allyBonus || 0;
    this.allyUntil = data.allyUntil || 0;
    if (typeof data.startAt === 'number') this._startAt = data.startAt;
    // ⏳ 下次袭击：过期则顺延一个间隔
    if (typeof data.nextRaid === 'number' && data.nextRaid > now) {
      this.nextRaid = data.nextRaid;
    } else {
      this.nextRaid = now + RAID_SCHED.INTERVAL_MIN;
    }
    this.raiders = [];
    this.raidActive = false;
    this.warnUntil = 0;
  }
}

// 🌍 挂载全局
window.MilitaryManager = MilitaryManager;
