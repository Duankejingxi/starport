/* 星港 — wonders_v30.js：v3.0 新奇观 5 座（第十 / 十一胜利）
 * 每座奇观都有：造价（分项资源）、前置条件（科技 / 人口 / 奇观 / 改造进度）、
 * 10 个建造阶段（每阶段有资源投入、解锁效果、耗时）、全局加成（可执行 fx）、
 * 维护费、胜利进度函数。建成即推进对应胜利，集齐同编号胜利的奇观即获胜。
 * mergeWondersV30() 把 5 座并入全局奇观表（若存在）。描述一律一句话，不写故事。
 */

'use strict';

/* ============ §1 胜利编号说明 ============ */
/* 第十胜利：集齐 3 座第十胜利奇观（议会大厦 / 戴森球 / 贸易中心）中的任意 2 座即获胜。
 * 第十一胜利：行星改造完成 + 人类新家园两座全齐即获胜（终极胜利）。
 * 每座奇观建成时 victoryProgressAdd 直接计入对应胜利进度。 */
const WONDERS_V30_VICTORY = {
  victory10: {
    id: 'victory10', number: 10, name: '星际时代',
    needCount: 2, candidates: ['w30-parliament', 'w30-dyson', 'w30-trade'],
    note: '第十胜利：3 座第十胜利奇观中建成任意 2 座。',
  },
  victory11: {
    id: 'victory11', number: 11, name: '新家园',
    needCount: 2, candidates: ['w30-terraform', 'w30-newhome'],
    note: '第十一胜利：行星改造完成与人类新家园全部建成。',
  },
};

/* ============ §2 奇观定义（5 座） ============ */
const WONDERS_V30 = {
  // ---------- w30-parliament 星际议会大厦 [第十胜利·政治] ----------
  "w30-parliament": {
    id: "w30-parliament",
    name: "星际议会大厦",
    icon: "🏛️",
    tag: "第十胜利·政治",
    victoryNumber: 10,
    victoryId: "victory10",
    victoryName: "星际共治",
    v30: true,
    desc: "全人类代表在此立法，第十胜利「星际共治」达成条件之一。",
    cost: {
      "steel": 800,
      "nano": 400,
      "he3": 100,
    },
    costDetail: [
      { resource: "steel", amount: 800, note: "建造「星际议会大厦」需 steel ×800，可分 10 个阶段分期投入。" },
      { resource: "nano", amount: 400, note: "建造「星际议会大厦」需 nano ×400，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 100, note: "建造「星际议会大厦」需 he3 ×100，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 1300,
    needs: {
      pop: 200,
      tech: ["t30-pol-25", "t30-pol-18"],
      wonders: [],
      terraform: 0,
      note: "需人口 ≥200，科技：t30-pol-25、t30-pol-18。",
    },
    needsDetail: [
      { type: "pop", ref: "200", note: "人口 ≥200 人。" },
      { type: "tech", ref: "t30-pol-25", note: "需先研究科技「t30-pol-25」。" },
      { type: "tech", ref: "t30-pol-18", note: "需先研究科技「t30-pol-18」。" },
    ],
    fx: {
      "diplomacyMul": 2.0,
      "stabilityAdd": 20,
      "happinessAdd": 10,
      "policySlotsAdd": 2,
      "tradeMul": 1.2,
      "revoltMul": 0.5,
      "taxMul": 1.15,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "diplomacyMul", value: 2.0, note: "外交关系增速 ×2.0。" },
      { key: "stabilityAdd", value: 20, note: "殖民地稳定度 +20 点。" },
      { key: "happinessAdd", value: 10, note: "居民幸福度 +10 点。" },
      { key: "policySlotsAdd", value: 2, note: "政策槽位 +2 个。" },
      { key: "tradeMul", value: 1.2, note: "贸易收入 ×1.2。" },
      { key: "revoltMul", value: 0.5, note: "叛乱概率 ×0.5。" },
      { key: "taxMul", value: 1.15, note: "税收效率 ×1.15。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "steel": 2,
      "credits": 50,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w30-dyson", bonus: "victoryProgressAdd+1", note: "与「戴森球」同属第10胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w30-trade", bonus: "victoryProgressAdd+1", note: "与「银河贸易中心」同属第10胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%%：全局加成按 25%% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%%：全局加成按 50%% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%%：全局加成按 75%% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    stages: [
      {
        index: 1,
        name: "奠基",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "diplomacyMul",
        effectNote: "完成本阶段后，「diplomacyMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 10%：奠基完成。",
        check: {
          requiresPop: 200,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "地基",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "stabilityAdd",
        effectNote: "完成本阶段后，「stabilityAdd」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 20%：地基完成。",
        check: {
          requiresPop: 200,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
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
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 30%：穹顶结构完成。",
        check: {
          requiresPop: 200,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "议事大厅",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "policySlotsAdd",
        effectNote: "完成本阶段后，「policySlotsAdd」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 40%：议事大厅完成。",
        check: {
          requiresPop: 200,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "代表席位",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 50%：代表席位完成。",
        check: {
          requiresPop: 200,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "表决系统",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "revoltMul",
        effectNote: "完成本阶段后，「revoltMul」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 60%：表决系统完成。",
        check: {
          requiresPop: 200,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "星际通讯",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 70%：星际通讯完成。",
        check: {
          requiresPop: 200,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "宪法石碑",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 80%：宪法石碑完成。",
        check: {
          requiresPop: 200,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "开幕筹备",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "diplomacyMul",
        effectNote: "完成本阶段后，「diplomacyMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 90%：开幕筹备完成。",
        check: {
          requiresPop: 200,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "首次全会",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "steel": 80, "nano": 40, "he3": 10 },
        costNote: "本阶段投入总造价的 10%：steel×80、nano×40、he3×10。",
        effectUnlocked: "stabilityAdd",
        effectNote: "完成本阶段后，「stabilityAdd」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「星际议会大厦」建造进度 100%：首次全会完成。",
        check: {
          requiresPop: 200,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥200，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×80、nano×40、he3×10。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：奠基完成，全局加成按 10% 生效。",
      "进度 20%：地基完成，全局加成按 20% 生效。",
      "进度 30%：穹顶结构完成，全局加成按 30% 生效。",
      "进度 40%：议事大厅完成，全局加成按 40% 生效。",
      "进度 50%：代表席位完成，全局加成按 50% 生效。",
      "进度 60%：表决系统完成，全局加成按 60% 生效。",
      "进度 70%：星际通讯完成，全局加成按 70% 生效。",
      "进度 80%：宪法石碑完成，全局加成按 80% 生效。",
      "进度 90%：开幕筹备完成，全局加成按 90% 生效。",
      "进度 100%：首次全会完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory10",
      victoryName: "星际共治",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第10胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「星际议会大厦」。" },
      ],
      note: "建成「星际议会大厦」：第10胜利「星际共治」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 1500,
      defenseAdd: 500,
      note: "奇观耐久 1500，建成后城市防御 +500。",
    },
    aiPriority: {
      priority: 20,
      urgency: 2,
      note: "AI 总督推荐：胜利奇观优先度 20，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 650.0,
      powerRating: 240,
      note: "每胜利进度点造价 650.0 资源单位，强度评级 240。",
    },
  },
  // ---------- w30-dyson 戴森球 [第十胜利·能源] ----------
  "w30-dyson": {
    id: "w30-dyson",
    name: "戴森球",
    icon: "☀️",
    tag: "第十胜利·能源",
    victoryNumber: 10,
    victoryId: "victory10",
    victoryName: "恒星主权",
    v30: true,
    desc: "完整包裹太阳的能量壳，第十胜利「恒星主权」达成条件之一。",
    cost: {
      "nano": 1500,
      "he3": 600,
      "steel": 1000,
    },
    costDetail: [
      { resource: "nano", amount: 1500, note: "建造「戴森球」需 nano ×1500，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 600, note: "建造「戴森球」需 he3 ×600，可分 10 个阶段分期投入。" },
      { resource: "steel", amount: 1000, note: "建造「戴森球」需 steel ×1000，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 3100,
    needs: {
      pop: 250,
      tech: ["t30-ds-21", "t30-ds-22"],
      wonders: [],
      terraform: 0,
      note: "需人口 ≥250，科技：t30-ds-21、t30-ds-22。",
    },
    needsDetail: [
      { type: "pop", ref: "250", note: "人口 ≥250 人。" },
      { type: "tech", ref: "t30-ds-21", note: "需先研究科技「t30-ds-21」。" },
      { type: "tech", ref: "t30-ds-22", note: "需先研究科技「t30-ds-22」。" },
    ],
    fx: {
      "solarMul": 5.0,
      "orbitalPowerAdd": 500,
      "allProdMul": 1.2,
      "buildCostMul": 0.8,
      "tradeMul": 1.1,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "solarMul", value: 5.0, note: "太阳能板电力 ×5.0。" },
      { key: "orbitalPowerAdd", value: 500, note: "轨道电力 +500。" },
      { key: "allProdMul", value: 1.2, note: "全部生产建筑产量 ×1.2。" },
      { key: "buildCostMul", value: 0.8, note: "建筑建造成本 ×0.8。" },
      { key: "tradeMul", value: 1.1, note: "贸易收入 ×1.1。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "nano": 5,
      "he3": 10,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w30-parliament", bonus: "victoryProgressAdd+1", note: "与「星际议会大厦」同属第10胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w30-trade", bonus: "victoryProgressAdd+1", note: "与「银河贸易中心」同属第10胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%%：全局加成按 25%% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%%：全局加成按 50%% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%%：全局加成按 75%% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    stages: [
      {
        index: 1,
        name: "轨道船坞",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "solarMul",
        effectNote: "完成本阶段后，「solarMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 10%：轨道船坞完成。",
        check: {
          requiresPop: 250,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "首批卫星",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "orbitalPowerAdd",
        effectNote: "完成本阶段后，「orbitalPowerAdd」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 20%：首批卫星完成。",
        check: {
          requiresPop: 250,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "能量接收站",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "allProdMul",
        effectNote: "完成本阶段后，「allProdMul」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 30%：能量接收站完成。",
        check: {
          requiresPop: 250,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "卫星量产",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "buildCostMul",
        effectNote: "完成本阶段后，「buildCostMul」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 40%：卫星量产完成。",
        check: {
          requiresPop: 250,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "轨道组装",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 50%：轨道组装完成。",
        check: {
          requiresPop: 250,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "能量并网",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 60%：能量并网完成。",
        check: {
          requiresPop: 250,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "壳层合拢",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "solarMul",
        effectNote: "完成本阶段后，「solarMul」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 70%：壳层合拢完成。",
        check: {
          requiresPop: 250,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "恒星测光",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "orbitalPowerAdd",
        effectNote: "完成本阶段后，「orbitalPowerAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 80%：恒星测光完成。",
        check: {
          requiresPop: 250,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "全功率测试",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "allProdMul",
        effectNote: "完成本阶段后，「allProdMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 90%：全功率测试完成。",
        check: {
          requiresPop: 250,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "戴森球点火",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "nano": 150, "he3": 60, "steel": 100 },
        costNote: "本阶段投入总造价的 10%：nano×150、he3×60、steel×100。",
        effectUnlocked: "buildCostMul",
        effectNote: "完成本阶段后，「buildCostMul」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「戴森球」建造进度 100%：戴森球点火完成。",
        check: {
          requiresPop: 250,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥250，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×150、he3×60、steel×100。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：轨道船坞完成，全局加成按 10% 生效。",
      "进度 20%：首批卫星完成，全局加成按 20% 生效。",
      "进度 30%：能量接收站完成，全局加成按 30% 生效。",
      "进度 40%：卫星量产完成，全局加成按 40% 生效。",
      "进度 50%：轨道组装完成，全局加成按 50% 生效。",
      "进度 60%：能量并网完成，全局加成按 60% 生效。",
      "进度 70%：壳层合拢完成，全局加成按 70% 生效。",
      "进度 80%：恒星测光完成，全局加成按 80% 生效。",
      "进度 90%：全功率测试完成，全局加成按 90% 生效。",
      "进度 100%：戴森球点火完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory10",
      victoryName: "恒星主权",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第10胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「戴森球」。" },
      ],
      note: "建成「戴森球」：第10胜利「恒星主权」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 1500,
      defenseAdd: 500,
      note: "奇观耐久 1500，建成后城市防御 +500。",
    },
    aiPriority: {
      priority: 20,
      urgency: 2,
      note: "AI 总督推荐：胜利奇观优先度 20，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 1550.0,
      powerRating: 230,
      note: "每胜利进度点造价 1550.0 资源单位，强度评级 230。",
    },
  },
  // ---------- w30-terraform 行星改造完成 [第十一胜利·生态] ----------
  "w30-terraform": {
    id: "w30-terraform",
    name: "行星改造完成",
    icon: "🌍",
    tag: "第十一胜利·生态",
    victoryNumber: 11,
    victoryId: "victory11",
    victoryName: "第二个地球",
    v30: true,
    desc: "火星大气、水体、生态全部达标，第十一胜利「第二个地球」达成条件之一。",
    cost: {
      "nano": 1200,
      "he3": 300,
      "steel": 800,
    },
    costDetail: [
      { resource: "nano", amount: 1200, note: "建造「行星改造完成」需 nano ×1200，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 300, note: "建造「行星改造完成」需 he3 ×300，可分 10 个阶段分期投入。" },
      { resource: "steel", amount: 800, note: "建造「行星改造完成」需 steel ×800，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 2300,
    needs: {
      pop: 300,
      tech: ["t30-eco-24", "t30-eco-05"],
      wonders: [],
      terraform: 50,
      note: "需人口 ≥300，科技：t30-eco-24、t30-eco-05；改造进度 ≥50。",
    },
    needsDetail: [
      { type: "pop", ref: "300", note: "人口 ≥300 人。" },
      { type: "tech", ref: "t30-eco-24", note: "需先研究科技「t30-eco-24」。" },
      { type: "tech", ref: "t30-eco-05", note: "需先研究科技「t30-eco-05」。" },
      { type: "terraform", ref: "50", note: "行星改造进度 ≥50 点。" },
    ],
    fx: {
      "terraformAdd": 20,
      "oxygenAdd": 30,
      "foodMul": 2.0,
      "popGrowthMul": 1.5,
      "greenhouseMul": 1.5,
      "waterAdd": 10,
      "happinessAdd": 15,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "terraformAdd", value: 20, note: "行星改造进度 +20 点。" },
      { key: "oxygenAdd", value: 30, note: "氧气供给 +30 点。" },
      { key: "foodMul", value: 2.0, note: "食物产量 ×2.0。" },
      { key: "popGrowthMul", value: 1.5, note: "人口增长速度 ×1.5。" },
      { key: "greenhouseMul", value: 1.5, note: "温室产量 ×1.5。" },
      { key: "waterAdd", value: 10, note: "水 +10/分钟。" },
      { key: "happinessAdd", value: 15, note: "居民幸福度 +15 点。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "water": 5,
      "credits": 80,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w30-newhome", bonus: "victoryProgressAdd+1", note: "与「人类新家园」同属第11胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%%：全局加成按 25%% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%%：全局加成按 50%% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%%：全局加成按 75%% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    stages: [
      {
        index: 1,
        name: "大气验收",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "terraformAdd",
        effectNote: "完成本阶段后，「terraformAdd」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 10%：大气验收完成。",
        check: {
          requiresPop: 300,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "海洋注水",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "oxygenAdd",
        effectNote: "完成本阶段后，「oxygenAdd」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 20%：海洋注水完成。",
        check: {
          requiresPop: 300,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "森林验收",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "foodMul",
        effectNote: "完成本阶段后，「foodMul」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 30%：森林验收完成。",
        check: {
          requiresPop: 300,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "氧气达标",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "popGrowthMul",
        effectNote: "完成本阶段后，「popGrowthMul」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 40%：氧气达标完成。",
        check: {
          requiresPop: 300,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "土壤验收",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "greenhouseMul",
        effectNote: "完成本阶段后，「greenhouseMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 50%：土壤验收完成。",
        check: {
          requiresPop: 300,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "物种引入",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "waterAdd",
        effectNote: "完成本阶段后，「waterAdd」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 60%：物种引入完成。",
        check: {
          requiresPop: 300,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "气候稳定",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 70%：气候稳定完成。",
        check: {
          requiresPop: 300,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "户外行走",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 80%：户外行走完成。",
        check: {
          requiresPop: 300,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "生态认证",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "terraformAdd",
        effectNote: "完成本阶段后，「terraformAdd」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 90%：生态认证完成。",
        check: {
          requiresPop: 300,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "蓝色火星",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "nano": 120, "he3": 30, "steel": 80 },
        costNote: "本阶段投入总造价的 10%：nano×120、he3×30、steel×80。",
        effectUnlocked: "oxygenAdd",
        effectNote: "完成本阶段后，「oxygenAdd」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「行星改造完成」建造进度 100%：蓝色火星完成。",
        check: {
          requiresPop: 300,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥300，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×120、he3×30、steel×80。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：大气验收完成，全局加成按 10% 生效。",
      "进度 20%：海洋注水完成，全局加成按 20% 生效。",
      "进度 30%：森林验收完成，全局加成按 30% 生效。",
      "进度 40%：氧气达标完成，全局加成按 40% 生效。",
      "进度 50%：土壤验收完成，全局加成按 50% 生效。",
      "进度 60%：物种引入完成，全局加成按 60% 生效。",
      "进度 70%：气候稳定完成，全局加成按 70% 生效。",
      "进度 80%：户外行走完成，全局加成按 80% 生效。",
      "进度 90%：生态认证完成，全局加成按 90% 生效。",
      "进度 100%：蓝色火星完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory11",
      victoryName: "第二个地球",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第11胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「行星改造完成」。" },
      ],
      note: "建成「行星改造完成」：第11胜利「第二个地球」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 1600,
      defenseAdd: 550,
      note: "奇观耐久 1600，建成后城市防御 +550。",
    },
    aiPriority: {
      priority: 22,
      urgency: 1,
      note: "AI 总督推荐：胜利奇观优先度 22，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 1150.0,
      powerRating: 260,
      note: "每胜利进度点造价 1150.0 资源单位，强度评级 260。",
    },
  },
  // ---------- w30-trade 银河贸易中心 [第十胜利·贸易] ----------
  "w30-trade": {
    id: "w30-trade",
    name: "银河贸易中心",
    icon: "🏪",
    tag: "第十胜利·贸易",
    victoryNumber: 10,
    victoryId: "victory10",
    victoryName: "银河市场",
    v30: true,
    desc: "银河系最大的自由贸易港，第十胜利「银河市场」达成条件之一。",
    cost: {
      "steel": 600,
      "nano": 500,
      "he3": 200,
    },
    costDetail: [
      { resource: "steel", amount: 600, note: "建造「银河贸易中心」需 steel ×600，可分 10 个阶段分期投入。" },
      { resource: "nano", amount: 500, note: "建造「银河贸易中心」需 nano ×500，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 200, note: "建造「银河贸易中心」需 he3 ×200，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 1300,
    needs: {
      pop: 220,
      tech: ["t30-ds-25", "t30-pol-17"],
      wonders: [],
      terraform: 0,
      note: "需人口 ≥220，科技：t30-ds-25、t30-pol-17。",
    },
    needsDetail: [
      { type: "pop", ref: "220", note: "人口 ≥220 人。" },
      { type: "tech", ref: "t30-ds-25", note: "需先研究科技「t30-ds-25」。" },
      { type: "tech", ref: "t30-pol-17", note: "需先研究科技「t30-pol-17」。" },
    ],
    fx: {
      "tradeMul": 3.0,
      "diplomacyMul": 1.5,
      "tradeShipMul": 0.6,
      "taxMul": 1.3,
      "happinessAdd": 8,
      "victoryProgressAdd": 2,
    },
    effectsDetail: [
      { key: "tradeMul", value: 3.0, note: "贸易收入 ×3.0。" },
      { key: "diplomacyMul", value: 1.5, note: "外交关系增速 ×1.5。" },
      { key: "tradeShipMul", value: 0.6, note: "贸易船到访间隔 ×0.6。" },
      { key: "taxMul", value: 1.3, note: "税收效率 ×1.3。" },
      { key: "happinessAdd", value: 8, note: "居民幸福度 +8 点。" },
      { key: "victoryProgressAdd", value: 2, note: "胜利进度 +2 点。" },
    ],
    upkeep: {
      "steel": 3,
      "credits": 100,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w30-parliament", bonus: "victoryProgressAdd+1", note: "与「星际议会大厦」同属第10胜利，同时拥有时胜利进度再 +1。" },
      { wonder: "w30-dyson", bonus: "victoryProgressAdd+1", note: "与「戴森球」同属第10胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%%：全局加成按 25%% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%%：全局加成按 50%% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%%：全局加成按 75%% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    stages: [
      {
        index: 1,
        name: "选址",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 10%：选址完成。",
        check: {
          requiresPop: 220,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "空港扩建",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "diplomacyMul",
        effectNote: "完成本阶段后，「diplomacyMul」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 20%：空港扩建完成。",
        check: {
          requiresPop: 220,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "仓库群",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "tradeShipMul",
        effectNote: "完成本阶段后，「tradeShipMul」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 30%：仓库群完成。",
        check: {
          requiresPop: 220,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "交易大厅",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 40%：交易大厅完成。",
        check: {
          requiresPop: 220,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "关税中心",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 50%：关税中心完成。",
        check: {
          requiresPop: 220,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "外商区",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 60%：外商区完成。",
        check: {
          requiresPop: 220,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "期货市场",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "tradeMul",
        effectNote: "完成本阶段后，「tradeMul」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 70%：期货市场完成。",
        check: {
          requiresPop: 220,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "星际银行",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "diplomacyMul",
        effectNote: "完成本阶段后，「diplomacyMul」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 80%：星际银行完成。",
        check: {
          requiresPop: 220,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "航线网络",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "tradeShipMul",
        effectNote: "完成本阶段后，「tradeShipMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 90%：航线网络完成。",
        check: {
          requiresPop: 220,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "开市大典",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "steel": 60, "nano": 50, "he3": 20 },
        costNote: "本阶段投入总造价的 10%：steel×60、nano×50、he3×20。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「银河贸易中心」建造进度 100%：开市大典完成。",
        check: {
          requiresPop: 220,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥220，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：steel×60、nano×50、he3×20。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：选址完成，全局加成按 10% 生效。",
      "进度 20%：空港扩建完成，全局加成按 20% 生效。",
      "进度 30%：仓库群完成，全局加成按 30% 生效。",
      "进度 40%：交易大厅完成，全局加成按 40% 生效。",
      "进度 50%：关税中心完成，全局加成按 50% 生效。",
      "进度 60%：外商区完成，全局加成按 60% 生效。",
      "进度 70%：期货市场完成，全局加成按 70% 生效。",
      "进度 80%：星际银行完成，全局加成按 80% 生效。",
      "进度 90%：航线网络完成，全局加成按 90% 生效。",
      "进度 100%：开市大典完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory10",
      victoryName: "银河市场",
      progressAdd: 2,
      rewards: [
        { type: "victoryProgress", value: 2, note: "第10胜利进度 +2 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「银河贸易中心」。" },
      ],
      note: "建成「银河贸易中心」：第10胜利「银河市场」进度 +2，详见胜利面板。",
    },
    defense: {
      hp: 1500,
      defenseAdd: 500,
      note: "奇观耐久 1500，建成后城市防御 +500。",
    },
    aiPriority: {
      priority: 20,
      urgency: 2,
      note: "AI 总督推荐：胜利奇观优先度 20，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 650.0,
      powerRating: 230,
      note: "每胜利进度点造价 650.0 资源单位，强度评级 230。",
    },
  },
  // ---------- w30-newhome 人类新家园 [第十一胜利·终极] ----------
  "w30-newhome": {
    id: "w30-newhome",
    name: "人类新家园",
    icon: "🏡",
    tag: "第十一胜利·终极",
    victoryNumber: 11,
    victoryId: "victory11",
    victoryName: "人类新家园",
    v30: true,
    desc: "火星成为人类真正的第二家园，第十一胜利终极条件。",
    cost: {
      "nano": 2000,
      "he3": 800,
      "steel": 1500,
      "uranium": 300,
    },
    costDetail: [
      { resource: "nano", amount: 2000, note: "建造「人类新家园」需 nano ×2000，可分 10 个阶段分期投入。" },
      { resource: "he3", amount: 800, note: "建造「人类新家园」需 he3 ×800，可分 10 个阶段分期投入。" },
      { resource: "steel", amount: 1500, note: "建造「人类新家园」需 steel ×1500，可分 10 个阶段分期投入。" },
      { resource: "uranium", amount: 300, note: "建造「人类新家园」需 uranium ×300，可分 10 个阶段分期投入。" },
    ],
    totalCostValue: 4600,
    needs: {
      pop: 400,
      tech: ["t30-eco-24", "t30-ds-22", "t30-pol-25"],
      wonders: ["w30-terraform"],
      terraform: 80,
      note: "需人口 ≥400，科技：t30-eco-24、t30-ds-22、t30-pol-25；前置奇观：w30-terraform；改造进度 ≥80。",
    },
    needsDetail: [
      { type: "pop", ref: "400", note: "人口 ≥400 人。" },
      { type: "tech", ref: "t30-eco-24", note: "需先研究科技「t30-eco-24」。" },
      { type: "tech", ref: "t30-ds-22", note: "需先研究科技「t30-ds-22」。" },
      { type: "tech", ref: "t30-pol-25", note: "需先研究科技「t30-pol-25」。" },
      { type: "wonder", ref: "w30-terraform", note: "需先建成奇观「w30-terraform」。" },
      { type: "terraform", ref: "80", note: "行星改造进度 ≥80 点。" },
    ],
    fx: {
      "allProdMul": 1.5,
      "popCapAdd": 100,
      "happinessAdd": 20,
      "stabilityAdd": 20,
      "popGrowthMul": 1.5,
      "defenseMul": 1.5,
      "taxMul": 1.2,
      "victoryProgressAdd": 3,
    },
    effectsDetail: [
      { key: "allProdMul", value: 1.5, note: "全部生产建筑产量 ×1.5。" },
      { key: "popCapAdd", value: 100, note: "人口上限 +100 人。" },
      { key: "happinessAdd", value: 20, note: "居民幸福度 +20 点。" },
      { key: "stabilityAdd", value: 20, note: "殖民地稳定度 +20 点。" },
      { key: "popGrowthMul", value: 1.5, note: "人口增长速度 ×1.5。" },
      { key: "defenseMul", value: 1.5, note: "防御力 ×1.5。" },
      { key: "taxMul", value: 1.2, note: "税收效率 ×1.2。" },
      { key: "victoryProgressAdd", value: 3, note: "胜利进度 +3 点。" },
    ],
    upkeep: {
      "nano": 8,
      "credits": 150,
      note: "每分钟维护费见上；维护不足时奇观效果减半。",
    },
    synergy: [
      { wonder: "w30-terraform", bonus: "victoryProgressAdd+1", note: "与「行星改造完成」同属第11胜利，同时拥有时胜利进度再 +1。" },
    ],
    milestones: [
      { pct: 25, reward: "fx×0.25", note: "建造 25%%：全局加成按 25%% 生效。" },
      { pct: 50, reward: "fx×0.5", note: "建造 50%%：全局加成按 50%% 生效。" },
      { pct: 75, reward: "fx×0.75", note: "建造 75%%：全局加成按 75%% 生效。" },
      { pct: 100, reward: "fx×1.0+victory", note: "建造 100%%：加成全额生效，胜利进度入账。" },
    ],
    stages: [
      {
        index: 1,
        name: "总体规划",
        fromPct: 0,
        toPct: 10,
        durationSec: 120,
        workersRequired: 10,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "allProdMul",
        effectNote: "完成本阶段后，「allProdMul」按 10% 比例提前生效。",
        partialFxMul: 0.1,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 10%：总体规划完成。",
        check: {
          requiresPop: 400,
          requiresPower: 20,
          note: "本阶段需电力 ≥20，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 10 名工人进场施工。" },
          { step: 3, action: "施工 120 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 2,
        name: "新城奠基",
        fromPct: 10,
        toPct: 20,
        durationSec: 150,
        workersRequired: 15,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "popCapAdd",
        effectNote: "完成本阶段后，「popCapAdd」按 20% 比例提前生效。",
        partialFxMul: 0.2,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 20%：新城奠基完成。",
        check: {
          requiresPop: 400,
          requiresPower: 30,
          note: "本阶段需电力 ≥30，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 15 名工人进场施工。" },
          { step: 3, action: "施工 150 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 3,
        name: "生态城区",
        fromPct: 20,
        toPct: 30,
        durationSec: 180,
        workersRequired: 20,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "happinessAdd",
        effectNote: "完成本阶段后，「happinessAdd」按 30% 比例提前生效。",
        partialFxMul: 0.3,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 30%：生态城区完成。",
        check: {
          requiresPop: 400,
          requiresPower: 40,
          note: "本阶段需电力 ≥40，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 20 名工人进场施工。" },
          { step: 3, action: "施工 180 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 4,
        name: "能源城区",
        fromPct: 30,
        toPct: 40,
        durationSec: 210,
        workersRequired: 25,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "stabilityAdd",
        effectNote: "完成本阶段后，「stabilityAdd」按 40% 比例提前生效。",
        partialFxMul: 0.4,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 40%：能源城区完成。",
        check: {
          requiresPop: 400,
          requiresPower: 50,
          note: "本阶段需电力 ≥50，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 25 名工人进场施工。" },
          { step: 3, action: "施工 210 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 5,
        name: "工业城区",
        fromPct: 40,
        toPct: 50,
        durationSec: 240,
        workersRequired: 30,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "popGrowthMul",
        effectNote: "完成本阶段后，「popGrowthMul」按 50% 比例提前生效。",
        partialFxMul: 0.5,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 50%：工业城区完成。",
        check: {
          requiresPop: 400,
          requiresPower: 60,
          note: "本阶段需电力 ≥60，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 30 名工人进场施工。" },
          { step: 3, action: "施工 240 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 6,
        name: "居住城区",
        fromPct: 50,
        toPct: 60,
        durationSec: 270,
        workersRequired: 35,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "defenseMul",
        effectNote: "完成本阶段后，「defenseMul」按 60% 比例提前生效。",
        partialFxMul: 0.6,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 60%：居住城区完成。",
        check: {
          requiresPop: 400,
          requiresPower: 70,
          note: "本阶段需电力 ≥70，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 35 名工人进场施工。" },
          { step: 3, action: "施工 270 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 7,
        name: "文化城区",
        fromPct: 60,
        toPct: 70,
        durationSec: 300,
        workersRequired: 40,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "taxMul",
        effectNote: "完成本阶段后，「taxMul」按 70% 比例提前生效。",
        partialFxMul: 0.7,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 70%：文化城区完成。",
        check: {
          requiresPop: 400,
          requiresPower: 80,
          note: "本阶段需电力 ≥80，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 40 名工人进场施工。" },
          { step: 3, action: "施工 300 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 8,
        name: "防御体系",
        fromPct: 70,
        toPct: 80,
        durationSec: 330,
        workersRequired: 45,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "victoryProgressAdd",
        effectNote: "完成本阶段后，「victoryProgressAdd」按 80% 比例提前生效。",
        partialFxMul: 0.8,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 80%：防御体系完成。",
        check: {
          requiresPop: 400,
          requiresPower: 90,
          note: "本阶段需电力 ≥90，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 45 名工人进场施工。" },
          { step: 3, action: "施工 330 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 9,
        name: "移民潮",
        fromPct: 80,
        toPct: 90,
        durationSec: 360,
        workersRequired: 50,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "allProdMul",
        effectNote: "完成本阶段后，「allProdMul」按 90% 比例提前生效。",
        partialFxMul: 0.9,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 90%：移民潮完成。",
        check: {
          requiresPop: 400,
          requiresPower: 100,
          note: "本阶段需电力 ≥100，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 50 名工人进场施工。" },
          { step: 3, action: "施工 360 秒，验收后进入下一阶段。" },
        ],
      },
      {
        index: 10,
        name: "新家园落成",
        fromPct: 90,
        toPct: 100,
        durationSec: 390,
        workersRequired: 55,
        cost: { "nano": 200, "he3": 80, "steel": 150, "uranium": 30 },
        costNote: "本阶段投入总造价的 10%：nano×200、he3×80、steel×150、uranium×30。",
        effectUnlocked: "popCapAdd",
        effectNote: "完成本阶段后，「popCapAdd」按 100% 比例提前生效。",
        partialFxMul: 1.0,
        risk: "本阶段若遇灾难，进度暂停，不倒退。",
        log: "「人类新家园」建造进度 100%：新家园落成完成。",
        check: {
          requiresPop: 400,
          requiresPower: 110,
          note: "本阶段需电力 ≥110，人口 ≥400，否则暂停。",
        },
        steps: [
          { step: 1, action: "调拨资源：nano×200、he3×80、steel×150、uranium×30。" },
          { step: 2, action: "派遣 55 名工人进场施工。" },
          { step: 3, action: "施工 390 秒，验收后进入下一阶段。" },
        ],
      },
    ],
    progressLog: [
      "进度 10%：总体规划完成，全局加成按 10% 生效。",
      "进度 20%：新城奠基完成，全局加成按 20% 生效。",
      "进度 30%：生态城区完成，全局加成按 30% 生效。",
      "进度 40%：能源城区完成，全局加成按 40% 生效。",
      "进度 50%：工业城区完成，全局加成按 50% 生效。",
      "进度 60%：居住城区完成，全局加成按 60% 生效。",
      "进度 70%：文化城区完成，全局加成按 70% 生效。",
      "进度 80%：防御体系完成，全局加成按 80% 生效。",
      "进度 90%：移民潮完成，全局加成按 90% 生效。",
      "进度 100%：新家园落成完成，全局加成按 100% 生效。",
    ],
    completion: {
      victoryId: "victory11",
      victoryName: "人类新家园",
      progressAdd: 3,
      rewards: [
        { type: "victoryProgress", value: 3, note: "第11胜利进度 +3 点。" },
        { type: "globalFx", value: 1.0, note: "全部全局加成全额生效。" },
        { type: "happiness", value: 50, note: "全城幸福度 +50（落成庆典）。" },
        { type: "achievement", value: 1, note: "解锁成就「人类新家园」。" },
      ],
      note: "建成「人类新家园」：第11胜利「人类新家园」进度 +3，详见胜利面板。",
    },
    defense: {
      hp: 1600,
      defenseAdd: 550,
      note: "奇观耐久 1600，建成后城市防御 +550。",
    },
    aiPriority: {
      priority: 22,
      urgency: 1,
      note: "AI 总督推荐：胜利奇观优先度 22，越接近胜利越优先。",
    },
    balance: {
      costPerVictoryPoint: 1533.3,
      powerRating: 260,
      note: "每胜利进度点造价 1533.3 资源单位，强度评级 260。",
    },
  },
};

const WONDERS_V30_COUNT = 5;
const WONDERS_V30_ORDER = ["w30-parliament", "w30-dyson", "w30-terraform", "w30-trade", "w30-newhome"];

/* ============ §3 每座奇观的前置检查与胜利进度函数（可执行） ============ */
/* %s：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w30_parliament(state) {
  const def = WONDERS_V30["w30-parliament"];
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

/* 星际议会大厦：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w30_parliament(state, builtPct) {
  const def = WONDERS_V30["w30-parliament"];
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
  return { wonder: "w30-parliament", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 星际议会大厦：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w30_parliament() { return 2550; }

/* %s：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w30_dyson(state) {
  const def = WONDERS_V30["w30-dyson"];
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

/* 戴森球：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w30_dyson(state, builtPct) {
  const def = WONDERS_V30["w30-dyson"];
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
  return { wonder: "w30-dyson", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 戴森球：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w30_dyson() { return 2550; }

/* %s：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w30_terraform(state) {
  const def = WONDERS_V30["w30-terraform"];
  const missing = [];
  const pop = (state && state.pop) ? state.pop.count : 0;
  if (pop < def.needs.pop) missing.push('人口≥' + def.needs.pop + '（当前 ' + pop + '）');
  for (const t of def.needs.tech) {
    if (!state || !state.tech || !state.tech.has(t)) missing.push('科技 ' + t);
  }
  for (const w of def.needs.wonders) {
    if (!state || !state.wonders || !state.wonders.built(w)) missing.push('奇观 ' + w);
  }
  const tf = (state && state.planet) ? state.planet.terraform : 0;
  if (tf < 50) missing.push('改造进度≥50（当前 ' + tf + '）');
  return { ok: missing.length === 0, missing: missing };
}

/* 行星改造完成：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w30_terraform(state, builtPct) {
  const def = WONDERS_V30["w30-terraform"];
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
  return { wonder: "w30-terraform", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 行星改造完成：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w30_terraform() { return 2550; }

/* %s：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w30_trade(state) {
  const def = WONDERS_V30["w30-trade"];
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

/* 银河贸易中心：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w30_trade(state, builtPct) {
  const def = WONDERS_V30["w30-trade"];
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
  return { wonder: "w30-trade", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 银河贸易中心：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w30_trade() { return 2550; }

/* %s：检查前置是否全部满足。state 需提供 pop.count / tech.has(id) /
 * wonders.built(id) / planet.terraform。返回 {ok, missing[]}。 */
function checkPrereq_w30_newhome(state) {
  const def = WONDERS_V30["w30-newhome"];
  const missing = [];
  const pop = (state && state.pop) ? state.pop.count : 0;
  if (pop < def.needs.pop) missing.push('人口≥' + def.needs.pop + '（当前 ' + pop + '）');
  for (const t of def.needs.tech) {
    if (!state || !state.tech || !state.tech.has(t)) missing.push('科技 ' + t);
  }
  for (const w of def.needs.wonders) {
    if (!state || !state.wonders || !state.wonders.built(w)) missing.push('奇观 ' + w);
  }
  const tf = (state && state.planet) ? state.planet.terraform : 0;
  if (tf < 80) missing.push('改造进度≥80（当前 ' + tf + '）');
  return { ok: missing.length === 0, missing: missing };
}

/* 人类新家园：按当前建造进度计算已生效的全局加成倍率（0~1）与胜利进度。 */
function victoryProgress_w30_newhome(state, builtPct) {
  const def = WONDERS_V30["w30-newhome"];
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
  return { wonder: "w30-newhome", builtPct: pct, fxMul: fxMul, done: done,
    victoryId: def.victoryId, victoryNumber: def.victoryNumber,
    progressAdd: progress, fxNow: fxNow };
}

/* 人类新家园：建造总耗时（10 阶段耗时之和，秒）。 */
function buildTime_w30_newhome() { return 2550; }

/* ============ §4 奇观管理器 v30 ============ */
class WonderManagerV30 {
  constructor() {
    this.built = new Set();       // 已建成奇观 id
    this.progress = {};           // id -> 0~100 建造进度
    this.stage = {};              // id -> 当前阶段 index（0~9）
  }

  isBuilt(id) { return this.built.has(id); }

  /* 第十 / 十一胜利是否达成。 */
  victoryDone(victoryId) {
    const v = WONDERS_V30_VICTORY[victoryId];
    if (!v) return false;
    let n = 0;
    for (const id of v.candidates) if (this.built.has(id)) n++;
    return n >= v.needCount;
  }

  /* 各胜利当前进度：已建成数 / 需建成数。 */
  victoryStatus() {
    const out = {};
    for (const k of Object.keys(WONDERS_V30_VICTORY)) {
      const v = WONDERS_V30_VICTORY[k];
      let n = 0;
      for (const id of v.candidates) if (this.built.has(id)) n++;
      out[k] = { number: v.number, name: v.name, built: n, need: v.needCount, done: n >= v.needCount };
    }
    return out;
  }

  /* 开始建造：校验前置 + 扣费（调用方先检查资源），进度从 0 开始。 */
  startBuild(id, state) {
    const def = WONDERS_V30[id];
    if (!def) return { ok: false, reason: '未知奇观' };
    if (this.built.has(id)) return { ok: false, reason: '已建成' };
    if (this.progress[id] !== undefined) return { ok: false, reason: '建造中' };
    const check = this.checkPrereq(id, state);
    if (!check.ok) return { ok: false, reason: '前置不足：' + check.missing.join('；') };
    this.progress[id] = 0;
    this.stage[id] = 0;
    return { ok: true };
  }

  /* 前置检查（与单奇观函数一致口径）。 */
  checkPrereq(id, state) {
    const def = WONDERS_V30[id];
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

  /* 推进建造：dt 秒，返回当前阶段与进度；到 100% 时自动落成。 */
  tickBuild(id, dtSec, state) {
    if (this.progress[id] === undefined || this.built.has(id)) return null;
    const def = WONDERS_V30[id];
    const stageIdx = Math.min(9, Math.floor(this.progress[id] / 10));
    const stage = def.stages[stageIdx];
    const rate = 100 / (stage.durationSec * 10) * dtSec * 10;
    this.progress[id] = Math.min(100, this.progress[id] + (100 / stage.durationSec) * dtSec);
    this.stage[id] = Math.min(9, Math.floor(this.progress[id] / 10));
    if (this.progress[id] >= 100) {
      this.built.add(id);
      delete this.progress[id];
      return { id: id, pct: 100, done: true, victory: this.victoryStatus() };
    }
    return { id: id, pct: this.progress[id], stage: this.stage[id], done: false };
  }

  /* 已建成奇观的全局加成汇总（乘法类取乘积，加法类取和）。 */
  globalFx() {
    const mul = {}; const add = {};
    for (const id of this.built) {
      const def = WONDERS_V30[id];
      for (const k of Object.keys(def.fx)) {
        const v = def.fx[k];
        if (k.indexOf('Mul') !== -1) mul[k] = (mul[k] || 1) * v;
        else if (k.indexOf('Add') !== -1) add[k] = (add[k] || 0) + v;
      }
    }
    return { mul: mul, add: add };
  }

  /* 每分钟维护费汇总。 */
  upkeepPerMin() {
    const out = {};
    for (const id of this.built) {
      const def = WONDERS_V30[id];
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
/* mergeWondersV30()：幂等。优先并入全局 WONDERS_V19（若存在），否则登记到
 * 全局 WONDERS（若存在），两者都不存在时只返回计数。返回新建 WonderManagerV30。 */
function mergeWondersV30() {
  let added = 0, skipped = 0, target = null;
  if (typeof WONDERS_V19 !== 'undefined') target = WONDERS_V19;
  else if (typeof WONDERS !== 'undefined') target = WONDERS;
  if (target) {
    for (const id of WONDERS_V30_ORDER) {
      if (target[id]) { skipped++; continue; }
      target[id] = WONDERS_V30[id];
      added++;
    }
  }
  return { added: added, skipped: skipped, total: WONDERS_V30_COUNT,
    target: target ? 'global' : 'standalone',
    victories: WONDERS_V30_VICTORY, manager: new WonderManagerV30() };
}

/* ============ §6 自检 ============ */
function selfTestWondersV30() {
  const errors = [];
  for (const id of WONDERS_V30_ORDER) {
    const w = WONDERS_V30[id];
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
  if (WONDERS_V30_ORDER.length !== 5) errors.push('奇观数量不为 5');
  try {
    const m = new WonderManagerV30();
    const st = { pop: { count: 500 }, tech: { has: function () { return true; } },
      wonders: { built: function () { return true; } }, planet: { terraform: 100 } };
    // 按依赖顺序开建：先开建除 w30-newhome 外的 4 座，建成 w30-terraform 后再开建 w30-newhome
    for (const id of WONDERS_V30_ORDER) {
      if (id === 'w30-newhome') continue;
      const r = m.startBuild(id, st);
      if (!r.ok) errors.push('冒烟：无法开建 ' + id + '：' + r.reason);
    }
    let guardT = 0;
    while (!m.isBuilt('w30-terraform') && guardT++ < 10000) m.tickBuild('w30-terraform', 60, st);
    if (!m.isBuilt('w30-terraform')) errors.push('冒烟：无法建成 w30-terraform');
    const rn = m.startBuild('w30-newhome', st);
    if (!rn.ok) errors.push('冒烟：无法开建 w30-newhome：' + rn.reason);
    for (const id of WONDERS_V30_ORDER) {
      let guard = 0;
      while (!m.isBuilt(id) && guard++ < 10000) m.tickBuild(id, 60, st);
      if (!m.isBuilt(id)) errors.push('冒烟：无法建成 ' + id);
    }
    if (!m.victoryDone('victory10')) errors.push('冒烟：第十胜利未达成');
    if (!m.victoryDone('victory11')) errors.push('冒烟：第十一胜利未达成');
    const fx = m.globalFx();
    if (typeof fx.mul.tradeMul !== 'number') errors.push('冒烟：全局贸易加成未汇总');
  } catch (e) { errors.push('冒烟失败: ' + e.message); }
  return { total: WONDERS_V30_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports = { WONDERS_V30, WONDERS_V30_ORDER, WONDERS_V30_COUNT,
    WONDERS_V30_VICTORY, WonderManagerV30, mergeWondersV30, selfTestWondersV30 };
}

/* ============ §7 奇观细节块（城区 / 航线 / 外交 / 升级，载入时并入 WONDERS_V30） ============ */
const WONDERS_V30_DETAIL = {
  // ---------- w30-parliament 星际议会大厦 细节 ----------
  "w30-parliament": {
    districtEffects: [
      { district: "居住区", outputMul: 1.2, happinessAdd: 2, note: "「星际议会大厦」使「居住区」产出 ×1.2，幸福度 +2。" },
      { district: "工业区", outputMul: 1.15, happinessAdd: 2, note: "「星际议会大厦」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.25, happinessAdd: 2, note: "「星际议会大厦」使「商业区」产出 ×1.25，幸福度 +2。" },
      { district: "科研区", outputMul: 1.2, happinessAdd: 2, note: "「星际议会大厦」使「科研区」产出 ×1.2，幸福度 +2。" },
      { district: "农业区", outputMul: 1.15, happinessAdd: 2, note: "「星际议会大厦」使「农业区」产出 ×1.15，幸福度 +2。" },
      { district: "军事区", outputMul: 1.1, happinessAdd: 2, note: "「星际议会大厦」使「军事区」产出 ×1.1，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 100, note: "「星际议会大厦」开通至「地球」航线，每分钟贸易收入 +100 星币。" },
      { destination: "月球", incomePerMin: 80, note: "「星际议会大厦」开通至「月球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "小行星带", incomePerMin: 120, note: "「星际议会大厦」开通至「小行星带」航线，每分钟贸易收入 +120 星币。" },
      { destination: "木卫二", incomePerMin: 150, note: "「星际议会大厦」开通至「木卫二」航线，每分钟贸易收入 +150 星币。" },
      { destination: "半人马座", incomePerMin: 300, note: "「星际议会大厦」开通至「半人马座」航线，每分钟贸易收入 +300 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联合", relationAdd: 30, note: "「星际议会大厦」使与「地球联合」关系 +30。" },
      { faction: "月球殖民地", relationAdd: 25, note: "「星际议会大厦」使与「月球殖民地」关系 +25。" },
      { faction: "火星自治领", relationAdd: 20, note: "「星际议会大厦」使与「火星自治领」关系 +20。" },
      { faction: "小行星矿工公会", relationAdd: 15, note: "「星际议会大厦」使与「小行星矿工公会」关系 +15。" },
      { faction: "外星观察者", relationAdd: 10, note: "「星际议会大厦」使与「外星观察者」关系 +10。" },
    ],
    populationEffects: [
      { strata: "工人", happinessAdd: 8, growthMul: 1.1, note: "「星际议会大厦」使工人幸福度 +8，增长 ×1.1。" },
      { strata: "工程师", happinessAdd: 10, growthMul: 1.1, note: "「星际议会大厦」使工程师幸福度 +10，增长 ×1.1。" },
      { strata: "科学家", happinessAdd: 12, growthMul: 1.1, note: "「星际议会大厦」使科学家幸福度 +12，增长 ×1.1。" },
      { strata: "商人", happinessAdd: 10, growthMul: 1.1, note: "「星际议会大厦」使商人幸福度 +10，增长 ×1.1。" },
      { strata: "军人", happinessAdd: 6, growthMul: 1.1, note: "「星际议会大厦」使军人幸福度 +6，增长 ×1.1。" },
    ],
    techBoosts: [
      { tech: "t30-pol-25", researchMul: 0.8, note: "拥有「星际议会大厦」后，研究「t30-pol-25」耗时 ×0.8。" },
      { tech: "t30-pol-18", researchMul: 0.8, note: "拥有「星际议会大厦」后，研究「t30-pol-18」耗时 ×0.8。" },
      { tech: "t30-pol-16", researchMul: 0.8, note: "拥有「星际议会大厦」后，研究「t30-pol-16」耗时 ×0.8。" },
      { tech: "t30-ds-02", researchMul: 0.8, note: "拥有「星际议会大厦」后，研究「t30-ds-02」耗时 ×0.8。" },
      { tech: "t30-eco-01", researchMul: 0.8, note: "拥有「星际议会大厦」后，研究「t30-eco-01」耗时 ×0.8。" },
      { tech: "t30-mil-01", researchMul: 0.8, note: "拥有「星际议会大厦」后，研究「t30-mil-01」耗时 ×0.8。" },
      { tech: "t-prod-6", researchMul: 0.8, note: "拥有「星际议会大厦」后，研究「t-prod-6」耗时 ×0.8。" },
      { tech: "t-surv-1", researchMul: 0.8, note: "拥有「星际议会大厦」后，研究「t-surv-1」耗时 ×0.8。" },
    ],
    eventHooks: [
      { hook: "onBuildStart", effect: "开工庆典：幸福度 +5，持续 1 分钟。", note: "「星际议会大厦」钩子 onBuildStart：开工庆典：幸福度 +5，持续 1 分钟。" },
      { hook: "onStageComplete", effect: "每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。", note: "「星际议会大厦」钩子 onStageComplete：每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。" },
      { hook: "onHalfway", effect: "过半庆典：移民 +10 人。", note: "「星际议会大厦」钩子 onHalfway：过半庆典：移民 +10 人。" },
      { hook: "onComplete", effect: "落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。", note: "「星际议会大厦」钩子 onComplete：落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。" },
      { hook: "onDisaster", effect: "灾难期间：奇观建造暂停，不倒退。", note: "「星际议会大厦」钩子 onDisaster：灾难期间：奇观建造暂停，不倒退。" },
      { hook: "onVictory", effect: "胜利达成：结算面板展示奇观贡献。", note: "「星际议会大厦」钩子 onVictory：胜利达成：结算面板展示奇观贡献。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "nano": 100 }, effect: "全局加成 +10%。", note: "「星际议会大厦」1 级强化：全局加成 +10%。" },
      { level: 2, cost: { "nano": 200, "he3": 50 }, effect: "全局加成 +25%，维护费 -20%。", note: "「星际议会大厦」2 级强化：全局加成 +25%，维护费 -20%。" },
      { level: 3, cost: { "nano": 400, "he3": 100 }, effect: "全局加成 +50%，胜利进度再 +1。", note: "「星际议会大厦」3 级强化：全局加成 +50%，胜利进度再 +1。" },
    ],
    maintenanceSchedule: [
      { task: "结构检修", intervalMin: 60, costCredits: 10, note: "「星际议会大厦」每 60 分钟执行「结构检修」，花费 10 星币；跳过则效果 -10%。" },
      { task: "能源校准", intervalMin: 30, costCredits: 15, note: "「星际议会大厦」每 30 分钟执行「能源校准」，花费 15 星币；跳过则效果 -10%。" },
      { task: "系统升级", intervalMin: 120, costCredits: 20, note: "「星际议会大厦」每 120 分钟执行「系统升级」，花费 20 星币；跳过则效果 -10%。" },
      { task: "人员轮换", intervalMin: 15, costCredits: 5, note: "「星际议会大厦」每 15 分钟执行「人员轮换」，花费 5 星币；跳过则效果 -10%。" },
      { task: "安全演习", intervalMin: 90, costCredits: 8, note: "「星际议会大厦」每 90 分钟执行「安全演习」，花费 8 星币；跳过则效果 -10%。" },
    ],
    resourceFlowPerMin: [
      { resource: "credits", amount: 50, note: "「星际议会大厦」建成后每分钟净产出 credits +50。" },
      { resource: "steel", amount: 2, note: "「星际议会大厦」建成后每分钟净产出 steel +2。" },
      { resource: "food", amount: 5, note: "「星际议会大厦」建成后每分钟净产出 food +5。" },
      { resource: "water", amount: 5, note: "「星际议会大厦」建成后每分钟净产出 water +5。" },
      { resource: "power", amount: 20, note: "「星际议会大厦」建成后每分钟净产出 power +20。" },
      { resource: "tech", amount: 3, note: "「星际议会大厦」建成后每分钟净产出 tech +3。" },
      { resource: "oxygen", amount: 5, note: "「星际议会大厦」建成后每分钟净产出 oxygen +5。" },
      { resource: "happiness", amount: 2, note: "「星际议会大厦」建成后每分钟净产出 happiness +2。" },
    ],
    defenseLayers: [
      { layer: "外围警戒", defenseAdd: 20, note: "「星际议会大厦」「外围警戒」提供防御 +20。" },
      { layer: "能量护盾", defenseAdd: 50, note: "「星际议会大厦」「能量护盾」提供防御 +50。" },
      { layer: "防空火力", defenseAdd: 40, note: "「星际议会大厦」「防空火力」提供防御 +40。" },
      { layer: "地面工事", defenseAdd: 30, note: "「星际议会大厦」「地面工事」提供防御 +30。" },
      { layer: "核心避难所", defenseAdd: 60, note: "「星际议会大厦」「核心避难所」提供防御 +60。" },
    ],
    constructionRisks: [
      { risk: "沙尘暴延误", chance: 0.1, delaySec: 120, note: "建造「星际议会大厦」期间「沙尘暴延误」概率 10%，发生则延误 120 秒。" },
      { risk: "陨石损坏", chance: 0.05, delaySec: 120, note: "建造「星际议会大厦」期间「陨石损坏」概率 5%，发生则延误 120 秒。" },
      { risk: "工人罢工", chance: 0.08, delaySec: 120, note: "建造「星际议会大厦」期间「工人罢工」概率 8%，发生则延误 120 秒。" },
      { risk: "资金短缺", chance: 0.12, delaySec: 120, note: "建造「星际议会大厦」期间「资金短缺」概率 12%，发生则延误 120 秒。" },
    ],
    visitorEffects: [
      { visitor: "游客", incomePerMin: 30, note: "「星际议会大厦」落成后每分钟吸引游客，带来 30 星币收入。" },
      { visitor: "朝圣者", incomePerMin: 20, note: "「星际议会大厦」落成后每分钟吸引朝圣者，带来 20 星币收入。" },
      { visitor: "商队", incomePerMin: 50, note: "「星际议会大厦」落成后每分钟吸引商队，带来 50 星币收入。" },
      { visitor: "外交使团", incomePerMin: 40, note: "「星际议会大厦」落成后每分钟吸引外交使团，带来 40 星币收入。" },
    ],
  },
  // ---------- w30-dyson 戴森球 细节 ----------
  "w30-dyson": {
    districtEffects: [
      { district: "居住区", outputMul: 1.2, happinessAdd: 2, note: "「戴森球」使「居住区」产出 ×1.2，幸福度 +2。" },
      { district: "工业区", outputMul: 1.15, happinessAdd: 2, note: "「戴森球」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.25, happinessAdd: 2, note: "「戴森球」使「商业区」产出 ×1.25，幸福度 +2。" },
      { district: "科研区", outputMul: 1.2, happinessAdd: 2, note: "「戴森球」使「科研区」产出 ×1.2，幸福度 +2。" },
      { district: "农业区", outputMul: 1.15, happinessAdd: 2, note: "「戴森球」使「农业区」产出 ×1.15，幸福度 +2。" },
      { district: "军事区", outputMul: 1.1, happinessAdd: 2, note: "「戴森球」使「军事区」产出 ×1.1，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 100, note: "「戴森球」开通至「地球」航线，每分钟贸易收入 +100 星币。" },
      { destination: "月球", incomePerMin: 80, note: "「戴森球」开通至「月球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "小行星带", incomePerMin: 120, note: "「戴森球」开通至「小行星带」航线，每分钟贸易收入 +120 星币。" },
      { destination: "木卫二", incomePerMin: 150, note: "「戴森球」开通至「木卫二」航线，每分钟贸易收入 +150 星币。" },
      { destination: "半人马座", incomePerMin: 300, note: "「戴森球」开通至「半人马座」航线，每分钟贸易收入 +300 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联合", relationAdd: 30, note: "「戴森球」使与「地球联合」关系 +30。" },
      { faction: "月球殖民地", relationAdd: 25, note: "「戴森球」使与「月球殖民地」关系 +25。" },
      { faction: "火星自治领", relationAdd: 20, note: "「戴森球」使与「火星自治领」关系 +20。" },
      { faction: "小行星矿工公会", relationAdd: 15, note: "「戴森球」使与「小行星矿工公会」关系 +15。" },
      { faction: "外星观察者", relationAdd: 10, note: "「戴森球」使与「外星观察者」关系 +10。" },
    ],
    populationEffects: [
      { strata: "工人", happinessAdd: 8, growthMul: 1.1, note: "「戴森球」使工人幸福度 +8，增长 ×1.1。" },
      { strata: "工程师", happinessAdd: 10, growthMul: 1.1, note: "「戴森球」使工程师幸福度 +10，增长 ×1.1。" },
      { strata: "科学家", happinessAdd: 12, growthMul: 1.1, note: "「戴森球」使科学家幸福度 +12，增长 ×1.1。" },
      { strata: "商人", happinessAdd: 10, growthMul: 1.1, note: "「戴森球」使商人幸福度 +10，增长 ×1.1。" },
      { strata: "军人", happinessAdd: 6, growthMul: 1.1, note: "「戴森球」使军人幸福度 +6，增长 ×1.1。" },
    ],
    techBoosts: [
      { tech: "t30-ds-21", researchMul: 0.8, note: "拥有「戴森球」后，研究「t30-ds-21」耗时 ×0.8。" },
      { tech: "t30-ds-22", researchMul: 0.8, note: "拥有「戴森球」后，研究「t30-ds-22」耗时 ×0.8。" },
      { tech: "t30-pol-16", researchMul: 0.8, note: "拥有「戴森球」后，研究「t30-pol-16」耗时 ×0.8。" },
      { tech: "t30-ds-02", researchMul: 0.8, note: "拥有「戴森球」后，研究「t30-ds-02」耗时 ×0.8。" },
      { tech: "t30-eco-01", researchMul: 0.8, note: "拥有「戴森球」后，研究「t30-eco-01」耗时 ×0.8。" },
      { tech: "t30-mil-01", researchMul: 0.8, note: "拥有「戴森球」后，研究「t30-mil-01」耗时 ×0.8。" },
      { tech: "t-prod-6", researchMul: 0.8, note: "拥有「戴森球」后，研究「t-prod-6」耗时 ×0.8。" },
      { tech: "t-surv-1", researchMul: 0.8, note: "拥有「戴森球」后，研究「t-surv-1」耗时 ×0.8。" },
    ],
    eventHooks: [
      { hook: "onBuildStart", effect: "开工庆典：幸福度 +5，持续 1 分钟。", note: "「戴森球」钩子 onBuildStart：开工庆典：幸福度 +5，持续 1 分钟。" },
      { hook: "onStageComplete", effect: "每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。", note: "「戴森球」钩子 onStageComplete：每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。" },
      { hook: "onHalfway", effect: "过半庆典：移民 +10 人。", note: "「戴森球」钩子 onHalfway：过半庆典：移民 +10 人。" },
      { hook: "onComplete", effect: "落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。", note: "「戴森球」钩子 onComplete：落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。" },
      { hook: "onDisaster", effect: "灾难期间：奇观建造暂停，不倒退。", note: "「戴森球」钩子 onDisaster：灾难期间：奇观建造暂停，不倒退。" },
      { hook: "onVictory", effect: "胜利达成：结算面板展示奇观贡献。", note: "「戴森球」钩子 onVictory：胜利达成：结算面板展示奇观贡献。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "nano": 100 }, effect: "全局加成 +10%。", note: "「戴森球」1 级强化：全局加成 +10%。" },
      { level: 2, cost: { "nano": 200, "he3": 50 }, effect: "全局加成 +25%，维护费 -20%。", note: "「戴森球」2 级强化：全局加成 +25%，维护费 -20%。" },
      { level: 3, cost: { "nano": 400, "he3": 100 }, effect: "全局加成 +50%，胜利进度再 +1。", note: "「戴森球」3 级强化：全局加成 +50%，胜利进度再 +1。" },
    ],
    maintenanceSchedule: [
      { task: "结构检修", intervalMin: 60, costCredits: 10, note: "「戴森球」每 60 分钟执行「结构检修」，花费 10 星币；跳过则效果 -10%。" },
      { task: "能源校准", intervalMin: 30, costCredits: 15, note: "「戴森球」每 30 分钟执行「能源校准」，花费 15 星币；跳过则效果 -10%。" },
      { task: "系统升级", intervalMin: 120, costCredits: 20, note: "「戴森球」每 120 分钟执行「系统升级」，花费 20 星币；跳过则效果 -10%。" },
      { task: "人员轮换", intervalMin: 15, costCredits: 5, note: "「戴森球」每 15 分钟执行「人员轮换」，花费 5 星币；跳过则效果 -10%。" },
      { task: "安全演习", intervalMin: 90, costCredits: 8, note: "「戴森球」每 90 分钟执行「安全演习」，花费 8 星币；跳过则效果 -10%。" },
    ],
    resourceFlowPerMin: [
      { resource: "credits", amount: 50, note: "「戴森球」建成后每分钟净产出 credits +50。" },
      { resource: "steel", amount: 2, note: "「戴森球」建成后每分钟净产出 steel +2。" },
      { resource: "food", amount: 5, note: "「戴森球」建成后每分钟净产出 food +5。" },
      { resource: "water", amount: 5, note: "「戴森球」建成后每分钟净产出 water +5。" },
      { resource: "power", amount: 20, note: "「戴森球」建成后每分钟净产出 power +20。" },
      { resource: "tech", amount: 3, note: "「戴森球」建成后每分钟净产出 tech +3。" },
      { resource: "oxygen", amount: 5, note: "「戴森球」建成后每分钟净产出 oxygen +5。" },
      { resource: "happiness", amount: 2, note: "「戴森球」建成后每分钟净产出 happiness +2。" },
    ],
    defenseLayers: [
      { layer: "外围警戒", defenseAdd: 20, note: "「戴森球」「外围警戒」提供防御 +20。" },
      { layer: "能量护盾", defenseAdd: 50, note: "「戴森球」「能量护盾」提供防御 +50。" },
      { layer: "防空火力", defenseAdd: 40, note: "「戴森球」「防空火力」提供防御 +40。" },
      { layer: "地面工事", defenseAdd: 30, note: "「戴森球」「地面工事」提供防御 +30。" },
      { layer: "核心避难所", defenseAdd: 60, note: "「戴森球」「核心避难所」提供防御 +60。" },
    ],
    constructionRisks: [
      { risk: "沙尘暴延误", chance: 0.1, delaySec: 120, note: "建造「戴森球」期间「沙尘暴延误」概率 10%，发生则延误 120 秒。" },
      { risk: "陨石损坏", chance: 0.05, delaySec: 120, note: "建造「戴森球」期间「陨石损坏」概率 5%，发生则延误 120 秒。" },
      { risk: "工人罢工", chance: 0.08, delaySec: 120, note: "建造「戴森球」期间「工人罢工」概率 8%，发生则延误 120 秒。" },
      { risk: "资金短缺", chance: 0.12, delaySec: 120, note: "建造「戴森球」期间「资金短缺」概率 12%，发生则延误 120 秒。" },
    ],
    visitorEffects: [
      { visitor: "游客", incomePerMin: 30, note: "「戴森球」落成后每分钟吸引游客，带来 30 星币收入。" },
      { visitor: "朝圣者", incomePerMin: 20, note: "「戴森球」落成后每分钟吸引朝圣者，带来 20 星币收入。" },
      { visitor: "商队", incomePerMin: 50, note: "「戴森球」落成后每分钟吸引商队，带来 50 星币收入。" },
      { visitor: "外交使团", incomePerMin: 40, note: "「戴森球」落成后每分钟吸引外交使团，带来 40 星币收入。" },
    ],
  },
  // ---------- w30-terraform 行星改造完成 细节 ----------
  "w30-terraform": {
    districtEffects: [
      { district: "居住区", outputMul: 1.2, happinessAdd: 2, note: "「行星改造完成」使「居住区」产出 ×1.2，幸福度 +2。" },
      { district: "工业区", outputMul: 1.15, happinessAdd: 2, note: "「行星改造完成」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.25, happinessAdd: 2, note: "「行星改造完成」使「商业区」产出 ×1.25，幸福度 +2。" },
      { district: "科研区", outputMul: 1.2, happinessAdd: 2, note: "「行星改造完成」使「科研区」产出 ×1.2，幸福度 +2。" },
      { district: "农业区", outputMul: 1.15, happinessAdd: 2, note: "「行星改造完成」使「农业区」产出 ×1.15，幸福度 +2。" },
      { district: "军事区", outputMul: 1.1, happinessAdd: 2, note: "「行星改造完成」使「军事区」产出 ×1.1，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 100, note: "「行星改造完成」开通至「地球」航线，每分钟贸易收入 +100 星币。" },
      { destination: "月球", incomePerMin: 80, note: "「行星改造完成」开通至「月球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "小行星带", incomePerMin: 120, note: "「行星改造完成」开通至「小行星带」航线，每分钟贸易收入 +120 星币。" },
      { destination: "木卫二", incomePerMin: 150, note: "「行星改造完成」开通至「木卫二」航线，每分钟贸易收入 +150 星币。" },
      { destination: "半人马座", incomePerMin: 300, note: "「行星改造完成」开通至「半人马座」航线，每分钟贸易收入 +300 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联合", relationAdd: 30, note: "「行星改造完成」使与「地球联合」关系 +30。" },
      { faction: "月球殖民地", relationAdd: 25, note: "「行星改造完成」使与「月球殖民地」关系 +25。" },
      { faction: "火星自治领", relationAdd: 20, note: "「行星改造完成」使与「火星自治领」关系 +20。" },
      { faction: "小行星矿工公会", relationAdd: 15, note: "「行星改造完成」使与「小行星矿工公会」关系 +15。" },
      { faction: "外星观察者", relationAdd: 10, note: "「行星改造完成」使与「外星观察者」关系 +10。" },
    ],
    populationEffects: [
      { strata: "工人", happinessAdd: 8, growthMul: 1.1, note: "「行星改造完成」使工人幸福度 +8，增长 ×1.1。" },
      { strata: "工程师", happinessAdd: 10, growthMul: 1.1, note: "「行星改造完成」使工程师幸福度 +10，增长 ×1.1。" },
      { strata: "科学家", happinessAdd: 12, growthMul: 1.1, note: "「行星改造完成」使科学家幸福度 +12，增长 ×1.1。" },
      { strata: "商人", happinessAdd: 10, growthMul: 1.1, note: "「行星改造完成」使商人幸福度 +10，增长 ×1.1。" },
      { strata: "军人", happinessAdd: 6, growthMul: 1.1, note: "「行星改造完成」使军人幸福度 +6，增长 ×1.1。" },
    ],
    techBoosts: [
      { tech: "t30-eco-24", researchMul: 0.8, note: "拥有「行星改造完成」后，研究「t30-eco-24」耗时 ×0.8。" },
      { tech: "t30-eco-05", researchMul: 0.8, note: "拥有「行星改造完成」后，研究「t30-eco-05」耗时 ×0.8。" },
      { tech: "t30-pol-16", researchMul: 0.8, note: "拥有「行星改造完成」后，研究「t30-pol-16」耗时 ×0.8。" },
      { tech: "t30-ds-02", researchMul: 0.8, note: "拥有「行星改造完成」后，研究「t30-ds-02」耗时 ×0.8。" },
      { tech: "t30-eco-01", researchMul: 0.8, note: "拥有「行星改造完成」后，研究「t30-eco-01」耗时 ×0.8。" },
      { tech: "t30-mil-01", researchMul: 0.8, note: "拥有「行星改造完成」后，研究「t30-mil-01」耗时 ×0.8。" },
      { tech: "t-prod-6", researchMul: 0.8, note: "拥有「行星改造完成」后，研究「t-prod-6」耗时 ×0.8。" },
      { tech: "t-surv-1", researchMul: 0.8, note: "拥有「行星改造完成」后，研究「t-surv-1」耗时 ×0.8。" },
    ],
    eventHooks: [
      { hook: "onBuildStart", effect: "开工庆典：幸福度 +5，持续 1 分钟。", note: "「行星改造完成」钩子 onBuildStart：开工庆典：幸福度 +5，持续 1 分钟。" },
      { hook: "onStageComplete", effect: "每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。", note: "「行星改造完成」钩子 onStageComplete：每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。" },
      { hook: "onHalfway", effect: "过半庆典：移民 +10 人。", note: "「行星改造完成」钩子 onHalfway：过半庆典：移民 +10 人。" },
      { hook: "onComplete", effect: "落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。", note: "「行星改造完成」钩子 onComplete：落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。" },
      { hook: "onDisaster", effect: "灾难期间：奇观建造暂停，不倒退。", note: "「行星改造完成」钩子 onDisaster：灾难期间：奇观建造暂停，不倒退。" },
      { hook: "onVictory", effect: "胜利达成：结算面板展示奇观贡献。", note: "「行星改造完成」钩子 onVictory：胜利达成：结算面板展示奇观贡献。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "nano": 100 }, effect: "全局加成 +10%。", note: "「行星改造完成」1 级强化：全局加成 +10%。" },
      { level: 2, cost: { "nano": 200, "he3": 50 }, effect: "全局加成 +25%，维护费 -20%。", note: "「行星改造完成」2 级强化：全局加成 +25%，维护费 -20%。" },
      { level: 3, cost: { "nano": 400, "he3": 100 }, effect: "全局加成 +50%，胜利进度再 +1。", note: "「行星改造完成」3 级强化：全局加成 +50%，胜利进度再 +1。" },
    ],
    maintenanceSchedule: [
      { task: "结构检修", intervalMin: 60, costCredits: 10, note: "「行星改造完成」每 60 分钟执行「结构检修」，花费 10 星币；跳过则效果 -10%。" },
      { task: "能源校准", intervalMin: 30, costCredits: 15, note: "「行星改造完成」每 30 分钟执行「能源校准」，花费 15 星币；跳过则效果 -10%。" },
      { task: "系统升级", intervalMin: 120, costCredits: 20, note: "「行星改造完成」每 120 分钟执行「系统升级」，花费 20 星币；跳过则效果 -10%。" },
      { task: "人员轮换", intervalMin: 15, costCredits: 5, note: "「行星改造完成」每 15 分钟执行「人员轮换」，花费 5 星币；跳过则效果 -10%。" },
      { task: "安全演习", intervalMin: 90, costCredits: 8, note: "「行星改造完成」每 90 分钟执行「安全演习」，花费 8 星币；跳过则效果 -10%。" },
    ],
    resourceFlowPerMin: [
      { resource: "credits", amount: 50, note: "「行星改造完成」建成后每分钟净产出 credits +50。" },
      { resource: "steel", amount: 2, note: "「行星改造完成」建成后每分钟净产出 steel +2。" },
      { resource: "food", amount: 5, note: "「行星改造完成」建成后每分钟净产出 food +5。" },
      { resource: "water", amount: 5, note: "「行星改造完成」建成后每分钟净产出 water +5。" },
      { resource: "power", amount: 20, note: "「行星改造完成」建成后每分钟净产出 power +20。" },
      { resource: "tech", amount: 3, note: "「行星改造完成」建成后每分钟净产出 tech +3。" },
      { resource: "oxygen", amount: 5, note: "「行星改造完成」建成后每分钟净产出 oxygen +5。" },
      { resource: "happiness", amount: 2, note: "「行星改造完成」建成后每分钟净产出 happiness +2。" },
    ],
    defenseLayers: [
      { layer: "外围警戒", defenseAdd: 20, note: "「行星改造完成」「外围警戒」提供防御 +20。" },
      { layer: "能量护盾", defenseAdd: 50, note: "「行星改造完成」「能量护盾」提供防御 +50。" },
      { layer: "防空火力", defenseAdd: 40, note: "「行星改造完成」「防空火力」提供防御 +40。" },
      { layer: "地面工事", defenseAdd: 30, note: "「行星改造完成」「地面工事」提供防御 +30。" },
      { layer: "核心避难所", defenseAdd: 60, note: "「行星改造完成」「核心避难所」提供防御 +60。" },
    ],
    constructionRisks: [
      { risk: "沙尘暴延误", chance: 0.1, delaySec: 120, note: "建造「行星改造完成」期间「沙尘暴延误」概率 10%，发生则延误 120 秒。" },
      { risk: "陨石损坏", chance: 0.05, delaySec: 120, note: "建造「行星改造完成」期间「陨石损坏」概率 5%，发生则延误 120 秒。" },
      { risk: "工人罢工", chance: 0.08, delaySec: 120, note: "建造「行星改造完成」期间「工人罢工」概率 8%，发生则延误 120 秒。" },
      { risk: "资金短缺", chance: 0.12, delaySec: 120, note: "建造「行星改造完成」期间「资金短缺」概率 12%，发生则延误 120 秒。" },
    ],
    visitorEffects: [
      { visitor: "游客", incomePerMin: 30, note: "「行星改造完成」落成后每分钟吸引游客，带来 30 星币收入。" },
      { visitor: "朝圣者", incomePerMin: 20, note: "「行星改造完成」落成后每分钟吸引朝圣者，带来 20 星币收入。" },
      { visitor: "商队", incomePerMin: 50, note: "「行星改造完成」落成后每分钟吸引商队，带来 50 星币收入。" },
      { visitor: "外交使团", incomePerMin: 40, note: "「行星改造完成」落成后每分钟吸引外交使团，带来 40 星币收入。" },
    ],
  },
  // ---------- w30-trade 银河贸易中心 细节 ----------
  "w30-trade": {
    districtEffects: [
      { district: "居住区", outputMul: 1.2, happinessAdd: 2, note: "「银河贸易中心」使「居住区」产出 ×1.2，幸福度 +2。" },
      { district: "工业区", outputMul: 1.15, happinessAdd: 2, note: "「银河贸易中心」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.25, happinessAdd: 2, note: "「银河贸易中心」使「商业区」产出 ×1.25，幸福度 +2。" },
      { district: "科研区", outputMul: 1.2, happinessAdd: 2, note: "「银河贸易中心」使「科研区」产出 ×1.2，幸福度 +2。" },
      { district: "农业区", outputMul: 1.15, happinessAdd: 2, note: "「银河贸易中心」使「农业区」产出 ×1.15，幸福度 +2。" },
      { district: "军事区", outputMul: 1.1, happinessAdd: 2, note: "「银河贸易中心」使「军事区」产出 ×1.1，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 100, note: "「银河贸易中心」开通至「地球」航线，每分钟贸易收入 +100 星币。" },
      { destination: "月球", incomePerMin: 80, note: "「银河贸易中心」开通至「月球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "小行星带", incomePerMin: 120, note: "「银河贸易中心」开通至「小行星带」航线，每分钟贸易收入 +120 星币。" },
      { destination: "木卫二", incomePerMin: 150, note: "「银河贸易中心」开通至「木卫二」航线，每分钟贸易收入 +150 星币。" },
      { destination: "半人马座", incomePerMin: 300, note: "「银河贸易中心」开通至「半人马座」航线，每分钟贸易收入 +300 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联合", relationAdd: 30, note: "「银河贸易中心」使与「地球联合」关系 +30。" },
      { faction: "月球殖民地", relationAdd: 25, note: "「银河贸易中心」使与「月球殖民地」关系 +25。" },
      { faction: "火星自治领", relationAdd: 20, note: "「银河贸易中心」使与「火星自治领」关系 +20。" },
      { faction: "小行星矿工公会", relationAdd: 15, note: "「银河贸易中心」使与「小行星矿工公会」关系 +15。" },
      { faction: "外星观察者", relationAdd: 10, note: "「银河贸易中心」使与「外星观察者」关系 +10。" },
    ],
    populationEffects: [
      { strata: "工人", happinessAdd: 8, growthMul: 1.1, note: "「银河贸易中心」使工人幸福度 +8，增长 ×1.1。" },
      { strata: "工程师", happinessAdd: 10, growthMul: 1.1, note: "「银河贸易中心」使工程师幸福度 +10，增长 ×1.1。" },
      { strata: "科学家", happinessAdd: 12, growthMul: 1.1, note: "「银河贸易中心」使科学家幸福度 +12，增长 ×1.1。" },
      { strata: "商人", happinessAdd: 10, growthMul: 1.1, note: "「银河贸易中心」使商人幸福度 +10，增长 ×1.1。" },
      { strata: "军人", happinessAdd: 6, growthMul: 1.1, note: "「银河贸易中心」使军人幸福度 +6，增长 ×1.1。" },
    ],
    techBoosts: [
      { tech: "t30-ds-25", researchMul: 0.8, note: "拥有「银河贸易中心」后，研究「t30-ds-25」耗时 ×0.8。" },
      { tech: "t30-pol-17", researchMul: 0.8, note: "拥有「银河贸易中心」后，研究「t30-pol-17」耗时 ×0.8。" },
      { tech: "t30-pol-16", researchMul: 0.8, note: "拥有「银河贸易中心」后，研究「t30-pol-16」耗时 ×0.8。" },
      { tech: "t30-ds-02", researchMul: 0.8, note: "拥有「银河贸易中心」后，研究「t30-ds-02」耗时 ×0.8。" },
      { tech: "t30-eco-01", researchMul: 0.8, note: "拥有「银河贸易中心」后，研究「t30-eco-01」耗时 ×0.8。" },
      { tech: "t30-mil-01", researchMul: 0.8, note: "拥有「银河贸易中心」后，研究「t30-mil-01」耗时 ×0.8。" },
      { tech: "t-prod-6", researchMul: 0.8, note: "拥有「银河贸易中心」后，研究「t-prod-6」耗时 ×0.8。" },
      { tech: "t-surv-1", researchMul: 0.8, note: "拥有「银河贸易中心」后，研究「t-surv-1」耗时 ×0.8。" },
    ],
    eventHooks: [
      { hook: "onBuildStart", effect: "开工庆典：幸福度 +5，持续 1 分钟。", note: "「银河贸易中心」钩子 onBuildStart：开工庆典：幸福度 +5，持续 1 分钟。" },
      { hook: "onStageComplete", effect: "每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。", note: "「银河贸易中心」钩子 onStageComplete：每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。" },
      { hook: "onHalfway", effect: "过半庆典：移民 +10 人。", note: "「银河贸易中心」钩子 onHalfway：过半庆典：移民 +10 人。" },
      { hook: "onComplete", effect: "落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。", note: "「银河贸易中心」钩子 onComplete：落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。" },
      { hook: "onDisaster", effect: "灾难期间：奇观建造暂停，不倒退。", note: "「银河贸易中心」钩子 onDisaster：灾难期间：奇观建造暂停，不倒退。" },
      { hook: "onVictory", effect: "胜利达成：结算面板展示奇观贡献。", note: "「银河贸易中心」钩子 onVictory：胜利达成：结算面板展示奇观贡献。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "nano": 100 }, effect: "全局加成 +10%。", note: "「银河贸易中心」1 级强化：全局加成 +10%。" },
      { level: 2, cost: { "nano": 200, "he3": 50 }, effect: "全局加成 +25%，维护费 -20%。", note: "「银河贸易中心」2 级强化：全局加成 +25%，维护费 -20%。" },
      { level: 3, cost: { "nano": 400, "he3": 100 }, effect: "全局加成 +50%，胜利进度再 +1。", note: "「银河贸易中心」3 级强化：全局加成 +50%，胜利进度再 +1。" },
    ],
    maintenanceSchedule: [
      { task: "结构检修", intervalMin: 60, costCredits: 10, note: "「银河贸易中心」每 60 分钟执行「结构检修」，花费 10 星币；跳过则效果 -10%。" },
      { task: "能源校准", intervalMin: 30, costCredits: 15, note: "「银河贸易中心」每 30 分钟执行「能源校准」，花费 15 星币；跳过则效果 -10%。" },
      { task: "系统升级", intervalMin: 120, costCredits: 20, note: "「银河贸易中心」每 120 分钟执行「系统升级」，花费 20 星币；跳过则效果 -10%。" },
      { task: "人员轮换", intervalMin: 15, costCredits: 5, note: "「银河贸易中心」每 15 分钟执行「人员轮换」，花费 5 星币；跳过则效果 -10%。" },
      { task: "安全演习", intervalMin: 90, costCredits: 8, note: "「银河贸易中心」每 90 分钟执行「安全演习」，花费 8 星币；跳过则效果 -10%。" },
    ],
    resourceFlowPerMin: [
      { resource: "credits", amount: 50, note: "「银河贸易中心」建成后每分钟净产出 credits +50。" },
      { resource: "steel", amount: 2, note: "「银河贸易中心」建成后每分钟净产出 steel +2。" },
      { resource: "food", amount: 5, note: "「银河贸易中心」建成后每分钟净产出 food +5。" },
      { resource: "water", amount: 5, note: "「银河贸易中心」建成后每分钟净产出 water +5。" },
      { resource: "power", amount: 20, note: "「银河贸易中心」建成后每分钟净产出 power +20。" },
      { resource: "tech", amount: 3, note: "「银河贸易中心」建成后每分钟净产出 tech +3。" },
      { resource: "oxygen", amount: 5, note: "「银河贸易中心」建成后每分钟净产出 oxygen +5。" },
      { resource: "happiness", amount: 2, note: "「银河贸易中心」建成后每分钟净产出 happiness +2。" },
    ],
    defenseLayers: [
      { layer: "外围警戒", defenseAdd: 20, note: "「银河贸易中心」「外围警戒」提供防御 +20。" },
      { layer: "能量护盾", defenseAdd: 50, note: "「银河贸易中心」「能量护盾」提供防御 +50。" },
      { layer: "防空火力", defenseAdd: 40, note: "「银河贸易中心」「防空火力」提供防御 +40。" },
      { layer: "地面工事", defenseAdd: 30, note: "「银河贸易中心」「地面工事」提供防御 +30。" },
      { layer: "核心避难所", defenseAdd: 60, note: "「银河贸易中心」「核心避难所」提供防御 +60。" },
    ],
    constructionRisks: [
      { risk: "沙尘暴延误", chance: 0.1, delaySec: 120, note: "建造「银河贸易中心」期间「沙尘暴延误」概率 10%，发生则延误 120 秒。" },
      { risk: "陨石损坏", chance: 0.05, delaySec: 120, note: "建造「银河贸易中心」期间「陨石损坏」概率 5%，发生则延误 120 秒。" },
      { risk: "工人罢工", chance: 0.08, delaySec: 120, note: "建造「银河贸易中心」期间「工人罢工」概率 8%，发生则延误 120 秒。" },
      { risk: "资金短缺", chance: 0.12, delaySec: 120, note: "建造「银河贸易中心」期间「资金短缺」概率 12%，发生则延误 120 秒。" },
    ],
    visitorEffects: [
      { visitor: "游客", incomePerMin: 30, note: "「银河贸易中心」落成后每分钟吸引游客，带来 30 星币收入。" },
      { visitor: "朝圣者", incomePerMin: 20, note: "「银河贸易中心」落成后每分钟吸引朝圣者，带来 20 星币收入。" },
      { visitor: "商队", incomePerMin: 50, note: "「银河贸易中心」落成后每分钟吸引商队，带来 50 星币收入。" },
      { visitor: "外交使团", incomePerMin: 40, note: "「银河贸易中心」落成后每分钟吸引外交使团，带来 40 星币收入。" },
    ],
  },
  // ---------- w30-newhome 人类新家园 细节 ----------
  "w30-newhome": {
    districtEffects: [
      { district: "居住区", outputMul: 1.2, happinessAdd: 2, note: "「人类新家园」使「居住区」产出 ×1.2，幸福度 +2。" },
      { district: "工业区", outputMul: 1.15, happinessAdd: 2, note: "「人类新家园」使「工业区」产出 ×1.15，幸福度 +2。" },
      { district: "商业区", outputMul: 1.25, happinessAdd: 2, note: "「人类新家园」使「商业区」产出 ×1.25，幸福度 +2。" },
      { district: "科研区", outputMul: 1.2, happinessAdd: 2, note: "「人类新家园」使「科研区」产出 ×1.2，幸福度 +2。" },
      { district: "农业区", outputMul: 1.15, happinessAdd: 2, note: "「人类新家园」使「农业区」产出 ×1.15，幸福度 +2。" },
      { district: "军事区", outputMul: 1.1, happinessAdd: 2, note: "「人类新家园」使「军事区」产出 ×1.1，幸福度 +2。" },
    ],
    tradeRoutes: [
      { destination: "地球", incomePerMin: 100, note: "「人类新家园」开通至「地球」航线，每分钟贸易收入 +100 星币。" },
      { destination: "月球", incomePerMin: 80, note: "「人类新家园」开通至「月球」航线，每分钟贸易收入 +80 星币。" },
      { destination: "小行星带", incomePerMin: 120, note: "「人类新家园」开通至「小行星带」航线，每分钟贸易收入 +120 星币。" },
      { destination: "木卫二", incomePerMin: 150, note: "「人类新家园」开通至「木卫二」航线，每分钟贸易收入 +150 星币。" },
      { destination: "半人马座", incomePerMin: 300, note: "「人类新家园」开通至「半人马座」航线，每分钟贸易收入 +300 星币。" },
    ],
    diplomacyEffects: [
      { faction: "地球联合", relationAdd: 30, note: "「人类新家园」使与「地球联合」关系 +30。" },
      { faction: "月球殖民地", relationAdd: 25, note: "「人类新家园」使与「月球殖民地」关系 +25。" },
      { faction: "火星自治领", relationAdd: 20, note: "「人类新家园」使与「火星自治领」关系 +20。" },
      { faction: "小行星矿工公会", relationAdd: 15, note: "「人类新家园」使与「小行星矿工公会」关系 +15。" },
      { faction: "外星观察者", relationAdd: 10, note: "「人类新家园」使与「外星观察者」关系 +10。" },
    ],
    populationEffects: [
      { strata: "工人", happinessAdd: 8, growthMul: 1.1, note: "「人类新家园」使工人幸福度 +8，增长 ×1.1。" },
      { strata: "工程师", happinessAdd: 10, growthMul: 1.1, note: "「人类新家园」使工程师幸福度 +10，增长 ×1.1。" },
      { strata: "科学家", happinessAdd: 12, growthMul: 1.1, note: "「人类新家园」使科学家幸福度 +12，增长 ×1.1。" },
      { strata: "商人", happinessAdd: 10, growthMul: 1.1, note: "「人类新家园」使商人幸福度 +10，增长 ×1.1。" },
      { strata: "军人", happinessAdd: 6, growthMul: 1.1, note: "「人类新家园」使军人幸福度 +6，增长 ×1.1。" },
    ],
    techBoosts: [
      { tech: "t30-eco-24", researchMul: 0.8, note: "拥有「人类新家园」后，研究「t30-eco-24」耗时 ×0.8。" },
      { tech: "t30-ds-22", researchMul: 0.8, note: "拥有「人类新家园」后，研究「t30-ds-22」耗时 ×0.8。" },
      { tech: "t30-pol-25", researchMul: 0.8, note: "拥有「人类新家园」后，研究「t30-pol-25」耗时 ×0.8。" },
      { tech: "t30-pol-16", researchMul: 0.8, note: "拥有「人类新家园」后，研究「t30-pol-16」耗时 ×0.8。" },
      { tech: "t30-ds-02", researchMul: 0.8, note: "拥有「人类新家园」后，研究「t30-ds-02」耗时 ×0.8。" },
      { tech: "t30-eco-01", researchMul: 0.8, note: "拥有「人类新家园」后，研究「t30-eco-01」耗时 ×0.8。" },
      { tech: "t30-mil-01", researchMul: 0.8, note: "拥有「人类新家园」后，研究「t30-mil-01」耗时 ×0.8。" },
      { tech: "t-prod-6", researchMul: 0.8, note: "拥有「人类新家园」后，研究「t-prod-6」耗时 ×0.8。" },
    ],
    eventHooks: [
      { hook: "onBuildStart", effect: "开工庆典：幸福度 +5，持续 1 分钟。", note: "「人类新家园」钩子 onBuildStart：开工庆典：幸福度 +5，持续 1 分钟。" },
      { hook: "onStageComplete", effect: "每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。", note: "「人类新家园」钩子 onStageComplete：每完成一阶段：幸福度 +2，税收 +5%%，持续 1 分钟。" },
      { hook: "onHalfway", effect: "过半庆典：移民 +10 人。", note: "「人类新家园」钩子 onHalfway：过半庆典：移民 +10 人。" },
      { hook: "onComplete", effect: "落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。", note: "「人类新家园」钩子 onComplete：落成庆典：幸福度 +50，全城生产 ×1.2，持续 5 分钟。" },
      { hook: "onDisaster", effect: "灾难期间：奇观建造暂停，不倒退。", note: "「人类新家园」钩子 onDisaster：灾难期间：奇观建造暂停，不倒退。" },
      { hook: "onVictory", effect: "胜利达成：结算面板展示奇观贡献。", note: "「人类新家园」钩子 onVictory：胜利达成：结算面板展示奇观贡献。" },
    ],
    upgradePaths: [
      { level: 1, cost: { "nano": 100 }, effect: "全局加成 +10%。", note: "「人类新家园」1 级强化：全局加成 +10%。" },
      { level: 2, cost: { "nano": 200, "he3": 50 }, effect: "全局加成 +25%，维护费 -20%。", note: "「人类新家园」2 级强化：全局加成 +25%，维护费 -20%。" },
      { level: 3, cost: { "nano": 400, "he3": 100 }, effect: "全局加成 +50%，胜利进度再 +1。", note: "「人类新家园」3 级强化：全局加成 +50%，胜利进度再 +1。" },
    ],
    maintenanceSchedule: [
      { task: "结构检修", intervalMin: 60, costCredits: 10, note: "「人类新家园」每 60 分钟执行「结构检修」，花费 10 星币；跳过则效果 -10%。" },
      { task: "能源校准", intervalMin: 30, costCredits: 15, note: "「人类新家园」每 30 分钟执行「能源校准」，花费 15 星币；跳过则效果 -10%。" },
      { task: "系统升级", intervalMin: 120, costCredits: 20, note: "「人类新家园」每 120 分钟执行「系统升级」，花费 20 星币；跳过则效果 -10%。" },
      { task: "人员轮换", intervalMin: 15, costCredits: 5, note: "「人类新家园」每 15 分钟执行「人员轮换」，花费 5 星币；跳过则效果 -10%。" },
      { task: "安全演习", intervalMin: 90, costCredits: 8, note: "「人类新家园」每 90 分钟执行「安全演习」，花费 8 星币；跳过则效果 -10%。" },
    ],
    resourceFlowPerMin: [
      { resource: "credits", amount: 50, note: "「人类新家园」建成后每分钟净产出 credits +50。" },
      { resource: "steel", amount: 2, note: "「人类新家园」建成后每分钟净产出 steel +2。" },
      { resource: "food", amount: 5, note: "「人类新家园」建成后每分钟净产出 food +5。" },
      { resource: "water", amount: 5, note: "「人类新家园」建成后每分钟净产出 water +5。" },
      { resource: "power", amount: 20, note: "「人类新家园」建成后每分钟净产出 power +20。" },
      { resource: "tech", amount: 3, note: "「人类新家园」建成后每分钟净产出 tech +3。" },
      { resource: "oxygen", amount: 5, note: "「人类新家园」建成后每分钟净产出 oxygen +5。" },
      { resource: "happiness", amount: 2, note: "「人类新家园」建成后每分钟净产出 happiness +2。" },
    ],
    defenseLayers: [
      { layer: "外围警戒", defenseAdd: 20, note: "「人类新家园」「外围警戒」提供防御 +20。" },
      { layer: "能量护盾", defenseAdd: 50, note: "「人类新家园」「能量护盾」提供防御 +50。" },
      { layer: "防空火力", defenseAdd: 40, note: "「人类新家园」「防空火力」提供防御 +40。" },
      { layer: "地面工事", defenseAdd: 30, note: "「人类新家园」「地面工事」提供防御 +30。" },
      { layer: "核心避难所", defenseAdd: 60, note: "「人类新家园」「核心避难所」提供防御 +60。" },
    ],
    constructionRisks: [
      { risk: "沙尘暴延误", chance: 0.1, delaySec: 120, note: "建造「人类新家园」期间「沙尘暴延误」概率 10%，发生则延误 120 秒。" },
      { risk: "陨石损坏", chance: 0.05, delaySec: 120, note: "建造「人类新家园」期间「陨石损坏」概率 5%，发生则延误 120 秒。" },
      { risk: "工人罢工", chance: 0.08, delaySec: 120, note: "建造「人类新家园」期间「工人罢工」概率 8%，发生则延误 120 秒。" },
      { risk: "资金短缺", chance: 0.12, delaySec: 120, note: "建造「人类新家园」期间「资金短缺」概率 12%，发生则延误 120 秒。" },
    ],
    visitorEffects: [
      { visitor: "游客", incomePerMin: 30, note: "「人类新家园」落成后每分钟吸引游客，带来 30 星币收入。" },
      { visitor: "朝圣者", incomePerMin: 20, note: "「人类新家园」落成后每分钟吸引朝圣者，带来 20 星币收入。" },
      { visitor: "商队", incomePerMin: 50, note: "「人类新家园」落成后每分钟吸引商队，带来 50 星币收入。" },
      { visitor: "外交使团", incomePerMin: 40, note: "「人类新家园」落成后每分钟吸引外交使团，带来 40 星币收入。" },
    ],
  },
};

/* 载入时把细节块并入主定义（mergeWondersV30 之前即可用）。 */
for (const _wid of Object.keys(WONDERS_V30_DETAIL)) {
  if (WONDERS_V30[_wid]) WONDERS_V30[_wid].detail = WONDERS_V30_DETAIL[_wid];
}

/* 细节块自检。 */
function selfTestWondersV30Detail() {
  const errors = [];
  for (const id of WONDERS_V30_ORDER) {
    const d = (WONDERS_V30[id] || {}).detail;
    if (!d) { errors.push(id + ': 细节块缺失'); continue; }
    const checks = [
      ['districtEffects', 6], ['tradeRoutes', 5], ['diplomacyEffects', 5],
      ['populationEffects', 5], ['techBoosts', 8], ['eventHooks', 6],
      ['upgradePaths', 3], ['maintenanceSchedule', 5], ['resourceFlowPerMin', 8],
      ['defenseLayers', 5], ['constructionRisks', 4], ['visitorEffects', 4],
    ];
    for (const pair of checks) {
      if (!d[pair[0]] || d[pair[0]].length !== pair[1]) errors.push(id + ': ' + pair[0] + ' 数量错误');
    }
  }
  return { total: WONDERS_V30_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V30_DETAIL = WONDERS_V30_DETAIL;
  module.exports.selfTestWondersV30Detail = selfTestWondersV30Detail;
}

/* ============ §8 奇观细节块·二（施工 / 供应 / 配套系统，载入时并入 WONDERS_V30） ============ */
const WONDERS_V30_DETAIL2 = {
  // ---------- w30-parliament 星际议会大厦 细节·二 ----------
  "w30-parliament": {
    constructionCrews: [
      { crew: "土建队", size: 50, speedMul: 1.0, note: "「星际议会大厦」「土建队」50 人，施工速度 ×1.0。" },
      { crew: "结构队", size: 40, speedMul: 1.0, note: "「星际议会大厦」「结构队」40 人，施工速度 ×1.0。" },
      { crew: "电气队", size: 30, speedMul: 1.0, note: "「星际议会大厦」「电气队」30 人，施工速度 ×1.0。" },
      { crew: "精密安装队", size: 25, speedMul: 1.0, note: "「星际议会大厦」「精密安装队」25 人，施工速度 ×1.0。" },
      { crew: "验收队", size: 15, speedMul: 1.0, note: "「星际议会大厦」「验收队」15 人，施工速度 ×1.0。" },
    ],
    materialSupply: [
      { material: "steel", perStage: 100, note: "「星际议会大厦」每阶段需 steel ×100，不足则停工。" },
      { material: "nano", perStage: 50, note: "「星际议会大厦」每阶段需 nano ×50，不足则停工。" },
      { material: "he3", perStage: 20, note: "「星际议会大厦」每阶段需 he3 ×20，不足则停工。" },
      { material: "uranium", perStage: 10, note: "「星际议会大厦」每阶段需 uranium ×10，不足则停工。" },
      { material: "food", perStage: 200, note: "「星际议会大厦」每阶段需 food ×200，不足则停工。" },
      { material: "water", perStage: 200, note: "「星际议会大厦」每阶段需 water ×200，不足则停工。" },
    ],
    powerGrid: [
      { node: "主变电站", capacity: 200, note: "「星际议会大厦」「主变电站」容量 200 电。" },
      { node: "备用电源", capacity: 100, note: "「星际议会大厦」「备用电源」容量 100 电。" },
      { node: "应急电池", capacity: 50, note: "「星际议会大厦」「应急电池」容量 50 电。" },
      { node: "配电网络", capacity: 150, note: "「星际议会大厦」「配电网络」容量 150 电。" },
      { node: "并网接口", capacity: 300, note: "「星际议会大厦」「并网接口」容量 300 电。" },
    ],
    waterSupply: [
      { node: "主水管", capacity: 100, note: "「星际议会大厦」「主水管」供水 100/分钟。" },
      { node: "蓄水塔", capacity: 80, note: "「星际议会大厦」「蓄水塔」供水 80/分钟。" },
      { node: "净水站", capacity: 60, note: "「星际议会大厦」「净水站」供水 60/分钟。" },
      { node: "循环系统", capacity: 40, note: "「星际议会大厦」「循环系统」供水 40/分钟。" },
    ],
    transportLinks: [
      { link: "主干道", throughput: 100, note: "「星际议会大厦」「主干道」运力 100/分钟。" },
      { link: "货运专线", throughput: 80, note: "「星际议会大厦」「货运专线」运力 80/分钟。" },
      { link: "客运专线", throughput: 60, note: "「星际议会大厦」「客运专线」运力 60/分钟。" },
      { link: "轨道接驳", throughput: 120, note: "「星际议会大厦」「轨道接驳」运力 120/分钟。" },
      { link: "空港通道", throughput: 150, note: "「星际议会大厦」「空港通道」运力 150/分钟。" },
    ],
    researchLabs: [
      { lab: "材料实验室", researchMul: 1.1, note: "「星际议会大厦」配套「材料实验室」：相关科技研究速度 ×1.1。" },
      { lab: "能源实验室", researchMul: 1.15, note: "「星际议会大厦」配套「能源实验室」：相关科技研究速度 ×1.15。" },
      { lab: "生态实验室", researchMul: 1.1, note: "「星际议会大厦」配套「生态实验室」：相关科技研究速度 ×1.1。" },
      { lab: "社会实验室", researchMul: 1.05, note: "「星际议会大厦」配套「社会实验室」：相关科技研究速度 ×1.05。" },
    ],
    culturalPrograms: [
      { program: "落成展览", happinessAdd: 5, note: "「星际议会大厦」「落成展览」：幸福度 +5。" },
      { program: "公众开放日", happinessAdd: 8, note: "「星际议会大厦」「公众开放日」：幸福度 +8。" },
      { program: "学校参观", happinessAdd: 6, note: "「星际议会大厦」「学校参观」：幸福度 +6。" },
      { program: "纪念仪式", happinessAdd: 10, note: "「星际议会大厦」「纪念仪式」：幸福度 +10。" },
      { program: "艺术节", happinessAdd: 12, note: "「星际议会大厦」「艺术节」：幸福度 +12。" },
    ],
    securityProtocols: [
      { protocol: "门禁系统", defenseAdd: 20, note: "「星际议会大厦」「门禁系统」：防御 +20。" },
      { protocol: "巡逻队", defenseAdd: 30, note: "「星际议会大厦」「巡逻队」：防御 +30。" },
      { protocol: "监控网络", defenseAdd: 25, note: "「星际议会大厦」「监控网络」：防御 +25。" },
      { protocol: "应急预案", defenseAdd: 40, note: "「星际议会大厦」「应急预案」：防御 +40。" },
      { protocol: "反恐演习", defenseAdd: 35, note: "「星际议会大厦」「反恐演习」：防御 +35。" },
    ],
    economicImpact: [
      { sector: "制造业", outputMul: 1.1, note: "「星际议会大厦」使「制造业」产出 ×1.1。" },
      { sector: "服务业", outputMul: 1.2, note: "「星际议会大厦」使「服务业」产出 ×1.2。" },
      { sector: "贸易", outputMul: 1.3, note: "「星际议会大厦」使「贸易」产出 ×1.3。" },
      { sector: "科研", outputMul: 1.15, note: "「星际议会大厦」使「科研」产出 ×1.15。" },
      { sector: "农业", outputMul: 1.1, note: "「星际议会大厦」使「农业」产出 ×1.1。" },
      { sector: "能源", outputMul: 1.25, note: "「星际议会大厦」使「能源」产出 ×1.25。" },
      { sector: "旅游", outputMul: 1.4, note: "「星际议会大厦」使「旅游」产出 ×1.4。" },
      { sector: "金融", outputMul: 1.2, note: "「星际议会大厦」使「金融」产出 ×1.2。" },
    ],
    environmentalImpact: [
      { metric: "空气质量", add: 10, note: "「星际议会大厦」使「空气质量」+10 点。" },
      { metric: "绿化覆盖", add: 15, note: "「星际议会大厦」使「绿化覆盖」+15 点。" },
      { metric: "水资源", add: 8, note: "「星际议会大厦」使「水资源」+8 点。" },
      { metric: "能源清洁度", add: 20, note: "「星际议会大厦」使「能源清洁度」+20 点。" },
      { metric: "生态完整度", add: 12, note: "「星际议会大厦」使「生态完整度」+12 点。" },
    ],
    legacyEffects: [
      { legacy: "历史地标", effect: "永久幸福度 +5。", note: "「星际议会大厦」遗产「历史地标」：永久幸福度 +5。" },
      { legacy: "教育基地", effect: "实验室产量 +10%。", note: "「星际议会大厦」遗产「教育基地」：实验室产量 +10%。" },
      { legacy: "旅游名片", effect: "贸易收入 +10%。", note: "「星际议会大厦」遗产「旅游名片」：贸易收入 +10%。" },
      { legacy: "精神象征", effect: "稳定度 +5。", note: "「星际议会大厦」遗产「精神象征」：稳定度 +5。" },
      { legacy: "技术遗产", effect: "全部生产 +5%。", note: "「星际议会大厦」遗产「技术遗产」：全部生产 +5%。" },
    ],
    rivalReactions: [
      { rival: "地球联合", relationAdd: -5, note: "建成「星际议会大厦」后，与「地球联合」关系 -5。" },
      { rival: "月球殖民地", relationAdd: 10, note: "建成「星际议会大厦」后，与「月球殖民地」关系 +10。" },
      { rival: "小行星矿工公会", relationAdd: 5, note: "建成「星际议会大厦」后，与「小行星矿工公会」关系 +5。" },
      { rival: "外星观察者", relationAdd: -10, note: "建成「星际议会大厦」后，与「外星观察者」关系 -10。" },
    ],
  },
  // ---------- w30-dyson 戴森球 细节·二 ----------
  "w30-dyson": {
    constructionCrews: [
      { crew: "土建队", size: 50, speedMul: 1.0, note: "「戴森球」「土建队」50 人，施工速度 ×1.0。" },
      { crew: "结构队", size: 40, speedMul: 1.0, note: "「戴森球」「结构队」40 人，施工速度 ×1.0。" },
      { crew: "电气队", size: 30, speedMul: 1.0, note: "「戴森球」「电气队」30 人，施工速度 ×1.0。" },
      { crew: "精密安装队", size: 25, speedMul: 1.0, note: "「戴森球」「精密安装队」25 人，施工速度 ×1.0。" },
      { crew: "验收队", size: 15, speedMul: 1.0, note: "「戴森球」「验收队」15 人，施工速度 ×1.0。" },
    ],
    materialSupply: [
      { material: "steel", perStage: 100, note: "「戴森球」每阶段需 steel ×100，不足则停工。" },
      { material: "nano", perStage: 50, note: "「戴森球」每阶段需 nano ×50，不足则停工。" },
      { material: "he3", perStage: 20, note: "「戴森球」每阶段需 he3 ×20，不足则停工。" },
      { material: "uranium", perStage: 10, note: "「戴森球」每阶段需 uranium ×10，不足则停工。" },
      { material: "food", perStage: 200, note: "「戴森球」每阶段需 food ×200，不足则停工。" },
      { material: "water", perStage: 200, note: "「戴森球」每阶段需 water ×200，不足则停工。" },
    ],
    powerGrid: [
      { node: "主变电站", capacity: 200, note: "「戴森球」「主变电站」容量 200 电。" },
      { node: "备用电源", capacity: 100, note: "「戴森球」「备用电源」容量 100 电。" },
      { node: "应急电池", capacity: 50, note: "「戴森球」「应急电池」容量 50 电。" },
      { node: "配电网络", capacity: 150, note: "「戴森球」「配电网络」容量 150 电。" },
      { node: "并网接口", capacity: 300, note: "「戴森球」「并网接口」容量 300 电。" },
    ],
    waterSupply: [
      { node: "主水管", capacity: 100, note: "「戴森球」「主水管」供水 100/分钟。" },
      { node: "蓄水塔", capacity: 80, note: "「戴森球」「蓄水塔」供水 80/分钟。" },
      { node: "净水站", capacity: 60, note: "「戴森球」「净水站」供水 60/分钟。" },
      { node: "循环系统", capacity: 40, note: "「戴森球」「循环系统」供水 40/分钟。" },
    ],
    transportLinks: [
      { link: "主干道", throughput: 100, note: "「戴森球」「主干道」运力 100/分钟。" },
      { link: "货运专线", throughput: 80, note: "「戴森球」「货运专线」运力 80/分钟。" },
      { link: "客运专线", throughput: 60, note: "「戴森球」「客运专线」运力 60/分钟。" },
      { link: "轨道接驳", throughput: 120, note: "「戴森球」「轨道接驳」运力 120/分钟。" },
      { link: "空港通道", throughput: 150, note: "「戴森球」「空港通道」运力 150/分钟。" },
    ],
    researchLabs: [
      { lab: "材料实验室", researchMul: 1.1, note: "「戴森球」配套「材料实验室」：相关科技研究速度 ×1.1。" },
      { lab: "能源实验室", researchMul: 1.15, note: "「戴森球」配套「能源实验室」：相关科技研究速度 ×1.15。" },
      { lab: "生态实验室", researchMul: 1.1, note: "「戴森球」配套「生态实验室」：相关科技研究速度 ×1.1。" },
      { lab: "社会实验室", researchMul: 1.05, note: "「戴森球」配套「社会实验室」：相关科技研究速度 ×1.05。" },
    ],
    culturalPrograms: [
      { program: "落成展览", happinessAdd: 5, note: "「戴森球」「落成展览」：幸福度 +5。" },
      { program: "公众开放日", happinessAdd: 8, note: "「戴森球」「公众开放日」：幸福度 +8。" },
      { program: "学校参观", happinessAdd: 6, note: "「戴森球」「学校参观」：幸福度 +6。" },
      { program: "纪念仪式", happinessAdd: 10, note: "「戴森球」「纪念仪式」：幸福度 +10。" },
      { program: "艺术节", happinessAdd: 12, note: "「戴森球」「艺术节」：幸福度 +12。" },
    ],
    securityProtocols: [
      { protocol: "门禁系统", defenseAdd: 20, note: "「戴森球」「门禁系统」：防御 +20。" },
      { protocol: "巡逻队", defenseAdd: 30, note: "「戴森球」「巡逻队」：防御 +30。" },
      { protocol: "监控网络", defenseAdd: 25, note: "「戴森球」「监控网络」：防御 +25。" },
      { protocol: "应急预案", defenseAdd: 40, note: "「戴森球」「应急预案」：防御 +40。" },
      { protocol: "反恐演习", defenseAdd: 35, note: "「戴森球」「反恐演习」：防御 +35。" },
    ],
    economicImpact: [
      { sector: "制造业", outputMul: 1.1, note: "「戴森球」使「制造业」产出 ×1.1。" },
      { sector: "服务业", outputMul: 1.2, note: "「戴森球」使「服务业」产出 ×1.2。" },
      { sector: "贸易", outputMul: 1.3, note: "「戴森球」使「贸易」产出 ×1.3。" },
      { sector: "科研", outputMul: 1.15, note: "「戴森球」使「科研」产出 ×1.15。" },
      { sector: "农业", outputMul: 1.1, note: "「戴森球」使「农业」产出 ×1.1。" },
      { sector: "能源", outputMul: 1.25, note: "「戴森球」使「能源」产出 ×1.25。" },
      { sector: "旅游", outputMul: 1.4, note: "「戴森球」使「旅游」产出 ×1.4。" },
      { sector: "金融", outputMul: 1.2, note: "「戴森球」使「金融」产出 ×1.2。" },
    ],
    environmentalImpact: [
      { metric: "空气质量", add: 10, note: "「戴森球」使「空气质量」+10 点。" },
      { metric: "绿化覆盖", add: 15, note: "「戴森球」使「绿化覆盖」+15 点。" },
      { metric: "水资源", add: 8, note: "「戴森球」使「水资源」+8 点。" },
      { metric: "能源清洁度", add: 20, note: "「戴森球」使「能源清洁度」+20 点。" },
      { metric: "生态完整度", add: 12, note: "「戴森球」使「生态完整度」+12 点。" },
    ],
    legacyEffects: [
      { legacy: "历史地标", effect: "永久幸福度 +5。", note: "「戴森球」遗产「历史地标」：永久幸福度 +5。" },
      { legacy: "教育基地", effect: "实验室产量 +10%。", note: "「戴森球」遗产「教育基地」：实验室产量 +10%。" },
      { legacy: "旅游名片", effect: "贸易收入 +10%。", note: "「戴森球」遗产「旅游名片」：贸易收入 +10%。" },
      { legacy: "精神象征", effect: "稳定度 +5。", note: "「戴森球」遗产「精神象征」：稳定度 +5。" },
      { legacy: "技术遗产", effect: "全部生产 +5%。", note: "「戴森球」遗产「技术遗产」：全部生产 +5%。" },
    ],
    rivalReactions: [
      { rival: "地球联合", relationAdd: -5, note: "建成「戴森球」后，与「地球联合」关系 -5。" },
      { rival: "月球殖民地", relationAdd: 10, note: "建成「戴森球」后，与「月球殖民地」关系 +10。" },
      { rival: "小行星矿工公会", relationAdd: 5, note: "建成「戴森球」后，与「小行星矿工公会」关系 +5。" },
      { rival: "外星观察者", relationAdd: -10, note: "建成「戴森球」后，与「外星观察者」关系 -10。" },
    ],
  },
  // ---------- w30-terraform 行星改造完成 细节·二 ----------
  "w30-terraform": {
    constructionCrews: [
      { crew: "土建队", size: 50, speedMul: 1.0, note: "「行星改造完成」「土建队」50 人，施工速度 ×1.0。" },
      { crew: "结构队", size: 40, speedMul: 1.0, note: "「行星改造完成」「结构队」40 人，施工速度 ×1.0。" },
      { crew: "电气队", size: 30, speedMul: 1.0, note: "「行星改造完成」「电气队」30 人，施工速度 ×1.0。" },
      { crew: "精密安装队", size: 25, speedMul: 1.0, note: "「行星改造完成」「精密安装队」25 人，施工速度 ×1.0。" },
      { crew: "验收队", size: 15, speedMul: 1.0, note: "「行星改造完成」「验收队」15 人，施工速度 ×1.0。" },
    ],
    materialSupply: [
      { material: "steel", perStage: 100, note: "「行星改造完成」每阶段需 steel ×100，不足则停工。" },
      { material: "nano", perStage: 50, note: "「行星改造完成」每阶段需 nano ×50，不足则停工。" },
      { material: "he3", perStage: 20, note: "「行星改造完成」每阶段需 he3 ×20，不足则停工。" },
      { material: "uranium", perStage: 10, note: "「行星改造完成」每阶段需 uranium ×10，不足则停工。" },
      { material: "food", perStage: 200, note: "「行星改造完成」每阶段需 food ×200，不足则停工。" },
      { material: "water", perStage: 200, note: "「行星改造完成」每阶段需 water ×200，不足则停工。" },
    ],
    powerGrid: [
      { node: "主变电站", capacity: 200, note: "「行星改造完成」「主变电站」容量 200 电。" },
      { node: "备用电源", capacity: 100, note: "「行星改造完成」「备用电源」容量 100 电。" },
      { node: "应急电池", capacity: 50, note: "「行星改造完成」「应急电池」容量 50 电。" },
      { node: "配电网络", capacity: 150, note: "「行星改造完成」「配电网络」容量 150 电。" },
      { node: "并网接口", capacity: 300, note: "「行星改造完成」「并网接口」容量 300 电。" },
    ],
    waterSupply: [
      { node: "主水管", capacity: 100, note: "「行星改造完成」「主水管」供水 100/分钟。" },
      { node: "蓄水塔", capacity: 80, note: "「行星改造完成」「蓄水塔」供水 80/分钟。" },
      { node: "净水站", capacity: 60, note: "「行星改造完成」「净水站」供水 60/分钟。" },
      { node: "循环系统", capacity: 40, note: "「行星改造完成」「循环系统」供水 40/分钟。" },
    ],
    transportLinks: [
      { link: "主干道", throughput: 100, note: "「行星改造完成」「主干道」运力 100/分钟。" },
      { link: "货运专线", throughput: 80, note: "「行星改造完成」「货运专线」运力 80/分钟。" },
      { link: "客运专线", throughput: 60, note: "「行星改造完成」「客运专线」运力 60/分钟。" },
      { link: "轨道接驳", throughput: 120, note: "「行星改造完成」「轨道接驳」运力 120/分钟。" },
      { link: "空港通道", throughput: 150, note: "「行星改造完成」「空港通道」运力 150/分钟。" },
    ],
    researchLabs: [
      { lab: "材料实验室", researchMul: 1.1, note: "「行星改造完成」配套「材料实验室」：相关科技研究速度 ×1.1。" },
      { lab: "能源实验室", researchMul: 1.15, note: "「行星改造完成」配套「能源实验室」：相关科技研究速度 ×1.15。" },
      { lab: "生态实验室", researchMul: 1.1, note: "「行星改造完成」配套「生态实验室」：相关科技研究速度 ×1.1。" },
      { lab: "社会实验室", researchMul: 1.05, note: "「行星改造完成」配套「社会实验室」：相关科技研究速度 ×1.05。" },
    ],
    culturalPrograms: [
      { program: "落成展览", happinessAdd: 5, note: "「行星改造完成」「落成展览」：幸福度 +5。" },
      { program: "公众开放日", happinessAdd: 8, note: "「行星改造完成」「公众开放日」：幸福度 +8。" },
      { program: "学校参观", happinessAdd: 6, note: "「行星改造完成」「学校参观」：幸福度 +6。" },
      { program: "纪念仪式", happinessAdd: 10, note: "「行星改造完成」「纪念仪式」：幸福度 +10。" },
      { program: "艺术节", happinessAdd: 12, note: "「行星改造完成」「艺术节」：幸福度 +12。" },
    ],
    securityProtocols: [
      { protocol: "门禁系统", defenseAdd: 20, note: "「行星改造完成」「门禁系统」：防御 +20。" },
      { protocol: "巡逻队", defenseAdd: 30, note: "「行星改造完成」「巡逻队」：防御 +30。" },
      { protocol: "监控网络", defenseAdd: 25, note: "「行星改造完成」「监控网络」：防御 +25。" },
      { protocol: "应急预案", defenseAdd: 40, note: "「行星改造完成」「应急预案」：防御 +40。" },
      { protocol: "反恐演习", defenseAdd: 35, note: "「行星改造完成」「反恐演习」：防御 +35。" },
    ],
    economicImpact: [
      { sector: "制造业", outputMul: 1.1, note: "「行星改造完成」使「制造业」产出 ×1.1。" },
      { sector: "服务业", outputMul: 1.2, note: "「行星改造完成」使「服务业」产出 ×1.2。" },
      { sector: "贸易", outputMul: 1.3, note: "「行星改造完成」使「贸易」产出 ×1.3。" },
      { sector: "科研", outputMul: 1.15, note: "「行星改造完成」使「科研」产出 ×1.15。" },
      { sector: "农业", outputMul: 1.1, note: "「行星改造完成」使「农业」产出 ×1.1。" },
      { sector: "能源", outputMul: 1.25, note: "「行星改造完成」使「能源」产出 ×1.25。" },
      { sector: "旅游", outputMul: 1.4, note: "「行星改造完成」使「旅游」产出 ×1.4。" },
      { sector: "金融", outputMul: 1.2, note: "「行星改造完成」使「金融」产出 ×1.2。" },
    ],
    environmentalImpact: [
      { metric: "空气质量", add: 10, note: "「行星改造完成」使「空气质量」+10 点。" },
      { metric: "绿化覆盖", add: 15, note: "「行星改造完成」使「绿化覆盖」+15 点。" },
      { metric: "水资源", add: 8, note: "「行星改造完成」使「水资源」+8 点。" },
      { metric: "能源清洁度", add: 20, note: "「行星改造完成」使「能源清洁度」+20 点。" },
      { metric: "生态完整度", add: 12, note: "「行星改造完成」使「生态完整度」+12 点。" },
    ],
    legacyEffects: [
      { legacy: "历史地标", effect: "永久幸福度 +5。", note: "「行星改造完成」遗产「历史地标」：永久幸福度 +5。" },
      { legacy: "教育基地", effect: "实验室产量 +10%。", note: "「行星改造完成」遗产「教育基地」：实验室产量 +10%。" },
      { legacy: "旅游名片", effect: "贸易收入 +10%。", note: "「行星改造完成」遗产「旅游名片」：贸易收入 +10%。" },
      { legacy: "精神象征", effect: "稳定度 +5。", note: "「行星改造完成」遗产「精神象征」：稳定度 +5。" },
      { legacy: "技术遗产", effect: "全部生产 +5%。", note: "「行星改造完成」遗产「技术遗产」：全部生产 +5%。" },
    ],
    rivalReactions: [
      { rival: "地球联合", relationAdd: -5, note: "建成「行星改造完成」后，与「地球联合」关系 -5。" },
      { rival: "月球殖民地", relationAdd: 10, note: "建成「行星改造完成」后，与「月球殖民地」关系 +10。" },
      { rival: "小行星矿工公会", relationAdd: 5, note: "建成「行星改造完成」后，与「小行星矿工公会」关系 +5。" },
      { rival: "外星观察者", relationAdd: -10, note: "建成「行星改造完成」后，与「外星观察者」关系 -10。" },
    ],
  },
  // ---------- w30-trade 银河贸易中心 细节·二 ----------
  "w30-trade": {
    constructionCrews: [
      { crew: "土建队", size: 50, speedMul: 1.0, note: "「银河贸易中心」「土建队」50 人，施工速度 ×1.0。" },
      { crew: "结构队", size: 40, speedMul: 1.0, note: "「银河贸易中心」「结构队」40 人，施工速度 ×1.0。" },
      { crew: "电气队", size: 30, speedMul: 1.0, note: "「银河贸易中心」「电气队」30 人，施工速度 ×1.0。" },
      { crew: "精密安装队", size: 25, speedMul: 1.0, note: "「银河贸易中心」「精密安装队」25 人，施工速度 ×1.0。" },
      { crew: "验收队", size: 15, speedMul: 1.0, note: "「银河贸易中心」「验收队」15 人，施工速度 ×1.0。" },
    ],
    materialSupply: [
      { material: "steel", perStage: 100, note: "「银河贸易中心」每阶段需 steel ×100，不足则停工。" },
      { material: "nano", perStage: 50, note: "「银河贸易中心」每阶段需 nano ×50，不足则停工。" },
      { material: "he3", perStage: 20, note: "「银河贸易中心」每阶段需 he3 ×20，不足则停工。" },
      { material: "uranium", perStage: 10, note: "「银河贸易中心」每阶段需 uranium ×10，不足则停工。" },
      { material: "food", perStage: 200, note: "「银河贸易中心」每阶段需 food ×200，不足则停工。" },
      { material: "water", perStage: 200, note: "「银河贸易中心」每阶段需 water ×200，不足则停工。" },
    ],
    powerGrid: [
      { node: "主变电站", capacity: 200, note: "「银河贸易中心」「主变电站」容量 200 电。" },
      { node: "备用电源", capacity: 100, note: "「银河贸易中心」「备用电源」容量 100 电。" },
      { node: "应急电池", capacity: 50, note: "「银河贸易中心」「应急电池」容量 50 电。" },
      { node: "配电网络", capacity: 150, note: "「银河贸易中心」「配电网络」容量 150 电。" },
      { node: "并网接口", capacity: 300, note: "「银河贸易中心」「并网接口」容量 300 电。" },
    ],
    waterSupply: [
      { node: "主水管", capacity: 100, note: "「银河贸易中心」「主水管」供水 100/分钟。" },
      { node: "蓄水塔", capacity: 80, note: "「银河贸易中心」「蓄水塔」供水 80/分钟。" },
      { node: "净水站", capacity: 60, note: "「银河贸易中心」「净水站」供水 60/分钟。" },
      { node: "循环系统", capacity: 40, note: "「银河贸易中心」「循环系统」供水 40/分钟。" },
    ],
    transportLinks: [
      { link: "主干道", throughput: 100, note: "「银河贸易中心」「主干道」运力 100/分钟。" },
      { link: "货运专线", throughput: 80, note: "「银河贸易中心」「货运专线」运力 80/分钟。" },
      { link: "客运专线", throughput: 60, note: "「银河贸易中心」「客运专线」运力 60/分钟。" },
      { link: "轨道接驳", throughput: 120, note: "「银河贸易中心」「轨道接驳」运力 120/分钟。" },
      { link: "空港通道", throughput: 150, note: "「银河贸易中心」「空港通道」运力 150/分钟。" },
    ],
    researchLabs: [
      { lab: "材料实验室", researchMul: 1.1, note: "「银河贸易中心」配套「材料实验室」：相关科技研究速度 ×1.1。" },
      { lab: "能源实验室", researchMul: 1.15, note: "「银河贸易中心」配套「能源实验室」：相关科技研究速度 ×1.15。" },
      { lab: "生态实验室", researchMul: 1.1, note: "「银河贸易中心」配套「生态实验室」：相关科技研究速度 ×1.1。" },
      { lab: "社会实验室", researchMul: 1.05, note: "「银河贸易中心」配套「社会实验室」：相关科技研究速度 ×1.05。" },
    ],
    culturalPrograms: [
      { program: "落成展览", happinessAdd: 5, note: "「银河贸易中心」「落成展览」：幸福度 +5。" },
      { program: "公众开放日", happinessAdd: 8, note: "「银河贸易中心」「公众开放日」：幸福度 +8。" },
      { program: "学校参观", happinessAdd: 6, note: "「银河贸易中心」「学校参观」：幸福度 +6。" },
      { program: "纪念仪式", happinessAdd: 10, note: "「银河贸易中心」「纪念仪式」：幸福度 +10。" },
      { program: "艺术节", happinessAdd: 12, note: "「银河贸易中心」「艺术节」：幸福度 +12。" },
    ],
    securityProtocols: [
      { protocol: "门禁系统", defenseAdd: 20, note: "「银河贸易中心」「门禁系统」：防御 +20。" },
      { protocol: "巡逻队", defenseAdd: 30, note: "「银河贸易中心」「巡逻队」：防御 +30。" },
      { protocol: "监控网络", defenseAdd: 25, note: "「银河贸易中心」「监控网络」：防御 +25。" },
      { protocol: "应急预案", defenseAdd: 40, note: "「银河贸易中心」「应急预案」：防御 +40。" },
      { protocol: "反恐演习", defenseAdd: 35, note: "「银河贸易中心」「反恐演习」：防御 +35。" },
    ],
    economicImpact: [
      { sector: "制造业", outputMul: 1.1, note: "「银河贸易中心」使「制造业」产出 ×1.1。" },
      { sector: "服务业", outputMul: 1.2, note: "「银河贸易中心」使「服务业」产出 ×1.2。" },
      { sector: "贸易", outputMul: 1.3, note: "「银河贸易中心」使「贸易」产出 ×1.3。" },
      { sector: "科研", outputMul: 1.15, note: "「银河贸易中心」使「科研」产出 ×1.15。" },
      { sector: "农业", outputMul: 1.1, note: "「银河贸易中心」使「农业」产出 ×1.1。" },
      { sector: "能源", outputMul: 1.25, note: "「银河贸易中心」使「能源」产出 ×1.25。" },
      { sector: "旅游", outputMul: 1.4, note: "「银河贸易中心」使「旅游」产出 ×1.4。" },
      { sector: "金融", outputMul: 1.2, note: "「银河贸易中心」使「金融」产出 ×1.2。" },
    ],
    environmentalImpact: [
      { metric: "空气质量", add: 10, note: "「银河贸易中心」使「空气质量」+10 点。" },
      { metric: "绿化覆盖", add: 15, note: "「银河贸易中心」使「绿化覆盖」+15 点。" },
      { metric: "水资源", add: 8, note: "「银河贸易中心」使「水资源」+8 点。" },
      { metric: "能源清洁度", add: 20, note: "「银河贸易中心」使「能源清洁度」+20 点。" },
      { metric: "生态完整度", add: 12, note: "「银河贸易中心」使「生态完整度」+12 点。" },
    ],
    legacyEffects: [
      { legacy: "历史地标", effect: "永久幸福度 +5。", note: "「银河贸易中心」遗产「历史地标」：永久幸福度 +5。" },
      { legacy: "教育基地", effect: "实验室产量 +10%。", note: "「银河贸易中心」遗产「教育基地」：实验室产量 +10%。" },
      { legacy: "旅游名片", effect: "贸易收入 +10%。", note: "「银河贸易中心」遗产「旅游名片」：贸易收入 +10%。" },
      { legacy: "精神象征", effect: "稳定度 +5。", note: "「银河贸易中心」遗产「精神象征」：稳定度 +5。" },
      { legacy: "技术遗产", effect: "全部生产 +5%。", note: "「银河贸易中心」遗产「技术遗产」：全部生产 +5%。" },
    ],
    rivalReactions: [
      { rival: "地球联合", relationAdd: -5, note: "建成「银河贸易中心」后，与「地球联合」关系 -5。" },
      { rival: "月球殖民地", relationAdd: 10, note: "建成「银河贸易中心」后，与「月球殖民地」关系 +10。" },
      { rival: "小行星矿工公会", relationAdd: 5, note: "建成「银河贸易中心」后，与「小行星矿工公会」关系 +5。" },
      { rival: "外星观察者", relationAdd: -10, note: "建成「银河贸易中心」后，与「外星观察者」关系 -10。" },
    ],
  },
  // ---------- w30-newhome 人类新家园 细节·二 ----------
  "w30-newhome": {
    constructionCrews: [
      { crew: "土建队", size: 50, speedMul: 1.0, note: "「人类新家园」「土建队」50 人，施工速度 ×1.0。" },
      { crew: "结构队", size: 40, speedMul: 1.0, note: "「人类新家园」「结构队」40 人，施工速度 ×1.0。" },
      { crew: "电气队", size: 30, speedMul: 1.0, note: "「人类新家园」「电气队」30 人，施工速度 ×1.0。" },
      { crew: "精密安装队", size: 25, speedMul: 1.0, note: "「人类新家园」「精密安装队」25 人，施工速度 ×1.0。" },
      { crew: "验收队", size: 15, speedMul: 1.0, note: "「人类新家园」「验收队」15 人，施工速度 ×1.0。" },
    ],
    materialSupply: [
      { material: "steel", perStage: 100, note: "「人类新家园」每阶段需 steel ×100，不足则停工。" },
      { material: "nano", perStage: 50, note: "「人类新家园」每阶段需 nano ×50，不足则停工。" },
      { material: "he3", perStage: 20, note: "「人类新家园」每阶段需 he3 ×20，不足则停工。" },
      { material: "uranium", perStage: 10, note: "「人类新家园」每阶段需 uranium ×10，不足则停工。" },
      { material: "food", perStage: 200, note: "「人类新家园」每阶段需 food ×200，不足则停工。" },
      { material: "water", perStage: 200, note: "「人类新家园」每阶段需 water ×200，不足则停工。" },
    ],
    powerGrid: [
      { node: "主变电站", capacity: 200, note: "「人类新家园」「主变电站」容量 200 电。" },
      { node: "备用电源", capacity: 100, note: "「人类新家园」「备用电源」容量 100 电。" },
      { node: "应急电池", capacity: 50, note: "「人类新家园」「应急电池」容量 50 电。" },
      { node: "配电网络", capacity: 150, note: "「人类新家园」「配电网络」容量 150 电。" },
      { node: "并网接口", capacity: 300, note: "「人类新家园」「并网接口」容量 300 电。" },
    ],
    waterSupply: [
      { node: "主水管", capacity: 100, note: "「人类新家园」「主水管」供水 100/分钟。" },
      { node: "蓄水塔", capacity: 80, note: "「人类新家园」「蓄水塔」供水 80/分钟。" },
      { node: "净水站", capacity: 60, note: "「人类新家园」「净水站」供水 60/分钟。" },
      { node: "循环系统", capacity: 40, note: "「人类新家园」「循环系统」供水 40/分钟。" },
    ],
    transportLinks: [
      { link: "主干道", throughput: 100, note: "「人类新家园」「主干道」运力 100/分钟。" },
      { link: "货运专线", throughput: 80, note: "「人类新家园」「货运专线」运力 80/分钟。" },
      { link: "客运专线", throughput: 60, note: "「人类新家园」「客运专线」运力 60/分钟。" },
      { link: "轨道接驳", throughput: 120, note: "「人类新家园」「轨道接驳」运力 120/分钟。" },
      { link: "空港通道", throughput: 150, note: "「人类新家园」「空港通道」运力 150/分钟。" },
    ],
    researchLabs: [
      { lab: "材料实验室", researchMul: 1.1, note: "「人类新家园」配套「材料实验室」：相关科技研究速度 ×1.1。" },
      { lab: "能源实验室", researchMul: 1.15, note: "「人类新家园」配套「能源实验室」：相关科技研究速度 ×1.15。" },
      { lab: "生态实验室", researchMul: 1.1, note: "「人类新家园」配套「生态实验室」：相关科技研究速度 ×1.1。" },
      { lab: "社会实验室", researchMul: 1.05, note: "「人类新家园」配套「社会实验室」：相关科技研究速度 ×1.05。" },
    ],
    culturalPrograms: [
      { program: "落成展览", happinessAdd: 5, note: "「人类新家园」「落成展览」：幸福度 +5。" },
      { program: "公众开放日", happinessAdd: 8, note: "「人类新家园」「公众开放日」：幸福度 +8。" },
      { program: "学校参观", happinessAdd: 6, note: "「人类新家园」「学校参观」：幸福度 +6。" },
      { program: "纪念仪式", happinessAdd: 10, note: "「人类新家园」「纪念仪式」：幸福度 +10。" },
      { program: "艺术节", happinessAdd: 12, note: "「人类新家园」「艺术节」：幸福度 +12。" },
    ],
    securityProtocols: [
      { protocol: "门禁系统", defenseAdd: 20, note: "「人类新家园」「门禁系统」：防御 +20。" },
      { protocol: "巡逻队", defenseAdd: 30, note: "「人类新家园」「巡逻队」：防御 +30。" },
      { protocol: "监控网络", defenseAdd: 25, note: "「人类新家园」「监控网络」：防御 +25。" },
      { protocol: "应急预案", defenseAdd: 40, note: "「人类新家园」「应急预案」：防御 +40。" },
      { protocol: "反恐演习", defenseAdd: 35, note: "「人类新家园」「反恐演习」：防御 +35。" },
    ],
    economicImpact: [
      { sector: "制造业", outputMul: 1.1, note: "「人类新家园」使「制造业」产出 ×1.1。" },
      { sector: "服务业", outputMul: 1.2, note: "「人类新家园」使「服务业」产出 ×1.2。" },
      { sector: "贸易", outputMul: 1.3, note: "「人类新家园」使「贸易」产出 ×1.3。" },
      { sector: "科研", outputMul: 1.15, note: "「人类新家园」使「科研」产出 ×1.15。" },
      { sector: "农业", outputMul: 1.1, note: "「人类新家园」使「农业」产出 ×1.1。" },
      { sector: "能源", outputMul: 1.25, note: "「人类新家园」使「能源」产出 ×1.25。" },
      { sector: "旅游", outputMul: 1.4, note: "「人类新家园」使「旅游」产出 ×1.4。" },
      { sector: "金融", outputMul: 1.2, note: "「人类新家园」使「金融」产出 ×1.2。" },
    ],
    environmentalImpact: [
      { metric: "空气质量", add: 10, note: "「人类新家园」使「空气质量」+10 点。" },
      { metric: "绿化覆盖", add: 15, note: "「人类新家园」使「绿化覆盖」+15 点。" },
      { metric: "水资源", add: 8, note: "「人类新家园」使「水资源」+8 点。" },
      { metric: "能源清洁度", add: 20, note: "「人类新家园」使「能源清洁度」+20 点。" },
      { metric: "生态完整度", add: 12, note: "「人类新家园」使「生态完整度」+12 点。" },
    ],
    legacyEffects: [
      { legacy: "历史地标", effect: "永久幸福度 +5。", note: "「人类新家园」遗产「历史地标」：永久幸福度 +5。" },
      { legacy: "教育基地", effect: "实验室产量 +10%。", note: "「人类新家园」遗产「教育基地」：实验室产量 +10%。" },
      { legacy: "旅游名片", effect: "贸易收入 +10%。", note: "「人类新家园」遗产「旅游名片」：贸易收入 +10%。" },
      { legacy: "精神象征", effect: "稳定度 +5。", note: "「人类新家园」遗产「精神象征」：稳定度 +5。" },
      { legacy: "技术遗产", effect: "全部生产 +5%。", note: "「人类新家园」遗产「技术遗产」：全部生产 +5%。" },
    ],
    rivalReactions: [
      { rival: "地球联合", relationAdd: -5, note: "建成「人类新家园」后，与「地球联合」关系 -5。" },
      { rival: "月球殖民地", relationAdd: 10, note: "建成「人类新家园」后，与「月球殖民地」关系 +10。" },
      { rival: "小行星矿工公会", relationAdd: 5, note: "建成「人类新家园」后，与「小行星矿工公会」关系 +5。" },
      { rival: "外星观察者", relationAdd: -10, note: "建成「人类新家园」后，与「外星观察者」关系 -10。" },
    ],
  },
};

for (const _wid of Object.keys(WONDERS_V30_DETAIL2)) {
  if (WONDERS_V30[_wid]) {
    WONDERS_V30[_wid].detail2 = WONDERS_V30_DETAIL2[_wid];
    if (WONDERS_V30[_wid].detail) Object.assign(WONDERS_V30[_wid].detail, WONDERS_V30_DETAIL2[_wid]);
  }
}

function selfTestWondersV30Detail2() {
  const errors = [];
  for (const id of WONDERS_V30_ORDER) {
    const d = (WONDERS_V30[id] || {}).detail2;
    if (!d) { errors.push(id + ': 细节块2缺失'); continue; }
    const checks = [
      ['constructionCrews', 5], ['materialSupply', 6], ['powerGrid', 5],
      ['waterSupply', 4], ['transportLinks', 5], ['researchLabs', 4],
      ['culturalPrograms', 5], ['securityProtocols', 5], ['economicImpact', 8],
      ['environmentalImpact', 5], ['legacyEffects', 5], ['rivalReactions', 4],
    ];
    for (const pair of checks) {
      if (!d[pair[0]] || d[pair[0]].length !== pair[1]) errors.push(id + ': ' + pair[0] + ' 数量错误');
    }
  }
  return { total: WONDERS_V30_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V30_DETAIL2 = WONDERS_V30_DETAIL2;
  module.exports.selfTestWondersV30Detail2 = selfTestWondersV30Detail2;
}

/* ============ §9 奇观细节块·三（施工日志 / 资金 / 人力 / 验收，载入时并入） ============ */
const WONDERS_V30_DETAIL3 = {
  // ---------- w30-parliament 星际议会大厦 细节·三 ----------
  "w30-parliament": {
    constructionJournal: [
      {
        stage: 1,
        stageName: "奠基",
        day: 10,
        workers: 10,
        costSteel: 80,
        costNano: 40,
        progressPct: 10,
        status: "完成",
        log: "第 10 天：「星际议会大厦」奠基完成，进度 10%。",
        note: "施工日志第 1 阶段：奠基，投入工人 10 名。",
      },
      {
        stage: 2,
        stageName: "地基",
        day: 20,
        workers: 15,
        costSteel: 80,
        costNano: 40,
        progressPct: 20,
        status: "完成",
        log: "第 20 天：「星际议会大厦」地基完成，进度 20%。",
        note: "施工日志第 2 阶段：地基，投入工人 15 名。",
      },
      {
        stage: 3,
        stageName: "穹顶结构",
        day: 30,
        workers: 20,
        costSteel: 80,
        costNano: 40,
        progressPct: 30,
        status: "完成",
        log: "第 30 天：「星际议会大厦」穹顶结构完成，进度 30%。",
        note: "施工日志第 3 阶段：穹顶结构，投入工人 20 名。",
      },
      {
        stage: 4,
        stageName: "议事大厅",
        day: 40,
        workers: 25,
        costSteel: 80,
        costNano: 40,
        progressPct: 40,
        status: "完成",
        log: "第 40 天：「星际议会大厦」议事大厅完成，进度 40%。",
        note: "施工日志第 4 阶段：议事大厅，投入工人 25 名。",
      },
      {
        stage: 5,
        stageName: "代表席位",
        day: 50,
        workers: 30,
        costSteel: 80,
        costNano: 40,
        progressPct: 50,
        status: "完成",
        log: "第 50 天：「星际议会大厦」代表席位完成，进度 50%。",
        note: "施工日志第 5 阶段：代表席位，投入工人 30 名。",
      },
      {
        stage: 6,
        stageName: "表决系统",
        day: 60,
        workers: 35,
        costSteel: 80,
        costNano: 40,
        progressPct: 60,
        status: "完成",
        log: "第 60 天：「星际议会大厦」表决系统完成，进度 60%。",
        note: "施工日志第 6 阶段：表决系统，投入工人 35 名。",
      },
      {
        stage: 7,
        stageName: "星际通讯",
        day: 70,
        workers: 40,
        costSteel: 80,
        costNano: 40,
        progressPct: 70,
        status: "完成",
        log: "第 70 天：「星际议会大厦」星际通讯完成，进度 70%。",
        note: "施工日志第 7 阶段：星际通讯，投入工人 40 名。",
      },
      {
        stage: 8,
        stageName: "宪法石碑",
        day: 80,
        workers: 45,
        costSteel: 80,
        costNano: 40,
        progressPct: 80,
        status: "完成",
        log: "第 80 天：「星际议会大厦」宪法石碑完成，进度 80%。",
        note: "施工日志第 8 阶段：宪法石碑，投入工人 45 名。",
      },
      {
        stage: 9,
        stageName: "开幕筹备",
        day: 90,
        workers: 50,
        costSteel: 80,
        costNano: 40,
        progressPct: 90,
        status: "完成",
        log: "第 90 天：「星际议会大厦」开幕筹备完成，进度 90%。",
        note: "施工日志第 9 阶段：开幕筹备，投入工人 50 名。",
      },
      {
        stage: 10,
        stageName: "首次全会",
        day: 100,
        workers: 55,
        costSteel: 80,
        costNano: 40,
        progressPct: 100,
        status: "落成",
        log: "第 100 天：「星际议会大厦」首次全会完成，进度 100%。",
        note: "施工日志第 10 阶段：首次全会，投入工人 55 名。",
      },
    ],
    fundingPlan: [
      {
        source: "市政财政",
        amountPct: 40,
        sharePct: 40,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「星际议会大厦」资金来源「市政财政」占比 40%。",
      },
      {
        source: "贸易收入",
        amountPct: 25,
        sharePct: 25,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「星际议会大厦」资金来源「贸易收入」占比 25%。",
      },
      {
        source: "地球援助",
        amountPct: 15,
        sharePct: 15,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「星际议会大厦」资金来源「地球援助」占比 15%。",
      },
      {
        source: "民间募资",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「星际议会大厦」资金来源「民间募资」占比 10%。",
      },
      {
        source: "奇观基金",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「星际议会大厦」资金来源「奇观基金」占比 10%。",
      },
    ],
    workforcePlan: [
      {
        role: "工程师",
        count: 40,
        wagePerMin: 10,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「星际议会大厦」人力「工程师」40 名，工资 10 星币/分钟。",
      },
      {
        role: "建筑工人",
        count: 100,
        wagePerMin: 5,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「星际议会大厦」人力「建筑工人」100 名，工资 5 星币/分钟。",
      },
      {
        role: "技术员",
        count: 30,
        wagePerMin: 8,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「星际议会大厦」人力「技术员」30 名，工资 8 星币/分钟。",
      },
      {
        role: "后勤人员",
        count: 20,
        wagePerMin: 4,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「星际议会大厦」人力「后勤人员」20 名，工资 4 星币/分钟。",
      },
      {
        role: "监理",
        count: 10,
        wagePerMin: 12,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「星际议会大厦」人力「监理」10 名，工资 12 星币/分钟。",
      },
    ],
    inspectionChecklist: [
      {
        item: "奠基验收",
        stage: 1,
        standard: "符合星港建筑规范第 1 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「奠基验收」：不合格则返工 60 秒。",
      },
      {
        item: "地基验收",
        stage: 2,
        standard: "符合星港建筑规范第 2 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「地基验收」：不合格则返工 60 秒。",
      },
      {
        item: "穹顶结构验收",
        stage: 3,
        standard: "符合星港建筑规范第 3 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「穹顶结构验收」：不合格则返工 60 秒。",
      },
      {
        item: "议事大厅验收",
        stage: 4,
        standard: "符合星港建筑规范第 4 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「议事大厅验收」：不合格则返工 60 秒。",
      },
      {
        item: "代表席位验收",
        stage: 5,
        standard: "符合星港建筑规范第 5 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「代表席位验收」：不合格则返工 60 秒。",
      },
      {
        item: "表决系统验收",
        stage: 6,
        standard: "符合星港建筑规范第 6 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「表决系统验收」：不合格则返工 60 秒。",
      },
      {
        item: "星际通讯验收",
        stage: 7,
        standard: "符合星港建筑规范第 7 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「星际通讯验收」：不合格则返工 60 秒。",
      },
      {
        item: "宪法石碑验收",
        stage: 8,
        standard: "符合星港建筑规范第 8 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「宪法石碑验收」：不合格则返工 60 秒。",
      },
      {
        item: "开幕筹备验收",
        stage: 9,
        standard: "符合星港建筑规范第 9 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「开幕筹备验收」：不合格则返工 60 秒。",
      },
      {
        item: "首次全会验收",
        stage: 10,
        standard: "符合星港建筑规范第 10 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「首次全会验收」：不合格则返工 60 秒。",
      },
    ],
    openingCeremony: [
      {
        segment: "入场",
        durationMin: 10,
        attendees: 500,
        costCredits: 100,
        effect: "幸福度 +5",
        note: "「星际议会大厦」落成典礼「入场」环节，500 人参加。",
      },
      {
        segment: "致辞",
        durationMin: 20,
        attendees: 1000,
        costCredits: 200,
        effect: "幸福度 +5",
        note: "「星际议会大厦」落成典礼「致辞」环节，1000 人参加。",
      },
      {
        segment: "揭幕",
        durationMin: 5,
        attendees: 2000,
        costCredits: 50,
        effect: "幸福度 +5",
        note: "「星际议会大厦」落成典礼「揭幕」环节，2000 人参加。",
      },
      {
        segment: "巡游",
        durationMin: 30,
        attendees: 5000,
        costCredits: 300,
        effect: "幸福度 +5",
        note: "「星际议会大厦」落成典礼「巡游」环节，5000 人参加。",
      },
      {
        segment: "庆典",
        durationMin: 60,
        attendees: 10000,
        costCredits: 600,
        effect: "幸福度 +5",
        note: "「星际议会大厦」落成典礼「庆典」环节，10000 人参加。",
      },
    ],
    sustainabilityReport: [
      {
        metric: "能耗",
        score: 80,
        target: 100,
        note: "「星际议会大厦」可持续指标「能耗」得分 80/100。",
      },
      {
        metric: "用水",
        score: 70,
        target: 100,
        note: "「星际议会大厦」可持续指标「用水」得分 70/100。",
      },
      {
        metric: "排放",
        score: 90,
        target: 100,
        note: "「星际议会大厦」可持续指标「排放」得分 90/100。",
      },
      {
        metric: "回收率",
        score: 85,
        target: 100,
        note: "「星际议会大厦」可持续指标「回收率」得分 85/100。",
      },
      {
        metric: "生态影响",
        score: 75,
        target: 100,
        note: "「星际议会大厦」可持续指标「生态影响」得分 75/100。",
      },
    ],
  },
  // ---------- w30-dyson 戴森球 细节·三 ----------
  "w30-dyson": {
    constructionJournal: [
      {
        stage: 1,
        stageName: "轨道船坞",
        day: 10,
        workers: 10,
        costSteel: 100,
        costNano: 150,
        progressPct: 10,
        status: "完成",
        log: "第 10 天：「戴森球」轨道船坞完成，进度 10%。",
        note: "施工日志第 1 阶段：轨道船坞，投入工人 10 名。",
      },
      {
        stage: 2,
        stageName: "首批卫星",
        day: 20,
        workers: 15,
        costSteel: 100,
        costNano: 150,
        progressPct: 20,
        status: "完成",
        log: "第 20 天：「戴森球」首批卫星完成，进度 20%。",
        note: "施工日志第 2 阶段：首批卫星，投入工人 15 名。",
      },
      {
        stage: 3,
        stageName: "能量接收站",
        day: 30,
        workers: 20,
        costSteel: 100,
        costNano: 150,
        progressPct: 30,
        status: "完成",
        log: "第 30 天：「戴森球」能量接收站完成，进度 30%。",
        note: "施工日志第 3 阶段：能量接收站，投入工人 20 名。",
      },
      {
        stage: 4,
        stageName: "卫星量产",
        day: 40,
        workers: 25,
        costSteel: 100,
        costNano: 150,
        progressPct: 40,
        status: "完成",
        log: "第 40 天：「戴森球」卫星量产完成，进度 40%。",
        note: "施工日志第 4 阶段：卫星量产，投入工人 25 名。",
      },
      {
        stage: 5,
        stageName: "轨道组装",
        day: 50,
        workers: 30,
        costSteel: 100,
        costNano: 150,
        progressPct: 50,
        status: "完成",
        log: "第 50 天：「戴森球」轨道组装完成，进度 50%。",
        note: "施工日志第 5 阶段：轨道组装，投入工人 30 名。",
      },
      {
        stage: 6,
        stageName: "能量并网",
        day: 60,
        workers: 35,
        costSteel: 100,
        costNano: 150,
        progressPct: 60,
        status: "完成",
        log: "第 60 天：「戴森球」能量并网完成，进度 60%。",
        note: "施工日志第 6 阶段：能量并网，投入工人 35 名。",
      },
      {
        stage: 7,
        stageName: "壳层合拢",
        day: 70,
        workers: 40,
        costSteel: 100,
        costNano: 150,
        progressPct: 70,
        status: "完成",
        log: "第 70 天：「戴森球」壳层合拢完成，进度 70%。",
        note: "施工日志第 7 阶段：壳层合拢，投入工人 40 名。",
      },
      {
        stage: 8,
        stageName: "恒星测光",
        day: 80,
        workers: 45,
        costSteel: 100,
        costNano: 150,
        progressPct: 80,
        status: "完成",
        log: "第 80 天：「戴森球」恒星测光完成，进度 80%。",
        note: "施工日志第 8 阶段：恒星测光，投入工人 45 名。",
      },
      {
        stage: 9,
        stageName: "全功率测试",
        day: 90,
        workers: 50,
        costSteel: 100,
        costNano: 150,
        progressPct: 90,
        status: "完成",
        log: "第 90 天：「戴森球」全功率测试完成，进度 90%。",
        note: "施工日志第 9 阶段：全功率测试，投入工人 50 名。",
      },
      {
        stage: 10,
        stageName: "戴森球点火",
        day: 100,
        workers: 55,
        costSteel: 100,
        costNano: 150,
        progressPct: 100,
        status: "落成",
        log: "第 100 天：「戴森球」戴森球点火完成，进度 100%。",
        note: "施工日志第 10 阶段：戴森球点火，投入工人 55 名。",
      },
    ],
    fundingPlan: [
      {
        source: "市政财政",
        amountPct: 40,
        sharePct: 40,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「戴森球」资金来源「市政财政」占比 40%。",
      },
      {
        source: "贸易收入",
        amountPct: 25,
        sharePct: 25,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「戴森球」资金来源「贸易收入」占比 25%。",
      },
      {
        source: "地球援助",
        amountPct: 15,
        sharePct: 15,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「戴森球」资金来源「地球援助」占比 15%。",
      },
      {
        source: "民间募资",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「戴森球」资金来源「民间募资」占比 10%。",
      },
      {
        source: "奇观基金",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「戴森球」资金来源「奇观基金」占比 10%。",
      },
    ],
    workforcePlan: [
      {
        role: "工程师",
        count: 40,
        wagePerMin: 10,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「戴森球」人力「工程师」40 名，工资 10 星币/分钟。",
      },
      {
        role: "建筑工人",
        count: 100,
        wagePerMin: 5,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「戴森球」人力「建筑工人」100 名，工资 5 星币/分钟。",
      },
      {
        role: "技术员",
        count: 30,
        wagePerMin: 8,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「戴森球」人力「技术员」30 名，工资 8 星币/分钟。",
      },
      {
        role: "后勤人员",
        count: 20,
        wagePerMin: 4,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「戴森球」人力「后勤人员」20 名，工资 4 星币/分钟。",
      },
      {
        role: "监理",
        count: 10,
        wagePerMin: 12,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「戴森球」人力「监理」10 名，工资 12 星币/分钟。",
      },
    ],
    inspectionChecklist: [
      {
        item: "轨道船坞验收",
        stage: 1,
        standard: "符合星港建筑规范第 1 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「轨道船坞验收」：不合格则返工 60 秒。",
      },
      {
        item: "首批卫星验收",
        stage: 2,
        standard: "符合星港建筑规范第 2 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「首批卫星验收」：不合格则返工 60 秒。",
      },
      {
        item: "能量接收站验收",
        stage: 3,
        standard: "符合星港建筑规范第 3 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「能量接收站验收」：不合格则返工 60 秒。",
      },
      {
        item: "卫星量产验收",
        stage: 4,
        standard: "符合星港建筑规范第 4 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「卫星量产验收」：不合格则返工 60 秒。",
      },
      {
        item: "轨道组装验收",
        stage: 5,
        standard: "符合星港建筑规范第 5 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「轨道组装验收」：不合格则返工 60 秒。",
      },
      {
        item: "能量并网验收",
        stage: 6,
        standard: "符合星港建筑规范第 6 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「能量并网验收」：不合格则返工 60 秒。",
      },
      {
        item: "壳层合拢验收",
        stage: 7,
        standard: "符合星港建筑规范第 7 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「壳层合拢验收」：不合格则返工 60 秒。",
      },
      {
        item: "恒星测光验收",
        stage: 8,
        standard: "符合星港建筑规范第 8 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「恒星测光验收」：不合格则返工 60 秒。",
      },
      {
        item: "全功率测试验收",
        stage: 9,
        standard: "符合星港建筑规范第 9 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「全功率测试验收」：不合格则返工 60 秒。",
      },
      {
        item: "戴森球点火验收",
        stage: 10,
        standard: "符合星港建筑规范第 10 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「戴森球点火验收」：不合格则返工 60 秒。",
      },
    ],
    openingCeremony: [
      {
        segment: "入场",
        durationMin: 10,
        attendees: 500,
        costCredits: 100,
        effect: "幸福度 +5",
        note: "「戴森球」落成典礼「入场」环节，500 人参加。",
      },
      {
        segment: "致辞",
        durationMin: 20,
        attendees: 1000,
        costCredits: 200,
        effect: "幸福度 +5",
        note: "「戴森球」落成典礼「致辞」环节，1000 人参加。",
      },
      {
        segment: "揭幕",
        durationMin: 5,
        attendees: 2000,
        costCredits: 50,
        effect: "幸福度 +5",
        note: "「戴森球」落成典礼「揭幕」环节，2000 人参加。",
      },
      {
        segment: "巡游",
        durationMin: 30,
        attendees: 5000,
        costCredits: 300,
        effect: "幸福度 +5",
        note: "「戴森球」落成典礼「巡游」环节，5000 人参加。",
      },
      {
        segment: "庆典",
        durationMin: 60,
        attendees: 10000,
        costCredits: 600,
        effect: "幸福度 +5",
        note: "「戴森球」落成典礼「庆典」环节，10000 人参加。",
      },
    ],
    sustainabilityReport: [
      {
        metric: "能耗",
        score: 80,
        target: 100,
        note: "「戴森球」可持续指标「能耗」得分 80/100。",
      },
      {
        metric: "用水",
        score: 70,
        target: 100,
        note: "「戴森球」可持续指标「用水」得分 70/100。",
      },
      {
        metric: "排放",
        score: 90,
        target: 100,
        note: "「戴森球」可持续指标「排放」得分 90/100。",
      },
      {
        metric: "回收率",
        score: 85,
        target: 100,
        note: "「戴森球」可持续指标「回收率」得分 85/100。",
      },
      {
        metric: "生态影响",
        score: 75,
        target: 100,
        note: "「戴森球」可持续指标「生态影响」得分 75/100。",
      },
    ],
  },
  // ---------- w30-terraform 行星改造完成 细节·三 ----------
  "w30-terraform": {
    constructionJournal: [
      {
        stage: 1,
        stageName: "大气验收",
        day: 10,
        workers: 10,
        costSteel: 80,
        costNano: 120,
        progressPct: 10,
        status: "完成",
        log: "第 10 天：「行星改造完成」大气验收完成，进度 10%。",
        note: "施工日志第 1 阶段：大气验收，投入工人 10 名。",
      },
      {
        stage: 2,
        stageName: "海洋注水",
        day: 20,
        workers: 15,
        costSteel: 80,
        costNano: 120,
        progressPct: 20,
        status: "完成",
        log: "第 20 天：「行星改造完成」海洋注水完成，进度 20%。",
        note: "施工日志第 2 阶段：海洋注水，投入工人 15 名。",
      },
      {
        stage: 3,
        stageName: "森林验收",
        day: 30,
        workers: 20,
        costSteel: 80,
        costNano: 120,
        progressPct: 30,
        status: "完成",
        log: "第 30 天：「行星改造完成」森林验收完成，进度 30%。",
        note: "施工日志第 3 阶段：森林验收，投入工人 20 名。",
      },
      {
        stage: 4,
        stageName: "氧气达标",
        day: 40,
        workers: 25,
        costSteel: 80,
        costNano: 120,
        progressPct: 40,
        status: "完成",
        log: "第 40 天：「行星改造完成」氧气达标完成，进度 40%。",
        note: "施工日志第 4 阶段：氧气达标，投入工人 25 名。",
      },
      {
        stage: 5,
        stageName: "土壤验收",
        day: 50,
        workers: 30,
        costSteel: 80,
        costNano: 120,
        progressPct: 50,
        status: "完成",
        log: "第 50 天：「行星改造完成」土壤验收完成，进度 50%。",
        note: "施工日志第 5 阶段：土壤验收，投入工人 30 名。",
      },
      {
        stage: 6,
        stageName: "物种引入",
        day: 60,
        workers: 35,
        costSteel: 80,
        costNano: 120,
        progressPct: 60,
        status: "完成",
        log: "第 60 天：「行星改造完成」物种引入完成，进度 60%。",
        note: "施工日志第 6 阶段：物种引入，投入工人 35 名。",
      },
      {
        stage: 7,
        stageName: "气候稳定",
        day: 70,
        workers: 40,
        costSteel: 80,
        costNano: 120,
        progressPct: 70,
        status: "完成",
        log: "第 70 天：「行星改造完成」气候稳定完成，进度 70%。",
        note: "施工日志第 7 阶段：气候稳定，投入工人 40 名。",
      },
      {
        stage: 8,
        stageName: "户外行走",
        day: 80,
        workers: 45,
        costSteel: 80,
        costNano: 120,
        progressPct: 80,
        status: "完成",
        log: "第 80 天：「行星改造完成」户外行走完成，进度 80%。",
        note: "施工日志第 8 阶段：户外行走，投入工人 45 名。",
      },
      {
        stage: 9,
        stageName: "生态认证",
        day: 90,
        workers: 50,
        costSteel: 80,
        costNano: 120,
        progressPct: 90,
        status: "完成",
        log: "第 90 天：「行星改造完成」生态认证完成，进度 90%。",
        note: "施工日志第 9 阶段：生态认证，投入工人 50 名。",
      },
      {
        stage: 10,
        stageName: "蓝色火星",
        day: 100,
        workers: 55,
        costSteel: 80,
        costNano: 120,
        progressPct: 100,
        status: "落成",
        log: "第 100 天：「行星改造完成」蓝色火星完成，进度 100%。",
        note: "施工日志第 10 阶段：蓝色火星，投入工人 55 名。",
      },
    ],
    fundingPlan: [
      {
        source: "市政财政",
        amountPct: 40,
        sharePct: 40,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「行星改造完成」资金来源「市政财政」占比 40%。",
      },
      {
        source: "贸易收入",
        amountPct: 25,
        sharePct: 25,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「行星改造完成」资金来源「贸易收入」占比 25%。",
      },
      {
        source: "地球援助",
        amountPct: 15,
        sharePct: 15,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「行星改造完成」资金来源「地球援助」占比 15%。",
      },
      {
        source: "民间募资",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「行星改造完成」资金来源「民间募资」占比 10%。",
      },
      {
        source: "奇观基金",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「行星改造完成」资金来源「奇观基金」占比 10%。",
      },
    ],
    workforcePlan: [
      {
        role: "工程师",
        count: 40,
        wagePerMin: 10,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「行星改造完成」人力「工程师」40 名，工资 10 星币/分钟。",
      },
      {
        role: "建筑工人",
        count: 100,
        wagePerMin: 5,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「行星改造完成」人力「建筑工人」100 名，工资 5 星币/分钟。",
      },
      {
        role: "技术员",
        count: 30,
        wagePerMin: 8,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「行星改造完成」人力「技术员」30 名，工资 8 星币/分钟。",
      },
      {
        role: "后勤人员",
        count: 20,
        wagePerMin: 4,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「行星改造完成」人力「后勤人员」20 名，工资 4 星币/分钟。",
      },
      {
        role: "监理",
        count: 10,
        wagePerMin: 12,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「行星改造完成」人力「监理」10 名，工资 12 星币/分钟。",
      },
    ],
    inspectionChecklist: [
      {
        item: "大气验收验收",
        stage: 1,
        standard: "符合星港建筑规范第 1 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「大气验收验收」：不合格则返工 60 秒。",
      },
      {
        item: "海洋注水验收",
        stage: 2,
        standard: "符合星港建筑规范第 2 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「海洋注水验收」：不合格则返工 60 秒。",
      },
      {
        item: "森林验收验收",
        stage: 3,
        standard: "符合星港建筑规范第 3 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「森林验收验收」：不合格则返工 60 秒。",
      },
      {
        item: "氧气达标验收",
        stage: 4,
        standard: "符合星港建筑规范第 4 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「氧气达标验收」：不合格则返工 60 秒。",
      },
      {
        item: "土壤验收验收",
        stage: 5,
        standard: "符合星港建筑规范第 5 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「土壤验收验收」：不合格则返工 60 秒。",
      },
      {
        item: "物种引入验收",
        stage: 6,
        standard: "符合星港建筑规范第 6 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「物种引入验收」：不合格则返工 60 秒。",
      },
      {
        item: "气候稳定验收",
        stage: 7,
        standard: "符合星港建筑规范第 7 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「气候稳定验收」：不合格则返工 60 秒。",
      },
      {
        item: "户外行走验收",
        stage: 8,
        standard: "符合星港建筑规范第 8 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「户外行走验收」：不合格则返工 60 秒。",
      },
      {
        item: "生态认证验收",
        stage: 9,
        standard: "符合星港建筑规范第 9 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「生态认证验收」：不合格则返工 60 秒。",
      },
      {
        item: "蓝色火星验收",
        stage: 10,
        standard: "符合星港建筑规范第 10 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「蓝色火星验收」：不合格则返工 60 秒。",
      },
    ],
    openingCeremony: [
      {
        segment: "入场",
        durationMin: 10,
        attendees: 500,
        costCredits: 100,
        effect: "幸福度 +5",
        note: "「行星改造完成」落成典礼「入场」环节，500 人参加。",
      },
      {
        segment: "致辞",
        durationMin: 20,
        attendees: 1000,
        costCredits: 200,
        effect: "幸福度 +5",
        note: "「行星改造完成」落成典礼「致辞」环节，1000 人参加。",
      },
      {
        segment: "揭幕",
        durationMin: 5,
        attendees: 2000,
        costCredits: 50,
        effect: "幸福度 +5",
        note: "「行星改造完成」落成典礼「揭幕」环节，2000 人参加。",
      },
      {
        segment: "巡游",
        durationMin: 30,
        attendees: 5000,
        costCredits: 300,
        effect: "幸福度 +5",
        note: "「行星改造完成」落成典礼「巡游」环节，5000 人参加。",
      },
      {
        segment: "庆典",
        durationMin: 60,
        attendees: 10000,
        costCredits: 600,
        effect: "幸福度 +5",
        note: "「行星改造完成」落成典礼「庆典」环节，10000 人参加。",
      },
    ],
    sustainabilityReport: [
      {
        metric: "能耗",
        score: 80,
        target: 100,
        note: "「行星改造完成」可持续指标「能耗」得分 80/100。",
      },
      {
        metric: "用水",
        score: 70,
        target: 100,
        note: "「行星改造完成」可持续指标「用水」得分 70/100。",
      },
      {
        metric: "排放",
        score: 90,
        target: 100,
        note: "「行星改造完成」可持续指标「排放」得分 90/100。",
      },
      {
        metric: "回收率",
        score: 85,
        target: 100,
        note: "「行星改造完成」可持续指标「回收率」得分 85/100。",
      },
      {
        metric: "生态影响",
        score: 75,
        target: 100,
        note: "「行星改造完成」可持续指标「生态影响」得分 75/100。",
      },
    ],
  },
  // ---------- w30-trade 银河贸易中心 细节·三 ----------
  "w30-trade": {
    constructionJournal: [
      {
        stage: 1,
        stageName: "选址",
        day: 10,
        workers: 10,
        costSteel: 60,
        costNano: 50,
        progressPct: 10,
        status: "完成",
        log: "第 10 天：「银河贸易中心」选址完成，进度 10%。",
        note: "施工日志第 1 阶段：选址，投入工人 10 名。",
      },
      {
        stage: 2,
        stageName: "空港扩建",
        day: 20,
        workers: 15,
        costSteel: 60,
        costNano: 50,
        progressPct: 20,
        status: "完成",
        log: "第 20 天：「银河贸易中心」空港扩建完成，进度 20%。",
        note: "施工日志第 2 阶段：空港扩建，投入工人 15 名。",
      },
      {
        stage: 3,
        stageName: "仓库群",
        day: 30,
        workers: 20,
        costSteel: 60,
        costNano: 50,
        progressPct: 30,
        status: "完成",
        log: "第 30 天：「银河贸易中心」仓库群完成，进度 30%。",
        note: "施工日志第 3 阶段：仓库群，投入工人 20 名。",
      },
      {
        stage: 4,
        stageName: "交易大厅",
        day: 40,
        workers: 25,
        costSteel: 60,
        costNano: 50,
        progressPct: 40,
        status: "完成",
        log: "第 40 天：「银河贸易中心」交易大厅完成，进度 40%。",
        note: "施工日志第 4 阶段：交易大厅，投入工人 25 名。",
      },
      {
        stage: 5,
        stageName: "关税中心",
        day: 50,
        workers: 30,
        costSteel: 60,
        costNano: 50,
        progressPct: 50,
        status: "完成",
        log: "第 50 天：「银河贸易中心」关税中心完成，进度 50%。",
        note: "施工日志第 5 阶段：关税中心，投入工人 30 名。",
      },
      {
        stage: 6,
        stageName: "外商区",
        day: 60,
        workers: 35,
        costSteel: 60,
        costNano: 50,
        progressPct: 60,
        status: "完成",
        log: "第 60 天：「银河贸易中心」外商区完成，进度 60%。",
        note: "施工日志第 6 阶段：外商区，投入工人 35 名。",
      },
      {
        stage: 7,
        stageName: "期货市场",
        day: 70,
        workers: 40,
        costSteel: 60,
        costNano: 50,
        progressPct: 70,
        status: "完成",
        log: "第 70 天：「银河贸易中心」期货市场完成，进度 70%。",
        note: "施工日志第 7 阶段：期货市场，投入工人 40 名。",
      },
      {
        stage: 8,
        stageName: "星际银行",
        day: 80,
        workers: 45,
        costSteel: 60,
        costNano: 50,
        progressPct: 80,
        status: "完成",
        log: "第 80 天：「银河贸易中心」星际银行完成，进度 80%。",
        note: "施工日志第 8 阶段：星际银行，投入工人 45 名。",
      },
      {
        stage: 9,
        stageName: "航线网络",
        day: 90,
        workers: 50,
        costSteel: 60,
        costNano: 50,
        progressPct: 90,
        status: "完成",
        log: "第 90 天：「银河贸易中心」航线网络完成，进度 90%。",
        note: "施工日志第 9 阶段：航线网络，投入工人 50 名。",
      },
      {
        stage: 10,
        stageName: "开市大典",
        day: 100,
        workers: 55,
        costSteel: 60,
        costNano: 50,
        progressPct: 100,
        status: "落成",
        log: "第 100 天：「银河贸易中心」开市大典完成，进度 100%。",
        note: "施工日志第 10 阶段：开市大典，投入工人 55 名。",
      },
    ],
    fundingPlan: [
      {
        source: "市政财政",
        amountPct: 40,
        sharePct: 40,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「银河贸易中心」资金来源「市政财政」占比 40%。",
      },
      {
        source: "贸易收入",
        amountPct: 25,
        sharePct: 25,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「银河贸易中心」资金来源「贸易收入」占比 25%。",
      },
      {
        source: "地球援助",
        amountPct: 15,
        sharePct: 15,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「银河贸易中心」资金来源「地球援助」占比 15%。",
      },
      {
        source: "民间募资",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「银河贸易中心」资金来源「民间募资」占比 10%。",
      },
      {
        source: "奇观基金",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「银河贸易中心」资金来源「奇观基金」占比 10%。",
      },
    ],
    workforcePlan: [
      {
        role: "工程师",
        count: 40,
        wagePerMin: 10,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「银河贸易中心」人力「工程师」40 名，工资 10 星币/分钟。",
      },
      {
        role: "建筑工人",
        count: 100,
        wagePerMin: 5,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「银河贸易中心」人力「建筑工人」100 名，工资 5 星币/分钟。",
      },
      {
        role: "技术员",
        count: 30,
        wagePerMin: 8,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「银河贸易中心」人力「技术员」30 名，工资 8 星币/分钟。",
      },
      {
        role: "后勤人员",
        count: 20,
        wagePerMin: 4,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「银河贸易中心」人力「后勤人员」20 名，工资 4 星币/分钟。",
      },
      {
        role: "监理",
        count: 10,
        wagePerMin: 12,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「银河贸易中心」人力「监理」10 名，工资 12 星币/分钟。",
      },
    ],
    inspectionChecklist: [
      {
        item: "选址验收",
        stage: 1,
        standard: "符合星港建筑规范第 1 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「选址验收」：不合格则返工 60 秒。",
      },
      {
        item: "空港扩建验收",
        stage: 2,
        standard: "符合星港建筑规范第 2 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「空港扩建验收」：不合格则返工 60 秒。",
      },
      {
        item: "仓库群验收",
        stage: 3,
        standard: "符合星港建筑规范第 3 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「仓库群验收」：不合格则返工 60 秒。",
      },
      {
        item: "交易大厅验收",
        stage: 4,
        standard: "符合星港建筑规范第 4 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「交易大厅验收」：不合格则返工 60 秒。",
      },
      {
        item: "关税中心验收",
        stage: 5,
        standard: "符合星港建筑规范第 5 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「关税中心验收」：不合格则返工 60 秒。",
      },
      {
        item: "外商区验收",
        stage: 6,
        standard: "符合星港建筑规范第 6 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「外商区验收」：不合格则返工 60 秒。",
      },
      {
        item: "期货市场验收",
        stage: 7,
        standard: "符合星港建筑规范第 7 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「期货市场验收」：不合格则返工 60 秒。",
      },
      {
        item: "星际银行验收",
        stage: 8,
        standard: "符合星港建筑规范第 8 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「星际银行验收」：不合格则返工 60 秒。",
      },
      {
        item: "航线网络验收",
        stage: 9,
        standard: "符合星港建筑规范第 9 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「航线网络验收」：不合格则返工 60 秒。",
      },
      {
        item: "开市大典验收",
        stage: 10,
        standard: "符合星港建筑规范第 10 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「开市大典验收」：不合格则返工 60 秒。",
      },
    ],
    openingCeremony: [
      {
        segment: "入场",
        durationMin: 10,
        attendees: 500,
        costCredits: 100,
        effect: "幸福度 +5",
        note: "「银河贸易中心」落成典礼「入场」环节，500 人参加。",
      },
      {
        segment: "致辞",
        durationMin: 20,
        attendees: 1000,
        costCredits: 200,
        effect: "幸福度 +5",
        note: "「银河贸易中心」落成典礼「致辞」环节，1000 人参加。",
      },
      {
        segment: "揭幕",
        durationMin: 5,
        attendees: 2000,
        costCredits: 50,
        effect: "幸福度 +5",
        note: "「银河贸易中心」落成典礼「揭幕」环节，2000 人参加。",
      },
      {
        segment: "巡游",
        durationMin: 30,
        attendees: 5000,
        costCredits: 300,
        effect: "幸福度 +5",
        note: "「银河贸易中心」落成典礼「巡游」环节，5000 人参加。",
      },
      {
        segment: "庆典",
        durationMin: 60,
        attendees: 10000,
        costCredits: 600,
        effect: "幸福度 +5",
        note: "「银河贸易中心」落成典礼「庆典」环节，10000 人参加。",
      },
    ],
    sustainabilityReport: [
      {
        metric: "能耗",
        score: 80,
        target: 100,
        note: "「银河贸易中心」可持续指标「能耗」得分 80/100。",
      },
      {
        metric: "用水",
        score: 70,
        target: 100,
        note: "「银河贸易中心」可持续指标「用水」得分 70/100。",
      },
      {
        metric: "排放",
        score: 90,
        target: 100,
        note: "「银河贸易中心」可持续指标「排放」得分 90/100。",
      },
      {
        metric: "回收率",
        score: 85,
        target: 100,
        note: "「银河贸易中心」可持续指标「回收率」得分 85/100。",
      },
      {
        metric: "生态影响",
        score: 75,
        target: 100,
        note: "「银河贸易中心」可持续指标「生态影响」得分 75/100。",
      },
    ],
  },
  // ---------- w30-newhome 人类新家园 细节·三 ----------
  "w30-newhome": {
    constructionJournal: [
      {
        stage: 1,
        stageName: "总体规划",
        day: 10,
        workers: 10,
        costSteel: 150,
        costNano: 200,
        progressPct: 10,
        status: "完成",
        log: "第 10 天：「人类新家园」总体规划完成，进度 10%。",
        note: "施工日志第 1 阶段：总体规划，投入工人 10 名。",
      },
      {
        stage: 2,
        stageName: "新城奠基",
        day: 20,
        workers: 15,
        costSteel: 150,
        costNano: 200,
        progressPct: 20,
        status: "完成",
        log: "第 20 天：「人类新家园」新城奠基完成，进度 20%。",
        note: "施工日志第 2 阶段：新城奠基，投入工人 15 名。",
      },
      {
        stage: 3,
        stageName: "生态城区",
        day: 30,
        workers: 20,
        costSteel: 150,
        costNano: 200,
        progressPct: 30,
        status: "完成",
        log: "第 30 天：「人类新家园」生态城区完成，进度 30%。",
        note: "施工日志第 3 阶段：生态城区，投入工人 20 名。",
      },
      {
        stage: 4,
        stageName: "能源城区",
        day: 40,
        workers: 25,
        costSteel: 150,
        costNano: 200,
        progressPct: 40,
        status: "完成",
        log: "第 40 天：「人类新家园」能源城区完成，进度 40%。",
        note: "施工日志第 4 阶段：能源城区，投入工人 25 名。",
      },
      {
        stage: 5,
        stageName: "工业城区",
        day: 50,
        workers: 30,
        costSteel: 150,
        costNano: 200,
        progressPct: 50,
        status: "完成",
        log: "第 50 天：「人类新家园」工业城区完成，进度 50%。",
        note: "施工日志第 5 阶段：工业城区，投入工人 30 名。",
      },
      {
        stage: 6,
        stageName: "居住城区",
        day: 60,
        workers: 35,
        costSteel: 150,
        costNano: 200,
        progressPct: 60,
        status: "完成",
        log: "第 60 天：「人类新家园」居住城区完成，进度 60%。",
        note: "施工日志第 6 阶段：居住城区，投入工人 35 名。",
      },
      {
        stage: 7,
        stageName: "文化城区",
        day: 70,
        workers: 40,
        costSteel: 150,
        costNano: 200,
        progressPct: 70,
        status: "完成",
        log: "第 70 天：「人类新家园」文化城区完成，进度 70%。",
        note: "施工日志第 7 阶段：文化城区，投入工人 40 名。",
      },
      {
        stage: 8,
        stageName: "防御体系",
        day: 80,
        workers: 45,
        costSteel: 150,
        costNano: 200,
        progressPct: 80,
        status: "完成",
        log: "第 80 天：「人类新家园」防御体系完成，进度 80%。",
        note: "施工日志第 8 阶段：防御体系，投入工人 45 名。",
      },
      {
        stage: 9,
        stageName: "移民潮",
        day: 90,
        workers: 50,
        costSteel: 150,
        costNano: 200,
        progressPct: 90,
        status: "完成",
        log: "第 90 天：「人类新家园」移民潮完成，进度 90%。",
        note: "施工日志第 9 阶段：移民潮，投入工人 50 名。",
      },
      {
        stage: 10,
        stageName: "新家园落成",
        day: 100,
        workers: 55,
        costSteel: 150,
        costNano: 200,
        progressPct: 100,
        status: "落成",
        log: "第 100 天：「人类新家园」新家园落成完成，进度 100%。",
        note: "施工日志第 10 阶段：新家园落成，投入工人 55 名。",
      },
    ],
    fundingPlan: [
      {
        source: "市政财政",
        amountPct: 40,
        sharePct: 40,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「人类新家园」资金来源「市政财政」占比 40%。",
      },
      {
        source: "贸易收入",
        amountPct: 25,
        sharePct: 25,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「人类新家园」资金来源「贸易收入」占比 25%。",
      },
      {
        source: "地球援助",
        amountPct: 15,
        sharePct: 15,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「人类新家园」资金来源「地球援助」占比 15%。",
      },
      {
        source: "民间募资",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「人类新家园」资金来源「民间募资」占比 10%。",
      },
      {
        source: "奇观基金",
        amountPct: 10,
        sharePct: 10,
        condition: "资金到位后方可开工下一阶段。",
        risk: "若该来源断供，工期延长 20%%。",
        guarantor: "市政厅",
        schedule: "按 10 个阶段分期拨付。",
        note: "「人类新家园」资金来源「奇观基金」占比 10%。",
      },
    ],
    workforcePlan: [
      {
        role: "工程师",
        count: 40,
        wagePerMin: 10,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「人类新家园」人力「工程师」40 名，工资 10 星币/分钟。",
      },
      {
        role: "建筑工人",
        count: 100,
        wagePerMin: 5,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「人类新家园」人力「建筑工人」100 名，工资 5 星币/分钟。",
      },
      {
        role: "技术员",
        count: 30,
        wagePerMin: 8,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「人类新家园」人力「技术员」30 名，工资 8 星币/分钟。",
      },
      {
        role: "后勤人员",
        count: 20,
        wagePerMin: 4,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「人类新家园」人力「后勤人员」20 名，工资 4 星币/分钟。",
      },
      {
        role: "监理",
        count: 10,
        wagePerMin: 12,
        shift: "三班倒",
        skill: "需相关资质认证",
        note: "「人类新家园」人力「监理」10 名，工资 12 星币/分钟。",
      },
    ],
    inspectionChecklist: [
      {
        item: "总体规划验收",
        stage: 1,
        standard: "符合星港建筑规范第 1 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「总体规划验收」：不合格则返工 60 秒。",
      },
      {
        item: "新城奠基验收",
        stage: 2,
        standard: "符合星港建筑规范第 2 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「新城奠基验收」：不合格则返工 60 秒。",
      },
      {
        item: "生态城区验收",
        stage: 3,
        standard: "符合星港建筑规范第 3 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「生态城区验收」：不合格则返工 60 秒。",
      },
      {
        item: "能源城区验收",
        stage: 4,
        standard: "符合星港建筑规范第 4 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「能源城区验收」：不合格则返工 60 秒。",
      },
      {
        item: "工业城区验收",
        stage: 5,
        standard: "符合星港建筑规范第 5 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「工业城区验收」：不合格则返工 60 秒。",
      },
      {
        item: "居住城区验收",
        stage: 6,
        standard: "符合星港建筑规范第 6 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「居住城区验收」：不合格则返工 60 秒。",
      },
      {
        item: "文化城区验收",
        stage: 7,
        standard: "符合星港建筑规范第 7 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「文化城区验收」：不合格则返工 60 秒。",
      },
      {
        item: "防御体系验收",
        stage: 8,
        standard: "符合星港建筑规范第 8 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「防御体系验收」：不合格则返工 60 秒。",
      },
      {
        item: "移民潮验收",
        stage: 9,
        standard: "符合星港建筑规范第 9 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「移民潮验收」：不合格则返工 60 秒。",
      },
      {
        item: "新家园落成验收",
        stage: 10,
        standard: "符合星港建筑规范第 10 条。",
        inspector: "市政验收组",
        result: "合格",
        note: "验收项「新家园落成验收」：不合格则返工 60 秒。",
      },
    ],
    openingCeremony: [
      {
        segment: "入场",
        durationMin: 10,
        attendees: 500,
        costCredits: 100,
        effect: "幸福度 +5",
        note: "「人类新家园」落成典礼「入场」环节，500 人参加。",
      },
      {
        segment: "致辞",
        durationMin: 20,
        attendees: 1000,
        costCredits: 200,
        effect: "幸福度 +5",
        note: "「人类新家园」落成典礼「致辞」环节，1000 人参加。",
      },
      {
        segment: "揭幕",
        durationMin: 5,
        attendees: 2000,
        costCredits: 50,
        effect: "幸福度 +5",
        note: "「人类新家园」落成典礼「揭幕」环节，2000 人参加。",
      },
      {
        segment: "巡游",
        durationMin: 30,
        attendees: 5000,
        costCredits: 300,
        effect: "幸福度 +5",
        note: "「人类新家园」落成典礼「巡游」环节，5000 人参加。",
      },
      {
        segment: "庆典",
        durationMin: 60,
        attendees: 10000,
        costCredits: 600,
        effect: "幸福度 +5",
        note: "「人类新家园」落成典礼「庆典」环节，10000 人参加。",
      },
    ],
    sustainabilityReport: [
      {
        metric: "能耗",
        score: 80,
        target: 100,
        note: "「人类新家园」可持续指标「能耗」得分 80/100。",
      },
      {
        metric: "用水",
        score: 70,
        target: 100,
        note: "「人类新家园」可持续指标「用水」得分 70/100。",
      },
      {
        metric: "排放",
        score: 90,
        target: 100,
        note: "「人类新家园」可持续指标「排放」得分 90/100。",
      },
      {
        metric: "回收率",
        score: 85,
        target: 100,
        note: "「人类新家园」可持续指标「回收率」得分 85/100。",
      },
      {
        metric: "生态影响",
        score: 75,
        target: 100,
        note: "「人类新家园」可持续指标「生态影响」得分 75/100。",
      },
    ],
  },
};

for (const _wid of Object.keys(WONDERS_V30_DETAIL3)) {
  if (WONDERS_V30[_wid]) {
    WONDERS_V30[_wid].detail3 = WONDERS_V30_DETAIL3[_wid];
    if (WONDERS_V30[_wid].detail) Object.assign(WONDERS_V30[_wid].detail, WONDERS_V30_DETAIL3[_wid]);
  }
}

function selfTestWondersV30Detail3() {
  const errors = [];
  for (const id of WONDERS_V30_ORDER) {
    const d = (WONDERS_V30[id] || {}).detail3;
    if (!d) { errors.push(id + ': 细节块3缺失'); continue; }
    const checks = [
      ['constructionJournal', 10], ['fundingPlan', 5], ['workforcePlan', 5],
      ['inspectionChecklist', 10], ['openingCeremony', 5], ['sustainabilityReport', 5],
    ];
    for (const pair of checks) {
      if (!d[pair[0]] || d[pair[0]].length !== pair[1]) errors.push(id + ': ' + pair[0] + ' 数量错误');
    }
  }
  return { total: WONDERS_V30_COUNT, errors: errors, pass: errors.length === 0 };
}

if (typeof module !== 'undefined') {
  module.exports.WONDERS_V30_DETAIL3 = WONDERS_V30_DETAIL3;
  module.exports.selfTestWondersV30Detail3 = selfTestWondersV30Detail3;
}
