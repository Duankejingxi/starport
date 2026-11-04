/* 星港 — quantum.js：v1.7 量子系统（量子实验室 / 量子纠缠通讯 / 量子计算机） */

/* =====================================================================
 * 星港 v1.7 —— 量子系统
 * ---------------------------------------------------------------------
 * 内容：量子比特（qubit）新资源 / 量子实验室（qubit 产能建筑群）/
 *       量子纠缠通讯（贸易与建筑协同加成）/ 量子计算机（算力程序队列）/
 *       量子研究树（18 项）/ 纠缠协议（10 种）/ 计算程序（12 种）/
 *       量子事件：量子隧穿（随机传送资源）/ 量子退相干（建筑停工）/
 *       量子合同（8 个）/ 量子日志 / 存档
 *
 * 设计原则（纯机制，无剧情）：
 *   1. 时间模型：update(now, game) 内用 dt = now - 上次 tick 自动推进；
 *      game.speedMode === 2 时 2 倍速；暂停时主循环不调用 update，
 *      实验室/计算机/事件自然停摆。
 *   2. 所有 game 接口防御性读取：game.player.inv / game.builder.buildings /
 *      game.tech.has(id) / game.toast / game.sound / game.achievements /
 *      game.builder.powerBalance() 等，缺谁都不崩。
 *   3. 数值锚点见下方「数值平衡」注释（以 resources.js 的 RES_VALUE 为准：
 *      铁1 / 冰1 / 稀土3 / 铀8 / 氦3=15 / 钢材4 / 科技10）。
 *   4. qubit 是高级资源：1 qubit ≈ 12 科技点价值（QUBIT_VALUE = 120，
 *      以「科技=10」为锚），只产自量子建筑，永不自然衰减。
 *
 * 集成（给 game.js / index.html / resources.js，接入方照抄即可）：
 *   index.html：在 deep_space.js 之后、game.js 之前加
 *     <script src="quantum.js"></script>
 *   resources.js 的 RES_DEFS 里加：
 *     qubit: { name: '量子比特', icon: '⚛️', color: '#22d3ee' },
 *   resources.js 的 newInventory() 返回对象里加：qubit: 0,
 *   resources.js 的 RES_TIERS.advanced 里加 'qubit'，
 *   RES_VALUE 里加 qubit: 120，RES_DESC 里加 qubit 描述。
 *   game.js 构造函数：
 *     this.quantum = new QuantumManager();
 *     if (this.quantum.bindUI) this.quantum.bindUI(this);
 *   game.js tick(...) 内：
 *     if (this.quantum) this.quantum.update(now, this);
 *   game.js save() 的 data 里加：
 *     quantum: this.quantum ? this.quantum.save() : null,
 *   game.js load() 里加：
 *     if (data.quantum && this.quantum) this.quantum.load(data.quantum);
 *   实验室/电子建筑产量处乘退相干惩罚：
 *     const qDown = game.quantum ? game.quantum.buildingDownMul('lab', now) : 1;
 *   贸易结算处乘纠缠通讯加成：
 *     const qTrade = game.quantum ? game.quantum.getBuffs().tradeMul : 1;
 * ===================================================================== */

// 版本号（存档兼容检查用）
const QUANTUM_VERSION = '1.7.0';

// ---------------------------------------------------------------------
// 🧮 数值平衡总表（调数值只改这里，注释写清期望收益）
// ---------------------------------------------------------------------
const QTUNE = {
  // —— qubit 价值锚 ——
  // 1 qubit = 120 价值 ≈ 12 科技点；量子实验室单座期望产出见下
  QUBIT_VALUE: 120,

  // —— 量子实验室产能 ——
  // 基础实验室：每 60 秒产 1 qubit（= 120 价值/分钟）。
  // 对比：实验室产科技约 10 价值/分钟 × 若干座 → 量子线是后期高价值线，
  // 但需要电力 30/座 + 稀土维护，门槛高。
  QLAB_BASE_INTERVAL_MS: 60000,   // ⚛️ 基础产出间隔：60 秒 / qubit
  QLAB_BASE_YIELD: 1,             // 每次产出 qubit 数
  QLAB_POWER: 30,                 // ⚡ 每座耗电 30（缺电则停产，不扣 qubit）
  QLAB_UPKEEP_RARE_PER_MIN: 1,   // 🟣 每分钟维护消耗稀土 1（稀土不足则降速 50%）

  // —— 实验室升级：每座实验室独立 3 级 ——
  // 1 级：产出间隔 -25%（45 秒）；2 级：产出 +1（每次 2）；3 级：间隔 -25% 再叠（~34 秒）
  QLAB_UP_COST: [
    { steel: 60, tech: 40 },      // Lv1：约 640 价值
    { steel: 140, tech: 100 },    // Lv2：约 1560 价值
    { steel: 300, tech: 220 },    // Lv3：约 3400 价值
  ],

  // —— 量子计算机 ——
  // 算力：基础 1 算力/秒；程序按算力秒消耗推进；多程序串行队列。
  QCOMP_BASE_FLOPS: 1,            // 🖥️ 基础算力：1 算力/秒
  QCOMP_POWER: 50,                // 每台量子计算机耗电 50
  QCOMP_QUEUE_MAX: 3,             // 最多同时排 3 个程序（串行执行）

  // —— 纠缠通讯 ——
  // 纠缠基站：每座维持 2 对纠缠链路；链路连接两座建筑，提供协同加成。
  // 维持费：每对链路每分钟 0.2 qubit（从库存扣，不足则链路断开）。
  ENTANGLE_LINKS_PER_STATION: 2,  // 🛰️ 每座基站 2 对链路
  ENTANGLE_UPKEEP_QUBIT_PER_MIN: 0.2,  // 每对链路每分钟耗 qubit
  ENTANGLE_PROD_BONUS: 0.15,      // 链路两端建筑产量 +15%
  ENTANGLE_TRADE_BONUS: 0.10,     // 每对链路贸易收益 +10%（上限见下）
  ENTANGLE_TRADE_CAP: 0.50,       // 贸易加成上限 +50%

  // —— 相干度（全城量子系统健康度 0~1） ——
  // 相干度 < 0.3：实验室停产；< 0.5：计算机算力减半；= 0：触发退相干事件。
  // 自然恢复：+0.02/分钟；退相干护盾建筑：+0.05/分钟/座。
  COHERE_REGEN_PER_MIN: 0.02,
  COHERE_SHIELD_REGEN_PER_MIN: 0.05,
  COHERE_LAB_SHUTDOWN: 0.3,
  COHERE_COMP_HALF: 0.5,
  COHERE_DECAY_PER_EVENT: 0.15,   // 每次量子事件冲击 -0.15

  // —— 量子隧穿事件 ——
  // 每 8~14 分钟掷一次（需至少 1 座量子建筑在线）。
  // 结果三档：好（40%）：随机资源翻倍一小笔；坏（35%）：一小笔资源隧穿丢失；
  // 奇（25%）：资源种类随机置换（等价值）。
  TUNNEL_MIN_GAP: 8 * 60 * 1000,
  TUNNEL_MAX_GAP: 14 * 60 * 1000,
  TUNNEL_W_GOOD: 0.40,
  TUNNEL_W_BAD: 0.35,
  // 隧穿量：库存 5%~15%（至少 5，上限 200），按价值锚换算
  TUNNEL_MIN_QTY: 5,
  TUNNEL_MAX_QTY: 200,
  TUNNEL_PCT_MIN: 0.05,
  TUNNEL_PCT_MAX: 0.15,

  // —— 量子退相干事件 ——
  // 每 12~20 分钟掷一次（需相干度 < 0.6 或随机 25%）。
  // 效果：随机 2~5 座电子/量子建筑停工 45~90 秒；相干度 -0.15。
  DECOHERE_MIN_GAP: 12 * 60 * 1000,
  DECOHERE_MAX_GAP: 20 * 60 * 1000,
  DECOHERE_MIN_BUILDINGS: 2,
  DECOHERE_MAX_BUILDINGS: 5,
  DECOHERE_MIN_MS: 45000,
  DECOHERE_MAX_MS: 90000,

  // —— 量子研究 ——
  // 18 项研究，cost 以 qubit 为主；研究完成立即生效（fx 见 QRESEARCH_DEFS）。

  // —— 量子合同 ——
  // 每 10~18 分钟刷新一个（最多挂 3 个），完成后得 qubit/科技。

  // —— 日志 ——
  QLOG_MAX: 30,                   // 📜 量子日志只保留最近 30 条
  DT_CLAMP_MS: 120000,            // 单次 tick 最多推进 120 秒（防切后台跳变过大）
  PANEL_REFRESH_MS: 1000,         // 🖥️ 面板打开时每秒刷新一次
};

// ---------------------------------------------------------------------
// ⚛️ qubit 资源定义（接入方把 qubit 并入 RES_DEFS / newInventory）
// ---------------------------------------------------------------------
// 本地镜像定义：即使 resources.js 未接入，QuantumManager 也能独立工作。
const QUANTUM_RES = {
  qubit: {
    key: 'qubit',
    name: '量子比特',
    icon: '⚛️',
    color: '#22d3ee',
    value: 120,  // 对标 RES_VALUE（科技=10 → 1 qubit ≈ 12 科技点）
    desc: '量子实验室产出的高级资源，用于量子研究、纠缠通讯与计算机程序',
    tier: 'advanced',
  },
};

// qubit 库存键（game.player.inv.qubit）
const QUBIT_KEY = 'qubit';

// 确保库存对象有 qubit 键（防御性：resources.js 未接入时也能用）
function ensureQubit(inv) {
  if (!inv) return { qubit: 0 };
  if (typeof inv.qubit !== 'number' || isNaN(inv.qubit)) inv.qubit = 0;
  return inv;
}

// qubit 是否足够
function canAffordQubit(inv, n) {
  ensureQubit(inv);
  return (inv.qubit || 0) >= n;
}

// 扣除 qubit（先检查）
function spendQubit(inv, n) {
  ensureQubit(inv);
  if ((inv.qubit || 0) < n) return false;
  inv.qubit -= n;
  return true;
}

// 增加 qubit（带上限钳制，防溢出显示）
function gainQubit(inv, n) {
  ensureQubit(inv);
  inv.qubit = Math.min(999999, (inv.qubit || 0) + n);
  return inv.qubit;
}

// qubit 格式化显示（大数缩写）
function fmtQubit(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(2) + 'M';
  if (n >= 10000) return (n / 1000).toFixed(1) + 'k';
  if (n >= 100) return Math.floor(n).toString();
  if (n >= 10) return n.toFixed(1);
  return n.toFixed(2);
}

// 以价值锚估算一笔资源的总价值（隧穿事件换算用）
function estimateResValue(inv, resValue) {
  // resValue：RES_VALUE 镜像；缺省时用内置锚点
  const anchor = resValue || {
    iron: 1, ice: 1, rare: 3, uranium: 8, he3: 15,
    water: 1, food: 2, steel: 4, tech: 10, qubit: 120,
  };
  let total = 0;
  for (const k in anchor) {
    total += (inv[k] || 0) * anchor[k];
  }
  return total;
}

// ---------------------------------------------------------------------
// 🔬 量子研究树 QRESEARCH_DEFS（18 项 / 实验室·通讯·计算三系）
// ---------------------------------------------------------------------
// 字段说明：
//   id        研究唯一 id（存档引用，勿改）
//   name/icon 展示名
//   branch    分支：lab（实验室）/ comm（通讯）/ comp（计算）
//   cost      消耗 { qubit, tech, steel... }（一次性）
//   needs     前置研究 id 数组
//   desc      一句话说明
//   fx        效果键值（见下方「效果键说明」）
//   flavor    一句设定（纯设定，无剧情）
//
// 效果键说明：
//   qlabIntervalMul   量子实验室产出间隔倍率（<1 = 更快）
//   qlabYieldAdd      量子实验室每次产出 +N qubit
//   qlabPowerMul      量子实验室耗电倍率（<1 = 省电）
//   qcompFlopsMul     量子计算机算力倍率
//   qcompPowerMul     量子计算机耗电倍率
//   entangleLinksAdd  每座纠缠基站链路 +N 对
//   entangleUpkeepMul 纠缠链路维持费倍率（<1 = 更便宜）
//   entangleProdMul   纠缠链路产量加成倍率（叠加）
//   tradeQMul         量子纠缠贸易加成倍率（叠加）
//   cohereRegenAdd    相干度自然恢复 +N/分钟
//   cohereMaxAdd      相干度上限 +N（突破 1.0，最高 1.2）
//   tunnelGoodMul     隧穿好结果概率倍率
//   tunnelBadMul      隧穿坏结果概率倍率（<1 = 更少坏事）
//   decohereGapMul    退相干事件间隔倍率（>1 = 更少发生）
//   decohereDownMul   退相干停工时长倍率（<1 = 更短）
//   qubitCapAdd       qubit 库存软上限 +N（仅显示用，不硬锁）
//   unlockQBuilding   解锁量子建筑 id（0/1 开关）
const QRESEARCH_DEFS = {
  // ==================== 实验室系（lab） ====================
  'q-lab-1': {
    name: '超导腔体', icon: '🧊', branch: 'lab',
    cost: { qubit: 5 }, needs: [],
    desc: '毫开尔文超导腔，量子实验室产出间隔 -20%。',
    fx: { qlabIntervalMul: 0.8 },
    flavor: '把噪声冻在绝对零度之外。',
  },
  'q-lab-2': {
    name: '纠错码', icon: '🛡️', branch: 'lab',
    cost: { qubit: 12 }, needs: ['q-lab-1'],
    desc: '表面码纠错，相干度自然恢复 +0.02/分钟。',
    fx: { cohereRegenAdd: 0.02 },
    flavor: '错误被发现之前就被纠正了。',
  },
  'q-lab-3': {
    name: '多重量子阱', icon: '⚛️', branch: 'lab',
    cost: { qubit: 25 }, needs: ['q-lab-1'],
    desc: '并行量子阱，实验室每次产出 +1 qubit。',
    fx: { qlabYieldAdd: 1 },
    flavor: '一个阱里关着一整支量子大军。',
  },
  'q-lab-4': {
    name: '退相干护盾', icon: '🔰', branch: 'lab',
    cost: { qubit: 40 }, needs: ['q-lab-2'],
    desc: '主动退相干抑制，解锁退相干护盾建筑。',
    fx: { unlockQBuilding: 'qshield' },
    flavor: '给量子态撑起一把伞。',
  },
  'q-lab-5': {
    name: '室温超导', icon: '🌡️', branch: 'lab',
    cost: { qubit: 60 }, needs: ['q-lab-3', 'q-lab-4'],
    desc: '常压室温超导材料，实验室耗电 -40%。',
    fx: { qlabPowerMul: 0.6 },
    flavor: '冰箱终于可以退休了。',
  },
  'q-lab-6': {
    name: '量子优势', icon: '🌟', branch: 'lab',
    cost: { qubit: 120 }, needs: ['q-lab-5'],
    desc: '可编程量子优势，实验室产出间隔再 -25%（叠加）。',
    fx: { qlabIntervalMul: 0.75 },
    flavor: '经典计算机看不懂的答案。',
  },

  // ==================== 通讯系（comm） ====================
  'q-comm-1': {
    name: '纠缠分发', icon: '🔗', branch: 'comm',
    cost: { qubit: 8 }, needs: [],
    desc: '纠缠光子分发网，解锁纠缠基站建筑。',
    fx: { unlockQBuilding: 'entangle' },
    flavor: '一对光子，天各一方，心意相通。',
  },
  'q-comm-2': {
    name: '密集编码', icon: '📡', branch: 'comm',
    cost: { qubit: 18 }, needs: ['q-comm-1'],
    desc: '超密集编码，每座纠缠基站链路 +1 对。',
    fx: { entangleLinksAdd: 1 },
    flavor: '一个 qubit 顶两个用。',
  },
  'q-comm-3': {
    name: '量子中继', icon: '🛰️', branch: 'comm',
    cost: { qubit: 35 }, needs: ['q-comm-2'],
    desc: '纠缠交换中继，链路维持费 -30%。',
    fx: { entangleUpkeepMul: 0.7 },
    flavor: '接力赛，纠缠不断线。',
  },
  'q-comm-4': {
    name: '协同共振', icon: '🎵', branch: 'comm',
    cost: { qubit: 55 }, needs: ['q-comm-3'],
    desc: '建筑协同共振，纠缠链路产量加成 +50%（叠加）。',
    fx: { entangleProdMul: 1.5 },
    flavor: '两座工厂像一座一样呼吸。',
  },
  'q-comm-5': {
    name: '瞬时贸易', icon: '💱', branch: 'comm',
    cost: { qubit: 80 }, needs: ['q-comm-4'],
    desc: '纠缠态贸易结算，贸易收益加成 +50%（叠加）。',
    fx: { tradeQMul: 1.5 },
    flavor: '合同在签署前就已经履行了。',
  },
  'q-comm-6': {
    name: '全城纠缠', icon: '🌐', branch: 'comm',
    cost: { qubit: 130 }, needs: ['q-comm-5'],
    desc: '城市级纠缠网，每座基站链路再 +1 对（叠加）。',
    fx: { entangleLinksAdd: 1 },
    flavor: '整座城市是一个量子态。',
  },

  // ==================== 计算系（comp） ====================
  'q-comp-1': {
    name: '量子比特阵列', icon: '💻', branch: 'comp',
    cost: { qubit: 10 }, needs: [],
    desc: '50 比特阵列，解锁量子计算机建筑。',
    fx: { unlockQBuilding: 'qcomp' },
    flavor: '2^50 种可能同时在线。',
  },
  'q-comp-2': {
    name: '并行退火', icon: '🔥', branch: 'comp',
    cost: { qubit: 22 }, needs: ['q-comp-1'],
    desc: '量子退火优化，计算机算力 +50%。',
    fx: { qcompFlopsMul: 1.5 },
    flavor: '在能量地形里滑向最优解。',
  },
  'q-comp-3': {
    name: '隧穿阵列', icon: '🌀', branch: 'comp',
    cost: { qubit: 45 }, needs: ['q-comp-2'],
    desc: '可控隧穿实验，解锁隧穿阵列建筑（小概率复制资源）。',
    fx: { unlockQBuilding: 'tunnel' },
    flavor: '让资源从 A 点"借道"到 B 点。',
  },
  'q-comp-4': {
    name: '相干延长', icon: '⏳', branch: 'comp',
    cost: { qubit: 70 }, needs: ['q-comp-2'],
    desc: '动力学解耦，相干度上限 +0.1（突破 1.0）。',
    fx: { cohereMaxAdd: 0.1 },
    flavor: '把一秒掰成十秒用。',
  },
  'q-comp-5': {
    name: '量子机器学习', icon: '🧠', branch: 'comp',
    cost: { qubit: 100 }, needs: ['q-comp-3', 'q-comp-4'],
    desc: '变分量子本征求解器，计算机算力再 +60%（叠加）。',
    fx: { qcompFlopsMul: 1.6 },
    flavor: 'AI 开始用量子做梦。',
  },
  'q-comp-6': {
    name: '奇点模拟', icon: '🌌', branch: 'comp',
    cost: { qubit: 160 }, needs: ['q-comp-5'],
    desc: '全量子模拟，隧穿好结果概率 +50%，坏结果 -30%。',
    fx: { tunnelGoodMul: 1.5, tunnelBadMul: 0.7 },
    flavor: '在模拟里先把运气算好。',
  },
};

// 量子研究展示顺序（按分支分组）
const QRESEARCH_ORDER = [
  'q-lab-1', 'q-lab-2', 'q-lab-3', 'q-lab-4', 'q-lab-5', 'q-lab-6',
  'q-comm-1', 'q-comm-2', 'q-comm-3', 'q-comm-4', 'q-comm-5', 'q-comm-6',
  'q-comp-1', 'q-comp-2', 'q-comp-3', 'q-comp-4', 'q-comp-5', 'q-comp-6',
];

// 量子研究分支定义（UI 用）
const QRESEARCH_BRANCHES = {
  lab: { name: '实验室', icon: '🔬', color: '#22d3ee' },
  comm: { name: '通讯', icon: '📡', color: '#a5b4fc' },
  comp: { name: '计算', icon: '💻', color: '#f0abfc' },
};

// ---------------------------------------------------------------------
// 🏢 量子建筑定义 QBUILD_DEFS（6 种）
// ---------------------------------------------------------------------
// 字段说明：
//   id        建筑 id（与 builder.buildings 里的 b.id 对应；接入方在
//             build.js 的建筑表里加同名条目，或由 QuantumManager 代管）
//   name/icon 展示名
//   cost      建造成本
//   power     耗电（负数=发电；量子建筑全是耗电大户）
//   upkeep    每分钟维护 { rare: N } 等（QuantumManager 每分钟扣一次）
//   needQRes  需要的前置量子研究 id（无则 null；防御性：无研究时视为已解锁）
//   desc      说明
//   flavor    一句设定
//   fxText    效果文本（UI 用）
//
// 平衡思路：量子建筑是后期线，单座造价对标「核电站级」（~2000 价值），
// 回本靠 qubit 的高价值（120/个）。6 座实验室 ≈ 720 价值/分钟，
// 与一整套高级产线相当，但占地/耗电集中。
const QBUILD_DEFS = {
  'qlab': {
    name: '量子实验室', icon: '⚛️',
    cost: { steel: 120, tech: 80, rare: 40 },
    // 造价估算：120×4 + 80×10 + 40×3 = 480+800+120 = 1400 价值
    power: 30,
    upkeep: { rare: 1 },  // 每分钟 1 稀土
    needQRes: null,  // 基础建筑：有 qubit 概念即解锁（见下方解锁规则注释）
    desc: '产出量子比特的核心建筑。每 60 秒产 1 qubit，需要稳定电力与稀土维护。',
    fxText: ['每 60 秒 +1 ⚛️', '耗电 30', '每分钟耗稀土×1'],
    flavor: '整个房间就是一台冰箱，里面住着一群 qubit。',
    // 解锁规则：玩家拥有 ≥1 qubit 或解锁任一量子研究后可见；
    // QuantumManager.buildingVisible('qlab', game) 判定。
  },
  'entangle': {
    name: '纠缠基站', icon: '🔗',
    cost: { steel: 80, tech: 60, rare: 30 },
    // 造价：320+600+90 = 1010 价值
    power: 20,
    upkeep: { tech: 1 },  // 每分钟 1 科技点（校准消耗）
    needQRes: 'q-comm-1',
    desc: '维持量子纠缠链路。链路连接两座建筑，使其产量 +15%，并提升贸易收益。',
    fxText: ['每座维持 2 对纠缠链路', '链路两端产量 +15%', '每对链路贸易 +10%'],
    flavor: '天线指向的不是天空，是另一座建筑的"孪生兄弟"。',
  },
  'qcomp': {
    name: '量子计算机', icon: '💻',
    cost: { steel: 150, tech: 120, rare: 50 },
    // 造价：600+1200+150 = 1950 价值（最贵，算力是战略资源）
    power: 50,
    upkeep: { rare: 2 },  // 每分钟 2 稀土（稀释制冷剂补充）
    needQRes: 'q-comp-1',
    desc: '运行量子程序：科研加速、资源推演、灾害预测。每台每秒 1 算力。',
    fxText: ['算力 1/秒', '可排队 3 个程序', '耗电 50'],
    flavor: '它算的不是答案，是所有可能的答案。',
  },
  'qshield': {
    name: '退相干护盾', icon: '🔰',
    cost: { steel: 100, tech: 70, rare: 60 },
    // 造价：400+700+180 = 1280 价值
    power: 25,
    upkeep: { tech: 2 },
    needQRes: 'q-lab-4',
    desc: '主动抑制环境退相干。每座每分钟恢复全城相干度 +0.05，并缩短退相干停工。',
    fxText: ['相干度 +0.05/分钟/座', '退相干停工 -20%/座', '耗电 25'],
    flavor: '撑在城市上空的一把隐形伞。',
  },
  'tunnel': {
    name: '隧穿阵列', icon: '🌀',
    cost: { steel: 90, tech: 90, rare: 40 },
    // 造价：360+900+120 = 1380 价值
    power: 40,
    upkeep: { qubit: 0.5 },  // 每分钟 0.5 qubit（维持隧穿场）
    needQRes: 'q-comp-3',
    desc: '可控量子隧穿：每 5 分钟小概率复制一笔库存资源（期望为正，方差大）。',
    fxText: ['每 5 分钟掷一次隧穿', '成功复制 3% 库存资源', '耗电 40'],
    flavor: '资源从虚空中"借"来，记得还——物理学记得。',
  },
  'qgrid': {
    name: '量子电网', icon: '⚡',
    cost: { steel: 200, tech: 100, rare: 80 },
    // 造价：800+1000+240 = 2040 价值（旗舰辅助建筑）
    power: -0,  // 不发电也不耗电：它是输电网络
    upkeep: { steel: 1 },
    needQRes: 'q-lab-5',
    desc: '超导输电网：全城量子建筑耗电 -25%，且缺电时量子建筑最后断电（优先级）。',
    fxText: ['量子建筑耗电 -25%', '缺电时量子建筑不断电', '不耗电'],
    flavor: '电流在零电阻的梦里旅行。',
  },
};
const QBUILD_ORDER = ['qlab', 'entangle', 'qcomp', 'qshield', 'tunnel', 'qgrid'];

// 量子建筑 id 集合（事件/退相干判定用）
const QBUILD_IDS = new Set(QBUILD_ORDER);
// 电子建筑 id（退相干/太阳风暴影响范围；与 disaster.js 的 elec 表一致，本地镜像）
const ELECTRONIC_IDS = new Set(['lab', 'command', 'weather', 'trade', 'antenna', 'satellite',
  'qlab', 'entangle', 'qcomp', 'qshield', 'tunnel', 'qgrid']);

// ---------------------------------------------------------------------
// 🔗 纠缠协议 QPROTO_DEFS（10 种）
// ---------------------------------------------------------------------
// 字段说明：
//   id        协议唯一 id
//   name/icon 展示名
//   kind      类型：link（链路协议，需纠缠基站）/ burst（一次性脉冲，耗 qubit）
//   cost      启动/每次消耗 { qubit: N }
//   needQRes  前置量子研究
//   desc      说明
//   fxText    效果文本
//   fx        效果键值（QuantumManager.getBuffs 汇总）
// 效果键说明：
//   linkProdMul   链路产量加成倍率（叠加到 ENTANGLE_PROD_BONUS）
//   linkTradeMul  链路贸易加成倍率（叠加）
//   burstTradeSec 一次性：贸易收益 +X%，持续 N 秒
//   burstProdSec  一次性：全城生产 +X%，持续 N 秒
//   burstCohere   一次性：相干度 +N
const QPROTO_DEFS = {
  'p-link-std': {
    name: '标准纠缠链路', icon: '🔗', kind: 'link',
    cost: {}, needQRes: 'q-comm-1',
    desc: '默认链路协议：连接两座建筑，各 +15% 产量。',
    fxText: ['链路两端产量 +15%'],
    fx: { linkProdMul: 1 },
  },
  'p-link-deep': {
    name: '深度纠缠', icon: '♾️', kind: 'link',
    cost: { qubit: 2 }, needQRes: 'q-comm-2',
    desc: '高保真纠缠：链路产量加成翻倍，但维持费 +100%。',
    fxText: ['链路产量 +30%', '维持费 ×2'],
    fx: { linkProdMul: 2, linkUpkeepMul: 2 },
  },
  'p-link-swap': {
    name: '纠缠交换', icon: '🔀', kind: 'link',
    cost: { qubit: 1 }, needQRes: 'q-comm-3',
    desc: '链路可在建筑间热切换：每 60 秒自动把链路移到产量最低的建筑上。',
    fxText: ['链路自动优化目标', '每 60 秒重选'],
    fx: { linkAutoOptimize: 1 },
  },
  'p-burst-trade': {
    name: '贸易脉冲', icon: '💱', kind: 'burst',
    cost: { qubit: 3 }, needQRes: 'q-comm-1',
    desc: '纠缠态广播贸易报价：120 秒内贸易收益 +30%。',
    fxText: ['贸易 +30%，持续 120 秒', '耗 qubit×3'],
    fx: { burstTradeSec: { mul: 1.3, sec: 120 } },
  },
  'p-burst-prod': {
    name: '生产共振脉冲', icon: '📣', kind: 'burst',
    cost: { qubit: 5 }, needQRes: 'q-comm-4',
    desc: '全城建筑短暂共振：90 秒内全城生产 +20%。',
    fxText: ['全城生产 +20%，持续 90 秒', '耗 qubit×5'],
    fx: { burstProdSec: { mul: 1.2, sec: 90 } },
  },
  'p-burst-cohere': {
    name: '相干泵浦', icon: '💓', kind: 'burst',
    cost: { qubit: 4 }, needQRes: 'q-lab-2',
    desc: '向全城注入相干性：相干度立即 +0.2。',
    fxText: ['相干度 +0.2', '耗 qubit×4'],
    fx: { burstCohere: 0.2 },
  },
  'p-link-grid': {
    name: '电网纠缠', icon: '⚡', kind: 'link',
    cost: { qubit: 2 }, needQRes: 'q-comm-4',
    desc: '发电建筑与耗电建筑纠缠：链路中的发电建筑 +10% 电力。',
    fxText: ['链路内发电建筑电力 +10%'],
    fx: { linkPowerMul: 1.1 },
  },
  'p-burst-tunnel': {
    name: '隧穿脉冲', icon: '🌀', kind: 'burst',
    cost: { qubit: 6 }, needQRes: 'q-comp-3',
    desc: '强制诱发一次量子隧穿：立即掷一次隧穿事件（好结果概率 +20%）。',
    fxText: ['立即触发一次隧穿', '好结果概率 +20%', '耗 qubit×6'],
    fx: { burstTunnel: 0.2 },
  },
  'p-link-research': {
    name: '科研纠缠', icon: '🔬', kind: 'link',
    cost: { qubit: 3 }, needQRes: 'q-comm-5',
    desc: '实验室与量子计算机纠缠：链路中的实验室科技产出 +25%。',
    fxText: ['链路内实验室科技 +25%'],
    fx: { linkLabMul: 1.25 },
  },
  'p-burst-shield': {
    name: '护盾过载', icon: '🔰', kind: 'burst',
    cost: { qubit: 8 }, needQRes: 'q-lab-4',
    desc: '退相干护盾过载：300 秒内免疫退相干事件，冷却 10 分钟。',
    fxText: ['300 秒免疫退相干', '冷却 600 秒', '耗 qubit×8'],
    fx: { burstDecohereImmuneSec: 300 },
  },
};
const QPROTO_ORDER = [
  'p-link-std', 'p-link-deep', 'p-link-swap', 'p-link-grid', 'p-link-research',
  'p-burst-trade', 'p-burst-prod', 'p-burst-cohere', 'p-burst-tunnel', 'p-burst-shield',
];

// ---------------------------------------------------------------------
// 💻 量子计算机程序 QPROG_DEFS（12 种）
// ---------------------------------------------------------------------
// 字段说明：
//   id        程序唯一 id
//   name/icon 展示名
//   flops     需要的总算力秒（如 600 = 1 算力跑 600 秒；多台计算机加速）
//   cost      启动消耗 { qubit: N }（一次性）
//   needQRes  前置量子研究
//   desc      说明
//   fxText    效果文本
//   reward    完成奖励：{ res: {资源: 数量}, buff: {效果键: 值}, ... }
//             buff 键：researchMulSec（科研加速 N 秒）/ prodMulSec / cohereAdd /
//                       warnAddSec（灾难预警 +N 秒）/ qubitBack（返还 qubit）
//
// 平衡：1 算力跑 600 秒 ≈ 10 分钟；奖励价值 ≈ 1.5~2 倍启动成本，
// 鼓励长期挂机跑程序。
const QPROG_DEFS = {
  'prog-opt-smelt': {
    name: '冶炼流程优化', icon: '🔥', flops: 300,
    cost: { qubit: 2 }, needQRes: 'q-comp-1',
    desc: '量子退火优化冶炼曲线：完成后 10 分钟内冶炼厂 +30%。',
    fxText: ['算力 300 秒', '奖励：冶炼 +30% × 10 分钟'],
    reward: { buff: { smelterMulSec: { mul: 1.3, sec: 600 } } },
  },
  'prog-climate': {
    name: '气候推演', icon: '🌪️', flops: 600,
    cost: { qubit: 4 }, needQRes: 'q-comp-1',
    desc: '推演未来 1 小时大气：完成后灾难预警 +15 秒（持续 30 分钟）。',
    fxText: ['算力 600 秒', '奖励：预警 +15 秒 × 30 分钟'],
    reward: { buff: { warnAddSec: { add: 15, sec: 1800 } } },
  },
  'prog-genome': {
    name: '作物基因组', icon: '🌱', flops: 600,
    cost: { qubit: 4 }, needQRes: 'q-comp-2',
    desc: '设计火星作物基因：完成后 15 分钟内温室 +40%。',
    fxText: ['算力 600 秒', '奖励：温室 +40% × 15 分钟'],
    reward: { buff: { greenhouseMulSec: { mul: 1.4, sec: 900 } } },
  },
  'prog-ore': {
    name: '矿脉反演', icon: '⛏️', flops: 900,
    cost: { qubit: 6 }, needQRes: 'q-comp-2',
    desc: '量子传感反演地下矿脉：完成后直接获得铁矿×200、稀土×40。',
    fxText: ['算力 900 秒', '奖励：铁矿×200、稀土×40'],
    reward: { res: { iron: 200, rare: 40 } },
  },
  'prog-research': {
    name: '科研加速', icon: '🔬', flops: 900,
    cost: { qubit: 6 }, needQRes: 'q-comp-2',
    desc: '量子模拟替代实验：完成后 20 分钟内实验室科技产出 +100%。',
    fxText: ['算力 900 秒', '奖励：实验室 +100% × 20 分钟'],
    reward: { buff: { labMulSec: { mul: 2.0, sec: 1200 } } },
  },
  'prog-fusion': {
    name: '聚变等离子体控制', icon: '☀️', flops: 1200,
    cost: { qubit: 8 }, needQRes: 'q-comp-4',
    desc: '实时控制聚变等离子体：完成后 20 分钟内聚变/核电站 +50%。',
    fxText: ['算力 1200 秒', '奖励：聚变/核电 +50% × 20 分钟'],
    reward: { buff: { fusionMulSec: { mul: 1.5, sec: 1200 } } },
  },
  'prog-logistics': {
    name: '物流全局优化', icon: '🚚', flops: 1200,
    cost: { qubit: 8 }, needQRes: 'q-comp-4',
    desc: '求解全城物流 TSP：完成后直接获得钢材×100、食物×150。',
    fxText: ['算力 1200 秒', '奖励：钢材×100、食物×150'],
    reward: { res: { steel: 100, food: 150 } },
  },
  'prog-decohere': {
    name: '退相干建模', icon: '🔰', flops: 1500,
    cost: { qubit: 10 }, needQRes: 'q-comp-4',
    desc: '精确建模环境噪声：完成后相干度 +0.3，上限 +0.05（永久）。',
    fxText: ['算力 1500 秒', '奖励：相干度 +0.3，上限 +0.05'],
    reward: { buff: { cohereAdd: 0.3, cohereMaxAddPerm: 0.05 } },
  },
  'prog-asteroid': {
    name: '小行星轨道计算', icon: '☄️', flops: 1800,
    cost: { qubit: 12 }, needQRes: 'q-comp-5',
    desc: '计算小行星捕获窗口：完成后直接获得铀×30、氦3×10。',
    fxText: ['算力 1800 秒', '奖励：铀×30、氦3×10'],
    reward: { res: { uranium: 30, he3: 10 } },
  },
  'prog-singularity': {
    name: '奇点模拟', icon: '🌌', flops: 2400,
    cost: { qubit: 16 }, needQRes: 'q-comp-5',
    desc: '模拟技术奇点路径：完成后返还 qubit×10，并 30 分钟内全城生产 +15%。',
    fxText: ['算力 2400 秒', '奖励：qubit×10、全城 +15% × 30 分钟'],
    reward: { res: { qubit: 10 }, buff: { prodMulSec: { mul: 1.15, sec: 1800 } } },
  },
  'prog-tunnel-ctl': {
    name: '隧穿控制', icon: '🌀', flops: 2400,
    cost: { qubit: 16 }, needQRes: 'q-comp-6',
    desc: '掌握可控隧穿：完成后 30 分钟内隧穿好结果概率 +30%。',
    fxText: ['算力 2400 秒', '奖励：隧穿好运 +30% × 30 分钟'],
    reward: { buff: { tunnelGoodMulSec: { mul: 1.3, sec: 1800 } } },
  },
  'prog-launch': {
    name: '发射窗口优化', icon: '🚀', flops: 3000,
    cost: { qubit: 20 }, needQRes: 'q-comp-6',
    desc: '终极轨道计算：发射台建造成本永久 -10%（可叠加 3 次）。',
    fxText: ['算力 3000 秒', '奖励：发射台成本 -10%（永久，可叠 3 次）'],
    reward: { buff: { launchCostMulPerm: 0.9 } },
  },
};
const QPROG_ORDER = [
  'prog-opt-smelt', 'prog-climate', 'prog-genome', 'prog-ore', 'prog-research',
  'prog-fusion', 'prog-logistics', 'prog-decohere', 'prog-asteroid',
  'prog-singularity', 'prog-tunnel-ctl', 'prog-launch',
];

// ---------------------------------------------------------------------
// 🌀 量子隧穿结果表 QTUNNEL_TABLE
// ---------------------------------------------------------------------
// 隧穿掷骰：按权重选一档，再按档内规则结算。
// 档位：good（好）/ bad（坏）/ odd（奇）。
// 每档内多条结果等权随机；qty 按库存比例动态计算（见 QTUNE）。
const QTUNNEL_TABLE = {
  // —— 好结果（40% 基础权重） ——
  good: [
    {
      id: 't-good-dup', name: '资源复制', icon: '👯',
      desc: '隧穿复制了一笔库存资源：随机一种库存资源 +8%。',
      // 结算：randomRes(inv) 选取库存最多的 3 种之一，+8%（钳制 5~200）
    },
    {
      id: 't-good-qubit', name: '真空涨落', icon: '✨',
      desc: '真空中凭空涨落出 qubit：+2 qubit。',
      // 结算：inv.qubit += 2（不受相干度影响，纯惊喜）
    },
    {
      id: 't-good-tech', name: '知识隧穿', icon: '📚',
      desc: '地球实验室的数据"抄了近道"：科技点 +15。',
    },
    {
      id: 't-good-he3', name: '氦3富集', icon: '🌌',
      desc: '月壤中的氦3被隧穿富集：氦3 +5。',
    },
    {
      id: 't-good-food', name: '温室丰收', icon: '🌾',
      desc: '作物发生了有益的量子突变：食物 +10% 库存。',
    },
    {
      id: 't-good-steel', name: '完美晶格', icon: '🔩',
      desc: '钢材在隧穿中形成了完美晶格：钢材 +8% 库存。',
    },
  ],
  // —— 坏结果（35% 基础权重） ——
  bad: [
    {
      id: 't-bad-loss', name: '资源隧穿丢失', icon: '🕳️',
      desc: '一笔资源隧穿进了虚空：随机一种库存资源 -8%。',
    },
    {
      id: 't-bad-qubit', name: 'qubit 逃逸', icon: '💨',
      desc: '2 个 qubit 退相干逃逸了：qubit -2。',
    },
    {
      id: 't-bad-power', name: '电网扰动', icon: '⚡',
      desc: '隧穿扰动了电网：全城电力 -20%，持续 60 秒。',
      // 结算：QuantumManager.powerDebuff = { until, mul: 0.8 }
    },
    {
      id: 't-bad-lab', name: '实验室扰动', icon: '🔬',
      desc: '实验室设备被隧穿扰动：30 秒内实验室停产。',
      // 结算：labDownUntil = now + 30000
    },
    {
      id: 't-bad-cohere', name: '相干泄漏', icon: '🩸',
      desc: '相干度泄漏：全城相干度 -0.1。',
    },
  ],
  // —— 奇结果（25% 基础权重） ——
  odd: [
    {
      id: 't-odd-swap', name: '资源置换', icon: '🔀',
      desc: '两种资源发生了等价值置换：库存最多的资源部分变成了最少的资源。',
      // 结算：取库存价值最高的资源 A 和最低的资源 B（有库存的），
      //       把 A 的 10% 按价值比换成 B。
    },
    {
      id: 't-odd-qubit2tech', name: '质能转换', icon: '⚖️',
      desc: 'qubit 坍缩成了科技点：-1 qubit，+12 科技。',
    },
    {
      id: 't-odd-tech2qubit', name: '逆质能转换', icon: '🔄',
      desc: '科技点被压缩成了 qubit：-24 科技，+2 qubit。',
    },
    {
      id: 't-odd-nothing', name: '虚惊一场', icon: '😌',
      desc: '探测器误报了一次隧穿：什么都没发生，相干度 +0.02（虚惊后的安心）。',
    },
    {
      id: 't-odd-double', name: '双重隧穿', icon: '🌀🌀',
      desc: '罕见的双重隧穿：再掷一次隧穿（好结果概率翻倍）。',
      // 结算：递归调用一次 tunnelRoll(goodBias=2)
    },
  ],
};

// ---------------------------------------------------------------------
// 🥀 量子退相干事件表 QDECOHERE_DEFS
// ---------------------------------------------------------------------
// 退相干掷骰：随机停工 2~5 座电子/量子建筑 45~90 秒。
// 变体 4 种，按相干度与护盾数量加权。
const QDECOHERE_DEFS = {
  variants: [
    {
      id: 'd-mild', name: '轻微退相干', icon: '🌫️', w: 40,
      desc: '环境噪声升高：2 座电子建筑停工 45 秒。',
      buildings: 2, durationMs: 45000,
    },
    {
      id: 'd-moderate', name: '中度退相干', icon: '🌧️', w: 30,
      desc: '退相干波扫过城区：3 座电子建筑停工 60 秒。',
      buildings: 3, durationMs: 60000,
    },
    {
      id: 'd-severe', name: '严重退相干', icon: '⛈️', w: 20,
      desc: '强退相干风暴：5 座电子建筑停工 90 秒，相干度 -0.15。',
      buildings: 5, durationMs: 90000, cohereHit: 0.15,
    },
    {
      id: 'd-cascade', name: '级联退相干', icon: '🌪️', w: 10,
      desc: '级联坍缩：所有量子建筑停工 60 秒，相干度 -0.2。',
      buildings: -1, durationMs: 60000, cohereHit: 0.2, quantumOnly: true,
    },
  ],
  // 停工建筑选择：优先量子建筑（50%），否则随机电子建筑
  PREFER_QUANTUM: 0.5,
};

// ---------------------------------------------------------------------
// ⚡ 量子事件总表 QEVENT_DEFS（16 种）
// ---------------------------------------------------------------------
// 字段说明：
//   id        事件唯一 id
//   name/icon 展示名
//   kind      类型：tunnel（隧穿）/ decohere（退相干）/ wonder（奇点）
//   w         随机权重（同 kind 内归一化）
//   desc      事件描述
//   fxText    效果文本
//   handler   结算函数名（QuantumManager 上的方法名，字符串引用）
//
// 触发：QuantumManager.update 内按 QTUNE 间隔掷骰；
//       隧穿需 ≥1 座量子建筑在线；退相干需相干度 < 0.6 或 25% 随机。
const QEVENT_DEFS = {
  // ==================== 隧穿类（6 种） ====================
  'ev-tunnel-dup': {
    name: '资源复制隧穿', icon: '👯', kind: 'tunnel', w: 25,
    desc: '一笔库存资源被量子隧穿复制了。',
    fxText: ['随机资源 +8% 库存'],
    handler: 'onTunnelDup',
  },
  'ev-tunnel-qubit': {
    name: '真空涨落', icon: '✨', kind: 'tunnel', w: 20,
    desc: '真空中涨落出一对 qubit。',
    fxText: ['qubit +2'],
    handler: 'onTunnelQubit',
  },
  'ev-tunnel-loss': {
    name: '资源丢失隧穿', icon: '🕳️', kind: 'tunnel', w: 20,
    desc: '一笔资源隧穿进了虚空，再也没回来。',
    fxText: ['随机资源 -8% 库存'],
    handler: 'onTunnelLoss',
  },
  'ev-tunnel-swap': {
    name: '资源置换隧穿', icon: '🔀', kind: 'tunnel', w: 15,
    desc: '两种资源发生了等价值置换。',
    fxText: ['高库存资源 10% 按价值转为低库存资源'],
    handler: 'onTunnelSwap',
  },
  'ev-tunnel-convert': {
    name: '质能转换隧穿', icon: '⚖️', kind: 'tunnel', w: 10,
    desc: 'qubit 与科技点之间发生了自发转换。',
    fxText: ['qubit/科技点互转'],
    handler: 'onTunnelConvert',
  },
  'ev-tunnel-double': {
    name: '双重隧穿', icon: '🌀🌀', kind: 'tunnel', w: 10,
    desc: '罕见的双重隧穿！连续发生两次隧穿。',
    fxText: ['连续触发两次隧穿'],
    handler: 'onTunnelDouble',
  },

  // ==================== 退相干类（4 种） ====================
  'ev-decohere-mild': {
    name: '轻微退相干', icon: '🌫️', kind: 'decohere', w: 40,
    desc: '环境噪声升高，部分电子设备短暂停工。',
    fxText: ['2 座电子建筑停工 45 秒'],
    handler: 'onDecohereMild',
  },
  'ev-decohere-severe': {
    name: '严重退相干', icon: '⛈️', kind: 'decohere', w: 25,
    desc: '强退相干风暴扫过城区。',
    fxText: ['5 座电子建筑停工 90 秒', '相干度 -0.15'],
    handler: 'onDecohereSevere',
  },
  'ev-decohere-lab': {
    name: '实验室退相干', icon: '🔬', kind: 'decohere', w: 20,
    desc: '量子实验室集体退相干，qubit 生产线停摆。',
    fxText: ['所有量子实验室停工 60 秒'],
    handler: 'onDecohereLab',
  },
  'ev-decohere-cascade': {
    name: '级联坍缩', icon: '🌪️', kind: 'decohere', w: 15,
    desc: '级联坍缩！所有量子建筑同时停工。',
    fxText: ['所有量子建筑停工 60 秒', '相干度 -0.2'],
    handler: 'onDecohereCascade',
  },

  // ==================== 奇点类（6 种，正面为主） ====================
  'ev-wonder-entangle': {
    name: '自发纠缠', icon: '💞', kind: 'wonder', w: 25,
    desc: '两座建筑自发形成了纠缠链路（免费，持续 5 分钟）。',
    fxText: ['免费纠缠链路 ×1，持续 5 分钟'],
    handler: 'onWonderEntangle',
  },
  'ev-wonder-flops': {
    name: '算力爆发', icon: '🚀', kind: 'wonder', w: 20,
    desc: '量子计算机进入超导爆发状态，算力 ×3，持续 120 秒。',
    fxText: ['算力 ×3，持续 120 秒'],
    handler: 'onWonderFlops',
  },
  'ev-wonder-cohere': {
    name: '相干共振', icon: '💓', kind: 'wonder', w: 20,
    desc: '全城量子系统发生相干共振，相干度回满。',
    fxText: ['相干度恢复至上限'],
    handler: 'onWonderCohere',
  },
  'ev-wonder-insight': {
    name: '量子灵感', icon: '💡', kind: 'wonder', w: 15,
    desc: '量子涨落带来了灵感：随机一项未解锁的量子研究 5 折。',
    fxText: ['随机量子研究 5 折（持续 10 分钟）'],
    handler: 'onWonderInsight',
  },
  'ev-wonder-qubit-rain': {
    name: 'qubit 雨', icon: '🌧️', kind: 'wonder', w: 10,
    desc: '退相干护盾捕捉到了大气 qubit：qubit +5。',
    fxText: ['qubit +5（需有退相干护盾，否则 +2）'],
    handler: 'onWonderQubitRain',
  },
  'ev-wonder-observer': {
    name: '观察者效应', icon: '👁️', kind: 'wonder', w: 10,
    desc: '一次观测改变了结果：当前排队的程序瞬间完成一个。',
    fxText: ['量子计算机当前程序立即完成'],
    handler: 'onWonderObserver',
  },
};
const QEVENT_ORDER = Object.keys(QEVENT_DEFS);

// ---------------------------------------------------------------------
// 📜 量子合同 QMISSION_DEFS（8 个）
// ---------------------------------------------------------------------
// 字段说明：
//   id        合同唯一 id
//   name/icon 展示名
//   desc      说明
//   need      需求 { qubit: N } 或 { prog: 程序id } 等
//   reward    奖励 { res: {...}, qubit: N }
//   flavor    一句设定
// 刷新：每 10~18 分钟刷新一个，最多挂 3 个；完成立即结算。
const QMISSION_DEFS = {
  'qm-supply-1': {
    name: '地球科学院订单', icon: '📦',
    desc: '交付 qubit×10，用于地球量子网络实验。',
    need: { qubit: 10 },
    reward: { res: { tech: 60, steel: 40 } },
    flavor: '地球人也在仰望星空。',
  },
  'qm-supply-2': {
    name: '火星轨道站补给', icon: '🛰️',
    desc: '交付 qubit×25，校准轨道站量子钟。',
    need: { qubit: 25 },
    reward: { res: { tech: 150, he3: 5 } },
    flavor: '时间在轨道上需要更准的钟。',
  },
  'qm-compute-1': {
    name: '蛋白质折叠外包', icon: '🧬',
    desc: '完成程序「作物基因组」。',
    need: { prog: 'prog-genome' },
    reward: { res: { food: 200 }, qubit: 3 },
    flavor: '算力是最硬的通货。',
  },
  'qm-compute-2': {
    name: '轨道力学外包', icon: '☄️',
    desc: '完成程序「小行星轨道计算」。',
    need: { prog: 'prog-asteroid' },
    reward: { res: { uranium: 20 }, qubit: 5 },
    flavor: '帮地球算一颗小行星的账。',
  },
  'qm-research-1': {
    name: '联合实验室', icon: '🔬',
    desc: '解锁任意 3 项量子研究。',
    need: { qresCount: 3 },
    reward: { qubit: 8, res: { tech: 80 } },
    flavor: '知识共享，风险共担。',
  },
  'qm-cohere-1': {
    name: '相干度保障', icon: '💓',
    desc: '将全城相干度维持在 0.8 以上累计 10 分钟。',
    need: { cohereHold: { level: 0.8, sec: 600 } },
    reward: { qubit: 10 },
    flavor: '稳定本身就是一种交付。',
  },
  'qm-tunnel-1': {
    name: '隧穿观测', icon: '🌀',
    desc: '累计触发 5 次量子隧穿事件。',
    need: { tunnelCount: 5 },
    reward: { qubit: 6, res: { rare: 30 } },
    flavor: '观测本身就是实验。',
  },
  'qm-decohere-1': {
    name: '退相干演习', icon: '🔰',
    desc: '在退相干护盾保护下度过 1 次退相干事件（零停工）。',
    need: { decohereShielded: 1 },
    reward: { qubit: 12 },
    flavor: '最好的演习是没有伤亡的演习。',
  },
};
const QMISSION_ORDER = Object.keys(QMISSION_DEFS);

// 合同刷新间隔
const QMISSION_TUNE = {
  MIN_GAP: 10 * 60 * 1000,
  MAX_GAP: 18 * 60 * 1000,
  MAX_ACTIVE: 3,
};

// =====================================================================
// ⚛️ QuantumManager：量子系统总管
// =====================================================================
// 职责：
//   1. qubit 资源记账（产出 / 消耗 / 上限提示）
//   2. 量子实验室产能 tick（电力 / 稀土维护 / 相干度门限）
//   3. 量子计算机算力与程序队列 tick
//   4. 纠缠通讯链路维持与加成汇总
//   5. 量子研究树解锁
//   6. 量子事件（隧穿 / 退相干 / 奇点）掷骰与结算
//   7. 相干度（全城量子健康度）维护
//   8. 量子合同刷新与结算
//   9. 存档 / 读档 / 面板数据
class QuantumManager {
  constructor() {
    // —— 研究 ——
    this.research = new Set();       // 已解锁量子研究 id
    this.researchDiscount = null;    // { id, mul, until } 量子灵感折扣

    // —— 实验室 ——
    // labs: Map<建筑对象引用key, { progressMs, level }>
    // 建筑对象来自 game.builder.buildings（按 x,y 标识）；level 1~3
    this.labState = {};              // key=`${x},${y}` → { progressMs, level }
    this.lastUpkeepMin = 0;          // 上次扣维护费的分钟戳

    // —— 计算机 ——
    this.progQueue = [];             // [{ progId, remainingFlops }]
    this.progDoneCount = {};         // progId → 完成次数（合同/成就用）
    this.flopsBoostUntil = 0;        // 算力爆发 until
    this.flopsBoostMul = 1;

    // —— 纠缠通讯 ——
    // links: [{ aKey, bKey, protoId, until }] until=0 表示永久（基站维持）
    this.links = [];
    this.bursts = {};                // 一次性脉冲 buff：key → { mul/add, until }
    this.lastLinkOptimize = 0;       // 纠缠交换自动优化上次执行

    // —— 相干度 ——
    this.cohere = 1.0;               // 0~上限
    this.cohereMaxBonus = 0;         // 研究/程序带来的上限加成
    this.decohereImmuneUntil = 0;    // 护盾过载免疫 until

    // —— 事件 ——
    const now = Date.now();
    this.nextTunnel = now + QTUNE.TUNNEL_MIN_GAP +
      Math.random() * (QTUNE.TUNNEL_MAX_GAP - QTUNE.TUNNEL_MIN_GAP);
    this.nextDecohere = now + QTUNE.DECOHERE_MIN_GAP +
      Math.random() * (QTUNE.DECOHERE_MAX_GAP - QTUNE.DECOHERE_MIN_GAP);
    this.nextWonder = now + 15 * 60 * 1000 + Math.random() * 10 * 60 * 1000;
    this.nextMission = now + QMISSION_TUNE.MIN_GAP;
    this.downBuildings = {};         // key=`${x},${y}` → until（停工）
    this.powerDebuffUntil = 0;       // 隧穿电网扰动 until
    this.labDownUntil = 0;           // 实验室扰动停产 until

    // —— 合同 ——
    this.missions = [];              // [{ missionId, progress, done }]
    this.tunnelCount = 0;            // 累计隧穿次数（合同用）
    this.cohereHoldAccumMs = 0;      // 相干度维持累计（合同用）
    this.decohereShieldedCount = 0;  // 护盾保护度过次数（合同用）

    // —— 隧穿阵列 ——
    this.nextArrayTunnel = now + 5 * 60 * 1000;

    // —— 日志 ——
    this.log = [];                   // [{ t, icon, text }] 最近 QTUNE.QLOG_MAX 条

    // —— 统计 ——
    this.stats = {
      qubitMined: 0,      // 累计产出 qubit
      qubitSpent: 0,      // 累计消耗 qubit
      tunnels: 0,         // 隧穿事件次数
      decoheres: 0,       // 退相干事件次数
      wonders: 0,         // 奇点事件次数
      progsDone: 0,       // 程序完成数
      researchDone: 0,    // 研究完成数
    };

    // —— 回调 ——
    this.onEvent = null;  // (type, data) => {}，game.js 设置（toast/音效/成就）

    // —— tick 节流 ——
    this._lastTick = 0;
  }

  // 绑定 game（toast/音效走 game，防御性）
  bindUI(game) {
    this._game = game;
  }

  // 内部事件发射
  emit(type, data) {
    if (this.onEvent) {
      try { this.onEvent(type, data); } catch (e) { /* 回调异常不影响主循环 */ }
    }
  }

  // 写量子日志
  qlog(icon, text) {
    this.log.push({ t: Date.now(), icon, text });
    if (this.log.length > QTUNE.QLOG_MAX) {
      this.log.splice(0, this.log.length - QTUNE.QLOG_MAX);
    }
  }

  // ---------------- 相干度 ----------------

  // 相干度上限（1.0 + 研究/程序加成，最高 1.3）
  cohereMax() {
    let m = 1.0 + this.cohereMaxBonus;
    for (const id of this.research) {
      const fx = QRESEARCH_DEFS[id] && QRESEARCH_DEFS[id].fx;
      if (fx && fx.cohereMaxAdd) m += fx.cohereMaxAdd;
    }
    return Math.min(1.3, m);
  }

  // 当前相干度（钳制）
  coherence() {
    return Math.max(0, Math.min(this.cohereMax(), this.cohere));
  }

  // 增加相干度（钳制到上限）
  addCohere(n, reason) {
    const before = this.coherence();
    this.cohere = Math.max(0, Math.min(this.cohereMax(), this.cohere + n));
    if (reason && this.cohere !== before) {
      this.qlog('💓', `相干度 ${before.toFixed(2)} → ${this.coherence().toFixed(2)}（${reason}）`);
    }
    return this.coherence();
  }

  // ---------------- 研究 ----------------

  // 是否已解锁量子研究
  hasQRes(id) {
    return this.research.has(id);
  }

  // 是否可解锁：前置 + 费用
  canResearch(id, inv) {
    const def = QRESEARCH_DEFS[id];
    if (!def) return { ok: false, reason: '未知研究' };
    if (this.research.has(id)) return { ok: false, reason: '已解锁' };
    for (const pre of def.needs) {
      if (!this.research.has(pre)) {
        return { ok: false, reason: `需要先解锁「${QRESEARCH_DEFS[pre].name}」` };
      }
    }
    // 量子灵感折扣
    let cost = Object.assign({}, def.cost);
    if (this.researchDiscount && this.researchDiscount.id === id &&
        Date.now() < this.researchDiscount.until) {
      for (const k in cost) cost[k] = Math.max(1, Math.ceil(cost[k] * this.researchDiscount.mul));
    }
    for (const k in cost) {
      if ((inv[k] || 0) < cost[k]) {
        const nm = (QUANTUM_RES[k] && QUANTUM_RES[k].name) || k;
        return { ok: false, reason: `需要${nm}×${cost[k]}` };
      }
    }
    return { ok: true, cost };
  }

  // 解锁研究（调用前先 canResearch）
  doResearch(id, game) {
    const inv = game.player.inv;
    const chk = this.canResearch(id, inv);
    if (!chk.ok) return chk;
    for (const k in chk.cost) inv[k] -= chk.cost[k];
    this.stats.qubitSpent += (chk.cost.qubit || 0);
    this.research.add(id);
    this.stats.researchDone++;
    const def = QRESEARCH_DEFS[id];
    this.qlog(def.icon, `量子研究完成：${def.name}`);
    this.emit('qresearch', { id, name: def.name, icon: def.icon });
    if (game.toast) game.toast(`${def.icon} 量子研究完成：${def.name}`, 'good');
    if (game.sound) game.sound('research');
    // 合同进度：联合实验室
    this.checkMissions(game);
    return { ok: true };
  }

  // 某效果键的乘法总倍率（默认 1）
  qmul(key) {
    let v = 1;
    for (const id of this.research) {
      const fx = QRESEARCH_DEFS[id] && QRESEARCH_DEFS[id].fx;
      if (fx && fx[key] !== undefined && typeof fx[key] === 'number') {
        // 加法键排除
        if (key === 'qlabYieldAdd' || key === 'entangleLinksAdd' ||
            key === 'cohereRegenAdd' || key === 'cohereMaxAdd') continue;
        v *= fx[key];
      }
    }
    return v;
  }

  // 某效果键的加法总和（默认 0）
  qsum(key) {
    let v = 0;
    for (const id of this.research) {
      const fx = QRESEARCH_DEFS[id] && QRESEARCH_DEFS[id].fx;
      if (fx && fx[key] !== undefined && typeof fx[key] === 'number') v += fx[key];
    }
    return v;
  }

  // 是否解锁了某量子建筑
  qBuildingUnlocked(qbid) {
    const def = QBUILD_DEFS[qbid];
    if (!def) return false;
    if (!def.needQRes) return true;  // qlab：基础建筑，有 qubit 概念即解锁
    return this.research.has(def.needQRes);
  }

  // ---------------- 实验室 ----------------

  // 建筑唯一键
  bkey(b) {
    return b.x + ',' + b.y;
  }

  // 统计在线量子建筑（game.builder.buildings 里 id 在 QBUILD_IDS 的）
  qbuildings(game, qbid) {
    if (!game.builder || !game.builder.buildings) return [];
    return game.builder.buildings.filter(b =>
      QBUILD_IDS.has(b.id) && (!qbid || b.id === qbid) && !b.damaged);
  }

  // 实验室是否因缺电停产（防御性读电力接口）
  labPowered(game) {
    // 量子电网：缺电时量子建筑不断电
    const hasGrid = this.qbuildings(game, 'qgrid').length > 0;
    if (hasGrid) return true;
    if (game.builder && typeof game.builder.powerBalance === 'function') {
      try { return game.builder.powerBalance() >= 0; } catch (e) { return true; }
    }
    return true;
  }

  // 实验室产出间隔（毫秒，受研究影响）
  labIntervalMs() {
    return QTUNE.QLAB_BASE_INTERVAL_MS * this.qmul('qlabIntervalMul');
  }

  // 实验室每次产出 qubit 数（受研究影响）
  labYield() {
    return QTUNE.QLAB_BASE_YIELD + this.qsum('qlabYieldAdd');
  }

  // 实验室 tick：推进产出进度
  tickLabs(now, dt, game) {
    const inv = ensureQubit(game.player.inv);
    // 相干度 < 0.3：全城实验室停产
    if (this.coherence() < QTUNE.COHERE_LAB_SHUTDOWN) return;
    // 实验室扰动停产
    if (now < this.labDownUntil) return;
    const powered = this.labPowered(game);
    if (!powered) return;  // 缺电停产（不断 qubit，只是没产出）
    const labs = this.qbuildings(game, 'qlab');
    if (labs.length === 0) return;
    // 稀土维护：每分钟检查一次，不足则降速 50%
    let upkeepOk = true;
    const minTick = Math.floor(now / 60000);
    if (minTick !== this.lastUpkeepMin) {
      this.lastUpkeepMin = minTick;
      const need = labs.length * QTUNE.QLAB_UPKEEP_RARE_PER_MIN;
      if ((inv.rare || 0) >= need) {
        inv.rare -= need;
      } else {
        upkeepOk = false;
        this.qlog('🟣', `稀土不足，量子实验室降速 50%（需 ${need}/分钟）`);
      }
    }
    const speedMul = upkeepOk ? 1 : 0.5;
    const interval = this.labIntervalMs();
    const yld = this.labYield();
    for (const lab of labs) {
      const key = this.bkey(lab);
      if (!this.labState[key]) {
        this.labState[key] = { progressMs: 0, level: lab.qlevel || 1 };
      }
      const st = this.labState[key];
      st.level = lab.qlevel || 1;
      // 实验室等级加速：每级间隔 ×0.85
      const lvMul = Math.pow(0.85, st.level - 1);
      st.progressMs += dt * speedMul / lvMul;
      if (st.progressMs >= interval) {
        st.progressMs -= interval;
        // 等级加成：2 级每次 +1（与研究叠加）
        const lvBonus = st.level >= 2 ? 1 : 0;
        const gain = yld + lvBonus;
        gainQubit(inv, gain);
        this.stats.qubitMined += gain;
        this.qlog('⚛️', `量子实验室产出 qubit×${gain}`);
      }
    }
    // 清理已拆除实验室的状态
    const alive = new Set(labs.map(l => this.bkey(l)));
    for (const k in this.labState) {
      if (!alive.has(k)) delete this.labState[k];
    }
  }

  // 升级实验室（1→2→3）
  upgradeLab(b, game) {
    const st = this.labState[this.bkey(b)];
    const lv = (st && st.level) || b.qlevel || 1;
    if (lv >= 3) return { ok: false, reason: '已满级' };
    const cost = QTUNE.QLAB_UP_COST[lv - 1];  // lv=1 → 升 2 级用第 1 档
    const inv = game.player.inv;
    for (const k in cost) {
      if ((inv[k] || 0) < cost[k]) return { ok: false, reason: '资源不足' };
    }
    for (const k in cost) inv[k] -= cost[k];
    if (st) st.level = lv + 1;
    b.qlevel = lv + 1;
    this.qlog('⚛️', `量子实验室升级到 Lv${lv + 1}`);
    this.emit('qlab-upgrade', { x: b.x, y: b.y, level: lv + 1 });
    return { ok: true, level: lv + 1 };
  }

  // ---------------- 量子建筑通用升级 ----------------

  // 建筑量子等级（1~3）：qlab 存 labState，其余存 qbLevel
  qlevelOf(b) {
    const key = this.bkey(b);
    if (b.id === 'qlab') {
      const st = this.labState[key];
      return (st && st.level) || b.qlevel || 1;
    }
    return (this.qbLevel && this.qbLevel[key]) || b.qlevel || 1;
  }

  // 设置建筑量子等级（建筑对象 + 管理器镜像双写）
  setQLevel(b, lv) {
    const key = this.bkey(b);
    b.qlevel = lv;
    if (b.id === 'qlab') {
      if (!this.labState[key]) this.labState[key] = { progressMs: 0, level: lv };
      else this.labState[key].level = lv;
    } else {
      if (!this.qbLevel) this.qbLevel = {};
      this.qbLevel[key] = lv;
    }
  }

  // 升级效果汇总：
  //   mode='add' 加法累加；mode='mul' 乘法累加；mode='set' 取最高等级设定值
  qbUpgradeFx(b, key, mode, defVal) {
    const udef = QUPGRADE_DEFS[b.id];
    if (!udef || !udef.levels) return defVal;
    const lv = this.qlevelOf(b);
    let v = defVal;
    for (let i = 0; i < lv - 1 && i < udef.levels.length; i++) {
      const fx = udef.levels[i].fx || {};
      if (fx[key] === undefined) continue;
      if (mode === 'add') v += fx[key];
      else if (mode === 'mul') v *= fx[key];
      else v = fx[key];
    }
    return v;
  }

  // 通用升级（entangle/qcomp/qshield/tunnel/qgrid；qlab 走 upgradeLab）
  upgradeQBuilding(b, game) {
    if (!b || !QBUILD_DEFS[b.id]) return { ok: false, reason: '未知建筑' };
    if (b.id === 'qlab') return this.upgradeLab(b, game);
    const def = QUPGRADE_DEFS[b.id];
    if (!def || !def.levels || def.levels.length === 0) {
      return { ok: false, reason: '该建筑不可升级' };
    }
    const lv = this.qlevelOf(b);
    if (lv > def.levels.length) return { ok: false, reason: '已满级' };
    const cfg = def.levels[lv - 1];  // lv=1 → levels[0]（升 2 级）
    const inv = game.player.inv;
    for (const k in cfg.cost) {
      if ((inv[k] || 0) < cfg.cost[k]) {
        return { ok: false, reason: `资源不足（缺 ${k}×${cfg.cost[k] - (inv[k] || 0)}）` };
      }
    }
    for (const k in cfg.cost) inv[k] -= cfg.cost[k];
    this.setQLevel(b, lv + 1);
    this.qlog(QBUILD_DEFS[b.id].icon, `${def.name}升级到 Lv${lv + 1}：${cfg.desc}`);
    this.emit('qbuilding-upgrade', { id: b.id, x: b.x, y: b.y, level: lv + 1 });
    if (game.toast) game.toast(`${QBUILD_DEFS[b.id].icon} ${def.name} Lv${lv + 1}`, 'good');
    if (game.sound) game.sound('upgrade');
    return { ok: true, level: lv + 1 };
  }

  // 升级面板数据（UI 用）
  upgradePanel(b) {
    if (!b || !QBUILD_DEFS[b.id]) return null;
    if (b.id === 'qlab') {
      const lv = this.qlevelOf(b);
      if (lv >= 3) return { maxed: true, level: lv };
      const cost = QTUNE.QLAB_UP_COST[lv - 1];
      return {
        maxed: false, level: lv, next: lv + 1, cost,
        desc: lv === 1 ? 'Lv2：产出间隔 ×0.85' : 'Lv3：产出间隔 ×0.85（叠加），每次 +1 qubit',
        fxText: lv === 1 ? ['产出间隔 ×0.85'] : ['产出间隔 ×0.85', '每次产出 +1'],
      };
    }
    const def = QUPGRADE_DEFS[b.id];
    const lv = this.qlevelOf(b);
    if (lv > def.levels.length) return { maxed: true, level: lv };
    const cfg = def.levels[lv - 1];
    return {
      maxed: false, level: lv, next: lv + 1, cost: cfg.cost,
      desc: cfg.desc, fxText: cfg.fxText,
    };
  }

  // ---------------- 纠缠链路手动管理 ----------------

  // 手动创建链路（protoId 默认为 p-link-std；freeMs>0 表示免费限时链路）
  createLink(aKey, bKey, protoId, game, freeMs) {
    const pid = protoId || 'p-link-std';
    const def = QPROTO_DEFS[pid];
    if (!def || def.kind !== 'link') return { ok: false, reason: '未知链路协议' };
    if (def.needQRes && !this.research.has(def.needQRes)) {
      return { ok: false, reason: `需要研究「${QRESEARCH_DEFS[def.needQRes].name}」` };
    }
    if (!aKey || !bKey || aKey === bKey) return { ok: false, reason: '链路端点无效' };
    const now = Date.now();
    const alive = this.links.filter(l => l.until === 0 || l.until > now);
    if (alive.length >= this.maxLinks(game)) {
      return { ok: false, reason: `链路已达上限（${this.maxLinks(game)}）` };
    }
    const dup = alive.some(l =>
      (l.aKey === aKey && l.bKey === bKey) || (l.aKey === bKey && l.bKey === aKey));
    if (dup) return { ok: false, reason: '链路已存在' };
    const cost = def.cost.qubit || 0;
    if (cost > 0) {
      const inv = ensureQubit(game.player.inv);
      if (!spendQubit(inv, cost)) return { ok: false, reason: `需要 qubit×${cost}` };
      this.stats.qubitSpent += cost;
    }
    this.links.push({ aKey, bKey, protoId: pid, until: freeMs ? now + freeMs : 0 });
    this.qlog(def.icon, `手动建立链路：${aKey} ↔ ${bKey}（${def.name}）`);
    this.emit('qlink-new', { aKey, bKey, protoId: pid });
    return { ok: true };
  }

  // 拆除链路
  removeLink(aKey, bKey) {
    const before = this.links.length;
    this.links = this.links.filter(l =>
      !((l.aKey === aKey && l.bKey === bKey) || (l.aKey === bKey && l.bKey === aKey)));
    const removed = before - this.links.length;
    if (removed > 0) {
      this.qlog('🔗', `链路拆除：${aKey} ↔ ${bKey}`);
      this.emit('qlink-remove', { aKey, bKey });
    }
    return { ok: removed > 0, removed };
  }

  // 切换链路协议（需补协议启动费差价：简化为收全额启动费）
  setLinkProto(aKey, bKey, protoId, game) {
    const def = QPROTO_DEFS[protoId];
    if (!def || def.kind !== 'link') return { ok: false, reason: '未知链路协议' };
    if (def.needQRes && !this.research.has(def.needQRes)) {
      return { ok: false, reason: `需要研究「${QRESEARCH_DEFS[def.needQRes].name}」` };
    }
    const now = Date.now();
    const link = this.links.find(l =>
      (l.until === 0 || l.until > now) &&
      ((l.aKey === aKey && l.bKey === bKey) || (l.aKey === bKey && l.bKey === aKey)));
    if (!link) return { ok: false, reason: '链路不存在' };
    const cost = def.cost.qubit || 0;
    if (cost > 0) {
      const inv = ensureQubit(game.player.inv);
      if (!spendQubit(inv, cost)) return { ok: false, reason: `需要 qubit×${cost}` };
      this.stats.qubitSpent += cost;
    }
    link.protoId = protoId;
    this.qlog(def.icon, `链路协议切换：${aKey} ↔ ${bKey} → ${def.name}`);
    this.emit('qlink-proto', { aKey, bKey, protoId });
    return { ok: true };
  }

  // 链路列表（UI 用）
  linkList(game) {
    const now = Date.now();
    const buildings = (game.builder && game.builder.buildings) || [];
    const nameOf = (key) => {
      const b = buildings.find(x => this.bkey(x) === key);
      return b ? `${QBUILD_DEFS[b.id] ? QBUILD_DEFS[b.id].name : b.id}(${key})` : key;
    };
    return this.links
      .filter(l => l.until === 0 || l.until > now)
      .map(l => ({
        aKey: l.aKey, bKey: l.bKey,
        aName: nameOf(l.aKey), bName: nameOf(l.bKey),
        protoId: l.protoId,
        protoName: QPROTO_DEFS[l.protoId] ? QPROTO_DEFS[l.protoId].name : l.protoId,
        free: !!l.free,
        remainSec: l.until === 0 ? -1 : Math.max(0, Math.ceil((l.until - now) / 1000)),
        prodMul: this.linkProdMulFor({ x: parseInt(l.aKey.split(',')[0]), y: parseInt(l.aKey.split(',')[1]) }),
      }));
  }

  // ---------------- 量子电网效果 ----------------

  // 量子建筑耗电倍率（game.js 电力结算处：量子建筑耗电 × 此值）
  qPowerMul(game) {
    const grids = this.qbuildings(game, 'qgrid');
    if (grids.length === 0) return 1;
    let save = 0.25;  // 默认节电 25%
    for (const g of grids) {
      save = Math.max(save, this.qbUpgradeFx(g, 'powerSave', 'set', 0.25));
    }
    return 1 - save;
  }

  // 量子建筑产量倍率（game.js 量子建筑产量处 × 此值）
  qBuildingProdMul(game) {
    const grids = this.qbuildings(game, 'qgrid');
    if (grids.length === 0) return 1;
    let mul = 1;
    for (const g of grids) {
      mul = Math.max(mul, this.qbUpgradeFx(g, 'qprodMul', 'set', 1));
    }
    return mul;
  }

  // ---------------- 量子成就 ----------------

  // 检查成就：返回新达成的 id 数组（game.js 转交 achievements 系统）
  checkAchievements() {
    if (!this._achUnlocked) this._achUnlocked = new Set();
    const newly = [];
    for (const id of QACH_ORDER) {
      if (this._achUnlocked.has(id)) continue;
      try {
        if (QACH_DEFS[id].check(this)) {
          this._achUnlocked.add(id);
          newly.push(id);
          this.qlog(QACH_DEFS[id].icon, `量子成就：${QACH_DEFS[id].name}`);
        }
      } catch (e) { /* 判定异常跳过，不影响主循环 */ }
    }
    if (newly.length > 0) this.emit('qach', { ids: newly });
    return newly;
  }

  // 成就面板数据
  achievementPanel() {
    if (!this._achUnlocked) this._achUnlocked = new Set();
    return QACH_ORDER.map(id => ({
      id,
      name: QACH_DEFS[id].name,
      icon: QACH_DEFS[id].icon,
      desc: QACH_DEFS[id].desc,
      done: this._achUnlocked.has(id),
    }));
  }

  // ---------------- 量子计算机 ----------------

  // 当前总算力（算力/秒）：各计算机基础算力 × 等级倍率，再 × 全局倍率
  totalFlops(now, game) {
    const comps = this.qbuildings(game, 'qcomp');
    if (comps.length === 0) return 0;
    // 相干度 < 0.5：算力减半
    const cohereMul = this.coherence() < QTUNE.COHERE_COMP_HALF ? 0.5 : 1;
    // 算力爆发事件
    const boostMul = now < this.flopsBoostUntil ? this.flopsBoostMul : 1;
    const researchMul = this.qmul('qcompFlopsMul');
    // 缺电：算力为 0（量子电网保护量子建筑）
    if (!this.labPowered(game)) return 0;
    let base = 0;
    for (const c of comps) {
      base += QTUNE.QCOMP_BASE_FLOPS * this.qbUpgradeFx(c, 'flopsMul', 'mul', 1);
    }
    return base * cohereMul * boostMul * researchMul;
  }

  // 程序队列上限（基础 + 各计算机等级加成）
  queueMax(game) {
    let q = QTUNE.QCOMP_QUEUE_MAX;
    for (const c of this.qbuildings(game, 'qcomp')) {
      q += this.qbUpgradeFx(c, 'queueAdd', 'add', 0);
    }
    return q;
  }

  // 开始一个程序（入队）
  startProgram(progId, game) {
    const def = QPROG_DEFS[progId];
    if (!def) return { ok: false, reason: '未知程序' };
    if (this.qbuildings(game, 'qcomp').length === 0) {
      return { ok: false, reason: '需要先建造量子计算机' };
    }
    if (!this.research.has(def.needQRes)) {
      return { ok: false, reason: `需要研究「${QRESEARCH_DEFS[def.needQRes].name}」` };
    }
    const qmax = this.queueMax(game);
    if (this.progQueue.length >= qmax) {
      return { ok: false, reason: `队列已满（${qmax}）` };
    }
    if (this.progQueue.some(p => p.progId === progId)) {
      return { ok: false, reason: '该程序已在队列中' };
    }
    const inv = ensureQubit(game.player.inv);
    if (!spendQubit(inv, def.cost.qubit || 0)) {
      return { ok: false, reason: `需要 qubit×${def.cost.qubit}` };
    }
    this.stats.qubitSpent += (def.cost.qubit || 0);
    this.progQueue.push({ progId, remainingFlops: def.flops });
    this.qlog(def.icon, `量子程序入队：${def.name}（需算力 ${def.flops} 秒）`);
    this.emit('qprog-start', { id: progId, name: def.name });
    return { ok: true };
  }

  // 程序 tick：按算力推进，完成后结算奖励
  tickComputer(now, dt, game) {
    if (this.progQueue.length === 0) return;
    const flops = this.totalFlops(now, game);
    if (flops <= 0) return;
    const dtSec = Math.min(dt, QTUNE.DT_CLAMP_MS) / 1000;
    const cur = this.progQueue[0];
    cur.remainingFlops -= flops * dtSec;
    if (cur.remainingFlops <= 0) {
      this.progQueue.shift();
      this.finishProgram(cur.progId, game);
    }
  }

  // 程序完成结算
  finishProgram(progId, game) {
    const def = QPROG_DEFS[progId];
    if (!def) return;
    const inv = ensureQubit(game.player.inv);
    const now = Date.now();
    this.stats.progsDone++;
    this.progDoneCount[progId] = (this.progDoneCount[progId] || 0) + 1;
    // 资源奖励
    if (def.reward.res) {
      for (const k in def.reward.res) {
        if (k === 'qubit') gainQubit(inv, def.reward.res[k]);
        else inv[k] = (inv[k] || 0) + def.reward.res[k];
      }
    }
    // Buff 奖励
    if (def.reward.buff) {
      const bf = def.reward.buff;
      for (const k in bf) {
        const v = bf[k];
        if (v && typeof v === 'object' && v.sec) {
          // 限时 buff：{ mul/add, until }
          this.bursts[k] = { mul: v.mul, add: v.add, until: now + v.sec * 1000 };
        } else if (k === 'cohereAdd') {
          this.addCohere(v, `程序「${def.name}」`);
        } else if (k === 'cohereMaxAddPerm') {
          this.cohereMaxBonus += v;
          this.qlog('💓', `相干度上限 +${v}（永久）`);
        } else if (k === 'launchCostMulPerm') {
          // 发射台成本永久 -10%，可叠 3 次
          this._launchDiscounts = Math.min(3, (this._launchDiscounts || 0) + 1);
          this.qlog('🚀', `发射台成本永久 -10%（已叠 ${this._launchDiscounts} 次）`);
        }
      }
    }
    this.qlog(def.icon, `量子程序完成：${def.name}`);
    this.emit('qprog-done', { id: progId, name: def.name, icon: def.icon });
    if (game.toast) game.toast(`${def.icon} 量子程序完成：${def.name}`, 'good');
    if (game.sound) game.sound('complete');
    this.checkMissions(game);
  }

  // 发射台成本总折扣（程序奖励）
  launchCostMul() {
    return Math.pow(0.9, this._launchDiscounts || 0);
  }

  // ---------------- 纠缠通讯 ----------------

  // 当前可用链路对数（各基站：基础 + 研究 + 等级加成，求和）
  maxLinks(game) {
    const stations = this.qbuildings(game, 'entangle');
    if (stations.length === 0) return 0;
    const base = QTUNE.ENTANGLE_LINKS_PER_STATION + this.qsum('entangleLinksAdd');
    let total = 0;
    for (const s of stations) {
      total += base + this.qbUpgradeFx(s, 'linksAdd', 'add', 0);
    }
    return total;
  }

  // 自动建立链路：连接产量最高的建筑两两配对（简单策略）
  autoLink(now, game) {
    const max = this.maxLinks(game);
    // 清理过期/失效链路
    this.links = this.links.filter(l => l.until === 0 || l.until > now);
    if (this.links.length >= max || max === 0) return;
    const buildings = (game.builder && game.builder.buildings) || [];
    // 候选：未损坏、有产出的建筑（排除道路）
    const cands = buildings.filter(b => !b.damaged && b.id !== 'road');
    if (cands.length < 2) return;
    // 简单评分：建筑等级高优先
    cands.sort((a, b) => (b.level || 1) - (a.level || 1));
    const linked = new Set(this.links.flatMap(l => [l.aKey, l.bKey]));
    let made = 0;
    for (let i = 0; i < cands.length && this.links.length < max && made < 2; i++) {
      const a = cands[i];
      const ka = this.bkey(a);
      if (linked.has(ka)) continue;
      // 找另一个未连接的
      for (let j = i + 1; j < cands.length; j++) {
        const b = cands[j];
        const kb = this.bkey(b);
        if (linked.has(kb)) continue;
        this.links.push({ aKey: ka, bKey: kb, protoId: 'p-link-std', until: 0 });
        linked.add(ka); linked.add(kb);
        made++;
        this.qlog('🔗', `纠缠链路建立：${a.id} ↔ ${b.id}`);
        break;
      }
    }
  }

  // 链路维持费 tick（每分钟扣一次）
  tickLinkUpkeep(now, game) {
    const minTick = Math.floor(now / 60000);
    if (minTick === this._lastLinkUpkeepMin) return;
    this._lastLinkUpkeepMin = minTick;
    if (this.links.length === 0) return;
    const inv = ensureQubit(game.player.inv);
    // 基站等级影响维持费：取各基站 upkeepMul 的平均值
    const stations = this.qbuildings(game, 'entangle');
    let stationMul = 1;
    if (stations.length > 0) {
      stationMul = stations.reduce((s, st) =>
        s + this.qbUpgradeFx(st, 'upkeepMul', 'mul', 1), 0) / stations.length;
    }
    let upkeep = QTUNE.ENTANGLE_UPKEEP_QUBIT_PER_MIN *
      this.qmul('entangleUpkeepMul') * stationMul;
    // 深度纠缠协议的链路维持费 ×2
    let total = 0;
    for (const l of this.links) {
      const proto = QPROTO_DEFS[l.protoId];
      const um = (proto && proto.fx && proto.fx.linkUpkeepMul) || 1;
      total += upkeep * um;
    }
    if ((inv.qubit || 0) >= total) {
      inv.qubit -= total;
      this.stats.qubitSpent += total;
    } else {
      // qubit 不足：断开最旧的一对链路
      const dropped = this.links.shift();
      this.qlog('🔗', `qubit 不足，纠缠链路断开（${dropped.aKey} ↔ ${dropped.bKey}）`);
      this.emit('qlink-drop', { link: dropped });
    }
  }

  // 运行一次性脉冲协议
  runBurst(protoId, game) {
    const def = QPROTO_DEFS[protoId];
    if (!def || def.kind !== 'burst') return { ok: false, reason: '未知脉冲协议' };
    if (def.needQRes && !this.research.has(def.needQRes)) {
      return { ok: false, reason: `需要研究「${QRESEARCH_DEFS[def.needQRes].name}」` };
    }
    const inv = ensureQubit(game.player.inv);
    const cost = def.cost.qubit || 0;
    if (!spendQubit(inv, cost)) return { ok: false, reason: `需要 qubit×${cost}` };
    this.stats.qubitSpent += cost;
    const now = Date.now();
    const fx = def.fx;
    if (fx.burstTradeSec) {
      this.bursts['burstTradeSec'] = { mul: fx.burstTradeSec.mul, until: now + fx.burstTradeSec.sec * 1000 };
    }
    if (fx.burstProdSec) {
      this.bursts['burstProdSec'] = { mul: fx.burstProdSec.mul, until: now + fx.burstProdSec.sec * 1000 };
    }
    if (fx.burstCohere) {
      this.addCohere(fx.burstCohere, `协议「${def.name}」`);
    }
    if (fx.burstTunnel) {
      this.tunnelRoll(game, fx.burstTunnel);  // 好结果概率 +20%
    }
    if (fx.burstDecohereImmuneSec) {
      this.decohereImmuneUntil = now + fx.burstDecohereImmuneSec * 1000;
    }
    this.qlog(def.icon, `纠缠协议启动：${def.name}`);
    this.emit('qproto', { id: protoId, name: def.name, icon: def.icon });
    if (game.toast) game.toast(`${def.icon} ${def.name}已启动`, 'good');
    return { ok: true };
  }

  // 汇总所有量子加成（game.js 在产量/贸易处调用）
  getBuffs() {
    const now = Date.now();
    const alive = {};
    for (const k in this.bursts) {
      if (this.bursts[k].until > now) alive[k] = this.bursts[k];
    }
    // 链路加成
    const linkCount = this.links.filter(l => l.until === 0 || l.until > now).length;
    let linkProd = 1, linkTrade = 1;
    if (linkCount > 0) {
      // 基础：每对链路产量 +15%（取链路协议倍率最高者简化）
      let protoMul = 1;
      for (const l of this.links) {
        const proto = QPROTO_DEFS[l.protoId];
        if (proto && proto.fx && proto.fx.linkProdMul) {
          protoMul = Math.max(protoMul, proto.fx.linkProdMul);
        }
      }
      const perLink = QTUNE.ENTANGLE_PROD_BONUS * protoMul * this.qmul('entangleProdMul');
      linkProd = 1 + perLink * linkCount;
      const perTrade = QTUNE.ENTANGLE_TRADE_BONUS * this.qmul('tradeQMul');
      linkTrade = Math.min(1 + QTUNE.ENTANGLE_TRADE_CAP, 1 + perTrade * linkCount);
    }
    // 脉冲加成
    const burstTrade = alive['burstTradeSec'] ? alive['burstTradeSec'].mul : 1;
    const burstProd = alive['burstProdSec'] ? alive['burstProdSec'].mul : 1;
    // 程序加成
    const progProd = alive['prodMulSec'] ? alive['prodMulSec'].mul : 1;
    const progLab = alive['labMulSec'] ? alive['labMulSec'].mul : 1;
    const progSmelter = alive['smelterMulSec'] ? alive['smelterMulSec'].mul : 1;
    const progGreenhouse = alive['greenhouseMulSec'] ? alive['greenhouseMulSec'].mul : 1;
    const progFusion = alive['fusionMulSec'] ? alive['fusionMulSec'].mul : 1;
    const warnAdd = alive['warnAddSec'] ? alive['warnAddSec'].add : 0;
    return {
      linkCount,
      prodMul: linkProd * burstProd * progProd,  // 全城生产总倍率
      tradeMul: linkTrade * burstTrade,          // 贸易总倍率
      labMul: progLab,                          // 实验室科技产出倍率
      smelterMul: progSmelter,
      greenhouseMul: progGreenhouse,
      fusionMul: progFusion,
      warnAddMs: warnAdd * 1000,                // 预警 +N 毫秒
      launchCostMul: this.launchCostMul(),
    };
  }

  // 某建筑是否在纠缠链路中（产量加成判定用）
  buildingLinked(b) {
    const now = Date.now();
    const key = this.bkey(b);
    return this.links.some(l =>
      (l.until === 0 || l.until > now) && (l.aKey === key || l.bKey === key));
  }

  // 链路中建筑的产量倍率（game.js 在单建筑产量处调用）
  linkProdMulFor(b) {
    if (!this.buildingLinked(b)) return 1;
    let protoMul = 1;
    const now = Date.now();
    const key = this.bkey(b);
    for (const l of this.links) {
      if ((l.until === 0 || l.until > now) && (l.aKey === key || l.bKey === key)) {
        const proto = QPROTO_DEFS[l.protoId];
        if (proto && proto.fx && proto.fx.linkProdMul) {
          protoMul = Math.max(protoMul, proto.fx.linkProdMul);
        }
      }
    }
    return 1 + QTUNE.ENTANGLE_PROD_BONUS * protoMul * this.qmul('entangleProdMul');
  }

  // 某建筑是否因退相干停工（game.js 在产量处调用，返回倍率 0/1）
  buildingDownMul(b, now) {
    const until = this.downBuildings[this.bkey(b)];
    if (until && now < until) return 0;
    return 1;
  }

  // ---------------- 量子隧穿 ----------------

  // 掷一次量子隧穿（goodBias：好结果概率加成，如脉冲 +0.2）
  tunnelRoll(game, goodBias) {
    const now = Date.now();
    const inv = ensureQubit(game.player.inv);
    this.stats.tunnels++;
    this.tunnelCount++;
    // 权重：研究修正
    let wGood = QTUNE.TUNNEL_W_GOOD * this.qmul('tunnelGoodMul');
    let wBad = QTUNE.TUNNEL_W_BAD * this.qmul('tunnelBadMul');
    if (goodBias) wGood += goodBias;
    // 程序限时好运
    const tb = this.bursts['tunnelGoodMulSec'];
    if (tb && tb.until > now) wGood *= tb.mul;
    const wOdd = Math.max(0.05, 1 - wGood - wBad);
    const r = Math.random() * (wGood + wBad + wOdd);
    let tier;
    if (r < wGood) tier = 'good';
    else if (r < wGood + wBad) tier = 'bad';
    else tier = 'odd';
    const opts = QTUNNEL_TABLE[tier];
    const pick = opts[Math.floor(Math.random() * opts.length)];
    this.qlog(pick.icon, `量子隧穿：${pick.name} —— ${pick.desc}`);
    // 相干度冲击
    this.addCohere(-QTUNE.COHERE_DECAY_PER_EVENT * 0.5, '量子隧穿冲击');
    // 按 id 结算
    this.settleTunnel(pick.id, game);
    this.emit('qtunnel', { id: pick.id, name: pick.name, icon: pick.icon, tier });
    if (game.toast) {
      const tone = tier === 'bad' ? 'bad' : (tier === 'good' ? 'good' : 'info');
      game.toast(`${pick.icon} 量子隧穿：${pick.name}`, tone);
    }
    if (game.sound) game.sound(tier === 'bad' ? 'disaster' : 'event');
    this.checkMissions(game);
    return pick.id;
  }

  // 隧穿量：库存 5%~15%（至少 QTUNE.TUNNEL_MIN_QTY，上限 MAX_QTY）
  tunnelQty(inv, resKey) {
    const have = inv[resKey] || 0;
    if (have <= 0) return 0;
    const pct = QTUNE.TUNNEL_PCT_MIN +
      Math.random() * (QTUNE.TUNNEL_PCT_MAX - QTUNE.TUNNEL_PCT_MIN);
    return Math.max(QTUNE.TUNNEL_MIN_QTY,
      Math.min(QTUNE.TUNNEL_MAX_QTY, Math.floor(have * pct)));
  }

  // 选一种有库存的资源（按库存价值加权，qubit 除外）
  pickStockRes(inv, resValue) {
    const anchor = resValue || {
      iron: 1, ice: 1, rare: 3, uranium: 8, he3: 15,
      water: 1, food: 2, steel: 4, tech: 10,
    };
    const cands = [];
    for (const k in anchor) {
      const have = inv[k] || 0;
      if (have > 0) cands.push({ k, w: have * anchor[k] });
    }
    if (cands.length === 0) return null;
    const total = cands.reduce((s, c) => s + c.w, 0);
    let r = Math.random() * total;
    for (const c of cands) {
      r -= c.w;
      if (r <= 0) return c.k;
    }
    return cands[0].k;
  }

  // 隧穿结算总分发
  settleTunnel(id, game) {
    const inv = ensureQubit(game.player.inv);
    const now = Date.now();
    switch (id) {
      case 't-good-dup': {
        const k = this.pickStockRes(inv);
        if (k) {
          const q = this.tunnelQty(inv, k);
          inv[k] += q;
          this.qlog('👯', `复制：${k} +${q}`);
        }
        break;
      }
      case 't-good-qubit': {
        gainQubit(inv, 2);
        this.stats.qubitMined += 2;
        break;
      }
      case 't-good-tech': {
        inv.tech = (inv.tech || 0) + 15;
        break;
      }
      case 't-good-he3': {
        inv.he3 = (inv.he3 || 0) + 5;
        break;
      }
      case 't-good-food': {
        const q = this.tunnelQty(inv, 'food');
        inv.food = (inv.food || 0) + q;
        break;
      }
      case 't-good-steel': {
        const q = this.tunnelQty(inv, 'steel');
        inv.steel = (inv.steel || 0) + q;
        break;
      }
      case 't-bad-loss': {
        const k = this.pickStockRes(inv);
        if (k) {
          const q = this.tunnelQty(inv, k);
          inv[k] = Math.max(0, (inv[k] || 0) - q);
          this.qlog('🕳️', `丢失：${k} -${q}`);
        }
        break;
      }
      case 't-bad-qubit': {
        const loss = Math.min(2, inv.qubit || 0);
        inv.qubit -= loss;
        this.stats.qubitSpent += loss;
        break;
      }
      case 't-bad-power': {
        this.powerDebuffUntil = now + 60000;
        this.qlog('⚡', '电网扰动：全城电力 -20%，持续 60 秒');
        break;
      }
      case 't-bad-lab': {
        this.labDownUntil = now + 30000;
        this.qlog('🔬', '实验室扰动：30 秒内实验室停产');
        break;
      }
      case 't-bad-cohere': {
        this.addCohere(-0.1, '相干泄漏');
        break;
      }
      case 't-odd-swap': {
        // 等价值置换：库存价值最高的 10% → 价值最低的资源
        const anchor = { iron: 1, ice: 1, rare: 3, uranium: 8, he3: 15, water: 1, food: 2, steel: 4, tech: 10 };
        let hiK = null, hiV = -1, loK = null, loV = Infinity;
        for (const k in anchor) {
          const v = (inv[k] || 0) * anchor[k];
          if ((inv[k] || 0) > 0 && v > hiV) { hiV = v; hiK = k; }
          if ((inv[k] || 0) > 0 && v < loV) { loV = v; loK = k; }
        }
        if (hiK && loK && hiK !== loK) {
          const moveVal = hiV * 0.1;
          const moveQty = Math.floor((inv[hiK] || 0) * 0.1);
          const gainQty = Math.floor(moveVal / anchor[loK]);
          inv[hiK] = Math.max(0, (inv[hiK] || 0) - moveQty);
          inv[loK] = (inv[loK] || 0) + gainQty;
          this.qlog('🔀', `置换：${hiK} -${moveQty} → ${loK} +${gainQty}`);
        }
        break;
      }
      case 't-odd-qubit2tech': {
        if ((inv.qubit || 0) >= 1) {
          inv.qubit -= 1;
          inv.tech = (inv.tech || 0) + 12;
          this.stats.qubitSpent += 1;
        }
        break;
      }
      case 't-odd-tech2qubit': {
        if ((inv.tech || 0) >= 24) {
          inv.tech -= 24;
          gainQubit(inv, 2);
          this.stats.qubitMined += 2;
        }
        break;
      }
      case 't-odd-nothing': {
        this.addCohere(0.02, '虚惊一场');
        break;
      }
      case 't-odd-double': {
        // 再掷一次，好结果概率翻倍（用 goodBias）
        this.tunnelRoll(game, QTUNE.TUNNEL_W_GOOD);
        break;
      }
      default:
        break;
    }
  }

  // 电力 debuff 倍率（game.js 在电力结算处调用）
  powerDebuffMul(now) {
    return now < this.powerDebuffUntil ? 0.8 : 1;
  }

  // ---------------- 量子退相干 ----------------

  // 掷一次退相干事件
  decohereRoll(game) {
    const now = Date.now();
    // 护盾过载免疫
    if (now < this.decohereImmuneUntil) {
      this.qlog('🔰', '退相干冲击被护盾过载挡下');
      return null;
    }
    this.stats.decoheres++;
    // 按权重选变体
    const vs = QDECOHERE_DEFS.variants;
    const total = vs.reduce((s, v) => s + v.w, 0);
    let r = Math.random() * total;
    let pick = vs[0];
    for (const v of vs) {
      r -= v.w;
      if (r <= 0) { pick = v; break; }
    }
    // 停工时长受护盾数量、护盾等级与研究影响
    const shields = this.qbuildings(game, 'qshield');
    let shieldMul = Math.pow(0.8, shields.length);
    for (const s of shields) {
      shieldMul *= this.qbUpgradeFx(s, 'downMul', 'mul', 1);
    }
    const durMul = shieldMul * this.qmul('decohereDownMul');
    const duration = Math.floor(pick.durationMs * durMul);
    // 选停工建筑
    const buildings = (game.builder && game.builder.buildings) || [];
    let targets = [];
    if (pick.buildings === -1 || pick.quantumOnly) {
      // 级联：所有量子建筑
      targets = buildings.filter(b => QBUILD_IDS.has(b.id));
    } else {
      // 优先量子建筑 50%，否则随机电子建筑
      const qbs = buildings.filter(b => QBUILD_IDS.has(b.id) && !b.damaged);
      const ebs = buildings.filter(b => ELECTRONIC_IDS.has(b.id) && !QBUILD_IDS.has(b.id) && !b.damaged);
      const shuffled = (arr) => arr.slice().sort(() => Math.random() - 0.5);
      const qPick = shuffled(qbs).slice(0, Math.ceil(pick.buildings * QDECOHERE_DEFS.PREFER_QUANTUM));
      const ePick = shuffled(ebs).slice(0, pick.buildings - qPick.length);
      targets = qPick.concat(ePick);
    }
    let downCount = 0;
    for (const b of targets) {
      this.downBuildings[this.bkey(b)] = now + duration;
      downCount++;
    }
    if (pick.cohereHit) this.addCohere(-pick.cohereHit, `退相干：${pick.name}`);
    else this.addCohere(-QTUNE.COHERE_DECAY_PER_EVENT * 0.5, '退相干冲击');
    this.qlog(pick.icon, `退相干：${pick.name} —— ${downCount} 座建筑停工 ${Math.round(duration / 1000)} 秒`);
    this.emit('qdecohere', { id: pick.id, name: pick.name, icon: pick.icon, downCount, durationMs: duration });
    if (game.toast) game.toast(`${pick.icon} 退相干：${pick.name}（${downCount} 座建筑停工）`, 'bad');
    if (game.sound) game.sound('disaster');
    // 合同：护盾保护下零停工
    if (shields.length > 0 && downCount === 0) {
      this.decohereShieldedCount++;
    }
    this.checkMissions(game);
    return pick.id;
  }

  // ---------------- 奇点事件 ----------------

  wonderRoll(game) {
    const now = Date.now();
    this.stats.wonders++;
    // 6 种奇点等权
    const ids = ['ev-wonder-entangle', 'ev-wonder-flops', 'ev-wonder-cohere',
      'ev-wonder-insight', 'ev-wonder-qubit-rain', 'ev-wonder-observer'];
    // 加权（与 QEVENT_DEFS.w 一致）
    const ws = ids.map(id => QEVENT_DEFS[id].w);
    const total = ws.reduce((s, w) => s + w, 0);
    let r = Math.random() * total;
    let pickId = ids[0];
    for (let i = 0; i < ids.length; i++) {
      r -= ws[i];
      if (r <= 0) { pickId = ids[i]; break; }
    }
    const def = QEVENT_DEFS[pickId];
    this.qlog(def.icon, `量子奇点：${def.name} —— ${def.desc}`);
    this.settleWonder(pickId, game);
    this.emit('qwonder', { id: pickId, name: def.name, icon: def.icon });
    if (game.toast) game.toast(`${def.icon} 量子奇点：${def.name}`, 'good');
    if (game.sound) game.sound('event');
    return pickId;
  }

  settleWonder(id, game) {
    const now = Date.now();
    const inv = ensureQubit(game.player.inv);
    switch (id) {
      case 'ev-wonder-entangle': {
        // 免费链路 5 分钟：连两座随机建筑
        const buildings = ((game.builder && game.builder.buildings) || [])
          .filter(b => !b.damaged && b.id !== 'road');
        if (buildings.length >= 2) {
          const a = buildings[Math.floor(Math.random() * buildings.length)];
          let b = buildings[Math.floor(Math.random() * buildings.length)];
          if (b === a) b = buildings[(buildings.indexOf(a) + 1) % buildings.length];
          this.links.push({
            aKey: this.bkey(a), bKey: this.bkey(b),
            protoId: 'p-link-std', until: now + 5 * 60 * 1000, free: true,
          });
          this.qlog('💞', `自发纠缠：${a.id} ↔ ${b.id}（5 分钟）`);
        }
        break;
      }
      case 'ev-wonder-flops': {
        this.flopsBoostUntil = now + 120000;
        this.flopsBoostMul = 3;
        break;
      }
      case 'ev-wonder-cohere': {
        this.cohere = this.cohereMax();
        this.qlog('💓', '相干共振：相干度回满');
        break;
      }
      case 'ev-wonder-insight': {
        // 随机一项未解锁研究 5 折 10 分钟
        const locked = QRESEARCH_ORDER.filter(rid => !this.research.has(rid));
        if (locked.length > 0) {
          const pick = locked[Math.floor(Math.random() * locked.length)];
          this.researchDiscount = { id: pick, mul: 0.5, until: now + 10 * 60 * 1000 };
          this.qlog('💡', `量子灵感：研究「${QRESEARCH_DEFS[pick].name}」5 折 10 分钟`);
        }
        break;
      }
      case 'ev-wonder-qubit-rain': {
        const shields = this.qbuildings(game, 'qshield').length;
        const gain = shields > 0 ? 5 : 2;
        gainQubit(inv, gain);
        this.stats.qubitMined += gain;
        break;
      }
      case 'ev-wonder-observer': {
        if (this.progQueue.length > 0) {
          const cur = this.progQueue.shift();
          this.finishProgram(cur.progId, game);
        } else {
          // 队列为空：改为 +2 qubit 安慰奖
          gainQubit(inv, 2);
          this.stats.qubitMined += 2;
        }
        break;
      }
      default:
        break;
    }
  }

  // ---------------- 隧穿阵列 ----------------

  // 隧穿阵列 tick：每 5 分钟小概率复制 3% 库存资源
  tickTunnelArray(now, game) {
    if (now < this.nextArrayTunnel) return;
    this.nextArrayTunnel = now + 5 * 60 * 1000;
    const arrays = this.qbuildings(game, 'tunnel');
    if (arrays.length === 0) return;
    if (!this.labPowered(game)) return;
    const inv = ensureQubit(game.player.inv);
    // 维持费：每座每 5 分钟 2.5 qubit（= 每分钟 0.5）
    const upkeep = arrays.length * 2.5;
    if ((inv.qubit || 0) < upkeep) {
      this.qlog('🌀', '隧穿阵列：qubit 不足，本轮未启动');
      return;
    }
    inv.qubit -= upkeep;
    this.stats.qubitSpent += upkeep;
    // 成功率：基础 35% + 阵列等级加成（取最高）
    let successAdd = 0, copyPct = 0.03;
    for (const a of arrays) {
      successAdd = Math.max(successAdd, this.qbUpgradeFx(a, 'successAdd', 'add', 0));
      copyPct = Math.max(copyPct, this.qbUpgradeFx(a, 'copyPct', 'set', 0.03));
    }
    let success = false;
    for (let i = 0; i < arrays.length; i++) {
      if (Math.random() < 0.35 + successAdd) { success = true; break; }
    }
    if (success) {
      const k = this.pickStockRes(inv);
      if (k) {
        const q = Math.max(1, Math.floor((inv[k] || 0) * copyPct));
        inv[k] += q;
        this.qlog('🌀', `隧穿阵列复制：${k} +${q}`);
        this.emit('qarray', { res: k, qty: q });
      }
    } else {
      this.qlog('🌀', '隧穿阵列：本轮未捕获到隧穿');
    }
  }

  // ---------------- 量子合同 ----------------

  // 刷新合同（最多挂 MAX_ACTIVE 个）
  tickMissions(now, game) {
    if (now < this.nextMission) return;
    const gap = QMISSION_TUNE.MIN_GAP +
      Math.random() * (QMISSION_TUNE.MAX_GAP - QMISSION_TUNE.MIN_GAP);
    this.nextMission = now + gap;
    // 清理已完成的
    this.missions = this.missions.filter(m => !m.done);
    if (this.missions.length >= QMISSION_TUNE.MAX_ACTIVE) return;
    // 随机一个未挂出的合同
    const active = new Set(this.missions.map(m => m.id));
    const cands = QMISSION_ORDER.filter(id => !active.has(id));
    if (cands.length === 0) return;
    const pick = cands[Math.floor(Math.random() * cands.length)];
    this.missions.push({ id: pick, progress: 0, done: false, acceptedAt: now });
    const def = QMISSION_DEFS[pick];
    this.qlog(def.icon, `新量子合同：${def.name}`);
    this.emit('qmission-new', { id: pick, name: def.name });
  }

  // 检查合同完成（研究/程序/事件后调用）
  checkMissions(game) {
    const inv = ensureQubit(game.player.inv);
    for (const m of this.missions) {
      if (m.done) continue;
      const def = QMISSION_DEFS[m.id];
      const need = def.need;
      let done = false;
      if (need.qubit) {
        if (spendQubit(inv, need.qubit)) {
          this.stats.qubitSpent += need.qubit;
          done = true;
        }
      } else if (need.prog) {
        if ((this.progDoneCount[need.prog] || 0) > (m._progMark || 0)) done = true;
      } else if (need.qresCount) {
        if (this.research.size >= need.qresCount) done = true;
      } else if (need.cohereHold) {
        // 相干度维持：由 tickCoherence 累计
        if (m.progress >= need.cohereHold.sec) done = true;
      } else if (need.tunnelCount) {
        if (this.tunnelCount >= need.tunnelCount) done = true;
      } else if (need.decohereShielded) {
        if (this.decohereShieldedCount >= need.decohereShielded) done = true;
      }
      if (done) {
        m.done = true;
        this._missionsDone = (this._missionsDone || 0) + 1;
        // 发奖励
        if (def.reward.res) {
          for (const k in def.reward.res) {
            if (k === 'qubit') gainQubit(inv, def.reward.res[k]);
            else inv[k] = (inv[k] || 0) + def.reward.res[k];
          }
        }
        if (def.reward.qubit) {
          gainQubit(inv, def.reward.qubit);
          this.stats.qubitMined += def.reward.qubit;
        }
        this.qlog(def.icon, `量子合同完成：${def.name}`);
        this.emit('qmission-done', { id: m.id, name: def.name, icon: def.icon });
        if (game.toast) game.toast(`${def.icon} 量子合同完成：${def.name}`, 'good');
        if (game.sound) game.sound('complete');
      }
    }
    // 清理已完成的（保留显示用，由 UI 读取后清理；这里保留）
  }

  // ---------------- 相干度 tick ----------------

  tickCoherence(now, dt, game) {
    const dtMin = Math.min(dt, QTUNE.DT_CLAMP_MS) / 60000;
    // 自然恢复
    let regen = QTUNE.COHERE_REGEN_PER_MIN + this.qsum('cohereRegenAdd');
    // 退相干护盾（含等级加成）
    for (const s of this.qbuildings(game, 'qshield')) {
      regen += QTUNE.COHERE_SHIELD_REGEN_PER_MIN +
        this.qbUpgradeFx(s, 'regenAdd', 'add', 0);
    }
    this.cohere = Math.min(this.cohereMax(), this.cohere + regen * dtMin);
    // 合同：相干度维持累计
    for (const m of this.missions) {
      if (m.done) continue;
      const def = QMISSION_DEFS[m.id];
      if (def.need.cohereHold && this.coherence() >= def.need.cohereHold.level) {
        m.progress += dtMin * 60;
      }
    }
    // 相干度归零保护：钳制在 0，不自动触发事件（事件走正常掷骰）
    if (this.cohere < 0) this.cohere = 0;
  }

  // ---------------- 事件掷骰 tick ----------------

  tickEvents(now, game) {
    const qCount = this.qbuildings(game).length;
    // 隧穿：需 ≥1 座量子建筑在线
    if (qCount > 0 && now >= this.nextTunnel) {
      const gap = QTUNE.TUNNEL_MIN_GAP +
        Math.random() * (QTUNE.TUNNEL_MAX_GAP - QTUNE.TUNNEL_MIN_GAP);
      // 退相干护盾时代：隧穿间隔 × 研究倍率
      this.nextTunnel = now + gap;
      this.tunnelRoll(game, 0);
    }
    // 退相干：相干度 < 0.6 或 25% 随机
    if (now >= this.nextDecohere) {
      const gap = (QTUNE.DECOHERE_MIN_GAP +
        Math.random() * (QTUNE.DECOHERE_MAX_GAP - QTUNE.DECOHERE_MIN_GAP)) *
        this.qmul('decohereGapMul');
      this.nextDecohere = now + gap;
      if (this.coherence() < 0.6 || Math.random() < 0.25) {
        this.decohereRoll(game);
      } else {
        this.qlog('🌫️', '退相干前兆消散（相干度良好）');
      }
    }
    // 奇点：每 15~25 分钟一次，需 ≥2 座量子建筑
    if (qCount >= 2 && now >= this.nextWonder) {
      this.nextWonder = now + 15 * 60 * 1000 + Math.random() * 10 * 60 * 1000;
      this.wonderRoll(game);
    }
  }

  // ---------------- 主更新 ----------------

  update(now, game) {
    if (!game || !game.player || !game.player.inv) return;
    const dt = this._lastTick ? now - this._lastTick : 0;
    this._lastTick = now;
    if (dt <= 0 || dt > 3600000) return;  // 异常 dt 丢弃（切后台过久）
    const cdt = Math.min(dt, QTUNE.DT_CLAMP_MS);

    // 清理过期停工
    for (const k in this.downBuildings) {
      if (this.downBuildings[k] <= now) delete this.downBuildings[k];
    }
    // 清理过期脉冲
    for (const k in this.bursts) {
      if (this.bursts[k].until <= now) delete this.bursts[k];
    }
    // 研究折扣过期
    if (this.researchDiscount && this.researchDiscount.until <= now) {
      this.researchDiscount = null;
    }

    this.tickCoherence(now, cdt, game);
    this.tickLabs(now, cdt, game);
    this.tickComputer(now, cdt, game);
    this.autoLink(now, game);
    this.tickLinkUpkeep(now, game);
    // 纠缠交换自动优化（每 60 秒）
    if (now - this.lastLinkOptimize > 60000) {
      this.lastLinkOptimize = now;
      this.optimizeLinks(game);
    }
    this.tickTunnelArray(now, game);
    this.tickEvents(now, game);
    this.tickMissions(now, game);
    this.checkMissions(game);
    // 成就追踪：qubit 峰值 / 链路峰值
    this._lastQubitSeen = Math.max(this._lastQubitSeen || 0, game.player.inv.qubit || 0);
    this._lastLinksSeen = Math.max(this._lastLinksSeen || 0,
      this.links.filter(l => l.until === 0 || l.until > now).length);
  }

  // 纠缠交换：将链路移到当前产量最低的建筑上（p-link-swap 协议）
  optimizeLinks(game) {
    const hasSwap = this.links.some(l => {
      const p = QPROTO_DEFS[l.protoId];
      return p && p.fx && p.fx.linkAutoOptimize;
    });
    if (!hasSwap) return;
    // 简单实现：断开所有 swap 链路，重新 autoLink（autoLink 按等级排序，
    // 这里改为按随机打乱模拟"产量最低优先"的近似）
    const swapLinks = this.links.filter(l => {
      const p = QPROTO_DEFS[l.protoId];
      return p && p.fx && p.fx.linkAutoOptimize;
    });
    if (swapLinks.length === 0) return;
    this.links = this.links.filter(l => !swapLinks.includes(l));
    this.qlog('🔀', '纠缠交换：链路已重新优化');
    this.autoLink(Date.now(), game);
  }

  // ---------------- 查询接口（UI / 成就用） ----------------

  // 面板数据（UI 每秒刷新一次）
  panelData(game) {
    const now = Date.now();
    const buffs = this.getBuffs();
    return {
      version: QUANTUM_VERSION,
      qubit: Math.floor((game.player.inv.qubit || 0) * 100) / 100,
      qubitFmt: fmtQubit(game.player.inv.qubit || 0),
      coherence: this.coherence(),
      cohereMax: this.cohereMax(),
      labs: this.qbuildings(game, 'qlab').length,
      computers: this.qbuildings(game, 'qcomp').length,
      stations: this.qbuildings(game, 'entangle').length,
      shields: this.qbuildings(game, 'qshield').length,
      arrays: this.qbuildings(game, 'tunnel').length,
      grids: this.qbuildings(game, 'qgrid').length,
      flops: this.totalFlops(now, game),
      queue: this.progQueue.map(p => ({
        id: p.progId,
        name: QPROG_DEFS[p.progId].name,
        icon: QPROG_DEFS[p.progId].icon,
        remainingSec: Math.max(0, Math.ceil(p.remainingFlops / Math.max(0.01, this.totalFlops(now, game)))),
        pct: Math.max(0, Math.min(1, 1 - p.remainingFlops / QPROG_DEFS[p.progId].flops)),
      })),
      links: this.links.length,
      maxLinks: this.maxLinks(game),
      researchDone: this.research.size,
      researchTotal: QRESEARCH_ORDER.length,
      buffs,
      missions: this.missions.filter(m => !m.done).map(m => ({
        id: m.id,
        name: QMISSION_DEFS[m.id].name,
        icon: QMISSION_DEFS[m.id].icon,
        desc: QMISSION_DEFS[m.id].desc,
      })),
      stats: Object.assign({}, this.stats),
      log: this.log.slice(-10).reverse(),
      downCount: Object.keys(this.downBuildings).length,
      powerDebuff: now < this.powerDebuffUntil,
      decohereImmune: now < this.decohereImmuneUntil,
    };
  }

  // 研究面板数据
  researchPanel() {
    const now = Date.now();
    return QRESEARCH_ORDER.map(id => {
      const def = QRESEARCH_DEFS[id];
      let cost = Object.assign({}, def.cost);
      let discount = false;
      if (this.researchDiscount && this.researchDiscount.id === id &&
          now < this.researchDiscount.until) {
        for (const k in cost) cost[k] = Math.max(1, Math.ceil(cost[k] * this.researchDiscount.mul));
        discount = true;
      }
      return {
        id, name: def.name, icon: def.icon, branch: def.branch,
        desc: def.desc, flavor: def.flavor, cost, discount,
        needs: def.needs,
        needsMet: def.needs.every(p => this.research.has(p)),
        done: this.research.has(id),
      };
    });
  }

  // 程序面板数据
  programPanel(game) {
    return QPROG_ORDER.map(id => {
      const def = QPROG_DEFS[id];
      return {
        id, name: def.name, icon: def.icon, flops: def.flops,
        cost: def.cost, fxText: def.fxText,
        needMet: !def.needQRes || this.research.has(def.needQRes),
        needName: def.needQRes ? QRESEARCH_DEFS[def.needQRes].name : null,
        queued: this.progQueue.some(p => p.progId === id),
        doneCount: this.progDoneCount[id] || 0,
      };
    });
  }

  // 协议面板数据
  protocolPanel() {
    return QPROTO_ORDER.map(id => {
      const def = QPROTO_DEFS[id];
      return {
        id, name: def.name, icon: def.icon, kind: def.kind,
        cost: def.cost, desc: def.desc, fxText: def.fxText,
        needMet: !def.needQRes || this.research.has(def.needQRes),
        needName: def.needQRes ? QRESEARCH_DEFS[def.needQRes].name : null,
      };
    });
  }

  // ---------------- 存档 / 读档 ----------------

  save() {
    const now = Date.now();
    return {
      v: QUANTUM_VERSION,
      research: Array.from(this.research),
      researchDiscount: this.researchDiscount,
      labState: this.labState,
      progQueue: this.progQueue,
      progDoneCount: this.progDoneCount,
      flopsBoostUntil: Math.max(0, this.flopsBoostUntil - now),
      flopsBoostMul: this.flopsBoostMul,
      links: this.links,
      bursts: this.bursts,
      cohere: this.cohere,
      cohereMaxBonus: this.cohereMaxBonus,
      decohereImmuneIn: Math.max(0, this.decohereImmuneUntil - now),
      nextTunnelIn: Math.max(0, this.nextTunnel - now),
      nextDecohereIn: Math.max(0, this.nextDecohere - now),
      nextWonderIn: Math.max(0, this.nextWonder - now),
      nextMissionIn: Math.max(0, this.nextMission - now),
      nextArrayTunnelIn: Math.max(0, this.nextArrayTunnel - now),
      downBuildings: this.downBuildings,
      powerDebuffIn: Math.max(0, this.powerDebuffUntil - now),
      labDownIn: Math.max(0, this.labDownUntil - now),
      missions: this.missions,
      tunnelCount: this.tunnelCount,
      decohereShieldedCount: this.decohereShieldedCount,
      launchDiscounts: this._launchDiscounts || 0,
      qbLevel: this.qbLevel || {},
      achUnlocked: this._achUnlocked ? Array.from(this._achUnlocked) : [],
      missionsDone: this._missionsDone || 0,
      lastQubitSeen: this._lastQubitSeen || 0,
      lastLinksSeen: this._lastLinksSeen || 0,
      log: this.log.slice(-QTUNE.QLOG_MAX),
      stats: this.stats,
    };
  }

  load(data) {
    if (!data) return;
    const now = Date.now();
    this.research = new Set(data.research || []);
    this.researchDiscount = data.researchDiscount || null;
    this.labState = data.labState || {};
    this.progQueue = data.progQueue || [];
    this.progDoneCount = data.progDoneCount || {};
    this.flopsBoostUntil = now + (data.flopsBoostUntil || 0);
    this.flopsBoostMul = data.flopsBoostMul || 1;
    this.links = data.links || [];
    this.bursts = data.bursts || {};
    this.cohere = (typeof data.cohere === 'number') ? data.cohere : 1.0;
    this.cohereMaxBonus = data.cohereMaxBonus || 0;
    this.decohereImmuneUntil = now + (data.decohereImmuneIn || 0);
    this.nextTunnel = now + (data.nextTunnelIn || QTUNE.TUNNEL_MIN_GAP);
    this.nextDecohere = now + (data.nextDecohereIn || QTUNE.DECOHERE_MIN_GAP);
    this.nextWonder = now + (data.nextWonderIn || 15 * 60 * 1000);
    this.nextMission = now + (data.nextMissionIn || QMISSION_TUNE.MIN_GAP);
    this.nextArrayTunnel = now + (data.nextArrayTunnelIn || 5 * 60 * 1000);
    this.downBuildings = data.downBuildings || {};
    this.powerDebuffUntil = now + (data.powerDebuffIn || 0);
    this.labDownUntil = now + (data.labDownIn || 0);
    this.missions = data.missions || [];
    this.tunnelCount = data.tunnelCount || 0;
    this.decohereShieldedCount = data.decohereShieldedCount || 0;
    this._launchDiscounts = data.launchDiscounts || 0;
    this.qbLevel = data.qbLevel || {};
    this._achUnlocked = new Set(data.achUnlocked || []);
    this._missionsDone = data.missionsDone || 0;
    this._lastQubitSeen = data.lastQubitSeen || 0;
    this._lastLinksSeen = data.lastLinksSeen || 0;
    this.log = data.log || [];
    this.stats = Object.assign({
      qubitMined: 0, qubitSpent: 0, tunnels: 0,
      decoheres: 0, wonders: 0, progsDone: 0, researchDone: 0,
    }, data.stats);
    this._lastTick = 0;
  }
}

// ---------------------------------------------------------------------
// ⬆️ 量子建筑升级 QUPGRADE_DEFS（除实验室外 5 种建筑，各 3 级）
// ---------------------------------------------------------------------
// 字段说明：
//   levels[i]：升到 i+2 级的配置（i=0 → 升 2 级，i=1 → 升 3 级）
//   cost   升级费用；desc 一句话；fxText UI 文本；fx 效果键
// 效果键说明：
//   linksAdd2/3      纠缠基站链路对数 +N（Lv2/Lv3）
//   upkeepMul        链路维持费倍率
//   flopsMul         量子计算机算力倍率
//   queueAdd         程序队列上限 +N
//   regenAdd         护盾相干恢复 +N/分钟
//   downMul          退相干停工时长倍率（<1 = 更短）
//   successAdd       隧穿阵列成功率 +N
//   copyPct          隧穿阵列复制比例（覆盖默认 0.03）
//   powerSave        量子电网节电比例（覆盖默认 0.25）
//   qprodMul         量子电网：量子建筑产量倍率
const QUPGRADE_DEFS = {
  'entangle': {
    name: '纠缠基站',
    levels: [
      {
        cost: { steel: 60, tech: 40 },
        desc: 'Lv2：相位稳定器，链路对数 +1。',
        fxText: ['链路 +1 对'],
        fx: { linksAdd: 1 },
      },
      {
        cost: { steel: 140, tech: 100 },
        desc: 'Lv3：低噪声放大，链路对数 +1，维持费 -30%。',
        fxText: ['链路 +1 对', '维持费 -30%'],
        fx: { linksAdd: 1, upkeepMul: 0.7 },
      },
    ],
  },
  'qcomp': {
    name: '量子计算机',
    levels: [
      {
        cost: { steel: 100, tech: 80 },
        desc: 'Lv2：追加量子比特，算力 +50%。',
        fxText: ['算力 +50%'],
        fx: { flopsMul: 1.5 },
      },
      {
        cost: { steel: 220, tech: 180 },
        desc: 'Lv3：多核调度，算力 +50%（叠加），程序队列 +1。',
        fxText: ['算力 +50%', '队列 +1'],
        fx: { flopsMul: 1.5, queueAdd: 1 },
      },
    ],
  },
  'qshield': {
    name: '退相干护盾',
    levels: [
      {
        cost: { steel: 80, tech: 60 },
        desc: 'Lv2：宽频抑制，相干恢复 +0.03/分钟。',
        fxText: ['相干恢复 +0.03/分钟'],
        fx: { regenAdd: 0.03 },
      },
      {
        cost: { steel: 180, tech: 140 },
        desc: 'Lv3：自适应滤波，退相干停工时长 -20%（叠加）。',
        fxText: ['停工时长 -20%'],
        fx: { downMul: 0.8 },
      },
    ],
  },
  'tunnel': {
    name: '隧穿阵列',
    levels: [
      {
        cost: { steel: 70, tech: 70 },
        desc: 'Lv2：场强聚焦，隧穿成功率 +15%。',
        fxText: ['成功率 +15%'],
        fx: { successAdd: 0.15 },
      },
      {
        cost: { steel: 160, tech: 160 },
        desc: 'Lv3：共振腔，复制比例 3% → 5%。',
        fxText: ['复制比例 → 5%'],
        fx: { copyPct: 0.05 },
      },
    ],
  },
  'qgrid': {
    name: '量子电网',
    levels: [
      {
        cost: { steel: 150, tech: 80 },
        desc: 'Lv2：超导升级，量子建筑节电 25% → 40%。',
        fxText: ['节电 → 40%'],
        fx: { powerSave: 0.40 },
      },
      {
        cost: { steel: 320, tech: 180 },
        desc: 'Lv3：相干输电，量子建筑产量 +10%。',
        fxText: ['量子建筑产量 +10%'],
        fx: { qprodMul: 1.1 },
      },
    ],
  },
  // qlab 走独立升级（QTUNE.QLAB_UP_COST），此处仅登记占位
  'qlab': { name: '量子实验室', levels: [] },
};

// ---------------------------------------------------------------------
// 🏆 量子成就 QACH_DEFS（12 项）
// ---------------------------------------------------------------------
// 字段说明：
//   id        成就 id（game.achievements 注册用；未接入时仅面板展示）
//   name/icon 展示名；desc 说明
//   check     判定函数 (qm) => bool（纯函数，不写状态）
// 接入：在 game.js 成就检查处调用
//   if (game.quantum) for (const id of game.quantum.checkAchievements()) game.achievements.unlock(id);
const QACH_DEFS = {
  'qach-first-qubit': {
    name: '第一缕相干', icon: '⚛️',
    desc: '产出第一个 qubit。',
    check: (qm) => qm.stats.qubitMined >= 1,
  },
  'qach-hundred': {
    name: '量子富翁', icon: '💰',
    desc: 'qubit 库存达到 100。',
    check: (qm) => qm._lastQubitSeen >= 100,
  },
  'qach-research-6': {
    name: '量子学徒', icon: '🎓',
    desc: '完成 6 项量子研究。',
    check: (qm) => qm.research.size >= 6,
  },
  'qach-research-12': {
    name: '量子学者', icon: '📖',
    desc: '完成 12 项量子研究。',
    check: (qm) => qm.research.size >= 12,
  },
  'qach-research-18': {
    name: '量子大师', icon: '🌟',
    desc: '完成全部 18 项量子研究。',
    check: (qm) => qm.research.size >= 18,
  },
  'qach-links-5': {
    name: '城市之网', icon: '🕸️',
    desc: '同时维持 5 对纠缠链路。',
    check: (qm) => qm._lastLinksSeen >= 5,
  },
  'qach-prog-10': {
    name: '算力主宰', icon: '💻',
    desc: '累计完成 10 个量子程序。',
    check: (qm) => qm.stats.progsDone >= 10,
  },
  'qach-tunnel-10': {
    name: '隧穿观测者', icon: '🌀',
    desc: '累计触发 10 次量子隧穿。',
    check: (qm) => qm.stats.tunnels >= 10,
  },
  'qach-decohere-3': {
    name: '退相干幸存者', icon: '🔰',
    desc: '累计度过 3 次退相干事件。',
    check: (qm) => qm.stats.decoheres >= 3,
  },
  'qach-wonder-5': {
    name: '奇点见证人', icon: '🌌',
    desc: '累计触发 5 次量子奇点。',
    check: (qm) => qm.stats.wonders >= 5,
  },
  'qach-launch-3': {
    name: '星辰大海', icon: '🚀',
    desc: '发射台成本折扣叠满 3 次。',
    check: (qm) => (qm._launchDiscounts || 0) >= 3,
  },
  'qach-mission-5': {
    name: '量子承包商', icon: '📦',
    desc: '累计完成 5 个量子合同。',
    check: (qm) => (qm._missionsDone || 0) >= 5,
  },
};
const QACH_ORDER = Object.keys(QACH_DEFS);

// ---------------------------------------------------------------------
// 🧪 自检（浏览器控制台 / node 手动调用）：QuantumSelfTest()
// ---------------------------------------------------------------------
// 不自动运行；接入方可在开发时调用排查。
function QuantumSelfTest() {
  const results = [];
  const ok = (name, cond) => results.push({ name, ok: !!cond });
  // 研究表完整性
  for (const id of QRESEARCH_ORDER) {
    const d = QRESEARCH_DEFS[id];
    ok('研究表 ' + id, !!d && !!d.name && !!d.branch && !!d.cost && Array.isArray(d.needs));
    for (const pre of d.needs) ok('研究前置 ' + id + '→' + pre, !!QRESEARCH_DEFS[pre]);
  }
  // 建筑表完整性
  for (const id of QBUILD_ORDER) {
    const d = QBUILD_DEFS[id];
    ok('建筑表 ' + id, !!d && !!d.name && !!d.cost && typeof d.power === 'number');
    if (d.needQRes) ok('建筑前置 ' + id, !!QRESEARCH_DEFS[d.needQRes]);
  }
  // 程序表完整性
  for (const id of QPROG_ORDER) {
    const d = QPROG_DEFS[id];
    ok('程序表 ' + id, !!d && d.flops > 0 && !!d.reward);
    ok('程序前置 ' + id, !!QRESEARCH_DEFS[d.needQRes]);
  }
  // 协议表完整性
  for (const id of QPROTO_ORDER) {
    const d = QPROTO_DEFS[id];
    ok('协议表 ' + id, !!d && (d.kind === 'link' || d.kind === 'burst'));
  }
  // 事件表完整性
  for (const id of QEVENT_ORDER) {
    const d = QEVENT_DEFS[id];
    ok('事件表 ' + id, !!d && !!d.handler || !!d.kind);
  }
  // 升级表完整性
  for (const bid of Object.keys(QUPGRADE_DEFS)) {
    const d = QUPGRADE_DEFS[bid];
    ok('升级表 ' + bid, !!d && Array.isArray(d.levels));
    for (const lv of d.levels) {
      ok('升级费用 ' + bid, !!lv.cost && !!lv.fx);
    }
  }
  // 成就表完整性
  for (const id of QACH_ORDER) {
    const d = QACH_DEFS[id];
    ok('成就表 ' + id, !!d && typeof d.check === 'function');
  }
  // 管理器冒烟
  const qm = new QuantumManager();
  ok('管理器构造', qm.coherence() === 1 && qm.research.size === 0);
  const inv = { qubit: 100, tech: 50 };
  const chk = qm.canResearch('q-lab-1', inv);
  ok('研究检查', chk.ok === true);
  const saved = qm.save();
  const qm2 = new QuantumManager();
  qm2.load(saved);
  ok('存档读档', qm2.coherence() === 1);
  ok('qubit 记账', (() => { const i = {}; gainQubit(i, 5); return i.qubit === 5 && spendQubit(i, 2) && i.qubit === 3; })());
  // 升级 / 链路 / 成就冒烟
  ok('升级冒烟', (() => {
    const m = new QuantumManager();
    const b = { id: 'qcomp', x: 1, y: 2 };
    const game = { player: { inv: { steel: 10000, tech: 10000 } }, builder: { buildings: [b] } };
    const r1 = m.upgradeQBuilding(b, game);
    const fx = m.qbUpgradeFx(b, 'flopsMul', 'mul', 1);
    return r1.ok && m.qlevelOf(b) === 2 && fx === 1.5;
  })());
  ok('链路冒烟', (() => {
    const m = new QuantumManager();
    const st = { id: 'entangle', x: 0, y: 0 };
    const game = { player: { inv: { qubit: 10 } }, builder: { buildings: [st] } };
    m.research.add('q-comm-1');
    const r = m.createLink('0,0', '1,1', 'p-link-std', game, 0);
    const l = m.linkList(game);
    const rm = m.removeLink('0,0', '1,1');
    return r.ok && l.length === 1 && rm.ok && m.links.length === 0;
  })());
  ok('成就冒烟', (() => {
    const m = new QuantumManager();
    m.stats.qubitMined = 1;
    const n = m.checkAchievements();
    return n.includes('qach-first-qubit');
  })());
  const failed = results.filter(r => !r.ok);
  return { total: results.length, failed: failed.length, failedList: failed.map(f => f.name) };
}

if (typeof module !== 'undefined') {
  module.exports = {
    QUANTUM_VERSION, QTUNE, QUANTUM_RES, QUBIT_KEY,
    ensureQubit, canAffordQubit, spendQubit, gainQubit, fmtQubit, estimateResValue,
    QRESEARCH_DEFS, QRESEARCH_ORDER, QRESEARCH_BRANCHES,
    QBUILD_DEFS, QBUILD_ORDER, QBUILD_IDS, ELECTRONIC_IDS,
    QPROTO_DEFS, QPROTO_ORDER,
    QPROG_DEFS, QPROG_ORDER,
    QTUNNEL_TABLE, QDECOHERE_DEFS,
    QEVENT_DEFS, QEVENT_ORDER,
    QMISSION_DEFS, QMISSION_ORDER, QMISSION_TUNE,
    QUPGRADE_DEFS, QACH_DEFS, QACH_ORDER,
    QuantumManager, QuantumSelfTest,
  };
}
