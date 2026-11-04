/* 星港 — city.js：城市评级 / 胜利判定 */

// 城市评级：按人口
const CITY_RANKS = [
  { min: 100, name: '星港', icon: '🌟' },
  { min: 60, name: '大都会', icon: '🏙️' },
  { min: 30, name: '都市', icon: '🌆' },
  { min: 10, name: '城镇', icon: '🏘️' },
  { min: 0, name: '聚落', icon: '🏕️' },
];

function cityRank(pop) {
  for (const r of CITY_RANKS) {
    if (pop >= r.min) return r;
  }
  return CITY_RANKS[CITY_RANKS.length - 1];
}

// 下一级还差多少人口
function nextRankInfo(pop) {
  for (let i = 0; i < CITY_RANKS.length; i++) {
    if (pop >= CITY_RANKS[i].min) {
      if (i === 0) return null;  // 已最高
      return { next: CITY_RANKS[i - 1], need: CITY_RANKS[i - 1].min - pop };
    }
  }
  return null;
}

class City {
  constructor() {
    this.won = false;
    this.winTime = null;
  }

  rank(pop) {
    return cityRank(pop);
  }

  // 胜利检查：发射台建成
  checkVictory(builder) {
    if (!this.won && builder.hasLaunchpad()) {
      this.won = true;
      this.winTime = Date.now();
      return true;
    }
    return false;
  }
}

if (typeof module !== 'undefined') { module.exports = { City, cityRank, nextRankInfo, CITY_RANKS }; }
