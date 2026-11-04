/* 星港 — trade.js：v1.2 地球贸易船 / 动态价格
 * 贸易船定期来访，停留 60 秒；价格随玩家库存动态浮动（供需）。
 * 基础配方 8 种（game.js 的 TRADE_OFFERS）+ 新增 8 种 = 16 种。
 */

// v1.2：新增 8 种贸易配方（含新资源）
const TRADE_OFFERS_V12 = [
  { id: 't9',  give: { uranium: 5 },  get: { steel: 20 },  name: '铀矿→钢材' },
  { id: 't10', give: { he3: 2 },      get: { tech: 15 },   name: '氦3→科技' },
  { id: 't11', give: { steel: 30 },   get: { uranium: 6 }, name: '钢材→铀矿' },
  { id: 't12', give: { tech: 20 },    get: { he3: 3 },     name: '科技→氦3' },
  { id: 't13', give: { food: 50 },    get: { steel: 15 },  name: '食物→钢材（大宗）' },
  { id: 't14', give: { water: 50 },   get: { rare: 12 },   name: '水→稀土（大宗）' },
  { id: 't15', give: { iron: 100 },   get: { tech: 8 },    name: '铁矿→科技（大宗）' },
  { id: 't16', give: { rare: 30 },    get: { uranium: 8 }, name: '稀土→铀矿' },
];

// 贸易船参数
const TRADE_SHIP = {
  FIRST_AT: 3 * 60 * 1000,       // 首次 3 分钟后
  INTERVAL_MIN: 5 * 60 * 1000,   // 间隔 5~8 分钟
  INTERVAL_MAX: 8 * 60 * 1000,
  STAY_MS: 60 * 1000,            // 停留 60 秒
  WARN_MS: 20 * 1000,            // 预警 20 秒
};

// v1.2：动态价格引擎
// 原理：玩家某种资源库存越高 → 卖出价越低（供过于求）；库存越低 → 买入越贵
class PriceEngine {
  constructor() {
    // 基准库存（用于归一化）
    this.baseline = {
      iron: 100, ice: 80, rare: 40, uranium: 20, he3: 10,
      water: 80, food: 80, steel: 60, tech: 30,
    };
  }

  // 动态倍率：0.5 ~ 2.0
  // playerGives: 玩家付出的资源 → 库存越高，换得越少（贬值）
  // playerGets: 玩家获得的资源 → 库存越高，越不值钱（买入打折）
  rate(giveKey, giveAmt, getKey, getAmt, inv) {
    const baseGive = this.baseline[giveKey] || 50;
    const baseGet = this.baseline[getKey] || 50;
    const giveStock = (inv[giveKey] || 0) / baseGive;
    const getStock = (inv[getKey] || 0) / baseGet;
    // 玩家付出的东西越多越不值钱：0.5 ~ 1.0
    const giveMul = Math.max(0.5, Math.min(1.0, 1.2 - giveStock * 0.3));
    // 玩家要的东西越缺越贵：1.0 ~ 2.0
    const getMul = Math.max(1.0, Math.min(2.0, 0.8 + getStock * 0.3));
    // 最终：付出贬值 + 获得涨价 → 实际到手 = 基础 × giveMul / getMul
    return Math.max(0.3, Math.min(3.0, giveMul / getMul));
  }

  // 计算实际交易量（返回 {give, get} 实际数值）
  calcOffer(offer, inv, tradeMul) {
    const giveKey = Object.keys(offer.give)[0];
    const getKey = Object.keys(offer.get)[0];
    const giveAmt = offer.give[giveKey];
    const getAmt = offer.get[getKey];
    const dynRate = this.rate(giveKey, giveAmt, getKey, getAmt, inv);
    const finalGet = Math.max(1, Math.floor(getAmt * dynRate * (tradeMul || 1)));
    return {
      give: offer.give,
      get: { [getKey]: finalGet },
      rate: dynRate,
      name: offer.name,
      id: offer.id,
    };
  }

  // 价格趋势描述（UI 用）
  trendText(rate) {
    if (rate >= 1.3) return '📈 紧俏';
    if (rate >= 1.0) return '➡️ 平稳';
    if (rate >= 0.7) return '📉 宽松';
    return '💸 暴跌';
  }
}

class TradeShipManager {
  constructor() {
    const now = Date.now();
    this.ship = null;  // {warnUntil, until}
    this.nextShip = now + TRADE_SHIP.FIRST_AT;
    this.priceEngine = new PriceEngine();
    this.onEvent = null;
    this.visitCount = 0;
  }

  // 贸易船是否在预警
  shipWarning(now) {
    return this.ship && now < this.ship.warnUntil;
  }

  // 贸易船是否停靠中
  shipDocked(now) {
    return this.ship && now >= this.ship.warnUntil && now < this.ship.until;
  }

  // 剩余停靠时间（秒）
  dockTimeLeft(now) {
    if (!this.shipDocked(now)) return 0;
    return Math.ceil((this.ship.until - now) / 1000);
  }

  update(now, game) {
    const emit = (type, data) => { if (this.onEvent) this.onEvent(type, data); };
    // 科技：贸易船间隔缩短
    const tech = game.tech;
    const intervalMul = tech ? tech.mul('tradeShipMul') : 1;

    if (!this.ship && now >= this.nextShip) {
      // 需要贸易站
      if (game.builder.count('trade') > 0) {
        const warnMs = TRADE_SHIP.WARN_MS;
        this.ship = {
          warnUntil: now + warnMs,
          until: now + warnMs + TRADE_SHIP.STAY_MS,
        };
        this.visitCount++;
        emit('ship-warn', { warnMs, visit: this.visitCount });
      } else {
        // 没有贸易站，推迟
        this.nextShip = now + 60000;
      }
    }
    if (this.ship) {
      if (!this.ship.warned && now >= this.ship.warnUntil) {
        this.ship.warned = true;
        emit('ship-dock', { visit: this.visitCount });
      }
      if (now >= this.ship.until) {
        this.ship = null;
        const gap = (TRADE_SHIP.INTERVAL_MIN +
          Math.random() * (TRADE_SHIP.INTERVAL_MAX - TRADE_SHIP.INTERVAL_MIN)) * intervalMul;
        this.nextShip = now + gap;
        emit('ship-leave', {});
      }
    }
  }

  // 获取当前可用配方（含动态价格）
  getOffers(inv, tradeMul) {
    // 基础 8 种从 game.js 拿，这里只处理 v1.2 的 8 种
    // 实际调用时 game.js 会合并
    return TRADE_OFFERS_V12.map(o => this.priceEngine.calcOffer(o, inv, tradeMul));
  }

  // 存档 / 读档
  serialize(now) {
    return {
      nextShipIn: Math.max(0, this.nextShip - now),
      visitCount: this.visitCount,
    };
  }
  deserialize(data, now) {
    if (!data) return;
    const base = now || Date.now();
    this.nextShip = base + (data.nextShipIn || TRADE_SHIP.FIRST_AT);
    this.visitCount = data.visitCount || 0;
    this.ship = null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = { TRADE_OFFERS_V12, TRADE_SHIP, PriceEngine, TradeShipManager };
}
