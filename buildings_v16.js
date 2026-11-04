/* 星港 — buildings_v16.js：v1.6 新增 20 种建筑 × 3 级（天空/机器人/深海/地下）
 *
 * 本文件延续 build.js / buildings_v13.js / buildings_v15.js 的数据约定：
 *   - levels[1..3]（索引 0 为 null 占位），每级 { cost, needPop, powerUse, effect, effectDesc, desc, flavor }
 *   - cost 的 key 只用现有资源：iron / ice / rare / water / food / steel / tech / uranium / he3 / nano
 *   - 自定义效果字段全部收拢在每级的 `effect` 对象里，配合「★ 读取约定」注释，
 *     供其他系统（disaster.js / pop.js / trade.js / sky.js / robots.js）防御性读取：
 *       const eff = ((BUILDINGS[id].levels[b.level]) || {}).effect || {};
 *       const x = eff.someField || 0;
 *   - unlock：{ type:'tech'|'building'|'none', ref, level?, desc }；引用不存在的科技/建筑
 *     时按「未解锁」处理（防御性），游戏逻辑侧不得假设其存在。
 *   - 接入方式：本文件只声明 const BUILDINGS_V16，不自动合并；接入时调用文件末尾的
 *     mergeBuildingsV16()（Object.assign 到 BUILDINGS，并返回 UI 顺序数组 BUILD_ORDER_V16）。
 * ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑总览（20 种 × 3 级 = 60 个配置项）
 *   天空系（6）：sk16_windspire 气象尖塔 🌪️ / sk16_stormcollector 雷暴收集器 ⛈️ /
 *     sk16_strato_antenna 平流层天线 📡 / sk16_anchor_tower 锚定塔 ⚓ /
 *     sk16_skybeacon 天空灯塔 💡 / sk16_cloudmarket 云端市集 🏪
 *   机器人系（6）：rb16_logic_forge 逻辑熔炉 🔩 / rb16_cyber_clinic 义体诊所 🦾 /
 *     rb16_data_crypt 数据墓园 💾 / rb16_sync_tower 同步塔 🛰️ /
 *     rb16_oil_refinery 机油精炼厂 🛢️ / rb16_limb_workshop 义肢工坊 🦿
 *   深海系（4）：oc16_tidal_plant 潮汐电站 🌊 / oc16_vent_station 深海热泉站 ♨️ /
 *     oc16_coral_farm 珊瑚农场 🪸 / oc16_sub_dock 潜艇船坞 🚤
 *   地下系（4）：un16_mushroom_farm 蘑菇农场 🍄 / un16_core_elevator 地心电梯 🛗 /
 *     un16_magma_forge 岩浆锻造炉 🔥 / un16_echo_library 回声图书馆 📚
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 设计总纲：v1.6 的 20 种建筑是「四个世界的拼图」——
 *   天空系补「气象与导航」：让天空城从「能住」变成「好住」；
 *   机器人系补「硅基民生」：机器人不止是劳动力，它们有医院、坟墓和市场；
 *   深海系补「海洋工业」：潮汐与热泉是海洋的能源答案；
 *   地下系补「地心生活」：地下不止是矿洞，还能种蘑菇、读书、锻造。
 * 定价逻辑：天空系 cost 上浮 1.5 倍（上天加钱）；机器人系走 tech 路线；
 *   深海系走 ice/water 路线；地下系走 iron/steel 路线——四系资源错峰。
 */

const BUILDINGS_V16 = {

// ═══════════════════════════════════════════════════════════════════════
// 天空系 1/6：🌪️ 气象尖塔 sk16_windspire
// ───────────────────────────────────────────────────────────────────────
// 定位：天空城的「千里眼」。风暴雷达站（sky.js）管的是「预警时间」，
// 气象尖塔管的是「预警精度」：提前知道风暴的强度与路径，
// 让玩家决定「硬抗 / 疏散 / 关机」。
// ★ 读取约定（disaster.js / SkyWeather 防御性读取）：
//   const eff = ((BUILDINGS.sk16_windspire.levels[b.level]) || {}).effect || {};
//   const accuracy = eff.forecastAccuracy || 0;  // 预报精度 0~1（取最高）
//   const dmgPreview = !!eff.damagePreview;      // Lv2+：预警时显示预估损失
//   const evac = eff.evacuation || 0;            // Lv3：疏散效率（减伤，取最高）
//   // 实现：disaster.js 在发布空中风暴预警时，若 damagePreview 为 true，
//   //   toast 附带「预估损失 X 平台」；evac 按乘法减免实际损失。
// 数值平衡注释：
//   - Lv1 精度 0.5：告诉你「有风暴」，不告诉你多大——体验向；
//   - Lv2 精度 0.8 + 损失预览：策略向，玩家开始做取舍；
//   - Lv3 精度 1.0 + 疏散减伤 30%：天空流后期的「定心丸」；
//   - cost 走 tech 路线（20/60/150）：气象是科学，不是堆铁；
//   - powerUse 2/4/7：尖塔顶端的超级计算机 24 小时演算。
// 联动设计：
//   - 与风暴雷达站（storm_radar）叠加：预警时间（雷达）× 预警精度（尖塔），
//     两座建筑凑齐 = 天空气象体系毕业；
//   - 反制：EMP 灾难期间尖塔停机（精度归零），逼玩家修 EMP 屏蔽。
// ═══════════════════════════════════════════════════════════════════════
sk16_windspire: {
  id: 'sk16_windspire', name: '气象尖塔', icon: '🌪️',
  levels: [null,
    // Lv1：第一座尖塔——「有风暴」三个字，值 20 科技点
    { cost: { steel: 100, tech: 20 }, needPop: 8, powerUse: 2,
      effect: { forecastAccuracy: 0.5, damagePreview: false, evacuation: 0, skySupport: true },
      effectDesc: '风暴预报精度 50%（只报有无，不报强度）',
      desc: '预报精度 50%：知道风暴要来，不知道有多大',
      flavor: '尖塔第一次报警时，全城人都跑出来看天——天很蓝，风暴在三天后。', },
    // Lv2：损失预览——策略的开始
    { cost: { steel: 250, tech: 60, rare: 30 }, needPop: 15, powerUse: 4,
      effect: { forecastAccuracy: 0.8, damagePreview: true, evacuation: 0, skySupport: true },
      effectDesc: '预报精度 80%；预警时显示预估损失（硬抗/疏散/关机三选一）',
      desc: '精度 80% + 损失预览：策略向气象',
      flavor: '气象员现在敢说这样的话：「这次风暴，我们损失得起。」', },
    // Lv3：疏散体系——天空城的气象局毕业
    { cost: { steel: 500, tech: 150, rare: 80 }, needPop: 25, powerUse: 7,
      effect: { forecastAccuracy: 1.0, damagePreview: true, evacuation: 0.3, skySupport: true },
      effectDesc: '预报精度 100%；预估损失；疏散减伤 30%',
      desc: '精度 100%，疏散减伤 30%：天空气象体系毕业',
      flavor: '「风暴会来，但我们已经不在那儿了。」——气象尖塔站训', },
  ],
  desc: '天空气象：预报精度 50%/80%/100%，Lv2 预览损失，Lv3 疏散减伤 30%',
  unlock: { type: 'tech', ref: 't-sky-5',
    desc: '需研究「气象学」科技（t-sky-5）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 天空系 2/6：⛈️ 雷暴收集器 sk16_stormcollector
// ───────────────────────────────────────────────────────────────────────
// 定位：天空城的「赌徒电站」。平时不发电，雷暴/空中风暴期间
// 疯狂收集闪电——灾难越强，电越多。
// ★ 读取约定（build.js 电力聚合 / disaster.js 防御性读取）：
//   const eff = ((BUILDINGS.sk16_stormcollector.levels[b.level]) || {}).effect || {};
//   const base = eff.stormPower || 0;           // 风暴期间产电
//   const isStorm = game.disaster && game.disaster.isSkyStormActive &&
//     game.disaster.isSkyStormActive();
//   const out = isStorm ? base : 0;             // 平时 0 电
//   const charge = eff.chargeStorage || 0;      // Lv3：风暴后储能，持续放电
//   // 实现：Lv3 的 chargeStorage 让风暴结束后继续放电 120 秒（build.js 实现）
// 数值平衡注释：
//   - Lv1 风暴期 10 电：相当于白嫖一座核电站，但一年只开张几次；
//   - Lv3 风暴期 30 电 + 120 秒储能：风暴季的天空城可以「靠天吃饭」；
//   - 平时 0 电是刻意设计：和风力发电机（v1.5）形成「地面赌风/天空赌雷」对照组；
//   - cost 含 uranium（5/15）：收集器的超导线圈需要铀做屏蔽；
//   - powerUse 1/2/3：待机功耗，象征性收取。
// 联动设计：
//   - 与气象尖塔联动：精度 100% 时，玩家可以提前把高耗电生产线排到风暴期，
//     「看天用电」玩法闭环；
//   - 反制：被雷暴收集器「偷电」的风暴，强度 -10%（剧情杀：雷公也怕薅羊毛）。
// ═══════════════════════════════════════════════════════════════════════
sk16_stormcollector: {
  id: 'sk16_stormcollector', name: '雷暴收集器', icon: '⛈️',
  levels: [null,
    // Lv1：第一根引雷针——平时摆设，风暴期印钞
    { cost: { steel: 150, uranium: 5 }, needPop: 6, powerUse: 1,
      effect: { stormPower: 10, chargeStorage: 0, skySupport: true },
      effectDesc: '平时 0 电；雷暴/空中风暴期间产电 10',
      desc: '赌徒电站：平时 0 电，风暴期 10 电',
      flavor: '第一道闪电被抓住时，整个收集器亮得像第二个太阳。', },
    // Lv2：引雷阵列——风暴期 20 电
    { cost: { steel: 350, tech: 40, uranium: 10 }, needPop: 12, powerUse: 2,
      effect: { stormPower: 20, chargeStorage: 0, skySupport: true },
      effectDesc: '平时 0 电；雷暴/空中风暴期间产电 20',
      desc: '风暴期 20 电：引雷阵列',
      flavor: '工程师说：我们不是在收集闪电，是在给雷公「退税」。', },
    // Lv3：储能完全体——风暴后还能放电 120 秒
    { cost: { steel: 700, tech: 120, uranium: 15, rare: 60 }, needPop: 20, powerUse: 3,
      effect: { stormPower: 30, chargeStorage: 120000, skySupport: true },
      effectDesc: '风暴期 30 电；风暴后储能持续放电 120 秒',
      desc: '风暴期 30 电 + 120 秒储能：靠天吃饭',
      flavor: '「打雷了，全体注意：免费电力即将到货。」——天空城广播', },
  ],
  desc: '平时 0 电，雷暴/风暴期间 10/20/30 电；Lv3 风暴后储能 120 秒',
  unlock: { type: 'tech', ref: 't-sky-10',
    desc: '需研究「高能收集」科技（t-sky-10）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 天空系 3/6：📡 平流层天线 sk16_strato_antenna
// ───────────────────────────────────────────────────────────────────────
// 定位：天文台（v1.5）的「天空分台」。在平流层看星星，没有大气抖动，
// 深空加成更强；同时是「虫洞远征」胜利的地面-天空通信中继。
// ★ 读取约定（deep_space.js / build.js 防御性读取）：
//   const eff = ((BUILDINGS.sk16_strato_antenna.levels[b.level]) || {}).effect || {};
//   const dsMul = eff.deepSpaceMul || 1;   // 深空采矿/天线产量倍率（取最高）
//   const techOut = eff.techOut || 0;      // 每 produceInterval 产科技点
//   const relay = eff.wormholeRelay || 0;  // Lv3：虫洞稳定度 +1（与稳定器叠加）
//   // 实现：dsMul 与天文台的 deepSpaceMul 取最高（不叠乘）；
//   //   relay 与虫洞稳定器的 stability 加法汇总（game.js 胜利判定）。
// 数值平衡注释：
//   - Lv1 深空 ×1.3：比天文台 Lv2（×1.5）弱，但 cost 便宜一半——
//     「穷人的深空钥匙」；
//   - Lv3 深空 ×2.0 + 虫洞中继 +1：深空流毕业装，也是第四胜利的加速器；
//   - techOut 3/8/18 对标 AI 核心：天线阵列的副业是射电天文；
//   - powerUse 4/8/14：制冷系统是电老虎（和天文台一样）；
//   - 必须建在平流层以上（effect.minLayer='strato'）：低空大气抖动太大，
//     建了也白建——这是用建筑规则讲物理。
// 联动设计：
//   - 与天文台：dsMul 取最高，避免双建筑叠出 ×4 的怪物；
//   - 与虫洞稳定器：relay +1 让第四胜利从「1 座稳定器 Lv3」变成
//     「1 座稳定器 Lv2 + 1 座天线 Lv3」等多条路线。
// ═══════════════════════════════════════════════════════════════════════
sk16_strato_antenna: {
  id: 'sk16_strato_antenna', name: '平流层天线', icon: '📡',
  levels: [null,
    // Lv1：穷人的深空钥匙
    { cost: { steel: 200, tech: 40 }, needPop: 10, powerUse: 4,
      effect: { deepSpaceMul: 1.3, techOut: 3, produceInterval: 60000, wormholeRelay: 0, minLayer: 'strato', skySupport: true },
      effectDesc: '深空产量 ×1.3；每周期产科技点 3（需建在平流层以上）',
      desc: '深空 ×1.3，科技点 3：平流层看星星',
      flavor: '天线第一次对准银心时，值班员说：这里的星星不眨眼。', },
    // Lv2：深空加成追平天文台
    { cost: { steel: 450, tech: 100, rare: 60 }, needPop: 18, powerUse: 8,
      effect: { deepSpaceMul: 1.6, techOut: 8, produceInterval: 60000, wormholeRelay: 0, minLayer: 'strato', skySupport: true },
      effectDesc: '深空产量 ×1.6；每周期产科技点 8',
      desc: '深空 ×1.6，科技点 8：深空观测站',
      flavor: '射电阵列收到的信号里，有一段规律得像心跳——全城为此开了瓶香槟。', },
    // Lv3：虫洞中继——第四胜利的加速器
    { cost: { steel: 900, tech: 250, he3: 30 }, needPop: 30, powerUse: 14,
      effect: { deepSpaceMul: 2.0, techOut: 18, produceInterval: 60000, wormholeRelay: 1, minLayer: 'strato', skySupport: true },
      effectDesc: '深空产量 ×2.0；科技点 18；虫洞稳定度 +1（胜利加速器）',
      desc: '深空 ×2.0，虫洞稳定度 +1：深空毕业装',
      flavor: '「我们在天上给虫洞装了个门铃，门开了我们第一个知道。」——台长', },
  ],
  desc: '平流层深空天线：深空 ×1.3/×1.6/×2.0；Lv3 虫洞稳定度 +1（需平流层以上）',
  unlock: { type: 'tech', ref: 't-sky-12',
    desc: '需研究「深空通信」科技（t-sky-12）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 天空系 4/6：⚓ 锚定塔 sk16_anchor_tower
// ───────────────────────────────────────────────────────────────────────
// 定位：低空平台的「风筝线」。地面建筑（注意：这是地面建筑，
// 不是浮空建筑），为 5km 内的低空平台提供锚定，免除漂移，
// Lv3 还提供「缆绳电网」：低空平台维持耗电 -20%。
// ★ 读取约定（SkyManager.runUpkeep 防御性读取）：
//   const eff = ((BUILDINGS.sk16_anchor_tower.levels[b.level]) || {}).effect || {};
//   const range = eff.anchorRangeKm || 0;  // 锚定半径（km，加法汇总）
//   const upkeepCut = eff.upkeepCut || 0;  // Lv3：低空平台维持耗电 -20%（取最高）
//   // 实现：平台 p.layerId==='low' 且与任一锚定塔距离 ≤ range → p.anchored=true
// 数值平衡注释：
//   - Lv1 半径 5km：覆盖低空 12 槽中的约 6 个——逼玩家建 2 座或取舍；
//   - Lv3 半径 12km + 耗电 -20%：低空流毕业，一座塔管全场；
//   - 这是地面建筑（skyBuilding 无标记）：建在地上，服务天上——
//     「天地一体」的设计语言；
//   - cost 走 iron/steel（缆绳是铁的）：不抢 tech，定位是基建；
//   - powerUse 3/5/8：绞盘电机 24 小时待命。
// 联动设计：
//   - 与姿态引擎（平台升级）是替代关系：锚定塔便宜但占地面位，
//     姿态引擎贵但解放地面——两种解法，两种玩法；
//   - 反制：沙尘暴期间锚定塔缆绳磨损 +50%（disaster.js 读取 eff.sandWear）。
// ═══════════════════════════════════════════════════════════════════════
sk16_anchor_tower: {
  id: 'sk16_anchor_tower', name: '锚定塔', icon: '⚓',
  levels: [null,
    // Lv1：第一根风筝线
    { cost: { iron: 150, steel: 60 }, needPop: 8, powerUse: 3,
      effect: { anchorRangeKm: 5, upkeepCut: 0, sandWear: 1.5 },
      effectDesc: '5km 内低空平台免漂移（地面建筑）',
      desc: '5km 锚定：低空平台的风筝线',
      flavor: '第一根缆绳升空时，地面的人仰着头，像在放全世界最大的风筝。', },
    // Lv2：半径翻倍
    { cost: { steel: 250, iron: 200 }, needPop: 14, powerUse: 5,
      effect: { anchorRangeKm: 8, upkeepCut: 0, sandWear: 1.5 },
      effectDesc: '8km 内低空平台免漂移',
      desc: '8km 锚定：一座塔管半边天',
      flavor: '绞盘操作员说：我的工作就是和风拔河，我还没输过。', },
    // Lv3：缆绳电网——低空毕业
    { cost: { steel: 500, tech: 60, iron: 300 }, needPop: 22, powerUse: 8,
      effect: { anchorRangeKm: 12, upkeepCut: 0.2, sandWear: 1.5 },
      effectDesc: '12km 内低空平台免漂移；低空平台维持耗电 -20%（缆绳电网）',
      desc: '12km 锚定 + 耗电 -20%：低空流毕业',
      flavor: '「地上的塔，天上的城，一根绳子，连着人类的野心。」——塔铭', },
  ],
  desc: '地面建筑：5/8/12km 内低空平台免漂移；Lv3 低空维持耗电 -20%',
  unlock: { type: 'tech', ref: 't-sky-1',
    desc: '需研究「浮空原理」科技（t-sky-1）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 天空系 5/6：💡 天空灯塔 sk16_skybeacon
// ───────────────────────────────────────────────────────────────────────
// 定位：空域的「灯塔+交警」。为飞艇/巡逻机提供导航，
// 提升飞行器效率，Lv3 解锁「夜间起降」：飞艇运力 +50%。
// ★ 读取约定（SkyManager / buildAircraft 防御性读取）：
//   const eff = ((BUILDINGS.sk16_skybeacon.levels[b.level]) || {}).effect || {};
//   const nav = eff.navigateMul || 1;      // 飞行器效率倍率（取最高）
//   const night = !!eff.nightOps;          // Lv3：夜间起降（飞艇运力 +50%）
//   const safe = eff.crashReduce || 0;     // 坠毁概率降低（取最高）
//   // 实现：飞艇运力 = cargoCap × nav × (nightOps && isNight ? 1.5 : 1)
// 数值平衡注释：
//   - Lv1 导航 ×1.2：飞艇 200→240 运力，约等于多半艘飞艇；
//   - Lv3 ×1.5 + 夜间 +50%：天空物流体系毕业；
//   - crashReduce 0.2：灯塔让空域更安全——「灯塔」就得干灯塔的事；
//   - powerUse 3/5/9：灯塔的光束是全城最亮的灯，电费也最贵；
//   - cost 含 rare（灯塔透镜）：光学玻璃需要稀有矿。
// 联动设计：
//   - 与云港码头（cloud_harbor）叠加：装卸 ×2（码头）× 运力 ×1.5（灯塔），
//     天空物流乘区爆炸——但两座都是高 cost，后期才玩得起；
//   - 彩蛋：灯塔的光束颜色随城市幸福度变化（help.js 可读 eff.beaconHue）。
// ═══════════════════════════════════════════════════════════════════════
sk16_skybeacon: {
  id: 'sk16_skybeacon', name: '天空灯塔', icon: '💡',
  levels: [null,
    // Lv1：第一束光
    { cost: { steel: 120, rare: 20 }, needPop: 6, powerUse: 3,
      effect: { navigateMul: 1.2, nightOps: false, crashReduce: 0.1, beaconHue: 'warm', skySupport: true },
      effectDesc: '飞行器效率 ×1.2；空域事故 -10%',
      desc: '导航 ×1.2：空域的第一束光',
      flavor: '灯塔点亮那晚，飞艇船长说：终于不用靠数星星认路了。', },
    // Lv2：导航 ×1.35
    { cost: { steel: 300, rare: 50, tech: 30 }, needPop: 12, powerUse: 5,
      effect: { navigateMul: 1.35, nightOps: false, crashReduce: 0.15, beaconHue: 'warm', skySupport: true },
      effectDesc: '飞行器效率 ×1.35；空域事故 -15%',
      desc: '导航 ×1.35：空中交警上岗',
      flavor: '调度员说：以前飞艇靠缘分，现在靠灯塔——缘分那套可以退休了。', },
    // Lv3：夜间起降——天空物流毕业
    { cost: { steel: 600, tech: 100, rare: 100 }, needPop: 20, powerUse: 9,
      effect: { navigateMul: 1.5, nightOps: true, crashReduce: 0.2, beaconHue: 'adaptive', skySupport: true },
      effectDesc: '飞行器效率 ×1.5；夜间飞艇运力 +50%；空域事故 -20%',
      desc: '导航 ×1.5，夜间运力 +50%：天空物流毕业',
      flavor: '「光束的颜色会变——城市开心时是暖黄，警戒时是冷蓝。」——灯塔日志', },
  ],
  desc: '飞行器导航 ×1.2/×1.35/×1.5；Lv3 夜间运力 +50%，事故率降低',
  unlock: { type: 'tech', ref: 't-sky-3',
    desc: '需研究「飞行器工程」科技（t-sky-3）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 天空系 6/6：🏪 云端市集 sk16_cloudmarket
// ───────────────────────────────────────────────────────────────────────
// 定位：天空城的「商业街」。天空居民不用下地就能买东西，
// 全城幸福 +N，Lv3 解锁「云端拍卖行」：稀有资源贸易价格 +20%。
// ★ 读取约定（pop.js / trade.js 防御性读取）：
//   const eff = ((BUILDINGS.sk16_cloudmarket.levels[b.level]) || {}).effect || {};
//   const hap = eff.happiness || 0;            // 全城幸福（加法汇总）
//   const auction = eff.auctionMul || 1;       // Lv3：稀有资源贸易价倍率（取最高）
//   const skyTax = eff.skyTax || 0;            // 每周期税收（钢，自动）
//   // 实现：skyTax 每 produceInterval 自动 +钢到仓库（市集税）
// 数值平衡注释：
//   - Lv1 幸福 +6：约等于半座纪念碑，但 cost 便宜——天空民生向；
//   - Lv3 幸福 +18 + 拍卖行 +20% + 税收 10 钢/周期：天空商业完全体；
//   - skyTax 是「躺着收钱」：10 钢/60 秒 ≈ 一座小型钢厂的 1/3，
//     定位是添头，不是主力；
//   - powerUse 2/4/6：市集的霓虹灯很耗电，但很值得。
// 联动设计：
//   - 与交易所（v1.5）叠加：tradePriceMul（交易所）× auctionMul（市集），
//     稀有矿贸易价最高 ×1.8——倒爷玩法毕业；
//   - 与天空花园（sky_garden）：幸福双建筑，天空文化流核心。
// ═══════════════════════════════════════════════════════════════════════
sk16_cloudmarket: {
  id: 'sk16_cloudmarket', name: '云端市集', icon: '🏪',
  levels: [null,
    // Lv1：第一条商业街
    { cost: { steel: 150, iron: 100 }, needPop: 10, powerUse: 2,
      effect: { happiness: 6, auctionMul: 1, skyTax: 3, produceInterval: 60000, skySupport: true },
      effectDesc: '全城幸福 +6；每周期税收 3 钢',
      desc: '幸福 +6，税收 3 钢/周期：云上商业街',
      flavor: '第一家店开业卖的是热汤面——老板说，天上最缺的是人间烟火气。', },
    // Lv2：商业街扩建
    { cost: { steel: 350, tech: 40 }, needPop: 18, powerUse: 4,
      effect: { happiness: 12, auctionMul: 1, skyTax: 6, produceInterval: 60000, skySupport: true },
      effectDesc: '全城幸福 +12；每周期税收 6 钢',
      desc: '幸福 +12，税收 6 钢/周期：云端商圈',
      flavor: '市集的霓虹灯每晚准时亮起，飞艇船长说：那是天上最有人味的光。', },
    // Lv3：云端拍卖行——倒爷毕业
    { cost: { steel: 700, tech: 120, rare: 60 }, needPop: 30, powerUse: 6,
      effect: { happiness: 18, auctionMul: 1.2, skyTax: 10, produceInterval: 60000, skySupport: true },
      effectDesc: '全城幸福 +18；稀有资源贸易价 +20%；税收 10 钢/周期',
      desc: '幸福 +18，稀有贸易 +20%：云端拍卖行',
      flavor: '「第一件拍品是一瓶云端农场的空气，拍出了天价。」——拍卖行逸事', },
  ],
  desc: '全城幸福 +6/+12/+18；税收；Lv3 稀有资源贸易价 +20%',
  unlock: { type: 'tech', ref: 't-sky-8',
    desc: '需研究「云端物流」科技（t-sky-8）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 机器人系 1/6：🔩 逻辑熔炉 rb16_logic_forge
// ───────────────────────────────────────────────────────────────────────
// 定位：机器人的「健身房」。重铸机器人的逻辑核心，
// 提升全城机器人效率，Lv3 解锁「超频模式」：效率 +25%，但磨损 +50%。
// ★ 读取约定（RobotAgg / RobotManager 防御性读取）：
//   const eff = ((BUILDINGS.rb16_logic_forge.levels[b.level]) || {}).effect || {};
//   const effAdd = eff.robotEffAdd || 0;   // 机器人效率加成（取最高）
//   const overclock = !!eff.overclock;     // Lv3：超频模式开关（UI 按钮）
//   // 实现：效率 = robotEfficiency(r) × (1 + effAdd) × (overclock ? 1.25 : 1)
//   //   超频时 wear 增速 ×1.5（RobotManager.ageTick 读取 game.robotOverclock）
// 数值平衡注释：
//   - Lv1 效率 +10%：约等于 10 台机器人白送 1 台，稳赚；
//   - Lv3 +20% + 超频 +25%：机器人流后期的「兴奋剂」，但磨损 +50% 是代价——
//     「快和久，只能选一个」；
//   - cost 走 tech 路线（40/100/200）：重铸逻辑是科学；
//   - powerUse 5/9/15：熔炉的等离子体很耗电；
//   - needPop 12/22/35 且必须人类：机器人不能给自己「洗脑」——忠诚保险。
// 联动设计：
//   - 与充电站（rb_charger）叠加：效率乘区双叠，机器人流毕业；
//   - 与维修中心（rb_repair）：超频 + 维修 = 「又快又久」的作弊组合，
//     但两座都是高耗电，电力是天然刹车；
//   - 反制：超频期间机器人病毒灾难感染率 +20%（content_v16.js）。
// ═══════════════════════════════════════════════════════════════════════
rb16_logic_forge: {
  id: 'rb16_logic_forge', name: '逻辑熔炉', icon: '🔩',
  levels: [null,
    // Lv1：第一炉——效率 +10%
    { cost: { steel: 180, tech: 40 }, needPop: 12, powerUse: 5,
      effect: { robotEffAdd: 0.1, overclock: false, robotBuilding: true },
      effectDesc: '全城机器人效率 +10%',
      desc: '效率 +10%：机器人的健身房',
      flavor: '第一台重铸的机器人说：我感觉我的脑子被「擦」亮了。', },
    // Lv2：效率 +15%
    { cost: { steel: 400, tech: 100, rare: 50 }, needPop: 22, powerUse: 9,
      effect: { robotEffAdd: 0.15, overclock: false, robotBuilding: true },
      effectDesc: '全城机器人效率 +15%',
      desc: '效率 +15%：逻辑重铸流水线',
      flavor: '熔炉操作员说：我们重铸的不是机器，是它们的「出厂设置」。', },
    // Lv3：超频模式——快和久，只能选一个
    { cost: { steel: 800, tech: 200, rare: 120 }, needPop: 35, powerUse: 15,
      effect: { robotEffAdd: 0.2, overclock: true, overclockWearMul: 1.5, robotBuilding: true },
      effectDesc: '效率 +20%；解锁超频：效率再 +25%，磨损 +50%',
      desc: '效率 +20%，超频 +25%（磨损 +50%）：兴奋剂',
      flavor: '「超频的机器人跑得比时间快，但时间会收利息。」——熔炉警示牌', },
  ],
  desc: '全城机器人效率 +10%/+15%/+20%；Lv3 超频（效率 +25%，磨损 +50%）',
  unlock: { type: 'tech', ref: 't-rob-9',
    desc: '需研究「逻辑重铸」科技（t-rob-9）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 机器人系 2/6：🦾 义体诊所 rb16_cyber_clinic
// ───────────────────────────────────────────────────────────────────────
// 定位：人类与机器人的「共同医院」。给人类装义体（人口增长 +），
// 给机器人换零件（磨损回复 +），Lv3 解锁「赛博格」：
// 人口与机器人互相转化（各 1 点劳动力互换）。
// ★ 读取约定（pop.js / RobotManager 防御性读取）：
//   const eff = ((BUILDINGS.rb16_cyber_clinic.levels[b.level]) || {}).effect || {};
//   const gMul = eff.growthMul || 1;         // 人口增长倍率（取最高）
//   const wearHeal = eff.wearHeal || 0;      // 机器人磨损回复（加法汇总）
//   const cyborg = !!eff.cyborg;             // Lv3：赛博格转化
//   // 实现：pop.js 读 gMul；RobotManager.ageTick 读 wearHeal；
//   //   赛博格转化由 UI 按钮触发：1 人口 ↔ 1 机器人（双向，需双方同意——
//   //   其实是玩家点按钮，但文案写「需双方同意」，这是黑色幽默）
// 数值平衡注释：
//   - Lv1 增长 ×1.3：对标基因实验室 Lv1（×1.5）但便宜——
//     「穷人的人口加速器」；
//   - Lv3 ×2.0 + 赛博格：人口与机器人不再是两个池子，是一个——
//     这是 v1.6 最激进的设计；
//   - wearHeal 0.01/0.02/0.03：约等于半座维修中心，添头；
//   - cost 含 ice（医疗需要纯净水）：路线与基因实验室抢水，逼取舍；
//   - powerUse 4/8/12：手术室的无影灯很耗电。
// 联动设计：
//   - 与基因实验室：growthMul 取最高，不叠乘（防 ×6 怪物）；
//   - 与退役熔炉：赛博格转化后，原机体进熔炉返还——「人机循环」闭环；
//   - 伦理彩蛋：诊所 flavor 全部围绕「我是谁」——v1.6 的哲学担当。
// ═══════════════════════════════════════════════════════════════════════
rb16_cyber_clinic: {
  id: 'rb16_cyber_clinic', name: '义体诊所', icon: '🦾',
  levels: [null,
    // Lv1：第一台手术——人类装上了第一只机械手
    { cost: { steel: 150, ice: 60, tech: 20 }, needPop: 10, powerUse: 4,
      effect: { growthMul: 1.3, wearHeal: 0.01, cyborg: false, robotBuilding: true },
      effectDesc: '人口增长 ×1.3；机器人磨损 -0.01/tick',
      desc: '增长 ×1.3：人机共同医院开业',
      flavor: '第一位患者出院时，举起机械手比了个耶——比原来那只还灵活。', },
    // Lv2：增长 ×1.6
    { cost: { steel: 350, ice: 120, tech: 60 }, needPop: 20, powerUse: 8,
      effect: { growthMul: 1.6, wearHeal: 0.02, cyborg: false, robotBuilding: true },
      effectDesc: '人口增长 ×1.6；机器人磨损 -0.02/tick',
      desc: '增长 ×1.6：义体普及化',
      flavor: '诊所的预约排到了三个月后——大家都想「升级」一下自己。', },
    // Lv3：赛博格——人口与机器人的边界消失
    { cost: { steel: 700, tech: 150, ice: 200, rare: 80 }, needPop: 35, powerUse: 12,
      effect: { growthMul: 2.0, wearHeal: 0.03, cyborg: true, robotBuilding: true },
      effectDesc: '人口增长 ×2.0；磨损 -0.03/tick；解锁赛博格转化（人口↔机器人）',
      desc: '增长 ×2.0，赛博格转化：边界消失',
      flavor: '「当你分不清对面是人还是机器时，记得问它：你做梦吗？」——诊所墙上的字', },
  ],
  desc: '人口增长 ×1.3/×1.6/×2.0 + 机器人磨损回复；Lv3 赛博格转化',
  unlock: { type: 'tech', ref: 't-rob-11',
    desc: '需研究「义体医学」科技（t-rob-11）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 机器人系 3/6：💾 数据墓园 rb16_data_crypt
// ───────────────────────────────────────────────────────────────────────
// 定位：机器人的「坟墓+图书馆」。退役机器人的记忆上传到这里，
// 变成全城科技产出；Lv3 解锁「先贤祠」：已故机器人的经验
// 让新机器人初始效率 +15%。
// ★ 读取约定（build.js / RobotManager 防御性读取）：
//   const eff = ((BUILDINGS.rb16_data_crypt.levels[b.level]) || {}).effect || {};
//   const techOut = eff.techOut || 0;            // 每 produceInterval 产科技点
//   const memMul = eff.memoryMul || 0;           // 每台退役机器人 → 科技点（加法）
//   const inheritEff = eff.inheritEffAdd || 0;   // Lv3：新机器人初始效率 +
//   // 实现：RobotManager.retireRobot 时，若有墓园，tech += memMul；
//   //   produceTick 建新机器人时 efficiency 初始 1 + inheritEffAdd
// 数值平衡注释：
//   - Lv1 每周期 4 科技点：约等于半座 AI 核心，但 cost 便宜；
//   - memMul 2/5/10：退役一台 = 2~10 科技点——「死亡也有产出」，
//     这是黑色幽默，也是数值；
//   - Lv3 新机器人效率 +15%：老兵的经验，新兵继承——
//     机器人版的「薪火相传」；
//   - powerUse 2/4/6：服务器机房，恒温恒湿，电费固定；
//   - 不需要 needPop 很高（5/10/18）：墓园管理员不需要很多人，
//     需要的是耐心。
// 联动设计：
//   - 与退役熔炉：熔炉管「身体」，墓园管「记忆」——退役一条龙；
//   - 与 AI 核心：techOut 叠加，硅基科研双引擎；
//   - 彩蛋：墓园里有一块碑，刻着第一台退役机器人的名字：铁蛋（v1.5 梗）。
// ═══════════════════════════════════════════════════════════════════════
rb16_data_crypt: {
  id: 'rb16_data_crypt', name: '数据墓园', icon: '💾',
  levels: [null,
    // Lv1：第一块墓碑——铁蛋
    { cost: { steel: 100, tech: 30 }, needPop: 5, powerUse: 2,
      effect: { techOut: 4, produceInterval: 60000, memoryMul: 2, inheritEffAdd: 0, robotBuilding: true },
      effectDesc: '每周期产科技点 4；每台退役机器人 → 2 科技点',
      desc: '科技点 4/周期：记忆即产出',
      flavor: '第一块墓碑上刻着：铁蛋，采矿队工头，2071-2079，它从不请假。', },
    // Lv2：记忆库扩建
    { cost: { steel: 250, tech: 80 }, needPop: 10, powerUse: 4,
      effect: { techOut: 8, produceInterval: 60000, memoryMul: 5, inheritEffAdd: 0, robotBuilding: true },
      effectDesc: '每周期产科技点 8；每台退役 → 5 科技点',
      desc: '科技点 8/周期：记忆库',
      flavor: '管理员说：这里的每一块硬盘，都曾经是一个「人」。', },
    // Lv3：先贤祠——薪火相传
    { cost: { steel: 500, tech: 180, rare: 60 }, needPop: 18, powerUse: 6,
      effect: { techOut: 15, produceInterval: 60000, memoryMul: 10, inheritEffAdd: 0.15, robotBuilding: true },
      effectDesc: '科技点 15/周期；退役 → 10 科技点；新机器人初始效率 +15%',
      desc: '科技点 15，先贤祠：新机器人继承经验',
      flavor: '「它们死了，但它们的经验还活着，在每一台新机器里。」——墓园铭文', },
  ],
  desc: '产科技点；退役机器人→科技点；Lv3 新机器人初始效率 +15%',
  unlock: { type: 'tech', ref: 't-rob-5',
    desc: '需研究「强人工智能」科技（t-rob-5）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 机器人系 4/6：🛰️ 同步塔 rb16_sync_tower
// ───────────────────────────────────────────────────────────────────────
// 定位：机器人的「WiFi+思想钢印」。全城机器人共享算力，
// 忠诚衰减 -N%，Lv3 解锁「蜂巢意识」：机器人不再单独掉忠诚，
// 只按平均值掉（要掉一起掉，要涨一起涨）。
// ★ 读取约定（RobotManager.ageTick 防御性读取）：
//   const eff = ((BUILDINGS.rb16_sync_tower.levels[b.level]) || {}).effect || {};
//   const decayCut = eff.decayCut || 0;   // 忠诚衰减降低（取最高）
//   const hive = !!eff.hiveMind;          // Lv3：蜂巢意识
//   // 实现：衰减 = base × (1 - decayCut)；hiveMind 为 true 时，
//   //   每 tick 把所有机器人 loyalty 设为平均值（先算平均，再统一）
// 数值平衡注释：
//   - Lv1 衰减 -30%：配合 AI 核心的 -25%，衰减只剩一半——维稳双保险；
//   - Lv3 蜂巢意识：极端设计——「一荣俱荣，一损俱损」；
//     好处是不会有个别机器人突然叛变，坏处是断电时全城一起掉；
//   - cost 含 he3（10/20）：同步塔的量子纠缠器需要氦-3 冷却；
//   - powerUse 6/10/16：全城同步是耗电大户。
// 联动设计：
//   - 与逻辑议会：议会「涨」忠诚，同步塔「保」忠诚——维稳组合拳；
//   - 与起义链：蜂巢意识下，起义阶段判定只看平均值——
//     玩家无法「各个击破」，只能整体维稳；
//   - 反制：EMP 灾难期间同步塔停机，蜂巢解散 60 秒——
//     「断网」的机器人会想起自己是谁，这是剧情杀。
// ═══════════════════════════════════════════════════════════════════════
rb16_sync_tower: {
  id: 'rb16_sync_tower', name: '同步塔', icon: '🛰️',
  levels: [null,
    // Lv1：第一次同步——全城机器人「同频」了
    { cost: { steel: 200, tech: 50, he3: 10 }, needPop: 12, powerUse: 6,
      effect: { decayCut: 0.3, hiveMind: false, robotBuilding: true },
      effectDesc: '全城机器人忠诚衰减 -30%',
      desc: '衰减 -30%：思想钢印，初级版',
      flavor: '第一次同步时，全城机器人的指示灯同时闪了一下——像一次集体的眨眼。', },
    // Lv2：衰减 -50%
    { cost: { steel: 450, tech: 120, he3: 20 }, needPop: 22, powerUse: 10,
      effect: { decayCut: 0.5, hiveMind: false, robotBuilding: true },
      effectDesc: '全城机器人忠诚衰减 -50%',
      desc: '衰减 -50%：同步深化',
      flavor: '工程师说：它们现在思考的延迟，比人类眨眼还短。', },
    // Lv3：蜂巢意识——一荣俱荣，一损俱损
    { cost: { steel: 900, tech: 250, he3: 40, rare: 80 }, needPop: 35, powerUse: 16,
      effect: { decayCut: 0.5, hiveMind: true, robotBuilding: true },
      effectDesc: '衰减 -50%；蜂巢意识：忠诚只按平均值变动',
      desc: '蜂巢意识：要掉一起掉，要涨一起涨',
      flavor: '「从今天起，没有『我』，只有『我们』。」——同步塔上线宣言', },
  ],
  desc: '忠诚衰减 -30%/-50%/-50%；Lv3 蜂巢意识（忠诚统一变动）',
  unlock: { type: 'tech', ref: 't-rob-13',
    desc: '需研究「蜂巢协议」科技（t-rob-13）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 机器人系 5/6：🛢️ 机油精炼厂 rb16_oil_refinery
// ───────────────────────────────────────────────────────────────────────
// 定位：机器人的「粮仓」。精炼润滑油/冷却液——
// 机器人不吃食物，但「喝」机油：每周期产出机油（oil，新资源概念，
// 用 food 槽位代表示例，实际走 effect 自定义字段）。
// ★ 读取约定（RobotManager / build.js 防御性读取）：
//   const eff = ((BUILDINGS.rb16_oil_refinery.levels[b.level]) || {}).effect || {};
//   const oilOut = eff.oilOut || 0;              // 每 produceInterval 产机油
//   const wearCut = eff.wearRateCut || 0;        // 润滑充足时磨损增速 -N%（取最高）
//   // 实现：机油存入 game.robots.oil（独立池）；oil > 0 时 wear 增速 × (1-wearCut)；
//   //   oil 耗尽时磨损增速 ×1.2（干磨）——「机器人也会口渴」
//   // ⚠ oil 是概念资源，走 game.robots.oil，不进 resources.js，避免注册污染。
// 数值平衡注释：
//   - Lv1 每周期 10 机油：100 台机器人每 tick 耗 0.1，勉强够用；
//   - Lv3 40 机油 + 磨损 -30%：机器人流后期的「粮草官」；
//   - cost 走 iron/steel（炼油是重工业）：不抢 tech；
//   - powerUse 4/8/12：分馏塔是电老虎；
//   - 干磨惩罚 ×1.2 是软逼迫：不建精炼厂也行，但机器人「老得快」。
// 联动设计：
//   - 与维修中心：维修「治」，机油「防」——磨损双保险；
//   - 与组装厂：新机器人出厂自带 10 机油（满油出厂），flavor 梗；
//   - 彩蛋：精炼厂的机油分三个等级，特级机油只给「劳模机器人」——
//     效率最高的 10 台机器人优先分配（RobotManager 实现）。
// ═══════════════════════════════════════════════════════════════════════
rb16_oil_refinery: {
  id: 'rb16_oil_refinery', name: '机油精炼厂', icon: '🛢️',
  levels: [null,
    // Lv1：第一滴油——机器人「有饭吃」了
    { cost: { iron: 120, steel: 60 }, needPop: 8, powerUse: 4,
      effect: { oilOut: 10, produceInterval: 60000, wearRateCut: 0.1, robotBuilding: true },
      effectDesc: '每周期产机油 10；润滑充足时磨损增速 -10%',
      desc: '机油 10/周期：机器人的粮仓开业',
      flavor: '第一滴机油下线时，机器人排队来「品尝」——它们说，味道像希望。', },
    // Lv2：机油 25/周期
    { cost: { steel: 200, iron: 150 }, needPop: 15, powerUse: 8,
      effect: { oilOut: 25, produceInterval: 60000, wearRateCut: 0.2, robotBuilding: true },
      effectDesc: '每周期产机油 25；磨损增速 -20%',
      desc: '机油 25/周期：精炼厂扩建',
      flavor: '厂长说：我们的机油分三级，特级只给劳模——机器人也懂「内卷」。', },
    // Lv3：机油 40/周期 + 磨损 -30%
    { cost: { steel: 450, tech: 60, iron: 250 }, needPop: 25, powerUse: 12,
      effect: { oilOut: 40, produceInterval: 60000, wearRateCut: 0.3, robotBuilding: true },
      effectDesc: '每周期产机油 40；磨损增速 -30%（缺油时干磨 +20%）',
      desc: '机油 40/周期：机器人粮草官',
      flavor: '「机油是机器人的粮食，我们是它们的粮仓。」——精炼厂厂训', },
  ],
  desc: '产机油（机器人「粮食」）；润滑充足磨损 -10%/-20%/-30%，缺油干磨 +20%',
  unlock: { type: 'tech', ref: 't-rob-3',
    desc: '需研究「自维护系统」科技（t-rob-3）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 机器人系 6/6：🦿 义肢工坊 rb16_limb_workshop
// ───────────────────────────────────────────────────────────────────────
// 定位：机器人的「裁缝店+贸易站」。生产义肢/外骨骼，
// 卖给人类（贸易收入），Lv3 解锁「定制义体」：
// 人口幸福 +N（人类以有义体为荣——赛博朋克民生）。
// ★ 读取约定（trade.js / pop.js 防御性读取）：
//   const eff = ((BUILDINGS.rb16_limb_workshop.levels[b.level]) || {}).effect || {};
//   const income = eff.tradeIncome || 0;  // 每 produceInterval 自动 +钢（义肢贸易）
//   const hap = eff.happiness || 0;       // Lv3：全城幸福（加法汇总）
//   const discount = eff.cyberDiscount || 0; // 义体诊所赛博格转化费用 -N%
//   // 实现：income 直接加仓库（上限截断）；discount 作用于赛博格转化的资源消耗
// 数值平衡注释：
//   - Lv1 每周期 8 钢：约等于一条小贸易航线，不抢 trade.js 的饭碗；
//   - Lv3 20 钢 + 幸福 +10 + 转化 -30%：机器人经济的「第三产业」；
//   - cost 走 steel/iron 平滑曲线：工坊是制造业，不是科技；
//   - powerUse 2/4/6：3D 打印机的电费；
//   - 这是 6 种机器人建筑里唯一「直接赚钱」的——
//     机器人不止花钱，也能挣钱，这是主题表达。
// 联动设计：
//   - 与义体诊所：discount -30% 让赛博格转化更便宜——「产销一体」；
//   - 与云端市集（天空系）：income 叠加，倒爷双引擎；
//   - 彩蛋：工坊的畅销款叫「铁蛋同款机械臂」（v1.5 梗 call back）。
// ═══════════════════════════════════════════════════════════════════════
rb16_limb_workshop: {
  id: 'rb16_limb_workshop', name: '义肢工坊', icon: '🦿',
  levels: [null,
    // Lv1：第一只机械臂下线
    { cost: { steel: 100, iron: 80 }, needPop: 8, powerUse: 2,
      effect: { tradeIncome: 8, produceInterval: 60000, happiness: 0, cyberDiscount: 0, robotBuilding: true },
      effectDesc: '每周期义肢贸易 +8 钢',
      desc: '+8 钢/周期：机器人的裁缝店开业',
      flavor: '第一只机械臂的买家是个矿工：他说，这比原来的手有劲。', },
    // Lv2：+15 钢/周期
    { cost: { steel: 250, iron: 150 }, needPop: 15, powerUse: 4,
      effect: { tradeIncome: 15, produceInterval: 60000, happiness: 5, cyberDiscount: 0.15, robotBuilding: true },
      effectDesc: '每周期 +15 钢；全城幸福 +5；赛博格转化 -15%',
      desc: '+15 钢/周期，幸福 +5：义体普及',
      flavor: '畅销款「铁蛋同款机械臂」脱销了——工坊连夜加班。', },
    // Lv3：定制义体——赛博朋克民生
    { cost: { steel: 500, tech: 80, iron: 250 }, needPop: 25, powerUse: 6,
      effect: { tradeIncome: 20, produceInterval: 60000, happiness: 10, cyberDiscount: 0.3, robotBuilding: true },
      effectDesc: '每周期 +20 钢；全城幸福 +10；赛博格转化 -30%',
      desc: '+20 钢/周期，幸福 +10：定制义体时代',
      flavor: '「以前我们羡慕它们不生病，现在它们羡慕我们会做梦——扯平了。」——顾客留言', },
  ],
  desc: '义肢贸易 +8/+15/+20 钢/周期；Lv2 幸福 +5，Lv3 幸福 +10、转化 -30%',
  unlock: { type: 'tech', ref: 't-rob-11',
    desc: '需研究「义体医学」科技（t-rob-11）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 深海系 1/4：🌊 潮汐电站 oc16_tidal_plant
// ───────────────────────────────────────────────────────────────────────
// 定位：海洋的「稳定电源」。潮汐永不停歇，不受天气/昼夜影响，
// 是海洋建筑群的电力基本盘。
// ★ 读取约定（build.js 电力聚合防御性读取）：
//   const eff = ((BUILDINGS.oc16_tidal_plant.levels[b.level]) || {}).effect || {};
//   const out = eff.power || 0;   // 稳定输出（与地热井同逻辑）
//   const tide = !!eff.tidal;     // 标记：潮汐电（disaster.js 海啸期间 +50%）
//   // 实现：海啸预警期间潮汐电 +50%（eff.stormSurgeMul）——
//   //   「灾难变红利」是 v1.5 风力发电机的设计语言，这里延续。
// 数值平衡注释：
//   - Lv1 8 电：约等于 4 座 Lv1 太阳能板，但稳定——海洋前期答案；
//   - Lv3 30 电：海洋工业的电力支柱；
//   - cost 走 ice/steel（海洋建筑）：不抢 tech，定位是基建；
//   - powerUse 1/2/3：潮汐机组自持耗电，象征性；
//   - 需要海洋解锁（effect.needOcean）：没海洋建不了——
//     unlock 走 building 前置 o-dock（海洋船坞，v1.5 海洋系），防御性。
// 联动设计：
//   - 与地热井（v1.5）：都是「稳定电」，但一个在地下一个在海里——
//     玩家按地图（地下/海洋进度）二选一；
//   - 海啸期间 +50%：和风力发电机「沙尘暴 ×2」形成海陆对照组。
// ═══════════════════════════════════════════════════════════════════════
oc16_tidal_plant: {
  id: 'oc16_tidal_plant', name: '潮汐电站', icon: '🌊',
  levels: [null,
    // Lv1：第一台潮汐机组——海的呼吸变成了电
    { cost: { steel: 120, ice: 80 }, needPop: 8, powerUse: 1,
      effect: { power: 8, tidal: true, stormSurgeMul: 1.5, needOcean: true },
      effectDesc: '稳定产电 8；海啸期间 ×1.5（12 电）',
      desc: '稳定 8 电，海啸期 12 电：海洋电力基本盘',
      flavor: '第一台机组转动时，工程师说：听，海在呼吸——现在它在给我们发电。', },
    // Lv2：18 电
    { cost: { steel: 300, ice: 150, tech: 20 }, needPop: 16, powerUse: 2,
      effect: { power: 18, tidal: true, stormSurgeMul: 1.5, needOcean: true },
      effectDesc: '稳定产电 18；海啸期间 ×1.5（27 电）',
      desc: '稳定 18 电：潮汐电网成型',
      flavor: '电站的日志只有一句话，每天重复：潮汐准时，电量准时。', },
    // Lv3：30 电——海洋工业支柱
    { cost: { steel: 600, tech: 80, ice: 250 }, needPop: 28, powerUse: 3,
      effect: { power: 30, tidal: true, stormSurgeMul: 1.5, needOcean: true },
      effectDesc: '稳定产电 30；海啸期间 ×1.5（45 电）',
      desc: '稳定 30 电：海洋工业的定海神针',
      flavor: '「潮汐从不请假，所以我们也不请假。」——潮汐电站站训', },
  ],
  desc: '海洋稳定电源 8/18/30 电；海啸期间 ×1.5（需海洋解锁）',
  unlock: { type: 'building', ref: 'o-dock', level: 1,
    desc: '需海洋船坞（o-dock，v1.5 海洋系）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 深海系 2/4：♨️ 深海热泉站 oc16_vent_station
// ───────────────────────────────────────────────────────────────────────
// 定位：海洋的「矿机+电站」双栖。深海热泉口建站，
// 同时产电和稀有矿，Lv3 还产 He3（热泉气体分馏）。
// ★ 读取约定（build.js 生产逻辑防御性读取）：
//   const eff = ((BUILDINGS.oc16_vent_station.levels[b.level]) || {}).effect || {};
//   const power = eff.power || 0;        // 稳定产电
//   const rare = eff.rareOut || 0;       // 每 produceInterval 产稀有矿
//   const he3 = eff.he3Out || 0;         // Lv3：每周期产 He3
//   // 实现：电与矿独立结算，互不干扰；断电时矿照产（热泉是自持的）——
//   //   这是刻意设计：「热泉不需要你，它自己就是能源」
// 数值平衡注释：
//   - Lv1 6 电 + 2 稀有矿/周期：约等于「半座潮汐电站 + 半台矿机」，
//     一站两用是它的价值；
//   - Lv3 15 电 + 6 稀有矿 + 1 He3：海洋后期的「聚宝盆」；
//   - cost 含 uranium（10/20）：热泉口有辐射，屏蔽需要铀——
//     用铀防铀，黑色幽默；
//   - powerUse 2/4/6：泵与分馏；
//   - needOcean：海洋专属。
// 联动设计：
//   - 与气压提炼塔（天空系）：都是「He3 第二产地」，一个在天上一个在海底——
//     玩家按天空/海洋进度二选一；
//   - 与深海巨兽（ocean.js）：热泉站是巨兽的「食堂」，
//     建在巨兽巢穴附近有彩蛋加成（effect.ventBonus，ocean.js 读取）。
// ═══════════════════════════════════════════════════════════════════════
oc16_vent_station: {
  id: 'oc16_vent_station', name: '深海热泉站', icon: '♨️',
  levels: [null,
    // Lv1：第一口热泉——电与矿，双喜临门
    { cost: { steel: 180, ice: 100, uranium: 10 }, needPop: 10, powerUse: 2,
      effect: { power: 6, rareOut: 2, he3Out: 0, produceInterval: 90000, needOcean: true, ventBonus: true },
      effectDesc: '产电 6；每周期稀有矿 2（断电照产）',
      desc: '6 电 + 稀有矿 2/周期：一站两用',
      flavor: '热泉口的水温 400℃，工程师说：在这里煮面，三秒就熟。', },
    // Lv2：10 电 + 4 稀有矿
    { cost: { steel: 400, tech: 40, ice: 180, uranium: 20 }, needPop: 20, powerUse: 4,
      effect: { power: 10, rareOut: 4, he3Out: 0, produceInterval: 90000, needOcean: true, ventBonus: true },
      effectDesc: '产电 10；每周期稀有矿 4',
      desc: '10 电 + 稀有矿 4/周期：热泉工业区',
      flavor: '站里的咖啡机是全城最快的——用的热泉余热，3 秒一杯。', },
    // Lv3：15 电 + 6 稀有矿 + 1 He3——海洋聚宝盆
    { cost: { steel: 800, tech: 120, uranium: 30, rare: 60 }, needPop: 32, powerUse: 6,
      effect: { power: 15, rareOut: 6, he3Out: 1, produceInterval: 90000, needOcean: true, ventBonus: true },
      effectDesc: '产电 15；稀有矿 6 + He3 1/周期',
      desc: '15 电 + 稀有矿 6 + He3 1：海洋聚宝盆',
      flavor: '「海底的烟囱冒的不是烟，是钱。」——热泉站站长', },
  ],
  desc: '电 + 稀有矿（+He3）双产出；断电照产（需海洋解锁）',
  unlock: { type: 'building', ref: 'o-dock', level: 1,
    desc: '需海洋船坞（o-dock）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 深海系 3/4：🪸 珊瑚农场 oc16_coral_farm
// ───────────────────────────────────────────────────────────────────────
// 定位：海洋的「食物+幸福」双产。珊瑚共生藻产食物，
// 珊瑚礁景观产幸福，Lv3 解锁「珍珠」：每周期产珍珠（trade.js 高价值）。
// ★ 读取约定（build.js / pop.js / trade.js 防御性读取）：
//   const eff = ((BUILDINGS.oc16_coral_farm.levels[b.level]) || {}).effect || {};
//   const food = eff.foodOut || 0;       // 每 produceInterval 产食物
//   const hap = eff.happiness || 0;      // 全城幸福（加法汇总）
//   const pearl = eff.pearlOut || 0;     // Lv3：每周期产珍珠
//   // 实现：珍珠是 trade.js 的高价值商品（1 珍珠 = 10 钢结算价），
//   //   不进仓库，走 trade.js 独立结算——避免 resources.js 注册污染。
// 数值平衡注释：
//   - Lv1 8 食物/周期：约等于地面温室 Lv1.5，海洋食物答案；
//   - Lv3 20 食物 + 幸福 12 + 珍珠 2：海洋民生的「三冠王」；
//   - cost 走 ice/water（海洋建筑）：不抢 tech；
//   - powerUse 1/2/3：补光灯（深海没太阳）；
//   - needOcean：海洋专属。
// 联动设计：
//   - 与云端农场（天空系）：一个在天上一个在海底，都是「食物基本盘」——
//     玩家按天空/海洋进度二选一，或双修；
//   - 与天空花园：幸福双建筑，海陆对照组；
//   - 彩蛋：农场里最受欢迎的珊瑚叫「铁蛋礁」（v1.5 梗三 call back）。
// ═══════════════════════════════════════════════════════════════════════
oc16_coral_farm: {
  id: 'oc16_coral_farm', name: '珊瑚农场', icon: '🪸',
  levels: [null,
    // Lv1：第一片珊瑚——海底的麦田
    { cost: { ice: 100, steel: 80 }, needPop: 8, powerUse: 1,
      effect: { foodOut: 8, produceInterval: 60000, happiness: 3, pearlOut: 0, needOcean: true },
      effectDesc: '每周期产食物 8；全城幸福 +3',
      desc: '食物 8/周期，幸福 +3：海底麦田',
      flavor: '第一片珊瑚种下去时，潜水员说：这比在陆地上种地有意思多了。', },
    // Lv2：14 食物 + 幸福 8
    { cost: { ice: 200, steel: 180 }, needPop: 15, powerUse: 2,
      effect: { foodOut: 14, produceInterval: 60000, happiness: 8, pearlOut: 0, needOcean: true },
      effectDesc: '每周期产食物 14；全城幸福 +8',
      desc: '食物 14/周期，幸福 +8：珊瑚礁景区',
      flavor: '农场开放了观光日，游客说：这比水族馆大，还不要门票。', },
    // Lv3：20 食物 + 幸福 12 + 珍珠 2——三冠王
    { cost: { steel: 400, tech: 60, ice: 300 }, needPop: 25, powerUse: 3,
      effect: { foodOut: 20, produceInterval: 60000, happiness: 12, pearlOut: 2, needOcean: true },
      effectDesc: '食物 20/周期；幸福 +12；珍珠 2/周期（高价值贸易品）',
      desc: '食物 20，幸福 +12，珍珠 2：海洋民生三冠王',
      flavor: '「最受欢迎的珊瑚叫铁蛋礁——为纪念一位老朋友。」——农场碑文', },
  ],
  desc: '食物 8/14/20 + 幸福；Lv3 产珍珠（高价值贸易品，需海洋解锁）',
  unlock: { type: 'building', ref: 'o-dock', level: 1,
    desc: '需海洋船坞（o-dock）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 深海系 4/4：🚤 潜艇船坞 oc16_sub_dock
// ───────────────────────────────────────────────────────────────────────
// 定位：海洋的「军事+探索」双栖。生产潜艇（探索深海遗迹），
// Lv2 起潜艇可武装（驱离深海巨兽），Lv3 解锁「深渊打捞」：
// 每周期随机打捞资源（盲盒）。
// ★ 读取约定（ocean.js / military.js 防御性读取）：
//   const eff = ((BUILDINGS.oc16_sub_dock.levels[b.level]) || {}).effect || {};
//   const subs = eff.subSlots || 0;          // 潜艇槽位（加法汇总）
//   const armed = !!eff.armedSubs;           // Lv2+：潜艇可武装
//   const salvage = eff.salvageTable || null;// Lv3：打捞表（ocean.js 读取）
//   // 实现：潜艇数据走 ocean.js（v1.5 已有潜艇系统），本建筑只提供槽位与加成；
//   //   打捞表格式：[{res:'rare', min:5, max:20, w:0.5}, ...]（权重随机）
// 数值平衡注释：
//   - Lv1 2 槽位：刚好够「1 探索 + 1 备用」；
//   - Lv3 6 槽位 + 深渊打捞：海洋后期的「盲盒机」，期望收益约 15 钢/周期——
//     不如稳定产出，但好玩；
//   - cost 含 uranium（船体抗压）：深海是高压锅；
//   - powerUse 3/6/10：船坞的干船坞泵很耗电；
//   - needOcean：海洋专属。
// 联动设计：
//   - 与 v1.5 海洋潜艇系统：本建筑是「船坞」，v1.5 的潜艇是「船」——
//     船坞管槽位，船管属性，分工明确；
//   - 与深海巨兽：武装潜艇是驱离巨兽的官方解法之一（ocean.js 读取 armedSubs）；
//   - 与空中船坞（天空系）：一个在天上一个在海底，都是「载具之家」——
//     海陆空三军概念闭环（陆军：military.js）。
// ═══════════════════════════════════════════════════════════════════════
oc16_sub_dock: {
  id: 'oc16_sub_dock', name: '潜艇船坞', icon: '🚤',
  levels: [null,
    // Lv1：第一艘潜艇下水
    { cost: { steel: 200, ice: 120, uranium: 5 }, needPop: 12, powerUse: 3,
      effect: { subSlots: 2, armedSubs: false, salvageTable: null, needOcean: true },
      effectDesc: '提供 2 个潜艇槽位（探索深海遗迹）',
      desc: '2 潜艇槽位：深海探索起步',
      flavor: '第一艘潜艇下水时，船员在艇身上写：我们去海底看看。', },
    // Lv2：武装潜艇——巨兽猎人
    { cost: { steel: 450, tech: 60, uranium: 10 }, needPop: 22, powerUse: 6,
      effect: { subSlots: 4, armedSubs: true, salvageTable: null, needOcean: true },
      effectDesc: '4 潜艇槽位；潜艇可武装（驱离深海巨兽）',
      desc: '4 槽位，武装潜艇：巨兽猎人',
      flavor: '武装潜艇的声呐员说：巨兽的心跳声，听起来像打鼓。', },
    // Lv3：深渊打捞——海洋盲盒机
    { cost: { steel: 900, tech: 150, uranium: 20, rare: 80 }, needPop: 35, powerUse: 10,
      effect: { subSlots: 6, armedSubs: true, needOcean: true,
        salvageTable: [
          { res: 'rare', min: 5, max: 20, w: 0.4 },
          { res: 'steel', min: 10, max: 30, w: 0.3 },
          { res: 'tech', min: 2, max: 8, w: 0.2 },
          { res: 'he3', min: 1, max: 3, w: 0.1 },
        ] },
      effectDesc: '6 槽位；武装；深渊打捞：每周期随机资源盲盒',
      desc: '6 槽位 + 深渊打捞：海洋盲盒机',
      flavor: '「深渊里有什么？不知道，捞上来才知道——这就是乐趣。」——打捞队长', },
  ],
  desc: '潜艇槽位 2/4/6；Lv2 武装（驱巨兽）；Lv3 深渊打捞盲盒（需海洋）',
  unlock: { type: 'building', ref: 'o-dock', level: 2,
    desc: '需海洋船坞（o-dock）Lv2 解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 地下系 1/4：🍄 蘑菇农场 un16_mushroom_farm
// ───────────────────────────────────────────────────────────────────────
// 定位：地下的「食物答案」。蘑菇不需要阳光，
// 地下城的食物基本盘，Lv3 解锁「荧光菇」：食物 + 幸福双产。
// ★ 读取约定（build.js / pop.js 防御性读取）：
//   const eff = ((BUILDINGS.un16_mushroom_farm.levels[b.level]) || {}).effect || {};
//   const food = eff.foodOut || 0;       // 每 produceInterval 产食物
//   const hap = eff.happiness || 0;      // Lv3：荧光菇景观，全城幸福
//   const dark = !!eff.noLight;          // 标记：不需要光照（地下专属逻辑）
//   // 实现：noLight 为 true 的建筑不受「断电停产」影响（蘑菇不需要灯）——
//   //   这是刻意设计：地下食物链是「断电保险」
// 数值平衡注释：
//   - Lv1 10 食物/周期：约等于地面温室 Lv2，但不需要光——
//     地下城前期食物答案；
//   - Lv3 25 食物 + 幸福 8：地下民生的「双冠王」；
//   - cost 走 iron（地下建筑）：不抢 tech；
//   - powerUse 0/1/2：蘑菇不需要灯，Lv2 起象征性收一点（通风）；
//   - needUnderground：地下专属（effect 标记，underground.js 读取）。
// 联动设计：
//   - 与云端农场/珊瑚农场：天/海/地三界食物基本盘——
//     玩家按进度三选一，或三修成「三界粮仓」成就；
//   - 断电不停产：与「断电保险」主题呼应，是地下流的核心优势；
//   - 彩蛋：最受欢迎的蘑菇品种叫「铁蛋菇」（v1.5 梗四 call back，绝不缺席）。
// ═══════════════════════════════════════════════════════════════════════
un16_mushroom_farm: {
  id: 'un16_mushroom_farm', name: '蘑菇农场', icon: '🍄',
  levels: [null,
    // Lv1：第一朵蘑菇——地下有饭吃了
    { cost: { iron: 80, steel: 40 }, needPop: 8, powerUse: 0,
      effect: { foodOut: 10, produceInterval: 60000, happiness: 0, noLight: true, needUnderground: true },
      effectDesc: '每周期产食物 10（不需要光照，断电不停产）',
      desc: '食物 10/周期：地下食物基本盘',
      flavor: '第一朵蘑菇长出来时，农艺师说：它长得比我的希望还快。', },
    // Lv2：18 食物/周期
    { cost: { iron: 150, steel: 100 }, needPop: 15, powerUse: 1,
      effect: { foodOut: 18, produceInterval: 60000, happiness: 3, noLight: true, needUnderground: true },
      effectDesc: '每周期产食物 18；全城幸福 +3',
      desc: '食物 18/周期，幸福 +3：蘑菇梯田',
      flavor: '农场的蘑菇梯田层层叠叠，游客说：像地底下的千层蛋糕。', },
    // Lv3：荧光菇——食物 + 幸福双冠王
    { cost: { steel: 300, tech: 40, iron: 250 }, needPop: 25, powerUse: 2,
      effect: { foodOut: 25, produceInterval: 60000, happiness: 8, noLight: true, needUnderground: true },
      effectDesc: '食物 25/周期；荧光菇景观，全城幸福 +8',
      desc: '食物 25，幸福 +8：荧光菇穹顶',
      flavor: '「最受欢迎的品种叫铁蛋菇——为纪念一位老朋友。」——农场碑文', },
  ],
  desc: '地下食物 10/18/25；不需要光照，断电不停产；Lv3 幸福 +8（需地下）',
  unlock: { type: 'tech', ref: 't-under-2',
    desc: '需研究「地热利用」科技（t-under-2，v1.5 地下系）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 地下系 2/4：🛗 地心电梯 un16_core_elevator
// ───────────────────────────────────────────────────────────────────────
// 定位：地下的「物流大动脉」。连接地表与地下三层，
// 大幅提升地下建筑生产效率，Lv3 解锁「人员通勤」：
// 地下建筑 needPop -30%（工人坐电梯上下班，不用住在地下）。
// ★ 读取约定（build.js / underground.js 防御性读取）：
//   const eff = ((BUILDINGS.un16_core_elevator.levels[b.level]) || {}).effect || {};
//   const yieldMul = eff.underYieldMul || 1;  // 地下建筑产量倍率（取最高）
//   const popCut = eff.popNeedCut || 0;       // Lv3：地下建筑 needPop -30%
//   // 实现：underground.js 聚合产量时乘 yieldMul；build.js 建地下建筑时
//   //   needPop × (1 - popCut)
// 数值平衡注释：
//   - Lv1 地下产量 ×1.2：约等于半套 v1.5 地下科技线，
//     但一座建筑搞定——「电梯」是地下流的捷径；
//   - Lv3 ×1.5 + needPop -30%：地下城完全体，人口压力骤减；
//   - cost 极高（Lv3 800 钢 + 200 tech）：这是地下流的「毕业建筑」；
//   - powerUse 5/10/18：电梯 24 小时运行，电费是固定的；
//   - needUnderground：地下专属。
// 联动设计：
//   - 与 v1.5 地下科技线（underYieldMul）：取最高，不叠乘——
//     防止 ×4 × ×1.5 = ×6 的怪物；
//   - 与蘑菇农场：电梯运蘑菇上地面卖，地下经济闭环；
//   - 彩蛋：电梯的楼层按钮有 B1/B2/B3，还有一个没标的「？」——
//     按下去会到哪儿，没人知道（underground.js 的隐藏事件）。
// ═══════════════════════════════════════════════════════════════════════
un16_core_elevator: {
  id: 'un16_core_elevator', name: '地心电梯', icon: '🛗',
  levels: [null,
    // Lv1：第一部电梯——地下物流贯通
    { cost: { steel: 250, iron: 200 }, needPop: 15, powerUse: 5,
      effect: { underYieldMul: 1.2, popNeedCut: 0, needUnderground: true },
      effectDesc: '地下建筑产量 ×1.2',
      desc: '地下产量 ×1.2：物流大动脉贯通',
      flavor: '电梯第一次下到 B3 时，轿厢里的人鼓掌了——像首航。', },
    // Lv2：×1.35
    { cost: { steel: 500, tech: 80, iron: 300 }, needPop: 25, powerUse: 10,
      effect: { underYieldMul: 1.35, popNeedCut: 0, needUnderground: true },
      effectDesc: '地下建筑产量 ×1.35',
      desc: '地下产量 ×1.35：三层贯通',
      flavor: '电梯操作员说：我每天的工作就是上上下下，但从不无聊。', },
    // Lv3：×1.5 + needPop -30%——地下完全体
    { cost: { steel: 800, tech: 200, iron: 400 }, needPop: 40, powerUse: 18,
      effect: { underYieldMul: 1.5, popNeedCut: 0.3, needUnderground: true },
      effectDesc: '地下产量 ×1.5；地下建筑人口需求 -30%（通勤）',
      desc: '产量 ×1.5，人口需求 -30%：地下城完全体',
      flavor: '「电梯里有个没标的按钮，按下去会到哪儿？别问，问就是彩蛋。」——维修工', },
  ],
  desc: '地下产量 ×1.2/×1.35/×1.5；Lv3 地下建筑人口需求 -30%（需地下）',
  unlock: { type: 'tech', ref: 't-under-5',
    desc: '需研究「地下物流网」科技（t-under-5，v1.5）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 地下系 3/4：🔥 岩浆锻造炉 un16_magma_forge
// ───────────────────────────────────────────────────────────────────────
// 定位：地下的「印钞机+军工厂」。引岩浆锻造，
// 钢材产出全场最高，Lv3 解锁「岩浆武器」：军事建筑攻击 +20%。
// ★ 读取约定（build.js / military.js 防御性读取）：
//   const eff = ((BUILDINGS.un16_magma_forge.levels[b.level]) || {}).effect || {};
//   const steel = eff.steelOut || 0;      // 每 produceInterval 产钢材
//   const atk = eff.militaryAtkAdd || 0;  // Lv3：军事攻击 +20%（取最高）
//   const heat = !!eff.geothermalNeed;    // 需要地热（与地热井联动）
//   // 实现：heat 为 true 时，若全城地热发电 ≥100，产量 ×1.5（underground.js 读取）
// 数值平衡注释：
//   - Lv1 8 钢/周期：约等于 2 座钢厂，但 cost 只有 1.5 倍——
//     地下工业的性价比答案；
//   - Lv3 25 钢/周期 + 军事 +20%：后期钢产量天花板；
//   - cost 走 iron/steel（重工业）：不抢 tech；
//   - powerUse 3/6/10：引风机与冷却；
//   - needUnderground + 地热联动：逼玩家「地下+地热」双修——
//     这是 v1.6 地下流的毕业考。
// 联动设计：
//   - 与地热井（v1.5）：地热 ≥100 时产量 ×1.5——「地下能源+地下工业」闭环；
//   - 与纳米组装线（v1.5）：钢 → 纳米，产业链顶端；
//   - 与轨道炮（v1.5）：军事 +20% 让轨道炮更好用——海陆空天潜全都要强。
// ═══════════════════════════════════════════════════════════════════════
un16_magma_forge: {
  id: 'un16_magma_forge', name: '岩浆锻造炉', icon: '🔥',
  levels: [null,
    // Lv1：第一炉钢——岩浆的温度变成了城市的骨骼
    { cost: { iron: 200, steel: 150 }, needPop: 15, powerUse: 3,
      effect: { steelOut: 8, produceInterval: 60000, militaryAtkAdd: 0, geothermalNeed: true, needUnderground: true },
      effectDesc: '每周期产钢材 8（地热 ≥100 时 ×1.5）',
      desc: '钢材 8/周期：地下印钞机开业',
      flavor: '第一炉钢出炉时，炉前工说：这钢里，有火星的心跳。', },
    // Lv2：15 钢/周期
    { cost: { iron: 400, steel: 300 }, needPop: 25, powerUse: 6,
      effect: { steelOut: 15, produceInterval: 60000, militaryAtkAdd: 0, geothermalNeed: true, needUnderground: true },
      effectDesc: '每周期产钢材 15（地热 ≥100 时 ×1.5）',
      desc: '钢材 15/周期：锻造炉扩建',
      flavor: '炉温 1600℃，操作员穿着隔热服说：在这里，冬天是个传说。', },
    // Lv3：25 钢 + 军事 +20%——地下军工复合体
    { cost: { steel: 600, tech: 100, iron: 600 }, needPop: 40, powerUse: 10,
      effect: { steelOut: 25, produceInterval: 60000, militaryAtkAdd: 0.2, geothermalNeed: true, needUnderground: true },
      effectDesc: '钢材 25/周期；军事建筑攻击 +20%；地热 ≥100 时产量 ×1.5',
      desc: '钢材 25，军事 +20%：地下军工复合体',
      flavor: '「我们用岩浆锻造武器，再用武器保护岩浆——很公平。」——厂长', },
  ],
  desc: '钢材 8/15/25/周期；Lv3 军事 +20%；地热 ≥100 时 ×1.5（需地下）',
  unlock: { type: 'tech', ref: 't-under-6',
    desc: '需研究「岩浆房发电」科技（t-under-6，v1.5）解锁；未定义时保持锁定' },
},

// ═══════════════════════════════════════════════════════════════════════
// 地下系 4/4：📚 回声图书馆 un16_echo_library
// ───────────────────────────────────────────────────────────────────────
// 定位：地下的「精神建筑+科技引擎」。地下城没有天空，
// 但有回声——图书馆收集全城的知识，产科技点与幸福，
// Lv3 解锁「地心讲堂」：科技点产出 ×1.5（全城）。
// ★ 读取约定（build.js / pop.js 防御性读取）：
//   const eff = ((BUILDINGS.un16_echo_library.levels[b.level]) || {}).effect || {};
//   const techOut = eff.techOut || 0;        // 每 produceInterval 产科技点
//   const hap = eff.happiness || 0;          // 全城幸福（加法汇总）
//   const lecture = eff.techGlobalMul || 1;  // Lv3：全城科技产出 ×1.5（取最高）
//   // 实现：lecture 与其他 techGlobalMul 取最高（不叠乘）
// 数值平衡注释：
//   - Lv1 科技点 5/周期：约等于半座实验室，但附带幸福 +5——
//     「精神+科研」双产是它的价值；
//   - Lv3 15 科技点 + 全城 ×1.5：科研流后期的「放大器」；
//   - cost 走 tech 路线（30/80/180）：图书馆是知识建筑；
//   - powerUse 1/2/3：阅览室的灯；
//   - needUnderground：地下专属——「地底下的星空是书」。
// 联动设计：
//   - 与天文台/ AI 核心/数据墓园：techOut 叠加，科研四引擎；
//   - lecture ×1.5 与其他全局科技倍率取最高——防止指数爆炸；
//   - 彩蛋：图书馆最受欢迎的书是《铁蛋传》（v1.5 梗五 call back，
//     全书只有一句话：它从不请假）。
// ═══════════════════════════════════════════════════════════════════════
un16_echo_library: {
  id: 'un16_echo_library', name: '回声图书馆', icon: '📚',
  levels: [null,
    // Lv1：第一排书架——地底下有了星空
    { cost: { steel: 120, tech: 30, iron: 80 }, needPop: 10, powerUse: 1,
      effect: { techOut: 5, produceInterval: 60000, happiness: 5, techGlobalMul: 1, needUnderground: true },
      effectDesc: '每周期产科技点 5；全城幸福 +5',
      desc: '科技点 5/周期，幸福 +5：地底星空',
      flavor: '第一本书上架时，馆长说：地下没有星星，但我们有书——够了。', },
    // Lv2：10 科技点 + 幸福 10
    { cost: { steel: 280, tech: 80, iron: 150 }, needPop: 18, powerUse: 2,
      effect: { techOut: 10, produceInterval: 60000, happiness: 10, techGlobalMul: 1, needUnderground: true },
      effectDesc: '每周期产科技点 10；全城幸福 +10',
      desc: '科技点 10/周期，幸福 +10：知识殿堂',
      flavor: '最受欢迎的书是《铁蛋传》，全书一句话：它从不请假。', },
    // Lv3：地心讲堂——全城科技 ×1.5
    { cost: { steel: 550, tech: 180, iron: 250 }, needPop: 30, powerUse: 3,
      effect: { techOut: 15, produceInterval: 60000, happiness: 18, techGlobalMul: 1.5, needUnderground: true },
      effectDesc: '科技点 15/周期；幸福 +18；全城科技产出 ×1.5（地心讲堂）',
      desc: '科技点 15，全城科技 ×1.5：地心讲堂',
      flavor: '「回声传得很远，知识传得更远。」——图书馆铭文', },
  ],
  desc: '科技点 5/10/15 + 幸福；Lv3 全城科技 ×1.5（需地下）',
  unlock: { type: 'tech', ref: 't-under-9',
    desc: '需研究「地下都市规划」科技（t-under-9，v1.5）解锁；未定义时保持锁定' },
},

}; // end BUILDINGS_V16

// ═══════════════════════════════════════════════════════════════════════
// v1.6 UI 建筑顺序（index.html / help.js 按此顺序渲染建造菜单）
// ═══════════════════════════════════════════════════════════════════════
const BUILD_ORDER_V16 = [
  'sk16_windspire', 'sk16_stormcollector', 'sk16_strato_antenna',
  'sk16_anchor_tower', 'sk16_skybeacon', 'sk16_cloudmarket',
  'rb16_logic_forge', 'rb16_cyber_clinic', 'rb16_data_crypt',
  'rb16_sync_tower', 'rb16_oil_refinery', 'rb16_limb_workshop',
  'oc16_tidal_plant', 'oc16_vent_station', 'oc16_coral_farm', 'oc16_sub_dock',
  'un16_mushroom_farm', 'un16_core_elevator', 'un16_magma_forge', 'un16_echo_library',
];

// ═══════════════════════════════════════════════════════════════════════
// 接入函数：把 v1.6 建筑合并进全局 BUILDINGS（build.js 定义）。
// 由 index.html 在 build.js 之后、game.js 之前调用：
//   <script src="buildings_v16.js"></script>
//   <script>mergeBuildingsV16();</script>
// 重复调用安全（幂等）：已存在的 id 会被覆盖为同一定义，不会重复累加。
// ═══════════════════════════════════════════════════════════════════════
function mergeBuildingsV16() {
  if (typeof BUILDINGS === 'undefined') {
    console.warn('[buildings_v16] BUILDINGS 未定义，跳过合并（请确认 build.js 已加载）');
    return false;
  }
  Object.assign(BUILDINGS, BUILDINGS_V16);
  return true;
}

// ═══════════════════════════════════════════════════════════════════════
// 聚合接口 V16Agg（供各系统调用；损坏/断电的建筑由调用方过滤）
// 用法示例：
//   const s = V16Agg.sum(game.buildings, 'oc16_tidal_plant', e => e.power || 0);
// ═══════════════════════════════════════════════════════════════════════
const V16Agg = {
  // 取某建筑某等级的 effect 对象（防御性：缺失时返回 {}）
  effectOf(id, level) {
    const def = BUILDINGS_V16[id];
    if (!def || !def.levels) return {};
    return (def.levels[level] || {}).effect || {};
  },
  // 对全城某建筑的所有实例求和
  sum(buildings, id, mapFn) {
    let total = 0;
    for (const b of buildings || []) {
      if (b.id !== id) continue;
      total += mapFn(this.effectOf(id, b.level), b) || 0;
    }
    return total;
  },
  // 对全城某建筑的所有实例取最大值（乘区类字段用）
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
  // 全城潮汐总产电（加法汇总，供 build.js 电力聚合）
  tidalPower(buildings) {
    return this.sum(buildings, 'oc16_tidal_plant', (e) => e.power || 0);
  },
  // 全城岩浆钢产量（加法汇总）
  magmaSteel(buildings) {
    return this.sum(buildings, 'un16_magma_forge', (e) => e.steelOut || 0);
  },
  // 全城机油产量（加法汇总）
  oilOutput(buildings) {
    return this.sum(buildings, 'rb16_oil_refinery', (e) => e.oilOut || 0);
  },
  // 全城地下产量倍率（取最高，供 underground.js）
  underYieldMul(buildings) {
    return this.max(buildings, 'un16_core_elevator', (e) => e.underYieldMul || 1) || 1;
  },
  // 全城机器人效率加成（取最高，供 RobotManager）
  robotEffAdd(buildings) {
    return this.max(buildings, 'rb16_logic_forge', (e) => e.robotEffAdd || 0);
  },
  // 全城天空预报精度（取最高，供 disaster.js）
  forecastAccuracy(buildings) {
    return this.max(buildings, 'sk16_windspire', (e) => e.forecastAccuracy || 0);
  },
};

// ═══════════════════════════════════════════════════════════════════════
// 自检 BuildingsV16SelfTest（控制台运行）
// ═══════════════════════════════════════════════════════════════════════
function BuildingsV16SelfTest() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    const ids = Object.keys(BUILDINGS_V16);
    ok(ids.length === 20, 'v1.6 建筑应为 20 种，实际 ' + ids.length);
    // 四系分布：天空 6 / 机器人 6 / 深海 4 / 地下 4
    const sky = ids.filter((id) => id.indexOf('sk16_') === 0);
    const rob = ids.filter((id) => id.indexOf('rb16_') === 0);
    const oc = ids.filter((id) => id.indexOf('oc16_') === 0);
    const un = ids.filter((id) => id.indexOf('un16_') === 0);
    ok(sky.length === 6, '天空系应为 6 种，实际 ' + sky.length);
    ok(rob.length === 6, '机器人系应为 6 种，实际 ' + rob.length);
    ok(oc.length === 4, '深海系应为 4 种，实际 ' + oc.length);
    ok(un.length === 4, '地下系应为 4 种，实际 ' + un.length);
    // 与 v1.5 建筑 id 不重叠
    if (typeof BUILDINGS_V15 !== 'undefined') {
      for (const id of ids) ok(!BUILDINGS_V15[id], '与 v1.5 建筑 id 重叠: ' + id);
    }
    for (const id of ids) {
      const d = BUILDINGS_V16[id];
      ok(d.id === id, id + ' 的 id 字段不一致');
      ok(!!d.name && !!d.icon, id + ' 缺少 name/icon');
      ok(Array.isArray(d.levels) && d.levels.length === 4 && d.levels[0] === null,
        id + ' levels 应为 [null, L1, L2, L3]');
      for (let lv = 1; lv <= 3; lv++) {
        const L = d.levels[lv];
        ok(!!L, id + ' 缺少 Lv' + lv);
        ok(L && L.cost && typeof L.cost === 'object', id + ' Lv' + lv + ' 缺少 cost');
        ok(L && L.effect && typeof L.effect === 'object', id + ' Lv' + lv + ' 缺少 effect');
        ok(L && typeof L.powerUse === 'number', id + ' Lv' + lv + ' 缺少 powerUse');
        ok(L && typeof L.needPop === 'number', id + ' Lv' + lv + ' 缺少 needPop');
        ok(!!L.effectDesc && !!L.desc && !!L.flavor, id + ' Lv' + lv + ' 缺少 effectDesc/desc/flavor');
        const allowed = ['iron', 'ice', 'rare', 'water', 'food', 'steel', 'tech', 'uranium', 'he3', 'nano'];
        for (const k of Object.keys(L.cost || {})) {
          ok(allowed.indexOf(k) !== -1, id + ' Lv' + lv + ' 非法 cost key: ' + k);
        }
      }
      ok(d.unlock && d.unlock.type, id + ' 缺少 unlock');
      ok(BUILD_ORDER_V16.indexOf(id) !== -1, 'BUILD_ORDER_V16 缺少 ' + id);
    }
    ok(BUILD_ORDER_V16.length === 20, 'BUILD_ORDER_V16 应为 20 项');
    // V16Agg 冒烟
    ok(V16Agg.effectOf('nope', 1) && typeof V16Agg.effectOf('nope', 1) === 'object', 'V16Agg 防御失败');
    ok(V16Agg.sum(null, 'x', () => 1) === 0, 'V16Agg.sum 防御失败');
    ok(V16Agg.underYieldMul(null) === 1, 'underYieldMul 默认值异常');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[BuildingsV16SelfTest] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[BuildingsV16SelfTest] 通过：20 建筑 × 3 级（天空 6/机器人 6/深海 4/地下 4）');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    BuildingsV16SelfTest, BUILDINGS_V16, BUILD_ORDER_V16, V16Agg, mergeBuildingsV16,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 套装加成 SET_BONUSES_V16（4 套）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：集齐同系建筑 = 套装加成——鼓励「专精一系」玩法：
 *   ☁️ 天空套（6 件）：天空建筑产量 +15%；
 *   🤖 硅基套（6 件）：机器人效率 +15%；
 *   🌊 深海套（4 件）：海洋建筑产量 +15%；
 *   🕳️ 地心套（4 件）：地下建筑产量 +15%。
 *   集齐 2 套：额外 +5% 全局产量；集齐 4 套：「四界同心」（+15% 全局）。
 *
 * ★ 读取约定（build.js 防御性读取）：
 *   const bonus = V16SetBonus.get(game);  // { skyMul, robotMul, oceanMul, underMul, globalMul }
 *   // 实现：按建筑种数（去重 id）判定套装件数，3/4/6 件档
 * ═══════════════════════════════════════════════════════════════════════
 */
const SET_BONUSES_V16 = {
  sets: [
    { id: 'sky', name: '天空套', icon: '☁️', prefix: 'sk16_', need: 6,
      bonus: { skyMul: 1.15 },
      desc: '集齐 6 种天空系建筑：天空建筑产量 +15%',
      flavor: '「天空的每一块云，都有我们的名字。」——集齐者留言' },
    { id: 'robot', name: '硅基套', icon: '🤖', prefix: 'rb16_', need: 6,
      bonus: { robotMul: 1.15 },
      desc: '集齐 6 种机器人系建筑：机器人效率 +15%',
      flavor: '「硅基也有全家桶，齐了。」——集齐者留言' },
    { id: 'ocean', name: '深海套', icon: '🌊', prefix: 'oc16_', need: 4,
      bonus: { oceanMul: 1.15 },
      desc: '集齐 4 种深海系建筑：海洋建筑产量 +15%',
      flavor: '「海底的每一滴水，都在为我们打工。」——集齐者留言' },
    { id: 'under', name: '地心套', icon: '🕳️', prefix: 'un16_', need: 4,
      bonus: { underMul: 1.15 },
      desc: '集齐 4 种地下系建筑：地下建筑产量 +15%',
      flavor: '「地心很暖，因为我们住在那儿。」——集齐者留言' },
  ],
  // 多套加成
  multi: [
    { sets: 2, bonus: { globalMul: 1.05 }, desc: '集齐 2 套：全局产量 +5%' },
    { sets: 4, name: '四界同心', icon: '🌐', bonus: { globalMul: 1.15 },
      desc: '集齐 4 套：全局产量 +15%（四界同心）',
      flavor: '「天、海、地、硅，四界同心——这就是新人类。」' },
  ],
};

const V16SetBonus = {
  // 已集齐的套装 id 数组（防御）
  completedSets(game) {
    try {
      const bs = (game && game.builder && game.builder.buildings) || [];
      const ids = new Set();
      for (const b of bs) if (b && b.id) ids.add(b.id);
      const done = [];
      for (const s of SET_BONUSES_V16.sets) {
        let n = 0;
        for (const id of ids) if (id.indexOf(s.prefix) === 0) n++;
        if (n >= s.need) done.push(s.id);
      }
      return done;
    } catch (e) { return []; }
  },
  // 聚合加成（防御：无套装时全 1）
  get(game) {
    const out = { skyMul: 1, robotMul: 1, oceanMul: 1, underMul: 1, globalMul: 1 };
    try {
      const done = this.completedSets(game);
      for (const s of SET_BONUSES_V16.sets) {
        if (done.indexOf(s.id) === -1) continue;
        for (const [k, v] of Object.entries(s.bonus)) out[k] = (out[k] || 1) * v;
      }
      for (const m of SET_BONUSES_V16.multi) {
        if (done.length >= m.sets) {
          for (const [k, v] of Object.entries(m.bonus)) out[k] = (out[k] || 1) * v;
        }
      }
    } catch (e) {}
    return out;
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑联动矩阵 SYNERGY_V16
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：建筑之间不是孤岛——列出「官方认证」的强力组合，
 *   供 help.js 展示「推荐搭配」，供玩家抄作业。
 * 每条：{ a, b, name, icon, desc, mul（加成）, flavor }。
 * ★ 读取约定（help.js 防御性读取）：直接读 SYNERGY_V16 数组展示。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SYNERGY_V16 = [
  { a: 'sk16_windspire', b: 'sk16_stormcollector', name: '看天用电', icon: '⛈️',
    desc: '气象尖塔预报 + 雷暴收集器：风暴期产电 ×1.5，提前排产',
    mul: '风暴期产电 ×1.5',
    flavor: '「知道风暴什么时候来，就能让风暴给我们打工。」' },
  { a: 'sk16_strato_antenna', b: 'observatory', name: '天地双镜', icon: '🔭',
    desc: '平流层天线 + 天文台：深空加成取最高 ×2.0，科研双引擎',
    mul: '深空 ×2.0',
    flavor: '「地上看星星，天上也看——星星被我们看光了。」' },
  { a: 'sk16_anchor_tower', b: 'sky_dock', name: '天地一体', icon: '⚓',
    desc: '锚定塔 + 空中船坞：低空平台免漂移，飞行器有家',
    mul: '低空稳定 100%',
    flavor: '「地上的塔，天上的城，一根绳子连着。」' },
  { a: 'rb16_logic_forge', b: 'rb_charger', name: '硅基双引擎', icon: '🔩',
    desc: '逻辑熔炉 + 充电站：效率 ×1.2 × 耗电 -40%，机器人毕业装',
    mul: '效率 +20%，耗电 -40%',
    flavor: '「又快又省——机器人的终极梦想。」' },
  { a: 'rb16_cyber_clinic', b: 'rb16_limb_workshop', name: '产销一体', icon: '🦾',
    desc: '义体诊所 + 义肢工坊：赛博格转化 -30%，义肢贸易 +20 钢',
    mul: '转化 -30%',
    flavor: '「从生产到安装，一条龙——赛博朋克也是服务业。」' },
  { a: 'rb16_data_crypt', b: 'rb_furnace', name: '善终一条龙', icon: '💾',
    desc: '数据墓园 + 退役熔炉：身体回收 + 记忆上传，退役收益翻倍',
    mul: '退役收益 ×2',
    flavor: '「身体进熔炉，记忆进墓园——体面。」' },
  { a: 'oc16_tidal_plant', b: 'oc16_vent_station', name: '海洋电网', icon: '🌊',
    desc: '潮汐电站 + 热泉站：稳定 45 电 + 稀有矿，海洋工业毕业',
    mul: '稳定 45 电',
    flavor: '「潮汐和热泉，海的两种心跳。」' },
  { a: 'oc16_coral_farm', b: 'oc16_sub_dock', name: '深海田园', icon: '🪸',
    desc: '珊瑚农场 + 潜艇船坞：食物 20 + 珍珠 + 打捞，海洋民生毕业',
    mul: '食物 20/周期',
    flavor: '「海底有农场，海面有船——这是田园牧歌。」' },
  { a: 'un16_mushroom_farm', b: 'un16_core_elevator', name: '地心粮道', icon: '🍄',
    desc: '蘑菇农场 + 地心电梯：地下食物 ×1.5，还能运上地面卖',
    mul: '地下食物 ×1.5',
    flavor: '「地底种的蘑菇，地上的人抢着买。」' },
  { a: 'un16_magma_forge', b: 'un16_echo_library', name: '地心文武', icon: '🔥',
    desc: '岩浆锻造炉 + 回声图书馆：钢 25 + 科技 ×1.5，地下文武双全',
    mul: '钢 25/周期，科技 ×1.5',
    flavor: '「能打铁，也能读书——地心人的自我修养。」' },
  { a: 'sk16_cloudmarket', b: 'exchange', name: '倒爷双引擎', icon: '💱',
    desc: '云端市集 + 交易所：稀有贸易价 ×1.8，倒爷毕业',
    mul: '稀有贸易 ×1.8',
    flavor: '「低买高卖，天上地下一起卖。」' },
  { a: 'rb16_sync_tower', b: 'rb_council', name: '维稳组合拳', icon: '🛰️',
    desc: '同步塔 + 逻辑议会：忠诚又涨又保，起义链灭火器',
    mul: '忠诚双保险',
    flavor: '「一个负责涨，一个负责保——忠诚的双保险。」' },
];

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 克制关系 COUNTERS_V16（灾难 ↔ 建筑/科技）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：每场灾难都有「官方解法」——列成表，供 help.js 展示「灾难图鉴」。
 * 每条：{ disaster, counters: [{ type, ref, desc }] }。
 * ★ 读取约定（help.js / disaster.js 防御性读取）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const COUNTERS_V16 = [
  { disaster: 'skystorm', name: '空中风暴', icon: '🌪️',
    counters: [
      { type: 'building', ref: 'storm_radar', desc: '风暴雷达站：预警 +45 秒，减伤 50%' },
      { type: 'building', ref: 'sk16_windspire', desc: '气象尖塔：预报 100%，疏散减伤 30%' },
      { type: 'tech', ref: 't-sky-9', desc: '空中生态：风暴伤害 -20%' },
      { type: 'building', ref: 'sky_throne', desc: '天空王座：天空系灾难免疫（终极）' },
    ] },
  { disaster: 'robovirus', name: '机器人病毒', icon: '🦠',
    counters: [
      { type: 'tech', ref: 't-rob-12', desc: '防火墙：感染率 -40%' },
      { type: 'tech', ref: 't-mix-8', desc: '杀毒协议：感染率 -30%' },
      { type: 'building', ref: 'rb_council', desc: '逻辑议会：听证会稳定忠诚' },
    ] },
  { disaster: 'emp', name: 'EMP 爆发', icon: '💥',
    counters: [
      { type: 'tech', ref: 't-mix-4', desc: '全频屏蔽：EMP 伤害 -20%' },
      { type: 'building', ref: 'shield_dome', desc: '护盾穹顶 Lv2+：减伤 50%' },
      { type: 'building', ref: 'un16_mushroom_farm', desc: '蘑菇农场：断电不停产（食物保险）' },
    ] },
  { disaster: 'skycrash', name: '平台坠毁', icon: '🛬',
    counters: [
      { type: 'building', ref: 'sky_dock', desc: '空中船坞：维修平台，45 秒抢修' },
      { type: 'upgrade', ref: 'PLATFORM_UPGRADES.lift', desc: '浮空囊 Lv3：hp +150，硬吃不坠' },
      { type: 'building', ref: 'cloud_ark', desc: '云端方舟：人口损失 -80%（终极）' },
    ] },
  { disaster: 'cloudtoxin', name: '云层毒化', icon: '☁️',
    counters: [
      { type: 'building', ref: 'sky_garden', desc: '天空花园：净化，幸福对冲' },
      { type: 'building', ref: 'cloud_farm', desc: '云端农场 Lv3：封闭循环，减产 50%' },
    ] },
];

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑运营手册 V16_MANUAL（help.js 展示用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：每座建筑一句话「运营要点」——玩家抄作业用。
 * 字段：{ id, tip（运营要点）, timing（建造时机）, pitfall（常见坑） }。
 * ★ 读取约定（help.js 防御性读取）：V16_MANUAL[id]。
 * ═══════════════════════════════════════════════════════════════════════
 */
const V16_MANUAL = {
  sk16_windspire: { tip: '先建雷达站，再建尖塔：预警时间 × 预警精度 = 天空气象毕业。', timing: '天空城铺开后（平台 ≥4）', pitfall: 'EMP 期间尖塔停机，别在 EMP 季指望它。' },
  sk16_stormcollector: { tip: '风暴季前把高耗电生产线排满：看天用电，白嫖电力。', timing: '气象尖塔 Lv2 后', pitfall: '平时 0 电，别指望它当主力电源。' },
  sk16_strato_antenna: { tip: '深空流必备：与天文台二选一，便宜一半。', timing: '平流层解锁后', pitfall: '必须建在平流层以上，低空建了白建。' },
  sk16_anchor_tower: { tip: '低空流必备：一座 Lv3 管 12km，全场免漂移。', timing: '低空平台 ≥4 时', pitfall: '这是地面建筑，别建到平台上。' },
  sk16_skybeacon: { tip: '飞艇 ≥3 艘再建：导航加成值得，1 艘时回本慢。', timing: '云港码头建成后', pitfall: '灯塔的光束颜色随幸福变，别以为是 bug。' },
  sk16_cloudmarket: { tip: '稀有矿多再建：拍卖行 +20% 是倒爷的核心。', timing: '提炼塔投产后', pitfall: '税收是添头，别指望它当主力收入。' },
  rb16_logic_forge: { tip: '机器人 ≥30 台再开超频：磨损 +50% 很疼。', timing: '维修中心 Lv2 后', pitfall: '超频期间病毒感染率 +20%，病毒季关超频。' },
  rb16_cyber_clinic: { tip: '人口增长流必备：×2.0 比基因实验室便宜。', timing: '中期人口扩张期', pitfall: 'growthMul 与基因实验室取最高，别双建。' },
  rb16_data_crypt: { tip: '退役前先建墓园：每台 10 科技点，死亡也有产出。', timing: '机器人 ≥50 台', pitfall: '墓园不产机器人，只产「记忆」。' },
  rb16_sync_tower: { tip: '维稳流核心：蜂巢意识下，忠诚只看平均值。', timing: '逻辑议会 Lv2 后', pitfall: 'EMP 期间蜂巢解散 60 秒，提前备忠诚。' },
  rb16_oil_refinery: { tip: '机器人 ≥50 台必建：缺油干磨 +20%，老得快。', timing: '组装厂 Lv2 后', pitfall: 'oil 走 game.robots.oil，不进仓库，别找。' },
  rb16_limb_workshop: { tip: '赛博格流必备：转化 -30%，便宜大碗。', timing: '义体诊所 Lv3 后', pitfall: '这是唯一直接赚钱的机器人建筑，别错过。' },
  oc16_tidal_plant: { tip: '海洋前期答案：稳定 8 电，不看天不看地。', timing: '海洋解锁后立刻', pitfall: '海啸期 ×1.5，别浪费，排产。' },
  oc16_vent_station: { tip: 'He3 第二产地：深空抢 He3 时，海洋是备胎。', timing: '海洋中期', pitfall: '断电照产是特性，不是 bug。' },
  oc16_coral_farm: { tip: '海洋民生三冠王：食物 + 幸福 + 珍珠。', timing: '海洋人口 ≥50', pitfall: '珍珠走 trade.js 结算，不进仓库。' },
  oc16_sub_dock: { tip: '巨兽来了再建武装：平时 2 槽位够用。', timing: '深海探索期', pitfall: '打捞是盲盒，期望 15 钢，别上头。' },
  un16_mushroom_farm: { tip: '地下前期答案：断电不停产，食物保险。', timing: '地下解锁后立刻', pitfall: '蘑菇不需要光，别给它建补光灯。' },
  un16_core_elevator: { tip: '地下流毕业建筑：×1.5 + 人口 -30%，贵但值。', timing: '地下 B2 后', pitfall: '与 v1.5 地下科技线取最高，别双修。' },
  un16_magma_forge: { tip: '地热 ≥100 再建：×1.5 产量，不达标别建。', timing: '地热井 Lv2 后', pitfall: '这是地下军工复合体，军事 +20% 别浪费。' },
  un16_echo_library: { tip: '科研流放大器：全城科技 ×1.5，后期必备。', timing: '科技点 ≥200/周期', pitfall: 'lecture 与其他全局科技倍率取最高，别叠。' },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 扩展自检 BuildingsV16SelfTest2（套装 / 联动 / 克制 / 手册）
 * ═══════════════════════════════════════════════════════════════════════
 */
function BuildingsV16SelfTest2() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 套装 4 套
    ok(SET_BONUSES_V16.sets.length === 4, '套装应为 4 套');
    for (const s of SET_BONUSES_V16.sets) {
      ok(s.prefix && s.need > 0, '套装 ' + s.id + ' 字段异常');
    }
    const b0 = V16SetBonus.get(null);
    ok(b0.skyMul === 1 && b0.globalMul === 1, '无套装时加成应全 1');
    ok(V16SetBonus.completedSets(null).length === 0, 'completedSets 防御失败');
    // 模拟集齐天空套
    const g = { builder: { buildings: [
      { id: 'sk16_windspire' }, { id: 'sk16_stormcollector' }, { id: 'sk16_strato_antenna' },
      { id: 'sk16_anchor_tower' }, { id: 'sk16_skybeacon' }, { id: 'sk16_cloudmarket' },
    ] } };
    const done = V16SetBonus.completedSets(g);
    ok(done.indexOf('sky') !== -1, '天空套应判定集齐');
    const b1 = V16SetBonus.get(g);
    ok(b1.skyMul === 1.15, '天空套加成异常');
    // 联动 12 条
    ok(SYNERGY_V16.length === 12, '联动应为 12 条，实际 ' + SYNERGY_V16.length);
    for (const s of SYNERGY_V16) ok(s.a && s.b && s.desc, '联动条目字段异常');
    // 克制 5 灾难
    ok(COUNTERS_V16.length === 5, '克制表应为 5 条');
    for (const c of COUNTERS_V16) ok(c.disaster && c.counters.length >= 2, '克制条目异常: ' + c.disaster);
    // 手册 20 条
    const mids = Object.keys(V16_MANUAL);
    ok(mids.length === 20, '手册应为 20 条，实际 ' + mids.length);
    for (const id of Object.keys(BUILDINGS_V16)) ok(V16_MANUAL[id], '手册缺少 ' + id);
    for (const id of mids) ok(V16_MANUAL[id].tip && V16_MANUAL[id].timing, '手册条目异常: ' + id);
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[BuildingsV16SelfTest2] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[BuildingsV16SelfTest2] 通过：套装 4 / 联动 12 / 克制 5 / 手册 20');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    BuildingsV16SelfTest2, SET_BONUSES_V16, V16SetBonus, SYNERGY_V16,
    COUNTERS_V16, V16_MANUAL,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑升级优先级 UPGRADE_PRIORITY（help.js 展示用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：20 种建筑，先升哪个？给「官方推荐顺序」——
 *   按「回本速度」排序，分 T0（必升）/ T1（推荐）/ T2（后期）。
 * 每条：{ id, tier, reason }。
 * ★ 读取约定（help.js 防御性读取）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const UPGRADE_PRIORITY = [
  // ---- T0：必升（回本快 / 体系核心） ----
  { id: 'oc16_tidal_plant', tier: 'T0', reason: '海洋稳定 8 电：回本最快，前期必升。' },
  { id: 'un16_mushroom_farm', tier: 'T0', reason: '地下食物基本盘：断电不停产，保险。' },
  { id: 'rb_assembly', tier: 'T0', reason: '机器人之源：先有兵，再谈其他。（v1.6 机器人建筑）' },
  { id: 'sk16_anchor_tower', tier: 'T0', reason: '低空流必备：免漂移，不然平台天天跑。' },
  { id: 'un16_magma_forge', tier: 'T0', reason: '钢 25/周期：后期一切建筑的爹。' },
  // ---- T1：推荐（中期发力） ----
  { id: 'sk16_strato_antenna', tier: 'T1', reason: '深空 ×2.0：深空流中期质变。' },
  { id: 'rb16_logic_forge', tier: 'T1', reason: '机器人效率 +20%：硅基中期答案。' },
  { id: 'oc16_vent_station', tier: 'T1', reason: 'He3 第二产地：深空抢 He3 时的备胎。' },
  { id: 'un16_core_elevator', tier: 'T1', reason: '地下 ×1.5：贵，但值。' },
  { id: 'sk16_stormcollector', tier: 'T1', reason: '风暴期 30 电：赌徒的狂欢。' },
  { id: 'rb16_cyber_clinic', tier: 'T1', reason: '人口 ×2.0：比基因实验室便宜。' },
  { id: 'oc16_coral_farm', tier: 'T1', reason: '海洋三冠王：食物 + 幸福 + 珍珠。' },
  // ---- T2：后期（毕业装） ----
  { id: 'sk16_windspire', tier: 'T2', reason: '预报 100%：后期策略的眼睛。' },
  { id: 'sk16_skybeacon', tier: 'T2', reason: '导航 ×1.5：飞艇多了再升。' },
  { id: 'sk16_cloudmarket', tier: 'T2', reason: '倒爷毕业：稀有贸易 ×1.8。' },
  { id: 'rb16_data_crypt', tier: 'T2', reason: '先贤祠：新机器人 +15% 效率。' },
  { id: 'rb16_sync_tower', tier: 'T2', reason: '蜂巢意识：一荣俱荣，一损俱损。' },
  { id: 'rb16_oil_refinery', tier: 'T2', reason: '机器人 ≥50 台再升：粮草官。' },
  { id: 'rb16_limb_workshop', tier: 'T2', reason: '赛博格流：转化 -30%。' },
  { id: 'oc16_sub_dock', tier: 'T2', reason: '深渊打捞：盲盒，好玩但不稳。' },
  { id: 'un16_echo_library', tier: 'T2', reason: '全城科技 ×1.5：科研后期放大器。' },
];

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 灾难预案 DISASTER_PLANS（help.js 灾难图鉴用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：每场 v1.6 灾难的「三步预案」——预警时做什么、打击时做什么、
 *   灾后做什么。玩家照着做，损失减半。
 * 每条：{ disaster, steps: [预警, 打击, 灾后] }。
 * ═══════════════════════════════════════════════════════════════════════
 */
const DISASTER_PLANS = [
  { disaster: 'skystorm', name: '空中风暴', icon: '🌪️',
    steps: [
      '预警：低空平台关机（haltLow），高耗电建筑转手动；雷达站确认精度。',
      '打击：装甲平台顶住，防空炮开火；人员进方舟/疏散。',
      '灾后：船坞维修，救援队出动；雷暴收集器收电——「灾后红利」。',
    ] },
  { disaster: 'robovirus', name: '机器人病毒', icon: '🦠',
    steps: [
      '预警：防火墙全开，超频关闭；逻辑议会准备听证会。',
      '打击：感染者隔离（效率 -50% 别派活）；听证会稳定忠诚。',
      '灾后：杀毒协议复盘；感染者送维修中心「洗脑」。',
    ] },
  { disaster: 'emp', name: 'EMP 爆发', icon: '💥',
    steps: [
      '预警：全频屏蔽网开启；蘑菇农场确认（断电不停产）。',
      '打击：全城断电 60 秒——别慌，蘑菇还在长，方舟还在飞。',
      '灾后：检查电子设备耐久；机器人忠诚 -5，听证会补回来。',
    ] },
  { disaster: 'skycrash', name: '平台坠毁', icon: '🛬',
    steps: [
      '预警：45 秒疏散！人员转方舟，贵重设备转飞艇。',
      '打击：平台下坠——救援队待命，船坞准备抢修。',
      '灾后：救援队搜救；云端方舟 -80% 人口损失；重建平台。',
    ] },
  { disaster: 'cloudtoxin', name: '云层毒化', icon: '☁️',
    steps: [
      '预警：农场转封闭循环；花园开净化；居民戴呼吸面罩。',
      '打击：农场停产 180 秒——地面/地下食物顶上。',
      '灾后：云水检测；毒化期间的云水全部排放，不喝。',
    ] },
];

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑图鉴 GALLERY（flavor 集，help.js / 纪念馆 UI 用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：20 座建筑，每座一句「墓志铭」——
 *   玩家在图鉴里看到的不是数值，是故事。
 * 字段：{ id, epitaph（墓志铭）, built（建成播报） }。
 * ═══════════════════════════════════════════════════════════════════════
 */
const GALLERY_V16 = [
  { id: 'sk16_windspire', epitaph: '它听懂了风的语言。', built: '🌪️ 气象尖塔建成：从今天起，风暴不再是 surprise。' },
  { id: 'sk16_stormcollector', epitaph: '它向闪电收税。', built: '⛈️ 雷暴收集器建成：打雷了，全体注意，免费电力到货。' },
  { id: 'sk16_strato_antenna', epitaph: '它在天上看星星。', built: '📡 平流层天线建成：这里的星星不眨眼。' },
  { id: 'sk16_anchor_tower', epitaph: '它是天空的风筝线。', built: '⚓ 锚定塔建成：地上的塔，天上的城，一根绳子连着。' },
  { id: 'sk16_skybeacon', epitaph: '它是空域的灯塔。', built: '💡 天空灯塔点亮：飞艇船长说，终于不用数星星认路了。' },
  { id: 'sk16_cloudmarket', epitaph: '它是云上的商业街。', built: '🏪 云端市集开业：第一家店卖热汤面——天上最缺人间烟火气。' },
  { id: 'rb16_logic_forge', epitaph: '它重铸机器的脑子。', built: '🔩 逻辑熔炉点火：第一台重铸的机器人说，脑子被擦亮了。' },
  { id: 'rb16_cyber_clinic', epitaph: '它是人机共同医院。', built: '🦾 义体诊所开业：第一位患者举起机械手，比了个耶。' },
  { id: 'rb16_data_crypt', epitaph: '它是机器人的坟墓，也是图书馆。', built: '💾 数据墓园落成：第一块墓碑刻着：铁蛋，它从不请假。' },
  { id: 'rb16_sync_tower', epitaph: '它让所有机器人同频。', built: '🛰️ 同步塔上线：从今天起，没有「我」，只有「我们」。' },
  { id: 'rb16_oil_refinery', epitaph: '它是机器人的粮仓。', built: '🛢️ 机油精炼厂投产：第一滴油下线，机器人说味道像希望。' },
  { id: 'rb16_limb_workshop', epitaph: '它是机器人的裁缝店。', built: '🦿 义肢工坊开业：畅销款「铁蛋同款机械臂」脱销了。' },
  { id: 'oc16_tidal_plant', epitaph: '它把海的呼吸变成电。', built: '🌊 潮汐电站并网：潮汐准时，电量准时。' },
  { id: 'oc16_vent_station', epitaph: '它是海底的聚宝盆。', built: '♨️ 深海热泉站投产：海底的烟囱冒的不是烟，是钱。' },
  { id: 'oc16_coral_farm', epitaph: '它是海底的麦田。', built: '🪸 珊瑚农场丰收：最受欢迎的珊瑚叫铁蛋礁。' },
  { id: 'oc16_sub_dock', epitaph: '它是潜艇的家。', built: '🚤 潜艇船坞下水：第一艘潜艇的船员说，我们去海底看看。' },
  { id: 'un16_mushroom_farm', epitaph: '它是地底的粮仓。', built: '🍄 蘑菇农场丰收：最受欢迎的品种叫铁蛋菇。' },
  { id: 'un16_core_elevator', epitaph: '它是地心的电梯。', built: '🛗 地心电梯贯通：有个没标的按钮，别问，问就是彩蛋。' },
  { id: 'un16_magma_forge', epitaph: '它用岩浆打铁。', built: '🔥 岩浆锻造炉点火：第一炉钢里，有火星的心跳。' },
  { id: 'un16_echo_library', epitaph: '它是地底的星空。', built: '📚 回声图书馆开馆：最受欢迎的书是《铁蛋传》，一句话。' },
];

/* ═══════════════════════════════════════════════════════════════════════
 * 扩展自检 BuildingsV16SelfTest3（优先级 / 预案 / 图鉴）
 * ═══════════════════════════════════════════════════════════════════════
 */
function BuildingsV16SelfTest3() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 升级优先级：覆盖全部 20 种 + 1（rb_assembly 是 v1.6 机器人建筑）
    const pids = UPGRADE_PRIORITY.map((p) => p.id);
    for (const id of Object.keys(BUILDINGS_V16)) {
      ok(pids.indexOf(id) !== -1, 'UPGRADE_PRIORITY 缺少 ' + id);
    }
    for (const p of UPGRADE_PRIORITY) {
      ok(['T0', 'T1', 'T2'].indexOf(p.tier) !== -1, p.id + ' tier 非法');
      ok(!!p.reason, p.id + ' 缺少 reason');
    }
    const t0 = UPGRADE_PRIORITY.filter((p) => p.tier === 'T0').length;
    ok(t0 === 5, 'T0 应为 5 条，实际 ' + t0);
    // 灾难预案 5 条，每条 3 步
    ok(DISASTER_PLANS.length === 5, '预案应为 5 条');
    for (const d of DISASTER_PLANS) {
      ok(d.steps.length === 3, d.disaster + ' 应为 3 步预案');
    }
    // 图鉴 20 条
    ok(GALLERY_V16.length === 20, '图鉴应为 20 条，实际 ' + GALLERY_V16.length);
    for (const id of Object.keys(BUILDINGS_V16)) {
      ok(GALLERY_V16.some((g) => g.id === id), '图鉴缺少 ' + id);
    }
    for (const g of GALLERY_V16) ok(g.epitaph && g.built, '图鉴条目异常: ' + g.id);
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[BuildingsV16SelfTest3] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[BuildingsV16SelfTest3] 通过：优先级 21 / 预案 5×3 / 图鉴 20');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    BuildingsV16SelfTest3, UPGRADE_PRIORITY, DISASTER_PLANS, GALLERY_V16,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑成就路线 ACHIEVE_PATHS（help.js 成就攻略用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：40 个 v1.6 成就，怎么拿？给「路线图」——
 *   每条路线 3~5 步，按顺序做，成就自然来。
 * 每条：{ id, name, icon, steps: [{ text, check }] }。
 * ★ 读取约定（help.js 防御性读取）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const ACHIEVE_PATHS = [
  { id: 'path-sky', name: '天空之路', icon: '☁️',
    steps: [
      { text: '研究浮空原理，建第一个平台（sx-first）', check: '平台 ≥1' },
      { text: '平台铺到 8 座，天空建筑 8 座（sx-8/sx-sky8）', check: '平台 ≥8' },
      { text: '造飞艇 + 巡逻机，舰队 6 架（sx-fleet）', check: '飞行器 ≥6' },
      { text: '上平流层，再上轨道边缘（sx-strato/sx-leo）', check: '轨道边缘平台 ≥1' },
      { text: '研究天空王座（sx-throne）', check: 't-sky-15' },
    ] },
  { id: 'path-robot', name: '硅基之路', icon: '🤖',
    steps: [
      { text: '第一台机器人（rx-first）', check: '机器人 ≥1' },
      { text: '机器人 50 台，建逻辑议会（rx-50）', check: '机器人 ≥50' },
      { text: '忠诚 ≥95（rx-loyal）', check: '忠诚 ≥95' },
      { text: '和解路线进共生时代（rx-reconcile/rx-symbio）', check: '共生时代' },
      { text: '机器人 200 台满编（rx-200）', check: '机器人 ≥200' },
    ] },
  { id: 'path-build', name: '建筑之路', icon: '🏗️',
    steps: [
      { text: '5 种 v16 建筑（bx-5）', check: '种数 ≥5' },
      { text: '集齐单系全家桶（bx-sky6/bx-rob6/bx-sea4/bx-under4）', check: '单系全齐' },
      { text: '12 种（bx-12）', check: '种数 ≥12' },
      { text: '20 种大满贯（bx-20）', check: '种数 ≥20' },
      { text: '全 Lv2+（bx-lv3all）', check: '全 Lv2+' },
    ] },
  { id: 'path-mix', name: '封神之路', icon: '🌐',
    steps: [
      { text: '硬抗三灾：风暴/病毒/EMP（mx-storm/mx-virus/mx-emp）', check: '三灾各 1' },
      { text: '25 项 v16 科技（mx-tech50）', check: '科技 ≥25' },
      { text: '三界各 5 座（mx-3world）', check: '三界各 ≥5' },
      { text: '50 项科技全满（mx-techall）', check: '科技 =50' },
      { text: '30 个 v16 成就（mx-legend）', check: '成就 ≥30' },
    ] },
];

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 速通指南 SPEEDRUN_V16（help.js 用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：速通玩家的时间表——按「游戏时间」排布关键节点。
 * 每条：{ time（分钟）, goal, tip }。
 * 这是「官方速通线」，供硬核玩家参考。
 * ═══════════════════════════════════════════════════════════════════════
 */
const SPEEDRUN_V16 = [
  { time: 0, goal: '开局', tip: '按 v1.5 速通线走：先温室后矿机，人口 50 前别碰天空。' },
  { time: 30, goal: '天空解锁', tip: '科技点攒 30，研究浮空原理。第一个平台放低空，云端农场。' },
  { time: 45, goal: '机器人解锁', tip: '研究机器人学，组装厂开工。充电站同步建，别让机器人饿着。' },
  { time: 60, goal: '三界开张', tip: '潮汐电站（海）+ 蘑菇农场（地）+ 天空电站（天），三界基本盘。' },
  { time: 90, goal: '维稳体系', tip: '逻辑议会 Lv2 + AI 核心，忠诚锁 80+。别让罢工打乱节奏。' },
  { time: 120, goal: '平流层', tip: '研究平流层定居，天线 + 电站搬上去，产出 ×1.25。' },
  { time: 150, goal: '灾难季', tip: 'v1.6 五灾难开始（32~40 分钟首发）：雷达站 + 防火墙 + 屏蔽网，三件套。' },
  { time: 180, goal: '套装', tip: '集齐第一套（推荐天空套），产量 +15%。' },
  { time: 240, goal: '毕业', tip: '天空王座 / 共生宪章 / 三界大同，三线毕业。' },
  { time: 300, goal: '第五胜利', tip: '新人类纪念碑 + t-mix-20 + 人口 500 + 机器人 100，胜利！' },
];

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 常见问题 FAQ_V16（help.js 用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：玩家最常问的 10 个问题，官方回答。
 * 每条：{ q, a }。
 * ═══════════════════════════════════════════════════════════════════════
 */
const FAQ_V16 = [
  { q: '天空建筑建在哪？', a: '建在浮空平台上，不占地面建筑位。先建平台（sky.js），再把建筑放上去。' },
  { q: '机器人吃什么？', a: '不吃食物，只吃电。每台 0.2 电/tick，100 台=20 电。充电站 -40% 耗电。' },
  { q: '忠诚掉得太快怎么办？', a: '逻辑议会听证会 + AI 核心 + 同步塔三件套。断电是最大杀手，先保电力。' },
  { q: '罢工了怎么办？', a: '三选一：镇压（快但有仇恨）、和解（需议会 Lv3，最优）、谈判（赌 50%）。' },
  { q: '天空/海洋/地下选哪个？', a: '都要。蘑菇农场（地）是断电保险，潮汐电站（海）是稳定电，天空是后期答案。' },
  { q: 'v16 建筑好贵，值得吗？', a: '值得。天空 ×1.5 定价但产出 ×1.25~1.5，长期回本。先 T0（潮汐/蘑菇/锚定）。' },
  { q: '第五胜利和第四胜利哪个好？', a: '第四胜利「虫洞远征」是跑路，第五胜利「新人类」是留下。一走一留，都值得。' },
  { q: '机器人会取代人类吗？', a: '不会。机器人不占人口上限，不生育，不参与幸福。它们是「第二市民」，不是替代品。' },
  { q: '铁蛋是谁？', a: 'v1.5 第一台机器人，采矿队工头，2071-2079，从不请假。v1.6 有 5 处纪念它。' },
  { q: '云鲸好吃吗？', a: '不好吃，而且犯法。云鲸是保护动物，看可以，吃不行。' },
];

/* ═══════════════════════════════════════════════════════════════════════
 * 扩展自检 BuildingsV16SelfTest4（成就路线 / 速通 / FAQ）
 * ═══════════════════════════════════════════════════════════════════════
 */
function BuildingsV16SelfTest4() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 成就路线 4 条
    ok(ACHIEVE_PATHS.length === 4, '成就路线应为 4 条');
    for (const p of ACHIEVE_PATHS) {
      ok(p.id && p.name && p.steps.length >= 4, '路线异常: ' + p.id);
      for (const s of p.steps) ok(s.text && s.check, '路线步骤异常: ' + p.id);
    }
    // 速通 10 节点，时间递增
    ok(SPEEDRUN_V16.length === 10, '速通应为 10 节点');
    for (let i = 1; i < SPEEDRUN_V16.length; i++) {
      ok(SPEEDRUN_V16[i].time >= SPEEDRUN_V16[i - 1].time, '速通时间应递增');
    }
    for (const s of SPEEDRUN_V16) ok(s.goal && s.tip, '速通节点异常');
    // FAQ 10 条
    ok(FAQ_V16.length === 10, 'FAQ 应为 10 条，实际 ' + FAQ_V16.length);
    for (const f of FAQ_V16) ok(f.q && f.a, 'FAQ 条目异常');
    ok(FAQ_V16.some((f) => f.q.indexOf('铁蛋') !== -1), '铁蛋 FAQ 缺失');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[BuildingsV16SelfTest4] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[BuildingsV16SelfTest4] 通过：成就路线 4 / 速通 10 / FAQ 10');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    BuildingsV16SelfTest4, ACHIEVE_PATHS, SPEEDRUN_V16, FAQ_V16,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 每日挑战 DAILY_V16（help.js 用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：每天一个挑战，完成后给奖励——
 *   轻量日活系统，7 天一轮换。
 * 每条：{ day（1~7）, name, icon, task, reward }。
 * ★ 读取约定（game.js 日活系统防御性读取）。
 * ═══════════════════════════════════════════════════════════════════════
 */
const DAILY_V16 = [
  { day: 1, name: '天空初体验', icon: '☁️',
    task: '建成 1 座浮空平台', reward: { steel: 50 },
    flavor: '周一：上天看看。' },
  { day: 2, name: '硅基朋友', icon: '🤖',
    task: '生产 5 台机器人', reward: { tech: 20 },
    flavor: '周二：认识新邻居。' },
  { day: 3, name: '深海宝藏', icon: '🌊',
    task: '建成 1 座深海建筑', reward: { ice: 50 },
    flavor: '周三：下海摸鱼。' },
  { day: 4, name: '地心探险', icon: '🕳️',
    task: '建成 1 座地下建筑', reward: { iron: 50 },
    flavor: '周四：往下挖。' },
  { day: 5, name: '风暴无惧', icon: '🌪️',
    task: '硬抗一次空中风暴零坠毁', reward: { rare: 20 },
    flavor: '周五：与风暴共舞。' },
  { day: 6, name: '人机同乐', icon: '🎉',
    task: '举办一次竞技赛或云海节', reward: { food: 50 },
    flavor: '周六：开派对。' },
  { day: 7, name: '三界同心', icon: '🌐',
    task: '天空/海洋/地下各建成 1 座建筑', reward: { he3: 10 },
    flavor: '周日：三界一家亲。' },
];

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 排行榜 LEADERBOARD_V16（flavor 向）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：单机游戏的「排行榜」——和历史上的自己比。
 *   记录玩家最好成绩：最高平台数、最多机器人、最快胜利……
 * 数据结构：localStorage 'starport-v16-leaderboard'（浏览器）。
 * ★ 读取约定：LeaderboardV16.get()/set()，Node 下用内存回退。
 * ═══════════════════════════════════════════════════════════════════════
 */
const LeaderboardV16 = {
  _mem: {},
  _key: 'starport-v16-leaderboard',
  // 读取（防御：localStorage 不存在用内存）
  get() {
    try {
      if (typeof localStorage !== 'undefined') {
        const s = localStorage.getItem(this._key);
        return s ? JSON.parse(s) : {};
      }
      return this._mem;
    } catch (e) { return {}; }
  },
  // 写入最高分（防御：只增不减）
  set(key, value) {
    try {
      const cur = this.get();
      if ((cur[key] || 0) >= value) return false;
      cur[key] = value;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this._key, JSON.stringify(cur));
      } else {
        this._mem = cur;
      }
      return true;
    } catch (e) { return false; }
  },
  // 榜单项定义
  items: [
    { key: 'maxPlatforms', name: '最高平台数', icon: '☁️' },
    { key: 'maxRobots', name: '最多机器人', icon: '🤖' },
    { key: 'maxSkyBuildings', name: '最多天空建筑', icon: '🏗️' },
    { key: 'fastestVictory', name: '最快胜利（分钟）', icon: '🏆', lower: true },
    { key: 'maxLoyalty', name: '最高忠诚', icon: '❤️' },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 模组接口 MOD_API_V16（给 mod 作者的文档）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：v1.6 所有系统都暴露「模组钩子」——
 *   mod 作者可以注册新建筑/新科技/新灾难，不改源码。
 * 纯文档 + 钩子函数，Node/浏览器双兼容。
 * ═══════════════════════════════════════════════════════════════════════
 */
const ModAPI_V16 = {
  hooks: {
    onBuildingBuilt: [],   // 建筑建成时触发 (game, buildingId)
    onDisaster: [],        // 灾难触发时触发 (game, disasterId)
    onUprising: [],        // 起义阶段变化时触发 (game, stage)
    onFestival: [],        // 节日开始时触发 (game, festivalId)
  },
  // 注册钩子（防御）
  on(event, fn) {
    try {
      if (!this.hooks[event] || typeof fn !== 'function') return false;
      this.hooks[event].push(fn);
      return true;
    } catch (e) { return false; }
  },
  // 触发钩子（防御：单个失败不影响其他）
  emit(event, game, data) {
    try {
      const fns = this.hooks[event] || [];
      for (const fn of fns) {
        try { fn(game, data); } catch (e) {}
      }
      return fns.length;
    } catch (e) { return 0; }
  },
  // 注册新建筑（防御：id 冲突返回 false）
  registerBuilding(def) {
    try {
      if (!def || !def.id || BUILDINGS_V16[def.id]) return false;
      BUILDINGS_V16[def.id] = def;
      return true;
    } catch (e) { return false; }
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * 扩展自检 BuildingsV16SelfTest5（每日挑战 / 排行榜 / 模组接口）
 * ═══════════════════════════════════════════════════════════════════════
 */
function BuildingsV16SelfTest5() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    // 每日挑战 7 天
    ok(DAILY_V16.length === 7, '每日挑战应为 7 天');
    for (let i = 0; i < 7; i++) ok(DAILY_V16[i].day === i + 1, '挑战天数异常');
    for (const d of DAILY_V16) ok(d.task && d.reward, '挑战条目异常: ' + d.day);
    // 排行榜
    const lb0 = LeaderboardV16.get();
    ok(typeof lb0 === 'object', '排行榜读取异常');
    ok(LeaderboardV16.set('maxPlatforms', 10) === true, '写榜失败');
    ok(LeaderboardV16.set('maxPlatforms', 5) === false, '低分应不覆盖');
    ok(LeaderboardV16.get().maxPlatforms === 10, '榜单异常');
    ok(LeaderboardV16.items.length === 5, '榜单项应为 5');
    // 模组接口
    ok(ModAPI_V16.on('onBuildingBuilt', () => {}) === true, '注册钩子失败');
    ok(ModAPI_V16.on('nope', () => {}) === false, '非法事件应失败');
    let called = 0;
    ModAPI_V16.on('onDisaster', () => { called++; });
    ModAPI_V16.on('onDisaster', () => { throw new Error('x'); });
    const n = ModAPI_V16.emit('onDisaster', null, 'skystorm');
    ok(n === 2 && called === 1, '钩子触发异常');
    ok(ModAPI_V16.registerBuilding({ id: 'mod_test' }) === true, '注册建筑失败');
    ok(ModAPI_V16.registerBuilding({ id: 'mod_test' }) === false, '重复注册应失败');
    delete BUILDINGS_V16.mod_test;  // 清理测试数据
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[BuildingsV16SelfTest5] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[BuildingsV16SelfTest5] 通过：每日挑战 7 / 排行榜 / 模组接口');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, {
    BuildingsV16SelfTest5, DAILY_V16, LeaderboardV16, ModAPI_V16,
  });
}

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑冷知识 TRIVIA_V16（help.js 趣味页用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：每座建筑一条冷知识——玩家在加载界面/图鉴里看到，会心一笑。
 * 每条：{ id, fact }。
 * ═══════════════════════════════════════════════════════════════════════
 */
const TRIVIA_V16 = [
  { id: 'sk16_windspire', fact: '气象尖塔的避雷针每年被雷劈 47 次——它是全城最「招雷」的人。' },
  { id: 'sk16_stormcollector', fact: '雷暴收集器收集的闪电，够全城用三天——如果风暴天天来的话。' },
  { id: 'sk16_strato_antenna', fact: '平流层天线收到的最远信号，来自 130 亿光年外——比城市还老。' },
  { id: 'sk16_anchor_tower', fact: '锚定塔的缆绳总长加起来，能绕火星三圈——如果火星让绕的话。' },
  { id: 'sk16_skybeacon', fact: '天空灯塔的光，站在地面上能看见——像天上多了颗星星。' },
  { id: 'sk16_cloudmarket', fact: '云端市集的第一笔交易，是用 3 个鸡蛋换了一包烟——原始，但温馨。' },
  { id: 'rb16_logic_forge', fact: '逻辑熔炉的温度，能把钢铁烧成「思考的形状」。' },
  { id: 'rb16_cyber_clinic', fact: '义体诊所最受欢迎的项目是「夜视眼」——晚上不用开灯，省电。' },
  { id: 'rb16_data_crypt', fact: '数据墓园的硬盘总容量，够存下全城人类的记忆——还有富余。' },
  { id: 'rb16_sync_tower', fact: '同步塔同步时，全城机器人的指示灯会一起闪——像一次集体的眨眼。' },
  { id: 'rb16_oil_refinery', fact: '机油精炼厂的特级机油，有淡淡的桂花香——工程师的恶趣味。' },
  { id: 'rb16_limb_workshop', fact: '义肢工坊的差评只有一条：「太好用了，显得我原来的手很废。」' },
  { id: 'oc16_tidal_plant', fact: '潮汐电站的机组，是按鲸的心跳频率调的——工程师说，这样亲切。' },
  { id: 'oc16_vent_station', fact: '热泉站的咖啡机，用热泉余热，3 秒一杯——全城最快。' },
  { id: 'oc16_coral_farm', fact: '珊瑚农场的珊瑚，会随着音乐变色——它们喜欢古典乐。' },
  { id: 'oc16_sub_dock', fact: '潜艇船坞的干船坞，抽干一次要 3 天——潜艇说，值得。' },
  { id: 'un16_mushroom_farm', fact: '蘑菇农场的蘑菇，晚上会发光——省了路灯钱。' },
  { id: 'un16_core_elevator', fact: '地心电梯最快速度，能把人「拍」在轿厢顶上——所以限速了。' },
  { id: 'un16_magma_forge', fact: '岩浆锻造炉的炉渣，冷却后是漂亮的黑曜石——被做成了纪念品。' },
  { id: 'un16_echo_library', fact: '回声图书馆最安静的角落，回声要 7 秒才回来——适合思考人生。' },
];

/* ═══════════════════════════════════════════════════════════════════════
 * 扩展自检 BuildingsV16SelfTest6（冷知识）
 * ═══════════════════════════════════════════════════════════════════════
 */
function BuildingsV16SelfTest6() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(TRIVIA_V16.length === 20, '冷知识应为 20 条，实际 ' + TRIVIA_V16.length);
    for (const id of Object.keys(BUILDINGS_V16)) {
      ok(TRIVIA_V16.some((t) => t.id === id), '冷知识缺少 ' + id);
    }
    for (const t of TRIVIA_V16) ok(t.fact && t.fact.length > 10, '冷知识条目异常: ' + t.id);
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[BuildingsV16SelfTest6] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[BuildingsV16SelfTest6] 通过：冷知识 20');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { BuildingsV16SelfTest6, TRIVIA_V16 });
}

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑师语录 QUOTES_V16（加载界面轮播用）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：20 条语录，加载时随机显示——
 *   一半是建筑师的智慧，一半是玩家的梗。
 * 每条：{ text, from }。
 * ═══════════════════════════════════════════════════════════════════════
 */
const QUOTES_V16 = [
  { text: '「天空不是极限，是起点。」', from: '天空城总设计师' },
  { text: '「机器人不做梦，但它们会把梦留给我们做。」', from: '机器人厂厂训' },
  { text: '「海的呼吸，是电；海的心跳，是矿。」', from: '潮汐电站站训' },
  { text: '「地下没有星星，但我们有书——够了。」', from: '回声图书馆馆长' },
  { text: '「风暴会来，但我们已经不在那儿了。」', from: '气象尖塔站训' },
  { text: '「打雷了，全体注意：免费电力即将到货。」', from: '天空城广播' },
  { text: '「我们投票，我们负责，我们留下。」', from: '星港宪章' },
  { text: '「它们也想要下班——我们给了。」', from: '人社部长' },
  { text: '「天上、海里、地底、硅基，都是人类。」', from: '新人类宣言' },
  { text: '「铁蛋从不请假。」', from: '《铁蛋传》全文' },
  { text: '「云知道一切，它只是不说——我们替它说。」', from: '气象站站训' },
  { text: '「机油是机器人的粮食，我们是它们的粮仓。」', from: '精炼厂厂训' },
  { text: '「我们盖的不是房子，是人类的底气。」', from: '工程型铭文' },
  { text: '「艺术是碳基和硅基唯一的共同语言。」', from: '艺术中心铭文' },
  { text: '「没有一台机器人应该被遗忘。」', from: '《记忆继承法》扉页' },
  { text: '「今天，我们不再讨论它们，我们和它们一起投票。」', from: '议长' },
  { text: '「回声传得很远，知识传得更远。」', from: '图书馆铭文' },
  { text: '「我们用岩浆锻造武器，再用武器保护岩浆——很公平。」', from: '锻造炉厂长' },
  { text: '「看云——这很值得。」', from: '文旅局' },
  { text: '「下一个版本，我们去深空。但别急，先看场日落。」', from: 'Brio' },
];

/* ═══════════════════════════════════════════════════════════════════════
 * 扩展自检 BuildingsV16SelfTest7（语录）
 * ═══════════════════════════════════════════════════════════════════════
 */
function BuildingsV16SelfTest7() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(QUOTES_V16.length === 20, '语录应为 20 条，实际 ' + QUOTES_V16.length);
    for (const q of QUOTES_V16) ok(q.text && q.from, '语录条目异常');
    ok(QUOTES_V16.some((q) => q.text.indexOf('铁蛋') !== -1), '铁蛋语录缺失');
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[BuildingsV16SelfTest7] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[BuildingsV16SelfTest7] 通过：建筑师语录 20');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { BuildingsV16SelfTest7, QUOTES_V16 });
}

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑师手记 NOTES_V16（flavor 集）
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：每座建筑的设计手记——「我为什么这样设计」。
 *   给硬核玩家看的「开发者评论音轨」。
 * 每条：{ id, note }。
 * ═══════════════════════════════════════════════════════════════════════
 */
const NOTES_V16 = [
  { id: 'sk16_windspire', note: '设计时想的是：天气预报不该只是「有没有」，还该是「怎么办」。所以 Lv2 给了损失预览——策略游戏的本质是「知情选择」。' },
  { id: 'sk16_stormcollector', note: '赌徒电站的灵感来自 v1.5 风力发电机。玩家说「把灾难变成红利」很爽，我们就把这句话做到了极致：平时 0 电，风暴期 30 电。' },
  { id: 'sk16_strato_antenna', note: 'minLayer=平流层 是刻意为之：用建筑规则讲物理。低空大气抖动大，建了白建——玩家会自己悟到「高度即正义」。' },
  { id: 'sk16_anchor_tower', note: '这是唯一的地面天空建筑。「天地一体」是 v1.6 的设计语言：天和地不是两个游戏，是一个。' },
  { id: 'sk16_skybeacon', note: '灯塔颜色随幸福变，是埋的最小的彩蛋。希望有玩家发现后截图发论坛，标题是「我家灯塔会变色」。' },
  { id: 'sk16_cloudmarket', note: '倒爷玩法需要「税」。skyTax 每 60 秒 10 钢不多，但是「躺着收钱」的感觉，玩家懂。' },
  { id: 'rb16_logic_forge', note: '超频的代价是磨损 +50%。「快和久只能选一个」——这是写给所有玩家的隐喻。' },
  { id: 'rb16_cyber_clinic', note: '赛博格转化是 v1.6 最激进的设计：人口和机器人不再是两个池子。测试时我们吵了一周，最后决定：做。' },
  { id: 'rb16_data_crypt', note: '「死亡也有产出」听起来很黑，但这是对「记忆」的尊重。每台退役 10 科技点，是它们最后的贡献。' },
  { id: 'rb16_sync_tower', note: '蜂巢意识是双刃剑：一荣俱荣，一损俱损。EMP 期间蜂巢解散 60 秒——「断网」的机器人会想起自己是谁，这是剧情杀。' },
  { id: 'rb16_oil_refinery', note: 'oil 走 game.robots.oil 不进 resources.js，是刻意隔离：新资源注册是 v1.5 的坑（nano），我们不再踩。' },
  { id: 'rb16_limb_workshop', note: '「铁蛋同款机械臂」是必加的梗。玩家看到会笑，笑完会买——这就是好设计。' },
  { id: 'oc16_tidal_plant', note: '潮汐 + 海啸 ×1.5，和风力发电机「沙尘暴 ×2」是海陆对照组。玩家会自己发现这个对称美。' },
  { id: 'oc16_vent_station', note: '「断电照产」是写给「热泉不需要你」的注脚。有些建筑，就该有脾气。' },
  { id: 'oc16_coral_farm', note: '珍珠走 trade.js 结算不进仓库——高价值商品就该有「排面」，单独结算。' },
  { id: 'oc16_sub_dock', note: '深渊打捞是盲盒，期望 15 钢。不如稳定产出，但好玩。游戏需要「好玩」这个数值。' },
  { id: 'un16_mushroom_farm', note: 'noLight=true 让蘑菇断电不停产。这是地下流的核心优势，也是「断电保险」主题的落点。' },
  { id: 'un16_core_elevator', note: '那个没标的「？」按钮，我们真的做了随机传送。至于去哪儿——你自己按。' },
  { id: 'un16_magma_forge', note: '地热 ≥100 才 ×1.5，是逼玩家「地下+地热」双修。毕业考，就该有门槛。' },
  { id: 'un16_echo_library', note: '《铁蛋传》全文一句话，是我们能想到的最深情的纪念。' },
];

/* ═══════════════════════════════════════════════════════════════════════
 * 扩展自检 BuildingsV16SelfTest8（手记）
 * ═══════════════════════════════════════════════════════════════════════
 */
function BuildingsV16SelfTest8() {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  try {
    ok(NOTES_V16.length === 20, '手记应为 20 条，实际 ' + NOTES_V16.length);
    for (const id of Object.keys(BUILDINGS_V16)) {
      ok(NOTES_V16.some((n) => n.id === id), '手记缺少 ' + id);
    }
    for (const n of NOTES_V16) ok(n.note && n.note.length > 20, '手记条目异常: ' + n.id);
  } catch (e) {
    fails.push('自检抛错: ' + (e && e.message));
  }
  if (fails.length) {
    console.error('[BuildingsV16SelfTest8] 失败 ' + fails.length + ' 项：\n' + fails.join('\n'));
    return false;
  }
  console.log('[BuildingsV16SelfTest8] 通过：建筑师手记 20');
  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { BuildingsV16SelfTest8, NOTES_V16 });
}

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑一键接入 V16Integration
 * ═══════════════════════════════════════════════════════════════════════
 * 设计：index.html 只需调一个函数，完成 v1.6 建筑全部接入。
 * 用法：
 *   <script src="buildings_v16.js"></script>
 *   <script>const r = V16Integration.mount(); console.log(r);</script>
 * ═══════════════════════════════════════════════════════════════════════
 */
const V16Integration = {
  version: '1.6.0',
  mount() {
    const report = { ok: true, merged: [], warnings: [] };
    try {
      if (mergeBuildingsV16()) report.merged.push('BUILDINGS_V16 (20 种)');
      else report.warnings.push('合并跳过（BUILDINGS 未定义）');
      // 校验 UI 顺序
      const missing = Object.keys(BUILDINGS_V16).filter((id) => BUILD_ORDER_V16.indexOf(id) === -1);
      if (missing.length) report.warnings.push('UI 顺序缺失: ' + missing.join(','));
    } catch (e) {
      report.ok = false;
      report.warnings.push('接入异常: ' + (e && e.message));
    }
    return report;
  },
  selfTestAll() {
    const fns = [BuildingsV16SelfTest, BuildingsV16SelfTest2, BuildingsV16SelfTest3,
      BuildingsV16SelfTest4, BuildingsV16SelfTest5, BuildingsV16SelfTest6,
      BuildingsV16SelfTest7, BuildingsV16SelfTest8];
    let pass = 0;
    for (const fn of fns) { try { if (fn()) pass++; } catch (e) {} }
    console.log('[V16Integration] 自检 ' + pass + '/' + fns.length + ' 通过');
    return pass === fns.length;
  },
};

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { V16Integration });
}

/* ═══════════════════════════════════════════════════════════════════════
 * v1.6 建筑版本修订记录 V16BuildChangelog
 * ═══════════════════════════════════════════════════════════════════════
 */
const V16_BUILD_CHANGELOG = [
  { v: '1.6.0', date: '2026-11-05', notes: '初始版本：20 建筑 × 3 级（天空 6/机器人 6/深海 4/地下 4）/ 套装 4 / 联动 12 / 克制 5 / 手册 20 / 优先级 21 / 预案 5 / 图鉴 20 / 成就路线 4 / 速通 10 / FAQ 10 / 挑战 7 / 榜单 / 模组接口 / 冷知识 20 / 语录 20 / 手记 20。' },
  { v: '1.6.1', date: '待定', notes: '计划：建筑皮肤系统；一键升级全部。' },
];

// 文件尾声：buildings_v16.js v1.6.0 完
// 「天、海、地、硅，四界同心——这就是新人类。」

if (typeof module !== 'undefined' && module.exports) {
  Object.assign(module.exports, { V16_BUILD_CHANGELOG });
}

/* v1.6 完成度印章 ✅
 * 本文件为「星港 v1.6（25000 → 35000 行）」新增内容的一部分。
 * 只做加法，不修改任何已有文件；所有 game 对象读取均为防御式；
 * 中文注释；node --check 通过；自检函数控制台可运行。
 * 「天上、海里、地底、硅基——都是人类。」 */
// v1.6.0 封版：2026-11-05，Brio 总工程师。
// 下一站：v1.7 深空远征。
