/* 星港 — trade_v31.js：v3.1 星际贸易网络（工人 1/7）
 * 接入函数：TradeV31Integration.attach(game) —— 挂 game.tradeV31（+ game.tradeV31Tick/save/load）
 *           mergeTradeV31() —— 把 12 个伙伴的特产配方并入全局 TRADE_OFFERS（幂等，旧表不存在时只计数）
 *           selfTestTradeV31() —— 自检（报价/航线/tick/关税/走私/护卫/合同/存档）
 * 依赖：只读引用全局 BUILDINGS / TECH_DEFS / TRADE_OFFERS（均用 typeof 守卫，不存在也不报错）；
 *       不依赖任何其他 v31 文件；不写 document / window（纯逻辑，可在 node vm 中加载）。
 * 数据规模：商品 24 种 / 贸易伙伴 12 个 / 价格事件 70 个 / 航线 60 条 / 合同 138 份 /
 *           走私品 8 种·黑市中间人 6 个 / 护卫类型 8 种·遭遇战 72 场 /
 *           贸易站 3 级 / 关税 6 类 × 7 档。
 * 机制（全部实算，非文本填充）：
 *   动态价格 = 基价 × (基库存/供给)^弹性 × (需求/基库存)^弹性 × 关系因子 × 冲击因子 × 噪声，
 *   批量折扣 / 进出口加价 / 议价 / 均线与趋势 / 套利；航线净收益 = 毛利 − 手续费 − 关税 − 维护，
 *   按状态损耗；关税 0–30% 可调，收入/关系/走私激励均由档位表算出，最优税率数值搜索；
 *   走私 = 黑市价 ×(1−中间人抽成)，查获概率 = 基础风险 + 关税×1.2 + 热度 − 隐匿，查获罚没 + 罚款；
 *   护卫遭遇战按战力对比 + 逃跑 roll；合同分 3 阶段、限时、提前完成有加急奖励、过期罚关系；
 *   经济影响 = 航线净收益/贸易量/平均关系/走私热度 → 星币/分钟、人口增速倍率、幸福度增量、食物/分钟，
 *   经 TradeEconomyV31.applyToGame 写入 game.economy.credits / happiness 与 player.inv.food。
 * 命名：顶层标识符全部带 v31 / TRADE31 前缀；TERRAIN、Population、TUTORIAL_STEPS、DS_TUNE、
 *       OVERLAY_MODES、BUILDINGS、TECH_DEFS 等已有名只读引用、绝不重声明。
 * 生成方式：/tmp/gen_trade_v31.py（Python 生成器，不在项目内）生成数据表 + 实算模板。
 */
'use strict';

const TRADE31_VERSION = '3.1.0';
const TRADE31_COUNT = { goods: 24, partners: 12, events: 70, routes: 60, contracts: 138 };

/* ============ §1 商品表（24 种） ============ */
const TRADE31_GOODS = [
  {
    "id": "iron",
    "name": "铁矿",
    "icon": "⛏️",
    "cat": "raw",
    "base": 12,
    "elasticity": 0.55,
    "volatility": 0.12,
    "stockBase": 400,
    "demandBase": 329,
    "supplyBase": 386,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 1.39,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.091,
    "qualityPremium": 0.189,
    "tariffCat": "raw",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.033,
    "supplyGrowth": 0.035,
    "shockSensitivity": 0.561,
    "monthlyDemand": [
      288,
      310,
      351,
      376,
      265,
      339,
      325,
      403,
      275,
      324,
      363,
      374
    ],
    "monthlySupply": [
      367,
      379,
      392,
      330,
      414,
      412,
      319,
      408,
      406,
      366,
      416,
      394
    ],
    "priceSeeds": [
      12.81,
      10.97,
      13.54,
      14.32,
      14.75,
      11.66,
      10.71,
      10.75,
      14.84,
      11.65,
      11.74,
      13.53
    ]
  },
  {
    "id": "ice",
    "name": "冰矿",
    "icon": "🧊",
    "cat": "raw",
    "base": 9,
    "elasticity": 0.6,
    "volatility": 0.14,
    "stockBase": 350,
    "demandBase": 320,
    "supplyBase": 354,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 1.0,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.115,
    "qualityPremium": 0.211,
    "tariffCat": "raw",
    "shelfLifeTicks": 0,
    "demandGrowth": -0.001,
    "supplyGrowth": 0.015,
    "shockSensitivity": 0.676,
    "monthlyDemand": [
      287,
      320,
      327,
      365,
      231,
      324,
      340,
      363,
      269,
      309,
      340,
      349
    ],
    "monthlySupply": [
      303,
      380,
      424,
      303,
      349,
      400,
      333,
      337,
      359,
      292,
      358,
      381
    ],
    "priceSeeds": [
      11.07,
      9.79,
      10.7,
      7.39,
      8.61,
      8.98,
      9.99,
      7.72,
      8.3,
      9.83,
      8.91,
      8.83
    ]
  },
  {
    "id": "water",
    "name": "水",
    "icon": "💧",
    "cat": "life",
    "base": 14,
    "elasticity": 0.7,
    "volatility": 0.1,
    "stockBase": 300,
    "demandBase": 308,
    "supplyBase": 292,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 0.86,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.079,
    "qualityPremium": 0.13,
    "tariffCat": "life",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.038,
    "supplyGrowth": -0.009,
    "shockSensitivity": 0.618,
    "monthlyDemand": [
      238,
      300,
      321,
      347,
      271,
      318,
      357,
      354,
      255,
      262,
      305,
      379
    ],
    "monthlySupply": [
      276,
      273,
      302,
      273,
      320,
      324,
      291,
      285,
      329,
      235,
      287,
      296
    ],
    "priceSeeds": [
      14.68,
      11.91,
      16.41,
      11.58,
      13.94,
      14.52,
      17.15,
      12.23,
      16.06,
      16.1,
      14.83,
      13.4
    ]
  },
  {
    "id": "food",
    "name": "食物",
    "icon": "🌾",
    "cat": "life",
    "base": 18,
    "elasticity": 0.85,
    "volatility": 0.16,
    "stockBase": 300,
    "demandBase": 247,
    "supplyBase": 349,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 2.7,
    "perishable": 1,
    "decayPerTick": 0.02,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.116,
    "qualityPremium": 0.129,
    "tariffCat": "life",
    "shelfLifeTicks": 120,
    "demandGrowth": -0.011,
    "supplyGrowth": 0.021,
    "shockSensitivity": 1.023,
    "monthlyDemand": [
      206,
      218,
      239,
      292,
      202,
      216,
      251,
      283,
      214,
      226,
      286,
      274
    ],
    "monthlySupply": [
      286,
      370,
      351,
      325,
      337,
      403,
      289,
      325,
      349,
      342,
      338,
      383
    ],
    "priceSeeds": [
      17.78,
      20.38,
      22.04,
      16.57,
      16.35,
      20.83,
      15.44,
      18.49,
      19.07,
      16.65,
      21.99,
      18.5
    ]
  },
  {
    "id": "steel",
    "name": "钢材",
    "icon": "🔩",
    "cat": "material",
    "base": 32,
    "elasticity": 0.5,
    "volatility": 0.1,
    "stockBase": 200,
    "demandBase": 187,
    "supplyBase": 171,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 3.87,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.068,
    "qualityPremium": 0.072,
    "tariffCat": "material",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.039,
    "supplyGrowth": -0.018,
    "shockSensitivity": 0.606,
    "monthlyDemand": [
      144,
      163,
      209,
      233,
      150,
      176,
      208,
      226,
      138,
      179,
      194,
      214
    ],
    "monthlySupply": [
      160,
      156,
      185,
      170,
      155,
      196,
      152,
      173,
      199,
      140,
      184,
      180
    ],
    "priceSeeds": [
      26.72,
      37.78,
      31.17,
      39.34,
      32.66,
      38.46,
      29.31,
      35.52,
      28.76,
      32.98,
      31.99,
      36.64
    ]
  },
  {
    "id": "rare",
    "name": "稀土",
    "icon": "💎",
    "cat": "material",
    "base": 55,
    "elasticity": 0.65,
    "volatility": 0.18,
    "stockBase": 120,
    "demandBase": 137,
    "supplyBase": 150,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 2.04,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 20,
    "bulkDiscount": 0.112,
    "qualityPremium": 0.22,
    "tariffCat": "material",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.019,
    "supplyGrowth": -0.008,
    "shockSensitivity": 0.627,
    "monthlyDemand": [
      102,
      132,
      145,
      150,
      122,
      134,
      143,
      157,
      112,
      135,
      156,
      172
    ],
    "monthlySupply": [
      142,
      138,
      152,
      129,
      137,
      169,
      138,
      144,
      160,
      141,
      139,
      169
    ],
    "priceSeeds": [
      48.3,
      45.08,
      48.88,
      66.53,
      65.45,
      52.95,
      67.51,
      59.56,
      48.63,
      60.26,
      51.48,
      60.17
    ]
  },
  {
    "id": "uranium",
    "name": "铀矿",
    "icon": "☢️",
    "cat": "material",
    "base": 90,
    "elasticity": 0.75,
    "volatility": 0.22,
    "stockBase": 60,
    "demandBase": 44,
    "supplyBase": 76,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 2.99,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 1,
    "bulkThreshold": 20,
    "bulkDiscount": 0.065,
    "qualityPremium": 0.133,
    "tariffCat": "material",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.028,
    "supplyGrowth": -0.008,
    "shockSensitivity": 1.012,
    "monthlyDemand": [
      33,
      40,
      49,
      52,
      32,
      43,
      50,
      52,
      36,
      42,
      46,
      56
    ],
    "monthlySupply": [
      61,
      72,
      88,
      74,
      82,
      88,
      71,
      72,
      78,
      75,
      69,
      88
    ],
    "priceSeeds": [
      77.2,
      77.74,
      77.28,
      93.54,
      108.44,
      107.72,
      100.76,
      86.6,
      92.15,
      101.67,
      87.05,
      75.81
    ]
  },
  {
    "id": "he3",
    "name": "氦-3",
    "icon": "🎈",
    "cat": "energy",
    "base": 140,
    "elasticity": 0.8,
    "volatility": 0.25,
    "stockBase": 40,
    "demandBase": 39,
    "supplyBase": 39,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 3.19,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 20,
    "bulkDiscount": 0.107,
    "qualityPremium": 0.207,
    "tariffCat": "energy",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.042,
    "supplyGrowth": -0.01,
    "shockSensitivity": 0.876,
    "monthlyDemand": [
      30,
      35,
      44,
      48,
      33,
      33,
      42,
      43,
      33,
      33,
      44,
      50
    ],
    "monthlySupply": [
      36,
      37,
      39,
      32,
      37,
      42,
      37,
      37,
      45,
      33,
      41,
      43
    ],
    "priceSeeds": [
      133.63,
      173.33,
      139.84,
      160.05,
      135.26,
      140.07,
      126.77,
      167.65,
      174.23,
      119.63,
      123.88,
      137.83
    ]
  },
  {
    "id": "tech",
    "name": "科技点",
    "icon": "🔬",
    "cat": "tech",
    "base": 60,
    "elasticity": 0.45,
    "volatility": 0.1,
    "stockBase": 150,
    "demandBase": 133,
    "supplyBase": 128,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 2.55,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 20,
    "bulkDiscount": 0.092,
    "qualityPremium": 0.224,
    "tariffCat": "tech",
    "shelfLifeTicks": 0,
    "demandGrowth": -0.01,
    "supplyGrowth": 0.002,
    "shockSensitivity": 0.584,
    "monthlyDemand": [
      96,
      112,
      145,
      151,
      102,
      112,
      143,
      146,
      114,
      119,
      138,
      148
    ],
    "monthlySupply": [
      115,
      116,
      144,
      123,
      129,
      139,
      117,
      117,
      131,
      125,
      139,
      146
    ],
    "priceSeeds": [
      54.49,
      61.76,
      52.97,
      67.56,
      53.62,
      65.23,
      55.24,
      56.28,
      58.25,
      69.44,
      48.44,
      59.74
    ]
  },
  {
    "id": "polymer",
    "name": "聚合物",
    "icon": "🧪",
    "cat": "material",
    "base": 28,
    "elasticity": 0.55,
    "volatility": 0.12,
    "stockBase": 180,
    "demandBase": 224,
    "supplyBase": 163,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 3.99,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.067,
    "qualityPremium": 0.058,
    "tariffCat": "material",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.027,
    "supplyGrowth": 0.028,
    "shockSensitivity": 0.76,
    "monthlyDemand": [
      177,
      200,
      246,
      255,
      201,
      208,
      247,
      272,
      169,
      192,
      218,
      266
    ],
    "monthlySupply": [
      140,
      147,
      182,
      144,
      178,
      180,
      159,
      160,
      186,
      148,
      151,
      191
    ],
    "priceSeeds": [
      33.09,
      27.12,
      24.86,
      29.07,
      28.57,
      29.24,
      31.03,
      27.35,
      34.82,
      26.92,
      26.3,
      29.17
    ]
  },
  {
    "id": "glass",
    "name": "特种玻璃",
    "icon": "🔍",
    "cat": "material",
    "base": 36,
    "elasticity": 0.5,
    "volatility": 0.11,
    "stockBase": 150,
    "demandBase": 191,
    "supplyBase": 135,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 3.74,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.052,
    "qualityPremium": 0.119,
    "tariffCat": "material",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.043,
    "supplyGrowth": 0.027,
    "shockSensitivity": 0.455,
    "monthlyDemand": [
      141,
      169,
      202,
      242,
      141,
      167,
      188,
      214,
      143,
      191,
      218,
      209
    ],
    "monthlySupply": [
      112,
      122,
      145,
      125,
      139,
      154,
      119,
      129,
      161,
      132,
      131,
      137
    ],
    "priceSeeds": [
      39.59,
      35.06,
      39.43,
      43.48,
      30.92,
      43.83,
      38.64,
      37.91,
      31.5,
      29.27,
      43.18,
      35.25
    ]
  },
  {
    "id": "medicine",
    "name": "药品",
    "icon": "💊",
    "cat": "life",
    "base": 75,
    "elasticity": 0.9,
    "volatility": 0.15,
    "stockBase": 90,
    "demandBase": 75,
    "supplyBase": 91,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 1.69,
    "perishable": 1,
    "decayPerTick": 0.02,
    "contraband": 0,
    "bulkThreshold": 20,
    "bulkDiscount": 0.117,
    "qualityPremium": 0.055,
    "tariffCat": "life",
    "shelfLifeTicks": 120,
    "demandGrowth": 0.025,
    "supplyGrowth": -0.019,
    "shockSensitivity": 0.824,
    "monthlyDemand": [
      55,
      67,
      83,
      89,
      58,
      71,
      80,
      82,
      64,
      72,
      80,
      87
    ],
    "monthlySupply": [
      85,
      95,
      97,
      84,
      82,
      100,
      76,
      95,
      97,
      79,
      93,
      97
    ],
    "priceSeeds": [
      79.4,
      91.44,
      73.64,
      79.6,
      91.86,
      88.43,
      83.95,
      65.92,
      92.26,
      74.23,
      69.15,
      69.82
    ]
  },
  {
    "id": "oxygen",
    "name": "氧气",
    "icon": "🫧",
    "cat": "life",
    "base": 11,
    "elasticity": 0.65,
    "volatility": 0.09,
    "stockBase": 320,
    "demandBase": 256,
    "supplyBase": 275,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 1.41,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.048,
    "qualityPremium": 0.136,
    "tariffCat": "life",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.048,
    "supplyGrowth": -0.002,
    "shockSensitivity": 0.578,
    "monthlyDemand": [
      214,
      227,
      251,
      310,
      221,
      247,
      280,
      327,
      230,
      261,
      296,
      327
    ],
    "monthlySupply": [
      235,
      280,
      293,
      236,
      296,
      327,
      231,
      280,
      329,
      246,
      256,
      313
    ],
    "priceSeeds": [
      10.62,
      10.32,
      10.89,
      11.97,
      8.87,
      8.85,
      11.39,
      10.68,
      10.49,
      10.91,
      12.95,
      11.38
    ]
  },
  {
    "id": "seeds",
    "name": "改良种子",
    "icon": "🌱",
    "cat": "life",
    "base": 48,
    "elasticity": 0.7,
    "volatility": 0.13,
    "stockBase": 110,
    "demandBase": 138,
    "supplyBase": 87,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 2.95,
    "perishable": 1,
    "decayPerTick": 0.02,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.047,
    "qualityPremium": 0.203,
    "tariffCat": "life",
    "shelfLifeTicks": 120,
    "demandGrowth": 0.01,
    "supplyGrowth": -0.011,
    "shockSensitivity": 0.853,
    "monthlyDemand": [
      123,
      126,
      149,
      171,
      111,
      138,
      135,
      151,
      119,
      142,
      149,
      156
    ],
    "monthlySupply": [
      72,
      88,
      104,
      84,
      94,
      88,
      79,
      83,
      96,
      77,
      84,
      88
    ],
    "priceSeeds": [
      46.4,
      39.48,
      49.29,
      45.42,
      54.23,
      56.46,
      39.38,
      41.95,
      45.68,
      51.59,
      47.57,
      53.73
    ]
  },
  {
    "id": "machine",
    "name": "精密机械",
    "icon": "⚙️",
    "cat": "tech",
    "base": 110,
    "elasticity": 0.6,
    "volatility": 0.14,
    "stockBase": 70,
    "demandBase": 68,
    "supplyBase": 90,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 2.52,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 20,
    "bulkDiscount": 0.073,
    "qualityPremium": 0.067,
    "tariffCat": "tech",
    "shelfLifeTicks": 0,
    "demandGrowth": -0.003,
    "supplyGrowth": -0.003,
    "shockSensitivity": 0.662,
    "monthlyDemand": [
      49,
      58,
      71,
      86,
      50,
      59,
      68,
      84,
      55,
      61,
      66,
      85
    ],
    "monthlySupply": [
      74,
      87,
      102,
      76,
      92,
      100,
      81,
      83,
      105,
      76,
      97,
      98
    ],
    "priceSeeds": [
      90.56,
      108.49,
      100.63,
      129.19,
      132.41,
      113.65,
      88.57,
      94.54,
      106.66,
      126.81,
      99.36,
      113.0
    ]
  },
  {
    "id": "chip",
    "name": "量子芯片",
    "icon": "💾",
    "cat": "tech",
    "base": 180,
    "elasticity": 0.7,
    "volatility": 0.2,
    "stockBase": 45,
    "demandBase": 57,
    "supplyBase": 33,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 2.57,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 20,
    "bulkDiscount": 0.048,
    "qualityPremium": 0.108,
    "tariffCat": "tech",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.014,
    "supplyGrowth": -0.005,
    "shockSensitivity": 0.7,
    "monthlyDemand": [
      44,
      58,
      63,
      70,
      49,
      53,
      58,
      73,
      49,
      58,
      65,
      65
    ],
    "monthlySupply": [
      32,
      33,
      35,
      32,
      35,
      35,
      32,
      33,
      36,
      31,
      35,
      38
    ],
    "priceSeeds": [
      188.76,
      223.1,
      200.49,
      204.04,
      199.37,
      200.76,
      175.14,
      223.98,
      218.57,
      177.35,
      198.07,
      150.08
    ]
  },
  {
    "id": "fuel",
    "name": "聚变燃料",
    "icon": "⛽",
    "cat": "energy",
    "base": 95,
    "elasticity": 0.75,
    "volatility": 0.19,
    "stockBase": 80,
    "demandBase": 59,
    "supplyBase": 89,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 2.32,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 20,
    "bulkDiscount": 0.046,
    "qualityPremium": 0.186,
    "tariffCat": "energy",
    "shelfLifeTicks": 0,
    "demandGrowth": -0.014,
    "supplyGrowth": 0.019,
    "shockSensitivity": 1.003,
    "monthlyDemand": [
      45,
      55,
      57,
      68,
      49,
      58,
      68,
      67,
      51,
      53,
      59,
      73
    ],
    "monthlySupply": [
      78,
      91,
      89,
      73,
      95,
      91,
      80,
      90,
      100,
      80,
      95,
      101
    ],
    "priceSeeds": [
      82.57,
      89.6,
      109.19,
      82.18,
      112.69,
      101.55,
      90.1,
      99.49,
      89.53,
      85.53,
      95.06,
      76.94
    ]
  },
  {
    "id": "textile",
    "name": "防护织物",
    "icon": "🧵",
    "cat": "material",
    "base": 24,
    "elasticity": 0.5,
    "volatility": 0.1,
    "stockBase": 200,
    "demandBase": 258,
    "supplyBase": 169,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 0.6,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.038,
    "qualityPremium": 0.19,
    "tariffCat": "material",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.032,
    "supplyGrowth": 0.018,
    "shockSensitivity": 0.483,
    "monthlyDemand": [
      205,
      238,
      298,
      299,
      233,
      237,
      273,
      293,
      228,
      224,
      296,
      294
    ],
    "monthlySupply": [
      168,
      180,
      181,
      163,
      162,
      170,
      147,
      176,
      171,
      163,
      159,
      176
    ],
    "priceSeeds": [
      19.48,
      22.77,
      21.97,
      20.05,
      19.46,
      25.31,
      23.96,
      26.26,
      25.46,
      25.11,
      21.35,
      25.93
    ]
  },
  {
    "id": "luxury",
    "name": "奢侈品",
    "icon": "👑",
    "cat": "luxury",
    "base": 220,
    "elasticity": 0.95,
    "volatility": 0.28,
    "stockBase": 30,
    "demandBase": 39,
    "supplyBase": 22,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 0.67,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 20,
    "bulkDiscount": 0.114,
    "qualityPremium": 0.243,
    "tariffCat": "luxury",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.023,
    "supplyGrowth": 0.004,
    "shockSensitivity": 1.196,
    "monthlyDemand": [
      28,
      34,
      38,
      45,
      29,
      36,
      42,
      45,
      29,
      37,
      37,
      45
    ],
    "monthlySupply": [
      20,
      21,
      24,
      19,
      19,
      24,
      19,
      22,
      23,
      19,
      22,
      24
    ],
    "priceSeeds": [
      228.77,
      180.98,
      211.74,
      186.41,
      270.44,
      248.26,
      203.21,
      220.45,
      273.65,
      252.95,
      226.44,
      189.45
    ]
  },
  {
    "id": "artifact",
    "name": "遗迹文物",
    "icon": "🏺",
    "cat": "luxury",
    "base": 320,
    "elasticity": 1.0,
    "volatility": 0.3,
    "stockBase": 18,
    "demandBase": 17,
    "supplyBase": 23,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 3.73,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 1,
    "bulkThreshold": 20,
    "bulkDiscount": 0.045,
    "qualityPremium": 0.152,
    "tariffCat": "luxury",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.001,
    "supplyGrowth": 0.018,
    "shockSensitivity": 1.257,
    "monthlyDemand": [
      14,
      14,
      17,
      20,
      14,
      16,
      17,
      21,
      14,
      16,
      18,
      19
    ],
    "monthlySupply": [
      20,
      23,
      25,
      19,
      22,
      24,
      19,
      24,
      23,
      19,
      24,
      23
    ],
    "priceSeeds": [
      359.89,
      390.08,
      328.32,
      365.54,
      290.94,
      300.69,
      263.85,
      357.72,
      317.59,
      297.66,
      274.79,
      395.51
    ]
  },
  {
    "id": "alloy",
    "name": "记忆合金",
    "icon": "🛡️",
    "cat": "material",
    "base": 130,
    "elasticity": 0.65,
    "volatility": 0.16,
    "stockBase": 55,
    "demandBase": 63,
    "supplyBase": 50,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 0.55,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 20,
    "bulkDiscount": 0.108,
    "qualityPremium": 0.065,
    "tariffCat": "material",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.048,
    "supplyGrowth": 0.009,
    "shockSensitivity": 0.697,
    "monthlyDemand": [
      53,
      63,
      67,
      73,
      53,
      60,
      71,
      69,
      45,
      60,
      66,
      73
    ],
    "monthlySupply": [
      47,
      50,
      56,
      46,
      50,
      57,
      48,
      45,
      51,
      48,
      49,
      55
    ],
    "priceSeeds": [
      160.39,
      160.89,
      130.27,
      120.3,
      115.97,
      106.01,
      115.9,
      106.71,
      136.62,
      108.19,
      124.06,
      150.26
    ]
  },
  {
    "id": "bio",
    "name": "生物样本",
    "icon": "🧬",
    "cat": "tech",
    "base": 160,
    "elasticity": 0.85,
    "volatility": 0.24,
    "stockBase": 35,
    "demandBase": 38,
    "supplyBase": 31,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 3.04,
    "perishable": 1,
    "decayPerTick": 0.02,
    "contraband": 1,
    "bulkThreshold": 20,
    "bulkDiscount": 0.086,
    "qualityPremium": 0.055,
    "tariffCat": "tech",
    "shelfLifeTicks": 120,
    "demandGrowth": 0.041,
    "supplyGrowth": 0.017,
    "shockSensitivity": 0.729,
    "monthlyDemand": [
      29,
      31,
      42,
      46,
      29,
      36,
      43,
      47,
      28,
      35,
      41,
      46
    ],
    "monthlySupply": [
      27,
      29,
      36,
      30,
      28,
      35,
      29,
      31,
      34,
      29,
      28,
      32
    ],
    "priceSeeds": [
      155.22,
      167.58,
      148.38,
      198.37,
      184.32,
      134.86,
      130.61,
      137.91,
      180.0,
      195.83,
      147.28,
      132.17
    ]
  },
  {
    "id": "ceramic",
    "name": "耐热陶瓷",
    "icon": "🏺",
    "cat": "material",
    "base": 42,
    "elasticity": 0.55,
    "volatility": 0.12,
    "stockBase": 130,
    "demandBase": 98,
    "supplyBase": 153,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 2.17,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 0,
    "bulkThreshold": 50,
    "bulkDiscount": 0.07,
    "qualityPremium": 0.213,
    "tariffCat": "material",
    "shelfLifeTicks": 0,
    "demandGrowth": 0.045,
    "supplyGrowth": 0.005,
    "shockSensitivity": 0.562,
    "monthlyDemand": [
      81,
      87,
      108,
      113,
      76,
      89,
      113,
      120,
      87,
      90,
      104,
      114
    ],
    "monthlySupply": [
      129,
      163,
      181,
      124,
      162,
      167,
      139,
      166,
      171,
      131,
      141,
      153
    ],
    "priceSeeds": [
      47.22,
      35.44,
      34.88,
      35.19,
      46.8,
      50.5,
      41.56,
      49.42,
      33.96,
      46.32,
      43.76,
      42.36
    ]
  },
  {
    "id": "antimatter",
    "name": "反物质舱",
    "icon": "💥",
    "cat": "energy",
    "base": 480,
    "elasticity": 1.1,
    "volatility": 0.32,
    "stockBase": 8,
    "demandBase": 8,
    "supplyBase": 6,
    "minMul": 0.25,
    "maxMul": 4.0,
    "weight": 3.86,
    "perishable": 0,
    "decayPerTick": 0.0,
    "contraband": 1,
    "bulkThreshold": 20,
    "bulkDiscount": 0.04,
    "qualityPremium": 0.053,
    "tariffCat": "energy",
    "shelfLifeTicks": 0,
    "demandGrowth": -0.019,
    "supplyGrowth": 0.035,
    "shockSensitivity": 1.062,
    "monthlyDemand": [
      6,
      7,
      8,
      9,
      6,
      7,
      8,
      9,
      7,
      8,
      8,
      8
    ],
    "monthlySupply": [
      5,
      6,
      6,
      5,
      5,
      7,
      5,
      5,
      6,
      5,
      6,
      6
    ],
    "priceSeeds": [
      554.84,
      445.02,
      398.13,
      487.1,
      545.63,
      517.2,
      434.94,
      436.06,
      571.12,
      586.47,
      587.47,
      572.19
    ]
  }
];

/* ============ §2 贸易伙伴（12 个） ============ */
const TRADE31_PARTNERS = [
  {
    "id": "p01",
    "name": "地球联合贸易署",
    "icon": "🌍",
    "faction": "earth",
    "home": "terra",
    "distanceAU": 1.52,
    "relation": 62,
    "trust": 0.62,
    "haggle": 0.27,
    "bulkDiscount": 0.128,
    "qualityPremium": 0.145,
    "patience": 3,
    "risk": 0.078,
    "tariffPref": 0.026,
    "feeRate": 0.02,
    "currency": "credits",
    "exports": [
      "iron",
      "he3"
    ],
    "imports": [
      "rare",
      "medicine"
    ],
    "exportDiscount": 0.217,
    "importPremium": 0.141,
    "minRelation": 0,
    "unlockPop": 0,
    "unlockTech": "",
    "routeSlots": 1,
    "contractBias": "iron",
    "smuggleTolerance": 0.007,
    "seasonalGood": "water",
    "seasonalMul": 1.41,
    "reputationTier": "trusted",
    "contactCooldownTicks": 7,
    "maxVolumePerTick": 364,
    "priceMemoryTicks": 14,
    "loyaltyBonus": 0.013,
    "priceMods": {
      "iron": 1.05,
      "ice": 0.939,
      "water": 1.132,
      "food": 1.049,
      "steel": 0.986,
      "rare": 0.946,
      "uranium": 0.947,
      "he3": 1.132,
      "tech": 0.941,
      "polymer": 0.885,
      "glass": 0.871,
      "medicine": 0.975,
      "oxygen": 1.01,
      "seeds": 0.965,
      "machine": 0.969,
      "chip": 0.87,
      "fuel": 1.109,
      "textile": 0.961,
      "luxury": 1.021,
      "artifact": 1.046,
      "alloy": 0.85,
      "bio": 1.166,
      "ceramic": 0.884,
      "antimatter": 1.197
    },
    "relationHistory": [
      61,
      70,
      58,
      70,
      54,
      56,
      66,
      64,
      70,
      65,
      62,
      57
    ]
  },
  {
    "id": "p02",
    "name": "谷神星矿业公会",
    "icon": "⛏️",
    "faction": "belt",
    "home": "ceres",
    "distanceAU": 2.77,
    "relation": 48,
    "trust": 0.48,
    "haggle": 0.244,
    "bulkDiscount": 0.123,
    "qualityPremium": 0.015,
    "patience": 3,
    "risk": 0.232,
    "tariffPref": 0.001,
    "feeRate": 0.073,
    "currency": "credits",
    "exports": [
      "water",
      "polymer"
    ],
    "imports": [
      "tech",
      "machine"
    ],
    "exportDiscount": 0.291,
    "importPremium": 0.396,
    "minRelation": 0,
    "unlockPop": 0,
    "unlockTech": "",
    "routeSlots": 2,
    "contractBias": "water",
    "smuggleTolerance": 0.195,
    "seasonalGood": "polymer",
    "seasonalMul": 1.47,
    "reputationTier": "neutral",
    "contactCooldownTicks": 5,
    "maxVolumePerTick": 159,
    "priceMemoryTicks": 16,
    "loyaltyBonus": 0.06,
    "priceMods": {
      "iron": 1.136,
      "ice": 1.082,
      "water": 0.985,
      "food": 0.903,
      "steel": 0.912,
      "rare": 1.096,
      "uranium": 0.925,
      "he3": 0.903,
      "tech": 1.175,
      "polymer": 0.908,
      "glass": 1.002,
      "medicine": 1.004,
      "oxygen": 0.879,
      "seeds": 1.165,
      "machine": 1.002,
      "chip": 1.148,
      "fuel": 0.899,
      "textile": 0.864,
      "luxury": 1.174,
      "artifact": 1.131,
      "alloy": 0.954,
      "bio": 1.131,
      "ceramic": 1.175,
      "antimatter": 1.11
    },
    "relationHistory": [
      47,
      56,
      44,
      44,
      42,
      53,
      44,
      54,
      49,
      45,
      49,
      55
    ]
  },
  {
    "id": "p03",
    "name": "木卫二冰海商会",
    "icon": "🧊",
    "faction": "jovian",
    "home": "europa",
    "distanceAU": 5.2,
    "relation": 55,
    "trust": 0.55,
    "haggle": 0.186,
    "bulkDiscount": 0.145,
    "qualityPremium": 0.181,
    "patience": 6,
    "risk": 0.165,
    "tariffPref": 0.029,
    "feeRate": 0.013,
    "currency": "credits",
    "exports": [
      "steel",
      "medicine"
    ],
    "imports": [
      "medicine",
      "seeds"
    ],
    "exportDiscount": 0.128,
    "importPremium": 0.132,
    "minRelation": 0,
    "unlockPop": 0,
    "unlockTech": "",
    "routeSlots": 3,
    "contractBias": "iron",
    "smuggleTolerance": 0.443,
    "seasonalGood": "fuel",
    "seasonalMul": 1.29,
    "reputationTier": "neutral",
    "contactCooldownTicks": 4,
    "maxVolumePerTick": 155,
    "priceMemoryTicks": 13,
    "loyaltyBonus": 0.023,
    "priceMods": {
      "iron": 1.173,
      "ice": 0.923,
      "water": 1.02,
      "food": 0.972,
      "steel": 0.859,
      "rare": 0.9,
      "uranium": 0.906,
      "he3": 1.188,
      "tech": 1.141,
      "polymer": 1.097,
      "glass": 1.161,
      "medicine": 1.107,
      "oxygen": 1.14,
      "seeds": 1.01,
      "machine": 1.009,
      "chip": 0.922,
      "fuel": 0.9,
      "textile": 0.924,
      "luxury": 0.967,
      "artifact": 1.167,
      "alloy": 0.912,
      "bio": 1.119,
      "ceramic": 0.881,
      "antimatter": 1.129
    },
    "relationHistory": [
      62,
      53,
      50,
      54,
      56,
      53,
      61,
      49,
      50,
      60,
      48,
      59
    ]
  },
  {
    "id": "p04",
    "name": "火星轨道站联盟",
    "icon": "🛰️",
    "faction": "mars",
    "home": "phobos",
    "distanceAU": 0.52,
    "relation": 58,
    "trust": 0.58,
    "haggle": 0.267,
    "bulkDiscount": 0.06,
    "qualityPremium": 0.176,
    "patience": 2,
    "risk": 0.157,
    "tariffPref": 0.066,
    "feeRate": 0.055,
    "currency": "credits",
    "exports": [
      "uranium",
      "seeds"
    ],
    "imports": [
      "machine",
      "alloy"
    ],
    "exportDiscount": 0.284,
    "importPremium": 0.107,
    "minRelation": 0,
    "unlockPop": 0,
    "unlockTech": "",
    "routeSlots": 1,
    "contractBias": "water",
    "smuggleTolerance": 0.375,
    "seasonalGood": "antimatter",
    "seasonalMul": 1.48,
    "reputationTier": "neutral",
    "contactCooldownTicks": 5,
    "maxVolumePerTick": 218,
    "priceMemoryTicks": 8,
    "loyaltyBonus": 0.09,
    "priceMods": {
      "iron": 1.197,
      "ice": 1.042,
      "water": 0.884,
      "food": 1.158,
      "steel": 0.901,
      "rare": 1.023,
      "uranium": 0.962,
      "he3": 1.161,
      "tech": 1.184,
      "polymer": 1.044,
      "glass": 0.996,
      "medicine": 1.009,
      "oxygen": 0.884,
      "seeds": 0.874,
      "machine": 1.142,
      "chip": 0.955,
      "fuel": 1.044,
      "textile": 1.181,
      "luxury": 1.007,
      "artifact": 1.139,
      "alloy": 0.929,
      "bio": 0.969,
      "ceramic": 0.939,
      "antimatter": 0.91
    },
    "relationHistory": [
      65,
      51,
      62,
      61,
      55,
      63,
      53,
      57,
      52,
      57,
      57,
      58
    ]
  },
  {
    "id": "p05",
    "name": "小行星带自由港",
    "icon": "🏴‍☠️",
    "faction": "belt",
    "home": "freeport",
    "distanceAU": 2.9,
    "relation": 30,
    "trust": 0.3,
    "haggle": 0.165,
    "bulkDiscount": 0.074,
    "qualityPremium": 0.229,
    "patience": 5,
    "risk": 0.408,
    "tariffPref": 0.05,
    "feeRate": 0.075,
    "currency": "credits",
    "exports": [
      "tech",
      "chip"
    ],
    "imports": [
      "textile",
      "antimatter"
    ],
    "exportDiscount": 0.158,
    "importPremium": 0.379,
    "minRelation": 0,
    "unlockPop": 0,
    "unlockTech": "",
    "routeSlots": 2,
    "contractBias": "iron",
    "smuggleTolerance": 0.022,
    "seasonalGood": "uranium",
    "seasonalMul": 1.54,
    "reputationTier": "wary",
    "contactCooldownTicks": 5,
    "maxVolumePerTick": 300,
    "priceMemoryTicks": 22,
    "loyaltyBonus": 0.001,
    "priceMods": {
      "iron": 1.083,
      "ice": 0.981,
      "water": 0.886,
      "food": 0.897,
      "steel": 1.038,
      "rare": 1.06,
      "uranium": 1.039,
      "he3": 0.901,
      "tech": 0.989,
      "polymer": 1.069,
      "glass": 0.997,
      "medicine": 0.914,
      "oxygen": 0.854,
      "seeds": 0.997,
      "machine": 1.124,
      "chip": 1.116,
      "fuel": 0.879,
      "textile": 1.104,
      "luxury": 1.048,
      "artifact": 0.915,
      "alloy": 0.872,
      "bio": 1.174,
      "ceramic": 0.92,
      "antimatter": 1.037
    },
    "relationHistory": [
      31,
      30,
      27,
      34,
      26,
      35,
      33,
      33,
      38,
      34,
      36,
      27
    ]
  },
  {
    "id": "p06",
    "name": "金星云顶财团",
    "icon": "☁️",
    "faction": "venus",
    "home": "venus",
    "distanceAU": 0.72,
    "relation": 44,
    "trust": 0.44,
    "haggle": 0.098,
    "bulkDiscount": 0.052,
    "qualityPremium": 0.002,
    "patience": 4,
    "risk": 0.233,
    "tariffPref": 0.17,
    "feeRate": 0.057,
    "currency": "credits",
    "exports": [
      "glass",
      "textile"
    ],
    "imports": [
      "alloy",
      "water"
    ],
    "exportDiscount": 0.233,
    "importPremium": 0.384,
    "minRelation": 0,
    "unlockPop": 0,
    "unlockTech": "",
    "routeSlots": 3,
    "contractBias": "water",
    "smuggleTolerance": 0.377,
    "seasonalGood": "seeds",
    "seasonalMul": 1.38,
    "reputationTier": "neutral",
    "contactCooldownTicks": 3,
    "maxVolumePerTick": 82,
    "priceMemoryTicks": 8,
    "loyaltyBonus": 0.006,
    "priceMods": {
      "iron": 1.133,
      "ice": 1.135,
      "water": 1.014,
      "food": 0.982,
      "steel": 0.926,
      "rare": 0.923,
      "uranium": 0.854,
      "he3": 0.969,
      "tech": 0.946,
      "polymer": 1.047,
      "glass": 0.851,
      "medicine": 1.117,
      "oxygen": 0.919,
      "seeds": 0.974,
      "machine": 0.95,
      "chip": 1.182,
      "fuel": 1.171,
      "textile": 1.138,
      "luxury": 0.886,
      "artifact": 1.036,
      "alloy": 0.892,
      "bio": 0.949,
      "ceramic": 1.181,
      "antimatter": 0.873
    },
    "relationHistory": [
      37,
      49,
      41,
      46,
      49,
      39,
      46,
      42,
      47,
      38,
      42,
      42
    ]
  },
  {
    "id": "p07",
    "name": "土卫六甲烷合作社",
    "icon": "🪐",
    "faction": "saturn",
    "home": "titan",
    "distanceAU": 9.58,
    "relation": 51,
    "trust": 0.51,
    "haggle": 0.2,
    "bulkDiscount": 0.1,
    "qualityPremium": 0.123,
    "patience": 2,
    "risk": 0.399,
    "tariffPref": 0.06,
    "feeRate": 0.065,
    "currency": "credits",
    "exports": [
      "oxygen",
      "artifact"
    ],
    "imports": [
      "antimatter",
      "rare"
    ],
    "exportDiscount": 0.117,
    "importPremium": 0.169,
    "minRelation": 0,
    "unlockPop": 50,
    "unlockTech": "",
    "routeSlots": 1,
    "contractBias": "iron",
    "smuggleTolerance": 0.42,
    "seasonalGood": "alloy",
    "seasonalMul": 1.17,
    "reputationTier": "neutral",
    "contactCooldownTicks": 7,
    "maxVolumePerTick": 351,
    "priceMemoryTicks": 16,
    "loyaltyBonus": 0.001,
    "priceMods": {
      "iron": 1.126,
      "ice": 0.868,
      "water": 0.869,
      "food": 1.094,
      "steel": 1.154,
      "rare": 1.051,
      "uranium": 1.042,
      "he3": 1.181,
      "tech": 1.198,
      "polymer": 0.98,
      "glass": 1.023,
      "medicine": 1.133,
      "oxygen": 0.886,
      "seeds": 0.874,
      "machine": 1.099,
      "chip": 1.164,
      "fuel": 1.042,
      "textile": 1.088,
      "luxury": 0.912,
      "artifact": 0.908,
      "alloy": 1.156,
      "bio": 1.147,
      "ceramic": 0.991,
      "antimatter": 1.197
    },
    "relationHistory": [
      50,
      54,
      52,
      44,
      46,
      43,
      51,
      52,
      57,
      54,
      51,
      44
    ]
  },
  {
    "id": "p08",
    "name": "太阳系外环勘探队",
    "icon": "🔭",
    "faction": "outer",
    "home": "kuiper",
    "distanceAU": 30.1,
    "relation": 38,
    "trust": 0.38,
    "haggle": 0.197,
    "bulkDiscount": 0.051,
    "qualityPremium": 0.006,
    "patience": 2,
    "risk": 0.117,
    "tariffPref": 0.067,
    "feeRate": 0.058,
    "currency": "credits",
    "exports": [
      "machine",
      "bio"
    ],
    "imports": [
      "water",
      "tech"
    ],
    "exportDiscount": 0.113,
    "importPremium": 0.108,
    "minRelation": 0,
    "unlockPop": 50,
    "unlockTech": "",
    "routeSlots": 2,
    "contractBias": "water",
    "smuggleTolerance": 0.464,
    "seasonalGood": "food",
    "seasonalMul": 1.55,
    "reputationTier": "wary",
    "contactCooldownTicks": 7,
    "maxVolumePerTick": 399,
    "priceMemoryTicks": 17,
    "loyaltyBonus": 0.097,
    "priceMods": {
      "iron": 1.192,
      "ice": 1.189,
      "water": 1.154,
      "food": 0.873,
      "steel": 0.991,
      "rare": 0.968,
      "uranium": 1.022,
      "he3": 1.114,
      "tech": 1.031,
      "polymer": 0.986,
      "glass": 1.104,
      "medicine": 1.035,
      "oxygen": 0.991,
      "seeds": 0.927,
      "machine": 0.853,
      "chip": 1.129,
      "fuel": 0.934,
      "textile": 0.879,
      "luxury": 1.152,
      "artifact": 1.143,
      "alloy": 1.126,
      "bio": 1.037,
      "ceramic": 1.136,
      "antimatter": 1.145
    },
    "relationHistory": [
      43,
      38,
      37,
      36,
      33,
      33,
      42,
      36,
      42,
      34,
      44,
      41
    ]
  },
  {
    "id": "p09",
    "name": "月球熔炉工业",
    "icon": "🌙",
    "faction": "earth",
    "home": "luna",
    "distanceAU": 1.0,
    "relation": 60,
    "trust": 0.6,
    "haggle": 0.064,
    "bulkDiscount": 0.12,
    "qualityPremium": 0.048,
    "patience": 2,
    "risk": 0.213,
    "tariffPref": 0.182,
    "feeRate": 0.062,
    "currency": "credits",
    "exports": [
      "fuel",
      "antimatter"
    ],
    "imports": [
      "rare",
      "medicine"
    ],
    "exportDiscount": 0.114,
    "importPremium": 0.347,
    "minRelation": 25,
    "unlockPop": 50,
    "unlockTech": "",
    "routeSlots": 3,
    "contractBias": "iron",
    "smuggleTolerance": 0.476,
    "seasonalGood": "glass",
    "seasonalMul": 1.32,
    "reputationTier": "trusted",
    "contactCooldownTicks": 8,
    "maxVolumePerTick": 198,
    "priceMemoryTicks": 8,
    "loyaltyBonus": 0.029,
    "priceMods": {
      "iron": 1.178,
      "ice": 1.12,
      "water": 0.994,
      "food": 0.998,
      "steel": 0.976,
      "rare": 1.072,
      "uranium": 1.185,
      "he3": 1.005,
      "tech": 1.045,
      "polymer": 0.882,
      "glass": 1.058,
      "medicine": 1.07,
      "oxygen": 0.891,
      "seeds": 0.921,
      "machine": 1.102,
      "chip": 0.957,
      "fuel": 1.143,
      "textile": 1.015,
      "luxury": 0.864,
      "artifact": 1.179,
      "alloy": 1.109,
      "bio": 0.978,
      "ceramic": 1.16,
      "antimatter": 0.948
    },
    "relationHistory": [
      52,
      56,
      59,
      57,
      66,
      67,
      67,
      62,
      65,
      66,
      60,
      54
    ]
  },
  {
    "id": "p10",
    "name": "柯伊伯冰商联盟",
    "icon": "❄️",
    "faction": "outer",
    "home": "kuiper",
    "distanceAU": 39.5,
    "relation": 35,
    "trust": 0.35,
    "haggle": 0.242,
    "bulkDiscount": 0.029,
    "qualityPremium": 0.058,
    "patience": 3,
    "risk": 0.276,
    "tariffPref": 0.136,
    "feeRate": 0.052,
    "currency": "credits",
    "exports": [
      "luxury",
      "ice"
    ],
    "imports": [
      "tech",
      "machine"
    ],
    "exportDiscount": 0.188,
    "importPremium": 0.204,
    "minRelation": 25,
    "unlockPop": 50,
    "unlockTech": "trade",
    "routeSlots": 1,
    "contractBias": "water",
    "smuggleTolerance": 0.4,
    "seasonalGood": "textile",
    "seasonalMul": 1.36,
    "reputationTier": "wary",
    "contactCooldownTicks": 3,
    "maxVolumePerTick": 340,
    "priceMemoryTicks": 10,
    "loyaltyBonus": 0.098,
    "priceMods": {
      "iron": 0.982,
      "ice": 0.97,
      "water": 1.103,
      "food": 0.853,
      "steel": 0.978,
      "rare": 1.03,
      "uranium": 0.992,
      "he3": 1.102,
      "tech": 1.0,
      "polymer": 0.988,
      "glass": 1.001,
      "medicine": 0.933,
      "oxygen": 1.029,
      "seeds": 1.062,
      "machine": 1.066,
      "chip": 1.055,
      "fuel": 1.145,
      "textile": 1.044,
      "luxury": 0.974,
      "artifact": 0.954,
      "alloy": 1.198,
      "bio": 0.872,
      "ceramic": 0.893,
      "antimatter": 1.062
    },
    "relationHistory": [
      31,
      39,
      36,
      42,
      32,
      42,
      39,
      32,
      27,
      31,
      41,
      35
    ]
  },
  {
    "id": "p11",
    "name": "盖亚生态交易所",
    "icon": "🌿",
    "faction": "eco",
    "home": "gaia",
    "distanceAU": 1.52,
    "relation": 66,
    "trust": 0.66,
    "haggle": 0.244,
    "bulkDiscount": 0.135,
    "qualityPremium": 0.048,
    "patience": 4,
    "risk": 0.103,
    "tariffPref": 0.145,
    "feeRate": 0.042,
    "currency": "credits",
    "exports": [
      "alloy",
      "food"
    ],
    "imports": [
      "medicine",
      "textile"
    ],
    "exportDiscount": 0.239,
    "importPremium": 0.378,
    "minRelation": 25,
    "unlockPop": 120,
    "unlockTech": "trade",
    "routeSlots": 2,
    "contractBias": "iron",
    "smuggleTolerance": 0.01,
    "seasonalGood": "iron",
    "seasonalMul": 1.6,
    "reputationTier": "trusted",
    "contactCooldownTicks": 3,
    "maxVolumePerTick": 239,
    "priceMemoryTicks": 13,
    "loyaltyBonus": 0.074,
    "priceMods": {
      "iron": 1.012,
      "ice": 1.101,
      "water": 0.873,
      "food": 1.036,
      "steel": 1.001,
      "rare": 0.975,
      "uranium": 0.855,
      "he3": 1.033,
      "tech": 1.182,
      "polymer": 0.986,
      "glass": 1.082,
      "medicine": 0.956,
      "oxygen": 1.027,
      "seeds": 0.884,
      "machine": 0.858,
      "chip": 0.927,
      "fuel": 1.077,
      "textile": 0.992,
      "luxury": 1.058,
      "artifact": 1.018,
      "alloy": 1.014,
      "bio": 0.971,
      "ceramic": 1.054,
      "antimatter": 1.127
    },
    "relationHistory": [
      58,
      66,
      65,
      68,
      70,
      66,
      72,
      65,
      68,
      59,
      74,
      68
    ]
  },
  {
    "id": "p12",
    "name": "深空拾荒者兄弟会",
    "icon": "🔧",
    "faction": "scav",
    "home": "scav",
    "distanceAU": 4.2,
    "relation": 28,
    "trust": 0.28,
    "haggle": 0.193,
    "bulkDiscount": 0.086,
    "qualityPremium": 0.129,
    "patience": 2,
    "risk": 0.336,
    "tariffPref": 0.15,
    "feeRate": 0.061,
    "currency": "credits",
    "exports": [
      "ceramic",
      "rare"
    ],
    "imports": [
      "machine",
      "alloy"
    ],
    "exportDiscount": 0.157,
    "importPremium": 0.29,
    "minRelation": 25,
    "unlockPop": 120,
    "unlockTech": "trade",
    "routeSlots": 3,
    "contractBias": "water",
    "smuggleTolerance": 0.195,
    "seasonalGood": "he3",
    "seasonalMul": 1.48,
    "reputationTier": "wary",
    "contactCooldownTicks": 10,
    "maxVolumePerTick": 264,
    "priceMemoryTicks": 24,
    "loyaltyBonus": 0.057,
    "priceMods": {
      "iron": 1.19,
      "ice": 1.098,
      "water": 0.978,
      "food": 1.167,
      "steel": 1.186,
      "rare": 1.047,
      "uranium": 0.915,
      "he3": 1.036,
      "tech": 1.1,
      "polymer": 1.143,
      "glass": 1.008,
      "medicine": 0.983,
      "oxygen": 1.015,
      "seeds": 1.121,
      "machine": 1.187,
      "chip": 1.14,
      "fuel": 0.971,
      "textile": 0.863,
      "luxury": 0.891,
      "artifact": 1.089,
      "alloy": 1.048,
      "bio": 0.883,
      "ceramic": 1.194,
      "antimatter": 1.017
    },
    "relationHistory": [
      31,
      30,
      28,
      25,
      30,
      28,
      32,
      32,
      29,
      34,
      26,
      21
    ]
  }
];

/* ============ §3 价格事件 ============ */
const TRADE31_EVENTS = [
  {
    "id": "ev01",
    "kind": "boom",
    "name": "需求激增·铁矿",
    "good": "iron",
    "mul": 1.608,
    "durationTicks": 4,
    "probPerTick": 0.0187,
    "relationDelta": 3,
    "minTick": 23,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 231,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev02",
    "kind": "boom",
    "name": "需求激增·食物",
    "good": "food",
    "mul": 1.353,
    "durationTicks": 9,
    "probPerTick": 0.0182,
    "relationDelta": -2,
    "minTick": 24,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 578,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev03",
    "kind": "boom",
    "name": "需求激增·铀矿",
    "good": "uranium",
    "mul": 1.454,
    "durationTicks": 14,
    "probPerTick": 0.0069,
    "relationDelta": -3,
    "minTick": 31,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 351,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev04",
    "kind": "boom",
    "name": "需求激增·聚合物",
    "good": "polymer",
    "mul": 1.635,
    "durationTicks": 4,
    "probPerTick": 0.0035,
    "relationDelta": 2,
    "minTick": 0,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 593,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev05",
    "kind": "boom",
    "name": "需求激增·氧气",
    "good": "oxygen",
    "mul": 1.43,
    "durationTicks": 9,
    "probPerTick": 0.0186,
    "relationDelta": 5,
    "minTick": 24,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 434,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev06",
    "kind": "boom",
    "name": "需求激增·量子芯片",
    "good": "chip",
    "mul": 1.405,
    "durationTicks": 15,
    "probPerTick": 0.0056,
    "relationDelta": 5,
    "minTick": 25,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 526,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev07",
    "kind": "boom",
    "name": "需求激增·奢侈品",
    "good": "luxury",
    "mul": 1.612,
    "durationTicks": 7,
    "probPerTick": 0.0025,
    "relationDelta": -5,
    "minTick": 2,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 533,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev08",
    "kind": "boom",
    "name": "需求激增·生物样本",
    "good": "bio",
    "mul": 1.469,
    "durationTicks": 9,
    "probPerTick": 0.0063,
    "relationDelta": -1,
    "minTick": 6,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 427,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev09",
    "kind": "bust",
    "name": "需求崩盘·铁矿",
    "good": "iron",
    "mul": 0.576,
    "durationTicks": 5,
    "probPerTick": 0.0028,
    "relationDelta": 8,
    "minTick": 12,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 345,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev10",
    "kind": "bust",
    "name": "需求崩盘·食物",
    "good": "food",
    "mul": 0.664,
    "durationTicks": 16,
    "probPerTick": 0.0056,
    "relationDelta": 4,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 61,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev11",
    "kind": "bust",
    "name": "需求崩盘·铀矿",
    "good": "uranium",
    "mul": 0.651,
    "durationTicks": 12,
    "probPerTick": 0.005,
    "relationDelta": 6,
    "minTick": 39,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 463,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev12",
    "kind": "bust",
    "name": "需求崩盘·聚合物",
    "good": "polymer",
    "mul": 0.549,
    "durationTicks": 17,
    "probPerTick": 0.0145,
    "relationDelta": 6,
    "minTick": 3,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 585,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev13",
    "kind": "bust",
    "name": "需求崩盘·氧气",
    "good": "oxygen",
    "mul": 0.575,
    "durationTicks": 4,
    "probPerTick": 0.0195,
    "relationDelta": 2,
    "minTick": 7,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 595,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev14",
    "kind": "bust",
    "name": "需求崩盘·量子芯片",
    "good": "chip",
    "mul": 0.644,
    "durationTicks": 8,
    "probPerTick": 0.0042,
    "relationDelta": -2,
    "minTick": 39,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 499,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev15",
    "kind": "bust",
    "name": "需求崩盘·奢侈品",
    "good": "luxury",
    "mul": 0.651,
    "durationTicks": 18,
    "probPerTick": 0.0038,
    "relationDelta": 4,
    "minTick": 21,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 248,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev16",
    "kind": "bust",
    "name": "需求崩盘·生物样本",
    "good": "bio",
    "mul": 0.561,
    "durationTicks": 10,
    "probPerTick": 0.0031,
    "relationDelta": 2,
    "minTick": 22,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 478,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev17",
    "kind": "shortage",
    "name": "供应短缺·铁矿",
    "good": "iron",
    "mul": 1.762,
    "durationTicks": 7,
    "probPerTick": 0.0097,
    "relationDelta": 6,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 350,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev18",
    "kind": "shortage",
    "name": "供应短缺·食物",
    "good": "food",
    "mul": 1.598,
    "durationTicks": 13,
    "probPerTick": 0.0041,
    "relationDelta": 1,
    "minTick": 25,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 314,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev19",
    "kind": "shortage",
    "name": "供应短缺·铀矿",
    "good": "uranium",
    "mul": 1.679,
    "durationTicks": 8,
    "probPerTick": 0.0164,
    "relationDelta": 0,
    "minTick": 25,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 114,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev20",
    "kind": "shortage",
    "name": "供应短缺·聚合物",
    "good": "polymer",
    "mul": 1.732,
    "durationTicks": 9,
    "probPerTick": 0.0198,
    "relationDelta": 6,
    "minTick": 9,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 590,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev21",
    "kind": "shortage",
    "name": "供应短缺·氧气",
    "good": "oxygen",
    "mul": 1.661,
    "durationTicks": 18,
    "probPerTick": 0.0123,
    "relationDelta": 2,
    "minTick": 13,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 98,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev22",
    "kind": "shortage",
    "name": "供应短缺·量子芯片",
    "good": "chip",
    "mul": 1.605,
    "durationTicks": 17,
    "probPerTick": 0.0152,
    "relationDelta": -5,
    "minTick": 37,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 294,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev23",
    "kind": "shortage",
    "name": "供应短缺·奢侈品",
    "good": "luxury",
    "mul": 1.525,
    "durationTicks": 15,
    "probPerTick": 0.0187,
    "relationDelta": 0,
    "minTick": 18,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 62,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev24",
    "kind": "shortage",
    "name": "供应短缺·生物样本",
    "good": "bio",
    "mul": 1.449,
    "durationTicks": 9,
    "probPerTick": 0.0062,
    "relationDelta": -5,
    "minTick": 12,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 548,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev25",
    "kind": "glut",
    "name": "供应过剩·铁矿",
    "good": "iron",
    "mul": 0.613,
    "durationTicks": 9,
    "probPerTick": 0.0164,
    "relationDelta": -2,
    "minTick": 13,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 398,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev26",
    "kind": "glut",
    "name": "供应过剩·食物",
    "good": "food",
    "mul": 0.517,
    "durationTicks": 10,
    "probPerTick": 0.0105,
    "relationDelta": 4,
    "minTick": 8,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 532,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev27",
    "kind": "glut",
    "name": "供应过剩·铀矿",
    "good": "uranium",
    "mul": 0.578,
    "durationTicks": 11,
    "probPerTick": 0.0026,
    "relationDelta": -6,
    "minTick": 11,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 429,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev28",
    "kind": "glut",
    "name": "供应过剩·聚合物",
    "good": "polymer",
    "mul": 0.566,
    "durationTicks": 6,
    "probPerTick": 0.0176,
    "relationDelta": 5,
    "minTick": 10,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 512,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev29",
    "kind": "glut",
    "name": "供应过剩·氧气",
    "good": "oxygen",
    "mul": 0.613,
    "durationTicks": 6,
    "probPerTick": 0.0153,
    "relationDelta": 5,
    "minTick": 32,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 428,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev30",
    "kind": "glut",
    "name": "供应过剩·量子芯片",
    "good": "chip",
    "mul": 0.551,
    "durationTicks": 17,
    "probPerTick": 0.0141,
    "relationDelta": 5,
    "minTick": 18,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 321,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev31",
    "kind": "glut",
    "name": "供应过剩·奢侈品",
    "good": "luxury",
    "mul": 0.608,
    "durationTicks": 15,
    "probPerTick": 0.0106,
    "relationDelta": 0,
    "minTick": 23,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 437,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev32",
    "kind": "glut",
    "name": "供应过剩·生物样本",
    "good": "bio",
    "mul": 0.596,
    "durationTicks": 14,
    "probPerTick": 0.0162,
    "relationDelta": -6,
    "minTick": 28,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 359,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev33",
    "kind": "embargo",
    "name": "禁运风波·铁矿",
    "good": "iron",
    "mul": 1.729,
    "durationTicks": 4,
    "probPerTick": 0.0049,
    "relationDelta": -3,
    "minTick": 40,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 470,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev34",
    "kind": "embargo",
    "name": "禁运风波·食物",
    "good": "food",
    "mul": 1.785,
    "durationTicks": 10,
    "probPerTick": 0.009,
    "relationDelta": -3,
    "minTick": 33,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 549,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev35",
    "kind": "embargo",
    "name": "禁运风波·铀矿",
    "good": "uranium",
    "mul": 1.807,
    "durationTicks": 9,
    "probPerTick": 0.0044,
    "relationDelta": 4,
    "minTick": 25,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 564,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev36",
    "kind": "embargo",
    "name": "禁运风波·聚合物",
    "good": "polymer",
    "mul": 1.793,
    "durationTicks": 5,
    "probPerTick": 0.0196,
    "relationDelta": -4,
    "minTick": 0,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 94,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev37",
    "kind": "embargo",
    "name": "禁运风波·氧气",
    "good": "oxygen",
    "mul": 1.923,
    "durationTicks": 16,
    "probPerTick": 0.0153,
    "relationDelta": -1,
    "minTick": 6,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 224,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev38",
    "kind": "embargo",
    "name": "禁运风波·量子芯片",
    "good": "chip",
    "mul": 2.068,
    "durationTicks": 6,
    "probPerTick": 0.0182,
    "relationDelta": 8,
    "minTick": 18,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 410,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev39",
    "kind": "embargo",
    "name": "禁运风波·奢侈品",
    "good": "luxury",
    "mul": 2.07,
    "durationTicks": 11,
    "probPerTick": 0.0134,
    "relationDelta": 5,
    "minTick": 18,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 330,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev40",
    "kind": "embargo",
    "name": "禁运风波·生物样本",
    "good": "bio",
    "mul": 1.666,
    "durationTicks": 8,
    "probPerTick": 0.0131,
    "relationDelta": 0,
    "minTick": 1,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 93,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev41",
    "kind": "festival",
    "name": "节庆抢购·铁矿",
    "good": "iron",
    "mul": 1.452,
    "durationTicks": 18,
    "probPerTick": 0.0079,
    "relationDelta": 0,
    "minTick": 21,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 481,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev42",
    "kind": "festival",
    "name": "节庆抢购·食物",
    "good": "food",
    "mul": 1.315,
    "durationTicks": 5,
    "probPerTick": 0.0118,
    "relationDelta": -1,
    "minTick": 17,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 473,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev43",
    "kind": "festival",
    "name": "节庆抢购·铀矿",
    "good": "uranium",
    "mul": 1.46,
    "durationTicks": 12,
    "probPerTick": 0.0128,
    "relationDelta": -1,
    "minTick": 40,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 381,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev44",
    "kind": "festival",
    "name": "节庆抢购·聚合物",
    "good": "polymer",
    "mul": 1.402,
    "durationTicks": 11,
    "probPerTick": 0.0156,
    "relationDelta": 6,
    "minTick": 2,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 427,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev45",
    "kind": "festival",
    "name": "节庆抢购·氧气",
    "good": "oxygen",
    "mul": 1.254,
    "durationTicks": 8,
    "probPerTick": 0.0197,
    "relationDelta": -4,
    "minTick": 32,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 372,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev46",
    "kind": "festival",
    "name": "节庆抢购·量子芯片",
    "good": "chip",
    "mul": 1.296,
    "durationTicks": 15,
    "probPerTick": 0.0161,
    "relationDelta": 3,
    "minTick": 11,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 399,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev47",
    "kind": "festival",
    "name": "节庆抢购·奢侈品",
    "good": "luxury",
    "mul": 1.292,
    "durationTicks": 13,
    "probPerTick": 0.0052,
    "relationDelta": 2,
    "minTick": 29,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 556,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev48",
    "kind": "festival",
    "name": "节庆抢购·生物样本",
    "good": "bio",
    "mul": 1.335,
    "durationTicks": 8,
    "probPerTick": 0.0038,
    "relationDelta": -2,
    "minTick": 19,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 501,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev49",
    "kind": "plague",
    "name": "疫病囤货·铁矿",
    "good": "iron",
    "mul": 1.596,
    "durationTicks": 8,
    "probPerTick": 0.0052,
    "relationDelta": -5,
    "minTick": 29,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 163,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev50",
    "kind": "plague",
    "name": "疫病囤货·食物",
    "good": "food",
    "mul": 1.501,
    "durationTicks": 7,
    "probPerTick": 0.0039,
    "relationDelta": -2,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 280,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev51",
    "kind": "plague",
    "name": "疫病囤货·铀矿",
    "good": "uranium",
    "mul": 1.45,
    "durationTicks": 8,
    "probPerTick": 0.0056,
    "relationDelta": -2,
    "minTick": 32,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 480,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev52",
    "kind": "plague",
    "name": "疫病囤货·聚合物",
    "good": "polymer",
    "mul": 1.37,
    "durationTicks": 18,
    "probPerTick": 0.0149,
    "relationDelta": -5,
    "minTick": 30,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 317,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev53",
    "kind": "plague",
    "name": "疫病囤货·氧气",
    "good": "oxygen",
    "mul": 1.664,
    "durationTicks": 14,
    "probPerTick": 0.016,
    "relationDelta": -2,
    "minTick": 40,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 556,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev54",
    "kind": "plague",
    "name": "疫病囤货·量子芯片",
    "good": "chip",
    "mul": 1.718,
    "durationTicks": 17,
    "probPerTick": 0.0076,
    "relationDelta": 5,
    "minTick": 24,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 383,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev55",
    "kind": "plague",
    "name": "疫病囤货·奢侈品",
    "good": "luxury",
    "mul": 1.381,
    "durationTicks": 17,
    "probPerTick": 0.0054,
    "relationDelta": 2,
    "minTick": 12,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 61,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev56",
    "kind": "plague",
    "name": "疫病囤货·生物样本",
    "good": "bio",
    "mul": 1.693,
    "durationTicks": 18,
    "probPerTick": 0.004,
    "relationDelta": -5,
    "minTick": 34,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 591,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev57",
    "kind": "war",
    "name": "战争订单·铁矿",
    "good": "iron",
    "mul": 1.833,
    "durationTicks": 7,
    "probPerTick": 0.0072,
    "relationDelta": -5,
    "minTick": 26,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 59,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev58",
    "kind": "war",
    "name": "战争订单·食物",
    "good": "food",
    "mul": 1.68,
    "durationTicks": 12,
    "probPerTick": 0.0049,
    "relationDelta": 1,
    "minTick": 36,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 54,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev59",
    "kind": "war",
    "name": "战争订单·铀矿",
    "good": "uranium",
    "mul": 1.845,
    "durationTicks": 17,
    "probPerTick": 0.0152,
    "relationDelta": -3,
    "minTick": 0,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 362,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev60",
    "kind": "war",
    "name": "战争订单·聚合物",
    "good": "polymer",
    "mul": 1.696,
    "durationTicks": 7,
    "probPerTick": 0.0111,
    "relationDelta": 5,
    "minTick": 38,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 178,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev61",
    "kind": "war",
    "name": "战争订单·氧气",
    "good": "oxygen",
    "mul": 1.613,
    "durationTicks": 7,
    "probPerTick": 0.0134,
    "relationDelta": -3,
    "minTick": 6,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 511,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev62",
    "kind": "war",
    "name": "战争订单·量子芯片",
    "good": "chip",
    "mul": 1.656,
    "durationTicks": 11,
    "probPerTick": 0.0077,
    "relationDelta": -2,
    "minTick": 1,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 386,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev63",
    "kind": "war",
    "name": "战争订单·奢侈品",
    "good": "luxury",
    "mul": 1.788,
    "durationTicks": 7,
    "probPerTick": 0.014,
    "relationDelta": 8,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 159,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev64",
    "kind": "war",
    "name": "战争订单·生物样本",
    "good": "bio",
    "mul": 1.922,
    "durationTicks": 12,
    "probPerTick": 0.0179,
    "relationDelta": 8,
    "minTick": 14,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 216,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev65",
    "kind": "boom",
    "name": "全系·需求激增",
    "good": "all",
    "mul": 1.45,
    "durationTicks": 4,
    "probPerTick": 0.004,
    "relationDelta": 4,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 599,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev66",
    "kind": "bust",
    "name": "全系·需求崩盘",
    "good": "all",
    "mul": 0.6,
    "durationTicks": 6,
    "probPerTick": 0.004,
    "relationDelta": 3,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 457,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev67",
    "kind": "shortage",
    "name": "全系·供应短缺",
    "good": "all",
    "mul": 1.6,
    "durationTicks": 9,
    "probPerTick": 0.004,
    "relationDelta": -1,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 828,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev68",
    "kind": "glut",
    "name": "全系·供应过剩",
    "good": "all",
    "mul": 0.55,
    "durationTicks": 6,
    "probPerTick": 0.004,
    "relationDelta": -4,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 450,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev69",
    "kind": "embargo",
    "name": "全系·禁运风波",
    "good": "all",
    "mul": 1.8,
    "durationTicks": 4,
    "probPerTick": 0.004,
    "relationDelta": 2,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 808,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  },
  {
    "id": "ev70",
    "kind": "festival",
    "name": "全系·节庆抢购",
    "good": "all",
    "mul": 1.3,
    "durationTicks": 6,
    "probPerTick": 0.004,
    "relationDelta": -2,
    "minTick": 20,
    "affects": "price",
    "stackable": 0,
    "creditFlow": 871,
    "affectedGoods": [
      "iron",
      "he3",
      "machine"
    ]
  }
];

/* ============ §4 航线目录 ============ */
const TRADE31_ROUTES = [
  {
    "id": "r01",
    "partnerId": "p01",
    "lane": 1,
    "name": "地球联合贸易署·航线1",
    "level": 1,
    "distanceAU": 1.52,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.078,
    "throughputPerTick": 12,
    "feeRate": 0.02,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 7,
        "risk": 0.25,
        "fuel": 14
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 4,
        "risk": 0.223,
        "fuel": 35
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.099,
        "fuel": 5
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 4,
        "risk": 0.026,
        "fuel": 40
      }
    ]
  },
  {
    "id": "r02",
    "partnerId": "p01",
    "lane": 2,
    "name": "地球联合贸易署·航线2",
    "level": 2,
    "distanceAU": 1.75,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.094,
    "throughputPerTick": 30,
    "feeRate": 0.022,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 3,
        "risk": 0.189,
        "fuel": 21
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 6,
        "risk": 0.026,
        "fuel": 13
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.263,
        "fuel": 31
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 5,
        "risk": 0.24,
        "fuel": 6
      }
    ]
  },
  {
    "id": "r03",
    "partnerId": "p01",
    "lane": 3,
    "name": "地球联合贸易署·航线3",
    "level": 3,
    "distanceAU": 1.98,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.109,
    "throughputPerTick": 48,
    "feeRate": 0.024,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 9,
        "risk": 0.179,
        "fuel": 40
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.163,
        "fuel": 37
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.028,
        "fuel": 25
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 4,
        "risk": 0.16,
        "fuel": 25
      }
    ]
  },
  {
    "id": "r04",
    "partnerId": "p01",
    "lane": 4,
    "name": "地球联合贸易署·航线4",
    "level": 1,
    "distanceAU": 2.2,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.125,
    "throughputPerTick": 30,
    "feeRate": 0.026,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 7,
        "risk": 0.284,
        "fuel": 26
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 5,
        "risk": 0.209,
        "fuel": 16
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 3,
        "risk": 0.279,
        "fuel": 25
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.202,
        "fuel": 13
      }
    ]
  },
  {
    "id": "r05",
    "partnerId": "p01",
    "lane": 5,
    "name": "地球联合贸易署·航线5",
    "level": 2,
    "distanceAU": 2.43,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.14,
    "throughputPerTick": 48,
    "feeRate": 0.028,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 3,
        "risk": 0.208,
        "fuel": 7
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 9,
        "risk": 0.039,
        "fuel": 39
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 5,
        "risk": 0.103,
        "fuel": 33
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.14,
        "fuel": 27
      }
    ]
  },
  {
    "id": "r06",
    "partnerId": "p02",
    "lane": 1,
    "name": "谷神星矿业公会·航线1",
    "level": 1,
    "distanceAU": 2.77,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.232,
    "throughputPerTick": 12,
    "feeRate": 0.073,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.095,
        "fuel": 40
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.259,
        "fuel": 7
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.037,
        "fuel": 29
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 9,
        "risk": 0.138,
        "fuel": 25
      }
    ]
  },
  {
    "id": "r07",
    "partnerId": "p02",
    "lane": 2,
    "name": "谷神星矿业公会·航线2",
    "level": 2,
    "distanceAU": 3.19,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.278,
    "throughputPerTick": 30,
    "feeRate": 0.08,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 5,
        "risk": 0.058,
        "fuel": 38
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 5,
        "risk": 0.278,
        "fuel": 27
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.185,
        "fuel": 15
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 2,
        "risk": 0.062,
        "fuel": 26
      }
    ]
  },
  {
    "id": "r08",
    "partnerId": "p02",
    "lane": 3,
    "name": "谷神星矿业公会·航线3",
    "level": 3,
    "distanceAU": 3.6,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.325,
    "throughputPerTick": 48,
    "feeRate": 0.088,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 9,
        "risk": 0.091,
        "fuel": 23
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 6,
        "risk": 0.069,
        "fuel": 34
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 9,
        "risk": 0.233,
        "fuel": 38
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 9,
        "risk": 0.046,
        "fuel": 15
      }
    ]
  },
  {
    "id": "r09",
    "partnerId": "p02",
    "lane": 4,
    "name": "谷神星矿业公会·航线4",
    "level": 1,
    "distanceAU": 4.02,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.371,
    "throughputPerTick": 30,
    "feeRate": 0.095,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 6,
        "risk": 0.269,
        "fuel": 5
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.041,
        "fuel": 6
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.155,
        "fuel": 15
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 4,
        "risk": 0.046,
        "fuel": 11
      }
    ]
  },
  {
    "id": "r10",
    "partnerId": "p02",
    "lane": 5,
    "name": "谷神星矿业公会·航线5",
    "level": 2,
    "distanceAU": 4.43,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.418,
    "throughputPerTick": 48,
    "feeRate": 0.102,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 7,
        "risk": 0.256,
        "fuel": 18
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.245,
        "fuel": 27
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.097,
        "fuel": 22
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 9,
        "risk": 0.078,
        "fuel": 9
      }
    ]
  },
  {
    "id": "r11",
    "partnerId": "p03",
    "lane": 1,
    "name": "木卫二冰海商会·航线1",
    "level": 1,
    "distanceAU": 5.2,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.165,
    "throughputPerTick": 12,
    "feeRate": 0.013,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 3,
        "risk": 0.177,
        "fuel": 14
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 5,
        "risk": 0.108,
        "fuel": 11
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 5,
        "risk": 0.093,
        "fuel": 20
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.234,
        "fuel": 25
      }
    ]
  },
  {
    "id": "r12",
    "partnerId": "p03",
    "lane": 2,
    "name": "木卫二冰海商会·航线2",
    "level": 2,
    "distanceAU": 5.98,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.198,
    "throughputPerTick": 30,
    "feeRate": 0.014,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 9,
        "risk": 0.125,
        "fuel": 5
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.192,
        "fuel": 30
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 5,
        "risk": 0.257,
        "fuel": 32
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 4,
        "risk": 0.02,
        "fuel": 35
      }
    ]
  },
  {
    "id": "r13",
    "partnerId": "p03",
    "lane": 3,
    "name": "木卫二冰海商会·航线3",
    "level": 3,
    "distanceAU": 6.76,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.231,
    "throughputPerTick": 48,
    "feeRate": 0.016,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 2,
        "risk": 0.171,
        "fuel": 20
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 7,
        "risk": 0.192,
        "fuel": 7
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.103,
        "fuel": 20
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.161,
        "fuel": 19
      }
    ]
  },
  {
    "id": "r14",
    "partnerId": "p03",
    "lane": 4,
    "name": "木卫二冰海商会·航线4",
    "level": 1,
    "distanceAU": 7.54,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.264,
    "throughputPerTick": 30,
    "feeRate": 0.017,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 3,
        "risk": 0.082,
        "fuel": 21
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 9,
        "risk": 0.079,
        "fuel": 28
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.186,
        "fuel": 33
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.265,
        "fuel": 18
      }
    ]
  },
  {
    "id": "r15",
    "partnerId": "p03",
    "lane": 5,
    "name": "木卫二冰海商会·航线5",
    "level": 2,
    "distanceAU": 8.32,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.297,
    "throughputPerTick": 48,
    "feeRate": 0.018,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 7,
        "risk": 0.281,
        "fuel": 13
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.114,
        "fuel": 7
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 6,
        "risk": 0.246,
        "fuel": 6
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 3,
        "risk": 0.215,
        "fuel": 25
      }
    ]
  },
  {
    "id": "r16",
    "partnerId": "p04",
    "lane": 1,
    "name": "火星轨道站联盟·航线1",
    "level": 1,
    "distanceAU": 0.52,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.157,
    "throughputPerTick": 12,
    "feeRate": 0.055,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.183,
        "fuel": 35
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 7,
        "risk": 0.226,
        "fuel": 10
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.138,
        "fuel": 35
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 3,
        "risk": 0.148,
        "fuel": 32
      }
    ]
  },
  {
    "id": "r17",
    "partnerId": "p04",
    "lane": 2,
    "name": "火星轨道站联盟·航线2",
    "level": 2,
    "distanceAU": 0.6,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.188,
    "throughputPerTick": 30,
    "feeRate": 0.061,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 2,
        "risk": 0.085,
        "fuel": 33
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 9,
        "risk": 0.112,
        "fuel": 16
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 2,
        "risk": 0.22,
        "fuel": 14
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 2,
        "risk": 0.102,
        "fuel": 7
      }
    ]
  },
  {
    "id": "r18",
    "partnerId": "p04",
    "lane": 3,
    "name": "火星轨道站联盟·航线3",
    "level": 3,
    "distanceAU": 0.68,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.22,
    "throughputPerTick": 48,
    "feeRate": 0.066,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 3,
        "risk": 0.204,
        "fuel": 5
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.266,
        "fuel": 15
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 9,
        "risk": 0.089,
        "fuel": 26
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 9,
        "risk": 0.188,
        "fuel": 33
      }
    ]
  },
  {
    "id": "r19",
    "partnerId": "p04",
    "lane": 4,
    "name": "火星轨道站联盟·航线4",
    "level": 1,
    "distanceAU": 0.75,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.251,
    "throughputPerTick": 30,
    "feeRate": 0.072,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.171,
        "fuel": 22
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 3,
        "risk": 0.213,
        "fuel": 26
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 5,
        "risk": 0.079,
        "fuel": 39
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 3,
        "risk": 0.134,
        "fuel": 28
      }
    ]
  },
  {
    "id": "r20",
    "partnerId": "p04",
    "lane": 5,
    "name": "火星轨道站联盟·航线5",
    "level": 2,
    "distanceAU": 0.83,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.283,
    "throughputPerTick": 48,
    "feeRate": 0.077,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 2,
        "risk": 0.233,
        "fuel": 6
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.091,
        "fuel": 17
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 8,
        "risk": 0.291,
        "fuel": 16
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.227,
        "fuel": 30
      }
    ]
  },
  {
    "id": "r21",
    "partnerId": "p05",
    "lane": 1,
    "name": "小行星带自由港·航线1",
    "level": 1,
    "distanceAU": 2.9,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.408,
    "throughputPerTick": 12,
    "feeRate": 0.075,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 9,
        "risk": 0.09,
        "fuel": 11
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 9,
        "risk": 0.049,
        "fuel": 35
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 2,
        "risk": 0.195,
        "fuel": 13
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.27,
        "fuel": 24
      }
    ]
  },
  {
    "id": "r22",
    "partnerId": "p05",
    "lane": 2,
    "name": "小行星带自由港·航线2",
    "level": 2,
    "distanceAU": 3.33,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.49,
    "throughputPerTick": 30,
    "feeRate": 0.083,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 6,
        "risk": 0.255,
        "fuel": 24
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 6,
        "risk": 0.094,
        "fuel": 17
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 3,
        "risk": 0.226,
        "fuel": 14
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.184,
        "fuel": 22
      }
    ]
  },
  {
    "id": "r23",
    "partnerId": "p05",
    "lane": 3,
    "name": "小行星带自由港·航线3",
    "level": 3,
    "distanceAU": 3.77,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.571,
    "throughputPerTick": 48,
    "feeRate": 0.09,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 5,
        "risk": 0.262,
        "fuel": 19
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.05,
        "fuel": 33
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 2,
        "risk": 0.269,
        "fuel": 6
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 9,
        "risk": 0.141,
        "fuel": 35
      }
    ]
  },
  {
    "id": "r24",
    "partnerId": "p05",
    "lane": 4,
    "name": "小行星带自由港·航线4",
    "level": 1,
    "distanceAU": 4.21,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.653,
    "throughputPerTick": 30,
    "feeRate": 0.098,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 2,
        "risk": 0.251,
        "fuel": 23
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.085,
        "fuel": 39
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.076,
        "fuel": 22
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 6,
        "risk": 0.249,
        "fuel": 21
      }
    ]
  },
  {
    "id": "r25",
    "partnerId": "p05",
    "lane": 5,
    "name": "小行星带自由港·航线5",
    "level": 2,
    "distanceAU": 4.64,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.734,
    "throughputPerTick": 48,
    "feeRate": 0.105,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 7,
        "risk": 0.189,
        "fuel": 24
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 5,
        "risk": 0.186,
        "fuel": 29
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 8,
        "risk": 0.193,
        "fuel": 33
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 3,
        "risk": 0.192,
        "fuel": 31
      }
    ]
  },
  {
    "id": "r26",
    "partnerId": "p06",
    "lane": 1,
    "name": "金星云顶财团·航线1",
    "level": 1,
    "distanceAU": 0.72,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.233,
    "throughputPerTick": 12,
    "feeRate": 0.057,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 4,
        "risk": 0.137,
        "fuel": 27
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 4,
        "risk": 0.282,
        "fuel": 28
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 5,
        "risk": 0.256,
        "fuel": 29
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 4,
        "risk": 0.115,
        "fuel": 33
      }
    ]
  },
  {
    "id": "r27",
    "partnerId": "p06",
    "lane": 2,
    "name": "金星云顶财团·航线2",
    "level": 2,
    "distanceAU": 0.83,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.28,
    "throughputPerTick": 30,
    "feeRate": 0.063,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 7,
        "risk": 0.058,
        "fuel": 29
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 6,
        "risk": 0.177,
        "fuel": 14
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 9,
        "risk": 0.288,
        "fuel": 34
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.053,
        "fuel": 19
      }
    ]
  },
  {
    "id": "r28",
    "partnerId": "p06",
    "lane": 3,
    "name": "金星云顶财团·航线3",
    "level": 3,
    "distanceAU": 0.94,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.326,
    "throughputPerTick": 48,
    "feeRate": 0.068,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 3,
        "risk": 0.262,
        "fuel": 32
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.266,
        "fuel": 17
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.11,
        "fuel": 18
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.244,
        "fuel": 26
      }
    ]
  },
  {
    "id": "r29",
    "partnerId": "p06",
    "lane": 4,
    "name": "金星云顶财团·航线4",
    "level": 1,
    "distanceAU": 1.04,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.373,
    "throughputPerTick": 30,
    "feeRate": 0.074,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 3,
        "risk": 0.155,
        "fuel": 37
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 6,
        "risk": 0.232,
        "fuel": 7
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 8,
        "risk": 0.198,
        "fuel": 7
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.078,
        "fuel": 17
      }
    ]
  },
  {
    "id": "r30",
    "partnerId": "p06",
    "lane": 5,
    "name": "金星云顶财团·航线5",
    "level": 2,
    "distanceAU": 1.15,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.419,
    "throughputPerTick": 48,
    "feeRate": 0.08,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 9,
        "risk": 0.061,
        "fuel": 6
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 9,
        "risk": 0.228,
        "fuel": 21
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.258,
        "fuel": 14
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 5,
        "risk": 0.253,
        "fuel": 13
      }
    ]
  },
  {
    "id": "r31",
    "partnerId": "p07",
    "lane": 1,
    "name": "土卫六甲烷合作社·航线1",
    "level": 1,
    "distanceAU": 9.58,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.399,
    "throughputPerTick": 12,
    "feeRate": 0.065,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 3,
        "risk": 0.088,
        "fuel": 18
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 7,
        "risk": 0.07,
        "fuel": 10
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 8,
        "risk": 0.104,
        "fuel": 6
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.175,
        "fuel": 37
      }
    ]
  },
  {
    "id": "r32",
    "partnerId": "p07",
    "lane": 2,
    "name": "土卫六甲烷合作社·航线2",
    "level": 2,
    "distanceAU": 11.02,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.479,
    "throughputPerTick": 30,
    "feeRate": 0.072,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 9,
        "risk": 0.026,
        "fuel": 27
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 4,
        "risk": 0.022,
        "fuel": 7
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.227,
        "fuel": 25
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.265,
        "fuel": 11
      }
    ]
  },
  {
    "id": "r33",
    "partnerId": "p07",
    "lane": 3,
    "name": "土卫六甲烷合作社·航线3",
    "level": 3,
    "distanceAU": 12.45,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.559,
    "throughputPerTick": 48,
    "feeRate": 0.078,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.192,
        "fuel": 12
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.109,
        "fuel": 7
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 5,
        "risk": 0.031,
        "fuel": 26
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 2,
        "risk": 0.159,
        "fuel": 36
      }
    ]
  },
  {
    "id": "r34",
    "partnerId": "p07",
    "lane": 4,
    "name": "土卫六甲烷合作社·航线4",
    "level": 1,
    "distanceAU": 13.89,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.638,
    "throughputPerTick": 30,
    "feeRate": 0.085,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 4,
        "risk": 0.26,
        "fuel": 35
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 7,
        "risk": 0.145,
        "fuel": 13
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.107,
        "fuel": 10
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.26,
        "fuel": 14
      }
    ]
  },
  {
    "id": "r35",
    "partnerId": "p07",
    "lane": 5,
    "name": "土卫六甲烷合作社·航线5",
    "level": 2,
    "distanceAU": 15.33,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.718,
    "throughputPerTick": 48,
    "feeRate": 0.091,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.271,
        "fuel": 13
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 4,
        "risk": 0.103,
        "fuel": 39
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 5,
        "risk": 0.238,
        "fuel": 23
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 3,
        "risk": 0.135,
        "fuel": 35
      }
    ]
  },
  {
    "id": "r36",
    "partnerId": "p08",
    "lane": 1,
    "name": "太阳系外环勘探队·航线1",
    "level": 1,
    "distanceAU": 30.1,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.117,
    "throughputPerTick": 12,
    "feeRate": 0.058,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.19,
        "fuel": 7
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.14,
        "fuel": 16
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.052,
        "fuel": 10
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 5,
        "risk": 0.096,
        "fuel": 20
      }
    ]
  },
  {
    "id": "r37",
    "partnerId": "p08",
    "lane": 2,
    "name": "太阳系外环勘探队·航线2",
    "level": 2,
    "distanceAU": 34.62,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.14,
    "throughputPerTick": 30,
    "feeRate": 0.064,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 9,
        "risk": 0.162,
        "fuel": 24
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 4,
        "risk": 0.256,
        "fuel": 25
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 2,
        "risk": 0.111,
        "fuel": 36
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 5,
        "risk": 0.234,
        "fuel": 37
      }
    ]
  },
  {
    "id": "r38",
    "partnerId": "p08",
    "lane": 3,
    "name": "太阳系外环勘探队·航线3",
    "level": 3,
    "distanceAU": 39.13,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.164,
    "throughputPerTick": 48,
    "feeRate": 0.07,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 7,
        "risk": 0.196,
        "fuel": 6
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 9,
        "risk": 0.224,
        "fuel": 35
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.151,
        "fuel": 17
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 9,
        "risk": 0.107,
        "fuel": 26
      }
    ]
  },
  {
    "id": "r39",
    "partnerId": "p08",
    "lane": 4,
    "name": "太阳系外环勘探队·航线4",
    "level": 1,
    "distanceAU": 43.65,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.187,
    "throughputPerTick": 30,
    "feeRate": 0.075,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 4,
        "risk": 0.189,
        "fuel": 18
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 9,
        "risk": 0.242,
        "fuel": 13
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 8,
        "risk": 0.127,
        "fuel": 21
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 4,
        "risk": 0.032,
        "fuel": 22
      }
    ]
  },
  {
    "id": "r40",
    "partnerId": "p08",
    "lane": 5,
    "name": "太阳系外环勘探队·航线5",
    "level": 2,
    "distanceAU": 48.16,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.211,
    "throughputPerTick": 48,
    "feeRate": 0.081,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.136,
        "fuel": 36
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 3,
        "risk": 0.039,
        "fuel": 7
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.035,
        "fuel": 36
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 6,
        "risk": 0.232,
        "fuel": 12
      }
    ]
  },
  {
    "id": "r41",
    "partnerId": "p09",
    "lane": 1,
    "name": "月球熔炉工业·航线1",
    "level": 1,
    "distanceAU": 1.0,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.213,
    "throughputPerTick": 12,
    "feeRate": 0.062,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.276,
        "fuel": 13
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.061,
        "fuel": 38
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 9,
        "risk": 0.162,
        "fuel": 37
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 2,
        "risk": 0.025,
        "fuel": 31
      }
    ]
  },
  {
    "id": "r42",
    "partnerId": "p09",
    "lane": 2,
    "name": "月球熔炉工业·航线2",
    "level": 2,
    "distanceAU": 1.15,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.256,
    "throughputPerTick": 30,
    "feeRate": 0.068,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 7,
        "risk": 0.2,
        "fuel": 5
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 5,
        "risk": 0.119,
        "fuel": 31
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 2,
        "risk": 0.227,
        "fuel": 5
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.149,
        "fuel": 27
      }
    ]
  },
  {
    "id": "r43",
    "partnerId": "p09",
    "lane": 3,
    "name": "月球熔炉工业·航线3",
    "level": 3,
    "distanceAU": 1.3,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.298,
    "throughputPerTick": 48,
    "feeRate": 0.074,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 4,
        "risk": 0.063,
        "fuel": 32
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 9,
        "risk": 0.118,
        "fuel": 30
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 9,
        "risk": 0.046,
        "fuel": 9
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 4,
        "risk": 0.256,
        "fuel": 10
      }
    ]
  },
  {
    "id": "r44",
    "partnerId": "p09",
    "lane": 4,
    "name": "月球熔炉工业·航线4",
    "level": 1,
    "distanceAU": 1.45,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.341,
    "throughputPerTick": 30,
    "feeRate": 0.081,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 5,
        "risk": 0.192,
        "fuel": 13
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 6,
        "risk": 0.176,
        "fuel": 9
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 6,
        "risk": 0.227,
        "fuel": 31
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.137,
        "fuel": 23
      }
    ]
  },
  {
    "id": "r45",
    "partnerId": "p09",
    "lane": 5,
    "name": "月球熔炉工业·航线5",
    "level": 2,
    "distanceAU": 1.6,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.383,
    "throughputPerTick": 48,
    "feeRate": 0.087,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.059,
        "fuel": 11
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.114,
        "fuel": 22
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.13,
        "fuel": 9
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 3,
        "risk": 0.269,
        "fuel": 20
      }
    ]
  },
  {
    "id": "r46",
    "partnerId": "p10",
    "lane": 1,
    "name": "柯伊伯冰商联盟·航线1",
    "level": 1,
    "distanceAU": 39.5,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.276,
    "throughputPerTick": 12,
    "feeRate": 0.052,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.232,
        "fuel": 24
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 7,
        "risk": 0.115,
        "fuel": 13
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 5,
        "risk": 0.031,
        "fuel": 38
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.168,
        "fuel": 31
      }
    ]
  },
  {
    "id": "r47",
    "partnerId": "p10",
    "lane": 2,
    "name": "柯伊伯冰商联盟·航线2",
    "level": 2,
    "distanceAU": 45.42,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.331,
    "throughputPerTick": 30,
    "feeRate": 0.057,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 5,
        "risk": 0.055,
        "fuel": 28
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 5,
        "risk": 0.073,
        "fuel": 11
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.22,
        "fuel": 18
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 4,
        "risk": 0.287,
        "fuel": 30
      }
    ]
  },
  {
    "id": "r48",
    "partnerId": "p10",
    "lane": 3,
    "name": "柯伊伯冰商联盟·航线3",
    "level": 3,
    "distanceAU": 51.35,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.386,
    "throughputPerTick": 48,
    "feeRate": 0.062,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 3,
        "risk": 0.021,
        "fuel": 22
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 5,
        "risk": 0.225,
        "fuel": 25
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.034,
        "fuel": 11
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.277,
        "fuel": 40
      }
    ]
  },
  {
    "id": "r49",
    "partnerId": "p10",
    "lane": 4,
    "name": "柯伊伯冰商联盟·航线4",
    "level": 1,
    "distanceAU": 57.27,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.442,
    "throughputPerTick": 30,
    "feeRate": 0.068,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 5,
        "risk": 0.097,
        "fuel": 39
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 4,
        "risk": 0.215,
        "fuel": 37
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 2,
        "risk": 0.296,
        "fuel": 18
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 2,
        "risk": 0.19,
        "fuel": 8
      }
    ]
  },
  {
    "id": "r50",
    "partnerId": "p10",
    "lane": 5,
    "name": "柯伊伯冰商联盟·航线5",
    "level": 2,
    "distanceAU": 63.2,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.497,
    "throughputPerTick": 48,
    "feeRate": 0.073,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 4,
        "risk": 0.075,
        "fuel": 28
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 3,
        "risk": 0.155,
        "fuel": 12
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 6,
        "risk": 0.225,
        "fuel": 35
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 9,
        "risk": 0.278,
        "fuel": 36
      }
    ]
  },
  {
    "id": "r51",
    "partnerId": "p11",
    "lane": 1,
    "name": "盖亚生态交易所·航线1",
    "level": 1,
    "distanceAU": 1.52,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.103,
    "throughputPerTick": 12,
    "feeRate": 0.042,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.083,
        "fuel": 10
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 7,
        "risk": 0.09,
        "fuel": 15
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 4,
        "risk": 0.22,
        "fuel": 18
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 3,
        "risk": 0.161,
        "fuel": 21
      }
    ]
  },
  {
    "id": "r52",
    "partnerId": "p11",
    "lane": 2,
    "name": "盖亚生态交易所·航线2",
    "level": 2,
    "distanceAU": 1.75,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.124,
    "throughputPerTick": 30,
    "feeRate": 0.046,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 2,
        "risk": 0.029,
        "fuel": 37
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.225,
        "fuel": 19
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.201,
        "fuel": 29
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 5,
        "risk": 0.136,
        "fuel": 34
      }
    ]
  },
  {
    "id": "r53",
    "partnerId": "p11",
    "lane": 3,
    "name": "盖亚生态交易所·航线3",
    "level": 3,
    "distanceAU": 1.98,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.144,
    "throughputPerTick": 48,
    "feeRate": 0.05,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 2,
        "risk": 0.101,
        "fuel": 36
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.168,
        "fuel": 6
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.152,
        "fuel": 13
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 5,
        "risk": 0.155,
        "fuel": 31
      }
    ]
  },
  {
    "id": "r54",
    "partnerId": "p11",
    "lane": 4,
    "name": "盖亚生态交易所·航线4",
    "level": 1,
    "distanceAU": 2.2,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.165,
    "throughputPerTick": 30,
    "feeRate": 0.055,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 4,
        "risk": 0.168,
        "fuel": 38
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.251,
        "fuel": 21
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 2,
        "risk": 0.204,
        "fuel": 39
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 3,
        "risk": 0.045,
        "fuel": 19
      }
    ]
  },
  {
    "id": "r55",
    "partnerId": "p11",
    "lane": 5,
    "name": "盖亚生态交易所·航线5",
    "level": 2,
    "distanceAU": 2.43,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.185,
    "throughputPerTick": 48,
    "feeRate": 0.059,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 7,
        "risk": 0.141,
        "fuel": 30
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 2,
        "risk": 0.022,
        "fuel": 38
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.103,
        "fuel": 7
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 5,
        "risk": 0.218,
        "fuel": 13
      }
    ]
  },
  {
    "id": "r56",
    "partnerId": "p12",
    "lane": 1,
    "name": "深空拾荒者兄弟会·航线1",
    "level": 1,
    "distanceAU": 4.2,
    "capacity": 60,
    "speed": 1.25,
    "upkeepPerTick": 8,
    "riskBase": 0.336,
    "throughputPerTick": 12,
    "feeRate": 0.061,
    "escortRequired": 0,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 8,
        "risk": 0.119,
        "fuel": 20
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 6,
        "risk": 0.281,
        "fuel": 28
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 2,
        "risk": 0.177,
        "fuel": 36
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 7,
        "risk": 0.164,
        "fuel": 5
      }
    ]
  },
  {
    "id": "r57",
    "partnerId": "p12",
    "lane": 2,
    "name": "深空拾荒者兄弟会·航线2",
    "level": 2,
    "distanceAU": 4.83,
    "capacity": 160,
    "speed": 1.45,
    "upkeepPerTick": 21,
    "riskBase": 0.403,
    "throughputPerTick": 30,
    "feeRate": 0.067,
    "escortRequired": 0,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 9,
        "risk": 0.134,
        "fuel": 18
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 9,
        "risk": 0.158,
        "fuel": 30
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 2,
        "risk": 0.223,
        "fuel": 32
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 9,
        "risk": 0.189,
        "fuel": 19
      }
    ]
  },
  {
    "id": "r58",
    "partnerId": "p12",
    "lane": 3,
    "name": "深空拾荒者兄弟会·航线3",
    "level": 3,
    "distanceAU": 5.46,
    "capacity": 260,
    "speed": 1.65,
    "upkeepPerTick": 34,
    "riskBase": 0.47,
    "throughputPerTick": 48,
    "feeRate": 0.073,
    "escortRequired": 1,
    "upgradeCostCredits": 3600,
    "upgradeCostSteel": 60,
    "maxLevel": 5,
    "revenueMul": 1.7,
    "wearPerTick": 0.03,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 5,
        "risk": 0.227,
        "fuel": 19
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 5,
        "risk": 0.211,
        "fuel": 17
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 7,
        "risk": 0.15,
        "fuel": 28
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 5,
        "risk": 0.072,
        "fuel": 20
      }
    ]
  },
  {
    "id": "r59",
    "partnerId": "p12",
    "lane": 4,
    "name": "深空拾荒者兄弟会·航线4",
    "level": 1,
    "distanceAU": 6.09,
    "capacity": 180,
    "speed": 1.1,
    "upkeepPerTick": 23,
    "riskBase": 0.538,
    "throughputPerTick": 30,
    "feeRate": 0.079,
    "escortRequired": 1,
    "upgradeCostCredits": 400,
    "upgradeCostSteel": 20,
    "maxLevel": 5,
    "revenueMul": 1.0,
    "wearPerTick": 0.01,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 5,
        "risk": 0.131,
        "fuel": 34
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 8,
        "risk": 0.254,
        "fuel": 33
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 5,
        "risk": 0.092,
        "fuel": 40
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.256,
        "fuel": 20
      }
    ]
  },
  {
    "id": "r60",
    "partnerId": "p12",
    "lane": 5,
    "name": "深空拾荒者兄弟会·航线5",
    "level": 2,
    "distanceAU": 6.72,
    "capacity": 280,
    "speed": 1.3,
    "upkeepPerTick": 36,
    "riskBase": 0.605,
    "throughputPerTick": 48,
    "feeRate": 0.085,
    "escortRequired": 1,
    "upgradeCostCredits": 1600,
    "upgradeCostSteel": 40,
    "maxLevel": 5,
    "revenueMul": 1.35,
    "wearPerTick": 0.02,
    "condition": 100,
    "establishedTick": 0,
    "legs": [
      {
        "from": "port1",
        "to": "port2",
        "days": 4,
        "risk": 0.082,
        "fuel": 23
      },
      {
        "from": "port2",
        "to": "port3",
        "days": 7,
        "risk": 0.169,
        "fuel": 9
      },
      {
        "from": "port3",
        "to": "port4",
        "days": 3,
        "risk": 0.152,
        "fuel": 25
      },
      {
        "from": "port4",
        "to": "port5",
        "days": 8,
        "risk": 0.127,
        "fuel": 34
      }
    ]
  }
];

/* ============ §5 合同目录 ============ */
const TRADE31_CONTRACTS = [
  {
    "id": "c001",
    "partnerId": "p01",
    "good": "rare",
    "goodName": "稀土",
    "qty": 15,
    "tier": 1,
    "deadlineTicks": 7,
    "rewardCredits": 660,
    "rewardRelation": 3,
    "penaltyCredits": 206,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "food",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 31,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c002",
    "partnerId": "p01",
    "good": "medicine",
    "goodName": "药品",
    "qty": 40,
    "tier": 2,
    "deadlineTicks": 14,
    "rewardCredits": 3600,
    "rewardRelation": 6,
    "penaltyCredits": 750,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "uranium",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 32,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c003",
    "partnerId": "p01",
    "good": "textile",
    "goodName": "防护织物",
    "qty": 75,
    "tier": 3,
    "deadlineTicks": 23,
    "rewardCredits": 3240,
    "rewardRelation": 9,
    "penaltyCredits": 450,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "polymer",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 33,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c004",
    "partnerId": "p01",
    "good": "antimatter",
    "goodName": "反物质舱",
    "qty": 30,
    "tier": 1,
    "deadlineTicks": 10,
    "rewardCredits": 11520,
    "rewardRelation": 3,
    "penaltyCredits": 3600,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "oxygen",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 34,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c005",
    "partnerId": "p01",
    "good": "rare",
    "goodName": "稀土",
    "qty": 70,
    "tier": 2,
    "deadlineTicks": 17,
    "rewardCredits": 4620,
    "rewardRelation": 6,
    "penaltyCredits": 962,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "chip",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 35,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c006",
    "partnerId": "p01",
    "good": "medicine",
    "goodName": "药品",
    "qty": 120,
    "tier": 3,
    "deadlineTicks": 26,
    "rewardCredits": 16200,
    "rewardRelation": 9,
    "penaltyCredits": 2250,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "luxury",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 36,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c007",
    "partnerId": "p01",
    "good": "textile",
    "goodName": "防护织物",
    "qty": 45,
    "tier": 1,
    "deadlineTicks": 6,
    "rewardCredits": 864,
    "rewardRelation": 3,
    "penaltyCredits": 270,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "bio",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 37,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c008",
    "partnerId": "p01",
    "good": "antimatter",
    "goodName": "反物质舱",
    "qty": 100,
    "tier": 2,
    "deadlineTicks": 13,
    "rewardCredits": 57600,
    "rewardRelation": 6,
    "penaltyCredits": 12000,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "iron",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 38,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 33,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 33,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 33,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c009",
    "partnerId": "p01",
    "good": "rare",
    "goodName": "稀土",
    "qty": 165,
    "tier": 3,
    "deadlineTicks": 22,
    "rewardCredits": 16335,
    "rewardRelation": 9,
    "penaltyCredits": 2268,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "food",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 39,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 55,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 55,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 55,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c010",
    "partnerId": "p01",
    "good": "medicine",
    "goodName": "药品",
    "qty": 60,
    "tier": 1,
    "deadlineTicks": 9,
    "rewardCredits": 3600,
    "rewardRelation": 3,
    "penaltyCredits": 1125,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "uranium",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 40,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c011",
    "partnerId": "p01",
    "good": "textile",
    "goodName": "防护织物",
    "qty": 130,
    "tier": 2,
    "deadlineTicks": 16,
    "rewardCredits": 3744,
    "rewardRelation": 6,
    "penaltyCredits": 780,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "polymer",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 41,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 43,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 43,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 43,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c012",
    "partnerId": "p02",
    "good": "oxygen",
    "goodName": "氧气",
    "qty": 70,
    "tier": 1,
    "deadlineTicks": 11,
    "rewardCredits": 616,
    "rewardRelation": 3,
    "penaltyCredits": 192,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "oxygen",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 42,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c013",
    "partnerId": "p02",
    "good": "luxury",
    "goodName": "奢侈品",
    "qty": 150,
    "tier": 2,
    "deadlineTicks": 18,
    "rewardCredits": 39600,
    "rewardRelation": 6,
    "penaltyCredits": 8250,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "chip",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 43,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c014",
    "partnerId": "p02",
    "good": "iron",
    "goodName": "铁矿",
    "qty": 240,
    "tier": 3,
    "deadlineTicks": 20,
    "rewardCredits": 5184,
    "rewardRelation": 9,
    "penaltyCredits": 720,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "luxury",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 44,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 80,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 80,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 80,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c015",
    "partnerId": "p02",
    "good": "uranium",
    "goodName": "铀矿",
    "qty": 85,
    "tier": 1,
    "deadlineTicks": 7,
    "rewardCredits": 6120,
    "rewardRelation": 3,
    "penaltyCredits": 1912,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "bio",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 45,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c016",
    "partnerId": "p02",
    "good": "oxygen",
    "goodName": "氧气",
    "qty": 180,
    "tier": 2,
    "deadlineTicks": 14,
    "rewardCredits": 2376,
    "rewardRelation": 6,
    "penaltyCredits": 495,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "iron",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 46,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c017",
    "partnerId": "p02",
    "good": "luxury",
    "goodName": "奢侈品",
    "qty": 30,
    "tier": 3,
    "deadlineTicks": 23,
    "rewardCredits": 11880,
    "rewardRelation": 9,
    "penaltyCredits": 1650,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "food",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 47,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c018",
    "partnerId": "p02",
    "good": "iron",
    "goodName": "铁矿",
    "qty": 15,
    "tier": 1,
    "deadlineTicks": 10,
    "rewardCredits": 144,
    "rewardRelation": 3,
    "penaltyCredits": 45,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "uranium",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 48,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c019",
    "partnerId": "p02",
    "good": "uranium",
    "goodName": "铀矿",
    "qty": 40,
    "tier": 2,
    "deadlineTicks": 17,
    "rewardCredits": 4320,
    "rewardRelation": 6,
    "penaltyCredits": 900,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "polymer",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 49,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c020",
    "partnerId": "p02",
    "good": "oxygen",
    "goodName": "氧气",
    "qty": 75,
    "tier": 3,
    "deadlineTicks": 26,
    "rewardCredits": 1485,
    "rewardRelation": 9,
    "penaltyCredits": 206,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "oxygen",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 30,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c021",
    "partnerId": "p02",
    "good": "luxury",
    "goodName": "奢侈品",
    "qty": 30,
    "tier": 1,
    "deadlineTicks": 6,
    "rewardCredits": 5280,
    "rewardRelation": 3,
    "penaltyCredits": 1650,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "chip",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 31,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c022",
    "partnerId": "p02",
    "good": "iron",
    "goodName": "铁矿",
    "qty": 70,
    "tier": 2,
    "deadlineTicks": 13,
    "rewardCredits": 1008,
    "rewardRelation": 6,
    "penaltyCredits": 210,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "luxury",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 32,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c023",
    "partnerId": "p03",
    "good": "artifact",
    "goodName": "遗迹文物",
    "qty": 40,
    "tier": 1,
    "deadlineTicks": 8,
    "rewardCredits": 10240,
    "rewardRelation": 3,
    "penaltyCredits": 3200,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "bio",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 33,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c024",
    "partnerId": "p03",
    "good": "ice",
    "goodName": "冰矿",
    "qty": 90,
    "tier": 2,
    "deadlineTicks": 15,
    "rewardCredits": 972,
    "rewardRelation": 6,
    "penaltyCredits": 202,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "iron",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 34,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c025",
    "partnerId": "p03",
    "good": "he3",
    "goodName": "氦-3",
    "qty": 150,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 37800,
    "rewardRelation": 9,
    "penaltyCredits": 5250,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "food",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 35,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c026",
    "partnerId": "p03",
    "good": "seeds",
    "goodName": "改良种子",
    "qty": 55,
    "tier": 1,
    "deadlineTicks": 11,
    "rewardCredits": 2112,
    "rewardRelation": 3,
    "penaltyCredits": 660,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "uranium",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 36,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c027",
    "partnerId": "p03",
    "good": "artifact",
    "goodName": "遗迹文物",
    "qty": 120,
    "tier": 2,
    "deadlineTicks": 18,
    "rewardCredits": 46080,
    "rewardRelation": 6,
    "penaltyCredits": 9600,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "polymer",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 37,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c028",
    "partnerId": "p03",
    "good": "ice",
    "goodName": "冰矿",
    "qty": 195,
    "tier": 3,
    "deadlineTicks": 20,
    "rewardCredits": 3159,
    "rewardRelation": 9,
    "penaltyCredits": 438,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "oxygen",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 38,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 65,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 65,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 65,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c029",
    "partnerId": "p03",
    "good": "he3",
    "goodName": "氦-3",
    "qty": 70,
    "tier": 1,
    "deadlineTicks": 7,
    "rewardCredits": 7840,
    "rewardRelation": 3,
    "penaltyCredits": 2450,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "chip",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 39,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c030",
    "partnerId": "p03",
    "good": "seeds",
    "goodName": "改良种子",
    "qty": 150,
    "tier": 2,
    "deadlineTicks": 14,
    "rewardCredits": 8640,
    "rewardRelation": 6,
    "penaltyCredits": 1800,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "luxury",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 40,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c031",
    "partnerId": "p03",
    "good": "artifact",
    "goodName": "遗迹文物",
    "qty": 240,
    "tier": 3,
    "deadlineTicks": 23,
    "rewardCredits": 138240,
    "rewardRelation": 9,
    "penaltyCredits": 19200,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "bio",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 41,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 80,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 80,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 80,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c032",
    "partnerId": "p03",
    "good": "ice",
    "goodName": "冰矿",
    "qty": 85,
    "tier": 1,
    "deadlineTicks": 10,
    "rewardCredits": 612,
    "rewardRelation": 3,
    "penaltyCredits": 191,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "iron",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 42,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c033",
    "partnerId": "p03",
    "good": "he3",
    "goodName": "氦-3",
    "qty": 180,
    "tier": 2,
    "deadlineTicks": 17,
    "rewardCredits": 30240,
    "rewardRelation": 6,
    "penaltyCredits": 6300,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "food",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 43,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c034",
    "partnerId": "p04",
    "good": "water",
    "goodName": "水",
    "qty": 10,
    "tier": 1,
    "deadlineTicks": 12,
    "rewardCredits": 112,
    "rewardRelation": 3,
    "penaltyCredits": 35,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "uranium",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 44,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 3,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 3,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 3,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c035",
    "partnerId": "p04",
    "good": "tech",
    "goodName": "科技点",
    "qty": 30,
    "tier": 2,
    "deadlineTicks": 12,
    "rewardCredits": 2160,
    "rewardRelation": 6,
    "penaltyCredits": 450,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "polymer",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 45,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c036",
    "partnerId": "p04",
    "good": "machine",
    "goodName": "精密机械",
    "qty": 60,
    "tier": 3,
    "deadlineTicks": 21,
    "rewardCredits": 11880,
    "rewardRelation": 9,
    "penaltyCredits": 1650,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "oxygen",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 46,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c037",
    "partnerId": "p04",
    "good": "alloy",
    "goodName": "记忆合金",
    "qty": 25,
    "tier": 1,
    "deadlineTicks": 8,
    "rewardCredits": 2600,
    "rewardRelation": 3,
    "penaltyCredits": 812,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "chip",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 47,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 8,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 8,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 8,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c038",
    "partnerId": "p04",
    "good": "water",
    "goodName": "水",
    "qty": 60,
    "tier": 2,
    "deadlineTicks": 15,
    "rewardCredits": 1008,
    "rewardRelation": 6,
    "penaltyCredits": 210,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "luxury",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 48,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c039",
    "partnerId": "p04",
    "good": "tech",
    "goodName": "科技点",
    "qty": 105,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 11340,
    "rewardRelation": 9,
    "penaltyCredits": 1575,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "bio",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 49,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 35,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 35,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 35,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c040",
    "partnerId": "p04",
    "good": "machine",
    "goodName": "精密机械",
    "qty": 40,
    "tier": 1,
    "deadlineTicks": 11,
    "rewardCredits": 3520,
    "rewardRelation": 3,
    "penaltyCredits": 1100,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "iron",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 30,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c041",
    "partnerId": "p04",
    "good": "alloy",
    "goodName": "记忆合金",
    "qty": 90,
    "tier": 2,
    "deadlineTicks": 18,
    "rewardCredits": 14040,
    "rewardRelation": 6,
    "penaltyCredits": 2925,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "food",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 31,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c042",
    "partnerId": "p04",
    "good": "water",
    "goodName": "水",
    "qty": 150,
    "tier": 3,
    "deadlineTicks": 20,
    "rewardCredits": 3780,
    "rewardRelation": 9,
    "penaltyCredits": 525,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "uranium",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 32,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c043",
    "partnerId": "p04",
    "good": "tech",
    "goodName": "科技点",
    "qty": 55,
    "tier": 1,
    "deadlineTicks": 7,
    "rewardCredits": 2640,
    "rewardRelation": 3,
    "penaltyCredits": 825,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "polymer",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 33,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c044",
    "partnerId": "p04",
    "good": "machine",
    "goodName": "精密机械",
    "qty": 120,
    "tier": 2,
    "deadlineTicks": 14,
    "rewardCredits": 15840,
    "rewardRelation": 6,
    "penaltyCredits": 3300,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "oxygen",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 34,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c045",
    "partnerId": "p05",
    "good": "polymer",
    "goodName": "聚合物",
    "qty": 65,
    "tier": 1,
    "deadlineTicks": 9,
    "rewardCredits": 1456,
    "rewardRelation": 3,
    "penaltyCredits": 455,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "chip",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 35,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 21,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 21,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 21,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c046",
    "partnerId": "p05",
    "good": "chip",
    "goodName": "量子芯片",
    "qty": 140,
    "tier": 2,
    "deadlineTicks": 16,
    "rewardCredits": 30240,
    "rewardRelation": 6,
    "penaltyCredits": 6300,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "luxury",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 36,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 46,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 46,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 46,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c047",
    "partnerId": "p05",
    "good": "bio",
    "goodName": "生物样本",
    "qty": 225,
    "tier": 3,
    "deadlineTicks": 25,
    "rewardCredits": 64800,
    "rewardRelation": 9,
    "penaltyCredits": 9000,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "bio",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 37,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 75,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 75,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 75,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c048",
    "partnerId": "p05",
    "good": "food",
    "goodName": "食物",
    "qty": 80,
    "tier": 1,
    "deadlineTicks": 12,
    "rewardCredits": 1152,
    "rewardRelation": 3,
    "penaltyCredits": 360,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "iron",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 38,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c049",
    "partnerId": "p05",
    "good": "polymer",
    "goodName": "聚合物",
    "qty": 170,
    "tier": 2,
    "deadlineTicks": 12,
    "rewardCredits": 5712,
    "rewardRelation": 6,
    "penaltyCredits": 1190,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "food",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 39,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 56,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 56,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 56,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c050",
    "partnerId": "p05",
    "good": "chip",
    "goodName": "量子芯片",
    "qty": 270,
    "tier": 3,
    "deadlineTicks": 21,
    "rewardCredits": 87480,
    "rewardRelation": 9,
    "penaltyCredits": 12150,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "uranium",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 40,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 90,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 90,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 90,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c051",
    "partnerId": "p05",
    "good": "bio",
    "goodName": "生物样本",
    "qty": 10,
    "tier": 1,
    "deadlineTicks": 8,
    "rewardCredits": 1280,
    "rewardRelation": 3,
    "penaltyCredits": 400,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "polymer",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 41,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 3,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 3,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 3,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c052",
    "partnerId": "p05",
    "good": "food",
    "goodName": "食物",
    "qty": 30,
    "tier": 2,
    "deadlineTicks": 15,
    "rewardCredits": 648,
    "rewardRelation": 6,
    "penaltyCredits": 135,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "oxygen",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 42,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c053",
    "partnerId": "p05",
    "good": "polymer",
    "goodName": "聚合物",
    "qty": 60,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 3024,
    "rewardRelation": 9,
    "penaltyCredits": 420,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "chip",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 43,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c054",
    "partnerId": "p05",
    "good": "chip",
    "goodName": "量子芯片",
    "qty": 25,
    "tier": 1,
    "deadlineTicks": 11,
    "rewardCredits": 3600,
    "rewardRelation": 3,
    "penaltyCredits": 1125,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "luxury",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 44,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 8,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 8,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 8,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c055",
    "partnerId": "p05",
    "good": "bio",
    "goodName": "生物样本",
    "qty": 60,
    "tier": 2,
    "deadlineTicks": 18,
    "rewardCredits": 11520,
    "rewardRelation": 6,
    "penaltyCredits": 2400,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "bio",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 45,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c056",
    "partnerId": "p06",
    "good": "fuel",
    "goodName": "聚变燃料",
    "qty": 35,
    "tier": 1,
    "deadlineTicks": 6,
    "rewardCredits": 2660,
    "rewardRelation": 3,
    "penaltyCredits": 831,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "iron",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 46,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 11,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 11,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 11,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c057",
    "partnerId": "p06",
    "good": "ceramic",
    "goodName": "耐热陶瓷",
    "qty": 80,
    "tier": 2,
    "deadlineTicks": 13,
    "rewardCredits": 4032,
    "rewardRelation": 6,
    "penaltyCredits": 840,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "food",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 47,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c058",
    "partnerId": "p06",
    "good": "steel",
    "goodName": "钢材",
    "qty": 135,
    "tier": 3,
    "deadlineTicks": 22,
    "rewardCredits": 7776,
    "rewardRelation": 9,
    "penaltyCredits": 1080,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "uranium",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 48,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 45,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 45,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 45,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c059",
    "partnerId": "p06",
    "good": "glass",
    "goodName": "特种玻璃",
    "qty": 50,
    "tier": 1,
    "deadlineTicks": 9,
    "rewardCredits": 1440,
    "rewardRelation": 3,
    "penaltyCredits": 450,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "polymer",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 49,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c060",
    "partnerId": "p06",
    "good": "fuel",
    "goodName": "聚变燃料",
    "qty": 110,
    "tier": 2,
    "deadlineTicks": 16,
    "rewardCredits": 12540,
    "rewardRelation": 6,
    "penaltyCredits": 2612,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "oxygen",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 30,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 36,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 36,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 36,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c061",
    "partnerId": "p06",
    "good": "ceramic",
    "goodName": "耐热陶瓷",
    "qty": 180,
    "tier": 3,
    "deadlineTicks": 25,
    "rewardCredits": 13608,
    "rewardRelation": 9,
    "penaltyCredits": 1890,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "chip",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 31,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c062",
    "partnerId": "p06",
    "good": "steel",
    "goodName": "钢材",
    "qty": 65,
    "tier": 1,
    "deadlineTicks": 12,
    "rewardCredits": 1664,
    "rewardRelation": 3,
    "penaltyCredits": 520,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "luxury",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 32,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 21,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 21,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 21,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c063",
    "partnerId": "p06",
    "good": "glass",
    "goodName": "特种玻璃",
    "qty": 140,
    "tier": 2,
    "deadlineTicks": 12,
    "rewardCredits": 6048,
    "rewardRelation": 6,
    "penaltyCredits": 1260,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "bio",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 33,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 46,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 46,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 46,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c064",
    "partnerId": "p06",
    "good": "fuel",
    "goodName": "聚变燃料",
    "qty": 225,
    "tier": 3,
    "deadlineTicks": 21,
    "rewardCredits": 38475,
    "rewardRelation": 9,
    "penaltyCredits": 5343,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "iron",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 34,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 75,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 75,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 75,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c065",
    "partnerId": "p06",
    "good": "ceramic",
    "goodName": "耐热陶瓷",
    "qty": 80,
    "tier": 1,
    "deadlineTicks": 8,
    "rewardCredits": 2688,
    "rewardRelation": 3,
    "penaltyCredits": 840,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "food",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 35,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c066",
    "partnerId": "p06",
    "good": "steel",
    "goodName": "钢材",
    "qty": 170,
    "tier": 2,
    "deadlineTicks": 15,
    "rewardCredits": 6528,
    "rewardRelation": 6,
    "penaltyCredits": 1360,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "uranium",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 36,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 56,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 56,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 56,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c067",
    "partnerId": "p07",
    "good": "antimatter",
    "goodName": "反物质舱",
    "qty": 90,
    "tier": 1,
    "deadlineTicks": 10,
    "rewardCredits": 34560,
    "rewardRelation": 3,
    "penaltyCredits": 10800,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "polymer",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 37,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c068",
    "partnerId": "p07",
    "good": "rare",
    "goodName": "稀土",
    "qty": 20,
    "tier": 2,
    "deadlineTicks": 17,
    "rewardCredits": 1320,
    "rewardRelation": 6,
    "penaltyCredits": 275,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "oxygen",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 38,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c069",
    "partnerId": "p07",
    "good": "medicine",
    "goodName": "药品",
    "qty": 45,
    "tier": 3,
    "deadlineTicks": 26,
    "rewardCredits": 6075,
    "rewardRelation": 9,
    "penaltyCredits": 843,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "chip",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 39,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c070",
    "partnerId": "p07",
    "good": "textile",
    "goodName": "防护织物",
    "qty": 20,
    "tier": 1,
    "deadlineTicks": 6,
    "rewardCredits": 384,
    "rewardRelation": 3,
    "penaltyCredits": 120,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "luxury",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 40,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c071",
    "partnerId": "p07",
    "good": "antimatter",
    "goodName": "反物质舱",
    "qty": 50,
    "tier": 2,
    "deadlineTicks": 13,
    "rewardCredits": 28800,
    "rewardRelation": 6,
    "penaltyCredits": 6000,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "bio",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 41,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c072",
    "partnerId": "p07",
    "good": "rare",
    "goodName": "稀土",
    "qty": 90,
    "tier": 3,
    "deadlineTicks": 22,
    "rewardCredits": 8910,
    "rewardRelation": 9,
    "penaltyCredits": 1237,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "iron",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 42,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c073",
    "partnerId": "p07",
    "good": "medicine",
    "goodName": "药品",
    "qty": 35,
    "tier": 1,
    "deadlineTicks": 9,
    "rewardCredits": 2100,
    "rewardRelation": 3,
    "penaltyCredits": 656,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "food",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 43,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 11,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 11,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 11,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c074",
    "partnerId": "p07",
    "good": "textile",
    "goodName": "防护织物",
    "qty": 80,
    "tier": 2,
    "deadlineTicks": 16,
    "rewardCredits": 2304,
    "rewardRelation": 6,
    "penaltyCredits": 480,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "uranium",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 44,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 26,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c075",
    "partnerId": "p07",
    "good": "antimatter",
    "goodName": "反物质舱",
    "qty": 135,
    "tier": 3,
    "deadlineTicks": 25,
    "rewardCredits": 116640,
    "rewardRelation": 9,
    "penaltyCredits": 16200,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "polymer",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 45,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 45,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 45,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 45,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c076",
    "partnerId": "p07",
    "good": "rare",
    "goodName": "稀土",
    "qty": 50,
    "tier": 1,
    "deadlineTicks": 12,
    "rewardCredits": 2200,
    "rewardRelation": 3,
    "penaltyCredits": 687,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "oxygen",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 46,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c077",
    "partnerId": "p07",
    "good": "medicine",
    "goodName": "药品",
    "qty": 110,
    "tier": 2,
    "deadlineTicks": 12,
    "rewardCredits": 9900,
    "rewardRelation": 6,
    "penaltyCredits": 2062,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "chip",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 47,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 36,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 36,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 36,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c078",
    "partnerId": "p08",
    "good": "uranium",
    "goodName": "铀矿",
    "qty": 60,
    "tier": 1,
    "deadlineTicks": 7,
    "rewardCredits": 4320,
    "rewardRelation": 3,
    "penaltyCredits": 1350,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "luxury",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 48,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c079",
    "partnerId": "p08",
    "good": "oxygen",
    "goodName": "氧气",
    "qty": 130,
    "tier": 2,
    "deadlineTicks": 14,
    "rewardCredits": 1716,
    "rewardRelation": 6,
    "penaltyCredits": 357,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "bio",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 49,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 43,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 43,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 43,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c080",
    "partnerId": "p08",
    "good": "luxury",
    "goodName": "奢侈品",
    "qty": 210,
    "tier": 3,
    "deadlineTicks": 23,
    "rewardCredits": 83160,
    "rewardRelation": 9,
    "penaltyCredits": 11550,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "iron",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 30,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 70,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 70,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 70,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c081",
    "partnerId": "p08",
    "good": "iron",
    "goodName": "铁矿",
    "qty": 75,
    "tier": 1,
    "deadlineTicks": 10,
    "rewardCredits": 720,
    "rewardRelation": 3,
    "penaltyCredits": 225,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "food",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 31,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c082",
    "partnerId": "p08",
    "good": "uranium",
    "goodName": "铀矿",
    "qty": 160,
    "tier": 2,
    "deadlineTicks": 17,
    "rewardCredits": 17280,
    "rewardRelation": 6,
    "penaltyCredits": 3600,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "uranium",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 32,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 53,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 53,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 53,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c083",
    "partnerId": "p08",
    "good": "oxygen",
    "goodName": "氧气",
    "qty": 255,
    "tier": 3,
    "deadlineTicks": 26,
    "rewardCredits": 5049,
    "rewardRelation": 9,
    "penaltyCredits": 701,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "polymer",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 33,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 85,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 85,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 85,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c084",
    "partnerId": "p08",
    "good": "luxury",
    "goodName": "奢侈品",
    "qty": 90,
    "tier": 1,
    "deadlineTicks": 6,
    "rewardCredits": 15840,
    "rewardRelation": 3,
    "penaltyCredits": 4950,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "oxygen",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 34,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c085",
    "partnerId": "p08",
    "good": "iron",
    "goodName": "铁矿",
    "qty": 20,
    "tier": 2,
    "deadlineTicks": 13,
    "rewardCredits": 288,
    "rewardRelation": 6,
    "penaltyCredits": 60,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "chip",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 35,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c086",
    "partnerId": "p08",
    "good": "uranium",
    "goodName": "铀矿",
    "qty": 45,
    "tier": 3,
    "deadlineTicks": 22,
    "rewardCredits": 7290,
    "rewardRelation": 9,
    "penaltyCredits": 1012,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "luxury",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 36,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c087",
    "partnerId": "p08",
    "good": "oxygen",
    "goodName": "氧气",
    "qty": 20,
    "tier": 1,
    "deadlineTicks": 9,
    "rewardCredits": 176,
    "rewardRelation": 3,
    "penaltyCredits": 55,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "bio",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 37,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 6,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c088",
    "partnerId": "p08",
    "good": "luxury",
    "goodName": "奢侈品",
    "qty": 50,
    "tier": 2,
    "deadlineTicks": 16,
    "rewardCredits": 13200,
    "rewardRelation": 6,
    "penaltyCredits": 2750,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "iron",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 38,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 16,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c089",
    "partnerId": "p09",
    "good": "seeds",
    "goodName": "改良种子",
    "qty": 30,
    "tier": 1,
    "deadlineTicks": 11,
    "rewardCredits": 1152,
    "rewardRelation": 3,
    "penaltyCredits": 360,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "food",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 39,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c090",
    "partnerId": "p09",
    "good": "artifact",
    "goodName": "遗迹文物",
    "qty": 70,
    "tier": 2,
    "deadlineTicks": 18,
    "rewardCredits": 26880,
    "rewardRelation": 6,
    "penaltyCredits": 5600,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "uranium",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 40,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c091",
    "partnerId": "p09",
    "good": "ice",
    "goodName": "冰矿",
    "qty": 120,
    "tier": 3,
    "deadlineTicks": 20,
    "rewardCredits": 1944,
    "rewardRelation": 9,
    "penaltyCredits": 270,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "polymer",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 41,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c092",
    "partnerId": "p09",
    "good": "he3",
    "goodName": "氦-3",
    "qty": 45,
    "tier": 1,
    "deadlineTicks": 7,
    "rewardCredits": 5040,
    "rewardRelation": 3,
    "penaltyCredits": 1575,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "oxygen",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 42,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c093",
    "partnerId": "p09",
    "good": "seeds",
    "goodName": "改良种子",
    "qty": 100,
    "tier": 2,
    "deadlineTicks": 14,
    "rewardCredits": 5760,
    "rewardRelation": 6,
    "penaltyCredits": 1200,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "chip",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 43,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 33,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 33,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 33,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c094",
    "partnerId": "p09",
    "good": "artifact",
    "goodName": "遗迹文物",
    "qty": 165,
    "tier": 3,
    "deadlineTicks": 23,
    "rewardCredits": 95040,
    "rewardRelation": 9,
    "penaltyCredits": 13200,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "luxury",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 44,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 55,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 55,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 55,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c095",
    "partnerId": "p09",
    "good": "ice",
    "goodName": "冰矿",
    "qty": 60,
    "tier": 1,
    "deadlineTicks": 10,
    "rewardCredits": 432,
    "rewardRelation": 3,
    "penaltyCredits": 135,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "bio",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 45,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c096",
    "partnerId": "p09",
    "good": "he3",
    "goodName": "氦-3",
    "qty": 130,
    "tier": 2,
    "deadlineTicks": 17,
    "rewardCredits": 21840,
    "rewardRelation": 6,
    "penaltyCredits": 4550,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "iron",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 46,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 43,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 43,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 43,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c097",
    "partnerId": "p09",
    "good": "seeds",
    "goodName": "改良种子",
    "qty": 210,
    "tier": 3,
    "deadlineTicks": 26,
    "rewardCredits": 18144,
    "rewardRelation": 9,
    "penaltyCredits": 2520,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "food",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 47,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 70,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 70,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 70,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c098",
    "partnerId": "p09",
    "good": "artifact",
    "goodName": "遗迹文物",
    "qty": 75,
    "tier": 1,
    "deadlineTicks": 6,
    "rewardCredits": 19200,
    "rewardRelation": 3,
    "penaltyCredits": 6000,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "uranium",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 48,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c099",
    "partnerId": "p09",
    "good": "ice",
    "goodName": "冰矿",
    "qty": 160,
    "tier": 2,
    "deadlineTicks": 13,
    "rewardCredits": 1728,
    "rewardRelation": 6,
    "penaltyCredits": 360,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "polymer",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 49,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 53,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 53,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 53,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c100",
    "partnerId": "p10",
    "good": "alloy",
    "goodName": "记忆合金",
    "qty": 85,
    "tier": 1,
    "deadlineTicks": 8,
    "rewardCredits": 8840,
    "rewardRelation": 3,
    "penaltyCredits": 2762,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "oxygen",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 30,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c101",
    "partnerId": "p10",
    "good": "water",
    "goodName": "水",
    "qty": 180,
    "tier": 2,
    "deadlineTicks": 15,
    "rewardCredits": 3024,
    "rewardRelation": 6,
    "penaltyCredits": 630,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "chip",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 31,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c102",
    "partnerId": "p10",
    "good": "tech",
    "goodName": "科技点",
    "qty": 30,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 3240,
    "rewardRelation": 9,
    "penaltyCredits": 450,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "luxury",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 32,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c103",
    "partnerId": "p10",
    "good": "machine",
    "goodName": "精密机械",
    "qty": 15,
    "tier": 1,
    "deadlineTicks": 11,
    "rewardCredits": 1320,
    "rewardRelation": 3,
    "penaltyCredits": 412,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "bio",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 33,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c104",
    "partnerId": "p10",
    "good": "alloy",
    "goodName": "记忆合金",
    "qty": 40,
    "tier": 2,
    "deadlineTicks": 18,
    "rewardCredits": 6240,
    "rewardRelation": 6,
    "penaltyCredits": 1300,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "iron",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 34,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c105",
    "partnerId": "p10",
    "good": "water",
    "goodName": "水",
    "qty": 75,
    "tier": 3,
    "deadlineTicks": 20,
    "rewardCredits": 1890,
    "rewardRelation": 9,
    "penaltyCredits": 262,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "food",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 35,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 25,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c106",
    "partnerId": "p10",
    "good": "tech",
    "goodName": "科技点",
    "qty": 30,
    "tier": 1,
    "deadlineTicks": 7,
    "rewardCredits": 1440,
    "rewardRelation": 3,
    "penaltyCredits": 450,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "uranium",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 36,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c107",
    "partnerId": "p10",
    "good": "machine",
    "goodName": "精密机械",
    "qty": 70,
    "tier": 2,
    "deadlineTicks": 14,
    "rewardCredits": 9240,
    "rewardRelation": 6,
    "penaltyCredits": 1925,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "polymer",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 37,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c108",
    "partnerId": "p10",
    "good": "alloy",
    "goodName": "记忆合金",
    "qty": 120,
    "tier": 3,
    "deadlineTicks": 23,
    "rewardCredits": 28080,
    "rewardRelation": 9,
    "penaltyCredits": 3900,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "oxygen",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 38,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c109",
    "partnerId": "p10",
    "good": "water",
    "goodName": "水",
    "qty": 45,
    "tier": 1,
    "deadlineTicks": 10,
    "rewardCredits": 504,
    "rewardRelation": 3,
    "penaltyCredits": 157,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "chip",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 39,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 15,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c110",
    "partnerId": "p10",
    "good": "tech",
    "goodName": "科技点",
    "qty": 100,
    "tier": 2,
    "deadlineTicks": 17,
    "rewardCredits": 7200,
    "rewardRelation": 6,
    "penaltyCredits": 1500,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "luxury",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 40,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 33,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 33,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 33,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c111",
    "partnerId": "p11",
    "good": "food",
    "goodName": "食物",
    "qty": 55,
    "tier": 1,
    "deadlineTicks": 12,
    "rewardCredits": 792,
    "rewardRelation": 3,
    "penaltyCredits": 247,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "bio",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 41,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c112",
    "partnerId": "p11",
    "good": "polymer",
    "goodName": "聚合物",
    "qty": 120,
    "tier": 2,
    "deadlineTicks": 12,
    "rewardCredits": 4032,
    "rewardRelation": 6,
    "penaltyCredits": 840,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "iron",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 42,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c113",
    "partnerId": "p11",
    "good": "chip",
    "goodName": "量子芯片",
    "qty": 195,
    "tier": 3,
    "deadlineTicks": 21,
    "rewardCredits": 63180,
    "rewardRelation": 9,
    "penaltyCredits": 8775,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "food",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 43,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 65,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 65,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 65,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c114",
    "partnerId": "p11",
    "good": "bio",
    "goodName": "生物样本",
    "qty": 70,
    "tier": 1,
    "deadlineTicks": 8,
    "rewardCredits": 8960,
    "rewardRelation": 3,
    "penaltyCredits": 2800,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "uranium",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 44,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c115",
    "partnerId": "p11",
    "good": "food",
    "goodName": "食物",
    "qty": 150,
    "tier": 2,
    "deadlineTicks": 15,
    "rewardCredits": 3240,
    "rewardRelation": 6,
    "penaltyCredits": 675,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "polymer",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 45,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c116",
    "partnerId": "p11",
    "good": "polymer",
    "goodName": "聚合物",
    "qty": 240,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 12096,
    "rewardRelation": 9,
    "penaltyCredits": 1680,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "oxygen",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 46,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 80,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 80,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 80,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c117",
    "partnerId": "p11",
    "good": "chip",
    "goodName": "量子芯片",
    "qty": 85,
    "tier": 1,
    "deadlineTicks": 11,
    "rewardCredits": 12240,
    "rewardRelation": 3,
    "penaltyCredits": 3825,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "chip",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 47,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 28,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c118",
    "partnerId": "p11",
    "good": "bio",
    "goodName": "生物样本",
    "qty": 180,
    "tier": 2,
    "deadlineTicks": 18,
    "rewardCredits": 34560,
    "rewardRelation": 6,
    "penaltyCredits": 7200,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "luxury",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 48,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 60,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c119",
    "partnerId": "p11",
    "good": "food",
    "goodName": "食物",
    "qty": 30,
    "tier": 3,
    "deadlineTicks": 20,
    "rewardCredits": 972,
    "rewardRelation": 9,
    "penaltyCredits": 135,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "bio",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 49,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 10,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c120",
    "partnerId": "p11",
    "good": "polymer",
    "goodName": "聚合物",
    "qty": 15,
    "tier": 1,
    "deadlineTicks": 7,
    "rewardCredits": 336,
    "rewardRelation": 3,
    "penaltyCredits": 105,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "iron",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 30,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 5,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c121",
    "partnerId": "p11",
    "good": "chip",
    "goodName": "量子芯片",
    "qty": 40,
    "tier": 2,
    "deadlineTicks": 14,
    "rewardCredits": 8640,
    "rewardRelation": 6,
    "penaltyCredits": 1800,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "food",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 31,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c122",
    "partnerId": "p12",
    "good": "glass",
    "goodName": "特种玻璃",
    "qty": 25,
    "tier": 1,
    "deadlineTicks": 9,
    "rewardCredits": 720,
    "rewardRelation": 3,
    "penaltyCredits": 225,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "uranium",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 32,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 8,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 8,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 8,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c123",
    "partnerId": "p12",
    "good": "fuel",
    "goodName": "聚变燃料",
    "qty": 60,
    "tier": 2,
    "deadlineTicks": 16,
    "rewardCredits": 6840,
    "rewardRelation": 6,
    "penaltyCredits": 1425,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "polymer",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 33,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 20,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c124",
    "partnerId": "p12",
    "good": "ceramic",
    "goodName": "耐热陶瓷",
    "qty": 105,
    "tier": 3,
    "deadlineTicks": 25,
    "rewardCredits": 7938,
    "rewardRelation": 9,
    "penaltyCredits": 1102,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "oxygen",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 34,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 35,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 35,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 35,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c125",
    "partnerId": "p12",
    "good": "steel",
    "goodName": "钢材",
    "qty": 40,
    "tier": 1,
    "deadlineTicks": 12,
    "rewardCredits": 1024,
    "rewardRelation": 3,
    "penaltyCredits": 320,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "chip",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 35,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 13,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c126",
    "partnerId": "p12",
    "good": "glass",
    "goodName": "特种玻璃",
    "qty": 90,
    "tier": 2,
    "deadlineTicks": 12,
    "rewardCredits": 3888,
    "rewardRelation": 6,
    "penaltyCredits": 810,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "luxury",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 36,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 30,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c127",
    "partnerId": "p12",
    "good": "fuel",
    "goodName": "聚变燃料",
    "qty": 150,
    "tier": 3,
    "deadlineTicks": 21,
    "rewardCredits": 25650,
    "rewardRelation": 9,
    "penaltyCredits": 3562,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "bio",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 37,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c128",
    "partnerId": "p12",
    "good": "ceramic",
    "goodName": "耐热陶瓷",
    "qty": 55,
    "tier": 1,
    "deadlineTicks": 8,
    "rewardCredits": 1848,
    "rewardRelation": 3,
    "penaltyCredits": 577,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "iron",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 38,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 18,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c129",
    "partnerId": "p12",
    "good": "steel",
    "goodName": "钢材",
    "qty": 120,
    "tier": 2,
    "deadlineTicks": 15,
    "rewardCredits": 4608,
    "rewardRelation": 6,
    "penaltyCredits": 960,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "food",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 39,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c130",
    "partnerId": "p12",
    "good": "glass",
    "goodName": "特种玻璃",
    "qty": 195,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 12636,
    "rewardRelation": 9,
    "penaltyCredits": 1755,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "uranium",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 40,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 65,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 65,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 65,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c131",
    "partnerId": "p12",
    "good": "fuel",
    "goodName": "聚变燃料",
    "qty": 70,
    "tier": 1,
    "deadlineTicks": 11,
    "rewardCredits": 5320,
    "rewardRelation": 3,
    "penaltyCredits": 1662,
    "penaltyRelation": -2,
    "minRelation": 0,
    "bonusGood": "polymer",
    "bonusQty": 2,
    "repeatable": 1,
    "expiryTicks": 41,
    "acceptFeeCredits": 10,
    "rushBonus": 0.15,
    "stages": [
      {
        "stage": 1,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 23,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c132",
    "partnerId": "p12",
    "good": "ceramic",
    "goodName": "耐热陶瓷",
    "qty": 150,
    "tier": 2,
    "deadlineTicks": 18,
    "rewardCredits": 7560,
    "rewardRelation": 6,
    "penaltyCredits": 1575,
    "penaltyRelation": -4,
    "minRelation": 20,
    "bonusGood": "oxygen",
    "bonusQty": 4,
    "repeatable": 1,
    "expiryTicks": 42,
    "acceptFeeCredits": 20,
    "rushBonus": 0.3,
    "stages": [
      {
        "stage": 1,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 50,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c133",
    "partnerId": "p01",
    "good": "ice",
    "goodName": "冰矿",
    "qty": 100,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 1620,
    "rewardRelation": 9,
    "penaltyCredits": 225,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "iron",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 40,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c134",
    "partnerId": "p02",
    "good": "rare",
    "goodName": "稀土",
    "qty": 120,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 11880,
    "rewardRelation": 9,
    "penaltyCredits": 1375,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "food",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 40,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c135",
    "partnerId": "p03",
    "good": "polymer",
    "goodName": "聚合物",
    "qty": 140,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 7056,
    "rewardRelation": 9,
    "penaltyCredits": 700,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "uranium",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 40,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c136",
    "partnerId": "p04",
    "good": "seeds",
    "goodName": "改良种子",
    "qty": 160,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 13824,
    "rewardRelation": 9,
    "penaltyCredits": 1200,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "polymer",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 40,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c137",
    "partnerId": "p05",
    "good": "textile",
    "goodName": "防护织物",
    "qty": 180,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 7776,
    "rewardRelation": 9,
    "penaltyCredits": 600,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "oxygen",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 40,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  },
  {
    "id": "c138",
    "partnerId": "p06",
    "good": "bio",
    "goodName": "生物样本",
    "qty": 200,
    "tier": 3,
    "deadlineTicks": 24,
    "rewardCredits": 57600,
    "rewardRelation": 9,
    "penaltyCredits": 4000,
    "penaltyRelation": -6,
    "minRelation": 45,
    "bonusGood": "chip",
    "bonusQty": 6,
    "repeatable": 0,
    "expiryTicks": 40,
    "acceptFeeCredits": 30,
    "rushBonus": 0.45,
    "stages": [
      {
        "stage": 1,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.33
      },
      {
        "stage": 2,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 0.67
      },
      {
        "stage": 3,
        "qty": 40,
        "rewardShare": 0.33,
        "deadlineShare": 1.0
      }
    ]
  }
];

/* ============ §6 走私品 / 黑市中间人 ============ */
const TRADE31_SMUGGLE = [
  {
    "id": "sm01",
    "good": "uranium",
    "name": "铀矿",
    "blackMarketMul": 2.88,
    "baseRisk": 0.245,
    "patrolLevel": 3,
    "bribeCost": 116,
    "seizeFineMul": 1.72,
    "relationHit": -5,
    "heatPerRun": 8,
    "stealthBonus": 0.136,
    "fenceId": "f01"
  },
  {
    "id": "sm02",
    "good": "artifact",
    "name": "遗迹文物",
    "blackMarketMul": 2.46,
    "baseRisk": 0.34,
    "patrolLevel": 5,
    "bribeCost": 259,
    "seizeFineMul": 2.39,
    "relationHit": -8,
    "heatPerRun": 4,
    "stealthBonus": 0.162,
    "fenceId": "f02"
  },
  {
    "id": "sm03",
    "good": "bio",
    "name": "生物样本",
    "blackMarketMul": 2.25,
    "baseRisk": 0.242,
    "patrolLevel": 4,
    "bribeCost": 239,
    "seizeFineMul": 2.18,
    "relationHit": -9,
    "heatPerRun": 8,
    "stealthBonus": 0.066,
    "fenceId": "f03"
  },
  {
    "id": "sm04",
    "good": "antimatter",
    "name": "反物质舱",
    "blackMarketMul": 2.01,
    "baseRisk": 0.247,
    "patrolLevel": 2,
    "bribeCost": 631,
    "seizeFineMul": 1.68,
    "relationHit": -8,
    "heatPerRun": 8,
    "stealthBonus": 0.151,
    "fenceId": "f04"
  },
  {
    "id": "sm05",
    "good": "medicine",
    "name": "药品",
    "blackMarketMul": 2.77,
    "baseRisk": 0.399,
    "patrolLevel": 3,
    "bribeCost": 67,
    "seizeFineMul": 1.75,
    "relationHit": -8,
    "heatPerRun": 2,
    "stealthBonus": 0.107,
    "fenceId": "f05"
  },
  {
    "id": "sm06",
    "good": "chip",
    "name": "量子芯片",
    "blackMarketMul": 1.66,
    "baseRisk": 0.457,
    "patrolLevel": 4,
    "bribeCost": 102,
    "seizeFineMul": 2.71,
    "relationHit": -11,
    "heatPerRun": 6,
    "stealthBonus": 0.2,
    "fenceId": "f06"
  },
  {
    "id": "sm07",
    "good": "fuel",
    "name": "聚变燃料",
    "blackMarketMul": 2.44,
    "baseRisk": 0.194,
    "patrolLevel": 3,
    "bribeCost": 103,
    "seizeFineMul": 2.09,
    "relationHit": -10,
    "heatPerRun": 4,
    "stealthBonus": 0.196,
    "fenceId": "f01"
  },
  {
    "id": "sm08",
    "good": "luxury",
    "name": "奢侈品",
    "blackMarketMul": 2.13,
    "baseRisk": 0.506,
    "patrolLevel": 1,
    "bribeCost": 315,
    "seizeFineMul": 2.67,
    "relationHit": -5,
    "heatPerRun": 2,
    "stealthBonus": 0.138,
    "fenceId": "f02"
  }
];
const TRADE31_FENCES = [
  {
    "id": "f01",
    "name": "黑市中间人1号",
    "cut": 0.18,
    "trust": 0.59,
    "maxQty": 50,
    "heatCap": 20
  },
  {
    "id": "f02",
    "name": "黑市中间人2号",
    "cut": 0.25,
    "trust": 0.58,
    "maxQty": 90,
    "heatCap": 30
  },
  {
    "id": "f03",
    "name": "黑市中间人3号",
    "cut": 0.23,
    "trust": 0.67,
    "maxQty": 130,
    "heatCap": 40
  },
  {
    "id": "f04",
    "name": "黑市中间人4号",
    "cut": 0.16,
    "trust": 0.36,
    "maxQty": 170,
    "heatCap": 50
  },
  {
    "id": "f05",
    "name": "黑市中间人5号",
    "cut": 0.11,
    "trust": 0.86,
    "maxQty": 210,
    "heatCap": 60
  },
  {
    "id": "f06",
    "name": "黑市中间人6号",
    "cut": 0.13,
    "trust": 0.64,
    "maxQty": 250,
    "heatCap": 70
  }
];

/* ============ §7 护卫类型 / 遭遇战 ============ */
const TRADE31_ESCORTS = [
  {
    "id": "esc01",
    "name": "武装商船",
    "power": 12,
    "costPerTick": 30,
    "upkeepCredits": 30,
    "casualtyRisk": 0.05,
    "speedBonus": 0.11,
    "cargoGuard": 0.85
  },
  {
    "id": "esc02",
    "name": "护卫舰",
    "power": 25,
    "costPerTick": 80,
    "upkeepCredits": 80,
    "casualtyRisk": 0.06,
    "speedBonus": 0.01,
    "cargoGuard": 0.71
  },
  {
    "id": "esc03",
    "name": "雇佣兵小队",
    "power": 18,
    "costPerTick": 55,
    "upkeepCredits": 55,
    "casualtyRisk": 0.07,
    "speedBonus": 0.18,
    "cargoGuard": 0.6
  },
  {
    "id": "esc04",
    "name": "无人机群",
    "power": 10,
    "costPerTick": 25,
    "upkeepCredits": 25,
    "casualtyRisk": 0.08,
    "speedBonus": 0.1,
    "cargoGuard": 0.89
  },
  {
    "id": "esc05",
    "name": "重型巡洋舰",
    "power": 45,
    "costPerTick": 180,
    "upkeepCredits": 180,
    "casualtyRisk": 0.09,
    "speedBonus": 0.17,
    "cargoGuard": 0.62
  },
  {
    "id": "esc06",
    "name": "隐形护航艇",
    "power": 20,
    "costPerTick": 120,
    "upkeepCredits": 120,
    "casualtyRisk": 0.1,
    "speedBonus": 0.02,
    "cargoGuard": 0.82
  },
  {
    "id": "esc07",
    "name": "轨道炮支援",
    "power": 35,
    "costPerTick": 150,
    "upkeepCredits": 150,
    "casualtyRisk": 0.11,
    "speedBonus": 0.01,
    "cargoGuard": 0.83
  },
  {
    "id": "esc08",
    "name": "民兵义勇队",
    "power": 6,
    "costPerTick": 10,
    "upkeepCredits": 10,
    "casualtyRisk": 0.12,
    "speedBonus": 0.09,
    "cargoGuard": 0.55
  }
];
const TRADE31_ENCOUNTERS = [
  {
    "id": "enc01",
    "name": "海盗袭扰1",
    "piratePower": 38,
    "lootCredits": 740,
    "lootGood": "iron",
    "lootQty": 17,
    "region": "belt",
    "probPerTick": 0.006,
    "damageOnLoss": 41,
    "fleeChance": 0.13
  },
  {
    "id": "enc02",
    "name": "海盗袭扰2",
    "piratePower": 13,
    "lootCredits": 342,
    "lootGood": "ice",
    "lootQty": 16,
    "region": "outer",
    "probPerTick": 0.035,
    "damageOnLoss": 23,
    "fleeChance": 0.49
  },
  {
    "id": "enc03",
    "name": "海盗袭扰3",
    "piratePower": 41,
    "lootCredits": 495,
    "lootGood": "water",
    "lootQty": 39,
    "region": "jovian",
    "probPerTick": 0.04,
    "damageOnLoss": 34,
    "fleeChance": 0.27
  },
  {
    "id": "enc04",
    "name": "海盗袭扰4",
    "piratePower": 19,
    "lootCredits": 415,
    "lootGood": "food",
    "lootQty": 29,
    "region": "mars",
    "probPerTick": 0.011,
    "damageOnLoss": 23,
    "fleeChance": 0.13
  },
  {
    "id": "enc05",
    "name": "海盗袭扰5",
    "piratePower": 15,
    "lootCredits": 296,
    "lootGood": "steel",
    "lootQty": 30,
    "region": "belt",
    "probPerTick": 0.018,
    "damageOnLoss": 37,
    "fleeChance": 0.38
  },
  {
    "id": "enc06",
    "name": "海盗袭扰6",
    "piratePower": 39,
    "lootCredits": 66,
    "lootGood": "rare",
    "lootQty": 24,
    "region": "outer",
    "probPerTick": 0.007,
    "damageOnLoss": 34,
    "fleeChance": 0.3
  },
  {
    "id": "enc07",
    "name": "海盗袭扰7",
    "piratePower": 13,
    "lootCredits": 54,
    "lootGood": "uranium",
    "lootQty": 24,
    "region": "jovian",
    "probPerTick": 0.011,
    "damageOnLoss": 39,
    "fleeChance": 0.29
  },
  {
    "id": "enc08",
    "name": "海盗袭扰8",
    "piratePower": 24,
    "lootCredits": 389,
    "lootGood": "he3",
    "lootQty": 32,
    "region": "mars",
    "probPerTick": 0.035,
    "damageOnLoss": 52,
    "fleeChance": 0.21
  },
  {
    "id": "enc09",
    "name": "海盗袭扰9",
    "piratePower": 9,
    "lootCredits": 509,
    "lootGood": "tech",
    "lootQty": 40,
    "region": "belt",
    "probPerTick": 0.037,
    "damageOnLoss": 49,
    "fleeChance": 0.38
  },
  {
    "id": "enc10",
    "name": "海盗袭扰10",
    "piratePower": 28,
    "lootCredits": 791,
    "lootGood": "polymer",
    "lootQty": 10,
    "region": "outer",
    "probPerTick": 0.034,
    "damageOnLoss": 50,
    "fleeChance": 0.43
  },
  {
    "id": "enc11",
    "name": "海盗袭扰11",
    "piratePower": 9,
    "lootCredits": 334,
    "lootGood": "glass",
    "lootQty": 5,
    "region": "jovian",
    "probPerTick": 0.013,
    "damageOnLoss": 25,
    "fleeChance": 0.37
  },
  {
    "id": "enc12",
    "name": "海盗袭扰12",
    "piratePower": 21,
    "lootCredits": 632,
    "lootGood": "medicine",
    "lootQty": 12,
    "region": "mars",
    "probPerTick": 0.017,
    "damageOnLoss": 57,
    "fleeChance": 0.18
  },
  {
    "id": "enc13",
    "name": "海盗袭扰13",
    "piratePower": 10,
    "lootCredits": 368,
    "lootGood": "oxygen",
    "lootQty": 33,
    "region": "belt",
    "probPerTick": 0.021,
    "damageOnLoss": 34,
    "fleeChance": 0.3
  },
  {
    "id": "enc14",
    "name": "海盗袭扰14",
    "piratePower": 21,
    "lootCredits": 232,
    "lootGood": "seeds",
    "lootQty": 32,
    "region": "outer",
    "probPerTick": 0.011,
    "damageOnLoss": 10,
    "fleeChance": 0.22
  },
  {
    "id": "enc15",
    "name": "海盗袭扰15",
    "piratePower": 26,
    "lootCredits": 231,
    "lootGood": "machine",
    "lootQty": 22,
    "region": "jovian",
    "probPerTick": 0.033,
    "damageOnLoss": 42,
    "fleeChance": 0.12
  },
  {
    "id": "enc16",
    "name": "海盗袭扰16",
    "piratePower": 47,
    "lootCredits": 102,
    "lootGood": "chip",
    "lootQty": 14,
    "region": "mars",
    "probPerTick": 0.032,
    "damageOnLoss": 19,
    "fleeChance": 0.48
  },
  {
    "id": "enc17",
    "name": "海盗袭扰17",
    "piratePower": 36,
    "lootCredits": 678,
    "lootGood": "fuel",
    "lootQty": 21,
    "region": "belt",
    "probPerTick": 0.021,
    "damageOnLoss": 16,
    "fleeChance": 0.26
  },
  {
    "id": "enc18",
    "name": "海盗袭扰18",
    "piratePower": 50,
    "lootCredits": 110,
    "lootGood": "textile",
    "lootQty": 12,
    "region": "outer",
    "probPerTick": 0.039,
    "damageOnLoss": 49,
    "fleeChance": 0.31
  },
  {
    "id": "enc19",
    "name": "海盗袭扰19",
    "piratePower": 32,
    "lootCredits": 636,
    "lootGood": "luxury",
    "lootQty": 7,
    "region": "jovian",
    "probPerTick": 0.038,
    "damageOnLoss": 55,
    "fleeChance": 0.44
  },
  {
    "id": "enc20",
    "name": "海盗袭扰20",
    "piratePower": 33,
    "lootCredits": 782,
    "lootGood": "artifact",
    "lootQty": 40,
    "region": "mars",
    "probPerTick": 0.032,
    "damageOnLoss": 10,
    "fleeChance": 0.35
  },
  {
    "id": "enc21",
    "name": "海盗袭扰21",
    "piratePower": 39,
    "lootCredits": 406,
    "lootGood": "alloy",
    "lootQty": 23,
    "region": "belt",
    "probPerTick": 0.035,
    "damageOnLoss": 35,
    "fleeChance": 0.31
  },
  {
    "id": "enc22",
    "name": "海盗袭扰22",
    "piratePower": 18,
    "lootCredits": 221,
    "lootGood": "bio",
    "lootQty": 6,
    "region": "outer",
    "probPerTick": 0.016,
    "damageOnLoss": 29,
    "fleeChance": 0.31
  },
  {
    "id": "enc23",
    "name": "海盗袭扰23",
    "piratePower": 17,
    "lootCredits": 298,
    "lootGood": "ceramic",
    "lootQty": 13,
    "region": "jovian",
    "probPerTick": 0.036,
    "damageOnLoss": 57,
    "fleeChance": 0.2
  },
  {
    "id": "enc24",
    "name": "海盗袭扰24",
    "piratePower": 31,
    "lootCredits": 514,
    "lootGood": "antimatter",
    "lootQty": 14,
    "region": "mars",
    "probPerTick": 0.007,
    "damageOnLoss": 50,
    "fleeChance": 0.11
  },
  {
    "id": "enc25",
    "name": "海盗袭扰25",
    "piratePower": 23,
    "lootCredits": 441,
    "lootGood": "iron",
    "lootQty": 39,
    "region": "belt",
    "probPerTick": 0.016,
    "damageOnLoss": 29,
    "fleeChance": 0.27
  },
  {
    "id": "enc26",
    "name": "海盗袭扰26",
    "piratePower": 46,
    "lootCredits": 392,
    "lootGood": "ice",
    "lootQty": 19,
    "region": "outer",
    "probPerTick": 0.038,
    "damageOnLoss": 23,
    "fleeChance": 0.29
  },
  {
    "id": "enc27",
    "name": "海盗袭扰27",
    "piratePower": 27,
    "lootCredits": 323,
    "lootGood": "water",
    "lootQty": 34,
    "region": "jovian",
    "probPerTick": 0.027,
    "damageOnLoss": 42,
    "fleeChance": 0.34
  },
  {
    "id": "enc28",
    "name": "海盗袭扰28",
    "piratePower": 36,
    "lootCredits": 506,
    "lootGood": "food",
    "lootQty": 11,
    "region": "mars",
    "probPerTick": 0.019,
    "damageOnLoss": 60,
    "fleeChance": 0.43
  },
  {
    "id": "enc29",
    "name": "海盗袭扰29",
    "piratePower": 36,
    "lootCredits": 725,
    "lootGood": "steel",
    "lootQty": 7,
    "region": "belt",
    "probPerTick": 0.037,
    "damageOnLoss": 11,
    "fleeChance": 0.46
  },
  {
    "id": "enc30",
    "name": "海盗袭扰30",
    "piratePower": 43,
    "lootCredits": 258,
    "lootGood": "rare",
    "lootQty": 21,
    "region": "outer",
    "probPerTick": 0.01,
    "damageOnLoss": 15,
    "fleeChance": 0.41
  },
  {
    "id": "enc31",
    "name": "海盗袭扰31",
    "piratePower": 31,
    "lootCredits": 387,
    "lootGood": "uranium",
    "lootQty": 23,
    "region": "jovian",
    "probPerTick": 0.012,
    "damageOnLoss": 49,
    "fleeChance": 0.31
  },
  {
    "id": "enc32",
    "name": "海盗袭扰32",
    "piratePower": 12,
    "lootCredits": 298,
    "lootGood": "he3",
    "lootQty": 20,
    "region": "mars",
    "probPerTick": 0.039,
    "damageOnLoss": 30,
    "fleeChance": 0.44
  },
  {
    "id": "enc33",
    "name": "海盗袭扰33",
    "piratePower": 35,
    "lootCredits": 374,
    "lootGood": "tech",
    "lootQty": 27,
    "region": "belt",
    "probPerTick": 0.007,
    "damageOnLoss": 39,
    "fleeChance": 0.48
  },
  {
    "id": "enc34",
    "name": "海盗袭扰34",
    "piratePower": 34,
    "lootCredits": 375,
    "lootGood": "polymer",
    "lootQty": 8,
    "region": "outer",
    "probPerTick": 0.033,
    "damageOnLoss": 38,
    "fleeChance": 0.33
  },
  {
    "id": "enc35",
    "name": "海盗袭扰35",
    "piratePower": 46,
    "lootCredits": 69,
    "lootGood": "glass",
    "lootQty": 10,
    "region": "jovian",
    "probPerTick": 0.015,
    "damageOnLoss": 21,
    "fleeChance": 0.14
  },
  {
    "id": "enc36",
    "name": "海盗袭扰36",
    "piratePower": 17,
    "lootCredits": 352,
    "lootGood": "medicine",
    "lootQty": 31,
    "region": "mars",
    "probPerTick": 0.02,
    "damageOnLoss": 60,
    "fleeChance": 0.48
  },
  {
    "id": "enc37",
    "name": "海盗袭扰37",
    "piratePower": 5,
    "lootCredits": 479,
    "lootGood": "oxygen",
    "lootQty": 37,
    "region": "belt",
    "probPerTick": 0.028,
    "damageOnLoss": 45,
    "fleeChance": 0.32
  },
  {
    "id": "enc38",
    "name": "海盗袭扰38",
    "piratePower": 8,
    "lootCredits": 56,
    "lootGood": "seeds",
    "lootQty": 40,
    "region": "outer",
    "probPerTick": 0.014,
    "damageOnLoss": 35,
    "fleeChance": 0.24
  },
  {
    "id": "enc39",
    "name": "海盗袭扰39",
    "piratePower": 15,
    "lootCredits": 656,
    "lootGood": "machine",
    "lootQty": 22,
    "region": "jovian",
    "probPerTick": 0.04,
    "damageOnLoss": 35,
    "fleeChance": 0.23
  },
  {
    "id": "enc40",
    "name": "海盗袭扰40",
    "piratePower": 46,
    "lootCredits": 610,
    "lootGood": "chip",
    "lootQty": 13,
    "region": "mars",
    "probPerTick": 0.025,
    "damageOnLoss": 43,
    "fleeChance": 0.12
  },
  {
    "id": "enc41",
    "name": "海盗袭扰41",
    "piratePower": 47,
    "lootCredits": 234,
    "lootGood": "fuel",
    "lootQty": 35,
    "region": "belt",
    "probPerTick": 0.035,
    "damageOnLoss": 46,
    "fleeChance": 0.36
  },
  {
    "id": "enc42",
    "name": "海盗袭扰42",
    "piratePower": 14,
    "lootCredits": 519,
    "lootGood": "textile",
    "lootQty": 34,
    "region": "outer",
    "probPerTick": 0.009,
    "damageOnLoss": 33,
    "fleeChance": 0.11
  },
  {
    "id": "enc43",
    "name": "海盗袭扰43",
    "piratePower": 26,
    "lootCredits": 451,
    "lootGood": "luxury",
    "lootQty": 9,
    "region": "jovian",
    "probPerTick": 0.019,
    "damageOnLoss": 14,
    "fleeChance": 0.42
  },
  {
    "id": "enc44",
    "name": "海盗袭扰44",
    "piratePower": 38,
    "lootCredits": 432,
    "lootGood": "artifact",
    "lootQty": 14,
    "region": "mars",
    "probPerTick": 0.006,
    "damageOnLoss": 57,
    "fleeChance": 0.29
  },
  {
    "id": "enc45",
    "name": "海盗袭扰45",
    "piratePower": 44,
    "lootCredits": 145,
    "lootGood": "alloy",
    "lootQty": 36,
    "region": "belt",
    "probPerTick": 0.024,
    "damageOnLoss": 33,
    "fleeChance": 0.24
  },
  {
    "id": "enc46",
    "name": "海盗袭扰46",
    "piratePower": 49,
    "lootCredits": 58,
    "lootGood": "bio",
    "lootQty": 12,
    "region": "outer",
    "probPerTick": 0.019,
    "damageOnLoss": 28,
    "fleeChance": 0.19
  },
  {
    "id": "enc47",
    "name": "海盗袭扰47",
    "piratePower": 21,
    "lootCredits": 299,
    "lootGood": "ceramic",
    "lootQty": 27,
    "region": "jovian",
    "probPerTick": 0.009,
    "damageOnLoss": 29,
    "fleeChance": 0.26
  },
  {
    "id": "enc48",
    "name": "海盗袭扰48",
    "piratePower": 22,
    "lootCredits": 394,
    "lootGood": "antimatter",
    "lootQty": 10,
    "region": "mars",
    "probPerTick": 0.035,
    "damageOnLoss": 31,
    "fleeChance": 0.36
  },
  {
    "id": "enc49",
    "name": "海盗袭扰49",
    "piratePower": 9,
    "lootCredits": 235,
    "lootGood": "iron",
    "lootQty": 32,
    "region": "belt",
    "probPerTick": 0.037,
    "damageOnLoss": 38,
    "fleeChance": 0.42
  },
  {
    "id": "enc50",
    "name": "海盗袭扰50",
    "piratePower": 7,
    "lootCredits": 632,
    "lootGood": "ice",
    "lootQty": 28,
    "region": "outer",
    "probPerTick": 0.036,
    "damageOnLoss": 19,
    "fleeChance": 0.31
  },
  {
    "id": "enc51",
    "name": "海盗袭扰51",
    "piratePower": 5,
    "lootCredits": 408,
    "lootGood": "water",
    "lootQty": 31,
    "region": "jovian",
    "probPerTick": 0.03,
    "damageOnLoss": 28,
    "fleeChance": 0.15
  },
  {
    "id": "enc52",
    "name": "海盗袭扰52",
    "piratePower": 49,
    "lootCredits": 431,
    "lootGood": "food",
    "lootQty": 39,
    "region": "mars",
    "probPerTick": 0.025,
    "damageOnLoss": 58,
    "fleeChance": 0.42
  },
  {
    "id": "enc53",
    "name": "海盗袭扰53",
    "piratePower": 19,
    "lootCredits": 106,
    "lootGood": "steel",
    "lootQty": 28,
    "region": "belt",
    "probPerTick": 0.019,
    "damageOnLoss": 25,
    "fleeChance": 0.39
  },
  {
    "id": "enc54",
    "name": "海盗袭扰54",
    "piratePower": 29,
    "lootCredits": 264,
    "lootGood": "rare",
    "lootQty": 15,
    "region": "outer",
    "probPerTick": 0.019,
    "damageOnLoss": 48,
    "fleeChance": 0.12
  },
  {
    "id": "enc55",
    "name": "海盗袭扰55",
    "piratePower": 15,
    "lootCredits": 117,
    "lootGood": "uranium",
    "lootQty": 38,
    "region": "jovian",
    "probPerTick": 0.031,
    "damageOnLoss": 58,
    "fleeChance": 0.24
  },
  {
    "id": "enc56",
    "name": "海盗袭扰56",
    "piratePower": 16,
    "lootCredits": 661,
    "lootGood": "he3",
    "lootQty": 23,
    "region": "mars",
    "probPerTick": 0.035,
    "damageOnLoss": 20,
    "fleeChance": 0.3
  },
  {
    "id": "enc57",
    "name": "海盗袭扰57",
    "piratePower": 33,
    "lootCredits": 61,
    "lootGood": "tech",
    "lootQty": 19,
    "region": "belt",
    "probPerTick": 0.011,
    "damageOnLoss": 50,
    "fleeChance": 0.35
  },
  {
    "id": "enc58",
    "name": "海盗袭扰58",
    "piratePower": 19,
    "lootCredits": 99,
    "lootGood": "polymer",
    "lootQty": 20,
    "region": "outer",
    "probPerTick": 0.01,
    "damageOnLoss": 21,
    "fleeChance": 0.14
  },
  {
    "id": "enc59",
    "name": "海盗袭扰59",
    "piratePower": 13,
    "lootCredits": 492,
    "lootGood": "glass",
    "lootQty": 22,
    "region": "jovian",
    "probPerTick": 0.021,
    "damageOnLoss": 48,
    "fleeChance": 0.17
  },
  {
    "id": "enc60",
    "name": "海盗袭扰60",
    "piratePower": 20,
    "lootCredits": 415,
    "lootGood": "medicine",
    "lootQty": 9,
    "region": "mars",
    "probPerTick": 0.016,
    "damageOnLoss": 47,
    "fleeChance": 0.41
  },
  {
    "id": "enc61",
    "name": "海盗袭扰61",
    "piratePower": 38,
    "lootCredits": 435,
    "lootGood": "oxygen",
    "lootQty": 5,
    "region": "belt",
    "probPerTick": 0.033,
    "damageOnLoss": 59,
    "fleeChance": 0.41
  },
  {
    "id": "enc62",
    "name": "海盗袭扰62",
    "piratePower": 42,
    "lootCredits": 679,
    "lootGood": "seeds",
    "lootQty": 23,
    "region": "outer",
    "probPerTick": 0.039,
    "damageOnLoss": 27,
    "fleeChance": 0.22
  },
  {
    "id": "enc63",
    "name": "海盗袭扰63",
    "piratePower": 27,
    "lootCredits": 130,
    "lootGood": "machine",
    "lootQty": 32,
    "region": "jovian",
    "probPerTick": 0.013,
    "damageOnLoss": 40,
    "fleeChance": 0.48
  },
  {
    "id": "enc64",
    "name": "海盗袭扰64",
    "piratePower": 17,
    "lootCredits": 298,
    "lootGood": "chip",
    "lootQty": 18,
    "region": "mars",
    "probPerTick": 0.037,
    "damageOnLoss": 25,
    "fleeChance": 0.49
  },
  {
    "id": "enc65",
    "name": "海盗袭扰65",
    "piratePower": 10,
    "lootCredits": 650,
    "lootGood": "fuel",
    "lootQty": 39,
    "region": "belt",
    "probPerTick": 0.038,
    "damageOnLoss": 26,
    "fleeChance": 0.16
  },
  {
    "id": "enc66",
    "name": "海盗袭扰66",
    "piratePower": 5,
    "lootCredits": 622,
    "lootGood": "textile",
    "lootQty": 34,
    "region": "outer",
    "probPerTick": 0.011,
    "damageOnLoss": 18,
    "fleeChance": 0.41
  },
  {
    "id": "enc67",
    "name": "海盗袭扰67",
    "piratePower": 6,
    "lootCredits": 298,
    "lootGood": "luxury",
    "lootQty": 5,
    "region": "jovian",
    "probPerTick": 0.018,
    "damageOnLoss": 51,
    "fleeChance": 0.43
  },
  {
    "id": "enc68",
    "name": "海盗袭扰68",
    "piratePower": 42,
    "lootCredits": 74,
    "lootGood": "artifact",
    "lootQty": 15,
    "region": "mars",
    "probPerTick": 0.006,
    "damageOnLoss": 60,
    "fleeChance": 0.38
  },
  {
    "id": "enc69",
    "name": "海盗袭扰69",
    "piratePower": 44,
    "lootCredits": 742,
    "lootGood": "alloy",
    "lootQty": 22,
    "region": "belt",
    "probPerTick": 0.04,
    "damageOnLoss": 53,
    "fleeChance": 0.38
  },
  {
    "id": "enc70",
    "name": "海盗袭扰70",
    "piratePower": 23,
    "lootCredits": 72,
    "lootGood": "bio",
    "lootQty": 37,
    "region": "outer",
    "probPerTick": 0.011,
    "damageOnLoss": 13,
    "fleeChance": 0.25
  },
  {
    "id": "enc71",
    "name": "海盗袭扰71",
    "piratePower": 28,
    "lootCredits": 406,
    "lootGood": "ceramic",
    "lootQty": 16,
    "region": "jovian",
    "probPerTick": 0.034,
    "damageOnLoss": 59,
    "fleeChance": 0.46
  },
  {
    "id": "enc72",
    "name": "海盗袭扰72",
    "piratePower": 24,
    "lootCredits": 66,
    "lootGood": "antimatter",
    "lootQty": 30,
    "region": "mars",
    "probPerTick": 0.008,
    "damageOnLoss": 29,
    "fleeChance": 0.32
  }
];

/* ============ §8 贸易站等级 / 关税档位 ============ */
const TRADE31_STATION = [
  {
    "level": 1,
    "name": "贸易站",
    "costCredits": 500,
    "costSteel": 40,
    "costTech": 0,
    "routeSlots": 2,
    "capacity": 200,
    "feeDiscount": 0.0,
    "priceBonus": 1.0,
    "contractSlots": 2,
    "smuggleDetect": 0.1,
    "upkeepPerTick": 5,
    "unlocks": [
      "基础贸易"
    ]
  },
  {
    "level": 2,
    "name": "星港商栈",
    "costCredits": 2000,
    "costSteel": 120,
    "costTech": 30,
    "routeSlots": 5,
    "capacity": 600,
    "feeDiscount": 0.15,
    "priceBonus": 1.08,
    "contractSlots": 4,
    "smuggleDetect": 0.2,
    "upkeepPerTick": 15,
    "unlocks": [
      "大宗合同",
      "关税调节"
    ]
  },
  {
    "level": 3,
    "name": "银河交易所",
    "costCredits": 6000,
    "costSteel": 300,
    "costTech": 120,
    "routeSlots": 9,
    "capacity": 1500,
    "feeDiscount": 0.3,
    "priceBonus": 1.16,
    "contractSlots": 8,
    "smuggleDetect": 0.3,
    "upkeepPerTick": 40,
    "unlocks": [
      "黑市情报",
      "跨星系航线"
    ]
  }
];
const TRADE31_TARIFF = [
  {
    "cat": "raw",
    "brackets": [
      {
        "rate": 0,
        "revenueMul": 0.0,
        "relationDeltaPerTick": 0.0,
        "smuggleIncentive": 0.0,
        "volumeMul": 1.0
      },
      {
        "rate": 5,
        "revenueMul": 0.048,
        "relationDeltaPerTick": -0.1,
        "smuggleIncentive": 0.075,
        "volumeMul": 0.94
      },
      {
        "rate": 10,
        "revenueMul": 0.092,
        "relationDeltaPerTick": -0.2,
        "smuggleIncentive": 0.15,
        "volumeMul": 0.88
      },
      {
        "rate": 15,
        "revenueMul": 0.132,
        "relationDeltaPerTick": -0.3,
        "smuggleIncentive": 0.225,
        "volumeMul": 0.82
      },
      {
        "rate": 20,
        "revenueMul": 0.168,
        "relationDeltaPerTick": -0.4,
        "smuggleIncentive": 0.3,
        "volumeMul": 0.76
      },
      {
        "rate": 25,
        "revenueMul": 0.2,
        "relationDeltaPerTick": -0.5,
        "smuggleIncentive": 0.375,
        "volumeMul": 0.7
      },
      {
        "rate": 30,
        "revenueMul": 0.228,
        "relationDeltaPerTick": -0.6,
        "smuggleIncentive": 0.45,
        "volumeMul": 0.64
      }
    ]
  },
  {
    "cat": "material",
    "brackets": [
      {
        "rate": 0,
        "revenueMul": 0.0,
        "relationDeltaPerTick": 0.0,
        "smuggleIncentive": 0.0,
        "volumeMul": 1.0
      },
      {
        "rate": 5,
        "revenueMul": 0.048,
        "relationDeltaPerTick": -0.1,
        "smuggleIncentive": 0.075,
        "volumeMul": 0.94
      },
      {
        "rate": 10,
        "revenueMul": 0.092,
        "relationDeltaPerTick": -0.2,
        "smuggleIncentive": 0.15,
        "volumeMul": 0.88
      },
      {
        "rate": 15,
        "revenueMul": 0.132,
        "relationDeltaPerTick": -0.3,
        "smuggleIncentive": 0.225,
        "volumeMul": 0.82
      },
      {
        "rate": 20,
        "revenueMul": 0.168,
        "relationDeltaPerTick": -0.4,
        "smuggleIncentive": 0.3,
        "volumeMul": 0.76
      },
      {
        "rate": 25,
        "revenueMul": 0.2,
        "relationDeltaPerTick": -0.5,
        "smuggleIncentive": 0.375,
        "volumeMul": 0.7
      },
      {
        "rate": 30,
        "revenueMul": 0.228,
        "relationDeltaPerTick": -0.6,
        "smuggleIncentive": 0.45,
        "volumeMul": 0.64
      }
    ]
  },
  {
    "cat": "life",
    "brackets": [
      {
        "rate": 0,
        "revenueMul": 0.0,
        "relationDeltaPerTick": 0.0,
        "smuggleIncentive": 0.0,
        "volumeMul": 1.0
      },
      {
        "rate": 5,
        "revenueMul": 0.048,
        "relationDeltaPerTick": -0.1,
        "smuggleIncentive": 0.075,
        "volumeMul": 0.94
      },
      {
        "rate": 10,
        "revenueMul": 0.092,
        "relationDeltaPerTick": -0.2,
        "smuggleIncentive": 0.15,
        "volumeMul": 0.88
      },
      {
        "rate": 15,
        "revenueMul": 0.132,
        "relationDeltaPerTick": -0.3,
        "smuggleIncentive": 0.225,
        "volumeMul": 0.82
      },
      {
        "rate": 20,
        "revenueMul": 0.168,
        "relationDeltaPerTick": -0.4,
        "smuggleIncentive": 0.3,
        "volumeMul": 0.76
      },
      {
        "rate": 25,
        "revenueMul": 0.2,
        "relationDeltaPerTick": -0.5,
        "smuggleIncentive": 0.375,
        "volumeMul": 0.7
      },
      {
        "rate": 30,
        "revenueMul": 0.228,
        "relationDeltaPerTick": -0.6,
        "smuggleIncentive": 0.45,
        "volumeMul": 0.64
      }
    ]
  },
  {
    "cat": "tech",
    "brackets": [
      {
        "rate": 0,
        "revenueMul": 0.0,
        "relationDeltaPerTick": 0.0,
        "smuggleIncentive": 0.0,
        "volumeMul": 1.0
      },
      {
        "rate": 5,
        "revenueMul": 0.048,
        "relationDeltaPerTick": -0.1,
        "smuggleIncentive": 0.075,
        "volumeMul": 0.94
      },
      {
        "rate": 10,
        "revenueMul": 0.092,
        "relationDeltaPerTick": -0.2,
        "smuggleIncentive": 0.15,
        "volumeMul": 0.88
      },
      {
        "rate": 15,
        "revenueMul": 0.132,
        "relationDeltaPerTick": -0.3,
        "smuggleIncentive": 0.225,
        "volumeMul": 0.82
      },
      {
        "rate": 20,
        "revenueMul": 0.168,
        "relationDeltaPerTick": -0.4,
        "smuggleIncentive": 0.3,
        "volumeMul": 0.76
      },
      {
        "rate": 25,
        "revenueMul": 0.2,
        "relationDeltaPerTick": -0.5,
        "smuggleIncentive": 0.375,
        "volumeMul": 0.7
      },
      {
        "rate": 30,
        "revenueMul": 0.228,
        "relationDeltaPerTick": -0.6,
        "smuggleIncentive": 0.45,
        "volumeMul": 0.64
      }
    ]
  },
  {
    "cat": "energy",
    "brackets": [
      {
        "rate": 0,
        "revenueMul": 0.0,
        "relationDeltaPerTick": 0.0,
        "smuggleIncentive": 0.0,
        "volumeMul": 1.0
      },
      {
        "rate": 5,
        "revenueMul": 0.048,
        "relationDeltaPerTick": -0.1,
        "smuggleIncentive": 0.075,
        "volumeMul": 0.94
      },
      {
        "rate": 10,
        "revenueMul": 0.092,
        "relationDeltaPerTick": -0.2,
        "smuggleIncentive": 0.15,
        "volumeMul": 0.88
      },
      {
        "rate": 15,
        "revenueMul": 0.132,
        "relationDeltaPerTick": -0.3,
        "smuggleIncentive": 0.225,
        "volumeMul": 0.82
      },
      {
        "rate": 20,
        "revenueMul": 0.168,
        "relationDeltaPerTick": -0.4,
        "smuggleIncentive": 0.3,
        "volumeMul": 0.76
      },
      {
        "rate": 25,
        "revenueMul": 0.2,
        "relationDeltaPerTick": -0.5,
        "smuggleIncentive": 0.375,
        "volumeMul": 0.7
      },
      {
        "rate": 30,
        "revenueMul": 0.228,
        "relationDeltaPerTick": -0.6,
        "smuggleIncentive": 0.45,
        "volumeMul": 0.64
      }
    ]
  },
  {
    "cat": "luxury",
    "brackets": [
      {
        "rate": 0,
        "revenueMul": 0.0,
        "relationDeltaPerTick": 0.0,
        "smuggleIncentive": 0.0,
        "volumeMul": 1.0
      },
      {
        "rate": 5,
        "revenueMul": 0.048,
        "relationDeltaPerTick": -0.1,
        "smuggleIncentive": 0.075,
        "volumeMul": 0.94
      },
      {
        "rate": 10,
        "revenueMul": 0.092,
        "relationDeltaPerTick": -0.2,
        "smuggleIncentive": 0.15,
        "volumeMul": 0.88
      },
      {
        "rate": 15,
        "revenueMul": 0.132,
        "relationDeltaPerTick": -0.3,
        "smuggleIncentive": 0.225,
        "volumeMul": 0.82
      },
      {
        "rate": 20,
        "revenueMul": 0.168,
        "relationDeltaPerTick": -0.4,
        "smuggleIncentive": 0.3,
        "volumeMul": 0.76
      },
      {
        "rate": 25,
        "revenueMul": 0.2,
        "relationDeltaPerTick": -0.5,
        "smuggleIncentive": 0.375,
        "volumeMul": 0.7
      },
      {
        "rate": 30,
        "revenueMul": 0.228,
        "relationDeltaPerTick": -0.6,
        "smuggleIncentive": 0.45,
        "volumeMul": 0.64
      }
    ]
  }
];


/* ============ §9 价格模型 ============ */
class TradePriceModelV31 {
  constructor(seed) {
    this.v31seed = (typeof seed === 'number' && seed) ? seed >>> 0 : 3107;
    this.v31rngState = this.v31seed || 1;
    this.v31tick = 0;
    this.v31prices = {};
    this.v31history = {};
    this.v31shocks = [];
    this.v31supply = {};
    this.v31demand = {};
    this.v31volume = {};
    for (const g of TRADE31_GOODS) {
      this.v31prices[g.id] = g.base;
      this.v31history[g.id] = [g.base];
      this.v31supply[g.id] = g.supplyBase;
      this.v31demand[g.id] = g.demandBase;
      this.v31volume[g.id] = 0;
    }
  }
  v31nextRandom() {
    let t = this.v31rngState += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    this.v31rngState = t >>> 0;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  v31good(id) { for (const g of TRADE31_GOODS) if (g.id === id) return g; return null; }
  v31clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }
  v31supplyFactor(good) {
    const s = Math.max(1, this.v31supply[good.id]);
    const base = Math.max(1, good.stockBase);
    return Math.pow(base / s, good.elasticity * 0.6);
  }
  v31demandFactor(good) {
    const d = Math.max(1, this.v31demand[good.id]);
    const base = Math.max(1, good.stockBase);
    return Math.pow(d / base, good.elasticity * 0.7);
  }
  v31relationFactor(partner) {
    if (!partner) return 1;
    const rel = this.v31clamp(partner.relation || 50, 0, 100);
    return 1 + (rel - 50) * 0.002;
  }
  v31shockFactor(goodId) {
    let f = 1;
    for (const s of this.v31shocks) {
      if (s.good === goodId || s.good === 'all') f *= s.mul;
    }
    return f;
  }
  v31noise(good) {
    const r = this.v31nextRandom() * 2 - 1;
    return 1 + r * good.volatility * 0.5;
  }
  v31quote(goodId, partner, qty, side) {
    const good = this.v31good(goodId);
    if (!good) return { ok: false, reason: 'unknown good ' + goodId, price: 0, total: 0 };
    const q = Math.max(1, Math.floor(qty || 1));
    let unit = good.base * this.v31supplyFactor(good) * this.v31demandFactor(good);
    unit *= this.v31relationFactor(partner);
    unit *= this.v31shockFactor(goodId);
    unit *= this.v31noise(good);
    if (partner && partner.exports && partner.exports.indexOf(goodId) !== -1) unit *= (1 - (partner.exportDiscount || 0));
    if (partner && partner.imports && partner.imports.indexOf(goodId) !== -1) unit *= (1 + (partner.importPremium || 0));
    if (q >= good.bulkThreshold) unit *= (1 - good.bulkDiscount);
    if (side === 'buy') unit *= 1.08;
    if (side === 'sell') unit *= 0.92;
    unit = this.v31clamp(unit, good.base * good.minMul, good.base * good.maxMul);
    unit = Math.round(unit * 100) / 100;
    return { ok: true, good: goodId, unit: unit, qty: q, total: Math.round(unit * q * 100) / 100,
      side: side || 'buy', partner: partner ? partner.id : null, tick: this.v31tick };
  }
  v31buyPrice(goodId, partner, qty) { return this.v31quote(goodId, partner, qty, 'buy'); }
  v31sellPrice(goodId, partner, qty) { return this.v31quote(goodId, partner, qty, 'sell'); }
  v31spread(goodId, partner) {
    const b = this.v31buyPrice(goodId, partner, 1);
    const s = this.v31sellPrice(goodId, partner, 1);
    if (!b.ok || !s.ok) return 0;
    return Math.round((b.unit - s.unit) * 100) / 100;
  }
  v31margin(goodId, partner) {
    const b = this.v31buyPrice(goodId, partner, 1);
    const s = this.v31sellPrice(goodId, partner, 1);
    if (!b.ok || !s.ok || b.unit <= 0) return 0;
    return Math.round((s.unit / b.unit - 1) * 1000) / 10;
  }
  v31recordTrade(goodId, qty, side) {
    if (!this.v31good(goodId)) return false;
    this.v31volume[goodId] += Math.abs(qty || 0);
    if (side === 'buy') this.v31supply[goodId] = Math.max(1, this.v31supply[goodId] - Math.abs(qty || 0) * 0.5);
    if (side === 'sell') this.v31supply[goodId] = this.v31supply[goodId] + Math.abs(qty || 0) * 0.5;
    return true;
  }
  v31applyShock(ev) {
    if (!ev || !ev.mul) return false;
    this.v31shocks.push({ id: ev.id, good: ev.good, mul: ev.mul, left: ev.durationTicks || 6, kind: ev.kind || 'shock' });
    return true;
  }
  v31expireShocks() {
    const out = [];
    this.v31shocks = this.v31shocks.filter(function (s) { s.left -= 1; if (s.left <= 0) { out.push(s); return false; } return true; });
    return out;
  }
  v31updateMarket(partnerList) {
    this.v31tick += 1;
    this.v31expireShocks();
    for (const good of TRADE31_GOODS) {
      const mean = good.stockBase;
      this.v31supply[good.id] += (mean - this.v31supply[good.id]) * 0.08;
      this.v31demand[good.id] += (mean - this.v31demand[good.id]) * 0.06;
      this.v31supply[good.id] *= (1 + good.supplyGrowth);
      this.v31demand[good.id] *= (1 + good.demandGrowth);
      const drift = (this.v31nextRandom() - 0.5) * good.volatility * 0.4;
      this.v31supply[good.id] = Math.max(1, this.v31supply[good.id] * (1 + drift));
      this.v31demand[good.id] = Math.max(1, this.v31demand[good.id] * (1 - drift));
      if (good.perishable) {
        this.v31supply[good.id] = Math.max(1, this.v31supply[good.id] * (1 - good.decayPerTick));
      }
      const q = this.v31quote(good.id, null, 1, 'buy');
      this.v31prices[good.id] = q.unit;
      this.v31history[good.id].push(q.unit);
      if (this.v31history[good.id].length > 48) this.v31history[good.id].shift();
    }
    return this.v31tick;
  }
  v31movingAverage(goodId, n) {
    const h = this.v31history[goodId] || [];
    const w = h.slice(-Math.max(1, n || 12));
    if (!w.length) return 0;
    let s = 0; for (const v of w) s += v;
    return Math.round(s / w.length * 100) / 100;
  }
  v31trend(goodId) {
    const h = this.v31history[goodId] || [];
    if (h.length < 2) return 0;
    const a = this.v31movingAverage(goodId, 4);
    const b = this.v31movingAverage(goodId, 12);
    if (!b) return 0;
    return Math.round((a / b - 1) * 1000) / 10;
  }
  v31trendText(goodId) {
    const t = this.v31trend(goodId);
    if (t >= 15) return '暴涨';
    if (t >= 5) return '上涨';
    if (t <= -15) return '暴跌';
    if (t <= -5) return '下跌';
    return '平稳';
  }
  v31getPrice(goodId) { return this.v31prices[goodId] || 0; }
  v31bestBuy(goodId, partners) {
    let best = null;
    for (const p of partners || []) {
      const q = this.v31buyPrice(goodId, p, 1);
      if (q.ok && (!best || q.unit < best.unit)) best = q;
    }
    return best;
  }
  v31bestSell(goodId, partners) {
    let best = null;
    for (const p of partners || []) {
      const q = this.v31sellPrice(goodId, p, 1);
      if (q.ok && (!best || q.unit > best.unit)) best = q;
    }
    return best;
  }
  v31arbitrage(goodId, partners) {
    const b = this.v31bestBuy(goodId, partners);
    const s = this.v31bestSell(goodId, partners);
    if (!b || !s) return { ok: false, profit: 0 };
    return { ok: true, buy: b, sell: s, profit: Math.round((s.unit - b.unit) * 100) / 100,
      profitPct: Math.round((s.unit / b.unit - 1) * 1000) / 10 };
  }
  v31simulateTicks(n, partners) {
    const out = [];
    for (let i = 0; i < (n || 1); i++) {
      this.v31updateMarket(partners || []);
      out.push({ tick: this.v31tick, prices: Object.assign({}, this.v31prices) });
    }
    return out;
  }
  v31save() {
    return { seed: this.v31seed, tick: this.v31tick, prices: this.v31prices,
      supply: this.v31supply, demand: this.v31demand, volume: this.v31volume,
      shocks: this.v31shocks, history: this.v31history };
  }
  v31load(d) {
    if (!d) return false;
    this.v31tick = d.tick || 0;
    if (d.prices) this.v31prices = Object.assign(this.v31prices, d.prices);
    if (d.supply) this.v31supply = Object.assign(this.v31supply, d.supply);
    if (d.demand) this.v31demand = Object.assign(this.v31demand, d.demand);
    if (d.volume) this.v31volume = Object.assign(this.v31volume, d.volume);
    if (Array.isArray(d.shocks)) this.v31shocks = d.shocks.slice();
    if (d.history) this.v31history = d.history;
    return true;
  }
  v31quoteIron(partner, qty, side) { return this.v31quote('iron', partner, qty, side); }
  v31buyIron(partner, qty) { return this.v31buyPrice('iron', partner, qty); }
  v31sellIron(partner, qty) { return this.v31sellPrice('iron', partner, qty); }
  v31quoteIce(partner, qty, side) { return this.v31quote('ice', partner, qty, side); }
  v31buyIce(partner, qty) { return this.v31buyPrice('ice', partner, qty); }
  v31sellIce(partner, qty) { return this.v31sellPrice('ice', partner, qty); }
  v31quoteWater(partner, qty, side) { return this.v31quote('water', partner, qty, side); }
  v31buyWater(partner, qty) { return this.v31buyPrice('water', partner, qty); }
  v31sellWater(partner, qty) { return this.v31sellPrice('water', partner, qty); }
  v31quoteFood(partner, qty, side) { return this.v31quote('food', partner, qty, side); }
  v31buyFood(partner, qty) { return this.v31buyPrice('food', partner, qty); }
  v31sellFood(partner, qty) { return this.v31sellPrice('food', partner, qty); }
  v31quoteSteel(partner, qty, side) { return this.v31quote('steel', partner, qty, side); }
  v31buySteel(partner, qty) { return this.v31buyPrice('steel', partner, qty); }
  v31sellSteel(partner, qty) { return this.v31sellPrice('steel', partner, qty); }
  v31quoteRare(partner, qty, side) { return this.v31quote('rare', partner, qty, side); }
  v31buyRare(partner, qty) { return this.v31buyPrice('rare', partner, qty); }
  v31sellRare(partner, qty) { return this.v31sellPrice('rare', partner, qty); }
  v31quoteUranium(partner, qty, side) { return this.v31quote('uranium', partner, qty, side); }
  v31buyUranium(partner, qty) { return this.v31buyPrice('uranium', partner, qty); }
  v31sellUranium(partner, qty) { return this.v31sellPrice('uranium', partner, qty); }
  v31quoteHe3(partner, qty, side) { return this.v31quote('he3', partner, qty, side); }
  v31buyHe3(partner, qty) { return this.v31buyPrice('he3', partner, qty); }
  v31sellHe3(partner, qty) { return this.v31sellPrice('he3', partner, qty); }
  v31quoteTech(partner, qty, side) { return this.v31quote('tech', partner, qty, side); }
  v31buyTech(partner, qty) { return this.v31buyPrice('tech', partner, qty); }
  v31sellTech(partner, qty) { return this.v31sellPrice('tech', partner, qty); }
  v31quotePolymer(partner, qty, side) { return this.v31quote('polymer', partner, qty, side); }
  v31buyPolymer(partner, qty) { return this.v31buyPrice('polymer', partner, qty); }
  v31sellPolymer(partner, qty) { return this.v31sellPrice('polymer', partner, qty); }
  v31quoteGlass(partner, qty, side) { return this.v31quote('glass', partner, qty, side); }
  v31buyGlass(partner, qty) { return this.v31buyPrice('glass', partner, qty); }
  v31sellGlass(partner, qty) { return this.v31sellPrice('glass', partner, qty); }
  v31quoteMedicine(partner, qty, side) { return this.v31quote('medicine', partner, qty, side); }
  v31buyMedicine(partner, qty) { return this.v31buyPrice('medicine', partner, qty); }
  v31sellMedicine(partner, qty) { return this.v31sellPrice('medicine', partner, qty); }
  v31quoteOxygen(partner, qty, side) { return this.v31quote('oxygen', partner, qty, side); }
  v31buyOxygen(partner, qty) { return this.v31buyPrice('oxygen', partner, qty); }
  v31sellOxygen(partner, qty) { return this.v31sellPrice('oxygen', partner, qty); }
  v31quoteSeeds(partner, qty, side) { return this.v31quote('seeds', partner, qty, side); }
  v31buySeeds(partner, qty) { return this.v31buyPrice('seeds', partner, qty); }
  v31sellSeeds(partner, qty) { return this.v31sellPrice('seeds', partner, qty); }
  v31quoteMachine(partner, qty, side) { return this.v31quote('machine', partner, qty, side); }
  v31buyMachine(partner, qty) { return this.v31buyPrice('machine', partner, qty); }
  v31sellMachine(partner, qty) { return this.v31sellPrice('machine', partner, qty); }
  v31quoteChip(partner, qty, side) { return this.v31quote('chip', partner, qty, side); }
  v31buyChip(partner, qty) { return this.v31buyPrice('chip', partner, qty); }
  v31sellChip(partner, qty) { return this.v31sellPrice('chip', partner, qty); }
  v31quoteFuel(partner, qty, side) { return this.v31quote('fuel', partner, qty, side); }
  v31buyFuel(partner, qty) { return this.v31buyPrice('fuel', partner, qty); }
  v31sellFuel(partner, qty) { return this.v31sellPrice('fuel', partner, qty); }
  v31quoteTextile(partner, qty, side) { return this.v31quote('textile', partner, qty, side); }
  v31buyTextile(partner, qty) { return this.v31buyPrice('textile', partner, qty); }
  v31sellTextile(partner, qty) { return this.v31sellPrice('textile', partner, qty); }
  v31quoteLuxury(partner, qty, side) { return this.v31quote('luxury', partner, qty, side); }
  v31buyLuxury(partner, qty) { return this.v31buyPrice('luxury', partner, qty); }
  v31sellLuxury(partner, qty) { return this.v31sellPrice('luxury', partner, qty); }
  v31quoteArtifact(partner, qty, side) { return this.v31quote('artifact', partner, qty, side); }
  v31buyArtifact(partner, qty) { return this.v31buyPrice('artifact', partner, qty); }
  v31sellArtifact(partner, qty) { return this.v31sellPrice('artifact', partner, qty); }
  v31quoteAlloy(partner, qty, side) { return this.v31quote('alloy', partner, qty, side); }
  v31buyAlloy(partner, qty) { return this.v31buyPrice('alloy', partner, qty); }
  v31sellAlloy(partner, qty) { return this.v31sellPrice('alloy', partner, qty); }
  v31quoteBio(partner, qty, side) { return this.v31quote('bio', partner, qty, side); }
  v31buyBio(partner, qty) { return this.v31buyPrice('bio', partner, qty); }
  v31sellBio(partner, qty) { return this.v31sellPrice('bio', partner, qty); }
  v31quoteCeramic(partner, qty, side) { return this.v31quote('ceramic', partner, qty, side); }
  v31buyCeramic(partner, qty) { return this.v31buyPrice('ceramic', partner, qty); }
  v31sellCeramic(partner, qty) { return this.v31sellPrice('ceramic', partner, qty); }
  v31quoteAntimatter(partner, qty, side) { return this.v31quote('antimatter', partner, qty, side); }
  v31buyAntimatter(partner, qty) { return this.v31buyPrice('antimatter', partner, qty); }
  v31sellAntimatter(partner, qty) { return this.v31sellPrice('antimatter', partner, qty); }
  v31monthlyDemand(goodId, month) { const g = this.v31good(goodId); if (!g) return 0; return g.monthlyDemand[((month || 0) % 12 + 12) % 12]; }
  v31monthlySupply(goodId, month) { const g = this.v31good(goodId); if (!g) return 0; return g.monthlySupply[((month || 0) % 12 + 12) % 12]; }
  v31seasonalPrice(goodId, month) { const g = this.v31good(goodId); if (!g) return 0; const d = this.v31monthlyDemand(goodId, month); const s = Math.max(1, this.v31monthlySupply(goodId, month)); return Math.round(g.base * Math.pow(d / s, g.elasticity) * 100) / 100; }
}


/* ============ §10 贸易伙伴 ============ */
class TradePartnerV31Manager {
  constructor(priceModel) {
    this.v31price = priceModel;
    this.v31partners = {};
    this.v31tradeCount = {};
    this.v31volume = {};
    for (const p of TRADE31_PARTNERS) {
      this.v31partners[p.id] = Object.assign({}, p, { relation: p.relation, trust: p.trust });
      this.v31tradeCount[p.id] = 0;
      this.v31volume[p.id] = 0;
    }
  }
  v31get(id) { return this.v31partners[id] || null; }
  v31list() { return TRADE31_PARTNERS.map(function (p) { return p.id; }).map(function (id) { return this.v31partners[id]; }, this); }
  v31relation(id) { const p = this.v31get(id); return p ? p.relation : 0; }
  v31adjustRelation(id, d) {
    const p = this.v31get(id);
    if (!p) return 0;
    p.relation = Math.max(0, Math.min(100, p.relation + d));
    p.trust = Math.round(p.relation) / 100;
    p.reputationTier = p.relation >= 60 ? 'trusted' : (p.relation >= 40 ? 'neutral' : 'wary');
    return p.relation;
  }
  v31canTrade(id, pop) {
    const p = this.v31get(id);
    if (!p) return { ok: false, reason: 'unknown partner' };
    if (p.relation < p.minRelation) return { ok: false, reason: 'relation too low' };
    if ((pop || 0) < p.unlockPop) return { ok: false, reason: 'pop too low' };
    return { ok: true };
  }
  v31haggle(id, goodId, qty, side, rounds) {
    const p = this.v31get(id);
    if (!p) return { ok: false, reason: 'unknown partner' };
    let q = this.v31price.v31quote(goodId, p, qty, side);
    if (!q.ok) return q;
    let best = q.unit;
    const maxR = Math.max(1, Math.min(rounds || p.patience, p.patience));
    for (let r = 0; r < maxR; r++) {
      const step = p.haggle * (side === 'buy' ? -1 : 1) * (1 - r * 0.15);
      const cand = q.unit * (1 + step);
      if (side === 'buy' && cand < best) best = cand;
      if (side === 'sell' && cand > best) best = cand;
    }
    best = Math.round(best * 100) / 100;
    return { ok: true, good: goodId, unit: best, qty: q.qty,
      total: Math.round(best * q.qty * 100) / 100, side: side, rounds: maxR, partner: id };
  }
  v31trade(id, goodId, qty, side, inv, credits) {
    const p = this.v31get(id);
    if (!p) return { ok: false, reason: 'unknown partner' };
    const q = this.v31haggle(id, goodId, qty, side, 1);
    if (!q.ok) return q;
    const have = (inv && inv[goodId]) || 0;
    if (side === 'sell' && have < q.qty) return { ok: false, reason: 'not enough stock', need: q.qty, have: have };
    if (side === 'buy' && (credits || 0) < q.total) return { ok: false, reason: 'not enough credits', need: q.total, have: credits || 0 };
    if (side === 'sell') { inv[goodId] = have - q.qty; }
    if (side === 'buy') { inv[goodId] = have + q.qty; }
    this.v31tradeCount[id] += 1;
    this.v31volume[id] += q.total;
    this.v31price.v31recordTrade(goodId, q.qty, side);
    const relDelta = q.total >= 500 ? 1 : 0;
    if (relDelta) this.v31adjustRelation(id, relDelta);
    return { ok: true, partner: id, good: goodId, qty: q.qty, unit: q.unit,
      total: q.total, side: side, creditsDelta: side === 'buy' ? -q.total : q.total,
      relation: p.relation, trades: this.v31tradeCount[id] };
  }
  v31bestPartnerFor(goodId, side) {
    let best = null; let bestQ = null;
    for (const p of this.v31list()) {
      const q = this.v31price.v31quote(goodId, p, 1, side);
      if (!q.ok) continue;
      if (!bestQ) { best = p; bestQ = q; continue; }
      if (side === 'buy' && q.unit < bestQ.unit) { best = p; bestQ = q; }
      if (side === 'sell' && q.unit > bestQ.unit) { best = p; bestQ = q; }
    }
    return best ? { partner: best, quote: bestQ } : null;
  }
  v31reputationTier(id) { const p = this.v31get(id); return p ? p.reputationTier : 'unknown'; }
  v31loyaltyBonus(id) { const p = this.v31get(id); return p ? (p.loyaltyBonus || 0) + (p.relation >= 80 ? 0.05 : 0) : 0; }
  v31priceMod(id, goodId) { const p = this.v31get(id); if (!p || !p.priceMods) return 1; return p.priceMods[goodId] || 1; }
  v31seasonalGood(id) { const p = this.v31get(id); return p ? p.seasonalGood : null; }
  v31summary() {
    return this.v31list().map(function (p) {
      return { id: p.id, name: p.name, relation: p.relation, trades: this.v31tradeCount[p.id],
        volume: Math.round(this.v31volume[p.id]), tier: p.reputationTier };
    }, this);
  }
  v31save() {
    const rel = {}; const cnt = {}; const vol = {};
    for (const id of Object.keys(this.v31partners)) { rel[id] = this.v31partners[id].relation; cnt[id] = this.v31tradeCount[id]; vol[id] = this.v31volume[id]; }
    return { relation: rel, trades: cnt, volume: vol };
  }
  v31load(d) {
    if (!d) return false;
    for (const id of Object.keys(d.relation || {})) { if (this.v31partners[id]) this.v31adjustRelation(id, d.relation[id] - this.v31partners[id].relation); }
    if (d.trades) this.v31tradeCount = Object.assign(this.v31tradeCount, d.trades);
    if (d.volume) this.v31volume = Object.assign(this.v31volume, d.volume);
    return true;
  }
}


/* ============ §11 贸易路线 ============ */
class TradeRouteV31Manager {
  constructor(priceModel, partners) {
    this.v31price = priceModel;
    this.v31partners = partners;
    this.v31routes = {};
    this.v31active = {};
    this.v31revenueTotal = 0;
    this.v31losses = 0;
    for (const r of TRADE31_ROUTES) {
      this.v31routes[r.id] = Object.assign({}, r, { condition: 100, establishedTick: 0 });
      this.v31active[r.id] = false;
    }
  }
  v31get(id) { return this.v31routes[id] || null; }
  v31levelUpCost(route) {
    const lvl = route.level || 1;
    return { credits: 400 * lvl * lvl, steel: 20 * lvl, tech: lvl >= 3 ? 15 * (lvl - 2) : 0 };
  }
  v31canOpen(id, stationSlots, credits) {
    const r = this.v31get(id);
    if (!r) return { ok: false, reason: 'unknown route' };
    if (this.v31active[id]) return { ok: false, reason: 'already open' };
    const open = Object.keys(this.v31active).filter(function (k) { return this.v31active[k]; }, this).length;
    if (open >= (stationSlots || 2)) return { ok: false, reason: 'no route slot' };
    if ((credits || 0) < 100) return { ok: false, reason: 'need 100 credits to open' };
    return { ok: true, cost: 100 };
  }
  v31open(id, tick) {
    const r = this.v31get(id);
    if (!r || this.v31active[id]) return false;
    this.v31active[id] = true;
    r.establishedTick = tick || 0;
    return true;
  }
  v31close(id) {
    if (!this.v31routes[id]) return false;
    this.v31active[id] = false;
    return true;
  }
  v31upgrade(id, inv, credits) {
    const r = this.v31get(id);
    if (!r) return { ok: false, reason: 'unknown route' };
    if (r.level >= r.maxLevel) return { ok: false, reason: 'max level' };
    const c = this.v31levelUpCost(r);
    if ((credits || 0) < c.credits) return { ok: false, reason: 'credits short', need: c.credits };
    if (inv && (inv.steel || 0) < c.steel) return { ok: false, reason: 'steel short', need: c.steel };
    if (inv) inv.steel = (inv.steel || 0) - c.steel;
    r.level += 1;
    r.capacity += 60;
    r.throughputPerTick += 12;
    r.revenueMul = Math.round((1 + (r.level - 1) * 0.35) * 100) / 100;
    r.upkeepPerTick += 8;
    return { ok: true, level: r.level, cost: c };
  }
  v31revenuePerTick(route, tariffRate) {
    const p = this.v31partners.v31get(route.partnerId);
    let margin = 0;
    if (p) {
      for (const g of p.exports) {
        const q = this.v31price.v31quote(g, p, 10, 'sell');
        if (q.ok) margin += q.total * 0.06;
      }
      for (const g of p.imports) {
        const q = this.v31price.v31quote(g, p, 10, 'buy');
        if (q.ok) margin += q.total * 0.04;
      }
    }
    const gross = margin * (route.revenueMul || 1) * (route.throughputPerTick / 12);
    const fee = gross * (route.feeRate || 0.03);
    const tariff = gross * (tariffRate || 0);
    const upkeep = route.upkeepPerTick || 0;
    const condMul = (route.condition || 100) / 100;
    const net = Math.round((gross - fee - tariff - upkeep) * condMul * 100) / 100;
    return { gross: Math.round(gross * 100) / 100, fee: Math.round(fee * 100) / 100,
      tariff: Math.round(tariff * 100) / 100, upkeep: upkeep, net: net };
  }
  v31tick(tick, tariffOf) {
    let netTotal = 0;
    const per = [];
    for (const id of Object.keys(this.v31routes)) {
      if (!this.v31active[id]) continue;
      const r = this.v31routes[id];
      r.condition = Math.max(20, (r.condition || 100) - (r.wearPerTick || 0.01));
      const p = this.v31partners.v31get(r.partnerId);
      const cat = p ? 'material' : 'raw';
      const rate = tariffOf ? tariffOf(cat) : 0;
      const rev = this.v31revenuePerTick(r, rate);
      netTotal += rev.net;
      per.push({ route: id, partner: r.partnerId, level: r.level, net: rev.net, gross: rev.gross });
      if (this.v31price.v31nextRandom() < (r.riskBase || 0.1) * 0.05) {
        r.condition = Math.max(20, r.condition - 5);
        this.v31losses += 1;
        per[per.length - 1].incident = 'pirate harassment';
      }
    }
    this.v31revenueTotal += netTotal;
    return { tick: tick, net: Math.round(netTotal * 100) / 100, routes: per, total: Math.round(this.v31revenueTotal * 100) / 100 };
  }
  v31legRisk(route) { if (!route || !route.legs) return 0; let s = 0; for (const l of route.legs) s += l.risk; return Math.round(s * 1000) / 1000; }
  v31legFuel(route) { if (!route || !route.legs) return 0; let s = 0; for (const l of route.legs) s += l.fuel; return s; }
  v31repair(id, inv) {
    const r = this.v31get(id);
    if (!r) return { ok: false, reason: 'unknown route' };
    const need = Math.ceil((100 - r.condition) / 10);
    if (inv && (inv.steel || 0) < need) return { ok: false, reason: 'steel short', need: need };
    if (inv) inv.steel -= need;
    r.condition = 100;
    return { ok: true, costSteel: need };
  }
  v31openCount() { return Object.keys(this.v31active).filter(function (k) { return this.v31active[k]; }, this).length; }
  v31save() {
    const routes = {};
    for (const id of Object.keys(this.v31routes)) routes[id] = { level: this.v31routes[id].level, condition: this.v31routes[id].condition, active: !!this.v31active[id], establishedTick: this.v31routes[id].establishedTick };
    return { routes: routes, revenueTotal: this.v31revenueTotal, losses: this.v31losses };
  }
  v31load(d) {
    if (!d) return false;
    for (const id of Object.keys(d.routes || {})) {
      if (this.v31routes[id]) { this.v31routes[id].level = d.routes[id].level; this.v31routes[id].condition = d.routes[id].condition; this.v31active[id] = !!d.routes[id].active; this.v31routes[id].establishedTick = d.routes[id].establishedTick || 0; }
    }
    this.v31revenueTotal = d.revenueTotal || 0;
    this.v31losses = d.losses || 0;
    return true;
  }
}


/* ============ §12 关税系统 ============ */
class TradeTariffV31Manager {
  constructor(partners) {
    this.v31partners = partners;
    this.v31rates = {};
    this.v31revenueTotal = 0;
    this.v31history = [];
    for (const row of TRADE31_TARIFF) this.v31rates[row.cat] = 0.05;
  }
  v31getRate(cat) { return (typeof this.v31rates[cat] === 'number') ? this.v31rates[cat] : 0.05; }
  v31setRate(cat, rate) {
    const r = Math.max(0, Math.min(0.30, rate));
    const old = this.v31getRate(cat);
    this.v31rates[cat] = Math.round(r * 1000) / 1000;
    this.v31history.push({ cat: cat, from: old, to: this.v31rates[cat] });
    if (this.v31history.length > 100) this.v31history.shift();
    return { ok: true, cat: cat, from: old, to: this.v31rates[cat] };
  }
  v31bracket(cat, rate) {
    for (const row of TRADE31_TARIFF) {
      if (row.cat !== cat) continue;
      let best = row.brackets[0];
      for (const b of row.brackets) if (Math.abs(b.rate / 100 - rate) < Math.abs(best.rate / 100 - rate)) best = b;
      return best;
    }
    return null;
  }
  v31tariffOn(cat, value) {
    const rate = this.v31getRate(cat);
    return Math.round(value * rate * 100) / 100;
  }
  v31volumeMul(cat) {
    const b = this.v31bracket(cat, this.v31getRate(cat));
    return b ? b.volumeMul : 1;
  }
  v31relationImpact(cat) {
    const b = this.v31bracket(cat, this.v31getRate(cat));
    return b ? b.relationDeltaPerTick : 0;
  }
  v31smuggleIncentive(cat) {
    const b = this.v31bracket(cat, this.v31getRate(cat));
    return b ? b.smuggleIncentive : 0;
  }
  v31optimalRate(cat, baseVolume) {
    let bestRate = 0; let bestRev = -1;
    for (let r = 0; r <= 0.30; r += 0.01) {
      const b = this.v31bracket(cat, r);
      const vol = (baseVolume || 100) * (b ? b.volumeMul : 1);
      const rev = vol * r;
      if (rev > bestRev) { bestRev = rev; bestRate = Math.round(r * 100) / 100; }
    }
    return { cat: cat, rate: bestRate, expectedRevenue: Math.round(bestRev * 100) / 100 };
  }
  v31tick(routeNetByCat) {
    let rev = 0;
    for (const cat of Object.keys(routeNetByCat || {})) rev += this.v31tariffOn(cat, routeNetByCat[cat]);
    this.v31revenueTotal += rev;
    for (const p of this.v31partners.v31list()) {
      let d = 0;
      for (const cat of Object.keys(this.v31rates)) d += this.v31relationImpact(cat);
      if (d !== 0) this.v31partners.v31adjustRelation(p.id, d);
    }
    return { revenue: Math.round(rev * 100) / 100, total: Math.round(this.v31revenueTotal * 100) / 100 };
  }
  v31save() { return { rates: this.v31rates, revenueTotal: this.v31revenueTotal, history: this.v31history.slice(-20) }; }
  v31load(d) {
    if (!d) return false;
    if (d.rates) this.v31rates = Object.assign(this.v31rates, d.rates);
    this.v31revenueTotal = d.revenueTotal || 0;
    if (Array.isArray(d.history)) this.v31history = d.history.slice();
    return true;
  }
}


/* ============ §13 走私 / 黑市 ============ */
class TradeSmugglingV31Manager {
  constructor(priceModel) {
    this.v31price = priceModel;
    this.v31heat = 0;
    this.v31runs = 0;
    this.v31seized = 0;
    this.v31profitTotal = 0;
    this.v31fences = {};
    for (const f of TRADE31_FENCES) this.v31fences[f.id] = Object.assign({}, f);
  }
  v31entry(goodId) { for (const e of TRADE31_SMUGGLE) if (e.good === goodId) return e; return null; }
  v31blackMarketPrice(goodId, qty) {
    const e = this.v31entry(goodId);
    if (!e) return { ok: false, reason: 'not contraband' };
    const q = this.v31price.v31quote(goodId, null, qty, 'sell');
    if (!q.ok) return q;
    const unit = Math.round(q.unit * e.blackMarketMul * 100) / 100;
    return { ok: true, good: goodId, unit: unit, qty: q.qty, total: Math.round(unit * q.qty * 100) / 100 };
  }
  v31risk(goodId, tariffRate, stealth) {
    const e = this.v31entry(goodId);
    if (!e) return 0;
    let r = e.baseRisk + (tariffRate || 0) * 1.2 + this.v31heat * 0.01 - (stealth || 0) - (e.stealthBonus || 0);
    return Math.max(0.02, Math.min(0.95, Math.round(r * 1000) / 1000));
  }
  v31attempt(goodId, qty, inv, tariffRate, stealth) {
    const e = this.v31entry(goodId);
    if (!e) return { ok: false, reason: 'not contraband' };
    const have = (inv && inv[goodId]) || 0;
    if (have < qty) return { ok: false, reason: 'not enough stock', need: qty, have: have };
    const risk = this.v31risk(goodId, tariffRate, stealth);
    const roll = this.v31price.v31nextRandom();
    const fence = this.v31fences[e.fenceId];
    const cut = fence ? fence.cut : 0.2;
    this.v31runs += 1;
    if (roll < risk) {
      const fine = Math.round(this.v31price.v31getPrice(goodId) * qty * e.seizeFineMul);
      inv[goodId] = have - qty;
      this.v31seized += 1;
      this.v31heat = Math.min(100, this.v31heat + e.heatPerRun * 2);
      return { ok: true, caught: true, good: goodId, qty: qty, fine: fine,
        relationHit: e.relationHit, heat: this.v31heat, roll: Math.round(roll * 1000) / 1000, risk: risk };
    }
    const bm = this.v31blackMarketPrice(goodId, qty);
    const net = Math.round(bm.total * (1 - cut) * 100) / 100;
    inv[goodId] = have - qty;
    this.v31profitTotal += net;
    this.v31heat = Math.min(100, this.v31heat + e.heatPerRun);
    return { ok: true, caught: false, good: goodId, qty: qty, gross: bm.total,
      fenceCut: Math.round(bm.total * cut * 100) / 100, net: net, heat: this.v31heat,
      roll: Math.round(roll * 1000) / 1000, risk: risk };
  }
  v31bribe(goodId, credits) {
    const e = this.v31entry(goodId);
    if (!e) return { ok: false, reason: 'not contraband' };
    if ((credits || 0) < e.bribeCost) return { ok: false, reason: 'bribe short', need: e.bribeCost };
    this.v31heat = Math.max(0, this.v31heat - 10);
    return { ok: true, cost: e.bribeCost, heat: this.v31heat };
  }
  v31heatDecay() { this.v31heat = Math.max(0, this.v31heat - 1); return this.v31heat; }
  v31save() { return { heat: this.v31heat, runs: this.v31runs, seized: this.v31seized, profitTotal: this.v31profitTotal }; }
  v31load(d) {
    if (!d) return false;
    this.v31heat = d.heat || 0; this.v31runs = d.runs || 0; this.v31seized = d.seized || 0; this.v31profitTotal = d.profitTotal || 0;
    return true;
  }
}


/* ============ §14 贸易站升级 ============ */
class TradeStationV31Manager {
  constructor() {
    this.v31level = 1;
    this.v31built = true;
    this.v31throughputTotal = 0;
  }
  v31def(level) { for (const d of TRADE31_STATION) if (d.level === level) return d; return TRADE31_STATION[0]; }
  v31current() { return this.v31def(this.v31level); }
  v31canUpgrade(inv, credits) {
    if (this.v31level >= 3) return { ok: false, reason: 'max level' };
    const next = this.v31def(this.v31level + 1);
    if ((credits || 0) < next.costCredits) return { ok: false, reason: 'credits short', need: next.costCredits };
    if (inv && (inv.steel || 0) < next.costSteel) return { ok: false, reason: 'steel short', need: next.costSteel };
    if (inv && (inv.tech || 0) < next.costTech) return { ok: false, reason: 'tech short', need: next.costTech };
    return { ok: true, next: next };
  }
  v31upgrade(inv, credits) {
    const chk = this.v31canUpgrade(inv, credits);
    if (!chk.ok) return chk;
    const next = chk.next;
    if (inv) { inv.steel = (inv.steel || 0) - next.costSteel; inv.tech = (inv.tech || 0) - next.costTech; }
    this.v31level += 1;
    return { ok: true, level: this.v31level, name: next.name, costCredits: next.costCredits, unlocks: next.unlocks };
  }
  v31routeSlots() { return this.v31current().routeSlots; }
  v31capacity() { return this.v31current().capacity; }
  v31feeDiscount() { return this.v31current().feeDiscount; }
  v31priceBonus() { return this.v31current().priceBonus; }
  v31contractSlots() { return this.v31current().contractSlots; }
  v31upkeep() { return this.v31current().upkeepPerTick; }
  v31tick(volume) {
    this.v31throughputTotal += (volume || 0);
    return { level: this.v31level, upkeep: this.v31upkeep(), throughputTotal: Math.round(this.v31throughputTotal) };
  }
  v31save() { return { level: this.v31level, throughputTotal: this.v31throughputTotal }; }
  v31load(d) { if (!d) return false; this.v31level = Math.max(1, Math.min(3, d.level || 1)); this.v31throughputTotal = d.throughputTotal || 0; return true; }
}


/* ============ §15 商队护卫 ============ */
class TradeEscortV31Manager {
  constructor(priceModel) {
    this.v31price = priceModel;
    this.v31hired = {};
    this.v31battles = 0;
    this.v31wins = 0;
    this.v31lootTotal = 0;
  }
  v31type(id) { for (const t of TRADE31_ESCORTS) if (t.id === id) return t; return null; }
  v31hire(id, routeId) {
    const t = this.v31type(id);
    if (!t) return { ok: false, reason: 'unknown escort' };
    if (this.v31hired[routeId]) return { ok: false, reason: 'route already guarded' };
    this.v31hired[routeId] = { type: id, power: t.power, hiredTick: 0 };
    return { ok: true, route: routeId, type: id, power: t.power, costPerTick: t.costPerTick };
  }
  v31dismiss(routeId) {
    if (!this.v31hired[routeId]) return false;
    delete this.v31hired[routeId];
    return true;
  }
  v31power(routeId) {
    const h = this.v31hired[routeId];
    if (!h) return 0;
    const t = this.v31type(h.type);
    return h.power * (1 + (t ? t.speedBonus : 0));
  }
  v31costPerTick() {
    let c = 0;
    for (const rid of Object.keys(this.v31hired)) { const t = this.v31type(this.v31hired[rid].type); if (t) c += t.costPerTick; }
    return c;
  }
  v31encounter(routeId, region) {
    const pool = TRADE31_ENCOUNTERS.filter(function (e) { return !region || e.region === region; });
    const enc = pool.length ? pool[Math.floor(this.v31price.v31nextRandom() * pool.length)] : TRADE31_ENCOUNTERS[0];
    return this.v31resolve(routeId, enc);
  }
  v31resolve(routeId, enc) {
    const power = this.v31power(routeId);
    const pirate = enc.piratePower || 10;
    this.v31battles += 1;
    const fleeRoll = this.v31price.v31nextRandom();
    if (fleeRoll < (enc.fleeChance || 0.2) && power < pirate) {
      return { ok: true, outcome: 'fled', route: routeId, pirate: pirate, power: power, loot: 0 };
    }
    if (power >= pirate) {
      this.v31wins += 1;
      this.v31lootTotal += enc.lootCredits || 0;
      return { ok: true, outcome: 'win', route: routeId, pirate: pirate, power: power,
        loot: enc.lootCredits || 0, lootGood: enc.lootGood, lootQty: enc.lootQty };
    }
    return { ok: true, outcome: 'loss', route: routeId, pirate: pirate, power: power,
      damage: enc.damageOnLoss || 20, loot: 0 };
  }
  v31winRate() { return this.v31battles ? Math.round(this.v31wins / this.v31battles * 1000) / 10 : 0; }
  v31save() { return { hired: this.v31hired, battles: this.v31battles, wins: this.v31wins, lootTotal: this.v31lootTotal }; }
  v31load(d) {
    if (!d) return false;
    if (d.hired) this.v31hired = d.hired;
    this.v31battles = d.battles || 0; this.v31wins = d.wins || 0; this.v31lootTotal = d.lootTotal || 0;
    return true;
  }
}


/* ============ §16 贸易任务 / 合同 ============ */
class TradeContractV31Manager {
  constructor(partners, priceModel) {
    this.v31partners = partners;
    this.v31price = priceModel;
    this.v31active = [];
    this.v31done = 0;
    this.v31failed = 0;
    this.v31earned = 0;
    this.v31seq = 0;
  }
  v31def(id) { for (const c of TRADE31_CONTRACTS) if (c.id === id) return c; return null; }
  v31available(pop, slots) {
    const out = [];
    for (const c of TRADE31_CONTRACTS) {
      const p = this.v31partners.v31get(c.partnerId);
      if (!p) continue;
      if (p.relation < c.minRelation) continue;
      if (this.v31active.some(function (a) { return a.defId === c.id; })) continue;
      out.push(c);
      if (out.length >= (slots || 4)) break;
    }
    return out;
  }
  v31accept(defId, tick) {
    const def = this.v31def(defId);
    if (!def) return { ok: false, reason: 'unknown contract' };
    if (this.v31active.length >= 8) return { ok: false, reason: 'too many active contracts' };
    this.v31seq += 1;
    const inst = { uid: 'x' + this.v31seq, defId: def.id, partnerId: def.partnerId,
      good: def.good, qty: def.qty, deadline: (tick || 0) + def.deadlineTicks,
      rewardCredits: def.rewardCredits, rewardRelation: def.rewardRelation,
      penaltyCredits: def.penaltyCredits, penaltyRelation: def.penaltyRelation,
      bonusGood: def.bonusGood, bonusQty: def.bonusQty, rushBonus: def.rushBonus,
      acceptedTick: tick || 0 };
    this.v31active.push(inst);
    return { ok: true, contract: inst };
  }
  v31fulfill(uid, inv, tick) {
    const idx = this.v31active.findIndex(function (a) { return a.uid === uid; });
    if (idx === -1) return { ok: false, reason: 'not active' };
    const c = this.v31active[idx];
    const have = (inv && inv[c.good]) || 0;
    if (have < c.qty) return { ok: false, reason: 'not enough stock', need: c.qty, have: have };
    inv[c.good] = have - c.qty;
    let reward = c.rewardCredits;
    const early = (tick || 0) <= c.deadline - 3;
    if (early) reward = Math.round(reward * (1 + (c.rushBonus || 0)));
    if (inv) inv[c.bonusGood] = (inv[c.bonusGood] || 0) + c.bonusQty;
    this.v31partners.v31adjustRelation(c.partnerId, c.rewardRelation);
    this.v31active.splice(idx, 1);
    this.v31done += 1;
    this.v31earned += reward;
    return { ok: true, uid: uid, reward: reward, early: early,
      bonusGood: c.bonusGood, bonusQty: c.bonusQty, relation: this.v31partners.v31relation(c.partnerId) };
  }
  v31tick(tick) {
    const expired = [];
    this.v31active = this.v31active.filter(function (c) {
      if ((tick || 0) > c.deadline) {
        expired.push(c);
        this.v31partners.v31adjustRelation(c.partnerId, c.penaltyRelation);
        this.v31failed += 1;
        return false;
      }
      return true;
    }, this);
    return expired.map(function (c) { return { uid: c.uid, defId: c.defId, penalty: c.penaltyCredits }; });
  }
  v31save() { return { active: this.v31active, done: this.v31done, failed: this.v31failed, earned: this.v31earned, seq: this.v31seq }; }
  v31load(d) {
    if (!d) return false;
    if (Array.isArray(d.active)) this.v31active = d.active.slice();
    this.v31done = d.done || 0; this.v31failed = d.failed || 0; this.v31earned = d.earned || 0; this.v31seq = d.seq || 0;
    return true;
  }
}


/* ============ §17 贸易对经济 / 人口 / 满意度的实际影响 ============ */
class TradeEconomyV31 {
  constructor() { this.v31lastEffects = null; }
  v31compute(net) {
    const routes = net.v31routes.v31openCount();
    const volume = net.v31price.v31volume ? Object.keys(net.v31price.v31volume).reduce(function (s, k) { return s + (net.v31price.v31volume[k] || 0); }, 0) : 0;
    let relSum = 0; let relN = 0;
    for (const p of net.v31partners.v31list()) { relSum += p.relation; relN += 1; }
    const avgRel = relN ? relSum / relN : 50;
    const routeNet = (net.v31lastRouteTick && net.v31lastRouteTick.net) || 0;
    const tariffRev = net.v31tariffs.v31revenueTotal || 0;
    const smuggleHeat = net.v31smuggle.v31heat || 0;
    const station = net.v31station.v31current();
    const creditsPerMin = Math.round((routeNet * 0.5 + volume * 0.02 + tariffRev * 0.001 - station.upkeepPerTick - net.v31escorts.v31costPerTick() * 0.5) * 100) / 100;
    const popGrowthMul = Math.round((1 + routes * 0.03 + Math.max(0, avgRel - 50) * 0.002 - smuggleHeat * 0.001) * 1000) / 1000;
    const happinessAdd = Math.round(((avgRel - 50) * 0.06 + routes * 0.8 + volume * 0.001 - smuggleHeat * 0.15) * 100) / 100;
    const foodPerMin = Math.round((net.v31price.v31supply.food || 0) * 0.001 * routes * 100) / 100;
    const techPerMin = Math.round((net.v31partners.v31tradeCount.p11 || 0) * 0.05 * 100) / 100;
    const effects = { creditsPerMin: creditsPerMin, popGrowthMul: popGrowthMul,
      happinessAdd: Math.max(-10, Math.min(10, happinessAdd)), foodPerMin: foodPerMin,
      techPerMin: techPerMin, routeNetPerTick: routeNet, avgRelation: Math.round(avgRel * 10) / 10,
      openRoutes: routes, tradeVolume: Math.round(volume), smuggleHeat: smuggleHeat };
    this.v31lastEffects = effects;
    return effects;
  }
  v31applyToGame(game, effects) {
    if (!game || !effects) return { applied: false };
    const out = { applied: true, credits: 0, happiness: 0 };
    try {
      if (game.economy && typeof game.economy.credits === 'number') {
        game.economy.credits += effects.creditsPerMin;
        out.credits = effects.creditsPerMin;
      } else if (game.player && game.player.inv && typeof game.player.inv.credits === 'number') {
        game.player.inv.credits += effects.creditsPerMin;
        out.credits = effects.creditsPerMin;
      }
      if (game.economy && typeof game.economy.happiness === 'number') {
        game.economy.happiness = Math.max(0, Math.min(100, game.economy.happiness + effects.happinessAdd * 0.1));
        out.happiness = effects.happinessAdd * 0.1;
      }
      if (game.pop && typeof game.pop.count === 'number' && effects.popGrowthMul > 1.02) {
        game.pop.count += 0;
      }
      if (game.player && game.player.inv && effects.foodPerMin > 0) {
        game.player.inv.food = (game.player.inv.food || 0) + effects.foodPerMin;
      }
    } catch (e) { out.applied = false; out.error = String(e && e.message || e); }
    return out;
  }
  v31save() { return { lastEffects: this.v31lastEffects }; }
  v31load(d) { if (!d) return false; this.v31lastEffects = d.lastEffects || null; return true; }
}


/* ============ §18 价格事件引擎 ============ */
class TradeEventEngineV31 {
  constructor(priceModel) {
    this.v31price = priceModel;
    this.v31fired = [];
    this.v31count = 0;
  }
  v31maybeTrigger(tick) {
    const out = [];
    for (const ev of TRADE31_EVENTS) {
      if (tick < (ev.minTick || 0)) continue;
      if (this.v31fired.some(function (f) { return f.id === ev.id && tick - f.tick < (ev.durationTicks || 6) + 10; })) continue;
      if (this.v31price.v31nextRandom() < (ev.probPerTick || 0.01)) {
        this.v31price.v31applyShock(ev);
        this.v31fired.push({ id: ev.id, tick: tick, good: ev.good, mul: ev.mul });
        this.v31count += 1;
        out.push(ev);
      }
    }
    if (this.v31fired.length > 200) this.v31fired = this.v31fired.slice(-200);
    return out;
  }
  v31activeShocks() { return this.v31price.v31shocks.slice(); }
  v31save() { return { fired: this.v31fired.slice(-50), count: this.v31count }; }
  v31load(d) {
    if (!d) return false;
    if (Array.isArray(d.fired)) this.v31fired = d.fired.slice();
    this.v31count = d.count || 0;
    return true;
  }
}


/* ============ §19 贸易网络总控 ============ */
class TradeNetworkV31 {
  constructor(game, seed) {
    this.v31game = game || null;
    this.v31tickCount = 0;
    this.v31price = new TradePriceModelV31(seed || 3107);
    this.v31partners = new TradePartnerV31Manager(this.v31price);
    this.v31routes = new TradeRouteV31Manager(this.v31price, this.v31partners);
    this.v31tariffs = new TradeTariffV31Manager(this.v31partners);
    this.v31smuggle = new TradeSmugglingV31Manager(this.v31price);
    this.v31station = new TradeStationV31Manager();
    this.v31escorts = new TradeEscortV31Manager(this.v31price);
    this.v31contracts = new TradeContractV31Manager(this.v31partners, this.v31price);
    this.v31economy = new TradeEconomyV31();
    this.v31events = new TradeEventEngineV31(this.v31price);
    this.v31lastRouteTick = null;
    this.v31lastEffects = null;
    this.v31log = [];
  }
  v31logPush(kind, data) {
    this.v31log.push({ tick: this.v31tickCount, kind: kind, data: data || {} });
    if (this.v31log.length > 200) this.v31log.shift();
  }
  v31inv() { return (this.v31game && this.v31game.player && this.v31game.player.inv) || {}; }
  v31credits() {
    if (this.v31game && this.v31game.economy && typeof this.v31game.economy.credits === 'number') return this.v31game.economy.credits;
    const inv = this.v31inv();
    return (typeof inv.credits === 'number') ? inv.credits : 0;
  }
  v31pop() { return (this.v31game && this.v31game.pop && this.v31game.pop.count) || 0; }
  v31quote(goodId, partnerId, qty, side) {
    const p = partnerId ? this.v31partners.v31get(partnerId) : null;
    return this.v31price.v31quote(goodId, p, qty, side);
  }
  v31buy(goodId, partnerId, qty) {
    const inv = this.v31inv();
    const credits = this.v31credits();
    const r = this.v31partners.v31trade(partnerId, goodId, qty, 'buy', inv, credits);
    if (r.ok) this.v31spendCredits(-r.creditsDelta);
    if (r.ok) this.v31logPush('buy', r);
    return r;
  }
  v31sell(goodId, partnerId, qty) {
    const inv = this.v31inv();
    const r = this.v31partners.v31trade(partnerId, goodId, qty, 'sell', inv, this.v31credits());
    if (r.ok) this.v31spendCredits(r.creditsDelta);
    if (r.ok) this.v31logPush('sell', r);
    return r;
  }
  v31spendCredits(delta) {
    if (this.v31game && this.v31game.economy && typeof this.v31game.economy.credits === 'number') {
      this.v31game.economy.credits += delta;
      return this.v31game.economy.credits;
    }
    const inv = this.v31inv();
    if (typeof inv.credits === 'number') { inv.credits += delta; return inv.credits; }
    return 0;
  }
  v31openRoute(routeId) {
    const chk = this.v31routes.v31canOpen(routeId, this.v31station.v31routeSlots(), this.v31credits());
    if (!chk.ok) return chk;
    this.v31spendCredits(-chk.cost);
    const ok = this.v31routes.v31open(routeId, this.v31tickCount);
    if (ok) this.v31logPush('route-open', { route: routeId });
    return { ok: ok, route: routeId, cost: chk.cost };
  }
  v31setTariff(cat, rate) { return this.v31tariffs.v31setRate(cat, rate); }
  v31smuggleRun(goodId, qty, stealth) {
    const r = this.v31smuggle.v31attempt(goodId, qty, this.v31inv(), this.v31tariffs.v31getRate('luxury'), stealth || 0);
    if (r.ok && !r.caught) this.v31spendCredits(r.net);
    if (r.ok && r.caught) { this.v31spendCredits(-r.fine); }
    if (r.ok) this.v31logPush('smuggle', r);
    return r;
  }
  v31acceptContract(defId) { return this.v31contracts.v31accept(defId, this.v31tickCount); }
  v31fulfillContract(uid) {
    const r = this.v31contracts.v31fulfill(uid, this.v31inv(), this.v31tickCount);
    if (r.ok) this.v31spendCredits(r.reward);
    if (r.ok) this.v31logPush('contract', r);
    return r;
  }
  v31upgradeStation() {
    const r = this.v31station.v31upgrade(this.v31inv(), this.v31credits());
    if (r.ok) this.v31spendCredits(-r.costCredits);
    return r;
  }
  v31hireEscort(typeId, routeId) {
    const r = this.v31escorts.v31hire(typeId, routeId);
    return r;
  }
  tick(dtMin, game) {
    if (game) this.v31game = game;
    const steps = Math.max(1, Math.min(60, Math.floor(dtMin || 1)));
    let routeNet = 0;
    for (let i = 0; i < steps; i++) {
      this.v31tickCount += 1;
      this.v31price.v31updateMarket(this.v31partners.v31list());
      this.v31events.v31maybeTrigger(this.v31tickCount);
      this.v31lastRouteTick = this.v31routes.v31tick(this.v31tickCount, function (cat) { return this.v31tariffs.v31getRate(cat); }.bind(this));
      routeNet += this.v31lastRouteTick.net;
      const expired = this.v31contracts.v31tick(this.v31tickCount);
      if (expired.length) this.v31logPush('contract-expired', { count: expired.length });
      this.v31smuggle.v31heatDecay();
      this.v31station.v31tick(this.v31lastRouteTick.net);
    }
    const tariffRev = this.v31tariffs.v31tick({ material: Math.max(0, routeNet) });
    this.v31spendCredits(Math.round(routeNet * 100) / 100 + tariffRev.revenue - this.v31escorts.v31costPerTick());
    this.v31lastEffects = this.v31economy.v31compute(this);
    this.v31economy.v31applyToGame(this.v31game, this.v31lastEffects);
    return { tick: this.v31tickCount, routeNet: Math.round(routeNet * 100) / 100,
      tariffRevenue: tariffRev.revenue, effects: this.v31lastEffects,
      openRoutes: this.v31routes.v31openCount() };
  }
  v31tradeWithP01(goodId, qty, side) { return this.v31partners.v31trade('p01', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP01() { return this.v31partners.v31relation('p01'); }
  v31bestQuoteP01(goodId, side) { const p = this.v31partners.v31get('p01'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP02(goodId, qty, side) { return this.v31partners.v31trade('p02', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP02() { return this.v31partners.v31relation('p02'); }
  v31bestQuoteP02(goodId, side) { const p = this.v31partners.v31get('p02'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP03(goodId, qty, side) { return this.v31partners.v31trade('p03', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP03() { return this.v31partners.v31relation('p03'); }
  v31bestQuoteP03(goodId, side) { const p = this.v31partners.v31get('p03'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP04(goodId, qty, side) { return this.v31partners.v31trade('p04', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP04() { return this.v31partners.v31relation('p04'); }
  v31bestQuoteP04(goodId, side) { const p = this.v31partners.v31get('p04'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP05(goodId, qty, side) { return this.v31partners.v31trade('p05', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP05() { return this.v31partners.v31relation('p05'); }
  v31bestQuoteP05(goodId, side) { const p = this.v31partners.v31get('p05'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP06(goodId, qty, side) { return this.v31partners.v31trade('p06', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP06() { return this.v31partners.v31relation('p06'); }
  v31bestQuoteP06(goodId, side) { const p = this.v31partners.v31get('p06'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP07(goodId, qty, side) { return this.v31partners.v31trade('p07', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP07() { return this.v31partners.v31relation('p07'); }
  v31bestQuoteP07(goodId, side) { const p = this.v31partners.v31get('p07'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP08(goodId, qty, side) { return this.v31partners.v31trade('p08', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP08() { return this.v31partners.v31relation('p08'); }
  v31bestQuoteP08(goodId, side) { const p = this.v31partners.v31get('p08'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP09(goodId, qty, side) { return this.v31partners.v31trade('p09', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP09() { return this.v31partners.v31relation('p09'); }
  v31bestQuoteP09(goodId, side) { const p = this.v31partners.v31get('p09'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP10(goodId, qty, side) { return this.v31partners.v31trade('p10', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP10() { return this.v31partners.v31relation('p10'); }
  v31bestQuoteP10(goodId, side) { const p = this.v31partners.v31get('p10'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP11(goodId, qty, side) { return this.v31partners.v31trade('p11', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP11() { return this.v31partners.v31relation('p11'); }
  v31bestQuoteP11(goodId, side) { const p = this.v31partners.v31get('p11'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31tradeWithP12(goodId, qty, side) { return this.v31partners.v31trade('p12', goodId, qty, side, this.v31inv(), this.v31credits()); }
  v31relationP12() { return this.v31partners.v31relation('p12'); }
  v31bestQuoteP12(goodId, side) { const p = this.v31partners.v31get('p12'); return this.v31price.v31quote(goodId, p, 1, side); }
  v31summary() {
    return { tick: this.v31tickCount, version: TRADE31_VERSION,
      stationLevel: this.v31station.v31level, openRoutes: this.v31routes.v31openCount(),
      revenueTotal: Math.round(this.v31routes.v31revenueTotal * 100) / 100,
      tariffTotal: Math.round(this.v31tariffs.v31revenueTotal * 100) / 100,
      smuggleProfit: Math.round(this.v31smuggle.v31profitTotal * 100) / 100,
      smuggleHeat: this.v31smuggle.v31heat,
      contractsDone: this.v31contracts.v31done, contractsFailed: this.v31contracts.v31failed,
      effects: this.v31lastEffects, partners: this.v31partners.v31summary() };
  }
  save() { return this.serialize(); }
  load(data) { return this.deserialize(data); }
  serialize() {
    return { version: TRADE31_VERSION, tick: this.v31tickCount,
      price: this.v31price.v31save(), partners: this.v31partners.v31save(),
      routes: this.v31routes.v31save(), tariffs: this.v31tariffs.v31save(),
      smuggle: this.v31smuggle.v31save(), station: this.v31station.v31save(),
      escorts: this.v31escorts.v31save(), contracts: this.v31contracts.v31save(),
      economy: this.v31economy.v31save(), events: this.v31events.v31save(),
      log: this.v31log.slice(-50) };
  }
  deserialize(data) {
    if (!data) return false;
    this.v31tickCount = data.tick || 0;
    if (data.price) this.v31price.v31load(data.price);
    if (data.partners) this.v31partners.v31load(data.partners);
    if (data.routes) this.v31routes.v31load(data.routes);
    if (data.tariffs) this.v31tariffs.v31load(data.tariffs);
    if (data.smuggle) this.v31smuggle.v31load(data.smuggle);
    if (data.station) this.v31station.v31load(data.station);
    if (data.escorts) this.v31escorts.v31load(data.escorts);
    if (data.contracts) this.v31contracts.v31load(data.contracts);
    if (data.economy) this.v31economy.v31load(data.economy);
    if (data.events) this.v31events.v31load(data.events);
    if (Array.isArray(data.log)) this.v31log = data.log.slice();
    return true;
  }
}


/* ============ §20 接入 / 合并 / 自检 ============ */
const TradeV31Integration = {
  attach: function (game) {
    if (!game) return null;
    if (game.tradeV31) return game.tradeV31;
    const net = new TradeNetworkV31(game, 3107);
    game.tradeV31 = net;
    game.tradeV31Tick = function (dtMin) { return net.tick(dtMin, game); };
    game.tradeV31Save = function () { return net.save(); };
    game.tradeV31Load = function (data) { return net.load(data); };
    return net;
  },
  detach: function (game) {
    if (!game || !game.tradeV31) return false;
    delete game.tradeV31;
    delete game.tradeV31Tick;
    delete game.tradeV31Save;
    delete game.tradeV31Load;
    return true;
  }
};

function mergeTradeV31() {
  let addedOffers = 0;
  let addedPartners = 0;
  if (typeof TRADE_OFFERS !== 'undefined' && Array.isArray(TRADE_OFFERS)) {
    for (const p of TRADE31_PARTNERS) {
      const id = 'v31-' + p.id;
      if (TRADE_OFFERS.some(function (o) { return o.id === id; })) continue;
      const g = p.exports[0];
      TRADE_OFFERS.push({ id: id, give: { steel: 10 }, get: (function () { const o = {}; o[g] = 5; return o; })(), name: p.name + '·特产' });
      addedOffers += 1;
    }
  }
  if (typeof BUILDINGS !== 'undefined' && BUILDINGS && BUILDINGS.trade) {
    addedPartners = TRADE31_PARTNERS.length;
  }
  return { addedOffers: addedOffers, partners: TRADE31_PARTNERS.length,
    goods: TRADE31_GOODS.length, routes: TRADE31_ROUTES.length,
    contracts: TRADE31_CONTRACTS.length, events: TRADE31_EVENTS.length,
    mergedIntoGlobal: (typeof TRADE_OFFERS !== 'undefined') };
}

function selfTestTradeV31() {
  const errors = [];
  const checks = {};
  try {
    const stubGame = { player: { inv: { iron: 500, steel: 200, food: 300, tech: 100, luxury: 10, uranium: 20 } },
      economy: { credits: 5000, happiness: 60 }, pop: { count: 150 } };
    const net = TradeV31Integration.attach(stubGame);
    checks.attach = !!net && stubGame.tradeV31 === net;
    if (!checks.attach) errors.push('attach 失败');
    const q = net.v31quote('iron', 'p01', 10, 'buy');
    checks.quote = q.ok && q.unit > 0 && q.total > 0;
    if (!checks.quote) errors.push('报价失败 ' + JSON.stringify(q));
    const q2 = net.v31price.v31sellPrice('steel', net.v31partners.v31get('p02'), 5);
    checks.sellQuote = q2.ok && q2.unit > 0;
    if (!checks.sellQuote) errors.push('卖价失败');
    const arb = net.v31price.v31arbitrage('rare', net.v31partners.v31list());
    checks.arbitrage = !!arb.ok;
    if (!checks.arbitrage) errors.push('套利计算失败');
    const opened = net.v31openRoute('r01');
    checks.routeOpen = !!opened.ok;
    if (!checks.routeOpen) errors.push('开航线失败 ' + JSON.stringify(opened));
    const t = net.tick(1, stubGame);
    checks.tick = !!t && typeof t.routeNet === 'number' && !!t.effects;
    if (!checks.tick) errors.push('tick 失败');
    const eff = net.v31economy.v31compute(net);
    checks.effects = typeof eff.creditsPerMin === 'number' && typeof eff.popGrowthMul === 'number' && typeof eff.happinessAdd === 'number';
    if (!checks.effects) errors.push('经济影响计算失败');
    const tf = net.v31setTariff('material', 0.10);
    checks.tariff = tf.ok && Math.abs(net.v31tariffs.v31getRate('material') - 0.10) < 0.001;
    if (!checks.tariff) errors.push('关税设置失败');
    const opt = net.v31tariffs.v31optimalRate('material', 100);
    checks.tariffOptimal = opt.rate >= 0 && opt.rate <= 0.30;
    if (!checks.tariffOptimal) errors.push('最优关税失败');
    const sm = net.v31smuggleRun('luxury', 2, 0.1);
    checks.smuggle = !!sm && typeof sm.caught === 'boolean';
    if (!checks.smuggle) errors.push('走私失败');
    const bm = net.v31smuggle.v31blackMarketPrice('luxury', 2);
    checks.blackMarket = bm.ok && bm.unit > 0;
    if (!checks.blackMarket) errors.push('黑市价失败');
    const st = net.v31upgradeStation();
    checks.station = !!st && (st.ok || st.reason === 'credits short' || st.reason === 'tech short' || st.reason === 'steel short');
    const esc = net.v31hireEscort('esc01', 'r01');
    checks.escort = esc.ok;
    if (!checks.escort) errors.push('护卫雇佣失败 ' + JSON.stringify(esc));
    const enc = net.v31escorts.v31encounter('r01', 'belt');
    checks.encounter = !!enc && (enc.outcome === 'win' || enc.outcome === 'loss' || enc.outcome === 'fled');
    if (!checks.encounter) errors.push('遭遇战失败');
    const acc = net.v31acceptContract('c001');
    checks.contractAccept = acc.ok;
    if (!checks.contractAccept) errors.push('合同接受失败 ' + JSON.stringify(acc));
    const saved = net.save();
    const net2 = new TradeNetworkV31(null, 3107);
    const loaded = net2.load(saved);
    checks.saveLoad = loaded && net2.v31tickCount === net.v31tickCount;
    if (!checks.saveLoad) errors.push('存档/读档失败');
    const merged = mergeTradeV31();
    checks.merge = typeof merged.partners === 'number' && merged.partners === 12;
    if (!checks.merge) errors.push('合并失败');
    const sim = net.v31price.v31simulateTicks(3, net.v31partners.v31list());
    checks.simulate = sim.length === 3;
    if (!checks.simulate) errors.push('市场模拟失败');
    const det = net.v31partners.v31summary();
    checks.summary = Array.isArray(det) && det.length === 12;
    if (!checks.summary) errors.push('伙伴汇总失败');
    const s2 = net.v31summary();
    checks.networkSummary = s2.stationLevel >= 1 && s2.openRoutes >= 0;
    if (!checks.networkSummary) errors.push('网络汇总失败');
  } catch (e) {
    errors.push('异常: ' + (e && e.message ? e.message : String(e)));
  }
  return { pass: errors.length === 0, errors: errors, checks: checks,
    partners: TRADE31_PARTNERS.length, goods: TRADE31_GOODS.length,
    routes: TRADE31_ROUTES.length, contracts: TRADE31_CONTRACTS.length };
}

if (typeof module !== 'undefined') {
  module.exports = { TRADE31_VERSION, TRADE31_GOODS, TRADE31_PARTNERS, TRADE31_EVENTS,
    TRADE31_ROUTES, TRADE31_CONTRACTS, TRADE31_SMUGGLE, TRADE31_FENCES,
    TRADE31_ESCORTS, TRADE31_ENCOUNTERS, TRADE31_STATION, TRADE31_TARIFF,
    TradePriceModelV31, TradePartnerV31Manager, TradeRouteV31Manager,
    TradeTariffV31Manager, TradeSmugglingV31Manager, TradeStationV31Manager,
    TradeEscortV31Manager, TradeContractV31Manager, TradeEconomyV31,
    TradeEventEngineV31, TradeNetworkV31, TradeV31Integration,
    mergeTradeV31, selfTestTradeV31 };
}
