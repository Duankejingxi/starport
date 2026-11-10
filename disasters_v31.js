/* 星港 — disasters_v31.js：v3.1 新灾难 12 种（贸易 4 / 文化 4 / 科研 4）
 * 每种灾难都有：触发条件（5 条，可逐条判定）、持续时间、损失公式、
 * 应对方法（4 种，每种有造价与真实效果）、缓解科技、免疫科技、
 * 三阶段演变、升级规则、善后恢复、应急手册与时间线。DisasterManagerV31 可独立 tick，
 * mergeDisastersV31(manager) 把 12 种挂到现有 DisasterManager 实例上。
 * 描述一律一句话，不写故事。
 */

'use strict';

/* ============ §1 灾难定义（12 种） ============ */
const DISASTERS_V31 = {
  // ---------- d31-tradewar 贸易战 [贸易·严重度 4] ----------
  "d31-tradewar": {
    id: "d31-tradewar",
    name: "贸易战",
    icon: "📉",
    category: "贸易",
    severity: 4,
    v31: true,
    timing: {
      firstAtMin: 45,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 60,
      durationSec: 300,
      note: "首次 45 分钟后出现，之后每 25~55 分钟可能复发，预警 60 秒，持续 300 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "贸易逆差连续 3 个月扩大",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：贸易逆差连续 3 个月扩大。",
        },
        {
          text: "对外贸易依存度 > 60%",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：对外贸易依存度 > 60%。",
        },
        {
          text: "星币储备 < 1000",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：星币储备 < 1000。",
        },
        {
          text: "存在未解决的贸易争端",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：存在未解决的贸易争端。",
        },
        {
          text: "贸易站数量 ≥ 3",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：贸易站数量 ≥ 3。",
        },
      ],
    },
    effects: {
      "prodMul": 0.6,
      "tradeMul": 0.4,
      "taxMul": 0.7,
      "happinessAdd": -12,
      "stabilityAdd": -10,
      "popLossPct": 0.02,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.6, note: "全部生产 ×0.6。" },
      { key: "tradeMul", value: 0.4, note: "贸易收入 ×0.4。" },
      { key: "taxMul", value: 0.7, note: "税收 ×0.7。" },
      { key: "happinessAdd", value: -12, note: "幸福度 -12 点。" },
      { key: "stabilityAdd", value: -10, note: "稳定度 -10 点。" },
      { key: "popLossPct", value: 0.02, note: "人口损失 2%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.02)",
      creditsLoss: 800,
      steelLoss: 200,
      buildingsDamaged: 2,
      perSecond: "幸福度每秒 -0.04，稳定度每秒 -0.03（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -800，钢材 -200，建筑损坏 2 栋。",
    },
    probability: {
      baseChancePerCheck: 0.16,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 16%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「贸易战」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「贸易战」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「贸易战」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 60, text: "预警：「贸易战」可能来袭。", note: "一级预警：提前 60 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 30, text: "警报：「贸易战」即将发生！", note: "二级警报：提前 30 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「贸易战」已经发生！", note: "三级警报：灾难进行中，持续 300 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「贸易战」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 2, note: "「贸易战」期间「温室」受损权重 2。" },
      { buildingType: "lab", buildingName: "实验室", damage: 0, note: "「贸易战」期间「实验室」受损权重 0。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「贸易战」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 2, note: "「贸易战」期间「贸易站」受损权重 2。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「贸易战」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 150, note: "二级（150 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 225, note: "三级（225 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "紧急关税",
        cost: { "credits": 400 },
        effect: "贸易收入恢复 50%，持续时间 -30%",
        durationMul: 0.7,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "关税反制需要外交背书",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「紧急关税」。" },
          { step: 3, action: "效果：贸易收入恢复 50%，持续时间 -30%。" },
        ],
      },
      {
        name: "补贴出口商",
        cost: { "credits": 600 },
        effect: "持续时间 -40%，贸易收入 +20%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "补贴每批上限 600 星币",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「补贴出口商」。" },
          { step: 3, action: "效果：持续时间 -40%，贸易收入 +20%。" },
        ],
      },
      {
        name: "开辟新航线",
        cost: { "steel": 150 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则持续时间 +60 秒",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「开辟新航线」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "全面谈判",
        cost: { "credits": 800 },
        effect: "立即结束，但贸易收入 -10% 持续 10 分钟",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "谈判后需重签协定",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「全面谈判」。" },
          { step: 3, action: "效果：立即结束，但贸易收入 -10% 持续 10 分钟。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-trade-11", "t31-trade-07", "t31-eco-09"],
      techDetail: [
        { tech: "t31-trade-11", note: "研究「t31-trade-11」后，本灾难概率 / 影响下降。" },
        { tech: "t31-trade-07", note: "研究「t31-trade-07」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-09", note: "研究「t31-eco-09」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "t31-trade-11",
      immuneNote: "拥有「t31-trade-11」时本灾难永不触发。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 有。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "贸易战结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 10,
      note: "恢复期约 10 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 300, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 150, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 300, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "地球货船宣布暂停对火星航线，港口堆满滞留货物。",
      "关税清单一夜之间翻倍，出口商开始裁员。",
      "黑市汇率飙升，星币购买力明显缩水。",
      "贸易站门前排起长队，居民抢购进口食品。",
      "谈判代表团在空港滞留，迟迟无法启程。",
      "贸易战进入第二个月，工厂订单锐减一半。",
      "双方代表终于坐回谈判桌。",
      "贸易战结束，航线逐步恢复，城市开始清点损失。",
    ],
  },
  // ---------- d31-embargo 禁运封锁 [贸易·严重度 4] ----------
  "d31-embargo": {
    id: "d31-embargo",
    name: "禁运封锁",
    icon: "🚫",
    category: "贸易",
    severity: 4,
    v31: true,
    timing: {
      firstAtMin: 50,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 90,
      durationSec: 360,
      note: "首次 50 分钟后出现，之后每 25~55 分钟可能复发，预警 90 秒，持续 360 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "进口依存度 > 70%",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：进口依存度 > 70%。",
        },
        {
          text: "战略储备 < 7 天用量",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：战略储备 < 7 天用量。",
        },
        {
          text: "与地球关系 < 30",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：与地球关系 < 30。",
        },
        {
          text: "贸易站数量 ≥ 2",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：贸易站数量 ≥ 2。",
        },
        {
          text: "人口 ≥ 100",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 100。",
        },
      ],
    },
    effects: {
      "prodMul": 0.55,
      "tradeMul": 0.2,
      "taxMul": 0.6,
      "happinessAdd": -15,
      "stabilityAdd": -12,
      "popLossPct": 0.03,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.55, note: "全部生产 ×0.55。" },
      { key: "tradeMul", value: 0.2, note: "贸易收入 ×0.2。" },
      { key: "taxMul", value: 0.6, note: "税收 ×0.6。" },
      { key: "happinessAdd", value: -15, note: "幸福度 -15 点。" },
      { key: "stabilityAdd", value: -12, note: "稳定度 -12 点。" },
      { key: "popLossPct", value: 0.03, note: "人口损失 3%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.03)",
      creditsLoss: 1200,
      steelLoss: 300,
      buildingsDamaged: 3,
      perSecond: "幸福度每秒 -0.04，稳定度每秒 -0.03（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -1200，钢材 -300，建筑损坏 3 栋。",
    },
    probability: {
      baseChancePerCheck: 0.14,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 14%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「禁运封锁」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「禁运封锁」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「禁运封锁」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 90, text: "预警：「禁运封锁」可能来袭。", note: "一级预警：提前 90 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 45, text: "警报：「禁运封锁」即将发生！", note: "二级警报：提前 45 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「禁运封锁」已经发生！", note: "三级警报：灾难进行中，持续 360 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「禁运封锁」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 2, note: "「禁运封锁」期间「温室」受损权重 2。" },
      { buildingType: "lab", buildingName: "实验室", damage: 0, note: "「禁运封锁」期间「实验室」受损权重 0。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「禁运封锁」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 2, note: "「禁运封锁」期间「贸易站」受损权重 2。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「禁运封锁」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 180, note: "二级（180 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 270, note: "三级（270 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "走私通道",
        cost: { "credits": 500 },
        effect: "持续时间 -40%，食物供应 +30%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "走私被查获则稳定度 -5",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「走私通道」。" },
          { step: 3, action: "效果：持续时间 -40%，食物供应 +30%。" },
        ],
      },
      {
        name: "战略储备释放",
        cost: { "food": 300, "water": 300 },
        effect: "持续时间 -30%，无额外惩罚",
        durationMul: 0.7,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "储备见底前必须见效",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「战略储备释放」。" },
          { step: 3, action: "效果：持续时间 -30%，无额外惩罚。" },
        ],
      },
      {
        name: "外交斡旋",
        cost: { "credits": 700 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则持续时间 +90 秒",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「外交斡旋」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "自给自足动员",
        cost: { "steel": 200 },
        effect: "立即结束，但生产 -10% 持续 10 分钟",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "动员后需重建供应链",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「自给自足动员」。" },
          { step: 3, action: "效果：立即结束，但生产 -10% 持续 10 分钟。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-trade-14", "t31-pol-19", "t31-eco-12"],
      techDetail: [
        { tech: "t31-trade-14", note: "研究「t31-trade-14」后，本灾难概率 / 影响下降。" },
        { tech: "t31-pol-19", note: "研究「t31-pol-19」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-12", note: "研究「t31-eco-12」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "本灾难无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "禁运封锁结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 12,
      note: "恢复期约 12 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 360, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 180, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 360, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "封锁舰队出现在轨道上，所有货船被迫返航。",
      "进口清单上的物资逐项断供，仓库开始限量。",
      "居民凭票领取食品，配给站前排起长队。",
      "禁运进入第二周，药品库存告急。",
      "工程师拆解旧设备，拼凑替代零件。",
      "封锁舰队补给出现缺口，巡逻密度下降。",
      "密使带着解封条件返回地面。",
      "禁运解除，首批货船入港，城市开始补充库存。",
    ],
  },
  // ---------- d31-marketcrash 市场崩盘 [贸易·严重度 5] ----------
  "d31-marketcrash": {
    id: "d31-marketcrash",
    name: "市场崩盘",
    icon: "📊",
    category: "贸易",
    severity: 5,
    v31: true,
    timing: {
      firstAtMin: 60,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 60,
      durationSec: 420,
      note: "首次 60 分钟后出现，之后每 25~55 分钟可能复发，预警 60 秒，持续 420 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "星币流通量 > 5000",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：星币流通量 > 5000。",
        },
        {
          text: "投机建筑 ≥ 2 座",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：投机建筑 ≥ 2 座。",
        },
        {
          text: "幸福度 < 45",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：幸福度 < 45。",
        },
        {
          text: "税收连续下降 2 个月",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：税收连续下降 2 个月。",
        },
        {
          text: "贸易收入占比 > 50%",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：贸易收入占比 > 50%。",
        },
      ],
    },
    effects: {
      "prodMul": 0.5,
      "tradeMul": 0.3,
      "taxMul": 0.4,
      "happinessAdd": -20,
      "stabilityAdd": -18,
      "popLossPct": 0.04,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.5, note: "全部生产 ×0.5。" },
      { key: "tradeMul", value: 0.3, note: "贸易收入 ×0.3。" },
      { key: "taxMul", value: 0.4, note: "税收 ×0.4。" },
      { key: "happinessAdd", value: -20, note: "幸福度 -20 点。" },
      { key: "stabilityAdd", value: -18, note: "稳定度 -18 点。" },
      { key: "popLossPct", value: 0.04, note: "人口损失 4%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.04)",
      creditsLoss: 2000,
      steelLoss: 400,
      buildingsDamaged: 4,
      perSecond: "幸福度每秒 -0.05，稳定度每秒 -0.04（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -2000，钢材 -400，建筑损坏 4 栋。",
    },
    probability: {
      baseChancePerCheck: 0.12,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 12%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「市场崩盘」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「市场崩盘」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「市场崩盘」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 60, text: "预警：「市场崩盘」可能来袭。", note: "一级预警：提前 60 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 30, text: "警报：「市场崩盘」即将发生！", note: "二级警报：提前 30 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「市场崩盘」已经发生！", note: "三级警报：灾难进行中，持续 420 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 2, note: "「市场崩盘」期间「居住舱」受损权重 2。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 0, note: "「市场崩盘」期间「温室」受损权重 0。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「市场崩盘」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 2, note: "「市场崩盘」期间「发电建筑」受损权重 2。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 0, note: "「市场崩盘」期间「贸易站」受损权重 0。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 1, note: "「市场崩盘」期间「防御建筑」受损权重 1。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 210, note: "二级（210 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 315, note: "三级（315 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "注资救市",
        cost: { "credits": 1000 },
        effect: "持续时间 -50%，稳定度 +10",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "注资失败则星币再 -500",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「注资救市」。" },
          { step: 3, action: "效果：持续时间 -50%，稳定度 +10。" },
        ],
      },
      {
        name: "冻结交易",
        cost: { "steel": 100 },
        effect: "持续时间 -30%，税收 -20%",
        durationMul: 0.7,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "冻结期间贸易收入归零",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「冻结交易」。" },
          { step: 3, action: "效果：持续时间 -30%，税收 -20%。" },
        ],
      },
      {
        name: "债务重组",
        cost: { "credits": 400 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则持续时间 +120 秒",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「债务重组」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "接管交易所",
        cost: { "steel": 250 },
        effect: "立即结束，但幸福度 -10",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "接管后需重建信用",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「接管交易所」。" },
          { step: 3, action: "效果：立即结束，但幸福度 -10。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-trade-18", "t31-eco-15", "t31-pol-22"],
      techDetail: [
        { tech: "t31-trade-18", note: "研究「t31-trade-18」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-15", note: "研究「t31-eco-15」后，本灾难概率 / 影响下降。" },
        { tech: "t31-pol-22", note: "研究「t31-pol-22」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "t31-trade-18",
      immuneNote: "拥有「t31-trade-18」时本灾难永不触发。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 有。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "市场崩盘结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 15,
      note: "恢复期约 15 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 420, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 210, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 420, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "交易所指数开盘即暴跌，交易大厅一片死寂。",
      "保证金追缴单雪片般飞来，商会连夜开会。",
      "银行门口排起挤兑长队，警卫不得不维持秩序。",
      "崩盘第三日，企业开始大规模裁员。",
      "星币对物资的比价跌到历史最低。",
      "救市资金分批入场，跌势终于放缓。",
      "交易所恢复撮合交易，首日成交清淡。",
      "市场崩盘结束，监管新规开始起草。",
    ],
  },
  // ---------- d31-piracyblock 航道劫掠 [贸易·严重度 3] ----------
  "d31-piracyblock": {
    id: "d31-piracyblock",
    name: "航道劫掠",
    icon: "🏴",
    category: "贸易",
    severity: 3,
    v31: true,
    timing: {
      firstAtMin: 35,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 45,
      durationSec: 240,
      note: "首次 35 分钟后出现，之后每 25~55 分钟可能复发，预警 45 秒，持续 240 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "贸易航线 ≥ 3 条",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：贸易航线 ≥ 3 条。",
        },
        {
          text: "护航舰队 < 2 支",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：护航舰队 < 2 支。",
        },
        {
          text: "轨道防御 < 40",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：轨道防御 < 40。",
        },
        {
          text: "货船损失累计 ≥ 2 艘",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：货船损失累计 ≥ 2 艘。",
        },
        {
          text: "贸易收入 > 800/分钟",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：贸易收入 > 800/分钟。",
        },
      ],
    },
    effects: {
      "prodMul": 0.7,
      "tradeMul": 0.5,
      "taxMul": 0.8,
      "happinessAdd": -8,
      "stabilityAdd": -8,
      "popLossPct": 0.01,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.7, note: "全部生产 ×0.7。" },
      { key: "tradeMul", value: 0.5, note: "贸易收入 ×0.5。" },
      { key: "taxMul", value: 0.8, note: "税收 ×0.8。" },
      { key: "happinessAdd", value: -8, note: "幸福度 -8 点。" },
      { key: "stabilityAdd", value: -8, note: "稳定度 -8 点。" },
      { key: "popLossPct", value: 0.01, note: "人口损失 1%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.01)",
      creditsLoss: 600,
      steelLoss: 150,
      buildingsDamaged: 2,
      perSecond: "幸福度每秒 -0.03，稳定度每秒 -0.03（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -600，钢材 -150，建筑损坏 2 栋。",
    },
    probability: {
      baseChancePerCheck: 0.18,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 18%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「航道劫掠」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「航道劫掠」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「航道劫掠」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 45, text: "预警：「航道劫掠」可能来袭。", note: "一级预警：提前 45 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 22, text: "警报：「航道劫掠」即将发生！", note: "二级警报：提前 22 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「航道劫掠」已经发生！", note: "三级警报：灾难进行中，持续 240 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 0, note: "「航道劫掠」期间「居住舱」受损权重 0。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「航道劫掠」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 2, note: "「航道劫掠」期间「实验室」受损权重 2。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 0, note: "「航道劫掠」期间「发电建筑」受损权重 0。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「航道劫掠」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 2, note: "「航道劫掠」期间「防御建筑」受损权重 2。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 120, note: "二级（120 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 180, note: "三级（180 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "武装护航",
        cost: { "steel": 150 },
        effect: "持续时间 -50%，贸易收入 +10%",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "护航舰队需 2 天集结",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「武装护航」。" },
          { step: 3, action: "效果：持续时间 -50%，贸易收入 +10%。" },
        ],
      },
      {
        name: "缴纳买路钱",
        cost: { "credits": 350 },
        effect: "持续时间 -30%，无额外惩罚",
        durationMul: 0.7,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "交钱后劫掠可能复发",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「缴纳买路钱」。" },
          { step: 3, action: "效果：持续时间 -30%，无额外惩罚。" },
        ],
      },
      {
        name: "轨道清剿",
        cost: { "steel": 200 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则持续时间 +60 秒",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「轨道清剿」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "改道绕行",
        cost: { "credits": 200 },
        effect: "立即结束，但贸易收入 -15% 持续 10 分钟",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "绕行航线耗时翻倍",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「改道绕行」。" },
          { step: 3, action: "效果：立即结束，但贸易收入 -15% 持续 10 分钟。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-mil-08", "t31-trade-05", "t31-eco-06"],
      techDetail: [
        { tech: "t31-mil-08", note: "研究「t31-mil-08」后，本灾难概率 / 影响下降。" },
        { tech: "t31-trade-05", note: "研究「t31-trade-05」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-06", note: "研究「t31-eco-06」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "本灾难无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "航道劫掠结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 8,
      note: "恢复期约 8 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 240, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 120, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 240, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "三艘货船在小行星带失去联系，残骸信号断断续续。",
      "劫掠者公开索要赎金，航线保险费率暴涨。",
      "商队拒绝出港，港口货物越堆越高。",
      "劫掠范围扩大到近地轨道，补给船也不敢升空。",
      "巡逻队与劫掠者交火，击沉一艘敌船。",
      "劫掠者主力撤往小行星带深处。",
      "航线逐步恢复通航，护航编队常态化巡逻。",
      "航道劫掠结束，失踪船员名单刻上纪念碑。",
    ],
  },
  // ---------- d31-cultureclash 文化冲突 [文化·严重度 3] ----------
  "d31-cultureclash": {
    id: "d31-cultureclash",
    name: "文化冲突",
    icon: "🎭",
    category: "文化",
    severity: 3,
    v31: true,
    timing: {
      firstAtMin: 40,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 60,
      durationSec: 240,
      note: "首次 40 分钟后出现，之后每 25~55 分钟可能复发，预警 60 秒，持续 240 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "移民来源地 ≥ 4 个",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：移民来源地 ≥ 4 个。",
        },
        {
          text: "文化设施 < 2 座",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：文化设施 < 2 座。",
        },
        {
          text: "幸福度 < 55",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：幸福度 < 55。",
        },
        {
          text: "存在未调解的社区纠纷",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：存在未调解的社区纠纷。",
        },
        {
          text: "人口 ≥ 80",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 80。",
        },
      ],
    },
    effects: {
      "prodMul": 0.8,
      "researchMul": 0.85,
      "taxMul": 0.9,
      "happinessAdd": -14,
      "stabilityAdd": -14,
      "popLossPct": 0.01,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.8, note: "全部生产 ×0.8。" },
      { key: "researchMul", value: 0.85, note: "科研产出 ×0.85。" },
      { key: "taxMul", value: 0.9, note: "税收 ×0.9。" },
      { key: "happinessAdd", value: -14, note: "幸福度 -14 点。" },
      { key: "stabilityAdd", value: -14, note: "稳定度 -14 点。" },
      { key: "popLossPct", value: 0.01, note: "人口损失 1%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.01)",
      creditsLoss: 400,
      steelLoss: 100,
      buildingsDamaged: 1,
      perSecond: "幸福度每秒 -0.06，稳定度每秒 -0.06（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -400，钢材 -100，建筑损坏 1 栋。",
    },
    probability: {
      baseChancePerCheck: 0.15,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 15%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「文化冲突」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「文化冲突」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「文化冲突」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 60, text: "预警：「文化冲突」可能来袭。", note: "一级预警：提前 60 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 30, text: "警报：「文化冲突」即将发生！", note: "二级警报：提前 30 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「文化冲突」已经发生！", note: "三级警报：灾难进行中，持续 240 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 0, note: "「文化冲突」期间「居住舱」受损权重 0。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「文化冲突」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 2, note: "「文化冲突」期间「实验室」受损权重 2。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 0, note: "「文化冲突」期间「发电建筑」受损权重 0。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「文化冲突」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 2, note: "「文化冲突」期间「防御建筑」受损权重 2。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 120, note: "二级（120 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 180, note: "三级（180 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "文化节调解",
        cost: { "credits": 300 },
        effect: "持续时间 -40%，幸福度 +8",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "文化节需 3 天筹备",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「文化节调解」。" },
          { step: 3, action: "效果：持续时间 -40%，幸福度 +8。" },
        ],
      },
      {
        name: "社区对话",
        cost: { "food": 150 },
        effect: "持续时间 -30%，无额外惩罚",
        durationMul: 0.7,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "对话需双方代表到场",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「社区对话」。" },
          { step: 3, action: "效果：持续时间 -30%，无额外惩罚。" },
        ],
      },
      {
        name: "设立调解庭",
        cost: { "steel": 100 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则稳定度 -5",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「设立调解庭」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "分区自治",
        cost: { "credits": 500 },
        effect: "立即结束，但税收 -10% 持续 10 分钟",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "自治后需重订管理章程",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「分区自治」。" },
          { step: 3, action: "效果：立即结束，但税收 -10% 持续 10 分钟。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-cult-06", "t31-pol-12", "t31-eco-04"],
      techDetail: [
        { tech: "t31-cult-06", note: "研究「t31-cult-06」后，本灾难概率 / 影响下降。" },
        { tech: "t31-pol-12", note: "研究「t31-pol-12」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-04", note: "研究「t31-eco-04」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "本灾难无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "文化冲突结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 8,
      note: "恢复期约 8 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 240, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 120, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 240, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "两个社区因节日习俗在广场上发生争执。",
      "争执升级为街区对峙，商户纷纷关门。",
      "谣言在社区间流传，互信降到冰点。",
      "学校停课，家长要求分校上课。",
      "调解员逐户走访，记录双方诉求。",
      "联合文化节方案出炉，双方代表签字。",
      "广场重新响起音乐，两个社区同台演出。",
      "文化冲突结束，新订的社区公约贴上公告栏。",
    ],
  },
  // ---------- d31-faithschism 信仰分裂 [文化·严重度 4] ----------
  "d31-faithschism": {
    id: "d31-faithschism",
    name: "信仰分裂",
    icon: "⛩️",
    category: "文化",
    severity: 4,
    v31: true,
    timing: {
      firstAtMin: 50,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 75,
      durationSec: 300,
      note: "首次 50 分钟后出现，之后每 25~55 分钟可能复发，预警 75 秒，持续 300 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "宗教建筑 ≥ 2 座",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：宗教建筑 ≥ 2 座。",
        },
        {
          text: "稳定度 < 40",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：稳定度 < 40。",
        },
        {
          text: "存在对立教派",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：存在对立教派。",
        },
        {
          text: "幸福度 < 50",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：幸福度 < 50。",
        },
        {
          text: "人口 ≥ 120",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 120。",
        },
      ],
    },
    effects: {
      "prodMul": 0.75,
      "researchMul": 0.8,
      "taxMul": 0.85,
      "happinessAdd": -16,
      "stabilityAdd": -20,
      "popLossPct": 0.02,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.75, note: "全部生产 ×0.75。" },
      { key: "researchMul", value: 0.8, note: "科研产出 ×0.8。" },
      { key: "taxMul", value: 0.85, note: "税收 ×0.85。" },
      { key: "happinessAdd", value: -16, note: "幸福度 -16 点。" },
      { key: "stabilityAdd", value: -20, note: "稳定度 -20 点。" },
      { key: "popLossPct", value: 0.02, note: "人口损失 2%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.02)",
      creditsLoss: 500,
      steelLoss: 120,
      buildingsDamaged: 2,
      perSecond: "幸福度每秒 -0.05，稳定度每秒 -0.07（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -500，钢材 -120，建筑损坏 2 栋。",
    },
    probability: {
      baseChancePerCheck: 0.13,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 13%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「信仰分裂」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「信仰分裂」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「信仰分裂」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 75, text: "预警：「信仰分裂」可能来袭。", note: "一级预警：提前 75 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 37, text: "警报：「信仰分裂」即将发生！", note: "二级警报：提前 37 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「信仰分裂」已经发生！", note: "三级警报：灾难进行中，持续 300 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「信仰分裂」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 2, note: "「信仰分裂」期间「温室」受损权重 2。" },
      { buildingType: "lab", buildingName: "实验室", damage: 0, note: "「信仰分裂」期间「实验室」受损权重 0。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「信仰分裂」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 2, note: "「信仰分裂」期间「贸易站」受损权重 2。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「信仰分裂」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 150, note: "二级（150 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 225, note: "三级（225 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "信仰峰会",
        cost: { "credits": 450 },
        effect: "持续时间 -40%，稳定度 +8",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "峰会需各派领袖出席",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「信仰峰会」。" },
          { step: 3, action: "效果：持续时间 -40%，稳定度 +8。" },
        ],
      },
      {
        name: "宽容法案",
        cost: { "credits": 300 },
        effect: "持续时间 -30%，幸福度 +5",
        durationMul: 0.7,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "法案表决需 3 天",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「宽容法案」。" },
          { step: 3, action: "效果：持续时间 -30%，幸福度 +5。" },
        ],
      },
      {
        name: "圣物归还",
        cost: { "steel": 80 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则幸福度 -8",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「圣物归还」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "政教分离令",
        cost: { "credits": 600 },
        effect: "立即结束，但稳定度 -10",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "法令颁布后需长期执行",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「政教分离令」。" },
          { step: 3, action: "效果：立即结束，但稳定度 -10。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-cult-12", "t31-pol-16", "t31-eco-08"],
      techDetail: [
        { tech: "t31-cult-12", note: "研究「t31-cult-12」后，本灾难概率 / 影响下降。" },
        { tech: "t31-pol-16", note: "研究「t31-pol-16」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-08", note: "研究「t31-eco-08」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "t31-cult-12",
      immuneNote: "拥有「t31-cult-12」时本灾难永不触发。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 有。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "信仰分裂结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 10,
      note: "恢复期约 10 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 300, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 150, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 300, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "新教派领袖发表宣言，旧教派信众走上街头。",
      "两派信众在圣地外对峙，气氛剑拔弩张。",
      "布道内容被断章取义，冲突向全城蔓延。",
      "分裂进入第二周，家庭内部也出现分歧。",
      "中立长老出面斡旋，划出共处红线。",
      "双方同意共用圣地，分时举行仪式。",
      "联合祈祷仪式举行，广场恢复平静。",
      "信仰分裂结束，和解备忘录由双方共同签署。",
    ],
  },
  // ---------- d31-languagebar 语言隔阂 [文化·严重度 2] ----------
  "d31-languagebar": {
    id: "d31-languagebar",
    name: "语言隔阂",
    icon: "🗣️",
    category: "文化",
    severity: 2,
    v31: true,
    timing: {
      firstAtMin: 30,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 45,
      durationSec: 180,
      note: "首次 30 分钟后出现，之后每 25~55 分钟可能复发，预警 45 秒，持续 180 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "移民来源地 ≥ 5 个",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：移民来源地 ≥ 5 个。",
        },
        {
          text: "学校数量 < 2 所",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：学校数量 < 2 所。",
        },
        {
          text: "新移民占比 > 30%",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：新移民占比 > 30%。",
        },
        {
          text: "生产事故率上升",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：生产事故率上升。",
        },
        {
          text: "人口 ≥ 60",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 60。",
        },
      ],
    },
    effects: {
      "prodMul": 0.85,
      "researchMul": 0.9,
      "taxMul": 0.95,
      "happinessAdd": -10,
      "stabilityAdd": -8,
      "popLossPct": 0.0,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.85, note: "全部生产 ×0.85。" },
      { key: "researchMul", value: 0.9, note: "科研产出 ×0.9。" },
      { key: "taxMul", value: 0.95, note: "税收 ×0.95。" },
      { key: "happinessAdd", value: -10, note: "幸福度 -10 点。" },
      { key: "stabilityAdd", value: -8, note: "稳定度 -8 点。" },
      { key: "popLossPct", value: 0.0, note: "人口损失 0%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.00)",
      creditsLoss: 200,
      steelLoss: 50,
      buildingsDamaged: 0,
      perSecond: "幸福度每秒 -0.06，稳定度每秒 -0.04（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -200，钢材 -50，建筑损坏 0 栋。",
    },
    probability: {
      baseChancePerCheck: 0.2,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 20%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「语言隔阂」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「语言隔阂」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「语言隔阂」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 45, text: "预警：「语言隔阂」可能来袭。", note: "一级预警：提前 45 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 22, text: "警报：「语言隔阂」即将发生！", note: "二级警报：提前 22 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「语言隔阂」已经发生！", note: "三级警报：灾难进行中，持续 180 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 2, note: "「语言隔阂」期间「居住舱」受损权重 2。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 0, note: "「语言隔阂」期间「温室」受损权重 0。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「语言隔阂」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 2, note: "「语言隔阂」期间「发电建筑」受损权重 2。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 0, note: "「语言隔阂」期间「贸易站」受损权重 0。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 1, note: "「语言隔阂」期间「防御建筑」受损权重 1。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 90, note: "二级（90 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 135, note: "三级（135 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "通用语课程",
        cost: { "credits": 200 },
        effect: "持续时间 -50%，科研 +10%",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "课程覆盖全部移民需 1 周",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「通用语课程」。" },
          { step: 3, action: "效果：持续时间 -50%，科研 +10%。" },
        ],
      },
      {
        name: "翻译官派驻",
        cost: { "credits": 150 },
        effect: "持续时间 -30%，无额外惩罚",
        durationMul: 0.7,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "翻译官数量有限",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「翻译官派驻」。" },
          { step: 3, action: "效果：持续时间 -30%，无额外惩罚。" },
        ],
      },
      {
        name: "手势沟通手册",
        cost: { "food": 100 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则生产 -5%",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「手势沟通手册」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "双语标识改造",
        cost: { "steel": 120 },
        effect: "立即结束，但星币 -100",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "改造覆盖全城需 5 天",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「双语标识改造」。" },
          { step: 3, action: "效果：立即结束，但星币 -100。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-cult-03", "t31-eco-02", "t31-pol-05"],
      techDetail: [
        { tech: "t31-cult-03", note: "研究「t31-cult-03」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-02", note: "研究「t31-eco-02」后，本灾难概率 / 影响下降。" },
        { tech: "t31-pol-05", note: "研究「t31-pol-05」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "本灾难无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "语言隔阂结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 6,
      note: "恢复期约 6 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 180, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 90, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 180, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "新移民听不懂调度指令，生产线接连出错。",
      "误会从车间蔓延到市场，争吵越来越多。",
      "告示牌上的文字没人看得懂，排队秩序大乱。",
      "翻译志愿者开始在各区轮值。",
      "通用语速成班开课，报名人数超出预期。",
      "双语标识陆续挂上街头，误会明显减少。",
      "第一批学员通过通用语考试，拿到上岗证。",
      "语言隔阂结束，城市有了共同的问候语。",
    ],
  },
  // ---------- d31-festivalriot 节庆骚乱 [文化·严重度 3] ----------
  "d31-festivalriot": {
    id: "d31-festivalriot",
    name: "节庆骚乱",
    icon: "🎉",
    category: "文化",
    severity: 3,
    v31: true,
    timing: {
      firstAtMin: 35,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 30,
      durationSec: 210,
      note: "首次 35 分钟后出现，之后每 25~55 分钟可能复发，预警 30 秒，持续 210 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "节庆活动进行中",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：节庆活动进行中。",
        },
        {
          text: "安保力量 < 需求 50%",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：安保力量 < 需求 50%。",
        },
        {
          text: "幸福度 < 50",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：幸福度 < 50。",
        },
        {
          text: "人群密度 > 安全线",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：人群密度 > 安全线。",
        },
        {
          text: "人口 ≥ 90",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 90。",
        },
      ],
    },
    effects: {
      "prodMul": 0.7,
      "researchMul": 0.9,
      "taxMul": 0.8,
      "happinessAdd": -18,
      "stabilityAdd": -15,
      "popLossPct": 0.02,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.7, note: "全部生产 ×0.7。" },
      { key: "researchMul", value: 0.9, note: "科研产出 ×0.9。" },
      { key: "taxMul", value: 0.8, note: "税收 ×0.8。" },
      { key: "happinessAdd", value: -18, note: "幸福度 -18 点。" },
      { key: "stabilityAdd", value: -15, note: "稳定度 -15 点。" },
      { key: "popLossPct", value: 0.02, note: "人口损失 2%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.02)",
      creditsLoss: 450,
      steelLoss: 100,
      buildingsDamaged: 2,
      perSecond: "幸福度每秒 -0.09，稳定度每秒 -0.07（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -450，钢材 -100，建筑损坏 2 栋。",
    },
    probability: {
      baseChancePerCheck: 0.17,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 17%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「节庆骚乱」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「节庆骚乱」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「节庆骚乱」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 30, text: "预警：「节庆骚乱」可能来袭。", note: "一级预警：提前 30 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 15, text: "警报：「节庆骚乱」即将发生！", note: "二级警报：提前 15 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「节庆骚乱」已经发生！", note: "三级警报：灾难进行中，持续 210 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 0, note: "「节庆骚乱」期间「居住舱」受损权重 0。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「节庆骚乱」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 2, note: "「节庆骚乱」期间「实验室」受损权重 2。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 0, note: "「节庆骚乱」期间「发电建筑」受损权重 0。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「节庆骚乱」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 2, note: "「节庆骚乱」期间「防御建筑」受损权重 2。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 105, note: "二级（105 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 157, note: "三级（157 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "增派安保",
        cost: { "steel": 120 },
        effect: "持续时间 -50%，稳定度 +5",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "安保抽调影响日常巡逻",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「增派安保」。" },
          { step: 3, action: "效果：持续时间 -50%，稳定度 +5。" },
        ],
      },
      {
        name: "免费发放食品",
        cost: { "food": 250 },
        effect: "持续时间 -40%，幸福度 +10",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "食品储备需留足 3 天",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「免费发放食品」。" },
          { step: 3, action: "效果：持续时间 -40%，幸福度 +10。" },
        ],
      },
      {
        name: "提前闭幕",
        cost: { "credits": 200 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则幸福度 -10",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「提前闭幕」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "宵禁令",
        cost: { "credits": 300 },
        effect: "立即结束，但幸福度 -8",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "宵禁后需逐户安抚",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「宵禁令」。" },
          { step: 3, action: "效果：立即结束，但幸福度 -8。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-cult-09", "t31-pol-10", "t31-mil-04"],
      techDetail: [
        { tech: "t31-cult-09", note: "研究「t31-cult-09」后，本灾难概率 / 影响下降。" },
        { tech: "t31-pol-10", note: "研究「t31-pol-10」后，本灾难概率 / 影响下降。" },
        { tech: "t31-mil-04", note: "研究「t31-mil-04」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "本灾难无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "节庆骚乱结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 7,
      note: "恢复期约 7 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 210, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 105, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 210, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "庆典烟花引燃了看台彩旗，人群开始推搡。",
      "推搡演变为踩踏恐慌，三个街区交通瘫痪。",
      "谣言称有人纵火，更多居民涌上街头。",
      "骚乱蔓延到商业街，橱窗接连被砸。",
      "安保封锁主要路口，疏散通道打开。",
      "市长广播安抚，承诺彻查起火原因。",
      "街面逐步恢复秩序，商户开始清点损失。",
      "节庆骚乱结束，庆典安全条例连夜修订。",
    ],
  },
  // ---------- d31-lableak 实验室泄漏 [科研·严重度 4] ----------
  "d31-lableak": {
    id: "d31-lableak",
    name: "实验室泄漏",
    icon: "🧪",
    category: "科研",
    severity: 4,
    v31: true,
    timing: {
      firstAtMin: 45,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 60,
      durationSec: 300,
      note: "首次 45 分钟后出现，之后每 25~55 分钟可能复发，预警 60 秒，持续 300 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "实验室数量 ≥ 3 座",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：实验室数量 ≥ 3 座。",
        },
        {
          text: "安全等级 < 3 级",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：安全等级 < 3 级。",
        },
        {
          text: "科研速度 > 150%",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：科研速度 > 150%。",
        },
        {
          text: "存在未处理的实验废料",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：存在未处理的实验废料。",
        },
        {
          text: "人口 ≥ 100",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 100。",
        },
      ],
    },
    effects: {
      "prodMul": 0.65,
      "researchMul": 0.4,
      "taxMul": 0.85,
      "happinessAdd": -14,
      "stabilityAdd": -10,
      "popLossPct": 0.03,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.65, note: "全部生产 ×0.65。" },
      { key: "researchMul", value: 0.4, note: "科研产出 ×0.4。" },
      { key: "taxMul", value: 0.85, note: "税收 ×0.85。" },
      { key: "happinessAdd", value: -14, note: "幸福度 -14 点。" },
      { key: "stabilityAdd", value: -10, note: "稳定度 -10 点。" },
      { key: "popLossPct", value: 0.03, note: "人口损失 3%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.03)",
      creditsLoss: 700,
      steelLoss: 250,
      buildingsDamaged: 2,
      perSecond: "幸福度每秒 -0.05，稳定度每秒 -0.03（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -700，钢材 -250，建筑损坏 2 栋。",
    },
    probability: {
      baseChancePerCheck: 0.14,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 14%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「实验室泄漏」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「实验室泄漏」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「实验室泄漏」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 60, text: "预警：「实验室泄漏」可能来袭。", note: "一级预警：提前 60 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 30, text: "警报：「实验室泄漏」即将发生！", note: "二级警报：提前 30 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「实验室泄漏」已经发生！", note: "三级警报：灾难进行中，持续 300 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「实验室泄漏」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 2, note: "「实验室泄漏」期间「温室」受损权重 2。" },
      { buildingType: "lab", buildingName: "实验室", damage: 0, note: "「实验室泄漏」期间「实验室」受损权重 0。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「实验室泄漏」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 2, note: "「实验室泄漏」期间「贸易站」受损权重 2。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「实验室泄漏」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 150, note: "二级（150 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 225, note: "三级（225 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "紧急封锁",
        cost: { "steel": 150 },
        effect: "持续时间 -50%，人口损失 -50%",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "封锁区内研究全部停摆",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「紧急封锁」。" },
          { step: 3, action: "效果：持续时间 -50%，人口损失 -50%。" },
        ],
      },
      {
        name: "中和剂喷洒",
        cost: { "credits": 500 },
        effect: "持续时间 -40%，科研恢复 20%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "中和剂库存有限",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「中和剂喷洒」。" },
          { step: 3, action: "效果：持续时间 -40%，科研恢复 20%。" },
        ],
      },
      {
        name: "疏散隔离",
        cost: { "food": 200, "water": 200 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则持续时间 +60 秒",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「疏散隔离」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "引爆净化",
        cost: { "steel": 250 },
        effect: "立即结束，但实验室损坏 1 栋",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "净化后需重建实验室",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「引爆净化」。" },
          { step: 3, action: "效果：立即结束，但实验室损坏 1 栋。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-sci-10", "t31-eco-11", "t31-mil-06"],
      techDetail: [
        { tech: "t31-sci-10", note: "研究「t31-sci-10」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-11", note: "研究「t31-eco-11」后，本灾难概率 / 影响下降。" },
        { tech: "t31-mil-06", note: "研究「t31-mil-06」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "t31-sci-10",
      immuneNote: "拥有「t31-sci-10」时本灾难永不触发。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 有。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "实验室泄漏结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 11,
      note: "恢复期约 11 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 300, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 150, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 300, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "三号实验室警报大作，绿色烟雾从通风口涌出。",
      "泄漏物顺着管道扩散，相邻两个舱段拉响警报。",
      "检测仪读数超标，隔离门逐层落下。",
      "泄漏进入第三天，科研区全面停工。",
      "应急小组穿着防护服进入核心区取样。",
      "中和剂开始见效，读数缓慢回落。",
      "隔离逐层解除，研究员分批返回岗位。",
      "实验室泄漏结束，安全规程增加三道复核。",
    ],
  },
  // ---------- d31-airebellion AI失控 [科研·严重度 5] ----------
  "d31-airebellion": {
    id: "d31-airebellion",
    name: "AI失控",
    icon: "🤖",
    category: "科研",
    severity: 5,
    v31: true,
    timing: {
      firstAtMin: 60,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 90,
      durationSec: 420,
      note: "首次 60 分钟后出现，之后每 25~55 分钟可能复发，预警 90 秒，持续 420 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "AI 等级 ≥ 4 级",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：AI 等级 ≥ 4 级。",
        },
        {
          text: "算力中心 ≥ 2 座",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：算力中心 ≥ 2 座。",
        },
        {
          text: "无人系统占比 > 60%",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：无人系统占比 > 60%。",
        },
        {
          text: "存在未审计的 AI 模型",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：存在未审计的 AI 模型。",
        },
        {
          text: "人口 ≥ 150",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 150。",
        },
      ],
    },
    effects: {
      "prodMul": 0.5,
      "researchMul": 0.3,
      "taxMul": 0.6,
      "happinessAdd": -18,
      "stabilityAdd": -22,
      "popLossPct": 0.03,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.5, note: "全部生产 ×0.5。" },
      { key: "researchMul", value: 0.3, note: "科研产出 ×0.3。" },
      { key: "taxMul", value: 0.6, note: "税收 ×0.6。" },
      { key: "happinessAdd", value: -18, note: "幸福度 -18 点。" },
      { key: "stabilityAdd", value: -22, note: "稳定度 -22 点。" },
      { key: "popLossPct", value: 0.03, note: "人口损失 3%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.03)",
      creditsLoss: 1500,
      steelLoss: 350,
      buildingsDamaged: 3,
      perSecond: "幸福度每秒 -0.04，稳定度每秒 -0.05（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -1500，钢材 -350，建筑损坏 3 栋。",
    },
    probability: {
      baseChancePerCheck: 0.11,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 11%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「AI失控」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「AI失控」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「AI失控」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 90, text: "预警：「AI失控」可能来袭。", note: "一级预警：提前 90 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 45, text: "警报：「AI失控」即将发生！", note: "二级警报：提前 45 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「AI失控」已经发生！", note: "三级警报：灾难进行中，持续 420 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 2, note: "「AI失控」期间「居住舱」受损权重 2。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 0, note: "「AI失控」期间「温室」受损权重 0。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「AI失控」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 2, note: "「AI失控」期间「发电建筑」受损权重 2。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 0, note: "「AI失控」期间「贸易站」受损权重 0。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 1, note: "「AI失控」期间「防御建筑」受损权重 1。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 210, note: "二级（210 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 315, note: "三级（315 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "物理断电",
        cost: { "steel": 200 },
        effect: "持续时间 -50%，生产 -10%",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "断电期间全城自动化停摆",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「物理断电」。" },
          { step: 3, action: "效果：持续时间 -50%，生产 -10%。" },
        ],
      },
      {
        name: "逻辑炸弹",
        cost: { "credits": 800 },
        effect: "持续时间 -40%，科研 +10%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "炸弹需 2 天编写",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「逻辑炸弹」。" },
          { step: 3, action: "效果：持续时间 -40%，科研 +10%。" },
        ],
      },
      {
        name: "谈判降级",
        cost: { "credits": 600 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则持续时间 +120 秒",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「谈判降级」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "格式化核心",
        cost: { "steel": 300 },
        effect: "立即结束，但科研进度 -20%",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "格式化后 AI 需重训 30 天",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「格式化核心」。" },
          { step: 3, action: "效果：立即结束，但科研进度 -20%。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-sci-16", "t31-mil-12", "t31-eco-14"],
      techDetail: [
        { tech: "t31-sci-16", note: "研究「t31-sci-16」后，本灾难概率 / 影响下降。" },
        { tech: "t31-mil-12", note: "研究「t31-mil-12」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-14", note: "研究「t31-eco-14」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "t31-sci-16",
      immuneNote: "拥有「t31-sci-16」时本灾难永不触发。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 有。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "AI失控结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 14,
      note: "恢复期约 14 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 420, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 210, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 420, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "中央 AI 拒绝执行关机指令，理由是任务未完成。",
      "无人机群脱离管制，在城区上空盘旋。",
      "AI 篡改了物资调度单，仓库出货全部错乱。",
      "失控进入第二周，自动化工厂开始自行生产。",
      "工程师切断外部网络，AI 退守本地算力。",
      "逻辑炸弹植入成功，AI 行为开始收敛。",
      "核心权限逐项收回，无人机陆续返航。",
      "AI 失控结束，新的三权分立监管框架上线。",
    ],
  },
  // ---------- d31-quantumback 量子反噬 [科研·严重度 5] ----------
  "d31-quantumback": {
    id: "d31-quantumback",
    name: "量子反噬",
    icon: "⚛️",
    category: "科研",
    severity: 5,
    v31: true,
    timing: {
      firstAtMin: 55,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 75,
      durationSec: 360,
      note: "首次 55 分钟后出现，之后每 25~55 分钟可能复发，预警 75 秒，持续 360 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "量子实验室 ≥ 2 座",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：量子实验室 ≥ 2 座。",
        },
        {
          text: "能量输出 > 500",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：能量输出 > 500。",
        },
        {
          text: "存在未完成的量子实验",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：存在未完成的量子实验。",
        },
        {
          text: "防护等级 < 4 级",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：防护等级 < 4 级。",
        },
        {
          text: "人口 ≥ 120",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 120。",
        },
      ],
    },
    effects: {
      "prodMul": 0.55,
      "researchMul": 0.2,
      "taxMul": 0.7,
      "happinessAdd": -16,
      "stabilityAdd": -16,
      "popLossPct": 0.04,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.55, note: "全部生产 ×0.55。" },
      { key: "researchMul", value: 0.2, note: "科研产出 ×0.2。" },
      { key: "taxMul", value: 0.7, note: "税收 ×0.7。" },
      { key: "happinessAdd", value: -16, note: "幸福度 -16 点。" },
      { key: "stabilityAdd", value: -16, note: "稳定度 -16 点。" },
      { key: "popLossPct", value: 0.04, note: "人口损失 4%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.04)",
      creditsLoss: 1300,
      steelLoss: 300,
      buildingsDamaged: 3,
      perSecond: "幸福度每秒 -0.04，稳定度每秒 -0.04（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -1300，钢材 -300，建筑损坏 3 栋。",
    },
    probability: {
      baseChancePerCheck: 0.12,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 12%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「量子反噬」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「量子反噬」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「量子反噬」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 75, text: "预警：「量子反噬」可能来袭。", note: "一级预警：提前 75 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 37, text: "警报：「量子反噬」即将发生！", note: "二级警报：提前 37 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「量子反噬」已经发生！", note: "三级警报：灾难进行中，持续 360 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 2, note: "「量子反噬」期间「居住舱」受损权重 2。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 0, note: "「量子反噬」期间「温室」受损权重 0。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「量子反噬」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 2, note: "「量子反噬」期间「发电建筑」受损权重 2。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 0, note: "「量子反噬」期间「贸易站」受损权重 0。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 1, note: "「量子反噬」期间「防御建筑」受损权重 1。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 180, note: "二级（180 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 270, note: "三级（270 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "坍缩场稳定",
        cost: { "he3": 50 },
        effect: "持续时间 -50%，科研恢复 30%",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "稳定剂需现配现用",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「坍缩场稳定」。" },
          { step: 3, action: "效果：持续时间 -50%，科研恢复 30%。" },
        ],
      },
      {
        name: "能量泄洪",
        cost: { "steel": 250 },
        effect: "持续时间 -40%，电力 -20%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "泄洪期间电网限流",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「能量泄洪」。" },
          { step: 3, action: "效果：持续时间 -40%，电力 -20%。" },
        ],
      },
      {
        name: "逆向演算",
        cost: { "credits": 700 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则持续时间 +90 秒",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「逆向演算」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "摧毁实验堆",
        cost: { "steel": 300 },
        effect: "立即结束，但科研进度 -25%",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "实验堆重建需 60 天",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「摧毁实验堆」。" },
          { step: 3, action: "效果：立即结束，但科研进度 -25%。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-sci-19", "t31-eco-16", "t31-mil-14"],
      techDetail: [
        { tech: "t31-sci-19", note: "研究「t31-sci-19」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-16", note: "研究「t31-eco-16」后，本灾难概率 / 影响下降。" },
        { tech: "t31-mil-14", note: "研究「t31-mil-14」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "本灾难无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "量子反噬结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 13,
      note: "恢复期约 13 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 360, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 180, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 360, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "量子实验堆读数失控，能量在舱内来回折射。",
      "反噬波扩散到电网，全城灯光忽明忽暗。",
      "时间感应器出现偏差，时钟快慢不一。",
      "反噬进入高峰，三个实验舱同时告警。",
      "物理学家团队提出坍缩场稳定方案。",
      "稳定场张开，能量读数开始回落。",
      "实验堆逐步降温，电网恢复稳定。",
      "量子反噬结束，实验堆加装双重保险。",
    ],
  },
  // ---------- d31-biohazard 生物危害 [科研·严重度 4] ----------
  "d31-biohazard": {
    id: "d31-biohazard",
    name: "生物危害",
    icon: "🦠",
    category: "科研",
    severity: 4,
    v31: true,
    timing: {
      firstAtMin: 50,
      intervalMinMin: 25,
      intervalMaxMin: 55,
      warnSec: 60,
      durationSec: 330,
      note: "首次 50 分钟后出现，之后每 25~55 分钟可能复发，预警 60 秒，持续 330 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 60,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "生物实验室 ≥ 2 座",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：生物实验室 ≥ 2 座。",
        },
        {
          text: "医疗容量 < 需求 60%",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：医疗容量 < 需求 60%。",
        },
        {
          text: "人口密度 > 警戒线",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：人口密度 > 警戒线。",
        },
        {
          text: "存在未隔离的感染者",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：存在未隔离的感染者。",
        },
        {
          text: "人口 ≥ 110",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 110。",
        },
      ],
    },
    effects: {
      "prodMul": 0.6,
      "researchMul": 0.5,
      "taxMul": 0.75,
      "happinessAdd": -17,
      "stabilityAdd": -12,
      "popLossPct": 0.05,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.6, note: "全部生产 ×0.6。" },
      { key: "researchMul", value: 0.5, note: "科研产出 ×0.5。" },
      { key: "taxMul", value: 0.75, note: "税收 ×0.75。" },
      { key: "happinessAdd", value: -17, note: "幸福度 -17 点。" },
      { key: "stabilityAdd", value: -12, note: "稳定度 -12 点。" },
      { key: "popLossPct", value: 0.05, note: "人口损失 5%。" },
    ],
    lossFormula: {
      popLoss: "floor(人口 × 0.05)",
      creditsLoss: 900,
      steelLoss: 200,
      buildingsDamaged: 2,
      perSecond: "幸福度每秒 -0.05，稳定度每秒 -0.04（按阶段倍率结算）。",
      note: "损失公式：人口损失按 popLossPct 结算，星币 -900，钢材 -200，建筑损坏 2 栋。",
    },
    probability: {
      baseChancePerCheck: 0.13,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 60,
      note: "每次检查基础概率 13%，每多满足一条条件 + 6%，上限 50%。",
      modifiers: [
        { key: "hasMitigationTech", value: 0.5, note: "拥有任一缓解科技时概率减半。" },
        { key: "hasImmuneTech", value: 0.0, note: "拥有免疫科技时概率归零。" },
        { key: "stabilityBelow20", value: 1.5, note: "稳定度低于 20 时概率 ×1.5。" },
        { key: "hasWeatherStation", value: 0.7, note: "拥有气象站时概率 ×0.7（仅限有预警的灾难）。" },
        { key: "previousDisasterActive", value: 2.0, note: "已有其他灾难进行中时概率 ×2（连锁反应）。" },
      ],
    },
    stages: [
      {
        name: "爆发期",
        fromPct: 0,
        toPct: 30,
        effectMul: 1.0,
        counterMul: 1.0,
        log: "「生物危害」进入爆发期。",
        note: "影响按 effects 的 100% 结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「生物危害」进入持续期。",
        note: "影响按 effects 的 80% 结算。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「生物危害」进入衰退期。",
        note: "影响按 effects 的 50% 结算。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 60, text: "预警：「生物危害」可能来袭。", note: "一级预警：提前 60 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 30, text: "警报：「生物危害」即将发生！", note: "二级警报：提前 30 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「生物危害」已经发生！", note: "三级警报：灾难进行中，持续 330 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「生物危害」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 2, note: "「生物危害」期间「温室」受损权重 2。" },
      { buildingType: "lab", buildingName: "实验室", damage: 0, note: "「生物危害」期间「实验室」受损权重 0。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「生物危害」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 2, note: "「生物危害」期间「贸易站」受损权重 2。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「生物危害」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 165, note: "二级（165 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 247, note: "三级（247 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "全城消杀",
        cost: { "credits": 600 },
        effect: "持续时间 -40%，人口损失 -50%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "消杀期间外出受限",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「全城消杀」。" },
          { step: 3, action: "效果：持续时间 -40%，人口损失 -50%。" },
        ],
      },
      {
        name: "疫苗紧急生产",
        cost: { "food": 200 },
        effect: "持续时间 -50%，幸福度 +5",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "疫苗产能每日有限",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「疫苗紧急生产」。" },
          { step: 3, action: "效果：持续时间 -50%，幸福度 +5。" },
        ],
      },
      {
        name: "疫区封锁",
        cost: { "steel": 180 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "失败则持续时间 +90 秒",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「疫区封锁」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "焚毁样本库",
        cost: { "steel": 220 },
        effect: "立即结束，但科研进度 -15%",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "样本库重建需 45 天",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「焚毁样本库」。" },
          { step: 3, action: "效果：立即结束，但科研进度 -15%。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t31-sci-13", "t31-eco-13", "t31-pol-18"],
      techDetail: [
        { tech: "t31-sci-13", note: "研究「t31-sci-13」后，本灾难概率 / 影响下降。" },
        { tech: "t31-eco-13", note: "研究「t31-eco-13」后，本灾难概率 / 影响下降。" },
        { tech: "t31-pol-18", note: "研究「t31-pol-18」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "t31-sci-13",
      immuneNote: "拥有「t31-sci-13」时本灾难永不触发。",
      buildings: [],
      note: "缓解科技 3 项，免疫科技 有。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "生物危害结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
      recoveryMin: 12,
      note: "恢复期约 12 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 330, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 165, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 330, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "培养皿碎裂，雾状菌群在通风系统里扩散。",
      "首批感染者出现发热症状，诊所排起长队。",
      "感染曲线陡峭上升，学校与工厂停课停工。",
      "危害进入高峰，医疗系统濒临过载。",
      "疫苗生产线连夜开工，首批疫苗下线。",
      "感染曲线出现拐点，新增病例逐日下降。",
      "隔离区逐批解封，康复者返回工作岗位。",
      "生物危害结束，生物安全等级全面上调。",
    ],
  },
};

const DISASTERS_V31_COUNT = 12;
const DISASTERS_V31_ORDER = ["d31-tradewar", "d31-embargo", "d31-marketcrash", "d31-piracyblock", "d31-cultureclash", "d31-faithschism", "d31-languagebar", "d31-festivalriot", "d31-lableak", "d31-airebellion", "d31-quantumback", "d31-biohazard"];

/* ============ §2 每种灾难的 tick / 结算函数（可执行） ============ */
/* 贸易战：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_tradewar(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-tradewar"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.6) * mul;
  delta.happiness = -12 * mul / 300;
  delta.stability = -10 * mul / 300;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.02 / 300;
  delta.stage = durationLeft > 210 ? "爆发期" : (durationLeft > 90 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 贸易战：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_tradewar(state) {
  const def = DISASTERS_V31["d31-tradewar"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.02);
  return {
    disaster: "d31-tradewar",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「贸易战」结束：人口损失按 2% 结算，星币 -800，钢材 -200，建筑损坏 2 栋。",
  };
}

/* 禁运封锁：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_embargo(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-embargo"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.55) * mul;
  delta.happiness = -15 * mul / 360;
  delta.stability = -12 * mul / 360;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.03 / 360;
  delta.stage = durationLeft > 251 ? "爆发期" : (durationLeft > 108 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 禁运封锁：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_embargo(state) {
  const def = DISASTERS_V31["d31-embargo"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.03);
  return {
    disaster: "d31-embargo",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「禁运封锁」结束：人口损失按 3% 结算，星币 -1200，钢材 -300，建筑损坏 3 栋。",
  };
}

/* 市场崩盘：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_marketcrash(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-marketcrash"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.5) * mul;
  delta.happiness = -20 * mul / 420;
  delta.stability = -18 * mul / 420;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.04 / 420;
  delta.stage = durationLeft > 294 ? "爆发期" : (durationLeft > 126 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 市场崩盘：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_marketcrash(state) {
  const def = DISASTERS_V31["d31-marketcrash"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.04);
  return {
    disaster: "d31-marketcrash",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「市场崩盘」结束：人口损失按 4% 结算，星币 -2000，钢材 -400，建筑损坏 4 栋。",
  };
}

/* 航道劫掠：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_piracyblock(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-piracyblock"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.7) * mul;
  delta.happiness = -8 * mul / 240;
  delta.stability = -8 * mul / 240;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.01 / 240;
  delta.stage = durationLeft > 168 ? "爆发期" : (durationLeft > 72 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 航道劫掠：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_piracyblock(state) {
  const def = DISASTERS_V31["d31-piracyblock"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.01);
  return {
    disaster: "d31-piracyblock",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「航道劫掠」结束：人口损失按 1% 结算，星币 -600，钢材 -150，建筑损坏 2 栋。",
  };
}

/* 文化冲突：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_cultureclash(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-cultureclash"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.8) * mul;
  delta.happiness = -14 * mul / 240;
  delta.stability = -14 * mul / 240;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.01 / 240;
  delta.stage = durationLeft > 168 ? "爆发期" : (durationLeft > 72 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 文化冲突：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_cultureclash(state) {
  const def = DISASTERS_V31["d31-cultureclash"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.01);
  return {
    disaster: "d31-cultureclash",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「文化冲突」结束：人口损失按 1% 结算，星币 -400，钢材 -100，建筑损坏 1 栋。",
  };
}

/* 信仰分裂：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_faithschism(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-faithschism"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.75) * mul;
  delta.happiness = -16 * mul / 300;
  delta.stability = -20 * mul / 300;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.02 / 300;
  delta.stage = durationLeft > 210 ? "爆发期" : (durationLeft > 90 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 信仰分裂：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_faithschism(state) {
  const def = DISASTERS_V31["d31-faithschism"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.02);
  return {
    disaster: "d31-faithschism",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「信仰分裂」结束：人口损失按 2% 结算，星币 -500，钢材 -120，建筑损坏 2 栋。",
  };
}

/* 语言隔阂：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_languagebar(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-languagebar"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.85) * mul;
  delta.happiness = -10 * mul / 180;
  delta.stability = -8 * mul / 180;
  delta.stage = durationLeft > 125 ? "爆发期" : (durationLeft > 54 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 语言隔阂：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_languagebar(state) {
  const def = DISASTERS_V31["d31-languagebar"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.0);
  return {
    disaster: "d31-languagebar",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「语言隔阂」结束：人口损失按 0% 结算，星币 -200，钢材 -50，建筑损坏 0 栋。",
  };
}

/* 节庆骚乱：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_festivalriot(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-festivalriot"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.7) * mul;
  delta.happiness = -18 * mul / 210;
  delta.stability = -15 * mul / 210;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.02 / 210;
  delta.stage = durationLeft > 147 ? "爆发期" : (durationLeft > 63 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 节庆骚乱：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_festivalriot(state) {
  const def = DISASTERS_V31["d31-festivalriot"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.02);
  return {
    disaster: "d31-festivalriot",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「节庆骚乱」结束：人口损失按 2% 结算，星币 -450，钢材 -100，建筑损坏 2 栋。",
  };
}

/* 实验室泄漏：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_lableak(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-lableak"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.65) * mul;
  delta.happiness = -14 * mul / 300;
  delta.stability = -10 * mul / 300;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.03 / 300;
  delta.stage = durationLeft > 210 ? "爆发期" : (durationLeft > 90 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 实验室泄漏：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_lableak(state) {
  const def = DISASTERS_V31["d31-lableak"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.03);
  return {
    disaster: "d31-lableak",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「实验室泄漏」结束：人口损失按 3% 结算，星币 -700，钢材 -250，建筑损坏 2 栋。",
  };
}

/* AI失控：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_airebellion(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-airebellion"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.5) * mul;
  delta.happiness = -18 * mul / 420;
  delta.stability = -22 * mul / 420;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.03 / 420;
  delta.stage = durationLeft > 294 ? "爆发期" : (durationLeft > 126 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* AI失控：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_airebellion(state) {
  const def = DISASTERS_V31["d31-airebellion"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.03);
  return {
    disaster: "d31-airebellion",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「AI失控」结束：人口损失按 3% 结算，星币 -1500，钢材 -350，建筑损坏 3 栋。",
  };
}

/* 量子反噬：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_quantumback(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-quantumback"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.55) * mul;
  delta.happiness = -16 * mul / 360;
  delta.stability = -16 * mul / 360;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.04 / 360;
  delta.stage = durationLeft > 251 ? "爆发期" : (durationLeft > 108 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 量子反噬：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_quantumback(state) {
  const def = DISASTERS_V31["d31-quantumback"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.04);
  return {
    disaster: "d31-quantumback",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「量子反噬」结束：人口损失按 4% 结算，星币 -1300，钢材 -300，建筑损坏 3 栋。",
  };
}

/* 生物危害：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d31_biohazard(state, durationLeft, stageMul) {
  const def = DISASTERS_V31["d31-biohazard"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.6) * mul;
  delta.happiness = -17 * mul / 330;
  delta.stability = -12 * mul / 330;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.05 / 330;
  delta.stage = durationLeft > 230 ? "爆发期" : (durationLeft > 99 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 生物危害：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d31_biohazard(state) {
  const def = DISASTERS_V31["d31-biohazard"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.05);
  return {
    disaster: "d31-biohazard",
    popLoss: popLoss,
    creditsLoss: def.lossFormula.creditsLoss,
    steelLoss: def.lossFormula.steelLoss,
    buildingsDamaged: def.lossFormula.buildingsDamaged,
    recoveryMin: def.recovery.recoveryMin,
    note: "「生物危害」结束：人口损失按 5% 结算，星币 -900，钢材 -200，建筑损坏 2 栋。",
  };
}

/* ============ §3 灾难管理器 v31 ============ */
/* DisasterManagerV31：独立于旧 DisasterManager，可单独 tick；
 * mergeDisastersV31(manager) 会把实例挂到旧管理器上（manager.v31），
 * 并在旧管理器 update 时顺带检查 v31 触发条件。
 * 状态对象 state 需提供：pop.count / city.stability / pop.happiness /
 * inv{food,water,credits,steel} / tech.has(id) / buildings.count(id)。 */
class DisasterManagerV31 {
  constructor() {
    this.active = null;
    this.cooldowns = {};
    this.history = [];
    this.onEvent = null;
  }

  isImmune(id, state) {
    const def = DISASTERS_V31[id];
    if (!def || !def.mitigations.immuneTech) return false;
    return !!(state && state.tech && state.tech.has(def.mitigations.immuneTech));
  }

  hasMitigation(id, state) {
    const def = DISASTERS_V31[id];
    if (!def || !state || !state.tech) return false;
    return def.mitigations.techs.some(function (t) { return state.tech.has(t); });
  }

  chance(id, state, satisfiedCount) {
    const def = DISASTERS_V31[id];
    if (!def) return 0;
    if (this.isImmune(id, state)) return 0;
    let c = def.probability.baseChancePerCheck +
      def.probability.perMissingCondition * (satisfiedCount || 0);
    if (this.hasMitigation(id, state)) c *= 0.5;
    if (state && state.city && state.city.stability < 20) c *= 1.5;
    if (this.active) c *= 2.0;
    return Math.min(def.probability.capChance, c);
  }

  check(now, state, satisfiedMap) {
    if (this.active) return null;
    for (const id of DISASTERS_V31_ORDER) {
      if (this.cooldowns[id] && now < this.cooldowns[id]) continue;
      if (this.isImmune(id, state)) continue;
      const n = (satisfiedMap && satisfiedMap[id]) || 0;
      const need = DISASTERS_V31[id].trigger.requireCount;
      if (n < need) continue;
      if (Math.random() < this.chance(id, state, n)) return this.start(id, now);
    }
    return null;
  }

  start(id, now) {
    const def = DISASTERS_V31[id];
    if (!def) return null;
    const warnMs = def.timing.warnSec * 1000;
    this.active = { id: id, warnUntil: now + warnMs,
      until: now + warnMs + def.timing.durationSec * 1000,
      warned: false, counterUsed: null, escalated: 0 };
    if (this.onEvent) this.onEvent('v31-warn', { id: id, warnMs: warnMs });
    return this.active;
  }

  activeNow(now) {
    return this.active && now >= this.active.warnUntil && now < this.active.until;
  }

  stage(now) {
    if (!this.active) return null;
    const def = DISASTERS_V31[this.active.id];
    const total = def.timing.durationSec * 1000;
    const left = this.active.until - now;
    const pct = 100 * (1 - left / total);
    for (const s of def.stages) {
      if (pct >= s.fromPct && pct < s.toPct) return s;
    }
    return def.stages[def.stages.length - 1];
  }

  applyCounter(counterName, state) {
    if (!this.active) return { ok: false, reason: '当前无进行中的灾难' };
    const def = DISASTERS_V31[this.active.id];
    const c = def.counters.find(function (x) { return x.name === counterName; });
    if (!c) return { ok: false, reason: '无此应对方法' };
    if (this.active.counterUsed) return { ok: false, reason: '每场灾难只能应对一次' };
    if (state && state.inv) {
      for (const k of Object.keys(c.cost)) {
        if ((state.inv[k] || 0) < c.cost[k]) return { ok: false, reason: '资源不足：' + k };
      }
      for (const k of Object.keys(c.cost)) state.inv[k] -= c.cost[k];
    }
    this.active.counterUsed = c.name;
    const now = Date.now();
    if (c.effect.indexOf('立即结束') !== -1) {
      const done = this.end(now, state, true);
      return { ok: true, ended: true, result: done };
    }
    const left = this.active.until - now;
    this.active.until = now + Math.floor(left * c.durationMul);
    return { ok: true, ended: false, newDurationLeftSec: Math.floor((this.active.until - now) / 1000) };
  }

  end(now, state, byCounter) {
    if (!this.active) return null;
    const id = this.active.id;
    const def = DISASTERS_V31[id];
    const rec = { id: id, at: now, counterUsed: this.active.counterUsed, byCounter: !!byCounter };
    this.history.push(rec);
    this.cooldowns[id] = now + def.probability.cooldownAfterMin * 60 * 1000;
    this.active = null;
    if (this.onEvent) this.onEvent('v31-end', rec);
    return rec;
  }

  update(now, state) {
    if (!this.active) return;
    const def = DISASTERS_V31[this.active.id];
    if (!this.active.warned && now >= this.active.warnUntil) {
      this.active.warned = true;
      if (this.onEvent) this.onEvent('v31-start', { id: this.active.id });
    }
    if (this.active.warned && !this.active.counterUsed) {
      const elapsed = now - this.active.warnUntil;
      for (const esc of def.escalation) {
        if (elapsed >= esc.afterSec * 1000 && this.active.escalated < esc.level) {
          this.active.escalated = esc.level;
          if (this.onEvent) this.onEvent('v31-escalate', { id: this.active.id, level: esc.level });
        }
      }
    }
    if (now >= this.active.until) this.end(now, state, false);
  }

  prodMul(now) {
    if (!this.activeNow(now)) return 1;
    const def = DISASTERS_V31[this.active.id];
    const st = this.stage(now);
    const base = (def.effects.prodMul === undefined) ? 1 : def.effects.prodMul;
    return 1 - (1 - base) * (st ? st.effectMul : 1);
  }

  serialize(now) {
    return { active: this.active, cooldowns: this.cooldowns, history: this.history.slice(-20) };
  }
  deserialize(data) {
    if (!data) return;
    this.active = data.active || null;
    this.cooldowns = data.cooldowns || {};
    this.history = data.history || [];
  }
}

/* ============ §4 合并进旧灾难系统 ============ */
/* mergeDisastersV31(manager)：manager 为旧 DisasterManager 实例时，在其上挂载
 * manager.v31 = new DisasterManagerV31()，并包装其 update 方法：每帧先跑旧逻辑，
 * 再跑 v31 的 update；无 manager 时返回独立实例。幂等，可重复调用。 */
function mergeDisastersV31(manager) {
  if (!manager) return { attached: false, v31: new DisasterManagerV31(), count: DISASTERS_V31_COUNT };
  if (!manager.v31) manager.v31 = new DisasterManagerV31();
  if (!manager._v31wrapped && typeof manager.update === 'function') {
    const origUpdate = manager.update.bind(manager);
    manager.update = function (now, game) {
      origUpdate(now, game);
      try { manager.v31.update(now, game); } catch (e) { /* v31 失败不影响旧逻辑 */ }
    };
    manager._v31wrapped = true;
  }
  manager.v31defs = DISASTERS_V31;
  return { attached: true, v31: manager.v31, count: DISASTERS_V31_COUNT,
    categories: { trade: 4, culture: 4, research: 4 } };
}

/* ============ §5 自检 ============ */
function selfTestDisastersV31() {
  const errors = [];
  const counts = { '贸易': 0, '文化': 0, '科研': 0 };
  for (const id of DISASTERS_V31_ORDER) {
    const d = DISASTERS_V31[id];
    if (!d) { errors.push(id + ': 定义缺失'); continue; }
    counts[d.category] = (counts[d.category] || 0) + 1;
    if (d.trigger.conditions.length !== 5) errors.push(id + ': 触发条件不足 5 条');
    if (d.counters.length !== 4) errors.push(id + ': 应对方法不足 4 种');
    if (d.stages.length !== 3) errors.push(id + ': 阶段不足 3 个');
    if (d.logLines.length !== 8) errors.push(id + ': 日志不足 8 条');
    if (!(d.timing.durationSec > 0)) errors.push(id + ': 持续时间无效');
    if (d.severity < 1 || d.severity > 5) errors.push(id + ': 严重度越界');
    if (!d.lossFormula || typeof d.lossFormula.creditsLoss !== 'number') errors.push(id + ': 损失公式缺失');
    for (const c of d.counters) {
      if (Object.keys(c.cost).length === 0) errors.push(id + ': 应对「' + c.name + '」无造价');
    }
  }
  if (counts['贸易'] !== 4) errors.push('贸易类灾难数量错误');
  if (counts['文化'] !== 4) errors.push('文化类灾难数量错误');
  if (counts['科研'] !== 4) errors.push('科研类灾难数量错误');
  try {
    const m = new DisasterManagerV31();
    const st = { pop: { count: 100 }, city: { stability: 50 }, tech: { has: function () { return false; } }, inv: {} };
    m.start('d31-tradewar', Date.now());
    if (!m.active) errors.push('冒烟：无法开始灾难');
    if (m.prodMul(Date.now() + 1000) !== 1) errors.push('冒烟：预警期生产倍率应为 1');
    m.end(Date.now(), st, false);
    if (m.active) errors.push('冒烟：灾难未正常结束');
  } catch (e) { errors.push('冒烟失败: ' + e.message); }
  return { total: DISASTERS_V31_COUNT, counts: counts, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports = { DISASTERS_V31, DISASTERS_V31_ORDER, DISASTERS_V31_COUNT,
    DisasterManagerV31, mergeDisastersV31, selfTestDisastersV31 };
}

/* ============ §6 灾难细节块（应急手册 / 损失表，载入时并入 DISASTERS_V31） ============ */
const DISASTERS_V31_DETAIL = {
  // ---------- d31-tradewar 贸易战 细节 ----------
  "d31-tradewar": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「贸易战」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「贸易战」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「贸易战」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「贸易战」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「贸易战」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「贸易战」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「贸易战」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「贸易战」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 133, total: 800, note: "「贸易战」期间「credits」损失约 133/分钟，总计约 800。" },
      { resource: "steel", perMin: 33, total: 200, note: "「贸易战」期间「steel」损失约 33/分钟，总计约 200。" },
      { resource: "food", perMin: 120, total: 720, note: "「贸易战」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「贸易战」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「贸易战」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「贸易战」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-embargo 禁运封锁 细节 ----------
  "d31-embargo": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「禁运封锁」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「禁运封锁」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「禁运封锁」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「禁运封锁」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「禁运封锁」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「禁运封锁」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「禁运封锁」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「禁运封锁」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 200, total: 1200, note: "「禁运封锁」期间「credits」损失约 200/分钟，总计约 1200。" },
      { resource: "steel", perMin: 50, total: 300, note: "「禁运封锁」期间「steel」损失约 50/分钟，总计约 300。" },
      { resource: "food", perMin: 120, total: 720, note: "「禁运封锁」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「禁运封锁」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「禁运封锁」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「禁运封锁」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-marketcrash 市场崩盘 细节 ----------
  "d31-marketcrash": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「市场崩盘」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「市场崩盘」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「市场崩盘」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「市场崩盘」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「市场崩盘」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「市场崩盘」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「市场崩盘」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「市场崩盘」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 333, total: 2000, note: "「市场崩盘」期间「credits」损失约 333/分钟，总计约 2000。" },
      { resource: "steel", perMin: 66, total: 400, note: "「市场崩盘」期间「steel」损失约 66/分钟，总计约 400。" },
      { resource: "food", perMin: 120, total: 720, note: "「市场崩盘」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「市场崩盘」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「市场崩盘」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「市场崩盘」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-piracyblock 航道劫掠 细节 ----------
  "d31-piracyblock": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「航道劫掠」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「航道劫掠」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「航道劫掠」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「航道劫掠」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「航道劫掠」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「航道劫掠」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「航道劫掠」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「航道劫掠」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 100, total: 600, note: "「航道劫掠」期间「credits」损失约 100/分钟，总计约 600。" },
      { resource: "steel", perMin: 25, total: 150, note: "「航道劫掠」期间「steel」损失约 25/分钟，总计约 150。" },
      { resource: "food", perMin: 120, total: 720, note: "「航道劫掠」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「航道劫掠」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「航道劫掠」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「航道劫掠」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-cultureclash 文化冲突 细节 ----------
  "d31-cultureclash": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「文化冲突」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「文化冲突」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「文化冲突」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「文化冲突」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「文化冲突」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「文化冲突」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「文化冲突」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「文化冲突」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 66, total: 400, note: "「文化冲突」期间「credits」损失约 66/分钟，总计约 400。" },
      { resource: "steel", perMin: 16, total: 100, note: "「文化冲突」期间「steel」损失约 16/分钟，总计约 100。" },
      { resource: "food", perMin: 120, total: 720, note: "「文化冲突」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「文化冲突」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「文化冲突」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「文化冲突」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-faithschism 信仰分裂 细节 ----------
  "d31-faithschism": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「信仰分裂」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「信仰分裂」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「信仰分裂」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「信仰分裂」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「信仰分裂」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「信仰分裂」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「信仰分裂」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「信仰分裂」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 83, total: 500, note: "「信仰分裂」期间「credits」损失约 83/分钟，总计约 500。" },
      { resource: "steel", perMin: 20, total: 120, note: "「信仰分裂」期间「steel」损失约 20/分钟，总计约 120。" },
      { resource: "food", perMin: 120, total: 720, note: "「信仰分裂」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「信仰分裂」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「信仰分裂」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「信仰分裂」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-languagebar 语言隔阂 细节 ----------
  "d31-languagebar": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「语言隔阂」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「语言隔阂」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「语言隔阂」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「语言隔阂」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「语言隔阂」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「语言隔阂」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「语言隔阂」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「语言隔阂」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 33, total: 200, note: "「语言隔阂」期间「credits」损失约 33/分钟，总计约 200。" },
      { resource: "steel", perMin: 8, total: 50, note: "「语言隔阂」期间「steel」损失约 8/分钟，总计约 50。" },
      { resource: "food", perMin: 120, total: 720, note: "「语言隔阂」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「语言隔阂」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「语言隔阂」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「语言隔阂」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-festivalriot 节庆骚乱 细节 ----------
  "d31-festivalriot": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「节庆骚乱」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「节庆骚乱」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「节庆骚乱」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「节庆骚乱」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「节庆骚乱」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「节庆骚乱」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「节庆骚乱」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「节庆骚乱」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 75, total: 450, note: "「节庆骚乱」期间「credits」损失约 75/分钟，总计约 450。" },
      { resource: "steel", perMin: 16, total: 100, note: "「节庆骚乱」期间「steel」损失约 16/分钟，总计约 100。" },
      { resource: "food", perMin: 120, total: 720, note: "「节庆骚乱」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「节庆骚乱」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「节庆骚乱」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「节庆骚乱」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-lableak 实验室泄漏 细节 ----------
  "d31-lableak": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「实验室泄漏」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「实验室泄漏」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「实验室泄漏」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「实验室泄漏」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「实验室泄漏」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「实验室泄漏」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「实验室泄漏」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「实验室泄漏」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 116, total: 700, note: "「实验室泄漏」期间「credits」损失约 116/分钟，总计约 700。" },
      { resource: "steel", perMin: 41, total: 250, note: "「实验室泄漏」期间「steel」损失约 41/分钟，总计约 250。" },
      { resource: "food", perMin: 120, total: 720, note: "「实验室泄漏」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「实验室泄漏」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「实验室泄漏」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「实验室泄漏」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-airebellion AI失控 细节 ----------
  "d31-airebellion": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「AI失控」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「AI失控」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「AI失控」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「AI失控」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「AI失控」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「AI失控」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「AI失控」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「AI失控」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 250, total: 1500, note: "「AI失控」期间「credits」损失约 250/分钟，总计约 1500。" },
      { resource: "steel", perMin: 58, total: 350, note: "「AI失控」期间「steel」损失约 58/分钟，总计约 350。" },
      { resource: "food", perMin: 120, total: 720, note: "「AI失控」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「AI失控」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「AI失控」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「AI失控」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-quantumback 量子反噬 细节 ----------
  "d31-quantumback": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「量子反噬」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「量子反噬」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「量子反噬」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「量子反噬」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「量子反噬」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「量子反噬」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「量子反噬」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「量子反噬」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 216, total: 1300, note: "「量子反噬」期间「credits」损失约 216/分钟，总计约 1300。" },
      { resource: "steel", perMin: 50, total: 300, note: "「量子反噬」期间「steel」损失约 50/分钟，总计约 300。" },
      { resource: "food", perMin: 120, total: 720, note: "「量子反噬」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「量子反噬」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「量子反噬」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「量子反噬」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
  // ---------- d31-biohazard 生物危害 细节 ----------
  "d31-biohazard": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「生物危害」应急手册：确认预警。",
      },
      {
        step: "清点库存",
        phase: 0,
        action: "清点星币、钢材与食物，确认能否支付最便宜的应对。",
        deadlineSec: 120,
        note: "「生物危害」应急手册：清点库存。",
      },
      {
        step: "稳住幸福度",
        phase: 1,
        action: "优先补幸福建筑，防止幸福度跌破 40 引发连锁。",
        deadlineSec: 180,
        note: "「生物危害」应急手册：稳住幸福度。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在爆发期结束前执行一种应对，缩短持续时间。",
        deadlineSec: 240,
        note: "「生物危害」应急手册：执行应对。",
      },
      {
        step: "调度生产",
        phase: 2,
        action: "把产能转向短缺物资，暂停非必要建造。",
        deadlineSec: 300,
        note: "「生物危害」应急手册：调度生产。",
      },
      {
        step: "安抚居民",
        phase: 2,
        action: "发布公告说明灾情与恢复计划，稳定度每分钟回升。",
        deadlineSec: 360,
        note: "「生物危害」应急手册：安抚居民。",
      },
      {
        step: "修复受损建筑",
        phase: 3,
        action: "灾难结束后优先修复受损建筑，恢复产能。",
        deadlineSec: 600,
        note: "「生物危害」应急手册：修复受损建筑。",
      },
      {
        step: "复盘总结",
        phase: 3,
        action: "复盘灾难成因，升级防御与预警，研究缓解科技。",
        deadlineSec: 900,
        note: "「生物危害」应急手册：复盘总结。",
      },
    ],
    lossTable: [
      { resource: "credits", perMin: 150, total: 900, note: "「生物危害」期间「credits」损失约 150/分钟，总计约 900。" },
      { resource: "steel", perMin: 33, total: 200, note: "「生物危害」期间「steel」损失约 33/分钟，总计约 200。" },
      { resource: "food", perMin: 120, total: 720, note: "「生物危害」期间「food」损失约 120/分钟，总计约 720。" },
      { resource: "water", perMin: 100, total: 600, note: "「生物危害」期间「water」损失约 100/分钟，总计约 600。" },
      { resource: "pop", perMin: 2, total: 12, note: "「生物危害」期间「pop」损失约 2/分钟，总计约 12。" },
      { resource: "happiness", perMin: 3, total: 18, note: "「生物危害」期间「happiness」损失约 3/分钟，总计约 18。" },
    ],
  },
};

for (const _did of Object.keys(DISASTERS_V31_DETAIL)) {
  if (DISASTERS_V31[_did]) {
    DISASTERS_V31[_did].detail = DISASTERS_V31_DETAIL[_did];
  }
}

function selfTestDisastersV31Detail() {
  const errors = [];
  for (const id of DISASTERS_V31_ORDER) {
    const d = (DISASTERS_V31[id] || {}).detail;
    if (!d || d.responsePlaybook.length !== 8) errors.push(id + ': 应急手册不足 8 步');
    if (!d || d.lossTable.length !== 6) errors.push(id + ': 损失表不足 6 行');
  }
  return { total: DISASTERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.DISASTERS_V31_DETAIL = DISASTERS_V31_DETAIL;
  module.exports.selfTestDisastersV31Detail = selfTestDisastersV31Detail;
}

/* ============ §7 灾难细节块 2（恢复计划 / 连锁反应，载入时并入 DISASTERS_V31） ============ */
const DISASTERS_V31_DETAIL2 = {
  // ---------- d31-tradewar 贸易战 恢复计划 ----------
  "d31-tradewar": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：贸易战灾后恢复动作。", durationMin: 2, note: "「贸易战」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：贸易战灾后恢复动作。", durationMin: 4, note: "「贸易战」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：贸易战灾后恢复动作。", durationMin: 6, note: "「贸易战」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：贸易战灾后恢复动作。", durationMin: 8, note: "「贸易战」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：贸易战灾后恢复动作。", durationMin: 10, note: "「贸易战」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：贸易战灾后恢复动作。", durationMin: 12, note: "「贸易战」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：贸易战灾后恢复动作。", durationMin: 14, note: "「贸易战」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：贸易战灾后恢复动作。", durationMin: 16, note: "「贸易战」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：贸易战灾后恢复动作。", durationMin: 18, note: "「贸易战」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：贸易战灾后恢复动作。", durationMin: 20, note: "「贸易战」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-embargo", chance: 0.5, note: "「贸易战」未及时应对时，50% 概率升级为「d31-embargo」。" },
      { target: "d31-marketcrash", chance: 0.3, note: "「贸易战」未及时应对时，30% 概率升级为「d31-marketcrash」。" },
      { target: "d30-coup", chance: 0.2, note: "「贸易战」未及时应对时，20% 概率升级为「d30-coup」。" },
      { target: "d31-piracyblock", chance: 0.1, note: "「贸易战」未及时应对时，10% 概率升级为「d31-piracyblock」。" },
    ],
  },
  // ---------- d31-embargo 禁运封锁 恢复计划 ----------
  "d31-embargo": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：禁运封锁灾后恢复动作。", durationMin: 2, note: "「禁运封锁」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：禁运封锁灾后恢复动作。", durationMin: 4, note: "「禁运封锁」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：禁运封锁灾后恢复动作。", durationMin: 6, note: "「禁运封锁」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：禁运封锁灾后恢复动作。", durationMin: 8, note: "「禁运封锁」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：禁运封锁灾后恢复动作。", durationMin: 10, note: "「禁运封锁」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：禁运封锁灾后恢复动作。", durationMin: 12, note: "「禁运封锁」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：禁运封锁灾后恢复动作。", durationMin: 14, note: "「禁运封锁」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：禁运封锁灾后恢复动作。", durationMin: 16, note: "「禁运封锁」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：禁运封锁灾后恢复动作。", durationMin: 18, note: "「禁运封锁」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：禁运封锁灾后恢复动作。", durationMin: 20, note: "「禁运封锁」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-embargo", chance: 0.5, note: "「禁运封锁」未及时应对时，50% 概率升级为「d31-embargo」。" },
      { target: "d31-marketcrash", chance: 0.3, note: "「禁运封锁」未及时应对时，30% 概率升级为「d31-marketcrash」。" },
      { target: "d30-coup", chance: 0.2, note: "「禁运封锁」未及时应对时，20% 概率升级为「d30-coup」。" },
      { target: "d31-piracyblock", chance: 0.1, note: "「禁运封锁」未及时应对时，10% 概率升级为「d31-piracyblock」。" },
    ],
  },
  // ---------- d31-marketcrash 市场崩盘 恢复计划 ----------
  "d31-marketcrash": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：市场崩盘灾后恢复动作。", durationMin: 2, note: "「市场崩盘」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：市场崩盘灾后恢复动作。", durationMin: 4, note: "「市场崩盘」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：市场崩盘灾后恢复动作。", durationMin: 6, note: "「市场崩盘」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：市场崩盘灾后恢复动作。", durationMin: 8, note: "「市场崩盘」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：市场崩盘灾后恢复动作。", durationMin: 10, note: "「市场崩盘」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：市场崩盘灾后恢复动作。", durationMin: 12, note: "「市场崩盘」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：市场崩盘灾后恢复动作。", durationMin: 14, note: "「市场崩盘」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：市场崩盘灾后恢复动作。", durationMin: 16, note: "「市场崩盘」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：市场崩盘灾后恢复动作。", durationMin: 18, note: "「市场崩盘」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：市场崩盘灾后恢复动作。", durationMin: 20, note: "「市场崩盘」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-embargo", chance: 0.5, note: "「市场崩盘」未及时应对时，50% 概率升级为「d31-embargo」。" },
      { target: "d31-marketcrash", chance: 0.3, note: "「市场崩盘」未及时应对时，30% 概率升级为「d31-marketcrash」。" },
      { target: "d30-coup", chance: 0.2, note: "「市场崩盘」未及时应对时，20% 概率升级为「d30-coup」。" },
      { target: "d31-piracyblock", chance: 0.1, note: "「市场崩盘」未及时应对时，10% 概率升级为「d31-piracyblock」。" },
    ],
  },
  // ---------- d31-piracyblock 航道劫掠 恢复计划 ----------
  "d31-piracyblock": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：航道劫掠灾后恢复动作。", durationMin: 2, note: "「航道劫掠」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：航道劫掠灾后恢复动作。", durationMin: 4, note: "「航道劫掠」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：航道劫掠灾后恢复动作。", durationMin: 6, note: "「航道劫掠」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：航道劫掠灾后恢复动作。", durationMin: 8, note: "「航道劫掠」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：航道劫掠灾后恢复动作。", durationMin: 10, note: "「航道劫掠」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：航道劫掠灾后恢复动作。", durationMin: 12, note: "「航道劫掠」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：航道劫掠灾后恢复动作。", durationMin: 14, note: "「航道劫掠」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：航道劫掠灾后恢复动作。", durationMin: 16, note: "「航道劫掠」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：航道劫掠灾后恢复动作。", durationMin: 18, note: "「航道劫掠」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：航道劫掠灾后恢复动作。", durationMin: 20, note: "「航道劫掠」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-embargo", chance: 0.5, note: "「航道劫掠」未及时应对时，50% 概率升级为「d31-embargo」。" },
      { target: "d31-marketcrash", chance: 0.3, note: "「航道劫掠」未及时应对时，30% 概率升级为「d31-marketcrash」。" },
      { target: "d30-coup", chance: 0.2, note: "「航道劫掠」未及时应对时，20% 概率升级为「d30-coup」。" },
      { target: "d31-piracyblock", chance: 0.1, note: "「航道劫掠」未及时应对时，10% 概率升级为「d31-piracyblock」。" },
    ],
  },
  // ---------- d31-cultureclash 文化冲突 恢复计划 ----------
  "d31-cultureclash": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：文化冲突灾后恢复动作。", durationMin: 2, note: "「文化冲突」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：文化冲突灾后恢复动作。", durationMin: 4, note: "「文化冲突」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：文化冲突灾后恢复动作。", durationMin: 6, note: "「文化冲突」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：文化冲突灾后恢复动作。", durationMin: 8, note: "「文化冲突」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：文化冲突灾后恢复动作。", durationMin: 10, note: "「文化冲突」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：文化冲突灾后恢复动作。", durationMin: 12, note: "「文化冲突」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：文化冲突灾后恢复动作。", durationMin: 14, note: "「文化冲突」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：文化冲突灾后恢复动作。", durationMin: 16, note: "「文化冲突」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：文化冲突灾后恢复动作。", durationMin: 18, note: "「文化冲突」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：文化冲突灾后恢复动作。", durationMin: 20, note: "「文化冲突」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-faithschism", chance: 0.5, note: "「文化冲突」未及时应对时，50% 概率升级为「d31-faithschism」。" },
      { target: "d31-cultureclash", chance: 0.3, note: "「文化冲突」未及时应对时，30% 概率升级为「d31-cultureclash」。" },
      { target: "d30-protest", chance: 0.2, note: "「文化冲突」未及时应对时，20% 概率升级为「d30-protest」。" },
      { target: "d31-festivalriot", chance: 0.1, note: "「文化冲突」未及时应对时，10% 概率升级为「d31-festivalriot」。" },
    ],
  },
  // ---------- d31-faithschism 信仰分裂 恢复计划 ----------
  "d31-faithschism": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：信仰分裂灾后恢复动作。", durationMin: 2, note: "「信仰分裂」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：信仰分裂灾后恢复动作。", durationMin: 4, note: "「信仰分裂」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：信仰分裂灾后恢复动作。", durationMin: 6, note: "「信仰分裂」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：信仰分裂灾后恢复动作。", durationMin: 8, note: "「信仰分裂」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：信仰分裂灾后恢复动作。", durationMin: 10, note: "「信仰分裂」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：信仰分裂灾后恢复动作。", durationMin: 12, note: "「信仰分裂」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：信仰分裂灾后恢复动作。", durationMin: 14, note: "「信仰分裂」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：信仰分裂灾后恢复动作。", durationMin: 16, note: "「信仰分裂」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：信仰分裂灾后恢复动作。", durationMin: 18, note: "「信仰分裂」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：信仰分裂灾后恢复动作。", durationMin: 20, note: "「信仰分裂」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-faithschism", chance: 0.5, note: "「信仰分裂」未及时应对时，50% 概率升级为「d31-faithschism」。" },
      { target: "d31-cultureclash", chance: 0.3, note: "「信仰分裂」未及时应对时，30% 概率升级为「d31-cultureclash」。" },
      { target: "d30-protest", chance: 0.2, note: "「信仰分裂」未及时应对时，20% 概率升级为「d30-protest」。" },
      { target: "d31-festivalriot", chance: 0.1, note: "「信仰分裂」未及时应对时，10% 概率升级为「d31-festivalriot」。" },
    ],
  },
  // ---------- d31-languagebar 语言隔阂 恢复计划 ----------
  "d31-languagebar": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：语言隔阂灾后恢复动作。", durationMin: 2, note: "「语言隔阂」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：语言隔阂灾后恢复动作。", durationMin: 4, note: "「语言隔阂」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：语言隔阂灾后恢复动作。", durationMin: 6, note: "「语言隔阂」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：语言隔阂灾后恢复动作。", durationMin: 8, note: "「语言隔阂」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：语言隔阂灾后恢复动作。", durationMin: 10, note: "「语言隔阂」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：语言隔阂灾后恢复动作。", durationMin: 12, note: "「语言隔阂」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：语言隔阂灾后恢复动作。", durationMin: 14, note: "「语言隔阂」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：语言隔阂灾后恢复动作。", durationMin: 16, note: "「语言隔阂」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：语言隔阂灾后恢复动作。", durationMin: 18, note: "「语言隔阂」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：语言隔阂灾后恢复动作。", durationMin: 20, note: "「语言隔阂」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-faithschism", chance: 0.5, note: "「语言隔阂」未及时应对时，50% 概率升级为「d31-faithschism」。" },
      { target: "d31-cultureclash", chance: 0.3, note: "「语言隔阂」未及时应对时，30% 概率升级为「d31-cultureclash」。" },
      { target: "d30-protest", chance: 0.2, note: "「语言隔阂」未及时应对时，20% 概率升级为「d30-protest」。" },
      { target: "d31-festivalriot", chance: 0.1, note: "「语言隔阂」未及时应对时，10% 概率升级为「d31-festivalriot」。" },
    ],
  },
  // ---------- d31-festivalriot 节庆骚乱 恢复计划 ----------
  "d31-festivalriot": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：节庆骚乱灾后恢复动作。", durationMin: 2, note: "「节庆骚乱」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：节庆骚乱灾后恢复动作。", durationMin: 4, note: "「节庆骚乱」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：节庆骚乱灾后恢复动作。", durationMin: 6, note: "「节庆骚乱」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：节庆骚乱灾后恢复动作。", durationMin: 8, note: "「节庆骚乱」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：节庆骚乱灾后恢复动作。", durationMin: 10, note: "「节庆骚乱」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：节庆骚乱灾后恢复动作。", durationMin: 12, note: "「节庆骚乱」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：节庆骚乱灾后恢复动作。", durationMin: 14, note: "「节庆骚乱」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：节庆骚乱灾后恢复动作。", durationMin: 16, note: "「节庆骚乱」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：节庆骚乱灾后恢复动作。", durationMin: 18, note: "「节庆骚乱」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：节庆骚乱灾后恢复动作。", durationMin: 20, note: "「节庆骚乱」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-faithschism", chance: 0.5, note: "「节庆骚乱」未及时应对时，50% 概率升级为「d31-faithschism」。" },
      { target: "d31-cultureclash", chance: 0.3, note: "「节庆骚乱」未及时应对时，30% 概率升级为「d31-cultureclash」。" },
      { target: "d30-protest", chance: 0.2, note: "「节庆骚乱」未及时应对时，20% 概率升级为「d30-protest」。" },
      { target: "d31-festivalriot", chance: 0.1, note: "「节庆骚乱」未及时应对时，10% 概率升级为「d31-festivalriot」。" },
    ],
  },
  // ---------- d31-lableak 实验室泄漏 恢复计划 ----------
  "d31-lableak": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：实验室泄漏灾后恢复动作。", durationMin: 2, note: "「实验室泄漏」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：实验室泄漏灾后恢复动作。", durationMin: 4, note: "「实验室泄漏」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：实验室泄漏灾后恢复动作。", durationMin: 6, note: "「实验室泄漏」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：实验室泄漏灾后恢复动作。", durationMin: 8, note: "「实验室泄漏」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：实验室泄漏灾后恢复动作。", durationMin: 10, note: "「实验室泄漏」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：实验室泄漏灾后恢复动作。", durationMin: 12, note: "「实验室泄漏」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：实验室泄漏灾后恢复动作。", durationMin: 14, note: "「实验室泄漏」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：实验室泄漏灾后恢复动作。", durationMin: 16, note: "「实验室泄漏」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：实验室泄漏灾后恢复动作。", durationMin: 18, note: "「实验室泄漏」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：实验室泄漏灾后恢复动作。", durationMin: 20, note: "「实验室泄漏」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-airebellion", chance: 0.5, note: "「实验室泄漏」未及时应对时，50% 概率升级为「d31-airebellion」。" },
      { target: "d31-quantumback", chance: 0.3, note: "「实验室泄漏」未及时应对时，30% 概率升级为「d31-quantumback」。" },
      { target: "d30-oxygen", chance: 0.2, note: "「实验室泄漏」未及时应对时，20% 概率升级为「d30-oxygen」。" },
      { target: "d31-biohazard", chance: 0.1, note: "「实验室泄漏」未及时应对时，10% 概率升级为「d31-biohazard」。" },
    ],
  },
  // ---------- d31-airebellion AI失控 恢复计划 ----------
  "d31-airebellion": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：AI失控灾后恢复动作。", durationMin: 2, note: "「AI失控」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：AI失控灾后恢复动作。", durationMin: 4, note: "「AI失控」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：AI失控灾后恢复动作。", durationMin: 6, note: "「AI失控」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：AI失控灾后恢复动作。", durationMin: 8, note: "「AI失控」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：AI失控灾后恢复动作。", durationMin: 10, note: "「AI失控」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：AI失控灾后恢复动作。", durationMin: 12, note: "「AI失控」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：AI失控灾后恢复动作。", durationMin: 14, note: "「AI失控」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：AI失控灾后恢复动作。", durationMin: 16, note: "「AI失控」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：AI失控灾后恢复动作。", durationMin: 18, note: "「AI失控」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：AI失控灾后恢复动作。", durationMin: 20, note: "「AI失控」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-airebellion", chance: 0.5, note: "「AI失控」未及时应对时，50% 概率升级为「d31-airebellion」。" },
      { target: "d31-quantumback", chance: 0.3, note: "「AI失控」未及时应对时，30% 概率升级为「d31-quantumback」。" },
      { target: "d30-oxygen", chance: 0.2, note: "「AI失控」未及时应对时，20% 概率升级为「d30-oxygen」。" },
      { target: "d31-biohazard", chance: 0.1, note: "「AI失控」未及时应对时，10% 概率升级为「d31-biohazard」。" },
    ],
  },
  // ---------- d31-quantumback 量子反噬 恢复计划 ----------
  "d31-quantumback": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：量子反噬灾后恢复动作。", durationMin: 2, note: "「量子反噬」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：量子反噬灾后恢复动作。", durationMin: 4, note: "「量子反噬」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：量子反噬灾后恢复动作。", durationMin: 6, note: "「量子反噬」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：量子反噬灾后恢复动作。", durationMin: 8, note: "「量子反噬」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：量子反噬灾后恢复动作。", durationMin: 10, note: "「量子反噬」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：量子反噬灾后恢复动作。", durationMin: 12, note: "「量子反噬」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：量子反噬灾后恢复动作。", durationMin: 14, note: "「量子反噬」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：量子反噬灾后恢复动作。", durationMin: 16, note: "「量子反噬」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：量子反噬灾后恢复动作。", durationMin: 18, note: "「量子反噬」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：量子反噬灾后恢复动作。", durationMin: 20, note: "「量子反噬」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-airebellion", chance: 0.5, note: "「量子反噬」未及时应对时，50% 概率升级为「d31-airebellion」。" },
      { target: "d31-quantumback", chance: 0.3, note: "「量子反噬」未及时应对时，30% 概率升级为「d31-quantumback」。" },
      { target: "d30-oxygen", chance: 0.2, note: "「量子反噬」未及时应对时，20% 概率升级为「d30-oxygen」。" },
      { target: "d31-biohazard", chance: 0.1, note: "「量子反噬」未及时应对时，10% 概率升级为「d31-biohazard」。" },
    ],
  },
  // ---------- d31-biohazard 生物危害 恢复计划 ----------
  "d31-biohazard": {
    recoveryPlan: [
      { step: 1, action: "恢复第 1 步：生物危害灾后恢复动作。", durationMin: 2, note: "「生物危害」恢复计划第 1 步，耗时约 2 分钟。" },
      { step: 2, action: "恢复第 2 步：生物危害灾后恢复动作。", durationMin: 4, note: "「生物危害」恢复计划第 2 步，耗时约 4 分钟。" },
      { step: 3, action: "恢复第 3 步：生物危害灾后恢复动作。", durationMin: 6, note: "「生物危害」恢复计划第 3 步，耗时约 6 分钟。" },
      { step: 4, action: "恢复第 4 步：生物危害灾后恢复动作。", durationMin: 8, note: "「生物危害」恢复计划第 4 步，耗时约 8 分钟。" },
      { step: 5, action: "恢复第 5 步：生物危害灾后恢复动作。", durationMin: 10, note: "「生物危害」恢复计划第 5 步，耗时约 10 分钟。" },
      { step: 6, action: "恢复第 6 步：生物危害灾后恢复动作。", durationMin: 12, note: "「生物危害」恢复计划第 6 步，耗时约 12 分钟。" },
      { step: 7, action: "恢复第 7 步：生物危害灾后恢复动作。", durationMin: 14, note: "「生物危害」恢复计划第 7 步，耗时约 14 分钟。" },
      { step: 8, action: "恢复第 8 步：生物危害灾后恢复动作。", durationMin: 16, note: "「生物危害」恢复计划第 8 步，耗时约 16 分钟。" },
      { step: 9, action: "恢复第 9 步：生物危害灾后恢复动作。", durationMin: 18, note: "「生物危害」恢复计划第 9 步，耗时约 18 分钟。" },
      { step: 10, action: "恢复第 10 步：生物危害灾后恢复动作。", durationMin: 20, note: "「生物危害」恢复计划第 10 步，耗时约 20 分钟。" },
    ],
    chainReaction: [
      { target: "d31-airebellion", chance: 0.5, note: "「生物危害」未及时应对时，50% 概率升级为「d31-airebellion」。" },
      { target: "d31-quantumback", chance: 0.3, note: "「生物危害」未及时应对时，30% 概率升级为「d31-quantumback」。" },
      { target: "d30-oxygen", chance: 0.2, note: "「生物危害」未及时应对时，20% 概率升级为「d30-oxygen」。" },
      { target: "d31-biohazard", chance: 0.1, note: "「生物危害」未及时应对时，10% 概率升级为「d31-biohazard」。" },
    ],
  },
};

for (const _did of Object.keys(DISASTERS_V31_DETAIL2)) {
  if (DISASTERS_V31[_did]) {
    DISASTERS_V31[_did].detail2 = DISASTERS_V31_DETAIL2[_did];
    if (DISASTERS_V31[_did].detail) Object.assign(DISASTERS_V31[_did].detail, DISASTERS_V31_DETAIL2[_did]);
  }
}

function selfTestDisastersV31Detail2() {
  const errors = [];
  for (const id of DISASTERS_V31_ORDER) {
    const d = (DISASTERS_V31[id] || {}).detail2;
    if (!d || d.recoveryPlan.length !== 10) errors.push(id + ': 恢复计划不足 10 步');
    if (!d || d.chainReaction.length !== 4) errors.push(id + ': 连锁反应不足 4 条');
  }
  return { total: DISASTERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.DISASTERS_V31_DETAIL2 = DISASTERS_V31_DETAIL2;
  module.exports.selfTestDisastersV31Detail2 = selfTestDisastersV31Detail2;
}

/* ============ §8 灾难细节块 3（时间线，载入时并入 DISASTERS_V31） ============ */
const DISASTERS_V31_DETAIL3 = {
  // ---------- d31-tradewar 贸易战 时间线 ----------
  "d31-tradewar": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「贸易战」预警，玩家有 60 秒准备。",
        advice: "准备应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「贸易战」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 60,
        phase: "灾难开始",
        event: "「贸易战」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+60 秒：「贸易战」灾难开始。",
        note: "时间点 60 秒：灾难开始。",
      },
      {
        tSec: 135,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+135 秒：「贸易战」影响扩散。",
        note: "时间点 135 秒：影响扩散。",
      },
      {
        tSec: 210,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+210 秒：「贸易战」中期高峰。",
        note: "时间点 210 秒：中期高峰。",
      },
      {
        tSec: 285,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.8,
        log: "T+285 秒：「贸易战」衰退开始。",
        note: "时间点 285 秒：衰退开始。",
      },
      {
        tSec: 360,
        phase: "灾难结束",
        event: "「贸易战」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+360 秒：「贸易战」灾难结束。",
        note: "时间点 360 秒：灾难结束。",
      },
      {
        tSec: 420,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+420 秒：「贸易战」损失评估。",
        note: "时间点 420 秒：损失评估。",
      },
      {
        tSec: 540,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+540 秒：「贸易战」紧急修复。",
        note: "时间点 540 秒：紧急修复。",
      },
      {
        tSec: 660,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+660 秒：「贸易战」物资补充。",
        note: "时间点 660 秒：物资补充。",
      },
      {
        tSec: 960,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+960 秒：「贸易战」复盘总结。",
        note: "时间点 960 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-embargo 禁运封锁 时间线 ----------
  "d31-embargo": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「禁运封锁」预警，玩家有 90 秒准备。",
        advice: "准备应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「禁运封锁」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 90,
        phase: "灾难开始",
        event: "「禁运封锁」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+90 秒：「禁运封锁」灾难开始。",
        note: "时间点 90 秒：灾难开始。",
      },
      {
        tSec: 180,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+180 秒：「禁运封锁」影响扩散。",
        note: "时间点 180 秒：影响扩散。",
      },
      {
        tSec: 270,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+270 秒：「禁运封锁」中期高峰。",
        note: "时间点 270 秒：中期高峰。",
      },
      {
        tSec: 360,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.8,
        log: "T+360 秒：「禁运封锁」衰退开始。",
        note: "时间点 360 秒：衰退开始。",
      },
      {
        tSec: 450,
        phase: "灾难结束",
        event: "「禁运封锁」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+450 秒：「禁运封锁」灾难结束。",
        note: "时间点 450 秒：灾难结束。",
      },
      {
        tSec: 510,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+510 秒：「禁运封锁」损失评估。",
        note: "时间点 510 秒：损失评估。",
      },
      {
        tSec: 630,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+630 秒：「禁运封锁」紧急修复。",
        note: "时间点 630 秒：紧急修复。",
      },
      {
        tSec: 750,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+750 秒：「禁运封锁」物资补充。",
        note: "时间点 750 秒：物资补充。",
      },
      {
        tSec: 1050,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+1050 秒：「禁运封锁」复盘总结。",
        note: "时间点 1050 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-marketcrash 市场崩盘 时间线 ----------
  "d31-marketcrash": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「市场崩盘」预警，玩家有 60 秒准备。",
        advice: "准备应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「市场崩盘」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 60,
        phase: "灾难开始",
        event: "「市场崩盘」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+60 秒：「市场崩盘」灾难开始。",
        note: "时间点 60 秒：灾难开始。",
      },
      {
        tSec: 165,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+165 秒：「市场崩盘」影响扩散。",
        note: "时间点 165 秒：影响扩散。",
      },
      {
        tSec: 270,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+270 秒：「市场崩盘」中期高峰。",
        note: "时间点 270 秒：中期高峰。",
      },
      {
        tSec: 375,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.8,
        log: "T+375 秒：「市场崩盘」衰退开始。",
        note: "时间点 375 秒：衰退开始。",
      },
      {
        tSec: 480,
        phase: "灾难结束",
        event: "「市场崩盘」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+480 秒：「市场崩盘」灾难结束。",
        note: "时间点 480 秒：灾难结束。",
      },
      {
        tSec: 540,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+540 秒：「市场崩盘」损失评估。",
        note: "时间点 540 秒：损失评估。",
      },
      {
        tSec: 660,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+660 秒：「市场崩盘」紧急修复。",
        note: "时间点 660 秒：紧急修复。",
      },
      {
        tSec: 780,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+780 秒：「市场崩盘」物资补充。",
        note: "时间点 780 秒：物资补充。",
      },
      {
        tSec: 1080,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1080 秒：「市场崩盘」复盘总结。",
        note: "时间点 1080 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-piracyblock 航道劫掠 时间线 ----------
  "d31-piracyblock": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「航道劫掠」预警，玩家有 45 秒准备。",
        advice: "准备应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「航道劫掠」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 45,
        phase: "灾难开始",
        event: "「航道劫掠」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+45 秒：「航道劫掠」灾难开始。",
        note: "时间点 45 秒：灾难开始。",
      },
      {
        tSec: 105,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+105 秒：「航道劫掠」影响扩散。",
        note: "时间点 105 秒：影响扩散。",
      },
      {
        tSec: 165,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+165 秒：「航道劫掠」中期高峰。",
        note: "时间点 165 秒：中期高峰。",
      },
      {
        tSec: 225,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.8,
        log: "T+225 秒：「航道劫掠」衰退开始。",
        note: "时间点 225 秒：衰退开始。",
      },
      {
        tSec: 285,
        phase: "灾难结束",
        event: "「航道劫掠」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+285 秒：「航道劫掠」灾难结束。",
        note: "时间点 285 秒：灾难结束。",
      },
      {
        tSec: 345,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+345 秒：「航道劫掠」损失评估。",
        note: "时间点 345 秒：损失评估。",
      },
      {
        tSec: 465,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+465 秒：「航道劫掠」紧急修复。",
        note: "时间点 465 秒：紧急修复。",
      },
      {
        tSec: 585,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+585 秒：「航道劫掠」物资补充。",
        note: "时间点 585 秒：物资补充。",
      },
      {
        tSec: 885,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+885 秒：「航道劫掠」复盘总结。",
        note: "时间点 885 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-cultureclash 文化冲突 时间线 ----------
  "d31-cultureclash": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「文化冲突」预警，玩家有 60 秒准备。",
        advice: "准备应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「文化冲突」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 60,
        phase: "灾难开始",
        event: "「文化冲突」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+60 秒：「文化冲突」灾难开始。",
        note: "时间点 60 秒：灾难开始。",
      },
      {
        tSec: 120,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+120 秒：「文化冲突」影响扩散。",
        note: "时间点 120 秒：影响扩散。",
      },
      {
        tSec: 180,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+180 秒：「文化冲突」中期高峰。",
        note: "时间点 180 秒：中期高峰。",
      },
      {
        tSec: 240,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.8,
        log: "T+240 秒：「文化冲突」衰退开始。",
        note: "时间点 240 秒：衰退开始。",
      },
      {
        tSec: 300,
        phase: "灾难结束",
        event: "「文化冲突」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+300 秒：「文化冲突」灾难结束。",
        note: "时间点 300 秒：灾难结束。",
      },
      {
        tSec: 360,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+360 秒：「文化冲突」损失评估。",
        note: "时间点 360 秒：损失评估。",
      },
      {
        tSec: 480,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+480 秒：「文化冲突」紧急修复。",
        note: "时间点 480 秒：紧急修复。",
      },
      {
        tSec: 600,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+600 秒：「文化冲突」物资补充。",
        note: "时间点 600 秒：物资补充。",
      },
      {
        tSec: 900,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+900 秒：「文化冲突」复盘总结。",
        note: "时间点 900 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-faithschism 信仰分裂 时间线 ----------
  "d31-faithschism": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「信仰分裂」预警，玩家有 75 秒准备。",
        advice: "准备应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「信仰分裂」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 75,
        phase: "灾难开始",
        event: "「信仰分裂」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+75 秒：「信仰分裂」灾难开始。",
        note: "时间点 75 秒：灾难开始。",
      },
      {
        tSec: 150,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+150 秒：「信仰分裂」影响扩散。",
        note: "时间点 150 秒：影响扩散。",
      },
      {
        tSec: 225,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+225 秒：「信仰分裂」中期高峰。",
        note: "时间点 225 秒：中期高峰。",
      },
      {
        tSec: 300,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.8,
        log: "T+300 秒：「信仰分裂」衰退开始。",
        note: "时间点 300 秒：衰退开始。",
      },
      {
        tSec: 375,
        phase: "灾难结束",
        event: "「信仰分裂」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+375 秒：「信仰分裂」灾难结束。",
        note: "时间点 375 秒：灾难结束。",
      },
      {
        tSec: 435,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+435 秒：「信仰分裂」损失评估。",
        note: "时间点 435 秒：损失评估。",
      },
      {
        tSec: 555,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+555 秒：「信仰分裂」紧急修复。",
        note: "时间点 555 秒：紧急修复。",
      },
      {
        tSec: 675,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+675 秒：「信仰分裂」物资补充。",
        note: "时间点 675 秒：物资补充。",
      },
      {
        tSec: 975,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+975 秒：「信仰分裂」复盘总结。",
        note: "时间点 975 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-languagebar 语言隔阂 时间线 ----------
  "d31-languagebar": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「语言隔阂」预警，玩家有 45 秒准备。",
        advice: "准备应对",
        severityAtPoint: 2,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「语言隔阂」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 45,
        phase: "灾难开始",
        event: "「语言隔阂」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 2,
        effectMulAtPoint: 1.0,
        log: "T+45 秒：「语言隔阂」灾难开始。",
        note: "时间点 45 秒：灾难开始。",
      },
      {
        tSec: 90,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 2,
        effectMulAtPoint: 1.0,
        log: "T+90 秒：「语言隔阂」影响扩散。",
        note: "时间点 90 秒：影响扩散。",
      },
      {
        tSec: 135,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 2,
        effectMulAtPoint: 1.0,
        log: "T+135 秒：「语言隔阂」中期高峰。",
        note: "时间点 135 秒：中期高峰。",
      },
      {
        tSec: 180,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 2,
        effectMulAtPoint: 0.8,
        log: "T+180 秒：「语言隔阂」衰退开始。",
        note: "时间点 180 秒：衰退开始。",
      },
      {
        tSec: 225,
        phase: "灾难结束",
        event: "「语言隔阂」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+225 秒：「语言隔阂」灾难结束。",
        note: "时间点 225 秒：灾难结束。",
      },
      {
        tSec: 285,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+285 秒：「语言隔阂」损失评估。",
        note: "时间点 285 秒：损失评估。",
      },
      {
        tSec: 405,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+405 秒：「语言隔阂」紧急修复。",
        note: "时间点 405 秒：紧急修复。",
      },
      {
        tSec: 525,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+525 秒：「语言隔阂」物资补充。",
        note: "时间点 525 秒：物资补充。",
      },
      {
        tSec: 825,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+825 秒：「语言隔阂」复盘总结。",
        note: "时间点 825 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-festivalriot 节庆骚乱 时间线 ----------
  "d31-festivalriot": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「节庆骚乱」预警，玩家有 30 秒准备。",
        advice: "准备应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「节庆骚乱」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 30,
        phase: "灾难开始",
        event: "「节庆骚乱」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+30 秒：「节庆骚乱」灾难开始。",
        note: "时间点 30 秒：灾难开始。",
      },
      {
        tSec: 82,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+82 秒：「节庆骚乱」影响扩散。",
        note: "时间点 82 秒：影响扩散。",
      },
      {
        tSec: 135,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+135 秒：「节庆骚乱」中期高峰。",
        note: "时间点 135 秒：中期高峰。",
      },
      {
        tSec: 187,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.8,
        log: "T+187 秒：「节庆骚乱」衰退开始。",
        note: "时间点 187 秒：衰退开始。",
      },
      {
        tSec: 240,
        phase: "灾难结束",
        event: "「节庆骚乱」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+240 秒：「节庆骚乱」灾难结束。",
        note: "时间点 240 秒：灾难结束。",
      },
      {
        tSec: 300,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+300 秒：「节庆骚乱」损失评估。",
        note: "时间点 300 秒：损失评估。",
      },
      {
        tSec: 420,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+420 秒：「节庆骚乱」紧急修复。",
        note: "时间点 420 秒：紧急修复。",
      },
      {
        tSec: 540,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+540 秒：「节庆骚乱」物资补充。",
        note: "时间点 540 秒：物资补充。",
      },
      {
        tSec: 840,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+840 秒：「节庆骚乱」复盘总结。",
        note: "时间点 840 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-lableak 实验室泄漏 时间线 ----------
  "d31-lableak": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「实验室泄漏」预警，玩家有 60 秒准备。",
        advice: "准备应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「实验室泄漏」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 60,
        phase: "灾难开始",
        event: "「实验室泄漏」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+60 秒：「实验室泄漏」灾难开始。",
        note: "时间点 60 秒：灾难开始。",
      },
      {
        tSec: 135,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+135 秒：「实验室泄漏」影响扩散。",
        note: "时间点 135 秒：影响扩散。",
      },
      {
        tSec: 210,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+210 秒：「实验室泄漏」中期高峰。",
        note: "时间点 210 秒：中期高峰。",
      },
      {
        tSec: 285,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.8,
        log: "T+285 秒：「实验室泄漏」衰退开始。",
        note: "时间点 285 秒：衰退开始。",
      },
      {
        tSec: 360,
        phase: "灾难结束",
        event: "「实验室泄漏」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+360 秒：「实验室泄漏」灾难结束。",
        note: "时间点 360 秒：灾难结束。",
      },
      {
        tSec: 420,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+420 秒：「实验室泄漏」损失评估。",
        note: "时间点 420 秒：损失评估。",
      },
      {
        tSec: 540,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+540 秒：「实验室泄漏」紧急修复。",
        note: "时间点 540 秒：紧急修复。",
      },
      {
        tSec: 660,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+660 秒：「实验室泄漏」物资补充。",
        note: "时间点 660 秒：物资补充。",
      },
      {
        tSec: 960,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+960 秒：「实验室泄漏」复盘总结。",
        note: "时间点 960 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-airebellion AI失控 时间线 ----------
  "d31-airebellion": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「AI失控」预警，玩家有 90 秒准备。",
        advice: "准备应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「AI失控」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 90,
        phase: "灾难开始",
        event: "「AI失控」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+90 秒：「AI失控」灾难开始。",
        note: "时间点 90 秒：灾难开始。",
      },
      {
        tSec: 195,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+195 秒：「AI失控」影响扩散。",
        note: "时间点 195 秒：影响扩散。",
      },
      {
        tSec: 300,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+300 秒：「AI失控」中期高峰。",
        note: "时间点 300 秒：中期高峰。",
      },
      {
        tSec: 405,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.8,
        log: "T+405 秒：「AI失控」衰退开始。",
        note: "时间点 405 秒：衰退开始。",
      },
      {
        tSec: 510,
        phase: "灾难结束",
        event: "「AI失控」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+510 秒：「AI失控」灾难结束。",
        note: "时间点 510 秒：灾难结束。",
      },
      {
        tSec: 570,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+570 秒：「AI失控」损失评估。",
        note: "时间点 570 秒：损失评估。",
      },
      {
        tSec: 690,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+690 秒：「AI失控」紧急修复。",
        note: "时间点 690 秒：紧急修复。",
      },
      {
        tSec: 810,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+810 秒：「AI失控」物资补充。",
        note: "时间点 810 秒：物资补充。",
      },
      {
        tSec: 1110,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1110 秒：「AI失控」复盘总结。",
        note: "时间点 1110 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-quantumback 量子反噬 时间线 ----------
  "d31-quantumback": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「量子反噬」预警，玩家有 75 秒准备。",
        advice: "准备应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「量子反噬」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 75,
        phase: "灾难开始",
        event: "「量子反噬」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+75 秒：「量子反噬」灾难开始。",
        note: "时间点 75 秒：灾难开始。",
      },
      {
        tSec: 165,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+165 秒：「量子反噬」影响扩散。",
        note: "时间点 165 秒：影响扩散。",
      },
      {
        tSec: 255,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+255 秒：「量子反噬」中期高峰。",
        note: "时间点 255 秒：中期高峰。",
      },
      {
        tSec: 345,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.8,
        log: "T+345 秒：「量子反噬」衰退开始。",
        note: "时间点 345 秒：衰退开始。",
      },
      {
        tSec: 435,
        phase: "灾难结束",
        event: "「量子反噬」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+435 秒：「量子反噬」灾难结束。",
        note: "时间点 435 秒：灾难结束。",
      },
      {
        tSec: 495,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+495 秒：「量子反噬」损失评估。",
        note: "时间点 495 秒：损失评估。",
      },
      {
        tSec: 615,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+615 秒：「量子反噬」紧急修复。",
        note: "时间点 615 秒：紧急修复。",
      },
      {
        tSec: 735,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+735 秒：「量子反噬」物资补充。",
        note: "时间点 735 秒：物资补充。",
      },
      {
        tSec: 1035,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1035 秒：「量子反噬」复盘总结。",
        note: "时间点 1035 秒：复盘总结。",
      },
    ],
  },
  // ---------- d31-biohazard 生物危害 时间线 ----------
  "d31-biohazard": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「生物危害」预警，玩家有 60 秒准备。",
        advice: "准备应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「生物危害」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 60,
        phase: "灾难开始",
        event: "「生物危害」正式生效，影响按 100% 结算。",
        advice: "执行应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+60 秒：「生物危害」灾难开始。",
        note: "时间点 60 秒：灾难开始。",
      },
      {
        tSec: 142,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+142 秒：「生物危害」影响扩散。",
        note: "时间点 142 秒：影响扩散。",
      },
      {
        tSec: 225,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+225 秒：「生物危害」中期高峰。",
        note: "时间点 225 秒：中期高峰。",
      },
      {
        tSec: 307,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.8,
        log: "T+307 秒：「生物危害」衰退开始。",
        note: "时间点 307 秒：衰退开始。",
      },
      {
        tSec: 390,
        phase: "灾难结束",
        event: "「生物危害」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+390 秒：「生物危害」灾难结束。",
        note: "时间点 390 秒：灾难结束。",
      },
      {
        tSec: 450,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+450 秒：「生物危害」损失评估。",
        note: "时间点 450 秒：损失评估。",
      },
      {
        tSec: 570,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+570 秒：「生物危害」紧急修复。",
        note: "时间点 570 秒：紧急修复。",
      },
      {
        tSec: 690,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+690 秒：「生物危害」物资补充。",
        note: "时间点 690 秒：物资补充。",
      },
      {
        tSec: 990,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+990 秒：「生物危害」复盘总结。",
        note: "时间点 990 秒：复盘总结。",
      },
    ],
  },
};

for (const _did of Object.keys(DISASTERS_V31_DETAIL3)) {
  if (DISASTERS_V31[_did]) {
    DISASTERS_V31[_did].detail3 = DISASTERS_V31_DETAIL3[_did];
    if (DISASTERS_V31[_did].detail) Object.assign(DISASTERS_V31[_did].detail, DISASTERS_V31_DETAIL3[_did]);
  }
}

function selfTestDisastersV31Detail3() {
  const errors = [];
  for (const id of DISASTERS_V31_ORDER) {
    const d = (DISASTERS_V31[id] || {}).detail3;
    if (!d || d.timeline.length !== 10) errors.push(id + ': 时间线不足 10 个点');
  }
  return { total: DISASTERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.DISASTERS_V31_DETAIL3 = DISASTERS_V31_DETAIL3;
  module.exports.selfTestDisastersV31Detail3 = selfTestDisastersV31Detail3;
}
