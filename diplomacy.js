/* 星港 — diplomacy.js：外交系统（3 AI 殖民地 / 关系 / 条约 / 战争） */

// ============================================================
// 🌌 外交系统
//  - 3 个 AI 殖民地：新希望站（温和）/ 铁锈兄弟会（好战）/ 极地科考团（中立）
//  - 关系值 -100 ~ +100，缓慢向 0 回归；AI 主动发起贸易 / 索贡 / 摩擦事件
//  - 条约：贸易协定（贸易收益 +20%）、军事同盟（被袭时 AI 派援军）
//  - 战争：宣战或关系崩盘后 AI 派袭击队；使节馆（embassy）提供外交加成
//  - 本文件在 index.html 中位于 build.js 之后、game.js 之前加载，
//    可直接使用 BUILDINGS；game 对象一律防御性使用（先判存在）
// ============================================================

// ---------- 🎒 资源元数据（送礼下拉框 / 事件文本用） ----------
const DIPLO_RES = {
  iron:    { icon: '🟤', name: '铁矿' },
  ice:     { icon: '🧊', name: '冰水' },
  rare:    { icon: '🟣', name: '稀土' },
  water:   { icon: '💧', name: '水' },
  food:    { icon: '🌾', name: '食物' },
  steel:   { icon: '🔩', name: '钢材' },
  tech:    { icon: '🔬', name: '科技点' },
  uranium: { icon: '☢️', name: '铀矿' },
  he3:     { icon: '🌌', name: '氦3' },
};
const DIPLO_RES_KEYS = Object.keys(DIPLO_RES);

// 贵重资源：送礼时关系加成翻倍
const DIPLO_PRECIOUS = { tech: 2, rare: 2, uranium: 2, he3: 2 };

// ============================================================
// 🏛️ COLONIES：3 个 AI 殖民地定义（每个 ~60 行）
// ============================================================
const COLONIES = {

  // ----------------------------------------------------------
  // 🌅 新希望站 —— 温和派贸易伙伴
  // ----------------------------------------------------------
  hope: {
    id: 'hope',
    name: '新希望站',
    icon: '🌅',
    motto: '「愿每一颗种子都能在火星发芽。」',
    personality: 'gentle',          // 🌿 温和派：极少主动挑衅，偏好合作
    startRel: 20,                  // 初始关系 +20
    color: '#ffb347',              // UI 主色（晨曦橙）
    desc: '由地球联合农业计划建立的温室殖民地，人口最多、性格温和。' +
          '他们盛产食物与水，长期缺铁；是星港最可靠的贸易伙伴。' +
          '温和不等于软弱——若你一再掠夺，他们也会拿起武器。',
    traits: ['🌾 盛产食物与水', '🤝 偏好公平贸易', '🕊️ 厌恶战争', '📻 定期分享农耕经验'],
    // 🎁 喜好：送这些资源关系加成 ×1.5
    likes: ['iron', 'steel', 'tech'],
    dislikes: ['uranium'],         // 送铀矿会被视为威胁，加成减半
    // 🤝 主动贸易提议模板（give = AI 给你的，get = AI 想要的）
    offers: [
      { give: { food: 40 }, get: { iron: 25 }, text: '我们想用 40 份食物换 25 铁矿，温室的孩子们需要新的支架。' },
      { give: { water: 35 }, get: { iron: 20 }, text: '融冰设备老化了，35 份纯净水换 20 铁矿，帮帮忙吧。' },
      { give: { food: 60 }, get: { steel: 15 }, text: '大丰收！60 份食物换 15 钢材，扩建温室穹顶用。' },
      { give: { water: 25 }, get: { tech: 5 },  text: '我们想研究节水灌溉，25 份水换 5 点科技资料。' },
    ],
    // 🎁 随机赠礼事件：关系好时 AI 会主动送你东西
    gifts: [
      { give: { food: 25 }, text: '新希望站送来 25 份新鲜食物：「邻里之间，不用客气。」' },
      { give: { water: 20 }, text: '新希望站分享 20 份纯净水，附带一句问候。' },
    ],
    tribute: null,                 // 温和派从不索要贡品
    // 💬 台词
    dialog: {
      greet:   '朋友，温室的灯还亮着，进来坐坐吧。',
      pactYes: '贸易协定签署！愿我们的货船往来不息。',
      pactNo:  '我们还需要多一点信任……关系再好一些吧。',
      allyYes: '军事同盟成立！新希望站的民兵将与你并肩作战。',
      allyNo:  '结盟是大事，我们还没准备好。',
      warCry:  '你践踏了我们的善意！新希望站被迫拿起武器！',
      peace:   '战争结束了。让我们重新种下信任的种子。',
      refuse:  '……我们记住了这次拒绝。',
    },
    warStrength: 0.8,              // ⚔️ 开战时袭击队强度系数（温和派较弱）
    aiAggression: 0,               // AI 主动宣战倾向（0 = 几乎不主动宣战）
  },

  // ----------------------------------------------------------
  // ⚙️ 铁锈兄弟会 —— 好战派，定期索要贡品
  // ----------------------------------------------------------
  rust: {
    id: 'rust',
    name: '铁锈兄弟会',
    icon: '⚙️',
    motto: '「铁锈之下，皆是臣服。」',
    personality: 'warlike',        // 🔥 好战派：定期索贡，不给就降关系
    startRel: -10,                 // 初始关系 -10
    color: '#ff5a5a',              // UI 主色（铁锈红）
    desc: '由废弃矿场工人组成的武装兄弟会，崇尚力量，蔑视弱者。' +
          '他们定期向周边殖民地索要"保护费"——给，就相安无事；' +
          '不给，关系暴跌，严重时直接开战。但若你足够强大，' +
          '他们反而会尊敬你，甚至愿意结盟。',
    traits: ['⚔️ 定期索要贡品', '💪 尊敬强者', '🔥 好战易怒', '⛏️ 富产铁矿钢材'],
    // 🎁 喜好：硬通货和武器材料
    likes: ['iron', 'steel', 'uranium'],
    dislikes: ['food'],            // 看不起"软弱"的食物
    // 🤝 贸易提议（少而硬）
    offers: [
      { give: { iron: 50 }, get: { food: 30 }, text: '兄弟会不缺铁，缺吃的。50 铁矿换 30 食物，干不干？' },
      { give: { steel: 20 }, get: { tech: 8 }, text: '20 钢材换 8 点科技，我们要造更大的炮。别问干什么用。' },
    ],
    gifts: [],                     // 好战派从不白送东西
    // 💰 索贡模板：每 4~7 分钟一次
    tribute: {
      options: [
        { cost: { iron: 40 }, text: '铁锈兄弟会要求进贡 40 铁矿：「保护费，懂？」' },
        { cost: { steel: 12 }, text: '铁锈兄弟会要求进贡 12 钢材：「我们的装甲需要保养。」' },
        { cost: { food: 30 },  text: '铁锈兄弟会要求进贡 30 食物：「兄弟们要吃饭。」' },
      ],
      acceptRel: 8,                // 上贡：关系 +8
      refuseRel: -12,              // 拒绝/无视：关系 -12
      expireRel: -12,              // 超时无视：同拒绝
    },
    dialog: {
      greet:   '哟，新来的。想在这片荒原活下去，先学会交"朋友"。',
      pactYes: '哼，贸易协定……别耍花样，否则你知道后果。',
      pactNo:  '就这点交情也想谈条件？回去练练再来。',
      allyYes: '哈哈哈！有种！兄弟会认你这个盟友，并肩作战吧！',
      allyNo:  '结盟？你还不够格让兄弟会卖命。',
      warCry:  '敬酒不吃吃罚酒！兄弟会的战车已经发动！',
      peace:   '……停战可以，但记住，是我们"允许"你活着。',
      refuse:  '敢拒绝兄弟会？有骨气，但愿你的城墙也有。',
    },
    warStrength: 1.6,              // ⚔️ 袭击队强度系数（最强）
    aiAggression: 1,               // 关系 ≤-80 时会主动宣战
  },

  // ----------------------------------------------------------
  // 🔬 极地科考团 —— 中立派，科技换资源
  // ----------------------------------------------------------
  polar: {
    id: 'polar',
    name: '极地科考团',
    icon: '🔬',
    motto: '「知识是唯一的货币。」',
    personality: 'neutral',        // ❄️ 中立派：只关心科研，等价交换
    startRel: 0,                   // 初始关系 0
    color: '#7fd4ff',              // UI 主色（冰晶蓝）
    desc: '驻扎在火星极冠的科研团队，不问政治，只问数据。' +
          '他们愿意用科技点交换稀土、铀矿等科研物资，童叟无欺。' +
          '他们对战争毫无兴趣，但若你攻击他们，' +
          '整个火星科研界都会记住这笔账。',
    traits: ['🔬 富产科技点', '⚖️ 绝对等价交换', '❄️ 政治中立', '📡 偶尔分享科研突破'],
    // 🎁 喜好：科研物资
    likes: ['tech', 'rare', 'uranium', 'he3'],
    dislikes: [],
    // 🤝 科技换资源提议
    offers: [
      { give: { tech: 8 },  get: { rare: 15 },    text: '极地科考团提议：8 点科技资料换 15 稀土，用于光谱仪校准。' },
      { give: { tech: 12 }, get: { uranium: 6 },  text: '我们需要 6 铀矿做同位素实验，回报 12 点科技。等价交换。' },
      { give: { tech: 6 },  get: { he3: 3 },      text: '聚变实验缺 3 氦3，6 点科技作为报酬。' },
      { give: { tech: 10 }, get: { ice: 40 },     text: '极冠冰芯样本不足，40 冰水换 10 点科技。' },
    ],
    // 🎁 关系好时分享科研突破（直接送科技点）
    gifts: [
      { give: { tech: 5 }, text: '极地科考团分享了一项科研突破：科技 +5。「知识应当共享。」' },
    ],
    tribute: null,                 // 中立派不索贡
    dialog: {
      greet:   '样本编号、坐标、数据——说吧，你带来了什么？',
      pactYes: '贸易协定已归档。效率提升 20%，符合预期。',
      pactNo:  '数据不足，无法建立长期合作模型。',
      allyYes: '……意外，但合理。科考团的无人机将协助你的防线。',
      allyNo:  '军事同盟不在我们的研究计划内。',
      warCry:  '记录：你选择了暴力。我们将以数据的方式记住这一天。',
      peace:   '冲突终止。希望下次见面时，话题是科学。',
      refuse:  '已记录。等价交换原则依然有效。',
    },
    warStrength: 1.0,              // ⚔️ 袭击队强度系数（中等）
    aiAggression: 0,               // 几乎不主动宣战（除非关系 ≤-95）
  },
};

// ============================================================
// 🕊️ DiplomacyManager：外交管理器
// ============================================================
class DiplomacyManager {
  constructor() {
    const now = Date.now();
    // ❤️ 关系值：-100 ~ +100
    this.relation = { hope: 20, rust: -10, polar: 0 };
    // 📜 条约状态
    this.pacts = { hope: false, rust: false, polar: false };      // 贸易协定
    this.alliances = { hope: false, rust: false, polar: false };  // 军事同盟
    this.wars = { hope: false, rust: false, polar: false };       // 战争状态
    // 🕸️ 殖民地之间的动态关系（-100 ~ +100，影响交叉事件）
    this.ties = { hope_rust: -25, hope_polar: 30, rust_polar: -10 };
    // 📜 历史记录：最近 20 条外交事件
    this.log = [];
    // ⏳ 待处理的 AI 提议 / 索贡 {colony, kind, give, get, cost, text, until}
    this.pending = null;
    // ⏱️ 各类事件的下一次触发时间
    this.lastDrift = now;
    this.nextOffer = now + 90000 + Math.random() * 120000;    // 贸易提议 1.5~3.5 分钟后首次
    this.nextTribute = now + 150000 + Math.random() * 120000; // 索贡 2.5~4.5 分钟后首次
    this.nextFriction = now + 120000 + Math.random() * 180000;// 边境摩擦
    this.nextCross = now + 300000 + Math.random() * 240000;   // 殖民地间交叉事件
    this.nextGift = now + 240000 + Math.random() * 240000;    // AI 主动赠礼
    this.nextWarRaid = {};                                    // 战争中 AI 袭击计时
    this.game = null;      // bindUI 注入
    this._panel = null;    // 外交面板 DOM
    this._uiTimer = null;  // 面板刷新计时器
    this._giftFormFor = null; // 送礼表单展开的殖民地
    this.logEvent('📡 外交频道已建立，与三个殖民地取得联系。');
  }

  // ---------- 🔧 内部小工具 ----------
  _toast(game, msg) { if (game && game.toast) game.toast(msg); }
  _sfx(game, name) { if (game && game.sound && game.sound.play) { try { game.sound.play(name); } catch (e) {} } }
  _clamp(v) { return Math.max(-100, Math.min(100, Math.round(v))); }

  // 🏛️ 使节馆数量（防御性：builder 可能不存在）
  countEmbassy(game) {
    try {
      if (game && game.builder && typeof game.builder.count === 'function') return game.builder.count('embassy');
      if (game && game.builder && Array.isArray(game.builder.buildings))
        return game.builder.buildings.filter(b => b.id === 'embassy').length;
    } catch (e) {}
    return 0;
  }

  // 📉 条约门槛折扣：每座使节馆 -10
  treatyDiscount(game) { return this.countEmbassy(game) * 10; }
  // 📉 贸易协定门槛（基础 30）
  pactNeed(game) { return Math.max(10, 30 - this.treatyDiscount(game)); }
  // 📉 军事同盟门槛（基础 70）
  allyNeed(game) { return Math.max(30, 70 - this.treatyDiscount(game)); }

  // ❤️ 调整关系（含钳制、战争检查、日志）
  _addRel(id, delta, reason, game) {
    if (!(id in this.relation)) return;
    const before = this.relation[id];
    this.relation[id] = this._clamp(before + delta);
    if (reason) this.logEvent(`${COLONIES[id].icon} ${COLONIES[id].name}：${reason}（${before} → ${this.relation[id]}）`);
    // 🔥 关系崩盘 → AI 可能主动宣战
    const v = this.relation[id];
    const col = COLONIES[id];
    const warLine = col.aiAggression > 0 ? -80 : -95;
    if (!this.wars[id] && v <= warLine && game) {
      this.declareWar(id, true, game);
    }
    this._refreshPanel();
  }

  // 📜 记录历史（只保留最近 20 条）
  logEvent(text) {
    const t = new Date();
    const hh = String(t.getHours()).padStart(2, '0');
    const mm = String(t.getMinutes()).padStart(2, '0');
    this.log.unshift(`[${hh}:${mm}] ${text}`);
    if (this.log.length > 20) this.log.length = 20;
  }

  // 🏷️ 关系等级称号
  relationTitle(v) {
    if (v <= -50) return { name: '敌对', icon: '😡', color: '#ff4d4d' };
    if (v <= -10) return { name: '冷淡', icon: '😐', color: '#ffa94d' };
    if (v < 30)   return { name: '中立', icon: '🙂', color: '#ffd43b' };
    if (v < 70)   return { name: '友好', icon: '😄', color: '#69db7c' };
    return { name: '盟友', icon: '🤝', color: '#4dabf7' };
  }

  // ---------- ⏱️ 主更新：每 tick 调用 ----------
  update(now, game) {
    if (!game) return;
    this._drift(now, game);       // 关系缓慢向 0 回归
    this._offerTick(now, game);   // AI 贸易提议 / 赠礼
    this._tributeTick(now, game); // 铁锈兄弟会索贡
    this._frictionTick(now, game);// 边境摩擦
    this._crossTick(now, game);   // 殖民地间动态关系
    this._warTick(now, game);     // 战争中 AI 袭击
    this._expirePending(now, game);// 待处理事项超时
  }

  // 📉 关系回归：每 60 秒向 0 靠拢 1 点；每座使节馆 +50% 速度
  _drift(now, game) {
    const INTERVAL = 60000;
    if (now - this.lastDrift < INTERVAL) return;
    this.lastDrift = now;
    const speed = 1 + this.countEmbassy(game) * 0.5;
    for (const id of Object.keys(this.relation)) {
      const v = this.relation[id];
      if (v === 0 || this.wars[id]) continue; // 战争中不回归
      const step = Math.min(Math.abs(v), speed) * Math.sign(v);
      const nv = this._clamp(v - step);
      if (nv !== v) this.relation[id] = nv;
    }
  }

  // 🤝 AI 贸易提议 / 赠礼事件
  _offerTick(now, game) {
    // 🎁 AI 主动赠礼（关系 ≥40 的殖民地偶尔送温暖）
    if (now >= this.nextGift) {
      this.nextGift = now + 240000 + Math.random() * 300000;
      const candidates = Object.keys(COLONIES).filter(id =>
        !this.wars[id] && this.relation[id] >= 40 && COLONIES[id].gifts.length > 0);
      if (candidates.length > 0) {
        const id = candidates[Math.floor(Math.random() * candidates.length)];
        const g = COLONIES[id].gifts[Math.floor(Math.random() * COLONIES[id].gifts.length)];
        this._grantResources(game, g.give);
        this._addRel(id, 3, `主动赠送了物资`, game);
        this._toast(game, `${COLONIES[id].icon} ${g.text}`);
        this._sfx(game, 'coin');
        this._refreshPanel();
        return;
      }
    }
    // 🤝 贸易提议
    if (now < this.nextOffer || this.pending) return;
    this.nextOffer = now + 300000 + Math.random() * 300000; // 5~10 分钟一次
    const candidates = Object.keys(COLONIES).filter(id => !this.wars[id] && this.relation[id] > -30);
    if (candidates.length === 0) return;
    const id = candidates[Math.floor(Math.random() * candidates.length)];
    const col = COLONIES[id];
    const offer = col.offers[Math.floor(Math.random() * col.offers.length)];
    this.pending = {
      colony: id, kind: 'trade',
      give: Object.assign({}, offer.give), get: Object.assign({}, offer.get),
      text: offer.text, until: now + 180000, // 3 分钟内有效
    };
    this._toast(game, `${col.icon} ${col.name}发来贸易提议：「${offer.text}」——点击🕊️外交面板接受/拒绝`);
    this._sfx(game, 'notify');
    this._refreshPanel();
  }

  // 💰 铁锈兄弟会索贡
  _tributeTick(now, game) {
    if (now < this.nextTribute || this.pending || this.wars.rust) return;
    this.nextTribute = now + 240000 + Math.random() * 180000; // 4~7 分钟一次
    if (this.relation.rust <= -80) return; // 已经快开战了，不再索贡，直接等宣战
    const col = COLONIES.rust;
    const opt = col.tribute.options[Math.floor(Math.random() * col.tribute.options.length)];
    this.pending = {
      colony: 'rust', kind: 'tribute',
      cost: Object.assign({}, opt.cost), text: opt.text, until: now + 180000,
    };
    this._toast(game, `⚙️ ${opt.text} —— 点击🕊️外交面板处理（3 分钟内有效）`);
    this._sfx(game, 'warn');
    this._refreshPanel();
  }

  // 🌵 边境摩擦：随机小事件，关系 ±
  _frictionTick(now, game) {
    if (now < this.nextFriction) return;
    this.nextFriction = now + 180000 + Math.random() * 240000; // 3~7 分钟
    const ids = Object.keys(COLONIES).filter(id => !this.wars[id]);
    if (ids.length === 0) return;
    const id = ids[Math.floor(Math.random() * ids.length)];
    const col = COLONIES[id];
    const roll = Math.random();
    if (roll < 0.45) {
      // 😊 正面小事件
      const good = [
        '你们的巡逻队帮他们修好了水管，',
        '联合科考小队传回好消息，',
        '货船在半路互相让行，',
        '孩子们在边界踢了一场友谊赛，',
      ];
      const d = 3 + Math.floor(Math.random() * 4);
      const msg = good[Math.floor(Math.random() * good.length)];
      this._toast(game, `${col.icon} ${msg}与${col.name}关系 +${d}`);
      this._addRel(id, d, '边境友好小事件', game);
    } else if (roll < 0.8) {
      // 😟 负面小事件
      const bad = [
        '你们的采矿车越界 200 米，',
        '一批货物的归属起了争执，',
        '通讯频道互相干扰了一整天，',
        '边界水源分配谈崩了，',
      ];
      const d = -(3 + Math.floor(Math.random() * 5));
      const msg = bad[Math.floor(Math.random() * bad.length)];
      this._toast(game, `${col.icon} ${msg}与${col.name}关系 ${d}`);
      this._addRel(id, d, '边境摩擦', game);
    } else {
      // 😐 无事发生（虚惊一场）
      this.logEvent(`${col.icon} ${col.name}：边界一切平静。`);
    }
    this._sfx(game, 'notify');
  }

  // 🕸️ 殖民地之间的动态关系事件
  _crossTick(now, game) {
    if (now < this.nextCross) return;
    this.nextCross = now + 480000 + Math.random() * 360000; // 8~14 分钟
    const pairs = Object.keys(this.ties);
    const key = pairs[Math.floor(Math.random() * pairs.length)];
    const [a, b] = key.split('_');
    const A = COLONIES[a], B = COLONIES[b];
    const delta = (Math.random() < 0.5 ? -1 : 1) * (5 + Math.floor(Math.random() * 11));
    this.ties[key] = this._clamp(this.ties[key] + delta);
    let text, spill = null;
    if (delta > 0) {
      const ups = [
        `${A.icon}${A.name} 与 ${B.icon}${B.name} 签署了互助备忘录，关系改善。`,
        `${A.name} 向 ${B.name} 分享了物资，两家走得更近了。`,
      ];
      text = ups[Math.floor(Math.random() * ups.length)];
    } else {
      const downs = [
        `${A.icon}${A.name} 与 ${B.icon}${B.name} 因为矿区归属大吵一架，关系恶化。`,
        `${B.name} 指责 ${A.name} 截留了货船，两家关系紧张。`,
      ];
      text = downs[Math.floor(Math.random() * downs.length)];
      // 🌊 外溢：关系恶化的一方迁怒于你（小幅）
      spill = Math.random() < 0.5 ? a : b;
    }
    this.logEvent('🕸️ ' + text);
    this._toast(game, '🕸️ ' + text);
    if (spill && !this.wars[spill]) {
      this._addRel(spill, -3, '受殖民地间矛盾波及', game);
    }
    // 🕊️ 新希望站偶尔调停：若某对关系很差，希望站出面缓和
    if (this.ties[key] < -50 && this.relation.hope >= 30 && Math.random() < 0.5) {
      this.ties[key] = this._clamp(this.ties[key] + 15);
      this.logEvent('🕊️ 新希望站出面调停，局势有所缓和。');
      this._toast(game, '🕊️ 新希望站出面调停了殖民地矛盾。');
    }
  }

  // ⚔️ 战争中：AI 定期派袭击队
  _warTick(now, game) {
    for (const id of Object.keys(this.wars)) {
      if (!this.wars[id]) continue;
      if (!this.nextWarRaid[id] || now >= this.nextWarRaid[id]) {
        this.nextWarRaid[id] = now + 240000 + Math.random() * 180000; // 4~7 分钟一波
        const strength = Math.round(10 * COLONIES[id].warStrength);
        this._toast(game, `${COLONIES[id].icon} ${COLONIES[id].name}的袭击队正在接近！（强度 ${strength}）`);
        this._sfx(game, 'alarm');
        this.logEvent(`⚔️ ${COLONIES[id].name} 发动袭击（强度 ${strength}）`);
        if (game.military && typeof game.military.startRaid === 'function') {
          try { game.military.startRaid(strength); } catch (e) {}
        } else {
          // 🛡️ 无军事系统时的降级：直接小额破坏资源以示"被袭击"
          this._toast(game, '⚠️（未检测到军事系统，本次袭击仅造成轻微物资损失）');
        }
      }
    }
  }

  // ⏳ 待处理事项超时
  _expirePending(now, game) {
    if (!this.pending || now < this.pending.until) return;
    const p = this.pending;
    this.pending = null;
    if (p.kind === 'tribute') {
      this._toast(game, `⚙️ 你无视了铁锈兄弟会的索贡，他们很生气！关系 ${COLONIES.rust.tribute.expireRel}`);
      this._addRel('rust', COLONIES.rust.tribute.expireRel, '无视索贡', game);
      this._sfx(game, 'warn');
    } else {
      this.logEvent(`${COLONIES[p.colony].icon} ${COLONIES[p.colony].name} 的提议已过期。`);
      this._addRel(p.colony, -2, '提议被无视', game);
    }
    this._refreshPanel();
  }

  // ---------- 🎁 资源收发（防御性） ----------
  _grantResources(game, give) {
    if (!game || !game.player || !game.player.inv) return;
    for (const k of Object.keys(give)) {
      game.player.inv[k] = (game.player.inv[k] || 0) + give[k];
    }
  }
  // 检查并扣除资源；不足则 toast 并返回 false
  _payCost(game, cost) {
    if (!game || !game.player || !game.player.inv) return false;
    const inv = game.player.inv;
    for (const k of Object.keys(cost)) {
      if ((inv[k] || 0) < cost[k]) {
        const r = DIPLO_RES[k] || { icon: '', name: k };
        this._toast(game, `⚠️ 资源不足：${r.icon}${r.name} 需要 ${cost[k]}，当前 ${Math.floor(inv[k] || 0)}`);
        return false;
      }
    }
    for (const k of Object.keys(cost)) inv[k] -= cost[k];
    return true;
  }
  _costText(cost) {
    return Object.keys(cost).map(k => {
      const r = DIPLO_RES[k] || { icon: '', name: k };
      return `${r.icon}${r.name}×${cost[k]}`;
    }).join(' ');
  }

  // ============================================================
  // 🎮 玩家主动操作
  // ============================================================

  // 🎁 送礼：扣除资源，按价值与喜好加关系
  sendGift(id, resKey, amount) {
    const game = this.game;
    if (!game) return false;
    const col = COLONIES[id];
    if (!col) return false;
    if (this.wars[id]) { this._toast(game, `⚔️ 战争期间无法向${col.name}送礼！`); return false; }
    amount = Math.max(1, Math.floor(amount || 0));
    const r = DIPLO_RES[resKey] || { icon: '', name: resKey };
    if (!this._payCost(game, { [resKey]: amount })) return false;
    // 💝 关系加成：基础 = 数量/10；贵重资源翻倍；喜好 ×1.5；厌恶 ×0.5
    let gain = amount / 10;
    if (DIPLO_PRECIOUS[resKey]) gain *= DIPLO_PRECIOUS[resKey];
    if (col.likes.includes(resKey)) gain *= 1.5;
    if (col.dislikes.includes(resKey)) gain *= 0.5;
    gain = Math.min(15, Math.floor(gain));
    if (gain < 1) gain = 1;
    this._toast(game, `${col.icon} 向${col.name}赠送了 ${r.icon}${r.name}×${amount}，关系 +${gain}`);
    this._addRel(id, gain, `接受赠礼 ${r.name}×${amount}`, game);
    this._sfx(game, 'coin');
    this._refreshPanel();
    return true;
  }

  // 🤝 贸易协定：需关系 ≥30（使节馆每座 -10），贸易收益 +20%
  proposePact(id) {
    const game = this.game;
    if (!game) return false;
    const col = COLONIES[id];
    if (this.wars[id]) { this._toast(game, `⚔️ 先停战，再谈贸易！`); return false; }
    if (this.pacts[id]) { this._toast(game, `📜 已与${col.name}签署贸易协定`); return false; }
    const need = this.pactNeed(game);
    if (this.relation[id] < need) {
      this._toast(game, `🤝 ${col.name}拒绝了贸易协定：「${col.dialog.pactNo}」（需要关系 ≥${need}，当前 ${this.relation[id]}）`);
      this._sfx(game, 'deny');
      return false;
    }
    // 📝 签约费
    if (!this._payCost(game, { iron: 30 })) return false;
    this.pacts[id] = true;
    // 💰 贸易收益 +20%：写入 game.tradeMul 供别处读取
    game.tradeMul = (game.tradeMul || 1) * 1.2;
    this._toast(game, `📜 ${col.dialog.pactYes}（贸易收益 +20%）`);
    this.logEvent(`📜 与${col.name}签署贸易协定，贸易收益 +20%`);
    this._addRel(id, 5, '签署贸易协定', game);
    this._sfx(game, 'pact');
    this._refreshPanel();
    return true;
  }

  // 🛡️ 军事同盟：需关系 ≥70（使节馆每座 -10），被袭时 AI 派援军
  proposeAlliance(id) {
    const game = this.game;
    if (!game) return false;
    const col = COLONIES[id];
    if (this.wars[id]) { this._toast(game, `⚔️ 先停战，再谈结盟！`); return false; }
    if (this.alliances[id]) { this._toast(game, `🛡️ 已与${col.name}结盟`); return false; }
    const need = this.allyNeed(game);
    if (this.relation[id] < need) {
      this._toast(game, `🛡️ ${col.name}拒绝了军事同盟：「${col.dialog.allyNo}」（需要关系 ≥${need}，当前 ${this.relation[id]}）`);
      this._sfx(game, 'deny');
      return false;
    }
    // 📝 结盟需要一点"诚意金"（军事协调费）
    if (!this._payCost(game, { steel: 20 })) return false;
    this.alliances[id] = true;
    this._toast(game, `🛡️ ${col.dialog.allyYes}`);
    this.logEvent(`🛡️ 与${col.name}缔结军事同盟`);
    this._addRel(id, 10, '缔结军事同盟', game);
    this._sfx(game, 'ally');
    this._refreshPanel();
    return true;
  }

  // ⚔️ 宣战：关系 ≤-50 可宣战，或随时手动宣战；byAI=true 为 AI 主动宣战
  declareWar(id, byAI, game) {
    game = game || this.game;
    const col = COLONIES[id];
    if (!col || this.wars[id]) return false;
    if (!byAI && this.relation[id] > -50) {
      // 🕊️ 手动宣战无需门槛，但给一次确认式提示（直接执行，按指令"或手动"）
      this._toast(game, `⚠️ 你主动向${col.name}宣战！`);
    }
    this.wars[id] = true;
    this.pacts[id] = false;
    this.alliances[id] = false;
    this.relation[id] = -100;
    // 💔 贸易加成回滚（曾签过协定的话）
    if (game && game.tradeMul && game.tradeMul > 1) {
      game.tradeMul = Math.max(1, game.tradeMul / 1.2);
    }
    const cry = byAI ? col.dialog.warCry : `你向${col.name}宣战了！`;
    this._toast(game, `⚔️ ${cry}`);
    this.logEvent(`⚔️ 与${col.name}进入战争状态${byAI ? '（对方宣战）' : '（我方宣战）'}`);
    this._sfx(game, 'war');
    // 🚨 30 秒后来第一波袭击（由 update → _warTick 触发）
    this.nextWarRaid[id] = Date.now() + 30000;
    this._refreshPanel();
    return true;
  }

  // 🕊️ 停战：花费铁矿，关系回到 -20
  makePeace(id) {
    const game = this.game;
    if (!game) return false;
    const col = COLONIES[id];
    if (!this.wars[id]) { this._toast(game, `🕊️ 当前未与${col.name}交战`); return false; }
    if (!this._payCost(game, { iron: 80 })) return false;
    this.wars[id] = false;
    this.relation[id] = -20;
    delete this.nextWarRaid[id];
    this._toast(game, `🕊️ ${col.dialog.peace}`);
    this.logEvent(`🕊️ 与${col.name}停战，关系回到 -20`);
    this._sfx(game, 'peace');
    this._refreshPanel();
    return true;
  }

  // ✅ 接受待处理的 AI 提议 / 索贡
  acceptPending() {
    const game = this.game;
    const p = this.pending;
    if (!game || !p) return false;
    const col = COLONIES[p.colony];
    if (p.kind === 'tribute') {
      if (!this._payCost(game, p.cost)) return false;
      this.pending = null;
      this._toast(game, `⚙️ 你向铁锈兄弟会上贡了 ${this._costText(p.cost)}，他们满意地离开了`);
      this._addRel('rust', col.tribute.acceptRel, '接受索贡上贡', game);
      this._sfx(game, 'coin');
    } else {
      // 贸易提议：检查玩家付得起
      if (!this._payCost(game, p.get)) return false;
      this.pending = null;
      this._grantResources(game, p.give);
      this._toast(game, `${col.icon} 交易完成！获得 ${this._costText(p.give)}`);
      this._addRel(p.colony, 5, '接受贸易提议', game);
      this._sfx(game, 'trade');
    }
    this._refreshPanel();
    return true;
  }

  // ❌ 拒绝待处理的 AI 提议 / 索贡
  rejectPending() {
    const game = this.game;
    const p = this.pending;
    if (!game || !p) return false;
    const col = COLONIES[p.colony];
    this.pending = null;
    if (p.kind === 'tribute') {
      this._toast(game, `⚙️ 你拒绝了铁锈兄弟会的索贡：「${col.dialog.refuse}」`);
      this._addRel('rust', col.tribute.refuseRel, '拒绝索贡', game);
      this._sfx(game, 'deny');
    } else {
      this._toast(game, `${col.icon} 你拒绝了${col.name}的贸易提议`);
      this._addRel(p.colony, -3, '拒绝贸易提议', game);
    }
    this._refreshPanel();
    return true;
  }

  // 🛡️ 盟友援军：game.js 在遭受袭击时调用（防御性）
  // 对每个军事同盟调用 game.military.addAllyDefense(n)
  onRaidStart(game) {
    game = game || this.game;
    if (!game) return 0;
    let totalAid = 0;
    const embassyN = this.countEmbassy(game);
    for (const id of Object.keys(this.alliances)) {
      if (!this.alliances[id] || this.wars[id]) continue;
      const aid = 15 + embassyN * 10;
      totalAid += aid;
      const col = COLONIES[id];
      this._toast(game, `🛡️ 盟友 ${col.icon}${col.name} 派来援军！防御 +${aid}`);
      this.logEvent(`🛡️ ${col.name} 派援军支援防御（+${aid}）`);
      if (game.military && typeof game.military.addAllyDefense === 'function') {
        try { game.military.addAllyDefense(aid); } catch (e) {}
      }
    }
    if (totalAid > 0) this._sfx(game, 'ally');
    return totalAid;
  }

  // ============================================================
  // 💾 存档 / 读档
  // ============================================================
  save() {
    const now = Date.now();
    return {
      v: 1,
      relation: Object.assign({}, this.relation),
      pacts: Object.assign({}, this.pacts),
      alliances: Object.assign({}, this.alliances),
      wars: Object.assign({}, this.wars),
      ties: Object.assign({}, this.ties),
      log: this.log.slice(0, 20),
      pending: this.pending ? Object.assign({}, this.pending, { inMs: Math.max(0, this.pending.until - now) }) : null,
      timers: {
        nextOfferIn: Math.max(0, this.nextOffer - now),
        nextTributeIn: Math.max(0, this.nextTribute - now),
        nextFrictionIn: Math.max(0, this.nextFriction - now),
        nextCrossIn: Math.max(0, this.nextCross - now),
        nextGiftIn: Math.max(0, this.nextGift - now),
        lastDriftAgo: Math.max(0, now - this.lastDrift),
      },
    };
  }

  load(data, game) {
    if (!data || typeof data !== 'object') return false;
    const now = Date.now();
    try {
      if (data.relation) for (const k of Object.keys(this.relation)) if (k in data.relation) this.relation[k] = this._clamp(data.relation[k]);
      if (data.pacts) for (const k of Object.keys(this.pacts)) this.pacts[k] = !!data.pacts[k];
      if (data.alliances) for (const k of Object.keys(this.alliances)) this.alliances[k] = !!data.alliances[k];
      if (data.wars) for (const k of Object.keys(this.wars)) this.wars[k] = !!data.wars[k];
      if (data.ties) for (const k of Object.keys(this.ties)) this.ties[k] = this._clamp(data.ties[k]);
      if (Array.isArray(data.log)) this.log = data.log.slice(0, 20);
      if (data.pending) {
        this.pending = Object.assign({}, data.pending);
        this.pending.until = now + (data.pending.inMs || 60000);
        delete this.pending.inMs;
      } else this.pending = null;
      const t = data.timers || {};
      this.nextOffer = now + (t.nextOfferIn || 180000);
      this.nextTribute = now + (t.nextTributeIn || 300000);
      this.nextFriction = now + (t.nextFrictionIn || 240000);
      this.nextCross = now + (t.nextCrossIn || 480000);
      this.nextGift = now + (t.nextGiftIn || 300000);
      this.lastDrift = now - Math.min(t.lastDriftAgo || 0, 60000);
      this.nextWarRaid = {};
      for (const id of Object.keys(this.wars)) if (this.wars[id]) this.nextWarRaid[id] = now + 120000;
      // 💰 读档后重算贸易加成（每个生效的贸易协定 ×1.2）
      if (game) {
        const n = Object.keys(this.pacts).filter(k => this.pacts[k]).length;
        if (n > 0) game.tradeMul = (game.tradeMul || 1) * Math.pow(1.2, n);
      }
      this.logEvent('💾 外交存档已载入。');
      return true;
    } catch (e) { return false; }
  }

  // ============================================================
  // 🖥️ UI：外交按钮 + 面板
  // ============================================================
  bindUI(game) {
    this.game = game || null;
    if (typeof document === 'undefined') return false;
    // 📌 优先追加到 #toolbar；没有则 fixed 右下角
    let btn = document.getElementById('btn-diplo');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'btn-diplo';
      btn.className = 'tool-btn';
      btn.innerHTML = '🕊️<small>外交</small>';
      const toolbar = document.getElementById('toolbar');
      if (toolbar) {
        toolbar.appendChild(btn);
      } else {
        btn.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:9999;padding:10px 14px;font-size:16px;';
        document.body.appendChild(btn);
      }
    }
    btn.onclick = () => this._togglePanel();
    return true;
  }

  _togglePanel() {
    if (this._panel && this._panel.style.display !== 'none') this._hidePanel();
    else this._showPanel();
  }

  _showPanel() {
    if (typeof document === 'undefined') return;
    if (!this._panel) this._buildPanel();
    this._renderPanel();
    this._panel.style.display = 'block';
    if (this._uiTimer) clearInterval(this._uiTimer);
    this._uiTimer = setInterval(() => this._renderPanel(), 1000); // ⏱️ 每秒刷新倒计时
  }

  _hidePanel() {
    if (this._panel) this._panel.style.display = 'none';
    if (this._uiTimer) { clearInterval(this._uiTimer); this._uiTimer = null; }
  }

  _refreshPanel() {
    if (this._panel && this._panel.style.display !== 'none') this._renderPanel();
  }

  // 🌌 深色太空风面板骨架（行内 style）
  _buildPanel() {
    const el = document.createElement('div');
    el.id = 'diplo-panel';
    el.style.cssText = [
      'position:fixed', 'right:12px', 'top:64px', 'width:380px', 'max-height:82vh',
      'overflow-y:auto', 'z-index:10000', 'display:none',
      'background:linear-gradient(160deg,#0b1026 0%,#141b3d 60%,#0b1026 100%)',
      'border:1px solid #3b4a8c', 'border-radius:12px', 'color:#dbe4ff',
      'font-size:13px', 'box-shadow:0 8px 32px rgba(0,0,0,.6)',
      'padding:12px', 'font-family:inherit',
    ].join(';');
    document.body.appendChild(el);
    this._panel = el;
  }

  // 🎨 渲染面板内容
  _renderPanel() {
    if (!this._panel) return;
    const game = this.game;
    const embN = this.countEmbassy(game);
    const now = Date.now();
    let html = '';

    // ---- 标题栏 ----
    html += `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">` +
      `<b style="font-size:15px">🕊️ 星际外交</b>` +
      `<button data-dact="close" style="${this._btnStyle()}">✖</button></div>`;
    html += `<div style="font-size:11px;opacity:.75;margin-bottom:8px">` +
      `🏛️ 使节馆×${embN}：关系回归速度 +${embN * 50}% · 条约门槛 -${embN * 10}` +
      `（协定需≥${this.pactNeed(game)} / 同盟需≥${this.allyNeed(game)}）</div>`;

    // ---- 待处理事项（贸易提议 / 索贡） ----
    if (this.pending) {
      const p = this.pending, col = COLONIES[p.colony];
      const left = Math.max(0, Math.ceil((p.until - now) / 1000));
      const detail = p.kind === 'tribute'
        ? `索贡：${this._costText(p.cost)}`
        : `我方付出 ${this._costText(p.get)} → 获得 ${this._costText(p.give)}`;
      html += `<div style="border:1px solid ${col.color};border-radius:8px;padding:8px;margin-bottom:10px;background:rgba(255,255,255,.04)">` +
        `<div style="margin-bottom:4px">${col.icon} <b>${col.name}</b> <span style="opacity:.6;font-size:11px">⏳${left}秒</span></div>` +
        `<div style="font-size:12px;margin-bottom:6px">「${p.text}」<br><span style="opacity:.8">${detail}</span></div>` +
        `<button data-dact="accept" style="${this._btnStyle('#69db7c')}">✅ 接受</button> ` +
        `<button data-dact="reject" style="${this._btnStyle('#ff8787')}">❌ 拒绝</button></div>`;
    }

    // ---- 三个殖民地 ----
    for (const id of Object.keys(COLONIES)) {
      const col = COLONIES[id];
      const v = this.relation[id];
      const title = this.relationTitle(v);
      // 关系条：-100~100 映射到 0~100%
      const pct = ((v + 100) / 200 * 100).toFixed(1);
      const status = this.wars[id] ? '⚔️ <b style="color:#ff4d4d">战争中</b>'
        : this.alliances[id] ? '🛡️ <b style="color:#4dabf7">军事同盟</b>'
        : this.pacts[id] ? '📜 <b style="color:#69db7c">贸易协定</b>' : '';
      html += `<div style="border:1px solid #2c3a6e;border-radius:10px;padding:10px;margin-bottom:10px;background:rgba(255,255,255,.03)">`;
      // 头部
      html += `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">` +
        `<span style="font-size:14px"><span style="font-size:18px">${col.icon}</span> <b>${col.name}</b></span>` +
        `<span style="color:${title.color};font-size:12px">${title.icon} ${title.name} ${v > 0 ? '+' : ''}${v}</span></div>`;
      html += `<div style="font-size:11px;opacity:.65;margin-bottom:6px">${col.motto}</div>`;
      // 关系条
      html += `<div style="height:10px;border-radius:5px;background:#1a2140;position:relative;margin-bottom:6px;overflow:hidden">` +
        `<div style="position:absolute;left:50%;top:0;bottom:0;width:1px;background:#5c6c9e"></div>` +
        `<div style="height:100%;width:${pct}%;border-radius:5px;background:linear-gradient(90deg,#ff4d4d,#ffd43b,#69db7c)"></div></div>`;
      if (status) html += `<div style="font-size:12px;margin-bottom:6px">${status}</div>`;
      // 四个操作按钮
      const pactNeed = this.pactNeed(game), allyNeed = this.allyNeed(game);
      const dis = (ok, reason) => ok ? '' : `disabled title="${reason}" style="${this._btnStyle()}opacity:.4;cursor:not-allowed"`;
      html += `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px">`;
      html += `<button data-dact="gift" data-did="${id}" style="${this._btnStyle()}">🎁 送礼</button>`;
      if (!this.pacts[id] && !this.wars[id])
        html += `<button data-dact="pact" data-did="${id}" ${dis(v >= pactNeed, `需要关系≥${pactNeed}`)} style="${this._btnStyle()}">🤝 贸易协定</button>`;
      if (!this.alliances[id] && !this.wars[id])
        html += `<button data-dact="ally" data-did="${id}" ${dis(v >= allyNeed, `需要关系≥${allyNeed}`)} style="${this._btnStyle()}">🛡️ 军事同盟</button>`;
      if (!this.wars[id])
        html += `<button data-dact="war" data-did="${id}" style="${this._btnStyle('#ff8787')}">⚔️ 宣战</button>`;
      else
        html += `<button data-dact="peace" data-did="${id}" style="${this._btnStyle('#69db7c')}">🕊️ 停战（铁×80）</button>`;
      html += `</div>`;
      // 🎁 送礼表单（展开）
      if (this._giftFormFor === id && !this.wars[id]) {
        const opts = DIPLO_RES_KEYS.map(k =>
          `<option value="${k}">${DIPLO_RES[k].icon}${DIPLO_RES[k].name}</option>`).join('');
        html += `<div style="margin-top:6px;padding:8px;border:1px dashed #3b4a8c;border-radius:8px">` +
          `<select id="dg-res-${id}" style="${this._inputStyle()}">${opts}</select> ` +
          [10, 20, 50].map(a => `<button data-dact="giftAmt" data-did="${id}" data-damt="${a}" style="${this._btnStyle()}">×${a}</button>`).join(' ') +
          `<div style="font-size:11px;opacity:.6;margin-top:4px">💡 ${col.name}偏好：${col.likes.map(k => DIPLO_RES[k].icon + DIPLO_RES[k].name).join(' ')}</div></div>`;
      }
      html += `</div>`;
    }

    // ---- 🕸️ 殖民地间关系 ----
    html += `<div style="font-size:12px;margin-bottom:6px"><b>🕸️ 殖民地间关系</b></div>`;
    const tieName = { hope_rust: '🌅↔⚙️', hope_polar: '🌅↔🔬', rust_polar: '⚙️↔🔬' };
    for (const k of Object.keys(this.ties)) {
      const v = this.ties[k];
      const c = v >= 20 ? '#69db7c' : v <= -20 ? '#ff8787' : '#ffd43b';
      html += `<div style="font-size:11px;opacity:.85">${tieName[k]} <span style="color:${c}">${v > 0 ? '+' : ''}${v}</span></div>`;
    }

    // ---- 📜 历史记录（最近 20 条） ----
    html += `<div style="font-size:12px;margin:8px 0 4px"><b>📜 外交日志</b> <span style="opacity:.5;font-size:11px">（最近20条）</span></div>`;
    html += `<div style="max-height:140px;overflow-y:auto;font-size:11px;line-height:1.7;opacity:.85;background:rgba(0,0,0,.25);border-radius:8px;padding:6px 8px">` +
      (this.log.length ? this.log.map(l => `<div>${l}</div>`).join('') : '<div>暂无记录</div>') + `</div>`;

    this._panel.innerHTML = html;
    // 事件委托
    this._panel.onclick = (e) => this._onPanelClick(e);
  }

  _btnStyle(accent) {
    return `background:${accent ? 'rgba(255,255,255,.08)' : '#232c5c'};color:${accent || '#dbe4ff'};` +
      `border:1px solid ${accent || '#3b4a8c'};border-radius:6px;padding:4px 10px;font-size:12px;cursor:pointer;`;
  }
  _inputStyle() {
    return 'background:#1a2140;color:#dbe4ff;border:1px solid #3b4a8c;border-radius:6px;padding:4px;font-size:12px;';
  }

  _onPanelClick(e) {
    const btn = e.target.closest('[data-dact]');
    if (!btn || btn.disabled) return;
    const act = btn.getAttribute('data-dact');
    const id = btn.getAttribute('data-did');
    if (act === 'close') return this._hidePanel();
    if (act === 'accept') return this.acceptPending();
    if (act === 'reject') return this.rejectPending();
    if (act === 'gift') { this._giftFormFor = this._giftFormFor === id ? null : id; return this._renderPanel(); }
    if (act === 'giftAmt') {
      const sel = document.getElementById(`dg-res-${id}`);
      const resKey = sel ? sel.value : 'iron';
      const amt = parseInt(btn.getAttribute('data-damt'), 10) || 10;
      return this.sendGift(id, resKey, amt);
    }
    if (act === 'pact') return this.proposePact(id);
    if (act === 'ally') return this.proposeAlliance(id);
    if (act === 'war') return this.declareWar(id, false);
    if (act === 'peace') return this.makePeace(id);
  }
}

// ============================================================
// 🏛️ 使节馆 embassy：3 级外交建筑（build.js 之后加载，直接扩展 BUILDINGS）
// ============================================================
if (typeof BUILDINGS !== 'undefined') {
  Object.assign(BUILDINGS, {
    embassy: {
      id: 'embassy', name: '使节馆', icon: '🏛️',
      levels: [null,
        // L1：初级使馆
        { cost: { iron: 60, rare: 20 }, needPop: 4, powerUse: 1, diplomacy: 1 },
        // L2：正式使馆
        { cost: { iron: 120, rare: 40, steel: 20 }, needPop: 8, powerUse: 2, diplomacy: 1 },
        // L3：星际大使馆
        { cost: { steel: 80, rare: 60, tech: 10 }, needPop: 15, powerUse: 2, diplomacy: 1 },
      ],
      desc: '🏛️ 外交使节馆：每座使关系回归速度 +50%、贸易协定/军事同盟门槛 -10（可叠加）；高等级提升殖民地好感',
    },
  });
}

// ---------- 🌍 全局挂载（无模块系统） ----------
if (typeof window !== 'undefined') {
  window.DiplomacyManager = DiplomacyManager;
  window.COLONIES = COLONIES;
  window.DIPLO_RES = DIPLO_RES;
}

// ---------- 🧪 Node 兼容（测试用） ----------
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DiplomacyManager, COLONIES, DIPLO_RES };
}
