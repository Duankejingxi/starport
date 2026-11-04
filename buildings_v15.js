/* 星港 — buildings_v15.js：v1.5 新增 15 种建筑 × 3 级（能源/生产/科研/军事/市政/特殊）
//
// 本文件延续 build.js / buildings_v13.js 的数据约定：
//   - levels[1..3]（索引 0 为 null 占位），每级 { cost, needPop, powerUse, effect, effectDesc, desc, flavor }
//   - cost 的 key 只用现有资源：iron / ice / rare / water / food / steel / tech / uranium / he3
//     （新资源 nano 由纳米组装线产出，但不作为建造 cost，避免 resources.js 未注册时卡死）
//   - 自定义效果字段全部收拢在每级的 `effect` 对象里，配合「★ 读取约定」注释，
//     供其他系统（disaster.js / pop.js / trade.js / deep_space.js / policy.js）防御性读取：
//       const eff = ((BUILDINGS[id].levels[b.level]) || {}).effect || {};
//       const x = eff.someField || 0;
//   - unlock：{ type:'tech'|'building'|'scenario', ref, level?, desc }；引用不存在的科技/建筑
//     时按「未解锁」处理（防御性），游戏逻辑侧不得假设其存在。
//   - 接入方式：本文件只声明 const BUILDINGS_V15，不自动合并；接入时调用文件末尾的
//     mergeBuildingsV15()（Object.assign 到 BUILDINGS，并返回 UI 顺序数组 BUILD_ORDER_V15）。
//   - ⚠ 前置提醒（给后续版本）：纳米组装线产出的新资源 nano 需要在 resources.js 里注册
//     （RES_DEFS / 初始值 / 存储上限），否则产出会被静默丢弃。
// ═══════════════════════════════════════════════════════════════════════════
// v1.5 建筑总览（15 种 × 3 级 = 45 个配置项）
//   能源系：wind_turbine 风力发电机 🌬️ / geothermal 地热井 🌋
//   生产系：food_processor 食品加工厂 🍱 / robot_factory 机器人厂 🤖 / nano_assembler 纳米组装线 🧬
//   科研系：observatory 天文台 🔭 / gene_lab 基因实验室 🧫
//   军事系：railgun 轨道炮 🎯 / shield_dome 护盾穹顶 🛡️
//   市政系：parliament 议会大厦 🏛️ / exchange 交易所 💱 / medcenter 医疗中心 🏥
//   特殊系：time_capsule 时间胶囊 ⏳ / monument 纪念碑 🗿 / wormhole_stabilizer 虫洞稳定器 🌀
// ═══════════════════════════════════════════════════════════════════════════
*/

const BUILDINGS_V15 = {

// ═══════════════════════════════════════════════════════════════════════
// 1. 🌬️ 风力发电机 wind_turbine（能源系）
// 定位：看天吃饭的「反脆弱能源」。平时产量低（火星大气稀薄），
// 沙尘暴期间风速暴涨，产量 ×2 —— 把灾难变成红利。
// ★ 读取约定（disaster.js / build.js 电力聚合防御性读取）：
//   const eff = ((BUILDINGS.wind_turbine.levels[b.level]) || {}).effect || {};
//   const base = eff.power || 0;
//   const stormMul = eff.stormPowerMul || 2;
//   const isStorm = game.disaster && game.disaster.isSandstormActive && game.disaster.isSandstormActive();
//   const out = base * (isStorm ? stormMul : 1);
//   多座风力发电机：按各自等级分别计算后加法汇总。
// 数值平衡注释：
//   - Lv1 正常 2 电 / 暴中 4 电，勉强点亮一个居住舱；Lv3 正常 8 / 暴中 16，
//     相当于一座小型核电站只在沙尘暴里开火——鼓励「灾难期开足生产线」的玩法。
//   - cost 偏铁矿路线（iron/steel/rare），和太阳能板的 tech 路线错开，
//     让玩家在「稳定但贵」与「便宜但看天」之间做选择。
//   - needPop 低（2/4/8）：风机是无人值守设备，人口门槛只象征性收取。
// ═══════════════════════════════════════════════════════════════════════
wind_turbine: {
  id: 'wind_turbine', name: '风力发电机', icon: '🌬️',
  levels: [null,
    { cost: { iron: 30, steel: 5 }, needPop: 2, powerUse: 0,
      effect: { power: 2, stormPowerMul: 2 },
      effectDesc: '产电 2（平时）/ 4（沙尘暴期间×2）',
      desc: '平时产电 2，沙尘暴期间产量×2（4 电）',
      flavor: '「火星的风很吝啬，但沙尘暴来的时候，它突然就大方了。」——能源部日志', },
    { cost: { iron: 80, steel: 20, rare: 10 }, needPop: 4, powerUse: 0,
      effect: { power: 4, stormPowerMul: 2 },
      effectDesc: '产电 4（平时）/ 8（沙尘暴期间×2）',
      desc: '平时产电 4，沙尘暴期间产量×2（8 电）',
      flavor: '三叶片在稀薄大气里转得吃力，直到第一场沙尘暴教会它什么叫全力以赴。', },
    { cost: { steel: 60, rare: 30, tech: 10 }, needPop: 8, powerUse: 0,
      effect: { power: 8, stormPowerMul: 2 },
      effectDesc: '产电 8（平时）/ 16（沙尘暴期间×2）',
      desc: '平时产电 8，沙尘暴期间产量×2（16 电）',
      flavor: '气象站现在会在沙尘暴预警时广播：「各单位注意，免费电力即将到货。」', },
  ],
  desc: '平时低产电，沙尘暴期间产量×2——把灾难变成红利',
  unlock: { type: 'none', desc: '开局可建' },
},

// ═══════════════════════════════════════════════════════════════════════
// 2. 🌋 地热井 geothermal（能源系）
// 定位：后期「定海神针」式稳定电源。不受天气影响，单井功率全场最高，
// 但需要先解锁「地下城」才能钻探（深层钻井技术）。
// ★ 读取约定（build.js 电力聚合防御性读取）：
//   const eff = ((BUILDINGS.geothermal.levels[b.level]) || {}).effect || {};
//   const out = eff.power || 0;   // 稳定输出，不受沙尘暴/昼夜影响
// ★ 解锁判定（game.js / help.js 防御性读取）：
//   const un = BUILDINGS.geothermal.unlock || {};
//   const ok = !un.ref || (game.tech && game.tech.isUnlocked && game.tech.isUnlocked(un.ref));
//   // 't-undercity' 目前在 tech.js 中不存在 → 按未解锁处理，等科技树补上后自动生效
// 数值平衡注释：
//   - Lv1 12 电 ≈ 4 块 Lv3 太阳能板，但 cost 含 20 稀有矿，卡在中期瓶颈上；
//   - Lv3 45 电是全场单体最高，cost 含 60 科技点，定位是「聚变电站之外的第二选择」；
//   - powerUse 1/2/3：钻井泵本身耗电，净输出仍为正，避免「免费午餐」观感。
// ═══════════════════════════════════════════════════════════════════════
geothermal: {
  id: 'geothermal', name: '地热井', icon: '🌋',
  levels: [null,
    { cost: { steel: 80, rare: 20 }, needPop: 10, powerUse: 1,
      effect: { power: 12, stable: true },
      effectDesc: '稳定产电 12，不受天气/昼夜影响',
      desc: '深层钻探引出地热，稳定产电 12',
      flavor: '钻头穿透三公里岩层那天，整个城市都听见了火星的心跳。', },
    { cost: { steel: 200, rare: 50, tech: 20 }, needPop: 20, powerUse: 2,
      effect: { power: 25, stable: true },
      effectDesc: '稳定产电 25，不受天气/昼夜影响',
      desc: '扩建换热阵列，稳定产电 25',
      flavor: '工程师说：这口井的脾气比太阳好多了——它从不请假。', },
    { cost: { steel: 450, rare: 120, tech: 60 }, needPop: 35, powerUse: 3,
      effect: { power: 45, stable: true },
      effectDesc: '稳定产电 45，全场单体最高',
      desc: '地热电站完全体，稳定产电 45',
      flavor: '「我们不再仰望太阳要电，我们脚下就踩着一颗小太阳。」——市长就职演说', },
  ],
  desc: '需地下城解锁；不受天气影响的稳定电源，单体功率全场最高',
  unlock: { type: 'tech', ref: 't-undercity',
    desc: '需研究「地下城」科技解锁（tech.js 待新增；未定义时保持锁定）' },
},

// ═══════════════════════════════════════════════════════════════════════
// 3. 🍱 食品加工厂 food_processor（生产系）
// 定位：食物→高级食物的「幸福转化器」。把普通食物加工成精致料理，
// 过程中有轻微损耗，但大幅提升人口幸福与增长。
// ★ 读取约定（build.js 转化逻辑 / pop.js 防御性读取）：
//   const eff = ((BUILDINGS.food_processor.levels[b.level]) || {}).effect || {};
//   // 转化：每 convertInterval 消耗 in.food，返还 out.food（out < in，差值为加工损耗）
//   const conv = { in: eff.foodIn || 0, out: eff.foodOut || 0 };
//   // 全城幸福加成（加法汇总）：
//   const hap = eff.happiness || 0;
//   // 人口增长乘区（乘法）：growthMul
//   // 实现注意：只有当城市食物库存 ≥ foodIn 时才执行转化，否则只保留幸福加成的一半
//   // （工人没原料可加工，但食堂的香味还在）。
// 数值平衡注释：
//   - 转化比约 5:6 → 9:10 → 15:16，损耗率随等级降低（工艺进步）；
//   - 幸福 +3/+6/+12 是温室流之外的第二条幸福路线，配合议会「美食节」政策可叠乘；
//   - cost 走 iron/ice/steel 路线，不抢 tech，定位是中期民生建筑。
// ═══════════════════════════════════════════════════════════════════════
food_processor: {
  id: 'food_processor', name: '食品加工厂', icon: '🍱',
  levels: [null,
    { cost: { iron: 60, ice: 20 }, needPop: 6, powerUse: 2,
      effect: { foodIn: 6, foodOut: 5, happiness: 3, growthMul: 1.2, convertInterval: 15000 },
      effectDesc: '每周期 6 食物→5 高级食物（轻微损耗），全城幸福 +3，人口增长 ×1.2',
      desc: '食物→高级食物：6→5，全城幸福 +3，增长 ×1.2',
      flavor: '第一批出炉的火星拉面，让三个加班的工程师当场决定不回地球了。', },
    { cost: { steel: 50, ice: 50 }, needPop: 12, powerUse: 3,
      effect: { foodIn: 10, foodOut: 9, happiness: 6, growthMul: 1.4, convertInterval: 15000 },
      effectDesc: '每周期 10 食物→9 高级食物，全城幸福 +6，人口增长 ×1.4',
      desc: '食物→高级食物：10→9，全城幸福 +6，增长 ×1.4',
      flavor: '中央厨房的排班表比发射窗口还难抢——因为厨师长说「火候不等人」。', },
    { cost: { steel: 120, tech: 20 }, needPop: 20, powerUse: 4,
      effect: { foodIn: 16, foodOut: 15, happiness: 12, growthMul: 1.6, convertInterval: 15000 },
      effectDesc: '每周期 16 食物→15 高级食物，全城幸福 +12，人口增长 ×1.6',
      desc: '食物→高级食物：16→15，全城幸福 +12，增长 ×1.6',
      flavor: '美食评论家（自封的）在穹顶日报写道：这是太阳系第三好吃的城市。', },
  ],
  desc: '食物→高级食物（轻微损耗），全城幸福与人口增长双提升',
  unlock: { type: 'none', desc: '开局可建' },
},

// ═══════════════════════════════════════════════════════════════════════
// 4. 🤖 机器人厂 robot_factory（生产系）
// 定位：生产「机器人」——计入劳动力（满足建筑 needPop、参与生产），
// 但不占人口上限、不吃食物不喝水。虚拟人口，干活不吃饭。
// ★ 读取约定（pop.js / build.js 防御性读取）：
//   const eff = ((BUILDINGS.robot_factory.levels[b.level]) || {}).effect || {};
//   const robots = eff.robotPop || 0;              // 单厂提供的虚拟人口
//   // 全城机器人总数 = 各厂 robotPop 加法汇总（损坏/老化中的厂不计入）
//   // 有效劳动力 = 实际人口 + 机器人总数；机器人不计入 popCap、不消耗 food/water、
//   // 不参与幸福计算、不生育。维修/老化：机器人按 2 倍速折旧（铁皮不耐操）。
// 数值平衡注释：
//   - Lv1 4 机器人 ≈ 解放一个采矿小队；Lv3 20 机器人 ≈ 一个居住舱 Lv3 的人口当量；
//   - 高耗电（4/7/12）是主要制衡：机器人不吃饭，但吃电很凶；
//   - cost 含 tech（15/40/100），把机器人线锁在实验室体系之后，防止前期无脑爆机器人跳过人口运营。
// ═══════════════════════════════════════════════════════════════════════
robot_factory: {
  id: 'robot_factory', name: '机器人厂', icon: '🤖',
  levels: [null,
    { cost: { steel: 60, tech: 15 }, needPop: 8, powerUse: 4,
      effect: { robotPop: 4, robotUpkeep: 'power' },
      effectDesc: '生产 4 机器人：计入劳动力，不占人口上限，不消耗食物/水',
      desc: '产 4 机器人（虚拟人口）：干活不吃饭，只耗电',
      flavor: '第一台下线机器人被命名为「铁蛋」，现在它是采矿队的工头。', },
    { cost: { steel: 150, tech: 40, rare: 30 }, needPop: 15, powerUse: 7,
      effect: { robotPop: 10, robotUpkeep: 'power' },
      effectDesc: '生产 10 机器人：计入劳动力，不占人口上限，不消耗食物/水',
      desc: '产 10 机器人（虚拟人口）：干活不吃饭，只耗电',
      flavor: '人事部抗议：机器人不请假、不抱怨，搞得绩效考核很难做。', },
    { cost: { steel: 320, tech: 100, rare: 80 }, needPop: 25, powerUse: 12,
      effect: { robotPop: 20, robotUpkeep: 'power' },
      effectDesc: '生产 20 机器人：计入劳动力，不占人口上限，不消耗食物/水',
      desc: '产 20 机器人（虚拟人口）：干活不吃饭，只耗电',
      flavor: '「它们不会做梦，但它们会把梦留给我们做。」——机器人厂厂训', },
  ],
  desc: '生产机器人（虚拟人口）：计入劳动力，不占人口上限、不吃食物只耗电',
  unlock: { type: 'tech', ref: 't-prod-6',
    desc: '需研究「量子计算」科技（t-prod-6）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 5. 🧬 纳米组装线 nano_assembler（生产系）
// 定位：钢材→纳米材料（新资源 nano）的唯一量产线。纳米材料是后期
// 高级建筑（护盾穹顶 Lv3、虫洞稳定器维修等）的关键材料。
// ★ 读取约定（build.js 转化逻辑 / resources.js 防御性读取）：
//   const eff = ((BUILDINGS.nano_assembler.levels[b.level]) || {}).effect || {};
//   // 每 convertInterval：消耗 in.steel，产出 out.nano
//   // ⚠ resources.js 必须先注册 nano 资源（RES_DEFS/初始值/上限），否则产出静默丢弃
//   // 科技加成：tech.js 的 nanoMul（t-build-8 相关）按乘法作用于 out.nano
// ★ 资源注册提醒（给接入者）：
//   在 resources.js 的 RES_DEFS 中新增 nano: { name:'纳米材料', icon:'🧬', base:0, cap:500 }
//   并在 STORAGE 计算中纳入，否则仓库上限逻辑会忽略它。
// 数值平衡注释：
//   - Lv1 4 钢→1 纳米，效率低但开门；Lv3 6 钢→4 纳米，配合 nanoMul 1.5 可达 6 纳米/周期；
//   - 高耗电（6/10/16）+ 高人口（20/35/55），定位是后期产业链顶端，不是前中期建筑；
//   - cost 含大量 tech（40/100/220），确保玩家先有实验室体系再碰纳米线。
// ═══════════════════════════════════════════════════════════════════════
nano_assembler: {
  id: 'nano_assembler', name: '纳米组装线', icon: '🧬',
  levels: [null,
    { cost: { steel: 120, tech: 40 }, needPop: 20, powerUse: 6,
      effect: { steelIn: 4, nanoOut: 1, convertInterval: 20000, newResource: 'nano' },
      effectDesc: '每周期 4 钢材→1 纳米材料（新资源 nano）',
      desc: '钢材→纳米材料：4→1，新资源 nano 量产线',
      flavor: '第一粒纳米材料诞生时，显微镜前的博士哭了——它比承诺的还小。', },
    { cost: { steel: 300, tech: 100, rare: 40 }, needPop: 35, powerUse: 10,
      effect: { steelIn: 4, nanoOut: 2, convertInterval: 20000, newResource: 'nano' },
      effectDesc: '每周期 4 钢材→2 纳米材料（新资源 nano）',
      desc: '钢材→纳米材料：4→2，效率翻倍',
      flavor: '组装线的机械臂以原子级精度起舞，质检员说看久了会头晕。', },
    { cost: { steel: 600, tech: 220, rare: 100 }, needPop: 55, powerUse: 16,
      effect: { steelIn: 6, nanoOut: 4, convertInterval: 20000, newResource: 'nano' },
      effectDesc: '每周期 6 钢材→4 纳米材料（新资源 nano）',
      desc: '钢材→纳米材料：6→4，全城纳米供应中心',
      flavor: '「我们不是在造材料，我们在给未来递砖头。」——纳米组装线奠基铭文', },
  ],
  desc: '钢材→纳米材料（新资源 nano），后期高级建筑的关键材料线',
  unlock: { type: 'tech', ref: 't-build-8',
    desc: '需研究「纳米修复」科技（t-build-8）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 6. 🔭 天文台 observatory（科研系）
// 定位：科技产出建筑 +「深空加成」的解锁钥匙。Lv2 起激活深空加成，
// 让深空采矿/深空天线体系获得全局增益。
// ★ 读取约定（build.js 生产逻辑 / deep_space.js 防御性读取）：
//   const eff = ((BUILDINGS.observatory.levels[b.level]) || {}).effect || {};
//   const techOut = eff.techOut || 0;                    // 每 produceInterval 产科技点
//   const dsOn = !!eff.deepSpaceBonus;                  // Lv2+ 为 true：解锁深空加成
//   // 深空加成数值（乘法，deep_space.js 读取全城最高等级的一座）：
//   const dsMul = eff.deepSpaceMul || 1;                // 作用于深空采矿产量与天线 labBonus
//   // 实现注意：多座天文台只取最高 deepSpaceMul，不叠加；techOut 正常加法汇总。
// 数值平衡注释：
//   - 科技产出 2/5/12 对标实验室（1/3/8），略高但 cost 含稀有矿，路线不同；
//   - 深空加成 Lv2 解锁（×1.5）、Lv3 ×2.0，是深空流（天线/太空港体系）的必备前置；
//   - 高耗电（3/5/8）：望远镜阵列的制冷系统是电老虎。
// ═══════════════════════════════════════════════════════════════════════
observatory: {
  id: 'observatory', name: '天文台', icon: '🔭',
  levels: [null,
    { cost: { iron: 80, rare: 30 }, needPop: 8, powerUse: 3,
      effect: { techOut: 2, produceInterval: 30000, deepSpaceBonus: false, deepSpaceMul: 1 },
      effectDesc: '每周期产科技点 2；深空加成未解锁',
      desc: '产科技点 2/周期，仰望星空的第一步',
      flavor: '第一台望远镜指向木星时，值班员在日志里只写了两个字：真大。', },
    { cost: { steel: 80, rare: 60, tech: 20 }, needPop: 16, powerUse: 5,
      effect: { techOut: 5, produceInterval: 30000, deepSpaceBonus: true, deepSpaceMul: 1.5 },
      effectDesc: '每周期产科技点 5；解锁深空加成：深空采矿/天线产量 ×1.5',
      desc: '产科技点 5/周期；解锁深空加成（深空系产量 ×1.5）',
      flavor: '射电阵列第一次收到有规律的深空信号，全城为此多放了一天假。', },
    { cost: { steel: 200, tech: 80, rare: 120 }, needPop: 28, powerUse: 8,
      effect: { techOut: 12, produceInterval: 30000, deepSpaceBonus: true, deepSpaceMul: 2.0 },
      effectDesc: '每周期产科技点 12；深空加成提升至 ×2.0',
      desc: '产科技点 12/周期；深空加成 ×2.0',
      flavor: '穹顶打开的夜晚，整个城市的灯都会调暗——把星空还给星空。', },
  ],
  desc: '产科技点；Lv2 解锁深空加成（深空采矿/天线产量提升），深空流必备',
  unlock: { type: 'tech', ref: 't-prod-6',
    desc: '需研究「量子计算」科技（t-prod-6）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 7. 🧫 基因实验室 gene_lab（科研系）
// 定位：人口增长放大器 +「克隆加成」解锁。Lv1 即提供全城人口增长 ×1.5，
// Lv2 达到 ×2（任务指标），Lv3 ×3 并解锁克隆设施产量加成。
// ★ 读取约定（pop.js / build.js 防御性读取）：
//   const eff = ((BUILDINGS.gene_lab.levels[b.level]) || {}).effect || {};
//   const gMul = eff.growthMul || 1;                    // 乘法，作用于全城人口自然增长
//   const cloneOn = !!eff.cloneBonus;                  // Lv3 为 true：解锁克隆加成
//   const cloneMul = eff.cloneMul || 1;                // 作用于 clone 建筑的人口产出
//   // 多座基因实验室：growthMul 取最高（不叠乘，防止指数爆炸），cloneMul 同理。
// 数值平衡注释：
//   - growthMul 取最高不叠加是刻意设计：否则 3 座 Lv3 就是 ×27，直接把人口系统玩坏；
//   - Lv1 ×1.5 让前期人口滚雪球，Lv2 ×2 是中期扩张期的标准答案；
//   - cost 含 ice（40/80/150）：基因培养需要大量纯净水，路线与温室抢水，逼玩家做取舍。
// ═══════════════════════════════════════════════════════════════════════
gene_lab: {
  id: 'gene_lab', name: '基因实验室', icon: '🧫',
  levels: [null,
    { cost: { iron: 100, ice: 40 }, needPop: 10, powerUse: 3,
      effect: { growthMul: 1.5, cloneBonus: false, cloneMul: 1 },
      effectDesc: '全城人口增长 ×1.5',
      desc: '人口增长 ×1.5，基因优化的第一步',
      flavor: '培养皿里的第一次细胞分裂，被全息投影放大到穹顶上直播。', },
    { cost: { steel: 120, ice: 80, tech: 30 }, needPop: 20, powerUse: 5,
      effect: { growthMul: 2.0, cloneBonus: false, cloneMul: 1 },
      effectDesc: '全城人口增长 ×2',
      desc: '人口增长 ×2，城市进入快速扩张期',
      flavor: '人口统计员看着曲线说：这哪是增长，这是火星在下崽。', },
    { cost: { steel: 300, ice: 150, tech: 120, rare: 80 }, needPop: 35, powerUse: 8,
      effect: { growthMul: 3.0, cloneBonus: true, cloneMul: 2.0 },
      effectDesc: '全城人口增长 ×3；解锁克隆加成：克隆设施人口产出 ×2',
      desc: '人口增长 ×3；解锁克隆加成（克隆设施产出 ×2）',
      flavor: '伦理委员会开了 47 次会，最后结论是：先让城市活下去，再讨论对错。', },
  ],
  desc: '人口增长 ×1.5/×2/×3；Lv3 解锁克隆加成（克隆设施产出 ×2）',
  unlock: { type: 'tech', ref: 't-surv-3',
    desc: '需研究生存系 T3 科技（t-surv-3，如基因相关前置）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 8. 🎯 轨道炮 railgun（军事系）
// 定位：反深空威胁的「天基拦截器」。深空威胁（deep_space.js 的敌群/陨石群）
// 来袭时自动开火，按拦截率造成伤害；平时是耗电的摆设。
// ★ 读取约定（deep_space.js / military.js 防御性读取）：
//   const eff = ((BUILDINGS.railgun.levels[b.level]) || {}).effect || {};
//   const dmg = eff.interceptDmg || 0;                 // 单次拦截伤害
//   const chance = eff.interceptChance || 0;           // 每次威胁事件的拦截概率
//   const cd = eff.cooldown || 60000;                  // 开火冷却（毫秒）
//   // 多座轨道炮：每座独立判定（分别 roll 点），伤害可叠加；
//   // 损坏/断电的轨道炮跳过判定。
//   // 与军事学院联动（未来）：towerDmgMul 同样按乘法作用于 interceptDmg。
// 数值平衡注释：
//   - Lv1 30% 拦截 100 伤：能处理小型陨石群，大威胁只能刮痧；
//   - Lv3 80% 拦截 800 伤：深空流后期的「定心丸」，但 cost 含 20→120 he3，
//     与方舟胜利抢 He3 资源，逼玩家在「守家」与「跑路」之间选边；
//   - powerUse 5/9/15 且开火瞬间额外 +10 电（脉冲电容充电），电力规划必须留余量。
// ═══════════════════════════════════════════════════════════════════════
railgun: {
  id: 'railgun', name: '轨道炮', icon: '🎯',
  levels: [null,
    { cost: { steel: 150, tech: 40 }, needPop: 15, powerUse: 5,
      effect: { interceptDmg: 100, interceptChance: 0.30, cooldown: 90000, firePowerSurge: 10 },
      effectDesc: '深空威胁来袭时 30% 概率拦截，造成 100 伤害（冷却 90 秒）',
      desc: '30% 概率拦截深空威胁，伤害 100',
      flavor: '试射那天，目标陨石在天上开出一朵沉默的火花。', },
    { cost: { steel: 350, tech: 100, rare: 60 }, needPop: 25, powerUse: 9,
      effect: { interceptDmg: 300, interceptChance: 0.50, cooldown: 75000, firePowerSurge: 10 },
      effectDesc: '深空威胁来袭时 50% 概率拦截，造成 300 伤害（冷却 75 秒）',
      desc: '50% 概率拦截深空威胁，伤害 300',
      flavor: '炮组成员的口头禅：让它们见识一下什么叫「精准」。', },
    { cost: { steel: 700, tech: 250, he3: 20 }, needPop: 40, powerUse: 15,
      effect: { interceptDmg: 800, interceptChance: 0.80, cooldown: 60000, firePowerSurge: 10 },
      effectDesc: '深空威胁来袭时 80% 概率拦截，造成 800 伤害（冷却 60 秒）',
      desc: '80% 概率拦截深空威胁，伤害 800，深空防御终极形态',
      flavor: '「从今天起，任何不请自来的天外访客，都得先过我们这一关。」——防务部长', },
  ],
  desc: '自动拦截深空威胁（陨石群/敌群）；平时耗电，战时是全城的伞',
  unlock: { type: 'tech', ref: 't-orbital-3',
    desc: '需研究轨道系 T3 科技（t-orbital-3）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 9. 🛡️ 护盾穹顶 shield_dome（军事系）
// 定位：全城级灾难减伤。沙尘暴/陨石/设备事故造成的资源与建筑损失按比例减免，
// Lv3 直接免疫陨石损坏（与 t-build-4「坚固结构」效果等价，可叠加判断）。
// ★ 读取约定（disaster.js 防御性读取）：
//   const eff = ((BUILDINGS.shield_dome.levels[b.level]) || {}).effect || {};
//   const mit = eff.disasterMitigation || 0;           // 0~0.75：灾难损失减免比例
//   const meteorImmune = !!eff.meteorImmune;           // Lv3 为 true：免疫陨石建筑损坏
//   // 实际损失 = 基础损失 × (1 - mit)；多座护盾穹顶取最高 mit，不叠加；
//   // meteorImmune 任一为 true 即免疫（与科技 t-build-4 的 meteorImmune 做 OR 判断）。
//   // 注意：护盾穹顶本身损坏时不提供减免；减免不适用于「时间胶囊」已封存的资源
//   // （封存资源本来就不受灾难影响，不重复计算）。
// 数值平衡注释：
//   - 25%/50%/75% 是线性减伤，Lv3 的 75% + 陨石免疫让后期城市「灾难脱敏」；
//   - cost 极高（Lv3 要 900 钢 + 200 科技 + 30 He3），定位是「买了保险就别指望扩军」
//     的战略选择；
//   - powerUse 8/14/22 全场最高一档：开着穹顶，全城灯都要暗一度。
// ═══════════════════════════════════════════════════════════════════════
shield_dome: {
  id: 'shield_dome', name: '护盾穹顶', icon: '🛡️',
  levels: [null,
    { cost: { steel: 200, tech: 30 }, needPop: 20, powerUse: 8,
      effect: { disasterMitigation: 0.25, meteorImmune: false },
      effectDesc: '全城灾难损失 -25%',
      desc: '全城灾难损失 -25%，第一层穹顶护盾',
      flavor: '护盾升起的瞬间，孩子们第一次敢在沙尘暴天出门。', },
    { cost: { steel: 450, tech: 90, rare: 60 }, needPop: 35, powerUse: 14,
      effect: { disasterMitigation: 0.50, meteorImmune: false },
      effectDesc: '全城灾难损失 -50%',
      desc: '全城灾难损失 -50%，双层护盾叠加',
      flavor: '气象局现在播报灾难预警的语气，像在播报「今日有小雨」。', },
    { cost: { steel: 900, tech: 200, he3: 30 }, needPop: 55, powerUse: 22,
      effect: { disasterMitigation: 0.75, meteorImmune: true },
      effectDesc: '全城灾难损失 -75%，免疫陨石建筑损坏',
      desc: '全城灾难损失 -75%，免疫陨石损坏——灾难脱敏',
      flavor: '穹顶完全展开那天，市长说：从今天起，火星得按我们的规矩来。', },
  ],
  desc: '全城灾难损失 -25%/-50%/-75%；Lv3 免疫陨石建筑损坏',
  unlock: { type: 'tech', ref: 't-build-9',
    desc: '需研究「巨型结构」科技（t-build-9，解锁生态穹顶）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 10. 🏛️ 议会大厦 parliament（市政系）
// 定位：政策槽位供应商。政策系统（policy.js）的槽位上限 +N，
// 让玩家可以同时生效更多政策，是政策流的核心建筑。
// ★ 读取约定（policy.js 防御性读取）：
//   const eff = ((BUILDINGS.parliament.levels[b.level]) || {}).effect || {};
//   const slots = eff.policySlots || 0;                // 单座提供的额外槽位
//   // 全城政策槽上限 = 基础槽位 + 各议会大厦 policySlots 加法汇总；
//   // 议会大厦被拆除/损坏时，若已生效政策数 > 新上限，按「最后生效的先冻结」
//   // 规则冻结超出的政策（policy.js 实现），不直接移除。
//   // 附带效果：每级议会大厦使全城幸福 +2（民主的味道），见 eff.happiness。
// 数值平衡注释：
//   - Lv1 即 +2 槽（任务指标），Lv2 +3、Lv3 +4；多座可叠，政策流后期可堆到 10+ 槽；
//   - cost 走 iron/steel/tech 平滑曲线，无稀有资源门槛，定位是「谁都出得起的市政基建」；
//   - needPop 高（15/30/50）：议会需要议员、秘书、记者——人是真的人。
// ═══════════════════════════════════════════════════════════════════════
parliament: {
  id: 'parliament', name: '议会大厦', icon: '🏛️',
  levels: [null,
    { cost: { iron: 150, steel: 40 }, needPop: 15, powerUse: 3,
      effect: { policySlots: 2, happiness: 2 },
      effectDesc: '政策槽 +2，全城幸福 +2',
      desc: '政策槽 +2：第一届火星议会开幕',
      flavor: '第一次投票的议题是「食堂要不要加辣」，全票通过。', },
    { cost: { steel: 150, tech: 30 }, needPop: 30, powerUse: 5,
      effect: { policySlots: 3, happiness: 4 },
      effectDesc: '政策槽 +3，全城幸福 +4',
      desc: '政策槽 +3：两院制改革完成',
      flavor: '反对派领袖的竞选口号是「让每一度电都有人负责」，他赢了。', },
    { cost: { steel: 400, tech: 100, rare: 60 }, needPop: 50, powerUse: 8,
      effect: { policySlots: 4, happiness: 6 },
      effectDesc: '政策槽 +4，全城幸福 +6',
      desc: '政策槽 +4：星港宪章签署地',
      flavor: '大厦穹顶上刻着建城者的话：我们投票，我们负责，我们留下。', },
  ],
  desc: '政策槽 +2/+3/+4，附带全城幸福加成；政策流核心建筑',
  unlock: { type: 'building', ref: 'command', level: 1,
    desc: '需先建造指挥中心（command）；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 11. 💱 交易所 exchange（市政系）
// 定位：贸易价格放大器。trade.js 的所有买入/卖出价格按比例提升，
// Lv1 即 +20%（任务指标），是贸易流的印钞机。
// ★ 读取约定（trade.js 防御性读取）：
//   const eff = ((BUILDINGS.exchange.levels[b.level]) || {}).effect || {};
//   const mul = eff.tradePriceMul || 1;                // 乘法，作用于贸易结算价
//   // 多座交易所：取最高 tradePriceMul（不叠乘，防止贸易套利指数爆炸）；
//   // 作用方向：卖出价 × mul（多赚钱），买入价 ÷ mul（少花钱）——双向优惠；
//   // 与政策「自由贸易」叠加时：先算交易所乘区，再算政策乘区（两乘区相乘）。
// 数值平衡注释：
//   - Lv1 +20% 是贸易流的质变点：一条原本微利的航线直接变肥；
//   - Lv3 ×1.5 配合政策可达 ×1.8，是后期经济的主要引擎之一；
//   - cost 含 rare（20/40/80）：交易所需要稀有金属做结算锚，主题自洽；
//   - powerUse 低（2/3/5）：印钞机不怎么耗电，耗的是信任。
// ═══════════════════════════════════════════════════════════════════════
exchange: {
  id: 'exchange', name: '交易所', icon: '💱',
  levels: [null,
    { cost: { iron: 120, rare: 20 }, needPop: 10, powerUse: 2,
      effect: { tradePriceMul: 1.2 },
      effectDesc: '贸易价格 +20%（卖出价×1.2，买入价÷1.2）',
      desc: '贸易价格 +20%：星港第一家交易所挂牌',
      flavor: '开盘第一天，一吨铁矿的价格波动比沙尘暴还刺激。', },
    { cost: { steel: 120, tech: 25, rare: 40 }, needPop: 20, powerUse: 3,
      effect: { tradePriceMul: 1.35 },
      effectDesc: '贸易价格 +35%（卖出价×1.35，买入价÷1.35）',
      desc: '贸易价格 +35%：跨城结算中心成立',
      flavor: '交易员们发明了火星第一句黑话：「今天风向如何」指的不是天气。', },
    { cost: { steel: 300, tech: 90, rare: 80 }, needPop: 35, powerUse: 5,
      effect: { tradePriceMul: 1.5 },
      effectDesc: '贸易价格 +50%（卖出价×1.5，买入价÷1.5）',
      desc: '贸易价格 +50%：太阳系贸易枢纽',
      flavor: '地球来的商船船长说：在这里做生意，比在地球上讲道理容易。', },
  ],
  desc: '贸易价格 +20%/+35%/+50%（买卖双向优惠）；贸易流印钞机',
  unlock: { type: 'tech', ref: 't-prod-2',
    desc: '需研究「水循环」科技（t-prod-2，贸易体系前置）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 12. 🏥 医疗中心 medcenter（市政系）
// 定位：医院的升级版。核心承诺「人口不死」——自然死亡/疾病死亡事件不再
// 减少人口；同时人口增长 ×1.5 起跳。
// ★ 读取约定（pop.js 防御性读取）：
//   const eff = ((BUILDINGS.medcenter.levels[b.level]) || {}).effect || {};
//   const noDeath = !!eff.mortalityImmune;             // true：免疫自然/疾病死亡
//   const gMul = eff.growthMul || 1;                  // 乘法，人口增长
//   // 任一正常运转的医疗中心提供 noDeath 即全城免疫（OR 判断）；
//   // growthMul 多座取最高（与基因实验室的 growthMul 取两者最高，不叠乘）；
//   // 注意：noDeath 不免疫灾难/战争/饥荒死亡——医疗中心治病，不挡陨石。
//   // 前置要求：建造需 hospital 达到 Lv3（unlock.building + unlock.level 判定）。
// 数值平衡注释：
//   - 「人口不死」是质变：后期人口上千后，一次流感事件掉 50 人是常态，免疫后
//     人口曲线只上不下；
//   - growthMul 1.5/2.0/2.5 与基因实验室取最高，避免双建筑叠出 ×7.5 的怪物曲线；
//   - cost 极高（Lv3 700 钢 + 180 科技）：这是给「人口胜利」路线准备的终极民生建筑。
// ═══════════════════════════════════════════════════════════════════════
medcenter: {
  id: 'medcenter', name: '医疗中心', icon: '🏥',
  levels: [null,
    { cost: { steel: 150, tech: 20 }, needPop: 25, powerUse: 6,
      effect: { mortalityImmune: true, growthMul: 1.5 },
      effectDesc: '人口免疫自然/疾病死亡；人口增长 ×1.5',
      desc: '人口不死（免疫自然/疾病死亡），增长 ×1.5',
      flavor: '第一例「零死亡季度」达成时，院长把香槟换成了营养液——敬规矩。', },
    { cost: { steel: 350, tech: 70, rare: 50 }, needPop: 45, powerUse: 10,
      effect: { mortalityImmune: true, growthMul: 2.0 },
      effectDesc: '人口免疫自然/疾病死亡；人口增长 ×2.0',
      desc: '人口不死，增长 ×2.0：全城免费医疗',
      flavor: '挂号处取消了——在火星，看病排队是上个世纪的事。', },
    { cost: { steel: 700, tech: 180, rare: 120 }, needPop: 70, powerUse: 16,
      effect: { mortalityImmune: true, growthMul: 2.5 },
      effectDesc: '人口免疫自然/疾病死亡；人口增长 ×2.5',
      desc: '人口不死，增长 ×2.5：生命科学圣殿',
      flavor: '「我们治不好乡愁，但我们能让你活得够久，久到忘记它。」——院训', },
  ],
  desc: '医院升级版：人口免疫自然/疾病死亡，增长 ×1.5/×2/×2.5（不免疫灾难/战争/饥荒）',
  unlock: { type: 'building', ref: 'hospital', level: 3,
    desc: '需医院（hospital）升至 Lv3 后解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 13. ⏳ 时间胶囊 time_capsule（特殊系）
// 定位：灾难保险柜。平时按比例把产出存入胶囊（独立于仓库上限），
// 灾难发生后自动开封取出，帮城市「穿越」灾难。
// ★ 读取约定（build.js / disaster.js / logistics.js 防御性读取）：
//   const eff = ((BUILDINGS.time_capsule.levels[b.level]) || {}).effect || {};
//   const cap = eff.vaultCap || 0;                     // 胶囊总容量（资源单位）
//   const rate = eff.storeRate || 0;                   // 每周期自动存入比例（0~1）
//   // 存入规则：每周期按 storeRate 把「各类资源当前产量」转入胶囊，直到 vaultCap；
//   // 胶囊内资源不计入仓库上限、不参与日常消耗、不受灾难掠夺；
//   // 取出规则：disaster.js 在灾难结算后调用 releaseTimeCapsule()，
//   //   若 eff.autoRelease 为 true，自动把胶囊内全部资源返还仓库（按当前上限截断）；
//   // 多座胶囊：容量与存入各自独立计算，取出时合并返还。
//   // 实现注意：存入的是「产量」不是「库存」，避免玩家手动倒仓刷胶囊。
// 数值平衡注释：
//   - Lv1 容量 200 ≈ STORAGE_BASE，storeRate 5% 几乎无感，是「买个心安」；
//   - Lv3 容量 1500、10% 存入，连续无灾 20 周期可存满，一次大灾难后返还
//     相当于白嫖半个仓库；
//   - cost 含 tech（20/80）：时间锁技术是科技活，不是堆铁就行。
// ═══════════════════════════════════════════════════════════════════════
time_capsule: {
  id: 'time_capsule', name: '时间胶囊', icon: '⏳',
  levels: [null,
    { cost: { steel: 60, rare: 20 }, needPop: 5, powerUse: 2,
      effect: { vaultCap: 200, storeRate: 0.05, autoRelease: true },
      effectDesc: '容量 200；每周期存入 5% 产量；灾难后自动取出',
      desc: '存资源进胶囊（容量 200），灾难后自动取出',
      flavor: '第一颗胶囊埋下去时，市长往里面塞了张纸条：给未来的我们，加油。', },
    { cost: { steel: 150, rare: 50, tech: 20 }, needPop: 10, powerUse: 3,
      effect: { vaultCap: 600, storeRate: 0.08, autoRelease: true },
      effectDesc: '容量 600；每周期存入 8% 产量；灾难后自动取出',
      desc: '存资源进胶囊（容量 600），灾难后自动取出',
      flavor: '会计说：这 8% 是城市给未来交的税，税率很良心。', },
    { cost: { steel: 350, tech: 80, rare: 100 }, needPop: 18, powerUse: 5,
      effect: { vaultCap: 1500, storeRate: 0.10, autoRelease: true },
      effectDesc: '容量 1500；每周期存入 10% 产量；灾难后自动取出',
      desc: '存资源进胶囊（容量 1500），灾难后自动取出——穿越灾难',
      flavor: '「灾难会过去，胶囊会记得。」——时间胶囊管理条例第一条', },
  ],
  desc: '灾难保险柜：平时按比例存入产量（独立于仓库上限），灾难后自动取出',
  unlock: { type: 'tech', ref: 't-build-3',
    desc: '需研究「快速升级」科技（t-build-3）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 14. 🗿 纪念碑 monument（特殊系）
// 定位：成就点数 + 幸福双产出的「精神建筑」。不产任何实体资源，
// 但持续产出成就点数（achievements.js）与全城幸福，是文化胜利的挂件。
// ★ 读取约定（achievements.js / pop.js 防御性读取）：
//   const eff = ((BUILDINGS.monument.levels[b.level]) || {}).effect || {};
//   const pts = eff.achievementPts || 0;               // 每 grantInterval 产出的成就点数
//   const hap = eff.happiness || 0;                    // 全城幸福加成（加法汇总）
//   // 成就点数直接计入 achievements.js 的总分（与事件成就分开统计，来源标记 'monument'）；
//   // 多座纪念碑：成就点数加法汇总，幸福加法汇总；
//   // 纪念碑被灾难摧毁时，已发放的成就点数保留，未发放的清零（精神遗产不没收）。
// 数值平衡注释：
//   - Lv1 每 60 秒 1 点：聊胜于无，主要是幸福 +5 的民生价值；
//   - Lv3 每 60 秒 6 点 + 幸福 25：成就流后期的稳定分仓，但 cost 含 100 稀有矿，
//     属于「有钱人的浪漫」；
//   - 不耗电（powerUse 0）：石头不需要电，这是它最后的倔强。
// ═══════════════════════════════════════════════════════════════════════
monument: {
  id: 'monument', name: '纪念碑', icon: '🗿',
  levels: [null,
    { cost: { iron: 100, steel: 20 }, needPop: 5, powerUse: 0,
      effect: { achievementPts: 1, grantInterval: 60000, happiness: 5 },
      effectDesc: '每 60 秒产成就点数 1，全城幸福 +5',
      desc: '成就点数 1/60秒，全城幸福 +5：第一块奠基石',
      flavor: '碑上刻着第一批登陆者的名字，风沙磨不掉——我们试过。', },
    { cost: { steel: 120, rare: 40 }, needPop: 12, powerUse: 0,
      effect: { achievementPts: 3, grantInterval: 60000, happiness: 12 },
      effectDesc: '每 60 秒产成就点数 3，全城幸福 +12',
      desc: '成就点数 3/60秒，全城幸福 +12：城市精神地标',
      flavor: '新婚夫妇流行在碑前合影，背景是整座城市的灯火。', },
    { cost: { steel: 350, tech: 60, rare: 100 }, needPop: 25, powerUse: 0,
      effect: { achievementPts: 6, grantInterval: 60000, happiness: 25 },
      effectDesc: '每 60 秒产成就点数 6，全城幸福 +25',
      desc: '成就点数 6/60秒，全城幸福 +25：太阳系奇观',
      flavor: '地球来的游客说：这碑不高，但站在这儿，你会觉得人类挺了不起的。', },
  ],
  desc: '精神建筑：持续产出成就点数与全城幸福，不产实体资源、不耗电',
  unlock: { type: 'none', desc: '开局可建' },
},

// ═══════════════════════════════════════════════════════════════════════
// 15. 🌀 虫洞稳定器 wormhole_stabilizer（特殊系）
// 定位：终极科技前置 + 第四胜利条件钥匙。全城虫洞稳定度达到 3（即本建筑 Lv3
// 且正常运转）时，解锁第四胜利条件「虫洞远征」的最终判定。
// ★ 读取约定（game.js 胜利判定 / tech.js 防御性读取）：
//   const eff = ((BUILDINGS.wormhole_stabilizer.levels[b.level]) || {}).effect || {};
//   const stab = eff.stability || 0;                   // 单座提供的稳定度
//   // 全城稳定度 = 各稳定器 stability 加法汇总（损坏/断电的不计入）；
//   // 第四胜利条件（game.js 实现）：全城稳定度 ≥ 3 且 tech ≥ 500 且 pop ≥ 300
//   //   → 判定「虫洞远征」胜利。victory4Ready 字段为 Lv3 专属标记，供 UI 高亮。
//   // 终极科技前置：tech.js 的终极科技（如 t-orbital-6 之后）可要求
//   //   stability ≥ 1 作为研究前置（research 前检查全城稳定度）。
//   // 实现注意：稳定度是「状态」不是「资源」，不存储、不消耗，每 tick 重算。
// 数值平衡注释：
//   - 这是全场最贵的建筑（Lv3：1500 钢 + 700 科技 + 120 He3 + 40 铀），
//     定位是整局游戏的终点线，不是中期建筑；
//   - Lv1/Lv2 只给稳定度 1/2，用于「终极科技前置」研究，不触发胜利；
//   - powerUse 20/35/60：稳定虫洞需要恒星级的能量，电力系统必须为它单独规划；
//   - 解锁要求深空天线 Lv3：没有深空观测能力，谈何稳定虫洞。
// ═══════════════════════════════════════════════════════════════════════
wormhole_stabilizer: {
  id: 'wormhole_stabilizer', name: '虫洞稳定器', icon: '🌀',
  levels: [null,
    { cost: { steel: 400, tech: 150, he3: 20 }, needPop: 60, powerUse: 20,
      effect: { stability: 1, victory4Ready: false },
      effectDesc: '虫洞稳定度 +1（终极科技研究前置，不触发胜利）',
      desc: '虫洞稳定度 +1：第一次让虫洞「安静」了 3 秒',
      flavor: '稳定器启动的 3 秒里，实验室所有仪器的指针都停了——像在致敬。', },
    { cost: { steel: 800, tech: 350, he3: 50, rare: 100 }, needPop: 90, powerUse: 35,
      effect: { stability: 2, victory4Ready: false },
      effectDesc: '虫洞稳定度 +2（终极科技研究前置，不触发胜利）',
      desc: '虫洞稳定度 +2：虫洞口径稳定在可通行范围',
      flavor: '物理学家在庆功宴上喝多了，抱着稳定器说：你比我的博士论文听话。', },
    { cost: { steel: 1500, tech: 700, he3: 120, uranium: 40 }, needPop: 130, powerUse: 60,
      effect: { stability: 3, victory4Ready: true },
      effectDesc: '虫洞稳定度 +3：解锁第四胜利条件「虫洞远征」（需科技≥500、人口≥300）',
      desc: '虫洞稳定度 +3：第四胜利条件「虫洞远征」钥匙',
      flavor: '「门开了。太阳系很大，但我们决定去更大的地方看看。」——远征宣言', },
  ],
  desc: '终极科技前置；稳定度达 3 时解锁第四胜利条件「虫洞远征」',
  unlock: { type: 'building', ref: 'antenna', level: 3,
    desc: '需深空天线（antenna）升至 Lv3 后解锁；未定义时保持锁定' },
},

}; // end BUILDINGS_V15

// ═══════════════════════════════════════════════════════════════════════
// v1.5 UI 建筑顺序（index.html / help.js 按此顺序渲染建造菜单）
// ═══════════════════════════════════════════════════════════════════════
const BUILD_ORDER_V15 = [
  'wind_turbine', 'geothermal',
  'food_processor', 'robot_factory', 'nano_assembler',
  'observatory', 'gene_lab',
  'railgun', 'shield_dome',
  'parliament', 'exchange', 'medcenter',
  'time_capsule', 'monument', 'wormhole_stabilizer',
];

// ═══════════════════════════════════════════════════════════════════════
// 接入函数：把 v1.5 建筑合并进全局 BUILDINGS（build.js 定义）。
// 由 index.html 在 build.js 之后、game.js 之前调用：
//   <script src="buildings_v15.js"></script>
//   <script>mergeBuildingsV15();</script>
// 重复调用安全（幂等）：已存在的 id 会被覆盖为同一定义，不会重复累加。
// ═══════════════════════════════════════════════════════════════════════
function mergeBuildingsV15() {
  if (typeof BUILDINGS === 'undefined') {
    console.warn('[buildings_v15] BUILDINGS 未定义，跳过合并（请确认 build.js 已加载）');
    return false;
  }
  Object.assign(BUILDINGS, BUILDINGS_V15);
  return true;
}

// ═══════════════════════════════════════════════════════════════════════
// 聚合接口（供各系统调用，损坏/断电的建筑由调用方过滤；老化折算由调用方按
// build.js 的老化规则处理，本接口只做「正常运转建筑」的加法/取最高汇总）。
// 用法示例：
//   const s = V15Agg.sum(game.buildings, 'wind_turbine', b => V15Agg.effectOf('wind_turbine', b.level).power || 0);
// ═══════════════════════════════════════════════════════════════════════
const V15Agg = {
  // 取某建筑某等级的 effect 对象（防御性：缺失时返回 {}）
  effectOf(id, level) {
    const def = BUILDINGS_V15[id];
    if (!def || !def.levels) return {};
    return (def.levels[level] || {}).effect || {};
  },
  // 对全城某建筑的所有实例求和（mapFn 从 effect 提取数值；损坏的实例调用方自行过滤）
  sum(buildings, id, mapFn) {
    let total = 0;
    for (const b of buildings || []) {
      if (b.id !== id) continue;
      total += mapFn(this.effectOf(id, b.level), b) || 0;
    }
    return total;
  },
  // 对全城某建筑的所有实例取最大值（用于 growthMul / tradePriceMul / deepSpaceMul 等乘区）
  max(buildings, id, mapFn) {
    let best = 0;
    let found = false;
    for (const b of buildings || []) {
      if (b.id !== id) continue;
      const v = mapFn(this.effectOf(id, b.level), b) || 0;
      if (!found || v > best) { best = v; found = true; }
    }
    return found ? best : 0;
  },
  // 全城虫洞稳定度（加法汇总，供第四胜利条件判定）
  wormholeStability(buildings) {
    return this.sum(buildings, 'wormhole_stabilizer', eff => eff.stability || 0);
  },
  // 全城机器人虚拟人口（加法汇总，供 pop.js 劳动力计算）
  robotPopulation(buildings) {
    return this.sum(buildings, 'robot_factory', eff => eff.robotPop || 0);
  },
  // 全城时间胶囊总容量（加法汇总）
  capsuleCapacity(buildings) {
    return this.sum(buildings, 'time_capsule', eff => eff.vaultCap || 0);
  },
};
