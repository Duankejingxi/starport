/* 星港 — orbital.js：v1.4 轨道空间站（第二建造层 / 空间站模块）
 *
 * 第二建造层：地面（build.js）之上的轨道层。
 * - 解锁条件：地面拥有「太空港」(id==='spaceport') 后解锁轨道建造
 * - 轨道电梯 (id==='elevator')：轨道建造成本 -30%，太阳能→地面传输效率提升
 * - 空间站为 12 槽位环形结构（可扩建第二环 12 槽），每槽一种模块，共 10 种模块 × 3 级
 * - 纯原生 JS，零依赖；加载于 build.js 之后、game.js 之前
 * - 对 game 对象全部防御性使用（判存在再调用）
 */

'use strict';

// ================= v1.4 版本常量 =================
const ORBITAL_VERSION = '1.4.0';
const ORBITAL_CODENAME = '星港轨道';
const ORBITAL_SAVE_KEY = 'starport-save-v1';  // 与 game.js SAVE_KEY 保持一致

// ================= 轨道层全局调参 =================
const ORBITAL_TUNING = {
  ringSlots: 12,            // 每环槽位数
  tickMs: 10000,            // 生产 tick 间隔（毫秒，游戏内 10 秒一轮）
  prodCycleSec: 60,         // 资源产出按「每 60 秒」标定
  maxLevel: 3,              // 模块最高等级
  baseHpPerLevel: 100,      // 每级模块血量
  hpRegenPerTick: 2,        // 每 tick 自动回血（船坞加成另算）
  elevatorDiscount: 0.7,    // 轨道电梯：建造成本 ×0.7（即 -30%）
  techCostDiscount: 0.85,   // 科技 t-orb-5「轨道船坞」：太空建筑成本 -15%
  transmitBase: 0.55,       // 太阳能→地面传输效率（无电梯）
  transmitElevator: 0.9,    // 太阳能→地面传输效率（有电梯）
  crewPerPop: 15,           // 每 15 地面人口可派遣 1 名轨道船员（10 人起步后）
  crewBasePop: 10,          // 派遣船员需要的人口门槛
  happinessCap: 0.5,        // 生态穹顶生产加成上限 +50%
  happinessPerDomeLevel: 0.06, // 每级生态穹顶 +6% 全站生产
  bridgeCmdPerLevel: 0.10,  // 每级指挥舰桥 +10% 全站生产（指挥效率）
  labShipBonusPerLevel: 0.15,  // 船坞+科研舱联动：每级科研 +15% 造船/维修速度
  supplyIntervalMs: 5 * 60 * 1000,   // 补给船间隔 5 分钟（需贸易港）
  meteorMinMs: 90 * 1000,   // 微陨石事件最小间隔
  meteorMaxMs: 180 * 1000,  // 微陨石事件最大间隔
  solarWindMinMs: 4 * 60 * 1000,  // 太阳风最小间隔
  solarWindMaxMs: 8 * 60 * 1000,  // 太阳风最大间隔
  solarWindDownMs: 60 * 1000,     // 太阳风：帆板过载停机 60 秒
  asteroidMinMs: 3 * 60 * 1000,   // 小行星过境最小间隔
  asteroidMaxMs: 6 * 60 * 1000,   // 小行星过境最大间隔
  asteroidBoostMs: 60 * 1000,     // 过境加成持续 60 秒
  asteroidBoostMul: 3,      // 过境期间采矿激光产量 ×3
  ringBCost: { steel: 2500, rare: 800, tech: 200 },  // 第二环扩建成本
  ringBNeedFilled: 8,       // 扩建第二环需要第一环已建 ≥8 个模块
};

/* ============ 数值平衡总览（v1.4 设计笔记） ============
 *
 * 定位：轨道层是「后期加速器」，不是前期替代。
 * - 解锁门槛：太空港本身需要科技 t-orb-1「轨道力学」（30 科技点），
 *   太空港建造成本预计为重型建筑量级 → 轨道层自然落在游戏中期之后。
 * - 成本曲线：L1 ≈ 地面高级建筑 ×3，L2 ≈ ×2.2，L3 ≈ ×2.0（相对上一级），
 *   迫使玩家先铺 L1 覆盖功能，再集中升级核心模块。
 * - 电力是硬约束：全站净电力 <0 时全模块按比例降效，
 *   太阳能帆是必建项；第二环 12 槽的电力缺口需要 2~3 座 L2 太阳能帆。
 * - 船员是软约束：每级模块需 1 船员满效运转，船员来自地面人口 /15，
 *   1000 人口 ≈ 66 船员 ≈ 支撑 22 个满级模块（两环共 24 槽，刚好卡紧）。
 * - 产出标定：L3 单模块 ≈ 地面同类顶级建筑的 60~80%，
 *   但轨道模块不占地面格子、不怕沙尘暴——优势是「空间换稳定」。
 * - 事件是税：微陨石期望每 2 分钟打掉一个模块 10~30 血（约 0.5 个维修周期），
 *   防御平台 L2 可将期望伤害压到 1/3 以下——防御不是摆设。
 * - 星门坞是终局前置：he3 产出极慢（L3 每 5 分钟 7 个），
 *   攒够星门（wonders）所需 he3 需要数小时挂机 + 贸易补给，属于长线目标。
 * ============================================================
 */

// ================= 防御性小工具 =================

/** 安全 toast：game.toast 可能不存在时静默 */
function orbitalToast(game, msg) {
  try {
    if (game && typeof game.toast === 'function') game.toast(msg);
  } catch (e) { /* 忽略 */ }
}

/** 安全音效：优先 game.sound.play(name)，判存在；否则映射到已知方法 */
function orbitalSound(game, name) {
  try {
    const s = game && game.sound;
    if (!s) return;
    // 1) 官方接口：play(name)
    if (typeof s.play === 'function') { s.play(name); return; }
    // 2) 回退映射到 SoundManager 已有方法
    const fallback = {
      build: 'build', upgrade: 'upgrade', repair: 'repair', error: 'error',
      warning: 'warning', trade: 'trade', tech: 'tech', unlock: 'unlock',
      achieve: 'achieve', launch: 'victory', alarm: 'meteorWarn', click: 'click',
    };
    const m = fallback[name];
    if (m && typeof s[m] === 'function') s[m]();
  } catch (e) { /* 忽略 */ }
}

/** 安全科技检查：game.tech.has 存在才查，否则视为未解锁（保守） */
function orbitalHasTech(game, techId) {
  try {
    if (game && game.tech && typeof game.tech.has === 'function') {
      return !!game.tech.has(techId);
    }
  } catch (e) { /* 忽略 */ }
  return false;
}

/** 地面建筑列表（防御性） */
function orbitalBuildings(game) {
  try {
    const b = game && game.builder && game.builder.buildings;
    return Array.isArray(b) ? b : [];
  } catch (e) { return []; }
}

/** 是否拥有某 id 的地面建筑 */
function orbitalHasBuilding(game, bid) {
  return orbitalBuildings(game).some(b => b && b.id === bid);
}

/** 玩家背包（防御性） */
function orbitalInv(game) {
  try {
    if (game && game.player && game.player.inv) return game.player.inv;
  } catch (e) { /* 忽略 */ }
  return null;
}

/** 资源是否足够（优先用 resources.js 的 canAfford，回退自实现） */
function orbitalCanAfford(inv, cost) {
  if (!inv || !cost) return false;
  try {
    if (typeof canAfford === 'function') return canAfford(inv, cost);
  } catch (e) { /* 回退 */ }
  for (const k in cost) if ((inv[k] || 0) < cost[k]) return false;
  return true;
}

/** 扣除资源（优先用 resources.js 的 spendRes） */
function orbitalSpend(inv, cost) {
  if (!inv || !cost) return false;
  try {
    if (typeof spendRes === 'function') return spendRes(inv, cost);
  } catch (e) { /* 回退 */ }
  if (!orbitalCanAfford(inv, cost)) return false;
  for (const k in cost) inv[k] -= cost[k];
  return true;
}

/** 缺口描述（优先用 resources.js 的 missingRes） */
function orbitalMissing(inv, cost) {
  try {
    if (typeof missingRes === 'function') return missingRes(inv, cost);
  } catch (e) { /* 回退 */ }
  const miss = [];
  const names = orbitalResName;
  for (const k in cost) {
    const need = cost[k] - (inv[k] || 0);
    if (need > 0) miss.push(`${(names[k] || k)}×${need}`);
  }
  return miss.join('、');
}

// 资源中文名（RES_DEFS 不可用时的回退）
const orbitalResName = {
  iron: '铁矿', ice: '冰水', rare: '稀土', water: '水', food: '食物',
  steel: '钢材', tech: '科技点', uranium: '铀矿', he3: '氦3',
};

/** 资源图标（RES_DEFS 不可用时的回退） */
function orbitalResIcon(k) {
  try {
    if (typeof RES_DEFS !== 'undefined' && RES_DEFS[k]) return RES_DEFS[k].icon;
  } catch (e) { /* 回退 */ }
  const icons = { iron: '🟤', ice: '🧊', rare: '🟣', water: '💧', food: '🌾', steel: '🔩', tech: '🔬', uranium: '☢️', he3: '🌌' };
  return icons[k] || '❔';
}

/** 成本对象 → 可读字符串，如「钢材×300 稀土×120」 */
function orbitalCostText(cost) {
  if (!cost) return '免费';
  const parts = [];
  for (const k in cost) parts.push(`${orbitalResIcon(k)}${orbitalResName[k] || k}×${cost[k]}`);
  return parts.join(' ') || '免费';
}

/** 随机整数 [min, max] */
function orbitalRand(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

/** 随机区间毫秒 */
function orbitalRandMs(minMs, maxMs) {
  return minMs + Math.random() * (maxMs - minMs);
}

/** clamp */
function orbitalClamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

/** 安全读 game.pop.count */
function orbitalPopCount(game) {
  try {
    const c = game && game.pop && game.pop.count;
    return typeof c === 'number' ? c : 0;
  } catch (e) { return 0; }
}

// ================= 10 种空间站模块定义 =================
// 每种模块：3 级成本 / 效果 / 描述 / flavor
// requires: { tech } 科技前置（game.tech.has 判存在）；{ module } 模块前置
// powerUse: 每级耗电；powerGen: 仅太阳能帆产电
// crewNeedPerLevel: 每级需要 1 船员满效运转
// uniqueHint: 是否建议只建一个（非强制）

/* ---- 模块 1/10：🛏️ 居住环 ----
 * 功能：提升轨道船员上限。船员是轨道生产的「人力乘数」：
 * 每级模块需要 1 名船员才能满效运转，缺员则按比例降效。
 * 联动：🌿 生态穹顶 → 船员幸福 → 全站生产加成。
 * 平衡：L1 便宜量小（过渡），L3 单槽 26 人，两环拉满约 60~70 船员，
 * 刚好对应 1000 人口可派遣上限（1000-10)/15 ≈ 66），卡紧不溢出。
 */
const MOD_HABITAT = {
  id: 'habitat', name: '居住环', icon: '🛏️',
  desc: '旋转重力居住舱，为轨道船员提供长期驻留空间。每级 +船员上限，是全站人力的地基。',
  flavor: '「在这里，"上"只是一个建议。」—— 首批驻站船员涂鸦',
  requires: { tech: 't-orb-10' },   // 重力模拟
  requiresText: '科技「重力模拟」',
  uniqueHint: false,
  levels: [
    {
      cost: { iron: 300, steel: 150 },
      powerUse: 1, crewCap: 6,
      effect: '船员上限 +6',
      note: '过渡舱段：便宜，适合开荒期先把船员池撑起来。',
    },
    {
      cost: { steel: 400, rare: 100 },
      powerUse: 2, crewCap: 14,
      effect: '船员上限 +14',
      note: '标准环：性价比之王，多数空间站的中坚。',
    },
    {
      cost: { steel: 800, rare: 250, tech: 40 },
      powerUse: 3, crewCap: 26,
      effect: '船员上限 +26',
      note: '全重力社区：带离心健身房与水培走廊，船员轮换周期翻倍。',
    },
  ],
};

/* ---- 模块 2/10：🔆 太阳能帆 ----
 * 功能：全站唯一电力来源。产电 → 供模块消耗 → 余电按效率输往地面。
 * 传输效率：无电梯 55%，有轨道电梯 90%（电梯缆绳兼做输电通道）。
 * 事件：☀️ 太阳风会导致帆板过载停机 60 秒并掉血，建 2 组互为备份是正解。
 * 平衡：L3 单帆 45 电 ≈ 支撑 5~6 个高耗电模块；第二环满配需 3 座 L2。
 */
const MOD_SOLAR = {
  id: 'solar', name: '太阳能帆', icon: '🔆',
  desc: '巨型光伏帆板阵列，空间站的电力心脏。余电通过微波/缆绳输往地面，并入城市电网。',
  flavor: '「把阳光装进口袋，再快递回火星。」—— 能源组标语',
  requires: { tech: 't-orb-8' },   // 轨道太阳能
  requiresText: '科技「轨道太阳能」',
  uniqueHint: false,
  levels: [
    {
      cost: { iron: 250, rare: 80 },
      powerUse: 0, powerGen: 8,
      effect: '产电 +8/轮，余电输往地面（效率 55%，有电梯 90%）',
      note: '试验帆：先解决"有没有电"，再谈"够不够电"。',
    },
    {
      cost: { steel: 300, rare: 150 },
      powerUse: 0, powerGen: 20,
      effect: '产电 +20/轮，余电输往地面（效率 55%，有电梯 90%）',
      note: '主力帆：单帆可带 2~3 个科研舱，是第一环的标配。',
    },
    {
      cost: { steel: 600, rare: 300, tech: 30 },
      powerUse: 0, powerGen: 45,
      effect: '产电 +45/轮，余电输往地面（效率 55%，有电梯 90%）',
      note: '聚光阵列：配定日镜二次聚光，发电量翻倍还多。注意太阳风过载风险。',
    },
  ],
};

/* ---- 模块 3/10：🛠️ 船坞 ----
 * 功能：维修 / 建造深空船。deep_space.js 通过 orbital.drydockLevel 读取船坞总等级。
 * 联动：🔬 科研舱 → 每级科研舱 +15% 造船/维修速度（技术反哺工程）。
 * 事件：船坞每 tick 为受损最重的模块回血（干船坞兼修空间站自身）。
 * 平衡：L1 只能修小船；L3 才能支撑星门级构件。修船不收资源，收的是时间。
 */
const MOD_DRYDOCK = {
  id: 'drydock', name: '船坞', icon: '🛠️',
  desc: '轨道干船坞：维修与建造深空船只。等级越高，可维护的船型越大、速度越快。',
  flavor: '「深空船的 4S 店，只是没有销售忽悠。」—— 舰长们',
  requires: { tech: 't-orb-5' },   // 轨道船坞
  requiresText: '科技「轨道船坞」',
  uniqueHint: true,   // 建议只建一个，堆等级比铺数量划算
  levels: [
    {
      cost: { iron: 400, steel: 500 },
      powerUse: 3,
      effect: '船坞等级 +1；维修速度 1.0×；每轮为受损模块回血 +4',
      note: '近地维修站：能修穿梭机和货船，顺手给空间站自己补补漆。',
    },
    {
      cost: { steel: 900, rare: 200 },
      powerUse: 5,
      effect: '船坞等级 +2；维修速度 1.5×；每轮为受损模块回血 +8',
      note: '深空船台：龙门吊一次能吊起整艘科考船。科研舱联动开始发力。',
    },
    {
      cost: { steel: 1500, rare: 450, tech: 60 },
      powerUse: 8,
      effect: '船坞等级 +3；维修速度 2.2×；每轮为受损模块回血 +14',
      note: '星舰船坞：星门级构件的总装地。没有它，星门只是图纸。',
    },
  ],
};

/* ---- 模块 4/10：🔬 科研舱 ----
 * 功能：稳定产出科技点（不受地面沙尘暴/太阳风暴停工影响——轨道的优势）。
 * 联动：🛠️ 船坞 → 每级 +15% 造船/维修速度；📡 指挥舰桥 → 科研效率再 +10%/级。
 * 平衡：L3 每 90 秒 7 点 ≈ 地面顶级实验室 2 座的产量，但 0 占地、0 停工。
 */
const MOD_LAB = {
  id: 'lab', name: '科研舱', icon: '🔬',
  desc: '零重力实验室：材料科学、生物实验 24 小时不停机，稳定产出科技点。',
  flavor: '「地面停电？那是地面的事。」—— 轨道科学院院训',
  requires: { tech: 't-orb-4' },   // 深空网络（数据回传需要）
  requiresText: '科技「深空网络」',
  uniqueHint: false,
  levels: [
    {
      cost: { steel: 300, rare: 120 },
      powerUse: 2, techPerCycle: 1, cycleSec: 90,
      effect: '每 90 秒 +1 科技点',
      note: '基础实验舱：先把"科技点不断流"这件事办了。',
    },
    {
      cost: { steel: 600, rare: 250 },
      powerUse: 4, techPerCycle: 3, cycleSec: 90,
      effect: '每 90 秒 +3 科技点',
      note: '综合实验平台：离心机 + 真空暴露平台，反哺船坞 +15% 建造速度。',
    },
    {
      cost: { steel: 1000, rare: 450, tech: 50 },
      powerUse: 6, techPerCycle: 7, cycleSec: 90,
      effect: '每 90 秒 +7 科技点',
      note: '轨道科学院：出过三篇《自然·火星》的那个实验室，字面意义上的"高"水平。',
    },
  ],
};

/* ---- 模块 5/10：🏪 贸易港 ----
 * 功能：轨道贸易——价格比地面贸易站更好（卖价加成）。
 * 机制：取全站最高等级贸易港的加成（不叠加，避免无脑铺）。
 * 事件：🛸 补给船每 5 分钟到访一次（需至少 1 座贸易港），送来铁/钢/食物/水。
 * 平衡：L3 卖价 +35%，配合地面贸易科技可突破 +50%，是后期经济引擎。
 */
const MOD_TRADE = {
  id: 'trade', name: '贸易港', icon: '🏪',
  desc: '轨道转运贸易港：地月航线、地球货船在此中转，贸易价格优于地面。解锁定期补给船。',
  flavor: '「关税？那是大气层以内的概念。」—— 港务长',
  requires: { tech: 't-orb-9' },   // 星际通讯
  requiresText: '科技「星际通讯」',
  uniqueHint: true,   // 加成取最高，多建不叠加
  levels: [
    {
      cost: { steel: 400, rare: 150 },
      powerUse: 2, tradeMult: 1.10,
      effect: '轨道贸易卖价 +10%；解锁补给船（每 5 分钟送资源）',
      note: '中转码头：补给船开始定期到访，挂机也有收入。',
    },
    {
      cost: { steel: 700, rare: 300 },
      powerUse: 3, tradeMult: 1.22,
      effect: '轨道贸易卖价 +22%；补给船载货 +50%',
      note: '自由贸易港：保税仓库一开，地球商船排队进港。',
    },
    {
      cost: { steel: 1200, rare: 500, tech: 60 },
      powerUse: 4, tradeMult: 1.35,
      effect: '轨道贸易卖价 +35%；补给船载货 +120%，偶带稀土/铀',
      note: '星际交易所：价格发现中心，连小行星矿主都来挂牌。',
    },
  ],
};

/* ---- 模块 6/10：🛡️ 防御平台 ----
 * 功能：空间站防御——拦截微陨石（减伤/减命中）；高等级可协防地面陨石。
 * 机制：拦截率 = 1 - Π(1 - 各平台拦截率)，多平台叠加收益递减。
 * 联动：📡 指挥舰桥 → 每级 +5% 拦截率（火控升级）。
 * 平衡：L2 双平台 ≈ 70% 拦截，微陨石从"税"变成"偶发事件"。
 */
const MOD_DEFENSE = {
  id: 'defense', name: '防御平台', icon: '🛡️',
  desc: '动能拦截器与点防御激光阵列，守护空间站免受微陨石袭击，高等级可协防地面。',
  flavor: '「最好的维修就是不用维修。」—— 防御组格言',
  requires: { tech: 't-orb-11' },  // 轨道防御
  requiresText: '科技「轨道防御」',
  uniqueHint: false,
  levels: [
    {
      cost: { steel: 500, rare: 200 },
      powerUse: 3, intercept: 0.25,
      effect: '微陨石拦截率 25%，命中伤害 -20%',
      note: '哨兵炮：先保住自己的模块，地面以后再说。',
    },
    {
      cost: { steel: 900, rare: 400 },
      powerUse: 5, intercept: 0.45,
      effect: '微陨石拦截率 45%，命中伤害 -35%，小概率协防地面陨石',
      note: '宙斯盾：开始有余力抬头看看地面，顺手拦一拦。',
    },
    {
      cost: { steel: 1500, rare: 700, uranium: 100 },
      powerUse: 8, intercept: 0.65,
      effect: '微陨石拦截率 65%，命中伤害 -50%，稳定协防地面陨石',
      note: '天穹：铀电容供能的烧穿式激光，连地面指挥中心都想要一套。',
    },
  ],
};

/* ---- 模块 7/10：⛏️ 采矿激光 ----
 * 功能：自动采集过境小行星，产铁/稀土（后期补稀土的重要来源）。
 * 事件：☄️ 小行星过境（每 3~6 分钟，持续 60 秒）期间产量 ×3。
 * 联动：🔆 太阳能帆 → 高耗电，缺电时第一个降效（激光器是电老虎）。
 * 平衡：L3 常态 ≈ 每分钟 26 铁 6 稀土，过境期翻 3 倍，是稀土自由的关键。
 */
const MOD_MINING = {
  id: 'mining', name: '采矿激光', icon: '⛏️',
  desc: '大功率采矿激光阵列，自动锁定并切割过境小行星，回收铁矿与稀土。',
  flavor: '「看，那颗小行星正在变成我们的仓库。」—— 采矿组',
  requires: { tech: 't-orb-7' },   // 小行星采矿
  requiresText: '科技「小行星采矿」',
  uniqueHint: false,
  levels: [
    {
      cost: { steel: 450, rare: 180 },
      powerUse: 4, ironPerMin: 6, rarePerMin: 0,
      effect: '每分钟 +6 铁矿（小行星过境时 ×3）',
      note: '切割实验机：先拿铁矿练手，稀土？那是下一级的故事。',
    },
    {
      cost: { steel: 800, rare: 350 },
      powerUse: 6, ironPerMin: 14, rarePerMin: 2,
      effect: '每分钟 +14 铁矿 +2 稀土（过境时 ×3）',
      note: '量产型：稀土开始细水长流，地面矿机可以歇口气了。',
    },
    {
      cost: { steel: 1300, rare: 600, tech: 50 },
      powerUse: 9, ironPerMin: 26, rarePerMin: 6,
      effect: '每分钟 +26 铁矿 +6 稀土（过境时 ×3）',
      note: '行星碎裂者（误）：其实只是切得快了一点，真的只有一点。',
    },
  ],
};

/* ---- 模块 8/10：🌿 生态穹顶 ----
 * 功能：船员幸福 → 全站生产加成。每级 +6%，全站合计上限 +50%。
 * 联动：🛏️ 居住环 → 船员越多，穹顶的"人均幸福产出"越高（乘区）。
 * 机制：加成作用于所有产出类模块（科研/采矿/贸易补给/星门充能）。
 * 平衡：便宜但占槽，2~3 级是性价比甜点，堆满 8 级吃满上限是土豪玩法。
 */
const MOD_DOME = {
  id: 'dome', name: '生态穹顶', icon: '🌿',
  desc: '水培农场与生态穹顶：新鲜番茄、青草香和 1G 重力走廊，船员幸福度拉满，干活都带劲。',
  flavor: '「第 47 天，番茄熟了。全站放假半天。」—— 航行日志',
  requires: { tech: 't-orb-10' },  // 重力模拟
  requiresText: '科技「重力模拟」',
  uniqueHint: false,
  levels: [
    {
      cost: { iron: 400, water: 200, steel: 200 },
      powerUse: 2, happyPerLevel: 0.06,
      effect: '全站生产 +6%（生态穹顶合计上限 +50%）',
      note: '社区菜园：番茄自由是幸福自由的第一步。',
    },
    {
      cost: { steel: 500, water: 400, rare: 100 },
      powerUse: 3, happyPerLevel: 0.12,
      effect: '全站生产 +12%（合计上限 +50%）',
      note: '穹顶农场：有了小麦香，船员开始给空间站起外号（亲切的那种）。',
    },
    {
      cost: { steel: 900, water: 800, rare: 250 },
      powerUse: 4, happyPerLevel: 0.18,
      effect: '全站生产 +18%（合计上限 +50%）',
      note: '伊甸园：瀑布、草坪和 24 小时鸟鸣（录音）。离职率？那是什么。',
    },
  ],
};

/* ---- 模块 9/10：📡 指挥舰桥 ----
 * 功能：高级模块前置 + 全站指挥效率（每级 +10% 生产）。
 * 解锁：🌀 星门坞要求至少 1 座指挥舰桥；第二环扩建要求舰桥已建。
 * 联动：🛡️ 防御平台 → 每级 +5% 拦截率；🏪 贸易港 → 每级 +2% 卖价（议价）。
 * 平衡：贵，但它是"钥匙"模块——不建它，后期内容锁死。
 */
const MOD_BRIDGE = {
  id: 'bridge', name: '指挥舰桥', icon: '📡',
  desc: '空间站指挥中枢：调度、火控、通讯一体化。解锁星门坞与第二环扩建，全站效率提升。',
  flavor: '「舰桥呼叫各舱：今天也要好好活着。」—— 每日广播开场白',
  requires: { tech: 't-orb-9' },   // 星际通讯
  requiresText: '科技「星际通讯」',
  uniqueHint: true,   // 指挥效率取总级数，多建也行但占槽
  levels: [
    {
      cost: { steel: 600, rare: 300, tech: 40 },
      powerUse: 3, cmdPerLevel: 0.10,
      effect: '全站生产 +10%；解锁星门坞建造；防御拦截 +5%',
      note: '值班舰桥：先把"能指挥"这件事办了，星门图纸才敢往下画。',
    },
    {
      cost: { steel: 1000, rare: 550, tech: 80 },
      powerUse: 5, cmdPerLevel: 0.20,
      effect: '全站生产 +20%；贸易卖价 +4%；防御拦截 +10%',
      note: '旗舰舰桥：AI 副官上线，调度效率翻倍，还能帮贸易港砍价。',
    },
    {
      cost: { steel: 1600, rare: 900, tech: 150 },
      powerUse: 7, cmdPerLevel: 0.35,
      effect: '全站生产 +35%；贸易卖价 +6%；防御拦截 +15%',
      note: '星港总控：全息星图铺满整面墙，坐在这里，感觉自己能指挥银河。',
    },
  ],
};

/* ---- 模块 10/10：🌀 星门坞 ----
 * 功能：星门建造前置（wonders 用）+ 缓慢产出氦3（星门充能）。
 * 前置：科技 t-orb-13「星门理论」+ 至少 1 座📡指挥舰桥。
 * 机制：orbital.stargateReady() 为 true 时，wonders/奇观系统可解锁星门建造。
 * 平衡：全游戏最贵模块之一；he3 产出是"添头"，核心价值是"门票"。
 */
const MOD_STARGATE = {
  id: 'stargate', name: '星门坞', icon: '🌀',
  desc: '星门装配坞：虫洞稳定器的总装与充能设施。建成即获得星门建造资格，并缓慢产出氦3。',
  flavor: '「门后是星辰大海，门票有点贵。」—— 工程部',
  requires: { tech: 't-orb-13', module: 'bridge' },  // 星门理论 + 指挥舰桥
  requiresText: '科技「星门理论」+ 已建指挥舰桥',
  uniqueHint: true,   // 星门坞建一个就够
  levels: [
    {
      cost: { steel: 2000, rare: 800, tech: 150, he3: 50 },
      powerUse: 10, he3PerMin: 0.2,
      effect: '获得星门建造资格；每 5 分钟 +1 氦3',
      note: '奠基坞：资格到手，星门不再是传说。he3 充能慢得像在攒梦想。',
    },
    {
      cost: { steel: 3500, rare: 1400, tech: 250, he3: 120 },
      powerUse: 16, he3PerMin: 0.6,
      effect: '星门建造速度 +30%；每 5 分钟 +3 氦3',
      note: '总装坞：环形加速器开始嗡鸣，夜班工程师说听到了"未来的声音"。',
    },
    {
      cost: { steel: 6000, rare: 2400, tech: 400, he3: 250, uranium: 200 },
      powerUse: 24, he3PerMin: 1.4,
      effect: '星门建造速度 +80%；每 5 分钟 +7 氦3',
      note: '星门奇点：虫洞在坞内第一次稳定闪烁了 0.3 秒。全站停电 3 秒，但值了。',
    },
  ],
};

// 模块定义总表（UI 建造菜单按此顺序展示）
const MODULE_DEFS = {
  habitat: MOD_HABITAT,
  solar: MOD_SOLAR,
  drydock: MOD_DRYDOCK,
  lab: MOD_LAB,
  trade: MOD_TRADE,
  defense: MOD_DEFENSE,
  mining: MOD_MINING,
  dome: MOD_DOME,
  bridge: MOD_BRIDGE,
  stargate: MOD_STARGATE,
};
const MODULE_ORDER = ['habitat', 'solar', 'drydock', 'lab', 'trade', 'defense', 'mining', 'dome', 'bridge', 'stargate'];

/* ---- 模块间联动加成总表（写在明处，方便调数值） ----
 * 1) 船坞 × 科研舱：造船/维修速度 ×(1 + 0.15 × 科研舱总级数) —— 技术反哺工程
 * 2) 太阳能帆 × 轨道电梯：余电→地面传输效率 55% → 90% —— 缆绳兼输电
 * 3) 生态穹顶 × 居住环：穹顶加成作用于全站，船员越多"人均幸福"折算越高（体现在 crewEff 乘区）
 * 4) 指挥舰桥 × 防御平台：拦截率 +5%/舰桥级 —— 火控升级
 * 5) 指挥舰桥 × 贸易港：卖价 +2%/舰桥级 —— 议价能力
 * 6) 指挥舰桥 × 全站：生产 +10%/舰桥级 —— 指挥效率
 * 7) 生态穹顶 × 全站：生产 +6%/穹顶级（上限+50%）—— 幸福生产力
 * 8) 防御平台 × 微陨石事件：拦截骰 + 命中减伤 —— 免税通道
 * 9) 贸易港 × 补给船：载货 +50%/+120% —— 物流升级
 * 10) 船坞 × 受损模块：每轮自动回血 —— 干船坞兼修空间站
 */
const SYNERGY_DEFS = [
  { a: 'drydock', b: 'lab', name: '技术反哺', desc: '每级科研舱 +15% 造船/维修速度' },
  { a: 'solar', b: 'elevator', name: '缆绳输电', desc: '有轨道电梯时余电传输效率 55%→90%' },
  { a: 'dome', b: 'habitat', name: '幸福人居', desc: '穹顶加成 × 船员满编，双乘区叠加' },
  { a: 'bridge', b: 'defense', name: '火控升级', desc: '每级舰桥 +5% 陨石拦截率' },
  { a: 'bridge', b: 'trade', name: '议价能力', desc: '每级舰桥 +2% 贸易卖价' },
  { a: 'bridge', b: 'all', name: '指挥效率', desc: '每级舰桥 +10% 全站生产' },
  { a: 'dome', b: 'all', name: '幸福生产力', desc: '每级穹顶 +6% 全站生产（上限+50%)' },
  { a: 'defense', b: 'event', name: '免税通道', desc: '拦截微陨石，命中减伤 20%/35%/50%' },
  { a: 'trade', b: 'event', name: '物流升级', desc: '补给船载货随贸易港等级提升' },
  { a: 'drydock', b: 'station', name: '自修能力', desc: '船坞每轮为受损最重模块回血' },
];

// ================= 轨道事件参数表 =================
// 纯机制事件：无剧情分支，只影响数值与提示
const ORBITAL_EVENTS = {
  // ☄️ 微陨石：随机模块掉血
  micrometeorite: {
    icon: '☄️', name: '微陨石',
    desc: '一颗微陨石击中空间站！防御平台可拦截，未拦截则随机模块掉血。',
    dmgMin: 10, dmgMax: 30,
  },
  // ☀️ 太阳风：帆板过载
  solarWind: {
    icon: '☀️', name: '太阳风',
    desc: '太阳风暴！太阳能帆过载停机 60 秒并受损，余电传输中断。',
    dmgMin: 8, dmgMax: 20,
  },
  // 🛸 补给船：定期送资源（需贸易港）
  supplyShip: {
    icon: '🛸', name: '补给船',
    desc: '地球补给船到港，卸下物资。贸易港等级越高，载货越丰厚。',
  },
  // 🪨 小行星过境：采矿加成窗口
  asteroidTransit: {
    icon: '🪨', name: '小行星过境',
    desc: '一颗富矿小行星正从空间站附近过境！采矿激光产量 ×3，持续 60 秒。',
  },
};

// ================= OrbitalManager =================

class OrbitalManager {
  constructor() {
    this.version = ORBITAL_VERSION;
    // 空间站本体：12 槽位环形结构（第一环），每槽 null 或模块实例
    this.station = {
      modules: [],   // 兼容字段：扁平模块列表（派生自 slots，仅存档/统计用）
      power: 0,      // 本轮净电力（产 - 耗）
      crew: 0,       // 当前轨道船员数
    };
    this.ringA = new Array(ORBITAL_TUNING.ringSlots).fill(null);  // 第一环 12 槽
    this.ringB = new Array(ORBITAL_TUNING.ringSlots).fill(null);  // 第二环 12 槽（扩建后）
    this.ringBOpen = false;    // 第二环是否已扩建
    this.crewCap = 0;          // 船员上限（居住环提供）
    this.groundBonus = 0;      // 本轮输往地面的电力加成（供 builder.totalPower 包装读取）
    this.lastTick = 0;         // 上次生产 tick 时间戳
    this.solarDownUntil = 0;   // 太阳风过载：帆板停机至此时间戳
    this.asteroidBoostUntil = 0; // 小行星过境加成至此时间戳
    // 事件计时器（时间戳）
    this.nextMeteor = 0;
    this.nextSolarWind = 0;
    this.nextSupply = 0;
    this.nextAsteroid = 0;
    // 统计
    this.stats = {
      built: 0, upgraded: 0, repaired: 0,
      techGained: 0, ironGained: 0, rareGained: 0, he3Gained: 0,
      meteorsHit: 0, meteorsBlocked: 0, supplyShips: 0,
      powerTransmitted: 0,
    };
    this._ui = null;  // UI 引用（bindUI 后）
    this._announced = false;  // 是否已播报解锁
  }

  // ---------- 解锁与加成判定 ----------

  /** 是否拥有太空港（轨道层解锁条件） */
  isUnlocked(game) {
    return orbitalHasBuilding(game, 'spaceport');
  }

  /** 是否拥有轨道电梯（建造成本 -30%，传输效率提升） */
  hasElevator(game) {
    return orbitalHasBuilding(game, 'elevator');
  }

  /** 轨道建造成本乘数：电梯 0.7 × 科技 t-orb-5 0.85（可叠加） */
  costMultiplier(game) {
    let m = 1;
    if (this.hasElevator(game)) m *= ORBITAL_TUNING.elevatorDiscount;
    if (orbitalHasTech(game, 't-orb-5')) m *= ORBITAL_TUNING.techCostDiscount;
    return m;
  }

  /** 余电→地面传输效率 */
  transmitEfficiency(game) {
    return this.hasElevator(game)
      ? ORBITAL_TUNING.transmitElevator
      : ORBITAL_TUNING.transmitBase;
  }

  /** 首次解锁时播报一次 */
  maybeAnnounce(game, now) {
    if (this._announced) return;
    if (this.isUnlocked(game)) {
      this._announced = true;
      orbitalToast(game, '🛰️ 轨道层已解锁！点击工具栏「🛰️ 轨道」建造空间站');
      orbitalSound(game, 'unlock');
    }
  }

  // ---------- 槽位操作 ----------

  /** 取某环槽位模块：ring 'A'|'B' */
  getModule(ring, idx) {
    const arr = ring === 'B' ? this.ringB : this.ringA;
    if (idx < 0 || idx >= arr.length) return null;
    return arr[idx];
  }

  /** 全站模块实例列表（含环标识） */
  allModules() {
    const out = [];
    this.ringA.forEach((m, i) => { if (m) out.push({ ring: 'A', idx: i, mod: m }); });
    if (this.ringBOpen) this.ringB.forEach((m, i) => { if (m) out.push({ ring: 'B', idx: i, mod: m }); });
    return out;
  }

  /** 某种模块的总级数 */
  totalLevel(moduleId) {
    let lv = 0;
    for (const { mod } of this.allModules()) {
      if (mod.id === moduleId) lv += mod.level;
    }
    return lv;
  }

  /** 某种模块的最高单体等级（贸易港加成取最高） */
  maxLevel(moduleId) {
    let lv = 0;
    for (const { mod } of this.allModules()) {
      if (mod.id === moduleId) lv = Math.max(lv, mod.level);
    }
    return lv;
  }

  /** 某种模块的数量 */
  countModules(moduleId) {
    let n = 0;
    for (const { mod } of this.allModules()) {
      if (mod.id === moduleId) n++;
    }
    return n;
  }

  /** deep_space.js 读取：船坞总等级 */
  get drydockLevel() {
    return this.totalLevel('drydock');
  }

  /** wonders 读取：星门建造资格 */
  stargateReady() {
    return this.countModules('stargate') > 0;
  }

  /** 星门建造速度加成（星门坞 L2 +30%，L3 +80%，取最高） */
  stargateBuildMult() {
    const lv = this.maxLevel('stargate');
    if (lv >= 3) return 1.8;
    if (lv >= 2) return 1.3;
    return 1;
  }

  // ---------- 建造前置检查 ----------

  /** 检查模块是否满足建造前置，返回 {ok, reason} */
  checkRequires(moduleId, game) {
    const def = MODULE_DEFS[moduleId];
    if (!def) return { ok: false, reason: '未知模块' };
    const req = def.requires || {};
    // 科技前置（防御性：tech 系统不存在则跳过）
    if (req.tech && game && game.tech && typeof game.tech.has === 'function') {
      if (!orbitalHasTech(game, req.tech)) {
        return { ok: false, reason: `需要科技「${this.techName(req.tech)}」` };
      }
    }
    // 模块前置
    if (req.module && this.countModules(req.module) === 0) {
      const needDef = MODULE_DEFS[req.module];
      return { ok: false, reason: `需要先建造「${needDef ? needDef.icon + needDef.name : req.module}」` };
    }
    return { ok: true };
  }

  /** 科技中文名（读 TECH_DEFS，失败回退 id） */
  techName(techId) {
    try {
      if (typeof TECH_DEFS !== 'undefined' && TECH_DEFS[techId]) return TECH_DEFS[techId].name;
    } catch (e) { /* 回退 */ }
    return techId;
  }

  /** 建造某级模块的实际成本（含电梯/科技折扣，向上取整） */
  moduleCost(moduleId, level, game) {
    const def = MODULE_DEFS[moduleId];
    if (!def) return null;
    const lvDef = def.levels[level - 1];
    if (!lvDef) return null;
    const m = this.costMultiplier(game);
    const out = {};
    for (const k in lvDef.cost) out[k] = Math.max(1, Math.ceil(lvDef.cost[k] * m));
    return out;
  }

  // ---------- 建造 / 升级 / 维修 / 拆除 ----------

  /**
   * 建造模块
   * @param {string} ring 'A'|'B'
   * @param {number} slotIdx 槽位下标
   * @param {string} moduleId 模块 id
   * @returns {{ok:boolean, reason?:string}}
   */
  buildModule(ring, slotIdx, moduleId, game) {
    // 1) 解锁检查
    if (!this.isUnlocked(game)) {
      return { ok: false, reason: '轨道层未解锁：先在地面建造「太空港」' };
    }
    // 2) 环检查
    if (ring === 'B' && !this.ringBOpen) {
      return { ok: false, reason: '第二环尚未扩建' };
    }
    const arr = ring === 'B' ? this.ringB : this.ringA;
    if (slotIdx < 0 || slotIdx >= arr.length) {
      return { ok: false, reason: '槽位不存在' };
    }
    // 3) 槽位占用检查
    if (arr[slotIdx]) {
      return { ok: false, reason: '该槽位已被占用' };
    }
    // 4) 模块定义与前置
    const def = MODULE_DEFS[moduleId];
    if (!def) return { ok: false, reason: '未知模块' };
    const rq = this.checkRequires(moduleId, game);
    if (!rq.ok) return rq;
    // 5) 费用
    const cost = this.moduleCost(moduleId, 1, game);
    const inv = orbitalInv(game);
    if (!inv) return { ok: false, reason: '无法读取背包' };
    if (!orbitalCanAfford(inv, cost)) {
      return { ok: false, reason: '资源不足：缺' + orbitalMissing(inv, cost) };
    }
    // 6) 扣费、落子
    orbitalSpend(inv, cost);
    const now = Date.now();
    arr[slotIdx] = {
      id: moduleId,
      level: 1,
      hp: ORBITAL_TUNING.baseHpPerLevel,
      maxHp: ORBITAL_TUNING.baseHpPerLevel,
      builtAt: now,
      acc: {},          // 产出累积器（tech/iron/rare/he3 按秒累积）
    };
    this.stats.built++;
    this.syncStation();
    orbitalToast(game, `${def.icon} ${def.name} 建造完成！（${ring === 'B' ? '第二环' : '第一环'}槽位 ${slotIdx + 1}）`);
    orbitalSound(game, 'build');
    this.refreshUI(game);
    return { ok: true };
  }

  /** 升级模块（槽位内升级到下一级） */
  upgradeModule(ring, slotIdx, game) {
    const mod = this.getModule(ring, slotIdx);
    if (!mod) return { ok: false, reason: '槽位是空的' };
    const def = MODULE_DEFS[mod.id];
    if (mod.level >= ORBITAL_TUNING.maxLevel) {
      return { ok: false, reason: '已满级' };
    }
    const cost = this.moduleCost(mod.id, mod.level + 1, game);
    const inv = orbitalInv(game);
    if (!inv) return { ok: false, reason: '无法读取背包' };
    if (!orbitalCanAfford(inv, cost)) {
      return { ok: false, reason: '资源不足：缺' + orbitalMissing(inv, cost) };
    }
    orbitalSpend(inv, cost);
    mod.level++;
    mod.maxHp = ORBITAL_TUNING.baseHpPerLevel * mod.level;
    mod.hp = Math.min(mod.maxHp, mod.hp + ORBITAL_TUNING.baseHpPerLevel);  // 升级顺带补血
    this.stats.upgraded++;
    this.syncStation();
    orbitalToast(game, `${def.icon} ${def.name} 升至 Lv.${mod.level}！`);
    orbitalSound(game, 'upgrade');
    this.refreshUI(game);
    return { ok: true };
  }

  /** 维修模块（花费为建造 L1 成本的 20% × 损伤比例） */
  repairModule(ring, slotIdx, game) {
    const mod = this.getModule(ring, slotIdx);
    if (!mod) return { ok: false, reason: '槽位是空的' };
    if (mod.hp >= mod.maxHp) return { ok: false, reason: '模块完好，无需维修' };
    const def = MODULE_DEFS[mod.id];
    const base = this.moduleCost(mod.id, 1, game);
    const dmgRatio = 1 - mod.hp / mod.maxHp;
    const cost = {};
    for (const k in base) cost[k] = Math.max(1, Math.ceil(base[k] * 0.2 * dmgRatio * mod.level));
    const inv = orbitalInv(game);
    if (!inv) return { ok: false, reason: '无法读取背包' };
    if (!orbitalCanAfford(inv, cost)) {
      return { ok: false, reason: '资源不足：缺' + orbitalMissing(inv, cost) };
    }
    orbitalSpend(inv, cost);
    mod.hp = mod.maxHp;
    this.stats.repaired++;
    orbitalToast(game, `🔧 ${def.icon} ${def.name} 维修完成，结构恢复 100%`);
    orbitalSound(game, 'repair');
    this.refreshUI(game);
    return { ok: true };
  }

  /** 拆除模块（返还 L1 成本的 30%，四舍五入） */
  demolishModule(ring, slotIdx, game) {
    const mod = this.getModule(ring, slotIdx);
    if (!mod) return { ok: false, reason: '槽位是空的' };
    const def = MODULE_DEFS[mod.id];
    const arr = ring === 'B' ? this.ringB : this.ringA;
    const base = this.moduleCost(mod.id, 1, game);
    const inv = orbitalInv(game);
    if (inv) {
      for (const k in base) inv[k] = (inv[k] || 0) + Math.floor(base[k] * 0.3);
    }
    arr[slotIdx] = null;
    this.syncStation();
    orbitalToast(game, `💥 ${def.icon} ${def.name} 已拆除，返还部分材料`);
    orbitalSound(game, 'demolish');
    this.refreshUI(game);
    return { ok: true };
  }

  /** 扩建第二环（12 槽，expensive） */
  expandSecondRing(game) {
    if (this.ringBOpen) return { ok: false, reason: '第二环已建成' };
    if (!this.isUnlocked(game)) return { ok: false, reason: '轨道层未解锁' };
    const filled = this.ringA.filter(Boolean).length;
    if (filled < ORBITAL_TUNING.ringBNeedFilled) {
      return { ok: false, reason: `第一环至少需要 ${ORBITAL_TUNING.ringBNeedFilled} 个模块（当前 ${filled} 个）` };
    }
    if (this.countModules('bridge') === 0) {
      return { ok: false, reason: '需要先建造「📡 指挥舰桥」来调度第二环' };
    }
    const m = this.costMultiplier(game);
    const cost = {};
    for (const k in ORBITAL_TUNING.ringBCost) {
      cost[k] = Math.max(1, Math.ceil(ORBITAL_TUNING.ringBCost[k] * m));
    }
    const inv = orbitalInv(game);
    if (!inv) return { ok: false, reason: '无法读取背包' };
    if (!orbitalCanAfford(inv, cost)) {
      return { ok: false, reason: '资源不足：缺' + orbitalMissing(inv, cost) };
    }
    orbitalSpend(inv, cost);
    this.ringBOpen = true;
    orbitalToast(game, '🛰️ 第二环扩建完成！空间站槽位 +12');
    orbitalSound(game, 'achieve');
    this.refreshUI(game);
    return { ok: true };
  }

  /** 同步 station 派生字段（modules 扁平列表 / power / crew 上限） */
  syncStation() {
    const list = [];
    for (const { mod } of this.allModules()) {
      list.push({ id: mod.id, level: mod.level, hp: mod.hp, maxHp: mod.maxHp });
    }
    this.station.modules = list;
    // 船员上限来自居住环
    let cap = 0;
    for (const { mod } of this.allModules()) {
      if (mod.id !== 'habitat') continue;
      const lv = MODULE_DEFS.habitat.levels[mod.level - 1];
      cap += lv.crewCap || 0;
    }
    this.crewCap = cap;
    if (this.station.crew > cap) this.station.crew = cap;
  }

  // ---------- 全站聚合计算 ----------

  /**
   * 电力：产 / 耗
   * @param {number} [now] 传入时间戳时，太阳风过载期间太阳能帆产电为 0
   */
  powerStats(now) {
    let prod = 0, use = 0;
    const solarDown = typeof now === 'number' && now < this.solarDownUntil;
    for (const { mod } of this.allModules()) {
      const def = MODULE_DEFS[mod.id];
      const lv = def.levels[mod.level - 1];
      // ☀️ 太阳风过载：帆板停机，产电为 0（耗电照常）
      if (!(solarDown && mod.id === 'solar')) prod += lv.powerGen || 0;
      use += lv.powerUse || 0;
    }
    return { prod, use, net: prod - use };
  }

  /** 船员需求：每级模块 1 人 */
  crewNeed() {
    let need = 0;
    for (const { mod } of this.allModules()) need += mod.level;
    return need;
  }

  /** 全站生产乘数：电力效率 × 船员效率 × 结构完好 × 幸福 × 指挥 */
  productionMult(now) {
    const { prod, use } = this.powerStats(now);
    // 电力效率：净电力 ≥0 则 1，否则按比例
    let powerEff = 1;
    if (use > 0) {
      powerEff = prod >= use ? 1 : (prod > 0 ? prod / use : 0);
    }
    // 船员效率
    const need = this.crewNeed();
    const crewEff = need > 0 ? orbitalClamp(this.station.crew / need, 0, 1) : 1;
    // 结构完好率（全站平均血量比）
    let hpSum = 0, hpMax = 0;
    for (const { mod } of this.allModules()) { hpSum += mod.hp; hpMax += mod.maxHp; }
    const hpEff = hpMax > 0 ? hpSum / hpMax : 1;
    // 幸福加成（生态穹顶，合计上限 +50%）
    const domeLv = this.totalLevel('dome');
    const happyMult = 1 + Math.min(ORBITAL_TUNING.happinessCap, domeLv * ORBITAL_TUNING.happinessPerDomeLevel);
    // 指挥加成（舰桥）
    const bridgeLv = this.totalLevel('bridge');
    const cmdMult = 1 + bridgeLv * ORBITAL_TUNING.bridgeCmdPerLevel;
    return { powerEff, crewEff, hpEff, happyMult, cmdMult, total: powerEff * crewEff * hpEff * happyMult * cmdMult };
  }

  /** 轨道贸易卖价乘数（取最高贸易港 × 舰桥议价） */
  tradeMult() {
    const lv = this.maxLevel('trade');
    if (lv === 0) return 1;
    const base = MODULE_DEFS.trade.levels[lv - 1].tradeMult || 1;
    const bridgeLv = this.totalLevel('bridge');
    return base * (1 + bridgeLv * 0.02);
  }

  /** 微陨石拦截率（多平台叠加，收益递减）与命中减伤 */
  defenseStats() {
    let notIntercept = 1;
    let dmgReduce = 0;
    for (const { mod } of this.allModules()) {
      if (mod.id !== 'defense') continue;
      const lv = MODULE_DEFS.defense.levels[mod.level - 1];
      notIntercept *= (1 - (lv.intercept || 0));
      dmgReduce = Math.max(dmgReduce, mod.level >= 3 ? 0.5 : mod.level >= 2 ? 0.35 : 0.2);
    }
    let intercept = 1 - notIntercept;
    // 舰桥火控：每级 +5%
    intercept = orbitalClamp(intercept + this.totalLevel('bridge') * 0.05, 0, 0.95);
    return { intercept, dmgReduce };
  }

  /** 造船/维修速度乘数（船坞 × 科研舱联动） */
  shipBuildMult() {
    const labLv = this.totalLevel('lab');
    return 1 + labLv * ORBITAL_TUNING.labShipBonusPerLevel;
  }

  // ---------- 主循环 ----------

  /**
   * 每帧（或每 tick）调用：game.tick 包装器会调用此方法
   * 基于时间戳推进，double-speed 下多次调用也安全
   */
  update(now, game) {
    if (!game) return;
    // 解锁播报（只一次）
    this.maybeAnnounce(game, now);

    // 初始化事件计时器
    if (!this.nextMeteor) {
      this.nextMeteor = now + orbitalRandMs(ORBITAL_TUNING.meteorMinMs, ORBITAL_TUNING.meteorMaxMs);
      this.nextSolarWind = now + orbitalRandMs(ORBITAL_TUNING.solarWindMinMs, ORBITAL_TUNING.solarWindMaxMs);
      this.nextSupply = now + ORBITAL_TUNING.supplyIntervalMs;
      this.nextAsteroid = now + orbitalRandMs(ORBITAL_TUNING.asteroidMinMs, ORBITAL_TUNING.asteroidMaxMs);
      this.lastTick = now;
    }

    // 未解锁：只跑播报，不跑生产/事件
    if (!this.isUnlocked(game)) return;
    if (this.allModules().length === 0) {
      this.groundBonus = 0;
      return;
    }

    // ---- 生产 tick（每 10 秒一轮） ----
    if (now - this.lastTick >= ORBITAL_TUNING.tickMs) {
      this.lastTick = now;
      this.productionTick(now, game);
    }

    // ---- 轨道事件 ----
    this.eventTick(now, game);
  }

  /** 生产 tick：电力结算 → 船员 → 各模块产出 → 输电 */
  productionTick(now, game) {
    const inv = orbitalInv(game);
    this.syncStation();

    // 1) 电力结算（太阳风过载期间帆板产电为 0，已在 powerStats(now) 内处理）
    const { prod, use, net } = this.powerStats(now);
    this.station.power = net;
    const mult = this.productionMult(now);
    const eff = mult.total;

    // 2) 船员漂移：向目标值靠拢（每轮 ±1）
    const target = Math.min(this.crewCap, Math.max(0, Math.floor((orbitalPopCount(game) - ORBITAL_TUNING.crewBasePop) / ORBITAL_TUNING.crewPerPop)));
    if (this.station.crew < target) this.station.crew++;
    else if (this.station.crew > target) this.station.crew--;

    // 3) 事件状态旗
    const solarDown = now < this.solarDownUntil;
    const asteroidBoost = now < this.asteroidBoostUntil;

    // 4) 各模块产出（按 10 秒 tick 折算 60 秒标定值）
    const tickSec = ORBITAL_TUNING.tickMs / 1000;
    const perMinToTick = tickSec / 60;
    if (inv && eff > 0) {
      for (const { mod } of this.allModules()) {
        const def = MODULE_DEFS[mod.id];
        const lv = def.levels[mod.level - 1];
        const hpEff = mod.maxHp > 0 ? mod.hp / mod.maxHp : 0;  // 单体完好率
        const mEff = eff * hpEff;
        if (mEff <= 0) continue;
        // 🔬 科研舱：科技点
        if (mod.id === 'lab' && lv.techPerCycle) {
          const gain = (lv.techPerCycle / lv.cycleSec) * tickSec * mEff;
          mod.acc.tech = (mod.acc.tech || 0) + gain;
          const whole = Math.floor(mod.acc.tech);
          if (whole >= 1) { mod.acc.tech -= whole; inv.tech = (inv.tech || 0) + whole; this.stats.techGained += whole; }
        }
        // ⛏️ 采矿激光：铁/稀土（过境 ×3）
        if (mod.id === 'mining') {
          const boost = asteroidBoost ? ORBITAL_TUNING.asteroidBoostMul : 1;
          const ironG = (lv.ironPerMin || 0) * perMinToTick * mEff * boost;
          const rareG = (lv.rarePerMin || 0) * perMinToTick * mEff * boost;
          mod.acc.iron = (mod.acc.iron || 0) + ironG;
          mod.acc.rare = (mod.acc.rare || 0) + rareG;
          const wi = Math.floor(mod.acc.iron), wr = Math.floor(mod.acc.rare);
          if (wi >= 1) { mod.acc.iron -= wi; inv.iron = (inv.iron || 0) + wi; this.stats.ironGained += wi; }
          if (wr >= 1) { mod.acc.rare -= wr; inv.rare = (inv.rare || 0) + wr; this.stats.rareGained += wr; }
        }
        // 🌀 星门坞：氦3（充能）
        if (mod.id === 'stargate' && lv.he3PerMin) {
          const gain = lv.he3PerMin * perMinToTick * mEff;
          mod.acc.he3 = (mod.acc.he3 || 0) + gain;
          const whole = Math.floor(mod.acc.he3);
          if (whole >= 1) { mod.acc.he3 -= whole; inv.he3 = (inv.he3 || 0) + whole; this.stats.he3Gained += whole; }
        }
      }
    }

    // 5) 余电输往地面（太阳风过载期间中断）
    let transmit = 0;
    if (!solarDown && net > 0) {
      transmit = Math.floor(net * this.transmitEfficiency(game));
      this.stats.powerTransmitted += transmit;
    }
    this.groundBonus = transmit;  // 供 builder.totalPower 包装读取

    // 6) 船坞自修：为受损最重的模块回血
    const drydockLv = this.totalLevel('drydock');
    if (drydockLv > 0) {
      let worst = null;
      for (const entry of this.allModules()) {
        if (entry.mod.hp < entry.mod.maxHp && (!worst || entry.mod.hp / entry.mod.maxHp < worst.mod.hp / worst.mod.maxHp)) {
          worst = entry;
        }
      }
      if (worst) {
        const repairPerLevel = [0, 4, 8, 14];  // 与模块定义 note 一致
        const amt = (repairPerLevel[Math.min(3, drydockLv)] || 4) * this.shipBuildMult();
        worst.mod.hp = Math.min(worst.mod.maxHp, worst.mod.hp + amt);
      }
    }

    // 7) 自然回血（无船坞时极慢）
    for (const { mod } of this.allModules()) {
      if (mod.hp < mod.maxHp) {
        mod.hp = Math.min(mod.maxHp, mod.hp + ORBITAL_TUNING.hpRegenPerTick);
      }
    }

    // 8) UI 轻量刷新（面板打开时）
    if (this._ui && this._ui.panelOpen) this.refreshHud(game);
  }

  /** 轨道事件 tick */
  eventTick(now, game) {
    // ☄️ 微陨石
    if (now >= this.nextMeteor) {
      this.nextMeteor = now + orbitalRandMs(ORBITAL_TUNING.meteorMinMs, ORBITAL_TUNING.meteorMaxMs);
      this.fireMicrometeorite(now, game);
    }
    // ☀️ 太阳风
    if (now >= this.nextSolarWind) {
      this.nextSolarWind = now + orbitalRandMs(ORBITAL_TUNING.solarWindMinMs, ORBITAL_TUNING.solarWindMaxMs);
      this.fireSolarWind(now, game);
    }
    // 🛸 补给船（需贸易港）
    if (now >= this.nextSupply) {
      this.nextSupply = now + ORBITAL_TUNING.supplyIntervalMs;
      this.fireSupplyShip(now, game);
    }
    // 🪨 小行星过境
    if (now >= this.nextAsteroid) {
      this.nextAsteroid = now + orbitalRandMs(ORBITAL_TUNING.asteroidMinMs, ORBITAL_TUNING.asteroidMaxMs);
      this.fireAsteroidTransit(now, game);
    }
  }

  /** ☄️ 微陨石：防御平台拦截骰 → 未拦截则随机模块掉血 */
  fireMicrometeorite(now, game) {
    const mods = this.allModules();
    if (mods.length === 0) return;
    const { intercept, dmgReduce } = this.defenseStats();
    // 拦截骰
    if (Math.random() < intercept) {
      this.stats.meteorsBlocked++;
      // 偶发提示（避免刷屏：1/3 概率）
      if (Math.random() < 0.34) {
        orbitalToast(game, `🛡️ 防御平台拦截了一颗微陨石（累计拦截 ${this.stats.meteorsBlocked}）`);
      }
      return;
    }
    // 命中：随机一个模块
    const pick = mods[orbitalRand(0, mods.length - 1)];
    const ev = ORBITAL_EVENTS.micrometeorite;
    let dmg = orbitalRand(ev.dmgMin, ev.dmgMax);
    dmg = Math.round(dmg * (1 - dmgReduce));
    pick.mod.hp = Math.max(0, pick.mod.hp - dmg);
    this.stats.meteorsHit++;
    const def = MODULE_DEFS[pick.mod.id];
    orbitalToast(game, `☄️ 微陨石击中${def.icon}${def.name}！结构 -${dmg}（${Math.round(pick.mod.hp)}/${pick.mod.maxHp}）`);
    orbitalSound(game, 'alarm');
    if (pick.mod.hp <= 0) {
      orbitalToast(game, `⚠️ ${def.icon}${def.name} 结构崩溃，停止工作！请维修或重建`);
    }
    this.refreshUI(game);
  }

  /** ☀️ 太阳风：帆板过载停机 60 秒 + 随机太阳能帆掉血 */
  fireSolarWind(now, game) {
    const ev = ORBITAL_EVENTS.solarWind;
    this.solarDownUntil = now + ORBITAL_TUNING.solarWindDownMs;
    this.groundBonus = 0;  // 传输中断
    // 所有太阳能帆掉血
    const solars = this.allModules().filter(e => e.mod.id === 'solar');
    for (const { mod } of solars) {
      const dmg = orbitalRand(ev.dmgMin, ev.dmgMax);
      mod.hp = Math.max(0, mod.hp - dmg);
    }
    if (solars.length > 0) {
      orbitalToast(game, `☀️ 太阳风暴！${solars.length} 组太阳能帆过载停机 60 秒，余电传输中断`);
    } else {
      orbitalToast(game, '☀️ 太阳风暴掠过（空间站暂无太阳能帆，未受影响）');
    }
    orbitalSound(game, 'warning');
    this.refreshUI(game);
  }

  /** 🛸 补给船：需贸易港，按等级送资源 */
  fireSupplyShip(now, game) {
    const tradeLv = this.maxLevel('trade');
    if (tradeLv === 0) return;  // 无贸易港：补给船不来
    const inv = orbitalInv(game);
    if (!inv) return;
    const lvDef = MODULE_DEFS.trade.levels[tradeLv - 1];
    // 基础载货：铁/钢/食物/水；L2 +50%，L3 +120% 且偶带稀土/铀
    const cargoMul = tradeLv >= 3 ? 2.2 : tradeLv >= 2 ? 1.5 : 1;
    const cargo = {
      iron: Math.round(120 * cargoMul),
      steel: Math.round(60 * cargoMul),
      food: Math.round(80 * cargoMul),
      water: Math.round(80 * cargoMul),
    };
    const extras = [];
    if (tradeLv >= 3) {
      if (Math.random() < 0.6) { cargo.rare = orbitalRand(15, 40); extras.push(`稀土×${cargo.rare}`); }
      if (Math.random() < 0.3) { cargo.uranium = orbitalRand(5, 15); extras.push(`铀矿×${cargo.uranium}`); }
    }
    for (const k in cargo) inv[k] = (inv[k] || 0) + cargo[k];
    this.stats.supplyShips++;
    const txt = Object.keys(cargo).filter(k => !['rare', 'uranium'].includes(k))
      .map(k => `${orbitalResIcon(k)}${orbitalResName[k]}×${cargo[k]}`).join(' ');
    orbitalToast(game, `🛸 补给船到港！卸下 ${txt}${extras.length ? '，以及 ' + extras.join('、') : ''}`);
    orbitalSound(game, 'trade');
    if (game && typeof game.updateHUD === 'function') { try { game.updateHUD(); } catch (e) {} }
    this.refreshUI(game);
  }

  /** 🪨 小行星过境：60 秒采矿 ×3 */
  fireAsteroidTransit(now, game) {
    const miningLv = this.totalLevel('mining');
    this.asteroidBoostUntil = now + ORBITAL_TUNING.asteroidBoostMs;
    if (miningLv > 0) {
      orbitalToast(game, `🪨 富矿小行星过境！采矿激光全功率运转，产量 ×3（60 秒）`);
      orbitalSound(game, 'achieve');
    } else {
      // 无采矿激光：提示机会成本（低频，不算刷屏因为 3~6 分钟一次）
      orbitalToast(game, '🪨 一颗富矿小行星掠过空间站……（建造⛏️采矿激光即可采集）');
    }
  }

  // ---------- 存档 ----------

  save() {
    const ser = (arr) => arr.map(m => m ? {
      id: m.id, level: m.level,
      hp: Math.round(m.hp * 10) / 10, maxHp: m.maxHp,
      builtAt: m.builtAt, acc: m.acc || {},
    } : null);
    return {
      v: 1,
      orbitalVersion: ORBITAL_VERSION,
      ringA: ser(this.ringA),
      ringB: ser(this.ringB),
      ringBOpen: this.ringBOpen,
      crew: this.station.crew,
      groundBonus: this.groundBonus,
      solarDownUntil: this.solarDownUntil,
      asteroidBoostUntil: this.asteroidBoostUntil,
      nextMeteor: this.nextMeteor,
      nextSolarWind: this.nextSolarWind,
      nextSupply: this.nextSupply,
      nextAsteroid: this.nextAsteroid,
      stats: Object.assign({}, this.stats),
      announced: this._announced,
    };
  }

  load(data) {
    if (!data || typeof data !== 'object') return;
    try {
      const unser = (arr) => {
        const out = new Array(ORBITAL_TUNING.ringSlots).fill(null);
        if (Array.isArray(arr)) {
          for (let i = 0; i < Math.min(arr.length, out.length); i++) {
            const s = arr[i];
            if (s && MODULE_DEFS[s.id]) {
              out[i] = {
                id: s.id,
                level: orbitalClamp(s.level | 0 || 1, 1, ORBITAL_TUNING.maxLevel),
                hp: typeof s.hp === 'number' ? s.hp : ORBITAL_TUNING.baseHpPerLevel,
                maxHp: s.maxHp || ORBITAL_TUNING.baseHpPerLevel * (s.level || 1),
                builtAt: s.builtAt || Date.now(),
                acc: s.acc || {},
              };
            }
          }
        }
        return out;
      };
      this.ringA = unser(data.ringA);
      this.ringB = unser(data.ringB);
      this.ringBOpen = !!data.ringBOpen;
      this.station.crew = data.crew | 0 || 0;
      this.groundBonus = data.groundBonus | 0 || 0;
      this.solarDownUntil = data.solarDownUntil || 0;
      this.asteroidBoostUntil = data.asteroidBoostUntil || 0;
      this.nextMeteor = data.nextMeteor || 0;
      this.nextSolarWind = data.nextSolarWind || 0;
      this.nextSupply = data.nextSupply || 0;
      this.nextAsteroid = data.nextAsteroid || 0;
      if (data.stats) Object.assign(this.stats, data.stats);
      this._announced = !!data.announced;
      this.syncStation();
    } catch (e) { /* 坏档则保持空站 */ }
  }
}

// ================= UI：🛰️ 轨道按钮 + 面板 =================
// 挂载在 OrbitalManager.prototype 上，保持类主体可读

/** 注入轨道面板 CSS（只注入一次） */
function orbitalInjectCSS() {
  if (document.getElementById('orbital-css')) return;
  const st = document.createElement('style');
  st.id = 'orbital-css';
  st.textContent = `
  #orbital-panel { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
    width:min(680px, 94vw); max-height:92vh; overflow-y:auto; z-index:60;
    background:linear-gradient(160deg,#0b1026 0%,#131a3a 60%,#0b1026 100%);
    border:1px solid #3b4a8a; border-radius:12px; color:#dbe4ff;
    box-shadow:0 8px 40px rgba(0,0,0,.6); padding:12px 14px; font-size:13px; }
  #orbital-panel .panel-header { display:flex; justify-content:space-between; align-items:center;
    margin-bottom:8px; font-size:15px; }
  #orbital-panel .panel-header button { background:#243; border:1px solid #3b4a8a; color:#dbe4ff;
    border-radius:6px; padding:2px 10px; cursor:pointer; }
  .orb-hud { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px; }
  .orb-hud .orb-stat { background:rgba(59,74,138,.25); border:1px solid #3b4a8a; border-radius:8px;
    padding:4px 10px; font-size:12px; }
  .orb-hud .orb-stat b { color:#ffd97d; }
  .orb-rings { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-bottom:10px; }
  .orb-ring-wrap { text-align:center; }
  .orb-ring-wrap .orb-ring-title { font-size:12px; opacity:.8; margin-bottom:4px; }
  .orb-ring { position:relative; width:290px; height:290px; margin:0 auto;
    border:2px dashed #3b4a8a; border-radius:50%;
    background:radial-gradient(circle at 50% 50%, rgba(165,180,252,.08), transparent 65%); }
  .orb-ring.locked-ring { opacity:.35; }
  .orb-core { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
    text-align:center; font-size:11px; line-height:1.5; pointer-events:none; }
  .orb-core .core-icon { font-size:30px; }
  .orb-slot { position:absolute; width:52px; height:52px; margin:-26px 0 0 -26px;
    border-radius:50%; border:2px solid #4a5aa0; background:#141b3d; cursor:pointer;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    font-size:20px; transition:transform .12s, box-shadow .12s; }
  .orb-slot small { font-size:9px; color:#ffd97d; line-height:1; }
  .orb-slot.empty { opacity:.55; border-style:dashed; font-size:18px; }
  .orb-slot:hover { transform:scale(1.12); }
  .orb-slot.selected { border-color:#ffd97d; box-shadow:0 0 12px #ffd97d; }
  .orb-slot.damaged { border-color:#ef4444; }
  .orb-slot .hpbar { position:absolute; bottom:2px; left:8px; right:8px; height:3px;
    background:#333; border-radius:2px; overflow:hidden; }
  .orb-slot .hpbar i { display:block; height:100%; background:#4ade80; }
  .orb-detail { background:rgba(10,14,35,.6); border:1px solid #3b4a8a; border-radius:10px;
    padding:10px 12px; margin-bottom:10px; min-height:120px; }
  .orb-detail h4 { margin:0 0 6px; font-size:14px; }
  .orb-detail .flavor { font-size:11px; opacity:.55; font-style:italic; margin:4px 0; }
  .orb-detail .req-lock { color:#fca5a5; font-size:12px; }
  .orb-detail .cost-line { font-size:12px; margin:4px 0; }
  .orb-btns { display:flex; gap:8px; flex-wrap:wrap; margin-top:8px; }
  .orb-btns button { background:#2b3a7a; border:1px solid #4a5aa0; color:#dbe4ff;
    border-radius:8px; padding:6px 12px; cursor:pointer; font-size:12px; }
  .orb-btns button:hover { background:#3b4d9e; }
  .orb-btns button.danger { background:#5a2323; border-color:#8a3b3b; }
  .orb-btns button:disabled { opacity:.4; cursor:not-allowed; }
  .orb-build-list { display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:8px; }
  @media (max-width:560px){ .orb-build-list { grid-template-columns:1fr; } }
  .orb-build-item { background:rgba(59,74,138,.18); border:1px solid #3b4a8a; border-radius:8px;
    padding:6px 8px; cursor:pointer; font-size:12px; }
  .orb-build-item:hover { background:rgba(59,74,138,.4); }
  .orb-build-item.locked { opacity:.45; cursor:not-allowed; }
  .orb-build-item .bi-head { font-size:13px; margin-bottom:2px; }
  .orb-build-item .bi-cost { font-size:11px; color:#ffd97d; }
  .orb-build-item .bi-eff { font-size:11px; opacity:.75; }
  .orb-synergy { font-size:11px; opacity:.8; margin-top:8px; line-height:1.7; }
  .orb-synergy b { color:#a5b4fc; }
  .orb-locked-box { text-align:center; padding:34px 16px; }
  .orb-locked-box .big { font-size:44px; }
  .orb-locked-box p { opacity:.8; line-height:1.8; }
  .orb-expand-box { text-align:center; padding:10px; border:1px dashed #3b4a8a;
    border-radius:10px; margin-bottom:10px; font-size:12px; }
  `;
  document.head.appendChild(st);
}

OrbitalManager.prototype.bindUI = function (game) {
  if (typeof document === 'undefined') return;
  if (this._ui && this._ui.bound) return;
  orbitalInjectCSS();

  const toolbar = document.getElementById('toolbar');
  const mapWrap = document.getElementById('map-wrap');
  if (!toolbar || !mapWrap) return;  // DOM 结构不符则放弃 UI（逻辑照常跑）

  // ---- 工具栏按钮「🛰️ 轨道」 ----
  let btn = document.getElementById('btn-orbital');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'btn-orbital';
    btn.className = 'tool-btn';
    btn.innerHTML = '🛰️<small>轨道</small>';
    const resetBtn = document.getElementById('btn-reset');
    if (resetBtn) toolbar.insertBefore(btn, resetBtn);
    else toolbar.appendChild(btn);
  }

  // ---- 面板 ----
  let panel = document.getElementById('orbital-panel');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'orbital-panel';
    panel.className = 'hidden';
    panel.innerHTML = `
      <div class="panel-header"><b>🛰️ 轨道空间站</b><button id="btn-close-orbital">✖</button></div>
      <div id="orbital-locked" class="hidden"></div>
      <div id="orbital-main" class="hidden">
        <div class="orb-hud" id="orbital-hud"></div>
        <div class="orb-rings" id="orbital-rings"></div>
        <div class="orb-expand-box hidden" id="orbital-expand"></div>
        <div class="orb-detail" id="orbital-detail"></div>
        <div class="orb-synergy" id="orbital-synergy"></div>
      </div>`;
    mapWrap.appendChild(panel);
  }

  const ui = this._ui = this._ui || {};
  ui.bound = true;
  ui.panelOpen = false;
  ui.sel = null;  // {ring:'A'|'B', idx}
  ui.els = {
    btn, panel,
    locked: panel.querySelector('#orbital-locked'),
    main: panel.querySelector('#orbital-main'),
    hud: panel.querySelector('#orbital-hud'),
    rings: panel.querySelector('#orbital-rings'),
    expand: panel.querySelector('#orbital-expand'),
    detail: panel.querySelector('#orbital-detail'),
    synergy: panel.querySelector('#orbital-synergy'),
  };

  btn.onclick = () => {
    orbitalSound(game, 'click');
    this.togglePanel(game);
  };
  panel.querySelector('#btn-close-orbital').onclick = () => this.closePanel();

  // 面板内点击委托（槽位选择）
  ui.els.rings.onclick = (e) => {
    const slotEl = e.target.closest('.orb-slot');
    if (!slotEl) return;
    const ring = slotEl.dataset.ring, idx = parseInt(slotEl.dataset.idx, 10);
    ui.sel = { ring, idx };
    orbitalSound(game, 'click');
    this.renderDetail(game);
    this.renderRings(game);  // 高亮选中
  };
};

/** 打开/关闭面板 */
OrbitalManager.prototype.togglePanel = function (game) {
  const ui = this._ui;
  if (!ui || !ui.bound) return;
  if (ui.panelOpen) { this.closePanel(); return; }
  ui.panelOpen = true;
  ui.els.panel.classList.remove('hidden');
  this.renderPanel(game);
};

OrbitalManager.prototype.closePanel = function () {
  const ui = this._ui;
  if (!ui || !ui.bound) return;
  ui.panelOpen = false;
  ui.els.panel.classList.add('hidden');
};

/** 面板打开时的数据刷新（轻量：HUD + 环） */
OrbitalManager.prototype.refreshUI = function (game) {
  const ui = this._ui;
  if (!ui || !ui.bound || !ui.panelOpen) return;
  this.renderPanel(game);
};

/** 仅刷新 HUD 数字（每生产 tick 调用，避免整面板闪烁） */
OrbitalManager.prototype.refreshHud = function (game) {
  const ui = this._ui;
  if (!ui || !ui.bound || !ui.panelOpen) return;
  this.renderHud(game);
};

/** 整面板渲染 */
OrbitalManager.prototype.renderPanel = function (game) {
  const ui = this._ui;
  if (!ui || !ui.bound) return;
  if (!this.isUnlocked(game)) {
    // 🔒 锁定态：显示解锁条件
    ui.els.locked.classList.remove('hidden');
    ui.els.main.classList.add('hidden');
    const hasTech = orbitalHasTech(game, 't-orb-1');
    ui.els.locked.innerHTML = `
      <div class="orb-locked-box">
        <div class="big">🔒</div>
        <h3>轨道层未解锁</h3>
        <p>在地面建造「🚀 太空港」后解锁轨道空间站建造。<br>
        ${hasTech
          ? '✅ 科技「轨道力学」已解锁，可以建造太空港了！'
          : '🧪 前置科技：<b>「轨道力学」(t-orb-1)</b> —— 解锁太空港建造（科技树 → 轨道系）'}<br>
        💡 建造「🗼 轨道电梯」可使轨道建造成本 <b>-30%</b>，<br>
        并将太阳能余电传输效率从 55% 提升至 <b>90%</b>。</p>
      </div>`;
    return;
  }
  ui.els.locked.classList.add('hidden');
  ui.els.main.classList.remove('hidden');
  this.renderHud(game);
  this.renderRings(game);
  this.renderExpand(game);
  this.renderDetail(game);
  this.renderSynergy(game);
};

/** HUD：电力 / 船员 / 槽位 / 地面传输 */
OrbitalManager.prototype.renderHud = function (game) {
  const ui = this._ui;
  const { prod, use, net } = this.powerStats(Date.now());
  const mult = this.productionMult(Date.now());
  const filledA = this.ringA.filter(Boolean).length;
  const filledB = this.ringBOpen ? this.ringB.filter(Boolean).length : 0;
  const totalSlots = this.ringBOpen ? 24 : 12;
  const elev = this.hasElevator(game);
  const solarDown = Date.now() < this.solarDownUntil;
  ui.els.hud.innerHTML = `
    <div class="orb-stat">⚡ 电力 <b>${prod}</b> / 耗 ${use} / 净 <b style="color:${net >= 0 ? '#4ade80' : '#ef4444'}">${net >= 0 ? '+' : ''}${net}</b>${solarDown ? ' ☀️过载中' : ''}</div>
    <div class="orb-stat">👥 船员 <b>${this.station.crew}</b>/${this.crewCap}（需求 ${this.crewNeed()}）</div>
    <div class="orb-stat">🛰️ 槽位 <b>${filledA + filledB}</b>/${totalSlots}</div>
    <div class="orb-stat">🔌 输往地面 <b>+${this.groundBonus}</b> 电力${elev ? '（电梯加成 90%）' : '（效率 55%，建电梯→90%)'}</div>
    <div class="orb-stat">📈 综合效率 <b>${Math.round(mult.total * 100)}%</b><span style="opacity:.6">（电${Math.round(mult.powerEff * 100)}%·人${Math.round(mult.crewEff * 100)}%·修${Math.round(mult.hpEff * 100)}%)</span></div>`;
};

/** 环形可视化：12 槽位按圆周排列 */
OrbitalManager.prototype.renderRings = function (game) {
  const ui = this._ui;
  const sel = ui.sel;
  const htmlForRing = (ring, arr, title, locked) => {
    const R = 118;  // 槽位圆周半径（px）
    let slotsHtml = '';
    for (let i = 0; i < arr.length; i++) {
      // 从顶部开始顺时针排布
      const ang = (i / arr.length) * Math.PI * 2 - Math.PI / 2;
      const x = 145 + R * Math.cos(ang);
      const y = 145 + R * Math.sin(ang);
      const m = arr[i];
      const isSel = sel && sel.ring === ring && sel.idx === i;
      if (m) {
        const def = MODULE_DEFS[m.id];
        const hpPct = Math.round((m.hp / m.maxHp) * 100);
        const damaged = hpPct < 100 ? ' damaged' : '';
        slotsHtml += `
          <div class="orb-slot${isSel ? ' selected' : ''}${damaged}" data-ring="${ring}" data-idx="${i}"
               style="left:${x.toFixed(1)}px;top:${y.toFixed(1)}px" title="${def.name} Lv.${m.level}（${hpPct}%）">
            ${def.icon}<small>Lv.${m.level}</small>
            <div class="hpbar"><i style="width:${hpPct}%;background:${hpPct > 60 ? '#4ade80' : hpPct > 30 ? '#facc15' : '#ef4444'}"></i></div>
          </div>`;
      } else {
        slotsHtml += `
          <div class="orb-slot empty${isSel ? ' selected' : ''}" data-ring="${ring}" data-idx="${i}"
               style="left:${x.toFixed(1)}px;top:${y.toFixed(1)}px" title="空槽位 ${i + 1}（点击建造）">＋</div>`;
      }
    }
    const { net } = this.powerStats(Date.now());
    return `
      <div class="orb-ring-wrap">
        <div class="orb-ring-title">${title}</div>
        <div class="orb-ring${locked ? ' locked-ring' : ''}">
          <div class="orb-core"><div class="core-icon">🛰️</div>核心<br>净电力 ${net >= 0 ? '+' : ''}${net}</div>
          ${slotsHtml}
        </div>
      </div>`;
  };
  let html = htmlForRing('A', this.ringA, '第一环 · 12 槽位', false);
  if (this.ringBOpen) html += htmlForRing('B', this.ringB, '第二环 · 12 槽位', false);
  ui.els.rings.innerHTML = html;
};

/** 第二环扩建区 */
OrbitalManager.prototype.renderExpand = function (game) {
  const ui = this._ui;
  if (this.ringBOpen) {
    ui.els.expand.classList.add('hidden');
    ui.els.expand.innerHTML = '';
    return;
  }
  const filled = this.ringA.filter(Boolean).length;
  const need = ORBITAL_TUNING.ringBNeedFilled;
  const m = this.costMultiplier(game);
  const cost = {};
  for (const k in ORBITAL_TUNING.ringBCost) cost[k] = Math.ceil(ORBITAL_TUNING.ringBCost[k] * m);
  const canDo = filled >= need && this.countModules('bridge') > 0 && orbitalCanAfford(orbitalInv(game), cost);
  ui.els.expand.classList.remove('hidden');
  ui.els.expand.innerHTML = `
    <div>🛰️ <b>第二环扩建</b>：+12 槽位（expensive）</div>
    <div style="opacity:.75;margin:4px 0">条件：第一环 ≥${need} 模块（当前 ${filled}）+ 已建📡指挥舰桥${this.countModules('bridge') > 0 ? '✅' : '❌'}<br>
    成本：${orbitalCostText(cost)}${this.hasElevator(game) ? '（已含电梯 -30%）' : ''}</div>
    <div class="orb-btns" style="justify-content:center">
      <button id="btn-expand-ring" ${canDo ? '' : 'disabled'}>🛰️ 扩建第二环</button>
    </div>`;
  const b = ui.els.expand.querySelector('#btn-expand-ring');
  if (b) b.onclick = () => {
    const r = this.expandSecondRing(game);
    if (!r.ok) { orbitalToast(game, '⚠️ ' + r.reason); orbitalSound(game, 'error'); }
  };
};

/** 详情区：选中空槽 → 建造菜单；选中模块 → 详情/升级/维修/拆除 */
OrbitalManager.prototype.renderDetail = function (game) {
  const ui = this._ui;
  const sel = ui.sel;
  if (!sel) {
    ui.els.detail.innerHTML = `
      <h4>🛰️ 空间站总览</h4>
      <div style="opacity:.75;font-size:12px;line-height:1.8">
      点击环上槽位：<b>空槽</b>可建造模块，<b>已有模块</b>可查看/升级/维修/拆除。<br>
      💡 开局建议：🛏️居住环 → 🔆太阳能帆 → 🔬科研舱，电力与船员是地基。<br>
      🛠️船坞会为受损模块自动回血；🛡️防御平台能省下大量维修费。</div>`;
    return;
  }
  const mod = this.getModule(sel.ring, sel.idx);
  if (!mod) { this.renderBuildMenu(game, sel); return; }

  // ---- 模块详情 ----
  const def = MODULE_DEFS[mod.id];
  const lvDef = def.levels[mod.level - 1];
  const hpPct = Math.round((mod.hp / mod.maxHp) * 100);
  const isMax = mod.level >= ORBITAL_TUNING.maxLevel;
  const upCost = isMax ? null : this.moduleCost(mod.id, mod.level + 1, game);
  const inv = orbitalInv(game);
  const canUp = !isMax && inv && orbitalCanAfford(inv, upCost);
  const needRepair = mod.hp < mod.maxHp;
  ui.els.detail.innerHTML = `
    <h4>${def.icon} ${def.name} <span style="opacity:.6">Lv.${mod.level}/${ORBITAL_TUNING.maxLevel}</span>
      <span style="font-size:11px;opacity:.6">（${sel.ring === 'B' ? '第二环' : '第一环'}槽位 ${sel.idx + 1}）</span></h4>
    <div style="font-size:12px">🩸 结构 <b style="color:${hpPct > 60 ? '#4ade80' : hpPct > 30 ? '#facc15' : '#ef4444'}">${hpPct}%</b>
      <span style="opacity:.6">（${Math.round(mod.hp)}/${mod.maxHp}）</span>
      ${hpPct < 100 ? '—— 受损会降低产出效率，请维修' : '—— 完好'}</div>
    <div class="cost-line">⚡ 效果：${lvDef.effect}</div>
    ${!isMax ? `<div class="cost-line">⬆️ 下一级：${def.levels[mod.level].effect}<br>💰 升级成本：${orbitalCostText(upCost)}</div>` : '<div class="cost-line">⭐ 已满级</div>'}
    <div class="flavor">${def.flavor}</div>
    <div class="orb-btns">
      <button id="orb-upg" ${canUp ? '' : 'disabled'}>⬆️ 升级${upCost ? '（' + orbitalCostText(upCost) + '）' : ''}</button>
      <button id="orb-rep" ${needRepair ? '' : 'disabled'}>🔧 维修</button>
      <button id="orb-dem" class="danger">💥 拆除（返还 30%）</button>
    </div>`;
  const q = (s) => ui.els.detail.querySelector(s);
  if (q('#orb-upg')) q('#orb-upg').onclick = () => {
    const r = this.upgradeModule(sel.ring, sel.idx, game);
    if (!r.ok) { orbitalToast(game, '⚠️ ' + r.reason); orbitalSound(game, 'error'); }
  };
  if (q('#orb-rep')) q('#orb-rep').onclick = () => {
    const r = this.repairModule(sel.ring, sel.idx, game);
    if (!r.ok) { orbitalToast(game, '⚠️ ' + r.reason); orbitalSound(game, 'error'); }
  };
  if (q('#orb-dem')) q('#orb-dem').onclick = () => {
    if (window.confirm ? window.confirm(`确定拆除「${def.icon}${def.name} Lv.${mod.level}」？返还 30% 材料。`) : true) {
      this.demolishModule(sel.ring, sel.idx, game);
      ui.sel = null;
    }
  };
};

/** 建造菜单：列出 10 种模块，前置/费用检查 */
OrbitalManager.prototype.renderBuildMenu = function (game, sel) {
  const ui = this._ui;
  const inv = orbitalInv(game);
  let items = '';
  for (const mid of MODULE_ORDER) {
    const def = MODULE_DEFS[mid];
    const lv1 = def.levels[0];
    const rq = this.checkRequires(mid, game);
    const cost = this.moduleCost(mid, 1, game);
    const afford = inv && orbitalCanAfford(inv, cost);
    const locked = !rq.ok || !afford;
    items += `
      <div class="orb-build-item${locked ? ' locked' : ''}" data-mid="${mid}">
        <div class="bi-head">${def.icon} ${def.name}${def.uniqueHint ? ' <span style="font-size:10px;opacity:.6">建议×1</span>' : ''}</div>
        <div class="bi-eff">${lv1.effect}</div>
        <div class="bi-cost">${rq.ok ? orbitalCostText(cost) : `<span class="req-lock">🔒 ${rq.reason}</span>`}${rq.ok && !afford ? '（资源不足）' : ''}</div>
      </div>`;
  }
  const ringName = sel.ring === 'B' ? '第二环' : '第一环';
  ui.els.detail.innerHTML = `
    <h4>🏗️ 在${ringName}槽位 ${sel.idx + 1} 建造模块</h4>
    <div style="font-size:11px;opacity:.65">电梯折扣：${this.hasElevator(game) ? '✅ -30% 已生效' : '❌ 建轨道电梯可 -30%（且输电 55%→90%）'}</div>
    <div class="orb-build-list">${items}</div>`;
  ui.els.detail.querySelectorAll('.orb-build-item').forEach(el => {
    el.onclick = () => {
      if (el.classList.contains('locked')) { orbitalSound(game, 'error'); return; }
      const r = this.buildModule(sel.ring, sel.idx, el.dataset.mid, game);
      if (!r.ok) { orbitalToast(game, '⚠️ ' + r.reason); orbitalSound(game, 'error'); }
    };
  });
};

/** 联动加成展示（当前激活的） */
OrbitalManager.prototype.renderSynergy = function (game) {
  const ui = this._ui;
  const active = [];
  const has = (id) => this.countModules(id) > 0;
  if (has('drydock') && this.totalLevel('lab') > 0)
    active.push(`🛠️×🔬 <b>技术反哺</b>：造船/维修速度 ×${this.shipBuildMult().toFixed(2)}`);
  if (this.hasElevator(game) && has('solar'))
    active.push(`🔆×🗼 <b>缆绳输电</b>：余电传输效率 90%（无电梯 55%）`);
  if (this.totalLevel('dome') > 0)
    active.push(`🌿 <b>幸福生产力</b>：全站生产 +${Math.round(Math.min(0.5, this.totalLevel('dome') * 0.06) * 100)}%`);
  if (this.totalLevel('bridge') > 0)
    active.push(`📡 <b>指挥效率</b>：全站生产 +${Math.round(this.totalLevel('bridge') * 10)}%${has('defense') ? `，拦截 +${this.totalLevel('bridge') * 5}%` : ''}${has('trade') ? `，卖价 +${this.totalLevel('bridge') * 2}%` : ''}`);
  const { intercept } = this.defenseStats();
  if (has('defense')) active.push(`🛡️ <b>免税通道</b>：微陨石拦截率 ${Math.round(intercept * 100)}%`);
  if (has('trade')) active.push(`🏪 <b>轨道贸易</b>：卖价 ×${this.tradeMult().toFixed(2)}，补给船定期到港`);
  if (this.stargateReady()) active.push(`🌀 <b>星门资格</b>：已获得，wonders 可建造星门`);
  if (this.drydockLevel > 0) active.push(`🛠️ <b>船坞等级</b>：${this.drydockLevel}（deep_space 可读）`);
  ui.els.synergy.innerHTML = active.length
    ? '✨ <b>激活的联动</b><br>' + active.map(a => '· ' + a).join('<br>')
    : '<span style="opacity:.5">暂无联动——多建几种模块，联动加成会自动激活。</span>';
};

// ================= 自启动集成 =================
// 本文件加载于 build.js 之后、game.js 之前。
// game.js 在 DOMContentLoaded 时创建 Game 实例并挂到 window.__starport。
// 这里注册另一个 DOMContentLoaded 监听（注册顺序靠后 → 执行顺序靠后），
// 等待 __starport 就绪后接入：挂 game.orbital、包装 tick/save/load、注入电力加成。

/** 等待 game 实例就绪（轮询，最多等 10 秒） */
function orbitalWaitForGame(cb) {
  const t0 = Date.now();
  const timer = setInterval(() => {
    try {
      if (typeof window !== 'undefined' && window.__starport) {
        clearInterval(timer);
        cb(window.__starport);
        return;
      }
    } catch (e) { /* 忽略 */ }
    if (Date.now() - t0 > 10000) clearInterval(timer);
  }, 200);
}

/** 接入 game：tick / save / load / 地面电力包装 */
function orbitalHookGame(game) {
  if (!game || game._orbitalHooked) return;
  game._orbitalHooked = true;

  const om = new OrbitalManager();
  game.orbital = om;

  // ---- 从存档恢复（game.load 在 game.js 的监听器里已执行过，这里直接读同一 key） ----
  try {
    const raw = localStorage.getItem(ORBITAL_SAVE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data && data.orbital) om.load(data.orbital);
    }
  } catch (e) { /* 忽略 */ }

  // ---- tick 包装：每帧逻辑后跑轨道 update ----
  try {
    const origTick = game.tick;
    if (typeof origTick === 'function') {
      game.tick = function (now, dt) {
        origTick.call(this, now, dt);
        try { om.update(now, this); } catch (e) { /* 轨道异常不拖垮主循环 */ }
      };
    }
  } catch (e) { /* 忽略 */ }

  // ---- save 包装：存档带上轨道数据 ----
  try {
    const origSave = game.save;
    if (typeof origSave === 'function') {
      game.save = function () {
        try {
          // 先让原生 save 写一次，再把 orbital 字段补进去重写（避免改 game.js）
          origSave.call(this);
          const raw = localStorage.getItem(ORBITAL_SAVE_KEY);
          if (raw) {
            const data = JSON.parse(raw);
            data.orbital = om.save();
            localStorage.setItem(ORBITAL_SAVE_KEY, JSON.stringify(data));
          }
        } catch (e) {
          try { origSave.call(this); } catch (e2) { /* 忽略 */ }
        }
      };
    }
  } catch (e) { /* 忽略 */ }

  // ---- load 包装：读档时恢复轨道 ----
  try {
    const origLoad = game.load;
    if (typeof origLoad === 'function') {
      game.load = function () {
        const ok = origLoad.call(this);
        try {
          const raw = localStorage.getItem(ORBITAL_SAVE_KEY);
          if (raw) {
            const data = JSON.parse(raw);
            if (data && data.orbital) om.load(data.orbital);
          }
        } catch (e) { /* 忽略 */ }
        return ok;
      };
    }
  } catch (e) { /* 忽略 */ }

  // ---- 地面电力包装：builder.totalPower() += 轨道余电传输 ----
  try {
    const builder = game.builder;
    if (builder && typeof builder.totalPower === 'function' && !builder._orbitalPowerWrapped) {
      builder._orbitalPowerWrapped = true;
      const origTotalPower = builder.totalPower.bind(builder);
      builder.totalPower = function () {
        let base = 0;
        try { base = origTotalPower(); } catch (e) { /* 忽略 */ }
        let bonus = 0;
        try { bonus = (game.orbital && game.orbital.groundBonus) | 0; } catch (e) { /* 忽略 */ }
        return base + Math.max(0, bonus);
      };
    }
  } catch (e) { /* 忽略 */ }

  // ---- UI ----
  try {
    if (typeof om.bindUI === 'function') om.bindUI(game);
  } catch (e) { /* 逻辑照常跑，UI 缺失不致命 */ }

  try { console.log(`🛰️ 星港轨道系统 v${ORBITAL_VERSION}「${ORBITAL_CODENAME}」已接入`); } catch (e) {}
}

// 浏览器环境：等 DOM 就绪后接入
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    orbitalWaitForGame(orbitalHookGame);
  });
}

// ================= 导出 =================
if (typeof window !== 'undefined') {
  window.OrbitalManager = OrbitalManager;
  window.ORBITAL_VERSION = ORBITAL_VERSION;
  window.MODULE_DEFS = MODULE_DEFS;
  window.ORBITAL_TUNING = ORBITAL_TUNING;
}
if (typeof module !== 'undefined') {
  module.exports = { OrbitalManager, MODULE_DEFS, MODULE_ORDER, ORBITAL_TUNING, ORBITAL_EVENTS, SYNERGY_DEFS, ORBITAL_VERSION };
}
