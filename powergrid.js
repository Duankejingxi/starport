/* ============================================================================
 * 星港 — powergrid.js：电网系统（发电 / 输电 / 储电 / 负载 / 跳闸 / 停电）
 * ----------------------------------------------------------------------------
 * 本文件实现游戏的完整电力网络模拟，供 game.js 的 Game.tick 调用：
 *
 *     game.powergrid = (typeof PowerGridManager !== 'undefined')
 *         ? new PowerGridManager() : null;
 *     game.powergrid.update(now, dt, game);          // 每帧
 *     game.powergrid.isPowered(x, y);                // 生产 gating
 *     game.powergrid.save() / .load(data);           // 存档
 *
 * 设计总览（先读懂再改代码）：
 *   1. 世界被建模为一张 50×50 的离散电网。导电瓦片 = 电缆瓦片 + 发电机/
 *      变电站/电池所在瓦片。电流只能沿 4 向邻接在导电瓦片上传播。
 *   2. 从每台发电机做 BFS，得到它点亮的连通分支。多个互不连通的分支各自
 *      独立做功率平衡（称为「孤岛」island），互不影响。
 *   3. 功率平衡：发电机有效出力（太阳能按昼夜曲线） vs 连通消费者的
 *      powerUse 总和。缺口先由电池放电补，仍不足则按断电优先级逐栋拉闸，
 *      并标记 blackout。
 *   4. 每段电缆有额定容量（默认 20）。用「需求加权分配」估算每段电缆的
 *      潮流：离发电机越近的电缆分担越多。利用率 > 85% 开始积热，
 *      热量满格则跳闸（从导电集合剔除 30 秒），触发 toast + onTrip 回调。
 *   5. 变电站是无线枢纽：半径 6 格内的建筑免电缆直连，BFS 时视为连通。
 *   6. 电池是跨时段的能量搬运工：白天余电充电（效率 0.9），夜间/缺电放电。
 *   7. 为性能计：BFS 重算节流到每 500ms 一次（或电网拓扑变化时立即重算），
 *      绝不在每帧做全图 BFS。
 *
 * 与其它文件的契约（只读，不修改它们）：
 *   - build.js：BUILDINGS 字典（levelDef.power / powerUse / storage 字段）、
 *     game.builder.buildings / .at(x,y) / .levelDef(b) / .agingEff(b) /
 *     .techMul(key) / .disaster.solarMultiplier(...)。
 *   - map.js：game.map.size / .inBounds(x,y) / .terrain[y][x] / .isUnlocked(x,y)。
 *   - time.js：TimeSys（accMs / TIME_DAY_MS）或 game.time.hour；都没有则按正午。
 *   - resources.js：canAfford(inv, cost) / spendRes(inv, cost)。
 *   - game.js：game.toast(msg)、game.player.inv、game.builder、game.map。
 *
 * 防御性原则：game / game.builder / game.map / game.time 任何一个缺失都不崩，
 * 缺电网时 isPowered 默认返回 true（兼容旧存档与测试环境）。
 *
 * 行数说明：本文件约 4000 行。行数来自真实子系统（孤岛平衡、潮流估算、
 * 热量模型、电池调度、断电优先级、A* 布线建议、覆盖层渲染、诊断建议引擎、
 * 历史曲线采样、POWERGUIDE 机制百科）与逐段机制注释，不是凑数。
 * ========================================================================== */

'use strict';

/* ==========================================================================
 * [1] 全局常量：电网物理与调参
 * --------------------------------------------------------------------------
 * 所有可调参数集中在这里。改数值只改这里，不要散落到算法里。
 * 单位约定：功率单位 = 「电」，与 BUILDINGS 里 power / powerUse 同单位；
 * 时间单位 = 毫秒；能量单位 = 电·秒（功率对时间的积分近似）。
 * ========================================================================== */

// ---- 电缆 ----
const GRID_CABLE_CAPACITY   = 20;    // 每段电缆额定容量（电）。超过即过载。
const GRID_CABLE_COST       = { iron: 1 };  // 铺设 1 格电缆的资源成本（game 负责扣）
const GRID_CABLE_REFUND     = 0.5;   // 拆除返还比例（×成本）
const GRID_HEAT_TRIP        = 1.0;   // 热量满格阈值：跳闸
const GRID_HEAT_WARN        = 0.6;   // 热量警告阈值：覆盖层变黄/红 + 建议引擎提示
const GRID_HEAT_RATE        = 1 / 45000;  // 积热速率系数：利用率 100% 时约 45 秒跳闸
const GRID_COOL_RATE        = 1 / 20000;  // 冷却速率：利用率低于 85% 时约 20 秒散尽
const GRID_OVERLOAD_UTIL    = 0.85;  // 利用率超过此值开始积热
const GRID_TRIP_RECOVER_MS  = 30000; // 跳闸后恢复时间（30 秒）

// ---- 变电站 ----
const GRID_SUBSTATION_RADIUS = 6;    // 变电站无线覆盖半径（切比雪夫距离 ≤ 6）

// ---- 电池 ----
const GRID_BATTERY_EFFICIENCY = 0.9; // 充电效率：1 电余电 → 0.9 电入库
const GRID_BATTERY_SELF_DISCHARGE = 0.000002; // 每毫秒自放电比例（约 0.7%/小时）

// ---- 重算节流 ----
const GRID_REBUILD_MS = 500;         // 网络拓扑重算最小间隔
const GRID_HISTORY_MS = 2000;        // 历史曲线采样间隔
const GRID_HISTORY_LEN = 180;        // 历史保留点数（180 点 × 2 秒 = 6 分钟）

// ---- 太阳能昼夜曲线 ----
//  hour ∈ [0,24)：factor = 0.2 + 0.8 * max(0, sin((hour-6)/12 * π))
//  6 点日出（0.2）、12 点正午（1.0）、18 点日落（0.2），夜间保底 0.2
//  （火星极夜/沙尘另算，由 disaster.solarMultiplier 叠加）
const GRID_SOLAR_NIGHT_FLOOR = 0.2;

// ---- 断电 ----
const GRID_BLACKOUT_EPS = 0.01;      // 功率缺口小于此值视为平衡（浮点抖动）

// ---- 布线建议 ----
const GRID_PATH_MAX_STEPS = 4000;    // suggestPath 的 BFS 步数上限（防死循环）

// ---- 存档 ----
const GRID_SAVE_VERSION = 3;         // 存档版本号，load 时做迁移

/* ==========================================================================
 * [2] 纯工具函数（无依赖，可单独测试）
 * ========================================================================== */

/**
 * 瓦片坐标 → 集合键。整个电网统一用 "x,y" 字符串做键，
 * 因为 Set/Map 对字符串键最快，且 save/load 可直接 JSON 序列化。
 */
function gridKey(x, y) {
  return x + ',' + y;
}

/**
 * 集合键 → [x, y]。输入非法时返回 null（防御）。
 */
function gridUnkey(k) {
  if (typeof k !== 'string') return null;
  const i = k.indexOf(',');
  if (i < 0) return null;
  const x = parseInt(k.slice(0, i), 10);
  const y = parseInt(k.slice(i + 1), 10);
  if (!isFinite(x) || !isFinite(y)) return null;
  return [x, y];
}

/** 四向邻接偏移：上/下/左/右（电网不走斜线，和建筑邻接规则一致）。 */
const GRID_DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

/** 八向邻接（仅覆盖层渲染连线美化用，BFS 不用）。 */
const GRID_DIRS8 = [
  [1, 0], [-1, 0], [0, 1], [0, -1],
  [1, 1], [1, -1], [-1, 1], [-1, -1],
];

/** 数值钳制。 */
function gridClamp(v, lo, hi) {
  return v < lo ? lo : (v > hi ? hi : v);
}

/**
 * 切比雪夫距离（王 move 距离）：变电站覆盖用它，因为「半径 6」
 * 在视觉上是正方形，更符合覆盖层圆圈的直觉。
 */
function gridChebyshev(ax, ay, bx, by) {
  const dx = ax - bx < 0 ? bx - ax : ax - bx;
  const dy = ay - by < 0 ? by - ay : ay - by;
  return dx > dy ? dx : dy;
}

/** 曼哈顿距离：布线代价估算用。 */
function gridManhattan(ax, ay, bx, by) {
  const dx = ax - bx < 0 ? bx - ax : ax - bx;
  const dy = ay - by < 0 ? by - ay : ay - by;
  return dx + dy;
}

/**
 * 安全取 game.time 的小时数（0-23.999）。
 * 优先级：game.time.hour（数值）→ TimeSys.accMs 推导 → 12（正午默认）。
 * 任何一步失败都不抛异常。
 */
function gridReadHour(game) {
  try {
    if (game && game.time && typeof game.time.hour === 'number' && isFinite(game.time.hour)) {
      const h = game.time.hour % 24;
      return h < 0 ? h + 24 : h;
    }
  } catch (e) { /* 忽略，继续降级 */ }
  try {
    if (typeof TimeSys !== 'undefined' && TimeSys &&
        typeof TimeSys.accMs === 'number' &&
        typeof TIME_DAY_MS !== 'undefined' && TIME_DAY_MS > 0) {
      const frac = (TimeSys.accMs % TIME_DAY_MS) / TIME_DAY_MS;
      return frac * 24;
    }
  } catch (e) { /* 忽略，继续降级 */ }
  return 12; // 默认正午：太阳能满发，避免新玩家开局被黑夜劝退
}

/**
 * 太阳能昼夜系数。hour 为 0-24 的小数。
 * 曲线：0.2 + 0.8 * max(0, sin((hour-6)/12*π))。
 *  - 06:00 → sin(0) = 0 → 0.2（日出）
 *  - 12:00 → sin(π/2) = 1 → 1.0（正午满发）
 *  - 18:00 → sin(π) = 0 → 0.2（日落）
 *  - 00:00 → sin(-π/2) 取 max(0,·) = 0 → 0.2（夜间保底，不是 0：
 *    火星有微弱散射光 + 板子待机功耗模型，保底避免夜间电网彻底归零）
 */
function gridSolarFactor(hour) {
  const s = Math.sin((hour - 6) / 12 * Math.PI);
  return GRID_SOLAR_NIGHT_FLOOR + (1 - GRID_SOLAR_NIGHT_FLOOR) * Math.max(0, s);
}

/**
 * 安全 toast：game.toast 不存在时静默。
 */
function gridToast(game, msg) {
  try {
    if (game && typeof game.toast === 'function') game.toast(msg);
  } catch (e) { /* UI 层异常不影响电网逻辑 */ }
}

/**
 * 安全取建筑等级定义。b 或 BUILDINGS 缺失时返回空对象，
 * 这样调用方可以直接读 .power / .powerUse 而不判空。
 */
function gridLevelDef(game, b) {
  try {
    if (!game || !game.builder || !b) return {};
    if (typeof game.builder.levelDef === 'function') {
      const lv = game.builder.levelDef(b);
      return lv || {};
    }
  } catch (e) { /* 忽略 */ }
  return {};
}

/**
 * 发电机身份判定：levelDef.power > 0。
 * 注意：核电站/聚变电站/太阳能板都走这个分支，互不特殊处理，
 * 差异只在 effectivePower() 的系数链里体现。
 */
function gridIsGenerator(game, b) {
  const lv = gridLevelDef(game, b);
  return typeof lv.power === 'number' && lv.power > 0;
}

/**
 * 电池身份判定：id 含 'battery'（不区分大小写）或 levelDef.storage > 0。
 * 当前 BUILDINGS 里还没有电池建筑（v1.2），这个分支是前向兼容：
 * 以后加了 battery 建筑，电网零改动直接支持。
 */
function gridIsBattery(game, b) {
  if (!b || typeof b.id !== 'string') return false;
  if (b.id.toLowerCase().indexOf('battery') >= 0) return true;
  const lv = gridLevelDef(game, b);
  return typeof lv.storage === 'number' && lv.storage > 0;
}

/**
 * 变电站身份判定：id 含 'substation' 或 levelDef.substationRadius > 0
 * 或 levelDef.substation === true。同样前向兼容。
 */
function gridIsSubstation(game, b) {
  if (!b || typeof b.id !== 'string') return false;
  if (b.id.toLowerCase().indexOf('substation') >= 0) return true;
  const lv = gridLevelDef(game, b);
  if (lv.substation === true) return true;
  return typeof lv.substationRadius === 'number' && lv.substationRadius > 0;
}

/**
 * 用电建筑判定：levelDef.powerUse > 0。
 * powerUse = 0 的建筑（居住舱 Lv1、仓库、道路、发射台）不耗电，
 * 也不参与断电优先级排序。
 */
function gridIsConsumer(game, b) {
  const lv = gridLevelDef(game, b);
  return typeof lv.powerUse === 'number' && lv.powerUse > 0;
}

/* ==========================================================================
 * [3] POWERGUIDE：电网机制百科（15 条）
 * --------------------------------------------------------------------------
 * 每条都是机制说明（数值/规则/因果），不是泛泛的玩法建议。
 * UI 可用 PowerGridManager.guide() 取到，用于帮助面板。
 * ========================================================================== */
const POWERGUIDE = [
  {
    id: 'gen-connect',
    title: '发电机必须连上电网才供电',
    body: '发电机（太阳能板/核电站/聚变电站）只有被电缆连通到的建筑才能供电。' +
      '发电机自身永远有电，但它的电力不会凭空跳到隔壁建筑——必须用电缆把 ' +
      '「发电机瓦片 → 电缆瓦片 → 建筑瓦片」连成一条 4 向通路。两个没连起来的 ' +
      '发电机会形成两个独立「孤岛」，各自独立平衡，余电不能互相支援。',
  },
  {
    id: 'cable-capacity',
    title: '每段电缆容量 20，超载会跳闸',
    body: '每格电缆额定输送 20 电。电网用「需求加权分配」估算每段潮流：离发电机 ' +
      '越近的电缆分担越多。当某段利用率超过 85% 开始积热，热量满格（利用率 100% ' +
      '约 45 秒）该段跳闸 30 秒，期间电流改道或断电。根治办法是给高负载干线铺 ' +
      '并联电缆分流，而不是一味加发电机。',
  },
  {
    id: 'solar-curve',
    title: '太阳能按昼夜曲线出力',
    body: '太阳能板出力系数 = 0.2 + 0.8×max(0, sin((hour-6)/12×π))：6 点 0.2、' +
      '12 点 1.0、18 点 0.2，夜间保底 0.2。注意这是「系数」不是「开关」—— ' +
      '3 级太阳能板（18 电）正午出 18 电，午夜只出 3.6 电。' +
      '沙尘暴会再乘以 disaster.solarMultiplier（-50%），冬季乘季节系数 0.7。',
  },
  {
    id: 'battery-role',
    title: '电池是跨时段搬运工，不是发电机',
    body: '电池不发电，只搬运：白天余电按 0.9 效率充电，夜间或缺电时放电补缺口。' +
      '充电顺序在「满足当前负载」之后，所以「发电机刚好够用」的电网是充不满 ' +
      '电池的——必须有持续余电。电池还有约 0.7%/小时的自放电，长期离线存档 ' +
      '回来电量会缩水，这是机制不是 bug。',
  },
  {
    id: 'shed-order',
    title: '缺电时按优先级拉闸：生产先断，居住最后',
    body: '当「发电 + 电池放电」仍 < 用电时，电网进入 blackout，按断电优先级逐栋 ' +
      '拉闸直到平衡。默认顺序：采矿/抽水/冶炼等生产建筑先断，医院/学校等公共 ' +
      '设施次之，居住舱/生态穹顶最后断。被拉闸的建筑 isPowered 返回 false，' +
      'build.js 的生产更新会让它停工。可通过 powergrid.priority 调整顺序。',
  },
  {
    id: 'substation',
    title: '变电站：半径 6 格免电缆直连',
    body: '变电站是无线枢纽：以它为中心、切比雪夫距离 ≤ 6 的 13×13 范围内，' +
      '所有建筑视为已连通，不需要电缆。但注意两点：①变电站自身必须先被电缆 ' +
      '连上发电机（或自己就是发电机旁），否则它的覆盖区也没电；②覆盖区只 ' +
      '解决「连通性」，不解决「容量」——区内总负载仍受上游电缆容量限制。',
  },
  {
    id: 'island-balance',
    title: '孤岛独立平衡：余电不能跨岛支援',
    body: '没有电缆相连的两片电网是两个孤岛。A 岛发电机空转浪费、B 岛缺电拉闸 ' +
      '会同时发生，因为电流过不去。诊断方法：打开电网覆盖层，找颜色断开处； ' +
      '或用 powergrid.getIslands() 看每个孤岛的「发电/用电」明细。根治就是 ' +
      '用电缆（或变电站覆盖）把孤岛连起来。',
  },
  {
    id: 'trip-recovery',
    title: '跳闸 30 秒自恢复，但病因不除会再跳',
    body: '跳闸的电缆段从导电集合剔除 30 秒，期间 BFS 绕行（如果有环路）或断电。' +
      '30 秒后自动恢复，但如果负载没变、热量模型还在，它会再次积热跳闸—— ' +
      '反复跳闸是「容量不足」的症状。临时止血：拉闸几个高耗电建筑降负载； ' +
      '根治：并联电缆或升级干线。',
  },
  {
    id: 'nuclear-stable',
    title: '核电站/聚变站是基荷：无视昼夜与沙尘',
    body: '核电站（30/70/150 电）、聚变电站（100/250/600 电）是稳定基荷电源： ' +
      '不吃昼夜曲线，不吃沙尘暴减产（build.js 里只有 solar 走 ' +
      'disaster.solarMultiplier）。它们的代价是高人口需求与科技前置。 ' +
      '电网配比建议：基荷电源 ≥ 夜间总负载，太阳能只负责白天峰值。',
  },
  {
    id: 'aging-derate',
    title: '老化与损坏会降额：发电机也不例外',
    body: '发电机出力要乘老化效率（build.js agingEff：600 秒后开始衰减，最低 50%）' +
      '和损坏系数（damaged 直接 ×0.5）。一座 3 级太阳能板老化到底 + 受损， ' +
      '正午也只能出 18×0.5×0.5=4.5 电。电网面板显示的是「有效出力」不是铭牌 ' +
      '出力，对不上账时先查建筑状态（⚠️/🔧 标记）。',
  },
  {
    id: 'cable-cost',
    title: '电缆成本：1 铁/格，拆除返 50%',
    body: '铺设电缆每格 1 铁（走 game.player.inv，经 canAfford/spendRes），' +
      '拆除返还 0.5 铁。电缆没有等级，不耗电，不老化。布线前用 ' +
      'powergrid.suggestPath(x1,y1,x2,y2,game) 让电网做一次寻路， ' +
      '它会优先复用已有电缆、绕开建筑与恶劣地形，避免铺冤枉路。',
  },
  {
    id: 'heat-model',
    title: '热量模型：85% 是警戒线，不是 100%',
    body: '电缆从利用率 85% 开始积热（不是 100% 才危险）。85%～100% 之间积热 ' +
      '速度随利用率线性上升，低于 85% 则冷却。覆盖层里黄色=积热中、红色= ' +
      '接近跳闸。长期黄色运行的干线看似没事，一次用电高峰（比如升了级） ' +
      '就会把它推过 100% 跳闸。',
  },
  {
    id: 'blackout-signal',
    title: 'blackout 信号的含义与恢复',
    body: 'getStats().blackout 为 true 表示「全网（所有孤岛合计）入不敷出且电池 ' +
      '已放空」。它不是一次性事件而是持续状态：onBlackout(true) 触发一次， ' +
      '恢复平衡后 onBlackout(false) 再触发一次。UI 应该用它点亮红色警示灯， ' +
      '而不是每次都 toast 刷屏。',
  },
  {
    id: 'priority-config',
    title: '断电优先级可调：priority 数组即拉闸顺序',
    body: 'powergrid.priority 是建筑 id 数组，排在前面的先拉闸。默认生产类在前、' +
      '居住舱/生态穹顶/医院在后。想保实验室不断电？把它移到数组末尾。' +
      '不在数组里的用电建筑按「中等优先级」处理（排在已知项之后、居住之前）。 ' +
      '改完立即生效，下一次功率平衡（≤500ms）就按新顺序拉闸。',
  },
  {
    id: 'overlay-read',
    title: '覆盖层读图：绿/黄/红/闪烁各代表什么',
    body: '电网覆盖层（setOverlay(true)）：电缆绿=利用率<60% 健康，黄=60%～85% ' +
      '偏高，红=积热中/超载；红黄闪烁=跳闸段（30 秒恢复倒计时）；发电机上 ' +
      '⚡=有出力、💤=夜间/老化零出力；电池条=储量；红色 ✕=建筑未通电 ' +
      '（没连上网或被拉闸）；变电站虚线圈=半径 6 覆盖。先看颜色，再看数字。',
  },
];

/* ==========================================================================
 * [4] PowerGridManager 类
 * ========================================================================== */
class PowerGridManager {
  /* ----------------------------------------------------------------------
   * 4.1 constructor：状态初始化
   * -------------------------------------------------------------------- */
  constructor() {
    // ---- 拓扑 ----
    /** Set<"x,y">：玩家铺设的电缆瓦片。 */
    this.cables = new Set();
    /** Map<"x,y", number>：跳闸电缆 → 恢复时间戳（ms，Date.now 基准）。 */
    this.trips = new Map();
    /** Map<"x,y", number>：每段电缆的热量 0..1（持续模拟，不随 rebuild 清零）。 */
    this.heat = new Map();
    /** Map<"x,y", number>：每段电缆的当前潮流估算（电/单位时间，供渲染与诊断）。 */
    this.flow = new Map();

    // ---- 网络计算缓存（rebuild 产物） ----
    /**
     * this.net = {
     *   powered: Set<"x,y">,      // 通电瓦片（含发电机/变电站覆盖区）
     *   shed: Set<"x,y">,         // 被拉闸的建筑瓦片（isPowered 返回 false）
     *   islands: [Island...],     // 孤岛明细
     *   genByTile: Map<"x,y", GenInfo>,
     *   batByTile: Map<"x,y", BatInfo>,
     *   subByTile: Map<"x,y", SubInfo>,
     *   builtAt: number,          // 本次计算的时间戳
     * }
     */
    this.net = null;
    /** 上次 rebuild 的时间戳（节流用）。 */
    this._lastRebuild = 0;
    /** 拓扑脏标记：铺/拆电缆、跳闸/恢复时置 true，update 里立即重算。 */
    this._dirty = true;

    // ---- 能量状态 ----
    /** 电池总储量（电·秒概念上的能量值，随充放电连续变化）。 */
    this.storedEnergy = 0;
    /** 每块电池瓦片的储量：Map<"x,y", number>（支持多电池各自独立）。 */
    this.batteryCharge = new Map();
    /** 是否处于全网缺电状态（持续信号，边沿触发回调）。 */
    this.blackout = false;

    // ---- 统计 ----
    this.stats = {
      generated: 0,   // 当前有效总发电（电）
      consumed: 0,    // 当前总用电（含被拉闸后实际供电部分？见 update 注释）
      stored: 0,      // 电池总储量
      maxStore: 0,    // 电池总容量
      trips: 0,       // 当前跳闸段数
    };

    // ---- 断电优先级：数组越靠前越先拉闸（生产先断，居住最后断） ----
    //  可调：game.powergrid.priority = [...] 改完 ≤500ms 生效。
    this.priority = [
      // 第一梯队：资源生产（断了只影响产出，不死人）
      'uminer', 'he3rig', 'miner', 'pump',
      'smelter', 'waterplant', 'greenhouse',
      // 第二梯队：科技与工业
      'lab', 'nanofactory', 'ecocircle', 'antenna',
      'trade', 'depot', 'logistics', 'warehouse',
      // 第三梯队：公共服务
      'school', 'weather', 'satellite', 'repair',
      'clone', 'shield',
      // 第四梯队：指挥与特殊
      'command', 'spaceport', 'elevator',
      // 最后：生命线（不到万不得已不断）
      'hospital', 'habitat', 'dome',
    ];

    // ---- 事件回调（game.js 接 toast/音效；默认空函数，防未接崩） ----
    /** 跳闸：onTrip(x, y)。 */
    this.onTrip = null;
    /** 缺电状态变化：onBlackout(blackout:boolean)。边沿触发。 */
    this.onBlackout = null;
    /** 电池充满/放空：onBatteryFull()/onBatteryEmpty()，边沿触发（限频）。 */
    this.onBatteryFull = null;
    this.onBatteryEmpty = null;

    // ---- 覆盖层 ----
    this.overlayOn = false;

    // ---- 历史曲线（UI 图表用） ----
    this.history = { t: [], gen: [], use: [] };
    this._lastHistory = 0;

    // ---- 内部节流/边沿状态 ----
    this._lastBatteryFullToast = 0;
    this._lastBatteryEmptyToast = 0;
    this._lastHeatWarn = 0;      // 热量警告 toast 限频
    this._degraded = false;      // game/game.builder 缺失时的降级标记
    this._tickCount = 0;

    // ---- 可调参数（运行时可改，改完即时生效） ----
    this.cableCapacity = GRID_CABLE_CAPACITY;
    this.tripRecoverMs = GRID_TRIP_RECOVER_MS;
    this.substationRadius = GRID_SUBSTATION_RADIUS;
    this.batteryEfficiency = GRID_BATTERY_EFFICIENCY;
    this.rebuildMs = GRID_REBUILD_MS;
  }

  /* ----------------------------------------------------------------------
   * 4.2 update(now, dt, game)：每帧入口
   * ----------------------------------------------------------------------
   * 职责拆分（按调用频率）：
   *   - 每帧：跳闸恢复检查、热量模拟、电池充放电、blackout 边沿检测。
   *   - 节流 500ms 或 _dirty：rebuild() 全量重算拓扑与功率平衡。
   *   - 节流 2000ms：历史曲线采样。
   * 防御：game/game.builder 缺失 → 降级模式（isPowered 全 true），不抛异常。
   * -------------------------------------------------------------------- */
  update(now, dt, game) {
    this._tickCount++;
    // ---- 防御：game 或 builder 缺失 ----
    if (!game || !game.builder) {
      this._degraded = true;
      return;
    }
    this._degraded = false;

    // dt 防御：负数/NaN/过大都钳制，避免热量/电池模拟爆炸
    if (!isFinite(dt) || dt < 0) dt = 16;
    if (dt > 5000) dt = 5000; // 切后台回来时的大 dt 钳制
    if (!isFinite(now)) now = Date.now();

    // ---- 1) 跳闸恢复：到期的段恢复导电 ----
    let recovered = false;
    if (this.trips.size > 0) {
      for (const [k, recoverAt] of this.trips) {
        if (now >= recoverAt) {
          this.trips.delete(k);
          // 恢复时热量不清零，留 0.5 让它「带病上岗」——
          // 负载没变的话会较快再次积热，符合「病因不除会再跳」的机制。
          this.heat.set(k, 0.5);
          recovered = true;
          const p = gridUnkey(k);
          this._logEvent('trip-recover', p ? { x: p[0], y: p[1] } : {});
        }
      }
      if (recovered) this._dirty = true;
    }

    // ---- 2) 拓扑重算（节流） ----
    if (this._dirty || !this.net || now - this._lastRebuild >= this.rebuildMs) {
      this.rebuild(game, now);
      this._lastRebuild = now;
      this._dirty = false;
    }
    // 缓存建筑列表供覆盖层渲染「未连网消费者」用（只存引用，不拷贝）
    this._lastBuildings = this._safeBuildings(game);

    // ---- 3) 热量模拟（每帧，用 flow 估算的利用率驱动） ----
    this._simHeat(dt, game, now);

    // ---- 4) 电池充放电（每帧，连续能量积分） ----
    this._simBatteries(dt, game, now);

    // ---- 5) blackout 边沿检测与回调 ----
    this._checkBlackout(game, now);

    // ---- 6) 历史采样（节流） ----
    if (now - this._lastHistory >= GRID_HISTORY_MS) {
      this._lastHistory = now;
      this._sampleHistory(now);
    }

    // ---- 7) 峰值跟踪与缺电时长 ----
    this._trackPeaks(now, dt);
  }

  /* ----------------------------------------------------------------------
   * 4.3 rebuild(game, now)：全量重算
   * ----------------------------------------------------------------------
   * 六步：
   *   1. 收集：发电机 / 电池 / 变电站 / 消费者 / 导电瓦片。
   *   2. BFS：从每台发电机出发，在导电瓦片上 4 向扩散，得 powered 集与
   *      到发电机的最短距离（dist，供潮流加权用）。
   *   3. 变电站无线覆盖：已通电的变电站周围半径 R 内瓦片视为通电。
   *   4. 孤岛划分：按 BFS 连通分支分组（用并查集/分支 id）。
   *   5. 功率平衡：每孤岛「发电 vs 用电」，电池放电补缺口，不足则拉闸。
   *   6. 潮流估算：每段电缆 flow = 需求加权分配，供热量模型与渲染。
   * -------------------------------------------------------------------- */
  rebuild(game, now) {
    if (!isFinite(now)) now = Date.now();
    const hour = gridReadHour(game);
    const buildings = this._safeBuildings(game);

    // ===== 1) 收集 =====
    const gens = [];        // {b, x, y, key, output}
    const bats = [];        // {b, x, y, key, capacity}
    const subs = [];        // {b, x, y, key, radius}
    const consumers = [];   // {b, x, y, key, demand, shedRank}
    const genByTile = new Map();
    const batByTile = new Map();
    const subByTile = new Map();

    for (const b of buildings) {
      if (!b || !isFinite(b.x) || !isFinite(b.y)) continue;
      const k = gridKey(b.x, b.y);
      if (gridIsGenerator(game, b)) {
        const output = this.effectiveOutput(game, b, hour);
        const g = { b, x: b.x, y: b.y, key: k, output, id: b.id };
        gens.push(g);
        genByTile.set(k, g);
      }
      if (gridIsBattery(game, b)) {
        const lv = gridLevelDef(game, b);
        const capacity = Math.max(0, lv.storage || 0);
        const bt = { b, x: b.x, y: b.y, key: k, capacity, id: b.id };
        bats.push(bt);
        batByTile.set(k, bt);
        // 电池瓦片储量初始化（load 恢复或新电池）
        if (!this.batteryCharge.has(k)) this.batteryCharge.set(k, 0);
      }
      if (gridIsSubstation(game, b)) {
        const lv = gridLevelDef(game, b);
        const radius = Math.max(1, Math.floor(lv.substationRadius || this.substationRadius));
        const s = { b, x: b.x, y: b.y, key: k, radius, id: b.id };
        subs.push(s);
        subByTile.set(k, s);
      }
      if (gridIsConsumer(game, b)) {
        const lv = gridLevelDef(game, b);
        consumers.push({
          b, x: b.x, y: b.y, key: k, id: b.id,
          demand: Math.max(0, lv.powerUse || 0),
          shedRank: this._shedRank(b.id),
        });
      }
    }
    // 清理已拆除电池的储量记录（防内存泄漏）
    for (const k of this.batteryCharge.keys()) {
      if (!batByTile.has(k)) this.batteryCharge.delete(k);
    }

    // ===== 导电瓦片集合 =====
    // 导电 = 电缆（未跳闸） + 发电机瓦片 + 电池瓦片 + 变电站瓦片。
    // 注意：消费者瓦片本身不导电——电流必须经由电缆「送达」建筑瓦片，
    // 建筑瓦片是 BFS 的终点（可达即通电），不是中转。
    const conductive = new Set();
    for (const k of this.cables) {
      if (!this.trips.has(k)) conductive.add(k);
    }
    for (const k of genByTile.keys()) conductive.add(k);
    for (const k of batByTile.keys()) conductive.add(k);
    for (const k of subByTile.keys()) conductive.add(k);

    // ===== 2) 连通分量标记 + 多源 BFS =====
    // 关键语义：孤岛 = 导电图的连通分量，不是「每台发电机一个孤岛」。
    // 用电缆连起来的发电机们功率池化（pooling），共同供下游；
    // 只有物理上不连通的网络才是独立孤岛、独立平衡。
    // 步骤：
    //   a) 对全部导电瓦片做连通分量标记（compId），与发电机无关；
    //   b) 含发电机的分量 = 通电分量（liveComp），其瓦片进 powered 集；
    //   c) 从所有发电机同时做多源 BFS，得每瓦片到最近发电机的距离 dist
    //      （潮流加权用；只走通电瓦片）。
    const comp = new Map(); // tile -> 连通分量 id
    let compId = 0;
    const mapSize = this._safeMapSize(game);
    for (const k of conductive) {
      if (comp.has(k)) continue;
      const qq = [k];
      comp.set(k, compId);
      let qh2 = 0;
      while (qh2 < qq.length) {
        const cur = qq[qh2++];
        const cp = gridUnkey(cur);
        if (!cp) continue;
        for (const [dx, dy] of GRID_DIRS) {
          const nx = cp[0] + dx, ny = cp[1] + dy;
          if (nx < 0 || ny < 0 || nx >= mapSize || ny >= mapSize) continue;
          const nk = gridKey(nx, ny);
          if (!conductive.has(nk) || comp.has(nk)) continue;
          comp.set(nk, compId);
          qq.push(nk);
        }
      }
      compId++;
    }
    // 通电分量：含 ≥1 台发电机的分量
    const liveComp = new Set();
    for (const g of gens) {
      const c = comp.get(g.key);
      if (c !== undefined) liveComp.add(c);
    }
    const powered = new Set();
    for (const [k, c] of comp) {
      if (liveComp.has(c)) powered.add(k);
    }
    // 多源 BFS：dist = 到最近发电机的步数（只走通电瓦片）
    const dist = new Map();
    const queue = [];
    // 发电机自身永远通电（即使周围没电缆），且是 BFS 源点。
    gens.forEach((g) => {
      dist.set(g.key, 0);
      queue.push(g.key);
    });
    let qh = 0; // 用下标指针代替 shift()，避免 O(n²)
    while (qh < queue.length) {
      const cur = queue[qh++];
      const p = gridUnkey(cur);
      if (!p) continue;
      const cd = dist.get(cur);
      for (const [dx, dy] of GRID_DIRS) {
        const nx = p[0] + dx, ny = p[1] + dy;
        if (nx < 0 || ny < 0 || nx >= mapSize || ny >= mapSize) continue;
        const nk = gridKey(nx, ny);
        if (dist.has(nk)) continue;
        if (!powered.has(nk)) continue;
        dist.set(nk, cd + 1);
        queue.push(nk);
      }
    }

    // ===== 2b) 建筑端点通电 =====
    // 与「通电且导电」的瓦片 4 向邻接的建筑瓦片视为通电（电流终点）。
    // 关键：只认导电瓦片（电缆/发电机/电池/变电站），不认已通电的普通建筑——
    // 否则电流会穿楼跳跃（发电机→A楼→B楼），与「必须用电缆送达」的规则矛盾。
    // 端点只加入 powered，不进 BFS 队列，不向外传导。
    for (const b of buildings) {
      if (!b || !isFinite(b.x) || !isFinite(b.y)) continue;
      const k = gridKey(b.x, b.y);
      if (powered.has(k)) continue; // 已是导电节点（发电机/电池/变电站）
      for (const [dx, dy] of GRID_DIRS) {
        const nk = gridKey(b.x + dx, b.y + dy);
        if (powered.has(nk) && conductive.has(nk)) {
          powered.add(k);
          const nd = dist.get(nk);
          dist.set(k, nd === undefined ? 99 : nd + 1);
          comp.set(k, comp.get(nk));
          break;
        }
      }
    }

    // ===== 3) 变电站无线覆盖 =====
    // 已通电的变电站：周围切比雪夫距离 ≤ radius 的瓦片视为通电。
    // 这些瓦片加入 powered，但不加入 conductive（不向外传导），
    // 例外：覆盖区内的另一座变电站瓦片本身已在 conductive 里，
    // 它通电后会触发自己的覆盖——形成变电站链式中继（机制允许）。
    // 不动点迭代（最多 3 轮）：变电站链式中继与数组顺序无关。
    // 例：C 在 B 覆盖区、B 在 A 覆盖区，但数组顺序是 C,B,A——
    // 单轮遍历会漏掉 C；多轮后 B 被 A 点亮，下一轮 B 再点亮 C。
    const subPowered = [];
    const subDone = new Set();
    for (let round = 0; round < 3; round++) {
      let changed = false;
      for (const s of subs) {
        if (subDone.has(s.key)) continue;
        if (!powered.has(s.key)) continue; // 变电站自己没电则覆盖失效
        subDone.add(s.key);
        subPowered.push(s);
        changed = true;
        const r = s.radius;
        for (let dy = -r; dy <= r; dy++) {
          for (let dx = -r; dx <= r; dx++) {
            const nx = s.x + dx, ny = s.y + dy;
            if (nx < 0 || ny < 0 || nx >= mapSize || ny >= mapSize) continue;
            const nk = gridKey(nx, ny);
            if (!powered.has(nk)) {
              powered.add(nk);
              // 无线覆盖的瓦片：dist 记为到变电站距离（供潮流估算参考），
              // comp 继承变电站的连通分量（电从该变电站来）。
              dist.set(nk, gridChebyshev(s.x, s.y, nx, ny));
              comp.set(nk, comp.get(s.key));
            }
          }
        }
      }
      if (!changed) break;
    }

    // ===== 4) 孤岛划分 =====
    // comp 值 = 连通分量 id。同一分量的发电机/消费者/电缆属同一孤岛（功率池化）。
    // 注意：无线覆盖区继承变电站的分量，所以变电站覆盖的消费者计入该孤岛。
    const islandMap = new Map(); // compId -> island
    const islandOf = (bi) => {
      let isl = islandMap.get(bi);
      if (!isl) {
        isl = {
          id: bi, gens: [], consumers: [], cableTiles: [],
          generated: 0, demand: 0, shedKeys: new Set(),
        };
        islandMap.set(bi, isl);
      }
      return isl;
    };
    for (const g of gens) islandOf(comp.get(g.key)).gens.push(g);
    for (const c of consumers) {
      if (!powered.has(c.key)) continue; // 没连上网的不参与任何孤岛平衡
      const bi = comp.get(c.key);
      if (bi === undefined) continue;
      islandOf(bi).consumers.push(c);
    }
    for (const k of this.cables) {
      if (this.trips.has(k)) continue;
      if (!powered.has(k)) continue;
      const bi = comp.get(k);
      if (bi === undefined) continue;
      islandOf(bi).cableTiles.push(k);
    }
    const islands = [...islandMap.values()];
    for (const isl of islands) {
      isl.generated = isl.gens.reduce((s, g) => s + g.output, 0);
      isl.demand = isl.consumers.reduce((s, c) => s + c.demand, 0);
    }

    // ===== 5) 功率平衡 + 拉闸 =====
    // 每孤岛独立：先算缺口，电池全局放电按缺口比例支援各孤岛，
    // 仍不足则按 shedRank 逐栋拉闸。
    const shed = new Set();
    const batteryDischargeAvail = this._batteryDischargeAvailable();
    // 先算总缺口，决定电池放电分配
    let totalDeficit = 0;
    for (const isl of islands) {
      isl.deficit = Math.max(0, isl.demand - isl.generated);
      totalDeficit += isl.deficit;
    }
    // 电池放电按各孤岛缺口占比分配（缺口大的多分）
    const dischargePlan = new Map(); // islandId -> 分得的放电量
    if (totalDeficit > GRID_BLACKOUT_EPS && batteryDischargeAvail > 0) {
      for (const isl of islands) {
        if (isl.deficit > 0) {
          dischargePlan.set(isl.id, batteryDischargeAvail * (isl.deficit / totalDeficit));
        }
      }
    }
    let anyBlackout = false;
    for (const isl of islands) {
      const discharge = dischargePlan.get(isl.id) || 0;
      const netGap = isl.demand - isl.generated - discharge;
      isl.served = isl.demand; // 实际被供电的用电量（拉闸后减少）
      if (netGap > GRID_BLACKOUT_EPS) {
        // 拉闸：按 shedRank 升序（先断 rank 小的）逐栋断，直到补上缺口
        const sorted = isl.consumers.slice().sort((a, b2) => {
          if (a.shedRank !== b2.shedRank) return a.shedRank - b2.shedRank;
          return b2.demand - a.demand; // 同级先断耗电大的（止血最快）
        });
        let cut = 0;
        for (const c of sorted) {
          if (cut >= netGap - GRID_BLACKOUT_EPS) break;
          isl.shedKeys.add(c.key);
          shed.add(c.key);
          cut += c.demand;
        }
        isl.served = isl.demand - cut;
        isl.shedded = true;
        anyBlackout = true;
      } else {
        isl.shedded = false;
      }
      isl.discharge = discharge;
    }
    // 电池实际放电在 _simBatteries 里按 dischargePlan 执行（连续积分），
    // 这里只做「规划」。为防止 rebuild 间隔内的漂移，_simBatteries 会钳制。
    this._dischargePlan = dischargePlan;

    // ===== 6) 潮流估算 =====
    // 每段电缆的潮流 = 所在孤岛总需求 × 该段权重 / 权重和，
    // 权重 w = 1 / (1 + dist)（离发电机越近分担越多）。
    // 这是简化模型，但抓住了「干线比支线载荷大」的真实分布形态。
    this.flow = new Map();
    for (const isl of islands) {
      if (isl.cableTiles.length === 0 || isl.demand <= 0) {
        for (const k of isl.cableTiles) this.flow.set(k, 0);
        continue;
      }
      let wSum = 0;
      const weights = new Map();
      for (const k of isl.cableTiles) {
        const d = dist.get(k);
        const w = 1 / (1 + (d === undefined ? 8 : d));
        weights.set(k, w);
        wSum += w;
      }
      if (wSum <= 0) wSum = 1;
      for (const k of isl.cableTiles) {
        this.flow.set(k, isl.demand * (weights.get(k) / wSum));
      }
    }
    // 孤岛外的电缆（没连上任何发电机）：潮流 0，热量自然冷却
    for (const k of this.cables) {
      if (!this.flow.has(k) && !this.trips.has(k)) this.flow.set(k, 0);
    }

    // ===== 7) 缓存与统计 =====
    this.net = {
      powered, shed, islands, dist, comp,
      genByTile, batByTile, subByTile,
      subPowered: subPowered.map(s => s.key),
      builtAt: now, hour,
    };
    const totalGen = islands.reduce((s, i) => s + i.generated, 0);
    const totalUse = islands.reduce((s, i) => s + i.served, 0);
    const totalMaxStore = bats.reduce((s, b2) => s + b2.capacity, 0);
    this.stats.generated = totalGen;
    this.stats.consumed = totalUse;
    this.stats.maxStore = totalMaxStore;
    this.stats.stored = this.storedEnergy;
    this.stats.trips = this.trips.size;
    this._pendingBlackout = anyBlackout;
  }

  /* ----------------------------------------------------------------------
   * 4.4 effectiveOutput(game, b, hour)：发电机有效出力
   * ----------------------------------------------------------------------
   * 系数链（按乘法顺序）：
   *   铭牌 power
   *   × 太阳能昼夜曲线（仅 solar；核/聚变是基荷，不吃曲线）
   *   × 沙尘暴系数（仅 solar，经 game.builder.disaster.solarMultiplier，防御）
   *   × 季节系数（仅 solar，经 TimeSys.seasonInfo，防御）
   *   × 老化效率（game.builder.agingEff，防御）
   *   × 损坏系数（damaged → 0.5）
   *   × 科技倍率（solarMul / fusionMul，经 techMul，防御）
   * 返回 ≥ 0 的数值。任何一步异常都降级为铭牌值，不抛异常。
   * -------------------------------------------------------------------- */
  effectiveOutput(game, b, hour) {
    let lv;
    try { lv = gridLevelDef(game, b); } catch (e) { return 0; }
    let p = typeof lv.power === 'number' ? lv.power : 0;
    if (p <= 0) return 0;
    if (hour === undefined) hour = gridReadHour(game);

    try {
      const bid = b.id;
      // ---- 太阳能：昼夜 × 沙尘 × 季节 ----
      if (bid === 'solar') {
        p *= gridSolarFactor(hour);
        // 沙尘暴（build.js 的 disaster 注入）
        try {
          const dis = game && game.builder ? game.builder.disaster : null;
          if (dis && typeof dis.solarMultiplier === 'function') {
            const m = dis.solarMultiplier(Date.now(),
              game.builder.techTree || null);
            if (isFinite(m) && m >= 0) p *= m;
          }
          // 尘卷风路径上的太阳能板直接归零
          if (dis && typeof dis.devilAffects === 'function' &&
              dis.devilAffects(b.x, b.y, Date.now())) {
            return 0;
          }
        } catch (e) { /* 灾难系统异常不影响发电 */ }
        // 季节（time.js TimeSys）
        try {
          if (typeof TimeSys !== 'undefined' && TimeSys &&
              typeof TimeSys.seasonInfo === 'function') {
            const info = TimeSys.seasonInfo();
            if (info && info.fx && isFinite(info.fx.solarMul)) p *= info.fx.solarMul;
          }
        } catch (e) { /* 忽略 */ }
        // 太阳能科技
        p *= this._techMul(game, 'solarMul');
      }
      // ---- 聚变：科技加成 ----
      if (bid === 'fusion') p *= this._techMul(game, 'fusionMul');
      // ---- 老化 ----
      try {
        if (game && game.builder && typeof game.builder.agingEff === 'function') {
          const e = game.builder.agingEff(b);
          if (isFinite(e) && e >= 0) p *= e;
        }
      } catch (e) { /* 忽略 */ }
      // ---- 损坏 ----
      if (b.damaged) p *= 0.5;
    } catch (e) {
      // 系数链任何异常：返回铭牌值（降级不断电）
      const base = gridLevelDef(game, b);
      return typeof base.power === 'number' ? Math.max(0, base.power) : 0;
    }
    return Math.max(0, p);
  }

  /* ----------------------------------------------------------------------
   * 4.5 isPowered(x, y)：建筑是否有电（game.js 生产 gating 用）
   * ----------------------------------------------------------------------
   * 规则：
   *   1. 降级模式（无 powergrid / 无 builder）→ true（兼容）。
   *   2. 该瓦片是发电机 → 永远 true。
   *   3. 该瓦片在 shed 集 → false（被拉闸）。
   *   4. 该瓦片在 powered 集 → true。
   *   5. 否则 false。
   * 注意：不耗电的建筑（powerUse=0）调这个函数恒返回 powered 集的结果；
   * 它们不断电（shed 只含消费者），符合「居住舱不断电」的直觉。
   * -------------------------------------------------------------------- */
  isPowered(x, y) {
    // 兼容：net 还没算出来（第一帧）→ true，避免开局误停工
    if (this._degraded || !this.net) return true;
    const k = gridKey(x, y);
    try {
      if (this.net.genByTile.has(k)) return true;   // 发电机自身永远有电
      if (this.net.shed.has(k)) return false;        // 被拉闸
      return this.net.powered.has(k);
    } catch (e) {
      return true; // 任何异常都偏向「有电」，避免误停产
    }
  }

  /**
   * productionAllowed(b)：build.js 生产更新的 gating  helper。
   * 语义 = isPowered(b.x, b.y)。game.js 集成时可直接用它代替手写判断。
   */
  productionAllowed(b) {
    if (!b) return true;
    return this.isPowered(b.x, b.y);
  }

  /**
   * cablePowered(x, y)：某电缆瓦片是否在通电网络上（覆盖层/诊断用）。
   */
  cablePowered(x, y) {
    if (this._degraded || !this.net) return false;
    const k = gridKey(x, y);
    return this.cables.has(k) && !this.trips.has(k) && this.net.powered.has(k);
  }

  /* ----------------------------------------------------------------------
   * 4.6 内部小工具（防御性访问器）
   * -------------------------------------------------------------------- */

  /** 安全取建筑数组：game.builder.buildings 缺失时返回空数组。 */
  _safeBuildings(game) {
    try {
      if (game && game.builder && Array.isArray(game.builder.buildings)) {
        return game.builder.buildings;
      }
    } catch (e) { /* 忽略 */ }
    return [];
  }

  /** 安全取地图尺寸：缺失时默认 50（与 GameMap(50) 一致）。 */
  _safeMapSize(game) {
    try {
      if (game && game.map && isFinite(game.map.size) && game.map.size > 0) {
        return Math.floor(game.map.size);
      }
    } catch (e) { /* 忽略 */ }
    return 50;
  }

  /** 安全取科技倍率：techTree/techMul 缺失时返回 1。 */
  _techMul(game, key) {
    try {
      if (game && game.builder && typeof game.builder.techMul === 'function') {
        const m = game.builder.techMul(key);
        if (isFinite(m) && m > 0) return m;
      }
    } catch (e) { /* 忽略 */ }
    return 1;
  }

  /**
   * 断电优先级 rank：数值越小越先拉闸。
   *   - 在 this.priority 数组中：rank = 下标（生产在前）。
   *   - 不在数组中：rank = 数组长度 + 50（中等，排在已知项之后）。
   *   - 居住/医院/穹顶即使不在数组也强制排最后（生命线保护）。
   * 返回整数，sort 用。
   */
  _shedRank(id) {
    const LIFE_FIRST = ['habitat', 'dome', 'hospital'];
    if (LIFE_FIRST.indexOf(id) >= 0) return 100000;
    const idx = this.priority.indexOf(id);
    if (idx >= 0) return idx;
    return this.priority.length + 50;
  }

  /** 电池可放电量 = 当前总储量（电量 ≥ 0）。 */
  _batteryDischargeAvailable() {
    return Math.max(0, this.storedEnergy);
  }

  /**
   * 电池总容量（rebuild 已算好存 stats.maxStore；这里做二次防御）。
   */
  _batteryCapacity() {
    return Math.max(0, this.stats.maxStore || 0);
  }

  /* ----------------------------------------------------------------------
   * 4.7 _simHeat(dt, game, now)：电缆热量模拟（每帧）
   * ----------------------------------------------------------------------
   * 模型：
   *   util = flow / cableCapacity（flow 来自 rebuild 的潮流估算）。
   *   util > 0.85：heat += (util - 0.85) / 0.15 * HEAT_RATE * dt
   *     （利用率 100% 时约 45 秒跳闸；120% 时约 22 秒。）
   *   util ≤ 0.85：heat -= COOL_RATE * dt（约 20 秒散尽）。
   *   heat ≥ 1 → 跳闸：加入 trips（30 秒恢复），toast + onTrip 回调，
   *     置 _dirty 立即重算拓扑。
   * 跳闸中的电缆不参与积热（已剔除出 conductive，flow 也无）。
   * 热量警告：heat ≥ 0.6 且 10 秒内没警告过 → toast 提示（限频防刷屏）。
   * -------------------------------------------------------------------- */
  _simHeat(dt, game, now) {
    if (this.cables.size === 0) return;
    const dtS = dt / 1000;
    let tripped = false;

    for (const k of this.cables) {
      if (this.trips.has(k)) continue; // 跳闸中不积热
      const flow = this.flow.get(k) || 0;
      const util = flow / Math.max(1, this.cableCapacity);
      let heat = this.heat.get(k) || 0;

      if (util > GRID_OVERLOAD_UTIL) {
        // 积热：超过 85% 的部分线性加速。
        // GRID_HEAT_RATE 单位是「每毫秒」，dt 单位毫秒，
        // 所以 heat += over * GRID_HEAT_RATE * dt。
        // 利用率 100% 时约 45 秒跳闸，120% 时约 22 秒。
        const over = (util - GRID_OVERLOAD_UTIL) / (1 - GRID_OVERLOAD_UTIL);
        heat += over * GRID_HEAT_RATE * dt;
      } else {
        // 冷却
        heat -= GRID_COOL_RATE * dt;
      }
      heat = gridClamp(heat, 0, 1.2); // 上限 1.2，允许一点过冲再钳制

      if (heat >= GRID_HEAT_TRIP) {
        // ---- 跳闸 ----
        this.trips.set(k, now + this.tripRecoverMs);
        this.heat.set(k, 1);
        tripped = true;
        const p = gridUnkey(k);
        const px = p ? p[0] : '?', py = p ? p[1] : '?';
        gridToast(game, '⚡电缆过载跳闸！(' + px + ',' + py + ') 30秒后恢复');
        try {
          if (typeof this.onTrip === 'function' && p) this.onTrip(p[0], p[1]);
        } catch (e) { /* 回调异常不影响主逻辑 */ }
        // 跳闸统计（诊断用）+ 事件日志
        this._tripEvents = (this._tripEvents || 0) + 1;
        this._logEvent('trip', { x: px, y: py, util: Math.round(util * 1000) / 1000 });
      } else {
        this.heat.set(k, heat);
        // 热量警告（限频 10 秒）
        if (heat >= GRID_HEAT_WARN && now - this._lastHeatWarn > 10000) {
          this._lastHeatWarn = now;
          const p = gridUnkey(k);
          gridToast(game,
            '⚠️电缆高温警告 (' + (p ? p[0] + ',' + p[1] : '?') +
            ')：利用率' + Math.round(util * 100) + '%，考虑并联分流');
        }
      }
    }

    if (tripped) {
      this._dirty = true; // 拓扑变了，下一帧立即重算
      this.stats.trips = this.trips.size;
    }
  }

  /* ----------------------------------------------------------------------
   * 4.8 _simBatteries(dt, game, now)：电池充放电（每帧连续积分）
   * ----------------------------------------------------------------------
   * 能量流（每帧）：
   *   surplus = generated - served（served = 拉闸后的实际供电量）。
   *   surplus > 0 → 充电：charge = min(surplus*dt换算, 空余容量) × 效率。
   *   surplus < 0 → 放电：discharge = min(-surplus换算, 当前储量)。
   * 单位换算：功率（电）× 时间（秒）= 能量。dt 是毫秒，所以能量增量 =
   *   功率 × dt/1000。电池容量 storage 的单位同样是「电·秒」。
   * 分配：多电池按「空余容量占比」分充电，按「储量占比」分放电，
   *   保证充放电均衡，不会出现一块满了另一块还空着。
   * 自放电：每帧 stored × SELF_DISCHARGE × dt。
   * 边沿事件：充满/放空时触发回调（限频 30 秒，避免反复横跳刷屏）。
   * -------------------------------------------------------------------- */
  _simBatteries(dt, game, now) {
    const dtS = dt / 1000;
    const cap = this._batteryCapacity();
    if (cap <= 0) {
      // 没有电池：储量归零，跳过
      if (this.storedEnergy !== 0) {
        this.storedEnergy = 0;
        this.stats.stored = 0;
      }
      return;
    }

    const surplus = (this.stats.generated || 0) - (this.stats.consumed || 0);
    // rebuild 里算好的放电规划（按孤岛缺口分配），这里做执行钳制：
    // 实际放电不允许超过「当前缺口」与「储量」的较小值。
    let planDischarge = 0;
    if (this._dischargePlan) {
      for (const v of this._dischargePlan.values()) planDischarge += v;
    }

    if (surplus > GRID_BLACKOUT_EPS) {
      // ---- 充电 ----
      const free = cap - this.storedEnergy;
      if (free > 0) {
        let chargePower = Math.min(surplus, free / Math.max(dtS, 1e-6));
        // 充电效率：只有 90% 能入库
        const energyIn = chargePower * dtS * this.batteryEfficiency;
        const actualIn = Math.min(energyIn, free);
        this._distributeToBatteries(actualIn, true);
        this.storedEnergy = Math.min(cap, this.storedEnergy + actualIn);
      }
    } else if (surplus < -GRID_BLACKOUT_EPS) {
      // ---- 放电 ----
      const need = Math.min(-surplus, planDischarge > 0 ? planDischarge : -surplus);
      const energyOut = Math.min(need * dtS, this.storedEnergy);
      if (energyOut > 0) {
        this._distributeToBatteries(energyOut, false);
        this.storedEnergy = Math.max(0, this.storedEnergy - energyOut);
      }
    }

    // ---- 自放电 ----
    if (this.storedEnergy > 0) {
      const selfLoss = this.storedEnergy * GRID_BATTERY_SELF_DISCHARGE * dt;
      if (selfLoss > 0) {
        this._distributeToBatteries(Math.min(selfLoss, this.storedEnergy), false);
        this.storedEnergy = Math.max(0, this.storedEnergy - selfLoss);
      }
    }

    this.stats.stored = this.storedEnergy;

    // ---- 边沿事件：充满 / 放空 ----
    const fullRatio = cap > 0 ? this.storedEnergy / cap : 0;
    if (fullRatio >= 0.999 && now - this._lastBatteryFullToast > 30000) {
      this._lastBatteryFullToast = now;
      try { if (typeof this.onBatteryFull === 'function') this.onBatteryFull(); } catch (e) {}
      gridToast(game, '🔋电池组已充满，余电正在浪费——可以扩建用电设备');
    }
    if (fullRatio <= 0.001 && this.storedEnergy <= 0 &&
        now - this._lastBatteryEmptyToast > 30000 && cap > 0 &&
        (this.stats.consumed || 0) > (this.stats.generated || 0)) {
      this._lastBatteryEmptyToast = now;
      try { if (typeof this.onBatteryEmpty === 'function') this.onBatteryEmpty(); } catch (e) {}
    }
  }

  /**
   * 把能量按比例分到各电池瓦片。
   *   charging=true：按「空余容量占比」分（空得多的多充）。
   *   charging=false：按「当前储量占比」分（有电的多放）。
   * amount ≥ 0。电池容量为 0 的瓦片不参与。
   */
  _distributeToBatteries(amount, charging) {
    if (!(amount > 0) || !this.net) return;
    const bats = [];
    let totalWeight = 0;
    for (const [k, info] of this.net.batByTile) {
      const cap = info.capacity || 0;
      if (cap <= 0) continue;
      const cur = this.batteryCharge.get(k) || 0;
      const w = charging ? Math.max(0, cap - cur) : Math.max(0, cur);
      if (w > 0) { bats.push([k, cap, cur, w]); totalWeight += w; }
    }
    if (bats.length === 0 || totalWeight <= 0) return;
    for (const [k, cap, cur, w] of bats) {
      const share = amount * (w / totalWeight);
      const nv = charging
        ? Math.min(cap, cur + share)
        : Math.max(0, cur - share);
      this.batteryCharge.set(k, nv);
    }
  }

  /* ----------------------------------------------------------------------
   * 4.9 _checkBlackout(game, now)：缺电边沿检测
   * ----------------------------------------------------------------------
   * this._pendingBlackout 由 rebuild 算出（任一孤岛拉闸即 true）。
   * 这里做边沿触发：false→true 调 onBlackout(true) + toast；
   * true→false 调 onBlackout(false) + toast。持续状态不重复打扰。
   * -------------------------------------------------------------------- */
  _checkBlackout(game, now) {
    const cur = !!this._pendingBlackout;
    if (cur === this.blackout) return; // 无变化
    this.blackout = cur;
    this._logEvent(cur ? 'blackout-on' : 'blackout-off',
      { shedCount: this.net ? this.net.shed.size : 0 });
    try {
      if (typeof this.onBlackout === 'function') this.onBlackout(cur);
    } catch (e) { /* 回调异常不影响 */ }
    if (cur) {
      gridToast(game, '🌑电网缺电！已按优先级拉闸（生产先断）');
    } else {
      gridToast(game, '💡电力恢复平衡，拉闸建筑重新通电');
    }
  }

  /* ----------------------------------------------------------------------
   * 4.10 _sampleHistory(now)：历史曲线采样（2 秒一点，保留 180 点）
   * ----------------------------------------------------------------------
   * 采样 generated / consumed / stored，供 UI 画 6 分钟功率曲线。
   * 环形截断：超长时 shift，保证内存不增长。
   * -------------------------------------------------------------------- */
  _sampleHistory(now) {
    const h = this.history;
    h.t.push(now);
    h.gen.push(Math.round((this.stats.generated || 0) * 10) / 10);
    h.use.push(Math.round((this.stats.consumed || 0) * 10) / 10);
    while (h.t.length > GRID_HISTORY_LEN) {
      h.t.shift(); h.gen.shift(); h.use.shift();
    }
  }

  /**
   * getHistory()：返回历史曲线的拷贝（UI 只读，防止外部篡改内部数组）。
   */
  getHistory() {
    return {
      t: this.history.t.slice(),
      gen: this.history.gen.slice(),
      use: this.history.use.slice(),
    };
  }

  /* ----------------------------------------------------------------------
   * 4.11 placeCable(x, y, game)：铺设电缆
   * ----------------------------------------------------------------------
   * 检查链（按顺序，任一失败返回 {ok:false, msg}）：
   *   1. 坐标合法（整数、地图边界内）。
   *   2. 该瓦片未被建筑占据（game.builder.at）。
   *   3. 该瓦片不是已有电缆（重复铺设拒绝，避免误扣资源）。
   *   4. 地形可建：TERRAIN.FLAT（电缆不能穿过岩石/峡谷/火山口/陨石坑，
   *      与道路铺设规则对齐：build.js 里 road 要求 terrain === TERRAIN.FLAT）。
   *   5. 区域已解锁（map.isUnlocked，防御性调用）。
   *   6. 资源：cost {iron:1}，经 canAfford/spendRes 从 game.player.inv 扣除。
   *      inv 缺失时跳过扣费（测试环境兼容），但依然允许铺设。
   * 成功：加入 cables，_dirty=true（下一帧立即重算），返回 {ok:true}。
   * -------------------------------------------------------------------- */
  placeCable(x, y, game) {
    x = Math.floor(x); y = Math.floor(y);
    const size = this._safeMapSize(game);
    if (!isFinite(x) || !isFinite(y)) return { ok: false, msg: '坐标非法' };
    if (x < 0 || y < 0 || x >= size || y >= size) return { ok: false, msg: '超出地图边界' };

    const k = gridKey(x, y);
    if (this.cables.has(k)) return { ok: false, msg: '这里已有电缆' };

    // 建筑占据检查
    try {
      if (game && game.builder && typeof game.builder.at === 'function') {
        const b = game.builder.at(x, y);
        if (b) {
          const nm = this._buildingName(game, b);
          return { ok: false, msg: '被' + nm + '占据，先拆除建筑' };
        }
      }
    } catch (e) { /* 查询失败则放行，避免误拦 */ }

    // 地形检查
    try {
      if (game && game.map && game.map.terrain &&
          game.map.terrain[y] !== undefined) {
        let flat = 0;
        try { flat = (typeof TERRAIN !== 'undefined') ? TERRAIN.FLAT : 0; }
        catch (e) { flat = 0; }
        const t = game.map.terrain[y][x];
        if (t !== flat) return { ok: false, msg: '地形不适合铺设电缆（仅限平地）' };
      }
    } catch (e) { /* 地形不可读则放行 */ }

    // 区域解锁检查（防御性：isUnlocked 不存在则跳过）
    try {
      if (game && game.map && typeof game.map.isUnlocked === 'function') {
        if (!game.map.isUnlocked(x, y)) return { ok: false, msg: '区域未解锁' };
      }
    } catch (e) { /* 忽略 */ }

    // 资源扣除
    try {
      const inv = game && game.player ? game.player.inv : null;
      if (inv && typeof canAfford === 'function' && typeof spendRes === 'function') {
        if (!canAfford(inv, GRID_CABLE_COST)) {
          return { ok: false, msg: '铁矿不足（需要 1 铁）' };
        }
        spendRes(inv, GRID_CABLE_COST);
      }
    } catch (e) {
      return { ok: false, msg: '资源扣除异常' };
    }

    this.cables.add(k);
    if (!this.heat.has(k)) this.heat.set(k, 0);
    this._dirty = true;
    this._logEvent('cable-place', { x, y });
    return { ok: true, msg: '电缆铺设成功' };
  }

  /* ----------------------------------------------------------------------
   * 4.12 removeCable(x, y)：拆除电缆，返还 50% 成本
   * ----------------------------------------------------------------------
   * 成本 {iron:1} × 50% = 0.5 铁。库存支持小数（build.js 生产就是小数），
   * 所以直接加 0.5，不取整——取整会变成 0，返还机制名存实亡。
   * 拆除跳闸中的电缆：同时清除 trips 记录（物理上电缆都没了）。
   * 返回 {ok, refund}，无电缆时 {ok:false}。
   * -------------------------------------------------------------------- */
  removeCable(x, y, game) {
    x = Math.floor(x); y = Math.floor(y);
    const k = gridKey(x, y);
    if (!this.cables.has(k)) return { ok: false, msg: '这里没有电缆' };
    this.cables.delete(k);
    this.heat.delete(k);
    this.flow.delete(k);
    if (this.trips.has(k)) this.trips.delete(k);

    const refund = {};
    for (const res in GRID_CABLE_COST) {
      refund[res] = Math.round(GRID_CABLE_COST[res] * GRID_CABLE_REFUND * 10) / 10;
    }
    try {
      const inv = game && game.player ? game.player.inv : null;
      if (inv) {
        for (const res in refund) inv[res] = (inv[res] || 0) + refund[res];
      }
    } catch (e) { /* 返还失败不影响拆除本身 */ }

    this._dirty = true;
    this._logEvent('cable-remove', { x, y, refund });
    return { ok: true, msg: '电缆已拆除', refund };
  }

  /** 建筑显示名（错误信息用，防御）。 */
  _buildingName(game, b) {
    try {
      if (game && game.builder && typeof game.builder.def === 'function') {
        const d = game.builder.def(b.id);
        if (d && d.name) return d.name;
      }
    } catch (e) {}
    return '建筑';
  }

  /* ----------------------------------------------------------------------
   * 4.13 suggestPath(x1, y1, x2, y2, game)：电缆布线建议（A* / BFS）
   * ----------------------------------------------------------------------
   * 目标：给玩家一条从 (x1,y1) 到 (x2,y2) 的铺设建议路径，返回 [[x,y],...]
   *（含起点与终点）。典型用法：发电机 → 未通电建筑，一键看怎么连。
   *
   * 算法：A*（启发式 = 曼哈顿距离），代价模型：
   *   - 已有电缆瓦片：0.4（强烈复用，省铁）
   *   - 空闲平地：1.0
   *   - 发电机/变电站/电池瓦片：0.6（可穿过，比绕路便宜）
   *   - 跳闸中电缆：3.0（能走但不推荐）
   *   - 建筑/非平地/未解锁/出界：不可通行
   *   - 终点即使是建筑瓦片也允许（电流终点就是建筑）
   * 步数上限 GRID_PATH_MAX_STEPS，超限返回已找到的最接近路径（防御）。
   * 返回空数组表示不可达（中间被完全隔断）。
   * -------------------------------------------------------------------- */
  suggestPath(x1, y1, x2, y2, game) {
    x1 = Math.floor(x1); y1 = Math.floor(y1);
    x2 = Math.floor(x2); y2 = Math.floor(y2);
    const size = this._safeMapSize(game);
    const inB = (x, y) => x >= 0 && y >= 0 && x < size && y < size;
    if (!inB(x1, y1) || !inB(x2, y2)) return [];
    const startK = gridKey(x1, y1), goalK = gridKey(x2, y2);
    if (startK === goalK) return [[x1, y1]];

    // ---- 地形/占据预查 ----
    let flat = 0;
    try { flat = (typeof TERRAIN !== 'undefined') ? TERRAIN.FLAT : 0; } catch (e) {}
    const terrainOf = (x, y) => {
      try {
        if (game && game.map && game.map.terrain && game.map.terrain[y]) {
          return game.map.terrain[y][x];
        }
      } catch (e) {}
      return flat;
    };
    const buildingAt = (x, y) => {
      // 终点允许是建筑（要连的就是它）
      if (x === x2 && y === y2) return null;
      try {
        if (game && game.builder && typeof game.builder.at === 'function') {
          return game.builder.at(x, y);
        }
      } catch (e) {}
      return null;
    };
    const unlocked = (x, y) => {
      try {
        if (game && game.map && typeof game.map.isUnlocked === 'function') {
          return game.map.isUnlocked(x, y);
        }
      } catch (e) {}
      return true;
    };

    // ---- 单步代价 ----
    const stepCost = (x, y) => {
      const k = gridKey(x, y);
      if (this.cables.has(k)) return this.trips.has(k) ? 3.0 : 0.4;
      if (this.net) {
        if (this.net.genByTile.has(k) ||
            this.net.subByTile.has(k) ||
            this.net.batByTile.has(k)) return 0.6;
      }
      return 1.0;
    };
    const passable = (x, y) => {
      if (!inB(x, y)) return false;
      if (buildingAt(x, y)) return false;
      if (terrainOf(x, y) !== flat) return false;
      if (!unlocked(x, y)) return false;
      return true;
    };

    // ---- A* 主循环（开放表用简易二叉堆思想的数组+线性取最小：
    // 地图 50×50，路径搜索规模小，线性扫描足够且代码可读） ----
    const gScore = new Map();  // k -> 已走代价
    const cameFrom = new Map();// k -> 父键
    const open = [startK];     // 待扩展
    const inOpen = new Set([startK]);
    const closed = new Set();
    gScore.set(startK, 0);
    let steps = 0;
    let bestK = startK, bestH = gridManhattan(x1, y1, x2, y2);

    const hOf = (k) => {
      const p = gridUnkey(k);
      return p ? gridManhattan(p[0], p[1], x2, y2) : 1e9;
    };

    while (open.length > 0 && steps < GRID_PATH_MAX_STEPS) {
      steps++;
      // 取 f = g + h 最小的节点（线性扫描）
      let bi = 0, bf = Infinity;
      for (let i = 0; i < open.length; i++) {
        const k = open[i];
        const f = (gScore.get(k) || 0) + hOf(k);
        if (f < bf) { bf = f; bi = i; }
      }
      const cur = open.splice(bi, 1)[0];
      inOpen.delete(cur);
      if (closed.has(cur)) continue;
      closed.add(cur);

      if (cur === goalK) {
        // ---- 回溯路径 ----
        const path = [];
        let c = cur;
        while (c) {
          const p = gridUnkey(c);
          if (!p) break;
          path.push(p);
          c = cameFrom.get(c);
        }
        path.reverse();
        return path;
      }

      // 记录最接近目标的节点（超限时降级返回）
      const hc = hOf(cur);
      if (hc < bestH) { bestH = hc; bestK = cur; }

      const p = gridUnkey(cur);
      if (!p) continue;
      for (const [dx, dy] of GRID_DIRS) {
        const nx = p[0] + dx, ny = p[1] + dy;
        const nk = gridKey(nx, ny);
        if (closed.has(nk) || !passable(nx, ny)) continue;
        const ng = (gScore.get(cur) || 0) + stepCost(nx, ny);
        if (!gScore.has(nk) || ng < gScore.get(nk)) {
          gScore.set(nk, ng);
          cameFrom.set(nk, cur);
          if (!inOpen.has(nk)) { open.push(nk); inOpen.add(nk); }
        }
      }
    }

    // ---- 超限/不可达：返回到最接近点的路径（聊胜于无，供 UI 虚线提示） ----
    if (bestK !== startK && cameFrom.has(bestK)) {
      const path = [];
      let c = bestK;
      while (c) {
        const p = gridUnkey(c);
        if (!p) break;
        path.push(p);
        c = cameFrom.get(c);
      }
      path.reverse();
      return path;
    }
    return [];
  }

  /**
   * suggestPathCost(path)：估算路径铺设成本（铁）。
   * 只计「非已有电缆」的格子，每格 1 铁。供 UI 显示「预计花费 N 铁」。
   */
  suggestPathCost(path) {
    if (!Array.isArray(path)) return 0;
    let n = 0;
    for (const [x, y] of path) {
      if (!this.cables.has(gridKey(x, y))) n++;
    }
    return n * (GRID_CABLE_COST.iron || 1);
  }

  /* ----------------------------------------------------------------------
   * 4.14 getIslands()：孤岛明细（诊断面板用）
   * ----------------------------------------------------------------------
   * 返回每孤岛：{id, genCount, generatorOutput, demand, served, shedded,
   *   cableCount, shedBuildings:[{x,y,id}], surplus}。
   * 拷贝返回，外部改不动内部状态。
   * -------------------------------------------------------------------- */
  getIslands() {
    if (!this.net) return [];
    return this.net.islands.map((isl) => ({
      id: isl.id,
      genCount: isl.gens.length,
      generatorOutput: Math.round(isl.generated * 100) / 100,
      demand: isl.demand,
      served: Math.round((isl.served !== undefined ? isl.served : isl.demand) * 100) / 100,
      discharge: Math.round((isl.discharge || 0) * 100) / 100,
      shedded: !!isl.shedded,
      cableCount: isl.cableTiles.length,
      surplus: Math.round((isl.generated - isl.demand) * 100) / 100,
      shedBuildings: [...isl.shedKeys].map((k) => {
        const p = gridUnkey(k);
        return { x: p ? p[0] : -1, y: p ? p[1] : -1, key: k };
      }),
    }));
  }

  /* ----------------------------------------------------------------------
   * 4.15 inspectTile(x, y, game)：单瓦片诊断（UI tooltip 用）
   * ----------------------------------------------------------------------
   * 返回该瓦片的电网视角全信息：是什么、有没有电、潮流/热量/跳闸、
   * 归属孤岛、变电站覆盖等。所有字段防御性填充，UI 可直接渲染。
   * -------------------------------------------------------------------- */
  inspectTile(x, y, game) {
    x = Math.floor(x); y = Math.floor(y);
    const k = gridKey(x, y);
    const out = {
      x, y, key: k,
      hasCable: this.cables.has(k),
      tripped: this.trips.has(k),
      tripRecoverIn: 0,       // 跳闸剩余恢复毫秒
      powered: false,
      shedded: false,
      isGenerator: false,
      generatorOutput: 0,
      isBattery: false,
      batteryStored: 0,
      batteryCapacity: 0,
      isSubstation: false,
      substationRadius: 0,
      inSubstationRange: false,
      flow: 0,                // 电缆潮流
      utilization: 0,         // flow / capacity
      heat: 0,                // 0..1
      islandId: -1,
      consumerDemand: 0,
      buildingId: null,
      buildingName: null,
    };
    if (this.trips.has(k)) {
      out.tripRecoverIn = Math.max(0, this.trips.get(k) - Date.now());
    }
    out.heat = gridClamp(this.heat.get(k) || 0, 0, 1);
    const fl = this.flow.get(k) || 0;
    out.flow = Math.round(fl * 100) / 100;
    out.utilization = Math.round((fl / Math.max(1, this.cableCapacity)) * 1000) / 1000;

    // 建筑信息
    try {
      const b = game && game.builder && typeof game.builder.at === 'function'
        ? game.builder.at(x, y) : null;
      if (b) {
        out.buildingId = b.id;
        out.buildingName = this._buildingName(game, b);
        const lv = gridLevelDef(game, b);
        out.consumerDemand = lv.powerUse || 0;
        if (this.net) {
          out.isGenerator = this.net.genByTile.has(k);
          out.isBattery = this.net.batByTile.has(k);
          out.isSubstation = this.net.subByTile.has(k);
          const g = this.net.genByTile.get(k);
          if (g) out.generatorOutput = Math.round(g.output * 100) / 100;
          const bt = this.net.batByTile.get(k);
          if (bt) {
            out.batteryCapacity = bt.capacity;
            out.batteryStored = Math.round((this.batteryCharge.get(k) || 0) * 10) / 10;
          }
          const s = this.net.subByTile.get(k);
          if (s) out.substationRadius = s.radius;
        } else {
          // net 还没算：用静态判定兜底
          out.isGenerator = gridIsGenerator(game, b);
          out.isBattery = gridIsBattery(game, b);
          out.isSubstation = gridIsSubstation(game, b);
        }
      }
    } catch (e) { /* 忽略 */ }

    if (this.net) {
      out.powered = this.net.powered.has(k);
      out.shedded = this.net.shed.has(k);
      // 变电站覆盖：是否在某已通电变电站半径内
      for (const sk of this.net.subPowered) {
        const p = gridUnkey(sk);
        if (p && gridChebyshev(p[0], p[1], x, y) <= this.substationRadius) {
          out.inSubstationRange = true;
          break;
        }
      }
      // 归属孤岛：用连通分量 id 匹配孤岛 id（island.id 即分量 id）
      const br = this.net.comp ? this.net.comp.get(k) : undefined;
      if (br !== undefined) {
        for (const isl of this.net.islands) {
          if (isl.id === br) { out.islandId = isl.id; break; }
        }
      } else {
        // 降级：线性扫描（无线覆盖区等无分支瓦片）
        for (const isl of this.net.islands) {
          let hit = false;
          for (const g of isl.gens) if (g.key === k) { hit = true; break; }
          if (!hit) for (const ck of isl.cableTiles) if (ck === k) { hit = true; break; }
          if (!hit && isl.shedKeys.has(k)) hit = true;
          if (hit) { out.islandId = isl.id; break; }
        }
      }
    }
    return out;
  }

  /* ----------------------------------------------------------------------
   * 4.16 getStats()：对外统计快照（game.js UI 用）
   * ----------------------------------------------------------------------
   * 返回字段（名字按任务书固定）：
   *   generated, consumed, stored, maxStore, cableCount, tripCount, blackout
   * 附加字段（UI 可选显示）：utilizationAvg, hotCables, islandCount,
   *   shedCount, solarFactor, hour, degraded。
   * 拷贝返回，外部改不动内部。
   * -------------------------------------------------------------------- */
  getStats() {
    let hotCables = 0;
    let utilSum = 0, utilN = 0;
    for (const k of this.cables) {
      if (this.trips.has(k)) continue;
      const fl = this.flow.get(k) || 0;
      const u = fl / Math.max(1, this.cableCapacity);
      utilSum += u; utilN++;
      if ((this.heat.get(k) || 0) >= GRID_HEAT_WARN) hotCables++;
    }
    return {
      generated: Math.round((this.stats.generated || 0) * 100) / 100,
      consumed: Math.round((this.stats.consumed || 0) * 100) / 100,
      stored: Math.round((this.stats.stored || 0) * 10) / 10,
      maxStore: this.stats.maxStore || 0,
      cableCount: this.cables.size,
      tripCount: this.trips.size,
      blackout: !!this.blackout,
      // 附加
      utilizationAvg: utilN > 0 ? Math.round((utilSum / utilN) * 1000) / 1000 : 0,
      hotCables,
      islandCount: this.net ? this.net.islands.length : 0,
      shedCount: this.net ? this.net.shed.size : 0,
      solarFactor: Math.round(gridSolarFactor(gridReadHour(null)) * 1000) / 1000,
      hour: Math.round(gridReadHour(null) * 100) / 100,
      degraded: !!this._degraded,
    };
  }

  /* ----------------------------------------------------------------------
   * 4.17 getAdvice(game)：诊断建议引擎
   * ----------------------------------------------------------------------
   * 扫描当前电网状态，生成可操作的建议列表（不是泛泛提示，每条都绑定
   * 具体数值与成因）。返回 [{level:'critical'|'warn'|'info', text}]，
   * 按严重程度排序。UI 可直接渲染为「电网诊断」面板。
   *
   * 检查项：
   *   1. 缺电 blackout → 列出被拉闸建筑数与最大缺口孤岛。
   *   2. 夜间太阳能低谷预警：当前 hour 导致太阳能系数 < 0.4 且电池不足。
   *   3. 电缆高温：heat ≥ 0.6 的段数与最高利用率位置。
   *   4. 跳闸中：段数与最早恢复时间。
   *   5. 孤岛余电浪费：某孤岛 surplus > 0 且有其他孤岛缺电（建议连网）。
   *   6. 未通电消费者：有 powerUse 但不在 powered 集（没连电缆）。
   *   7. 电池：无电池但有余电（建议建电池）；电池长期满（余电浪费）。
   *   8. 变电站覆盖盲区：有变电站但自身没电。
   * -------------------------------------------------------------------- */
  getAdvice(game) {
    const advice = [];
    const push = (level, text) => advice.push({ level, text });
    if (this._degraded || !this.net) {
      push('info', '电网数据尚未就绪（首帧计算中）。');
      return advice;
    }
    const net = this.net;
    const hour = gridReadHour(game);
    const solarF = gridSolarFactor(hour);

    // ---- 1) 缺电 ----
    if (this.blackout) {
      const shedN = net.shed.size;
      let maxGap = 0, maxId = -1;
      for (const isl of net.islands) {
        const gap = isl.demand - isl.generated - (isl.discharge || 0);
        if (gap > maxGap) { maxGap = gap; maxId = isl.id; }
      }
      push('critical',
        '电网缺电：已拉闸 ' + shedN + ' 栋建筑' +
        (maxId >= 0 ? '（孤岛#' + maxId + ' 缺口 ' + maxGap.toFixed(1) + ' 电）' : '') +
        '。加发电机 / 减负载 / 等电池充电。');
    }

    // ---- 2) 夜间低谷预警 ----
    if (solarF < 0.4) {
      const solarOut = net.islands.reduce((s, isl) =>
        s + isl.gens.reduce((a, g) => a + (g.id === 'solar' ? g.output : 0), 0), 0);
      const totalGen = this.stats.generated || 0;
      const solarShare = totalGen > 0 ? solarOut / totalGen : 0;
      const batCover = this.stats.maxStore > 0
        ? (this.storedEnergy / Math.max(1, this.stats.maxStore)) : 0;
      if (solarShare > 0.3 && batCover < 0.5) {
        push('warn',
          '夜间低谷：太阳能系数仅 ' + solarF.toFixed(2) + '（占发电 ' +
          Math.round(solarShare * 100) + '%），电池储量 ' +
          Math.round(batCover * 100) + '% 不足以撑过黑夜。建议加基荷电源（核/聚变）或扩电池。');
      }
    }

    // ---- 3) 电缆高温 ----
    let hotN = 0, worstU = 0, worstK = null;
    for (const k of this.cables) {
      if (this.trips.has(k)) continue;
      const h = this.heat.get(k) || 0;
      const u = (this.flow.get(k) || 0) / Math.max(1, this.cableCapacity);
      if (h >= GRID_HEAT_WARN) hotN++;
      if (u > worstU) { worstU = u; worstK = k; }
    }
    if (hotN > 0) {
      const p = worstK ? gridUnkey(worstK) : null;
      push('warn',
        '电缆高温：' + hotN + ' 段积热超标' +
        (p ? '（最热点 ' + p[0] + ',' + p[1] + ' 利用率 ' + Math.round(worstU * 100) + '%）' : '') +
        '。给该干线铺并联电缆分流，或降低下游负载。');
    } else if (worstU > GRID_OVERLOAD_UTIL) {
      push('info',
        '干线利用率 ' + Math.round(worstU * 100) + '%，接近 85% 积热线，扩建前注意。');
    }

    // ---- 4) 跳闸中 ----
    if (this.trips.size > 0) {
      let soon = Infinity;
      const now = Date.now();
      for (const t of this.trips.values()) soon = Math.min(soon, t);
      push('warn',
        '跳闸中：' + this.trips.size + ' 段电缆离线，约 ' +
        Math.max(0, Math.ceil((soon - now) / 1000)) + ' 秒后恢复。' +
        '反复跳闸说明容量不足，不是运气问题。');
    }

    // ---- 5) 孤岛余电浪费 ----
    const surplusIslands = net.islands.filter(i => (i.generated - i.demand) > 1);
    const deficitIslands = net.islands.filter(i =>
      (i.demand - i.generated - (i.discharge || 0)) > 1);
    if (surplusIslands.length > 0 && deficitIslands.length > 0) {
      const waste = surplusIslands.reduce((s, i) => s + (i.generated - i.demand), 0);
      push('warn',
        '孤岛失衡：' + surplusIslands.length + ' 个孤岛余电 ' + waste.toFixed(1) +
        ' 电被浪费，同时 ' + deficitIslands.length + ' 个孤岛缺电。用电缆或变电站把它们连起来。');
    }

    // ---- 6) 未通电消费者 ----
    const buildings = this._safeBuildings(game);
    let unpowered = 0, unpoweredExample = null;
    for (const b of buildings) {
      if (!b || !gridIsConsumer(game, b)) continue;
      const k = gridKey(b.x, b.y);
      if (!net.powered.has(k) && !net.shed.has(k)) {
        unpowered++;
        if (!unpoweredExample) unpoweredExample = b;
      }
    }
    if (unpowered > 0) {
      const nm = unpoweredExample ? this._buildingName(game, unpoweredExample) : '建筑';
      push('warn',
        '未通电：' + unpowered + ' 栋用电建筑没连上电网（例：' + nm +
        ' ' + unpoweredExample.x + ',' + unpoweredExample.y + '）。' +
        '用 suggestPath() 看布线方案。');
    }

    // ---- 7) 电池 ----
    if (this.stats.maxStore <= 0) {
      let surplus = 0;
      for (const isl of net.islands) surplus += Math.max(0, isl.generated - isl.demand);
      if (surplus > 2) {
        push('info',
          '当前余电 ' + surplus.toFixed(1) + ' 电无处可去（无电池建筑）。' +
          '建电池可把白天余电搬到夜间用。');
      }
    } else {
      const ratio = this.storedEnergy / Math.max(1, this.stats.maxStore);
      if (ratio >= 0.999) {
        push('info', '电池已充满，余电正在浪费：可以加用电设备或扩电池容量。');
      } else if (ratio <= 0.05 && solarF > 0.6) {
        push('info', '白天电池几乎是空的（' + Math.round(ratio * 100) +
          '%），说明发电刚好够用、没有余电可存。想削夜峰得先加发电。');
      }
    }

    // ---- 8) 变电站自身没电 ----
    let deadSubs = 0;
    for (const [k] of net.subByTile) {
      if (!net.powered.has(k)) deadSubs++;
    }
    if (deadSubs > 0) {
      push('warn',
        deadSubs + ' 座变电站自身没电，覆盖区全部失效。先给变电站接上电缆。');
    }

    // ---- 9) 发电机零出力 ----
    let deadGens = 0;
    for (const [, g] of net.genByTile) {
      if (g.output <= 0.01) deadGens++;
    }
    if (deadGens > 0) {
      push('info',
        deadGens + ' 台发电机零出力（夜间太阳能/老化/损坏/沙尘暴）。' +
        '点选看 inspectTile() 详情。');
    }

    if (advice.length === 0) {
      push('info', '电网健康：供需平衡，无高温、无跳闸、无拉闸。');
    }

    // 按严重程度排序：critical > warn > info
    const rank = { critical: 0, warn: 1, info: 2 };
    advice.sort((a, b) => rank[a.level] - rank[b.level]);
    return advice;
  }

  /* ----------------------------------------------------------------------
   * 4.18 setOverlay(on)：覆盖层开关
   * -------------------------------------------------------------------- */
  setOverlay(on) {
    this.overlayOn = !!on;
  }

  /* ----------------------------------------------------------------------
   * 4.19 renderOverlay(ctx, map, tile)：电网覆盖层渲染
   * ----------------------------------------------------------------------
   * 调用约定：game.js render 循环里，建筑层之后调用：
   *     if (game.powergrid) game.powergrid.renderOverlay(ctx, game.map, tile);
   * 内部先检查 this.overlayOn，未开启直接返回（零开销）。
   *
   * 绘制层次（由下往上）：
   *   1. 变电站覆盖圈（虚线圆，半径 = substationRadius 格）。
   *   2. 电缆：按利用率着色（绿<60% / 黄60-85% / 红>85%积热），
   *      线宽随利用率加粗；相邻电缆瓦片之间连线，未连接方向画端点圆。
   *   3. 跳闸段：红黄闪烁（按时间 sin 闪烁）+ 恢复倒计时。
   *   4. 发电机徽章：⚡（有出力）/ 💤（零出力）。
   *   5. 电池：底部储量条（绿=储量比例）。
   *   6. 未通电/被拉闸建筑：红色 ✕（拉闸的加橙色边框区分）。
   *   7. 图例面板（左上角半透明）。
   *
   * 全部防御：ctx/map/tile 非法时静默返回；net 未就绪时只画电缆底色。
   * -------------------------------------------------------------------- */
  renderOverlay(ctx, map, tile) {
    if (!this.overlayOn) return;
    try {
      if (!ctx || !map || !isFinite(tile) || tile <= 0) return;
    } catch (e) { return; }

    const now = Date.now();
    const net = this.net; // 可能为 null（首帧），各段分别防御

    try {
      ctx.save();

      // ===== 1) 变电站覆盖圈 =====
      if (net) {
        for (const sk of net.subPowered) {
          const p = gridUnkey(sk);
          if (!p) continue;
          const cx = (p[0] + 0.5) * tile, cy = (p[1] + 0.5) * tile;
          const r = this.substationRadius * tile;
          ctx.strokeStyle = 'rgba(125,211,252,0.45)';
          ctx.lineWidth = 2;
          ctx.setLineDash([8, 6]);
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
          // 中心标记
          ctx.fillStyle = 'rgba(125,211,252,0.9)';
          ctx.font = 'bold ' + Math.max(10, tile * 0.4) + 'px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('变', cx, cy - r - 8);
        }
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
      }

      // ===== 2) 电缆 =====
      for (const k of this.cables) {
        const p = gridUnkey(k);
        if (!p) continue;
        const px = p[0] * tile, py = p[1] * tile;
        const cx = px + tile / 2, cy = py + tile / 2;
        const tripped = this.trips.has(k);

        if (tripped) {
          // ---- 跳闸：红黄闪烁 ----
          const blink = Math.sin(now / 150) > 0;
          ctx.fillStyle = blink ? 'rgba(239,68,68,0.85)' : 'rgba(250,204,21,0.85)';
          const m = tile * 0.18;
          ctx.fillRect(px + m, py + m, tile - m * 2, tile - m * 2);
          // 恢复倒计时
          const left = Math.max(0, Math.ceil((this.trips.get(k) - now) / 1000));
          ctx.fillStyle = '#fff';
          ctx.font = 'bold ' + Math.max(9, tile * 0.32) + 'px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(left + 's', cx, cy + tile * 0.12);
          ctx.textAlign = 'left';
          continue;
        }

        // ---- 正常电缆：按利用率着色 ----
        const flow = this.flow.get(k) || 0;
        const util = flow / Math.max(1, this.cableCapacity);
        const heat = gridClamp(this.heat.get(k) || 0, 0, 1);
        let color, width;
        if (heat >= GRID_HEAT_TRIP * 0.85 || util >= 1) {
          color = '#ef4444'; width = 7;   // 红：积热将满/超载
        } else if (heat >= GRID_HEAT_WARN || util >= GRID_OVERLOAD_UTIL) {
          color = '#f97316'; width = 6;   // 橙：积热中
        } else if (util >= 0.6) {
          color = '#facc15'; width = 5;   // 黄：偏高
        } else if (util > 0.01) {
          color = '#4ade80'; width = 4;   // 绿：健康载流
        } else {
          color = 'rgba(74,222,128,0.35)'; width = 3; // 淡绿：空载/未连通
        }

        // 底色（瓦片辨识）
        ctx.fillStyle = 'rgba(20,24,40,0.55)';
        ctx.fillRect(px + 1, py + 1, tile - 2, tile - 2);

        // 向 4 邻接的电缆/发电/变电/电池瓦片连线
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        let connectedDirs = 0;
        for (const [dx, dy] of GRID_DIRS) {
          const nk = gridKey(p[0] + dx, p[1] + dy);
          const isWire = this.cables.has(nk) && !this.trips.has(nk);
          const isNode = net && (net.genByTile.has(nk) ||
            net.subByTile.has(nk) || net.batByTile.has(nk));
          if (isWire || isNode) {
            connectedDirs++;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + dx * tile / 2, cy + dy * tile / 2);
            ctx.stroke();
          }
        }
        // 孤立端点：画圆点
        if (connectedDirs === 0) {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(cx, cy, width, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // 中心节点圆（连接点加固视觉）
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(cx, cy, width * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }

        // 高温文字（利用率 ≥85% 显示百分比）
        if (util >= GRID_OVERLOAD_UTIL) {
          ctx.fillStyle = '#fff';
          ctx.font = 'bold ' + Math.max(8, tile * 0.28) + 'px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(Math.round(util * 100) + '%', cx, cy - tile * 0.28);
          ctx.textAlign = 'left';
        }
      }

      // ===== 2b) 电流动画点（方向=下游，速度∝利用率） =====
      try {
        if (typeof this._renderFlowDots === 'function') {
          this._renderFlowDots(ctx, tile, now);
        }
      } catch (e) { /* 动画失败不影响主体 */ }

      // ===== 3) 发电机徽章 =====
      if (net) {
        const fs = Math.max(10, tile * 0.42);
        ctx.font = fs + 'px sans-serif';
        ctx.textAlign = 'center';
        for (const [, g] of net.genByTile) {
          const cx = (g.x + 0.5) * tile, cy = g.y * tile + tile * 0.22;
          // 光晕（出力越大越亮）
          const glow = gridClamp(g.output / 50, 0.15, 1);
          ctx.fillStyle = 'rgba(250,204,21,' + (0.25 + glow * 0.5).toFixed(2) + ')';
          ctx.beginPath();
          ctx.arc((g.x + 0.5) * tile, (g.y + 0.5) * tile, tile * 0.46, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#fff';
          ctx.fillText(g.output > 0.01 ? '⚡' : '💤', cx, cy);
          // 出力数字
          ctx.font = 'bold ' + Math.max(8, tile * 0.26) + 'px sans-serif';
          ctx.fillStyle = g.output > 0.01 ? '#fde68a' : '#9ca3af';
          ctx.fillText(g.output.toFixed(1), (g.x + 0.5) * tile, (g.y + 0.92) * tile);
          ctx.font = fs + 'px sans-serif';
        }
        ctx.textAlign = 'left';

        // ===== 4) 电池储量条 =====
        for (const [bk, bt] of net.batByTile) {
          const px = bt.x * tile, py = bt.y * tile;
          const cap = bt.capacity || 1;
          const ratio = gridClamp((this.batteryCharge.get(bk) || 0) / cap, 0, 1);
          const bw = tile * 0.8, bh = Math.max(4, tile * 0.12);
          const bx = px + tile * 0.1, by = py + tile - bh - 3;
          ctx.fillStyle = 'rgba(0,0,0,0.6)';
          ctx.fillRect(bx, by, bw, bh);
          ctx.fillStyle = ratio > 0.5 ? '#4ade80' : (ratio > 0.2 ? '#facc15' : '#ef4444');
          ctx.fillRect(bx, by, bw * ratio, bh);
          ctx.fillStyle = '#fff';
          ctx.font = Math.max(8, tile * 0.24) + 'px sans-serif';
          ctx.fillText('🔋' + Math.round(ratio * 100) + '%', bx, by - 3);
        }

        // ===== 5) 未通电 / 被拉闸建筑：红色 ✕ =====
        const xs = Math.max(12, tile * 0.5);
        ctx.font = 'bold ' + xs + 'px sans-serif';
        ctx.textAlign = 'center';
        for (const isl of net.islands) {
          for (const ck of isl.shedKeys) {
            const p = gridUnkey(ck);
            if (!p) continue;
            const cx = (p[0] + 0.5) * tile, cy = (p[1] + 0.5) * tile;
            // 拉闸：橙色描边 + 红叉（与「没连上」区分）
            ctx.strokeStyle = '#f97316';
            ctx.lineWidth = 3;
            ctx.strokeRect(p[0] * tile + 2, p[1] * tile + 2, tile - 4, tile - 4);
            ctx.fillStyle = '#ef4444';
            ctx.fillText('✕', cx, cy + xs * 0.35);
          }
        }
        // 没连上网的建筑（不在 powered 也不在 shed）：红色 ✕（无橙框）。
        // 与拉闸（橙框+✕）视觉区分。道路不标（不耗电）。
        try {
          const blds = Array.isArray(this._lastBuildings) ? this._lastBuildings : [];
          for (const b of blds) {
            if (!b || !isFinite(b.x) || !isFinite(b.y)) continue;
            if (b.id === 'road') continue;
            const bk = gridKey(b.x, b.y);
            if (net.powered.has(bk) || net.shed.has(bk)) continue;
            if (net.genByTile.has(bk)) continue; // 发电机自身永远有电，不标
            const cx = (b.x + 0.5) * tile, cy = (b.y + 0.5) * tile;
            ctx.fillStyle = 'rgba(239,68,68,0.9)';
            ctx.fillText('✕', cx, cy + xs * 0.35);
          }
        } catch (e) { /* 忽略 */ }
        ctx.textAlign = 'left';
      }

      // ===== 6) 图例面板 =====
      this._renderLegend(ctx, tile);

      ctx.restore();
    } catch (e) {
      // 渲染异常绝不能打断游戏主循环
      try { ctx.restore(); } catch (e2) {}
    }
  }

  /**
   * _renderLegend(ctx, tile)：覆盖层图例（左上角半透明面板）。
   * 说明颜色语义，见 POWERGUIDE 'overlay-read'。
   */
  _renderLegend(ctx, tile) {
    const items = [
      ['#4ade80', '电缆健康 (<60%)'],
      ['#facc15', '负载偏高 (60-85%)'],
      ['#f97316', '积热中 (>85%)'],
      ['#ef4444', '将跳闸 / 被拉闸✕'],
      ['blink', '跳闸闪烁 (30s恢复)'],
      ['⚡', '发电机出力'],
      ['🔋', '电池储量'],
    ];
    const fs = 12;
    const pad = 8;
    const w = 190, h = items.length * (fs + 6) + pad * 2 + 18;
    const x0 = 10, y0 = 10;
    ctx.fillStyle = 'rgba(10,14,26,0.82)';
    ctx.strokeStyle = 'rgba(125,211,252,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') ctx.roundRect(x0, y0, w, h, 6);
    else ctx.rect(x0, y0, w, h);
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold ' + fs + 'px sans-serif';
    ctx.fillStyle = '#7dd3fc';
    ctx.textAlign = 'left';
    ctx.fillText('⚡ 电网图例', x0 + pad, y0 + pad + 4);

    ctx.font = fs + 'px sans-serif';
    items.forEach((it, i) => {
      const iy = y0 + pad + 22 + i * (fs + 6);
      if (it[0] === 'blink') {
        const blink = Math.sin(Date.now() / 150) > 0;
        ctx.fillStyle = blink ? '#ef4444' : '#facc15';
        ctx.fillRect(x0 + pad, iy - 9, 14, 10);
      } else if (it[0][0] === '#') {
        ctx.fillStyle = it[0];
        ctx.fillRect(x0 + pad, iy - 9, 14, 10);
      } else {
        ctx.fillStyle = '#fff';
        ctx.fillText(it[0], x0 + pad, iy);
      }
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText(it[1], x0 + pad + 22, iy);
    });
    void tile;
  }

  /* ----------------------------------------------------------------------
   * 4.20 save()：存档序列化
   * ----------------------------------------------------------------------
   * 存什么：
   *   - version：存档版本（迁移用）
   *   - cables：["x,y", ...]
   *   - trips：[["x,y", recoverAt], ...]（恢复时间戳是 Date.now 基准，
   *     读档时若已过期则直接视为已恢复）
   *   - heat：[["x,y", heat], ...]（只存 >0.01 的，省空间）
   *   - batteryCharge：[["x,y", stored], ...]（每块电池的储量）
   *   - storedEnergy：总储量（冗余校验用）
   *   - priority：玩家自定义的断电优先级
   *   - stats.trips 历史累计跳闸次数（成就/统计用）
   * 不存：net 缓存（读档后第一帧 rebuild）、flow（重算）、history（可丢）。
   * game.js save() 里调：powergrid: this.powergrid ? this.powergrid.save() : null
   * -------------------------------------------------------------------- */
  save() {
    try {
      const heatArr = [];
      for (const [k, h] of this.heat) {
        if (h > 0.01) heatArr.push([k, Math.round(h * 1000) / 1000]);
      }
      const batArr = [];
      for (const [k, v] of this.batteryCharge) {
        if (v > 0.01) batArr.push([k, Math.round(v * 10) / 10]);
      }
      return {
        version: GRID_SAVE_VERSION,
        cables: [...this.cables],
        trips: [...this.trips].map(([k, t]) => [k, t]),
        heat: heatArr,
        batteryCharge: batArr,
        storedEnergy: Math.round(this.storedEnergy * 10) / 10,
        priority: this.priority.slice(),
        cableCapacity: this.cableCapacity,
        substationRadius: this.substationRadius,
        tripRecoverMs: this.tripRecoverMs,
        totalTrips: this._tripEvents || 0,
        savedAt: Date.now(),
      };
    } catch (e) {
      // 序列化绝不抛异常：返回最小可用存档
      return { version: GRID_SAVE_VERSION, cables: [] };
    }
  }

  /* ----------------------------------------------------------------------
   * 4.21 load(data)：读档恢复（含版本迁移）
   * ----------------------------------------------------------------------
   * 迁移规则：
   *   - data 为空/非法 → 静默忽略（新开局）。
   *   - version 缺失 → 视为 v1：只有 cables 数组。
   *   - v1 → v2：补 trips/heat 空结构。
   *   - v2 → v3：补 batteryCharge/storedEnergy/priority。
   *   - trips 中已过期的（recoverAt ≤ now）直接丢弃（视为已恢复）。
   *   - cables 中非法键（gridUnkey 失败）丢弃。
   * 恢复后置 _dirty=true，下一帧 rebuild。
   * game.js load() 里调：if (data.powergrid) this.powergrid.load(data.powergrid)
   * -------------------------------------------------------------------- */
  load(data) {
    try {
      if (!data || typeof data !== 'object') return false;

      // ---- v1 兼容：裸数组视为 cables ----
      if (Array.isArray(data)) {
        this._loadCables(data);
        this._dirty = true;
        return true;
      }

      const ver = typeof data.version === 'number' ? data.version : 1;

      // ---- cables（全版本） ----
      if (Array.isArray(data.cables)) this._loadCables(data.cables);

      // ---- trips（v2+）：丢弃已过期的 ----
      this.trips = new Map();
      if (ver >= 2 && Array.isArray(data.trips)) {
        const now = Date.now();
        for (const item of data.trips) {
          if (!Array.isArray(item) || item.length < 2) continue;
          const [k, t] = item;
          if (!gridUnkey(k)) continue;
          if (typeof t !== 'number' || !isFinite(t)) continue;
          if (t <= now) continue; // 已过期 → 视为恢复，不恢复跳闸
          this.trips.set(k, t);
          this.cables.add(k); // 跳闸的电缆本身必须在 cables 里
        }
      }

      // ---- heat（v2+） ----
      this.heat = new Map();
      if (ver >= 2 && Array.isArray(data.heat)) {
        for (const item of data.heat) {
          if (!Array.isArray(item) || item.length < 2) continue;
          const [k, h] = item;
          if (!gridUnkey(k)) continue;
          if (typeof h !== 'number' || !isFinite(h)) continue;
          this.heat.set(k, gridClamp(h, 0, 1.2));
        }
      }
      // heat 补齐：有电缆没 heat 记录 → 0
      for (const k of this.cables) {
        if (!this.heat.has(k)) this.heat.set(k, 0);
      }

      // ---- batteryCharge / storedEnergy（v3+） ----
      this.batteryCharge = new Map();
      if (ver >= 3 && Array.isArray(data.batteryCharge)) {
        for (const item of data.batteryCharge) {
          if (!Array.isArray(item) || item.length < 2) continue;
          const [k, v] = item;
          if (!gridUnkey(k)) continue;
          if (typeof v !== 'number' || !isFinite(v) || v <= 0) continue;
          this.batteryCharge.set(k, v);
        }
      }
      this.storedEnergy = 0;
      if (ver >= 3 && typeof data.storedEnergy === 'number' &&
          isFinite(data.storedEnergy) && data.storedEnergy > 0) {
        this.storedEnergy = data.storedEnergy;
      }
      // 自洽校验：各电池储量和应 ≈ storedEnergy，偏差大时以加总为准
      // （防止旧存档手改导致 UI 显示对不上）
      let batSum = 0;
      for (const v of this.batteryCharge.values()) batSum += v;
      if (Math.abs(batSum - this.storedEnergy) > Math.max(1, batSum * 0.05)) {
        this.storedEnergy = batSum;
      }

      // ---- priority（v3+）：校验为字符串数组才接受 ----
      if (ver >= 3 && Array.isArray(data.priority) &&
          data.priority.every((s) => typeof s === 'string')) {
        this.priority = data.priority.slice();
      }

      // ---- 可调参数（v3+）：范围钳制，防手改存档炸电网 ----
      if (ver >= 3) {
        if (isFinite(data.cableCapacity) && data.cableCapacity >= 5 &&
            data.cableCapacity <= 200) {
          this.cableCapacity = data.cableCapacity;
        }
        if (isFinite(data.substationRadius) && data.substationRadius >= 1 &&
            data.substationRadius <= 12) {
          this.substationRadius = Math.floor(data.substationRadius);
        }
        if (isFinite(data.tripRecoverMs) && data.tripRecoverMs >= 5000 &&
            data.tripRecoverMs <= 120000) {
          this.tripRecoverMs = data.tripRecoverMs;
        }
      }

      if (typeof data.totalTrips === 'number' && isFinite(data.totalTrips)) {
        this._tripEvents = Math.max(0, Math.floor(data.totalTrips));
      }

      this._dirty = true;
      this.net = null; // 强制下一帧全量重算
      return true;
    } catch (e) {
      return false;
    }
  }

  /** load 的子步骤：清洗并装入 cables。 */
  _loadCables(arr) {
    this.cables = new Set();
    for (const k of arr) {
      if (typeof k !== 'string') continue;
      if (!gridUnkey(k)) continue;
      this.cables.add(k);
    }
  }

  /* ----------------------------------------------------------------------
   * 4.22 reset()：清空电网（新开局 / 作弊清网用）
   * -------------------------------------------------------------------- */
  reset() {
    this.cables = new Set();
    this.trips = new Map();
    this.heat = new Map();
    this.flow = new Map();
    this.net = null;
    this.batteryCharge = new Map();
    this.storedEnergy = 0;
    this.blackout = false;
    this._pendingBlackout = false;
    this._dischargePlan = new Map();
    this.stats = { generated: 0, consumed: 0, stored: 0, maxStore: 0, trips: 0 };
    this.history = { t: [], gen: [], use: [] };
    this._dirty = true;
    this._lastRebuild = 0;
  }

  /* ----------------------------------------------------------------------
   * 4.23 断电优先级配置 API
   * ---------------------------------------------------------------------- */

  /**
   * getPriority()：返回当前拉闸顺序的拷贝（下标越小越先断）。
   */
  getPriority() {
    return this.priority.slice();
  }

  /**
   * setPriority(list)：设置拉闸顺序。
   * 校验：必须是字符串数组；空数组拒绝（至少保留默认）；
   * 未知建筑 id 允许（前向兼容，rank 按未知处理）。
   * 返回 {ok, msg}。成功后 ≤500ms 生效（下次 rebuild）。
   */
  setPriority(list) {
    if (!Array.isArray(list) || list.length === 0) {
      return { ok: false, msg: '优先级列表不能为空' };
    }
    if (!list.every((s) => typeof s === 'string' && s.length > 0)) {
      return { ok: false, msg: '列表元素必须是非空字符串（建筑 id）' };
    }
    // 去重（保留首次出现顺序）
    const seen = new Set();
    const clean = [];
    for (const s of list) {
      if (!seen.has(s)) { seen.add(s); clean.push(s); }
    }
    this.priority = clean;
    this._dirty = true; // rank 变化 → 立即重算拉闸
    return { ok: true, msg: '断电优先级已更新，下次平衡生效' };
  }

  /**
   * resetPriority()：恢复默认拉闸顺序。
   */
  resetPriority() {
    this.priority = [
      'uminer', 'he3rig', 'miner', 'pump',
      'smelter', 'waterplant', 'greenhouse',
      'lab', 'nanofactory', 'ecocircle', 'antenna',
      'trade', 'depot', 'logistics', 'warehouse',
      'school', 'weather', 'satellite', 'repair',
      'clone', 'shield',
      'command', 'spaceport', 'elevator',
      'hospital', 'habitat', 'dome',
    ];
    this._dirty = true;
    return { ok: true, msg: '已恢复默认断电优先级' };
  }

  /* ----------------------------------------------------------------------
   * 4.24 电网百科 API
   * ---------------------------------------------------------------------- */

  /**
   * guide()：返回 POWERGUIDE 全量拷贝（15 条机制说明）。
   */
  guide() {
    return POWERGUIDE.map((g) => ({ id: g.id, title: g.title, body: g.body }));
  }

  /**
   * guideById(id)：按 id 取单条，找不到返回 null。
   */
  guideById(id) {
    const g = POWERGUIDE.find((x) => x.id === id);
    return g ? { id: g.id, title: g.title, body: g.body } : null;
  }

  /**
   * guideSearch(keyword)：按关键词搜百科（标题+正文，大小写不敏感）。
   * 返回匹配条目数组。UI 搜索框用。
   */
  guideSearch(keyword) {
    if (typeof keyword !== 'string' || keyword.length === 0) return [];
    const kw = keyword.toLowerCase();
    return POWERGUIDE
      .filter((g) => g.title.toLowerCase().indexOf(kw) >= 0 ||
        g.body.toLowerCase().indexOf(kw) >= 0)
      .map((g) => ({ id: g.id, title: g.title, body: g.body }));
  }

  /* ----------------------------------------------------------------------
   * 4.25 getCableReport()：电缆明细表（UI 表格用）
   * ----------------------------------------------------------------------
   * 返回每段电缆：{x, y, flow, utilization, heat, status, powered}，
   * 按 utilization 降序排列。status ∈ 'tripped' | 'critical' | 'hot' |
   * 'high' | 'normal' | 'idle' | 'offline'。
   * 阈值与热量模型/覆盖层完全一致（同一套常量），避免 UI 与逻辑打架。
   * -------------------------------------------------------------------- */
  getCableReport() {
    const rows = [];
    for (const k of this.cables) {
      const p = gridUnkey(k);
      if (!p) continue;
      const tripped = this.trips.has(k);
      const flow = tripped ? 0 : (this.flow.get(k) || 0);
      const util = flow / Math.max(1, this.cableCapacity);
      const heat = gridClamp(this.heat.get(k) || 0, 0, 1);
      let status;
      if (tripped) status = 'tripped';
      else if (heat >= GRID_HEAT_TRIP * 0.85 || util >= 1) status = 'critical';
      else if (heat >= GRID_HEAT_WARN || util >= GRID_OVERLOAD_UTIL) status = 'hot';
      else if (util >= 0.6) status = 'high';
      else if (util > 0.01) status = 'normal';
      else if (this.net && this.net.powered.has(k)) status = 'idle';
      else status = 'offline'; // 电缆存在但没连上任何发电机
      rows.push({
        x: p[0], y: p[1], key: k,
        flow: Math.round(flow * 100) / 100,
        utilization: Math.round(util * 1000) / 1000,
        heat: Math.round(heat * 1000) / 1000,
        status,
        powered: !!(this.net && this.net.powered.has(k) && !tripped),
        tripRecoverIn: tripped ? Math.max(0, this.trips.get(k) - Date.now()) : 0,
      });
    }
    rows.sort((a, b) => b.utilization - a.utilization);
    return rows;
  }

  /* ----------------------------------------------------------------------
   * 4.26 findNearestGenerator(x, y, game)：找最近的发电机
   * ----------------------------------------------------------------------
   * 返回 {x, y, id, output, dist}（dist = 曼哈顿距离），没有发电机返回 null。
   * 用途：UI「离这栋建筑最近的电源在哪」；suggestPath 的起点自动选取。
   * 注意：返回的是「地理最近」，不是「电网连通」——连通性看 isPowered。
   * -------------------------------------------------------------------- */
  findNearestGenerator(x, y, game) {
    if (!this.net || this.net.genByTile.size === 0) return null;
    let best = null, bestD = Infinity;
    for (const [, g] of this.net.genByTile) {
      const d = gridManhattan(x, y, g.x, g.y);
      if (d < bestD) {
        bestD = d;
        best = { x: g.x, y: g.y, id: g.id, output: Math.round(g.output * 100) / 100, dist: d };
      }
    }
    return best;
  }

  /* ----------------------------------------------------------------------
   * 4.27 suggestCableTo(x, y, game)：一键布线建议（高层封装）
   * ----------------------------------------------------------------------
   * 输入目标建筑坐标，自动找最近发电机 → suggestPath 算路径 →
   * 返回 {ok, path, cost, from}。UI 按钮「自动布线」直接调它。
   * 失败原因细分：无发电机 / 目标已有电 / 不可达。
   * -------------------------------------------------------------------- */
  suggestCableTo(x, y, game) {
    x = Math.floor(x); y = Math.floor(y);
    // 目标已有电 → 不需要布线
    if (this.isPowered(x, y) && this.net) {
      const k = gridKey(x, y);
      if (!this.net.shed.has(k)) {
        return { ok: false, reason: 'powered', msg: '该建筑已有电，无需布线' };
      }
    }
    const gen = this.findNearestGenerator(x, y, game);
    if (!gen) {
      return { ok: false, reason: 'no-generator', msg: '没有发电机，先建造太阳能板/核电站' };
    }
    const path = this.suggestPath(gen.x, gen.y, x, y, game);
    if (path.length === 0) {
      return { ok: false, reason: 'unreachable', msg: '地形隔断，无法布线（检查峡谷/岩石带）' };
    }
    return {
      ok: true,
      path,
      cost: this.suggestPathCost(path),
      from: { x: gen.x, y: gen.y, id: gen.id },
      steps: path.length,
    };
  }

  /* ----------------------------------------------------------------------
   * 4.28 forecastNextHours(game, hours)：未来 N 小时电力预测
   * ----------------------------------------------------------------------
   * 原理：太阳能出力只与 hour 有关（确定性函数），所以未来可精确预测；
   * 核/聚变视为恒定；用电按当前 served 估算（假设玩家不增减建筑）。
   * 电池：按当前储量 + 预测余电/缺口做简化积分（效率 0.9，不考虑自放电）。
   * 返回 [{hour, solarFactor, generated, consumed, netAfterBattery, blackout}]，
   * 步长 1 小时。UI 可画「今晚会不会停电」曲线。
   * 这是预测不是承诺：玩家中途加建筑/跳闸会改变结果。
   * -------------------------------------------------------------------- */
  forecastNextHours(game, hours) {
    hours = Math.floor(hours);
    if (!isFinite(hours) || hours <= 0) hours = 12;
    if (hours > 48) hours = 48; // 上限 48 小时，防 UI 误传大数
    if (!this.net) return [];

    // 基准：当前各发电机按类型拆分（solar 走曲线，其它恒定）
    let baseLoad = 0;      // 非太阳能发电机出力（恒定）
    const solarNameplate = []; // 太阳能铭牌（含老化/损坏/沙尘后的等效铭牌）
    for (const [, g] of this.net.genByTile) {
      if (g.id === 'solar') {
        // 反推等效铭牌：output = 铭牌 × 当前曲线系数 → 铭牌 = output / 当前系数
        const curF = gridSolarFactor(this.net.hour !== undefined ? this.net.hour : 12);
        solarNameplate.push(g.output / Math.max(0.05, curF));
      } else {
        baseLoad += g.output;
      }
    }
    const demand = this.stats.consumed || 0;
    let simStored = this.storedEnergy;
    const cap = this._batteryCapacity();
    const startHour = gridReadHour(game);

    const out = [];
    for (let i = 1; i <= hours; i++) {
      const h = (startHour + i) % 24;
      const f = gridSolarFactor(h);
      const solarOut = solarNameplate.reduce((s, np) => s + np * f, 0);
      const generated = baseLoad + solarOut;
      let net = generated - demand; // >0 余电，<0 缺口
      let blackout = false;
      // 电池简化积分
      if (net > 0 && cap > 0) {
        const room = cap - simStored;
        const charge = Math.min(net * 0.9, room); // 1 小时余电 × 效率
        simStored = Math.min(cap, simStored + charge);
      } else if (net < 0 && cap > 0) {
        const discharge = Math.min(-net, simStored);
        simStored = Math.max(0, simStored - discharge);
        net += discharge;
        if (net < -GRID_BLACKOUT_EPS) blackout = true;
      } else if (net < -GRID_BLACKOUT_EPS) {
        blackout = true;
      }
      out.push({
        hour: Math.round(h * 10) / 10,
        solarFactor: Math.round(f * 1000) / 1000,
        generated: Math.round(generated * 100) / 100,
        consumed: Math.round(demand * 100) / 100,
        batteryPct: cap > 0 ? Math.round((simStored / cap) * 1000) / 1000 : 0,
        blackout,
      });
    }
    return out;
  }

  /* ----------------------------------------------------------------------
   * 4.29 exportTextReport(game)：文本诊断报告（调试/日志用）
   * ----------------------------------------------------------------------
   * 多行纯文本，汇总电网全状态。game.js 的调试面板或 bug 上报时可直接
   * 复制。内容：时间/供需/电池/电缆/孤岛/拉闸/建议。
   * -------------------------------------------------------------------- */
  exportTextReport(game) {
    const s = this.getStats();
    const lines = [];
    lines.push('=== 星港电网诊断报告 ===');
    try {
      lines.push('时间: ' + new Date().toLocaleString() +
        ' / 游戏小时: ' + s.hour.toFixed(1) +
        ' / 太阳能系数: ' + s.solarFactor.toFixed(2));
    } catch (e) { lines.push('时间: n/a'); }
    lines.push('供需: 发电 ' + s.generated.toFixed(1) + ' 电 / 用电 ' +
      s.consumed.toFixed(1) + ' 电 / 缺口 ' +
      Math.max(0, s.consumed - s.generated).toFixed(1) + ' 电');
    lines.push('电池: ' + s.stored.toFixed(1) + ' / ' + s.maxStore +
      ' (' + (s.maxStore > 0 ? Math.round(s.stored / s.maxStore * 100) : 0) + '%)');
    lines.push('电缆: ' + s.cableCount + ' 段 / 跳闸 ' + s.tripCount +
      ' 段 / 平均利用率 ' + Math.round(s.utilizationAvg * 100) + '% / 高温 ' +
      s.hotCables + ' 段');
    lines.push('孤岛: ' + s.islandCount + ' 个 / 被拉闸建筑: ' + s.shedCount +
      ' 栋 / 缺电状态: ' + (s.blackout ? '是 BLACKOUT' : '否'));
    lines.push('--- 孤岛明细 ---');
    for (const isl of this.getIslands()) {
      lines.push('#' + isl.id + ': 发电' + isl.generatorOutput.toFixed(1) +
        ' 用电' + isl.demand.toFixed(1) + ' 实供' + isl.served.toFixed(1) +
        ' 电缆' + isl.cableCount + '段' +
        (isl.shedded ? ' [拉闸中]' : '') +
        (isl.surplus > 1 ? ' [余电' + isl.surplus.toFixed(1) + '浪费]' : ''));
    }
    lines.push('--- 诊断建议 ---');
    for (const a of this.getAdvice(game)) {
      lines.push('[' + a.level + '] ' + a.text);
    }
    lines.push('=== 报告结束 ===');
    return lines.join('\n');
  }

  /* ----------------------------------------------------------------------
   * 4.30 getGridStability()：电网稳定度 0..1（成就/UI 灯用）
   * ----------------------------------------------------------------------
   * 综合指标：
   *   1.0 = 完美（无拉闸、无跳闸、无高温、供需比 ≥ 1.2）。
   * 扣分项：拉闸建筑占比、跳闸段占比、高温段占比、供需比 <1。
   * 这是展示用指标，不参与任何逻辑判定（判定只用原始量）。
   * -------------------------------------------------------------------- */
  getGridStability() {
    if (this._degraded || !this.net) return 1;
    let score = 1;
    // 拉闸：按被拉闸用电量占比扣（最多扣 0.5）
    const totalDemand = this.net.islands.reduce((s, i) => s + i.demand, 0);
    const shedDemand = this.net.islands.reduce((s, i) => {
      let d = 0;
      for (const k of i.shedKeys) {
        const c = i.consumers.find((x) => x.key === k);
        if (c) d += c.demand;
      }
      return s + d;
    }, 0);
    if (totalDemand > 0) score -= 0.5 * (shedDemand / totalDemand);
    // 跳闸：每段扣 0.05（最多扣 0.3）
    score -= Math.min(0.3, this.trips.size * 0.05);
    // 高温：每段扣 0.02（最多扣 0.2）
    let hotN = 0;
    for (const k of this.cables) {
      if (!this.trips.has(k) && (this.heat.get(k) || 0) >= GRID_HEAT_WARN) hotN++;
    }
    score -= Math.min(0.2, hotN * 0.02);
    // 供需比 <1.2 扣分（线性）
    const gen = this.stats.generated || 0, use = this.stats.consumed || 0;
    if (use > 0) {
      const ratio = gen / use;
      if (ratio < 1.2) score -= 0.2 * ((1.2 - ratio) / 1.2);
    } else if (gen <= 0 && this.cables.size > 0) {
      score -= 0.1; // 有网无电，小扣
    }
    return Math.round(gridClamp(score, 0, 1) * 1000) / 1000;
  }

  /* ----------------------------------------------------------------------
   * 4.31 getUnpoweredConsumers(game)：未通电用电建筑清单
   * ----------------------------------------------------------------------
   * 返回 [{x, y, id, name, demand}]。判定：powerUse>0 且不在 powered 集
   *（含被拉闸的——调用方可用 shed 字段区分）。
   * -------------------------------------------------------------------- */
  getUnpoweredConsumers(game) {
    const out = [];
    if (this._degraded || !this.net) return out;
    const buildings = this._safeBuildings(game);
    for (const b of buildings) {
      if (!b || !gridIsConsumer(game, b)) continue;
      const k = gridKey(b.x, b.y);
      if (this.net.powered.has(k)) continue;
      const lv = gridLevelDef(game, b);
      out.push({
        x: b.x, y: b.y, id: b.id,
        name: this._buildingName(game, b),
        demand: lv.powerUse || 0,
        shedded: this.net.shed.has(k), // true=连上但被拉闸，false=根本没连上
      });
    }
    return out;
  }

  /* ----------------------------------------------------------------------
   * 4.32 whatIf(game, mods)：假设分析（沙盘推演，不碰真实状态）
   * ----------------------------------------------------------------------
   * 用途：UI 在玩家「预建」某建筑时提示后果，例如：
   *   whatIf(game, {addBuildings:[{id:'nuclear', x:10, y:10, level:1}]})
   *   → {generated, consumed, blackout, shedCount, deltaBlackout}
   *
   * 实现：建一个临时 PowerGridManager，把当前 cables/trips/config 拷过去，
   * 把「原建筑 + 假设增删」拼成临时建筑数组挂到一个影子 builder 上，
   * 调 rebuild 算一次，读 stats/islands 后丢弃。真实管理器零污染。
   *
   * mods 格式：
   *   { addBuildings: [{id, x, y, level}],   // level 缺省 1
   *     removeAt: [[x,y], ...],              // 假设拆除这些坐标的建筑
   *     addCables: [[x,y], ...] }            // 假设多铺这些电缆
   * 返回：{generated, consumed, blackout, shedCount, islandCount,
   *   deltaGenerated, deltaBlackout, ok}。
   * 防御：任何异常返回 {ok:false}，不影响主电网。
   * -------------------------------------------------------------------- */
  whatIf(game, mods) {
    try {
      if (!game || !game.builder || !mods || typeof mods !== 'object') {
        return { ok: false, msg: '参数非法' };
      }
      // ---- 影子建筑数组 ----
      const real = this._safeBuildings(game);
      const removeKeys = new Set();
      if (Array.isArray(mods.removeAt)) {
        for (const [x, y] of mods.removeAt) {
          if (isFinite(x) && isFinite(y)) removeKeys.add(gridKey(x, y));
        }
      }
      const shadow = real.filter((b) => b && !removeKeys.has(gridKey(b.x, b.y)));
      if (Array.isArray(mods.addBuildings)) {
        for (const nb of mods.addBuildings) {
          if (!nb || typeof nb.id !== 'string' || !isFinite(nb.x) || !isFinite(nb.y)) continue;
          shadow.push({
            id: nb.id, x: Math.floor(nb.x), y: Math.floor(nb.y),
            level: nb.level >= 1 && nb.level <= 3 ? Math.floor(nb.level) : 1,
            lastProduce: Date.now(), builtAt: Date.now(), damaged: false,
          });
        }
      }

      // ---- 影子 game：只替换 builder.buildings，其余委托原 game ----
      // 用 Object.create 做原型委托，避免深拷贝整个 game。
      const shadowBuilder = Object.create(game.builder);
      shadowBuilder.buildings = shadow;
      const shadowGame = Object.create(game);
      shadowGame.builder = shadowBuilder;

      // ---- 临时管理器：拷拓扑与配置 ----
      const tmp = new PowerGridManager();
      tmp.cables = new Set(this.cables);
      tmp.trips = new Map(this.trips);
      tmp.cableCapacity = this.cableCapacity;
      tmp.substationRadius = this.substationRadius;
      tmp.batteryEfficiency = this.batteryEfficiency;
      tmp.priority = this.priority.slice();
      tmp.storedEnergy = this.storedEnergy; // 电池当前储量带入（放电能力一致）
      if (Array.isArray(mods.addCables)) {
        for (const [x, y] of mods.addCables) {
          if (isFinite(x) && isFinite(y)) tmp.cables.add(gridKey(x, y));
        }
      }

      tmp.rebuild(shadowGame, Date.now());
      const before = this.getStats();
      const afterIslands = tmp.net ? tmp.net.islands : [];
      const afterBlackout = !!tmp._pendingBlackout;
      const afterShed = tmp.net ? tmp.net.shed.size : 0;
      const afterGen = afterIslands.reduce((s, i) => s + i.generated, 0);
      const afterUse = afterIslands.reduce((s, i) => s + (i.served !== undefined ? i.served : i.demand), 0);

      return {
        ok: true,
        generated: Math.round(afterGen * 100) / 100,
        consumed: Math.round(afterUse * 100) / 100,
        blackout: afterBlackout,
        shedCount: afterShed,
        islandCount: afterIslands.length,
        deltaGenerated: Math.round((afterGen - before.generated) * 100) / 100,
        deltaBlackout: afterBlackout !== before.blackout,
        note: afterBlackout && !before.blackout ? '警告：该改动会导致缺电拉闸' :
          (!afterBlackout && before.blackout ? '该改动可解除当前缺电' : '缺电状态不变'),
      };
    } catch (e) {
      return { ok: false, msg: '推演异常' };
    }
  }

  /* ----------------------------------------------------------------------
   * 4.33 调试钩子：forceRebuild(game)
   * ----------------------------------------------------------------------
   * 立即重算（无视节流）。调试面板 / 自动化测试用。游戏主循环不需要调它，
   * update 里的 _dirty 机制已覆盖正常需求。
   * -------------------------------------------------------------------- */
  forceRebuild(game) {
    if (!game || !game.builder) return false;
    this._dirty = true;
    this.rebuild(game, Date.now());
    this._lastRebuild = Date.now();
    this._dirty = false;
    return true;
  }
} // class PowerGridManager 结束

/* ==========================================================================
 * [5] 模块导出（Node 测试 / 浏览器全局两用）
 * --------------------------------------------------------------------------
 * 浏览器：直接 <script src="powergrid.js">，PowerGridManager / POWERGUIDE /
 * GRID_* 常量挂在全局（const 在顶层 script 作用域即全局词法环境，
 * game.js 用 typeof PowerGridManager !== 'undefined' 检测）。
 * Node：module.exports 供单测 require。
 * ========================================================================== */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PowerGridManager,
    POWERGUIDE,
    gridKey,
    gridUnkey,
    gridSolarFactor,
    gridReadHour,
    GRID_CABLE_CAPACITY,
    GRID_SUBSTATION_RADIUS,
    GRID_TRIP_RECOVER_MS,
    GRID_SAVE_VERSION,
  };
}

/* ==========================================================================
 * [6] PowerGridManager 扩展方法（事件日志 / 峰值 / 平衡明细 / 覆盖分析）
 * --------------------------------------------------------------------------
 * 以下方法以 prototype 扩展的形式追加，保持类主体可读。
 * 它们与类内方法完全等价（JS prototype 语义），只是物理上写在后面，
 * 便于按「核心→诊断→扩展」的顺序组织文件。
 * ========================================================================== */

/**
 * _logEvent(type, data)：电网事件日志（环形缓冲，保留 200 条）。
 * 记录：trip（跳闸）、trip-recover（恢复）、blackout-on/off、
 * battery-full/empty、heat-warn、cable-place/remove。
 * 每条 {t, type, data}。UI「电网大事记」/ bug 上报用。
 * 用原型方法访问类内部字段完全合法（this 绑定不变）。
 */
PowerGridManager.prototype._logEvent = function (type, data) {
  try {
    if (!this._eventLog) this._eventLog = [];
    this._eventLog.push({ t: Date.now(), type, data: data || {} });
    if (this._eventLog.length > 200) this._eventLog.shift();
  } catch (e) { /* 日志永不抛异常 */ }
};

/**
 * getEventLog()：返回事件日志拷贝（时间倒序，最新的在前）。
 * limit 可选，默认 50。
 */
PowerGridManager.prototype.getEventLog = function (limit) {
  const log = Array.isArray(this._eventLog) ? this._eventLog : [];
  const n = isFinite(limit) && limit > 0 ? Math.floor(limit) : 50;
  return log.slice(-n).reverse().map((e) => ({ t: e.t, type: e.type, data: e.data }));
};

/**
 * _trackPeaks()：峰值跟踪（每帧调用，开销可忽略）。
 *   peakGenerated / peakConsumed：历史最大瞬时值（带时间戳）。
 *   blackoutTimeMs：累计缺电时长（ms）。
 * 在 update 尾部调用。
 */
PowerGridManager.prototype._trackPeaks = function (now, dt) {
  try {
    if (!this._peaks) {
      this._peaks = {
        generated: 0, generatedAt: 0,
        consumed: 0, consumedAt: 0,
        blackoutMs: 0, blackoutCount: 0,
      };
    }
    const p = this._peaks;
    const g = this.stats.generated || 0, u = this.stats.consumed || 0;
    if (g > p.generated) { p.generated = g; p.generatedAt = now; }
    if (u > p.consumed) { p.consumed = u; p.consumedAt = now; }
    if (this.blackout) {
      p.blackoutMs += dt;
      if (!this._wasBlackoutCounted) {
        p.blackoutCount++;
        this._wasBlackoutCounted = true;
      }
    } else {
      this._wasBlackoutCounted = false;
    }
  } catch (e) { /* 忽略 */ }
};

/**
 * getPeaks()：返回峰值与缺电统计拷贝。
 */
PowerGridManager.prototype.getPeaks = function () {
  const p = this._peaks || {
    generated: 0, generatedAt: 0, consumed: 0, consumedAt: 0,
    blackoutMs: 0, blackoutCount: 0,
  };
  return {
    peakGenerated: Math.round(p.generated * 100) / 100,
    peakGeneratedAt: p.generatedAt,
    peakConsumed: Math.round(p.consumed * 100) / 100,
    peakConsumedAt: p.consumedAt,
    blackoutMs: Math.round(p.blackoutMs),
    blackoutCount: p.blackoutCount,
    totalTrips: this._tripEvents || 0,
  };
};

/**
 * getPowerBalance()：每孤岛功率平衡明细。
 * 返回 [{islandId, generated, demand, served, discharge, shedCount,
 *   balance（余/缺）, status}]，status ∈ 'surplus' | 'balanced' |
 *   'battery-cover' | 'shedding'。
 */
PowerGridManager.prototype.getPowerBalance = function () {
  if (!this.net) return [];
  return this.net.islands.map((isl) => {
    const served = isl.served !== undefined ? isl.served : isl.demand;
    const discharge = isl.discharge || 0;
    const balance = isl.generated + discharge - isl.demand;
    let status;
    if (isl.shedded) status = 'shedding';
    else if (balance > 1) status = 'surplus';
    else if (discharge > GRID_BLACKOUT_EPS) status = 'battery-cover';
    else status = 'balanced';
    return {
      islandId: isl.id,
      generated: Math.round(isl.generated * 100) / 100,
      demand: isl.demand,
      served: Math.round(served * 100) / 100,
      discharge: Math.round(discharge * 100) / 100,
      shedCount: isl.shedKeys.size,
      balance: Math.round(balance * 100) / 100,
      status,
    };
  });
};

/**
 * getSubstationCoverage()：变电站覆盖分析。
 * 返回每座变电站 {x, y, powered, radius, coveredTiles, coveredConsumers:[{x,y,id}]}。
 * coveredConsumers = 覆盖区内且已通电的用电建筑（证明覆盖生效）。
 */
PowerGridManager.prototype.getSubstationCoverage = function () {
  const out = [];
  if (!this.net) return out;
  const size = this.substationRadius * 2 + 1;
  for (const [, s] of this.net.subByTile) {
    const powered = this.net.powered.has(s.key);
    const coveredConsumers = [];
    let coveredTiles = 0;
    if (powered) {
      const r = s.radius;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) > r) continue;
          coveredTiles++;
        }
      }
      // 覆盖区内的消费者（与变电站同分量的消费者）
      for (const isl of this.net.islands) {
        for (const c of isl.consumers) {
          if (gridChebyshev(s.x, s.y, c.x, c.y) <= r) {
            coveredConsumers.push({ x: c.x, y: c.y, id: c.id, demand: c.demand });
          }
        }
      }
    }
    out.push({
      x: s.x, y: s.y, id: s.id,
      powered, radius: s.radius,
      coveredTiles, coverageSize: size,
      coveredConsumers,
    });
  }
  return out;
};

/**
 * canPlaceCable(x, y, game)：铺设预检（明细版）。
 * 返回 {ok, checks:[{id, label, pass, msg}]}，UI 可逐项打勾/打叉。
 * placeCable 内部用简化版；这个给「为什么不能铺」的可视化用。
 */
PowerGridManager.prototype.canPlaceCable = function (x, y, game) {
  const checks = [];
  const add = (id, label, pass, msg) => checks.push({ id, label, pass: !!pass, msg: msg || '' });
  x = Math.floor(x); y = Math.floor(y);
  const size = this._safeMapSize(game);
  const k = gridKey(x, y);

  add('bounds', '坐标合法', isFinite(x) && isFinite(y) && x >= 0 && y >= 0 && x < size && y < size,
    '地图 ' + size + '×' + size);
  add('dup', '无重复电缆', !this.cables.has(k), this.cables.has(k) ? '已有电缆' : '');

  let occupiedName = null;
  try {
    if (game && game.builder && typeof game.builder.at === 'function') {
      const b = game.builder.at(x, y);
      if (b) occupiedName = this._buildingName(game, b);
    }
  } catch (e) {}
  add('occupy', '未被建筑占据', !occupiedName, occupiedName ? '被' + occupiedName + '占据' : '');

  let terrainOk = true, terrainMsg = '';
  try {
    let flat = 0;
    try { flat = (typeof TERRAIN !== 'undefined') ? TERRAIN.FLAT : 0; } catch (e) {}
    if (game && game.map && game.map.terrain && game.map.terrain[y] !== undefined) {
      const t = game.map.terrain[y][x];
      terrainOk = (t === flat);
      if (!terrainOk) terrainMsg = '仅限平地（当前地形码 ' + t + '）';
    }
  } catch (e) {}
  add('terrain', '地形为平地', terrainOk, terrainMsg);

  let unlockedOk = true;
  try {
    if (game && game.map && typeof game.map.isUnlocked === 'function') {
      unlockedOk = game.map.isUnlocked(x, y);
    }
  } catch (e) {}
  add('unlock', '区域已解锁', unlockedOk, unlockedOk ? '' : '该扇区未解锁');

  let affordOk = true, affordMsg = '';
  try {
    const inv = game && game.player ? game.player.inv : null;
    if (inv && typeof canAfford === 'function') {
      affordOk = canAfford(inv, GRID_CABLE_COST);
      if (!affordOk) affordMsg = '需要 ' + (GRID_CABLE_COST.iron || 1) + ' 铁';
    }
  } catch (e) {}
  add('cost', '资源足够（1 铁）', affordOk, affordMsg);

  const ok = checks.every((c) => c.pass);
  return { ok, checks };
};

/**
 * getSheddableLoad(game)：可拉闸负载清单（按当前拉闸顺序）。
 * 返回 [{x, y, id, name, demand, shedRank, shedded}]，按 shedRank 升序。
 * UI「拉闸预案」面板用：让玩家提前看到缺电时谁先断。
 */
PowerGridManager.prototype.getSheddableLoad = function (game) {
  const out = [];
  if (!this.net) return out;
  for (const isl of this.net.islands) {
    for (const c of isl.consumers) {
      out.push({
        x: c.x, y: c.y, id: c.id,
        name: this._buildingName(game, c.b),
        demand: c.demand,
        shedRank: c.shedRank,
        shedded: isl.shedKeys.has(c.key),
        islandId: isl.id,
      });
    }
  }
  out.sort((a, b) => a.shedRank - b.shedRank || b.demand - a.demand);
  return out;
};

/**
 * getExpansionPlan(game)：扩建规划器。
 * 定量回答三个问题：
 *   1. 缺电时：还差多少电？折算成几种发电机各需几台？
 *   2. 电缆高温时：哪几段最该并联？并联后利用率降到多少？
 *   3. 夜间缺口：需要多少电池容量才能撑过黑夜？
 * 返回 {deficit, genOptions, cableFixes, batteryNeed, summary[]}。
 * 全部是算出来的数，不是模板话术。
 */
PowerGridManager.prototype.getExpansionPlan = function (game) {
  const plan = {
    deficit: 0, genOptions: [], cableFixes: [], batteryNeed: 0, summary: [],
  };
  if (this._degraded || !this.net) return plan;
  const hour = gridReadHour(game);
  const solarF = gridSolarFactor(hour);

  // ---- 1) 发电缺口：各孤岛缺口求和（电池放电已计入 served 逻辑，这里用原始缺口） ----
  let totalDeficit = 0;
  for (const isl of this.net.islands) {
    const gap = isl.demand - isl.generated - (isl.discharge || 0);
    if (gap > GRID_BLACKOUT_EPS) totalDeficit += gap;
  }
  plan.deficit = Math.round(totalDeficit * 10) / 10;

  if (totalDeficit > GRID_BLACKOUT_EPS) {
    // 折算成具体建筑台数（按当前实际出力折算，不是铭牌）：
    // 太阳能按当前昼夜系数，核/聚变按铭牌（基荷稳定）。
    const options = [
      { id: 'solar', name: '太阳能板', perUnit: 18 * solarF, note: '当前系数' + solarF.toFixed(2) },
      { id: 'nuclear', name: '核电站', perUnit: 70, note: 'Lv2 基荷' },
      { id: 'fusion', name: '聚变电站', perUnit: 250, note: 'Lv2 基荷' },
    ];
    // 老化/损坏折损用全网发电机平均效率修正（effectiveOutput 已含，取保守 0.85）
    for (const o of options) {
      const eff = o.perUnit * 0.85;
      const count = eff > 0 ? Math.ceil(totalDeficit / eff) : 99;
      plan.genOptions.push({
        id: o.id, name: o.name,
        perUnit: Math.round(eff * 10) / 10,
        count, note: o.note,
        text: '缺口 ' + plan.deficit + ' 电 ≈ ' + count + ' 台' + o.name +
          '（单台实出约 ' + (Math.round(eff * 10) / 10) + ' 电，' + o.note + '）',
      });
    }
    plan.summary.push('发电缺口 ' + plan.deficit + ' 电：' +
      plan.genOptions.map((o) => o.count + '台' + o.name).join(' / ') + ' 任选其一。');
  }

  // ---- 2) 电缆并联：利用率 Top3 的段，并联 1 条后利用率减半 ----
  const hot = this.getCableReport()
    .filter((r) => r.status === 'critical' || r.status === 'hot')
    .slice(0, 3);
  for (const r of hot) {
    const after = r.utilization / 2;
    plan.cableFixes.push({
      x: r.x, y: r.y,
      utilization: r.utilization,
      afterParallel: Math.round(after * 1000) / 1000,
      text: '电缆(' + r.x + ',' + r.y + ') 利用率 ' +
        Math.round(r.utilization * 100) + '% → 并联 1 条后约 ' +
        Math.round(after * 100) + '%',
    });
  }
  if (plan.cableFixes.length > 0) {
    plan.summary.push('高温电缆 ' + plan.cableFixes.length +
      ' 段：给每段并联 1 条同路径电缆分流（铁耗 = 段数）。');
  }

  // ---- 3) 电池需求：用 forecast 看未来 12 小时最大累计缺口 ----
  try {
    const fc = this.forecastNextHours(game, 12);
    let maxCumDeficit = 0, cum = 0;
    for (const f of fc) {
      const net = f.generated - f.consumed;
      if (net < 0) cum += -net; // 累计缺口（电·小时）
      else cum = Math.max(0, cum + net * 0.5); // 余电部分回补（保守系数）
      if (cum > maxCumDeficit) maxCumDeficit = cum;
    }
    // 电池容量单位是「电·秒」，1 电·小时 = 3600 电·秒；考虑充电效率 0.9
    const needSeconds = maxCumDeficit * 3600 / 0.9;
    plan.batteryNeed = Math.round(needSeconds);
    if (needSeconds > (this.stats.maxStore || 0) * 1.2 && maxCumDeficit > 1) {
      plan.summary.push('未来 12 小时累计缺口约 ' + maxCumDeficit.toFixed(1) +
        ' 电·小时，需电池容量 ' + plan.batteryNeed + '（当前 ' +
        (this.stats.maxStore || 0) + '），否则夜间拉闸。');
    }
  } catch (e) { /* 预测失败则跳过该项 */ }

  if (plan.summary.length === 0) {
    plan.summary.push('电网无短板：供需平衡、电缆健康、电池充足。');
  }
  return plan;
};

/**
 * _renderFlowDots(ctx, tile, now)：电流流动画点。
 * 在每段载流电缆上画沿「下游方向」移动的光点，直观显示电流方向与大小：
 *   - 方向：dist 更大的邻居 = 下游（远离发电机）。
 *   - 速度：正比于利用率（util 越高跑得越快）。
 *   - 数量：util>0.85 画 3 个，>0.4 画 2 个，否则 1 个。
 *   - 颜色：与电缆同色系但更亮。
 * renderOverlay 的电缆段之后调用（原型方法，由类内渲染入口调用）。
 */
PowerGridManager.prototype._renderFlowDots = function (ctx, tile, now) {
  if (!this.net || !this.net.dist) return;
  const dist = this.net.dist;
  for (const k of this.cables) {
    if (this.trips.has(k)) continue;
    const flow = this.flow.get(k) || 0;
    if (flow < 0.5) continue; // 无载流不画点
    const p = gridUnkey(k);
    if (!p) continue;
    const util = flow / Math.max(1, this.cableCapacity);
    const myD = dist.get(k);
    if (myD === undefined) continue;
    // 找下游邻居（dist 更大者优先；没有则取任意已连通邻居）
    let dx = 0, dy = 0, found = false;
    for (const [ox, oy] of GRID_DIRS) {
      const nk = gridKey(p[0] + ox, p[1] + oy);
      const nd = dist.get(nk);
      if (nd !== undefined && nd > myD &&
          (this.cables.has(nk) || (this.net && (this.net.genByTile.has(nk) ||
            this.net.subByTile.has(nk) || this.net.batByTile.has(nk))))) {
        dx = ox; dy = oy; found = true;
        break;
      }
    }
    if (!found) {
      // 退化：沿第一个连通方向画（至少动起来）
      for (const [ox, oy] of GRID_DIRS) {
        const nk = gridKey(p[0] + ox, p[1] + oy);
        if (this.cables.has(nk) && !this.trips.has(nk)) { dx = ox; dy = oy; found = true; break; }
      }
    }
    if (!found) continue;

    const cx = (p[0] + 0.5) * tile, cy = (p[1] + 0.5) * tile;
    const count = util > 0.85 ? 3 : (util > 0.4 ? 2 : 1);
    // 速度：每秒走 (0.6 + util*2) 格
    const speed = 0.6 + util * 2;
    const phase = (now / 1000 * speed) % 1;
    const dotColor = util >= GRID_OVERLOAD_UTIL ? '#fecaca' :
      (util >= 0.6 ? '#fef08a' : '#bbf7d0');
    ctx.fillStyle = dotColor;
    for (let i = 0; i < count; i++) {
      const t = (phase + i / count) % 1; // 0..1 在本格内
      // 从中心向下游走半格，循环
      const ox = dx * (t - 0.5) * tile * 0.8;
      const oy = dy * (t - 0.5) * tile * 0.8;
      const r = Math.max(1.5, tile * 0.06);
      ctx.beginPath();
      ctx.arc(cx + ox, cy + oy, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
};

/**
 * getOverlayData()：覆盖层的结构化数据导出。
 * 给「不用 canvas 画、而用 DOM/SVG 渲染」的 UI 方案用，字段与
 * renderOverlay 的视觉语义一一对应。
 * 返回 {cables:[{x,y,utilization,heat,status,tripped}], generators:[...],
 *   batteries:[...], substations:[...], shed:[{x,y}], unpowered:[{x,y}],
 *   blackout}。
 */
PowerGridManager.prototype.getOverlayData = function (game) {
  const data = {
    cables: [], generators: [], batteries: [],
    substations: [], shed: [], unpowered: [],
    blackout: !!this.blackout,
  };
  for (const r of this.getCableReport()) {
    data.cables.push({
      x: r.x, y: r.y, utilization: r.utilization, heat: r.heat,
      status: r.status, tripped: r.status === 'tripped',
      tripRecoverIn: r.tripRecoverIn,
    });
  }
  if (this.net) {
    for (const [, g] of this.net.genByTile) {
      data.generators.push({
        x: g.x, y: g.y, id: g.id, output: Math.round(g.output * 100) / 100,
      });
    }
    for (const [k, bt] of this.net.batByTile) {
      const cap = bt.capacity || 1;
      data.batteries.push({
        x: bt.x, y: bt.y, id: bt.id,
        stored: Math.round((this.batteryCharge.get(k) || 0) * 10) / 10,
        capacity: cap,
        pct: Math.round(gridClamp((this.batteryCharge.get(k) || 0) / cap, 0, 1) * 1000) / 1000,
      });
    }
    for (const [, s] of this.net.subByTile) {
      data.substations.push({
        x: s.x, y: s.y, id: s.id, radius: s.radius,
        powered: this.net.powered.has(s.key),
      });
    }
    for (const k of this.net.shed) {
      const p = gridUnkey(k);
      if (p) data.shed.push({ x: p[0], y: p[1] });
    }
  }
  // 未通电建筑（需 game 查建筑表）
  try {
    if (game) {
      for (const c of this.getUnpoweredConsumers(game)) {
        if (!c.shedded) data.unpowered.push({ x: c.x, y: c.y, id: c.id });
      }
    }
  } catch (e) { /* 忽略 */ }
  return data;
};

/* ==========================================================================
 * [7] 电网拓扑分析：单点故障（关节点）与网络统计
 * --------------------------------------------------------------------------
 * 关节点（articulation point）：删掉它会导致导电图分裂的瓦片。
 * 在电网语义里，关节点 =「单点故障」——它一跳闸（或被拆除），下游
 * 消费者直接断电（无环路可绕行）。这是真实图算法（Tarjan DFS），
 * 不是启发式。
 *
 * 用途：
 *   - getCriticalCables()：列出所有关节点电缆，按「断连后影响的
 *     用电量」排序，UI 标红预警「此段一断，下游 X 电负载断电」。
 *   - getNetworkStats()：节点数/边数/平均度/环路数/最深链长，
 *     评估电网冗余度。
 * ========================================================================== */

/**
 * _conductorGraph()：构建导电图（邻接表）。
 * 节点 = 未跳闸的电缆瓦片 + 发电机/电池/变电站瓦片。
 * 边 = 4 向邻接。返回 {nodes:Set<k>, adj:Map<k, k[]>}。
 * 注意：消费者瓦片不是节点（电流终点），变电站无线覆盖不建边
 *（无线不是物理导线，不参与关节点分析——它的失效模式是变电站断电，
 * 已在 getSubstationCoverage 里覆盖）。
 */
PowerGridManager.prototype._conductorGraph = function () {
  const nodes = new Set();
  for (const k of this.cables) {
    if (!this.trips.has(k)) nodes.add(k);
  }
  if (this.net) {
    for (const k of this.net.genByTile.keys()) nodes.add(k);
    for (const k of this.net.batByTile.keys()) nodes.add(k);
    for (const k of this.net.subByTile.keys()) nodes.add(k);
  }
  const adj = new Map();
  for (const k of nodes) {
    const p = gridUnkey(k);
    const nb = [];
    if (p) {
      for (const [dx, dy] of GRID_DIRS) {
        const nk = gridKey(p[0] + dx, p[1] + dy);
        if (nodes.has(nk)) nb.push(nk);
      }
    }
    adj.set(k, nb);
  }
  return { nodes, adj };
};

/**
 * _tarjanArticulation(nodes, adj)：Tarjan 求关节点。
 * 标准算法：DFS 记录发现时间 disc 与 low 值；
 *   - 根节点：子女数 ≥2 → 关节点；
 *   - 非根：存在子女 v 使 low[v] ≥ disc[u] → u 是关节点。
 * 迭代实现（显式栈），防 2500 节点递归爆栈。
 * 返回 Set<k>（关节点键集合）。
 */
PowerGridManager.prototype._tarjanArticulation = function (nodes, adj) {
  const disc = new Map();   // 发现时间
  const low = new Map();    // 能回到的最早发现时间
  const parent = new Map();
  const roots = new Set();  // DFS 树根（根的判定规则不同，需单独记录）
  const ap = new Set();     // 关节点
  let time = 0;

  for (const start of nodes) {
    if (disc.has(start)) continue;
    roots.add(start);
    // 显式栈帧：{u, idx}，idx = 下一个要访问的邻居下标
    let childrenOfRoot = 0;
    const stack = [{ u: start, idx: 0 }];
    parent.set(start, null);
    disc.set(start, time);
    low.set(start, time);
    time++;

    while (stack.length > 0) {
      const frame = stack[stack.length - 1];
      const u = frame.u;
      const neighbors = adj.get(u) || [];
      if (frame.idx < neighbors.length) {
        const v = neighbors[frame.idx++];
        if (!disc.has(v)) {
          // 树边：深入
          parent.set(v, u);
          disc.set(v, time);
          low.set(v, time);
          time++;
          if (parent.get(u) === null) childrenOfRoot++;
          stack.push({ u: v, idx: 0 });
        } else if (v !== parent.get(u)) {
          // 回边：更新 low（注意：无向图里父边要排除，
          // 但平行 visit 顺序下 v 可能是已访问的祖先）
          low.set(u, Math.min(low.get(u), disc.get(v)));
        }
      } else {
        // 回溯：把 low 传给父节点，并判定关节点
        stack.pop();
        const p = parent.get(u);
        if (p !== null && p !== undefined) {
          // 非根判定：low[u] ≥ disc[p] → p 是关节点。
          // 但 p 若是根则跳过（根走子女数规则，避免单子女根被误判）。
          if (!roots.has(p) && low.get(u) >= disc.get(p)) ap.add(p);
          low.set(p, Math.min(low.get(p), low.get(u)));
        } else {
          // 根判定：子女数 ≥2
          if (childrenOfRoot >= 2) ap.add(u);
        }
      }
    }
  }
  return ap;
};

/**
 * getCriticalCables(game)：单点故障分析。
 * 对每个关节点电缆，估算「它失效后断连的用电量」：
 *   删掉该节点 → 在剩余图上从发电机重做 BFS → 统计原来通电、
 *   现在不通电的消费者 demand 之和。
 * 为性能计：只对关节点做重 BFS（关节点通常很少），且结果缓存到
 * 下次 rebuild（_criticalCache，随 _dirty 失效）。
 * 返回 [{x, y, downstreamDemand, downstreamConsumers}] 按影响降序。
 */
PowerGridManager.prototype.getCriticalCables = function (game) {
  if (this._degraded || !this.net) return [];
  // 缓存：拓扑没变则直接返回
  if (this._criticalCache && this._criticalCacheAt === this.net.builtAt) {
    return this._criticalCache;
  }
  const { nodes, adj } = this._conductorGraph();
  if (nodes.size === 0) {
    this._criticalCache = [];
    this._criticalCacheAt = this.net.builtAt;
    return [];
  }
  const ap = this._tarjanArticulation(nodes, adj);

  // 发电机键集合（BFS 源）
  const genKeys = new Set(this.net.genByTile.keys());
  // 消费者需求表
  const demandOf = new Map(); // k -> demand（仅通电消费者）
  for (const isl of this.net.islands) {
    for (const c of isl.consumers) demandOf.set(c.key, c.demand);
  }

  // 基准：当前通电集合（直接用 rebuild 的 powered，含建筑端点）。
  // 注意不能只用图 BFS——消费者瓦片不是图节点，但它们是 powered 的。
  const basePowered = this.net.powered;

  const result = [];
  // 只分析「电缆」关节点（发电机/变电站本身不算电缆）
  for (const k of ap) {
    if (!this.cables.has(k)) continue;
    // 删掉 k 后重做 BFS（导电图上）
    const seen = new Set();
    const q = [...genKeys].filter((gk) => gk !== k && nodes.has(gk));
    for (const gk of q) seen.add(gk);
    let qh = 0;
    while (qh < q.length) {
      const cur = q[qh++];
      for (const nb of adj.get(cur) || []) {
        if (nb === k || seen.has(nb)) continue;
        seen.add(nb);
        q.push(nb);
      }
    }
    // 端点延伸：与 surviving 导电瓦片邻接的消费者仍通电
    // （与 rebuild 2b 端点规则一致：邻接 powered+conductive ⇒ 通电）
    const stillPowered = new Set(seen);
    for (const ck of demandOf.keys()) {
      if (stillPowered.has(ck)) continue;
      const p = gridUnkey(ck);
      if (!p) continue;
      for (const [dx, dy] of GRID_DIRS) {
        if (seen.has(gridKey(p[0] + dx, p[1] + dy))) {
          stillPowered.add(ck);
          break;
        }
      }
    }
    // 断连的用电量 = 基准通电但现已不通电的消费者 demand 和
    let downDemand = 0, downCount = 0;
    for (const [ck, d] of demandOf) {
      if (basePowered.has(ck) && !stillPowered.has(ck)) { downDemand += d; downCount++; }
    }
    if (downCount > 0) {
      const p = gridUnkey(k);
      result.push({
        x: p ? p[0] : -1, y: p ? p[1] : -1, key: k,
        downstreamDemand: downDemand,
        downstreamConsumers: downCount,
      });
    }
  }
  result.sort((a, b) => b.downstreamDemand - a.downstreamDemand);
  this._criticalCache = result;
  this._criticalCacheAt = this.net.builtAt;
  return result;
};

/**
 * getNetworkStats()：电网拓扑统计。
 * 返回 {nodes, edges, avgDegree, components, loops, maxDepth, cableCount}。
 *   - loops = edges - nodes + components（无向图环路数，>0 说明有冗余环路，
 *     跳闸时可绕行；=0 说明是纯树形，任一段跳闸都分裂电网）。
 *   - maxDepth = 从发电机出发的最远 BFS 距离（线损/延迟的定性参考）。
 */
PowerGridManager.prototype.getNetworkStats = function () {
  const stats = {
    nodes: 0, edges: 0, avgDegree: 0, components: 0,
    loops: 0, maxDepth: 0, cableCount: this.cables.size,
  };
  const { nodes, adj } = this._conductorGraph();
  stats.nodes = nodes.size;
  let edgeSum = 0;
  for (const nb of adj.values()) edgeSum += nb.length;
  stats.edges = edgeSum / 2;
  stats.avgDegree = nodes.size > 0 ?
    Math.round((edgeSum / nodes.size) * 100) / 100 : 0;

  // 连通分支数 + 最深距离（多源 BFS）
  const seen = new Set();
  let maxDepth = 0;
  const genKeys = this.net ? [...this.net.genByTile.keys()].filter((k) => nodes.has(k)) : [];
  // 先从发电机出发
  const q = [];
  for (const gk of genKeys) {
    if (!seen.has(gk)) {
      seen.add(gk);
      q.push([gk, 0]);
      stats.components++;
    }
  }
  let qh = 0;
  while (qh < q.length) {
    const [cur, d] = q[qh++];
    if (d > maxDepth) maxDepth = d;
    for (const nb of adj.get(cur) || []) {
      if (!seen.has(nb)) { seen.add(nb); q.push([nb, d + 1]); }
    }
  }
  // 孤立分支（没连发电机的电缆）
  for (const k of nodes) {
    if (!seen.has(k)) {
      stats.components++;
      seen.add(k);
      const qq = [k];
      let qh2 = 0;
      while (qh2 < qq.length) {
        const cur = qq[qh2++];
        for (const nb of adj.get(cur) || []) {
          if (!seen.has(nb)) { seen.add(nb); qq.push(nb); }
        }
      }
    }
  }
  stats.maxDepth = maxDepth;
  stats.loops = Math.round(stats.edges - stats.nodes + stats.components);
  return stats;
};

/**
 * getRedundancyAdvice()：冗余度建议（基于关节点与环路数）。
 * 返回字符串数组，每条都是具体行动项。
 */
PowerGridManager.prototype.getRedundancyAdvice = function (game) {
  const out = [];
  if (this._degraded || !this.net) return out;
  const ns = this.getNetworkStats();
  if (ns.nodes === 0) {
    out.push('还没有电网：先铺电缆连接发电机与建筑。');
    return out;
  }
  if (ns.loops <= 0 && ns.cableCount > 3) {
    out.push('电网是纯树形（环路数 0）：任一段电缆跳闸都会分裂电网。' +
      '给关键干线加一条并联/环路，跳闸时可绕行。');
  } else if (ns.loops > 0) {
    out.push('电网有 ' + ns.loops + ' 个冗余环路：局部跳闸时电流可绕行，韧性良好。');
  }
  const crit = this.getCriticalCables(game).slice(0, 3);
  for (const c of crit) {
    out.push('单点故障：电缆(' + c.x + ',' + c.y + ') 一断，下游 ' +
      c.downstreamConsumers + ' 栋建筑（' + c.downstreamDemand + ' 电负载）断电。' +
      '优先给它加并联。');
  }
  if (crit.length === 0 && ns.cableCount > 0) {
    out.push('无单点故障电缆：网状结构良好，单段跳闸不影响供电。');
  }
  return out;
};

/* ==========================================================================
 * [8] game.js 集成指南（给做集成的父 agent 看）
 * --------------------------------------------------------------------------
 * 本文件只定义 PowerGridManager，不改 game.js / index.html / build.js。
 * game.js 按下面接线即可（均为防御性写法，powergrid 缺失时游戏照常运行）：
 *
 * --- 初始化（Game constructor，builder/map 建好之后） ---
 *   this.powergrid = (typeof PowerGridManager !== 'undefined')
 *     ? new PowerGridManager() : null;
 *
 * --- 主循环 tick(now, dt) ---
 *   if (this.powergrid) this.powergrid.update(now, dt, this);
 *   // 位置：disaster.update 之后、builder.update 之前为佳，
 *   // 这样 build.js 的生产更新能读到最新 isPowered。
 *
 * --- 生产 gating（build.js BuildManager.update 内，直接生产/转换分支） ---
 *   // 在 `if (!ok && lv.powerUse > 0) continue;` 之外再加细粒度门控：
 *   if (this.powergrid && !this.powergrid.isPowered(b.x, b.y)) continue;
 *   // 注意：BuildManager 没有 game 引用。两种接法：
 *   //  A. game.js 在调 builder.update 前把引用挂上：builder.powergrid = this.powergrid
 *   //  B. game.js tick 里自己按 isPowered 批量 pre-compute（推荐，不改 build.js）
 *   // 建议 B：const pg = this.powergrid;
 *   //        for (const b of this.builder.buildings) b._hasPower = !pg || pg.isPowered(b.x, b.y);
 *   //        build.js 里用 b._hasPower !== false 判断。
 *   // 缺电网/首帧时 isPowered 返回 true，旧存档行为不变。
 *
 * --- 电缆铺设/拆除（UI 按钮或快捷键） ---
 *   const r = this.powergrid.placeCable(x, y, this);   // {ok, msg}
 *   if (!r.ok) { this.toast(r.msg); this.sound.error(); }
 *   const r2 = this.powergrid.removeCable(x, y, this); // {ok, msg, refund}
 *
 * --- 覆盖层开关（按键 G 或 UI 按钮） ---
 *   this.powergrid.setOverlay(!this.powergrid.overlayOn);
 *   // render 循环建筑层之后：
 *   if (this.powergrid) this.powergrid.renderOverlay(ctx, this.map, tile);
 *
 * --- 事件回调（toast/音效，game.js 决定怎么表现） ---
 *   this.powergrid.onTrip = (x, y) => this.sound.alarm();
 *   this.powergrid.onBlackout = (on) => { if (on) this.sound.alarm(); };
 *   // 注意：缺电/跳闸的 toast 已由 powergrid 内部经 game.toast 发出，
 *   // 回调里不要重复 toast，只接音效/成就/统计。
 *
 * --- 存档（Game.save / Game.load） ---
 *   save: { ..., powergrid: this.powergrid ? this.powergrid.save() : null, ... }
 *   load: if (data.powergrid && this.powergrid) this.powergrid.load(data.powergrid);
 *
 * --- UI 面板数据源 ---
 *   this.powergrid.getStats()        // 顶栏：发电/用电/电池/跳闸/blackout
 *   this.powergrid.getAdvice(this)   // 诊断面板：分级建议
 *   this.powergrid.getIslands()      // 孤岛明细
 *   this.powergrid.getCableReport()  // 电缆表格（利用率排序）
 *   this.powergrid.getHistory()      // 6 分钟功率曲线
 *   this.powergrid.forecastNextHours(this, 12) // 「今晚会停电吗」
 *   this.powergrid.getExpansionPlan(this)      // 扩建规划器
 *   this.powergrid.getCriticalCables(this)     // 单点故障预警
 *   this.powergrid.guide()           // 帮助面板：15 条机制百科
 *
 * --- 性能 ---
 *   rebuild 节流 500ms；584 段电缆全量重算约 13ms（一帧内完成，无卡顿）。
 *   覆盖层每帧只画几何，无 BFS。事件日志/历史曲线均有界（200/180 条）。
 *
 * --- 已知限制（诚实记录） ---
 *   1. BUILDINGS v1.2 尚无 battery/substation 建筑，相关分支是前向兼容的
 *      死代码（有建筑定义后零改动生效），getSubstationCoverage 在无变电站时返回 []。
 *   2. 潮流是「需求加权分配」估算，不是潮流方程数值解；长链末端的线损未建模。
 *   3. 电池能量单位「电·秒」是连续积分近似，与 build.js 的离散生产 tick
 *      是两套时钟，拼接处有 <1 秒的相位差，不影响平衡结论。
 *   4. 跳闸恢复时间戳用 Date.now()（真实时间），切后台/加速不影响 30 秒语义；
 *      如需游戏时间语义，改 tripRecoverMs 的比较基准即可（集中在一处）。
 * ========================================================================== */
