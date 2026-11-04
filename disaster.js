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

// ============ v1.2：5 种新灾难 ============
// 太阳耀斑：比太阳风暴更强，直接烧毁一栋电子建筑
const SOLAR_FLARE2 = {
  FIRST_AT: 15 * 60 * 1000,
  INTERVAL_MIN: 12 * 60 * 1000,
  INTERVAL_MAX: 20 * 60 * 1000,
  WARN_MS: 25 * 1000,
};
// 冰尘暴：极地风暴，温室-80%，水厂-50%
const ICE_STORM = {
  FIRST_AT: 10 * 60 * 1000,
  INTERVAL_MIN: 8 * 60 * 1000,
  INTERVAL_MAX: 14 * 60 * 1000,
  DURATION: 90 * 1000,
  WARN_MS: 20 * 1000,
  GREENHOUSE_PENALTY: 0.2,  // 温室只剩 20%
  WATERPLANT_PENALTY: 0.5,  // 水厂只剩 50%
};
// 火山喷发：火山 tile 喷发，半径 3 格内建筑损坏
const VOLCANO_ERUPT = {
  FIRST_AT: 18 * 60 * 1000,
  INTERVAL_MIN: 15 * 60 * 1000,
  INTERVAL_MAX: 25 * 60 * 1000,
  WARN_MS: 30 * 1000,
  RADIUS: 3,
};
// 叛乱：食物/水短缺时人口暴动
const REVOLT = {
  CHECK_INTERVAL: 60 * 1000,  // 每分钟检查一次
  DURATION: 60 * 1000,
  PROD_PENALTY: 0.5,  // 叛乱期间生产 -50%
};
// AI 故障：自动化建筑停机
const AI_FAULT = {
  FIRST_AT: 20 * 60 * 1000,
  INTERVAL_MIN: 15 * 60 * 1000,
  INTERVAL_MAX: 25 * 60 * 1000,
  DURATION: 45 * 1000,
  WARN_MS: 15 * 1000,
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
    // v1.2：新灾难
    this.flare2 = null;  // 太阳耀斑
    this.nextFlare2 = now + SOLAR_FLARE2.FIRST_AT;
    this.iceStorm = null;  // 冰尘暴
    this.nextIceStorm = now + ICE_STORM.FIRST_AT;
    this.volcanoWarn = null;  // 火山喷发预警
    this.nextVolcano = now + VOLCANO_ERUPT.FIRST_AT;
    this.revolt = null;  // 叛乱
    this.nextRevoltCheck = now + REVOLT.CHECK_INTERVAL;
    this.aiFault = null;  // AI 故障
    this.nextAiFault = now + AI_FAULT.FIRST_AT;
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

  // v1.2：冰尘暴是否生效
  iceStormActive(now) {
    return this.iceStorm && now >= this.iceStorm.warnUntil && now < this.iceStorm.until;
  }
  iceStormWarning(now) {
    return this.iceStorm && now < this.iceStorm.warnUntil;
  }
  // v1.2：温室/水厂倍率（冰尘暴期间）
  iceStormGreenhouseMul(now, tech) {
    if (!this.iceStormActive(now)) return 1;
    const relief = tech ? tech.mul('iceStormMul') : 1;
    return 1 - (1 - ICE_STORM.GREENHOUSE_PENALTY) * relief;
  }
  iceStormWaterplantMul(now, tech) {
    if (!this.iceStormActive(now)) return 1;
    const relief = tech ? tech.mul('iceStormMul') : 1;
    return 1 - (1 - ICE_STORM.WATERPLANT_PENALTY) * relief;
  }
  // v1.2：AI 故障是否生效（自动化建筑停机）
  aiFaultActive(now) {
    return this.aiFault && now >= this.aiFault.warnUntil && now < this.aiFault.until;
  }
  // v1.2：叛乱是否生效
  revoltActive(now) {
    return this.revolt && now < this.revolt.until;
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
          // v1.2：护盾闪避（取最高护盾）
          const shieldDodge = game.builder ? game.builder.shieldDodge() : 0;
          const techShield = tech ? (tech.mul('shieldMul') - 1) * 0.2 : 0;  // 科技额外+20%
          const dodgeChance = Math.min(0.95, 1 - dmgMul + shieldDodge + techShield);
          // meteorMul=0.5 → 50% 概率免伤；护盾直接加闪避
          if (Math.random() < dodgeChance) {
            emit('meteor-dodge', { x: m.x, y: m.y, shield: shieldDodge > 0 });
          } else {
            m.building.damaged = true;
            m.building.damagedAt = now;
            emit('meteor-hit', { x: m.x, y: m.y, building: m.building.id });
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

    // ============ v1.2：新灾难 ============
    const satBonus = game.builder ? game.builder.satelliteWarnBonus() : 0;

    // ---- 太阳耀斑（烧毁电子建筑） ----
    if (!this.flare2 && now >= this.nextFlare2) {
      const warnMs = SOLAR_FLARE2.WARN_MS + this.warnBonus(hasWeather) + satBonus;
      this.flare2 = { warnUntil: now + warnMs };
      emit('flare2-warn', { warnMs });
    }
    if (this.flare2 && now >= this.flare2.warnUntil) {
      this.flare2 = null;
      const gap = SOLAR_FLARE2.INTERVAL_MIN +
        Math.random() * (SOLAR_FLARE2.INTERVAL_MAX - SOLAR_FLARE2.INTERVAL_MIN);
      this.nextFlare2 = now + gap;
      // 烧毁一栋随机电子建筑
      const elec = game.builder.buildings.filter(b =>
        ['lab', 'command', 'weather', 'trade', 'antenna', 'satellite'].includes(b.id));
      if (elec.length > 0) {
        const target = elec[Math.floor(Math.random() * elec.length)];
        target.damaged = true;
        target.damagedAt = now;
        emit('flare2-hit', { building: target.id, x: target.x, y: target.y });
      } else {
        emit('flare2-miss', {});
      }
    }

    // ---- 冰尘暴 ----
    if (!this.iceStorm && now >= this.nextIceStorm) {
      const warnMs = ICE_STORM.WARN_MS + this.warnBonus(hasWeather) + satBonus;
      this.iceStorm = {
        warnUntil: now + warnMs,
        until: now + warnMs + ICE_STORM.DURATION,
      };
      emit('icestorm-warn', { warnMs });
    }
    if (this.iceStorm) {
      if (!this.iceStorm.warned && now >= this.iceStorm.warnUntil) {
        this.iceStorm.warned = true;
        emit('icestorm-start', {});
      }
      if (now >= this.iceStorm.until) {
        this.iceStorm = null;
        const gap = ICE_STORM.INTERVAL_MIN +
          Math.random() * (ICE_STORM.INTERVAL_MAX - ICE_STORM.INTERVAL_MIN);
        this.nextIceStorm = now + gap;
        emit('icestorm-end', {});
      }
    }

    // ---- 火山喷发 ----
    if (!this.volcanoWarn && now >= this.nextVolcano) {
      // 随机选一座火山
      const vols = (game.map.volcanoes && game.map.volcanoes.length > 0)
        ? game.map.volcanoes : [{ x: 10, y: 10 }];
      const v = vols[Math.floor(Math.random() * vols.length)];
      const warnMs = VOLCANO_ERUPT.WARN_MS + this.warnBonus(hasWeather) + satBonus;
      this.volcanoWarn = { warnUntil: now + warnMs, x: v.x, y: v.y };
      emit('volcano-warn', { x: v.x, y: v.y, warnMs });
    }
    if (this.volcanoWarn && now >= this.volcanoWarn.warnUntil) {
      const vw = this.volcanoWarn;
      this.volcanoWarn = null;
      const gap = VOLCANO_ERUPT.INTERVAL_MIN +
        Math.random() * (VOLCANO_ERUPT.INTERVAL_MAX - VOLCANO_ERUPT.INTERVAL_MIN);
      this.nextVolcano = now + gap;
      // 半径 R 内建筑损坏（科技减免）
      const relief = tech ? tech.mul('volcanoMul') : 1;
      let hitCount = 0;
      for (const b of game.builder.buildings) {
        const dist = Math.hypot(b.x - vw.x, b.y - vw.y);
        if (dist <= VOLCANO_ERUPT.RADIUS && Math.random() < relief) {
          b.damaged = true;
          b.damagedAt = now;
          hitCount++;
        }
      }
      // 喷发后火山周围新增稀土
      for (let i = 0; i < 4; i++) {
        const x = vw.x + Math.floor(Math.random() * 7) - 3;
        const y = vw.y + Math.floor(Math.random() * 7) - 3;
        if (game.map.inBounds(x, y) && !game.map.resource[y][x] &&
            game.map.terrain[y][x] !== 3) {
          game.map.resource[y][x] = 'rare';
        }
      }
      emit('volcano-erupt', { x: vw.x, y: vw.y, hitCount });
    }

    // ---- 叛乱（食物/水短缺时） ----
    if (!this.revolt && now >= this.nextRevoltCheck) {
      this.nextRevoltCheck = now + REVOLT.CHECK_INTERVAL;
      const immune = tech && tech.flag('revoltImmune');
      if (!immune) {
        const inv = game.player.inv;
        const pop = game.pop.count;
        // 人口>10 且食物/水为 0 时可能叛乱
        if (pop > 10 && ((inv.food || 0) <= 0 || (inv.water || 0) <= 0)) {
          const revoltMul = tech ? tech.mul('revoltMul') : 1;
          if (Math.random() < 0.5 * revoltMul) {
            this.revolt = { until: now + REVOLT.DURATION };
            emit('revolt-start', {});
          }
        }
      }
    }
    if (this.revolt && now >= this.revolt.until) {
      this.revolt = null;
      // 叛乱结束：人口 -10%
      const loss = Math.floor(game.pop.count * 0.1);
      game.pop.count = Math.max(2, game.pop.count - loss);
      emit('revolt-end', { loss });
    }

    // ---- AI 故障 ----
    if (!this.aiFault && now >= this.nextAiFault) {
      const warnMs = AI_FAULT.WARN_MS + this.warnBonus(hasWeather) + satBonus;
      this.aiFault = {
        warnUntil: now + warnMs,
        until: now + warnMs + AI_FAULT.DURATION,
      };
      emit('aifault-warn', { warnMs });
    }
    if (this.aiFault) {
      if (!this.aiFault.warned && now >= this.aiFault.warnUntil) {
        this.aiFault.warned = true;
        emit('aifault-start', {});
      }
      if (now >= this.aiFault.until) {
        this.aiFault = null;
        const gap = AI_FAULT.INTERVAL_MIN +
          Math.random() * (AI_FAULT.INTERVAL_MAX - AI_FAULT.INTERVAL_MIN);
        this.nextAiFault = now + gap;
        emit('aifault-end', {});
      }
    }
  }

  // v1.2：叛乱生产惩罚
  revoltProdMul(now) {
    return this.revoltActive(now) ? REVOLT.PROD_PENALTY : 1;
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
      nextFlare2In: Math.max(0, this.nextFlare2 - now),
      nextIceStormIn: Math.max(0, this.nextIceStorm - now),
      nextVolcanoIn: Math.max(0, this.nextVolcano - now),
      nextAiFaultIn: Math.max(0, this.nextAiFault - now),
    };
  }
  deserialize(data, now) {
    if (!data) return;
    const base = now || Date.now();
    this.nextSandstorm = base + (data.nextSandstormIn || SANDSTORM.FIRST_AT);
    this.nextMeteor = base + (data.nextMeteorIn || METEOR.FIRST_AT);
    this.nextFlare = base + (data.nextFlareIn || SOLAR_FLARE.FIRST_AT);
    this.nextDevil = base + (data.nextDevilIn || DUST_DEVIL.FIRST_AT);
    this.nextFlare2 = base + (data.nextFlare2In || SOLAR_FLARE2.FIRST_AT);
    this.nextIceStorm = base + (data.nextIceStormIn || ICE_STORM.FIRST_AT);
    this.nextVolcano = base + (data.nextVolcanoIn || VOLCANO_ERUPT.FIRST_AT);
    this.nextAiFault = base + (data.nextAiFaultIn || AI_FAULT.FIRST_AT);
    this.nextRevoltCheck = base + REVOLT.CHECK_INTERVAL;
    this.sandstorm = null;
    this.meteor = null;
    this.flare = null;
    this.devil = null;
    this.flare2 = null;
    this.iceStorm = null;
    this.volcanoWarn = null;
    this.revolt = null;
    this.aiFault = null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = { DisasterManager, SANDSTORM, METEOR, AGING, SOLAR_FLARE, DUST_DEVIL, SOLAR_FLARE2, ICE_STORM, VOLCANO_ERUPT, REVOLT, AI_FAULT };
}
