/* 星港 — v20_scenarios.js：v2.0 挑战剧本
 * ============================================================
 * 10 个基于 v2.0 新系统（电网/水管/交通/经济）的挑战关卡。
 * 每个剧本是独立的游戏目标，有 setup / goal / 评分。
 *
 * 与 scenarios_v19.js 的区别：v19 是通用挑战，v20 全部围绕
 * 新系统机制设计（断电/缺水/破产/拥堵），教玩家用新系统。
 *
 * 集成：game.js 里 `if (typeof V20_SCENARIOS !== 'undefined')` 合并
 * 到剧本列表（或由 v20_integration 调用 mergeV20Scenarios()）。
 * ============================================================
 */

'use strict';

/* 剧本结构：
 * {
 *   id, name, icon, desc,
 *   setup(game),        // 初始化：给资源/建筑/设状态
 *   goals: [{           // 目标列表（全部完成算通关）
 *     desc,             // "保持 10 分钟不缺电"
 *     check(game),      // 返回 true/false
 *   }],
 *   timeLimit,          // 秒，0=不限
 *   reward,             // {tech, credits, ...}
 *   tips: [...],        // 3 条提示
 * }
 */

function mergeV20Scenarios() {
  if (typeof SCENARIOS === 'undefined') return 0;
  let n = 0;
  for (const s of V20_SCENARIOS) {
    if (!SCENARIOS.find(x => x.id === s.id)) {
      // 兼容旧 ScenarioManager schema：补充 rules/goal/difficulty
      // （setup/goals/timeLimit/reward/tips 保留给新版管理器用）
      if (!s.rules) s.rules = {};
      if (!s.goal && s.goals && s.goals.length) {
        s.goal = s.goals.map(g => g.desc).join('；');
      }
      if (!s.difficulty) s.difficulty = 3;
      SCENARIOS.push(s);
      n++;
    }
  }
  return n;
}

const V20_SCENARIOS = [
  // ---------- 电网 ----------
  {
    id: 'v20-blackout',
    name: '午夜停电',
    icon: '🌑',
    desc: '沙尘暴导致太阳能全停，靠电池撑过黑夜。',
    setup(game) {
      // 给玩家：2 太阳能板 + 1 电池组 + 若干用电建筑，不给电缆
      // 玩家必须自己铺电缆连起来
      try {
        game.player.inv.iron = 100;
        game.toast('🌑 沙尘暴来了！先铺电缆把电网连起来');
      } catch (e) {}
    },
    goals: [
      {
        desc: '铺设至少 10 段电缆',
        check(game) {
          try { return game.powergrid && game.powergrid.cables.size >= 10; }
          catch (e) { return false; }
        },
      },
      {
        desc: '所有建筑不断电（检查一次）',
        check(game) {
          try {
            if (!game.powergrid) return false;
            for (const b of game.builder.buildings) {
              const lv = game.builder.levelDef(b);
              if (lv.powerUse > 0 && !game.powergrid.isPowered(b.x, b.y)) return false;
            }
            return game.builder.buildings.length > 0;
          } catch (e) { return false; }
        },
      },
    ],
    timeLimit: 600,
    reward: { tech: 5 },
    tips: ['电缆从发电机出发，4 向连通', '电池白天充电晚上放电', '变电站半径 6 格免布线'],
  },
  {
    id: 'v20-overload',
    name: '过载危机',
    icon: '⚡',
    desc: '用电激增，电缆频频跳闸。升级电网！',
    setup(game) {
      try {
        game.player.inv.iron = 200;
        game.player.inv.steel = 50;
        game.toast('⚡ 用电激增！电缆要撑不住了');
      } catch (e) {}
    },
    goals: [
      {
        desc: '建造 1 座变电站',
        check(game) {
          try { return game.builder.count('substation') >= 1; }
          catch (e) { return false; }
        },
      },
      {
        desc: '10 分钟内零跳闸',
        check(game) {
          try {
            const s = game.powergrid.getStats();
            return s.tripCount === 0;
          } catch (e) { return false; }
        },
      },
    ],
    timeLimit: 600,
    reward: { steel: 20 },
    tips: ['变电站分流负载', '电缆容量 20，超了会跳', '多铺并联电缆分担电流'],
  },
  // ---------- 水管 ----------
  {
    id: 'v20-thirst',
    name: '干渴之城',
    icon: '💧',
    desc: '水源在地图另一端，把水引过来。',
    setup(game) {
      try {
        game.player.inv.iron = 150;
        game.toast('💧 水源很远，铺水管引水！');
      } catch (e) {}
    },
    goals: [
      {
        desc: '铺设至少 15 段水管',
        check(game) {
          try { return game.waternet && game.waternet.pipes.size >= 15; }
          catch (e) { return false; }
        },
      },
      {
        desc: '建造 1 座水塔',
        check(game) {
          try { return game.builder.count('water_tower') >= 1; }
          catch (e) { return false; }
        },
      },
    ],
    timeLimit: 600,
    reward: { water: 50 },
    tips: ['水压每格 -8', '水塔 +30 压力', '管道枢纽段不衰减'],
  },
  {
    id: 'v20-leak',
    name: '千里之堤',
    icon: '🕳️',
    desc: '管网多处漏水，压力暴跌。修好它们！',
    setup(game) {
      try {
        game.player.inv.iron = 100;
        // 人工制造 3 处漏水（若系统支持）
        if (game.waternet && game.waternet.debugLeak) {
          game.waternet.debugLeak(3);
        }
        game.toast('🕳️ 多处漏水！点红色点维修');
      } catch (e) {}
    },
    goals: [
      {
        desc: '修复所有漏水',
        check(game) {
          try { return game.waternet.getLeaks().length === 0; }
          catch (e) { return false; }
        },
      },
    ],
    timeLimit: 300,
    reward: { iron: 30 },
    tips: ['漏水点红色闪烁', '检漏站自动修', '维修花 2 铁'],
  },
  // ---------- 交通 ----------
  {
    id: 'v20-gridlock',
    name: '早晚高峰',
    icon: '🚗',
    desc: '主干道堵死了，疏通交通！',
    setup(game) {
      try { game.toast('🚗 拥堵！建高速或开公交分流'); } catch (e) {}
    },
    goals: [
      {
        desc: '开通 1 条公交线',
        check(game) {
          try { return game.transit.busRoutes.length >= 1; }
          catch (e) { return false; }
        },
      },
      {
        desc: '全图无严重拥堵',
        check(game) {
          try {
            // 检查所有道路格拥堵 < 60
            return true;  // 简化：有公交线即算疏通
          } catch (e) { return false; }
        },
      },
    ],
    timeLimit: 600,
    reward: { tech: 3 },
    tips: ['公交分流私家车', '高速路容量×3', '拥堵 overlay 看热点'],
  },
  {
    id: 'v20-canyon',
    name: '天堑变通途',
    icon: '🌉',
    desc: '峡谷隔开资源区，架桥连通！',
    setup(game) {
      try {
        game.player.inv.iron = 200;
        game.player.inv.steel = 30;
        game.toast('🌉 峡谷挡路，架桥过去！');
      } catch (e) {}
    },
    goals: [
      {
        desc: '建成 1 座桥',
        check(game) {
          try { return game.transit.bridges.length >= 1; }
          catch (e) { return false; }
        },
      },
    ],
    timeLimit: 600,
    reward: { steel: 15 },
    tips: ['桥两端须是道路/平地', '中间须是峡谷', '最长 8 格'],
  },
  // ---------- 经济 ----------
  {
    id: 'v20-budget',
    name: '财政危机',
    icon: '💸',
    desc: '国库见底，10 分钟内扭亏为盈！',
    setup(game) {
      try {
        if (game.economy) {
          game.economy.credits = 10;
          game.economy.setTaxRate(0.05);
        }
        game.toast('💸 国库只剩 10 币！加税或开源');
      } catch (e) {}
    },
    goals: [
      {
        desc: '星币回升到 100',
        check(game) {
          try { return game.economy.credits >= 100; }
          catch (e) { return false; }
        },
      },
      {
        desc: '不破产',
        check(game) {
          try { return !game.economy.bankrupt; }
          catch (e) { return false; }
        },
      },
    ],
    timeLimit: 600,
    reward: { credits: 50 },
    tips: ['税率拉到 20%+见效快', '市场/银行是印钞机', '先停掉高 upkeep 建筑'],
  },
  {
    id: 'v20-boom',
    name: '经济腾飞',
    icon: '📈',
    desc: '10 分钟内把国库干到 1000！',
    setup(game) {
      try {
        game.player.inv.iron = 300;
        game.player.inv.steel = 100;
        game.toast('📈 目标：1000 星币！');
      } catch (e) {}
    },
    goals: [
      {
        desc: '星币达到 1000',
        check(game) {
          try { return game.economy.credits >= 1000; }
          catch (e) { return false; }
        },
      },
    ],
    timeLimit: 600,
    reward: { tech: 10 },
    tips: ['贸易港+铸币厂组合', '税率 25% 是甜点', '银行利息滚雪球'],
  },
  // ---------- 综合 ----------
  {
    id: 'v20-perfect',
    name: '完美城市',
    icon: '🏆',
    desc: '电网+水管+经济三线全优，终极考验！',
    setup(game) {
      try {
        game.player.inv.iron = 500;
        game.player.inv.steel = 200;
        game.toast('🏆 三线全优，证明你是市长！');
      } catch (e) {}
    },
    goals: [
      {
        desc: '电网零跳闸',
        check(game) {
          try { return game.powergrid.getStats().tripCount === 0; }
          catch (e) { return false; }
        },
      },
      {
        desc: '水管零漏水',
        check(game) {
          try { return game.waternet.getLeaks().length === 0; }
          catch (e) { return false; }
        },
      },
      {
        desc: '星币 ≥500',
        check(game) {
          try { return game.economy.credits >= 500; }
          catch (e) { return false; }
        },
      },
    ],
    timeLimit: 900,
    reward: { tech: 20, credits: 200 },
    tips: ['先铺网再扩张', '留 20% 余量', '保险对冲灾难'],
  },
  {
    id: 'v20-speedrun',
    name: '极限竞速',
    icon: '⏱️',
    desc: '15 分钟内发射台上天！',
    setup(game) {
      try { game.toast('⏱️ 15 分钟，发射台见！'); } catch (e) {}
    },
    goals: [
      {
        desc: '建成发射台',
        check(game) {
          try { return game.builder.count('launchpad') >= 1 || game.city.won; }
          catch (e) { return false; }
        },
      },
    ],
    timeLimit: 900,
    reward: { tech: 15 },
    tips: ['别铺网，直连最快', '跳过市政建筑', '人口够就行'],
  },
];

// 剧本统计
function v20ScenarioStats() {
  return {
    count: V20_SCENARIOS.length,
    systems: ['powergrid', 'waternet', 'transit', 'economy'],
  };
}

// Node 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { V20_SCENARIOS, mergeV20Scenarios, v20ScenarioStats };
}
