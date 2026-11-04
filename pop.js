/* 星港 — pop.js：人口增长 / 生存需求 */

const POP_START = 2;          // 初始人口
const POP_BASE_CAP = 2;       // 着陆舱基础上限
const POP_GROWTH_MS = 20000;  // 基础 20 秒 +1

class Population {
  constructor() {
    this.count = POP_START;
    this.lastTick = Date.now();
  }

  cap(builder) {
    return POP_BASE_CAP + builder.totalPopCap();
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
    // 医院加速：growthBonus 缩短间隔
    const bonus = builder.totalGrowthBonus();
    const interval = POP_GROWTH_MS / (1 + bonus);
    if (now - this.lastTick < interval) return null;

    this.lastTick = now;
    const cap = this.cap(builder);
    if (this.count >= cap) return null;

    // 生存需求：水 + 食物
    if ((inv.water || 0) < 1 || (inv.food || 0) < 1) {
      return { event: 'starving', msg: '缺水或缺食物，人口停止增长' };
    }
    // 电力需求
    if (builder.totalPower() < builder.totalPowerUse()) {
      return { event: 'nopower', msg: '电力不足，人口停止增长' };
    }

    inv.water -= 1;
    inv.food -= 1;
    this.count++;
    return { event: 'grow', msg: `人口 +1（${this.count}/${cap}）` };
  }
}

if (typeof module !== 'undefined') { module.exports = { Population, POP_START, POP_BASE_CAP, POP_GROWTH_MS }; }
