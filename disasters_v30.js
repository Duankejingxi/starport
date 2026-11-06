/* 星港 — disasters_v30.js：v3.0 新灾难 10 种（政治 4 / 生态 3 / 军事 3）
 * 每种灾难都有：触发条件（5 条，可逐条判定）、持续时间、影响数值、
 * 应对方法（4 种，每种有造价与真实效果）、缓解科技、免疫科技、
 * 三阶段演变、升级规则、善后恢复。DisasterManagerV30 可独立 tick，
 * mergeDisastersV30(manager) 把 10 种挂到现有 DisasterManager 实例上。
 * 描述一律一句话，不写故事。
 */

'use strict';

/* ============ §1 灾难定义（10 种） ============ */
const DISASTERS_V30 = {
  // ---------- d30-coup 政变 [政治·严重度 5] ----------
  "d30-coup": {
    id: "d30-coup",
    name: "政变",
    icon: "🗡️",
    category: "政治",
    severity: 5,
    v30: true,
    timing: {
      firstAtMin: 45,
      intervalMinMin: 40,
      intervalMaxMin: 70,
      warnSec: 60,
      durationSec: 300,
      note: "首次 45 分钟后出现，之后每 40~70 分钟可能复发，预警 60 秒，持续 300 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 80,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "稳定度 < 30",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：稳定度 < 30。",
        },
        {
          text: "幸福度 < 40",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：幸福度 < 40。",
        },
        {
          text: "人口 ≥ 50",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 50。",
        },
        {
          text: "存在未镇压的抗议",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：存在未镇压的抗议。",
        },
        {
          text: "军官忠诚度 < 50",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：军官忠诚度 < 50。",
        },
      ],
    },
    effects: {
      "prodMul": 0.5,
      "happinessAdd": -20,
      "stabilityAdd": -30,
      "popLossPct": 0.05,
      "taxMul": 0.5,
      "defenseMul": 0.7,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.5, note: "全部生产 ×0.5。" },
      { key: "happinessAdd", value: -20, note: "幸福度 -20 点。" },
      { key: "stabilityAdd", value: -30, note: "稳定度 -30 点。" },
      { key: "popLossPct", value: 0.05, note: "人口损失 5%。" },
      { key: "taxMul", value: 0.5, note: "税收 ×0.5。" },
      { key: "defenseMul", value: 0.7, note: "防御力 ×0.7。" },
    ],
    probability: {
      baseChancePerCheck: 0.2,
      perMissingCondition: 0.1,
      capChance: 0.5,
      cooldownAfterMin: 80,
      note: "每次检查基础概率 20%，每多满足一条条件 + 10%，上限 50%。",
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
        log: "「政变」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「政变」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「政变」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 60, text: "预警：「政变」可能来袭。", note: "一级预警：提前 60 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 30, text: "警报：「政变」即将发生！", note: "二级警报：提前 30 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「政变」已经发生！", note: "三级警报：灾难进行中，持续 300 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「政变」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「政变」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「政变」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「政变」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「政变」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「政变」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 150, note: "二级（150 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 225, note: "三级（225 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "戒严令",
        cost: { "steel": 100 },
        effect: "持续时间 -50%，稳定度 +10",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "立即生效，幸福度再 -5",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「戒严令」。" },
          { step: 3, action: "效果：持续时间 -50%，稳定度 +10。" },
        ],
      },
      {
        name: "谈判妥协",
        cost: { "credits": 500 },
        effect: "持续时间 -30%，无额外惩罚",
        durationMul: 0.7,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需外交科技 t30-pol-16",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「谈判妥协」。" },
          { step: 3, action: "效果：持续时间 -30%，无额外惩罚。" },
        ],
      },
      {
        name: "逮捕主谋",
        cost: { "steel": 50 },
        effect: "50% 概率立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "失败则持续时间 +60 秒",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「逮捕主谋」。" },
          { step: 3, action: "效果：50% 概率立即结束。" },
        ],
      },
      {
        name: "军事接管",
        cost: { "steel": 200 },
        effect: "立即结束，但稳定度 -10",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "战后需重建议会",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「军事接管」。" },
          { step: 3, action: "效果：立即结束，但稳定度 -10。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-pol-21", "t30-pol-13", "t30-mil-21"],
      techDetail: [
        { tech: "t30-pol-21", note: "研究「t30-pol-21」后，本灾难概率 / 影响下降。" },
        { tech: "t30-pol-13", note: "研究「t30-pol-13」后，本灾难概率 / 影响下降。" },
        { tech: "t30-mil-21", note: "研究「t30-mil-21」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "t30-pol-21",
      immuneNote: "拥有「t30-pol-21」时本灾难永不触发。",
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
      text: "政变结束后稳定度缓慢恢复，每分钟 +2，直至回到 50。",
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
      "首都广场传来枪声，政变军占领了议会大厦。",
      "政变军宣布接管市政，生产陷入停滞。",
      "忠诚部队与政变军在街头对峙。",
      "政变军切断了对外通讯。",
      "居民躲在家中，街道空无一人。",
      "政变进入第三天，物资开始短缺。",
      "谈判代表进入议会大厦。",
      "政变结束，城市开始重建秩序。",
    ],
  },
  // ---------- d30-strike 大罢工 [政治·严重度 3] ----------
  "d30-strike": {
    id: "d30-strike",
    name: "大罢工",
    icon: "✊",
    category: "政治",
    severity: 3,
    v30: true,
    timing: {
      firstAtMin: 30,
      intervalMinMin: 25,
      intervalMaxMin: 45,
      warnSec: 45,
      durationSec: 240,
      note: "首次 30 分钟后出现，之后每 25~45 分钟可能复发，预警 45 秒，持续 240 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 50,
      requireAll: false,
      requireCount: 2,
      note: "每 60 秒检查一次，满足任意 2 条即可能触发。",
      conditions: [
        {
          text: "幸福度 < 50",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：幸福度 < 50。",
        },
        {
          text: "食物库存 < 3 天用量",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：食物库存 < 3 天用量。",
        },
        {
          text: "水库存 < 3 天用量",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：水库存 < 3 天用量。",
        },
        {
          text: "连续 2 次未发工资",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：连续 2 次未发工资。",
        },
        {
          text: "人口 ≥ 30",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 30。",
        },
      ],
    },
    effects: {
      "prodMul": 0.6,
      "foodAdd": 0,
      "taxMul": 0.7,
      "happinessAdd": -10,
      "stabilityAdd": -10,
      "popLossPct": 0,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.6, note: "全部生产 ×0.6。" },
      { key: "foodAdd", value: 0, note: "食物 0/分钟。" },
      { key: "taxMul", value: 0.7, note: "税收 ×0.7。" },
      { key: "happinessAdd", value: -10, note: "幸福度 -10 点。" },
      { key: "stabilityAdd", value: -10, note: "稳定度 -10 点。" },
      { key: "popLossPct", value: 0, note: "人口损失 0%。" },
    ],
    probability: {
      baseChancePerCheck: 0.12,
      perMissingCondition: 0.06,
      capChance: 0.5,
      cooldownAfterMin: 50,
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
        log: "「大罢工」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「大罢工」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「大罢工」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 45, text: "预警：「大罢工」可能来袭。", note: "一级预警：提前 45 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 22, text: "警报：「大罢工」即将发生！", note: "二级警报：提前 22 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「大罢工」已经发生！", note: "三级警报：灾难进行中，持续 240 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「大罢工」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「大罢工」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「大罢工」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「大罢工」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「大罢工」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「大罢工」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 120, note: "二级（120 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 180, note: "三级（180 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "加薪安抚",
        cost: { "credits": 300 },
        effect: "立即结束，幸福度 +5",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "每人 +10 星币",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「加薪安抚」。" },
          { step: 3, action: "效果：立即结束，幸福度 +5。" },
        ],
      },
      {
        name: "发放补给",
        cost: { "food": 200, "water": 200 },
        effect: "持续时间 -50%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "先稳住基本生活",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「发放补给」。" },
          { step: 3, action: "效果：持续时间 -50%。" },
        ],
      },
      {
        name: "谈判代表",
        cost: { "credits": 100 },
        effect: "持续时间 -30%",
        durationMul: 0.7,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需政策槽位 ≥1",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「谈判代表」。" },
          { step: 3, action: "效果：持续时间 -30%。" },
        ],
      },
      {
        name: "强制复工",
        cost: { "steel": 80 },
        effect: "立即结束，稳定度 -5",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "可能引发抗议",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「强制复工」。" },
          { step: 3, action: "效果：立即结束，稳定度 -5。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-pol-03", "t30-pol-07", "t30-pol-10"],
      techDetail: [
        { tech: "t30-pol-03", note: "研究「t30-pol-03」后，本灾难概率 / 影响下降。" },
        { tech: "t30-pol-07", note: "研究「t30-pol-07」后，本灾难概率 / 影响下降。" },
        { tech: "t30-pol-10", note: "研究「t30-pol-10」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "无免疫科技，只能缓解。",
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
      text: "罢工结束后生产逐步恢复，每分钟 +10% 产量，直至正常。",
      recoveryMin: 9,
      note: "恢复期约 9 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 240, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 120, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 240, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "无免疫科技，本行不适用。" },
    ],
    logLines: [
      "矿工放下工具，走出矿洞静坐抗议。",
      "工厂停工，生产线全部停下。",
      "罢工工人打出横幅，要求加薪。",
      "市政仓库开始发放应急口粮。",
      "谈判桌上，双方各不相让。",
      "第三天，部分工人返回岗位。",
      "工会与市政达成协议。",
      "罢工结束，机器重新轰鸣。",
    ],
  },
  // ---------- d30-protest 大规模抗议 [政治·严重度 2] ----------
  "d30-protest": {
    id: "d30-protest",
    name: "大规模抗议",
    icon: "📢",
    category: "政治",
    severity: 2,
    v30: true,
    timing: {
      firstAtMin: 20,
      intervalMinMin: 20,
      intervalMaxMin: 35,
      warnSec: 30,
      durationSec: 180,
      note: "首次 20 分钟后出现，之后每 20~35 分钟可能复发，预警 30 秒，持续 180 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 20,
      requireAll: false,
      requireCount: 2,
      note: "每 60 秒检查一次，满足任意 2 条即可能触发。",
      conditions: [
        {
          text: "幸福度 < 60",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：幸福度 < 60。",
        },
        {
          text: "稳定度 < 50",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：稳定度 < 50。",
        },
        {
          text: "人口 ≥ 20",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 20。",
        },
        {
          text: "税率 > 30%",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：税率 > 30%。",
        },
        {
          text: "连续缺水超过 1 天",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：连续缺水超过 1 天。",
        },
      ],
    },
    effects: {
      "prodMul": 0.85,
      "happinessAdd": -8,
      "stabilityAdd": -8,
      "taxMul": 0.85,
      "popLossPct": 0,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.85, note: "全部生产 ×0.85。" },
      { key: "happinessAdd", value: -8, note: "幸福度 -8 点。" },
      { key: "stabilityAdd", value: -8, note: "稳定度 -8 点。" },
      { key: "taxMul", value: 0.85, note: "税收 ×0.85。" },
      { key: "popLossPct", value: 0, note: "人口损失 0%。" },
    ],
    probability: {
      baseChancePerCheck: 0.08,
      perMissingCondition: 0.04,
      capChance: 0.5,
      cooldownAfterMin: 40,
      note: "每次检查基础概率 8%，每多满足一条条件 + 4%，上限 50%。",
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
        log: "「大规模抗议」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「大规模抗议」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「大规模抗议」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 30, text: "预警：「大规模抗议」可能来袭。", note: "一级预警：提前 30 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 15, text: "警报：「大规模抗议」即将发生！", note: "二级警报：提前 15 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「大规模抗议」已经发生！", note: "三级警报：灾难进行中，持续 180 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「大规模抗议」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「大规模抗议」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「大规模抗议」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「大规模抗议」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「大规模抗议」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「大规模抗议」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 90, note: "二级（90 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 135, note: "三级（135 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "公开对话",
        cost: { "credits": 50 },
        effect: "持续时间 -50%，幸福度 +3",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "市长出面倾听诉求",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「公开对话」。" },
          { step: 3, action: "效果：持续时间 -50%，幸福度 +3。" },
        ],
      },
      {
        name: "减税安抚",
        cost: { "credits": 200 },
        effect: "立即结束，税收 -10% 持续 5 分钟",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "用钱换安宁",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「减税安抚」。" },
          { step: 3, action: "效果：立即结束，税收 -10% 持续 5 分钟。" },
        ],
      },
      {
        name: "舆论引导",
        cost: { "credits": 80 },
        effect: "持续时间 -40%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需宣传中心",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「舆论引导」。" },
          { step: 3, action: "效果：持续时间 -40%。" },
        ],
      },
      {
        name: "驱散人群",
        cost: { "steel": 40 },
        effect: "立即结束，稳定度 -8",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "可能升级为罢工",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「驱散人群」。" },
          { step: 3, action: "效果：立即结束，稳定度 -8。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-pol-01", "t30-pol-02", "t30-pol-20"],
      techDetail: [
        { tech: "t30-pol-01", note: "研究「t30-pol-01」后，本灾难概率 / 影响下降。" },
        { tech: "t30-pol-02", note: "研究「t30-pol-02」后，本灾难概率 / 影响下降。" },
        { tech: "t30-pol-20", note: "研究「t30-pol-20」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "无免疫科技，只能缓解。",
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
      text: "抗议结束后幸福度每分钟 +2，直至回到触发前水平。",
      recoveryMin: 8,
      note: "恢复期约 8 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 180, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 90, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 180, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "无免疫科技，本行不适用。" },
    ],
    logLines: [
      "数百名居民聚集在议会广场。",
      "抗议者高喊口号，要求改善生活。",
      "市政厅门口排起长队递交请愿书。",
      "抗议规模扩大，周边街道封闭。",
      "媒体开始报道抗议事件。",
      "市长宣布将与代表对话。",
      "对话取得进展，人群开始散去。",
      "广场恢复平静。",
    ],
  },
  // ---------- d30-corrupt 腐败丑闻 [政治·严重度 3] ----------
  "d30-corrupt": {
    id: "d30-corrupt",
    name: "腐败丑闻",
    icon: "💰",
    category: "政治",
    severity: 3,
    v30: true,
    timing: {
      firstAtMin: 35,
      intervalMinMin: 30,
      intervalMaxMin: 55,
      warnSec: 0,
      durationSec: 200,
      note: "首次 35 分钟后出现，之后每 30~55 分钟可能复发，预警 0 秒，持续 200 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 50,
      requireAll: false,
      requireCount: 2,
      note: "每 60 秒检查一次，满足任意 2 条即可能触发。",
      conditions: [
        {
          text: "腐败率 > 40",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：腐败率 > 40。",
        },
        {
          text: "无廉政机构",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：无廉政机构。",
        },
        {
          text: "税收连续下降",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：税收连续下降。",
        },
        {
          text: "人口 ≥ 40",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 40。",
        },
        {
          text: "贸易额 > 1000 星币/分钟",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：贸易额 > 1000 星币/分钟。",
        },
      ],
    },
    effects: {
      "taxMul": 0.6,
      "tradeMul": 0.8,
      "happinessAdd": -12,
      "stabilityAdd": -15,
      "creditsLoss": 300,
      "popLossPct": 0,
    },
    effectsDetail: [
      { key: "taxMul", value: 0.6, note: "税收 ×0.6。" },
      { key: "tradeMul", value: 0.8, note: "贸易收入 ×0.8。" },
      { key: "happinessAdd", value: -12, note: "幸福度 -12 点。" },
      { key: "stabilityAdd", value: -15, note: "稳定度 -15 点。" },
      { key: "creditsLoss", value: 300, note: "星币损失 300。" },
      { key: "popLossPct", value: 0, note: "人口损失 0%。" },
    ],
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
        log: "「腐败丑闻」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「腐败丑闻」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「腐败丑闻」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 0, text: "预警：「腐败丑闻」可能来袭。", note: "一级预警：提前 0 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 5, text: "警报：「腐败丑闻」即将发生！", note: "二级警报：提前 5 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「腐败丑闻」已经发生！", note: "三级警报：灾难进行中，持续 200 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「腐败丑闻」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「腐败丑闻」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「腐败丑闻」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「腐败丑闻」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「腐败丑闻」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「腐败丑闻」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 100, note: "二级（100 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 150, note: "三级（150 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "公开审计",
        cost: { "credits": 150 },
        effect: "立即结束，税收恢复",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "需审计制度 t30-pol-23",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「公开审计」。" },
          { step: 3, action: "效果：立即结束，税收恢复。" },
        ],
      },
      {
        name: "撤职查办",
        cost: { "credits": 100 },
        effect: "持续时间 -60%，稳定度 +5",
        durationMul: 0.4,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "涉事官员全部撤职",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「撤职查办」。" },
          { step: 3, action: "效果：持续时间 -60%，稳定度 +5。" },
        ],
      },
      {
        name: "媒体管控",
        cost: { "credits": 80 },
        effect: "幸福度惩罚减半",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需宣传中心",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「媒体管控」。" },
          { step: 3, action: "效果：幸福度惩罚减半。" },
        ],
      },
      {
        name: "设立廉政公署",
        cost: { "steel": 100 },
        effect: "立即结束且永久免疫同类事件 10 分钟",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "需廉政公署 t30-pol-22",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「设立廉政公署」。" },
          { step: 3, action: "效果：立即结束且永久免疫同类事件 10 分钟。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-pol-08", "t30-pol-22", "t30-pol-23"],
      techDetail: [
        { tech: "t30-pol-08", note: "研究「t30-pol-08」后，本灾难概率 / 影响下降。" },
        { tech: "t30-pol-22", note: "研究「t30-pol-22」后，本灾难概率 / 影响下降。" },
        { tech: "t30-pol-23", note: "研究「t30-pol-23」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "无免疫科技，只能缓解。",
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
      text: "丑闻结束后税收每分钟恢复 10%，直至正常；腐败率清零。",
      recoveryMin: 8,
      note: "恢复期约 8 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 200, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 100, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 200, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "无免疫科技，本行不适用。" },
    ],
    logLines: [
      "审计发现市政账目存在巨额亏空。",
      "涉事官员名单被公开，舆论哗然。",
      "星币去向不明，市民要求彻查。",
      "调查组进驻市政厅。",
      "三名官员被撤职查办。",
      "追回赃款 300 星币。",
      "市政公开道歉并承诺改革。",
      "风波平息，信任缓慢重建。",
    ],
  },
  // ---------- d30-ecocollapse 生态崩溃 [生态·严重度 5] ----------
  "d30-ecocollapse": {
    id: "d30-ecocollapse",
    name: "生态崩溃",
    icon: "🥀",
    category: "生态",
    severity: 5,
    v30: true,
    timing: {
      firstAtMin: 60,
      intervalMinMin: 50,
      intervalMaxMin: 80,
      warnSec: 90,
      durationSec: 420,
      note: "首次 60 分钟后出现，之后每 50~80 分钟可能复发，预警 90 秒，持续 420 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 80,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "生态圈完整度 < 30",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：生态圈完整度 < 30。",
        },
        {
          text: "氧气供给 < 需求 50%",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：氧气供给 < 需求 50%。",
        },
        {
          text: "温室产量连续下降",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：温室产量连续下降。",
        },
        {
          text: "改造进度停滞超过 10 分钟",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：改造进度停滞超过 10 分钟。",
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
      "prodMul": 0.5,
      "foodMul": 0.3,
      "greenhouseMul": 0.2,
      "oxygenAdd": -15,
      "happinessAdd": -15,
      "popLossPct": 0.08,
      "terraformAdd": -5,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.5, note: "全部生产 ×0.5。" },
      { key: "foodMul", value: 0.3, note: "食物产量 ×0.3。" },
      { key: "greenhouseMul", value: 0.2, note: "温室产量 ×0.2。" },
      { key: "oxygenAdd", value: -15, note: "氧气供给 -15 点。" },
      { key: "happinessAdd", value: -15, note: "幸福度 -15 点。" },
      { key: "popLossPct", value: 0.08, note: "人口损失 8%。" },
      { key: "terraformAdd", value: -5, note: "改造进度 -5 点。" },
    ],
    probability: {
      baseChancePerCheck: 0.2,
      perMissingCondition: 0.1,
      capChance: 0.5,
      cooldownAfterMin: 100,
      note: "每次检查基础概率 20%，每多满足一条条件 + 10%，上限 50%。",
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
        log: "「生态崩溃」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「生态崩溃」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「生态崩溃」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 90, text: "预警：「生态崩溃」可能来袭。", note: "一级预警：提前 90 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 45, text: "警报：「生态崩溃」即将发生！", note: "二级警报：提前 45 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「生态崩溃」已经发生！", note: "三级警报：灾难进行中，持续 420 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「生态崩溃」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 2, note: "「生态崩溃」期间「温室」受损权重 2。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「生态崩溃」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「生态崩溃」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 0, note: "「生态崩溃」期间「贸易站」受损权重 0。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「生态崩溃」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 210, note: "二级（210 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 315, note: "三级（315 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "紧急补氧",
        cost: { "steel": 150 },
        effect: "氧气惩罚减半",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "启动备用制氧机",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「紧急补氧」。" },
          { step: 3, action: "效果：氧气惩罚减半。" },
        ],
      },
      {
        name: "生态重建",
        cost: { "nano": 100 },
        effect: "持续时间 -40%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "投放工程菌群",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「生态重建」。" },
          { step: 3, action: "效果：持续时间 -40%。" },
        ],
      },
      {
        name: "疏散温室",
        cost: { "food": 300 },
        effect: "食物惩罚减半",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "转移作物到备用穹顶",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「疏散温室」。" },
          { step: 3, action: "效果：食物惩罚减半。" },
        ],
      },
      {
        name: "盖亚干预",
        cost: { "he3": 100 },
        effect: "立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "需盖亚工程 t30-eco-24",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「盖亚干预」。" },
          { step: 3, action: "效果：立即结束。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-eco-14", "t30-eco-22", "t30-eco-25"],
      techDetail: [
        { tech: "t30-eco-14", note: "研究「t30-eco-14」后，本灾难概率 / 影响下降。" },
        { tech: "t30-eco-22", note: "研究「t30-eco-22」后，本灾难概率 / 影响下降。" },
        { tech: "t30-eco-25", note: "研究「t30-eco-25」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "t30-eco-25",
      immuneNote: "拥有「t30-eco-25」时本灾难永不触发。",
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
      text: "崩溃结束后生态圈完整度每分钟 +5，需重新投放作物种子。",
      recoveryMin: 12,
      note: "恢复期约 12 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 420, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 210, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 420, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "灾难永不触发。" },
    ],
    logLines: [
      "温室作物大面积枯死，叶片发黄。",
      "生态圈传感器报警：氧气浓度骤降。",
      "藻类农场水体发黑，产氧停止。",
      "空气中弥漫着腐败气味。",
      "居民出现呼吸困难，医院爆满。",
      "工程菌群开始修复土壤。",
      "第一株新苗破土而出。",
      "生态系统缓慢恢复。",
    ],
  },
  // ---------- d30-oxygen 氧气泄漏 [生态·严重度 4] ----------
  "d30-oxygen": {
    id: "d30-oxygen",
    name: "氧气泄漏",
    icon: "💨",
    category: "生态",
    severity: 4,
    v30: true,
    timing: {
      firstAtMin: 25,
      intervalMinMin: 20,
      intervalMaxMin: 40,
      warnSec: 20,
      durationSec: 150,
      note: "首次 25 分钟后出现，之后每 20~40 分钟可能复发，预警 20 秒，持续 150 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 80,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "氧气管网老化 > 50%",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：氧气管网老化 > 50%。",
        },
        {
          text: "穹顶完整度 < 60",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：穹顶完整度 < 60。",
        },
        {
          text: "遭遇陨石撞击后 5 分钟内",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：遭遇陨石撞击后 5 分钟内。",
        },
        {
          text: "人口 ≥ 30",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 30。",
        },
        {
          text: "制氧机 < 2 台",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：制氧机 < 2 台。",
        },
      ],
    },
    effects: {
      "oxygenAdd": -20,
      "popLossPct": 0.03,
      "happinessAdd": -10,
      "prodMul": 0.9,
      "popGrowthMul": 0.5,
    },
    effectsDetail: [
      { key: "oxygenAdd", value: -20, note: "氧气供给 -20 点。" },
      { key: "popLossPct", value: 0.03, note: "人口损失 3%。" },
      { key: "happinessAdd", value: -10, note: "幸福度 -10 点。" },
      { key: "prodMul", value: 0.9, note: "全部生产 ×0.9。" },
      { key: "popGrowthMul", value: 0.5, note: "人口增长 ×0.5。" },
    ],
    probability: {
      baseChancePerCheck: 0.16,
      perMissingCondition: 0.08,
      capChance: 0.5,
      cooldownAfterMin: 40,
      note: "每次检查基础概率 16%，每多满足一条条件 + 8%，上限 50%。",
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
        log: "「氧气泄漏」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「氧气泄漏」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「氧气泄漏」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 20, text: "预警：「氧气泄漏」可能来袭。", note: "一级预警：提前 20 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 10, text: "警报：「氧气泄漏」即将发生！", note: "二级警报：提前 10 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「氧气泄漏」已经发生！", note: "三级警报：灾难进行中，持续 150 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「氧气泄漏」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 2, note: "「氧气泄漏」期间「温室」受损权重 2。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「氧气泄漏」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「氧气泄漏」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 0, note: "「氧气泄漏」期间「贸易站」受损权重 0。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「氧气泄漏」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 75, note: "二级（75 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 112, note: "三级（112 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "封堵泄漏",
        cost: { "steel": 60 },
        effect: "持续时间 -60%",
        durationMul: 0.4,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "工程队穿戴气密服作业",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「封堵泄漏」。" },
          { step: 3, action: "效果：持续时间 -60%。" },
        ],
      },
      {
        name: "启动备用氧",
        cost: { "nano": 30 },
        effect: "氧气惩罚减半",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "备用制氧机全开",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「启动备用氧」。" },
          { step: 3, action: "效果：氧气惩罚减半。" },
        ],
      },
      {
        name: "疏散居民",
        cost: { "credits": 100 },
        effect: "人口损失归零",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "转移到备用穹顶",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「疏散居民」。" },
          { step: 3, action: "效果：人口损失归零。" },
        ],
      },
      {
        name: "全面检修",
        cost: { "steel": 120 },
        effect: "立即结束且 10 分钟内不再触发",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "更换全部老化管网",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「全面检修」。" },
          { step: 3, action: "效果：立即结束且 10 分钟内不再触发。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-eco-06", "t30-eco-07"],
      techDetail: [
        { tech: "t30-eco-06", note: "研究「t30-eco-06」后，本灾难概率 / 影响下降。" },
        { tech: "t30-eco-07", note: "研究「t30-eco-07」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 2 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "泄漏修复后氧气每分钟 +5，直至恢复正常供给。",
      recoveryMin: 7,
      note: "恢复期约 7 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 150, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 75, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 150, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "无免疫科技，本行不适用。" },
    ],
    logLines: [
      "警报响起：3 号穹顶氧气压力骤降。",
      "泄漏点定位在东侧管网接头。",
      "工程队穿戴气密服赶往现场。",
      "居民被要求佩戴应急氧气面罩。",
      "备用制氧机启动，压力止跌。",
      "泄漏点封堵完成。",
      "氧气浓度回升至安全线。",
      "管网检修完成，警报解除。",
    ],
  },
  // ---------- d30-water 水源污染 [生态·严重度 4] ----------
  "d30-water": {
    id: "d30-water",
    name: "水源污染",
    icon: "💧",
    category: "生态",
    severity: 4,
    v30: true,
    timing: {
      firstAtMin: 28,
      intervalMinMin: 22,
      intervalMaxMin: 42,
      warnSec: 30,
      durationSec: 240,
      note: "首次 28 分钟后出现，之后每 22~42 分钟可能复发，预警 30 秒，持续 240 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 80,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "水厂老化 > 50%",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：水厂老化 > 50%。",
        },
        {
          text: "水源地附近有采矿作业",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：水源地附近有采矿作业。",
        },
        {
          text: "生态崩溃后 5 分钟内",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：生态崩溃后 5 分钟内。",
        },
        {
          text: "人口 ≥ 30",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 30。",
        },
        {
          text: "无水质监测站",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：无水质监测站。",
        },
      ],
    },
    effects: {
      "waterAdd": -8,
      "waterplantMul": 0.4,
      "foodMul": 0.7,
      "happinessAdd": -12,
      "popLossPct": 0.04,
      "popGrowthMul": 0.6,
    },
    effectsDetail: [
      { key: "waterAdd", value: -8, note: "供水 -8/分钟。" },
      { key: "waterplantMul", value: 0.4, note: "水厂产量 ×0.4。" },
      { key: "foodMul", value: 0.7, note: "食物产量 ×0.7。" },
      { key: "happinessAdd", value: -12, note: "幸福度 -12 点。" },
      { key: "popLossPct", value: 0.04, note: "人口损失 4%。" },
      { key: "popGrowthMul", value: 0.6, note: "人口增长 ×0.6。" },
    ],
    probability: {
      baseChancePerCheck: 0.16,
      perMissingCondition: 0.08,
      capChance: 0.5,
      cooldownAfterMin: 44,
      note: "每次检查基础概率 16%，每多满足一条条件 + 8%，上限 50%。",
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
        log: "「水源污染」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「水源污染」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「水源污染」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 30, text: "预警：「水源污染」可能来袭。", note: "一级预警：提前 30 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 15, text: "警报：「水源污染」即将发生！", note: "二级警报：提前 15 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「水源污染」已经发生！", note: "三级警报：灾难进行中，持续 240 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「水源污染」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 2, note: "「水源污染」期间「温室」受损权重 2。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「水源污染」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「水源污染」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 0, note: "「水源污染」期间「贸易站」受损权重 0。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 0, note: "「水源污染」期间「防御建筑」受损权重 0。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 120, note: "二级（120 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 180, note: "三级（180 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "切换备用水源",
        cost: { "steel": 50 },
        effect: "供水惩罚减半",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "启用深层地下水",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「切换备用水源」。" },
          { step: 3, action: "效果：供水惩罚减半。" },
        ],
      },
      {
        name: "投放净化剂",
        cost: { "nano": 40 },
        effect: "持续时间 -50%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "全城管网投药",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「投放净化剂」。" },
          { step: 3, action: "效果：持续时间 -50%。" },
        ],
      },
      {
        name: "停水检修",
        cost: { "credits": 120 },
        effect: "立即结束，但幸福度 -5",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "全城停水 1 分钟",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「停水检修」。" },
          { step: 3, action: "效果：立即结束，但幸福度 -5。" },
        ],
      },
      {
        name: "新建净水厂",
        cost: { "steel": 150 },
        effect: "立即结束且永久免疫 15 分钟",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "需水厂升级",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「新建净水厂」。" },
          { step: 3, action: "效果：立即结束且永久免疫 15 分钟。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-eco-17", "t30-eco-25"],
      techDetail: [
        { tech: "t30-eco-17", note: "研究「t30-eco-17」后，本灾难概率 / 影响下降。" },
        { tech: "t30-eco-25", note: "研究「t30-eco-25」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 2 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "污染清除后水质每分钟恢复 10%，需重新检测全部水源。",
      recoveryMin: 9,
      note: "恢复期约 9 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 240, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 120, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 240, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "无免疫科技，本行不适用。" },
    ],
    logLines: [
      "居民报告自来水发黄有异味。",
      "检测发现重金属超标 3 倍。",
      "污染源锁定在上游采矿区。",
      "市政发布停水警告。",
      "净化剂投放到全城管网。",
      "水质指标开始下降。",
      "第三次检测达标。",
      "供水恢复正常。",
    ],
  },
  // ---------- d30-alien 外星入侵 [军事·严重度 5] ----------
  "d30-alien": {
    id: "d30-alien",
    name: "外星入侵",
    icon: "👽",
    category: "军事",
    severity: 5,
    v30: true,
    timing: {
      firstAtMin: 90,
      intervalMinMin: 70,
      intervalMaxMin: 120,
      warnSec: 120,
      durationSec: 600,
      note: "首次 90 分钟后出现，之后每 70~120 分钟可能复发，预警 120 秒，持续 600 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 80,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "深空监听发现不明舰队",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：深空监听发现不明舰队。",
        },
        {
          text: "人口 ≥ 100",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 100。",
        },
        {
          text: "拥有星门或戴森球",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：拥有星门或戴森球。",
        },
        {
          text: "防御力 < 300",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：防御力 < 300。",
        },
        {
          text: "外星关系 < -20",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：外星关系 < -20。",
        },
      ],
    },
    effects: {
      "prodMul": 0.6,
      "defenseMul": 0.8,
      "popLossPct": 0.15,
      "happinessAdd": -25,
      "stabilityAdd": -20,
      "taxMul": 0.5,
      "buildingDamage": 3,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.6, note: "全部生产 ×0.6。" },
      { key: "defenseMul", value: 0.8, note: "防御力 ×0.8。" },
      { key: "popLossPct", value: 0.15, note: "人口损失 15%。" },
      { key: "happinessAdd", value: -25, note: "幸福度 -25 点。" },
      { key: "stabilityAdd", value: -20, note: "稳定度 -20 点。" },
      { key: "taxMul", value: 0.5, note: "税收 ×0.5。" },
      { key: "buildingDamage", value: 3, note: "随机损坏 3 栋建筑。" },
    ],
    probability: {
      baseChancePerCheck: 0.2,
      perMissingCondition: 0.1,
      capChance: 0.5,
      cooldownAfterMin: 140,
      note: "每次检查基础概率 20%，每多满足一条条件 + 10%，上限 50%。",
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
        log: "「外星入侵」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「外星入侵」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「外星入侵」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 120, text: "预警：「外星入侵」可能来袭。", note: "一级预警：提前 120 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 60, text: "警报：「外星入侵」即将发生！", note: "二级警报：提前 60 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「外星入侵」已经发生！", note: "三级警报：灾难进行中，持续 600 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「外星入侵」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「外星入侵」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「外星入侵」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「外星入侵」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「外星入侵」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 2, note: "「外星入侵」期间「防御建筑」受损权重 2。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 300, note: "二级（300 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 450, note: "三级（450 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "舰队迎击",
        cost: { "steel": 300 },
        effect: "入侵持续时间 -50%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需星际舰队 t30-mil-24",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「舰队迎击」。" },
          { step: 3, action: "效果：入侵持续时间 -50%。" },
        ],
      },
      {
        name: "轨道炮齐射",
        cost: { "he3": 100 },
        effect: "敌军伤害减半",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需轨道炮 t30-mil-04",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「轨道炮齐射」。" },
          { step: 3, action: "效果：敌军伤害减半。" },
        ],
      },
      {
        name: "启动护盾",
        cost: { "nano": 100 },
        effect: "建筑损伤归零",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需能量护盾 t30-mil-07",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「启动护盾」。" },
          { step: 3, action: "效果：建筑损伤归零。" },
        ],
      },
      {
        name: "外交谈判",
        cost: { "credits": 800 },
        effect: "30% 概率立即停战",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需外星语言学 t30-ds-16",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「外交谈判」。" },
          { step: 3, action: "效果：30% 概率立即停战。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-mil-04", "t30-mil-07", "t30-mil-24", "t30-ds-16"],
      techDetail: [
        { tech: "t30-mil-04", note: "研究「t30-mil-04」后，本灾难概率 / 影响下降。" },
        { tech: "t30-mil-07", note: "研究「t30-mil-07」后，本灾难概率 / 影响下降。" },
        { tech: "t30-mil-24", note: "研究「t30-mil-24」后，本灾难概率 / 影响下降。" },
        { tech: "t30-ds-16", note: "研究「t30-ds-16」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 4 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "入侵结束后需修复受损建筑，人口损失不可恢复，防御力永久 +10（实战经验）。",
      recoveryMin: 15,
      note: "恢复期约 15 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 600, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 300, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 600, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "无免疫科技，本行不适用。" },
    ],
    logLines: [
      "深空监听站截获不明舰队信号。",
      "三艘外星战舰出现在火星轨道。",
      "轨道炮开火，夜空被照亮。",
      "敌军登陆舱落在城西荒漠。",
      "护盾发生器全功率运转。",
      "泰坦机甲出动迎敌。",
      "敌军旗舰被击沉，残部撤退。",
      "城市开始清理战场。",
    ],
  },
  // ---------- d30-pirate 海盗袭击 [军事·严重度 3] ----------
  "d30-pirate": {
    id: "d30-pirate",
    name: "海盗袭击",
    icon: "🏴‍☠️",
    category: "军事",
    severity: 3,
    v30: true,
    timing: {
      firstAtMin: 40,
      intervalMinMin: 30,
      intervalMaxMin: 50,
      warnSec: 45,
      durationSec: 180,
      note: "首次 40 分钟后出现，之后每 30~50 分钟可能复发，预警 45 秒，持续 180 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 50,
      requireAll: false,
      requireCount: 2,
      note: "每 60 秒检查一次，满足任意 2 条即可能触发。",
      conditions: [
        {
          text: "贸易船到访频繁",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：贸易船到访频繁。",
        },
        {
          text: "防御力 < 150",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：防御力 < 150。",
        },
        {
          text: "无舰队巡逻",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：无舰队巡逻。",
        },
        {
          text: "星币库存 > 1000",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：星币库存 > 1000。",
        },
        {
          text: "航线未设防",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：航线未设防。",
        },
      ],
    },
    effects: {
      "tradeMul": 0.5,
      "creditsLoss": 200,
      "steelLoss": 100,
      "happinessAdd": -8,
      "popLossPct": 0.02,
      "buildingDamage": 1,
    },
    effectsDetail: [
      { key: "tradeMul", value: 0.5, note: "贸易收入 ×0.5。" },
      { key: "creditsLoss", value: 200, note: "星币损失 200。" },
      { key: "steelLoss", value: 100, note: "钢材损失 100。" },
      { key: "happinessAdd", value: -8, note: "幸福度 -8 点。" },
      { key: "popLossPct", value: 0.02, note: "人口损失 2%。" },
      { key: "buildingDamage", value: 1, note: "随机损坏 1 栋建筑。" },
    ],
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
        log: "「海盗袭击」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「海盗袭击」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「海盗袭击」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 45, text: "预警：「海盗袭击」可能来袭。", note: "一级预警：提前 45 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 22, text: "警报：「海盗袭击」即将发生！", note: "二级警报：提前 22 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「海盗袭击」已经发生！", note: "三级警报：灾难进行中，持续 180 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「海盗袭击」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「海盗袭击」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「海盗袭击」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「海盗袭击」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「海盗袭击」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 2, note: "「海盗袭击」期间「防御建筑」受损权重 2。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 90, note: "二级（90 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 135, note: "三级（135 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "舰队护航",
        cost: { "steel": 100 },
        effect: "损失减半",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需舰队指挥 t30-ds-15",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「舰队护航」。" },
          { step: 3, action: "效果：损失减半。" },
        ],
      },
      {
        name: "缴纳买路钱",
        cost: { "credits": 200 },
        effect: "立即结束",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "花钱消灾",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「缴纳买路钱」。" },
          { step: 3, action: "效果：立即结束。" },
        ],
      },
      {
        name: "设伏反击",
        cost: { "steel": 150 },
        effect: "立即结束且缴获 300 星币",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "需特种部队 t30-mil-12",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「设伏反击」。" },
          { step: 3, action: "效果：立即结束且缴获 300 星币。" },
        ],
      },
      {
        name: "加强巡逻",
        cost: { "nano": 50 },
        effect: "持续时间 -50%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "无人机 24 小时巡逻",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「加强巡逻」。" },
          { step: 3, action: "效果：持续时间 -50%。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-mil-12", "t30-ds-15", "t30-pol-12"],
      techDetail: [
        { tech: "t30-mil-12", note: "研究「t30-mil-12」后，本灾难概率 / 影响下降。" },
        { tech: "t30-ds-15", note: "研究「t30-ds-15」后，本灾难概率 / 影响下降。" },
        { tech: "t30-pol-12", note: "研究「t30-pol-12」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "无免疫科技，只能缓解。",
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
      text: "袭击结束后贸易每分钟恢复 10%，被劫物资无法追回。",
      recoveryMin: 8,
      note: "恢复期约 8 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 180, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 90, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 180, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "无免疫科技，本行不适用。" },
    ],
    logLines: [
      "贸易船发回求救信号：遭遇海盗。",
      "海盗船切断航线，洗劫货舱。",
      "护航舰队紧急出动。",
      "海盗在陨石带设伏。",
      "交火持续 20 分钟。",
      "海盗船被击沉一艘，余部逃窜。",
      "被劫货船拖回港口。",
      "航线恢复通航。",
    ],
  },
  // ---------- d30-civilwar 内战 [军事·严重度 5] ----------
  "d30-civilwar": {
    id: "d30-civilwar",
    name: "内战",
    icon: "⚔️",
    category: "军事",
    severity: 5,
    v30: true,
    timing: {
      firstAtMin: 120,
      intervalMinMin: 90,
      intervalMaxMin: 150,
      warnSec: 90,
      durationSec: 900,
      note: "首次 120 分钟后出现，之后每 90~150 分钟可能复发，预警 90 秒，持续 900 秒。",
    },
    trigger: {
      checkIntervalSec: 60,
      minPop: 80,
      requireAll: false,
      requireCount: 3,
      note: "每 60 秒检查一次，满足任意 3 条即可能触发。",
      conditions: [
        {
          text: "稳定度 < 20",
          key: "cond_1",
          weight: 0.2,
          note: "触发条件之一：稳定度 < 20。",
        },
        {
          text: "幸福度 < 30",
          key: "cond_2",
          weight: 0.2,
          note: "触发条件之一：幸福度 < 30。",
        },
        {
          text: "政变后 10 分钟内",
          key: "cond_3",
          weight: 0.2,
          note: "触发条件之一：政变后 10 分钟内。",
        },
        {
          text: "人口 ≥ 100",
          key: "cond_4",
          weight: 0.2,
          note: "触发条件之一：人口 ≥ 100。",
        },
        {
          text: "存在两个对立派系",
          key: "cond_5",
          weight: 0.2,
          note: "触发条件之一：存在两个对立派系。",
        },
      ],
    },
    effects: {
      "prodMul": 0.4,
      "popLossPct": 0.2,
      "happinessAdd": -30,
      "stabilityAdd": -40,
      "taxMul": 0.3,
      "tradeMul": 0.3,
      "buildingDamage": 5,
      "defenseMul": 0.6,
    },
    effectsDetail: [
      { key: "prodMul", value: 0.4, note: "全部生产 ×0.4。" },
      { key: "popLossPct", value: 0.2, note: "人口损失 20%。" },
      { key: "happinessAdd", value: -30, note: "幸福度 -30 点。" },
      { key: "stabilityAdd", value: -40, note: "稳定度 -40 点。" },
      { key: "taxMul", value: 0.3, note: "税收 ×0.3。" },
      { key: "tradeMul", value: 0.3, note: "贸易收入 ×0.3。" },
      { key: "buildingDamage", value: 5, note: "随机损坏 5 栋建筑。" },
      { key: "defenseMul", value: 0.6, note: "防御力 ×0.6。" },
    ],
    probability: {
      baseChancePerCheck: 0.2,
      perMissingCondition: 0.1,
      capChance: 0.5,
      cooldownAfterMin: 180,
      note: "每次检查基础概率 20%，每多满足一条条件 + 10%，上限 50%。",
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
        log: "「内战」进入爆发期。",
        note: "影响按 effects 全额结算。",
      },
      {
        name: "持续期",
        fromPct: 30,
        toPct: 70,
        effectMul: 0.8,
        counterMul: 1.0,
        log: "「内战」进入持续期。",
        note: "影响按 effects 的 80% 结算，居民开始适应。",
      },
      {
        name: "衰退期",
        fromPct: 70,
        toPct: 100,
        effectMul: 0.5,
        counterMul: 2.0,
        log: "「内战」进入衰退期。",
        note: "影响按 effects 的 50% 结算，应对效果翻倍。",
      },
    ],
    warnings: [
      { level: 1, leadSec: 90, text: "预警：「内战」可能来袭。", note: "一级预警：提前 90 秒，提示玩家检查库存与防御。" },
      { level: 2, leadSec: 45, text: "警报：「内战」即将发生！", note: "二级警报：提前 45 秒，建议立即执行应对措施。" },
      { level: 3, leadSec: 0, text: "「内战」已经发生！", note: "三级警报：灾难进行中，持续 900 秒。" },
    ],
    damageTable: [
      { buildingType: "habitat", buildingName: "居住舱", damage: 1, note: "「内战」期间「居住舱」受损权重 1。" },
      { buildingType: "greenhouse", buildingName: "温室", damage: 1, note: "「内战」期间「温室」受损权重 1。" },
      { buildingType: "lab", buildingName: "实验室", damage: 1, note: "「内战」期间「实验室」受损权重 1。" },
      { buildingType: "power", buildingName: "发电建筑", damage: 1, note: "「内战」期间「发电建筑」受损权重 1。" },
      { buildingType: "trade", buildingName: "贸易站", damage: 1, note: "「内战」期间「贸易站」受损权重 1。" },
      { buildingType: "defense", buildingName: "防御建筑", damage: 2, note: "「内战」期间「防御建筑」受损权重 2。" },
    ],
    escalation: [
      { level: 1, afterSec: 0, note: "一级：按 effects 全额结算。" },
      { level: 2, afterSec: 450, note: "二级（450 秒后）：若未采取任何应对，人口损失 +50%，持续时间 +60 秒。" },
      { level: 3, afterSec: 675, note: "三级（675 秒后）：若仍未应对，50% 概率升级为关联灾难。" },
    ],
    counters: [
      {
        name: "停火谈判",
        cost: { "credits": 1000 },
        effect: "持续时间 -50%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需星际民主 t30-pol-25",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「停火谈判」。" },
          { step: 3, action: "效果：持续时间 -50%。" },
        ],
      },
      {
        name: "军事镇压",
        cost: { "steel": 500 },
        effect: "立即结束，人口再 -5%",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "需全面战争 t30-mil-25",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「军事镇压」。" },
          { step: 3, action: "效果：立即结束，人口再 -5%。" },
        ],
      },
      {
        name: "分治协议",
        cost: { "credits": 600 },
        effect: "立即结束，人口上限 -20",
        durationMul: 0.5,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "无额外风险。",
        note: "城市一分为二",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「分治协议」。" },
          { step: 3, action: "效果：立即结束，人口上限 -20。" },
        ],
      },
      {
        name: "外援调停",
        cost: { "credits": 800 },
        effect: "持续时间 -40%",
        durationMul: 0.6,
        canRepeat: false,
        requiresTech: "",
        requiresBuilding: "",
        risk: "见备注。",
        note: "需同盟体系 t30-pol-19",
        steps: [
          { step: 1, action: "确认库存足够支付造价。" },
          { step: 2, action: "执行「外援调停」。" },
          { step: 3, action: "效果：持续时间 -40%。" },
        ],
      },
    ],
    mitigations: {
      techs: ["t30-pol-25", "t30-mil-25"],
      techDetail: [
        { tech: "t30-pol-25", note: "研究「t30-pol-25」后，本灾难概率 / 影响下降。" },
        { tech: "t30-mil-25", note: "研究「t30-mil-25」后，本灾难概率 / 影响下降。" },
      ],
      immuneTech: "",
      immuneNote: "无免疫科技，只能缓解。",
      buildings: [],
      note: "缓解科技 2 项，免疫科技 无。",
    },
    aftermath: [
      { item: "stability", perMin: 2, note: "稳定度每分钟 +2，直至回到 50。" },
      { item: "happiness", perMin: 2, note: "幸福度每分钟 +2，直至回到触发前水平。" },
      { item: "production", perMin: 10, note: "产量每分钟恢复 10%，直至正常。" },
      { item: "trade", perMin: 10, note: "贸易每分钟恢复 10%，直至正常。" },
      { item: "population", perMin: 0, note: "人口损失不可恢复，需重新移民补充。" },
    ],
    recovery: {
      text: "内战结束后稳定度归零重建，人口损失不可恢复，需 10 分钟恢复期。",
      recoveryMin: 20,
      note: "恢复期约 20 分钟，期间同类灾难不再触发。",
    },
    simulate: [
      { scenario: "无应对", durationSec: 900, note: "影响全额，人口损失按 popLossPct 结算。" },
      { scenario: "一级应对", durationSec: 450, note: "使用最便宜的应对，持续时间减半。" },
      { scenario: "立即结束", durationSec: 0, note: "使用立即结束类应对，损失最小。" },
      { scenario: "有缓解科技", durationSec: 900, note: "概率减半，影响降低约 30%。" },
      { scenario: "有免疫科技", durationSec: 0, note: "无免疫科技，本行不适用。" },
    ],
    logLines: [
      "议会分裂成两派，各自宣布执政。",
      "街头出现路障，城市一分为二。",
      "双方军队在中央广场交火。",
      "补给线被切断，物资短缺。",
      "医院收治大量伤员。",
      "调停代表抵达前线。",
      "停火协议签署。",
      "城市开始漫长的重建。",
    ],
  },
};

const DISASTERS_V30_COUNT = 10;
const DISASTERS_V30_ORDER = ["d30-coup", "d30-strike", "d30-protest", "d30-corrupt", "d30-ecocollapse", "d30-oxygen", "d30-water", "d30-alien", "d30-pirate", "d30-civilwar"];

/* ============ §2 每种灾难的 tick / 结算函数（可执行） ============ */
/* 政变：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_coup(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-coup"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.5) * mul;
  delta.happiness = -20 * mul / 300;
  delta.stability = -30 * mul / 300;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.05 / 300;
  delta.stage = durationLeft > 210 ? "爆发期" : (durationLeft > 90 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 政变：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_coup(state) {
  const def = DISASTERS_V30["d30-coup"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.05);
  return {
    disaster: "d30-coup",
    popLoss: popLoss,
    creditsLoss: 0,
    steelLoss: 0,
    buildingsDamaged: 0,
    recoveryMin: def.recovery.recoveryMin,
    note: "「政变」结束：人口 -0 人（按当前人口比例），星币 -0，钢材 -0，建筑损坏 0 栋。",
  };
}

/* 大罢工：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_strike(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-strike"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.6) * mul;
  delta.happiness = -10 * mul / 240;
  delta.stability = -10 * mul / 240;
  delta.stage = durationLeft > 168 ? "爆发期" : (durationLeft > 72 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 大罢工：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_strike(state) {
  const def = DISASTERS_V30["d30-strike"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0);
  return {
    disaster: "d30-strike",
    popLoss: popLoss,
    creditsLoss: 0,
    steelLoss: 0,
    buildingsDamaged: 0,
    recoveryMin: def.recovery.recoveryMin,
    note: "「大罢工」结束：人口 -0 人（按当前人口比例），星币 -0，钢材 -0，建筑损坏 0 栋。",
  };
}

/* 大规模抗议：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_protest(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-protest"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.85) * mul;
  delta.happiness = -8 * mul / 180;
  delta.stability = -8 * mul / 180;
  delta.stage = durationLeft > 125 ? "爆发期" : (durationLeft > 54 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 大规模抗议：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_protest(state) {
  const def = DISASTERS_V30["d30-protest"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0);
  return {
    disaster: "d30-protest",
    popLoss: popLoss,
    creditsLoss: 0,
    steelLoss: 0,
    buildingsDamaged: 0,
    recoveryMin: def.recovery.recoveryMin,
    note: "「大规模抗议」结束：人口 -0 人（按当前人口比例），星币 -0，钢材 -0，建筑损坏 0 栋。",
  };
}

/* 腐败丑闻：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_corrupt(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-corrupt"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.happiness = -12 * mul / 200;
  delta.stability = -15 * mul / 200;
  delta.stage = durationLeft > 140 ? "爆发期" : (durationLeft > 60 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 腐败丑闻：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_corrupt(state) {
  const def = DISASTERS_V30["d30-corrupt"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0);
  return {
    disaster: "d30-corrupt",
    popLoss: popLoss,
    creditsLoss: 300,
    steelLoss: 0,
    buildingsDamaged: 0,
    recoveryMin: def.recovery.recoveryMin,
    note: "「腐败丑闻」结束：人口 -0 人（按当前人口比例），星币 -300，钢材 -0，建筑损坏 0 栋。",
  };
}

/* 生态崩溃：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_ecocollapse(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-ecocollapse"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.5) * mul;
  delta.happiness = -15 * mul / 420;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.08 / 420;
  delta.stage = durationLeft > 294 ? "爆发期" : (durationLeft > 126 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 生态崩溃：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_ecocollapse(state) {
  const def = DISASTERS_V30["d30-ecocollapse"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.08);
  return {
    disaster: "d30-ecocollapse",
    popLoss: popLoss,
    creditsLoss: 0,
    steelLoss: 0,
    buildingsDamaged: 0,
    recoveryMin: def.recovery.recoveryMin,
    note: "「生态崩溃」结束：人口 -0 人（按当前人口比例），星币 -0，钢材 -0，建筑损坏 0 栋。",
  };
}

/* 氧气泄漏：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_oxygen(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-oxygen"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.9) * mul;
  delta.happiness = -10 * mul / 150;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.03 / 150;
  delta.stage = durationLeft > 105 ? "爆发期" : (durationLeft > 45 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 氧气泄漏：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_oxygen(state) {
  const def = DISASTERS_V30["d30-oxygen"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.03);
  return {
    disaster: "d30-oxygen",
    popLoss: popLoss,
    creditsLoss: 0,
    steelLoss: 0,
    buildingsDamaged: 0,
    recoveryMin: def.recovery.recoveryMin,
    note: "「氧气泄漏」结束：人口 -0 人（按当前人口比例），星币 -0，钢材 -0，建筑损坏 0 栋。",
  };
}

/* 水源污染：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_water(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-water"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.happiness = -12 * mul / 240;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.04 / 240;
  delta.stage = durationLeft > 168 ? "爆发期" : (durationLeft > 72 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 水源污染：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_water(state) {
  const def = DISASTERS_V30["d30-water"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.04);
  return {
    disaster: "d30-water",
    popLoss: popLoss,
    creditsLoss: 0,
    steelLoss: 0,
    buildingsDamaged: 0,
    recoveryMin: def.recovery.recoveryMin,
    note: "「水源污染」结束：人口 -0 人（按当前人口比例），星币 -0，钢材 -0，建筑损坏 0 栋。",
  };
}

/* 外星入侵：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_alien(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-alien"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.6) * mul;
  delta.happiness = -25 * mul / 600;
  delta.stability = -20 * mul / 600;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.15 / 600;
  delta.stage = durationLeft > 420 ? "爆发期" : (durationLeft > 180 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 外星入侵：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_alien(state) {
  const def = DISASTERS_V30["d30-alien"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.15);
  return {
    disaster: "d30-alien",
    popLoss: popLoss,
    creditsLoss: 0,
    steelLoss: 0,
    buildingsDamaged: 3,
    recoveryMin: def.recovery.recoveryMin,
    note: "「外星入侵」结束：人口 -0 人（按当前人口比例），星币 -0，钢材 -0，建筑损坏 3 栋。",
  };
}

/* 海盗袭击：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_pirate(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-pirate"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.happiness = -8 * mul / 180;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.02 / 180;
  delta.stage = durationLeft > 125 ? "爆发期" : (durationLeft > 54 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 海盗袭击：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_pirate(state) {
  const def = DISASTERS_V30["d30-pirate"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.02);
  return {
    disaster: "d30-pirate",
    popLoss: popLoss,
    creditsLoss: 200,
    steelLoss: 100,
    buildingsDamaged: 1,
    recoveryMin: def.recovery.recoveryMin,
    note: "「海盗袭击」结束：人口 -0 人（按当前人口比例），星币 -200，钢材 -100，建筑损坏 1 栋。",
  };
}

/* 内战：每秒 tick，返回本秒造成的数值变化；durationLeft<=0 时灾难结束。 */
function tick_d30_civilwar(state, durationLeft, stageMul) {
  const def = DISASTERS_V30["d30-civilwar"];
  const mul = (stageMul === undefined) ? 1 : stageMul;
  const delta = { prodMul: 1, happiness: 0, stability: 0, popLoss: 0 };
  delta.prodMul = 1 - (1 - 0.4) * mul;
  delta.happiness = -30 * mul / 900;
  delta.stability = -40 * mul / 900;
  delta.popLoss = (state && state.pop ? state.pop.count : 0) * 0.2 / 900;
  delta.stage = durationLeft > 630 ? "爆发期" : (durationLeft > 270 ? "持续期" : "衰退期");
  delta.done = durationLeft <= 0;
  return delta;
}

/* 内战：灾难结束结算，返回一次性损失汇总（人口 / 资源 / 建筑）。 */
function resolve_d30_civilwar(state) {
  const def = DISASTERS_V30["d30-civilwar"];
  const pop = (state && state.pop) ? state.pop.count : 0;
  const popLoss = Math.floor(pop * 0.2);
  return {
    disaster: "d30-civilwar",
    popLoss: popLoss,
    creditsLoss: 0,
    steelLoss: 0,
    buildingsDamaged: 5,
    recoveryMin: def.recovery.recoveryMin,
    note: "「内战」结束：人口 -0 人（按当前人口比例），星币 -0，钢材 -0，建筑损坏 5 栋。",
  };
}

/* ============ §3 灾难管理器 v30 ============ */
/* DisasterManagerV30：独立于旧 DisasterManager，可单独 tick；
 * mergeDisastersV30(manager) 会把实例挂到旧管理器上（manager.v30），
 * 并在旧管理器 update 时顺带检查 v30 触发条件。
 * 状态对象 state 需提供：pop.count / city.stability / pop.happiness /
 * inv{food,water,credits,steel} / tech.has(id) / buildings.count(id)。 */
class DisasterManagerV30 {
  constructor() {
    this.active = null;      // {id, until, warned, stage}
    this.cooldowns = {};     // id -> 下次可触发时间戳
    this.history = [];       // 已发生记录 {id, at, counterUsed}
    this.onEvent = null;     // (type, data) => {}
  }

  /* 免疫判定：拥有免疫科技则永不触发。 */
  isImmune(id, state) {
    const def = DISASTERS_V30[id];
    if (!def || !def.mitigations.immuneTech) return false;
    return !!(state && state.tech && state.tech.has(def.mitigations.immuneTech));
  }

  /* 拥有任一缓解科技。 */
  hasMitigation(id, state) {
    const def = DISASTERS_V30[id];
    if (!def || !state || !state.tech) return false;
    return def.mitigations.techs.some(function (t) { return state.tech.has(t); });
  }

  /* 触发概率：基础概率 × 条件满足数加成 × 缓解/免疫修正。 */
  chance(id, state, satisfiedCount) {
    const def = DISASTERS_V30[id];
    if (!def) return 0;
    if (this.isImmune(id, state)) return 0;
    let c = def.probability.baseChancePerCheck +
      def.probability.perMissingCondition * (satisfiedCount || 0);
    if (this.hasMitigation(id, state)) c *= 0.5;
    if (state && state.city && state.city.stability < 20) c *= 1.5;
    if (this.active) c *= 2.0;
    return Math.min(def.probability.capChance, c);
  }

  /* 每分钟检查一次：按顺序判定 10 种灾难是否触发（同一时间最多 1 种新增）。 */
  check(now, state, satisfiedMap) {
    if (this.active) return null;
    for (const id of DISASTERS_V30_ORDER) {
      if (this.cooldowns[id] && now < this.cooldowns[id]) continue;
      if (this.isImmune(id, state)) continue;
      const n = (satisfiedMap && satisfiedMap[id]) || 0;
      const need = DISASTERS_V30[id].trigger.requireCount;
      if (n < need) continue;
      if (Math.random() < this.chance(id, state, n)) return this.start(id, now);
    }
    return null;
  }

  /* 开始一场灾难：先预警，预警结束才生效。 */
  start(id, now) {
    const def = DISASTERS_V30[id];
    if (!def) return null;
    const warnMs = def.timing.warnSec * 1000;
    this.active = { id: id, warnUntil: now + warnMs,
      until: now + warnMs + def.timing.durationSec * 1000,
      warned: false, counterUsed: null, escalated: 0 };
    if (this.onEvent) this.onEvent('v30-warn', { id: id, warnMs: warnMs });
    return this.active;
  }

  /* 是否生效中（预警结束之后）。 */
  activeNow(now) {
    return this.active && now >= this.active.warnUntil && now < this.active.until;
  }

  /* 当前灾难所处阶段（爆发期/持续期/衰退期）。 */
  stage(now) {
    if (!this.active) return null;
    const def = DISASTERS_V30[this.active.id];
    const total = def.timing.durationSec * 1000;
    const left = this.active.until - now;
    const pct = 100 * (1 - left / total);
    for (const s of def.stages) {
      if (pct >= s.fromPct && pct < s.toPct) return s;
    }
    return def.stages[def.stages.length - 1];
  }

  /* 执行一种应对：扣费并缩短/结束灾难，返回结果。 */
  applyCounter(counterName, state) {
    if (!this.active) return { ok: false, reason: '当前无进行中的灾难' };
    const def = DISASTERS_V30[this.active.id];
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

  /* 结束灾难：结算 + 冷却 + 历史记录。 */
  end(now, state, byCounter) {
    if (!this.active) return null;
    const id = this.active.id;
    const def = DISASTERS_V30[id];
    const rec = { id: id, at: now, counterUsed: this.active.counterUsed, byCounter: !!byCounter };
    this.history.push(rec);
    this.cooldowns[id] = now + def.probability.cooldownAfterMin * 60 * 1000;
    this.active = null;
    if (this.onEvent) this.onEvent('v30-end', rec);
    return rec;
  }

  /* 每帧/每秒更新：预警转生效、升级判定、到期结束。 */
  update(now, state) {
    if (!this.active) return;
    const def = DISASTERS_V30[this.active.id];
    if (!this.active.warned && now >= this.active.warnUntil) {
      this.active.warned = true;
      if (this.onEvent) this.onEvent('v30-start', { id: this.active.id });
    }
    if (this.active.warned && !this.active.counterUsed) {
      const elapsed = now - this.active.warnUntil;
      for (const esc of def.escalation) {
        if (elapsed >= esc.afterSec * 1000 && this.active.escalated < esc.level) {
          this.active.escalated = esc.level;
          if (this.onEvent) this.onEvent('v30-escalate', { id: this.active.id, level: esc.level });
        }
      }
    }
    if (now >= this.active.until) this.end(now, state, false);
  }

  /* 当前生效中的生产倍率（无灾难时为 1）。 */
  prodMul(now) {
    if (!this.activeNow(now)) return 1;
    const def = DISASTERS_V30[this.active.id];
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
/* mergeDisastersV30(manager)：manager 为旧 DisasterManager 实例时，在其上挂载
 * manager.v30 = new DisasterManagerV30()，并包装其 update 方法：每帧先跑旧逻辑，
 * 再跑 v30 的 update；无 manager 时返回独立实例。幂等，可重复调用。 */
function mergeDisastersV30(manager) {
  if (!manager) return { attached: false, v30: new DisasterManagerV30(), count: DISASTERS_V30_COUNT };
  if (!manager.v30) manager.v30 = new DisasterManagerV30();
  if (!manager._v30wrapped && typeof manager.update === 'function') {
    const origUpdate = manager.update.bind(manager);
    manager.update = function (now, game) {
      origUpdate(now, game);
      try { manager.v30.update(now, game); } catch (e) { /* v30 失败不影响旧逻辑 */ }
    };
    manager._v30wrapped = true;
  }
  manager.v30defs = DISASTERS_V30;
  return { attached: true, v30: manager.v30, count: DISASTERS_V30_COUNT,
    categories: { politics: 4, eco: 3, military: 3 } };
}

/* ============ §5 自检 ============ */
function selfTestDisastersV30() {
  const errors = [];
  const counts = { '政治': 0, '生态': 0, '军事': 0 };
  for (const id of DISASTERS_V30_ORDER) {
    const d = DISASTERS_V30[id];
    if (!d) { errors.push(id + ': 定义缺失'); continue; }
    counts[d.category] = (counts[d.category] || 0) + 1;
    if (d.trigger.conditions.length !== 5) errors.push(id + ': 触发条件不足 5 条');
    if (d.counters.length !== 4) errors.push(id + ': 应对方法不足 4 种');
    if (d.stages.length !== 3) errors.push(id + ': 阶段不足 3 个');
    if (d.logLines.length !== 8) errors.push(id + ': 日志不足 8 条');
    if (!(d.timing.durationSec > 0)) errors.push(id + ': 持续时间无效');
    if (d.severity < 1 || d.severity > 5) errors.push(id + ': 严重度越界');
    for (const c of d.counters) {
      if (Object.keys(c.cost).length === 0) errors.push(id + ': 应对「' + c.name + '」无造价');
    }
  }
  if (counts['政治'] !== 4) errors.push('政治类灾难数量错误');
  if (counts['生态'] !== 3) errors.push('生态类灾难数量错误');
  if (counts['军事'] !== 3) errors.push('军事类灾难数量错误');
  try {
    const m = new DisasterManagerV30();
    const st = { pop: { count: 100 }, city: { stability: 50 }, tech: { has: function () { return false; } }, inv: {} };
    m.start('d30-protest', Date.now());
    if (!m.active) errors.push('冒烟：无法开始灾难');
    if (m.prodMul(Date.now() + 1000) !== 1) errors.push('冒烟：预警期生产倍率应为 1');
    m.end(Date.now(), st, false);
    if (m.active) errors.push('冒烟：灾难未正常结束');
  } catch (e) { errors.push('冒烟失败: ' + e.message); }
  return { total: DISASTERS_V30_COUNT, counts: counts, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports = { DISASTERS_V30, DISASTERS_V30_ORDER, DISASTERS_V30_COUNT,
    DisasterManagerV30, mergeDisastersV30, selfTestDisastersV30 };
}

/* ============ §6 灾难细节块（应急手册 / 数值表，载入时并入 DISASTERS_V30） ============ */
const DISASTERS_V30_DETAIL = {
  // ---------- d30-coup 政变 细节 ----------
  "d30-coup": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 60,
        note: "「政变」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 60,
        note: "「政变」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 100,
        note: "「政变」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 300,
        note: "「政变」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 300,
        note: "「政变」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 10, note: "「政变」期间每分钟额外消耗 food ×10。" },
      { resource: "water", amount: 10, note: "「政变」期间每分钟额外消耗 water ×10。" },
      { resource: "credits", amount: 50, note: "「政变」期间每分钟额外消耗 credits ×50。" },
      { resource: "steel", amount: 5, note: "「政变」期间每分钟额外消耗 steel ×5。" },
      { resource: "power", amount: 25, note: "「政变」期间每分钟额外消耗 power ×25。" },
      { resource: "oxygen", amount: 15, note: "「政变」期间每分钟额外消耗 oxygen ×15。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.7, note: "「政变」期间「居住舱」产量 ×0.7。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.7, note: "「政变」期间「温室」产量 ×0.7。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.7, note: "「政变」期间「采矿机」产量 ×0.7。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.7, note: "「政变」期间「冶炼厂」产量 ×0.7。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.7, note: "「政变」期间「实验室」产量 ×0.7。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.7, note: "「政变」期间「太阳能板」产量 ×0.7。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.7, note: "「政变」期间「贸易站」产量 ×0.7。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.7, note: "「政变」期间「防御塔」产量 ×0.7。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -10, lossPct: 0.1, note: "「政变」期间儿童士气 -10 点，损失率 0.1%。" },
      { group: "工人", moraleAdd: -10, lossPct: 0.25, note: "「政变」期间工人士气 -10 点，损失率 0.2%。" },
      { group: "老人", moraleAdd: -10, lossPct: 0.4, note: "「政变」期间老人士气 -10 点，损失率 0.4%。" },
      { group: "军人", moraleAdd: -10, lossPct: 0.15, note: "「政变」期间军人士气 -10 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-strike", chance: 0.5, delaySec: 300, note: "「政变」结束后 300 秒内，50% 概率引发「大罢工」。" },
      { disaster: "d30-protest", chance: 0.5, delaySec: 300, note: "「政变」结束后 300 秒内，50% 概率引发「大规模抗议」。" },
      { disaster: "d30-ecocollapse", chance: 0.5, delaySec: 300, note: "「政变」结束后 300 秒内，50% 概率引发「生态崩溃」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「政变」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.0, note: "夏季「政变」触发概率 ×1.0。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「政变」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 0.9, note: "冬季「政变」触发概率 ×0.9。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「政变」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「政变」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「政变」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「政变」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「政变」持续时间与影响 ×1.6。" },
    ],
  },
  // ---------- d30-strike 大罢工 细节 ----------
  "d30-strike": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 45,
        note: "「大罢工」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 45,
        note: "「大罢工」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 80,
        note: "「大罢工」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 240,
        note: "「大罢工」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 240,
        note: "「大罢工」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 6, note: "「大罢工」期间每分钟额外消耗 food ×6。" },
      { resource: "water", amount: 6, note: "「大罢工」期间每分钟额外消耗 water ×6。" },
      { resource: "credits", amount: 30, note: "「大罢工」期间每分钟额外消耗 credits ×30。" },
      { resource: "steel", amount: 3, note: "「大罢工」期间每分钟额外消耗 steel ×3。" },
      { resource: "power", amount: 15, note: "「大罢工」期间每分钟额外消耗 power ×15。" },
      { resource: "oxygen", amount: 9, note: "「大罢工」期间每分钟额外消耗 oxygen ×9。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.82, note: "「大罢工」期间「居住舱」产量 ×0.82。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.82, note: "「大罢工」期间「温室」产量 ×0.82。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.82, note: "「大罢工」期间「采矿机」产量 ×0.82。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.82, note: "「大罢工」期间「冶炼厂」产量 ×0.82。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.82, note: "「大罢工」期间「实验室」产量 ×0.82。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.82, note: "「大罢工」期间「太阳能板」产量 ×0.82。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.82, note: "「大罢工」期间「贸易站」产量 ×0.82。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.82, note: "「大罢工」期间「防御塔」产量 ×0.82。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -6, lossPct: 0.06, note: "「大罢工」期间儿童士气 -6 点，损失率 0.1%。" },
      { group: "工人", moraleAdd: -6, lossPct: 0.15, note: "「大罢工」期间工人士气 -6 点，损失率 0.2%。" },
      { group: "老人", moraleAdd: -6, lossPct: 0.24, note: "「大罢工」期间老人士气 -6 点，损失率 0.2%。" },
      { group: "军人", moraleAdd: -6, lossPct: 0.09, note: "「大罢工」期间军人士气 -6 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-coup", chance: 0.3, delaySec: 240, note: "「大罢工」结束后 240 秒内，30% 概率引发「政变」。" },
      { disaster: "d30-protest", chance: 0.3, delaySec: 240, note: "「大罢工」结束后 240 秒内，30% 概率引发「大规模抗议」。" },
      { disaster: "d30-ecocollapse", chance: 0.3, delaySec: 240, note: "「大罢工」结束后 240 秒内，30% 概率引发「生态崩溃」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「大罢工」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.0, note: "夏季「大罢工」触发概率 ×1.0。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「大罢工」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 0.9, note: "冬季「大罢工」触发概率 ×0.9。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「大罢工」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「大罢工」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「大罢工」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「大罢工」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「大罢工」持续时间与影响 ×1.6。" },
    ],
  },
  // ---------- d30-protest 大规模抗议 细节 ----------
  "d30-protest": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 30,
        note: "「大规模抗议」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 30,
        note: "「大规模抗议」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 60,
        note: "「大规模抗议」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 180,
        note: "「大规模抗议」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 180,
        note: "「大规模抗议」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 4, note: "「大规模抗议」期间每分钟额外消耗 food ×4。" },
      { resource: "water", amount: 4, note: "「大规模抗议」期间每分钟额外消耗 water ×4。" },
      { resource: "credits", amount: 20, note: "「大规模抗议」期间每分钟额外消耗 credits ×20。" },
      { resource: "steel", amount: 2, note: "「大规模抗议」期间每分钟额外消耗 steel ×2。" },
      { resource: "power", amount: 10, note: "「大规模抗议」期间每分钟额外消耗 power ×10。" },
      { resource: "oxygen", amount: 6, note: "「大规模抗议」期间每分钟额外消耗 oxygen ×6。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.88, note: "「大规模抗议」期间「居住舱」产量 ×0.88。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.88, note: "「大规模抗议」期间「温室」产量 ×0.88。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.88, note: "「大规模抗议」期间「采矿机」产量 ×0.88。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.88, note: "「大规模抗议」期间「冶炼厂」产量 ×0.88。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.88, note: "「大规模抗议」期间「实验室」产量 ×0.88。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.88, note: "「大规模抗议」期间「太阳能板」产量 ×0.88。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.88, note: "「大规模抗议」期间「贸易站」产量 ×0.88。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.88, note: "「大规模抗议」期间「防御塔」产量 ×0.88。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -4, lossPct: 0.04, note: "「大规模抗议」期间儿童士气 -4 点，损失率 0.0%。" },
      { group: "工人", moraleAdd: -4, lossPct: 0.1, note: "「大规模抗议」期间工人士气 -4 点，损失率 0.1%。" },
      { group: "老人", moraleAdd: -4, lossPct: 0.16, note: "「大规模抗议」期间老人士气 -4 点，损失率 0.2%。" },
      { group: "军人", moraleAdd: -4, lossPct: 0.06, note: "「大规模抗议」期间军人士气 -4 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-coup", chance: 0.2, delaySec: 180, note: "「大规模抗议」结束后 180 秒内，20% 概率引发「政变」。" },
      { disaster: "d30-strike", chance: 0.2, delaySec: 180, note: "「大规模抗议」结束后 180 秒内，20% 概率引发「大罢工」。" },
      { disaster: "d30-ecocollapse", chance: 0.2, delaySec: 180, note: "「大规模抗议」结束后 180 秒内，20% 概率引发「生态崩溃」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「大规模抗议」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.0, note: "夏季「大规模抗议」触发概率 ×1.0。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「大规模抗议」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 0.9, note: "冬季「大规模抗议」触发概率 ×0.9。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「大规模抗议」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「大规模抗议」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「大规模抗议」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「大规模抗议」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「大规模抗议」持续时间与影响 ×1.6。" },
    ],
  },
  // ---------- d30-corrupt 腐败丑闻 细节 ----------
  "d30-corrupt": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 0,
        note: "「腐败丑闻」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 0,
        note: "「腐败丑闻」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 66,
        note: "「腐败丑闻」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 200,
        note: "「腐败丑闻」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 200,
        note: "「腐败丑闻」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 6, note: "「腐败丑闻」期间每分钟额外消耗 food ×6。" },
      { resource: "water", amount: 6, note: "「腐败丑闻」期间每分钟额外消耗 water ×6。" },
      { resource: "credits", amount: 30, note: "「腐败丑闻」期间每分钟额外消耗 credits ×30。" },
      { resource: "steel", amount: 3, note: "「腐败丑闻」期间每分钟额外消耗 steel ×3。" },
      { resource: "power", amount: 15, note: "「腐败丑闻」期间每分钟额外消耗 power ×15。" },
      { resource: "oxygen", amount: 9, note: "「腐败丑闻」期间每分钟额外消耗 oxygen ×9。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.82, note: "「腐败丑闻」期间「居住舱」产量 ×0.82。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.82, note: "「腐败丑闻」期间「温室」产量 ×0.82。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.82, note: "「腐败丑闻」期间「采矿机」产量 ×0.82。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.82, note: "「腐败丑闻」期间「冶炼厂」产量 ×0.82。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.82, note: "「腐败丑闻」期间「实验室」产量 ×0.82。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.82, note: "「腐败丑闻」期间「太阳能板」产量 ×0.82。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.82, note: "「腐败丑闻」期间「贸易站」产量 ×0.82。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.82, note: "「腐败丑闻」期间「防御塔」产量 ×0.82。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -6, lossPct: 0.06, note: "「腐败丑闻」期间儿童士气 -6 点，损失率 0.1%。" },
      { group: "工人", moraleAdd: -6, lossPct: 0.15, note: "「腐败丑闻」期间工人士气 -6 点，损失率 0.2%。" },
      { group: "老人", moraleAdd: -6, lossPct: 0.24, note: "「腐败丑闻」期间老人士气 -6 点，损失率 0.2%。" },
      { group: "军人", moraleAdd: -6, lossPct: 0.09, note: "「腐败丑闻」期间军人士气 -6 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-coup", chance: 0.3, delaySec: 200, note: "「腐败丑闻」结束后 200 秒内，30% 概率引发「政变」。" },
      { disaster: "d30-strike", chance: 0.3, delaySec: 200, note: "「腐败丑闻」结束后 200 秒内，30% 概率引发「大罢工」。" },
      { disaster: "d30-ecocollapse", chance: 0.3, delaySec: 200, note: "「腐败丑闻」结束后 200 秒内，30% 概率引发「生态崩溃」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「腐败丑闻」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.0, note: "夏季「腐败丑闻」触发概率 ×1.0。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「腐败丑闻」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 0.9, note: "冬季「腐败丑闻」触发概率 ×0.9。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「腐败丑闻」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「腐败丑闻」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「腐败丑闻」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「腐败丑闻」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「腐败丑闻」持续时间与影响 ×1.6。" },
    ],
  },
  // ---------- d30-ecocollapse 生态崩溃 细节 ----------
  "d30-ecocollapse": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 90,
        note: "「生态崩溃」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 90,
        note: "「生态崩溃」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 140,
        note: "「生态崩溃」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 420,
        note: "「生态崩溃」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 420,
        note: "「生态崩溃」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 10, note: "「生态崩溃」期间每分钟额外消耗 food ×10。" },
      { resource: "water", amount: 10, note: "「生态崩溃」期间每分钟额外消耗 water ×10。" },
      { resource: "credits", amount: 50, note: "「生态崩溃」期间每分钟额外消耗 credits ×50。" },
      { resource: "steel", amount: 5, note: "「生态崩溃」期间每分钟额外消耗 steel ×5。" },
      { resource: "power", amount: 25, note: "「生态崩溃」期间每分钟额外消耗 power ×25。" },
      { resource: "oxygen", amount: 15, note: "「生态崩溃」期间每分钟额外消耗 oxygen ×15。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.7, note: "「生态崩溃」期间「居住舱」产量 ×0.7。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.4, note: "「生态崩溃」期间「温室」产量 ×0.4。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.7, note: "「生态崩溃」期间「采矿机」产量 ×0.7。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.7, note: "「生态崩溃」期间「冶炼厂」产量 ×0.7。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.4, note: "「生态崩溃」期间「实验室」产量 ×0.4。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.7, note: "「生态崩溃」期间「太阳能板」产量 ×0.7。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.7, note: "「生态崩溃」期间「贸易站」产量 ×0.7。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.7, note: "「生态崩溃」期间「防御塔」产量 ×0.7。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -10, lossPct: 0.1, note: "「生态崩溃」期间儿童士气 -10 点，损失率 0.1%。" },
      { group: "工人", moraleAdd: -10, lossPct: 0.25, note: "「生态崩溃」期间工人士气 -10 点，损失率 0.2%。" },
      { group: "老人", moraleAdd: -10, lossPct: 0.4, note: "「生态崩溃」期间老人士气 -10 点，损失率 0.4%。" },
      { group: "军人", moraleAdd: -10, lossPct: 0.15, note: "「生态崩溃」期间军人士气 -10 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-oxygen", chance: 0.5, delaySec: 420, note: "「生态崩溃」结束后 420 秒内，50% 概率引发「氧气泄漏」。" },
      { disaster: "d30-water", chance: 0.5, delaySec: 420, note: "「生态崩溃」结束后 420 秒内，50% 概率引发「水源污染」。" },
      { disaster: "d30-coup", chance: 0.5, delaySec: 420, note: "「生态崩溃」结束后 420 秒内，50% 概率引发「政变」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「生态崩溃」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.1, note: "夏季「生态崩溃」触发概率 ×1.1。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「生态崩溃」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 1.2, note: "冬季「生态崩溃」触发概率 ×1.2。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「生态崩溃」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「生态崩溃」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「生态崩溃」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「生态崩溃」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「生态崩溃」持续时间与影响 ×1.6。" },
    ],
  },
  // ---------- d30-oxygen 氧气泄漏 细节 ----------
  "d30-oxygen": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 20,
        note: "「氧气泄漏」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 20,
        note: "「氧气泄漏」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 50,
        note: "「氧气泄漏」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 150,
        note: "「氧气泄漏」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 150,
        note: "「氧气泄漏」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 8, note: "「氧气泄漏」期间每分钟额外消耗 food ×8。" },
      { resource: "water", amount: 8, note: "「氧气泄漏」期间每分钟额外消耗 water ×8。" },
      { resource: "credits", amount: 40, note: "「氧气泄漏」期间每分钟额外消耗 credits ×40。" },
      { resource: "steel", amount: 4, note: "「氧气泄漏」期间每分钟额外消耗 steel ×4。" },
      { resource: "power", amount: 20, note: "「氧气泄漏」期间每分钟额外消耗 power ×20。" },
      { resource: "oxygen", amount: 12, note: "「氧气泄漏」期间每分钟额外消耗 oxygen ×12。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.76, note: "「氧气泄漏」期间「居住舱」产量 ×0.76。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.52, note: "「氧气泄漏」期间「温室」产量 ×0.52。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.76, note: "「氧气泄漏」期间「采矿机」产量 ×0.76。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.76, note: "「氧气泄漏」期间「冶炼厂」产量 ×0.76。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.52, note: "「氧气泄漏」期间「实验室」产量 ×0.52。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.76, note: "「氧气泄漏」期间「太阳能板」产量 ×0.76。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.76, note: "「氧气泄漏」期间「贸易站」产量 ×0.76。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.76, note: "「氧气泄漏」期间「防御塔」产量 ×0.76。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -8, lossPct: 0.08, note: "「氧气泄漏」期间儿童士气 -8 点，损失率 0.1%。" },
      { group: "工人", moraleAdd: -8, lossPct: 0.2, note: "「氧气泄漏」期间工人士气 -8 点，损失率 0.2%。" },
      { group: "老人", moraleAdd: -8, lossPct: 0.32, note: "「氧气泄漏」期间老人士气 -8 点，损失率 0.3%。" },
      { group: "军人", moraleAdd: -8, lossPct: 0.12, note: "「氧气泄漏」期间军人士气 -8 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-ecocollapse", chance: 0.4, delaySec: 150, note: "「氧气泄漏」结束后 150 秒内，40% 概率引发「生态崩溃」。" },
      { disaster: "d30-water", chance: 0.4, delaySec: 150, note: "「氧气泄漏」结束后 150 秒内，40% 概率引发「水源污染」。" },
      { disaster: "d30-coup", chance: 0.4, delaySec: 150, note: "「氧气泄漏」结束后 150 秒内，40% 概率引发「政变」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「氧气泄漏」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.1, note: "夏季「氧气泄漏」触发概率 ×1.1。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「氧气泄漏」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 1.2, note: "冬季「氧气泄漏」触发概率 ×1.2。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「氧气泄漏」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「氧气泄漏」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「氧气泄漏」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「氧气泄漏」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「氧气泄漏」持续时间与影响 ×1.6。" },
    ],
  },
  // ---------- d30-water 水源污染 细节 ----------
  "d30-water": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 30,
        note: "「水源污染」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 30,
        note: "「水源污染」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 80,
        note: "「水源污染」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 240,
        note: "「水源污染」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 240,
        note: "「水源污染」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 8, note: "「水源污染」期间每分钟额外消耗 food ×8。" },
      { resource: "water", amount: 8, note: "「水源污染」期间每分钟额外消耗 water ×8。" },
      { resource: "credits", amount: 40, note: "「水源污染」期间每分钟额外消耗 credits ×40。" },
      { resource: "steel", amount: 4, note: "「水源污染」期间每分钟额外消耗 steel ×4。" },
      { resource: "power", amount: 20, note: "「水源污染」期间每分钟额外消耗 power ×20。" },
      { resource: "oxygen", amount: 12, note: "「水源污染」期间每分钟额外消耗 oxygen ×12。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.76, note: "「水源污染」期间「居住舱」产量 ×0.76。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.52, note: "「水源污染」期间「温室」产量 ×0.52。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.76, note: "「水源污染」期间「采矿机」产量 ×0.76。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.76, note: "「水源污染」期间「冶炼厂」产量 ×0.76。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.52, note: "「水源污染」期间「实验室」产量 ×0.52。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.76, note: "「水源污染」期间「太阳能板」产量 ×0.76。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.76, note: "「水源污染」期间「贸易站」产量 ×0.76。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.76, note: "「水源污染」期间「防御塔」产量 ×0.76。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -8, lossPct: 0.08, note: "「水源污染」期间儿童士气 -8 点，损失率 0.1%。" },
      { group: "工人", moraleAdd: -8, lossPct: 0.2, note: "「水源污染」期间工人士气 -8 点，损失率 0.2%。" },
      { group: "老人", moraleAdd: -8, lossPct: 0.32, note: "「水源污染」期间老人士气 -8 点，损失率 0.3%。" },
      { group: "军人", moraleAdd: -8, lossPct: 0.12, note: "「水源污染」期间军人士气 -8 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-ecocollapse", chance: 0.4, delaySec: 240, note: "「水源污染」结束后 240 秒内，40% 概率引发「生态崩溃」。" },
      { disaster: "d30-oxygen", chance: 0.4, delaySec: 240, note: "「水源污染」结束后 240 秒内，40% 概率引发「氧气泄漏」。" },
      { disaster: "d30-coup", chance: 0.4, delaySec: 240, note: "「水源污染」结束后 240 秒内，40% 概率引发「政变」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「水源污染」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.1, note: "夏季「水源污染」触发概率 ×1.1。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「水源污染」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 1.2, note: "冬季「水源污染」触发概率 ×1.2。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「水源污染」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「水源污染」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「水源污染」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「水源污染」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「水源污染」持续时间与影响 ×1.6。" },
    ],
  },
  // ---------- d30-alien 外星入侵 细节 ----------
  "d30-alien": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 120,
        note: "「外星入侵」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 120,
        note: "「外星入侵」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 200,
        note: "「外星入侵」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 600,
        note: "「外星入侵」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 600,
        note: "「外星入侵」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 10, note: "「外星入侵」期间每分钟额外消耗 food ×10。" },
      { resource: "water", amount: 10, note: "「外星入侵」期间每分钟额外消耗 water ×10。" },
      { resource: "credits", amount: 50, note: "「外星入侵」期间每分钟额外消耗 credits ×50。" },
      { resource: "steel", amount: 5, note: "「外星入侵」期间每分钟额外消耗 steel ×5。" },
      { resource: "power", amount: 25, note: "「外星入侵」期间每分钟额外消耗 power ×25。" },
      { resource: "oxygen", amount: 15, note: "「外星入侵」期间每分钟额外消耗 oxygen ×15。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.7, note: "「外星入侵」期间「居住舱」产量 ×0.7。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.7, note: "「外星入侵」期间「温室」产量 ×0.7。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.7, note: "「外星入侵」期间「采矿机」产量 ×0.7。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.7, note: "「外星入侵」期间「冶炼厂」产量 ×0.7。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.7, note: "「外星入侵」期间「实验室」产量 ×0.7。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.7, note: "「外星入侵」期间「太阳能板」产量 ×0.7。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.4, note: "「外星入侵」期间「贸易站」产量 ×0.4。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.4, note: "「外星入侵」期间「防御塔」产量 ×0.4。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -10, lossPct: 0.1, note: "「外星入侵」期间儿童士气 -10 点，损失率 0.1%。" },
      { group: "工人", moraleAdd: -10, lossPct: 0.25, note: "「外星入侵」期间工人士气 -10 点，损失率 0.2%。" },
      { group: "老人", moraleAdd: -10, lossPct: 0.4, note: "「外星入侵」期间老人士气 -10 点，损失率 0.4%。" },
      { group: "军人", moraleAdd: -10, lossPct: 0.15, note: "「外星入侵」期间军人士气 -10 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-pirate", chance: 0.5, delaySec: 600, note: "「外星入侵」结束后 600 秒内，50% 概率引发「海盗袭击」。" },
      { disaster: "d30-civilwar", chance: 0.5, delaySec: 600, note: "「外星入侵」结束后 600 秒内，50% 概率引发「内战」。" },
      { disaster: "d30-coup", chance: 0.5, delaySec: 600, note: "「外星入侵」结束后 600 秒内，50% 概率引发「政变」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「外星入侵」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.0, note: "夏季「外星入侵」触发概率 ×1.0。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「外星入侵」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 0.9, note: "冬季「外星入侵」触发概率 ×0.9。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「外星入侵」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「外星入侵」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「外星入侵」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「外星入侵」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「外星入侵」持续时间与影响 ×1.6。" },
    ],
  },
  // ---------- d30-pirate 海盗袭击 细节 ----------
  "d30-pirate": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 45,
        note: "「海盗袭击」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 45,
        note: "「海盗袭击」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 60,
        note: "「海盗袭击」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 180,
        note: "「海盗袭击」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 180,
        note: "「海盗袭击」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 6, note: "「海盗袭击」期间每分钟额外消耗 food ×6。" },
      { resource: "water", amount: 6, note: "「海盗袭击」期间每分钟额外消耗 water ×6。" },
      { resource: "credits", amount: 30, note: "「海盗袭击」期间每分钟额外消耗 credits ×30。" },
      { resource: "steel", amount: 3, note: "「海盗袭击」期间每分钟额外消耗 steel ×3。" },
      { resource: "power", amount: 15, note: "「海盗袭击」期间每分钟额外消耗 power ×15。" },
      { resource: "oxygen", amount: 9, note: "「海盗袭击」期间每分钟额外消耗 oxygen ×9。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.82, note: "「海盗袭击」期间「居住舱」产量 ×0.82。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.82, note: "「海盗袭击」期间「温室」产量 ×0.82。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.82, note: "「海盗袭击」期间「采矿机」产量 ×0.82。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.82, note: "「海盗袭击」期间「冶炼厂」产量 ×0.82。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.82, note: "「海盗袭击」期间「实验室」产量 ×0.82。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.82, note: "「海盗袭击」期间「太阳能板」产量 ×0.82。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.64, note: "「海盗袭击」期间「贸易站」产量 ×0.64。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.64, note: "「海盗袭击」期间「防御塔」产量 ×0.64。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -6, lossPct: 0.06, note: "「海盗袭击」期间儿童士气 -6 点，损失率 0.1%。" },
      { group: "工人", moraleAdd: -6, lossPct: 0.15, note: "「海盗袭击」期间工人士气 -6 点，损失率 0.2%。" },
      { group: "老人", moraleAdd: -6, lossPct: 0.24, note: "「海盗袭击」期间老人士气 -6 点，损失率 0.2%。" },
      { group: "军人", moraleAdd: -6, lossPct: 0.09, note: "「海盗袭击」期间军人士气 -6 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-alien", chance: 0.3, delaySec: 180, note: "「海盗袭击」结束后 180 秒内，30% 概率引发「外星入侵」。" },
      { disaster: "d30-civilwar", chance: 0.3, delaySec: 180, note: "「海盗袭击」结束后 180 秒内，30% 概率引发「内战」。" },
      { disaster: "d30-coup", chance: 0.3, delaySec: 180, note: "「海盗袭击」结束后 180 秒内，30% 概率引发「政变」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「海盗袭击」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.0, note: "夏季「海盗袭击」触发概率 ×1.0。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「海盗袭击」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 0.9, note: "冬季「海盗袭击」触发概率 ×0.9。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「海盗袭击」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「海盗袭击」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「海盗袭击」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「海盗袭击」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「海盗袭击」持续时间与影响 ×1.6。" },
    ],
  },
  // ---------- d30-civilwar 内战 细节 ----------
  "d30-civilwar": {
    responsePlaybook: [
      {
        step: "确认预警",
        phase: 0,
        action: "收到预警后立即打开灾难面板，确认类型与剩余预警时间。",
        deadlineSec: 90,
        note: "「内战」应急第 1 步：确认预警。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "检查库存",
        phase: 0,
        action: "核对食物、水、钢材、星币是否足够支付任一应对造价。",
        deadlineSec: 90,
        note: "「内战」应急第 1 步：检查库存。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "执行应对",
        phase: 1,
        action: "在灾难生效前执行最便宜的应对，优先选立即结束类。",
        deadlineSec: 300,
        note: "「内战」应急第 2 步：执行应对。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "止损调度",
        phase: 2,
        action: "生效期间把工人调离受影响建筑，暂停高耗能生产。",
        deadlineSec: 900,
        note: "「内战」应急第 3 步：止损调度。",
        check: "完成后在灾难面板打勾确认。",
      },
      {
        step: "灾后恢复",
        phase: 3,
        action: "灾难结束后按 aftermath 逐项恢复，优先修建筑、补库存。",
        deadlineSec: 900,
        note: "「内战」应急第 4 步：灾后恢复。",
        check: "完成后在灾难面板打勾确认。",
      },
    ],
    resourceDrainPerMin: [
      { resource: "food", amount: 10, note: "「内战」期间每分钟额外消耗 food ×10。" },
      { resource: "water", amount: 10, note: "「内战」期间每分钟额外消耗 water ×10。" },
      { resource: "credits", amount: 50, note: "「内战」期间每分钟额外消耗 credits ×50。" },
      { resource: "steel", amount: 5, note: "「内战」期间每分钟额外消耗 steel ×5。" },
      { resource: "power", amount: 25, note: "「内战」期间每分钟额外消耗 power ×25。" },
      { resource: "oxygen", amount: 15, note: "「内战」期间每分钟额外消耗 oxygen ×15。" },
    ],
    buildingEffects: [
      { building: "habitat", buildingName: "居住舱", outputMul: 0.7, note: "「内战」期间「居住舱」产量 ×0.7。" },
      { building: "greenhouse", buildingName: "温室", outputMul: 0.7, note: "「内战」期间「温室」产量 ×0.7。" },
      { building: "miner", buildingName: "采矿机", outputMul: 0.7, note: "「内战」期间「采矿机」产量 ×0.7。" },
      { building: "smelter", buildingName: "冶炼厂", outputMul: 0.7, note: "「内战」期间「冶炼厂」产量 ×0.7。" },
      { building: "lab", buildingName: "实验室", outputMul: 0.7, note: "「内战」期间「实验室」产量 ×0.7。" },
      { building: "solar", buildingName: "太阳能板", outputMul: 0.7, note: "「内战」期间「太阳能板」产量 ×0.7。" },
      { building: "trade", buildingName: "贸易站", outputMul: 0.4, note: "「内战」期间「贸易站」产量 ×0.4。" },
      { building: "defense", buildingName: "防御塔", outputMul: 0.4, note: "「内战」期间「防御塔」产量 ×0.4。" },
    ],
    populationEffects: [
      { group: "儿童", moraleAdd: -10, lossPct: 0.1, note: "「内战」期间儿童士气 -10 点，损失率 0.1%。" },
      { group: "工人", moraleAdd: -10, lossPct: 0.25, note: "「内战」期间工人士气 -10 点，损失率 0.2%。" },
      { group: "老人", moraleAdd: -10, lossPct: 0.4, note: "「内战」期间老人士气 -10 点，损失率 0.4%。" },
      { group: "军人", moraleAdd: -10, lossPct: 0.15, note: "「内战」期间军人士气 -10 点，损失率 0.1%。" },
    ],
    chainReactions: [
      { disaster: "d30-alien", chance: 0.5, delaySec: 900, note: "「内战」结束后 900 秒内，50% 概率引发「外星入侵」。" },
      { disaster: "d30-pirate", chance: 0.5, delaySec: 900, note: "「内战」结束后 900 秒内，50% 概率引发「海盗袭击」。" },
      { disaster: "d30-coup", chance: 0.5, delaySec: 900, note: "「内战」结束后 900 秒内，50% 概率引发「政变」。" },
    ],
    seasonalModifiers: [
      { season: "春季", chanceMul: 0.9, note: "春季「内战」触发概率 ×0.9。" },
      { season: "夏季", chanceMul: 1.0, note: "夏季「内战」触发概率 ×1.0。" },
      { season: "秋季", chanceMul: 1.0, note: "秋季「内战」触发概率 ×1.0。" },
      { season: "冬季", chanceMul: 0.9, note: "冬季「内战」触发概率 ×0.9。" },
    ],
    difficultyScaling: [
      { difficulty: "简单", durationMul: 0.7, effectMul: 0.7, note: "持续时间与影响 ×0.7，预警 +10 秒。" },
      { difficulty: "普通", durationMul: 1.0, effectMul: 1.0, note: "按标准数值结算。" },
      { difficulty: "困难", durationMul: 1.3, effectMul: 1.3, note: "持续时间与影响 ×1.3，预警 -5 秒。" },
    ],
    severityLadder: [
      { level: 1, durationMul: 0.8, effectMul: 0.8, note: "严重度 1 级：「内战」持续时间与影响 ×0.8。" },
      { level: 2, durationMul: 1.0, effectMul: 1.0, note: "严重度 2 级：「内战」持续时间与影响 ×1.0。" },
      { level: 3, durationMul: 1.2, effectMul: 1.2, note: "严重度 3 级：「内战」持续时间与影响 ×1.2。" },
      { level: 4, durationMul: 1.4, effectMul: 1.4, note: "严重度 4 级：「内战」持续时间与影响 ×1.4。" },
      { level: 5, durationMul: 1.6, effectMul: 1.6, note: "严重度 5 级：「内战」持续时间与影响 ×1.6。" },
    ],
  },
};

/* 载入时把细节块并入主定义（mergeDisastersV30 之前即可用）。 */
for (const _did of Object.keys(DISASTERS_V30_DETAIL)) {
  if (DISASTERS_V30[_did]) DISASTERS_V30[_did].detail = DISASTERS_V30_DETAIL[_did];
}

/* 细节块自检：每种灾难 5 步手册、6 项流失、8 类建筑影响、4 类人口影响、3 条连锁、4 季修正、3 档难度、5 级梯度。 */
function selfTestDisastersV30Detail() {
  const errors = [];
  for (const id of DISASTERS_V30_ORDER) {
    const d = (DISASTERS_V30[id] || {}).detail;
    if (!d) { errors.push(id + ': 细节块缺失'); continue; }
    if (d.responsePlaybook.length !== 5) errors.push(id + ': 应急手册不足 5 步');
    if (d.resourceDrainPerMin.length !== 6) errors.push(id + ': 资源流失不足 6 项');
    if (d.buildingEffects.length !== 8) errors.push(id + ': 建筑影响不足 8 类');
    if (d.populationEffects.length !== 4) errors.push(id + ': 人口影响不足 4 类');
    if (d.chainReactions.length !== 3) errors.push(id + ': 连锁反应不足 3 条');
    if (d.seasonalModifiers.length !== 4) errors.push(id + ': 季节修正不足 4 条');
    if (d.difficultyScaling.length !== 3) errors.push(id + ': 难度修正不足 3 档');
    if (d.severityLadder.length !== 5) errors.push(id + ': 严重度梯度不足 5 级');
  }
  return { total: DISASTERS_V30_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.DISASTERS_V30_DETAIL = DISASTERS_V30_DETAIL;
  module.exports.selfTestDisastersV30Detail = selfTestDisastersV30Detail;
}

/* ============ §7 灾难细节块·二（预警征兆 / 建筑加固 / 灾后任务，载入时并入） ============ */
const DISASTERS_V30_DETAIL2 = {
  // ---------- d30-coup 政变 细节·二 ----------
  "d30-coup": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「政变」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「政变」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「政变」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「政变」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「政变」前兆「历史规律」：上次同类灾难已过去 40 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 100, damageReduction: 0.5, note: "加固「居住舱」花费钢材 100，「政变」造成的建筑伤害 -50%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 100, damageReduction: 0.5, note: "加固「温室」花费钢材 100，「政变」造成的建筑伤害 -50%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 100, damageReduction: 0.5, note: "加固「采矿机」花费钢材 100，「政变」造成的建筑伤害 -50%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 100, damageReduction: 0.5, note: "加固「冶炼厂」花费钢材 100，「政变」造成的建筑伤害 -50%。" },
      { building: "lab", buildingName: "实验室", costSteel: 100, damageReduction: 0.5, note: "加固「实验室」花费钢材 100，「政变」造成的建筑伤害 -50%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 100, damageReduction: 0.5, note: "加固「防御塔」花费钢材 100，「政变」造成的建筑伤害 -50%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
  // ---------- d30-strike 大罢工 细节·二 ----------
  "d30-strike": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「大罢工」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「大罢工」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「大罢工」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「大罢工」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「大罢工」前兆「历史规律」：上次同类灾难已过去 25 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 60, damageReduction: 0.3, note: "加固「居住舱」花费钢材 60，「大罢工」造成的建筑伤害 -30%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 60, damageReduction: 0.3, note: "加固「温室」花费钢材 60，「大罢工」造成的建筑伤害 -30%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 60, damageReduction: 0.3, note: "加固「采矿机」花费钢材 60，「大罢工」造成的建筑伤害 -30%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 60, damageReduction: 0.3, note: "加固「冶炼厂」花费钢材 60，「大罢工」造成的建筑伤害 -30%。" },
      { building: "lab", buildingName: "实验室", costSteel: 60, damageReduction: 0.3, note: "加固「实验室」花费钢材 60，「大罢工」造成的建筑伤害 -30%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 60, damageReduction: 0.3, note: "加固「防御塔」花费钢材 60，「大罢工」造成的建筑伤害 -30%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
  // ---------- d30-protest 大规模抗议 细节·二 ----------
  "d30-protest": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「大规模抗议」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「大规模抗议」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「大规模抗议」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「大规模抗议」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「大规模抗议」前兆「历史规律」：上次同类灾难已过去 20 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 40, damageReduction: 0.2, note: "加固「居住舱」花费钢材 40，「大规模抗议」造成的建筑伤害 -20%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 40, damageReduction: 0.2, note: "加固「温室」花费钢材 40，「大规模抗议」造成的建筑伤害 -20%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 40, damageReduction: 0.2, note: "加固「采矿机」花费钢材 40，「大规模抗议」造成的建筑伤害 -20%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 40, damageReduction: 0.2, note: "加固「冶炼厂」花费钢材 40，「大规模抗议」造成的建筑伤害 -20%。" },
      { building: "lab", buildingName: "实验室", costSteel: 40, damageReduction: 0.2, note: "加固「实验室」花费钢材 40，「大规模抗议」造成的建筑伤害 -20%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 40, damageReduction: 0.2, note: "加固「防御塔」花费钢材 40，「大规模抗议」造成的建筑伤害 -20%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
  // ---------- d30-corrupt 腐败丑闻 细节·二 ----------
  "d30-corrupt": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「腐败丑闻」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「腐败丑闻」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「腐败丑闻」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「腐败丑闻」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「腐败丑闻」前兆「历史规律」：上次同类灾难已过去 30 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 60, damageReduction: 0.3, note: "加固「居住舱」花费钢材 60，「腐败丑闻」造成的建筑伤害 -30%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 60, damageReduction: 0.3, note: "加固「温室」花费钢材 60，「腐败丑闻」造成的建筑伤害 -30%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 60, damageReduction: 0.3, note: "加固「采矿机」花费钢材 60，「腐败丑闻」造成的建筑伤害 -30%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 60, damageReduction: 0.3, note: "加固「冶炼厂」花费钢材 60，「腐败丑闻」造成的建筑伤害 -30%。" },
      { building: "lab", buildingName: "实验室", costSteel: 60, damageReduction: 0.3, note: "加固「实验室」花费钢材 60，「腐败丑闻」造成的建筑伤害 -30%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 60, damageReduction: 0.3, note: "加固「防御塔」花费钢材 60，「腐败丑闻」造成的建筑伤害 -30%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
  // ---------- d30-ecocollapse 生态崩溃 细节·二 ----------
  "d30-ecocollapse": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「生态崩溃」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「生态崩溃」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「生态崩溃」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「生态崩溃」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「生态崩溃」前兆「历史规律」：上次同类灾难已过去 50 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 100, damageReduction: 0.5, note: "加固「居住舱」花费钢材 100，「生态崩溃」造成的建筑伤害 -50%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 100, damageReduction: 0.5, note: "加固「温室」花费钢材 100，「生态崩溃」造成的建筑伤害 -50%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 100, damageReduction: 0.5, note: "加固「采矿机」花费钢材 100，「生态崩溃」造成的建筑伤害 -50%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 100, damageReduction: 0.5, note: "加固「冶炼厂」花费钢材 100，「生态崩溃」造成的建筑伤害 -50%。" },
      { building: "lab", buildingName: "实验室", costSteel: 100, damageReduction: 0.5, note: "加固「实验室」花费钢材 100，「生态崩溃」造成的建筑伤害 -50%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 100, damageReduction: 0.5, note: "加固「防御塔」花费钢材 100，「生态崩溃」造成的建筑伤害 -50%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
  // ---------- d30-oxygen 氧气泄漏 细节·二 ----------
  "d30-oxygen": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「氧气泄漏」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「氧气泄漏」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「氧气泄漏」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「氧气泄漏」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「氧气泄漏」前兆「历史规律」：上次同类灾难已过去 20 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 80, damageReduction: 0.4, note: "加固「居住舱」花费钢材 80，「氧气泄漏」造成的建筑伤害 -40%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 80, damageReduction: 0.4, note: "加固「温室」花费钢材 80，「氧气泄漏」造成的建筑伤害 -40%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 80, damageReduction: 0.4, note: "加固「采矿机」花费钢材 80，「氧气泄漏」造成的建筑伤害 -40%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 80, damageReduction: 0.4, note: "加固「冶炼厂」花费钢材 80，「氧气泄漏」造成的建筑伤害 -40%。" },
      { building: "lab", buildingName: "实验室", costSteel: 80, damageReduction: 0.4, note: "加固「实验室」花费钢材 80，「氧气泄漏」造成的建筑伤害 -40%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 80, damageReduction: 0.4, note: "加固「防御塔」花费钢材 80，「氧气泄漏」造成的建筑伤害 -40%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
  // ---------- d30-water 水源污染 细节·二 ----------
  "d30-water": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「水源污染」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「水源污染」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「水源污染」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「水源污染」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「水源污染」前兆「历史规律」：上次同类灾难已过去 22 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 80, damageReduction: 0.4, note: "加固「居住舱」花费钢材 80，「水源污染」造成的建筑伤害 -40%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 80, damageReduction: 0.4, note: "加固「温室」花费钢材 80，「水源污染」造成的建筑伤害 -40%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 80, damageReduction: 0.4, note: "加固「采矿机」花费钢材 80，「水源污染」造成的建筑伤害 -40%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 80, damageReduction: 0.4, note: "加固「冶炼厂」花费钢材 80，「水源污染」造成的建筑伤害 -40%。" },
      { building: "lab", buildingName: "实验室", costSteel: 80, damageReduction: 0.4, note: "加固「实验室」花费钢材 80，「水源污染」造成的建筑伤害 -40%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 80, damageReduction: 0.4, note: "加固「防御塔」花费钢材 80，「水源污染」造成的建筑伤害 -40%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
  // ---------- d30-alien 外星入侵 细节·二 ----------
  "d30-alien": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「外星入侵」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「外星入侵」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「外星入侵」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「外星入侵」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「外星入侵」前兆「历史规律」：上次同类灾难已过去 70 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 100, damageReduction: 0.5, note: "加固「居住舱」花费钢材 100，「外星入侵」造成的建筑伤害 -50%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 100, damageReduction: 0.5, note: "加固「温室」花费钢材 100，「外星入侵」造成的建筑伤害 -50%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 100, damageReduction: 0.5, note: "加固「采矿机」花费钢材 100，「外星入侵」造成的建筑伤害 -50%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 100, damageReduction: 0.5, note: "加固「冶炼厂」花费钢材 100，「外星入侵」造成的建筑伤害 -50%。" },
      { building: "lab", buildingName: "实验室", costSteel: 100, damageReduction: 0.5, note: "加固「实验室」花费钢材 100，「外星入侵」造成的建筑伤害 -50%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 100, damageReduction: 0.5, note: "加固「防御塔」花费钢材 100，「外星入侵」造成的建筑伤害 -50%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
  // ---------- d30-pirate 海盗袭击 细节·二 ----------
  "d30-pirate": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「海盗袭击」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「海盗袭击」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「海盗袭击」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「海盗袭击」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「海盗袭击」前兆「历史规律」：上次同类灾难已过去 30 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 60, damageReduction: 0.3, note: "加固「居住舱」花费钢材 60，「海盗袭击」造成的建筑伤害 -30%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 60, damageReduction: 0.3, note: "加固「温室」花费钢材 60，「海盗袭击」造成的建筑伤害 -30%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 60, damageReduction: 0.3, note: "加固「采矿机」花费钢材 60，「海盗袭击」造成的建筑伤害 -30%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 60, damageReduction: 0.3, note: "加固「冶炼厂」花费钢材 60，「海盗袭击」造成的建筑伤害 -30%。" },
      { building: "lab", buildingName: "实验室", costSteel: 60, damageReduction: 0.3, note: "加固「实验室」花费钢材 60，「海盗袭击」造成的建筑伤害 -30%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 60, damageReduction: 0.3, note: "加固「防御塔」花费钢材 60，「海盗袭击」造成的建筑伤害 -30%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
  // ---------- d30-civilwar 内战 细节·二 ----------
  "d30-civilwar": {
    earlyWarningSigns: [
      { sign: "指标异常", leadMin: 5, note: "「内战」前兆「指标异常」：相关指标连续 3 分钟偏离正常值 20%% 以上。" },
      { sign: "居民抱怨", leadMin: 5, note: "「内战」前兆「居民抱怨」：幸福度 / 稳定度开始下滑，投诉量上升。" },
      { sign: "设备老化", leadMin: 5, note: "「内战」前兆「设备老化」：相关建筑老化度超过 50%%，故障率上升。" },
      { sign: "外部信号", leadMin: 5, note: "「内战」前兆「外部信号」：气象站 / 深空监听站捕捉到异常信号。" },
      { sign: "历史规律", leadMin: 5, note: "「内战」前兆「历史规律」：上次同类灾难已过去 90 分钟，进入高发窗口。" },
    ],
    buildingHardening: [
      { building: "habitat", buildingName: "居住舱", costSteel: 100, damageReduction: 0.5, note: "加固「居住舱」花费钢材 100，「内战」造成的建筑伤害 -50%。" },
      { building: "greenhouse", buildingName: "温室", costSteel: 100, damageReduction: 0.5, note: "加固「温室」花费钢材 100，「内战」造成的建筑伤害 -50%。" },
      { building: "miner", buildingName: "采矿机", costSteel: 100, damageReduction: 0.5, note: "加固「采矿机」花费钢材 100，「内战」造成的建筑伤害 -50%。" },
      { building: "smelter", buildingName: "冶炼厂", costSteel: 100, damageReduction: 0.5, note: "加固「冶炼厂」花费钢材 100，「内战」造成的建筑伤害 -50%。" },
      { building: "lab", buildingName: "实验室", costSteel: 100, damageReduction: 0.5, note: "加固「实验室」花费钢材 100，「内战」造成的建筑伤害 -50%。" },
      { building: "defense", buildingName: "防御塔", costSteel: 100, damageReduction: 0.5, note: "加固「防御塔」花费钢材 100，「内战」造成的建筑伤害 -50%。" },
    ],
    postDisasterMissions: [
      { mission: "损失评估", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「损失评估」：统计人口、资源、建筑损失，生成报告。完成后稳定度 +2。" },
      { mission: "紧急修复", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「紧急修复」：优先修复受损的生产建筑，恢复产能。完成后稳定度 +2。" },
      { mission: "物资补充", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「物资补充」：通过贸易紧急采购短缺物资。完成后稳定度 +2。" },
      { mission: "心理疏导", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「心理疏导」：派遣心理医生，安抚受灾居民。完成后稳定度 +2。" },
      { mission: "总结复盘", durationMin: 5, reward: "稳定度 +2", note: "灾后任务「总结复盘」：分析灾难成因，升级防御与预警。完成后稳定度 +2。" },
    ],
  },
};

for (const _did of Object.keys(DISASTERS_V30_DETAIL2)) {
  if (DISASTERS_V30[_did]) {
    DISASTERS_V30[_did].detail2 = DISASTERS_V30_DETAIL2[_did];
    if (DISASTERS_V30[_did].detail) Object.assign(DISASTERS_V30[_did].detail, DISASTERS_V30_DETAIL2[_did]);
  }
}

function selfTestDisastersV30Detail2() {
  const errors = [];
  for (const id of DISASTERS_V30_ORDER) {
    const d = (DISASTERS_V30[id] || {}).detail2;
    if (!d) { errors.push(id + ': 细节块2缺失'); continue; }
    if (d.earlyWarningSigns.length !== 5) errors.push(id + ': 预警征兆不足 5 条');
    if (d.buildingHardening.length !== 6) errors.push(id + ': 建筑加固不足 6 类');
    if (d.postDisasterMissions.length !== 5) errors.push(id + ': 灾后任务不足 5 个');
  }
  return { total: DISASTERS_V30_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.DISASTERS_V30_DETAIL2 = DISASTERS_V30_DETAIL2;
  module.exports.selfTestDisastersV30Detail2 = selfTestDisastersV30Detail2;
}

/* ============ §8 灾难细节块·三（全程时间线，载入时并入） ============ */
const DISASTERS_V30_DETAIL3 = {
  // ---------- d30-coup 政变 时间线 ----------
  "d30-coup": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「政变」预警，玩家有 60 秒准备。",
        advice: "准备应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「政变」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 60,
        phase: "灾难开始",
        event: "「政变」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+60 秒：「政变」灾难开始。",
        note: "时间点 60 秒：灾难开始。",
      },
      {
        tSec: 135,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+135 秒：「政变」影响扩散。",
        note: "时间点 135 秒：影响扩散。",
      },
      {
        tSec: 210,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+210 秒：「政变」中期高峰。",
        note: "时间点 210 秒：中期高峰。",
      },
      {
        tSec: 285,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.8,
        log: "T+285 秒：「政变」衰退开始。",
        note: "时间点 285 秒：衰退开始。",
      },
      {
        tSec: 360,
        phase: "灾难结束",
        event: "「政变」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+360 秒：「政变」灾难结束。",
        note: "时间点 360 秒：灾难结束。",
      },
      {
        tSec: 420,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+420 秒：「政变」损失评估。",
        note: "时间点 420 秒：损失评估。",
      },
      {
        tSec: 540,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+540 秒：「政变」紧急修复。",
        note: "时间点 540 秒：紧急修复。",
      },
      {
        tSec: 660,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+660 秒：「政变」物资补充。",
        note: "时间点 660 秒：物资补充。",
      },
      {
        tSec: 960,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+960 秒：「政变」复盘总结。",
        note: "时间点 960 秒：复盘总结。",
      },
    ],
  },
  // ---------- d30-strike 大罢工 时间线 ----------
  "d30-strike": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「大罢工」预警，玩家有 45 秒准备。",
        advice: "准备应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「大罢工」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 45,
        phase: "灾难开始",
        event: "「大罢工」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+45 秒：「大罢工」灾难开始。",
        note: "时间点 45 秒：灾难开始。",
      },
      {
        tSec: 105,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+105 秒：「大罢工」影响扩散。",
        note: "时间点 105 秒：影响扩散。",
      },
      {
        tSec: 165,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+165 秒：「大罢工」中期高峰。",
        note: "时间点 165 秒：中期高峰。",
      },
      {
        tSec: 225,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.8,
        log: "T+225 秒：「大罢工」衰退开始。",
        note: "时间点 225 秒：衰退开始。",
      },
      {
        tSec: 285,
        phase: "灾难结束",
        event: "「大罢工」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+285 秒：「大罢工」灾难结束。",
        note: "时间点 285 秒：灾难结束。",
      },
      {
        tSec: 345,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+345 秒：「大罢工」损失评估。",
        note: "时间点 345 秒：损失评估。",
      },
      {
        tSec: 465,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+465 秒：「大罢工」紧急修复。",
        note: "时间点 465 秒：紧急修复。",
      },
      {
        tSec: 585,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+585 秒：「大罢工」物资补充。",
        note: "时间点 585 秒：物资补充。",
      },
      {
        tSec: 885,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+885 秒：「大罢工」复盘总结。",
        note: "时间点 885 秒：复盘总结。",
      },
    ],
  },
  // ---------- d30-protest 大规模抗议 时间线 ----------
  "d30-protest": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「大规模抗议」预警，玩家有 30 秒准备。",
        advice: "准备应对",
        severityAtPoint: 2,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「大规模抗议」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 30,
        phase: "灾难开始",
        event: "「大规模抗议」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 2,
        effectMulAtPoint: 1.0,
        log: "T+30 秒：「大规模抗议」灾难开始。",
        note: "时间点 30 秒：灾难开始。",
      },
      {
        tSec: 75,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 2,
        effectMulAtPoint: 1.0,
        log: "T+75 秒：「大规模抗议」影响扩散。",
        note: "时间点 75 秒：影响扩散。",
      },
      {
        tSec: 120,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 2,
        effectMulAtPoint: 1.0,
        log: "T+120 秒：「大规模抗议」中期高峰。",
        note: "时间点 120 秒：中期高峰。",
      },
      {
        tSec: 165,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 2,
        effectMulAtPoint: 0.8,
        log: "T+165 秒：「大规模抗议」衰退开始。",
        note: "时间点 165 秒：衰退开始。",
      },
      {
        tSec: 210,
        phase: "灾难结束",
        event: "「大规模抗议」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+210 秒：「大规模抗议」灾难结束。",
        note: "时间点 210 秒：灾难结束。",
      },
      {
        tSec: 270,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+270 秒：「大规模抗议」损失评估。",
        note: "时间点 270 秒：损失评估。",
      },
      {
        tSec: 390,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+390 秒：「大规模抗议」紧急修复。",
        note: "时间点 390 秒：紧急修复。",
      },
      {
        tSec: 510,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+510 秒：「大规模抗议」物资补充。",
        note: "时间点 510 秒：物资补充。",
      },
      {
        tSec: 810,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 2,
        effectMulAtPoint: 0.5,
        log: "T+810 秒：「大规模抗议」复盘总结。",
        note: "时间点 810 秒：复盘总结。",
      },
    ],
  },
  // ---------- d30-corrupt 腐败丑闻 时间线 ----------
  "d30-corrupt": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「腐败丑闻」预警，玩家有 0 秒准备。",
        advice: "准备应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「腐败丑闻」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 0,
        phase: "灾难开始",
        event: "「腐败丑闻」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「腐败丑闻」灾难开始。",
        note: "时间点 0 秒：灾难开始。",
      },
      {
        tSec: 50,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+50 秒：「腐败丑闻」影响扩散。",
        note: "时间点 50 秒：影响扩散。",
      },
      {
        tSec: 100,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+100 秒：「腐败丑闻」中期高峰。",
        note: "时间点 100 秒：中期高峰。",
      },
      {
        tSec: 150,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.8,
        log: "T+150 秒：「腐败丑闻」衰退开始。",
        note: "时间点 150 秒：衰退开始。",
      },
      {
        tSec: 200,
        phase: "灾难结束",
        event: "「腐败丑闻」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+200 秒：「腐败丑闻」灾难结束。",
        note: "时间点 200 秒：灾难结束。",
      },
      {
        tSec: 260,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+260 秒：「腐败丑闻」损失评估。",
        note: "时间点 260 秒：损失评估。",
      },
      {
        tSec: 380,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+380 秒：「腐败丑闻」紧急修复。",
        note: "时间点 380 秒：紧急修复。",
      },
      {
        tSec: 500,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+500 秒：「腐败丑闻」物资补充。",
        note: "时间点 500 秒：物资补充。",
      },
      {
        tSec: 800,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+800 秒：「腐败丑闻」复盘总结。",
        note: "时间点 800 秒：复盘总结。",
      },
    ],
  },
  // ---------- d30-ecocollapse 生态崩溃 时间线 ----------
  "d30-ecocollapse": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「生态崩溃」预警，玩家有 90 秒准备。",
        advice: "准备应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「生态崩溃」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 90,
        phase: "灾难开始",
        event: "「生态崩溃」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+90 秒：「生态崩溃」灾难开始。",
        note: "时间点 90 秒：灾难开始。",
      },
      {
        tSec: 195,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+195 秒：「生态崩溃」影响扩散。",
        note: "时间点 195 秒：影响扩散。",
      },
      {
        tSec: 300,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+300 秒：「生态崩溃」中期高峰。",
        note: "时间点 300 秒：中期高峰。",
      },
      {
        tSec: 405,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.8,
        log: "T+405 秒：「生态崩溃」衰退开始。",
        note: "时间点 405 秒：衰退开始。",
      },
      {
        tSec: 510,
        phase: "灾难结束",
        event: "「生态崩溃」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+510 秒：「生态崩溃」灾难结束。",
        note: "时间点 510 秒：灾难结束。",
      },
      {
        tSec: 570,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+570 秒：「生态崩溃」损失评估。",
        note: "时间点 570 秒：损失评估。",
      },
      {
        tSec: 690,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+690 秒：「生态崩溃」紧急修复。",
        note: "时间点 690 秒：紧急修复。",
      },
      {
        tSec: 810,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+810 秒：「生态崩溃」物资补充。",
        note: "时间点 810 秒：物资补充。",
      },
      {
        tSec: 1110,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1110 秒：「生态崩溃」复盘总结。",
        note: "时间点 1110 秒：复盘总结。",
      },
    ],
  },
  // ---------- d30-oxygen 氧气泄漏 时间线 ----------
  "d30-oxygen": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「氧气泄漏」预警，玩家有 20 秒准备。",
        advice: "准备应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「氧气泄漏」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 20,
        phase: "灾难开始",
        event: "「氧气泄漏」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+20 秒：「氧气泄漏」灾难开始。",
        note: "时间点 20 秒：灾难开始。",
      },
      {
        tSec: 57,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+57 秒：「氧气泄漏」影响扩散。",
        note: "时间点 57 秒：影响扩散。",
      },
      {
        tSec: 95,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+95 秒：「氧气泄漏」中期高峰。",
        note: "时间点 95 秒：中期高峰。",
      },
      {
        tSec: 132,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.8,
        log: "T+132 秒：「氧气泄漏」衰退开始。",
        note: "时间点 132 秒：衰退开始。",
      },
      {
        tSec: 170,
        phase: "灾难结束",
        event: "「氧气泄漏」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+170 秒：「氧气泄漏」灾难结束。",
        note: "时间点 170 秒：灾难结束。",
      },
      {
        tSec: 230,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+230 秒：「氧气泄漏」损失评估。",
        note: "时间点 230 秒：损失评估。",
      },
      {
        tSec: 350,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+350 秒：「氧气泄漏」紧急修复。",
        note: "时间点 350 秒：紧急修复。",
      },
      {
        tSec: 470,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+470 秒：「氧气泄漏」物资补充。",
        note: "时间点 470 秒：物资补充。",
      },
      {
        tSec: 770,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+770 秒：「氧气泄漏」复盘总结。",
        note: "时间点 770 秒：复盘总结。",
      },
    ],
  },
  // ---------- d30-water 水源污染 时间线 ----------
  "d30-water": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「水源污染」预警，玩家有 30 秒准备。",
        advice: "准备应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「水源污染」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 30,
        phase: "灾难开始",
        event: "「水源污染」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+30 秒：「水源污染」灾难开始。",
        note: "时间点 30 秒：灾难开始。",
      },
      {
        tSec: 90,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+90 秒：「水源污染」影响扩散。",
        note: "时间点 90 秒：影响扩散。",
      },
      {
        tSec: 150,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 4,
        effectMulAtPoint: 1.0,
        log: "T+150 秒：「水源污染」中期高峰。",
        note: "时间点 150 秒：中期高峰。",
      },
      {
        tSec: 210,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.8,
        log: "T+210 秒：「水源污染」衰退开始。",
        note: "时间点 210 秒：衰退开始。",
      },
      {
        tSec: 270,
        phase: "灾难结束",
        event: "「水源污染」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+270 秒：「水源污染」灾难结束。",
        note: "时间点 270 秒：灾难结束。",
      },
      {
        tSec: 330,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+330 秒：「水源污染」损失评估。",
        note: "时间点 330 秒：损失评估。",
      },
      {
        tSec: 450,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+450 秒：「水源污染」紧急修复。",
        note: "时间点 450 秒：紧急修复。",
      },
      {
        tSec: 570,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+570 秒：「水源污染」物资补充。",
        note: "时间点 570 秒：物资补充。",
      },
      {
        tSec: 870,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 4,
        effectMulAtPoint: 0.5,
        log: "T+870 秒：「水源污染」复盘总结。",
        note: "时间点 870 秒：复盘总结。",
      },
    ],
  },
  // ---------- d30-alien 外星入侵 时间线 ----------
  "d30-alien": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「外星入侵」预警，玩家有 120 秒准备。",
        advice: "准备应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「外星入侵」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 120,
        phase: "灾难开始",
        event: "「外星入侵」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+120 秒：「外星入侵」灾难开始。",
        note: "时间点 120 秒：灾难开始。",
      },
      {
        tSec: 270,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+270 秒：「外星入侵」影响扩散。",
        note: "时间点 270 秒：影响扩散。",
      },
      {
        tSec: 420,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+420 秒：「外星入侵」中期高峰。",
        note: "时间点 420 秒：中期高峰。",
      },
      {
        tSec: 570,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.8,
        log: "T+570 秒：「外星入侵」衰退开始。",
        note: "时间点 570 秒：衰退开始。",
      },
      {
        tSec: 720,
        phase: "灾难结束",
        event: "「外星入侵」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+720 秒：「外星入侵」灾难结束。",
        note: "时间点 720 秒：灾难结束。",
      },
      {
        tSec: 780,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+780 秒：「外星入侵」损失评估。",
        note: "时间点 780 秒：损失评估。",
      },
      {
        tSec: 900,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+900 秒：「外星入侵」紧急修复。",
        note: "时间点 900 秒：紧急修复。",
      },
      {
        tSec: 1020,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1020 秒：「外星入侵」物资补充。",
        note: "时间点 1020 秒：物资补充。",
      },
      {
        tSec: 1320,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1320 秒：「外星入侵」复盘总结。",
        note: "时间点 1320 秒：复盘总结。",
      },
    ],
  },
  // ---------- d30-pirate 海盗袭击 时间线 ----------
  "d30-pirate": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「海盗袭击」预警，玩家有 45 秒准备。",
        advice: "准备应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「海盗袭击」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 45,
        phase: "灾难开始",
        event: "「海盗袭击」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+45 秒：「海盗袭击」灾难开始。",
        note: "时间点 45 秒：灾难开始。",
      },
      {
        tSec: 90,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+90 秒：「海盗袭击」影响扩散。",
        note: "时间点 90 秒：影响扩散。",
      },
      {
        tSec: 135,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 3,
        effectMulAtPoint: 1.0,
        log: "T+135 秒：「海盗袭击」中期高峰。",
        note: "时间点 135 秒：中期高峰。",
      },
      {
        tSec: 180,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.8,
        log: "T+180 秒：「海盗袭击」衰退开始。",
        note: "时间点 180 秒：衰退开始。",
      },
      {
        tSec: 225,
        phase: "灾难结束",
        event: "「海盗袭击」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+225 秒：「海盗袭击」灾难结束。",
        note: "时间点 225 秒：灾难结束。",
      },
      {
        tSec: 285,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+285 秒：「海盗袭击」损失评估。",
        note: "时间点 285 秒：损失评估。",
      },
      {
        tSec: 405,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+405 秒：「海盗袭击」紧急修复。",
        note: "时间点 405 秒：紧急修复。",
      },
      {
        tSec: 525,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+525 秒：「海盗袭击」物资补充。",
        note: "时间点 525 秒：物资补充。",
      },
      {
        tSec: 825,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 3,
        effectMulAtPoint: 0.5,
        log: "T+825 秒：「海盗袭击」复盘总结。",
        note: "时间点 825 秒：复盘总结。",
      },
    ],
  },
  // ---------- d30-civilwar 内战 时间线 ----------
  "d30-civilwar": {
    timeline: [
      {
        tSec: 0,
        phase: "预警发布",
        event: "预警系统发布「内战」预警，玩家有 90 秒准备。",
        advice: "准备应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+0 秒：「内战」预警发布。",
        note: "时间点 0 秒：预警发布。",
      },
      {
        tSec: 90,
        phase: "灾难开始",
        event: "「内战」正式生效，影响按 100%% 结算。",
        advice: "执行应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+90 秒：「内战」灾难开始。",
        note: "时间点 90 秒：灾难开始。",
      },
      {
        tSec: 315,
        phase: "影响扩散",
        event: "影响扩散到全城，次生损失开始出现。",
        advice: "止损调度",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+315 秒：「内战」影响扩散。",
        note: "时间点 315 秒：影响扩散。",
      },
      {
        tSec: 540,
        phase: "中期高峰",
        event: "灾难进入持续期，影响按 80%% 结算。",
        advice: "坚持应对",
        severityAtPoint: 5,
        effectMulAtPoint: 1.0,
        log: "T+540 秒：「内战」中期高峰。",
        note: "时间点 540 秒：中期高峰。",
      },
      {
        tSec: 765,
        phase: "衰退开始",
        event: "灾难进入衰退期，影响按 50%% 结算。",
        advice: "准备恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.8,
        log: "T+765 秒：「内战」衰退开始。",
        note: "时间点 765 秒：衰退开始。",
      },
      {
        tSec: 990,
        phase: "灾难结束",
        event: "「内战」结束，进入恢复期。",
        advice: "灾后恢复",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+990 秒：「内战」灾难结束。",
        note: "时间点 990 秒：灾难结束。",
      },
      {
        tSec: 1050,
        phase: "损失评估",
        event: "完成损失评估，生成灾后报告。",
        advice: "统计损失",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1050 秒：「内战」损失评估。",
        note: "时间点 1050 秒：损失评估。",
      },
      {
        tSec: 1170,
        phase: "紧急修复",
        event: "优先修复受损建筑，恢复产能。",
        advice: "修复建筑",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1170 秒：「内战」紧急修复。",
        note: "时间点 1170 秒：紧急修复。",
      },
      {
        tSec: 1290,
        phase: "物资补充",
        event: "通过贸易补充短缺物资。",
        advice: "补充库存",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1290 秒：「内战」物资补充。",
        note: "时间点 1290 秒：物资补充。",
      },
      {
        tSec: 1590,
        phase: "复盘总结",
        event: "复盘灾难成因，升级防御与预警。",
        advice: "升级防御",
        severityAtPoint: 5,
        effectMulAtPoint: 0.5,
        log: "T+1590 秒：「内战」复盘总结。",
        note: "时间点 1590 秒：复盘总结。",
      },
    ],
  },
};

for (const _did of Object.keys(DISASTERS_V30_DETAIL3)) {
  if (DISASTERS_V30[_did]) {
    DISASTERS_V30[_did].detail3 = DISASTERS_V30_DETAIL3[_did];
    if (DISASTERS_V30[_did].detail) Object.assign(DISASTERS_V30[_did].detail, DISASTERS_V30_DETAIL3[_did]);
  }
}

function selfTestDisastersV30Detail3() {
  const errors = [];
  for (const id of DISASTERS_V30_ORDER) {
    const d = (DISASTERS_V30[id] || {}).detail3;
    if (!d || d.timeline.length !== 10) errors.push(id + ': 时间线不足 10 个点');
  }
  return { total: DISASTERS_V30_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.DISASTERS_V30_DETAIL3 = DISASTERS_V30_DETAIL3;
  module.exports.selfTestDisastersV30Detail3 = selfTestDisastersV30Detail3;
}
