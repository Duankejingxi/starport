/* 星港 — multiplayer.js：多人联机框架 v3.0
 * ------------------------------------------------------------------
 * 真实功能，不含填充物。同一浏览器多标签页通过 localStorage +
 * BroadcastChannel 模拟联机；Node 环境自动降级为进程内内存总线，
 * 因此同一份代码可在 node --check / 自测脚本里直接跑。
 *
 * 子系统：
 *   1. 协议层      MP_PROTOCOL_VERSION / MP_MSG_TYPES / MP_ERRORS
 *   2. 工具层      MPUtils（id/哈希/校验/深拷贝/限流）
 *   3. 事件层      MPEventEmitter
 *   4. 传输层      MPLocalTransport（BroadcastChannel + storage 事件 + 内存总线）
 *   5. 房间层      MPRoom / MPRoomManager（创建/加入/列表/密码/邀请/封禁）
 *   6. 在线层      MPPresenceManager（心跳/延迟/掉线判定）
 *   7. 权限层      MPRoleManager（房主/管理员/成员 / 七大分工）
 *   8. 同步层      MPSyncEngine（Lamport 时钟 + 操作日志 + 快照/增量）
 *   9. 冲突层      MPConflictResolver（同格抢建 / 资源合并 / 确定性仲裁）
 *  10. 聊天层      MPChatManager（频道/表情/指令/禁言/反应）
 *  11. 合作层      MPCoOpManager（分工/任务板/贡献分/共同目标）
 *  12. 门面层      MPMultiplayerManager（接 game.js 状态，收发操作）
 *
 * 与 game.js 的对接点（只读 + 运行时包装，不改 game.js）：
 *   game.player.inv / game.builder.buildings / game.pop.count /
 *   game.builder.canPlace / game.builder.place / game.map.size
 * 加载顺序：放在 game.js 之后即可；未加载 game.js 时也可独立使用
 * （SyncEngine 操作的是普通 plain-object 状态，与游戏解耦）。
 * ------------------------------------------------------------------
 */

'use strict';

/* ================================================================
 * 1. 协议层
 * ================================================================ */

var MP_PROTOCOL_VERSION = 3;
var MP_PROTOCOL_MIN_COMPAT = 3;
var MP_ROOM_REGISTRY_KEY = 'starport-mp-rooms-v3';
var MP_CHAT_HISTORY_KEY = 'starport-mp-chat-v3';
var MP_HEARTBEAT_MS = 3000;        // 心跳间隔
var MP_PRESENCE_TIMEOUT_MS = 10000; // 超过该时间无心跳视为掉线
var MP_MAX_PLAYERS_DEFAULT = 4;
var MP_MAX_PLAYERS_LIMIT = 8;
var MP_MAX_ROOMS = 64;             // 注册表上限（防 localStorage 爆掉）
var MP_MAX_CHAT_HISTORY = 200;
var MP_MAX_OP_LOG = 2000;          // 操作日志上限（环形截断）
var MP_MAX_MSG_BYTES = 4096;       // 单条聊天消息上限（字符数按 UTF-16 计）
var MP_OP_RETRY_MS = 500;          // 操作未确认时的重发间隔
var MP_OP_ACK_TIMEOUT_MS = 5000;

/* 消息类型：传输层信封 type 字段的全部取值。 */
var MP_MSG_TYPES = {
  HELLO: 'hello',               // 加入房间后握手：宣告身份 + 协议版本
  HELLO_ACK: 'hello-ack',       // 房主回握手：房间快照 + 成员表
  BYE: 'bye',                   // 主动离开
  HEARTBEAT: 'heartbeat',       // 心跳（含延迟测量回显）
  PING: 'ping',                 // 延迟测量
  PONG: 'pong',
  ROOM_ANNOUNCE: 'room-announce', // 房间创建/更新/关闭广播（注册表变化）
  OP: 'op',                     // 同步操作（建筑/资源/人口/科技/政策）
  OP_ACK: 'op-ack',             // 操作确认（房主/接收方回执）
  OP_REJECT: 'op-reject',       // 操作被拒（校验失败/冲突败方）
  SNAPSHOT_REQ: 'snapshot-req', // 请求全量快照
  SNAPSHOT: 'snapshot',         // 全量快照
  DELTA: 'delta',               // 增量补丁（自某 Lamport 时钟之后的操作）
  CHAT: 'chat',                 // 聊天消息
  CHAT_REACT: 'chat-react',     // 表情反应
  ROLE_CHANGE: 'role-change',   // 角色/分工变更
  KICK: 'kick',                 // 踢人
  BAN: 'ban',                   // 封禁
  TRANSFER_HOST: 'transfer-host', // 房主转移
  VOTE_START: 'vote-start',     // 投票开始（踢人/政策/目标）
  VOTE_CAST: 'vote-cast',       // 投票
  VOTE_END: 'vote-end',         // 投票结果
  TASK_ASSIGN: 'task-assign',   // 合作任务指派
  TASK_DONE: 'task-done',       // 任务完成上报
  GOAL_SET: 'goal-set',         // 共同目标设定
  SYSTEM: 'system',             // 系统消息（加入/离开/封禁等）
};

/* 错误码：所有面向调用方的失败都用 MPError(code) 表达。 */
var MP_ERRORS = {
  OK: 0,
  ROOM_NOT_FOUND: 1001,
  ROOM_FULL: 1002,
  WRONG_PASSWORD: 1003,
  BANNED: 1004,
  ALREADY_IN_ROOM: 1005,
  NOT_IN_ROOM: 1006,
  NOT_HOST: 1007,
  NO_PERMISSION: 1008,
  INVALID_NAME: 1009,
  INVALID_PASSWORD: 1010,
  ROOM_EXISTS: 1011,
  VERSION_MISMATCH: 1012,
  OP_INVALID: 1020,
  OP_OUT_OF_BOUNDS: 1021,
  OP_CELL_OCCUPIED: 1022,
  OP_INSUFFICIENT_RES: 1023,
  OP_UNKNOWN_BUILDING: 1024,
  OP_RATE_LIMITED: 1025,
  OP_STALE: 1026,
  CHAT_EMPTY: 1030,
  CHAT_TOO_LONG: 1031,
  CHAT_MUTED: 1032,
  CHAT_RATE_LIMITED: 1033,
  TRANSPORT_DOWN: 1040,
  PLAYER_NOT_FOUND: 1050,
  DIVISION_FULL: 1051,
  VOTE_NOT_FOUND: 1060,
  VOTE_ALREADY_CAST: 1061,
  TASK_NOT_FOUND: 1070,
  UNKNOWN: 1999,
};

var MP_ERROR_MESSAGES = {
  1001: '房间不存在',
  1002: '房间已满',
  1003: '房间密码错误',
  1004: '你已被该房间封禁',
  1005: '已在房间中，请先离开当前房间',
  1006: '不在任何房间中',
  1007: '只有房主可以执行此操作',
  1008: '权限不足',
  1009: '名字不合法（2-16 个字符，不能含控制字符）',
  1010: '密码不合法（4-32 个字符）',
  1011: '同名房间已存在',
  1012: '协议版本不兼容，请刷新页面',
  1020: '操作不合法',
  1021: '坐标超出地图范围',
  1022: '该格已被占用',
  1023: '资源不足',
  1024: '未知建筑',
  1025: '操作过于频繁，请稍候',
  1026: '操作已过期（时钟落后太多）',
  1030: '消息不能为空',
  1031: '消息过长',
  1032: '你已被禁言',
  1033: '发送过于频繁，请稍候',
  1040: '传输层不可用',
  1050: '玩家不存在',
  1051: '该分工已满员',
  1060: '投票不存在',
  1061: '已经投过票了',
  1070: '任务不存在',
  1999: '未知错误',
};

/* 资源键：与 resources.js 的 newInventory() 保持一致。 */
var MP_RESOURCE_KEYS = [
  'iron', 'ice', 'water', 'food', 'steel', 'rare', 'tech',
  'uranium', 'he3', 'power', 'credits',
];
/* 资源同步上限：防作弊——单次增量不得超过该值，全量不得超过该值。 */
var MP_RESOURCE_CAPS = {
  iron: 99999, ice: 99999, water: 99999, food: 99999, steel: 99999,
  rare: 99999, tech: 99999, uranium: 99999, he3: 99999,
  power: 999999, credits: 99999999,
};
var MP_RESOURCE_DELTA_CAP = 5000; // 单次资源增量绝对值上限

/* 操作类型：SyncEngine 能处理的操作。 */
var MP_OP_TYPES = {
  PLACE: 'place',               // 放置建筑 {buildingId,x,y,level}
  DEMOLISH: 'demolish',         // 拆除建筑 {x,y}
  UPGRADE: 'upgrade',           // 升级建筑 {x,y,toLevel}
  RESOURCE_DELTA: 'res-delta',  // 资源增量 {delta:{iron:5,...}}
  RESOURCE_SET: 'res-set',      // 资源全量（仅房主快照用）{res:{...}}
  POP_SET: 'pop-set',           // 人口 {pop, cap}
  TECH_UNLOCK: 'tech-unlock',   // 科技解锁 {techId}
  POLICY_ENACT: 'policy-enact', // 政策颁布 {policyId}
  POLICY_REPEAL: 'policy-repeal',
  SECTOR_UNLOCK: 'sector-unlock', // 扇区解锁 {sector}
  CLAIM_CELL: 'claim-cell',     // 认领格子（软锁：我先占着，防抢建）
  RELEASE_CELL: 'release-cell', // 释放认领
  CURSOR: 'cursor',             // 光标位置（轻量，不进日志）
};

/* 分工：合作建城的七个方向。allowBuild 是该分工可建造的建筑分类
 *（分类见 ui_refactor.js BUILD_CATS；special 仅房主/全能可建）。 */
var MP_DIVISIONS = {
  power: {
    id: 'power', name: '电力', icon: '⚡', maxMembers: 2,
    allowBuild: ['power', 'net'],
    desc: '负责发电、储电与电网覆盖，保证全城不断电。',
    quota: { solar: 4, wind_turbine: 4, battery_bank: 2 },
  },
  agri: {
    id: 'agri', name: '农业', icon: '🌾', maxMembers: 2,
    allowBuild: ['prod', 'water'],
    desc: '负责食物与水：温室、农场、水泵与灌溉。',
    quota: { greenhouse: 4, pump: 3, irrigation: 2 },
  },
  industry: {
    id: 'industry', name: '工业', icon: '🏭', maxMembers: 2,
    allowBuild: ['prod', 'special'],
    desc: '负责采矿与加工：矿机、冶炼厂与高阶生产线。',
    quota: { miner: 4, smelter: 2, robot_factory: 1 },
  },
  housing: {
    id: 'housing', name: '居住', icon: '🏠', maxMembers: 2,
    allowBuild: ['housing', 'civic'],
    desc: '负责人口上限与民生：居住舱、医院、学校与公园。',
    quota: { habitat: 6, dome: 2, hospital: 1 },
  },
  defense: {
    id: 'defense', name: '防御', icon: '🛡️', maxMembers: 2,
    allowBuild: ['special', 'civic'],
    desc: '负责军事防御：防御塔、城墙、雷达与避难所。',
    quota: { mg_turret: 4, ms_turret: 2, radar: 1 },
  },
  logistics: {
    id: 'logistics', name: '物流', icon: '🚚', maxMembers: 2,
    allowBuild: ['trans', 'net'],
    desc: '负责交通与运输：道路、仓库、贸易站与车队。',
    quota: { road: 10, warehouse: 2, depot: 1 },
  },
  research: {
    id: 'research', name: '科研', icon: '🔬', maxMembers: 2,
    allowBuild: ['civic', 'special'],
    desc: '负责科技与政策：实验室、政策投票与深空任务。',
    quota: { lab: 2, gene_lab: 1, observatory: 1 },
  },
};

/* 角色与权限矩阵：action -> 允许的角色集合。 */
var MP_ROLES = {
  host: { id: 'host', name: '房主', icon: '👑' },
  admin: { id: 'admin', name: '管理员', icon: '🛡️' },
  member: { id: 'member', name: '成员', icon: '🧑‍🚀' },
};
var MP_PERMISSIONS = {
  'room.kick': ['host', 'admin'],
  'room.ban': ['host'],
  'room.setPassword': ['host'],
  'room.setMaxPlayers': ['host'],
  'room.transferHost': ['host'],
  'room.promote': ['host'],
  'room.close': ['host'],
  'room.pause': ['host', 'admin'],
  'chat.mute': ['host', 'admin'],
  'chat.clear': ['host', 'admin'],
  'coop.assignTask': ['host', 'admin'],
  'coop.setGoal': ['host', 'admin'],
  'coop.assignDivision': ['host', 'admin'],
  'build.anywhere': ['host'],
  'build.outsideDivision': ['host', 'admin'],
  'sync.forceSnapshot': ['host'],
  'vote.startKick': ['host', 'admin', 'member'],
  'policy.propose': ['host', 'admin', 'member'],
};

/* ================================================================
 * 2. 工具层
 * ================================================================ */

function MPError(code, detail) {
  this.name = 'MPError';
  this.code = code || MP_ERRORS.UNKNOWN;
  this.message = MP_ERROR_MESSAGES[this.code] || MP_ERROR_MESSAGES[MP_ERRORS.UNKNOWN];
  if (detail) this.message += '：' + detail;
  if (Error.captureStackTrace) Error.captureStackTrace(this, MPError);
}
MPError.prototype = Object.create(Error.prototype);
MPError.prototype.constructor = MPError;

var MPUtils = {
  /* 唯一 id：时间戳 + 随机 + 进程内计数，保证多标签页不撞。 */
  _counter: 0,
  uid: function (prefix) {
    this._counter = (this._counter + 1) % 100000;
    var rnd = Math.floor(Math.random() * 0xffffff).toString(36);
    return (prefix || 'mp') + '-' + Date.now().toString(36) + '-' +
      rnd + '-' + this._counter;
  },

  /* 玩家短码：房间内显示用，如 #A3F9。 */
  shortCode: function (id) {
    var h = 0;
    var s = String(id || '');
    for (var i = 0; i < s.length; i++) {
      h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    }
    return '#' + ('0000' + ((h >>> 0) % 0xffff).toString(16).toUpperCase()).slice(-4);
  },

  /* FNV-1a 哈希（带盐）：房间密码只存哈希，不存明文。 */
  hashPassword: function (password, salt) {
    var s = String(salt || '') + '::' + String(password || '');
    var h1 = 0x811c9dc5, h2 = 0x01000193;
    for (var i = 0; i < s.length; i++) {
      h1 ^= s.charCodeAt(i);
      h1 = Math.imul(h1, 0x01000193) >>> 0;
      h2 = (Math.imul(h2, 31) + s.charCodeAt(i)) >>> 0;
    }
    return 'fnv1a$' + h1.toString(16) + '$' + h2.toString(16);
  },

  makeSalt: function () {
    return Math.floor(Math.random() * 0xffffffff).toString(16) +
      Math.floor(Math.random() * 0xffffffff).toString(16);
  },

  clamp: function (v, lo, hi) {
    if (typeof v !== 'number' || isNaN(v)) return lo;
    return v < lo ? lo : (v > hi ? hi : v);
  },

  deepClone: function (obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    try { return JSON.parse(JSON.stringify(obj)); }
    catch (e) {
      if (Array.isArray(obj)) return obj.slice();
      var out = {};
      for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) out[k] = obj[k];
      return out;
    }
  },

  now: function () { return Date.now(); },

  isValidName: function (name) {
    if (typeof name !== 'string') return false;
    var t = name.trim();
    if (t.length < 2 || t.length > 16) return false;
    if (/[\x00-\x1f\x7f]/.test(t)) return false;
    return true;
  },

  isValidPassword: function (pw) {
    if (typeof pw !== 'string') return false;
    return pw.length >= 4 && pw.length <= 32;
  },

  /* 聊天文本清洗：去控制字符、截断、转义 HTML。 */
  sanitizeText: function (text) {
    var s = String(text == null ? '' : text);
    s = s.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '');
    s = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    s = s.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return s;
  },

  escapeHtml: function (s) { return MPUtils.sanitizeText(s); },

  formatDuration: function (ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    var sec = s % 60;
    if (h > 0) return h + '小时' + m + '分';
    if (m > 0) return m + '分' + sec + '秒';
    return sec + '秒';
  },

  formatTime: function (ts) {
    var d = new Date(ts);
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
  },

  /* 简单限流器：每 windowMs 内最多 max 次。返回 {ok, retryAfterMs}。 */
  RateLimiter: function (max, windowMs) {
    this.max = max;
    this.windowMs = windowMs;
    this.stamps = [];
    this.tryAcquire = function () {
      var now = Date.now();
      while (this.stamps.length && now - this.stamps[0] > this.windowMs) this.stamps.shift();
      if (this.stamps.length >= this.max) {
        return { ok: false, retryAfterMs: this.windowMs - (now - this.stamps[0]) };
      }
      this.stamps.push(now);
      return { ok: true, retryAfterMs: 0 };
    };
    this.reset = function () { this.stamps = []; };
  },

  /* 指数退避：重试次数 -> 等待毫秒（上限 30s）。 */
  backoffMs: function (attempt) {
    return Math.min(30000, 250 * Math.pow(2, Math.max(0, attempt)));
  },
};

/* ================================================================
 * 3. 事件层
 * ================================================================ */

function MPEventEmitter() {
  this._listeners = {};
}
MPEventEmitter.prototype.on = function (event, fn) {
  if (!this._listeners[event]) this._listeners[event] = [];
  this._listeners[event].push(fn);
  return this;
};
MPEventEmitter.prototype.once = function (event, fn) {
  var self = this;
  var wrapper = function () {
    self.off(event, wrapper);
    fn.apply(null, arguments);
  };
  this.on(event, wrapper);
  return this;
};
MPEventEmitter.prototype.off = function (event, fn) {
  var arr = this._listeners[event];
  if (!arr) return this;
  if (!fn) { delete this._listeners[event]; return this; }
  var idx = arr.indexOf(fn);
  if (idx >= 0) arr.splice(idx, 1);
  return this;
};
MPEventEmitter.prototype.emit = function (event) {
  var arr = this._listeners[event];
  if (!arr) return 0;
  var args = Array.prototype.slice.call(arguments, 1);
  var listeners = arr.slice();
  for (var i = 0; i < listeners.length; i++) {
    try { listeners[i].apply(null, args); }
    catch (e) { /* 单个监听器异常不阻断其他监听器 */ }
  }
  return listeners.length;
};
MPEventEmitter.prototype.listenerCount = function (event) {
  return (this._listeners[event] || []).length;
};

/* ================================================================
 * 4. 传输层
 * 浏览器：BroadcastChannel（同源多标签页即时）+ localStorage 'storage'
 * 事件（兜底，覆盖 BroadcastChannel 不可用或跨窗口场景）。
 * Node / 无上述 API：进程内静态内存总线（自测用，两个实例可互通）。
 * 信封：{v, type, from, to, roomId, seq, ts, payload}
 * ================================================================ */

/* 进程内总线（Node 回退 + 自测）。同一进程内所有实例共享。 */
var __MP_MEM_BUS = { channels: {} };
function __mpMemBusFor(namespace) {
  if (!__MP_MEM_BUS.channels[namespace]) {
    __MP_MEM_BUS.channels[namespace] = { subs: [], seq: 0 };
  }
  return __MP_MEM_BUS.channels[namespace];
}

function MPLocalTransport(opts) {
  MPEventEmitter.call(this);
  opts = opts || {};
  this.namespace = opts.namespace || 'starport-mp-v3';
  this.nodeId = opts.nodeId || MPUtils.uid('node');
  this.roomId = null;
  this._bc = null;
  this._useMemBus = false;
  this._storageHandler = null;
  this._seq = 0;
  this._running = false;
  this.sentCount = 0;
  this.recvCount = 0;
  this.lastError = null;

  /* 浏览器多标签页用 BroadcastChannel；Node（无 window）用进程内内存总线，
   * 保证自测同步、确定性。localStorage 仅作 storage-event 兜底。 */
  var hasBC = (typeof BroadcastChannel !== 'undefined') && (typeof window !== 'undefined');
  var hasLS = false;
  try {
    hasLS = (typeof localStorage !== 'undefined') &&
      typeof localStorage.getItem === 'function';
  } catch (e) { hasLS = false; }
  this.hasBroadcastChannel = hasBC;
  this.hasLocalStorage = hasLS;
  this.mode = hasBC ? 'broadcast-channel' : (hasLS ? 'storage-event' : 'memory');
  if (this.mode === 'memory') this._useMemBus = true;
}
MPLocalTransport.prototype = Object.create(MPEventEmitter.prototype);
MPLocalTransport.prototype.constructor = MPLocalTransport;

MPLocalTransport.prototype.start = function (roomId) {
  if (this._running) this.stop();
  this.roomId = roomId || null;
  this._running = true;
  var self = this;
  if (this.mode === 'broadcast-channel') {
    try {
      this._bc = new BroadcastChannel(this.namespace);
      this._bc.onmessage = function (ev) { self._receive(ev.data); };
    } catch (e) {
      this.mode = this.hasLocalStorage ? 'storage-event' : 'memory';
      this._useMemBus = (this.mode === 'memory');
      this.lastError = e;
    }
  }
  if (this.mode === 'storage-event' && typeof window !== 'undefined') {
    this._storageHandler = function (ev) {
      if (!ev || ev.key !== self.namespace + ':msg' || !ev.newValue) return;
      try { self._receive(JSON.parse(ev.newValue)); } catch (e) {}
    };
    window.addEventListener('storage', this._storageHandler);
  }
  if (this.mode === 'memory') {
    var bus = __mpMemBusFor(this.namespace);
    this._memSub = function (env) { self._receive(env); };
    bus.subs.push(this._memSub);
  }
  return this;
};

MPLocalTransport.prototype.stop = function () {
  if (this._bc) { try { this._bc.close(); } catch (e) {} this._bc = null; }
  if (this._storageHandler && typeof window !== 'undefined') {
    window.removeEventListener('storage', this._storageHandler);
    this._storageHandler = null;
  }
  if (this._memSub) {
    var bus = __mpMemBusFor(this.namespace);
    var idx = bus.subs.indexOf(this._memSub);
    if (idx >= 0) bus.subs.splice(idx, 1);
    this._memSub = null;
  }
  this._running = false;
  return this;
};

MPLocalTransport.prototype._receive = function (env) {
  if (!env || typeof env !== 'object') return;
  if (env.from === this.nodeId) return; // 自己发的消息不回环
  if (env.v !== MP_PROTOCOL_VERSION) {
    this.emit('version-mismatch', env);
    return;
  }
  if (this.roomId && env.roomId && env.roomId !== this.roomId) return;
  this.recvCount++;
  this.emit('message', env);
  this.emit('message:' + env.type, env);
};

MPLocalTransport.prototype.send = function (type, payload, to) {
  if (!this._running) throw new MPError(MP_ERRORS.TRANSPORT_DOWN, '传输层未启动');
  if (!MP_MSG_TYPES || Object.keys(MP_MSG_TYPES).indexOf(this._msgKey(type)) < 0) {
    /* 未知类型也允许透传（向前兼容），但记一笔 */
    this.emit('unknown-type', type);
  }
  var env = {
    v: MP_PROTOCOL_VERSION,
    type: type,
    from: this.nodeId,
    to: to || null,       // null = 房间广播
    roomId: this.roomId,
    seq: ++this._seq,
    ts: Date.now(),
    payload: payload || {},
  };
  var raw;
  try { raw = JSON.stringify(env); }
  catch (e) { throw new MPError(MP_ERRORS.UNKNOWN, '消息序列化失败'); }
  if (this.mode === 'broadcast-channel' && this._bc) {
    try { this._bc.postMessage(env); } catch (e) { this.lastError = e; }
  } else if (this.mode === 'storage-event') {
    try { localStorage.setItem(this.namespace + ':msg', raw); }
    catch (e) { this.lastError = e; }
  } else {
    var bus = __mpMemBusFor(this.namespace);
    var subs = bus.subs.slice();
    for (var i = 0; i < subs.length; i++) {
      try { subs[i](MPUtils.deepClone(env)); } catch (e) {}
    }
  }
  this.sentCount++;
  return env;
};

MPLocalTransport.prototype._msgKey = function (type) {
  for (var k in MP_MSG_TYPES) if (MP_MSG_TYPES[k] === type) return k;
  return null;
};

/* 广播一个房间注册表变化（房间列表刷新用，走同一命名空间的另一 key）。 */
MPLocalTransport.prototype.announceRegistry = function () {
  if (this.mode === 'memory') {
    var bus = __mpMemBusFor(this.namespace);
    var subs = bus.subs.slice();
    for (var i = 0; i < subs.length; i++) {
      try { subs[i]({ v: MP_PROTOCOL_VERSION, type: MP_MSG_TYPES.ROOM_ANNOUNCE, from: this.nodeId, to: null, roomId: null, seq: ++this._seq, ts: Date.now(), payload: {} }); } catch (e) {}
    }
    return;
  }
  if (this.hasLocalStorage) {
    try { localStorage.setItem(this.namespace + ':registry-bump', String(Date.now())); } catch (e) {}
  }
  if (this.mode === 'broadcast-channel' && this._bc) {
    try { this._bc.postMessage({ v: MP_PROTOCOL_VERSION, type: MP_MSG_TYPES.ROOM_ANNOUNCE, from: this.nodeId, to: null, roomId: null, seq: ++this._seq, ts: Date.now(), payload: {} }); } catch (e) {}
  }
};

/* ================================================================
 * 5. 房间层
 * ================================================================ */

/* 玩家档案：房间内每个成员一份。 */
function MPPlayer(data) {
  data = data || {};
  this.id = data.id || MPUtils.uid('player');
  this.name = data.name || '宇航员';
  this.color = data.color || MPPlayer.pickColor(this.id);
  this.role = data.role || 'member';       // host | admin | member
  this.division = data.division || null;   // 分工 id 或 null（未分工）
  this.nodeId = data.nodeId || null;       // 传输层节点 id
  this.joinedAt = data.joinedAt || Date.now();
  this.lastSeen = data.lastSeen || Date.now();
  this.latencyMs = (typeof data.latencyMs === 'number') ? data.latencyMs : -1;
  this.isOnline = (typeof data.isOnline === 'boolean') ? data.isOnline : true;
  this.buildCount = data.buildCount || 0;  // 本局放置建筑数（贡献统计）
  this.contribution = data.contribution || 0; // 贡献分
  this.mutedUntil = data.mutedUntil || 0;  // 禁言到期时间戳
  this.isAfk = !!data.isAfk;
}
MPPlayer.COLORS = ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6', '#22d3ee', '#facc15'];
MPPlayer.pickColor = function (id) {
  var h = 0;
  var s = String(id || '');
  for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return MPPlayer.COLORS[h % MPPlayer.COLORS.length];
};
MPPlayer.prototype.isMuted = function () {
  return Date.now() < this.mutedUntil;
};
MPPlayer.prototype.touch = function () {
  this.lastSeen = Date.now();
  this.isOnline = true;
  this.isAfk = false;
};
MPPlayer.prototype.toJSON = function () {
  return {
    id: this.id, name: this.name, color: this.color, role: this.role,
    division: this.division, nodeId: this.nodeId, joinedAt: this.joinedAt,
    lastSeen: this.lastSeen, latencyMs: this.latencyMs, isOnline: this.isOnline,
    buildCount: this.buildCount, contribution: this.contribution,
    mutedUntil: this.mutedUntil, isAfk: this.isAfk,
  };
};
MPPlayer.fromJSON = function (d) { return new MPPlayer(d); };

/* 房间。 */
function MPRoom(data) {
  data = data || {};
  this.id = data.id || MPUtils.uid('room');
  this.name = data.name || '火星殖民地';
  this.hostId = data.hostId || null;
  this.maxPlayers = MPUtils.clamp(data.maxPlayers || MP_MAX_PLAYERS_DEFAULT, 2, MP_MAX_PLAYERS_LIMIT);
  this.mode = data.mode || 'coop';         // coop 合作 / sandbox 沙盒
  this.mapSeed = (typeof data.mapSeed === 'number') ? data.mapSeed : Math.floor(Math.random() * 1000000);
  this.mapSize = data.mapSize || 50;       // 与 GameMap(50) 对齐
  this.state = data.state || 'lobby';      // lobby | playing | paused
  this.createdAt = data.createdAt || Date.now();
  this.updatedAt = data.updatedAt || Date.now();
  this.hasPassword = !!data.hasPassword;
  this.passwordHash = data.passwordHash || null;
  this.salt = data.salt || null;
  this.allowJoin = (typeof data.allowJoin === 'boolean') ? data.allowJoin : true;
  this.chatEnabled = (typeof data.chatEnabled === 'boolean') ? data.chatEnabled : true;
  this.description = data.description || '';
  this.members = {};   // playerId -> MPPlayer（序列化时用 plain object）
  this.banned = {};    // playerId -> {by, at, reason}
  this.invites = {};   // inviteCode -> {by, at, uses}
  if (data.members) {
    for (var k in data.members) this.members[k] = MPPlayer.fromJSON(data.members[k]);
  }
  if (data.banned) this.banned = MPUtils.deepClone(data.banned);
  if (data.invites) this.invites = MPUtils.deepClone(data.invites);
  this.version = MP_PROTOCOL_VERSION;
}
MPRoom.prototype.memberCount = function () {
  return Object.keys(this.members).length;
};
MPRoom.prototype.isFull = function () {
  return this.memberCount() >= this.maxPlayers;
};
MPRoom.prototype.isBanned = function (playerId) {
  return !!this.banned[playerId];
};
MPRoom.prototype.checkPassword = function (password) {
  if (!this.hasPassword) return true;
  if (!password) return false;
  return MPUtils.hashPassword(password, this.salt) === this.passwordHash;
};
MPRoom.prototype.setPassword = function (password) {
  if (!password) {
    this.hasPassword = false; this.passwordHash = null; this.salt = null;
  } else {
    if (!MPUtils.isValidPassword(password)) throw new MPError(MP_ERRORS.INVALID_PASSWORD);
    this.salt = MPUtils.makeSalt();
    this.passwordHash = MPUtils.hashPassword(password, this.salt);
    this.hasPassword = true;
  }
  this.updatedAt = Date.now();
  return this;
};
MPRoom.prototype.canJoin = function (player, password) {
  if (!player || !player.id) return { ok: false, code: MP_ERRORS.INVALID_NAME };
  if (this.isBanned(player.id)) return { ok: false, code: MP_ERRORS.BANNED };
  if (this.members[player.id]) return { ok: false, code: MP_ERRORS.ALREADY_IN_ROOM };
  if (!this.allowJoin) return { ok: false, code: MP_ERRORS.ROOM_NOT_FOUND };
  if (this.isFull()) return { ok: false, code: MP_ERRORS.ROOM_FULL };
  if (!this.checkPassword(password)) return { ok: false, code: MP_ERRORS.WRONG_PASSWORD };
  if (this.state === 'paused') return { ok: false, code: MP_ERRORS.ROOM_NOT_FOUND, detail: '房间已暂停加入' };
  return { ok: true, code: MP_ERRORS.OK };
};
MPRoom.prototype.addMember = function (player, password) {
  var chk = this.canJoin(player, password);
  if (!chk.ok) throw new MPError(chk.code, chk.detail);
  if (!this.hostId) { this.hostId = player.id; player.role = 'host'; }
  this.members[player.id] = player;
  this.updatedAt = Date.now();
  return player;
};
MPRoom.prototype.removeMember = function (playerId) {
  if (!this.members[playerId]) return null;
  var p = this.members[playerId];
  delete this.members[playerId];
  if (this.hostId === playerId) {
    /* 房主离开：按加入时间最早的在线成员接任；无人则房间待关闭。 */
    var rest = this.memberList();
    var next = null;
    for (var i = 0; i < rest.length; i++) {
      if (!next || rest[i].joinedAt < next.joinedAt) next = rest[i];
    }
    if (next) { this.hostId = next.id; next.role = 'host'; }
    else { this.hostId = null; }
  }
  this.updatedAt = Date.now();
  return p;
};
MPRoom.prototype.banMember = function (playerId, byId, reason) {
  this.removeMember(playerId);
  this.banned[playerId] = { by: byId || null, at: Date.now(), reason: reason || '' };
  this.updatedAt = Date.now();
  return this;
};
MPRoom.prototype.unban = function (playerId) {
  delete this.banned[playerId];
  this.updatedAt = Date.now();
  return this;
};
MPRoom.prototype.createInvite = function (byId) {
  var code = MPUtils.uid('inv').replace(/-/g, '').slice(0, 10).toUpperCase();
  this.invites[code] = { by: byId || null, at: Date.now(), uses: 0 };
  this.updatedAt = Date.now();
  return code;
};
MPRoom.prototype.useInvite = function (code) {
  var inv = this.invites[code];
  if (!inv) return false;
  inv.uses++;
  return true;
};
MPRoom.prototype.memberList = function () {
  var list = [];
  for (var k in this.members) list.push(this.members[k]);
  list.sort(function (a, b) { return a.joinedAt - b.joinedAt; });
  return list;
};
MPRoom.prototype.onlineList = function () {
  return this.memberList().filter(function (p) { return p.isOnline; });
};
MPRoom.prototype.getMember = function (playerId) {
  return this.members[playerId] || null;
};
MPRoom.prototype.toJSON = function () {
  var members = {};
  for (var k in this.members) members[k] = this.members[k].toJSON();
  return {
    id: this.id, name: this.name, hostId: this.hostId, maxPlayers: this.maxPlayers,
    mode: this.mode, mapSeed: this.mapSeed, mapSize: this.mapSize, state: this.state,
    createdAt: this.createdAt, updatedAt: this.updatedAt,
    hasPassword: this.hasPassword, passwordHash: this.passwordHash, salt: this.salt,
    allowJoin: this.allowJoin, chatEnabled: this.chatEnabled,
    description: this.description, members: members,
    banned: this.banned, invites: this.invites, version: this.version,
  };
};
MPRoom.prototype.toListItem = function () {
  return {
    id: this.id, name: this.name, hostId: this.hostId,
    hostName: this.hostId && this.members[this.hostId] ? this.members[this.hostId].name : '—',
    memberCount: this.memberCount(), maxPlayers: this.maxPlayers,
    mode: this.mode, state: this.state, hasPassword: this.hasPassword,
    createdAt: this.createdAt, description: this.description,
  };
};
MPRoom.fromJSON = function (d) { return new MPRoom(d); };

/* 房间注册表：localStorage 持久化 + 内存镜像。
 * Node 环境（无 localStorage）下只用内存镜像，同一进程内多实例共享。 */
var __MP_ROOM_REGISTRY_MEM = {};
function __mpStorage() {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem) return localStorage;
  } catch (e) {}
  return null;
}

function MPRoomManager(opts) {
  MPEventEmitter.call(this);
  opts = opts || {};
  this.namespace = opts.namespace || 'starport-mp-v3';
  this.registryKey = MP_ROOM_REGISTRY_KEY;
  this.rooms = {};   // roomId -> MPRoom（内存镜像）
  this._loadRegistry();
}
MPRoomManager.prototype = Object.create(MPEventEmitter.prototype);
MPRoomManager.prototype.constructor = MPRoomManager;

MPRoomManager.prototype._loadRegistry = function () {
  var raw = null;
  var ls = __mpStorage();
  try { raw = ls ? ls.getItem(this.registryKey) : null; } catch (e) { raw = null; }
  var data = null;
  if (raw) { try { data = JSON.parse(raw); } catch (e) { data = null; } }
  if (!data) data = __MP_ROOM_REGISTRY_MEM[this.namespace] || {};
  this.rooms = {};
  var now = Date.now();
  for (var id in data) {
    try {
      var room = MPRoom.fromJSON(data[id]);
      /* 丢弃过期房间：超过 2 小时无人在线，或房主失联超过 10 分钟且无成员。 */
      var online = room.onlineList().length;
      if (now - room.updatedAt > 2 * 3600 * 1000 && online === 0) continue;
      this.rooms[id] = room;
    } catch (e) {}
  }
  return this;
};

MPRoomManager.prototype._saveRegistry = function () {
  /* 容量保护：只保留最近更新的 MP_MAX_ROOMS 个房间。 */
  var ids = Object.keys(this.rooms);
  if (ids.length > MP_MAX_ROOMS) {
    ids.sort(function (a, b) { return this.rooms[b].updatedAt - this.rooms[a].updatedAt; }.bind(this));
    var keep = ids.slice(0, MP_MAX_ROOMS);
    var next = {};
    for (var i = 0; i < keep.length; i++) next[keep[i]] = this.rooms[keep[i]];
    this.rooms = next;
  }
  var plain = {};
  for (var id in this.rooms) plain[id] = this.rooms[id].toJSON();
  var ls = __mpStorage();
  if (ls) { try { ls.setItem(this.registryKey, JSON.stringify(plain)); } catch (e) {} }
  __MP_ROOM_REGISTRY_MEM[this.namespace] = plain;
  return this;
};

MPRoomManager.prototype.createRoom = function (opts, hostPlayer) {
  opts = opts || {};
  if (!MPUtils.isValidName(opts.name)) throw new MPError(MP_ERRORS.INVALID_NAME);
  if (hostPlayer && !MPUtils.isValidName(hostPlayer.name)) throw new MPError(MP_ERRORS.INVALID_NAME);
  /* 同名房间去重（同一命名空间内）。 */
  for (var id in this.rooms) {
    if (this.rooms[id].name === opts.name.trim()) throw new MPError(MP_ERRORS.ROOM_EXISTS);
  }
  var room = new MPRoom({
    name: opts.name.trim(),
    maxPlayers: opts.maxPlayers || MP_MAX_PLAYERS_DEFAULT,
    mode: opts.mode || 'coop',
    mapSeed: opts.mapSeed,
    mapSize: opts.mapSize || 50,
    description: opts.description || '',
    allowJoin: (typeof opts.allowJoin === 'boolean') ? opts.allowJoin : true,
    chatEnabled: (typeof opts.chatEnabled === 'boolean') ? opts.chatEnabled : true,
  });
  if (opts.password) room.setPassword(opts.password);
  if (hostPlayer) room.addMember(hostPlayer, opts.password); // 房主建房无需再输密码
  this.rooms[room.id] = room;
  this._saveRegistry();
  this.emit('room-created', room);
  return room;
};

MPRoomManager.prototype.getRoom = function (roomId) {
  this._loadRegistry();
  return this.rooms[roomId] || null;
};

MPRoomManager.prototype.joinRoom = function (roomId, player, password) {
  var room = this.getRoom(roomId);
  if (!room) throw new MPError(MP_ERRORS.ROOM_NOT_FOUND);
  room.addMember(player, password);
  this.rooms[room.id] = room;
  this._saveRegistry();
  this.emit('room-joined', room, player);
  return room;
};

MPRoomManager.prototype.leaveRoom = function (roomId, playerId) {
  var room = this.getRoom(roomId);
  if (!room) return null;
  room.removeMember(playerId);
  if (room.memberCount() === 0) {
    /* 最后一人离开：保留房间 5 分钟供重连（标记 allowJoin 仍开），
     * 由 cleanupStale 在超时后真正删除。 */
    room.updatedAt = Date.now();
  }
  this.rooms[room.id] = room;
  this._saveRegistry();
  this.emit('room-left', room, playerId);
  return room;
};

MPRoomManager.prototype.closeRoom = function (roomId, byPlayerId) {
  var room = this.getRoom(roomId);
  if (!room) throw new MPError(MP_ERRORS.ROOM_NOT_FOUND);
  if (room.hostId !== byPlayerId) throw new MPError(MP_ERRORS.NOT_HOST);
  delete this.rooms[roomId];
  this._saveRegistry();
  this.emit('room-closed', room);
  return true;
};

MPRoomManager.prototype.updateRoom = function (room) {
  if (!room || !room.id) return false;
  room.updatedAt = Date.now();
  this.rooms[room.id] = room;
  this._saveRegistry();
  this.emit('room-updated', room);
  return true;
};

/* 房间列表：支持按状态/模式/关键词过滤，按人数/创建时间排序。 */
MPRoomManager.prototype.listRooms = function (filter) {
  filter = filter || {};
  this._loadRegistry();
  var list = [];
  for (var id in this.rooms) {
    var room = this.rooms[id];
    if (filter.state && room.state !== filter.state) continue;
    if (filter.mode && room.mode !== filter.mode) continue;
    if (typeof filter.hasPassword === 'boolean' && room.hasPassword !== filter.hasPassword) continue;
    if (filter.hideFull && room.isFull()) continue;
    if (filter.hideEmpty && room.memberCount() === 0) continue;
    if (filter.keyword) {
      var kw = String(filter.keyword).toLowerCase();
      var hay = (room.name + ' ' + room.description).toLowerCase();
      if (hay.indexOf(kw) < 0) continue;
    }
    list.push(room.toListItem());
  }
  var sortBy = filter.sortBy || 'members';
  if (sortBy === 'members') {
    list.sort(function (a, b) { return b.memberCount - a.memberCount || b.createdAt - a.createdAt; });
  } else if (sortBy === 'newest') {
    list.sort(function (a, b) { return b.createdAt - a.createdAt; });
  } else if (sortBy === 'name') {
    list.sort(function (a, b) { return a.name.localeCompare(b.name, 'zh-CN'); });
  }
  return list;
};

/* 清理：删除超过 2 小时无成员活动的房间；返回删除数。 */
MPRoomManager.prototype.cleanupStale = function () {
  this._loadRegistry();
  var now = Date.now();
  var removed = 0;
  for (var id in this.rooms) {
    var room = this.rooms[id];
    if (room.memberCount() === 0 && now - room.updatedAt > 5 * 60 * 1000) {
      delete this.rooms[id]; removed++;
    } else if (now - room.updatedAt > 2 * 3600 * 1000 && room.onlineList().length === 0) {
      delete this.rooms[id]; removed++;
    }
  }
  if (removed) this._saveRegistry();
  return removed;
};

/* ================================================================
 * 6. 在线层：心跳 / 延迟 / 掉线判定
 * ================================================================ */

function MPPresenceManager(opts) {
  MPEventEmitter.call(this);
  opts = opts || {};
  this.heartbeatMs = opts.heartbeatMs || MP_HEARTBEAT_MS;
  this.timeoutMs = opts.timeoutMs || MP_PRESENCE_TIMEOUT_MS;
  this.players = {};   // playerId -> {lastSeen, latencyMs, online, afk}
  this._timer = null;
  this._pingSeq = 0;
  this._pendingPings = {}; // seq -> sentAt
}
MPPresenceManager.prototype = Object.create(MPEventEmitter.prototype);
MPPresenceManager.prototype.constructor = MPPresenceManager;

MPPresenceManager.prototype.track = function (player) {
  if (!player || !player.id) return;
  this.players[player.id] = {
    lastSeen: player.lastSeen || Date.now(),
    latencyMs: player.latencyMs || -1,
    online: true,
    afk: false,
  };
};
MPPresenceManager.prototype.heartbeat = function (playerId, latencyMs) {
  var p = this.players[playerId];
  if (!p) { p = this.players[playerId] = { lastSeen: 0, latencyMs: -1, online: false, afk: false }; }
  var wasOffline = !p.online;
  p.lastSeen = Date.now();
  p.online = true;
  p.afk = false;
  if (typeof latencyMs === 'number') p.latencyMs = latencyMs;
  if (wasOffline) this.emit('player-online', playerId);
  return p;
};
MPPresenceManager.prototype.markAfk = function (playerId) {
  var p = this.players[playerId];
  if (p) { p.afk = true; this.emit('player-afk', playerId); }
};
MPPresenceManager.prototype.nextPing = function () {
  var seq = ++this._pingSeq;
  this._pendingPings[seq] = Date.now();
  return seq;
};
MPPresenceManager.prototype.resolvePong = function (seq) {
  var sentAt = this._pendingPings[seq];
  if (!sentAt) return -1;
  delete this._pendingPings[seq];
  return Date.now() - sentAt;
};
MPPresenceManager.prototype.onlineIds = function () {
  var out = [];
  for (var id in this.players) if (this.players[id].online) out.push(id);
  return out;
};
MPPresenceManager.prototype.latencyOf = function (playerId) {
  var p = this.players[playerId];
  return p ? p.latencyMs : -1;
};
MPPresenceManager.prototype.prune = function (now) {
  now = now || Date.now();
  var dropped = [];
  for (var id in this.players) {
    var p = this.players[id];
    if (p.online && now - p.lastSeen > this.timeoutMs) {
      p.online = false;
      dropped.push(id);
      this.emit('player-offline', id);
    }
  }
  return dropped;
};
MPPresenceManager.prototype.start = function (onTick) {
  var self = this;
  if (this._timer) return this;
  this._timer = setInterval(function () {
    self.prune();
    if (onTick) { try { onTick(); } catch (e) {} }
  }, this.heartbeatMs);
  if (this._timer.unref) this._timer.unref();
  return this;
};
MPPresenceManager.prototype.stop = function () {
  if (this._timer) { clearInterval(this._timer); this._timer = null; }
  return this;
};

/* ================================================================
 * 7. 权限层：角色 / 分工 / 投票踢人
 * ================================================================ */

function MPRoleManager(room) {
  MPEventEmitter.call(this);
  this.room = room || null;
  this.votes = {}; // voteId -> {id, kind, targetId, byId, createdAt, expiresAt, yes:{}, no:{}, status}
}
MPRoleManager.prototype = Object.create(MPEventEmitter.prototype);
MPRoleManager.prototype.constructor = MPRoleManager;

MPRoleManager.prototype.setRoom = function (room) { this.room = room; return this; };

MPRoleManager.prototype.roleOf = function (playerId) {
  if (!this.room) return null;
  var p = this.room.getMember(playerId);
  return p ? p.role : null;
};
MPRoleManager.prototype.can = function (playerId, action) {
  var allowed = MP_PERMISSIONS[action];
  if (!allowed) return false;
  var role = this.roleOf(playerId);
  if (!role) return false;
  if (role === 'host') return true; // 房主拥有全部权限
  return allowed.indexOf(role) >= 0;
};
MPRoleManager.prototype.require = function (playerId, action) {
  if (!this.can(playerId, action)) throw new MPError(MP_ERRORS.NO_PERMISSION, action);
  return true;
};
MPRoleManager.prototype.setRole = function (byId, targetId, role) {
  this.require(byId, 'room.promote');
  if (!MP_ROLES[role]) throw new MPError(MP_ERRORS.UNKNOWN, '未知角色 ' + role);
  if (role === 'host') throw new MPError(MP_ERRORS.NO_PERMISSION, '房主只能通过转移交接');
  var target = this.room.getMember(targetId);
  if (!target) throw new MPError(MP_ERRORS.PLAYER_NOT_FOUND);
  target.role = role;
  this.emit('role-changed', target);
  return target;
};
MPRoleManager.prototype.transferHost = function (byId, targetId) {
  if (this.room.hostId !== byId) throw new MPError(MP_ERRORS.NOT_HOST);
  var target = this.room.getMember(targetId);
  if (!target) throw new MPError(MP_ERRORS.PLAYER_NOT_FOUND);
  var old = this.room.getMember(byId);
  if (old) old.role = 'admin';
  target.role = 'host';
  this.room.hostId = targetId;
  this.emit('host-transferred', target, old);
  return target;
};

/* 分工：指派 / 退出 / 人数上限 / 建筑类别权限。 */
MPRoleManager.prototype.assignDivision = function (byId, targetId, divisionId) {
  this.require(byId, 'coop.assignDivision');
  var div = MP_DIVISIONS[divisionId];
  if (!div) throw new MPError(MP_ERRORS.UNKNOWN, '未知分工 ' + divisionId);
  var target = this.room.getMember(targetId);
  if (!target) throw new MPError(MP_ERRORS.PLAYER_NOT_FOUND);
  var count = 0;
  var members = this.room.memberList();
  for (var i = 0; i < members.length; i++) {
    if (members[i].division === divisionId) count++;
  }
  if (target.division !== divisionId && count >= div.maxMembers) {
    throw new MPError(MP_ERRORS.DIVISION_FULL, div.name + '已满员（' + div.maxMembers + '人）');
  }
  target.division = divisionId;
  this.emit('division-assigned', target, div);
  return target;
};
MPRoleManager.prototype.leaveDivision = function (playerId) {
  var p = this.room.getMember(playerId);
  if (!p) throw new MPError(MP_ERRORS.PLAYER_NOT_FOUND);
  p.division = null;
  this.emit('division-left', p);
  return p;
};
MPRoleManager.prototype.divisionMembers = function (divisionId) {
  return this.room.memberList().filter(function (p) { return p.division === divisionId; });
};
/* 该玩家能否建造某分类的建筑（分工外建造需房主/管理员权限）。 */
MPRoleManager.prototype.canBuildCategory = function (playerId, category) {
  var p = this.room.getMember(playerId);
  if (!p) return false;
  if (p.role === 'host') return true;
  if (!p.division) return true; // 未分工者可自由建造（新手友好），但不计分工贡献
  var div = MP_DIVISIONS[p.division];
  if (!div) return true;
  if (div.allowBuild.indexOf(category) >= 0) return true;
  return this.can(playerId, 'build.outsideDivision');
};

/* 投票：目前支持 kick（踢人）与 goal（共同目标）两种。 */
MPRoleManager.prototype.startVote = function (byId, kind, targetId, payload) {
  if (kind !== 'kick' && kind !== 'goal') throw new MPError(MP_ERRORS.UNKNOWN, '未知投票类型');
  if (kind === 'kick' && !this.room.getMember(targetId)) throw new MPError(MP_ERRORS.PLAYER_NOT_FOUND);
  if (kind === 'kick' && targetId === this.room.hostId) {
    throw new MPError(MP_ERRORS.NO_PERMISSION, '不能投票踢房主');
  }
  var vote = {
    id: MPUtils.uid('vote'),
    kind: kind, targetId: targetId || null, byId: byId,
    payload: payload || {},
    createdAt: Date.now(),
    expiresAt: Date.now() + 60 * 1000,
    yes: {}, no: {},
    status: 'open',
  };
  vote.yes[byId] = Date.now(); // 发起人默认赞成
  this.votes[vote.id] = vote;
  this.emit('vote-started', vote);
  return vote;
};
MPRoleManager.prototype.castVote = function (voteId, playerId, agree) {
  var vote = this.votes[voteId];
  if (!vote || vote.status !== 'open') throw new MPError(MP_ERRORS.VOTE_NOT_FOUND);
  if (Date.now() > vote.expiresAt) {
    vote.status = 'expired';
    throw new MPError(MP_ERRORS.VOTE_NOT_FOUND, '投票已过期');
  }
  if (vote.yes[playerId] || vote.no[playerId]) throw new MPError(MP_ERRORS.VOTE_ALREADY_CAST);
  if (agree) vote.yes[playerId] = Date.now();
  else vote.no[playerId] = Date.now();
  this.emit('vote-cast', vote, playerId, agree);
  return this.tally(voteId);
};
MPRoleManager.prototype.tally = function (voteId) {
  var vote = this.votes[voteId];
  if (!vote) throw new MPError(MP_ERRORS.VOTE_NOT_FOUND);
  var onlineCount = this.room.onlineList().length;
  var yesCount = Object.keys(vote.yes).length;
  var noCount = Object.keys(vote.no).length;
  /* 通过条件：赞成 > 在线人数一半（房主一票计入 yes 时已含发起人）。 */
  var passed = yesCount > onlineCount / 2;
  var failed = noCount >= onlineCount / 2 || Date.now() > vote.expiresAt;
  if (passed) vote.status = 'passed';
  else if (failed) vote.status = 'failed';
  return { vote: vote, yes: yesCount, no: noCount, online: onlineCount, passed: passed, failed: failed };
};
MPRoleManager.prototype.closeExpiredVotes = function () {
  var now = Date.now();
  var closed = [];
  for (var id in this.votes) {
    var v = this.votes[id];
    if (v.status === 'open' && now > v.expiresAt) {
      var t = this.tally(id);
      closed.push({ id: id, passed: t.passed });
      this.emit('vote-ended', v, t.passed);
    }
  }
  return closed;
};

/* ================================================================
 * 8. 同步层：Lamport 时钟 + 操作日志 + 快照/增量
 * 状态 shape（plain object，与 game.js 解耦）：
 *   { resources: {iron, ice, ...}, pop: Number, popCap: Number,
 *     buildings: [{id, buildingId, x, y, level, owner}],
 *     tech: [techId...], policies: [policyId...], sectors: [n...],
 *     mapSize: 50, version: 3 }
 * ================================================================ */

function MPSyncEngine(opts) {
  MPEventEmitter.call(this);
  opts = opts || {};
  this.mapSize = opts.mapSize || 50;
  this.clock = 0;                 // 本地 Lamport 时钟
  this.opLog = [];                // 已应用的操作（按 lamport 排序）
  this.pendingAcks = {};          // opId -> {op, sentAt, attempts}
  this.claims = {};               // "x,y" -> {playerId, at, opId} 认领锁
  this.state = MPSyncEngine.freshState(this.mapSize);
  this.rateLimiter = new MPUtils.RateLimiter(30, 1000); // 每秒最多 30 个操作
  this.buildingIndex = null;      // 外部 BUILDINGS 表（有则做 id 校验）
  if (typeof BUILDINGS !== 'undefined') this.buildingIndex = BUILDINGS;
}
MPSyncEngine.prototype = Object.create(MPEventEmitter.prototype);
MPSyncEngine.prototype.constructor = MPSyncEngine;

MPSyncEngine.freshState = function (mapSize) {
  return {
    resources: {
      iron: 0, ice: 0, water: 0, food: 0, steel: 0, rare: 0, tech: 0,
      uranium: 0, he3: 0, power: 0, credits: 0,
    },
    pop: 2, popCap: 2,
    buildings: [],
    tech: [],
    policies: [],
    sectors: [0],
    mapSize: mapSize || 50,
    version: MP_PROTOCOL_VERSION,
  };
};

MPSyncEngine.prototype.tick = function (remoteClock) {
  this.clock = Math.max(this.clock, remoteClock || 0) + 1;
  return this.clock;
};
MPSyncEngine.prototype.keyOf = function (x, y) { return x + ',' + y; };
MPSyncEngine.prototype.inBounds = function (x, y) {
  return Number.isInteger(x) && Number.isInteger(y) &&
    x >= 0 && y >= 0 && x < this.mapSize && y < this.mapSize;
};
MPSyncEngine.prototype.buildingAt = function (x, y) {
  for (var i = 0; i < this.state.buildings.length; i++) {
    var b = this.state.buildings[i];
    if (b.x === x && b.y === y) return b;
  }
  return null;
};
MPSyncEngine.prototype.countBuilding = function (buildingId) {
  var n = 0;
  for (var i = 0; i < this.state.buildings.length; i++) {
    if (this.state.buildings[i].buildingId === buildingId) n++;
  }
  return n;
};

/* 创建本地操作：校验 + 盖 Lamport 时间戳 + 入日志。 */
MPSyncEngine.prototype.createOp = function (type, payload, playerId) {
  if (!MP_OP_TYPES[type] && Object.keys(MP_OP_TYPES).indexOf(type) < 0) {
    var known = false;
    for (var k in MP_OP_TYPES) if (MP_OP_TYPES[k] === type) { known = true; break; }
    if (!known) throw new MPError(MP_ERRORS.OP_INVALID, '未知操作类型 ' + type);
  }
  var rl = this.rateLimiter.tryAcquire();
  if (!rl.ok) throw new MPError(MP_ERRORS.OP_RATE_LIMITED);
  var op = {
    id: MPUtils.uid('op'),
    type: type,
    payload: MPUtils.deepClone(payload || {}),
    playerId: playerId || null,
    lamport: ++this.clock,
    ts: Date.now(),
  };
  var chk = this.validateOp(op, this.state);
  if (!chk.ok) throw new MPError(chk.code, chk.detail);
  return op;
};

/* 校验操作相对给定状态是否合法（不修改状态）。 */
MPSyncEngine.prototype.validateOp = function (op, state) {
  state = state || this.state;
  var p = op.payload || {};
  switch (op.type) {
    case MP_OP_TYPES.PLACE: {
      if (!p.buildingId || typeof p.buildingId !== 'string') {
        return { ok: false, code: MP_ERRORS.OP_UNKNOWN_BUILDING };
      }
      if (this.buildingIndex && !this.buildingIndex[p.buildingId]) {
        return { ok: false, code: MP_ERRORS.OP_UNKNOWN_BUILDING, detail: p.buildingId };
      }
      if (!this.inBounds(p.x, p.y)) {
        return { ok: false, code: MP_ERRORS.OP_OUT_OF_BOUNDS, detail: p.x + ',' + p.y };
      }
      if (this.buildingAt(p.x, p.y)) {
        return { ok: false, code: MP_ERRORS.OP_CELL_OCCUPIED, detail: p.x + ',' + p.y };
      }
      if (p.cost) {
        for (var k in p.cost) {
          var have = (state.resources[k] || 0);
          if (have < p.cost[k]) {
            return { ok: false, code: MP_ERRORS.OP_INSUFFICIENT_RES, detail: k };
          }
        }
      }
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.DEMOLISH:
    case MP_OP_TYPES.UPGRADE: {
      if (!this.inBounds(p.x, p.y)) return { ok: false, code: MP_ERRORS.OP_OUT_OF_BOUNDS };
      var b = this.buildingAt(p.x, p.y);
      if (!b) return { ok: false, code: MP_ERRORS.OP_INVALID, detail: '该格没有建筑' };
      if (op.type === MP_OP_TYPES.UPGRADE) {
        var to = p.toLevel || (b.level + 1);
        if (to < 1 || to > 5) return { ok: false, code: MP_ERRORS.OP_INVALID, detail: '等级越界' };
      }
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.RESOURCE_DELTA: {
      if (!p.delta || typeof p.delta !== 'object') return { ok: false, code: MP_ERRORS.OP_INVALID };
      for (var rk in p.delta) {
        if (MP_RESOURCE_KEYS.indexOf(rk) < 0) return { ok: false, code: MP_ERRORS.OP_INVALID, detail: '未知资源 ' + rk };
        if (typeof p.delta[rk] !== 'number' || isNaN(p.delta[rk])) return { ok: false, code: MP_ERRORS.OP_INVALID };
        if (Math.abs(p.delta[rk]) > MP_RESOURCE_DELTA_CAP) return { ok: false, code: MP_ERRORS.OP_INVALID, detail: rk + ' 单次增量过大' };
        var next = (state.resources[rk] || 0) + p.delta[rk];
        if (next < 0) return { ok: false, code: MP_ERRORS.OP_INSUFFICIENT_RES, detail: rk };
        if (next > MP_RESOURCE_CAPS[rk]) return { ok: false, code: MP_ERRORS.OP_INVALID, detail: rk + ' 超出上限' };
      }
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.RESOURCE_SET: {
      if (!p.res) return { ok: false, code: MP_ERRORS.OP_INVALID };
      for (var sk in p.res) {
        if (MP_RESOURCE_KEYS.indexOf(sk) < 0) return { ok: false, code: MP_ERRORS.OP_INVALID, detail: sk };
        if (p.res[sk] < 0 || p.res[sk] > MP_RESOURCE_CAPS[sk]) return { ok: false, code: MP_ERRORS.OP_INVALID, detail: sk };
      }
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.POP_SET: {
      if (typeof p.pop !== 'number' || p.pop < 0 || p.pop > 100000) return { ok: false, code: MP_ERRORS.OP_INVALID };
      if (p.cap != null && (p.cap < 0 || p.cap > 100000)) return { ok: false, code: MP_ERRORS.OP_INVALID };
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.TECH_UNLOCK: {
      if (!p.techId || typeof p.techId !== 'string') return { ok: false, code: MP_ERRORS.OP_INVALID };
      if (state.tech.indexOf(p.techId) >= 0) return { ok: false, code: MP_ERRORS.OP_STALE, detail: '科技已解锁' };
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.POLICY_ENACT: {
      if (!p.policyId) return { ok: false, code: MP_ERRORS.OP_INVALID };
      if (state.policies.indexOf(p.policyId) >= 0) return { ok: false, code: MP_ERRORS.OP_STALE, detail: '政策已颁布' };
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.POLICY_REPEAL: {
      if (!p.policyId) return { ok: false, code: MP_ERRORS.OP_INVALID };
      if (state.policies.indexOf(p.policyId) < 0) return { ok: false, code: MP_ERRORS.OP_STALE, detail: '政策未颁布' };
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.SECTOR_UNLOCK: {
      if (typeof p.sector !== 'number' || p.sector < 0 || p.sector > 99) return { ok: false, code: MP_ERRORS.OP_INVALID };
      if (state.sectors.indexOf(p.sector) >= 0) return { ok: false, code: MP_ERRORS.OP_STALE, detail: '扇区已解锁' };
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.CLAIM_CELL:
    case MP_OP_TYPES.RELEASE_CELL: {
      if (!this.inBounds(p.x, p.y)) return { ok: false, code: MP_ERRORS.OP_OUT_OF_BOUNDS };
      return { ok: true, code: MP_ERRORS.OK };
    }
    case MP_OP_TYPES.CURSOR:
      return { ok: true, code: MP_ERRORS.OK };
    default:
      return { ok: false, code: MP_ERRORS.OP_INVALID, detail: '未知操作 ' + op.type };
  }
};

/* 应用操作到状态（先校验，失败返回 {ok:false} 且不改状态）。 */
MPSyncEngine.prototype.applyOp = function (op, opts) {
  opts = opts || {};
  if (!op || !op.type) return { ok: false, code: MP_ERRORS.OP_INVALID };
  /* 去重：同一 opId 只应用一次。 */
  for (var i = 0; i < this.opLog.length; i++) {
    if (this.opLog[i].id === op.id) return { ok: false, code: MP_ERRORS.OP_STALE, detail: '重复操作' };
  }
  /* 时钟推进：收到远端操作时 Lamport 取 max+1。 */
  if (typeof op.lamport === 'number') this.tick(op.lamport);
  else op.lamport = ++this.clock;
  /* CURSOR 不进日志、不改状态，只转发给订阅者。 */
  if (op.type === MP_OP_TYPES.CURSOR) {
    this.emit('cursor', op);
    return { ok: true, code: MP_ERRORS.OK, transient: true };
  }
  var chk = this.validateOp(op, this.state);
  if (!chk.ok) {
    this.emit('op-rejected', op, chk);
    return { ok: false, code: chk.code, detail: chk.detail };
  }
  var p = op.payload || {};
  var st = this.state;
  switch (op.type) {
    case MP_OP_TYPES.PLACE: {
      if (p.cost) {
        for (var ck in p.cost) st.resources[ck] = (st.resources[ck] || 0) - p.cost[ck];
      }
      st.buildings.push({
        id: MPUtils.uid('b'), buildingId: p.buildingId, x: p.x, y: p.y,
        level: p.level || 1, owner: op.playerId, placedAt: op.ts,
      });
      break;
    }
    case MP_OP_TYPES.DEMOLISH: {
      var b = this.buildingAt(p.x, p.y);
      if (b) st.buildings.splice(st.buildings.indexOf(b), 1);
      if (p.refund) {
        for (var rk in p.refund) st.resources[rk] = (st.resources[rk] || 0) + p.refund[rk];
      }
      break;
    }
    case MP_OP_TYPES.UPGRADE: {
      var ub = this.buildingAt(p.x, p.y);
      if (ub) ub.level = p.toLevel || (ub.level + 1);
      if (p.cost) {
        for (var uk in p.cost) st.resources[uk] = (st.resources[uk] || 0) - p.cost[uk];
      }
      break;
    }
    case MP_OP_TYPES.RESOURCE_DELTA: {
      for (var dk in p.delta) st.resources[dk] = (st.resources[dk] || 0) + p.delta[dk];
      break;
    }
    case MP_OP_TYPES.RESOURCE_SET: {
      for (var sk in p.res) st.resources[sk] = p.res[sk];
      break;
    }
    case MP_OP_TYPES.POP_SET: {
      st.pop = p.pop;
      if (p.cap != null) st.popCap = p.cap;
      break;
    }
    case MP_OP_TYPES.TECH_UNLOCK: {
      if (st.tech.indexOf(p.techId) < 0) st.tech.push(p.techId);
      break;
    }
    case MP_OP_TYPES.POLICY_ENACT: {
      if (st.policies.indexOf(p.policyId) < 0) st.policies.push(p.policyId);
      break;
    }
    case MP_OP_TYPES.POLICY_REPEAL: {
      var pi = st.policies.indexOf(p.policyId);
      if (pi >= 0) st.policies.splice(pi, 1);
      break;
    }
    case MP_OP_TYPES.SECTOR_UNLOCK: {
      if (st.sectors.indexOf(p.sector) < 0) st.sectors.push(p.sector);
      break;
    }
    case MP_OP_TYPES.CLAIM_CELL: {
      this.claims[this.keyOf(p.x, p.y)] = { playerId: op.playerId, at: op.ts, opId: op.id };
      break;
    }
    case MP_OP_TYPES.RELEASE_CELL: {
      delete this.claims[this.keyOf(p.x, p.y)];
      break;
    }
  }
  this.opLog.push(MPUtils.deepClone(op));
  if (this.opLog.length > MP_MAX_OP_LOG) {
    this.opLog.splice(0, this.opLog.length - MP_MAX_OP_LOG);
  }
  this.emit('op-applied', op);
  return { ok: true, code: MP_ERRORS.OK };
};

/* 接收远端操作：冲突预检（同格抢建）→ 应用 → 返回裁决。 */
MPSyncEngine.prototype.receiveOp = function (op, resolver) {
  if (!op) return { ok: false, code: MP_ERRORS.OP_INVALID };
  if (op.type === MP_OP_TYPES.PLACE && resolver) {
    var conflict = resolver.checkPlaceConflict(op, this);
    if (conflict) {
      var verdict = resolver.resolve(conflict);
      if (!verdict.won) {
        this.emit('op-conflict', op, verdict);
        return { ok: false, code: MP_ERRORS.OP_CELL_OCCUPIED, detail: verdict.reason, verdict: verdict };
      }
    }
  }
  return this.applyOp(op);
};

/* 快照：全量状态 + 时钟 + 日志长度（供新加入者同步）。 */
MPSyncEngine.prototype.snapshot = function () {
  return {
    state: MPUtils.deepClone(this.state),
    clock: this.clock,
    opCount: this.opLog.length,
    claims: MPUtils.deepClone(this.claims),
    at: Date.now(),
  };
};
MPSyncEngine.prototype.restoreSnapshot = function (snap) {
  if (!snap || !snap.state) throw new MPError(MP_ERRORS.OP_INVALID, '快照无效');
  this.state = MPUtils.deepClone(snap.state);
  if (typeof snap.clock === 'number') this.clock = Math.max(this.clock, snap.clock);
  if (snap.claims) this.claims = MPUtils.deepClone(snap.claims);
  this.opLog = [];
  this.emit('snapshot-restored', snap);
  return this;
};
/* 增量：自某 Lamport 时钟之后的所有操作。 */
MPSyncEngine.prototype.deltaSince = function (lamport) {
  return this.opLog.filter(function (op) { return op.lamport > lamport; });
};
MPSyncEngine.prototype.opsSince = function (lamport) { return this.deltaSince(lamport); };

/* 认领锁过期清理（超过 30 秒未确认的认领自动释放）。 */
MPSyncEngine.prototype.pruneClaims = function (now) {
  now = now || Date.now();
  var released = [];
  for (var k in this.claims) {
    if (now - this.claims[k].at > 30000) { released.push(k); delete this.claims[k]; }
  }
  return released;
};
MPSyncEngine.prototype.claimedBy = function (x, y) {
  var c = this.claims[this.keyOf(x, y)];
  return c ? c.playerId : null;
};

/* 待确认队列：发出的操作在收到 OP_ACK 前保留，超时重发由门面层驱动。 */
MPSyncEngine.prototype.trackSent = function (op) {
  this.pendingAcks[op.id] = { op: op, sentAt: Date.now(), attempts: 1 };
  return this;
};
MPSyncEngine.prototype.ackReceived = function (opId) {
  if (this.pendingAcks[opId]) { delete this.pendingAcks[opId]; return true; }
  return false;
};
MPSyncEngine.prototype.pendingRetryList = function (now) {
  now = now || Date.now();
  var out = [];
  for (var id in this.pendingAcks) {
    var e = this.pendingAcks[id];
    if (now - e.sentAt > MP_OP_RETRY_MS) out.push(e);
  }
  return out;
};

/* ================================================================
 * 9. 冲突层
 * 确定性仲裁：比较 (lamport, ts, playerId) 三元组，小者胜出。
 * 同格抢建用 first-writer-wins（先到的操作胜出）；资源用合并。
 * ================================================================ */

function MPConflictResolver(opts) {
  opts = opts || {};
  this.strategy = opts.strategy || 'first-writer-wins'; // 或 last-writer-wins
  this.log = [];   // 裁决记录（上限 200）
  this.stats = { total: 0, placeRaces: 0, resourceMerges: 0, resolvedForMe: 0, resolvedAgainstMe: 0 };
}
MPConflictResolver.prototype._record = function (entry) {
  entry.at = Date.now();
  this.log.push(entry);
  if (this.log.length > 200) this.log.splice(0, this.log.length - 200);
  this.stats.total++;
  return entry;
};
/* 三元组比较：返回 -1（a 先）/ 0（相同）/ 1（b 先）。 */
MPConflictResolver.prototype.compareOps = function (a, b) {
  if (a.lamport !== b.lamport) return a.lamport < b.lamport ? -1 : 1;
  if (a.ts !== b.ts) return a.ts < b.ts ? -1 : 1;
  if (a.playerId === b.playerId) return 0;
  return String(a.playerId) < String(b.playerId) ? -1 : 1;
};
/* 检查一次 PLACE 操作是否与本地状态冲突。返回冲突描述或 null。 */
MPConflictResolver.prototype.checkPlaceConflict = function (op, engine) {
  var p = op.payload || {};
  var existing = engine.buildingAt(p.x, p.y);
  if (existing) {
    return {
      kind: 'cell-occupied', x: p.x, y: p.y,
      incoming: op, existing: existing,
    };
  }
  var claimer = engine.claimedBy(p.x, p.y);
  if (claimer && claimer !== op.playerId) {
    return { kind: 'cell-claimed', x: p.x, y: p.y, incoming: op, claimer: claimer };
  }
  /* 检查操作日志里是否已有同格同 Lamport 窗口的竞争操作。 */
  for (var i = engine.opLog.length - 1; i >= 0; i--) {
    var prev = engine.opLog[i];
    if (prev.type !== MP_OP_TYPES.PLACE) continue;
    if (prev.payload.x === p.x && prev.payload.y === p.y &&
        Math.abs(prev.lamport - op.lamport) <= 2 && prev.playerId !== op.playerId) {
      return { kind: 'place-race', x: p.x, y: p.y, incoming: op, rival: prev };
    }
  }
  return null;
};
/* 裁决：返回 {won, reason, loserOp?, winnerOp?}。won 指 incoming 是否胜出。 */
MPConflictResolver.prototype.resolve = function (conflict) {
  var incoming = conflict.incoming;
  var reason = '';
  var won = false;
  if (conflict.kind === 'cell-occupied') {
    /* 格子已有建筑：后来者一律败（建筑已成事实）。 */
    won = false;
    reason = '格子已有建筑「' + (conflict.existing.buildingId || '') + '」（' +
      conflict.x + ',' + conflict.y + '），你的建造被退回，资源已返还';
    this.stats.placeRaces++;
  } else if (conflict.kind === 'cell-claimed') {
    won = false;
    reason = '该格已被其他玩家认领（先占先得），请换一块空地';
    this.stats.placeRaces++;
  } else if (conflict.kind === 'place-race') {
    this.stats.placeRaces++;
    var cmp = this.compareOps(incoming, conflict.rival);
    if (this.strategy === 'first-writer-wins') {
      won = cmp < 0;
      reason = won
        ? '同格抢建：你的操作时间戳更早，胜出'
        : '同格抢建：对方的操作时间戳更早，对方胜出，你的建造被退回';
    } else {
      won = cmp > 0;
      reason = won
        ? '同格抢建：你的操作更新，胜出（后来者居上）'
        : '同格抢建：对方的操作更新，对方胜出';
    }
  }
  var entry = {
    kind: conflict.kind, x: conflict.x, y: conflict.y,
    incomingId: incoming.id, incomingPlayer: incoming.playerId,
    won: won, reason: reason, strategy: this.strategy,
  };
  this._record(entry);
  return { won: won, reason: reason, entry: entry };
};
/* 资源合并：两个并发的资源增量直接相加（交换律，无冲突），但要过上限。 */
MPConflictResolver.prototype.mergeResourceDeltas = function (deltaA, deltaB, state) {
  var merged = {};
  var keys = {};
  for (var k in deltaA) keys[k] = true;
  for (var k2 in deltaB) keys[k2] = true;
  for (var key in keys) {
    var sum = (deltaA[key] || 0) + (deltaB[key] || 0);
    var base = (state.resources[key] || 0);
    var next = base + sum;
    if (next < 0) sum = -base;                    // 不允许扣成负数
    if (next > MP_RESOURCE_CAPS[key]) sum = MP_RESOURCE_CAPS[key] - base; // 截断到上限
    merged[key] = sum;
  }
  this.stats.resourceMerges++;
  this._record({ kind: 'resource-merge', merged: merged, won: true, reason: '资源增量合并 applied' });
  return merged;
};
MPConflictResolver.prototype.recentConflicts = function (n) {
  return this.log.slice(-(n || 10));
};
MPConflictResolver.prototype.clearLog = function () {
  this.log = [];
  return this;
};

/* ================================================================
 * 10. 聊天层：频道 / 表情 / 指令 / 禁言 / 反应
 * ================================================================ */

/* 表情短码 -> emoji（聊天输入 :smile: 会被渲染）。 */
var MP_EMOJIS = {
  smile: '😊', laugh: '😂', rocket: '🚀', mars: '🔴', heart: '❤️',
  thumbsup: '👍', thumbsdown: '👎', fire: '🔥', star: '⭐', check: '✅',
  warning: '⚠️', hammer: '🔨', bolt: '⚡', drop: '💧', wheat: '🌾',
  iron: '⛏️', house: '🏠', shield: '🛡️', clap: '👏', think: '🤔',
  party: '🎉', sad: '😢', angry: '😠', cool: '😎', robot: '🤖',
  alien: '👽', earth: '🌍', moon: '🌙', gift: '🎁', eyes: '👀',
};
var MP_CHAT_COMMANDS = {
  me: '动作消息：/me 正在修太阳能板',
  roll: '掷骰子：/roll 或 /roll 100',
  whisper: '私聊：/w 玩家名 消息',
  help: '查看指令帮助',
  online: '查看在线玩家',
  vote: '发起投票：/vote kick 玩家名',
  clear: '清屏（仅房主/管理员）',
  mute: '禁言：/mute 玩家名 分钟数（仅房主/管理员）',
};

function MPChatManager(opts) {
  MPEventEmitter.call(this);
  opts = opts || {};
  this.maxHistory = opts.maxHistory || MP_MAX_CHAT_HISTORY;
  this.messages = [];   // {id, channel, fromId, fromName, text, ts, system, reactions:{}}
  this.muted = {};      // playerId -> mutedUntil
  this.rateLimiter = new MPUtils.RateLimiter(10, 10000); // 10 秒内最多 10 条
  this.unread = { room: 0, division: 0, whisper: 0 };
  this.activeChannel = 'room';
}
MPChatManager.prototype = Object.create(MPEventEmitter.prototype);
MPChatManager.prototype.constructor = MPChatManager;

MPChatManager.prototype.renderEmojis = function (text) {
  return String(text).replace(/:([a-z0-9_]+):/g, function (m, code) {
    return MP_EMOJIS[code] || m;
  });
};
MPChatManager.prototype.isMuted = function (playerId) {
  var until = this.muted[playerId] || 0;
  if (Date.now() < until) return true;
  if (until) delete this.muted[playerId];
  return false;
};
MPChatManager.prototype.mute = function (playerId, minutes) {
  this.muted[playerId] = Date.now() + Math.max(1, minutes || 5) * 60000;
  this.system('玩家已被禁言 ' + (minutes || 5) + ' 分钟');
  this.emit('muted', playerId);
  return this;
};
MPChatManager.prototype.unmute = function (playerId) {
  delete this.muted[playerId];
  this.emit('unmuted', playerId);
  return this;
};
MPChatManager.prototype._push = function (msg) {
  this.messages.push(msg);
  if (this.messages.length > this.maxHistory) {
    this.messages.splice(0, this.messages.length - this.maxHistory);
  }
  if (msg.channel !== this.activeChannel && !msg.system) {
    this.unread[msg.channel] = (this.unread[msg.channel] || 0) + 1;
  }
  this.emit('message', msg);
  return msg;
};
MPChatManager.prototype.send = function (player, text, channel) {
  if (!player || !player.id) throw new MPError(MP_ERRORS.PLAYER_NOT_FOUND);
  if (this.isMuted(player.id)) throw new MPError(MP_ERRORS.CHAT_MUTED);
  var raw = String(text == null ? '' : text).trim();
  if (!raw) throw new MPError(MP_ERRORS.CHAT_EMPTY);
  if (raw.length > 500) throw new MPError(MP_ERRORS.CHAT_TOO_LONG, '上限 500 字符');
  /* 斜杠指令不进入普通消息流。 */
  if (raw.charAt(0) === '/') return this.handleCommand(player, raw, channel);
  var rl = this.rateLimiter.tryAcquire();
  if (!rl.ok) throw new MPError(MP_ERRORS.CHAT_RATE_LIMITED);
  var msg = {
    id: MPUtils.uid('msg'),
    channel: channel || 'room',
    fromId: player.id,
    fromName: player.name,
    fromColor: player.color,
    text: MPUtils.sanitizeText(raw),
    rendered: this.renderEmojis(MPUtils.sanitizeText(raw)),
    ts: Date.now(),
    system: false,
    reactions: {},
  };
  return this._push(msg);
};
MPChatManager.prototype.receive = function (msg) {
  if (!msg || !msg.id) return null;
  for (var i = 0; i < this.messages.length; i++) {
    if (this.messages[i].id === msg.id) return null; // 去重
  }
  msg.rendered = this.renderEmojis(msg.text || '');
  return this._push(msg);
};
MPChatManager.prototype.system = function (text, channel) {
  var msg = {
    id: MPUtils.uid('sys'),
    channel: channel || 'room',
    fromId: null, fromName: '系统', fromColor: '#94a3b8',
    text: MPUtils.sanitizeText(text),
    rendered: MPUtils.sanitizeText(text),
    ts: Date.now(),
    system: true,
    reactions: {},
  };
  return this._push(msg);
};
MPChatManager.prototype.handleCommand = function (player, raw, channel) {
  var parts = raw.slice(1).split(/\s+/);
  var cmd = (parts[0] || '').toLowerCase();
  var args = parts.slice(1);
  var self = this;
  switch (cmd) {
    case 'me': {
      var action = args.join(' ');
      if (!action) throw new MPError(MP_ERRORS.CHAT_EMPTY, '/me 后面要跟动作');
      return this._push({
        id: MPUtils.uid('msg'), channel: channel || 'room',
        fromId: player.id, fromName: player.name, fromColor: player.color,
        text: '* ' + player.name + ' ' + MPUtils.sanitizeText(action) + ' *',
        rendered: '* ' + player.name + ' ' + this.renderEmojis(MPUtils.sanitizeText(action)) + ' *',
        ts: Date.now(), system: false, reactions: {}, action: true,
      });
    }
    case 'roll': {
      var max = parseInt(args[0], 10);
      if (isNaN(max) || max < 2) max = 100;
      if (max > 1000000) max = 1000000;
      var n = 1 + Math.floor(Math.random() * max);
      return this.system(player.name + ' 掷出了 ' + n + '（1-' + max + '）🎲');
    }
    case 'w':
    case 'whisper': {
      var target = args[0];
      var body = args.slice(1).join(' ');
      if (!target || !body) throw new MPError(MP_ERRORS.CHAT_EMPTY, '用法：/w 玩家名 消息');
      var msg = {
        id: MPUtils.uid('msg'), channel: 'whisper',
        fromId: player.id, fromName: player.name, fromColor: player.color,
        toName: target, text: MPUtils.sanitizeText(body),
        rendered: this.renderEmojis(MPUtils.sanitizeText(body)),
        ts: Date.now(), system: false, reactions: {}, whisper: true,
      };
      this._push(msg);
      this.emit('whisper', msg);
      return msg;
    }
    case 'online': {
      this.emit('command-online', player);
      return this.system('在线玩家请查看右侧玩家列表 👥');
    }
    case 'help': {
      var lines = ['可用指令：'];
      for (var k in MP_CHAT_COMMANDS) lines.push('/' + k + ' — ' + MP_CHAT_COMMANDS[k]);
      return this.system(lines.join(' ｜ '));
    }
    case 'vote': {
      if (args[0] === 'kick' && args[1]) {
        this.emit('command-vote-kick', player, args[1]);
        return this.system(player.name + ' 发起了对 ' + args[1] + ' 的踢人投票');
      }
      throw new MPError(MP_ERRORS.CHAT_EMPTY, '用法：/vote kick 玩家名');
    }
    case 'clear': {
      this.emit('command-clear', player);
      return null;
    }
    case 'mute': {
      if (args[0]) {
        this.emit('command-mute', player, args[0], parseInt(args[1], 10) || 5);
        return this.system(player.name + ' 申请禁言 ' + args[0]);
      }
      throw new MPError(MP_ERRORS.CHAT_EMPTY, '用法：/mute 玩家名 分钟数');
    }
    default:
      return this.system('未知指令 /' + cmd + '，输入 /help 查看全部指令');
  }
};
MPChatManager.prototype.react = function (messageId, playerId, emoji) {
  if (!MP_EMOJIS[emoji] && Object.keys(MP_EMOJIS).indexOf(emoji) < 0 && !emoji) {
    throw new MPError(MP_ERRORS.UNKNOWN, '未知表情');
  }
  for (var i = 0; i < this.messages.length; i++) {
    var m = this.messages[i];
    if (m.id === messageId) {
      if (!m.reactions[emoji]) m.reactions[emoji] = [];
      var idx = m.reactions[emoji].indexOf(playerId);
      if (idx >= 0) m.reactions[emoji].splice(idx, 1); // 再点一次取消
      else m.reactions[emoji].push(playerId);
      if (m.reactions[emoji].length === 0) delete m.reactions[emoji];
      this.emit('react', m, playerId, emoji);
      return m;
    }
  }
  return null;
};
MPChatManager.prototype.history = function (channel, n) {
  var list = this.messages;
  if (channel) list = list.filter(function (m) { return m.channel === channel || m.system; });
  return list.slice(-(n || 50));
};
MPChatManager.prototype.setActiveChannel = function (channel) {
  this.activeChannel = channel;
  this.unread[channel] = 0;
  return this;
};
MPChatManager.prototype.clear = function () {
  this.messages = [];
  this.unread = { room: 0, division: 0, whisper: 0 };
  this.emit('cleared');
  return this;
};
MPChatManager.prototype.save = function () {
  var ls = __mpStorage();
  if (!ls) return false;
  try {
    ls.setItem(MP_CHAT_HISTORY_KEY, JSON.stringify(this.messages.slice(-50)));
    return true;
  } catch (e) { return false; }
};
MPChatManager.prototype.load = function () {
  var ls = __mpStorage();
  if (!ls) return this;
  try {
    var raw = ls.getItem(MP_CHAT_HISTORY_KEY);
    if (raw) {
      var arr = JSON.parse(raw);
      if (Array.isArray(arr)) this.messages = arr;
    }
  } catch (e) {}
  return this;
};

/* ================================================================
 * 11. 合作层：分工任务板 / 共同目标 / 贡献分
 * ================================================================ */

/* 任务模板：kind 决定完成条件如何从游戏状态判定。 */
var MP_TASK_KINDS = {
  build_count: '建造指定建筑 N 栋',
  resource_stock: '囤积指定资源到 N',
  pop_reach: '人口达到 N',
  power_surplus: '电力盈余达到 N',
  sector_unlock: '解锁 N 个扇区',
  tech_count: '解锁科技 N 项',
};

function MPCoOpManager(room, syncEngine) {
  MPEventEmitter.call(this);
  this.room = room || null;
  this.sync = syncEngine || null;
  this.tasks = [];   // {id, title, kind, target, progress, assignedTo, createdBy, status, createdAt}
  this.goals = [];   // {id, title, detail, progress, target, createdBy, createdAt, done}
  this.contributions = {}; // playerId -> {build, res, task, total}
}
MPCoOpManager.prototype = Object.create(MPEventEmitter.prototype);
MPCoOpManager.prototype.constructor = MPCoOpManager;

MPCoOpManager.prototype.setRoom = function (room, syncEngine) {
  this.room = room;
  if (syncEngine) this.sync = syncEngine;
  return this;
};
MPCoOpManager.prototype.createTask = function (byId, spec) {
  if (!spec || !spec.title || !MP_TASK_KINDS[spec.kind]) {
    throw new MPError(MP_ERRORS.UNKNOWN, '任务参数不合法');
  }
  var task = {
    id: MPUtils.uid('task'),
    title: String(spec.title).slice(0, 40),
    kind: spec.kind,
    target: spec.target || {},
    progress: 0,
    assignedTo: spec.assignedTo || null,
    createdBy: byId || null,
    status: 'open',   // open | done
    createdAt: Date.now(),
    doneAt: null,
  };
  this.tasks.push(task);
  this.emit('task-created', task);
  return task;
};
MPCoOpManager.prototype.assignTask = function (taskId, playerId) {
  var task = this.getTask(taskId);
  if (!task) throw new MPError(MP_ERRORS.TASK_NOT_FOUND);
  if (!this.room.getMember(playerId)) throw new MPError(MP_ERRORS.PLAYER_NOT_FOUND);
  task.assignedTo = playerId;
  this.emit('task-assigned', task);
  return task;
};
MPCoOpManager.prototype.getTask = function (taskId) {
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].id === taskId) return this.tasks[i];
  }
  return null;
};
MPCoOpManager.prototype.completeTask = function (taskId, byId) {
  var task = this.getTask(taskId);
  if (!task) throw new MPError(MP_ERRORS.TASK_NOT_FOUND);
  if (task.status === 'done') return task;
  task.status = 'done';
  task.doneAt = Date.now();
  this.addContribution(byId || task.assignedTo, 'task', 50);
  this.emit('task-done', task);
  return task;
};
/* 根据当前同步状态重算全部开放任务的进度（由门面层每 tick 调用）。 */
MPCoOpManager.prototype.refreshProgress = function () {
  if (!this.sync) return [];
  var st = this.sync.state;
  var changed = [];
  for (var i = 0; i < this.tasks.length; i++) {
    var t = this.tasks[i];
    if (t.status === 'done') continue;
    var p = 0;
    if (t.kind === 'build_count') p = this.sync.countBuilding(t.target.buildingId);
    else if (t.kind === 'resource_stock') p = st.resources[t.target.resource] || 0;
    else if (t.kind === 'pop_reach') p = st.pop;
    else if (t.kind === 'power_surplus') p = Math.max(0, (st.resources.power || 0));
    else if (t.kind === 'sector_unlock') p = st.sectors.length;
    else if (t.kind === 'tech_count') p = st.tech.length;
    var need = t.target.count || t.target.amount || 1;
    var pct = MPUtils.clamp(p / need, 0, 1);
    if (pct !== t.progress) { t.progress = pct; changed.push(t); }
    if (pct >= 1) this.completeTask(t.id, t.assignedTo);
  }
  return changed;
};
/* 按当前短板自动生成建议任务（供房主一键下发，不是填充物：每项都可完成、可判定）。 */
MPCoOpManager.prototype.suggestTasks = function () {
  if (!this.sync) return [];
  var st = this.sync.state;
  var out = [];
  var power = st.resources.power || 0;
  var food = st.resources.food || 0;
  var iron = st.resources.iron || 0;
  if (power < 20) out.push({ title: '扩建电力：再建 2 座太阳能板', kind: 'build_count', target: { buildingId: 'solar', count: 2 } });
  if (food < 30) out.push({ title: '保障食物：再建 1 座温室', kind: 'build_count', target: { buildingId: 'greenhouse', count: 1 } });
  if (iron < 50) out.push({ title: '开矿：再建 2 台矿机', kind: 'build_count', target: { buildingId: 'miner', count: 2 } });
  if (st.pop >= st.popCap) out.push({ title: '扩容人口：再建 2 间居住舱', kind: 'build_count', target: { buildingId: 'habitat', count: 2 } });
  if (st.sectors.length < 3) out.push({ title: '开拓：解锁到 3 个扇区', kind: 'sector_unlock', target: { count: 3 } });
  if (st.tech.length < 5) out.push({ title: '科研：解锁 5 项科技', kind: 'tech_count', target: { count: 5 } });
  return out;
};
MPCoOpManager.prototype.setGoal = function (byId, title, detail, target) {
  var goal = {
    id: MPUtils.uid('goal'),
    title: String(title).slice(0, 40),
    detail: String(detail || '').slice(0, 120),
    target: target || {},
    progress: 0,
    createdBy: byId || null,
    createdAt: Date.now(),
    done: false,
  };
  this.goals.push(goal);
  this.emit('goal-set', goal);
  return goal;
};
MPCoOpManager.prototype.refreshGoals = function () {
  if (!this.sync) return [];
  var st = this.sync.state;
  var changed = [];
  for (var i = 0; i < this.goals.length; i++) {
    var g = this.goals[i];
    if (g.done) continue;
    var pct = 0;
    if (g.target.pop) pct = st.pop / g.target.pop;
    else if (g.target.buildings) pct = st.buildings.length / g.target.buildings;
    else if (g.target.sectors) pct = st.sectors.length / g.target.sectors;
    pct = MPUtils.clamp(pct, 0, 1);
    if (pct !== g.progress) { g.progress = pct; changed.push(g); }
    if (pct >= 1) { g.done = true; this.emit('goal-done', g); }
  }
  return changed;
};
MPCoOpManager.prototype.addContribution = function (playerId, kind, amount) {
  if (!playerId) return null;
  var c = this.contributions[playerId];
  if (!c) c = this.contributions[playerId] = { build: 0, res: 0, task: 0, total: 0 };
  if (kind === 'build') c.build += amount;
  else if (kind === 'res') c.res += amount;
  else if (kind === 'task') c.task += amount;
  c.total = c.build + c.res + c.task;
  this.emit('contribution', playerId, c);
  return c;
};
MPCoOpManager.prototype.leaderboard = function () {
  var list = [];
  for (var id in this.contributions) {
    list.push({ playerId: id, score: this.contributions[id] });
  }
  list.sort(function (a, b) { return b.score.total - a.score.total; });
  return list;
};
MPCoOpManager.prototype.openTasks = function () {
  return this.tasks.filter(function (t) { return t.status === 'open'; });
};

/* ================================================================
 * 12. 门面层：MPMultiplayerManager
 * ================================================================ */

function MPMultiplayerManager(game, opts) {
  MPEventEmitter.call(this);
  opts = opts || {};
  this.game = game || null;
  this.opts = opts;
  this.namespace = opts.namespace || 'starport-mp-v3';
  this.me = null;             // MPPlayer（本机）
  this.room = null;           // MPRoom（当前房间）
  this.roomManager = new MPRoomManager({ namespace: this.namespace });
  this.transport = new MPLocalTransport({ namespace: this.namespace });
  this.presence = new MPPresenceManager();
  this.roles = new MPRoleManager(null);
  this.sync = new MPSyncEngine({ mapSize: (game && game.map && game.map.size) || 50 });
  this.resolver = new MPConflictResolver({ strategy: opts.conflictStrategy || 'first-writer-wins' });
  this.chat = new MPChatManager();
  this.coop = new MPCoOpManager(null, this.sync);
  this.connected = false;
  this._bound = false;
  this._tickTimer = null;
  this._opRetryTimer = null;
  this._lastSnapshotAt = 0;
  var self = this;
  this._onTransportMessage = function (env) { self._handleMessage(env); };
  this._onPresenceTick = function () { self._sendHeartbeat(); };
}
MPMultiplayerManager.prototype = Object.create(MPEventEmitter.prototype);
MPMultiplayerManager.prototype.constructor = MPMultiplayerManager;

MPMultiplayerManager.prototype.setIdentity = function (name) {
  if (!MPUtils.isValidName(name)) throw new MPError(MP_ERRORS.INVALID_NAME);
  if (!this.me) this.me = new MPPlayer({ name: name.trim() });
  else this.me.name = name.trim();
  return this.me;
};
MPMultiplayerManager.prototype.ensureIdentity = function () {
  if (!this.me) this.me = new MPPlayer({ name: '宇航员' + MPUtils.shortCode(MPUtils.uid('x')) });
  return this.me;
};

/* --- 房间操作 --- */
MPMultiplayerManager.prototype.hostRoom = function (opts) {
  this.ensureIdentity();
  if (this.room) throw new MPError(MP_ERRORS.ALREADY_IN_ROOM);
  var host = new MPPlayer({
    id: this.me.id, name: this.me.name, color: this.me.color,
    role: 'host', nodeId: this.transport.nodeId,
  });
  var room = this.roomManager.createRoom(opts || { name: host.name + '的殖民地' }, host);
  this.me = host;
  this._enterRoom(room);
  return room;
};
MPMultiplayerManager.prototype.joinRoom = function (roomId, password) {
  this.ensureIdentity();
  if (this.room) throw new MPError(MP_ERRORS.ALREADY_IN_ROOM);
  var player = new MPPlayer({
    id: this.me.id, name: this.me.name, color: this.me.color,
    nodeId: this.transport.nodeId,
  });
  var room = this.roomManager.joinRoom(roomId, player, password);
  this.me = player;
  this._enterRoom(room);
  /* 加入后向房主请求快照（房主收到 SNAPSHOT_REQ 后回 SNAPSHOT）。 */
  this._send(MP_MSG_TYPES.SNAPSHOT_REQ, { clock: this.sync.clock });
  return room;
};
MPMultiplayerManager.prototype.leaveRoom = function () {
  if (!this.room) return false;
  var roomId = this.room.id;
  try { this._send(MP_MSG_TYPES.BYE, { playerId: this.me.id }); } catch (e) {}
  this._leaveTransport();
  this.roomManager.leaveRoom(roomId, this.me.id);
  this.chat.system(this.me.name + ' 离开了房间');
  this.room = null;
  this.connected = false;
  this.roles.setRoom(null);
  this.coop.setRoom(null, this.sync);
  this.emit('left', roomId);
  return true;
};
MPMultiplayerManager.prototype._enterRoom = function (room) {
  this.room = room;
  this.connected = true;
  this.roles.setRoom(room);
  this.coop.setRoom(room, this.sync);
  this.transport.start(room.id);
  if (!this._bound) {
    this.transport.on('message', this._onTransportMessage);
    this._bound = true;
  }
  this.presence.track(this.me);
  this.presence.start(this._onPresenceTick);
  this.chat.system(this.me.name + ' 加入了房间「' + room.name + '」');
  this._send(MP_MSG_TYPES.HELLO, {
    player: this.me.toJSON(), version: MP_PROTOCOL_VERSION,
  });
  this._startTimers();
  this.emit('joined', room);
  return this;
};
MPMultiplayerManager.prototype._leaveTransport = function () {
  if (this._tickTimer) { clearInterval(this._tickTimer); this._tickTimer = null; }
  if (this._opRetryTimer) { clearInterval(this._opRetryTimer); this._opRetryTimer = null; }
  this.presence.stop();
  this.transport.stop();
};
MPMultiplayerManager.prototype._startTimers = function () {
  var self = this;
  if (!this._tickTimer) {
    this._tickTimer = setInterval(function () { self._tick(); }, 1000);
    if (this._tickTimer.unref) this._tickTimer.unref();
  }
  if (!this._opRetryTimer) {
    this._opRetryTimer = setInterval(function () { self._retryPendingOps(); }, MP_OP_RETRY_MS);
    if (this._opRetryTimer.unref) this._opRetryTimer.unref();
  }
};
MPMultiplayerManager.prototype._tick = function () {
  if (!this.room) return;
  this.roles.closeExpiredVotes();
  this.sync.pruneClaims();
  this.coop.refreshProgress();
  this.coop.refreshGoals();
};
MPMultiplayerManager.prototype._sendHeartbeat = function () {
  if (!this.room || !this.connected) return;
  try {
    this._send(MP_MSG_TYPES.HEARTBEAT, { playerId: this.me.id, at: Date.now() });
  } catch (e) {}
};
MPMultiplayerManager.prototype._send = function (type, payload, to) {
  return this.transport.send(type, payload, to);
};

/* --- 操作收发 --- */
/* 本地操作：创建 -> 应用到本地状态 -> 广播 -> 等待确认。 */
MPMultiplayerManager.prototype.doOp = function (type, payload) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var op = this.sync.createOp(type, payload, this.me.id);
  var res = this.sync.applyOp(op);
  if (!res.ok) throw new MPError(res.code, res.detail);
  this.sync.trackSent(op);
  this._send(MP_MSG_TYPES.OP, { op: op });
  this._afterLocalOp(op);
  return op;
};
MPMultiplayerManager.prototype._afterLocalOp = function (op) {
  /* 贡献分：放置建筑 +10，升级 +5，其余 +1。 */
  if (op.type === MP_OP_TYPES.PLACE) {
    this.coop.addContribution(op.playerId, 'build', 10);
    if (this.me && this.me.id === op.playerId) this.me.buildCount++;
  } else if (op.type === MP_OP_TYPES.UPGRADE) {
    this.coop.addContribution(op.playerId, 'build', 5);
  }
  this.emit('op', op);
};
MPMultiplayerManager.prototype._retryPendingOps = function () {
  if (!this.room) return;
  var list = this.sync.pendingRetryList();
  for (var i = 0; i < list.length; i++) {
    var e = list[i];
    if (e.attempts >= 5) {
      delete this.sync.pendingAcks[e.op.id];
      this.emit('op-timeout', e.op);
      continue;
    }
    e.attempts++;
    e.sentAt = Date.now();
    try { this._send(MP_MSG_TYPES.OP, { op: e.op }); } catch (err) {}
  }
};

/* 远端消息总入口。 */
MPMultiplayerManager.prototype._handleMessage = function (env) {
  if (!env || !env.type) return;
  if (env.to && this.me && env.to !== this.me.id && env.to !== this.transport.nodeId) return;
  var payload = env.payload || {};
  switch (env.type) {
    case MP_MSG_TYPES.HELLO: {
      var p = payload.player ? MPPlayer.fromJSON(payload.player) : null;
      if (p && this.room && !this.room.getMember(p.id)) {
        this.room.members[p.id] = p;
        this.presence.track(p);
        this.chat.system(p.name + ' 加入了房间');
        this.emit('player-joined', p);
      }
      /* 房主回握手：附快照。 */
      if (this.room && this.room.hostId === this.me.id && p) {
        this._send(MP_MSG_TYPES.HELLO_ACK, {
          snapshot: this.sync.snapshot(),
          members: this.room.memberList().map(function (m) { return m.toJSON(); }),
          room: this.room.toJSON(),
        }, env.from);
      }
      break;
    }
    case MP_MSG_TYPES.HELLO_ACK: {
      if (payload.snapshot) this.sync.restoreSnapshot(payload.snapshot);
      if (payload.room) {
        var fresh = MPRoom.fromJSON(payload.room);
        this.room = fresh;
        this.roles.setRoom(fresh);
        this.coop.setRoom(fresh, this.sync);
      }
      if (payload.members) {
        for (var i = 0; i < payload.members.length; i++) {
          var mp = MPPlayer.fromJSON(payload.members[i]);
          this.presence.track(mp);
        }
      }
      this.emit('synced', payload.snapshot);
      break;
    }
    case MP_MSG_TYPES.BYE: {
      if (payload.playerId && this.room) {
        var left = this.room.removeMember(payload.playerId);
        if (left) {
          this.chat.system(left.name + ' 离开了房间');
          this.emit('player-left', left);
        }
      }
      break;
    }
    case MP_MSG_TYPES.HEARTBEAT: {
      if (payload.playerId) this.presence.heartbeat(payload.playerId);
      var member = this.room && this.room.getMember(payload.playerId);
      if (member) { member.touch(); }
      break;
    }
    case MP_MSG_TYPES.PING: {
      this._send(MP_MSG_TYPES.PONG, { seq: payload.seq, from: this.me.id }, env.from);
      break;
    }
    case MP_MSG_TYPES.PONG: {
      var rtt = this.presence.resolvePong(payload.seq);
      if (rtt >= 0 && this.me) this.me.latencyMs = rtt;
      break;
    }
    case MP_MSG_TYPES.OP: {
      if (!payload.op) break;
      var res = this.sync.receiveOp(payload.op, this.resolver);
      if (res.ok) {
        this._afterLocalOp(payload.op);
        this._send(MP_MSG_TYPES.OP_ACK, { opId: payload.op.id }, env.from);
      } else {
        this._send(MP_MSG_TYPES.OP_REJECT, { opId: payload.op.id, code: res.code, detail: res.detail }, env.from);
      }
      break;
    }
    case MP_MSG_TYPES.OP_ACK: {
      this.sync.ackReceived(payload.opId);
      break;
    }
    case MP_MSG_TYPES.OP_REJECT: {
      this.emit('op-rejected-remote', payload);
      break;
    }
    case MP_MSG_TYPES.SNAPSHOT_REQ: {
      if (this.room && this.room.hostId === this.me.id) {
        this._send(MP_MSG_TYPES.SNAPSHOT, { snapshot: this.sync.snapshot() }, env.from);
      }
      break;
    }
    case MP_MSG_TYPES.SNAPSHOT: {
      if (payload.snapshot) {
        this.sync.restoreSnapshot(payload.snapshot);
        this.emit('synced', payload.snapshot);
      }
      break;
    }
    case MP_MSG_TYPES.CHAT: {
      if (payload.msg) {
        var m = this.chat.receive(payload.msg);
        if (m) this.emit('chat', m);
      }
      break;
    }
    case MP_MSG_TYPES.CHAT_REACT: {
      this.chat.react(payload.messageId, env.from, payload.emoji);
      break;
    }
    case MP_MSG_TYPES.ROLE_CHANGE: {
      if (payload.playerId && payload.role && this.room) {
        var rp = this.room.getMember(payload.playerId);
        if (rp) { rp.role = payload.role; this.emit('role-changed', rp); }
      }
      if (payload.playerId && payload.division !== undefined && this.room) {
        var dp = this.room.getMember(payload.playerId);
        if (dp) { dp.division = payload.division; this.emit('division-changed', dp); }
      }
      break;
    }
    case MP_MSG_TYPES.KICK: {
      if (payload.playerId === this.me.id) {
        this.chat.system('你已被移出房间');
        this.leaveRoom();
        this.emit('kicked', payload);
      } else if (this.room) {
        var kicked = this.room.removeMember(payload.playerId);
        if (kicked) this.chat.system(kicked.name + ' 被移出房间');
      }
      break;
    }
    case MP_MSG_TYPES.BAN: {
      if (payload.playerId === this.me.id) {
        this.chat.system('你已被封禁');
        this.leaveRoom();
        this.emit('banned', payload);
      }
      break;
    }
    case MP_MSG_TYPES.TRANSFER_HOST: {
      if (payload.playerId && this.room) {
        this.room.hostId = payload.playerId;
        var np = this.room.getMember(payload.playerId);
        if (np) np.role = 'host';
        this.chat.system((np ? np.name : '新房主') + ' 成为房主');
        this.emit('host-transferred', np);
      }
      break;
    }
    case MP_MSG_TYPES.VOTE_START: {
      if (payload.vote) {
        this.roles.votes[payload.vote.id] = payload.vote;
        this.emit('vote-started', payload.vote);
      }
      break;
    }
    case MP_MSG_TYPES.VOTE_CAST: {
      try { this.roles.castVote(payload.voteId, payload.playerId, payload.agree); }
      catch (e) {}
      break;
    }
    case MP_MSG_TYPES.TASK_ASSIGN: {
      var task = this.coop.getTask(payload.taskId);
      if (task) { task.assignedTo = payload.playerId; this.emit('task-assigned', task); }
      break;
    }
    case MP_MSG_TYPES.TASK_DONE: {
      var dt = this.coop.getTask(payload.taskId);
      if (dt && dt.status !== 'done') this.coop.completeTask(payload.taskId, payload.playerId);
      break;
    }
    case MP_MSG_TYPES.GOAL_SET: {
      if (payload.goal) {
        this.coop.goals.push(payload.goal);
        this.emit('goal-set', payload.goal);
      }
      break;
    }
    case MP_MSG_TYPES.SYSTEM: {
      if (payload.text) this.chat.system(payload.text);
      break;
    }
    case MP_MSG_TYPES.ROOM_ANNOUNCE: {
      this.roomManager._loadRegistry();
      this.emit('rooms-changed');
      break;
    }
    default:
      this.emit('unknown-message', env);
  }
};

/* --- 聊天收发 --- */
MPMultiplayerManager.prototype.sendChat = function (text, channel) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  if (!this.room.chatEnabled) throw new MPError(MP_ERRORS.NO_PERMISSION, '本房间已关闭聊天');
  var msg = this.chat.send(this.me, text, channel || 'room');
  if (msg) this._send(MP_MSG_TYPES.CHAT, { msg: msg });
  return msg;
};
MPMultiplayerManager.prototype.sendSystem = function (text) {
  if (!this.room) return false;
  this._send(MP_MSG_TYPES.SYSTEM, { text: text });
  this.chat.system(text);
  return true;
};

/* --- 房间管理操作（带权限） --- */
MPMultiplayerManager.prototype.kickPlayer = function (playerId) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  this.roles.require(this.me.id, 'room.kick');
  if (playerId === this.room.hostId) throw new MPError(MP_ERRORS.NO_PERMISSION, '不能踢房主');
  this._send(MP_MSG_TYPES.KICK, { playerId: playerId });
  var p = this.room.removeMember(playerId);
  if (p) this.chat.system(p.name + ' 被移出房间');
  this.roomManager.updateRoom(this.room);
  return p;
};
MPMultiplayerManager.prototype.banPlayer = function (playerId, reason) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  this.roles.require(this.me.id, 'room.ban');
  this._send(MP_MSG_TYPES.BAN, { playerId: playerId, reason: reason || '' });
  this.room.banMember(playerId, this.me.id, reason);
  this.roomManager.updateRoom(this.room);
  return true;
};
MPMultiplayerManager.prototype.promote = function (playerId, role) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var p = this.roles.setRole(this.me.id, playerId, role);
  this._send(MP_MSG_TYPES.ROLE_CHANGE, { playerId: playerId, role: role });
  this.roomManager.updateRoom(this.room);
  return p;
};
MPMultiplayerManager.prototype.assignDivision = function (playerId, divisionId) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var p = this.roles.assignDivision(this.me.id, playerId, divisionId);
  this._send(MP_MSG_TYPES.ROLE_CHANGE, { playerId: playerId, division: divisionId });
  this.roomManager.updateRoom(this.room);
  return p;
};
MPMultiplayerManager.prototype.transferHost = function (playerId) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var p = this.roles.transferHost(this.me.id, playerId);
  this._send(MP_MSG_TYPES.TRANSFER_HOST, { playerId: playerId });
  this.roomManager.updateRoom(this.room);
  return p;
};
MPMultiplayerManager.prototype.startKickVote = function (targetId) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var vote = this.roles.startVote(this.me.id, 'kick', targetId);
  this._send(MP_MSG_TYPES.VOTE_START, { vote: vote });
  return vote;
};
MPMultiplayerManager.prototype.castVote = function (voteId, agree) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var result = this.roles.castVote(voteId, this.me.id, agree);
  this._send(MP_MSG_TYPES.VOTE_CAST, { voteId: voteId, playerId: this.me.id, agree: agree });
  if (result.passed && result.vote.kind === 'kick') {
    this.kickPlayer(result.vote.targetId);
  }
  return result;
};
MPMultiplayerManager.prototype.listRooms = function (filter) {
  return this.roomManager.listRooms(filter);
};
MPMultiplayerManager.prototype.ping = function () {
  var seq = this.presence.nextPing();
  this._send(MP_MSG_TYPES.PING, { seq: seq });
  return seq;
};

/* --- 与 game.js 的双向桥接 --- */
/* 把当前游戏状态读入同步状态（房主建房 / 加入后同步时调用）。 */
MPMultiplayerManager.prototype.pushGameState = function () {
  var g = this.game;
  if (!g) return null;
  var st = this.sync.state;
  if (g.player && g.player.inv) {
    for (var k in st.resources) {
      if (typeof g.player.inv[k] === 'number') st.resources[k] = g.player.inv[k];
    }
  }
  if (g.pop) {
    st.pop = g.pop.count || 0;
    if (typeof g.pop.cap === 'number') st.popCap = g.pop.cap;
    else if (g.builder && typeof g.builder.popCap === 'function') {
      try { st.popCap = g.builder.popCap(); } catch (e) {}
    }
  }
  if (g.builder && Array.isArray(g.builder.buildings)) {
    st.buildings = g.builder.buildings.map(function (b, i) {
      return {
        id: b.id || ('b-' + i), buildingId: b.id || b.buildingId || b.type || 'unknown',
        x: b.x, y: b.y, level: b.level || 1, owner: b.owner || null, placedAt: b.placedAt || 0,
      };
    });
  }
  if (g.tech && typeof g.tech.unlocked === 'object') {
    st.tech = Object.keys(g.tech.unlocked).filter(function (k) { return g.tech.unlocked[k]; });
  }
  if (g.map) st.mapSize = g.map.size;
  this.sync.clock++;
  return st;
};
/* 把同步状态写回游戏（收到远端操作/快照后调用；只写已知的字段）。 */
MPMultiplayerManager.prototype.pullToGame = function () {
  var g = this.game;
  if (!g) return false;
  var st = this.sync.state;
  if (g.player && g.player.inv) {
    for (var k in st.resources) g.player.inv[k] = st.resources[k];
  }
  if (g.pop && typeof st.pop === 'number') g.pop.count = st.pop;
  if (g.builder && Array.isArray(g.builder.buildings)) {
    var map = {};
    g.builder.buildings.forEach(function (b) { map[b.x + ',' + b.y] = b; });
    st.buildings.forEach(function (sb) {
      var key = sb.x + ',' + sb.y;
      if (!map[key]) {
        /* 远端新建的建筑：只在本地能放下时才补建（走正常放置校验）。 */
        try {
          if (g.builder.canPlace) {
            var chk = g.builder.canPlace(sb.buildingId, sb.x, sb.y, g.player.inv, g.pop.count);
            if (chk && chk.ok && g.builder.place) g.builder.place(sb.buildingId, sb.x, sb.y, g.player.inv);
          }
        } catch (e) {}
      }
    });
  }
  return true;
};
/* 拦截本地建造：先走同步（校验+广播），成功后再执行本地放置。
 * 返回 true 表示已接管（调用方不应再重复放置）。 */
MPMultiplayerManager.prototype.placeBuilding = function (buildingId, x, y, cost) {
  if (!this.room) return false;
  var cat = 'special';
  try {
    if (typeof buildCatOf === 'function') cat = buildCatOf(buildingId);
    else if (typeof BUILDINGS !== 'undefined' && BUILDINGS[buildingId] && BUILDINGS[buildingId].cat) cat = BUILDINGS[buildingId].cat;
  } catch (e) {}
  if (!this.roles.canBuildCategory(this.me.id, cat)) {
    throw new MPError(MP_ERRORS.NO_PERMISSION, '该建筑不在你的分工范围内');
  }
  this.doOp(MP_OP_TYPES.PLACE, { buildingId: buildingId, x: x, y: y, level: 1, cost: cost || null });
  return true;
};
/* 诊断信息：供 UI 联机面板展示。 */
MPMultiplayerManager.prototype.diagnostics = function () {
  return {
    connected: this.connected,
    room: this.room ? this.room.toListItem() : null,
    me: this.me ? this.me.toJSON() : null,
    transportMode: this.transport.mode,
    sent: this.transport.sentCount,
    received: this.transport.recvCount,
    clock: this.sync.clock,
    opLogLength: this.sync.opLog.length,
    pendingAcks: Object.keys(this.sync.pendingAcks).length,
    onlineCount: this.room ? this.room.onlineList().length : 0,
    conflicts: this.resolver.stats,
    chatMessages: this.chat.messages.length,
  };
};
MPMultiplayerManager.prototype.destroy = function () {
  try { this.leaveRoom(); } catch (e) {}
  this._leaveTransport();
  this.connected = false;
  return this;
};

/* ================================================================
 * 导出（浏览器全局 + Node）
 * ================================================================ */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MP_PROTOCOL_VERSION: MP_PROTOCOL_VERSION,
    MP_MSG_TYPES: MP_MSG_TYPES,
    MP_ERRORS: MP_ERRORS,
    MP_ERROR_MESSAGES: MP_ERROR_MESSAGES,
    MP_RESOURCE_KEYS: MP_RESOURCE_KEYS,
    MP_RESOURCE_CAPS: MP_RESOURCE_CAPS,
    MP_OP_TYPES: MP_OP_TYPES,
    MP_DIVISIONS: MP_DIVISIONS,
    MP_ROLES: MP_ROLES,
    MP_PERMISSIONS: MP_PERMISSIONS,
    MP_EMOJIS: MP_EMOJIS,
    MP_CHAT_COMMANDS: MP_CHAT_COMMANDS,
    MPError: MPError,
    MPUtils: MPUtils,
    MPEventEmitter: MPEventEmitter,
    MPLocalTransport: MPLocalTransport,
    MPPlayer: MPPlayer,
    MPRoom: MPRoom,
    MPRoomManager: MPRoomManager,
    MPPresenceManager: MPPresenceManager,
    MPRoleManager: MPRoleManager,
    MPSyncEngine: MPSyncEngine,
    MPConflictResolver: MPConflictResolver,
    MPChatManager: MPChatManager,
    MPCoOpManager: MPCoOpManager,
    MPMultiplayerManager: MPMultiplayerManager,
  };
}

/* ================================================================
 * 13. 扩展：状态校验和（防分叉）/ 反破坏 / 邀请码 / 光标共享
 * 这些方法挂在已有类的原型上，保持文件结构清晰。
 * ================================================================ */

/* --- 状态校验和：各端定期比对，发现分叉后向房主请求快照重同步 --- */
MPSyncEngine.prototype.stateHash = function () {
  var st = this.state;
  var parts = [];
  var resKeys = Object.keys(st.resources).sort();
  for (var i = 0; i < resKeys.length; i++) parts.push(resKeys[i] + '=' + st.resources[resKeys[i]]);
  parts.push('pop=' + st.pop + '/' + st.popCap);
  var bkeys = st.buildings.map(function (b) {
    return b.buildingId + '@' + b.x + ',' + b.y + 'L' + b.level;
  }).sort();
  parts.push('b[' + bkeys.join(';') + ']');
  parts.push('tech[' + st.tech.slice().sort().join(',') + ']');
  parts.push('pol[' + st.policies.slice().sort().join(',') + ']');
  parts.push('sec[' + st.sectors.slice().sort().join(',') + ']');
  var s = parts.join('|');
  var h1 = 0x811c9dc5;
  for (var j = 0; j < s.length; j++) {
    h1 ^= s.charCodeAt(j);
    h1 = Math.imul(h1, 0x01000193) >>> 0;
  }
  return h1.toString(16);
};
/* 对比远端哈希：相同返回 {inSync:true}，否则返回差异摘要。 */
MPSyncEngine.prototype.compareHash = function (remoteHash, remoteClock) {
  var mine = this.stateHash();
  if (mine === remoteHash) return { inSync: true, hash: mine };
  return {
    inSync: false, hash: mine, remoteHash: remoteHash,
    clockDiff: (remoteClock || 0) - this.clock,
    opCount: this.opLog.length,
    hint: '状态分叉：请向房主请求快照重同步',
  };
};
/* 批量应用一组操作：按 Lamport 排序后逐个应用，返回逐项结果。 */
MPSyncEngine.prototype.applyBatch = function (ops, resolver) {
  if (!Array.isArray(ops)) return [];
  var sorted = ops.slice().sort(function (a, b) {
    if (a.lamport !== b.lamport) return a.lamport - b.lamport;
    return String(a.playerId).localeCompare(String(b.playerId));
  });
  var results = [];
  for (var i = 0; i < sorted.length; i++) {
    var r = this.receiveOp(sorted[i], resolver);
    results.push({ opId: sorted[i].id, ok: r.ok, code: r.code, detail: r.detail || null });
  }
  return results;
};
/* 导出/导入：整局存档（房间 + 同步状态 + 聊天 + 任务），供断线重连恢复。 */
MPSyncEngine.prototype.exportSave = function () {
  return {
    version: MP_PROTOCOL_VERSION,
    at: Date.now(),
    clock: this.clock,
    state: MPUtils.deepClone(this.state),
    opLogTail: this.opLog.slice(-100),
    claims: MPUtils.deepClone(this.claims),
  };
};
MPSyncEngine.prototype.importSave = function (save) {
  if (!save || save.version !== MP_PROTOCOL_VERSION || !save.state) {
    throw new MPError(MP_ERRORS.OP_INVALID, '存档版本不匹配或已损坏');
  }
  this.state = MPUtils.deepClone(save.state);
  this.clock = Math.max(this.clock, save.clock || 0);
  this.opLog = (save.opLogTail || []).slice();
  this.claims = MPUtils.deepClone(save.claims || {});
  this.emit('save-imported', save);
  return this;
};

/* --- 房间：邀请码加入 + 设置更新 --- */
MPRoomManager.prototype.joinByInvite = function (roomId, inviteCode, player, password) {
  var room = this.getRoom(roomId);
  if (!room) throw new MPError(MP_ERRORS.ROOM_NOT_FOUND);
  if (!room.useInvite(inviteCode)) throw new MPError(MP_ERRORS.ROOM_NOT_FOUND, '邀请码无效');
  room.addMember(player, password);
  this.rooms[room.id] = room;
  this._saveRegistry();
  this.emit('room-joined', room, player);
  return room;
};
MPRoomManager.prototype.updateSettings = function (roomId, byPlayerId, settings) {
  var room = this.getRoom(roomId);
  if (!room) throw new MPError(MP_ERRORS.ROOM_NOT_FOUND);
  if (room.hostId !== byPlayerId) throw new MPError(MP_ERRORS.NOT_HOST);
  if (typeof settings.allowJoin === 'boolean') room.allowJoin = settings.allowJoin;
  if (typeof settings.chatEnabled === 'boolean') room.chatEnabled = settings.chatEnabled;
  if (typeof settings.maxPlayers === 'number') {
    room.maxPlayers = MPUtils.clamp(settings.maxPlayers, room.memberCount(), MP_MAX_PLAYERS_LIMIT);
  }
  if (typeof settings.description === 'string') room.description = settings.description.slice(0, 120);
  if (settings.state === 'playing' || settings.state === 'paused' || settings.state === 'lobby') {
    room.state = settings.state;
  }
  room.updatedAt = Date.now();
  this.rooms[room.id] = room;
  this._saveRegistry();
  this.emit('room-updated', room);
  return room;
};

/* --- 门面层扩展 --- */
/* 邀请码加入（UI 层用）。 */
MPMultiplayerManager.prototype.joinByInvite = function (roomId, inviteCode, password) {
  this.ensureIdentity();
  if (this.room) throw new MPError(MP_ERRORS.ALREADY_IN_ROOM);
  var player = new MPPlayer({
    id: this.me.id, name: this.me.name, color: this.me.color,
    nodeId: this.transport.nodeId,
  });
  var room = this.roomManager.joinByInvite(roomId, inviteCode, player, password);
  this.me = player;
  this._enterRoom(room);
  this._send(MP_MSG_TYPES.SNAPSHOT_REQ, { clock: this.sync.clock });
  return room;
};
/* 生成邀请码（房主/管理员）。 */
MPMultiplayerManager.prototype.createInvite = function () {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var code = this.room.createInvite(this.me.id);
  this.roomManager.updateRoom(this.room);
  this._send(MP_MSG_TYPES.SYSTEM, { text: this.me.name + ' 生成了一个邀请码' });
  return code;
};
/* 更新房间设置（房主）。 */
MPMultiplayerManager.prototype.updateRoomSettings = function (settings) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var room = this.roomManager.updateSettings(this.room.id, this.me.id, settings);
  this.room = room;
  this.roles.setRoom(room);
  this.coop.setRoom(room, this.sync);
  this._send(MP_MSG_TYPES.SYSTEM, { text: '房主更新了房间设置' });
  return room;
};
/* 改密码（房主）。 */
MPMultiplayerManager.prototype.changePassword = function (newPassword) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  if (this.room.hostId !== this.me.id) throw new MPError(MP_ERRORS.NOT_HOST);
  this.room.setPassword(newPassword || '');
  this.roomManager.updateRoom(this.room);
  return this.room;
};
/* 拆除：反破坏——只能拆自己的建筑，房主/管理员可拆任意建筑。 */
MPMultiplayerManager.prototype.demolishBuilding = function (x, y) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var b = this.sync.buildingAt(x, y);
  if (!b) throw new MPError(MP_ERRORS.OP_INVALID, '该格没有建筑');
  var isOwner = b.owner === this.me.id;
  var privileged = this.me.role === 'host' || this.me.role === 'admin';
  if (!isOwner && !privileged) {
    throw new MPError(MP_ERRORS.NO_PERMISSION, '只能拆除自己建造的建筑（房主/管理员除外）');
  }
  return this.doOp(MP_OP_TYPES.DEMOLISH, { x: x, y: y });
};
/* 升级建筑（同上：自己的或有权限）。 */
MPMultiplayerManager.prototype.upgradeBuilding = function (x, y, cost) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var b = this.sync.buildingAt(x, y);
  if (!b) throw new MPError(MP_ERRORS.OP_INVALID, '该格没有建筑');
  var isOwner = b.owner === this.me.id;
  var privileged = this.me.role === 'host' || this.me.role === 'admin';
  if (!isOwner && !privileged) {
    throw new MPError(MP_ERRORS.NO_PERMISSION, '只能升级自己建造的建筑');
  }
  return this.doOp(MP_OP_TYPES.UPGRADE, { x: x, y: y, toLevel: b.level + 1, cost: cost || null });
};
/* 认领格子：放置前先认领 30 秒，防抢建（UI 放置流程用）。 */
MPMultiplayerManager.prototype.claimCell = function (x, y) {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  var holder = this.sync.claimedBy(x, y);
  if (holder && holder !== this.me.id) throw new MPError(MP_ERRORS.OP_CELL_OCCUPIED, '该格已被认领');
  if (this.sync.buildingAt(x, y)) throw new MPError(MP_ERRORS.OP_CELL_OCCUPIED, '该格已有建筑');
  var op = this.sync.createOp(MP_OP_TYPES.CLAIM_CELL, { x: x, y: y }, this.me.id);
  this.sync.applyOp(op);
  this._send(MP_MSG_TYPES.OP, { op: op });
  return op;
};
MPMultiplayerManager.prototype.releaseCell = function (x, y) {
  if (!this.room) return false;
  var op = this.sync.createOp(MP_OP_TYPES.RELEASE_CELL, { x: x, y: y }, this.me.id);
  this.sync.applyOp(op);
  this._send(MP_MSG_TYPES.OP, { op: op });
  return true;
};
/* 光标共享：广播自己的地图光标（轻量操作，不进日志）。 */
MPMultiplayerManager.prototype.shareCursor = function (x, y) {
  if (!this.room || !this.connected) return false;
  var op = {
    id: MPUtils.uid('op'), type: MP_OP_TYPES.CURSOR,
    payload: { x: x, y: y }, playerId: this.me.id,
    lamport: ++this.sync.clock, ts: Date.now(),
  };
  try { this._send(MP_MSG_TYPES.OP, { op: op }); } catch (e) { return false; }
  return true;
};
/* 房主定期广播状态哈希；成员比对，分叉则请求快照。 */
MPMultiplayerManager.prototype.broadcastStateHash = function () {
  if (!this.room || this.room.hostId !== this.me.id) return false;
  this._send(MP_MSG_TYPES.SYSTEM, { text: '__hash__' + this.sync.stateHash() + '__clock__' + this.sync.clock });
  return true;
};
MPMultiplayerManager.prototype.requestResync = function () {
  if (!this.room) throw new MPError(MP_ERRORS.NOT_IN_ROOM);
  this._send(MP_MSG_TYPES.SNAPSHOT_REQ, { clock: this.sync.clock });
  return true;
};
/* 断线重连：用本地导出存档恢复同步状态，再重新握手。 */
MPMultiplayerManager.prototype.saveSession = function () {
  if (!this.room) return null;
  return {
    roomId: this.room.id,
    me: this.me.toJSON(),
    sync: this.sync.exportSave(),
    chat: this.chat.messages.slice(-50),
    at: Date.now(),
  };
};
MPMultiplayerManager.prototype.restoreSession = function (session) {
  if (!session || !session.roomId) throw new MPError(MP_ERRORS.UNKNOWN, '会话存档无效');
  this.sync.importSave(session.sync);
  this.chat.messages = session.chat || [];
  return this.sync.state;
};

/* --- 聊天扩展：搜索 / 频道列表 / 导出 --- */
MPChatManager.prototype.search = function (keyword, channel) {
  if (!keyword) return [];
  var kw = String(keyword).toLowerCase();
  return this.messages.filter(function (m) {
    if (channel && m.channel !== channel && !m.system) return false;
    return (m.text || '').toLowerCase().indexOf(kw) >= 0 ||
      (m.fromName || '').toLowerCase().indexOf(kw) >= 0;
  });
};
MPChatManager.prototype.channelStats = function () {
  var stats = { room: 0, division: 0, whisper: 0, system: 0 };
  for (var i = 0; i < this.messages.length; i++) {
    var m = this.messages[i];
    if (m.system) stats.system++;
    else if (stats[m.channel] != null) stats[m.channel]++;
  }
  return stats;
};
MPChatManager.prototype.exportLog = function () {
  return this.messages.map(function (m) {
    return '[' + MPUtils.formatTime(m.ts) + '] ' +
      (m.system ? '[系统] ' : '[' + (m.fromName || '?') + '] ') + (m.text || '');
  }).join('\n');
};
/* 表情面板数据：供 UI 渲染表情选择器（按组分）。 */
MPChatManager.prototype.emojiGroups = function () {
  return [
    { name: '表情', codes: ['smile', 'laugh', 'heart', 'thumbsup', 'thumbsdown', 'clap', 'think', 'party', 'sad', 'angry', 'cool', 'eyes'] },
    { name: '火星', codes: ['rocket', 'mars', 'fire', 'star', 'check', 'warning', 'hammer', 'bolt', 'drop', 'wheat', 'iron', 'house', 'shield'] },
    { name: '科幻', codes: ['robot', 'alien', 'earth', 'moon', 'gift'] },
  ];
};
