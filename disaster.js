/* 星港 — disaster.js：灾难系统（沙尘暴 / 陨石 / 设备老化）
 * 纯机制，无剧情。气象站可延长预警时间。 */

// 沙尘暴参数
const SANDSTORM = {
  FIRST_AT: 4 * 60 * 1000,      // 首次 4 分钟后
  INTERVAL_MIN: 5 * 60 * 1000,  // 间隔 5~8 分钟
  INTERVAL_MAX: 8 * 60 * 1000,
  DURATION: 60 * 1000,          // 持续 60 秒
  WARN_MS: 15 * 1000,           // 预警 15 秒（气象站 +10 秒）
  SOLAR_PENALTY: 0.5,           // 太阳能 -50%
};

// 陨石参数
const METEOR = {
  FIRST_AT: 6 * 60 * 1000,      // 首次 6 分钟后
  INTERVAL_MIN: 6 * 60 * 1000,  // 间隔 6~10 分钟
  INTERVAL_MAX: 10 * 60 * 1000,
  WARN_MS: 12 * 1000,           // 预警 12 秒（气象站 +10 秒）
};

// 设备老化参数
const AGING = {
  START_MS: 10 * 60 * 1000,     // 10 分钟后开始老化
  STEP_MS: 5 * 60 * 1000,       // 每 5 分钟降一档
  STEP_PENALTY: 0.1,            // 每档 -10% 效率
  MIN_EFF: 0.5,                 // 最低 50% 效率
};

// 太阳风暴参数（新增）
const SOLAR_FLARE = {
  FIRST_AT: 8 * 60 * 1000,
  INTERVAL_MIN: 8 * 60 * 1000,
  INTERVAL_MAX: 14 * 60 * 1000,
  DURATION: 45 * 1000,          // 持续 45 秒
  WARN_MS: 20 * 1000,
  // 效果：所有电子设备停工（实验室/指挥中心/气象站）
};

// 尘卷风参数（新增）
const DUST_DEVIL = {
  FIRST_AT: 5 * 60 * 1000,
  INTERVAL_MIN: 4 * 60 * 1000,
  INTERVAL_MAX: 7 * 60 * 1000,
  WARN_MS: 10 * 1000,
  // 效果：在地图上移动，路径上的太阳能板暂时失效
};

class DisasterManager {
  constructor() {
    const now = Date.now();
    // 沙尘暴状态：null / {warnUntil, until}
    this.sandstorm = null;
    this.nextSandstorm = now + SANDSTORM.FIRST_AT;
    // 陨石状态：null / {warnUntil, x, y}
    this.meteor = null;
    this.nextMeteor = now + METEOR.FIRST_AT;
    // 太阳风暴：null / {warnUntil, until}
    this.flare = null;
    this.nextFlare = now + SOLAR_FLARE.FIRST_AT;
    // 尘卷风：null / {x, y, dx, dy, until, warnUntil}
    this.devil = null;
    this.nextDevil = now + DUST_DEVIL.FIRST_AT;
    // 回调：UI 提示用，game.js 设置
    this.onEvent = null;  // (type, data) => {}
  }

  // 是否有气象站（game 传入）
  warnBonus(hasWeather) {
    return hasWeather ? 10000 : 0;
  }

  // 沙尘暴是否生效中
  sandstormActive(now) {
    return this.sandstorm && now >= this.sandstorm.warnUntil && now < this.sandstorm.until;
  }

  // 沙尘暴是否在预警中
  sandstormWarning(now) {
    return this.sandstorm && now < this.sandstorm.warnUntil;
  }

  // 太阳能倍率（沙尘暴期间打折，科技可减免）
  solarMultiplier(now, tech) {
    if (!this.sandstormActive(now)) return 1;
    // 基础惩罚 × 科技减免
    const penalty = SANDSTORM.SOLAR_PENALTY;
    const relief = tech ? tech.mul('sandstormMul') : 1;
    // relief=0.5 意味着影响减半：1 - (1-penalty)*relief... 简化：penalty^relief 方向
    // 实际：有效倍率 = 1 - (1 - penalty) * relief
    return 1 - (1 - penalty) * relief;
  }

  // 太阳风暴是否生效中
  flareActive(now) {
    return this.flare && now >= this.flare.warnUntil && now < this.flare.until;
  }

  // 尘卷风是否活跃
  devilActive(now) {
    return this.devil && now >= this.devil.warnUntil && now < this.devil.until;
  }

  // 尘卷风是否影响指定位置（2 格内）
  devilAffects(x, y, now) {
    if (!this.devilActive(now)) return false;
    const d = this.devil;
    const dist = Math.hypot(d.x - x, d.y - y);
    return dist < 2.5;
  }

  // 电子设备是否被太阳风暴干扰（实验室/指挥中心/气象站/贸易站）
  electronicsDown(now) {
    return this.flareActive(now);
  }

  // 主更新：game loop 每帧调用
  update(now, game) {
    const emit = (type, data) => { if (this.onEvent) this.onEvent(type, data); };
    const hasWeather = game.builder.count('weather') > 0;
    const tech = game.tech;

    // ---- 沙尘暴 ----
    if (!this.sandstorm && now >= this.nextSandstorm) {
      const warnMs = SANDSTORM.WARN_MS + this.warnBonus(hasWeather);
      this.sandstorm = {
        warnUntil: now + warnMs,
        until: now + warnMs + SANDSTORM.DURATION,
      };
      emit('sandstorm-warn', { warnMs });
    }
    if (this.sandstorm) {
      // 预警转生效
      if (!this.sandstorm.warned && now >= this.sandstorm.warnUntil) {
        this.sandstorm.warned = true;
        emit('sandstorm-start', {});
      }
      // 结束
      if (now >= this.sandstorm.until) {
        this.sandstorm = null;
        const gap = SANDSTORM.INTERVAL_MIN +
          Math.random() * (SANDSTORM.INTERVAL_MAX - SANDSTORM.INTERVAL_MIN);
        this.nextSandstorm = now + gap;
        emit('sandstorm-end', {});
      }
    }

    // ---- 陨石 ----
    if (!this.meteor && now >= this.nextMeteor) {
      // 随机选一个已解锁区域内的建筑（或空地）
      const target = this.pickMeteorTarget(game);
      const warnMs = METEOR.WARN_MS + this.warnBonus(hasWeather);
      this.meteor = {
        warnUntil: now + warnMs,
        x: target.x, y: target.y,
        building: target.building,
      };
      emit('meteor-warn', { x: target.x, y: target.y, warnMs });
    }
    if (this.meteor && now >= this.meteor.warnUntil) {
      const m = this.meteor;
      this.meteor = null;
      const gap = METEOR.INTERVAL_MIN +
        Math.random() * (METEOR.INTERVAL_MAX - METEOR.INTERVAL_MIN);
      this.nextMeteor = now + gap;
      // 结算：砸中建筑则损坏（科技可免疫/减免）
      if (m.building) {
        const immune = tech && tech.flag('meteorImmune');
        if (immune) {
          emit('meteor-immune', { x: m.x, y: m.y });
        } else {
          const dmgMul = tech ? tech.mul('meteorMul') : 1;
          // meteorMul=0.5 → 50% 概率免伤
          if (Math.random() < dmgMul) {
            m.building.damaged = true;
            m.building.damagedAt = now;
            emit('meteor-hit', { x: m.x, y: m.y, building: m.building.id });
          } else {
            emit('meteor-dodge', { x: m.x, y: m.y });
          }
        }
      } else {
        emit('meteor-miss', { x: m.x, y: m.y });
      }
    }

    // ---- 太阳风暴 ----
    if (!this.flare && now >= this.nextFlare) {
      const warnMs = SOLAR_FLARE.WARN_MS + this.warnBonus(hasWeather);
      this.flare = {
        warnUntil: now + warnMs,
        until: now + warnMs + SOLAR_FLARE.DURATION,
      };
      emit('flare-warn', { warnMs });
    }
    if (this.flare) {
      if (!this.flare.warned && now >= this.flare.warnUntil) {
        this.flare.warned = true;
        emit('flare-start', {});
      }
      if (now >= this.flare.until) {
        this.flare = null;
        const gap = SOLAR_FLARE.INTERVAL_MIN +
          Math.random() * (SOLAR_FLARE.INTERVAL_MAX - SOLAR_FLARE.INTERVAL_MIN);
        this.nextFlare = now + gap;
        emit('flare-end', {});
      }
    }

    // ---- 尘卷风 ----
    if (!this.devil && now >= this.nextDevil) {
      // 随机起点和方向
      const edge = Math.floor(Math.random() * 4);
      const size = game.map.size;
      let x, y, dx, dy;
      if (edge === 0) { x = 0; y = Math.random() * size; dx = 1; dy = 0; }
      else if (edge === 1) { x = size - 1; y = Math.random() * size; dx = -1; dy = 0; }
      else if (edge === 2) { x = Math.random() * size; y = 0; dx = 0; dy = 1; }
      else { x = Math.random() * size; y = size - 1; dx = 0; dy = -1; }
      const warnMs = DUST_DEVIL.WARN_MS + this.warnBonus(hasWeather);
      this.devil = {
        x, y, dx, dy,
        warnUntil: now + warnMs,
        until: now + warnMs + 90000, // 持续 90 秒
        speed: 1.5, // 格/秒
        lastMove: now,
      };
      emit('devil-warn', { warnMs });
    }
    if (this.devil) {
      const d = this.devil;
      if (!d.warned && now >= d.warnUntil) {
        d.warned = true;
        emit('devil-start', {});
      }
      // 移动
      if (now >= d.warnUntil && now - d.lastMove > 1000 / d.speed) {
        d.lastMove = now;
        d.x += d.dx * 0.5;
        d.y += d.dy * 0.5;
        // 路径上的太阳能板暂时失效（由 game 渲染时检查距离）
      }
      if (now >= d.until) {
        this.devil = null;
        const gap = DUST_DEVIL.INTERVAL_MIN +
          Math.random() * (DUST_DEVIL.INTERVAL_MAX - DUST_DEVIL.INTERVAL_MIN);
        this.nextDevil = now + gap;
        emit('devil-end', {});
      }
    }
  }

  // 选陨石目标：优先建筑（70%），否则随机空地
  pickMeteorTarget(game) {
    const buildings = game.builder.buildings.filter(b => b.id !== 'road');
    if (buildings.length > 0 && Math.random() < 0.7) {
      const b = buildings[Math.floor(Math.random() * buildings.length)];
      return { x: b.x, y: b.y, building: b };
    }
    // 随机已解锁空地
    for (let i = 0; i < 50; i++) {
      const x = Math.floor(Math.random() * game.map.size);
      const y = Math.floor(Math.random() * game.map.size);
      if (game.map.isUnlocked(x, y) && game.map.terrain[y][x] === 0) {
        return { x, y, building: null };
      }
    }
    const c = Math.floor(game.map.size / 2);
    return { x: c, y: c, building: null };
  }

  // ---- 设备老化 ----
  // 返回建筑效率倍率（0.5~1.0）
  agingEfficiency(building, now, tech) {
    if (!building.builtAt) return 1;
    const age = now - building.builtAt;
    if (age < AGING.START_MS) return 1;
    const agingMul = tech ? tech.mul('agingMul') : 1;
    // 老化速度受科技影响：等效年龄 = age * agingMul
    const effAge = age * agingMul;
    const steps = Math.floor((effAge - AGING.START_MS) / AGING.STEP_MS);
    const eff = 1 - steps * AGING.STEP_PENALTY;
    return Math.max(AGING.MIN_EFF, eff);
  }

  // 维修：清除损坏 + 重置老化计时
  repairCost(building, tech) {
    const base = { iron: 10 + building.level * 5 };
    const mul = tech ? tech.mul('repairCostMul') : 1;
    const cost = {};
    for (const k in base) cost[k] = Math.ceil(base[k] * mul);
    return cost;
  }

  // 存档 / 读档
  serialize(now) {
    return {
      nextSandstormIn: Math.max(0, this.nextSandstorm - now),
      nextMeteorIn: Math.max(0, this.nextMeteor - now),
      nextFlareIn: Math.max(0, this.nextFlare - now),
      nextDevilIn: Math.max(0, this.nextDevil - now),
    };
  }
  deserialize(data, now) {
    if (!data) return;
    const base = now || Date.now();
    this.nextSandstorm = base + (data.nextSandstormIn || SANDSTORM.FIRST_AT);
    this.nextMeteor = base + (data.nextMeteorIn || METEOR.FIRST_AT);
    this.nextFlare = base + (data.nextFlareIn || SOLAR_FLARE.FIRST_AT);
    this.nextDevil = base + (data.nextDevilIn || DUST_DEVIL.FIRST_AT);
    this.sandstorm = null;
    this.meteor = null;
    this.flare = null;
    this.devil = null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = { DisasterManager, SANDSTORM, METEOR, AGING, SOLAR_FLARE, DUST_DEVIL };
}
