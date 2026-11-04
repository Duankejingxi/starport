/* 星港 — deep_space.js：v1.4 深空探索（探测器 / 采矿船队 / 遗迹） */

/* =====================================================================
 * 星港 v1.4 —— 深空探索系统
 * ---------------------------------------------------------------------
 * 内容：探测器派遣 / 采矿船队自动往返 / 8 个探索目标 / 3 处外星遗迹 /
 *       船只三系升级（引擎·货舱·护盾）/ 深空事件（太阳风暴·海盗·故障）/
 *       深空日志 / 存档
 *
 * 设计原则（纯机制，无剧情）：
 *   1. 时间模型：进度制（progress 0→1），update(now, game) 内用
 *      dt = now - 上次 tick 自动推进；game.speedMode === 2 时 2 倍速，
 *      暂停时主循环不调用 update，舰船自然停摆。
 *   2. 所有 game 接口防御性读取：game.player.inv / game.builder.buildings /
 *      game.orbital?.drydockLevel() / game.toast / game.sound /
 *      game.tech.has(id) / game.military.defensePower，缺谁都不崩。
 *   3. 数值锚点见下方「数值平衡」注释（以 resources.js 的 RES_VALUE 为准：
 *      铁1 / 冰1 / 稀土3 / 铀8 / 氦3=15 / 钢材4 / 科技10）。
 *
 * 集成（给 game.js / index.html，接入方照抄即可）：
 *   index.html：在 build.js 系之后、game.js 之前加
 *     <script src="deep_space.js"></script>
 *   game.js 构造函数：
 *     this.deepSpace = new DeepSpaceManager();
 *     if (this.deepSpace.bindUI) this.deepSpace.bindUI(this);
 *   game.js tick(...) 内：
 *     if (this.deepSpace) this.deepSpace.update(now, this);
 *   game.js save() 的 data 里加：
 *     deepSpace: this.deepSpace ? this.deepSpace.save() : null,
 *   game.js load() 里加：
 *     if (data.deepSpace && this.deepSpace) this.deepSpace.load(data.deepSpace);
 *   全产量加成（遗迹 α）在建筑产量处乘：
 *     const dsMul = game.deepSpace ? game.deepSpace.getBuffs().prodMul : 1;
 * ===================================================================== */

// ---------------------------------------------------------------------
// 🧮 数值平衡总表（调数值只改这里，注释写清期望收益）
// ---------------------------------------------------------------------
const DS_TUNE = {
  // —— 舰船造价（价值锚：钢=4，科技=10 → 探测器≈130，船队≈520）——
  PROBE_COST: { steel: 20, tech: 5 },     // 🛰️ 探测器：可重复使用
  FLEET_COST: { steel: 80, tech: 20 },    // ⛏️ 采矿船队：自动往返印钞机，贵且需船坞
  REPAIR_COST: { steel: 15 },             // 🔧 故障维修：便宜，鼓励修而不是重造

  // —— 舰船上限：船坞等级（轨道船坞科技 t-orb-5 / 太空港等级）决定 ——
  // 探测器上限 = 1 + 船坞等级（0~3 → 1~4 艘）；船队上限 = 船坞等级（无船坞=0）
  PROBE_CAP_BASE: 1,
  PROBE_CAP_PER_DRYDOCK: 1,
  FLEET_CAP_PER_DRYDOCK: 1,

  // —— 升级：每系 3 级，成本递增，效果乘区独立 ——
  // 引擎：航速 +20%/级 → 航程耗时 ×0.85^级（三级≈0.61，即 -39% 航时）
  // 货舱：船队运量 +30%/级（×1.3^级）；探测收获 +15%/级（×1.15^级）
  // 护盾：故障率 ×0.6^级；海盗损失 ×0.5^级；漩涡存活 +10%/级

  // —— 深空事件：每次掷骰间隔 100~180 秒，且至少有 1 艘在航船 ——
  EVENT_MIN_GAP: 100000,
  EVENT_MAX_GAP: 180000,
  EVENT_W_STORM: 0.35,        // 🌞 太阳风暴权重
  EVENT_W_PIRATE: 0.30,       // 🏴‍☠️ 海盗权重（剩余 0.35 归故障事件）
  PIRATE_BASE_LOSS: 0.40,     // 🏴‍☠️ 海盗得手：扣 40% 货物（护盾每级减半）
  PIRATE_NO_MIL_LOSS: 0.30,   // 无军事系统时：固定扣 30%（护盾 2 级以上可闪避）
  STORM_SLOW: 0.35,           // 🌞 太阳风暴：航速降至 35%，持续 60 秒
  STORM_DURATION: 60000,
  FAULT_BASE_CHANCE: 0.22,    // 🔧 故障事件基础概率（护盾每级 ×0.6）
  FAULT_MIN_MS: 60000,        // 故障持续 60~120 秒
  FAULT_MAX_MS: 120000,

  // —— 漩涡 ——
  VORTEX_LOSS_BASE: 0.35,     // 🌀 探测器损失率 35%（护盾每级 -10%，最低 5%）

  // —— 日志 ——
  LOG_MAX: 20,                // 📜 深空日志只保留最近 20 条
  PANEL_REFRESH_MS: 1000,     // 🖥️ 面板打开时每秒刷新一次（含进度条）
  DT_CLAMP_MS: 120000,        // 单次 tick 最多推进 120 秒（防切后台跳变过大）
};

// ---------------------------------------------------------------------
// 🛠️ 船只升级定义：引擎 / 货舱 / 护盾（各 3 级）
// ---------------------------------------------------------------------
const DS_UPGRADES = {
  engine: {
    id: 'engine', name: '引擎', icon: '🚀',
    desc: '聚变推进器升级，缩短一切航程耗时',
    fxText: ['航程耗时 ×0.85', '航程耗时 ×0.72', '航程耗时 ×0.61'],
    cost: [{ tech: 30 }, { tech: 80 }, { tech: 160 }],
    // 平衡：1 级≈-15% 航时，3 级≈-39%；科技 30/80/160 对标实验室中后期产出
  },
  cargo: {
    id: 'cargo', name: '货舱', icon: '📦',
    desc: '模块化货舱扩展，提高单次运载量',
    fxText: ['船队+30% / 探测+15%', '船队+69% / 探测+32%', '船队+120% / 探测+52%'],
    cost: [{ steel: 30, tech: 20 }, { steel: 80, tech: 50 }, { steel: 150, tech: 100 }],
    // 平衡：船队是被动收入主力，货舱是最强乘区，成本用钢+科技双收
  },
  shield: {
    id: 'shield', name: '护盾', icon: '🛡️',
    desc: '偏导护盾，抵御故障、海盗与漩涡',
    fxText: ['故障-40% / 海盗损失减半', '故障-64% / 海盗损失×0.25', '故障-78% / 漩涡存活+30%'],
    cost: [{ steel: 40, tech: 30 }, { steel: 100, tech: 70 }, { steel: 200, tech: 140 }],
    // 平衡：保险型升级，前期可跳过，后期跑漩涡/柯伊伯必备
  },
};
const DS_UPGRADE_ORDER = ['engine', 'cargo', 'shield'];

// ---------------------------------------------------------------------
// 🎯 探索目标 DESTINATIONS（8 个）
// ---------------------------------------------------------------------
// 字段说明：
//   id        目标唯一 id（存档引用，勿改）
//   name/icon 展示名
//   dist      距离（展示用）
//   timeSec   单程航行秒数（返程 = 60%；引擎升级按 ×0.85^级 缩短）
//   danger    危险度 1~5（展示用，影响事件文案，不直接参与骰子）
//   needTech  需要的科技 id（无则 null；防御性：无 tech 系统时视为已解锁）
//   needNote  科技未解锁时的提示文案
//   flavor    一句设定（纯设定，无剧情）
//   lootNote  收获预览（展示用）
//   loot      发现表：多档加权随机，每档 { w: 权重, label: 展示名, res: {资源:[min,max]} }
//             期望价值注释写在每档后面，锚定 RES_VALUE（铁1/稀土3/铀8/氦3=15/科技10）
//   special   特殊目标：null | 'anomaly' | 'ruins' | 'vortex'
//   riskNote  风险说明（展示用）
// ---------------------------------------------------------------------
const DESTINATIONS = [
  // =================================================================
  // 🪨 目标 1：近地小行星带 —— 新手矿场，铁/稀土
  // =================================================================
  {
    id: 'near_belt', name: '近地小行星带', icon: '🪨',
    dist: '0.05 AU', distKm: '约 750 万公里',
    timeSec: 40, danger: 1,
    needTech: null, needNote: '',
    flavor: '火星轨道外侧的碎石带，采矿船队的第一个钱袋子。',
    lootNote: '🟤铁矿 / 🟣稀土',
    riskNote: '几乎无风险，偶尔遇到漂浮的远古探测器残骸。',
    special: null,
    // 发现表（期望价值/次 ≈ 55，往返 64 秒 → 约 0.86 价值/秒，中期稳定粮仓）
    loot: [
      // 55%：铁矿富集 —— 期望铁 50 → 价值 50
      { w: 55, label: '铁矿富集带', res: { iron: [30, 70] } },
      // 30%：稀土矿脉 —— 期望稀土 11（33）+ 铁 20（20）= 53
      { w: 30, label: '稀土矿脉', res: { rare: [6, 16], iron: [10, 30] } },
      // 12%：金属小行星 —— 期望铁 90（90）+ 稀土 7（21）= 111，大奖档
      { w: 12, label: '金属小行星核心', res: { iron: [60, 120], rare: [4, 10] } },
      // 3%：远古探测器残骸 —— 科技 7（70）+ 钢 17（68）= 138，欧皇档
      { w: 3, label: '远古探测器残骸', res: { tech: [4, 10], steel: [10, 25] } },
    ],
  },

  // =================================================================
  // 🌕 目标 2：火卫一（福波斯）—— 冰水
  // =================================================================
  {
    id: 'phobos', name: '火卫一', icon: '🌕',
    dist: '9,376 km', distKm: '火星同步轨道内侧',
    timeSec: 70, danger: 1,
    needTech: null, needNote: '',
    flavor: '布满 Stickney 撞击坑的小月亮，表面下藏着水冰。',
    lootNote: '🧊冰水 / 💧水',
    riskNote: '潮汐力强，着陆窗口短，偶发通讯延迟。',
    special: null,
    // 发现表（期望价值/次 ≈ 78，往返 112 秒 → 约 0.70 价值/秒，水线刚需）
    loot: [
      // 55%：表层冰 —— 期望冰 65 → 价值 65（冰=1，但水是人口刚需，实际价值更高）
      { w: 55, label: '表层水冰', res: { ice: [40, 90] } },
      // 30%：冰下卤水 —— 期望冰 45（45）+ 水 25（25）= 70
      { w: 30, label: '冰下卤水囊', res: { ice: [30, 60], water: [15, 35] } },
      // 12%：撞击坑矿 —— 期望冰 90（90）+ 稀土 5.5（16.5）= 106
      { w: 12, label: 'Stickney 坑底矿层', res: { ice: [60, 120], rare: [3, 8] } },
      // 3%：潮汐加热异常 —— 科技 8.5（85）+ 冰 30（30）= 115
      { w: 3, label: '潮汐加热异常点', res: { tech: [5, 12], ice: [20, 40] } },
    ],
  },

  // =================================================================
  // 🌕 目标 3：火卫二（德莫斯）—— 稀土
  // =================================================================
  {
    id: 'deimos', name: '火卫二', icon: '🌕',
    dist: '23,463 km', distKm: '火星外侧小卫星',
    timeSec: 90, danger: 2,
    needTech: null, needNote: '',
    flavor: '覆盖着厚厚表土的暗红小卫星，稀土元素异常富集。',
    lootNote: '🟣稀土 / ☢️微量铀',
    riskNote: '表土松软，采样臂偶发卡死（纯展示，不扣减）。',
    special: null,
    // 发现表（期望价值/次 ≈ 95，往返 144 秒 → 约 0.66 价值/秒，稀土专线）
    loot: [
      // 50%：稀土富集 —— 期望稀土 18 → 价值 54
      { w: 50, label: '稀土富集表土', res: { rare: [10, 26] } },
      // 30%：表土样本 —— 期望稀土 10（30）+ 铁 35（35）= 65
      { w: 30, label: '深层表土样本', res: { rare: [6, 14], iron: [20, 50] } },
      // 15%：碳质球粒 —— 期望稀土 26（78）+ 科技 4（40）= 118
      { w: 15, label: '碳质球粒陨石', res: { rare: [16, 36], tech: [2, 6] } },
      // 5%：外来溅射物 —— 期望铀 4（32）+ 稀土 13（39）= 71，附带铀矿前置体验
      { w: 5, label: '外来溅射物', res: { uranium: [2, 6], rare: [8, 18] } },
    ],
  },

  // =================================================================
  // ☄️ 目标 4：主带小行星 —— 铀矿（需科技：小行星采矿 t-orb-7）
  // =================================================================
  {
    id: 'main_belt', name: '主带小行星', icon: '☄️',
    dist: '2.7 AU', distKm: '火星与木星之间',
    timeSec: 140, danger: 3,
    needTech: 't-orb-7', needNote: '需要科技「小行星采矿」（轨道系）',
    flavor: '柯克伍德空隙之外的碎石海洋，铀矿在金属小行星核心中闪光。',
    lootNote: '☢️铀矿 / 🟣稀土',
    riskNote: '微陨石密集，偶发船体轻微受损（该次收获 -30%）。',
    special: null,
    // 发现表（期望价值/次 ≈ 150，往返 224 秒 → 约 0.67 价值/秒，铀矿专线）
    loot: [
      // 50%：铀矿 —— 期望铀 9.5 → 价值 76
      { w: 50, label: '铀矿脉', res: { uranium: [5, 14] } },
      // 28%：铀+稀土 —— 期望铀 7（56）+ 稀土 11（33）= 89
      { w: 28, label: '铀-稀土共生矿', res: { uranium: [4, 10], rare: [6, 16] } },
      // 15%：金属核心碎片 —— 期望铀 14（112）+ 铁 65（65）= 177，大奖档
      { w: 15, label: '分化小行星核心碎片', res: { uranium: [8, 20], iron: [40, 90] } },
      // 7%：微陨石撞击 —— 收获打 7 折，期望铀 6（48）×0.7 ≈ 34，风险档
      { w: 7, label: '微陨石撞击（船体受损）', res: { uranium: [4, 8] }, yieldMul: 0.7,
        note: '船体被微陨石击中，本次收获 -30%' },
    ],
  },

  // =================================================================
  // 🌌 目标 5：柯伊伯带 —— 氦3（需科技：氦3聚变 t-orb-12）
  // =================================================================
  {
    id: 'kuiper', name: '柯伊伯带', icon: '🌌',
    dist: '40 AU', distKm: '海王星轨道之外',
    timeSec: 300, danger: 4,
    needTech: 't-orb-12', needNote: '需要科技「氦3聚变」（轨道系）',
    flavor: '太阳系边缘的冰封荒原，古老天体封存着聚变燃料。',
    lootNote: '🌌氦3 / 🔬科技',
    riskNote: '超远距离，通讯延迟以小时计，返程燃料余量紧张。',
    special: null,
    // 发现表（期望价值/次 ≈ 200，往返 480 秒 → 约 0.42 价值/秒；
    // 单位时间不如内圈，但氦3是终极科技材料，价值在"稀缺性"不在"效率"）
    loot: [
      // 50%：氦3冰 —— 期望氦3 4.5 → 价值 67.5
      { w: 50, label: '富氦3冰体', res: { he3: [2, 7] } },
      // 30%：氮冰+氦3 —— 期望氦3 3.5（52.5）+ 冰 70（70）= 122.5
      { w: 30, label: '氮冰混合体', res: { he3: [2, 5], ice: [40, 100] } },
      // 15%：富氦3天体 —— 期望氦3 8.5 → 价值 127.5，大奖档
      { w: 15, label: '高丰度氦3天体', res: { he3: [5, 12] } },
      // 5%：星际访客碎片 —— 期望氦3 6.5（97.5）+ 科技 13（130）= 227.5，欧皇档
      { w: 5, label: '星际访客碎片', res: { he3: [4, 9], tech: [8, 18] } },
    ],
  },

  // =================================================================
  // 🛸 目标 6：异常信号源 —— 随机：资源大礼包 / 遗迹坐标（需科技：深空网络 t-orb-4）
  // =================================================================
  {
    id: 'anomaly', name: '异常信号源', icon: '🛸',
    dist: '???', distKm: '信号源位置持续漂移',
    timeSec: 110, danger: 2,
    needTech: 't-orb-4', needNote: '需要科技「深空网络」（轨道系）',
    flavor: '深空天线捕捉到的窄带信号，每次响起的位置都不一样。',
    lootNote: '🎁资源大礼包 / 🏛️遗迹坐标',
    riskNote: '三分之一是宇宙噪声，探测器可能空手而归。',
    special: 'anomaly',
    // 发现表：特殊目标，loot 仅用于"资源大礼包"档；
    // 遗迹坐标档由 _resolveAnomaly() 单独处理（35% 权重，逐个揭示遗迹）
    loot: [
      // 资源大礼包 —— 期望钢 50（200）+ 科技 10（100）+ 稀土 14（42）= 342
      { w: 40, label: '信号源残骸打捞', res: { steel: [30, 70], tech: [6, 14], rare: [8, 20] } },
      // 空信号 —— 只有背景噪声，期望科技 3.5（35），安慰奖
      { w: 25, label: '宇宙噪声（空信号）', res: { tech: [2, 5] } },
      // 注意：剩余 35% 权重在代码中实现为"遗迹坐标"特殊事件，不在此表
    ],
    anomalyGiftW: 40,   // 🎁 大礼包权重
    anomalyEmptyW: 25,  // 📻 空信号权重
    anomalyRuinW: 35,   // 🏛️ 遗迹坐标权重（遗迹全揭示后自动转为大礼包）
  },

  // =================================================================
  // 🏛️ 目标 7：外星遗迹 —— 一次性强力加成（需先由异常信号源揭示坐标）
  // =================================================================
  {
    id: 'ruins', name: '外星遗迹', icon: '🏛️',
    dist: '已加密', distKm: '坐标由异常信号源提供',
    timeSec: 180, danger: 2,
    needTech: null, needNote: '',
    needRuin: true,  // 🚩 特殊门禁：至少揭示 1 处未领取遗迹
    flavor: '三处沉默的造物，等待第一个访客。发现即永久生效。',
    lootNote: '🏛️永久增益（一处遗迹/次）',
    riskNote: '无风险。遗迹不会反击，它只是在"等待"。',
    special: 'ruins',
    loot: [],  // 遗迹无随机表，收获 = 领取遗迹加成（见 RUINS）
  },

  // =================================================================
  // 🌀 目标 8：深空漩涡 —— 高风险高回报（需科技：星门理论 t-orb-13）
  // =================================================================
  {
    id: 'vortex', name: '深空漩涡', icon: '🌀',
    dist: '11 AU', distKm: '黄道面之上，未知引力异常',
    timeSec: 220, danger: 5,
    needTech: 't-orb-13', needNote: '需要科技「星门理论」（轨道系）',
    flavor: '时空曲率异常区，进去的探测器有的带回了整船宝藏，有的再也没回来。',
    lootNote: '💰巨额随机资源 / 💥探测器损失',
    riskNote: '35% 概率损失探测器（护盾每级 -10%，最低 5%）；成功则收获翻倍级。',
    special: 'vortex',
    // 发现表（成功时掷骰；期望价值/次 ≈ 成功率65% × 480 ≈ 312，
    // 往返 352 秒 → 约 0.89 价值/秒，全游戏最高，但附带 35% 沉没成本）
    loot: [
      // 40%：漩涡内环 —— 期望氦3 7（105）+ 铀 11（88）+ 科技 12（120）= 313
      { w: 40, label: '漩涡内环物质流', res: { he3: [4, 10], uranium: [6, 16], tech: [8, 16] } },
      // 35%：抛射物云 —— 期望稀土 30（90）+ 钢 90（360）+ 铁 100（100）= 550
      { w: 35, label: '高能抛射物云', res: { rare: [20, 40], steel: [60, 120], iron: [60, 140] } },
      // 25%：奇点回响 —— 期望科技 25（250）+ 氦3 8（120）= 370，欧皇档
      { w: 25, label: '奇点回响', res: { tech: [15, 35], he3: [5, 11] } },
    ],
  },
];

// 🎯 按 id 查目标（防御性：找不到返回 null）
function dsFindDest(id) {
  for (const d of DESTINATIONS) if (d.id === id) return d;
  return null;
}

// ---------------------------------------------------------------------
// 🏛️ 外星遗迹 RUINS（3 处，无剧情，纯机制）
// ---------------------------------------------------------------------
// 规则：
//   1. 初始 state='hidden'（未揭示）；异常信号源 35% 概率揭示下一处 hidden→revealed
//   2. revealed 的遗迹可派遣探测器前往「外星遗迹」目标领取（一次一处）
//   3. 领取后 state='claimed'，加成立即永久生效，存档保留
//   4. 文案只写一句设定，不写故事
// ---------------------------------------------------------------------
const DS_RUINS = [
  {
    id: 'ruin_alpha',
    name: '十二面体方尖碑', icon: '🏛️',
    flavor: '水手谷裂隙深处，一座正十二面体的黑色方尖碑静静悬浮，表面流转着暗金色纹路。',
    buffName: '全产量 +10%',
    buffDesc: '城市所有建筑产量 +10%（通过 getBuffs().prodMul 读取，game.js 产量处相乘）',
    buffKey: 'prodMul', buffValue: 1.10,
    // 平衡：全游戏最强乘区之一，但只+10%，且需走完"天线→深空网络→异常信号→遗迹"整条链
  },
  {
    id: 'ruin_beta',
    name: '环形星门', icon: '🌀',
    flavor: '奥林帕斯山背阴面，半埋的环形舱门上刻满未知星图，中央仍有微光闪烁。',
    buffName: '舰船航速 +25%',
    buffDesc: '所有探测器/船队航程耗时 ×0.8（与引擎升级乘区叠加）',
    buffKey: 'speedMul', buffValue: 1.25,
    // 平衡：约等于 1.6 级引擎，缩短一切深空等待，与引擎升级乘法叠加不溢出
  },
  {
    id: 'ruin_gamma',
    name: '休眠采集矩阵', icon: '⛏️',
    flavor: '极地冰盖之下，休眠的采集矩阵仍在低鸣，机械臂齐齐指向小行星带。',
    buffName: '船队运量 +50%',
    buffDesc: '采矿船队每次卸货 +50%（与货舱升级乘区叠加）',
    buffKey: 'haulMul', buffValue: 1.50,
    // 平衡：船队是被动收入核心，+50% 约等于 1.4 级货舱，后期质变
  },
];

// 🏛️ 按 id 查遗迹定义
function dsFindRuin(id) {
  for (const r of DS_RUINS) if (r.id === id) return r;
  return null;
}

// ---------------------------------------------------------------------
// 🌠 DeepSpaceManager：深空探索总控
// ---------------------------------------------------------------------
// 舰船模型（探测器 / 采矿船队共用结构）：
//   {
//     id: 'P-1', kind: 'probe'|'fleet', name: '探测器 P-1',
//     state: 'idle' | 'out' | 'mine' | 'back' | 'broken',
//     targetId: 'near_belt',          // 当前任务目标（船队固定 near_belt）
//     leg: 0..1,                      // 当前航段进度
//     legDurMs: 40000,                // 当前航段总时长（ms）
//     cargo: null,                    // 返程货物（_rollLoot 结果，卸货时结算）
//     brokenMs: 0,                    // 故障剩余 ms
//     note: '',                       // 状态备注（如故障原因）
//   }
// 航段流转：
//   探测器：idle → out(去程) → back(返程) → idle（两端 arrival 时结算）
//   船队：  idle → out → mine(采矿 40s) → back → idle（自动循环往返）
// ---------------------------------------------------------------------
class DeepSpaceManager {
  constructor() {
    this.probes = [];          // 🛰️ 探测器数组
    this.fleets = [];          // ⛏️ 采矿船队数组
    this.upgrades = { engine: 0, cargo: 0, shield: 0 };  // ⬆️ 三系升级等级
    this.ruins = DS_RUINS.map(r => ({ id: r.id, state: 'hidden' }));  // 🏛️ 遗迹状态
    this.buffs = { prodMul: 1, speedMul: 1, haulMul: 1 };  // ✨ 遗迹永久加成
    this.log = [];             // 📜 深空日志（最近 20 条）
    this.stats = {             // 📊 统计
      probesLaunched: 0, fleetsLaunched: 0,
      hauls: 0, ruinsClaimed: 0, shipsLost: 0,
      piratesRepelled: 0, piratesHit: 0, faults: 0,
    };
    this._seq = 0;             // 🔢 舰船编号
    this._lastTick = 0;        // ⏱️ 上次 update 时间戳
    this._nextEventAt = 0;     // 🎲 下次深空事件时间
    this._stormUntil = 0;      // 🌞 太阳风暴干扰结束时间
    this._panelAt = 0;         // 🖥️ 面板节流刷新
    this._bound = false;       // UI 是否已绑定
    this._log('🌠 深空探索系统初始化。建造深空天线以解锁。');
  }

  // ================= 防御性 game 接口 =================

  // 📦 背包（缺则返回替身对象，写操作静默丢弃）
  _inv(game) {
    if (game && game.player && game.player.inv) return game.player.inv;
    return {};
  }

  // 🔔 toast（缺则忽略）
  _toast(game, msg) {
    try {
      if (game && typeof game.toast === 'function') game.toast(msg);
    } catch (e) {}
  }

  // 🔊 音效：优先 game.sound.play(name)，退化为 game.sound[name]()
  _sfx(game, name) {
    try {
      const s = game && game.sound;
      if (!s) return;
      if (typeof s.play === 'function') { s.play(name); return; }
      if (typeof s[name] === 'function') { s[name](); }
    } catch (e) {}
  }

  // 🏗️ 建筑列表
  _buildings(game) {
    if (game && game.builder && Array.isArray(game.builder.buildings)) {
      return game.builder.buildings;
    }
    return [];
  }

  // 🔓 解锁判定：拥有深空天线（兼容实际 id 'antenna' 与规划 id 'deep_antenna'）
  isUnlocked(game) {
    const bs = this._buildings(game);
    return bs.some(b => b && (b.id === 'deep_antenna' || b.id === 'antenna'));
  }

  // 🛸 是否有太空港（船队前置的建筑判定）
  hasSpaceport(game) {
    return this._buildings(game).some(b => b && b.id === 'spaceport');
  }

  // 🏗️ 船坞等级：优先 game.orbital.drydockLevel()，退化为太空港建筑等级
  drydockLevel(game) {
    try {
      if (game && game.orbital && typeof game.orbital.drydockLevel === 'function') {
        const lv = game.orbital.drydockLevel();
        if (typeof lv === 'number' && lv >= 0) return Math.floor(lv);
      }
    } catch (e) {}
    // 退化：太空港等级即船坞等级（建筑 entries 的 level 字段，无则按 1 级计）
    const sp = this._buildings(game).find(b => b && b.id === 'spaceport');
    if (sp) return Math.max(1, sp.level || 1);
    return 0;
  }

  // 🚀 舰船上限
  probeCap(game) {
    return DS_TUNE.PROBE_CAP_BASE + this.drydockLevel(game) * DS_TUNE.PROBE_CAP_PER_DRYDOCK;
  }
  fleetCap(game) {
    return this.drydockLevel(game) * DS_TUNE.FLEET_CAP_PER_DRYDOCK;
  }

  // 🔬 科技门禁（防御性：无 tech 系统 / 无 has 方法时视为已解锁）
  _techOK(game, techId) {
    if (!techId) return true;
    try {
      if (game && game.tech && typeof game.tech.has === 'function') {
        return !!game.tech.has(techId);
      }
    } catch (e) {}
    return true;
  }

  // 🎯 目标是否可选（返回 {ok, reason}）
  destAvailable(dest, game) {
    if (!dest) return { ok: false, reason: '未知目标' };
    if (!this.isUnlocked(game)) return { ok: false, reason: '需要建造深空天线' };
    if (dest.needTech && !this._techOK(game, dest.needTech)) {
      return { ok: false, reason: dest.needNote || '科技未解锁' };
    }
    if (dest.needRuin) {
      const n = this.ruins.filter(r => r.state === 'revealed').length;
      if (n <= 0) return { ok: false, reason: '尚未发现遗迹坐标（派遣探测器调查异常信号源）' };
    }
    return { ok: true, reason: '' };
  }

  // ================= 乘区计算 =================

  // 🚀 航速乘区：引擎升级 × 遗迹β（返回"耗时倍率"，越小越快）
  _timeMul() {
    const eng = Math.pow(0.85, this.upgrades.engine || 0);
    const ruin = 1 / (this.buffs.speedMul || 1);
    return eng * ruin;
  }

  // 📦 船队运量乘区：货舱升级 × 遗迹γ × 遗迹α（全产量）
  _haulMul() {
    return Math.pow(1.3, this.upgrades.cargo || 0)
      * (this.buffs.haulMul || 1)
      * (this.buffs.prodMul || 1);
  }

  // 🛰️ 探测收获乘区：货舱（探测档）× 遗迹α
  _probeYieldMul() {
    return Math.pow(1.15, this.upgrades.cargo || 0) * (this.buffs.prodMul || 1);
  }

  // ✨ 对外：遗迹加成表（game.js 产量处读取 prodMul）
  getBuffs() {
    return { prodMul: this.buffs.prodMul, speedMul: this.buffs.speedMul, haulMul: this.buffs.haulMul };
  }

  // 📊 对外：深空总览（成就 / 统计系统可读，不含函数，JSON 安全）
  getSummary() {
    const ships = this.probes.concat(this.fleets);
    return {
      unlocked: true,
      probes: this.probes.length, fleets: this.fleets.length,
      activeShips: ships.filter(s => s.state === 'out' || s.state === 'mine' || s.state === 'back').length,
      brokenShips: ships.filter(s => s.state === 'broken').length,
      upgrades: Object.assign({}, this.upgrades),
      ruinsRevealed: this.ruins.filter(r => r.state === 'revealed').length,
      ruinsClaimed: this.ruins.filter(r => r.state === 'claimed').length,
      buffs: this.getBuffs(),
      stats: Object.assign({}, this.stats),
    };
  }

  // ================= 舰船派遣 =================

  // 🛰️ 派遣探测器（耗时按距离，目标列表 DESTINATIONS）
  launchProbe(targetId, game) {
    const dest = dsFindDest(targetId);
    if (!dest) { this._toast(game, '❓ 未知目标'); return false; }
    const av = this.destAvailable(dest, game);
    if (!av.ok) {
      this._toast(game, `🚫 ${dest.icon}${dest.name}：${av.reason}`);
      this._sfx(game, 'error');
      return false;
    }
    const alive = this.probes.length;
    const cap = this.probeCap(game);
    if (alive >= cap) {
      this._toast(game, `🚫 探测器已达上限（${alive}/${cap}），提升船坞等级以扩编`);
      this._sfx(game, 'error');
      return false;
    }
    const inv = this._inv(game);
    if (typeof canAfford === 'function' && !canAfford(inv, DS_TUNE.PROBE_COST)) {
      const miss = typeof missingRes === 'function' ? missingRes(inv, DS_TUNE.PROBE_COST) : '资源不足';
      this._toast(game, `🚫 建造探测器资源不足：缺${miss}`);
      this._sfx(game, 'error');
      return false;
    }
    if (typeof spendRes === 'function') spendRes(inv, DS_TUNE.PROBE_COST);
    else { inv.steel = (inv.steel || 0) - DS_TUNE.PROBE_COST.steel; inv.tech = (inv.tech || 0) - DS_TUNE.PROBE_COST.tech; }

    this._seq += 1;
    const ship = {
      id: 'P-' + this._seq, kind: 'probe', name: `探测器 P-${this._seq}`,
      state: 'out', targetId: dest.id,
      leg: 0, legDurMs: Math.round(dest.timeSec * 1000 * this._timeMul()),
      cargo: null, brokenMs: 0, note: '',
    };
    this.probes.push(ship);
    this.stats.probesLaunched += 1;
    this._log(`🛰️ ${ship.name} 出发 → ${dest.icon}${dest.name}（单程约 ${dest.timeSec} 秒）`);
    this._toast(game, `🛰️ ${ship.name} 出发：${dest.icon}${dest.name}`);
    this._sfx(game, 'truck');
    this._refreshPanelSoon(game);
    return true;
  }

  // ⛏️ 派遣采矿船队（需船坞/太空港，自动往返小行星带运资源）
  launchFleet(game) {
    if (!this.isUnlocked(game)) {
      this._toast(game, '🚫 需要先建造深空天线'); this._sfx(game, 'error'); return false;
    }
    if (!this.hasSpaceport(game) && this.drydockLevel(game) <= 0) {
      this._toast(game, '🚫 采矿船队需要船坞：先建造太空港'); this._sfx(game, 'error'); return false;
    }
    const cap = this.fleetCap(game);
    if (this.fleets.length >= cap) {
      this._toast(game, `🚫 船队已达上限（${this.fleets.length}/${cap}），提升船坞等级以扩编`);
      this._sfx(game, 'error'); return false;
    }
    const inv = this._inv(game);
    if (typeof canAfford === 'function' && !canAfford(inv, DS_TUNE.FLEET_COST)) {
      const miss = typeof missingRes === 'function' ? missingRes(inv, DS_TUNE.FLEET_COST) : '资源不足';
      this._toast(game, `🚫 建造采矿船队资源不足：缺${miss}`);
      this._sfx(game, 'error'); return false;
    }
    if (typeof spendRes === 'function') spendRes(inv, DS_TUNE.FLEET_COST);
    else { inv.steel = (inv.steel || 0) - DS_TUNE.FLEET_COST.steel; inv.tech = (inv.tech || 0) - DS_TUNE.FLEET_COST.tech; }

    this._seq += 1;
    const dest = dsFindDest('near_belt');
    const ship = {
      id: 'F-' + this._seq, kind: 'fleet', name: `采矿船队 F-${this._seq}`,
      state: 'out', targetId: 'near_belt',
      leg: 0, legDurMs: Math.round(dest.timeSec * 1000 * this._timeMul()),
      cargo: null, brokenMs: 0, note: '',
    };
    this.fleets.push(ship);
    this.stats.fleetsLaunched += 1;
    this._log(`⛏️ ${ship.name} 出发 → 🪨近地小行星带（自动往返采矿）`);
    this._toast(game, `⛏️ ${ship.name} 出发，自动往返小行星带`);
    this._sfx(game, 'truck');
    this._refreshPanelSoon(game);
    return true;
  }

  // ↩️ 召回舰船（返程不结算货物，直接回港待命）
  recallShip(shipId, game) {
    const ship = this._findShip(shipId);
    if (!ship) return false;
    if (ship.state === 'idle' || ship.state === 'broken') return false;
    ship.state = 'back';
    ship.leg = 0;
    ship.legDurMs = Math.round(ship.legDurMs * 0.6);  // 返程按 60% 航时
    ship.cargo = null;  // 召回放弃未结算货物
    ship.note = '召回中';
    this._log(`↩️ ${ship.name} 收到召回指令，正在返航`);
    this._toast(game, `↩️ ${ship.name} 返航中`);
    this._refreshPanelSoon(game);
    return true;
  }

  // 🔧 维修故障舰船
  repairShip(shipId, game) {
    const ship = this._findShip(shipId);
    if (!ship || ship.state !== 'broken') return false;
    const inv = this._inv(game);
    if (typeof canAfford === 'function' && !canAfford(inv, DS_TUNE.REPAIR_COST)) {
      const miss = typeof missingRes === 'function' ? missingRes(inv, DS_TUNE.REPAIR_COST) : '资源不足';
      this._toast(game, `🚫 维修资源不足：缺${miss}`); this._sfx(game, 'error'); return false;
    }
    if (typeof spendRes === 'function') spendRes(inv, DS_TUNE.REPAIR_COST);
    else { inv.steel = (inv.steel || 0) - DS_TUNE.REPAIR_COST.steel; }
    ship.state = 'idle'; ship.brokenMs = 0; ship.leg = 0; ship.note = '';
    this._log(`🔧 ${ship.name} 维修完成，恢复待命`);
    this._toast(game, `🔧 ${ship.name} 已修复`);
    this._sfx(game, 'repair');
    this._refreshPanelSoon(game);
    return true;
  }

  // ⬆️ 船只升级（引擎 / 货舱 / 护盾，各 3 级）
  upgrade(sysId, game) {
    const def = DS_UPGRADES[sysId];
    if (!def) return false;
    const lv = this.upgrades[sysId] || 0;
    if (lv >= 3) { this._toast(game, `${def.icon}${def.name}已满级`); return false; }
    const cost = def.cost[lv];
    const inv = this._inv(game);
    if (typeof canAfford === 'function' && !canAfford(inv, cost)) {
      const miss = typeof missingRes === 'function' ? missingRes(inv, cost) : '资源不足';
      this._toast(game, `🚫 ${def.icon}${def.name} Lv${lv + 1} 资源不足：缺${miss}`);
      this._sfx(game, 'error'); return false;
    }
    if (typeof spendRes === 'function') spendRes(inv, cost);
    else for (const k in cost) inv[k] = (inv[k] || 0) - cost[k];
    this.upgrades[sysId] = lv + 1;
    this._log(`⬆️ ${def.icon}${def.name} → Lv${lv + 1}（${def.fxText[lv]}）`);
    this._toast(game, `⬆️ ${def.icon}${def.name} 升级到 Lv${lv + 1}`);
    this._sfx(game, 'upgrade');
    this._refreshPanelSoon(game);
    return true;
  }

  // 🔎 按 id 找船（探测器 + 船队）
  _findShip(shipId) {
    for (const s of this.probes) if (s.id === shipId) return s;
    for (const s of this.fleets) if (s.id === shipId) return s;
    return null;
  }

  // ================= 主循环 =================

  // ⏱️ 舰船进度 tick、返航结算、深空事件掷骰、面板节流刷新
  //    由 game.js tick 内调用：if (this.deepSpace) this.deepSpace.update(now, this);
  update(now, game) {
    if (!this.isUnlocked(game)) { this._lastTick = now; return; }
    if (!this._lastTick) this._lastTick = now;
    let dt = now - this._lastTick;
    this._lastTick = now;
    if (dt < 0) dt = 0;
    if (dt > DS_TUNE.DT_CLAMP_MS) dt = DS_TUNE.DT_CLAMP_MS;  // 防切后台跳变
    // 双倍速：逻辑步进 ×2（暂停时主循环不调用本函数）
    const speed = (game && game.speedMode === 2) ? 2 : 1;
    // 🌞 太阳风暴干扰：航速降至 35%
    const storm = now < this._stormUntil;
    const rate = speed * (storm ? DS_TUNE.STORM_SLOW : 1);

    this._tickShips(this.probes, dt * rate, now, game);
    this._tickShips(this.fleets, dt * rate, now, game);
    // 💥 清理漩涡中损失的舰船
    const aliveP = this.probes.filter(s => !s._remove);
    if (aliveP.length !== this.probes.length) this.probes = aliveP;
    const aliveF = this.fleets.filter(s => !s._remove);
    if (aliveF.length !== this.fleets.length) this.fleets = aliveF;
    this._tickEvents(now, game);

    // 🖥️ 面板节流刷新
    if (now - this._panelAt > DS_TUNE.PANEL_REFRESH_MS) {
      this._panelAt = now;
      this.refreshPanel(game, now);
    }
  }

  // 🚀 推进一组舰船的航段进度
  _tickShips(ships, dtAdv, now, game) {
    for (const s of ships) {
      if (s.state === 'idle') continue;
      if (s.state === 'broken') {
        // 🔧 故障读秒（也可手动维修加速）
        s.brokenMs -= dtAdv;
        if (s.brokenMs <= 0) {
          s.state = 'idle'; s.brokenMs = 0; s.leg = 0; s.note = '';
          this._log(`🔧 ${s.name} 自检修复完成，恢复待命`);
        }
        continue;
      }
      if (s.legDurMs <= 0) s.legDurMs = 1000;
      s.leg += dtAdv / s.legDurMs;
      if (s.leg >= 1) this._arrive(s, now, game);
    }
  }

  // 📍 舰船抵达航段终点
  _arrive(s, now, game) {
    s.leg = 0;
    const dest = dsFindDest(s.targetId);
    if (s.kind === 'probe') {
      if (s.state === 'out') {
        // 🛰️ 探测器抵达目标：结算"发现"，转入返程
        this._resolveProbeSurvey(s, dest, game);
        s.state = 'back';
        s.legDurMs = Math.round(dest.timeSec * 1000 * 0.6 * this._timeMul());
      } else if (s.state === 'back') {
        // 🛰️ 探测器返航：交付货物（海盗可能半路打劫）
        this._deliverProbe(s, game);
        s.state = 'idle';
        s.targetId = null; s.note = '';
      }
    } else {
      // ⛏️ 船队自动循环：out → mine → back → out…
      if (s.state === 'out') {
        s.state = 'mine';
        s.legDurMs = 40000;  // ⛏️ 采矿作业 40 秒（固定，不受引擎影响）
        s.note = '采矿作业中';
      } else if (s.state === 'mine') {
        // ⛏️ 采矿完成：掷骰装货
        s.cargo = this._rollLoot(dest, this._haulMul(), 'fleet');
        s.state = 'back';
        s.legDurMs = Math.round(dest.timeSec * 1000 * 0.6 * this._timeMul());
        s.note = '满载返航';
      } else if (s.state === 'back') {
        // ⛏️ 船队返航：海盗检查 → 卸货 → 自动再次出发
        const kept = this._pirateCheck(s, game, true);
        this._unload(s, kept, game);
        s.state = 'out';
        s.leg = 0;
        s.legDurMs = Math.round(dest.timeSec * 1000 * this._timeMul());
        s.cargo = null; s.note = '';
      }
    }
  }

  // ================= 探测结算 =================

  // 🔍 探测器抵达目标：按目标类型结算"发现"
  _resolveProbeSurvey(s, dest, game) {
    if (!dest) { s.cargo = null; return; }
    const kind = dest.special;
    if (kind === 'anomaly') return this._resolveAnomaly(s, dest, game);
    if (kind === 'ruins') return this._resolveRuins(s, dest, game);
    if (kind === 'vortex') return this._resolveVortex(s, dest, game);
    // 普通目标：发现表掷骰
    s.cargo = this._rollLoot(dest, this._probeYieldMul(), 'probe');
    this._log(`🔍 ${s.name} 完成${dest.icon}${dest.name}勘测：${s.cargo.label}`);
  }

  // 🛸 异常信号源：40% 大礼包 / 25% 空信号 / 35% 遗迹坐标
  _resolveAnomaly(s, dest, game) {
    const wGift = dest.anomalyGiftW || 40;
    const wEmpty = dest.anomalyEmptyW || 25;
    let wRuin = dest.anomalyRuinW || 35;
    // 遗迹已全部揭示 → 坐标权重转给大礼包
    const hidden = this.ruins.filter(r => r.state === 'hidden');
    if (hidden.length === 0) wRuin = 0;
    const total = wGift + wEmpty + wRuin;
    const roll = Math.random() * total;
    if (roll < wGift + wEmpty && roll >= wGift) {
      // 📻 空信号
      s.cargo = this._rollLoot({ loot: dest.loot.filter(l => /空信号|噪声/.test(l.label)) }, this._probeYieldMul(), 'probe');
      if (!s.cargo) s.cargo = { label: '宇宙噪声', res: { tech: 3 } };
      this._log(`📻 ${s.name} 只收到背景噪声，空手而归`);
      return;
    }
    if (roll >= wGift + wEmpty) {
      // 🏛️ 遗迹坐标！
      const r = hidden[0];
      const def = dsFindRuin(r.id);
      r.state = 'revealed';
      s.cargo = { label: `遗迹坐标：${def.icon}${def.name}`, res: { tech: [6, 12] }, ruinId: r.id };
      this._log(`🏛️ ${s.name} 截获遗迹坐标 → ${def.icon}${def.name}！可派遣探测器前往领取`);
      this._toast(game, `🏛️ 发现遗迹坐标：${def.icon}${def.name}！`);
      this._sfx(game, 'achieve');
      return;
    }
    // 🎁 大礼包
    s.cargo = this._rollLoot({ loot: dest.loot.filter(l => !/空信号|噪声/.test(l.label)) }, this._probeYieldMul(), 'probe');
    this._log(`🎁 ${s.name} 打捞到信号源残骸：${s.cargo.label}`);
  }

  // 🏛️ 外星遗迹：领取第一处已揭示未领取的遗迹（一次性永久加成）
  _resolveRuins(s, dest, game) {
    const r = this.ruins.find(x => x.state === 'revealed');
    if (!r) { s.cargo = null; return; }
    const def = dsFindRuin(r.id);
    r.state = 'claimed';
    this.buffs[def.buffKey] = def.buffValue;
    this.stats.ruinsClaimed += 1;
    s.cargo = { label: `${def.icon}${def.name}：${def.buffName}`, res: {}, ruinClaimed: r.id };
    this._log(`🏛️ ${s.name} 激活${def.icon}${def.name} —— ${def.buffName}（永久生效）`);
    this._toast(game, `🏛️ 遗迹激活：${def.icon}${def.name} —— ${def.buffName}！`);
    this._sfx(game, 'victory');
  }

  // 🌀 深空漩涡：65% 成功（巨额收获）/ 35% 探测器损失
  _resolveVortex(s, dest, game) {
    const shieldLv = this.upgrades.shield || 0;
    const lossP = Math.max(0.05, DS_TUNE.VORTEX_LOSS_BASE - 0.10 * shieldLv);
    if (Math.random() < lossP) {
      // 💥 探测器被漩涡吞噬
      s.state = 'lost';
      this.stats.shipsLost += 1;
      this._log(`💥 ${s.name} 在🌀深空漩涡中失去信号……（探测器损失）`);
      this._toast(game, `💥 ${s.name} 在深空漩涡中失联！`);
      this._sfx(game, 'meteorHit');
      // 标记删除（_tickShips 跳过 lost，update 末尾清理）
      s._remove = true;
      return;
    }
    s.cargo = this._rollLoot(dest, this._probeYieldMul() * 1.0, 'probe');
    this._log(`🌀 ${s.name} 穿越漩涡并生还：${s.cargo.label}`);
    this._toast(game, `🌀 ${s.name} 穿越漩涡生还，满载而归！`);
  }

  // 📦 探测器返航交付（海盗小概率打劫探测器）
  _deliverProbe(s, game) {
    if (!s.cargo) return;
    const kept = this._pirateCheck(s, game, false);
    this._unload(s, kept, game);
  }

  // 📥 卸货：cargo.res 写入背包（取整），返回实际获得
  _unload(s, cargo, game) {
    if (!cargo || !cargo.res) return;
    const inv = this._inv(game);
    const parts = [];
    for (const k in cargo.res) {
      const v = cargo.res[k];
      const amt = Math.max(0, Math.round(v));
      if (amt > 0) {
        inv[k] = (inv[k] || 0) + amt;
        const nm = (typeof RES_DEFS !== 'undefined' && RES_DEFS[k]) ? RES_DEFS[k].name : k;
        parts.push(`${nm}×${amt}`);
      }
    }
    if (parts.length) {
      this.stats.hauls += 1;
      const who = s.kind === 'fleet' ? '⛏️' : '🛰️';
      this._log(`${who} ${s.name} 卸货：${parts.join('、')}`);
      this._toast(game, `${who} ${s.name} 卸货：${parts.join('、')}`);
      this._sfx(game, 'harvest');
    }
  }

  // 🎲 发现表掷骰：加权选档 → 区间随机 → 乘区 → 取整
  _rollLoot(dest, yieldMul, who) {
    const table = (dest && dest.loot) || [];
    if (!table.length) return { label: '无', res: {} };
    let total = 0;
    for (const e of table) total += e.w || 0;
    let roll = Math.random() * total;
    let pick = table[0];
    for (const e of table) { roll -= e.w || 0; if (roll <= 0) { pick = e; break; } }
    const mul = (yieldMul || 1) * (pick.yieldMul || 1);
    const res = {};
    for (const k in pick.res) {
      const [a, b] = pick.res[k];
      res[k] = (a + Math.random() * (b - a)) * mul;
    }
    if (pick.note) this._log(`⚠️ ${pick.note}`);
    return { label: pick.label, res };
  }

  // ================= 深空事件（纯机制） =================

  // 🎲 事件掷骰：间隔 100~180 秒，至少 1 艘在航船才掷
  _tickEvents(now, game) {
    if (!this._nextEventAt) {
      this._nextEventAt = now + DS_TUNE.EVENT_MIN_GAP + Math.random() * 30000;
      return;
    }
    if (now < this._nextEventAt) return;
    this._nextEventAt = now + DS_TUNE.EVENT_MIN_GAP
      + Math.random() * (DS_TUNE.EVENT_MAX_GAP - DS_TUNE.EVENT_MIN_GAP);
    const active = this.probes.concat(this.fleets)
      .filter(s => s.state === 'out' || s.state === 'mine' || s.state === 'back');
    if (!active.length) return;
    const roll = Math.random();
    const wStorm = DS_TUNE.EVENT_W_STORM, wPirate = DS_TUNE.EVENT_W_PIRATE;
    if (roll < wStorm) this._evSolarStorm(now, game, active);
    else if (roll < wStorm + wPirate) this._evPirates(now, game, active);
    else this._evMalfunction(now, game, active);
  }

  // 🌞 太阳风暴干扰：60 秒内全舰船航速降至 35%（探测延迟）
  _evSolarStorm(now, game, active) {
    this._stormUntil = now + DS_TUNE.STORM_DURATION;
    this._log('🌞 太阳风暴抵达深空航线！60 秒内舰船航速大幅下降');
    this._toast(game, '🌞 太阳风暴干扰深空通讯，舰船减速 60 秒！');
    this._sfx(game, 'warning');
  }

  // 🏴‍☠️ 海盗事件：随机一艘在航船必然遭遇海盗（比被动打劫更凶）
  _evPirates(now, game, active) {
    // 优先挑有货的船（返程/采矿中），没有就挑任意在航船（只游荡，无损失）
    const withCargo = active.filter(s => s.cargo && s.cargo.res);
    const s = (withCargo.length ? withCargo : active)[Math.floor(Math.random() * (withCargo.length ? withCargo.length : active.length))];
    if (!s.cargo || !s.cargo.res) {
      this._log(`🏴‍☠️ ${s.name} 航线附近发现海盗船游荡，幸好空载未被盯上`);
      return;
    }
    s.cargo = this._pirateAttack(s, game);
  }

  // 🏴‍☠️ 海盗：打劫返程货物（需军事护航）
  //    有军事系统 → defensePower(game) 对抗海盗强度；
  //    无军事系统 → 固定扣 30%（护盾 2 级以上直接闪避）
  _pirateCheck(s, game, isFleet) {
    const cargo = s.cargo;
    if (!cargo || !cargo.res) return cargo;
    // 只有返程（back 段结束）才可能被劫：探测器 12%，船队 30%
    const p = isFleet ? 0.30 : 0.12;
    if (Math.random() > p) return cargo;
    return this._pirateAttack(s, game);
  }

  // 🏴‍☠️ 海盗袭击结算（事件与被动打劫共用）：返回打劫后的 cargo
  _pirateAttack(s, game) {
    const cargo = s.cargo;
    const shieldLv = this.upgrades.shield || 0;

    let power = 0, hasMil = false;
    try {
      if (game && game.military) {
        const dp = game.military.defensePower;
        if (typeof dp === 'function') { power = dp.call(game.military, game) || 0; hasMil = true; }
        else if (typeof dp === 'number') { power = dp; hasMil = true; }
      }
    } catch (e) {}

    const pirateStr = 50 + this.fleets.length * 15 + this.probes.length * 5;
    if (hasMil && power >= pirateStr) {
      // 🛡️ 护航击退
      this.stats.piratesRepelled += 1;
      this._log(`🛡️ 军事护航击退海盗（防御 ${power} vs 海盗 ${pirateStr}），${s.name} 货物保全`);
      // 缴获一点战利品
      const bonus = {};
      for (const k in cargo.res) bonus[k] = cargo.res[k] * 0.1;
      return { label: cargo.label + '（+缴获）', res: Object.assign({}, cargo.res, bonus) };
    }
    // 💸 被劫：损失比例
    let lossMul;
    if (!hasMil) {
      if (shieldLv >= 2) {
        this._log(`🛡️ ${s.name} 护盾全开，甩掉了海盗追踪`);
        return cargo;
      }
      lossMul = DS_TUNE.PIRATE_NO_MIL_LOSS;
    } else {
      lossMul = DS_TUNE.PIRATE_BASE_LOSS * Math.pow(0.5, shieldLv);
    }
    this.stats.piratesHit += 1;
    const kept = {};
    for (const k in cargo.res) kept[k] = cargo.res[k] * (1 - lossMul);
    this._log(`🏴‍☠️ ${s.name} 返航途中遭海盗打劫，损失 ${Math.round(lossMul * 100)}% 货物` +
      (hasMil ? `（防御 ${power} 不足，海盗强度 ${pirateStr}）` : '（无军事护航）'));
    return { label: cargo.label + '（遭劫）', res: kept };
  }

  // 🔧 船只故障：随机一艘在航船瘫痪 60~120 秒（护盾降低概率与时长）
  _evMalfunction(now, game, active) {
    const shieldLv = this.upgrades.shield || 0;
    const p = DS_TUNE.FAULT_BASE_CHANCE * Math.pow(0.6, shieldLv);
    if (Math.random() > p) {
      // 未触发：转为一次小额"深空漂流物"收获，保持事件不落空
      this._log('🌌 深空一片寂静，舰船按计划航行');
      return;
    }
    const s = active[Math.floor(Math.random() * active.length)];
    const dur = DS_TUNE.FAULT_MIN_MS + Math.random() * (DS_TUNE.FAULT_MAX_MS - DS_TUNE.FAULT_MIN_MS);
    const durCut = Math.pow(0.8, shieldLv);  // 护盾每级 -20% 故障时长
    s.state = 'broken';
    s.brokenMs = Math.round(dur * durCut);
    s.note = '故障瘫痪';
    this.stats.faults += 1;
    this._log(`🔧 ${s.name} 发生故障瘫痪（预计 ${Math.round(s.brokenMs / 1000)} 秒），可花钢材手动维修`);
    this._toast(game, `🔧 ${s.name} 故障瘫痪！可在深空面板维修`);
    this._sfx(game, 'warning');
  }

  // ================= 日志 =================

  // 📜 深空日志（只保留最近 20 条）
  _log(msg) {
    this.log.push({ t: Date.now(), msg });
    if (this.log.length > DS_TUNE.LOG_MAX) this.log.splice(0, this.log.length - DS_TUNE.LOG_MAX);
  }

  // ================= 存档 =================

  // 💾 save：只存数据，不存函数/定时器
  save() {
    const slim = (ships) => ships
      .filter(s => s.state !== 'lost' && !s._remove)
      .map(s => ({
        id: s.id, kind: s.kind, name: s.name, state: s.state,
        targetId: s.targetId, leg: s.leg, legDurMs: s.legDurMs,
        cargo: s.cargo, brokenMs: s.brokenMs, note: s.note,
      }));
    return {
      v: 1,
      probes: slim(this.probes),
      fleets: slim(this.fleets),
      upgrades: Object.assign({}, this.upgrades),
      ruins: this.ruins.map(r => ({ id: r.id, state: r.state })),
      buffs: Object.assign({}, this.buffs),
      log: this.log.slice(-DS_TUNE.LOG_MAX),
      stats: Object.assign({}, this.stats),
      seq: this._seq,
    };
  }

  // 📂 load：防御性恢复（字段缺失用默认值；进行中的航段按进度继续）
  load(data) {
    if (!data || typeof data !== 'object') return;
    const now = Date.now();
    const restore = (arr) => (Array.isArray(arr) ? arr : []).map(s => ({
      id: s.id || '?', kind: s.kind === 'fleet' ? 'fleet' : 'probe',
      name: s.name || s.id || '?',
      state: ['idle', 'out', 'mine', 'back', 'broken'].includes(s.state) ? s.state : 'idle',
      targetId: s.targetId || null,
      leg: Math.min(0.999, Math.max(0, +s.leg || 0)),
      legDurMs: Math.max(1000, +s.legDurMs || 60000),
      cargo: s.cargo && typeof s.cargo === 'object' ? s.cargo : null,
      brokenMs: Math.max(0, +s.brokenMs || 0),
      note: s.note || '',
    }));
    this.probes = restore(data.probes);
    this.fleets = restore(data.fleets);
    if (data.upgrades) {
      for (const k of ['engine', 'cargo', 'shield']) {
        const v = Math.floor(+data.upgrades[k] || 0);
        this.upgrades[k] = Math.min(3, Math.max(0, v));
      }
    }
    if (Array.isArray(data.ruins)) {
      for (const r of data.ruins) {
        const mine = this.ruins.find(x => x.id === r.id);
        if (mine && ['hidden', 'revealed', 'claimed'].includes(r.state)) mine.state = r.state;
      }
    }
    if (data.buffs) {
      for (const k of ['prodMul', 'speedMul', 'haulMul']) {
        const v = +data.buffs[k];
        if (v > 0) this.buffs[k] = v;
      }
    }
    this.log = Array.isArray(data.log) ? data.log.slice(-DS_TUNE.LOG_MAX) : [];
    if (data.stats && typeof data.stats === 'object') {
      for (const k in this.stats) if (typeof data.stats[k] === 'number') this.stats[k] = data.stats[k];
    }
    if (typeof data.seq === 'number') this._seq = data.seq;
    this._lastTick = now;
    this._nextEventAt = now + DS_TUNE.EVENT_MIN_GAP;
    this._log('📂 深空探索进度已载入');
  }

  // ================= UI =================

  // 🖥️ 绑定 UI：「🌠 深空」工具栏按钮 + 面板
  bindUI(game) {
    if (typeof document === 'undefined') return;
    if (this._bound) return;
    this._bound = true;

    // 🌠 工具栏按钮
    const toolbar = document.getElementById('toolbar');
    if (toolbar && !document.getElementById('btn-deepspace')) {
      const btn = document.createElement('button');
      btn.id = 'btn-deepspace';
      btn.className = 'tool-btn';
      btn.innerHTML = '🌠<small>深空</small>';
      btn.title = '深空探索：探测器 / 采矿船队 / 遗迹';
      btn.addEventListener('click', () => {
        this.togglePanel(game);
        this._sfx(game, 'click');
      });
      toolbar.appendChild(btn);
    }

    // 🖥️ 深空面板（骨架；内容由 refreshPanel 渲染）
    if (!document.getElementById('deepspace-panel')) {
      const panel = document.createElement('div');
      panel.id = 'deepspace-panel';
      panel.className = 'hidden';
      panel.innerHTML = `
        <div class="panel-header">
          <span>🌠 深空探索</span>
          <button id="btn-close-deepspace">✖</button>
        </div>
        <div class="panel-body" id="deepspace-body"></div>`;
      document.body.appendChild(panel);
      document.getElementById('btn-close-deepspace').addEventListener('click', () => {
        panel.classList.add('hidden');
      });
      // 🖱️ 事件委托：面板内所有按钮
      panel.addEventListener('click', (e) => {
        const el = e.target.closest('[data-ds]');
        if (!el) return;
        const act = el.getAttribute('data-ds');
        if (act === 'launch-probe') this.launchProbe(el.getAttribute('data-target'), game);
        else if (act === 'launch-fleet') this.launchFleet(game);
        else if (act === 'recall') this.recallShip(el.getAttribute('data-ship'), game);
        else if (act === 'repair') this.repairShip(el.getAttribute('data-ship'), game);
        else if (act === 'upgrade') this.upgrade(el.getAttribute('data-sys'), game);
        this._sfx(game, 'click');
      });
      // 💅 面板样式（内联，避免改 styles.css）
      const st = document.createElement('style');
      st.textContent = `
        #deepspace-panel{position:fixed;right:12px;top:64px;width:348px;max-height:76vh;overflow-y:auto;
          background:#10141f;border:1px solid #3b4a63;border-radius:10px;color:#dbe6f5;z-index:60;
          box-shadow:0 8px 24px rgba(0,0,0,.5);font-size:13px}
        #deepspace-panel .panel-body{padding:10px 12px}
        .ds-sec{margin:10px 0;padding:8px;border:1px solid #22304a;border-radius:8px;background:#0b0f18}
        .ds-sec-title{font-weight:bold;color:#a5b4fc;margin-bottom:6px;font-size:13px}
        .ds-status{display:flex;justify-content:space-between;font-size:12px;color:#9fb2cc;margin:2px 0}
        .ds-status b{color:#e2e8f0}
        .ds-ship{margin:6px 0;padding:6px 8px;background:#141a26;border-radius:6px}
        .ds-ship-top{display:flex;justify-content:space-between;align-items:center;font-size:12px}
        .ds-bar{height:8px;background:#0b0f18;border-radius:4px;overflow:hidden;margin:5px 0}
        .ds-fill{height:100%;width:0%;background:linear-gradient(90deg,#38bdf8,#a5b4fc);transition:width .5s}
        .ds-fill.mine{background:linear-gradient(90deg,#facc15,#fb923c)}
        .ds-fill.broken{background:#ef4444}
        .ds-btns{margin-top:4px}
        .ds-btns button,.ds-launch{background:#1d4ed8;color:#fff;border:none;border-radius:6px;
          padding:4px 10px;cursor:pointer;font-size:12px;margin:2px 4px 2px 0}
        .ds-btns button:hover,.ds-launch:hover{background:#2563eb}
        .ds-launch:disabled{background:#334155;color:#94a3b8;cursor:not-allowed}
        .ds-dest{margin:6px 0;padding:6px 8px;background:#141a26;border-radius:6px;font-size:12px}
        .ds-dest-top{display:flex;justify-content:space-between;align-items:center}
        .ds-dest-meta{color:#9fb2cc;margin:3px 0;line-height:1.5}
        .ds-lock{color:#fbbf24}
        .ds-upg{display:flex;justify-content:space-between;align-items:center;margin:6px 0;font-size:12px}
        .ds-pips{color:#facc15;letter-spacing:2px}
        .ds-ruin{margin:6px 0;padding:6px 8px;background:#141a26;border-radius:6px;font-size:12px}
        .ds-ruin-flavor{color:#9fb2cc;font-style:italic;margin:3px 0;line-height:1.5}
        .ds-ruin-buff{color:#4ade80}
        .ds-log{max-height:140px;overflow-y:auto;background:#0b0f18;border-radius:6px;padding:6px 8px}
        .ds-log div{padding:2px 0;border-bottom:1px solid #1e293b;font-size:12px;color:#9fb2cc}
        .ds-cost{color:#fbbf24;font-size:12px}`;
      document.head.appendChild(st);
    }
  }

  // 🖥️ 面板开关
  togglePanel(game) {
    if (typeof document === 'undefined') return;
    const p = document.getElementById('deepspace-panel');
    if (!p) return;
    p.classList.toggle('hidden');
    if (!p.classList.contains('hidden')) this.refreshPanel(game, Date.now());
  }

  // ⚡ 操作后立即刷新面板（不等节流）
  _refreshPanelSoon(game) {
    try { this.refreshPanel(game, Date.now()); } catch (e) {}
  }

  // 🖥️ 刷新面板内容（update 内节流调用；面板隐藏时直接返回）
  refreshPanel(game, now) {
    if (typeof document === 'undefined') return;
    const body = document.getElementById('deepspace-body');
    const panel = document.getElementById('deepspace-panel');
    if (!body || !panel || panel.classList.contains('hidden')) return;
    now = now || Date.now();

    const unlocked = this.isUnlocked(game);
    if (!unlocked) {
      body.innerHTML = `
        <div class="ds-sec">
          <div class="ds-sec-title">🔒 未解锁</div>
          <div class="ds-status">建造 <b>📡深空天线</b> 以解锁深空探索</div>
          <div class="ds-status" style="color:#64748b">（需先建造太空港，再建深空天线）</div>
        </div>`;
      return;
    }

    const dd = this.drydockLevel(game);
    const storm = now < this._stormUntil;
    const ships = this.probes.concat(this.fleets);

    let html = '';
    // ---- 状态行 ----
    html += `<div class="ds-sec"><div class="ds-sec-title">📡 深空状态</div>`;
    html += `<div class="ds-status"><span>🏗️ 船坞等级</span><b>Lv${dd}</b></div>`;
    html += `<div class="ds-status"><span>🛰️ 探测器</span><b>${this.probes.length}/${this.probeCap(game)}</b></div>`;
    html += `<div class="ds-status"><span>⛏️ 采矿船队</span><b>${this.fleets.length}/${this.fleetCap(game)}</b></div>`;
    if (storm) html += `<div class="ds-status"><span>🌞 太阳风暴</span><b style="color:#fbbf24">干扰中（${Math.ceil((this._stormUntil - now) / 1000)}s）</b></div>`;
    html += `</div>`;

    // ---- 舰船列表 ----
    html += `<div class="ds-sec"><div class="ds-sec-title">🚀 舰船（状态 / 进度）</div>`;
    if (!ships.length) html += `<div class="ds-status">暂无舰船，先发射一艘探测器吧</div>`;
    for (const s of ships) html += this._shipRowHTML(s);
    html += `</div>`;

    // ---- 目标选择 ----
    html += `<div class="ds-sec"><div class="ds-sec-title">🎯 探索目标</div>`;
    html += `<div class="ds-cost">🛰️ 每次发射消耗：钢材×${DS_TUNE.PROBE_COST.steel} 科技×${DS_TUNE.PROBE_COST.tech}</div>`;
    for (const d of DESTINATIONS) html += this._destCardHTML(d, game);
    html += `</div>`;

    // ---- 采矿船队 ----
    html += `<div class="ds-sec"><div class="ds-sec-title">⛏️ 采矿船队</div>`;
    html += `<div class="ds-status"><span>自动往返 🪨近地小行星带</span></div>`;
    html += `<div class="ds-cost">⛏️ 每支船队：钢材×${DS_TUNE.FLEET_COST.steel} 科技×${DS_TUNE.FLEET_COST.tech}（需船坞）</div>`;
    const fcap = this.fleetCap(game);
    html += `<button class="ds-launch" data-ds="launch-fleet" ${this.fleets.length >= fcap ? 'disabled' : ''}>`
      + `⛏️ 派遣船队（${this.fleets.length}/${fcap}）</button>`;
    if (fcap <= 0) html += `<div class="ds-lock">🔒 需要船坞：建造太空港（船坞等级 = 太空港等级）</div>`;
    html += `</div>`;

    // ---- 升级 ----
    html += `<div class="ds-sec"><div class="ds-sec-title">⬆️ 船只升级</div>`;
    for (const sysId of DS_UPGRADE_ORDER) html += this._upgradeRowHTML(sysId, game);
    html += `</div>`;

    // ---- 遗迹图鉴 ----
    html += `<div class="ds-sec"><div class="ds-sec-title">🏛️ 遗迹图鉴</div>`;
    for (const r of this.ruins) html += this._ruinRowHTML(r);
    html += `</div>`;

    // ---- 日志 ----
    html += `<div class="ds-sec"><div class="ds-sec-title">📜 深空日志（最近 ${DS_TUNE.LOG_MAX} 条）</div>`;
    html += `<div class="ds-log">` + (this.log.slice().reverse()
      .map(l => `<div>${this._esc(l.msg)}</div>`).join('') || '<div>暂无记录</div>') + `</div>`;
    html += `</div>`;

    body.innerHTML = html;
  }

  // 🚀 单船行 HTML
  _shipRowHTML(s) {
    const dest = s.targetId ? dsFindDest(s.targetId) : null;
    const where = dest ? `${dest.icon}${dest.name}` : '待命';
    let status, barCls = '', pct = Math.round(s.leg * 100);
    if (s.state === 'idle') { status = '💤 待命中'; pct = 0; }
    else if (s.state === 'out') status = `🛫 去程 → ${where}`;
    else if (s.state === 'mine') { status = `⛏️ 采矿作业中 @${where}`; barCls = 'mine'; }
    else if (s.state === 'back') status = `🛬 返程 ← ${where}`;
    else if (s.state === 'broken') {
      status = `🔧 故障瘫痪（${Math.ceil(s.brokenMs / 1000)}s${s.note ? ' · ' + this._esc(s.note) : ''}）`;
      barCls = 'broken'; pct = 100;
    }
    const icon = s.kind === 'fleet' ? '⛏️' : '🛰️';
    let btns = '';
    if (s.state === 'out' || s.state === 'mine' || s.state === 'back') {
      btns += `<button data-ds="recall" data-ship="${s.id}">↩️ 召回</button>`;
    }
    if (s.state === 'broken') {
      btns += `<button data-ds="repair" data-ship="${s.id}">🔧 维修（钢×${DS_TUNE.REPAIR_COST.steel}）</button>`;
    }
    return `<div class="ds-ship">
      <div class="ds-ship-top"><span><b>${icon} ${this._esc(s.name)}</b></span><span>${status}</span></div>
      <div class="ds-bar"><div class="ds-fill ${barCls}" style="width:${pct}%"></div></div>
      ${btns ? `<div class="ds-btns">${btns}</div>` : ''}
    </div>`;
  }

  // 🎯 目标卡片 HTML
  _destCardHTML(d, game) {
    const av = this.destAvailable(d, game);
    const backSec = Math.round(d.timeSec * 0.6);
    let meta = `📏 ${d.dist} · ⏱️ 去程 ${d.timeSec}s / 返程 ${backSec}s · ⚠️危险 ${'★'.repeat(d.danger)}${'☆'.repeat(5 - d.danger)}`;
    meta += `<br>🎁 ${d.lootNote}<br>💬 ${d.flavor}<br>⚠️ ${d.riskNote}`;
    if (d.id === 'ruins') {
      const n = this.ruins.filter(r => r.state === 'revealed').length;
      meta += `<br>🏛️ 待领取遗迹：<b>${n}</b> 处`;
    }
    const btn = av.ok
      ? `<button class="ds-launch" data-ds="launch-probe" data-target="${d.id}">🛰️ 发射探测器</button>`
      : `<button class="ds-launch" disabled>🔒 ${this._esc(av.reason)}</button>`;
    return `<div class="ds-dest">
      <div class="ds-dest-top"><span><b>${d.icon} ${d.name}</b></span>${btn}</div>
      <div class="ds-dest-meta">${meta}</div>
    </div>`;
  }

  // ⬆️ 升级行 HTML
  _upgradeRowHTML(sysId, game) {
    const def = DS_UPGRADES[sysId];
    const lv = this.upgrades[sysId] || 0;
    const pips = '●'.repeat(lv) + '○'.repeat(3 - lv);
    let right;
    if (lv >= 3) {
      right = `<span class="ds-ruin-buff">MAX</span>`;
    } else {
      const cost = def.cost[lv];
      const costTxt = Object.keys(cost).map(k => {
        const nm = (typeof RES_DEFS !== 'undefined' && RES_DEFS[k]) ? RES_DEFS[k].name : k;
        return `${nm}×${cost[k]}`;
      }).join(' ');
      right = `<button class="ds-launch" data-ds="upgrade" data-sys="${sysId}">⬆️ Lv${lv + 1}（${costTxt}）</button>`;
    }
    return `<div class="ds-upg">
      <span><b>${def.icon}${def.name}</b> <span class="ds-pips">${pips}</span><br>
      <span style="color:#9fb2cc">${def.desc}<br>下一级：${lv < 3 ? def.fxText[lv] : def.fxText[2]}</span></span>
      <span>${right}</span>
    </div>`;
  }

  // 🏛️ 遗迹图鉴行 HTML
  _ruinRowHTML(r) {
    const def = dsFindRuin(r.id);
    if (r.state === 'hidden') {
      return `<div class="ds-ruin"><b>❓ 未知遗迹</b><br><span style="color:#64748b">调查🛸异常信号源以截获坐标</span></div>`;
    }
    if (r.state === 'revealed') {
      return `<div class="ds-ruin"><b>${def.icon} ${def.name}</b> <span class="ds-lock">📍 坐标已截获</span>
        <div class="ds-ruin-flavor">${def.flavor}</div>
        <div class="ds-ruin-buff">增益：${def.buffName} —— 派遣探测器前往🏛️外星遗迹领取</div></div>`;
    }
    return `<div class="ds-ruin"><b>${def.icon} ${def.name}</b> <span class="ds-ruin-buff">✅ 已激活</span>
      <div class="ds-ruin-flavor">${def.flavor}</div>
      <div class="ds-ruin-buff">增益：${def.buffName}（永久生效）</div></div>`;
  }

  // 🧹 HTML 转义（日志/船名防注入）
  _esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}

// 🌍 挂载全局（game.js 之前加载，直接 new DeepSpaceManager() 即可用）
window.DeepSpaceManager = DeepSpaceManager;

if (typeof module !== 'undefined') {
  module.exports = { DeepSpaceManager, DESTINATIONS, DS_RUINS, DS_UPGRADES, DS_TUNE };
}
