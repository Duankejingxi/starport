/* 星港 — v15_events.js：v1.5 动态事件
 * 地下城/海洋/总督/战役相关随机事件，纯机制。
 * 每个事件：id/name/icon/desc/trigger(触发条件描述)/choices(2-3 个选项，各有效果)/cooldown。
 */

const V15_EVENTS = [
  // ============ 地下城事件 ============
  {
    id: 'ug_crystal_rush', name: '晶体矿脉', icon: '💎',
    desc: '探险队发现富晶体矿脉！',
    trigger: '地下城已解锁，探险队空闲',
    cooldownMs: 8 * 60 * 1000,
    choices: [
      { name: '全力开采', effect: '晶体+30，坍塌风险+20%（10分钟）', fn: 'crystalRush' },
      { name: '稳妥开采', effect: '晶体+15，无风险', fn: 'crystalSafe' },
    ],
  },
  {
    id: 'ug_geyser', name: '地热喷发', icon: '🌋',
    desc: 'B3 地热喷口异常活跃！',
    trigger: 'B3 已解锁',
    cooldownMs: 10 * 60 * 1000,
    choices: [
      { name: '引导发电', effect: '电力+100，1 栋随机建筑受损', fn: 'geyserPower' },
      { name: '封闭喷口', effect: '无事发生', fn: 'geyserSeal' },
    ],
  },
  {
    id: 'ug_lost_team', name: '探险队失联', icon: '📡',
    desc: '一支探险队超过 2 分钟未回报！',
    trigger: '有探险队在外',
    cooldownMs: 12 * 60 * 1000,
    choices: [
      { name: '派救援队', effect: '消耗食物×20，50% 救回（带双倍物资）', fn: 'rescue' },
      { name: '放弃', effect: '失去探险队', fn: 'abandon' },
    ],
  },
  {
    id: 'ug_ancient', name: '远古遗迹', icon: '🏛️',
    desc: 'B3 深处发现疑似远古建筑遗迹！',
    trigger: 'B3 已解锁，科技≥30',
    cooldownMs: 20 * 60 * 1000,
    choices: [
      { name: '考古发掘', effect: '科技+20，30% 触发坍塌', fn: 'excavate' },
      { name: '保护性封存', effect: '成就+1，无风险', fn: 'preserve' },
    ],
  },
  // ============ 海洋事件 ============
  {
    id: 'oc_algae_bloom', name: '藻类爆发', icon: '🌿',
    desc: '暖流带来藻类大爆发！',
    trigger: '海洋已解锁',
    cooldownMs: 8 * 60 * 1000,
    choices: [
      { name: '大量采集', effect: '食物+50，污染+（下次巨兽概率+)', fn: 'algaeHarvest' },
      { name: '生态采集', effect: '食物+25，无副作用', fn: 'algaeEco' },
    ],
  },
  {
    id: 'oc_pearl_bed', name: '珍珠床', icon: '🦪',
    desc: '潜艇发现大型珍珠床！',
    trigger: '有潜艇在运作',
    cooldownMs: 10 * 60 * 1000,
    choices: [
      { name: '采珠', effect: '珍珠+20', fn: 'pearlDive' },
      { name: '标记保护', effect: '下次珍珠产量+50%', fn: 'pearlMark' },
    ],
  },
  {
    id: 'oc_ice_crack', name: '冰盖开裂', icon: '🧊',
    desc: '冰盖出现巨大裂缝！',
    trigger: '海洋已解锁',
    cooldownMs: 15 * 60 * 1000,
    choices: [
      { name: '探险', effect: '60% 发现新区域，40% 潜艇受损', fn: 'iceExplore' },
      { name: '加固', effect: '消耗钢材×10，无事发生', fn: 'iceFortify' },
    ],
  },
  // ============ 总督事件 ============
  {
    id: 'gv_gift', name: '总督进献', icon: '🎁',
    desc: '总督进献了一批物资。',
    trigger: '有雇佣总督，忠诚≥60',
    cooldownMs: 10 * 60 * 1000,
    choices: [
      { name: '接受', effect: '随机资源+30，总督忠诚+5', fn: 'giftAccept' },
      { name: '回赠', effect: '消耗食物×10，总督忠诚+15', fn: 'giftReturn' },
    ],
  },
  {
    id: 'gv_rival', name: '总督 rivalry', icon: '⚔️',
    desc: '两位总督因理念不合发生冲突！',
    trigger: '有 2+ 总督且有人格对立',
    cooldownMs: 15 * 60 * 1000,
    choices: [
      { name: '支持甲', effect: '甲忠诚+10，乙忠诚-15', fn: 'rivalA' },
      { name: '支持乙', effect: '乙忠诚+10，甲忠诚-15', fn: 'rivalB' },
      { name: '各打五十大板', effect: '两人都-5，但获得政策点+1', fn: 'rivalBoth' },
    ],
  },
  {
    id: 'gv_hero', name: '总督立功', icon: '🏅',
    desc: '总督在灾难中表现英勇！',
    trigger: '灾难后，总督忠诚≥50',
    cooldownMs: 12 * 60 * 1000,
    choices: [
      { name: '嘉奖', effect: '总督等级+1，全城幸福+5', fn: 'heroReward' },
      { name: '低调处理', effect: '无事发生', fn: 'heroQuiet' },
    ],
  },
  // ============ 战役事件 ============
  {
    id: 'cp_sponsor', name: '神秘赞助', icon: '💰',
    desc: '地球财团愿意赞助你的挑战！',
    trigger: '战役进行中',
    cooldownMs: 999 * 60 * 1000,  // 每局一次
    choices: [
      { name: '接受赞助', effect: '资源+50，但评分上限 A', fn: 'sponsorYes' },
      { name: '拒绝', effect: '无加成，S 评分可能', fn: 'sponsorNo' },
    ],
  },
  // ============ 综合事件 ============
  {
    id: 'v15_earth_news', name: '地球消息', icon: '📻',
    desc: '收到地球的延迟消息。',
    trigger: '游戏进行 20 分钟后',
    cooldownMs: 20 * 60 * 1000,
    choices: [
      { name: '收听', effect: '随机：科技+5 / 人口幸福+10 / 无事发生', fn: 'earthListen' },
      { name: '忽略', effect: '无事发生', fn: 'earthIgnore' },
    ],
  },
  {
    id: 'v15_tech_break', name: '技术突破', icon: '💡',
    desc: '实验室有重大突破！',
    trigger: '有实验室在运作',
    cooldownMs: 15 * 60 * 1000,
    choices: [
      { name: '加大投入', effect: '消耗电力 50，科技+15', fn: 'breakBoost' },
      { name: '稳步推进', effect: '科技+8', fn: 'breakSteady' },
    ],
  },
  {
    id: 'v15_trade_wind', name: '贸易顺风', icon: '💨',
    desc: '太阳风异常平静，贸易船提前到达！',
    trigger: '有贸易站',
    cooldownMs: 12 * 60 * 1000,
    choices: [
      { name: '大宗交易', effect: '贸易价格+30%（60秒）', fn: 'tradeWind' },
    ],
  },
  {
    id: 'v15_pop_boom', name: '婴儿潮', icon: '👶',
    desc: '殖民地迎来婴儿潮！',
    trigger: '人口≥50，幸福≥70',
    cooldownMs: 18 * 60 * 1000,
    choices: [
      { name: '庆祝', effect: '人口+10，食物-30', fn: 'boomCelebrate' },
      { name: '控制', effect: '人口+5', fn: 'boomControl' },
    ],
  },
];

// 事件管理器
class V15EventManager {
  constructor() {
    this.lastFired = {};  // id → 上次触发时间
    this.queue = [];      // 待处理事件
  }

  // 检查并触发（每 30 秒调用一次）
  check(now, game) {
    if (!game || game.paused) return;
    for (const ev of V15_EVENTS) {
      const last = this.lastFired[ev.id] || 0;
      if (now - last < ev.cooldownMs) continue;
      if (!this._triggerOk(ev, game)) continue;
      // 5% 概率触发（避免刷屏）
      if (Math.random() < 0.05) {
        this.queue.push(ev);
        this.lastFired[ev.id] = now;
        if (game.toast) game.toast(`${ev.icon} ${ev.name}：${ev.desc}`);
        break;  // 一次只触发一个
      }
    }
  }

  _triggerOk(ev, game) {
    // 简化触发检查（详细条件由 game.js 按需补充）
    try {
      if (ev.id.startsWith('ug_') && !(game.underground && game.underground.unlocked)) return false;
      if (ev.id.startsWith('oc_') && !(game.ocean && game.ocean.unlocked)) return false;
      if (ev.id.startsWith('gv_') && !(game.governor && game.governor.governors && game.governor.governors.length)) return false;
      if (ev.id.startsWith('cp_') && !(game.campaign && game.campaign.activeLevel)) return false;
    } catch (e) { return false; }
    return true;
  }

  // 裁决选项
  resolve(eventId, choiceIdx, game) {
    const ev = V15_EVENTS.find(e => e.id === eventId);
    if (!ev || !ev.choices[choiceIdx]) return null;
    const choice = ev.choices[choiceIdx];
    // 效果应用（简化版，详细数值由各系统处理）
    if (game.stats) game.stats.track('v15_event', { id: eventId, choice: choiceIdx });
    if (game.toast) game.toast(`${choice.name}：${choice.effect}`);
    return { ok: true, effect: choice.effect, fn: choice.fn };
  }

  pending() { return this.queue.slice(); }
  dismiss(id) { this.queue = this.queue.filter(e => e.id !== id); }

  renderEventCard(ev) {
    return `
      <div class="v15-event-card">
        <div class="v15-event-head"><span style="font-size:28px">${ev.icon}</span><b>${ev.name}</b></div>
        <p>${ev.desc}</p>
        <div class="v15-event-choices">
          ${ev.choices.map((c, i) => `
            <button data-v15-event="${ev.id}" data-choice="${i}" class="v15-choice-btn">
              <b>${c.name}</b><small>${c.effect}</small>
            </button>`).join('')}
        </div>
      </div>`;
  }

  serialize() { return { lastFired: this.lastFired }; }
  deserialize(d) { if (d) this.lastFired = d.lastFired || {}; }
}

const V15_EVENT_CSS = `
.v15-event-card {
  background: #2a2d3a; border: 1px solid #f5c542; border-radius: 14px;
  padding: 14px; margin: 10px 0;
}
.v15-event-head { display: flex; align-items: center; gap: 10px; font-size: 16px; color: #f7f0ea; }
.v15-event-card p { font-size: 13px; color: #c5cad6; margin: 8px 0; }
.v15-event-choices { display: flex; flex-direction: column; gap: 8px; }
.v15-choice-btn {
  min-height: 52px; text-align: left; padding: 10px 12px; border-radius: 10px;
  background: #1a1d29; border: 1px solid #3a3d4a; color: #f7f0ea;
  display: flex; flex-direction: column; gap: 2px;
}
.v15-choice-btn b { font-size: 14px; }
.v15-choice-btn small { font-size: 12px; color: #9aa0b4; }
.v15-choice-btn:active { transform: scale(.98); }
`;
