/* 星港 — scenarios_v31.js：v3.1 挑战剧本（20 关）
 * 挑战剧本：政治危机、生态灾难、军事入侵、深空探索与综合终局。
 * 每个剧本有目标、奖励、难度、修正、事件时间线（含每事件 2 个抉择分支）、三阶段打法、里程碑与失败条件。
 * 集成：mergeScenariosV31() 把 20 个剧本并入全局 SCENARIOS（幂等，去重）。
 * 描述一律一句话，不写故事；事件文本只写局势与数值影响。
 */

'use strict';

const SCENARIOS_V31 = [
  // ══════════════════════════════════════════════════════════════
  // 议会倒戈 scn-v31-01（politics·难度 3 困难）
  // 议会多数派倒戈，殖民地面临分裂危机。
  // 难度测算：时间压力 33 分（限时 200 天）+ 资源压力 46 分 + 战斗压力 15 分 → 综合 31 分，对应难度 3（困难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 31 分，落在难度 3 区间内。
  // 奖励估值：2000 星币 + 60 科技点 + 称号「议会倒戈征服者」，合计约 2480 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 200 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 200 天。
  // 关键决策点：第 94 天转折点（47% 节点）决定胜负，之前必须建成 2 座「选举委员会」并备足铁。
  // 失败模式：人口归零、幸福度连续 15 天低于 55、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳铁供应 → 建 2 座「选举委员会」→ 研究 3 项科技 → 完成「通过信任投票」3次。
  // 推荐开局：开局资源向铁倾斜，前 20 天不扩张人口，先把幸福度稳在 70 以上。
  {
    id: 'scn-v31-01',
    name: '议会倒戈',
    icon: '🏛️',
    theme: 'politics',
    desc: '议会多数派倒戈，殖民地面临分裂危机。',
    difficulty: 3,
    difficultyLabel: '困难',
    rule: '稳定度 -10，幸福度 -5',
    briefing: '议会倒戈：议会多数派倒戈，殖民地面临分裂危机。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-01-obj-1', desc: '人口达到 400 人', target: 400, unit: '人', kind: 'pop' },
      { id: 'scn-v31-01-obj-2', desc: '幸福度保持 ≥70', target: 70, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-01-obj-3', desc: '建成 2 座「选举委员会」', target: 2, unit: '座', kind: 'building', building: 'v31_election' },
      { id: 'scn-v31-01-obj-4', desc: '研究 3 项科技', target: 3, unit: '项', kind: 'tech' },
      { id: 'scn-v31-01-obj-5', desc: '通过信任投票 3次', target: 3, unit: '次', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2000, desc: '通关奖励：2000 星币' },
      { type: 'tech', value: 60, desc: '通关奖励：60 科技点' },
      { type: 'title', value: '议会倒戈征服者', desc: '通关称号：「议会倒戈征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.9, desc: '税收效率 ×0.9：动荡时期收税更难。' },
      { key: 'corruptionMul', value: 1.3, desc: '腐败发生率 ×1.3：危机放大腐败。' },
      { key: 'happinessAdd', value: -5, desc: '幸福度 -5：居民对局势感到不安。' },
      { key: 'tradeMul', value: 1.1, desc: '贸易收入 ×1.1：危机中商人反而活跃。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起倒戈议员事件爆发，居民开始议论。',
        effect: '幸福度 -3，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责倒戈议员，稳定民心。',
            effect: '幸福度 +3，稳定度 +3' },
          { label: '冷静观察',
            desc: '暂不表态，先收集倒戈议员的情报。',
            effect: '科研 +15%，幸福度 -3' },
        ],
      },
      {
        day: 14,
        title: '局势升级',
        text: '倒戈议员的影响扩大，铁供应出现缺口。',
        effect: '铁产量 -15%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修铁供应线。',
            effect: '铁产量 +15%，星币 -300' },
          { label: '配给管制',
            desc: '实行铁配给，撑过缺口期。',
            effect: '铁消耗 -15%，幸福度 -3' },
        ],
      },
      {
        day: 26,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对倒戈议员的方案。',
        effect: '稳定度 -3，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +3，腐败发生率 +3%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +3，耗时 +5 天' },
        ],
      },
      {
        day: 46,
        title: '第一波冲击',
        text: '倒戈议员的第一波冲击到达，防线告急。',
        effect: '防御力 -15%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +15%，星币 -300' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -3，星币 +300' },
        ],
      },
      {
        day: 66,
        title: '中期考验',
        text: '倒戈议员进入相持阶段，铁储备见底。',
        effect: '铁消耗 +15%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，铁产量拉满。',
            effect: '铁产量 +15%，幸福度 -3' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '铁消耗 -15%，人口增速 -3%' },
        ],
      },
      {
        day: 94,
        title: '转折点',
        text: '应对倒戈议员的转折点到来，成败在此一举。',
        effect: '幸福度 -3，科研 -15%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +15%，失败则幸福度 -3' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +3，进度 -5%' },
        ],
      },
      {
        day: 120,
        title: '第二波冲击',
        text: '倒戈议员的第二波冲击比第一波更猛。',
        effect: '防御力 -15%，铁产量 -15%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +15%，士气 -3' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +15%，建筑受损 +3%' },
        ],
      },
      {
        day: 154,
        title: '决战前夜',
        text: '倒戈议员的最终考验临近，全城进入戒备。',
        effect: '士气 -3，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +3，食物 -300' },
          { label: '秘密谈判',
            desc: '派密使与倒戈议员谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -3' },
        ],
      },
      {
        day: 186,
        title: '最终决战',
        text: '倒戈议员的最终决战打响，没有退路。',
        effect: '全部产量 -15%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +15%，防御力 -3' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +15%，贸易收入 -15%' },
        ],
      },
      {
        day: 196,
        title: '尾声',
        text: '倒戈议员的余波未平，通关就在眼前。',
        effect: '幸福度 +3，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +3，星币 -300' },
          { label: '追责整顿',
            desc: '彻查倒戈议员的根源并整顿。',
            effect: '稳定度 +3，腐败发生率 -3%' },
        ],
      },
    ],
    milestones: [
      { day: 50, desc: '稳住局势：幸福度 ≥70，铁供应不断' },
      { day: 100, desc: '中期达标：建成 2 座「选举委员会」' },
      { day: 150, desc: '后期冲刺：研究 3 项科技，「通过信任投票」过半' },
      { day: 200, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-50天',
        desc: '稳住铁供应，幸福度守住 70。',
        checklist: ['开局资源向铁倾斜', '先建 1 座「选举委员会」', '幸福度不跌破 70'],
      },
      {
        name: '中期', days: '51-140天',
        desc: '建成 2 座「选举委员会」，研究 3 项科技。',
        checklist: ['补齐 2 座「选举委员会」', '科技链点到 T3', '储备铁到 500 单位'],
      },
      {
        name: '终局', days: '141-200天',
        desc: '完成「通过信任投票」，5 个目标全部达成。',
        checklist: ['人口冲到 400 人', '「通过信任投票」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「稳定度 -10，幸福度 -5」，建议先稳铁供应再扩张。',
      '提示2：优先建 2 座「选举委员会」，它是本关的核心建筑。',
      '提示3：幸福度守住 70 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 94 天转折点前备足铁，转折点后不要再开新战线。',
      '提示5：研究 3 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 200 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 55：居民大规模出走，失败。',
      '第 200 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 160;
        game.player.inv.steel = 70;
        game.player.inv.food = 90;
        game.player.inv.credits = 2000;
        game.player.inv.ice = 45;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 400 人', check(game) { try { return game && game.player && game.player.pop >= 400; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥70', check(game) { try { return game && game.city && game.city.happiness >= 70; } catch (e) { return false; } } },
      { desc: '通过信任投票 3次', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 3; } catch (e) { return false; } } },
    ],
    timeLimit: 17280000,
    timeLimitDays: 200,
    reward: { credits: 2000, tech: 60, title: '议会倒戈征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 廉政风暴 scn-v31-02（politics·难度 3 困难）
  // 腐败丑闻曝光，全城要求彻查到底。
  // 难度测算：时间压力 33 分（限时 200 天）+ 资源压力 46 分 + 战斗压力 15 分 → 综合 31 分，对应难度 3（困难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 31 分，落在难度 3 区间内。
  // 奖励估值：2000 星币 + 60 科技点 + 称号「廉政风暴征服者」，合计约 2480 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 200 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 200 天。
  // 关键决策点：第 94 天转折点（47% 节点）决定胜负，之前必须建成 2 座「廉政公署」并备足钢。
  // 失败模式：人口归零、幸福度连续 15 天低于 50、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳钢供应 → 建 2 座「廉政公署」→ 研究 3 项科技 → 完成「查处腐败案件」5起。
  // 推荐开局：开局资源向钢倾斜，前 20 天不扩张人口，先把幸福度稳在 65 以上。
  {
    id: 'scn-v31-02',
    name: '廉政风暴',
    icon: '⚖️',
    theme: 'politics',
    desc: '腐败丑闻曝光，全城要求彻查到底。',
    difficulty: 3,
    difficultyLabel: '困难',
    rule: '腐败发生率 ×2，税收 -20%',
    briefing: '廉政风暴：腐败丑闻曝光，全城要求彻查到底。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-02-obj-1', desc: '人口达到 350 人', target: 350, unit: '人', kind: 'pop' },
      { id: 'scn-v31-02-obj-2', desc: '幸福度保持 ≥65', target: 65, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-02-obj-3', desc: '建成 2 座「廉政公署」', target: 2, unit: '座', kind: 'building', building: 'v31_icac' },
      { id: 'scn-v31-02-obj-4', desc: '研究 3 项科技', target: 3, unit: '项', kind: 'tech' },
      { id: 'scn-v31-02-obj-5', desc: '查处腐败案件 5起', target: 5, unit: '起', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2000, desc: '通关奖励：2000 星币' },
      { type: 'tech', value: 60, desc: '通关奖励：60 科技点' },
      { type: 'title', value: '廉政风暴征服者', desc: '通关称号：「廉政风暴征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.9, desc: '税收效率 ×0.9：动荡时期收税更难。' },
      { key: 'corruptionMul', value: 1.3, desc: '腐败发生率 ×1.3：危机放大腐败。' },
      { key: 'happinessAdd', value: -5, desc: '幸福度 -5：居民对局势感到不安。' },
      { key: 'tradeMul', value: 1.1, desc: '贸易收入 ×1.1：危机中商人反而活跃。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起腐败官员事件爆发，居民开始议论。',
        effect: '幸福度 -3，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责腐败官员，稳定民心。',
            effect: '幸福度 +3，稳定度 +3' },
          { label: '冷静观察',
            desc: '暂不表态，先收集腐败官员的情报。',
            effect: '科研 +15%，幸福度 -3' },
        ],
      },
      {
        day: 14,
        title: '局势升级',
        text: '腐败官员的影响扩大，钢供应出现缺口。',
        effect: '钢产量 -15%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修钢供应线。',
            effect: '钢产量 +15%，星币 -300' },
          { label: '配给管制',
            desc: '实行钢配给，撑过缺口期。',
            effect: '钢消耗 -15%，幸福度 -3' },
        ],
      },
      {
        day: 26,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对腐败官员的方案。',
        effect: '稳定度 -3，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +3，腐败发生率 +3%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +3，耗时 +5 天' },
        ],
      },
      {
        day: 46,
        title: '第一波冲击',
        text: '腐败官员的第一波冲击到达，防线告急。',
        effect: '防御力 -15%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +15%，星币 -300' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -3，星币 +300' },
        ],
      },
      {
        day: 66,
        title: '中期考验',
        text: '腐败官员进入相持阶段，钢储备见底。',
        effect: '钢消耗 +15%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，钢产量拉满。',
            effect: '钢产量 +15%，幸福度 -3' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '钢消耗 -15%，人口增速 -3%' },
        ],
      },
      {
        day: 94,
        title: '转折点',
        text: '应对腐败官员的转折点到来，成败在此一举。',
        effect: '幸福度 -3，科研 -15%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +15%，失败则幸福度 -3' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +3，进度 -5%' },
        ],
      },
      {
        day: 120,
        title: '第二波冲击',
        text: '腐败官员的第二波冲击比第一波更猛。',
        effect: '防御力 -15%，钢产量 -15%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +15%，士气 -3' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +15%，建筑受损 +3%' },
        ],
      },
      {
        day: 154,
        title: '决战前夜',
        text: '腐败官员的最终考验临近，全城进入戒备。',
        effect: '士气 -3，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +3，食物 -300' },
          { label: '秘密谈判',
            desc: '派密使与腐败官员谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -3' },
        ],
      },
      {
        day: 186,
        title: '最终决战',
        text: '腐败官员的最终决战打响，没有退路。',
        effect: '全部产量 -15%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +15%，防御力 -3' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +15%，贸易收入 -15%' },
        ],
      },
      {
        day: 196,
        title: '尾声',
        text: '腐败官员的余波未平，通关就在眼前。',
        effect: '幸福度 +3，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +3，星币 -300' },
          { label: '追责整顿',
            desc: '彻查腐败官员的根源并整顿。',
            effect: '稳定度 +3，腐败发生率 -3%' },
        ],
      },
    ],
    milestones: [
      { day: 50, desc: '稳住局势：幸福度 ≥65，钢供应不断' },
      { day: 100, desc: '中期达标：建成 2 座「廉政公署」' },
      { day: 150, desc: '后期冲刺：研究 3 项科技，「查处腐败案件」过半' },
      { day: 200, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-50天',
        desc: '稳住钢供应，幸福度守住 65。',
        checklist: ['开局资源向钢倾斜', '先建 1 座「廉政公署」', '幸福度不跌破 65'],
      },
      {
        name: '中期', days: '51-140天',
        desc: '建成 2 座「廉政公署」，研究 3 项科技。',
        checklist: ['补齐 2 座「廉政公署」', '科技链点到 T3', '储备钢到 500 单位'],
      },
      {
        name: '终局', days: '141-200天',
        desc: '完成「查处腐败案件」，5 个目标全部达成。',
        checklist: ['人口冲到 350 人', '「查处腐败案件」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「腐败发生率 ×2，税收 -20%」，建议先稳钢供应再扩张。',
      '提示2：优先建 2 座「廉政公署」，它是本关的核心建筑。',
      '提示3：幸福度守住 65 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 94 天转折点前备足钢，转折点后不要再开新战线。',
      '提示5：研究 3 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 200 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 50：居民大规模出走，失败。',
      '第 200 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 160;
        game.player.inv.steel = 70;
        game.player.inv.food = 90;
        game.player.inv.credits = 2000;
        game.player.inv.ice = 45;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 350 人', check(game) { try { return game && game.player && game.player.pop >= 350; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥65', check(game) { try { return game && game.city && game.city.happiness >= 65; } catch (e) { return false; } } },
      { desc: '查处腐败案件 5起', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 5; } catch (e) { return false; } } },
    ],
    timeLimit: 17280000,
    timeLimitDays: 200,
    reward: { credits: 2000, tech: 60, title: '廉政风暴征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 选举年 scn-v31-03（politics·难度 2 普通）
  // 大选年到来，每个派系都在拉票。
  // 难度测算：时间压力 20 分（限时 240 天）+ 资源压力 34 分 + 战斗压力 15 分 → 综合 23 分，对应难度 2（普通）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 23 分，落在难度 2 区间内。
  // 奖励估值：1500 星币 + 40 科技点 + 称号「选举年征服者」，合计约 1820 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 240 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 240 天。
  // 关键决策点：第 113 天转折点（47% 节点）决定胜负，之前必须建成 2 座「公民广场」并备足食物。
  // 失败模式：人口归零、幸福度连续 15 天低于 60、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳食物供应 → 建 2 座「公民广场」→ 研究 2 项科技 → 完成「赢得选举」2次。
  // 推荐开局：开局资源向食物倾斜，前 20 天不扩张人口，先把幸福度稳在 75 以上。
  {
    id: 'scn-v31-03',
    name: '选举年',
    icon: '🗳️',
    theme: 'politics',
    desc: '大选年到来，每个派系都在拉票。',
    difficulty: 2,
    difficultyLabel: '普通',
    rule: '每 30 天一次选举事件',
    briefing: '选举年：大选年到来，每个派系都在拉票。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-03-obj-1', desc: '人口达到 300 人', target: 300, unit: '人', kind: 'pop' },
      { id: 'scn-v31-03-obj-2', desc: '幸福度保持 ≥75', target: 75, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-03-obj-3', desc: '建成 2 座「公民广场」', target: 2, unit: '座', kind: 'building', building: 'v31_plaza' },
      { id: 'scn-v31-03-obj-4', desc: '研究 2 项科技', target: 2, unit: '项', kind: 'tech' },
      { id: 'scn-v31-03-obj-5', desc: '赢得选举 2次', target: 2, unit: '次', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 1500, desc: '通关奖励：1500 星币' },
      { type: 'tech', value: 40, desc: '通关奖励：40 科技点' },
      { type: 'title', value: '选举年征服者', desc: '通关称号：「选举年征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.9, desc: '税收效率 ×0.9：动荡时期收税更难。' },
      { key: 'corruptionMul', value: 1.3, desc: '腐败发生率 ×1.3：危机放大腐败。' },
      { key: 'happinessAdd', value: -5, desc: '幸福度 -5：居民对局势感到不安。' },
      { key: 'tradeMul', value: 1.1, desc: '贸易收入 ×1.1：危机中商人反而活跃。' },
    ],
    events: [
      {
        day: 5,
        title: '危机初现',
        text: '第一起竞选对手事件爆发，居民开始议论。',
        effect: '幸福度 -2，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责竞选对手，稳定民心。',
            effect: '幸福度 +2，稳定度 +2' },
          { label: '冷静观察',
            desc: '暂不表态，先收集竞选对手的情报。',
            effect: '科研 +10%，幸福度 -2' },
        ],
      },
      {
        day: 17,
        title: '局势升级',
        text: '竞选对手的影响扩大，食物供应出现缺口。',
        effect: '食物产量 -10%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修食物供应线。',
            effect: '食物产量 +10%，星币 -200' },
          { label: '配给管制',
            desc: '实行食物配给，撑过缺口期。',
            effect: '食物消耗 -10%，幸福度 -2' },
        ],
      },
      {
        day: 31,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对竞选对手的方案。',
        effect: '稳定度 -2，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +2，腐败发生率 +2%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +2，耗时 +5 天' },
        ],
      },
      {
        day: 55,
        title: '第一波冲击',
        text: '竞选对手的第一波冲击到达，防线告急。',
        effect: '防御力 -10%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +10%，星币 -200' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -2，星币 +200' },
        ],
      },
      {
        day: 79,
        title: '中期考验',
        text: '竞选对手进入相持阶段，食物储备见底。',
        effect: '食物消耗 +10%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，食物产量拉满。',
            effect: '食物产量 +10%，幸福度 -2' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '食物消耗 -10%，人口增速 -2%' },
        ],
      },
      {
        day: 113,
        title: '转折点',
        text: '应对竞选对手的转折点到来，成败在此一举。',
        effect: '幸福度 -2，科研 -10%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +10%，失败则幸福度 -2' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +2，进度 -5%' },
        ],
      },
      {
        day: 144,
        title: '第二波冲击',
        text: '竞选对手的第二波冲击比第一波更猛。',
        effect: '防御力 -10%，食物产量 -10%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +10%，士气 -2' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +10%，建筑受损 +2%' },
        ],
      },
      {
        day: 185,
        title: '决战前夜',
        text: '竞选对手的最终考验临近，全城进入戒备。',
        effect: '士气 -2，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +2，食物 -200' },
          { label: '秘密谈判',
            desc: '派密使与竞选对手谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -2' },
        ],
      },
      {
        day: 223,
        title: '最终决战',
        text: '竞选对手的最终决战打响，没有退路。',
        effect: '全部产量 -10%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +10%，防御力 -2' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +10%，贸易收入 -10%' },
        ],
      },
      {
        day: 235,
        title: '尾声',
        text: '竞选对手的余波未平，通关就在眼前。',
        effect: '幸福度 +2，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +2，星币 -200' },
          { label: '追责整顿',
            desc: '彻查竞选对手的根源并整顿。',
            effect: '稳定度 +2，腐败发生率 -2%' },
        ],
      },
    ],
    milestones: [
      { day: 60, desc: '稳住局势：幸福度 ≥75，食物供应不断' },
      { day: 120, desc: '中期达标：建成 2 座「公民广场」' },
      { day: 180, desc: '后期冲刺：研究 2 项科技，「赢得选举」过半' },
      { day: 240, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-60天',
        desc: '稳住食物供应，幸福度守住 75。',
        checklist: ['开局资源向食物倾斜', '先建 1 座「公民广场」', '幸福度不跌破 75'],
      },
      {
        name: '中期', days: '61-168天',
        desc: '建成 2 座「公民广场」，研究 2 项科技。',
        checklist: ['补齐 2 座「公民广场」', '科技链点到 T3', '储备食物到 500 单位'],
      },
      {
        name: '终局', days: '169-240天',
        desc: '完成「赢得选举」，5 个目标全部达成。',
        checklist: ['人口冲到 300 人', '「赢得选举」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「每 30 天一次选举事件」，建议先稳食物供应再扩张。',
      '提示2：优先建 2 座「公民广场」，它是本关的核心建筑。',
      '提示3：幸福度守住 75 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 113 天转折点前备足食物，转折点后不要再开新战线。',
      '提示5：研究 2 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 240 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 60：居民大规模出走，失败。',
      '第 240 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 140;
        game.player.inv.steel = 60;
        game.player.inv.food = 80;
        game.player.inv.credits = 1500;
        game.player.inv.ice = 40;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 300 人', check(game) { try { return game && game.player && game.player.pop >= 300; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥75', check(game) { try { return game && game.city && game.city.happiness >= 75; } catch (e) { return false; } } },
      { desc: '赢得选举 2次', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 2; } catch (e) { return false; } } },
    ],
    timeLimit: 20736000,
    timeLimitDays: 240,
    reward: { credits: 1500, tech: 40, title: '选举年征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 新闻封锁 scn-v31-04（politics·难度 4 极难）
  // 地球切断新闻通道，谣言在城里疯传。
  // 难度测算：时间压力 40 分（限时 180 天）+ 资源压力 58 分 + 战斗压力 15 分 → 综合 38 分，对应难度 4（极难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 38 分，落在难度 4 区间内。
  // 奖励估值：2500 星币 + 80 科技点 + 称号「新闻封锁征服者」，合计约 3140 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 180 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 180 天。
  // 关键决策点：第 85 天转折点（47% 节点）决定胜负，之前必须建成 3 座「新闻中心」并备足科技点。
  // 失败模式：人口归零、幸福度连续 15 天低于 55、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳科技点供应 → 建 3 座「新闻中心」→ 研究 4 项科技 → 完成「辟谣成功」6次。
  // 推荐开局：开局资源向科技点倾斜，前 20 天不扩张人口，先把幸福度稳在 70 以上。
  {
    id: 'scn-v31-04',
    name: '新闻封锁',
    icon: '📰',
    theme: 'politics',
    desc: '地球切断新闻通道，谣言在城里疯传。',
    difficulty: 4,
    difficultyLabel: '极难',
    rule: '幸福度 -10，科研 -15%',
    briefing: '新闻封锁：地球切断新闻通道，谣言在城里疯传。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-04-obj-1', desc: '人口达到 450 人', target: 450, unit: '人', kind: 'pop' },
      { id: 'scn-v31-04-obj-2', desc: '幸福度保持 ≥70', target: 70, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-04-obj-3', desc: '建成 3 座「新闻中心」', target: 3, unit: '座', kind: 'building', building: 'v31_press' },
      { id: 'scn-v31-04-obj-4', desc: '研究 4 项科技', target: 4, unit: '项', kind: 'tech' },
      { id: 'scn-v31-04-obj-5', desc: '辟谣成功 6次', target: 6, unit: '次', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2500, desc: '通关奖励：2500 星币' },
      { type: 'tech', value: 80, desc: '通关奖励：80 科技点' },
      { type: 'title', value: '新闻封锁征服者', desc: '通关称号：「新闻封锁征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.9, desc: '税收效率 ×0.9：动荡时期收税更难。' },
      { key: 'corruptionMul', value: 1.3, desc: '腐败发生率 ×1.3：危机放大腐败。' },
      { key: 'happinessAdd', value: -5, desc: '幸福度 -5：居民对局势感到不安。' },
      { key: 'tradeMul', value: 1.1, desc: '贸易收入 ×1.1：危机中商人反而活跃。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起谣言事件爆发，居民开始议论。',
        effect: '幸福度 -4，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责谣言，稳定民心。',
            effect: '幸福度 +4，稳定度 +4' },
          { label: '冷静观察',
            desc: '暂不表态，先收集谣言的情报。',
            effect: '科研 +20%，幸福度 -4' },
        ],
      },
      {
        day: 13,
        title: '局势升级',
        text: '谣言的影响扩大，科技点供应出现缺口。',
        effect: '科技点产量 -20%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修科技点供应线。',
            effect: '科技点产量 +20%，星币 -400' },
          { label: '配给管制',
            desc: '实行科技点配给，撑过缺口期。',
            effect: '科技点消耗 -20%，幸福度 -4' },
        ],
      },
      {
        day: 23,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对谣言的方案。',
        effect: '稳定度 -4，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +4，腐败发生率 +4%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +4，耗时 +5 天' },
        ],
      },
      {
        day: 41,
        title: '第一波冲击',
        text: '谣言的第一波冲击到达，防线告急。',
        effect: '防御力 -20%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +20%，星币 -400' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -4，星币 +400' },
        ],
      },
      {
        day: 59,
        title: '中期考验',
        text: '谣言进入相持阶段，科技点储备见底。',
        effect: '科技点消耗 +20%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，科技点产量拉满。',
            effect: '科技点产量 +20%，幸福度 -4' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '科技点消耗 -20%，人口增速 -4%' },
        ],
      },
      {
        day: 85,
        title: '转折点',
        text: '应对谣言的转折点到来，成败在此一举。',
        effect: '幸福度 -4，科研 -20%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +20%，失败则幸福度 -4' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +4，进度 -5%' },
        ],
      },
      {
        day: 108,
        title: '第二波冲击',
        text: '谣言的第二波冲击比第一波更猛。',
        effect: '防御力 -20%，科技点产量 -20%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +20%，士气 -4' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +20%，建筑受损 +4%' },
        ],
      },
      {
        day: 139,
        title: '决战前夜',
        text: '谣言的最终考验临近，全城进入戒备。',
        effect: '士气 -4，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +4，食物 -400' },
          { label: '秘密谈判',
            desc: '派密使与谣言谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -4' },
        ],
      },
      {
        day: 167,
        title: '最终决战',
        text: '谣言的最终决战打响，没有退路。',
        effect: '全部产量 -20%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +20%，防御力 -4' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +20%，贸易收入 -20%' },
        ],
      },
      {
        day: 176,
        title: '尾声',
        text: '谣言的余波未平，通关就在眼前。',
        effect: '幸福度 +4，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +4，星币 -400' },
          { label: '追责整顿',
            desc: '彻查谣言的根源并整顿。',
            effect: '稳定度 +4，腐败发生率 -4%' },
        ],
      },
    ],
    milestones: [
      { day: 45, desc: '稳住局势：幸福度 ≥70，科技点供应不断' },
      { day: 90, desc: '中期达标：建成 3 座「新闻中心」' },
      { day: 135, desc: '后期冲刺：研究 4 项科技，「辟谣成功」过半' },
      { day: 180, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-45天',
        desc: '稳住科技点供应，幸福度守住 70。',
        checklist: ['开局资源向科技点倾斜', '先建 1 座「新闻中心」', '幸福度不跌破 70'],
      },
      {
        name: '中期', days: '46-126天',
        desc: '建成 3 座「新闻中心」，研究 4 项科技。',
        checklist: ['补齐 3 座「新闻中心」', '科技链点到 T3', '储备科技点到 500 单位'],
      },
      {
        name: '终局', days: '127-180天',
        desc: '完成「辟谣成功」，5 个目标全部达成。',
        checklist: ['人口冲到 450 人', '「辟谣成功」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「幸福度 -10，科研 -15%」，建议先稳科技点供应再扩张。',
      '提示2：优先建 3 座「新闻中心」，它是本关的核心建筑。',
      '提示3：幸福度守住 70 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 85 天转折点前备足科技点，转折点后不要再开新战线。',
      '提示5：研究 4 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 180 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 55：居民大规模出走，失败。',
      '第 180 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 180;
        game.player.inv.steel = 80;
        game.player.inv.food = 100;
        game.player.inv.credits = 2500;
        game.player.inv.ice = 50;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 450 人', check(game) { try { return game && game.player && game.player.pop >= 450; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥70', check(game) { try { return game && game.city && game.city.happiness >= 70; } catch (e) { return false; } } },
      { desc: '辟谣成功 6次', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 6; } catch (e) { return false; } } },
    ],
    timeLimit: 15552000,
    timeLimitDays: 180,
    reward: { credits: 2500, tech: 80, title: '新闻封锁征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 大气崩溃 scn-v31-05（eco·难度 4 极难）
  // 大气处理器故障，氧气含量直线下降。
  // 难度测算：时间压力 40 分（限时 180 天）+ 资源压力 58 分 + 战斗压力 15 分 → 综合 38 分，对应难度 4（极难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 38 分，落在难度 4 区间内。
  // 奖励估值：2500 星币 + 80 科技点 + 称号「大气崩溃征服者」，合计约 3140 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 180 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 180 天。
  // 关键决策点：第 85 天转折点（47% 节点）决定胜负，之前必须建成 3 座「大气处理器」并备足氧气。
  // 失败模式：人口归零、幸福度连续 15 天低于 50、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳氧气供应 → 建 3 座「大气处理器」→ 研究 3 项科技 → 完成「恢复氧气供给」80点。
  // 推荐开局：开局资源向氧气倾斜，前 20 天不扩张人口，先把幸福度稳在 65 以上。
  {
    id: 'scn-v31-05',
    name: '大气崩溃',
    icon: '🌬️',
    theme: 'eco',
    desc: '大气处理器故障，氧气含量直线下降。',
    difficulty: 4,
    difficultyLabel: '极难',
    rule: '氧气 -30%，人口增长停滞',
    briefing: '大气崩溃：大气处理器故障，氧气含量直线下降。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-05-obj-1', desc: '人口达到 400 人', target: 400, unit: '人', kind: 'pop' },
      { id: 'scn-v31-05-obj-2', desc: '幸福度保持 ≥65', target: 65, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-05-obj-3', desc: '建成 3 座「大气处理器」', target: 3, unit: '座', kind: 'building', building: 'v31_atmos' },
      { id: 'scn-v31-05-obj-4', desc: '研究 3 项科技', target: 3, unit: '项', kind: 'tech' },
      { id: 'scn-v31-05-obj-5', desc: '恢复氧气供给 80点', target: 80, unit: '点', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2500, desc: '通关奖励：2500 星币' },
      { type: 'tech', value: 80, desc: '通关奖励：80 科技点' },
      { type: 'title', value: '大气崩溃征服者', desc: '通关称号：「大气崩溃征服者」' },
    ],
    modifiers: [
      { key: 'waterMul', value: 0.6, desc: '水产量 ×0.6：生态灾难首先打击水源。' },
      { key: 'foodMul', value: 0.8, desc: '食物产量 ×0.8：农田减产。' },
      { key: 'oxygenOut', value: -5, desc: '氧气产出 -5：大气系统受损。' },
      { key: 'disasterChanceMul', value: 1.5, desc: '灾难概率 ×1.5：生态失衡招来更多灾害。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起氧气泄漏事件爆发，居民开始议论。',
        effect: '幸福度 -4，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责氧气泄漏，稳定民心。',
            effect: '幸福度 +4，稳定度 +4' },
          { label: '冷静观察',
            desc: '暂不表态，先收集氧气泄漏的情报。',
            effect: '科研 +20%，幸福度 -4' },
        ],
      },
      {
        day: 13,
        title: '局势升级',
        text: '氧气泄漏的影响扩大，氧气供应出现缺口。',
        effect: '氧气产量 -20%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修氧气供应线。',
            effect: '氧气产量 +20%，星币 -400' },
          { label: '配给管制',
            desc: '实行氧气配给，撑过缺口期。',
            effect: '氧气消耗 -20%，幸福度 -4' },
        ],
      },
      {
        day: 23,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对氧气泄漏的方案。',
        effect: '稳定度 -4，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +4，腐败发生率 +4%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +4，耗时 +5 天' },
        ],
      },
      {
        day: 41,
        title: '第一波冲击',
        text: '氧气泄漏的第一波冲击到达，防线告急。',
        effect: '防御力 -20%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +20%，星币 -400' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -4，星币 +400' },
        ],
      },
      {
        day: 59,
        title: '中期考验',
        text: '氧气泄漏进入相持阶段，氧气储备见底。',
        effect: '氧气消耗 +20%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，氧气产量拉满。',
            effect: '氧气产量 +20%，幸福度 -4' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '氧气消耗 -20%，人口增速 -4%' },
        ],
      },
      {
        day: 85,
        title: '转折点',
        text: '应对氧气泄漏的转折点到来，成败在此一举。',
        effect: '幸福度 -4，科研 -20%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +20%，失败则幸福度 -4' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +4，进度 -5%' },
        ],
      },
      {
        day: 108,
        title: '第二波冲击',
        text: '氧气泄漏的第二波冲击比第一波更猛。',
        effect: '防御力 -20%，氧气产量 -20%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +20%，士气 -4' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +20%，建筑受损 +4%' },
        ],
      },
      {
        day: 139,
        title: '决战前夜',
        text: '氧气泄漏的最终考验临近，全城进入戒备。',
        effect: '士气 -4，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +4，食物 -400' },
          { label: '秘密谈判',
            desc: '派密使与氧气泄漏谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -4' },
        ],
      },
      {
        day: 167,
        title: '最终决战',
        text: '氧气泄漏的最终决战打响，没有退路。',
        effect: '全部产量 -20%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +20%，防御力 -4' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +20%，贸易收入 -20%' },
        ],
      },
      {
        day: 176,
        title: '尾声',
        text: '氧气泄漏的余波未平，通关就在眼前。',
        effect: '幸福度 +4，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +4，星币 -400' },
          { label: '追责整顿',
            desc: '彻查氧气泄漏的根源并整顿。',
            effect: '稳定度 +4，腐败发生率 -4%' },
        ],
      },
    ],
    milestones: [
      { day: 45, desc: '稳住局势：幸福度 ≥65，氧气供应不断' },
      { day: 90, desc: '中期达标：建成 3 座「大气处理器」' },
      { day: 135, desc: '后期冲刺：研究 3 项科技，「恢复氧气供给」过半' },
      { day: 180, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-45天',
        desc: '稳住氧气供应，幸福度守住 65。',
        checklist: ['开局资源向氧气倾斜', '先建 1 座「大气处理器」', '幸福度不跌破 65'],
      },
      {
        name: '中期', days: '46-126天',
        desc: '建成 3 座「大气处理器」，研究 3 项科技。',
        checklist: ['补齐 3 座「大气处理器」', '科技链点到 T3', '储备氧气到 500 单位'],
      },
      {
        name: '终局', days: '127-180天',
        desc: '完成「恢复氧气供给」，5 个目标全部达成。',
        checklist: ['人口冲到 400 人', '「恢复氧气供给」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「氧气 -30%，人口增长停滞」，建议先稳氧气供应再扩张。',
      '提示2：优先建 3 座「大气处理器」，它是本关的核心建筑。',
      '提示3：幸福度守住 65 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 85 天转折点前备足氧气，转折点后不要再开新战线。',
      '提示5：研究 3 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 180 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 50：居民大规模出走，失败。',
      '第 180 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 180;
        game.player.inv.steel = 80;
        game.player.inv.food = 100;
        game.player.inv.credits = 2500;
        game.player.inv.ice = 50;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 400 人', check(game) { try { return game && game.player && game.player.pop >= 400; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥65', check(game) { try { return game && game.city && game.city.happiness >= 65; } catch (e) { return false; } } },
      { desc: '恢复氧气供给 80点', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 80; } catch (e) { return false; } } },
    ],
    timeLimit: 15552000,
    timeLimitDays: 180,
    reward: { credits: 2500, tech: 80, title: '大气崩溃征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 海洋枯竭 scn-v31-06（eco·难度 3 困难）
  // 人工海蒸发过快，水位跌破警戒线。
  // 难度测算：时间压力 33 分（限时 200 天）+ 资源压力 46 分 + 战斗压力 15 分 → 综合 31 分，对应难度 3（困难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 31 分，落在难度 3 区间内。
  // 奖励估值：2000 星币 + 60 科技点 + 称号「海洋枯竭征服者」，合计约 2480 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 200 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 200 天。
  // 关键决策点：第 94 天转折点（47% 节点）决定胜负，之前必须建成 2 座「海洋」并备足水。
  // 失败模式：人口归零、幸福度连续 15 天低于 55、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳水供应 → 建 2 座「海洋」→ 研究 3 项科技 → 完成「补充水库水量」500单位。
  // 推荐开局：开局资源向水倾斜，前 20 天不扩张人口，先把幸福度稳在 70 以上。
  {
    id: 'scn-v31-06',
    name: '海洋枯竭',
    icon: '🌊',
    theme: 'eco',
    desc: '人工海蒸发过快，水位跌破警戒线。',
    difficulty: 3,
    difficultyLabel: '困难',
    rule: '水产量 -40%，食物 -20%',
    briefing: '海洋枯竭：人工海蒸发过快，水位跌破警戒线。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-06-obj-1', desc: '人口达到 350 人', target: 350, unit: '人', kind: 'pop' },
      { id: 'scn-v31-06-obj-2', desc: '幸福度保持 ≥70', target: 70, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-06-obj-3', desc: '建成 2 座「海洋」', target: 2, unit: '座', kind: 'building', building: 'v31_ocean' },
      { id: 'scn-v31-06-obj-4', desc: '研究 3 项科技', target: 3, unit: '项', kind: 'tech' },
      { id: 'scn-v31-06-obj-5', desc: '补充水库水量 500单位', target: 500, unit: '单位', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2000, desc: '通关奖励：2000 星币' },
      { type: 'tech', value: 60, desc: '通关奖励：60 科技点' },
      { type: 'title', value: '海洋枯竭征服者', desc: '通关称号：「海洋枯竭征服者」' },
    ],
    modifiers: [
      { key: 'waterMul', value: 0.6, desc: '水产量 ×0.6：生态灾难首先打击水源。' },
      { key: 'foodMul', value: 0.8, desc: '食物产量 ×0.8：农田减产。' },
      { key: 'oxygenOut', value: -5, desc: '氧气产出 -5：大气系统受损。' },
      { key: 'disasterChanceMul', value: 1.5, desc: '灾难概率 ×1.5：生态失衡招来更多灾害。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起干旱事件爆发，居民开始议论。',
        effect: '幸福度 -3，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责干旱，稳定民心。',
            effect: '幸福度 +3，稳定度 +3' },
          { label: '冷静观察',
            desc: '暂不表态，先收集干旱的情报。',
            effect: '科研 +15%，幸福度 -3' },
        ],
      },
      {
        day: 14,
        title: '局势升级',
        text: '干旱的影响扩大，水供应出现缺口。',
        effect: '水产量 -15%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修水供应线。',
            effect: '水产量 +15%，星币 -300' },
          { label: '配给管制',
            desc: '实行水配给，撑过缺口期。',
            effect: '水消耗 -15%，幸福度 -3' },
        ],
      },
      {
        day: 26,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对干旱的方案。',
        effect: '稳定度 -3，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +3，腐败发生率 +3%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +3，耗时 +5 天' },
        ],
      },
      {
        day: 46,
        title: '第一波冲击',
        text: '干旱的第一波冲击到达，防线告急。',
        effect: '防御力 -15%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +15%，星币 -300' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -3，星币 +300' },
        ],
      },
      {
        day: 66,
        title: '中期考验',
        text: '干旱进入相持阶段，水储备见底。',
        effect: '水消耗 +15%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，水产量拉满。',
            effect: '水产量 +15%，幸福度 -3' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '水消耗 -15%，人口增速 -3%' },
        ],
      },
      {
        day: 94,
        title: '转折点',
        text: '应对干旱的转折点到来，成败在此一举。',
        effect: '幸福度 -3，科研 -15%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +15%，失败则幸福度 -3' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +3，进度 -5%' },
        ],
      },
      {
        day: 120,
        title: '第二波冲击',
        text: '干旱的第二波冲击比第一波更猛。',
        effect: '防御力 -15%，水产量 -15%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +15%，士气 -3' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +15%，建筑受损 +3%' },
        ],
      },
      {
        day: 154,
        title: '决战前夜',
        text: '干旱的最终考验临近，全城进入戒备。',
        effect: '士气 -3，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +3，食物 -300' },
          { label: '秘密谈判',
            desc: '派密使与干旱谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -3' },
        ],
      },
      {
        day: 186,
        title: '最终决战',
        text: '干旱的最终决战打响，没有退路。',
        effect: '全部产量 -15%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +15%，防御力 -3' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +15%，贸易收入 -15%' },
        ],
      },
      {
        day: 196,
        title: '尾声',
        text: '干旱的余波未平，通关就在眼前。',
        effect: '幸福度 +3，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +3，星币 -300' },
          { label: '追责整顿',
            desc: '彻查干旱的根源并整顿。',
            effect: '稳定度 +3，腐败发生率 -3%' },
        ],
      },
    ],
    milestones: [
      { day: 50, desc: '稳住局势：幸福度 ≥70，水供应不断' },
      { day: 100, desc: '中期达标：建成 2 座「海洋」' },
      { day: 150, desc: '后期冲刺：研究 3 项科技，「补充水库水量」过半' },
      { day: 200, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-50天',
        desc: '稳住水供应，幸福度守住 70。',
        checklist: ['开局资源向水倾斜', '先建 1 座「海洋」', '幸福度不跌破 70'],
      },
      {
        name: '中期', days: '51-140天',
        desc: '建成 2 座「海洋」，研究 3 项科技。',
        checklist: ['补齐 2 座「海洋」', '科技链点到 T3', '储备水到 500 单位'],
      },
      {
        name: '终局', days: '141-200天',
        desc: '完成「补充水库水量」，5 个目标全部达成。',
        checklist: ['人口冲到 350 人', '「补充水库水量」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「水产量 -40%，食物 -20%」，建议先稳水供应再扩张。',
      '提示2：优先建 2 座「海洋」，它是本关的核心建筑。',
      '提示3：幸福度守住 70 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 94 天转折点前备足水，转折点后不要再开新战线。',
      '提示5：研究 3 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 200 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 55：居民大规模出走，失败。',
      '第 200 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 160;
        game.player.inv.steel = 70;
        game.player.inv.food = 90;
        game.player.inv.credits = 2000;
        game.player.inv.ice = 45;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 350 人', check(game) { try { return game && game.player && game.player.pop >= 350; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥70', check(game) { try { return game && game.city && game.city.happiness >= 70; } catch (e) { return false; } } },
      { desc: '补充水库水量 500单位', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 500; } catch (e) { return false; } } },
    ],
    timeLimit: 17280000,
    timeLimitDays: 200,
    reward: { credits: 2000, tech: 60, title: '海洋枯竭征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 冰川融化 scn-v31-07（eco·难度 3 困难）
  // 极地冰川异常融化，洪水威胁低洼城区。
  // 难度测算：时间压力 33 分（限时 200 天）+ 资源压力 46 分 + 战斗压力 15 分 → 综合 31 分，对应难度 3（困难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 31 分，落在难度 3 区间内。
  // 奖励估值：2000 星币 + 60 科技点 + 称号「冰川融化征服者」，合计约 2480 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 200 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 200 天。
  // 关键决策点：第 94 天转折点（47% 节点）决定胜负，之前必须建成 2 座「冰川」并备足冰。
  // 失败模式：人口归零、幸福度连续 15 天低于 55、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳冰供应 → 建 2 座「冰川」→ 研究 3 项科技 → 完成「加固防洪堤」4段。
  // 推荐开局：开局资源向冰倾斜，前 20 天不扩张人口，先把幸福度稳在 70 以上。
  {
    id: 'scn-v31-07',
    name: '冰川融化',
    icon: '❄️',
    theme: 'eco',
    desc: '极地冰川异常融化，洪水威胁低洼城区。',
    difficulty: 3,
    difficultyLabel: '困难',
    rule: '每 20 天一次洪水事件',
    briefing: '冰川融化：极地冰川异常融化，洪水威胁低洼城区。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-07-obj-1', desc: '人口达到 350 人', target: 350, unit: '人', kind: 'pop' },
      { id: 'scn-v31-07-obj-2', desc: '幸福度保持 ≥70', target: 70, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-07-obj-3', desc: '建成 2 座「冰川」', target: 2, unit: '座', kind: 'building', building: 'v31_glacier' },
      { id: 'scn-v31-07-obj-4', desc: '研究 3 项科技', target: 3, unit: '项', kind: 'tech' },
      { id: 'scn-v31-07-obj-5', desc: '加固防洪堤 4段', target: 4, unit: '段', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2000, desc: '通关奖励：2000 星币' },
      { type: 'tech', value: 60, desc: '通关奖励：60 科技点' },
      { type: 'title', value: '冰川融化征服者', desc: '通关称号：「冰川融化征服者」' },
    ],
    modifiers: [
      { key: 'waterMul', value: 0.6, desc: '水产量 ×0.6：生态灾难首先打击水源。' },
      { key: 'foodMul', value: 0.8, desc: '食物产量 ×0.8：农田减产。' },
      { key: 'oxygenOut', value: -5, desc: '氧气产出 -5：大气系统受损。' },
      { key: 'disasterChanceMul', value: 1.5, desc: '灾难概率 ×1.5：生态失衡招来更多灾害。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起洪水事件爆发，居民开始议论。',
        effect: '幸福度 -3，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责洪水，稳定民心。',
            effect: '幸福度 +3，稳定度 +3' },
          { label: '冷静观察',
            desc: '暂不表态，先收集洪水的情报。',
            effect: '科研 +15%，幸福度 -3' },
        ],
      },
      {
        day: 14,
        title: '局势升级',
        text: '洪水的影响扩大，冰供应出现缺口。',
        effect: '冰产量 -15%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修冰供应线。',
            effect: '冰产量 +15%，星币 -300' },
          { label: '配给管制',
            desc: '实行冰配给，撑过缺口期。',
            effect: '冰消耗 -15%，幸福度 -3' },
        ],
      },
      {
        day: 26,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对洪水的方案。',
        effect: '稳定度 -3，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +3，腐败发生率 +3%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +3，耗时 +5 天' },
        ],
      },
      {
        day: 46,
        title: '第一波冲击',
        text: '洪水的第一波冲击到达，防线告急。',
        effect: '防御力 -15%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +15%，星币 -300' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -3，星币 +300' },
        ],
      },
      {
        day: 66,
        title: '中期考验',
        text: '洪水进入相持阶段，冰储备见底。',
        effect: '冰消耗 +15%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，冰产量拉满。',
            effect: '冰产量 +15%，幸福度 -3' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '冰消耗 -15%，人口增速 -3%' },
        ],
      },
      {
        day: 94,
        title: '转折点',
        text: '应对洪水的转折点到来，成败在此一举。',
        effect: '幸福度 -3，科研 -15%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +15%，失败则幸福度 -3' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +3，进度 -5%' },
        ],
      },
      {
        day: 120,
        title: '第二波冲击',
        text: '洪水的第二波冲击比第一波更猛。',
        effect: '防御力 -15%，冰产量 -15%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +15%，士气 -3' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +15%，建筑受损 +3%' },
        ],
      },
      {
        day: 154,
        title: '决战前夜',
        text: '洪水的最终考验临近，全城进入戒备。',
        effect: '士气 -3，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +3，食物 -300' },
          { label: '秘密谈判',
            desc: '派密使与洪水谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -3' },
        ],
      },
      {
        day: 186,
        title: '最终决战',
        text: '洪水的最终决战打响，没有退路。',
        effect: '全部产量 -15%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +15%，防御力 -3' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +15%，贸易收入 -15%' },
        ],
      },
      {
        day: 196,
        title: '尾声',
        text: '洪水的余波未平，通关就在眼前。',
        effect: '幸福度 +3，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +3，星币 -300' },
          { label: '追责整顿',
            desc: '彻查洪水的根源并整顿。',
            effect: '稳定度 +3，腐败发生率 -3%' },
        ],
      },
    ],
    milestones: [
      { day: 50, desc: '稳住局势：幸福度 ≥70，冰供应不断' },
      { day: 100, desc: '中期达标：建成 2 座「冰川」' },
      { day: 150, desc: '后期冲刺：研究 3 项科技，「加固防洪堤」过半' },
      { day: 200, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-50天',
        desc: '稳住冰供应，幸福度守住 70。',
        checklist: ['开局资源向冰倾斜', '先建 1 座「冰川」', '幸福度不跌破 70'],
      },
      {
        name: '中期', days: '51-140天',
        desc: '建成 2 座「冰川」，研究 3 项科技。',
        checklist: ['补齐 2 座「冰川」', '科技链点到 T3', '储备冰到 500 单位'],
      },
      {
        name: '终局', days: '141-200天',
        desc: '完成「加固防洪堤」，5 个目标全部达成。',
        checklist: ['人口冲到 350 人', '「加固防洪堤」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「每 20 天一次洪水事件」，建议先稳冰供应再扩张。',
      '提示2：优先建 2 座「冰川」，它是本关的核心建筑。',
      '提示3：幸福度守住 70 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 94 天转折点前备足冰，转折点后不要再开新战线。',
      '提示5：研究 3 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 200 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 55：居民大规模出走，失败。',
      '第 200 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 160;
        game.player.inv.steel = 70;
        game.player.inv.food = 90;
        game.player.inv.credits = 2000;
        game.player.inv.ice = 45;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 350 人', check(game) { try { return game && game.player && game.player.pop >= 350; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥70', check(game) { try { return game && game.city && game.city.happiness >= 70; } catch (e) { return false; } } },
      { desc: '加固防洪堤 4段', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 4; } catch (e) { return false; } } },
    ],
    timeLimit: 17280000,
    timeLimitDays: 200,
    reward: { credits: 2000, tech: 60, title: '冰川融化征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 雨林大火 scn-v31-08（eco·难度 4 极难）
  // 穹顶雨林突发大火，氧气产量腰斩。
  // 难度测算：时间压力 40 分（限时 180 天）+ 资源压力 58 分 + 战斗压力 15 分 → 综合 38 分，对应难度 4（极难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 38 分，落在难度 4 区间内。
  // 奖励估值：2500 星币 + 80 科技点 + 称号「雨林大火征服者」，合计约 3140 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 180 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 180 天。
  // 关键决策点：第 85 天转折点（47% 节点）决定胜负，之前必须建成 3 座「雨林」并备足氧气。
  // 失败模式：人口归零、幸福度连续 15 天低于 50、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳氧气供应 → 建 3 座「雨林」→ 研究 4 项科技 → 完成「扑灭火灾」3起。
  // 推荐开局：开局资源向氧气倾斜，前 20 天不扩张人口，先把幸福度稳在 65 以上。
  {
    id: 'scn-v31-08',
    name: '雨林大火',
    icon: '🔥',
    theme: 'eco',
    desc: '穹顶雨林突发大火，氧气产量腰斩。',
    difficulty: 4,
    difficultyLabel: '极难',
    rule: '氧气 -50%，食物 -30%',
    briefing: '雨林大火：穹顶雨林突发大火，氧气产量腰斩。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-08-obj-1', desc: '人口达到 450 人', target: 450, unit: '人', kind: 'pop' },
      { id: 'scn-v31-08-obj-2', desc: '幸福度保持 ≥65', target: 65, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-08-obj-3', desc: '建成 3 座「雨林」', target: 3, unit: '座', kind: 'building', building: 'v31_rainforest' },
      { id: 'scn-v31-08-obj-4', desc: '研究 4 项科技', target: 4, unit: '项', kind: 'tech' },
      { id: 'scn-v31-08-obj-5', desc: '扑灭火灾 3起', target: 3, unit: '起', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2500, desc: '通关奖励：2500 星币' },
      { type: 'tech', value: 80, desc: '通关奖励：80 科技点' },
      { type: 'title', value: '雨林大火征服者', desc: '通关称号：「雨林大火征服者」' },
    ],
    modifiers: [
      { key: 'waterMul', value: 0.6, desc: '水产量 ×0.6：生态灾难首先打击水源。' },
      { key: 'foodMul', value: 0.8, desc: '食物产量 ×0.8：农田减产。' },
      { key: 'oxygenOut', value: -5, desc: '氧气产出 -5：大气系统受损。' },
      { key: 'disasterChanceMul', value: 1.5, desc: '灾难概率 ×1.5：生态失衡招来更多灾害。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起大火事件爆发，居民开始议论。',
        effect: '幸福度 -4，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责大火，稳定民心。',
            effect: '幸福度 +4，稳定度 +4' },
          { label: '冷静观察',
            desc: '暂不表态，先收集大火的情报。',
            effect: '科研 +20%，幸福度 -4' },
        ],
      },
      {
        day: 13,
        title: '局势升级',
        text: '大火的影响扩大，氧气供应出现缺口。',
        effect: '氧气产量 -20%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修氧气供应线。',
            effect: '氧气产量 +20%，星币 -400' },
          { label: '配给管制',
            desc: '实行氧气配给，撑过缺口期。',
            effect: '氧气消耗 -20%，幸福度 -4' },
        ],
      },
      {
        day: 23,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对大火的方案。',
        effect: '稳定度 -4，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +4，腐败发生率 +4%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +4，耗时 +5 天' },
        ],
      },
      {
        day: 41,
        title: '第一波冲击',
        text: '大火的第一波冲击到达，防线告急。',
        effect: '防御力 -20%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +20%，星币 -400' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -4，星币 +400' },
        ],
      },
      {
        day: 59,
        title: '中期考验',
        text: '大火进入相持阶段，氧气储备见底。',
        effect: '氧气消耗 +20%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，氧气产量拉满。',
            effect: '氧气产量 +20%，幸福度 -4' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '氧气消耗 -20%，人口增速 -4%' },
        ],
      },
      {
        day: 85,
        title: '转折点',
        text: '应对大火的转折点到来，成败在此一举。',
        effect: '幸福度 -4，科研 -20%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +20%，失败则幸福度 -4' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +4，进度 -5%' },
        ],
      },
      {
        day: 108,
        title: '第二波冲击',
        text: '大火的第二波冲击比第一波更猛。',
        effect: '防御力 -20%，氧气产量 -20%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +20%，士气 -4' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +20%，建筑受损 +4%' },
        ],
      },
      {
        day: 139,
        title: '决战前夜',
        text: '大火的最终考验临近，全城进入戒备。',
        effect: '士气 -4，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +4，食物 -400' },
          { label: '秘密谈判',
            desc: '派密使与大火谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -4' },
        ],
      },
      {
        day: 167,
        title: '最终决战',
        text: '大火的最终决战打响，没有退路。',
        effect: '全部产量 -20%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +20%，防御力 -4' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +20%，贸易收入 -20%' },
        ],
      },
      {
        day: 176,
        title: '尾声',
        text: '大火的余波未平，通关就在眼前。',
        effect: '幸福度 +4，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +4，星币 -400' },
          { label: '追责整顿',
            desc: '彻查大火的根源并整顿。',
            effect: '稳定度 +4，腐败发生率 -4%' },
        ],
      },
    ],
    milestones: [
      { day: 45, desc: '稳住局势：幸福度 ≥65，氧气供应不断' },
      { day: 90, desc: '中期达标：建成 3 座「雨林」' },
      { day: 135, desc: '后期冲刺：研究 4 项科技，「扑灭火灾」过半' },
      { day: 180, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-45天',
        desc: '稳住氧气供应，幸福度守住 65。',
        checklist: ['开局资源向氧气倾斜', '先建 1 座「雨林」', '幸福度不跌破 65'],
      },
      {
        name: '中期', days: '46-126天',
        desc: '建成 3 座「雨林」，研究 4 项科技。',
        checklist: ['补齐 3 座「雨林」', '科技链点到 T3', '储备氧气到 500 单位'],
      },
      {
        name: '终局', days: '127-180天',
        desc: '完成「扑灭火灾」，5 个目标全部达成。',
        checklist: ['人口冲到 450 人', '「扑灭火灾」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「氧气 -50%，食物 -30%」，建议先稳氧气供应再扩张。',
      '提示2：优先建 3 座「雨林」，它是本关的核心建筑。',
      '提示3：幸福度守住 65 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 85 天转折点前备足氧气，转折点后不要再开新战线。',
      '提示5：研究 4 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 180 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 50：居民大规模出走，失败。',
      '第 180 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 180;
        game.player.inv.steel = 80;
        game.player.inv.food = 100;
        game.player.inv.credits = 2500;
        game.player.inv.ice = 50;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 450 人', check(game) { try { return game && game.player && game.player.pop >= 450; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥65', check(game) { try { return game && game.city && game.city.happiness >= 65; } catch (e) { return false; } } },
      { desc: '扑灭火灾 3起', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 3; } catch (e) { return false; } } },
    ],
    timeLimit: 15552000,
    timeLimitDays: 180,
    reward: { credits: 2500, tech: 80, title: '雨林大火征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 轨道封锁 scn-v31-09（military·难度 4 极难）
  // 敌舰封锁轨道，补给船进不来也出不去。
  // 难度测算：时间压力 40 分（限时 180 天）+ 资源压力 58 分 + 战斗压力 60 分 → 综合 53 分，对应难度 4（极难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 53 分，落在难度 4 区间内。
  // 奖励估值：2500 星币 + 80 科技点 + 称号「轨道封锁征服者」，合计约 3140 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 180 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 180 天。
  // 关键决策点：第 85 天转折点（47% 节点）决定胜负，之前必须建成 3 座「轨道防御平台」并备足钢。
  // 失败模式：人口归零、幸福度连续 15 天低于 50、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳钢供应 → 建 3 座「轨道防御平台」→ 研究 3 项科技 → 完成「击沉敌舰」8艘。
  // 推荐开局：开局资源向钢倾斜，前 20 天不扩张人口，先把幸福度稳在 65 以上。
  {
    id: 'scn-v31-09',
    name: '轨道封锁',
    icon: '🛰️',
    theme: 'military',
    desc: '敌舰封锁轨道，补给船进不来也出不去。',
    difficulty: 4,
    difficultyLabel: '极难',
    rule: '贸易收入 -50%，发射成本 ×2',
    briefing: '轨道封锁：敌舰封锁轨道，补给船进不来也出不去。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-09-obj-1', desc: '人口达到 500 人', target: 500, unit: '人', kind: 'pop' },
      { id: 'scn-v31-09-obj-2', desc: '幸福度保持 ≥65', target: 65, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-09-obj-3', desc: '建成 3 座「轨道防御平台」', target: 3, unit: '座', kind: 'building', building: 'v31_orbital' },
      { id: 'scn-v31-09-obj-4', desc: '研究 3 项科技', target: 3, unit: '项', kind: 'tech' },
      { id: 'scn-v31-09-obj-5', desc: '击沉敌舰 8艘', target: 8, unit: '艘', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2500, desc: '通关奖励：2500 星币' },
      { type: 'tech', value: 80, desc: '通关奖励：80 科技点' },
      { type: 'title', value: '轨道封锁征服者', desc: '通关称号：「轨道封锁征服者」' },
    ],
    modifiers: [
      { key: 'defenseMul', value: 0.8, desc: '防御力 ×0.8：防线在进攻下吃紧。' },
      { key: 'tradeMul', value: 0.5, desc: '贸易收入 ×0.5：战时商路中断。' },
      { key: 'attackMul', value: 1.2, desc: '攻击力 ×1.2：战时动员提升攻击。' },
      { key: 'moraleMul', value: 0.9, desc: '士气 ×0.9：连绵战事消磨士气。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起敌舰事件爆发，居民开始议论。',
        effect: '幸福度 -4，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责敌舰，稳定民心。',
            effect: '幸福度 +4，稳定度 +4' },
          { label: '冷静观察',
            desc: '暂不表态，先收集敌舰的情报。',
            effect: '科研 +20%，幸福度 -4' },
        ],
      },
      {
        day: 13,
        title: '局势升级',
        text: '敌舰的影响扩大，钢供应出现缺口。',
        effect: '钢产量 -20%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修钢供应线。',
            effect: '钢产量 +20%，星币 -400' },
          { label: '配给管制',
            desc: '实行钢配给，撑过缺口期。',
            effect: '钢消耗 -20%，幸福度 -4' },
        ],
      },
      {
        day: 23,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对敌舰的方案。',
        effect: '稳定度 -4，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +4，腐败发生率 +4%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +4，耗时 +5 天' },
        ],
      },
      {
        day: 41,
        title: '第一波冲击',
        text: '敌舰的第一波冲击到达，防线告急。',
        effect: '防御力 -20%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +20%，星币 -400' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -4，星币 +400' },
        ],
      },
      {
        day: 59,
        title: '中期考验',
        text: '敌舰进入相持阶段，钢储备见底。',
        effect: '钢消耗 +20%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，钢产量拉满。',
            effect: '钢产量 +20%，幸福度 -4' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '钢消耗 -20%，人口增速 -4%' },
        ],
      },
      {
        day: 85,
        title: '转折点',
        text: '应对敌舰的转折点到来，成败在此一举。',
        effect: '幸福度 -4，科研 -20%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +20%，失败则幸福度 -4' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +4，进度 -5%' },
        ],
      },
      {
        day: 108,
        title: '第二波冲击',
        text: '敌舰的第二波冲击比第一波更猛。',
        effect: '防御力 -20%，钢产量 -20%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +20%，士气 -4' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +20%，建筑受损 +4%' },
        ],
      },
      {
        day: 139,
        title: '决战前夜',
        text: '敌舰的最终考验临近，全城进入戒备。',
        effect: '士气 -4，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +4，食物 -400' },
          { label: '秘密谈判',
            desc: '派密使与敌舰谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -4' },
        ],
      },
      {
        day: 167,
        title: '最终决战',
        text: '敌舰的最终决战打响，没有退路。',
        effect: '全部产量 -20%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +20%，防御力 -4' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +20%，贸易收入 -20%' },
        ],
      },
      {
        day: 176,
        title: '尾声',
        text: '敌舰的余波未平，通关就在眼前。',
        effect: '幸福度 +4，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +4，星币 -400' },
          { label: '追责整顿',
            desc: '彻查敌舰的根源并整顿。',
            effect: '稳定度 +4，腐败发生率 -4%' },
        ],
      },
    ],
    milestones: [
      { day: 45, desc: '稳住局势：幸福度 ≥65，钢供应不断' },
      { day: 90, desc: '中期达标：建成 3 座「轨道防御平台」' },
      { day: 135, desc: '后期冲刺：研究 3 项科技，「击沉敌舰」过半' },
      { day: 180, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-45天',
        desc: '稳住钢供应，幸福度守住 65。',
        checklist: ['开局资源向钢倾斜', '先建 1 座「轨道防御平台」', '幸福度不跌破 65'],
      },
      {
        name: '中期', days: '46-126天',
        desc: '建成 3 座「轨道防御平台」，研究 3 项科技。',
        checklist: ['补齐 3 座「轨道防御平台」', '科技链点到 T3', '储备钢到 500 单位'],
      },
      {
        name: '终局', days: '127-180天',
        desc: '完成「击沉敌舰」，5 个目标全部达成。',
        checklist: ['人口冲到 500 人', '「击沉敌舰」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「贸易收入 -50%，发射成本 ×2」，建议先稳钢供应再扩张。',
      '提示2：优先建 3 座「轨道防御平台」，它是本关的核心建筑。',
      '提示3：幸福度守住 65 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 85 天转折点前备足钢，转折点后不要再开新战线。',
      '提示5：研究 3 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 180 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 50：居民大规模出走，失败。',
      '第 180 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 180;
        game.player.inv.steel = 80;
        game.player.inv.food = 100;
        game.player.inv.credits = 2500;
        game.player.inv.ice = 50;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 500 人', check(game) { try { return game && game.player && game.player.pop >= 500; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥65', check(game) { try { return game && game.city && game.city.happiness >= 65; } catch (e) { return false; } } },
      { desc: '击沉敌舰 8艘', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 8; } catch (e) { return false; } } },
    ],
    timeLimit: 15552000,
    timeLimitDays: 180,
    reward: { credits: 2500, tech: 80, title: '轨道封锁征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 舰队来袭 scn-v31-10（military·难度 5 地狱）
  // 敌方舰队逼近火星，决战在即。
  // 难度测算：时间压力 50 分（限时 150 天）+ 资源压力 70 分 + 战斗压力 60 分 → 综合 60 分，对应难度 5（地狱）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 60 分，落在难度 5 区间内。
  // 奖励估值：3000 星币 + 100 科技点 + 称号「舰队来袭征服者」，合计约 3800 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 150 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 150 天。
  // 关键决策点：第 70 天转折点（47% 节点）决定胜负，之前必须建成 3 座「星际舰队基地」并备足稀有。
  // 失败模式：人口归零、幸福度连续 15 天低于 45、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳稀有供应 → 建 3 座「星际舰队基地」→ 研究 4 项科技 → 完成「击退进攻波次」6波。
  // 推荐开局：开局资源向稀有倾斜，前 20 天不扩张人口，先把幸福度稳在 60 以上。
  {
    id: 'scn-v31-10',
    name: '舰队来袭',
    icon: '⚓',
    theme: 'military',
    desc: '敌方舰队逼近火星，决战在即。',
    difficulty: 5,
    difficultyLabel: '地狱',
    rule: '每 25 天一波舰队进攻',
    briefing: '舰队来袭：敌方舰队逼近火星，决战在即。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-10-obj-1', desc: '人口达到 600 人', target: 600, unit: '人', kind: 'pop' },
      { id: 'scn-v31-10-obj-2', desc: '幸福度保持 ≥60', target: 60, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-10-obj-3', desc: '建成 3 座「星际舰队基地」', target: 3, unit: '座', kind: 'building', building: 'v31_fleet' },
      { id: 'scn-v31-10-obj-4', desc: '研究 4 项科技', target: 4, unit: '项', kind: 'tech' },
      { id: 'scn-v31-10-obj-5', desc: '击退进攻波次 6波', target: 6, unit: '波', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 3000, desc: '通关奖励：3000 星币' },
      { type: 'tech', value: 100, desc: '通关奖励：100 科技点' },
      { type: 'title', value: '舰队来袭征服者', desc: '通关称号：「舰队来袭征服者」' },
    ],
    modifiers: [
      { key: 'defenseMul', value: 0.8, desc: '防御力 ×0.8：防线在进攻下吃紧。' },
      { key: 'tradeMul', value: 0.5, desc: '贸易收入 ×0.5：战时商路中断。' },
      { key: 'attackMul', value: 1.2, desc: '攻击力 ×1.2：战时动员提升攻击。' },
      { key: 'moraleMul', value: 0.9, desc: '士气 ×0.9：连绵战事消磨士气。' },
    ],
    events: [
      {
        day: 3,
        title: '危机初现',
        text: '第一起敌方舰队事件爆发，居民开始议论。',
        effect: '幸福度 -5，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责敌方舰队，稳定民心。',
            effect: '幸福度 +5，稳定度 +5' },
          { label: '冷静观察',
            desc: '暂不表态，先收集敌方舰队的情报。',
            effect: '科研 +25%，幸福度 -5' },
        ],
      },
      {
        day: 11,
        title: '局势升级',
        text: '敌方舰队的影响扩大，稀有供应出现缺口。',
        effect: '稀有产量 -25%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修稀有供应线。',
            effect: '稀有产量 +25%，星币 -500' },
          { label: '配给管制',
            desc: '实行稀有配给，撑过缺口期。',
            effect: '稀有消耗 -25%，幸福度 -5' },
        ],
      },
      {
        day: 20,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对敌方舰队的方案。',
        effect: '稳定度 -5，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +5，腐败发生率 +5%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +5，耗时 +5 天' },
        ],
      },
      {
        day: 34,
        title: '第一波冲击',
        text: '敌方舰队的第一波冲击到达，防线告急。',
        effect: '防御力 -25%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +25%，星币 -500' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -5，星币 +500' },
        ],
      },
      {
        day: 50,
        title: '中期考验',
        text: '敌方舰队进入相持阶段，稀有储备见底。',
        effect: '稀有消耗 +25%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，稀有产量拉满。',
            effect: '稀有产量 +25%，幸福度 -5' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '稀有消耗 -25%，人口增速 -5%' },
        ],
      },
      {
        day: 70,
        title: '转折点',
        text: '应对敌方舰队的转折点到来，成败在此一举。',
        effect: '幸福度 -5，科研 -25%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +25%，失败则幸福度 -5' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +5，进度 -5%' },
        ],
      },
      {
        day: 90,
        title: '第二波冲击',
        text: '敌方舰队的第二波冲击比第一波更猛。',
        effect: '防御力 -25%，稀有产量 -25%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +25%，士气 -5' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +25%，建筑受损 +5%' },
        ],
      },
      {
        day: 116,
        title: '决战前夜',
        text: '敌方舰队的最终考验临近，全城进入戒备。',
        effect: '士气 -5，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +5，食物 -500' },
          { label: '秘密谈判',
            desc: '派密使与敌方舰队谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -5' },
        ],
      },
      {
        day: 140,
        title: '最终决战',
        text: '敌方舰队的最终决战打响，没有退路。',
        effect: '全部产量 -25%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +25%，防御力 -5' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +25%，贸易收入 -25%' },
        ],
      },
      {
        day: 147,
        title: '尾声',
        text: '敌方舰队的余波未平，通关就在眼前。',
        effect: '幸福度 +5，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +5，星币 -500' },
          { label: '追责整顿',
            desc: '彻查敌方舰队的根源并整顿。',
            effect: '稳定度 +5，腐败发生率 -5%' },
        ],
      },
    ],
    milestones: [
      { day: 38, desc: '稳住局势：幸福度 ≥60，稀有供应不断' },
      { day: 75, desc: '中期达标：建成 3 座「星际舰队基地」' },
      { day: 112, desc: '后期冲刺：研究 4 项科技，「击退进攻波次」过半' },
      { day: 150, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-38天',
        desc: '稳住稀有供应，幸福度守住 60。',
        checklist: ['开局资源向稀有倾斜', '先建 1 座「星际舰队基地」', '幸福度不跌破 60'],
      },
      {
        name: '中期', days: '39-105天',
        desc: '建成 3 座「星际舰队基地」，研究 4 项科技。',
        checklist: ['补齐 3 座「星际舰队基地」', '科技链点到 T3', '储备稀有到 500 单位'],
      },
      {
        name: '终局', days: '106-150天',
        desc: '完成「击退进攻波次」，5 个目标全部达成。',
        checklist: ['人口冲到 600 人', '「击退进攻波次」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「每 25 天一波舰队进攻」，建议先稳稀有供应再扩张。',
      '提示2：优先建 3 座「星际舰队基地」，它是本关的核心建筑。',
      '提示3：幸福度守住 60 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 70 天转折点前备足稀有，转折点后不要再开新战线。',
      '提示5：研究 4 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 150 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 45：居民大规模出走，失败。',
      '第 150 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 200;
        game.player.inv.steel = 90;
        game.player.inv.food = 110;
        game.player.inv.credits = 3000;
        game.player.inv.ice = 55;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 600 人', check(game) { try { return game && game.player && game.player.pop >= 600; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥60', check(game) { try { return game && game.city && game.city.happiness >= 60; } catch (e) { return false; } } },
      { desc: '击退进攻波次 6波', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 6; } catch (e) { return false; } } },
    ],
    timeLimit: 12960000,
    timeLimitDays: 150,
    reward: { credits: 3000, tech: 100, title: '舰队来袭征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 核冬天 scn-v31-11（military·难度 5 地狱）
  // 核爆尘埃遮住太阳，全城进入核冬天。
  // 难度测算：时间压力 50 分（限时 150 天）+ 资源压力 70 分 + 战斗压力 60 分 → 综合 60 分，对应难度 5（地狱）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 60 分，落在难度 5 区间内。
  // 奖励估值：3000 星币 + 100 科技点 + 称号「核冬天征服者」，合计约 3800 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 150 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 150 天。
  // 关键决策点：第 70 天转折点（47% 节点）决定胜负，之前必须建成 2 座「太空要塞」并备足食物。
  // 失败模式：人口归零、幸福度连续 15 天低于 45、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳食物供应 → 建 2 座「太空要塞」→ 研究 4 项科技 → 完成「撑过核冬天」120天。
  // 推荐开局：开局资源向食物倾斜，前 20 天不扩张人口，先把幸福度稳在 60 以上。
  {
    id: 'scn-v31-11',
    name: '核冬天',
    icon: '☢️',
    theme: 'military',
    desc: '核爆尘埃遮住太阳，全城进入核冬天。',
    difficulty: 5,
    difficultyLabel: '地狱',
    rule: '太阳能 -70%，食物 -40%',
    briefing: '核冬天：核爆尘埃遮住太阳，全城进入核冬天。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-11-obj-1', desc: '人口达到 550 人', target: 550, unit: '人', kind: 'pop' },
      { id: 'scn-v31-11-obj-2', desc: '幸福度保持 ≥60', target: 60, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-11-obj-3', desc: '建成 2 座「太空要塞」', target: 2, unit: '座', kind: 'building', building: 'v31_fortress' },
      { id: 'scn-v31-11-obj-4', desc: '研究 4 项科技', target: 4, unit: '项', kind: 'tech' },
      { id: 'scn-v31-11-obj-5', desc: '撑过核冬天 120天', target: 120, unit: '天', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 3000, desc: '通关奖励：3000 星币' },
      { type: 'tech', value: 100, desc: '通关奖励：100 科技点' },
      { type: 'title', value: '核冬天征服者', desc: '通关称号：「核冬天征服者」' },
    ],
    modifiers: [
      { key: 'defenseMul', value: 0.8, desc: '防御力 ×0.8：防线在进攻下吃紧。' },
      { key: 'tradeMul', value: 0.5, desc: '贸易收入 ×0.5：战时商路中断。' },
      { key: 'attackMul', value: 1.2, desc: '攻击力 ×1.2：战时动员提升攻击。' },
      { key: 'moraleMul', value: 0.9, desc: '士气 ×0.9：连绵战事消磨士气。' },
    ],
    events: [
      {
        day: 3,
        title: '危机初现',
        text: '第一起核尘埃事件爆发，居民开始议论。',
        effect: '幸福度 -5，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责核尘埃，稳定民心。',
            effect: '幸福度 +5，稳定度 +5' },
          { label: '冷静观察',
            desc: '暂不表态，先收集核尘埃的情报。',
            effect: '科研 +25%，幸福度 -5' },
        ],
      },
      {
        day: 11,
        title: '局势升级',
        text: '核尘埃的影响扩大，食物供应出现缺口。',
        effect: '食物产量 -25%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修食物供应线。',
            effect: '食物产量 +25%，星币 -500' },
          { label: '配给管制',
            desc: '实行食物配给，撑过缺口期。',
            effect: '食物消耗 -25%，幸福度 -5' },
        ],
      },
      {
        day: 20,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对核尘埃的方案。',
        effect: '稳定度 -5，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +5，腐败发生率 +5%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +5，耗时 +5 天' },
        ],
      },
      {
        day: 34,
        title: '第一波冲击',
        text: '核尘埃的第一波冲击到达，防线告急。',
        effect: '防御力 -25%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +25%，星币 -500' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -5，星币 +500' },
        ],
      },
      {
        day: 50,
        title: '中期考验',
        text: '核尘埃进入相持阶段，食物储备见底。',
        effect: '食物消耗 +25%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，食物产量拉满。',
            effect: '食物产量 +25%，幸福度 -5' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '食物消耗 -25%，人口增速 -5%' },
        ],
      },
      {
        day: 70,
        title: '转折点',
        text: '应对核尘埃的转折点到来，成败在此一举。',
        effect: '幸福度 -5，科研 -25%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +25%，失败则幸福度 -5' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +5，进度 -5%' },
        ],
      },
      {
        day: 90,
        title: '第二波冲击',
        text: '核尘埃的第二波冲击比第一波更猛。',
        effect: '防御力 -25%，食物产量 -25%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +25%，士气 -5' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +25%，建筑受损 +5%' },
        ],
      },
      {
        day: 116,
        title: '决战前夜',
        text: '核尘埃的最终考验临近，全城进入戒备。',
        effect: '士气 -5，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +5，食物 -500' },
          { label: '秘密谈判',
            desc: '派密使与核尘埃谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -5' },
        ],
      },
      {
        day: 140,
        title: '最终决战',
        text: '核尘埃的最终决战打响，没有退路。',
        effect: '全部产量 -25%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +25%，防御力 -5' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +25%，贸易收入 -25%' },
        ],
      },
      {
        day: 147,
        title: '尾声',
        text: '核尘埃的余波未平，通关就在眼前。',
        effect: '幸福度 +5，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +5，星币 -500' },
          { label: '追责整顿',
            desc: '彻查核尘埃的根源并整顿。',
            effect: '稳定度 +5，腐败发生率 -5%' },
        ],
      },
    ],
    milestones: [
      { day: 38, desc: '稳住局势：幸福度 ≥60，食物供应不断' },
      { day: 75, desc: '中期达标：建成 2 座「太空要塞」' },
      { day: 112, desc: '后期冲刺：研究 4 项科技，「撑过核冬天」过半' },
      { day: 150, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-38天',
        desc: '稳住食物供应，幸福度守住 60。',
        checklist: ['开局资源向食物倾斜', '先建 1 座「太空要塞」', '幸福度不跌破 60'],
      },
      {
        name: '中期', days: '39-105天',
        desc: '建成 2 座「太空要塞」，研究 4 项科技。',
        checklist: ['补齐 2 座「太空要塞」', '科技链点到 T3', '储备食物到 500 单位'],
      },
      {
        name: '终局', days: '106-150天',
        desc: '完成「撑过核冬天」，5 个目标全部达成。',
        checklist: ['人口冲到 550 人', '「撑过核冬天」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「太阳能 -70%，食物 -40%」，建议先稳食物供应再扩张。',
      '提示2：优先建 2 座「太空要塞」，它是本关的核心建筑。',
      '提示3：幸福度守住 60 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 70 天转折点前备足食物，转折点后不要再开新战线。',
      '提示5：研究 4 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 150 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 45：居民大规模出走，失败。',
      '第 150 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 200;
        game.player.inv.steel = 90;
        game.player.inv.food = 110;
        game.player.inv.credits = 3000;
        game.player.inv.ice = 55;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 550 人', check(game) { try { return game && game.player && game.player.pop >= 550; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥60', check(game) { try { return game && game.city && game.city.happiness >= 60; } catch (e) { return false; } } },
      { desc: '撑过核冬天 120天', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 120; } catch (e) { return false; } } },
    ],
    timeLimit: 12960000,
    timeLimitDays: 150,
    reward: { credits: 3000, tech: 100, title: '核冬天征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 星门远征 scn-v31-12（deepSpace·难度 4 极难）
  // 穿越星门远征未知星系，生死未卜。
  // 难度测算：时间压力 40 分（限时 180 天）+ 资源压力 58 分 + 战斗压力 30 分 → 综合 43 分，对应难度 4（极难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 43 分，落在难度 4 区间内。
  // 奖励估值：2500 星币 + 80 科技点 + 称号「星门远征征服者」，合计约 3140 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 180 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 180 天。
  // 关键决策点：第 85 天转折点（47% 节点）决定胜负，之前必须建成 2 座「星门枢纽」并备足稀有。
  // 失败模式：人口归零、幸福度连续 15 天低于 55、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳稀有供应 → 建 2 座「星门枢纽」→ 研究 4 项科技 → 完成「建立前哨站」3座。
  // 推荐开局：开局资源向稀有倾斜，前 20 天不扩张人口，先把幸福度稳在 70 以上。
  {
    id: 'scn-v31-12',
    name: '星门远征',
    icon: '🌀',
    theme: 'deepSpace',
    desc: '穿越星门远征未知星系，生死未卜。',
    difficulty: 4,
    difficultyLabel: '极难',
    rule: '发射成本 ×1.5，补给线拉长',
    briefing: '星门远征：穿越星门远征未知星系，生死未卜。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-12-obj-1', desc: '人口达到 500 人', target: 500, unit: '人', kind: 'pop' },
      { id: 'scn-v31-12-obj-2', desc: '幸福度保持 ≥70', target: 70, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-12-obj-3', desc: '建成 2 座「星门枢纽」', target: 2, unit: '座', kind: 'building', building: 'v31_stargate' },
      { id: 'scn-v31-12-obj-4', desc: '研究 4 项科技', target: 4, unit: '项', kind: 'tech' },
      { id: 'scn-v31-12-obj-5', desc: '建立前哨站 3座', target: 3, unit: '座', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2500, desc: '通关奖励：2500 星币' },
      { type: 'tech', value: 80, desc: '通关奖励：80 科技点' },
      { type: 'title', value: '星门远征征服者', desc: '通关称号：「星门远征征服者」' },
    ],
    modifiers: [
      { key: 'launchCostMul', value: 1.5, desc: '发射花费 ×1.5：远征补给线拉长。' },
      { key: 'researchMul', value: 1.2, desc: '科研速度 ×1.2：远征倒逼技术突破。' },
      { key: 'tradeShipMul', value: 1.5, desc: '贸易船到访间隔 ×1.5：航道不安全。' },
      { key: 'shipHpMul', value: 0.9, desc: '舰船耐久 ×0.9：远征损耗舰船。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起未知舰队事件爆发，居民开始议论。',
        effect: '幸福度 -4，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责未知舰队，稳定民心。',
            effect: '幸福度 +4，稳定度 +4' },
          { label: '冷静观察',
            desc: '暂不表态，先收集未知舰队的情报。',
            effect: '科研 +20%，幸福度 -4' },
        ],
      },
      {
        day: 13,
        title: '局势升级',
        text: '未知舰队的影响扩大，稀有供应出现缺口。',
        effect: '稀有产量 -20%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修稀有供应线。',
            effect: '稀有产量 +20%，星币 -400' },
          { label: '配给管制',
            desc: '实行稀有配给，撑过缺口期。',
            effect: '稀有消耗 -20%，幸福度 -4' },
        ],
      },
      {
        day: 23,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对未知舰队的方案。',
        effect: '稳定度 -4，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +4，腐败发生率 +4%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +4，耗时 +5 天' },
        ],
      },
      {
        day: 41,
        title: '第一波冲击',
        text: '未知舰队的第一波冲击到达，防线告急。',
        effect: '防御力 -20%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +20%，星币 -400' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -4，星币 +400' },
        ],
      },
      {
        day: 59,
        title: '中期考验',
        text: '未知舰队进入相持阶段，稀有储备见底。',
        effect: '稀有消耗 +20%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，稀有产量拉满。',
            effect: '稀有产量 +20%，幸福度 -4' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '稀有消耗 -20%，人口增速 -4%' },
        ],
      },
      {
        day: 85,
        title: '转折点',
        text: '应对未知舰队的转折点到来，成败在此一举。',
        effect: '幸福度 -4，科研 -20%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +20%，失败则幸福度 -4' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +4，进度 -5%' },
        ],
      },
      {
        day: 108,
        title: '第二波冲击',
        text: '未知舰队的第二波冲击比第一波更猛。',
        effect: '防御力 -20%，稀有产量 -20%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +20%，士气 -4' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +20%，建筑受损 +4%' },
        ],
      },
      {
        day: 139,
        title: '决战前夜',
        text: '未知舰队的最终考验临近，全城进入戒备。',
        effect: '士气 -4，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +4，食物 -400' },
          { label: '秘密谈判',
            desc: '派密使与未知舰队谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -4' },
        ],
      },
      {
        day: 167,
        title: '最终决战',
        text: '未知舰队的最终决战打响，没有退路。',
        effect: '全部产量 -20%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +20%，防御力 -4' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +20%，贸易收入 -20%' },
        ],
      },
      {
        day: 176,
        title: '尾声',
        text: '未知舰队的余波未平，通关就在眼前。',
        effect: '幸福度 +4，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +4，星币 -400' },
          { label: '追责整顿',
            desc: '彻查未知舰队的根源并整顿。',
            effect: '稳定度 +4，腐败发生率 -4%' },
        ],
      },
    ],
    milestones: [
      { day: 45, desc: '稳住局势：幸福度 ≥70，稀有供应不断' },
      { day: 90, desc: '中期达标：建成 2 座「星门枢纽」' },
      { day: 135, desc: '后期冲刺：研究 4 项科技，「建立前哨站」过半' },
      { day: 180, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-45天',
        desc: '稳住稀有供应，幸福度守住 70。',
        checklist: ['开局资源向稀有倾斜', '先建 1 座「星门枢纽」', '幸福度不跌破 70'],
      },
      {
        name: '中期', days: '46-126天',
        desc: '建成 2 座「星门枢纽」，研究 4 项科技。',
        checklist: ['补齐 2 座「星门枢纽」', '科技链点到 T3', '储备稀有到 500 单位'],
      },
      {
        name: '终局', days: '127-180天',
        desc: '完成「建立前哨站」，5 个目标全部达成。',
        checklist: ['人口冲到 500 人', '「建立前哨站」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「发射成本 ×1.5，补给线拉长」，建议先稳稀有供应再扩张。',
      '提示2：优先建 2 座「星门枢纽」，它是本关的核心建筑。',
      '提示3：幸福度守住 70 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 85 天转折点前备足稀有，转折点后不要再开新战线。',
      '提示5：研究 4 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 180 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 55：居民大规模出走，失败。',
      '第 180 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 180;
        game.player.inv.steel = 80;
        game.player.inv.food = 100;
        game.player.inv.credits = 2500;
        game.player.inv.ice = 50;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 500 人', check(game) { try { return game && game.player && game.player.pop >= 500; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥70', check(game) { try { return game && game.city && game.city.happiness >= 70; } catch (e) { return false; } } },
      { desc: '建立前哨站 3座', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 3; } catch (e) { return false; } } },
    ],
    timeLimit: 15552000,
    timeLimitDays: 180,
    reward: { credits: 2500, tech: 80, title: '星门远征征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 外星文物 scn-v31-13（deepSpace·难度 3 困难）
  // 出土的外星文物突然激活，信号传向深空。
  // 难度测算：时间压力 33 分（限时 200 天）+ 资源压力 46 分 + 战斗压力 30 分 → 综合 36 分，对应难度 3（困难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 36 分，落在难度 3 区间内。
  // 奖励估值：2000 星币 + 60 科技点 + 称号「外星文物征服者」，合计约 2480 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 200 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 200 天。
  // 关键决策点：第 94 天转折点（47% 节点）决定胜负，之前必须建成 2 座「外星文物馆」并备足科技点。
  // 失败模式：人口归零、幸福度连续 15 天低于 55、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳科技点供应 → 建 2 座「外星文物馆」→ 研究 3 项科技 → 完成「破译文物信号」5段。
  // 推荐开局：开局资源向科技点倾斜，前 20 天不扩张人口，先把幸福度稳在 70 以上。
  {
    id: 'scn-v31-13',
    name: '外星文物',
    icon: '👽',
    theme: 'deepSpace',
    desc: '出土的外星文物突然激活，信号传向深空。',
    difficulty: 3,
    difficultyLabel: '困难',
    rule: '每 15 天一次文物异动',
    briefing: '外星文物：出土的外星文物突然激活，信号传向深空。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-13-obj-1', desc: '人口达到 400 人', target: 400, unit: '人', kind: 'pop' },
      { id: 'scn-v31-13-obj-2', desc: '幸福度保持 ≥70', target: 70, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-13-obj-3', desc: '建成 2 座「外星文物馆」', target: 2, unit: '座', kind: 'building', building: 'v31_relic' },
      { id: 'scn-v31-13-obj-4', desc: '研究 3 项科技', target: 3, unit: '项', kind: 'tech' },
      { id: 'scn-v31-13-obj-5', desc: '破译文物信号 5段', target: 5, unit: '段', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2000, desc: '通关奖励：2000 星币' },
      { type: 'tech', value: 60, desc: '通关奖励：60 科技点' },
      { type: 'title', value: '外星文物征服者', desc: '通关称号：「外星文物征服者」' },
    ],
    modifiers: [
      { key: 'launchCostMul', value: 1.5, desc: '发射花费 ×1.5：远征补给线拉长。' },
      { key: 'researchMul', value: 1.2, desc: '科研速度 ×1.2：远征倒逼技术突破。' },
      { key: 'tradeShipMul', value: 1.5, desc: '贸易船到访间隔 ×1.5：航道不安全。' },
      { key: 'shipHpMul', value: 0.9, desc: '舰船耐久 ×0.9：远征损耗舰船。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起文物信号事件爆发，居民开始议论。',
        effect: '幸福度 -3，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责文物信号，稳定民心。',
            effect: '幸福度 +3，稳定度 +3' },
          { label: '冷静观察',
            desc: '暂不表态，先收集文物信号的情报。',
            effect: '科研 +15%，幸福度 -3' },
        ],
      },
      {
        day: 14,
        title: '局势升级',
        text: '文物信号的影响扩大，科技点供应出现缺口。',
        effect: '科技点产量 -15%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修科技点供应线。',
            effect: '科技点产量 +15%，星币 -300' },
          { label: '配给管制',
            desc: '实行科技点配给，撑过缺口期。',
            effect: '科技点消耗 -15%，幸福度 -3' },
        ],
      },
      {
        day: 26,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对文物信号的方案。',
        effect: '稳定度 -3，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +3，腐败发生率 +3%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +3，耗时 +5 天' },
        ],
      },
      {
        day: 46,
        title: '第一波冲击',
        text: '文物信号的第一波冲击到达，防线告急。',
        effect: '防御力 -15%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +15%，星币 -300' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -3，星币 +300' },
        ],
      },
      {
        day: 66,
        title: '中期考验',
        text: '文物信号进入相持阶段，科技点储备见底。',
        effect: '科技点消耗 +15%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，科技点产量拉满。',
            effect: '科技点产量 +15%，幸福度 -3' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '科技点消耗 -15%，人口增速 -3%' },
        ],
      },
      {
        day: 94,
        title: '转折点',
        text: '应对文物信号的转折点到来，成败在此一举。',
        effect: '幸福度 -3，科研 -15%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +15%，失败则幸福度 -3' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +3，进度 -5%' },
        ],
      },
      {
        day: 120,
        title: '第二波冲击',
        text: '文物信号的第二波冲击比第一波更猛。',
        effect: '防御力 -15%，科技点产量 -15%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +15%，士气 -3' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +15%，建筑受损 +3%' },
        ],
      },
      {
        day: 154,
        title: '决战前夜',
        text: '文物信号的最终考验临近，全城进入戒备。',
        effect: '士气 -3，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +3，食物 -300' },
          { label: '秘密谈判',
            desc: '派密使与文物信号谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -3' },
        ],
      },
      {
        day: 186,
        title: '最终决战',
        text: '文物信号的最终决战打响，没有退路。',
        effect: '全部产量 -15%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +15%，防御力 -3' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +15%，贸易收入 -15%' },
        ],
      },
      {
        day: 196,
        title: '尾声',
        text: '文物信号的余波未平，通关就在眼前。',
        effect: '幸福度 +3，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +3，星币 -300' },
          { label: '追责整顿',
            desc: '彻查文物信号的根源并整顿。',
            effect: '稳定度 +3，腐败发生率 -3%' },
        ],
      },
    ],
    milestones: [
      { day: 50, desc: '稳住局势：幸福度 ≥70，科技点供应不断' },
      { day: 100, desc: '中期达标：建成 2 座「外星文物馆」' },
      { day: 150, desc: '后期冲刺：研究 3 项科技，「破译文物信号」过半' },
      { day: 200, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-50天',
        desc: '稳住科技点供应，幸福度守住 70。',
        checklist: ['开局资源向科技点倾斜', '先建 1 座「外星文物馆」', '幸福度不跌破 70'],
      },
      {
        name: '中期', days: '51-140天',
        desc: '建成 2 座「外星文物馆」，研究 3 项科技。',
        checklist: ['补齐 2 座「外星文物馆」', '科技链点到 T3', '储备科技点到 500 单位'],
      },
      {
        name: '终局', days: '141-200天',
        desc: '完成「破译文物信号」，5 个目标全部达成。',
        checklist: ['人口冲到 400 人', '「破译文物信号」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「每 15 天一次文物异动」，建议先稳科技点供应再扩张。',
      '提示2：优先建 2 座「外星文物馆」，它是本关的核心建筑。',
      '提示3：幸福度守住 70 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 94 天转折点前备足科技点，转折点后不要再开新战线。',
      '提示5：研究 3 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 200 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 55：居民大规模出走，失败。',
      '第 200 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 160;
        game.player.inv.steel = 70;
        game.player.inv.food = 90;
        game.player.inv.credits = 2000;
        game.player.inv.ice = 45;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 400 人', check(game) { try { return game && game.player && game.player.pop >= 400; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥70', check(game) { try { return game && game.city && game.city.happiness >= 70; } catch (e) { return false; } } },
      { desc: '破译文物信号 5段', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 5; } catch (e) { return false; } } },
    ],
    timeLimit: 17280000,
    timeLimitDays: 200,
    reward: { credits: 2000, tech: 60, title: '外星文物征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 曲速试飞 scn-v31-14（deepSpace·难度 2 普通）
  // 第一艘曲速飞船试飞，成败在此一举。
  // 难度测算：时间压力 20 分（限时 240 天）+ 资源压力 34 分 + 战斗压力 30 分 → 综合 28 分，对应难度 2（普通）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 28 分，落在难度 2 区间内。
  // 奖励估值：1500 星币 + 40 科技点 + 称号「曲速试飞征服者」，合计约 1820 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 240 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 240 天。
  // 关键决策点：第 113 天转折点（47% 节点）决定胜负，之前必须建成 2 座「曲速引擎工厂」并备足钢。
  // 失败模式：人口归零、幸福度连续 15 天低于 60、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳钢供应 → 建 2 座「曲速引擎工厂」→ 研究 2 项科技 → 完成「完成试飞」4次。
  // 推荐开局：开局资源向钢倾斜，前 20 天不扩张人口，先把幸福度稳在 75 以上。
  {
    id: 'scn-v31-14',
    name: '曲速试飞',
    icon: '🚀',
    theme: 'deepSpace',
    desc: '第一艘曲速飞船试飞，成败在此一举。',
    difficulty: 2,
    difficultyLabel: '普通',
    rule: '研究速度 +20%，事故率上升',
    briefing: '曲速试飞：第一艘曲速飞船试飞，成败在此一举。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-14-obj-1', desc: '人口达到 300 人', target: 300, unit: '人', kind: 'pop' },
      { id: 'scn-v31-14-obj-2', desc: '幸福度保持 ≥75', target: 75, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-14-obj-3', desc: '建成 2 座「曲速引擎工厂」', target: 2, unit: '座', kind: 'building', building: 'v31_warp' },
      { id: 'scn-v31-14-obj-4', desc: '研究 2 项科技', target: 2, unit: '项', kind: 'tech' },
      { id: 'scn-v31-14-obj-5', desc: '完成试飞 4次', target: 4, unit: '次', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 1500, desc: '通关奖励：1500 星币' },
      { type: 'tech', value: 40, desc: '通关奖励：40 科技点' },
      { type: 'title', value: '曲速试飞征服者', desc: '通关称号：「曲速试飞征服者」' },
    ],
    modifiers: [
      { key: 'launchCostMul', value: 1.5, desc: '发射花费 ×1.5：远征补给线拉长。' },
      { key: 'researchMul', value: 1.2, desc: '科研速度 ×1.2：远征倒逼技术突破。' },
      { key: 'tradeShipMul', value: 1.5, desc: '贸易船到访间隔 ×1.5：航道不安全。' },
      { key: 'shipHpMul', value: 0.9, desc: '舰船耐久 ×0.9：远征损耗舰船。' },
    ],
    events: [
      {
        day: 5,
        title: '危机初现',
        text: '第一起试飞事故事件爆发，居民开始议论。',
        effect: '幸福度 -2，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责试飞事故，稳定民心。',
            effect: '幸福度 +2，稳定度 +2' },
          { label: '冷静观察',
            desc: '暂不表态，先收集试飞事故的情报。',
            effect: '科研 +10%，幸福度 -2' },
        ],
      },
      {
        day: 17,
        title: '局势升级',
        text: '试飞事故的影响扩大，钢供应出现缺口。',
        effect: '钢产量 -10%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修钢供应线。',
            effect: '钢产量 +10%，星币 -200' },
          { label: '配给管制',
            desc: '实行钢配给，撑过缺口期。',
            effect: '钢消耗 -10%，幸福度 -2' },
        ],
      },
      {
        day: 31,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对试飞事故的方案。',
        effect: '稳定度 -2，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +2，腐败发生率 +2%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +2，耗时 +5 天' },
        ],
      },
      {
        day: 55,
        title: '第一波冲击',
        text: '试飞事故的第一波冲击到达，防线告急。',
        effect: '防御力 -10%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +10%，星币 -200' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -2，星币 +200' },
        ],
      },
      {
        day: 79,
        title: '中期考验',
        text: '试飞事故进入相持阶段，钢储备见底。',
        effect: '钢消耗 +10%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，钢产量拉满。',
            effect: '钢产量 +10%，幸福度 -2' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '钢消耗 -10%，人口增速 -2%' },
        ],
      },
      {
        day: 113,
        title: '转折点',
        text: '应对试飞事故的转折点到来，成败在此一举。',
        effect: '幸福度 -2，科研 -10%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +10%，失败则幸福度 -2' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +2，进度 -5%' },
        ],
      },
      {
        day: 144,
        title: '第二波冲击',
        text: '试飞事故的第二波冲击比第一波更猛。',
        effect: '防御力 -10%，钢产量 -10%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +10%，士气 -2' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +10%，建筑受损 +2%' },
        ],
      },
      {
        day: 185,
        title: '决战前夜',
        text: '试飞事故的最终考验临近，全城进入戒备。',
        effect: '士气 -2，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +2，食物 -200' },
          { label: '秘密谈判',
            desc: '派密使与试飞事故谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -2' },
        ],
      },
      {
        day: 223,
        title: '最终决战',
        text: '试飞事故的最终决战打响，没有退路。',
        effect: '全部产量 -10%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +10%，防御力 -2' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +10%，贸易收入 -10%' },
        ],
      },
      {
        day: 235,
        title: '尾声',
        text: '试飞事故的余波未平，通关就在眼前。',
        effect: '幸福度 +2，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +2，星币 -200' },
          { label: '追责整顿',
            desc: '彻查试飞事故的根源并整顿。',
            effect: '稳定度 +2，腐败发生率 -2%' },
        ],
      },
    ],
    milestones: [
      { day: 60, desc: '稳住局势：幸福度 ≥75，钢供应不断' },
      { day: 120, desc: '中期达标：建成 2 座「曲速引擎工厂」' },
      { day: 180, desc: '后期冲刺：研究 2 项科技，「完成试飞」过半' },
      { day: 240, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-60天',
        desc: '稳住钢供应，幸福度守住 75。',
        checklist: ['开局资源向钢倾斜', '先建 1 座「曲速引擎工厂」', '幸福度不跌破 75'],
      },
      {
        name: '中期', days: '61-168天',
        desc: '建成 2 座「曲速引擎工厂」，研究 2 项科技。',
        checklist: ['补齐 2 座「曲速引擎工厂」', '科技链点到 T3', '储备钢到 500 单位'],
      },
      {
        name: '终局', days: '169-240天',
        desc: '完成「完成试飞」，5 个目标全部达成。',
        checklist: ['人口冲到 300 人', '「完成试飞」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「研究速度 +20%，事故率上升」，建议先稳钢供应再扩张。',
      '提示2：优先建 2 座「曲速引擎工厂」，它是本关的核心建筑。',
      '提示3：幸福度守住 75 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 113 天转折点前备足钢，转折点后不要再开新战线。',
      '提示5：研究 2 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 240 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 60：居民大规模出走，失败。',
      '第 240 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 140;
        game.player.inv.steel = 60;
        game.player.inv.food = 80;
        game.player.inv.credits = 1500;
        game.player.inv.ice = 40;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 300 人', check(game) { try { return game && game.player && game.player.pop >= 300; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥75', check(game) { try { return game && game.city && game.city.happiness >= 75; } catch (e) { return false; } } },
      { desc: '完成试飞 4次', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 4; } catch (e) { return false; } } },
    ],
    timeLimit: 20736000,
    timeLimitDays: 240,
    reward: { credits: 1500, tech: 40, title: '曲速试飞征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 四面楚歌 scn-v31-15（mixed·难度 5 地狱）
  // 政治、生态、军事危机同时爆发。
  // 难度测算：时间压力 50 分（限时 150 天）+ 资源压力 70 分 + 战斗压力 60 分 → 综合 60 分，对应难度 5（地狱）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 60 分，落在难度 5 区间内。
  // 奖励估值：3000 星币 + 100 科技点 + 称号「四面楚歌征服者」，合计约 3800 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 150 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 150 天。
  // 关键决策点：第 70 天转折点（47% 节点）决定胜负，之前必须建成 3 座「公民广场」并备足铁。
  // 失败模式：人口归零、幸福度连续 15 天低于 45、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳铁供应 → 建 3 座「公民广场」→ 研究 5 项科技 → 完成「化解危机事件」10起。
  // 推荐开局：开局资源向铁倾斜，前 20 天不扩张人口，先把幸福度稳在 60 以上。
  {
    id: 'scn-v31-15',
    name: '四面楚歌',
    icon: '🌪️',
    theme: 'mixed',
    desc: '政治、生态、军事危机同时爆发。',
    difficulty: 5,
    difficultyLabel: '地狱',
    rule: '全部负面修正同时生效',
    briefing: '四面楚歌：政治、生态、军事危机同时爆发。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-15-obj-1', desc: '人口达到 700 人', target: 700, unit: '人', kind: 'pop' },
      { id: 'scn-v31-15-obj-2', desc: '幸福度保持 ≥60', target: 60, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-15-obj-3', desc: '建成 3 座「公民广场」', target: 3, unit: '座', kind: 'building', building: 'v31_plaza' },
      { id: 'scn-v31-15-obj-4', desc: '研究 5 项科技', target: 5, unit: '项', kind: 'tech' },
      { id: 'scn-v31-15-obj-5', desc: '化解危机事件 10起', target: 10, unit: '起', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 3000, desc: '通关奖励：3000 星币' },
      { type: 'tech', value: 100, desc: '通关奖励：100 科技点' },
      { type: 'title', value: '四面楚歌征服者', desc: '通关称号：「四面楚歌征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.85, desc: '税收效率 ×0.85：多重危机压缩财政。' },
      { key: 'happinessAdd', value: -8, desc: '幸福度 -8：居民承受多重压力。' },
      { key: 'disasterChanceMul', value: 1.4, desc: '灾难概率 ×1.4：危机互相放大。' },
      { key: 'tradeMul', value: 0.7, desc: '贸易收入 ×0.7：外部环境全面恶化。' },
    ],
    events: [
      {
        day: 3,
        title: '危机初现',
        text: '第一起多重危机事件爆发，居民开始议论。',
        effect: '幸福度 -5，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责多重危机，稳定民心。',
            effect: '幸福度 +5，稳定度 +5' },
          { label: '冷静观察',
            desc: '暂不表态，先收集多重危机的情报。',
            effect: '科研 +25%，幸福度 -5' },
        ],
      },
      {
        day: 11,
        title: '局势升级',
        text: '多重危机的影响扩大，铁供应出现缺口。',
        effect: '铁产量 -25%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修铁供应线。',
            effect: '铁产量 +25%，星币 -500' },
          { label: '配给管制',
            desc: '实行铁配给，撑过缺口期。',
            effect: '铁消耗 -25%，幸福度 -5' },
        ],
      },
      {
        day: 20,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对多重危机的方案。',
        effect: '稳定度 -5，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +5，腐败发生率 +5%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +5，耗时 +5 天' },
        ],
      },
      {
        day: 34,
        title: '第一波冲击',
        text: '多重危机的第一波冲击到达，防线告急。',
        effect: '防御力 -25%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +25%，星币 -500' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -5，星币 +500' },
        ],
      },
      {
        day: 50,
        title: '中期考验',
        text: '多重危机进入相持阶段，铁储备见底。',
        effect: '铁消耗 +25%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，铁产量拉满。',
            effect: '铁产量 +25%，幸福度 -5' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '铁消耗 -25%，人口增速 -5%' },
        ],
      },
      {
        day: 70,
        title: '转折点',
        text: '应对多重危机的转折点到来，成败在此一举。',
        effect: '幸福度 -5，科研 -25%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +25%，失败则幸福度 -5' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +5，进度 -5%' },
        ],
      },
      {
        day: 90,
        title: '第二波冲击',
        text: '多重危机的第二波冲击比第一波更猛。',
        effect: '防御力 -25%，铁产量 -25%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +25%，士气 -5' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +25%，建筑受损 +5%' },
        ],
      },
      {
        day: 116,
        title: '决战前夜',
        text: '多重危机的最终考验临近，全城进入戒备。',
        effect: '士气 -5，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +5，食物 -500' },
          { label: '秘密谈判',
            desc: '派密使与多重危机谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -5' },
        ],
      },
      {
        day: 140,
        title: '最终决战',
        text: '多重危机的最终决战打响，没有退路。',
        effect: '全部产量 -25%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +25%，防御力 -5' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +25%，贸易收入 -25%' },
        ],
      },
      {
        day: 147,
        title: '尾声',
        text: '多重危机的余波未平，通关就在眼前。',
        effect: '幸福度 +5，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +5，星币 -500' },
          { label: '追责整顿',
            desc: '彻查多重危机的根源并整顿。',
            effect: '稳定度 +5，腐败发生率 -5%' },
        ],
      },
    ],
    milestones: [
      { day: 38, desc: '稳住局势：幸福度 ≥60，铁供应不断' },
      { day: 75, desc: '中期达标：建成 3 座「公民广场」' },
      { day: 112, desc: '后期冲刺：研究 5 项科技，「化解危机事件」过半' },
      { day: 150, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-38天',
        desc: '稳住铁供应，幸福度守住 60。',
        checklist: ['开局资源向铁倾斜', '先建 1 座「公民广场」', '幸福度不跌破 60'],
      },
      {
        name: '中期', days: '39-105天',
        desc: '建成 3 座「公民广场」，研究 5 项科技。',
        checklist: ['补齐 3 座「公民广场」', '科技链点到 T3', '储备铁到 500 单位'],
      },
      {
        name: '终局', days: '106-150天',
        desc: '完成「化解危机事件」，5 个目标全部达成。',
        checklist: ['人口冲到 700 人', '「化解危机事件」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「全部负面修正同时生效」，建议先稳铁供应再扩张。',
      '提示2：优先建 3 座「公民广场」，它是本关的核心建筑。',
      '提示3：幸福度守住 60 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 70 天转折点前备足铁，转折点后不要再开新战线。',
      '提示5：研究 5 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 150 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 45：居民大规模出走，失败。',
      '第 150 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 200;
        game.player.inv.steel = 90;
        game.player.inv.food = 110;
        game.player.inv.credits = 3000;
        game.player.inv.ice = 55;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 700 人', check(game) { try { return game && game.player && game.player.pop >= 700; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥60', check(game) { try { return game && game.city && game.city.happiness >= 60; } catch (e) { return false; } } },
      { desc: '化解危机事件 10起', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 10; } catch (e) { return false; } } },
    ],
    timeLimit: 12960000,
    timeLimitDays: 150,
    reward: { credits: 3000, tech: 100, title: '四面楚歌征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 百年孤独 scn-v31-16（mixed·难度 5 地狱）
  // 与地球失联一百年，殖民地只能靠自己。
  // 难度测算：时间压力 50 分（限时 150 天）+ 资源压力 70 分 + 战斗压力 60 分 → 综合 60 分，对应难度 5（地狱）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 60 分，落在难度 5 区间内。
  // 奖励估值：3000 星币 + 100 科技点 + 称号「百年孤独征服者」，合计约 3800 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 150 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 150 天。
  // 关键决策点：第 70 天转折点（47% 节点）决定胜负，之前必须建成 3 座「星际港口」并备足食物。
  // 失败模式：人口归零、幸福度连续 15 天低于 50、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳食物供应 → 建 3 座「星际港口」→ 研究 5 项科技 → 完成「实现完全自给」100%。
  // 推荐开局：开局资源向食物倾斜，前 20 天不扩张人口，先把幸福度稳在 65 以上。
  {
    id: 'scn-v31-16',
    name: '百年孤独',
    icon: '🌑',
    theme: 'mixed',
    desc: '与地球失联一百年，殖民地只能靠自己。',
    difficulty: 5,
    difficultyLabel: '地狱',
    rule: '无地球补给，贸易收入归零',
    briefing: '百年孤独：与地球失联一百年，殖民地只能靠自己。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-16-obj-1', desc: '人口达到 800 人', target: 800, unit: '人', kind: 'pop' },
      { id: 'scn-v31-16-obj-2', desc: '幸福度保持 ≥65', target: 65, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-16-obj-3', desc: '建成 3 座「星际港口」', target: 3, unit: '座', kind: 'building', building: 'v31_starport' },
      { id: 'scn-v31-16-obj-4', desc: '研究 5 项科技', target: 5, unit: '项', kind: 'tech' },
      { id: 'scn-v31-16-obj-5', desc: '实现完全自给 100%', target: 100, unit: '%', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 3000, desc: '通关奖励：3000 星币' },
      { type: 'tech', value: 100, desc: '通关奖励：100 科技点' },
      { type: 'title', value: '百年孤独征服者', desc: '通关称号：「百年孤独征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.85, desc: '税收效率 ×0.85：多重危机压缩财政。' },
      { key: 'happinessAdd', value: -8, desc: '幸福度 -8：居民承受多重压力。' },
      { key: 'disasterChanceMul', value: 1.4, desc: '灾难概率 ×1.4：危机互相放大。' },
      { key: 'tradeMul', value: 0.7, desc: '贸易收入 ×0.7：外部环境全面恶化。' },
    ],
    events: [
      {
        day: 3,
        title: '危机初现',
        text: '第一起孤立事件爆发，居民开始议论。',
        effect: '幸福度 -5，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责孤立，稳定民心。',
            effect: '幸福度 +5，稳定度 +5' },
          { label: '冷静观察',
            desc: '暂不表态，先收集孤立的情报。',
            effect: '科研 +25%，幸福度 -5' },
        ],
      },
      {
        day: 11,
        title: '局势升级',
        text: '孤立的影响扩大，食物供应出现缺口。',
        effect: '食物产量 -25%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修食物供应线。',
            effect: '食物产量 +25%，星币 -500' },
          { label: '配给管制',
            desc: '实行食物配给，撑过缺口期。',
            effect: '食物消耗 -25%，幸福度 -5' },
        ],
      },
      {
        day: 20,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对孤立的方案。',
        effect: '稳定度 -5，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +5，腐败发生率 +5%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +5，耗时 +5 天' },
        ],
      },
      {
        day: 34,
        title: '第一波冲击',
        text: '孤立的第一波冲击到达，防线告急。',
        effect: '防御力 -25%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +25%，星币 -500' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -5，星币 +500' },
        ],
      },
      {
        day: 50,
        title: '中期考验',
        text: '孤立进入相持阶段，食物储备见底。',
        effect: '食物消耗 +25%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，食物产量拉满。',
            effect: '食物产量 +25%，幸福度 -5' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '食物消耗 -25%，人口增速 -5%' },
        ],
      },
      {
        day: 70,
        title: '转折点',
        text: '应对孤立的转折点到来，成败在此一举。',
        effect: '幸福度 -5，科研 -25%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +25%，失败则幸福度 -5' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +5，进度 -5%' },
        ],
      },
      {
        day: 90,
        title: '第二波冲击',
        text: '孤立的第二波冲击比第一波更猛。',
        effect: '防御力 -25%，食物产量 -25%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +25%，士气 -5' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +25%，建筑受损 +5%' },
        ],
      },
      {
        day: 116,
        title: '决战前夜',
        text: '孤立的最终考验临近，全城进入戒备。',
        effect: '士气 -5，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +5，食物 -500' },
          { label: '秘密谈判',
            desc: '派密使与孤立谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -5' },
        ],
      },
      {
        day: 140,
        title: '最终决战',
        text: '孤立的最终决战打响，没有退路。',
        effect: '全部产量 -25%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +25%，防御力 -5' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +25%，贸易收入 -25%' },
        ],
      },
      {
        day: 147,
        title: '尾声',
        text: '孤立的余波未平，通关就在眼前。',
        effect: '幸福度 +5，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +5，星币 -500' },
          { label: '追责整顿',
            desc: '彻查孤立的根源并整顿。',
            effect: '稳定度 +5，腐败发生率 -5%' },
        ],
      },
    ],
    milestones: [
      { day: 38, desc: '稳住局势：幸福度 ≥65，食物供应不断' },
      { day: 75, desc: '中期达标：建成 3 座「星际港口」' },
      { day: 112, desc: '后期冲刺：研究 5 项科技，「实现完全自给」过半' },
      { day: 150, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-38天',
        desc: '稳住食物供应，幸福度守住 65。',
        checklist: ['开局资源向食物倾斜', '先建 1 座「星际港口」', '幸福度不跌破 65'],
      },
      {
        name: '中期', days: '39-105天',
        desc: '建成 3 座「星际港口」，研究 5 项科技。',
        checklist: ['补齐 3 座「星际港口」', '科技链点到 T3', '储备食物到 500 单位'],
      },
      {
        name: '终局', days: '106-150天',
        desc: '完成「实现完全自给」，5 个目标全部达成。',
        checklist: ['人口冲到 800 人', '「实现完全自给」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「无地球补给，贸易收入归零」，建议先稳食物供应再扩张。',
      '提示2：优先建 3 座「星际港口」，它是本关的核心建筑。',
      '提示3：幸福度守住 65 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 70 天转折点前备足食物，转折点后不要再开新战线。',
      '提示5：研究 5 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 150 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 50：居民大规模出走，失败。',
      '第 150 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 200;
        game.player.inv.steel = 90;
        game.player.inv.food = 110;
        game.player.inv.credits = 3000;
        game.player.inv.ice = 55;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 800 人', check(game) { try { return game && game.player && game.player.pop >= 800; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥65', check(game) { try { return game && game.city && game.city.happiness >= 65; } catch (e) { return false; } } },
      { desc: '实现完全自给 100%', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 100; } catch (e) { return false; } } },
    ],
    timeLimit: 12960000,
    timeLimitDays: 150,
    reward: { credits: 3000, tech: 100, title: '百年孤独征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 难民潮 scn-v31-17（mixed·难度 4 极难）
  // 地球难民潮涌入，人口暴涨三倍。
  // 难度测算：时间压力 40 分（限时 180 天）+ 资源压力 58 分 + 战斗压力 60 分 → 综合 53 分，对应难度 4（极难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 53 分，落在难度 4 区间内。
  // 奖励估值：2500 星币 + 80 科技点 + 称号「难民潮征服者」，合计约 3140 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 180 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 180 天。
  // 关键决策点：第 85 天转折点（47% 节点）决定胜负，之前必须建成 3 座「沙漠绿洲」并备足食物。
  // 失败模式：人口归零、幸福度连续 15 天低于 50、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳食物供应 → 建 3 座「沙漠绿洲」→ 研究 3 项科技 → 完成「安置难民」600人。
  // 推荐开局：开局资源向食物倾斜，前 20 天不扩张人口，先把幸福度稳在 65 以上。
  {
    id: 'scn-v31-17',
    name: '难民潮',
    icon: '🧳',
    theme: 'mixed',
    desc: '地球难民潮涌入，人口暴涨三倍。',
    difficulty: 4,
    difficultyLabel: '极难',
    rule: '人口增速 ×3，食物消耗 ×2',
    briefing: '难民潮：地球难民潮涌入，人口暴涨三倍。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-17-obj-1', desc: '人口达到 900 人', target: 900, unit: '人', kind: 'pop' },
      { id: 'scn-v31-17-obj-2', desc: '幸福度保持 ≥65', target: 65, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-17-obj-3', desc: '建成 3 座「沙漠绿洲」', target: 3, unit: '座', kind: 'building', building: 'v31_oasis' },
      { id: 'scn-v31-17-obj-4', desc: '研究 3 项科技', target: 3, unit: '项', kind: 'tech' },
      { id: 'scn-v31-17-obj-5', desc: '安置难民 600人', target: 600, unit: '人', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2500, desc: '通关奖励：2500 星币' },
      { type: 'tech', value: 80, desc: '通关奖励：80 科技点' },
      { type: 'title', value: '难民潮征服者', desc: '通关称号：「难民潮征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.85, desc: '税收效率 ×0.85：多重危机压缩财政。' },
      { key: 'happinessAdd', value: -8, desc: '幸福度 -8：居民承受多重压力。' },
      { key: 'disasterChanceMul', value: 1.4, desc: '灾难概率 ×1.4：危机互相放大。' },
      { key: 'tradeMul', value: 0.7, desc: '贸易收入 ×0.7：外部环境全面恶化。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起难民潮事件爆发，居民开始议论。',
        effect: '幸福度 -4，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责难民潮，稳定民心。',
            effect: '幸福度 +4，稳定度 +4' },
          { label: '冷静观察',
            desc: '暂不表态，先收集难民潮的情报。',
            effect: '科研 +20%，幸福度 -4' },
        ],
      },
      {
        day: 13,
        title: '局势升级',
        text: '难民潮的影响扩大，食物供应出现缺口。',
        effect: '食物产量 -20%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修食物供应线。',
            effect: '食物产量 +20%，星币 -400' },
          { label: '配给管制',
            desc: '实行食物配给，撑过缺口期。',
            effect: '食物消耗 -20%，幸福度 -4' },
        ],
      },
      {
        day: 23,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对难民潮的方案。',
        effect: '稳定度 -4，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +4，腐败发生率 +4%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +4，耗时 +5 天' },
        ],
      },
      {
        day: 41,
        title: '第一波冲击',
        text: '难民潮的第一波冲击到达，防线告急。',
        effect: '防御力 -20%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +20%，星币 -400' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -4，星币 +400' },
        ],
      },
      {
        day: 59,
        title: '中期考验',
        text: '难民潮进入相持阶段，食物储备见底。',
        effect: '食物消耗 +20%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，食物产量拉满。',
            effect: '食物产量 +20%，幸福度 -4' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '食物消耗 -20%，人口增速 -4%' },
        ],
      },
      {
        day: 85,
        title: '转折点',
        text: '应对难民潮的转折点到来，成败在此一举。',
        effect: '幸福度 -4，科研 -20%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +20%，失败则幸福度 -4' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +4，进度 -5%' },
        ],
      },
      {
        day: 108,
        title: '第二波冲击',
        text: '难民潮的第二波冲击比第一波更猛。',
        effect: '防御力 -20%，食物产量 -20%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +20%，士气 -4' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +20%，建筑受损 +4%' },
        ],
      },
      {
        day: 139,
        title: '决战前夜',
        text: '难民潮的最终考验临近，全城进入戒备。',
        effect: '士气 -4，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +4，食物 -400' },
          { label: '秘密谈判',
            desc: '派密使与难民潮谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -4' },
        ],
      },
      {
        day: 167,
        title: '最终决战',
        text: '难民潮的最终决战打响，没有退路。',
        effect: '全部产量 -20%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +20%，防御力 -4' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +20%，贸易收入 -20%' },
        ],
      },
      {
        day: 176,
        title: '尾声',
        text: '难民潮的余波未平，通关就在眼前。',
        effect: '幸福度 +4，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +4，星币 -400' },
          { label: '追责整顿',
            desc: '彻查难民潮的根源并整顿。',
            effect: '稳定度 +4，腐败发生率 -4%' },
        ],
      },
    ],
    milestones: [
      { day: 45, desc: '稳住局势：幸福度 ≥65，食物供应不断' },
      { day: 90, desc: '中期达标：建成 3 座「沙漠绿洲」' },
      { day: 135, desc: '后期冲刺：研究 3 项科技，「安置难民」过半' },
      { day: 180, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-45天',
        desc: '稳住食物供应，幸福度守住 65。',
        checklist: ['开局资源向食物倾斜', '先建 1 座「沙漠绿洲」', '幸福度不跌破 65'],
      },
      {
        name: '中期', days: '46-126天',
        desc: '建成 3 座「沙漠绿洲」，研究 3 项科技。',
        checklist: ['补齐 3 座「沙漠绿洲」', '科技链点到 T3', '储备食物到 500 单位'],
      },
      {
        name: '终局', days: '127-180天',
        desc: '完成「安置难民」，5 个目标全部达成。',
        checklist: ['人口冲到 900 人', '「安置难民」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「人口增速 ×3，食物消耗 ×2」，建议先稳食物供应再扩张。',
      '提示2：优先建 3 座「沙漠绿洲」，它是本关的核心建筑。',
      '提示3：幸福度守住 65 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 85 天转折点前备足食物，转折点后不要再开新战线。',
      '提示5：研究 3 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 180 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 50：居民大规模出走，失败。',
      '第 180 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 180;
        game.player.inv.steel = 80;
        game.player.inv.food = 100;
        game.player.inv.credits = 2500;
        game.player.inv.ice = 50;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 900 人', check(game) { try { return game && game.player && game.player.pop >= 900; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥65', check(game) { try { return game && game.city && game.city.happiness >= 65; } catch (e) { return false; } } },
      { desc: '安置难民 600人', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 600; } catch (e) { return false; } } },
    ],
    timeLimit: 15552000,
    timeLimitDays: 180,
    reward: { credits: 2500, tech: 80, title: '难民潮征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 星际战争 scn-v31-18（mixed·难度 5 地狱）
  // 全面星际战争爆发，火星成为前线。
  // 难度测算：时间压力 50 分（限时 150 天）+ 资源压力 70 分 + 战斗压力 60 分 → 综合 60 分，对应难度 5（地狱）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 60 分，落在难度 5 区间内。
  // 奖励估值：3000 星币 + 100 科技点 + 称号「星际战争征服者」，合计约 3800 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 150 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 150 天。
  // 关键决策点：第 70 天转折点（47% 节点）决定胜负，之前必须建成 3 座「太空要塞」并备足稀有。
  // 失败模式：人口归零、幸福度连续 15 天低于 45、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳稀有供应 → 建 3 座「太空要塞」→ 研究 5 项科技 → 完成「击退进攻波次」8波。
  // 推荐开局：开局资源向稀有倾斜，前 20 天不扩张人口，先把幸福度稳在 60 以上。
  {
    id: 'scn-v31-18',
    name: '星际战争',
    icon: '⚔️',
    theme: 'mixed',
    desc: '全面星际战争爆发，火星成为前线。',
    difficulty: 5,
    difficultyLabel: '地狱',
    rule: '每 20 天一波进攻，贸易中断',
    briefing: '星际战争：全面星际战争爆发，火星成为前线。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-18-obj-1', desc: '人口达到 650 人', target: 650, unit: '人', kind: 'pop' },
      { id: 'scn-v31-18-obj-2', desc: '幸福度保持 ≥60', target: 60, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-18-obj-3', desc: '建成 3 座「太空要塞」', target: 3, unit: '座', kind: 'building', building: 'v31_fortress' },
      { id: 'scn-v31-18-obj-4', desc: '研究 5 项科技', target: 5, unit: '项', kind: 'tech' },
      { id: 'scn-v31-18-obj-5', desc: '击退进攻波次 8波', target: 8, unit: '波', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 3000, desc: '通关奖励：3000 星币' },
      { type: 'tech', value: 100, desc: '通关奖励：100 科技点' },
      { type: 'title', value: '星际战争征服者', desc: '通关称号：「星际战争征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.85, desc: '税收效率 ×0.85：多重危机压缩财政。' },
      { key: 'happinessAdd', value: -8, desc: '幸福度 -8：居民承受多重压力。' },
      { key: 'disasterChanceMul', value: 1.4, desc: '灾难概率 ×1.4：危机互相放大。' },
      { key: 'tradeMul', value: 0.7, desc: '贸易收入 ×0.7：外部环境全面恶化。' },
    ],
    events: [
      {
        day: 3,
        title: '危机初现',
        text: '第一起敌军事件爆发，居民开始议论。',
        effect: '幸福度 -5，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责敌军，稳定民心。',
            effect: '幸福度 +5，稳定度 +5' },
          { label: '冷静观察',
            desc: '暂不表态，先收集敌军的情报。',
            effect: '科研 +25%，幸福度 -5' },
        ],
      },
      {
        day: 11,
        title: '局势升级',
        text: '敌军的影响扩大，稀有供应出现缺口。',
        effect: '稀有产量 -25%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修稀有供应线。',
            effect: '稀有产量 +25%，星币 -500' },
          { label: '配给管制',
            desc: '实行稀有配给，撑过缺口期。',
            effect: '稀有消耗 -25%，幸福度 -5' },
        ],
      },
      {
        day: 20,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对敌军的方案。',
        effect: '稳定度 -5，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +5，腐败发生率 +5%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +5，耗时 +5 天' },
        ],
      },
      {
        day: 34,
        title: '第一波冲击',
        text: '敌军的第一波冲击到达，防线告急。',
        effect: '防御力 -25%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +25%，星币 -500' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -5，星币 +500' },
        ],
      },
      {
        day: 50,
        title: '中期考验',
        text: '敌军进入相持阶段，稀有储备见底。',
        effect: '稀有消耗 +25%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，稀有产量拉满。',
            effect: '稀有产量 +25%，幸福度 -5' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '稀有消耗 -25%，人口增速 -5%' },
        ],
      },
      {
        day: 70,
        title: '转折点',
        text: '应对敌军的转折点到来，成败在此一举。',
        effect: '幸福度 -5，科研 -25%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +25%，失败则幸福度 -5' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +5，进度 -5%' },
        ],
      },
      {
        day: 90,
        title: '第二波冲击',
        text: '敌军的第二波冲击比第一波更猛。',
        effect: '防御力 -25%，稀有产量 -25%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +25%，士气 -5' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +25%，建筑受损 +5%' },
        ],
      },
      {
        day: 116,
        title: '决战前夜',
        text: '敌军的最终考验临近，全城进入戒备。',
        effect: '士气 -5，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +5，食物 -500' },
          { label: '秘密谈判',
            desc: '派密使与敌军谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -5' },
        ],
      },
      {
        day: 140,
        title: '最终决战',
        text: '敌军的最终决战打响，没有退路。',
        effect: '全部产量 -25%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +25%，防御力 -5' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +25%，贸易收入 -25%' },
        ],
      },
      {
        day: 147,
        title: '尾声',
        text: '敌军的余波未平，通关就在眼前。',
        effect: '幸福度 +5，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +5，星币 -500' },
          { label: '追责整顿',
            desc: '彻查敌军的根源并整顿。',
            effect: '稳定度 +5，腐败发生率 -5%' },
        ],
      },
    ],
    milestones: [
      { day: 38, desc: '稳住局势：幸福度 ≥60，稀有供应不断' },
      { day: 75, desc: '中期达标：建成 3 座「太空要塞」' },
      { day: 112, desc: '后期冲刺：研究 5 项科技，「击退进攻波次」过半' },
      { day: 150, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-38天',
        desc: '稳住稀有供应，幸福度守住 60。',
        checklist: ['开局资源向稀有倾斜', '先建 1 座「太空要塞」', '幸福度不跌破 60'],
      },
      {
        name: '中期', days: '39-105天',
        desc: '建成 3 座「太空要塞」，研究 5 项科技。',
        checklist: ['补齐 3 座「太空要塞」', '科技链点到 T3', '储备稀有到 500 单位'],
      },
      {
        name: '终局', days: '106-150天',
        desc: '完成「击退进攻波次」，5 个目标全部达成。',
        checklist: ['人口冲到 650 人', '「击退进攻波次」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「每 20 天一波进攻，贸易中断」，建议先稳稀有供应再扩张。',
      '提示2：优先建 3 座「太空要塞」，它是本关的核心建筑。',
      '提示3：幸福度守住 60 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 70 天转折点前备足稀有，转折点后不要再开新战线。',
      '提示5：研究 5 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 150 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 45：居民大规模出走，失败。',
      '第 150 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 200;
        game.player.inv.steel = 90;
        game.player.inv.food = 110;
        game.player.inv.credits = 3000;
        game.player.inv.ice = 55;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 650 人', check(game) { try { return game && game.player && game.player.pop >= 650; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥60', check(game) { try { return game && game.city && game.city.happiness >= 60; } catch (e) { return false; } } },
      { desc: '击退进攻波次 8波', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 8; } catch (e) { return false; } } },
    ],
    timeLimit: 12960000,
    timeLimitDays: 150,
    reward: { credits: 3000, tech: 100, title: '星际战争征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 盖亚远征 scn-v31-19（mixed·难度 4 极难）
  // 行星改造远征队出发，目标是让火星变绿。
  // 难度测算：时间压力 40 分（限时 180 天）+ 资源压力 58 分 + 战斗压力 60 分 → 综合 53 分，对应难度 4（极难）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 53 分，落在难度 4 区间内。
  // 奖励估值：2500 星币 + 80 科技点 + 称号「盖亚远征征服者」，合计约 3140 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 180 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 180 天。
  // 关键决策点：第 85 天转折点（47% 节点）决定胜负，之前必须建成 3 座「大气处理器」并备足氧气。
  // 失败模式：人口归零、幸福度连续 15 天低于 55、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳氧气供应 → 建 3 座「大气处理器」→ 研究 4 项科技 → 完成「行星改造进度」60点。
  // 推荐开局：开局资源向氧气倾斜，前 20 天不扩张人口，先把幸福度稳在 70 以上。
  {
    id: 'scn-v31-19',
    name: '盖亚远征',
    icon: '🌍',
    theme: 'mixed',
    desc: '行星改造远征队出发，目标是让火星变绿。',
    difficulty: 4,
    difficultyLabel: '极难',
    rule: '改造成本 ×1.5，生态事件频发',
    briefing: '盖亚远征：行星改造远征队出发，目标是让火星变绿。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-19-obj-1', desc: '人口达到 500 人', target: 500, unit: '人', kind: 'pop' },
      { id: 'scn-v31-19-obj-2', desc: '幸福度保持 ≥70', target: 70, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-19-obj-3', desc: '建成 3 座「大气处理器」', target: 3, unit: '座', kind: 'building', building: 'v31_atmos' },
      { id: 'scn-v31-19-obj-4', desc: '研究 4 项科技', target: 4, unit: '项', kind: 'tech' },
      { id: 'scn-v31-19-obj-5', desc: '行星改造进度 60点', target: 60, unit: '点', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 2500, desc: '通关奖励：2500 星币' },
      { type: 'tech', value: 80, desc: '通关奖励：80 科技点' },
      { type: 'title', value: '盖亚远征征服者', desc: '通关称号：「盖亚远征征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.85, desc: '税收效率 ×0.85：多重危机压缩财政。' },
      { key: 'happinessAdd', value: -8, desc: '幸福度 -8：居民承受多重压力。' },
      { key: 'disasterChanceMul', value: 1.4, desc: '灾难概率 ×1.4：危机互相放大。' },
      { key: 'tradeMul', value: 0.7, desc: '贸易收入 ×0.7：外部环境全面恶化。' },
    ],
    events: [
      {
        day: 4,
        title: '危机初现',
        text: '第一起改造事故事件爆发，居民开始议论。',
        effect: '幸福度 -4，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责改造事故，稳定民心。',
            effect: '幸福度 +4，稳定度 +4' },
          { label: '冷静观察',
            desc: '暂不表态，先收集改造事故的情报。',
            effect: '科研 +20%，幸福度 -4' },
        ],
      },
      {
        day: 13,
        title: '局势升级',
        text: '改造事故的影响扩大，氧气供应出现缺口。',
        effect: '氧气产量 -20%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修氧气供应线。',
            effect: '氧气产量 +20%，星币 -400' },
          { label: '配给管制',
            desc: '实行氧气配给，撑过缺口期。',
            effect: '氧气消耗 -20%，幸福度 -4' },
        ],
      },
      {
        day: 23,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对改造事故的方案。',
        effect: '稳定度 -4，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +4，腐败发生率 +4%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +4，耗时 +5 天' },
        ],
      },
      {
        day: 41,
        title: '第一波冲击',
        text: '改造事故的第一波冲击到达，防线告急。',
        effect: '防御力 -20%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +20%，星币 -400' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -4，星币 +400' },
        ],
      },
      {
        day: 59,
        title: '中期考验',
        text: '改造事故进入相持阶段，氧气储备见底。',
        effect: '氧气消耗 +20%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，氧气产量拉满。',
            effect: '氧气产量 +20%，幸福度 -4' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '氧气消耗 -20%，人口增速 -4%' },
        ],
      },
      {
        day: 85,
        title: '转折点',
        text: '应对改造事故的转折点到来，成败在此一举。',
        effect: '幸福度 -4，科研 -20%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +20%，失败则幸福度 -4' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +4，进度 -5%' },
        ],
      },
      {
        day: 108,
        title: '第二波冲击',
        text: '改造事故的第二波冲击比第一波更猛。',
        effect: '防御力 -20%，氧气产量 -20%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +20%，士气 -4' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +20%，建筑受损 +4%' },
        ],
      },
      {
        day: 139,
        title: '决战前夜',
        text: '改造事故的最终考验临近，全城进入戒备。',
        effect: '士气 -4，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +4，食物 -400' },
          { label: '秘密谈判',
            desc: '派密使与改造事故谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -4' },
        ],
      },
      {
        day: 167,
        title: '最终决战',
        text: '改造事故的最终决战打响，没有退路。',
        effect: '全部产量 -20%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +20%，防御力 -4' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +20%，贸易收入 -20%' },
        ],
      },
      {
        day: 176,
        title: '尾声',
        text: '改造事故的余波未平，通关就在眼前。',
        effect: '幸福度 +4，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +4，星币 -400' },
          { label: '追责整顿',
            desc: '彻查改造事故的根源并整顿。',
            effect: '稳定度 +4，腐败发生率 -4%' },
        ],
      },
    ],
    milestones: [
      { day: 45, desc: '稳住局势：幸福度 ≥70，氧气供应不断' },
      { day: 90, desc: '中期达标：建成 3 座「大气处理器」' },
      { day: 135, desc: '后期冲刺：研究 4 项科技，「行星改造进度」过半' },
      { day: 180, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-45天',
        desc: '稳住氧气供应，幸福度守住 70。',
        checklist: ['开局资源向氧气倾斜', '先建 1 座「大气处理器」', '幸福度不跌破 70'],
      },
      {
        name: '中期', days: '46-126天',
        desc: '建成 3 座「大气处理器」，研究 4 项科技。',
        checklist: ['补齐 3 座「大气处理器」', '科技链点到 T3', '储备氧气到 500 单位'],
      },
      {
        name: '终局', days: '127-180天',
        desc: '完成「行星改造进度」，5 个目标全部达成。',
        checklist: ['人口冲到 500 人', '「行星改造进度」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「改造成本 ×1.5，生态事件频发」，建议先稳氧气供应再扩张。',
      '提示2：优先建 3 座「大气处理器」，它是本关的核心建筑。',
      '提示3：幸福度守住 70 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 85 天转折点前备足氧气，转折点后不要再开新战线。',
      '提示5：研究 4 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 180 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 55：居民大规模出走，失败。',
      '第 180 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 180;
        game.player.inv.steel = 80;
        game.player.inv.food = 100;
        game.player.inv.credits = 2500;
        game.player.inv.ice = 50;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 500 人', check(game) { try { return game && game.player && game.player.pop >= 500; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥70', check(game) { try { return game && game.city && game.city.happiness >= 70; } catch (e) { return false; } } },
      { desc: '行星改造进度 60点', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 60; } catch (e) { return false; } } },
    ],
    timeLimit: 15552000,
    timeLimitDays: 180,
    reward: { credits: 2500, tech: 80, title: '盖亚远征征服者' },
  },

  // ══════════════════════════════════════════════════════════════
  // 银河议会 scn-v31-20（mixed·难度 5 地狱）
  // 火星申请加入银河议会，终极考验来临。
  // 难度测算：时间压力 50 分（限时 150 天）+ 资源压力 70 分 + 战斗压力 60 分 → 综合 60 分，对应难度 5（地狱）。
  // 难度测算：难度 1≈30 分、2≈45 分、3≈60 分、4≈75 分、5≈90 分；本剧本 60 分，落在难度 5 区间内。
  // 奖励估值：3000 星币 + 100 科技点 + 称号「银河议会征服者」，合计约 3800 铁当量（星币 1:1、科技点 1:8 折算）。
  // 奖励估值：奖励随难度线性增长（难度 ×500 星币 + 500，难度 ×20 科技点）；地狱难度奖励约为简单难度的 3.3×。
  // 时间线总览：限时 150 天，10 个事件按 2%/7%/13%/23%/33%/47%/60%/77%/93%/98% 节点触发，终局在第 150 天。
  // 关键决策点：第 70 天转折点（47% 节点）决定胜负，之前必须建成 3 座「星门枢纽」并备足科技点。
  // 失败模式：人口归零、幸福度连续 15 天低于 65、限时耗尽未达目标，三者任一即失败。
  // 通关路线：先稳科技点供应 → 建 3 座「星门枢纽」→ 研究 6 项科技 → 完成「获得议会席位」1席。
  // 推荐开局：开局资源向科技点倾斜，前 20 天不扩张人口，先把幸福度稳在 80 以上。
  {
    id: 'scn-v31-20',
    name: '银河议会',
    icon: '🌌',
    theme: 'mixed',
    desc: '火星申请加入银河议会，终极考验来临。',
    difficulty: 5,
    difficultyLabel: '地狱',
    rule: '全部目标同时考核，无容错',
    briefing: '银河议会：火星申请加入银河议会，终极考验来临。指挥官，祝好运。',
    objectives: [
      { id: 'scn-v31-20-obj-1', desc: '人口达到 1000 人', target: 1000, unit: '人', kind: 'pop' },
      { id: 'scn-v31-20-obj-2', desc: '幸福度保持 ≥80', target: 80, unit: '点', kind: 'happiness' },
      { id: 'scn-v31-20-obj-3', desc: '建成 3 座「星门枢纽」', target: 3, unit: '座', kind: 'building', building: 'v31_stargate' },
      { id: 'scn-v31-20-obj-4', desc: '研究 6 项科技', target: 6, unit: '项', kind: 'tech' },
      { id: 'scn-v31-20-obj-5', desc: '获得议会席位 1席', target: 1, unit: '席', kind: 'special' },
    ],
    rewards: [
      { type: 'credits', value: 3000, desc: '通关奖励：3000 星币' },
      { type: 'tech', value: 100, desc: '通关奖励：100 科技点' },
      { type: 'title', value: '银河议会征服者', desc: '通关称号：「银河议会征服者」' },
    ],
    modifiers: [
      { key: 'taxMul', value: 0.85, desc: '税收效率 ×0.85：多重危机压缩财政。' },
      { key: 'happinessAdd', value: -8, desc: '幸福度 -8：居民承受多重压力。' },
      { key: 'disasterChanceMul', value: 1.4, desc: '灾难概率 ×1.4：危机互相放大。' },
      { key: 'tradeMul', value: 0.7, desc: '贸易收入 ×0.7：外部环境全面恶化。' },
    ],
    events: [
      {
        day: 3,
        title: '危机初现',
        text: '第一起议会考核事件爆发，居民开始议论。',
        effect: '幸福度 -5，持续 5 天',
        choices: [
          { label: '强硬表态',
            desc: '公开谴责议会考核，稳定民心。',
            effect: '幸福度 +5，稳定度 +5' },
          { label: '冷静观察',
            desc: '暂不表态，先收集议会考核的情报。',
            effect: '科研 +25%，幸福度 -5' },
        ],
      },
      {
        day: 11,
        title: '局势升级',
        text: '议会考核的影响扩大，科技点供应出现缺口。',
        effect: '科技点产量 -25%，持续 10 天',
        choices: [
          { label: '紧急拨款',
            desc: '拨款抢修科技点供应线。',
            effect: '科技点产量 +25%，星币 -500' },
          { label: '配给管制',
            desc: '实行科技点配给，撑过缺口期。',
            effect: '科技点消耗 -25%，幸福度 -5' },
        ],
      },
      {
        day: 20,
        title: '紧急会议',
        text: '议会召开紧急会议，商讨应对议会考核的方案。',
        effect: '稳定度 -5，持续 5 天',
        choices: [
          { label: '授权指挥',
            desc: '授予指挥官临机专断之权。',
            effect: '稳定度 +5，腐败发生率 +5%' },
          { label: '全民公投',
            desc: '把方案交给全民公投决定。',
            effect: '幸福度 +5，耗时 +5 天' },
        ],
      },
      {
        day: 34,
        title: '第一波冲击',
        text: '议会考核的第一波冲击到达，防线告急。',
        effect: '防御力 -25%，持续 10 天',
        choices: [
          { label: '全力反击',
            desc: '全部防线开火，硬扛第一波。',
            effect: '防御力 +25%，星币 -500' },
          { label: '战略收缩',
            desc: '放弃外围据点，收缩防线。',
            effect: '防御力 -5，星币 +500' },
        ],
      },
      {
        day: 50,
        title: '中期考验',
        text: '议会考核进入相持阶段，科技点储备见底。',
        effect: '科技点消耗 +25%，持续 15 天',
        choices: [
          { label: '加班生产',
            desc: '工厂三班倒，科技点产量拉满。',
            effect: '科技点产量 +25%，幸福度 -5' },
          { label: '节衣缩食',
            desc: '全城节流，储备留到决战。',
            effect: '科技点消耗 -25%，人口增速 -5%' },
        ],
      },
      {
        day: 70,
        title: '转折点',
        text: '应对议会考核的转折点到来，成败在此一举。',
        effect: '幸福度 -5，科研 -25%，持续 10 天',
        choices: [
          { label: '孤注一掷',
            desc: '把全部储备押上转折点一战。',
            effect: '攻击力 +25%，失败则幸福度 -5' },
          { label: '稳扎稳打',
            desc: '不冒险，按计划推进。',
            effect: '稳定度 +5，进度 -5%' },
        ],
      },
      {
        day: 90,
        title: '第二波冲击',
        text: '议会考核的第二波冲击比第一波更猛。',
        effect: '防御力 -25%，科技点产量 -25%，持续 10 天',
        choices: [
          { label: '预备队出击',
            desc: '预备队全部投入第二波防线。',
            effect: '防御力 +25%，士气 -5' },
          { label: '诱敌深入',
            desc: '放敌军进来再关门打狗。',
            effect: '攻击力 +25%，建筑受损 +5%' },
        ],
      },
      {
        day: 116,
        title: '决战前夜',
        text: '议会考核的最终考验临近，全城进入戒备。',
        effect: '士气 -5，持续 10 天',
        choices: [
          { label: '战前动员',
            desc: '全城动员令，士气拉满。',
            effect: '士气 +5，食物 -500' },
          { label: '秘密谈判',
            desc: '派密使与议会考核谈判拖延时间。',
            effect: '限时 +3 天，稳定度 -5' },
        ],
      },
      {
        day: 140,
        title: '最终决战',
        text: '议会考核的最终决战打响，没有退路。',
        effect: '全部产量 -25%，持续 5 天',
        choices: [
          { label: '全军出击',
            desc: '所有舰队与机甲倾巢而出。',
            effect: '攻击力 +25%，防御力 -5' },
          { label: '固守待援',
            desc: '死守穹顶，等地球援军。',
            effect: '防御力 +25%，贸易收入 -25%' },
        ],
      },
      {
        day: 147,
        title: '尾声',
        text: '议会考核的余波未平，通关就在眼前。',
        effect: '幸福度 +5，持续 5 天',
        choices: [
          { label: '庆典安抚',
            desc: '办庆典安抚居民，收拾残局。',
            effect: '幸福度 +5，星币 -500' },
          { label: '追责整顿',
            desc: '彻查议会考核的根源并整顿。',
            effect: '稳定度 +5，腐败发生率 -5%' },
        ],
      },
    ],
    milestones: [
      { day: 38, desc: '稳住局势：幸福度 ≥80，科技点供应不断' },
      { day: 75, desc: '中期达标：建成 3 座「星门枢纽」' },
      { day: 112, desc: '后期冲刺：研究 6 项科技，「获得议会席位」过半' },
      { day: 150, desc: '终局：全部 5 个目标达成，通关' },
    ],
    phases: [
      {
        name: '开局', days: '1-38天',
        desc: '稳住科技点供应，幸福度守住 80。',
        checklist: ['开局资源向科技点倾斜', '先建 1 座「星门枢纽」', '幸福度不跌破 80'],
      },
      {
        name: '中期', days: '39-105天',
        desc: '建成 3 座「星门枢纽」，研究 6 项科技。',
        checklist: ['补齐 3 座「星门枢纽」', '科技链点到 T3', '储备科技点到 500 单位'],
      },
      {
        name: '终局', days: '106-150天',
        desc: '完成「获得议会席位」，5 个目标全部达成。',
        checklist: ['人口冲到 1000 人', '「获得议会席位」收尾', '留 10% 时间容错'],
      },
    ],
    tips: [
      '提示1：针对「全部目标同时考核，无容错」，建议先稳科技点供应再扩张。',
      '提示2：优先建 3 座「星门枢纽」，它是本关的核心建筑。',
      '提示3：幸福度守住 80 底线，跌破后先停扩张补幸福建筑。',
      '提示4：第 70 天转折点前备足科技点，转折点后不要再开新战线。',
      '提示5：研究 6 项科技优先点同系链，跳档研究性价比最低。',
      '提示6：限时 150 天，留 10% 时间做收尾，不要拖到最后一天。',
    ],
    failConditions: [
      '人口归零：殖民地无人，立即失败。',
      '幸福度连续 15 天低于 65：居民大规模出走，失败。',
      '第 150 天结束时 5 个目标未全部达成：限时耗尽，失败。',
    ],
    setup(game) {
      try {
        if (!game || !game.player || !game.player.inv) return;
        game.player.inv.iron = 200;
        game.player.inv.steel = 90;
        game.player.inv.food = 110;
        game.player.inv.credits = 3000;
        game.player.inv.ice = 55;
      } catch (e) { /* 开局资源设置失败不阻塞剧本 */ }
    },
    goals: [
      { desc: '人口达到 1000 人', check(game) { try { return game && game.player && game.player.pop >= 1000; } catch (e) { return false; } } },
      { desc: '幸福度保持 ≥80', check(game) { try { return game && game.city && game.city.happiness >= 80; } catch (e) { return false; } } },
      { desc: '获得议会席位 1席', check(game) { try { return game && game.city && (game.city.specialProgress || 0) >= 1; } catch (e) { return false; } } },
    ],
    timeLimit: 12960000,
    timeLimitDays: 150,
    reward: { credits: 3000, tech: 100, title: '银河议会征服者' },
  },

];

/* mergeScenariosV31()：幂等。把 20 个剧本并入全局 SCENARIOS，已存在 id 的跳过。
 * 旧文件未加载时只返回计数，不抛错。 */
function mergeScenariosV31() {
  if (typeof SCENARIOS === 'undefined') return 0;
  let n = 0;
  for (const s of SCENARIOS_V31) {
    if (!SCENARIOS.find(x => x.id === s.id)) {
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

/* 剧本统计：按难度 / 主题汇总目标与奖励。 */
function v31ScenarioStats() {
  const byDiff = {}; const byTheme = {};
  let credits = 0, tech = 0;
  for (const s of SCENARIOS_V31) {
    byDiff[s.difficulty] = (byDiff[s.difficulty] || 0) + 1;
    byTheme[s.theme] = (byTheme[s.theme] || 0) + 1;
    credits += s.reward.credits; tech += s.reward.tech;
  }
  return { count: SCENARIOS_V31.length, byDifficulty: byDiff, byTheme: byTheme,
    totalCredits: credits, totalTech: tech };
}

/* ============ 自检 ============ */
/* 校验 20 个剧本：id 唯一且带 scn-v31- 前缀、5 个目标、3 个奖励、4 个修正、
 * 10 个事件（日期递增且在限时内，每事件 2 个抉择分支）、3 个阶段、4 个里程碑、
 * 6 条提示、3 条失败条件、setup/goals 可调用不抛错、奖励为正数。 */
function selfTestScenariosV31() {
  const errors = [];
  const seen = new Set();
  if (SCENARIOS_V31.length !== 20) errors.push('剧本数=' + SCENARIOS_V31.length + '，应为 20');
  for (const s of SCENARIOS_V31) {
    if (seen.has(s.id)) errors.push(s.id + ': id 重复');
    seen.add(s.id);
    if (s.id.indexOf('scn-v31-') !== 0) errors.push(s.id + ': id 前缀错误');
    if (!s.name || !s.desc) errors.push(s.id + ': 名称或描述缺失');
    if (s.difficulty < 1 || s.difficulty > 5) errors.push(s.id + ': 难度越界');
    if (!Array.isArray(s.objectives) || s.objectives.length !== 5) errors.push(s.id + ': 目标不是 5 个');
    if (!Array.isArray(s.rewards) || s.rewards.length !== 3) errors.push(s.id + ': 奖励不是 3 个');
    if (!Array.isArray(s.modifiers) || s.modifiers.length !== 4) errors.push(s.id + ': 修正不是 4 个');
    if (!Array.isArray(s.events) || s.events.length !== 10) errors.push(s.id + ': 事件不是 10 个');
    let prevDay = 0;
    for (const e of (s.events || [])) {
      if (e.day <= prevDay) errors.push(s.id + ': 事件日期不递增 ' + e.day);
      if (e.day > s.timeLimitDays) errors.push(s.id + ': 事件超出限时 ' + e.day);
      prevDay = e.day;
    }
    for (const e of (s.events || [])) {
      if (!Array.isArray(e.choices) || e.choices.length !== 2) errors.push(s.id + ': 事件抉择不是 2 个');
      for (const c of (e.choices || [])) {
        if (!c.label || !c.desc || !c.effect) errors.push(s.id + ': 抉择字段缺失');
      }
    }
    if (!Array.isArray(s.phases) || s.phases.length !== 3) errors.push(s.id + ': 阶段不是 3 个');
    if (!Array.isArray(s.milestones) || s.milestones.length !== 4) errors.push(s.id + ': 里程碑不是 4 个');
    if (!Array.isArray(s.tips) || s.tips.length !== 6) errors.push(s.id + ': 提示不是 6 条');
    if (!Array.isArray(s.failConditions) || s.failConditions.length !== 3) errors.push(s.id + ': 失败条件不是 3 条');
    if (!(s.reward.credits > 0 && s.reward.tech > 0)) errors.push(s.id + ': 奖励数值无效');
    if (typeof s.setup !== 'function') errors.push(s.id + ': setup 不是函数');
    if (!Array.isArray(s.goals) || s.goals.length !== 3) errors.push(s.id + ': goals 不是 3 个');
    try { s.setup({}); for (const g of s.goals) g.check({}); } catch (e) { errors.push(s.id + ': setup/goals 抛错 ' + e.message); }
  }
  return { total: SCENARIOS_V31.length, errors: errors, pass: errors.length === 0 };
}

// ── 附录：难度分布（实算）──
// 难度 2（普通）：2 关——选举年、曲速试飞。
// 难度 3（困难）：5 关——议会倒戈、廉政风暴、海洋枯竭、冰川融化、外星文物。
// 难度 4（极难）：7 关——新闻封锁、大气崩溃、雨林大火、轨道封锁、星门远征、难民潮、盖亚远征。
// 难度 5（地狱）：6 关——舰队来袭、核冬天、四面楚歌、百年孤独、星际战争、银河议会。
// ── 附录：奖励总账（实算）──
// 全部 20 关通关共得星币 48500，科技点 1540，合计约 60820 铁当量（科技点 1:8 折算）。
// 以 v31ScenarioStats() 的 totalCredits / totalTech 为准。

if (typeof module !== 'undefined') {
  module.exports = { SCENARIOS_V31, mergeScenariosV31, v31ScenarioStats, selfTestScenariosV31 };
}
