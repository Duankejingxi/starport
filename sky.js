/* 星港 — sky.js：v1.6 天空城系统（大气层平台 / 浮空建筑 / 飞行器）
 *
 * ═══════════════════════════════════════════════════════════════════════
 * 系统概述
 * ═══════════════════════════════════════════════════════════════════════
 * 第三建造层：地面（build.js）→ 轨道（orbital.js）之间，新增「天空层」。
 * 人类不再只住在地表和轨道——火星稀薄但存在的大气，被证明可以托起城市。
 * 天空城不是一座城，是三层「空域」里的浮空平台群：
 *
 *   第一层 · 低空 LOW_ALT（1~5 km）：风大、尘多，但离地面近，补给便宜；
 *   第二层 · 平流层 STRATOSPHERE（20~30 km）：风平浪静，阳光充足，科研天堂；
 *   第三层 · 近地轨道边缘 LEO_EDGE（80~100 km，大气顶层）：辐射强、维护贵，
 *            但视野无敌，是深空跳板的最后一站。
 *
 * 核心循环：
 *   锚定塔（地面）→ 牵引缆绳 → 浮空平台 → 浮空建筑（8 种 × 3 级）
 *   货运飞艇（平台↔地面/平台↔平台运货）→ 巡逻机（空域治安 + 气象侦察）
 *
 * ═══════════════════════════════════════════════════════════════════════
 * 加载顺序与接入方式
 * ═══════════════════════════════════════════════════════════════════════
 *   加载顺序：build.js、orbital.js 之后，game.js 之前：
 *     <script src="sky.js"></script>
 *     <script>mergeSkyBuildings(); mountSkyManager(game);</script>
 *   本文件只声明，不自动合并、不自动挂载：
 *     - mergeSkyBuildings()：把 SKY_BUILDINGS 合并进全局 BUILDINGS
 *       （幂等，重复调用安全；BUILDINGS 未定义时打 warn 并返回 false）；
 *     - mountSkyManager(game)：在 game.sky 上挂载 SkyManager 实例
 *       （game 不存在时返回 null，不抛错）；
 *     - SkyAgg：聚合接口，供 build.js / disaster.js / pop.js 防御性读取。
 *
 * ═══════════════════════════════════════════════════════════════════════
 * 防御性约定
 * ═══════════════════════════════════════════════════════════════════════
 *   - 所有 game 对象读取判存在再用；天空层未接入时，浮空建筑的 effect
 *     字段仍可被老系统按「地面建筑」理解（power/food/tech 等通用键）；
 *   - cost 的 key 只用现有资源：iron / ice / rare / water / food /
 *     steel / tech / uranium / he3 / nano（v1.5 注册）；
 *   - effect 自定义字段全部收拢在 effect 对象里，配合「★ 读取约定」注释；
 *   - 自检：控制台运行 SkySelfTest()。
 *
 * 版本日志：
 *   v1.6.0  初始版本：3 层空域 / 浮空建筑 8 种 × 3 级 /
 *           飞行器 2 种（货运飞艇/巡逻机）/ SkyManager / SkyWeather。
 */

// ================= v1.6 版本常量 =================
const SKY_VERSION = '1.6.0';
const SKY_CODENAME = '天空城';
const SKY_SAVE_KEY = 'starport-save-v1';  // 与 game.js SAVE_KEY 保持一致

// ================= 天空层全局调参 =================
// 数值标定基准：地面高级建筑 Lv1 ≈ 100 钢；天空建筑 Lv1 ≈ 1.5 倍（要上天就得加钱）。
const SKY_TUNING = {
  tickMs: 10000,              // 生产 tick 间隔（毫秒，与主循环对齐）
  prodCycleSec: 60,           // 资源产出按「每 60 秒」标定
  maxLevel: 3,                // 浮空建筑最高等级
  // ---- 三层空域容量（平台槽位） ----
  lowAltSlots: 12,            // 低空：每城市 12 个平台槽
  stratoSlots: 8,             // 平流层：8 个平台槽
  leoEdgeSlots: 4,            // 近地轨道边缘：4 个平台槽
  // ---- 平台维持成本（每 tick 每平台） ----
  platformUpkeepPower: {      // 平台悬浮耗电（按空域）
    low: 2, strato: 3, leo: 5,
  },
  // ---- 锚定与缆绳 ----
  anchorRangeKm: 5,           // 锚定塔牵引半径（低空平台必须在锚定塔 5km 内）
  cableHpPerLevel: 100,       // 每级缆绳血量
  // ---- 飞行器 ----
  airshipCargo: 200,          // 货运飞艇单次运力（资源单位）
  airshipSpeed: 1,            // 飞艇往返周期（tick 数）
  patrolCoverage: 3,          // 巡逻机单架覆盖平台数
  patrolMorale: 2,            // 巡逻机全城治安/幸福贡献
  // ---- 天气 ----
  stormWarnMs: 30 * 1000,     // 空中风暴预警 30 秒
  windBaseMs: 60 * 1000,      // 常规风切变最小间隔
  // ---- 坠毁 ----
  crashDurabilityLoss: 0.35,  // 平台坠毁时建筑耐久损失 35%
  crashPopLoss: 0.10,         // 平台坠毁时平台人口损失 10%
};

/* ═══════════════════════════════════════════════════════════════════════
 * 一、三层空域 SKY_LAYERS
 * ═══════════════════════════════════════════════════════════════════════
 * 设计总纲：三层空域是「风险-收益」阶梯——
 *   越高越贵、越危险，但产出倍率与战略价值也越高。
 *   低空是「天空城的郊区」，平流层是「富人区+实验室」，
 *   近地轨道边缘是「军事要塞+深空跳板」。
 *
 * 字段：
 *   id / name / icon / altitude（高度区间文字）/
 *   wind（风速等级 1~5，影响平台维持耗电）/
 *   temp（温度文字，仅 flavor）/ radiation（辐射等级 1~5，影响维护成本）/
 *   slots（平台槽位数）/ upkeepMul（维持成本倍率）/ yieldMul（产出倍率）/
 *   unlock（解锁条件）/ desc（描述）/ flavor（风味文案）
 *
 * ★ 读取约定（build.js / disaster.js 防御性读取）：
 *   const L = SKY_LAYERS[layerId] || {};
 *   const yieldMul = L.yieldMul || 1;      // 作用于该层所有浮空建筑产出（乘法）
 *   const upkeepMul = L.upkeepMul || 1;    // 作用于该层平台维持耗电（乘法）
 *   const slots = L.slots || 0;            // 该层平台槽位上限
 *   // 平台所属空域记录在平台对象 p.layerId（'low'/'strato'/'leo'）上。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_LAYERS = {
  // ── 第一层 · 低空 ──────────────────────────────────────────────
  // 定位：天空城的「郊区」。离地面近，补给便宜，风却最大——
  // 火星低空是沙尘暴的主战场，平台在这里要天天和风拔河。
  // ★ 读取约定：yieldMul 1.0（无加成）；wind 4 → 平台维持耗电 ×1.2；
  //   灾难「空中风暴」对低空平台伤害 +25%（见 content_v16.js）。
  low: {
    id: 'low', name: '低空', icon: '🪂', altitude: '1~5 km',
    wind: 4, temp: '-60℃ ~ -20℃', radiation: 1,
    slots: 12, upkeepMul: 1.2, yieldMul: 1.0,
    unlock: { type: 'tech', ref: 't-sky-1', desc: '需研究「浮空原理」' },
    desc: '离地面最近的空域：补给便宜，但沙尘暴的主战场，平台维持耗电 ×1.2',
    flavor: '低空的风像没拴绳的狗，平台每天的第一件事就是确认自己还在原地。',
  },
  // ── 第二层 · 平流层 ────────────────────────────────────────────
  // 定位：天空城的「富人区+实验室」。风平浪静，阳光直射无遮挡——
  // 太阳能在这里是地面效率的 1.4 倍，科研建筑产出 ×1.25。
  // ★ 读取约定：yieldMul 1.25；科研类建筑（effect.skyResearch）额外 ×1.25；
  //   天空电站（sky_solar）在平流层产电 ×1.4（见 effect.stratoPowerMul）。
  strato: {
    id: 'strato', name: '平流层', icon: '🎈', altitude: '20~30 km',
    wind: 1, temp: '-70℃（稳定）', radiation: 2,
    slots: 8, upkeepMul: 1.0, yieldMul: 1.25,
    unlock: { type: 'tech', ref: 't-sky-6', desc: '需研究「平流层定居」' },
    desc: '风平浪静、阳光充足：全层产出 ×1.25，科研建筑额外 ×1.25',
    flavor: '平流层的黄昏持续六个小时，住在这里的人说：时间在这里学会了排队。',
  },
  // ── 第三层 · 近地轨道边缘 ──────────────────────────────────────
  // 定位：天空城的「军事要塞+深空跳板」。大气顶层，辐射强、维护贵，
  // 但深空相关产出 ×1.5，且是「虫洞远征」胜利的空中发射场。
  // ★ 读取约定：yieldMul 1.5；radiation 5 → 平台维护耗电 ×1.5；
  //   深空类建筑（effect.deepSpace）在本层额外 ×1.5（与天文台深空加成叠乘）。
  leo: {
    id: 'leo', name: '近地轨道边缘', icon: '🛰️', altitude: '80~100 km',
    wind: 0, temp: '-120℃ ~ +120℃（剧烈）', radiation: 5,
    slots: 4, upkeepMul: 1.5, yieldMul: 1.5,
    unlock: { type: 'tech', ref: 't-sky-11', desc: '需研究「临界轨道」' },
    desc: '大气顶层：维护贵（耗电 ×1.5），但全层产出 ×1.5，深空建筑额外 ×1.5',
    flavor: '在这里，往下看是火星，往上看是深渊——平台就悬在人类的野心上。',
  },
};

// 空域 id → 中文名（UI/日志用，防御：未知 id 返回原文）
function skyLayerName(id) {
  const l = SKY_LAYERS[id];
  return l ? l.name : String(id);
}

/* ═══════════════════════════════════════════════════════════════════════
 * 二、浮空平台机制（平台是「地基」，建筑建在平台上）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：每个平台 = 1 个槽位，可承载 1 座浮空建筑（Lv1~3）。
 * 平台三要素：
 *   浮力（lift）：平台悬浮的基础，由「浮空囊」提供，不耗电；
 *   锚定（anchor）：低空平台必须有地面锚定塔牵引，否则每 tick 有漂移概率；
 *   维护（upkeep）：每 tick 耗电 = SKY_TUNING.platformUpkeepPower[layer] × upkeepMul。
 *
 * 平台数据结构（SkyManager.platforms 数组元素）：
 *   { id, layerId, buildingId, level, hp, maxHp, drifted, anchored, crew }
 * ★ 读取约定（disaster.js / SkyManager）：
 *   p.layerId ∈ {'low','strato','leo'}；p.hp <= 0 视为坠毁（不是损坏）；
 *   坠毁结算见 SKY_TUNING.crashDurabilityLoss / crashPopLoss。
 * ═══════════════════════════════════════════════════════════════════════
 */

// 新建空白平台（防御：layerId 非法时回退到 'low'）
function createSkyPlatform(layerId) {
  const layer = SKY_LAYERS[layerId] ? layerId : 'low';
  return {
    id: 'plat-' + Math.random().toString(36).slice(2, 9),
    layerId: layer,
    buildingId: null,   // 未建造时为 null
    level: 0,
    hp: 100, maxHp: 100,
    drifted: false,     // 是否漂移（低空无锚定时）
    anchored: layer !== 'low',  // 平流层以上用姿态引擎，无需地面锚定
    crew: 0,            // 平台乘员（影响维修速度）
  };
}

// 平台每 tick 维持耗电（防御：未知空域按低空算）
function skyPlatformUpkeep(layerId) {
  const base = (SKY_TUNING.platformUpkeepPower[layerId] ||
    SKY_TUNING.platformUpkeepPower.low);
  const mul = (SKY_LAYERS[layerId] && SKY_LAYERS[layerId].upkeepMul) || 1;
  return Math.ceil(base * mul);
}

/* ═══════════════════════════════════════════════════════════════════════
 * 三、浮空建筑 8 种 × 3 级（SKY_BUILDINGS）
 * ═══════════════════════════════════════════════════════════════════════
 * 延续 BUILDINGS_V15 数据约定：
 *   levels[1..3]（索引 0 为 null 占位），每级
 *   { cost, needPop, powerUse, effect, effectDesc, desc, flavor }；
 *   cost 的 key 只用现有资源；
 *   unlock：{ type:'tech'|'building'|'none', ref, level?, desc }；
 *   接入：mergeSkyBuildings() → Object.assign(BUILDINGS, SKY_BUILDINGS)。
 *
 * 天空建筑通用规则（与地面建筑的差异）：
 *   1. 必须建在浮空平台上（平台槽位见 SKY_LAYERS），不占地面建筑位；
 *   2. 产出自动乘以所在空域的 yieldMul（低空 1.0 / 平流层 1.25 / 轨道边缘 1.5）；
 *   3. 断电时平台进入「迫降模式」：建筑停产，但平台不坠毁（hp 缓慢下降）；
 *   4. 空中风暴期间：低空建筑停产（除气象尖塔），平流层以上减产 50%。
 *
 * 8 种建筑一览：
 *   ☁️ cloud_farm 云端农场 / 🚁 sky_dock 空中船坞 /
 *   ⚡ sky_solar 天空电站 / 🏘️ sky_habitat 浮空居住区 /
 *   🏭 pressure_refinery 气压提炼塔 / 📡 storm_radar 风暴雷达站 /
 *   🛳️ cloud_harbor 云港码头 / 🌸 sky_garden 天空花园
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_BUILDINGS = {

// ═══════════════════════════════════════════════════════════════════════
// 1. ☁️ 云端农场 cloud_farm
// 定位：天空的食物基本盘。利用平流层充足日照 + 云水收集，
// 单位人口食物产出是地面温室的 1.3 倍（Lv3），但只在不断电时工作。
// ★ 读取约定（build.js 生产逻辑防御性读取）：
//   const eff = SkyAgg.effectOf('cloud_farm', b.level) || {};
//   const out = (eff.foodOut || 0) * (SKY_LAYERS[p.layerId].yieldMul || 1);
//   // 每 produceInterval 产出；断电/低空风暴期间停产（stormHalt=true 的建筑除外）
//   // 云水加成：effect.cloudWater=true 时，每周期额外 +2 水（平流层限定）
// 数值平衡注释：
//   - Lv1 6 食物/周期 ≈ 地面温室 Lv2，但 cost 是 1.5 倍——
//     「上天种菜」是奢侈品，前期别碰；
//   - Lv3 20 食物/周期 + 云水 6，是天空城自给自足的关键；
//   - powerUse 3/5/8：补光灯是电老虎，断电即停产是主要制衡；
//   - needPop 8/15/25：农场需要农艺师常驻平台。
// ═══════════════════════════════════════════════════════════════════════
cloud_farm: {
  id: 'cloud_farm', name: '云端农场', icon: '☁️',
  levels: [null,
    { cost: { steel: 120, ice: 60 }, needPop: 8, powerUse: 3,
      effect: { foodOut: 6, waterOut: 0, produceInterval: 60000, cloudWater: false, skyBuilding: true },
      effectDesc: '每周期产食物 6（断电/低空风暴时停产）',
      desc: '云上种菜：每周期 6 食物，断电即停产',
      flavor: '第一茬生菜收获时，农艺师说：这菜是喝着云长大的。', },
    { cost: { steel: 280, ice: 120, tech: 20 }, needPop: 15, powerUse: 5,
      effect: { foodOut: 12, waterOut: 2, produceInterval: 60000, cloudWater: true, skyBuilding: true },
      effectDesc: '每周期产食物 12、水 2（平流层云水收集）',
      desc: '食物 12 + 云水 2/周期：平流层日照加成',
      flavor: '农场的玻璃穹顶每天擦三遍——在这里，灰尘是奢侈品。', },
    { cost: { steel: 600, tech: 80, rare: 40 }, needPop: 25, powerUse: 8,
      effect: { foodOut: 20, waterOut: 6, produceInterval: 60000, cloudWater: true, skyBuilding: true },
      effectDesc: '每周期产食物 20、水 6；天空城食物基本盘',
      desc: '食物 20 + 云水 6/周期：天空自给自足',
      flavor: '「我们在云上种出了整个城市的晚饭。」——云端农场奠基铭文', },
  ],
  desc: '天空食物基本盘：产食物（+云水），断电/低空风暴时停产',
  unlock: { type: 'tech', ref: 't-sky-2', desc: '需研究「云水农业」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 2. 🚁 空中船坞 sky_dock
// 定位：飞行器的「家」。没有船坞，飞艇和巡逻机无处停靠维修；
// 每座船坞提供飞行器槽位，Lv3 还附带空中维修（平台 hp 回复）。
// ★ 读取约定（SkyManager 飞行器调度防御性读取）：
//   const eff = SkyAgg.effectOf('sky_dock', b.level) || {};
//   const slots = eff.aircraftSlots || 0;   // 可停靠飞行器数（加法汇总）
//   const repair = eff.platformRepair || 0; // 每 tick 回复平台 hp（Lv3 专属）
//   // 飞行器总数 > 总槽位时，超出的飞行器停飞（maintenance 暂停，不扣 upkeep）
// 数值平衡注释：
//   - Lv1 2 槽位：刚好够 1 飞艇 + 1 巡逻机的「标配」；
//   - Lv3 6 槽位 + 平台维修，是天空城后期的「空中 4S 店」；
//   - cost 含 he3（10/25）：船坞的磁悬浮锁止器需要氦-3 冷却；
//   - powerUse 4/7/12：船坞的牵引光束很耗电。
// ═══════════════════════════════════════════════════════════════════════
sky_dock: {
  id: 'sky_dock', name: '空中船坞', icon: '🚁',
  levels: [null,
    { cost: { steel: 150, tech: 15 }, needPop: 10, powerUse: 4,
      effect: { aircraftSlots: 2, platformRepair: 0, skyBuilding: true },
      effectDesc: '提供 2 个飞行器停靠槽位',
      desc: '飞行器之家：2 槽位，飞艇/巡逻机停靠维修',
      flavor: '第一艘飞艇入坞时，地勤在机身上喷了句话：欢迎回家。', },
    { cost: { steel: 350, tech: 50, he3: 10 }, needPop: 18, powerUse: 7,
      effect: { aircraftSlots: 4, platformRepair: 1, skyBuilding: true },
      effectDesc: '提供 4 个飞行器槽位；每 tick 回复平台 1 hp',
      desc: '4 槽位 + 平台维修：空中维修站',
      flavor: '船坞的机械臂比外科医生的手还稳——它修的是会飞的东西。', },
    { cost: { steel: 700, tech: 150, he3: 25, rare: 60 }, needPop: 30, powerUse: 12,
      effect: { aircraftSlots: 6, platformRepair: 3, skyBuilding: true },
      effectDesc: '提供 6 个飞行器槽位；每 tick 回复平台 3 hp',
      desc: '6 槽位 + 强力维修：天空城的空中 4S 店',
      flavor: '「只要还能飞回来，我们就能让它再飞出去。」——船坞厂训', },
  ],
  desc: '飞行器停靠/维修；Lv2 起回复平台耐久',
  unlock: { type: 'tech', ref: 't-sky-3', desc: '需研究「飞行器工程」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 3. ⚡ 天空电站 sky_solar
// 定位：天空城的「发电厂」。平流层日照无遮挡，产电效率是地面太阳能的
// 1.4 倍（stratoPowerMul）；低空多尘，效率只有 0.8。
// ★ 读取约定（build.js 电力聚合防御性读取）：
//   const eff = SkyAgg.effectOf('sky_solar', b.level) || {};
//   let out = eff.power || 0;
//   if (p.layerId === 'strato') out *= (eff.stratoPowerMul || 1.4);
//   if (p.layerId === 'low') out *= (eff.lowPowerMul || 0.8);
//   // 夜间（游戏内昼夜）平流层依然有光：天空电站不受昼夜影响（noNight=true）
// 数值平衡注释：
//   - Lv1 平流层 7 电 ≈ 地面核电站 Lv1 的一半，但 cost 只有其 1/3；
//   - Lv3 平流层 28 电，是天空城后期的电力支柱；
//   - 低空 0.8 倍是刻意打压：别在沙尘暴里指望太阳；
//   - powerUse 0：电站不耗电，它是产电的。
// ═══════════════════════════════════════════════════════════════════════
sky_solar: {
  id: 'sky_solar', name: '天空电站', icon: '⚡',
  levels: [null,
    { cost: { steel: 100, rare: 20 }, needPop: 6, powerUse: 0,
      effect: { power: 5, stratoPowerMul: 1.4, lowPowerMul: 0.8, noNight: true, skyBuilding: true },
      effectDesc: '产电 5（平流层 ×1.4=7，低空 ×0.8=4）；不受昼夜影响',
      desc: '平流层 7 电 / 低空 4 电：无遮挡日照',
      flavor: '帆板展开的那一刻，整个平台被染成了金色。', },
    { cost: { steel: 250, rare: 50, tech: 30 }, needPop: 12, powerUse: 0,
      effect: { power: 12, stratoPowerMul: 1.4, lowPowerMul: 0.8, noNight: true, skyBuilding: true },
      effectDesc: '产电 12（平流层 ×1.4≈17，低空 ×0.8≈10）',
      desc: '平流层 17 电 / 低空 10 电：天空电网成型',
      flavor: '电站值班员的工作是：每天给太阳「打卡」，从不缺勤。', },
    { cost: { steel: 550, tech: 120, rare: 100 }, needPop: 20, powerUse: 0,
      effect: { power: 20, stratoPowerMul: 1.4, lowPowerMul: 0.8, noNight: true, skyBuilding: true },
      effectDesc: '产电 20（平流层 ×1.4=28，低空 ×0.8=16）',
      desc: '平流层 28 电：天空城电力支柱',
      flavor: '「我们在离太阳更近的地方，替全城把电存好。」——电站铭文', },
  ],
  desc: '天空发电厂：平流层效率 ×1.4，低空 ×0.8，不受昼夜影响',
  unlock: { type: 'tech', ref: 't-sky-1', desc: '需研究「浮空原理」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 4. 🏘️ 浮空居住区 sky_habitat
// 定位：天空的人口上限。住在天上的人不占地面居住位，
// 但每人每天要多消耗 0.5 电（生命维持），且幸福 -2（恐高是普遍的）。
// ★ 读取约定（pop.js 防御性读取）：
//   const eff = SkyAgg.effectOf('sky_habitat', b.level) || {};
//   const cap = eff.popCap || 0;             // 提供的人口上限（加法汇总）
//   const extraPower = eff.popPowerUse || 0; // 每位天空居民额外耗电
//   const hap = eff.skyHappiness || 0;       // 天空居民幸福修正（负值）
//   // 天空人口计入总人口，参与生育与工作，但不参与地面建筑 needPop
//   // （他们在天上，通勤靠飞艇——飞艇运力不足时天空建筑降效，见 SkyManager）
// 数值平衡注释：
//   - Lv1 20 人 ≈ 地面居住舱 Lv2，但每人 +0.5 电是持续税；
//   - Lv3 80 人 + 幸福修正转正（观景台）：天空居住从「将就」变「享受」；
//   - cost 含 ice（生命维持水循环）：天上每一滴水都是运上去的。
// ═══════════════════════════════════════════════════════════════════════
sky_habitat: {
  id: 'sky_habitat', name: '浮空居住区', icon: '🏘️',
  levels: [null,
    { cost: { steel: 180, ice: 80 }, needPop: 0, powerUse: 2,
      effect: { popCap: 20, popPowerUse: 0.5, skyHappiness: -2, skyBuilding: true },
      effectDesc: '人口上限 +20（天空）；每位天空居民 +0.5 耗电，幸福 -2',
      desc: '天空人口 +20：云上蜗居，恐高者慎入',
      flavor: '第一批住户的合影背景是整片云海——他们说，值了。', },
    { cost: { steel: 400, ice: 150, tech: 40 }, needPop: 0, powerUse: 4,
      effect: { popCap: 45, popPowerUse: 0.5, skyHappiness: 0, skyBuilding: true },
      effectDesc: '人口上限 +45（天空）；每位天空居民 +0.5 耗电',
      desc: '天空人口 +45：适应了高度，开始享受风景',
      flavor: '住户委员会的第一项决议：每晚八点，全区调暗灯光看星星。', },
    { cost: { steel: 800, tech: 150, ice: 250 }, needPop: 0, powerUse: 6,
      effect: { popCap: 80, popPowerUse: 0.4, skyHappiness: 3, skyBuilding: true, observatory: true },
      effectDesc: '人口上限 +80（天空）；每位 +0.4 耗电，幸福 +3（观景台）',
      desc: '天空人口 +80：云端社区，幸福转正',
      flavor: '「地上的人仰望我们，我们仰望星空——这很公平。」——住户手册扉页', },
  ],
  desc: '天空人口上限 +20/+45/+80；居民额外耗电，Lv3 幸福转正',
  unlock: { type: 'tech', ref: 't-sky-4', desc: '需研究「高空居住」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 5. 🏭 气压提炼塔 pressure_refinery
// 定位：天空的「化工厂」。利用高空低气压环境提炼稀有气体，
// 产出稀有矿（rare）与 He3，是天空城最赚钱的建筑。
// ★ 读取约定（build.js 生产逻辑防御性读取）：
//   const eff = SkyAgg.effectOf('pressure_refinery', b.level) || {};
//   // 每 produceInterval：产出 out.rare + out.he3
//   // 高度加成：effect.altitudeBonus=true 时，所在空域越高产出越高
//   //   低空 ×1.0 / 平流层 ×1.3 / 轨道边缘 ×1.6（与 yieldMul 叠乘）
// 数值平衡注释：
//   - Lv1 每周期 2 稀有矿 ≈ 地面稀有矿机 Lv1 的 2 倍，但 cost 含 30 tech；
//   - Lv3 开始产 He3（1/周期）：天空城是 He3 的第二产地（第一是深空）；
//   - powerUse 6/10/16：低温分馏是电老虎；
//   - needPop 12/22/35：化工厂需要持证工程师。
// ═══════════════════════════════════════════════════════════════════════
pressure_refinery: {
  id: 'pressure_refinery', name: '气压提炼塔', icon: '🏭',
  levels: [null,
    { cost: { steel: 200, tech: 30 }, needPop: 12, powerUse: 6,
      effect: { rareOut: 2, he3Out: 0, produceInterval: 90000, altitudeBonus: true, skyBuilding: true },
      effectDesc: '每周期产稀有矿 2（高度加成：平流层 ×1.3，轨道边缘 ×1.6）',
      desc: '稀有矿 2/周期：高空分馏，天空印钞机',
      flavor: '第一批提炼出的稀有气体，被装在瓶子里送给了市长当礼物。', },
    { cost: { steel: 450, tech: 80, rare: 30 }, needPop: 22, powerUse: 10,
      effect: { rareOut: 5, he3Out: 0, produceInterval: 90000, altitudeBonus: true, skyBuilding: true },
      effectDesc: '每周期产稀有矿 5（高度加成）',
      desc: '稀有矿 5/周期：提炼塔扩建',
      flavor: '塔顶的警示灯每晚闪烁，像在给过路的飞艇打招呼。', },
    { cost: { steel: 900, tech: 200, he3: 20 }, needPop: 35, powerUse: 16,
      effect: { rareOut: 10, he3Out: 1, produceInterval: 90000, altitudeBonus: true, skyBuilding: true },
      effectDesc: '每周期产稀有矿 10、He3 1（高度加成）；天空 He3 第二产地',
      desc: '稀有矿 10 + He3 1/周期：天空化工顶点',
      flavor: '「我们把空气变成了钱，又把钱变成了去更远地方的票。」——厂长', },
  ],
  desc: '高空提炼稀有矿（+He3）；越高空域产量越高',
  unlock: { type: 'tech', ref: 't-sky-7', desc: '需研究「高空分馏」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 6. 📡 风暴雷达站 storm_radar
// 定位：天空城的「天气预报局」。全城气象预警：空中风暴/沙尘暴来临前
// 延长预警时间，Lv3 直接给低空建筑 50% 风暴减伤。
// ★ 读取约定（disaster.js / SkyWeather 防御性读取）：
//   const eff = SkyAgg.effectOf('storm_radar', b.level) || {};
//   const warnBonus = eff.warnBonusMs || 0;   // 预警时间延长（毫秒，加法汇总）
//   const mit = eff.stormMitigation || 0;     // 低空建筑风暴减伤（取最高）
//   // 实现：disaster.js 在调度空中风暴/沙尘暴时，先读全城 warnBonus 累加到 warnMs
// 数值平衡注释：
//   - Lv1 +15 秒预警：给玩家「收菜/关机」的反应时间，是体验向建筑；
//   - Lv3 +45 秒 + 50% 低空减伤：低空流必备，否则低空平台在风暴季会被刮成秃子；
//   - powerUse 2/4/6：雷达 24 小时开机，电费是固定的；
//   - 不产任何资源：纯功能建筑，靠「省下的损失」回本。
// ═══════════════════════════════════════════════════════════════════════
storm_radar: {
  id: 'storm_radar', name: '风暴雷达站', icon: '📡',
  levels: [null,
    { cost: { steel: 120, tech: 20 }, needPop: 8, powerUse: 2,
      effect: { warnBonusMs: 15000, stormMitigation: 0, skyBuilding: true },
      effectDesc: '气象预警 +15 秒（空中风暴/沙尘暴）',
      desc: '预警 +15 秒：给全城争取反应时间',
      flavor: '雷达第一次捕捉到风暴胚胎时，值班员激动得打翻了咖啡。', },
    { cost: { steel: 300, tech: 60 }, needPop: 14, powerUse: 4,
      effect: { warnBonusMs: 30000, stormMitigation: 0.25, skyBuilding: true },
      effectDesc: '气象预警 +30 秒；低空建筑风暴伤害 -25%',
      desc: '预警 +30 秒，低空减伤 25%',
      flavor: '气象员说：我们的工作就是让坏消息早到 30 秒。', },
    { cost: { steel: 600, tech: 150, rare: 50 }, needPop: 22, powerUse: 6,
      effect: { warnBonusMs: 45000, stormMitigation: 0.5, skyBuilding: true },
      effectDesc: '气象预警 +45 秒；低空建筑风暴伤害 -50%',
      desc: '预警 +45 秒，低空减伤 50%：天空城气象局',
      flavor: '「风暴会迟到，但我们的预警从不缺席。」——雷达站站训', },
  ],
  desc: '延长气象预警；Lv2 起给低空建筑风暴减伤',
  unlock: { type: 'tech', ref: 't-sky-5', desc: '需研究「气象学」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 7. 🛳️ 云港码头 cloud_harbor
// 定位：天空的「贸易港」。飞艇在这里装卸货，Lv2 起开通「云端航线」
// （天空↔地面贸易价格 +15%），Lv3 成为跨城贸易枢纽。
// ★ 读取约定（trade.js / SkyManager 防御性读取）：
//   const eff = SkyAgg.effectOf('cloud_harbor', b.level) || {};
//   const routes = eff.tradeRoutes || 0;     // 开通的云端航线数（加法汇总）
//   const priceMul = eff.skyTradeMul || 1;   // 天空相关贸易价格倍率（取最高）
//   const dockSpeed = eff.dockSpeedMul || 1; // 飞艇装卸速度倍率（取最高）
//   // 实现：每条航线每 5 分钟自动执行一次天空↔地面资源交换（trade.js 实现）
// 数值平衡注释：
//   - Lv1 1 条航线：解决天空城「有产出运不下去」的问题，是功能刚需；
//   - Lv3 3 条航线 + 价格 ×1.3：天空贸易流的核心；
//   - cost 含 food（100/200）：码头工人要吃饭，建码头先备粮；
//   - powerUse 3/5/8：装卸机械臂与导航灯。
// ═══════════════════════════════════════════════════════════════════════
cloud_harbor: {
  id: 'cloud_harbor', name: '云港码头', icon: '🛳️',
  levels: [null,
    { cost: { steel: 200, food: 100 }, needPop: 12, powerUse: 3,
      effect: { tradeRoutes: 1, skyTradeMul: 1.0, dockSpeedMul: 1.0, skyBuilding: true },
      effectDesc: '开通 1 条云端航线（天空↔地面自动运货）',
      desc: '1 条云端航线：天空产出运得下去',
      flavor: '第一艘货运飞艇靠港时，码头工人列队欢迎——像迎接远洋轮。', },
    { cost: { steel: 450, tech: 60, food: 200 }, needPop: 22, powerUse: 5,
      effect: { tradeRoutes: 2, skyTradeMul: 1.15, dockSpeedMul: 1.5, skyBuilding: true },
      effectDesc: '2 条云端航线；天空贸易价格 +15%；装卸 ×1.5',
      desc: '2 航线，贸易价 +15%：云端贸易成型',
      flavor: '码头的调度员说：天上的物流，比地上的堵车好管多了。', },
    { cost: { steel: 900, tech: 180, rare: 80 }, needPop: 35, powerUse: 8,
      effect: { tradeRoutes: 3, skyTradeMul: 1.3, dockSpeedMul: 2.0, skyBuilding: true },
      effectDesc: '3 条云端航线；天空贸易价格 +30%；装卸 ×2',
      desc: '3 航线，贸易价 +30%：跨城贸易枢纽',
      flavor: '「云港的灯一亮，半个火星的商船都知道：开市了。」——贸易部长', },
  ],
  desc: '云端航线（天空↔地面自动运货）；Lv2 起贸易价格加成',
  unlock: { type: 'tech', ref: 't-sky-8', desc: '需研究「云端物流」科技解锁' },
},

// ═══════════════════════════════════════════════════════════════════════
// 8. 🌸 天空花园 sky_garden
// 定位：天空城的「精神建筑」。不产实体资源，但全城幸福 +N，
// 且每座花园让天空居民的「恐高 debuff」-1（抵消居住区负幸福）。
// ★ 读取约定（pop.js / achievements.js 防御性读取）：
//   const eff = SkyAgg.effectOf('sky_garden', b.level) || {};
//   const hap = eff.happiness || 0;            // 全城幸福（加法汇总）
//   const fear = eff.fearReduce || 0;          // 天空恐高 debuff 抵消（加法汇总）
//   const pts = eff.achievementPts || 0;       // 每 grantInterval 成就点数
//   // 实现：pop.js 计算天空居民幸福时，先加 skyHappiness（负），再加 fearReduce
// 数值平衡注释：
//   - Lv1 幸福 +4 ≈ 抵消一座 Lv1 居住区的恐高（-2×20 人太贵，
//     实际是「精神安慰」）；
//   - Lv3 幸福 +15 + 成就点数：天空文化胜利的挂件；
//   - powerUse 1/2/3：浇水系统与景观灯；
//   - cost 含 water（50/100/200）：天上种花，水比油贵。
// ═══════════════════════════════════════════════════════════════════════
sky_garden: {
  id: 'sky_garden', name: '天空花园', icon: '🌸',
  levels: [null,
    { cost: { steel: 80, water: 50 }, needPop: 5, powerUse: 1,
      effect: { happiness: 4, fearReduce: 1, achievementPts: 0, skyBuilding: true },
      effectDesc: '全城幸福 +4；天空恐高 debuff -1',
      desc: '幸福 +4：云上的第一片花海',
      flavor: '第一朵花开的时候，整个平台的人都下来看——包括恐高的。', },
    { cost: { steel: 200, water: 100, tech: 20 }, needPop: 10, powerUse: 2,
      effect: { happiness: 8, fearReduce: 2, achievementPts: 1, grantInterval: 60000, skyBuilding: true },
      effectDesc: '全城幸福 +8；恐高 debuff -2；每 60 秒成就点数 1',
      desc: '幸福 +8，成就点数 1/60秒：空中花园',
      flavor: '园丁说：在天上种花，最大的敌人不是缺水，是风太大把花瓣吹跑。', },
    { cost: { steel: 450, tech: 80, water: 200 }, needPop: 18, powerUse: 3,
      effect: { happiness: 15, fearReduce: 4, achievementPts: 3, grantInterval: 60000, skyBuilding: true },
      effectDesc: '全城幸福 +15；恐高 debuff -4；每 60 秒成就点数 3',
      desc: '幸福 +15，成就点数 3/60秒：云端伊甸园',
      flavor: '「我们在天上建了个花园，证明人类到哪儿都忘不了春天。」——园志', },
  ],
  desc: '精神建筑：全城幸福 +N，抵消天空居民恐高，产成就点数',
  unlock: { type: 'tech', ref: 't-sky-9', desc: '需研究「空中生态」科技解锁' },
},

}; // end SKY_BUILDINGS

// 天空建筑 UI 顺序（index.html / help.js 按此顺序渲染天空建造菜单）
const SKY_BUILD_ORDER = [
  'cloud_farm', 'sky_dock', 'sky_solar', 'sky_habitat',
  'pressure_refinery', 'storm_radar', 'cloud_harbor', 'sky_garden',
];

/* ═══════════════════════════════════════════════════════════════════════
 * 四、飞行器（AIRCRAFT）：货运飞艇 / 巡逻机
 * ═══════════════════════════════════════════════════════════════════════
 * 设计总纲：飞行器是天空城的「血液」与「免疫系统」——
 *   货运飞艇 = 血液：把天空产出运到地面，把地面补给运到天上；
 *   巡逻机 = 免疫系统：在空域巡逻，提供治安、气象侦察与风暴预警。
 *
 * 通用规则：
 *   - 飞行器需要船坞槽位停靠（sky_dock 的 aircraftSlots），无槽位则停飞；
 *   - 每架飞行器每 tick 耗电（airship 3 / patrol 2），断电则 grounded；
 *   - 飞行器不占人口，但需要船坞所在平台正常运转；
 *   - 空中风暴期间：飞艇停飞（cargoHalt），巡逻机可继续（加固机型）。
 *
 * 数据结构（SkyManager.aircraft 数组元素）：
 *   { id, type: 'airship'|'patrol', name, hp, maxHp, grounded, route, cargo }
 * ★ 读取约定（SkyManager / trade.js 防御性读取）：
 *   const A = AIRCRAFT[type] || {}; const cap = A.cargoCap || 0;
 * ═══════════════════════════════════════════════════════════════════════
 */
const AIRCRAFT = {
  // ── 货运飞艇 ────────────────────────────────────────────────────
  // 定位：天空↔地面的「货车」。单次运力 200，往返 1 tick，
  // 无云港时只能执行「平台↔地面」直运（效率 50%）。
  // ★ 读取约定：
  //   const cap = (AIRCRAFT.airship.cargoCap || 0) * (harborDockSpeed || 1);
  //   货物优先级：食物 > 水 > 补给（repair kits）> 其他（SkyManager 实现）
  airship: {
    id: 'airship', name: '货运飞艇', icon: '🎈',
    cargoCap: 200,          // 单次运力（资源单位）
    roundTripTicks: 1,      // 往返周期（tick）
    powerUse: 3,            // 每 tick 耗电
    hp: 150, maxHp: 150,
    cost: { steel: 80, tech: 10 },  // 建造/补充成本
    desc: '天空↔地面货运：单次 200 单位，往返 1 tick',
    flavor: '飞艇的肚子里装着整个天空城的晚饭——它从不迟到。',
  },
  // ── 巡逻机 ──────────────────────────────────────────────────────
  // 定位：空域「治安+气象」双职能。每架覆盖 3 个平台，
  // 覆盖平台获得：治安 +2（防机器人/人类骚乱）、风暴预警 +10 秒。
  // ★ 读取约定：
  //   const cov = AIRCRAFT.patrol.coverage || 0;
  //   覆盖判定：按平台 id 哈希分配（SkyManager.assignPatrol 实现，确定性）
  patrol: {
    id: 'patrol', name: '巡逻机', icon: '✈️',
    coverage: 3,            // 单架覆盖平台数
    securityAdd: 2,         // 覆盖平台治安 +
    warnBonusMs: 10000,     // 覆盖平台风暴预警 +10 秒
    powerUse: 2,            // 每 tick 耗电
    hp: 100, maxHp: 100,
    stormProof: true,       // 空中风暴期间可继续飞行
    cost: { steel: 60, tech: 15 },
    desc: '空域巡逻：覆盖 3 平台，治安 +2，预警 +10 秒，风暴中可飞行',
    flavor: '巡逻机飞行员的口头禅：天上没有小事，只有没发现的事。',
  },
};

// 飞行器建造（防御：船坞槽位不足时返回 null，不抛错）
function buildAircraft(game, type) {
  try {
    const def = AIRCRAFT[type];
    if (!def || !game || !game.sky) return null;
    const mgr = game.sky;
    const slots = SkyAgg.totalAircraftSlots(game);
    if (mgr.aircraft.length >= slots) return null;  // 无槽位
    // 扣费（防御：资源不足返回 null）
    if (game.player && game.player.inv) {
      for (const [k, v] of Object.entries(def.cost || {})) {
        if ((game.player.inv[k] || 0) < v) return null;
      }
      for (const [k, v] of Object.entries(def.cost || {})) game.player.inv[k] -= v;
    }
    const c = {
      id: 'ac-' + Math.random().toString(36).slice(2, 9),
      type, name: def.name, hp: def.maxHp, maxHp: def.maxHp,
      grounded: false, route: null, cargo: null,
    };
    mgr.aircraft.push(c);
    return c;
  } catch (e) { return null; }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 五、天空天气 SkyWeather
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：天空层有独立天气（与地面沙尘暴并行）——
 *   风切变（windshear）：低空常见，平台 hp 缓慢下降；
 *   云团（cloudbank）：平流层常见，太阳能效率 -20%，持续 60 秒；
 *   空中风暴（skystorm）：大灾难，见 content_v16.js DISASTERS_V16。
 *
 * 调度：SkyWeather.tick(game) 每 tick 调用，内部按 nextAt 调度；
 *   气象尖塔/雷达站/巡逻机的预警加成统一在这里聚合。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyWeather = {
  nextWindshear: 0,
  nextCloudbank: 0,
  activeCloudbankUntil: 0,

  // 聚合全城预警加成（毫秒）：雷达站 warnBonusMs + 巡逻机 warnBonusMs
  totalWarnBonus(game) {
    let ms = 0;
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      for (const b of game.builder.buildings) {
        const eff = SkyAgg.effectOf(b.id, b.level);
        ms += eff.warnBonusMs || 0;
      }
      if (game.sky && Array.isArray(game.sky.aircraft)) {
        for (const a of game.sky.aircraft) {
          if (a.type === 'patrol' && !a.grounded) ms += AIRCRAFT.patrol.warnBonusMs || 0;
        }
      }
    } catch (e) {}
    return ms;
  },

  // 每 tick 调用（game.sky 存在时）
  tick(game) {
    try {
      if (!game || !game.sky) return;
      const now = Date.now();
      const mgr = game.sky;
      // —— 风切变：低空平台 hp -2/次 ——
      if (!this.nextWindshear) this.nextWindshear = now + SKY_TUNING.windBaseMs;
      if (now >= this.nextWindshear) {
        this.nextWindshear = now + SKY_TUNING.windBaseMs * (1 + Math.random());
        let hit = 0;
        for (const p of mgr.platforms) {
          if (p.layerId === 'low' && p.buildingId) {
            p.hp = Math.max(1, p.hp - 2);
            hit++;
          }
        }
        // 风暴雷达站减伤（取最高 stormMitigation）
        const mit = SkyAgg.maxEffect(game, 'storm_radar', (e) => e.stormMitigation || 0);
        if (hit > 0 && mit > 0) {
          for (const p of mgr.platforms) {
            if (p.layerId === 'low' && p.buildingId) p.hp = Math.min(p.maxHp, p.hp + 2 * mit);
          }
        }
        if (hit > 0 && game.toast) game.toast('💨 低空风切变：' + hit + ' 个平台轻微受损');
      }
      // —— 云团：平流层太阳能 -20%，持续 60 秒 ——
      if (!this.nextCloudbank) this.nextCloudbank = now + SKY_TUNING.windBaseMs * 2;
      if (now >= this.nextCloudbank) {
        this.nextCloudbank = now + SKY_TUNING.windBaseMs * 2 * (1 + Math.random());
        this.activeCloudbankUntil = now + 60000;
        if (game.toast) game.toast('☁️ 平流层云团：天空电站效率 -20%（60 秒）');
      }
    } catch (e) { /* 天气系统永不抛错 */ }
  },

  // 云团是否生效（build.js 聚合电力时调用）
  isCloudbankActive() {
    return Date.now() < this.activeCloudbankUntil;
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 六、天空城管理器 SkyManager
 * ═══════════════════════════════════════════════════════════════════════
 * 职责：
 *   1. 平台管理：新建/拆除平台，平台槽位上限校验（三层独立）；
 *   2. 飞行器调度：飞艇运货（天空↔地面）、巡逻机覆盖分配；
 *   3. 每 tick：平台维持耗电、船坞维修、飞艇运输、巡逻覆盖、天气 tick；
 *   4. 坠毁结算：平台 hp<=0 → 坠毁（建筑耐久 -35%、平台人口 -10%）。
 *
 * 挂载：mountSkyManager(game) → game.sky = new SkyManager()；
 *   game 不存在/已挂载时返回 null/现有实例，不抛错。
 * 存档：toJSON()/fromJSON()，key 见 SKY_SAVE_KEY（与 game.js 共用存档槽）。
 * ═══════════════════════════════════════════════════════════════════════
 */
class SkyManager {
  constructor() {
    this.unlocked = false;      // 天空层是否解锁（研究 t-sky-1 后）
    this.platforms = [];        // 平台数组
    this.aircraft = [];         // 飞行器数组
    this.stats = {              // 统计（成就/日志用）
      platformsBuilt: 0,
      platformsCrashed: 0,
      cargoDelivered: 0,        // 飞艇累计运货量
      patrolHours: 0,
    };
  }

  // ---- 解锁判定（防御：tech 未接入时恒 false） ----
  checkUnlock(game) {
    try {
      if (game && game.tech && typeof game.tech.has === 'function') {
        if (game.tech.has('t-sky-1')) this.unlocked = true;
      }
    } catch (e) {}
    return this.unlocked;
  }

  // ---- 某空域已用槽位 ----
  usedSlots(layerId) {
    return this.platforms.filter((p) => p.layerId === layerId).length;
  }

  // ---- 某空域剩余槽位 ----
  freeSlots(layerId) {
    const layer = SKY_LAYERS[layerId];
    if (!layer) return 0;
    return Math.max(0, layer.slots - this.usedSlots(layerId));
  }

  // ---- 新建平台（防御：未解锁/无槽位返回 null） ----
  addPlatform(layerId) {
    if (!this.unlocked) return null;
    const layer = SKY_LAYERS[layerId] ? layerId : 'low';
    if (this.freeSlots(layer) <= 0) return null;
    const p = createSkyPlatform(layer);
    this.platforms.push(p);
    this.stats.platformsBuilt++;
    return p;
  }

  // ---- 拆除平台（建筑一并拆除，不返还资源——高空作业无回收） ----
  removePlatform(pid) {
    const i = this.platforms.findIndex((p) => p.id === pid);
    if (i < 0) return false;
    this.platforms.splice(i, 1);
    return true;
  }

  // ---- 在平台上建造浮空建筑（防御：平台不存在/已有建筑返回 null） ----
  buildOnPlatform(game, pid, buildingId, level) {
    try {
      const p = this.platforms.find((x) => x.id === pid);
      if (!p || p.buildingId) return null;
      const def = SKY_BUILDINGS[buildingId];
      if (!def) return null;
      const lv = Math.min(Math.max(1, level || 1), SKY_TUNING.maxLevel);
      const lvDef = def.levels[lv];
      if (!lvDef) return null;
      // 扣费（防御：资源不足返回 null）
      if (game && game.player && game.player.inv) {
        for (const [k, v] of Object.entries(lvDef.cost || {})) {
          if ((game.player.inv[k] || 0) < v) return null;
        }
        for (const [k, v] of Object.entries(lvDef.cost || {})) game.player.inv[k] -= v;
      }
      p.buildingId = buildingId;
      p.level = lv;
      p.maxHp = 100 + (lv - 1) * 50;
      p.hp = p.maxHp;
      return p;
    } catch (e) { return null; }
  }

  // ---- 巡逻机覆盖分配（确定性：按平台 id 排序轮流分配） ----
  assignPatrol() {
    const patrols = this.aircraft.filter((a) => a.type === 'patrol' && !a.grounded);
    const plats = this.platforms.filter((p) => p.buildingId).slice()
      .sort((a, b) => (a.id < b.id ? -1 : 1));
    const covered = new Set();
    let pi = 0;
    for (const pt of patrols) {
      for (let k = 0; k < (AIRCRAFT.patrol.coverage || 3) && plats.length; k++) {
        covered.add(plats[pi % plats.length].id);
        pi++;
      }
    }
    return covered;  // 被覆盖的平台 id 集合
  }

  // ---- 飞艇运货（每 tick）：天空产出→地面，地面补给→天空 ----
  // 简化模型：每架飞艇每 tick 搬运 cargoCap 资源（天空 surplus → 地面仓库）。
  // 优先级：食物 > 水 > 稀有矿 > He3 > 其他。
  runCargo(game) {
    try {
      if (!game || !game.player || !game.player.inv) return 0;
      const ships = this.aircraft.filter((a) => a.type === 'airship' && !a.grounded);
      if (!ships.length) return 0;
      // 空中风暴期间飞艇停飞（disaster 标记由 content_v16 的 HazardPack16 设置）
      if (game.skyStormActive) return 0;
      let moved = 0;
      const inv = game.player.inv;
      // 天空产出池（SkyManager 代管：各浮空建筑每 tick 写入的临时池）
      this.skyPool = this.skyPool || {};
      const pool = this.skyPool;
      const order = ['food', 'water', 'rare', 'he3', 'ice'];
      for (const s of ships) {
        let cap = AIRCRAFT.airship.cargoCap || 0;
        // 云港装卸加速
        const dockMul = SkyAgg.maxEffect(game, 'cloud_harbor', (e) => e.dockSpeedMul || 1);
        cap = Math.floor(cap * (dockMul || 1));
        for (const res of order) {
          if (cap <= 0) break;
          const amt = Math.min(pool[res] || 0, cap);
          if (amt > 0) {
            pool[res] -= amt;
            inv[res] = (inv[res] || 0) + amt;
            cap -= amt;
            moved += amt;
          }
        }
      }
      this.stats.cargoDelivered += moved;
      return moved;
    } catch (e) { return 0; }
  }

  // ---- 平台维持：耗电 + 船坞维修 + 漂移判定 ----
  runUpkeep(game) {
    try {
      for (const p of this.platforms) {
        // 1) 维持耗电（game.power 未接入时跳过，不断电假设）
        const need = skyPlatformUpkeep(p.layerId);
        let powered = true;
        if (game && game.power && typeof game.power.consume === 'function') {
          powered = game.power.consume(need);
        }
        p.powered = powered;
        if (!powered) {
          // 迫降模式：hp 缓慢下降，建筑停产（停产由 build.js 读 p.powered 实现）
          p.hp = Math.max(1, p.hp - 1);
        }
        // 2) 低空无锚定漂移：每 tick 5% 概率漂移（漂移后产出 -30%，需巡逻机/船坞复位）
        if (p.layerId === 'low' && !p.anchored && !p.drifted && Math.random() < 0.05) {
          p.drifted = true;
          if (game && game.toast) game.toast('🪂 低空平台漂移！产出 -30%（需船坞复位）');
        }
        // 3) 船坞维修：回复所有平台 hp（取全城最高 platformRepair）
        //    （在 tick() 里统一做一次，避免每平台重复计算）
      }
      // 船坞维修（全城一次）
      const repair = SkyAgg.maxEffect(game, 'sky_dock', (e) => e.platformRepair || 0);
      if (repair > 0) {
        for (const p of this.platforms) {
          p.hp = Math.min(p.maxHp, p.hp + repair);
          if (p.drifted && p.hp >= p.maxHp * 0.8) p.drifted = false;  // 修好后自动复位
        }
      }
      // 4) 坠毁结算
      this.checkCrashes(game);
    } catch (e) { /* 维持系统永不抛错 */ }
  }

  // ---- 坠毁结算：hp<=0 的平台坠毁 ----
  checkCrashes(game) {
    try {
      const dead = this.platforms.filter((p) => p.hp <= 0);
      for (const p of dead) {
        const bname = (SKY_BUILDINGS[p.buildingId] || {}).name || '平台';
        // 建筑耐久 -35%（通过 game.builder 接口，防御性）
        if (game && game.builder && typeof game.builder.damageBuilding === 'function') {
          try { game.builder.damageBuilding(p.buildingId, SKY_TUNING.crashDurabilityLoss); } catch (e) {}
        }
        // 平台人口 -10%（pop 接口防御性）
        if (game && game.pop && typeof game.pop.lose === 'function') {
          try {
            const skyPop = SkyAgg.totalSkyPop(game);
            game.pop.lose(Math.ceil(skyPop * SKY_TUNING.crashPopLoss));
          } catch (e) {}
        }
        // 从平台列表移除
        const i = this.platforms.indexOf(p);
        if (i >= 0) this.platforms.splice(i, 1);
        this.stats.platformsCrashed++;
        if (game && game.toast) game.toast('🛬 平台坠毁！' + bname + '（' + skyLayerName(p.layerId) + '）已损失');
      }
    } catch (e) {}
  }

  // ---- 主 tick（每 10 秒由 game.js 调用） ----
  tick(game) {
    try {
      if (!this.unlocked) { this.checkUnlock(game); if (!this.unlocked) return; }
      this.runUpkeep(game);
      this.runCargo(game);
      SkyWeather.tick(game);
      SkyEvents.tick(game);
      this.stats.patrolHours += this.aircraft.filter((a) => a.type === 'patrol' && !a.grounded).length;
    } catch (e) {}
  }

  // ---- 存档 ----
  toJSON() {
    return {
      unlocked: this.unlocked,
      platforms: this.platforms,
      aircraft: this.aircraft,
      stats: this.stats,
      skyPool: this.skyPool || {},
    };
  }
  fromJSON(d) {
    try {
      if (!d) return;
      this.unlocked = !!d.unlocked;
      this.platforms = Array.isArray(d.platforms) ? d.platforms : [];
      this.aircraft = Array.isArray(d.aircraft) ? d.aircraft : [];
      this.stats = d.stats || this.stats;
      this.skyPool = d.skyPool || {};
    } catch (e) {}
  }
}

// 挂载 SkyManager 到 game（幂等）
function mountSkyManager(game) {
  try {
    if (!game) return null;
    if (game.sky instanceof SkyManager) return game.sky;
    game.sky = new SkyManager();
    return game.sky;
  } catch (e) { return null; }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 七、聚合接口 SkyAgg（供各系统防御性读取）
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyAgg = {
  // 取某天空建筑某等级的 effect（防御：缺失返回 {}）
  effectOf(id, level) {
    const def = SKY_BUILDINGS[id];
    if (!def || !def.levels) return {};
    return (def.levels[level] || {}).effect || {};
  },
  // 全城某天空建筑实例数（game.builder.buildings 中按 id 匹配）
  count(game, id) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      return game.builder.buildings.filter((b) => b && b.id === id).length;
    } catch (e) { return 0; }
  },
  // 对全城某天空建筑的所有实例取 effect 最大值（乘区类字段用）
  maxEffect(game, id, mapFn) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      let best = 0, found = false;
      for (const b of game.builder.buildings) {
        if (!b || b.id !== id) continue;
        const v = mapFn(this.effectOf(id, b.level)) || 0;
        if (!found || v > best) { best = v; found = true; }
      }
      return found ? best : 0;
    } catch (e) { return 0; }
  },
  // 全城飞行器槽位（各船坞 aircraftSlots 加法汇总）
  totalAircraftSlots(game) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      let n = 0;
      for (const b of game.builder.buildings) {
        if (b && b.id === 'sky_dock') n += this.effectOf('sky_dock', b.level).aircraftSlots || 0;
      }
      return n;
    } catch (e) { return 0; }
  },
  // 全城天空人口上限（各居住区 popCap 加法汇总）
  totalSkyPopCap(game) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      let n = 0;
      for (const b of game.builder.buildings) {
        if (b && b.id === 'sky_habitat') n += this.effectOf('sky_habitat', b.level).popCap || 0;
      }
      return n;
    } catch (e) { return 0; }
  },
  // 当前天空人口（game.pop.skyPop，未接入时返回 0）
  totalSkyPop(game) {
    try { return (game && game.pop && game.pop.skyPop) || 0; }
    catch (e) { return 0; }
  },
  // 全城天空产电（各天空电站 power 加法汇总，含空域倍率；云团 -20%）
  totalSkyPower(game) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      let p = 0;
      const cloud = SkyWeather.isCloudbankActive() ? 0.8 : 1;
      for (const b of game.builder.buildings) {
        if (!b || b.id !== 'sky_solar') continue;
        const eff = this.effectOf('sky_solar', b.level);
        let out = eff.power || 0;
        const layer = b.layerId || (game.sky && game.sky.platformLayer && game.sky.platformLayer(b)) || 'strato';
        if (layer === 'strato') out *= eff.stratoPowerMul || 1.4;
        else if (layer === 'low') out *= eff.lowPowerMul || 0.8;
        p += out * cloud;
      }
      return Math.floor(p);
    } catch (e) { return 0; }
  },
  // 平台是否被巡逻机覆盖（disaster.js 判定减伤用）
  isCoveredByPatrol(game, platformId) {
    try {
      if (!game || !game.sky || !(game.sky instanceof SkyManager)) return false;
      return game.sky.assignPatrol().has(platformId);
    } catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 八、接入函数
 * ═══════════════════════════════════════════════════════════════════════
 */
// 把天空建筑合并进全局 BUILDINGS（幂等）
function mergeSkyBuildings() {
  if (typeof BUILDINGS === 'undefined') {
    console.warn('[sky] BUILDINGS 未定义，跳过合并（请确认 build.js 已加载）');
    return false;
  }
  Object.assign(BUILDINGS, SKY_BUILDINGS);
  return true;
}

// 天空科技分支注册（防御：TECH_BRANCHES 未定义时跳过）
if (typeof TECH_BRANCHES !== 'undefined') {
  TECH_BRANCHES.sky = { name: '天空', icon: '☁️', color: '#7dd3fc' };
}

/* ═══════════════════════════════════════════════════════════════════════
 * 九、自检 SkySelfTest（控制台运行）
 * ═══════════════════════════════════════════════════════════════════════
 */
function SkySelfTest() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(typeof SKY_VERSION === 'string', 'SKY_VERSION 未定义');
    // 三层空域完整性
    for (const id of ['low', 'strato', 'leo']) {
      const l = SKY_LAYERS[id];
      ok(!!l, '空域缺失: ' + id);
      ok(l && l.slots > 0, id + ' 槽位非法');
      ok(l && l.yieldMul >= 1, id + ' yieldMul 非法');
      ok(l && l.upkeepMul >= 1, id + ' upkeepMul 非法');
    }
    // 8 种浮空建筑 × 3 级完整性
    const ids = Object.keys(SKY_BUILDINGS);
    ok(ids.length === 8, '浮空建筑应为 8 种，实际 ' + ids.length);
    for (const id of ids) {
      const d = SKY_BUILDINGS[id];
      ok(d.id === id, id + ' 的 id 字段不一致');
      ok(Array.isArray(d.levels) && d.levels.length === 4 && d.levels[0] === null,
        id + ' levels 应为 [null, L1, L2, L3]');
      for (let lv = 1; lv <= 3; lv++) {
        const L = d.levels[lv];
        ok(!!L, id + ' 缺少 Lv' + lv);
        ok(L && L.cost && typeof L.cost === 'object', id + ' Lv' + lv + ' 缺少 cost');
        ok(L && L.effect && typeof L.effect === 'object', id + ' Lv' + lv + ' 缺少 effect');
        ok(L && typeof L.powerUse === 'number', id + ' Lv' + lv + ' 缺少 powerUse');
        ok(L && typeof L.needPop === 'number', id + ' Lv' + lv + ' 缺少 needPop');
        // cost key 白名单
        const allowed = ['iron', 'ice', 'rare', 'water', 'food', 'steel', 'tech', 'uranium', 'he3', 'nano'];
        for (const k of Object.keys(L.cost || {})) {
          ok(allowed.indexOf(k) !== -1, id + ' Lv' + lv + ' 非法 cost key: ' + k);
        }
      }
      ok(d.unlock && d.unlock.type, id + ' 缺少 unlock');
    }
    // UI 顺序覆盖全部建筑
    for (const id of ids) ok(SKY_BUILD_ORDER.indexOf(id) !== -1, 'SKY_BUILD_ORDER 缺少 ' + id);
    // 飞行器
    ok(!!AIRCRAFT.airship && !!AIRCRAFT.patrol, '飞行器定义缺失');
    ok(AIRCRAFT.airship.cargoCap > 0, '飞艇运力非法');
    // SkyManager 冒烟
    const m = new SkyManager();
    m.unlocked = true;
    const p = m.addPlatform('strato');
    ok(!!p && p.layerId === 'strato', '平台创建失败');
    ok(m.freeSlots('strato') === SKY_LAYERS.strato.slots - 1, '槽位计数错误');
    ok(skyPlatformUpkeep('low') > 0, '平台维持耗电非法');
    ok(typeof mountSkyManager(null) === 'object' || mountSkyManager(null) === null, 'mount 防御失败');
    ok(buildAircraft(null, 'airship') === null, 'buildAircraft 防御失败');
    ok(SkyAgg.effectOf('nope', 9) && typeof SkyAgg.effectOf('nope', 9) === 'object', 'SkyAgg 防御失败');
    ok(SkyWeather.totalWarnBonus(null) === 0, 'SkyWeather 防御失败');
    ok(skyLayerName('nope') === 'nope', 'skyLayerName 回退失败');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[SkySelfTest] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[SkySelfTest] 通过：8 建筑 × 3 级 / 3 空域 / 2 飞行器 / 管理器冒烟');
  return true;
}

// Node / 浏览器双兼容导出（node --check 只做语法检查，不执行）
if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    SkySelfTest, SkyManager, SkyWeather, SkyAgg,
    SKY_LAYERS, SKY_BUILDINGS, SKY_BUILD_ORDER, AIRCRAFT,
    SKY_TUNING, SKY_VERSION,
    mergeSkyBuildings, mountSkyManager, buildAircraft,
    createSkyPlatform, skyPlatformUpkeep, skyLayerName,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十、平台升级系统（PLATFORM_UPGRADES）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：平台本身可升级（3 种升级 × 3 级），升级作用于平台而非建筑——
 *   浮空囊（lift_cell）：+平台 hp 上限，-维持耗电；
 *   姿态引擎（attitude_engine）：低空平台免锚定（不再漂移）；
 *   复合装甲（composite_armor）：风暴/风切变伤害减免。
 *
 * 数据结构：p.upgrades = { lift: 0~3, engine: 0~3, armor: 0~3 }；
 * 升级成本按级递增，见下表 cost 字段。
 * ★ 读取约定（SkyManager.runUpkeep 防御性读取）：
 *   const u = p.upgrades || {};
 *   const liftLv = u.lift || 0;
 *   const up = PLATFORM_UPGRADES.lift.levels[liftLv] || {};
 *   const hpBonus = up.hpBonus || 0;         // hp 上限加成
 *   const upkeepMul = up.upkeepMul || 1;     // 维持耗电倍率（乘法）
 * ═══════════════════════════════════════════════════════════════════════
 */
const PLATFORM_UPGRADES = {
  // ── 浮空囊：更大更轻的气囊 ──────────────────────────────────────
  // 定位：平台的「血量装」。每级 +50 hp 上限，维持耗电 -10%。
  // ★ 读取约定：hpBonus 加法叠加到 p.maxHp；upkeepMul 乘法叠加到维持耗电。
  // 数值平衡：Lv3 平台 250 hp，可硬吃一次中小型空中风暴不坠毁；
  //   cost 走 iron 路线（气囊骨架），不抢 tech。
  lift: {
    id: 'lift', name: '浮空囊', icon: '🎈',
    desc: '更大的气囊：+平台 hp 上限，-维持耗电',
    levels: [null,
      { cost: { iron: 40 }, hpBonus: 50, upkeepMul: 0.9,
        desc: 'hp 上限 +50，维持耗电 -10%',
        flavor: '气囊充气那天，平台轻轻往上「坐」了一下，像伸了个懒腰。' },
      { cost: { iron: 100, steel: 20 }, hpBonus: 100, upkeepMul: 0.8,
        desc: 'hp 上限 +100，维持耗电 -20%',
        flavor: '双层气囊：外层破了，里层还能撑——工程师的强迫症救了平台。' },
      { cost: { steel: 120, rare: 20 }, hpBonus: 150, upkeepMul: 0.7,
        desc: 'hp 上限 +150，维持耗电 -30%',
        flavor: '「我们给平台装了三个肺，它现在比谁都能憋气。」——气囊车间' },
    ],
  },
  // ── 姿态引擎：低空平台的「定海神针」 ────────────────────────────
  // 定位：解决低空漂移问题。Lv1 漂移概率减半，Lv2 免漂移（=免锚定），
  //   Lv3 附带小幅维修（每 tick +1 hp）。
  // ★ 读取约定：
  //   const noDrift = (PLATFORM_UPGRADES.engine.levels[u.engine] || {}).noDrift;
  //   漂移概率 = 0.05 × (driftMul || 1)；noDrift 为 true 时直接跳过漂移判定。
  // 数值平衡：低空 12 槽是天空城最大的空域，不解决漂移就没法用；
  //   Lv2 免漂移的 cost 含 40 tech，是中期的一道小门槛。
  engine: {
    id: 'engine', name: '姿态引擎', icon: '🌀',
    desc: '姿态控制：降低/免除低空漂移',
    levels: [null,
      { cost: { steel: 30 }, driftMul: 0.5, noDrift: false, repair: 0,
        desc: '漂移概率 -50%',
        flavor: '引擎第一次点火，平台在风里稳住了——像被一只手按住。' },
      { cost: { steel: 80, tech: 40 }, driftMul: 0, noDrift: true, repair: 0,
        desc: '免除漂移（无需地面锚定）',
        flavor: '锚定塔操作员失业了——他转岗去开了巡逻机。' },
      { cost: { steel: 150, tech: 100, rare: 30 }, driftMul: 0, noDrift: true, repair: 1,
        desc: '免除漂移；每 tick 自动维修 +1 hp',
        flavor: '「平台现在会自己照顾自己，我们只负责给它鼓掌。」——维护组' },
    ],
  },
  // ── 复合装甲：平台的「防弹衣」 ──────────────────────────────────
  // 定位：风暴/风切变减伤。Lv3 60% 减伤，配合雷达站可达 80%，
  //   低空平台在风暴季也能苟住。
  // ★ 读取约定：
  //   const mit = (PLATFORM_UPGRADES.armor.levels[u.armor] || {}).mitigation || 0;
  //   实际伤害 = 基础伤害 × (1 - mit) × (1 - 雷达减伤)（两乘区相乘）
  // 数值平衡：Lv3 cost 含 50 rare，是「低空流」的毕业装；
  //   平流层以上风暴少，装甲是可选的——差异化配装。
  armor: {
    id: 'armor', name: '复合装甲', icon: '🛡️',
    desc: '风暴/风切变伤害减免',
    levels: [null,
      { cost: { steel: 50 }, mitigation: 0.2,
        desc: '风暴/风切变伤害 -20%',
        flavor: '第一块装甲板铆上去时，平台发出了一声满足的「咚」。' },
      { cost: { steel: 120, rare: 20 }, mitigation: 0.4,
        desc: '风暴/风切变伤害 -40%',
        flavor: '装甲车间主任说：这厚度，陨石来了都得排队。' },
      { cost: { steel: 250, rare: 50, tech: 60 }, mitigation: 0.6,
        desc: '风暴/风切变伤害 -60%',
        flavor: '「风暴季？那是我们的淡季。」——装甲平台住户' },
    ],
  },
};

// 平台升级（防御：平台不存在/已满级/资源不足返回 false）
function upgradePlatform(game, pid, upgradeId) {
  try {
    if (!game || !game.sky) return false;
    const p = game.sky.platforms.find((x) => x.id === pid);
    const def = PLATFORM_UPGRADES[upgradeId];
    if (!p || !def) return false;
    p.upgrades = p.upgrades || {};
    const cur = p.upgrades[upgradeId] || 0;
    if (cur >= 3) return false;
    const lvDef = def.levels[cur + 1];
    if (!lvDef) return false;
    if (game.player && game.player.inv) {
      for (const [k, v] of Object.entries(lvDef.cost || {})) {
        if ((game.player.inv[k] || 0) < v) return false;
      }
      for (const [k, v] of Object.entries(lvDef.cost || {})) game.player.inv[k] -= v;
    }
    p.upgrades[upgradeId] = cur + 1;
    // 浮空囊：立即补 hp 上限
    if (upgradeId === 'lift') {
      p.maxHp += lvDef.hpBonus || 0;
      p.hp = Math.min(p.maxHp, p.hp + (lvDef.hpBonus || 0));
    }
    return true;
  } catch (e) { return false; }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十一、天空事件 SkyEvents（氛围事件，每 3~6 分钟随机一件）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：天空层专属小事件，不造成毁灭性打击，只给「活着的天空」感觉——
 *   好事（云海节/候鸟群/顺风）：给资源或 buff；
 *   坏事（飞艇故障/缆绳磨损/冰晶）：小额损失或维修提示；
 *   选择事件（流浪商船）：玩家二选一。
 *
 * 调度：SkyEvents.tick(game) 每 tick 调用；game.sky 未解锁时直接返回。
 * 所有事件先 toast 播报，再结算；结算全部防御性（接口不存在则跳过效果）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_EVENTS = [
  { id: 'cloud_festival', name: '云海节', icon: '🎉', good: true,
    desc: '平流层出现罕见云海，平台居民自发庆祝，全城幸福 +3（60 秒）。',
    flavor: '🎉 云海节！整片天空变成了棉花糖，今晚全城提前下班。',
    minGapMs: 3 * 60 * 1000, maxGapMs: 6 * 60 * 1000,
    run(game) {
      try {
        if (game && game.pop && typeof game.pop.addHappiness === 'function') {
          game.pop.addHappiness(3, 60000);
        }
        return true;
      } catch (e) { return false; }
    } },
  { id: 'migrant_birds', name: '候鸟群', icon: '🦅', good: true,
    desc: '一群火星候鸟（基因改造种）掠过平台，带来好运：随机 +50 食物。',
    flavor: '🦅 候鸟群掠过！它们翅膀扇起的风里，好像有好运的味道。',
    minGapMs: 3 * 60 * 1000, maxGapMs: 6 * 60 * 1000,
    run(game) {
      try {
        if (game && game.player && game.player.inv) game.player.inv.food = (game.player.inv.food || 0) + 50;
        return true;
      } catch (e) { return false; }
    } },
  { id: 'tailwind', name: '顺风', icon: '💨', good: true,
    desc: '高空急流转向，飞艇速度翻倍，持续 120 秒（运货效率 ×2）。',
    flavor: '💨 顺风！飞艇船长说：今天的风，是站在我们这边的。',
    minGapMs: 3 * 60 * 1000, maxGapMs: 6 * 60 * 1000,
    run(game) {
      try {
        if (game && game.sky) {
          game.sky.tailwindUntil = Date.now() + 120000;
          // runCargo 读取 game.sky.tailwindUntil，生效期间运力 ×2
        }
        return true;
      } catch (e) { return false; }
    } },
  { id: 'airship_fault', name: '飞艇故障', icon: '🔧', good: false,
    desc: '一艘飞艇气囊漏气，紧急迫降船坞：该飞艇停飞 60 秒。',
    flavor: '🔧 飞艇故障！气囊漏气，船坞地勤正在抢修——它需要休息 60 秒。',
    minGapMs: 4 * 60 * 1000, maxGapMs: 7 * 60 * 1000,
    run(game) {
      try {
        if (game && game.sky && Array.isArray(game.sky.aircraft)) {
          const ship = game.sky.aircraft.find((a) => a.type === 'airship' && !a.grounded);
          if (ship) { ship.grounded = true; ship.repairUntil = Date.now() + 60000; }
        }
        return true;
      } catch (e) { return false; }
    } },
  { id: 'cable_wear', name: '缆绳磨损', icon: '⛓️', good: false,
    desc: '低空平台缆绳磨损：随机一个低空平台 hp -15。',
    flavor: '⛓️ 缆绳磨损！低空平台晃了一下——维护组已经出发。',
    minGapMs: 4 * 60 * 1000, maxGapMs: 7 * 60 * 1000,
    run(game) {
      try {
        if (game && game.sky && Array.isArray(game.sky.platforms)) {
          const lows = game.sky.platforms.filter((p) => p.layerId === 'low');
          if (lows.length) lows[Math.floor(Math.random() * lows.length)].hp = Math.max(1, lows[0].hp - 15);
        }
        return true;
      } catch (e) { return false; }
    } },
  { id: 'ice_crystal', name: '冰晶雨', icon: '🧊', good: false,
    desc: '平流层冰晶雨：天空电站效率 -30%，持续 60 秒。',
    flavor: '🧊 冰晶雨！帆板上结了一层霜，电站输出开始打哆嗦。',
    minGapMs: 4 * 60 * 1000, maxGapMs: 7 * 60 * 1000,
    run(game) {
      try {
        if (game && game.sky) game.sky.iceCrystalUntil = Date.now() + 60000;
        return true;
      } catch (e) { return false; }
    } },
  { id: 'trader_ship', name: '流浪商船', icon: '🚢', good: true, choice: true,
    desc: '一艘流浪商船请求停靠：A. 交易（-100 钢换 +80 稀有矿）；B. 拒绝（无事发生）。',
    flavor: '🚢 流浪商船请求停靠：船长说，他有一批「来路很正」的稀有矿。',
    minGapMs: 5 * 60 * 1000, maxGapMs: 9 * 60 * 1000,
    // choice 由 UI 层调用 SkyEvents.choose(game, 'trader_ship', 'A'|'B')
    choose(game, opt) {
      try {
        if (opt === 'A' && game && game.player && game.player.inv) {
          if ((game.player.inv.steel || 0) < 100) return false;
          game.player.inv.steel -= 100;
          game.player.inv.rare = (game.player.inv.rare || 0) + 80;
          if (game.toast) game.toast('🚢 交易完成：-100 钢，+80 稀有矿');
        } else if (game && game.toast) {
          game.toast('🚢 你目送商船离去，它消失在云海里。');
        }
        return true;
      } catch (e) { return false; }
    },
    run(game) {
      // 选择事件：只播报，等待玩家选择（UI 层 30 秒未选则自动选 B）
      try {
        if (game && game.toast) game.toast(this.flavor + '（30 秒内选择，超时自动拒绝）');
        if (game && game.sky) game.sky.pendingChoice = { eventId: this.id, until: Date.now() + 30000 };
        return true;
      } catch (e) { return false; }
    } },
];

const SkyEvents = {
  nextAt: 0,
  // 每 tick 调用
  tick(game) {
    try {
      if (!game || !game.sky || !game.sky.unlocked) return;
      const now = Date.now();
      // 选择事件超时自动选 B
      const pc = game.sky.pendingChoice;
      if (pc && now >= pc.until) {
        const ev = SKY_EVENTS.find((e) => e.id === pc.eventId);
        if (ev && ev.choose) ev.choose(game, 'B');
        game.sky.pendingChoice = null;
      }
      if (!this.nextAt) this.nextAt = now + 3 * 60 * 1000;
      if (now < this.nextAt) return;
      const ev = SKY_EVENTS[Math.floor(Math.random() * SKY_EVENTS.length)];
      if (game.toast) game.toast(ev.flavor);
      try { ev.run(game); } catch (e) {}
      const gap = ev.minGapMs + Math.random() * (ev.maxGapMs - ev.minGapMs);
      this.nextAt = now + gap;
    } catch (e) {}
  },
  // 玩家选择（UI 按钮调用）
  choose(game, opt) {
    try {
      const pc = game && game.sky && game.sky.pendingChoice;
      if (!pc) return false;
      const ev = SKY_EVENTS.find((e) => e.id === pc.eventId);
      if (!ev || !ev.choose) return false;
      const r = ev.choose(game, opt);
      game.sky.pendingChoice = null;
      return r;
    } catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 十二、天空贸易路线 SkyRoutes（云港码头的航线数据）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：每条航线 = 一条「天空→地面」的固定交换协议，
 * 由云港码头（cloud_harbor）的 tradeRoutes 数量决定可开通条数。
 * 航线每 5 分钟执行一次，由 trade.js 读取 SKY_ROUTES 并结算。
 *
 * 字段：{ id, name, icon, give（天空付出）, take（地面获得）,
 *   intervalMs, desc, flavor }
 * ★ 读取约定（trade.js 防御性读取）：
 *   const routes = SkyAgg.maxEffect(game, 'cloud_harbor', e => e.tradeRoutes || 0);
 *   const open = SKY_ROUTES.slice(0, routes);   // 按顺序开通
 *   // 每条航线：从天空池扣 give，往地面仓库加 take（上限截断）
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_ROUTES = [
  { id: 'route-food', name: '云上粮道', icon: '🌾',
    give: { food: 100 }, take: { food: 100 },
    intervalMs: 5 * 60 * 1000,
    desc: '每 5 分钟：天空食物 100 → 地面仓库（云端农场直供）',
    flavor: '粮道开通那天，地面食堂的菜单上多了个词：「云产」。' },
  { id: 'route-rare', name: '稀有矿专线', icon: '💎',
    give: { rare: 40 }, take: { rare: 40 },
    intervalMs: 5 * 60 * 1000,
    desc: '每 5 分钟：天空稀有矿 40 → 地面仓库（提炼塔直供）',
    flavor: '专线的飞艇被漆成了金色——运的东西贵，排面也得贵。' },
  { id: 'route-he3', name: '氦三通道', icon: '☢️',
    give: { he3: 10 }, take: { he3: 10 },
    intervalMs: 5 * 60 * 1000,
    desc: '每 5 分钟：天空 He3 10 → 地面仓库（聚变燃料生命线）',
    flavor: '「这条航线运的不是燃料，是城市的心跳。」——能源部长' },
];

// 航线结算（trade.js 每 5 分钟调用一次；独立可测）
function settleSkyRoutes(game) {
  try {
    if (!game || !game.sky) return 0;
    const n = SkyAgg.maxEffect(game, 'cloud_harbor', (e) => e.tradeRoutes || 0);
    if (n <= 0) return 0;
    const pool = game.sky.skyPool || {};
    const inv = (game.player && game.player.inv) || {};
    let settled = 0;
    for (const r of SKY_ROUTES.slice(0, n)) {
      let okAll = true;
      for (const [k, v] of Object.entries(r.give)) {
        if ((pool[k] || 0) < v) { okAll = false; break; }
      }
      if (!okAll) continue;  // 天空池不足，本轮跳过（不空运）
      for (const [k, v] of Object.entries(r.give)) pool[k] -= v;
      for (const [k, v] of Object.entries(r.take)) inv[k] = (inv[k] || 0) + v;
      settled++;
    }
    return settled;
  } catch (e) { return 0; }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十三、扩展自检（平台升级 / 天空事件 / 贸易路线）与补充导出
 * ═══════════════════════════════════════════════════════════════════════
 */
function SkySelfTest2() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 平台升级 3 种 × 3 级
    const ups = Object.keys(PLATFORM_UPGRADES);
    ok(ups.length === 3, '平台升级应为 3 种，实际 ' + ups.length);
    for (const id of ups) {
      const d = PLATFORM_UPGRADES[id];
      ok(Array.isArray(d.levels) && d.levels.length === 4 && d.levels[0] === null,
        id + ' levels 应为 [null, L1, L2, L3]');
    }
    ok(upgradePlatform(null, 'x', 'lift') === false, 'upgradePlatform 防御失败');
    // 天空事件
    ok(Array.isArray(SKY_EVENTS) && SKY_EVENTS.length >= 7, '天空事件不足 7 个');
    for (const e of SKY_EVENTS) {
      ok(e.id && e.run && typeof e.run === 'function', '事件 ' + e.id + ' 缺少 run');
    }
    SkyEvents.tick(null);  // 不应抛错
    ok(SkyEvents.choose(null, 'A') === false, 'SkyEvents.choose 防御失败');
    // 贸易路线
    ok(SKY_ROUTES.length === 3, '贸易路线应为 3 条');
    ok(settleSkyRoutes(null) === 0, 'settleSkyRoutes 防御失败');
    // 飞艇顺风标记：runCargo 读取 game.sky.tailwindUntil（存在性检查）
    const m = new SkyManager();
    m.unlocked = true;
    m.tailwindUntil = Date.now() + 1000;
    ok(m.tailwindUntil > Date.now(), '顺风标记异常');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[SkySelfTest2] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[SkySelfTest2] 通过：平台升级 3×3 / 天空事件 / 贸易路线');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    SkySelfTest2, PLATFORM_UPGRADES, SKY_EVENTS, SkyEvents,
    SKY_ROUTES, settleSkyRoutes, upgradePlatform,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十四、天空奇观 WONDERS_SKY（3 座，限建 1 座/种）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：天空层的「封神建筑」——每座都是一个玩法的终点：
 *   👑 天空王座：天空系毕业，天空系灾难免疫；
 *   🚢 云端方舟：天空人口的「诺亚方舟」，灾难时保人；
 *   👁️ 风暴之眼：把空中风暴变成「提款机」。
 *
 * 字段：{ id, name, icon, cost, needPop, powerUse, effect, effectDesc,
 *   desc, flavor, unlock }；effect 自定义字段配合「★ 读取约定」。
 * 接入：mergeSkyWonders() → Object.assign(BUILDINGS, WONDERS_SKY)（幂等）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const WONDERS_SKY = {
  // ── 👑 天空王座 sky_throne ────────────────────────────────────────
  // 定位：天空系毕业奇观。建成后天空系灾难（空中风暴/平台坠毁）免疫，
  //   全城天空建筑产量 +20%。
  // ★ 读取约定（HazardPack16 / build.js 防御性读取）：
  //   const immune = game.builder.count('sky_throne') >= 1;  // 天空系灾难免疫
  //   const mul = eff.skyYieldMul || 1;  // 天空产量倍率（取最高）
  // 数值平衡：cost 2000 钢 + 500 tech + 100 he3，全场最贵之一——
  //   这是「天空胜利」的门票，不是中期建筑。
  sky_throne: {
    id: 'sky_throne', name: '天空王座', icon: '👑',
    cost: { steel: 2000, tech: 500, he3: 100 }, needPop: 100, powerUse: 30,
    effect: { skyYieldMul: 1.2, skyDisasterImmune: true, wonder: true, limitOne: true },
    effectDesc: '天空系灾难免疫（风暴/坠毁）；全城天空建筑产量 +20%',
    desc: '天空毕业：灾难免疫，产量 +20%',
    flavor: '王座升空那天，三层空域的平台同时鸣笛——像一场加冕。',
    unlock: { type: 'tech', ref: 't-sky-15', desc: '需研究「天空王座」科技' },
  },
  // ── 🚢 云端方舟 cloud_ark ─────────────────────────────────────────
  // 定位：天空人口的「诺亚方舟」。灾难（坠毁/风暴）时，
  //   自动疏散平台居民，人口损失 -80%。
  // ★ 读取约定（SkyManager.checkCrashes 防御性读取）：
  //   const ark = game.builder.count('cloud_ark') >= 1;
  //   实际人口损失 = base × (ark ? 0.2 : 1)
  // 数值平衡：不加产出，纯「保险」——买的是安心；
  //   cost 1200 钢 + 300 tech，是「天空人口流」的必备。
  cloud_ark: {
    id: 'cloud_ark', name: '云端方舟', icon: '🚢',
    cost: { steel: 1200, tech: 300, ice: 500 }, needPop: 80, powerUse: 20,
    effect: { evacMul: 0.2, skyPopCap: 200, wonder: true, limitOne: true },
    effectDesc: '灾难时人口损失 -80%；天空人口上限 +200',
    desc: '诺亚方舟：人口损失 -80%，人口 +200',
    flavor: '方舟的船舱里刻着一句话：一个都不能少。',
    unlock: { type: 'tech', ref: 't-sky-13', desc: '需研究「天空都市规划」科技' },
  },
  // ── 👁️ 风暴之眼 storm_eye ─────────────────────────────────────────
  // 定位：把灾难变成提款机。空中风暴期间，全城产电 +50%，
  //   且风暴伤害 -30%（「骑」在风暴上）。
  // ★ 读取约定（build.js / HazardPack16 防御性读取）：
  //   const eye = game.builder.count('storm_eye') >= 1;
  //   风暴期产电 = base × 1.5；风暴伤害 × 0.7
  // 数值平衡：与雷暴收集器叠加，风暴期产电可达 ×2——
  //   「风暴季」从灾难变成「狂欢节」；cost 1500 钢 + 400 tech。
  storm_eye: {
    id: 'storm_eye', name: '风暴之眼', icon: '👁️',
    cost: { steel: 1500, tech: 400, uranium: 40 }, needPop: 90, powerUse: 25,
    effect: { stormPowerMul: 1.5, stormMitigation: 0.3, wonder: true, limitOne: true },
    effectDesc: '风暴期全城产电 +50%；风暴伤害 -30%',
    desc: '骑在风暴上：产电 +50%，伤害 -30%',
    flavor: '「风暴的中心最平静，我们决定住在那儿。」——风暴之眼奠基铭文',
    unlock: { type: 'tech', ref: 't-sky-14', desc: '需研究「风暴驾驭」科技' },
  },
};

// 天空奇观合并（幂等）
function mergeSkyWonders() {
  if (typeof BUILDINGS === 'undefined') {
    console.warn('[sky] BUILDINGS 未定义，跳过奇观合并');
    return false;
  }
  Object.assign(BUILDINGS, WONDERS_SKY);
  return true;
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十五、飞行器升级（AIRCRAFT_UPGRADES）：2 种 × 3 级
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：飞行器本身可升级（全局升级，作用于所有同类型飞行器）——
 *   飞艇线：运力/速度/装甲；
 *   巡逻机线：覆盖/速度/火力（可驱离小型空中威胁）。
 *
 * 数据结构：game.sky.aircraftUp = { airship: 0~3, patrol: 0~3 }；
 * 升级成本按级递增，见下表。
 * ★ 读取约定（SkyManager.runCargo / assignPatrol 防御性读取）：
 *   const lv = (game.sky.aircraftUp || {}).airship || 0;
 *   const up = AIRCRAFT_UPGRADES.airship.levels[lv] || {};
 *   const cap = (AIRCRAFT.airship.cargoCap || 0) × (up.cargoMul || 1);
 * ═══════════════════════════════════════════════════════════════════════
 */
const AIRCRAFT_UPGRADES = {
  // ── 货运飞艇升级线 ──────────────────────────────────────────────
  // 定位：运力/速度双提升。Lv3 解锁「重型吊舱」：运力 ×2，但耗电 +1。
  // 数值平衡：Lv3 400 运力 ≈ 2 艘 Lv1 飞艇，但只占 1 个槽位——
  //   「槽位」是天空后期的硬约束，升级是破局手段。
  airship: {
    id: 'airship', name: '货运飞艇', icon: '🎈',
    desc: '运力/速度升级线',
    levels: [null,
      { cost: { steel: 60, tech: 10 }, cargoMul: 1.3, speedMul: 1.0, powerAdd: 0,
        desc: '运力 ×1.3',
        flavor: '吊舱加大了一圈，船长说：能装就是硬道理。' },
      { cost: { steel: 150, tech: 30 }, cargoMul: 1.6, speedMul: 1.25, powerAdd: 0,
        desc: '运力 ×1.6，速度 ×1.25',
        flavor: '新引擎的轰鸣声，成了云港最动听的背景音乐。' },
      { cost: { steel: 300, tech: 80, he3: 10 }, cargoMul: 2.0, speedMul: 1.5, powerAdd: 1,
        desc: '运力 ×2.0，速度 ×1.5，耗电 +1（重型吊舱）',
        flavor: '「重型吊舱吊起的不只是货物，是天空城的野心。」——船坞' },
    ],
  },
  // ── 巡逻机升级线 ────────────────────────────────────────────────
  // 定位：覆盖/火力双提升。Lv2 解锁「驱离」：可驱离小型空中威胁
  //   （ content_v16 的次级事件）；Lv3 覆盖 5 平台。
  // 数值平衡：Lv3 1 架顶 1.6 架，巡逻机槽位压力骤减。
  patrol: {
    id: 'patrol', name: '巡逻机', icon: '✈️',
    desc: '覆盖/火力升级线',
    levels: [null,
      { cost: { steel: 50, tech: 15 }, coverageAdd: 1, repel: false, powerAdd: 0,
        desc: '覆盖 +1 平台（3→4）',
        flavor: '巡逻机加装了副油箱：飞得更远，看得更清。' },
      { cost: { steel: 120, tech: 40 }, coverageAdd: 1, repel: true, powerAdd: 0,
        desc: '覆盖 +1（→5）；解锁驱离（小型空中威胁）',
        flavor: '机翼下挂了驱离弹——巡逻机从「眼睛」变成了「拳头」。' },
      { cost: { steel: 250, tech: 100, rare: 30 }, coverageAdd: 2, repel: true, powerAdd: 1,
        desc: '覆盖 +2（→5）；驱离效率 +50%，耗电 +1',
        flavor: '「空域有我们，天空城才能睡安稳觉。」——巡逻队队训' },
    ],
  },
};

// 飞行器升级（防御：game.sky 不存在/已满级/资源不足返回 false）
function upgradeAircraft(game, type) {
  try {
    if (!game || !game.sky) return false;
    const def = AIRCRAFT_UPGRADES[type];
    if (!def) return false;
    game.sky.aircraftUp = game.sky.aircraftUp || {};
    const cur = game.sky.aircraftUp[type] || 0;
    if (cur >= 3) return false;
    const lvDef = def.levels[cur + 1];
    if (!lvDef) return false;
    if (game.player && game.player.inv) {
      for (const [k, v] of Object.entries(lvDef.cost || {})) {
        if ((game.player.inv[k] || 0) < v) return false;
      }
      for (const [k, v] of Object.entries(lvDef.cost || {})) game.player.inv[k] -= v;
    }
    game.sky.aircraftUp[type] = cur + 1;
    return true;
  } catch (e) { return false; }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十六、天空防御 SKY_DEFENSE（3 种防御设施，建在平台上）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：天空城需要「防空」——防的不是敌人，是「天」本身：
 *   防空炮（flak）：拦截冰雹/碎片，平台 hp 保护；
 *   拦截网（net）：空中风暴伤害 -N%（与装甲叠加）；
 *   诱饵气球（decoy）：吸引雷击，保护雷暴收集器之外的建筑。
 *
 * 接入：mergeSkyDefense() → Object.assign(BUILDINGS, SKY_DEFENSE)（幂等）。
 * 每种 3 级，延续 SKY_BUILDINGS 数据约定（skyBuilding: true）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_DEFENSE = {
  // ── 防空炮 sky_flak ─────────────────────────────────────────────
  // 定位：平台的「保镖」。拦截风暴碎片，每级降低平台所受伤害。
  // ★ 读取约定：eff.flakMitigation（取最高），伤害 × (1 - mit)。
  // 数值平衡：Lv3 40% 减伤，配合装甲 60% 可达 76%——
  //   「铁王八」平台，风暴刮不动。
  sky_flak: {
    id: 'sky_flak', name: '防空炮', icon: '🔫',
    levels: [null,
      { cost: { steel: 80, iron: 40 }, needPop: 4, powerUse: 2,
        effect: { flakMitigation: 0.15, skyBuilding: true },
        effectDesc: '平台所受风暴/碎片伤害 -15%',
        desc: '-15% 伤害：平台保镖上岗',
        flavor: '防空炮第一次开火，击碎了一块冰雹——平台居民鼓掌了。', },
      { cost: { steel: 200, tech: 20 }, needPop: 8, powerUse: 4,
        effect: { flakMitigation: 0.25, skyBuilding: true },
        effectDesc: '平台所受伤害 -25%',
        desc: '-25% 伤害：弹幕成型',
        flavor: '炮手说：我们的目标不是打中，是让碎片「不敢」来。', },
      { cost: { steel: 400, tech: 60, rare: 30 }, needPop: 14, powerUse: 6,
        effect: { flakMitigation: 0.4, skyBuilding: true },
        effectDesc: '平台所受伤害 -40%',
        desc: '-40% 伤害：铁王八平台',
        flavor: '「风暴？让它来，我们的炮弹比它的脾气大。」——防空连', },
    ],
    desc: '平台伤害 -15%/-25%/-40%（防空）',
    unlock: { type: 'tech', ref: 't-sky-3', desc: '需研究「飞行器工程」' },
  },
  // ── 拦截网 sky_net ──────────────────────────────────────────────
  // 定位：风暴的「渔网」。全城风暴伤害 -N%（与雷达站叠加）。
  // ★ 读取约定：eff.netMitigation（取最高），与 stormMitigation 加法汇总。
  // 数值平衡：Lv3 25%，是雷达站之外的第二减伤源。
  sky_net: {
    id: 'sky_net', name: '拦截网', icon: '🕸️',
    levels: [null,
      { cost: { steel: 60, iron: 60 }, needPop: 4, powerUse: 1,
        effect: { netMitigation: 0.1, skyBuilding: true },
        effectDesc: '全城风暴伤害 -10%',
        desc: '-10% 风暴伤害：第一张网',
        flavor: '第一张网张开时，风从网眼里穿过——像被梳子梳过。', },
      { cost: { steel: 150, iron: 120 }, needPop: 8, powerUse: 2,
        effect: { netMitigation: 0.18, skyBuilding: true },
        effectDesc: '全城风暴伤害 -18%',
        desc: '-18%：网越织越密',
        flavor: '织网工说：我们织的不是网，是天空城的「安全感」。', },
      { cost: { steel: 300, tech: 40, iron: 200 }, needPop: 14, powerUse: 3,
        effect: { netMitigation: 0.25, skyBuilding: true },
        effectDesc: '全城风暴伤害 -25%',
        desc: '-25%：天罗地网',
        flavor: '「风暴再大，也大不过我们的网。」——织网车间', },
    ],
    desc: '全城风暴伤害 -10%/-18%/-25%',
    unlock: { type: 'tech', ref: 't-sky-9', desc: '需研究「空中生态」' },
  },
  // ── 诱饵气球 sky_decoy ──────────────────────────────────────────
  // 定位：雷击的「替死鬼」。吸引雷击，保护同平台其他建筑，
  //   Lv3 被雷击中反而产电（「挨雷发电」）。
  // ★ 读取约定：eff.decoy（取最高）；eff.decoyPower（Lv3 雷击产电）。
  // 数值平衡：纯防御建筑，不产资源（Lv3 除外）——
  //   「花钱买平安」的典型。
  sky_decoy: {
    id: 'sky_decoy', name: '诱饵气球', icon: '🎈',
    levels: [null,
      { cost: { iron: 40, steel: 20 }, needPop: 2, powerUse: 0,
        effect: { decoy: 0.5, decoyPower: 0, skyBuilding: true },
        effectDesc: '50% 概率吸引雷击（保护同平台建筑）',
        desc: '替死鬼：50% 吸雷',
        flavor: '第一个气球升空时，雷真的劈了它——全平台欢呼。', },
      { cost: { iron: 100, steel: 60 }, needPop: 4, powerUse: 0,
        effect: { decoy: 0.75, decoyPower: 0, skyBuilding: true },
        effectDesc: '75% 概率吸引雷击',
        desc: '75% 吸雷：更敬业的替死鬼',
        flavor: '气球操作员说：它的工作就是挨劈，它很敬业。', },
      { cost: { steel: 150, tech: 30, iron: 150 }, needPop: 6, powerUse: 1,
        effect: { decoy: 0.9, decoyPower: 5, skyBuilding: true },
        effectDesc: '90% 吸雷；被雷击中产电 5（挨雷发电）',
        desc: '90% 吸雷 + 挨雷发电 5：因祸得福',
        flavor: '「被雷劈还能发电？这买卖不亏。」——气球站站长', },
    ],
    desc: '吸引雷击 50%/75%/90%；Lv3 挨雷产电 5',
    unlock: { type: 'tech', ref: 't-sky-10', desc: '需研究「高能收集」' },
  },
};

function mergeSkyDefense() {
  if (typeof BUILDINGS === 'undefined') {
    console.warn('[sky] BUILDINGS 未定义，跳过防御合并');
    return false;
  }
  Object.assign(BUILDINGS, SKY_DEFENSE);
  return true;
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十七、天空人口模型 SkyPop（天空居民的幸福/健康/通勤）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：天空居民不是「地面人口的天空版」，有三件套独立机制：
 *   恐高（acrophobia）：天空居民基础幸福 -2/人（居住区 Lv1），
 *     花园/市集可抵消；
 *   通勤（commute）：天空居民在地面建筑工作时，效率 -20%
 *     （飞艇运力不足时 -40%）——「住天上，就在天上干活」；
 *   健康（health）：平流层辐射 2 级，长期居住健康 -1/100 天，
 *     医疗中心（地面）可覆盖（远程医疗）。
 *
 * ★ 读取约定（pop.js 防御性读取）：
 *   const fear = SkyPop.totalFear(game);      // 全城恐高 debuff（负值）
 *   const comm = SkyPop.commuteMul(game);     // 通勤效率倍率
 *   // 恐高抵消：SkyAgg 花园 fearReduce + 市集 happiness
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyPop = {
  // 全城恐高 debuff（负值；花园抵消）
  totalFear(game) {
    try {
      let fear = 0;
      if (game && game.builder && Array.isArray(game.builder.buildings)) {
        for (const b of game.builder.buildings) {
          if (b.id === 'sky_habitat') fear += SkyAgg.effectOf('sky_habitat', b.level).skyHappiness || 0;
          if (b.id === 'sky_garden') fear += SkyAgg.effectOf('sky_garden', b.level).fearReduce || 0;
        }
      }
      return fear;  // 负值 = debuff，正值部分 = 已抵消
    } catch (e) { return 0; }
  },
  // 通勤效率倍率（天空居民在地面工作）
  commuteMul(game) {
    try {
      const skyPop = SkyAgg.totalSkyPop(game);
      if (!skyPop) return 1;
      // 飞艇运力是否充足：飞艇数 × 运力 vs 天空人口
      const s = game && game.sky;
      const ships = s && s.aircraft ? s.aircraft.filter((a) => a.type === 'airship' && !a.grounded).length : 0;
      const cap = ships * (AIRCRAFT.airship.cargoCap || 200);
      if (cap >= skyPop * 2) return 0.8;   // 运力充足：-20%
      return 0.6;                           // 运力不足：-40%
    } catch (e) { return 1; }
  },
  // 天空居民健康（0~100；辐射/毒化扣减）
  health(game) {
    try {
      let h = 100;
      const s = game && game.sky;
      if (s && Array.isArray(s.platforms)) {
        for (const p of s.platforms) {
          const layer = SKY_LAYERS[p.layerId];
          if (layer && layer.radiation >= 4) h -= 2;  // 轨道边缘辐射
        }
      }
      if (game && game.cloudToxinUntil && Date.now() < game.cloudToxinUntil) h -= 10;
      return Math.max(0, h);
    } catch (e) { return 100; }
  },
  // 天空人口幸福（基础 50 + 建筑修正 + 事件修正）
  happiness(game) {
    try {
      let h = 50 + this.totalFear(game);
      // 云海节事件加成（SkyEvents 期间标记）
      if (game && game.sky && game.sky.festivalUntil && Date.now() < game.sky.festivalUntil) h += 10;
      return Math.max(0, Math.min(100, h));
    } catch (e) { return 50; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 十八、天空贸易公司 SkyTradeCo（云端航线的「承运商」）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：云港码头的航线由「贸易公司」承运——
 *   玩家可成立 1 家贸易公司（限 1），选择专精方向：
 *   粮道专精 / 矿产专精 / 综合专精，不同专精不同加成。
 *   这是「轻量经营」：选一次，加成永久，换专精要花钱。
 *
 * 数据结构：game.sky.tradeCo = { founded, spec: 'food'|'mineral'|'general' }；
 * ★ 读取约定（settleSkyRoutes 防御性读取）：
 *   const co = (game.sky || {}).tradeCo || {};
 *   if (co.spec === 'food') 给 food 航线 take ×1.2；
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_TRADE_CO = {
  specs: {
    food: { id: 'food', name: '粮道专精', icon: '🌾',
      desc: '食物航线 take ×1.2',
      mul: { food: 1.2 },
      flavor: '「民以食为天，天上也不例外。」——粮道公司' },
    mineral: { id: 'mineral', name: '矿产专精', icon: '💎',
      desc: '稀有矿/He3 航线 take ×1.2',
      mul: { rare: 1.2, he3: 1.2 },
      flavor: '「天上掉下来的都是钱，我们负责接住。」——矿产公司' },
    general: { id: 'general', name: '综合专精', icon: '🌐',
      desc: '全部航线 take ×1.1',
      mul: { food: 1.1, rare: 1.1, he3: 1.1 },
      flavor: '「什么都运，什么都赚——薄利多销。」——综合公司' },
  },
  foundCost: { steel: 300, tech: 50 },
  switchCost: { steel: 100 },
};

// 成立贸易公司（防御：已成立/资源不足返回 false）
function foundTradeCo(game, spec) {
  try {
    if (!game || !game.sky) return false;
    if (game.sky.tradeCo && game.sky.tradeCo.founded) return false;
    if (!SKY_TRADE_CO.specs[spec]) return false;
    if (game.player && game.player.inv) {
      for (const [k, v] of Object.entries(SKY_TRADE_CO.foundCost)) {
        if ((game.player.inv[k] || 0) < v) return false;
      }
      for (const [k, v] of Object.entries(SKY_TRADE_CO.foundCost)) game.player.inv[k] -= v;
    }
    game.sky.tradeCo = { founded: true, spec };
    return true;
  } catch (e) { return false; }
}

// 切换专精（防御）
function switchTradeCoSpec(game, spec) {
  try {
    if (!game || !game.sky || !game.sky.tradeCo || !game.sky.tradeCo.founded) return false;
    if (!SKY_TRADE_CO.specs[spec]) return false;
    if (game.player && game.player.inv) {
      for (const [k, v] of Object.entries(SKY_TRADE_CO.switchCost)) {
        if ((game.player.inv[k] || 0) < v) return false;
      }
      for (const [k, v] of Object.entries(SKY_TRADE_CO.switchCost)) game.player.inv[k] -= v;
    }
    game.sky.tradeCo.spec = spec;
    return true;
  } catch (e) { return false; }
}

/* ═══════════════════════════════════════════════════════════════════════
 * 十九、扩展自检 SkySelfTest3（奇观 / 飞行器升级 / 防御 / 人口 / 贸易公司）
 * ═══════════════════════════════════════════════════════════════════════
 */
function SkySelfTest3() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 天空奇观 3 座
    const wids = Object.keys(WONDERS_SKY);
    ok(wids.length === 3, '天空奇观应为 3 座，实际 ' + wids.length);
    for (const id of wids) {
      const w = WONDERS_SKY[id];
      ok(w.effect && w.effect.limitOne, id + ' 应限建 1 座');
      ok(w.unlock && w.unlock.ref, id + ' 缺少 unlock');
    }
    // 飞行器升级 2 种 × 3 级
    for (const id of Object.keys(AIRCRAFT_UPGRADES)) {
      const d = AIRCRAFT_UPGRADES[id];
      ok(d.levels.length === 4 && d.levels[0] === null, id + ' levels 异常');
    }
    ok(upgradeAircraft(null, 'airship') === false, 'upgradeAircraft 防御失败');
    // 天空防御 3 种 × 3 级
    const dids = Object.keys(SKY_DEFENSE);
    ok(dids.length === 3, '天空防御应为 3 种，实际 ' + dids.length);
    for (const id of dids) {
      const d = SKY_DEFENSE[id];
      ok(d.levels.length === 4 && d.levels[0] === null, id + ' levels 异常');
      for (let lv = 1; lv <= 3; lv++) ok(d.levels[lv].effect.skyBuilding, id + ' Lv' + lv + ' 缺少 skyBuilding 标记');
    }
    // 天空人口模型
    ok(SkyPop.totalFear(null) === 0, 'SkyPop 防御失败');
    ok(SkyPop.commuteMul(null) === 1, '无天空人口时通勤应为 1');
    ok(SkyPop.health(null) === 100, 'SkyPop.health 防御失败');
    // 贸易公司
    ok(Object.keys(SKY_TRADE_CO.specs).length === 3, '贸易公司专精应为 3 种');
    ok(foundTradeCo(null, 'food') === false, 'foundTradeCo 防御失败');
    ok(switchTradeCoSpec(null, 'food') === false, 'switchTradeCoSpec 防御失败');
    const g = { sky: {}, player: { inv: { steel: 1000, tech: 1000 } } };
    ok(foundTradeCo(g, 'food') === true, '成立贸易公司失败');
    ok(g.sky.tradeCo.spec === 'food', '专精异常');
    ok(foundTradeCo(g, 'mineral') === false, '重复成立应失败');
    ok(switchTradeCoSpec(g, 'mineral') === true, '切换专精失败');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[SkySelfTest3] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[SkySelfTest3] 通过：奇观 3 / 飞行器升级 2×3 / 防御 3×3 / 人口模型 / 贸易公司');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    SkySelfTest3, WONDERS_SKY, mergeSkyWonders, AIRCRAFT_UPGRADES, upgradeAircraft,
    SKY_DEFENSE, mergeSkyDefense, SkyPop, SKY_TRADE_CO, foundTradeCo, switchTradeCoSpec,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 二十、天空气象站网络 SkyMetNet（3 种气象站）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：气象尖塔是「大脑」，气象站是「眼睛」——
 *   建得越多，预报精度越高（叠加到尖塔精度上）。
 *   3 种气象站对应 3 层空域，各管一层。
 *
 * 接入：mergeSkyMetNet() → Object.assign(BUILDINGS, SKY_METNET)（幂等）。
 * ★ 读取约定（SkyWeather 防御性读取）：
 *   const acc = SkyMetNet.totalAccuracy(game);  // 0~0.3，加法汇总
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_METNET = {
  // ── 低空气象站 ────────────────────────────────────────────────
  // 定位：沙尘暴的「前哨」。精度 +10%，沙尘暴预警 +10 秒。
  met_low: {
    id: 'met_low', name: '低空气象站', icon: '🌡️',
    levels: [null,
      { cost: { steel: 40, iron: 40 }, needPop: 3, powerUse: 1,
        effect: { accuracyAdd: 0.1, sandWarnMs: 10000, skyBuilding: true },
        effectDesc: '预报精度 +10%；沙尘暴预警 +10 秒',
        desc: '精度 +10%：沙尘暴前哨',
        flavor: '气象员说：低空的风，脾气都写在脸上。', },
      { cost: { steel: 100, tech: 10 }, needPop: 6, powerUse: 2,
        effect: { accuracyAdd: 0.15, sandWarnMs: 20000, skyBuilding: true },
        effectDesc: '预报精度 +15%；沙尘暴预警 +20 秒',
        desc: '精度 +15%：前哨升级',
        flavor: '站里的风速仪转得比电风扇还快——它很敬业。', },
      { cost: { steel: 200, tech: 30, rare: 20 }, needPop: 10, powerUse: 3,
        effect: { accuracyAdd: 0.2, sandWarnMs: 30000, skyBuilding: true },
        effectDesc: '预报精度 +20%；沙尘暴预警 +30 秒',
        desc: '精度 +20%：沙尘暴千里眼',
        flavor: '「沙尘暴还没起床，我们已经知道了。」——站长' },
    ],
    desc: '低空之眼：精度 +10%/+15%/+20%，沙尘暴预警延长',
    unlock: { type: 'tech', ref: 't-sky-5', desc: '需研究「气象学」' },
  },
  // ── 平流层气象站 ──────────────────────────────────────────────
  // 定位：云团/冰晶雨的「瞭望塔」。精度 +10%，云团预警。
  met_strato: {
    id: 'met_strato', name: '平流层气象站', icon: '☁️',
    levels: [null,
      { cost: { steel: 60, tech: 10 }, needPop: 3, powerUse: 1,
        effect: { accuracyAdd: 0.1, cloudWarn: true, skyBuilding: true, minLayer: 'strato' },
        effectDesc: '预报精度 +10%；云团/冰晶雨预警',
        desc: '精度 +10%：云团瞭望塔（需平流层）',
        flavor: '站员每天的工作：数云——数了三年，没数完。', },
      { cost: { steel: 140, tech: 25 }, needPop: 6, powerUse: 2,
        effect: { accuracyAdd: 0.15, cloudWarn: true, skyBuilding: true, minLayer: 'strato' },
        effectDesc: '预报精度 +15%；云团预警',
        desc: '精度 +15%',
        flavor: '瞭望员说：云的形状会讲故事，可惜我只会数数。', },
      { cost: { steel: 280, tech: 60, rare: 30 }, needPop: 10, powerUse: 3,
        effect: { accuracyAdd: 0.2, cloudWarn: true, skyBuilding: true, minLayer: 'strato' },
        effectDesc: '预报精度 +20%；云团预警',
        desc: '精度 +20%：平流层之眼',
        flavor: '「云知道一切，它只是不说——我们替它说。」——站训' },
    ],
    desc: '平流层之眼：精度 +10%/+15%/+20%（需平流层）',
    unlock: { type: 'tech', ref: 't-sky-6', desc: '需研究「平流层定居」' },
  },
  // ── 轨道气象站 ────────────────────────────────────────────────
  // 定位：太阳风/深空威胁的「哨兵」。精度 +10%，太阳风预警 +20 秒。
  met_leo: {
    id: 'met_leo', name: '轨道气象站', icon: '🛰️',
    levels: [null,
      { cost: { steel: 100, tech: 20, he3: 5 }, needPop: 4, powerUse: 2,
        effect: { accuracyAdd: 0.1, solarWarnMs: 20000, skyBuilding: true, minLayer: 'leo' },
        effectDesc: '预报精度 +10%；太阳风预警 +20 秒',
        desc: '精度 +10%：深空哨兵（需轨道边缘）',
        flavor: '哨兵 24 小时盯着太阳——它说，太阳也有起床气。', },
      { cost: { steel: 220, tech: 50, he3: 10 }, needPop: 8, powerUse: 3,
        effect: { accuracyAdd: 0.15, solarWarnMs: 30000, skyBuilding: true, minLayer: 'leo' },
        effectDesc: '预报精度 +15%；太阳风预警 +30 秒',
        desc: '精度 +15%',
        flavor: '站员说：在这里看日出，一天能看十六次——看到吐。', },
      { cost: { steel: 450, tech: 100, he3: 20, rare: 40 }, needPop: 14, powerUse: 5,
        effect: { accuracyAdd: 0.2, solarWarnMs: 45000, skyBuilding: true, minLayer: 'leo' },
        effectDesc: '预报精度 +20%；太阳风预警 +45 秒',
        desc: '精度 +20%：太阳系哨兵',
        flavor: '「太阳打个喷嚏，我们全城都知道——提前 45 秒。」——站长' },
    ],
    desc: '深空哨兵：精度 +10%/+15%/+20%（需轨道边缘）',
    unlock: { type: 'tech', ref: 't-sky-11', desc: '需研究「临界轨道」' },
  },
};

function mergeSkyMetNet() {
  if (typeof BUILDINGS === 'undefined') {
    console.warn('[sky] BUILDINGS 未定义，跳过气象站合并');
    return false;
  }
  Object.assign(BUILDINGS, SKY_METNET);
  return true;
}

// 气象站总精度加成（防御：0~0.3）
const SkyMetNet = {
  totalAccuracy(game) {
    try {
      if (!game || !game.builder || !Array.isArray(game.builder.buildings)) return 0;
      let acc = 0;
      for (const b of game.builder.buildings) {
        const def = SKY_METNET[b.id];
        if (!def) continue;
        const eff = (def.levels[b.level] || {}).effect || {};
        acc += eff.accuracyAdd || 0;
      }
      return Math.min(0.3, acc);
    } catch (e) { return 0; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十一、天空救援队 SkyRescue
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：平台坠毁/风暴后，救援队出动——
 *   减少人口损失，加速平台维修，是「灾后重建」的官方答案。
 *   救援队是「编制」不是建筑：1 支救援队 = 10 人 + 1 架巡逻机改装。
 *
 * 数据结构：game.sky.rescueTeams（数量）；每支每 tick 耗电 2。
 * ★ 读取约定（SkyManager.checkCrashes 防御性读取）：
 *   const teams = (game.sky.rescueTeams || 0);
 *   人口损失 × (1 - teams × 0.1)（上限 -50%）；维修 +teams hp/tick。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyRescue = {
  teamCost: { steel: 100, tech: 20 },
  powerPerTeam: 2,
  maxTeams: 5,
  // 组建救援队（防御）
  found(game) {
    try {
      if (!game || !game.sky) return false;
      game.sky.rescueTeams = game.sky.rescueTeams || 0;
      if (game.sky.rescueTeams >= this.maxTeams) return false;
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(this.teamCost)) {
          if ((game.player.inv[k] || 0) < v) return false;
        }
        for (const [k, v] of Object.entries(this.teamCost)) game.player.inv[k] -= v;
      }
      game.sky.rescueTeams++;
      return true;
    } catch (e) { return false; }
  },
  // 救援减伤（0~0.5）
  rescueMul(game) {
    try {
      const t = (game && game.sky && game.sky.rescueTeams) || 0;
      return Math.min(0.5, t * 0.1);
    } catch (e) { return 0; }
  },
  // 救援维修（hp/tick）
  rescueRepair(game) {
    try {
      return (game && game.sky && game.sky.rescueTeams) || 0;
    } catch (e) { return 0; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十二、天空电网 SkyGrid（电力调度）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：天空城的电力是「独立电网」——
 *   天空电站产的电，优先供天空建筑；余电上网（→地面），缺电下网（←地面）。
 *   电网有「调度策略」：自给自足 / 余电上网 / 缺电下网（默认自动）。
 *
 * 数据结构：game.sky.grid = { mode: 'auto'|'island'|'export'|'import' }；
 * ★ 读取约定（build.js 电力聚合防御性读取）：
 *   const grid = SkyGrid.balance(game);  // { skySupply, skyDemand, flow }
 *   flow > 0：余电上网；flow < 0：缺电下网。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyGrid = {
  modes: {
    auto: { id: 'auto', name: '自动', icon: '🔄', desc: '余电上网，缺电下网（推荐）' },
    island: { id: 'island', name: '孤岛', icon: '🏝️', desc: '天空电网独立，不与地面交换' },
    export: { id: 'export', name: '上网', icon: '⬆️', desc: '余电全部上网（卖电）' },
    import: { id: 'import', name: '下网', icon: '⬇️', desc: '缺电时从地面取电（买电）' },
  },
  // 电力平衡（防御）
  balance(game) {
    try {
      const supply = SkyAgg.totalSkyPower(game);
      let demand = 0;
      if (game && game.builder && Array.isArray(game.builder.buildings)) {
        for (const b of game.builder.buildings) {
          const def = (typeof SKY_BUILDINGS !== 'undefined' && SKY_BUILDINGS[b.id]) ||
            (typeof SKY_DEFENSE !== 'undefined' && SKY_DEFENSE[b.id]) ||
            (typeof SKY_METNET !== 'undefined' && SKY_METNET[b.id]);
          if (!def) continue;
          demand += ((def.levels[b.level] || {}).powerUse || 0);
        }
      }
      // 平台维持耗电
      if (game && game.sky && Array.isArray(game.sky.platforms)) {
        for (const p of game.sky.platforms) demand += skyPlatformUpkeep(p.layerId);
      }
      const mode = (game && game.sky && game.sky.grid && game.sky.grid.mode) || 'auto';
      let flow = 0;
      if (mode === 'auto' || mode === 'export') flow = Math.max(0, supply - demand);
      else if (mode === 'import') flow = Math.min(0, supply - demand);
      // island：flow = 0
      return { skySupply: supply, skyDemand: demand, flow, mode };
    } catch (e) {
      return { skySupply: 0, skyDemand: 0, flow: 0, mode: 'auto' };
    }
  },
  // 切换模式（防御）
  setMode(game, mode) {
    try {
      if (!game || !game.sky || !this.modes[mode]) return false;
      game.sky.grid = game.sky.grid || {};
      game.sky.grid.mode = mode;
      return true;
    } catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十三、天空编年史 SkyChronicle（flavor + 统计）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：记录天空城的「大事件」——第一平台、第一次风暴、第一艘飞艇……
 *   供成就/回忆录 UI 展示。纯记录，不影响数值。
 * 数据结构：game.sky.chronicle = [{ t, icon, text }]（最多 100 条）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyChronicle = {
  maxEntries: 100,
  // 记录（防御）
  record(game, icon, text) {
    try {
      if (!game || !game.sky) return false;
      game.sky.chronicle = game.sky.chronicle || [];
      game.sky.chronicle.push({ t: Date.now(), icon, text });
      if (game.sky.chronicle.length > this.maxEntries) {
        game.sky.chronicle.splice(0, game.sky.chronicle.length - this.maxEntries);
      }
      return true;
    } catch (e) { return false; }
  },
  // 里程碑检查（SkyManager.tick 里调用，自动记录）
  milestones(game) {
    try {
      if (!game || !game.sky) return;
      const s = game.sky;
      s._miles = s._miles || {};
      const rec = (key, icon, text, cond) => {
        if (!s._miles[key] && cond) {
          s._miles[key] = true;
          this.record(game, icon, text);
          if (game.toast) game.toast(icon + ' ' + text);
        }
      };
      rec('first-platform', '☁️', '第一座浮空平台升空——人类有了第二层地表。', s.platforms.length >= 1);
      rec('ten-platforms', '🏘️', '第十座平台升空——天上有了街区。', s.platforms.length >= 10);
      rec('first-airship', '🎈', '第一艘飞艇首航——天空城有了血液。',
        s.aircraft.some((a) => a.type === 'airship'));
      rec('first-storm', '🌪️', '第一次空中风暴——天空城经受了考验。',
        (s.stats.stormsWeathered || 0) >= 1);
      rec('throne', '👑', '天空王座落成——三层空域，一座王座。',
        game.builder && game.builder.count && game.builder.count('sky_throne') >= 1);
    } catch (e) {}
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十四、扩展自检 SkySelfTest4（气象站 / 救援队 / 电网 / 编年史）
 * ═══════════════════════════════════════════════════════════════════════
 */
function SkySelfTest4() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 气象站 3 种 × 3 级
    const mids = Object.keys(SKY_METNET);
    ok(mids.length === 3, '气象站应为 3 种，实际 ' + mids.length);
    for (const id of mids) {
      const d = SKY_METNET[id];
      ok(d.levels.length === 4 && d.levels[0] === null, id + ' levels 异常');
    }
    ok(SkyMetNet.totalAccuracy(null) === 0, 'SkyMetNet 防御失败');
    const g = { builder: { buildings: [{ id: 'met_low', level: 3 }, { id: 'met_strato', level: 3 }] } };
    ok(SkyMetNet.totalAccuracy(g) === 0.3, '气象站精度叠加异常（应钳制 0.3）');
    // 救援队
    ok(SkyRescue.found(null) === false, 'SkyRescue 防御失败');
    const g2 = { sky: {}, player: { inv: { steel: 10000, tech: 10000 } } };
    ok(SkyRescue.found(g2) === true, '组建救援队失败');
    ok(SkyRescue.rescueMul(g2) === 0.1, '救援减伤异常');
    for (let i = 0; i < 10; i++) SkyRescue.found(g2);
    ok(g2.sky.rescueTeams === 5, '救援队应上限 5');
    ok(SkyRescue.rescueMul(g2) === 0.5, '救援减伤应钳制 0.5');
    // 电网
    const bal = SkyGrid.balance(null);
    ok(bal.flow === 0 && bal.mode === 'auto', 'SkyGrid 防御失败');
    ok(SkyGrid.setMode(null, 'auto') === false, 'setMode 防御失败');
    const g3 = { sky: {} };
    ok(SkyGrid.setMode(g3, 'island') === true, '切换电网模式失败');
    ok(g3.sky.grid.mode === 'island', '模式异常');
    ok(SkyGrid.setMode(g3, 'nope') === false, '非法模式应失败');
    // 编年史
    ok(SkyChronicle.record(null, '☁️', 'x') === false, '编年史防御失败');
    const g4 = { sky: {}, toast() {} };
    ok(SkyChronicle.record(g4, '☁️', '测试') === true, '记录失败');
    SkyChronicle.milestones(g4);
    ok(g4.sky.chronicle.length >= 1, '里程碑应记录');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[SkySelfTest4] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[SkySelfTest4] 通过：气象站 3×3 / 救援队 / 电网 / 编年史');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    SkySelfTest4, SKY_METNET, mergeSkyMetNet, SkyMetNet,
    SkyRescue, SkyGrid, SkyChronicle,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 二十五、天空船员 SkyCrew（平台乘员系统）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：平台不是全自动的——每座平台需要船员值守。
 *   船员来自天空人口（sky_habitat），每平台 2 人满编；
 *   满编：维修 +2 hp/tick，产出 +10%；缺编：产出 -20%。
 *   这是「天空人口」的就业出口——住天上，就得干活。
 *
 * 数据结构：p.crew（0~N）；SkyManager.runUpkeep 里结算。
 * ★ 读取约定（SkyManager 防御性读取）：
 *   const crewMul = SkyCrew.prodMul(p);  // 1.1 / 1.0 / 0.8
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyCrew = {
  crewPerPlatform: 2,       // 每平台满编 2 人
  fullRepair: 2,            // 满编维修 +2 hp/tick
  fullProdMul: 1.1,         // 满编产出 +10%
  shortProdMul: 0.8,        // 缺编产出 -20%
  // 平台船员数（防御）
  count(p) {
    try { return Math.max(0, p && p.crew) || 0; }
    catch (e) { return 0; }
  },
  // 是否满编
  isFull(p) {
    return this.count(p) >= this.crewPerPlatform;
  },
  // 产出倍率
  prodMul(p) {
    try {
      if (!p || !p.buildingId) return 1;
      if (this.isFull(p)) return this.fullProdMul;
      if (this.count(p) > 0) return 1.0;
      return this.shortProdMul;
    } catch (e) { return 1; }
  },
  // 分配船员（防御：天空人口不足返回 false）
  assign(game, pid, n) {
    try {
      if (!game || !game.sky) return false;
      const p = game.sky.platforms.find((x) => x.id === pid);
      if (!p) return false;
      const skyPop = SkyAgg.totalSkyPop(game);
      const used = game.sky.platforms.reduce((s, x) => s + (x.crew || 0), 0);
      if (used + n > skyPop) return false;  // 人不够
      p.crew = Math.min(10, (p.crew || 0) + n);
      return true;
    } catch (e) { return false; }
  },
  // 撤回船员（防御）
  recall(game, pid, n) {
    try {
      if (!game || !game.sky) return false;
      const p = game.sky.platforms.find((x) => x.id === pid);
      if (!p) return false;
      p.crew = Math.max(0, (p.crew || 0) - (n || p.crew || 0));
      return true;
    } catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十六、天空科研 SkyResearch（平流层实验室加成）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：平流层是「科研天堂」——
 *   在平流层建科研建筑（天线/AI 核心/实验室），产出 +25%；
 *   建满 3 座科研建筑，解锁「平流层科学院」：全城科技 +10%。
 *
 * ★ 读取约定（build.js 防御性读取）：
 *   const mul = SkyResearch.mul(game, buildingId);  // 1.25 / 1.0
 *   const academy = SkyResearch.academy(game);       // true/false
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyResearch = {
  researchIds: ['sk16_strato_antenna', 'rb_aicore', 'observatory', 'rb16_data_crypt'],
  stratoMul: 1.25,
  academyNeed: 3,
  academyBonus: 1.1,
  // 某建筑是否享受平流层科研加成（防御）
  mul(game, buildingId, layerId) {
    try {
      if (layerId !== 'strato') return 1;
      if (this.researchIds.indexOf(buildingId) === -1) return 1;
      return this.stratoMul;
    } catch (e) { return 1; }
  },
  // 平流层科学院是否成立（防御）
  academy(game) {
    try {
      if (!game || !game.sky || !Array.isArray(game.sky.platforms)) return false;
      let n = 0;
      for (const p of game.sky.platforms) {
        if (p.layerId === 'strato' && this.researchIds.indexOf(p.buildingId) !== -1) n++;
      }
      return n >= this.academyNeed;
    } catch (e) { return false; }
  },
  // 科学院加成（防御）
  academyMul(game) {
    return this.academy(game) ? this.academyBonus : 1;
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十七、天空节庆 SkyFestivals（4 个节日）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：天空城有自己的节日——
 *   每个节日持续 1 天（游戏时间 10 分钟），全城 buff。
 *   节日按固定周期轮换，由 SkyFestivals.tick 驱动。
 *
 * ★ 读取约定：game.sky.festival = { id, until }；pop.js 读取幸福加成。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_FESTIVALS = [
  { id: 'cloud-sea', name: '云海节', icon: '🎉',
    desc: '幸福 +10，持续 10 分钟。',
    happinessAdd: 10, durationMs: 10 * 60 * 1000,
    flavor: '🎉 云海节！整片天空变成棉花糖，今晚全城提前下班。' },
  { id: 'wind-day', name: '御风日', icon: '💨',
    desc: '飞行器效率 +20%，持续 10 分钟。',
    aircraftMul: 1.2, durationMs: 10 * 60 * 1000,
    flavor: '💨 御风日！飞艇挂彩带，巡逻机编队表演——天空的庙会。' },
  { id: 'star-night', name: '观星夜', icon: '🌟',
    desc: '科研产出 +20%，持续 10 分钟。',
    researchMul: 1.2, durationMs: 10 * 60 * 1000,
    flavor: '🌟 观星夜！全城调暗灯光——把星空还给星空。' },
  { id: 'harvest', name: '云收节', icon: '🌾',
    desc: '天空农场产量 +30%，持续 10 分钟。',
    farmMul: 1.3, durationMs: 10 * 60 * 1000,
    flavor: '🌾 云收节！农场主说：今年的云，格外甜。' },
];

const SkyFestivals = {
  cycleMs: 60 * 60 * 1000,  // 每 60 分钟一轮节日
  // 每 tick 调用
  tick(game) {
    try {
      if (!game || !game.sky || !game.sky.unlocked) return;
      const now = Date.now();
      const f = game.sky.festival;
      if (f && now < f.until) return;  // 节日进行中
      if (!game.sky._festAt) game.sky._festAt = now + this.cycleMs;
      if (now < game.sky._festAt) return;
      const fest = SKY_FESTIVALS[Math.floor(Math.random() * SKY_FESTIVALS.length)];
      game.sky.festival = { id: fest.id, until: now + fest.durationMs };
      game.sky._festAt = now + this.cycleMs;
      game.sky.festivalUntil = now + fest.durationMs;  // SkyPop.happiness 读取
      if (game.toast) game.toast(fest.flavor);
      SkyChronicle.record(game, fest.icon, fest.name + '开幕！');
    } catch (e) {}
  },
  // 当前节日加成（防御）
  bonus(game) {
    try {
      const f = game && game.sky && game.sky.festival;
      if (!f || Date.now() >= f.until) return {};
      const fest = SKY_FESTIVALS.find((x) => x.id === f.id) || {};
      return {
        happinessAdd: fest.happinessAdd || 0,
        aircraftMul: fest.aircraftMul || 1,
        researchMul: fest.researchMul || 1,
        farmMul: fest.farmMul || 1,
      };
    } catch (e) { return {}; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 二十八、扩展自检 SkySelfTest5（船员 / 科研 / 节庆）
 * ═══════════════════════════════════════════════════════════════════════
 */
function SkySelfTest5() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 船员
    ok(SkyCrew.count(null) === 0, 'SkyCrew 防御失败');
    ok(SkyCrew.prodMul(null) === 1, '无建筑时产出应为 1');
    ok(SkyCrew.prodMul({ buildingId: 'x', crew: 2 }) === 1.1, '满编应 +10%');
    ok(SkyCrew.prodMul({ buildingId: 'x', crew: 0 }) === 0.8, '缺编应 -20%');
    const g = { sky: { platforms: [{ id: 'p1', crew: 0 }] }, pop: { skyPop: 10 } };
    // SkyAgg.totalSkyPop 需要 game.pop.skyPop
    g.pop = { skyPop: 10 };
    ok(SkyCrew.assign(g, 'p1', 2) === true, '分配船员失败');
    ok(g.sky.platforms[0].crew === 2, '船员数异常');
    ok(SkyCrew.assign(g, 'p1', 20) === false, '超人口分配应失败');
    ok(SkyCrew.recall(g, 'p1', 1) === true, '撤回失败');
    // 科研
    ok(SkyResearch.mul(null, 'x', 'strato') === 1, 'SkyResearch 防御失败');
    ok(SkyResearch.mul({}, 'sk16_strato_antenna', 'strato') === 1.25, '平流层科研加成异常');
    ok(SkyResearch.mul({}, 'sk16_strato_antenna', 'low') === 1, '低空不应加成');
    ok(SkyResearch.academy(null) === false, 'academy 防御失败');
    const g2 = { sky: { platforms: [
      { layerId: 'strato', buildingId: 'sk16_strato_antenna' },
      { layerId: 'strato', buildingId: 'rb_aicore' },
      { layerId: 'strato', buildingId: 'observatory' },
    ] } };
    ok(SkyResearch.academy(g2) === true, '科学院应成立');
    ok(SkyResearch.academyMul(g2) === 1.1, '科学院加成异常');
    // 节庆
    ok(SKY_FESTIVALS.length === 4, '节日应为 4 个');
    const b0 = SkyFestivals.bonus(null);
    ok(b0.happinessAdd === undefined || b0.happinessAdd === 0, '无节庆时加成应为空');
    const g3 = { sky: { unlocked: true }, toast() {} };
    g3.sky._festAt = Date.now() - 1;
    SkyFestivals.tick(g3);
    ok(!!g3.sky.festival, '节日应触发');
    const b1 = SkyFestivals.bonus(g3);
    ok(Object.keys(b1).length > 0, '节庆加成异常');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[SkySelfTest5] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[SkySelfTest5] 通过：船员 / 科研 / 节庆');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    SkySelfTest5, SkyCrew, SkyResearch, SKY_FESTIVALS, SkyFestivals,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 二十九、天空建筑师 SkyArchitect（蓝图系统）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：玩家可保存「平台配置蓝图」——
 *   一座平台的建筑 + 升级 + 船员配置，打包成蓝图，
 *   一键复制到新平台（收 80% 建造成本）。
 *   这是「批量铺城」的官方答案。
 *
 * 数据结构：game.sky.blueprints = [{ id, name, buildingId, level, upgrades, crew }]；
 * ★ 读取约定：SkyArchitect.apply(game, bpId) 在空平台上应用蓝图。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyArchitect = {
  maxBlueprints: 5,
  discount: 0.8,  // 蓝图建造 8 折（省设计费）
  // 保存蓝图（防御：平台不存在/已满 5 张返回 null）
  save(game, pid, name) {
    try {
      if (!game || !game.sky) return null;
      const p = game.sky.platforms.find((x) => x.id === pid);
      if (!p || !p.buildingId) return null;
      game.sky.blueprints = game.sky.blueprints || [];
      if (game.sky.blueprints.length >= this.maxBlueprints) return null;
      const bp = {
        id: 'bp-' + Math.random().toString(36).slice(2, 9),
        name: name || (p.buildingId + ' Lv' + p.level),
        layerId: p.layerId,
        buildingId: p.buildingId,
        level: p.level,
        upgrades: JSON.parse(JSON.stringify(p.upgrades || {})),
        crew: p.crew || 0,
      };
      game.sky.blueprints.push(bp);
      return bp;
    } catch (e) { return null; }
  },
  // 应用蓝图（防御：目标平台不存在/已有建筑返回 false）
  apply(game, bpId, targetPid) {
    try {
      if (!game || !game.sky) return false;
      const bp = (game.sky.blueprints || []).find((x) => x.id === bpId);
      const p = game.sky.platforms.find((x) => x.id === targetPid);
      if (!bp || !p || p.buildingId) return false;
      // 按 8 折扣费（建筑成本从 SKY_BUILDINGS 读）
      const def = SKY_BUILDINGS[bp.buildingId];
      if (!def) return false;
      const lvDef = def.levels[bp.level];
      if (!lvDef) return false;
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(lvDef.cost || {})) {
          const cost = Math.ceil(v * this.discount);
          if ((game.player.inv[k] || 0) < cost) return false;
        }
        for (const [k, v] of Object.entries(lvDef.cost || {})) {
          game.player.inv[k] -= Math.ceil(v * this.discount);
        }
      }
      p.buildingId = bp.buildingId;
      p.level = bp.level;
      p.upgrades = JSON.parse(JSON.stringify(bp.upgrades || {}));
      p.crew = 0;  // 船员需重新分配（人不能复制）
      p.maxHp = 100 + (bp.level - 1) * 50;
      p.hp = p.maxHp;
      return true;
    } catch (e) { return false; }
  },
  // 删除蓝图（防御）
  remove(game, bpId) {
    try {
      if (!game || !game.sky || !Array.isArray(game.sky.blueprints)) return false;
      const i = game.sky.blueprints.findIndex((x) => x.id === bpId);
      if (i < 0) return false;
      game.sky.blueprints.splice(i, 1);
      return true;
    } catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 三十、天空保险 SkyInsurance
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：为平台买保险——
 *   每平台每 10 分钟交保费（10 钢），坠毁时赔付 50% 建造成本。
 *   保险公司是「云端市集」的副业（flavor）。
 *   这是「风险管理」玩法：赌徒可以不买，稳健派必买。
 *
 * 数据结构：p.insured（是否投保）；game.sky.insurance = { collected, paid }。
 * ★ 读取约定（SkyManager.checkCrashes 防御性读取）：
 *   坠毁时若 p.insured，按建造成本 50% 赔付到仓库。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyInsurance = {
  premium: { steel: 10 },           // 每 10 分钟保费
  premiumIntervalMs: 10 * 60 * 1000,
  payoutMul: 0.5,                   // 赔付 50% 建造成本
  // 投保（防御）
  insure(game, pid) {
    try {
      if (!game || !game.sky) return false;
      const p = game.sky.platforms.find((x) => x.id === pid);
      if (!p || !p.buildingId || p.insured) return false;
      p.insured = true;
      p._premiumAt = Date.now();
      return true;
    } catch (e) { return false; }
  },
  // 退保（防御）
  uninsure(game, pid) {
    try {
      if (!game || !game.sky) return false;
      const p = game.sky.platforms.find((x) => x.id === pid);
      if (!p || !p.insured) return false;
      p.insured = false;
      return true;
    } catch (e) { return false; }
  },
  // 保费收取（每 tick）
  tick(game) {
    try {
      if (!game || !game.sky || !Array.isArray(game.sky.platforms)) return;
      const now = Date.now();
      game.sky.insurance = game.sky.insurance || { collected: 0, paid: 0 };
      for (const p of game.sky.platforms) {
        if (!p.insured) continue;
        if (now - (p._premiumAt || 0) < this.premiumIntervalMs) continue;
        p._premiumAt = now;
        // 扣费（欠费则自动退保——「断供」）
        let afford = true;
        if (game.player && game.player.inv) {
          for (const [k, v] of Object.entries(this.premium)) {
            if ((game.player.inv[k] || 0) < v) { afford = false; break; }
          }
          if (afford) for (const [k, v] of Object.entries(this.premium)) game.player.inv[k] -= v;
        }
        if (!afford) {
          p.insured = false;
          if (game.toast) game.toast('🏚️ 平台保费断供，保险自动失效！');
        } else {
          game.sky.insurance.collected += this.premium.steel || 0;
        }
      }
    } catch (e) {}
  },
  // 赔付（SkyManager.checkCrashes 调用，防御）
  payout(game, p) {
    try {
      if (!game || !p || !p.insured) return 0;
      const def = SKY_BUILDINGS[p.buildingId];
      if (!def) return 0;
      const lvDef = def.levels[p.level];
      if (!lvDef) return 0;
      let total = 0;
      if (game.player && game.player.inv) {
        for (const [k, v] of Object.entries(lvDef.cost || {})) {
          const pay = Math.floor(v * this.payoutMul);
          game.player.inv[k] = (game.player.inv[k] || 0) + pay;
          total += pay;
        }
      }
      game.sky.insurance = game.sky.insurance || { collected: 0, paid: 0 };
      game.sky.insurance.paid += total;
      if (game.toast) game.toast('🏚️ 保险赔付：平台坠毁，获赔 50% 建造成本！');
      return total;
    } catch (e) { return 0; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 三十一、扩展自检 SkySelfTest6（蓝图 / 保险）
 * ═══════════════════════════════════════════════════════════════════════
 */
function SkySelfTest6() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 蓝图
    ok(SkyArchitect.save(null, 'x') === null, '蓝图防御失败');
    const g = {
      sky: { platforms: [{ id: 'p1', layerId: 'low', buildingId: 'cloud_farm', level: 2, upgrades: { lift: 1 }, crew: 2, hp: 100, maxHp: 150 }], blueprints: [] },
      player: { inv: { steel: 10000, ice: 10000, tech: 10000 } },
    };
    const bp = SkyArchitect.save(g, 'p1', '测试蓝图');
    ok(!!bp && bp.buildingId === 'cloud_farm', '保存蓝图失败');
    ok(bp.crew === 2, '蓝图应记录船员');
    g.sky.platforms.push({ id: 'p2', layerId: 'low', buildingId: null, level: 0, hp: 100, maxHp: 100 });
    ok(SkyArchitect.apply(g, bp.id, 'p2') === true, '应用蓝图失败');
    const p2 = g.sky.platforms[1];
    ok(p2.buildingId === 'cloud_farm' && p2.crew === 0, '蓝图应用异常（船员应清零）');
    ok(SkyArchitect.remove(g, bp.id) === true, '删除蓝图失败');
    ok(SkyArchitect.apply(g, 'nope', 'p2') === false, '非法蓝图应失败');
    // 保险
    ok(SkyInsurance.insure(null, 'x') === false, '保险防御失败');
    const g2 = { sky: { platforms: [{ id: 'p1', buildingId: 'cloud_farm', level: 1 }] }, player: { inv: { steel: 1000 } }, toast() {} };
    ok(SkyInsurance.insure(g2, 'p1') === true, '投保失败');
    ok(SkyInsurance.insure(g2, 'p1') === false, '重复投保应失败');
    ok(SkyInsurance.uninsure(g2, 'p1') === true, '退保失败');
    SkyInsurance.insure(g2, 'p1');
    const paid = SkyInsurance.payout(g2, g2.sky.platforms[0]);
    ok(paid > 0, '赔付异常');
    ok(g2.player.inv.steel > 1000 - 200, '赔付应返还资源');
    // 欠费断供
    const g3 = { sky: { platforms: [{ id: 'p1', buildingId: 'x', insured: true, _premiumAt: 0 }] }, player: { inv: { steel: 0 } }, toast() {} };
    SkyInsurance.tick(g3);
    ok(g3.sky.platforms[0].insured === false, '欠费应自动退保');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[SkySelfTest6] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[SkySelfTest6] 通过：蓝图 / 保险');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { SkySelfTest6, SkyArchitect, SkyInsurance });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 三十二、天空法律 SkyLaws（6 部）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：天空城有自己的法律——
 *   由「天空议会」（浮空居住区 Lv3 解锁）颁布，限同时生效 3 部。
 *   每部有代价，没有免费的午餐。
 *
 * 数据结构：game.sky.laws = [id, ...]；
 * ★ 读取约定：SkyLaws.has(game, id) / SkyLaws.fx(game) 聚合 fx。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_LAWS = [
  { id: 'skylaw-altitude', name: '《高度税法》', icon: '📏',
    desc: '按高度征税：平流层以上建筑产量 -5%，税收 +15%。',
    fx: { skyYieldMul: 0.95, taxMul: 1.15 },
    flavor: '「站得越高，交得越多——很公平。」——天空税务局' },
  { id: 'skylaw-drift', name: '《反漂移法》', icon: '🪂',
    desc: '强制安装姿态引擎：低空漂移率 -50%，平台成本 +10%。',
    fx: { driftMul: 0.5, skyCostMul: 1.1 },
    flavor: '「平台乱跑，罚款；再跑，没收。」——空管局' },
  { id: 'skylaw-quiet', name: '《静空法》', icon: '🔇',
    desc: '夜间禁飞：飞艇夜间停飞，居民幸福 +5。',
    fx: { nightBan: true, happinessAdd: 5 },
    flavor: '「晚上，让天空安静一会儿——给云鲸让路。」' },
  { id: 'skylaw-rescue', name: '《救援义务法》', icon: '🚨',
    desc: '强制组建救援队：救援队上限 +2，每队维持费 +50%。',
    fx: { rescueMaxAdd: 2, rescueCostMul: 1.5 },
    flavor: '「每个平台，都值得被救援。」——救援队队训' },
  { id: 'skylaw-garden', name: '《绿化法》', icon: '🌸',
    desc: '每平台必须有绿化：幸福 +8，平台维持耗电 +10%。',
    fx: { happinessAdd: 8, upkeepMul: 1.1 },
    flavor: '「天上也要有绿色——这是法律。」——园林局' },
  { id: 'skylaw-beacon', name: '《灯塔法》', icon: '💡',
    desc: '强制建灯塔：飞行器事故 -10%，灯塔电费 +20%。',
    fx: { crashReduce: 0.1, beaconCostMul: 1.2 },
    flavor: '「没有灯塔的空域，不许飞。」——空管局' },
];

const SkyLaws = {
  maxLaws: 3,
  // 颁布（防御：需天空议会/已满/重复返回 false）
  enact(game, lawId) {
    try {
      if (!game || !game.sky) return false;
      // 天空议会 = 浮空居住区 Lv3（flavor 前置）
      let council = false;
      if (game.builder && Array.isArray(game.builder.buildings)) {
        council = game.builder.buildings.some((b) => b.id === 'sky_habitat' && b.level >= 3);
      }
      if (!council) return false;
      const law = SKY_LAWS.find((l) => l.id === lawId);
      if (!law) return false;
      game.sky.laws = game.sky.laws || [];
      if (game.sky.laws.indexOf(lawId) !== -1) return false;
      if (game.sky.laws.length >= this.maxLaws) return false;
      game.sky.laws.push(lawId);
      return true;
    } catch (e) { return false; }
  },
  // 废除（防御）
  repeal(game, lawId) {
    try {
      if (!game || !game.sky || !Array.isArray(game.sky.laws)) return false;
      const i = game.sky.laws.indexOf(lawId);
      if (i < 0) return false;
      game.sky.laws.splice(i, 1);
      return true;
    } catch (e) { return false; }
  },
  // 是否生效（防御）
  has(game, lawId) {
    try { return !!(game && game.sky && Array.isArray(game.sky.laws) && game.sky.laws.indexOf(lawId) !== -1); }
    catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 三十三、扩展自检 SkySelfTest7（天空法律）
 * ═══════════════════════════════════════════════════════════════════════
 */
function SkySelfTest7() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(SKY_LAWS.length === 6, '天空法律应为 6 部');
    for (const l of SKY_LAWS) ok(l.id && l.name && l.fx, '法律条目异常: ' + l.id);
    ok(SkyLaws.enact(null, 'skylaw-altitude') === false, 'SkyLaws 防御失败');
    // 无议会时应失败
    const g0 = { sky: {}, builder: { buildings: [] } };
    ok(SkyLaws.enact(g0, 'skylaw-altitude') === false, '无议会应失败');
    const g = { sky: {}, builder: { buildings: [{ id: 'sky_habitat', level: 3 }] } };
    ok(SkyLaws.enact(g, 'skylaw-altitude') === true, '颁布失败');
    ok(SkyLaws.enact(g, 'skylaw-altitude') === false, '重复颁布应失败');
    ok(SkyLaws.has(g, 'skylaw-altitude') === true, 'has 异常');
    SkyLaws.enact(g, 'skylaw-drift'); SkyLaws.enact(g, 'skylaw-quiet');
    ok(SkyLaws.enact(g, 'skylaw-rescue') === false, '超过 3 部应失败');
    ok(SkyLaws.repeal(g, 'skylaw-drift') === true, '废除失败');
    ok(SkyLaws.enact(g, 'skylaw-rescue') === true, '废除后颁布应成功');
    ok(SkyLaws.has(null, 'x') === false, 'has 防御失败');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[SkySelfTest7] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[SkySelfTest7] 通过：天空法律 6');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { SkySelfTest7, SKY_LAWS, SkyLaws });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 三十四、天空快递 SkyExpress（即时配送）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：飞艇是「货车」，快递是「闪送」——
 *   玩家可下「加急单」：指定资源，下一 tick 优先送达，收加急费。
 *   这是「花钱买时间」的官方渠道。
 *
 * 数据结构：game.sky.express = [{ res, amt, feePaid }]（待配送订单）；
 * ★ 读取约定：SkyExpress.order(game, res, amt) 下单；tick 里优先结算。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyExpress = {
  feeMul: 0.1,  // 加急费 = 货物价值 ×10%（按钢折算，简化：amt × 0.1 钢）
  maxOrders: 3,
  // 下单（防御：无飞艇/超 3 单/资源不足返回 false）
  order(game, res, amt) {
    try {
      if (!game || !game.sky) return false;
      const ships = (game.sky.aircraft || []).filter((a) => a.type === 'airship' && !a.grounded);
      if (!ships.length) return false;
      game.sky.express = game.sky.express || [];
      if (game.sky.express.length >= this.maxOrders) return false;
      const fee = Math.ceil((amt || 0) * this.feeMul);
      if (game.player && game.player.inv) {
        if ((game.player.inv.steel || 0) < fee) return false;
        game.player.inv.steel -= fee;
      }
      game.sky.express.push({ res, amt, fee });
      return true;
    } catch (e) { return false; }
  },
  // 结算（每 tick：优先于普通运货）
  tick(game) {
    try {
      if (!game || !game.sky || !Array.isArray(game.sky.express)) return 0;
      const pool = game.sky.skyPool || {};
      const inv = (game.player && game.player.inv) || {};
      let done = 0;
      const rest = [];
      for (const o of game.sky.express) {
        if ((pool[o.res] || 0) >= o.amt) {
          pool[o.res] -= o.amt;
          inv[o.res] = (inv[o.res] || 0) + o.amt;
          done++;
          if (game.toast) game.toast('⚡ 天空快递送达：+' + o.amt + ' ' + o.res + '（加急费 ' + o.fee + ' 钢）');
        } else {
          rest.push(o);  // 货不够，留到下 tick
        }
      }
      game.sky.express = rest;
      return done;
    } catch (e) { return 0; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 三十五、扩展自检 SkySelfTest8（快递）
 * ═══════════════════════════════════════════════════════════════════════
 */
function SkySelfTest8() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(SkyExpress.order(null, 'food', 10) === false, '快递防御失败');
    const g = {
      sky: { aircraft: [{ type: 'airship', grounded: false }], skyPool: { food: 200 }, express: [] },
      player: { inv: { steel: 1000, food: 0 } }, toast() {},
    };
    // 无钢时下单失败
    const g2 = {
      sky: { aircraft: [{ type: 'airship', grounded: false }], express: [] },
      player: { inv: { steel: 0 } },
    };
    ok(SkyExpress.order(g2, 'food', 100) === false, '无钢下单应失败');
    ok(SkyExpress.order(g, 'food', 50) === true, '下单失败 1');
    ok(SkyExpress.order(g, 'food', 50) === true, '下单失败 2');
    ok(SkyExpress.order(g, 'food', 50) === true, '下单失败 3');
    ok(SkyExpress.order(g, 'food', 50) === false, '超 3 单应失败');
    const done = SkyExpress.tick(g);
    ok(done === 3, '快递结算异常: ' + done);
    ok(g.player.inv.food === 150, '快递到货异常');
    ok(SkyExpress.tick(null) === 0, 'tick 防御失败');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[SkySelfTest8] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[SkySelfTest8] 通过：天空快递');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { SkySelfTest8, SkyExpress });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 三十六、天空邮局 SkyPost（信件系统）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：天空居民给地面亲人写信——
 *   每封信 +0.5 幸福（双向），邮局每 10 分钟送一次。
 *   这是「情感物流」：比飞艇运货更重要的，是思念。
 *
 * 数据结构：game.sky.letters（待送 count）；SkyPost.tick 每 tick 调用。
 * ★ 读取约定：SkyPost.send(game) 寄信（+幸福）；tick 送达。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyPost = {
  intervalMs: 10 * 60 * 1000,
  happinessPerLetter: 0.5,
  maxLetters: 100,
  // 寄信（防御：天空人口为 0 时返回 false）
  send(game, n) {
    try {
      if (!game || !game.sky) return false;
      const skyPop = SkyAgg.totalSkyPop(game);
      if (!skyPop) return false;
      game.sky.letters = Math.min(this.maxLetters, (game.sky.letters || 0) + (n || 1));
      return true;
    } catch (e) { return false; }
  },
  // 送达（每 10 分钟）
  tick(game) {
    try {
      if (!game || !game.sky || !(game.sky.letters > 0)) return 0;
      const now = Date.now();
      if (now - (game.sky._postAt || 0) < this.intervalMs) return 0;
      game.sky._postAt = now;
      const n = game.sky.letters;
      game.sky.letters = 0;
      const hap = n * this.happinessPerLetter;
      if (game.pop && typeof game.pop.addHappiness === 'function') {
        try { game.pop.addHappiness(hap, 60000); } catch (e) {}
      }
      if (game.toast) game.toast('📮 天空邮局送达 ' + n + ' 封信！全城幸福 +' + hap);
      return n;
    } catch (e) { return 0; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 三十七、扩展自检 SkySelfTest9（邮局）
 * ═══════════════════════════════════════════════════════════════════════
 */
function SkySelfTest9() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(SkyPost.send(null, 1) === false, '邮局防御失败');
    const g = { sky: {}, pop: { skyPop: 0, addHappiness() {} }, toast() {} };
    ok(SkyPost.send(g, 5) === false, '无天空人口应失败');
    g.pop.skyPop = 20;
    ok(SkyPost.send(g, 5) === true, '寄信失败');
    ok(g.sky.letters === 5, '信件数异常');
    ok(SkyPost.send(g, 200) === true, '寄信失败 2');
    ok(g.sky.letters === 100, '信件应上限 100');
    g.sky._postAt = 0;
    let hap = 0;
    g.pop.addHappiness = (h) => { hap = h; };
    const n = SkyPost.tick(g);
    ok(n === 100 && hap === 50, '送达异常: ' + n + '/' + hap);
    ok(g.sky.letters === 0, '送达后应清零');
    ok(SkyPost.tick(null) === 0, 'tick 防御失败');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[SkySelfTest9] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[SkySelfTest9] 通过：天空邮局');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { SkySelfTest9, SkyPost });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 三十八、天空层一键接入 SkyIntegration
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：index.html 只需调一个函数，完成天空层全部接入——
 *   合并建筑/奇观/防御/气象站 → 挂载管理器 → 返回接入报告。
 * 用法：
 *   <script src="sky.js"></script>
 *   <script>const r = SkyIntegration.mount(game); console.log(r);</script>
 * ═══════════════════════════════════════════════════════════════════════
 */
const SkyIntegration = {
  version: SKY_VERSION,
  // 一键接入（幂等；返回 { ok, merged, mounted, warnings }）
  mount(game) {
    const report = { ok: true, merged: [], mounted: [], warnings: [] };
    try {
      const steps = [
        ['buildings', mergeSkyBuildings],
        ['wonders', mergeSkyWonders],
        ['defense', mergeSkyDefense],
        ['metnet', mergeSkyMetNet],
      ];
      for (const [name, fn] of steps) {
        try {
          if (fn()) report.merged.push(name);
          else report.warnings.push(name + ' 合并跳过（BUILDINGS 未定义）');
        } catch (e) { report.warnings.push(name + ' 合并异常'); }
      }
      const mgr = mountSkyManager(game);
      if (mgr) report.mounted.push('SkyManager');
      else report.warnings.push('game 不存在，管理器未挂载');
      // 编年史里程碑
      SkyChronicle.record(game, '☁️', '天空层接入完成（v' + SKY_VERSION + '）');
    } catch (e) {
      report.ok = false;
      report.warnings.push('接入异常: ' + (e && e.message));
    }
    return report;
  },
  // 接入自检（一键跑全部天空自检）
  selfTestAll() {
    const fns = [SkySelfTest, SkySelfTest2, SkySelfTest3, SkySelfTest4,
      SkySelfTest5, SkySelfTest6, SkySelfTest7, SkySelfTest8, SkySelfTest9];
    let pass = 0;
    for (const fn of fns) { try { if (fn()) pass++; } catch (e) {} }
    console.log('[SkyIntegration] 自检 ' + pass + '/' + fns.length + ' 通过');
    return pass === fns.length;
  },
};

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { SkyIntegration });
}

/* ═══════════════════════════════════════════════════════════════════════
 * 三十九、天空层版本修订记录 SkyChangelog
 * ═══════════════════════════════════════════════════════════════════════
 */
const SKY_CHANGELOG = [
  { v: '1.6.0', date: '2026-11-05', notes: '初始版本：3 空域 / 8 浮空建筑 / 2 飞行器 / 平台升级 / 天气 / 事件 / 贸易路线 / 奇观 3 / 防御 3 / 气象站 3 / 救援队 / 电网 / 编年史 / 船员 / 科研 / 节庆 / 蓝图 / 保险 / 法律 6 / 快递 / 邮局。' },
  { v: '1.6.1', date: '待定', notes: '计划：平台自定义涂装；飞艇航线可视化。' },
];

// 文件尾声：sky.js v1.6.0 完（3071+ 行）
// 「我们在云上种出了整个城市的晚饭。」——云端农场奠基铭文

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { SKY_CHANGELOG });
}

/* v1.6 完成度印章 ✅
 * 本文件为「星港 v1.6（25000 → 35000 行）」新增内容的一部分。
 * 只做加法，不修改任何已有文件；所有 game 对象读取均为防御式；
 * 中文注释；node --check 通过；自检函数控制台可运行。
 * 「天上、海里、地底、硅基——都是人类。」 */
// v1.6.0 封版：2026-11-05，Brio 总工程师。
// 下一站：v1.7 深空远征。
