/* 星港 — multiplayer_v31.js：v3.1 联机深化（贸易合作 / 文化交流 / 科研共享）
 * ------------------------------------------------------------------
 * 只新增本文件，不改 index.html / game.js / multiplayer.js / 任何已有文件。
 * 定位：multiplayer.js（v3.0 联机框架）的深化层，不是替代品。
 *   - 有现成 MPMultiplayerManager 房间时：挂在其传输层上收发 v31 消息
 *     （消息类型全部 'v31-*' 前缀，与 MP_MSG_TYPES 不重叠）；
 *   - 无房间时：退化为进程内 V31MPBus（同一页多实例 / 自测用）。
 * 顶层标识符全部 V31 前缀（MultiplayerV31Integration 本身含 V31）；
 * 不声明 MP_* / OVERLAY_MODES / TERRAIN / Population / TUTORIAL_STEPS /
 * DS_TUNE；不碰 localStorage；Node 下可直接加载自测。
 *
 * 子系统：
 *   1. 协议层  V31MP_PROTOCOL_VERSION / V31MP_MSG_TYPES / V31MP_ERRORS
 *   2. 工具层  V31MPUtils / V31MPError / V31MPEventEmitter / V31MPBus
 *   3. 贸易合作 V31MPTradeCoop（联合商队、共享市场）
 *   4. 文化交流 V31MPCultureExchange（作品互访、节日联办）
 *   5. 科研共享 V31MPResearchShare（联合项目、成果交换）
 *   6. 房间同步 V31MPRoomSync（快照 / 增量 / 校验和）
 *   7. 门面层  MultiplayerV31Integration.attach(game)
 *
 * 结算公式（代码内各方法上方均有注释，数值与注释一致）：
 *   商队：毛利 = 货值 × (1+0.04×(人数-1)) × 路线系数 − 手续费；按出资占比分
 *   市场：成交价 = 基准价 × clamp(1+0.5×(需求-供给)/(需求+供给), 0.5, 2)
 *   节日：文化 = 出资和 × (1+0.1×(人数-1))；按出资占比分，满意度加成 = 文化/10
 *   联合项目：进度 += 出资 × (1+0.15×(人数-1))；满 100 完成，全体获成果
 * ------------------------------------------------------------------
 */

'use strict';

/* ================================================================
 * 1. 协议层
 * ================================================================ */

var V31MP_PROTOCOL_VERSION = 31;
var V31MP_PROTOCOL_MIN_COMPAT = 31;
var V31MP_MAX_MEMBERS = 8;
var V31MP_MAX_CARAVANS = 32;
var V31MP_MAX_LISTINGS = 64;
var V31MP_MAX_FESTIVALS = 16;
var V31MP_MAX_PROJECTS = 32;
var V31MP_MAX_LOG = 200;
var V31MP_HOST_FEE = 0.05;
var V31MP_CARAVAN_SYNERGY = 0.04;
var V31MP_FESTIVAL_SYNERGY = 0.10;
var V31MP_RESEARCH_SYNERGY = 0.15;

var V31MP_MSG_TYPES = {
  CARAVAN_CREATE: 'v31-caravan-create',
  CARAVAN_JOIN: 'v31-caravan-join',
  CARAVAN_CONTRIBUTE: 'v31-caravan-contribute',
  CARAVAN_SETTLE: 'v31-caravan-settle',
  MARKET_LIST: 'v31-market-list',
  MARKET_BUY: 'v31-market-buy',
  MARKET_PRICE: 'v31-market-price',
  FESTIVAL_PROPOSE: 'v31-festival-propose',
  FESTIVAL_JOIN: 'v31-festival-join',
  FESTIVAL_CONTRIBUTE: 'v31-festival-contribute',
  FESTIVAL_SETTLE: 'v31-festival-settle',
  TOUR_SEND: 'v31-tour-send',
  TOUR_RECEIVE: 'v31-tour-receive',
  TOUR_COMPLETE: 'v31-tour-complete',
  PROJECT_PROPOSE: 'v31-project-propose',
  PROJECT_JOIN: 'v31-project-join',
  PROJECT_CONTRIBUTE: 'v31-project-contribute',
  PROJECT_COMPLETE: 'v31-project-complete',
  TECH_OFFER: 'v31-tech-offer',
  TECH_ACCEPT: 'v31-tech-accept',
  TECH_REJECT: 'v31-tech-reject',
  SYNC_SNAPSHOT: 'v31-sync-snapshot',
  SYNC_DELTA: 'v31-sync-delta',
  SYNC_HASH: 'v31-sync-hash',
  HELLO_V31: 'v31-hello',
  BYE_V31: 'v31-bye',
};

var V31MP_ERRORS = {
  OK: 0,
  NOT_IN_ROOM: 3101,
  NOT_FOUND: 3102,
  ALREADY_MEMBER: 3103,
  ROOM_FULL: 3104,
  INVALID_AMOUNT: 3105,
  INSUFFICIENT: 3106,
  ALREADY_SETTLED: 3107,
  NOT_HOST: 3108,
  NOT_MEMBER: 3109,
  VERSION_MISMATCH: 3110,
  INVALID_STATE: 3111,
  UNKNOWN: 3199,
};

var V31MP_ERROR_MESSAGES = {
  3101: '不在房间中',
  3102: '对象不存在',
  3103: '已经是成员',
  3104: '房间已满',
  3105: '数量不合法',
  3106: '资源不足',
  3107: '已结算',
  3108: '只有发起人可以执行',
  3109: '不是成员',
  3110: '协议版本不兼容',
  3111: '状态不合法',
  3199: '未知错误',
};

var V31MP_RESOURCE_KEYS = [
  'iron',
  'ice',
  'water',
  'food',
  'steel',
  'rare',
  'tech',
  'uranium',
  'he3',
  'power',
  'credits',
];

var V31MP_OP_TYPES = {
  CARAVAN: 'caravan',
  MARKET: 'market',
  FESTIVAL: 'festival',
  TOUR: 'tour',
  PROJECT: 'project',
  TECH: 'tech',
};

/* ================================================================
 * 2. 工具层
 * ================================================================ */

function V31MPError(code, detail) {
  this.name = 'V31MPError';
  this.code = code || V31MP_ERRORS.UNKNOWN;
  this.message = V31MP_ERROR_MESSAGES[this.code] || V31MP_ERROR_MESSAGES[V31MP_ERRORS.UNKNOWN];
  if (detail) this.message += '：' + detail;
}
V31MPError.prototype = Object.create(Error.prototype);
V31MPError.prototype.constructor = V31MPError;

var V31MPUtils = {
  uid: function (prefix) {
    return (prefix || 'v31') + '-' + Date.now().toString(36) + '-' +
      Math.floor(Math.random() * 46656).toString(36) + '-' + Math.floor(Math.random() * 46656).toString(36);
  },
  shortCode: function (id) { return String(id || '').slice(-6); },
  clamp: function (v, lo, hi) {
    if (typeof v !== 'number' || isNaN(v)) return lo;
    return v < lo ? lo : (v > hi ? hi : v);
  },
  deepClone: function (obj) {
    if (obj == null || typeof obj !== 'object') return obj;
    return JSON.parse(JSON.stringify(obj));
  },
  isValidName: function (name) {
    if (typeof name !== 'string') return false;
    var t = name.trim();
    return t.length >= 1 && t.length <= 32;
  },
  isValidAmount: function (n) {
    return typeof n === 'number' && isFinite(n) && n > 0 && Math.floor(n) === n;
  },
  fnv1a: function (str) {
    var h = 0x811c9dc5;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h.toString(16);
  },
  esc: function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },
  fmt: function (n) {
    if (typeof n !== 'number' || isNaN(n)) return '0';
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 10000) return (n / 1000).toFixed(1) + 'k';
    return String(Math.floor(n));
  },
};

function V31MPEventEmitter() {
  this._v31mpListeners = {};
}
V31MPEventEmitter.prototype.on = function (event, fn) {
  if (!this._v31mpListeners[event]) this._v31mpListeners[event] = [];
  this._v31mpListeners[event].push(fn);
  return this;
};
V31MPEventEmitter.prototype.off = function (event, fn) {
  var list = this._v31mpListeners[event];
  if (!list) return this;
  var idx = list.indexOf(fn);
  if (idx >= 0) list.splice(idx, 1);
  return this;
};
V31MPEventEmitter.prototype.emit = function (event, data) {
  var list = this._v31mpListeners[event];
  if (!list) return this;
  for (var i = 0; i < list.length; i++) {
    try { list[i](data); } catch (e) {}
  }
  return this;
};

/* 进程内总线：无房间时的退化传输（同一页多实例 / 自测）。
 * 与 multiplayer.js 的内存总线解耦，频道名带 v31 前缀，互不干扰。 */
function V31MPBus() {
  this.channels = {};
  this.sentCount = 0;
  this.recvCount = 0;
}
V31MPBus.prototype.subscribe = function (channel, fn) {
  if (!this.channels[channel]) this.channels[channel] = [];
  this.channels[channel].push(fn);
  return this;
};
V31MPBus.prototype.unsubscribe = function (channel, fn) {
  var list = this.channels[channel];
  if (!list) return this;
  var idx = list.indexOf(fn);
  if (idx >= 0) list.splice(idx, 1);
  return this;
};
V31MPBus.prototype.publish = function (channel, env) {
  this.sentCount++;
  var list = this.channels[channel];
  if (!list) return 0;
  var n = 0;
  for (var i = 0; i < list.length; i++) {
    try { list[i](env); this.recvCount++; n++; } catch (e) {}
  }
  return n;
};
var V31MP_BUS = new V31MPBus();

/* ================================================================
 * 3. 贸易合作：联合商队路线 / 共享市场商品（一句话说明）
 * 商队结算：毛利 = 货值 × (1+0.04×(人数-1)) × 路线系数 − 手续费；
 * 路线系数 = 1 + 0.1×dist；手续费 5% 归发起人；其余按出资占比分。
 * ================================================================ */

var V31MP_CARAVAN_ROUTES = [
  {
    id: 'v31mc01',
    dest: '地球·休斯敦港',
    give: 'iron',
    get: 'steel',
    dist: 1,
    unitPrice: 8,
    risk: 0.02,
    desc: '地球·休斯敦港联合商队线：铁矿换钢材，1 级航程',
  },
  {
    id: 'v31mc02',
    dest: '地球·酒泉港',
    give: 'ice',
    get: 'rare',
    dist: 2,
    unitPrice: 15,
    risk: 0.04,
    desc: '地球·酒泉港联合商队线：冰水换稀土，2 级航程',
  },
  {
    id: 'v31mc03',
    dest: '火星·埃律西昂',
    give: 'water',
    get: 'tech',
    dist: 3,
    unitPrice: 22,
    risk: 0.06,
    desc: '火星·埃律西昂联合商队线：水换科技点，3 级航程',
  },
  {
    id: 'v31mc04',
    dest: '火星·水手谷',
    give: 'food',
    get: 'uranium',
    dist: 4,
    unitPrice: 29,
    risk: 0.08,
    desc: '火星·水手谷联合商队线：食物换铀矿，4 级航程',
  },
  {
    id: 'v31mc05',
    dest: '轨道·凤凰站',
    give: 'steel',
    get: 'he3',
    dist: 5,
    unitPrice: 36,
    risk: 0.1,
    desc: '轨道·凤凰站联合商队线：钢材换氦-3，5 级航程',
  },
  {
    id: 'v31mc06',
    dest: '月球·静海基地',
    give: 'rare',
    get: 'power',
    dist: 1,
    unitPrice: 43,
    risk: 0.12,
    desc: '月球·静海基地联合商队线：稀土换电力，1 级航程',
  },
  {
    id: 'v31mc07',
    dest: '小行星·谷神星',
    give: 'tech',
    get: 'credits',
    dist: 2,
    unitPrice: 50,
    risk: 0.02,
    desc: '小行星·谷神星联合商队线：科技点换信用点，2 级航程',
  },
  {
    id: 'v31mc08',
    dest: '木卫二·冰海站',
    give: 'uranium',
    get: 'iron',
    dist: 3,
    unitPrice: 57,
    risk: 0.04,
    desc: '木卫二·冰海站联合商队线：铀矿换铁矿，3 级航程',
  },
  {
    id: 'v31mc09',
    dest: '拉格朗日·L4 集市',
    give: 'he3',
    get: 'ice',
    dist: 4,
    unitPrice: 64,
    risk: 0.06,
    desc: '拉格朗日·L4 集市联合商队线：氦-3换冰水，4 级航程',
  },
  {
    id: 'v31mc10',
    dest: '金星·晨星云城',
    give: 'power',
    get: 'water',
    dist: 5,
    unitPrice: 11,
    risk: 0.08,
    desc: '金星·晨星云城联合商队线：电力换水，5 级航程',
  },
  {
    id: 'v31mc11',
    dest: '火星·奥林匹斯',
    give: 'credits',
    get: 'food',
    dist: 1,
    unitPrice: 18,
    risk: 0.1,
    desc: '火星·奥林匹斯联合商队线：信用点换食物，1 级航程',
  },
  {
    id: 'v31mc12',
    dest: '轨道·天宫环',
    give: 'iron',
    get: 'steel',
    dist: 2,
    unitPrice: 25,
    risk: 0.12,
    desc: '轨道·天宫环联合商队线：铁矿换钢材，2 级航程',
  },
  {
    id: 'v31mc13',
    dest: '地球·休斯敦港',
    give: 'ice',
    get: 'rare',
    dist: 3,
    unitPrice: 32,
    risk: 0.02,
    desc: '地球·休斯敦港联合商队线：冰水换稀土，3 级航程',
  },
  {
    id: 'v31mc14',
    dest: '地球·酒泉港',
    give: 'water',
    get: 'tech',
    dist: 4,
    unitPrice: 39,
    risk: 0.04,
    desc: '地球·酒泉港联合商队线：水换科技点，4 级航程',
  },
  {
    id: 'v31mc15',
    dest: '火星·埃律西昂',
    give: 'food',
    get: 'uranium',
    dist: 5,
    unitPrice: 46,
    risk: 0.06,
    desc: '火星·埃律西昂联合商队线：食物换铀矿，5 级航程',
  },
  {
    id: 'v31mc16',
    dest: '火星·水手谷',
    give: 'steel',
    get: 'he3',
    dist: 1,
    unitPrice: 53,
    risk: 0.08,
    desc: '火星·水手谷联合商队线：钢材换氦-3，1 级航程',
  },
  {
    id: 'v31mc17',
    dest: '轨道·凤凰站',
    give: 'rare',
    get: 'power',
    dist: 2,
    unitPrice: 60,
    risk: 0.1,
    desc: '轨道·凤凰站联合商队线：稀土换电力，2 级航程',
  },
  {
    id: 'v31mc18',
    dest: '月球·静海基地',
    give: 'tech',
    get: 'credits',
    dist: 3,
    unitPrice: 67,
    risk: 0.12,
    desc: '月球·静海基地联合商队线：科技点换信用点，3 级航程',
  },
  {
    id: 'v31mc19',
    dest: '小行星·谷神星',
    give: 'uranium',
    get: 'iron',
    dist: 4,
    unitPrice: 14,
    risk: 0.02,
    desc: '小行星·谷神星联合商队线：铀矿换铁矿，4 级航程',
  },
  {
    id: 'v31mc20',
    dest: '木卫二·冰海站',
    give: 'he3',
    get: 'ice',
    dist: 5,
    unitPrice: 21,
    risk: 0.04,
    desc: '木卫二·冰海站联合商队线：氦-3换冰水，5 级航程',
  },
  {
    id: 'v31mc21',
    dest: '拉格朗日·L4 集市',
    give: 'power',
    get: 'water',
    dist: 1,
    unitPrice: 28,
    risk: 0.06,
    desc: '拉格朗日·L4 集市联合商队线：电力换水，1 级航程',
  },
  {
    id: 'v31mc22',
    dest: '金星·晨星云城',
    give: 'credits',
    get: 'food',
    dist: 2,
    unitPrice: 35,
    risk: 0.08,
    desc: '金星·晨星云城联合商队线：信用点换食物，2 级航程',
  },
  {
    id: 'v31mc23',
    dest: '火星·奥林匹斯',
    give: 'iron',
    get: 'steel',
    dist: 3,
    unitPrice: 42,
    risk: 0.1,
    desc: '火星·奥林匹斯联合商队线：铁矿换钢材，3 级航程',
  },
  {
    id: 'v31mc24',
    dest: '轨道·天宫环',
    give: 'ice',
    get: 'rare',
    dist: 4,
    unitPrice: 49,
    risk: 0.12,
    desc: '轨道·天宫环联合商队线：冰水换稀土，4 级航程',
  },
  {
    id: 'v31mc25',
    dest: '地球·休斯敦港',
    give: 'water',
    get: 'tech',
    dist: 5,
    unitPrice: 56,
    risk: 0.02,
    desc: '地球·休斯敦港联合商队线：水换科技点，5 级航程',
  },
  {
    id: 'v31mc26',
    dest: '地球·酒泉港',
    give: 'food',
    get: 'uranium',
    dist: 1,
    unitPrice: 63,
    risk: 0.04,
    desc: '地球·酒泉港联合商队线：食物换铀矿，1 级航程',
  },
  {
    id: 'v31mc27',
    dest: '火星·埃律西昂',
    give: 'steel',
    get: 'he3',
    dist: 2,
    unitPrice: 10,
    risk: 0.06,
    desc: '火星·埃律西昂联合商队线：钢材换氦-3，2 级航程',
  },
  {
    id: 'v31mc28',
    dest: '火星·水手谷',
    give: 'rare',
    get: 'power',
    dist: 3,
    unitPrice: 17,
    risk: 0.08,
    desc: '火星·水手谷联合商队线：稀土换电力，3 级航程',
  },
  {
    id: 'v31mc29',
    dest: '轨道·凤凰站',
    give: 'tech',
    get: 'credits',
    dist: 4,
    unitPrice: 24,
    risk: 0.1,
    desc: '轨道·凤凰站联合商队线：科技点换信用点，4 级航程',
  },
  {
    id: 'v31mc30',
    dest: '月球·静海基地',
    give: 'uranium',
    get: 'iron',
    dist: 5,
    unitPrice: 31,
    risk: 0.12,
    desc: '月球·静海基地联合商队线：铀矿换铁矿，5 级航程',
  },
  {
    id: 'v31mc31',
    dest: '小行星·谷神星',
    give: 'he3',
    get: 'ice',
    dist: 1,
    unitPrice: 38,
    risk: 0.02,
    desc: '小行星·谷神星联合商队线：氦-3换冰水，1 级航程',
  },
  {
    id: 'v31mc32',
    dest: '木卫二·冰海站',
    give: 'power',
    get: 'water',
    dist: 2,
    unitPrice: 45,
    risk: 0.04,
    desc: '木卫二·冰海站联合商队线：电力换水，2 级航程',
  },
  {
    id: 'v31mc33',
    dest: '拉格朗日·L4 集市',
    give: 'credits',
    get: 'food',
    dist: 3,
    unitPrice: 52,
    risk: 0.06,
    desc: '拉格朗日·L4 集市联合商队线：信用点换食物，3 级航程',
  },
  {
    id: 'v31mc34',
    dest: '金星·晨星云城',
    give: 'iron',
    get: 'steel',
    dist: 4,
    unitPrice: 59,
    risk: 0.08,
    desc: '金星·晨星云城联合商队线：铁矿换钢材，4 级航程',
  },
  {
    id: 'v31mc35',
    dest: '火星·奥林匹斯',
    give: 'ice',
    get: 'rare',
    dist: 5,
    unitPrice: 66,
    risk: 0.1,
    desc: '火星·奥林匹斯联合商队线：冰水换稀土，5 级航程',
  },
  {
    id: 'v31mc36',
    dest: '轨道·天宫环',
    give: 'water',
    get: 'tech',
    dist: 1,
    unitPrice: 13,
    risk: 0.12,
    desc: '轨道·天宫环联合商队线：水换科技点，1 级航程',
  },
  {
    id: 'v31mc37',
    dest: '地球·休斯敦港',
    give: 'food',
    get: 'uranium',
    dist: 2,
    unitPrice: 20,
    risk: 0.02,
    desc: '地球·休斯敦港联合商队线：食物换铀矿，2 级航程',
  },
  {
    id: 'v31mc38',
    dest: '地球·酒泉港',
    give: 'steel',
    get: 'he3',
    dist: 3,
    unitPrice: 27,
    risk: 0.04,
    desc: '地球·酒泉港联合商队线：钢材换氦-3，3 级航程',
  },
  {
    id: 'v31mc39',
    dest: '火星·埃律西昂',
    give: 'rare',
    get: 'power',
    dist: 4,
    unitPrice: 34,
    risk: 0.06,
    desc: '火星·埃律西昂联合商队线：稀土换电力，4 级航程',
  },
  {
    id: 'v31mc40',
    dest: '火星·水手谷',
    give: 'tech',
    get: 'credits',
    dist: 5,
    unitPrice: 41,
    risk: 0.08,
    desc: '火星·水手谷联合商队线：科技点换信用点，5 级航程',
  },
  {
    id: 'v31mc41',
    dest: '轨道·凤凰站',
    give: 'uranium',
    get: 'iron',
    dist: 1,
    unitPrice: 48,
    risk: 0.1,
    desc: '轨道·凤凰站联合商队线：铀矿换铁矿，1 级航程',
  },
  {
    id: 'v31mc42',
    dest: '月球·静海基地',
    give: 'he3',
    get: 'ice',
    dist: 2,
    unitPrice: 55,
    risk: 0.12,
    desc: '月球·静海基地联合商队线：氦-3换冰水，2 级航程',
  },
  {
    id: 'v31mc43',
    dest: '小行星·谷神星',
    give: 'power',
    get: 'water',
    dist: 3,
    unitPrice: 62,
    risk: 0.02,
    desc: '小行星·谷神星联合商队线：电力换水，3 级航程',
  },
  {
    id: 'v31mc44',
    dest: '木卫二·冰海站',
    give: 'credits',
    get: 'food',
    dist: 4,
    unitPrice: 9,
    risk: 0.04,
    desc: '木卫二·冰海站联合商队线：信用点换食物，4 级航程',
  },
  {
    id: 'v31mc45',
    dest: '拉格朗日·L4 集市',
    give: 'iron',
    get: 'steel',
    dist: 5,
    unitPrice: 16,
    risk: 0.06,
    desc: '拉格朗日·L4 集市联合商队线：铁矿换钢材，5 级航程',
  },
  {
    id: 'v31mc46',
    dest: '金星·晨星云城',
    give: 'ice',
    get: 'rare',
    dist: 1,
    unitPrice: 23,
    risk: 0.08,
    desc: '金星·晨星云城联合商队线：冰水换稀土，1 级航程',
  },
  {
    id: 'v31mc47',
    dest: '火星·奥林匹斯',
    give: 'water',
    get: 'tech',
    dist: 2,
    unitPrice: 30,
    risk: 0.1,
    desc: '火星·奥林匹斯联合商队线：水换科技点，2 级航程',
  },
  {
    id: 'v31mc48',
    dest: '轨道·天宫环',
    give: 'food',
    get: 'uranium',
    dist: 3,
    unitPrice: 37,
    risk: 0.12,
    desc: '轨道·天宫环联合商队线：食物换铀矿，3 级航程',
  },
  {
    id: 'v31mc49',
    dest: '地球·休斯敦港',
    give: 'steel',
    get: 'he3',
    dist: 4,
    unitPrice: 44,
    risk: 0.02,
    desc: '地球·休斯敦港联合商队线：钢材换氦-3，4 级航程',
  },
  {
    id: 'v31mc50',
    dest: '地球·酒泉港',
    give: 'rare',
    get: 'power',
    dist: 5,
    unitPrice: 51,
    risk: 0.04,
    desc: '地球·酒泉港联合商队线：稀土换电力，5 级航程',
  },
  {
    id: 'v31mc51',
    dest: '火星·埃律西昂',
    give: 'tech',
    get: 'credits',
    dist: 1,
    unitPrice: 58,
    risk: 0.06,
    desc: '火星·埃律西昂联合商队线：科技点换信用点，1 级航程',
  },
  {
    id: 'v31mc52',
    dest: '火星·水手谷',
    give: 'uranium',
    get: 'iron',
    dist: 2,
    unitPrice: 65,
    risk: 0.08,
    desc: '火星·水手谷联合商队线：铀矿换铁矿，2 级航程',
  },
  {
    id: 'v31mc53',
    dest: '轨道·凤凰站',
    give: 'he3',
    get: 'ice',
    dist: 3,
    unitPrice: 12,
    risk: 0.1,
    desc: '轨道·凤凰站联合商队线：氦-3换冰水，3 级航程',
  },
  {
    id: 'v31mc54',
    dest: '月球·静海基地',
    give: 'power',
    get: 'water',
    dist: 4,
    unitPrice: 19,
    risk: 0.12,
    desc: '月球·静海基地联合商队线：电力换水，4 级航程',
  },
  {
    id: 'v31mc55',
    dest: '小行星·谷神星',
    give: 'credits',
    get: 'food',
    dist: 5,
    unitPrice: 26,
    risk: 0.02,
    desc: '小行星·谷神星联合商队线：信用点换食物，5 级航程',
  },
  {
    id: 'v31mc56',
    dest: '木卫二·冰海站',
    give: 'iron',
    get: 'steel',
    dist: 1,
    unitPrice: 33,
    risk: 0.04,
    desc: '木卫二·冰海站联合商队线：铁矿换钢材，1 级航程',
  },
  {
    id: 'v31mc57',
    dest: '拉格朗日·L4 集市',
    give: 'ice',
    get: 'rare',
    dist: 2,
    unitPrice: 40,
    risk: 0.06,
    desc: '拉格朗日·L4 集市联合商队线：冰水换稀土，2 级航程',
  },
  {
    id: 'v31mc58',
    dest: '金星·晨星云城',
    give: 'water',
    get: 'tech',
    dist: 3,
    unitPrice: 47,
    risk: 0.08,
    desc: '金星·晨星云城联合商队线：水换科技点，3 级航程',
  },
  {
    id: 'v31mc59',
    dest: '火星·奥林匹斯',
    give: 'food',
    get: 'uranium',
    dist: 4,
    unitPrice: 54,
    risk: 0.1,
    desc: '火星·奥林匹斯联合商队线：食物换铀矿，4 级航程',
  },
  {
    id: 'v31mc60',
    dest: '轨道·天宫环',
    give: 'steel',
    get: 'he3',
    dist: 5,
    unitPrice: 61,
    risk: 0.12,
    desc: '轨道·天宫环联合商队线：钢材换氦-3，5 级航程',
  },
  {
    id: 'v31mc61',
    dest: '地球·休斯敦港',
    give: 'rare',
    get: 'power',
    dist: 1,
    unitPrice: 8,
    risk: 0.02,
    desc: '地球·休斯敦港联合商队线：稀土换电力，1 级航程',
  },
  {
    id: 'v31mc62',
    dest: '地球·酒泉港',
    give: 'tech',
    get: 'credits',
    dist: 2,
    unitPrice: 15,
    risk: 0.04,
    desc: '地球·酒泉港联合商队线：科技点换信用点，2 级航程',
  },
  {
    id: 'v31mc63',
    dest: '火星·埃律西昂',
    give: 'uranium',
    get: 'iron',
    dist: 3,
    unitPrice: 22,
    risk: 0.06,
    desc: '火星·埃律西昂联合商队线：铀矿换铁矿，3 级航程',
  },
  {
    id: 'v31mc64',
    dest: '火星·水手谷',
    give: 'he3',
    get: 'ice',
    dist: 4,
    unitPrice: 29,
    risk: 0.08,
    desc: '火星·水手谷联合商队线：氦-3换冰水，4 级航程',
  },
  {
    id: 'v31mc65',
    dest: '轨道·凤凰站',
    give: 'power',
    get: 'water',
    dist: 5,
    unitPrice: 36,
    risk: 0.1,
    desc: '轨道·凤凰站联合商队线：电力换水，5 级航程',
  },
  {
    id: 'v31mc66',
    dest: '月球·静海基地',
    give: 'credits',
    get: 'food',
    dist: 1,
    unitPrice: 43,
    risk: 0.12,
    desc: '月球·静海基地联合商队线：信用点换食物，1 级航程',
  },
  {
    id: 'v31mc67',
    dest: '小行星·谷神星',
    give: 'iron',
    get: 'steel',
    dist: 2,
    unitPrice: 50,
    risk: 0.02,
    desc: '小行星·谷神星联合商队线：铁矿换钢材，2 级航程',
  },
  {
    id: 'v31mc68',
    dest: '木卫二·冰海站',
    give: 'ice',
    get: 'rare',
    dist: 3,
    unitPrice: 57,
    risk: 0.04,
    desc: '木卫二·冰海站联合商队线：冰水换稀土，3 级航程',
  },
  {
    id: 'v31mc69',
    dest: '拉格朗日·L4 集市',
    give: 'water',
    get: 'tech',
    dist: 4,
    unitPrice: 64,
    risk: 0.06,
    desc: '拉格朗日·L4 集市联合商队线：水换科技点，4 级航程',
  },
  {
    id: 'v31mc70',
    dest: '金星·晨星云城',
    give: 'food',
    get: 'uranium',
    dist: 5,
    unitPrice: 11,
    risk: 0.08,
    desc: '金星·晨星云城联合商队线：食物换铀矿，5 级航程',
  },
  {
    id: 'v31mc71',
    dest: '火星·奥林匹斯',
    give: 'steel',
    get: 'he3',
    dist: 1,
    unitPrice: 18,
    risk: 0.1,
    desc: '火星·奥林匹斯联合商队线：钢材换氦-3，1 级航程',
  },
  {
    id: 'v31mc72',
    dest: '轨道·天宫环',
    give: 'rare',
    get: 'power',
    dist: 2,
    unitPrice: 25,
    risk: 0.12,
    desc: '轨道·天宫环联合商队线：稀土换电力，2 级航程',
  },
  {
    id: 'v31mc73',
    dest: '地球·休斯敦港',
    give: 'tech',
    get: 'credits',
    dist: 3,
    unitPrice: 32,
    risk: 0.02,
    desc: '地球·休斯敦港联合商队线：科技点换信用点，3 级航程',
  },
  {
    id: 'v31mc74',
    dest: '地球·酒泉港',
    give: 'uranium',
    get: 'iron',
    dist: 4,
    unitPrice: 39,
    risk: 0.04,
    desc: '地球·酒泉港联合商队线：铀矿换铁矿，4 级航程',
  },
  {
    id: 'v31mc75',
    dest: '火星·埃律西昂',
    give: 'he3',
    get: 'ice',
    dist: 5,
    unitPrice: 46,
    risk: 0.06,
    desc: '火星·埃律西昂联合商队线：氦-3换冰水，5 级航程',
  },
  {
    id: 'v31mc76',
    dest: '火星·水手谷',
    give: 'power',
    get: 'water',
    dist: 1,
    unitPrice: 53,
    risk: 0.08,
    desc: '火星·水手谷联合商队线：电力换水，1 级航程',
  },
  {
    id: 'v31mc77',
    dest: '轨道·凤凰站',
    give: 'credits',
    get: 'food',
    dist: 2,
    unitPrice: 60,
    risk: 0.1,
    desc: '轨道·凤凰站联合商队线：信用点换食物，2 级航程',
  },
  {
    id: 'v31mc78',
    dest: '月球·静海基地',
    give: 'iron',
    get: 'steel',
    dist: 3,
    unitPrice: 67,
    risk: 0.12,
    desc: '月球·静海基地联合商队线：铁矿换钢材，3 级航程',
  },
  {
    id: 'v31mc79',
    dest: '小行星·谷神星',
    give: 'ice',
    get: 'rare',
    dist: 4,
    unitPrice: 14,
    risk: 0.02,
    desc: '小行星·谷神星联合商队线：冰水换稀土，4 级航程',
  },
  {
    id: 'v31mc80',
    dest: '木卫二·冰海站',
    give: 'water',
    get: 'tech',
    dist: 5,
    unitPrice: 21,
    risk: 0.04,
    desc: '木卫二·冰海站联合商队线：水换科技点，5 级航程',
  },
  {
    id: 'v31mc81',
    dest: '拉格朗日·L4 集市',
    give: 'food',
    get: 'uranium',
    dist: 1,
    unitPrice: 28,
    risk: 0.06,
    desc: '拉格朗日·L4 集市联合商队线：食物换铀矿，1 级航程',
  },
  {
    id: 'v31mc82',
    dest: '金星·晨星云城',
    give: 'steel',
    get: 'he3',
    dist: 2,
    unitPrice: 35,
    risk: 0.08,
    desc: '金星·晨星云城联合商队线：钢材换氦-3，2 级航程',
  },
  {
    id: 'v31mc83',
    dest: '火星·奥林匹斯',
    give: 'rare',
    get: 'power',
    dist: 3,
    unitPrice: 42,
    risk: 0.1,
    desc: '火星·奥林匹斯联合商队线：稀土换电力，3 级航程',
  },
  {
    id: 'v31mc84',
    dest: '轨道·天宫环',
    give: 'tech',
    get: 'credits',
    dist: 4,
    unitPrice: 49,
    risk: 0.12,
    desc: '轨道·天宫环联合商队线：科技点换信用点，4 级航程',
  },
  {
    id: 'v31mc85',
    dest: '地球·休斯敦港',
    give: 'uranium',
    get: 'iron',
    dist: 5,
    unitPrice: 56,
    risk: 0.02,
    desc: '地球·休斯敦港联合商队线：铀矿换铁矿，5 级航程',
  },
  {
    id: 'v31mc86',
    dest: '地球·酒泉港',
    give: 'he3',
    get: 'ice',
    dist: 1,
    unitPrice: 63,
    risk: 0.04,
    desc: '地球·酒泉港联合商队线：氦-3换冰水，1 级航程',
  },
  {
    id: 'v31mc87',
    dest: '火星·埃律西昂',
    give: 'power',
    get: 'water',
    dist: 2,
    unitPrice: 10,
    risk: 0.06,
    desc: '火星·埃律西昂联合商队线：电力换水，2 级航程',
  },
  {
    id: 'v31mc88',
    dest: '火星·水手谷',
    give: 'credits',
    get: 'food',
    dist: 3,
    unitPrice: 17,
    risk: 0.08,
    desc: '火星·水手谷联合商队线：信用点换食物，3 级航程',
  },
  {
    id: 'v31mc89',
    dest: '轨道·凤凰站',
    give: 'iron',
    get: 'steel',
    dist: 4,
    unitPrice: 24,
    risk: 0.1,
    desc: '轨道·凤凰站联合商队线：铁矿换钢材，4 级航程',
  },
  {
    id: 'v31mc90',
    dest: '月球·静海基地',
    give: 'ice',
    get: 'rare',
    dist: 5,
    unitPrice: 31,
    risk: 0.12,
    desc: '月球·静海基地联合商队线：冰水换稀土，5 级航程',
  },
  {
    id: 'v31mc91',
    dest: '小行星·谷神星',
    give: 'water',
    get: 'tech',
    dist: 1,
    unitPrice: 38,
    risk: 0.02,
    desc: '小行星·谷神星联合商队线：水换科技点，1 级航程',
  },
  {
    id: 'v31mc92',
    dest: '木卫二·冰海站',
    give: 'food',
    get: 'uranium',
    dist: 2,
    unitPrice: 45,
    risk: 0.04,
    desc: '木卫二·冰海站联合商队线：食物换铀矿，2 级航程',
  },
  {
    id: 'v31mc93',
    dest: '拉格朗日·L4 集市',
    give: 'steel',
    get: 'he3',
    dist: 3,
    unitPrice: 52,
    risk: 0.06,
    desc: '拉格朗日·L4 集市联合商队线：钢材换氦-3，3 级航程',
  },
  {
    id: 'v31mc94',
    dest: '金星·晨星云城',
    give: 'rare',
    get: 'power',
    dist: 4,
    unitPrice: 59,
    risk: 0.08,
    desc: '金星·晨星云城联合商队线：稀土换电力，4 级航程',
  },
  {
    id: 'v31mc95',
    dest: '火星·奥林匹斯',
    give: 'tech',
    get: 'credits',
    dist: 5,
    unitPrice: 66,
    risk: 0.1,
    desc: '火星·奥林匹斯联合商队线：科技点换信用点，5 级航程',
  },
  {
    id: 'v31mc96',
    dest: '轨道·天宫环',
    give: 'uranium',
    get: 'iron',
    dist: 1,
    unitPrice: 13,
    risk: 0.12,
    desc: '轨道·天宫环联合商队线：铀矿换铁矿，1 级航程',
  },
];

var V31MP_MARKET_GOODS = [
  {
    id: 'v31mg01',
    res: 'iron',
    name: '铁矿共享现货',
    basePrice: 6,
    demand: 10,
    supply: 10,
    desc: '铁矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg02',
    res: 'ice',
    name: '冰水共享现货',
    basePrice: 17,
    demand: 27,
    supply: 33,
    desc: '冰水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg03',
    res: 'water',
    name: '水共享现货',
    basePrice: 28,
    demand: 44,
    supply: 56,
    desc: '水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg04',
    res: 'food',
    name: '食物共享现货',
    basePrice: 39,
    demand: 61,
    supply: 79,
    desc: '食物共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg05',
    res: 'steel',
    name: '钢材共享现货',
    basePrice: 50,
    demand: 78,
    supply: 12,
    desc: '钢材共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg06',
    res: 'rare',
    name: '稀土共享现货',
    basePrice: 61,
    demand: 95,
    supply: 35,
    desc: '稀土共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg07',
    res: 'tech',
    name: '科技点共享现货',
    basePrice: 72,
    demand: 22,
    supply: 58,
    desc: '科技点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg08',
    res: 'uranium',
    name: '铀矿共享现货',
    basePrice: 83,
    demand: 39,
    supply: 81,
    desc: '铀矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg09',
    res: 'he3',
    name: '氦-3共享现货',
    basePrice: 14,
    demand: 56,
    supply: 14,
    desc: '氦-3共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg10',
    res: 'power',
    name: '电力共享现货',
    basePrice: 25,
    demand: 73,
    supply: 37,
    desc: '电力共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg11',
    res: 'credits',
    name: '信用点共享现货',
    basePrice: 36,
    demand: 90,
    supply: 60,
    desc: '信用点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg12',
    res: 'iron',
    name: '铁矿共享现货',
    basePrice: 47,
    demand: 17,
    supply: 83,
    desc: '铁矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg13',
    res: 'ice',
    name: '冰水共享现货',
    basePrice: 58,
    demand: 34,
    supply: 16,
    desc: '冰水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg14',
    res: 'water',
    name: '水共享现货',
    basePrice: 69,
    demand: 51,
    supply: 39,
    desc: '水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg15',
    res: 'food',
    name: '食物共享现货',
    basePrice: 80,
    demand: 68,
    supply: 62,
    desc: '食物共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg16',
    res: 'steel',
    name: '钢材共享现货',
    basePrice: 11,
    demand: 85,
    supply: 85,
    desc: '钢材共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg17',
    res: 'rare',
    name: '稀土共享现货',
    basePrice: 22,
    demand: 12,
    supply: 18,
    desc: '稀土共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg18',
    res: 'tech',
    name: '科技点共享现货',
    basePrice: 33,
    demand: 29,
    supply: 41,
    desc: '科技点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg19',
    res: 'uranium',
    name: '铀矿共享现货',
    basePrice: 44,
    demand: 46,
    supply: 64,
    desc: '铀矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg20',
    res: 'he3',
    name: '氦-3共享现货',
    basePrice: 55,
    demand: 63,
    supply: 87,
    desc: '氦-3共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg21',
    res: 'power',
    name: '电力共享现货',
    basePrice: 66,
    demand: 80,
    supply: 20,
    desc: '电力共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg22',
    res: 'credits',
    name: '信用点共享现货',
    basePrice: 77,
    demand: 97,
    supply: 43,
    desc: '信用点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg23',
    res: 'iron',
    name: '铁矿共享现货',
    basePrice: 8,
    demand: 24,
    supply: 66,
    desc: '铁矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg24',
    res: 'ice',
    name: '冰水共享现货',
    basePrice: 19,
    demand: 41,
    supply: 89,
    desc: '冰水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg25',
    res: 'water',
    name: '水共享现货',
    basePrice: 30,
    demand: 58,
    supply: 22,
    desc: '水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg26',
    res: 'food',
    name: '食物共享现货',
    basePrice: 41,
    demand: 75,
    supply: 45,
    desc: '食物共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg27',
    res: 'steel',
    name: '钢材共享现货',
    basePrice: 52,
    demand: 92,
    supply: 68,
    desc: '钢材共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg28',
    res: 'rare',
    name: '稀土共享现货',
    basePrice: 63,
    demand: 19,
    supply: 91,
    desc: '稀土共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg29',
    res: 'tech',
    name: '科技点共享现货',
    basePrice: 74,
    demand: 36,
    supply: 24,
    desc: '科技点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg30',
    res: 'uranium',
    name: '铀矿共享现货',
    basePrice: 85,
    demand: 53,
    supply: 47,
    desc: '铀矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg31',
    res: 'he3',
    name: '氦-3共享现货',
    basePrice: 16,
    demand: 70,
    supply: 70,
    desc: '氦-3共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg32',
    res: 'power',
    name: '电力共享现货',
    basePrice: 27,
    demand: 87,
    supply: 93,
    desc: '电力共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg33',
    res: 'credits',
    name: '信用点共享现货',
    basePrice: 38,
    demand: 14,
    supply: 26,
    desc: '信用点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg34',
    res: 'iron',
    name: '铁矿共享现货',
    basePrice: 49,
    demand: 31,
    supply: 49,
    desc: '铁矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg35',
    res: 'ice',
    name: '冰水共享现货',
    basePrice: 60,
    demand: 48,
    supply: 72,
    desc: '冰水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg36',
    res: 'water',
    name: '水共享现货',
    basePrice: 71,
    demand: 65,
    supply: 95,
    desc: '水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg37',
    res: 'food',
    name: '食物共享现货',
    basePrice: 82,
    demand: 82,
    supply: 28,
    desc: '食物共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg38',
    res: 'steel',
    name: '钢材共享现货',
    basePrice: 13,
    demand: 99,
    supply: 51,
    desc: '钢材共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg39',
    res: 'rare',
    name: '稀土共享现货',
    basePrice: 24,
    demand: 26,
    supply: 74,
    desc: '稀土共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg40',
    res: 'tech',
    name: '科技点共享现货',
    basePrice: 35,
    demand: 43,
    supply: 97,
    desc: '科技点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg41',
    res: 'uranium',
    name: '铀矿共享现货',
    basePrice: 46,
    demand: 60,
    supply: 30,
    desc: '铀矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg42',
    res: 'he3',
    name: '氦-3共享现货',
    basePrice: 57,
    demand: 77,
    supply: 53,
    desc: '氦-3共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg43',
    res: 'power',
    name: '电力共享现货',
    basePrice: 68,
    demand: 94,
    supply: 76,
    desc: '电力共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg44',
    res: 'credits',
    name: '信用点共享现货',
    basePrice: 79,
    demand: 21,
    supply: 99,
    desc: '信用点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg45',
    res: 'iron',
    name: '铁矿共享现货',
    basePrice: 10,
    demand: 38,
    supply: 32,
    desc: '铁矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg46',
    res: 'ice',
    name: '冰水共享现货',
    basePrice: 21,
    demand: 55,
    supply: 55,
    desc: '冰水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg47',
    res: 'water',
    name: '水共享现货',
    basePrice: 32,
    demand: 72,
    supply: 78,
    desc: '水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg48',
    res: 'food',
    name: '食物共享现货',
    basePrice: 43,
    demand: 89,
    supply: 11,
    desc: '食物共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg49',
    res: 'steel',
    name: '钢材共享现货·2批',
    basePrice: 54,
    demand: 16,
    supply: 34,
    desc: '钢材共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg50',
    res: 'rare',
    name: '稀土共享现货·2批',
    basePrice: 65,
    demand: 33,
    supply: 57,
    desc: '稀土共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg51',
    res: 'tech',
    name: '科技点共享现货·2批',
    basePrice: 76,
    demand: 50,
    supply: 80,
    desc: '科技点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg52',
    res: 'uranium',
    name: '铀矿共享现货·2批',
    basePrice: 7,
    demand: 67,
    supply: 13,
    desc: '铀矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg53',
    res: 'he3',
    name: '氦-3共享现货·2批',
    basePrice: 18,
    demand: 84,
    supply: 36,
    desc: '氦-3共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg54',
    res: 'power',
    name: '电力共享现货·2批',
    basePrice: 29,
    demand: 11,
    supply: 59,
    desc: '电力共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg55',
    res: 'credits',
    name: '信用点共享现货·2批',
    basePrice: 40,
    demand: 28,
    supply: 82,
    desc: '信用点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg56',
    res: 'iron',
    name: '铁矿共享现货·2批',
    basePrice: 51,
    demand: 45,
    supply: 15,
    desc: '铁矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg57',
    res: 'ice',
    name: '冰水共享现货·2批',
    basePrice: 62,
    demand: 62,
    supply: 38,
    desc: '冰水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg58',
    res: 'water',
    name: '水共享现货·2批',
    basePrice: 73,
    demand: 79,
    supply: 61,
    desc: '水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg59',
    res: 'food',
    name: '食物共享现货·2批',
    basePrice: 84,
    demand: 96,
    supply: 84,
    desc: '食物共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg60',
    res: 'steel',
    name: '钢材共享现货·2批',
    basePrice: 15,
    demand: 23,
    supply: 17,
    desc: '钢材共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg61',
    res: 'rare',
    name: '稀土共享现货·2批',
    basePrice: 26,
    demand: 40,
    supply: 40,
    desc: '稀土共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg62',
    res: 'tech',
    name: '科技点共享现货·2批',
    basePrice: 37,
    demand: 57,
    supply: 63,
    desc: '科技点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg63',
    res: 'uranium',
    name: '铀矿共享现货·2批',
    basePrice: 48,
    demand: 74,
    supply: 86,
    desc: '铀矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg64',
    res: 'he3',
    name: '氦-3共享现货·2批',
    basePrice: 59,
    demand: 91,
    supply: 19,
    desc: '氦-3共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg65',
    res: 'power',
    name: '电力共享现货·2批',
    basePrice: 70,
    demand: 18,
    supply: 42,
    desc: '电力共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg66',
    res: 'credits',
    name: '信用点共享现货·2批',
    basePrice: 81,
    demand: 35,
    supply: 65,
    desc: '信用点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg67',
    res: 'iron',
    name: '铁矿共享现货·2批',
    basePrice: 12,
    demand: 52,
    supply: 88,
    desc: '铁矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg68',
    res: 'ice',
    name: '冰水共享现货·2批',
    basePrice: 23,
    demand: 69,
    supply: 21,
    desc: '冰水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg69',
    res: 'water',
    name: '水共享现货·2批',
    basePrice: 34,
    demand: 86,
    supply: 44,
    desc: '水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg70',
    res: 'food',
    name: '食物共享现货·2批',
    basePrice: 45,
    demand: 13,
    supply: 67,
    desc: '食物共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg71',
    res: 'steel',
    name: '钢材共享现货·2批',
    basePrice: 56,
    demand: 30,
    supply: 90,
    desc: '钢材共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg72',
    res: 'rare',
    name: '稀土共享现货·2批',
    basePrice: 67,
    demand: 47,
    supply: 23,
    desc: '稀土共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg73',
    res: 'tech',
    name: '科技点共享现货·2批',
    basePrice: 78,
    demand: 64,
    supply: 46,
    desc: '科技点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg74',
    res: 'uranium',
    name: '铀矿共享现货·2批',
    basePrice: 9,
    demand: 81,
    supply: 69,
    desc: '铀矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg75',
    res: 'he3',
    name: '氦-3共享现货·2批',
    basePrice: 20,
    demand: 98,
    supply: 92,
    desc: '氦-3共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg76',
    res: 'power',
    name: '电力共享现货·2批',
    basePrice: 31,
    demand: 25,
    supply: 25,
    desc: '电力共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg77',
    res: 'credits',
    name: '信用点共享现货·2批',
    basePrice: 42,
    demand: 42,
    supply: 48,
    desc: '信用点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg78',
    res: 'iron',
    name: '铁矿共享现货·2批',
    basePrice: 53,
    demand: 59,
    supply: 71,
    desc: '铁矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg79',
    res: 'ice',
    name: '冰水共享现货·2批',
    basePrice: 64,
    demand: 76,
    supply: 94,
    desc: '冰水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg80',
    res: 'water',
    name: '水共享现货·2批',
    basePrice: 75,
    demand: 93,
    supply: 27,
    desc: '水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg81',
    res: 'food',
    name: '食物共享现货·2批',
    basePrice: 6,
    demand: 20,
    supply: 50,
    desc: '食物共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg82',
    res: 'steel',
    name: '钢材共享现货·2批',
    basePrice: 17,
    demand: 37,
    supply: 73,
    desc: '钢材共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg83',
    res: 'rare',
    name: '稀土共享现货·2批',
    basePrice: 28,
    demand: 54,
    supply: 96,
    desc: '稀土共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg84',
    res: 'tech',
    name: '科技点共享现货·2批',
    basePrice: 39,
    demand: 71,
    supply: 29,
    desc: '科技点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg85',
    res: 'uranium',
    name: '铀矿共享现货·2批',
    basePrice: 50,
    demand: 88,
    supply: 52,
    desc: '铀矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg86',
    res: 'he3',
    name: '氦-3共享现货·2批',
    basePrice: 61,
    demand: 15,
    supply: 75,
    desc: '氦-3共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg87',
    res: 'power',
    name: '电力共享现货·2批',
    basePrice: 72,
    demand: 32,
    supply: 98,
    desc: '电力共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg88',
    res: 'credits',
    name: '信用点共享现货·2批',
    basePrice: 83,
    demand: 49,
    supply: 31,
    desc: '信用点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg89',
    res: 'iron',
    name: '铁矿共享现货·2批',
    basePrice: 14,
    demand: 66,
    supply: 54,
    desc: '铁矿共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg90',
    res: 'ice',
    name: '冰水共享现货·2批',
    basePrice: 25,
    demand: 83,
    supply: 77,
    desc: '冰水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg91',
    res: 'water',
    name: '水共享现货·2批',
    basePrice: 36,
    demand: 10,
    supply: 10,
    desc: '水共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg92',
    res: 'food',
    name: '食物共享现货·2批',
    basePrice: 47,
    demand: 27,
    supply: 33,
    desc: '食物共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg93',
    res: 'steel',
    name: '钢材共享现货·2批',
    basePrice: 58,
    demand: 44,
    supply: 56,
    desc: '钢材共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg94',
    res: 'rare',
    name: '稀土共享现货·2批',
    basePrice: 69,
    demand: 61,
    supply: 79,
    desc: '稀土共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg95',
    res: 'tech',
    name: '科技点共享现货·2批',
    basePrice: 80,
    demand: 78,
    supply: 12,
    desc: '科技点共享市场：需求与供给决定成交价',
  },
  {
    id: 'v31mg96',
    res: 'uranium',
    name: '铀矿共享现货·2批',
    basePrice: 11,
    demand: 95,
    supply: 35,
    desc: '铀矿共享市场：需求与供给决定成交价',
  },
];

function V31MPTradeCoop(roomId) {
  V31MPEventEmitter.call(this);
  this.roomId = roomId || null;
  this.caravans = {};   // id -> caravan
  this.listings = {};   // id -> listing
  this.settlements = [];  // 结算记录，上限 V31MP_MAX_LOG
  this.clock = 0;
}
V31MPTradeCoop.prototype = Object.create(V31MPEventEmitter.prototype);
V31MPTradeCoop.prototype.constructor = V31MPTradeCoop;

V31MPTradeCoop.prototype._tick = function () { this.clock++; return this.clock; };
V31MPTradeCoop.prototype._logSettle = function (rec) {
  this.settlements.unshift(rec);
  if (this.settlements.length > V31MP_MAX_LOG) this.settlements.pop();
};
V31MPTradeCoop.prototype.routeById = function (id) {
  for (var i = 0; i < V31MP_CARAVAN_ROUTES.length; i++) if (V31MP_CARAVAN_ROUTES[i].id === id) return V31MP_CARAVAN_ROUTES[i];
  return null;
};
V31MPTradeCoop.prototype.goodByRes = function (res) {
  for (var i = 0; i < V31MP_MARKET_GOODS.length; i++) if (V31MP_MARKET_GOODS[i].res === res) return V31MP_MARKET_GOODS[i];
  return null;
};
/* 共享市场成交价：基准价 × clamp(1+0.5×(需求-供给)/(需求+供给), 0.5, 2)。
 * 需求大于供给时涨价，供给大于需求时降价，上下限各一倍。 */
V31MPTradeCoop.prototype.marketPrice = function (res, demand, supply) {
  var good = this.goodByRes(res);
  if (!good) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '未知商品');
  var d = (typeof demand === 'number') ? demand : good.demand;
  var s = (typeof supply === 'number') ? supply : good.supply;
  var total = Math.max(1, d + s);
  var mul = V31MPUtils.clamp(1 + 0.5 * (d - s) / total, 0.5, 2);
  return { res: res, basePrice: good.basePrice, demand: d, supply: s, mul: mul, price: Math.max(1, Math.floor(good.basePrice * mul)) };
};
V31MPTradeCoop.prototype.createCaravan = function (hostId, routeId, cargoRes, cargoAmt) {
  if (!V31MPUtils.isValidName(hostId)) throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '发起人无效');
  var route = this.routeById(routeId);
  if (!route) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '未知商队路线');
  if (V31MP_RESOURCE_KEYS.indexOf(cargoRes) < 0) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT, '未知货物');
  if (!V31MPUtils.isValidAmount(cargoAmt)) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT);
  if (Object.keys(this.caravans).length >= V31MP_MAX_CARAVANS) throw new V31MPError(V31MP_ERRORS.ROOM_FULL, '商队已满');
  var id = V31MPUtils.uid('v31car');
  var caravan = {
    id: id, routeId: routeId, hostId: hostId, cargoRes: cargoRes, cargoAmt: cargoAmt,
    members: {}, status: 'forming', createdAt: Date.now(), clock: this._tick(),
  };
  caravan.members[hostId] = { contrib: cargoAmt, joinedAt: Date.now() };
  this.caravans[id] = caravan;
  this.emit('caravan-created', caravan);
  return caravan;
};
V31MPTradeCoop.prototype.joinCaravan = function (caravanId, playerId, contrib) {
  var c = this.caravans[caravanId];
  if (!c) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '商队不存在');
  if (c.status !== 'forming') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '商队已出发或已结算');
  if (c.members[playerId]) throw new V31MPError(V31MP_ERRORS.ALREADY_MEMBER);
  if (Object.keys(c.members).length >= V31MP_MAX_MEMBERS) throw new V31MPError(V31MP_ERRORS.ROOM_FULL);
  if (!V31MPUtils.isValidAmount(contrib)) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT);
  c.members[playerId] = { contrib: contrib, joinedAt: Date.now() };
  c.clock = this._tick();
  this.emit('caravan-joined', { caravanId: caravanId, playerId: playerId, contrib: contrib });
  return c;
};
V31MPTradeCoop.prototype.contributeCaravan = function (caravanId, playerId, amount) {
  var c = this.caravans[caravanId];
  if (!c) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '商队不存在');
  if (c.status !== 'forming') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '商队已出发或已结算');
  if (!c.members[playerId]) throw new V31MPError(V31MP_ERRORS.NOT_MEMBER);
  if (!V31MPUtils.isValidAmount(amount)) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT);
  c.members[playerId].contrib += amount;
  c.cargoAmt += amount;
  c.clock = this._tick();
  this.emit('caravan-contributed', { caravanId: caravanId, playerId: playerId, amount: amount });
  return c;
};
/* 商队结算：货值 = 货物数量 × 路线单价；毛利 = 货值 × (1+0.04×(人数-1)) × 路线系数；
 * 路线系数 = 1+0.1×dist；手续费 = 毛利 × 5% 归发起人；剩余按出资占比分。 */
V31MPTradeCoop.prototype.settleCaravan = function (caravanId) {
  var c = this.caravans[caravanId];
  if (!c) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '商队不存在');
  if (c.status === 'settled') throw new V31MPError(V31MP_ERRORS.ALREADY_SETTLED);
  var route = this.routeById(c.routeId);
  var memberIds = Object.keys(c.members);
  var n = memberIds.length;
  var cargoValue = c.cargoAmt * (route ? route.unitPrice : 10);
  var routeMul = 1 + 0.1 * (route ? route.dist : 1);
  var synergy = 1 + V31MP_CARAVAN_SYNERGY * (n - 1);
  var gross = Math.floor(cargoValue * synergy * routeMul);
  var fee = Math.floor(gross * V31MP_HOST_FEE);
  var pool = gross - fee;
  var totalContrib = 0;
  for (var i = 0; i < memberIds.length; i++) totalContrib += c.members[memberIds[i]].contrib;
  var shares = {};
  var assigned = 0;
  for (var j = 0; j < memberIds.length; j++) {
    var pid = memberIds[j];
    var share = (j === memberIds.length - 1)
      ? pool - assigned
      : Math.floor(pool * c.members[pid].contrib / Math.max(1, totalContrib));
    if (pid === c.hostId) share += fee;
    shares[pid] = share;
    assigned += (j === memberIds.length - 1) ? 0 : share - (pid === c.hostId ? fee : 0);
  }
  c.status = 'settled';
  c.settledAt = Date.now();
  c.clock = this._tick();
  var rec = {
    kind: 'caravan', id: caravanId, routeId: c.routeId, getRes: c.routeId ? this.routeById(c.routeId).get : null,
    gross: gross, fee: fee, shares: shares, members: n, at: Date.now(),
  };
  rec.getRes = route ? route.get : null;
  this._logSettle(rec);
  this.emit('caravan-settled', rec);
  return rec;
};
V31MPTradeCoop.prototype.createListing = function (sellerId, res, amount, price) {
  if (V31MP_RESOURCE_KEYS.indexOf(res) < 0) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT, '未知商品');
  if (!V31MPUtils.isValidAmount(amount)) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT);
  if (typeof price !== 'number' || price <= 0) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT, '价格不合法');
  if (Object.keys(this.listings).length >= V31MP_MAX_LISTINGS) throw new V31MPError(V31MP_ERRORS.ROOM_FULL, '挂单已满');
  var id = V31MPUtils.uid('v31lst');
  var listing = {
    id: id, sellerId: sellerId, res: res, amount: amount, remaining: amount,
    price: Math.floor(price), status: 'open', createdAt: Date.now(), clock: this._tick(),
  };
  this.listings[id] = listing;
  this.emit('listing-created', listing);
  return listing;
};
V31MPTradeCoop.prototype.buyListing = function (listingId, buyerId, amount) {
  var l = this.listings[listingId];
  if (!l) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '挂单不存在');
  if (l.status !== 'open') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '挂单已关闭');
  if (l.sellerId === buyerId) throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '不能购买自己的挂单');
  if (!V31MPUtils.isValidAmount(amount) || amount > l.remaining) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT, '数量超过剩余');
  var total = amount * l.price;
  l.remaining -= amount;
  if (l.remaining <= 0) l.status = 'sold';
  l.clock = this._tick();
  var rec = { kind: 'market', listingId: listingId, buyerId: buyerId, sellerId: l.sellerId,
    res: l.res, amount: amount, unitPrice: l.price, total: total, at: Date.now() };
  this._logSettle(rec);
  this.emit('listing-bought', rec);
  return rec;
};
V31MPTradeCoop.prototype.cancelListing = function (listingId, sellerId) {
  var l = this.listings[listingId];
  if (!l) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '挂单不存在');
  if (l.sellerId !== sellerId) throw new V31MPError(V31MP_ERRORS.NOT_HOST, '只有卖家可以撤单');
  if (l.status !== 'open') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '挂单已关闭');
  l.status = 'cancelled';
  l.clock = this._tick();
  this.emit('listing-cancelled', l);
  return l;
};
V31MPTradeCoop.prototype.openListings = function () {
  var out = [];
  for (var id in this.listings) if (this.listings[id].status === 'open') out.push(this.listings[id]);
  return out;
};
V31MPTradeCoop.prototype.snapshot = function () {
  return {
    roomId: this.roomId, clock: this.clock,
    caravans: V31MPUtils.deepClone(this.caravans),
    listings: V31MPUtils.deepClone(this.listings),
    settlements: V31MPUtils.deepClone(this.settlements.slice(0, 50)),
  };
};
V31MPTradeCoop.prototype.restoreSnapshot = function (snap) {
  if (!snap) return this;
  this.caravans = V31MPUtils.deepClone(snap.caravans || {});
  this.listings = V31MPUtils.deepClone(snap.listings || {});
  this.settlements = V31MPUtils.deepClone(snap.settlements || []);
  this.clock = Math.max(this.clock, snap.clock || 0);
  return this;
};

/* ================================================================
 * 4. 文化交流：节日联办模板 / 巡展作品（一句话说明）
 * 节日结算：文化 = 出资和 × (1+0.1×(人数-1))；按出资占比分；
 * 满意度加成 = 各人分得文化 / 10（上限 20 点）。
 * 作品巡展：到访方文化 += 品质 / 10 × 1.2；派出方文化 += 品质 / 20。
 * ================================================================ */

var V31MP_FESTIVAL_TEMPLATES = [
  {
    id: 'v31mf01',
    name: '春季丰收联办节',
    season: '春季',
    minMembers: 2,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 5 },
    desc: '春季多城联办的丰收主题节日',
  },
  {
    id: 'v31mf02',
    name: '春季星火联办节',
    season: '春季',
    minMembers: 3,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 10 },
    desc: '春季多城联办的星火主题节日',
  },
  {
    id: 'v31mf03',
    name: '春季冰雪联办节',
    season: '春季',
    minMembers: 4,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 15 },
    desc: '春季多城联办的冰雪主题节日',
  },
  {
    id: 'v31mf04',
    name: '春季花灯联办节',
    season: '春季',
    minMembers: 2,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 5 },
    desc: '春季多城联办的花灯主题节日',
  },
  {
    id: 'v31mf05',
    name: '春季音乐联办节',
    season: '春季',
    minMembers: 3,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 10 },
    desc: '春季多城联办的音乐主题节日',
  },
  {
    id: 'v31mf06',
    name: '春季科技联办节',
    season: '春季',
    minMembers: 4,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 15 },
    desc: '春季多城联办的科技主题节日',
  },
  {
    id: 'v31mf07',
    name: '春季海洋联办节',
    season: '春季',
    minMembers: 2,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 5 },
    desc: '春季多城联办的海洋主题节日',
  },
  {
    id: 'v31mf08',
    name: '春季极光联办节',
    season: '春季',
    minMembers: 3,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 10 },
    desc: '春季多城联办的极光主题节日',
  },
  {
    id: 'v31mf09',
    name: '春季艺术联办节',
    season: '春季',
    minMembers: 4,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 15 },
    desc: '春季多城联办的艺术主题节日',
  },
  {
    id: 'v31mf10',
    name: '春季运动联办节',
    season: '春季',
    minMembers: 2,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 5 },
    desc: '春季多城联办的运动主题节日',
  },
  {
    id: 'v31mf11',
    name: '夏季丰收联办节',
    season: '夏季',
    minMembers: 3,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 10 },
    desc: '夏季多城联办的丰收主题节日',
  },
  {
    id: 'v31mf12',
    name: '夏季星火联办节',
    season: '夏季',
    minMembers: 4,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 15 },
    desc: '夏季多城联办的星火主题节日',
  },
  {
    id: 'v31mf13',
    name: '夏季冰雪联办节',
    season: '夏季',
    minMembers: 2,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 5 },
    desc: '夏季多城联办的冰雪主题节日',
  },
  {
    id: 'v31mf14',
    name: '夏季花灯联办节',
    season: '夏季',
    minMembers: 3,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 10 },
    desc: '夏季多城联办的花灯主题节日',
  },
  {
    id: 'v31mf15',
    name: '夏季音乐联办节',
    season: '夏季',
    minMembers: 4,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 15 },
    desc: '夏季多城联办的音乐主题节日',
  },
  {
    id: 'v31mf16',
    name: '夏季科技联办节',
    season: '夏季',
    minMembers: 2,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 5 },
    desc: '夏季多城联办的科技主题节日',
  },
  {
    id: 'v31mf17',
    name: '夏季海洋联办节',
    season: '夏季',
    minMembers: 3,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 10 },
    desc: '夏季多城联办的海洋主题节日',
  },
  {
    id: 'v31mf18',
    name: '夏季极光联办节',
    season: '夏季',
    minMembers: 4,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 15 },
    desc: '夏季多城联办的极光主题节日',
  },
  {
    id: 'v31mf19',
    name: '夏季艺术联办节',
    season: '夏季',
    minMembers: 2,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 5 },
    desc: '夏季多城联办的艺术主题节日',
  },
  {
    id: 'v31mf20',
    name: '夏季运动联办节',
    season: '夏季',
    minMembers: 3,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 10 },
    desc: '夏季多城联办的运动主题节日',
  },
  {
    id: 'v31mf21',
    name: '秋季丰收联办节',
    season: '秋季',
    minMembers: 4,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 15 },
    desc: '秋季多城联办的丰收主题节日',
  },
  {
    id: 'v31mf22',
    name: '秋季星火联办节',
    season: '秋季',
    minMembers: 2,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 5 },
    desc: '秋季多城联办的星火主题节日',
  },
  {
    id: 'v31mf23',
    name: '秋季冰雪联办节',
    season: '秋季',
    minMembers: 3,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 10 },
    desc: '秋季多城联办的冰雪主题节日',
  },
  {
    id: 'v31mf24',
    name: '秋季花灯联办节',
    season: '秋季',
    minMembers: 4,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 15 },
    desc: '秋季多城联办的花灯主题节日',
  },
  {
    id: 'v31mf25',
    name: '秋季音乐联办节',
    season: '秋季',
    minMembers: 2,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 5 },
    desc: '秋季多城联办的音乐主题节日',
  },
  {
    id: 'v31mf26',
    name: '秋季科技联办节',
    season: '秋季',
    minMembers: 3,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 10 },
    desc: '秋季多城联办的科技主题节日',
  },
  {
    id: 'v31mf27',
    name: '秋季海洋联办节',
    season: '秋季',
    minMembers: 4,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 15 },
    desc: '秋季多城联办的海洋主题节日',
  },
  {
    id: 'v31mf28',
    name: '秋季极光联办节',
    season: '秋季',
    minMembers: 2,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 5 },
    desc: '秋季多城联办的极光主题节日',
  },
  {
    id: 'v31mf29',
    name: '秋季艺术联办节',
    season: '秋季',
    minMembers: 3,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 10 },
    desc: '秋季多城联办的艺术主题节日',
  },
  {
    id: 'v31mf30',
    name: '秋季运动联办节',
    season: '秋季',
    minMembers: 4,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 15 },
    desc: '秋季多城联办的运动主题节日',
  },
  {
    id: 'v31mf31',
    name: '冬季丰收联办节',
    season: '冬季',
    minMembers: 2,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 5 },
    desc: '冬季多城联办的丰收主题节日',
  },
  {
    id: 'v31mf32',
    name: '冬季星火联办节',
    season: '冬季',
    minMembers: 3,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 10 },
    desc: '冬季多城联办的星火主题节日',
  },
  {
    id: 'v31mf33',
    name: '冬季冰雪联办节',
    season: '冬季',
    minMembers: 4,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 15 },
    desc: '冬季多城联办的冰雪主题节日',
  },
  {
    id: 'v31mf34',
    name: '冬季花灯联办节',
    season: '冬季',
    minMembers: 2,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 5 },
    desc: '冬季多城联办的花灯主题节日',
  },
  {
    id: 'v31mf35',
    name: '冬季音乐联办节',
    season: '冬季',
    minMembers: 3,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 10 },
    desc: '冬季多城联办的音乐主题节日',
  },
  {
    id: 'v31mf36',
    name: '冬季科技联办节',
    season: '冬季',
    minMembers: 4,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 15 },
    desc: '冬季多城联办的科技主题节日',
  },
  {
    id: 'v31mf37',
    name: '冬季海洋联办节',
    season: '冬季',
    minMembers: 2,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 5 },
    desc: '冬季多城联办的海洋主题节日',
  },
  {
    id: 'v31mf38',
    name: '冬季极光联办节',
    season: '冬季',
    minMembers: 3,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 10 },
    desc: '冬季多城联办的极光主题节日',
  },
  {
    id: 'v31mf39',
    name: '冬季艺术联办节',
    season: '冬季',
    minMembers: 4,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 15 },
    desc: '冬季多城联办的艺术主题节日',
  },
  {
    id: 'v31mf40',
    name: '冬季运动联办节',
    season: '冬季',
    minMembers: 2,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 5 },
    desc: '冬季多城联办的运动主题节日',
  },
  {
    id: 'v31mf41',
    name: '春季丰收联办节·第2届',
    season: '春季',
    minMembers: 3,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 10 },
    desc: '春季多城联办的丰收主题节日',
  },
  {
    id: 'v31mf42',
    name: '春季星火联办节·第2届',
    season: '春季',
    minMembers: 4,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 15 },
    desc: '春季多城联办的星火主题节日',
  },
  {
    id: 'v31mf43',
    name: '春季冰雪联办节·第2届',
    season: '春季',
    minMembers: 2,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 5 },
    desc: '春季多城联办的冰雪主题节日',
  },
  {
    id: 'v31mf44',
    name: '春季花灯联办节·第2届',
    season: '春季',
    minMembers: 3,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 10 },
    desc: '春季多城联办的花灯主题节日',
  },
  {
    id: 'v31mf45',
    name: '春季音乐联办节·第2届',
    season: '春季',
    minMembers: 4,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 15 },
    desc: '春季多城联办的音乐主题节日',
  },
  {
    id: 'v31mf46',
    name: '春季科技联办节·第2届',
    season: '春季',
    minMembers: 2,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 5 },
    desc: '春季多城联办的科技主题节日',
  },
  {
    id: 'v31mf47',
    name: '春季海洋联办节·第2届',
    season: '春季',
    minMembers: 3,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 10 },
    desc: '春季多城联办的海洋主题节日',
  },
  {
    id: 'v31mf48',
    name: '春季极光联办节·第2届',
    season: '春季',
    minMembers: 4,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 15 },
    desc: '春季多城联办的极光主题节日',
  },
  {
    id: 'v31mf49',
    name: '春季艺术联办节·第2届',
    season: '春季',
    minMembers: 2,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 5 },
    desc: '春季多城联办的艺术主题节日',
  },
  {
    id: 'v31mf50',
    name: '春季运动联办节·第2届',
    season: '春季',
    minMembers: 3,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 10 },
    desc: '春季多城联办的运动主题节日',
  },
  {
    id: 'v31mf51',
    name: '夏季丰收联办节·第2届',
    season: '夏季',
    minMembers: 4,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 15 },
    desc: '夏季多城联办的丰收主题节日',
  },
  {
    id: 'v31mf52',
    name: '夏季星火联办节·第2届',
    season: '夏季',
    minMembers: 2,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 5 },
    desc: '夏季多城联办的星火主题节日',
  },
  {
    id: 'v31mf53',
    name: '夏季冰雪联办节·第2届',
    season: '夏季',
    minMembers: 3,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 10 },
    desc: '夏季多城联办的冰雪主题节日',
  },
  {
    id: 'v31mf54',
    name: '夏季花灯联办节·第2届',
    season: '夏季',
    minMembers: 4,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 15 },
    desc: '夏季多城联办的花灯主题节日',
  },
  {
    id: 'v31mf55',
    name: '夏季音乐联办节·第2届',
    season: '夏季',
    minMembers: 2,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 5 },
    desc: '夏季多城联办的音乐主题节日',
  },
  {
    id: 'v31mf56',
    name: '夏季科技联办节·第2届',
    season: '夏季',
    minMembers: 3,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 10 },
    desc: '夏季多城联办的科技主题节日',
  },
  {
    id: 'v31mf57',
    name: '夏季海洋联办节·第2届',
    season: '夏季',
    minMembers: 4,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 15 },
    desc: '夏季多城联办的海洋主题节日',
  },
  {
    id: 'v31mf58',
    name: '夏季极光联办节·第2届',
    season: '夏季',
    minMembers: 2,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 5 },
    desc: '夏季多城联办的极光主题节日',
  },
  {
    id: 'v31mf59',
    name: '夏季艺术联办节·第2届',
    season: '夏季',
    minMembers: 3,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 10 },
    desc: '夏季多城联办的艺术主题节日',
  },
  {
    id: 'v31mf60',
    name: '夏季运动联办节·第2届',
    season: '夏季',
    minMembers: 4,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 15 },
    desc: '夏季多城联办的运动主题节日',
  },
  {
    id: 'v31mf61',
    name: '秋季丰收联办节·第2届',
    season: '秋季',
    minMembers: 2,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 5 },
    desc: '秋季多城联办的丰收主题节日',
  },
  {
    id: 'v31mf62',
    name: '秋季星火联办节·第2届',
    season: '秋季',
    minMembers: 3,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 10 },
    desc: '秋季多城联办的星火主题节日',
  },
  {
    id: 'v31mf63',
    name: '秋季冰雪联办节·第2届',
    season: '秋季',
    minMembers: 4,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 15 },
    desc: '秋季多城联办的冰雪主题节日',
  },
  {
    id: 'v31mf64',
    name: '秋季花灯联办节·第2届',
    season: '秋季',
    minMembers: 2,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 5 },
    desc: '秋季多城联办的花灯主题节日',
  },
  {
    id: 'v31mf65',
    name: '秋季音乐联办节·第2届',
    season: '秋季',
    minMembers: 3,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 10 },
    desc: '秋季多城联办的音乐主题节日',
  },
  {
    id: 'v31mf66',
    name: '秋季科技联办节·第2届',
    season: '秋季',
    minMembers: 4,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 15 },
    desc: '秋季多城联办的科技主题节日',
  },
  {
    id: 'v31mf67',
    name: '秋季海洋联办节·第2届',
    season: '秋季',
    minMembers: 2,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 5 },
    desc: '秋季多城联办的海洋主题节日',
  },
  {
    id: 'v31mf68',
    name: '秋季极光联办节·第2届',
    season: '秋季',
    minMembers: 3,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 10 },
    desc: '秋季多城联办的极光主题节日',
  },
  {
    id: 'v31mf69',
    name: '秋季艺术联办节·第2届',
    season: '秋季',
    minMembers: 4,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 15 },
    desc: '秋季多城联办的艺术主题节日',
  },
  {
    id: 'v31mf70',
    name: '秋季运动联办节·第2届',
    season: '秋季',
    minMembers: 2,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 5 },
    desc: '秋季多城联办的运动主题节日',
  },
  {
    id: 'v31mf71',
    name: '冬季丰收联办节·第2届',
    season: '冬季',
    minMembers: 3,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 10 },
    desc: '冬季多城联办的丰收主题节日',
  },
  {
    id: 'v31mf72',
    name: '冬季星火联办节·第2届',
    season: '冬季',
    minMembers: 4,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 15 },
    desc: '冬季多城联办的星火主题节日',
  },
  {
    id: 'v31mf73',
    name: '冬季冰雪联办节·第2届',
    season: '冬季',
    minMembers: 2,
    baseCulture: 20,
    costPerMember: { food: 10, steel: 5 },
    desc: '冬季多城联办的冰雪主题节日',
  },
  {
    id: 'v31mf74',
    name: '冬季花灯联办节·第2届',
    season: '冬季',
    minMembers: 3,
    baseCulture: 30,
    costPerMember: { food: 20, steel: 10 },
    desc: '冬季多城联办的花灯主题节日',
  },
  {
    id: 'v31mf75',
    name: '冬季音乐联办节·第2届',
    season: '冬季',
    minMembers: 4,
    baseCulture: 40,
    costPerMember: { food: 30, steel: 15 },
    desc: '冬季多城联办的音乐主题节日',
  },
  {
    id: 'v31mf76',
    name: '冬季科技联办节·第2届',
    season: '冬季',
    minMembers: 2,
    baseCulture: 50,
    costPerMember: { food: 40, steel: 5 },
    desc: '冬季多城联办的科技主题节日',
  },
  {
    id: 'v31mf77',
    name: '冬季海洋联办节·第2届',
    season: '冬季',
    minMembers: 3,
    baseCulture: 60,
    costPerMember: { food: 10, steel: 10 },
    desc: '冬季多城联办的海洋主题节日',
  },
  {
    id: 'v31mf78',
    name: '冬季极光联办节·第2届',
    season: '冬季',
    minMembers: 4,
    baseCulture: 70,
    costPerMember: { food: 20, steel: 15 },
    desc: '冬季多城联办的极光主题节日',
  },
  {
    id: 'v31mf79',
    name: '冬季艺术联办节·第2届',
    season: '冬季',
    minMembers: 2,
    baseCulture: 80,
    costPerMember: { food: 30, steel: 5 },
    desc: '冬季多城联办的艺术主题节日',
  },
  {
    id: 'v31mf80',
    name: '冬季运动联办节·第2届',
    season: '冬季',
    minMembers: 3,
    baseCulture: 90,
    costPerMember: { food: 40, steel: 10 },
    desc: '冬季多城联办的运动主题节日',
  },
];

var V31MP_TOUR_WORKS = [
  {
    id: 'v31mt01',
    title: '《火星日出》',
    form: '油画',
    baseQuality: 30,
    desc: '油画巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt02',
    title: '《火星日出》',
    form: '雕塑',
    baseQuality: 40,
    desc: '雕塑巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt03',
    title: '《火星日出》',
    form: '交响乐',
    baseQuality: 50,
    desc: '交响乐巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt04',
    title: '《火星日出》',
    form: '小说',
    baseQuality: 60,
    desc: '小说巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt05',
    title: '《火星日出》',
    form: '纪录片',
    baseQuality: 70,
    desc: '纪录片巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt06',
    title: '《火星日出》',
    form: '壁画',
    baseQuality: 80,
    desc: '壁画巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt07',
    title: '《火星日出》',
    form: '摄影集',
    baseQuality: 90,
    desc: '摄影集巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt08',
    title: '《火星日出》',
    form: '诗歌集',
    baseQuality: 30,
    desc: '诗歌集巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt09',
    title: '《第一批移民》',
    form: '油画',
    baseQuality: 40,
    desc: '油画巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt10',
    title: '《第一批移民》',
    form: '雕塑',
    baseQuality: 50,
    desc: '雕塑巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt11',
    title: '《第一批移民》',
    form: '交响乐',
    baseQuality: 60,
    desc: '交响乐巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt12',
    title: '《第一批移民》',
    form: '小说',
    baseQuality: 70,
    desc: '小说巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt13',
    title: '《第一批移民》',
    form: '纪录片',
    baseQuality: 80,
    desc: '纪录片巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt14',
    title: '《第一批移民》',
    form: '壁画',
    baseQuality: 90,
    desc: '壁画巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt15',
    title: '《第一批移民》',
    form: '摄影集',
    baseQuality: 30,
    desc: '摄影集巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt16',
    title: '《第一批移民》',
    form: '诗歌集',
    baseQuality: 40,
    desc: '诗歌集巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt17',
    title: '《穹顶之夜》',
    form: '油画',
    baseQuality: 50,
    desc: '油画巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt18',
    title: '《穹顶之夜》',
    form: '雕塑',
    baseQuality: 60,
    desc: '雕塑巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt19',
    title: '《穹顶之夜》',
    form: '交响乐',
    baseQuality: 70,
    desc: '交响乐巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt20',
    title: '《穹顶之夜》',
    form: '小说',
    baseQuality: 80,
    desc: '小说巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt21',
    title: '《穹顶之夜》',
    form: '纪录片',
    baseQuality: 90,
    desc: '纪录片巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt22',
    title: '《穹顶之夜》',
    form: '壁画',
    baseQuality: 30,
    desc: '壁画巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt23',
    title: '《穹顶之夜》',
    form: '摄影集',
    baseQuality: 40,
    desc: '摄影集巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt24',
    title: '《穹顶之夜》',
    form: '诗歌集',
    baseQuality: 50,
    desc: '诗歌集巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt25',
    title: '《沙尘暴》',
    form: '油画',
    baseQuality: 60,
    desc: '油画巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt26',
    title: '《沙尘暴》',
    form: '雕塑',
    baseQuality: 70,
    desc: '雕塑巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt27',
    title: '《沙尘暴》',
    form: '交响乐',
    baseQuality: 80,
    desc: '交响乐巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt28',
    title: '《沙尘暴》',
    form: '小说',
    baseQuality: 90,
    desc: '小说巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt29',
    title: '《沙尘暴》',
    form: '纪录片',
    baseQuality: 30,
    desc: '纪录片巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt30',
    title: '《沙尘暴》',
    form: '壁画',
    baseQuality: 40,
    desc: '壁画巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt31',
    title: '《沙尘暴》',
    form: '摄影集',
    baseQuality: 50,
    desc: '摄影集巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt32',
    title: '《沙尘暴》',
    form: '诗歌集',
    baseQuality: 60,
    desc: '诗歌集巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt33',
    title: '《冰川湖》',
    form: '油画',
    baseQuality: 70,
    desc: '油画巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt34',
    title: '《冰川湖》',
    form: '雕塑',
    baseQuality: 80,
    desc: '雕塑巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt35',
    title: '《冰川湖》',
    form: '交响乐',
    baseQuality: 90,
    desc: '交响乐巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt36',
    title: '《冰川湖》',
    form: '小说',
    baseQuality: 30,
    desc: '小说巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt37',
    title: '《冰川湖》',
    form: '纪录片',
    baseQuality: 40,
    desc: '纪录片巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt38',
    title: '《冰川湖》',
    form: '壁画',
    baseQuality: 50,
    desc: '壁画巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt39',
    title: '《冰川湖》',
    form: '摄影集',
    baseQuality: 60,
    desc: '摄影集巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt40',
    title: '《冰川湖》',
    form: '诗歌集',
    baseQuality: 70,
    desc: '诗歌集巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt41',
    title: '《火星日出》·续2',
    form: '油画',
    baseQuality: 80,
    desc: '油画巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt42',
    title: '《火星日出》·续2',
    form: '雕塑',
    baseQuality: 90,
    desc: '雕塑巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt43',
    title: '《火星日出》·续2',
    form: '交响乐',
    baseQuality: 30,
    desc: '交响乐巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt44',
    title: '《火星日出》·续2',
    form: '小说',
    baseQuality: 40,
    desc: '小说巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt45',
    title: '《火星日出》·续2',
    form: '纪录片',
    baseQuality: 50,
    desc: '纪录片巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt46',
    title: '《火星日出》·续2',
    form: '壁画',
    baseQuality: 60,
    desc: '壁画巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt47',
    title: '《火星日出》·续2',
    form: '摄影集',
    baseQuality: 70,
    desc: '摄影集巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt48',
    title: '《火星日出》·续2',
    form: '诗歌集',
    baseQuality: 80,
    desc: '诗歌集巡展作品，以火星日出为题材',
  },
  {
    id: 'v31mt49',
    title: '《第一批移民》·续2',
    form: '油画',
    baseQuality: 90,
    desc: '油画巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt50',
    title: '《第一批移民》·续2',
    form: '雕塑',
    baseQuality: 30,
    desc: '雕塑巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt51',
    title: '《第一批移民》·续2',
    form: '交响乐',
    baseQuality: 40,
    desc: '交响乐巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt52',
    title: '《第一批移民》·续2',
    form: '小说',
    baseQuality: 50,
    desc: '小说巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt53',
    title: '《第一批移民》·续2',
    form: '纪录片',
    baseQuality: 60,
    desc: '纪录片巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt54',
    title: '《第一批移民》·续2',
    form: '壁画',
    baseQuality: 70,
    desc: '壁画巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt55',
    title: '《第一批移民》·续2',
    form: '摄影集',
    baseQuality: 80,
    desc: '摄影集巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt56',
    title: '《第一批移民》·续2',
    form: '诗歌集',
    baseQuality: 90,
    desc: '诗歌集巡展作品，以第一批移民为题材',
  },
  {
    id: 'v31mt57',
    title: '《穹顶之夜》·续2',
    form: '油画',
    baseQuality: 30,
    desc: '油画巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt58',
    title: '《穹顶之夜》·续2',
    form: '雕塑',
    baseQuality: 40,
    desc: '雕塑巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt59',
    title: '《穹顶之夜》·续2',
    form: '交响乐',
    baseQuality: 50,
    desc: '交响乐巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt60',
    title: '《穹顶之夜》·续2',
    form: '小说',
    baseQuality: 60,
    desc: '小说巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt61',
    title: '《穹顶之夜》·续2',
    form: '纪录片',
    baseQuality: 70,
    desc: '纪录片巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt62',
    title: '《穹顶之夜》·续2',
    form: '壁画',
    baseQuality: 80,
    desc: '壁画巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt63',
    title: '《穹顶之夜》·续2',
    form: '摄影集',
    baseQuality: 90,
    desc: '摄影集巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt64',
    title: '《穹顶之夜》·续2',
    form: '诗歌集',
    baseQuality: 30,
    desc: '诗歌集巡展作品，以穹顶之夜为题材',
  },
  {
    id: 'v31mt65',
    title: '《沙尘暴》·续2',
    form: '油画',
    baseQuality: 40,
    desc: '油画巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt66',
    title: '《沙尘暴》·续2',
    form: '雕塑',
    baseQuality: 50,
    desc: '雕塑巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt67',
    title: '《沙尘暴》·续2',
    form: '交响乐',
    baseQuality: 60,
    desc: '交响乐巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt68',
    title: '《沙尘暴》·续2',
    form: '小说',
    baseQuality: 70,
    desc: '小说巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt69',
    title: '《沙尘暴》·续2',
    form: '纪录片',
    baseQuality: 80,
    desc: '纪录片巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt70',
    title: '《沙尘暴》·续2',
    form: '壁画',
    baseQuality: 90,
    desc: '壁画巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt71',
    title: '《沙尘暴》·续2',
    form: '摄影集',
    baseQuality: 30,
    desc: '摄影集巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt72',
    title: '《沙尘暴》·续2',
    form: '诗歌集',
    baseQuality: 40,
    desc: '诗歌集巡展作品，以沙尘暴为题材',
  },
  {
    id: 'v31mt73',
    title: '《冰川湖》·续2',
    form: '油画',
    baseQuality: 50,
    desc: '油画巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt74',
    title: '《冰川湖》·续2',
    form: '雕塑',
    baseQuality: 60,
    desc: '雕塑巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt75',
    title: '《冰川湖》·续2',
    form: '交响乐',
    baseQuality: 70,
    desc: '交响乐巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt76',
    title: '《冰川湖》·续2',
    form: '小说',
    baseQuality: 80,
    desc: '小说巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt77',
    title: '《冰川湖》·续2',
    form: '纪录片',
    baseQuality: 90,
    desc: '纪录片巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt78',
    title: '《冰川湖》·续2',
    form: '壁画',
    baseQuality: 30,
    desc: '壁画巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt79',
    title: '《冰川湖》·续2',
    form: '摄影集',
    baseQuality: 40,
    desc: '摄影集巡展作品，以冰川湖为题材',
  },
  {
    id: 'v31mt80',
    title: '《冰川湖》·续2',
    form: '诗歌集',
    baseQuality: 50,
    desc: '诗歌集巡展作品，以冰川湖为题材',
  },
];

function V31MPCultureExchange(roomId) {
  V31MPEventEmitter.call(this);
  this.roomId = roomId || null;
  this.festivals = {};  // id -> joint festival
  this.tours = {};      // id -> tour
  this.cultureLedger = {};  // playerId -> {culture, happy}
  this.log = [];
  this.clock = 0;
}
V31MPCultureExchange.prototype = Object.create(V31MPEventEmitter.prototype);
V31MPCultureExchange.prototype.constructor = V31MPCultureExchange;

V31MPCultureExchange.prototype._tick = function () { this.clock++; return this.clock; };
V31MPCultureExchange.prototype._addCulture = function (playerId, culture, happy) {
  if (!this.cultureLedger[playerId]) this.cultureLedger[playerId] = { culture: 0, happy: 0 };
  this.cultureLedger[playerId].culture += culture;
  this.cultureLedger[playerId].happy += happy;
};
V31MPCultureExchange.prototype._pushLog = function (text) {
  this.log.unshift({ at: Date.now(), text: text });
  if (this.log.length > V31MP_MAX_LOG) this.log.pop();
};
V31MPCultureExchange.prototype.templateById = function (id) {
  for (var i = 0; i < V31MP_FESTIVAL_TEMPLATES.length; i++) if (V31MP_FESTIVAL_TEMPLATES[i].id === id) return V31MP_FESTIVAL_TEMPLATES[i];
  return null;
};
V31MPCultureExchange.prototype.tourWorkById = function (id) {
  for (var i = 0; i < V31MP_TOUR_WORKS.length; i++) if (V31MP_TOUR_WORKS[i].id === id) return V31MP_TOUR_WORKS[i];
  return null;
};
V31MPCultureExchange.prototype.proposeJointFestival = function (hostId, templateId) {
  var tpl = this.templateById(templateId);
  if (!tpl) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '未知节日模板');
  if (Object.keys(this.festivals).length >= V31MP_MAX_FESTIVALS) throw new V31MPError(V31MP_ERRORS.ROOM_FULL, '联办节日已满');
  var id = V31MPUtils.uid('v31fest');
  var fest = {
    id: id, templateId: templateId, name: tpl.name, hostId: hostId,
    members: {}, status: 'forming', createdAt: Date.now(), clock: this._tick(),
  };
  fest.members[hostId] = { contrib: 0, joinedAt: Date.now() };
  this.festivals[id] = fest;
  this._pushLog('联办节日发起：' + tpl.name);
  this.emit('festival-proposed', fest);
  return fest;
};
V31MPCultureExchange.prototype.joinFestival = function (festivalId, playerId) {
  var f = this.festivals[festivalId];
  if (!f) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '节日不存在');
  if (f.status !== 'forming') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '节日已举办或已结算');
  if (f.members[playerId]) throw new V31MPError(V31MP_ERRORS.ALREADY_MEMBER);
  if (Object.keys(f.members).length >= V31MP_MAX_MEMBERS) throw new V31MPError(V31MP_ERRORS.ROOM_FULL);
  f.members[playerId] = { contrib: 0, joinedAt: Date.now() };
  f.clock = this._tick();
  this.emit('festival-joined', { festivalId: festivalId, playerId: playerId });
  return f;
};
V31MPCultureExchange.prototype.contributeFestival = function (festivalId, playerId, amount) {
  var f = this.festivals[festivalId];
  if (!f) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '节日不存在');
  if (f.status !== 'forming') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '节日已举办或已结算');
  if (!f.members[playerId]) throw new V31MPError(V31MP_ERRORS.NOT_MEMBER);
  if (!V31MPUtils.isValidAmount(amount)) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT);
  f.members[playerId].contrib += amount;
  f.clock = this._tick();
  this.emit('festival-contributed', { festivalId: festivalId, playerId: playerId, amount: amount });
  return f;
};
/* 节日联办结算：文化 = (基础文化 + 出资和) × (1+0.1×(人数-1))；
 * 按出资占比分（零出资者平分 10% 参与分）；满意度加成 = 分得文化 / 10，上限 20。 */
V31MPCultureExchange.prototype.settleFestival = function (festivalId) {
  var f = this.festivals[festivalId];
  if (!f) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '节日不存在');
  if (f.status === 'settled') throw new V31MPError(V31MP_ERRORS.ALREADY_SETTLED);
  var tpl = this.templateById(f.templateId);
  var memberIds = Object.keys(f.members);
  if (memberIds.length < (tpl ? tpl.minMembers : 2))
    throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '人数不足（至少 ' + (tpl ? tpl.minMembers : 2) + ' 城联办）');
  var totalContrib = 0;
  for (var i = 0; i < memberIds.length; i++) totalContrib += f.members[memberIds[i]].contrib;
  var base = tpl ? tpl.baseCulture : 20;
  var synergy = 1 + V31MP_FESTIVAL_SYNERGY * (memberIds.length - 1);
  var totalCulture = Math.floor((base + totalContrib) * synergy);
  var shares = {};
  var happy = {};
  var assigned = 0;
  for (var j = 0; j < memberIds.length; j++) {
    var pid = memberIds[j];
    var contrib = f.members[pid].contrib;
    var share;
    if (totalContrib <= 0) {
      share = (j === memberIds.length - 1) ? totalCulture - assigned : Math.floor(totalCulture / memberIds.length);
    } else if (contrib <= 0) {
      share = Math.floor(totalCulture * 0.1 / memberIds.length);
    } else {
      share = (j === memberIds.length - 1 && f.members[memberIds[memberIds.length - 1]].contrib > 0)
        ? totalCulture - assigned : Math.floor(totalCulture * 0.9 * contrib / totalContrib);
    }
    shares[pid] = share;
    assigned += share;
    happy[pid] = Math.min(20, Math.floor(share / 10));
    this._addCulture(pid, share, happy[pid]);
  }
  f.status = 'settled';
  f.settledAt = Date.now();
  f.clock = this._tick();
  var rec = { kind: 'festival', id: festivalId, name: f.name, totalCulture: totalCulture,
    shares: shares, happy: happy, members: memberIds.length, at: Date.now() };
  this._pushLog('联办节日结算：' + f.name + '，文化 ' + totalCulture);
  this.emit('festival-settled', rec);
  return rec;
};
V31MPCultureExchange.prototype.sendWorkOnTour = function (fromId, toId, workId, quality) {
  var work = this.tourWorkById(workId);
  if (!work && !V31MPUtils.isValidName(workId)) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '未知作品');
  if (fromId === toId) throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '不能向自己巡展');
  var q = (typeof quality === 'number') ? quality : (work ? work.baseQuality : 30);
  q = V31MPUtils.clamp(q, 0, 100);
  var id = V31MPUtils.uid('v31tour');
  var tour = {
    id: id, fromId: fromId, toId: toId, workId: workId,
    title: work ? work.title : workId, form: work ? work.form : '作品',
    quality: q, status: 'travelling', createdAt: Date.now(), clock: this._tick(),
  };
  this.tours[id] = tour;
  this.emit('tour-sent', tour);
  return tour;
};
V31MPCultureExchange.prototype.receiveTour = function (tourId, playerId) {
  var t = this.tours[tourId];
  if (!t) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '巡展不存在');
  if (t.toId !== playerId) throw new V31MPError(V31MP_ERRORS.NOT_MEMBER, '不是该巡展的接收方');
  if (t.status !== 'travelling') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '巡展已接收或已完成');
  t.status = 'received';
  t.receivedAt = Date.now();
  t.clock = this._tick();
  this.emit('tour-received', t);
  return t;
};
/* 巡展完成：到访方文化 += 品质 / 10 × 1.2；派出方文化 += 品质 / 20。 */
V31MPCultureExchange.prototype.completeTour = function (tourId) {
  var t = this.tours[tourId];
  if (!t) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '巡展不存在');
  if (t.status === 'done') throw new V31MPError(V31MP_ERRORS.ALREADY_SETTLED);
  if (t.status !== 'received') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '需接收方先确认接收');
  var hostGain = Math.floor(t.quality / 10 * 1.2);
  var senderGain = Math.floor(t.quality / 20);
  this._addCulture(t.toId, hostGain, Math.min(10, Math.floor(hostGain / 5)));
  this._addCulture(t.fromId, senderGain, 0);
  t.status = 'done';
  t.completedAt = Date.now();
  t.clock = this._tick();
  var rec = { kind: 'tour', id: tourId, title: t.title, hostGain: hostGain, senderGain: senderGain, at: Date.now() };
  this._pushLog('作品巡展完成：' + t.title + '，到访方文化 +' + hostGain);
  this.emit('tour-completed', rec);
  return rec;
};
V31MPCultureExchange.prototype.leaderboard = function () {
  var out = [];
  for (var pid in this.cultureLedger) out.push({ playerId: pid, culture: this.cultureLedger[pid].culture, happy: this.cultureLedger[pid].happy });
  out.sort(function (x, y) { return y.culture - x.culture; });
  return out;
};
V31MPCultureExchange.prototype.snapshot = function () {
  return {
    roomId: this.roomId, clock: this.clock,
    festivals: V31MPUtils.deepClone(this.festivals),
    tours: V31MPUtils.deepClone(this.tours),
    cultureLedger: V31MPUtils.deepClone(this.cultureLedger),
  };
};
V31MPCultureExchange.prototype.restoreSnapshot = function (snap) {
  if (!snap) return this;
  this.festivals = V31MPUtils.deepClone(snap.festivals || {});
  this.tours = V31MPUtils.deepClone(snap.tours || {});
  this.cultureLedger = V31MPUtils.deepClone(snap.cultureLedger || {});
  this.clock = Math.max(this.clock, snap.clock || 0);
  return this;
};

/* ================================================================
 * 5. 科研共享：联合项目模板 / 成果交换（一句话说明）
 * 联合项目：进度 += 出资 × (1+0.15×(人数-1))；进度满 100 完成，
 * 全体成员获得成果科技；出资按科技点计，成本由全体均摊。
 * 成果交换：出让方给科技，接收方付约定资源；双方各得 5 点共享分。
 * ================================================================ */

var V31MP_JOINT_PROJECTS = [
  {
    id: 'v31mj01',
    name: '推进联合攻关 1 期',
    field: '推进',
    tier: 1,
    target: 100,
    techId: 't-prod-1',
    costPerMember: { tech: 20 },
    desc: '推进领域第 1 期联合项目',
  },
  {
    id: 'v31mj02',
    name: '材料联合攻关 1 期',
    field: '材料',
    tier: 1,
    target: 100,
    techId: 't-build-2',
    costPerMember: { tech: 20 },
    desc: '材料领域第 1 期联合项目',
  },
  {
    id: 'v31mj03',
    name: '生命联合攻关 1 期',
    field: '生命',
    tier: 1,
    target: 100,
    techId: 't-surv-3',
    costPerMember: { tech: 20 },
    desc: '生命领域第 1 期联合项目',
  },
  {
    id: 'v31mj04',
    name: '能源联合攻关 1 期',
    field: '能源',
    tier: 1,
    target: 100,
    techId: 't-prod-4',
    costPerMember: { tech: 20 },
    desc: '能源领域第 1 期联合项目',
  },
  {
    id: 'v31mj05',
    name: '计算联合攻关 1 期',
    field: '计算',
    tier: 1,
    target: 100,
    techId: 't-build-5',
    costPerMember: { tech: 20 },
    desc: '计算领域第 1 期联合项目',
  },
  {
    id: 'v31mj06',
    name: '生态联合攻关 1 期',
    field: '生态',
    tier: 1,
    target: 100,
    techId: 't-surv-6',
    costPerMember: { tech: 20 },
    desc: '生态领域第 1 期联合项目',
  },
  {
    id: 'v31mj07',
    name: '通讯联合攻关 1 期',
    field: '通讯',
    tier: 1,
    target: 100,
    techId: 't-prod-7',
    costPerMember: { tech: 20 },
    desc: '通讯领域第 1 期联合项目',
  },
  {
    id: 'v31mj08',
    name: '医学联合攻关 1 期',
    field: '医学',
    tier: 1,
    target: 100,
    techId: 't-build-8',
    costPerMember: { tech: 20 },
    desc: '医学领域第 1 期联合项目',
  },
  {
    id: 'v31mj09',
    name: '推进联合攻关 2 期',
    field: '推进',
    tier: 2,
    target: 100,
    techId: 't-surv-9',
    costPerMember: { tech: 30 },
    desc: '推进领域第 2 期联合项目',
  },
  {
    id: 'v31mj10',
    name: '材料联合攻关 2 期',
    field: '材料',
    tier: 2,
    target: 100,
    techId: 't-prod-10',
    costPerMember: { tech: 30 },
    desc: '材料领域第 2 期联合项目',
  },
  {
    id: 'v31mj11',
    name: '生命联合攻关 2 期',
    field: '生命',
    tier: 2,
    target: 100,
    techId: 't-build-1',
    costPerMember: { tech: 30 },
    desc: '生命领域第 2 期联合项目',
  },
  {
    id: 'v31mj12',
    name: '能源联合攻关 2 期',
    field: '能源',
    tier: 2,
    target: 100,
    techId: 't-surv-2',
    costPerMember: { tech: 30 },
    desc: '能源领域第 2 期联合项目',
  },
  {
    id: 'v31mj13',
    name: '计算联合攻关 2 期',
    field: '计算',
    tier: 2,
    target: 100,
    techId: 't-prod-3',
    costPerMember: { tech: 30 },
    desc: '计算领域第 2 期联合项目',
  },
  {
    id: 'v31mj14',
    name: '生态联合攻关 2 期',
    field: '生态',
    tier: 2,
    target: 100,
    techId: 't-build-4',
    costPerMember: { tech: 30 },
    desc: '生态领域第 2 期联合项目',
  },
  {
    id: 'v31mj15',
    name: '通讯联合攻关 2 期',
    field: '通讯',
    tier: 2,
    target: 100,
    techId: 't-surv-5',
    costPerMember: { tech: 30 },
    desc: '通讯领域第 2 期联合项目',
  },
  {
    id: 'v31mj16',
    name: '医学联合攻关 2 期',
    field: '医学',
    tier: 2,
    target: 100,
    techId: 't-prod-6',
    costPerMember: { tech: 30 },
    desc: '医学领域第 2 期联合项目',
  },
  {
    id: 'v31mj17',
    name: '推进联合攻关 3 期',
    field: '推进',
    tier: 3,
    target: 100,
    techId: 't-build-7',
    costPerMember: { tech: 40 },
    desc: '推进领域第 3 期联合项目',
  },
  {
    id: 'v31mj18',
    name: '材料联合攻关 3 期',
    field: '材料',
    tier: 3,
    target: 100,
    techId: 't-surv-8',
    costPerMember: { tech: 40 },
    desc: '材料领域第 3 期联合项目',
  },
  {
    id: 'v31mj19',
    name: '生命联合攻关 3 期',
    field: '生命',
    tier: 3,
    target: 100,
    techId: 't-prod-9',
    costPerMember: { tech: 40 },
    desc: '生命领域第 3 期联合项目',
  },
  {
    id: 'v31mj20',
    name: '能源联合攻关 3 期',
    field: '能源',
    tier: 3,
    target: 100,
    techId: 't-build-10',
    costPerMember: { tech: 40 },
    desc: '能源领域第 3 期联合项目',
  },
  {
    id: 'v31mj21',
    name: '计算联合攻关 3 期',
    field: '计算',
    tier: 3,
    target: 100,
    techId: 't-surv-1',
    costPerMember: { tech: 40 },
    desc: '计算领域第 3 期联合项目',
  },
  {
    id: 'v31mj22',
    name: '生态联合攻关 3 期',
    field: '生态',
    tier: 3,
    target: 100,
    techId: 't-prod-2',
    costPerMember: { tech: 40 },
    desc: '生态领域第 3 期联合项目',
  },
  {
    id: 'v31mj23',
    name: '通讯联合攻关 3 期',
    field: '通讯',
    tier: 3,
    target: 100,
    techId: 't-build-3',
    costPerMember: { tech: 40 },
    desc: '通讯领域第 3 期联合项目',
  },
  {
    id: 'v31mj24',
    name: '医学联合攻关 3 期',
    field: '医学',
    tier: 3,
    target: 100,
    techId: 't-surv-4',
    costPerMember: { tech: 40 },
    desc: '医学领域第 3 期联合项目',
  },
  {
    id: 'v31mj25',
    name: '推进联合攻关 4 期',
    field: '推进',
    tier: 4,
    target: 100,
    techId: 't-prod-5',
    costPerMember: { tech: 50 },
    desc: '推进领域第 4 期联合项目',
  },
  {
    id: 'v31mj26',
    name: '材料联合攻关 4 期',
    field: '材料',
    tier: 4,
    target: 100,
    techId: 't-build-6',
    costPerMember: { tech: 50 },
    desc: '材料领域第 4 期联合项目',
  },
  {
    id: 'v31mj27',
    name: '生命联合攻关 4 期',
    field: '生命',
    tier: 4,
    target: 100,
    techId: 't-surv-7',
    costPerMember: { tech: 50 },
    desc: '生命领域第 4 期联合项目',
  },
  {
    id: 'v31mj28',
    name: '能源联合攻关 4 期',
    field: '能源',
    tier: 4,
    target: 100,
    techId: 't-prod-8',
    costPerMember: { tech: 50 },
    desc: '能源领域第 4 期联合项目',
  },
  {
    id: 'v31mj29',
    name: '计算联合攻关 4 期',
    field: '计算',
    tier: 4,
    target: 100,
    techId: 't-build-9',
    costPerMember: { tech: 50 },
    desc: '计算领域第 4 期联合项目',
  },
  {
    id: 'v31mj30',
    name: '生态联合攻关 4 期',
    field: '生态',
    tier: 4,
    target: 100,
    techId: 't-surv-10',
    costPerMember: { tech: 50 },
    desc: '生态领域第 4 期联合项目',
  },
  {
    id: 'v31mj31',
    name: '通讯联合攻关 4 期',
    field: '通讯',
    tier: 4,
    target: 100,
    techId: 't-prod-1',
    costPerMember: { tech: 50 },
    desc: '通讯领域第 4 期联合项目',
  },
  {
    id: 'v31mj32',
    name: '医学联合攻关 4 期',
    field: '医学',
    tier: 4,
    target: 100,
    techId: 't-build-2',
    costPerMember: { tech: 50 },
    desc: '医学领域第 4 期联合项目',
  },
  {
    id: 'v31mj33',
    name: '推进联合攻关 5 期',
    field: '推进',
    tier: 5,
    target: 100,
    techId: 't-surv-3',
    costPerMember: { tech: 60 },
    desc: '推进领域第 5 期联合项目',
  },
  {
    id: 'v31mj34',
    name: '材料联合攻关 5 期',
    field: '材料',
    tier: 5,
    target: 100,
    techId: 't-prod-4',
    costPerMember: { tech: 60 },
    desc: '材料领域第 5 期联合项目',
  },
  {
    id: 'v31mj35',
    name: '生命联合攻关 5 期',
    field: '生命',
    tier: 5,
    target: 100,
    techId: 't-build-5',
    costPerMember: { tech: 60 },
    desc: '生命领域第 5 期联合项目',
  },
  {
    id: 'v31mj36',
    name: '能源联合攻关 5 期',
    field: '能源',
    tier: 5,
    target: 100,
    techId: 't-surv-6',
    costPerMember: { tech: 60 },
    desc: '能源领域第 5 期联合项目',
  },
  {
    id: 'v31mj37',
    name: '计算联合攻关 5 期',
    field: '计算',
    tier: 5,
    target: 100,
    techId: 't-prod-7',
    costPerMember: { tech: 60 },
    desc: '计算领域第 5 期联合项目',
  },
  {
    id: 'v31mj38',
    name: '生态联合攻关 5 期',
    field: '生态',
    tier: 5,
    target: 100,
    techId: 't-build-8',
    costPerMember: { tech: 60 },
    desc: '生态领域第 5 期联合项目',
  },
  {
    id: 'v31mj39',
    name: '通讯联合攻关 5 期',
    field: '通讯',
    tier: 5,
    target: 100,
    techId: 't-surv-9',
    costPerMember: { tech: 60 },
    desc: '通讯领域第 5 期联合项目',
  },
  {
    id: 'v31mj40',
    name: '医学联合攻关 5 期',
    field: '医学',
    tier: 5,
    target: 100,
    techId: 't-prod-10',
    costPerMember: { tech: 60 },
    desc: '医学领域第 5 期联合项目',
  },
  {
    id: 'v31mj41',
    name: '推进联合攻关 6 期',
    field: '推进',
    tier: 6,
    target: 100,
    techId: 't-build-1',
    costPerMember: { tech: 70 },
    desc: '推进领域第 6 期联合项目',
  },
  {
    id: 'v31mj42',
    name: '材料联合攻关 6 期',
    field: '材料',
    tier: 6,
    target: 100,
    techId: 't-surv-2',
    costPerMember: { tech: 70 },
    desc: '材料领域第 6 期联合项目',
  },
  {
    id: 'v31mj43',
    name: '生命联合攻关 6 期',
    field: '生命',
    tier: 6,
    target: 100,
    techId: 't-prod-3',
    costPerMember: { tech: 70 },
    desc: '生命领域第 6 期联合项目',
  },
  {
    id: 'v31mj44',
    name: '能源联合攻关 6 期',
    field: '能源',
    tier: 6,
    target: 100,
    techId: 't-build-4',
    costPerMember: { tech: 70 },
    desc: '能源领域第 6 期联合项目',
  },
  {
    id: 'v31mj45',
    name: '计算联合攻关 6 期',
    field: '计算',
    tier: 6,
    target: 100,
    techId: 't-surv-5',
    costPerMember: { tech: 70 },
    desc: '计算领域第 6 期联合项目',
  },
  {
    id: 'v31mj46',
    name: '生态联合攻关 6 期',
    field: '生态',
    tier: 6,
    target: 100,
    techId: 't-prod-6',
    costPerMember: { tech: 70 },
    desc: '生态领域第 6 期联合项目',
  },
  {
    id: 'v31mj47',
    name: '通讯联合攻关 6 期',
    field: '通讯',
    tier: 6,
    target: 100,
    techId: 't-build-7',
    costPerMember: { tech: 70 },
    desc: '通讯领域第 6 期联合项目',
  },
  {
    id: 'v31mj48',
    name: '医学联合攻关 6 期',
    field: '医学',
    tier: 6,
    target: 100,
    techId: 't-surv-8',
    costPerMember: { tech: 70 },
    desc: '医学领域第 6 期联合项目',
  },
  {
    id: 'v31mj49',
    name: '推进联合攻关 7 期',
    field: '推进',
    tier: 7,
    target: 100,
    techId: 't-prod-9',
    costPerMember: { tech: 80 },
    desc: '推进领域第 7 期联合项目',
  },
  {
    id: 'v31mj50',
    name: '材料联合攻关 7 期',
    field: '材料',
    tier: 7,
    target: 100,
    techId: 't-build-10',
    costPerMember: { tech: 80 },
    desc: '材料领域第 7 期联合项目',
  },
  {
    id: 'v31mj51',
    name: '生命联合攻关 7 期',
    field: '生命',
    tier: 7,
    target: 100,
    techId: 't-surv-1',
    costPerMember: { tech: 80 },
    desc: '生命领域第 7 期联合项目',
  },
  {
    id: 'v31mj52',
    name: '能源联合攻关 7 期',
    field: '能源',
    tier: 7,
    target: 100,
    techId: 't-prod-2',
    costPerMember: { tech: 80 },
    desc: '能源领域第 7 期联合项目',
  },
  {
    id: 'v31mj53',
    name: '计算联合攻关 7 期',
    field: '计算',
    tier: 7,
    target: 100,
    techId: 't-build-3',
    costPerMember: { tech: 80 },
    desc: '计算领域第 7 期联合项目',
  },
  {
    id: 'v31mj54',
    name: '生态联合攻关 7 期',
    field: '生态',
    tier: 7,
    target: 100,
    techId: 't-surv-4',
    costPerMember: { tech: 80 },
    desc: '生态领域第 7 期联合项目',
  },
  {
    id: 'v31mj55',
    name: '通讯联合攻关 7 期',
    field: '通讯',
    tier: 7,
    target: 100,
    techId: 't-prod-5',
    costPerMember: { tech: 80 },
    desc: '通讯领域第 7 期联合项目',
  },
  {
    id: 'v31mj56',
    name: '医学联合攻关 7 期',
    field: '医学',
    tier: 7,
    target: 100,
    techId: 't-build-6',
    costPerMember: { tech: 80 },
    desc: '医学领域第 7 期联合项目',
  },
  {
    id: 'v31mj57',
    name: '推进联合攻关 8 期',
    field: '推进',
    tier: 8,
    target: 100,
    techId: 't-surv-7',
    costPerMember: { tech: 90 },
    desc: '推进领域第 8 期联合项目',
  },
  {
    id: 'v31mj58',
    name: '材料联合攻关 8 期',
    field: '材料',
    tier: 8,
    target: 100,
    techId: 't-prod-8',
    costPerMember: { tech: 90 },
    desc: '材料领域第 8 期联合项目',
  },
  {
    id: 'v31mj59',
    name: '生命联合攻关 8 期',
    field: '生命',
    tier: 8,
    target: 100,
    techId: 't-build-9',
    costPerMember: { tech: 90 },
    desc: '生命领域第 8 期联合项目',
  },
  {
    id: 'v31mj60',
    name: '能源联合攻关 8 期',
    field: '能源',
    tier: 8,
    target: 100,
    techId: 't-surv-10',
    costPerMember: { tech: 90 },
    desc: '能源领域第 8 期联合项目',
  },
  {
    id: 'v31mj61',
    name: '计算联合攻关 8 期',
    field: '计算',
    tier: 8,
    target: 100,
    techId: 't-prod-1',
    costPerMember: { tech: 90 },
    desc: '计算领域第 8 期联合项目',
  },
  {
    id: 'v31mj62',
    name: '生态联合攻关 8 期',
    field: '生态',
    tier: 8,
    target: 100,
    techId: 't-build-2',
    costPerMember: { tech: 90 },
    desc: '生态领域第 8 期联合项目',
  },
  {
    id: 'v31mj63',
    name: '通讯联合攻关 8 期',
    field: '通讯',
    tier: 8,
    target: 100,
    techId: 't-surv-3',
    costPerMember: { tech: 90 },
    desc: '通讯领域第 8 期联合项目',
  },
  {
    id: 'v31mj64',
    name: '医学联合攻关 8 期',
    field: '医学',
    tier: 8,
    target: 100,
    techId: 't-prod-4',
    costPerMember: { tech: 90 },
    desc: '医学领域第 8 期联合项目',
  },
  {
    id: 'v31mj65',
    name: '推进联合攻关 9 期',
    field: '推进',
    tier: 9,
    target: 100,
    techId: 't-build-5',
    costPerMember: { tech: 100 },
    desc: '推进领域第 9 期联合项目',
  },
  {
    id: 'v31mj66',
    name: '材料联合攻关 9 期',
    field: '材料',
    tier: 9,
    target: 100,
    techId: 't-surv-6',
    costPerMember: { tech: 100 },
    desc: '材料领域第 9 期联合项目',
  },
  {
    id: 'v31mj67',
    name: '生命联合攻关 9 期',
    field: '生命',
    tier: 9,
    target: 100,
    techId: 't-prod-7',
    costPerMember: { tech: 100 },
    desc: '生命领域第 9 期联合项目',
  },
  {
    id: 'v31mj68',
    name: '能源联合攻关 9 期',
    field: '能源',
    tier: 9,
    target: 100,
    techId: 't-build-8',
    costPerMember: { tech: 100 },
    desc: '能源领域第 9 期联合项目',
  },
  {
    id: 'v31mj69',
    name: '计算联合攻关 9 期',
    field: '计算',
    tier: 9,
    target: 100,
    techId: 't-surv-9',
    costPerMember: { tech: 100 },
    desc: '计算领域第 9 期联合项目',
  },
  {
    id: 'v31mj70',
    name: '生态联合攻关 9 期',
    field: '生态',
    tier: 9,
    target: 100,
    techId: 't-prod-10',
    costPerMember: { tech: 100 },
    desc: '生态领域第 9 期联合项目',
  },
  {
    id: 'v31mj71',
    name: '通讯联合攻关 9 期',
    field: '通讯',
    tier: 9,
    target: 100,
    techId: 't-build-1',
    costPerMember: { tech: 100 },
    desc: '通讯领域第 9 期联合项目',
  },
  {
    id: 'v31mj72',
    name: '医学联合攻关 9 期',
    field: '医学',
    tier: 9,
    target: 100,
    techId: 't-surv-2',
    costPerMember: { tech: 100 },
    desc: '医学领域第 9 期联合项目',
  },
  {
    id: 'v31mj73',
    name: '推进联合攻关 10 期',
    field: '推进',
    tier: 10,
    target: 100,
    techId: 't-prod-3',
    costPerMember: { tech: 110 },
    desc: '推进领域第 10 期联合项目',
  },
  {
    id: 'v31mj74',
    name: '材料联合攻关 10 期',
    field: '材料',
    tier: 10,
    target: 100,
    techId: 't-build-4',
    costPerMember: { tech: 110 },
    desc: '材料领域第 10 期联合项目',
  },
  {
    id: 'v31mj75',
    name: '生命联合攻关 10 期',
    field: '生命',
    tier: 10,
    target: 100,
    techId: 't-surv-5',
    costPerMember: { tech: 110 },
    desc: '生命领域第 10 期联合项目',
  },
  {
    id: 'v31mj76',
    name: '能源联合攻关 10 期',
    field: '能源',
    tier: 10,
    target: 100,
    techId: 't-prod-6',
    costPerMember: { tech: 110 },
    desc: '能源领域第 10 期联合项目',
  },
  {
    id: 'v31mj77',
    name: '计算联合攻关 10 期',
    field: '计算',
    tier: 10,
    target: 100,
    techId: 't-build-7',
    costPerMember: { tech: 110 },
    desc: '计算领域第 10 期联合项目',
  },
  {
    id: 'v31mj78',
    name: '生态联合攻关 10 期',
    field: '生态',
    tier: 10,
    target: 100,
    techId: 't-surv-8',
    costPerMember: { tech: 110 },
    desc: '生态领域第 10 期联合项目',
  },
  {
    id: 'v31mj79',
    name: '通讯联合攻关 10 期',
    field: '通讯',
    tier: 10,
    target: 100,
    techId: 't-prod-9',
    costPerMember: { tech: 110 },
    desc: '通讯领域第 10 期联合项目',
  },
  {
    id: 'v31mj80',
    name: '医学联合攻关 10 期',
    field: '医学',
    tier: 10,
    target: 100,
    techId: 't-build-10',
    costPerMember: { tech: 110 },
    desc: '医学领域第 10 期联合项目',
  },
  {
    id: 'v31mj81',
    name: '推进联合攻关 11 期',
    field: '推进',
    tier: 11,
    target: 100,
    techId: 't-surv-1',
    costPerMember: { tech: 120 },
    desc: '推进领域第 11 期联合项目',
  },
  {
    id: 'v31mj82',
    name: '材料联合攻关 11 期',
    field: '材料',
    tier: 11,
    target: 100,
    techId: 't-prod-2',
    costPerMember: { tech: 120 },
    desc: '材料领域第 11 期联合项目',
  },
  {
    id: 'v31mj83',
    name: '生命联合攻关 11 期',
    field: '生命',
    tier: 11,
    target: 100,
    techId: 't-build-3',
    costPerMember: { tech: 120 },
    desc: '生命领域第 11 期联合项目',
  },
  {
    id: 'v31mj84',
    name: '能源联合攻关 11 期',
    field: '能源',
    tier: 11,
    target: 100,
    techId: 't-surv-4',
    costPerMember: { tech: 120 },
    desc: '能源领域第 11 期联合项目',
  },
  {
    id: 'v31mj85',
    name: '计算联合攻关 11 期',
    field: '计算',
    tier: 11,
    target: 100,
    techId: 't-prod-5',
    costPerMember: { tech: 120 },
    desc: '计算领域第 11 期联合项目',
  },
  {
    id: 'v31mj86',
    name: '生态联合攻关 11 期',
    field: '生态',
    tier: 11,
    target: 100,
    techId: 't-build-6',
    costPerMember: { tech: 120 },
    desc: '生态领域第 11 期联合项目',
  },
  {
    id: 'v31mj87',
    name: '通讯联合攻关 11 期',
    field: '通讯',
    tier: 11,
    target: 100,
    techId: 't-surv-7',
    costPerMember: { tech: 120 },
    desc: '通讯领域第 11 期联合项目',
  },
  {
    id: 'v31mj88',
    name: '医学联合攻关 11 期',
    field: '医学',
    tier: 11,
    target: 100,
    techId: 't-prod-8',
    costPerMember: { tech: 120 },
    desc: '医学领域第 11 期联合项目',
  },
  {
    id: 'v31mj89',
    name: '推进联合攻关 12 期',
    field: '推进',
    tier: 12,
    target: 100,
    techId: 't-build-9',
    costPerMember: { tech: 130 },
    desc: '推进领域第 12 期联合项目',
  },
  {
    id: 'v31mj90',
    name: '材料联合攻关 12 期',
    field: '材料',
    tier: 12,
    target: 100,
    techId: 't-surv-10',
    costPerMember: { tech: 130 },
    desc: '材料领域第 12 期联合项目',
  },
  {
    id: 'v31mj91',
    name: '生命联合攻关 12 期',
    field: '生命',
    tier: 12,
    target: 100,
    techId: 't-prod-1',
    costPerMember: { tech: 130 },
    desc: '生命领域第 12 期联合项目',
  },
  {
    id: 'v31mj92',
    name: '能源联合攻关 12 期',
    field: '能源',
    tier: 12,
    target: 100,
    techId: 't-build-2',
    costPerMember: { tech: 130 },
    desc: '能源领域第 12 期联合项目',
  },
  {
    id: 'v31mj93',
    name: '计算联合攻关 12 期',
    field: '计算',
    tier: 12,
    target: 100,
    techId: 't-surv-3',
    costPerMember: { tech: 130 },
    desc: '计算领域第 12 期联合项目',
  },
  {
    id: 'v31mj94',
    name: '生态联合攻关 12 期',
    field: '生态',
    tier: 12,
    target: 100,
    techId: 't-prod-4',
    costPerMember: { tech: 130 },
    desc: '生态领域第 12 期联合项目',
  },
  {
    id: 'v31mj95',
    name: '通讯联合攻关 12 期',
    field: '通讯',
    tier: 12,
    target: 100,
    techId: 't-build-5',
    costPerMember: { tech: 130 },
    desc: '通讯领域第 12 期联合项目',
  },
  {
    id: 'v31mj96',
    name: '医学联合攻关 12 期',
    field: '医学',
    tier: 12,
    target: 100,
    techId: 't-surv-6',
    costPerMember: { tech: 130 },
    desc: '医学领域第 12 期联合项目',
  },
];

var V31MP_TECH_EXCHANGE_CATALOG = [
  {
    id: 'v31mx01',
    techId: 't-prod-1',
    askRes: 'water',
    askAmt: 10,
    sharePoints: 5,
    desc: '以水交换科技 t-prod-1',
  },
  {
    id: 'v31mx02',
    techId: 't-build-2',
    askRes: 'food',
    askAmt: 20,
    sharePoints: 5,
    desc: '以食物交换科技 t-build-2',
  },
  {
    id: 'v31mx03',
    techId: 't-surv-3',
    askRes: 'steel',
    askAmt: 30,
    sharePoints: 5,
    desc: '以钢材交换科技 t-surv-3',
  },
  {
    id: 'v31mx04',
    techId: 't-prod-4',
    askRes: 'rare',
    askAmt: 40,
    sharePoints: 5,
    desc: '以稀土交换科技 t-prod-4',
  },
  {
    id: 'v31mx05',
    techId: 't-build-5',
    askRes: 'tech',
    askAmt: 50,
    sharePoints: 5,
    desc: '以科技点交换科技 t-build-5',
  },
  {
    id: 'v31mx06',
    techId: 't-surv-6',
    askRes: 'uranium',
    askAmt: 60,
    sharePoints: 5,
    desc: '以铀矿交换科技 t-surv-6',
  },
  {
    id: 'v31mx07',
    techId: 't-prod-7',
    askRes: 'he3',
    askAmt: 10,
    sharePoints: 5,
    desc: '以氦-3交换科技 t-prod-7',
  },
  {
    id: 'v31mx08',
    techId: 't-build-8',
    askRes: 'power',
    askAmt: 20,
    sharePoints: 5,
    desc: '以电力交换科技 t-build-8',
  },
  {
    id: 'v31mx09',
    techId: 't-surv-9',
    askRes: 'credits',
    askAmt: 30,
    sharePoints: 5,
    desc: '以信用点交换科技 t-surv-9',
  },
  {
    id: 'v31mx10',
    techId: 't-prod-10',
    askRes: 'iron',
    askAmt: 40,
    sharePoints: 5,
    desc: '以铁矿交换科技 t-prod-10',
  },
  {
    id: 'v31mx11',
    techId: 't-build-1',
    askRes: 'ice',
    askAmt: 50,
    sharePoints: 5,
    desc: '以冰水交换科技 t-build-1',
  },
  {
    id: 'v31mx12',
    techId: 't-surv-2',
    askRes: 'water',
    askAmt: 60,
    sharePoints: 5,
    desc: '以水交换科技 t-surv-2',
  },
  {
    id: 'v31mx13',
    techId: 't-prod-3',
    askRes: 'food',
    askAmt: 10,
    sharePoints: 5,
    desc: '以食物交换科技 t-prod-3',
  },
  {
    id: 'v31mx14',
    techId: 't-build-4',
    askRes: 'steel',
    askAmt: 20,
    sharePoints: 5,
    desc: '以钢材交换科技 t-build-4',
  },
  {
    id: 'v31mx15',
    techId: 't-surv-5',
    askRes: 'rare',
    askAmt: 30,
    sharePoints: 5,
    desc: '以稀土交换科技 t-surv-5',
  },
  {
    id: 'v31mx16',
    techId: 't-prod-6',
    askRes: 'tech',
    askAmt: 40,
    sharePoints: 5,
    desc: '以科技点交换科技 t-prod-6',
  },
  {
    id: 'v31mx17',
    techId: 't-build-7',
    askRes: 'uranium',
    askAmt: 50,
    sharePoints: 5,
    desc: '以铀矿交换科技 t-build-7',
  },
  {
    id: 'v31mx18',
    techId: 't-surv-8',
    askRes: 'he3',
    askAmt: 60,
    sharePoints: 5,
    desc: '以氦-3交换科技 t-surv-8',
  },
  {
    id: 'v31mx19',
    techId: 't-prod-9',
    askRes: 'power',
    askAmt: 10,
    sharePoints: 5,
    desc: '以电力交换科技 t-prod-9',
  },
  {
    id: 'v31mx20',
    techId: 't-build-10',
    askRes: 'credits',
    askAmt: 20,
    sharePoints: 5,
    desc: '以信用点交换科技 t-build-10',
  },
  {
    id: 'v31mx21',
    techId: 't-surv-1',
    askRes: 'iron',
    askAmt: 30,
    sharePoints: 5,
    desc: '以铁矿交换科技 t-surv-1',
  },
  {
    id: 'v31mx22',
    techId: 't-prod-2',
    askRes: 'ice',
    askAmt: 40,
    sharePoints: 5,
    desc: '以冰水交换科技 t-prod-2',
  },
  {
    id: 'v31mx23',
    techId: 't-build-3',
    askRes: 'water',
    askAmt: 50,
    sharePoints: 5,
    desc: '以水交换科技 t-build-3',
  },
  {
    id: 'v31mx24',
    techId: 't-surv-4',
    askRes: 'food',
    askAmt: 60,
    sharePoints: 5,
    desc: '以食物交换科技 t-surv-4',
  },
  {
    id: 'v31mx25',
    techId: 't-prod-5',
    askRes: 'steel',
    askAmt: 10,
    sharePoints: 5,
    desc: '以钢材交换科技 t-prod-5',
  },
  {
    id: 'v31mx26',
    techId: 't-build-6',
    askRes: 'rare',
    askAmt: 20,
    sharePoints: 5,
    desc: '以稀土交换科技 t-build-6',
  },
  {
    id: 'v31mx27',
    techId: 't-surv-7',
    askRes: 'tech',
    askAmt: 30,
    sharePoints: 5,
    desc: '以科技点交换科技 t-surv-7',
  },
  {
    id: 'v31mx28',
    techId: 't-prod-8',
    askRes: 'uranium',
    askAmt: 40,
    sharePoints: 5,
    desc: '以铀矿交换科技 t-prod-8',
  },
  {
    id: 'v31mx29',
    techId: 't-build-9',
    askRes: 'he3',
    askAmt: 50,
    sharePoints: 5,
    desc: '以氦-3交换科技 t-build-9·第2批',
  },
  {
    id: 'v31mx30',
    techId: 't-surv-10',
    askRes: 'power',
    askAmt: 60,
    sharePoints: 5,
    desc: '以电力交换科技 t-surv-10·第2批',
  },
  {
    id: 'v31mx31',
    techId: 't-prod-1',
    askRes: 'credits',
    askAmt: 10,
    sharePoints: 5,
    desc: '以信用点交换科技 t-prod-1·第2批',
  },
  {
    id: 'v31mx32',
    techId: 't-build-2',
    askRes: 'iron',
    askAmt: 20,
    sharePoints: 5,
    desc: '以铁矿交换科技 t-build-2·第2批',
  },
  {
    id: 'v31mx33',
    techId: 't-surv-3',
    askRes: 'ice',
    askAmt: 30,
    sharePoints: 5,
    desc: '以冰水交换科技 t-surv-3·第2批',
  },
  {
    id: 'v31mx34',
    techId: 't-prod-4',
    askRes: 'water',
    askAmt: 40,
    sharePoints: 5,
    desc: '以水交换科技 t-prod-4·第2批',
  },
  {
    id: 'v31mx35',
    techId: 't-build-5',
    askRes: 'food',
    askAmt: 50,
    sharePoints: 5,
    desc: '以食物交换科技 t-build-5·第2批',
  },
  {
    id: 'v31mx36',
    techId: 't-surv-6',
    askRes: 'steel',
    askAmt: 60,
    sharePoints: 5,
    desc: '以钢材交换科技 t-surv-6·第2批',
  },
  {
    id: 'v31mx37',
    techId: 't-prod-7',
    askRes: 'rare',
    askAmt: 10,
    sharePoints: 5,
    desc: '以稀土交换科技 t-prod-7·第2批',
  },
  {
    id: 'v31mx38',
    techId: 't-build-8',
    askRes: 'tech',
    askAmt: 20,
    sharePoints: 5,
    desc: '以科技点交换科技 t-build-8·第2批',
  },
  {
    id: 'v31mx39',
    techId: 't-surv-9',
    askRes: 'uranium',
    askAmt: 30,
    sharePoints: 5,
    desc: '以铀矿交换科技 t-surv-9·第2批',
  },
  {
    id: 'v31mx40',
    techId: 't-prod-10',
    askRes: 'he3',
    askAmt: 40,
    sharePoints: 5,
    desc: '以氦-3交换科技 t-prod-10·第2批',
  },
  {
    id: 'v31mx41',
    techId: 't-build-1',
    askRes: 'power',
    askAmt: 50,
    sharePoints: 5,
    desc: '以电力交换科技 t-build-1·第2批',
  },
  {
    id: 'v31mx42',
    techId: 't-surv-2',
    askRes: 'credits',
    askAmt: 60,
    sharePoints: 5,
    desc: '以信用点交换科技 t-surv-2·第2批',
  },
  {
    id: 'v31mx43',
    techId: 't-prod-3',
    askRes: 'iron',
    askAmt: 10,
    sharePoints: 5,
    desc: '以铁矿交换科技 t-prod-3·第2批',
  },
  {
    id: 'v31mx44',
    techId: 't-build-4',
    askRes: 'ice',
    askAmt: 20,
    sharePoints: 5,
    desc: '以冰水交换科技 t-build-4·第2批',
  },
  {
    id: 'v31mx45',
    techId: 't-surv-5',
    askRes: 'water',
    askAmt: 30,
    sharePoints: 5,
    desc: '以水交换科技 t-surv-5·第2批',
  },
  {
    id: 'v31mx46',
    techId: 't-prod-6',
    askRes: 'food',
    askAmt: 40,
    sharePoints: 5,
    desc: '以食物交换科技 t-prod-6·第2批',
  },
  {
    id: 'v31mx47',
    techId: 't-build-7',
    askRes: 'steel',
    askAmt: 50,
    sharePoints: 5,
    desc: '以钢材交换科技 t-build-7·第2批',
  },
  {
    id: 'v31mx48',
    techId: 't-surv-8',
    askRes: 'rare',
    askAmt: 60,
    sharePoints: 5,
    desc: '以稀土交换科技 t-surv-8·第2批',
  },
  {
    id: 'v31mx49',
    techId: 't-prod-9',
    askRes: 'tech',
    askAmt: 10,
    sharePoints: 5,
    desc: '以科技点交换科技 t-prod-9·第2批',
  },
  {
    id: 'v31mx50',
    techId: 't-build-10',
    askRes: 'uranium',
    askAmt: 20,
    sharePoints: 5,
    desc: '以铀矿交换科技 t-build-10·第2批',
  },
  {
    id: 'v31mx51',
    techId: 't-surv-1',
    askRes: 'he3',
    askAmt: 30,
    sharePoints: 5,
    desc: '以氦-3交换科技 t-surv-1·第2批',
  },
  {
    id: 'v31mx52',
    techId: 't-prod-2',
    askRes: 'power',
    askAmt: 40,
    sharePoints: 5,
    desc: '以电力交换科技 t-prod-2·第2批',
  },
  {
    id: 'v31mx53',
    techId: 't-build-3',
    askRes: 'credits',
    askAmt: 50,
    sharePoints: 5,
    desc: '以信用点交换科技 t-build-3·第2批',
  },
  {
    id: 'v31mx54',
    techId: 't-surv-4',
    askRes: 'iron',
    askAmt: 60,
    sharePoints: 5,
    desc: '以铁矿交换科技 t-surv-4·第2批',
  },
  {
    id: 'v31mx55',
    techId: 't-prod-5',
    askRes: 'ice',
    askAmt: 10,
    sharePoints: 5,
    desc: '以冰水交换科技 t-prod-5·第2批',
  },
  {
    id: 'v31mx56',
    techId: 't-build-6',
    askRes: 'water',
    askAmt: 20,
    sharePoints: 5,
    desc: '以水交换科技 t-build-6·第2批',
  },
];

function V31MPResearchShare(roomId) {
  V31MPEventEmitter.call(this);
  this.roomId = roomId || null;
  this.projects = {};   // id -> joint project
  this.exchanges = {};  // id -> tech exchange
  this.granted = {};    // playerId -> [techId] 已获成果
  this.sharePoints = {}; // playerId -> 共享分
  this.log = [];
  this.clock = 0;
}
V31MPResearchShare.prototype = Object.create(V31MPEventEmitter.prototype);
V31MPResearchShare.prototype.constructor = V31MPResearchShare;

V31MPResearchShare.prototype._tick = function () { this.clock++; return this.clock; };
V31MPResearchShare.prototype._pushLog = function (text) {
  this.log.unshift({ at: Date.now(), text: text });
  if (this.log.length > V31MP_MAX_LOG) this.log.pop();
};
V31MPResearchShare.prototype._addSharePoints = function (playerId, pts) {
  this.sharePoints[playerId] = (this.sharePoints[playerId] || 0) + pts;
};
V31MPResearchShare.prototype._grant = function (playerId, techId) {
  if (!this.granted[playerId]) this.granted[playerId] = [];
  if (this.granted[playerId].indexOf(techId) < 0) this.granted[playerId].push(techId);
};
V31MPResearchShare.prototype.templateById = function (id) {
  for (var i = 0; i < V31MP_JOINT_PROJECTS.length; i++) if (V31MP_JOINT_PROJECTS[i].id === id) return V31MP_JOINT_PROJECTS[i];
  return null;
};
V31MPResearchShare.prototype.exchangeTemplateById = function (id) {
  for (var i = 0; i < V31MP_TECH_EXCHANGE_CATALOG.length; i++) if (V31MP_TECH_EXCHANGE_CATALOG[i].id === id) return V31MP_TECH_EXCHANGE_CATALOG[i];
  return null;
};
V31MPResearchShare.prototype.proposeJointProject = function (hostId, templateId) {
  var tpl = this.templateById(templateId);
  if (!tpl) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '未知联合项目模板');
  if (Object.keys(this.projects).length >= V31MP_MAX_PROJECTS) throw new V31MPError(V31MP_ERRORS.ROOM_FULL, '联合项目已满');
  var id = V31MPUtils.uid('v31proj');
  var proj = {
    id: id, templateId: templateId, name: tpl.name, techId: tpl.techId,
    hostId: hostId, members: {}, progress: 0, target: tpl.target,
    status: 'active', createdAt: Date.now(), clock: this._tick(),
  };
  proj.members[hostId] = { contrib: 0, joinedAt: Date.now() };
  this.projects[id] = proj;
  this._pushLog('联合项目发起：' + tpl.name);
  this.emit('project-proposed', proj);
  return proj;
};
V31MPResearchShare.prototype.joinProject = function (projectId, playerId) {
  var p = this.projects[projectId];
  if (!p) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '项目不存在');
  if (p.status !== 'active') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '项目已完成');
  if (p.members[playerId]) throw new V31MPError(V31MP_ERRORS.ALREADY_MEMBER);
  if (Object.keys(p.members).length >= V31MP_MAX_MEMBERS) throw new V31MPError(V31MP_ERRORS.ROOM_FULL);
  p.members[playerId] = { contrib: 0, joinedAt: Date.now() };
  p.clock = this._tick();
  this.emit('project-joined', { projectId: projectId, playerId: playerId });
  return p;
};
/* 联合项目出资：进度 += 出资 × (1+0.15×(人数-1))；满 100 自动完成，
 * 全体成员获得成果科技（记入 granted，门面层再调 game.tech.unlock）。 */
V31MPResearchShare.prototype.contributeProject = function (projectId, playerId, techPoints) {
  var p = this.projects[projectId];
  if (!p) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '项目不存在');
  if (p.status !== 'active') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '项目已完成');
  if (!p.members[playerId]) throw new V31MPError(V31MP_ERRORS.NOT_MEMBER);
  if (!V31MPUtils.isValidAmount(techPoints)) throw new V31MPError(V31MP_ERRORS.INVALID_AMOUNT);
  var n = Object.keys(p.members).length;
  var synergy = 1 + V31MP_RESEARCH_SYNERGY * (n - 1);
  var gained = techPoints * synergy;
  p.members[playerId].contrib += techPoints;
  p.progress += gained;
  p.clock = this._tick();
  this._addSharePoints(playerId, Math.floor(techPoints / 10));
  this.emit('project-contributed', { projectId: projectId, playerId: playerId, techPoints: techPoints, gained: gained, progress: p.progress });
  if (p.progress >= p.target) return this.completeProject(projectId);
  return { project: p, completed: false, gained: gained };
};
V31MPResearchShare.prototype.completeProject = function (projectId) {
  var p = this.projects[projectId];
  if (!p) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '项目不存在');
  if (p.status === 'done') throw new V31MPError(V31MP_ERRORS.ALREADY_SETTLED);
  p.status = 'done';
  p.completedAt = Date.now();
  p.clock = this._tick();
  var memberIds = Object.keys(p.members);
  for (var i = 0; i < memberIds.length; i++) {
    this._grant(memberIds[i], p.techId);
    this._addSharePoints(memberIds[i], 10);
  }
  var rec = { kind: 'project', id: projectId, name: p.name, techId: p.techId,
    members: memberIds, progress: p.progress, at: Date.now() };
  this._pushLog('联合项目完成：' + p.name + '，全体获得 ' + p.techId);
  this.emit('project-completed', rec);
  return { project: p, completed: true, record: rec };
};
V31MPResearchShare.prototype.costShare = function (projectId) {
  var p = this.projects[projectId];
  if (!p) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '项目不存在');
  var tpl = this.templateById(p.templateId);
  var n = Math.max(1, Object.keys(p.members).length);
  var per = tpl ? tpl.costPerMember.tech : 0;
  return { perMember: per, total: per * n, members: n, techId: p.techId };
};
V31MPResearchShare.prototype.offerTechExchange = function (fromId, toId, catalogId) {
  var tpl = this.exchangeTemplateById(catalogId);
  if (!tpl) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '未知交换条目');
  if (fromId === toId) throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '不能与自己交换');
  var id = V31MPUtils.uid('v31xchg');
  var ex = {
    id: id, fromId: fromId, toId: toId, techId: tpl.techId,
    askRes: tpl.askRes, askAmt: tpl.askAmt, sharePoints: tpl.sharePoints,
    status: 'offered', createdAt: Date.now(), clock: this._tick(),
  };
  this.exchanges[id] = ex;
  this.emit('tech-offered', ex);
  return ex;
};
/* 成果交换接受：接收方获得科技（记入 granted），出让方获得约定资源
 * （记入结算记录，门面层再写 game.player.inv）；双方各得 5 点共享分。 */
V31MPResearchShare.prototype.acceptTechExchange = function (exchangeId, playerId) {
  var ex = this.exchanges[exchangeId];
  if (!ex) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '交换不存在');
  if (ex.status !== 'offered') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '交换已处理');
  if (ex.toId !== playerId) throw new V31MPError(V31MP_ERRORS.NOT_MEMBER, '不是该交换的接收方');
  ex.status = 'accepted';
  ex.acceptedAt = Date.now();
  ex.clock = this._tick();
  this._grant(playerId, ex.techId);
  this._addSharePoints(ex.fromId, ex.sharePoints);
  this._addSharePoints(playerId, ex.sharePoints);
  var rec = { kind: 'tech-exchange', id: exchangeId, techId: ex.techId,
    fromId: ex.fromId, toId: playerId, askRes: ex.askRes, askAmt: ex.askAmt, at: Date.now() };
  this._pushLog('成果交换完成：' + ex.techId + ' → ' + playerId);
  this.emit('tech-accepted', rec);
  return rec;
};
V31MPResearchShare.prototype.rejectTechExchange = function (exchangeId, playerId) {
  var ex = this.exchanges[exchangeId];
  if (!ex) throw new V31MPError(V31MP_ERRORS.NOT_FOUND, '交换不存在');
  if (ex.status !== 'offered') throw new V31MPError(V31MP_ERRORS.INVALID_STATE, '交换已处理');
  if (ex.toId !== playerId && ex.fromId !== playerId) throw new V31MPError(V31MP_ERRORS.NOT_MEMBER, '与该交换无关');
  ex.status = 'rejected';
  ex.clock = this._tick();
  this.emit('tech-rejected', ex);
  return ex;
};
V31MPResearchShare.prototype.leaderboard = function () {
  var out = [];
  for (var pid in this.sharePoints) out.push({ playerId: pid, points: this.sharePoints[pid], techs: (this.granted[pid] || []).length });
  out.sort(function (x, y) { return y.points - x.points; });
  return out;
};
V31MPResearchShare.prototype.snapshot = function () {
  return {
    roomId: this.roomId, clock: this.clock,
    projects: V31MPUtils.deepClone(this.projects),
    exchanges: V31MPUtils.deepClone(this.exchanges),
    granted: V31MPUtils.deepClone(this.granted),
    sharePoints: V31MPUtils.deepClone(this.sharePoints),
  };
};
V31MPResearchShare.prototype.restoreSnapshot = function (snap) {
  if (!snap) return this;
  this.projects = V31MPUtils.deepClone(snap.projects || {});
  this.exchanges = V31MPUtils.deepClone(snap.exchanges || {});
  this.granted = V31MPUtils.deepClone(snap.granted || {});
  this.sharePoints = V31MPUtils.deepClone(snap.sharePoints || {});
  this.clock = Math.max(this.clock, snap.clock || 0);
  return this;
};

/* ================================================================
 * 6. 房间同步：快照 / 增量 / 校验和
 * 状态 = 三个子系统的快照 + Lamport 式时钟；哈希为 FNV-1a，
 * 各端定期比对，发现分叉后向房主请求快照重同步。
 * ================================================================ */

function V31MPRoomSync(trade, culture, research) {
  V31MPEventEmitter.call(this);
  this.trade = trade || null;
  this.culture = culture || null;
  this.research = research || null;
  this.clock = 0;
  this.lastHash = '';
}
V31MPRoomSync.prototype = Object.create(V31MPEventEmitter.prototype);
V31MPRoomSync.prototype.constructor = V31MPRoomSync;

V31MPRoomSync.prototype.snapshot = function () {
  var snap = {
    version: V31MP_PROTOCOL_VERSION,
    at: Date.now(),
    clock: this.clock,
    trade: this.trade ? this.trade.snapshot() : null,
    culture: this.culture ? this.culture.snapshot() : null,
    research: this.research ? this.research.snapshot() : null,
  };
  snap.hash = this.hashOf(snap);
  return snap;
};
V31MPRoomSync.prototype.hashOf = function (snap) {
  var parts = [];
  try {
    var t = snap.trade || {};
    var c = snap.culture || {};
    var r = snap.research || {};
    parts.push('car:' + Object.keys(t.caravans || {}).sort().join(','));
    parts.push('lst:' + Object.keys(t.listings || {}).sort().join(','));
    parts.push('fst:' + Object.keys(c.festivals || {}).sort().join(','));
    parts.push('tour:' + Object.keys(c.tours || {}).sort().join(','));
    parts.push('prj:' + Object.keys(r.projects || {}).sort().join(','));
    parts.push('xchg:' + Object.keys(r.exchanges || {}).sort().join(','));
    parts.push('clk:' + (snap.clock || 0));
  } catch (e) {
    parts.push('err');
  }
  return V31MPUtils.fnv1a(parts.join('|'));
};
V31MPRoomSync.prototype.stateHash = function () {
  var snap = this.snapshot();
  this.lastHash = snap.hash;
  return snap.hash;
};
V31MPRoomSync.prototype.compareHash = function (remoteHash, remoteClock) {
  var mine = this.stateHash();
  if (mine === remoteHash) return { inSync: true, hash: mine };
  return {
    inSync: false, hash: mine, remoteHash: remoteHash,
    clockDiff: (remoteClock || 0) - this.clock,
    hint: '状态分叉：请向房主请求快照重同步',
  };
};
V31MPRoomSync.prototype.restoreSnapshot = function (snap) {
  if (!snap || snap.version !== V31MP_PROTOCOL_VERSION) throw new V31MPError(V31MP_ERRORS.VERSION_MISMATCH);
  if (this.trade && snap.trade) this.trade.restoreSnapshot(snap.trade);
  if (this.culture && snap.culture) this.culture.restoreSnapshot(snap.culture);
  if (this.research && snap.research) this.research.restoreSnapshot(snap.research);
  this.clock = Math.max(this.clock, snap.clock || 0);
  this.lastHash = snap.hash || '';
  this.emit('snapshot-restored', snap);
  return this;
};
V31MPRoomSync.prototype.makeDelta = function (kind, id, change) {
  this.clock++;
  return { kind: kind, id: id, change: V31MPUtils.deepClone(change || {}), clock: this.clock, at: Date.now() };
};
V31MPRoomSync.prototype.applyDelta = function (delta) {
  if (!delta || !delta.kind) return { ok: false, reason: '增量不合法' };
  if (typeof delta.clock === 'number') this.clock = Math.max(this.clock, delta.clock);
  this.emit('delta-applied', delta);
  return { ok: true, kind: delta.kind, id: delta.id };
};

/* ================================================================
 * 7. 门面层：MultiplayerV31Integration
 * attach(game)：在 game 上挂 game.mpV31；优先复用已有房间
 * （game.v30ui.mp / game.mp / game.multiplayer），否则以进程内
 * 总线独立运行；收到 v31 消息时分发到三个子系统。
 * ================================================================ */

function MultiplayerV31Integration(game, opts) {
  V31MPEventEmitter.call(this);
  opts = opts || {};
  this.game = game || null;
  this.opts = opts;
  this.roomId = opts.roomId || null;
  this.meId = opts.meId || ('me-' + V31MPUtils.shortCode(V31MPUtils.uid('p')));
  this.trade = new V31MPTradeCoop(this.roomId);
  this.culture = new V31MPCultureExchange(this.roomId);
  this.research = new V31MPResearchShare(this.roomId);
  this.sync = new V31MPRoomSync(this.trade, this.culture, this.research);
  this.mp = null;        // 已有 MPMultiplayerManager（可空）
  this.busChannel = opts.busChannel || 'starport-v31-room';
  this._busHandler = null;
  this._mpHandler = null;
  this.attached = false;
}
MultiplayerV31Integration.prototype = Object.create(V31MPEventEmitter.prototype);
MultiplayerV31Integration.prototype.constructor = MultiplayerV31Integration;

MultiplayerV31Integration.prototype.findExistingMp = function () {
  var g = this.game || {};
  try {
    if (g.v30ui && g.v30ui.mp) return g.v30ui.mp;
    if (g.mp) return g.mp;
    if (g.multiplayer) return g.multiplayer;
    if (g.v30ui && typeof g.v30ui.getMultiplayer === 'function') {
      var m = g.v30ui.getMultiplayer();
      if (m) return m;
    }
  } catch (e) {}
  return null;
};
MultiplayerV31Integration.prototype.attach = function () {
  if (this.attached) return this;
  this.mp = this.findExistingMp();
  if (this.mp && this.mp.room) this.roomId = this.mp.room.id || this.roomId;
  if (this.roomId) {
    this.trade.roomId = this.roomId;
    this.culture.roomId = this.roomId;
    this.research.roomId = this.roomId;
  }
  var self = this;
  this._busHandler = function (env) { self._handleRemote(env); };
  V31MP_BUS.subscribe(this.busChannel, this._busHandler);
  try {
    if (this.mp && this.mp.transport && typeof this.mp.transport.on === 'function') {
      this._mpHandler = function (env) { self._handleRemote(env); };
      this.mp.transport.on('message', this._mpHandler);
    } else if (this.mp && typeof this.mp.on === 'function') {
      this._mpHandler = function (env) { self._handleRemote(env); };
      this.mp.on('op', this._mpHandler);
    }
  } catch (e) {}
  this.attached = true;
  if (this.game) this.game.mpV31 = this;
  this.emit('attached', { roomId: this.roomId, viaMp: !!this.mp });
  return this;
};
MultiplayerV31Integration.prototype.detach = function () {
  if (!this.attached) return this;
  try {
    if (this._busHandler) V31MP_BUS.unsubscribe(this.busChannel, this._busHandler);
  } catch (e) {}
  this._busHandler = null;
  this._mpHandler = null;
  this.attached = false;
  if (this.game && this.game.mpV31 === this) delete this.game.mpV31;
  this.emit('detached', {});
  return this;
};
/* 发送一条 v31 消息：优先走已有房间传输层，否则走进程内总线。 */
MultiplayerV31Integration.prototype._send = function (type, payload) {
  var env = { type: type, payload: payload || {}, from: this.meId, at: Date.now() };
  try {
    if (this.mp && typeof this.mp._send === 'function') { this.mp._send(type, payload); return env; }
  } catch (e) {}
  try {
    if (this.mp && this.mp.transport && typeof this.mp.transport.send === 'function') {
      this.mp.transport.send(type, payload);
      return env;
    }
  } catch (e) {}
  V31MP_BUS.publish(this.busChannel, env);
  return env;
};
/* 远端 v31 消息入口：只处理 'v31-' 前缀类型，其余忽略。
 * 本地回显（from === meId）直接忽略，避免重复应用。 */
MultiplayerV31Integration.prototype._handleRemote = function (env) {
  if (!env || typeof env.type !== 'string') return;
  if (env.type.indexOf('v31-') !== 0) return;
  if (env.from && env.from === this.meId) return;
  var p = env.payload || {};
  try {
    switch (env.type) {
      case V31MP_MSG_TYPES.CARAVAN_CREATE:
        if (p.caravan && !this.trade.caravans[p.caravan.id]) {
          this.trade.caravans[p.caravan.id] = p.caravan;
          this.emit('remote-caravan', p.caravan);
        }
        break;
      case V31MP_MSG_TYPES.CARAVAN_SETTLE:
        if (p.record) this.trade._logSettle(p.record);
        break;
      case V31MP_MSG_TYPES.MARKET_LIST:
        if (p.listing && !this.trade.listings[p.listing.id]) this.trade.listings[p.listing.id] = p.listing;
        break;
      case V31MP_MSG_TYPES.FESTIVAL_PROPOSE:
        if (p.festival && !this.culture.festivals[p.festival.id]) this.culture.festivals[p.festival.id] = p.festival;
        break;
      case V31MP_MSG_TYPES.FESTIVAL_SETTLE:
        if (p.record) {
          for (var pid in p.record.shares) this.culture._addCulture(pid, p.record.shares[pid], (p.record.happy || {})[pid] || 0);
        }
        break;
      case V31MP_MSG_TYPES.TOUR_SEND:
        if (p.tour && !this.culture.tours[p.tour.id]) this.culture.tours[p.tour.id] = p.tour;
        break;
      case V31MP_MSG_TYPES.PROJECT_PROPOSE:
        if (p.project && !this.research.projects[p.project.id]) this.research.projects[p.project.id] = p.project;
        break;
      case V31MP_MSG_TYPES.PROJECT_COMPLETE:
        if (p.record) {
          var members = p.record.members || [];
          for (var i = 0; i < members.length; i++) this.research._grant(members[i], p.record.techId);
          this._applyGrantedToGame(p.record.techId);
        }
        break;
      case V31MP_MSG_TYPES.TECH_ACCEPT:
        if (p.record) {
          this.research._grant(p.record.toId, p.record.techId);
          if (p.record.toId === this.meId) this._applyGrantedToGame(p.record.techId);
        }
        break;
      case V31MP_MSG_TYPES.SYNC_SNAPSHOT:
        if (p.snapshot) { try { this.sync.restoreSnapshot(p.snapshot); } catch (e) {} }
        break;
      case V31MP_MSG_TYPES.SYNC_DELTA:
        if (p.delta) this.sync.applyDelta(p.delta);
        break;
      default:
        break;
    }
  } catch (e) {}
  this.emit('remote', env);
};
/* 联合项目完成 / 成果交换到账时，尝试把科技写进真实游戏。 */
MultiplayerV31Integration.prototype._applyGrantedToGame = function (techId) {
  var g = this.game || {};
  try {
    if (g.tech && typeof g.tech.unlock === 'function') g.tech.unlock(techId, (g.player && g.player.inv) || {});
  } catch (e) {}
  return this;
};
/* --- 对外便捷方法（本地执行 + 广播） --- */
MultiplayerV31Integration.prototype.createCaravan = function (routeId, cargoRes, cargoAmt) {
  var c = this.trade.createCaravan(this.meId, routeId, cargoRes, cargoAmt);
  this._send(V31MP_MSG_TYPES.CARAVAN_CREATE, { caravan: c });
  return c;
};
MultiplayerV31Integration.prototype.settleCaravan = function (caravanId) {
  var rec = this.trade.settleCaravan(caravanId);
  this._send(V31MP_MSG_TYPES.CARAVAN_SETTLE, { record: rec });
  this._applyCaravanSharesToGame(rec);
  return rec;
};
MultiplayerV31Integration.prototype._applyCaravanSharesToGame = function (rec) {
  var g = this.game || {};
  try {
    if (g.player && g.player.inv && rec.shares && rec.shares[this.meId] && rec.getRes) {
      g.player.inv[rec.getRes] = (g.player.inv[rec.getRes] || 0) + rec.shares[this.meId];
      if (typeof g.updateHUD === 'function') g.updateHUD();
    }
  } catch (e) {}
  return this;
};
MultiplayerV31Integration.prototype.createListing = function (res, amount, price) {
  var l = this.trade.createListing(this.meId, res, amount, price);
  this._send(V31MP_MSG_TYPES.MARKET_LIST, { listing: l });
  return l;
};
MultiplayerV31Integration.prototype.buyListing = function (listingId, amount) {
  var rec = this.trade.buyListing(listingId, this.meId, amount);
  this._send(V31MP_MSG_TYPES.MARKET_BUY, { record: rec });
  return rec;
};
MultiplayerV31Integration.prototype.proposeJointFestival = function (templateId) {
  var f = this.culture.proposeJointFestival(this.meId, templateId);
  this._send(V31MP_MSG_TYPES.FESTIVAL_PROPOSE, { festival: f });
  return f;
};
MultiplayerV31Integration.prototype.settleFestival = function (festivalId) {
  var rec = this.culture.settleFestival(festivalId);
  this._send(V31MP_MSG_TYPES.FESTIVAL_SETTLE, { record: rec });
  return rec;
};
MultiplayerV31Integration.prototype.sendWorkOnTour = function (toId, workId, quality) {
  var t = this.culture.sendWorkOnTour(this.meId, toId, workId, quality);
  this._send(V31MP_MSG_TYPES.TOUR_SEND, { tour: t });
  return t;
};
MultiplayerV31Integration.prototype.proposeJointProject = function (templateId) {
  var p = this.research.proposeJointProject(this.meId, templateId);
  this._send(V31MP_MSG_TYPES.PROJECT_PROPOSE, { project: p });
  return p;
};
MultiplayerV31Integration.prototype.contributeProject = function (projectId, techPoints) {
  var res = this.research.contributeProject(projectId, this.meId, techPoints);
  this._send(V31MP_MSG_TYPES.PROJECT_CONTRIBUTE, { projectId: projectId, playerId: this.meId, techPoints: techPoints });
  if (res.completed) {
    this._send(V31MP_MSG_TYPES.PROJECT_COMPLETE, { record: res.record });
    this._applyGrantedToGame(res.record.techId);
  }
  return res;
};
MultiplayerV31Integration.prototype.offerTechExchange = function (toId, catalogId) {
  var ex = this.research.offerTechExchange(this.meId, toId, catalogId);
  this._send(V31MP_MSG_TYPES.TECH_OFFER, { exchange: ex });
  return ex;
};
MultiplayerV31Integration.prototype.acceptTechExchange = function (exchangeId) {
  var rec = this.research.acceptTechExchange(exchangeId, this.meId);
  this._send(V31MP_MSG_TYPES.TECH_ACCEPT, { record: rec });
  this._applyGrantedToGame(rec.techId);
  return rec;
};
MultiplayerV31Integration.prototype.broadcastSnapshot = function () {
  var snap = this.sync.snapshot();
  this._send(V31MP_MSG_TYPES.SYNC_SNAPSHOT, { snapshot: snap });
  return snap;
};
MultiplayerV31Integration.prototype.requestResync = function () {
  this._send(V31MP_MSG_TYPES.SYNC_HASH, { hash: this.sync.stateHash(), clock: this.sync.clock });
  return { hash: this.sync.lastHash, clock: this.sync.clock };
};
MultiplayerV31Integration.prototype.diagnostics = function () {
  return {
    attached: this.attached,
    roomId: this.roomId,
    meId: this.meId,
    viaMp: !!this.mp,
    caravans: Object.keys(this.trade.caravans).length,
    listings: Object.keys(this.trade.listings).length,
    festivals: Object.keys(this.culture.festivals).length,
    tours: Object.keys(this.culture.tours).length,
    projects: Object.keys(this.research.projects).length,
    exchanges: Object.keys(this.research.exchanges).length,
    clock: this.sync.clock,
    hash: this.sync.stateHash(),
    busSent: V31MP_BUS.sentCount,
    busRecv: V31MP_BUS.recvCount,
  };
};
MultiplayerV31Integration.attach = function (game, opts) {
  if (game && game.mpV31) return game.mpV31;
  var inst = new MultiplayerV31Integration(game, opts);
  inst.attach();
  return inst;
};
MultiplayerV31Integration.selfTest = function (mockGame) {
  var results = [];
  var run = function (name, fn) {
    try { var r = fn(); results.push({ name: name, ok: true, detail: r }); }
    catch (e) { results.push({ name: name, ok: false, error: e.message }); }
  };
  run('attach', function () {
    var inst = MultiplayerV31Integration.attach(mockGame || {}, { meId: 'v31test-me' });
    if (!inst.attached) throw new Error('未挂接');
    inst.detach();
    return 'ok';
  });
  run('caravan', function () {
    var inst = new MultiplayerV31Integration(mockGame || {}, { meId: 'v31test-a' });
    inst.attach();
    var c = inst.createCaravan('v31mc01', 'iron', 100);
    inst.trade.joinCaravan(c.id, 'v31test-b', 50);
    var rec = inst.settleCaravan(c.id);
    if (rec.gross <= 0 || !rec.shares['v31test-a']) throw new Error('结算异常');
    inst.detach();
    return 'gross=' + rec.gross;
  });
  run('market', function () {
    var inst = new MultiplayerV31Integration(mockGame || {}, { meId: 'v31test-a' });
    inst.attach();
    var price = inst.trade.marketPrice('iron');
    var l = inst.createListing('steel', 10, 20);
    var rec = inst.trade.buyListing(l.id, 'v31test-b', 4);
    if (rec.total !== 80) throw new Error('成交价异常');
    inst.detach();
    return 'price=' + price.price;
  });
  run('festival', function () {
    var inst = new MultiplayerV31Integration(mockGame || {}, { meId: 'v31test-a' });
    inst.attach();
    var f = inst.proposeJointFestival('v31mf01');
    inst.culture.joinFestival(f.id, 'v31test-b');
    inst.culture.contributeFestival(f.id, 'v31test-a', 30);
    inst.culture.contributeFestival(f.id, 'v31test-b', 30);
    var rec = inst.settleFestival(f.id);
    if (rec.totalCulture <= 0) throw new Error('文化结算异常');
    inst.detach();
    return 'culture=' + rec.totalCulture;
  });
  run('tour', function () {
    var inst = new MultiplayerV31Integration(mockGame || {}, { meId: 'v31test-a' });
    inst.attach();
    var t = inst.sendWorkOnTour('v31test-b', 'v31mt01', 80);
    inst.culture.receiveTour(t.id, 'v31test-b');
    var rec = inst.culture.completeTour(t.id);
    if (rec.hostGain <= 0) throw new Error('巡展结算异常');
    inst.detach();
    return 'hostGain=' + rec.hostGain;
  });
  run('project', function () {
    var inst = new MultiplayerV31Integration(mockGame || {}, { meId: 'v31test-a' });
    inst.attach();
    var p = inst.proposeJointProject('v31mj01');
    inst.research.joinProject(p.id, 'v31test-b');
    var res = inst.contributeProject(p.id, 90);  // 90 × (1+0.15×(2-1)) = 103.5 ≥ 目标 100
    if (!res.completed) throw new Error('联合项目应已完成');
    inst.detach();
    return 'tech=' + res.record.techId;
  });
  run('tech-exchange', function () {
    var inst = new MultiplayerV31Integration(mockGame || {}, { meId: 'v31test-a' });
    inst.attach();
    var ex = inst.offerTechExchange('v31test-b', 'v31mx01');
    var rec = inst.research.acceptTechExchange(ex.id, 'v31test-b');
    if (!rec.techId) throw new Error('交换异常');
    inst.detach();
    return 'tech=' + rec.techId;
  });
  run('sync', function () {
    var inst = new MultiplayerV31Integration(mockGame || {}, { meId: 'v31test-a' });
    inst.attach();
    inst.createCaravan('v31mc02', 'food', 50);
    var snap = inst.broadcastSnapshot();
    var inst2 = new MultiplayerV31Integration(mockGame || {}, { meId: 'v31test-b' });
    inst2.attach();
    inst2.sync.restoreSnapshot(snap);
    var cmp = inst2.sync.compareHash(inst.sync.stateHash(), inst.sync.clock);
    if (!cmp.inSync) throw new Error('快照同步后哈希不一致');
    inst.detach();
    inst2.detach();
    return 'hash=' + snap.hash;
  });
  return results;
};

/* ================================================================
 * 导出（浏览器全局 + Node）
 * ================================================================ */
if (typeof window !== 'undefined') {
  window.V31MPUtils = V31MPUtils;
  window.V31MPError = V31MPError;
  window.V31MPEventEmitter = V31MPEventEmitter;
  window.V31MPBus = V31MPBus;
  window.V31MP_BUS = V31MP_BUS;
  window.V31MPTradeCoop = V31MPTradeCoop;
  window.V31MPCultureExchange = V31MPCultureExchange;
  window.V31MPResearchShare = V31MPResearchShare;
  window.V31MPRoomSync = V31MPRoomSync;
  window.MultiplayerV31Integration = MultiplayerV31Integration;
  window.V31MP_PROTOCOL_VERSION = V31MP_PROTOCOL_VERSION;
  window.V31MP_MSG_TYPES = V31MP_MSG_TYPES;
  window.V31MP_ERRORS = V31MP_ERRORS;
  window.V31MP_CARAVAN_ROUTES = V31MP_CARAVAN_ROUTES;
  window.V31MP_MARKET_GOODS = V31MP_MARKET_GOODS;
  window.V31MP_FESTIVAL_TEMPLATES = V31MP_FESTIVAL_TEMPLATES;
  window.V31MP_TOUR_WORKS = V31MP_TOUR_WORKS;
  window.V31MP_JOINT_PROJECTS = V31MP_JOINT_PROJECTS;
  window.V31MP_TECH_EXCHANGE_CATALOG = V31MP_TECH_EXCHANGE_CATALOG;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    V31MPUtils: V31MPUtils,
    V31MPError: V31MPError,
    V31MPEventEmitter: V31MPEventEmitter,
    V31MPBus: V31MPBus,
    V31MP_BUS: V31MP_BUS,
    V31MPTradeCoop: V31MPTradeCoop,
    V31MPCultureExchange: V31MPCultureExchange,
    V31MPResearchShare: V31MPResearchShare,
    V31MPRoomSync: V31MPRoomSync,
    MultiplayerV31Integration: MultiplayerV31Integration,
    V31MP_PROTOCOL_VERSION: V31MP_PROTOCOL_VERSION,
    V31MP_MSG_TYPES: V31MP_MSG_TYPES,
    V31MP_ERRORS: V31MP_ERRORS,
    V31MP_CARAVAN_ROUTES: V31MP_CARAVAN_ROUTES,
    V31MP_MARKET_GOODS: V31MP_MARKET_GOODS,
    V31MP_FESTIVAL_TEMPLATES: V31MP_FESTIVAL_TEMPLATES,
    V31MP_TOUR_WORKS: V31MP_TOUR_WORKS,
    V31MP_JOINT_PROJECTS: V31MP_JOINT_PROJECTS,
    V31MP_TECH_EXCHANGE_CATALOG: V31MP_TECH_EXCHANGE_CATALOG,
  };
}

