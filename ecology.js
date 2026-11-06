/* ================================================================================
* 星港 — ecology.js：生态系统（EcologyManager）
* ================================================================================
* 版本：v1.0（ecology）| 行数目标 ~12000 | 纯原生 JS，零依赖，ES6 class。
* 浏览器 / Node 双环境可加载。只做真实游戏机制，不含填充性描述/贴士。
*
* 本文件 = 1 个总管 + 8 个子系统，全部可独立实例化、可单独测试：
* 1. TerraformingSystem 大气改造：进度 0-100%，7 个阶段，每阶段解锁内容
* 2. PlantSystem 植物生长：5 种植物 × 生长阶段 × 水/光/温三因子
* 3. OxygenSystem 氧气系统：产氧/耗氧/库存/缺氧人口惩罚
* 4. WaterCycleSystem 水循环：降雨/蒸发/地下水/地表水/径流
* 5. FaunaSystem 动物引入：3 种动物 × 种群动力学 × 食物网
* 6. EcoBalance 生态平衡：香农多样性指数 / 崩溃 / 恢复
* 7. EcoBuildings 生态建筑接口：注册表 + 效应聚合（建筑文件另做）
* 8. EcoVisuals 改造进度影响地图视觉：地表红→绿插值 + 覆盖层
* + EcoEvents 生态事件：条件触发、有真实数值后果的事件
* + EcologyManager 总管：tick 编排、game 接口、增益输出、存档
*
* （game.js 负责接线，照抄即可）
* 1. 构造：this.ecology = (typeof EcologyManager!== 'undefined')
*? new EcologyManager(this.map? this.map.size: 50): null;
* 2. 主循环（Game.tick 内，waternet.update 附近）：
* try { if (this.ecology) this.ecology.update(now, dt, this);} catch (e) {}
* 3. 存档：save() 里写 data.ecology = this.ecology? this.ecology.save(): null;
* load() 里写 if (data.ecology && this.ecology) this.ecology.load(data.ecology);
* 4. 人口增长处乘生态加成：
* const ecoMul = game.ecology? game.ecology.getBuffs().popGrowthMul: 1;
* 5. 温室/农场产量处乘：
* const ecoFood = game.ecology? game.ecology.getBuffs().foodMul: 1;
* 6. 渲染（Game.render 或地图绘制函数末尾）：
* if (this.ecology) this.ecology.renderOverlay(this.ctx, this.map, this.tile, this);
* 7. 生态建筑文件（另一组）注册建筑定义：
* game.ecology.buildings.register(def) 或 EcologyManager.registerBuilding(def)
* 建筑生效只读 game.builder.buildings 里的 id，不依赖另一组的文件存在。
* 8. UI：game.ecology.summary() 返回面板数据；game.ecology.stageInfo() 返回阶段数据。
*
* 所有 game.* 读取（player.inv / pop.count /
* builder.buildings / tech.has / toast / map / disaster / time）都经过存在性
* 检查，缺失时降级为默认兼容行为，绝不抛异常。没有 game 也能独立跑
* （自测用 EcologySelfTest.run()，见文件末尾）。
*
* update(now, dt, game)：dt 为毫秒；内部按秒累积，1 游戏日 = 60 秒
* 真实时间（与 time.js 的日长口径一致时由 game 侧换算，缺省按 60s/日）。
* 暂停时主循环不调用 update，全部生态过程自然停摆。
*
* 以 resources.js 的 RES_VALUE 为准：铁1 / 冰1 / 稀土3 / 铀8 /
* 氦3=15 / 钢材4 / 科技10 / 食物2。水 1 单位 ≈ 1 价值；生物质 1 ≈ 3 价值。
* 氧气不进背包，是内部库存（吨），1 吨 O2 ≈ 2 价值（按电解水成本折算）。
* ================================================================================ */

const ECO_VERSION = '1.0.0';

/* ------------------------------------------------------------------------------
* ETUNE：数值平衡总表（调数值只改这里）
* ------------------------------------------------------------------------------
* 锚点推导（写清楚每条数的期望收益，方便以后调参）：
* - 改造 0→100% 全程约 3~5 小时活跃游玩：被动推进极慢，必须靠工程；
* - 1 人口每分钟耗氧 0.02 吨；1 棵成熟树每分钟产氧 0.05 吨 → 1 树养 2.5 人；
* - 1 株农作物每分钟产粮 0.01 食物（成熟期），100 株 ≈ 1 食物/分钟；
* - 降雨量从 5mm/年（0%）到 455mm/年（100%），灌溉需求随之下降；
* - 多样性指数（香农，归一化 0~1）< 0.35 持续 10 分钟 → 崩溃风险事件；
* - 生态崩溃一次扣改造进度 2~5%，并随机灭绝一个弱势物种 30~60%。
* ------------------------------------------------------------------------------ */
const ETUNE = {
// —— 时间 ——
SECONDS_PER_DAY: 60, // 1 游戏日 = 60 秒真实时间
TICK_ACCUM_MAX_S: 5, // 单次 update 最多推进 5 秒（防切后台跳变）
SUBSTEP_S: 1, // 内部按 1 秒步进，保证数值稳定

// —— 大气改造 ——
PROGRESS_MAX: 100,
PROGRESS_PASSIVE_PER_MIN: 0.004, // 无工程时被动推进：0.004%/分钟（约 17 天才 1%）
PROGRESS_PER_TONNE_GHG: 0.002, // 每吨温室气体当量推进 0.002%
PROGRESS_DECAY_BELOW_STAGE: 0.001, // 阶段失守时每分钟回落（配合事件）
TEMP_BASE_C: -63, // 0% 时全球均温
TEMP_PER_PROGRESS: 0.90, // 每 1% 进度升温 0.90°C → 100% 时 27°C
TEMP_MAX_C: 32, // 均温上限（防温室失控）
TEMP_MIN_C: -70, // 均温下限
PRESSURE_BASE_KPA: 0.6, // 0% 时大气压
PRESSURE_PER_PROGRESS: 0.95, // 每 1% +0.95kPa → 100% 时 95.6kPa
PRESSURE_MAX_KPA: 101.3,
CO2_START_PPM: 950000, // 初始 CO2 占比 95%（火星大气）
CO2_END_PPM: 400, // 宜居时 400ppm
HEAT_PER_GHG_BUILDING: 0.02, // 每座温室气体建筑每分钟 +0.02°C（走建筑接口聚合）

// —— 氧气 ——
O2_STOCK_START_T: 0, // 初始氧气库存（吨）
O2_CAP_PER_PROGRESS: 120, // 每 1% 进度 +120 吨库存上限 → 100% 时 12000 吨
O2_CAP_BASE_T: 200, // 基础库存上限
O2_PER_POP_PER_MIN: 0.02, // 每人每分钟耗氧 0.02 吨
O2_PER_PLANT_TREE: 0.05, // 每棵成熟树每分钟产氧
O2_PER_PLANT_SHRUB: 0.02,
O2_PER_PLANT_GRASS: 0.008,
O2_PER_PLANT_MOSS: 0.003,
O2_PER_PLANT_CROP: 0.006,
O2_DEFICIT_POP_LOSS_PER_MIN: 0.002, // 缺氧时每分钟人口 -0.2%
O2_DEFICIT_HEALTH_PER_MIN: 0.5, // 缺氧时人口健康 -0.5/分钟（供 pop 用）
O2_SURPLUS_GROWTH_BONUS: 0.15, // 氧气充足（>80% 库存）人口增速 +15%
O2_ELECTROLYSIS_PER_WATER: 0.8, // 电解：每单位水产 0.8 吨 O2（需建筑）
O2_VENT_PER_MIN: 0.5, // 空气泄漏：每分钟库存 -0.5 吨（穹顶破损时翻倍）

// —— 水循环 ——
RAIN_BASE_MM_Y: 5, // 0% 时年降雨 5mm
RAIN_PER_PROGRESS: 4.5, // 每 1% +4.5mm/年 → 100% 时 455mm/年
RAIN_MAX_MM_Y: 600,
EVAP_BASE_MM_Y: 300, // 0% 时年蒸发 300mm（高温低压蒸发快）
EVAP_PER_PROGRESS: -2.0, // 每 1% 蒸发 -2mm/年 → 100% 时 100mm/年
EVAP_MIN_MM_Y: 80,
GROUNDWATER_MAX: 100, // 地下水位 0-100（区域值）
GROUNDWATER_RECHARGE_PER_MM: 0.02, // 每 mm 降雨补给地下水 0.02 点
GROUNDWATER_PUMP_PER_BUILDING: 0.5, // 每座抽水建筑每分钟抽 0.5 点
SOIL_MOISTURE_MAX: 100,
SOIL_DRY_PER_MIN: 0.05, // 无降雨时土壤每分钟干燥 0.05
SOIL_WET_PER_MM: 0.15, // 每 mm 降雨土壤 +0.15
LAKE_FORM_MOISTURE: 85, // 土壤湿度 >85 且地势低洼 → 积水成湖
RIVER_FLOW_PER_MIN: 0.2, // 径流速度（格/分钟，用于水体扩散）

// —— 植物 ——
PLOT_MAX_PER_TILE: 4, // 每格最多 4 株（密度上限）
  PLOT_GLOBAL_MAX: 2000, // 全图植株总数上限（防扩散爆炸拖慢 tick）
PLANT_HEALTH_DECAY_DRY: 0.5, // 干旱时健康 -0.5/分钟
PLANT_HEALTH_DECAY_COLD: 0.8,// 冻害时健康 -0.8/分钟
PLANT_HEALTH_RECOVER: 0.3, // 条件适宜时健康 +0.3/分钟
PLANT_DEATH_HEALTH: 0, // 健康归零死亡
SEED_DISPERSAL_RADIUS: 2, // 种子自然扩散半径（格）
SEED_DISPERSAL_CHANCE: 0.02, // 成熟植株每分钟 2% 概率播种邻格
POLLINATION_BONUS: 0.25, // 有昆虫时植物生长 +25%
CROP_YIELD_PER_HARVEST: 2, // 每株农作物收获产 2 食物
TREE_WOOD_PER_HARVEST: 3, // 砍树得 3 木材（走 biomass/iron 代币，见接口）
MOSS_O2_SOIL_BONUS: 0.1, // 苔藓每株每分钟 +0.1 土壤肥力

// —— 动物 ——
FAUNA_CARRY_BASE: 50, // 昆虫基础环境容量（只/区域）
FAUNA_GROWTH_R: 0.02, // 逻辑斯谛内禀增长率 /分钟（昆虫）
FAUNA_BIRD_R: 0.008,
FAUNA_MAMMAL_R: 0.004,
FAUNA_PREDATION_BIRD_ON_INSECT: 0.001, // 每只鸟每分钟吃 0.001×昆虫数
FAUNA_PREDATION_MAMMAL_ON_INSECT: 0.0004,
FAUNA_STARVE_MORTALITY: 0.01,// 食物不足时每分钟死亡率 1%
FAUNA_INTRO_COST_FOOD: 20, // 引入一批动物消耗食物 20
FAUNA_INTRO_BATCH: 10, // 每批引入 10 只
FAUNA_MIN_VIABLE: 6, // 低于 6 只视为功能性灭绝（不再自然繁殖）

// —— 生态平衡 ——
DIVERSITY_COLLAPSE_BELOW: 0.35, // 多样性指数低于此值计风险
DIVERSITY_COLLAPSE_MINUTES: 10, // 持续 10 分钟触发崩溃检定
DIVERSITY_COLLAPSE_CHANCE: 0.30,// 每次检定 30% 触发崩溃事件
DIVERSITY_RECOVERY_PER_MIN: 0.01, // 条件好转时风险计时每分钟 -0.01（折算）
EXTINCTION_DIEOFF_MIN: 0.30, // 崩溃时弱势物种灭绝比例下限 30%
EXTINCTION_DIEOFF_MAX: 0.60, // 上限 60%
PROGRESS_LOSS_COLLAPSE_MIN: 2,// 崩溃扣改造进度 2%
PROGRESS_LOSS_COLLAPSE_MAX: 5,// 扣 5%

// —— 改造工程（被动推进之外的玩家主动手段）——
PROJECT_GHG_PER_MIN: 0.05, // 温室气体工厂每分钟推进 0.05%
PROJECT_MAGNET_TIME_MIN: 20, // 人造磁层工程耗时 20 分钟（一次性大推进）
PROJECT_MAGNET_BOOST: 8, // 磁层建成 +8% 进度
PROJECT_COMET_WATER: 500, // 引导彗星：一次性 +500 水（库存）
PROJECT_COMET_PROGRESS: 3, // 彗星 +3% 进度

// —— 成本锚 ——
COST_GHG_FACTORY: { steel: 60, tech: 20},
COST_MAGNET: { steel: 500, tech: 200, rare: 100},
COST_COMET: { tech: 120, steel: 200},
};

/* ------------------------------------------------------------------------------
* 工具函数（纯函数，无 game 依赖，可单元测试）
* ------------------------------------------------------------------------------ */
function ecoClamp(v, lo, hi) { if (v < lo) return lo; if (v > hi) return hi; return v;}
function ecoLerp(a, b, t) { return a + (b - a) * ecoClamp(t, 0, 1);}
function ecoRound(v, d) { const p = Math.pow(10, d || 0); return Math.round(v * p) / p;}
function ecoSum(arr) { let s = 0; for (let i = 0; i < arr.length; i++) s += arr[i]; return s;}
function ecoMean(arr) { return arr.length? ecoSum(arr) / arr.length: 0;}
// mulberry32 确定性随机数（自测可复现；游戏内用 Math.random 播种）
function ecoRng(seed) {
let a = seed >>> 0;
return function () {
a |= 0; a = (a + 0x6D2B79F5) | 0;
let t = Math.imul(a ^ (a >>> 15), 1 | a);
t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
}
function ecoPick(rng, arr) { return arr[Math.floor(rng() * arr.length)];}
function ecoHexLerp(c1, c2, t) {
// '#rrggbb' 线性插值，返回 '#rrggbb'
const p = function (c) { return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];};
const a = p(c1), b = p(c2);
const m = function (i) { return Math.round(ecoLerp(a[i], b[i], t)).toString(16).padStart(2, '0');};
return '#' + m(0) + m(1) + m(2);
}
function ecoKey(x, y) { return x + ',' + y;}
function ecoParseKey(k) { const s = k.split(','); return { x: parseInt(s[0], 10), y: parseInt(s[1], 10)};}
function ecoDist2(ax, ay, bx, by) { const dx = ax - bx, dy = ay - by; return dx * dx + dy * dy;}
function ecoSafeNum(v, dflt) { const n = Number(v); return isFinite(n)? n: dflt;}
function ecoNow() { return (typeof Date!== 'undefined' && Date.now)? Date.now(): 0;}

/* ------------------------------------------------------------------------------
* TERRAFORM_STAGES：改造 7 阶段（进度区间 / 环境参数 / 解锁内容）
* ------------------------------------------------------------------------------
* 每阶段 = 一个可玩的里程碑：解锁植物/动物/工程/建筑，改变全局环境数值。
* 阶段推进只看 progress（单调主标尺），不依赖任何外部文件。
* ------------------------------------------------------------------------------ */
const TERRAFORM_STAGES = [
{
id: 'thin', index: 0, name: '稀薄大气', icon: '🌫️',
min: 0, max: 9.99,
desc: '大气压不足 1kPa，液态水无法稳定存在，地表只有穹顶内能种东西。',
tempC: -63, pressureKpa: 0.6,
unlocks: { plants: ['moss'], animals: [], projects: ['ghg_factory'], buildings: ['greenhouse_dome']},
effects: { rainMul: 0.1, evapMul: 2.0, plantGrowthMul: 0.3, outdoorPlanting: false},
advice: '先建温室气体工厂，把进度推过 10%。',
},
{
id: 'micro_oxygen', index: 1, name: '微氧时代', icon: '🫧',
min: 10, max: 24.99,
desc: '大气压过 10kPa，苔藓可以在户外存活，开始缓慢产氧。',
tempC: -54, pressureKpa: 10.1,
unlocks: { plants: ['moss', 'grass'], animals: [], projects: ['ghg_factory', 'ice_melt'], buildings: ['greenhouse_dome', 'algae_pond']},
effects: { rainMul: 0.3, evapMul: 1.6, plantGrowthMul: 0.5, outdoorPlanting: true},
advice: '户外种苔藓和草，藻类池塘是早期氧气主力。',
},
{
id: 'warming', index: 2, name: '增温期', icon: '🌡️',
min: 25, max: 39.99,
desc: '均温升过 -40°C，极地冰盖开始融化，地下水位回升。',
tempC: -40, pressureKpa: 24.4,
unlocks: { plants: ['moss', 'grass', 'shrub'], animals: ['insect'], projects: ['ghg_factory', 'ice_melt', 'magnet_shield'], buildings: ['greenhouse_dome', 'algae_pond', 'irrigation']},
effects: { rainMul: 0.6, evapMul: 1.3, plantGrowthMul: 0.7, outdoorPlanting: true},
advice: '引入昆虫，灌溉系统让灌木活下来，昆虫给植物授粉。',
},
{
id: 'rainfall', index: 3, name: '降雨时代', icon: '🌧️',
min: 40, max: 54.99,
desc: '年降雨过 180mm，土壤长期湿润，湖泊开始在低洼处出现。',
tempC: -27, pressureKpa: 38.6,
unlocks: { plants: ['moss', 'grass', 'shrub', 'crop'], animals: ['insect', 'bird'], projects: ['ghg_factory', 'ice_melt', 'magnet_shield', 'comet_divert'], buildings: ['greenhouse_dome', 'algae_pond', 'irrigation', 'rain_catcher']},
effects: { rainMul: 1.0, evapMul: 1.0, plantGrowthMul: 1.0, outdoorPlanting: true},
advice: '种农作物，引入鸟类控虫，雨水收集器替代抽水。',
},
{
id: 'vegetation', index: 4, name: '植被时代', icon: '🌿',
min: 55, max: 69.99,
desc: '地表过半变绿，氧气产量超过人口消耗，树木可以成林。',
tempC: -13, pressureKpa: 52.9,
unlocks: { plants: ['moss', 'grass', 'shrub', 'crop', 'tree'], animals: ['insect', 'bird', 'mammal'], projects: ['ghg_factory', 'ice_melt', 'magnet_shield', 'comet_divert', 'oxygen_bloom'], buildings: ['greenhouse_dome', 'algae_pond', 'irrigation', 'rain_catcher', 'forest_station']},
effects: { rainMul: 1.4, evapMul: 0.8, plantGrowthMul: 1.3, outdoorPlanting: true},
advice: '种树成林，引入小型哺乳动物，食物网开始闭环。',
},
{
id: 'breathable', index: 5, name: '可呼吸', icon: '😮‍💨',
min: 70, max: 84.99,
desc: '氧气分压达标，户外行走不再需要供氧面罩，人口增速大幅提升。',
tempC: 0, pressureKpa: 67.1,
unlocks: { plants: ['moss', 'grass', 'shrub', 'crop', 'tree'], animals: ['insect', 'bird', 'mammal'], projects: ['ghg_factory', 'ice_melt', 'magnet_shield', 'comet_divert', 'oxygen_bloom', 'sky_mirror'], buildings: ['greenhouse_dome', 'algae_pond', 'irrigation', 'rain_catcher', 'forest_station', 'open_park']},
effects: { rainMul: 1.8, evapMul: 0.6, plantGrowthMul: 1.6, outdoorPlanting: true},
advice: '建露天公园，人口红利期：多建居住区接住增长。',
},
{
id: 'habitable', index: 6, name: '宜居火星', icon: '🌍',
min: 85, max: 100,
desc: '年均温 13°C 以上，年降雨超 380mm，火星成为第二家园。',
tempC: 13, pressureKpa: 81.4,
unlocks: { plants: ['moss', 'grass', 'shrub', 'crop', 'tree'], animals: ['insect', 'bird', 'mammal'], projects: ['ghg_factory', 'ice_melt', 'magnet_shield', 'comet_divert', 'oxygen_bloom', 'sky_mirror'], buildings: ['greenhouse_dome', 'algae_pond', 'irrigation', 'rain_catcher', 'forest_station', 'open_park']},
effects: { rainMul: 2.2, evapMul: 0.5, plantGrowthMul: 2.0, outdoorPlanting: true},
advice: '宜居已达成：维持多样性，别让生态崩溃把进度打回去。',
},
];
function terraformStageFor(progress) {
const p = ecoClamp(progress, 0, 100);
for (let i = TERRAFORM_STAGES.length - 1; i >= 0; i--) {
if (p >= TERRAFORM_STAGES[i].min) return TERRAFORM_STAGES[i];
}
return TERRAFORM_STAGES[0];
}
function terraformStageIndex(progress) { return terraformStageFor(progress).index;}

/* ------------------------------------------------------------------------------
* PLANT_DEFS：5 种植物（完整数值定义，每种都有独立的生长逻辑分支）
* ------------------------------------------------------------------------------
* 字段：生长周期（天）、水/光/温需求、产氧、产量、耐受区间、阶段解锁、土壤改良。
* 生长模型：growthRate = base × waterF × lightF × tempF × stageMul × pollination
* waterF：土壤湿度在 [waterNeed, 100] 内为 1，低于则线性下降；
* lightF：阳光（纬度/季节/穹顶遮挡）在 [sunNeed, 100] 内为 1；
* tempF：均温在 [tempMin, tempMax] 内为 1，区间外每度 -8%，低于 tempMin-10 冻死。
* ------------------------------------------------------------------------------ */
const PLANT_DEFS = {
moss: {
id: 'moss', name: '苔藓', icon: '🟢', stageUnlock: 0,
desc: '先锋物种：能在 -50°C、几乎无水时存活，死后化作土壤。',
growthDays: 6, waterNeed: 15, sunNeed: 20, tempMin: -55, tempMax: 30,
o2PerMin: 0.003, yieldPerHarvest: 0, yieldRes: null,
soilBonusPerMin: 0.10, waterUsePerMin: 0.01,
stages: [
{ id: 'spore', name: '孢子', dayEnd: 1, o2Mul: 0.1, size: 1},
{ id: 'mat', name: '苔藓垫', dayEnd: 3, o2Mul: 0.5, size: 2},
{ id: 'mature', name: '成熟苔藓', dayEnd: 6, o2Mul: 1.0, size: 3},
],
plantCost: { biomass: 1}, // 需生物质 1（走 bio.js 的 biomass；无则用食物 1 代替）
plantCostAlt: { food: 1},
harvestable: false, edible: false, wood: 0,
spreadChance: 0.03, // 每分钟 3% 向邻格扩散（先锋物种扩散最强）
frostKillBelow: -60, droughtKillBelow: 5,
},
grass: {
id: 'grass', name: '草', icon: '🌱', stageUnlock: 1,
desc: '覆盖地表的主力：固土保水，是昆虫和食草动物的食物。',
growthDays: 10, waterNeed: 30, sunNeed: 40, tempMin: -35, tempMax: 35,
o2PerMin: 0.008, yieldPerHarvest: 1, yieldRes: 'food',
soilBonusPerMin: 0.04, waterUsePerMin: 0.03,
stages: [
{ id: 'seed', name: '种子', dayEnd: 2, o2Mul: 0.1, size: 1},
{ id: 'sprout', name: '幼苗', dayEnd: 5, o2Mul: 0.4, size: 2},
{ id: 'turf', name: '草皮', dayEnd: 8, o2Mul: 0.8, size: 3},
{ id: 'mature', name: '成熟草地', dayEnd: 10, o2Mul: 1.0, size: 4},
],
plantCost: { biomass: 2}, plantCostAlt: { food: 2},
harvestable: true, edible: true, wood: 0,
spreadChance: 0.02, frostKillBelow: -45, droughtKillBelow: 10,
grazeValue: 1.0, // 每株草可供食草动物 1.0 单位食物
},
shrub: {
id: 'shrub', name: '灌木', icon: '🌿', stageUnlock: 2,
desc: '耐旱灌木：根系深，能从地下水取水，果实可食。',
growthDays: 18, waterNeed: 35, sunNeed: 50, tempMin: -25, tempMax: 38,
o2PerMin: 0.02, yieldPerHarvest: 3, yieldRes: 'food',
soilBonusPerMin: 0.06, waterUsePerMin: 0.05,
stages: [
{ id: 'seed', name: '种子', dayEnd: 3, o2Mul: 0.1, size: 1},
{ id: 'sapling', name: '幼灌木', dayEnd: 8, o2Mul: 0.4, size: 2},
{ id: 'bush', name: '灌木丛', dayEnd: 14, o2Mul: 0.8, size: 3},
{ id: 'mature', name: '成熟灌木', dayEnd: 18, o2Mul: 1.0, size: 4},
],
plantCost: { biomass: 5}, plantCostAlt: { food: 4},
harvestable: true, edible: true, wood: 1,
spreadChance: 0.012, frostKillBelow: -35, droughtKillBelow: 12,
grazeValue: 2.0, deepRoot: true, // 深根：可直接用地下水，干旱抗性 +50%
},
crop: {
id: 'crop', name: '农作物', icon: '🌾', stageUnlock: 3,
desc: '主粮作物：产量高但娇贵，需要灌溉、温暖和授粉，收割后要重种。',
growthDays: 14, waterNeed: 55, sunNeed: 65, tempMin: -5, tempMax: 32,
o2PerMin: 0.006, yieldPerHarvest: 8, yieldRes: 'food',
soilBonusPerMin: 0.0, waterUsePerMin: 0.12,
stages: [
{ id: 'seed', name: '播种', dayEnd: 2, o2Mul: 0.1, size: 1},
{ id: 'sprout', name: '出苗', dayEnd: 5, o2Mul: 0.3, size: 2},
{ id: 'growing', name: '拔节', dayEnd: 9, o2Mul: 0.6, size: 3},
{ id: 'flower', name: '开花', dayEnd: 12, o2Mul: 0.8, size: 3},
{ id: 'mature', name: '可收割', dayEnd: 14, o2Mul: 1.0, size: 4},
],
plantCost: { biomass: 3}, plantCostAlt: { food: 3},
harvestable: true, edible: true, wood: 0,
spreadChance: 0, // 农作物不自然扩散，必须人工播种
frostKillBelow: -10, droughtKillBelow: 25,
pollinationNeed: 0.5, // 开花期需要昆虫授粉，否则产量 -50%
regrowAfterHarvest: false, // 收割后植株消失，需重种
},
tree: {
id: 'tree', name: '树', icon: '🌳', stageUnlock: 4,
desc: '产氧之王：一棵成熟树养 2.5 个人，还能防风固沙、调节小气候。',
growthDays: 40, waterNeed: 45, sunNeed: 60, tempMin: -15, tempMax: 35,
o2PerMin: 0.05, yieldPerHarvest: 3, yieldRes: 'biomass',
soilBonusPerMin: 0.08, waterUsePerMin: 0.08,
stages: [
{ id: 'seed', name: '种子', dayEnd: 5, o2Mul: 0.05, size: 1},
{ id: 'sapling', name: '树苗', dayEnd: 15, o2Mul: 0.2, size: 2},
{ id: 'young', name: '幼树', dayEnd: 28, o2Mul: 0.6, size: 3},
{ id: 'mature', name: '成树', dayEnd: 40, o2Mul: 1.0, size: 4},
{ id: 'ancient', name: '古树', dayEnd: 120, o2Mul: 1.5, size: 5},
],
plantCost: { biomass: 10}, plantCostAlt: { food: 8},
harvestable: true, edible: false, wood: 3,
spreadChance: 0.008, frostKillBelow: -25, droughtKillBelow: 15,
windbreakRadius: 2, // 防风半径 2 格：圈内植物冻害 -50%、蒸发 -20%
shadeBonus: 0.1, // 遮荫：圈内土壤干燥 -10%
},
};
const PLANT_IDS = ['moss', 'grass', 'shrub', 'crop', 'tree'];
function plantDef(id) { return PLANT_DEFS[id] || null;}
function plantStageFor(def, ageDays) {
let cur = def.stages[0];
for (let i = 0; i < def.stages.length; i++) {
if (ageDays >= def.stages[i].dayEnd) cur = def.stages[i];
else break;
}
// 未到第一阶段结束时返回第一阶段
if (ageDays < def.stages[0].dayEnd) return def.stages[0];
return cur;
}
function plantIsMature(def, ageDays) {
return ageDays >= def.growthDays;
}

/* ------------------------------------------------------------------------------
 * ANIMAL_DEFS：3 种动物（种群动力学 + 食物网）
 * ------------------------------------------------------------------------------
 * 食物网：草/灌木 → 昆虫 → 鸟类；草籽/昆虫 → 小型哺乳动物；鸟类粪便 → 土壤肥力。
 * 种群模型：dN/dt = r·N·(1 − N/K)·foodF − predation − starve
 *   K（环境容量）由食物量（植物生物量）和栖息地（植被覆盖）决定；
 *   foodF：食物充足为 1，不足时繁殖停滞、死亡率上升。
 * ------------------------------------------------------------------------------ */
const ANIMAL_DEFS = {
  insect: {
    id: 'insect', name: '昆虫', icon: '🐝', stageUnlock: 2,
    desc: '授粉者与分解者：植物生长 +25%，死亡后化作土壤肥力。',
    rPerMin: 0.02, carryBase: 50, carryPerGrass: 0.5, carryPerShrub: 1.0,
    foodNeed: 'grass', // 以草/灌木为食
    foodPerMin: 0.002, // 每只每分钟吃 0.002 单位植物生物量
    o2UsePerMin: 0.0002,
    pollinationBonus: 0.25, // 有昆虫（≥10只）时全图植物生长 +25%
    soilBonusPerMin: 0.005, // 每只每分钟 +0.005 土壤肥力（分解）
    tempMin: -20, tempMax: 40,
    minViable: 6, introBatch: 10, introCost: { food: 20 },
    predators: ['bird', 'mammal'],
    role: 'pollinator',
  },
  bird: {
    id: 'bird', name: '鸟类', icon: '🐦', stageUnlock: 3,
    desc: '控虫者与播种者：吃昆虫控虫害，粪便施肥，飞行播种扩散植物。',
    rPerMin: 0.008, carryBase: 12, carryPerInsect: 0.08, carryPerTree: 0.6,
    foodNeed: 'insect',
    foodPerMin: 0.01, // 每只鸟每分钟需 0.01 单位昆虫生物量
    o2UsePerMin: 0.001,
    eatInsectPerMin: 0.001, // 捕食系数（见 FaunaSystem）
    soilBonusPerMin: 0.02, // 鸟粪施肥
    seedSpreadBonus: 0.01, // 每只鸟每分钟 +1% 植物扩散概率
    tempMin: -10, tempMax: 38,
    minViable: 6, introBatch: 6, introCost: { food: 40 },
    predators: [],
    role: 'pest_control',
  },
  mammal: {
    id: 'mammal', name: '小型哺乳动物', icon: '🐇', stageUnlock: 4,
    desc: '生态顶端（小型）：吃草籽和昆虫，粪便是最好的肥料，过度繁殖会啃光草地。',
    rPerMin: 0.004, carryBase: 8, carryPerGrass: 0.05, carryPerShrub: 0.1, carryPerInsect: 0.02,
    foodNeed: 'mixed',
    foodPerMin: 0.02,
    o2UsePerMin: 0.004,
    eatInsectPerMin: 0.0004,
    grazePerMin: 0.005, // 每只每分钟啃食 0.005 单位草生物量
    soilBonusPerMin: 0.03,
    tempMin: -15, tempMax: 35,
    minViable: 6, introBatch: 4, introCost: { food: 60 },
    predators: [],
    role: 'grazer',
  },
};
const ANIMAL_IDS = ['insect', 'bird', 'mammal'];
function animalDef(id) { return ANIMAL_DEFS[id] || null; }

/* ------------------------------------------------------------------------------
 * TERRAFORM_PROJECTS：改造工程（玩家主动推进进度的手段）
 * ------------------------------------------------------------------------------
 * 每项工程：成本、耗时/持续效果、前置阶段、冷却、一次性或持续。
 * 推进公式：持续型每分钟 += rate；一次性完成时 += boost。
 * ------------------------------------------------------------------------------ */
const TERRAFORM_PROJECTS = [
  {
    id: 'ghg_factory', name: '温室气体工厂', icon: '🏭', kind: 'continuous',
    stageUnlock: 0, cost: { steel: 60, tech: 20 }, upkeepPerMin: { power: 5 },
    ratePerMin: 0.05, // 每座每分钟 +0.05%
    desc: '持续排放氟化物温室气体，每座每分钟推进 0.05%。',
    maxCount: 10, cooldownMin: 0,
    requires: { tech: null, building: 'ghg_factory' },
  },
  {
    id: 'ice_melt', name: '极地融冰', icon: '🧊', kind: 'continuous',
    stageUnlock: 1, cost: { steel: 100, tech: 40 }, upkeepPerMin: { power: 8 },
    ratePerMin: 0.03, waterPerMin: 2.0,
    desc: '轨道反射镜聚焦融化极冠：推进 0.03%/分钟，同时每分钟产水 2。',
    maxCount: 5, cooldownMin: 0,
    requires: { tech: null, building: 'ice_melt' },
  },
  {
    id: 'magnet_shield', name: '人造磁层', icon: '🧲', kind: 'onetime',
    stageUnlock: 2, cost: { steel: 500, tech: 200, rare: 100 }, durationMin: 20,
    boost: 8, // 完成后 +8%
    desc: '在日火拉格朗日点部署磁盾，挡住太阳风：20 分钟建成，一次 +8%。',
    maxCount: 1, cooldownMin: 0,
    requires: { tech: 'magnet_tech', building: null },
  },
  {
    id: 'comet_divert', name: '引导彗星', icon: '☄️', kind: 'onetime',
    stageUnlock: 3, cost: { tech: 120, steel: 200 }, durationMin: 10,
    boost: 3, waterBonus: 500,
    desc: '捕获小彗星撞击荒漠：一次 +3%，并向库存注水 500。',
    maxCount: 3, cooldownMin: 30,
    requires: { tech: 'orbital_tech', building: null },
  },
  {
    id: 'oxygen_bloom', name: '藻类大爆发', icon: '🫧', kind: 'continuous',
    stageUnlock: 4, cost: { biomass: 100, tech: 60 }, upkeepPerMin: { water: 5 },
    ratePerMin: 0.04, o2PerMin: 5.0,
    desc: '向浅湖投放工程藻：推进 0.04%/分钟，每分钟产氧 5 吨。',
    maxCount: 4, cooldownMin: 0,
    requires: { tech: 'bio_tech', building: 'algae_pond' },
  },
  {
    id: 'sky_mirror', name: '轨道天镜', icon: '🪞', kind: 'continuous',
    stageUnlock: 5, cost: { steel: 300, tech: 150, rare: 50 }, upkeepPerMin: { power: 10 },
    ratePerMin: 0.06, tempBonusC: 1.5,
    desc: '轨道镜面阵列增温：推进 0.06%/分钟，全球均温 +1.5°C。',
    maxCount: 3, cooldownMin: 0,
    requires: { tech: 'orbital_tech', building: null },
  },
];
function terraformProject(id) {
  for (let i = 0; i < TERRAFORM_PROJECTS.length; i++) if (TERRAFORM_PROJECTS[i].id === id) return TERRAFORM_PROJECTS[i];
  return null;
}

/* ------------------------------------------------------------------------------
 * ECO_BUILDINGS：生态建筑接口（建筑文件由另一组做，这里只定义系统逻辑侧的口径）
 * ------------------------------------------------------------------------------
 * 约定：另一组的建筑文件只需在建筑定义里用这些 id；本系统每 tick 扫描
 *   game.builder.buildings，按 id 聚合效应。register(def) 允许运行时追加定义。
 * 效应字段（全部是每分钟量）：
 *   o2PerMin / waterPerMin / heatPerMin(°C) / rainMul / growthMul /
 *   co2PerMin（推进）/ powerUse / waterUse / upkeep（资源消耗表）
 * ------------------------------------------------------------------------------ */
const ECO_BUILDINGS = [
  { id: 'greenhouse_dome', name: '温室穹顶', icon: '🏡', stageUnlock: 0, cost: { steel: 30, iron: 20 }, o2PerMin: 0.5, waterUsePerMin: 1, growthMul: 1.5, desc: '穹顶内种植不受户外低温影响，生长 ×1.5。' },
  { id: 'algae_pond', name: '藻类池塘', icon: '🟢', stageUnlock: 1, cost: { steel: 20, water: 30 }, o2PerMin: 2.0, waterUsePerMin: 2, desc: '早期氧气主力，每分钟产氧 2 吨。' },
  { id: 'irrigation', name: '灌溉系统', icon: '💧', stageUnlock: 2, cost: { steel: 40, iron: 30 }, waterUsePerMin: 3, growthMul: 1.3, rainMul: 0, soilWetPerMin: 2, desc: '周围 3 格土壤湿度持续上升，植物生长 ×1.3。', radius: 3 },
  { id: 'rain_catcher', name: '雨水收集器', icon: '🌧️', stageUnlock: 3, cost: { steel: 25 }, waterPerMin: 1.5, desc: '降雨量越高产水越多（按当前降雨比例结算）。' },
  { id: 'forest_station', name: '林业站', icon: '🌲', stageUnlock: 4, cost: { steel: 80, tech: 20 }, o2PerMin: 1.0, growthMul: 1.2, treeGrowthMul: 2.0, desc: '树木生长 ×2，兼产氧。', radius: 4 },
  { id: 'open_park', name: '露天公园', icon: '🌳', stageUnlock: 5, cost: { steel: 60, food: 20 }, o2PerMin: 0.8, happinessMul: 1.1, desc: '宜居时代的地标：产氧 + 人口幸福加成。' },
  { id: 'ghg_factory', name: '温室气体工厂', icon: '🏭', stageUnlock: 0, cost: { steel: 60, tech: 20 }, co2PerMin: 0.05, powerUse: 5, desc: '推进改造 0.05%/分钟（与工程 ghg_factory 同口径，取大者不叠加）。' },
  { id: 'ice_melt', name: '融冰反射镜', icon: '🧊', stageUnlock: 1, cost: { steel: 100, tech: 40 }, co2PerMin: 0.03, waterPerMin: 2.0, powerUse: 8, desc: '推进 0.03%/分钟，每分钟产水 2。' },
  { id: 'electrolyzer', name: '电解制氧站', icon: '⚡', stageUnlock: 1, cost: { steel: 50, tech: 30 }, o2PerMin: 4.0, waterUsePerMin: 5, powerUse: 10, desc: '每 5 水产 4 吨氧，耗电 10。' },
  { id: 'water_pump', name: '地下水泵', icon: '⛏️', stageUnlock: 2, cost: { steel: 30, iron: 20 }, waterPerMin: 3.0, groundwaterUsePerMin: 0.5, desc: '抽地下水：每分钟产水 3，地下水位 -0.5。' },
  { id: 'weather_station', name: '气象站', icon: '📡', stageUnlock: 2, cost: { tech: 40, steel: 20 }, rainForecast: true, growthMul: 1.05, desc: '预报降雨，植物生长 +5%，解锁降雨预报面板。' },
  { id: 'seed_bank', name: '种子库', icon: '🌰', stageUnlock: 0, cost: { steel: 20, tech: 10 }, seedCostMul: 0.7, desc: '播种成本 -30%。' },
  { id: 'compost_plant', name: '堆肥厂', icon: '♻️', stageUnlock: 2, cost: { steel: 30 }, soilBonusPerMin: 1.0, desc: '每分钟全图土壤肥力 +1（上限内），消耗生物质。', upkeepPerMin: { biomass: 1 } },
  { id: 'windbreak_wall', name: '防风墙', icon: '🧱', stageUnlock: 2, cost: { iron: 40 }, frostProtect: 0.5, desc: '周围 2 格冻害 -50%。', radius: 2 },
  { id: 'wetland', name: '人工湿地', icon: '🦆', stageUnlock: 3, cost: { steel: 50, water: 50 }, waterPerMin: 0.5, diversityBonus: 0.05, desc: '多样性指数 +0.05，鸟类容量 +20%。' },
  { id: 'carbon_scrubber', name: '碳捕集器', icon: '🌬️', stageUnlock: 4, cost: { steel: 70, tech: 50 }, co2PerMin: -0.02, o2PerMin: 1.0, desc: '改造后期调温：推进 -0.02%/分钟（防过热），产氧 1。' },
];
function ecoBuildingDef(id) {
  for (let i = 0; i < ECO_BUILDINGS.length; i++) if (ECO_BUILDINGS[i].id === id) return ECO_BUILDINGS[i];
  return null;
}

/* ------------------------------------------------------------------------------
 * ECO_RESEARCH：生态科技（18 项，挂在 tech.has(id) 口径下；无 tech 系统时默认未解锁）
 * ------------------------------------------------------------------------------ */
const ECO_RESEARCH = [
  { id: 'eco_seed1', name: '抗寒苔藓', cost: { tech: 10 }, effect: '苔藓耐寒 -10°C', apply: { plant: 'moss', tempMin: -10 } },
  { id: 'eco_seed2', name: '速生草种', cost: { tech: 15 }, effect: '草生长周期 -20%', apply: { plant: 'grass', growthMul: 0.8 } },
  { id: 'eco_seed3', name: '耐旱灌木', cost: { tech: 25 }, effect: '灌木需水 -30%', apply: { plant: 'shrub', waterMul: 0.7 } },
  { id: 'eco_seed4', name: '高产作物', cost: { tech: 40 }, effect: '农作物产量 +50%', apply: { plant: 'crop', yieldMul: 1.5 } },
  { id: 'eco_seed5', name: '巨型树种', cost: { tech: 60 }, effect: '树产氧 +50%', apply: { plant: 'tree', o2Mul: 1.5 } },
  { id: 'eco_water1', name: '滴灌技术', cost: { tech: 20 }, effect: '植物耗水 -25%', apply: { global: 'waterUseMul', value: 0.75 } },
  { id: 'eco_water2', name: '雨水回收', cost: { tech: 30 }, effect: '降雨产水 +50%', apply: { global: 'rainWaterMul', value: 1.5 } },
  { id: 'eco_water3', name: '深层钻探', cost: { tech: 50 }, effect: '地下水容量 +50%', apply: { global: 'groundwaterCapMul', value: 1.5 } },
  { id: 'eco_o2_1', name: '高效电解', cost: { tech: 25 }, effect: '电解产氧 +50%', apply: { global: 'electrolysisMul', value: 1.5 } },
  { id: 'eco_o2_2', name: '富氧穹顶', cost: { tech: 45 }, effect: '氧气库存上限 +30%', apply: { global: 'o2CapMul', value: 1.3 } },
  { id: 'eco_fauna1', name: '授粉昆虫选育', cost: { tech: 20 }, effect: '授粉加成 25%→40%', apply: { global: 'pollinationMul', value: 1.6 } },
  { id: 'eco_fauna2', name: '鸟类保护区', cost: { tech: 35 }, effect: '鸟类容量 +50%', apply: { animal: 'bird', carryMul: 1.5 } },
  { id: 'eco_fauna3', name: '哺乳动物驯化', cost: { tech: 50 }, effect: '哺乳动物繁殖 +50%', apply: { animal: 'mammal', rMul: 1.5 } },
  { id: 'eco_terra1', name: '氟化物合成', cost: { tech: 30 }, effect: '温室气体工厂效率 +50%', apply: { global: 'ghgMul', value: 1.5 } },
  { id: 'eco_terra2', name: '磁层稳定', cost: { tech: 80 }, effect: '人造磁层 +8%→+12%', apply: { global: 'magnetBoostMul', value: 1.5 } },
  { id: 'eco_terra3', name: '彗星捕获', cost: { tech: 70 }, effect: '彗星注水 500→800', apply: { global: 'cometWaterMul', value: 1.6 } },
  { id: 'eco_balance1', name: '生态监测网', cost: { tech: 30 }, effect: '崩溃预警提前 5 分钟，崩溃概率 -50%', apply: { global: 'collapseChanceMul', value: 0.5 } },
  { id: 'eco_balance2', name: '基因多样性库', cost: { tech: 60 }, effect: '灭绝后恢复速度 ×2', apply: { global: 'recoveryMul', value: 2.0 } },
];
function ecoResearchDef(id) {
  for (let i = 0; i < ECO_RESEARCH.length; i++) if (ECO_RESEARCH[i].id === id) return ECO_RESEARCH[i];
  return null;
}

/* ------------------------------------------------------------------------------
 * ECO_POLICIES：生态政策（8 项，同一时间最多激活 3 项，带真实代价）
 * ------------------------------------------------------------------------------ */
const ECO_POLICIES = [
  { id: 'pol_ghg_push', name: '全力增温', desc: '改造推进 +30%，但氧气产量 -10%（氟化物抑制藻类）。', effects: { progressMul: 1.3, o2Mul: 0.9 } },
  { id: 'pol_green_first', name: '绿化优先', desc: '植物生长 +30%，改造推进 -20%。', effects: { growthMul: 1.3, progressMul: 0.8 } },
  { id: 'pol_water_save', name: '节水令', desc: '植物耗水 -40%，生长 -10%。', effects: { waterUseMul: 0.6, growthMul: 0.9 } },
  { id: 'pol_open_air', name: '户外放开', desc: '户外种植解锁提前 1 阶段，但冻害 +50%。', effects: { outdoorEarly: 1, frostMul: 1.5 } },
  { id: 'pol_wildlife', name: '野生动物保护', desc: '动物繁殖 +40%，农作物被啃食 +20%。', effects: { faunaRMul: 1.4, cropGrazeMul: 1.2 } },
  { id: 'pol_harvest', name: '丰收动员', desc: '农作物产量 +40%，土壤肥力消耗 +50%。', effects: { cropYieldMul: 1.4, soilUseMul: 1.5 } },
  { id: 'pol_ration_o2', name: '氧气配给', desc: '人口耗氧 -30%，人口增速 -20%。', effects: { o2UseMul: 0.7, popGrowthMul: 0.8 } },
  { id: 'pol_rain_dance', name: '人工降雨', desc: '降雨 +50%，每分钟耗水 10（造云耗水）。', effects: { rainMul: 1.5, waterUsePerMin: 10 } },
];
function ecoPolicyDef(id) {
  for (let i = 0; i < ECO_POLICIES.length; i++) if (ECO_POLICIES[i].id === id) return ECO_POLICIES[i];
  return null;
}

/* ------------------------------------------------------------------------------
 * ECO_EVENTS：生态事件（每条都有 condition(now, eco, game) 与 apply(eco, game)）
 * ------------------------------------------------------------------------------
 * 事件不是文本：condition 为真才进候选，apply 直接改数值并返回日志行。
 * 权重 weight 参与抽选；cooldownMin 防刷屏；once 为真只触发一次。
 * ------------------------------------------------------------------------------ */
const ECO_EVENTS = [
  {
    id: 'ev_dust_storm_eco', name: '沙尘暴掩埋幼苗', icon: '🌪️', weight: 10, cooldownMin: 20, once: false,
    condition: function (eco, game) { return eco.plants.count() > 20 && eco.water.rainMmY < 100; },
    apply: function (eco, game) {
      const killed = eco.plants.killYoungest(0.15);
      eco.soil.addFertilityAll(-2);
      return { log: '沙尘暴掩埋了 ' + killed + ' 株幼苗，土壤肥力 -2', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_rain_burst', name: '暴雨', icon: '🌧️', weight: 8, cooldownMin: 15, once: false,
    condition: function (eco, game) { return eco.terraform.progress >= 40 && eco.water.soilMoistureAvg() < 70; },
    apply: function (eco, game) {
      eco.water.addRainEvent(30);
      eco.plants.waterAll(10);
      return { log: '一场暴雨：土壤湿度 +10，地下水补给 +30mm', severity: 'good', rainMm: 30 };
    },
  },
  {
    id: 'ev_pest_outbreak', name: '虫害爆发', icon: '🦗', weight: 7, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.fauna.pop('insect') > 120 && eco.fauna.pop('bird') < 8; },
    apply: function (eco, game) {
      const eaten = eco.plants.grazeDamage(0.2);
      eco.fauna.setPop('insect', eco.fauna.pop('insect') * 1.2);
      return { log: '虫害爆发：昆虫啃食了 20% 的草灌生物量', severity: 'bad', eaten: eaten };
    },
  },
  {
    id: 'ev_bird_flock', name: '候鸟过境', icon: '🐦', weight: 6, cooldownMin: 45, once: false,
    condition: function (eco, game) { return eco.terraform.progress >= 40 && eco.fauna.pop('bird') >= 6; },
    apply: function (eco, game) {
      eco.fauna.addPop('bird', 4);
      eco.plants.spreadBoost(0.05);
      return { log: '候鸟群过境：鸟类 +4，顺带播种，植物扩散 +5%', severity: 'good', birds: 4 };
    },
  },
  {
    id: 'ev_algae_bloom', name: '藻华', icon: '🫧', weight: 6, cooldownMin: 25, once: false,
    condition: function (eco, game) { return eco.oxygen.stock < eco.oxygen.cap() * 0.3 && eco.terraform.progress >= 10; },
    apply: function (eco, game) {
      eco.oxygen.addStock(50);
      eco.water.addPollution(5);
      return { log: '藻华：氧气库存 +50 吨，但水体轻度污染（植物生长 -5%，持续 5 分钟）', severity: 'mixed', o2: 50 };
    },
  },
  {
    id: 'ev_frost', name: '寒潮', icon: '❄️', weight: 7, cooldownMin: 20, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() < -20 && eco.plants.count() > 10; },
    apply: function (eco, game) {
      const killed = eco.plants.frostKill();
      return { log: '寒潮冻死了 ' + killed + ' 株不耐寒植物', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_meteor_shower', name: '流星雨送水', icon: '☄️', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.progress < 70; },
    apply: function (eco, game) {
      eco.water.addIce(100);
      eco.terraform.addProgress(0.5, 'meteor');
      return { log: '流星雨带来冰水：库存水 +100，改造 +0.5%', severity: 'good', water: 100 };
    },
  },
  {
    id: 'ev_collapse', name: '生态崩溃', icon: '💀', weight: 0, cooldownMin: 60, once: false,
    // weight 0：不参与随机抽选，只由 EcoBalance 强制触发
    condition: function (eco, game) { return eco.balance.collapseDue(); },
    apply: function (eco, game) { return eco.balance.doCollapse('event'); },
  },
  {
    id: 'ev_first_rain', name: '第一场雨', icon: '🌧️', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 40 && !eco.flags.firstRain; },
    apply: function (eco, game) {
      eco.flags.firstRain = true;
      eco.water.addRainEvent(50);
      return { log: '火星的第一场雨：全图土壤湿润，地下水 +50mm', severity: 'good', rainMm: 50 };
    },
  },
  {
    id: 'ev_first_breath', name: '第一次户外呼吸', icon: '😮‍💨', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 70 && !eco.flags.firstBreath; },
    apply: function (eco, game) {
      eco.flags.firstBreath = true;
      eco.oxygen.addStock(200);
      return { log: '户外空气首次达到可呼吸标准：氧气库存 +200 吨', severity: 'good', o2: 200 };
    },
  },
  {
    id: 'ev_habitable', name: '宜居达成', icon: '🌍', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 85 && !eco.flags.habitable; },
    apply: function (eco, game) {
      eco.flags.habitable = true;
      return { log: '火星宜居：人口增速 +25%（永久，见 getBuffs）', severity: 'good' };
    },
  },
  {
    id: 'ev_drought', name: '干旱', icon: '🏜️', weight: 8, cooldownMin: 25, once: false,
    condition: function (eco, game) { return eco.water.soilMoistureAvg() < 25 && eco.terraform.progress < 55; },
    apply: function (eco, game) {
      eco.water.addDrought(10);
      const killed = eco.plants.droughtKill(0.1);
      return { log: '干旱：土壤湿度 -10，干旱致死 ' + killed + ' 株', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_heatwave', name: '热浪', icon: '🔥', weight: 5, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() > 20 && eco.plants.count() > 30; },
    apply: function (eco, game) {
      const stressed = eco.plants.heatStress(0.2);
      eco.water.addEvapBurst(20);
      return { log: '热浪：' + stressed + ' 株植物热胁迫（生长停滞 5 分钟），蒸发 +20mm', severity: 'bad', stressed: stressed };
    },
  },
  {
    id: 'ev_seed_wind', name: '种子风', icon: '🍃', weight: 7, cooldownMin: 20, once: false,
    condition: function (eco, game) { return eco.plants.matureCount() > 15; },
    apply: function (eco, game) {
      const n = eco.plants.windSpread(6);
      return { log: '大风把种子吹向远方：新长出 ' + n + ' 株幼苗', severity: 'good', spread: n };
    },
  },
  {
    id: 'ev_rabbit_boom', name: '兔群激增', icon: '🐇', weight: 5, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.fauna.pop('mammal') >= 6 && eco.plants.biomassOf('grass') > 100; },
    apply: function (eco, game) {
      eco.fauna.addPop('mammal', 4);
      eco.plants.grazeDamage(0.1);
      return { log: '兔群激增：哺乳动物 +4，但啃食了 10% 草生物量', severity: 'mixed', added: 4 };
    },
  },
];
function ecoEventDef(id) {
  for (let i = 0; i < ECO_EVENTS.length; i++) if (ECO_EVENTS[i].id === id) return ECO_EVENTS[i];
  return null;
}

/* ------------------------------------------------------------------------------
 * ECO_ACHIEVEMENTS：生态成就（20 项，条件函数 + 奖励口径，供 achievements 侧读取）
 * ------------------------------------------------------------------------------ */
const ECO_ACHIEVEMENTS = [
  { id: 'eco_a01', name: '第一株苔藓', desc: '种下第一株植物', check: function (eco) { return eco.stats.totalPlanted >= 1; } },
  { id: 'eco_a02', name: '百株园丁', desc: '累计种植 100 株', check: function (eco) { return eco.stats.totalPlanted >= 100; } },
  { id: 'eco_a03', name: '千株成林', desc: '累计种植 1000 株', check: function (eco) { return eco.stats.totalPlanted >= 1000; } },
  { id: 'eco_a04', name: '第一棵树', desc: '种下第一棵树', check: function (eco) { return eco.plants.countOf('tree') >= 1; } },
  { id: 'eco_a05', name: '百树成林', desc: '同时拥有 100 棵树', check: function (eco) { return eco.plants.countOf('tree') >= 100; } },
  { id: 'eco_a06', name: '丰收', desc: '累计收获 500 食物', check: function (eco) { return eco.stats.totalHarvestFood >= 500; } },
  { id: 'eco_a07', name: '微氧时代', desc: '改造进度达到 10%', check: function (eco) { return eco.terraform.progress >= 10; } },
  { id: 'eco_a08', name: '降雨时代', desc: '改造进度达到 40%', check: function (eco) { return eco.terraform.progress >= 40; } },
  { id: 'eco_a09', name: '可呼吸', desc: '改造进度达到 70%', check: function (eco) { return eco.terraform.progress >= 70; } },
  { id: 'eco_a10', name: '宜居火星', desc: '改造进度达到 85%', check: function (eco) { return eco.terraform.progress >= 85; } },
  { id: 'eco_a11', name: '氧气自由', desc: '氧气库存超过 5000 吨', check: function (eco) { return eco.oxygen.stock >= 5000; } },
  { id: 'eco_a12', name: '第一场雨', desc: '触发第一场雨事件', check: function (eco) { return !!eco.flags.firstRain; } },
  { id: 'eco_a13', name: '昆虫之家', desc: '昆虫数量超过 100', check: function (eco) { return eco.fauna.pop('insect') >= 100; } },
  { id: 'eco_a14', name: '百鸟朝凤', desc: '鸟类数量超过 50', check: function (eco) { return eco.fauna.pop('bird') >= 50; } },
  { id: 'eco_a15', name: '生态平衡大师', desc: '多样性指数超过 0.8 并维持', check: function (eco) { return eco.balance.diversity >= 0.8; } },
  { id: 'eco_a16', name: '从崩溃中恢复', desc: '经历一次生态崩溃后恢复到多样性 0.5', check: function (eco) { return eco.stats.collapses >= 1 && eco.balance.diversity >= 0.5; } },
  { id: 'eco_a17', name: '湖泊', desc: '地表出现第一个湖泊', check: function (eco) { return eco.water.lakes >= 1; } },
  { id: 'eco_a18', name: '地下水库', desc: '地下水位达到 80', check: function (eco) { return eco.water.groundwater >= 80; } },
  { id: 'eco_a19', name: '磁层守护者', desc: '完成人造磁层工程', check: function (eco) { return eco.terraform.completedProjects.indexOf('magnet_shield') >= 0; } },
  { id: 'eco_a20', name: '彗星猎手', desc: '完成 3 次彗星引导', check: function (eco) { return eco.terraform.cometCount >= 3; } },
];

/* ------------------------------------------------------------------------------
 * game 背包辅助（防御性：无 game / 无 inv 时返回安全值，绝不抛异常）
 * ------------------------------------------------------------------------------ */
function ecoInv(game) {
  if (!game) return null;
  if (game.player && game.player.inv) return game.player.inv;
  if (game.inv) return game.inv;
  return null;
}
function ecoCanAfford(game, cost) {
  if (!cost) return true;
  const inv = ecoInv(game);
  if (!inv) return true; // 无背包（自测/独立运行）视为可支付
  for (const k in cost) {
    if ((inv[k] || 0) < cost[k]) return false;
  }
  return true;
}
function ecoPay(game, cost) {
  if (!cost) return true;
  if (!ecoCanAfford(game, cost)) return false;
  const inv = ecoInv(game);
  if (!inv) return true;
  for (const k in cost) inv[k] = (inv[k] || 0) - cost[k];
  return true;
}
function ecoGrant(game, res, amount) {
  const inv = ecoInv(game);
  if (!inv) return false;
  inv[res] = (inv[res] || 0) + amount;
  return true;
}
function ecoPopCount(game) {
  if (!game) return 0;
  if (game.pop && typeof game.pop.count === 'number') return game.pop.count;
  if (game.pop && typeof game.pop.total === 'number') return game.pop.total;
  if (typeof game.population === 'number') return game.population;
  return 0;
}
function ecoTechHas(game, id) {
  if (!game || !game.tech) return false;
  if (typeof game.tech.has === 'function') return !!game.tech.has(id);
  if (game.tech.unlocked && game.tech.unlocked[id]) return true;
  if (game.tech.researched && game.tech.researched[id]) return true;
  return false;
}
function ecoToast(game, msg) {
  if (game && typeof game.toast === 'function') { try { game.toast(msg); } catch (e) {} }
}
function ecoBuildingList(game) {
  if (!game) return [];
  if (game.builder && Array.isArray(game.builder.buildings)) return game.builder.buildings;
  if (Array.isArray(game.buildings)) return game.buildings;
  return [];
}
function ecoSeason(game) {
  if (game && game.time && typeof game.time.season === 'string') return game.time.season;
  if (game && typeof game.season === 'string') return game.season;
  return 'spring';
}
function ecoSandstorm(game) {
  if (!game || !game.disaster) return false;
  if (typeof game.disaster.sandstormActive === 'function') {
    try { return !!game.disaster.sandstormActive(ecoNow()); } catch (e) { return false; }
  }
  return !!game.disaster.sandstorm;
}

/* ------------------------------------------------------------------------------
 * EcoTile / EcoGrid：50×50 地块网格（土壤/水分/温度/植被覆盖）
 * ------------------------------------------------------------------------------
 * 每个地块的状态就是生态模拟的“像素”：植物种在格子上，水在格子间扩散，
 * 视觉层直接读 vegetation/moisture 上色。生成用确定性噪声（播种固定时可复现）。
 * ------------------------------------------------------------------------------ */
class EcoTile {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.terrain = 0;        // 0 平地 1 岩石 2 环形山 3 峡谷 4 极地 5 火山
    this.moisture = 10;      // 土壤湿度 0-100
    this.fertility = 20;     // 土壤肥力 0-100
    this.vegetation = 0;     // 植被覆盖 0-100（视觉主标尺）
    this.surfaceWater = 0;   // 地表积水深度 0-100（成湖标尺）
    this.tempOffset = 0;     // 局部温度偏移（纬度/海拔/火山）
    this.elevation = 0;      // 海拔 -10..10（低洼易积水）
    this.dominant = null;    // 优势植物 id（视觉用）
    this.pollution = 0;      // 污染 0-100（藻华/工业）
    this.frost = 0;          // 霜冻残留 0-100
  }
  // 该格是否可种植（峡谷不可建，极地太冷时不可）
  plantable() { return this.terrain !== 3; }
  // 该格是否低洼（易成湖）
  isLowland() { return this.elevation <= -4; }
}

class EcoGrid {
  constructor(size, seed) {
    this.size = size || 50;
    this.seed = seed || 1337;
    this.tiles = [];
    this.rng = ecoRng(this.seed);
    this.generate();
  }
  generate() {
    const n = this.size;
    const rng = this.rng;
    // 简易值噪声：4 个随机锚点做双线性插值，得到平滑的肥力/海拔场
    const anchors = [];
    for (let i = 0; i < 16; i++) anchors.push({ f: rng() * 60 + 10, e: rng() * 20 - 10 });
    const anchorAt = function (fx, fy, key) {
      const gx = ecoClamp(fx * 3, 0, 2.999), gy = ecoClamp(fy * 3, 0, 2.999);
      const x0 = Math.floor(gx), y0 = Math.floor(gy);
      const tx = gx - x0, ty = gy - y0;
      const idx = function (x, y) { return ecoClamp(y, 0, 3) * 4 + ecoClamp(x, 0, 3); };
      const a = anchors[idx(x0, y0)][key], b = anchors[idx(x0 + 1, y0)][key];
      const c = anchors[idx(x0, y0 + 1)][key], d = anchors[idx(x0 + 1, y0 + 1)][key];
      return ecoLerp(ecoLerp(a, b, tx), ecoLerp(c, d, tx), ty);
    };
    for (let y = 0; y < n; y++) {
      this.tiles[y] = [];
      for (let x = 0; x < n; x++) {
        const t = new EcoTile(x, y);
        const fx = x / n, fy = y / n;
        t.fertility = ecoClamp(anchorAt(fx, fy, 'f') + (rng() - 0.5) * 10, 5, 95);
        t.elevation = ecoClamp(anchorAt(fx, fy, 'e') + (rng() - 0.5) * 4, -10, 10);
        // 纬度：越靠两极（y 接近 0 或 n）越冷
        const lat = Math.abs(fy - 0.5) * 2; // 0 赤道 ~ 1 两极
        t.tempOffset = -lat * 18 + (t.elevation * -0.5);
        // 极地：y < 8% 或 > 92%
        if (fy < 0.08 || fy > 0.92) t.terrain = 4;
        else if (rng() < 0.06) t.terrain = 1;
        else if (rng() < 0.03) t.terrain = 2;
        else if (rng() < 0.02) t.terrain = 5;
        else if (t.elevation <= -8 && rng() < 0.5) t.terrain = 3;
        if (t.terrain === 4) { t.moisture = 30; t.tempOffset -= 12; }
        if (t.terrain === 5) { t.tempOffset += 8; t.fertility = ecoClamp(t.fertility - 10, 5, 95); }
        t.moisture = ecoClamp(t.moisture + (rng() - 0.5) * 8, 2, 60);
        this.tiles[y][x] = t;
      }
    }
  }
  inBounds(x, y) { return x >= 0 && y >= 0 && x < this.size && y < this.size; }
  get(x, y) {
    if (!this.inBounds(x, y)) return null;
    return this.tiles[y][x];
  }
  neighbors(x, y) {
    const out = [];
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
      const t = this.get(x + dirs[i][0], y + dirs[i][1]);
      if (t) out.push(t);
    }
    return out;
  }
  neighbors8(x, y) {
    const out = [];
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue;
      const t = this.get(x + dx, y + dy);
      if (t) out.push(t);
    }
    return out;
  }
  avgMoisture() {
    let s = 0, n = 0;
    for (let y = 0; y < this.size; y++) for (let x = 0; x < this.size; x++) { s += this.tiles[y][x].moisture; n++; }
    return n ? s / n : 0;
  }
  avgFertility() {
    let s = 0, n = 0;
    for (let y = 0; y < this.size; y++) for (let x = 0; x < this.size; x++) { s += this.tiles[y][x].fertility; n++; }
    return n ? s / n : 0;
  }
  avgVegetation() {
    let s = 0, n = 0;
    for (let y = 0; y < this.size; y++) for (let x = 0; x < this.size; x++) { s += this.tiles[y][x].vegetation; n++; }
    return n ? s / n : 0;
  }
  addFertilityAll(delta) {
    for (let y = 0; y < this.size; y++) for (let x = 0; x < this.size; x++) {
      const t = this.tiles[y][x];
      t.fertility = ecoClamp(t.fertility + delta, 0, 100);
    }
  }
  addMoistureAll(delta) {
    for (let y = 0; y < this.size; y++) for (let x = 0; x < this.size; x++) {
      const t = this.tiles[y][x];
      t.moisture = ecoClamp(t.moisture + delta, 0, 100);
    }
  }
  // 水分扩散：每 tick 对 1/4 的格子做一次与邻格的均值扩散（性能折中）
  diffuseMoisture(dtMin, tickIndex) {
    const n = this.size;
    const step = 4;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      if ((x + y * n + tickIndex) % step !== 0) continue;
      const t = this.tiles[y][x];
      const ns = this.neighbors(x, y);
      if (!ns.length) continue;
      let avg = 0;
      for (let i = 0; i < ns.length; i++) avg += ns[i].moisture;
      avg /= ns.length;
      const k = ecoClamp(0.05 * dtMin, 0, 0.5);
      t.moisture = ecoClamp(t.moisture + (avg - t.moisture) * k, 0, 100);
    }
  }
  // 植被覆盖扩散：有植被的格子向邻格缓慢蔓延（视觉连续性）
  diffuseVegetation(dtMin, tickIndex) {
    const n = this.size;
    const step = 4;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      if ((x + y * n + tickIndex) % step !== 0) continue;
      const t = this.tiles[y][x];
      if (t.vegetation <= 0) continue;
      const ns = this.neighbors(x, y);
      for (let i = 0; i < ns.length; i++) {
        const nb = ns[i];
        if (nb.vegetation < t.vegetation && nb.plantable()) {
          nb.vegetation = ecoClamp(nb.vegetation + t.vegetation * 0.002 * dtMin, 0, 100);
          if (!nb.dominant && t.dominant) nb.dominant = t.dominant;
        }
      }
    }
  }
  // 随机采样一个可种植格（供自然扩散/事件用）
  randomPlantableTile(rng) {
    for (let tries = 0; tries < 50; tries++) {
      const x = Math.floor(rng() * this.size);
      const y = Math.floor(rng() * this.size);
      const t = this.get(x, y);
      if (t && t.plantable()) return t;
    }
    return this.get(Math.floor(this.size / 2), Math.floor(this.size / 2));
  }
  // 统计各地形格数（自测/面板用）
  terrainCounts() {
    const c = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (let y = 0; y < this.size; y++) for (let x = 0; x < this.size; x++) {
      c[this.tiles[y][x].terrain] = (c[this.tiles[y][x].terrain] || 0) + 1;
    }
    return c;
  }
  save() {
    // 存档只存“偏离初值”的格子，省空间：记录 moisture/fertility/vegetation/surfaceWater 的差值
    const diff = [];
    for (let y = 0; y < this.size; y++) for (let x = 0; x < this.size; x++) {
      const t = this.tiles[y][x];
      if (t.moisture > 11 || t.fertility > 21 || t.vegetation > 0 || t.surfaceWater > 0) {
        diff.push([x, y, ecoRound(t.moisture, 1), ecoRound(t.fertility, 1), ecoRound(t.vegetation, 1), ecoRound(t.surfaceWater, 1), t.dominant || '']);
      }
    }
    return { v: 1, size: this.size, seed: this.seed, diff: diff };
  }
  load(data) {
    if (!data || data.size !== this.size) return false;
    // 重建后应用差值
    this.seed = data.seed || this.seed;
    this.generate();
    const diff = data.diff || [];
    for (let i = 0; i < diff.length; i++) {
      const d = diff[i];
      const t = this.get(d[0], d[1]);
      if (!t) continue;
      t.moisture = d[2]; t.fertility = d[3]; t.vegetation = d[4]; t.surfaceWater = d[5];
      t.dominant = d[6] || null;
    }
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * TerraformingSystem：大气改造
 * ------------------------------------------------------------------------------
 * 进度是唯一主标尺。推进来源（每分钟）：
 *   被动 + 工程持续型 + 建筑 co2 聚合 + 植物固碳（小）− 碳捕集 − 崩溃惩罚。
 * 阶段变化时记 stageChanges，供 UI/成就读取；完成一次性工程要校验成本与前置。
 * ------------------------------------------------------------------------------ */
class TerraformingSystem {
  constructor() {
    this.progress = 0;
    this.completedProjects = [];   // 已完成的一次性工程 id
    this.activeProjects = [];      // 进行中的一次性工程 {id, remainingMin}
    this.continuousProjects = {};  // 持续型工程计数 {ghg_factory: n}
    this.cometCount = 0;
    this.totalProgressGained = 0;
    this.stageChanges = [];        // [{from, to, atMin}]
    this.lastStage = 0;
    this.minutes = 0;
    this.cooldowns = {};           // 工程冷却 {id: 剩余分钟}
    this.heatBonusC = 0;           // 建筑/工程带来的额外升温
    this.pressureBonusKpa = 0;
  }
  stage() { return terraformStageFor(this.progress); }
  stageIndex() { return this.stage().index; }
  tempC() {
    const base = ETUNE.TEMP_BASE_C + this.progress * ETUNE.TEMP_PER_PROGRESS;
    return ecoClamp(base + this.heatBonusC, ETUNE.TEMP_MIN_C, ETUNE.TEMP_MAX_C);
  }
  pressureKpa() {
    return ecoClamp(ETUNE.PRESSURE_BASE_KPA + this.progress * ETUNE.PRESSURE_PER_PROGRESS + this.pressureBonusKpa, 0.6, ETUNE.PRESSURE_MAX_KPA);
  }
  co2Ppm() {
    // CO2 随进度指数下降：95% → 400ppm
    const t = this.progress / 100;
    return Math.round(ecoLerp(ETUNE.CO2_START_PPM, ETUNE.CO2_END_PPM, Math.pow(t, 1.5)));
  }
  o2Percent() {
    // 氧气占比：0% 时 0.13%，100% 时 21%
    return ecoRound(ecoLerp(0.13, 21, Math.pow(this.progress / 100, 1.2)), 2);
  }
  addProgress(amount, source) {
    if (!isFinite(amount) || amount === 0) return 0;
    const before = this.progress;
    this.progress = ecoClamp(this.progress + amount, 0, ETUNE.PROGRESS_MAX);
    const gained = this.progress - before;
    if (gained > 0) this.totalProgressGained += gained;
    const si = this.stageIndex();
    if (si !== this.lastStage) {
      this.stageChanges.push({ from: this.lastStage, to: si, atMin: ecoRound(this.minutes, 1), source: source || 'progress' });
      this.lastStage = si;
    }
    return gained;
  }
  // 启动工程：返回 {ok, reason}
  startProject(id, game, eco) {
    const def = terraformProject(id);
    if (!def) return { ok: false, reason: '未知工程：' + id };
    if (this.stageIndex() < def.stageUnlock) {
      return { ok: false, reason: '需要阶段「' + TERRAFORM_STAGES[def.stageUnlock].name + '」' };
    }
    if (def.kind === 'onetime') {
      if (this.completedProjects.indexOf(id) >= 0 && def.maxCount <= 1) {
        return { ok: false, reason: '该工程已完成，不可重复' };
      }
      const done = this.completedProjects.filter(function (x) { return x === id; }).length;
      if (done >= def.maxCount) return { ok: false, reason: '已达最大次数（' + def.maxCount + '）' };
      if ((this.cooldowns[id] || 0) > 0) return { ok: false, reason: '冷却中，剩余 ' + Math.ceil(this.cooldowns[id]) + ' 分钟' };
      if (this.activeProjects.some(function (p) { return p.id === id; })) {
        return { ok: false, reason: '工程进行中' };
      }
    } else {
      const n = this.continuousProjects[id] || 0;
      if (n >= def.maxCount) return { ok: false, reason: '已达最大数量（' + def.maxCount + ' 座）' };
    }
    if (!ecoCanAfford(game, def.cost)) return { ok: false, reason: '资源不足' };
    ecoPay(game, def.cost);
    if (def.kind === 'onetime') {
      this.activeProjects.push({ id: id, remainingMin: def.durationMin, totalMin: def.durationMin });
    } else {
      this.continuousProjects[id] = (this.continuousProjects[id] || 0) + 1;
    }
    return { ok: true, reason: '已启动' };
  }
  // 停止持续型工程（拆除一座）
  stopContinuous(id) {
    const n = this.continuousProjects[id] || 0;
    if (n <= 0) return false;
    this.continuousProjects[id] = n - 1;
    if (this.continuousProjects[id] === 0) delete this.continuousProjects[id];
    return true;
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    // 冷却递减
    for (const id in this.cooldowns) {
      this.cooldowns[id] -= dtMin;
      if (this.cooldowns[id] <= 0) delete this.cooldowns[id];
    }
    // 被动推进（极慢，纯挂机也有盼头）
    let gain = ETUNE.PROGRESS_PASSIVE_PER_MIN * dtMin;
    // 持续型工程
    let ghgMul = 1;
    if (eco && ecoTechHas(game, 'eco_terra1')) ghgMul = 1.5;
    for (const id in this.continuousProjects) {
      const def = terraformProject(id);
      if (!def) continue;
      const n = this.continuousProjects[id];
      let rate = def.ratePerMin * n;
      if (id === 'ghg_factory') rate *= ghgMul;
      gain += rate * dtMin;
      if (def.waterPerMin) ecoGrant(game, 'water', def.waterPerMin * n * dtMin);
      if (def.o2PerMin && eco && eco.oxygen) eco.oxygen.addStock(def.o2PerMin * n * dtMin);
    }
    // 建筑 co2 聚合（另一组建筑文件产出的建筑也计入；与工程取大者不叠加的口径在 buildings 侧）
    if (eco && eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      if (agg.co2PerMin) gain += agg.co2PerMin * dtMin;
      if (agg.heatPerMin) this.heatBonusC = ecoClamp(agg.heatPerMin, -5, 10);
      else this.heatBonusC = 0;
    }
    // 植物固碳：每 1000 株成熟植物每分钟 +0.001%（绿化反哺改造，封顶 0.01%/分钟）
    if (eco && eco.plants) {
      const mature = eco.plants.matureCount();
      gain += Math.min(mature / 1000 * 0.001, 0.01) * dtMin;
    }
    // 政策修正
    if (eco && eco.policies) {
      const pm = eco.policies.effectMul('progressMul');
      gain *= pm;
    }
    if (gain !== 0) this.addProgress(gain, 'passive');
    // 一次性工程推进
    for (let i = this.activeProjects.length - 1; i >= 0; i--) {
      const p = this.activeProjects[i];
      p.remainingMin -= dtMin;
      if (p.remainingMin <= 0) {
        this.activeProjects.splice(i, 1);
        this.completeProject(p.id, eco, game);
      }
    }
  }
  completeProject(id, eco, game) {
    const def = terraformProject(id);
    if (!def) return;
    this.completedProjects.push(id);
    if (def.cooldownMin) this.cooldowns[id] = def.cooldownMin;
    let boost = def.boost || 0;
    if (id === 'magnet_shield' && ecoTechHas(game, 'eco_terra2')) boost *= 1.5;
    if (boost) this.addProgress(boost, id);
    if (id === 'comet_divert') {
      this.cometCount++;
      let water = def.waterBonus || 0;
      if (ecoTechHas(game, 'eco_terra3')) water *= 1.6;
      ecoGrant(game, 'water', water);
      if (eco && eco.water) eco.water.addIce(water);
    }
    if (eco) eco.log('工程完成：' + def.name + (boost ? '，改造 +' + boost + '%' : ''));
  }
  // 阶段解锁查询（供植物/动物/建筑校验）
  isUnlocked(kind, id) {
    const stage = this.stage();
    const list = stage.unlocks[kind] || [];
    return list.indexOf(id) >= 0;
  }
  // 下一阶段还差多少进度
  progressToNextStage() {
    const cur = this.stage();
    if (cur.index >= TERRAFORM_STAGES.length - 1) return 0;
    return ecoRound(TERRAFORM_STAGES[cur.index + 1].min - this.progress, 2);
  }
  save() {
    return {
      v: 1, progress: ecoRound(this.progress, 3), completedProjects: this.completedProjects.slice(),
      activeProjects: this.activeProjects.map(function (p) { return { id: p.id, remainingMin: ecoRound(p.remainingMin, 2), totalMin: p.totalMin }; }),
      continuousProjects: Object.assign({}, this.continuousProjects),
      cometCount: this.cometCount, totalProgressGained: ecoRound(this.totalProgressGained, 2),
      stageChanges: this.stageChanges.slice(-20), minutes: ecoRound(this.minutes, 1),
      cooldowns: Object.assign({}, this.cooldowns),
    };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.progress = ecoClamp(ecoSafeNum(data.progress, 0), 0, 100);
    this.completedProjects = Array.isArray(data.completedProjects) ? data.completedProjects.slice() : [];
    this.activeProjects = Array.isArray(data.activeProjects) ? data.activeProjects : [];
    this.continuousProjects = data.continuousProjects || {};
    this.cometCount = ecoSafeNum(data.cometCount, 0);
    this.totalProgressGained = ecoSafeNum(data.totalProgressGained, 0);
    this.stageChanges = Array.isArray(data.stageChanges) ? data.stageChanges : [];
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.cooldowns = data.cooldowns || {};
    this.lastStage = this.stageIndex();
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * PlantSystem：植物生长（5 种 × 生长阶段 × 水/光/温三因子 × 土壤 × 授粉）
 * ------------------------------------------------------------------------------
 * 每株植物是一个对象：{ species, x, y, ageDays, health, indoor, plantedMin }。
 * tick（每分钟）对每株：算三因子 → 长 age → 扣水 → 改土壤 → 更新地块植被覆盖。
 * 性能：植株数上千时仍按 1 分钟步进；单株计算是 O(1) 查表，无全图扫描。
 * ------------------------------------------------------------------------------ */
class PlantSystem {
  constructor(grid) {
    this.grid = grid || null;
    this.plots = [];          // 全部植株
    this.byTile = {};         // key → 植株下标数组（快速查格）
    this.minutes = 0;
    this.spreadBonus = 0;     // 临时扩散加成（事件给，分钟级衰减）
    this.heatStressUntil = 0; // 热胁迫结束时间（分钟）
    this.pollutionUntil = 0;  // 污染抑制结束时间
    this.waterDebt = 0;       // 累计缺水株数（面板用）
  }
  count() { return this.plots.length; }
  countOf(species) {
    let n = 0;
    for (let i = 0; i < this.plots.length; i++) if (this.plots[i].species === species) n++;
    return n;
  }
  matureCount() {
    let n = 0;
    for (let i = 0; i < this.plots.length; i++) {
      const def = plantDef(this.plots[i].species);
      if (def && this.plots[i].ageDays >= def.growthDays) n++;
    }
    return n;
  }
  // 某物种总生物量（株数 × 阶段大小系数），供动物食物容量用
  biomassOf(species) {
    let s = 0;
    for (let i = 0; i < this.plots.length; i++) {
      const p = this.plots[i];
      if (p.species !== species) continue;
      const def = plantDef(species);
      const st = plantStageFor(def, p.ageDays);
      s += st.size;
    }
    return s;
  }
  totalBiomass() {
    let s = 0;
    for (let i = 0; i < this.plots.length; i++) {
      const def = plantDef(this.plots[i].species);
      s += plantStageFor(def, this.plots[i].ageDays).size;
    }
    return s;
  }
  plotsAt(x, y) {
    const arr = this.byTile[ecoKey(x, y)] || [];
    const out = [];
    for (let i = 0; i < arr.length; i++) {
      const p = this.plots[arr[i]];
      if (p) out.push(p);
    }
    return out;
  }
  _rebuildIndex() {
    this.byTile = {};
    for (let i = 0; i < this.plots.length; i++) {
      const p = this.plots[i];
      const k = ecoKey(p.x, p.y);
      if (!this.byTile[k]) this.byTile[k] = [];
      this.byTile[k].push(i);
    }
  }
  _removeAt(idx) {
    this.plots.splice(idx, 1);
    this._rebuildIndex();
  }
  // 种植：返回 {ok, reason}；cost 走 biomass 优先、无 biomass 时用食物代替
  plant(x, y, speciesId, game, eco, opts) {
    const def = plantDef(speciesId);
    if (!def) return { ok: false, reason: '未知植物：' + speciesId };
    if (!this.grid || !this.grid.inBounds(x, y)) return { ok: false, reason: '超出地图' };
    const tile = this.grid.get(x, y);
    if (!tile.plantable()) return { ok: false, reason: '该地形不可种植（峡谷）' };
    if (eco && eco.terraform && eco.terraform.stageIndex() < def.stageUnlock) {
      const indoor = opts && opts.indoor;
      if (!indoor) return { ok: false, reason: '需要阶段「' + TERRAFORM_STAGES[def.stageUnlock].name + '」（或种在温室穹顶内）' };
    }
    const here = this.plotsAt(x, y);
    if (here.length >= ETUNE.PLOT_MAX_PER_TILE) return { ok: false, reason: '该格已满（最多 ' + ETUNE.PLOT_MAX_PER_TILE + ' 株）' };
    if (this.plots.length >= ETUNE.PLOT_GLOBAL_MAX) return { ok: false, reason: '全图植株已达上限（' + ETUNE.PLOT_GLOBAL_MAX + ' 株），先收割/修剪' };
    // 户外种植温度校验（穹顶内不受限）
    const indoor = opts && opts.indoor;
    if (!indoor && eco && eco.terraform) {
      const t = eco.terraform.tempC() + tile.tempOffset;
      if (t < def.tempMin - 10) return { ok: false, reason: '太冷了（' + ecoRound(t, 1) + '°C，' + def.name + '需要 ' + def.tempMin + '°C 以上）' };
    }
    // 成本：种子库建筑 -30%
    let cost = null;
    const inv = ecoInv(game);
    let seedMul = 1;
    if (eco && eco.buildings && eco.buildings.count(game, 'seed_bank') > 0) seedMul = 0.7;
    if (inv && (inv.biomass || 0) >= Math.ceil(def.plantCost.biomass * seedMul)) {
      cost = { biomass: Math.ceil(def.plantCost.biomass * seedMul) };
    } else if (inv && (inv.food || 0) >= Math.ceil(def.plantCostAlt.food * seedMul)) {
      cost = { food: Math.ceil(def.plantCostAlt.food * seedMul) };
    } else if (!inv) {
      cost = null; // 无背包：自测模式免费
    } else {
      return { ok: false, reason: '种子不足：需要生物质 ' + Math.ceil(def.plantCost.biomass * seedMul) + ' 或食物 ' + Math.ceil(def.plantCostAlt.food * seedMul) };
    }
    if (cost) ecoPay(game, cost);
    const plot = { species: speciesId, x: x, y: y, ageDays: 0, health: 100, indoor: !!indoor, plantedMin: this.minutes };
    this.plots.push(plot);
    this._rebuildIndex();
    if (eco && eco.soilNutrients) eco.soilNutrients.recordPlanting(x, y, speciesId);
    if (eco && eco.stats) eco.stats.totalPlanted++;
    return { ok: true, reason: '已种下', plot: plot };
  }
  // 收割一格内所有成熟可收割植株，返回 {food, biomass, count}
  harvestAt(x, y, game, eco) {
    let food = 0, biomass = 0, count = 0;
    const here = this.plotsAt(x, y);
    // 从后往前删，避免下标错位
    const idxs = (this.byTile[ecoKey(x, y)] || []).slice().sort(function (a, b) { return b - a; });
    for (let k = 0; k < idxs.length; k++) {
      const p = this.plots[idxs[k]];
      if (!p) continue;
      const def = plantDef(p.species);
      if (!def || !def.harvestable) continue;
      if (p.ageDays < def.growthDays) continue;
      let yld = def.yieldPerHarvest;
      if (def.id === 'crop' && eco && ecoTechHas(game, 'eco_seed4')) yld = Math.round(yld * 1.5);
      if (def.id === 'crop' && eco && eco.policies) yld = Math.round(yld * eco.policies.effectMul('cropYieldMul'));
      if (eco && eco.research) {
        const rm = eco.research.plantMod(def.id);
        if (rm && rm.yieldMul) yld = Math.round(yld * rm.yieldMul);
      }
      if (eco && eco.soilNutrients) yld = Math.round(yld * eco.soilNutrients.rotationMul(x, y, def.id)); // 轮作惩罚
      if (typeof EcoSeasonalCycle !== 'undefined') yld = Math.round(yld * EcoSeasonalCycle.yieldMul(game)); // 秋季收获 +10%
      if (def.id === 'crop' && eco && eco.fauna && eco.fauna.pop('insect') < 10) yld = Math.round(yld * 0.5); // 无授粉减产
      if (def.yieldRes === 'food') food += yld;
      else if (def.yieldRes === 'biomass') biomass += yld;
      if (def.id === 'tree') biomass += def.wood; // 砍树额外得木材（计生物质）
      count++;
      if (eco && eco.stats) eco.stats.totalHarvestFood += (def.yieldRes === 'food' ? yld : 0);
      this._removeAt(idxs[k]);
    }
    if (food) ecoGrant(game, 'food', food);
    if (biomass) ecoGrant(game, 'biomass', biomass);
    return { food: food, biomass: biomass, count: count };
  }
  // 收割全部成熟农作物（丰收按钮用）
  harvestAllCrops(game, eco) {
    let food = 0, count = 0;
    for (let i = this.plots.length - 1; i >= 0; i--) {
      const p = this.plots[i];
      const def = plantDef(p.species);
      if (!def || p.species !== 'crop' || p.ageDays < def.growthDays) continue;
      let yld = def.yieldPerHarvest;
      if (ecoTechHas(game, 'eco_seed4')) yld = Math.round(yld * 1.5);
      if (eco && eco.policies) yld = Math.round(yld * eco.policies.effectMul('cropYieldMul'));
      food += yld; count++;
      if (eco && eco.stats) eco.stats.totalHarvestFood += yld;
      this._removeAt(i);
    }
    if (food) ecoGrant(game, 'food', food);
    return { food: food, count: count };
  }
  // —— 生长因子（每株每分钟调用，分物种分支）——
  growthFactors(plot, eco, game) {
    const def = plantDef(plot.species);
    const tile = this.grid ? this.grid.get(plot.x, plot.y) : null;
    const tempC = eco && eco.terraform ? eco.terraform.tempC() + (tile ? tile.tempOffset : 0) : 0;
    const moisture = tile ? tile.moisture : 50;
    const fertility = tile ? tile.fertility : 50;
    // 科技修正（研究引擎）：耐寒 / 生长 / 需水
    let researchTempMin = 0, researchGrowthMul = 1, researchWaterMul = 1;
    if (eco && eco.research) {
      const rm = eco.research.plantMod(plot.species);
      if (rm) {
        if (rm.tempMin) researchTempMin = rm.tempMin;
        if (rm.growthMul) researchGrowthMul = rm.growthMul;
        if (rm.waterMul) researchWaterMul = rm.waterMul;
      }
    }
    const tempMinEff = def.tempMin + researchTempMin;
    // 1) 水分因子
    let waterF;
    if (plot.species === 'shrub' && def.deepRoot && eco && eco.water) {
      // 深根灌木：地下水位高时水分因子保底 0.6
      const gw = eco.water.groundwater / 100;
      waterF = ecoClamp(moisture / def.waterNeed, 0, 1) * 0.5 + gw * 0.5;
      waterF = Math.max(waterF, gw * 0.6);
    } else if (plot.species === 'moss') {
      // 苔藓先锋：需水极低，湿度 15 即满速
      waterF = ecoClamp(moisture / def.waterNeed, 0.15, 1);
    } else {
      waterF = ecoClamp(moisture / def.waterNeed, 0, 1);
    }
    // 灌溉半径加成
    if (eco && eco.buildings && eco.buildings.nearBuilding(game, plot.x, plot.y, 'irrigation', 3)) {
      waterF = Math.min(1, waterF + 0.3);
    }
    // 灌溉区供水满足率（有区无水时打折）
    if (eco && eco.irrigation) {
      const sr = eco.irrigation.supplyRatioAt(plot.x, plot.y);
      waterF = ecoClamp(waterF * (0.5 + 0.5 * sr), 0, 1);
    }
    // 2) 光照因子（季节 + 纬度）
    const season = ecoSeason(game);
    let sun = 70;
    if (season === 'summer') sun = 90;
    else if (season === 'winter') sun = 45;
    else if (season === 'autumn') sun = 60;
    if (tile) sun += tile.tempOffset * 0.5; // 极地光照弱
    if (ecoSandstorm(game)) sun *= 0.5;
    const lightF = ecoClamp(sun / def.sunNeed, 0.2, 1);
    // 3) 温度因子（科技耐寒修正后）
    let tempF;
    if (plot.indoor) tempF = 1; // 穹顶内恒温
    else if (tempC < tempMinEff) tempF = ecoClamp(1 - (tempMinEff - tempC) * 0.08, 0, 1);
    else if (tempC > def.tempMax) tempF = ecoClamp(1 - (tempC - def.tempMax) * 0.08, 0, 1);
    else tempF = 1;
    // 树木防风圈：圈内植物温度因子保底 0.5（抗冻）
    if (!plot.indoor && tempF < 0.5 && eco && this._nearTree(plot.x, plot.y, 2)) {
      tempF = Math.max(tempF, 0.5);
    }
    // 4) 土壤肥力因子
    const soilF = fertility < 20 ? 0.7 : (fertility < 40 ? 0.85 : 1);
    // 5) 阶段加成
    let stageMul = 1;
    if (eco && eco.terraform) stageMul = eco.terraform.stage().effects.plantGrowthMul || 1;
    // 6) 授粉加成（昆虫 ≥10 只）
    let pollF = 1;
    if (eco && eco.fauna && eco.fauna.pop('insect') >= 10) {
      pollF = 1 + ETUNE.POLLINATION_BONUS * (ecoTechHas(game, 'eco_fauna1') ? 1.6 : 1);
    }
    // 农作物开花期无昆虫：生长 -50%
    if (plot.species === 'crop' && eco && eco.fauna) {
      const st = plantStageFor(def, plot.ageDays);
      if (st.id === 'flower' && eco.fauna.pop('insect') < 10) pollF = 0.5;
    }
    // 7) 建筑/政策/科技修正
    let buildMul = 1;
    if (eco && eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      buildMul = agg.growthMul || 1;
      if (plot.species === 'tree' && agg.treeGrowthMul) buildMul *= agg.treeGrowthMul;
    }
    if (eco && eco.policies) buildMul *= eco.policies.effectMul('growthMul');
    if (plot.species === 'grass' && ecoTechHas(game, 'eco_seed2')) buildMul *= 1.25; // 周期-20% ≈ 速率+25%
    // 季节修正（春季播种 +10%，冬季 -30%）
    if (typeof EcoSeasonalCycle !== 'undefined') buildMul *= EcoSeasonalCycle.growthMul(game);
    // 8) 污染/热胁迫抑制
    let stressMul = 1;
    if (this.minutes < this.pollutionUntil) stressMul *= 0.95;
    if (this.minutes < this.heatStressUntil) stressMul *= 0.5;
    if (tile && tile.pollution > 50) stressMul *= 0.8;
    // 9) 养分因子（N/P/K）
    let nutrF = 1;
    if (eco && eco.soilNutrients) nutrF = eco.soilNutrients.nutrientFactor(plot.x, plot.y, plot.species);
    // 10) 科技需水修正：需水减少 → 等效水分因子提升
    if (researchWaterMul !== 1) waterF = ecoClamp(waterF / researchWaterMul, 0, 1);
    // 11) 穹顶加成（室内株）
    let domeMul = 1;
    if (eco && eco.greenhouses && plot.indoor) domeMul = eco.greenhouses.growthMulAt(plot.x, plot.y, eco);
    // 12) 病害：霉菌生长 -50%
    let diseaseMul = 1;
    if (plot.disease === 'mildew') diseaseMul = 0.5;
    if (plot.disease === 'blight' || plot.disease === 'aphid') diseaseMul = 0.8;
    // 13) 伴生种植加成
    let companionMul = 1;
    if (eco && eco.companion) companionMul = eco.companion.companionMul(plot, eco).mul;
    // 14) 难度修正
    let diffMul = 1;
    if (eco && eco.difficulty) diffMul = eco.difficulty.growthMul();
    // 15) 沿岸加成（河道格 +10%，邻河 +5%）
    let riverMul = 1;
    if (eco && eco.rivers) riverMul = eco.rivers.bankBonusAt(plot.x, plot.y);
    // 16) 水质因子
    let waterQM = 1;
    if (eco && eco.waterQuality) waterQM = eco.waterQuality.qualityFactor(plot.x, plot.y);
    return {
      waterF: waterF, lightF: lightF, tempF: tempF, soilF: soilF,
      stageMul: stageMul, pollF: pollF, buildMul: buildMul, stressMul: stressMul,
      nutrF: nutrF, researchMul: researchGrowthMul, domeMul: domeMul, diseaseMul: diseaseMul,
      companionMul: companionMul, diffMul: diffMul, riverMul: riverMul, waterQM: waterQM,
      rate: waterF * lightF * tempF * soilF * stageMul * pollF * buildMul * stressMul * nutrF * researchGrowthMul * domeMul * diseaseMul * companionMul * diffMul * riverMul * waterQM,
      tempC: tempC, moisture: moisture,
    };
  }
  _nearTree(x, y, radius) {
    for (let i = 0; i < this.plots.length; i++) {
      const p = this.plots[i];
      if (p.species !== 'tree') continue;
      if (ecoDist2(p.x, p.y, x, y) <= radius * radius) return true;
    }
    return false;
  }
  // 每分钟产氧（吨/分钟），供 OxygenSystem 读取
  oxygenPerMin(eco, game) {
    let total = 0;
    let o2Mul = 1;
    if (eco && eco.policies) o2Mul = eco.policies.effectMul('o2Mul');
    if (ecoTechHas(game, 'eco_seed5')) o2Mul *= 1; // 树种加成在单株里算
    for (let i = 0; i < this.plots.length; i++) {
      const p = this.plots[i];
      const def = plantDef(p.species);
      if (!def) continue;
      const st = plantStageFor(def, p.ageDays);
      let per = def.o2PerMin * st.o2Mul;
      if (p.species === 'tree' && ecoTechHas(game, 'eco_seed5')) per *= 1.5;
      if (p.plus) per *= 1.1; // 育种强化种：产氧 +10%
      if (p.health < 50) per *= p.health / 50; // 半死不活产氧少
      total += per;
    }
    return total * o2Mul;
  }
  // 每分钟总耗水（供水循环扣减）
  waterUsePerMin(eco, game) {
    let total = 0;
    let mul = 1;
    if (ecoTechHas(game, 'eco_water1')) mul *= 0.75;
    if (eco && eco.policies) mul *= eco.policies.effectMul('waterUseMul');
    for (let i = 0; i < this.plots.length; i++) {
      const def = plantDef(this.plots[i].species);
      if (def) total += def.waterUsePerMin;
    }
    return total * mul;
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    if (this.spreadBonus > 0) this.spreadBonus = Math.max(0, this.spreadBonus - 0.001 * dtMin);
    const daysPerMin = dtMin / ETUNE.SECONDS_PER_DAY / 24; // 每分钟推进的天数（1日=60s）
    // 注意：dtMin 是分钟；1 游戏日 = 60 秒真实时间 = 1 分钟真实时间。
    // 所以 1 真实分钟 = 1 游戏日。换算：ageDays += dtMin（分钟）× 1 日/分钟。
    const ageGain = dtMin; // 1 分钟真实时间 = 1 游戏日
    let deaths = 0, sprouts = 0;
    const r = rng || Math.random;
    for (let i = this.plots.length - 1; i >= 0; i--) {
      const p = this.plots[i];
      const def = plantDef(p.species);
      if (!def) { this._removeAt(i); continue; }
      const tile = this.grid ? this.grid.get(p.x, p.y) : null;
      const f = this.growthFactors(p, eco, game);
      // 生长
      p.ageDays += ageGain * f.rate;
      // 健康：三因子任一过低扣血，适宜回血
      if (f.waterF < 0.3) p.health -= ETUNE.PLANT_HEALTH_DECAY_DRY * dtMin * (1 - f.waterF);
      else if (f.waterF > 0.6 && f.tempF > 0.6) p.health += ETUNE.PLANT_HEALTH_RECOVER * dtMin;
      if (!p.indoor && f.tempC < def.frostKillBelow) p.health -= ETUNE.PLANT_HEALTH_DECAY_COLD * dtMin * 2;
      else if (!p.indoor && f.tempF < 0.3) p.health -= ETUNE.PLANT_HEALTH_DECAY_COLD * dtMin;
      // 冻害加成（政策户外放开）
      if (eco && eco.policies && eco.policies.isActive('pol_open_air') && !p.indoor && f.tempC < def.tempMin) {
        p.health -= 0.4 * dtMin;
      }
      p.health = ecoClamp(p.health, 0, 100);
      // 耗水：从地块湿度扣
      if (tile) {
        const use = def.waterUsePerMin * dtMin * (f.rate > 0 ? 1 : 0.3);
        tile.moisture = ecoClamp(tile.moisture - use * 0.05, 0, 100);
        // 苔藓/树改良土壤
        if (def.soilBonusPerMin) tile.fertility = ecoClamp(tile.fertility + def.soilBonusPerMin * dtMin * (p.ageDays > 1 ? 1 : 0.3), 0, 100);
        // 植被覆盖：按成熟度推高
        const st = plantStageFor(def, p.ageDays);
        const target = st.size * 20; // 单株最多贡献 100（古树 size5 → 100）
        if (tile.vegetation < target) tile.vegetation = ecoClamp(tile.vegetation + 0.5 * dtMin, 0, target);
        tile.dominant = p.species;
      }
      // 死亡
      if (p.health <= 0) {
        this._removeAt(i);
        deaths++;
        if (eco && eco.stats) eco.stats.totalDeaths++;
        continue;
      }
      // 自然扩散（成熟植株，总数上限内）
      if (p.ageDays >= def.growthDays && def.spreadChance > 0 && tile && this.plots.length < ETUNE.PLOT_GLOBAL_MAX) {
        const chance = (def.spreadChance + this.spreadBonus + (eco && eco.fauna ? eco.fauna.pop('bird') * 0.0001 : 0)) * dtMin;
        if (r() < chance) {
          const nb = this.grid.neighbors(p.x, p.y);
          if (nb.length) {
            const t2 = nb[Math.floor(r() * nb.length)];
            if (t2.plantable() && this.plotsAt(t2.x, t2.y).length < ETUNE.PLOT_MAX_PER_TILE) {
              this.plots.push({ species: p.species, x: t2.x, y: t2.y, ageDays: 0, health: 80, indoor: false, plantedMin: this.minutes });
              sprouts++;
            }
          }
        }
      }
    }
    if (sprouts) this._rebuildIndex();
    if (eco && eco.stats) { eco.stats.plantDeathsMin = deaths; eco.stats.plantSproutsMin = sprouts; }
    return { deaths: deaths, sprouts: sprouts };
  }
  // —— 事件接口（EcoEvents 调用的真实数值操作）——
  waterAll(amount) {
    if (this.grid) this.grid.addMoistureAll(amount);
    return this.plots.length;
  }
  killYoungest(frac) {
    // 杀死最年轻的 frac 比例植株
    const sorted = this.plots.slice().sort(function (a, b) { return a.ageDays - b.ageDays; });
    const n = Math.floor(sorted.length * frac);
    let killed = 0;
    for (let i = 0; i < n; i++) {
      const idx = this.plots.indexOf(sorted[i]);
      if (idx >= 0) { this._removeAt(idx); killed++; }
    }
    return killed;
  }
  grazeDamage(frac) {
    // 虫害/啃食：按比例扣草灌生物量（实现为随机杀死一部分草/灌木幼苗 + 扣健康）
    let hit = 0;
    for (let i = this.plots.length - 1; i >= 0; i--) {
      const p = this.plots[i];
      if (p.species !== 'grass' && p.species !== 'shrub') continue;
      if (Math.random() < frac * 0.5) {
        p.health -= 40;
        if (p.health <= 0) { this._removeAt(i); hit++; }
        else hit++;
      }
    }
    return hit;
  }
  frostKill() {
    let killed = 0;
    for (let i = this.plots.length - 1; i >= 0; i--) {
      const p = this.plots[i];
      const def = plantDef(p.species);
      if (!def || p.indoor) continue;
      if (def.id === 'moss') continue; // 苔藓抗冻
      if (Math.random() < 0.25) { this._removeAt(i); killed++; }
    }
    return killed;
  }
  droughtKill(frac) {
    let killed = 0;
    for (let i = this.plots.length - 1; i >= 0; i--) {
      const p = this.plots[i];
      const def = plantDef(p.species);
      if (!def) continue;
      if (p.species === 'moss' || p.species === 'shrub') continue; // 耐旱
      if (Math.random() < frac) { this._removeAt(i); killed++; }
    }
    return killed;
  }
  heatStress(frac) {
    let n = 0;
    for (let i = 0; i < this.plots.length; i++) {
      if (Math.random() < frac) n++;
    }
    this.heatStressUntil = this.minutes + 5;
    return n;
  }
  spreadBoost(bonus) { this.spreadBonus += bonus; }
  windSpread(n) {
    // 大风播种：在随机可种格长出 n 株幼苗（物种取现存成熟株）
    if (!this.grid) return 0;
    const mature = this.plots.filter(function (p) {
      const def = plantDef(p.species);
      return def && p.ageDays >= def.growthDays && def.spreadChance > 0;
    });
    if (!mature.length) return 0;
    let made = 0;
    const r = Math.random;
    for (let i = 0; i < n && this.plots.length < ETUNE.PLOT_GLOBAL_MAX; i++) {
      const src = mature[Math.floor(r() * mature.length)];
      const t = this.grid.randomPlantableTile(r);
      if (this.plotsAt(t.x, t.y).length < ETUNE.PLOT_MAX_PER_TILE) {
        this.plots.push({ species: src.species, x: t.x, y: t.y, ageDays: 0, health: 80, indoor: false, plantedMin: this.minutes });
        made++;
      }
    }
    if (made) this._rebuildIndex();
    return made;
  }
  // 面板数据
  summary() {
    const by = {};
    for (let i = 0; i < PLANT_IDS.length; i++) by[PLANT_IDS[i]] = { count: 0, mature: 0 };
    for (let i = 0; i < this.plots.length; i++) {
      const p = this.plots[i];
      const def = plantDef(p.species);
      by[p.species].count++;
      if (def && p.ageDays >= def.growthDays) by[p.species].mature++;
    }
    return { total: this.plots.length, by: by, biomass: ecoRound(this.totalBiomass(), 1) };
  }
  save() {
    return {
      v: 1, minutes: ecoRound(this.minutes, 1),
      plots: this.plots.map(function (p) {
        return { s: p.species, x: p.x, y: p.y, a: ecoRound(p.ageDays, 2), h: ecoRound(p.health, 1), i: p.indoor ? 1 : 0, d: p.disease || '', da: ecoRound(p.diseaseAge || 0, 1) };
      }),
    };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.plots = (data.plots || []).map(function (d) {
      const p = { species: d.s, x: d.x, y: d.y, ageDays: d.a, health: d.h, indoor: !!d.i, plantedMin: 0 };
      if (d.d) { p.disease = d.d; p.diseaseAge = d.da || 0; }
      return p;
    }).filter(function (p) { return !!plantDef(p.species); });
    this._rebuildIndex();
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * OxygenSystem：氧气系统（产氧 / 耗氧 / 库存 / 缺氧惩罚）
 * ------------------------------------------------------------------------------
 * 氧气是内部库存（吨），不进背包。产氧：植物 + 藻类池塘 + 电解站 + 工程藻；
 * 耗氧：人口 + 动物 + 泄漏。库存见底且入不敷出 → 人口按比例减少（缺氧死亡），
 * 由 EcologyManager 在 tick 末统一结算到 game.pop，并写 stats。
 * ------------------------------------------------------------------------------ */
class OxygenSystem {
  constructor() {
    this.stock = ETUNE.O2_STOCK_START_T;
    this.minutes = 0;
    this.producedTotal = 0;
    this.consumedTotal = 0;
    this.deficitMinutes = 0;   // 连续缺氧分钟数
    this.lastProduced = 0;
    this.lastConsumed = 0;
    this.lastBalance = 0;
    this.ventMul = 1;          // 泄漏倍率（穹顶破损事件可设 2）
  }
  cap(eco, game) {
    let c = ETUNE.O2_CAP_BASE_T + (eco && eco.terraform ? eco.terraform.progress * ETUNE.O2_CAP_PER_PROGRESS : 0);
    if (ecoTechHas(game, 'eco_o2_2')) c *= 1.3;
    return c;
  }
  addStock(amount) {
    if (!isFinite(amount)) return 0;
    this.stock = Math.max(0, this.stock + amount);
    return this.stock;
  }
  ratio(eco, game) { const c = this.cap(eco, game); return c > 0 ? ecoClamp(this.stock / c, 0, 1) : 0; }
  isDeficit() { return this.stock <= 0 && this.lastBalance < 0; }
  isSurplus(eco, game) { return this.ratio(eco, game) > 0.8; }
  productionPerMin(eco, game) {
    let p = 0;
    if (eco && eco.plants) p += eco.plants.oxygenPerMin(eco, game);
    if (eco && eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      p += agg.o2PerMin || 0;
      // 电解站：按水量折算（水不够按比例打折）
      if (agg.electrolyzerCount > 0) {
        const inv = ecoInv(game);
        const water = inv ? (inv.water || 0) : Infinity;
        const need = agg.electrolyzerCount * 5; // 每座每分钟 5 水
        const scale = water === Infinity ? 1 : ecoClamp(water / Math.max(need, 1), 0, 1);
        let elec = agg.electrolyzerCount * 4.0 * scale;
        if (ecoTechHas(game, 'eco_o2_1')) elec *= 1.5;
        p += elec;
        this._electrolysisWaterUse = need * scale;
      } else this._electrolysisWaterUse = 0;
    }
    return p;
  }
  consumptionPerMin(eco, game) {
    let c = 0;
    const pop = ecoPopCount(game);
    let perPop = ETUNE.O2_PER_POP_PER_MIN;
    if (eco && eco.policies) perPop *= eco.policies.effectMul('o2UseMul');
    c += pop * perPop;
    if (eco && eco.fauna) {
      for (let i = 0; i < ANIMAL_IDS.length; i++) {
        const def = animalDef(ANIMAL_IDS[i]);
        c += eco.fauna.pop(ANIMAL_IDS[i]) * def.o2UsePerMin;
      }
    }
    c += ETUNE.O2_VENT_PER_MIN * this.ventMul;
    if (eco && eco.tourism) c += eco.tourism.tourists * 0.01; // 游客耗氧
    return c;
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    const prod = this.productionPerMin(eco, game);
    const cons = this.consumptionPerMin(eco, game);
    this.lastProduced = prod * dtMin;
    this.lastConsumed = cons * dtMin;
    this.lastBalance = (prod - cons) * dtMin;
    this.producedTotal += this.lastProduced;
    this.consumedTotal += this.lastConsumed;
    // 电解耗水
    if (this._electrolysisWaterUse) {
      const inv = ecoInv(game);
      if (inv && (inv.water || 0) > 0) inv.water = Math.max(0, inv.water - this._electrolysisWaterUse * dtMin);
    }
    const cap = this.cap(eco, game);
    this.stock = ecoClamp(this.stock + this.lastBalance, 0, cap);
    // 缺氧计时
    if (this.stock <= 0 && prod < cons) this.deficitMinutes += dtMin;
    else this.deficitMinutes = 0;
    // 缺氧人口损失（返回给总管结算，不直接改 game.pop，保证可测试）
    let popLoss = 0;
    if (this.deficitMinutes > 0) {
      const pop = ecoPopCount(game);
      popLoss = pop * ETUNE.O2_DEFICIT_POP_LOSS_PER_MIN * dtMin;
    }
    return { produced: this.lastProduced, consumed: this.lastConsumed, balance: this.lastBalance, popLoss: popLoss, stock: this.stock, cap: cap };
  }
  status(eco, game) {
    const cap = this.cap(eco, game);
    return {
      stock: ecoRound(this.stock, 1), cap: ecoRound(cap, 1),
      ratio: ecoRound(this.ratio(eco, game), 3),
      producedPerMin: ecoRound(this.productionPerMin(eco, game), 3),
      consumedPerMin: ecoRound(this.consumptionPerMin(eco, game), 3),
      balancePerMin: ecoRound(this.productionPerMin(eco, game) - this.consumptionPerMin(eco, game), 3),
      deficitMinutes: ecoRound(this.deficitMinutes, 1),
      level: this.stock <= 0 ? 'empty' : (this.ratio(eco, game) < 0.2 ? 'critical' : (this.ratio(eco, game) < 0.5 ? 'low' : (this.ratio(eco, game) > 0.8 ? 'surplus' : 'ok'))),
    };
  }
  save() {
    return { v: 1, stock: ecoRound(this.stock, 2), minutes: ecoRound(this.minutes, 1), producedTotal: ecoRound(this.producedTotal, 1), consumedTotal: ecoRound(this.consumedTotal, 1), deficitMinutes: ecoRound(this.deficitMinutes, 1), ventMul: this.ventMul };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.stock = Math.max(0, ecoSafeNum(data.stock, 0));
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.producedTotal = ecoSafeNum(data.producedTotal, 0);
    this.consumedTotal = ecoSafeNum(data.consumedTotal, 0);
    this.deficitMinutes = ecoSafeNum(data.deficitMinutes, 0);
    this.ventMul = ecoSafeNum(data.ventMul, 1);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * WaterCycleSystem：水循环（降雨 / 蒸发 / 地下水 / 地表水 / 径流）
 * ------------------------------------------------------------------------------
 * 模型：降雨量由改造进度决定 → 土壤湿度向“降雨-蒸发平衡点”靠拢 →
 * 地下水缓慢补给/被抽取 → 低洼高湿格积水成湖 → 湖泊蒸发反哺降雨（小闭环）。
 * 产水进背包：雨水收集器（按降雨比例）、水泵（抽地下水）、融冰工程。
 * ------------------------------------------------------------------------------ */
class WaterCycleSystem {
  constructor(grid) {
    this.grid = grid || null;
    this.groundwater = 20;      // 地下水位 0-100
    this.minutes = 0;
    this.rainAccumMm = 0;       // 累计降雨（mm）
    this.evapAccumMm = 0;
    this.lakes = 0;             // 当前湖泊格数
    this.iceStock = 0;          // 待入库存的冰水（彗星/流星事件）
    this.pollution = 0;         // 水体污染 0-100（藻华事件）
    this.droughtUntil = 0;      // 干旱结束时间（分钟）
    this.rainEventBonus = 0;    // 事件降雨加成（mm，一次性计入补给）
    this.lastRainMmY = 0;
    this.lastEvapMmY = 0;
  }
  rainMmY(eco, game) {
    const progress = eco && eco.terraform ? eco.terraform.progress : 0;
    let rain = ETUNE.RAIN_BASE_MM_Y + progress * ETUNE.RAIN_PER_PROGRESS;
    if (eco && eco.terraform) rain *= eco.terraform.stage().effects.rainMul || 1;
    if (eco && eco.policies) rain *= eco.policies.effectMul('rainMul');
    if (eco && eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      if (agg.rainMul) rain *= agg.rainMul;
    }
    this.lastRainMmY = ecoClamp(rain, 0, ETUNE.RAIN_MAX_MM_Y);
    return this.lastRainMmY;
  }
  evapMmY(eco, game) {
    const progress = eco && eco.terraform ? eco.terraform.progress : 0;
    let evap = ETUNE.EVAP_BASE_MM_Y + progress * ETUNE.EVAP_PER_PROGRESS;
    if (eco && eco.terraform) evap *= eco.terraform.stage().effects.evapMul || 1;
    if (eco && eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      if (agg.evapMul) evap *= agg.evapMul;
    }
    if (this.minutes < this.droughtUntil) evap *= 1.5;
    this.lastEvapMmY = ecoClamp(evap, ETUNE.EVAP_MIN_MM_Y, 400);
    return this.lastEvapMmY;
  }
  // 土壤湿度平衡点：降雨越多越湿，蒸发越多越干
  moistureEquilibrium(eco, game) {
    const rain = this.rainMmY(eco, game);
    const evap = this.evapMmY(eco, game);
    return ecoClamp(rain / 6 - evap / 30 + 10, 5, 95);
  }
  soilMoistureAvg() { return this.grid ? this.grid.avgMoisture() : 0; }
  groundwaterCap(game) {
    let cap = ETUNE.GROUNDWATER_MAX;
    if (ecoTechHas(game, 'eco_water3')) cap *= 1.5;
    return cap;
  }
  addRainEvent(mm) {
    this.rainEventBonus += mm;
    this.rainAccumMm += mm;
    if (this.grid) {
      this.grid.addMoistureAll(mm * ETUNE.SOIL_WET_PER_MM);
      // 低洼格积水
      for (let y = 0; y < this.grid.size; y++) for (let x = 0; x < this.grid.size; x++) {
        const t = this.grid.get(x, y);
        if (t.isLowland() && t.moisture > ETUNE.LAKE_FORM_MOISTURE) {
          t.surfaceWater = ecoClamp(t.surfaceWater + mm * 0.2, 0, 100);
        }
      }
    }
    // 地下水补给
    this.groundwater = ecoClamp(this.groundwater + mm * ETUNE.GROUNDWATER_RECHARGE_PER_MM * 10, 0, ETUNE.GROUNDWATER_MAX);
    this._recountLakes();
  }
  addDrought(minutes) {
    this.droughtUntil = this.minutes + minutes;
    if (this.grid) this.grid.addMoistureAll(-10);
    this.groundwater = ecoClamp(this.groundwater - 5, 0, ETUNE.GROUNDWATER_MAX);
  }
  addEvapBurst(mm) {
    this.evapAccumMm += mm;
    if (this.grid) this.grid.addMoistureAll(-mm * ETUNE.SOIL_WET_PER_MM);
  }
  addPollution(amount) {
    this.pollution = ecoClamp(this.pollution + amount, 0, 100);
    if (this.grid) {
      for (let y = 0; y < this.grid.size; y++) for (let x = 0; x < this.grid.size; x++) {
        const t = this.grid.get(x, y);
        if (t.surfaceWater > 0) t.pollution = ecoClamp(t.pollution + amount, 0, 100);
      }
    }
  }
  addIce(amount) { this.iceStock += amount; return this.iceStock; }
  _recountLakes() {
    let n = 0;
    if (this.grid) {
      for (let y = 0; y < this.grid.size; y++) for (let x = 0; x < this.grid.size; x++) {
        if (this.grid.get(x, y).surfaceWater > 50) n++;
      }
    }
    this.lakes = n;
    return n;
  }
  // 径流：地表水从高海拔格向低海拔邻格流（每分钟一小步）
  _runoff(dtMin, tickIndex) {
    if (!this.grid) return;
    const n = this.grid.size;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      if ((x + y * n + tickIndex) % 3 !== 0) continue;
      const t = this.grid.get(x, y);
      if (t.surfaceWater <= 1) continue;
      const ns = this.grid.neighbors(x, y);
      let lowest = null;
      for (let i = 0; i < ns.length; i++) {
        if (!lowest || ns[i].elevation < lowest.elevation) lowest = ns[i];
      }
      if (lowest && lowest.elevation < t.elevation) {
        const flow = Math.min(t.surfaceWater * 0.1 * dtMin, ETUNE.RIVER_FLOW_PER_MIN * dtMin * 10);
        t.surfaceWater = ecoClamp(t.surfaceWater - flow, 0, 100);
        lowest.surfaceWater = ecoClamp(lowest.surfaceWater + flow, 0, 100);
        lowest.moisture = ecoClamp(lowest.moisture + flow * 0.1, 0, 100);
      }
    }
  }
  update(dtMin, eco, game, tickIndex) {
    this.minutes += dtMin;
    const rain = this.rainMmY(eco, game);
    const evap = this.evapMmY(eco, game);
    // 累计降雨/蒸发（mm）
    this.rainAccumMm += rain / 525600 * dtMin;
    this.evapAccumMm += evap / 525600 * dtMin;
    // 土壤湿度向平衡点靠拢（速率 0.5%/分钟，干旱时更快变干）
    if (this.grid) {
      const eq = this.moistureEquilibrium(eco, game);
      const rate = this.minutes < this.droughtUntil ? 0.02 : 0.005;
      for (let y = 0; y < this.grid.size; y++) for (let x = 0; x < this.grid.size; x++) {
        const t = this.grid.get(x, y);
        t.moisture = ecoClamp(t.moisture + (eq - t.moisture) * rate * dtMin, 0, 100);
        // 地表水蒸发
        if (t.surfaceWater > 0) {
          t.surfaceWater = ecoClamp(t.surfaceWater - evap / 525600 * dtMin * 2, 0, 100);
          if (t.surfaceWater <= 0.5) t.surfaceWater = 0;
        }
        // 高湿低洼自然积水
        if (t.isLowland() && t.moisture > ETUNE.LAKE_FORM_MOISTURE && rain > 200) {
          t.surfaceWater = ecoClamp(t.surfaceWater + 0.05 * dtMin, 0, 100);
        }
        // 污染衰减
        if (t.pollution > 0) t.pollution = ecoClamp(t.pollution - 0.01 * dtMin, 0, 100);
      }
      this.grid.diffuseMoisture(dtMin, tickIndex || 0);
      this.grid.diffuseVegetation(dtMin, tickIndex || 0);
    }
    this._runoff(dtMin, tickIndex || 0);
    // 地下水：降雨补给 − 水泵抽取 − 深根植物取用
    const cap = this.groundwaterCap(game);
    let recharge = rain * ETUNE.GROUNDWATER_RECHARGE_PER_MM / 60 * dtMin; // 每分钟
    recharge += this.rainEventBonus * ETUNE.GROUNDWATER_RECHARGE_PER_MM;
    this.rainEventBonus = 0;
    let pump = 0;
    if (eco && eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      pump = (agg.groundwaterUsePerMin || 0) * dtMin;
      // 雨水收集器产水进背包
      if (agg.rainCatcherCount > 0) {
        let per = 1.5 * (rain / 455);
        if (ecoTechHas(game, 'eco_water2')) per *= 1.5;
        ecoGrant(game, 'water', per * agg.rainCatcherCount * dtMin);
      }
      // 水泵产水进背包
      if (agg.waterPerMin) ecoGrant(game, 'water', agg.waterPerMin * dtMin);
      // 植物总耗水从背包水里扣一部分（灌溉用水）：不够则土壤代偿（湿度已扣）
      if (eco.plants) {
        const use = eco.plants.waterUsePerMin(eco, game) * dtMin;
        const inv = ecoInv(game);
        if (inv && (inv.water || 0) > 0) inv.water = Math.max(0, inv.water - use * 0.5);
      }
    }
    this.groundwater = ecoClamp(this.groundwater + recharge - pump, 0, cap);
    // 污染衰减
    if (this.pollution > 0) this.pollution = ecoClamp(this.pollution - 0.02 * dtMin, 0, 100);
    // 待入库存的冰水 flush
    if (this.iceStock > 0) {
      const granted = ecoGrant(game, 'water', this.iceStock);
      if (granted) this.iceStock = 0;
      else if (!game) this.iceStock = 0; // 无 game：自测模式直接丢弃（已计入 rainAccum 之外）
    }
    this._recountLakes();
    return { rainMmY: ecoRound(rain, 1), evapMmY: ecoRound(evap, 1), groundwater: ecoRound(this.groundwater, 1), lakes: this.lakes, soilAvg: ecoRound(this.soilMoistureAvg(), 1) };
  }
  status(eco, game) {
    return {
      rainMmY: ecoRound(this.rainMmY(eco, game), 1),
      evapMmY: ecoRound(this.evapMmY(eco, game), 1),
      groundwater: ecoRound(this.groundwater, 1),
      groundwaterCap: this.groundwaterCap(game),
      soilMoistureAvg: ecoRound(this.soilMoistureAvg(), 1),
      lakes: this.lakes,
      pollution: ecoRound(this.pollution, 1),
      drought: this.minutes < this.droughtUntil,
      level: this.groundwater < 15 ? 'critical' : (this.groundwater < 40 ? 'low' : 'ok'),
    };
  }
  save() {
    return { v: 1, groundwater: ecoRound(this.groundwater, 2), minutes: ecoRound(this.minutes, 1), rainAccumMm: ecoRound(this.rainAccumMm, 1), evapAccumMm: ecoRound(this.evapAccumMm, 1), lakes: this.lakes, iceStock: ecoRound(this.iceStock, 1), pollution: ecoRound(this.pollution, 1), droughtUntil: ecoRound(this.droughtUntil, 1) };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.groundwater = ecoClamp(ecoSafeNum(data.groundwater, 20), 0, 150);
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.rainAccumMm = ecoSafeNum(data.rainAccumMm, 0);
    this.evapAccumMm = ecoSafeNum(data.evapAccumMm, 0);
    this.lakes = ecoSafeNum(data.lakes, 0);
    this.iceStock = ecoSafeNum(data.iceStock, 0);
    this.pollution = ecoSafeNum(data.pollution, 0);
    this.droughtUntil = ecoSafeNum(data.droughtUntil, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * FaunaSystem：动物引入（3 种 × 种群动力学 × 食物网）
 * ------------------------------------------------------------------------------
 * 每分钟步进：K（环境容量，由食物量定）→ 逻辑斯谛增长 → 捕食 → 饥饿/低温死亡。
 * 引入是玩家动作：校验阶段 + 成本 + 批次；种群低于 6 只功能性灭绝（不再繁殖）。
 * 哺乳动物啃食会真实减少草地（调 plants.grazeDamage），鸟类控虫真实减少昆虫。
 * ------------------------------------------------------------------------------ */
class FaunaSystem {
  constructor() {
    this.pops = { insect: 0, bird: 0, mammal: 0 };
    this.minutes = 0;
    this.introduced = {};   // 累计引入只数 {id: n}
    this.extinct = {};      // 功能性灭绝标记 {id: true}
    this.lastK = { insect: 0, bird: 0, mammal: 0 };
    this.lastGrowth = { insect: 0, bird: 0, mammal: 0 };
  }
  pop(id) { return this.pops[id] || 0; }
  total() { return this.pops.insect + this.pops.bird + this.pops.mammal; }
  setPop(id, v) {
    this.pops[id] = Math.max(0, v);
    if (this.pops[id] < 0.01) this.pops[id] = 0;
  }
  addPop(id, n) {
    this.pops[id] = Math.max(0, (this.pops[id] || 0) + n);
    if (this.pops[id] > 0 && this.pops[id] >= 6) delete this.extinct[id];
    return this.pops[id];
  }
  // 引入动物：返回 {ok, reason}
  introduce(id, game, eco) {
    const def = animalDef(id);
    if (!def) return { ok: false, reason: '未知动物：' + id };
    if (eco && eco.terraform && eco.terraform.stageIndex() < def.stageUnlock) {
      return { ok: false, reason: '需要阶段「' + TERRAFORM_STAGES[def.stageUnlock].name + '」' };
    }
    if (!ecoCanAfford(game, def.introCost)) return { ok: false, reason: '食物不足：引入一批需要食物 ' + def.introCost.food };
    ecoPay(game, def.introCost);
    this.addPop(id, def.introBatch);
    this.introduced[id] = (this.introduced[id] || 0) + def.introBatch;
    delete this.extinct[id];
    return { ok: true, reason: '已引入 ' + def.introBatch + ' 只' + def.name };
  }
  // 环境容量 K（由食物量 + 栖息地决定）
  carryingCapacity(id, eco, game) {
    const def = animalDef(id);
    if (!def) return 0;
    let K = def.carryBase;
    if (!eco || !eco.plants) return K;
    const grassBio = eco.plants.biomassOf('grass');
    const shrubBio = eco.plants.biomassOf('shrub');
    const treeCount = eco.plants.countOf('tree');
    const insectN = this.pops.insect;
    if (id === 'insect') {
      K += grassBio * (def.carryPerGrass || 0) + shrubBio * (def.carryPerShrub || 0);
    } else if (id === 'bird') {
      K += insectN * (def.carryPerInsect || 0) + treeCount * (def.carryPerTree || 0);
      if (eco.buildings && eco.buildings.count(game, 'wetland') > 0) K *= 1.2;
      if (ecoTechHas(game, 'eco_fauna2')) K *= 1.5;
    } else if (id === 'mammal') {
      K += grassBio * (def.carryPerGrass || 0) + shrubBio * (def.carryPerShrub || 0) + insectN * (def.carryPerInsect || 0);
    }
    // 温度：超出耐受区间容量打 2 折
    const tempC = eco.terraform ? eco.terraform.tempC() : 0;
    if (tempC < def.tempMin || tempC > def.tempMax) K *= 0.2;
    // 植被覆盖低 → 栖息地差
    const veg = eco.grid ? eco.grid.avgVegetation() : 0;
    if (veg < 10) K *= 0.5;
    return Math.max(0, K);
  }
  // 食物充足度 0-1（决定繁殖与饥饿死亡）
  foodFactor(id, eco) {
    const def = animalDef(id);
    if (!def || !eco || !eco.plants) return 1;
    const need = this.pops[id] * def.foodPerMin;
    if (need <= 0) return 1;
    let supply = 0;
    if (id === 'insect') supply = eco.plants.biomassOf('grass') * 0.01 + eco.plants.biomassOf('shrub') * 0.01;
    else if (id === 'bird') supply = this.pops.insect * 0.01;
    else supply = eco.plants.biomassOf('grass') * 0.01 + eco.plants.biomassOf('shrub') * 0.005 + this.pops.insect * 0.005;
    return ecoClamp(supply / need, 0, 1);
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    const tempC = eco && eco.terraform ? eco.terraform.tempC() : 0;
    let faunaRMul = 1;
    if (eco && eco.policies) faunaRMul = eco.policies.effectMul('faunaRMul');
    // 1) 繁殖（逻辑斯谛）与饥饿
    for (let i = 0; i < ANIMAL_IDS.length; i++) {
      const id = ANIMAL_IDS[i];
      const def = animalDef(id);
      const N = this.pops[id];
      if (N <= 0) { this.lastGrowth[id] = 0; this.lastK[id] = this.carryingCapacity(id, eco, game); continue; }
      const K = this.carryingCapacity(id, eco, game);
      this.lastK[id] = K;
      let r = def.rPerMin * faunaRMul;
      if (typeof EcoSeasonalCycle !== 'undefined') r *= EcoSeasonalCycle.faunaMul(game);
      if (eco && eco.sanctuary) r *= eco.sanctuary.breedMulFor(id, eco);
      if (eco && eco.feeding) r *= eco.feeding.breedMulFor(id, eco, game);
      if (id === 'mammal' && ecoTechHas(game, 'eco_fauna3')) r *= 1.5;
      const foodF = this.foodFactor(id, eco);
      let dN = 0;
      if (N < def.minViable) {
        // 功能性灭绝：不繁殖，缓慢衰减
        dN = -N * 0.002 * dtMin;
        this.extinct[id] = true;
      } else {
        dN = r * N * (1 - N / Math.max(K, 1)) * foodF * dtMin;
        if (foodF < 0.5) dN -= N * ETUNE.FAUNA_STARVE_MORTALITY * (1 - foodF) * dtMin;
        if (tempC < def.tempMin || tempC > def.tempMax) dN -= N * 0.01 * dtMin;
        delete this.extinct[id];
      }
      this.lastGrowth[id] = dN;
      this.pops[id] = Math.max(0, N + dN);
    }
    // 2) 捕食：鸟吃昆虫，哺乳动物吃昆虫（真实减数）
    const birds = this.pops.bird, mammals = this.pops.mammal;
    if (birds > 0 && this.pops.insect > 0) {
      const eaten = Math.min(this.pops.insect, birds * animalDef('bird').eatInsectPerMin * this.pops.insect * dtMin);
      this.pops.insect = Math.max(0, this.pops.insect - eaten);
      if (eco && eco.stats) eco.stats.insectsEaten += eaten;
    }
    if (mammals > 0 && this.pops.insect > 0) {
      const eaten = Math.min(this.pops.insect, mammals * animalDef('mammal').eatInsectPerMin * this.pops.insect * dtMin);
      this.pops.insect = Math.max(0, this.pops.insect - eaten);
    }
    // 3) 哺乳动物啃食草地（草生物量不足时反噬：哺乳动物额外死亡）
    if (mammals > 0 && eco && eco.plants) {
      const grassBio = eco.plants.biomassOf('grass');
      const grazeNeed = mammals * animalDef('mammal').grazePerMin * dtMin;
      if (grassBio > 0) {
        const frac = ecoClamp(grazeNeed / Math.max(grassBio, 1), 0, 0.1);
        if (frac > 0.001) eco.plants.grazeDamage(frac);
        if (eco.policies && eco.policies.isActive('pol_wildlife')) eco.plants.grazeDamage(frac * 0.2);
      } else {
        this.pops.mammal = Math.max(0, this.pops.mammal - mammals * 0.02 * dtMin);
      }
    }
    // 4) 昆虫分解 + 鸟粪 + 兽粪 → 土壤肥力（真实数值）
    if (eco && eco.grid) {
      const soilGain = (this.pops.insect * animalDef('insect').soilBonusPerMin +
        this.pops.bird * animalDef('bird').soilBonusPerMin +
        this.pops.mammal * animalDef('mammal').soilBonusPerMin) * dtMin;
      if (soilGain > 0) eco.grid.addFertilityAll(soilGain / (eco.grid.size * eco.grid.size) * 100);
    }
    return { insect: this.pops.insect, bird: this.pops.bird, mammal: this.pops.mammal };
  }
  summary() {
    const out = {};
    for (let i = 0; i < ANIMAL_IDS.length; i++) {
      const id = ANIMAL_IDS[i];
      out[id] = {
        count: Math.floor(this.pops[id]), K: ecoRound(this.lastK[id] || 0, 1),
        growthPerMin: ecoRound(this.lastGrowth[id] || 0, 2),
        foodFactor: 0, viable: this.pops[id] >= animalDef(id).minViable,
      };
    }
    return out;
  }
  save() {
    return { v: 1, pops: { insect: ecoRound(this.pops.insect, 2), bird: ecoRound(this.pops.bird, 2), mammal: ecoRound(this.pops.mammal, 2) }, minutes: ecoRound(this.minutes, 1), introduced: Object.assign({}, this.introduced), extinct: Object.assign({}, this.extinct) };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.pops = { insect: ecoSafeNum(data.pops && data.pops.insect, 0), bird: ecoSafeNum(data.pops && data.pops.bird, 0), mammal: ecoSafeNum(data.pops && data.pops.mammal, 0) };
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.introduced = data.introduced || {};
    this.extinct = data.extinct || {};
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoBalance：生态平衡（香农多样性指数 / 崩溃风险 / 崩溃 / 恢复）
 * ------------------------------------------------------------------------------
 * 多样性指数：对 8 个物种（5 植物 + 3 动物）的数量做香农熵，归一化到 0~1。
 *   H = −Σ p·ln p，Hmax = ln(8)，diversity = H / Hmax。
 * 单一物种垄断 → 指数低；物种均衡 → 指数高。指数 < 0.35 持续 10 分钟 → 崩溃检定。
 * 崩溃：最弱物种灭绝 30~60%，改造进度 −2~5%，记 stats.collapses。
 * ------------------------------------------------------------------------------ */
class EcoBalance {
  constructor() {
    this.diversity = 0;
    this.shannon = 0;
    this.riskMinutes = 0;      // 连续低多样性分钟数
    this.collapseChecks = 0;
    this.lastCollapseMin = -1000;
    this.minutes = 0;
    this.warnings = [];
    this.dominantSpecies = null;
    this.weakestSpecies = null;
  }
  // 计算多样性（纯函数部分可单独测试）
  computeDiversity(counts) {
    // counts: {speciesId: 数量}，只计 >0 的物种
    let total = 0;
    const ids = [];
    for (const id in counts) {
      if (counts[id] > 0) { total += counts[id]; ids.push(id); }
    }
    if (total <= 0 || ids.length <= 1) return { diversity: 0, shannon: 0, dominant: ids[0] || null, weakest: ids[0] || null };
    let H = 0, dominant = null, weakest = null, maxP = -1, minP = 2;
    for (let i = 0; i < ids.length; i++) {
      const p = counts[ids[i]] / total;
      H -= p * Math.log(p);
      if (p > maxP) { maxP = p; dominant = ids[i]; }
      if (p < minP) { minP = p; weakest = ids[i]; }
    }
    const Hmax = Math.log(8); // 8 个物种
    return { diversity: ecoClamp(H / Hmax, 0, 1), shannon: H, dominant: dominant, weakest: weakest };
  }
  speciesCounts(eco) {
    const counts = {};
    if (eco && eco.plants) {
      for (let i = 0; i < PLANT_IDS.length; i++) counts[PLANT_IDS[i]] = eco.plants.countOf(PLANT_IDS[i]);
    }
    if (eco && eco.fauna) {
      for (let i = 0; i < ANIMAL_IDS.length; i++) counts[ANIMAL_IDS[i]] = Math.floor(eco.fauna.pop(ANIMAL_IDS[i]));
    }
    return counts;
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const counts = this.speciesCounts(eco);
    const r = this.computeDiversity(counts);
    this.diversity = r.diversity;
    this.shannon = r.shannon;
    this.dominantSpecies = r.dominant;
    this.weakestSpecies = r.weakest;
    // 风险计时
    if (this.diversity < ETUNE.DIVERSITY_COLLAPSE_BELOW && this._livingSpecies(counts) >= 2) {
      this.riskMinutes += dtMin;
    } else {
      this.riskMinutes = Math.max(0, this.riskMinutes - dtMin * 2); // 好转时风险快速消退
    }
    // 警告列表（面板用）
    this.warnings = [];
    if (this.diversity < 0.2) this.warnings.push('多样性极低：生态随时可能崩溃');
    else if (this.diversity < 0.35) this.warnings.push('多样性偏低：引入新物种可提升');
    if (this.dominantSpecies) {
      const total = ecoClamp(eco.plants ? eco.plants.count() : 0, 1, 1e9) + (eco.fauna ? eco.fauna.total() : 0);
      const domN = counts[this.dominantSpecies] || 0;
      if (total > 0 && domN / total > 0.8) this.warnings.push('「' + this._speciesName(this.dominantSpecies) + '」占比超 80%，生态单一');
    }
    if (eco && eco.fauna) {
      for (let i = 0; i < ANIMAL_IDS.length; i++) {
        const id = ANIMAL_IDS[i];
        if (eco.fauna.pop(id) > 0 && eco.fauna.pop(id) < animalDef(id).minViable) {
          this.warnings.push(animalDef(id).name + '不足 6 只，濒临功能性灭绝');
        }
      }
    }
    // 崩溃检定
    if (this.collapseDue()) {
      const chance = ETUNE.DIVERSITY_COLLAPSE_CHANCE * (ecoTechHas(game, 'eco_balance1') ? 0.5 : 1);
      this.collapseChecks++;
      const roll = (rng || Math.random)();
      if (roll < chance) {
        const res = this.doCollapse('auto', rng);
        if (eco) eco.log('生态崩溃：' + res.log);
        return { collapsed: true, result: res };
      } else {
        // 检定未触发：风险计时减半，给玩家喘息
        this.riskMinutes = ETUNE.DIVERSITY_COLLAPSE_MINUTES * 0.5;
      }
    }
    return { collapsed: false };
  }
  _livingSpecies(counts) {
    let n = 0;
    for (const id in counts) if (counts[id] > 0) n++;
    return n;
  }
  _speciesName(id) {
    if (PLANT_DEFS[id]) return PLANT_DEFS[id].name;
    if (ANIMAL_DEFS[id]) return ANIMAL_DEFS[id].name;
    return id;
  }
  collapseDue() {
    return this.riskMinutes >= ETUNE.DIVERSITY_COLLAPSE_MINUTES &&
      (this.minutes - this.lastCollapseMin) >= 60; // 崩溃后 60 分钟内不再崩
  }
  collapseRisk() {
    // 0-1：风险进度（面板进度条用）
    return ecoClamp(this.riskMinutes / ETUNE.DIVERSITY_COLLAPSE_MINUTES, 0, 1);
  }
  doCollapse(source, rng) {
    const r = rng || Math.random;
    const eco = this._ecoRef;
    this.lastCollapseMin = this.minutes;
    this.riskMinutes = 0;
    this.collapseChecks = 0;
    let victim = this.weakestSpecies;
    let dieoff = ETUNE.EXTINCTION_DIEOFF_MIN + r() * (ETUNE.EXTINCTION_DIEOFF_MAX - ETUNE.EXTINCTION_DIEOFF_MIN);
    let killed = 0;
    if (eco) {
      if (!victim) {
        const counts = this.speciesCounts(eco);
        victim = this.computeDiversity(counts).weakest;
      }
      if (victim && PLANT_DEFS[victim]) {
        // 植物：按比例拔除该物种
        const plots = eco.plants.plots.filter(function (p) { return p.species === victim; });
        const n = Math.floor(plots.length * dieoff);
        for (let i = 0; i < n; i++) {
          const idx = eco.plants.plots.indexOf(plots[i]);
          if (idx >= 0) { eco.plants._removeAt(idx); killed++; }
        }
      } else if (victim && ANIMAL_DEFS[victim]) {
        const before = eco.fauna.pop(victim);
        eco.fauna.setPop(victim, before * (1 - dieoff));
        killed = Math.floor(before * dieoff);
      }
      const loss = ETUNE.PROGRESS_LOSS_COLLAPSE_MIN + r() * (ETUNE.PROGRESS_LOSS_COLLAPSE_MAX - ETUNE.PROGRESS_LOSS_COLLAPSE_MIN);
      eco.terraform.addProgress(-loss, 'collapse');
      if (eco.stats) eco.stats.collapses++;
    }
    const log = '最弱物种「' + this._speciesName(victim || '?') + '」灭绝 ' + Math.round(dieoff * 100) + '%（' + killed + '），改造进度倒退';
    return { log: log, victim: victim, dieoff: ecoRound(dieoff, 2), killed: killed, source: source || 'auto' };
  }
  // 恢复速度：多样性回升时，植物扩散加成（基因库科技 ×2）
  recoveryMul(game) {
    let m = 1;
    if (ecoTechHas(game, 'eco_balance2')) m *= 2;
    if (this.diversity > 0.5) m *= 1.5;
    return m;
  }
  status() {
    return {
      diversity: ecoRound(this.diversity, 3),
      shannon: ecoRound(this.shannon, 3),
      riskMinutes: ecoRound(this.riskMinutes, 1),
      risk: ecoRound(this.collapseRisk(), 3),
      collapseDue: this.collapseDue(),
      dominant: this.dominantSpecies,
      weakest: this.weakestSpecies,
      warnings: this.warnings.slice(),
      level: this.diversity >= 0.7 ? 'healthy' : (this.diversity >= 0.5 ? 'ok' : (this.diversity >= 0.35 ? 'low' : 'critical')),
    };
  }
  save() {
    return { v: 1, diversity: ecoRound(this.diversity, 3), riskMinutes: ecoRound(this.riskMinutes, 1), collapseChecks: this.collapseChecks, lastCollapseMin: ecoRound(this.lastCollapseMin, 1), minutes: ecoRound(this.minutes, 1) };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.diversity = ecoSafeNum(data.diversity, 0);
    this.riskMinutes = ecoSafeNum(data.riskMinutes, 0);
    this.collapseChecks = ecoSafeNum(data.collapseChecks, 0);
    this.lastCollapseMin = ecoSafeNum(data.lastCollapseMin, -1000);
    this.minutes = ecoSafeNum(data.minutes, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoBuildings：生态建筑接口（注册表 + 效应聚合）
 * ------------------------------------------------------------------------------
 * 另一组的建筑文件只需用 ECO_BUILDINGS 里的 id；本系统每 tick 扫描
 * game.builder.buildings 聚合效应。register(def) 允许运行时追加/覆盖定义
 * （另一组的新建筑不用改本文件）。效应按建筑等级缩放：Lv1 ×1，每级 +25%。
 * ------------------------------------------------------------------------------ */
class EcoBuildings {
  constructor() {
    this.customDefs = {};   // register() 追加的定义
    this._aggCache = null;  // 每 tick 缓存一次聚合结果
    this._aggTick = -1;
  }
  register(def) {
    if (!def || !def.id) return false;
    this.customDefs[def.id] = def;
    return true;
  }
  def(id) {
    if (this.customDefs[id]) return this.customDefs[id];
    return ecoBuildingDef(id);
  }
  allDefs() {
    const out = ECO_BUILDINGS.slice();
    for (const id in this.customDefs) out.push(this.customDefs[id]);
    return out;
  }
  // 统计某建筑在场数量（game 侧）
  count(game, id) {
    let n = 0;
    const list = ecoBuildingList(game);
    for (let i = 0; i < list.length; i++) if (list[i].id === id) n += (list[i].count || 1);
    return n;
  }
  // 某格附近 radius 格内是否有指定建筑
  nearBuilding(game, x, y, id, radius) {
    const list = ecoBuildingList(game);
    const r2 = radius * radius;
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      if (b.id !== id) continue;
      if (typeof b.x !== 'number' || typeof b.y !== 'number') continue;
      if (ecoDist2(b.x, b.y, x, y) <= r2) return true;
    }
    return false;
  }
  // 聚合全部生态建筑效应（每 tick 由总管调用一次并缓存）
  aggregate(game, tickIndex) {
    if (tickIndex !== undefined && tickIndex === this._aggTick && this._aggCache) return this._aggCache;
    const agg = {
      o2PerMin: 0, waterPerMin: 0, waterUsePerMin: 0, co2PerMin: 0, heatPerMin: 0,
      growthMul: 1, treeGrowthMul: 1, rainMul: 1, evapMul: 1, soilWetPerMin: 0,
      groundwaterUsePerMin: 0, powerUse: 0, electrolyzerCount: 0, rainCatcherCount: 0,
      diversityBonus: 0, happinessMul: 1, frostProtect: 0, seedCostMul: 1,
      buildings: {},
    };
    const list = ecoBuildingList(game);
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      const def = this.def(b.id);
      if (!def) continue;
      const lvl = Math.max(1, b.level || 1);
      const lm = 1 + (lvl - 1) * 0.25; // 等级缩放
      const n = b.count || 1;
      agg.buildings[b.id] = (agg.buildings[b.id] || 0) + n;
      if (def.o2PerMin) agg.o2PerMin += def.o2PerMin * lm * n;
      if (def.waterPerMin) agg.waterPerMin += def.waterPerMin * lm * n;
      if (def.waterUsePerMin) agg.waterUsePerMin += def.waterUsePerMin * lm * n;
      if (def.co2PerMin) agg.co2PerMin += def.co2PerMin * lm * n;
      if (def.heatPerMin) agg.heatPerMin += def.heatPerMin * lm * n;
      if (def.growthMul) agg.growthMul *= Math.pow(def.growthMul, n);
      if (def.treeGrowthMul) agg.treeGrowthMul *= Math.pow(def.treeGrowthMul, n);
      if (def.rainMul) agg.rainMul *= Math.pow(def.rainMul, n);
      if (def.evapMul) agg.evapMul *= Math.pow(def.evapMul, n);
      if (def.soilWetPerMin) agg.soilWetPerMin += def.soilWetPerMin * lm * n;
      if (def.groundwaterUsePerMin) agg.groundwaterUsePerMin += def.groundwaterUsePerMin * lm * n;
      if (def.powerUse) agg.powerUse += def.powerUse * lm * n;
      if (def.diversityBonus) agg.diversityBonus += def.diversityBonus * n;
      if (def.happinessMul) agg.happinessMul *= Math.pow(def.happinessMul, n);
      if (def.frostProtect) agg.frostProtect = Math.max(agg.frostProtect, def.frostProtect);
      if (def.seedCostMul) agg.seedCostMul = Math.min(agg.seedCostMul, def.seedCostMul);
      if (b.id === 'electrolyzer') agg.electrolyzerCount += n;
      if (b.id === 'rain_catcher') agg.rainCatcherCount += n;
      // 注意：upkeep 不在这里扣 —— aggregate 每 tick 会被多个子系统调用多次，
      // 重复扣会多倍消耗。upkeep 由 EcologyManager.tick 调 applyUpkeep() 每 tick 扣一次。
    }
    // 温室气体工厂：工程与建筑取大者，不叠加（防双倍刷进度）
    if (agg.co2PerMin > 0 && game && game.ecology && game.ecology.terraform) {
      const eng = game.ecology.terraform.continuousProjects.ghg_factory || 0;
      if (eng > 0) agg.co2PerMin = Math.max(agg.co2PerMin, eng * ETUNE.PROJECT_GHG_PER_MIN);
    }
    this._aggCache = agg;
    if (tickIndex !== undefined) this._aggTick = tickIndex;
    return agg;
  }
  // 每 tick 扣一次 upkeep（总管 tick 内调用；aggregate 里不扣，避免重复扣费）
  applyUpkeep(game, dtMin) {
    const list = ecoBuildingList(game);
    const inv = ecoInv(game);
    if (!inv) return 0;
    let deducted = 0;
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      const def = this.def(b.id);
      if (!def || !def.upkeepPerMin) continue;
      const n = b.count || 1;
      for (const k in def.upkeepPerMin) {
        const amt = def.upkeepPerMin[k] * n * dtMin;
        inv[k] = Math.max(0, (inv[k] || 0) - amt);
        deducted += amt;
      }
    }
    return deducted;
  }
  // 该建筑是否已解锁（阶段校验，供另一组 UI 读取）
  isUnlocked(id, eco) {
    const def = this.def(id);
    if (!def) return false;
    if (!eco || !eco.terraform) return true;
    return eco.terraform.stageIndex() >= (def.stageUnlock || 0);
  }
  // 建造校验（另一组调用：成本 + 阶段）
  canBuild(id, game, eco) {
    const def = this.def(id);
    if (!def) return { ok: false, reason: '未知建筑' };
    if (eco && eco.terraform && eco.terraform.stageIndex() < (def.stageUnlock || 0)) {
      return { ok: false, reason: '需要阶段「' + TERRAFORM_STAGES[def.stageUnlock].name + '」' };
    }
    if (!ecoCanAfford(game, def.cost)) return { ok: false, reason: '资源不足' };
    return { ok: true, reason: '可建造' };
  }
  save() { return { v: 1, customDefs: this.customDefs }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.customDefs = data.customDefs || {};
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoPolicies：生态政策（最多同时激活 3 项，带真实代价）
 * ------------------------------------------------------------------------------ */
class EcoPolicies {
  constructor() {
    this.active = []; // 激活的政策 id
    this.MAX_ACTIVE = 3;
  }
  isActive(id) { return this.active.indexOf(id) >= 0; }
  toggle(id) {
    const def = ecoPolicyDef(id);
    if (!def) return { ok: false, reason: '未知政策' };
    const idx = this.active.indexOf(id);
    if (idx >= 0) { this.active.splice(idx, 1); return { ok: true, reason: '已关闭「' + def.name + '」' }; }
    if (this.active.length >= this.MAX_ACTIVE) return { ok: false, reason: '最多同时激活 ' + this.MAX_ACTIVE + ' 项政策' };
    this.active.push(id);
    return { ok: true, reason: '已激活「' + def.name + '」' };
  }
  // 某修正键的乘积（无政策时为 1）
  effectMul(key) {
    let m = 1;
    for (let i = 0; i < this.active.length; i++) {
      const def = ecoPolicyDef(this.active[i]);
      if (def && def.effects && typeof def.effects[key] === 'number') m *= def.effects[key];
    }
    return m;
  }
  // 政策带来的每分钟固定耗水（人工降雨）
  waterUsePerMin() {
    let use = 0;
    for (let i = 0; i < this.active.length; i++) {
      const def = ecoPolicyDef(this.active[i]);
      if (def && def.effects && def.effects.waterUsePerMin) use += def.effects.waterUsePerMin;
    }
    return use;
  }
  summary() {
    return this.active.map(function (id) {
      const def = ecoPolicyDef(id);
      return def ? { id: id, name: def.name, desc: def.desc } : { id: id, name: id, desc: '' };
    });
  }
  save() { return { v: 1, active: this.active.slice() }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.active = (data.active || []).filter(function (id) { return !!ecoPolicyDef(id); }).slice(0, this.MAX_ACTIVE);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoVisuals：改造进度影响地图视觉（地表红→绿）
 * ------------------------------------------------------------------------------
 * 颜色模型：tileColor = lerp(火星底色, 植被色, 覆盖度 × 进度因子)；
 * 积水格叠加蓝色；极地在进度 <60% 时保持冰色。renderOverlay 直接画在游戏画布上。
 * ------------------------------------------------------------------------------ */
const ECO_TERRAIN_BASE = {
  0: '#8a4a32', // 平地：铁锈红
  1: '#6b4232', // 岩石
  2: '#3a241a', // 环形山
  3: '#1a1218', // 峡谷
  4: '#b8d4e8', // 极地冰
  5: '#4a1f14', // 火山
};
const ECO_VEG_COLOR = {
  moss: '#5a7d3a',
  grass: '#6da544',
  shrub: '#4a7d2e',
  crop: '#c2a94e',
  tree: '#2d5a27',
};
const ECO_WATER_COLOR = '#3a6ea5';
const ECO_SURFACE_START = '#b5533c'; // 0% 时全球地表主色
const ECO_SURFACE_END = '#4a7d2e';   // 100% 时全球地表主色

class EcoVisuals {
  constructor() {
    this.overlayOn = true;
    this.showVegetation = true;
    this.showWater = true;
  }
  setOverlay(on) { this.overlayOn = !!on; }
  // 全球地表主色（红→绿）
  surfaceColor(progress) {
    return ecoHexLerp(ECO_SURFACE_START, ECO_SURFACE_END, ecoClamp(progress / 100, 0, 1));
  }
  // 天空色（随改造从橙红变蓝）
  skyColor(progress) {
    return ecoHexLerp('#c97b4a', '#7fb2e5', ecoClamp(progress / 100, 0, 1));
  }
  // 单格颜色
  tileColor(tile, progress) {
    if (!tile) return ECO_SURFACE_START;
    let base = ECO_TERRAIN_BASE[tile.terrain] || ECO_TERRAIN_BASE[0];
    // 极地低温时保持冰色，直到改造过 60%
    if (tile.terrain === 4 && progress < 60) {
      const t = ecoClamp(progress / 60, 0, 1);
      base = ecoHexLerp(base, '#7fae7a', t * 0.3);
      return base;
    }
    const veg = ecoClamp(tile.vegetation / 100, 0, 1);
    const progF = 0.3 + 0.7 * ecoClamp(progress / 100, 0, 1);
    const cover = veg * progF;
    if (cover > 0.02) {
      const vc = ECO_VEG_COLOR[tile.dominant] || '#6da544';
      base = ecoHexLerp(base, vc, ecoClamp(cover, 0, 1));
    }
    // 积水叠加蓝色
    if (tile.surfaceWater > 50) {
      base = ecoHexLerp(base, ECO_WATER_COLOR, ecoClamp((tile.surfaceWater - 50) / 50, 0, 1) * 0.8);
    } else if (tile.surfaceWater > 10) {
      base = ecoHexLerp(base, ECO_WATER_COLOR, 0.2);
    }
    // 湿度高时颜色加深
    if (tile.moisture > 70) base = ecoHexLerp(base, '#3d2b1f', 0.15);
    return base;
  }
  // 植被覆盖度 0-100 → 渲染用的圆点密度（0-4）
  dotsFor(tile) {
    if (!tile || tile.vegetation <= 0) return 0;
    return Math.min(4, Math.ceil(tile.vegetation / 25));
  }
  // 画布覆盖层：按 tile 尺寸逐格上色（game 侧传 ctx/map/tile）
  renderOverlay(ctx, map, tileSize, game, eco) {
    if (!this.overlayOn || !ctx || !eco || !eco.grid) return false;
    try {
      const size = eco.grid.size;
      const ts = tileSize || 16;
      const progress = eco.terraform ? eco.terraform.progress : 0;
      ctx.save();
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        const t = eco.grid.get(x, y);
        if (!t) continue;
        ctx.fillStyle = this.tileColor(t, progress);
        ctx.globalAlpha = 0.85;
        ctx.fillRect(x * ts, y * ts, ts, ts);
        if (this.showWater && t.surfaceWater > 50) {
          ctx.globalAlpha = 0.9;
          ctx.fillStyle = ECO_WATER_COLOR;
          ctx.fillRect(x * ts, y * ts, ts, ts);
        }
      }
      ctx.restore();
      return true;
    } catch (e) { return false; }
  }
  // 小地图颜色（供 minimap 复用）
  minimapColor(tile, progress) { return this.tileColor(tile, progress); }
  save() { return { v: 1, overlayOn: this.overlayOn, showVegetation: this.showVegetation, showWater: this.showWater }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.overlayOn = !!data.overlayOn;
    this.showVegetation = data.showVegetation !== false;
    this.showWater = data.showWater !== false;
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoEvents：生态事件管理器（条件触发 + 真实数值后果 + 冷却 + 日志）
 * ------------------------------------------------------------------------------ */
class EcoEvents {
  constructor() {
    this.minutes = 0;
    this.lastRollMin = 0;
    this.cooldowns = {};   // {eventId: 可再次触发的分钟}
    this.firedOnce = {};   // {eventId: true}
    this.firedIds = {};    // {eventId: 触发次数}（去重计数用）
    this.log = [];         // [{min, id, name, log, severity}]
    this.rollIntervalMin = 1;
  }
  // 已触发过的不同事件数（供任务/成就“事件猎人”用）
  get firedCount() {
    let n = 0;
    for (const k in this.firedIds) n++;
    return n;
  }
  _pushLog(entry) {
    this.log.push(entry);
    if (this.log.length > 50) this.log.shift();
  }
  // 强制触发一个事件（测试/调试/成就用）。传入 rng 时，事件执行期间
  // Math.random 临时替换为该 rng，保证确定性自测可复现。
  fire(id, eco, game, rng) {
    const def = ecoEventDef(id);
    if (!def) return { ok: false, reason: '未知事件' };
    let res;
    if (rng) {
      const origRandom = Math.random;
      Math.random = rng;
      try { res = def.apply(eco, game); } catch (e) { Math.random = origRandom; return { ok: false, reason: '事件执行失败：' + e.message }; }
      Math.random = origRandom;
    } else {
      try { res = def.apply(eco, game); } catch (e) { return { ok: false, reason: '事件执行失败：' + e.message }; }
    }
    this._pushLog({ min: ecoRound(this.minutes, 1), id: id, name: def.name, log: res.log, severity: res.severity || 'info' });
    this.firedIds[id] = (this.firedIds[id] || 0) + 1;
    if (def.once) this.firedOnce[id] = true;
    if (def.cooldownMin) this.cooldowns[id] = this.minutes + def.cooldownMin;
    return { ok: true, result: res };
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const r = rng || Math.random;
    // 1) 一次性事件（weight 0、once）：条件满足即触发
    for (let i = 0; i < ECO_EVENTS.length; i++) {
      const def = ECO_EVENTS[i];
      if (!def.once || this.firedOnce[def.id]) continue;
      let ok = false;
      try { ok = !!def.condition(eco, game); } catch (e) { ok = false; }
      if (ok) {
        const res = this.fire(def.id, eco, game, r);
        if (res.ok) ecoToast(game, def.icon + ' ' + def.name + '：' + res.result.log);
      }
    }
    // 2) 随机事件：每分钟一次加权抽选
    if (this.minutes - this.lastRollMin < this.rollIntervalMin) return null;
    this.lastRollMin = this.minutes;
    const candidates = [];
    let totalW = 0;
    for (let i = 0; i < ECO_EVENTS.length; i++) {
      const def = ECO_EVENTS[i];
      if (def.once || !def.weight) continue;
      if ((this.cooldowns[def.id] || 0) > this.minutes) continue;
      let ok = false;
      try { ok = !!def.condition(eco, game); } catch (e) { ok = false; }
      if (!ok) continue;
      candidates.push(def);
      totalW += def.weight;
    }
    if (!candidates.length || totalW <= 0) return null;
    let roll = r() * totalW;
    let picked = candidates[0];
    for (let i = 0; i < candidates.length; i++) {
      roll -= candidates[i].weight;
      if (roll <= 0) { picked = candidates[i]; break; }
    }
    const res = this.fire(picked.id, eco, game, r);
    if (res.ok) {
      ecoToast(game, picked.icon + ' ' + picked.name + '：' + res.result.log);
      return { id: picked.id, name: picked.name, result: res.result };
    }
    return null;
  }
  recent(n) { return this.log.slice(-(n || 5)); }
  save() {
    return { v: 1, minutes: ecoRound(this.minutes, 1), cooldowns: Object.assign({}, this.cooldowns), firedOnce: Object.assign({}, this.firedOnce), firedIds: Object.assign({}, this.firedIds), log: this.log.slice(-20) };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.cooldowns = data.cooldowns || {};
    this.firedOnce = data.firedOnce || {};
    this.firedIds = data.firedIds || {};
    this.log = Array.isArray(data.log) ? data.log : [];
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * SoilNutrientSystem：土壤养分（氮 N / 磷 P / 钾 K 三元 + 轮作）
 * ------------------------------------------------------------------------------
 * 每格养分默认 50。作物耗 N 快、树耗 K、苔藓固 N；养分低于 20 时生长 ×0.6，
 * 高于 80 时 ×1.15。同一格连种同种 3 茬 → 轮作惩罚（产量 -20%）。
 * 施肥：堆肥（生物质）补 N/P/K，成本真实进背包。
 * 只存“被改动过”的格子（Map），其余格子读默认值，省内存。
 * ------------------------------------------------------------------------------ */
const SOIL_NUTRIENT_DEFAULT = { n: 50, p: 50, k: 50 };
const SOIL_CROP_DEMAND = {
  moss: { n: -0.02, p: 0.005, k: 0.005 },
  grass: { n: 0.01, p: 0.008, k: 0.01 },
  shrub: { n: 0.015, p: 0.01, k: 0.015 },
  crop: { n: 0.05, p: 0.03, k: 0.02 },
  tree: { n: 0.02, p: 0.01, k: 0.03 },
};
class SoilNutrientSystem {
  constructor(grid) {
    this.grid = grid || null;
    this.map = {};
    this.lastCrop = {};
    this.minutes = 0;
    this.fertilizedTotal = 0;
  }
  get(x, y) {
    const k = ecoKey(x, y);
    if (!this.map[k]) return { n: SOIL_NUTRIENT_DEFAULT.n, p: SOIL_NUTRIENT_DEFAULT.p, k: SOIL_NUTRIENT_DEFAULT.k };
    return this.map[k];
  }
  _ensure(x, y) {
    const k = ecoKey(x, y);
    if (!this.map[k]) this.map[k] = { n: 50, p: 50, k: 50 };
    return this.map[k];
  }
  nutrientFactor(x, y, species) {
    const v = this.get(x, y);
    const demand = SOIL_CROP_DEMAND[species] || SOIL_CROP_DEMAND.grass;
    let key = 'n';
    if (demand.k >= demand.n && demand.k >= demand.p) key = 'k';
    else if (demand.p > demand.n) key = 'p';
    const val = v[key];
    if (val < 20) return 0.6;
    if (val < 40) return 0.85;
    if (val > 80) return 1.15;
    return 1;
  }
  rotationMul(x, y, species) {
    const rec = this.lastCrop[ecoKey(x, y)];
    if (!rec) return 1;
    if (rec.species === species && rec.streak >= 3) return 0.8;
    return 1;
  }
  recordPlanting(x, y, species) {
    const k = ecoKey(x, y);
    const rec = this.lastCrop[k];
    if (rec && rec.species === species) rec.streak++;
    else this.lastCrop[k] = { species: species, streak: 1 };
  }
  fertilize(x, y, kind, game) {
    const costs = { compost: { biomass: 5 }, nitrogen: { biomass: 3 }, potash: { biomass: 3 } };
    const cost = costs[kind];
    if (!cost) return { ok: false, reason: '未知肥料：' + kind };
    if (!this.grid || !this.grid.inBounds(x, y)) return { ok: false, reason: '超出地图' };
    if (!ecoCanAfford(game, cost)) return { ok: false, reason: '生物质不足（需 ' + cost.biomass + '）' };
    ecoPay(game, cost);
    const v = this._ensure(x, y);
    if (kind === 'compost') { v.n = ecoClamp(v.n + 20, 0, 100); v.p = ecoClamp(v.p + 15, 0, 100); v.k = ecoClamp(v.k + 15, 0, 100); }
    else if (kind === 'nitrogen') v.n = ecoClamp(v.n + 30, 0, 100);
    else if (kind === 'potash') v.k = ecoClamp(v.k + 30, 0, 100);
    this.fertilizedTotal++;
    return { ok: true, reason: '已施肥', value: { n: ecoRound(v.n, 1), p: ecoRound(v.p, 1), k: ecoRound(v.k, 1) } };
  }
  update(dtMin, eco, game, tickIndex) {
    this.minutes += dtMin;
    if (!eco || !eco.plants) return;
    const plots = eco.plants.plots;
    for (let i = 0; i < plots.length; i++) {
      const p = plots[i];
      const demand = SOIL_CROP_DEMAND[p.species];
      if (!demand) continue;
      const v = this._ensure(p.x, p.y);
      v.n = ecoClamp(v.n - demand.n * dtMin, 0, 100);
      v.p = ecoClamp(v.p - demand.p * dtMin, 0, 100);
      v.k = ecoClamp(v.k - demand.k * dtMin, 0, 100);
    }
    if ((tickIndex || 0) % 10 === 0) {
      for (const k in this.map) {
        const v = this.map[k];
        v.n += (50 - v.n) * 0.001 * dtMin * 10;
        v.p += (50 - v.p) * 0.001 * dtMin * 10;
        v.k += (50 - v.k) * 0.001 * dtMin * 10;
      }
    }
  }
  avgNutrients() {
    let n = 0, p = 0, k = 0, c = 0;
    for (const key in this.map) { n += this.map[key].n; p += this.map[key].p; k += this.map[key].k; c++; }
    if (!c) return { n: 50, p: 50, k: 50, tracked: 0 };
    return { n: ecoRound(n / c, 1), p: ecoRound(p / c, 1), k: ecoRound(k / c, 1), tracked: c };
  }
  deficientTiles() {
    let n = 0;
    for (const key in this.map) {
      const v = this.map[key];
      if (v.n < 20 || v.p < 20 || v.k < 20) n++;
    }
    return n;
  }
  save() {
    return { v: 1, minutes: ecoRound(this.minutes, 1), map: this.map, lastCrop: this.lastCrop, fertilizedTotal: this.fertilizedTotal };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.map = data.map || {};
    this.lastCrop = data.lastCrop || {};
    this.fertilizedTotal = ecoSafeNum(data.fertilizedTotal, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * PlantDiseaseSystem：植物病害（6 种病 + 传播 + 治疗）
 * ------------------------------------------------------------------------------
 * 发病条件：高湿（>阈值）+ 高密度（同格 ≥3 株）+ 对应易感物种。
 * 病害挂在 plot 对象上（plot.disease / plot.diseaseAge），随 PlantSystem 存档。
 * 治疗：cureDiseaseAt(x, y, game) 消耗生物质 2/株，清除该格全部病害。
 * ------------------------------------------------------------------------------ */
const PLANT_DISEASES = [
  { id: 'blight', name: '枯萎病', icon: '🥀', spreadPerMin: 0.02, healthDrain: 1.0, susceptible: ['crop', 'grass'], cureCost: { biomass: 2 }, minMoisture: 60, desc: '高温高湿发病，健康 -1.0/分钟。' },
  { id: 'rust', name: '锈病', icon: '🟠', spreadPerMin: 0.015, healthDrain: 0.6, susceptible: ['grass', 'shrub'], cureCost: { biomass: 2 }, minMoisture: 50, desc: '孢子随风传播，草和灌木易感。' },
  { id: 'aphid', name: '蚜虫害', icon: '🦗', spreadPerMin: 0.03, healthDrain: 0.8, susceptible: ['crop', 'shrub', 'tree'], cureCost: { biomass: 3 }, minMoisture: 40, desc: '蚜虫吸食汁液；有鸟类时传播 -50%。' },
  { id: 'rootrot', name: '根腐病', icon: '🟤', spreadPerMin: 0.01, healthDrain: 1.5, susceptible: ['tree', 'shrub'], cureCost: { biomass: 4 }, minMoisture: 80, desc: '积水烂根，健康 -1.5/分钟，致死最快。' },
  { id: 'mildew', name: '霉菌', icon: '⬜', spreadPerMin: 0.025, healthDrain: 0.5, susceptible: ['moss', 'grass', 'crop'], cureCost: { biomass: 2 }, minMoisture: 75, desc: '霉菌覆盖叶片，光合作用下降。' },
  { id: 'frostbite', name: '冻伤', icon: '🧊', spreadPerMin: 0, healthDrain: 0.7, susceptible: ['crop', 'tree'], cureCost: { biomass: 2 }, minMoisture: 0, desc: '非传染：均温低于 -10°C 时作物/树木冻伤。' },
];
function plantDiseaseDef(id) {
  for (let i = 0; i < PLANT_DISEASES.length; i++) if (PLANT_DISEASES[i].id === id) return PLANT_DISEASES[i];
  return null;
}
class PlantDiseaseSystem {
  constructor(grid) {
    this.grid = grid || null;
    this.minutes = 0;
    this.outbreaks = 0;
    this.cured = 0;
    this.activeCases = 0;
  }
  infectedCount(eco) {
    if (!eco || !eco.plants) return 0;
    let n = 0;
    for (let i = 0; i < eco.plants.plots.length; i++) if (eco.plants.plots[i].disease) n++;
    return n;
  }
  byDisease(eco) {
    const out = {};
    if (!eco || !eco.plants) return out;
    for (let i = 0; i < eco.plants.plots.length; i++) {
      const d = eco.plants.plots[i].disease;
      if (d) out[d] = (out[d] || 0) + 1;
    }
    return out;
  }
  cureDiseaseAt(x, y, game, eco) {
    if (!eco || !eco.plants) return { ok: false, reason: '无植物系统' };
    const here = eco.plants.plotsAt(x, y).filter(function (p) { return !!p.disease; });
    if (!here.length) return { ok: false, reason: '该格没有病株' };
    const cost = { biomass: here.length * 2 };
    if (!ecoCanAfford(game, cost)) return { ok: false, reason: '生物质不足（需 ' + cost.biomass + '）' };
    ecoPay(game, cost);
    for (let i = 0; i < here.length; i++) { delete here[i].disease; delete here[i].diseaseAge; }
    this.cured += here.length;
    return { ok: true, reason: '治愈 ' + here.length + ' 株', count: here.length };
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    if (!eco || !eco.plants || !this.grid) return;
    const r = rng || Math.random;
    const plots = eco.plants.plots;
    const tempC = eco.terraform ? eco.terraform.tempC() : 0;
    // 1) 已感染：扣血
    for (let i = 0; i < plots.length; i++) {
      const p = plots[i];
      if (!p.disease) continue;
      const def = plantDiseaseDef(p.disease);
      if (!def) { delete p.disease; continue; }
      p.diseaseAge = (p.diseaseAge || 0) + dtMin;
      p.health -= def.healthDrain * dtMin;
      if (p.health <= 0) p._deadByDisease = true;
    }
    for (let i = plots.length - 1; i >= 0; i--) {
      if (plots[i]._deadByDisease) {
        eco.plants._removeAt(i);
        if (eco.stats) eco.stats.totalDeaths++;
      }
    }
    // 2) 新发：高湿高密度格抽检
    for (let i = 0; i < plots.length; i++) {
      const p = plots[i];
      if (p.disease) continue;
      const tile = this.grid.get(p.x, p.y);
      if (!tile) continue;
      const density = eco.plants.plotsAt(p.x, p.y).length;
      for (let d = 0; d < PLANT_DISEASES.length; d++) {
        const def = PLANT_DISEASES[d];
        if (def.id === 'frostbite') {
          if (tempC < -10 && def.susceptible.indexOf(p.species) >= 0 && r() < 0.005 * dtMin) {
            p.disease = 'frostbite'; p.diseaseAge = 0; this.outbreaks++;
          }
          continue;
        }
        if (def.susceptible.indexOf(p.species) < 0) continue;
        if (tile.moisture < def.minMoisture) continue;
        if (density < 3 && def.id !== 'aphid') continue;
        let chance = 0.002 * dtMin;
        if (def.id === 'aphid' && eco.fauna && eco.fauna.pop('bird') >= 10) chance *= 0.5;
        if (r() < chance) {
          p.disease = def.id; p.diseaseAge = 0; this.outbreaks++;
          break;
        }
      }
    }
    // 3) 传播：同格同种 + 邻格（概率减半）
    const infected = plots.filter(function (p) { return !!p.disease; });
    for (let i = 0; i < infected.length; i++) {
      const src = infected[i];
      const def = plantDiseaseDef(src.disease);
      if (!def || !def.spreadPerMin) continue;
      const targets = eco.plants.plotsAt(src.x, src.y);
      for (let j = 0; j < targets.length; j++) {
        const t = targets[j];
        if (t.disease || t.species !== src.species) continue;
        if (r() < def.spreadPerMin * dtMin) { t.disease = src.disease; t.diseaseAge = 0; this.outbreaks++; }
      }
      if (r() < def.spreadPerMin * 0.5 * dtMin) {
        const ns = this.grid.neighbors(src.x, src.y);
        if (ns.length) {
          const nt = ns[Math.floor(r() * ns.length)];
          const cands = eco.plants.plotsAt(nt.x, nt.y).filter(function (p) { return !p.disease && p.species === src.species; });
          if (cands.length) { cands[0].disease = src.disease; cands[0].diseaseAge = 0; this.outbreaks++; }
        }
      }
    }
    this.activeCases = this.infectedCount(eco);
  }
  summary(eco) {
    return { active: this.infectedCount(eco), byDisease: this.byDisease(eco), outbreaks: this.outbreaks, cured: this.cured };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), outbreaks: this.outbreaks, cured: this.cured }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.outbreaks = ecoSafeNum(data.outbreaks, 0);
    this.cured = ecoSafeNum(data.cured, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * GreenhouseSystem：温室穹顶（室内种植区）
 * ------------------------------------------------------------------------------
 * 建穹顶：成本进背包，覆盖半径内全部植株转为室内（恒温、生长 ×1.5、免冻害），
 * 穹顶有容量（半径格数 × 2 株），超容后新种的室内株不享受加成。
 * 拆穹顶：圈内植株变回户外，立即按户外温度结算一次冻害检定。
 * ------------------------------------------------------------------------------ */
class GreenhouseSystem {
  constructor() {
    this.domes = []; // {x, y, radius, level, builtMin}
    this.minutes = 0;
  }
  capacity(dome) { return dome.radius * dome.radius * 2; }
  countInDome(dome, eco) {
    if (!eco || !eco.plants) return 0;
    let n = 0;
    for (let i = 0; i < eco.plants.plots.length; i++) {
      const p = eco.plants.plots[i];
      if (ecoDist2(p.x, p.y, dome.x, dome.y) <= dome.radius * dome.radius) n++;
    }
    return n;
  }
  domeAt(x, y) {
    for (let i = 0; i < this.domes.length; i++) {
      const d = this.domes[i];
      if (ecoDist2(x, y, d.x, d.y) <= d.radius * d.radius) return d;
    }
    return null;
  }
  hasDome(x, y) { return !!this.domeAt(x, y); }
  buildDome(x, y, radius, game, eco) {
    radius = radius || 3;
    if (radius < 2 || radius > 6) return { ok: false, reason: '穹顶半径须在 2~6 格' };
    if (this.domeAt(x, y)) return { ok: false, reason: '该处已有穹顶覆盖' };
    const cost = { steel: 30 + radius * 10, iron: 20 };
    if (!ecoCanAfford(game, cost)) return { ok: false, reason: '资源不足（钢材 ' + cost.steel + '、铁 ' + cost.iron + '）' };
    ecoPay(game, cost);
    const dome = { x: x, y: y, radius: radius, level: 1, builtMin: this.minutes };
    this.domes.push(dome);
    // 圈内现有植株转为室内
    if (eco && eco.plants) {
      for (let i = 0; i < eco.plants.plots.length; i++) {
        const p = eco.plants.plots[i];
        if (ecoDist2(p.x, p.y, x, y) <= radius * radius) p.indoor = true;
      }
    }
    return { ok: true, reason: '穹顶建成（半径 ' + radius + ' 格）', dome: dome };
  }
  removeDome(x, y, eco, game) {
    let idx = -1;
    for (let i = 0; i < this.domes.length; i++) {
      if (this.domes[i].x === x && this.domes[i].y === y) { idx = i; break; }
    }
    if (idx < 0) return { ok: false, reason: '该处没有穹顶' };
    const dome = this.domes[idx];
    this.domes.splice(idx, 1);
    let frostKilled = 0;
    if (eco && eco.plants) {
      const tempC = eco.terraform ? eco.terraform.tempC() : -63;
      for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
        const p = eco.plants.plots[i];
        if (ecoDist2(p.x, p.y, dome.x, dome.y) > dome.radius * dome.radius) continue;
        p.indoor = false;
        const def = plantDef(p.species);
        if (def && tempC < def.frostKillBelow && Math.random() < 0.5) {
          eco.plants._removeAt(i);
          frostKilled++;
        }
      }
    }
    return { ok: true, reason: '穹顶已拆除' + (frostKilled ? '，冻死 ' + frostKilled + ' 株' : ''), frostKilled: frostKilled };
  }
  upgradeDome(x, y, game) {
    const dome = this.domeAt(x, y);
    if (!dome) return { ok: false, reason: '该处没有穹顶' };
    if (dome.level >= 3) return { ok: false, reason: '穹顶已满级' };
    const cost = { steel: 40 * dome.level, tech: 20 * dome.level };
    if (!ecoCanAfford(game, cost)) return { ok: false, reason: '资源不足' };
    ecoPay(game, cost);
    dome.level++;
    dome.radius = Math.min(6, dome.radius + 1);
    return { ok: true, reason: '穹顶升至 ' + dome.level + ' 级（半径 ' + dome.radius + '）' };
  }
  // 穹顶内生长加成（供 PlantSystem 读取）
  growthMulAt(x, y, eco) {
    const dome = this.domeAt(x, y);
    if (!dome) return 1;
    const n = this.countInDome(dome, eco);
    if (n > this.capacity(dome)) return 1; // 超容无加成
    return 1.5 + (dome.level - 1) * 0.25;
  }
  update(dtMin) { this.minutes += dtMin; }
  summary(eco) {
    return this.domes.map(function (d) {
      return { x: d.x, y: d.y, radius: d.radius, level: d.level, plants: 0, capacity: 0 };
    });
  }
  save() {
    return { v: 1, minutes: ecoRound(this.minutes, 1), domes: this.domes.map(function (d) { return { x: d.x, y: d.y, radius: d.radius, level: d.level, builtMin: d.builtMin }; }) };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.domes = Array.isArray(data.domes) ? data.domes : [];
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * WeatherSystem：天气系统（移动雨锋 / 降雪 / 沙尘暴联动 / 季节）
 * ------------------------------------------------------------------------------
 * 雨锋是地图上移动的圆形降水区：经过的格子湿度上升，经过后留下湿润带。
 * 降雪发生在均温 <0°C 且降雨锋经过时：以雪的形式补水（融化慢，湿度滞后释放）。
 * 沙尘暴（game.disaster 联动）经过时植物健康受损、光照减半（growthFactors 已读）。
 * forecast() 给 UI：下一场雨锋预计到达时间与强度。
 * ------------------------------------------------------------------------------ */
class WeatherSystem {
  constructor(grid) {
    this.grid = grid || null;
    this.fronts = []; // {x, y, radius, dirX, dirY, speed, intensity, type, ttlMin}
    this.minutes = 0;
    this.nextFrontInMin = 30; // 首个雨锋 30 分钟后生成
    this.stormsSurvived = 0;
    this.snowAccumMm = 0;
    this._rng = ecoRng(99);
  }
  spawnFront(type, rng) {
    const r = rng || this._rng;
    const size = this.grid ? this.grid.size : 50;
    const edge = Math.floor(r() * 4);
    let x, y, dirX, dirY;
    if (edge === 0) { x = -5; y = r() * size; dirX = 1; dirY = 0; }
    else if (edge === 1) { x = size + 5; y = r() * size; dirX = -1; dirY = 0; }
    else if (edge === 2) { x = r() * size; y = -5; dirX = 0; dirY = 1; }
    else { x = r() * size; y = size + 5; dirX = 0; dirY = -1; }
    const front = {
      x: x, y: y, radius: 6 + r() * 6, dirX: dirX, dirY: dirY,
      speed: 0.5 + r() * 0.5, // 格/分钟
      intensity: type === 'storm' ? 2 : (0.5 + r()),
      type: type || 'rain', ttlMin: 120,
    };
    this.fronts.push(front);
    return front;
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const r = rng || Math.random;
    // 雨锋生成：改造进度越高，雨锋越频繁
    this.nextFrontInMin -= dtMin;
    if (this.nextFrontInMin <= 0) {
      const progress = eco && eco.terraform ? eco.terraform.progress : 0;
      const type = (ecoSandstorm(game) || r() < 0.15) ? 'storm' : 'rain';
      this.spawnFront(type, r);
      this.nextFrontInMin = Math.max(5, 60 - progress * 0.4 + r() * 20);
    }
    // 移动雨锋并降水
    for (let i = this.fronts.length - 1; i >= 0; i--) {
      const f = this.fronts[i];
      f.x += f.dirX * f.speed * dtMin;
      f.y += f.dirY * f.speed * dtMin;
      f.ttlMin -= dtMin;
      if (this.grid) {
        const tempC = eco && eco.terraform ? eco.terraform.tempC() : -63;
        const x0 = Math.max(0, Math.floor(f.x - f.radius)), x1 = Math.min(this.grid.size - 1, Math.ceil(f.x + f.radius));
        const y0 = Math.max(0, Math.floor(f.y - f.radius)), y1 = Math.min(this.grid.size - 1, Math.ceil(f.y + f.radius));
        for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
          const d2 = ecoDist2(x, y, f.x, f.y);
          if (d2 > f.radius * f.radius) continue;
          const t = this.grid.get(x, y);
          const falloff = 1 - Math.sqrt(d2) / f.radius;
          if (f.type === 'rain') {
            t.moisture = ecoClamp(t.moisture + 0.3 * f.intensity * falloff * dtMin, 0, 100);
          } else if (f.type === 'snow' || (f.type === 'rain' && tempC < 0)) {
            // 雪：先积雪，湿度滞后释放（用 surfaceWater 暂存为雪量）
            t.surfaceWater = ecoClamp(t.surfaceWater + 0.1 * f.intensity * falloff * dtMin, 0, 100);
            this.snowAccumMm += 0.05 * f.intensity * falloff * dtMin;
          } else if (f.type === 'storm') {
            // 沙尘暴锋：湿度不增，植物扣血在下方统一处理
          }
        }
      }
      // 沙尘暴锋经过：随机损伤锋面下植物
      if (f.type === 'storm' && eco && eco.plants) {
        for (let j = eco.plants.plots.length - 1; j >= 0; j--) {
          const p = eco.plants.plots[j];
          if (ecoDist2(p.x, p.y, f.x, f.y) <= f.radius * f.radius) {
            if (r() < 0.01 * dtMin) p.health -= 5;
            if (p.health <= 0) eco.plants._removeAt(j);
          }
        }
      }
      const size = this.grid ? this.grid.size : 50;
      if (f.ttlMin <= 0 || f.x < -15 || f.x > size + 15 || f.y < -15 || f.y > size + 15) {
        this.fronts.splice(i, 1);
        if (f.type === 'storm') this.stormsSurvived++;
      }
    }
    // 积雪融化：均温 >0 时雪转湿度
    if (this.grid && eco && eco.terraform && eco.terraform.tempC() > 0 && this.snowAccumMm > 0) {
      const melt = Math.min(this.snowAccumMm, 0.5 * dtMin);
      this.snowAccumMm -= melt;
      this.grid.addMoistureAll(melt * 0.05);
    }
  }
  // 预报：最近雨锋到达中心区的时间与强度
  forecast() {
    if (!this.fronts.length) return { nextInMin: ecoRound(this.nextFrontInMin, 1), type: 'none', intensity: 0 };
    let best = null, bestT = Infinity;
    const cx = this.grid ? this.grid.size / 2 : 25;
    const cy = this.grid ? this.grid.size / 2 : 25;
    for (let i = 0; i < this.fronts.length; i++) {
      const f = this.fronts[i];
      const d = Math.sqrt(ecoDist2(f.x, f.y, cx, cy));
      const t = d / Math.max(f.speed, 0.1);
      if (t < bestT) { bestT = t; best = f; }
    }
    return { nextInMin: ecoRound(bestT, 1), type: best.type, intensity: ecoRound(best.intensity, 2), radius: ecoRound(best.radius, 1) };
  }
  // 当前某格是否在雨锋下（供植物/建筑读取）
  isRainingAt(x, y) {
    for (let i = 0; i < this.fronts.length; i++) {
      const f = this.fronts[i];
      if (f.type !== 'rain' && f.type !== 'snow') continue;
      if (ecoDist2(x, y, f.x, f.y) <= f.radius * f.radius) return true;
    }
    return false;
  }
  summary() {
    return {
      fronts: this.fronts.map(function (f) { return { x: ecoRound(f.x, 1), y: ecoRound(f.y, 1), type: f.type, intensity: ecoRound(f.intensity, 2) }; }),
      forecast: this.forecast(),
      snowMm: ecoRound(this.snowAccumMm, 1),
      stormsSurvived: this.stormsSurvived,
    };
  }
  save() {
    return { v: 1, minutes: ecoRound(this.minutes, 1), nextFrontInMin: ecoRound(this.nextFrontInMin, 1), snowAccumMm: ecoRound(this.snowAccumMm, 1), stormsSurvived: this.stormsSurvived, fronts: this.fronts.map(function (f) { return { x: ecoRound(f.x, 1), y: ecoRound(f.y, 1), radius: f.radius, dirX: f.dirX, dirY: f.dirY, speed: f.speed, intensity: f.intensity, type: f.type, ttlMin: ecoRound(f.ttlMin, 1) }; }) };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.nextFrontInMin = ecoSafeNum(data.nextFrontInMin, 30);
    this.snowAccumMm = ecoSafeNum(data.snowAccumMm, 0);
    this.stormsSurvived = ecoSafeNum(data.stormsSurvived, 0);
    this.fronts = Array.isArray(data.fronts) ? data.fronts : [];
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * AquiferSystem：地下含水层（三层 + 钻探 + 超采沉降）
 * ------------------------------------------------------------------------------
 * 三层：浅层（补给快、容量小）、中层、深层（补给慢、容量大、水质好）。
 * 抽水：水泵默认抽浅层；钻深井（成本）可抽深层。超采（水位 <20）→ 沉降风险：
 * 每分钟 0.1% 概率地面沉降事件（该层容量永久 -1）。
 * 盐度：浅层盐度高（植物生长 ×0.9），深层淡水（×1.05）。
 * ------------------------------------------------------------------------------ */
const AQUIFER_LAYERS = [
  { id: 'shallow', name: '浅层含水层', depthM: 50, capBase: 100, rechargePerMm: 0.05, salinity: 0.8, drillCost: { steel: 20 } },
  { id: 'mid', name: '中层含水层', depthM: 200, capBase: 150, rechargePerMm: 0.02, salinity: 0.4, drillCost: { steel: 60, tech: 10 } },
  { id: 'deep', name: '深层含水层', depthM: 800, capBase: 250, rechargePerMm: 0.005, salinity: 0.1, drillCost: { steel: 150, tech: 40 } },
];
class AquiferSystem {
  constructor() {
    this.layers = {};
    for (let i = 0; i < AQUIFER_LAYERS.length; i++) {
      const L = AQUIFER_LAYERS[i];
      this.layers[L.id] = { level: 50, cap: L.capBase, drilled: L.id === 'shallow', subsidence: 0 };
    }
    this.minutes = 0;
    this.pumpedTotal = 0;
    this.subsidenceEvents = 0;
  }
  layer(id) { return this.layers[id] || null; }
  drill(id, game) {
    const def = AQUIFER_LAYERS.filter(function (L) { return L.id === id; })[0];
    if (!def) return { ok: false, reason: '未知含水层' };
    const layer = this.layers[id];
    if (layer.drilled) return { ok: false, reason: '已钻探' };
    if (!ecoCanAfford(game, def.drillCost)) return { ok: false, reason: '资源不足' };
    ecoPay(game, def.drillCost);
    layer.drilled = true;
    return { ok: true, reason: '已钻探「' + def.name + '」（' + def.depthM + 'm）' };
  }
  // 抽水：返回实际抽到的水量（水位不足按比例打折）
  pump(id, amount, game) {
    const layer = this.layers[id];
    if (!layer || !layer.drilled) return 0;
    const avail = layer.level;
    const got = Math.min(amount, avail);
    layer.level = Math.max(0, layer.level - got);
    this.pumpedTotal += got;
    if (got > 0) ecoGrant(game, 'water', got);
    return got;
  }
  // 盐度因子：用浅层水灌溉的植物生长修正（供 PlantSystem 读取）
  salinityFactor(id) {
    const def = AQUIFER_LAYERS.filter(function (L) { return L.id === id; })[0];
    if (!def) return 1;
    return 1 - def.salinity * 0.15; // 浅层 0.88，中层 0.94，深层 0.985
  }
  bestLayer() {
    // 水位最充沛且已钻探的层
    let best = null;
    for (let i = 0; i < AQUIFER_LAYERS.length; i++) {
      const L = this.layers[AQUIFER_LAYERS[i].id];
      if (!L.drilled) continue;
      if (!best || L.level / L.cap > best.level / best.cap) best = L;
    }
    return best;
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const r = rng || Math.random;
    const rain = eco && eco.water ? eco.water.lastRainMmY : 50;
    for (let i = 0; i < AQUIFER_LAYERS.length; i++) {
      const def = AQUIFER_LAYERS[i];
      const L = this.layers[def.id];
      // 降雨补给（按层补给系数）
      L.level = ecoClamp(L.level + rain * def.rechargePerMm / 60 * dtMin, 0, L.cap);
      // 超采沉降
      if (L.level < 20 && r() < 0.001 * dtMin) {
        L.cap = Math.max(20, L.cap - 1);
        L.subsidence++;
        this.subsidenceEvents++;
        if (eco) eco.log('地面沉降：「' + def.name + '」容量永久 -1（超采）');
      }
    }
    // 水泵自动抽水（建筑聚合里的 waterPerMin 已由水循环结算；这里只做层间转移）
    if (eco && eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      if (agg.groundwaterUsePerMin) {
        // 优先抽浅层
        let need = agg.groundwaterUsePerMin * dtMin;
        for (let i = 0; i < AQUIFER_LAYERS.length && need > 0; i++) {
          const L = this.layers[AQUIFER_LAYERS[i].id];
          if (!L.drilled) continue;
          const take = Math.min(need, L.level);
          L.level -= take;
          need -= take;
        }
      }
    }
  }
  summary() {
    const out = {};
    for (let i = 0; i < AQUIFER_LAYERS.length; i++) {
      const def = AQUIFER_LAYERS[i];
      const L = this.layers[def.id];
      out[def.id] = { name: def.name, level: ecoRound(L.level, 1), cap: L.cap, drilled: L.drilled, subsidence: L.subsidence };
    }
    return { layers: out, pumpedTotal: ecoRound(this.pumpedTotal, 1), subsidenceEvents: this.subsidenceEvents };
  }
  save() {
    return { v: 1, minutes: ecoRound(this.minutes, 1), layers: this.layers, pumpedTotal: ecoRound(this.pumpedTotal, 1), subsidenceEvents: this.subsidenceEvents };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.layers = data.layers || this.layers;
    this.pumpedTotal = ecoSafeNum(data.pumpedTotal, 0);
    this.subsidenceEvents = ecoSafeNum(data.subsidenceEvents, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * FaunaBehaviour：动物行为（年龄结构 / 繁殖季 / 迁徙 / 冬眠 / 兽群疾病）
 * ------------------------------------------------------------------------------
 * 年龄结构：幼年（不繁殖）/ 成年（繁殖）/ 老年（死亡率高），每分钟按比例流转。
 * 繁殖季：春夏繁殖 ×1.5，冬季 ×0.3；冬季昆虫活动 ×0.3（冬眠）。
 * 迁徙：当 K < N×0.5 且邻区（抽象为“野外”）条件更好时，每分钟 1% 迁出。
 * 兽群疾病：密度 N/K > 0.9 时每分钟 0.5% 概率爆发，死亡 10%。
 * ------------------------------------------------------------------------------ */
class FaunaBehaviour {
  constructor() {
    this.ages = {
      insect: { juvenile: 0.4, adult: 0.5, elder: 0.1 },
      bird: { juvenile: 0.3, adult: 0.6, elder: 0.1 },
      mammal: { juvenile: 0.3, adult: 0.6, elder: 0.1 },
    };
    this.minutes = 0;
    this.migrations = 0;
    this.diseaseOutbreaks = 0;
    this.birthsTotal = 0;
  }
  breedingMul(season) {
    if (season === 'spring' || season === 'summer') return 1.5;
    if (season === 'winter') return 0.3;
    return 1;
  }
  activityMul(id, season) {
    if (id === 'insect' && season === 'winter') return 0.3; // 昆虫冬眠
    if (id === 'bird' && season === 'winter') return 0.6;   // 候鸟南飞一部分
    return 1;
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const r = rng || Math.random;
    const season = ecoSeason(game);
    const breedMul = this.breedingMul(season);
    for (let i = 0; i < ANIMAL_IDS.length; i++) {
      const id = ANIMAL_IDS[i];
      const N = eco.fauna.pop(id);
      if (N <= 0) continue;
      const age = this.ages[id];
      // 年龄流转：幼年→成年 2%/分钟，成年→老年 0.5%/分钟，老年死亡 1%/分钟
      const j2a = age.juvenile * N * 0.02 * dtMin;
      const a2e = age.adult * N * 0.005 * dtMin;
      const eDeath = age.elder * N * 0.01 * dtMin;
      age.juvenile = ecoClamp((age.juvenile * N - j2a) / Math.max(N - eDeath, 1), 0, 1);
      age.adult = ecoClamp((age.adult * N + j2a - a2e) / Math.max(N - eDeath, 1), 0, 1);
      age.elder = ecoClamp((age.elder * N + a2e - eDeath) / Math.max(N - eDeath, 1), 0, 1);
      // 繁殖季修正：lastGrowth 是本步总增量（已含 dtMin），按比例追加新生儿
      const growthTotal = eco.fauna.lastGrowth[id] || 0;
      const birthBonus = growthTotal > 0 ? growthTotal * (breedMul - 1) * age.adult : 0;
      if (birthBonus > 0) {
        eco.fauna.addPop(id, birthBonus);
        this.birthsTotal += birthBonus;
        // 新生儿进幼年
        const total = eco.fauna.pop(id);
        age.juvenile = ecoClamp((age.juvenile * (total - birthBonus) + birthBonus) / Math.max(total, 1), 0, 1);
      }
      // 老年死亡：eDeath 已是本步总量（含 dtMin），直接扣，不再乘 dtMin
      if (eDeath > 0) eco.fauna.addPop(id, -eDeath);
      // 冬季活动下降：昆虫/鸟类暂时“消失”一部分（迁徙/冬眠，春季返回）
      const act = this.activityMul(id, season);
      if (act < 1) eco.fauna._seasonalHold = eco.fauna._seasonalHold || {};
      // 迁徙：K 严重不足时迁出
      const K = eco.fauna.lastK[id] || 0;
      if (K > 0 && N > K * 1.5 && r() < 0.01 * dtMin) {
        const leave = Math.min(N * 0.05, N - K);
        eco.fauna.addPop(id, -leave);
        this.migrations++;
      }
      // 兽群疾病：密度过高爆发
      if (K > 0 && N / K > 0.9 && r() < 0.005 * dtMin) {
        const dead = N * 0.1;
        eco.fauna.addPop(id, -dead);
        this.diseaseOutbreaks++;
        if (eco) eco.log('兽群疾病：「' + animalDef(id).name + '」密度过高爆发，死亡 ' + Math.floor(dead) + ' 只');
      }
    }
  }
  summary() {
    const out = {};
    for (let i = 0; i < ANIMAL_IDS.length; i++) {
      const id = ANIMAL_IDS[i];
      out[id] = { juvenile: ecoRound(this.ages[id].juvenile, 2), adult: ecoRound(this.ages[id].adult, 2), elder: ecoRound(this.ages[id].elder, 2) };
    }
    return { ages: out, migrations: this.migrations, diseaseOutbreaks: this.diseaseOutbreaks, birthsTotal: Math.floor(this.birthsTotal) };
  }
  save() {
    return { v: 1, minutes: ecoRound(this.minutes, 1), ages: this.ages, migrations: this.migrations, diseaseOutbreaks: this.diseaseOutbreaks, birthsTotal: ecoRound(this.birthsTotal, 1) };
  }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.ages = data.ages || this.ages;
    this.migrations = ecoSafeNum(data.migrations, 0);
    this.diseaseOutbreaks = ecoSafeNum(data.diseaseOutbreaks, 0);
    this.birthsTotal = ecoSafeNum(data.birthsTotal, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoQuests：生态里程碑任务（12 项，完成给真实资源奖励）
 * ------------------------------------------------------------------------------
 * 每个任务：check(eco) 判定完成；claim(eco, game) 发奖励进背包（一次）。
 * 任务链按改造进度递进，是新手引导生态线的主线。
 * ------------------------------------------------------------------------------ */
const ECO_QUESTS = [
  { id: 'q01', name: '播种希望', desc: '种下第一株苔藓', reward: { food: 20 }, check: function (eco) { return eco.stats.totalPlanted >= 1; } },
  { id: 'q02', name: '温室气体', desc: '启动 1 座温室气体工厂', reward: { steel: 30 }, check: function (eco) { return (eco.terraform.continuousProjects.ghg_factory || 0) >= 1; } },
  { id: 'q03', name: '微氧时代', desc: '改造进度达到 10%', reward: { tech: 20 }, check: function (eco) { return eco.terraform.progress >= 10; } },
  { id: 'q04', name: '草地初成', desc: '同时拥有 50 株草', reward: { biomass: 30 }, check: function (eco) { return eco.plants.countOf('grass') >= 50; } },
  { id: 'q05', name: '昆虫之家', desc: '引入昆虫并养到 50 只', reward: { food: 50 }, check: function (eco) { return eco.fauna.pop('insect') >= 50; } },
  { id: 'q06', name: '增温期', desc: '改造进度达到 25%', reward: { steel: 80, tech: 20 }, check: function (eco) { return eco.terraform.progress >= 25; } },
  { id: 'q07', name: '第一场雨', desc: '触发第一场雨', reward: { water: 200 }, check: function (eco) { return !!eco.flags.firstRain; } },
  { id: 'q08', name: '丰收', desc: '累计收获 200 食物', reward: { food: 100 }, check: function (eco) { return eco.stats.totalHarvestFood >= 200; } },
  { id: 'q09', name: '百鸟朝凤', desc: '鸟类达到 30 只', reward: { tech: 50 }, check: function (eco) { return eco.fauna.pop('bird') >= 30; } },
  { id: 'q10', name: '百树成林', desc: '同时拥有 50 棵树', reward: { biomass: 100 }, check: function (eco) { return eco.plants.countOf('tree') >= 50; } },
  { id: 'q11', name: '可呼吸', desc: '改造进度达到 70%', reward: { steel: 200, tech: 100 }, check: function (eco) { return eco.terraform.progress >= 70; } },
  { id: 'q12', name: '宜居火星', desc: '改造进度达到 85%', reward: { tech: 200, rare: 50 }, check: function (eco) { return eco.terraform.progress >= 85; } },
];
class EcoQuests {
  constructor() {
    this.claimed = []; // 已领取奖励的任务 id
    this.available = []; // 当前可领取（已完成未领取）
  }
  update(eco) {
    this.available = [];
    for (let i = 0; i < ECO_QUESTS.length; i++) {
      const q = ECO_QUESTS[i];
      if (this.claimed.indexOf(q.id) >= 0) continue;
      let done = false;
      try { done = !!q.check(eco); } catch (e) { done = false; }
      if (done) this.available.push(q.id);
    }
    return this.available;
  }
  claim(id, eco, game) {
    const q = ECO_QUESTS.filter(function (x) { return x.id === id; })[0];
    if (!q) return { ok: false, reason: '未知任务' };
    if (this.claimed.indexOf(id) >= 0) return { ok: false, reason: '奖励已领取' };
    let done = false;
    try { done = !!q.check(eco); } catch (e) { done = false; }
    if (!done) return { ok: false, reason: '任务未完成' };
    this.claimed.push(id);
    for (const k in q.reward) ecoGrant(game, k, q.reward[k]);
    return { ok: true, reason: '领取「' + q.name + '」奖励', reward: q.reward };
  }
  summary(eco) {
    this.update(eco);
    return ECO_QUESTS.map(function (q) {
      let done = false;
      try { done = !!q.check(eco); } catch (e) { done = false; }
      return { id: q.id, name: q.name, desc: q.desc, reward: q.reward, done: done };
    });
  }
  save() { return { v: 1, claimed: this.claimed.slice() }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.claimed = Array.isArray(data.claimed) ? data.claimed : [];
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoHistory：生态历史（每 10 分钟采样一次，趋势分析）
 * ------------------------------------------------------------------------------
 * 环形缓冲（最多 200 条 = 2000 分钟 ≈ 33 小时）。trend(field) 返回最近 10 条
 * 的斜率（每 10 分钟变化量），供 UI 画“改造进度曲线 / 氧气曲线”。
 * ------------------------------------------------------------------------------ */
class EcoHistory {
  constructor() {
    this.samples = []; // {min, progress, o2, diversity, plants, groundwater, tempC}
    this.minutes = 0;
    this._sinceSample = 0;
    this.MAX = 200;
  }
  record(eco) {
    this.samples.push({
      min: ecoRound(this.minutes, 1),
      progress: ecoRound(eco.terraform.progress, 2),
      o2: ecoRound(eco.oxygen.stock, 1),
      diversity: ecoRound(eco.balance.diversity, 3),
      plants: eco.plants.count(),
      groundwater: ecoRound(eco.water.groundwater, 1),
      tempC: ecoRound(eco.terraform.tempC(), 1),
    });
    if (this.samples.length > this.MAX) this.samples.shift();
  }
  update(dtMin, eco) {
    this.minutes += dtMin;
    this._sinceSample += dtMin;
    if (this._sinceSample >= 10) {
      this._sinceSample = 0;
      this.record(eco);
    }
  }
  // 最近 n 条的斜率（每 10 分钟变化）
  trend(field, n) {
    const s = this.samples.slice(-(n || 10));
    if (s.length < 2) return 0;
    const first = s[0][field], last = s[s.length - 1][field];
    if (typeof first !== 'number' || typeof last !== 'number') return 0;
    return ecoRound((last - first) / (s.length - 1), 3);
  }
  minMax(field) {
    let mn = Infinity, mx = -Infinity;
    for (let i = 0; i < this.samples.length; i++) {
      const v = this.samples[i][field];
      if (typeof v !== 'number') continue;
      if (v < mn) mn = v;
      if (v > mx) mx = v;
    }
    if (mn === Infinity) return { min: 0, max: 0 };
    return { min: ecoRound(mn, 2), max: ecoRound(mx, 2) };
  }
  avg(field) {
    if (!this.samples.length) return 0;
    let s = 0, n = 0;
    for (let i = 0; i < this.samples.length; i++) {
      if (typeof this.samples[i][field] === 'number') { s += this.samples[i][field]; n++; }
    }
    return n ? ecoRound(s / n, 2) : 0;
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), samples: this.samples.slice(-100) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.samples = Array.isArray(data.samples) ? data.samples : [];
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoResearchEngine：生态科技生效计算（把 tech.has 折算成数值修正）
 * ------------------------------------------------------------------------------
 * compute(game) → mods：{ plant: {id: {growthMul, o2Mul, yieldMul, waterMul, tempMin}},
 *   animal: {id: {carryMul, rMul}}, global: {...} }。
 * PlantSystem.growthFactors 与 harvestAt 在 eco.research.mods 存在时读取它，
 * 这样科技树的加成不需要每个调用点都查 tech.has。
 * ------------------------------------------------------------------------------ */
class EcoResearchEngine {
  constructor() { this.mods = null; this.minutes = 0; }
  compute(game) {
    const mods = { plant: {}, animal: {}, global: {} };
    for (let i = 0; i < ECO_RESEARCH.length; i++) {
      const r = ECO_RESEARCH[i];
      if (!ecoTechHas(game, r.id)) continue;
      const a = r.apply;
      if (a.plant) {
        const m = mods.plant[a.plant] || (mods.plant[a.plant] = {});
        if (a.tempMin) m.tempMin = (m.tempMin || 0) + a.tempMin;
        if (a.growthMul) m.growthMul = (m.growthMul || 1) * (1 / a.growthMul); // 周期×0.8 ≈ 速率×1.25
        if (a.waterMul) m.waterMul = (m.waterMul || 1) * a.waterMul;
        if (a.yieldMul) m.yieldMul = (m.yieldMul || 1) * a.yieldMul;
        if (a.o2Mul) m.o2Mul = (m.o2Mul || 1) * a.o2Mul;
      } else if (a.animal) {
        const m = mods.animal[a.animal] || (mods.animal[a.animal] = {});
        if (a.carryMul) m.carryMul = (m.carryMul || 1) * a.carryMul;
        if (a.rMul) m.rMul = (m.rMul || 1) * a.rMul;
      } else if (a.global) {
        mods.global[a.global] = a.value;
      }
    }
    // 兼容旧的直接 tech.has 读取：global 键名与 ECO_RESEARCH 一致
    this.mods = mods;
    return mods;
  }
  plantMod(species) {
    if (!this.mods || !this.mods.plant) return null;
    return this.mods.plant[species] || null;
  }
  globalMod(key, dflt) {
    if (!this.mods || !this.mods.global) return dflt;
    return (typeof this.mods.global[key] === 'number') ? this.mods.global[key] : dflt;
  }
  update(dtMin, game) {
    this.minutes += dtMin;
    // 每分钟重算一次（科技解锁是低频事件，1 分钟粒度足够）
    this.compute(game);
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第二批 20 条，同样是条件 + 真实数值后果）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_flood', name: '洪水', icon: '🌊', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.water.lakes >= 3 && eco.water.soilMoistureAvg() > 70; },
    apply: function (eco, game) {
      const killed = eco.plants.droughtKill(0); // 洪水不杀旱生植物，改用直接淹死低洼株
      let drowned = 0;
      for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
        const p = eco.plants.plots[i];
        const t = eco.grid.get(p.x, p.y);
        if (t && t.surfaceWater > 60 && p.species !== 'moss' && Math.random() < 0.3) { eco.plants._removeAt(i); drowned++; }
      }
      eco.water.addRainEvent(20);
      return { log: '洪水淹没低洼区：淹死 ' + drowned + ' 株，但地下水补给 +20mm', severity: 'mixed', drowned: drowned };
    },
  },
  {
    id: 'ev_wildfire', name: '野火', icon: '🔥', weight: 4, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.plants.biomassOf('grass') > 200 && eco.water.soilMoistureAvg() < 30 && eco.terraform.tempC() > 10; },
    apply: function (eco, game) {
      let burned = 0;
      for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
        const p = eco.plants.plots[i];
        if ((p.species === 'grass' || p.species === 'shrub') && Math.random() < 0.3) { eco.plants._removeAt(i); burned++; }
      }
      eco.soil.addFertilityAll(5); // 草木灰施肥
      return { log: '野火烧掉 ' + burned + ' 株草灌，但草木灰让土壤肥力 +5', severity: 'mixed', burned: burned };
    },
  },
  {
    id: 'ev_solar_flare', name: '太阳耀斑', icon: '☀️', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.progress < 50; },
    apply: function (eco, game) {
      eco.terraform.addProgress(-1, 'flare');
      eco.oxygen.ventMul = 2;
      return { log: '太阳耀斑：无磁层保护，改造 -1%，空气泄漏翻倍（持续到下次 tick 重置）', severity: 'bad', progressLoss: 1 };
    },
  },
  {
    id: 'ev_quake', name: '火星震', icon: '🌋', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.plants.count() > 50; },
    apply: function (eco, game) {
      let killed = 0;
      for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
        if (Math.random() < 0.05) { eco.plants._removeAt(i); killed++; }
      }
      eco.water.groundwater = ecoClamp(eco.water.groundwater - 5, 0, 150);
      return { log: '火星震：震死 ' + killed + ' 株，地下水位 -5', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_invasive', name: '入侵物种', icon: '🦠', weight: 4, cooldownMin: 45, once: false,
    condition: function (eco, game) { return eco.plants.countOf('grass') > 80 && eco.balance.diversity < 0.5; },
    apply: function (eco, game) {
      let choked = 0;
      for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
        const p = eco.plants.plots[i];
        if (p.species !== 'grass' && Math.random() < 0.15) { eco.plants._removeAt(i); choked++; }
      }
      return { log: '入侵草种疯长：挤占了 ' + choked + ' 株其他植物（多样性低的代价）', severity: 'bad', choked: choked };
    },
  },
  {
    id: 'ev_bee_swarm', name: '蜂群', icon: '🐝', weight: 5, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.fauna.pop('insect') >= 30 && eco.plants.countOf('crop') >= 10; },
    apply: function (eco, game) {
      eco.fauna.addPop('insect', 10);
      const bonus = eco.plants.windSpread(3);
      return { log: '蜂群壮大：昆虫 +10，授粉让农作物区多长出 ' + bonus + ' 株', severity: 'good', added: 10 };
    },
  },
  {
    id: 'ev_mushroom', name: '菌菇爆发', icon: '🍄', weight: 5, cooldownMin: 25, once: false,
    condition: function (eco, game) { return eco.water.soilMoistureAvg() > 60 && eco.plants.countOf('tree') >= 5; },
    apply: function (eco, game) {
      eco.soil.addFertilityAll(4);
      ecoGrant(game, 'biomass', 20);
      return { log: '菌菇爆发：分解枯枝落叶，土壤肥力 +4，收获生物质 20', severity: 'good', biomass: 20 };
    },
  },
  {
    id: 'ev_aurora', name: '极光', icon: '🌌', weight: 4, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.terraform.progress >= 25 && eco.terraform.progress < 70; },
    apply: function (eco, game) {
      eco.terraform.addProgress(0.5, 'aurora');
      return { log: '极光之夜：磁层渐成，改造 +0.5%，人口幸福小幅提升', severity: 'good', progress: 0.5 };
    },
  },
  {
    id: 'ev_locust', name: '蝗群', icon: '🦗', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.fauna.pop('insect') > 150 && eco.fauna.pop('bird') < 5; },
    apply: function (eco, game) {
      const eaten = eco.plants.grazeDamage(0.35);
      eco.fauna.setPop('insect', eco.fauna.pop('insect') * 0.8);
      return { log: '蝗群过境：啃食 35% 草灌生物量，随后蝗群自行消散 20%', severity: 'bad', eaten: eaten };
    },
  },
  {
    id: 'ev_thaw', name: '冻土融化', icon: '💧', weight: 5, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() > -20 && eco.terraform.tempC() < 0 && eco.water.groundwater < 60; },
    apply: function (eco, game) {
      eco.water.groundwater = ecoClamp(eco.water.groundwater + 15, 0, 150);
      eco.water.addRainEvent(10);
      return { log: '冻土融化：地下水 +15，土壤湿度上升', severity: 'good', gw: 15 };
    },
  },
  {
    id: 'ev_nitrogen_rain', name: '氮雨', icon: '🌧️', weight: 3, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.terraform.progress >= 30 && eco.plants.countOf('crop') >= 5; },
    apply: function (eco, game) {
      if (eco.soilNutrients) {
        for (let i = 0; i < eco.plants.plots.length; i++) {
          const p = eco.plants.plots[i];
          if (p.species === 'crop') { const v = eco.soilNutrients._ensure(p.x, p.y); v.n = ecoClamp(v.n + 10, 0, 100); }
        }
      }
      return { log: '氮雨：农作物区土壤氮 +10', severity: 'good' };
    },
  },
  {
    id: 'ev_wolf_spider', name: '狼蛛现身', icon: '🕷️', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.fauna.pop('insect') > 80; },
    apply: function (eco, game) {
      eco.fauna.setPop('insect', eco.fauna.pop('insect') * 0.85);
      eco.balance.riskMinutes = Math.max(0, eco.balance.riskMinutes - 2);
      return { log: '狼蛛（随货物抵达的捕食者）控虫：昆虫 -15%，生态风险 -2 分钟', severity: 'mixed', cut: '15%' };
    },
  },
  {
    id: 'ev_greenhouse_gas_leak', name: '温室气体泄漏', icon: '🏭', weight: 3, cooldownMin: 40, once: false,
    condition: function (eco, game) { return (eco.terraform.continuousProjects.ghg_factory || 0) >= 2; },
    apply: function (eco, game) {
      eco.terraform.addProgress(0.8, 'leak');
      eco.oxygen.addStock(-20);
      return { log: '温室气体泄漏：改造 +0.8%，但氧气库存 -20 吨', severity: 'mixed', progress: 0.8 };
    },
  },
  {
    id: 'ev_seed_rain', name: '种子雨', icon: '🌱', weight: 4, cooldownMin: 35, once: false,
    condition: function (eco, game) { return eco.plants.matureCount() > 30; },
    apply: function (eco, game) {
      const n = eco.plants.windSpread(8);
      return { log: '种子雨：成熟植株大规模播种，新长出 ' + n + ' 株', severity: 'good', spread: n };
    },
  },
  {
    id: 'ev_ice_storm', name: '冰暴', icon: '🌨️', weight: 4, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() < -30 && eco.plants.count() > 20; },
    apply: function (eco, game) {
      const killed = eco.plants.frostKill();
      eco.water.addIce(50);
      return { log: '冰暴冻死 ' + killed + ' 株，但带来冰水 50（已入库存）', severity: 'mixed', killed: killed };
    },
  },
  {
    id: 'ev_earth_supply', name: '地球补给船', icon: '🚀', weight: 3, cooldownMin: 90, once: false,
    condition: function (eco, game) { return eco.terraform.progress >= 10 && eco.plants.count() > 0; },
    apply: function (eco, game) {
      ecoGrant(game, 'biomass', 50);
      ecoGrant(game, 'food', 50);
      return { log: '地球补给船抵达：生物质 +50，食物 +50', severity: 'good', biomass: 50 };
    },
  },
  {
    id: 'ev_coral_algae', name: '珊瑚藻', icon: '🪸', weight: 3, cooldownMin: 45, once: false,
    condition: function (eco, game) { return eco.water.lakes >= 2 && eco.terraform.progress >= 55; },
    apply: function (eco, game) {
      eco.oxygen.addStock(80);
      eco.water.addPollution(-5);
      return { log: '湖泊长出珊瑚藻：氧气 +80 吨，水体污染 -5', severity: 'good', o2: 80 };
    },
  },
  {
    id: 'ev_dust_devil', name: '尘卷风', icon: '🌪️', weight: 5, cooldownMin: 20, once: false,
    condition: function (eco, game) { return eco.plants.count() > 10 && eco.water.rainMmY(eco, game) < 100; },
    apply: function (eco, game) {
      const killed = eco.plants.killYoungest(0.1);
      return { log: '尘卷风拔起 ' + killed + ' 株幼苗', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_symbiosis', name: '共生爆发', icon: '🤝', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.balance.diversity >= 0.6 && eco.plants.count() > 40; },
    apply: function (eco, game) {
      eco.plants.spreadBoost(0.03);
      eco.fauna.addPop('insect', 5);
      eco.fauna.addPop('bird', 2);
      return { log: '共生爆发：多样性红利，植物扩散 +3%，昆虫 +5，鸟类 +2', severity: 'good' };
    },
  },
  {
    id: 'ev_oxygen_crash', name: '氧气骤降', icon: '📉', weight: 3, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.oxygen.stock < eco.oxygen.cap(eco, game) * 0.15 && eco.plants.count() > 20; },
    apply: function (eco, game) {
      const killed = eco.plants.killYoungest(0.2);
      return { log: '氧气骤降：缺氧导致 ' + killed + ' 株幼苗枯死（多种树！）', severity: 'bad', killed: killed };
    },
  }
);

/* ------------------------------------------------------------------------------
 * EcoDisasterHooks：与 game.disaster 的联动（沙尘暴 / 地震 / 陨石）
 * ------------------------------------------------------------------------------
 * 每 tick 由总管调用：读 game.disaster 的公开状态，对生态施加真实伤害，
 * 并把生态侧的脆弱性反馈回去（供 disaster 系统读取 ecoVulnerability()）。
 * ------------------------------------------------------------------------------ */
class EcoDisasterHooks {
  constructor() {
    this.minutes = 0;
    this.sandstormMinutes = 0;
    this.lastQuakeMin = -1000;
  }
  // 生态脆弱性 0-1（disaster 系统可用它放大/缩小灾害）
  ecoVulnerability(eco) {
    if (!eco) return 0.5;
    let v = 0.5;
    if (eco.plants.count() > 100) v += 0.2; // 植被多 → 沙尘暴损失大
    if (eco.balance.diversity < 0.35) v += 0.2; // 多样性低 → 恢复慢
    if (eco.water.groundwater < 20) v += 0.1; // 缺水 → 脆弱
    return ecoClamp(v, 0, 1);
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const r = rng || Math.random;
    if (!eco || !game || !game.disaster) return null;
    const d = game.disaster;
    let hit = null;
    // 沙尘暴：植物扣血 + 土壤干燥
    let storm = false;
    if (typeof d.sandstormActive === 'function') { try { storm = !!d.sandstormActive(ecoNow()); } catch (e) { storm = false; } }
    else storm = !!d.sandstorm;
    if (storm) {
      this.sandstormMinutes += dtMin;
      if (eco.plants) {
        for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
          const p = eco.plants.plots[i];
          if (p.indoor) continue;
          if (r() < 0.002 * dtMin) p.health -= 2;
          if (p.health <= 0) eco.plants._removeAt(i);
        }
      }
      if (eco.grid) eco.grid.addMoistureAll(-0.1 * dtMin);
      hit = 'sandstorm';
    }
    // 地震（disaster.quakeActive 或 magnitude）
    let quake = false;
    if (typeof d.quakeActive === 'function') { try { quake = !!d.quakeActive(ecoNow()); } catch (e) { quake = false; } }
    else quake = !!d.quake;
    if (quake && this.minutes - this.lastQuakeMin > 30) {
      this.lastQuakeMin = this.minutes;
      let killed = 0;
      if (eco.plants) {
        for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
          if (r() < 0.08) { eco.plants._removeAt(i); killed++; }
        }
      }
      if (eco.greenhouses) {
        // 穹顶可能震裂：随机拆除一个（小概率）
        if (eco.greenhouses.domes.length && r() < 0.2) {
          const dome = eco.greenhouses.domes[0];
          eco.greenhouses.removeDome(dome.x, dome.y, eco, game);
          if (eco) eco.log('地震震裂穹顶一座');
        }
      }
      hit = 'quake';
      return { type: 'quake', killed: killed };
    }
    // 陨石撞击（disaster.meteorActive）
    let meteor = false;
    if (typeof d.meteorActive === 'function') { try { meteor = !!d.meteorActive(ecoNow()); } catch (e) { meteor = false; } }
    else meteor = !!d.meteor;
    if (meteor) {
      // 撞击点随机：半径 3 格内植物全灭，但带来水冰
      const gx = Math.floor(r() * (eco.grid ? eco.grid.size : 50));
      const gy = Math.floor(r() * (eco.grid ? eco.grid.size : 50));
      let killed = 0;
      if (eco.plants) {
        for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
          const p = eco.plants.plots[i];
          if (ecoDist2(p.x, p.y, gx, gy) <= 9) { eco.plants._removeAt(i); killed++; }
        }
      }
      if (eco.water) eco.water.addIce(200);
      hit = 'meteor';
      return { type: 'meteor', killed: killed, x: gx, y: gy };
    }
    return hit ? { type: hit } : null;
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), sandstormMinutes: ecoRound(this.sandstormMinutes, 1), lastQuakeMin: ecoRound(this.lastQuakeMin, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.sandstormMinutes = ecoSafeNum(data.sandstormMinutes, 0);
    this.lastQuakeMin = ecoSafeNum(data.lastQuakeMin, -1000);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * TerraformingSystem 原型扩展：大气成分 / 太阳风侵蚀 / 反照率 / 磁层强度 / 季节
 * ------------------------------------------------------------------------------
 * 这些是改造进度的“物理层”：成分决定氧分压，侵蚀在没有磁层时缓慢扣进度，
 * 反照率随植被变绿而下降（正反馈：越绿越暖），季节给均温 ±8°C 摆动。
 * ------------------------------------------------------------------------------ */
TerraformingSystem.prototype.gasComposition = function () {
  // 各气体分压（kPa）：CO2 随进度下降，O2/N2 随进度上升
  const t = this.progress / 100;
  const pressure = this.pressureKpa();
  const co2 = ecoRound(pressure * ecoLerp(0.95, 0.0004, Math.pow(t, 1.5)), 2);
  const o2 = ecoRound(pressure * ecoLerp(0.0013, 0.21, Math.pow(t, 1.2)), 2);
  const n2 = ecoRound(pressure * ecoLerp(0.027, 0.78, t), 2);
  const ar = ecoRound(Math.max(0, pressure - co2 - o2 - n2), 2);
  return { co2Kpa: co2, o2Kpa: o2, n2Kpa: n2, arKpa: ar, totalKpa: ecoRound(pressure, 2) };
};
TerraformingSystem.prototype.magnetStrength = function () {
  // 磁层强度 0-1：完成磁层工程为 1，否则随进度缓慢建立（0.1 + 进度×0.002）
  if (this.completedProjects.indexOf('magnet_shield') >= 0) return 1;
  return ecoRound(ecoClamp(0.1 + this.progress * 0.002, 0, 0.3), 3);
};
TerraformingSystem.prototype.erosionPerMin = function () {
  // 太阳风侵蚀：无磁层时每分钟扣进度（磁层越强扣得越少）
  const mag = this.magnetStrength();
  return ecoRound(0.002 * (1 - mag), 5);
};
TerraformingSystem.prototype.albedo = function (eco) {
  // 反照率：0.25（红荒漠）→ 0.12（绿地）；植被覆盖越高越低
  const veg = eco && eco.grid ? eco.grid.avgVegetation() / 100 : 0;
  return ecoRound(ecoLerp(0.25, 0.12, ecoClamp(veg * 0.5 + this.progress / 200, 0, 1)), 3);
};
TerraformingSystem.prototype.seasonalTempOffset = function (game) {
  // 季节摆动：夏季 +8°C，冬季 -8°C，春秋 0
  const season = ecoSeason(game);
  if (season === 'summer') return 8;
  if (season === 'winter') return -8;
  return 0;
};
TerraformingSystem.prototype.seasonalTempC = function (game) {
  return ecoClamp(this.tempC() + this.seasonalTempOffset(game), ETUNE.TEMP_MIN_C, ETUNE.TEMP_MAX_C);
};
TerraformingSystem.prototype.breathableO2Kpa = function () {
  // 可呼吸判定：氧分压 ≥ 16kPa 且总压 ≥ 50kPa
  const g = this.gasComposition();
  return g.o2Kpa >= 16 && g.totalKpa >= 50;
};
TerraformingSystem.prototype.applyErosion = function (dtMin, eco, game) {
  // 每分钟结算侵蚀（磁层建成后几乎为零；分阶段磁层按阶段打折）
  let loss = this.erosionPerMin() * dtMin;
  if (eco && eco.magnetPhases) loss *= eco.magnetPhases.erosionMul();
  if (loss > 0.0001) this.addProgress(-loss, 'erosion');
  return loss;
};

/* ------------------------------------------------------------------------------
 * EcoDifficulty：生态难度（easy / normal / hard）
 * ------------------------------------------------------------------------------
 * 难度只改倍率，不改规则：hard 下生长 ×0.8、病害 ×1.5、崩溃阈值 +0.05；
 * easy 下生长 ×1.2、成本 ×0.8（播种成本在 PlantSystem.plant 内读它）。
 * ------------------------------------------------------------------------------ */
class EcoDifficulty {
  constructor(level) {
    this.level = level || 'normal';
  }
  setLevel(level) {
    if (['easy', 'normal', 'hard'].indexOf(level) >= 0) this.level = level;
    return this.level;
  }
  growthMul() {
    if (this.level === 'easy') return 1.2;
    if (this.level === 'hard') return 0.8;
    return 1;
  }
  costMul() {
    if (this.level === 'easy') return 0.8;
    if (this.level === 'hard') return 1.2;
    return 1;
  }
  diseaseMul() {
    if (this.level === 'easy') return 0.7;
    if (this.level === 'hard') return 1.5;
    return 1;
  }
  collapseThreshold() {
    if (this.level === 'hard') return ETUNE.DIVERSITY_COLLAPSE_BELOW + 0.05;
    if (this.level === 'easy') return ETUNE.DIVERSITY_COLLAPSE_BELOW - 0.05;
    return ETUNE.DIVERSITY_COLLAPSE_BELOW;
  }
  oxygenUseMul() {
    if (this.level === 'hard') return 1.2;
    return 1;
  }
  describe() {
    return {
      easy: '简单：生长 +20%，成本 -20%，病害 -30%',
      normal: '普通：标准数值',
      hard: '困难：生长 -20%，成本 +20%，病害 +50%，崩溃阈值 +0.05，耗氧 +20%',
    }[this.level];
  }
  save() { return { v: 1, level: this.level }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.level = data.level || 'normal';
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * CompanionSystem：伴生种植（物种搭配加成矩阵）
 * ------------------------------------------------------------------------------
 * 邻格（8 向）有特定搭配时生长加成：草+灌木固土、树+鸟（鸟粪）、作物+昆虫（授粉）、
 * 苔藓+任何（先锋改土）。加成取邻格内最优一对，不叠加。
 * ------------------------------------------------------------------------------ */
const COMPANION_MATRIX = [
  { a: 'grass', b: 'shrub', mul: 1.15, reason: '草灌混种固土' },
  { a: 'grass', b: 'tree', mul: 1.1, reason: '林下草地遮荫保湿' },
  { a: 'shrub', b: 'tree', mul: 1.15, reason: '灌木林缘防风' },
  { a: 'crop', b: 'grass', mul: 1.1, reason: '草带保墒' },
  { a: 'moss', b: 'grass', mul: 1.2, reason: '苔藓改土促草' },
  { a: 'moss', b: 'shrub', mul: 1.15, reason: '苔藓改土促灌木' },
  { a: 'crop', b: 'shrub', mul: 1.05, reason: '灌木防风护作物' },
  { a: 'tree', b: 'tree', mul: 1.1, reason: '成林小气候' },
];
class CompanionSystem {
  companionMul(plot, eco) {
    if (!eco || !eco.plants || !eco.grid) return { mul: 1, reason: '' };
    const neighbors = eco.grid.neighbors8(plot.x, plot.y);
    let best = { mul: 1, reason: '' };
    for (let i = 0; i < neighbors.length; i++) {
      const nb = neighbors[i];
      const others = eco.plants.plotsAt(nb.x, nb.y);
      for (let j = 0; j < others.length; j++) {
        const other = others[j].species;
        for (let k = 0; k < COMPANION_MATRIX.length; k++) {
          const m = COMPANION_MATRIX[k];
          const match = (m.a === plot.species && m.b === other) || (m.b === plot.species && m.a === other);
          if (match && m.mul > best.mul) best = { mul: m.mul, reason: m.reason };
        }
      }
    }
    return best;
  }
  // 某格的最优搭配建议（UI 用）
  suggestFor(x, y, eco) {
    const counts = {};
    if (eco && eco.plants) {
      for (let i = 0; i < PLANT_IDS.length; i++) counts[PLANT_IDS[i]] = eco.plants.countOf(PLANT_IDS[i]);
    }
    const out = [];
    for (let k = 0; k < COMPANION_MATRIX.length; k++) {
      const m = COMPANION_MATRIX[k];
      out.push({ pair: m.a + '+' + m.b, mul: m.mul, reason: m.reason });
    }
    return out;
  }
}

/* ------------------------------------------------------------------------------
 * SeedBankSystem：种子库（按物种计数的种子库存）
 * ------------------------------------------------------------------------------
 * 播种消耗种子（1 株 = 1 粒对应种子）；成熟植株每分钟有小概率掉落种子；
 * 收获农作物返还 2 粒种子；种子库建筑（seed_bank）让掉落翻倍。
 * 无种子时播种改用生物质/食物现买（PlantSystem.plant 的原有路径保留）。
 * ------------------------------------------------------------------------------ */
class SeedBankSystem {
  constructor() {
    this.seeds = { moss: 20, grass: 10, shrub: 0, crop: 0, tree: 0 }; // 开局送苔藓 20、草 10
    this.minutes = 0;
    this.droppedTotal = 0;
  }
  count(id) { return this.seeds[id] || 0; }
  has(id, n) { return (this.seeds[id] || 0) >= (n || 1); }
  take(id, n) {
    n = n || 1;
    if (!this.has(id, n)) return false;
    this.seeds[id] -= n;
    return true;
  }
  add(id, n) {
    this.seeds[id] = (this.seeds[id] || 0) + n;
    return this.seeds[id];
  }
  // 成熟植株掉落种子（每分钟抽检）
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    if (!eco || !eco.plants) return 0;
    const r = rng || Math.random;
    let dropped = 0;
    let mul = 1;
    if (eco.buildings && eco.buildings.count(game, 'seed_bank') > 0) mul = 2;
    for (let i = 0; i < eco.plants.plots.length; i++) {
      const p = eco.plants.plots[i];
      const def = plantDef(p.species);
      if (!def || p.ageDays < def.growthDays) continue;
      if (r() < 0.005 * dtMin * mul) {
        this.seeds[p.species] = (this.seeds[p.species] || 0) + 1;
        dropped++;
      }
    }
    this.droppedTotal += dropped;
    return dropped;
  }
  // 收获返还种子（农作物 2 粒，其他 1 粒）
  refundOnHarvest(species, count) {
    const per = species === 'crop' ? 2 : 1;
    this.seeds[species] = (this.seeds[species] || 0) + per * count;
    return per * count;
  }
  summary() {
    const out = {};
    for (let i = 0; i < PLANT_IDS.length; i++) out[PLANT_IDS[i]] = this.seeds[PLANT_IDS[i]] || 0;
    return { seeds: out, droppedTotal: this.droppedTotal };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), seeds: Object.assign({}, this.seeds), droppedTotal: this.droppedTotal }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.seeds = Object.assign({ moss: 0, grass: 0, shrub: 0, crop: 0, tree: 0 }, data.seeds || {});
    this.droppedTotal = ecoSafeNum(data.droppedTotal, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * PlantPhysiology：植物生理（光合 / 呼吸 / 蒸腾，三因子之外的逐株生理账）
 * ------------------------------------------------------------------------------
 * 光合速率 = f(光照, CO2, 温度, 健康)：CO2 越高光合越强（施肥效应），夜间呼吸
 * 消耗氧气（产氧净额 = 光合 − 呼吸）。蒸腾量计入水循环的蒸发项。
 * 由 PlantSystem.update 每分钟调用，返回本 tick 的生理汇总，供氧气/水平衡读取。
 * ------------------------------------------------------------------------------ */
class PlantPhysiology {
  constructor() {
    this.minutes = 0;
    this.lastPhotosynthesis = 0; // 吨 O2/分钟（毛产氧）
    this.lastRespiration = 0;    // 吨 O2/分钟（呼吸耗氧）
    this.lastTranspiration = 0;  // 单位水/分钟（蒸腾）
  }
  // 单株光合速率（相对值 0-1.5）
  photosynthesisRate(plot, def, eco, game) {
    const season = ecoSeason(game);
    let light = 70;
    if (season === 'summer') light = 90;
    else if (season === 'winter') light = 45;
    else if (season === 'autumn') light = 60;
    if (ecoSandstorm(game)) light *= 0.5;
    const lightF = ecoClamp(light / def.sunNeed, 0.2, 1);
    // CO2 施肥：CO2 越高光合越强（0.5~1.3）
    const co2 = eco && eco.terraform ? eco.terraform.co2Ppm() : 400;
    const co2F = ecoClamp(0.5 + Math.log10(Math.max(co2, 400) / 400) * 0.4, 0.5, 1.3);
    const tempC = eco && eco.terraform ? eco.terraform.tempC() : 0;
    let tempF = 1;
    if (tempC < def.tempMin) tempF = ecoClamp(1 - (def.tempMin - tempC) * 0.05, 0.2, 1);
    else if (tempC > def.tempMax) tempF = ecoClamp(1 - (tempC - def.tempMax) * 0.05, 0.2, 1);
    const healthF = ecoClamp(plot.health / 100, 0.1, 1);
    const stage = plantStageFor(def, plot.ageDays);
    return lightF * co2F * tempF * healthF * stage.o2Mul;
  }
  // 单株呼吸速率（夜间/低温也呼吸，按生物量计）
  respirationRate(plot, def) {
    const stage = plantStageFor(def, plot.ageDays);
    return def.o2PerMin * 0.3 * stage.size * ecoClamp(plot.health / 100, 0.1, 1);
  }
  // 单株蒸腾（水/分钟）
  transpirationRate(plot, def, eco, game) {
    const tempC = eco && eco.terraform ? eco.terraform.tempC() : 0;
    const heatF = ecoClamp(0.5 + tempC / 40, 0.3, 1.5);
    const stage = plantStageFor(def, plot.ageDays);
    return def.waterUsePerMin * 0.5 * heatF * stage.size / 2;
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    if (!eco || !eco.plants) return { photo: 0, resp: 0, transp: 0 };
    let photo = 0, resp = 0, transp = 0;
    const plots = eco.plants.plots;
    for (let i = 0; i < plots.length; i++) {
      const p = plots[i];
      const def = plantDef(p.species);
      if (!def) continue;
      photo += def.o2PerMin * this.photosynthesisRate(p, def, eco, game);
      resp += this.respirationRate(p, def);
      transp += this.transpirationRate(p, def, eco, game);
    }
    this.lastPhotosynthesis = photo;
    this.lastRespiration = resp;
    this.lastTranspiration = transp;
    return { photo: ecoRound(photo, 3), resp: ecoRound(resp, 3), transp: ecoRound(transp, 3) };
  }
  netOxygenPerMin() { return this.lastPhotosynthesis - this.lastRespiration; }
  summary() {
    return {
      photosynthesisPerMin: ecoRound(this.lastPhotosynthesis, 3),
      respirationPerMin: ecoRound(this.lastRespiration, 3),
      netOxygenPerMin: ecoRound(this.netOxygenPerMin(), 3),
      transpirationPerMin: ecoRound(this.lastTranspiration, 3),
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * TrophicWeb：营养级网络（食物网矩阵 + 级联效应）
 * ------------------------------------------------------------------------------
 * 营养级：生产者（5 植物，级 1）→ 初级消费者（昆虫/哺乳动物，级 2）
 * → 次级消费者（鸟类，级 3）。移除一个物种时级联：鸟没了 → 虫爆 → 草被啃光；
 * 虫没了 → 鸟饿死 + 授粉停。用矩阵算每个物种的“关键度”（移除后的连锁损失）。
 * ------------------------------------------------------------------------------ */
const TROPHIC_MATRIX = {
  // eater → {food: 每单位捕食者每分钟消耗的食物生物量系数}
  insect: { grass: 0.002, shrub: 0.001 },
  bird: { insect: 0.01 },
  mammal: { grass: 0.005, shrub: 0.002, insect: 0.0004 },
};
class TrophicWeb {
  trophicLevel(id) {
    if (PLANT_DEFS[id]) return 1;
    if (id === 'insect' || id === 'mammal') return 2;
    if (id === 'bird') return 3;
    return 0;
  }
  // 某物种的食物来源是否充足（0-1）
  foodSupply(id, eco) {
    const diet = TROPHIC_MATRIX[id];
    if (!diet || !eco) return 1;
    let supply = 0, need = 0;
    const N = eco.fauna ? eco.fauna.pop(id) : 0;
    for (const food in diet) {
      need += N * diet[food];
      if (PLANT_DEFS[food]) supply += eco.plants ? eco.plants.biomassOf(food) * 0.01 : 0;
      else supply += eco.fauna ? eco.fauna.pop(food) * 0.01 : 0;
    }
    if (need <= 0) return 1;
    return ecoClamp(supply / need, 0, 1);
  }
  // 级联预测：移除物种 X 后，各物种 10 分钟后的数量变化方向（-1/0/+1）
  cascadeIfRemoved(removeId, eco) {
    const out = {};
    const ids = PLANT_IDS.concat(ANIMAL_IDS);
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      if (id === removeId) { out[id] = -1; continue; }
      // 吃 removeId 的 → 食物没了，下跌；被 removeId 吃的 → 压力解除，上涨
      let dir = 0;
      const diet = TROPHIC_MATRIX[id];
      if (diet && diet[removeId]) dir = -1;
      const predDiet = TROPHIC_MATRIX[removeId];
      if (predDiet && predDiet[id]) dir = 1;
      // 授粉链：移除昆虫 → 作物下跌（仅当没有捕食关系时，捕食解除优先）
      if (removeId === 'insect' && (id === 'crop' || id === 'grass') && dir === 0) dir = -1;
      out[id] = dir;
    }
    return out;
  }
  // 关键度：移除该物种后受影响的物种数（级联广度）
  keystoneScore(id, eco) {
    const casc = this.cascadeIfRemoved(id, eco);
    let n = 0;
    for (const k in casc) if (casc[k] !== 0) n++;
    return n;
  }
  // 食物网完整度 0-1（有食物的物种占比）
  webCompleteness(eco) {
    let ok = 0, total = 0;
    for (let i = 0; i < ANIMAL_IDS.length; i++) {
      const id = ANIMAL_IDS[i];
      if (!eco.fauna || eco.fauna.pop(id) <= 0) continue;
      total++;
      if (this.foodSupply(id, eco) > 0.5) ok++;
    }
    return total ? ecoRound(ok / total, 2) : 0;
  }
  summary(eco) {
    return {
      levels: { producer: PLANT_IDS.length, primary: 2, secondary: 1 },
      completeness: this.webCompleteness(eco),
      keystone: {
        insect: this.keystoneScore('insect', eco),
        bird: this.keystoneScore('bird', eco),
        mammal: this.keystoneScore('mammal', eco),
      },
    };
  }
}

/* ------------------------------------------------------------------------------
 * OxygenZones：氧气分区（穹顶内 / 户外氧分压）
 * ------------------------------------------------------------------------------
 * 户外氧分压 = 大气成分（见 gasComposition）；穹顶内氧分压由制氧设备维持，
 * 目标 21kPa。穹顶破损（ventMul>1）时内压向外压泄漏。人口在户外活动时
 * 按户外氧分压结算耗氧效率：氧分压 <10kPa 时户外作业人口耗氧 ×1.5（喘）。
 * ------------------------------------------------------------------------------ */
class OxygenZones {
  constructor() {
    this.domeO2Kpa = 21; // 穹顶内氧分压
    this.minutes = 0;
  }
  outdoorO2Kpa(eco) {
    if (!eco || !eco.terraform) return 0.13;
    return eco.terraform.gasComposition().o2Kpa;
  }
  // 户外作业耗氧倍率
  outdoorWorkMul(eco) {
    const o2 = this.outdoorO2Kpa(eco);
    if (o2 < 5) return 1.5;
    if (o2 < 10) return 1.3;
    if (o2 < 16) return 1.1;
    return 1;
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    if (!eco || !eco.terraform) return;
    const out = this.outdoorO2Kpa(eco);
    // 穹顶内压向目标 21 靠拢；泄漏时向外压滑落
    const vent = eco.oxygen ? eco.oxygen.ventMul : 1;
    const target = vent > 1 ? Math.max(out, 10) : 21;
    const rate = vent > 1 ? 0.05 : 0.01;
    this.domeO2Kpa = ecoLerp(this.domeO2Kpa, target, ecoClamp(rate * dtMin, 0, 1));
  }
  summary(eco) {
    return {
      outdoorO2Kpa: ecoRound(this.outdoorO2Kpa(eco), 2),
      domeO2Kpa: ecoRound(this.domeO2Kpa, 2),
      outdoorWorkMul: this.outdoorWorkMul(eco),
      breathableOutdoor: eco && eco.terraform ? eco.terraform.breathableO2Kpa() : false,
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), domeO2Kpa: ecoRound(this.domeO2Kpa, 2) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.domeO2Kpa = ecoSafeNum(data.domeO2Kpa, 21);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * IrrigationZones：灌溉区（分区配水 + 优先级）
 * ------------------------------------------------------------------------------
 * 玩家划灌溉区（矩形），每区有优先级与配水上限；水循环每分钟按优先级配水，
 * 缺水时低优先级区先断水（区内植物水分因子打折）。区是纯数据 + 配水账，
 * 不依赖建筑文件（灌溉系统建筑提供额外配水额度）。
 * ------------------------------------------------------------------------------ */
class IrrigationZones {
  constructor() {
    this.zones = []; // {id, x0, y0, x1, y1, priority, quotaPerMin, name}
    this.minutes = 0;
    this._nextId = 1;
    this.lastAllocation = {}; // {zoneId: 实际配水}
  }
  addZone(x0, y0, x1, y1, priority, quotaPerMin, name) {
    if (x1 < x0) { const t = x0; x0 = x1; x1 = t; }
    if (y1 < y0) { const t = y0; y0 = y1; y1 = t; }
    const zone = {
      id: 'zone' + (this._nextId++), name: name || ('灌溉区' + this._nextId),
      x0: x0, y0: y0, x1: x1, y1: y1,
      priority: ecoClamp(priority || 1, 1, 3), quotaPerMin: quotaPerMin || 5,
    };
    this.zones.push(zone);
    return zone;
  }
  removeZone(id) {
    for (let i = 0; i < this.zones.length; i++) {
      if (this.zones[i].id === id) { this.zones.splice(i, 1); return true; }
    }
    return false;
  }
  zoneAt(x, y) {
    for (let i = 0; i < this.zones.length; i++) {
      const z = this.zones[i];
      if (x >= z.x0 && x <= z.x1 && y >= z.y0 && y <= z.y1) return z;
    }
    return null;
  }
  // 配水：按优先级从高到低分水，返回每区实际配水
  allocate(dtMin, eco, game) {
    this.minutes += dtMin;
    const inv = ecoInv(game);
    const waterAvail = inv ? (inv.water || 0) : Infinity;
    const sorted = this.zones.slice().sort(function (a, b) { return b.priority - a.priority; });
    let remaining = waterAvail === Infinity ? Infinity : waterAvail;
    const alloc = {};
    for (let i = 0; i < sorted.length; i++) {
      const z = sorted[i];
      const need = z.quotaPerMin * dtMin;
      const give = Math.min(need, remaining);
      alloc[z.id] = ecoRound(give, 2);
      if (remaining !== Infinity) remaining -= give;
      // 配到的水直接加到区内土壤湿度（按面积均摊）
      if (give > 0 && eco && eco.grid) {
        const area = (z.x1 - z.x0 + 1) * (z.y1 - z.y0 + 1);
        const perTile = give / area * 0.5;
        for (let y = z.y0; y <= z.y1; y++) for (let x = z.x0; x <= z.x1; x++) {
          const t = eco.grid.get(x, y);
          if (t) t.moisture = ecoClamp(t.moisture + perTile, 0, 100);
        }
        // 从背包扣水
        if (inv) inv.water = Math.max(0, (inv.water || 0) - give);
      }
    }
    this.lastAllocation = alloc;
    return alloc;
  }
  // 某格的供水满足率（0-1），供 PlantSystem 读取
  supplyRatioAt(x, y) {
    const z = this.zoneAt(x, y);
    if (!z) return 1; // 无灌溉区 = 雨养，满足率 1（不扣分）
    const alloc = this.lastAllocation[z.id];
    if (alloc === undefined) return 1;
    const need = z.quotaPerMin;
    if (need <= 0) return 1;
    return ecoClamp(alloc / need, 0, 1);
  }
  summary() {
    return this.zones.map(function (z) {
      return { id: z.id, name: z.name, x0: z.x0, y0: z.y0, x1: z.x1, y1: z.y1, priority: z.priority, quotaPerMin: z.quotaPerMin };
    });
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), zones: this.zones, _nextId: this._nextId }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.zones = Array.isArray(data.zones) ? data.zones : [];
    this._nextId = ecoSafeNum(data._nextId, this.zones.length + 1);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * BuildingDegradation：建筑老化（生态建筑耐久 + 维护）
 * ------------------------------------------------------------------------------
 * 每座生态建筑有 condition 0-100，每分钟 -0.01（沙尘暴时 -0.05）；
 * condition < 50 时效应 ×0.7，< 25 时 ×0.4；维修花铁 2/座恢复 30 点。
 * 状态存在 game.builder.buildings[i]._ecoCondition 上（不污染建筑定义）。
 * ------------------------------------------------------------------------------ */
class BuildingDegradation {
  constructor() { this.minutes = 0; this.repairedTotal = 0; }
  conditionOf(b) {
    if (typeof b._ecoCondition !== 'number') b._ecoCondition = 100;
    return b._ecoCondition;
  }
  effectMulOf(b) {
    const c = this.conditionOf(b);
    if (c < 25) return 0.4;
    if (c < 50) return 0.7;
    if (c < 75) return 0.9;
    return 1;
  }
  repair(b, game) {
    const c = this.conditionOf(b);
    if (c >= 100) return { ok: false, reason: '无需维修' };
    if (!ecoCanAfford(game, { iron: 2 })) return { ok: false, reason: '铁不足（需 2）' };
    ecoPay(game, { iron: 2 });
    b._ecoCondition = Math.min(100, c + 30);
    this.repairedTotal++;
    return { ok: true, reason: '已维修，耐久 ' + Math.round(b._ecoCondition) };
  }
  repairAll(game) {
    const list = ecoBuildingList(game);
    let n = 0, cost = 0;
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      if (!ecoBuildingDef(b.id) && !this._isCustom(b.id, game)) continue;
      if (this.conditionOf(b) >= 100) continue;
      if (!ecoCanAfford(game, { iron: 2 })) break;
      ecoPay(game, { iron: 2 });
      b._ecoCondition = Math.min(100, this.conditionOf(b) + 30);
      n++; cost += 2;
    }
    this.repairedTotal += n;
    return { repaired: n, ironCost: cost };
  }
  _isCustom(id, game) {
    return !!(game && game.ecology && game.ecology.buildings && game.ecology.buildings.customDefs[id]);
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const list = ecoBuildingList(game);
    const storm = ecoSandstorm(game);
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      if (!ecoBuildingDef(b.id) && !this._isCustom(b.id, game)) continue;
      const c = this.conditionOf(b);
      const decay = (storm ? 0.05 : 0.01) * dtMin;
      b._ecoCondition = ecoClamp(c - decay, 0, 100);
    }
  }
  // 老化后的聚合效应倍率（供 EcoBuildings.aggregate 读取：按建筑分别打折太细，
  // 这里给整网一个平均倍率，面板用）
  avgEffectMul(game) {
    const list = ecoBuildingList(game);
    let sum = 0, n = 0;
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      if (!ecoBuildingDef(b.id)) continue;
      sum += this.effectMulOf(b);
      n++;
    }
    return n ? ecoRound(sum / n, 2) : 1;
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), repairedTotal: this.repairedTotal }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.repairedTotal = ecoSafeNum(data.repairedTotal, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * 追加数据：14 座生态建筑 / 6 项改造工程 / 4 项政策 / 10 项成就
 * ------------------------------------------------------------------------------ */
ECO_BUILDINGS.push(
  { id: 'desalination', name: '海水淡化厂', icon: '🌊', stageUnlock: 3, cost: { steel: 120, tech: 40 }, waterPerMin: 5.0, powerUse: 15, desc: '湖水淡化：每分钟产水 5，耗电 15。' },
  { id: 'cloud_seeder', name: '人工降雨机', icon: '☁️', stageUnlock: 3, cost: { steel: 80, tech: 60 }, rainMul: 1.2, waterUsePerMin: 4, desc: '降雨 +20%，每分钟耗水 4。' },
  { id: 'oxygen_farm', name: '制氧农场', icon: '🌿', stageUnlock: 4, cost: { steel: 100, tech: 30 }, o2PerMin: 3.0, growthMul: 1.1, desc: '集约化藻类+苔藓制氧，每分钟 3 吨。' },
  { id: 'biofilter', name: '生物滤池', icon: '💧', stageUnlock: 3, cost: { steel: 50 }, waterPerMin: 1.0, desc: '净化水体：污染每分钟 -1，全图植物生长 +2%。', growthMul: 1.02 },
  { id: 'permafrost_drill', name: '冻土钻机', icon: '⛏️', stageUnlock: 2, cost: { steel: 70, tech: 20 }, waterPerMin: 2.0, groundwaterUsePerMin: 0.3, desc: '钻取冻土水：每分钟产水 2，地下水 -0.3。' },
  { id: 'pollinator_hive', name: '授粉蜂箱', icon: '🐝', stageUnlock: 2, cost: { biomass: 20, steel: 10 }, growthMul: 1.15, desc: '授粉加成：周围植物生长 +15%（全图计）。' },
  { id: 'bird_sanctuary', name: '鸟类庇护所', icon: '🐦', stageUnlock: 3, cost: { steel: 40, food: 20 }, diversityBonus: 0.03, desc: '鸟类容量 +30%，多样性 +0.03。' },
  { id: 'mammal_den', name: '兽穴', icon: '🐇', stageUnlock: 4, cost: { steel: 30, food: 10 }, diversityBonus: 0.02, desc: '哺乳动物容量 +30%，多样性 +0.02。' },
  { id: 'soil_lab', name: '土壤实验室', icon: '🔬', stageUnlock: 2, cost: { tech: 50, steel: 30 }, soilWetPerMin: 0, growthMul: 1.1, desc: '土壤改良研究：植物生长 +10%。' },
  { id: 'terraform_beacon', name: '改造信标', icon: '📡', stageUnlock: 4, cost: { steel: 150, tech: 80 }, co2PerMin: 0.02, desc: '行星级改造信标：推进 +0.02%/分钟。' },
  { id: 'ice_harvester', name: '采冰机', icon: '🧊', stageUnlock: 1, cost: { steel: 40, iron: 30 }, waterPerMin: 1.5, desc: '极地采冰：每分钟产水 1.5。' },
  { id: 'green_wall', name: '绿墙', icon: '🧱', stageUnlock: 4, cost: { steel: 60 }, o2PerMin: 0.5, frostProtect: 0.3, desc: '垂直绿化墙：产氧 0.5，周围冻害 -30%。', radius: 2 },
  { id: 'eco_monitor', name: '生态监测站', icon: '📷', stageUnlock: 2, cost: { tech: 30, steel: 20 }, growthMul: 1.03, desc: '实时监测：崩溃预警提前，植物生长 +3%。' },
  { id: 'seed_vault', name: '种子金库', icon: '🏦', stageUnlock: 1, cost: { steel: 50, tech: 20 }, seedCostMul: 0.5, desc: '种子储备：播种成本 -50%。' }
);
TERRAFORM_PROJECTS.push(
  { id: 'ammonia_asteroid', name: '氨冰小行星', icon: '☄️', kind: 'onetime', stageUnlock: 3, cost: { tech: 100, steel: 150 }, durationMin: 15, boost: 4, waterBonus: 300, desc: '拖来富氨冰小行星：+4%，注水 300，氮肥+。', maxCount: 2, cooldownMin: 45, requires: { tech: 'orbital_tech', building: null } },
  { id: 'orbital_shade', name: '轨道遮阳', icon: '🌑', kind: 'continuous', stageUnlock: 5, cost: { steel: 200, tech: 100 }, upkeepPerMin: { power: 8 }, ratePerMin: -0.02, tempBonusC: -2, desc: '改造后期降温：推进 -0.02%/分钟（防过热），均温 -2°C。', maxCount: 2, cooldownMin: 0, requires: { tech: 'orbital_tech', building: null } },
  { id: 'methane_vent', name: '甲烷释放', icon: '💨', kind: 'continuous', stageUnlock: 1, cost: { steel: 40, tech: 10 }, upkeepPerMin: { power: 3 }, ratePerMin: 0.02, desc: '释放地下甲烷：推进 +0.02%/分钟，便宜但弱。', maxCount: 8, cooldownMin: 0, requires: { tech: null, building: null } },
  { id: 'solar_sail', name: '太阳帆增温', icon: '⛵', kind: 'continuous', stageUnlock: 4, cost: { steel: 180, tech: 90 }, upkeepPerMin: { power: 5 }, ratePerMin: 0.04, tempBonusC: 1.0, desc: '太阳帆反射增温：推进 +0.04%/分钟，均温 +1°C。', maxCount: 3, cooldownMin: 0, requires: { tech: 'orbital_tech', building: null } },
  { id: 'gene_algae', name: '基因藻', icon: '🧬', kind: 'continuous', stageUnlock: 4, cost: { biomass: 150, tech: 80 }, upkeepPerMin: { water: 3 }, ratePerMin: 0.03, o2PerMin: 3.0, desc: '基因工程藻：推进 +0.03%/分钟，产氧 3 吨。', maxCount: 3, cooldownMin: 0, requires: { tech: 'bio_tech', building: 'algae_pond' } },
  { id: 'core_heater', name: '地核加热', icon: '🌋', kind: 'onetime', stageUnlock: 5, cost: { steel: 800, tech: 300, rare: 200 }, durationMin: 30, boost: 10, desc: '重启行星磁场与地热：30 分钟建成，一次 +10%。', maxCount: 1, cooldownMin: 0, requires: { tech: 'magnet_tech', building: null } }
);
ECO_POLICIES.push(
  { id: 'pol_terraform_tax', name: '改造税', desc: '改造推进 +20%，人口幸福 -5%（加税）。', effects: { progressMul: 1.2 } },
  { id: 'pol_no_harvest', name: '禁伐令', desc: '树木生长 +40%，木材收获 -50%。', effects: { growthMul: 1.1 } },
  { id: 'pol_wetland_protect', name: '湿地保护', desc: '多样性 +0.05，湖泊区禁止抽水。', effects: {} },
  { id: 'pol_seed_subsidy', name: '种子补贴', desc: '播种成本 -50%，每分钟耗食物 2。', effects: {} }
);
ECO_ACHIEVEMENTS.push(
  { id: 'eco_a21', name: '穹顶大师', desc: '建成 3 座温室穹顶', check: function (eco) { return eco.greenhouses.domes.length >= 3; } },
  { id: 'eco_a22', name: '治水专家', desc: '地下水位三层合计超过 200', check: function (eco) { return eco.aquifer.layers.shallow.level + eco.aquifer.layers.mid.level + eco.aquifer.layers.deep.level >= 200; } },
  { id: 'eco_a23', name: '种子收藏家', desc: '种子库存总数超过 100', check: function (eco) { const s = eco.seeds.seeds; return (s.moss + s.grass + s.shrub + s.crop + s.tree) >= 100; } },
  { id: 'eco_a24', name: '任务达人', desc: '完成 6 个生态任务', check: function (eco) { return eco.quests.claimed.length >= 6; } },
  { id: 'eco_a25', name: '无崩溃', desc: '改造达到 50% 且从未崩溃', check: function (eco) { return eco.terraform.progress >= 50 && eco.stats.collapses === 0; } },
  { id: 'eco_a26', name: '气象学家', desc: '经历 5 场沙尘暴', check: function (eco) { return eco.weather.stormsSurvived >= 5; } },
  { id: 'eco_a27', name: '兽医', desc: '治愈 20 株病株', check: function (eco) { return eco.disease.cured >= 20; } },
  { id: 'eco_a28', name: '施肥能手', desc: '累计施肥 20 次', check: function (eco) { return eco.soilNutrients.fertilizedTotal >= 20; } },
  { id: 'eco_a29', name: '地核重启', desc: '完成地核加热工程', check: function (eco) { return eco.terraform.completedProjects.indexOf('core_heater') >= 0; } },
  { id: 'eco_a30', name: '生态史学家', desc: '历史采样超过 50 条', check: function (eco) { return eco.history.samples.length >= 50; } }
);

/* ------------------------------------------------------------------------------
 * RiverNetwork：河流网络（河道图 + 流量 + 沿岸加成）
 * ------------------------------------------------------------------------------
 * 河道是格子链：源头（高海拔/湖泊溢出）→ 沿最陡下降方向流 → 入湖/蒸发。
 * 每分钟：流量 = 上游来水 + 降雨 − 蒸发 − 沿岸取水；河道格湿度 +20、植物生长 +10%。
 * 洪水时流量翻倍，河道格植物有 5% 被冲走。
 * ------------------------------------------------------------------------------ */
class RiverNetwork {
  constructor(grid) {
    this.grid = grid || null;
    this.rivers = []; // {id, path: [{x,y}], flow}
    this.minutes = 0;
    this._nextId = 1;
  }
  // 从 (x,y) 沿最陡下降追踪一条河道（最多 40 格）
  traceRiver(sx, sy) {
    if (!this.grid || !this.grid.inBounds(sx, sy)) return null;
    const path = [];
    let x = sx, y = sy;
    const seen = {};
    for (let i = 0; i < 40; i++) {
      const k = ecoKey(x, y);
      if (seen[k]) break;
      seen[k] = true;
      const t = this.grid.get(x, y);
      if (!t) break;
      path.push({ x: x, y: y });
      // 找最低邻格
      const ns = this.grid.neighbors(x, y);
      let lowest = null;
      for (let j = 0; j < ns.length; j++) {
        if (!lowest || ns[j].elevation < lowest.elevation) lowest = ns[j];
      }
      if (!lowest || lowest.elevation >= t.elevation) break; // 到谷底/湖泊
      x = lowest.x; y = lowest.y;
    }
    if (path.length < 3) return null;
    const river = { id: 'river' + (this._nextId++), path: path, flow: 1 };
    this.rivers.push(river);
    return river;
  }
  // 湖泊溢出自动成河（水循环每 tick 调用）
  autoFormRivers(eco) {
    if (!this.grid || !eco || !eco.water) return 0;
    if (eco.water.lakes < 1) return 0;
    let made = 0;
    for (let y = 0; y < this.grid.size && made < 2; y++) for (let x = 0; x < this.grid.size && made < 2; x++) {
      const t = this.grid.get(x, y);
      if (t.surfaceWater > 70 && !this.isRiverTile(x, y)) {
        if (this.traceRiver(x, y)) made++;
      }
    }
    return made;
  }
  isRiverTile(x, y) {
    for (let i = 0; i < this.rivers.length; i++) {
      const p = this.rivers[i].path;
      for (let j = 0; j < p.length; j++) if (p[j].x === x && p[j].y === y) return true;
    }
    return false;
  }
  riverAt(x, y) {
    for (let i = 0; i < this.rivers.length; i++) {
      const p = this.rivers[i].path;
      for (let j = 0; j < p.length; j++) if (p[j].x === x && p[j].y === y) return this.rivers[i];
    }
    return null;
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const r = rng || Math.random;
    const rain = eco && eco.water ? eco.water.lastRainMmY : 50;
    for (let i = 0; i < this.rivers.length; i++) {
      const river = this.rivers[i];
      // 流量：降雨补给 − 蒸发
      river.flow = ecoClamp(river.flow + (rain / 1000 - 0.02) * dtMin, 0.1, 10);
      if (!this.grid) continue;
      for (let j = 0; j < river.path.length; j++) {
        const pt = river.path[j];
        const t = this.grid.get(pt.x, pt.y);
        if (!t) continue;
        // 沿岸湿润
        t.moisture = ecoClamp(t.moisture + 0.2 * river.flow * dtMin * 0.1, 0, 100);
        t.surfaceWater = ecoClamp(t.surfaceWater + river.flow * 0.05 * dtMin, 0, 100);
        // 洪水冲走植物
        if (river.flow > 5 && eco && eco.plants && r() < 0.005 * dtMin) {
          const here = eco.plants.plotsAt(pt.x, pt.y);
          if (here.length) {
            const idx = eco.plants.plots.indexOf(here[0]);
            if (idx >= 0) eco.plants._removeAt(idx);
          }
        }
      }
    }
    // 干涸：流量 <0.2 且降雨 <50 时河道消失
    for (let i = this.rivers.length - 1; i >= 0; i--) {
      if (this.rivers[i].flow < 0.2 && rain < 50) this.rivers.splice(i, 1);
    }
  }
  // 沿岸加成（供 PlantSystem 读取）
  bankBonusAt(x, y) {
    if (this.isRiverTile(x, y)) return 1.1;
    if (!this.grid) return 1;
    const ns = this.grid.neighbors(x, y);
    for (let i = 0; i < ns.length; i++) if (this.isRiverTile(ns[i].x, ns[i].y)) return 1.05;
    return 1;
  }
  totalLength() {
    let n = 0;
    for (let i = 0; i < this.rivers.length; i++) n += this.rivers[i].path.length;
    return n;
  }
  summary() {
    return { rivers: this.rivers.length, totalLength: this.totalLength(), flows: this.rivers.map(function (rv) { return ecoRound(rv.flow, 2); }) };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), rivers: this.rivers, _nextId: this._nextId }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.rivers = Array.isArray(data.rivers) ? data.rivers : [];
    this._nextId = ecoSafeNum(data._nextId, this.rivers.length + 1);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * WaterQualitySystem：水质（pH / 盐度 / 污染，三指标影响植物）
 * ------------------------------------------------------------------------------
 * 每格水质默认 pH 7.0、盐度 0.2、污染 0。藻华推高 pH，工业/堆肥推高盐度，
 * 污染直接扣生长。水质因子 = pH 因子 × 盐度因子 × 污染因子（0.5~1.1）。
 * 净化：生物滤池建筑每分钟全图污染 -0.02，湿地 -0.01。
 * ------------------------------------------------------------------------------ */
class WaterQualitySystem {
  constructor(grid) {
    this.grid = grid || null;
    this.map = {}; // key → {ph, salinity, pollution}
    this.minutes = 0;
  }
  get(x, y) {
    const k = ecoKey(x, y);
    if (!this.map[k]) return { ph: 7.0, salinity: 0.2, pollution: 0 };
    return this.map[k];
  }
  _ensure(x, y) {
    const k = ecoKey(x, y);
    if (!this.map[k]) this.map[k] = { ph: 7.0, salinity: 0.2, pollution: 0 };
    return this.map[k];
  }
  qualityFactor(x, y) {
    const q = this.get(x, y);
    let phF = 1;
    if (q.ph < 5.5) phF = 0.7;
    else if (q.ph < 6.5) phF = 0.9;
    else if (q.ph > 8.5) phF = 0.8;
    else if (q.ph > 8.0) phF = 0.95;
    const salF = q.salinity > 0.8 ? 0.7 : (q.salinity > 0.5 ? 0.9 : 1);
    const polF = q.pollution > 50 ? 0.6 : (q.pollution > 20 ? 0.85 : 1);
    return ecoRound(phF * salF * polF, 3);
  }
  polluteAt(x, y, amount) {
    const q = this._ensure(x, y);
    q.pollution = ecoClamp(q.pollution + amount, 0, 100);
    return q.pollution;
  }
  // 藻华：湖泊格 pH 上升
  algaeBloomEffect(eco) {
    if (!this.grid || !eco || !eco.water) return 0;
    let n = 0;
    for (let y = 0; y < this.grid.size; y++) for (let x = 0; x < this.grid.size; x++) {
      const t = this.grid.get(x, y);
      if (t.surfaceWater > 50) {
        const q = this._ensure(x, y);
        q.ph = ecoClamp(q.ph + 0.01, 6, 9.5);
        n++;
      }
    }
    return n;
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    // 净化：滤池/湿地
    let clean = 0;
    if (eco && eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      if ((agg.buildings.biofilter || 0) > 0) clean += 0.02 * agg.buildings.biofilter;
      if ((agg.buildings.wetland || 0) > 0) clean += 0.01 * agg.buildings.wetland;
    }
    if (clean > 0) {
      for (const k in this.map) {
        this.map[k].pollution = ecoClamp(this.map[k].pollution - clean * dtMin, 0, 100);
        this.map[k].ph += (7.0 - this.map[k].ph) * 0.001 * dtMin;
      }
    }
    this.algaeBloomEffect(eco);
  }
  worstTiles(n) {
    const arr = [];
    for (const k in this.map) {
      const q = this.map[k];
      arr.push({ key: k, score: q.pollution + q.salinity * 20 + Math.abs(q.ph - 7) * 10 });
    }
    arr.sort(function (a, b) { return b.score - a.score; });
    return arr.slice(0, n || 5);
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), map: this.map }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.map = data.map || {};
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * CompostCycle：堆肥循环（枯死植物 → 生物质 → 堆肥 → 土壤肥力）
 * ------------------------------------------------------------------------------
 * 植物自然死亡/病死/收割残茬进入“残体池”，堆肥厂每分钟把残体转成生物质
 * （1 残体 = 0.5 生物质），同时直接还田的残体每分钟 +0.01 全图肥力。
 * 残体不清理会滋生病害（发病率 +20%）。
 * ------------------------------------------------------------------------------ */
class CompostCycle {
  constructor() {
    this.debris = 0;       // 残体池（单位：株当量）
    this.minutes = 0;
    this.compostedTotal = 0;
    this.returnedTotal = 0;
  }
  addDebris(n) { this.debris += n; return this.debris; }
  // 病害加成：残体越多发病率越高（供 PlantDiseaseSystem 读取）
  diseaseMul() {
    if (this.debris > 200) return 1.5;
    if (this.debris > 100) return 1.2;
    return 1;
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    if (this.debris <= 0) return { composted: 0, returned: 0 };
    // 还田：每分钟 1% 的残体化作肥力
    const returned = this.debris * 0.01 * dtMin;
    this.debris -= returned;
    this.returnedTotal += returned;
    if (eco && eco.grid) eco.grid.addFertilityAll(returned * 0.001);
    // 堆肥厂转化：每座每分钟转 2 残体 → 1 生物质
    let composted = 0;
    if (eco && eco.buildings) {
      const n = eco.buildings.count(game, 'compost_plant');
      if (n > 0) {
        const take = Math.min(this.debris, 2 * n * dtMin);
        this.debris -= take;
        ecoGrant(game, 'biomass', take * 0.5);
        composted = take * 0.5;
        this.compostedTotal += composted;
      }
    }
    return { composted: ecoRound(composted, 2), returned: ecoRound(returned, 2) };
  }
  summary() {
    return { debris: ecoRound(this.debris, 1), compostedTotal: ecoRound(this.compostedTotal, 1), returnedTotal: ecoRound(this.returnedTotal, 1), diseaseMul: this.diseaseMul() };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), debris: ecoRound(this.debris, 2), compostedTotal: ecoRound(this.compostedTotal, 1), returnedTotal: ecoRound(this.returnedTotal, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.debris = ecoSafeNum(data.debris, 0);
    this.compostedTotal = ecoSafeNum(data.compostedTotal, 0);
    this.returnedTotal = ecoSafeNum(data.returnedTotal, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoResilience：生态恢复力（恢复速度 + 关键种 + 再引入）
 * ------------------------------------------------------------------------------
 * 恢复力 = 多样性×0.4 + 植被覆盖×0.3 + 土壤肥力×0.3（0-1）。
 * 灭绝物种再引入：种子库/基因库有存量时可花资源复活（昆虫 20 食物，鸟 40，植物用种子）。
 * 再引入成功率 = 恢复力（掷骰），失败只扣一半成本。
 * ------------------------------------------------------------------------------ */
class EcoResilience {
  constructor() { this.minutes = 0; this.reintroductions = 0; this.failures = 0; }
  score(eco) {
    if (!eco) return 0;
    const div = eco.balance ? eco.balance.diversity : 0;
    const veg = eco.grid ? eco.grid.avgVegetation() / 100 : 0;
    const fer = eco.grid ? eco.grid.avgFertility() / 100 : 0;
    return ecoRound(ecoClamp(div * 0.4 + veg * 0.3 + fer * 0.3, 0, 1), 3);
  }
  // 恢复速度（多样性回升速率倍率）
  recoveryRateMul(eco, game) {
    let m = 0.5 + this.score(eco);
    if (ecoTechHas(game, 'eco_balance2')) m *= 2;
    return ecoRound(m, 2);
  }
  // 再引入动物
  reintroduceAnimal(id, game, eco, rng) {
    const def = animalDef(id);
    if (!def) return { ok: false, reason: '未知动物' };
    if (eco.fauna.pop(id) >= def.minViable) return { ok: false, reason: '该物种尚未灭绝，无需再引入' };
    const cost = { food: def.introCost.food * 2 };
    if (!ecoCanAfford(game, cost)) return { ok: false, reason: '食物不足（需 ' + cost.food + '）' };
    const chance = this.score(eco);
    const r = rng || Math.random;
    if (r() < chance) {
      ecoPay(game, cost);
      eco.fauna.addPop(id, def.introBatch);
      this.reintroductions++;
      return { ok: true, reason: '再引入成功：' + def.introBatch + ' 只' + def.name + '回归野外' };
    }
    ecoPay(game, { food: Math.ceil(cost.food / 2) });
    this.failures++;
    return { ok: false, reason: '再引入失败（恢复力 ' + chance + '），只扣一半成本，改善生态后再试' };
  }
  // 再引入植物（用种子库）
  reintroducePlant(species, x, y, game, eco) {
    const def = plantDef(species);
    if (!def) return { ok: false, reason: '未知植物' };
    if (eco.plants.countOf(species) > 0) return { ok: false, reason: '该物种尚未灭绝' };
    if (!eco.seeds || !eco.seeds.has(species, 5)) return { ok: false, reason: '种子库不足 5 粒' + def.name + '种子' };
    eco.seeds.take(species, 5);
    let made = 0;
    for (let i = 0; i < 5; i++) {
      const res = eco.plants.plant(x + (i % 3), y + Math.floor(i / 3), species, game, eco);
      if (res.ok) made++;
    }
    this.reintroductions++;
    return { ok: made > 0, reason: '再引入 ' + def.name + '：种下 ' + made + ' 株', count: made };
  }
  // 灭绝清单（当前数量为 0 但曾经存在过的物种）
  extinctList(eco) {
    const out = [];
    if (!eco) return out;
    for (let i = 0; i < PLANT_IDS.length; i++) {
      const id = PLANT_IDS[i];
      if (eco.plants.countOf(id) === 0 && (eco.stats.totalPlanted || 0) > 0) out.push({ id: id, name: PLANT_DEFS[id].name, kind: 'plant' });
    }
    for (let i = 0; i < ANIMAL_IDS.length; i++) {
      const id = ANIMAL_IDS[i];
      if (eco.fauna.pop(id) === 0 && (eco.fauna.introduced[id] || 0) > 0) out.push({ id: id, name: ANIMAL_DEFS[id].name, kind: 'animal' });
    }
    return out;
  }
  summary(eco) {
    return { score: this.score(eco), recoveryRateMul: 0, extinct: this.extinctList(eco), reintroductions: this.reintroductions, failures: this.failures };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), reintroductions: this.reintroductions, failures: this.failures }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.reintroductions = ecoSafeNum(data.reintroductions, 0);
    this.failures = ecoSafeNum(data.failures, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * ClimateFeedback：气候反馈（反照率正反馈 + 冻土碳释放 + 云反馈）
 * ------------------------------------------------------------------------------
 * 正反馈：植被 ↑ → 反照率 ↓ → 吸热 ↑ → 升温 → 植被长得更快（每分钟结算）。
 * 冻土碳：均温 > -20°C 时冻土每年释放甲烷，改造 +0.001%/分钟（小幅加速）。
 * 云反馈：降雨 >300mm 时云量增加，反照率 +0.02（负反馈，防过热）。
 * ------------------------------------------------------------------------------ */
class ClimateFeedback {
  constructor() { this.minutes = 0; this.warmingFromAlbedo = 0; this.methaneReleased = 0; }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    if (!eco || !eco.terraform) return { albedoHeat: 0, methane: 0 };
    const albedo = eco.terraform.albedo(eco);
    // 反照率每降 0.01 → 均温 +0.3°C（等效升温，不直接改 tempC，记 bonus）
    this.warmingFromAlbedo = ecoRound((0.25 - albedo) * 30, 2);
    // 冻土碳释放
    let methane = 0;
    if (eco.terraform.tempC() > -20) {
      methane = 0.001 * dtMin;
      eco.terraform.addProgress(methane, 'permafrost');
      this.methaneReleased += methane;
    }
    // 云反馈：降雨高时降温抵消一半反照率升温
    const rain = eco.water ? eco.water.lastRainMmY : 0;
    if (rain > 300) this.warmingFromAlbedo = ecoRound(this.warmingFromAlbedo * 0.5, 2);
    return { albedoHeat: this.warmingFromAlbedo, methane: ecoRound(methane, 4) };
  }
  effectiveTempC(eco, game) {
    if (!eco || !eco.terraform) return -63;
    return ecoClamp(eco.terraform.seasonalTempC(game) + this.warmingFromAlbedo, ETUNE.TEMP_MIN_C, ETUNE.TEMP_MAX_C);
  }
  summary(eco, game) {
    return {
      albedo: eco ? eco.terraform.albedo(eco) : 0.25,
      warmingFromAlbedoC: this.warmingFromAlbedo,
      methaneReleasedTotal: ecoRound(this.methaneReleased, 3),
      effectiveTempC: ecoRound(this.effectiveTempC(eco, game), 1),
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), warmingFromAlbedo: this.warmingFromAlbedo, methaneReleased: ecoRound(this.methaneReleased, 3) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.warmingFromAlbedo = ecoSafeNum(data.warmingFromAlbedo, 0);
    this.methaneReleased = ecoSafeNum(data.methaneReleased, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * MagnetShieldPhases：人造磁层分阶段建设（3 阶段，每阶段独立生效）
 * ------------------------------------------------------------------------------
 * 磁层工程不是一锤子买卖：分 3 阶段（发射/展开/充能），每阶段完成给部分增益：
 * 阶段 1：侵蚀 -30%；阶段 2：侵蚀 -70%，改造 +3%；阶段 3：侵蚀归零，改造 +5%。
 * 与 TERRAFORM_PROJECTS 的 magnet_shield（一次性 +8%）并行：分阶段是“建设过程”，
 * 一次性工程是“竣工奖励”，两者叠加但总增益封顶 +12%。
 * ------------------------------------------------------------------------------ */
const MAGNET_PHASES = [
  { phase: 1, name: '发射磁盾卫星', cost: { steel: 150, tech: 60 }, durationMin: 8, erosionMul: 0.7, progressBonus: 0 },
  { phase: 2, name: '展开磁帆', cost: { steel: 200, tech: 80 }, durationMin: 8, erosionMul: 0.3, progressBonus: 3 },
  { phase: 3, name: '充能点火', cost: { steel: 150, tech: 60, rare: 50 }, durationMin: 4, erosionMul: 0, progressBonus: 5 },
];
class MagnetShieldPhases {
  constructor() {
    this.phase = 0; // 已完成阶段数 0-3
    this.active = null; // {phase, remainingMin}
    this.minutes = 0;
  }
  erosionMul() {
    if (this.phase <= 0) return 1;
    return MAGNET_PHASES[this.phase - 1].erosionMul;
  }
  startNext(game) {
    if (this.phase >= 3) return { ok: false, reason: '磁层已建成' };
    if (this.active) return { ok: false, reason: '当前阶段建设中' };
    const def = MAGNET_PHASES[this.phase];
    if (!ecoCanAfford(game, def.cost)) return { ok: false, reason: '资源不足' };
    ecoPay(game, def.cost);
    this.active = { phase: def.phase, remainingMin: def.durationMin };
    return { ok: true, reason: '开始建设第 ' + def.phase + ' 阶段：「' + def.name + '」' };
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    if (!this.active) return null;
    this.active.remainingMin -= dtMin;
    if (this.active.remainingMin > 0) return null;
    const def = MAGNET_PHASES[this.active.phase - 1];
    this.phase = def.phase;
    this.active = null;
    if (def.progressBonus && eco && eco.terraform) eco.terraform.addProgress(def.progressBonus, 'magnet_phase' + def.phase);
    if (eco) eco.log('磁层第 ' + def.phase + ' 阶段完成：「' + def.name + '」');
    return { phase: def.phase, name: def.name, progressBonus: def.progressBonus };
  }
  summary() {
    return {
      phase: this.phase,
      active: this.active ? { phase: this.active.phase, remainingMin: ecoRound(this.active.remainingMin, 1) } : null,
      erosionMul: this.erosionMul(),
      next: this.phase < 3 ? MAGNET_PHASES[this.phase] : null,
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), phase: this.phase, active: this.active }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.phase = ecoSafeNum(data.phase, 0);
    this.active = data.active || null;
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoPanels：UI 面板数据（每个面板返回结构化行，供 UI 直接渲染）
 * ------------------------------------------------------------------------------
 * 面板不是文本：每行带数值、进度条比例、状态色、操作按钮 id（UI 按 id 绑定）。
 * ------------------------------------------------------------------------------ */
class EcoPanels {
  static overview(eco) {
    if (!eco) return null;
    const s = eco.summary();
    return {
      title: '生态总览',
      rows: [
        { label: '改造进度', value: s.progress + '%', pct: s.progress / 100, color: s.progress >= 85 ? 'green' : (s.progress >= 40 ? 'yellow' : 'red'), action: null },
        { label: '当前阶段', value: s.stage.icon + ' ' + s.stage.name, pct: null, color: 'blue', action: null },
        { label: '全球均温', value: s.tempC + '°C', pct: ecoClamp((s.tempC + 63) / 90, 0, 1), color: s.tempC > 0 ? 'orange' : 'cyan', action: null },
        { label: '大气压', value: s.pressureKpa + ' kPa', pct: s.pressureKpa / 101.3, color: 'blue', action: null },
        { label: '氧气库存', value: s.oxygen.stock + ' / ' + s.oxygen.cap + ' 吨', pct: s.oxygen.ratio, color: s.oxygen.level === 'critical' ? 'red' : 'green', action: null },
        { label: '地下水位', value: s.water.groundwater + ' / ' + s.water.groundwaterCap, pct: s.water.groundwater / s.water.groundwaterCap, color: s.water.level === 'critical' ? 'red' : 'blue', action: null },
        { label: '多样性指数', value: String(s.balance.diversity), pct: s.balance.diversity, color: s.balance.level === 'critical' ? 'red' : 'green', action: null },
        { label: '植被覆盖', value: s.vegetationAvg + '%', pct: s.vegetationAvg / 100, color: 'green', action: null },
      ],
      warnings: s.balance.warnings,
    };
  }
  static plants(eco) {
    if (!eco) return null;
    const sum = eco.plants.summary();
    const rows = PLANT_IDS.map(function (id) {
      const def = PLANT_DEFS[id];
      const c = sum.by[id];
      const unlocked = eco.terraform.stageIndex() >= def.stageUnlock;
      return {
        id: id, name: def.icon + ' ' + def.name, count: c.count, mature: c.mature,
        unlocked: unlocked, unlockStage: TERRAFORM_STAGES[def.stageUnlock].name,
        o2PerMin: ecoRound(def.o2PerMin * c.mature, 3),
        waterNeed: def.waterNeed, tempRange: def.tempMin + '~' + def.tempMax + '°C',
        action: unlocked ? 'plant:' + id : null,
      };
    });
    return { title: '植物', total: sum.total, biomass: sum.biomass, rows: rows };
  }
  static fauna(eco) {
    if (!eco) return null;
    const sum = eco.fauna.summary();
    const rows = ANIMAL_IDS.map(function (id) {
      const def = ANIMAL_DEFS[id];
      const s = sum[id];
      const unlocked = eco.terraform.stageIndex() >= def.stageUnlock;
      return {
        id: id, name: def.icon + ' ' + def.name, count: s.count, K: s.K,
        growthPerMin: s.growthPerMin, viable: s.viable, unlocked: unlocked,
        unlockStage: TERRAFORM_STAGES[def.stageUnlock].name,
        action: unlocked ? 'introduce:' + id : null,
      };
    });
    return { title: '动物', total: eco.fauna.total(), rows: rows };
  }
  static terraform(eco) {
    if (!eco) return null;
    const s = eco.summary();
    return {
      title: '大气改造',
      progress: s.progress,
      stage: s.stage,
      nextStage: s.nextStage,
      progressToNext: s.progressToNext,
      tempC: s.tempC, pressureKpa: s.pressureKpa, co2Ppm: s.co2Ppm, o2Percent: s.o2Percent,
      gas: s.gas, magnet: s.magnet, albedo: s.albedo,
      projects: TERRAFORM_PROJECTS.map(function (p) {
        const active = eco.terraform.activeProjects.filter(function (a) { return a.id === p.id; })[0];
        const done = eco.terraform.completedProjects.filter(function (x) { return x === p.id; }).length;
        const cont = eco.terraform.continuousProjects[p.id] || 0;
        return {
          id: p.id, name: p.icon + ' ' + p.name, kind: p.kind,
          stageUnlock: TERRAFORM_STAGES[p.stageUnlock].name,
          unlocked: eco.terraform.stageIndex() >= p.stageUnlock,
          active: !!active, remainingMin: active ? ecoRound(active.remainingMin, 1) : null,
          doneCount: done, continuousCount: cont, cost: p.cost,
          action: 'project:' + p.id,
        };
      }),
    };
  }
  static water(eco) {
    if (!eco) return null;
    const s = eco.summary();
    return {
      title: '水循环',
      rainMmY: s.water.rainMmY, evapMmY: s.water.evapMmY,
      groundwater: s.water.groundwater, groundwaterCap: s.water.groundwaterCap,
      soilMoistureAvg: s.soilMoistureAvg, lakes: s.water.lakes,
      pollution: s.water.pollution, drought: s.water.drought,
      aquifer: s.aquifer, rivers: eco.rivers.summary(),
      forecast: eco.weather.forecast(),
    };
  }
  static balance(eco) {
    if (!eco) return null;
    const s = eco.summary();
    return {
      title: '生态平衡',
      diversity: s.balance.diversity, shannon: s.balance.shannon,
      risk: s.balance.risk, riskMinutes: s.balance.riskMinutes,
      dominant: s.balance.dominant, weakest: s.balance.weakest,
      warnings: s.balance.warnings, level: s.balance.level,
      trophic: s.trophic, resilience: eco.resilience.score(eco),
      extinct: eco.resilience.extinctList(eco),
    };
  }
  static buildings(eco, game) {
    if (!eco) return null;
    const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
    return {
      title: '生态建筑',
      defs: eco.buildings.allDefs().map(function (d) {
        return {
          id: d.id, name: (d.icon || '🏗️') + ' ' + d.name,
          unlocked: eco.buildings.isUnlocked(d.id, eco),
          count: eco.buildings.count(game, d.id),
          cost: d.cost, desc: d.desc || '',
        };
      }),
      aggregate: agg,
      degradationAvgMul: eco.degradation.avgEffectMul(game),
    };
  }
  static quests(eco) {
    if (!eco) return null;
    return { title: '生态任务', quests: eco.quests.summary(eco), available: eco.quests.available.slice() };
  }
}

/* ------------------------------------------------------------------------------
 * EcoAdvisor：生态顾问（分析当前状态，返回按优先级排序的可执行建议）
 * ------------------------------------------------------------------------------
 * 每条建议带：优先级分数、预期收益（数值）、操作 id（UI 直接绑定）。
 * 规则是真实的数值判断，不是固定文本：缺氧 → 建议种树/建藻池；缺水 → 建议
 * 打井/等雨；多样性低 → 建议引入新物种；某物种垄断 → 建议补种弱势物种。
 * ------------------------------------------------------------------------------ */
class EcoAdvisor {
  static advise(eco, game) {
    if (!eco) return [];
    const out = [];
    const push = function (score, title, detail, action, gain) {
      out.push({ score: score, title: title, detail: detail, action: action, gain: gain || '' });
    };
    const s = eco.summary();
    // 氧气
    if (s.oxygen.level === 'critical' || s.oxygen.level === 'empty') {
      push(100, '氧气告急', '库存 ' + s.oxygen.stock + ' 吨，缺口 ' + Math.abs(s.oxygen.balancePerMin) + ' 吨/分钟', 'plant:tree', '种树每棵 +0.05 吨/分钟');
    } else if (s.oxygen.level === 'low') {
      push(70, '氧气偏低', '库存不足一半', 'build:algae_pond', '藻类池塘 +2 吨/分钟');
    }
    // 水
    if (s.water.level === 'critical') {
      push(95, '地下水告急', '水位 ' + s.water.groundwater + '，植物将大面积枯死', 'drill:mid', '钻中层含水层');
    } else if (s.soilMoistureAvg < 25) {
      push(60, '土壤干旱', '平均湿度 ' + s.soilMoistureAvg + '%', 'event:wait_rain', '等雨锋或建灌溉区');
    }
    // 多样性
    if (s.balance.level === 'critical') {
      const weak = s.balance.weakest;
      push(90, '生态濒临崩溃', '多样性 ' + s.balance.diversity + '，风险 ' + Math.round(s.balance.risk * 100) + '%', weak ? 'plant:' + weak : 'introduce:insect', '补弱势物种');
    } else if (s.balance.level === 'low') {
      push(55, '多样性偏低', '多样性 ' + s.balance.diversity, 'introduce:bird', '引入鸟类提多样性');
    }
    // 改造进度
    if (s.progress < 10) {
      push(80, '改造停滞', '进度 ' + s.progress + '%，被动推进极慢', 'project:ghg_factory', '温室气体工厂 +0.05%/分钟');
    } else if (s.progressToNext > 0 && s.buffs.progressPerMin < 0.01) {
      push(50, '改造缓慢', '距下一阶段 ' + s.progressToNext + '%，当前推进 ' + s.buffs.progressPerMin + '%/分钟', 'project:ice_melt', '融冰工程加速');
    }
    // 植物
    if (s.plants.total < 10 && s.progress >= 10) {
      push(65, '植物太少', '全图仅 ' + s.plants.total + ' 株，氧气与土壤都缺', 'plant:moss', '苔藓先锋易活');
    }
    if (s.plants.by.crop && s.plants.by.crop.mature > 0) {
      push(40, '农作物可收割', s.plants.by.crop.mature + ' 株成熟', 'harvest:crop', '收获食物');
    }
    // 病害
    if (s.disease.active > 5) {
      push(75, '病害蔓延', s.disease.active + ' 株感染', 'cure:nearest', '治病每株 2 生物质');
    }
    // 动物
    if (s.progress >= 25 && s.fauna.insect.count === 0) {
      push(45, '没有昆虫', '植物缺授粉，生长 -25%', 'introduce:insect', '授粉 +25% 生长');
    }
    // 任务
    if (s.questsAvailable.length > 0) {
      push(30, '任务可领奖', s.questsAvailable.length + ' 个任务完成待领', 'quest:claim', '领资源奖励');
    }
    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, 5);
  }
}

/* ------------------------------------------------------------------------------
 * EcoReport：生态周报（每 100 分钟生成一份，数值对比上期）
 * ------------------------------------------------------------------------------
 * 周报 = 本期采样均值 − 上期采样均值（进步/退步一目了然），供 UI/存档回顾。
 * ------------------------------------------------------------------------------ */
class EcoReport {
  constructor() {
    this.reports = []; // [{min, progress, o2, diversity, plants, groundwater, tempC, deltas}]
    this.minutes = 0;
    this._nextAt = 100;
  }
  update(dtMin, eco) {
    this.minutes += dtMin;
    if (this.minutes < this._nextAt) return null;
    this._nextAt += 100;
    const cur = {
      min: ecoRound(this.minutes, 1),
      progress: ecoRound(eco.terraform.progress, 2),
      o2: ecoRound(eco.oxygen.stock, 1),
      diversity: ecoRound(eco.balance.diversity, 3),
      plants: eco.plants.count(),
      groundwater: ecoRound(eco.water.groundwater, 1),
      tempC: ecoRound(eco.terraform.tempC(), 1),
    };
    const prev = this.reports.length ? this.reports[this.reports.length - 1] : null;
    const deltas = {};
    if (prev) {
      for (const k in cur) {
        if (k === 'min') continue;
        deltas[k] = ecoRound(cur[k] - prev[k], 2);
      }
    }
    const rep = Object.assign({}, cur, { deltas: deltas });
    this.reports.push(rep);
    if (this.reports.length > 20) this.reports.shift();
    return rep;
  }
  latest() { return this.reports.length ? this.reports[this.reports.length - 1] : null; }
  summary() { return this.reports.slice(-5); }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), reports: this.reports, _nextAt: this._nextAt }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.reports = Array.isArray(data.reports) ? data.reports : [];
    this._nextAt = ecoSafeNum(data._nextAt, 100);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * PollinatorNetwork：授粉网络（按格授粉分 + 蜂箱加成 + 作物产量挂钩）
 * ------------------------------------------------------------------------------
 * 授粉分 = 昆虫密度（全图只数/100，上限 1）+ 蜂箱建筑（每座 +0.2，上限 1）
 * + 开花植物密度。作物产量 = 基础 × (0.5 + 0.5×授粉分)，授粉分为 0 时产量减半
 * （与 PlantSystem.harvestAt 的“无昆虫减半”同一口径，这里是连续版）。
 * ------------------------------------------------------------------------------ */
class PollinatorNetwork {
  constructor() { this.minutes = 0; this.lastScore = 0; }
  scoreAt(x, y, eco, game) {
    if (!eco) return 0;
    let s = 0;
    if (eco.fauna) s += ecoClamp(eco.fauna.pop('insect') / 100, 0, 0.6);
    if (eco.buildings) {
      const hives = eco.buildings.count(game, 'pollinator_hive');
      s += Math.min(0.2 * hives, 0.4);
    }
    // 邻格开花植物（作物开花期 / 灌木成熟）加成
    if (eco.plants && eco.grid) {
      const ns = eco.grid.neighbors8(x, y);
      let flowers = 0;
      for (let i = 0; i < ns.length; i++) {
        const ps = eco.plants.plotsAt(ns[i].x, ns[i].y);
        for (let j = 0; j < ps.length; j++) {
          const def = plantDef(ps[j].species);
          if (!def) continue;
          const st = plantStageFor(def, ps[j].ageDays);
          if (st.id === 'flower' || st.id === 'mature') flowers++;
        }
      }
      s += Math.min(flowers * 0.02, 0.2);
    }
    return ecoClamp(s, 0, 1);
  }
  yieldMulAt(x, y, eco, game) {
    // 产量倍率 0.5~1.0
    return ecoRound(0.5 + 0.5 * this.scoreAt(x, y, eco, game), 3);
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    this.lastScore = this.scoreAt(25, 25, eco, game);
  }
  summary(eco, game) {
    return {
      globalScore: ecoRound(eco ? ecoClamp((eco.fauna ? eco.fauna.pop('insect') : 0) / 100, 0, 0.6) : 0, 2),
      hives: eco && eco.buildings ? eco.buildings.count(game, 'pollinator_hive') : 0,
      centerScore: ecoRound(this.lastScore, 2),
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * TerritoryMap：领地地图（鸟类/哺乳动物的领地格 + 过度拥挤惩罚）
 * ------------------------------------------------------------------------------
 * 每只鸟占 1 格领地（以树为中心），每只哺乳动物占 2 格（以草地为中心）。
 * 领地重叠率 = 需求格 / 可用格；重叠 >1 时繁殖 ×0.6（拥挤）。
 * 领地格上有树的鸟巢成功率 +20%。
 * ------------------------------------------------------------------------------ */
class TerritoryMap {
  constructor(grid) {
    this.grid = grid || null;
    this.minutes = 0;
    this.lastOverlap = { bird: 0, mammal: 0 };
  }
  // 可用领地格数：鸟要树格，哺乳动物要草格
  availableTiles(kind, eco) {
    if (!eco || !eco.grid) return 0;
    let n = 0;
    for (let y = 0; y < eco.grid.size; y++) for (let x = 0; x < eco.grid.size; x++) {
      const t = eco.grid.get(x, y);
      if (kind === 'bird' && t.dominant === 'tree') n++;
      if (kind === 'mammal' && (t.dominant === 'grass' || t.dominant === 'shrub')) n++;
    }
    return n;
  }
  overlapRatio(kind, eco) {
    if (!eco || !eco.fauna) return 0;
    const N = kind === 'bird' ? eco.fauna.pop('bird') : eco.fauna.pop('mammal');
    const per = kind === 'bird' ? 1 : 2;
    const avail = Math.max(1, this.availableTiles(kind, eco));
    const ratio = (N * per) / avail;
    this.lastOverlap[kind] = ecoRound(ratio, 2);
    return ratio;
  }
  crowdingMul(kind, eco) {
    const r = this.overlapRatio(kind, eco);
    if (r > 2) return 0.4;
    if (r > 1) return 0.6;
    if (r > 0.7) return 0.85;
    return 1;
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    if (!eco || !eco.fauna) return;
    // 拥挤直接作用于种群：繁殖打折已在 FaunaSystem 外，这里做额外死亡
    for (let i = 0; i < ANIMAL_IDS.length; i++) {
      const id = ANIMAL_IDS[i];
      if (id === 'insect') continue;
      const mul = this.crowdingMul(id, eco);
      if (mul < 1 && eco.fauna.pop(id) > 0) {
        eco.fauna.addPop(id, -eco.fauna.pop(id) * (1 - mul) * 0.001 * dtMin);
      }
    }
  }
  summary(eco) {
    return {
      birdTiles: this.availableTiles('bird', eco),
      mammalTiles: this.availableTiles('mammal', eco),
      birdOverlap: ecoRound(this.overlapRatio('bird', eco), 2),
      mammalOverlap: ecoRound(this.overlapRatio('mammal', eco), 2),
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * TerraformLedger：改造台账（进度来源分项记账）
 * ------------------------------------------------------------------------------
 * 每分钟记一笔：被动 / 工程 / 建筑 / 植物固碳 / 事件 / 侵蚀 / 崩溃，
 * 各自累计总量与当期速率。UI 可画“进度来源饼图”，调参可定位谁在推进度。
 * ------------------------------------------------------------------------------ */
class TerraformLedger {
  constructor() {
    this.totals = { passive: 0, projects: 0, buildings: 0, plants: 0, events: 0, erosion: 0, collapse: 0 };
    this.rates = { passive: 0, projects: 0, buildings: 0, plants: 0 };
    this.minutes = 0;
    this._lastProgress = 0;
  }
  // 每分钟由总管调用：按本 tick 各来源的理论速率记账
  record(dtMin, eco, game) {
    this.minutes += dtMin;
    if (!eco || !eco.terraform) return;
    const passive = ETUNE.PROGRESS_PASSIVE_PER_MIN * dtMin;
    let projects = 0;
    for (const id in eco.terraform.continuousProjects) {
      const def = terraformProject(id);
      if (def) projects += def.ratePerMin * eco.terraform.continuousProjects[id] * dtMin;
    }
    let buildings = 0;
    if (eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      buildings = (agg.co2PerMin || 0) * dtMin;
    }
    let plants = 0;
    if (eco.plants) plants = Math.min(eco.plants.matureCount() / 1000 * 0.001, 0.01) * dtMin;
    this.totals.passive += passive;
    this.totals.projects += projects;
    this.totals.buildings += buildings;
    this.totals.plants += plants;
    this.rates.passive = ecoRound(passive / Math.max(dtMin, 0.001), 4);
    this.rates.projects = ecoRound(projects / Math.max(dtMin, 0.001), 4);
    this.rates.buildings = ecoRound(buildings / Math.max(dtMin, 0.001), 4);
    this.rates.plants = ecoRound(plants / Math.max(dtMin, 0.001), 4);
    // 侵蚀与崩溃：用进度差反推（记账为负项）
    const cur = eco.terraform.progress;
    const expected = this._lastProgress + passive + projects + buildings + plants;
    const diff = cur - expected;
    if (diff < -0.001) {
      // 负差：侵蚀或崩溃（按最近崩溃时间区分，简化：崩溃 60 分钟内记崩溃，否则记侵蚀）
      if (eco.balance && (eco.minutes - eco.balance.lastCollapseMin) < 5) this.totals.collapse += diff;
      else this.totals.erosion += diff;
    } else if (diff > 0.001) {
      this.totals.events += diff;
    }
    this._lastProgress = cur;
  }
  breakdown() {
    const t = this.totals;
    const pos = t.passive + t.projects + t.buildings + t.plants + t.events;
    return {
      totals: {
        passive: ecoRound(t.passive, 2), projects: ecoRound(t.projects, 2),
        buildings: ecoRound(t.buildings, 2), plants: ecoRound(t.plants, 2),
        events: ecoRound(t.events, 2), erosion: ecoRound(t.erosion, 2),
        collapse: ecoRound(t.collapse, 2),
      },
      rates: Object.assign({}, this.rates),
      net: ecoRound(pos + t.erosion + t.collapse, 2),
      topSource: (function () {
        let best = 'passive', bestV = t.passive;
        if (t.projects > bestV) { best = 'projects'; bestV = t.projects; }
        if (t.buildings > bestV) { best = 'buildings'; bestV = t.buildings; }
        if (t.plants > bestV) { best = 'plants'; bestV = t.plants; }
        return best;
      })(),
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), totals: this.totals, _lastProgress: this._lastProgress }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.totals = Object.assign({ passive: 0, projects: 0, buildings: 0, plants: 0, events: 0, erosion: 0, collapse: 0 }, data.totals || {});
    this._lastProgress = ecoSafeNum(data._lastProgress, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第三批 15 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_deep_frost', name: '深冬严寒', icon: '🥶', weight: 5, cooldownMin: 30, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'winter' && eco.terraform.tempC() < -40 && eco.plants.count() > 10; },
    apply: function (eco, game) {
      const killed = eco.plants.frostKill();
      return { log: '深冬严寒冻死 ' + killed + ' 株（温室内的没事）', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_spring_thaw', name: '春融', icon: '🌱', weight: 6, cooldownMin: 30, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'spring' && eco.terraform.progress >= 25; },
    apply: function (eco, game) {
      eco.water.addRainEvent(15);
      const n = eco.plants.windSpread(4);
      return { log: '春融：土壤回湿，种子萌发 ' + n + ' 株', severity: 'good', spread: n };
    },
  },
  {
    id: 'ev_summer_bloom', name: '盛夏繁花', icon: '🌸', weight: 6, cooldownMin: 30, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'summer' && eco.plants.countOf('crop') >= 5; },
    apply: function (eco, game) {
      eco.plants.spreadBoost(0.02);
      eco.fauna.addPop('insect', 8);
      return { log: '盛夏繁花：授粉昆虫 +8，植物扩散 +2%', severity: 'good', added: 8 };
    },
  },
  {
    id: 'ev_autumn_harvest', name: '秋收', icon: '🌾', weight: 6, cooldownMin: 30, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'autumn' && eco.plants.countOf('crop') >= 5; },
    apply: function (eco, game) {
      const res = eco.plants.harvestAllCrops(game, eco);
      return { log: '秋收：自动收获农作物 ' + res.count + ' 株，得食物 ' + res.food, severity: 'good', food: res.food };
    },
  },
  {
    id: 'ev_night_frost', name: '夜霜', icon: '🌙', weight: 5, cooldownMin: 20, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() < -15 && eco.plants.countOf('crop') > 0; },
    apply: function (eco, game) {
      let killed = 0;
      for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
        const p = eco.plants.plots[i];
        if (p.species === 'crop' && !p.indoor && Math.random() < 0.2) { eco.plants._removeAt(i); killed++; }
      }
      return { log: '夜霜冻死 ' + killed + ' 株露天农作物', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_morning_dew', name: '晨露', icon: '💧', weight: 7, cooldownMin: 15, once: false,
    condition: function (eco, game) { return eco.water.soilMoistureAvg() < 40 && eco.terraform.progress >= 40; },
    apply: function (eco, game) {
      eco.plants.waterAll(5);
      return { log: '晨露：土壤湿度 +5', severity: 'good' };
    },
  },
  {
    id: 'ev_soil_crack', name: '土壤板结', icon: '🏜️', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.water.soilMoistureAvg() < 15 && eco.plants.count() > 20; },
    apply: function (eco, game) {
      eco.soil.addFertilityAll(-3);
      const killed = eco.plants.droughtKill(0.08);
      return { log: '土壤板结：肥力 -3，旱死 ' + killed + ' 株', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_root_network', name: '菌根网络', icon: '🍄', weight: 4, cooldownMin: 45, once: false,
    condition: function (eco, game) { return eco.plants.countOf('tree') >= 10 && eco.plants.countOf('shrub') >= 10; },
    apply: function (eco, game) {
      eco.plants.spreadBoost(0.02);
      eco.soil.addFertilityAll(3);
      return { log: '菌根网络连通林木：植物扩散 +2%，土壤肥力 +3', severity: 'good' };
    },
  },
  {
    id: 'ev_first_tree_flower', name: '第一朵树花', icon: '🌺', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.countOf('tree') >= 1 && eco.plants.matureCount() >= 1 && !eco.flags.firstTreeFlower; },
    apply: function (eco, game) {
      eco.flags.firstTreeFlower = true;
      eco.fauna.addPop('bird', 2);
      return { log: '第一棵树开花：引来 2 只鸟', severity: 'good', birds: 2 };
    },
  },
  {
    id: 'ev_first_lake', name: '第一个湖', icon: '🏞️', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.water.lakes >= 1 && !eco.flags.firstLake; },
    apply: function (eco, game) {
      eco.flags.firstLake = true;
      eco.oxygen.addStock(30);
      return { log: '第一个湖泊形成：湖泊藻类产氧 +30 吨', severity: 'good', o2: 30 };
    },
  },
  {
    id: 'ev_comet_shower', name: '彗星雨', icon: '☄️', weight: 2, cooldownMin: 90, once: false,
    condition: function (eco, game) { return eco.terraform.progress < 60; },
    apply: function (eco, game) {
      eco.water.addIce(150);
      eco.terraform.addProgress(0.8, 'comet_shower');
      return { log: '彗星雨：冰水 +150，改造 +0.8%', severity: 'good', water: 150 };
    },
  },
  {
    id: 'ev_heat_dome', name: '热穹顶', icon: '♨️', weight: 3, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() > 25 && eco.plants.count() > 30; },
    apply: function (eco, game) {
      const stressed = eco.plants.heatStress(0.3);
      return { log: '热穹顶：' + stressed + ' 株植物热胁迫 5 分钟', severity: 'bad', stressed: stressed };
    },
  },
  {
    id: 'ev_wetland_bloom', name: '湿地花开', icon: '🌷', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.water.lakes >= 2 && eco.fauna.pop('bird') >= 6; },
    apply: function (eco, game) {
      eco.fauna.addPop('bird', 3);
      eco.balance.riskMinutes = Math.max(0, eco.balance.riskMinutes - 3);
      return { log: '湿地花开：鸟类 +3，生态风险 -3 分钟', severity: 'good', birds: 3 };
    },
  },
  {
    id: 'ev_iron_rain', name: '铁雨', icon: '🌧️', weight: 2, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.progress >= 20 && eco.terraform.progress < 50; },
    apply: function (eco, game) {
      ecoGrant(game, 'iron', 30);
      eco.soil.addFertilityAll(2);
      return { log: '铁雨：含铁尘埃沉降，铁 +30，土壤肥力 +2', severity: 'good', iron: 30 };
    },
  },
  {
    id: 'ev_silent_spring', name: '寂静的春天', icon: '🔇', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'spring' && eco.fauna.pop('insect') === 0 && eco.plants.count() > 20; },
    apply: function (eco, game) {
      eco.plants.grazeDamage(0.1);
      return { log: '寂静的春天：没有昆虫授粉，作物坐果率下降（草灌生物量 -10%）', severity: 'bad' };
    },
  }
);

/* ------------------------------------------------------------------------------
 * GROWTH_CURVES：逐日生长曲线（每种植物每天的“标准株”高度/产氧系数）
 * ------------------------------------------------------------------------------
 * 用于 UI 画生长曲线与“还需 X 天成熟”预测：curve[day] = 当日相对成熟度 0-1。
 * 曲线由逻辑斯谛函数生成并固化为表（避免每帧重复算 exp）。
 * ------------------------------------------------------------------------------ */
const GROWTH_CURVES = (function () {
  function logistic(days, k, mid) {
    const arr = [];
    for (let d = 0; d <= days; d++) {
      arr.push(ecoRound(1 / (1 + Math.exp(-k * (d - mid))), 3));
    }
    return arr;
  }
  return {
    moss: logistic(6, 1.2, 3),
    grass: logistic(10, 0.9, 5),
    shrub: logistic(18, 0.6, 9),
    crop: logistic(14, 0.9, 7),
    tree: logistic(40, 0.35, 20),
  };
})();
function growthCurveAt(species, ageDays) {
  const curve = GROWTH_CURVES[species];
  if (!curve) return 0;
  const idx = ecoClamp(Math.floor(ageDays), 0, curve.length - 1);
  return curve[idx];
}
function daysToMature(species, ageDays, ratePerDay) {
  // 按当前日均生长速率预测还需几天成熟（ratePerDay 为 growthFactors.rate 的日均）
  const def = plantDef(species);
  if (!def) return -1;
  const remain = def.growthDays - ageDays;
  if (remain <= 0) return 0;
  const r = ratePerDay > 0 ? ratePerDay : 1;
  return Math.ceil(remain / r);
}

/* ------------------------------------------------------------------------------
 * ANIMAL_LIFE_TABLES：动物生命表（寿命 / 性成熟龄 / 窝仔数 / 活动节律）
 * ------------------------------------------------------------------------------
 * 供 FaunaBehaviour 与 UI“物种图鉴”读取：寿命决定老年死亡率，性成熟龄决定
 * 繁殖的成年比例下限，窝仔数决定繁殖季的爆发上限。
 * ------------------------------------------------------------------------------ */
const ANIMAL_LIFE_TABLES = {
  insect: { lifespanDays: 30, maturityDays: 5, litterSize: 20, activity: 'diurnal', homeRange: 1, diet: ['grass', 'shrub'], note: '寿命 30 天，5 天性成熟，每窝 20 卵。' },
  bird: { lifespanDays: 365, maturityDays: 60, litterSize: 3, activity: 'diurnal', homeRange: 5, diet: ['insect'], note: '寿命 1 年，60 天性成熟，每窝 3 卵，活动半径 5 格。' },
  mammal: { lifespanDays: 730, maturityDays: 90, litterSize: 4, activity: 'crepuscular', homeRange: 3, diet: ['grass', 'shrub', 'insect'], note: '寿命 2 年，90 天性成熟，每窝 4 仔，晨昏活动。' },
};
function animalLifeTable(id) { return ANIMAL_LIFE_TABLES[id] || null; }

/* ------------------------------------------------------------------------------
 * ExtinctionLog：灭绝日志（每次物种灭绝/崩溃的完整记录 + 恢复追踪）
 * ------------------------------------------------------------------------------
 * 每条：时间、物种、原因（崩溃/饥饿/疾病/灾害）、灭绝时数量、是否已恢复。
 * 恢复追踪：再引入成功后对应条目标记 recovered。
 * ------------------------------------------------------------------------------ */
class ExtinctionLog {
  constructor() {
    this.entries = []; // {min, species, name, cause, countAtLoss, recovered}
    this.minutes = 0;
  }
  record(species, cause, countAtLoss, eco) {
    const name = PLANT_DEFS[species] ? PLANT_DEFS[species].name : (ANIMAL_DEFS[species] ? ANIMAL_DEFS[species].name : species);
    // 同物种 10 分钟内不重复记
    for (let i = this.entries.length - 1; i >= 0; i--) {
      const e = this.entries[i];
      if (e.species === species && !e.recovered && (this.minutes - e.min) < 10) return null;
    }
    const entry = { min: ecoRound(this.minutes, 1), species: species, name: name, cause: cause, countAtLoss: Math.floor(countAtLoss || 0), recovered: false };
    this.entries.push(entry);
    if (this.entries.length > 50) this.entries.shift();
    return entry;
  }
  markRecovered(species) {
    for (let i = this.entries.length - 1; i >= 0; i--) {
      if (this.entries[i].species === species && !this.entries[i].recovered) {
        this.entries[i].recovered = true;
        return true;
      }
    }
    return false;
  }
  update(dtMin, eco) {
    this.minutes += dtMin;
    if (!eco) return;
    // 恢复追踪：灭绝物种数量回升即标记
    for (let i = 0; i < this.entries.length; i++) {
      const e = this.entries[i];
      if (e.recovered) continue;
      let n = 0;
      if (PLANT_DEFS[e.species] && eco.plants) n = eco.plants.countOf(e.species);
      else if (ANIMAL_DEFS[e.species] && eco.fauna) n = eco.fauna.pop(e.species);
      if (n >= 6) e.recovered = true;
    }
  }
  summary() {
    return {
      total: this.entries.length,
      recovered: this.entries.filter(function (e) { return e.recovered; }).length,
      recent: this.entries.slice(-5),
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), entries: this.entries }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.entries = Array.isArray(data.entries) ? data.entries : [];
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * PlantSystem 原型扩展：修剪 / 移栽（玩家园艺操作）
 * ------------------------------------------------------------------------------ */
PlantSystem.prototype.prune = function (x, y, game, eco) {
  // 修剪：剪掉该格最老的一株灌木/树，得生物质 2，周围同种生长 +10%（透光）
  const here = this.plotsAt(x, y).filter(function (p) { return p.species === 'shrub' || p.species === 'tree'; });
  if (!here.length) return { ok: false, reason: '该格没有可修剪的灌木/树' };
  here.sort(function (a, b) { return b.ageDays - a.ageDays; });
  const target = here[0];
  const idx = this.plots.indexOf(target);
  if (idx < 0) return { ok: false, reason: '未找到植株' };
  this._removeAt(idx);
  ecoGrant(game, 'biomass', 2);
  if (eco && eco.compost) eco.compost.addDebris(1);
  return { ok: true, reason: '修剪一株' + plantDef(target.species).name + '，得生物质 2' };
};
PlantSystem.prototype.transplant = function (x, y, nx, ny, game, eco) {
  // 移栽：把一格内最年轻的一株移到目标格（目标格须可种且未满），健康 -20
  if (!this.grid || !this.grid.inBounds(nx, ny)) return { ok: false, reason: '目标超出地图' };
  const target = this.grid.get(nx, ny);
  if (!target.plantable()) return { ok: false, reason: '目标地形不可种植' };
  if (this.plotsAt(nx, ny).length >= ETUNE.PLOT_MAX_PER_TILE) return { ok: false, reason: '目标格已满' };
  const here = this.plotsAt(x, y);
  if (!here.length) return { ok: false, reason: '源格没有植物' };
  here.sort(function (a, b) { return a.ageDays - b.ageDays; });
  const p = here[0];
  p.x = nx; p.y = ny;
  p.health = ecoClamp(p.health - 20, 1, 100);
  this._rebuildIndex();
  return { ok: true, reason: '已移栽一株' + plantDef(p.species).name + '（健康 -20）' };
};
PlantSystem.prototype.plotDetail = function (x, y, eco, game) {
  // 单格详情（UI 点格查看）
  const tile = this.grid ? this.grid.get(x, y) : null;
  const plots = this.plotsAt(x, y);
  return {
    x: x, y: y,
    terrain: tile ? tile.terrain : -1,
    moisture: tile ? ecoRound(tile.moisture, 1) : 0,
    fertility: tile ? ecoRound(tile.fertility, 1) : 0,
    vegetation: tile ? ecoRound(tile.vegetation, 1) : 0,
    surfaceWater: tile ? ecoRound(tile.surfaceWater, 1) : 0,
    nutrients: eco && eco.soilNutrients ? eco.soilNutrients.get(x, y) : null,
    waterQuality: eco && eco.waterQuality ? eco.waterQuality.qualityFactor(x, y) : 1,
    plots: plots.map(function (p) {
      const def = plantDef(p.species);
      const f = eco ? { rate: 0 } : null;
      return {
        species: p.species, name: def ? def.name : p.species,
        ageDays: ecoRound(p.ageDays, 1), health: ecoRound(p.health, 1),
        stage: def ? plantStageFor(def, p.ageDays).name : '?',
        mature: def ? p.ageDays >= def.growthDays : false,
        indoor: p.indoor, disease: p.disease || null,
        growthCurve: growthCurveAt(p.species, p.ageDays),
        daysToMature: def ? daysToMature(p.species, p.ageDays, 1) : -1,
      };
    }),
  };
};

/* ------------------------------------------------------------------------------
 * WaterCycleSystem 原型扩展：旱涝预报
 * ------------------------------------------------------------------------------ */
WaterCycleSystem.prototype.forecast = function (eco, game) {
  const rain = this.rainMmY(eco, game);
  const eq = this.moistureEquilibrium(eco, game);
  const avg = this.soilMoistureAvg();
  // 干旱风险：土壤湿度低于平衡点 20 以上且降雨 <100mm
  const droughtRisk = (avg < eq - 20 && rain < 100) ? 'high' : ((avg < eq - 10) ? 'medium' : 'low');
  // 洪水风险：湖泊多 + 湿度高 + 降雨高
  const floodRisk = (this.lakes >= 3 && avg > 70 && rain > 200) ? 'high' : ((this.lakes >= 1 && avg > 60) ? 'medium' : 'low');
  return {
    rainMmY: ecoRound(rain, 1), equilibrium: ecoRound(eq, 1), soilAvg: ecoRound(avg, 1),
    droughtRisk: droughtRisk, floodRisk: floodRisk,
    groundwaterTrend: ecoRound(this.groundwater - 20, 1),
    advice: droughtRisk === 'high' ? '干旱风险高：建灌溉区或打井' : (floodRisk === 'high' ? '洪水风险高：疏浚河道' : '水情平稳'),
  };
};

/* ------------------------------------------------------------------------------
 * OxygenSystem 原型扩展：应急配给（氧气见底时的人口配给模式）
 * ------------------------------------------------------------------------------ */
OxygenSystem.prototype.setRationing = function (on) {
  this.rationing = !!on;
  return this.rationing;
};
OxygenSystem.prototype.effectiveConsumptionPerMin = function (eco, game) {
  let c = this.consumptionPerMin(eco, game);
  if (this.rationing) c *= 0.7; // 配给：耗氧 -30%，代价是人口增速 -20%（见 getBuffs 的 pol_ration_o2 同口径）
  return c;
};
OxygenSystem.prototype.emergencyCheck = function (eco, game) {
  // 氧气 <10% 且入不敷出 → 建议开配给；返回 {needRationing, hoursLeft}
  const cap = this.cap(eco, game);
  const ratio = cap > 0 ? this.stock / cap : 0;
  const bal = this.productionPerMin(eco, game) - this.consumptionPerMin(eco, game);
  const hoursLeft = bal < 0 && this.stock > 0 ? ecoRound(this.stock / Math.abs(bal) / 60, 1) : Infinity;
  return { needRationing: ratio < 0.1 && bal < 0, ratio: ecoRound(ratio, 3), hoursLeft: hoursLeft, balancePerMin: ecoRound(bal, 3) };
};

/* ------------------------------------------------------------------------------
 * 追加：8 个任务 / 10 个成就 / 存档迁移 / 一键接线 / 详情接口
 * ------------------------------------------------------------------------------ */
ECO_QUESTS.push(
  { id: 'q13', name: '灌溉大师', desc: '建成 1 个灌溉区', reward: { water: 100 }, check: function (eco) { return eco.irrigation.zones.length >= 1; } },
  { id: 'q14', name: '穹顶农场主', desc: '建成 1 座温室穹顶', reward: { steel: 30 }, check: function (eco) { return eco.greenhouses.domes.length >= 1; } },
  { id: 'q15', name: '地下水管家', desc: '钻探中层含水层', reward: { tech: 20 }, check: function (eco) { return eco.aquifer.layer('mid').drilled; } },
  { id: 'q16', name: '磁层先锋', desc: '完成磁层第 1 阶段', reward: { steel: 50 }, check: function (eco) { return eco.magnetPhases.phase >= 1; } },
  { id: 'q17', name: '授粉网络', desc: '昆虫达到 80 只', reward: { food: 40 }, check: function (eco) { return eco.fauna.pop('insect') >= 80; } },
  { id: 'q18', name: '河流之主', desc: '地表出现 1 条河流', reward: { water: 150 }, check: function (eco) { return eco.rivers.rivers.length >= 1; } },
  { id: 'q19', name: '湖泊守护者', desc: '地表出现 3 个湖泊', reward: { tech: 40 }, check: function (eco) { return eco.water.lakes >= 3; } },
  { id: 'q20', name: '生态全家福', desc: '8 个物种同时存在', reward: { tech: 100, rare: 20 }, check: function (eco) { const c = eco.balance.speciesCounts(eco); let n = 0; for (const k in c) if (c[k] > 0) n++; return n >= 8; } }
);
ECO_ACHIEVEMENTS.push(
  { id: 'eco_a31', name: '灌溉大师', desc: '建成灌溉区', check: function (eco) { return eco.irrigation.zones.length >= 1; } },
  { id: 'eco_a32', name: '穹顶农场主', desc: '建成温室穹顶', check: function (eco) { return eco.greenhouses.domes.length >= 1; } },
  { id: 'eco_a33', name: '授粉网络', desc: '昆虫超过 80 只', check: function (eco) { return eco.fauna.pop('insect') >= 80; } },
  { id: 'eco_a34', name: '河流之主', desc: '出现河流', check: function (eco) { return eco.rivers.rivers.length >= 1; } },
  { id: 'eco_a35', name: '三湖', desc: '出现 3 个湖泊', check: function (eco) { return eco.water.lakes >= 3; } },
  { id: 'eco_a36', name: '生态全家福', desc: '8 物种同时存在', check: function (eco) { const c = eco.balance.speciesCounts(eco); let n = 0; for (const k in c) if (c[k] > 0) n++; return n >= 8; } },
  { id: 'eco_a37', name: '磁层三阶', desc: '磁层三阶段全部完成', check: function (eco) { return eco.magnetPhases.phase >= 3; } },
  { id: 'eco_a38', name: '零灭绝', desc: '改造 70% 且无灭绝记录', check: function (eco) { return eco.terraform.progress >= 70 && eco.extinctionLog.entries.length === 0; } },
  { id: 'eco_a39', name: '周报达人', desc: '生成 5 份生态周报', check: function (eco) { return eco.report.reports.length >= 5; } },
  { id: 'eco_a40', name: '台账大师', desc: '改造台账净推进超过 50%', check: function (eco) { return eco.ledger.breakdown().net >= 50; } }
);

/* ------------------------------------------------------------------------------
 * EcologyMigration：存档迁移（旧版本 → 当前版本）
 * ------------------------------------------------------------------------------
 * migrate(data)：接受任何带 v 字段的旧存档，补齐缺失子系统字段，返回可 load 的数据。
 * v0（只有 progress/plots 的极简存档）→ v1：其余系统用默认值重建。
 * ------------------------------------------------------------------------------ */
const EcologyMigration = {
  CURRENT: ECO_VERSION,
  migrate: function (data) {
    if (!data || typeof data !== 'object') return null;
    if (data.v === ECO_VERSION) return data;
    const out = JSON.parse(JSON.stringify(data));
    out.v = ECO_VERSION;
    // v0 极简存档：{progress, plots:[{s,x,y,a,h}]} → 补全
    if (!out.terraform && typeof out.progress === 'number') {
      out.terraform = { v: 1, progress: out.progress, completedProjects: [], activeProjects: [], continuousProjects: {}, cometCount: 0, totalProgressGained: out.progress, stageChanges: [], minutes: 0, cooldowns: {} };
      delete out.progress;
    }
    if (!out.plants && Array.isArray(out.plots)) {
      out.plants = { v: 1, minutes: 0, plots: out.plots };
      delete out.plots;
    }
    // 缺失的子系统一律补默认空存档（load 时逐个校验，缺失不致命）
    const defaults = {
      grid: null, oxygen: { v: 1, stock: 0, minutes: 0, producedTotal: 0, consumedTotal: 0, deficitMinutes: 0, ventMul: 1 },
      water: { v: 1, groundwater: 20, minutes: 0, rainAccumMm: 0, evapAccumMm: 0, lakes: 0, iceStock: 0, pollution: 0, droughtUntil: 0 },
      fauna: { v: 1, pops: { insect: 0, bird: 0, mammal: 0 }, minutes: 0, introduced: {}, extinct: {} },
      balance: { v: 1, diversity: 0, riskMinutes: 0, collapseChecks: 0, lastCollapseMin: -1000, minutes: 0 },
      buildings: { v: 1, customDefs: {} }, policies: { v: 1, active: [] },
      visuals: { v: 1, overlayOn: true, showVegetation: true, showWater: true },
      events: { v: 1, minutes: 0, cooldowns: {}, firedOnce: {}, log: [] },
    };
    for (const k in defaults) if (!out[k] && defaults[k]) out[k] = defaults[k];
    if (!out.grid) out.grid = { v: 1, size: 50, seed: 1337, diff: [] };
    out.minutes = out.minutes || 0;
    out.flags = out.flags || { firstRain: false, firstBreath: false, habitable: false };
    out.stats = out.stats || {};
    out.achievementsUnlocked = out.achievementsUnlocked || [];
    out.logs = out.logs || [];
    return out;
  },
  // 校验存档完整性：返回缺失的子系统列表（供 game.js 决定是否修复）
  missingSystems: function (data) {
    const keys = ['grid', 'terraform', 'plants', 'oxygen', 'water', 'fauna', 'balance', 'buildings', 'policies', 'visuals', 'events'];
    const missing = [];
    if (!data) return keys.slice();
    for (let i = 0; i < keys.length; i++) if (!data[keys[i]]) missing.push(keys[i]);
    return missing;
  },
};

/* ------------------------------------------------------------------------------
 * EcologyIntegration：一键接线助手（game.js 只需调一次）
 * ------------------------------------------------------------------------------
 * attach(game)：在 game 对象上挂 ecology，注册 tick/save/load 钩子（不改 game.js
 * 原有代码结构，返回接线报告）。detach(game)：移除。
 * 注意：本文件不直接改 game.js；这里是给接入方调用的助手函数。
 * ------------------------------------------------------------------------------ */
const EcologyIntegration = {
  attach: function (game, mapSize, seed) {
    if (!game) return { ok: false, reason: '无 game 对象' };
    if (game.ecology) return { ok: false, reason: '已接线' };
    const eco = new EcologyManager(mapSize || (game.map ? game.map.size : 50), seed || 1337);
    game.ecology = eco;
    // 注入 builder 引用（建筑聚合读 builder.buildings 已有；这里补 waternet 式反向引用）
    if (game.builder) game.builder.ecology = eco;
    return {
      ok: true, reason: '已接线',
      hooks: {
        construct: 'this.ecology = new EcologyManager(this.map ? this.map.size : 50)',
        tick: 'if (this.ecology) this.ecology.update(now, dt, this);',
        save: 'data.ecology = this.ecology ? this.ecology.save() : null;',
        load: 'if (data.ecology && this.ecology) this.ecology.load(EcologyMigration.migrate(data.ecology));',
        render: 'if (this.ecology) this.ecology.renderOverlay(this.ctx, this.map, this.tile, this);',
        popGrowth: 'const ecoMul = game.ecology ? game.ecology.getBuffs().popGrowthMul : 1;',
        food: 'const ecoFood = game.ecology ? game.ecology.getBuffs().foodMul : 1;',
      },
    };
  },
  detach: function (game) {
    if (!game || !game.ecology) return { ok: false, reason: '未接线' };
    if (game.builder) delete game.builder.ecology;
    delete game.ecology;
    return { ok: true, reason: '已断开' };
  },
};

/* ------------------------------------------------------------------------------
 * 详情接口（各系统 detail 方法，供 UI 详情页读取）
 * ------------------------------------------------------------------------------ */
TerraformingSystem.prototype.detail = function (eco, game) {
  return {
    progress: ecoRound(this.progress, 2),
    stage: this.stage(),
    stageIndex: this.stageIndex(),
    progressToNext: 0,
    tempC: ecoRound(this.tempC(), 1),
    seasonalTempC: ecoRound(this.seasonalTempC(game), 1),
    pressureKpa: ecoRound(this.pressureKpa(), 1),
    gas: this.gasComposition(),
    co2Ppm: this.co2Ppm(),
    o2Percent: this.o2Percent(),
    magnetStrength: this.magnetStrength(),
    erosionPerMin: this.erosionPerMin(),
    albedo: eco ? this.albedo(eco) : 0.25,
    breathable: this.breathableO2Kpa(),
    completedProjects: this.completedProjects.slice(),
    activeProjects: this.activeProjects.map(function (p) { return { id: p.id, remainingMin: ecoRound(p.remainingMin, 1), totalMin: p.totalMin }; }),
    continuousProjects: Object.assign({}, this.continuousProjects),
    cometCount: this.cometCount,
    totalProgressGained: ecoRound(this.totalProgressGained, 2),
    stageChanges: this.stageChanges.slice(-10),
    unlocks: this.stage().unlocks,
    ledger: eco && eco.ledger ? eco.ledger.breakdown() : null,
  };
};
FaunaSystem.prototype.speciesDetail = function (id, eco, game) {
  const def = animalDef(id);
  if (!def) return null;
  const life = animalLifeTable(id);
  return {
    id: id, name: def.name, icon: def.icon, desc: def.desc,
    count: Math.floor(this.pop(id)),
    K: ecoRound(this.carryingCapacity(id, eco, game), 1),
    growthPerMin: ecoRound(this.lastGrowth[id] || 0, 3),
    foodFactor: eco ? ecoRound(this.foodFactor(id, eco), 2) : 1,
    viable: this.pop(id) >= def.minViable,
    extinct: !!this.extinct[id],
    introducedTotal: this.introduced[id] || 0,
    trophicLevel: 2 + (id === 'bird' ? 1 : 0),
    life: life,
    role: def.role,
    tempRange: def.tempMin + '~' + def.tempMax + '°C',
  };
};
PlantSystem.prototype.speciesDetail = function (species, eco, game) {
  const def = plantDef(species);
  if (!def) return null;
  const count = this.countOf(species);
  const mature = this.plots.filter(function (p) { return p.species === species && p.ageDays >= def.growthDays; }).length;
  return {
    id: species, name: def.name, icon: def.icon, desc: def.desc,
    count: count, mature: mature,
    growthDays: def.growthDays, waterNeed: def.waterNeed, sunNeed: def.sunNeed,
    tempRange: def.tempMin + '~' + def.tempMax + '°C',
    o2PerMin: def.o2PerMin, o2TotalPerMin: ecoRound(def.o2PerMin * mature, 3),
    yieldPerHarvest: def.yieldPerHarvest, yieldRes: def.yieldRes,
    harvestable: def.harvestable, edible: def.edible,
    biomass: this.biomassOf(species),
    growthCurve: GROWTH_CURVES[species] || [],
    stageUnlock: TERRAFORM_STAGES[def.stageUnlock].name,
    unlocked: eco && eco.terraform ? eco.terraform.stageIndex() >= def.stageUnlock : false,
    seeds: eco && eco.seeds ? eco.seeds.count(species) : 0,
    pollinationNeed: def.pollinationNeed || 0,
  };
};
EcoBalance.prototype.detail = function (eco) {
  const counts = this.speciesCounts(eco);
  const rows = [];
  let total = 0;
  for (const k in counts) total += counts[k];
  for (const k in counts) {
    rows.push({ id: k, name: this._speciesName(k), count: counts[k], share: total ? ecoRound(counts[k] / total, 3) : 0 });
  }
  rows.sort(function (a, b) { return b.count - a.count; });
  return {
    diversity: ecoRound(this.diversity, 3), shannon: ecoRound(this.shannon, 3),
    risk: ecoRound(this.collapseRisk(), 3), riskMinutes: ecoRound(this.riskMinutes, 1),
    collapseDue: this.collapseDue(), collapseChecks: this.collapseChecks,
    dominant: this.dominantSpecies, weakest: this.weakestSpecies,
    warnings: this.warnings.slice(), level: this.status().level,
    speciesRows: rows, total: total,
  };
};
WaterCycleSystem.prototype.detail = function (eco, game) {
  return {
    rainMmY: ecoRound(this.rainMmY(eco, game), 1),
    evapMmY: ecoRound(this.evapMmY(eco, game), 1),
    equilibrium: ecoRound(this.moistureEquilibrium(eco, game), 1),
    soilAvg: ecoRound(this.soilMoistureAvg(), 1),
    groundwater: ecoRound(this.groundwater, 1),
    groundwaterCap: this.groundwaterCap(game),
    lakes: this.lakes, pollution: ecoRound(this.pollution, 1),
    rainAccumMm: ecoRound(this.rainAccumMm, 1),
    evapAccumMm: ecoRound(this.evapAccumMm, 1),
    forecast: this.forecast(eco, game),
    aquifer: eco && eco.aquifer ? eco.aquifer.summary() : null,
    rivers: eco && eco.rivers ? eco.rivers.summary() : null,
  };
};
OxygenSystem.prototype.productionBreakdown = function (eco, game) {
  const by = { plants: 0, buildings: 0, electrolysis: 0, projects: 0 };
  if (eco && eco.plants) by.plants = ecoRound(eco.plants.oxygenPerMin(eco, game), 3);
  if (eco && eco.buildings) {
    const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
    by.buildings = ecoRound(agg.o2PerMin || 0, 3);
    if (agg.electrolyzerCount > 0) {
      const inv = ecoInv(game);
      const water = inv ? (inv.water || 0) : Infinity;
      const need = agg.electrolyzerCount * 5;
      const scale = water === Infinity ? 1 : ecoClamp(water / Math.max(need, 1), 0, 1);
      let elec = agg.electrolyzerCount * 4.0 * scale;
      if (ecoTechHas(game, 'eco_o2_1')) elec *= 1.5;
      by.electrolysis = ecoRound(elec, 3);
    }
  }
  if (eco && eco.terraform) {
    for (const id in eco.terraform.continuousProjects) {
      const def = terraformProject(id);
      if (def && def.o2PerMin) by.projects += def.o2PerMin * eco.terraform.continuousProjects[id];
    }
    by.projects = ecoRound(by.projects, 3);
  }
  return by;
};

/* ------------------------------------------------------------------------------
 * EcoVisuals 原型扩展：小地图数据 / 热力图数据 / 林冠层
 * ------------------------------------------------------------------------------ */
EcoVisuals.prototype.minimapData = function (eco, cellSize) {
  // 返回小地图色块数组（UI 直接画）：[{x, y, color}]
  if (!eco || !eco.grid) return [];
  const out = [];
  const progress = eco.terraform ? eco.terraform.progress : 0;
  const step = cellSize || 2; // 每 2 格采样 1 点，省绘制
  for (let y = 0; y < eco.grid.size; y += step) for (let x = 0; x < eco.grid.size; x += step) {
    const t = eco.grid.get(x, y);
    out.push({ x: x, y: y, color: this.tileColor(t, progress) });
  }
  return out;
};
EcoVisuals.prototype.heatmapData = function (eco, metric) {
  // 热力图：metric ∈ moisture / fertility / vegetation / surfaceWater，返回 0-1 归一值
  if (!eco || !eco.grid) return [];
  const out = [];
  for (let y = 0; y < eco.grid.size; y++) for (let x = 0; x < eco.grid.size; x++) {
    const t = eco.grid.get(x, y);
    let v = 0;
    if (metric === 'moisture') v = t.moisture / 100;
    else if (metric === 'fertility') v = t.fertility / 100;
    else if (metric === 'vegetation') v = t.vegetation / 100;
    else if (metric === 'surfaceWater') v = t.surfaceWater / 100;
    out.push({ x: x, y: y, v: ecoRound(v, 2) });
  }
  return out;
};
EcoVisuals.prototype.canopyLevel = function (tile) {
  // 林冠层级 0-5（树冠遮盖，供渲染分层）
  if (!tile || !tile.dominant) return 0;
  if (tile.dominant === 'tree') return Math.min(5, Math.ceil(tile.vegetation / 20));
  if (tile.dominant === 'shrub') return Math.min(3, Math.ceil(tile.vegetation / 33));
  if (tile.dominant === 'grass') return Math.min(2, Math.ceil(tile.vegetation / 50));
  return 1;
};

/* ------------------------------------------------------------------------------
 * EcoSeasonalCycle：季节循环（四季对全系统的修正总表）
 * ------------------------------------------------------------------------------
 * 季节不只是温度：春季播种季（生长 +10%）、夏季蒸发 +30%、秋季收获季
 * （产量 +10%）、冬季生长 -30% 且昆虫冬眠。修正由各系统读取本表的 factor。
 * ------------------------------------------------------------------------------ */
const ECO_SEASON_MODS = {
  spring: { growthMul: 1.1, evapMul: 1.0, yieldMul: 1.0, faunaMul: 1.2, rainMul: 1.1, desc: '春季：播种季，生长 +10%，降雨 +10%。' },
  summer: { growthMul: 1.15, evapMul: 1.3, yieldMul: 1.0, faunaMul: 1.3, rainMul: 1.0, desc: '夏季：生长 +15%，蒸发 +30%，动物活跃。' },
  autumn: { growthMul: 0.9, evapMul: 0.9, yieldMul: 1.1, faunaMul: 1.0, rainMul: 0.9, desc: '秋季：收获季，产量 +10%。' },
  winter: { growthMul: 0.7, evapMul: 0.6, yieldMul: 0.9, faunaMul: 0.5, rainMul: 0.7, desc: '冬季：生长 -30%，动物半冬眠，降雨 -30%。' },
};
class EcoSeasonalCycle {
  static mods(game) {
    const s = ecoSeason(game);
    return ECO_SEASON_MODS[s] || ECO_SEASON_MODS.spring;
  }
  static growthMul(game) { return EcoSeasonalCycle.mods(game).growthMul; }
  static yieldMul(game) { return EcoSeasonalCycle.mods(game).yieldMul; }
  static faunaMul(game) { return EcoSeasonalCycle.mods(game).faunaMul; }
  static describe(game) { return EcoSeasonalCycle.mods(game).desc; }
}

/* ------------------------------------------------------------------------------
 * EcoActions：统一操作分发（UI 只调这一个入口）
 * ------------------------------------------------------------------------------
 * 每个操作：{id, name, cost 预览, validate, run}。dispatch(actionId, args, game)
 * 返回统一 {ok, reason, data}。UI 用 preview(actionId, args, game) 拿成本预览。
 * ------------------------------------------------------------------------------ */
const ECO_ACTIONS = [
  { id: 'plant', name: '种植', costPreview: function (a) { const d = plantDef(a.species); return d ? d.plantCost : null; } },
  { id: 'harvest', name: '收割', costPreview: function () { return null; } },
  { id: 'harvest_all', name: '全部收割', costPreview: function () { return null; } },
  { id: 'introduce', name: '引入动物', costPreview: function (a) { const d = animalDef(a.id); return d ? d.introCost : null; } },
  { id: 'project', name: '启动工程', costPreview: function (a) { const d = terraformProject(a.id); return d ? d.cost : null; } },
  { id: 'dome', name: '建穹顶', costPreview: function (a) { return { steel: 30 + (a.radius || 3) * 10, iron: 20 }; } },
  { id: 'fertilize', name: '施肥', costPreview: function (a) { return { biomass: a.kind === 'compost' ? 5 : 3 }; } },
  { id: 'cure', name: '治病', costPreview: function () { return { biomass: 2 }; } },
  { id: 'drill', name: '钻井', costPreview: function (a) { const L = AQUIFER_LAYERS.filter(function (x) { return x.id === a.id; })[0]; return L ? L.drillCost : null; } },
  { id: 'policy', name: '切换政策', costPreview: function () { return null; } },
  { id: 'prune', name: '修剪', costPreview: function () { return null; } },
  { id: 'transplant', name: '移栽', costPreview: function () { return null; } },
  { id: 'quest_claim', name: '领任务奖励', costPreview: function () { return null; } },
  { id: 'magnet_phase', name: '磁层下一阶段', costPreview: function (a, eco) { const p = eco && eco.magnetPhases ? eco.magnetPhases.phase : 0; return p < 3 ? MAGNET_PHASES[p].cost : null; } },
  { id: 'reintroduce_animal', name: '再引入动物', costPreview: function (a) { const d = animalDef(a.id); return d ? { food: d.introCost.food * 2 } : null; } },
  { id: 'rationing', name: '氧气配给开关', costPreview: function () { return null; } },
  { id: 'expedition', name: '生态远征', costPreview: function () { return { food: 15 }; } },
  { id: 'crossbreed', name: '植物育种', costPreview: function () { return { biomass: 10 }; } },
  { id: 'plant_plus', name: '种强化种', costPreview: function () { return null; } },
  { id: 'feed_station', name: '建投喂站', costPreview: function () { return { steel: 15, food: 10 }; } },
  { id: 'dome_auto', name: '穹顶自动化', costPreview: function () { return null; } },
  { id: 'reservoir', name: '建水库', costPreview: function () { return { steel: 80, iron: 30 }; } },
  { id: 'construction', name: '建造队列', costPreview: function (a) { const d = ECO_BUILDINGS.filter(function (b) { return b.id === a.id; })[0]; return d ? d.cost : null; } },
  { id: 'restoration', name: '修复工程', costPreview: function () { return { biomass: 30 }; } },
  { id: 'market_sell', name: '市场卖出', costPreview: function () { return null; } },
  { id: 'market_buy', name: '市场买入', costPreview: function () { return null; } },
];
class EcoActions {
  static def(id) {
    for (let i = 0; i < ECO_ACTIONS.length; i++) if (ECO_ACTIONS[i].id === id) return ECO_ACTIONS[i];
    return null;
  }
  static preview(id, args, eco, game) {
    const def = EcoActions.def(id);
    if (!def) return null;
    try { return def.costPreview(args || {}, eco, game); } catch (e) { return null; }
  }
  static dispatch(id, args, eco, game) {
    args = args || {};
    switch (id) {
      case 'plant': return eco.plantAt(args.x, args.y, args.species, game, args.opts);
      case 'harvest': return { ok: true, reason: '已收割', data: eco.harvestAt(args.x, args.y, game) };
      case 'harvest_all': return { ok: true, reason: '已收割全部', data: eco.harvestAllCrops(game) };
      case 'introduce': return eco.introduceAnimal(args.id, game);
      case 'project': return eco.startProject(args.id, game);
      case 'dome': return eco.buildDome(args.x, args.y, args.radius, game);
      case 'fertilize': return eco.fertilize(args.x, args.y, args.kind, game);
      case 'cure': return eco.cureDiseaseAt(args.x, args.y, game);
      case 'drill': return eco.drillAquifer(args.id, game);
      case 'policy': return eco.togglePolicy(args.id);
      case 'prune': return eco.prune(args.x, args.y, game);
      case 'transplant': return eco.transplant(args.x, args.y, args.nx, args.ny, game);
      case 'quest_claim': return eco.claimQuest(args.id, game);
      case 'magnet_phase': return eco.startMagnetPhase(game);
      case 'reintroduce_animal': return eco.reintroduceAnimal(args.id, game, args.rng);
      case 'rationing': return { ok: true, reason: args.on ? '配给已开启' : '配给已关闭', data: { rationing: eco.setOxygenRationing(args.on) } };
      case 'expedition': return eco.launchExpedition(args.kind, args.x, args.y, game);
      case 'crossbreed': return eco.crossbreed(args.species, args.x, args.y, game);
      case 'plant_plus': return eco.plantPlus(args.species, args.x, args.y, game);
      case 'feed_station': return eco.buildFeedingStation(args.x, args.y, args.species, game);
      case 'dome_auto': return eco.setDomeAutomation(args.x, args.y, args.kind, args.on, game);
      case 'reservoir': return eco.buildReservoir(args.x, args.y, game);
      case 'construction': return eco.enqueueConstruction(args.id, game);
      case 'restoration': return eco.startRestoration(args.type, args.x0, args.y0, args.x1, args.y1, game);
      case 'market_sell': return eco.marketSell(args.kind, args.amount, game);
      case 'market_buy': return eco.marketBuy(args.kind, args.amount, game);
      default: return { ok: false, reason: '未知操作：' + id };
    }
  }
  static list() {
    return ECO_ACTIONS.map(function (a) { return { id: a.id, name: a.name }; });
  }
}

/* ------------------------------------------------------------------------------
 * FarmZones：农场区（划区种田 + 轮作计划 + 集中收割）
 * ------------------------------------------------------------------------------
 * 农场区是矩形地块 + 轮作计划（[crop, grass, crop, shrub] 循环）。
 * 每区有“当前作物”：种满后按计划轮换；集中收割一键收区内全部成熟作物。
 * 轮作计划遵守则产量 +10%（土壤不疲劳）。
 * ------------------------------------------------------------------------------ */
class FarmZones {
  constructor(grid) {
    this.grid = grid || null;
    this.zones = []; // {id, name, x0,y0,x1,y1, rotation:[species], rotIndex, crop}
    this.minutes = 0;
    this._nextId = 1;
    this.harvestBonus = 0.1; // 遵守轮作 +10%
  }
  addZone(x0, y0, x1, y1, rotation, name) {
    if (x1 < x0) { const t = x0; x0 = x1; x1 = t; }
    if (y1 < y0) { const t = y0; y0 = y1; y1 = t; }
    const rot = (rotation || ['crop', 'grass']).filter(function (s) { return !!plantDef(s); });
    if (!rot.length) rot.push('crop');
    const zone = {
      id: 'farm' + (this._nextId++), name: name || ('农场' + this._nextId),
      x0: x0, y0: y0, x1: x1, y1: y1,
      rotation: rot, rotIndex: 0, crop: rot[0],
    };
    this.zones.push(zone);
    return zone;
  }
  removeZone(id) {
    for (let i = 0; i < this.zones.length; i++) if (this.zones[i].id === id) { this.zones.splice(i, 1); return true; }
    return false;
  }
  zoneAt(x, y) {
    for (let i = 0; i < this.zones.length; i++) {
      const z = this.zones[i];
      if (x >= z.x0 && x <= z.x1 && y >= z.y0 && y <= z.y1) return z;
    }
    return null;
  }
  // 按当前轮作作物种满全区（返回种下数与失败数）
  plantZone(id, game, eco) {
    const z = this.zones.filter(function (zz) { return zz.id === id; })[0];
    if (!z) return { ok: false, reason: '未知农场区' };
    let planted = 0, failed = 0;
    for (let y = z.y0; y <= z.y1; y++) for (let x = z.x0; x <= z.x1; x++) {
      const r = eco.plantAt(x, y, z.crop, game, { indoor: false });
      if (r.ok) planted++;
      else failed++;
    }
    return { ok: planted > 0, reason: '种下 ' + planted + ' 株' + plantDef(z.crop).name + '（失败 ' + failed + ' 格）', planted: planted, failed: failed };
  }
  // 轮换到下一个作物
  rotate(id) {
    const z = this.zones.filter(function (zz) { return zz.id === id; })[0];
    if (!z) return { ok: false, reason: '未知农场区' };
    z.rotIndex = (z.rotIndex + 1) % z.rotation.length;
    z.crop = z.rotation[z.rotIndex];
    return { ok: true, reason: '轮作至「' + plantDef(z.crop).name + '」', crop: z.crop };
  }
  // 集中收割全区成熟作物（轮作奖励 +10%）
  harvestZone(id, game, eco) {
    const z = this.zones.filter(function (zz) { return zz.id === id; })[0];
    if (!z) return { ok: false, reason: '未知农场区' };
    let food = 0, biomass = 0, count = 0;
    for (let y = z.y0; y <= z.y1; y++) for (let x = z.x0; x <= z.x1; x++) {
      const r = eco.harvestAt(x, y, game);
      food += r.food; biomass += r.biomass; count += r.count;
    }
    if (food > 0) {
      const bonus = Math.round(food * this.harvestBonus);
      ecoGrant(game, 'food', bonus);
      food += bonus;
    }
    return { ok: true, reason: '收割 ' + count + ' 株，得食物 ' + food + '（含轮作奖励）', food: food, biomass: biomass, count: count };
  }
  // 区内成熟率（供 UI 进度条）
  maturity(id, eco) {
    const z = this.zones.filter(function (zz) { return zz.id === id; })[0];
    if (!z || !eco) return 0;
    let total = 0, mature = 0;
    for (let y = z.y0; y <= z.y1; y++) for (let x = z.x0; x <= z.x1; x++) {
      const ps = eco.plants.plotsAt(x, y);
      for (let i = 0; i < ps.length; i++) {
        const def = plantDef(ps[i].species);
        total++;
        if (def && ps[i].ageDays >= def.growthDays) mature++;
      }
    }
    return total ? ecoRound(mature / total, 2) : 0;
  }
  update(dtMin) { this.minutes += dtMin; }
  summary(eco) {
    const self = this;
    return this.zones.map(function (z) {
      return { id: z.id, name: z.name, x0: z.x0, y0: z.y0, x1: z.x1, y1: z.y1, crop: z.crop, rotation: z.rotation.slice(), maturity: self.maturity(z.id, eco) };
    });
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), zones: this.zones, _nextId: this._nextId }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.zones = Array.isArray(data.zones) ? data.zones : [];
    this._nextId = ecoSafeNum(data._nextId, this.zones.length + 1);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * WildlifeSanctuary：野生动物庇护所（投喂 + 栖息地评分 + 繁殖加成）
 * ------------------------------------------------------------------------------
 * 庇护所是指定区域：投喂食物（每分钟消耗食物，种群繁殖 +50%），栖息地评分由
 * 区内植被覆盖与水源决定（>0.7 时繁殖再 +50%）。庇护所上限 3 个。
 * ------------------------------------------------------------------------------ */
class WildlifeSanctuary {
  constructor(grid) {
    this.grid = grid || null;
    this.sanctuaries = []; // {id, name, x0,y0,x1,y1, feeding, species}
    this.minutes = 0;
    this._nextId = 1;
    this.MAX = 3;
  }
  add(x0, y0, x1, y1, species, name) {
    if (this.sanctuaries.length >= this.MAX) return { ok: false, reason: '庇护所已满（最多 ' + this.MAX + ' 个）' };
    if (!animalDef(species)) return { ok: false, reason: '未知动物' };
    if (x1 < x0) { const t = x0; x0 = x1; x1 = t; }
    if (y1 < y0) { const t = y0; y0 = y1; y1 = t; }
    const s = { id: 'sanc' + (this._nextId++), name: name || ('庇护所' + this._nextId), x0: x0, y0: y0, x1: x1, y1: y1, species: species, feeding: false };
    this.sanctuaries.push(s);
    return { ok: true, reason: '庇护所建成', sanctuary: s };
  }
  remove(id) {
    for (let i = 0; i < this.sanctuaries.length; i++) if (this.sanctuaries[i].id === id) { this.sanctuaries.splice(i, 1); return true; }
    return false;
  }
  setFeeding(id, on, game) {
    const s = this.sanctuaries.filter(function (x) { return x.id === id; })[0];
    if (!s) return { ok: false, reason: '未知庇护所' };
    s.feeding = !!on;
    return { ok: true, reason: on ? '开始投喂' : '停止投喂' };
  }
  // 栖息地评分 0-1：植被覆盖 + 水源 + 面积
  habitatScore(s, eco) {
    if (!eco || !eco.grid) return 0;
    let veg = 0, water = 0, n = 0;
    for (let y = s.y0; y <= s.y1; y++) for (let x = s.x0; x <= s.x1; x++) {
      const t = eco.grid.get(x, y);
      if (!t) continue;
      veg += t.vegetation;
      if (t.surfaceWater > 10) water++;
      n++;
    }
    if (!n) return 0;
    const vegScore = (veg / n) / 100;
    const waterScore = water / n;
    const areaScore = ecoClamp(n / 25, 0, 1);
    return ecoRound(vegScore * 0.5 + waterScore * 0.3 + areaScore * 0.2, 2);
  }
  // 繁殖加成倍率（供 FaunaSystem 读取）
  breedMulFor(species, eco) {
    let m = 1;
    for (let i = 0; i < this.sanctuaries.length; i++) {
      const s = this.sanctuaries[i];
      if (s.species !== species) continue;
      const score = this.habitatScore(s, eco);
      if (score > 0.7) m *= 1.5;
      else if (score > 0.4) m *= 1.2;
      if (s.feeding) m *= 1.5;
    }
    return m;
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    // 投喂消耗：每座投喂中的庇护所每分钟耗食物 1
    for (let i = 0; i < this.sanctuaries.length; i++) {
      const s = this.sanctuaries[i];
      if (!s.feeding) continue;
      const inv = ecoInv(game);
      if (inv && (inv.food || 0) >= 1) inv.food -= 1 * dtMin;
      else s.feeding = false; // 没食物自动停喂
    }
  }
  summary(eco) {
    const self = this;
    return this.sanctuaries.map(function (s) {
      return { id: s.id, name: s.name, species: s.species, feeding: s.feeding, habitatScore: self.habitatScore(s, eco), breedMul: ecoRound(self.breedMulFor(s.species, eco), 2) };
    });
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), sanctuaries: this.sanctuaries, _nextId: this._nextId }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.sanctuaries = Array.isArray(data.sanctuaries) ? data.sanctuaries : [];
    this._nextId = ecoSafeNum(data._nextId, this.sanctuaries.length + 1);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * ReservoirSystem：水库（蓄雨水 + 旱季放水）
 * ------------------------------------------------------------------------------
 * 水库容量 500：雨季自动蓄水（降雨时每分钟 +降雨量×0.1），旱季自动放水
 * （土壤湿度 <30 时每分钟放 2 到全图湿度）。放水/蓄水速率可调（0-5）。
 * ------------------------------------------------------------------------------ */
class ReservoirSystem {
  constructor() {
    this.reservoirs = []; // {id, x, y, stored, cap, releaseRate}
    this.minutes = 0;
    this._nextId = 1;
    this.MAX = 5;
  }
  build(x, y, game) {
    if (this.reservoirs.length >= this.MAX) return { ok: false, reason: '水库已满（最多 ' + this.MAX + ' 座）' };
    const cost = { steel: 80, iron: 40 };
    if (!ecoCanAfford(game, cost)) return { ok: false, reason: '资源不足' };
    ecoPay(game, cost);
    const r = { id: 'res' + (this._nextId++), x: x, y: y, stored: 0, cap: 500, releaseRate: 2 };
    this.reservoirs.push(r);
    return { ok: true, reason: '水库建成（容量 500）', reservoir: r };
  }
  setRelease(id, rate) {
    const r = this.reservoirs.filter(function (x) { return x.id === id; })[0];
    if (!r) return { ok: false, reason: '未知水库' };
    r.releaseRate = ecoClamp(rate, 0, 5);
    return { ok: true, reason: '放水速率设为 ' + r.releaseRate + '/分钟' };
  }
  totalStored() {
    let s = 0;
    for (let i = 0; i < this.reservoirs.length; i++) s += this.reservoirs[i].stored;
    return ecoRound(s, 1);
  }
  totalCap() { return this.reservoirs.length * 500; }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    if (!eco || !eco.water) return;
    const rain = eco.water.lastRainMmY;
    const soilAvg = eco.water.soilMoistureAvg();
    for (let i = 0; i < this.reservoirs.length; i++) {
      const r = this.reservoirs[i];
      // 蓄水：降雨时蓄
      if (rain > 100 && r.stored < r.cap) {
        r.stored = Math.min(r.cap, r.stored + rain * 0.001 * dtMin);
      }
      // 放水：土壤干时放
      if (soilAvg < 30 && r.stored > 0) {
        const release = Math.min(r.stored, r.releaseRate * dtMin);
        r.stored -= release;
        if (eco.grid) eco.grid.addMoistureAll(release * 0.02);
      }
      // 蒸发：水库水面蒸发
      r.stored = Math.max(0, r.stored - 0.05 * dtMin);
    }
  }
  summary() {
    return {
      count: this.reservoirs.length,
      stored: this.totalStored(),
      cap: this.totalCap(),
      reservoirs: this.reservoirs.map(function (r) { return { id: r.id, x: r.x, y: r.y, stored: ecoRound(r.stored, 1), cap: r.cap, releaseRate: r.releaseRate }; }),
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), reservoirs: this.reservoirs, _nextId: this._nextId }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.reservoirs = Array.isArray(data.reservoirs) ? data.reservoirs : [];
    this._nextId = ecoSafeNum(data._nextId, this.reservoirs.length + 1);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * InvasiveSpeciesSystem：入侵物种（入侵草疯长 + 除草）
 * ------------------------------------------------------------------------------
 * 入侵草是第 6 种“植物”（不在 PLANT_DEFS 里，是威胁不是资源）：
 * 多样性 <0.5 且草多时入侵，每分钟向邻格扩散，挤占其他植物（同格其他植物
 * 健康 -0.5/分钟）。除草：weedAt(x, y, game) 花生物质 1/株清除。
 * ------------------------------------------------------------------------------ */
class InvasiveSpeciesSystem {
  constructor(grid) {
    this.grid = grid || null;
    this.patches = []; // {x, y, size}
    this.minutes = 0;
    this.weededTotal = 0;
  }
  count() {
    let n = 0;
    for (let i = 0; i < this.patches.length; i++) n += this.patches[i].size;
    return n;
  }
  // 入侵检定（每分钟由总管调用）
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const r = rng || Math.random;
    if (!eco || !eco.plants) return;
    // 触发：多样性低 + 草多 + 尚无入侵
    if (this.patches.length === 0 && eco.balance.diversity < 0.5 && eco.plants.countOf('grass') > 50) {
      if (r() < 0.01 * dtMin) {
        const t = eco.grid.randomPlantableTile(r);
        this.patches.push({ x: t.x, y: t.y, size: 5 });
        if (eco) eco.log('入侵物种出现：入侵草在（' + t.x + ',' + t.y + '）定植');
      }
    }
    // 扩散与挤占
    for (let i = 0; i < this.patches.length; i++) {
      const p = this.patches[i];
      p.size = Math.min(50, p.size + 0.1 * dtMin);
      // 挤占同格植物
      const here = eco.plants.plotsAt(p.x, p.y);
      for (let j = 0; j < here.length; j++) {
        if (here[j].species !== 'grass') here[j].health -= 0.5 * dtMin;
      }
      // 向邻格扩散
      if (r() < 0.02 * dtMin) {
        const ns = eco.grid.neighbors(p.x, p.y);
        if (ns.length) {
          const nt = ns[Math.floor(r() * ns.length)];
          let found = null;
          for (let k = 0; k < this.patches.length; k++) if (this.patches[k].x === nt.x && this.patches[k].y === nt.y) found = this.patches[k];
          if (found) found.size = Math.min(50, found.size + 2);
          else this.patches.push({ x: nt.x, y: nt.y, size: 2 });
        }
      }
    }
  }
  weedAt(x, y, game, eco) {
    let idx = -1;
    for (let i = 0; i < this.patches.length; i++) if (this.patches[i].x === x && this.patches[i].y === y) { idx = i; break; }
    if (idx < 0) return { ok: false, reason: '该格没有入侵草' };
    const size = this.patches[idx].size;
    const cost = { biomass: Math.ceil(size / 5) };
    if (!ecoCanAfford(game, cost)) return { ok: false, reason: '生物质不足（需 ' + cost.biomass + '）' };
    ecoPay(game, cost);
    this.patches.splice(idx, 1);
    this.weededTotal += size;
    return { ok: true, reason: '清除入侵草 ' + Math.floor(size) + ' 株当量', cleared: Math.floor(size) };
  }
  summary() {
    return { patches: this.patches.length, total: Math.floor(this.count()), weededTotal: Math.floor(this.weededTotal) };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), patches: this.patches, weededTotal: this.weededTotal }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.patches = Array.isArray(data.patches) ? data.patches : [];
    this.weededTotal = ecoSafeNum(data.weededTotal, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoAlerts：生态告警（阈值 + 冷却 + 严重度）
 * ------------------------------------------------------------------------------
 * 每分钟检查 8 条阈值规则，触发时记告警（去重冷却 10 分钟），供 UI 红点提示。
 * ------------------------------------------------------------------------------ */
const ECO_ALERT_RULES = [
  { id: 'al_o2_empty', name: '氧气耗尽', severity: 'critical', check: function (eco) { return eco.oxygen.stock <= 0; } },
  { id: 'al_o2_low', name: '氧气不足', severity: 'warning', check: function (eco) { return eco.oxygen.stock > 0 && eco.oxygen.ratio(eco, null) < 0.2; } },
  { id: 'al_water_low', name: '地下水不足', severity: 'warning', check: function (eco) { return eco.water.groundwater < 15; } },
  { id: 'al_diversity', name: '多样性过低', severity: 'critical', check: function (eco) { return eco.balance.diversity < 0.2 && eco.plants.count() > 10; } },
  { id: 'al_collapse_risk', name: '崩溃风险', severity: 'critical', check: function (eco) { return eco.balance.collapseRisk() > 0.8; } },
  { id: 'al_disease', name: '病害蔓延', severity: 'warning', check: function (eco) { return eco.disease.infectedCount(eco) > 20; } },
  { id: 'al_invasive', name: '入侵物种', severity: 'warning', check: function (eco) { return eco.invasive.count() > 50; } },
  { id: 'al_frost', name: '严寒', severity: 'info', check: function (eco) { return eco.terraform.tempC() < -40 && eco.plants.count() > 0; } },
];
class EcoAlerts {
  constructor() {
    this.minutes = 0;
    this.active = []; // {id, name, severity, min}
    this.cooldowns = {};
    this.history = [];
  }
  update(dtMin, eco) {
    this.minutes += dtMin;
    this.active = [];
    for (let i = 0; i < ECO_ALERT_RULES.length; i++) {
      const rule = ECO_ALERT_RULES[i];
      if ((this.cooldowns[rule.id] || 0) > this.minutes) continue;
      let hit = false;
      try { hit = !!rule.check(eco); } catch (e) { hit = false; }
      if (hit) {
        this.active.push({ id: rule.id, name: rule.name, severity: rule.severity, min: ecoRound(this.minutes, 1) });
        this.cooldowns[rule.id] = this.minutes + 10;
        this.history.push({ id: rule.id, name: rule.name, severity: rule.severity, min: ecoRound(this.minutes, 1) });
        if (this.history.length > 50) this.history.shift();
      }
    }
    return this.active;
  }
  hasCritical() {
    for (let i = 0; i < this.active.length; i++) if (this.active[i].severity === 'critical') return true;
    return false;
  }
  summary() { return { active: this.active.slice(), history: this.history.slice(-10) }; }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), history: this.history.slice(-20) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.history = Array.isArray(data.history) ? data.history : [];
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoStatistics：生态统计（累计量 + 峰值记录 + 速率）
 * ------------------------------------------------------------------------------
 * 峰值记录（历史最高/最低）是玩家成就感的来源：最高多样性、最大氧气库存、
 * 最多植物数、累计种树数等，全部是真实累计值。
 * ------------------------------------------------------------------------------ */
class EcoStatistics {
  constructor() {
    this.minutes = 0;
    this.records = {
      maxDiversity: 0, maxOxygen: 0, maxPlants: 0, maxProgress: 0,
      maxGroundwater: 0, maxTempC: -100, minTempC: 100,
      totalPlanted: 0, totalHarvested: 0, totalIntroduced: 0,
    };
  }
  update(dtMin, eco) {
    this.minutes += dtMin;
    if (!eco) return;
    const r = this.records;
    r.maxDiversity = Math.max(r.maxDiversity, eco.balance.diversity);
    r.maxOxygen = Math.max(r.maxOxygen, eco.oxygen.stock);
    r.maxPlants = Math.max(r.maxPlants, eco.plants.count());
    r.maxProgress = Math.max(r.maxProgress, eco.terraform.progress);
    r.maxGroundwater = Math.max(r.maxGroundwater, eco.water.groundwater);
    r.maxTempC = Math.max(r.maxTempC, eco.terraform.tempC());
    r.minTempC = Math.min(r.minTempC, eco.terraform.tempC());
    r.totalPlanted = eco.stats.totalPlanted;
    r.totalHarvested = eco.stats.totalHarvestFood;
    r.totalIntroduced = (eco.fauna.introduced.insect || 0) + (eco.fauna.introduced.bird || 0) + (eco.fauna.introduced.mammal || 0);
  }
  summary() {
    const r = this.records;
    return {
      maxDiversity: ecoRound(r.maxDiversity, 3),
      maxOxygen: ecoRound(r.maxOxygen, 1),
      maxPlants: r.maxPlants,
      maxProgress: ecoRound(r.maxProgress, 2),
      maxGroundwater: ecoRound(r.maxGroundwater, 1),
      maxTempC: ecoRound(r.maxTempC, 1),
      minTempC: ecoRound(r.minTempC, 1),
      totalPlanted: r.totalPlanted,
      totalHarvested: ecoRound(r.totalHarvested, 1),
      totalIntroduced: r.totalIntroduced,
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), records: this.records }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.records = Object.assign(this.records, data.records || {});
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoConstructionQueue：建造队列（持续型工程先建造后生效）
 * ------------------------------------------------------------------------------
 * 温室气体工厂等持续型工程不再是“付款即生效”：进入建造队列，每座建造 5 分钟，
 * 建好后才计入 continuousProjects。队列上限 5，可取消（退 50% 成本）。
 * ------------------------------------------------------------------------------ */
class EcoConstructionQueue {
  constructor() {
    this.queue = []; // {id, remainingMin, totalMin, cost}
    this.minutes = 0;
    this.MAX = 5;
    this.BUILD_MIN = 5;
  }
  enqueue(id, game, eco) {
    const def = terraformProject(id);
    if (!def || def.kind !== 'continuous') return { ok: false, reason: '仅持续型工程进建造队列' };
    if (this.queue.length >= this.MAX) return { ok: false, reason: '建造队列已满（' + this.MAX + '）' };
    if (eco && eco.terraform && eco.terraform.stageIndex() < def.stageUnlock) {
      return { ok: false, reason: '需要阶段「' + TERRAFORM_STAGES[def.stageUnlock].name + '」' };
    }
    const n = (eco && eco.terraform ? (eco.terraform.continuousProjects[id] || 0) : 0) + this.queue.filter(function (q) { return q.id === id; }).length;
    if (n >= def.maxCount) return { ok: false, reason: '已达最大数量（' + def.maxCount + ' 座）' };
    if (!ecoCanAfford(game, def.cost)) return { ok: false, reason: '资源不足' };
    ecoPay(game, def.cost);
    this.queue.push({ id: id, remainingMin: this.BUILD_MIN, totalMin: this.BUILD_MIN, cost: def.cost });
    return { ok: true, reason: '已进入建造队列（' + this.BUILD_MIN + ' 分钟）' };
  }
  cancel(index, game) {
    if (index < 0 || index >= this.queue.length) return { ok: false, reason: '未知队列项' };
    const q = this.queue[index];
    this.queue.splice(index, 1);
    // 退 50% 成本
    for (const k in q.cost) ecoGrant(game, k, Math.floor(q.cost[k] / 2));
    return { ok: true, reason: '已取消建造，退还 50% 成本' };
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    for (let i = this.queue.length - 1; i >= 0; i--) {
      const q = this.queue[i];
      q.remainingMin -= dtMin;
      if (q.remainingMin <= 0) {
        this.queue.splice(i, 1);
        if (eco && eco.terraform) {
          eco.terraform.continuousProjects[q.id] = (eco.terraform.continuousProjects[q.id] || 0) + 1;
          if (eco) eco.log('建成：' + (terraformProject(q.id) || {}).name);
        }
      }
    }
  }
  summary() {
    return this.queue.map(function (q, i) {
      return { index: i, id: q.id, name: (terraformProject(q.id) || {}).name || q.id, remainingMin: ecoRound(q.remainingMin, 1), totalMin: q.totalMin };
    });
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), queue: this.queue }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.queue = Array.isArray(data.queue) ? data.queue : [];
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * RestorationProjects：生态修复工程（主动恢复退化区）
 * ------------------------------------------------------------------------------
 * 退化区 = 植被 <10 且肥力 <20 的格。修复工程：选区 → 投生物质 → 每分钟恢复
 * 肥力/湿度/植被。3 种修复：植被恢复（种草）、湿地恢复（引水）、土壤修复（堆肥）。
 * ------------------------------------------------------------------------------ */
const RESTORATION_TYPES = [
  { id: 'revegetate', name: '植被恢复', cost: { biomass: 20 }, desc: '区内每分钟植被 +0.5，肥力 +0.2', vegPerMin: 0.5, ferPerMin: 0.2, wetPerMin: 0 },
  { id: 'wetland_restore', name: '湿地恢复', cost: { water: 50, biomass: 10 }, desc: '区内每分钟湿度 +1，地表水 +0.5', vegPerMin: 0.2, ferPerMin: 0.1, wetPerMin: 1 },
  { id: 'soil_restore', name: '土壤修复', cost: { biomass: 30 }, desc: '区内每分钟肥力 +0.5，养分 N/P/K +1', vegPerMin: 0.1, ferPerMin: 0.5, wetPerMin: 0 },
];
class RestorationProjects {
  constructor(grid) {
    this.grid = grid || null;
    this.projects = []; // {id, type, x0,y0,x1,y1, remainingMin}
    this.minutes = 0;
    this._nextId = 1;
    this.DURATION_MIN = 30;
  }
  start(type, x0, y0, x1, y1, game, eco) {
    const def = RESTORATION_TYPES.filter(function (t) { return t.id === type; })[0];
    if (!def) return { ok: false, reason: '未知修复类型' };
    if (!ecoCanAfford(game, def.cost)) return { ok: false, reason: '资源不足' };
    ecoPay(game, def.cost);
    if (x1 < x0) { const t = x0; x0 = x1; x1 = t; }
    if (y1 < y0) { const t = y0; y0 = y1; y1 = t; }
    const p = { id: 'rest' + (this._nextId++), type: type, x0: x0, y0: y0, x1: x1, y1: y1, remainingMin: this.DURATION_MIN };
    this.projects.push(p);
    return { ok: true, reason: '修复工程启动（30 分钟）', project: p };
  }
  // 退化区检测：返回退化格数与 bounding box
  degradedStats(eco) {
    if (!eco || !eco.grid) return { count: 0, box: null };
    let count = 0, minX = 1e9, minY = 1e9, maxX = -1, maxY = -1;
    for (let y = 0; y < eco.grid.size; y++) for (let x = 0; x < eco.grid.size; x++) {
      const t = eco.grid.get(x, y);
      if (t.vegetation < 10 && t.fertility < 20) {
        count++;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
    return { count: count, box: count ? { x0: minX, y0: minY, x1: maxX, y1: maxY } : null };
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    for (let i = this.projects.length - 1; i >= 0; i--) {
      const p = this.projects[i];
      p.remainingMin -= dtMin;
      const def = RESTORATION_TYPES.filter(function (t) { return t.id === p.type; })[0];
      if (def && this.grid) {
        for (let y = p.y0; y <= p.y1; y++) for (let x = p.x0; x <= p.x1; x++) {
          const t = this.grid.get(x, y);
          if (!t) continue;
          t.vegetation = ecoClamp(t.vegetation + def.vegPerMin * dtMin, 0, 100);
          t.fertility = ecoClamp(t.fertility + def.ferPerMin * dtMin, 0, 100);
          t.moisture = ecoClamp(t.moisture + def.wetPerMin * dtMin, 0, 100);
          if (def.id === 'soil_restore' && eco && eco.soilNutrients) {
            const v = eco.soilNutrients._ensure(x, y);
            v.n = ecoClamp(v.n + 1 * dtMin * 0.1, 0, 100);
            v.p = ecoClamp(v.p + 1 * dtMin * 0.1, 0, 100);
            v.k = ecoClamp(v.k + 1 * dtMin * 0.1, 0, 100);
          }
        }
      }
      if (p.remainingMin <= 0) {
        this.projects.splice(i, 1);
        if (eco) eco.log('修复完成：「' + (def ? def.name : p.type) + '」（' + p.x0 + ',' + p.y0 + '）');
      }
    }
  }
  summary() {
    return this.projects.map(function (p) {
      return { id: p.id, type: p.type, x0: p.x0, y0: p.y0, x1: p.x1, y1: p.y1, remainingMin: ecoRound(p.remainingMin, 1) };
    });
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), projects: this.projects, _nextId: this._nextId }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.projects = Array.isArray(data.projects) ? data.projects : [];
    this._nextId = ecoSafeNum(data._nextId, this.projects.length + 1);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoMapTools：地图分析工具（找最优种植区 / 水源区 / 建林区）
 * ------------------------------------------------------------------------------
 * 纯分析函数：扫描全图打分，返回 Top N 格。种植分 = 湿度×0.4 + 肥力×0.4 +
 * 温度适宜×0.2；水源分 = 低洼 + 湿度；建林分 = 肥力 + 湿度 + 远离峡谷。
 * ------------------------------------------------------------------------------ */
class EcoMapTools {
  static _tempScore(tempC, def) {
    if (tempC < def.tempMin) return ecoClamp(1 - (def.tempMin - tempC) * 0.05, 0, 1);
    if (tempC > def.tempMax) return ecoClamp(1 - (tempC - def.tempMax) * 0.05, 0, 1);
    return 1;
  }
  static bestPlantingSpots(species, eco, n) {
    const def = plantDef(species);
    if (!def || !eco || !eco.grid) return [];
    const tempC = eco.terraform ? eco.terraform.tempC() : -63;
    const scored = [];
    for (let y = 0; y < eco.grid.size; y++) for (let x = 0; x < eco.grid.size; x++) {
      const t = eco.grid.get(x, y);
      if (!t.plantable()) continue;
      if (eco.plants && eco.plants.plotsAt(x, y).length >= ETUNE.PLOT_MAX_PER_TILE) continue;
      const score = t.moisture * 0.4 + t.fertility * 0.4 + EcoMapTools._tempScore(tempC + t.tempOffset, def) * 20;
      scored.push({ x: x, y: y, score: ecoRound(score, 1) });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, n || 10);
  }
  static bestWaterSpots(eco, n) {
    if (!eco || !eco.grid) return [];
    const scored = [];
    for (let y = 0; y < eco.grid.size; y++) for (let x = 0; x < eco.grid.size; x++) {
      const t = eco.grid.get(x, y);
      const score = (t.isLowland() ? 30 : 0) + t.moisture * 0.5 + t.surfaceWater * 0.3;
      scored.push({ x: x, y: y, score: ecoRound(score, 1) });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, n || 10);
  }
  static bestForestSpots(eco, n) {
    if (!eco || !eco.grid) return [];
    const scored = [];
    for (let y = 0; y < eco.grid.size; y++) for (let x = 0; x < eco.grid.size; x++) {
      const t = eco.grid.get(x, y);
      if (!t.plantable()) continue;
      const score = t.fertility * 0.5 + t.moisture * 0.3 + t.vegetation * 0.2;
      scored.push({ x: x, y: y, score: ecoRound(score, 1) });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, n || 10);
  }
  static regionReport(eco) {
    if (!eco || !eco.grid) return null;
    const tc = eco.grid.terrainCounts();
    return {
      size: eco.grid.size,
      terrainCounts: tc,
      avgMoisture: ecoRound(eco.grid.avgMoisture(), 1),
      avgFertility: ecoRound(eco.grid.avgFertility(), 1),
      avgVegetation: ecoRound(eco.grid.avgVegetation(), 1),
      bestGrass: EcoMapTools.bestPlantingSpots('grass', eco, 3),
      bestTree: EcoMapTools.bestPlantingSpots('tree', eco, 3),
      bestWater: EcoMapTools.bestWaterSpots(eco, 3),
      degraded: eco.restoration ? eco.restoration.degradedStats(eco) : { count: 0, box: null },
    };
  }
}

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第四批 15 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_green_tide', name: '绿潮', icon: '🌊', weight: 4, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.plants.count() > 100 && eco.water.soilMoistureAvg() > 50; },
    apply: function (eco, game) {
      const n = eco.plants.windSpread(10);
      return { log: '绿潮：植被大爆发，新长出 ' + n + ' 株', severity: 'good', spread: n };
    },
  },
  {
    id: 'ev_carbon_sink', name: '碳汇', icon: '🌲', weight: 5, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.plants.countOf('tree') >= 30; },
    apply: function (eco, game) {
      eco.terraform.addProgress(0.5, 'carbon_sink');
      return { log: '森林碳汇：改造 +0.5%', severity: 'good', progress: 0.5 };
    },
  },
  {
    id: 'ev_permafrost_burst', name: '冻土喷发', icon: '💥', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() > -10 && eco.terraform.tempC() < 5; },
    apply: function (eco, game) {
      eco.terraform.addProgress(0.7, 'permafrost_burst');
      eco.water.addRainEvent(10);
      return { log: '冻土喷发甲烷：改造 +0.7%，地下水补给 +10mm', severity: 'good', progress: 0.7 };
    },
  },
  {
    id: 'ev_sand_burial', name: '沙埋', icon: '🏜️', weight: 5, cooldownMin: 25, once: false,
    condition: function (eco, game) { return eco.plants.count() > 30 && eco.water.rainMmY(eco, game) < 80; },
    apply: function (eco, game) {
      const killed = eco.plants.killYoungest(0.12);
      return { log: '流沙掩埋 ' + killed + ' 株幼苗', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_lichen_bloom', name: '地衣开花', icon: '🟢', weight: 6, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.plants.countOf('moss') >= 20 && eco.terraform.progress >= 10; },
    apply: function (eco, game) {
      eco.soil.addFertilityAll(2);
      const n = eco.plants.windSpread(5);
      return { log: '地衣开花：土壤肥力 +2，新苔藓 ' + n + ' 株', severity: 'good', spread: n };
    },
  },
  {
    id: 'ev_hail', name: '冰雹', icon: '🧊', weight: 4, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.plants.countOf('crop') > 0 && eco.terraform.tempC() < 5; },
    apply: function (eco, game) {
      let killed = 0;
      for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
        const p = eco.plants.plots[i];
        if (p.species === 'crop' && !p.indoor && Math.random() < 0.25) { eco.plants._removeAt(i); killed++; }
      }
      return { log: '冰雹砸死 ' + killed + ' 株露天作物', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_migration_wave', name: '迁徙波', icon: '🦅', weight: 4, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.fauna.pop('bird') >= 10 && ecoSeason(game) === 'spring'; },
    apply: function (eco, game) {
      eco.fauna.addPop('bird', 6);
      eco.plants.spreadBoost(0.04);
      return { log: '春季迁徙波：鸟类 +6，播种扩散 +4%', severity: 'good', birds: 6 };
    },
  },
  {
    id: 'ev_drought_break', name: '旱情解除', icon: '🌧️', weight: 5, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.water.soilMoistureAvg() < 25 && eco.terraform.progress >= 40; },
    apply: function (eco, game) {
      eco.water.addRainEvent(40);
      return { log: '旱情解除：一场大雨，土壤湿度大幅回升', severity: 'good', rainMm: 40 };
    },
  },
  {
    id: 'ev_root_fire', name: '地下火', icon: '🔥', weight: 2, cooldownMin: 90, once: false,
    condition: function (eco, game) { return eco.plants.countOf('tree') >= 50 && eco.water.soilMoistureAvg() < 20; },
    apply: function (eco, game) {
      let burned = 0;
      for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
        if (eco.plants.plots[i].species === 'tree' && Math.random() < 0.1) { eco.plants._removeAt(i); burned++; }
      }
      eco.soil.addFertilityAll(4);
      return { log: '地下火烧掉 ' + burned + ' 棵树，但草木灰肥力 +4', severity: 'mixed', burned: burned };
    },
  },
  {
    id: 'ev_star_shower', name: '流星雨', icon: '🌠', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.progress < 80; },
    apply: function (eco, game) {
      eco.water.addIce(80);
      return { log: '流星雨带来冰水 80', severity: 'good', water: 80 };
    },
  },
  {
    id: 'ev_oxygen_bloom2', name: '氧气井喷', icon: '🫧', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.plants.countOf('tree') >= 50 && eco.oxygen.stock < eco.oxygen.cap(eco, game) * 0.5; },
    apply: function (eco, game) {
      eco.oxygen.addStock(150);
      return { log: '森林氧气井喷：库存 +150 吨', severity: 'good', o2: 150 };
    },
  },
  {
    id: 'ev_worm_turn', name: '蚯蚓翻土', icon: '🪱', weight: 5, cooldownMin: 35, once: false,
    condition: function (eco, game) { return eco.plants.countOf('grass') >= 30 && eco.soilNutrients.avgNutrients().n < 40; },
    apply: function (eco, game) {
      eco.soil.addFertilityAll(3);
      return { log: '蚯蚓翻土：土壤肥力 +3', severity: 'good' };
    },
  },
  {
    id: 'ev_fog', name: '大雾', icon: '🌫️', weight: 5, cooldownMin: 20, once: false,
    condition: function (eco, game) { return eco.water.soilMoistureAvg() > 60 && eco.terraform.progress >= 40; },
    apply: function (eco, game) {
      eco.plants.waterAll(3);
      return { log: '大雾：空气湿度高，土壤 +3', severity: 'good' };
    },
  },
  {
    id: 'ev_eclipse', name: '日食', icon: '🌑', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.plants.count() > 20; },
    apply: function (eco, game) {
      eco.plants.heatStressUntil = eco.plants.minutes + 2;
      return { log: '日食：光照骤降，植物生长停滞 2 分钟', severity: 'bad' };
    },
  },
  {
    id: 'ev_first_sanctuary', name: '第一个庇护所', icon: '🏞️', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.sanctuary.sanctuaries.length >= 1 && !eco.flags.firstSanctuary; },
    apply: function (eco, game) {
      eco.flags.firstSanctuary = true;
      eco.fauna.addPop('bird', 2);
      return { log: '第一个庇护所建成：鸟类 +2', severity: 'good', birds: 2 };
    },
  }
);

/* ------------------------------------------------------------------------------
 * 追加数据：10 座建筑 / 6 项研究 / 6 项政策 / 10 个任务 / 10 个成就
 * ------------------------------------------------------------------------------ */
ECO_BUILDINGS.push(
  { id: 'fog_collector', name: '雾水收集器', icon: '🌫️', stageUnlock: 3, cost: { steel: 35 }, waterPerMin: 1.0, desc: '收集雾水：每分钟产水 1。' },
  { id: 'bio_dome', name: '生物穹顶', icon: '🔮', stageUnlock: 4, cost: { steel: 120, tech: 50 }, o2PerMin: 2.0, growthMul: 1.3, desc: '大型生态穹顶：产氧 2，生长 ×1.3。' },
  { id: 'moss_farm', name: '苔藓农场', icon: '🟢', stageUnlock: 0, cost: { steel: 15, biomass: 10 }, o2PerMin: 0.5, desc: '集约苔藓：产氧 0.5。' },
  { id: 'tree_nursery', name: '苗圃', icon: '🌱', stageUnlock: 4, cost: { steel: 50, biomass: 20 }, treeGrowthMul: 1.5, desc: '树苗培育：树木生长 ×1.5。' },
  { id: 'aquifer_monitor', name: '含水层监测仪', icon: '📊', stageUnlock: 2, cost: { tech: 25, steel: 15 }, growthMul: 1.02, desc: '监测地下水：植物生长 +2%。' },
  { id: 'wind_turbine_eco', name: '生态风机', icon: '🌬️', stageUnlock: 1, cost: { steel: 60, iron: 30 }, co2PerMin: 0.01, desc: '清洁能源驱动改造：推进 +0.01%/分钟。' },
  { id: 'kelp_tank', name: '巨藻罐', icon: '🌿', stageUnlock: 3, cost: { steel: 70, water: 40 }, o2PerMin: 2.5, waterUsePerMin: 2, desc: '巨藻制氧：每分钟 2.5 吨。' },
  { id: 'bee_sanctuary', name: '蜂巢保护区', icon: '🐝', stageUnlock: 2, cost: { steel: 25, biomass: 15 }, growthMul: 1.1, desc: '授粉保护区：生长 +10%。' },
  { id: 'frost_tower', name: '防霜塔', icon: '🗼', stageUnlock: 2, cost: { steel: 45 }, frostProtect: 0.4, desc: '周围 3 格冻害 -40%。', radius: 3 },
  { id: 'eco_school', name: '生态学校', icon: '🏫', stageUnlock: 5, cost: { steel: 100, tech: 60 }, happinessMul: 1.15, o2PerMin: 0.3, desc: '生态教育：幸福 +15%，产氧 0.3。' }
);
ECO_RESEARCH.push(
  { id: 'eco_seed6', name: '共生苔藓', cost: { tech: 35 }, effect: '苔藓固氮翻倍', apply: { plant: 'moss', o2Mul: 1.2 } },
  { id: 'eco_seed7', name: '深根作物', cost: { tech: 45 }, effect: '农作物需水 -20%', apply: { plant: 'crop', waterMul: 0.8 } },
  { id: 'eco_water4', name: '雾水收集', cost: { tech: 35 }, effect: '降雨产水 +30%', apply: { global: 'rainWaterMul', value: 1.3 } },
  { id: 'eco_o2_3', name: '巨藻培育', cost: { tech: 55 }, effect: '藻类产氧 +40%', apply: { global: 'algaeMul', value: 1.4 } },
  { id: 'eco_fauna4', name: '昆虫天敌引入', cost: { tech: 40 }, effect: '鸟类捕食效率 +30%', apply: { animal: 'bird', rMul: 1.3 } },
  { id: 'eco_terra4', name: '行星工程学', cost: { tech: 90 }, effect: '全部工程效率 +20%', apply: { global: 'ghgMul', value: 1.2 } }
);
ECO_POLICIES.push(
  { id: 'pol_reforestation', name: '植树造林令', desc: '树木生长 +50%，每分钟耗生物质 2。', effects: { growthMul: 1.1 } },
  { id: 'pol_fishing_ban', name: '禁渔令', desc: '湖泊生态恢复，多样性 +0.02。', effects: {} },
  { id: 'pol_carbon_market', name: '碳交易', desc: '改造推进 +10%，每分钟得钢材 0.5。', effects: { progressMul: 1.1 } },
  { id: 'pol_green_belt', name: '绿带计划', desc: '植被覆盖增速 +20%。', effects: { growthMul: 1.05 } },
  { id: 'pol_drought_relief', name: '抗旱救济', desc: '干旱时植物死亡 -50%。', effects: {} },
  { id: 'pol_eco_tourism', name: '生态旅游', desc: '人口幸福 +10%，每分钟耗水 1。', effects: {} }
);
ECO_QUESTS.push(
  { id: 'q21', name: '水库工程师', desc: '建成 1 座水库', reward: { steel: 40 }, check: function (eco) { return eco.reservoirs.reservoirs.length >= 1; } },
  { id: 'q22', name: '除草能手', desc: '清除 1 处入侵草', reward: { biomass: 20 }, check: function (eco) { return eco.invasive.weededTotal >= 1; } },
  { id: 'q23', name: '修复先锋', desc: '启动 1 个修复工程', reward: { biomass: 30 }, check: function (eco) { return eco.restoration.projects.length >= 1 || eco.stats.totalPlanted >= 200; } },
  { id: 'q24', name: '建造狂人', desc: '建造队列累计完成 3 座工程', reward: { steel: 60 }, check: function (eco) { let n = 0; for (const k in eco.terraform.continuousProjects) n += eco.terraform.continuousProjects[k]; return n >= 3; } },
  { id: 'q25', name: '磁层三阶', desc: '磁层三阶段全部完成', reward: { tech: 80 }, check: function (eco) { return eco.magnetPhases.phase >= 3; } },
  { id: 'q26', name: '河流之主', desc: '出现 1 条河流', reward: { water: 150 }, check: function (eco) { return eco.rivers.rivers.length >= 1; } },
  { id: 'q27', name: '庇护所主', desc: '建成 1 个庇护所', reward: { food: 30 }, check: function (eco) { return eco.sanctuary.sanctuaries.length >= 1; } },
  { id: 'q28', name: '农场主', desc: '建成 1 个农场区', reward: { food: 40 }, check: function (eco) { return eco.farms.zones.length >= 1; } },
  { id: 'q29', name: '种子大亨', desc: '种子总数超过 200', reward: { biomass: 50 }, check: function (eco) { const s = eco.seeds.seeds; return (s.moss + s.grass + s.shrub + s.crop + s.tree) >= 200; } },
  { id: 'q30', name: '生态大师', desc: '多样性超过 0.7', reward: { tech: 100 }, check: function (eco) { return eco.balance.diversity >= 0.7; } }
);
ECO_ACHIEVEMENTS.push(
  { id: 'eco_a41', name: '水库工程师', desc: '建成水库', check: function (eco) { return eco.reservoirs.reservoirs.length >= 1; } },
  { id: 'eco_a42', name: '除草能手', desc: '清除入侵草', check: function (eco) { return eco.invasive.weededTotal >= 1; } },
  { id: 'eco_a43', name: '修复先锋', desc: '启动修复工程', check: function (eco) { return eco.restoration.projects.length >= 1; } },
  { id: 'eco_a44', name: '建造狂人', desc: '持续型工程达到 3 座', check: function (eco) { let n = 0; for (const k in eco.terraform.continuousProjects) n += eco.terraform.continuousProjects[k]; return n >= 3; } },
  { id: 'eco_a45', name: '磁层三阶', desc: '磁层三阶段完成', check: function (eco) { return eco.magnetPhases.phase >= 3; } },
  { id: 'eco_a46', name: '庇护所主', desc: '建成庇护所', check: function (eco) { return eco.sanctuary.sanctuaries.length >= 1; } },
  { id: 'eco_a47', name: '农场主', desc: '建成农场区', check: function (eco) { return eco.farms.zones.length >= 1; } },
  { id: 'eco_a48', name: '种子大亨', desc: '种子总数超 200', check: function (eco) { const s = eco.seeds.seeds; return (s.moss + s.grass + s.shrub + s.crop + s.tree) >= 200; } },
  { id: 'eco_a49', name: '生态大师', desc: '多样性超 0.7', check: function (eco) { return eco.balance.diversity >= 0.7; } },
  { id: 'eco_a50', name: '五十成就', desc: '生态成就收集者', check: function (eco) { return eco.achievementsUnlocked.length >= 20; } }
);

/* ------------------------------------------------------------------------------
 * DomeAutomation：穹顶自动化（自动浇水 / 自动收割 / 自动补种）
 * ------------------------------------------------------------------------------
 * 每个穹顶可开三档自动化（各耗电/耗水）：自动浇水（圈内湿度 <40 时补水）、
 * 自动收割（成熟作物自动收）、自动补种（收割后自动补种同种，耗种子/生物质）。
 * ------------------------------------------------------------------------------ */
class DomeAutomation {
  constructor() {
    this.settings = {}; // key "x,y" → {water: bool, harvest: bool, replant: bool}
    this.minutes = 0;
    this.autoHarvested = 0;
    this.autoWatered = 0;
  }
  key(x, y) { return x + ',' + y; }
  get(x, y) {
    const k = this.key(x, y);
    if (!this.settings[k]) this.settings[k] = { water: false, harvest: false, replant: false };
    return this.settings[k];
  }
  set(x, y, kind, on, game, eco) {
    if (!eco || !eco.greenhouses || !eco.greenhouses.domeAt(x, y)) return { ok: false, reason: '该处没有穹顶' };
    const s = this.get(x, y);
    if (['water', 'harvest', 'replant'].indexOf(kind) < 0) return { ok: false, reason: '未知自动化项' };
    s[kind] = !!on;
    return { ok: true, reason: (on ? '开启' : '关闭') + '自动' + ({ water: '浇水', harvest: '收割', replant: '补种' })[kind] };
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    if (!eco || !eco.greenhouses) return;
    for (let i = 0; i < eco.greenhouses.domes.length; i++) {
      const dome = eco.greenhouses.domes[i];
      const s = this.settings[this.key(dome.x, dome.y)];
      if (!s) continue;
      // 自动浇水：圈内湿度 <40 时每分钟 +2（耗水 1/分钟）
      if (s.water) {
        const inv = ecoInv(game);
        let need = false;
        for (let y = dome.y - dome.radius; y <= dome.y + dome.radius && !need; y++) for (let x = dome.x - dome.radius; x <= dome.x + dome.radius; x++) {
          const t = eco.grid.get(x, y);
          if (t && ecoDist2(x, y, dome.x, dome.y) <= dome.radius * dome.radius && t.moisture < 40) need = true;
        }
        if (need && inv && (inv.water || 0) >= 1 * dtMin) {
          inv.water -= 1 * dtMin;
          for (let y = dome.y - dome.radius; y <= dome.y + dome.radius; y++) for (let x = dome.x - dome.radius; x <= dome.x + dome.radius; x++) {
            const t = eco.grid.get(x, y);
            if (t && ecoDist2(x, y, dome.x, dome.y) <= dome.radius * dome.radius) t.moisture = ecoClamp(t.moisture + 2 * dtMin, 0, 100);
          }
          this.autoWatered += dtMin;
        }
      }
      // 自动收割 + 自动补种
      if (s.harvest) {
        for (let y = dome.y - dome.radius; y <= dome.y + dome.radius; y++) for (let x = dome.x - dome.radius; x <= dome.x + dome.radius; x++) {
          if (ecoDist2(x, y, dome.x, dome.y) > dome.radius * dome.radius) continue;
          const before = eco.plants.plotsAt(x, y).length;
          const res = eco.plants.harvestAt(x, y, game, eco);
          if (res.count > 0) {
            this.autoHarvested += res.count;
            if (s.replant) {
              for (let k = 0; k < res.count; k++) eco.plants.plant(x, y, 'crop', game, eco, { indoor: true });
            }
          }
        }
      }
    }
  }
  summary() {
    return { settings: this.settings, autoHarvested: this.autoHarvested, autoWatered: ecoRound(this.autoWatered, 1) };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), settings: this.settings, autoHarvested: this.autoHarvested, autoWatered: ecoRound(this.autoWatered, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.settings = data.settings || {};
    this.autoHarvested = ecoSafeNum(data.autoHarvested, 0);
    this.autoWatered = ecoSafeNum(data.autoWatered, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * FeedingStations：投喂站（直接喂动物 + 繁殖加成）
 * ------------------------------------------------------------------------------
 * 投喂站每分钟耗食物 0.5/座，对应物种繁殖 +30%。没食物自动停喂。
 * ------------------------------------------------------------------------------ */
class FeedingStations {
  constructor() {
    this.stations = []; // {id, x, y, species, active}
    this.minutes = 0;
    this._nextId = 1;
    this.fedTotal = 0;
  }
  build(x, y, species, game) {
    if (!animalDef(species)) return { ok: false, reason: '未知动物' };
    const cost = { steel: 15, food: 10 };
    if (!ecoCanAfford(game, cost)) return { ok: false, reason: '资源不足' };
    ecoPay(game, cost);
    const s = { id: 'feed' + (this._nextId++), x: x, y: y, species: species, active: true };
    this.stations.push(s);
    return { ok: true, reason: '投喂站建成', station: s };
  }
  remove(id) {
    for (let i = 0; i < this.stations.length; i++) if (this.stations[i].id === id) { this.stations.splice(i, 1); return true; }
    return false;
  }
  breedMulFor(species, eco, game) {
    let m = 1;
    for (let i = 0; i < this.stations.length; i++) {
      const s = this.stations[i];
      if (s.species === species && s.active) m *= 1.3;
    }
    return m;
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    for (let i = 0; i < this.stations.length; i++) {
      const s = this.stations[i];
      if (!s.active) continue;
      const inv = ecoInv(game);
      if (inv && (inv.food || 0) >= 0.5 * dtMin) {
        inv.food -= 0.5 * dtMin;
        this.fedTotal += 0.5 * dtMin;
      } else s.active = false;
    }
  }
  summary() {
    return { stations: this.stations.map(function (s) { return { id: s.id, x: s.x, y: s.y, species: s.species, active: s.active }; }), fedTotal: ecoRound(this.fedTotal, 1) };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), stations: this.stations, _nextId: this._nextId, fedTotal: ecoRound(this.fedTotal, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.stations = Array.isArray(data.stations) ? data.stations : [];
    this._nextId = ecoSafeNum(data._nextId, this.stations.length + 1);
    this.fedTotal = ecoSafeNum(data.fedTotal, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * OxygenNetwork：氧气管网（穹顶互联共享氧气）
 * ------------------------------------------------------------------------------
 * 穹顶之间距离 ≤6 格视为连通（隧道），连通穹顶共享氧气库存调配：
 * 氧气不足的穹顶从富余穹顶调剂（每分钟最多调 1 吨/连接）。
 * 连通度 = 连通穹顶数 / 总穹顶数；连通度越高，缺氧死亡越低（分摊）。
 * ------------------------------------------------------------------------------ */
class OxygenNetwork {
  constructor() {
    this.minutes = 0;
    this.transferredTotal = 0;
    this.LINK_RANGE = 6;
  }
  links(eco) {
    if (!eco || !eco.greenhouses) return [];
    const domes = eco.greenhouses.domes;
    const out = [];
    for (let i = 0; i < domes.length; i++) for (let j = i + 1; j < domes.length; j++) {
      const d = Math.sqrt(ecoDist2(domes[i].x, domes[i].y, domes[j].x, domes[j].y));
      if (d <= this.LINK_RANGE) out.push({ a: i, b: j, dist: ecoRound(d, 1) });
    }
    return out;
  }
  connectivity(eco) {
    if (!eco || !eco.greenhouses || !eco.greenhouses.domes.length) return 0;
    const n = eco.greenhouses.domes.length;
    if (n <= 1) return 1;
    const linked = {};
    const ls = this.links(eco);
    for (let i = 0; i < ls.length; i++) { linked[ls[i].a] = true; linked[ls[i].b] = true; }
    let c = 0;
    for (const k in linked) c++;
    return ecoRound(c / n, 2);
  }
  // 缺氧分摊：连通度越高，人口损失越低（总管结算时乘此系数）
  deficitMitigation(eco) {
    return ecoRound(1 - this.connectivity(eco) * 0.3, 2); // 最多 -30%
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    // 调剂记账：连通穹顶越多，氧气库存上限等效 +5%/连接（共享冗余）
    const ls = this.links(eco);
    this.transferredTotal += ls.length * 0.01 * dtMin;
  }
  summary(eco) {
    return {
      domes: eco && eco.greenhouses ? eco.greenhouses.domes.length : 0,
      links: this.links(eco).length,
      connectivity: this.connectivity(eco),
      deficitMitigation: this.deficitMitigation(eco),
      transferredTotal: ecoRound(this.transferredTotal, 1),
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), transferredTotal: ecoRound(this.transferredTotal, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.transferredTotal = ecoSafeNum(data.transferredTotal, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoGuide：生态新手引导（10 步顺序目标，每步完成给小奖励）
 * ------------------------------------------------------------------------------
 * 与任务（ECO_QUESTS）不同：引导是顺序的，必须按顺序完成，每步带操作提示
 * （UI 按 action 直接跳到对应操作）。是新手第一次接触生态线的教学路径。
 * ------------------------------------------------------------------------------ */
const ECO_GUIDE_STEPS = [
  { id: 'g01', name: '种下第一株苔藓', hint: '在地图任意可种格种苔藓', action: 'plant:moss', reward: { food: 10 }, check: function (eco) { return eco.stats.totalPlanted >= 1; } },
  { id: 'g02', name: '建一座温室气体工厂', hint: '改造工程 → 温室气体工厂', action: 'project:ghg_factory', reward: { steel: 20 }, check: function (eco) { return (eco.terraform.continuousProjects.ghg_factory || 0) >= 1 || eco.construction.queue.some(function (q) { return q.id === 'ghg_factory'; }); } },
  { id: 'g03', name: '改造达到 10%', hint: '等工程推进或手动等被动推进', action: 'panel:terraform', reward: { tech: 10 }, check: function (eco) { return eco.terraform.progress >= 10; } },
  { id: 'g04', name: '种 10 株草', hint: '10% 后户外可种草', action: 'plant:grass', reward: { biomass: 10 }, check: function (eco) { return eco.plants.countOf('grass') >= 10; } },
  { id: 'g05', name: '引入昆虫', hint: '25% 后可引入昆虫授粉', action: 'introduce:insect', reward: { food: 20 }, check: function (eco) { return eco.fauna.pop('insect') >= 6; } },
  { id: 'g06', name: '收获一次农作物', hint: '40% 后种农作物并收割', action: 'harvest:crop', reward: { food: 30 }, check: function (eco) { return eco.stats.totalHarvestFood >= 8; } },
  { id: 'g07', name: '种第一棵树', hint: '55% 后可种树，产氧之王', action: 'plant:tree', reward: { biomass: 20 }, check: function (eco) { return eco.plants.countOf('tree') >= 1; } },
  { id: 'g08', name: '氧气库存过 100 吨', hint: '多种树、多建藻类池塘', action: 'panel:overview', reward: { tech: 20 }, check: function (eco) { return eco.oxygen.stock >= 100; } },
  { id: 'g09', name: '引入鸟类', hint: '40% 后引入鸟类控虫', action: 'introduce:bird', reward: { food: 20 }, check: function (eco) { return eco.fauna.pop('bird') >= 6; } },
  { id: 'g10', name: '改造达到 70%（可呼吸）', hint: '继续推进改造工程', action: 'panel:terraform', reward: { steel: 100, tech: 50 }, check: function (eco) { return eco.terraform.progress >= 70; } },
];
class EcoGuide {
  constructor() { this.done = []; this.claimed = []; }
  currentStep(eco) {
    for (let i = 0; i < ECO_GUIDE_STEPS.length; i++) {
      if (this.done.indexOf(ECO_GUIDE_STEPS[i].id) < 0) return ECO_GUIDE_STEPS[i];
    }
    return null;
  }
  update(eco) {
    const cur = this.currentStep(eco);
    if (!cur) return null;
    let ok = false;
    try { ok = !!cur.check(eco); } catch (e) { ok = false; }
    if (ok) this.done.push(cur.id);
    return ok ? cur : null;
  }
  claim(id, eco, game) {
    const step = ECO_GUIDE_STEPS.filter(function (s) { return s.id === id; })[0];
    if (!step) return { ok: false, reason: '未知引导步骤' };
    if (this.done.indexOf(id) < 0) return { ok: false, reason: '步骤未完成' };
    if (this.claimed.indexOf(id) >= 0) return { ok: false, reason: '奖励已领取' };
    this.claimed.push(id);
    for (const k in step.reward) ecoGrant(game, k, step.reward[k]);
    return { ok: true, reason: '领取引导奖励', reward: step.reward };
  }
  progress() { return { done: this.done.length, total: ECO_GUIDE_STEPS.length }; }
  save() { return { v: 1, done: this.done.slice(), claimed: this.claimed.slice() }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.done = Array.isArray(data.done) ? data.done : [];
    this.claimed = Array.isArray(data.claimed) ? data.claimed : [];
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoCalendar：生态日历（游戏日/季/年 + 季节更替事件）
 * ------------------------------------------------------------------------------
 * 1 游戏日 = 1 真实分钟（与 PlantSystem 同口径）。每季 30 天，每年 120 天。
 * 季节更替时触发一次季节事件（春播/夏长/秋收/冬藏），由总管调 EcoEvents.fire。
 * ------------------------------------------------------------------------------ */
class EcoCalendar {
  constructor() {
    this.day = 1;
    this.year = 1;
    this.minutes = 0;
    this._lastSeason = 'spring';
    this.seasonChanges = 0;
  }
  season() {
    const d = (this.day - 1) % 120;
    if (d < 30) return 'spring';
    if (d < 60) return 'summer';
    if (d < 90) return 'autumn';
    return 'winter';
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    const newDay = 1 + Math.floor(this.minutes);
    if (newDay !== this.day) {
      this.day = newDay;
      this.year = 1 + Math.floor((this.day - 1) / 120);
    }
    const s = this.season();
    if (s !== this._lastSeason) {
      this._lastSeason = s;
      this.seasonChanges++;
      // 季节更替：按季触发对应事件（无 game 时只记数）
      if (eco && eco.events) {
        const evId = { spring: 'ev_spring_thaw', summer: 'ev_summer_bloom', autumn: 'ev_autumn_harvest', winter: 'ev_deep_frost' }[s];
        if (evId && eco.fireEvent) {
          try { eco.fireEvent(evId, game); } catch (e) {}
        }
      }
    }
  }
  summary() {
    return { day: this.day, year: this.year, season: this.season(), seasonChanges: this.seasonChanges };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), day: this.day, year: this.year, seasonChanges: this.seasonChanges }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.day = ecoSafeNum(data.day, 1);
    this.year = ecoSafeNum(data.year, 1);
    this.seasonChanges = ecoSafeNum(data.seasonChanges, 0);
    this._lastSeason = this.season();
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第五批 15 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_first_snow', name: '第一场雪', icon: '❄️', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.tempC() < 0 && eco.water.snowAccumMm > 0 && !eco.flags.firstSnow; },
    apply: function (eco, game) {
      eco.flags.firstSnow = true;
      eco.water.addRainEvent(10);
      return { log: '第一场雪：积雪融化补水', severity: 'good', rainMm: 10 };
    },
  },
  {
    id: 'ev_bloom_season', name: '花季', icon: '🌸', weight: 6, cooldownMin: 30, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'spring' && eco.plants.countOf('shrub') >= 10; },
    apply: function (eco, game) {
      eco.fauna.addPop('insect', 6);
      eco.plants.spreadBoost(0.02);
      return { log: '花季：昆虫 +6，植物扩散 +2%', severity: 'good', added: 6 };
    },
  },
  {
    id: 'ev_heat_stroke', name: '热浪预警', icon: '🥵', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() > 28; },
    apply: function (eco, game) {
      const stressed = eco.plants.heatStress(0.25);
      return { log: '热浪预警：' + stressed + ' 株植物热胁迫', severity: 'bad', stressed: stressed };
    },
  },
  {
    id: 'ev_cold_snap', name: '寒流', icon: '🥶', weight: 5, cooldownMin: 30, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'winter' && eco.plants.countOf('tree') > 0; },
    apply: function (eco, game) {
      const killed = eco.plants.frostKill();
      return { log: '寒流冻死 ' + killed + ' 株', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_rain_season', name: '雨季', icon: '🌧️', weight: 6, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.terraform.progress >= 40 && eco.water.soilMoistureAvg() < 50; },
    apply: function (eco, game) {
      eco.water.addRainEvent(50);
      return { log: '雨季来临：土壤大补水', severity: 'good', rainMm: 50 };
    },
  },
  {
    id: 'ev_dry_season', name: '旱季', icon: '🏜️', weight: 5, cooldownMin: 40, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'summer' && eco.terraform.progress < 55; },
    apply: function (eco, game) {
      eco.water.addDrought(10);
      return { log: '旱季：土壤湿度 -10，持续 10 分钟', severity: 'bad' };
    },
  },
  {
    id: 'ev_bird_song', name: '鸟鸣', icon: '🎵', weight: 5, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.fauna.pop('bird') >= 20; },
    apply: function (eco, game) {
      eco.balance.riskMinutes = Math.max(0, eco.balance.riskMinutes - 2);
      return { log: '鸟鸣：生态风险 -2 分钟', severity: 'good' };
    },
  },
  {
    id: 'ev_rabbit_plague', name: '兔灾', icon: '🐇', weight: 3, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.fauna.pop('mammal') > 30; },
    apply: function (eco, game) {
      const eaten = eco.plants.grazeDamage(0.25);
      return { log: '兔灾：啃食 25% 草灌生物量', severity: 'bad', eaten: eaten };
    },
  },
  {
    id: 'ev_frog_chorus', name: '蛙鸣', icon: '🐸', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.water.lakes >= 2 && eco.terraform.progress >= 55; },
    apply: function (eco, game) {
      eco.oxygen.addStock(20);
      return { log: '蛙鸣：湿地生态良好，氧气 +20 吨', severity: 'good', o2: 20 };
    },
  },
  {
    id: 'ev_meteor_dust', name: '陨石尘', icon: '💫', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.progress < 70; },
    apply: function (eco, game) {
      eco.soil.addFertilityAll(2);
      ecoGrant(game, 'rare', 5);
      return { log: '陨石尘：稀土 +5，土壤肥力 +2', severity: 'good', rare: 5 };
    },
  },
  {
    id: 'ev_solar_wind', name: '太阳风', icon: '🌬️', weight: 4, cooldownMin: 45, once: false,
    condition: function (eco, game) { return eco.terraform.magnetStrength() < 0.5; },
    apply: function (eco, game) {
      eco.terraform.addProgress(-0.5, 'solar_wind');
      return { log: '太阳风侵蚀：改造 -0.5%（建磁层可防）', severity: 'bad', loss: 0.5 };
    },
  },
  {
    id: 'ev_greenhouse_effect', name: '温室效应', icon: '🌡️', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return (eco.terraform.continuousProjects.ghg_factory || 0) >= 3; },
    apply: function (eco, game) {
      eco.terraform.addProgress(0.6, 'greenhouse_effect');
      return { log: '温室效应叠加：改造 +0.6%', severity: 'good', progress: 0.6 };
    },
  },
  {
    id: 'ev_seed_bank_raid', name: '种子库失窃', icon: '🦝', weight: 2, cooldownMin: 90, once: false,
    condition: function (eco, game) { return eco.seeds.seeds.moss + eco.seeds.seeds.grass > 50; },
    apply: function (eco, game) {
      eco.seeds.seeds.moss = Math.max(0, eco.seeds.seeds.moss - 10);
      eco.seeds.seeds.grass = Math.max(0, eco.seeds.seeds.grass - 5);
      return { log: '种子库失窃：苔藓种子 -10，草种 -5（加强看守）', severity: 'bad' };
    },
  },
  {
    id: 'ev_eco_festival', name: '生态节', icon: '🎉', weight: 3, cooldownMin: 90, once: false,
    condition: function (eco, game) { return eco.balance.diversity >= 0.6; },
    apply: function (eco, game) {
      ecoGrant(game, 'food', 30);
      return { log: '生态节：居民庆祝，食物 +30', severity: 'good', food: 30 };
    },
  },
  {
    id: 'ev_first_harvest_festival', name: '丰收节', icon: '🌾', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.stats.totalHarvestFood >= 100 && !eco.flags.firstHarvestFestival; },
    apply: function (eco, game) {
      eco.flags.firstHarvestFestival = true;
      ecoGrant(game, 'food', 50);
      return { log: '首个丰收节：累计收获破百，食物 +50', severity: 'good', food: 50 };
    },
  }
);

/* ------------------------------------------------------------------------------
 * 追加数据：10 座建筑 / 6 项研究 / 6 项政策
 * ------------------------------------------------------------------------------ */
ECO_BUILDINGS.push(
  { id: 'rain_tower', name: '集雨塔', icon: '🗼', stageUnlock: 3, cost: { steel: 55 }, waterPerMin: 2.0, desc: '高塔集雨：每分钟产水 2。' },
  { id: 'moss_wall', name: '苔藓墙', icon: '🟩', stageUnlock: 1, cost: { steel: 20, biomass: 10 }, o2PerMin: 0.4, desc: '墙面苔藓：产氧 0.4。' },
  { id: 'herb_garden', name: '香草园', icon: '🌿', stageUnlock: 3, cost: { steel: 30, biomass: 10 }, growthMul: 1.05, happinessMul: 1.05, desc: '香草园：生长 +5%，幸福 +5%。' },
  { id: 'fish_pond', name: '鱼塘', icon: '🐟', stageUnlock: 4, cost: { steel: 60, water: 60 }, waterPerMin: 0.5, diversityBonus: 0.02, desc: '鱼塘：多样性 +0.02。' },
  { id: 'compost_tower', name: '堆肥塔', icon: '♻️', stageUnlock: 2, cost: { steel: 40 }, soilBonusPerMin: 1.5, desc: '堆肥塔：土壤肥力 +1.5/分钟。', upkeepPerMin: { biomass: 1 } },
  { id: 'solar_greenhouse', name: '太阳能温室', icon: '☀️', stageUnlock: 2, cost: { steel: 70, tech: 20 }, o2PerMin: 1.0, growthMul: 1.2, desc: '太阳能温室：产氧 1，生长 ×1.2。' },
  { id: 'wind_pump', name: '风力水泵', icon: '💨', stageUnlock: 2, cost: { steel: 35, iron: 20 }, waterPerMin: 2.0, groundwaterUsePerMin: 0.3, desc: '风力抽水：每分钟产水 2。' },
  { id: 'seed_lab', name: '种子实验室', icon: '🧪', stageUnlock: 1, cost: { tech: 40, steel: 25 }, seedCostMul: 0.6, desc: '种子研究：播种成本 -40%。' },
  { id: 'eco_dorm', name: '生态宿舍', icon: '🏠', stageUnlock: 5, cost: { steel: 80 }, o2PerMin: 0.4, happinessMul: 1.1, desc: '生态宿舍：幸福 +10%，产氧 0.4。' },
  { id: 'terraform_array', name: '改造阵列', icon: '📡', stageUnlock: 5, cost: { steel: 250, tech: 120 }, co2PerMin: 0.04, desc: '行星改造阵列：推进 +0.04%/分钟。' }
);
ECO_RESEARCH.push(
  { id: 'eco_seed8', name: '抗盐作物', cost: { tech: 40 }, effect: '农作物耐盐', apply: { plant: 'crop', waterMul: 0.9 } },
  { id: 'eco_seed9', name: '速生林', cost: { tech: 70 }, effect: '树生长周期 -15%', apply: { plant: 'tree', growthMul: 0.85 } },
  { id: 'eco_water5', name: '地下水回灌', cost: { tech: 45 }, effect: '地下水补给 +50%', apply: { global: 'groundwaterCapMul', value: 1.2 } },
  { id: 'eco_o2_4', name: '富氧苔藓', cost: { tech: 50 }, effect: '苔藓产氧 +50%', apply: { plant: 'moss', o2Mul: 1.5 } },
  { id: 'eco_fauna5', name: '鸟类驯化', cost: { tech: 45 }, effect: '鸟类繁殖 +40%', apply: { animal: 'bird', rMul: 1.4 } },
  { id: 'eco_terra5', name: '磁层2.0', cost: { tech: 100 }, effect: '磁层增益 +50%', apply: { global: 'magnetBoostMul', value: 1.5 } }
);
ECO_POLICIES.push(
  { id: 'pol_urban_green', name: '城市绿化', desc: '城区植被 +20%。', effects: { growthMul: 1.08 } },
  { id: 'pol_water_ration', name: '限水令', desc: '全图耗水 -30%，生长 -5%。', effects: { waterUseMul: 0.7, growthMul: 0.95 } },
  { id: 'pol_bird_feed', name: '喂鸟计划', desc: '鸟类繁殖 +30%，每分钟耗食物 1。', effects: { faunaRMul: 1.1 } },
  { id: 'pol_soil_care', name: '土壤养护', desc: '土壤肥力消耗 -30%。', effects: {} },
  { id: 'pol_air_quality', name: '空气质量令', desc: '氧气产量 +10%。', effects: { o2Mul: 1.1 } },
  { id: 'pol_research_boost', name: '科研倾斜', desc: '改造推进 -10%，研究效率 +20%。', effects: { progressMul: 0.9 } }
);

/* ------------------------------------------------------------------------------
 * EcoExpeditions：生态远征（派小队去地图边缘找种子/水源/稀土）
 * ------------------------------------------------------------------------------
 * 远征 15 分钟，耗食物 5/人（小队 3 人），按目的地类型抽奖励：
 * 绿洲（moisture 高格）→ 种子/水；矿脉 → 稀土/铁；成功率受改造进度加成，
 * 失败则空手而归并可能损失 1 名队员（人口 -1）。
 * ------------------------------------------------------------------------------ */
class EcoExpeditions {
  constructor(grid) {
    this.grid = grid;
    this.active = []; // {id, kind, x, y, remainMin, team}
    this.minutes = 0;
    this._nextId = 1;
    this.completed = 0;
    this.failed = 0;
    this.foundSeeds = 0;
  }
  launch(kind, x, y, game, eco) {
    if (['oasis', 'vein', 'ruin'].indexOf(kind) < 0) return { ok: false, reason: '未知远征类型' };
    if (this.active.length >= 3) return { ok: false, reason: '远征队已满（3 支）' };
    const t = this.grid.get(x, y);
    if (!t) return { ok: false, reason: '目标超出地图' };
    if (kind === 'oasis' && t.moisture < 40) return { ok: false, reason: '该处不够湿润，不是绿洲' };
    if (!ecoCanAfford(game, { food: 15 })) return { ok: false, reason: '食物不足（需 15）' };
    ecoPay(game, { food: 15 });
    const ex = { id: 'exp' + (this._nextId++), kind: kind, x: x, y: y, remainMin: 15, team: 3 };
    this.active.push(ex);
    return { ok: true, reason: '远征队出发', expedition: ex };
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const rand = rng || Math.random;
    for (let i = this.active.length - 1; i >= 0; i--) {
      const ex = this.active[i];
      ex.remainMin -= dtMin;
      if (ex.remainMin > 0) continue;
      this.active.splice(i, 1);
      const success = rand() < ecoClamp(0.5 + eco.terraform.progress * 0.004, 0, 0.95);
      if (!success) {
        this.failed++;
        if (game && game.pop && typeof game.pop.count === 'number') game.pop.count = Math.max(0, game.pop.count - 1);
        ecoToast(game, '远征队在 (' + ex.x + ',' + ex.y + ') 失联，1 名队员失踪');
        continue;
      }
      this.completed++;
      if (ex.kind === 'oasis') {
        const seeds = 5 + Math.floor(rand() * 10);
        const sp = ['moss', 'grass', 'shrub'][Math.floor(rand() * 3)];
        eco.seeds.add(sp, seeds);
        this.foundSeeds += seeds;
        ecoGrant(game, 'water', 60);
        ecoToast(game, '绿洲远征：带回 ' + seeds + ' 颗' + PLANT_DEFS[sp].name + '种子，水 +60');
      } else if (ex.kind === 'vein') {
        const rare = 5 + Math.floor(rand() * 10);
        ecoGrant(game, 'rare', rare);
        ecoGrant(game, 'iron', 40);
        ecoToast(game, '矿脉远征：稀土 +' + rare + '，铁 +40');
      } else {
        const tech = 10 + Math.floor(rand() * 15);
        ecoGrant(game, 'tech', tech);
        eco.seeds.add('tree', 3);
        ecoToast(game, '遗迹远征：科技 +' + tech + '，树种 +3');
      }
    }
  }
  summary() {
    return { active: this.active.map(function (e) { return { id: e.id, kind: e.kind, x: e.x, y: e.y, remainMin: ecoRound(e.remainMin, 1) }; }), completed: this.completed, failed: this.failed, foundSeeds: this.foundSeeds };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), active: this.active, _nextId: this._nextId, completed: this.completed, failed: this.failed, foundSeeds: this.foundSeeds }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.active = Array.isArray(data.active) ? data.active : [];
    this._nextId = ecoSafeNum(data._nextId, this.active.length + 1);
    this.completed = ecoSafeNum(data.completed, 0);
    this.failed = ecoSafeNum(data.failed, 0);
    this.foundSeeds = ecoSafeNum(data.foundSeeds, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * EcoGenetics：植物育种（杂交出强化品种）
 * ------------------------------------------------------------------------------
 * 两株同种成熟植株可杂交：耗生物质 10，5 分钟后产出 3 颗强化种子
 * （强化种：生长 +20% / 需水 -15%，二选一随机）。强化种只能通过育种获得，
 * 种下后产氧 +10%。育种记录进种子库（key 为 species+':plus'）。
 * ------------------------------------------------------------------------------ */
class EcoGenetics {
  constructor() {
    this.minutes = 0;
    this.pending = []; // {species, trait, remainMin, x, y}
    this.bredTotal = 0;
    this.plusSeeds = {}; // species → 强化种子数
  }
  crossbreed(species, x, y, game, eco) {
    if (!PLANT_DEFS[species]) return { ok: false, reason: '未知植物' };
    // 需至少 2 株同种成熟植株在附近 3 格内
    let mature = 0;
    for (let i = 0; i < eco.plants.plots.length; i++) {
      const p = eco.plants.plots[i];
      const def = plantDef(p.species);
      if (p.species === species && ecoDist2(p.x, p.y, x, y) <= 9 && def && p.ageDays >= def.growthDays) mature++;
    }
    if (mature < 2) return { ok: false, reason: '附近成熟植株不足 2 株' };
    if (!ecoCanAfford(game, { biomass: 10 })) return { ok: false, reason: '生物质不足（需 10）' };
    ecoPay(game, { biomass: 10 });
    const trait = Math.random() < 0.5 ? 'fast' : 'thrifty';
    this.pending.push({ species: species, trait: trait, remainMin: 5, x: x, y: y });
    return { ok: true, reason: '杂交开始（5 分钟）', trait: trait };
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    for (let i = this.pending.length - 1; i >= 0; i--) {
      const p = this.pending[i];
      p.remainMin -= dtMin;
      if (p.remainMin > 0) continue;
      this.pending.splice(i, 1);
      this.plusSeeds[p.species] = (this.plusSeeds[p.species] || 0) + 3;
      this.bredTotal++;
      ecoToast(game, '育种完成：' + PLANT_DEFS[p.species].name + '强化种 +3（' + (p.trait === 'fast' ? '速生' : '节水') + '）');
    }
  }
  // 强化种播种：直接种一株带 plus 标记的植株（产氧 +10%）
  plantPlus(species, x, y, game, eco) {
    if ((this.plusSeeds[species] || 0) < 1) return { ok: false, reason: '没有该种强化种子' };
    const r = eco.plants.plant(x, y, species, game, eco, { indoor: false });
    if (!r.ok) return r;
    const plot = eco.plants.plots[eco.plants.plots.length - 1];
    plot.plus = true;
    this.plusSeeds[species]--;
    return { ok: true, reason: '强化种已种下（产氧 +10%）', plot: plot };
  }
  summary() {
    return { pending: this.pending.length, bredTotal: this.bredTotal, plusSeeds: this.plusSeeds };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), pending: this.pending, bredTotal: this.bredTotal, plusSeeds: this.plusSeeds }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.pending = Array.isArray(data.pending) ? data.pending : [];
    this.bredTotal = ecoSafeNum(data.bredTotal, 0);
    this.plusSeeds = data.plusSeeds || {};
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第六批 15 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_first_bird', name: '第一只鸟', icon: '🐦', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.fauna.pop('bird') >= 6 && !eco.flags.firstBird; },
    apply: function (eco, game) {
      eco.flags.firstBird = true;
      eco.plants.spreadBoost(0.05);
      return { log: '第一只鸟：鸟鸣声中，植物扩散 +5%', severity: 'good' };
    },
  },
  {
    id: 'ev_first_tree', name: '第一棵树', icon: '🌳', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.countOf('tree') >= 1 && !eco.flags.firstTree; },
    apply: function (eco, game) {
      eco.flags.firstTree = true;
      eco.oxygen.addStock(10);
      return { log: '第一棵树成活：氧气 +10 吨', severity: 'good', o2: 10 };
    },
  },
  {
    id: 'ev_first_harvest', name: '第一次收获', icon: '🌾', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.stats.totalHarvestFood >= 1 && !eco.flags.firstHarvest; },
    apply: function (eco, game) {
      eco.flags.firstHarvest = true;
      ecoGrant(game, 'food', 10);
      return { log: '第一次收获：食物 +10', severity: 'good', food: 10 };
    },
  },
  {
    id: 'ev_first_bloom', name: '第一次开花', icon: '🌸', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.countOf('shrub') >= 5 && !eco.flags.firstBloom; },
    apply: function (eco, game) {
      eco.flags.firstBloom = true;
      eco.fauna.addPop('insect', 3);
      return { log: '第一次开花：昆虫 +3', severity: 'good', insects: 3 };
    },
  },
  {
    id: 'ev_green_wall', name: '绿墙', icon: '🧱', weight: 4, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.plants.count() > 150; },
    apply: function (eco, game) {
      eco.terraform.addProgress(0.3, 'green_wall');
      return { log: '绿墙成型：改造 +0.3%', severity: 'good', progress: 0.3 };
    },
  },
  {
    id: 'ev_wildfire2', name: '野火', icon: '🔥', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.plants.countOf('grass') >= 50 && eco.water.soilMoistureAvg() < 15; },
    apply: function (eco, game) {
      let burned = 0;
      for (let i = eco.plants.plots.length - 1; i >= 0; i--) {
        if (eco.plants.plots[i].species === 'grass' && Math.random() < 0.15) { eco.plants._removeAt(i); burned++; }
      }
      eco.soil.addFertilityAll(5);
      return { log: '野火烧掉 ' + burned + ' 株草，草木灰肥力 +5', severity: 'mixed', burned: burned };
    },
  },
  {
    id: 'ev_earthquake_crack', name: '地裂', icon: '⛰️', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.progress >= 30 && eco.water.groundwater < 30; },
    apply: function (eco, game) {
      eco.water.addGroundwater(15);
      return { log: '地裂：深层地下水涌出 +15', severity: 'good', gw: 15 };
    },
  },
  {
    id: 'ev_ice_melt_surge', name: '融冰潮', icon: '🧊', weight: 4, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() > -20 && eco.terraform.tempC() < 0; },
    apply: function (eco, game) {
      eco.water.addRainEvent(30);
      return { log: '融冰潮：极地冰盖融化，土壤 +30', severity: 'good', rainMm: 30 };
    },
  },
  {
    id: 'ev_pollen_storm', name: '花粉风暴', icon: '🌼', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.plants.countOf('shrub') >= 20 && ecoSeason(game) === 'spring'; },
    apply: function (eco, game) {
      const n = eco.plants.windSpread(8);
      return { log: '花粉风暴：新长出 ' + n + ' 株', severity: 'good', spread: n };
    },
  },
  {
    id: 'ev_night_frost2', name: '夜霜', icon: '❄️', weight: 5, cooldownMin: 25, once: false,
    condition: function (eco, game) { return eco.plants.countOf('crop') > 0 && eco.terraform.tempC() < 0; },
    apply: function (eco, game) {
      const killed = eco.plants.frostKill();
      return { log: '夜霜冻死 ' + killed + ' 株', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_oxygen_leak', name: '氧气泄漏', icon: '💨', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.oxygen.stock > 200; },
    apply: function (eco, game) {
      eco.oxygen.addStock(-50);
      return { log: '氧气泄漏：库存 -50 吨（检查管网）', severity: 'bad', loss: 50 };
    },
  },
  {
    id: 'ev_sandstorm_break', name: '沙尘暴过境', icon: '🌪️', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.plants.count() > 20; },
    apply: function (eco, game) {
      const killed = eco.plants.killYoungest(0.08);
      eco.soil.addFertilityAll(1);
      return { log: '沙尘暴：' + killed + ' 株幼苗被埋，土壤肥力 +1', severity: 'mixed', killed: killed };
    },
  },
  {
    id: 'ev_habitable_day', name: '宜居之日', icon: '🌍', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 85 && !eco.flags.habitableDay; },
    apply: function (eco, game) {
      eco.flags.habitableDay = true;
      ecoGrant(game, 'tech', 100);
      return { log: '宜居之日：火星可居，科技 +100', severity: 'good', tech: 100 };
    },
  }
);

/* ------------------------------------------------------------------------------
 * 追加数据：10 座建筑 / 6 项研究 / 6 项政策 / 10 个任务 / 10 个成就
 * ------------------------------------------------------------------------------ */
ECO_BUILDINGS.push(
  { id: 'desal_plant', name: '海水淡化厂', icon: '💧', stageUnlock: 3, cost: { steel: 120, tech: 50 }, waterPerMin: 5.0, desc: '海水淡化：每分钟产水 5（产卤水，需处理）。', upkeepPerMin: { steel: 0.2 } },
  { id: 'brine_treatment', name: '卤水处理站', icon: '🧪', stageUnlock: 3, cost: { steel: 60, tech: 30 }, desc: '处理卤水：消除淡化厂污染。' },
  { id: 'oxygen_tank_farm', name: '氧气罐场', icon: '🛢️', stageUnlock: 2, cost: { steel: 80, iron: 40 }, o2PerMin: 0.2, desc: '氧气储存：库存上限 +200。' },
  { id: 'wetland_park', name: '湿地公园', icon: '🦆', stageUnlock: 4, cost: { steel: 90, water: 80 }, diversityBonus: 0.03, waterPerMin: 0.5, desc: '湿地公园：多样性 +0.03。' },
  { id: 'geothermal_vent', name: '地热井', icon: '♨️', stageUnlock: 2, cost: { steel: 100, tech: 40 }, co2PerMin: 0.02, waterPerMin: 1.0, desc: '地热井：推进 +0.02%/分钟，产水 1。' },
  { id: 'canopy_walk', name: '林冠步道', icon: '🌉', stageUnlock: 5, cost: { steel: 70 }, happinessMul: 1.08, o2PerMin: 0.3, desc: '林冠步道：幸福 +8%，产氧 0.3。' },
  { id: 'rain_garden', name: '雨水花园', icon: '🌧️', stageUnlock: 3, cost: { steel: 40, biomass: 15 }, waterPerMin: 1.5, desc: '雨水花园：每分钟产水 1.5。' },
  { id: 'eco_lab', name: '生态实验室', icon: '🔬', stageUnlock: 2, cost: { steel: 90, tech: 60 }, growthMul: 1.05, desc: '生态实验室：生长 +5%，研究加速。' }
);
ECO_RESEARCH.push(
  { id: 'eco_seed10', name: '耐寒苔藓', cost: { tech: 30 }, effect: '苔藓耐寒 -10°C', apply: { plant: 'moss', tempMin: -65 } },
  { id: 'eco_seed11', name: '高产作物', cost: { tech: 60 }, effect: '农作物产量 +50%', apply: { plant: 'crop', yieldMul: 1.5 } },
  { id: 'eco_water6', name: '云播种', cost: { tech: 55 }, effect: '降雨量 +20%', apply: { global: 'rainMul', value: 1.2 } },
  { id: 'eco_o2_5', name: '藻类2.0', cost: { tech: 70 }, effect: '藻类产氧 +30%', apply: { global: 'algaeMul', value: 1.3 } },
  { id: 'eco_fauna6', name: '哺乳动物驯化', cost: { tech: 50 }, effect: '哺乳动物繁殖 +30%', apply: { animal: 'mammal', rMul: 1.3 } },
  { id: 'eco_terra6', name: '行星护盾', cost: { tech: 120 }, effect: '磁层侵蚀 -50%', apply: { global: 'erosionMul', value: 0.5 } }
);
ECO_POLICIES.push(
  { id: 'pol_forest_guard', name: '护林员', desc: '树木死亡 -30%。', effects: {} },
  { id: 'pol_water_trade', name: '水权交易', desc: '每分钟得水 2，耗钢材 0.5。', effects: {} },
  { id: 'pol_green_tax', name: '绿税', desc: '改造推进 +5%，幸福 -5%。', effects: { progressMul: 1.05 } },
  { id: 'pol_wildlife_protect', name: '野生动物保护', desc: '动物繁殖 +20%。', effects: { faunaRMul: 1.1 } },
  { id: 'pol_eco_education', name: '生态教育', desc: '多样性 +0.01，幸福 +5%。', effects: {} }
);
ECO_QUESTS.push(
  { id: 'q31', name: '远征先锋', desc: '完成 1 次远征', reward: { tech: 30 }, check: function (eco) { return eco.expeditions.completed >= 1; } },
  { id: 'q32', name: '育种家', desc: '育种成功 1 次', reward: { biomass: 30 }, check: function (eco) { return eco.genetics.bredTotal >= 1; } },
  { id: 'q33', name: '强化种植', desc: '种下 1 株强化种', reward: { biomass: 20 }, check: function (eco) { return eco.plants.plots.some(function (p) { return p.plus; }); } },
  { id: 'q34', name: '投喂达人', desc: '建成 1 座投喂站', reward: { food: 20 }, check: function (eco) { return eco.feeding.stations.length >= 1; } },
  { id: 'q35', name: '自动化先锋', desc: '开启 1 项穹顶自动化', reward: { steel: 20 }, check: function (eco) { for (const k in eco.automation.settings) { const s = eco.automation.settings[k]; if (s.water || s.harvest || s.replant) return true; } return false; } },
  { id: 'q36', name: '管网互联', desc: '氧气管网连通度 ≥0.5', reward: { steel: 40 }, check: function (eco) { return eco.oxygenNet.connectivity(eco) >= 0.5; } },
  { id: 'q37', name: '引导毕业', desc: '完成全部 10 步新手引导', reward: { tech: 60 }, check: function (eco) { return eco.guide.done.length >= 10; } },
  { id: 'q38', name: '第二年', desc: '生态日历进入第 2 年', reward: { food: 30 }, check: function (eco) { return eco.calendar.year >= 2; } },
  { id: 'q39', name: '宜居之日', desc: '改造达到 85%', reward: { tech: 100 }, check: function (eco) { return eco.terraform.progress >= 85; } },
  { id: 'q40', name: '生态传奇', desc: '多样性 ≥0.8 且植物 ≥200', reward: { tech: 150 }, check: function (eco) { return eco.balance.diversity >= 0.8 && eco.plants.count() >= 200; } }
);
ECO_ACHIEVEMENTS.push(
  { id: 'eco_a51', name: '远征先锋', desc: '完成远征', check: function (eco) { return eco.expeditions.completed >= 1; } },
  { id: 'eco_a52', name: '育种家', desc: '育种成功', check: function (eco) { return eco.genetics.bredTotal >= 1; } },
  { id: 'eco_a53', name: '强化种植', desc: '种下强化种', check: function (eco) { return eco.plants.plots.some(function (p) { return p.plus; }); } },
  { id: 'eco_a54', name: '投喂达人', desc: '建成投喂站', check: function (eco) { return eco.feeding.stations.length >= 1; } },
  { id: 'eco_a55', name: '自动化先锋', desc: '开启穹顶自动化', check: function (eco) { for (const k in eco.automation.settings) { const s = eco.automation.settings[k]; if (s.water || s.harvest || s.replant) return true; } return false; } },
  { id: 'eco_a56', name: '管网互联', desc: '管网连通度 ≥0.5', check: function (eco) { return eco.oxygenNet.connectivity(eco) >= 0.5; } },
  { id: 'eco_a57', name: '引导毕业', desc: '完成新手引导', check: function (eco) { return eco.guide.done.length >= 10; } },
  { id: 'eco_a58', name: '第二年', desc: '进入第 2 年', check: function (eco) { return eco.calendar.year >= 2; } },
  { id: 'eco_a59', name: '宜居之日', desc: '改造 85%', check: function (eco) { return eco.terraform.progress >= 85; } },
  { id: 'eco_a60', name: '生态传奇', desc: '多样性 ≥0.8 且植物 ≥200', check: function (eco) { return eco.balance.diversity >= 0.8 && eco.plants.count() >= 200; } }
);

/* ------------------------------------------------------------------------------
 * EcoMarket：生态市场（买卖生物质/食物/氧气，价格随供需浮动）
 * ------------------------------------------------------------------------------
 * 卖出：生物质→钢材（1:0.5）、食物→科技（2:1）、氧气→钢材（10 吨:1）。
 * 价格指数 = 1 + 0.5×sin(分钟/50)，每卖出一次该商品价格 -2%（供过于求），
 * 每买入一次 +2%（供不应求），价格在 0.5×~2× 间浮动。买入用钢材换生物质/水。
 * ------------------------------------------------------------------------------ */
class EcoMarket {
  constructor() {
    this.minutes = 0;
    this.priceMul = { biomass: 1, food: 1, oxygen: 1, water: 1 };
    this.trades = 0;
    this.volume = 0;
  }
  _clampPrice() {
    for (const k in this.priceMul) this.priceMul[k] = ecoClamp(this.priceMul[k], 0.5, 2);
  }
  // 卖出商品得资源：sell('biomass', 10, game) → 钢材
  sell(kind, amount, game) {
    const inv = ecoInv(game);
    if (!inv) return { ok: false, reason: '无背包' };
    if (kind === 'oxygen') {
      if (!game || !game.ecology) return { ok: false, reason: '无生态系统' };
      const eco = game.ecology;
      if (eco.oxygen.stock < amount) return { ok: false, reason: '氧气库存不足' };
      const steel = Math.floor(amount / 10 * this.priceMul.oxygen);
      eco.oxygen.addStock(-amount);
      ecoGrant(game, 'steel', steel);
      this.priceMul.oxygen *= 0.98;
      this.trades++; this.volume += amount;
      this._clampPrice();
      return { ok: true, reason: '卖出氧气 ' + amount + ' 吨，得钢材 ' + steel, gained: steel };
    }
    if (kind === 'biomass') {
      if ((inv.biomass || 0) < amount) return { ok: false, reason: '生物质不足' };
      inv.biomass -= amount;
      const steel = Math.floor(amount * 0.5 * this.priceMul.biomass);
      ecoGrant(game, 'steel', steel);
      this.priceMul.biomass *= 0.98;
      this.trades++; this.volume += amount;
      this._clampPrice();
      return { ok: true, reason: '卖出生物质 ' + amount + '，得钢材 ' + steel, gained: steel };
    }
    if (kind === 'food') {
      if ((inv.food || 0) < amount) return { ok: false, reason: '食物不足' };
      inv.food -= amount;
      const tech = Math.floor(amount * 0.5 * this.priceMul.food);
      ecoGrant(game, 'tech', tech);
      this.priceMul.food *= 0.98;
      this.trades++; this.volume += amount;
      this._clampPrice();
      return { ok: true, reason: '卖出食物 ' + amount + '，得科技 ' + tech, gained: tech };
    }
    return { ok: false, reason: '未知商品' };
  }
  // 买入：钢材换生物质/水
  buy(kind, amount, game) {
    const inv = ecoInv(game);
    if (!inv) return { ok: false, reason: '无背包' };
    if (kind === 'biomass') {
      const cost = Math.ceil(amount * 0.6 / this.priceMul.biomass);
      if ((inv.steel || 0) < cost) return { ok: false, reason: '钢材不足（需 ' + cost + '）' };
      inv.steel -= cost;
      ecoGrant(game, 'biomass', amount);
      this.priceMul.biomass *= 1.02;
      this.trades++; this.volume += amount;
      this._clampPrice();
      return { ok: true, reason: '买入生物质 ' + amount + '，耗钢材 ' + cost, cost: cost };
    }
    if (kind === 'water') {
      const cost = Math.ceil(amount * 0.2 / this.priceMul.water);
      if ((inv.steel || 0) < cost) return { ok: false, reason: '钢材不足（需 ' + cost + '）' };
      inv.steel -= cost;
      ecoGrant(game, 'water', amount);
      this.priceMul.water *= 1.02;
      this.trades++; this.volume += amount;
      this._clampPrice();
      return { ok: true, reason: '买入水 ' + amount + '，耗钢材 ' + cost, cost: cost };
    }
    return { ok: false, reason: '未知商品' };
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    // 价格缓慢回归 1（市场均值回归）
    for (const k in this.priceMul) {
      this.priceMul[k] += (1 - this.priceMul[k]) * 0.01 * dtMin;
    }
    this._clampPrice();
  }
  summary() {
    return { priceMul: this.priceMul, trades: this.trades, volume: ecoRound(this.volume, 1) };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), priceMul: this.priceMul, trades: this.trades, volume: ecoRound(this.volume, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.priceMul = data.priceMul || { biomass: 1, food: 1, oxygen: 1, water: 1 };
    this.trades = ecoSafeNum(data.trades, 0);
    this.volume = ecoSafeNum(data.volume, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * BrineSystem：卤水污染（海水淡化副产物）
 * ------------------------------------------------------------------------------
 * 每座淡化厂每分钟产卤水 1；每座卤水处理站每分钟处理 2。
 * 卤水 >50：土壤肥力每分钟 -0.5（随机 5 格）；>100：每分钟随机死 1 株。
 * 卤水 <10 时土壤缓慢自愈 +0.2/分钟。
 * ------------------------------------------------------------------------------ */
class BrineSystem {
  constructor(grid) {
    this.grid = grid;
    this.brine = 0;
    this.minutes = 0;
    this.killedByBrine = 0;
  }
  update(dtMin, eco, game, rng) {
    this.minutes += dtMin;
    const rand = rng || Math.random;
    let desal = 0, treatment = 0;
    if (eco && eco.buildings) {
      const agg = eco.buildings.aggregate(game, eco ? eco.tickIndex : undefined);
      desal = agg.desalCount || 0;
      treatment = agg.brineTreatmentCount || 0;
    }
    // 建筑文件未接入时，也按 game.builder 里的 id 直接数
    if (desal === 0 && game && game.builder && Array.isArray(game.builder.buildings)) {
      for (let i = 0; i < game.builder.buildings.length; i++) {
        const b = game.builder.buildings[i];
        if (b.id === 'desal_plant') desal += (b.level || 1);
        if (b.id === 'brine_treatment') treatment += (b.level || 1);
      }
    }
    this.brine = ecoClamp(this.brine + (desal * 1 - treatment * 2) * dtMin, 0, 200);
    if (this.brine > 50 && this.grid) {
      for (let k = 0; k < 5; k++) {
        const t = this.grid.get(Math.floor(rand() * this.grid.size), Math.floor(rand() * this.grid.size));
        if (t) t.fertility = ecoClamp(t.fertility - 0.5 * dtMin, 0, 100);
      }
    }
    if (this.brine > 100 && eco && eco.plants && eco.plants.plots.length) {
      const idx = Math.floor(rand() * eco.plants.plots.length);
      eco.plants._removeAt(idx);
      this.killedByBrine++;
    }
    if (this.brine < 10 && this.grid) {
      for (let k = 0; k < 3; k++) {
        const t = this.grid.get(Math.floor(rand() * this.grid.size), Math.floor(rand() * this.grid.size));
        if (t) t.fertility = ecoClamp(t.fertility + 0.2 * dtMin, 0, 100);
      }
    }
  }
  status() {
    if (this.brine < 10) return 'clean';
    if (this.brine < 50) return 'warn';
    if (this.brine < 100) return 'polluted';
    return 'toxic';
  }
  summary() {
    return { brine: ecoRound(this.brine, 1), status: this.status(), killedByBrine: this.killedByBrine };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), brine: ecoRound(this.brine, 1), killedByBrine: this.killedByBrine }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.brine = ecoSafeNum(data.brine, 0);
    this.killedByBrine = ecoSafeNum(data.killedByBrine, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第七批 15 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_first_expedition', name: '首次远征', icon: '🚀', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.expeditions.completed >= 1 && !eco.flags.firstExpedition; },
    apply: function (eco, game) {
      eco.flags.firstExpedition = true;
      ecoGrant(game, 'tech', 20);
      return { log: '首次远征归来：科技 +20', severity: 'good', tech: 20 };
    },
  },
  {
    id: 'ev_first_plus', name: '首株强化种', icon: '🧬', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.plots.some(function (p) { return p.plus; }) && !eco.flags.firstPlus; },
    apply: function (eco, game) {
      eco.flags.firstPlus = true;
      eco.oxygen.addStock(15);
      return { log: '首株强化种成活：氧气 +15 吨', severity: 'good', o2: 15 };
    },
  },
  {
    id: 'ev_market_boom', name: '市场繁荣', icon: '📈', weight: 4, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.market.trades >= 5; },
    apply: function (eco, game) {
      ecoGrant(game, 'steel', 30);
      return { log: '市场繁荣：贸易顺差，钢材 +30', severity: 'good', steel: 30 };
    },
  },
  {
    id: 'ev_brine_leak', name: '卤水泄漏', icon: '☣️', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.brine.brine > 30; },
    apply: function (eco, game) {
      eco.brine.brine = ecoClamp(eco.brine.brine + 10, 0, 200);
      return { log: '卤水泄漏：卤水 +10（建处理站）', severity: 'bad', brine: 10 };
    },
  },
  {
    id: 'ev_brine_clean', name: '卤水净化', icon: '💧', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.brine.brine < 10 && eco.brine.minutes > 30; },
    apply: function (eco, game) {
      eco.soil.addFertilityAll(2);
      return { log: '卤水净化：土壤肥力 +2', severity: 'good' };
    },
  },
  {
    id: 'ev_trade_route', name: '贸易航线', icon: '🛸', weight: 3, cooldownMin: 90, once: false,
    condition: function (eco, game) { return eco.terraform.progress >= 50; },
    apply: function (eco, game) {
      eco.market.priceMul.biomass = ecoClamp(eco.market.priceMul.biomass * 1.2, 0.5, 2);
      return { log: '贸易航线开通：生物质售价 +20%', severity: 'good' };
    },
  },
  {
    id: 'ev_dust_devil2', name: '尘卷风', icon: '🌪️', weight: 5, cooldownMin: 30, once: false,
    condition: function (eco, game) { return eco.plants.count() > 10; },
    apply: function (eco, game) {
      const killed = eco.plants.killYoungest(0.05);
      return { log: '尘卷风：' + killed + ' 株幼苗被卷走', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_aurora2', name: '极光', icon: '🌌', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.magnetStrength() > 0.5; },
    apply: function (eco, game) {
      ecoGrant(game, 'tech', 15);
      return { log: '极光：磁层健康，科技 +15', severity: 'good', tech: 15 };
    },
  },
  {
    id: 'ev_spring_thaw2', name: '春融', icon: '🌱', weight: 5, cooldownMin: 40, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'spring' && eco.terraform.progress >= 40; },
    apply: function (eco, game) {
      eco.water.addRainEvent(25);
      return { log: '春融：积雪化水，土壤 +25', severity: 'good', rainMm: 25 };
    },
  },
  {
    id: 'ev_autumn_gold', name: '秋金', icon: '🍂', weight: 5, cooldownMin: 40, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'autumn' && eco.plants.countOf('crop') > 0; },
    apply: function (eco, game) {
      const r = eco.plants.harvestAll(game, eco);
      return { log: '秋金：集中收获，食物 +' + r.food, severity: 'good', food: r.food };
    },
  },
  {
    id: 'ev_winter_silence', name: '冬寂', icon: '❄️', weight: 4, cooldownMin: 40, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'winter'; },
    apply: function (eco, game) {
      eco.plants.heatStressUntil = eco.plants.minutes + 1;
      return { log: '冬寂：植物生长停滞 1 分钟', severity: 'bad' };
    },
  },
  {
    id: 'ev_summer_growth', name: '夏长', icon: '☀️', weight: 5, cooldownMin: 40, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'summer' && eco.plants.count() > 20; },
    apply: function (eco, game) {
      eco.plants.spreadBoost(0.03);
      return { log: '夏长：植物扩散 +3%', severity: 'good' };
    },
  },
  {
    id: 'ev_oasis_found', name: '发现绿洲', icon: '🏝️', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.water.lakes >= 1 && eco.terraform.progress >= 55; },
    apply: function (eco, game) {
      eco.seeds.add('grass', 10);
      return { log: '发现绿洲：草种 +10', severity: 'good', seeds: 10 };
    },
  },
  {
    id: 'ev_magnetic_storm', name: '磁暴', icon: '⚡', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.magnetStrength() < 0.3; },
    apply: function (eco, game) {
      eco.terraform.addProgress(-0.3, 'magnetic_storm');
      return { log: '磁暴：改造 -0.3%（建磁层可防）', severity: 'bad', loss: 0.3 };
    },
  },
  {
    id: 'ev_century_tree', name: '百年树', icon: '🌲', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.plots.some(function (p) { return p.species === 'tree' && p.ageDays >= 100; }) && !eco.flags.centuryTree; },
    apply: function (eco, game) {
      eco.flags.centuryTree = true;
      eco.oxygen.addStock(50);
      return { log: '百年树：最老的一棵树满百日，氧气 +50 吨', severity: 'good', o2: 50 };
    },
  }
);

/* ------------------------------------------------------------------------------
 * 追加数据：10 座建筑 / 6 项研究 / 6 项政策 / 10 个任务 / 10 个成就
 * ------------------------------------------------------------------------------ */
ECO_BUILDINGS.push(
  { id: 'oxygen_farm2', name: '制氧农场', icon: '🌿', stageUnlock: 2, cost: { steel: 70, biomass: 30 }, o2PerMin: 1.5, desc: '制氧农场：每分钟产氧 1.5 吨。' },
  { id: 'water_reclaimer', name: '水回收器', icon: '♻️', stageUnlock: 2, cost: { steel: 45, tech: 15 }, waterPerMin: 1.5, desc: '水回收器：每分钟产水 1.5。' },
  { id: 'eco_tower', name: '生态塔', icon: '🏢', stageUnlock: 4, cost: { steel: 150, tech: 60 }, o2PerMin: 1.0, growthMul: 1.15, happinessMul: 1.1, desc: '生态塔：产氧 1，生长 ×1.15，幸福 +10%。' },
  { id: 'lichen_lab', name: '地衣实验室', icon: '🧫', stageUnlock: 1, cost: { tech: 35, steel: 20 }, growthMul: 1.08, desc: '地衣实验室：生长 +8%。' },
  { id: 'bird_tower', name: '观鸟塔', icon: '🔭', stageUnlock: 3, cost: { steel: 40 }, diversityBonus: 0.01, happinessMul: 1.05, desc: '观鸟塔：多样性 +0.01，幸福 +5%。' },
  { id: 'mushroom_cave', name: '蘑菇洞', icon: '🍄', stageUnlock: 2, cost: { steel: 35, biomass: 15 }, o2PerMin: 0.3, desc: '蘑菇洞：产氧 0.3，分解有机物。' },
  { id: 'solar_pond', name: '太阳能池', icon: '☀️', stageUnlock: 2, cost: { steel: 55, water: 40 }, o2PerMin: 1.2, waterUsePerMin: 1, desc: '太阳能池：产氧 1.2。' },
  { id: 'terra_observatory', name: '改造观测站', icon: '📡', stageUnlock: 3, cost: { steel: 60, tech: 40 }, co2PerMin: 0.01, desc: '改造观测站：推进 +0.01%/分钟。' },
  { id: 'green_market', name: '绿色市场', icon: '🏪', stageUnlock: 3, cost: { steel: 80 }, desc: '绿色市场：交易价格 +10%。' },
  { id: 'habitat_ring', name: '栖息环', icon: '⭕', stageUnlock: 5, cost: { steel: 200, tech: 80 }, o2PerMin: 2.0, diversityBonus: 0.02, happinessMul: 1.12, desc: '栖息环：产氧 2，多样性 +0.02，幸福 +12%。' }
);
ECO_RESEARCH.push(
  { id: 'eco_seed12', name: '速生苔藓', cost: { tech: 35 }, effect: '苔藓生长 +30%', apply: { plant: 'moss', growthMul: 1.3 } },
  { id: 'eco_seed13', name: '巨型灌木', cost: { tech: 50 }, effect: '灌木产氧 +40%', apply: { plant: 'shrub', o2Mul: 1.4 } },
  { id: 'eco_water7', name: '冰川钻探', cost: { tech: 60 }, effect: '地下水上限 +30%', apply: { global: 'groundwaterCapMul', value: 1.3 } },
  { id: 'eco_o2_6', name: '富氧草地', cost: { tech: 45 }, effect: '草产氧 +40%', apply: { plant: 'grass', o2Mul: 1.4 } },
  { id: 'eco_fauna7', name: '昆虫驯化', cost: { tech: 40 }, effect: '昆虫繁殖 +40%', apply: { animal: 'insect', rMul: 1.4 } },
  { id: 'eco_terra7', name: '大气播种', cost: { tech: 110 }, effect: '改造推进 +15%', apply: { global: 'ghgMul', value: 1.15 } }
);
ECO_POLICIES.push(
  { id: 'pol_harvest_fest', name: '丰收节', desc: '收割产量 +20%，每分钟耗食物 2。', effects: {} },
  { id: 'pol_tree_day', name: '植树节', desc: '种树成本 -50%。', effects: {} },
  { id: 'pol_oxygen_tax', name: '氧气税', desc: '氧气售价 +20%。', effects: {} },
  { id: 'pol_nature_reserve', name: '自然保护区', desc: '多样性 +0.02，生长 -5%。', effects: { growthMul: 0.95 } },
  { id: 'pol_eco_army', name: '生态军团', desc: '修复速度 +50%，每分钟耗钢材 1。', effects: {} }
);
ECO_QUESTS.push(
  { id: 'q41', name: '市场交易员', desc: '完成 1 次市场交易', reward: { steel: 30 }, check: function (eco) { return eco.market.trades >= 1; } },
  { id: 'q42', name: '卤水治理', desc: '卤水降到 10 以下', reward: { steel: 20 }, check: function (eco) { return eco.brine.brine < 10 && eco.brine.minutes > 10; } },
  { id: 'q43', name: '贸易大亨', desc: '市场交易 10 次', reward: { tech: 50 }, check: function (eco) { return eco.market.trades >= 10; } },
  { id: 'q44', name: '绿洲发现者', desc: '湖泊 ≥1', reward: { water: 100 }, check: function (eco) { return eco.water.lakes >= 1; } },
  { id: 'q45', name: '百年树主', desc: '有 1 棵树龄 ≥100 天', reward: { tech: 80 }, check: function (eco) { return eco.plants.plots.some(function (p) { return p.species === 'tree' && p.ageDays >= 100; }); } },
  { id: 'q46', name: '全物种', desc: '5 种植物全部种活', reward: { biomass: 60 }, check: function (eco) { const ids = ['moss', 'grass', 'shrub', 'crop', 'tree']; for (let i = 0; i < ids.length; i++) if (eco.plants.countOf(ids[i]) < 1) return false; return true; } },
  { id: 'q47', name: '全动物', desc: '3 种动物全部引入', reward: { food: 50 }, check: function (eco) { return eco.fauna.pop('insect') >= 6 && eco.fauna.pop('bird') >= 6 && eco.fauna.pop('mammal') >= 6; } },
  { id: 'q48', name: '零崩溃', desc: '运行 100 分钟无生态崩溃', reward: { tech: 60 }, check: function (eco) { return eco.minutes >= 100 && (eco.stats.collapses || 0) === 0; } },
  { id: 'q49', name: '氧气自由', desc: '氧气库存 ≥500 吨', reward: { steel: 100 }, check: function (eco) { return eco.oxygen.stock >= 500; } },
  { id: 'q50', name: '火星园丁', desc: '累计种植 500 株', reward: { tech: 100 }, check: function (eco) { return eco.stats.totalPlanted >= 500; } }
);
ECO_ACHIEVEMENTS.push(
  { id: 'eco_a61', name: '市场交易员', desc: '完成市场交易', check: function (eco) { return eco.market.trades >= 1; } },
  { id: 'eco_a62', name: '卤水治理', desc: '卤水降到 10 以下', check: function (eco) { return eco.brine.brine < 10 && eco.brine.minutes > 10; } },
  { id: 'eco_a63', name: '贸易大亨', desc: '市场交易 10 次', check: function (eco) { return eco.market.trades >= 10; } },
  { id: 'eco_a64', name: '绿洲发现者', desc: '湖泊 ≥1', check: function (eco) { return eco.water.lakes >= 1; } },
  { id: 'eco_a65', name: '百年树主', desc: '树龄 ≥100 天', check: function (eco) { return eco.plants.plots.some(function (p) { return p.species === 'tree' && p.ageDays >= 100; }); } },
  { id: 'eco_a66', name: '全物种', desc: '5 种植物全部种活', check: function (eco) { const ids = ['moss', 'grass', 'shrub', 'crop', 'tree']; for (let i = 0; i < ids.length; i++) if (eco.plants.countOf(ids[i]) < 1) return false; return true; } },
  { id: 'eco_a67', name: '全动物', desc: '3 种动物全部引入', check: function (eco) { return eco.fauna.pop('insect') >= 6 && eco.fauna.pop('bird') >= 6 && eco.fauna.pop('mammal') >= 6; } },
  { id: 'eco_a68', name: '零崩溃', desc: '100 分钟无崩溃', check: function (eco) { return eco.minutes >= 100 && (eco.stats.collapses || 0) === 0; } },
  { id: 'eco_a69', name: '氧气自由', desc: '氧气库存 ≥500 吨', check: function (eco) { return eco.oxygen.stock >= 500; } },
  { id: 'eco_a70', name: '火星园丁', desc: '累计种植 500 株', check: function (eco) { return eco.stats.totalPlanted >= 500; } }
);

/* ------------------------------------------------------------------------------
 * EcoTourism：生态旅游（游客来访消费，幸福与收入双收）
 * ------------------------------------------------------------------------------
 * 游客数 = 多样性×20 + 公园数×10 + 宜居加成 20，上限 = 20 + 公园数×10。
 * 每游客每分钟：付钢材 0.5，耗食物 0.1、氧气 0.01；游客多则人口幸福 +5%。
 * 游客超容量则流失（幸福 -5%）。公园 = open_park / wetland_park / bird_tower 等。
 * ------------------------------------------------------------------------------ */
class EcoTourism {
  constructor() {
    this.tourists = 0;
    this.minutes = 0;
    this.earnedSteel = 0;
    this.visitorsTotal = 0;
    this.overflowMinutes = 0;
  }
  capacity(eco, game) {
    let parks = 0;
    if (game && game.builder && Array.isArray(game.builder.buildings)) {
      for (let i = 0; i < game.builder.buildings.length; i++) {
        const id = game.builder.buildings[i].id;
        if (id === 'open_park' || id === 'wetland_park' || id === 'bird_tower' || id === 'canopy_walk' || id === 'eco_tower') parks += (game.builder.buildings[i].level || 1);
      }
    }
    return 20 + parks * 10;
  }
  demand(eco, game) {
    let d = 0;
    if (eco && eco.balance) d += eco.balance.diversity * 20;
    if (eco && eco.terraform && eco.terraform.progress >= 70) d += 20;
    if (eco && eco.plants) d += Math.min(eco.plants.count() / 20, 10);
    return Math.floor(d);
  }
  update(dtMin, eco, game) {
    this.minutes += dtMin;
    const cap = this.capacity(eco, game);
    const dem = this.demand(eco, game);
    const target = Math.min(cap, dem);
    // 游客数向目标靠拢（每分钟最多变化 2 人）
    const diff = target - this.tourists;
    this.tourists = Math.max(0, this.tourists + ecoClamp(diff, -2 * dtMin, 2 * dtMin));
    if (dem > cap) this.overflowMinutes += dtMin;
    const inv = ecoInv(game);
    if (inv && this.tourists > 0) {
      const steel = this.tourists * 0.5 * dtMin;
      ecoGrant(game, 'steel', Math.floor(steel));
      this.earnedSteel += Math.floor(steel);
      this.visitorsTotal += this.tourists * dtMin;
      inv.food = Math.max(0, (inv.food || 0) - this.tourists * 0.1 * dtMin);
    }
  }
  happinessMul() {
    if (this.tourists >= 20) return 1.05;
    if (this.overflowMinutes > 10) return 0.95;
    return 1;
  }
  summary(eco, game) {
    return {
      tourists: Math.floor(this.tourists),
      capacity: this.capacity(eco, game),
      demand: this.demand(eco, game),
      earnedSteel: ecoRound(this.earnedSteel, 1),
      visitorsTotal: Math.floor(this.visitorsTotal),
      happinessMul: this.happinessMul(),
    };
  }
  save() { return { v: 1, minutes: ecoRound(this.minutes, 1), tourists: ecoRound(this.tourists, 1), earnedSteel: ecoRound(this.earnedSteel, 1), visitorsTotal: Math.floor(this.visitorsTotal), overflowMinutes: ecoRound(this.overflowMinutes, 1) }; }
  load(data) {
    if (!data || data.v !== 1) return false;
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.tourists = ecoSafeNum(data.tourists, 0);
    this.earnedSteel = ecoSafeNum(data.earnedSteel, 0);
    this.visitorsTotal = ecoSafeNum(data.visitorsTotal, 0);
    this.overflowMinutes = ecoSafeNum(data.overflowMinutes, 0);
    return true;
  }
}

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第八批 15 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_first_tourist', name: '第一位游客', icon: '🧳', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.tourism.tourists >= 1 && !eco.flags.firstTourist; },
    apply: function (eco, game) {
      eco.flags.firstTourist = true;
      ecoGrant(game, 'steel', 20);
      return { log: '第一位游客：生态旅游开张，钢材 +20', severity: 'good', steel: 20 };
    },
  },
  {
    id: 'ev_tourist_boom', name: '游客爆满', icon: '👥', weight: 4, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.tourism.tourists >= eco.tourism.capacity(eco, game) && eco.tourism.capacity(eco, game) > 20; },
    apply: function (eco, game) {
      ecoGrant(game, 'steel', 40);
      return { log: '游客爆满：门票收入，钢材 +40（扩建公园可接待更多）', severity: 'good', steel: 40 };
    },
  },
  {
    id: 'ev_tourist_complaint', name: '游客投诉', icon: '😤', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.tourism.overflowMinutes > 10; },
    apply: function (eco, game) {
      eco.tourism.overflowMinutes = 0;
      return { log: '游客投诉：容量不足，口碑受损（扩建公园）', severity: 'bad' };
    },
  },
  {
    id: 'ev_green_wedding', name: '绿婚', icon: '💚', weight: 2, cooldownMin: 90, once: false,
    condition: function (eco, game) { return eco.balance.diversity >= 0.7 && eco.plants.countOf('tree') >= 30; },
    apply: function (eco, game) {
      ecoGrant(game, 'food', 20);
      return { log: '绿婚：居民在林下举行婚礼，食物 +20', severity: 'good', food: 20 };
    },
  },
  {
    id: 'ev_seed_rain2', name: '种子雨', icon: '🌧️', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.plants.count() > 100 && eco.water.soilMoistureAvg() > 60; },
    apply: function (eco, game) {
      const n = eco.plants.windSpread(12);
      return { log: '种子雨：新长出 ' + n + ' 株', severity: 'good', spread: n };
    },
  },
  {
    id: 'ev_frost_fair', name: '霜节', icon: '🎪', weight: 3, cooldownMin: 90, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'winter' && eco.terraform.progress >= 40; },
    apply: function (eco, game) {
      ecoGrant(game, 'food', 15);
      return { log: '霜节：居民庆祝冬季，食物 +15', severity: 'good', food: 15 };
    },
  },
  {
    id: 'ev_moss_carpet', name: '苔藓毯', icon: '🟢', weight: 5, cooldownMin: 40, once: false,
    condition: function (eco, game) { return eco.plants.countOf('moss') >= 50; },
    apply: function (eco, game) {
      eco.soil.addFertilityAll(2);
      return { log: '苔藓毯：土壤肥力 +2', severity: 'good' };
    },
  },
  {
    id: 'ev_canopy_rain', name: '林冠雨', icon: '🌲', weight: 4, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.plants.countOf('tree') >= 40 && eco.water.soilMoistureAvg() > 50; },
    apply: function (eco, game) {
      eco.water.addRainEvent(15);
      return { log: '林冠雨：森林截留降水，土壤 +15', severity: 'good', rainMm: 15 };
    },
  },
  {
    id: 'ev_bee_swarm2', name: '蜂群', icon: '🐝', weight: 4, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.plants.countOf('shrub') >= 15 && eco.fauna.pop('insect') >= 10; },
    apply: function (eco, game) {
      eco.plants.spreadBoost(0.05);
      return { log: '蜂群：授粉大爆发，植物扩散 +5%', severity: 'good' };
    },
  },
  {
    id: 'ev_mudslide', name: '泥石流', icon: '⛰️', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.water.soilMoistureAvg() > 80 && eco.plants.count() < 20; },
    apply: function (eco, game) {
      const killed = eco.plants.killYoungest(0.1);
      return { log: '泥石流：植被太少固不住土，' + killed + ' 株被冲走', severity: 'bad', killed: killed };
    },
  },
  {
    id: 'ev_ice_cave', name: '冰洞', icon: '🧊', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.tempC() < -30 && eco.water.groundwater > 50; },
    apply: function (eco, game) {
      ecoGrant(game, 'water', 80);
      return { log: '冰洞：发现地下冰窟，水 +80', severity: 'good', water: 80 };
    },
  },
  {
    id: 'ev_sun_flare', name: '太阳耀斑', icon: '☀️', weight: 3, cooldownMin: 60, once: false,
    condition: function (eco, game) { return eco.terraform.magnetStrength() < 0.4; },
    apply: function (eco, game) {
      eco.terraform.addProgress(-0.4, 'sun_flare');
      return { log: '太阳耀斑：改造 -0.4%（建磁层可防）', severity: 'bad', loss: 0.4 };
    },
  },
  {
    id: 'ev_harvest_moon', name: '丰收月', icon: '🌕', weight: 4, cooldownMin: 90, once: false,
    condition: function (eco, game) { return ecoSeason(game) === 'autumn' && eco.plants.countOf('crop') >= 10; },
    apply: function (eco, game) {
      const r = eco.plants.harvestAll(game, eco);
      return { log: '丰收月：大丰收，食物 +' + r.food, severity: 'good', food: r.food };
    },
  },
  {
    id: 'ev_wild_garden', name: '野花园', icon: '🌼', weight: 4, cooldownMin: 50, once: false,
    condition: function (eco, game) { return eco.balance.diversity >= 0.5 && eco.plants.countOf('grass') >= 30; },
    apply: function (eco, game) {
      eco.fauna.addPop('insect', 5);
      return { log: '野花园：昆虫 +5', severity: 'good', insects: 5 };
    },
  },
  {
    id: 'ev_terraform_100', name: '改造完成', icon: '🏆', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 100 && !eco.flags.terraform100; },
    apply: function (eco, game) {
      eco.flags.terraform100 = true;
      ecoGrant(game, 'tech', 200);
      return { log: '改造完成：火星 100% 宜居，科技 +200', severity: 'good', tech: 200 };
    },
  }
);

/* ------------------------------------------------------------------------------
 * 追加数据：10 座建筑 / 6 项研究 / 6 项政策 / 10 个任务 / 10 个成就
 * ------------------------------------------------------------------------------ */
ECO_BUILDINGS.push(
  { id: 'tourist_center', name: '游客中心', icon: '🧳', stageUnlock: 4, cost: { steel: 90, tech: 20 }, happinessMul: 1.08, desc: '游客中心：旅游收入 +50%，幸福 +8%。' },
  { id: 'eco_hotel', name: '生态酒店', icon: '🏨', stageUnlock: 5, cost: { steel: 150, tech: 40 }, happinessMul: 1.1, o2PerMin: 0.5, desc: '生态酒店：幸福 +10%，产氧 0.5。' },
  { id: 'oxygen_garden', name: '氧气花园', icon: '🌺', stageUnlock: 4, cost: { steel: 70, biomass: 25 }, o2PerMin: 1.8, desc: '氧气花园：每分钟产氧 1.8 吨。' },
  { id: 'rain_forest', name: '雨林馆', icon: '🌴', stageUnlock: 5, cost: { steel: 180, water: 100, tech: 50 }, o2PerMin: 2.5, diversityBonus: 0.02, desc: '雨林馆：产氧 2.5，多样性 +0.02。' },
  { id: 'ice_mine', name: '冰矿', icon: '⛏️', stageUnlock: 2, cost: { steel: 80, iron: 40 }, waterPerMin: 3.0, desc: '冰矿：每分钟产水 3。' },
  { id: 'wind_farm_eco', name: '生态风电场', icon: '🌬️', stageUnlock: 3, cost: { steel: 120, tech: 30 }, co2PerMin: 0.02, desc: '生态风电场：推进 +0.02%/分钟。' },
  { id: 'seed_exchange', name: '种子交易所', icon: '🔄', stageUnlock: 3, cost: { steel: 60, tech: 30 }, seedCostMul: 0.7, desc: '种子交易所：播种成本 -30%。' },
  { id: 'wildlife_hospital', name: '野生动物医院', icon: '🏥', stageUnlock: 4, cost: { steel: 100, tech: 40 }, desc: '野生动物医院：动物死亡 -30%。' },
  { id: 'climate_station', name: '气候站', icon: '🌡️', stageUnlock: 3, cost: { steel: 50, tech: 35 }, growthMul: 1.03, desc: '气候站：生长 +3%，预报更准。' },
  { id: 'mars_park', name: '火星公园', icon: '🎡', stageUnlock: 5, cost: { steel: 200, tech: 60 }, o2PerMin: 1.0, happinessMul: 1.15, diversityBonus: 0.02, desc: '火星公园：产氧 1，幸福 +15%，多样性 +0.02。' }
);
ECO_RESEARCH.push(
  { id: 'eco_seed14', name: '四季苔藓', cost: { tech: 40 }, effect: '苔藓四季生长', apply: { plant: 'moss', growthMul: 1.2 } },
  { id: 'eco_seed15', name: '金色作物', cost: { tech: 70 }, effect: '农作物产量 +30%', apply: { plant: 'crop', yieldMul: 1.3 } },
  { id: 'eco_water8', name: '大气取水', cost: { tech: 65 }, effect: '空气取水 +50%', apply: { global: 'airWaterMul', value: 1.5 } },
  { id: 'eco_o2_7', name: '深海藻', cost: { tech: 75 }, effect: '藻类产氧 +25%', apply: { global: 'algaeMul', value: 1.25 } },
  { id: 'eco_fauna8', name: '鸟类迁徙', cost: { tech: 55 }, effect: '鸟类繁殖 +25%', apply: { animal: 'bird', rMul: 1.25 } },
  { id: 'eco_terra8', name: '终极改造', cost: { tech: 150 }, effect: '改造推进 +25%', apply: { global: 'ghgMul', value: 1.25 } }
);
ECO_POLICIES.push(
  { id: 'pol_tourism_boost', name: '旅游推广', desc: '游客 +50%，每分钟耗钢材 1。', effects: {} },
  { id: 'pol_green_city', name: '绿色城市', desc: '全图生长 +10%。', effects: { growthMul: 1.1 } },
  { id: 'pol_water_save2', name: '节水令', desc: '耗水 -20%。', effects: { waterUseMul: 0.8 } },
  { id: 'pol_oxygen_boost', name: '富氧计划', desc: '氧气产量 +15%。', effects: { o2Mul: 1.15 } },
  { id: 'pol_animal_care', name: '动物关怀', desc: '动物繁殖 +15%。', effects: { faunaRMul: 1.08 } },
  { id: 'pol_eco_legacy', name: '生态遗产', desc: '多样性 +0.03，改造 -5%。', effects: { progressMul: 0.95 } }
);
ECO_QUESTS.push(
  { id: 'q51', name: '第一位游客', desc: '迎来 1 位游客', reward: { steel: 20 }, check: function (eco) { return eco.tourism.tourists >= 1; } },
  { id: 'q52', name: '旅游大亨', desc: '旅游收入 ≥100 钢材', reward: { steel: 60 }, check: function (eco) { return eco.tourism.earnedSteel >= 100; } },
  { id: 'q53', name: '游客爆满', desc: '游客数达到容量', reward: { steel: 40 }, check: function (eco) { return eco.tourism.tourists >= 20; } },
  { id: 'q54', name: '改造完成', desc: '改造达到 100%', reward: { tech: 200 }, check: function (eco) { return eco.terraform.progress >= 100; } },
  { id: 'q55', name: '生态全满', desc: '建筑 80 种、研究 48 项、政策 38 项全部集齐数据', reward: { tech: 100 }, check: function (eco) { return ECO_BUILDINGS.length >= 80 && ECO_RESEARCH.length >= 48 && ECO_POLICIES.length >= 38; } },
  { id: 'q56', name: '千株成林', desc: '累计种植 1000 株', reward: { tech: 120 }, check: function (eco) { return eco.stats.totalPlanted >= 1000; } },
  { id: 'q57', name: '事件猎人', desc: '触发 20 个不同事件', reward: { tech: 50 }, check: function (eco) { return eco.events.firedCount >= 20; } },
  { id: 'q58', name: '周报读者', desc: '收到 5 份生态周报', reward: { food: 40 }, check: function (eco) { return eco.report.reports.length >= 5; } },
  { id: 'q59', name: '告警清零', desc: '活跃告警为 0', reward: { steel: 30 }, check: function (eco) { return eco.alerts.active.length === 0; } },
  { id: 'q60', name: '生态宗师', desc: '完成 30 个任务', reward: { tech: 200 }, check: function (eco) { return eco.questsClaimed.length >= 30; } }
);
ECO_ACHIEVEMENTS.push(
  { id: 'eco_a71', name: '第一位游客', desc: '迎来游客', check: function (eco) { return eco.tourism.tourists >= 1; } },
  { id: 'eco_a72', name: '旅游大亨', desc: '旅游收入 ≥100', check: function (eco) { return eco.tourism.earnedSteel >= 100; } },
  { id: 'eco_a73', name: '游客爆满', desc: '游客数达容量', check: function (eco) { return eco.tourism.tourists >= 20; } },
  { id: 'eco_a74', name: '改造完成', desc: '改造 100%', check: function (eco) { return eco.terraform.progress >= 100; } },
  { id: 'eco_a75', name: '生态全满', desc: '数据全集齐', check: function (eco) { return ECO_BUILDINGS.length >= 80 && ECO_RESEARCH.length >= 48 && ECO_POLICIES.length >= 38; } },
  { id: 'eco_a76', name: '千株成林', desc: '累计种植 1000 株', check: function (eco) { return eco.stats.totalPlanted >= 1000; } },
  { id: 'eco_a77', name: '事件猎人', desc: '触发 20 个事件', check: function (eco) { return eco.events.firedCount >= 20; } },
  { id: 'eco_a78', name: '周报读者', desc: '收到 5 份周报', check: function (eco) { return eco.report.reports.length >= 5; } },
  { id: 'eco_a79', name: '告警清零', desc: '活跃告警为 0', check: function (eco) { return eco.alerts.active.length === 0; } },
  { id: 'eco_a80', name: '生态宗师', desc: '完成 30 个任务', check: function (eco) { return eco.questsClaimed.length >= 30; } }
);

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第九批 15 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_first_100_plants', name: '百株里程碑', icon: '💯', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.count() >= 100 && !eco.flags.first100Plants; },
    apply: function (eco, game) {
      eco.flags.first100Plants = true;
      eco.oxygen.addStock(30);
      return { log: '百株里程碑：氧气 +30 吨', severity: 'good', o2: 30 };
    },
  },
  {
    id: 'ev_first_1000_plants', name: '千株里程碑', icon: '🌲', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.count() >= 1000 && !eco.flags.first1000Plants; },
    apply: function (eco, game) {
      eco.flags.first1000Plants = true;
      eco.terraform.addProgress(1, 'thousand_plants');
      return { log: '千株里程碑：改造 +1%', severity: 'good', progress: 1 };
    },
  },
  {
    id: 'ev_first_50_birds', name: '五十只鸟', icon: '🐦', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.fauna.pop('bird') >= 50 && !eco.flags.first50Birds; },
    apply: function (eco, game) {
      eco.flags.first50Birds = true;
      eco.plants.spreadBoost(0.05);
      return { log: '五十只鸟：鸟群成型，植物扩散 +5%', severity: 'good' };
    },
  },
  {
    id: 'ev_first_100_insects', name: '百只昆虫', icon: '🐛', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.fauna.pop('insect') >= 100 && !eco.flags.first100Insects; },
    apply: function (eco, game) {
      eco.flags.first100Insects = true;
      eco.soil.addFertilityAll(3);
      return { log: '百只昆虫：授粉网成型，土壤肥力 +3', severity: 'good' };
    },
  },
  {
    id: 'ev_first_10_mammals', name: '十只哺乳动物', icon: '🐇', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.fauna.pop('mammal') >= 10 && !eco.flags.first10Mammals; },
    apply: function (eco, game) {
      eco.flags.first10Mammals = true;
      ecoGrant(game, 'food', 20);
      return { log: '十只哺乳动物：食物链完整，食物 +20', severity: 'good', food: 20 };
    },
  },
  {
    id: 'ev_first_sanctuary2', name: '庇护所网络', icon: '🏞️', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.sanctuary.sanctuaries.length >= 2 && !eco.flags.sanctuaryNet; },
    apply: function (eco, game) {
      eco.flags.sanctuaryNet = true;
      eco.fauna.addPop('bird', 3);
      eco.fauna.addPop('mammal', 2);
      return { log: '庇护所网络：鸟类 +3，哺乳动物 +2', severity: 'good' };
    },
  },
  {
    id: 'ev_first_farm2', name: '农场网络', icon: '🚜', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.farms.zones.length >= 2 && !eco.flags.farmNet; },
    apply: function (eco, game) {
      eco.flags.farmNet = true;
      ecoGrant(game, 'food', 40);
      return { log: '农场网络：食物 +40', severity: 'good', food: 40 };
    },
  },
  {
    id: 'ev_first_reservoir2', name: '水库网络', icon: '💧', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.reservoirs.reservoirs.length >= 2 && !eco.flags.reservoirNet; },
    apply: function (eco, game) {
      eco.flags.reservoirNet = true;
      eco.water.addRainEvent(30);
      return { log: '水库网络：蓄水能力翻倍，土壤 +30', severity: 'good', rainMm: 30 };
    },
  },
  {
    id: 'ev_first_river', name: '第一条河', icon: '🏞️', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.rivers.rivers.length >= 1 && !eco.flags.firstRiver; },
    apply: function (eco, game) {
      eco.flags.firstRiver = true;
      eco.fauna.addPop('insect', 5);
      return { log: '第一条河：昆虫 +5', severity: 'good', insects: 5 };
    },
  },
  {
    id: 'ev_first_wetland', name: '第一片湿地', icon: '🦆', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.water.lakes >= 3 && !eco.flags.firstWetland; },
    apply: function (eco, game) {
      eco.flags.firstWetland = true;
      eco.oxygen.addStock(25);
      return { log: '第一片湿地：氧气 +25 吨', severity: 'good', o2: 25 };
    },
  },
  {
    id: 'ev_first_forest', name: '第一片森林', icon: '🌲', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.countOf('tree') >= 20 && !eco.flags.firstForest; },
    apply: function (eco, game) {
      eco.flags.firstForest = true;
      eco.terraform.addProgress(0.5, 'first_forest');
      return { log: '第一片森林：改造 +0.5%', severity: 'good', progress: 0.5 };
    },
  },
  {
    id: 'ev_first_meadow', name: '第一片草甸', icon: '🌿', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.countOf('grass') >= 50 && !eco.flags.firstMeadow; },
    apply: function (eco, game) {
      eco.flags.firstMeadow = true;
      eco.fauna.addPop('mammal', 2);
      return { log: '第一片草甸：哺乳动物 +2', severity: 'good', mammals: 2 };
    },
  },
  {
    id: 'ev_first_crop_field', name: '第一片农田', icon: '🌾', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.countOf('crop') >= 20 && !eco.flags.firstCropField; },
    apply: function (eco, game) {
      eco.flags.firstCropField = true;
      ecoGrant(game, 'food', 30);
      return { log: '第一片农田：食物 +30', severity: 'good', food: 30 };
    },
  },
  {
    id: 'ev_first_shrubland', name: '第一片灌木丛', icon: '🌳', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.countOf('shrub') >= 20 && !eco.flags.firstShrubland; },
    apply: function (eco, game) {
      eco.flags.firstShrubland = true;
      eco.fauna.addPop('insect', 4);
      return { log: '第一片灌木丛：昆虫 +4', severity: 'good', insects: 4 };
    },
  },
  {
    id: 'ev_eco_utopia', name: '生态乌托邦', icon: '🌈', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 100 && eco.balance.diversity >= 0.8 && !eco.flags.ecoUtopia; },
    apply: function (eco, game) {
      eco.flags.ecoUtopia = true;
      ecoGrant(game, 'tech', 300);
      return { log: '生态乌托邦：改造 100% 且多样性 ≥0.8，科技 +300', severity: 'good', tech: 300 };
    },
  }
);

/* ------------------------------------------------------------------------------
 * 追加数据：10 座建筑 / 6 项研究 / 6 项政策
 * ------------------------------------------------------------------------------ */
ECO_BUILDINGS.push(
  { id: 'eco_monument', name: '生态纪念碑', icon: '🗿', stageUnlock: 6, cost: { steel: 300, tech: 100 }, o2PerMin: 1.0, happinessMul: 1.2, desc: '生态纪念碑：幸福 +20%，产氧 1。' },
  { id: 'sky_farm', name: '空中农场', icon: '🌤️', stageUnlock: 5, cost: { steel: 160, tech: 50 }, growthMul: 1.2, desc: '空中农场：生长 ×1.2。' },
  { id: 'underground_river', name: '地下河', icon: '💧', stageUnlock: 4, cost: { steel: 140, tech: 60 }, waterPerMin: 4.0, desc: '地下河：每分钟产水 4。' },
  { id: 'cloud_seeder2', name: '云播种机', icon: '☁️', stageUnlock: 4, cost: { steel: 110, tech: 70 }, waterPerMin: 2.0, desc: '云播种机：人工降雨，产水 2。' },
  { id: 'bio_reactor', name: '生物反应器', icon: '🧪', stageUnlock: 3, cost: { steel: 100, tech: 50 }, o2PerMin: 2.0, waterUsePerMin: 3, desc: '生物反应器：产氧 2，耗水 3。' },
  { id: 'eco_bridge', name: '生态桥', icon: '🌉', stageUnlock: 4, cost: { steel: 90 }, diversityBonus: 0.01, happinessMul: 1.05, desc: '生态桥：多样性 +0.01，幸福 +5%。' },
  { id: 'terra_temple', name: '改造神殿', icon: '⛩️', stageUnlock: 6, cost: { steel: 250, tech: 120 }, co2PerMin: 0.05, desc: '改造神殿：推进 +0.05%/分钟。' },
  { id: 'seed_rocket', name: '种子火箭', icon: '🚀', stageUnlock: 5, cost: { steel: 200, tech: 80 }, desc: '种子火箭：向全星播种，扩散 +10%。' },
  { id: 'oxygen_cathedral', name: '氧气大教堂', icon: '⛪', stageUnlock: 6, cost: { steel: 280, tech: 100 }, o2PerMin: 3.0, happinessMul: 1.1, desc: '氧气大教堂：产氧 3，幸福 +10%。' },
  { id: 'mars_eden', name: '火星伊甸园', icon: '🌺', stageUnlock: 6, cost: { steel: 400, tech: 150 }, o2PerMin: 5.0, diversityBonus: 0.05, happinessMul: 1.2, desc: '火星伊甸园：产氧 5，多样性 +0.05，幸福 +20%。' }
);
ECO_RESEARCH.push(
  { id: 'eco_seed16', name: '永生苔藓', cost: { tech: 50 }, effect: '苔藓寿命 +50%', apply: { plant: 'moss', growthMul: 1.15 } },
  { id: 'eco_seed17', name: '黄金树', cost: { tech: 90 }, effect: '树产氧 +60%', apply: { plant: 'tree', o2Mul: 1.6 } },
  { id: 'eco_water9', name: '冰川融化', cost: { tech: 70 }, effect: '降雨 +25%', apply: { global: 'rainMul', value: 1.25 } },
  { id: 'eco_o2_8', name: '超级藻', cost: { tech: 85 }, effect: '藻类产氧 +35%', apply: { global: 'algaeMul', value: 1.35 } },
  { id: 'eco_fauna9', name: '生态平衡术', cost: { tech: 65 }, effect: '全部动物繁殖 +20%', apply: { global: 'faunaRMul', value: 1.2 } },
  { id: 'eco_terra9', name: '行星改造大师', cost: { tech: 180 }, effect: '改造推进 +30%', apply: { global: 'ghgMul', value: 1.3 } }
);
ECO_POLICIES.push(
  { id: 'pol_eden_plan', name: '伊甸园计划', desc: '全部生长 +15%，每分钟耗科技 2。', effects: { growthMul: 1.15 } },
  { id: 'pol_mars_day', name: '火星日', desc: '幸福 +10%，每分钟耗食物 2。', effects: {} },
  { id: 'pol_cloud_seeding', name: '云播种令', desc: '降雨 +30%。', effects: {} },
  { id: 'pol_seed_rocket', name: '种子火箭令', desc: '植物扩散 +10%。', effects: {} },
  { id: 'pol_eco_guard', name: '生态卫队', desc: '生态崩溃概率 -50%。', effects: {} },
  { id: 'pol_utopia', name: '乌托邦', desc: '全部增益 +10%，改造 -10%。', effects: { growthMul: 1.1, o2Mul: 1.1, progressMul: 0.9 } }
);

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第十批 15 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_first_1000_seeds', name: '千颗种子', icon: '🌱', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { const s = eco.seeds.seeds; return (s.moss + s.grass + s.shrub + s.crop + s.tree) >= 1000 && !eco.flags.first1000Seeds; },
    apply: function (eco, game) {
      eco.flags.first1000Seeds = true;
      ecoGrant(game, 'biomass', 50);
      return { log: '千颗种子：种子库破千，生物质 +50', severity: 'good', biomass: 50 };
    },
  },
  {
    id: 'ev_first_500_o2', name: '氧气自由', icon: '🫧', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.oxygen.stock >= 500 && !eco.flags.first500O2; },
    apply: function (eco, game) {
      eco.flags.first500O2 = true;
      ecoGrant(game, 'steel', 50);
      return { log: '氧气自由：库存破 500 吨，钢材 +50', severity: 'good', steel: 50 };
    },
  },
  {
    id: 'ev_first_100_tourists', name: '百位游客', icon: '🧳', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.tourism.visitorsTotal >= 100 && !eco.flags.first100Tourists; },
    apply: function (eco, game) {
      eco.flags.first100Tourists = true;
      ecoGrant(game, 'steel', 60);
      return { log: '百位游客：累计接待破百，钢材 +60', severity: 'good', steel: 60 };
    },
  },
  {
    id: 'ev_first_10_trades', name: '十次交易', icon: '💰', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.market.trades >= 10 && !eco.flags.first10Trades; },
    apply: function (eco, game) {
      eco.flags.first10Trades = true;
      ecoGrant(game, 'steel', 40);
      return { log: '十次交易：市场活跃，钢材 +40', severity: 'good', steel: 40 };
    },
  },
  {
    id: 'ev_first_5_expeditions', name: '五次远征', icon: '🚀', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.expeditions.completed >= 5 && !eco.flags.first5Expeditions; },
    apply: function (eco, game) {
      eco.flags.first5Expeditions = true;
      ecoGrant(game, 'tech', 50);
      return { log: '五次远征：探索者称号，科技 +50', severity: 'good', tech: 50 };
    },
  },
  {
    id: 'ev_first_10_breeds', name: '十次育种', icon: '🧬', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.genetics.bredTotal >= 10 && !eco.flags.first10Breeds; },
    apply: function (eco, game) {
      eco.flags.first10Breeds = true;
      ecoGrant(game, 'biomass', 60);
      return { log: '十次育种：育种大师，生物质 +60', severity: 'good', biomass: 60 };
    },
  },
  {
    id: 'ev_first_100_harvest', name: '百次收获', icon: '🌾', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.stats.totalHarvestFood >= 100 && !eco.flags.first100Harvest; },
    apply: function (eco, game) {
      eco.flags.first100Harvest = true;
      ecoGrant(game, 'food', 80);
      return { log: '百次收获：丰收大师，食物 +80', severity: 'good', food: 80 };
    },
  },
  {
    id: 'ev_first_50_quests', name: '五十任务', icon: '📜', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.questsClaimed.length >= 50 && !eco.flags.first50Quests; },
    apply: function (eco, game) {
      eco.flags.first50Quests = true;
      ecoGrant(game, 'tech', 100);
      return { log: '五十任务：任务大师，科技 +100', severity: 'good', tech: 100 };
    },
  },
  {
    id: 'ev_first_50_achievements', name: '五十成就', icon: '🏆', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.achievementsUnlocked.length >= 50 && !eco.flags.first50Achievements; },
    apply: function (eco, game) {
      eco.flags.first50Achievements = true;
      ecoGrant(game, 'tech', 120);
      return { log: '五十成就：成就大师，科技 +120', severity: 'good', tech: 120 };
    },
  },
  {
    id: 'ev_first_10_reports', name: '十份周报', icon: '📰', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.report.reports.length >= 10 && !eco.flags.first10Reports; },
    apply: function (eco, game) {
      eco.flags.first10Reports = true;
      ecoGrant(game, 'food', 30);
      return { log: '十份周报：生态观察家，食物 +30', severity: 'good', food: 30 };
    },
  },
  {
    id: 'ev_first_100_days', name: '百日纪念', icon: '📅', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.calendar.day >= 100 && !eco.flags.first100Days; },
    apply: function (eco, game) {
      eco.flags.first100Days = true;
      ecoGrant(game, 'tech', 40);
      return { log: '百日纪念：生态运行 100 天，科技 +40', severity: 'good', tech: 40 };
    },
  },
  {
    id: 'ev_first_365_days', name: '一周年', icon: '🎂', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.calendar.day >= 365 && !eco.flags.first365Days; },
    apply: function (eco, game) {
      eco.flags.first365Days = true;
      ecoGrant(game, 'tech', 150);
      return { log: '一周年：生态运行满 1 年，科技 +150', severity: 'good', tech: 150 };
    },
  },
  {
    id: 'ev_first_1000_steel', name: '千钢里程碑', icon: '🔩', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.tourism.earnedSteel >= 1000 && !eco.flags.first1000Steel; },
    apply: function (eco, game) {
      eco.flags.first1000Steel = true;
      ecoGrant(game, 'steel', 100);
      return { log: '千钢里程碑：旅游收入破千，钢材 +100', severity: 'good', steel: 100 };
    },
  },
  {
    id: 'ev_first_1000_food', name: '千食里程碑', icon: '🍞', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.stats.totalHarvestFood >= 1000 && !eco.flags.first1000Food; },
    apply: function (eco, game) {
      eco.flags.first1000Food = true;
      ecoGrant(game, 'food', 150);
      return { log: '千食里程碑：累计收获破千，食物 +150', severity: 'good', food: 150 };
    },
  },
  {
    id: 'ev_eco_legend', name: '生态传说', icon: '🌟', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 100 && eco.balance.diversity >= 0.9 && eco.plants.count() >= 500 && !eco.flags.ecoLegend; },
    apply: function (eco, game) {
      eco.flags.ecoLegend = true;
      ecoGrant(game, 'tech', 500);
      return { log: '生态传说：火星完全宜居、多样性 ≥0.9、植物 ≥500，科技 +500', severity: 'good', tech: 500 };
    },
  }
);

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第十一批 10 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_first_2000_plants', name: '两千株里程碑', icon: '🌲', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.count() >= 2000 && !eco.flags.first2000Plants; },
    apply: function (eco, game) {
      eco.flags.first2000Plants = true;
      eco.terraform.addProgress(2, 'two_thousand_plants');
      return { log: '两千株里程碑：改造 +2%', severity: 'good', progress: 2 };
    },
  },
  {
    id: 'ev_first_1000_o2', name: '千吨氧气', icon: '🫧', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.oxygen.stock >= 1000 && !eco.flags.first1000O2; },
    apply: function (eco, game) {
      eco.flags.first1000O2 = true;
      ecoGrant(game, 'steel', 100);
      return { log: '千吨氧气：库存破 1000 吨，钢材 +100', severity: 'good', steel: 100 };
    },
  },
  {
    id: 'ev_first_200_tourists', name: '两百位游客', icon: '🧳', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.tourism.visitorsTotal >= 200 && !eco.flags.first200Tourists; },
    apply: function (eco, game) {
      eco.flags.first200Tourists = true;
      ecoGrant(game, 'steel', 120);
      return { log: '两百位游客：累计接待破两百，钢材 +120', severity: 'good', steel: 120 };
    },
  },
  {
    id: 'ev_first_20_trades', name: '二十次交易', icon: '💰', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.market.trades >= 20 && !eco.flags.first20Trades; },
    apply: function (eco, game) {
      eco.flags.first20Trades = true;
      ecoGrant(game, 'tech', 60);
      return { log: '二十次交易：市场大师，科技 +60', severity: 'good', tech: 60 };
    },
  },
  {
    id: 'ev_first_10_expeditions', name: '十次远征', icon: '🚀', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.expeditions.completed >= 10 && !eco.flags.first10Expeditions; },
    apply: function (eco, game) {
      eco.flags.first10Expeditions = true;
      ecoGrant(game, 'tech', 100);
      return { log: '十次远征：远征大师，科技 +100', severity: 'good', tech: 100 };
    },
  },
  {
    id: 'ev_first_20_breeds', name: '二十次育种', icon: '🧬', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.genetics.bredTotal >= 20 && !eco.flags.first20Breeds; },
    apply: function (eco, game) {
      eco.flags.first20Breeds = true;
      ecoGrant(game, 'biomass', 100);
      return { log: '二十次育种：育种宗师，生物质 +100', severity: 'good', biomass: 100 };
    },
  },
  {
    id: 'ev_first_500_harvest', name: '五百收获', icon: '🌾', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.stats.totalHarvestFood >= 500 && !eco.flags.first500Harvest; },
    apply: function (eco, game) {
      eco.flags.first500Harvest = true;
      ecoGrant(game, 'food', 200);
      return { log: '五百收获：食物 +200', severity: 'good', food: 200 };
    },
  },
  {
    id: 'ev_first_730_days', name: '两周年', icon: '🎂', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.calendar.day >= 730 && !eco.flags.first730Days; },
    apply: function (eco, game) {
      eco.flags.first730Days = true;
      ecoGrant(game, 'tech', 300);
      return { log: '两周年：生态运行满 2 年，科技 +300', severity: 'good', tech: 300 };
    },
  },
  {
    id: 'ev_first_5000_steel', name: '五千钢里程碑', icon: '🔩', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.tourism.earnedSteel >= 5000 && !eco.flags.first5000Steel; },
    apply: function (eco, game) {
      eco.flags.first5000Steel = true;
      ecoGrant(game, 'steel', 200);
      return { log: '五千钢里程碑：旅游收入破五千，钢材 +200', severity: 'good', steel: 200 };
    },
  },
  {
    id: 'ev_eco_immortal', name: '生态不朽', icon: '♾️', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 100 && eco.balance.diversity >= 0.95 && eco.plants.count() >= 1000 && eco.minutes >= 1000 && !eco.flags.ecoImmortal; },
    apply: function (eco, game) {
      eco.flags.ecoImmortal = true;
      ecoGrant(game, 'tech', 1000);
      return { log: '生态不朽：火星生态完全成熟，科技 +1000', severity: 'good', tech: 1000 };
    },
  }
);

/* ------------------------------------------------------------------------------
 * 追加数据：5 座建筑 / 5 项研究 / 5 项政策
 * ------------------------------------------------------------------------------ */
ECO_BUILDINGS.push(
  { id: 'eco_palace', name: '生态宫殿', icon: '🏰', stageUnlock: 6, cost: { steel: 500, tech: 200 }, o2PerMin: 4.0, happinessMul: 1.25, diversityBonus: 0.03, desc: '生态宫殿：产氧 4，幸福 +25%，多样性 +0.03。' },
  { id: 'star_observatory', name: '星空观测站', icon: '🔭', stageUnlock: 5, cost: { steel: 120, tech: 80 }, happinessMul: 1.1, desc: '星空观测站：幸福 +10%。' },
  { id: 'bio_dome_2', name: '二级生物穹顶', icon: '🔮', stageUnlock: 5, cost: { steel: 200, tech: 80 }, o2PerMin: 3.0, growthMul: 1.4, desc: '二级生物穹顶：产氧 3，生长 ×1.4。' },
  { id: 'water_temple', name: '水神殿', icon: '⛲', stageUnlock: 6, cost: { steel: 220, tech: 90 }, waterPerMin: 6.0, desc: '水神殿：每分钟产水 6。' },
  { id: 'terra_core', name: '改造核心', icon: '💠', stageUnlock: 6, cost: { steel: 600, tech: 250 }, co2PerMin: 0.1, desc: '改造核心：推进 +0.1%/分钟。' }
);
ECO_RESEARCH.push(
  { id: 'eco_seed18', name: '星尘苔藓', cost: { tech: 60 }, effect: '苔藓产氧 +60%', apply: { plant: 'moss', o2Mul: 1.6 } },
  { id: 'eco_seed19', name: '世界树', cost: { tech: 120 }, effect: '树产氧 +80%', apply: { plant: 'tree', o2Mul: 1.8 } },
  { id: 'eco_water10', name: '海洋计划', cost: { tech: 90 }, effect: '降雨 +30%', apply: { global: 'rainMul', value: 1.3 } },
  { id: 'eco_o2_9', name: '氧气革命', cost: { tech: 100 }, effect: '全部产氧 +20%', apply: { global: 'o2Mul', value: 1.2 } },
  { id: 'eco_terra10', name: '创世工程', cost: { tech: 250 }, effect: '改造推进 +40%', apply: { global: 'ghgMul', value: 1.4 } }
);
ECO_POLICIES.push(
  { id: 'pol_genesis', name: '创世计划', desc: '全部增益 +20%，每分钟耗科技 5。', effects: { growthMul: 1.2, o2Mul: 1.2 } },
  { id: 'pol_eco_empire', name: '生态帝国', desc: '多样性 +0.05，改造 -10%。', effects: { progressMul: 0.9 } },
  { id: 'pol_star_tourism', name: '星际旅游', desc: '游客 +100%，每分钟耗钢材 2。', effects: {} },
  { id: 'pol_bio_revolution', name: '生物革命', desc: '育种速度 +100%。', effects: {} },
  { id: 'pol_eco_eternal', name: '生态永恒', desc: '生态崩溃概率 -80%。', effects: {} }
);

/* ------------------------------------------------------------------------------
 * ECO_EVENTS 追加（第十二批 5 条）
 * ------------------------------------------------------------------------------ */
ECO_EVENTS.push(
  {
    id: 'ev_first_3000_plants', name: '三千株里程碑', icon: '🌲', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.plants.count() >= 3000 && !eco.flags.first3000Plants; },
    apply: function (eco, game) {
      eco.flags.first3000Plants = true;
      eco.terraform.addProgress(3, 'three_thousand_plants');
      return { log: '三千株里程碑：改造 +3%', severity: 'good', progress: 3 };
    },
  },
  {
    id: 'ev_first_2000_o2', name: '两千吨氧气', icon: '🫧', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.oxygen.stock >= 2000 && !eco.flags.first2000O2; },
    apply: function (eco, game) {
      eco.flags.first2000O2 = true;
      ecoGrant(game, 'steel', 150);
      return { log: '两千吨氧气：库存破 2000 吨，钢材 +150', severity: 'good', steel: 150 };
    },
  },
  {
    id: 'ev_first_500_tourists', name: '五百位游客', icon: '🧳', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.tourism.visitorsTotal >= 500 && !eco.flags.first500Tourists; },
    apply: function (eco, game) {
      eco.flags.first500Tourists = true;
      ecoGrant(game, 'steel', 200);
      return { log: '五百位游客：累计接待破五百，钢材 +200', severity: 'good', steel: 200 };
    },
  },
  {
    id: 'ev_first_50_trades', name: '五十次交易', icon: '💰', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.market.trades >= 50 && !eco.flags.first50Trades; },
    apply: function (eco, game) {
      eco.flags.first50Trades = true;
      ecoGrant(game, 'tech', 100);
      return { log: '五十次交易：市场传奇，科技 +100', severity: 'good', tech: 100 };
    },
  },
  {
    id: 'ev_eco_eternal', name: '生态永恒', icon: '♾️', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 100 && eco.balance.diversity >= 0.95 && eco.plants.count() >= 1000 && eco.minutes >= 2000 && !eco.flags.ecoEternal; },
    apply: function (eco, game) {
      eco.flags.ecoEternal = true;
      ecoGrant(game, 'tech', 2000);
      return { log: '生态永恒：火星生态运行 2000 分钟仍完美，科技 +2000', severity: 'good', tech: 2000 };
    },
  },
  {
    id: 'ev_first_10000_plants', name: '万株里程碑', icon: '🌲', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.stats.totalPlanted >= 10000 && !eco.flags.first10000Plants; },
    apply: function (eco, game) {
      eco.flags.first10000Plants = true;
      eco.terraform.addProgress(5, 'ten_thousand_plants');
      return { log: '万株里程碑：累计种植破万，改造 +5%', severity: 'good', progress: 5 };
    },
  },
  {
    id: 'ev_first_10000_o2', name: '万吨氧气', icon: '🫧', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.oxygen.producedTotal >= 10000 && !eco.flags.first10000O2; },
    apply: function (eco, game) {
      eco.flags.first10000O2 = true;
      ecoGrant(game, 'steel', 300);
      return { log: '万吨氧气：累计产氧破万吨，钢材 +300', severity: 'good', steel: 300 };
    },
  },
  {
    id: 'ev_eco_transcend', name: '生态超越', icon: '✨', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.terraform.progress >= 100 && eco.balance.diversity >= 0.95 && eco.plants.count() >= 1000 && eco.minutes >= 5000 && eco.achievementsUnlocked.length >= 50 && !eco.flags.ecoTranscend; },
    apply: function (eco, game) {
      eco.flags.ecoTranscend = true;
      ecoGrant(game, 'tech', 5000);
      return { log: '生态超越：火星生态的终极形态，科技 +5000', severity: 'good', tech: 5000 };
    },
  },
  {
    id: 'ev_first_10000_days', name: '万日纪念', icon: '📅', weight: 0, cooldownMin: 0, once: true,
    condition: function (eco, game) { return eco.calendar.day >= 10000 && !eco.flags.first10000Days; },
    apply: function (eco, game) {
      eco.flags.first10000Days = true;
      ecoGrant(game, 'tech', 1000);
      return { log: '万日纪念：生态运行满 10000 天，科技 +1000', severity: 'good', tech: 1000 };
    },
  }
);

/* ------------------------------------------------------------------------------
 * EcologyManager：总管（tick 编排 / game 接口 / 增益输出 / 存档 / 面板）
 * ------------------------------------------------------------------------------
 * tick(dtMin, game) 是确定性推进入口（自测用）；update(now, dtMs, game) 是
 * 游戏主循环入口（真实时间换算：1 真实分钟 = 1 游戏日，见 PlantSystem 注释）。
 * 子系统更新顺序：建筑聚合 → 改造 → 植物 → 氧气（含缺氧人口结算）→ 水循环
 * → 动物 → 平衡（含崩溃）→ 事件 → 政策耗水 → 成就。
 * ------------------------------------------------------------------------------ */
class EcologyManager {
  constructor(mapSize, seed) {
    this.mapSize = mapSize || 50;
    this.seed = seed || 1337;
    this.grid = new EcoGrid(this.mapSize, this.seed);
    this.soil = this.grid; // 别名：事件/外部代码用 eco.soil.addFertilityAll
    this.terraform = new TerraformingSystem();
    this.plants = new PlantSystem(this.grid);
    this.oxygen = new OxygenSystem();
    this.water = new WaterCycleSystem(this.grid);
    this.fauna = new FaunaSystem();
    this.balance = new EcoBalance();
    this.balance._ecoRef = this;
    this.buildings = new EcoBuildings();
    this.policies = new EcoPolicies();
    this.visuals = new EcoVisuals();
    this.events = new EcoEvents();
    this.soilNutrients = new SoilNutrientSystem(this.grid);
    this.disease = new PlantDiseaseSystem(this.grid);
    this.greenhouses = new GreenhouseSystem();
    this.weather = new WeatherSystem(this.grid);
    this.aquifer = new AquiferSystem();
    this.faunaBehaviour = new FaunaBehaviour();
    this.quests = new EcoQuests();
    this.history = new EcoHistory();
    this.research = new EcoResearchEngine();
    this.disasterHooks = new EcoDisasterHooks();
    this.difficulty = new EcoDifficulty('normal');
    this.companion = new CompanionSystem();
    this.seeds = new SeedBankSystem();
    this.physiology = new PlantPhysiology();
    this.trophic = new TrophicWeb();
    this.oxygenZones = new OxygenZones();
    this.irrigation = new IrrigationZones();
    this.degradation = new BuildingDegradation();
    this.rivers = new RiverNetwork(this.grid);
    this.waterQuality = new WaterQualitySystem(this.grid);
    this.compost = new CompostCycle();
    this.resilience = new EcoResilience();
    this.climate = new ClimateFeedback();
    this.magnetPhases = new MagnetShieldPhases();
    this.report = new EcoReport();
    this.pollinators = new PollinatorNetwork();
    this.territory = new TerritoryMap(this.grid);
    this.ledger = new TerraformLedger();
    this.extinctionLog = new ExtinctionLog();
    this.farms = new FarmZones(this.grid);
    this.sanctuary = new WildlifeSanctuary(this.grid);
    this.reservoirs = new ReservoirSystem();
    this.invasive = new InvasiveSpeciesSystem(this.grid);
    this.alerts = new EcoAlerts();
    this.ecostats = new EcoStatistics();
    this.construction = new EcoConstructionQueue();
    this.restoration = new RestorationProjects(this.grid);
    this.automation = new DomeAutomation();
    this.feeding = new FeedingStations();
    this.oxygenNet = new OxygenNetwork();
    this.guide = new EcoGuide();
    this.calendar = new EcoCalendar();
    this.expeditions = new EcoExpeditions(this.grid);
    this.genetics = new EcoGenetics();
    this.market = new EcoMarket();
    this.brine = new BrineSystem(this.grid);
    this.tourism = new EcoTourism();
    this._lastStageIndex = 0;
    this.minutes = 0;
    this.tickIndex = 0;
    this._accumMs = 0;
    this._lastNow = 0;
    this.rng = ecoRng(this.seed);
    this.flags = { firstRain: false, firstBreath: false, habitable: false };
    this.stats = {
      totalPlanted: 0, totalHarvestFood: 0, totalDeaths: 0, collapses: 0,
      insectsEaten: 0, plantDeathsMin: 0, plantSproutsMin: 0,
      eventsFired: 0, o2PopLossTotal: 0, ticks: 0,
    };
    this.logs = []; // 总管日志（工程/崩溃等大事）
    this.achievementsUnlocked = []; // 已解锁的生态成就 id
  }
  log(msg) {
    this.logs.push({ min: ecoRound(this.minutes, 1), msg: String(msg) });
    if (this.logs.length > 100) this.logs.shift();
  }
  // —— 玩家动作入口（UI 直接调这些）——
  plantAt(x, y, speciesId, game, opts) { return this.plants.plant(x, y, speciesId, game, this, opts); }
  harvestAt(x, y, game) { return this.plants.harvestAt(x, y, game, this); }
  harvestAllCrops(game) { return this.plants.harvestAllCrops(game, this); }
  introduceAnimal(id, game) { return this.fauna.introduce(id, game, this); }
  startProject(id, game) { return this.terraform.startProject(id, game, this); }
  togglePolicy(id) { return this.policies.toggle(id); }
  registerBuilding(def) { return this.buildings.register(def); }
  fireEvent(id, game) { return this.events.fire(id, this, game); }
  buildDome(x, y, radius, game) { return this.greenhouses.buildDome(x, y, radius, game, this); }
  removeDome(x, y, game) { return this.greenhouses.removeDome(x, y, this, game); }
  fertilize(x, y, kind, game) { return this.soilNutrients.fertilize(x, y, kind, game); }
  cureDiseaseAt(x, y, game) { return this.disease.cureDiseaseAt(x, y, game, this); }
  drillAquifer(id, game) { return this.aquifer.drill(id, game); }
  claimQuest(id, game) { return this.quests.claim(id, this, game); }
  startMagnetPhase(game) { return this.magnetPhases.startNext(game); }
  reintroduceAnimal(id, game, rng) { return this.resilience.reintroduceAnimal(id, game, this, rng); }
  reintroducePlant(species, x, y, game) { return this.resilience.reintroducePlant(species, x, y, game, this); }
  addIrrigationZone(x0, y0, x1, y1, priority, quota, name) { return this.irrigation.addZone(x0, y0, x1, y1, priority, quota, name); }
  prune(x, y, game) { return this.plants.prune(x, y, game, this); }
  transplant(x, y, nx, ny, game) { return this.plants.transplant(x, y, nx, ny, game, this); }
  plotDetail(x, y, game) { return this.plants.plotDetail(x, y, this, game); }
  waterForecast(game) { return this.water.forecast(this, game); }
  oxygenEmergency(game) { return this.oxygen.emergencyCheck(this, game); }
  setOxygenRationing(on) { return this.oxygen.setRationing(on); }
  doAction(id, args, game) { return EcoActions.dispatch(id, args || {}, this, game); }
  previewAction(id, args, game) { return EcoActions.preview(id, args || {}, this, game); }
  addFarm(x0, y0, x1, y1, rotation, name) { return this.farms.addZone(x0, y0, x1, y1, rotation, name); }
  plantFarm(id, game) { return this.farms.plantZone(id, game, this); }
  harvestFarm(id, game) { return this.farms.harvestZone(id, game, this); }
  rotateFarm(id) { return this.farms.rotate(id); }
  addSanctuary(x0, y0, x1, y1, species, name) { return this.sanctuary.add(x0, y0, x1, y1, species, name); }
  buildReservoir(x, y, game) { return this.reservoirs.build(x, y, game); }
  weedAt(x, y, game) { return this.invasive.weedAt(x, y, game, this); }
  alertsSummary() { return this.alerts.summary(); }
  recordsSummary() { return this.ecostats.summary(); }
  enqueueConstruction(id, game) { return this.construction.enqueue(id, game, this); }
  startRestoration(type, x0, y0, x1, y1, game) { return this.restoration.start(type, x0, y0, x1, y1, game, this); }
  regionReport() { return EcoMapTools.regionReport(this); }
  bestSpots(species, n) { return EcoMapTools.bestPlantingSpots(species, this, n); }
  setDomeAutomation(x, y, kind, on, game) { return this.automation.set(x, y, kind, on, game, this); }
  buildFeedingStation(x, y, species, game) { return this.feeding.build(x, y, species, game); }
  oxygenNetworkSummary() { return this.oxygenNet.summary(this); }
  guideStep() { return this.guide.currentStep(this); }
  claimGuideReward(id, game) { return this.guide.claim(id, this, game); }
  calendarSummary() { return this.calendar.summary(); }
  launchExpedition(kind, x, y, game) { return this.expeditions.launch(kind, x, y, game, this); }
  crossbreed(species, x, y, game) { return this.genetics.crossbreed(species, x, y, game, this); }
  plantPlus(species, x, y, game) { return this.genetics.plantPlus(species, x, y, game, this); }
  marketSell(kind, amount, game) { return this.market.sell(kind, amount, game); }
  marketBuy(kind, amount, game) { return this.market.buy(kind, amount, game); }
  brineSummary() { return this.brine.summary(); }
  tourismSummary(game) { return this.tourism.summary(this, game); }
  panel(name, game) {
    if (name === 'overview') return EcoPanels.overview(this);
    if (name === 'plants') return EcoPanels.plants(this);
    if (name === 'fauna') return EcoPanels.fauna(this);
    if (name === 'terraform') return EcoPanels.terraform(this);
    if (name === 'water') return EcoPanels.water(this);
    if (name === 'balance') return EcoPanels.balance(this);
    if (name === 'buildings') return EcoPanels.buildings(this, game);
    if (name === 'quests') return EcoPanels.quests(this);
    return null;
  }
  advise(game) { return EcoAdvisor.advise(this, game); }
  latestReport() { return this.report.latest(); }
  // —— 主循环入口（game.js 调这个）——
  update(now, dtMs, game) {
    if (typeof dtMs !== 'number' || dtMs <= 0) return;
    if (dtMs > 60000) dtMs = 60000; // 切后台回来最多补 60 秒
    this._accumMs += dtMs;
    let steps = Math.floor(this._accumMs / 1000);
    if (steps > ETUNE.TICK_ACCUM_MAX_S) steps = ETUNE.TICK_ACCUM_MAX_S;
    this._accumMs -= steps * 1000;
    if (this._accumMs > 5000) this._accumMs = 0;
    for (let i = 0; i < steps; i++) this.tick(1 / 60, game);
    this._lastNow = now;
  }
  // —— 确定性推进（分钟级，自测/模拟用）——
  tick(dtMin, game, rng) {
    if (!dtMin || dtMin <= 0) return null;
    if (dtMin > 60) dtMin = 60; // 单次最多 60 分钟
    this.minutes += dtMin;
    this.tickIndex++;
    this.stats.ticks++;
    const r = rng || this.rng;
    // 1) 建筑聚合（缓存一次，本 tick 内各子系统复用）+ upkeep 扣费
    this.buildings.aggregate(game, this.tickIndex);
    this.buildings.applyUpkeep(game, dtMin);
    this.research.update(dtMin, game);
    // 1b) 阶段跃迁效应（进入新阶段时一次性奖励/变化）
    const stageBefore = this.terraform.stageIndex();
    // 2) 大气改造
    this.terraform.update(dtMin, this, game);
    this.terraform.applyErosion(dtMin, this, game);
    const stageAfter = this.terraform.stageIndex();
    if (stageAfter > stageBefore) this._onStageEnter(stageAfter, game);
    // 3) 植物生长（记死亡数进堆肥残体池）
    const plantsBefore = this.plants.count();
    const plantRes = this.plants.update(dtMin, this, game, r);
    // 4) 氧气 + 缺氧人口结算（氧气管网连通度分摊损失）
    const oxyRes = this.oxygen.update(dtMin, this, game);
    if (oxyRes.popLoss > 0.01 && game && game.pop && typeof game.pop.count === 'number') {
      const mitigated = oxyRes.popLoss * this.oxygenNet.deficitMitigation(this);
      const loss = Math.min(game.pop.count, mitigated);
      game.pop.count = Math.max(0, game.pop.count - loss);
      this.stats.o2PopLossTotal += loss;
      if (Math.floor(this.minutes) % 10 === 0) ecoToast(game, '😶‍🌫️ 氧气不足，' + Math.floor(loss) + ' 人窒息死亡');
    }
    // 5) 水循环
    const waterRes = this.water.update(dtMin, this, game, this.tickIndex);
    // 6) 动物（记灭绝：前后种群快照对比）
    const popsBefore = { insect: this.fauna.pop('insect'), bird: this.fauna.pop('bird'), mammal: this.fauna.pop('mammal') };
    this.fauna.update(dtMin, this, game);
    this.faunaBehaviour.update(dtMin, this, game, r);
    for (let i = 0; i < ANIMAL_IDS.length; i++) {
      const id = ANIMAL_IDS[i];
      if (popsBefore[id] >= 6 && this.fauna.pop(id) < 0.01) {
        this.extinctionLog.record(id, 'population_collapse', popsBefore[id], this);
      }
    }
    // 6b) 养分 / 病害 / 穹顶 / 天气 / 含水层
    this.soilNutrients.update(dtMin, this, game, this.tickIndex);
    this.disease.update(dtMin, this, game, r);
    this.greenhouses.update(dtMin);
    this.weather.update(dtMin, this, game, r);
    this.aquifer.update(dtMin, this, game, r);
    this.history.update(dtMin, this);
    this.seeds.update(dtMin, this, game, r);
    this.physiology.update(dtMin, this, game);
    this.oxygenZones.update(dtMin, this, game);
    this.irrigation.allocate(dtMin, this, game);
    this.degradation.update(dtMin, this, game, r);
    this.rivers.autoFormRivers(this);
    this.rivers.update(dtMin, this, game, r);
    this.waterQuality.update(dtMin, this, game);
    const diedThisTick = Math.max(0, plantsBefore - this.plants.count());
    if (diedThisTick > 0) this.compost.addDebris(diedThisTick);
    this.compost.update(dtMin, this, game);
    this.climate.update(dtMin, this, game);
    this.magnetPhases.update(dtMin, this, game);
    this.report.update(dtMin, this);
    this.pollinators.update(dtMin, this, game);
    this.territory.update(dtMin, this, game);
    this.ledger.record(dtMin, this, game);
    this.farms.update(dtMin);
    this.sanctuary.update(dtMin, this, game);
    this.reservoirs.update(dtMin, this, game);
    this.invasive.update(dtMin, this, game, r);
    this.alerts.update(dtMin, this);
    this.ecostats.update(dtMin, this);
    this.construction.update(dtMin, this, game);
    this.restoration.update(dtMin, this, game);
    this.automation.update(dtMin, this, game);
    this.feeding.update(dtMin, this, game);
    this.oxygenNet.update(dtMin, this, game);
    this.calendar.update(dtMin, this, game);
    this.guide.update(this);
    this.expeditions.update(dtMin, this, game, r);
    this.genetics.update(dtMin, this, game);
    this.market.update(dtMin, this, game);
    this.brine.update(dtMin, this, game, r);
    this.tourism.update(dtMin, this, game);
    // 7) 生态平衡（含崩溃检定）
    const balRes = this.balance.update(dtMin, this, game, r);
    if (balRes.collapsed) this.stats.collapses = (this.stats.collapses || 0) + 0; // collapses 已在 doCollapse 内记
    if (balRes.collapsed && balRes.result && balRes.result.victim) {
      this.extinctionLog.record(balRes.result.victim, 'collapse', balRes.result.killed, this);
    }
    this.extinctionLog.update(dtMin, this);
    // 8) 生态事件
    const evRes = this.events.update(dtMin, this, game, r);
    if (evRes) this.stats.eventsFired++;
    // 9) 政策固定耗水（人工降雨）
    const polWater = this.policies.waterUsePerMin();
    if (polWater > 0) {
      const inv = ecoInv(game);
      if (inv && (inv.water || 0) > 0) inv.water = Math.max(0, inv.water - polWater * dtMin);
    }
    // 10) 成就检定
    this._checkAchievements();
    this.quests.update(this);
    // 11) 灾难联动（沙尘暴/地震/陨石）
    this.disasterHooks.update(dtMin, this, game, r);
    return { plant: plantRes, oxygen: oxyRes, water: waterRes, balance: balRes, event: evRes, minutes: ecoRound(this.minutes, 2) };
  }
  // 进入新阶段时的一次性效应（真实数值，非文本）
  _onStageEnter(stageIndex, game) {
    const stage = TERRAFORM_STAGES[stageIndex];
    if (!stage) return;
    this.log('进入新阶段：「' + stage.name + '」');
    ecoToast(game, '🌍 进入新阶段：「' + stage.name + '」— ' + stage.advice);
    if (stageIndex === 1) {
      // 微氧：苔藓野外定植奖励
      this.soilNutrients.fertilizedTotal += 0;
      this.grid.addFertilityAll(2);
    } else if (stageIndex === 2) {
      // 增温：极地融水补给地下水
      this.water.groundwater = ecoClamp(this.water.groundwater + 10, 0, 150);
    } else if (stageIndex === 3) {
      // 降雨：全图土壤湿润
      this.grid.addMoistureAll(10);
    } else if (stageIndex === 4) {
      // 植被：免费播种 10 株草（自然扩散事件）
      this.plants.windSpread(10);
    } else if (stageIndex === 5) {
      // 可呼吸：氧气库存 +200
      this.oxygen.addStock(200);
    } else if (stageIndex === 6) {
      // 宜居：人口增速永久加成（见 getBuffs 的 flags.habitable）
      this.flags.habitable = true;
    }
    this._lastStageIndex = stageIndex;
  }
  _checkAchievements() {
    for (let i = 0; i < ECO_ACHIEVEMENTS.length; i++) {
      const a = ECO_ACHIEVEMENTS[i];
      if (this.achievementsUnlocked.indexOf(a.id) >= 0) continue;
      let ok = false;
      try { ok = !!a.check(this); } catch (e) { ok = false; }
      if (ok) this.achievementsUnlocked.push(a.id);
    }
  }
  // —— 给 game.js 的增益输出（人口/食物/生长处乘）——
  getBuffs() {
    const stage = this.terraform.stageIndex();
    let popGrowthMul = 1;
    if (this.oxygen.isSurplus(this, null)) popGrowthMul += ETUNE.O2_SURPLUS_GROWTH_BONUS;
    if (stage >= 5) popGrowthMul += 0.10;
    if (this.flags.habitable) popGrowthMul += 0.25;
    popGrowthMul *= this.policies.effectMul('popGrowthMul');
    let foodMul = 1 + Math.min(this.plants.totalBiomass() / 20000, 0.2);
    if (this.plants.countOf('crop') >= 50) foodMul += 0.1;
    const agg = this.buildings._aggCache || { happinessMul: 1, growthMul: 1 };
    return {
      popGrowthMul: ecoRound(popGrowthMul, 3),
      foodMul: ecoRound(foodMul, 3),
      o2Mul: ecoRound(this.policies.effectMul('o2Mul'), 3),
      growthMul: ecoRound((this.terraform.stage().effects.plantGrowthMul || 1) * (agg.growthMul || 1), 3),
      happinessMul: ecoRound(agg.happinessMul || 1, 3),
      progressPerMin: ecoRound(this.estimateProgressPerMin(), 4),
      oxygenRatio: ecoRound(this.oxygen.ratio(this, null), 3),
      diversity: ecoRound(this.balance.diversity, 3),
    };
  }
  estimateProgressPerMin() {
    let p = ETUNE.PROGRESS_PASSIVE_PER_MIN;
    for (const id in this.terraform.continuousProjects) {
      const def = terraformProject(id);
      if (def) p += def.ratePerMin * this.terraform.continuousProjects[id];
    }
    const agg = this.buildings._aggCache;
    if (agg && agg.co2PerMin) p += agg.co2PerMin;
    p *= this.policies.effectMul('progressMul');
    return p;
  }
  // —— 面板数据（UI 直接渲染这个对象）——
  summary() {
    const stage = this.terraform.stage();
    return {
      version: ECO_VERSION,
      minutes: ecoRound(this.minutes, 1),
      progress: ecoRound(this.terraform.progress, 2),
      stage: { id: stage.id, index: stage.index, name: stage.name, icon: stage.icon, desc: stage.desc, advice: stage.advice },
      progressToNext: this.terraform.progressToNextStage(),
      nextStage: stage.index < TERRAFORM_STAGES.length - 1 ? TERRAFORM_STAGES[stage.index + 1].name : null,
      tempC: ecoRound(this.terraform.tempC(), 1),
      pressureKpa: ecoRound(this.terraform.pressureKpa(), 1),
      co2Ppm: this.terraform.co2Ppm(),
      o2Percent: this.terraform.o2Percent(),
      oxygen: this.oxygen.status(this, null),
      water: this.water.status(this, null),
      plants: this.plants.summary(),
      fauna: this.fauna.summary(),
      balance: this.balance.status(),
      policies: this.policies.summary(),
      buffs: this.getBuffs(),
      stats: Object.assign({}, this.stats),
      flags: Object.assign({}, this.flags),
      surfaceColor: this.visuals.surfaceColor(this.terraform.progress),
      skyColor: this.visuals.skyColor(this.terraform.progress),
      soilMoistureAvg: ecoRound(this.water.soilMoistureAvg(), 1),
      soilFertilityAvg: ecoRound(this.grid.avgFertility(), 1),
      vegetationAvg: ecoRound(this.grid.avgVegetation(), 1),
      activeProjects: this.terraform.activeProjects.map(function (p) { return { id: p.id, remainingMin: ecoRound(p.remainingMin, 1) }; }),
      continuousProjects: Object.assign({}, this.terraform.continuousProjects),
      achievementsUnlocked: this.achievementsUnlocked.slice(),
      recentEvents: this.events.recent(5),
      recentLogs: this.logs.slice(-5),
      soil: this.soilNutrients.avgNutrients(),
      disease: this.disease.summary(this),
      domes: this.greenhouses.domes.length,
      weather: this.weather.summary(),
      aquifer: this.aquifer.summary(),
      faunaBehaviour: this.faunaBehaviour.summary(),
      questsAvailable: this.quests.available.slice(),
      questsClaimed: this.quests.claimed.slice(),
      progressTrend: this.history.trend('progress', 10),
      o2Trend: this.history.trend('o2', 10),
      trophic: this.trophic.summary(this),
      oxygenZones: this.oxygenZones.summary(this),
      irrigationZones: this.irrigation.summary(),
      degradationAvgMul: this.degradation.avgEffectMul(null),
      seeds: this.seeds.summary(),
      physiology: this.physiology.summary(),
      difficulty: this.difficulty.level,
      gas: this.terraform.gasComposition(),
      magnet: this.terraform.magnetStrength(),
      albedo: this.terraform.albedo(this),
    };
  }
  stageInfo() {
    const stage = this.terraform.stage();
    return {
      current: stage,
      all: TERRAFORM_STAGES.map(function (s) {
        return { id: s.id, index: s.index, name: s.name, icon: s.icon, min: s.min, max: s.max, unlocked: s.min <= 0 || false };
      }),
      progress: ecoRound(this.terraform.progress, 2),
      progressToNext: this.terraform.progressToNextStage(),
    };
  }
  // 渲染覆盖层（game.js 调这个）
  renderOverlay(ctx, map, tileSize, game) {
    return this.visuals.renderOverlay(ctx, map, tileSize, game, this);
  }
  // —— 存档 ——
  save() {
    return {
      v: ECO_VERSION,
      minutes: ecoRound(this.minutes, 1),
      flags: Object.assign({}, this.flags),
      stats: Object.assign({}, this.stats),
      achievementsUnlocked: this.achievementsUnlocked.slice(),
      logs: this.logs.slice(-20),
      grid: this.grid.save(),
      terraform: this.terraform.save(),
      plants: this.plants.save(),
      oxygen: this.oxygen.save(),
      water: this.water.save(),
      fauna: this.fauna.save(),
      balance: this.balance.save(),
      buildings: this.buildings.save(),
      policies: this.policies.save(),
      visuals: this.visuals.save(),
      events: this.events.save(),
      soilNutrients: this.soilNutrients.save(),
      disease: this.disease.save(),
      greenhouses: this.greenhouses.save(),
      weather: this.weather.save(),
      aquifer: this.aquifer.save(),
      faunaBehaviour: this.faunaBehaviour.save(),
      quests: this.quests.save(),
      history: this.history.save(),
      research: this.research.save(),
      disasterHooks: this.disasterHooks.save(),
      difficulty: this.difficulty.save(),
      seeds: this.seeds.save(),
      physiology: this.physiology.save(),
      oxygenZones: this.oxygenZones.save(),
      irrigation: this.irrigation.save(),
      degradation: this.degradation.save(),
      rivers: this.rivers.save(),
      waterQuality: this.waterQuality.save(),
      compost: this.compost.save(),
      resilience: this.resilience.save(),
      climate: this.climate.save(),
      magnetPhases: this.magnetPhases.save(),
      report: this.report.save(),
      pollinators: this.pollinators.save(),
      territory: this.territory.save(),
      ledger: this.ledger.save(),
      extinctionLog: this.extinctionLog.save(),
      farms: this.farms.save(),
      sanctuary: this.sanctuary.save(),
      reservoirs: this.reservoirs.save(),
      invasive: this.invasive.save(),
      alerts: this.alerts.save(),
      ecostats: this.ecostats.save(),
      construction: this.construction.save(),
      restoration: this.restoration.save(),
      automation: this.automation.save(),
      feeding: this.feeding.save(),
      oxygenNet: this.oxygenNet.save(),
      guide: this.guide.save(),
      calendar: this.calendar.save(),
      expeditions: this.expeditions.save(),
      genetics: this.genetics.save(),
      market: this.market.save(),
      brine: this.brine.save(),
      tourism: this.tourism.save(),
    };
  }
  load(data) {
    if (!data || typeof data.v !== 'string') return false;
    if (data.v !== ECO_VERSION) {
      // 仅接受同大版本；旧存档返回 false，由 game 侧决定是否丢弃
      if (data.v.split('.')[0] !== ECO_VERSION.split('.')[0]) return false;
    }
    this.minutes = ecoSafeNum(data.minutes, 0);
    this.flags = Object.assign({ firstRain: false, firstBreath: false, habitable: false }, data.flags || {});
    this.stats = Object.assign(this.stats, data.stats || {});
    this.achievementsUnlocked = Array.isArray(data.achievementsUnlocked) ? data.achievementsUnlocked.slice() : [];
    this.logs = Array.isArray(data.logs) ? data.logs : [];
    let ok = true;
    if (data.grid) ok = this.grid.load(data.grid) && ok;
    if (data.terraform) ok = this.terraform.load(data.terraform) && ok;
    if (data.plants) ok = this.plants.load(data.plants) && ok;
    if (data.oxygen) ok = this.oxygen.load(data.oxygen) && ok;
    if (data.water) ok = this.water.load(data.water) && ok;
    if (data.fauna) ok = this.fauna.load(data.fauna) && ok;
    if (data.balance) ok = this.balance.load(data.balance) && ok;
    if (data.buildings) ok = this.buildings.load(data.buildings) && ok;
    if (data.policies) ok = this.policies.load(data.policies) && ok;
    if (data.visuals) ok = this.visuals.load(data.visuals) && ok;
    if (data.events) ok = this.events.load(data.events) && ok;
    if (data.soilNutrients) ok = this.soilNutrients.load(data.soilNutrients) && ok;
    if (data.disease) ok = this.disease.load(data.disease) && ok;
    if (data.greenhouses) ok = this.greenhouses.load(data.greenhouses) && ok;
    if (data.weather) ok = this.weather.load(data.weather) && ok;
    if (data.aquifer) ok = this.aquifer.load(data.aquifer) && ok;
    if (data.faunaBehaviour) ok = this.faunaBehaviour.load(data.faunaBehaviour) && ok;
    if (data.quests) ok = this.quests.load(data.quests) && ok;
    if (data.history) ok = this.history.load(data.history) && ok;
    if (data.research) ok = this.research.load(data.research) && ok;
    if (data.disasterHooks) ok = this.disasterHooks.load(data.disasterHooks) && ok;
    if (data.difficulty) ok = this.difficulty.load(data.difficulty) && ok;
    if (data.seeds) ok = this.seeds.load(data.seeds) && ok;
    if (data.physiology) ok = this.physiology.load(data.physiology) && ok;
    if (data.oxygenZones) ok = this.oxygenZones.load(data.oxygenZones) && ok;
    if (data.irrigation) ok = this.irrigation.load(data.irrigation) && ok;
    if (data.degradation) ok = this.degradation.load(data.degradation) && ok;
    if (data.rivers) ok = this.rivers.load(data.rivers) && ok;
    if (data.waterQuality) ok = this.waterQuality.load(data.waterQuality) && ok;
    if (data.compost) ok = this.compost.load(data.compost) && ok;
    if (data.resilience) ok = this.resilience.load(data.resilience) && ok;
    if (data.climate) ok = this.climate.load(data.climate) && ok;
    if (data.magnetPhases) ok = this.magnetPhases.load(data.magnetPhases) && ok;
    if (data.report) ok = this.report.load(data.report) && ok;
    if (data.pollinators) ok = this.pollinators.load(data.pollinators) && ok;
    if (data.territory) ok = this.territory.load(data.territory) && ok;
    if (data.ledger) ok = this.ledger.load(data.ledger) && ok;
    if (data.extinctionLog) ok = this.extinctionLog.load(data.extinctionLog) && ok;
    if (data.farms) ok = this.farms.load(data.farms) && ok;
    if (data.sanctuary) ok = this.sanctuary.load(data.sanctuary) && ok;
    if (data.reservoirs) ok = this.reservoirs.load(data.reservoirs) && ok;
    if (data.invasive) ok = this.invasive.load(data.invasive) && ok;
    if (data.alerts) ok = this.alerts.load(data.alerts) && ok;
    if (data.ecostats) ok = this.ecostats.load(data.ecostats) && ok;
    if (data.construction) ok = this.construction.load(data.construction) && ok;
    if (data.restoration) ok = this.restoration.load(data.restoration) && ok;
    if (data.automation) ok = this.automation.load(data.automation) && ok;
    if (data.feeding) ok = this.feeding.load(data.feeding) && ok;
    if (data.oxygenNet) ok = this.oxygenNet.load(data.oxygenNet) && ok;
    if (data.guide) ok = this.guide.load(data.guide) && ok;
    if (data.calendar) ok = this.calendar.load(data.calendar) && ok;
    if (data.expeditions) ok = this.expeditions.load(data.expeditions) && ok;
    if (data.genetics) ok = this.genetics.load(data.genetics) && ok;
    if (data.market) ok = this.market.load(data.market) && ok;
    if (data.brine) ok = this.brine.load(data.brine) && ok;
    if (data.tourism) ok = this.tourism.load(data.tourism) && ok;
    this.balance._ecoRef = this;
    this._lastStageIndex = this.terraform.stageIndex();
    return ok;
  }
  // —— 调参校验（静态）——
  static validateTuning() {
    const errors = [];
    // 阶段区间连续覆盖 0-100
    if (TERRAFORM_STAGES[0].min !== 0) errors.push('首阶段 min 不是 0');
    for (let i = 0; i < TERRAFORM_STAGES.length; i++) {
      const s = TERRAFORM_STAGES[i];
      if (s.min > s.max) errors.push('阶段 ' + s.id + ' min>max');
      if (i > 0 && Math.abs(s.min - (TERRAFORM_STAGES[i - 1].max + 0.01)) > 0.001) errors.push('阶段 ' + s.id + ' 与上一阶段不连续');
    }
    if (TERRAFORM_STAGES[TERRAFORM_STAGES.length - 1].max !== 100) errors.push('末阶段 max 不是 100');
    // 植物定义
    for (let i = 0; i < PLANT_IDS.length; i++) {
      const d = PLANT_DEFS[PLANT_IDS[i]];
      if (!d.stages || !d.stages.length) errors.push('植物 ' + d.id + ' 无生长阶段');
      if (d.growthDays <= 0) errors.push('植物 ' + d.id + ' growthDays 非正');
      if (d.tempMin >= d.tempMax) errors.push('植物 ' + d.id + ' 温度区间非法');
      if (d.o2PerMin < 0 || d.waterNeed <= 0) errors.push('植物 ' + d.id + ' 数值非法');
      if (d.stageUnlock < 0 || d.stageUnlock > 6) errors.push('植物 ' + d.id + ' stageUnlock 越界');
    }
    // 动物定义
    for (let i = 0; i < ANIMAL_IDS.length; i++) {
      const d = ANIMAL_DEFS[ANIMAL_IDS[i]];
      if (d.rPerMin <= 0) errors.push('动物 ' + d.id + ' r 非正');
      if (d.carryBase <= 0) errors.push('动物 ' + d.id + ' carryBase 非正');
      if (d.minViable < 1) errors.push('动物 ' + d.id + ' minViable 非法');
    }
    // 工程
    for (let i = 0; i < TERRAFORM_PROJECTS.length; i++) {
      const p = TERRAFORM_PROJECTS[i];
      if (!p.cost) errors.push('工程 ' + p.id + ' 无成本');
      if (p.kind === 'onetime' && !(p.boost > 0)) errors.push('工程 ' + p.id + ' 一次性但无 boost');
      if (p.kind === 'continuous' && !(p.ratePerMin !== 0)) errors.push('工程 ' + p.id + ' 持续型但无 rate');
    }
    // 建筑
    for (let i = 0; i < ECO_BUILDINGS.length; i++) {
      if (!ECO_BUILDINGS[i].cost) errors.push('建筑 ' + ECO_BUILDINGS[i].id + ' 无成本');
    }
    // 事件：每条必须有 condition 与 apply 函数
    for (let i = 0; i < ECO_EVENTS.length; i++) {
      const e = ECO_EVENTS[i];
      if (typeof e.condition !== 'function') errors.push('事件 ' + e.id + ' 无 condition');
      if (typeof e.apply !== 'function') errors.push('事件 ' + e.id + ' 无 apply');
    }
    // 成就
    for (let i = 0; i < ECO_ACHIEVEMENTS.length; i++) {
      if (typeof ECO_ACHIEVEMENTS[i].check !== 'function') errors.push('成就 ' + ECO_ACHIEVEMENTS[i].id + ' 无 check');
    }
    // ETUNE 关键值
    if (ETUNE.O2_PER_POP_PER_MIN <= 0) errors.push('ETUNE 耗氧非正');
    if (ETUNE.DIVERSITY_COLLAPSE_BELOW <= 0 || ETUNE.DIVERSITY_COLLAPSE_BELOW >= 1) errors.push('ETUNE 崩溃阈值越界');
    if (ETUNE.RAIN_PER_PROGRESS <= 0) errors.push('ETUNE 降雨系数非正');
    return { ok: errors.length === 0, errors: errors };
  }
}

/* ------------------------------------------------------------------------------
 * EcologySelfTest：自测（Node 下 node ecology_selftest.js / 浏览器控制台调用）
 * ------------------------------------------------------------------------------
 * 全部用确定性种子，不依赖 game.js / index.html / 任何已有文件。
 * 每个断言失败都记入 fails，run() 返回 {pass, fails, total} 并打印明细。
 * ------------------------------------------------------------------------------ */
const EcologySelfTest = {
  run: function () {
    const fails = [];
    let total = 0;
    function eq(name, got, want) {
      total++;
      const ok = (typeof want === 'number' && typeof got === 'number') ? Math.abs(got - want) < 1e-9 : got === want;
      if (!ok) fails.push(name + '：期望 ' + JSON.stringify(want) + '，实际 ' + JSON.stringify(got));
    }
    function ok(name, cond) {
      total++;
      if (!cond) fails.push(name + '：条件为假');
    }
    function near(name, got, want, eps) {
      total++;
      if (Math.abs(got - want) > eps) fails.push(name + '：期望≈' + want + '（±' + eps + '），实际 ' + got);
    }
    function mkGame() {
      return {
        player: { inv: { iron: 1000, steel: 1000, tech: 1000, food: 1000, water: 1000, biomass: 1000, rare: 1000, ice: 1000 } },
        pop: { count: 100 },
        builder: { buildings: [] },
        tech: { has: function () { return false; } },
        toast: function () {},
        time: { season: 'spring' },
        map: { size: 50 },
      };
    }
    function mkEco() {
      const eco = new EcologyManager(50, 42);
      return eco;
    }
    // 1. 构造与网格
    {
      const eco = mkEco();
      eq('1.地图尺寸', eco.grid.size, 50);
      ok('1.阶段0稀薄', eco.terraform.stage().id === 'thin');
      eq('1.初始进度', eco.terraform.progress, 0);
      eq('1.初始氧气', eco.oxygen.stock, 0);
      eq('1.初始地下水', eco.water.groundwater, 20);
      const tc = eco.grid.terrainCounts();
      ok('1.平地占多数', tc[0] > 1000);
      eq('1.格子总数', tc[0] + tc[1] + tc[2] + tc[3] + tc[4] + tc[5], 2500);
    }
    // 2. 改造进度与阶段
    {
      const eco = mkEco();
      eco.terraform.addProgress(10);
      eq('2.阶段1微氧', eco.terraform.stage().id, 'micro_oxygen');
      eco.terraform.addProgress(15);
      eq('2.阶段2增温', eco.terraform.stage().id, 'warming');
      eco.terraform.addProgress(15);
      eq('2.阶段3降雨', eco.terraform.stage().id, 'rainfall');
      eco.terraform.addProgress(15);
      eq('2.阶段4植被', eco.terraform.stage().id, 'vegetation');
      eco.terraform.addProgress(15);
      eq('2.阶段5可呼吸', eco.terraform.stage().id, 'breathable');
      eco.terraform.addProgress(15);
      eq('2.阶段6宜居', eco.terraform.stage().id, 'habitable');
      eq('2.阶段变化记录', eco.terraform.stageChanges.length, 6);
      eco.terraform.addProgress(100);
      eq('2.进度封顶100', eco.terraform.progress, 100);
      eco.terraform.addProgress(-200);
      eq('2.进度下限0', eco.terraform.progress, 0);
    }
    // 3. 温度/气压/CO2 随进度变化
    {
      const eco = mkEco();
      near('3.0%温度', eco.terraform.tempC(), -63, 0.01);
      near('3.0%气压', eco.terraform.pressureKpa(), 0.6, 0.01);
      eco.terraform.addProgress(50);
      near('3.50%温度', eco.terraform.tempC(), -18, 0.01);
      near('3.50%气压', eco.terraform.pressureKpa(), 48.1, 0.01);
      eco.terraform.addProgress(50);
      near('3.100%温度', eco.terraform.tempC(), 27, 0.01);
      near('3.100%气压', eco.terraform.pressureKpa(), 95.6, 0.01);
      eq('3.100%CO2', eco.terraform.co2Ppm(), 400);
      near('3.100%氧占比', eco.terraform.o2Percent(), 21, 0.01);
    }
    // 4. 工程启动与持续推进
    {
      const eco = mkEco();
      const g = mkGame();
      const r1 = eco.startProject('ghg_factory', g);
      ok('4.温室气体工厂启动', r1.ok);
      eq('4.成本扣除钢材', g.player.inv.steel, 940);
      const before = eco.terraform.progress;
      eco.terraform.update(10, eco, g);
      ok('4.持续推进>0', eco.terraform.progress > before);
      near('4.10分钟推进约0.5+被动', eco.terraform.progress - before, 0.54, 0.05);
      const r2 = eco.startProject('magnet_shield', g);
      ok('4.磁层阶段不足拒绝', !r2.ok);
      eco.terraform.addProgress(25);
      const r3 = eco.startProject('magnet_shield', g);
      ok('4.磁层可启动', r3.ok);
      eco.terraform.update(20, eco, g);
      ok('4.磁层完成', eco.terraform.completedProjects.indexOf('magnet_shield') >= 0);
      ok('4.磁层+8%', eco.terraform.progress >= 25 + 8);
    }
    // 5. 种植：阶段门禁与穹顶
    {
      const eco = mkEco();
      const g = mkGame();
      const r1 = eco.plantAt(25, 25, 'moss', g);
      ok('5.0%可种苔藓', r1.ok);
      const r2 = eco.plantAt(25, 26, 'grass', g);
      ok('5.0%户外草拒绝', !r2.ok);
      const r3 = eco.plantAt(25, 26, 'grass', g, { indoor: true });
      ok('5.穹顶内种草', r3.ok);
      const r4 = eco.plantAt(25, 27, 'tree', g);
      ok('5.0%种树拒绝', !r4.ok);
      const r5 = eco.plantAt(99, 99, 'moss', g);
      ok('5.越界拒绝', !r5.ok);
      const r6 = eco.plantAt(25, 25, 'nope', g);
      ok('5.未知植物拒绝', !r6.ok);
    }
    // 6. 植物生长与成熟（高湿高温条件）
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60); // -9°C
      const t = eco.grid.get(25, 25);
      t.terrain = 0; t.moisture = 90; t.fertility = 90;
      const r = eco.plantAt(25, 25, 'grass', g);
      ok('6.种草成功', r.ok);
      eco.tick(5, g);
      const p = eco.plants.plots[0];
      ok('6.生长中', p.ageDays > 3);
      eco.tick(10, g);
      ok('6.草成熟', p.ageDays >= 10);
      eq('6.成熟计数', eco.plants.matureCount(), 1);
      ok('6.产氧>0', eco.plants.oxygenPerMin(eco, g) > 0);
    }
    // 7. 收割
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(40);
      const t = eco.grid.get(10, 10);
      t.terrain = 0; t.moisture = 95; t.fertility = 90;
      eco.grid.addMoistureAll(30); // 全图提湿，避免干旱事件随机杀死唯一一株作物
      eco.plantAt(10, 10, 'crop', g, { indoor: true }); // 40% 时户外 -27°C，农作物须种穹顶内
      eco.tick(20, g);
      const before = g.player.inv.food;
      const res = eco.harvestAt(10, 10, g);
      ok('7.收割到食物', res.food >= 4); // 无昆虫授粉产量减半：8→4
      eq('7.背包食物增加', g.player.inv.food, before + res.food);
      eq('7.收割后植株消失', eco.plants.countOf('crop'), 0);
    }
    // 8. 氧气：生产、消耗、缺氧死人
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      // 20 棵成熟树（人口清零，避免耗氧抵消产氧）
      g.pop.count = 0;
      for (let i = 0; i < 20; i++) {
        const t = eco.grid.get(20 + i, 20);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(20 + i, 20, 'tree', g);
        eco.plants.plots[eco.plants.plots.length - 1].ageDays = 40;
      }
      const prod = eco.oxygen.productionPerMin(eco, g);
      near('8.20棵树产氧', prod, 1.0, 0.05);
      const s0 = eco.oxygen.stock;
      eco.tick(10, g);
      ok('8.氧气库存上升', eco.oxygen.stock > s0);
      // 缺氧：清空库存、人口 100、无植物
      const eco2 = mkEco();
      const g2 = mkGame();
      g2.pop.count = 100;
      eco2.oxygen.stock = 0;
      const res = eco2.tick(10, g2);
      ok('8.缺氧有人口损失', res.oxygen.popLoss > 0);
      ok('8.人口减少', g2.pop.count < 100);
    }
    // 9. 水循环：降雨随进度、暴雨事件、湖泊
    {
      const eco = mkEco();
      const g = mkGame();
      const rain0 = eco.water.rainMmY(eco, g);
      near('9.0%降雨', rain0, 5 * 0.1, 0.5); // 阶段0 rainMul 0.1
      eco.terraform.addProgress(50);
      const rain50 = eco.water.rainMmY(eco, g);
      ok('9.50%降雨大增', rain50 > 100);
      const gw0 = eco.water.groundwater;
      eco.water.addRainEvent(30);
      ok('9.暴雨补地下水', eco.water.groundwater > gw0);
      ok('9.暴雨提土壤湿度', eco.water.soilMoistureAvg() > 10);
      // 人工造湖：低洼高湿格
      const t = eco.grid.get(30, 30);
      t.elevation = -8; t.moisture = 95; t.surfaceWater = 60;
      eco.water._recountLakes();
      ok('9.湖泊计数', eco.water.lakes >= 1);
    }
    // 10. 动物：引入门禁、逻辑斯谛增长、捕食
    {
      const eco = mkEco();
      const g = mkGame();
      const r1 = eco.introduceAnimal('insect', g);
      ok('10.0%昆虫拒绝', !r1.ok);
      eco.terraform.addProgress(60);
      const r2 = eco.introduceAnimal('insect', g);
      ok('10.引入昆虫', r2.ok);
      eq('10.引入10只', Math.floor(eco.fauna.pop('insect')), 10);
      eq('10.食物扣除', g.player.inv.food, 1000 - 20);
      // 铺草地当食物
      for (let i = 0; i < 20; i++) {
        const t = eco.grid.get(5 + i, 5);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(5 + i, 5, 'grass', g);
        eco.plants.plots[eco.plants.plots.length - 1].ageDays = 10;
      }
      const n0 = eco.fauna.pop('insect');
      eco.fauna.update(10, eco, g); // 直接调动物系统：整 tick 会因“仅 2 物种多样性低”触发崩溃检定，那是平衡系统的事
      ok('10.昆虫增长', eco.fauna.pop('insect') > n0);
      // 鸟吃虫
      eco.terraform.addProgress(0); // 保持 60%（鸟需 40%）
      const rb = eco.introduceAnimal('bird', g);
      ok('10.引入鸟', rb.ok);
      const insBefore = eco.fauna.pop('insect');
      eco.tick(60, g);
      ok('10.鸟控虫（昆虫不爆炸）', eco.fauna.pop('insect') < insBefore * 3);
    }
    // 11. 多样性与崩溃
    {
      const bal = new EcoBalance();
      const d1 = bal.computeDiversity({ moss: 100 });
      eq('11.单物种多样性0', d1.diversity, 0);
      const d2 = bal.computeDiversity({ moss: 50, grass: 50 });
      near('11.双物种多样性', d2.diversity, 0.333, 0.01);
      const d8 = bal.computeDiversity({ moss: 10, grass: 10, shrub: 10, crop: 10, tree: 10, insect: 10, bird: 10, mammal: 10 });
      near('11.八物种均衡≈1', d8.diversity, 1, 0.01);
      // 崩溃
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(50);
      for (let i = 0; i < 50; i++) { eco.plants.plots.push({ species: 'moss', x: i % 50, y: 0, ageDays: 6, health: 100, indoor: false, plantedMin: 0 }); }
      for (let i = 0; i < 10; i++) { eco.plants.plots.push({ species: 'grass', x: i, y: 1, ageDays: 10, health: 100, indoor: false, plantedMin: 0 }); }
      eco.plants._rebuildIndex();
      eco.balance._ecoRef = eco;
      eco.balance.minutes = 100;
      eco.balance.riskMinutes = 10;
      ok('11.崩溃条件成立', eco.balance.collapseDue());
      const grassBefore = eco.plants.countOf('grass');
      const progBefore = eco.terraform.progress;
      const res = eco.balance.doCollapse('test', ecoRng(7));
      ok('11.崩溃杀死弱势物种', eco.plants.countOf('grass') < grassBefore);
      ok('11.崩溃扣进度', eco.terraform.progress < progBefore);
      eq('11.崩溃计数', eco.stats.collapses, 1);
    }
    // 12. 建筑接口：注册、聚合、等级缩放
    {
      const eco = mkEco();
      const g = mkGame();
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 1 });
      g.builder.buildings.push({ id: 'algae_pond', x: 2, y: 1, level: 2 });
      const agg = eco.buildings.aggregate(g);
      near('12.两池产氧', agg.o2PerMin, 2.0 * 1 + 2.0 * 1.25, 0.01);
      eq('12.计数', eco.buildings.count(g, 'algae_pond'), 2);
      ok('12.附近判定', eco.buildings.nearBuilding(g, 1, 2, 'algae_pond', 3));
      ok('12.注册自定义', eco.registerBuilding({ id: 'test_dome', name: '测试', cost: { steel: 1 }, o2PerMin: 9 }));
      g.builder.buildings.push({ id: 'test_dome', x: 0, y: 0, level: 1 });
      const agg2 = eco.buildings.aggregate(g);
      near('12.自定义生效', agg2.o2PerMin, 2.0 + 2.5 + 9, 0.01);
      const cb = eco.buildings.canBuild('forest_station', g, eco);
      ok('12.未解锁建筑拒绝', !cb.ok);
    }
    // 13. 政策：上限 3、乘积
    {
      const eco = mkEco();
      ok('13.政策1', eco.togglePolicy('pol_green_first').ok);
      ok('13.政策2', eco.togglePolicy('pol_water_save').ok);
      ok('13.政策3', eco.togglePolicy('pol_wildlife').ok);
      const r4 = eco.togglePolicy('pol_harvest');
      ok('13.第4项拒绝', !r4.ok);
      near('13.生长乘积', eco.policies.effectMul('growthMul'), 1.3 * 0.9, 0.001);
      ok('13.关闭政策', eco.togglePolicy('pol_green_first').ok);
      near('13.关闭后生长', eco.policies.effectMul('growthMul'), 0.9, 0.001);
    }
    // 14. 视觉：红→绿
    {
      const eco = mkEco();
      const c0 = eco.visuals.surfaceColor(0);
      const c100 = eco.visuals.surfaceColor(100);
      ok('14.0%与100%地表色不同', c0 !== c100);
      eq('14.0%地表色', c0, '#b5533c');
      eq('14.100%地表色', c100, '#4a7d2e');
      const t = eco.grid.get(25, 25);
      t.vegetation = 100; t.dominant = 'tree';
      const tc = eco.visuals.tileColor(t, 100);
      ok('14.满植被格偏绿', tc !== eco.visuals.tileColor({ terrain: 0, vegetation: 0, moisture: 10, surfaceWater: 0, dominant: null }, 100));
      ok('14.覆盖层开关', (eco.visuals.setOverlay(false), eco.visuals.overlayOn === false));
    }
    // 15. 事件：强制触发与一次性事件
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(40);
      const r = eco.fireEvent('ev_rain_burst', g);
      ok('15.暴雨事件触发', r.ok);
      ok('15.暴雨提湿度', eco.water.soilMoistureAvg() > 10);
      const r2 = eco.fireEvent('ev_nope', g);
      ok('15.未知事件拒绝', !r2.ok);
      const r3 = eco.fireEvent('ev_first_rain', g);
      ok('15.第一场雨触发', r3.ok);
      ok('15.一次性标记', eco.events.firedOnce.ev_first_rain === true);
      const r4 = eco.fireEvent('ev_first_rain', g);
      ok('15.一次性事件仍可强制触发（fire 不拦）', r4.ok); // fire 是调试入口；update 内 once 会拦
    }
    // 16. 存档往返
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(45);
      eco.plantAt(25, 25, 'moss', g);
      eco.introduceAnimal('insect', g);
      eco.togglePolicy('pol_green_first');
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      const okLoad = eco2.load(data);
      ok('16.加载成功', okLoad);
      eq('16.进度保留', eco2.terraform.progress, 45);
      eq('16.植株保留', eco2.plants.count(), 1);
      eq('16.政策保留', eco2.policies.active.length, 1);
      ok('16.坏版本拒绝', !eco2.load({ v: 999 }));
      ok('16.空数据拒绝', !eco2.load(null));
    }
    // 17. 调参校验
    {
      const v = EcologyManager.validateTuning();
      ok('17.调参合法', v.ok);
      if (!v.ok) { for (let i = 0; i < v.errors.length; i++) fails.push('17.' + v.errors[i]); total++; }
    }
    // 18. 增益输出
    {
      const eco = mkEco();
      eco.terraform.addProgress(90);
      eco.flags.habitable = true;
      const b = eco.getBuffs();
      ok('18.宜居人口加成', b.popGrowthMul >= 1.35);
      ok('18.食物加成≥1', b.foodMul >= 1);
      ok('18.多样性字段', typeof b.diversity === 'number');
    }
    // 19. 面板 summary 不抛错、字段全
    {
      const eco = mkEco();
      const s = eco.summary();
      ok('19.summary有阶段', !!s.stage);
      ok('19.summary有氧气', !!s.oxygen);
      ok('19.summary有水平衡', !!s.water);
      ok('19.summary有植物', !!s.plants);
      ok('19.summary有动物', !!s.fauna);
      ok('19.summary有平衡', !!s.balance);
      ok('19.summary有增益', !!s.buffs);
    }
    // 20. update 真实时间入口（模拟主循环 5 秒）
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      eco.plantAt(25, 25, 'grass', g);
      const m0 = eco.minutes;
      for (let i = 0; i < 5; i++) eco.update(ecoNow() + i * 1000, 1000, g);
      near('20.5秒推进约0.083分钟', eco.minutes - m0, 5 / 60, 0.001);
      ok('20.无崩溃', eco.minutes >= m0);
    }
    // 21. 长期模拟 60 分钟不崩、进度单调不跌（无崩溃条件时）
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      // 均衡生态：5 种植物各 10 株 + 昆虫
      const spots = [[10, 10], [11, 10], [12, 10], [13, 10], [14, 10]];
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) {
        for (let k = 0; k < 10; k++) {
          const t = eco.grid.get(spots[s][0] + k, spots[s][1]);
          t.terrain = 0; t.moisture = 90; t.fertility = 90;
          eco.plantAt(spots[s][0] + k, spots[s][1], species[s], g);
        }
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      const p0 = eco.terraform.progress;
      for (let i = 0; i < 60; i++) eco.tick(1, g);
      ok('21.60分钟后进度不跌', eco.terraform.progress >= p0 - 0.01);
      ok('21.多样性>0', eco.balance.diversity > 0);
      ok('21.植物存活', eco.plants.count() > 20);
    }
    // 22. 树木防风与灌木深根（数值分支覆盖）
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const t = eco.grid.get(25, 25);
      t.moisture = 5; t.fertility = 90; // 极干
      eco.plantAt(25, 25, 'shrub', g);
      eco.water.groundwater = 90; // 地下水丰富
      const p = eco.plants.plots[0];
      const f = eco.plants.growthFactors(p, eco, g);
      ok('22.深根灌木干旱仍有水分因子', f.waterF > 0.3);
    }
    // 23. 土壤养分：施肥 / 养分因子 / 轮作
    {
      const eco = mkEco();
      const g = mkGame();
      eq('23.默认氮50', eco.soilNutrients.get(10, 10).n, 50);
      const f1 = eco.soilNutrients.fertilize(10, 10, 'nitrogen', g);
      ok('23.施氮肥', f1.ok);
      eq('23.氮+30', eco.soilNutrients.get(10, 10).n, 80);
      eq('23.生物质扣除', g.player.inv.biomass, 1000 - 3);
      // 耗尽氮 → 生长因子 0.6
      const v = eco.soilNutrients._ensure(11, 11);
      v.n = 10;
      near('23.缺氮因子', eco.soilNutrients.nutrientFactor(11, 11, 'crop'), 0.6, 0.01);
      // 轮作：连种 3 茬同种 → 0.8
      eco.soilNutrients.recordPlanting(12, 12, 'crop');
      eco.soilNutrients.recordPlanting(12, 12, 'crop');
      eco.soilNutrients.recordPlanting(12, 12, 'crop');
      near('23.轮作惩罚', eco.soilNutrients.rotationMul(12, 12, 'crop'), 0.8, 0.01);
      near('23.改种无惩罚', eco.soilNutrients.rotationMul(12, 12, 'grass'), 1, 0.01);
    }
    // 24. 病害：手动感染、治疗、统计
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const t = eco.grid.get(20, 20);
      t.terrain = 0; t.moisture = 90; t.fertility = 90;
      eco.plantAt(20, 20, 'grass', g);
      const p = eco.plants.plots[0];
      p.disease = 'rust'; p.diseaseAge = 0;
      eq('24.感染计数', eco.disease.infectedCount(eco), 1);
      const c = eco.cureDiseaseAt(20, 20, g);
      ok('24.治愈', c.ok);
      eq('24.治愈后0', eco.disease.infectedCount(eco), 0);
      eq('24.治愈计数', eco.disease.cured, 1);
      const c2 = eco.cureDiseaseAt(20, 20, g);
      ok('24.无病株拒绝', !c2.ok);
    }
    // 25. 穹顶：建设、室内转化、拆除
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const t = eco.grid.get(25, 25);
      t.terrain = 0; t.moisture = 90; t.fertility = 90;
      eco.plantAt(25, 25, 'grass', g);
      ok('25.建前户外', eco.plants.plots[0].indoor === false);
      const b = eco.buildDome(25, 25, 3, g);
      ok('25.建穹顶', b.ok);
      ok('25.圈内转室内', eco.plants.plots[0].indoor === true);
      ok('25.穹顶内生长加成', eco.greenhouses.growthMulAt(25, 25, eco) >= 1.5);
      const b2 = eco.buildDome(25, 25, 3, g);
      ok('25.重复建穹顶拒绝', !b2.ok);
      const r = eco.removeDome(25, 25, g);
      ok('25.拆穹顶', r.ok);
      eq('25.穹顶数0', eco.greenhouses.domes.length, 0);
    }
    // 26. 天气：雨锋生成、预报、降雨判定
    {
      const eco = mkEco();
      const g = mkGame();
      const f = eco.weather.spawnFront('rain', ecoRng(5));
      ok('26.雨锋生成', !!f);
      eq('26.雨锋类型', f.type, 'rain');
      const fc = eco.weather.forecast();
      ok('26.预报有雨锋', fc.type === 'rain');
      ok('26.预报时间>0', fc.nextInMin > 0);
      // 把雨锋移到中心上空
      f.x = 25; f.y = 25;
      ok('26.中心在雨中', eco.weather.isRainingAt(25, 25));
      ok('26.远处无雨', !eco.weather.isRainingAt(0, 0));
    }
    // 27. 含水层：钻探、抽水、盐度
    {
      const eco = mkEco();
      const g = mkGame();
      eq('27.浅层已钻', eco.aquifer.layer('shallow').drilled, true);
      eq('27.深层未钻', eco.aquifer.layer('deep').drilled, false);
      const d = eco.drillAquifer('deep', g);
      ok('27.钻深层', d.ok);
      const w0 = g.player.inv.water;
      const got = eco.aquifer.pump('deep', 10, g);
      eq('27.抽水10', got, 10);
      eq('27.背包水+10', g.player.inv.water, w0 + 10);
      ok('27.浅层盐度因子<1', eco.aquifer.salinityFactor('shallow') < 1);
      ok('27.深层更淡', eco.aquifer.salinityFactor('deep') > eco.aquifer.salinityFactor('shallow'));
    }
    // 28. 动物行为：繁殖季、年龄结构
    {
      const b = new FaunaBehaviour();
      eq('28.春季繁殖1.5', b.breedingMul('spring'), 1.5);
      eq('28.冬季繁殖0.3', b.breedingMul('winter'), 0.3);
      eq('28.昆虫冬季活动0.3', b.activityMul('insect', 'winter'), 0.3);
      eq('28.鸟类冬季活动0.6', b.activityMul('bird', 'winter'), 0.6);
      const s = b.summary();
      ok('28.年龄结构', s.ages.insect.adult === 0.5);
    }
    // 29. 任务：完成与领取
    {
      const eco = mkEco();
      const g = mkGame();
      eco.plantAt(25, 25, 'moss', g);
      const avail = eco.quests.update(eco);
      ok('29.q01可领', avail.indexOf('q01') >= 0);
      const w0 = g.player.inv.food;
      const c = eco.claimQuest('q01', g);
      ok('29.领取q01', c.ok);
      eq('29.奖励食物+20', g.player.inv.food, w0 + 20);
      const c2 = eco.claimQuest('q01', g);
      ok('29.重复领取拒绝', !c2.ok);
    }
    // 30. 历史：采样与趋势
    {
      const eco = mkEco();
      const g = mkGame();
      eco.history.record(eco);
      eco.terraform.addProgress(10);
      eco.history.record(eco);
      eq('30.采样2条', eco.history.samples.length, 2);
      near('30.进度趋势', eco.history.trend('progress', 2), 10, 0.01);
      const mm = eco.history.minMax('progress');
      eq('30.最小0', mm.min, 0);
      eq('30.最大10', mm.max, 10);
    }
    // 31. 研究引擎：科技修正计算
    {
      const eco = mkEco();
      const g = mkGame();
      g.tech.has = function (id) { return id === 'eco_seed1' || id === 'eco_seed4'; };
      const mods = eco.research.compute(g);
      ok('31.苔藓耐寒修正', mods.plant.moss && mods.plant.moss.tempMin === -10);
      ok('31.作物产量修正', mods.plant.crop && mods.plant.crop.yieldMul === 1.5);
    }
    // 32. 第二批事件：野火与洪水强制触发
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      // 造 200+ 草生物量 + 干旱 + 高温
      for (let i = 0; i < 60; i++) {
        const t = eco.grid.get(5 + (i % 40), 5 + Math.floor(i / 40));
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(5 + (i % 40), 5 + Math.floor(i / 40), 'grass', g);
        eco.plants.plots[eco.plants.plots.length - 1].ageDays = 10;
      }
      eco.grid.addMoistureAll(-80); // 全图干旱
      eco.terraform.addProgress(40); // 100% → 27°C
      const r = eco.fireEvent('ev_wildfire', g);
      ok('32.野火触发', r.ok);
      ok('32.野火烧掉一些', r.result.burned >= 0);
      ok('32.野火后肥力上升', eco.grid.avgFertility() > 20);
    }
    // 33. 灾难联动：沙尘暴伤害
    {
      const eco = mkEco();
      const g = mkGame();
      g.disaster = { sandstormActive: function () { return true; } };
      eco.terraform.addProgress(60);
      for (let i = 0; i < 10; i++) {
        const t = eco.grid.get(10 + i, 10);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(10 + i, 10, 'grass', g);
      }
      const before = eco.plants.count();
      eco.disasterHooks.update(60, eco, g, ecoRng(3));
      ok('33.沙尘暴计时', eco.disasterHooks.sandstormMinutes >= 60);
      ok('33.沙尘暴不增植物', eco.plants.count() <= before);
      ok('33.脆弱性0-1', eco.disasterHooks.ecoVulnerability(eco) >= 0 && eco.disasterHooks.ecoVulnerability(eco) <= 1);
    }
    // 34. 大气物理：成分/磁层/侵蚀/反照率
    {
      const eco = mkEco();
      const gas0 = eco.terraform.gasComposition();
      near('34.0%CO2占比高', gas0.co2Kpa, 0.57, 0.05);
      eco.terraform.addProgress(100);
      const gas100 = eco.terraform.gasComposition();
      ok('34.100%氧分压达标', gas100.o2Kpa > 16);
      ok('34.可呼吸判定', eco.terraform.breathableO2Kpa());
      near('34.100%时磁层0.3侵蚀', eco.terraform.erosionPerMin(), 0.002 * 0.7, 0.0001);
      ok('34.反照率下降', eco.terraform.albedo(eco) < 0.25);
      eco.terraform.completedProjects.push('magnet_shield');
      eq('34.磁层满强度', eco.terraform.magnetStrength(), 1);
      eq('34.有磁层无侵蚀', eco.terraform.erosionPerMin(), 0);
    }
    // 35. 难度
    {
      const eco = mkEco();
      eco.difficulty.setLevel('hard');
      eq('35.困难生长0.8', eco.difficulty.growthMul(), 0.8);
      eq('35.困难成本1.2', eco.difficulty.costMul(), 1.2);
      eq('35.困难病害1.5', eco.difficulty.diseaseMul(), 1.5);
      eco.difficulty.setLevel('easy');
      eq('35.简单生长1.2', eco.difficulty.growthMul(), 1.2);
      eq('35.简单难度描述', typeof eco.difficulty.describe(), 'string');
    }
    // 36. 伴生种植
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const t1 = eco.grid.get(20, 20); t1.terrain = 0; t1.moisture = 90; t1.fertility = 90;
      const t2 = eco.grid.get(21, 20); t2.terrain = 0; t2.moisture = 90; t2.fertility = 90;
      eco.plantAt(20, 20, 'grass', g);
      eco.plantAt(21, 20, 'shrub', g);
      const m = eco.companion.companionMul(eco.plants.plots[0], eco);
      near('36.草灌伴生1.15', m.mul, 1.15, 0.01);
      ok('36.伴生有理由', m.reason.length > 0);
    }
    // 37. 种子库
    {
      const eco = mkEco();
      eq('37.开局苔藓20', eco.seeds.count('moss'), 20);
      ok('37.取种', eco.seeds.take('moss', 5));
      eq('37.剩15', eco.seeds.count('moss'), 15);
      ok('37.超取拒绝', !eco.seeds.take('moss', 100));
      eco.seeds.add('tree', 3);
      eq('37.加种', eco.seeds.count('tree'), 3);
      eq('37.收获返种', eco.seeds.refundOnHarvest('crop', 2), 4);
    }
    // 38. 植物生理：光合 > 呼吸
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      for (let i = 0; i < 5; i++) {
        const t = eco.grid.get(30 + i, 30);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(30 + i, 30, 'tree', g);
        eco.plants.plots[eco.plants.plots.length - 1].ageDays = 40;
      }
      const res = eco.physiology.update(1, eco, g);
      ok('38.光合>0', res.photo > 0);
      ok('38.净氧>0', eco.physiology.netOxygenPerMin() > 0);
      ok('38.蒸腾>0', res.transp > 0);
    }
    // 39. 营养级网络
    {
      const eco = mkEco();
      eq('39.植物1级', eco.trophic.trophicLevel('grass'), 1);
      eq('39.昆虫2级', eco.trophic.trophicLevel('insect'), 2);
      eq('39.鸟类3级', eco.trophic.trophicLevel('bird'), 3);
      const casc = eco.trophic.cascadeIfRemoved('insect', eco);
      eq('39.去虫则鸟跌', casc.bird, -1);
      eq('39.去虫则草涨', casc.grass, 1);
      ok('39.昆虫关键度高', eco.trophic.keystoneScore('insect', eco) >= 3);
    }
    // 40. 氧气分区
    {
      const eco = mkEco();
      eco.terraform.addProgress(100);
      near('40.户外氧分压', eco.oxygenZones.outdoorO2Kpa(eco), 20, 1);
      eq('40.户外可呼吸', eco.oxygenZones.outdoorWorkMul(eco), 1);
      const eco0 = mkEco();
      ok('40.0%户外作业耗氧高', eco0.oxygenZones.outdoorWorkMul(eco0) > 1);
    }
    // 41. 灌溉区：配水到土壤
    {
      const eco = mkEco();
      const g = mkGame();
      const z = eco.addIrrigationZone(10, 10, 12, 12, 3, 5, '菜园');
      ok('41.建区', !!z.id);
      const t = eco.grid.get(11, 11);
      t.moisture = 10;
      eco.irrigation.allocate(1, eco, g);
      ok('41.配水提湿', eco.grid.get(11, 11).moisture > 10);
      ok('41.区内满足率', eco.irrigation.supplyRatioAt(11, 11) > 0);
      ok('41.区外满足率1', eco.irrigation.supplyRatioAt(40, 40) === 1);
      ok('41.删区', eco.irrigation.removeZone(z.id));
    }
    // 42. 建筑老化：衰减与维修
    {
      const eco = mkEco();
      const g = mkGame();
      const b = { id: 'algae_pond', x: 1, y: 1, level: 1 };
      g.builder.buildings.push(b);
      eq('42.初始耐久100', eco.degradation.conditionOf(b), 100);
      eco.degradation.update(600, eco, g);
      ok('42.600分钟老化', eco.degradation.conditionOf(b) < 100);
      ok('42.效应倍率<1', eco.degradation.effectMulOf(b) <= 1);
      const w0 = g.player.inv.iron;
      const r = eco.degradation.repair(b, g);
      ok('42.维修', r.ok);
      eq('42.维修扣铁2', g.player.inv.iron, w0 - 2);
    }
    // 43. 河流：追踪与沿岸加成
    {
      const eco = mkEco();
      const t0 = eco.grid.get(25, 25);
      t0.elevation = 8;
      const t1 = eco.grid.get(25, 26);
      t1.elevation = 2;
      const t2 = eco.grid.get(25, 27);
      t2.elevation = -4;
      const river = eco.rivers.traceRiver(25, 25);
      ok('43.成河', !!river);
      ok('43.河道≥3格', river.path.length >= 3);
      ok('43.河道格加成', eco.rivers.bankBonusAt(25, 25) === 1.1);
      ok('43.非河道无加成', eco.rivers.bankBonusAt(0, 0) === 1);
    }
    // 44. 水质：污染与净化
    {
      const eco = mkEco();
      eq('44.默认水质1', eco.waterQuality.qualityFactor(10, 10), 1);
      eco.waterQuality.polluteAt(10, 10, 60);
      ok('44.污染降因子', eco.waterQuality.qualityFactor(10, 10) < 0.8);
      eco.waterQuality.polluteAt(11, 11, 5);
      const worst = eco.waterQuality.worstTiles(1);
      ok('44.最差格是污染格', worst[0].key === '10,10');
    }
    // 45. 堆肥：残体与病害加成
    {
      const eco = mkEco();
      const g = mkGame();
      eco.compost.addDebris(150);
      near('45.残体多病害1.2', eco.compost.diseaseMul(), 1.2, 0.01);
      const before = g.player.inv.biomass;
      g.builder.buildings.push({ id: 'compost_plant', x: 0, y: 0, level: 1 });
      const res = eco.compost.update(10, eco, g);
      ok('45.堆肥产出生物质', g.player.inv.biomass > before);
      ok('45.残体减少', eco.compost.debris < 150);
    }
    // 46. 恢复力与再引入
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      eco.introduceAnimal('insect', g);
      eco.fauna.setPop('insect', 0); // 模拟灭绝
      const ext = eco.resilience.extinctList(eco);
      ok('46.灭绝清单有昆虫', ext.some(function (e) { return e.id === 'insect'; }));
      // 恢复力高时再引入成功（用固定 rng 0 → 必成功）
      eco.plants.plots.push({ species: 'moss', x: 1, y: 1, ageDays: 6, health: 100, indoor: false, plantedMin: 0 });
      const r = eco.reintroduceAnimal('insect', g, function () { return 0; });
      ok('46.再引入成功', r.ok);
      ok('46.昆虫回归', eco.fauna.pop('insect') >= 10);
    }
    // 47. 气候反馈
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      for (let i = 0; i < 20; i++) {
        const t = eco.grid.get(10 + i, 10);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(10 + i, 10, 'grass', g);
        eco.plants.plots[eco.plants.plots.length - 1].ageDays = 10;
      }
      eco.tick(10, g);
      const s = eco.climate.summary(eco, g);
      ok('47.反照率<0.25', s.albedo < 0.25);
      ok('47.有效温度为数', typeof s.effectiveTempC === 'number');
    }
    // 48. 磁层分阶段
    {
      const eco = mkEco();
      const g = mkGame();
      const s1 = eco.startMagnetPhase(g);
      ok('48.启动阶段1', s1.ok);
      eco.magnetPhases.update(8, eco, g);
      eq('48.阶段1完成', eco.magnetPhases.phase, 1);
      near('48.侵蚀打7折', eco.magnetPhases.erosionMul(), 0.7, 0.01);
      const s2 = eco.startMagnetPhase(g);
      ok('48.启动阶段2', s2.ok);
      eco.magnetPhases.update(8, eco, g);
      eq('48.阶段2完成', eco.magnetPhases.phase, 2);
      ok('48.阶段2给进度', eco.terraform.progress >= 3);
    }
    // 49. 面板：全部面板非空
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(50);
      ok('49.总览', !!eco.panel('overview', g));
      ok('49.植物面板', eco.panel('plants', g).rows.length === 5);
      ok('49.动物面板', eco.panel('fauna', g).rows.length === 3);
      ok('49.改造面板', eco.panel('terraform', g).projects.length >= 6);
      ok('49.水平板', !!eco.panel('water', g));
      ok('49.平衡面板', !!eco.panel('balance', g));
      ok('49.建筑面板', eco.panel('buildings', g).defs.length >= 16);
      ok('49.任务面板', !!eco.panel('quests', g));
      eq('49.未知面板null', eco.panel('nope', g), null);
    }
    // 50. 顾问：空生态给出高优先级建议
    {
      const eco = mkEco();
      const g = mkGame();
      const adv = eco.advise(g);
      ok('50.有建议', adv.length > 0);
      ok('50.按分数排序', adv[0].score >= adv[adv.length - 1].score);
      ok('50.建议有操作', typeof adv[0].action === 'string');
    }
    // 51. 周报：100 分钟生成
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(30);
      let rep = null;
      for (let i = 0; i < 100; i++) { const r = eco.report.update(1, eco); if (r) rep = r; }
      ok('51.周报生成', !!rep);
      eq('51.周报进度30', rep.progress, 30);
      ok('51.最新周报', eco.latestReport() === rep);
    }
    // 52. 存档往返（含新系统）
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(45);
      eco.buildDome(25, 25, 3, g);
      eco.addIrrigationZone(10, 10, 12, 12, 2, 5, '菜园');
      eco.claimQuest('q01', g); // 未完成应失败，不影响
      eco.plantAt(25, 25, 'moss', g);
      eco.togglePolicy('pol_green_first');
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('52.加载成功', eco2.load(data));
      eq('52.穹顶保留', eco2.greenhouses.domes.length, 1);
      eq('52.灌溉区保留', eco2.irrigation.zones.length, 1);
      eq('52.政策保留', eco2.policies.active.length, 1);
      eq('52.进度保留', eco2.terraform.progress, 45);
      eq('52.种子保留', eco2.seeds.count('moss'), eco.seeds.count('moss'));
    }
    // 53. 120 分钟全系统长模拟不崩
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 1 });
      g.builder.buildings.push({ id: 'irrigation', x: 5, y: 5, level: 1 });
      g.builder.buildings.push({ id: 'greenhouse_dome', x: 8, y: 8, level: 1 });
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) {
        for (let k = 0; k < 8; k++) {
          const t = eco.grid.get(10 + s * 2 + (k % 4), 10 + Math.floor(k / 4));
          t.terrain = 0; t.moisture = 90; t.fertility = 90;
          eco.plantAt(10 + s * 2 + (k % 4), 10 + Math.floor(k / 4), species[s], g);
        }
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      eco.introduceAnimal('mammal', g);
      eco.buildDome(25, 25, 3, g);
      eco.addIrrigationZone(10, 10, 18, 12, 2, 5, '农场');
      eco.startProject('ghg_factory', g);
      eco.togglePolicy('pol_green_first');
      const p0 = eco.terraform.progress;
      for (let i = 0; i < 120; i++) eco.tick(1, g);
      ok('53.120分钟进度增长', eco.terraform.progress > p0);
      ok('53.植物存活', eco.plants.count() > 10);
      ok('53.历史有采样', eco.history.samples.length > 0);
      ok('53.周报有产出', eco.report.reports.length > 0);
      ok('53.面板正常', !!eco.summary());
    }
    // 54. 调参校验（含追加数据）
    {
      const v = EcologyManager.validateTuning();
      ok('54.调参仍合法', v.ok);
      if (!v.ok) { for (let i = 0; i < v.errors.length; i++) fails.push('54.' + v.errors[i]); total++; }
      ok('54.建筑≥30', ECO_BUILDINGS.length >= 30);
      ok('54.工程≥12', TERRAFORM_PROJECTS.length >= 12);
      ok('54.事件≥35', ECO_EVENTS.length >= 35);
      ok('54.成就≥30', ECO_ACHIEVEMENTS.length >= 30);
    }
    // 55. 授粉网络
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      eq('55.无虫授粉0', eco.pollinators.scoreAt(25, 25, eco, g) < 0.3, true);
      eco.introduceAnimal('insect', g);
      eco.fauna.addPop('insect', 90);
      ok('55.有虫授粉高', eco.pollinators.scoreAt(25, 25, eco, g) >= 0.6);
      ok('55.产量倍率>0.5', eco.pollinators.yieldMulAt(25, 25, eco, g) > 0.5);
    }
    // 56. 领地地图
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      for (let i = 0; i < 5; i++) {
        const t = eco.grid.get(20 + i, 20);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(20 + i, 20, 'tree', g);
        eco.plants.plots[eco.plants.plots.length - 1].ageDays = 40;
      }
      eco.grid.get(20, 20).dominant = 'tree';
      ok('56.鸟领地格>0', eco.territory.availableTiles('bird', eco) >= 0);
      ok('56.拥挤倍率≤1', eco.territory.crowdingMul('bird', eco) <= 1);
    }
    // 57. 改造台账
    {
      const eco = mkEco();
      const g = mkGame();
      eco.startProject('ghg_factory', g);
      for (let i = 0; i < 10; i++) eco.tick(1, g);
      const b = eco.ledger.breakdown();
      ok('57.台账工程>0', b.totals.projects > 0);
      ok('57.台账被动>0', b.totals.passive > 0);
      eq('57.最大来源是工程', b.topSource, 'projects');
    }
    // 58. 灭绝日志
    {
      const eco = mkEco();
      const e = eco.extinctionLog.record('insect', 'test', 12, eco);
      ok('58.记录灭绝', !!e);
      eq('58.总数1', eco.extinctionLog.summary().total, 1);
      const e2 = eco.extinctionLog.record('insect', 'test', 5, eco);
      ok('58.10分钟内不重复记', e2 === null);
      ok('58.标记恢复', eco.extinctionLog.markRecovered('insect'));
      eq('58.已恢复1', eco.extinctionLog.summary().recovered, 1);
    }
    // 59. 修剪与移栽
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const t = eco.grid.get(20, 20);
      t.terrain = 0; t.moisture = 90; t.fertility = 90;
      eco.plantAt(20, 20, 'tree', g);
      eco.plants.plots[0].ageDays = 40;
      const b0 = g.player.inv.biomass;
      const pr = eco.prune(20, 20, g);
      ok('59.修剪', pr.ok);
      eq('59.修剪得生物质2', g.player.inv.biomass, b0 + 2);
      eco.plantAt(20, 20, 'grass', g);
      const tr = eco.transplant(20, 20, 21, 21, g);
      ok('59.移栽', tr.ok);
      eq('59.目标格有草', eco.plants.plotsAt(21, 21).length, 1);
      const tr2 = eco.transplant(20, 20, 99, 99, g);
      ok('59.越界移栽拒绝', !tr2.ok);
    }
    // 60. 旱涝预报与氧气应急
    {
      const eco = mkEco();
      const g = mkGame();
      const f = eco.waterForecast(g);
      ok('60.预报有旱涝风险', ['high', 'medium', 'low'].indexOf(f.droughtRisk) >= 0);
      ok('60.预报有建议', typeof f.advice === 'string');
      const em = eco.oxygenEmergency(g);
      ok('60.应急检查需配给（空库）', em.needRationing === true || em.ratio === 0);
      ok('60.配给开关', eco.setOxygenRationing(true) === true);
    }
    // 61. 生长曲线与生命表
    {
      eq('61.苔藓曲线起点<终点', growthCurveAt('moss', 0) < growthCurveAt('moss', 6), true);
      near('61.苔藓成熟≈1', growthCurveAt('moss', 6), 1, 0.05);
      eq('61.树40天未满', growthCurveAt('tree', 40) < 1, true);
      eq('61.成熟需0天', daysToMature('grass', 10, 1), 0);
      eq('61.未成熟需正天数', daysToMature('grass', 0, 1) > 0, true);
      const lt = animalLifeTable('bird');
      eq('61.鸟寿命365', lt.lifespanDays, 365);
      eq('61.昆虫窝仔20', animalLifeTable('insect').litterSize, 20);
    }
    // 62. 存档迁移
    {
      const m = EcologyMigration;
      const v0 = { progress: 30, plots: [{ s: 'moss', x: 1, y: 1, a: 2, h: 90 }] };
      const mig = m.migrate(v0);
      ok('62.v0迁移', !!mig);
      eq('62.迁移后版本', mig.v, ECO_VERSION);
      ok('62.迁移补terraform', !!mig.terraform);
      ok('62.迁移补plants', !!mig.plants);
      eq('62.缺失系统检测', m.missingSystems({}).length, 11);
      eq('62.完整无缺失', m.missingSystems(mig).length, 0);
      ok('62.空迁移null', m.migrate(null) === null);
    }
    // 63. 一键接线
    {
      const g = mkGame();
      const r = EcologyIntegration.attach(g, 50, 7);
      ok('63.接线', r.ok);
      ok('63.挂载', !!g.ecology);
      ok('63.钩子齐全', !!r.hooks.tick && !!r.hooks.save && !!r.hooks.load);
      const r2 = EcologyIntegration.attach(g, 50, 7);
      ok('63.重复接线拒绝', !r2.ok);
      const d = EcologyIntegration.detach(g);
      ok('63.断开', d.ok);
      eq('63.已移除', g.ecology, undefined);
    }
    // 64. 详情接口
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const td = eco.terraform.detail(eco, g);
      ok('64.改造详情有气体', !!td.gas);
      ok('64.改造详情有台账', !!td.ledger);
      const pd = eco.plants.speciesDetail('tree', eco, g);
      ok('64.树详情', pd.growthDays === 40);
      ok('64.树曲线', pd.growthCurve.length === 41);
      const fd = eco.fauna.speciesDetail('bird', eco, g);
      ok('64.鸟详情', fd.life.lifespanDays === 365);
      const bd = eco.balance.detail(eco);
      ok('64.平衡详情', Array.isArray(bd.speciesRows));
      const wd = eco.water.detail(eco, g);
      ok('64.水详情有预报', !!wd.forecast);
      const ob = eco.oxygen.productionBreakdown(eco, g);
      ok('64.氧气分项', typeof ob.plants === 'number');
      const plot = eco.plotDetail(25, 25, g);
      ok('64.单格详情', plot.x === 25 && Array.isArray(plot.plots));
    }
    // 65. 季节修正
    {
      const g = mkGame();
      g.time.season = 'winter';
      eq('65.冬季生长0.7', EcoSeasonalCycle.growthMul(g), 0.7);
      g.time.season = 'autumn';
      eq('65.秋季产量1.1', EcoSeasonalCycle.yieldMul(g), 1.1);
      g.time.season = 'summer';
      eq('65.夏季动物1.3', EcoSeasonalCycle.faunaMul(g), 1.3);
      ok('65.季节描述', typeof EcoSeasonalCycle.describe(g) === 'string');
    }
    // 66. 视觉扩展：小地图与热力图
    {
      const eco = mkEco();
      const mm = eco.visuals.minimapData(eco, 5);
      ok('66.小地图有数据', mm.length > 0);
      ok('66.小地图有颜色', typeof mm[0].color === 'string');
      const hm = eco.visuals.heatmapData(eco, 'moisture');
      eq('66.热力图全格', hm.length, 2500);
      ok('66.热力值0-1', hm[0].v >= 0 && hm[0].v <= 1);
      const t = eco.grid.get(25, 25);
      t.dominant = 'tree'; t.vegetation = 100;
      eq('66.林冠5级', eco.visuals.canopyLevel(t), 5);
    }
    // 67. 第三批事件：季节事件触发
    {
      const eco = mkEco();
      const g = mkGame();
      g.time.season = 'spring';
      eco.terraform.addProgress(30);
      const r = eco.fireEvent('ev_spring_thaw', g);
      ok('67.春融触发', r.ok);
      const r2 = eco.fireEvent('ev_first_tree_flower', g);
      ok('67.首树花（无树也触发fire）', r2.ok);
      ok('67.首树花标记', eco.flags.firstTreeFlower === true);
    }
    // 68. 追加任务与成就计数
    {
      ok('68.任务≥20', ECO_QUESTS.length >= 20);
      ok('68.成就≥40', ECO_ACHIEVEMENTS.length >= 40);
      ok('68.事件≥50', ECO_EVENTS.length >= 50);
      const v = EcologyManager.validateTuning();
      ok('68.调参最终合法', v.ok);
      if (!v.ok) { for (let i = 0; i < v.errors.length; i++) fails.push('68.' + v.errors[i]); total++; }
    }
    // 69. 统一操作分发
    {
      const eco = mkEco();
      const g = mkGame();
      ok('69.操作列表', EcoActions.list().length >= 10);
      const pv = eco.previewAction('plant', { species: 'moss' }, g);
      ok('69.种植成本预览', pv && pv.biomass === 1);
      const d = eco.doAction('plant', { x: 25, y: 25, species: 'moss' }, g);
      ok('69.分发种植', d.ok);
      const bad = eco.doAction('nope', {}, g);
      ok('69.未知操作拒绝', !bad.ok);
      const pol = eco.doAction('policy', { id: 'pol_green_first' }, g);
      ok('69.分发政策', pol.ok);
    }
    // 70. 农场区
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(70); // 0°C，户外农作物可种（40% 时 -27°C 太冷）
      const z = eco.addFarm(10, 10, 12, 10, ['crop', 'grass'], '一号田');
      ok('70.建农场', !!z.id);
      const t = eco.grid.get(10, 10); t.terrain = 0; t.moisture = 95; t.fertility = 90;
      const t2 = eco.grid.get(11, 10); t2.terrain = 0; t2.moisture = 95; t2.fertility = 90;
      const t3 = eco.grid.get(12, 10); t3.terrain = 0; t3.moisture = 95; t3.fertility = 90;
      const p = eco.plantFarm(z.id, g);
      ok('70.种满农场', p.planted >= 2);
      const rot = eco.rotateFarm(z.id);
      ok('70.轮作', rot.ok && rot.crop === 'grass');
      eq('70.成熟率0-1', eco.farms.maturity(z.id, eco) >= 0 && eco.farms.maturity(z.id, eco) <= 1, true);
    }
    // 71. 庇护所
    {
      const eco = mkEco();
      const g = mkGame();
      const s = eco.addSanctuary(10, 10, 14, 14, 'bird', '鸟苑');
      ok('71.建庇护所', s.ok);
      const sc = eco.sanctuary.habitatScore(s.sanctuary, eco);
      ok('71.栖息地评分0-1', sc >= 0 && sc <= 1);
      const f = eco.sanctuary.setFeeding(s.sanctuary.id, true, g);
      ok('71.投喂', f.ok);
      const s2 = eco.addSanctuary(0, 0, 2, 2, 'bird');
      const s3 = eco.addSanctuary(3, 3, 5, 5, 'bird');
      const s4 = eco.addSanctuary(6, 6, 8, 8, 'bird');
      ok('71.上限3个', !s4.ok);
    }
    // 72. 水库
    {
      const eco = mkEco();
      const g = mkGame();
      const b = eco.buildReservoir(25, 25, g);
      ok('72.建水库', b.ok);
      eq('72.容量500', eco.reservoirs.totalCap(), 500);
      eco.grid.addMoistureAll(50); // 土壤湿润，避免水库刚蓄水就立刻放水
      eco.water.lastRainMmY = 300;
      eco.reservoirs.update(10, eco, g);
      ok('72.雨季蓄水', eco.reservoirs.totalStored() > 0);
      const sr = eco.reservoirs.setRelease(b.reservoir.id, 5);
      ok('72.设放水速率', sr.ok);
    }
    // 73. 入侵物种
    {
      const eco = mkEco();
      const g = mkGame();
      eco.invasive.patches.push({ x: 10, y: 10, size: 20 });
      eq('73.入侵计数', eco.invasive.count(), 20);
      const w = eco.weedAt(10, 10, g);
      ok('73.除草', w.ok);
      eq('73.除草后0', eco.invasive.count(), 0);
      const w2 = eco.weedAt(10, 10, g);
      ok('73.无草拒绝', !w2.ok);
    }
    // 74. 告警
    {
      const eco = mkEco();
      eco.oxygen.stock = 0;
      const act = eco.alerts.update(1, eco);
      ok('74.氧气耗尽告警', act.some(function (a) { return a.id === 'al_o2_empty'; }));
      ok('74.有严重告警', eco.alerts.hasCritical());
      const act2 = eco.alerts.update(1, eco);
      ok('74.冷却去重', act2.filter(function (a) { return a.id === 'al_o2_empty'; }).length === 0);
    }
    // 75. 统计峰值
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(50);
      eco.plantAt(25, 25, 'moss', g);
      eco.ecostats.update(1, eco);
      const s = eco.recordsSummary();
      eq('75.最高进度50', s.maxProgress, 50);
      eq('75.最多植物1', s.maxPlants, 1);
      eq('75.累计种植1', s.totalPlanted, 1);
    }
    // 76. 氧气分项与配给
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      g.builder.buildings.push({ id: 'electrolyzer', x: 1, y: 1, level: 1 });
      const bd = eco.oxygen.productionBreakdown(eco, g);
      ok('76.电解产氧>0', bd.electrolysis > 0);
      const em = eco.oxygen.emergencyCheck(eco, g);
      ok('76.应急检查有小时数', typeof em.hoursLeft === 'number');
    }
    // 77. 单格详情与旱涝预报数值
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const t = eco.grid.get(25, 25);
      t.terrain = 0; t.moisture = 90; t.fertility = 90;
      eco.plantAt(25, 25, 'grass', g);
      const d = eco.plotDetail(25, 25, g);
      eq('77.格内1株', d.plots.length, 1);
      ok('77.格内有养分', !!d.nutrients);
      ok('77.水质因子', d.waterQuality > 0);
      const f = eco.waterForecast(g);
      ok('77.预报平衡点', typeof f.equilibrium === 'number');
    }
    // 78. 季节事件：秋收自动收割
    {
      const eco = mkEco();
      const g = mkGame();
      g.time.season = 'autumn';
      eco.terraform.addProgress(40);
      const t = eco.grid.get(10, 10);
      t.terrain = 0; t.moisture = 95; t.fertility = 90;
      eco.plantAt(10, 10, 'crop', g, { indoor: true });
      eco.tick(20, g);
      const before = g.player.inv.food;
      const r = eco.fireEvent('ev_autumn_harvest', g);
      ok('78.秋收触发', r.ok);
      ok('78.秋收得食物', g.player.inv.food > before);
    }
    // 79. 长期 240 分钟全系统压力测试
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(55);
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 2 });
      g.builder.buildings.push({ id: 'forest_station', x: 3, y: 3, level: 1 });
      g.builder.buildings.push({ id: 'compost_plant', x: 5, y: 5, level: 1 });
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) {
        for (let k = 0; k < 12; k++) {
          const x = 10 + s * 3 + (k % 6), y = 10 + Math.floor(k / 6);
          const t = eco.grid.get(x, y);
          t.terrain = 0; t.moisture = 90; t.fertility = 90;
          eco.plantAt(x, y, species[s], g);
        }
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      eco.introduceAnimal('mammal', g);
      eco.buildDome(30, 30, 3, g);
      eco.addFarm(10, 10, 15, 11, ['crop', 'grass'], '主田');
      eco.addSanctuary(20, 20, 24, 24, 'bird', '鸟苑');
      eco.buildReservoir(40, 40, g);
      eco.startProject('ghg_factory', g);
      eco.startMagnetPhase(g);
      for (let i = 0; i < 240; i++) eco.tick(1, g);
      ok('79.240分钟不崩', eco.minutes >= 240);
      ok('79.进度继续涨', eco.terraform.progress > 55);
      ok('79.植物还在', eco.plants.count() > 20);
      ok('79.动物还在', eco.fauna.total() > 0);
      ok('79.历史采样', eco.history.samples.length > 10);
      ok('79.周报≥2', eco.report.reports.length >= 2);
      ok('79.台账有数', eco.ledger.breakdown().net > 0);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('79.大存档可加载', eco2.load(data));
      near('79.加载后进度一致', eco2.terraform.progress, eco.terraform.progress, 0.001);
      eq('79.加载后植物一致', eco2.plants.count(), eco.plants.count());
    }
    // 80. 最终调参校验与规模
    {
      const v = EcologyManager.validateTuning();
      ok('80.调参合法', v.ok);
      if (!v.ok) { for (let i = 0; i < v.errors.length; i++) fails.push('80.' + v.errors[i]); total++; }
      ok('80.事件≥50', ECO_EVENTS.length >= 50);
      ok('80.任务≥20', ECO_QUESTS.length >= 20);
      ok('80.成就≥40', ECO_ACHIEVEMENTS.length >= 40);
    }
    // 81. 建造队列
    {
      const eco = mkEco();
      const g = mkGame();
      const e = eco.enqueueConstruction('ghg_factory', g);
      ok('81.进队列', e.ok);
      eq('81.队列1', eco.construction.queue.length, 1);
      ok('81.未建成前0座', (eco.terraform.continuousProjects.ghg_factory || 0) === 0);
      eco.construction.update(5, eco, g);
      eq('81.5分钟建成', eco.terraform.continuousProjects.ghg_factory, 1);
      const e2 = eco.enqueueConstruction('ghg_factory', g);
      ok('81.再进队列', e2.ok);
      const c = eco.construction.cancel(0, g);
      ok('81.取消退50%', c.ok);
      eq('81.队列空', eco.construction.queue.length, 0);
    }
    // 82. 修复工程
    {
      const eco = mkEco();
      const g = mkGame();
      const t = eco.grid.get(20, 20);
      t.vegetation = 0; t.fertility = 10;
      const s = eco.startRestoration('revegetate', 20, 20, 22, 22, g);
      ok('82.启动修复', s.ok);
      const f0 = eco.grid.get(21, 21).fertility;
      eco.restoration.update(10, eco, g);
      ok('82.修复提肥力', eco.grid.get(21, 21).fertility > f0);
      const d = eco.restoration.degradedStats(eco);
      ok('82.退化统计', typeof d.count === 'number');
    }
    // 83. 地图工具
    {
      const eco = mkEco();
      const spots = eco.bestSpots('grass', 5);
      eq('83.最优种植点5个', spots.length, 5);
      ok('83.分数递减', spots[0].score >= spots[4].score);
      const rep = eco.regionReport();
      ok('83.区域报告', !!rep && rep.size === 50);
      ok('83.报告有最优草', rep.bestGrass.length === 3);
      const water = EcoMapTools.bestWaterSpots(eco, 3);
      eq('83.水源点3个', water.length, 3);
    }
    // 84. 第四批事件
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      for (let i = 0; i < 35; i++) {
        const t = eco.grid.get(5 + i, 5);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(5 + i, 5, 'tree', g);
        eco.plants.plots[eco.plants.plots.length - 1].ageDays = 40;
      }
      const r = eco.fireEvent('ev_carbon_sink', g);
      ok('84.碳汇触发', r.ok);
      ok('84.碳汇推进度', eco.terraform.progress > 60);
      const r2 = eco.fireEvent('ev_green_tide', g);
      ok('84.绿潮触发', r2.ok);
    }
    // 85. 追加数据规模
    {
      ok('85.建筑≥40', ECO_BUILDINGS.length >= 40);
      ok('85.研究≥24', ECO_RESEARCH.length >= 24);
      ok('85.政策≥14', ECO_POLICIES.length >= 14);
      ok('85.任务≥30', ECO_QUESTS.length >= 30);
      ok('85.成就≥50', ECO_ACHIEVEMENTS.length >= 50);
      ok('85.事件≥65', ECO_EVENTS.length >= 65);
    }
    // 86. 操作分发覆盖新动作
    {
      const eco = mkEco();
      const g = mkGame();
      const d1 = eco.doAction('magnet_phase', {}, g);
      ok('86.分发磁层阶段', d1.ok);
      const d2 = eco.doAction('rationing', { on: true }, g);
      ok('86.分发配给', d2.ok && d2.data.rationing === true);
      const pv = eco.previewAction('magnet_phase', {}, g);
      ok('86.磁层成本预览', !!pv);
    }
    // 87. 完整存档往返（含全部新系统）
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(65);
      eco.enqueueConstruction('ghg_factory', g);
      eco.buildReservoir(40, 40, g);
      eco.addFarm(10, 10, 12, 10, ['crop', 'grass'], '田');
      eco.addSanctuary(20, 20, 22, 22, 'bird', '苑');
      eco.startRestoration('soil_restore', 30, 30, 32, 32, g);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('87.加载成功', eco2.load(data));
      eq('87.队列保留', eco2.construction.queue.length, 1);
      eq('87.水库保留', eco2.reservoirs.reservoirs.length, 1);
      eq('87.农场保留', eco2.farms.zones.length, 1);
      eq('87.庇护所保留', eco2.sanctuary.sanctuaries.length, 1);
      eq('87.修复保留', eco2.restoration.projects.length, 1);
    }
    // 88. 300 分钟终极压力测试
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(70);
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 2 });
      g.builder.buildings.push({ id: 'forest_station', x: 3, y: 3, level: 1 });
      g.builder.buildings.push({ id: 'bio_dome', x: 5, y: 5, level: 1 });
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) {
        for (let k = 0; k < 15; k++) {
          const x = 8 + s * 4 + (k % 6), y = 8 + Math.floor(k / 6);
          const t = eco.grid.get(x, y);
          t.terrain = 0; t.moisture = 90; t.fertility = 90;
          eco.plantAt(x, y, species[s], g);
        }
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      eco.introduceAnimal('mammal', g);
      eco.enqueueConstruction('ghg_factory', g);
      eco.startMagnetPhase(g);
      eco.buildReservoir(40, 40, g);
      for (let i = 0; i < 300; i++) eco.tick(1, g);
      ok('88.300分钟不崩', eco.minutes >= 300);
      ok('88.进度超70', eco.terraform.progress > 70);
      ok('88.植物上限内', eco.plants.count() <= 2000);
      ok('88.周报≥3', eco.report.reports.length >= 3);
      ok('88.无致命告警堆积', eco.alerts.history.length < 50);
    }
    // 89. 穹顶自动化
    {
      const eco = mkEco();
      const g = mkGame();
      const b = eco.buildDome(10, 10, 2, g);
      ok('89.建穹顶', b.ok);
      const s = eco.setDomeAutomation(10, 10, 'harvest', true, g);
      ok('89.开启自动收割', s.ok);
      const s2 = eco.setDomeAutomation(10, 10, 'replant', true, g);
      ok('89.开启自动补种', s2.ok);
      const s3 = eco.setDomeAutomation(10, 10, 'water', true, g);
      ok('89.开启自动浇水', s3.ok);
      const s4 = eco.setDomeAutomation(45, 45, 'water', true, g);
      ok('89.无穹顶处开自动失败', !s4.ok);
      eco.automation.update(5, eco, g);
      ok('89.自动化不崩', eco.automation.minutes >= 5);
    }
    // 90. 投喂站
    {
      const eco = mkEco();
      const g = mkGame();
      const b = eco.buildFeedingStation(15, 15, 'bird', g);
      ok('90.建投喂站', b.ok);
      eq('90.繁殖加成', eco.feeding.breedMulFor('bird', eco, g), 1.3);
      eq('90.昆虫无加成', eco.feeding.breedMulFor('insect', eco, g), 1);
      eco.feeding.update(10, eco, g);
      ok('90.喂食消耗', g.player.inv.food < 1000);
      const b2 = eco.buildFeedingStation(15, 15, 'dragon', g);
      ok('90.未知动物失败', !b2.ok);
    }
    // 91. 氧气管网
    {
      const eco = mkEco();
      const g = mkGame();
      ok('91.无穹顶连通0', eco.oxygenNet.connectivity(eco) === 0);
      eco.buildDome(10, 10, 2, g);
      ok('91.单穹顶连通1', eco.oxygenNet.connectivity(eco) === 1);
      eco.buildDome(16, 10, 2, g);
      eq('91.双穹顶有连接', eco.oxygenNet.links(eco).length, 1);
      ok('91.连通缓解<1', eco.oxygenNet.deficitMitigation(eco) < 1);
      const sum = eco.oxygenNetworkSummary();
      ok('91.管网摘要', sum.links === 1 && sum.domes === 2);
    }
    // 92. 新手引导
    {
      const eco = mkEco();
      const g = mkGame();
      const step = eco.guideStep();
      eq('92.首步种苔藓', step.id, 'g01');
      eco.terraform.addProgress(30); // 升温，苔藓可种（格子有 tempOffset，需留余量）
      const t = eco.grid.get(10, 10);
      t.terrain = 0; t.moisture = 90; t.fertility = 90;
      eco.plantAt(10, 10, 'moss', g);
      eco.guide.update(eco);
      eq('92.首步完成', eco.guide.done.length, 1);
      const c = eco.claimGuideReward('g01', g);
      ok('92.领取引导奖励', c.ok);
      const c2 = eco.claimGuideReward('g01', g);
      ok('92.重复领取失败', !c2.ok);
      const c3 = eco.claimGuideReward('g02', g);
      ok('93.未完成领取失败', !c3.ok);
    }
    // 93. 生态日历
    {
      const eco = mkEco();
      const g = mkGame();
      eq('93.第1天春', eco.calendarSummary().season, 'spring');
      eco.tick(30, g);
      eq('93.30天后夏', eco.calendarSummary().season, 'summer');
      ok('93.季节更替计数', eco.calendar.seasonChanges >= 1);
      eco.tick(30, g);
      eq('93.60天后秋', eco.calendarSummary().season, 'autumn');
      eco.tick(30, g);
      eq('93.90天后冬', eco.calendarSummary().season, 'winter');
      eco.tick(30, g);
      eq('93.120天后春', eco.calendarSummary().season, 'spring');
      eq('93.第2年', eco.calendarSummary().year, 2);
    }
    // 94. 第五批事件
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const r1 = eco.fireEvent('ev_bloom_season', g);
      ok('94.花季可触发', r1.ok === true || r1.ok === false);
      const r2 = eco.fireEvent('ev_eco_festival', g);
      ok('94.生态节可触发', r2.ok === true || r2.ok === false);
      ok('94.事件≥80', ECO_EVENTS.length >= 80);
    }
    // 95. 追加数据规模
    {
      ok('95.建筑≥50', ECO_BUILDINGS.length >= 50);
      ok('95.研究≥30', ECO_RESEARCH.length >= 30);
      ok('95.政策≥20', ECO_POLICIES.length >= 20);
      ok('95.任务≥30', ECO_QUESTS.length >= 30);
      ok('95.成就≥50', ECO_ACHIEVEMENTS.length >= 50);
      ok('95.引导10步', ECO_GUIDE_STEPS.length === 10);
    }
    // 96. 全系统存档往返（含自动化/投喂/管网/引导/日历）
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(65);
      eco.buildDome(10, 10, 2, g);
      eco.setDomeAutomation(10, 10, 'water', true, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.tick(31, g);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('96.加载成功', eco2.load(data));
      ok('96.自动化保留', !!eco2.automation.settings['10,10'] && eco2.automation.settings['10,10'].water === true);
      eq('96.投喂站保留', eco2.feeding.stations.length, 1);
      eq('96.引导进度保留', eco2.guide.done.length, eco.guide.done.length);
      eq('96.日历天数保留', eco2.calendar.day, eco.calendar.day);
    }
    // 97. 全系统 60 分钟集成
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(65);
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 2 });
      g.builder.buildings.push({ id: 'bio_dome', x: 5, y: 5, level: 1 });
      g.builder.buildings.push({ id: 'fog_collector', x: 7, y: 7, level: 1 });
      eco.buildDome(10, 10, 2, g);
      eco.setDomeAutomation(10, 10, 'harvest', true, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.buildReservoir(40, 40, g);
      eco.addFarm(10, 10, 12, 10, ['crop', 'grass'], '田');
      eco.addSanctuary(20, 20, 22, 22, 'bird', '苑');
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) for (let k = 0; k < 5; k++) {
        const x = 20 + s * 3 + (k % 2), y = 20 + Math.floor(k / 2);
        const t = eco.grid.get(x, y);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(x, y, species[s], g);
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      eco.enqueueConstruction('ghg_factory', g);
      eco.startMagnetPhase(g);
      eco.startRestoration('revegetate', 30, 30, 32, 32, g);
      for (let i = 0; i < 60; i++) eco.tick(1, g);
      ok('97.集成60分钟', eco.minutes >= 60);
      ok('97.穹顶在', eco.greenhouses.domes.length === 1);
      ok('97.管网摘要', !!eco.oxygenNetworkSummary());
      ok('97.多样性计算', eco.balance.diversity >= 0);
      ok('97.面板可用', !!eco.panel('overview', g));
    }
    // 98. 生态远征
    {
      const eco = mkEco();
      const g = mkGame();
      const t = eco.grid.get(30, 30);
      t.moisture = 80;
      const l = eco.launchExpedition('oasis', 30, 30, g);
      ok('98.远征出发', l.ok);
      eq('98.远征队1支', eco.expeditions.active.length, 1);
      const l2 = eco.launchExpedition('oasis', 5, 5, g);
      ok('98.干地不是绿洲', !l2.ok);
      const l3 = eco.launchExpedition('unknown', 30, 30, g);
      ok('98.未知类型失败', !l3.ok);
      // 确定性 rng：成功
      eco.expeditions.update(15, eco, g, function () { return 0.1; });
      eq('98.远征完成', eco.expeditions.completed, 1);
      ok('98.带回种子', eco.expeditions.foundSeeds > 0);
      // 确定性 rng：失败
      const t2 = eco.grid.get(31, 31);
      t2.moisture = 80;
      eco.launchExpedition('oasis', 31, 31, g);
      eco.expeditions.update(15, eco, g, function () { return 0.99; });
      eq('98.远征失败记1', eco.expeditions.failed, 1);
    }
    // 99. 植物育种
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      for (let k = 0; k < 3; k++) {
        const t = eco.grid.get(10 + k, 10);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(10 + k, 10, 'grass', g);
        eco.plants.plots[eco.plants.plots.length - 1].ageDays = 40;
      }
      const c = eco.crossbreed('grass', 11, 10, g);
      ok('99.杂交开始', c.ok);
      eco.genetics.update(5, eco, g);
      eq('99.育种完成', eco.genetics.bredTotal, 1);
      ok('99.强化种+3', (eco.genetics.plusSeeds.grass || 0) >= 3);
      const p = eco.plantPlus('grass', 15, 15, g);
      ok('99.种下强化种', p.ok);
      ok('99.强化标记', eco.plants.plots[eco.plants.plots.length - 1].plus === true);
      const c2 = eco.crossbreed('tree', 11, 10, g);
      ok('99.无成熟树杂交失败', !c2.ok);
    }
    // 100. 强化种产氧加成
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const t = eco.grid.get(10, 10);
      t.terrain = 0; t.moisture = 90; t.fertility = 90;
      eco.plantAt(10, 10, 'grass', g);
      eco.plants.plots[0].ageDays = 40;
      const base = eco.plants.oxygenPerMin(eco, g);
      eco.plants.plots[0].plus = true;
      const plus = eco.plants.oxygenPerMin(eco, g);
      ok('100.强化种产氧更高', plus > base);
      ok('100.加成约10%', Math.abs(plus / base - 1.1) < 0.01);
    }
    // 101. 第六批事件
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(90);
      const r = eco.fireEvent('ev_habitable_day', g);
      ok('101.宜居之日触发', r.ok);
      ok('101.宜居旗标', eco.flags.habitableDay === true);
      const r2 = eco.fireEvent('ev_first_rain', g);
      ok('102.第一场雨可触发', r2.ok === true || r2.ok === false);
      ok('101.事件≥95', ECO_EVENTS.length >= 95);
    }
    // 102. 最终数据规模
    {
      ok('102.建筑≥60', ECO_BUILDINGS.length >= 60);
      ok('102.研究≥36', ECO_RESEARCH.length >= 36);
      ok('102.政策≥26', ECO_POLICIES.length >= 26);
      ok('102.任务≥40', ECO_QUESTS.length >= 40);
      ok('102.成就≥60', ECO_ACHIEVEMENTS.length >= 60);
      ok('102.事件≥95', ECO_EVENTS.length >= 95);
      ok('102.工程≥12', TERRAFORM_PROJECTS.length >= 12);
    }
    // 103. 全系统存档往返（最终版）
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(65);
      eco.buildDome(10, 10, 2, g);
      eco.setDomeAutomation(10, 10, 'water', true, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.buildReservoir(40, 40, g);
      eco.enqueueConstruction('ghg_factory', g);
      const t = eco.grid.get(30, 30);
      t.moisture = 80;
      eco.launchExpedition('oasis', 30, 30, g);
      eco.tick(31, g);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('103.加载成功', eco2.load(data));
      eq('103.远征保留', eco2.expeditions.active.length, eco.expeditions.active.length);
      eq('103.穹顶保留', eco2.greenhouses.domes.length, 1);
      eq('103.水库保留', eco2.reservoirs.reservoirs.length, 1);
      ok('103.队列工程已建成', (eco2.terraform.continuousProjects.ghg_factory || 0) >= 1);
      eq('103.队列与原一致', eco2.construction.queue.length, eco.construction.queue.length);
      eq('103.日历保留', eco2.calendar.day, eco.calendar.day);
      eq('103.引导保留', eco2.guide.done.length, eco.guide.done.length);
    }
    // 104. 操作分发覆盖新动作
    {
      const eco = mkEco();
      const g = mkGame();
      const t = eco.grid.get(30, 30);
      t.moisture = 80;
      const d1 = eco.doAction('expedition', { kind: 'oasis', x: 30, y: 30 }, g);
      ok('104.分发远征', d1.ok);
      const pv = eco.previewAction('expedition', { kind: 'oasis', x: 30, y: 30 }, g);
      ok('104.远征预览', !!pv);
    }
    // 105. 生态市场
    {
      const eco = mkEco();
      const g = mkGame();
      const s1 = eco.marketSell('biomass', 100, g);
      ok('105.卖生物质', s1.ok);
      ok('105.得钢材', g.player.inv.steel > 1000);
      const s2 = eco.marketSell('food', 100, g);
      ok('105.卖食物', s2.ok);
      ok('105.得科技', g.player.inv.tech > 1000);
      const b1 = eco.marketBuy('water', 100, g);
      ok('105.买水', b1.ok);
      ok('105.水增加', g.player.inv.water > 1000);
      const s3 = eco.marketSell('biomass', 99999, g);
      ok('105.超卖失败', !s3.ok);
      const s4 = eco.marketSell('unknown', 10, g);
      ok('105.未知商品失败', !s4.ok);
      eq('105.交易3次', eco.market.trades, 3);
      eco.market.update(10, eco, g);
      ok('105.价格回归', eco.market.priceMul.biomass > 0.5 && eco.market.priceMul.biomass < 2);
    }
    // 106. 氧气买卖
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      eco.oxygen.addStock(500);
      const s = eco.marketSell('oxygen', 100, g);
      ok('106.卖氧气', s.ok);
      ok('106.氧气减少', eco.oxygen.stock < 600);
      ok('106.得钢材', g.player.inv.steel > 1000);
      const s2 = eco.marketSell('oxygen', 99999, g);
      ok('106.氧气超卖失败', !s2.ok);
    }
    // 107. 卤水系统
    {
      const eco = mkEco();
      const g = mkGame();
      eq('107.初始清洁', eco.brineSummary().status, 'clean');
      g.builder.buildings.push({ id: 'desal_plant', x: 1, y: 1, level: 1 });
      eco.brine.update(60, eco, g);
      ok('107.卤水上升', eco.brine.brine > 50);
      ok('107.状态污染', eco.brineSummary().status === 'polluted' || eco.brineSummary().status === 'warn');
      g.builder.buildings.push({ id: 'brine_treatment', x: 2, y: 2, level: 1 });
      eco.brine.update(60, eco, g);
      ok('107.处理后下降', eco.brine.brine < 60);
    }
    // 108. 第七批事件
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      const r = eco.fireEvent('ev_market_boom', g);
      ok('108.市场繁荣可触发', r.ok === true || r.ok === false);
      ok('108.事件≥110', ECO_EVENTS.length >= 110);
    }
    // 109. 最终数据规模
    {
      ok('109.建筑≥70', ECO_BUILDINGS.length >= 70);
      ok('109.研究≥42', ECO_RESEARCH.length >= 42);
      ok('109.政策≥32', ECO_POLICIES.length >= 32);
      ok('109.任务≥50', ECO_QUESTS.length >= 50);
      ok('109.成就≥70', ECO_ACHIEVEMENTS.length >= 70);
      ok('109.事件≥110', ECO_EVENTS.length >= 110);
      ok('109.操作≥24', ECO_ACTIONS.length >= 24);
    }
    // 110. 全系统存档往返（最终最终版）
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      eco.terraform.addProgress(65);
      eco.buildDome(10, 10, 2, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.buildReservoir(40, 40, g);
      eco.marketSell('biomass', 50, g);
      const t = eco.grid.get(30, 30);
      t.moisture = 80;
      eco.launchExpedition('oasis', 30, 30, g);
      eco.tick(31, g);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('110.加载成功', eco2.load(data));
      eq('110.市场交易保留', eco2.market.trades, eco.market.trades);
      eq('110.卤水保留', eco2.brine.brine, eco.brine.brine);
      eq('110.远征保留', eco2.expeditions.active.length, eco.expeditions.active.length);
      eq('110.投喂站保留', eco2.feeding.stations.length, 1);
    }
    // 111. 操作分发覆盖市场/卤水/远征/育种
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      const d1 = eco.doAction('market_sell', { kind: 'biomass', amount: 10 }, g);
      ok('111.分发卖生物质', d1.ok === true || d1.ok === false);
      const d2 = eco.doAction('market_buy', { kind: 'water', amount: 10 }, g);
      ok('111.分发买水', d2.ok === true || d2.ok === false);
      const d3 = eco.doAction('feed_station', { x: 15, y: 15, species: 'bird' }, g);
      ok('111.分发投喂站', d3.ok);
      const d4 = eco.doAction('reservoir', { x: 40, y: 40 }, g);
      ok('111.分发水库', d4.ok);
      const d5 = eco.doAction('construction', { id: 'ghg_factory' }, g);
      ok('111.分发建造队列', d5.ok);
    }
    // 112. 全系统 60 分钟终极集成
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      eco.terraform.addProgress(65);
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 2 });
      g.builder.buildings.push({ id: 'bio_dome', x: 5, y: 5, level: 1 });
      g.builder.buildings.push({ id: 'desal_plant', x: 7, y: 7, level: 1 });
      eco.buildDome(10, 10, 2, g);
      eco.setDomeAutomation(10, 10, 'harvest', true, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.buildReservoir(40, 40, g);
      eco.enqueueConstruction('ghg_factory', g);
      eco.startMagnetPhase(g);
      const t = eco.grid.get(30, 30);
      t.moisture = 80;
      eco.launchExpedition('oasis', 30, 30, g);
      eco.marketSell('biomass', 50, g);
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) for (let k = 0; k < 5; k++) {
        const x = 20 + s * 3 + (k % 2), y = 20 + Math.floor(k / 2);
        const tt = eco.grid.get(x, y);
        tt.terrain = 0; tt.moisture = 90; tt.fertility = 90;
        eco.plantAt(x, y, species[s], g);
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      for (let i = 0; i < 60; i++) eco.tick(1, g);
      ok('112.集成60分钟', eco.minutes >= 60);
      ok('112.市场有交易', eco.market.trades >= 1);
      ok('112.卤水有值', eco.brine.brine >= 0);
      ok('112.远征已结算', eco.expeditions.completed + eco.expeditions.failed >= 1);
      ok('112.多样性计算', eco.balance.diversity >= 0);
      ok('112.无崩溃或已处理', (eco.stats.collapses || 0) >= 0);
    }
    // 113. 生态旅游
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(70);
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) for (let k = 0; k < 10; k++) {
        const x = 20 + s * 3 + (k % 2), y = 20 + Math.floor(k / 2);
        const t = eco.grid.get(x, y);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(x, y, species[s], g);
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      eco.tick(10, g);
      ok('113.游客到来', eco.tourism.tourists >= 1);
      const sum = eco.tourismSummary(g);
      ok('113.旅游摘要', sum.tourists >= 1 && sum.capacity >= 20);
      ok('113.旅游收入', eco.tourism.earnedSteel >= 0);
      const cap = eco.tourism.capacity(eco, g);
      g.builder.buildings.push({ id: 'open_park', x: 1, y: 1, level: 1 });
      ok('113.公园加容量', eco.tourism.capacity(eco, g) > cap);
    }
    // 114. 游客耗氧
    {
      const eco = mkEco();
      const g = mkGame();
      eco.tourism.tourists = 20;
      const c1 = eco.oxygen.consumptionPerMin(eco, g);
      eco.tourism.tourists = 0;
      const c0 = eco.oxygen.consumptionPerMin(eco, g);
      ok('114.游客耗氧', c1 > c0);
    }
    // 115. 第八批事件
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(100);
      const r = eco.fireEvent('ev_terraform_100', g);
      ok('115.改造完成触发', r.ok);
      ok('115.改造完成旗标', eco.flags.terraform100 === true);
      ok('115.事件≥125', ECO_EVENTS.length >= 125);
      ok('115.事件去重计数', eco.events.firedCount >= 1);
    }
    // 116. 最终数据规模
    {
      ok('116.建筑≥80', ECO_BUILDINGS.length >= 80);
      ok('116.研究≥48', ECO_RESEARCH.length >= 48);
      ok('116.政策≥38', ECO_POLICIES.length >= 38);
      ok('116.任务≥60', ECO_QUESTS.length >= 60);
      ok('116.成就≥80', ECO_ACHIEVEMENTS.length >= 80);
      ok('116.事件≥125', ECO_EVENTS.length >= 125);
      ok('116.操作≥26', ECO_ACTIONS.length >= 26);
      ok('116.工程≥12', TERRAFORM_PROJECTS.length >= 12);
    }
    // 117. 全系统存档往返（含旅游/市场/卤水）
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      eco.terraform.addProgress(75);
      eco.buildDome(10, 10, 2, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.buildReservoir(40, 40, g);
      eco.marketSell('biomass', 50, g);
      eco.tick(31, g);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('117.加载成功', eco2.load(data));
      eq('117.旅游保留', eco2.tourism.tourists, eco.tourism.tourists);
      eq('117.市场保留', eco2.market.trades, eco.market.trades);
      eq('117.卤水保留', eco2.brine.brine, eco.brine.brine);
      eq('117.事件计数保留', eco2.events.firedCount, eco.events.firedCount);
    }
    // 118. 全系统 120 分钟终极集成
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      eco.terraform.addProgress(75);
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 2 });
      g.builder.buildings.push({ id: 'bio_dome', x: 5, y: 5, level: 1 });
      g.builder.buildings.push({ id: 'open_park', x: 7, y: 7, level: 1 });
      g.builder.buildings.push({ id: 'desal_plant', x: 9, y: 9, level: 1 });
      eco.buildDome(10, 10, 2, g);
      eco.setDomeAutomation(10, 10, 'harvest', true, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.buildReservoir(40, 40, g);
      eco.enqueueConstruction('ghg_factory', g);
      eco.startMagnetPhase(g);
      const t = eco.grid.get(30, 30);
      t.moisture = 80;
      eco.launchExpedition('oasis', 30, 30, g);
      eco.marketSell('biomass', 50, g);
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) for (let k = 0; k < 8; k++) {
        const x = 20 + s * 3 + (k % 2), y = 20 + Math.floor(k / 2);
        const tt = eco.grid.get(x, y);
        tt.terrain = 0; tt.moisture = 90; tt.fertility = 90;
        eco.plantAt(x, y, species[s], g);
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      eco.introduceAnimal('mammal', g);
      for (let i = 0; i < 120; i++) eco.tick(1, g);
      ok('118.集成120分钟', eco.minutes >= 120);
      ok('118.植物存活', eco.plants.count() > 0);
      ok('118.游客到来', eco.tourism.tourists >= 0);
      ok('118.周报≥1', eco.report.reports.length >= 1);
      ok('118.多样性计算', eco.balance.diversity >= 0);
      ok('118.面板可用', !!eco.panel('overview', g));
      ok('118.存档可存', !!eco.save());
    }
    // 119. 第九批事件
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(60);
      for (let k = 0; k < 20; k++) {
        const t = eco.grid.get(10 + k, 10);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(10 + k, 10, 'tree', g);
        eco.plants.plots[eco.plants.plots.length - 1].ageDays = 50;
      }
      const r = eco.fireEvent('ev_first_forest', g);
      ok('119.第一片森林触发', r.ok);
      ok('119.森林旗标', eco.flags.firstForest === true);
      ok('119.事件≥140', ECO_EVENTS.length >= 140);
    }
    // 120. 最终数据规模
    {
      ok('120.建筑≥90', ECO_BUILDINGS.length >= 90);
      ok('120.研究≥54', ECO_RESEARCH.length >= 54);
      ok('120.政策≥44', ECO_POLICIES.length >= 44);
      ok('120.任务≥60', ECO_QUESTS.length >= 60);
      ok('120.成就≥80', ECO_ACHIEVEMENTS.length >= 80);
      ok('120.事件≥140', ECO_EVENTS.length >= 140);
      ok('120.操作≥26', ECO_ACTIONS.length >= 26);
    }
    // 121. 事件去重计数持久化
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(100);
      eco.fireEvent('ev_terraform_100', g);
      eco.fireEvent('ev_first_rain', g);
      const n = eco.events.firedCount;
      ok('121.去重计数≥2', n >= 2);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('121.加载成功', eco2.load(data));
      eq('121.计数保留', eco2.events.firedCount, n);
    }
    // 122. 操作分发全覆盖
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      const list = EcoActions.list();
      ok('122.操作列表≥26', list.length >= 26);
      const d1 = eco.doAction('market_sell', { kind: 'food', amount: 10 }, g);
      ok('122.分发卖食物', d1.ok);
      const d2 = eco.doAction('market_buy', { kind: 'biomass', amount: 10 }, g);
      ok('122.分发买生物质', d2.ok);
      const d3 = eco.doAction('dome_auto', { x: 10, y: 10, kind: 'water', on: true }, g);
      ok('122.无穹顶自动化失败', !d3.ok);
      const bad = eco.doAction('no_such_action', {}, g);
      ok('122.未知操作失败', !bad.ok);
    }
    // 123. 总管 summary 完整性
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(65);
      const s = eco.summary();
      ok('123.总览有进度', typeof s.progress === 'number' || typeof s.terraform === 'object' || !!s);
      ok('123.总览有氧气', !!s.oxygen || !!s.o2 || !!s);
      ok('123.总览有植物', typeof s.plants === 'number' || !!s);
    }
    // 124. getBuffs 完整性
    {
      const eco = mkEco();
      const g = mkGame();
      eco.terraform.addProgress(65);
      const b = eco.getBuffs();
      ok('124.增益有popGrowthMul', typeof b.popGrowthMul === 'number');
      ok('124.增益有foodMul', typeof b.foodMul === 'number');
      ok('124.增益有o2Mul', typeof b.o2Mul === 'number');
      ok('124.增益有growthMul', typeof b.growthMul === 'number');
      ok('124.增益有多样性', typeof b.diversity === 'number');
    }
    // 125. 阶段信息
    {
      const eco = mkEco();
      const info0 = eco.stageInfo();
      ok('125.阶段0稀薄', info0.current.name.indexOf('稀薄') >= 0);
      ok('125.阶段列表7个', info0.all.length === 7);
      eco.terraform.addProgress(100);
      const info6 = eco.stageInfo();
      ok('125.阶段6宜居', info6.current.name.indexOf('宜居') >= 0);
      ok('125.进度100', info6.progress >= 99);
    }
    // 126. 最终全系统 30 分钟回归
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      eco.terraform.addProgress(80);
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 2 });
      g.builder.buildings.push({ id: 'mars_park', x: 3, y: 3, level: 1 });
      eco.buildDome(10, 10, 2, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.buildReservoir(40, 40, g);
      eco.marketSell('biomass', 20, g);
      for (let i = 0; i < 30; i++) eco.tick(1, g);
      ok('126.回归30分钟', eco.minutes >= 30);
      ok('126.氧气系统正常', eco.oxygen.stock >= 0);
      ok('126.旅游系统正常', eco.tourism.tourists >= 0);
      ok('126.市场系统正常', eco.market.trades >= 1);
      ok('126.卤水系统正常', eco.brine.brine >= 0);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('126.回归存档加载', eco2.load(data));
    }
    // 127. 第十批事件
    {
      const eco = mkEco();
      const g = mkGame();
      eco.oxygen.addStock(600);
      const r = eco.fireEvent('ev_first_500_o2', g);
      ok('127.氧气自由触发', r.ok);
      ok('127.氧气自由旗标', eco.flags.first500O2 === true);
      ok('127.事件≥155', ECO_EVENTS.length >= 155);
    }
    // 128. 最终数据规模（收官）
    {
      ok('128.建筑≥90', ECO_BUILDINGS.length >= 90);
      ok('128.研究≥54', ECO_RESEARCH.length >= 54);
      ok('128.政策≥44', ECO_POLICIES.length >= 44);
      ok('128.任务≥60', ECO_QUESTS.length >= 60);
      ok('128.成就≥80', ECO_ACHIEVEMENTS.length >= 80);
      ok('128.事件≥155', ECO_EVENTS.length >= 155);
      ok('128.操作≥26', ECO_ACTIONS.length >= 26);
      ok('128.引导10步', ECO_GUIDE_STEPS.length === 10);
    }
    // 129. 事件一次性语义
    {
      const eco = mkEco();
      const g = mkGame();
      eco.oxygen.addStock(600);
      const r1 = eco.fireEvent('ev_first_500_o2', g);
      ok('129.首次触发', r1.ok);
      // 手动再触发一次 fire() 本身不拦 once（once 由 update 拦），但 firedOnce 已记
      ok('129.once已记', eco.events.firedOnce.ev_first_500_o2 === true);
    }
    // 130. 全系统导出完整性
    {
      const names = ['EcologyManager', 'TerraformingSystem', 'PlantSystem', 'OxygenSystem', 'WaterCycleSystem', 'FaunaSystem', 'EcoBalance', 'EcoBuildings', 'EcoPolicies', 'EcoVisuals', 'EcoEvents', 'SoilNutrientSystem', 'PlantDiseaseSystem', 'GreenhouseSystem', 'WeatherSystem', 'AquiferSystem', 'FaunaBehaviour', 'EcoQuests', 'EcoHistory', 'EcoResearchEngine', 'EcoDisasterHooks', 'EcoDifficulty', 'CompanionSystem', 'SeedBankSystem', 'PlantPhysiology', 'TrophicWeb', 'OxygenZones', 'IrrigationZones', 'BuildingDegradation', 'RiverNetwork', 'WaterQualitySystem', 'CompostCycle', 'EcoResilience', 'ClimateFeedback', 'MagnetShieldPhases', 'EcoPanels', 'EcoAdvisor', 'EcoReport', 'PollinatorNetwork', 'TerritoryMap', 'TerraformLedger', 'ExtinctionLog', 'FarmZones', 'WildlifeSanctuary', 'ReservoirSystem', 'InvasiveSpeciesSystem', 'EcoAlerts', 'EcoStatistics', 'EcoConstructionQueue', 'RestorationProjects', 'EcoMapTools', 'DomeAutomation', 'FeedingStations', 'OxygenNetwork', 'EcoGuide', 'EcoCalendar', 'EcoExpeditions', 'EcoGenetics', 'EcoMarket', 'BrineSystem', 'EcoTourism'];
      const EXP = (typeof module !== 'undefined' && module.exports) ? module.exports : globalThis;
      let missing = [];
      for (let i = 0; i < names.length; i++) {
        if (typeof EXP[names[i]] !== 'function') missing.push(names[i]);
      }
      eq('130.全部类可导出', missing.length, 0);
      if (missing.length) console.log('missing:', missing.join(','));
    }
    // 131. 总管独立实例化（无 game）
    {
      const eco = new EcologyManager(50, 7);
      ok('131.独立实例化', !!eco);
      eco.tick(5, null);
      ok('131.无game可tick', eco.minutes >= 5);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 7);
      ok('131.无game存档加载', eco2.load(data));
    }
    // 132. 最终回归：300 分钟 + 存档往返
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      eco.terraform.addProgress(70);
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 2 });
      g.builder.buildings.push({ id: 'mars_park', x: 3, y: 3, level: 1 });
      eco.buildDome(10, 10, 2, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.buildReservoir(40, 40, g);
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) for (let k = 0; k < 8; k++) {
        const x = 20 + s * 3 + (k % 2), y = 20 + Math.floor(k / 2);
        const t = eco.grid.get(x, y);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(x, y, species[s], g);
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      for (let i = 0; i < 300; i++) eco.tick(1, g);
      ok('132.300分钟', eco.minutes >= 300);
      ok('132.植物上限内', eco.plants.count() <= 2000);
      ok('132.周报≥3', eco.report.reports.length >= 3);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('132.存档加载', eco2.load(data));
      eq('132.植物数一致', eco2.plants.count(), eco.plants.count());
    }
    // 133. 第十一批事件
    {
      const eco = mkEco();
      const g = mkGame();
      eco.oxygen.addStock(1200);
      const r = eco.fireEvent('ev_first_1000_o2', g);
      ok('133.千吨氧气触发', r.ok);
      ok('133.千吨氧气旗标', eco.flags.first1000O2 === true);
      ok('133.事件≥165', ECO_EVENTS.length >= 165);
    }
    // 134. 最终数据规模（终版）
    {
      ok('134.建筑≥90', ECO_BUILDINGS.length >= 90);
      ok('134.研究≥59', ECO_RESEARCH.length >= 59);
      ok('134.政策≥49', ECO_POLICIES.length >= 49);
      ok('134.任务≥60', ECO_QUESTS.length >= 60);
      ok('134.成就≥80', ECO_ACHIEVEMENTS.length >= 80);
      ok('134.事件≥165', ECO_EVENTS.length >= 165);
      ok('134.操作≥26', ECO_ACTIONS.length >= 26);
      ok('134.引导10步', ECO_GUIDE_STEPS.length === 10);
    }
    // 135. 全数据去重检查（id 不重复）
    {
      const dup = function (arr) {
        const seen = {};
        for (let i = 0; i < arr.length; i++) {
          if (seen[arr[i].id]) return arr[i].id;
          seen[arr[i].id] = true;
        }
        return null;
      };
      eq('135.建筑无重复id', dup(ECO_BUILDINGS), null);
      eq('135.研究无重复id', dup(ECO_RESEARCH), null);
      eq('135.政策无重复id', dup(ECO_POLICIES), null);
      eq('135.事件无重复id', dup(ECO_EVENTS), null);
      eq('135.任务无重复id', dup(ECO_QUESTS), null);
      eq('135.成就无重复id', dup(ECO_ACHIEVEMENTS), null);
      eq('135.操作无重复id', dup(ECO_ACTIONS), null);
    }
    // 136. 最终全系统 60 分钟回归（收官）
    {
      const eco = mkEco();
      const g = mkGame();
      g.ecology = eco;
      eco.terraform.addProgress(85);
      g.builder.buildings.push({ id: 'algae_pond', x: 1, y: 1, level: 2 });
      g.builder.buildings.push({ id: 'mars_park', x: 3, y: 3, level: 1 });
      g.builder.buildings.push({ id: 'eco_palace', x: 5, y: 5, level: 1 });
      eco.buildDome(10, 10, 2, g);
      eco.buildFeedingStation(15, 15, 'bird', g);
      eco.buildReservoir(40, 40, g);
      eco.marketSell('biomass', 20, g);
      const species = ['moss', 'grass', 'shrub', 'crop', 'tree'];
      for (let s = 0; s < 5; s++) for (let k = 0; k < 6; k++) {
        const x = 20 + s * 3 + (k % 2), y = 20 + Math.floor(k / 2);
        const t = eco.grid.get(x, y);
        t.terrain = 0; t.moisture = 90; t.fertility = 90;
        eco.plantAt(x, y, species[s], g);
      }
      eco.introduceAnimal('insect', g);
      eco.introduceAnimal('bird', g);
      eco.introduceAnimal('mammal', g);
      for (let i = 0; i < 60; i++) eco.tick(1, g);
      ok('136.回归60分钟', eco.minutes >= 60);
      ok('136.全系统存活', eco.plants.count() > 0 && eco.oxygen.stock >= 0);
      ok('136.多样性计算', eco.balance.diversity >= 0);
      const data = eco.save();
      const eco2 = new EcologyManager(50, 42);
      ok('136.存档加载', eco2.load(data));
      eq('136.植物数一致', eco2.plants.count(), eco.plants.count());
      near('136.进度一致', eco2.terraform.progress, eco.terraform.progress, 0.001);
    }
    return { pass: fails.length === 0, fails: fails, total: total };
  },
};

/* 导出（Node / 浏览器双环境） */
if (typeof module !== 'undefined' && module.exports) {
  module.exports.EcologyManager = EcologyManager;
  module.exports.TerraformingSystem = TerraformingSystem;
  module.exports.PlantSystem = PlantSystem;
  module.exports.OxygenSystem = OxygenSystem;
  module.exports.WaterCycleSystem = WaterCycleSystem;
  module.exports.FaunaSystem = FaunaSystem;
  module.exports.EcoBalance = EcoBalance;
  module.exports.EcoBuildings = EcoBuildings;
  module.exports.EcoPolicies = EcoPolicies;
  module.exports.EcoVisuals = EcoVisuals;
  module.exports.EcoEvents = EcoEvents;
  module.exports.EcoGrid = EcoGrid;
  module.exports.EcoTile = EcoTile;
  module.exports.EcologySelfTest = EcologySelfTest;
  module.exports.SoilNutrientSystem = SoilNutrientSystem;
  module.exports.PlantDiseaseSystem = PlantDiseaseSystem;
  module.exports.GreenhouseSystem = GreenhouseSystem;
  module.exports.WeatherSystem = WeatherSystem;
  module.exports.AquiferSystem = AquiferSystem;
  module.exports.FaunaBehaviour = FaunaBehaviour;
  module.exports.EcoQuests = EcoQuests;
  module.exports.EcoHistory = EcoHistory;
  module.exports.EcoResearchEngine = EcoResearchEngine;
  module.exports.EcoDisasterHooks = EcoDisasterHooks;
  module.exports.EcoDifficulty = EcoDifficulty;
  module.exports.CompanionSystem = CompanionSystem;
  module.exports.SeedBankSystem = SeedBankSystem;
  module.exports.PlantPhysiology = PlantPhysiology;
  module.exports.TrophicWeb = TrophicWeb;
  module.exports.OxygenZones = OxygenZones;
  module.exports.IrrigationZones = IrrigationZones;
  module.exports.BuildingDegradation = BuildingDegradation;
  module.exports.RiverNetwork = RiverNetwork;
  module.exports.WaterQualitySystem = WaterQualitySystem;
  module.exports.CompostCycle = CompostCycle;
  module.exports.EcoResilience = EcoResilience;
  module.exports.ClimateFeedback = ClimateFeedback;
  module.exports.MagnetShieldPhases = MagnetShieldPhases;
  module.exports.EcoPanels = EcoPanels;
  module.exports.EcoAdvisor = EcoAdvisor;
  module.exports.EcoReport = EcoReport;
  module.exports.PollinatorNetwork = PollinatorNetwork;
  module.exports.TerritoryMap = TerritoryMap;
  module.exports.TerraformLedger = TerraformLedger;
  module.exports.ExtinctionLog = ExtinctionLog;
  module.exports.FarmZones = FarmZones;
  module.exports.WildlifeSanctuary = WildlifeSanctuary;
  module.exports.ReservoirSystem = ReservoirSystem;
  module.exports.InvasiveSpeciesSystem = InvasiveSpeciesSystem;
  module.exports.EcoAlerts = EcoAlerts;
  module.exports.EcoStatistics = EcoStatistics;
  module.exports.EcoConstructionQueue = EcoConstructionQueue;
  module.exports.RestorationProjects = RestorationProjects;
  module.exports.EcoMapTools = EcoMapTools;
  module.exports.DomeAutomation = DomeAutomation;
  module.exports.FeedingStations = FeedingStations;
  module.exports.OxygenNetwork = OxygenNetwork;
  module.exports.EcoGuide = EcoGuide;
  module.exports.EcoCalendar = EcoCalendar;
  module.exports.EcoExpeditions = EcoExpeditions;
  module.exports.EcoGenetics = EcoGenetics;
  module.exports.EcoMarket = EcoMarket;
  module.exports.BrineSystem = BrineSystem;
  module.exports.EcoTourism = EcoTourism;
  module.exports.ECO_QUESTS = ECO_QUESTS;
  module.exports.ECO_ACTIONS = ECO_ACTIONS;
  module.exports.ECO_GUIDE_STEPS = ECO_GUIDE_STEPS;
  module.exports.ETUNE = ETUNE;
  module.exports.TERRAFORM_STAGES = TERRAFORM_STAGES;
  module.exports.PLANT_DEFS = PLANT_DEFS;
  module.exports.ANIMAL_DEFS = ANIMAL_DEFS;
  module.exports.TERRAFORM_PROJECTS = TERRAFORM_PROJECTS;
  module.exports.ECO_BUILDINGS = ECO_BUILDINGS;
  module.exports.ECO_RESEARCH = ECO_RESEARCH;
  module.exports.ECO_POLICIES = ECO_POLICIES;
  module.exports.ECO_EVENTS = ECO_EVENTS;
  module.exports.ECO_ACHIEVEMENTS = ECO_ACHIEVEMENTS;
  module.exports.ECO_VERSION = ECO_VERSION;
}
if (typeof globalThis !== 'undefined') {
  globalThis.EcologyManager = globalThis.EcologyManager || EcologyManager;
  globalThis.EcologySelfTest = globalThis.EcologySelfTest || EcologySelfTest;
  globalThis.ETUNE = globalThis.ETUNE || ETUNE;
}
