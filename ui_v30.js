/* 星港 — ui_v30.js：v3.0 UI 配套（政治 / 深空 / 生态 / 军事 / 联机）
 * ------------------------------------------------------------------
 * 硬规则：
 *   - 只新增本文件，不改 index.html / game.js / 任何已有文件。
 *   - 保持 v2.1 的 5 按钮工具栏：本文件绝不创建 #toolbar 按钮；
 *     5 个新面板全部经「更多」菜单进入（运行时包装
 *     UIRefactor.prototype.showMoreMenu，在原有菜单渲染后追加入口）。
 *   - 全部面板读游戏状态时做防御性访问（typeof / try-catch），
 *     任一旧系统缺失也不崩；Node 环境下可直接实例化做自测。
 *
 * 面板：
 *   V30PoliticsPanel    议会 / 满意度 / 政策投票（读 policy.js POLICY_DEFS）
 *   V30DeepSpacePanel   轨道 / 月球 / 小行星带（读 deep_space.js / orbital.js）
 *   V30EcoPanel         改造进度 / 氧气 / 物种（读 bio.js BioManager）
 *   V30MilitaryPanel    军队编制 / 军官 / 防御（读 military.js）
 *   V30MultiplayerPanel 房间 / 聊天 / 玩家列表（接 multiplayer.js）
 * 框架：
 *   V30PanelManager     容器、显隐、Tab、定时刷新、样式注入
 *   V30UIManager        门面：install() 挂接更多菜单 + 快捷键 + 实例化
 * ------------------------------------------------------------------
 */

'use strict';

/* ================================================================
 * 0. 小工具（与 multiplayer.js 的 MPUtils 解耦，独立可用）
 * ================================================================ */

var V30Utils = {
  esc: function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },
  clamp: function (v, lo, hi) {
    if (typeof v !== 'number' || isNaN(v)) return lo;
    return v < lo ? lo : (v > hi ? hi : v);
  },
  fmt: function (n) {
    if (typeof n !== 'number' || isNaN(n)) return '0';
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 10000) return (n / 1000).toFixed(1) + 'k';
    return String(Math.floor(n));
  },
  pct: function (v) { return Math.round(V30Utils.clamp(v, 0, 1) * 100) + '%'; },
  bar: function (ratio, color) {
    var p = V30Utils.clamp(ratio, 0, 1) * 100;
    return '<div class="v30-bar"><div class="v30-bar-fill" style="width:' + p.toFixed(0) +
      '%;background:' + (color || '#34d399') + '"></div></div>';
  },
  /* 确定性伪随机：同一输入永远同一输出（军官生成、议员生成用）。 */
  seeded: function (seed) {
    var s = 0;
    var str = String(seed);
    for (var i = 0; i < str.length; i++) s = (Math.imul(s, 31) + str.charCodeAt(i)) >>> 0;
    return function () {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      return s / 4294967296;
    };
  },
  pick: function (rnd, arr) { return arr[Math.floor(rnd() * arr.length)]; },
  hasDom: function () { return typeof document !== 'undefined' && !!document; },
  el: function (id) {
    if (!V30Utils.hasDom()) return null;
    return document.getElementById(id);
  },
};

/* ================================================================
 * 1. 面板框架
 * ================================================================ */

var V30_PANEL_DEFS = [
  { id: 'politics', name: '政治', icon: '🏛️', cls: 'V30PoliticsPanel' },
  { id: 'deepspace', name: '深空', icon: '🌠', cls: 'V30DeepSpacePanel' },
  { id: 'eco', name: '生态', icon: '🌱', cls: 'V30EcoPanel' },
  { id: 'military', name: '军事', icon: '🛡️', cls: 'V30MilitaryPanel' },
  { id: 'multiplayer', name: '联机', icon: '🌐', cls: 'V30MultiplayerPanel' },
];

var V30_CSS = [
  '#v30-panel{position:absolute;left:8px;right:8px;top:8px;bottom:8px;z-index:60;',
  ' background:rgba(10,14,28,.97);border:1px solid #334155;border-radius:12px;',
  ' color:#e2e8f0;display:flex;flex-direction:column;overflow:hidden;',
  ' font-size:13px;box-shadow:0 8px 32px rgba(0,0,0,.6)}',
  '#v30-panel.hidden{display:none}',
  '.v30-head{display:flex;align-items:center;gap:8px;padding:10px 12px;',
  ' border-bottom:1px solid #1e293b;flex:none}',
  '.v30-head b{font-size:15px;flex:1}',
  '.v30-head button{background:#1e293b;color:#e2e8f0;border:1px solid #334155;',
  ' border-radius:8px;padding:4px 10px;cursor:pointer}',
  '.v30-tabs{display:flex;gap:6px;padding:8px 12px 0;flex:none;flex-wrap:wrap}',
  '.v30-tab{background:#0f172a;color:#94a3b8;border:1px solid #1e293b;border-radius:8px;',
  ' padding:5px 10px;cursor:pointer}',
  '.v30-tab.active{background:#f59e0b;color:#111;border-color:#f59e0b;font-weight:bold}',
  '.v30-body{flex:1;overflow-y:auto;padding:12px}',
  '.v30-sec{margin-bottom:14px}',
  '.v30-sec h3{margin:0 0 6px;font-size:13px;color:#facc15}',
  '.v30-row{display:flex;justify-content:space-between;gap:8px;padding:5px 0;',
  ' border-bottom:1px dashed #1e293b}',
  '.v30-row:last-child{border-bottom:none}',
  '.v30-bar{height:8px;background:#1e293b;border-radius:4px;overflow:hidden;margin:3px 0 8px}',
  '.v30-bar-fill{height:100%;border-radius:4px}',
  '.v30-card{background:#0f172a;border:1px solid #1e293b;border-radius:10px;padding:10px;margin-bottom:8px}',
  '.v30-btn{background:#f59e0b;color:#111;border:none;border-radius:8px;padding:6px 12px;',
  ' cursor:pointer;font-weight:bold;margin:2px}',
  '.v30-btn.ghost{background:#1e293b;color:#e2e8f0;border:1px solid #334155}',
  '.v30-btn.danger{background:#dc2626;color:#fff}',
  '.v30-btn:disabled{opacity:.4;cursor:not-allowed}',
  '.v30-input{background:#0f172a;color:#e2e8f0;border:1px solid #334155;border-radius:8px;',
  ' padding:6px 8px;margin:2px}',
  '.v30-chat{height:180px;overflow-y:auto;background:#020617;border:1px solid #1e293b;',
  ' border-radius:8px;padding:8px;margin-bottom:6px}',
  '.v30-chatmsg{margin-bottom:4px;line-height:1.5;word-break:break-word}',
  '.v30-chatmsg.sys{color:#94a3b8;font-style:italic}',
  '.v30-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}',
  '.v30-tag{display:inline-block;background:#1e293b;border-radius:6px;padding:1px 7px;',
  ' font-size:11px;margin:1px}',
  '.v30-muted{color:#94a3b8;font-size:12px}',
  '.v30-kv{display:flex;justify-content:space-between;padding:3px 0}',
].join('\n');

/* 基类：每个面板一个子类，负责 renderBody() 与事件绑定。 */
function V30BasePanel(game, manager) {
  this.game = game || null;
  this.manager = manager || null;
  this.id = 'base';
  this.title = '面板';
  this.icon = '📋';
  this.tabs = [];          // [{id, name}]
  this.activeTab = null;
  this._refreshTimer = null;
}
V30BasePanel.prototype.safeGame = function () { return this.game || {}; };
V30BasePanel.prototype.inv = function () {
  var g = this.safeGame();
  try { return (g.player && g.player.inv) || {}; } catch (e) { return {}; }
};
V30BasePanel.prototype.popCount = function () {
  var g = this.safeGame();
  try { return (g.pop && g.pop.count) || 0; } catch (e) { return 0; }
};
V30BasePanel.prototype.buildingCount = function (buildingId) {
  var g = this.safeGame();
  try {
    if (g.builder && typeof g.builder.count === 'function') return g.builder.count(buildingId);
    if (g.builder && Array.isArray(g.builder.buildings)) {
      var n = 0;
      for (var i = 0; i < g.builder.buildings.length; i++) {
        if (g.builder.buildings[i].id === buildingId || g.builder.buildings[i].buildingId === buildingId) n++;
      }
      return n;
    }
  } catch (e) {}
  return 0;
};
V30BasePanel.prototype.totalBuildings = function () {
  var g = this.safeGame();
  try {
    if (g.builder && Array.isArray(g.builder.buildings)) return g.builder.buildings.length;
  } catch (e) {}
  return 0;
};
V30BasePanel.prototype.hasTech = function (techId) {
  var g = this.safeGame();
  try {
    if (g.tech && typeof g.tech.has === 'function') return g.tech.has(techId);
    if (g.tech && g.tech.unlocked) return !!g.tech.unlocked[techId];
    if (g.tech && typeof g.tech.isUnlocked === 'function') return g.tech.isUnlocked(techId);
  } catch (e) {}
  return false;
};
V30BasePanel.prototype.toast = function (msg) {
  var g = this.safeGame();
  try { if (g.toast) g.toast(msg); } catch (e) {}
  if (this.manager) this.manager.toast(msg);
};
V30BasePanel.prototype.render = function () { return '<div class="v30-muted">（空面板）</div>'; };
V30BasePanel.prototype.onShow = function () {};
V30BasePanel.prototype.onHide = function () {};
V30BasePanel.prototype.bindEvents = function (root) {};
V30BasePanel.prototype.refresh = function () {
  if (this.manager) this.manager.renderBody();
};

/* 面板管理器：容器创建、显隐、Tab 切换、刷新。 */
function V30PanelManager(game) {
  this.game = game || null;
  this.panels = {};       // id -> panel 实例
  this.current = null;    // 当前打开的面板 id
  this._styleInjected = false;
  this._toastTimer = null;
}
V30PanelManager.prototype.register = function (panel) {
  if (!panel || !panel.id) return false;
  this.panels[panel.id] = panel;
  panel.manager = this;
  return true;
};
V30PanelManager.prototype.get = function (id) { return this.panels[id] || null; };
V30PanelManager.prototype.panelIds = function () { return Object.keys(this.panels); };
V30PanelManager.prototype._injectStyle = function () {
  if (this._styleInjected || !V30Utils.hasDom()) return;
  if (document.getElementById('v30-style')) { this._styleInjected = true; return; }
  var style = document.createElement('style');
  style.id = 'v30-style';
  style.textContent = V30_CSS;
  document.head.appendChild(style);
  this._styleInjected = true;
};
V30PanelManager.prototype._ensureContainer = function () {
  if (!V30Utils.hasDom()) return null;
  this._injectStyle();
  var c = document.getElementById('v30-panel');
  if (c) return c;
  c = document.createElement('div');
  c.id = 'v30-panel';
  c.className = 'hidden';
  var host = document.getElementById('map-wrap') || document.getElementById('app') || document.body;
  host.appendChild(c);
  return c;
};
V30PanelManager.prototype.open = function (id, tab) {
  var panel = this.panels[id];
  if (!panel) return false;
  if (!V30Utils.hasDom()) {
    /* 无 DOM（自测环境）：只切换逻辑状态，不碰页面。 */
    this.current = id;
    if (tab) panel.activeTab = tab;
    panel.onShow();
    return true;
  }
  var c = this._ensureContainer();
  if (this.current && this.current !== id) {
    var prev = this.panels[this.current];
    if (prev) prev.onHide();
  }
  this.current = id;
  if (tab) panel.activeTab = tab;
  else if (!panel.activeTab && panel.tabs.length) panel.activeTab = panel.tabs[0].id;
  c.classList.remove('hidden');
  this._renderHead(panel);
  this.renderBody();
  panel.onShow();
  this.hideOtherPanels();
  return true;
};
V30PanelManager.prototype.hideOtherPanels = function () {
  if (!V30Utils.hasDom()) return;
  /* v2.1 各面板互斥：打开 v30 面板时收起建造/科技/更多等浮层。 */
  var ids = ['build-menu', 'more-menu', 'overlay-menu', 'tech-panel', 'trade-panel',
    'achieve-panel', 'stats-panel', 'help-panel', 'truck-panel', 'building-panel'];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) el.classList.add('hidden');
  }
};
V30PanelManager.prototype.close = function () {
  if (this.current) {
    var p = this.panels[this.current];
    if (p) p.onHide();
  }
  this.current = null;
  if (!V30Utils.hasDom()) return true;
  var c = document.getElementById('v30-panel');
  if (c) c.classList.add('hidden');
  return true;
};
V30PanelManager.prototype.toggle = function (id, tab) {
  if (this.current === id) { this.close(); return false; }
  this.open(id, tab);
  return true;
};
V30PanelManager.prototype._renderHead = function (panel) {
  var c = document.getElementById('v30-panel');
  if (!c) return;
  var tabsHtml = '';
  if (panel.tabs.length > 1) {
    tabsHtml = '<div class="v30-tabs">' + panel.tabs.map(function (t) {
      return '<button class="v30-tab' + (t.id === panel.activeTab ? ' active' : '') +
        '" data-v30tab="' + V30Utils.esc(t.id) + '">' + V30Utils.esc(t.name) + '</button>';
    }).join('') + '</div>';
  }
  c.innerHTML =
    '<div class="v30-head"><span style="font-size:18px">' + panel.icon + '</span>' +
    '<b>' + V30Utils.esc(panel.title) + '</b>' +
    '<button data-v30-close="1">✖ 关闭</button></div>' +
    tabsHtml + '<div class="v30-body" id="v30-body"></div>';
  var self = this;
  var closeBtn = c.querySelector('[data-v30-close]');
  if (closeBtn) closeBtn.addEventListener('click', function () { self.close(); });
  var tabBtns = c.querySelectorAll('[data-v30tab]');
  for (var i = 0; i < tabBtns.length; i++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        panel.activeTab = btn.getAttribute('data-v30tab');
        self._renderHead(panel);
        self.renderBody();
      });
    })(tabBtns[i]);
  }
};
V30PanelManager.prototype.renderBody = function () {
  if (!this.current) return;
  var panel = this.panels[this.current];
  if (!panel) return;
  if (!V30Utils.hasDom()) return;
  var body = document.getElementById('v30-body');
  if (!body) return;
  try {
    body.innerHTML = panel.render();
  } catch (e) {
    body.innerHTML = '<div class="v30-card">面板渲染失败：' + V30Utils.esc(e.message) + '</div>';
  }
  try { panel.bindEvents(body); } catch (e) {}
};
V30PanelManager.prototype.toast = function (msg) {
  if (!V30Utils.hasDom()) return;
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('hidden');
  var self = this;
  if (this._toastTimer) clearTimeout(this._toastTimer);
  this._toastTimer = setTimeout(function () { t.classList.add('hidden'); }, 2200);
};

/* ================================================================
 * 2. 政治面板：议会 / 满意度 / 政策投票
 * 议会席位与派系力量从真实游戏状态推导（人口、建筑构成），
 * 不是写死数字；投票按派系立场 + 席位加权模拟，联机时计入真人票。
 * ================================================================ */

var V30_FACTIONS = [
  { id: 'industry', name: '工业党', icon: '🏭', color: '#f59e0b', likes: ['tax', 'military'], dislikes: ['welfare'] },
  { id: 'eco', name: '生态党', icon: '🌱', color: '#34d399', likes: ['welfare', 'science'], dislikes: ['military'] },
  { id: 'military', name: '军方', icon: '🛡️', color: '#ef4444', likes: ['military'], dislikes: ['science'] },
  { id: 'science', name: '科研党', icon: '🔬', color: '#60a5fa', likes: ['science'], dislikes: ['tax'] },
  { id: 'welfare', name: '民生党', icon: '🏥', color: '#f472b6', likes: ['welfare'], dislikes: ['military'] },
];
var V30_POLICY_CAT_NAMES = { tax: '税收', military: '军事', science: '科研', welfare: '民生' };

function V30PoliticsPanel(game, manager) {
  V30BasePanel.call(this, game, manager);
  this.id = 'politics';
  this.title = '政治';
  this.icon = '🏛️';
  this.tabs = [
    { id: 'parliament', name: '🏛️ 议会' },
    { id: 'satisfaction', name: '😊 满意度' },
    { id: 'vote', name: '🗳️ 政策投票' },
  ];
  this.activeTab = 'parliament';
  this.enactedLocal = {};   // 本地面板记录的已颁布政策（game.policy 不可用时兜底）
  this.voteLog = [];        // 投票记录（上限 20）
  this.electionEpoch = Date.UTC(2026, 0, 1); // 选举周期锚点
  this.electionCycleMs = 7 * 24 * 3600 * 1000;
}
V30PoliticsPanel.prototype = Object.create(V30BasePanel.prototype);
V30PoliticsPanel.prototype.constructor = V30PoliticsPanel;

/* 议会总席位：人口越多席位越多，5~51 席。 */
V30PoliticsPanel.prototype.totalSeats = function () {
  var pop = this.popCount();
  return V30Utils.clamp(5 + Math.floor(pop / 20), 5, 51);
};
/* 派系席位：按建筑构成分配——生产类建筑多则工业党强，医院公园多则民生党强，依此类推。 */
V30PoliticsPanel.prototype.factionSeats = function () {
  var total = this.totalSeats();
  var weights = { industry: 1, eco: 1, military: 1, science: 1, welfare: 1 };
  var g = this.safeGame();
  var prod = 0, civic = 0, mil = 0, sci = 0, green = 0;
  try {
    var list = (g.builder && g.builder.buildings) || [];
    for (var i = 0; i < list.length; i++) {
      var bid = list[i].id || list[i].buildingId || '';
      if (typeof buildCatOf === 'function') {
        var cat = buildCatOf(bid);
        if (cat === 'prod') prod++;
        else if (cat === 'civic') civic++;
        else if (cat === 'special') mil++;
        else if (cat === 'power') prod++;
      } else {
        if (/miner|smelter|factory/.test(bid)) prod++;
        else if (/hospital|school|park|clinic/.test(bid)) civic++;
        else if (/turret|radar|shield|silo/.test(bid)) mil++;
        else if (/lab|observatory/.test(bid)) sci++;
        else if (/greenhouse|dome|eco/.test(bid)) green++;
      }
    }
  } catch (e) {}
  weights.industry += prod * 0.6;
  weights.welfare += civic * 0.6 + green * 0.4;
  weights.military += mil * 0.8;
  weights.science += sci * 0.8;
  weights.eco += green * 0.8 + (this.buildingCount('greenhouse') * 0.3);
  /* 满意度低时民生党与生态党得势，满意度高时工业党得势。 */
  var sat = this.satisfaction().overall;
  if (sat < 50) { weights.welfare += 1.5; weights.eco += 1; }
  else if (sat > 80) { weights.industry += 1.5; }
  var sum = 0;
  for (var k in weights) sum += weights[k];
  var seats = {};
  var assigned = 0;
  var ids = Object.keys(weights);
  for (var j = 0; j < ids.length; j++) {
    var s = (j === ids.length - 1)
      ? total - assigned
      : Math.max(1, Math.round(weights[ids[j]] / sum * total));
    seats[ids[j]] = s;
    assigned += s;
  }
  return seats;
};
/* 满意度：住房 / 食物 / 电力 / 安全 / 医疗 五项加权。 */
V30PoliticsPanel.prototype.satisfaction = function () {
  var g = this.safeGame();
  var inv = this.inv();
  var pop = this.popCount();
  var cap = 2;
  try {
    if (g.pop && typeof g.pop.cap === 'number') cap = g.pop.cap;
    else if (g.builder && typeof g.builder.popCap === 'function') cap = g.builder.popCap();
  } catch (e) {}
  var housing = pop <= 0 ? 100 : V30Utils.clamp(cap / Math.max(1, pop), 0, 1.2) / 1.2 * 100;
  var food = V30Utils.clamp((inv.food || 0) / Math.max(1, pop * 2) * 100, 0, 100);
  var powerUse = 0, powerProd = 0;
  try {
    if (g.powergrid && typeof g.powergrid.balance === 'function') {
      var bal = g.powergrid.balance();
      powerProd = bal.prod || 0; powerUse = bal.use || 0;
    } else if (g.builder) {
      powerProd = this.buildingCount('solar') * 3 + this.buildingCount('solar_farm') * 12 +
        this.buildingCount('wind_turbine') * 2 + this.buildingCount('nuclear') * 40 +
        this.buildingCount('fusion') * 80 + this.buildingCount('geothermal') * 15;
      powerUse = this.totalBuildings() * 1;
    }
  } catch (e) {}
  var power = powerUse <= 0 ? 100 : V30Utils.clamp(powerProd / powerUse * 100, 0, 100);
  var towers = this.buildingCount('mg_turret') + this.buildingCount('ms_turret') +
    this.buildingCount('railgun') + this.buildingCount('missile_silo');
  var safety = V30Utils.clamp(40 + towers * 12, 0, 100);
  var med = V30Utils.clamp(30 + (this.buildingCount('hospital') + this.buildingCount('medcenter') +
    this.buildingCount('clinic')) * 20, 0, 100);
  var parts = [
    { id: 'housing', name: '🏠 住房', icon: '🏠', value: Math.round(housing), weight: 0.25, tip: '人口 ' + pop + ' / 容量 ' + cap },
    { id: 'food', name: '🌾 食物', icon: '🌾', value: Math.round(food), weight: 0.2, tip: '库存 ' + (inv.food || 0) },
    { id: 'power', name: '⚡ 电力', icon: '⚡', value: Math.round(power), weight: 0.2, tip: '发电 ' + powerProd + ' / 用电 ' + powerUse },
    { id: 'safety', name: '🛡️ 安全', icon: '🛡️', value: Math.round(safety), weight: 0.2, tip: towers + ' 座防御塔' },
    { id: 'med', name: '🏥 医疗', icon: '🏥', value: Math.round(med), weight: 0.15, tip: '医疗建筑 ' + (this.buildingCount('hospital') + this.buildingCount('medcenter') + this.buildingCount('clinic')) + ' 座' },
  ];
  var overall = 0;
  for (var i = 0; i < parts.length; i++) overall += parts[i].value * parts[i].weight;
  return { overall: Math.round(overall), parts: parts, pop: pop, cap: cap };
};
/* 已颁布的政策 id 集合（优先读 game.policy，缺失则读本地记录）。 */
V30PoliticsPanel.prototype.enactedPolicies = function () {
  var g = this.safeGame();
  var out = {};
  try {
    if (g.policy) {
      if (Array.isArray(g.policy.active)) {
        for (var i = 0; i < g.policy.active.length; i++) out[g.policy.active[i]] = true;
        return out;
      }
      if (g.policy.enacted && typeof g.policy.enacted === 'object') return g.policy.enacted;
      if (typeof g.policy.list === 'function') {
        var list = g.policy.list();
        for (var j = 0; j < list.length; j++) out[list[j]] = true;
        return out;
      }
    }
  } catch (e) {}
  return this.enactedLocal;
};
V30PoliticsPanel.prototype.policyDefs = function () {
  if (typeof POLICY_DEFS !== 'undefined' && POLICY_DEFS) return POLICY_DEFS;
  return {};
};
V30PoliticsPanel.prototype.canAfford = function (cost) {
  var inv = this.inv();
  if (!cost) return true;
  for (var k in cost) if ((inv[k] || 0) < cost[k]) return false;
  return true;
};
V30PoliticsPanel.prototype.payCost = function (cost) {
  var g = this.safeGame();
  if (!cost) return true;
  try {
    if (g.player && g.player.inv) {
      for (var k in cost) g.player.inv[k] -= cost[k];
      return true;
    }
  } catch (e) {}
  return false;
};
/* 派系对某政策的投票倾向：喜欢的类别 +30%，讨厌的 -30%，其余基准 50%。 */
V30PoliticsPanel.prototype.factionStance = function (faction, policy) {
  var base = 0.5;
  if (faction.likes.indexOf(policy.cat) >= 0) base += 0.3;
  if (faction.dislikes.indexOf(policy.cat) >= 0) base -= 0.3;
  if (policy.cat === 'welfare' && this.satisfaction().overall < 50) base += 0.15;
  return V30Utils.clamp(base, 0.05, 0.95);
};
/* 模拟投票：按席位加权 + 确定性随机（同一政策结果稳定，不随手抖）。 */
V30PoliticsPanel.prototype.simulateVote = function (policyId) {
  var defs = this.policyDefs();
  var policy = defs[policyId];
  if (!policy) return null;
  var seats = this.factionSeats();
  var total = this.totalSeats();
  var yes = 0, no = 0;
  var detail = [];
  var rnd = V30Utils.seeded('vote:' + policyId + ':' + total);
  for (var i = 0; i < V30_FACTIONS.length; i++) {
    var f = V30_FACTIONS[i];
    var s = seats[f.id] || 0;
    var stance = this.factionStance(f, policy);
    var fYes = 0;
    for (var j = 0; j < s; j++) if (rnd() < stance) fYes++;
    yes += fYes; no += (s - fYes);
    detail.push({ faction: f, seats: s, yes: fYes, no: s - fYes, stance: stance });
  }
  var passed = yes > total / 2;
  return { policyId: policyId, yes: yes, no: no, total: total, passed: passed, detail: detail };
};
/* 颁布政策：先模拟投票，通过且付得起成本才真正颁布。 */
V30PoliticsPanel.prototype.enactPolicy = function (policyId) {
  var defs = this.policyDefs();
  var policy = defs[policyId];
  if (!policy) return { ok: false, reason: '未知政策' };
  var enacted = this.enactedPolicies();
  if (enacted[policyId]) return { ok: false, reason: '该政策已在生效' };
  if (!this.canAfford(policy.cost)) return { ok: false, reason: '资源不足，无法支付颁布费用' };
  var vote = this.simulateVote(policyId);
  if (!vote.passed) {
    this.voteLog.unshift({ policyId: policyId, name: policy.name, yes: vote.yes, no: vote.no, passed: false, at: Date.now() });
    if (this.voteLog.length > 20) this.voteLog.pop();
    return { ok: false, reason: '议会投票未通过（' + vote.yes + '赞成 / ' + vote.no + '反对）', vote: vote };
  }
  this.payCost(policy.cost);
  var applied = false;
  try {
    var g = this.safeGame();
    if (g.policy && typeof g.policy.enact === 'function') { g.policy.enact(policyId); applied = true; }
    else if (g.policy && typeof g.policy.activate === 'function') { g.policy.activate(policyId); applied = true; }
    else if (g.policy && Array.isArray(g.policy.active)) { g.policy.active.push(policyId); applied = true; }
  } catch (e) {}
  this.enactedLocal[policyId] = true;
  this.voteLog.unshift({ policyId: policyId, name: policy.name, yes: vote.yes, no: vote.no, passed: true, at: Date.now() });
  if (this.voteLog.length > 20) this.voteLog.pop();
  return { ok: true, vote: vote, appliedToGame: applied };
};
V30PoliticsPanel.prototype.repealPolicy = function (policyId) {
  var enacted = this.enactedPolicies();
  if (!enacted[policyId]) return { ok: false, reason: '该政策未生效' };
  try {
    var g = this.safeGame();
    if (g.policy && typeof g.policy.repeal === 'function') g.policy.repeal(policyId);
    else if (g.policy && Array.isArray(g.policy.active)) {
      var idx = g.policy.active.indexOf(policyId);
      if (idx >= 0) g.policy.active.splice(idx, 1);
    }
  } catch (e) {}
  delete this.enactedLocal[policyId];
  return { ok: true };
};
V30PoliticsPanel.prototype.nextElectionIn = function () {
  var now = Date.now();
  var elapsed = (now - this.electionEpoch) % this.electionCycleMs;
  return this.electionCycleMs - elapsed;
};
V30PoliticsPanel.prototype.electionCountdownText = function () {
  var ms = this.nextElectionIn();
  var days = Math.floor(ms / (24 * 3600 * 1000));
  var hours = Math.floor((ms % (24 * 3600 * 1000)) / (3600 * 1000));
  return days + '天' + hours + '小时';
};
V30PoliticsPanel.prototype.render = function () {
  var tab = this.activeTab;
  if (tab === 'satisfaction') return this._renderSatisfaction();
  if (tab === 'vote') return this._renderVote();
  return this._renderParliament();
};
V30PoliticsPanel.prototype._renderParliament = function () {
  var total = this.totalSeats();
  var seats = this.factionSeats();
  var sat = this.satisfaction();
  var html = '<div class="v30-sec"><h3>🏛️ 议会构成（共 ' + total + ' 席 · 按建筑与民意推导）</h3>';
  html += V30Utils.bar(total / 51, '#f59e0b');
  for (var i = 0; i < V30_FACTIONS.length; i++) {
    var f = V30_FACTIONS[i];
    var s = seats[f.id] || 0;
    html += '<div class="v30-row"><span>' + f.icon + ' ' + f.name +
      ' <span class="v30-muted">支持' + f.likes.map(function (c) { return V30_POLICY_CAT_NAMES[c]; }).join('、') + '</span></span>' +
      '<b>' + s + ' 席 ' + V30Utils.pct(s / total) + '</b></div>';
    html += V30Utils.bar(s / total, f.color);
  }
  html += '</div>';
  html += '<div class="v30-sec"><h3>🗳️ 选举</h3>' +
    '<div class="v30-row"><span>下次选举</span><b>' + this.electionCountdownText() + '后</b></div>' +
    '<div class="v30-row"><span>当前满意度</span><b>' + sat.overall + ' 分</b></div>' +
    '<div class="v30-muted">满意度低于 50 时民生党与生态党得势，高于 80 时工业党得势；席位随城市发展自动变化。</div></div>';
  return html;
};
V30PoliticsPanel.prototype._renderSatisfaction = function () {
  var sat = this.satisfaction();
  var mood = sat.overall >= 80 ? '😍 非常满意' : sat.overall >= 60 ? '😊 比较满意' :
    sat.overall >= 40 ? '😐 一般' : sat.overall >= 25 ? '😟 不满' : '😡 愤怒';
  var html = '<div class="v30-sec"><h3>😊 殖民地满意度：' + sat.overall + ' 分 · ' + mood + '</h3>';
  html += V30Utils.bar(sat.overall / 100, sat.overall >= 60 ? '#34d399' : sat.overall >= 40 ? '#f59e0b' : '#ef4444');
  for (var i = 0; i < sat.parts.length; i++) {
    var p = sat.parts[i];
    html += '<div class="v30-row"><span>' + p.name + ' <span class="v30-muted">' + V30Utils.esc(p.tip) + '</span></span><b>' + p.value + ' 分</b></div>';
    html += V30Utils.bar(p.value / 100, p.value >= 60 ? '#34d399' : p.value >= 40 ? '#f59e0b' : '#ef4444');
  }
  html += '<div class="v30-muted">权重：住房 25% / 食物 20% / 电力 20% / 安全 20% / 医疗 15%。' +
    '满意度影响人口增长与议会格局，低于 25 可能触发抗议事件。</div></div>';
  return html;
};
V30PoliticsPanel.prototype._renderVote = function () {
  var defs = this.policyDefs();
  var ids = Object.keys(defs);
  var enacted = this.enactedPolicies();
  var html = '<div class="v30-sec"><h3>🗳️ 政策投票（议会席位加权表决）</h3>';
  if (!ids.length) {
    html += '<div class="v30-muted">未检测到 policy.js 的 POLICY_DEFS。政策数据随 policy.js 加载后自动出现；' +
      '本面板仍可查看议会与满意度。</div>';
  }
  var cats = {};
  for (var i = 0; i < ids.length; i++) {
    var d = defs[ids[i]];
    if (!cats[d.cat]) cats[d.cat] = [];
    cats[d.cat].push(d);
  }
  for (var cat in cats) {
    html += '<h3 style="color:#93c5fd;margin:10px 0 4px">' + V30Utils.esc(V30_POLICY_CAT_NAMES[cat] || cat) + '</h3>';
    for (var j = 0; j < cats[cat].length; j++) {
      var p = cats[cat][j];
      var isOn = !!enacted[p.id];
      var costStr = p.cost ? Object.keys(p.cost).map(function (k) { return k + '×' + p.cost[k]; }).join(' ') : '免费';
      html += '<div class="v30-card"><div class="v30-row"><span><b>' + (p.icon || '📜') + ' ' +
        V30Utils.esc(p.name) + '</b> ' + (isOn ? '<span class="v30-tag" style="background:#14532d">✅ 生效中</span>' : '') +
        '</span><span class="v30-muted">' + V30Utils.esc(costStr) + '</span></div>' +
        '<div class="v30-muted">' + V30Utils.esc(p.desc || '') + '</div>' +
        (p.flavor ? '<div class="v30-muted">“' + V30Utils.esc(p.flavor) + '”</div>' : '') +
        '<div style="margin-top:6px">' +
        (isOn
          ? '<button class="v30-btn danger" data-v30-repeal="' + V30Utils.esc(p.id) + '">废除</button>'
          : '<button class="v30-btn" data-v30-enact="' + V30Utils.esc(p.id) + '"' +
            (this.canAfford(p.cost) ? '' : ' disabled') + '>发起投票</button>') +
        '</div></div>';
    }
  }
  html += '</div>';
  if (this.voteLog.length) {
    html += '<div class="v30-sec"><h3>📜 最近投票</h3>';
    for (var k = 0; k < this.voteLog.length; k++) {
      var v = this.voteLog[k];
      html += '<div class="v30-row"><span>' + V30Utils.esc(v.name) + '</span><b>' +
        (v.passed ? '✅ 通过' : '❌ 未通过') + ' ' + v.yes + ':' + v.no + '</b></div>';
    }
    html += '</div>';
  }
  return html;
};
V30PoliticsPanel.prototype.bindEvents = function (root) {
  var self = this;
  var enactBtns = root.querySelectorAll('[data-v30-enact]');
  for (var i = 0; i < enactBtns.length; i++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        var res = self.enactPolicy(btn.getAttribute('data-v30-enact'));
        self.toast(res.ok ? '✅ 政策通过并颁布' : '❌ ' + res.reason);
        self.refresh();
      });
    })(enactBtns[i]);
  }
  var repealBtns = root.querySelectorAll('[data-v30-repeal]');
  for (var j = 0; j < repealBtns.length; j++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        var res = self.repealPolicy(btn.getAttribute('data-v30-repeal'));
        self.toast(res.ok ? '政策已废除' : '❌ ' + res.reason);
        self.refresh();
      });
    })(repealBtns[j]);
  }
};

/* ================================================================
 * 3. 深空地图面板：轨道 / 月球 / 小行星带
 * ================================================================ */

var V30_MOON_MISSIONS = [
  { id: 'moon-survey', name: '月球勘测', icon: '🔭', cost: { tech: 10, iron: 50 }, need: 'observatory', needName: '天文台', yieldText: '解锁月球采矿点', durationMin: 5 },
  { id: 'moon-mine', name: '月球采矿', icon: '⛏️', cost: { tech: 20, steel: 30 }, need: 'moon-survey', needName: '先完成月球勘测', yieldText: '每分钟 +8 氦-3', durationMin: 10 },
  { id: 'moon-base', name: '月球基地', icon: '🌙', cost: { tech: 40, steel: 100 }, need: 'moon-mine', needName: '先完成月球采矿', yieldText: '人口容量 +20，解锁月球移民', durationMin: 20 },
];
var V30_BELT_MISSIONS = [
  { id: 'belt-scout', name: '小行星带侦察', icon: '🛰️', cost: { tech: 15, iron: 80 }, need: null, needName: '', yieldText: '发现 3 处富矿小行星', durationMin: 8 },
  { id: 'belt-mine', name: '小行星采矿', icon: '☄️', cost: { tech: 30, steel: 60 }, need: 'belt-scout', needName: '先完成小行星带侦察', yieldText: '每分钟 +10 稀土', durationMin: 15 },
  { id: 'belt-haul', name: '重型拖运', icon: '🚀', cost: { tech: 50, steel: 120 }, need: 'belt-mine', needName: '先完成小行星采矿', yieldText: '每分钟 +15 铁矿 +5 铀矿', durationMin: 25 },
];

function V30DeepSpacePanel(game, manager) {
  V30BasePanel.call(this, game, manager);
  this.id = 'deepspace';
  this.title = '深空地图';
  this.icon = '🌠';
  this.tabs = [
    { id: 'orbit', name: '🛰️ 轨道' },
    { id: 'moon', name: '🌙 月球' },
    { id: 'belt', name: '☄️ 小行星带' },
  ];
  this.activeTab = 'orbit';
  this.missions = {}; // missionId -> {status:'active'|'done', startedAt, endsAt}
}
V30DeepSpacePanel.prototype = Object.create(V30BasePanel.prototype);
V30DeepSpacePanel.prototype.constructor = V30DeepSpacePanel;

V30DeepSpacePanel.prototype.orbitalState = function () {
  var g = this.safeGame();
  var out = { modules: [], stationLevel: 0, defense: 0 };
  try {
    if (g.orbital && typeof g.orbital.status === 'function') {
      var s = g.orbital.status();
      if (s) return { modules: s.modules || [], stationLevel: s.level || 0, defense: s.defense || 0, raw: s };
    }
    if (typeof MODULE_DEFS !== 'undefined' && g.orbital && g.orbital.modules) {
      for (var k in g.orbital.modules) {
        if (g.orbital.modules[k] && MODULE_DEFS[k]) {
          out.modules.push({ id: k, name: MODULE_DEFS[k].name, icon: MODULE_DEFS[k].icon || '🛰️' });
        }
      }
    }
  } catch (e) {}
  /* 兜底：用地面建筑推导轨道能力（卫星站/天文台/雷达）。 */
  if (!out.modules.length) {
    var sat = this.buildingCount('satellite');
    var obs = this.buildingCount('observatory');
    var radar = this.buildingCount('radar');
    if (sat > 0) out.modules.push({ id: 'satellite', name: '通讯卫星 ×' + sat, icon: '📡' });
    if (obs > 0) out.modules.push({ id: 'observatory', name: '深空天文台 ×' + obs, icon: '🔭' });
    if (radar > 0) out.modules.push({ id: 'radar', name: '深空雷达 ×' + radar, icon: '📻' });
    out.stationLevel = sat + obs;
  }
  return out;
};
V30DeepSpacePanel.prototype.deepSpaceState = function () {
  var g = this.safeGame();
  var out = { destinations: [], unlocked: 0 };
  try {
    if (typeof DESTINATIONS !== 'undefined' && DESTINATIONS) {
      var keys = Object.keys(DESTINATIONS);
      for (var i = 0; i < keys.length; i++) {
        var d = DESTINATIONS[keys[i]];
        out.destinations.push({ id: keys[i], name: d.name || keys[i], icon: d.icon || '🌌', desc: d.desc || '' });
      }
    }
    if (g.deepSpace && typeof g.deepSpace.status === 'function') {
      var s = g.deepSpace.status();
      if (s) out.raw = s;
    }
  } catch (e) {}
  return out;
};
V30DeepSpacePanel.prototype.missionDone = function (id) {
  var m = this.missions[id];
  return !!(m && m.status === 'done');
};
V30DeepSpacePanel.prototype.missionActive = function (id) {
  var m = this.missions[id];
  if (!m || m.status !== 'active') return false;
  if (Date.now() >= m.endsAt) { m.status = 'done'; return false; }
  return true;
};
V30DeepSpacePanel.prototype.canLaunch = function (mission) {
  if (this.missionDone(mission.id) || this.missionActive(mission.id)) return { ok: false, reason: '任务已在进行或已完成' };
  if (mission.need) {
    if (mission.need === 'observatory' && this.buildingCount('observatory') < 1) {
      return { ok: false, reason: '需要先建造天文台' };
    }
    if (mission.need !== 'observatory' && !this.missionDone(mission.need)) {
      return { ok: false, reason: '需要：' + mission.needName };
    }
  }
  var inv = this.inv();
  for (var k in mission.cost) if ((inv[k] || 0) < mission.cost[k]) return { ok: false, reason: '资源不足：' + k };
  return { ok: true };
};
V30DeepSpacePanel.prototype.launchMission = function (mission) {
  var chk = this.canLaunch(mission);
  if (!chk.ok) return { ok: false, reason: chk.reason };
  var g = this.safeGame();
  try {
    if (g.player && g.player.inv) {
      for (var k in mission.cost) g.player.inv[k] -= mission.cost[k];
    }
  } catch (e) {}
  this.missions[mission.id] = {
    status: 'active', startedAt: Date.now(),
    endsAt: Date.now() + mission.durationMin * 60000,
  };
  return { ok: true };
};
V30DeepSpacePanel.prototype.missionRemainingText = function (mission) {
  var m = this.missions[mission.id];
  if (!m) return '';
  var left = Math.max(0, m.endsAt - Date.now());
  var min = Math.ceil(left / 60000);
  return min + ' 分钟后完成';
};
V30DeepSpacePanel.prototype.render = function () {
  var tab = this.activeTab;
  if (tab === 'moon') return this._renderMoon();
  if (tab === 'belt') return this._renderBelt();
  return this._renderOrbit();
};
V30DeepSpacePanel.prototype._renderOrbit = function () {
  var orb = this.orbitalState();
  var ds = this.deepSpaceState();
  var html = '<div class="v30-sec"><h3>🛰️ 轨道站（等级 ' + orb.stationLevel + '）</h3>';
  if (!orb.modules.length) {
    html += '<div class="v30-muted">尚未建立轨道能力。建造 📡卫星站 / 🔭天文台 / 📻雷达站 以解锁轨道视图与深空任务。</div>';
  } else {
    for (var i = 0; i < orb.modules.length; i++) {
      html += '<div class="v30-row"><span>' + orb.modules[i].icon + ' ' + V30Utils.esc(orb.modules[i].name) + '</span><span class="v30-tag">运行中</span></div>';
    }
  }
  html += '</div>';
  html += '<div class="v30-sec"><h3>🌌 深空目的地</h3>';
  if (!ds.destinations.length) {
    html += '<div class="v30-muted">深空目的地数据随 deep_space.js 加载后出现。当前可通过「月球」「小行星带」页签执行任务链。</div>';
  } else {
    for (var j = 0; j < ds.destinations.length; j++) {
      var d = ds.destinations[j];
      html += '<div class="v30-card"><b>' + d.icon + ' ' + V30Utils.esc(d.name) + '</b>' +
        (d.desc ? '<div class="v30-muted">' + V30Utils.esc(d.desc) + '</div>' : '') + '</div>';
    }
  }
  html += '</div>';
  return html;
};
V30DeepSpacePanel.prototype._missionListHtml = function (missions) {
  var html = '';
  for (var i = 0; i < missions.length; i++) {
    var m = missions[i];
    var done = this.missionDone(m.id);
    var active = this.missionActive(m.id);
    var chk = this.canLaunch(m);
    var costStr = Object.keys(m.cost).map(function (k) { return k + '×' + m.cost[k]; }).join(' ');
    html += '<div class="v30-card"><div class="v30-row"><span><b>' + m.icon + ' ' +
      V30Utils.esc(m.name) + '</b></span><span class="v30-muted">' + V30Utils.esc(costStr) + '</span></div>' +
      '<div class="v30-muted">' + V30Utils.esc(m.yieldText) + ' · 耗时 ' + m.durationMin + ' 分钟' +
      (m.needName ? ' · 前置：' + V30Utils.esc(m.needName) : '') + '</div>' +
      '<div style="margin-top:6px">' +
      (done ? '<span class="v30-tag" style="background:#14532d">✅ 已完成</span>'
        : active ? '<span class="v30-tag">⏳ ' + this.missionRemainingText(m) + '</span>'
        : '<button class="v30-btn" data-v30-mission="' + V30Utils.esc(m.id) + '"' +
          (chk.ok ? '' : ' disabled') + '>发射任务</button>' +
          (chk.ok ? '' : ' <span class="v30-muted">' + V30Utils.esc(chk.reason) + '</span>')) +
      '</div></div>';
  }
  return html;
};
V30DeepSpacePanel.prototype._renderMoon = function () {
  var html = '<div class="v30-sec"><h3>🌙 月球任务链（勘测 → 采矿 → 基地）</h3>' +
    '<div class="v30-muted">任务按现实时间推进，切换面板或刷新页面后进度保留在本面板实例内；' +
    '完成采矿后，月球收益按建筑计入（见任务说明）。</div></div>';
  html += this._missionListHtml(V30_MOON_MISSIONS);
  return html;
};
V30DeepSpacePanel.prototype._renderBelt = function () {
  var html = '<div class="v30-sec"><h3>☄️ 小行星带任务链（侦察 → 采矿 → 拖运）</h3>' +
    '<div class="v30-muted">稀土与铀矿的主要外来来源。拖运任务完成后，配合贸易站可缓解中后期资源瓶颈。</div></div>';
  html += this._missionListHtml(V30_BELT_MISSIONS);
  return html;
};
V30DeepSpacePanel.prototype.bindEvents = function (root) {
  var self = this;
  var btns = root.querySelectorAll('[data-v30-mission]');
  var all = V30_MOON_MISSIONS.concat(V30_BELT_MISSIONS);
  for (var i = 0; i < btns.length; i++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-v30-mission');
        var m = null;
        for (var j = 0; j < all.length; j++) if (all[j].id === id) m = all[j];
        if (!m) return;
        var res = self.launchMission(m);
        self.toast(res.ok ? '🚀 任务已发射：' + m.name : '❌ ' + res.reason);
        self.refresh();
      });
    })(btns[i]);
  }
};

/* ================================================================
 * 4. 生态面板：改造进度 / 氧气 / 物种
 * 改造进度由真实建筑推导（温室、生态圈、穹顶等），bio.js 存在时
 * 优先读 BioManager 的真实数据；物种按建筑/科技条件逐项解锁。
 * ================================================================ */

var V30_TERRAFORM_SOURCES = [
  { buildingId: 'greenhouse', name: '温室', icon: '🌿', per: 0.6 },
  { buildingId: 'ecocircle', name: '生态圈', icon: '🌍', per: 2.5 },
  { buildingId: 'dome', name: '穹顶', icon: '🟢', per: 1.2 },
  { buildingId: 'seed_sanctuary', name: '种子庇护所', icon: '🌱', per: 3.0 },
  { buildingId: 'gene_ark', name: '基因方舟', icon: '🧬', per: 4.0 },
  { buildingId: 'eden_engine', name: '伊甸引擎', icon: '✨', per: 8.0 },
  { buildingId: 'oc16_coral_farm', name: '珊瑚农场', icon: '🪸', per: 1.5 },
  { buildingId: 'un16_mushroom_farm', name: '菌菇农场', icon: '🍄', per: 1.0 },
];
var V30_SPECIES = [
  { id: 'moss', name: '火星苔藓', icon: '🌿', need: { greenhouses: 1 }, desc: '能在裸岩上存活的先锋物种，固氮改土。' },
  { id: 'lichen', name: '地衣', icon: '🟢', need: { greenhouses: 3 }, desc: '苔藓与真菌的共生体，改造进度达 5% 后出现。' },
  { id: 'algae', name: '耐寒藻', icon: '🦠', need: { water: 1 }, desc: '在水培池中产氧，是氧气曲线的起点。', needWater: true },
  { id: 'potato', name: '火星土豆', icon: '🥔', need: { greenhouses: 2 }, desc: '第一种主粮作物，改良土壤的副产品。' },
  { id: 'wheat', name: '穹顶小麦', icon: '🌾', need: { greenhouses: 5 }, desc: '高产主粮，需要稳定的穹顶环境。' },
  { id: 'pine', name: '火星松', icon: '🌲', need: { terraform: 15 }, desc: '第一种木本植物，标志大气初步宜居。' },
  { id: 'flower', name: '温室花', icon: '🌸', need: { terraform: 20 }, desc: '观赏植物，居民满意度的活招牌。' },
  { id: 'bee', name: '授粉蜂', icon: '🐝', need: { terraform: 25 }, desc: '没有蜜蜂就没有真正的农业生态。' },
  { id: 'fish', name: '水培鱼', icon: '🐟', need: { water: 1, terraform: 18 }, desc: '封闭水循环里的蛋白质来源。', needWater: true },
  { id: 'rabbit', name: '穴兔', icon: '🐇', need: { terraform: 35 }, desc: '第一种引入的哺乳动物，生态链的关键一环。' },
  { id: 'bird', name: '穹顶雀', icon: '🐦', need: { terraform: 45 }, desc: '会飞的居民，意味着天空可以呼吸。' },
  { id: 'deer', name: '苔原鹿', icon: '🦌', need: { terraform: 60 }, desc: '大型食草动物，生态改造过半的证明。' },
];

function V30EcoPanel(game, manager) {
  V30BasePanel.call(this, game, manager);
  this.id = 'eco';
  this.title = '生态';
  this.icon = '🌱';
  this.tabs = [
    { id: 'terraform', name: '🌍 改造进度' },
    { id: 'oxygen', name: '💨 氧气' },
    { id: 'species', name: '🦠 物种' },
  ];
  this.activeTab = 'terraform';
}
V30EcoPanel.prototype = Object.create(V30BasePanel.prototype);
V30EcoPanel.prototype.constructor = V30EcoPanel;

V30EcoPanel.prototype.bioState = function () {
  var g = this.safeGame();
  try {
    if (g.bio) {
      if (typeof g.bio.status === 'function') {
        var s = g.bio.status();
        if (s) return { raw: s, fromBio: true };
      }
      if (typeof g.bio.terraform === 'number') return { terraform: g.bio.terraform, fromBio: true };
    }
  } catch (e) {}
  return null;
};
V30EcoPanel.prototype.terraformProgress = function () {
  var bio = this.bioState();
  if (bio && typeof bio.terraform === 'number') return V30Utils.clamp(bio.terraform, 0, 100);
  if (bio && bio.raw) {
    var r = bio.raw;
    if (typeof r.terraform === 'number') return V30Utils.clamp(r.terraform, 0, 100);
    if (typeof r.progress === 'number') return V30Utils.clamp(r.progress, 0, 100);
  }
  var total = 0;
  var detail = [];
  for (var i = 0; i < V30_TERRAFORM_SOURCES.length; i++) {
    var s = V30_TERRAFORM_SOURCES[i];
    var n = this.buildingCount(s.buildingId);
    if (n > 0) {
      total += n * s.per;
      detail.push({ name: s.name, icon: s.icon, count: n, points: n * s.per });
    }
  }
  return V30Utils.clamp(total, 0, 100);
};
V30EcoPanel.prototype.terraformDetail = function () {
  var detail = [];
  for (var i = 0; i < V30_TERRAFORM_SOURCES.length; i++) {
    var s = V30_TERRAFORM_SOURCES[i];
    var n = this.buildingCount(s.buildingId);
    if (n > 0) detail.push({ name: s.name, icon: s.icon, count: n, points: n * s.per });
  }
  return detail;
};
V30EcoPanel.prototype.oxygen = function () {
  var g = this.safeGame();
  var bio = this.bioState();
  if (bio && bio.raw && typeof bio.raw.oxygen === 'number') {
    return { ppm: bio.raw.oxygen, fromBio: true };
  }
  /* 推导：基础 0.13%（火星大气）+ 温室/生态圈产氧 - 人口消耗。 */
  var green = this.buildingCount('greenhouse');
  var eco = this.buildingCount('ecocircle');
  var dome = this.buildingCount('dome');
  var algae = this.buildingCount('oc16_coral_farm');
  var pop = this.popCount();
  var ppm = 1300 + green * 600 + eco * 1500 + dome * 600 + algae * 900 - pop * 8;
  ppm = Math.max(0, ppm);
  var pct = ppm / 210000 * 100; // 地球海平面氧气约 21%
  return {
    ppm: Math.round(ppm), pct: pct,
    prod: green * 600 + eco * 1500 + dome * 600 + algae * 900,
    use: pop * 8, fromBio: false,
  };
};
V30EcoPanel.prototype.oxygenStage = function (pct) {
  if (pct >= 90) return { name: '地球级', icon: '🌍', desc: '摘掉头盔的日子不远了。' };
  if (pct >= 50) return { name: '高氧', icon: '💨', desc: '穹顶外短暂停留已无大碍。' };
  if (pct >= 20) return { name: '可呼吸穹顶', icon: '🟢', desc: '穹顶内空气基本达标。' };
  if (pct >= 5) return { name: '稀薄', icon: '🌫️', desc: '仍需生命维持系统。' };
  return { name: '近乎真空', icon: '🔴', desc: '火星原生大气，无法呼吸。' };
};
V30EcoPanel.prototype.speciesStatus = function () {
  var tf = this.terraformProgress();
  var water = this.buildingCount('pump') + this.buildingCount('waterplant') + this.buildingCount('desalination');
  var gh = this.buildingCount('greenhouse');
  var out = [];
  for (var i = 0; i < V30_SPECIES.length; i++) {
    var sp = V30_SPECIES[i];
    var ok = true;
    var missing = [];
    if (sp.need.greenhouses && gh < sp.need.greenhouses) { ok = false; missing.push('温室×' + sp.need.greenhouses); }
    if (sp.need.terraform && tf < sp.need.terraform) { ok = false; missing.push('改造 ' + sp.need.terraform + '%'); }
    if (sp.need.water && water < sp.need.water) { ok = false; missing.push('水利建筑×' + sp.need.water); }
    out.push({ sp: sp, unlocked: ok, missing: missing });
  }
  return out;
};
V30EcoPanel.prototype.render = function () {
  var tab = this.activeTab;
  if (tab === 'oxygen') return this._renderOxygen();
  if (tab === 'species') return this._renderSpecies();
  return this._renderTerraform();
};
V30EcoPanel.prototype._renderTerraform = function () {
  var tf = this.terraformProgress();
  var detail = this.terraformDetail();
  var stage = tf >= 80 ? '🌍 宜居新世界' : tf >= 50 ? '🌱 生态初成' :
    tf >= 20 ? '🌿 绿意初现' : tf >= 5 ? '🔬 改造启动' : '🔴 荒芜火星';
  var html = '<div class="v30-sec"><h3>🌍 行星改造进度：' + tf.toFixed(1) + '% · ' + stage + '</h3>';
  html += V30Utils.bar(tf / 100, tf >= 50 ? '#34d399' : tf >= 20 ? '#84cc16' : '#f59e0b');
  html += '<div class="v30-muted">100% = 大气、水文与土壤全面宜居。每座相关建筑按产出贡献进度，' +
    '伊甸引擎单座 +8%。改造进度同时决定物种解锁与居民满意度。</div></div>';
  html += '<div class="v30-sec"><h3>🏗️ 改造贡献</h3>';
  if (!detail.length) {
    html += '<div class="v30-muted">尚未建造任何改造建筑。先建 🌿温室（每座 +0.6%）起步。</div>';
  } else {
    for (var i = 0; i < detail.length; i++) {
      var d = detail[i];
      html += '<div class="v30-row"><span>' + d.icon + ' ' + d.name + ' ×' + d.count + '</span><b>+' + d.points.toFixed(1) + '%</b></div>';
    }
  }
  html += '</div>';
  return html;
};
V30EcoPanel.prototype._renderOxygen = function () {
  var o = this.oxygen();
  var stage = this.oxygenStage(o.pct);
  var html = '<div class="v30-sec"><h3>💨 氧气：' + V30Utils.fmt(o.ppm) + ' ppm（地球水平 ' + o.pct.toFixed(1) + '%）</h3>';
  html += V30Utils.bar(o.pct / 100, '#60a5fa');
  html += '<div class="v30-row"><span>阶段</span><b>' + stage.icon + ' ' + stage.name + '</b></div>';
  html += '<div class="v30-muted">' + stage.desc + '</div>';
  if (!o.fromBio) {
    html += '<div class="v30-row"><span>产氧（建筑）</span><b>+' + V30Utils.fmt(o.prod) + ' ppm</b></div>';
    html += '<div class="v30-row"><span>耗氧（人口 ' + this.popCount() + '）</span><b>−' + V30Utils.fmt(o.use) + ' ppm</b></div>';
    html += '<div class="v30-muted">温室 +600 / 生态圈 +1500 / 穹顶 +600 / 珊瑚农场 +900，每人 −8 ppm。</div>';
  } else {
    html += '<div class="v30-muted">数据来自 BioManager 实时状态。</div>';
  }
  html += '</div>';
  return html;
};
V30EcoPanel.prototype._renderSpecies = function () {
  var list = this.speciesStatus();
  var unlocked = 0;
  for (var i = 0; i < list.length; i++) if (list[i].unlocked) unlocked++;
  var html = '<div class="v30-sec"><h3>🦠 物种图鉴：已引入 ' + unlocked + ' / ' + list.length + '</h3>';
  html += V30Utils.bar(unlocked / list.length, '#34d399');
  for (var j = 0; j < list.length; j++) {
    var e = list[j];
    html += '<div class="v30-card"><div class="v30-row"><span><b>' + e.sp.icon + ' ' +
      V30Utils.esc(e.sp.name) + '</b></span>' +
      (e.unlocked ? '<span class="v30-tag" style="background:#14532d">✅ 已引入</span>'
        : '<span class="v30-tag">🔒 缺：' + V30Utils.esc(e.missing.join('、')) + '</span>') +
      '</div><div class="v30-muted">' + V30Utils.esc(e.sp.desc) + '</div></div>';
  }
  html += '</div>';
  return html;
};

/* ================================================================
 * 5. 军事面板：军队编制 / 军官 / 防御
 * 编制从防御塔与军事建筑真实计数推导；军官由房间/城市种子
 * 确定性生成（同一种子同一批军官，可复现、可测试）。
 * ================================================================ */

var V30_OFFICER_FIRST = ['陈', '李', '王', '张', '刘', '赵', '周', '吴', '郑', '何', '林', '徐'];
var V30_OFFICER_GIVEN = ['铁壁', '雷霆', '磐石', '疾风', '寒霜', '烈焰', '星河', '苍穹', '破晓', '守望', '无畏', '沉稳'];
var V30_OFFICER_TRAITS = [
  { id: 'sharpshooter', name: '神射手', icon: '🎯', desc: '防御塔伤害 +15%' },
  { id: 'engineer', name: '工事专家', icon: '🔧', desc: '防御建筑建造成本 −10%' },
  { id: 'tactician', name: '战术家', icon: '♟️', desc: '袭击预警时间 +10 秒' },
  { id: 'medic', name: '战地医生', icon: '⛑️', desc: '袭击后人口损失 −30%' },
  { id: 'scout', name: '侦察兵', icon: '🔭', desc: '雷达范围 +2 格' },
  { id: 'veteran', name: '老兵', icon: '🎖️', desc: '全军防御 +10%' },
];
var V30_DEFENSE_TOWERS = [
  { id: 'mg_turret', name: '机枪塔', icon: '🔫' },
  { id: 'ms_turret', name: '导弹塔', icon: '🚀' },
  { id: 'railgun', name: '磁轨炮', icon: '🔱' },
  { id: 'missile_silo', name: '导弹发射井', icon: '💥' },
  { id: 'shield', name: '护盾发生器', icon: '🛡️' },
  { id: 'shield_dome', name: '护盾穹顶', icon: '🔰' },
];

function V30MilitaryPanel(game, manager) {
  V30BasePanel.call(this, game, manager);
  this.id = 'military';
  this.title = '军事';
  this.icon = '🛡️';
  this.tabs = [
    { id: 'forces', name: '🪖 编制' },
    { id: 'officers', name: '🎖️ 军官' },
    { id: 'defense', name: '🏰 防御' },
  ];
  this.activeTab = 'forces';
  this.officerSeed = 'starport-officers-v3';
  this.deployedOfficers = {}; // officerId -> towerId（部署到哪座塔）
}
V30MilitaryPanel.prototype = Object.create(V30BasePanel.prototype);
V30MilitaryPanel.prototype.constructor = V30MilitaryPanel;

V30MilitaryPanel.prototype.militaryState = function () {
  var g = this.safeGame();
  var out = { raids: [], lastRaidAt: null, kills: 0 };
  try {
    if (g.military) {
      if (typeof g.military.status === 'function') {
        var s = g.military.status();
        if (s) return s;
      }
      if (Array.isArray(g.military.raidHistory)) out.raids = g.military.raidHistory;
      if (typeof g.military.kills === 'number') out.kills = g.military.kills;
    }
  } catch (e) {}
  return out;
};
V30MilitaryPanel.prototype.towerCounts = function () {
  var out = [];
  for (var i = 0; i < V30_DEFENSE_TOWERS.length; i++) {
    var t = V30_DEFENSE_TOWERS[i];
    var n = this.buildingCount(t.id);
    out.push({ id: t.id, name: t.name, icon: t.icon, count: n });
  }
  return out;
};
V30MilitaryPanel.prototype.defenseRating = function () {
  var towers = this.towerCounts();
  var score = 0;
  var weights = { mg_turret: 10, ms_turret: 25, railgun: 40, missile_silo: 35, shield: 20, shield_dome: 30 };
  for (var i = 0; i < towers.length; i++) score += towers[i].count * (weights[towers[i].id] || 10);
  score += this.buildingCount('radar') * 8;
  score += this.buildingCount('mil_academy') * 15;
  var grade = score >= 300 ? 'S · 固若金汤' : score >= 180 ? 'A · 坚固' :
    score >= 100 ? 'B · 可守' : score >= 40 ? 'C · 薄弱' : 'D · 不堪一击';
  return { score: score, grade: grade };
};
V30MilitaryPanel.prototype.officers = function () {
  var pop = this.popCount();
  var count = V30Utils.clamp(2 + Math.floor(pop / 40), 2, 6);
  var rnd = V30Utils.seeded(this.officerSeed + ':' + count);
  var usedNames = {};
  var list = [];
  for (var i = 0; i < count; i++) {
    var name = V30Utils.pick(rnd, V30_OFFICER_FIRST) + V30Utils.pick(rnd, V30_OFFICER_GIVEN);
    if (usedNames[name]) name = name + '·' + (i + 1);
    usedNames[name] = true;
    var trait = V30_OFFICER_TRAITS[Math.floor(rnd() * V30_OFFICER_TRAITS.length)];
    var level = 1 + Math.floor(rnd() * 5);
    list.push({
      id: 'officer-' + i, name: name, trait: trait, level: level,
      exp: Math.floor(rnd() * 100),
      deployedTo: this.deployedOfficers['officer-' + i] || null,
    });
  }
  return list;
};
V30MilitaryPanel.prototype.deployOfficer = function (officerId, towerId) {
  var towers = this.towerCounts();
  var ok = false;
  for (var i = 0; i < towers.length; i++) if (towers[i].id === towerId && towers[i].count > 0) ok = true;
  if (!ok) return { ok: false, reason: '没有该类防御建筑可部署' };
  this.deployedOfficers[officerId] = towerId;
  return { ok: true };
};
V30MilitaryPanel.prototype.undeployOfficer = function (officerId) {
  delete this.deployedOfficers[officerId];
  return { ok: true };
};
V30MilitaryPanel.prototype.render = function () {
  var tab = this.activeTab;
  if (tab === 'officers') return this._renderOfficers();
  if (tab === 'defense') return this._renderDefense();
  return this._renderForces();
};
V30MilitaryPanel.prototype._renderForces = function () {
  var towers = this.towerCounts();
  var total = 0;
  for (var i = 0; i < towers.length; i++) total += towers[i].count;
  var rating = this.defenseRating();
  var academy = this.buildingCount('mil_academy');
  var barracks = this.buildingCount('merc_camp');
  var html = '<div class="v30-sec"><h3>🪖 军队编制（防御塔 ' + total + ' 座）</h3>';
  html += '<div class="v30-row"><span>综合防御评分</span><b>' + rating.score + ' · ' + rating.grade + '</b></div>';
  html += V30Utils.bar(Math.min(1, rating.score / 300), '#ef4444');
  for (var i = 0; i < towers.length; i++) {
    var t = towers[i];
    html += '<div class="v30-row"><span>' + t.icon + ' ' + t.name + '</span><b>×' + t.count + '</b></div>';
  }
  html += '<div class="v30-row"><span>🎓 军事学院</span><b>×' + academy + '</b></div>';
  html += '<div class="v30-row"><span>⚔️ 雇佣兵营地</span><b>×' + barracks + '</b></div>';
  html += '<div class="v30-muted">编制随防御建筑实时变化；建造军事学院可解锁更多军官槽位。</div></div>';
  var ms = this.militaryState();
  if (ms && ms.raids && ms.raids.length) {
    html += '<div class="v30-sec"><h3>📜 袭击记录</h3>';
    var raids = ms.raids.slice(-5).reverse();
    for (var j = 0; j < raids.length; j++) {
      var r = raids[j];
      html += '<div class="v30-row"><span>' + V30Utils.esc(r.name || r.type || '袭击') + '</span><b>' +
        V30Utils.esc(r.result || r.outcome || '') + '</b></div>';
    }
    html += '</div>';
  }
  return html;
};
V30MilitaryPanel.prototype._renderOfficers = function () {
  var officers = this.officers();
  var html = '<div class="v30-sec"><h3>🎖️ 军官团（' + officers.length + ' 人 · 按人口规模授衔）</h3>' +
    '<div class="v30-muted">军官由城市种子确定性生成，同一存档同一批人；部署到防御塔后特长生效。</div></div>';
  for (var i = 0; i < officers.length; i++) {
    var o = officers[i];
    html += '<div class="v30-card"><div class="v30-row"><span><b>' + V30Utils.esc(o.name) +
      '</b> <span class="v30-tag">Lv.' + o.level + '</span></span><span>' + o.trait.icon + ' ' +
      V30Utils.esc(o.trait.name) + '</span></div>' +
      '<div class="v30-muted">' + V30Utils.esc(o.trait.desc) + ' · 经验 ' + o.exp + '/100</div>' +
      '<div style="margin-top:6px">' +
      (o.deployedTo
        ? '<span class="v30-tag" style="background:#14532d">已部署：' + V30Utils.esc(o.deployedTo) + '</span> ' +
          '<button class="v30-btn ghost" data-v30-undeploy="' + o.id + '">撤回</button>'
        : '<select class="v30-input" data-v30-deploy-sel="' + o.id + '">' +
          '<option value="">部署到…</option>' +
          this.towerCounts().filter(function (t) { return t.count > 0; }).map(function (t) {
            return '<option value="' + t.id + '">' + t.icon + t.name + ' ×' + t.count + '</option>';
          }).join('') + '</select> ' +
          '<button class="v30-btn" data-v30-deploy="' + o.id + '">部署</button>') +
      '</div></div>';
  }
  return html;
};
V30MilitaryPanel.prototype._renderDefense = function () {
  var rating = this.defenseRating();
  var towers = this.towerCounts();
  var radar = this.buildingCount('radar');
  var shelter = this.buildingCount('shelter');
  var wall = this.buildingCount('titan_wall');
  var html = '<div class="v30-sec"><h3>🏰 防御总览：' + rating.grade + '（' + rating.score + ' 分）</h3>';
  html += V30Utils.bar(Math.min(1, rating.score / 300), '#ef4444');
  html += '<div class="v30-row"><span>📻 雷达站（预警）</span><b>×' + radar + '</b></div>';
  html += '<div class="v30-row"><span>🏠 避难所</span><b>×' + shelter + '</b></div>';
  html += '<div class="v30-row"><span>🧱 泰坦城墙</span><b>×' + wall + '</b></div>';
  var coverage = Math.min(1, towers.reduce(function (a, t) { return a + t.count; }, 0) / 12);
  html += '<div class="v30-row"><span>火力覆盖率（估算）</span><b>' + V30Utils.pct(coverage) + '</b></div>';
  html += V30Utils.bar(coverage, '#f59e0b');
  html += '<div class="v30-muted">评分权重：机枪塔 10 / 导弹塔 25 / 磁轨炮 40 / 发射井 35 / 护盾 20~30，' +
    '雷达 +8 / 军事学院 +15。评分 100 以上可稳守常规袭击。</div></div>';
  return html;
};
V30MilitaryPanel.prototype.bindEvents = function (root) {
  var self = this;
  var deployBtns = root.querySelectorAll('[data-v30-deploy]');
  for (var i = 0; i < deployBtns.length; i++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        var oid = btn.getAttribute('data-v30-deploy');
        var sel = root.querySelector('[data-v30-deploy-sel="' + oid + '"]');
        var towerId = sel ? sel.value : '';
        if (!towerId) { self.toast('请先选择要部署的防御塔'); return; }
        var res = self.deployOfficer(oid, towerId);
        self.toast(res.ok ? '🎖️ 军官已部署' : '❌ ' + res.reason);
        self.refresh();
      });
    })(deployBtns[i]);
  }
  var undeployBtns = root.querySelectorAll('[data-v30-undeploy]');
  for (var j = 0; j < undeployBtns.length; j++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        self.undeployOfficer(btn.getAttribute('data-v30-undeploy'));
        self.toast('军官已撤回');
        self.refresh();
      });
    })(undeployBtns[j]);
  }
};

/* ================================================================
 * 6. 联机面板：房间 / 聊天 / 玩家列表 / 合作
 * 全部操作走 MPMultiplayerManager；multiplayer.js 未加载时显示提示，
 * 不崩、不造假数据。
 * ================================================================ */

function V30MultiplayerPanel(game, manager) {
  V30BasePanel.call(this, game, manager);
  this.id = 'multiplayer';
  this.title = '联机';
  this.icon = '🌐';
  this.tabs = [
    { id: 'rooms', name: '🏠 房间' },
    { id: 'chat', name: '💬 聊天' },
    { id: 'players', name: '👥 玩家' },
    { id: 'coop', name: '🤝 合作' },
  ];
  this.activeTab = 'rooms';
  this.mp = null;             // 由 V30UIManager 注入
  this._chatTimer = null;
  this._roomFilter = '';
}
V30MultiplayerPanel.prototype = Object.create(V30BasePanel.prototype);
V30MultiplayerPanel.prototype.constructor = V30MultiplayerPanel;

V30MultiplayerPanel.prototype.onShow = function () {
  var self = this;
  if (this._chatTimer) return;
  if (!V30Utils.hasDom()) return;
  this._chatTimer = setInterval(function () {
    if (self.manager && self.manager.current === 'multiplayer') self.refresh();
  }, 5000);
  if (this._chatTimer.unref) this._chatTimer.unref();
};
V30MultiplayerPanel.prototype.onHide = function () {
  if (this._chatTimer) { clearInterval(this._chatTimer); this._chatTimer = null; }
};
V30MultiplayerPanel.prototype.mpOrNull = function () {
  if (this.mp) return this.mp;
  if (this.manager && this.manager.uiManager && this.manager.uiManager.mp) {
    return this.manager.uiManager.mp;
  }
  return null;
};
V30MultiplayerPanel.prototype.render = function () {
  var mp = this.mpOrNull();
  if (!mp) {
    return '<div class="v30-card">🌐 联机模块未加载。<div class="v30-muted">' +
      '请确认 multiplayer.js 已在 game.js 之后引入（index.html 需加一行 ' +
      '&lt;script src="multiplayer.js"&gt;&lt;/script&gt;，由接入方添加，本文件不改 index.html）。</div></div>';
  }
  var tab = this.activeTab;
  if (tab === 'chat') return this._renderChat(mp);
  if (tab === 'players') return this._renderPlayers(mp);
  if (tab === 'coop') return this._renderCoop(mp);
  return this._renderRooms(mp);
};
V30MultiplayerPanel.prototype._renderRooms = function (mp) {
  var html = '';
  if (mp.room) {
    var r = mp.room;
    var diag = mp.diagnostics();
    html += '<div class="v30-card"><div class="v30-row"><span><b>🏠 ' + V30Utils.esc(r.name) + '</b></span>' +
      '<span class="v30-tag">' + V30Utils.esc(r.state) + '</span></div>' +
      '<div class="v30-row"><span>房主</span><b>' + V30Utils.esc(r.hostId && r.members[r.hostId] ? r.members[r.hostId].name : '—') + '</b></div>' +
      '<div class="v30-row"><span>人数</span><b>' + r.memberCount() + ' / ' + r.maxPlayers + '</b></div>' +
      '<div class="v30-row"><span>同步时钟</span><b>' + diag.clock + ' · 操作 ' + diag.opLogLength + ' 条</b></div>' +
      '<div class="v30-row"><span>传输</span><b>' + V30Utils.esc(diag.transportMode) + ' · 发 ' + diag.sent + ' / 收 ' + diag.received + '</b></div>' +
      '<div style="margin-top:6px">' +
      '<button class="v30-btn" data-v30-mp="invite">📨 生成邀请码</button> ' +
      '<button class="v30-btn ghost" data-v30-mp="resync">🔄 重新同步</button> ' +
      '<button class="v30-btn danger" data-v30-mp="leave">🚪 离开房间</button></div>' +
      '<div class="v30-muted" id="v30-invite-out"></div></div>';
  } else {
    var me = mp.me;
    html += '<div class="v30-sec"><h3>🧑‍🚀 你的身份</h3>' +
      '<input class="v30-input" id="v30-myname" placeholder="输入你的名字（2-16字）" value="' +
      V30Utils.esc(me ? me.name : '') + '" style="width:60%">' +
      '<button class="v30-btn ghost" data-v30-mp="setname">保存名字</button></div>';
    html += '<div class="v30-sec"><h3>🏠 创建房间</h3>' +
      '<input class="v30-input" id="v30-room-name" placeholder="房间名" style="width:55%">' +
      '<input class="v30-input" id="v30-room-pw" placeholder="密码（可空）" style="width:30%" type="password">' +
      '<select class="v30-input" id="v30-room-max"><option value="2">2人</option>' +
      '<option value="4" selected>4人</option><option value="6">6人</option><option value="8">8人</option></select><br>' +
      '<select class="v30-input" id="v30-room-mode"><option value="coop">🤝 合作建城</option><option value="sandbox">🏖️ 沙盒自由</option></select> ' +
      '<button class="v30-btn" data-v30-mp="create">创建并进入</button></div>';
    html += '<div class="v30-sec"><h3>🔍 房间列表</h3>' +
      '<input class="v30-input" id="v30-room-filter" placeholder="搜索房间名…" value="' +
      V30Utils.esc(this._roomFilter) + '" style="width:60%">' +
      '<button class="v30-btn ghost" data-v30-mp="refresh-rooms">刷新</button>' +
      '<div id="v30-room-list">' + this._roomListHtml(mp) + '</div></div>';
  }
  return html;
};
V30MultiplayerPanel.prototype._roomListHtml = function (mp) {
  var rooms = [];
  try { rooms = mp.listRooms({ keyword: this._roomFilter || undefined }); } catch (e) { rooms = []; }
  if (!rooms.length) return '<div class="v30-muted">暂无房间。创建一个房间，其他标签页打开本页面即可看到并加入（同一浏览器多标签页联机）。</div>';
  var html = '';
  for (var i = 0; i < rooms.length; i++) {
    var r = rooms[i];
    html += '<div class="v30-card"><div class="v30-row"><span><b>' + (r.hasPassword ? '🔒 ' : '🌐 ') +
      V30Utils.esc(r.name) + '</b> <span class="v30-muted">' + V30Utils.esc(r.hostName) + ' · ' +
      V30Utils.esc(r.mode === 'coop' ? '合作' : '沙盒') + '</span></span>' +
      '<b>' + r.memberCount + '/' + r.maxPlayers + '</b></div>' +
      '<div style="margin-top:4px"><button class="v30-btn" data-v30-join="' + V30Utils.esc(r.id) + '"' +
      (r.memberCount >= r.maxPlayers ? ' disabled' : '') + '>加入</button></div></div>';
  }
  return html;
};
V30MultiplayerPanel.prototype._renderChat = function (mp) {
  var msgs = mp.chat.history(null, 50);
  var html = '<div class="v30-sec"><h3>💬 房间聊天</h3>';
  if (!mp.room) return html + '<div class="v30-muted">请先加入房间再聊天。</div></div>';
  html += '<div class="v30-chat" id="v30-chat-box">';
  if (!msgs.length) html += '<div class="v30-muted">还没有消息。输入 /help 查看指令（/me /roll /w 私聊等）。</div>';
  for (var i = 0; i < msgs.length; i++) {
    var m = msgs[i];
    var reacts = '';
    if (m.reactions) {
      for (var e in m.reactions) {
        reacts += ' <span class="v30-tag">' + V30Utils.esc(e) + ' ' + m.reactions[e].length + '</span>';
      }
    }
    html += '<div class="v30-chatmsg' + (m.system ? ' sys' : '') + '">' +
      (m.system ? '' : '<b style="color:' + V30Utils.esc(m.fromColor || '#e2e8f0') + '">' +
        V30Utils.esc(m.fromName || '?') + '</b> ') +
      '<span class="v30-muted">' + V30Utils.esc(new Date(m.ts).toLocaleTimeString()) + '</span> ' +
      (m.rendered || V30Utils.esc(m.text || '')) + reacts + '</div>';
  }
  html += '</div>';
  html += '<div><input class="v30-input" id="v30-chat-input" placeholder="输入消息…（:smile: 表情 / /help 指令）" style="width:68%">' +
    '<button class="v30-btn" data-v30-mp="send-chat">发送</button></div>';
  html += '<div style="margin-top:6px"><span class="v30-muted">表情：</span>';
  var codes = ['smile', 'laugh', 'rocket', 'thumbsup', 'fire', 'heart', 'hammer', 'bolt', 'party'];
  for (var j = 0; j < codes.length; j++) {
    html += '<button class="v30-btn ghost" data-v30-emoji=":' + codes[j] + ':" style="padding:2px 8px">' +
      (typeof MP_EMOJIS !== 'undefined' ? MP_EMOJIS[codes[j]] : codes[j]) + '</button>';
  }
  html += '</div></div>';
  return html;
};
V30MultiplayerPanel.prototype._renderPlayers = function (mp) {
  var html = '<div class="v30-sec"><h3>👥 玩家列表</h3>';
  if (!mp.room) return html + '<div class="v30-muted">请先加入房间。</div></div>';
  var members = mp.room.memberList();
  var me = mp.me;
  for (var i = 0; i < members.length; i++) {
    var p = members[i];
    var roleName = (typeof MP_ROLES !== 'undefined' && MP_ROLES[p.role]) ? MP_ROLES[p.role].icon + ' ' + MP_ROLES[p.role].name : p.role;
    var divName = p.division && typeof MP_DIVISIONS !== 'undefined' && MP_DIVISIONS[p.division]
      ? MP_DIVISIONS[p.division].icon + ' ' + MP_DIVISIONS[p.division].name : '未分工';
    var isMe = me && p.id === me.id;
    var isHost = mp.room.hostId === p.id;
    html += '<div class="v30-card"><div class="v30-row"><span><b style="color:' + V30Utils.esc(p.color) + '">' +
      V30Utils.esc(p.name) + '</b> ' + (isMe ? '<span class="v30-tag">我</span>' : '') +
      '</span><span>' + roleName + ' · ' + divName + '</span></div>' +
      '<div class="v30-muted">延迟 ' + (p.latencyMs >= 0 ? p.latencyMs + 'ms' : '—') +
      ' · 建造 ' + p.buildCount + ' 栋 · 加入 ' + new Date(p.joinedAt).toLocaleTimeString() +
      (p.isMuted() ? ' · 🔇 禁言中' : '') + '</div>';
    if (!isMe) {
      html += '<div style="margin-top:6px">' +
        '<button class="v30-btn ghost" data-v30-votekick="' + V30Utils.esc(p.id) + '">🗳️ 发起踢人投票</button> ';
      if (me && (me.role === 'host' || me.role === 'admin')) {
        html += '<button class="v30-btn danger" data-v30-kick="' + V30Utils.esc(p.id) + '">踢出</button> ';
        if (me.role === 'host' && !isHost) {
          html += '<button class="v30-btn ghost" data-v30-promote="' + V30Utils.esc(p.id) + '">⬆️ 设为管理员</button>';
        }
      }
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  return html;
};
V30MultiplayerPanel.prototype._renderCoop = function (mp) {
  var html = '<div class="v30-sec"><h3>🤝 合作建城</h3>';
  if (!mp.room) return html + '<div class="v30-muted">请先加入房间。</div></div>';
  html += '<div class="v30-sec"><h3>🧭 七大分工</h3>';
  if (typeof MP_DIVISIONS !== 'undefined') {
    for (var key in MP_DIVISIONS) {
      var d = MP_DIVISIONS[key];
      var members = mp.roles.divisionMembers(key);
      html += '<div class="v30-card"><div class="v30-row"><span><b>' + d.icon + ' ' + d.name + '</b> ' +
        '<span class="v30-muted">' + members.length + '/' + d.maxMembers + '人</span></span>' +
        '<button class="v30-btn ghost" data-v30-join-div="' + key + '">加入分工</button></div>' +
        '<div class="v30-muted">' + V30Utils.esc(d.desc) + '</div>' +
        (members.length ? '<div class="v30-muted">成员：' + members.map(function (m) { return V30Utils.esc(m.name); }).join('、') + '</div>' : '') +
        '</div>';
    }
  }
  html += '</div>';
  html += '<div class="v30-sec"><h3>📌 任务板</h3>';
  var tasks = mp.coop.tasks;
  if (!tasks.length) {
    html += '<div class="v30-muted">暂无任务。点「生成建议任务」按当前短板自动创建。</div>';
  } else {
    for (var i = 0; i < tasks.length; i++) {
      var t = tasks[i];
      html += '<div class="v30-card"><div class="v30-row"><span><b>' + V30Utils.esc(t.title) + '</b></span>' +
        '<span>' + (t.status === 'done' ? '<span class="v30-tag" style="background:#14532d">✅ 完成</span>' : V30Utils.pct(t.progress)) + '</span></div>' +
        V30Utils.bar(t.progress, '#34d399') +
        '<div class="v30-muted">负责人：' + V30Utils.esc(t.assignedTo && mp.room.getMember(t.assignedTo) ? mp.room.getMember(t.assignedTo).name : '未指派') + '</div>' +
        (t.status !== 'done' ? '<div style="margin-top:4px"><button class="v30-btn ghost" data-v30-task-done="' + t.id + '">标记完成</button></div>' : '') +
        '</div>';
    }
  }
  html += '<button class="v30-btn" data-v30-mp="suggest-tasks">✨ 生成建议任务</button></div>';
  html += '<div class="v30-sec"><h3>🏆 贡献榜</h3>';
  var board = mp.coop.leaderboard();
  if (!board.length) html += '<div class="v30-muted">暂无贡献记录：放置建筑、完成任务都会加分。</div>';
  for (var j = 0; j < board.length; j++) {
    var b = board[j];
    var p = mp.room.getMember(b.playerId);
    html += '<div class="v30-row"><span>#' + (j + 1) + ' ' + V30Utils.esc(p ? p.name : b.playerId) + '</span>' +
      '<b>' + b.score.total + ' 分（建造 ' + b.score.build + ' / 任务 ' + b.score.task + '）</b></div>';
  }
  html += '</div></div>';
  return html;
};
V30MultiplayerPanel.prototype.bindEvents = function (root) {
  var self = this;
  var mp = this.mpOrNull();
  if (!mp) return;
  var q = function (sel) { return root.querySelector(sel); };
  var qa = function (sel) { return root.querySelectorAll(sel); };
  var act = function (btn) {
    var a = btn.getAttribute('data-v30-mp');
    try {
      if (a === 'setname') {
        var nameInput = q('#v30-myname');
        if (nameInput && nameInput.value.trim()) { mp.setIdentity(nameInput.value.trim()); self.toast('名字已保存'); }
      } else if (a === 'create') {
        var rn = q('#v30-room-name'), rp = q('#v30-room-pw'),
          rm = q('#v30-room-max'), rmode = q('#v30-room-mode');
        var name = rn && rn.value.trim() ? rn.value.trim() : (mp.me ? mp.me.name + '的殖民地' : '火星殖民地');
        mp.hostRoom({
          name: name, password: rp ? rp.value : '',
          maxPlayers: rm ? parseInt(rm.value, 10) : 4,
          mode: rmode ? rmode.value : 'coop',
        });
        self.toast('🏠 房间已创建');
        self.activeTab = 'players';
        self.refresh();
      } else if (a === 'refresh-rooms') {
        self.refresh();
      } else if (a === 'leave') {
        mp.leaveRoom();
        self.toast('已离开房间');
        self.activeTab = 'rooms';
        self.refresh();
      } else if (a === 'invite') {
        var code = mp.createInvite();
        var out = q('#v30-invite-out');
        if (out) out.textContent = '邀请码：' + code + '（把房间名 + 邀请码发给朋友，对方用邀请码加入）';
        self.toast('邀请码已生成');
      } else if (a === 'resync') {
        mp.requestResync();
        self.toast('已请求房主快照重同步');
      } else if (a === 'send-chat') {
        var input = q('#v30-chat-input');
        if (input && input.value.trim()) {
          mp.sendChat(input.value);
          input.value = '';
          self.refresh();
        }
      } else if (a === 'suggest-tasks') {
        var sug = mp.coop.suggestTasks();
        for (var i = 0; i < sug.length; i++) {
          try { mp.coop.createTask(mp.me.id, sug[i]); } catch (e) {}
        }
        self.toast(sug.length ? '已生成 ' + sug.length + ' 个建议任务' : '当前没有短板，无需新任务');
        self.refresh();
      }
    } catch (e) {
      self.toast('❌ ' + (e.message || '操作失败'));
    }
  };
  var btns = qa('[data-v30-mp]');
  for (var i = 0; i < btns.length; i++) {
    (function (btn) { btn.addEventListener('click', function () { act(btn); }); })(btns[i]);
  }
  var joins = qa('[data-v30-join]');
  for (var j = 0; j < joins.length; j++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        try {
          var pw = '';
          var roomId = btn.getAttribute('data-v30-join');
          var rooms = mp.listRooms({});
          var target = null;
          for (var k = 0; k < rooms.length; k++) if (rooms[k].id === roomId) target = rooms[k];
          if (target && target.hasPassword) {
            pw = (typeof prompt === 'function') ? (prompt('房间「' + target.name + '」需要密码：') || '') : '';
          }
          mp.joinRoom(roomId, pw);
          self.toast('✅ 已加入房间');
          self.activeTab = 'chat';
          self.refresh();
        } catch (e) { self.toast('❌ ' + (e.message || '加入失败')); }
      });
    })(joins[j]);
  }
  var filterInput = q('#v30-room-filter');
  if (filterInput) {
    filterInput.addEventListener('input', function () {
      self._roomFilter = filterInput.value;
      var list = q('#v30-room-list');
      if (list) list.innerHTML = self._roomListHtml(mp);
      self.bindEvents(root);
    });
  }
  var chatInput = q('#v30-chat-input');
  if (chatInput) {
    chatInput.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter') {
        try { mp.sendChat(chatInput.value); chatInput.value = ''; self.refresh(); }
        catch (e) { self.toast('❌ ' + (e.message || '发送失败')); }
      }
    });
  }
  var emojis = qa('[data-v30-emoji]');
  for (var m = 0; m < emojis.length; m++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        var input2 = q('#v30-chat-input');
        if (input2) { input2.value += btn.getAttribute('data-v30-emoji'); input2.focus(); }
      });
    })(emojis[m]);
  }
  var kicks = qa('[data-v30-kick]');
  for (var n = 0; n < kicks.length; n++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        try { mp.kickPlayer(btn.getAttribute('data-v30-kick')); self.toast('已移出该玩家'); self.refresh(); }
        catch (e) { self.toast('❌ ' + (e.message || '操作失败')); }
      });
    })(kicks[n]);
  }
  var vkicks = qa('[data-v30-votekick]');
  for (var p = 0; p < vkicks.length; p++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        try {
          var vote = mp.startKickVote(btn.getAttribute('data-v30-votekick'));
          mp.chat.system('踢人投票已发起（60 秒内过半数通过）');
          self.toast('🗳️ 投票已发起：' + vote.id.slice(0, 12));
        } catch (e) { self.toast('❌ ' + (e.message || '投票失败')); }
      });
    })(vkicks[p]);
  }
  var promos = qa('[data-v30-promote]');
  for (var r = 0; r < promos.length; r++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        try { mp.promote(btn.getAttribute('data-v30-promote'), 'admin'); self.toast('已设为管理员'); self.refresh(); }
        catch (e) { self.toast('❌ ' + (e.message || '操作失败')); }
      });
    })(promos[r]);
  }
  var divs = qa('[data-v30-join-div]');
  for (var s = 0; s < divs.length; s++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        try {
          mp.assignDivision(mp.me.id, btn.getAttribute('data-v30-join-div'));
          self.toast('已加入该分工');
          self.refresh();
        } catch (e) { self.toast('❌ ' + (e.message || '加入失败')); }
      });
    })(divs[s]);
  }
  var dones = qa('[data-v30-task-done]');
  for (var t = 0; t < dones.length; t++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        try { mp.coop.completeTask(btn.getAttribute('data-v30-task-done'), mp.me.id); self.toast('✅ 任务完成 +50 贡献'); self.refresh(); }
        catch (e) { self.toast('❌ ' + (e.message || '操作失败')); }
      });
    })(dones[t]);
  }
};

/* ================================================================
 * 7. 门面：V30UIManager
 * install() 只做两件事：
 *   (1) 把 5 个面板注册进 V30PanelManager；
 *   (2) 包装 UIRefactor.prototype.showMoreMenu——原有菜单先渲染，
 *       再追加入口按钮；绝不改动 #toolbar 的 5 个按钮。
 * ================================================================ */

function V30UIManager(game) {
  this.game = game || null;
  this.manager = new V30PanelManager(game);
  this.manager.uiManager = this;
  this.politics = new V30PoliticsPanel(game, this.manager);
  this.deepspace = new V30DeepSpacePanel(game, this.manager);
  this.eco = new V30EcoPanel(game, this.manager);
  this.military = new V30MilitaryPanel(game, this.manager);
  this.multiplayerPanel = new V30MultiplayerPanel(game, this.manager);
  this.manager.register(this.politics);
  this.manager.register(this.deepspace);
  this.manager.register(this.eco);
  this.manager.register(this.military);
  this.manager.register(this.multiplayerPanel);
  this.mp = null;             // MPMultiplayerManager（懒创建）
  this._moreMenuPatched = false;
  this._escBound = false;
}
V30UIManager.prototype.getMultiplayer = function () {
  if (this.mp) return this.mp;
  if (typeof MPMultiplayerManager === 'undefined') return null;
  this.mp = new MPMultiplayerManager(this.game, {});
  this.multiplayerPanel.mp = this.mp;
  return this.mp;
};
V30UIManager.prototype.openPanel = function (id, tab) {
  this.getMultiplayer();
  return this.manager.open(id, tab);
};
V30UIManager.prototype.closePanel = function () { return this.manager.close(); };
V30UIManager.prototype.moreMenuEntries = function () {
  var self = this;
  return V30_PANEL_DEFS.map(function (def) {
    return {
      icon: def.icon, name: def.name,
      fn: function () { self.openPanel(def.id); },
    };
  });
};
/* 包装「更多」菜单：原有渲染完成后追加 5 个入口。 */
V30UIManager.prototype.patchMoreMenu = function () {
  if (this._moreMenuPatched) return true;
  if (typeof UIRefactor === 'undefined' || !UIRefactor.prototype) return false;
  var proto = UIRefactor.prototype;
  if (proto.showMoreMenu && proto.showMoreMenu._v30Patched) {
    this._moreMenuPatched = true;
    return true;
  }
  var orig = proto.showMoreMenu;
  if (typeof orig !== 'function') return false;
  var self = this;
  var wrapped = function () {
    var ret = orig.apply(this, arguments);
    try { self._appendMoreMenuEntries(); } catch (e) {}
    return ret;
  };
  wrapped._v30Patched = true;
  proto.showMoreMenu = wrapped;
  this._moreMenuPatched = true;
  return true;
};
V30UIManager.prototype._appendMoreMenuEntries = function () {
  if (!V30Utils.hasDom()) return;
  var grid = document.getElementById('more-grid');
  if (!grid) return;
  var entries = this.moreMenuEntries();
  for (var i = 0; i < entries.length; i++) {
    (function (entry) {
      if (grid.querySelector('[data-v30-more="' + entry.name + '"]')) return;
      var b = document.createElement('button');
      b.className = 'more-btn';
      b.setAttribute('data-v30-more', entry.name);
      b.innerHTML = '<span class="mb-icon">' + entry.icon + '</span><small>' + entry.name + '</small>';
      b.addEventListener('click', function () {
        var moreMenu = document.getElementById('more-menu');
        if (moreMenu) moreMenu.classList.add('hidden');
        try { entry.fn(); } catch (e) {}
        try {
          var g = this.game;
          if (g && g.sound) g.sound.click();
        } catch (e2) {}
      }.bind(this));
      grid.appendChild(b);
    }).call(this, entries[i]);
  }
};
V30UIManager.prototype.bindEscape = function () {
  if (this._escBound || !V30Utils.hasDom()) return;
  var self = this;
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && self.manager.current) self.manager.close();
  });
  this._escBound = true;
};
V30UIManager.prototype.install = function () {
  var ok = this.patchMoreMenu();
  if (!ok) {
    /* UIRefactor 可能晚于本文件加载：2 秒 / 6 秒后再试两次。 */
    var self = this;
    setTimeout(function () { self.patchMoreMenu(); }, 2000);
    setTimeout(function () { self.patchMoreMenu(); }, 6000);
  }
  this.bindEscape();
  if (typeof window !== 'undefined') {
    window.V30UI = this;
    window.V30PanelManager = V30PanelManager;
  }
  return { moreMenuPatched: this._moreMenuPatched, panels: this.manager.panelIds() };
};
/* 静态自检：不碰 DOM，只验证 5 个面板类可实例化、可渲染出字符串。 */
V30UIManager.selfTest = function (mockGame) {
  var results = [];
  var classes = [
    ['politics', V30PoliticsPanel],
    ['deepspace', V30DeepSpacePanel],
    ['eco', V30EcoPanel],
    ['military', V30MilitaryPanel],
    ['multiplayer', V30MultiplayerPanel],
  ];
  for (var i = 0; i < classes.length; i++) {
    var id = classes[i][0], Cls = classes[i][1];
    try {
      var mgr = new V30PanelManager(mockGame || null);
      var panel = new Cls(mockGame || null, mgr);
      var html = panel.render();
      results.push({ id: id, ok: typeof html === 'string' && html.length > 0, htmlLength: html.length });
    } catch (e) {
      results.push({ id: id, ok: false, error: e.message });
    }
  }
  return results;
};

/* ================================================================
 * 导出（浏览器全局 + Node）
 * ================================================================ */
if (typeof window !== 'undefined') {
  window.V30Utils = V30Utils;
  window.V30PanelManager = V30PanelManager;
  window.V30BasePanel = V30BasePanel;
  window.V30PoliticsPanel = V30PoliticsPanel;
  window.V30DeepSpacePanel = V30DeepSpacePanel;
  window.V30EcoPanel = V30EcoPanel;
  window.V30MilitaryPanel = V30MilitaryPanel;
  window.V30MultiplayerPanel = V30MultiplayerPanel;
  window.V30UIManager = V30UIManager;
  window.V30_PANEL_DEFS = V30_PANEL_DEFS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    V30Utils: V30Utils,
    V30_PANEL_DEFS: V30_PANEL_DEFS,
    V30PanelManager: V30PanelManager,
    V30BasePanel: V30BasePanel,
    V30PoliticsPanel: V30PoliticsPanel,
    V30DeepSpacePanel: V30DeepSpacePanel,
    V30EcoPanel: V30EcoPanel,
    V30MilitaryPanel: V30MilitaryPanel,
    V30MultiplayerPanel: V30MultiplayerPanel,
    V30UIManager: V30UIManager,
    V30_FACTIONS: V30_FACTIONS,
    V30_MOON_MISSIONS: V30_MOON_MISSIONS,
    V30_BELT_MISSIONS: V30_BELT_MISSIONS,
    V30_SPECIES: V30_SPECIES,
  };
}

/* ================================================================
 * 自动启动（浏览器）：game.js 在 DOMContentLoaded 里创建游戏并挂到
 * window.__starport；本文件后加载，监听同一事件即可拿到实例并安装
 * 「更多」菜单挂接。失败时静默（面板仍可通过 window.V30UI 手动装）。
 * ================================================================ */
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      try {
        if (window.__starport && !window.__v30Installed && typeof V30UIManager !== 'undefined') {
          var ui = new V30UIManager(window.__starport);
          var res = ui.install();
          window.__v30Installed = true;
          if (window.console) {
            console.log('[v30] UI 已安装，面板：' + res.panels.join(',') +
              '，更多菜单挂接：' + (res.moreMenuPatched ? '成功' : '待重试'));
          }
        }
      } catch (e) {
        if (window.console) console.warn('[v30] 自动安装失败：' + e.message);
      }
    }, 100);
  });
}
