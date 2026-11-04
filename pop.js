/* 星港 — pop.js：人口增长 / 生存需求（含科技加成） */

const POP_START = 2;          // 初始人口
const POP_BASE_CAP = 2;       // 着陆舱基础上限
const POP_GROWTH_MS = 20000;  // 基础 20 秒 +1

class Population {
  constructor() {
    this.count = POP_START;
    this.lastTick = Date.now();
    this.techTree = null;  // game.js 注入
  }

  cap(builder) {
    return POP_BASE_CAP + builder.totalPopCap();
  }

  techMul(key) {
    return this.techTree ? this.techTree.mul(key) : 1;
  }

  // 生存需求检查：每人每 tick 消耗 1 水 + 1 食物，需要电力 >= 人口
  // 返回 {ok, reason}
  checkNeeds(inv, builder) {
    if (this.count <= 0) return { ok: true };
    const power = builder.totalPower();
    const powerUse = builder.totalPowerUse();
    // 电力：供应 >= 需求
    if (power < powerUse) {
      return { ok: false, reason: '电力不足，生产停滞' };
    }
    return { ok: true };
  }

  update(now, inv, builder) {
    // 医院加速：growthBonus 缩短间隔；科技再加速
    const bonus = builder.totalGrowthBonus();
    const techGrowth = this.techMul('popGrowthMul');
    const interval = POP_GROWTH_MS / ((1 + bonus) * techGrowth);
    if (now - this.lastTick < interval) return null;

    this.lastTick = now;
    const cap = this.cap(builder);
    if (this.count >= cap) return null;

    // 生存需求：水 + 食物（科技可减免）
    const waterNeed = Math.max(1, Math.round(1 * this.techMul('waterUseMul')));
    const foodNeed = Math.max(1, Math.round(1 * this.techMul('foodUseMul')));
    if ((inv.water || 0) < waterNeed || (inv.food || 0) < foodNeed) {
      return { event: 'starving', msg: '缺水或缺食物，人口停止增长' };
    }
    // 电力需求
    if (builder.totalPower() < builder.totalPowerUse()) {
      return { event: 'nopower', msg: '电力不足，人口停止增长' };
    }

    inv.water -= waterNeed;
    inv.food -= foodNeed;
    this.count++;
    return { event: 'grow', msg: `人口 +1（${this.count}/${cap}）` };
  }
}

if (typeof module !== 'undefined') { module.exports = { Population, POP_START, POP_BASE_CAP, POP_GROWTH_MS }; }
