/* 星港 — wonders_v31.js：v3.1 新奇观 6 座（第十二 / 十三胜利）
 * 每座奇观都有：造价（分项资源）、前置条件（科技 / 人口 / 奇观 / 改造进度）、
 * 10 个建造阶段（每阶段有资源投入、材料清单、解锁效果、耗时）、全局加成（可执行 fx）、
 * 维护费、胜利进度函数。建成即推进对应胜利，集齐同编号胜利的奇观即获胜。
 * mergeWondersV31() 把 6 座并入全局奇观表（若存在）。描述一律一句话，不写故事。
 */

'use strict';

/* ============ §1 胜利编号说明 ============ */
/* 第十二胜利：集齐 3 座第十二胜利奇观（银河交易所 / 星际商队旗舰 / 星际中央银行）中的任意 2 座即获胜。
 * 第十三胜利：文明灯塔三座（大图书馆 / 文明方舟 / 深空天文台）全部建成即获胜（终极胜利）。
 * 每座奇观建成时 victoryProgressAdd 直接计入对应胜利进度。 */
const WONDERS_V31_VICTORY = {
  victory12: {
    id: 'victory12', number: 12, name: '贸易霸权',
    needCount: 2, candidates: ['w31-galacticmarket', 'w31-tradefleet', 'w31-bank'],
    note: '第十二胜利：3 座第十二胜利奇观中建成任意 2 座。',
  },
  victory13: {
    id: 'victory13', number: 13, name: '文明灯塔',
    needCount: 3, candidates: ['w31-grandlibrary', 'w31-ark', 'w31-observatory'],
    note: '第十三胜利：大图书馆、文明方舟与深空天文台全部建成。',
  },
};

/* ============ §2 奇观定义（6 座） ============ */
const WONDERS_V31 = {
  // ---------- w31-galacticmarket 银河交易所 [第十二胜利·贸易] ----------
  "w31-galacticmarket": {
    id: "w31-galacticmarket",
    name: "银河交易所",
    icon: "🏦",
    tag: "第十二胜利·贸易",
    victoryNumber: 12,
    victoryId: "victory12",
    victoryName: "贸易霸权",
    v31: true,
    desc: "全银河系的报价在此汇聚，第十二胜利「贸易霸权」达成条件之一。",
    cost: {
      "steel": 900,
      "nano": 500,
      "he3": 120,
    },
    costDetail: [
      { resource: "steel", amount: 900, note: "建造「银河交易所」需 steel ×900，可分 10 个阶段分期投入。" },
      { resource: "nano", amount: 500, note: "建造「银河交易所」需 nano ×500，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 120, note: "建造「银河交易所」需 he3 ×120，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 1520,
    needs: {
      pop: 250,
      tech: ["t31-trade-20", "t31-pol-24"],
      wonders: [],
      terraform: 0,
      note: "需人口 ≥250，科技：t31-trade-20、t31-pol-24。",
    },
    needsDetail: [
      { type: "pop", ref: "250", note: "人口 ≥250 人。" },
      { type: "tech", ref: "t31-trade-20", note: "需先研究科技「t31-trade-20」。" },
      { type: "tech", ref: "t31-pol-24", note: "需先研究科技「t31-pol-24」。" },
    ],
    fx: {
      "tradeMul": 2.2,
      "taxMul": 1.3,
      "stabilityAdd": 10,
      "happinessAdd": 8,
      "diplomacyMul": 1.5,
      "revoltMul": 0.5,
      "policySlotsAdd": 1,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "tradeMul", value: 2.2, note: "贸易收入 ×2.2。" },
      { key: "taxMul", value: 1.3, note: "税收效率 ×1.3。" },
      { key: "stabilityAdd", value: 10, note: "殖民地稳定度 +10 点。" },
      { key: "happinessAdd", value: 8, note: "居民幸福度 +8 点。" },
      { key: "diplomacyMul", value: 1.5, note: "外交关系增速 ×1.5。" },
      { key: "revoltMul", value: 0.5, note: "叛乱概率 ×0.5。" },
      { key: "policySlotsAdd", value: 1, note: "政策槽位 +1 个。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "steel": 2,
      "credits": 60,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w31-tradefleet", bonus: "victoryProgressAdd+1", note: "与「星际商队旗舰」同属第12胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-bank", bonus: "victoryProgressAdd+1", note: "与「星际中央银行」同属第12胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%：全局加成按 25% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%：全局加成按 50% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%：全局加成按 75% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    fxCurve: [
      { pct: 10, fxMul: 0.1, note: "建造进度 10% 时全局加成按 10% 生效。" },
      { pct: 20, fxMul: 0.2, note: "建造进度 20% 时全局加成按 20% 生效。" },
      { pct: 30, fxMul: 0.3, note: "建造进度 30% 时全局加成按 30% 生效。" },
      { pct: 40, fxMul: 0.4, note: "建造进度 40% 时全局加成按 40% 生效。" },
      { pct: 50, fxMul: 0.5, note: "建造进度 50% 时全局加成按 50% 生效。" },
      { pct: 60, fxMul: 0.6, note: "建造进度 60% 时全局加成按 60% 生效。" },
      { pct: 70, fxMul: 0.7, note: "建造进度 70% 时全局加成按 70% 生效。" },
      { pct: 80, fxMul: 0.8, note: "建造进度 80% 时全局加成按 80% 生效。" },
      { pct: 90, fxMul: 0.9, note: "建造进度 90% 时全局加成按 90% 生效。" },
      { pct: 100, fxMul: 1.0, note: "建造进度 100% 时全局加成按 100% 生效。" },
    ],
    stages: [
      {
        index: 1,
        name: "奠基",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 10%：奠基完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「奠基」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「奠基」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「奠基」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "交易大厅地基",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 20%：交易大厅地基完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「交易大厅地基」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「交易大厅地基」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「交易大厅地基」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "穹顶结构",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "stabilityAdd",
        effectNote: "完成本阶段后，「stabilityAdd」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 30%：穹顶结构完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「穹顶结构」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「穹顶结构」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「穹顶结构」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "报价大屏",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 40%：报价大屏完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「报价大屏」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「报价大屏」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「报价大屏」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "结算中心",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "diplomacyMul",
        effectNote: "完成本阶段后，「diplomacyMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 50%：结算中心完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「结算中心」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「结算中心」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「结算中心」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "贵宾交易席",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "revoltMul",
        effectNote: "完成本阶段后，「revoltMul」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 60%：贵宾交易席完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「贵宾交易席」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「贵宾交易席」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「贵宾交易席」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "星际通讯塔",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "policySlotsAdd",
        effectNote: "完成本阶段后，「policySlotsAdd」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 70%：星际通讯塔完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「星际通讯塔」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「星际通讯塔」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「星际通讯塔」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "风控中枢",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 80%：风控中枢完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「风控中枢」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「风控中枢」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「风控中枢」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "开市筹备",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 90%：开市筹备完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「开市筹备」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「开市筹备」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「开市筹备」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "首日开市",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "steel": 90, "nano": 50, "he3": 12 },
        costNote: "本阶段投入总造价的 10%：steel×90、nano×50、he3×12。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河交易所」建造进度 100%：首日开市完成。",
        materials: [
          { resource: "steel", amount: 90, note: "本阶段「首日开市」需 steel ×90。" },
          { resource: "nano", amount: 50, note: "本阶段「首日开市」需 nano ×50。" },
          { resource: "he3", amount: 12, note: "本阶段「首日开市」需 he3 ×12。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×90、nano×50、he3×12。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：奠基完成，全局加成按 10% 生效。",
      "进度 20%：交易大厅地基完成，全局加成按 20% 生效。",
      "进度 30%：穹顶结构完成，全局加成按 30% 生效。",
      "进度 40%：报价大屏完成，全局加成按 40% 生效。",
      "进度 50%：结算中心完成，全局加成按 50% 生效。",
      "进度 60%：贵宾交易席完成，全局加成按 60% 生效。",
      "进度 70%：星际通讯塔完成，全局加成按 70% 生效。",
      "进度 80%：风控中枢完成，全局加成按 80% 生效。",
      "进度 90%：开市筹备完成，全局加成按 90% 生效。",
      "进度 100%：首日开市完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory12",
      victoryName: "贸易霸权",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第12胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「银河交易所」。" },
      ],
      note: "建成「银河交易所」：第12胜利「贸易霸权」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 1500,
      defenseAdd: 400,
      note: "奇观耐久 1500，建成后城市防御 +400。",
    },
    aiPriority: {
      priority: 20,
      urgency: 2,
      note: "AI 总督推荐：胜利奇观优先度 20，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 760.0,
      powerRating: 260,
      note: "每胜利进度点造价 760.0 资源单位，强度评级 260。",
    },
  },
  // ---------- w31-tradefleet 星际商队旗舰 [第十二胜利·贸易] ----------
  "w31-tradefleet": {
    id: "w31-tradefleet",
    name: "星际商队旗舰",
    icon: "🚀",
    tag: "第十二胜利·贸易",
    victoryNumber: 12,
    victoryId: "victory12",
    victoryName: "贸易霸权",
    v31: true,
    desc: "永不返航的移动贸易城，第十二胜利「贸易霸权」达成条件之一。",
    cost: {
      "steel": 1000,
      "nano": 450,
      "he3": 200,
    },
    costDetail: [
      { resource: "steel", amount: 1000, note: "建造「星际商队旗舰」需 steel ×1000，可分 10 个阶段分期投入。" },
      { resource: "nano", amount: 450, note: "建造「星际商队旗舰」需 nano ×450，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 200, note: "建造「星际商队旗舰」需 he3 ×200，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 1650,
    needs: {
      pop: 250,
      tech: ["t31-trade-22", "t31-mil-18"],
      wonders: [],
      terraform: 0,
      note: "需人口 ≥250，科技：t31-trade-22、t31-mil-18。",
    },
    needsDetail: [
      { type: "pop", ref: "250", note: "人口 ≥250 人。" },
      { type: "tech", ref: "t31-trade-22", note: "需先研究科技「t31-trade-22」。" },
      { type: "tech", ref: "t31-mil-18", note: "需先研究科技「t31-mil-18」。" },
    ],
    fx: {
      "tradeMul": 2.0,
      "taxMul": 1.2,
      "stabilityAdd": 8,
      "happinessAdd": 10,
      "diplomacyMul": 1.4,
      "defenseMul": 1.3,
      "routeSlotsAdd": 3,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "tradeMul", value: 2.0, note: "贸易收入 ×2.0。" },
      { key: "taxMul", value: 1.2, note: "税收效率 ×1.2。" },
      { key: "stabilityAdd", value: 8, note: "殖民地稳定度 +8 点。" },
      { key: "happinessAdd", value: 10, note: "居民幸福度 +10 点。" },
      { key: "diplomacyMul", value: 1.4, note: "外交关系增速 ×1.4。" },
      { key: "defenseMul", value: 1.3, note: "防御力 ×1.3。" },
      { key: "routeSlotsAdd", value: 3, note: "贸易航线槽位 +3 条。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "steel": 3,
      "credits": 70,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w31-galacticmarket", bonus: "victoryProgressAdd+1", note: "与「银河交易所」同属第12胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-bank", bonus: "victoryProgressAdd+1", note: "与「星际中央银行」同属第12胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%：全局加成按 25% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%：全局加成按 50% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%：全局加成按 75% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    fxCurve: [
      { pct: 10, fxMul: 0.1, note: "建造进度 10% 时全局加成按 10% 生效。" },
      { pct: 20, fxMul: 0.2, note: "建造进度 20% 时全局加成按 20% 生效。" },
      { pct: 30, fxMul: 0.3, note: "建造进度 30% 时全局加成按 30% 生效。" },
      { pct: 40, fxMul: 0.4, note: "建造进度 40% 时全局加成按 40% 生效。" },
      { pct: 50, fxMul: 0.5, note: "建造进度 50% 时全局加成按 50% 生效。" },
      { pct: 60, fxMul: 0.6, note: "建造进度 60% 时全局加成按 60% 生效。" },
      { pct: 70, fxMul: 0.7, note: "建造进度 70% 时全局加成按 70% 生效。" },
      { pct: 80, fxMul: 0.8, note: "建造进度 80% 时全局加成按 80% 生效。" },
      { pct: 90, fxMul: 0.9, note: "建造进度 90% 时全局加成按 90% 生效。" },
      { pct: 100, fxMul: 1.0, note: "建造进度 100% 时全局加成按 100% 生效。" },
    ],
    stages: [
      {
        index: 1,
        name: "奠基",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 10%：奠基完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「奠基」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「奠基」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「奠基」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "龙骨铺设",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 20%：龙骨铺设完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「龙骨铺设」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「龙骨铺设」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「龙骨铺设」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "船体结构",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "stabilityAdd",
        effectNote: "完成本阶段后，「stabilityAdd」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 30%：船体结构完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「船体结构」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「船体结构」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「船体结构」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "货舱阵列",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 40%：货舱阵列完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「货舱阵列」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「货舱阵列」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「货舱阵列」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "引擎安装",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "diplomacyMul",
        effectNote: "完成本阶段后，「diplomacyMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 50%：引擎安装完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「引擎安装」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「引擎安装」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「引擎安装」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "舰桥装修",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "defenseMul",
        effectNote: "完成本阶段后，「defenseMul」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 60%：舰桥装修完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「舰桥装修」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「舰桥装修」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「舰桥装修」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "护盾系统",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "routeSlotsAdd",
        effectNote: "完成本阶段后，「routeSlotsAdd」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 70%：护盾系统完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「护盾系统」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「护盾系统」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「护盾系统」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "商队编组",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 80%：商队编组完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「商队编组」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「商队编组」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「商队编组」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "首航筹备",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 90%：首航筹备完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「首航筹备」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「首航筹备」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「首航筹备」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "首航启程",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "steel": 100, "nano": 45, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×45、he3×20。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际商队旗舰」建造进度 100%：首航启程完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「首航启程」需 steel ×100。" },
          { resource: "nano", amount: 45, note: "本阶段「首航启程」需 nano ×45。" },
          { resource: "he3", amount: 20, note: "本阶段「首航启程」需 he3 ×20。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×45、he3×20。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：奠基完成，全局加成按 10% 生效。",
      "进度 20%：龙骨铺设完成，全局加成按 20% 生效。",
      "进度 30%：船体结构完成，全局加成按 30% 生效。",
      "进度 40%：货舱阵列完成，全局加成按 40% 生效。",
      "进度 50%：引擎安装完成，全局加成按 50% 生效。",
      "进度 60%：舰桥装修完成，全局加成按 60% 生效。",
      "进度 70%：护盾系统完成，全局加成按 70% 生效。",
      "进度 80%：商队编组完成，全局加成按 80% 生效。",
      "进度 90%：首航筹备完成，全局加成按 90% 生效。",
      "进度 100%：首航启程完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory12",
      victoryName: "贸易霸权",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第12胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「星际商队旗舰」。" },
      ],
      note: "建成「星际商队旗舰」：第12胜利「贸易霸权」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 1800,
      defenseAdd: 600,
      note: "奇观耐久 1800，建成后城市防御 +600。",
    },
    aiPriority: {
      priority: 20,
      urgency: 2,
      note: "AI 总督推荐：胜利奇观优先度 20，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 825.0,
      powerRating: 250,
      note: "每胜利进度点造价 825.0 资源单位，强度评级 250。",
    },
  },
  // ---------- w31-bank 星际中央银行 [第十二胜利·贸易] ----------
  "w31-bank": {
    id: "w31-bank",
    name: "星际中央银行",
    icon: "💰",
    tag: "第十二胜利·贸易",
    victoryNumber: 12,
    victoryId: "victory12",
    victoryName: "贸易霸权",
    v31: true,
    desc: "发行全银河通用星币的金库，第十二胜利「贸易霸权」达成条件之一。",
    cost: {
      "steel": 850,
      "nano": 550,
      "he3": 100,
    },
    costDetail: [
      { resource: "steel", amount: 850, note: "建造「星际中央银行」需 steel ×850，可分 10 个阶段分期投入。" },
      { resource: "nano", amount: 550, note: "建造「星际中央银行」需 nano ×550，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 100, note: "建造「星际中央银行」需 he3 ×100，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 1500,
    needs: {
      pop: 250,
      tech: ["t31-trade-24", "t31-pol-26"],
      wonders: [],
      terraform: 0,
      note: "需人口 ≥250，科技：t31-trade-24、t31-pol-26。",
    },
    needsDetail: [
      { type: "pop", ref: "250", note: "人口 ≥250 人。" },
      { type: "tech", ref: "t31-trade-24", note: "需先研究科技「t31-trade-24」。" },
      { type: "tech", ref: "t31-pol-26", note: "需先研究科技「t31-pol-26」。" },
    ],
    fx: {
      "tradeMul": 1.8,
      "taxMul": 1.5,
      "stabilityAdd": 15,
      "happinessAdd": 6,
      "diplomacyMul": 1.3,
      "revoltMul": 0.4,
      "interestMul": 1.4,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "tradeMul", value: 1.8, note: "贸易收入 ×1.8。" },
      { key: "taxMul", value: 1.5, note: "税收效率 ×1.5。" },
      { key: "stabilityAdd", value: 15, note: "殖民地稳定度 +15 点。" },
      { key: "happinessAdd", value: 6, note: "居民幸福度 +6 点。" },
      { key: "diplomacyMul", value: 1.3, note: "外交关系增速 ×1.3。" },
      { key: "revoltMul", value: 0.4, note: "叛乱概率 ×0.4。" },
      { key: "interestMul", value: 1.4, note: "利息收入 ×1.4。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "steel": 2,
      "credits": 50,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w31-galacticmarket", bonus: "victoryProgressAdd+1", note: "与「银河交易所」同属第12胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-tradefleet", bonus: "victoryProgressAdd+1", note: "与「星际商队旗舰」同属第12胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%：全局加成按 25% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%：全局加成按 50% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%：全局加成按 75% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    fxCurve: [
      { pct: 10, fxMul: 0.1, note: "建造进度 10% 时全局加成按 10% 生效。" },
      { pct: 20, fxMul: 0.2, note: "建造进度 20% 时全局加成按 20% 生效。" },
      { pct: 30, fxMul: 0.3, note: "建造进度 30% 时全局加成按 30% 生效。" },
      { pct: 40, fxMul: 0.4, note: "建造进度 40% 时全局加成按 40% 生效。" },
      { pct: 50, fxMul: 0.5, note: "建造进度 50% 时全局加成按 50% 生效。" },
      { pct: 60, fxMul: 0.6, note: "建造进度 60% 时全局加成按 60% 生效。" },
      { pct: 70, fxMul: 0.7, note: "建造进度 70% 时全局加成按 70% 生效。" },
      { pct: 80, fxMul: 0.8, note: "建造进度 80% 时全局加成按 80% 生效。" },
      { pct: 90, fxMul: 0.9, note: "建造进度 90% 时全局加成按 90% 生效。" },
      { pct: 100, fxMul: 1.0, note: "建造进度 100% 时全局加成按 100% 生效。" },
    ],
    stages: [
      {
        index: 1,
        name: "奠基",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 10%：奠基完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「奠基」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「奠基」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「奠基」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "金库地基",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 20%：金库地基完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「金库地基」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「金库地基」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「金库地基」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "防爆穹顶",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "stabilityAdd",
        effectNote: "完成本阶段后，「stabilityAdd」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 30%：防爆穹顶完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「防爆穹顶」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「防爆穹顶」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「防爆穹顶」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "金库大门",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 40%：金库大门完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「金库大门」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「金库大门」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「金库大门」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "印钞中心",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "diplomacyMul",
        effectNote: "完成本阶段后，「diplomacyMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 50%：印钞中心完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「印钞中心」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「印钞中心」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「印钞中心」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "清算大厅",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "revoltMul",
        effectNote: "完成本阶段后，「revoltMul」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 60%：清算大厅完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「清算大厅」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「清算大厅」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「清算大厅」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "利率委员会",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "interestMul",
        effectNote: "完成本阶段后，「interestMul」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 70%：利率委员会完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「利率委员会」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「利率委员会」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「利率委员会」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "安保系统",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 80%：安保系统完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「安保系统」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「安保系统」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「安保系统」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "发钞筹备",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 90%：发钞筹备完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「发钞筹备」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「发钞筹备」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「发钞筹备」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "首批星币发行",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "steel": 85, "nano": 55, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×85、nano×55、he3×10。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际中央银行」建造进度 100%：首批星币发行完成。",
        materials: [
          { resource: "steel", amount: 85, note: "本阶段「首批星币发行」需 steel ×85。" },
          { resource: "nano", amount: 55, note: "本阶段「首批星币发行」需 nano ×55。" },
          { resource: "he3", amount: 10, note: "本阶段「首批星币发行」需 he3 ×10。" },
        ],
        check: {
          requiresPop: 250,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×85、nano×55、he3×10。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：奠基完成，全局加成按 10% 生效。",
      "进度 20%：金库地基完成，全局加成按 20% 生效。",
      "进度 30%：防爆穹顶完成，全局加成按 30% 生效。",
      "进度 40%：金库大门完成，全局加成按 40% 生效。",
      "进度 50%：印钞中心完成，全局加成按 50% 生效。",
      "进度 60%：清算大厅完成，全局加成按 60% 生效。",
      "进度 70%：利率委员会完成，全局加成按 70% 生效。",
      "进度 80%：安保系统完成，全局加成按 80% 生效。",
      "进度 90%：发钞筹备完成，全局加成按 90% 生效。",
      "进度 100%：首批星币发行完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory12",
      victoryName: "贸易霸权",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第12胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「星际中央银行」。" },
      ],
      note: "建成「星际中央银行」：第12胜利「贸易霸权」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 2000,
      defenseAdd: 500,
      note: "奇观耐久 2000，建成后城市防御 +500。",
    },
    aiPriority: {
      priority: 20,
      urgency: 2,
      note: "AI 总督推荐：胜利奇观优先度 20，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 750.0,
      powerRating: 240,
      note: "每胜利进度点造价 750.0 资源单位，强度评级 240。",
    },
  },
  // ---------- w31-grandlibrary 大图书馆 [第十三胜利·文化] ----------
  "w31-grandlibrary": {
    id: "w31-grandlibrary",
    name: "大图书馆",
    icon: "📚",
    tag: "第十三胜利·文化",
    victoryNumber: 13,
    victoryId: "victory13",
    victoryName: "文明灯塔",
    v31: true,
    desc: "收藏全人类知识的火种库，第十三胜利「文明灯塔」达成条件之一。",
    cost: {
      "steel": 950,
      "nano": 600,
      "he3": 150,
    },
    costDetail: [
      { resource: "steel", amount: 950, note: "建造「大图书馆」需 steel ×950，可分 10 个阶段分期投入。" },
      { resource: "nano", amount: 600, note: "建造「大图书馆」需 nano ×600，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 150, note: "建造「大图书馆」需 he3 ×150，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 1700,
    needs: {
      pop: 300,
      tech: ["t31-cult-20", "t31-sci-18"],
      wonders: [],
      terraform: 0,
      note: "需人口 ≥300，科技：t31-cult-20、t31-sci-18。",
    },
    needsDetail: [
      { type: "pop", ref: "300", note: "人口 ≥300 人。" },
      { type: "tech", ref: "t31-cult-20", note: "需先研究科技「t31-cult-20」。" },
      { type: "tech", ref: "t31-sci-18", note: "需先研究科技「t31-sci-18」。" },
    ],
    fx: {
      "researchMul": 2.0,
      "happinessAdd": 15,
      "stabilityAdd": 12,
      "cultureMul": 2.0,
      "diplomacyMul": 1.4,
      "techCostMul": 0.8,
      "policySlotsAdd": 1,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "researchMul", value: 2.0, note: "科研产出 ×2.0。" },
      { key: "happinessAdd", value: 15, note: "居民幸福度 +15 点。" },
      { key: "stabilityAdd", value: 12, note: "殖民地稳定度 +12 点。" },
      { key: "cultureMul", value: 2.0, note: "文化影响力 ×2.0。" },
      { key: "diplomacyMul", value: 1.4, note: "外交关系增速 ×1.4。" },
      { key: "techCostMul", value: 0.8, note: "科技成本 ×0.8。" },
      { key: "policySlotsAdd", value: 1, note: "政策槽位 +1 个。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "steel": 2,
      "credits": 55,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w31-ark", bonus: "victoryProgressAdd+1", note: "与「文明方舟」同属第13胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-observatory", bonus: "victoryProgressAdd+1", note: "与「深空天文台」同属第13胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%：全局加成按 25% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%：全局加成按 50% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%：全局加成按 75% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    fxCurve: [
      { pct: 10, fxMul: 0.1, note: "建造进度 10% 时全局加成按 10% 生效。" },
      { pct: 20, fxMul: 0.2, note: "建造进度 20% 时全局加成按 20% 生效。" },
      { pct: 30, fxMul: 0.3, note: "建造进度 30% 时全局加成按 30% 生效。" },
      { pct: 40, fxMul: 0.4, note: "建造进度 40% 时全局加成按 40% 生效。" },
      { pct: 50, fxMul: 0.5, note: "建造进度 50% 时全局加成按 50% 生效。" },
      { pct: 60, fxMul: 0.6, note: "建造进度 60% 时全局加成按 60% 生效。" },
      { pct: 70, fxMul: 0.7, note: "建造进度 70% 时全局加成按 70% 生效。" },
      { pct: 80, fxMul: 0.8, note: "建造进度 80% 时全局加成按 80% 生效。" },
      { pct: 90, fxMul: 0.9, note: "建造进度 90% 时全局加成按 90% 生效。" },
      { pct: 100, fxMul: 1.0, note: "建造进度 100% 时全局加成按 100% 生效。" },
    ],
    stages: [
      {
        index: 1,
        name: "奠基",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "researchMul",
        effectNote: "完成本阶段后，「researchMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 10%：奠基完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「奠基」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「奠基」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「奠基」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "书库地基",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 20%：书库地基完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「书库地基」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「书库地基」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「书库地基」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "穹顶阅览室",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "stabilityAdd",
        effectNote: "完成本阶段后，「stabilityAdd」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 30%：穹顶阅览室完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「穹顶阅览室」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「穹顶阅览室」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「穹顶阅览室」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "藏书塔",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "cultureMul",
        effectNote: "完成本阶段后，「cultureMul」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 40%：藏书塔完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「藏书塔」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「藏书塔」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「藏书塔」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "翻译中心",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "diplomacyMul",
        effectNote: "完成本阶段后，「diplomacyMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 50%：翻译中心完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「翻译中心」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「翻译中心」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「翻译中心」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "数字档案馆",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "techCostMul",
        effectNote: "完成本阶段后，「techCostMul」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 60%：数字档案馆完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「数字档案馆」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「数字档案馆」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「数字档案馆」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "学者公寓",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "policySlotsAdd",
        effectNote: "完成本阶段后，「policySlotsAdd」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 70%：学者公寓完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「学者公寓」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「学者公寓」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「学者公寓」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "恒温系统",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 80%：恒温系统完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「恒温系统」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「恒温系统」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「恒温系统」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "开馆筹备",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "researchMul",
        effectNote: "完成本阶段后，「researchMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 90%：开馆筹备完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「开馆筹备」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「开馆筹备」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「开馆筹备」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "首日开馆",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "steel": 95, "nano": 60, "he3": 15 },
        costNote: "本阶段投入总造价的 10%：steel×95、nano×60、he3×15。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「大图书馆」建造进度 100%：首日开馆完成。",
        materials: [
          { resource: "steel", amount: 95, note: "本阶段「首日开馆」需 steel ×95。" },
          { resource: "nano", amount: 60, note: "本阶段「首日开馆」需 nano ×60。" },
          { resource: "he3", amount: 15, note: "本阶段「首日开馆」需 he3 ×15。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×95、nano×60、he3×15。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：奠基完成，全局加成按 10% 生效。",
      "进度 20%：书库地基完成，全局加成按 20% 生效。",
      "进度 30%：穹顶阅览室完成，全局加成按 30% 生效。",
      "进度 40%：藏书塔完成，全局加成按 40% 生效。",
      "进度 50%：翻译中心完成，全局加成按 50% 生效。",
      "进度 60%：数字档案馆完成，全局加成按 60% 生效。",
      "进度 70%：学者公寓完成，全局加成按 70% 生效。",
      "进度 80%：恒温系统完成，全局加成按 80% 生效。",
      "进度 90%：开馆筹备完成，全局加成按 90% 生效。",
      "进度 100%：首日开馆完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory13",
      victoryName: "文明灯塔",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第13胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「大图书馆」。" },
      ],
      note: "建成「大图书馆」：第13胜利「文明灯塔」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 1500,
      defenseAdd: 400,
      note: "奇观耐久 1500，建成后城市防御 +400。",
    },
    aiPriority: {
      priority: 20,
      urgency: 2,
      note: "AI 总督推荐：胜利奇观优先度 20，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 850.0,
      powerRating: 270,
      note: "每胜利进度点造价 850.0 资源单位，强度评级 270。",
    },
  },
  // ---------- w31-ark 文明方舟 [第十三胜利·文化] ----------
  "w31-ark": {
    id: "w31-ark",
    name: "文明方舟",
    icon: "🛸",
    tag: "第十三胜利·文化",
    victoryNumber: 13,
    victoryId: "victory13",
    victoryName: "文明灯塔",
    v31: true,
    desc: "载着人类全部基因与文化的种子船，第十三胜利「文明灯塔」达成条件之一。",
    cost: {
      "steel": 1200,
      "nano": 700,
      "he3": 250,
    },
    costDetail: [
      { resource: "steel", amount: 1200, note: "建造「文明方舟」需 steel ×1200，可分 10 个阶段分期投入。" },
      { resource: "nano", amount: 700, note: "建造「文明方舟」需 nano ×700，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 250, note: "建造「文明方舟」需 he3 ×250，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 2150,
    needs: {
      pop: 350,
      tech: ["t31-sci-22", "t31-eco-20"],
      wonders: ["w31-grandlibrary"],
      terraform: 0,
      note: "需人口 ≥350，科技：t31-sci-22、t31-eco-20，奇观：w31-grandlibrary。",
    },
    needsDetail: [
      { type: "pop", ref: "350", note: "人口 ≥350 人。" },
      { type: "tech", ref: "t31-sci-22", note: "需先研究科技「t31-sci-22」。" },
      { type: "tech", ref: "t31-eco-20", note: "需先研究科技「t31-eco-20」。" },
      { type: "wonder", ref: "w31-grandlibrary", note: "需先建成奇观「w31-grandlibrary」。" },
    ],
    fx: {
      "researchMul": 1.8,
      "happinessAdd": 12,
      "stabilityAdd": 20,
      "cultureMul": 1.8,
      "popGrowthMul": 1.5,
      "defenseMul": 1.5,
      "routeSlotsAdd": 2,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "researchMul", value: 1.8, note: "科研产出 ×1.8。" },
      { key: "happinessAdd", value: 12, note: "居民幸福度 +12 点。" },
      { key: "stabilityAdd", value: 20, note: "殖民地稳定度 +20 点。" },
      { key: "cultureMul", value: 1.8, note: "文化影响力 ×1.8。" },
      { key: "popGrowthMul", value: 1.5, note: "人口增速 ×1.5。" },
      { key: "defenseMul", value: 1.5, note: "防御力 ×1.5。" },
      { key: "routeSlotsAdd", value: 2, note: "贸易航线槽位 +2 条。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "steel": 4,
      "credits": 80,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w31-grandlibrary", bonus: "victoryProgressAdd+1", note: "与「大图书馆」同属第13胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-observatory", bonus: "victoryProgressAdd+1", note: "与「深空天文台」同属第13胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%：全局加成按 25% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%：全局加成按 50% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%：全局加成按 75% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    fxCurve: [
      { pct: 10, fxMul: 0.1, note: "建造进度 10% 时全局加成按 10% 生效。" },
      { pct: 20, fxMul: 0.2, note: "建造进度 20% 时全局加成按 20% 生效。" },
      { pct: 30, fxMul: 0.3, note: "建造进度 30% 时全局加成按 30% 生效。" },
      { pct: 40, fxMul: 0.4, note: "建造进度 40% 时全局加成按 40% 生效。" },
      { pct: 50, fxMul: 0.5, note: "建造进度 50% 时全局加成按 50% 生效。" },
      { pct: 60, fxMul: 0.6, note: "建造进度 60% 时全局加成按 60% 生效。" },
      { pct: 70, fxMul: 0.7, note: "建造进度 70% 时全局加成按 70% 生效。" },
      { pct: 80, fxMul: 0.8, note: "建造进度 80% 时全局加成按 80% 生效。" },
      { pct: 90, fxMul: 0.9, note: "建造进度 90% 时全局加成按 90% 生效。" },
      { pct: 100, fxMul: 1.0, note: "建造进度 100% 时全局加成按 100% 生效。" },
    ],
    stages: [
      {
        index: 1,
        name: "奠基",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "researchMul",
        effectNote: "完成本阶段后，「researchMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 10%：奠基完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「奠基」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「奠基」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「奠基」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "船坞搭建",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 20%：船坞搭建完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「船坞搭建」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「船坞搭建」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「船坞搭建」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "基因库舱",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "stabilityAdd",
        effectNote: "完成本阶段后，「stabilityAdd」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 30%：基因库舱完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「基因库舱」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「基因库舱」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「基因库舱」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "文化舱",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "cultureMul",
        effectNote: "完成本阶段后，「cultureMul」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 40%：文化舱完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「文化舱」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「文化舱」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「文化舱」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "生态循环舱",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "popGrowthMul",
        effectNote: "完成本阶段后，「popGrowthMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 50%：生态循环舱完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「生态循环舱」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「生态循环舱」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「生态循环舱」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "冬眠舱阵列",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "defenseMul",
        effectNote: "完成本阶段后，「defenseMul」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 60%：冬眠舱阵列完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「冬眠舱阵列」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「冬眠舱阵列」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「冬眠舱阵列」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "舰桥系统",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "routeSlotsAdd",
        effectNote: "完成本阶段后，「routeSlotsAdd」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 70%：舰桥系统完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「舰桥系统」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「舰桥系统」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「舰桥系统」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "护盾充能",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 80%：护盾充能完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「护盾充能」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「护盾充能」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「护盾充能」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "启程筹备",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "researchMul",
        effectNote: "完成本阶段后，「researchMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 90%：启程筹备完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「启程筹备」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「启程筹备」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「启程筹备」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "方舟升空",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "steel": 120, "nano": 70, "he3": 25 },
        costNote: "本阶段投入总造价的 10%：steel×120、nano×70、he3×25。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「文明方舟」建造进度 100%：方舟升空完成。",
        materials: [
          { resource: "steel", amount: 120, note: "本阶段「方舟升空」需 steel ×120。" },
          { resource: "nano", amount: 70, note: "本阶段「方舟升空」需 nano ×70。" },
          { resource: "he3", amount: 25, note: "本阶段「方舟升空」需 he3 ×25。" },
        ],
        check: {
          requiresPop: 350,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥350，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×120、nano×70、he3×25。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：奠基完成，全局加成按 10% 生效。",
      "进度 20%：船坞搭建完成，全局加成按 20% 生效。",
      "进度 30%：基因库舱完成，全局加成按 30% 生效。",
      "进度 40%：文化舱完成，全局加成按 40% 生效。",
      "进度 50%：生态循环舱完成，全局加成按 50% 生效。",
      "进度 60%：冬眠舱阵列完成，全局加成按 60% 生效。",
      "进度 70%：舰桥系统完成，全局加成按 70% 生效。",
      "进度 80%：护盾充能完成，全局加成按 80% 生效。",
      "进度 90%：启程筹备完成，全局加成按 90% 生效。",
      "进度 100%：方舟升空完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory13",
      victoryName: "文明灯塔",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第13胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「文明方舟」。" },
      ],
      note: "建成「文明方舟」：第13胜利「文明灯塔」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 2200,
      defenseAdd: 800,
      note: "奇观耐久 2200，建成后城市防御 +800。",
    },
    aiPriority: {
      priority: 20,
      urgency: 2,
      note: "AI 总督推荐：胜利奇观优先度 20，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 1075.0,
      powerRating: 300,
      note: "每胜利进度点造价 1075.0 资源单位，强度评级 300。",
    },
  },
  // ---------- w31-observatory 深空天文台 [第十三胜利·科研] ----------
  "w31-observatory": {
    id: "w31-observatory",
    name: "深空天文台",
    icon: "🔭",
    tag: "第十三胜利·科研",
    victoryNumber: 13,
    victoryId: "victory13",
    victoryName: "文明灯塔",
    v31: true,
    desc: "凝视宇宙深处的巨眼，第十三胜利「文明灯塔」达成条件之一。",
    cost: {
      "steel": 1000,
      "nano": 650,
      "he3": 300,
    },
    costDetail: [
      { resource: "steel", amount: 1000, note: "建造「深空天文台」需 steel ×1000，可分 10 个阶段分期投入。" },
      { resource: "nano", amount: 650, note: "建造「深空天文台」需 nano ×650，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 300, note: "建造「深空天文台」需 he3 ×300，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 1950,
    needs: {
      pop: 300,
      tech: ["t31-sci-24", "t31-eco-18"],
      wonders: [],
      terraform: 0,
      note: "需人口 ≥300，科技：t31-sci-24、t31-eco-18。",
    },
    needsDetail: [
      { type: "pop", ref: "300", note: "人口 ≥300 人。" },
      { type: "tech", ref: "t31-sci-24", note: "需先研究科技「t31-sci-24」。" },
      { type: "tech", ref: "t31-eco-18", note: "需先研究科技「t31-eco-18」。" },
    ],
    fx: {
      "researchMul": 2.2,
      "happinessAdd": 8,
      "stabilityAdd": 10,
      "cultureMul": 1.5,
      "diplomacyMul": 1.6,
      "techCostMul": 0.7,
      "scanRangeAdd": 5,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "researchMul", value: 2.2, note: "科研产出 ×2.2。" },
      { key: "happinessAdd", value: 8, note: "居民幸福度 +8 点。" },
      { key: "stabilityAdd", value: 10, note: "殖民地稳定度 +10 点。" },
      { key: "cultureMul", value: 1.5, note: "文化影响力 ×1.5。" },
      { key: "diplomacyMul", value: 1.6, note: "外交关系增速 ×1.6。" },
      { key: "techCostMul", value: 0.7, note: "科技成本 ×0.7。" },
      { key: "scanRangeAdd", value: 5, note: "扫描范围 +5 格。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "steel": 3,
      "credits": 65,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w31-grandlibrary", bonus: "victoryProgressAdd+1", note: "与「大图书馆」同属第13胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-ark", bonus: "victoryProgressAdd+1", note: "与「文明方舟」同属第13胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%：全局加成按 25% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%：全局加成按 50% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%：全局加成按 75% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    fxCurve: [
      { pct: 10, fxMul: 0.1, note: "建造进度 10% 时全局加成按 10% 生效。" },
      { pct: 20, fxMul: 0.2, note: "建造进度 20% 时全局加成按 20% 生效。" },
      { pct: 30, fxMul: 0.3, note: "建造进度 30% 时全局加成按 30% 生效。" },
      { pct: 40, fxMul: 0.4, note: "建造进度 40% 时全局加成按 40% 生效。" },
      { pct: 50, fxMul: 0.5, note: "建造进度 50% 时全局加成按 50% 生效。" },
      { pct: 60, fxMul: 0.6, note: "建造进度 60% 时全局加成按 60% 生效。" },
      { pct: 70, fxMul: 0.7, note: "建造进度 70% 时全局加成按 70% 生效。" },
      { pct: 80, fxMul: 0.8, note: "建造进度 80% 时全局加成按 80% 生效。" },
      { pct: 90, fxMul: 0.9, note: "建造进度 90% 时全局加成按 90% 生效。" },
      { pct: 100, fxMul: 1.0, note: "建造进度 100% 时全局加成按 100% 生效。" },
    ],
    stages: [
      {
        index: 1,
        name: "奠基",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "researchMul",
        effectNote: "完成本阶段后，「researchMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 10%：奠基完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「奠基」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「奠基」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「奠基」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "基座浇筑",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 20%：基座浇筑完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「基座浇筑」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「基座浇筑」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「基座浇筑」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "镜面阵列",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "stabilityAdd",
        effectNote: "完成本阶段后，「stabilityAdd」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 30%：镜面阵列完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「镜面阵列」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「镜面阵列」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「镜面阵列」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "主镜安装",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "cultureMul",
        effectNote: "完成本阶段后，「cultureMul」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 40%：主镜安装完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「主镜安装」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「主镜安装」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「主镜安装」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "信号接收塔",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "diplomacyMul",
        effectNote: "完成本阶段后，「diplomacyMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 50%：信号接收塔完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「信号接收塔」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「信号接收塔」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「信号接收塔」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "数据中心",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "techCostMul",
        effectNote: "完成本阶段后，「techCostMul」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 60%：数据中心完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「数据中心」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「数据中心」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「数据中心」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "观测穹顶",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "scanRangeAdd",
        effectNote: "完成本阶段后，「scanRangeAdd」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 70%：观测穹顶完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「观测穹顶」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「观测穹顶」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「观测穹顶」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "校准系统",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 80%：校准系统完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「校准系统」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「校准系统」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「校准系统」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "首光筹备",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "researchMul",
        effectNote: "完成本阶段后，「researchMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 90%：首光筹备完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「首光筹备」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「首光筹备」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「首光筹备」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "首光观测",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "steel": 100, "nano": 65, "he3": 30 },
        costNote: "本阶段投入总造价的 10%：steel×100、nano×65、he3×30。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「深空天文台」建造进度 100%：首光观测完成。",
        materials: [
          { resource: "steel", amount: 100, note: "本阶段「首光观测」需 steel ×100。" },
          { resource: "nano", amount: 65, note: "本阶段「首光观测」需 nano ×65。" },
          { resource: "he3", amount: 30, note: "本阶段「首光观测」需 he3 ×30。" },
        ],
        check: {
          requiresPop: 300,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×100、nano×65、he3×30。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：奠基完成，全局加成按 10% 生效。",
      "进度 20%：基座浇筑完成，全局加成按 20% 生效。",
      "进度 30%：镜面阵列完成，全局加成按 30% 生效。",
      "进度 40%：主镜安装完成，全局加成按 40% 生效。",
      "进度 50%：信号接收塔完成，全局加成按 50% 生效。",
      "进度 60%：数据中心完成，全局加成按 60% 生效。",
      "进度 70%：观测穹顶完成，全局加成按 70% 生效。",
      "进度 80%：校准系统完成，全局加成按 80% 生效。",
      "进度 90%：首光筹备完成，全局加成按 90% 生效。",
      "进度 100%：首光观测完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory13",
      victoryName: "文明灯塔",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第13胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「深空天文台」。" },
      ],
      note: "建成「深空天文台」：第13胜利「文明灯塔」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 1600,
      defenseAdd: 500,
      note: "奇观耐久 1600，建成后城市防御 +500。",
    },
    aiPriority: {
      priority: 20,
      urgency: 2,
      note: "AI 总督推荐：胜利奇观优先度 20，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 975.0,
      powerRating: 280,
      note: "每胜利进度点造价 975.0 资源单位，强度评级 280。",
    },
  },
};

const WONDERS_V31_COUNT = 6;
const WONDERS_V31_ORDER = ["w31-galacticmarket", "w31-tradefleet", "w31-bank", "w31-grandlibrary", "w31-ark", "w31-observatory"];

/* ============ §3 每座奇观的前置检查与胜利进度函数（可执行） ============ */
/* 银河交易所：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w31_galacticmarket(state) {
  const def = WONDERS_V31["w31-galacticmarket"];
  const missing = [];
  const pop = (state && state.pop) ? state.pop.count : 0;
  if (pop < def.needs.pop) missing.push('人口≥' + def.needs.pop + '（当前 ' + pop + '）');
  for (const t of def.needs.tech) {
    if (!state || !state.tech || !state.tech.has(t)) missing.push('科技 ' + t);
  }
  for (const w of def.needs.wonders) {
    if (!state || !state.wonders || !state.wonders.built(w)) missing.push('奇观 ' + w);
  }
  return { ok: missing.length === 0, missing: missing };
}

/* 银河交易所：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w31_galacticmarket(state, builtPct) {
  const def = WONDERS_V31["w31-galacticmarket"];
  const pct = Math.max(0, Math.min(100, builtPct || 0));
  const fxMul = pct / 100;
  const done = pct >= 100;
  const progress = done ? def.fx.victoryProgressAdd : 0;
  const fxNow = {};
  for (const k of Object.keys(def.fx)) {
    if (k === 'victoryProgressAdd') continue;
    const v = def.fx[k];
    fxNow[k] = (typeof v === 'number' && v > 1 && k.indexOf('Mul') !== -1)
      ? 1 + (v - 1) * fxMul : v * fxMul;
  }
  return { wonder: "w31-galacticmarket", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 银河交易所：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w31_galacticmarket() { return 2550; }

/* 银河交易所：胜利判定。manager 已建成该奇观且同胜利已建成数达标时返回 true。 */
function victoryCheck_w31_galacticmarket(manager) {
  if (!manager || !manager.isBuilt("w31-galacticmarket")) return false;
  return manager.victoryDone("victory12");
}

/* 星际商队旗舰：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w31_tradefleet(state) {
  const def = WONDERS_V31["w31-tradefleet"];
  const missing = [];
  const pop = (state && state.pop) ? state.pop.count : 0;
  if (pop < def.needs.pop) missing.push('人口≥' + def.needs.pop + '（当前 ' + pop + '）');
  for (const t of def.needs.tech) {
    if (!state || !state.tech || !state.tech.has(t)) missing.push('科技 ' + t);
  }
  for (const w of def.needs.wonders) {
    if (!state || !state.wonders || !state.wonders.built(w)) missing.push('奇观 ' + w);
  }
  return { ok: missing.length === 0, missing: missing };
}

/* 星际商队旗舰：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w31_tradefleet(state, builtPct) {
  const def = WONDERS_V31["w31-tradefleet"];
  const pct = Math.max(0, Math.min(100, builtPct || 0));
  const fxMul = pct / 100;
  const done = pct >= 100;
  const progress = done ? def.fx.victoryProgressAdd : 0;
  const fxNow = {};
  for (const k of Object.keys(def.fx)) {
    if (k === 'victoryProgressAdd') continue;
    const v = def.fx[k];
    fxNow[k] = (typeof v === 'number' && v > 1 && k.indexOf('Mul') !== -1)
      ? 1 + (v - 1) * fxMul : v * fxMul;
  }
  return { wonder: "w31-tradefleet", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 星际商队旗舰：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w31_tradefleet() { return 2550; }

/* 星际商队旗舰：胜利判定。manager 已建成该奇观且同胜利已建成数达标时返回 true。 */
function victoryCheck_w31_tradefleet(manager) {
  if (!manager || !manager.isBuilt("w31-tradefleet")) return false;
  return manager.victoryDone("victory12");
}

/* 星际中央银行：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w31_bank(state) {
  const def = WONDERS_V31["w31-bank"];
  const missing = [];
  const pop = (state && state.pop) ? state.pop.count : 0;
  if (pop < def.needs.pop) missing.push('人口≥' + def.needs.pop + '（当前 ' + pop + '）');
  for (const t of def.needs.tech) {
    if (!state || !state.tech || !state.tech.has(t)) missing.push('科技 ' + t);
  }
  for (const w of def.needs.wonders) {
    if (!state || !state.wonders || !state.wonders.built(w)) missing.push('奇观 ' + w);
  }
  return { ok: missing.length === 0, missing: missing };
}

/* 星际中央银行：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w31_bank(state, builtPct) {
  const def = WONDERS_V31["w31-bank"];
  const pct = Math.max(0, Math.min(100, builtPct || 0));
  const fxMul = pct / 100;
  const done = pct >= 100;
  const progress = done ? def.fx.victoryProgressAdd : 0;
  const fxNow = {};
  for (const k of Object.keys(def.fx)) {
    if (k === 'victoryProgressAdd') continue;
    const v = def.fx[k];
    fxNow[k] = (typeof v === 'number' && v > 1 && k.indexOf('Mul') !== -1)
      ? 1 + (v - 1) * fxMul : v * fxMul;
  }
  return { wonder: "w31-bank", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 星际中央银行：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w31_bank() { return 2550; }

/* 星际中央银行：胜利判定。manager 已建成该奇观且同胜利已建成数达标时返回 true。 */
function victoryCheck_w31_bank(manager) {
  if (!manager || !manager.isBuilt("w31-bank")) return false;
  return manager.victoryDone("victory12");
}

/* 大图书馆：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w31_grandlibrary(state) {
  const def = WONDERS_V31["w31-grandlibrary"];
  const missing = [];
  const pop = (state && state.pop) ? state.pop.count : 0;
  if (pop < def.needs.pop) missing.push('人口≥' + def.needs.pop + '（当前 ' + pop + '）');
  for (const t of def.needs.tech) {
    if (!state || !state.tech || !state.tech.has(t)) missing.push('科技 ' + t);
  }
  for (const w of def.needs.wonders) {
    if (!state || !state.wonders || !state.wonders.built(w)) missing.push('奇观 ' + w);
  }
  return { ok: missing.length === 0, missing: missing };
}

/* 大图书馆：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w31_grandlibrary(state, builtPct) {
  const def = WONDERS_V31["w31-grandlibrary"];
  const pct = Math.max(0, Math.min(100, builtPct || 0));
  const fxMul = pct / 100;
  const done = pct >= 100;
  const progress = done ? def.fx.victoryProgressAdd : 0;
  const fxNow = {};
  for (const k of Object.keys(def.fx)) {
    if (k === 'victoryProgressAdd') continue;
    const v = def.fx[k];
    fxNow[k] = (typeof v === 'number' && v > 1 && k.indexOf('Mul') !== -1)
      ? 1 + (v - 1) * fxMul : v * fxMul;
  }
  return { wonder: "w31-grandlibrary", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 大图书馆：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w31_grandlibrary() { return 2550; }

/* 大图书馆：胜利判定。manager 已建成该奇观且同胜利已建成数达标时返回 true。 */
function victoryCheck_w31_grandlibrary(manager) {
  if (!manager || !manager.isBuilt("w31-grandlibrary")) return false;
  return manager.victoryDone("victory13");
}

/* 文明方舟：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w31_ark(state) {
  const def = WONDERS_V31["w31-ark"];
  const missing = [];
  const pop = (state && state.pop) ? state.pop.count : 0;
  if (pop < def.needs.pop) missing.push('人口≥' + def.needs.pop + '（当前 ' + pop + '）');
  for (const t of def.needs.tech) {
    if (!state || !state.tech || !state.tech.has(t)) missing.push('科技 ' + t);
  }
  for (const w of def.needs.wonders) {
    if (!state || !state.wonders || !state.wonders.built(w)) missing.push('奇观 ' + w);
  }
  return { ok: missing.length === 0, missing: missing };
}

/* 文明方舟：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w31_ark(state, builtPct) {
  const def = WONDERS_V31["w31-ark"];
  const pct = Math.max(0, Math.min(100, builtPct || 0));
  const fxMul = pct / 100;
  const done = pct >= 100;
  const progress = done ? def.fx.victoryProgressAdd : 0;
  const fxNow = {};
  for (const k of Object.keys(def.fx)) {
    if (k === 'victoryProgressAdd') continue;
    const v = def.fx[k];
    fxNow[k] = (typeof v === 'number' && v > 1 && k.indexOf('Mul') !== -1)
      ? 1 + (v - 1) * fxMul : v * fxMul;
  }
  return { wonder: "w31-ark", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 文明方舟：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w31_ark() { return 2550; }

/* 文明方舟：胜利判定。manager 已建成该奇观且同胜利已建成数达标时返回 true。 */
function victoryCheck_w31_ark(manager) {
  if (!manager || !manager.isBuilt("w31-ark")) return false;
  return manager.victoryDone("victory13");
}

/* 深空天文台：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w31_observatory(state) {
  const def = WONDERS_V31["w31-observatory"];
  const missing = [];
  const pop = (state && state.pop) ? state.pop.count : 0;
  if (pop < def.needs.pop) missing.push('人口≥' + def.needs.pop + '（当前 ' + pop + '）');
  for (const t of def.needs.tech) {
    if (!state || !state.tech || !state.tech.has(t)) missing.push('科技 ' + t);
  }
  for (const w of def.needs.wonders) {
    if (!state || !state.wonders || !state.wonders.built(w)) missing.push('奇观 ' + w);
  }
  return { ok: missing.length === 0, missing: missing };
}

/* 深空天文台：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w31_observatory(state, builtPct) {
  const def = WONDERS_V31["w31-observatory"];
  const pct = Math.max(0, Math.min(100, builtPct || 0));
  const fxMul = pct / 100;
  const done = pct >= 100;
  const progress = done ? def.fx.victoryProgressAdd : 0;
  const fxNow = {};
  for (const k of Object.keys(def.fx)) {
    if (k === 'victoryProgressAdd') continue;
    const v = def.fx[k];
    fxNow[k] = (typeof v === 'number' && v > 1 && k.indexOf('Mul') !== -1)
      ? 1 + (v - 1) * fxMul : v * fxMul;
  }
  return { wonder: "w31-observatory", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 深空天文台：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w31_observatory() { return 2550; }

/* 深空天文台：胜利判定。manager 已建成该奇观且同胜利已建成数达标时返回 true。 */
function victoryCheck_w31_observatory(manager) {
  if (!manager || !manager.isBuilt("w31-observatory")) return false;
  return manager.victoryDone("victory13");
}

/* ============ §4 奇观管理器 v31 ============ */
class WonderManagerV31 {
  constructor() {
    this.built = new Set();
    this.progress = {};
    this.stage = {};
  }

  isBuilt(id) { return this.built.has(id); }

  /* 第十二 / 十三胜利是否达成。 */
  victoryDone(victoryId) {
    const v = WONDERS_V31_VICTORY[victoryId];
    if (!v) return false;
    let n = 0;
    for (const id of v.candidates) if (this.built.has(id)) n++;
    return n >= v.needCount;
  }

  victoryStatus() {
    const out = {};
    for (const k of Object.keys(WONDERS_V31_VICTORY)) {
      const v = WONDERS_V31_VICTORY[k];
      let n = 0;
      for (const id of v.candidates) if (this.built.has(id)) n++;
      out[k] = { number: v.number, name: v.name, built: n, need: v.needCount, done: n >= v.needCount };
    }
    return out;
  }

  startBuild(id, state) {
    const def = WONDERS_V31[id];
    if (!def) return { ok: false, reason: '未知奇观' };
    if (this.built.has(id)) return { ok: false, reason: '已建成' };
    if (this.progress[id] !== undefined) return { ok: false, reason: '建造中' };
    const check = this.checkPrereq(id, state);
    if (!check.ok) return { ok: false, reason: '前置不足：' + check.missing.join('；') };
    this.progress[id] = 0;
    this.stage[id] = 0;
    return { ok: true };
  }

  checkPrereq(id, state) {
    const def = WONDERS_V31[id];
    if (!def) return { ok: false, missing: ['未知奇观'] };
    const missing = [];
    const pop = (state && state.pop) ? state.pop.count : 0;
    if (pop < def.needs.pop) missing.push('人口≥' + def.needs.pop);
    for (const t of def.needs.tech) {
      if (!state || !state.tech || !state.tech.has(t)) missing.push('科技 ' + t);
    }
    for (const w of def.needs.wonders) {
      if (!this.built.has(w)) missing.push('奇观 ' + w);
    }
    if (def.needs.terraform > 0) {
      const tf = (state && state.planet) ? state.planet.terraform : 0;
      if (tf < def.needs.terraform) missing.push('改造进度≥' + def.needs.terraform);
    }
    return { ok: missing.length === 0, missing: missing };
  }

  tickBuild(id, dtSec, state) {
    if (this.progress[id] === undefined || this.built.has(id)) return null;
    const def = WONDERS_V31[id];
    const stageIdx = Math.min(9, Math.floor(this.progress[id] / 10));
    const stage = def.stages[stageIdx];
    this.progress[id] = Math.min(100, this.progress[id] + (100 / stage.durationSec) * dtSec);
    this.stage[id] = Math.min(9, Math.floor(this.progress[id] / 10));
    if (this.progress[id] >= 100) {
      this.built.add(id);
      delete this.progress[id];
      return { id: id, pct: 100, done: true, victory: this.victoryStatus() };
    }
    return { id: id, pct: this.progress[id], stage: this.stage[id], done: false };
  }

  globalFx() {
    const mul = {}; const add = {};
    for (const id of this.built) {
      const def = WONDERS_V31[id];
      for (const k of Object.keys(def.fx)) {
        const v = def.fx[k];
        if (k.indexOf('Mul') !== -1) mul[k] = (mul[k] || 1) * v;
        else if (k.indexOf('Add') !== -1) add[k] = (add[k] || 0) + v;
      }
    }
    return { mul: mul, add: add };
  }

  upkeepPerMin() {
    const out = {};
    for (const id of this.built) {
      const def = WONDERS_V31[id];
      for (const k of Object.keys(def.upkeep)) {
        if (k === 'note') continue;
        out[k] = (out[k] || 0) + def.upkeep[k];
      }
    }
    return out;
  }

  serialize() {
    return { built: Array.from(this.built), progress: this.progress, stage: this.stage };
  }
  deserialize(data) {
    if (!data) return;
    this.built = new Set(data.built || []);
    this.progress = data.progress || {};
    this.stage = data.stage || {};
  }
}

/* ============ §5 合并进全局奇观表 ============ */
/* mergeWondersV31()：幂等。优先并入全局 WONDERS_V19（若存在），否则登记到
 * 全局 WONDERS（若存在），两者都不存在时只返回计数。返回新建 WonderManagerV31。 */
function mergeWondersV31() {
  let added = 0, skipped = 0, target = null;
  if (typeof WONDERS_V19 !== 'undefined') target = WONDERS_V19;
  else if (typeof WONDERS !== 'undefined') target = WONDERS;
  if (target) {
    for (const id of WONDERS_V31_ORDER) {
      if (target[id]) { skipped++; continue; }
      target[id] = WONDERS_V31[id];
      added++;
    }
  }
  return { added: added, skipped: skipped, total: WONDERS_V31_COUNT,
    target: target ? 'global' : 'standalone',
    victories: WONDERS_V31_VICTORY, manager: new WonderManagerV31() };
}

/* ============ §6 自检 ============ */
function selfTestWondersV31() {
  const errors = [];
  for (const id of WONDERS_V31_ORDER) {
    const w = WONDERS_V31[id];
    if (!w) { errors.push(id + ': 定义缺失'); continue; }
    if (w.stages.length !== 10) errors.push(id + ': 建造阶段不足 10 个');
    if (w.progressLog.length !== 10) errors.push(id + ': 进度日志不足 10 条');
    if (Object.keys(w.cost).length < 3) errors.push(id + ': 造价资源不足 3 种');
    if (w.needs.tech.length < 2) errors.push(id + ': 前置科技不足 2 项');
    if (w.needs.pop < 100) errors.push(id + ': 人口需求过低');
    if (!w.fx.victoryProgressAdd || w.fx.victoryProgressAdd < 2) errors.push(id + ': 胜利进度加成不足');
    let stageCostSum = 0;
    for (const s of w.stages) {
      for (const k of Object.keys(s.cost)) stageCostSum += s.cost[k];
    }
    const totalCost = Object.keys(w.cost).reduce(function (a, k) { return a + w.cost[k]; }, 0);
    if (Math.abs(stageCostSum - totalCost) > totalCost * 0.15) {
      errors.push(id + ': 10 阶段造价之和与总造价偏差过大');
    }
  }
  if (WONDERS_V31_ORDER.length !== 6) errors.push('奇观数量不为 6');
  try {
    const m = new WonderManagerV31();
    const st = { pop: { count: 500 }, tech: { has: function () { return true; } },
      wonders: { built: function () { return true; } }, planet: { terraform: 100 } };
    for (const id of WONDERS_V31_ORDER) {
      if (id === 'w31-ark') continue;
      const r = m.startBuild(id, st);
      if (!r.ok) errors.push('冒烟：无法开建 ' + id + '：' + r.reason);
    }
    let guardT = 0;
    while (!m.isBuilt('w31-grandlibrary') && guardT++ < 10000) m.tickBuild('w31-grandlibrary', 60, st);
    if (!m.isBuilt('w31-grandlibrary')) errors.push('冒烟：无法建成 w31-grandlibrary');
    const rn = m.startBuild('w31-ark', st);
    if (!rn.ok) errors.push('冒烟：无法开建 w31-ark：' + rn.reason);
    for (const id of WONDERS_V31_ORDER) {
      let guard = 0;
      while (!m.isBuilt(id) && guard++ < 10000) m.tickBuild(id, 60, st);
      if (!m.isBuilt(id)) errors.push('冒烟：无法建成 ' + id);
    }
    if (!m.victoryDone('victory12')) errors.push('冒烟：第十二胜利未达成');
    if (!m.victoryDone('victory13')) errors.push('冒烟：第十三胜利未达成');
    const fx = m.globalFx();
    if (typeof fx.mul.tradeMul !== 'number') errors.push('冒烟：全局贸易加成未汇总');
  } catch (e) { errors.push('冒烟失败: ' + e.message); }
  return { total: WONDERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports = { WONDERS_V31, WONDERS_V31_ORDER, WONDERS_V31_COUNT,
    WONDERS_V31_VICTORY, WonderManagerV31, mergeWondersV31, selfTestWondersV31 };
}

/* ============ §7 奇观细节块（城区 / 航线 / 外交 / 升级，载入时并入 WONDERS_V31） ============ */
const WONDERS_V31_DETAIL = {
  // ---------- w31-galacticmarket 银河交易所 细节 ----------
  "w31-galacticmarket": {
    districtEffects: [
      { district: "居住区", outputMul: 1.1, happinessAdd: 2, note: "「银河交易所」使「居住区」产出 ×1.10，幸福度 +2。" },
      { district: "工业区", outputMul: 1.1500000000000001, happinessAdd: 2, note: "「银河交易所」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.2000000000000002, happinessAdd: 2, note: "「银河交易所」使「商业区」产出 ×1.20，幸福度 +2。" },
      { district: "科研区", outputMul: 1.25, happinessAdd: 2, note: "「银河交易所」使「科研区」产出 ×1.25，幸福度 +2。" },
      { district: "农业区", outputMul: 1.3, happinessAdd: 2, note: "「银河交易所」使「农业区」产出 ×1.30，幸福度 +2。" },
      { district: "军事区", outputMul: 1.35, happinessAdd: 2, note: "「银河交易所」使「军事区」产出 ×1.35，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 80, note: "「银河交易所」开通至「地球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "月球", incomePerMin: 120, note: "「银河交易所」开通至「月球」航线，每分钟贸易收入 +120 星币。" },
      { destination: "小行星带", incomePerMin: 160, note: "「银河交易所」开通至「小行星带」航线，每分钟贸易收入 +160 星币。" },
      { destination: "木卫二", incomePerMin: 200, note: "「银河交易所」开通至「木卫二」航线，每分钟贸易收入 +200 星币。" },
      { destination: "半人马座", incomePerMin: 240, note: "「银河交易所」开通至「半人马座」航线，每分钟贸易收入 +240 星币。" },
      { destination: "火星轨道站", incomePerMin: 280, note: "「银河交易所」开通至「火星轨道站」航线，每分钟贸易收入 +280 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联邦", relationAdd: 10, note: "「银河交易所」使与「地球联邦」关系 +10 点。" },
      { faction: "月球殖民地", relationAdd: 15, note: "「银河交易所」使与「月球殖民地」关系 +15 点。" },
      { faction: "小行星采矿联盟", relationAdd: 20, note: "「银河交易所」使与「小行星采矿联盟」关系 +20 点。" },
      { faction: "木卫二科考站", relationAdd: 25, note: "「银河交易所」使与「木卫二科考站」关系 +25 点。" },
      { faction: "半人马座使团", relationAdd: 30, note: "「银河交易所」使与「半人马座使团」关系 +30 点。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "steel": 100, "nano": 50 }, bonus: "fx×1.1", note: "「银河交易所」升级 1 级：全局加成提升至 1.1 倍。" },
      { level: 2, cost: { "steel": 200, "nano": 100 }, bonus: "fx×1.2", note: "「银河交易所」升级 2 级：全局加成提升至 1.2 倍。" },
      { level: 3, cost: { "steel": 300, "nano": 150 }, bonus: "fx×1.3", note: "「银河交易所」升级 3 级：全局加成提升至 1.3 倍。" },
      { level: 4, cost: { "steel": 400, "nano": 200 }, bonus: "fx×1.4", note: "「银河交易所」升级 4 级：全局加成提升至 1.4 倍。" },
      { level: 5, cost: { "steel": 500, "nano": 250 }, bonus: "fx×1.5", note: "「银河交易所」升级 5 级：全局加成提升至 1.5 倍。" },
    ],
  },
  // ---------- w31-tradefleet 星际商队旗舰 细节 ----------
  "w31-tradefleet": {
    districtEffects: [
      { district: "居住区", outputMul: 1.1, happinessAdd: 2, note: "「星际商队旗舰」使「居住区」产出 ×1.10，幸福度 +2。" },
      { district: "工业区", outputMul: 1.1500000000000001, happinessAdd: 2, note: "「星际商队旗舰」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.2000000000000002, happinessAdd: 2, note: "「星际商队旗舰」使「商业区」产出 ×1.20，幸福度 +2。" },
      { district: "科研区", outputMul: 1.25, happinessAdd: 2, note: "「星际商队旗舰」使「科研区」产出 ×1.25，幸福度 +2。" },
      { district: "农业区", outputMul: 1.3, happinessAdd: 2, note: "「星际商队旗舰」使「农业区」产出 ×1.30，幸福度 +2。" },
      { district: "军事区", outputMul: 1.35, happinessAdd: 2, note: "「星际商队旗舰」使「军事区」产出 ×1.35，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 80, note: "「星际商队旗舰」开通至「地球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "月球", incomePerMin: 120, note: "「星际商队旗舰」开通至「月球」航线，每分钟贸易收入 +120 星币。" },
      { destination: "小行星带", incomePerMin: 160, note: "「星际商队旗舰」开通至「小行星带」航线，每分钟贸易收入 +160 星币。" },
      { destination: "木卫二", incomePerMin: 200, note: "「星际商队旗舰」开通至「木卫二」航线，每分钟贸易收入 +200 星币。" },
      { destination: "半人马座", incomePerMin: 240, note: "「星际商队旗舰」开通至「半人马座」航线，每分钟贸易收入 +240 星币。" },
      { destination: "火星轨道站", incomePerMin: 280, note: "「星际商队旗舰」开通至「火星轨道站」航线，每分钟贸易收入 +280 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联邦", relationAdd: 10, note: "「星际商队旗舰」使与「地球联邦」关系 +10 点。" },
      { faction: "月球殖民地", relationAdd: 15, note: "「星际商队旗舰」使与「月球殖民地」关系 +15 点。" },
      { faction: "小行星采矿联盟", relationAdd: 20, note: "「星际商队旗舰」使与「小行星采矿联盟」关系 +20 点。" },
      { faction: "木卫二科考站", relationAdd: 25, note: "「星际商队旗舰」使与「木卫二科考站」关系 +25 点。" },
      { faction: "半人马座使团", relationAdd: 30, note: "「星际商队旗舰」使与「半人马座使团」关系 +30 点。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "steel": 100, "nano": 50 }, bonus: "fx×1.1", note: "「星际商队旗舰」升级 1 级：全局加成提升至 1.1 倍。" },
      { level: 2, cost: { "steel": 200, "nano": 100 }, bonus: "fx×1.2", note: "「星际商队旗舰」升级 2 级：全局加成提升至 1.2 倍。" },
      { level: 3, cost: { "steel": 300, "nano": 150 }, bonus: "fx×1.3", note: "「星际商队旗舰」升级 3 级：全局加成提升至 1.3 倍。" },
      { level: 4, cost: { "steel": 400, "nano": 200 }, bonus: "fx×1.4", note: "「星际商队旗舰」升级 4 级：全局加成提升至 1.4 倍。" },
      { level: 5, cost: { "steel": 500, "nano": 250 }, bonus: "fx×1.5", note: "「星际商队旗舰」升级 5 级：全局加成提升至 1.5 倍。" },
    ],
  },
  // ---------- w31-bank 星际中央银行 细节 ----------
  "w31-bank": {
    districtEffects: [
      { district: "居住区", outputMul: 1.1, happinessAdd: 2, note: "「星际中央银行」使「居住区」产出 ×1.10，幸福度 +2。" },
      { district: "工业区", outputMul: 1.1500000000000001, happinessAdd: 2, note: "「星际中央银行」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.2000000000000002, happinessAdd: 2, note: "「星际中央银行」使「商业区」产出 ×1.20，幸福度 +2。" },
      { district: "科研区", outputMul: 1.25, happinessAdd: 2, note: "「星际中央银行」使「科研区」产出 ×1.25，幸福度 +2。" },
      { district: "农业区", outputMul: 1.3, happinessAdd: 2, note: "「星际中央银行」使「农业区」产出 ×1.30，幸福度 +2。" },
      { district: "军事区", outputMul: 1.35, happinessAdd: 2, note: "「星际中央银行」使「军事区」产出 ×1.35，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 80, note: "「星际中央银行」开通至「地球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "月球", incomePerMin: 120, note: "「星际中央银行」开通至「月球」航线，每分钟贸易收入 +120 星币。" },
      { destination: "小行星带", incomePerMin: 160, note: "「星际中央银行」开通至「小行星带」航线，每分钟贸易收入 +160 星币。" },
      { destination: "木卫二", incomePerMin: 200, note: "「星际中央银行」开通至「木卫二」航线，每分钟贸易收入 +200 星币。" },
      { destination: "半人马座", incomePerMin: 240, note: "「星际中央银行」开通至「半人马座」航线，每分钟贸易收入 +240 星币。" },
      { destination: "火星轨道站", incomePerMin: 280, note: "「星际中央银行」开通至「火星轨道站」航线，每分钟贸易收入 +280 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联邦", relationAdd: 10, note: "「星际中央银行」使与「地球联邦」关系 +10 点。" },
      { faction: "月球殖民地", relationAdd: 15, note: "「星际中央银行」使与「月球殖民地」关系 +15 点。" },
      { faction: "小行星采矿联盟", relationAdd: 20, note: "「星际中央银行」使与「小行星采矿联盟」关系 +20 点。" },
      { faction: "木卫二科考站", relationAdd: 25, note: "「星际中央银行」使与「木卫二科考站」关系 +25 点。" },
      { faction: "半人马座使团", relationAdd: 30, note: "「星际中央银行」使与「半人马座使团」关系 +30 点。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "steel": 100, "nano": 50 }, bonus: "fx×1.1", note: "「星际中央银行」升级 1 级：全局加成提升至 1.1 倍。" },
      { level: 2, cost: { "steel": 200, "nano": 100 }, bonus: "fx×1.2", note: "「星际中央银行」升级 2 级：全局加成提升至 1.2 倍。" },
      { level: 3, cost: { "steel": 300, "nano": 150 }, bonus: "fx×1.3", note: "「星际中央银行」升级 3 级：全局加成提升至 1.3 倍。" },
      { level: 4, cost: { "steel": 400, "nano": 200 }, bonus: "fx×1.4", note: "「星际中央银行」升级 4 级：全局加成提升至 1.4 倍。" },
      { level: 5, cost: { "steel": 500, "nano": 250 }, bonus: "fx×1.5", note: "「星际中央银行」升级 5 级：全局加成提升至 1.5 倍。" },
    ],
  },
  // ---------- w31-grandlibrary 大图书馆 细节 ----------
  "w31-grandlibrary": {
    districtEffects: [
      { district: "居住区", outputMul: 1.1, happinessAdd: 2, note: "「大图书馆」使「居住区」产出 ×1.10，幸福度 +2。" },
      { district: "工业区", outputMul: 1.1500000000000001, happinessAdd: 2, note: "「大图书馆」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.2000000000000002, happinessAdd: 2, note: "「大图书馆」使「商业区」产出 ×1.20，幸福度 +2。" },
      { district: "科研区", outputMul: 1.25, happinessAdd: 2, note: "「大图书馆」使「科研区」产出 ×1.25，幸福度 +2。" },
      { district: "农业区", outputMul: 1.3, happinessAdd: 2, note: "「大图书馆」使「农业区」产出 ×1.30，幸福度 +2。" },
      { district: "军事区", outputMul: 1.35, happinessAdd: 2, note: "「大图书馆」使「军事区」产出 ×1.35，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 80, note: "「大图书馆」开通至「地球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "月球", incomePerMin: 120, note: "「大图书馆」开通至「月球」航线，每分钟贸易收入 +120 星币。" },
      { destination: "小行星带", incomePerMin: 160, note: "「大图书馆」开通至「小行星带」航线，每分钟贸易收入 +160 星币。" },
      { destination: "木卫二", incomePerMin: 200, note: "「大图书馆」开通至「木卫二」航线，每分钟贸易收入 +200 星币。" },
      { destination: "半人马座", incomePerMin: 240, note: "「大图书馆」开通至「半人马座」航线，每分钟贸易收入 +240 星币。" },
      { destination: "火星轨道站", incomePerMin: 280, note: "「大图书馆」开通至「火星轨道站」航线，每分钟贸易收入 +280 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联邦", relationAdd: 10, note: "「大图书馆」使与「地球联邦」关系 +10 点。" },
      { faction: "月球殖民地", relationAdd: 15, note: "「大图书馆」使与「月球殖民地」关系 +15 点。" },
      { faction: "小行星采矿联盟", relationAdd: 20, note: "「大图书馆」使与「小行星采矿联盟」关系 +20 点。" },
      { faction: "木卫二科考站", relationAdd: 25, note: "「大图书馆」使与「木卫二科考站」关系 +25 点。" },
      { faction: "半人马座使团", relationAdd: 30, note: "「大图书馆」使与「半人马座使团」关系 +30 点。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "steel": 100, "nano": 50 }, bonus: "fx×1.1", note: "「大图书馆」升级 1 级：全局加成提升至 1.1 倍。" },
      { level: 2, cost: { "steel": 200, "nano": 100 }, bonus: "fx×1.2", note: "「大图书馆」升级 2 级：全局加成提升至 1.2 倍。" },
      { level: 3, cost: { "steel": 300, "nano": 150 }, bonus: "fx×1.3", note: "「大图书馆」升级 3 级：全局加成提升至 1.3 倍。" },
      { level: 4, cost: { "steel": 400, "nano": 200 }, bonus: "fx×1.4", note: "「大图书馆」升级 4 级：全局加成提升至 1.4 倍。" },
      { level: 5, cost: { "steel": 500, "nano": 250 }, bonus: "fx×1.5", note: "「大图书馆」升级 5 级：全局加成提升至 1.5 倍。" },
    ],
  },
  // ---------- w31-ark 文明方舟 细节 ----------
  "w31-ark": {
    districtEffects: [
      { district: "居住区", outputMul: 1.1, happinessAdd: 2, note: "「文明方舟」使「居住区」产出 ×1.10，幸福度 +2。" },
      { district: "工业区", outputMul: 1.1500000000000001, happinessAdd: 2, note: "「文明方舟」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.2000000000000002, happinessAdd: 2, note: "「文明方舟」使「商业区」产出 ×1.20，幸福度 +2。" },
      { district: "科研区", outputMul: 1.25, happinessAdd: 2, note: "「文明方舟」使「科研区」产出 ×1.25，幸福度 +2。" },
      { district: "农业区", outputMul: 1.3, happinessAdd: 2, note: "「文明方舟」使「农业区」产出 ×1.30，幸福度 +2。" },
      { district: "军事区", outputMul: 1.35, happinessAdd: 2, note: "「文明方舟」使「军事区」产出 ×1.35，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 80, note: "「文明方舟」开通至「地球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "月球", incomePerMin: 120, note: "「文明方舟」开通至「月球」航线，每分钟贸易收入 +120 星币。" },
      { destination: "小行星带", incomePerMin: 160, note: "「文明方舟」开通至「小行星带」航线，每分钟贸易收入 +160 星币。" },
      { destination: "木卫二", incomePerMin: 200, note: "「文明方舟」开通至「木卫二」航线，每分钟贸易收入 +200 星币。" },
      { destination: "半人马座", incomePerMin: 240, note: "「文明方舟」开通至「半人马座」航线，每分钟贸易收入 +240 星币。" },
      { destination: "火星轨道站", incomePerMin: 280, note: "「文明方舟」开通至「火星轨道站」航线，每分钟贸易收入 +280 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联邦", relationAdd: 10, note: "「文明方舟」使与「地球联邦」关系 +10 点。" },
      { faction: "月球殖民地", relationAdd: 15, note: "「文明方舟」使与「月球殖民地」关系 +15 点。" },
      { faction: "小行星采矿联盟", relationAdd: 20, note: "「文明方舟」使与「小行星采矿联盟」关系 +20 点。" },
      { faction: "木卫二科考站", relationAdd: 25, note: "「文明方舟」使与「木卫二科考站」关系 +25 点。" },
      { faction: "半人马座使团", relationAdd: 30, note: "「文明方舟」使与「半人马座使团」关系 +30 点。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "steel": 100, "nano": 50 }, bonus: "fx×1.1", note: "「文明方舟」升级 1 级：全局加成提升至 1.1 倍。" },
      { level: 2, cost: { "steel": 200, "nano": 100 }, bonus: "fx×1.2", note: "「文明方舟」升级 2 级：全局加成提升至 1.2 倍。" },
      { level: 3, cost: { "steel": 300, "nano": 150 }, bonus: "fx×1.3", note: "「文明方舟」升级 3 级：全局加成提升至 1.3 倍。" },
      { level: 4, cost: { "steel": 400, "nano": 200 }, bonus: "fx×1.4", note: "「文明方舟」升级 4 级：全局加成提升至 1.4 倍。" },
      { level: 5, cost: { "steel": 500, "nano": 250 }, bonus: "fx×1.5", note: "「文明方舟」升级 5 级：全局加成提升至 1.5 倍。" },
    ],
  },
  // ---------- w31-observatory 深空天文台 细节 ----------
  "w31-observatory": {
    districtEffects: [
      { district: "居住区", outputMul: 1.1, happinessAdd: 2, note: "「深空天文台」使「居住区」产出 ×1.10，幸福度 +2。" },
      { district: "工业区", outputMul: 1.1500000000000001, happinessAdd: 2, note: "「深空天文台」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.2000000000000002, happinessAdd: 2, note: "「深空天文台」使「商业区」产出 ×1.20，幸福度 +2。" },
      { district: "科研区", outputMul: 1.25, happinessAdd: 2, note: "「深空天文台」使「科研区」产出 ×1.25，幸福度 +2。" },
      { district: "农业区", outputMul: 1.3, happinessAdd: 2, note: "「深空天文台」使「农业区」产出 ×1.30，幸福度 +2。" },
      { district: "军事区", outputMul: 1.35, happinessAdd: 2, note: "「深空天文台」使「军事区」产出 ×1.35，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 80, note: "「深空天文台」开通至「地球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "月球", incomePerMin: 120, note: "「深空天文台」开通至「月球」航线，每分钟贸易收入 +120 星币。" },
      { destination: "小行星带", incomePerMin: 160, note: "「深空天文台」开通至「小行星带」航线，每分钟贸易收入 +160 星币。" },
      { destination: "木卫二", incomePerMin: 200, note: "「深空天文台」开通至「木卫二」航线，每分钟贸易收入 +200 星币。" },
      { destination: "半人马座", incomePerMin: 240, note: "「深空天文台」开通至「半人马座」航线，每分钟贸易收入 +240 星币。" },
      { destination: "火星轨道站", incomePerMin: 280, note: "「深空天文台」开通至「火星轨道站」航线，每分钟贸易收入 +280 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联邦", relationAdd: 10, note: "「深空天文台」使与「地球联邦」关系 +10 点。" },
      { faction: "月球殖民地", relationAdd: 15, note: "「深空天文台」使与「月球殖民地」关系 +15 点。" },
      { faction: "小行星采矿联盟", relationAdd: 20, note: "「深空天文台」使与「小行星采矿联盟」关系 +20 点。" },
      { faction: "木卫二科考站", relationAdd: 25, note: "「深空天文台」使与「木卫二科考站」关系 +25 点。" },
      { faction: "半人马座使团", relationAdd: 30, note: "「深空天文台」使与「半人马座使团」关系 +30 点。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "steel": 100, "nano": 50 }, bonus: "fx×1.1", note: "「深空天文台」升级 1 级：全局加成提升至 1.1 倍。" },
      { level: 2, cost: { "steel": 200, "nano": 100 }, bonus: "fx×1.2", note: "「深空天文台」升级 2 级：全局加成提升至 1.2 倍。" },
      { level: 3, cost: { "steel": 300, "nano": 150 }, bonus: "fx×1.3", note: "「深空天文台」升级 3 级：全局加成提升至 1.3 倍。" },
      { level: 4, cost: { "steel": 400, "nano": 200 }, bonus: "fx×1.4", note: "「深空天文台」升级 4 级：全局加成提升至 1.4 倍。" },
      { level: 5, cost: { "steel": 500, "nano": 250 }, bonus: "fx×1.5", note: "「深空天文台」升级 5 级：全局加成提升至 1.5 倍。" },
    ],
  },
};

for (const _wid of Object.keys(WONDERS_V31_DETAIL)) {
  if (WONDERS_V31[_wid]) {
    WONDERS_V31[_wid].detail = WONDERS_V31_DETAIL[_wid];
  }
}

function selfTestWondersV31Detail() {
  const errors = [];
  for (const id of WONDERS_V31_ORDER) {
    const d = (WONDERS_V31[id] || {}).detail;
    if (!d || d.districtEffects.length !== 6) errors.push(id + ': 城区加成不足 6 条');
    if (!d || d.tradeRoutes.length !== 6) errors.push(id + ': 航线不足 6 条');
    if (!d || d.upgradePaths.length !== 5) errors.push(id + ': 升级路线不足 5 条');
  }
  return { total: WONDERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V31_DETAIL = WONDERS_V31_DETAIL;
  module.exports.selfTestWondersV31Detail = selfTestWondersV31Detail;
}

/* ============ §8 奇观细节块 2（建造日志 / 协同，载入时并入 WONDERS_V31） ============ */
const WONDERS_V31_DETAIL2 = {
  // ---------- w31-galacticmarket 银河交易所 建造日志 ----------
  "w31-galacticmarket": {
    constructionLog: [
      {
        stage: 1,
        pct: 10,
        event: "「银河交易所」奠基阶段完工。",
        workers: 10,
        durationSec: 120,
        log: "建造日志：奠基阶段验收通过，进度 10%。",
        note: "第 1 阶段「奠基」耗时 120 秒。",
      },
      {
        stage: 2,
        pct: 20,
        event: "「银河交易所」交易大厅地基阶段完工。",
        workers: 15,
        durationSec: 150,
        log: "建造日志：交易大厅地基阶段验收通过，进度 20%。",
        note: "第 2 阶段「交易大厅地基」耗时 150 秒。",
      },
      {
        stage: 3,
        pct: 30,
        event: "「银河交易所」穹顶结构阶段完工。",
        workers: 20,
        durationSec: 180,
        log: "建造日志：穹顶结构阶段验收通过，进度 30%。",
        note: "第 3 阶段「穹顶结构」耗时 180 秒。",
      },
      {
        stage: 4,
        pct: 40,
        event: "「银河交易所」报价大屏阶段完工。",
        workers: 25,
        durationSec: 210,
        log: "建造日志：报价大屏阶段验收通过，进度 40%。",
        note: "第 4 阶段「报价大屏」耗时 210 秒。",
      },
      {
        stage: 5,
        pct: 50,
        event: "「银河交易所」结算中心阶段完工。",
        workers: 30,
        durationSec: 240,
        log: "建造日志：结算中心阶段验收通过，进度 50%。",
        note: "第 5 阶段「结算中心」耗时 240 秒。",
      },
      {
        stage: 6,
        pct: 60,
        event: "「银河交易所」贵宾交易席阶段完工。",
        workers: 35,
        durationSec: 270,
        log: "建造日志：贵宾交易席阶段验收通过，进度 60%。",
        note: "第 6 阶段「贵宾交易席」耗时 270 秒。",
      },
      {
        stage: 7,
        pct: 70,
        event: "「银河交易所」星际通讯塔阶段完工。",
        workers: 40,
        durationSec: 300,
        log: "建造日志：星际通讯塔阶段验收通过，进度 70%。",
        note: "第 7 阶段「星际通讯塔」耗时 300 秒。",
      },
      {
        stage: 8,
        pct: 80,
        event: "「银河交易所」风控中枢阶段完工。",
        workers: 45,
        durationSec: 330,
        log: "建造日志：风控中枢阶段验收通过，进度 80%。",
        note: "第 8 阶段「风控中枢」耗时 330 秒。",
      },
      {
        stage: 9,
        pct: 90,
        event: "「银河交易所」开市筹备阶段完工。",
        workers: 50,
        durationSec: 360,
        log: "建造日志：开市筹备阶段验收通过，进度 90%。",
        note: "第 9 阶段「开市筹备」耗时 360 秒。",
      },
      {
        stage: 10,
        pct: 100,
        event: "「银河交易所」首日开市阶段完工。",
        workers: 55,
        durationSec: 390,
        log: "建造日志：首日开市阶段验收通过，进度 100%。",
        note: "第 10 阶段「首日开市」耗时 390 秒。",
      },
    ],
    synergyDetail: [
      { wonder: "w31-tradefleet", bonus: "victoryProgressAdd+1", note: "「银河交易所」与「星际商队旗舰」同属第12胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-bank", bonus: "victoryProgressAdd+1", note: "「银河交易所」与「星际中央银行」同属第12胜利，同时拥有时胜利进度再 +1。" },
    ],
  },
  // ---------- w31-tradefleet 星际商队旗舰 建造日志 ----------
  "w31-tradefleet": {
    constructionLog: [
      {
        stage: 1,
        pct: 10,
        event: "「星际商队旗舰」奠基阶段完工。",
        workers: 10,
        durationSec: 120,
        log: "建造日志：奠基阶段验收通过，进度 10%。",
        note: "第 1 阶段「奠基」耗时 120 秒。",
      },
      {
        stage: 2,
        pct: 20,
        event: "「星际商队旗舰」龙骨铺设阶段完工。",
        workers: 15,
        durationSec: 150,
        log: "建造日志：龙骨铺设阶段验收通过，进度 20%。",
        note: "第 2 阶段「龙骨铺设」耗时 150 秒。",
      },
      {
        stage: 3,
        pct: 30,
        event: "「星际商队旗舰」船体结构阶段完工。",
        workers: 20,
        durationSec: 180,
        log: "建造日志：船体结构阶段验收通过，进度 30%。",
        note: "第 3 阶段「船体结构」耗时 180 秒。",
      },
      {
        stage: 4,
        pct: 40,
        event: "「星际商队旗舰」货舱阵列阶段完工。",
        workers: 25,
        durationSec: 210,
        log: "建造日志：货舱阵列阶段验收通过，进度 40%。",
        note: "第 4 阶段「货舱阵列」耗时 210 秒。",
      },
      {
        stage: 5,
        pct: 50,
        event: "「星际商队旗舰」引擎安装阶段完工。",
        workers: 30,
        durationSec: 240,
        log: "建造日志：引擎安装阶段验收通过，进度 50%。",
        note: "第 5 阶段「引擎安装」耗时 240 秒。",
      },
      {
        stage: 6,
        pct: 60,
        event: "「星际商队旗舰」舰桥装修阶段完工。",
        workers: 35,
        durationSec: 270,
        log: "建造日志：舰桥装修阶段验收通过，进度 60%。",
        note: "第 6 阶段「舰桥装修」耗时 270 秒。",
      },
      {
        stage: 7,
        pct: 70,
        event: "「星际商队旗舰」护盾系统阶段完工。",
        workers: 40,
        durationSec: 300,
        log: "建造日志：护盾系统阶段验收通过，进度 70%。",
        note: "第 7 阶段「护盾系统」耗时 300 秒。",
      },
      {
        stage: 8,
        pct: 80,
        event: "「星际商队旗舰」商队编组阶段完工。",
        workers: 45,
        durationSec: 330,
        log: "建造日志：商队编组阶段验收通过，进度 80%。",
        note: "第 8 阶段「商队编组」耗时 330 秒。",
      },
      {
        stage: 9,
        pct: 90,
        event: "「星际商队旗舰」首航筹备阶段完工。",
        workers: 50,
        durationSec: 360,
        log: "建造日志：首航筹备阶段验收通过，进度 90%。",
        note: "第 9 阶段「首航筹备」耗时 360 秒。",
      },
      {
        stage: 10,
        pct: 100,
        event: "「星际商队旗舰」首航启程阶段完工。",
        workers: 55,
        durationSec: 390,
        log: "建造日志：首航启程阶段验收通过，进度 100%。",
        note: "第 10 阶段「首航启程」耗时 390 秒。",
      },
    ],
    synergyDetail: [
      { wonder: "w31-galacticmarket", bonus: "victoryProgressAdd+1", note: "「星际商队旗舰」与「银河交易所」同属第12胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-bank", bonus: "victoryProgressAdd+1", note: "「星际商队旗舰」与「星际中央银行」同属第12胜利，同时拥有时胜利进度再 +1。" },
    ],
  },
  // ---------- w31-bank 星际中央银行 建造日志 ----------
  "w31-bank": {
    constructionLog: [
      {
        stage: 1,
        pct: 10,
        event: "「星际中央银行」奠基阶段完工。",
        workers: 10,
        durationSec: 120,
        log: "建造日志：奠基阶段验收通过，进度 10%。",
        note: "第 1 阶段「奠基」耗时 120 秒。",
      },
      {
        stage: 2,
        pct: 20,
        event: "「星际中央银行」金库地基阶段完工。",
        workers: 15,
        durationSec: 150,
        log: "建造日志：金库地基阶段验收通过，进度 20%。",
        note: "第 2 阶段「金库地基」耗时 150 秒。",
      },
      {
        stage: 3,
        pct: 30,
        event: "「星际中央银行」防爆穹顶阶段完工。",
        workers: 20,
        durationSec: 180,
        log: "建造日志：防爆穹顶阶段验收通过，进度 30%。",
        note: "第 3 阶段「防爆穹顶」耗时 180 秒。",
      },
      {
        stage: 4,
        pct: 40,
        event: "「星际中央银行」金库大门阶段完工。",
        workers: 25,
        durationSec: 210,
        log: "建造日志：金库大门阶段验收通过，进度 40%。",
        note: "第 4 阶段「金库大门」耗时 210 秒。",
      },
      {
        stage: 5,
        pct: 50,
        event: "「星际中央银行」印钞中心阶段完工。",
        workers: 30,
        durationSec: 240,
        log: "建造日志：印钞中心阶段验收通过，进度 50%。",
        note: "第 5 阶段「印钞中心」耗时 240 秒。",
      },
      {
        stage: 6,
        pct: 60,
        event: "「星际中央银行」清算大厅阶段完工。",
        workers: 35,
        durationSec: 270,
        log: "建造日志：清算大厅阶段验收通过，进度 60%。",
        note: "第 6 阶段「清算大厅」耗时 270 秒。",
      },
      {
        stage: 7,
        pct: 70,
        event: "「星际中央银行」利率委员会阶段完工。",
        workers: 40,
        durationSec: 300,
        log: "建造日志：利率委员会阶段验收通过，进度 70%。",
        note: "第 7 阶段「利率委员会」耗时 300 秒。",
      },
      {
        stage: 8,
        pct: 80,
        event: "「星际中央银行」安保系统阶段完工。",
        workers: 45,
        durationSec: 330,
        log: "建造日志：安保系统阶段验收通过，进度 80%。",
        note: "第 8 阶段「安保系统」耗时 330 秒。",
      },
      {
        stage: 9,
        pct: 90,
        event: "「星际中央银行」发钞筹备阶段完工。",
        workers: 50,
        durationSec: 360,
        log: "建造日志：发钞筹备阶段验收通过，进度 90%。",
        note: "第 9 阶段「发钞筹备」耗时 360 秒。",
      },
      {
        stage: 10,
        pct: 100,
        event: "「星际中央银行」首批星币发行阶段完工。",
        workers: 55,
        durationSec: 390,
        log: "建造日志：首批星币发行阶段验收通过，进度 100%。",
        note: "第 10 阶段「首批星币发行」耗时 390 秒。",
      },
    ],
    synergyDetail: [
      { wonder: "w31-galacticmarket", bonus: "victoryProgressAdd+1", note: "「星际中央银行」与「银河交易所」同属第12胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-tradefleet", bonus: "victoryProgressAdd+1", note: "「星际中央银行」与「星际商队旗舰」同属第12胜利，同时拥有时胜利进度再 +1。" },
    ],
  },
  // ---------- w31-grandlibrary 大图书馆 建造日志 ----------
  "w31-grandlibrary": {
    constructionLog: [
      {
        stage: 1,
        pct: 10,
        event: "「大图书馆」奠基阶段完工。",
        workers: 10,
        durationSec: 120,
        log: "建造日志：奠基阶段验收通过，进度 10%。",
        note: "第 1 阶段「奠基」耗时 120 秒。",
      },
      {
        stage: 2,
        pct: 20,
        event: "「大图书馆」书库地基阶段完工。",
        workers: 15,
        durationSec: 150,
        log: "建造日志：书库地基阶段验收通过，进度 20%。",
        note: "第 2 阶段「书库地基」耗时 150 秒。",
      },
      {
        stage: 3,
        pct: 30,
        event: "「大图书馆」穹顶阅览室阶段完工。",
        workers: 20,
        durationSec: 180,
        log: "建造日志：穹顶阅览室阶段验收通过，进度 30%。",
        note: "第 3 阶段「穹顶阅览室」耗时 180 秒。",
      },
      {
        stage: 4,
        pct: 40,
        event: "「大图书馆」藏书塔阶段完工。",
        workers: 25,
        durationSec: 210,
        log: "建造日志：藏书塔阶段验收通过，进度 40%。",
        note: "第 4 阶段「藏书塔」耗时 210 秒。",
      },
      {
        stage: 5,
        pct: 50,
        event: "「大图书馆」翻译中心阶段完工。",
        workers: 30,
        durationSec: 240,
        log: "建造日志：翻译中心阶段验收通过，进度 50%。",
        note: "第 5 阶段「翻译中心」耗时 240 秒。",
      },
      {
        stage: 6,
        pct: 60,
        event: "「大图书馆」数字档案馆阶段完工。",
        workers: 35,
        durationSec: 270,
        log: "建造日志：数字档案馆阶段验收通过，进度 60%。",
        note: "第 6 阶段「数字档案馆」耗时 270 秒。",
      },
      {
        stage: 7,
        pct: 70,
        event: "「大图书馆」学者公寓阶段完工。",
        workers: 40,
        durationSec: 300,
        log: "建造日志：学者公寓阶段验收通过，进度 70%。",
        note: "第 7 阶段「学者公寓」耗时 300 秒。",
      },
      {
        stage: 8,
        pct: 80,
        event: "「大图书馆」恒温系统阶段完工。",
        workers: 45,
        durationSec: 330,
        log: "建造日志：恒温系统阶段验收通过，进度 80%。",
        note: "第 8 阶段「恒温系统」耗时 330 秒。",
      },
      {
        stage: 9,
        pct: 90,
        event: "「大图书馆」开馆筹备阶段完工。",
        workers: 50,
        durationSec: 360,
        log: "建造日志：开馆筹备阶段验收通过，进度 90%。",
        note: "第 9 阶段「开馆筹备」耗时 360 秒。",
      },
      {
        stage: 10,
        pct: 100,
        event: "「大图书馆」首日开馆阶段完工。",
        workers: 55,
        durationSec: 390,
        log: "建造日志：首日开馆阶段验收通过，进度 100%。",
        note: "第 10 阶段「首日开馆」耗时 390 秒。",
      },
    ],
    synergyDetail: [
      { wonder: "w31-ark", bonus: "victoryProgressAdd+1", note: "「大图书馆」与「文明方舟」同属第13胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-observatory", bonus: "victoryProgressAdd+1", note: "「大图书馆」与「深空天文台」同属第13胜利，同时拥有时胜利进度再 +1。" },
    ],
  },
  // ---------- w31-ark 文明方舟 建造日志 ----------
  "w31-ark": {
    constructionLog: [
      {
        stage: 1,
        pct: 10,
        event: "「文明方舟」奠基阶段完工。",
        workers: 10,
        durationSec: 120,
        log: "建造日志：奠基阶段验收通过，进度 10%。",
        note: "第 1 阶段「奠基」耗时 120 秒。",
      },
      {
        stage: 2,
        pct: 20,
        event: "「文明方舟」船坞搭建阶段完工。",
        workers: 15,
        durationSec: 150,
        log: "建造日志：船坞搭建阶段验收通过，进度 20%。",
        note: "第 2 阶段「船坞搭建」耗时 150 秒。",
      },
      {
        stage: 3,
        pct: 30,
        event: "「文明方舟」基因库舱阶段完工。",
        workers: 20,
        durationSec: 180,
        log: "建造日志：基因库舱阶段验收通过，进度 30%。",
        note: "第 3 阶段「基因库舱」耗时 180 秒。",
      },
      {
        stage: 4,
        pct: 40,
        event: "「文明方舟」文化舱阶段完工。",
        workers: 25,
        durationSec: 210,
        log: "建造日志：文化舱阶段验收通过，进度 40%。",
        note: "第 4 阶段「文化舱」耗时 210 秒。",
      },
      {
        stage: 5,
        pct: 50,
        event: "「文明方舟」生态循环舱阶段完工。",
        workers: 30,
        durationSec: 240,
        log: "建造日志：生态循环舱阶段验收通过，进度 50%。",
        note: "第 5 阶段「生态循环舱」耗时 240 秒。",
      },
      {
        stage: 6,
        pct: 60,
        event: "「文明方舟」冬眠舱阵列阶段完工。",
        workers: 35,
        durationSec: 270,
        log: "建造日志：冬眠舱阵列阶段验收通过，进度 60%。",
        note: "第 6 阶段「冬眠舱阵列」耗时 270 秒。",
      },
      {
        stage: 7,
        pct: 70,
        event: "「文明方舟」舰桥系统阶段完工。",
        workers: 40,
        durationSec: 300,
        log: "建造日志：舰桥系统阶段验收通过，进度 70%。",
        note: "第 7 阶段「舰桥系统」耗时 300 秒。",
      },
      {
        stage: 8,
        pct: 80,
        event: "「文明方舟」护盾充能阶段完工。",
        workers: 45,
        durationSec: 330,
        log: "建造日志：护盾充能阶段验收通过，进度 80%。",
        note: "第 8 阶段「护盾充能」耗时 330 秒。",
      },
      {
        stage: 9,
        pct: 90,
        event: "「文明方舟」启程筹备阶段完工。",
        workers: 50,
        durationSec: 360,
        log: "建造日志：启程筹备阶段验收通过，进度 90%。",
        note: "第 9 阶段「启程筹备」耗时 360 秒。",
      },
      {
        stage: 10,
        pct: 100,
        event: "「文明方舟」方舟升空阶段完工。",
        workers: 55,
        durationSec: 390,
        log: "建造日志：方舟升空阶段验收通过，进度 100%。",
        note: "第 10 阶段「方舟升空」耗时 390 秒。",
      },
    ],
    synergyDetail: [
      { wonder: "w31-grandlibrary", bonus: "victoryProgressAdd+1", note: "「文明方舟」与「大图书馆」同属第13胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-observatory", bonus: "victoryProgressAdd+1", note: "「文明方舟」与「深空天文台」同属第13胜利，同时拥有时胜利进度再 +1。" },
    ],
  },
  // ---------- w31-observatory 深空天文台 建造日志 ----------
  "w31-observatory": {
    constructionLog: [
      {
        stage: 1,
        pct: 10,
        event: "「深空天文台」奠基阶段完工。",
        workers: 10,
        durationSec: 120,
        log: "建造日志：奠基阶段验收通过，进度 10%。",
        note: "第 1 阶段「奠基」耗时 120 秒。",
      },
      {
        stage: 2,
        pct: 20,
        event: "「深空天文台」基座浇筑阶段完工。",
        workers: 15,
        durationSec: 150,
        log: "建造日志：基座浇筑阶段验收通过，进度 20%。",
        note: "第 2 阶段「基座浇筑」耗时 150 秒。",
      },
      {
        stage: 3,
        pct: 30,
        event: "「深空天文台」镜面阵列阶段完工。",
        workers: 20,
        durationSec: 180,
        log: "建造日志：镜面阵列阶段验收通过，进度 30%。",
        note: "第 3 阶段「镜面阵列」耗时 180 秒。",
      },
      {
        stage: 4,
        pct: 40,
        event: "「深空天文台」主镜安装阶段完工。",
        workers: 25,
        durationSec: 210,
        log: "建造日志：主镜安装阶段验收通过，进度 40%。",
        note: "第 4 阶段「主镜安装」耗时 210 秒。",
      },
      {
        stage: 5,
        pct: 50,
        event: "「深空天文台」信号接收塔阶段完工。",
        workers: 30,
        durationSec: 240,
        log: "建造日志：信号接收塔阶段验收通过，进度 50%。",
        note: "第 5 阶段「信号接收塔」耗时 240 秒。",
      },
      {
        stage: 6,
        pct: 60,
        event: "「深空天文台」数据中心阶段完工。",
        workers: 35,
        durationSec: 270,
        log: "建造日志：数据中心阶段验收通过，进度 60%。",
        note: "第 6 阶段「数据中心」耗时 270 秒。",
      },
      {
        stage: 7,
        pct: 70,
        event: "「深空天文台」观测穹顶阶段完工。",
        workers: 40,
        durationSec: 300,
        log: "建造日志：观测穹顶阶段验收通过，进度 70%。",
        note: "第 7 阶段「观测穹顶」耗时 300 秒。",
      },
      {
        stage: 8,
        pct: 80,
        event: "「深空天文台」校准系统阶段完工。",
        workers: 45,
        durationSec: 330,
        log: "建造日志：校准系统阶段验收通过，进度 80%。",
        note: "第 8 阶段「校准系统」耗时 330 秒。",
      },
      {
        stage: 9,
        pct: 90,
        event: "「深空天文台」首光筹备阶段完工。",
        workers: 50,
        durationSec: 360,
        log: "建造日志：首光筹备阶段验收通过，进度 90%。",
        note: "第 9 阶段「首光筹备」耗时 360 秒。",
      },
      {
        stage: 10,
        pct: 100,
        event: "「深空天文台」首光观测阶段完工。",
        workers: 55,
        durationSec: 390,
        log: "建造日志：首光观测阶段验收通过，进度 100%。",
        note: "第 10 阶段「首光观测」耗时 390 秒。",
      },
    ],
    synergyDetail: [
      { wonder: "w31-grandlibrary", bonus: "victoryProgressAdd+1", note: "「深空天文台」与「大图书馆」同属第13胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w31-ark", bonus: "victoryProgressAdd+1", note: "「深空天文台」与「文明方舟」同属第13胜利，同时拥有时胜利进度再 +1。" },
    ],
  },
};

for (const _wid of Object.keys(WONDERS_V31_DETAIL2)) {
  if (WONDERS_V31[_wid]) {
    WONDERS_V31[_wid].detail2 = WONDERS_V31_DETAIL2[_wid];
    if (WONDERS_V31[_wid].detail) Object.assign(WONDERS_V31[_wid].detail, WONDERS_V31_DETAIL2[_wid]);
  }
}

function selfTestWondersV31Detail2() {
  const errors = [];
  for (const id of WONDERS_V31_ORDER) {
    const d = (WONDERS_V31[id] || {}).detail2;
    if (!d || d.constructionLog.length !== 10) errors.push(id + ': 建造日志不足 10 条');
  }
  return { total: WONDERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V31_DETAIL2 = WONDERS_V31_DETAIL2;
  module.exports.selfTestWondersV31Detail2 = selfTestWondersV31Detail2;
}

/* ============ §9 奇观细节块 3（运营指南 / 风险表，载入时并入 WONDERS_V31） ============ */
const WONDERS_V31_DETAIL3 = {
  // ---------- w31-galacticmarket 银河交易所 运营指南 ----------
  "w31-galacticmarket": {
    operationGuide: [
      { step: 1, action: "运营第 1 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 1 步。" },
      { step: 2, action: "运营第 2 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 2 步。" },
      { step: 3, action: "运营第 3 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 3 步。" },
      { step: 4, action: "运营第 4 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 4 步。" },
      { step: 5, action: "运营第 5 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 5 步。" },
      { step: 6, action: "运营第 6 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 6 步。" },
      { step: 7, action: "运营第 7 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 7 步。" },
      { step: 8, action: "运营第 8 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 8 步。" },
      { step: 9, action: "运营第 9 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 9 步。" },
      { step: 10, action: "运营第 10 步：检查「银河交易所」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「银河交易所」运营指南第 10 步。" },
    ],
    riskTable: [
      { risk: "灾难冲击", severity: 3, mitigation: "建造期进度暂停，不倒退。", note: "「银河交易所」风险「灾难冲击」：严重度 3。" },
      { risk: "维护断供", severity: 2, mitigation: "维护不足时效果减半，及时补缴。", note: "「银河交易所」风险「维护断供」：严重度 2。" },
      { risk: "人口不足", severity: 2, mitigation: "人口跌破前置时暂停建造，不拆除。", note: "「银河交易所」风险「人口不足」：严重度 2。" },
      { risk: "科技被禁", severity: 1, mitigation: "前置科技失效不影响已建成奇观。", note: "「银河交易所」风险「科技被禁」：严重度 1。" },
      { risk: "贸易中断", severity: 2, mitigation: "贸易类加成随航线中断暂时失效。", note: "「银河交易所」风险「贸易中断」：严重度 2。" },
      { risk: "电力短缺", severity: 3, mitigation: "电力不足时阶段施工暂停，不倒退。", note: "「银河交易所」风险「电力短缺」：严重度 3。" },
    ],
  },
  // ---------- w31-tradefleet 星际商队旗舰 运营指南 ----------
  "w31-tradefleet": {
    operationGuide: [
      { step: 1, action: "运营第 1 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 1 步。" },
      { step: 2, action: "运营第 2 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 2 步。" },
      { step: 3, action: "运营第 3 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 3 步。" },
      { step: 4, action: "运营第 4 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 4 步。" },
      { step: 5, action: "运营第 5 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 5 步。" },
      { step: 6, action: "运营第 6 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 6 步。" },
      { step: 7, action: "运营第 7 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 7 步。" },
      { step: 8, action: "运营第 8 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 8 步。" },
      { step: 9, action: "运营第 9 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 9 步。" },
      { step: 10, action: "运营第 10 步：检查「星际商队旗舰」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际商队旗舰」运营指南第 10 步。" },
    ],
    riskTable: [
      { risk: "灾难冲击", severity: 3, mitigation: "建造期进度暂停，不倒退。", note: "「星际商队旗舰」风险「灾难冲击」：严重度 3。" },
      { risk: "维护断供", severity: 2, mitigation: "维护不足时效果减半，及时补缴。", note: "「星际商队旗舰」风险「维护断供」：严重度 2。" },
      { risk: "人口不足", severity: 2, mitigation: "人口跌破前置时暂停建造，不拆除。", note: "「星际商队旗舰」风险「人口不足」：严重度 2。" },
      { risk: "科技被禁", severity: 1, mitigation: "前置科技失效不影响已建成奇观。", note: "「星际商队旗舰」风险「科技被禁」：严重度 1。" },
      { risk: "贸易中断", severity: 2, mitigation: "贸易类加成随航线中断暂时失效。", note: "「星际商队旗舰」风险「贸易中断」：严重度 2。" },
      { risk: "电力短缺", severity: 3, mitigation: "电力不足时阶段施工暂停，不倒退。", note: "「星际商队旗舰」风险「电力短缺」：严重度 3。" },
    ],
  },
  // ---------- w31-bank 星际中央银行 运营指南 ----------
  "w31-bank": {
    operationGuide: [
      { step: 1, action: "运营第 1 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 1 步。" },
      { step: 2, action: "运营第 2 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 2 步。" },
      { step: 3, action: "运营第 3 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 3 步。" },
      { step: 4, action: "运营第 4 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 4 步。" },
      { step: 5, action: "运营第 5 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 5 步。" },
      { step: 6, action: "运营第 6 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 6 步。" },
      { step: 7, action: "运营第 7 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 7 步。" },
      { step: 8, action: "运营第 8 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 8 步。" },
      { step: 9, action: "运营第 9 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 9 步。" },
      { step: 10, action: "运营第 10 步：检查「星际中央银行」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「星际中央银行」运营指南第 10 步。" },
    ],
    riskTable: [
      { risk: "灾难冲击", severity: 3, mitigation: "建造期进度暂停，不倒退。", note: "「星际中央银行」风险「灾难冲击」：严重度 3。" },
      { risk: "维护断供", severity: 2, mitigation: "维护不足时效果减半，及时补缴。", note: "「星际中央银行」风险「维护断供」：严重度 2。" },
      { risk: "人口不足", severity: 2, mitigation: "人口跌破前置时暂停建造，不拆除。", note: "「星际中央银行」风险「人口不足」：严重度 2。" },
      { risk: "科技被禁", severity: 1, mitigation: "前置科技失效不影响已建成奇观。", note: "「星际中央银行」风险「科技被禁」：严重度 1。" },
      { risk: "贸易中断", severity: 2, mitigation: "贸易类加成随航线中断暂时失效。", note: "「星际中央银行」风险「贸易中断」：严重度 2。" },
      { risk: "电力短缺", severity: 3, mitigation: "电力不足时阶段施工暂停，不倒退。", note: "「星际中央银行」风险「电力短缺」：严重度 3。" },
    ],
  },
  // ---------- w31-grandlibrary 大图书馆 运营指南 ----------
  "w31-grandlibrary": {
    operationGuide: [
      { step: 1, action: "运营第 1 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 1 步。" },
      { step: 2, action: "运营第 2 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 2 步。" },
      { step: 3, action: "运营第 3 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 3 步。" },
      { step: 4, action: "运营第 4 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 4 步。" },
      { step: 5, action: "运营第 5 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 5 步。" },
      { step: 6, action: "运营第 6 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 6 步。" },
      { step: 7, action: "运营第 7 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 7 步。" },
      { step: 8, action: "运营第 8 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 8 步。" },
      { step: 9, action: "运营第 9 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 9 步。" },
      { step: 10, action: "运营第 10 步：检查「大图书馆」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「大图书馆」运营指南第 10 步。" },
    ],
    riskTable: [
      { risk: "灾难冲击", severity: 3, mitigation: "建造期进度暂停，不倒退。", note: "「大图书馆」风险「灾难冲击」：严重度 3。" },
      { risk: "维护断供", severity: 2, mitigation: "维护不足时效果减半，及时补缴。", note: "「大图书馆」风险「维护断供」：严重度 2。" },
      { risk: "人口不足", severity: 2, mitigation: "人口跌破前置时暂停建造，不拆除。", note: "「大图书馆」风险「人口不足」：严重度 2。" },
      { risk: "科技被禁", severity: 1, mitigation: "前置科技失效不影响已建成奇观。", note: "「大图书馆」风险「科技被禁」：严重度 1。" },
      { risk: "贸易中断", severity: 2, mitigation: "贸易类加成随航线中断暂时失效。", note: "「大图书馆」风险「贸易中断」：严重度 2。" },
      { risk: "电力短缺", severity: 3, mitigation: "电力不足时阶段施工暂停，不倒退。", note: "「大图书馆」风险「电力短缺」：严重度 3。" },
    ],
  },
  // ---------- w31-ark 文明方舟 运营指南 ----------
  "w31-ark": {
    operationGuide: [
      { step: 1, action: "运营第 1 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 1 步。" },
      { step: 2, action: "运营第 2 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 2 步。" },
      { step: 3, action: "运营第 3 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 3 步。" },
      { step: 4, action: "运营第 4 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 4 步。" },
      { step: 5, action: "运营第 5 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 5 步。" },
      { step: 6, action: "运营第 6 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 6 步。" },
      { step: 7, action: "运营第 7 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 7 步。" },
      { step: 8, action: "运营第 8 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 8 步。" },
      { step: 9, action: "运营第 9 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 9 步。" },
      { step: 10, action: "运营第 10 步：检查「文明方舟」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「文明方舟」运营指南第 10 步。" },
    ],
    riskTable: [
      { risk: "灾难冲击", severity: 3, mitigation: "建造期进度暂停，不倒退。", note: "「文明方舟」风险「灾难冲击」：严重度 3。" },
      { risk: "维护断供", severity: 2, mitigation: "维护不足时效果减半，及时补缴。", note: "「文明方舟」风险「维护断供」：严重度 2。" },
      { risk: "人口不足", severity: 2, mitigation: "人口跌破前置时暂停建造，不拆除。", note: "「文明方舟」风险「人口不足」：严重度 2。" },
      { risk: "科技被禁", severity: 1, mitigation: "前置科技失效不影响已建成奇观。", note: "「文明方舟」风险「科技被禁」：严重度 1。" },
      { risk: "贸易中断", severity: 2, mitigation: "贸易类加成随航线中断暂时失效。", note: "「文明方舟」风险「贸易中断」：严重度 2。" },
      { risk: "电力短缺", severity: 3, mitigation: "电力不足时阶段施工暂停，不倒退。", note: "「文明方舟」风险「电力短缺」：严重度 3。" },
    ],
  },
  // ---------- w31-observatory 深空天文台 运营指南 ----------
  "w31-observatory": {
    operationGuide: [
      { step: 1, action: "运营第 1 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 1 步。" },
      { step: 2, action: "运营第 2 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 2 步。" },
      { step: 3, action: "运营第 3 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 3 步。" },
      { step: 4, action: "运营第 4 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 4 步。" },
      { step: 5, action: "运营第 5 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 5 步。" },
      { step: 6, action: "运营第 6 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 6 步。" },
      { step: 7, action: "运营第 7 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 7 步。" },
      { step: 8, action: "运营第 8 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 8 步。" },
      { step: 9, action: "运营第 9 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 9 步。" },
      { step: 10, action: "运营第 10 步：检查「深空天文台」维护费与加成生效状态。", check: "维护费充足，加成全额生效。", note: "「深空天文台」运营指南第 10 步。" },
    ],
    riskTable: [
      { risk: "灾难冲击", severity: 3, mitigation: "建造期进度暂停，不倒退。", note: "「深空天文台」风险「灾难冲击」：严重度 3。" },
      { risk: "维护断供", severity: 2, mitigation: "维护不足时效果减半，及时补缴。", note: "「深空天文台」风险「维护断供」：严重度 2。" },
      { risk: "人口不足", severity: 2, mitigation: "人口跌破前置时暂停建造，不拆除。", note: "「深空天文台」风险「人口不足」：严重度 2。" },
      { risk: "科技被禁", severity: 1, mitigation: "前置科技失效不影响已建成奇观。", note: "「深空天文台」风险「科技被禁」：严重度 1。" },
      { risk: "贸易中断", severity: 2, mitigation: "贸易类加成随航线中断暂时失效。", note: "「深空天文台」风险「贸易中断」：严重度 2。" },
      { risk: "电力短缺", severity: 3, mitigation: "电力不足时阶段施工暂停，不倒退。", note: "「深空天文台」风险「电力短缺」：严重度 3。" },
    ],
  },
};

for (const _wid of Object.keys(WONDERS_V31_DETAIL3)) {
  if (WONDERS_V31[_wid]) {
    WONDERS_V31[_wid].detail3 = WONDERS_V31_DETAIL3[_wid];
    if (WONDERS_V31[_wid].detail) Object.assign(WONDERS_V31[_wid].detail, WONDERS_V31_DETAIL3[_wid]);
  }
}

function selfTestWondersV31Detail3() {
  const errors = [];
  for (const id of WONDERS_V31_ORDER) {
    const d = (WONDERS_V31[id] || {}).detail3;
    if (!d || d.operationGuide.length !== 10) errors.push(id + ': 运营指南不足 10 步');
    if (!d || d.riskTable.length !== 6) errors.push(id + ': 风险表不足 6 条');
  }
  return { total: WONDERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V31_DETAIL3 = WONDERS_V31_DETAIL3;
  module.exports.selfTestWondersV31Detail3 = selfTestWondersV31Detail3;
}

/* ============ §10 奇观细节块 4（年度报告 / 访客记录，载入时并入 WONDERS_V31） ============ */
const WONDERS_V31_DETAIL4 = {
  // ---------- w31-galacticmarket 银河交易所 年度报告 ----------
  "w31-galacticmarket": {
    annualReport: [
      { year: 1, visitors: 1000, income: 5000, note: "「银河交易所」建成后第 1 年：访客 1000 人次，收入 5000 星币。" },
      { year: 2, visitors: 2000, income: 10000, note: "「银河交易所」建成后第 2 年：访客 2000 人次，收入 10000 星币。" },
      { year: 3, visitors: 3000, income: 15000, note: "「银河交易所」建成后第 3 年：访客 3000 人次，收入 15000 星币。" },
      { year: 4, visitors: 4000, income: 20000, note: "「银河交易所」建成后第 4 年：访客 4000 人次，收入 20000 星币。" },
      { year: 5, visitors: 5000, income: 25000, note: "「银河交易所」建成后第 5 年：访客 5000 人次，收入 25000 星币。" },
      { year: 6, visitors: 6000, income: 30000, note: "「银河交易所」建成后第 6 年：访客 6000 人次，收入 30000 星币。" },
      { year: 7, visitors: 7000, income: 35000, note: "「银河交易所」建成后第 7 年：访客 7000 人次，收入 35000 星币。" },
      { year: 8, visitors: 8000, income: 40000, note: "「银河交易所」建成后第 8 年：访客 8000 人次，收入 40000 星币。" },
      { year: 9, visitors: 9000, income: 45000, note: "「银河交易所」建成后第 9 年：访客 9000 人次，收入 45000 星币。" },
      { year: 10, visitors: 10000, income: 50000, note: "「银河交易所」建成后第 10 年：访客 10000 人次，收入 50000 星币。" },
      { year: 11, visitors: 11000, income: 55000, note: "「银河交易所」建成后第 11 年：访客 11000 人次，收入 55000 星币。" },
      { year: 12, visitors: 12000, income: 60000, note: "「银河交易所」建成后第 12 年：访客 12000 人次，收入 60000 星币。" },
    ],
    visitorLog: [
      { visitor: "地球使团", day: 30, note: "「地球使团」到访「银河交易所」，参观后关系 +5 点。" },
      { visitor: "月球代表", day: 60, note: "「月球代表」到访「银河交易所」，参观后关系 +6 点。" },
      { visitor: "小行星矿主", day: 90, note: "「小行星矿主」到访「银河交易所」，参观后关系 +7 点。" },
      { visitor: "木卫二学者", day: 120, note: "「木卫二学者」到访「银河交易所」，参观后关系 +8 点。" },
      { visitor: "半人马座商人", day: 150, note: "「半人马座商人」到访「银河交易所」，参观后关系 +9 点。" },
      { visitor: "火星总督", day: 180, note: "「火星总督」到访「银河交易所」，参观后关系 +10 点。" },
      { visitor: "科考队长", day: 210, note: "「科考队长」到访「银河交易所」，参观后关系 +11 点。" },
      { visitor: "星际记者", day: 240, note: "「星际记者」到访「银河交易所」，参观后关系 +12 点。" },
    ],
  },
  // ---------- w31-tradefleet 星际商队旗舰 年度报告 ----------
  "w31-tradefleet": {
    annualReport: [
      { year: 1, visitors: 1000, income: 5000, note: "「星际商队旗舰」建成后第 1 年：访客 1000 人次，收入 5000 星币。" },
      { year: 2, visitors: 2000, income: 10000, note: "「星际商队旗舰」建成后第 2 年：访客 2000 人次，收入 10000 星币。" },
      { year: 3, visitors: 3000, income: 15000, note: "「星际商队旗舰」建成后第 3 年：访客 3000 人次，收入 15000 星币。" },
      { year: 4, visitors: 4000, income: 20000, note: "「星际商队旗舰」建成后第 4 年：访客 4000 人次，收入 20000 星币。" },
      { year: 5, visitors: 5000, income: 25000, note: "「星际商队旗舰」建成后第 5 年：访客 5000 人次，收入 25000 星币。" },
      { year: 6, visitors: 6000, income: 30000, note: "「星际商队旗舰」建成后第 6 年：访客 6000 人次，收入 30000 星币。" },
      { year: 7, visitors: 7000, income: 35000, note: "「星际商队旗舰」建成后第 7 年：访客 7000 人次，收入 35000 星币。" },
      { year: 8, visitors: 8000, income: 40000, note: "「星际商队旗舰」建成后第 8 年：访客 8000 人次，收入 40000 星币。" },
      { year: 9, visitors: 9000, income: 45000, note: "「星际商队旗舰」建成后第 9 年：访客 9000 人次，收入 45000 星币。" },
      { year: 10, visitors: 10000, income: 50000, note: "「星际商队旗舰」建成后第 10 年：访客 10000 人次，收入 50000 星币。" },
      { year: 11, visitors: 11000, income: 55000, note: "「星际商队旗舰」建成后第 11 年：访客 11000 人次，收入 55000 星币。" },
      { year: 12, visitors: 12000, income: 60000, note: "「星际商队旗舰」建成后第 12 年：访客 12000 人次，收入 60000 星币。" },
    ],
    visitorLog: [
      { visitor: "地球使团", day: 30, note: "「地球使团」到访「星际商队旗舰」，参观后关系 +5 点。" },
      { visitor: "月球代表", day: 60, note: "「月球代表」到访「星际商队旗舰」，参观后关系 +6 点。" },
      { visitor: "小行星矿主", day: 90, note: "「小行星矿主」到访「星际商队旗舰」，参观后关系 +7 点。" },
      { visitor: "木卫二学者", day: 120, note: "「木卫二学者」到访「星际商队旗舰」，参观后关系 +8 点。" },
      { visitor: "半人马座商人", day: 150, note: "「半人马座商人」到访「星际商队旗舰」，参观后关系 +9 点。" },
      { visitor: "火星总督", day: 180, note: "「火星总督」到访「星际商队旗舰」，参观后关系 +10 点。" },
      { visitor: "科考队长", day: 210, note: "「科考队长」到访「星际商队旗舰」，参观后关系 +11 点。" },
      { visitor: "星际记者", day: 240, note: "「星际记者」到访「星际商队旗舰」，参观后关系 +12 点。" },
    ],
  },
  // ---------- w31-bank 星际中央银行 年度报告 ----------
  "w31-bank": {
    annualReport: [
      { year: 1, visitors: 1000, income: 5000, note: "「星际中央银行」建成后第 1 年：访客 1000 人次，收入 5000 星币。" },
      { year: 2, visitors: 2000, income: 10000, note: "「星际中央银行」建成后第 2 年：访客 2000 人次，收入 10000 星币。" },
      { year: 3, visitors: 3000, income: 15000, note: "「星际中央银行」建成后第 3 年：访客 3000 人次，收入 15000 星币。" },
      { year: 4, visitors: 4000, income: 20000, note: "「星际中央银行」建成后第 4 年：访客 4000 人次，收入 20000 星币。" },
      { year: 5, visitors: 5000, income: 25000, note: "「星际中央银行」建成后第 5 年：访客 5000 人次，收入 25000 星币。" },
      { year: 6, visitors: 6000, income: 30000, note: "「星际中央银行」建成后第 6 年：访客 6000 人次，收入 30000 星币。" },
      { year: 7, visitors: 7000, income: 35000, note: "「星际中央银行」建成后第 7 年：访客 7000 人次，收入 35000 星币。" },
      { year: 8, visitors: 8000, income: 40000, note: "「星际中央银行」建成后第 8 年：访客 8000 人次，收入 40000 星币。" },
      { year: 9, visitors: 9000, income: 45000, note: "「星际中央银行」建成后第 9 年：访客 9000 人次，收入 45000 星币。" },
      { year: 10, visitors: 10000, income: 50000, note: "「星际中央银行」建成后第 10 年：访客 10000 人次，收入 50000 星币。" },
      { year: 11, visitors: 11000, income: 55000, note: "「星际中央银行」建成后第 11 年：访客 11000 人次，收入 55000 星币。" },
      { year: 12, visitors: 12000, income: 60000, note: "「星际中央银行」建成后第 12 年：访客 12000 人次，收入 60000 星币。" },
    ],
    visitorLog: [
      { visitor: "地球使团", day: 30, note: "「地球使团」到访「星际中央银行」，参观后关系 +5 点。" },
      { visitor: "月球代表", day: 60, note: "「月球代表」到访「星际中央银行」，参观后关系 +6 点。" },
      { visitor: "小行星矿主", day: 90, note: "「小行星矿主」到访「星际中央银行」，参观后关系 +7 点。" },
      { visitor: "木卫二学者", day: 120, note: "「木卫二学者」到访「星际中央银行」，参观后关系 +8 点。" },
      { visitor: "半人马座商人", day: 150, note: "「半人马座商人」到访「星际中央银行」，参观后关系 +9 点。" },
      { visitor: "火星总督", day: 180, note: "「火星总督」到访「星际中央银行」，参观后关系 +10 点。" },
      { visitor: "科考队长", day: 210, note: "「科考队长」到访「星际中央银行」，参观后关系 +11 点。" },
      { visitor: "星际记者", day: 240, note: "「星际记者」到访「星际中央银行」，参观后关系 +12 点。" },
    ],
  },
  // ---------- w31-grandlibrary 大图书馆 年度报告 ----------
  "w31-grandlibrary": {
    annualReport: [
      { year: 1, visitors: 1000, income: 5000, note: "「大图书馆」建成后第 1 年：访客 1000 人次，收入 5000 星币。" },
      { year: 2, visitors: 2000, income: 10000, note: "「大图书馆」建成后第 2 年：访客 2000 人次，收入 10000 星币。" },
      { year: 3, visitors: 3000, income: 15000, note: "「大图书馆」建成后第 3 年：访客 3000 人次，收入 15000 星币。" },
      { year: 4, visitors: 4000, income: 20000, note: "「大图书馆」建成后第 4 年：访客 4000 人次，收入 20000 星币。" },
      { year: 5, visitors: 5000, income: 25000, note: "「大图书馆」建成后第 5 年：访客 5000 人次，收入 25000 星币。" },
      { year: 6, visitors: 6000, income: 30000, note: "「大图书馆」建成后第 6 年：访客 6000 人次，收入 30000 星币。" },
      { year: 7, visitors: 7000, income: 35000, note: "「大图书馆」建成后第 7 年：访客 7000 人次，收入 35000 星币。" },
      { year: 8, visitors: 8000, income: 40000, note: "「大图书馆」建成后第 8 年：访客 8000 人次，收入 40000 星币。" },
      { year: 9, visitors: 9000, income: 45000, note: "「大图书馆」建成后第 9 年：访客 9000 人次，收入 45000 星币。" },
      { year: 10, visitors: 10000, income: 50000, note: "「大图书馆」建成后第 10 年：访客 10000 人次，收入 50000 星币。" },
      { year: 11, visitors: 11000, income: 55000, note: "「大图书馆」建成后第 11 年：访客 11000 人次，收入 55000 星币。" },
      { year: 12, visitors: 12000, income: 60000, note: "「大图书馆」建成后第 12 年：访客 12000 人次，收入 60000 星币。" },
    ],
    visitorLog: [
      { visitor: "地球使团", day: 30, note: "「地球使团」到访「大图书馆」，参观后关系 +5 点。" },
      { visitor: "月球代表", day: 60, note: "「月球代表」到访「大图书馆」，参观后关系 +6 点。" },
      { visitor: "小行星矿主", day: 90, note: "「小行星矿主」到访「大图书馆」，参观后关系 +7 点。" },
      { visitor: "木卫二学者", day: 120, note: "「木卫二学者」到访「大图书馆」，参观后关系 +8 点。" },
      { visitor: "半人马座商人", day: 150, note: "「半人马座商人」到访「大图书馆」，参观后关系 +9 点。" },
      { visitor: "火星总督", day: 180, note: "「火星总督」到访「大图书馆」，参观后关系 +10 点。" },
      { visitor: "科考队长", day: 210, note: "「科考队长」到访「大图书馆」，参观后关系 +11 点。" },
      { visitor: "星际记者", day: 240, note: "「星际记者」到访「大图书馆」，参观后关系 +12 点。" },
    ],
  },
  // ---------- w31-ark 文明方舟 年度报告 ----------
  "w31-ark": {
    annualReport: [
      { year: 1, visitors: 1000, income: 5000, note: "「文明方舟」建成后第 1 年：访客 1000 人次，收入 5000 星币。" },
      { year: 2, visitors: 2000, income: 10000, note: "「文明方舟」建成后第 2 年：访客 2000 人次，收入 10000 星币。" },
      { year: 3, visitors: 3000, income: 15000, note: "「文明方舟」建成后第 3 年：访客 3000 人次，收入 15000 星币。" },
      { year: 4, visitors: 4000, income: 20000, note: "「文明方舟」建成后第 4 年：访客 4000 人次，收入 20000 星币。" },
      { year: 5, visitors: 5000, income: 25000, note: "「文明方舟」建成后第 5 年：访客 5000 人次，收入 25000 星币。" },
      { year: 6, visitors: 6000, income: 30000, note: "「文明方舟」建成后第 6 年：访客 6000 人次，收入 30000 星币。" },
      { year: 7, visitors: 7000, income: 35000, note: "「文明方舟」建成后第 7 年：访客 7000 人次，收入 35000 星币。" },
      { year: 8, visitors: 8000, income: 40000, note: "「文明方舟」建成后第 8 年：访客 8000 人次，收入 40000 星币。" },
      { year: 9, visitors: 9000, income: 45000, note: "「文明方舟」建成后第 9 年：访客 9000 人次，收入 45000 星币。" },
      { year: 10, visitors: 10000, income: 50000, note: "「文明方舟」建成后第 10 年：访客 10000 人次，收入 50000 星币。" },
      { year: 11, visitors: 11000, income: 55000, note: "「文明方舟」建成后第 11 年：访客 11000 人次，收入 55000 星币。" },
      { year: 12, visitors: 12000, income: 60000, note: "「文明方舟」建成后第 12 年：访客 12000 人次，收入 60000 星币。" },
    ],
    visitorLog: [
      { visitor: "地球使团", day: 30, note: "「地球使团」到访「文明方舟」，参观后关系 +5 点。" },
      { visitor: "月球代表", day: 60, note: "「月球代表」到访「文明方舟」，参观后关系 +6 点。" },
      { visitor: "小行星矿主", day: 90, note: "「小行星矿主」到访「文明方舟」，参观后关系 +7 点。" },
      { visitor: "木卫二学者", day: 120, note: "「木卫二学者」到访「文明方舟」，参观后关系 +8 点。" },
      { visitor: "半人马座商人", day: 150, note: "「半人马座商人」到访「文明方舟」，参观后关系 +9 点。" },
      { visitor: "火星总督", day: 180, note: "「火星总督」到访「文明方舟」，参观后关系 +10 点。" },
      { visitor: "科考队长", day: 210, note: "「科考队长」到访「文明方舟」，参观后关系 +11 点。" },
      { visitor: "星际记者", day: 240, note: "「星际记者」到访「文明方舟」，参观后关系 +12 点。" },
    ],
  },
  // ---------- w31-observatory 深空天文台 年度报告 ----------
  "w31-observatory": {
    annualReport: [
      { year: 1, visitors: 1000, income: 5000, note: "「深空天文台」建成后第 1 年：访客 1000 人次，收入 5000 星币。" },
      { year: 2, visitors: 2000, income: 10000, note: "「深空天文台」建成后第 2 年：访客 2000 人次，收入 10000 星币。" },
      { year: 3, visitors: 3000, income: 15000, note: "「深空天文台」建成后第 3 年：访客 3000 人次，收入 15000 星币。" },
      { year: 4, visitors: 4000, income: 20000, note: "「深空天文台」建成后第 4 年：访客 4000 人次，收入 20000 星币。" },
      { year: 5, visitors: 5000, income: 25000, note: "「深空天文台」建成后第 5 年：访客 5000 人次，收入 25000 星币。" },
      { year: 6, visitors: 6000, income: 30000, note: "「深空天文台」建成后第 6 年：访客 6000 人次，收入 30000 星币。" },
      { year: 7, visitors: 7000, income: 35000, note: "「深空天文台」建成后第 7 年：访客 7000 人次，收入 35000 星币。" },
      { year: 8, visitors: 8000, income: 40000, note: "「深空天文台」建成后第 8 年：访客 8000 人次，收入 40000 星币。" },
      { year: 9, visitors: 9000, income: 45000, note: "「深空天文台」建成后第 9 年：访客 9000 人次，收入 45000 星币。" },
      { year: 10, visitors: 10000, income: 50000, note: "「深空天文台」建成后第 10 年：访客 10000 人次，收入 50000 星币。" },
      { year: 11, visitors: 11000, income: 55000, note: "「深空天文台」建成后第 11 年：访客 11000 人次，收入 55000 星币。" },
      { year: 12, visitors: 12000, income: 60000, note: "「深空天文台」建成后第 12 年：访客 12000 人次，收入 60000 星币。" },
    ],
    visitorLog: [
      { visitor: "地球使团", day: 30, note: "「地球使团」到访「深空天文台」，参观后关系 +5 点。" },
      { visitor: "月球代表", day: 60, note: "「月球代表」到访「深空天文台」，参观后关系 +6 点。" },
      { visitor: "小行星矿主", day: 90, note: "「小行星矿主」到访「深空天文台」，参观后关系 +7 点。" },
      { visitor: "木卫二学者", day: 120, note: "「木卫二学者」到访「深空天文台」，参观后关系 +8 点。" },
      { visitor: "半人马座商人", day: 150, note: "「半人马座商人」到访「深空天文台」，参观后关系 +9 点。" },
      { visitor: "火星总督", day: 180, note: "「火星总督」到访「深空天文台」，参观后关系 +10 点。" },
      { visitor: "科考队长", day: 210, note: "「科考队长」到访「深空天文台」，参观后关系 +11 点。" },
      { visitor: "星际记者", day: 240, note: "「星际记者」到访「深空天文台」，参观后关系 +12 点。" },
    ],
  },
};

for (const _wid of Object.keys(WONDERS_V31_DETAIL4)) {
  if (WONDERS_V31[_wid]) {
    WONDERS_V31[_wid].detail4 = WONDERS_V31_DETAIL4[_wid];
    if (WONDERS_V31[_wid].detail) Object.assign(WONDERS_V31[_wid].detail, WONDERS_V31_DETAIL4[_wid]);
  }
}

function selfTestWondersV31Detail4() {
  const errors = [];
  for (const id of WONDERS_V31_ORDER) {
    const d = (WONDERS_V31[id] || {}).detail4;
    if (!d || d.annualReport.length !== 12) errors.push(id + ': 年度报告不足 12 年');
    if (!d || d.visitorLog.length !== 8) errors.push(id + ': 访客记录不足 8 条');
  }
  return { total: WONDERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V31_DETAIL4 = WONDERS_V31_DETAIL4;
  module.exports.selfTestWondersV31Detail4 = selfTestWondersV31Detail4;
}

/* ============ §11 奇观细节块 5（维护日程 / 职员名册，载入时并入 WONDERS_V31） ============ */
const WONDERS_V31_DETAIL5 = {
  // ---------- w31-galacticmarket 银河交易所 维护日程 ----------
  "w31-galacticmarket": {
    maintenanceSchedule: [
      {
        month: 1,
        task: "第 1 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 10, "credits": 100 },
        crew: 6,
        log: "维护日志：第 1 月维护完成，无异常。",
        note: "「银河交易所」第 1 月维护，需 6 名工人。",
      },
      {
        month: 2,
        task: "第 2 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 20, "credits": 200 },
        crew: 7,
        log: "维护日志：第 2 月维护完成，无异常。",
        note: "「银河交易所」第 2 月维护，需 7 名工人。",
      },
      {
        month: 3,
        task: "第 3 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 30, "credits": 300 },
        crew: 8,
        log: "维护日志：第 3 月维护完成，无异常。",
        note: "「银河交易所」第 3 月维护，需 8 名工人。",
      },
      {
        month: 4,
        task: "第 4 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 40, "credits": 400 },
        crew: 9,
        log: "维护日志：第 4 月维护完成，无异常。",
        note: "「银河交易所」第 4 月维护，需 9 名工人。",
      },
      {
        month: 5,
        task: "第 5 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 50, "credits": 500 },
        crew: 10,
        log: "维护日志：第 5 月维护完成，无异常。",
        note: "「银河交易所」第 5 月维护，需 10 名工人。",
      },
      {
        month: 6,
        task: "第 6 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 60, "credits": 600 },
        crew: 11,
        log: "维护日志：第 6 月维护完成，无异常。",
        note: "「银河交易所」第 6 月维护，需 11 名工人。",
      },
      {
        month: 7,
        task: "第 7 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 70, "credits": 700 },
        crew: 12,
        log: "维护日志：第 7 月维护完成，无异常。",
        note: "「银河交易所」第 7 月维护，需 12 名工人。",
      },
      {
        month: 8,
        task: "第 8 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 80, "credits": 800 },
        crew: 13,
        log: "维护日志：第 8 月维护完成，无异常。",
        note: "「银河交易所」第 8 月维护，需 13 名工人。",
      },
      {
        month: 9,
        task: "第 9 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 90, "credits": 900 },
        crew: 14,
        log: "维护日志：第 9 月维护完成，无异常。",
        note: "「银河交易所」第 9 月维护，需 14 名工人。",
      },
      {
        month: 10,
        task: "第 10 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 100, "credits": 1000 },
        crew: 15,
        log: "维护日志：第 10 月维护完成，无异常。",
        note: "「银河交易所」第 10 月维护，需 15 名工人。",
      },
      {
        month: 11,
        task: "第 11 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 110, "credits": 1100 },
        crew: 16,
        log: "维护日志：第 11 月维护完成，无异常。",
        note: "「银河交易所」第 11 月维护，需 16 名工人。",
      },
      {
        month: 12,
        task: "第 12 月例行维护：检查「银河交易所」结构与系统。",
        cost: { "steel": 120, "credits": 1200 },
        crew: 17,
        log: "维护日志：第 12 月维护完成，无异常。",
        note: "「银河交易所」第 12 月维护，需 17 名工人。",
      },
    ],
    staffRoster: [
      { role: "总工程师", count: 3, skill: 60, note: "「银河交易所」「总工程师」编制 3 人，技能 60 级。" },
      { role: "运营主管", count: 4, skill: 65, note: "「银河交易所」「运营主管」编制 4 人，技能 65 级。" },
      { role: "安保队长", count: 5, skill: 70, note: "「银河交易所」「安保队长」编制 5 人，技能 70 级。" },
      { role: "接待主管", count: 6, skill: 75, note: "「银河交易所」「接待主管」编制 6 人，技能 75 级。" },
      { role: "维修组长", count: 7, skill: 80, note: "「银河交易所」「维修组长」编制 7 人，技能 80 级。" },
      { role: "数据分析员", count: 8, skill: 85, note: "「银河交易所」「数据分析员」编制 8 人，技能 85 级。" },
      { role: "外交联络官", count: 9, skill: 90, note: "「银河交易所」「外交联络官」编制 9 人，技能 90 级。" },
      { role: "后勤主管", count: 10, skill: 95, note: "「银河交易所」「后勤主管」编制 10 人，技能 95 级。" },
    ],
  },
  // ---------- w31-tradefleet 星际商队旗舰 维护日程 ----------
  "w31-tradefleet": {
    maintenanceSchedule: [
      {
        month: 1,
        task: "第 1 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 10, "credits": 100 },
        crew: 6,
        log: "维护日志：第 1 月维护完成，无异常。",
        note: "「星际商队旗舰」第 1 月维护，需 6 名工人。",
      },
      {
        month: 2,
        task: "第 2 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 20, "credits": 200 },
        crew: 7,
        log: "维护日志：第 2 月维护完成，无异常。",
        note: "「星际商队旗舰」第 2 月维护，需 7 名工人。",
      },
      {
        month: 3,
        task: "第 3 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 30, "credits": 300 },
        crew: 8,
        log: "维护日志：第 3 月维护完成，无异常。",
        note: "「星际商队旗舰」第 3 月维护，需 8 名工人。",
      },
      {
        month: 4,
        task: "第 4 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 40, "credits": 400 },
        crew: 9,
        log: "维护日志：第 4 月维护完成，无异常。",
        note: "「星际商队旗舰」第 4 月维护，需 9 名工人。",
      },
      {
        month: 5,
        task: "第 5 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 50, "credits": 500 },
        crew: 10,
        log: "维护日志：第 5 月维护完成，无异常。",
        note: "「星际商队旗舰」第 5 月维护，需 10 名工人。",
      },
      {
        month: 6,
        task: "第 6 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 60, "credits": 600 },
        crew: 11,
        log: "维护日志：第 6 月维护完成，无异常。",
        note: "「星际商队旗舰」第 6 月维护，需 11 名工人。",
      },
      {
        month: 7,
        task: "第 7 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 70, "credits": 700 },
        crew: 12,
        log: "维护日志：第 7 月维护完成，无异常。",
        note: "「星际商队旗舰」第 7 月维护，需 12 名工人。",
      },
      {
        month: 8,
        task: "第 8 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 80, "credits": 800 },
        crew: 13,
        log: "维护日志：第 8 月维护完成，无异常。",
        note: "「星际商队旗舰」第 8 月维护，需 13 名工人。",
      },
      {
        month: 9,
        task: "第 9 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 90, "credits": 900 },
        crew: 14,
        log: "维护日志：第 9 月维护完成，无异常。",
        note: "「星际商队旗舰」第 9 月维护，需 14 名工人。",
      },
      {
        month: 10,
        task: "第 10 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 100, "credits": 1000 },
        crew: 15,
        log: "维护日志：第 10 月维护完成，无异常。",
        note: "「星际商队旗舰」第 10 月维护，需 15 名工人。",
      },
      {
        month: 11,
        task: "第 11 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 110, "credits": 1100 },
        crew: 16,
        log: "维护日志：第 11 月维护完成，无异常。",
        note: "「星际商队旗舰」第 11 月维护，需 16 名工人。",
      },
      {
        month: 12,
        task: "第 12 月例行维护：检查「星际商队旗舰」结构与系统。",
        cost: { "steel": 120, "credits": 1200 },
        crew: 17,
        log: "维护日志：第 12 月维护完成，无异常。",
        note: "「星际商队旗舰」第 12 月维护，需 17 名工人。",
      },
    ],
    staffRoster: [
      { role: "总工程师", count: 3, skill: 60, note: "「星际商队旗舰」「总工程师」编制 3 人，技能 60 级。" },
      { role: "运营主管", count: 4, skill: 65, note: "「星际商队旗舰」「运营主管」编制 4 人，技能 65 级。" },
      { role: "安保队长", count: 5, skill: 70, note: "「星际商队旗舰」「安保队长」编制 5 人，技能 70 级。" },
      { role: "接待主管", count: 6, skill: 75, note: "「星际商队旗舰」「接待主管」编制 6 人，技能 75 级。" },
      { role: "维修组长", count: 7, skill: 80, note: "「星际商队旗舰」「维修组长」编制 7 人，技能 80 级。" },
      { role: "数据分析员", count: 8, skill: 85, note: "「星际商队旗舰」「数据分析员」编制 8 人，技能 85 级。" },
      { role: "外交联络官", count: 9, skill: 90, note: "「星际商队旗舰」「外交联络官」编制 9 人，技能 90 级。" },
      { role: "后勤主管", count: 10, skill: 95, note: "「星际商队旗舰」「后勤主管」编制 10 人，技能 95 级。" },
    ],
  },
  // ---------- w31-bank 星际中央银行 维护日程 ----------
  "w31-bank": {
    maintenanceSchedule: [
      {
        month: 1,
        task: "第 1 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 10, "credits": 100 },
        crew: 6,
        log: "维护日志：第 1 月维护完成，无异常。",
        note: "「星际中央银行」第 1 月维护，需 6 名工人。",
      },
      {
        month: 2,
        task: "第 2 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 20, "credits": 200 },
        crew: 7,
        log: "维护日志：第 2 月维护完成，无异常。",
        note: "「星际中央银行」第 2 月维护，需 7 名工人。",
      },
      {
        month: 3,
        task: "第 3 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 30, "credits": 300 },
        crew: 8,
        log: "维护日志：第 3 月维护完成，无异常。",
        note: "「星际中央银行」第 3 月维护，需 8 名工人。",
      },
      {
        month: 4,
        task: "第 4 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 40, "credits": 400 },
        crew: 9,
        log: "维护日志：第 4 月维护完成，无异常。",
        note: "「星际中央银行」第 4 月维护，需 9 名工人。",
      },
      {
        month: 5,
        task: "第 5 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 50, "credits": 500 },
        crew: 10,
        log: "维护日志：第 5 月维护完成，无异常。",
        note: "「星际中央银行」第 5 月维护，需 10 名工人。",
      },
      {
        month: 6,
        task: "第 6 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 60, "credits": 600 },
        crew: 11,
        log: "维护日志：第 6 月维护完成，无异常。",
        note: "「星际中央银行」第 6 月维护，需 11 名工人。",
      },
      {
        month: 7,
        task: "第 7 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 70, "credits": 700 },
        crew: 12,
        log: "维护日志：第 7 月维护完成，无异常。",
        note: "「星际中央银行」第 7 月维护，需 12 名工人。",
      },
      {
        month: 8,
        task: "第 8 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 80, "credits": 800 },
        crew: 13,
        log: "维护日志：第 8 月维护完成，无异常。",
        note: "「星际中央银行」第 8 月维护，需 13 名工人。",
      },
      {
        month: 9,
        task: "第 9 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 90, "credits": 900 },
        crew: 14,
        log: "维护日志：第 9 月维护完成，无异常。",
        note: "「星际中央银行」第 9 月维护，需 14 名工人。",
      },
      {
        month: 10,
        task: "第 10 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 100, "credits": 1000 },
        crew: 15,
        log: "维护日志：第 10 月维护完成，无异常。",
        note: "「星际中央银行」第 10 月维护，需 15 名工人。",
      },
      {
        month: 11,
        task: "第 11 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 110, "credits": 1100 },
        crew: 16,
        log: "维护日志：第 11 月维护完成，无异常。",
        note: "「星际中央银行」第 11 月维护，需 16 名工人。",
      },
      {
        month: 12,
        task: "第 12 月例行维护：检查「星际中央银行」结构与系统。",
        cost: { "steel": 120, "credits": 1200 },
        crew: 17,
        log: "维护日志：第 12 月维护完成，无异常。",
        note: "「星际中央银行」第 12 月维护，需 17 名工人。",
      },
    ],
    staffRoster: [
      { role: "总工程师", count: 3, skill: 60, note: "「星际中央银行」「总工程师」编制 3 人，技能 60 级。" },
      { role: "运营主管", count: 4, skill: 65, note: "「星际中央银行」「运营主管」编制 4 人，技能 65 级。" },
      { role: "安保队长", count: 5, skill: 70, note: "「星际中央银行」「安保队长」编制 5 人，技能 70 级。" },
      { role: "接待主管", count: 6, skill: 75, note: "「星际中央银行」「接待主管」编制 6 人，技能 75 级。" },
      { role: "维修组长", count: 7, skill: 80, note: "「星际中央银行」「维修组长」编制 7 人，技能 80 级。" },
      { role: "数据分析员", count: 8, skill: 85, note: "「星际中央银行」「数据分析员」编制 8 人，技能 85 级。" },
      { role: "外交联络官", count: 9, skill: 90, note: "「星际中央银行」「外交联络官」编制 9 人，技能 90 级。" },
      { role: "后勤主管", count: 10, skill: 95, note: "「星际中央银行」「后勤主管」编制 10 人，技能 95 级。" },
    ],
  },
  // ---------- w31-grandlibrary 大图书馆 维护日程 ----------
  "w31-grandlibrary": {
    maintenanceSchedule: [
      {
        month: 1,
        task: "第 1 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 10, "credits": 100 },
        crew: 6,
        log: "维护日志：第 1 月维护完成，无异常。",
        note: "「大图书馆」第 1 月维护，需 6 名工人。",
      },
      {
        month: 2,
        task: "第 2 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 20, "credits": 200 },
        crew: 7,
        log: "维护日志：第 2 月维护完成，无异常。",
        note: "「大图书馆」第 2 月维护，需 7 名工人。",
      },
      {
        month: 3,
        task: "第 3 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 30, "credits": 300 },
        crew: 8,
        log: "维护日志：第 3 月维护完成，无异常。",
        note: "「大图书馆」第 3 月维护，需 8 名工人。",
      },
      {
        month: 4,
        task: "第 4 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 40, "credits": 400 },
        crew: 9,
        log: "维护日志：第 4 月维护完成，无异常。",
        note: "「大图书馆」第 4 月维护，需 9 名工人。",
      },
      {
        month: 5,
        task: "第 5 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 50, "credits": 500 },
        crew: 10,
        log: "维护日志：第 5 月维护完成，无异常。",
        note: "「大图书馆」第 5 月维护，需 10 名工人。",
      },
      {
        month: 6,
        task: "第 6 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 60, "credits": 600 },
        crew: 11,
        log: "维护日志：第 6 月维护完成，无异常。",
        note: "「大图书馆」第 6 月维护，需 11 名工人。",
      },
      {
        month: 7,
        task: "第 7 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 70, "credits": 700 },
        crew: 12,
        log: "维护日志：第 7 月维护完成，无异常。",
        note: "「大图书馆」第 7 月维护，需 12 名工人。",
      },
      {
        month: 8,
        task: "第 8 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 80, "credits": 800 },
        crew: 13,
        log: "维护日志：第 8 月维护完成，无异常。",
        note: "「大图书馆」第 8 月维护，需 13 名工人。",
      },
      {
        month: 9,
        task: "第 9 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 90, "credits": 900 },
        crew: 14,
        log: "维护日志：第 9 月维护完成，无异常。",
        note: "「大图书馆」第 9 月维护，需 14 名工人。",
      },
      {
        month: 10,
        task: "第 10 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 100, "credits": 1000 },
        crew: 15,
        log: "维护日志：第 10 月维护完成，无异常。",
        note: "「大图书馆」第 10 月维护，需 15 名工人。",
      },
      {
        month: 11,
        task: "第 11 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 110, "credits": 1100 },
        crew: 16,
        log: "维护日志：第 11 月维护完成，无异常。",
        note: "「大图书馆」第 11 月维护，需 16 名工人。",
      },
      {
        month: 12,
        task: "第 12 月例行维护：检查「大图书馆」结构与系统。",
        cost: { "steel": 120, "credits": 1200 },
        crew: 17,
        log: "维护日志：第 12 月维护完成，无异常。",
        note: "「大图书馆」第 12 月维护，需 17 名工人。",
      },
    ],
    staffRoster: [
      { role: "总工程师", count: 3, skill: 60, note: "「大图书馆」「总工程师」编制 3 人，技能 60 级。" },
      { role: "运营主管", count: 4, skill: 65, note: "「大图书馆」「运营主管」编制 4 人，技能 65 级。" },
      { role: "安保队长", count: 5, skill: 70, note: "「大图书馆」「安保队长」编制 5 人，技能 70 级。" },
      { role: "接待主管", count: 6, skill: 75, note: "「大图书馆」「接待主管」编制 6 人，技能 75 级。" },
      { role: "维修组长", count: 7, skill: 80, note: "「大图书馆」「维修组长」编制 7 人，技能 80 级。" },
      { role: "数据分析员", count: 8, skill: 85, note: "「大图书馆」「数据分析员」编制 8 人，技能 85 级。" },
      { role: "外交联络官", count: 9, skill: 90, note: "「大图书馆」「外交联络官」编制 9 人，技能 90 级。" },
      { role: "后勤主管", count: 10, skill: 95, note: "「大图书馆」「后勤主管」编制 10 人，技能 95 级。" },
    ],
  },
  // ---------- w31-ark 文明方舟 维护日程 ----------
  "w31-ark": {
    maintenanceSchedule: [
      {
        month: 1,
        task: "第 1 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 10, "credits": 100 },
        crew: 6,
        log: "维护日志：第 1 月维护完成，无异常。",
        note: "「文明方舟」第 1 月维护，需 6 名工人。",
      },
      {
        month: 2,
        task: "第 2 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 20, "credits": 200 },
        crew: 7,
        log: "维护日志：第 2 月维护完成，无异常。",
        note: "「文明方舟」第 2 月维护，需 7 名工人。",
      },
      {
        month: 3,
        task: "第 3 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 30, "credits": 300 },
        crew: 8,
        log: "维护日志：第 3 月维护完成，无异常。",
        note: "「文明方舟」第 3 月维护，需 8 名工人。",
      },
      {
        month: 4,
        task: "第 4 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 40, "credits": 400 },
        crew: 9,
        log: "维护日志：第 4 月维护完成，无异常。",
        note: "「文明方舟」第 4 月维护，需 9 名工人。",
      },
      {
        month: 5,
        task: "第 5 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 50, "credits": 500 },
        crew: 10,
        log: "维护日志：第 5 月维护完成，无异常。",
        note: "「文明方舟」第 5 月维护，需 10 名工人。",
      },
      {
        month: 6,
        task: "第 6 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 60, "credits": 600 },
        crew: 11,
        log: "维护日志：第 6 月维护完成，无异常。",
        note: "「文明方舟」第 6 月维护，需 11 名工人。",
      },
      {
        month: 7,
        task: "第 7 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 70, "credits": 700 },
        crew: 12,
        log: "维护日志：第 7 月维护完成，无异常。",
        note: "「文明方舟」第 7 月维护，需 12 名工人。",
      },
      {
        month: 8,
        task: "第 8 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 80, "credits": 800 },
        crew: 13,
        log: "维护日志：第 8 月维护完成，无异常。",
        note: "「文明方舟」第 8 月维护，需 13 名工人。",
      },
      {
        month: 9,
        task: "第 9 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 90, "credits": 900 },
        crew: 14,
        log: "维护日志：第 9 月维护完成，无异常。",
        note: "「文明方舟」第 9 月维护，需 14 名工人。",
      },
      {
        month: 10,
        task: "第 10 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 100, "credits": 1000 },
        crew: 15,
        log: "维护日志：第 10 月维护完成，无异常。",
        note: "「文明方舟」第 10 月维护，需 15 名工人。",
      },
      {
        month: 11,
        task: "第 11 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 110, "credits": 1100 },
        crew: 16,
        log: "维护日志：第 11 月维护完成，无异常。",
        note: "「文明方舟」第 11 月维护，需 16 名工人。",
      },
      {
        month: 12,
        task: "第 12 月例行维护：检查「文明方舟」结构与系统。",
        cost: { "steel": 120, "credits": 1200 },
        crew: 17,
        log: "维护日志：第 12 月维护完成，无异常。",
        note: "「文明方舟」第 12 月维护，需 17 名工人。",
      },
    ],
    staffRoster: [
      { role: "总工程师", count: 3, skill: 60, note: "「文明方舟」「总工程师」编制 3 人，技能 60 级。" },
      { role: "运营主管", count: 4, skill: 65, note: "「文明方舟」「运营主管」编制 4 人，技能 65 级。" },
      { role: "安保队长", count: 5, skill: 70, note: "「文明方舟」「安保队长」编制 5 人，技能 70 级。" },
      { role: "接待主管", count: 6, skill: 75, note: "「文明方舟」「接待主管」编制 6 人，技能 75 级。" },
      { role: "维修组长", count: 7, skill: 80, note: "「文明方舟」「维修组长」编制 7 人，技能 80 级。" },
      { role: "数据分析员", count: 8, skill: 85, note: "「文明方舟」「数据分析员」编制 8 人，技能 85 级。" },
      { role: "外交联络官", count: 9, skill: 90, note: "「文明方舟」「外交联络官」编制 9 人，技能 90 级。" },
      { role: "后勤主管", count: 10, skill: 95, note: "「文明方舟」「后勤主管」编制 10 人，技能 95 级。" },
    ],
  },
  // ---------- w31-observatory 深空天文台 维护日程 ----------
  "w31-observatory": {
    maintenanceSchedule: [
      {
        month: 1,
        task: "第 1 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 10, "credits": 100 },
        crew: 6,
        log: "维护日志：第 1 月维护完成，无异常。",
        note: "「深空天文台」第 1 月维护，需 6 名工人。",
      },
      {
        month: 2,
        task: "第 2 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 20, "credits": 200 },
        crew: 7,
        log: "维护日志：第 2 月维护完成，无异常。",
        note: "「深空天文台」第 2 月维护，需 7 名工人。",
      },
      {
        month: 3,
        task: "第 3 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 30, "credits": 300 },
        crew: 8,
        log: "维护日志：第 3 月维护完成，无异常。",
        note: "「深空天文台」第 3 月维护，需 8 名工人。",
      },
      {
        month: 4,
        task: "第 4 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 40, "credits": 400 },
        crew: 9,
        log: "维护日志：第 4 月维护完成，无异常。",
        note: "「深空天文台」第 4 月维护，需 9 名工人。",
      },
      {
        month: 5,
        task: "第 5 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 50, "credits": 500 },
        crew: 10,
        log: "维护日志：第 5 月维护完成，无异常。",
        note: "「深空天文台」第 5 月维护，需 10 名工人。",
      },
      {
        month: 6,
        task: "第 6 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 60, "credits": 600 },
        crew: 11,
        log: "维护日志：第 6 月维护完成，无异常。",
        note: "「深空天文台」第 6 月维护，需 11 名工人。",
      },
      {
        month: 7,
        task: "第 7 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 70, "credits": 700 },
        crew: 12,
        log: "维护日志：第 7 月维护完成，无异常。",
        note: "「深空天文台」第 7 月维护，需 12 名工人。",
      },
      {
        month: 8,
        task: "第 8 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 80, "credits": 800 },
        crew: 13,
        log: "维护日志：第 8 月维护完成，无异常。",
        note: "「深空天文台」第 8 月维护，需 13 名工人。",
      },
      {
        month: 9,
        task: "第 9 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 90, "credits": 900 },
        crew: 14,
        log: "维护日志：第 9 月维护完成，无异常。",
        note: "「深空天文台」第 9 月维护，需 14 名工人。",
      },
      {
        month: 10,
        task: "第 10 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 100, "credits": 1000 },
        crew: 15,
        log: "维护日志：第 10 月维护完成，无异常。",
        note: "「深空天文台」第 10 月维护，需 15 名工人。",
      },
      {
        month: 11,
        task: "第 11 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 110, "credits": 1100 },
        crew: 16,
        log: "维护日志：第 11 月维护完成，无异常。",
        note: "「深空天文台」第 11 月维护，需 16 名工人。",
      },
      {
        month: 12,
        task: "第 12 月例行维护：检查「深空天文台」结构与系统。",
        cost: { "steel": 120, "credits": 1200 },
        crew: 17,
        log: "维护日志：第 12 月维护完成，无异常。",
        note: "「深空天文台」第 12 月维护，需 17 名工人。",
      },
    ],
    staffRoster: [
      { role: "总工程师", count: 3, skill: 60, note: "「深空天文台」「总工程师」编制 3 人，技能 60 级。" },
      { role: "运营主管", count: 4, skill: 65, note: "「深空天文台」「运营主管」编制 4 人，技能 65 级。" },
      { role: "安保队长", count: 5, skill: 70, note: "「深空天文台」「安保队长」编制 5 人，技能 70 级。" },
      { role: "接待主管", count: 6, skill: 75, note: "「深空天文台」「接待主管」编制 6 人，技能 75 级。" },
      { role: "维修组长", count: 7, skill: 80, note: "「深空天文台」「维修组长」编制 7 人，技能 80 级。" },
      { role: "数据分析员", count: 8, skill: 85, note: "「深空天文台」「数据分析员」编制 8 人，技能 85 级。" },
      { role: "外交联络官", count: 9, skill: 90, note: "「深空天文台」「外交联络官」编制 9 人，技能 90 级。" },
      { role: "后勤主管", count: 10, skill: 95, note: "「深空天文台」「后勤主管」编制 10 人，技能 95 级。" },
    ],
  },
};

for (const _wid of Object.keys(WONDERS_V31_DETAIL5)) {
  if (WONDERS_V31[_wid]) {
    WONDERS_V31[_wid].detail5 = WONDERS_V31_DETAIL5[_wid];
    if (WONDERS_V31[_wid].detail) Object.assign(WONDERS_V31[_wid].detail, WONDERS_V31_DETAIL5[_wid]);
  }
}

function selfTestWondersV31Detail5() {
  const errors = [];
  for (const id of WONDERS_V31_ORDER) {
    const d = (WONDERS_V31[id] || {}).detail5;
    if (!d || d.maintenanceSchedule.length !== 12) errors.push(id + ': 维护日程不足 12 月');
    if (!d || d.staffRoster.length !== 8) errors.push(id + ': 职员名册不足 8 条');
  }
  return { total: WONDERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V31_DETAIL5 = WONDERS_V31_DETAIL5;
  module.exports.selfTestWondersV31Detail5 = selfTestWondersV31Detail5;
}

/* ============ §12 奇观细节块 6（奇观事件 / 研究课题，载入时并入 WONDERS_V31） ============ */
const WONDERS_V31_DETAIL6 = {
  // ---------- w31-galacticmarket 银河交易所 奇观事件 ----------
  "w31-galacticmarket": {
    wonderEvents: [
      {
        day: 30,
        title: "「银河交易所」第 1 个纪念日",
        text: "「银河交易所」落成后第 30 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 1：每 30 天触发一次。",
      },
      {
        day: 60,
        title: "「银河交易所」第 2 个纪念日",
        text: "「银河交易所」落成后第 60 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 2：每 30 天触发一次。",
      },
      {
        day: 90,
        title: "「银河交易所」第 3 个纪念日",
        text: "「银河交易所」落成后第 90 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 3：每 30 天触发一次。",
      },
      {
        day: 120,
        title: "「银河交易所」第 4 个纪念日",
        text: "「银河交易所」落成后第 120 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 4：每 30 天触发一次。",
      },
      {
        day: 150,
        title: "「银河交易所」第 5 个纪念日",
        text: "「银河交易所」落成后第 150 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 5：每 30 天触发一次。",
      },
      {
        day: 180,
        title: "「银河交易所」第 6 个纪念日",
        text: "「银河交易所」落成后第 180 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 6：每 30 天触发一次。",
      },
      {
        day: 210,
        title: "「银河交易所」第 7 个纪念日",
        text: "「银河交易所」落成后第 210 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 7：每 30 天触发一次。",
      },
      {
        day: 240,
        title: "「银河交易所」第 8 个纪念日",
        text: "「银河交易所」落成后第 240 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 8：每 30 天触发一次。",
      },
      {
        day: 270,
        title: "「银河交易所」第 9 个纪念日",
        text: "「银河交易所」落成后第 270 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 9：每 30 天触发一次。",
      },
      {
        day: 300,
        title: "「银河交易所」第 10 个纪念日",
        text: "「银河交易所」落成后第 300 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「银河交易所」纪念日活动圆满结束。",
        note: "「银河交易所」事件 10：每 30 天触发一次。",
      },
    ],
    researchTopics: [
      { topic: "「银河交易所」研究课题 1", cost: 100, reward: "科研 +20 点", note: "完成「银河交易所」课题 1 可得科研 +20 点。" },
      { topic: "「银河交易所」研究课题 2", cost: 200, reward: "科研 +40 点", note: "完成「银河交易所」课题 2 可得科研 +40 点。" },
      { topic: "「银河交易所」研究课题 3", cost: 300, reward: "科研 +60 点", note: "完成「银河交易所」课题 3 可得科研 +60 点。" },
      { topic: "「银河交易所」研究课题 4", cost: 400, reward: "科研 +80 点", note: "完成「银河交易所」课题 4 可得科研 +80 点。" },
      { topic: "「银河交易所」研究课题 5", cost: 500, reward: "科研 +100 点", note: "完成「银河交易所」课题 5 可得科研 +100 点。" },
      { topic: "「银河交易所」研究课题 6", cost: 600, reward: "科研 +120 点", note: "完成「银河交易所」课题 6 可得科研 +120 点。" },
    ],
  },
  // ---------- w31-tradefleet 星际商队旗舰 奇观事件 ----------
  "w31-tradefleet": {
    wonderEvents: [
      {
        day: 30,
        title: "「星际商队旗舰」第 1 个纪念日",
        text: "「星际商队旗舰」落成后第 30 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 1：每 30 天触发一次。",
      },
      {
        day: 60,
        title: "「星际商队旗舰」第 2 个纪念日",
        text: "「星际商队旗舰」落成后第 60 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 2：每 30 天触发一次。",
      },
      {
        day: 90,
        title: "「星际商队旗舰」第 3 个纪念日",
        text: "「星际商队旗舰」落成后第 90 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 3：每 30 天触发一次。",
      },
      {
        day: 120,
        title: "「星际商队旗舰」第 4 个纪念日",
        text: "「星际商队旗舰」落成后第 120 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 4：每 30 天触发一次。",
      },
      {
        day: 150,
        title: "「星际商队旗舰」第 5 个纪念日",
        text: "「星际商队旗舰」落成后第 150 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 5：每 30 天触发一次。",
      },
      {
        day: 180,
        title: "「星际商队旗舰」第 6 个纪念日",
        text: "「星际商队旗舰」落成后第 180 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 6：每 30 天触发一次。",
      },
      {
        day: 210,
        title: "「星际商队旗舰」第 7 个纪念日",
        text: "「星际商队旗舰」落成后第 210 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 7：每 30 天触发一次。",
      },
      {
        day: 240,
        title: "「星际商队旗舰」第 8 个纪念日",
        text: "「星际商队旗舰」落成后第 240 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 8：每 30 天触发一次。",
      },
      {
        day: 270,
        title: "「星际商队旗舰」第 9 个纪念日",
        text: "「星际商队旗舰」落成后第 270 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 9：每 30 天触发一次。",
      },
      {
        day: 300,
        title: "「星际商队旗舰」第 10 个纪念日",
        text: "「星际商队旗舰」落成后第 300 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际商队旗舰」纪念日活动圆满结束。",
        note: "「星际商队旗舰」事件 10：每 30 天触发一次。",
      },
    ],
    researchTopics: [
      { topic: "「星际商队旗舰」研究课题 1", cost: 100, reward: "科研 +20 点", note: "完成「星际商队旗舰」课题 1 可得科研 +20 点。" },
      { topic: "「星际商队旗舰」研究课题 2", cost: 200, reward: "科研 +40 点", note: "完成「星际商队旗舰」课题 2 可得科研 +40 点。" },
      { topic: "「星际商队旗舰」研究课题 3", cost: 300, reward: "科研 +60 点", note: "完成「星际商队旗舰」课题 3 可得科研 +60 点。" },
      { topic: "「星际商队旗舰」研究课题 4", cost: 400, reward: "科研 +80 点", note: "完成「星际商队旗舰」课题 4 可得科研 +80 点。" },
      { topic: "「星际商队旗舰」研究课题 5", cost: 500, reward: "科研 +100 点", note: "完成「星际商队旗舰」课题 5 可得科研 +100 点。" },
      { topic: "「星际商队旗舰」研究课题 6", cost: 600, reward: "科研 +120 点", note: "完成「星际商队旗舰」课题 6 可得科研 +120 点。" },
    ],
  },
  // ---------- w31-bank 星际中央银行 奇观事件 ----------
  "w31-bank": {
    wonderEvents: [
      {
        day: 30,
        title: "「星际中央银行」第 1 个纪念日",
        text: "「星际中央银行」落成后第 30 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 1：每 30 天触发一次。",
      },
      {
        day: 60,
        title: "「星际中央银行」第 2 个纪念日",
        text: "「星际中央银行」落成后第 60 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 2：每 30 天触发一次。",
      },
      {
        day: 90,
        title: "「星际中央银行」第 3 个纪念日",
        text: "「星际中央银行」落成后第 90 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 3：每 30 天触发一次。",
      },
      {
        day: 120,
        title: "「星际中央银行」第 4 个纪念日",
        text: "「星际中央银行」落成后第 120 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 4：每 30 天触发一次。",
      },
      {
        day: 150,
        title: "「星际中央银行」第 5 个纪念日",
        text: "「星际中央银行」落成后第 150 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 5：每 30 天触发一次。",
      },
      {
        day: 180,
        title: "「星际中央银行」第 6 个纪念日",
        text: "「星际中央银行」落成后第 180 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 6：每 30 天触发一次。",
      },
      {
        day: 210,
        title: "「星际中央银行」第 7 个纪念日",
        text: "「星际中央银行」落成后第 210 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 7：每 30 天触发一次。",
      },
      {
        day: 240,
        title: "「星际中央银行」第 8 个纪念日",
        text: "「星际中央银行」落成后第 240 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 8：每 30 天触发一次。",
      },
      {
        day: 270,
        title: "「星际中央银行」第 9 个纪念日",
        text: "「星际中央银行」落成后第 270 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 9：每 30 天触发一次。",
      },
      {
        day: 300,
        title: "「星际中央银行」第 10 个纪念日",
        text: "「星际中央银行」落成后第 300 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「星际中央银行」纪念日活动圆满结束。",
        note: "「星际中央银行」事件 10：每 30 天触发一次。",
      },
    ],
    researchTopics: [
      { topic: "「星际中央银行」研究课题 1", cost: 100, reward: "科研 +20 点", note: "完成「星际中央银行」课题 1 可得科研 +20 点。" },
      { topic: "「星际中央银行」研究课题 2", cost: 200, reward: "科研 +40 点", note: "完成「星际中央银行」课题 2 可得科研 +40 点。" },
      { topic: "「星际中央银行」研究课题 3", cost: 300, reward: "科研 +60 点", note: "完成「星际中央银行」课题 3 可得科研 +60 点。" },
      { topic: "「星际中央银行」研究课题 4", cost: 400, reward: "科研 +80 点", note: "完成「星际中央银行」课题 4 可得科研 +80 点。" },
      { topic: "「星际中央银行」研究课题 5", cost: 500, reward: "科研 +100 点", note: "完成「星际中央银行」课题 5 可得科研 +100 点。" },
      { topic: "「星际中央银行」研究课题 6", cost: 600, reward: "科研 +120 点", note: "完成「星际中央银行」课题 6 可得科研 +120 点。" },
    ],
  },
  // ---------- w31-grandlibrary 大图书馆 奇观事件 ----------
  "w31-grandlibrary": {
    wonderEvents: [
      {
        day: 30,
        title: "「大图书馆」第 1 个纪念日",
        text: "「大图书馆」落成后第 30 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 1：每 30 天触发一次。",
      },
      {
        day: 60,
        title: "「大图书馆」第 2 个纪念日",
        text: "「大图书馆」落成后第 60 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 2：每 30 天触发一次。",
      },
      {
        day: 90,
        title: "「大图书馆」第 3 个纪念日",
        text: "「大图书馆」落成后第 90 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 3：每 30 天触发一次。",
      },
      {
        day: 120,
        title: "「大图书馆」第 4 个纪念日",
        text: "「大图书馆」落成后第 120 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 4：每 30 天触发一次。",
      },
      {
        day: 150,
        title: "「大图书馆」第 5 个纪念日",
        text: "「大图书馆」落成后第 150 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 5：每 30 天触发一次。",
      },
      {
        day: 180,
        title: "「大图书馆」第 6 个纪念日",
        text: "「大图书馆」落成后第 180 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 6：每 30 天触发一次。",
      },
      {
        day: 210,
        title: "「大图书馆」第 7 个纪念日",
        text: "「大图书馆」落成后第 210 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 7：每 30 天触发一次。",
      },
      {
        day: 240,
        title: "「大图书馆」第 8 个纪念日",
        text: "「大图书馆」落成后第 240 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 8：每 30 天触发一次。",
      },
      {
        day: 270,
        title: "「大图书馆」第 9 个纪念日",
        text: "「大图书馆」落成后第 270 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 9：每 30 天触发一次。",
      },
      {
        day: 300,
        title: "「大图书馆」第 10 个纪念日",
        text: "「大图书馆」落成后第 300 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「大图书馆」纪念日活动圆满结束。",
        note: "「大图书馆」事件 10：每 30 天触发一次。",
      },
    ],
    researchTopics: [
      { topic: "「大图书馆」研究课题 1", cost: 100, reward: "科研 +20 点", note: "完成「大图书馆」课题 1 可得科研 +20 点。" },
      { topic: "「大图书馆」研究课题 2", cost: 200, reward: "科研 +40 点", note: "完成「大图书馆」课题 2 可得科研 +40 点。" },
      { topic: "「大图书馆」研究课题 3", cost: 300, reward: "科研 +60 点", note: "完成「大图书馆」课题 3 可得科研 +60 点。" },
      { topic: "「大图书馆」研究课题 4", cost: 400, reward: "科研 +80 点", note: "完成「大图书馆」课题 4 可得科研 +80 点。" },
      { topic: "「大图书馆」研究课题 5", cost: 500, reward: "科研 +100 点", note: "完成「大图书馆」课题 5 可得科研 +100 点。" },
      { topic: "「大图书馆」研究课题 6", cost: 600, reward: "科研 +120 点", note: "完成「大图书馆」课题 6 可得科研 +120 点。" },
    ],
  },
  // ---------- w31-ark 文明方舟 奇观事件 ----------
  "w31-ark": {
    wonderEvents: [
      {
        day: 30,
        title: "「文明方舟」第 1 个纪念日",
        text: "「文明方舟」落成后第 30 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 1：每 30 天触发一次。",
      },
      {
        day: 60,
        title: "「文明方舟」第 2 个纪念日",
        text: "「文明方舟」落成后第 60 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 2：每 30 天触发一次。",
      },
      {
        day: 90,
        title: "「文明方舟」第 3 个纪念日",
        text: "「文明方舟」落成后第 90 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 3：每 30 天触发一次。",
      },
      {
        day: 120,
        title: "「文明方舟」第 4 个纪念日",
        text: "「文明方舟」落成后第 120 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 4：每 30 天触发一次。",
      },
      {
        day: 150,
        title: "「文明方舟」第 5 个纪念日",
        text: "「文明方舟」落成后第 150 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 5：每 30 天触发一次。",
      },
      {
        day: 180,
        title: "「文明方舟」第 6 个纪念日",
        text: "「文明方舟」落成后第 180 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 6：每 30 天触发一次。",
      },
      {
        day: 210,
        title: "「文明方舟」第 7 个纪念日",
        text: "「文明方舟」落成后第 210 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 7：每 30 天触发一次。",
      },
      {
        day: 240,
        title: "「文明方舟」第 8 个纪念日",
        text: "「文明方舟」落成后第 240 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 8：每 30 天触发一次。",
      },
      {
        day: 270,
        title: "「文明方舟」第 9 个纪念日",
        text: "「文明方舟」落成后第 270 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 9：每 30 天触发一次。",
      },
      {
        day: 300,
        title: "「文明方舟」第 10 个纪念日",
        text: "「文明方舟」落成后第 300 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「文明方舟」纪念日活动圆满结束。",
        note: "「文明方舟」事件 10：每 30 天触发一次。",
      },
    ],
    researchTopics: [
      { topic: "「文明方舟」研究课题 1", cost: 100, reward: "科研 +20 点", note: "完成「文明方舟」课题 1 可得科研 +20 点。" },
      { topic: "「文明方舟」研究课题 2", cost: 200, reward: "科研 +40 点", note: "完成「文明方舟」课题 2 可得科研 +40 点。" },
      { topic: "「文明方舟」研究课题 3", cost: 300, reward: "科研 +60 点", note: "完成「文明方舟」课题 3 可得科研 +60 点。" },
      { topic: "「文明方舟」研究课题 4", cost: 400, reward: "科研 +80 点", note: "完成「文明方舟」课题 4 可得科研 +80 点。" },
      { topic: "「文明方舟」研究课题 5", cost: 500, reward: "科研 +100 点", note: "完成「文明方舟」课题 5 可得科研 +100 点。" },
      { topic: "「文明方舟」研究课题 6", cost: 600, reward: "科研 +120 点", note: "完成「文明方舟」课题 6 可得科研 +120 点。" },
    ],
  },
  // ---------- w31-observatory 深空天文台 奇观事件 ----------
  "w31-observatory": {
    wonderEvents: [
      {
        day: 30,
        title: "「深空天文台」第 1 个纪念日",
        text: "「深空天文台」落成后第 30 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 1：每 30 天触发一次。",
      },
      {
        day: 60,
        title: "「深空天文台」第 2 个纪念日",
        text: "「深空天文台」落成后第 60 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 2：每 30 天触发一次。",
      },
      {
        day: 90,
        title: "「深空天文台」第 3 个纪念日",
        text: "「深空天文台」落成后第 90 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 3：每 30 天触发一次。",
      },
      {
        day: 120,
        title: "「深空天文台」第 4 个纪念日",
        text: "「深空天文台」落成后第 120 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 4：每 30 天触发一次。",
      },
      {
        day: 150,
        title: "「深空天文台」第 5 个纪念日",
        text: "「深空天文台」落成后第 150 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 5：每 30 天触发一次。",
      },
      {
        day: 180,
        title: "「深空天文台」第 6 个纪念日",
        text: "「深空天文台」落成后第 180 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 6：每 30 天触发一次。",
      },
      {
        day: 210,
        title: "「深空天文台」第 7 个纪念日",
        text: "「深空天文台」落成后第 210 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 7：每 30 天触发一次。",
      },
      {
        day: 240,
        title: "「深空天文台」第 8 个纪念日",
        text: "「深空天文台」落成后第 240 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 8：每 30 天触发一次。",
      },
      {
        day: 270,
        title: "「深空天文台」第 9 个纪念日",
        text: "「深空天文台」落成后第 270 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 9：每 30 天触发一次。",
      },
      {
        day: 300,
        title: "「深空天文台」第 10 个纪念日",
        text: "「深空天文台」落成后第 300 天，访客与庆典活动达到高峰。",
        effect: "幸福度 +2，贸易收入 +5%，持续 3 天",
        log: "事件日志：「深空天文台」纪念日活动圆满结束。",
        note: "「深空天文台」事件 10：每 30 天触发一次。",
      },
    ],
    researchTopics: [
      { topic: "「深空天文台」研究课题 1", cost: 100, reward: "科研 +20 点", note: "完成「深空天文台」课题 1 可得科研 +20 点。" },
      { topic: "「深空天文台」研究课题 2", cost: 200, reward: "科研 +40 点", note: "完成「深空天文台」课题 2 可得科研 +40 点。" },
      { topic: "「深空天文台」研究课题 3", cost: 300, reward: "科研 +60 点", note: "完成「深空天文台」课题 3 可得科研 +60 点。" },
      { topic: "「深空天文台」研究课题 4", cost: 400, reward: "科研 +80 点", note: "完成「深空天文台」课题 4 可得科研 +80 点。" },
      { topic: "「深空天文台」研究课题 5", cost: 500, reward: "科研 +100 点", note: "完成「深空天文台」课题 5 可得科研 +100 点。" },
      { topic: "「深空天文台」研究课题 6", cost: 600, reward: "科研 +120 点", note: "完成「深空天文台」课题 6 可得科研 +120 点。" },
    ],
  },
};

for (const _wid of Object.keys(WONDERS_V31_DETAIL6)) {
  if (WONDERS_V31[_wid]) {
    WONDERS_V31[_wid].detail6 = WONDERS_V31_DETAIL6[_wid];
    if (WONDERS_V31[_wid].detail) Object.assign(WONDERS_V31[_wid].detail, WONDERS_V31_DETAIL6[_wid]);
  }
}

function selfTestWondersV31Detail6() {
  const errors = [];
  for (const id of WONDERS_V31_ORDER) {
    const d = (WONDERS_V31[id] || {}).detail6;
    if (!d || d.wonderEvents.length !== 10) errors.push(id + ': 奇观事件不足 10 个');
    if (!d || d.researchTopics.length !== 6) errors.push(id + ': 研究课题不足 6 个');
  }
  return { total: WONDERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V31_DETAIL6 = WONDERS_V31_DETAIL6;
  module.exports.selfTestWondersV31Detail6 = selfTestWondersV31Detail6;
}

/* ============ §13 奇观细节块 7（传承日志，载入时并入 WONDERS_V31） ============ */
const WONDERS_V31_DETAIL7 = {
  // ---------- w31-galacticmarket 银河交易所 传承日志 ----------
  "w31-galacticmarket": {
    legacyLog: [
      {
        entry: 1,
        year: 10,
        text: "「银河交易所」建成 10 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 1 任馆长",
        visitorsTotal: 10000,
        log: "传承日志第 1 条：银河交易所运营满 10 年。",
        note: "「银河交易所」传承日志 1：建成 10 周年。",
      },
      {
        entry: 2,
        year: 20,
        text: "「银河交易所」建成 20 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 2 任馆长",
        visitorsTotal: 20000,
        log: "传承日志第 2 条：银河交易所运营满 20 年。",
        note: "「银河交易所」传承日志 2：建成 20 周年。",
      },
      {
        entry: 3,
        year: 30,
        text: "「银河交易所」建成 30 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 3 任馆长",
        visitorsTotal: 30000,
        log: "传承日志第 3 条：银河交易所运营满 30 年。",
        note: "「银河交易所」传承日志 3：建成 30 周年。",
      },
      {
        entry: 4,
        year: 40,
        text: "「银河交易所」建成 40 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 4 任馆长",
        visitorsTotal: 40000,
        log: "传承日志第 4 条：银河交易所运营满 40 年。",
        note: "「银河交易所」传承日志 4：建成 40 周年。",
      },
      {
        entry: 5,
        year: 50,
        text: "「银河交易所」建成 50 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 5 任馆长",
        visitorsTotal: 50000,
        log: "传承日志第 5 条：银河交易所运营满 50 年。",
        note: "「银河交易所」传承日志 5：建成 50 周年。",
      },
      {
        entry: 6,
        year: 60,
        text: "「银河交易所」建成 60 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 6 任馆长",
        visitorsTotal: 60000,
        log: "传承日志第 6 条：银河交易所运营满 60 年。",
        note: "「银河交易所」传承日志 6：建成 60 周年。",
      },
      {
        entry: 7,
        year: 70,
        text: "「银河交易所」建成 70 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 7 任馆长",
        visitorsTotal: 70000,
        log: "传承日志第 7 条：银河交易所运营满 70 年。",
        note: "「银河交易所」传承日志 7：建成 70 周年。",
      },
      {
        entry: 8,
        year: 80,
        text: "「银河交易所」建成 80 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 8 任馆长",
        visitorsTotal: 80000,
        log: "传承日志第 8 条：银河交易所运营满 80 年。",
        note: "「银河交易所」传承日志 8：建成 80 周年。",
      },
      {
        entry: 9,
        year: 90,
        text: "「银河交易所」建成 90 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 9 任馆长",
        visitorsTotal: 90000,
        log: "传承日志第 9 条：银河交易所运营满 90 年。",
        note: "「银河交易所」传承日志 9：建成 90 周年。",
      },
      {
        entry: 10,
        year: 100,
        text: "「银河交易所」建成 100 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 10 任馆长",
        visitorsTotal: 100000,
        log: "传承日志第 10 条：银河交易所运营满 100 年。",
        note: "「银河交易所」传承日志 10：建成 100 周年。",
      },
    ],
  },
  // ---------- w31-tradefleet 星际商队旗舰 传承日志 ----------
  "w31-tradefleet": {
    legacyLog: [
      {
        entry: 1,
        year: 10,
        text: "「星际商队旗舰」建成 10 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 1 任馆长",
        visitorsTotal: 10000,
        log: "传承日志第 1 条：星际商队旗舰运营满 10 年。",
        note: "「星际商队旗舰」传承日志 1：建成 10 周年。",
      },
      {
        entry: 2,
        year: 20,
        text: "「星际商队旗舰」建成 20 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 2 任馆长",
        visitorsTotal: 20000,
        log: "传承日志第 2 条：星际商队旗舰运营满 20 年。",
        note: "「星际商队旗舰」传承日志 2：建成 20 周年。",
      },
      {
        entry: 3,
        year: 30,
        text: "「星际商队旗舰」建成 30 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 3 任馆长",
        visitorsTotal: 30000,
        log: "传承日志第 3 条：星际商队旗舰运营满 30 年。",
        note: "「星际商队旗舰」传承日志 3：建成 30 周年。",
      },
      {
        entry: 4,
        year: 40,
        text: "「星际商队旗舰」建成 40 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 4 任馆长",
        visitorsTotal: 40000,
        log: "传承日志第 4 条：星际商队旗舰运营满 40 年。",
        note: "「星际商队旗舰」传承日志 4：建成 40 周年。",
      },
      {
        entry: 5,
        year: 50,
        text: "「星际商队旗舰」建成 50 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 5 任馆长",
        visitorsTotal: 50000,
        log: "传承日志第 5 条：星际商队旗舰运营满 50 年。",
        note: "「星际商队旗舰」传承日志 5：建成 50 周年。",
      },
      {
        entry: 6,
        year: 60,
        text: "「星际商队旗舰」建成 60 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 6 任馆长",
        visitorsTotal: 60000,
        log: "传承日志第 6 条：星际商队旗舰运营满 60 年。",
        note: "「星际商队旗舰」传承日志 6：建成 60 周年。",
      },
      {
        entry: 7,
        year: 70,
        text: "「星际商队旗舰」建成 70 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 7 任馆长",
        visitorsTotal: 70000,
        log: "传承日志第 7 条：星际商队旗舰运营满 70 年。",
        note: "「星际商队旗舰」传承日志 7：建成 70 周年。",
      },
      {
        entry: 8,
        year: 80,
        text: "「星际商队旗舰」建成 80 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 8 任馆长",
        visitorsTotal: 80000,
        log: "传承日志第 8 条：星际商队旗舰运营满 80 年。",
        note: "「星际商队旗舰」传承日志 8：建成 80 周年。",
      },
      {
        entry: 9,
        year: 90,
        text: "「星际商队旗舰」建成 90 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 9 任馆长",
        visitorsTotal: 90000,
        log: "传承日志第 9 条：星际商队旗舰运营满 90 年。",
        note: "「星际商队旗舰」传承日志 9：建成 90 周年。",
      },
      {
        entry: 10,
        year: 100,
        text: "「星际商队旗舰」建成 100 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 10 任馆长",
        visitorsTotal: 100000,
        log: "传承日志第 10 条：星际商队旗舰运营满 100 年。",
        note: "「星际商队旗舰」传承日志 10：建成 100 周年。",
      },
    ],
  },
  // ---------- w31-bank 星际中央银行 传承日志 ----------
  "w31-bank": {
    legacyLog: [
      {
        entry: 1,
        year: 10,
        text: "「星际中央银行」建成 10 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 1 任馆长",
        visitorsTotal: 10000,
        log: "传承日志第 1 条：星际中央银行运营满 10 年。",
        note: "「星际中央银行」传承日志 1：建成 10 周年。",
      },
      {
        entry: 2,
        year: 20,
        text: "「星际中央银行」建成 20 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 2 任馆长",
        visitorsTotal: 20000,
        log: "传承日志第 2 条：星际中央银行运营满 20 年。",
        note: "「星际中央银行」传承日志 2：建成 20 周年。",
      },
      {
        entry: 3,
        year: 30,
        text: "「星际中央银行」建成 30 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 3 任馆长",
        visitorsTotal: 30000,
        log: "传承日志第 3 条：星际中央银行运营满 30 年。",
        note: "「星际中央银行」传承日志 3：建成 30 周年。",
      },
      {
        entry: 4,
        year: 40,
        text: "「星际中央银行」建成 40 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 4 任馆长",
        visitorsTotal: 40000,
        log: "传承日志第 4 条：星际中央银行运营满 40 年。",
        note: "「星际中央银行」传承日志 4：建成 40 周年。",
      },
      {
        entry: 5,
        year: 50,
        text: "「星际中央银行」建成 50 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 5 任馆长",
        visitorsTotal: 50000,
        log: "传承日志第 5 条：星际中央银行运营满 50 年。",
        note: "「星际中央银行」传承日志 5：建成 50 周年。",
      },
      {
        entry: 6,
        year: 60,
        text: "「星际中央银行」建成 60 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 6 任馆长",
        visitorsTotal: 60000,
        log: "传承日志第 6 条：星际中央银行运营满 60 年。",
        note: "「星际中央银行」传承日志 6：建成 60 周年。",
      },
      {
        entry: 7,
        year: 70,
        text: "「星际中央银行」建成 70 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 7 任馆长",
        visitorsTotal: 70000,
        log: "传承日志第 7 条：星际中央银行运营满 70 年。",
        note: "「星际中央银行」传承日志 7：建成 70 周年。",
      },
      {
        entry: 8,
        year: 80,
        text: "「星际中央银行」建成 80 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 8 任馆长",
        visitorsTotal: 80000,
        log: "传承日志第 8 条：星际中央银行运营满 80 年。",
        note: "「星际中央银行」传承日志 8：建成 80 周年。",
      },
      {
        entry: 9,
        year: 90,
        text: "「星际中央银行」建成 90 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 9 任馆长",
        visitorsTotal: 90000,
        log: "传承日志第 9 条：星际中央银行运营满 90 年。",
        note: "「星际中央银行」传承日志 9：建成 90 周年。",
      },
      {
        entry: 10,
        year: 100,
        text: "「星际中央银行」建成 100 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 10 任馆长",
        visitorsTotal: 100000,
        log: "传承日志第 10 条：星际中央银行运营满 100 年。",
        note: "「星际中央银行」传承日志 10：建成 100 周年。",
      },
    ],
  },
  // ---------- w31-grandlibrary 大图书馆 传承日志 ----------
  "w31-grandlibrary": {
    legacyLog: [
      {
        entry: 1,
        year: 10,
        text: "「大图书馆」建成 10 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 1 任馆长",
        visitorsTotal: 10000,
        log: "传承日志第 1 条：大图书馆运营满 10 年。",
        note: "「大图书馆」传承日志 1：建成 10 周年。",
      },
      {
        entry: 2,
        year: 20,
        text: "「大图书馆」建成 20 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 2 任馆长",
        visitorsTotal: 20000,
        log: "传承日志第 2 条：大图书馆运营满 20 年。",
        note: "「大图书馆」传承日志 2：建成 20 周年。",
      },
      {
        entry: 3,
        year: 30,
        text: "「大图书馆」建成 30 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 3 任馆长",
        visitorsTotal: 30000,
        log: "传承日志第 3 条：大图书馆运营满 30 年。",
        note: "「大图书馆」传承日志 3：建成 30 周年。",
      },
      {
        entry: 4,
        year: 40,
        text: "「大图书馆」建成 40 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 4 任馆长",
        visitorsTotal: 40000,
        log: "传承日志第 4 条：大图书馆运营满 40 年。",
        note: "「大图书馆」传承日志 4：建成 40 周年。",
      },
      {
        entry: 5,
        year: 50,
        text: "「大图书馆」建成 50 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 5 任馆长",
        visitorsTotal: 50000,
        log: "传承日志第 5 条：大图书馆运营满 50 年。",
        note: "「大图书馆」传承日志 5：建成 50 周年。",
      },
      {
        entry: 6,
        year: 60,
        text: "「大图书馆」建成 60 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 6 任馆长",
        visitorsTotal: 60000,
        log: "传承日志第 6 条：大图书馆运营满 60 年。",
        note: "「大图书馆」传承日志 6：建成 60 周年。",
      },
      {
        entry: 7,
        year: 70,
        text: "「大图书馆」建成 70 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 7 任馆长",
        visitorsTotal: 70000,
        log: "传承日志第 7 条：大图书馆运营满 70 年。",
        note: "「大图书馆」传承日志 7：建成 70 周年。",
      },
      {
        entry: 8,
        year: 80,
        text: "「大图书馆」建成 80 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 8 任馆长",
        visitorsTotal: 80000,
        log: "传承日志第 8 条：大图书馆运营满 80 年。",
        note: "「大图书馆」传承日志 8：建成 80 周年。",
      },
      {
        entry: 9,
        year: 90,
        text: "「大图书馆」建成 90 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 9 任馆长",
        visitorsTotal: 90000,
        log: "传承日志第 9 条：大图书馆运营满 90 年。",
        note: "「大图书馆」传承日志 9：建成 90 周年。",
      },
      {
        entry: 10,
        year: 100,
        text: "「大图书馆」建成 100 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 10 任馆长",
        visitorsTotal: 100000,
        log: "传承日志第 10 条：大图书馆运营满 100 年。",
        note: "「大图书馆」传承日志 10：建成 100 周年。",
      },
    ],
  },
  // ---------- w31-ark 文明方舟 传承日志 ----------
  "w31-ark": {
    legacyLog: [
      {
        entry: 1,
        year: 10,
        text: "「文明方舟」建成 10 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 1 任馆长",
        visitorsTotal: 10000,
        log: "传承日志第 1 条：文明方舟运营满 10 年。",
        note: "「文明方舟」传承日志 1：建成 10 周年。",
      },
      {
        entry: 2,
        year: 20,
        text: "「文明方舟」建成 20 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 2 任馆长",
        visitorsTotal: 20000,
        log: "传承日志第 2 条：文明方舟运营满 20 年。",
        note: "「文明方舟」传承日志 2：建成 20 周年。",
      },
      {
        entry: 3,
        year: 30,
        text: "「文明方舟」建成 30 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 3 任馆长",
        visitorsTotal: 30000,
        log: "传承日志第 3 条：文明方舟运营满 30 年。",
        note: "「文明方舟」传承日志 3：建成 30 周年。",
      },
      {
        entry: 4,
        year: 40,
        text: "「文明方舟」建成 40 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 4 任馆长",
        visitorsTotal: 40000,
        log: "传承日志第 4 条：文明方舟运营满 40 年。",
        note: "「文明方舟」传承日志 4：建成 40 周年。",
      },
      {
        entry: 5,
        year: 50,
        text: "「文明方舟」建成 50 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 5 任馆长",
        visitorsTotal: 50000,
        log: "传承日志第 5 条：文明方舟运营满 50 年。",
        note: "「文明方舟」传承日志 5：建成 50 周年。",
      },
      {
        entry: 6,
        year: 60,
        text: "「文明方舟」建成 60 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 6 任馆长",
        visitorsTotal: 60000,
        log: "传承日志第 6 条：文明方舟运营满 60 年。",
        note: "「文明方舟」传承日志 6：建成 60 周年。",
      },
      {
        entry: 7,
        year: 70,
        text: "「文明方舟」建成 70 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 7 任馆长",
        visitorsTotal: 70000,
        log: "传承日志第 7 条：文明方舟运营满 70 年。",
        note: "「文明方舟」传承日志 7：建成 70 周年。",
      },
      {
        entry: 8,
        year: 80,
        text: "「文明方舟」建成 80 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 8 任馆长",
        visitorsTotal: 80000,
        log: "传承日志第 8 条：文明方舟运营满 80 年。",
        note: "「文明方舟」传承日志 8：建成 80 周年。",
      },
      {
        entry: 9,
        year: 90,
        text: "「文明方舟」建成 90 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 9 任馆长",
        visitorsTotal: 90000,
        log: "传承日志第 9 条：文明方舟运营满 90 年。",
        note: "「文明方舟」传承日志 9：建成 90 周年。",
      },
      {
        entry: 10,
        year: 100,
        text: "「文明方舟」建成 100 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 10 任馆长",
        visitorsTotal: 100000,
        log: "传承日志第 10 条：文明方舟运营满 100 年。",
        note: "「文明方舟」传承日志 10：建成 100 周年。",
      },
    ],
  },
  // ---------- w31-observatory 深空天文台 传承日志 ----------
  "w31-observatory": {
    legacyLog: [
      {
        entry: 1,
        year: 10,
        text: "「深空天文台」建成 10 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 1 任馆长",
        visitorsTotal: 10000,
        log: "传承日志第 1 条：深空天文台运营满 10 年。",
        note: "「深空天文台」传承日志 1：建成 10 周年。",
      },
      {
        entry: 2,
        year: 20,
        text: "「深空天文台」建成 20 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 2 任馆长",
        visitorsTotal: 20000,
        log: "传承日志第 2 条：深空天文台运营满 20 年。",
        note: "「深空天文台」传承日志 2：建成 20 周年。",
      },
      {
        entry: 3,
        year: 30,
        text: "「深空天文台」建成 30 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 3 任馆长",
        visitorsTotal: 30000,
        log: "传承日志第 3 条：深空天文台运营满 30 年。",
        note: "「深空天文台」传承日志 3：建成 30 周年。",
      },
      {
        entry: 4,
        year: 40,
        text: "「深空天文台」建成 40 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 4 任馆长",
        visitorsTotal: 40000,
        log: "传承日志第 4 条：深空天文台运营满 40 年。",
        note: "「深空天文台」传承日志 4：建成 40 周年。",
      },
      {
        entry: 5,
        year: 50,
        text: "「深空天文台」建成 50 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 5 任馆长",
        visitorsTotal: 50000,
        log: "传承日志第 5 条：深空天文台运营满 50 年。",
        note: "「深空天文台」传承日志 5：建成 50 周年。",
      },
      {
        entry: 6,
        year: 60,
        text: "「深空天文台」建成 60 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 6 任馆长",
        visitorsTotal: 60000,
        log: "传承日志第 6 条：深空天文台运营满 60 年。",
        note: "「深空天文台」传承日志 6：建成 60 周年。",
      },
      {
        entry: 7,
        year: 70,
        text: "「深空天文台」建成 70 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 7 任馆长",
        visitorsTotal: 70000,
        log: "传承日志第 7 条：深空天文台运营满 70 年。",
        note: "「深空天文台」传承日志 7：建成 70 周年。",
      },
      {
        entry: 8,
        year: 80,
        text: "「深空天文台」建成 80 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 8 任馆长",
        visitorsTotal: 80000,
        log: "传承日志第 8 条：深空天文台运营满 80 年。",
        note: "「深空天文台」传承日志 8：建成 80 周年。",
      },
      {
        entry: 9,
        year: 90,
        text: "「深空天文台」建成 90 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 9 任馆长",
        visitorsTotal: 90000,
        log: "传承日志第 9 条：深空天文台运营满 90 年。",
        note: "「深空天文台」传承日志 9：建成 90 周年。",
      },
      {
        entry: 10,
        year: 100,
        text: "「深空天文台」建成 100 年后，仍是殖民地最受尊敬的地标。",
        keeper: "第 10 任馆长",
        visitorsTotal: 100000,
        log: "传承日志第 10 条：深空天文台运营满 100 年。",
        note: "「深空天文台」传承日志 10：建成 100 周年。",
      },
    ],
  },
};

for (const _wid of Object.keys(WONDERS_V31_DETAIL7)) {
  if (WONDERS_V31[_wid]) {
    WONDERS_V31[_wid].detail7 = WONDERS_V31_DETAIL7[_wid];
    if (WONDERS_V31[_wid].detail) Object.assign(WONDERS_V31[_wid].detail, WONDERS_V31_DETAIL7[_wid]);
  }
}

function selfTestWondersV31Detail7() {
  const errors = [];
  for (const id of WONDERS_V31_ORDER) {
    const d = (WONDERS_V31[id] || {}).detail7;
    if (!d || d.legacyLog.length !== 10) errors.push(id + ': 传承日志不足 10 条');
  }
  return { total: WONDERS_V31_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V31_DETAIL7 = WONDERS_V31_DETAIL7;
  module.exports.selfTestWondersV31Detail7 = selfTestWondersV31Detail7;
}
