/* 星港 — policy.js：政策系统（20 项政策 / 加成与代价） */

// ============================== 政策定义 ==============================
// cost: 颁布时一次性扣除（铁矿/食物/科技点等，沿用 resources.js 资源键）
// bonus / penalty: 效果键沿用 tech.js 的 fx 风格
//   - *Mul 结尾：乘区，<1 为减益方向（按语义，如 buildCostMul 0.9 = 降价 10%）
//   - *Bonus 结尾：加区，叠加
//   - 旗标（raidResist 等）：OR 逻辑
// penalty.upkeep: 每分钟维持费 {资源:数量}，交不起自动废除
// needs: 前置政策 id 数组（必须已颁布）
// 互斥组见 EXCLUSIVE_GROUPS：同组政策只能生效其一
const POLICY_CATS = {
  tax:      { name: '税收', icon: '💰' },
  military: { name: '军事', icon: '🛡️' },
  science:  { name: '科研', icon: '🔬' },
  welfare:  { name: '民生', icon: '🏥' },
};

const POLICY_DEFS = {
  // ==================== 税收系（5）：加成收入 / 代价人口增长 ====================
  // 📊 累进税
  // 平衡：+35% 贸易收入是中后期主力财源；-20% 增长在前期人口紧张时很痛，
  // 颁布费 20 科技点约等于一次中等科技，适合人口>50 后再颁。
  progressive_tax: {
    id: 'progressive_tax', name: '累进税', icon: '📊', cat: 'tax',
    desc: '富者多缴：贸易收入 +35%，建筑成本 -10%。人口增长 -20%。',
    cost: { tech: 20 },
    bonus: { tradeIncomeMul: 1.35, buildCostMul: 0.9 },
    penalty: { popGrowthMul: 0.8 },
    needs: [],
    flavor: '「火星不相信眼泪，但相信税单。」',
  },
  // 👥 人头税（与累进税互斥）
  // 平衡：按人头收税，人口越多越赚；但 -40% 增长几乎掐死自然增长，
  // 适合"人口已满、只想变现"的后期城市。前置无，颁布费便宜。
  poll_tax: {
    id: 'poll_tax', name: '人头税', icon: '👥', cat: 'tax',
    desc: '每人纳粮：按人口征税收入 +50%，士气 -10%。人口增长 -40%。',
    cost: { tech: 15 },
    bonus: { popIncomeMul: 1.5 },
    penalty: { popGrowthMul: 0.6, moraleMul: 0.9 },
    needs: [],
    flavor: '「呼吸，也要交税。」',
  },
  // ⛏️ 资源税
  // 平衡：采矿 +25% 让铁矿线起飞，但维持费每分钟 5 铁矿，
  // 前期铁矿紧张时可能入不敷出，适合矿机成群之后。
  resource_tax: {
    id: 'resource_tax', name: '资源税', icon: '⛏️', cat: 'tax',
    desc: '矿产专营：采矿产量 +25%，贸易收入 +20%。每分钟维持费 5 铁矿。',
    cost: { tech: 25 },
    bonus: { minerMul: 1.25, tradeIncomeMul: 1.2 },
    penalty: { popGrowthMul: 0.85, upkeep: { iron: 5 } },
    needs: [],
    flavor: '「每一锹土，都有城市的份。」',
  },
  // 🚚 贸易税
  // 平衡：贸易流 +50% 是数值最高的单项收入加成，代价仅 -10% 增长，
  // 但无前置、费用低，是税收系性价比之王，故 upkeep 用稀土卡一下中期。
  trade_tax: {
    id: 'trade_tax', name: '贸易税', icon: '🚚', cat: 'tax',
    desc: '关口抽成：贸易收入 +50%。人口增长 -10%，每分钟维持费 2 稀土。',
    cost: { tech: 15 },
    bonus: { tradeIncomeMul: 1.5 },
    penalty: { popGrowthMul: 0.9, upkeep: { rare: 2 } },
    needs: [],
    flavor: '「船来船往，皆是税源。」',
  },
  // 📜 遗产税
  // 平衡：建筑成本 -15% 全期有效，是"基建狂魔"的核心政策；
  // 代价是增长 -15%，与累进税叠加增长惩罚会很明显，需二选一。
  estate_tax: {
    id: 'estate_tax', name: '遗产税', icon: '📜', cat: 'tax',
    desc: '逝者遗产充公：建筑成本 -15%。人口增长 -15%。',
    cost: { tech: 30 },
    bonus: { buildCostMul: 0.85 },
    penalty: { popGrowthMul: 0.85 },
    needs: ['progressive_tax'],
    flavor: '「带不走的，就留下吧。」',
  },

  // ==================== 军事系（5）：加成防御 / 代价食物与人口 ====================
  // 🎖️ 义务兵役
  // 平衡：+50% 防御是前期抗陨石/袭击的最廉价解；
  // 食物消耗 +30% 在温室未成型时是真痛点，温室起来后几乎白嫖。
  conscription: {
    id: 'conscription', name: '义务兵役', icon: '🎖️', cat: 'military',
    desc: '全民服役：防御力 +50%。食物消耗 +30%，人口增长 -10%。',
    cost: { tech: 20 },
    bonus: { defenseMul: 1.5 },
    penalty: { foodUseMul: 1.3, popGrowthMul: 0.9 },
    needs: [],
    flavor: '「每个公民，都是城墙的一块砖。」',
  },
  // 🏭 军工优先
  // 平衡：防御 +30% 兼建筑 -10%，是军事系里的"经济型"选择；
  // -15% 增长换全期基建折扣，适合扩张期城市。
  military_industry: {
    id: 'military_industry', name: '军工优先', icon: '🏭', cat: 'military',
    desc: '枪炮即面包：防御力 +30%，建筑成本 -10%。人口增长 -15%。',
    cost: { iron: 60, tech: 10 },
    bonus: { defenseMul: 1.3, buildCostMul: 0.9 },
    penalty: { popGrowthMul: 0.85 },
    needs: [],
    flavor: '「流水线的一头是坦克，另一头是未来。」',
  },
  // 🛡️ 全民皆兵（与雇佣兵合法互斥）
  // 平衡：防御翻倍是全游戏最高单项防御，但食物 +50%、增长 -25%，
  // 长期开着等于慢性自杀，设计为"灾难预警时临时颁布"的应急政策。
  total_war: {
    id: 'total_war', name: '全民皆兵', icon: '🛡️', cat: 'military',
    desc: '总体战：防御力 +100%。食物消耗 +50%，人口增长 -25%。',
    cost: { tech: 40 },
    bonus: { defenseMul: 2.0 },
    penalty: { foodUseMul: 1.5, popGrowthMul: 0.75 },
    needs: ['conscription'],
    flavor: '「警报响起时，老人孩子也是士兵。」',
  },
  // 💰 雇佣兵合法（与义务兵役互斥）
  // 平衡：花钱买平安——防御 +40% 无人口代价，但每分钟 2 科技点 upkeep，
  // 科技点是硬通货，长期维持等于用未来换现在。
  mercenaries: {
    id: 'mercenaries', name: '雇佣兵合法', icon: '💰', cat: 'military',
    desc: '花钱买平安：防御力 +40%，无人口代价。每分钟维持费 2 科技点。',
    cost: { tech: 25 },
    bonus: { defenseMul: 1.4 },
    penalty: { upkeep: { tech: 2 } },
    needs: [],
    flavor: '「忠诚可以购买，按分钟计费。」',
  },
  // ☢️ 核威慑
  // 平衡：防御 +60% 且免疫突袭事件，是军事系终极形态；
  // 电力 +20% 消耗 + 前置军工优先，锁死后期build，数值上不超模。
  nuclear_deterrence: {
    id: 'nuclear_deterrence', name: '核威慑', icon: '☢️', cat: 'military',
    desc: '终极威慑：防御力 +60%，免疫突袭。电力消耗 +20%，人口增长 -10%。',
    cost: { uranium: 10, tech: 60 },
    bonus: { defenseMul: 1.6, raidResist: 1 },
    penalty: { powerUseMul: 1.2, popGrowthMul: 0.9 },
    needs: ['military_industry'],
    flavor: '「按钮在桌上，世界就安静了。」',
  },

  // ==================== 科研系（5）：加成科技 / 代价资源 ====================
  // 🔬 科研投入
  // 平衡：实验室 +50%、科技获取 +30%，科研系必点；
  // 每分钟 3 稀土 upkeep 让"无脑常驻"不可能，必须算好稀土账。
  research_funding: {
    id: 'research_funding', name: '科研投入', icon: '🔬', cat: 'science',
    desc: '举国搞科研：实验室产量 +50%，科技获取 +30%。每分钟维持费 3 稀土。',
    cost: { tech: 30 },
    bonus: { labMul: 1.5, techGainMul: 1.3 },
    penalty: { upkeep: { rare: 3 } },
    needs: [],
    flavor: '「今天的论文，是明天的氧气。」',
  },
  // 🧪 开放实验室
  // 平衡：实验室 +30%、科技 +20%，代价是防御 -10%（开放=泄密风险）；
  // 便宜好用，但和军事系混搭时要小心防御缺口。
  open_labs: {
    id: 'open_labs', name: '开放实验室', icon: '🧪', cat: 'science',
    desc: '知识无国界：实验室产量 +30%，科技获取 +20%。防御力 -10%。',
    cost: { tech: 20 },
    bonus: { labMul: 1.3, techGainMul: 1.2 },
    penalty: { defenseMul: 0.9, upkeep: { iron: 5 } },
    needs: [],
    flavor: '「显微镜下，没有秘密也没有敌人——只有数据。」',
  },
  // 📥 技术引进
  // 平衡：升级成本 -20% 全期省大钱，代价贸易收入 -10%；
  // 颁布费 20 科技点约 2~3 次升级回本，纯经济账很划算。
  tech_import: {
    id: 'tech_import', name: '技术引进', icon: '📥', cat: 'science',
    desc: '拿来主义：建筑升级成本 -20%。贸易收入 -10%，每分钟维持费 2 钢材。',
    cost: { tech: 20 },
    bonus: { upgradeCostMul: 0.8 },
    penalty: { tradeIncomeMul: 0.9, upkeep: { steel: 2 } },
    needs: [],
    flavor: '「站在巨人的货架上购物。」',
  },
  // ⚖️ 专利保护
  // 平衡：科技获取 +40% 是单项最高，但建筑成本 +10%；
  // 和"技术引进"的升级折扣对冲，适合"重科研轻基建"的玩法。
  patent_protection: {
    id: 'patent_protection', name: '专利保护', icon: '⚖️', cat: 'science',
    desc: '知识付费：科技获取 +40%。建筑成本 +10%。',
    cost: { tech: 25 },
    bonus: { techGainMul: 1.4 },
    penalty: { buildCostMul: 1.1 },
    needs: ['research_funding'],
    flavor: '「灵感很贵，抄更贵。」',
  },
  // 🚀 深空计划
  // 平衡：科技 +60%、发射成本 -20%，科研系天花板；
  // 每分钟 2 氦-3 是后期资源，锁死终局build，前期颁了也养不起。
  deep_space: {
    id: 'deep_space', name: '深空计划', icon: '🚀', cat: 'science',
    desc: '星辰大海：科技获取 +60%，发射成本 -20%。每分钟维持费 2 氦-3。',
    cost: { tech: 80 },
    bonus: { techGainMul: 1.6, launchCostMul: 0.8 },
    penalty: { upkeep: { he3: 2 } },
    needs: ['research_funding', 'patent_protection'],
    flavor: '「火星只是中转站。」',
  },

  // ==================== 民生系（5）：加成人口/士气 / 代价资源与电力 ====================
  // 🏥 免费医疗
  // 平衡：增长 +30%、士气 +15%，人口引擎核心；
  // 每分钟 4 食物 upkeep，前期温室没起来前是沉重负担。
  free_healthcare: {
    id: 'free_healthcare', name: '免费医疗', icon: '🏥', cat: 'welfare',
    desc: '全民医保：人口增长 +30%，士气 +15%。每分钟维持费 4 食物。',
    cost: { tech: 25 },
    bonus: { popGrowthMul: 1.3, moraleMul: 1.15 },
    penalty: { upkeep: { food: 4 } },
    needs: [],
    flavor: '「在火星，生病不是破产的理由。」',
  },
  // 🎓 义务教育
  // 平衡：科技 +25% 兼增长 +10%，民生系里的"科研混搭"位；
  // upkeep 5 水，中期水厂成型后几乎无感，前期慎点。
  compulsory_edu: {
    id: 'compulsory_edu', name: '义务教育', icon: '🎓', cat: 'welfare',
    desc: '知识普及：科技获取 +25%，人口增长 +10%。每分钟维持费 5 水。',
    cost: { tech: 20 },
    bonus: { techGainMul: 1.25, popGrowthMul: 1.1 },
    penalty: { upkeep: { water: 5 } },
    needs: [],
    flavor: '「每个孩子都该知道，头顶是哪里。」',
  },
  // 🌴 双休日
  // 平衡：士气 +25% 全游戏最高单项士气，代价全产量 -10%；
  // 士气影响事件与效率，适合"快乐但慢"的佛系玩法。
  weekend: {
    id: 'weekend', name: '双休日', icon: '🌴', cat: 'welfare',
    desc: '休息权入宪：士气 +25%。全建筑产量 -10%。',
    cost: { tech: 15 },
    bonus: { moraleMul: 1.25 },
    penalty: { allProdMul: 0.9 },
    needs: [],
    flavor: '「火星的一周，也该有两天属于自己。」',
  },
  // 👶 生育补贴
  // 平衡：增长 +50% 全游戏最高，食物 +25% 消耗 + 3 食物 upkeep 双重代价；
  // 和免费医疗叠加增长爆炸，但食物线会先爆炸。
  birth_subsidy: {
    id: 'birth_subsidy', name: '生育补贴', icon: '👶', cat: 'welfare',
    desc: '多生多补：人口增长 +50%。食物消耗 +25%，每分钟维持费 3 食物。',
    cost: { tech: 20 },
    bonus: { popGrowthMul: 1.5 },
    penalty: { foodUseMul: 1.25, upkeep: { food: 3 } },
    needs: ['free_healthcare'],
    flavor: '「摇篮里，是城市的未来。」',
  },
  // 🎭 文化工程
  // 平衡：士气 +30% 天花板，代价电力 +15%；
  // 后期核电/聚变起来后电力不是问题，是终局标配政策之一。
  culture_proj: {
    id: 'culture_proj', name: '文化工程', icon: '🎭', cat: 'welfare',
    desc: '精神火星：士气 +30%。电力消耗 +15%。',
    cost: { tech: 20 },
    bonus: { moraleMul: 1.3 },
    penalty: { powerUseMul: 1.15 },
    needs: ['compulsory_edu'],
    flavor: '「穹顶之下，也要有诗。」',
  },
};

// 互斥组：同组政策同时只能生效一项（颁布新项时自动废除同组旧项）
const EXCLUSIVE_GROUPS = [
  ['progressive_tax', 'poll_tax'],      // 税制二选一：累进 vs 人头
  ['conscription', 'mercenaries'],      // 兵源二选一：义务兵 vs 雇佣兵
];

const MAX_ACTIVE_POLICY = 5;            // 同时最多生效政策数
const UPKEEP_INTERVAL_MS = 60 * 1000;   // 维持费结算间隔：每分钟

// ============================== PolicyManager ==============================
class PolicyManager {
  constructor() {
    this.active = new Set();   // 已颁布政策 id
    this.history = [];         // 政策历史 log：{t, action:'enact'|'repeal'|'auto', id}
    this._upkeepTimer = 0;     // 维持费计时器（毫秒累积）
  }

  // ---- 查询 ----
  has(id) { return this.active.has(id); }
  def(id) { return POLICY_DEFS[id]; }
  activeList() { return [...this.active].map(id => POLICY_DEFS[id]).filter(Boolean); }

  // ---- 颁布政策 ----
  // 返回 true/false；失败原因通过 game.toast 告知玩家
  enact(id, game) {
    const def = POLICY_DEFS[id];
    if (!def) return false;
    if (this.active.has(id)) { game && game.toast && game.toast(`${def.icon} ${def.name} 已在实施中`); return false; }
    // 槽位检查
    if (this.active.size >= MAX_ACTIVE_POLICY) {
      game && game.toast && game.toast(`⚠️ 政策槽位已满（${MAX_ACTIVE_POLICY}/${MAX_ACTIVE_POLICY}），请先废除一项`);
      return false;
    }
    // 前置政策检查
    for (const need of (def.needs || [])) {
      if (!this.active.has(need)) {
        const nd = POLICY_DEFS[need];
        game && game.toast && game.toast(`⚠️ 颁布「${def.name}」需先实施「${nd ? nd.name : need}」`);
        return false;
      }
    }
    // 费用检查（防御性：game 可能缺 player.inv）
    const inv = game && game.player && game.player.inv;
    if (inv && def.cost) {
      for (const k of Object.keys(def.cost)) {
        if ((inv[k] || 0) < def.cost[k]) {
          game && game.toast && game.toast(`⚠️ 资源不足：颁布「${def.name}」需要 ${this._fmtCost(def.cost)}`);
          return false;
        }
      }
      for (const k of Object.keys(def.cost)) inv[k] -= def.cost[k];
    }
    // 互斥组：自动废除同组旧政策
    for (const group of EXCLUSIVE_GROUPS) {
      if (group.includes(id)) {
        for (const other of group) {
          if (other !== id && this.active.has(other)) this.repeal(other, game, true);
        }
      }
    }
    this.active.add(id);
    this._log('enact', id);
    game && game.toast && game.toast(`${def.icon} 已颁布「${def.name}」！${def.flavor}`);
    if (game && game.sound && game.sound.play) game.sound.play('policy');
    return true;
  }

  // ---- 废除政策（免费；silent=true 时不 toast，用于互斥自动替换） ----
  repeal(id, game, silent) {
    if (!this.active.has(id)) return false;
    this.active.delete(id);
    this._log('repeal', id);
    const def = POLICY_DEFS[id];
    if (!silent && game && game.toast && game.toast) {
      game.toast(`📤 已废除「${def ? def.name : id}」（免费）`);
    }
    return true;
  }

  // ---- 效果聚合 ----
  // 规则（写清）：
  //   1) key 以 Mul 结尾 → 乘区：全部连乘，初值 1（如 buildCostMul 0.9×0.85）
  //   2) key 以 Bonus 结尾 → 加区：全部相加，初值 0
  //   3) 其他 key（旗标如 raidResist）→ 取最大值（OR 语义）
  // bonus 与 penalty 的同名 key 在同一规则下合并计算（penalty 的 Mul<1 同样连乘）
  getEffect(key) {
    let mul = 1, add = 0, flag = 0, hit = false;
    for (const id of this.active) {
      const def = POLICY_DEFS[id];
      if (!def) continue;
      for (const zone of [def.bonus, def.penalty]) {
        if (!zone || zone[key] === undefined || key === 'upkeep') continue;
        hit = true;
        const v = zone[key];
        if (key.endsWith('Mul')) mul *= v;
        else if (key.endsWith('Bonus')) add += v;
        else flag = Math.max(flag, v);
      }
    }
    if (!hit) return key.endsWith('Mul') ? 1 : 0;
    if (key.endsWith('Mul')) return mul;
    if (key.endsWith('Bonus')) return add;
    return flag;
  }

  // ---- 维持费结算：每分钟调用一次（由 game 主循环驱动） ----
  // dtMs 为距离上次调用的毫秒数；交不起维持费的政策自动废除并 toast
  upkeepTick(game, dtMs) {
    this._upkeepTimer += (dtMs || 0);
    if (this._upkeepTimer < UPKEEP_INTERVAL_MS) return;
    this._upkeepTimer = 0;
    const inv = game && game.player && game.player.inv;
    if (!inv) return;
    for (const id of [...this.active]) {
      const def = POLICY_DEFS[id];
      const upkeep = def && def.penalty && def.penalty.upkeep;
      if (!upkeep) continue;
      let afford = true;
      for (const k of Object.keys(upkeep)) {
        if ((inv[k] || 0) < upkeep[k]) { afford = false; break; }
      }
      if (afford) {
        for (const k of Object.keys(upkeep)) inv[k] -= upkeep[k];
      } else {
        this.active.delete(id);
        this._log('auto', id);
        game.toast && game.toast(`⚠️ 「${def.name}」维持费不足（${this._fmtCost(upkeep)}），已自动废除`);
      }
    }
  }

  // ---- 存档 / 读档 ----
  save() {
    return { active: [...this.active], history: this.history.slice(-100) };
  }
  load(data) {
    this.active = new Set();
    this.history = [];
    if (!data) return;
    for (const id of (data.active || [])) if (POLICY_DEFS[id]) this.active.add(id);
    if (Array.isArray(data.history)) this.history = data.history.slice(-100);
  }

  // ---- 内部 ----
  _log(action, id) {
    this.history.push({ t: Date.now(), action, id });
    if (this.history.length > 200) this.history.shift();
  }
  _fmtCost(cost) {
    // 资源名中文化（resources.js 的 RES_DEFS 如存在则用其 name）
    const names = (typeof RES_DEFS !== 'undefined' && RES_DEFS) || {};
    return Object.keys(cost).map(k => `${cost[k]}${(names[k] && names[k].name) || k}`).join('、');
  }

  // ============================== UI 绑定 ==============================
  // 「政策」按钮 + 面板：四系页签，每项显示加成/代价/颁布按钮，已颁布高亮
  bindUI(game) {
    if (typeof document === 'undefined') return;
    const self = this;
    let panel = null, curCat = 'tax';

    // 政策按钮（v1.9-fix：用 tool-btn 统一样式，挂到底栏）
    const btn = document.createElement('button');
    btn.innerHTML = '📜<small>政策</small>';
    btn.className = 'tool-btn';
    btn.title = `颁布城市政策（${this.active.size}/${MAX_ACTIVE_POLICY}）`;
    btn.onclick = () => { panel ? close() : open(); };
    const toolbar = document.getElementById('toolbar');
    if (toolbar) toolbar.appendChild(btn);
    else {
      btn.style.cssText = 'margin-left:6px;cursor:pointer;';
      const topbar = document.getElementById('topbar') || document.body;
      topbar.appendChild(btn);
    }

    function open() {
      panel = document.createElement('div');
      panel.style.cssText = 'position:fixed;inset:10% 8%;background:#0f172a;color:#e2e8f0;' +
        'border:1px solid #334155;border-radius:12px;z-index:9999;display:flex;flex-direction:column;overflow:hidden;';
      panel.innerHTML =
        '<div style="display:flex;align-items:center;padding:10px 14px;border-bottom:1px solid #334155;">' +
        `<b>📜 城市政策</b><span style="margin-left:8px;color:#94a3b8;font-size:12px;">生效中 ${self.active.size}/${MAX_ACTIVE_POLICY}</span>` +
        '<button id="pl-close" style="margin-left:auto;cursor:pointer;">✖</button></div>' +
        '<div id="pl-tabs" style="display:flex;gap:6px;padding:8px 14px;border-bottom:1px solid #334155;"></div>' +
        '<div id="pl-list" style="flex:1;overflow-y:auto;padding:10px 14px;"></div>';
      document.body.appendChild(panel);
      panel.querySelector('#pl-close').onclick = close;
      renderTabs();
      renderList();
    }
    function close() { if (panel) { panel.remove(); panel = null; } }
    function renderTabs() {
      const tabs = panel.querySelector('#pl-tabs');
      tabs.innerHTML = '';
      for (const cid of Object.keys(POLICY_CATS)) {
        const c = POLICY_CATS[cid];
        const b = document.createElement('button');
        b.textContent = `${c.icon} ${c.name}`;
        b.style.cssText = `padding:4px 10px;cursor:pointer;border-radius:6px;border:1px solid #334155;` +
          `background:${cid === curCat ? '#1e40af' : '#1e293b'};color:#e2e8f0;`;
        b.onclick = () => { curCat = cid; renderTabs(); renderList(); };
        tabs.appendChild(b);
      }
    }
    function fxText(zone, good) {
      // zone: bonus(绿)/penalty(红)；upkeep 单独成行
      const parts = [];
      for (const k of Object.keys(zone || {})) {
        if (k === 'upkeep') continue;
        const v = zone[k];
        let s;
        if (k.endsWith('Mul')) s = `${k.replace(/Mul$/, '')} ×${v}`;
        else if (k.endsWith('Bonus')) s = `${k.replace(/Bonus$/, '')} +${v}`;
        else s = `${k}=${v}`;
        parts.push(s);
      }
      if (zone && zone.upkeep) parts.push('维持费 ' + self._fmtCost(zone.upkeep) + '/分钟');
      const color = good ? '#4ade80' : '#f87171';
      return parts.length ? `<div style="color:${color};font-size:12px;">${good ? '✅ ' : '⚠️ '}${parts.join('；')}</div>` : '';
    }
    function renderList() {
      const list = panel.querySelector('#pl-list');
      list.innerHTML = '';
      for (const id of Object.keys(POLICY_DEFS)) {
        const d = POLICY_DEFS[id];
        if (d.cat !== curCat) continue;
        const on = self.active.has(id);
        // 前置未满足时置灰提示
        const needNames = (d.needs || []).filter(n => !self.active.has(n))
          .map(n => POLICY_DEFS[n] ? POLICY_DEFS[n].name : n);
        const card = document.createElement('div');
        card.style.cssText = `border:1px solid ${on ? '#22c55e' : '#334155'};border-radius:8px;` +
          `padding:8px 10px;margin-bottom:8px;background:${on ? '#052e16' : '#111c30'};`;
        card.innerHTML =
          `<div style="display:flex;align-items:center;gap:6px;">` +
          `<span style="font-size:18px;">${d.icon}</span><b>${d.name}</b>` +
          (on ? '<span style="color:#22c55e;font-size:12px;">● 实施中</span>' : '') +
          `<span style="margin-left:auto;"></span></div>` +
          `<div style="font-size:12px;color:#cbd5e1;margin:4px 0;">${d.desc}</div>` +
          fxText(d.bonus, true) + fxText(d.penalty, false) +
          (d.cost && Object.keys(d.cost).length ? `<div style="font-size:12px;color:#fbbf24;">颁布费用：${self._fmtCost(d.cost)}</div>` : '') +
          (needNames.length ? `<div style="font-size:12px;color:#f87171;">前置：需先实施「${needNames.join('」「')}」</div>` : '') +
          `<div style="font-size:11px;color:#64748b;font-style:italic;margin-top:2px;">${d.flavor}</div>`;
        const actBtn = document.createElement('button');
        actBtn.textContent = on ? '废除（免费）' : '颁布';
        actBtn.style.cssText = 'margin-top:6px;cursor:pointer;padding:4px 14px;border-radius:6px;border:1px solid #475569;background:#1e293b;color:#e2e8f0;';
        actBtn.onclick = () => {
          const ok = on ? self.repeal(id, game) : self.enact(id, game);
          if (ok) { renderList(); btn.title = `颁布城市政策（${self.active.size}/${MAX_ACTIVE_POLICY}）`; }
        };
        card.appendChild(actBtn);
        list.appendChild(card);
      }
    }

    // 对外刷新钩子（game 主循环可调用）
    this._refreshBtn = () => { btn.title = `颁布城市政策（${self.active.size}/${MAX_ACTIVE_POLICY}）`; };
  }
}

// 挂到全局（加载于 build.js 之后、game.js 之前）
window.PolicyManager = PolicyManager;
window.POLICY_DEFS = POLICY_DEFS;
window.POLICY_CATS = POLICY_CATS;
window.EXCLUSIVE_GROUPS = EXCLUSIVE_GROUPS;
window.MAX_ACTIVE_POLICY = MAX_ACTIVE_POLICY;
