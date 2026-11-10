/* 星港 — ui_v31.js：v3.1 UI 配套（贸易 / 文化 / 科研面板）
 * ------------------------------------------------------------------
 * 硬规则：只新增本文件，不改 index.html / game.js / 任何已有文件。
 * 保持 v2.1 的 5 按钮工具栏：本文件绝不创建 #toolbar 按钮；
 * 3 个新面板全部经「更多」菜单进入（运行时包装
 * UIRefactor.prototype.showMoreMenu，在原有菜单渲染后追加入口；
 * 与 ui_v30.js 的包装链式共存：v30 先包，v31 再包当前版本）。
 * 顶层标识符全部 V31 前缀；不声明 OVERLAY_MODES / TERRAIN /
 * Population / TUTORIAL_STEPS / DS_TUNE。面板读游戏状态时做
 * 防御性访问，任一旧系统缺失也不崩；Node 下可直接实例化自测。
 *
 * 面板：
 *   V31TradePanel    贸易路线 / 市场 / 贸易船（读 trade.js / game.js）
 *   V31CulturePanel  节日 / 作品 / 场馆（按建筑与人口推导文化分）
 *   V31ResearchPanel 科研项目 / 科技树 / 实验室（读 tech.js TECH_DEFS）
 * 框架：V31PanelManager（容器、显隐、Tab、样式注入）
 *       V31UIManager（门面：install() 挂接更多菜单 + 快捷键）
 * ------------------------------------------------------------------
 */

'use strict';

/* ================================================================
 * 0. 小工具（与 ui_v30.js 的 V30Utils 解耦，独立可用）
 * ================================================================ */

var V31Utils = {
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
  pct: function (v) { return Math.round(V31Utils.clamp(v, 0, 1) * 100) + '%'; },
  bar: function (ratio, color) {
    var p = V31Utils.clamp(ratio, 0, 1) * 100;
    return '<div class="v31-bar"><div class="v31-bar-fill" style="width:' + p.toFixed(0) +
      '%;background:' + (color || '#34d399') + '"></div></div>';
  },
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
    if (!V31Utils.hasDom()) return null;
    return document.getElementById(id);
  },
  costStr: function (cost) {
    if (!cost) return '免费';
    return Object.keys(cost).map(function (k) {
      return (V31_RES_NAMES[k] || k) + '×' + cost[k];
    }).join(' ');
  },
  nowText: function (ts) {
    try { var d = new Date(ts); return d.toLocaleString(); } catch (e) { return ''; }
  },
};

var V31_RES_NAMES = {
  iron: '铁矿',
  ice: '冰水',
  water: '水',
  food: '食物',
  steel: '钢材',
  rare: '稀土',
  tech: '科技点',
  uranium: '铀矿',
  he3: '氦-3',
  power: '电力',
  credits: '信用点',
};

/* ================================================================
 * 1. 面板定义与样式（容器 id / 样式 id / 类名全部 v31 前缀）
 * ================================================================ */

var V31_PANEL_DEFS = [
  { id: 'trade', name: '贸易', icon: '🤝', cls: 'V31TradePanel' },
  { id: 'culture', name: '文化', icon: '🎭', cls: 'V31CulturePanel' },
  { id: 'research', name: '科研', icon: '🔬', cls: 'V31ResearchPanel' },
];

var V31_CSS = [
  '#v31-panel{position:absolute;left:8px;right:8px;top:8px;bottom:8px;z-index:61;',
  ' background:rgba(10,14,28,.97);border:1px solid #334155;border-radius:12px;',
  ' color:#e2e8f0;display:flex;flex-direction:column;overflow:hidden;',
  ' font-size:13px;box-shadow:0 8px 32px rgba(0,0,0,.6)}',
  '#v31-panel.hidden{display:none}',
  '.v31-head{display:flex;align-items:center;gap:8px;padding:10px 12px;',
  ' border-bottom:1px solid #1e293b;flex:none}',
  '.v31-head b{font-size:15px;flex:1}',
  '.v31-head button{background:#1e293b;color:#e2e8f0;border:1px solid #334155;',
  ' border-radius:8px;padding:4px 10px;cursor:pointer}',
  '.v31-tabs{display:flex;gap:6px;padding:8px 12px 0;flex:none;flex-wrap:wrap}',
  '.v31-tab{background:#0f172a;color:#94a3b8;border:1px solid #1e293b;border-radius:8px;',
  ' padding:5px 10px;cursor:pointer}',
  '.v31-tab.active{background:#38bdf8;color:#111;border-color:#38bdf8;font-weight:bold}',
  '.v31-body{flex:1;overflow-y:auto;padding:12px}',
  '.v31-sec{margin-bottom:14px}',
  '.v31-sec h3{margin:0 0 6px;font-size:13px;color:#7dd3fc}',
  '.v31-row{display:flex;justify-content:space-between;gap:8px;padding:5px 0;',
  ' border-bottom:1px dashed #1e293b}',
  '.v31-row:last-child{border-bottom:none}',
  '.v31-bar{height:8px;background:#1e293b;border-radius:4px;overflow:hidden;margin:3px 0 8px}',
  '.v31-bar-fill{height:100%;border-radius:4px}',
  '.v31-card{background:#0f172a;border:1px solid #1e293b;border-radius:10px;padding:10px;margin-bottom:8px}',
  '.v31-btn{background:#38bdf8;color:#111;border:none;border-radius:8px;padding:6px 12px;',
  ' cursor:pointer;font-weight:bold;margin:2px}',
  '.v31-btn.ghost{background:#1e293b;color:#e2e8f0;border:1px solid #334155}',
  '.v31-btn.danger{background:#dc2626;color:#fff}',
  '.v31-btn:disabled{opacity:.4;cursor:not-allowed}',
  '.v31-input{background:#0f172a;color:#e2e8f0;border:1px solid #334155;border-radius:8px;',
  ' padding:6px 8px;margin:2px}',
  '.v31-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}',
  '.v31-tag{display:inline-block;background:#1e293b;border-radius:6px;padding:1px 7px;',
  ' font-size:11px;margin:1px}',
  '.v31-muted{color:#94a3b8;font-size:12px}',
  '.v31-kv{display:flex;justify-content:space-between;padding:3px 0}',
  '.v31-good{color:#34d399}',
  '.v31-bad{color:#ef4444}',
].join('\n');

/* ================================================================
 * 2. 面板框架（与 V30PanelManager 同构、id 与类名全部独立）
 * ================================================================ */

function V31BasePanel(game, manager) {
  this.game = game || null;
  this.manager = manager || null;
  this.id = 'base';
  this.title = '面板';
  this.icon = '📋';
  this.tabs = [];
  this.activeTab = null;
  this._refreshTimer = null;
}
V31BasePanel.prototype.safeGame = function () { return this.game || {}; };
V31BasePanel.prototype.inv = function () {
  var g = this.safeGame();
  try { return (g.player && g.player.inv) || {}; } catch (e) { return {}; }
};
V31BasePanel.prototype.popCount = function () {
  var g = this.safeGame();
  try { return (g.pop && g.pop.count) || 0; } catch (e) { return 0; }
};
V31BasePanel.prototype.buildingCount = function (buildingId) {
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
V31BasePanel.prototype.totalBuildings = function () {
  var g = this.safeGame();
  try {
    if (g.builder && Array.isArray(g.builder.buildings)) return g.builder.buildings.length;
  } catch (e) {}
  return 0;
};
V31BasePanel.prototype.hasTech = function (techId) {
  var g = this.safeGame();
  try {
    if (g.tech && typeof g.tech.has === 'function') return g.tech.has(techId);
    if (g.tech && g.tech.unlocked) return !!g.tech.unlocked[techId];
    if (g.tech && typeof g.tech.isUnlocked === 'function') return g.tech.isUnlocked(techId);
  } catch (e) {}
  return false;
};
V31BasePanel.prototype.techMul = function (key) {
  var g = this.safeGame();
  try { if (g.tech && typeof g.tech.mul === 'function') return g.tech.mul(key) || 1; } catch (e) {}
  return 1;
};
V31BasePanel.prototype.canAfford = function (cost) {
  var inv = this.inv();
  if (!cost) return true;
  for (var k in cost) if ((inv[k] || 0) < cost[k]) return false;
  return true;
};
V31BasePanel.prototype.payCost = function (cost) {
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
V31BasePanel.prototype.grantRes = function (gain) {
  var g = this.safeGame();
  if (!gain) return false;
  try {
    if (g.player && g.player.inv) {
      for (var k in gain) g.player.inv[k] = (g.player.inv[k] || 0) + gain[k];
      return true;
    }
  } catch (e) {}
  return false;
};
V31BasePanel.prototype.afterTrade = function () {
  var g = this.safeGame();
  try { if (g.stats && typeof g.stats.record === 'function') g.stats.record('trade'); } catch (e) {}
  try { if (g.sound && g.sound.trade) g.sound.trade(); } catch (e) {}
  try { if (typeof g.updateHUD === 'function') g.updateHUD(); } catch (e) {}
  try { if (typeof g.save === 'function') g.save(); } catch (e) {}
};
V31BasePanel.prototype.toast = function (msg) {
  var g = this.safeGame();
  try { if (g.toast) g.toast(msg); } catch (e) {}
  if (this.manager) this.manager.toast(msg);
};
V31BasePanel.prototype.render = function () { return '<div class="v31-muted">（空面板）</div>'; };
V31BasePanel.prototype.onShow = function () {};
V31BasePanel.prototype.onHide = function () {};
V31BasePanel.prototype.bindEvents = function (root) {};
V31BasePanel.prototype.refresh = function () {
  if (this.manager) this.manager.renderBody();
};

function V31PanelManager(game) {
  this.game = game || null;
  this.panels = {};
  this.current = null;
  this._styleInjected = false;
  this._toastTimer = null;
}
V31PanelManager.prototype.register = function (panel) {
  if (!panel || !panel.id) return false;
  this.panels[panel.id] = panel;
  panel.manager = this;
  return true;
};
V31PanelManager.prototype.get = function (id) { return this.panels[id] || null; };
V31PanelManager.prototype.panelIds = function () { return Object.keys(this.panels); };
V31PanelManager.prototype._injectStyle = function () {
  if (this._styleInjected || !V31Utils.hasDom()) return;
  if (document.getElementById('v31-style')) { this._styleInjected = true; return; }
  var style = document.createElement('style');
  style.id = 'v31-style';
  style.textContent = V31_CSS;
  document.head.appendChild(style);
  this._styleInjected = true;
};
V31PanelManager.prototype._ensureContainer = function () {
  if (!V31Utils.hasDom()) return null;
  this._injectStyle();
  var c = document.getElementById('v31-panel');
  if (c) return c;
  c = document.createElement('div');
  c.id = 'v31-panel';
  c.className = 'hidden';
  var host = document.getElementById('map-wrap') || document.getElementById('app') || document.body;
  host.appendChild(c);
  return c;
};
V31PanelManager.prototype.open = function (id, tab) {
  var panel = this.panels[id];
  if (!panel) return false;
  if (!V31Utils.hasDom()) {
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
V31PanelManager.prototype.hideOtherPanels = function () {
  if (!V31Utils.hasDom()) return;
  var ids = ['build-menu', 'more-menu', 'overlay-menu', 'tech-panel', 'trade-panel',
    'achieve-panel', 'stats-panel', 'help-panel', 'truck-panel', 'building-panel', 'v30-panel'];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) el.classList.add('hidden');
  }
};
V31PanelManager.prototype.close = function () {
  if (this.current) {
    var p = this.panels[this.current];
    if (p) p.onHide();
  }
  this.current = null;
  if (!V31Utils.hasDom()) return true;
  var c = document.getElementById('v31-panel');
  if (c) c.classList.add('hidden');
  return true;
};
V31PanelManager.prototype.toggle = function (id, tab) {
  if (this.current === id) { this.close(); return false; }
  this.open(id, tab);
  return true;
};
V31PanelManager.prototype._renderHead = function (panel) {
  var c = document.getElementById('v31-panel');
  if (!c) return;
  var tabsHtml = '';
  if (panel.tabs.length > 1) {
    tabsHtml = '<div class="v31-tabs">' + panel.tabs.map(function (t) {
      return '<button class="v31-tab' + (t.id === panel.activeTab ? ' active' : '') +
        '" data-v31tab="' + V31Utils.esc(t.id) + '">' + V31Utils.esc(t.name) + '</button>';
    }).join('') + '</div>';
  }
  c.innerHTML =
    '<div class="v31-head"><span style="font-size:18px">' + panel.icon + '</span>' +
    '<b>' + V31Utils.esc(panel.title) + '</b>' +
    '<button data-v31-close="1">✖ 关闭</button></div>' +
    tabsHtml + '<div class="v31-body" id="v31-body"></div>';
  var self = this;
  var closeBtn = c.querySelector('[data-v31-close]');
  if (closeBtn) closeBtn.addEventListener('click', function () { self.close(); });
  var tabBtns = c.querySelectorAll('[data-v31tab]');
  for (var i = 0; i < tabBtns.length; i++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        panel.activeTab = btn.getAttribute('data-v31tab');
        self._renderHead(panel);
        self.renderBody();
      });
    })(tabBtns[i]);
  }
};
V31PanelManager.prototype.renderBody = function () {
  if (!this.current) return;
  var panel = this.panels[this.current];
  if (!panel) return;
  if (!V31Utils.hasDom()) return;
  var body = document.getElementById('v31-body');
  if (!body) return;
  try {
    body.innerHTML = panel.render();
  } catch (e) {
    body.innerHTML = '<div class="v31-card">面板渲染失败：' + V31Utils.esc(e.message) + '</div>';
  }
  try { panel.bindEvents(body); } catch (e) {}
};
V31PanelManager.prototype.toast = function (msg) {
  if (!V31Utils.hasDom()) return;
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('hidden');
  var self = this;
  if (this._toastTimer) clearTimeout(this._toastTimer);
  this._toastTimer = setTimeout(function () { t.classList.add('hidden'); }, 2200);
};

/* ================================================================
 * 3. 贸易数据：180 条固定路线（目的地 × 资源对，一句话说明）
 * 路线收益公式见 V31TradePanel.routeIncome：
 *   收入 = 基础利润 × 距离系数 × 贸易站加成 × 贸易科技倍率
 * ================================================================ */

var V31_TRADE_DESTS = [
  '地球·休斯敦港',
  '地球·酒泉港',
  '地球·拜科努尔港',
  '地球·肯尼迪港',
  '地球·法属圭亚那港',
  '火星·埃律西昂',
  '火星·奥林匹斯',
  '火星·水手谷',
  '火星·极冠站',
  '火星·子午高原',
  '火星·塔尔西斯',
  '火星·希腊平原',
  '轨道·凤凰站',
  '轨道·天宫环',
  '轨道·曙光坞',
  '月球·静海基地',
  '月球·雨海基地',
  '月球·第谷站',
  '小行星·谷神星',
  '小行星·灶神星',
  '小行星·婚神星',
  '木卫二·冰海站',
  '土卫六·甲烷港',
  '金星·晨星云城',
  '火卫一· stickney 站',
  '火卫二·环形坞',
  '拉格朗日·L4 集市',
  '拉格朗日·L5 集市',
];

var V31_TRADE_ROUTES = [
  {
    id: 'v31r001',
    dest: '地球·休斯敦港',
    give: { iron: 10 },
    get: { food: 5 },
    dist: 4,
    baseProfit: 20,
    fee: 2,
    risk: 0.02,
    desc: '地球·休斯敦港：铁矿换食物，4 级航程',
  },
  {
    id: 'v31r002',
    dest: '地球·酒泉港',
    give: { ice: 20 },
    get: { steel: 10 },
    dist: 1,
    baseProfit: 27,
    fee: 3,
    risk: 0.04,
    desc: '地球·酒泉港：冰水换钢材，1 级航程',
  },
  {
    id: 'v31r003',
    dest: '地球·拜科努尔港',
    give: { water: 30 },
    get: { rare: 15 },
    dist: 5,
    baseProfit: 34,
    fee: 4,
    risk: 0.06,
    desc: '地球·拜科努尔港：水换稀土，5 级航程',
  },
  {
    id: 'v31r004',
    dest: '地球·肯尼迪港',
    give: { food: 40 },
    get: { tech: 20 },
    dist: 3,
    baseProfit: 41,
    fee: 5,
    risk: 0.08,
    desc: '地球·肯尼迪港：食物换科技点，3 级航程',
  },
  {
    id: 'v31r005',
    dest: '地球·法属圭亚那港',
    give: { steel: 50 },
    get: { uranium: 25 },
    dist: 2,
    baseProfit: 48,
    fee: 6,
    risk: 0.1,
    desc: '地球·法属圭亚那港：钢材换铀矿，2 级航程',
  },
  {
    id: 'v31r006',
    dest: '火星·埃律西昂',
    give: { rare: 10 },
    get: { he3: 30 },
    dist: 3,
    baseProfit: 55,
    fee: 7,
    risk: 0.12,
    desc: '火星·埃律西昂：稀土换氦-3，3 级航程',
  },
  {
    id: 'v31r007',
    dest: '火星·奥林匹斯',
    give: { tech: 20 },
    get: { power: 5 },
    dist: 3,
    baseProfit: 62,
    fee: 8,
    risk: 0.14,
    desc: '火星·奥林匹斯：科技点换电力，3 级航程',
  },
  {
    id: 'v31r008',
    dest: '火星·水手谷',
    give: { uranium: 30 },
    get: { credits: 10 },
    dist: 2,
    baseProfit: 69,
    fee: 9,
    risk: 0.02,
    desc: '火星·水手谷：铀矿换信用点，2 级航程',
  },
  {
    id: 'v31r009',
    dest: '火星·极冠站',
    give: { he3: 40 },
    get: { iron: 15 },
    dist: 5,
    baseProfit: 76,
    fee: 10,
    risk: 0.04,
    desc: '火星·极冠站：氦-3换铁矿，5 级航程',
  },
  {
    id: 'v31r010',
    dest: '火星·子午高原',
    give: { power: 50 },
    get: { ice: 20 },
    dist: 2,
    baseProfit: 83,
    fee: 2,
    risk: 0.06,
    desc: '火星·子午高原：电力换冰水，2 级航程',
  },
  {
    id: 'v31r011',
    dest: '火星·塔尔西斯',
    give: { credits: 10 },
    get: { water: 25 },
    dist: 3,
    baseProfit: 90,
    fee: 3,
    risk: 0.08,
    desc: '火星·塔尔西斯：信用点换水，3 级航程',
  },
  {
    id: 'v31r012',
    dest: '火星·希腊平原',
    give: { iron: 20 },
    get: { food: 30 },
    dist: 1,
    baseProfit: 97,
    fee: 4,
    risk: 0.1,
    desc: '火星·希腊平原：铁矿换食物，1 级航程',
  },
  {
    id: 'v31r013',
    dest: '轨道·凤凰站',
    give: { ice: 30 },
    get: { steel: 5 },
    dist: 3,
    baseProfit: 104,
    fee: 5,
    risk: 0.12,
    desc: '轨道·凤凰站：冰水换钢材，3 级航程',
  },
  {
    id: 'v31r014',
    dest: '轨道·天宫环',
    give: { water: 40 },
    get: { rare: 10 },
    dist: 5,
    baseProfit: 111,
    fee: 6,
    risk: 0.14,
    desc: '轨道·天宫环：水换稀土，5 级航程',
  },
  {
    id: 'v31r015',
    dest: '轨道·曙光坞',
    give: { food: 50 },
    get: { tech: 15 },
    dist: 4,
    baseProfit: 118,
    fee: 7,
    risk: 0.02,
    desc: '轨道·曙光坞：食物换科技点，4 级航程',
  },
  {
    id: 'v31r016',
    dest: '月球·静海基地',
    give: { steel: 10 },
    get: { uranium: 20 },
    dist: 5,
    baseProfit: 125,
    fee: 8,
    risk: 0.04,
    desc: '月球·静海基地：钢材换铀矿，5 级航程',
  },
  {
    id: 'v31r017',
    dest: '月球·雨海基地',
    give: { rare: 20 },
    get: { he3: 25 },
    dist: 3,
    baseProfit: 132,
    fee: 9,
    risk: 0.06,
    desc: '月球·雨海基地：稀土换氦-3，3 级航程',
  },
  {
    id: 'v31r018',
    dest: '月球·第谷站',
    give: { tech: 30 },
    get: { power: 30 },
    dist: 4,
    baseProfit: 139,
    fee: 10,
    risk: 0.08,
    desc: '月球·第谷站：科技点换电力，4 级航程',
  },
  {
    id: 'v31r019',
    dest: '小行星·谷神星',
    give: { uranium: 40 },
    get: { credits: 5 },
    dist: 1,
    baseProfit: 146,
    fee: 2,
    risk: 0.1,
    desc: '小行星·谷神星：铀矿换信用点，1 级航程',
  },
  {
    id: 'v31r020',
    dest: '小行星·灶神星',
    give: { he3: 50 },
    get: { iron: 10 },
    dist: 5,
    baseProfit: 153,
    fee: 3,
    risk: 0.12,
    desc: '小行星·灶神星：氦-3换铁矿，5 级航程',
  },
  {
    id: 'v31r021',
    dest: '小行星·婚神星',
    give: { power: 10 },
    get: { ice: 15 },
    dist: 3,
    baseProfit: 160,
    fee: 4,
    risk: 0.14,
    desc: '小行星·婚神星：电力换冰水，3 级航程',
  },
  {
    id: 'v31r022',
    dest: '木卫二·冰海站',
    give: { credits: 20 },
    get: { water: 20 },
    dist: 4,
    baseProfit: 167,
    fee: 5,
    risk: 0.02,
    desc: '木卫二·冰海站：信用点换水，4 级航程',
  },
  {
    id: 'v31r023',
    dest: '土卫六·甲烷港',
    give: { iron: 30 },
    get: { food: 25 },
    dist: 3,
    baseProfit: 174,
    fee: 6,
    risk: 0.04,
    desc: '土卫六·甲烷港：铁矿换食物，3 级航程',
  },
  {
    id: 'v31r024',
    dest: '金星·晨星云城',
    give: { ice: 40 },
    get: { steel: 30 },
    dist: 3,
    baseProfit: 181,
    fee: 7,
    risk: 0.06,
    desc: '金星·晨星云城：冰水换钢材，3 级航程',
  },
  {
    id: 'v31r025',
    dest: '火卫一· stickney 站',
    give: { water: 50 },
    get: { rare: 5 },
    dist: 1,
    baseProfit: 188,
    fee: 8,
    risk: 0.08,
    desc: '火卫一· stickney 站：水换稀土，1 级航程',
  },
  {
    id: 'v31r026',
    dest: '火卫二·环形坞',
    give: { food: 10 },
    get: { tech: 10 },
    dist: 4,
    baseProfit: 195,
    fee: 9,
    risk: 0.1,
    desc: '火卫二·环形坞：食物换科技点，4 级航程',
  },
  {
    id: 'v31r027',
    dest: '拉格朗日·L4 集市',
    give: { steel: 20 },
    get: { uranium: 15 },
    dist: 5,
    baseProfit: 22,
    fee: 10,
    risk: 0.12,
    desc: '拉格朗日·L4 集市：钢材换铀矿，5 级航程',
  },
  {
    id: 'v31r028',
    dest: '拉格朗日·L5 集市',
    give: { rare: 30 },
    get: { he3: 20 },
    dist: 5,
    baseProfit: 29,
    fee: 2,
    risk: 0.14,
    desc: '拉格朗日·L5 集市：稀土换氦-3，5 级航程',
  },
  {
    id: 'v31r029',
    dest: '地球·休斯敦港',
    give: { tech: 40 },
    get: { power: 25 },
    dist: 5,
    baseProfit: 36,
    fee: 3,
    risk: 0.02,
    desc: '地球·休斯敦港：科技点换电力，5 级航程',
  },
  {
    id: 'v31r030',
    dest: '地球·酒泉港',
    give: { uranium: 50 },
    get: { credits: 30 },
    dist: 4,
    baseProfit: 43,
    fee: 4,
    risk: 0.04,
    desc: '地球·酒泉港：铀矿换信用点，4 级航程',
  },
  {
    id: 'v31r031',
    dest: '地球·拜科努尔港',
    give: { he3: 10 },
    get: { iron: 5 },
    dist: 5,
    baseProfit: 50,
    fee: 5,
    risk: 0.06,
    desc: '地球·拜科努尔港：氦-3换铁矿，5 级航程',
  },
  {
    id: 'v31r032',
    dest: '地球·肯尼迪港',
    give: { power: 20 },
    get: { ice: 10 },
    dist: 4,
    baseProfit: 57,
    fee: 6,
    risk: 0.08,
    desc: '地球·肯尼迪港：电力换冰水，4 级航程',
  },
  {
    id: 'v31r033',
    dest: '地球·法属圭亚那港',
    give: { credits: 30 },
    get: { water: 15 },
    dist: 4,
    baseProfit: 64,
    fee: 7,
    risk: 0.1,
    desc: '地球·法属圭亚那港：信用点换水，4 级航程',
  },
  {
    id: 'v31r034',
    dest: '火星·埃律西昂',
    give: { iron: 40 },
    get: { food: 20 },
    dist: 2,
    baseProfit: 71,
    fee: 8,
    risk: 0.12,
    desc: '火星·埃律西昂：铁矿换食物，2 级航程',
  },
  {
    id: 'v31r035',
    dest: '火星·奥林匹斯',
    give: { ice: 50 },
    get: { steel: 25 },
    dist: 1,
    baseProfit: 78,
    fee: 9,
    risk: 0.14,
    desc: '火星·奥林匹斯：冰水换钢材，1 级航程',
  },
  {
    id: 'v31r036',
    dest: '火星·水手谷',
    give: { water: 10 },
    get: { rare: 30 },
    dist: 3,
    baseProfit: 85,
    fee: 10,
    risk: 0.02,
    desc: '火星·水手谷：水换稀土，3 级航程',
  },
  {
    id: 'v31r037',
    dest: '火星·极冠站',
    give: { food: 20 },
    get: { tech: 5 },
    dist: 5,
    baseProfit: 92,
    fee: 2,
    risk: 0.04,
    desc: '火星·极冠站：食物换科技点，5 级航程',
  },
  {
    id: 'v31r038',
    dest: '火星·子午高原',
    give: { steel: 30 },
    get: { uranium: 10 },
    dist: 4,
    baseProfit: 99,
    fee: 3,
    risk: 0.06,
    desc: '火星·子午高原：钢材换铀矿，4 级航程',
  },
  {
    id: 'v31r039',
    dest: '火星·塔尔西斯',
    give: { rare: 40 },
    get: { he3: 15 },
    dist: 2,
    baseProfit: 106,
    fee: 4,
    risk: 0.08,
    desc: '火星·塔尔西斯：稀土换氦-3，2 级航程',
  },
  {
    id: 'v31r040',
    dest: '火星·希腊平原',
    give: { tech: 50 },
    get: { power: 20 },
    dist: 4,
    baseProfit: 113,
    fee: 5,
    risk: 0.1,
    desc: '火星·希腊平原：科技点换电力，4 级航程',
  },
  {
    id: 'v31r041',
    dest: '轨道·凤凰站',
    give: { uranium: 10 },
    get: { credits: 25 },
    dist: 5,
    baseProfit: 120,
    fee: 6,
    risk: 0.12,
    desc: '轨道·凤凰站：铀矿换信用点，5 级航程',
  },
  {
    id: 'v31r042',
    dest: '轨道·天宫环',
    give: { he3: 20 },
    get: { iron: 30 },
    dist: 3,
    baseProfit: 127,
    fee: 7,
    risk: 0.14,
    desc: '轨道·天宫环：氦-3换铁矿，3 级航程',
  },
  {
    id: 'v31r043',
    dest: '轨道·曙光坞',
    give: { power: 30 },
    get: { ice: 5 },
    dist: 2,
    baseProfit: 134,
    fee: 8,
    risk: 0.02,
    desc: '轨道·曙光坞：电力换冰水，2 级航程',
  },
  {
    id: 'v31r044',
    dest: '月球·静海基地',
    give: { credits: 40 },
    get: { water: 10 },
    dist: 5,
    baseProfit: 141,
    fee: 9,
    risk: 0.04,
    desc: '月球·静海基地：信用点换水，5 级航程',
  },
  {
    id: 'v31r045',
    dest: '月球·雨海基地',
    give: { iron: 50 },
    get: { food: 15 },
    dist: 1,
    baseProfit: 148,
    fee: 10,
    risk: 0.06,
    desc: '月球·雨海基地：铁矿换食物，1 级航程',
  },
  {
    id: 'v31r046',
    dest: '月球·第谷站',
    give: { ice: 10 },
    get: { steel: 20 },
    dist: 4,
    baseProfit: 155,
    fee: 2,
    risk: 0.08,
    desc: '月球·第谷站：冰水换钢材，4 级航程',
  },
  {
    id: 'v31r047',
    dest: '小行星·谷神星',
    give: { water: 20 },
    get: { rare: 25 },
    dist: 2,
    baseProfit: 162,
    fee: 3,
    risk: 0.1,
    desc: '小行星·谷神星：水换稀土，2 级航程',
  },
  {
    id: 'v31r048',
    dest: '小行星·灶神星',
    give: { food: 30 },
    get: { tech: 30 },
    dist: 3,
    baseProfit: 169,
    fee: 4,
    risk: 0.12,
    desc: '小行星·灶神星：食物换科技点，3 级航程',
  },
  {
    id: 'v31r049',
    dest: '小行星·婚神星',
    give: { steel: 40 },
    get: { uranium: 5 },
    dist: 5,
    baseProfit: 176,
    fee: 5,
    risk: 0.14,
    desc: '小行星·婚神星：钢材换铀矿，5 级航程',
  },
  {
    id: 'v31r050',
    dest: '木卫二·冰海站',
    give: { rare: 50 },
    get: { he3: 10 },
    dist: 2,
    baseProfit: 183,
    fee: 6,
    risk: 0.02,
    desc: '木卫二·冰海站：稀土换氦-3，2 级航程',
  },
  {
    id: 'v31r051',
    dest: '土卫六·甲烷港',
    give: { tech: 10 },
    get: { power: 15 },
    dist: 5,
    baseProfit: 190,
    fee: 7,
    risk: 0.04,
    desc: '土卫六·甲烷港：科技点换电力，5 级航程',
  },
  {
    id: 'v31r052',
    dest: '金星·晨星云城',
    give: { uranium: 20 },
    get: { credits: 20 },
    dist: 5,
    baseProfit: 197,
    fee: 8,
    risk: 0.06,
    desc: '金星·晨星云城：铀矿换信用点，5 级航程',
  },
  {
    id: 'v31r053',
    dest: '火卫一· stickney 站',
    give: { he3: 30 },
    get: { iron: 25 },
    dist: 3,
    baseProfit: 24,
    fee: 9,
    risk: 0.08,
    desc: '火卫一· stickney 站：氦-3换铁矿，3 级航程',
  },
  {
    id: 'v31r054',
    dest: '火卫二·环形坞',
    give: { power: 40 },
    get: { ice: 30 },
    dist: 2,
    baseProfit: 31,
    fee: 10,
    risk: 0.1,
    desc: '火卫二·环形坞：电力换冰水，2 级航程',
  },
  {
    id: 'v31r055',
    dest: '拉格朗日·L4 集市',
    give: { credits: 50 },
    get: { water: 5 },
    dist: 3,
    baseProfit: 38,
    fee: 2,
    risk: 0.12,
    desc: '拉格朗日·L4 集市：信用点换水，3 级航程',
  },
  {
    id: 'v31r056',
    dest: '拉格朗日·L5 集市',
    give: { iron: 10 },
    get: { food: 10 },
    dist: 2,
    baseProfit: 45,
    fee: 3,
    risk: 0.14,
    desc: '拉格朗日·L5 集市：铁矿换食物，2 级航程',
  },
  {
    id: 'v31r057',
    dest: '地球·休斯敦港',
    give: { ice: 20 },
    get: { steel: 15 },
    dist: 1,
    baseProfit: 52,
    fee: 4,
    risk: 0.02,
    desc: '地球·休斯敦港：冰水换钢材，1 级航程',
  },
  {
    id: 'v31r058',
    dest: '地球·酒泉港',
    give: { water: 30 },
    get: { rare: 20 },
    dist: 1,
    baseProfit: 59,
    fee: 5,
    risk: 0.04,
    desc: '地球·酒泉港：水换稀土，1 级航程',
  },
  {
    id: 'v31r059',
    dest: '地球·拜科努尔港',
    give: { food: 40 },
    get: { tech: 25 },
    dist: 2,
    baseProfit: 66,
    fee: 6,
    risk: 0.06,
    desc: '地球·拜科努尔港：食物换科技点，2 级航程',
  },
  {
    id: 'v31r060',
    dest: '地球·肯尼迪港',
    give: { steel: 50 },
    get: { uranium: 30 },
    dist: 5,
    baseProfit: 73,
    fee: 7,
    risk: 0.08,
    desc: '地球·肯尼迪港：钢材换铀矿，5 级航程',
  },
  {
    id: 'v31r061',
    dest: '地球·法属圭亚那港',
    give: { rare: 10 },
    get: { he3: 5 },
    dist: 2,
    baseProfit: 80,
    fee: 8,
    risk: 0.1,
    desc: '地球·法属圭亚那港：稀土换氦-3，2 级航程',
  },
  {
    id: 'v31r062',
    dest: '火星·埃律西昂',
    give: { tech: 20 },
    get: { power: 10 },
    dist: 4,
    baseProfit: 87,
    fee: 9,
    risk: 0.12,
    desc: '火星·埃律西昂：科技点换电力，4 级航程',
  },
  {
    id: 'v31r063',
    dest: '火星·奥林匹斯',
    give: { uranium: 30 },
    get: { credits: 15 },
    dist: 3,
    baseProfit: 94,
    fee: 10,
    risk: 0.14,
    desc: '火星·奥林匹斯：铀矿换信用点，3 级航程',
  },
  {
    id: 'v31r064',
    dest: '火星·水手谷',
    give: { he3: 40 },
    get: { iron: 20 },
    dist: 4,
    baseProfit: 101,
    fee: 2,
    risk: 0.02,
    desc: '火星·水手谷：氦-3换铁矿，4 级航程',
  },
  {
    id: 'v31r065',
    dest: '火星·极冠站',
    give: { power: 50 },
    get: { ice: 25 },
    dist: 1,
    baseProfit: 108,
    fee: 3,
    risk: 0.04,
    desc: '火星·极冠站：电力换冰水，1 级航程',
  },
  {
    id: 'v31r066',
    dest: '火星·子午高原',
    give: { credits: 10 },
    get: { water: 30 },
    dist: 3,
    baseProfit: 115,
    fee: 4,
    risk: 0.06,
    desc: '火星·子午高原：信用点换水，3 级航程',
  },
  {
    id: 'v31r067',
    dest: '火星·塔尔西斯',
    give: { iron: 20 },
    get: { food: 5 },
    dist: 5,
    baseProfit: 122,
    fee: 5,
    risk: 0.08,
    desc: '火星·塔尔西斯：铁矿换食物，5 级航程',
  },
  {
    id: 'v31r068',
    dest: '火星·希腊平原',
    give: { ice: 30 },
    get: { steel: 10 },
    dist: 1,
    baseProfit: 129,
    fee: 6,
    risk: 0.1,
    desc: '火星·希腊平原：冰水换钢材，1 级航程',
  },
  {
    id: 'v31r069',
    dest: '轨道·凤凰站',
    give: { water: 40 },
    get: { rare: 15 },
    dist: 3,
    baseProfit: 136,
    fee: 7,
    risk: 0.12,
    desc: '轨道·凤凰站：水换稀土，3 级航程',
  },
  {
    id: 'v31r070',
    dest: '轨道·天宫环',
    give: { food: 50 },
    get: { tech: 20 },
    dist: 2,
    baseProfit: 143,
    fee: 8,
    risk: 0.14,
    desc: '轨道·天宫环：食物换科技点，2 级航程',
  },
  {
    id: 'v31r071',
    dest: '轨道·曙光坞',
    give: { steel: 10 },
    get: { uranium: 25 },
    dist: 5,
    baseProfit: 150,
    fee: 9,
    risk: 0.02,
    desc: '轨道·曙光坞：钢材换铀矿，5 级航程',
  },
  {
    id: 'v31r072',
    dest: '月球·静海基地',
    give: { rare: 20 },
    get: { he3: 30 },
    dist: 5,
    baseProfit: 157,
    fee: 10,
    risk: 0.04,
    desc: '月球·静海基地：稀土换氦-3，5 级航程',
  },
  {
    id: 'v31r073',
    dest: '月球·雨海基地',
    give: { tech: 30 },
    get: { power: 5 },
    dist: 1,
    baseProfit: 164,
    fee: 2,
    risk: 0.06,
    desc: '月球·雨海基地：科技点换电力，1 级航程',
  },
  {
    id: 'v31r074',
    dest: '月球·第谷站',
    give: { uranium: 40 },
    get: { credits: 10 },
    dist: 1,
    baseProfit: 171,
    fee: 3,
    risk: 0.08,
    desc: '月球·第谷站：铀矿换信用点，1 级航程',
  },
  {
    id: 'v31r075',
    dest: '小行星·谷神星',
    give: { he3: 50 },
    get: { iron: 15 },
    dist: 5,
    baseProfit: 178,
    fee: 4,
    risk: 0.1,
    desc: '小行星·谷神星：氦-3换铁矿，5 级航程',
  },
  {
    id: 'v31r076',
    dest: '小行星·灶神星',
    give: { power: 10 },
    get: { ice: 20 },
    dist: 2,
    baseProfit: 185,
    fee: 5,
    risk: 0.12,
    desc: '小行星·灶神星：电力换冰水，2 级航程',
  },
  {
    id: 'v31r077',
    dest: '小行星·婚神星',
    give: { credits: 20 },
    get: { water: 25 },
    dist: 1,
    baseProfit: 192,
    fee: 6,
    risk: 0.14,
    desc: '小行星·婚神星：信用点换水，1 级航程',
  },
  {
    id: 'v31r078',
    dest: '木卫二·冰海站',
    give: { iron: 30 },
    get: { food: 30 },
    dist: 4,
    baseProfit: 199,
    fee: 7,
    risk: 0.02,
    desc: '木卫二·冰海站：铁矿换食物，4 级航程',
  },
  {
    id: 'v31r079',
    dest: '土卫六·甲烷港',
    give: { ice: 40 },
    get: { steel: 5 },
    dist: 5,
    baseProfit: 26,
    fee: 8,
    risk: 0.04,
    desc: '土卫六·甲烷港：冰水换钢材，5 级航程',
  },
  {
    id: 'v31r080',
    dest: '金星·晨星云城',
    give: { water: 50 },
    get: { rare: 10 },
    dist: 2,
    baseProfit: 33,
    fee: 9,
    risk: 0.06,
    desc: '金星·晨星云城：水换稀土，2 级航程',
  },
  {
    id: 'v31r081',
    dest: '火卫一· stickney 站',
    give: { food: 10 },
    get: { tech: 15 },
    dist: 3,
    baseProfit: 40,
    fee: 10,
    risk: 0.08,
    desc: '火卫一· stickney 站：食物换科技点，3 级航程',
  },
  {
    id: 'v31r082',
    dest: '火卫二·环形坞',
    give: { steel: 20 },
    get: { uranium: 20 },
    dist: 4,
    baseProfit: 47,
    fee: 2,
    risk: 0.1,
    desc: '火卫二·环形坞：钢材换铀矿，4 级航程',
  },
  {
    id: 'v31r083',
    dest: '拉格朗日·L4 集市',
    give: { rare: 30 },
    get: { he3: 25 },
    dist: 3,
    baseProfit: 54,
    fee: 3,
    risk: 0.12,
    desc: '拉格朗日·L4 集市：稀土换氦-3，3 级航程',
  },
  {
    id: 'v31r084',
    dest: '拉格朗日·L5 集市',
    give: { tech: 40 },
    get: { power: 30 },
    dist: 4,
    baseProfit: 61,
    fee: 4,
    risk: 0.14,
    desc: '拉格朗日·L5 集市：科技点换电力，4 级航程',
  },
  {
    id: 'v31r085',
    dest: '地球·休斯敦港',
    give: { uranium: 50 },
    get: { credits: 5 },
    dist: 1,
    baseProfit: 68,
    fee: 5,
    risk: 0.02,
    desc: '地球·休斯敦港：铀矿换信用点，1 级航程',
  },
  {
    id: 'v31r086',
    dest: '地球·酒泉港',
    give: { he3: 10 },
    get: { iron: 10 },
    dist: 3,
    baseProfit: 75,
    fee: 6,
    risk: 0.04,
    desc: '地球·酒泉港：氦-3换铁矿，3 级航程',
  },
  {
    id: 'v31r087',
    dest: '地球·拜科努尔港',
    give: { power: 20 },
    get: { ice: 15 },
    dist: 4,
    baseProfit: 82,
    fee: 7,
    risk: 0.06,
    desc: '地球·拜科努尔港：电力换冰水，4 级航程',
  },
  {
    id: 'v31r088',
    dest: '地球·肯尼迪港',
    give: { credits: 30 },
    get: { water: 20 },
    dist: 1,
    baseProfit: 89,
    fee: 8,
    risk: 0.08,
    desc: '地球·肯尼迪港：信用点换水，1 级航程',
  },
  {
    id: 'v31r089',
    dest: '地球·法属圭亚那港',
    give: { iron: 40 },
    get: { food: 25 },
    dist: 3,
    baseProfit: 96,
    fee: 9,
    risk: 0.1,
    desc: '地球·法属圭亚那港：铁矿换食物，3 级航程',
  },
  {
    id: 'v31r090',
    dest: '火星·埃律西昂',
    give: { ice: 50 },
    get: { steel: 30 },
    dist: 5,
    baseProfit: 103,
    fee: 10,
    risk: 0.12,
    desc: '火星·埃律西昂：冰水换钢材，5 级航程',
  },
  {
    id: 'v31r091',
    dest: '火星·奥林匹斯',
    give: { water: 10 },
    get: { rare: 5 },
    dist: 1,
    baseProfit: 110,
    fee: 2,
    risk: 0.14,
    desc: '火星·奥林匹斯：水换稀土，1 级航程',
  },
  {
    id: 'v31r092',
    dest: '火星·水手谷',
    give: { food: 20 },
    get: { tech: 10 },
    dist: 1,
    baseProfit: 117,
    fee: 3,
    risk: 0.02,
    desc: '火星·水手谷：食物换科技点，1 级航程',
  },
  {
    id: 'v31r093',
    dest: '火星·极冠站',
    give: { steel: 30 },
    get: { uranium: 15 },
    dist: 3,
    baseProfit: 124,
    fee: 4,
    risk: 0.04,
    desc: '火星·极冠站：钢材换铀矿，3 级航程',
  },
  {
    id: 'v31r094',
    dest: '火星·子午高原',
    give: { rare: 40 },
    get: { he3: 20 },
    dist: 4,
    baseProfit: 131,
    fee: 5,
    risk: 0.06,
    desc: '火星·子午高原：稀土换氦-3，4 级航程',
  },
  {
    id: 'v31r095',
    dest: '火星·塔尔西斯',
    give: { tech: 50 },
    get: { power: 25 },
    dist: 5,
    baseProfit: 138,
    fee: 6,
    risk: 0.08,
    desc: '火星·塔尔西斯：科技点换电力，5 级航程',
  },
  {
    id: 'v31r096',
    dest: '火星·希腊平原',
    give: { uranium: 10 },
    get: { credits: 30 },
    dist: 4,
    baseProfit: 145,
    fee: 7,
    risk: 0.1,
    desc: '火星·希腊平原：铀矿换信用点，4 级航程',
  },
  {
    id: 'v31r097',
    dest: '轨道·凤凰站',
    give: { he3: 20 },
    get: { iron: 5 },
    dist: 2,
    baseProfit: 152,
    fee: 8,
    risk: 0.12,
    desc: '轨道·凤凰站：氦-3换铁矿，2 级航程',
  },
  {
    id: 'v31r098',
    dest: '轨道·天宫环',
    give: { power: 30 },
    get: { ice: 10 },
    dist: 3,
    baseProfit: 159,
    fee: 9,
    risk: 0.14,
    desc: '轨道·天宫环：电力换冰水，3 级航程',
  },
  {
    id: 'v31r099',
    dest: '轨道·曙光坞',
    give: { credits: 40 },
    get: { water: 15 },
    dist: 3,
    baseProfit: 166,
    fee: 10,
    risk: 0.02,
    desc: '轨道·曙光坞：信用点换水，3 级航程',
  },
  {
    id: 'v31r100',
    dest: '月球·静海基地',
    give: { iron: 50 },
    get: { food: 20 },
    dist: 1,
    baseProfit: 173,
    fee: 2,
    risk: 0.04,
    desc: '月球·静海基地：铁矿换食物，1 级航程',
  },
  {
    id: 'v31r101',
    dest: '月球·雨海基地',
    give: { ice: 10 },
    get: { steel: 25 },
    dist: 3,
    baseProfit: 180,
    fee: 3,
    risk: 0.06,
    desc: '月球·雨海基地：冰水换钢材，3 级航程',
  },
  {
    id: 'v31r102',
    dest: '月球·第谷站',
    give: { water: 20 },
    get: { rare: 30 },
    dist: 5,
    baseProfit: 187,
    fee: 4,
    risk: 0.08,
    desc: '月球·第谷站：水换稀土，5 级航程',
  },
  {
    id: 'v31r103',
    dest: '小行星·谷神星',
    give: { food: 30 },
    get: { tech: 5 },
    dist: 5,
    baseProfit: 194,
    fee: 5,
    risk: 0.1,
    desc: '小行星·谷神星：食物换科技点，5 级航程',
  },
  {
    id: 'v31r104',
    dest: '小行星·灶神星',
    give: { steel: 40 },
    get: { uranium: 10 },
    dist: 5,
    baseProfit: 21,
    fee: 6,
    risk: 0.12,
    desc: '小行星·灶神星：钢材换铀矿，5 级航程',
  },
  {
    id: 'v31r105',
    dest: '小行星·婚神星',
    give: { rare: 50 },
    get: { he3: 15 },
    dist: 3,
    baseProfit: 28,
    fee: 7,
    risk: 0.14,
    desc: '小行星·婚神星：稀土换氦-3，3 级航程',
  },
  {
    id: 'v31r106',
    dest: '木卫二·冰海站',
    give: { tech: 10 },
    get: { power: 20 },
    dist: 4,
    baseProfit: 35,
    fee: 8,
    risk: 0.02,
    desc: '木卫二·冰海站：科技点换电力，4 级航程',
  },
  {
    id: 'v31r107',
    dest: '土卫六·甲烷港',
    give: { uranium: 20 },
    get: { credits: 25 },
    dist: 1,
    baseProfit: 42,
    fee: 9,
    risk: 0.04,
    desc: '土卫六·甲烷港：铀矿换信用点，1 级航程',
  },
  {
    id: 'v31r108',
    dest: '金星·晨星云城',
    give: { he3: 30 },
    get: { iron: 30 },
    dist: 5,
    baseProfit: 49,
    fee: 10,
    risk: 0.06,
    desc: '金星·晨星云城：氦-3换铁矿，5 级航程',
  },
  {
    id: 'v31r109',
    dest: '火卫一· stickney 站',
    give: { power: 40 },
    get: { ice: 5 },
    dist: 1,
    baseProfit: 56,
    fee: 2,
    risk: 0.08,
    desc: '火卫一· stickney 站：电力换冰水，1 级航程',
  },
  {
    id: 'v31r110',
    dest: '火卫二·环形坞',
    give: { credits: 50 },
    get: { water: 10 },
    dist: 1,
    baseProfit: 63,
    fee: 3,
    risk: 0.1,
    desc: '火卫二·环形坞：信用点换水，1 级航程',
  },
  {
    id: 'v31r111',
    dest: '拉格朗日·L4 集市',
    give: { iron: 10 },
    get: { food: 15 },
    dist: 2,
    baseProfit: 70,
    fee: 4,
    risk: 0.12,
    desc: '拉格朗日·L4 集市：铁矿换食物，2 级航程',
  },
  {
    id: 'v31r112',
    dest: '拉格朗日·L5 集市',
    give: { ice: 20 },
    get: { steel: 20 },
    dist: 1,
    baseProfit: 77,
    fee: 5,
    risk: 0.14,
    desc: '拉格朗日·L5 集市：冰水换钢材，1 级航程',
  },
  {
    id: 'v31r113',
    dest: '地球·休斯敦港',
    give: { water: 30 },
    get: { rare: 25 },
    dist: 1,
    baseProfit: 84,
    fee: 6,
    risk: 0.02,
    desc: '地球·休斯敦港：水换稀土，1 级航程',
  },
  {
    id: 'v31r114',
    dest: '地球·酒泉港',
    give: { food: 40 },
    get: { tech: 30 },
    dist: 5,
    baseProfit: 91,
    fee: 7,
    risk: 0.04,
    desc: '地球·酒泉港：食物换科技点，5 级航程',
  },
  {
    id: 'v31r115',
    dest: '地球·拜科努尔港',
    give: { steel: 50 },
    get: { uranium: 5 },
    dist: 1,
    baseProfit: 98,
    fee: 8,
    risk: 0.06,
    desc: '地球·拜科努尔港：钢材换铀矿，1 级航程',
  },
  {
    id: 'v31r116',
    dest: '地球·肯尼迪港',
    give: { rare: 10 },
    get: { he3: 10 },
    dist: 3,
    baseProfit: 105,
    fee: 9,
    risk: 0.08,
    desc: '地球·肯尼迪港：稀土换氦-3，3 级航程',
  },
  {
    id: 'v31r117',
    dest: '地球·法属圭亚那港',
    give: { tech: 20 },
    get: { power: 15 },
    dist: 3,
    baseProfit: 112,
    fee: 10,
    risk: 0.1,
    desc: '地球·法属圭亚那港：科技点换电力，3 级航程',
  },
  {
    id: 'v31r118',
    dest: '火星·埃律西昂',
    give: { uranium: 30 },
    get: { credits: 20 },
    dist: 3,
    baseProfit: 119,
    fee: 2,
    risk: 0.12,
    desc: '火星·埃律西昂：铀矿换信用点，3 级航程',
  },
  {
    id: 'v31r119',
    dest: '火星·奥林匹斯',
    give: { he3: 40 },
    get: { iron: 25 },
    dist: 2,
    baseProfit: 126,
    fee: 3,
    risk: 0.14,
    desc: '火星·奥林匹斯：氦-3换铁矿，2 级航程',
  },
  {
    id: 'v31r120',
    dest: '火星·水手谷',
    give: { power: 50 },
    get: { ice: 30 },
    dist: 3,
    baseProfit: 133,
    fee: 4,
    risk: 0.02,
    desc: '火星·水手谷：电力换冰水，3 级航程',
  },
  {
    id: 'v31r121',
    dest: '火星·极冠站',
    give: { credits: 10 },
    get: { water: 5 },
    dist: 3,
    baseProfit: 140,
    fee: 5,
    risk: 0.04,
    desc: '火星·极冠站：信用点换水，3 级航程',
  },
  {
    id: 'v31r122',
    dest: '火星·子午高原',
    give: { iron: 20 },
    get: { food: 10 },
    dist: 3,
    baseProfit: 147,
    fee: 6,
    risk: 0.06,
    desc: '火星·子午高原：铁矿换食物，3 级航程',
  },
  {
    id: 'v31r123',
    dest: '火星·塔尔西斯',
    give: { ice: 30 },
    get: { steel: 15 },
    dist: 1,
    baseProfit: 154,
    fee: 7,
    risk: 0.08,
    desc: '火星·塔尔西斯：冰水换钢材，1 级航程',
  },
  {
    id: 'v31r124',
    dest: '火星·希腊平原',
    give: { water: 40 },
    get: { rare: 20 },
    dist: 3,
    baseProfit: 161,
    fee: 8,
    risk: 0.1,
    desc: '火星·希腊平原：水换稀土，3 级航程',
  },
  {
    id: 'v31r125',
    dest: '轨道·凤凰站',
    give: { food: 50 },
    get: { tech: 25 },
    dist: 5,
    baseProfit: 168,
    fee: 9,
    risk: 0.12,
    desc: '轨道·凤凰站：食物换科技点，5 级航程',
  },
  {
    id: 'v31r126',
    dest: '轨道·天宫环',
    give: { steel: 10 },
    get: { uranium: 30 },
    dist: 5,
    baseProfit: 175,
    fee: 10,
    risk: 0.14,
    desc: '轨道·天宫环：钢材换铀矿，5 级航程',
  },
  {
    id: 'v31r127',
    dest: '轨道·曙光坞',
    give: { rare: 20 },
    get: { he3: 5 },
    dist: 3,
    baseProfit: 182,
    fee: 2,
    risk: 0.02,
    desc: '轨道·曙光坞：稀土换氦-3，3 级航程',
  },
  {
    id: 'v31r128',
    dest: '月球·静海基地',
    give: { tech: 30 },
    get: { power: 10 },
    dist: 2,
    baseProfit: 189,
    fee: 3,
    risk: 0.04,
    desc: '月球·静海基地：科技点换电力，2 级航程',
  },
  {
    id: 'v31r129',
    dest: '月球·雨海基地',
    give: { uranium: 40 },
    get: { credits: 15 },
    dist: 5,
    baseProfit: 196,
    fee: 4,
    risk: 0.06,
    desc: '月球·雨海基地：铀矿换信用点，5 级航程',
  },
  {
    id: 'v31r130',
    dest: '月球·第谷站',
    give: { he3: 50 },
    get: { iron: 20 },
    dist: 5,
    baseProfit: 23,
    fee: 5,
    risk: 0.08,
    desc: '月球·第谷站：氦-3换铁矿，5 级航程',
  },
  {
    id: 'v31r131',
    dest: '小行星·谷神星',
    give: { power: 10 },
    get: { ice: 25 },
    dist: 2,
    baseProfit: 30,
    fee: 6,
    risk: 0.1,
    desc: '小行星·谷神星：电力换冰水，2 级航程',
  },
  {
    id: 'v31r132',
    dest: '小行星·灶神星',
    give: { credits: 20 },
    get: { water: 30 },
    dist: 5,
    baseProfit: 37,
    fee: 7,
    risk: 0.12,
    desc: '小行星·灶神星：信用点换水，5 级航程',
  },
  {
    id: 'v31r133',
    dest: '小行星·婚神星',
    give: { iron: 30 },
    get: { food: 5 },
    dist: 5,
    baseProfit: 44,
    fee: 8,
    risk: 0.14,
    desc: '小行星·婚神星：铁矿换食物，5 级航程',
  },
  {
    id: 'v31r134',
    dest: '木卫二·冰海站',
    give: { ice: 40 },
    get: { steel: 10 },
    dist: 3,
    baseProfit: 51,
    fee: 9,
    risk: 0.02,
    desc: '木卫二·冰海站：冰水换钢材，3 级航程',
  },
  {
    id: 'v31r135',
    dest: '土卫六·甲烷港',
    give: { water: 50 },
    get: { rare: 15 },
    dist: 1,
    baseProfit: 58,
    fee: 10,
    risk: 0.04,
    desc: '土卫六·甲烷港：水换稀土，1 级航程',
  },
  {
    id: 'v31r136',
    dest: '金星·晨星云城',
    give: { food: 10 },
    get: { tech: 20 },
    dist: 5,
    baseProfit: 65,
    fee: 2,
    risk: 0.06,
    desc: '金星·晨星云城：食物换科技点，5 级航程',
  },
  {
    id: 'v31r137',
    dest: '火卫一· stickney 站',
    give: { steel: 20 },
    get: { uranium: 25 },
    dist: 2,
    baseProfit: 72,
    fee: 3,
    risk: 0.08,
    desc: '火卫一· stickney 站：钢材换铀矿，2 级航程',
  },
  {
    id: 'v31r138',
    dest: '火卫二·环形坞',
    give: { rare: 30 },
    get: { he3: 30 },
    dist: 3,
    baseProfit: 79,
    fee: 4,
    risk: 0.1,
    desc: '火卫二·环形坞：稀土换氦-3，3 级航程',
  },
  {
    id: 'v31r139',
    dest: '拉格朗日·L4 集市',
    give: { tech: 40 },
    get: { power: 5 },
    dist: 2,
    baseProfit: 86,
    fee: 5,
    risk: 0.12,
    desc: '拉格朗日·L4 集市：科技点换电力，2 级航程',
  },
  {
    id: 'v31r140',
    dest: '拉格朗日·L5 集市',
    give: { uranium: 50 },
    get: { credits: 10 },
    dist: 5,
    baseProfit: 93,
    fee: 6,
    risk: 0.14,
    desc: '拉格朗日·L5 集市：铀矿换信用点，5 级航程',
  },
  {
    id: 'v31r141',
    dest: '地球·休斯敦港',
    give: { he3: 10 },
    get: { iron: 15 },
    dist: 3,
    baseProfit: 100,
    fee: 7,
    risk: 0.02,
    desc: '地球·休斯敦港：氦-3换铁矿，3 级航程',
  },
  {
    id: 'v31r142',
    dest: '地球·酒泉港',
    give: { power: 20 },
    get: { ice: 20 },
    dist: 1,
    baseProfit: 107,
    fee: 8,
    risk: 0.04,
    desc: '地球·酒泉港：电力换冰水，1 级航程',
  },
  {
    id: 'v31r143',
    dest: '地球·拜科努尔港',
    give: { credits: 30 },
    get: { water: 25 },
    dist: 5,
    baseProfit: 114,
    fee: 9,
    risk: 0.06,
    desc: '地球·拜科努尔港：信用点换水，5 级航程',
  },
  {
    id: 'v31r144',
    dest: '地球·肯尼迪港',
    give: { iron: 40 },
    get: { food: 30 },
    dist: 4,
    baseProfit: 121,
    fee: 10,
    risk: 0.08,
    desc: '地球·肯尼迪港：铁矿换食物，4 级航程',
  },
  {
    id: 'v31r145',
    dest: '地球·法属圭亚那港',
    give: { ice: 50 },
    get: { steel: 5 },
    dist: 1,
    baseProfit: 128,
    fee: 2,
    risk: 0.1,
    desc: '地球·法属圭亚那港：冰水换钢材，1 级航程',
  },
  {
    id: 'v31r146',
    dest: '火星·埃律西昂',
    give: { water: 10 },
    get: { rare: 10 },
    dist: 3,
    baseProfit: 135,
    fee: 3,
    risk: 0.12,
    desc: '火星·埃律西昂：水换稀土，3 级航程',
  },
  {
    id: 'v31r147',
    dest: '火星·奥林匹斯',
    give: { food: 20 },
    get: { tech: 15 },
    dist: 2,
    baseProfit: 142,
    fee: 4,
    risk: 0.14,
    desc: '火星·奥林匹斯：食物换科技点，2 级航程',
  },
  {
    id: 'v31r148',
    dest: '火星·水手谷',
    give: { steel: 30 },
    get: { uranium: 20 },
    dist: 4,
    baseProfit: 149,
    fee: 5,
    risk: 0.02,
    desc: '火星·水手谷：钢材换铀矿，4 级航程',
  },
  {
    id: 'v31r149',
    dest: '火星·极冠站',
    give: { rare: 40 },
    get: { he3: 25 },
    dist: 5,
    baseProfit: 156,
    fee: 6,
    risk: 0.04,
    desc: '火星·极冠站：稀土换氦-3，5 级航程',
  },
  {
    id: 'v31r150',
    dest: '火星·子午高原',
    give: { tech: 50 },
    get: { power: 30 },
    dist: 2,
    baseProfit: 163,
    fee: 7,
    risk: 0.06,
    desc: '火星·子午高原：科技点换电力，2 级航程',
  },
  {
    id: 'v31r151',
    dest: '火星·塔尔西斯',
    give: { uranium: 10 },
    get: { credits: 5 },
    dist: 4,
    baseProfit: 170,
    fee: 8,
    risk: 0.08,
    desc: '火星·塔尔西斯：铀矿换信用点，4 级航程',
  },
  {
    id: 'v31r152',
    dest: '火星·希腊平原',
    give: { he3: 20 },
    get: { iron: 10 },
    dist: 4,
    baseProfit: 177,
    fee: 9,
    risk: 0.1,
    desc: '火星·希腊平原：氦-3换铁矿，4 级航程',
  },
  {
    id: 'v31r153',
    dest: '轨道·凤凰站',
    give: { power: 30 },
    get: { ice: 15 },
    dist: 3,
    baseProfit: 184,
    fee: 10,
    risk: 0.12,
    desc: '轨道·凤凰站：电力换冰水，3 级航程',
  },
  {
    id: 'v31r154',
    dest: '轨道·天宫环',
    give: { credits: 40 },
    get: { water: 20 },
    dist: 1,
    baseProfit: 191,
    fee: 2,
    risk: 0.14,
    desc: '轨道·天宫环：信用点换水，1 级航程',
  },
  {
    id: 'v31r155',
    dest: '轨道·曙光坞',
    give: { iron: 50 },
    get: { food: 25 },
    dist: 1,
    baseProfit: 198,
    fee: 3,
    risk: 0.02,
    desc: '轨道·曙光坞：铁矿换食物，1 级航程',
  },
  {
    id: 'v31r156',
    dest: '月球·静海基地',
    give: { ice: 10 },
    get: { steel: 30 },
    dist: 5,
    baseProfit: 25,
    fee: 4,
    risk: 0.04,
    desc: '月球·静海基地：冰水换钢材，5 级航程',
  },
  {
    id: 'v31r157',
    dest: '月球·雨海基地',
    give: { water: 20 },
    get: { rare: 5 },
    dist: 3,
    baseProfit: 32,
    fee: 5,
    risk: 0.06,
    desc: '月球·雨海基地：水换稀土，3 级航程',
  },
  {
    id: 'v31r158',
    dest: '月球·第谷站',
    give: { food: 30 },
    get: { tech: 10 },
    dist: 2,
    baseProfit: 39,
    fee: 6,
    risk: 0.08,
    desc: '月球·第谷站：食物换科技点，2 级航程',
  },
  {
    id: 'v31r159',
    dest: '小行星·谷神星',
    give: { steel: 40 },
    get: { uranium: 15 },
    dist: 1,
    baseProfit: 46,
    fee: 7,
    risk: 0.1,
    desc: '小行星·谷神星：钢材换铀矿，1 级航程',
  },
  {
    id: 'v31r160',
    dest: '小行星·灶神星',
    give: { rare: 50 },
    get: { he3: 20 },
    dist: 4,
    baseProfit: 53,
    fee: 8,
    risk: 0.12,
    desc: '小行星·灶神星：稀土换氦-3，4 级航程',
  },
  {
    id: 'v31r161',
    dest: '小行星·婚神星',
    give: { tech: 10 },
    get: { power: 25 },
    dist: 3,
    baseProfit: 60,
    fee: 9,
    risk: 0.14,
    desc: '小行星·婚神星：科技点换电力，3 级航程',
  },
  {
    id: 'v31r162',
    dest: '木卫二·冰海站',
    give: { uranium: 20 },
    get: { credits: 30 },
    dist: 5,
    baseProfit: 67,
    fee: 10,
    risk: 0.02,
    desc: '木卫二·冰海站：铀矿换信用点，5 级航程',
  },
  {
    id: 'v31r163',
    dest: '土卫六·甲烷港',
    give: { he3: 30 },
    get: { iron: 5 },
    dist: 1,
    baseProfit: 74,
    fee: 2,
    risk: 0.04,
    desc: '土卫六·甲烷港：氦-3换铁矿，1 级航程',
  },
  {
    id: 'v31r164',
    dest: '金星·晨星云城',
    give: { power: 40 },
    get: { ice: 10 },
    dist: 4,
    baseProfit: 81,
    fee: 3,
    risk: 0.06,
    desc: '金星·晨星云城：电力换冰水，4 级航程',
  },
  {
    id: 'v31r165',
    dest: '火卫一· stickney 站',
    give: { credits: 50 },
    get: { water: 15 },
    dist: 4,
    baseProfit: 88,
    fee: 4,
    risk: 0.08,
    desc: '火卫一· stickney 站：信用点换水，4 级航程',
  },
  {
    id: 'v31r166',
    dest: '火卫二·环形坞',
    give: { iron: 10 },
    get: { food: 20 },
    dist: 5,
    baseProfit: 95,
    fee: 5,
    risk: 0.1,
    desc: '火卫二·环形坞：铁矿换食物，5 级航程',
  },
  {
    id: 'v31r167',
    dest: '拉格朗日·L4 集市',
    give: { ice: 20 },
    get: { steel: 25 },
    dist: 2,
    baseProfit: 102,
    fee: 6,
    risk: 0.12,
    desc: '拉格朗日·L4 集市：冰水换钢材，2 级航程',
  },
  {
    id: 'v31r168',
    dest: '拉格朗日·L5 集市',
    give: { water: 30 },
    get: { rare: 30 },
    dist: 2,
    baseProfit: 109,
    fee: 7,
    risk: 0.14,
    desc: '拉格朗日·L5 集市：水换稀土，2 级航程',
  },
  {
    id: 'v31r169',
    dest: '地球·休斯敦港',
    give: { food: 40 },
    get: { tech: 5 },
    dist: 4,
    baseProfit: 116,
    fee: 8,
    risk: 0.02,
    desc: '地球·休斯敦港：食物换科技点，4 级航程',
  },
  {
    id: 'v31r170',
    dest: '地球·酒泉港',
    give: { steel: 50 },
    get: { uranium: 10 },
    dist: 2,
    baseProfit: 123,
    fee: 9,
    risk: 0.04,
    desc: '地球·酒泉港：钢材换铀矿，2 级航程',
  },
  {
    id: 'v31r171',
    dest: '地球·拜科努尔港',
    give: { rare: 10 },
    get: { he3: 15 },
    dist: 2,
    baseProfit: 130,
    fee: 10,
    risk: 0.06,
    desc: '地球·拜科努尔港：稀土换氦-3，2 级航程',
  },
  {
    id: 'v31r172',
    dest: '地球·肯尼迪港',
    give: { tech: 20 },
    get: { power: 20 },
    dist: 2,
    baseProfit: 137,
    fee: 2,
    risk: 0.08,
    desc: '地球·肯尼迪港：科技点换电力，2 级航程',
  },
  {
    id: 'v31r173',
    dest: '地球·法属圭亚那港',
    give: { uranium: 30 },
    get: { credits: 25 },
    dist: 3,
    baseProfit: 144,
    fee: 3,
    risk: 0.1,
    desc: '地球·法属圭亚那港：铀矿换信用点，3 级航程',
  },
  {
    id: 'v31r174',
    dest: '火星·埃律西昂',
    give: { he3: 40 },
    get: { iron: 30 },
    dist: 2,
    baseProfit: 151,
    fee: 4,
    risk: 0.12,
    desc: '火星·埃律西昂：氦-3换铁矿，2 级航程',
  },
  {
    id: 'v31r175',
    dest: '火星·奥林匹斯',
    give: { power: 50 },
    get: { ice: 5 },
    dist: 4,
    baseProfit: 158,
    fee: 5,
    risk: 0.14,
    desc: '火星·奥林匹斯：电力换冰水，4 级航程',
  },
  {
    id: 'v31r176',
    dest: '火星·水手谷',
    give: { credits: 10 },
    get: { water: 10 },
    dist: 4,
    baseProfit: 165,
    fee: 6,
    risk: 0.02,
    desc: '火星·水手谷：信用点换水，4 级航程',
  },
  {
    id: 'v31r177',
    dest: '火星·极冠站',
    give: { iron: 20 },
    get: { food: 15 },
    dist: 5,
    baseProfit: 172,
    fee: 7,
    risk: 0.04,
    desc: '火星·极冠站：铁矿换食物，5 级航程',
  },
  {
    id: 'v31r178',
    dest: '火星·子午高原',
    give: { ice: 30 },
    get: { steel: 20 },
    dist: 4,
    baseProfit: 179,
    fee: 8,
    risk: 0.06,
    desc: '火星·子午高原：冰水换钢材，4 级航程',
  },
  {
    id: 'v31r179',
    dest: '火星·塔尔西斯',
    give: { water: 40 },
    get: { rare: 25 },
    dist: 2,
    baseProfit: 186,
    fee: 9,
    risk: 0.08,
    desc: '火星·塔尔西斯：水换稀土，2 级航程',
  },
  {
    id: 'v31r180',
    dest: '火星·希腊平原',
    give: { food: 50 },
    get: { tech: 30 },
    dist: 3,
    baseProfit: 193,
    fee: 10,
    risk: 0.1,
    desc: '火星·希腊平原：食物换科技点，3 级航程',
  },
];

var V31_TRADE_GOODS = [
  {
    id: 'v31g01',
    res: 'iron',
    name: '铁矿现货',
    basePrice: 5,
    volume: 20,
    trend: '跌',
    desc: '铁矿市场：基准价 5，今日成交 20 单位',
  },
  {
    id: 'v31g02',
    res: 'ice',
    name: '冰水现货',
    basePrice: 18,
    volume: 49,
    trend: '平',
    desc: '冰水市场：基准价 18，今日成交 49 单位',
  },
  {
    id: 'v31g03',
    res: 'water',
    name: '水现货',
    basePrice: 31,
    volume: 78,
    trend: '跌',
    desc: '水市场：基准价 31，今日成交 78 单位',
  },
  {
    id: 'v31g04',
    res: 'food',
    name: '食物现货',
    basePrice: 44,
    volume: 107,
    trend: '跌',
    desc: '食物市场：基准价 44，今日成交 107 单位',
  },
  {
    id: 'v31g05',
    res: 'steel',
    name: '钢材现货',
    basePrice: 57,
    volume: 136,
    trend: '平',
    desc: '钢材市场：基准价 57，今日成交 136 单位',
  },
  {
    id: 'v31g06',
    res: 'rare',
    name: '稀土现货',
    basePrice: 70,
    volume: 165,
    trend: '跌',
    desc: '稀土市场：基准价 70，今日成交 165 单位',
  },
  {
    id: 'v31g07',
    res: 'tech',
    name: '科技点现货',
    basePrice: 83,
    volume: 194,
    trend: '涨',
    desc: '科技点市场：基准价 83，今日成交 194 单位',
  },
  {
    id: 'v31g08',
    res: 'uranium',
    name: '铀矿现货',
    basePrice: 96,
    volume: 223,
    trend: '涨',
    desc: '铀矿市场：基准价 96，今日成交 223 单位',
  },
  {
    id: 'v31g09',
    res: 'he3',
    name: '氦-3现货',
    basePrice: 14,
    volume: 252,
    trend: '涨',
    desc: '氦-3市场：基准价 14，今日成交 252 单位',
  },
  {
    id: 'v31g10',
    res: 'power',
    name: '电力现货',
    basePrice: 27,
    volume: 281,
    trend: '涨',
    desc: '电力市场：基准价 27，今日成交 281 单位',
  },
  {
    id: 'v31g11',
    res: 'credits',
    name: '信用点现货',
    basePrice: 40,
    volume: 310,
    trend: '平',
    desc: '信用点市场：基准价 40，今日成交 310 单位',
  },
  {
    id: 'v31g12',
    res: 'iron',
    name: '铁矿现货',
    basePrice: 53,
    volume: 339,
    trend: '涨',
    desc: '铁矿市场：基准价 53，今日成交 339 单位',
  },
  {
    id: 'v31g13',
    res: 'ice',
    name: '冰水现货',
    basePrice: 66,
    volume: 368,
    trend: '平',
    desc: '冰水市场：基准价 66，今日成交 368 单位',
  },
  {
    id: 'v31g14',
    res: 'water',
    name: '水现货',
    basePrice: 79,
    volume: 397,
    trend: '涨',
    desc: '水市场：基准价 79，今日成交 397 单位',
  },
  {
    id: 'v31g15',
    res: 'food',
    name: '食物现货',
    basePrice: 92,
    volume: 426,
    trend: '跌',
    desc: '食物市场：基准价 92，今日成交 426 单位',
  },
  {
    id: 'v31g16',
    res: 'steel',
    name: '钢材现货',
    basePrice: 10,
    volume: 455,
    trend: '平',
    desc: '钢材市场：基准价 10，今日成交 455 单位',
  },
  {
    id: 'v31g17',
    res: 'rare',
    name: '稀土现货',
    basePrice: 23,
    volume: 484,
    trend: '跌',
    desc: '稀土市场：基准价 23，今日成交 484 单位',
  },
  {
    id: 'v31g18',
    res: 'tech',
    name: '科技点现货',
    basePrice: 36,
    volume: 33,
    trend: '平',
    desc: '科技点市场：基准价 36，今日成交 33 单位',
  },
  {
    id: 'v31g19',
    res: 'uranium',
    name: '铀矿现货',
    basePrice: 49,
    volume: 62,
    trend: '涨',
    desc: '铀矿市场：基准价 49，今日成交 62 单位',
  },
  {
    id: 'v31g20',
    res: 'he3',
    name: '氦-3现货',
    basePrice: 62,
    volume: 91,
    trend: '涨',
    desc: '氦-3市场：基准价 62，今日成交 91 单位',
  },
  {
    id: 'v31g21',
    res: 'power',
    name: '电力现货',
    basePrice: 75,
    volume: 120,
    trend: '跌',
    desc: '电力市场：基准价 75，今日成交 120 单位',
  },
  {
    id: 'v31g22',
    res: 'credits',
    name: '信用点现货',
    basePrice: 88,
    volume: 149,
    trend: '涨',
    desc: '信用点市场：基准价 88，今日成交 149 单位',
  },
  {
    id: 'v31g23',
    res: 'iron',
    name: '铁矿现货',
    basePrice: 6,
    volume: 178,
    trend: '平',
    desc: '铁矿市场：基准价 6，今日成交 178 单位',
  },
  {
    id: 'v31g24',
    res: 'ice',
    name: '冰水现货',
    basePrice: 19,
    volume: 207,
    trend: '跌',
    desc: '冰水市场：基准价 19，今日成交 207 单位',
  },
  {
    id: 'v31g25',
    res: 'water',
    name: '水现货',
    basePrice: 32,
    volume: 236,
    trend: '平',
    desc: '水市场：基准价 32，今日成交 236 单位',
  },
  {
    id: 'v31g26',
    res: 'food',
    name: '食物现货',
    basePrice: 45,
    volume: 265,
    trend: '平',
    desc: '食物市场：基准价 45，今日成交 265 单位',
  },
  {
    id: 'v31g27',
    res: 'steel',
    name: '钢材现货',
    basePrice: 58,
    volume: 294,
    trend: '涨',
    desc: '钢材市场：基准价 58，今日成交 294 单位',
  },
  {
    id: 'v31g28',
    res: 'rare',
    name: '稀土现货',
    basePrice: 71,
    volume: 323,
    trend: '平',
    desc: '稀土市场：基准价 71，今日成交 323 单位',
  },
  {
    id: 'v31g29',
    res: 'tech',
    name: '科技点现货',
    basePrice: 84,
    volume: 352,
    trend: '平',
    desc: '科技点市场：基准价 84，今日成交 352 单位',
  },
  {
    id: 'v31g30',
    res: 'uranium',
    name: '铀矿现货',
    basePrice: 97,
    volume: 381,
    trend: '涨',
    desc: '铀矿市场：基准价 97，今日成交 381 单位',
  },
  {
    id: 'v31g31',
    res: 'he3',
    name: '氦-3现货',
    basePrice: 15,
    volume: 410,
    trend: '涨',
    desc: '氦-3市场：基准价 15，今日成交 410 单位',
  },
  {
    id: 'v31g32',
    res: 'power',
    name: '电力现货',
    basePrice: 28,
    volume: 439,
    trend: '平',
    desc: '电力市场：基准价 28，今日成交 439 单位',
  },
  {
    id: 'v31g33',
    res: 'credits',
    name: '信用点现货',
    basePrice: 41,
    volume: 468,
    trend: '平',
    desc: '信用点市场：基准价 41，今日成交 468 单位',
  },
  {
    id: 'v31g34',
    res: 'iron',
    name: '铁矿现货',
    basePrice: 54,
    volume: 497,
    trend: '涨',
    desc: '铁矿市场：基准价 54，今日成交 497 单位',
  },
  {
    id: 'v31g35',
    res: 'ice',
    name: '冰水现货',
    basePrice: 67,
    volume: 46,
    trend: '涨',
    desc: '冰水市场：基准价 67，今日成交 46 单位',
  },
  {
    id: 'v31g36',
    res: 'water',
    name: '水现货',
    basePrice: 80,
    volume: 75,
    trend: '涨',
    desc: '水市场：基准价 80，今日成交 75 单位',
  },
  {
    id: 'v31g37',
    res: 'food',
    name: '食物现货',
    basePrice: 93,
    volume: 104,
    trend: '平',
    desc: '食物市场：基准价 93，今日成交 104 单位',
  },
  {
    id: 'v31g38',
    res: 'steel',
    name: '钢材现货',
    basePrice: 11,
    volume: 133,
    trend: '涨',
    desc: '钢材市场：基准价 11，今日成交 133 单位',
  },
  {
    id: 'v31g39',
    res: 'rare',
    name: '稀土现货',
    basePrice: 24,
    volume: 162,
    trend: '平',
    desc: '稀土市场：基准价 24，今日成交 162 单位',
  },
  {
    id: 'v31g40',
    res: 'tech',
    name: '科技点现货',
    basePrice: 37,
    volume: 191,
    trend: '跌',
    desc: '科技点市场：基准价 37，今日成交 191 单位',
  },
  {
    id: 'v31g41',
    res: 'uranium',
    name: '铀矿现货',
    basePrice: 50,
    volume: 220,
    trend: '跌',
    desc: '铀矿市场：基准价 50，今日成交 220 单位',
  },
  {
    id: 'v31g42',
    res: 'he3',
    name: '氦-3现货',
    basePrice: 63,
    volume: 249,
    trend: '平',
    desc: '氦-3市场：基准价 63，今日成交 249 单位',
  },
  {
    id: 'v31g43',
    res: 'power',
    name: '电力现货',
    basePrice: 76,
    volume: 278,
    trend: '跌',
    desc: '电力市场：基准价 76，今日成交 278 单位',
  },
  {
    id: 'v31g44',
    res: 'credits',
    name: '信用点现货',
    basePrice: 89,
    volume: 307,
    trend: '平',
    desc: '信用点市场：基准价 89，今日成交 307 单位',
  },
  {
    id: 'v31g45',
    res: 'iron',
    name: '铁矿现货',
    basePrice: 7,
    volume: 336,
    trend: '跌',
    desc: '铁矿市场：基准价 7，今日成交 336 单位',
  },
  {
    id: 'v31g46',
    res: 'ice',
    name: '冰水现货',
    basePrice: 20,
    volume: 365,
    trend: '跌',
    desc: '冰水市场：基准价 20，今日成交 365 单位',
  },
  {
    id: 'v31g47',
    res: 'water',
    name: '水现货',
    basePrice: 33,
    volume: 394,
    trend: '跌',
    desc: '水市场：基准价 33，今日成交 394 单位',
  },
  {
    id: 'v31g48',
    res: 'food',
    name: '食物现货',
    basePrice: 46,
    volume: 423,
    trend: '涨',
    desc: '食物市场：基准价 46，今日成交 423 单位',
  },
  {
    id: 'v31g49',
    res: 'steel',
    name: '钢材现货',
    basePrice: 59,
    volume: 452,
    trend: '平',
    desc: '钢材市场：基准价 59，今日成交 452 单位',
  },
  {
    id: 'v31g50',
    res: 'rare',
    name: '稀土现货',
    basePrice: 72,
    volume: 481,
    trend: '跌',
    desc: '稀土市场：基准价 72，今日成交 481 单位',
  },
  {
    id: 'v31g51',
    res: 'tech',
    name: '科技点现货',
    basePrice: 85,
    volume: 30,
    trend: '跌',
    desc: '科技点市场：基准价 85，今日成交 30 单位',
  },
  {
    id: 'v31g52',
    res: 'uranium',
    name: '铀矿现货',
    basePrice: 98,
    volume: 59,
    trend: '平',
    desc: '铀矿市场：基准价 98，今日成交 59 单位',
  },
  {
    id: 'v31g53',
    res: 'he3',
    name: '氦-3现货',
    basePrice: 16,
    volume: 88,
    trend: '平',
    desc: '氦-3市场：基准价 16，今日成交 88 单位',
  },
  {
    id: 'v31g54',
    res: 'power',
    name: '电力现货',
    basePrice: 29,
    volume: 117,
    trend: '跌',
    desc: '电力市场：基准价 29，今日成交 117 单位',
  },
  {
    id: 'v31g55',
    res: 'credits',
    name: '信用点现货',
    basePrice: 42,
    volume: 146,
    trend: '跌',
    desc: '信用点市场：基准价 42，今日成交 146 单位',
  },
  {
    id: 'v31g56',
    res: 'iron',
    name: '铁矿现货',
    basePrice: 55,
    volume: 175,
    trend: '涨',
    desc: '铁矿市场：基准价 55，今日成交 175 单位',
  },
  {
    id: 'v31g57',
    res: 'ice',
    name: '冰水现货',
    basePrice: 68,
    volume: 204,
    trend: '涨',
    desc: '冰水市场：基准价 68，今日成交 204 单位',
  },
  {
    id: 'v31g58',
    res: 'water',
    name: '水现货',
    basePrice: 81,
    volume: 233,
    trend: '跌',
    desc: '水市场：基准价 81，今日成交 233 单位',
  },
  {
    id: 'v31g59',
    res: 'food',
    name: '食物现货',
    basePrice: 94,
    volume: 262,
    trend: '跌',
    desc: '食物市场：基准价 94，今日成交 262 单位',
  },
  {
    id: 'v31g60',
    res: 'steel',
    name: '钢材现货',
    basePrice: 12,
    volume: 291,
    trend: '平',
    desc: '钢材市场：基准价 12，今日成交 291 单位',
  },
  {
    id: 'v31g61',
    res: 'rare',
    name: '稀土现货',
    basePrice: 25,
    volume: 320,
    trend: '跌',
    desc: '稀土市场：基准价 25，今日成交 320 单位',
  },
  {
    id: 'v31g62',
    res: 'tech',
    name: '科技点现货',
    basePrice: 38,
    volume: 349,
    trend: '平',
    desc: '科技点市场：基准价 38，今日成交 349 单位',
  },
  {
    id: 'v31g63',
    res: 'uranium',
    name: '铀矿现货',
    basePrice: 51,
    volume: 378,
    trend: '涨',
    desc: '铀矿市场：基准价 51，今日成交 378 单位',
  },
  {
    id: 'v31g64',
    res: 'he3',
    name: '氦-3现货',
    basePrice: 64,
    volume: 407,
    trend: '涨',
    desc: '氦-3市场：基准价 64，今日成交 407 单位',
  },
  {
    id: 'v31g65',
    res: 'power',
    name: '电力现货',
    basePrice: 77,
    volume: 436,
    trend: '平',
    desc: '电力市场：基准价 77，今日成交 436 单位',
  },
  {
    id: 'v31g66',
    res: 'credits',
    name: '信用点现货',
    basePrice: 90,
    volume: 465,
    trend: '平',
    desc: '信用点市场：基准价 90，今日成交 465 单位',
  },
  {
    id: 'v31g67',
    res: 'iron',
    name: '铁矿现货',
    basePrice: 8,
    volume: 494,
    trend: '平',
    desc: '铁矿市场：基准价 8，今日成交 494 单位',
  },
  {
    id: 'v31g68',
    res: 'ice',
    name: '冰水现货',
    basePrice: 21,
    volume: 43,
    trend: '平',
    desc: '冰水市场：基准价 21，今日成交 43 单位',
  },
  {
    id: 'v31g69',
    res: 'water',
    name: '水现货',
    basePrice: 34,
    volume: 72,
    trend: '跌',
    desc: '水市场：基准价 34，今日成交 72 单位',
  },
  {
    id: 'v31g70',
    res: 'food',
    name: '食物现货',
    basePrice: 47,
    volume: 101,
    trend: '跌',
    desc: '食物市场：基准价 47，今日成交 101 单位',
  },
  {
    id: 'v31g71',
    res: 'steel',
    name: '钢材现货',
    basePrice: 60,
    volume: 130,
    trend: '平',
    desc: '钢材市场：基准价 60，今日成交 130 单位',
  },
  {
    id: 'v31g72',
    res: 'rare',
    name: '稀土现货',
    basePrice: 73,
    volume: 159,
    trend: '涨',
    desc: '稀土市场：基准价 73，今日成交 159 单位',
  },
  {
    id: 'v31g73',
    res: 'tech',
    name: '科技点现货',
    basePrice: 86,
    volume: 188,
    trend: '平',
    desc: '科技点市场：基准价 86，今日成交 188 单位',
  },
  {
    id: 'v31g74',
    res: 'uranium',
    name: '铀矿现货',
    basePrice: 99,
    volume: 217,
    trend: '跌',
    desc: '铀矿市场：基准价 99，今日成交 217 单位',
  },
  {
    id: 'v31g75',
    res: 'he3',
    name: '氦-3现货',
    basePrice: 17,
    volume: 246,
    trend: '跌',
    desc: '氦-3市场：基准价 17，今日成交 246 单位',
  },
  {
    id: 'v31g76',
    res: 'power',
    name: '电力现货',
    basePrice: 30,
    volume: 275,
    trend: '平',
    desc: '电力市场：基准价 30，今日成交 275 单位',
  },
];

var V31_TRADE_PARTNERS = [
  {
    id: 'v31p01',
    name: '地球联合贸易署·1 号分部',
    kind: '官方',
    rep: 10,
    bonus: 1.05,
    desc: '官方：声望 10，贸易加成 5%',
  },
  {
    id: 'v31p02',
    name: '火星矿业公会·1 号分部',
    kind: '矿业',
    rep: 21,
    bonus: 1.1,
    desc: '矿业：声望 21，贸易加成 10%',
  },
  {
    id: 'v31p03',
    name: '轨道货运联盟·1 号分部',
    kind: '物流',
    rep: 32,
    bonus: 1.16,
    desc: '物流：声望 32，贸易加成 16%',
  },
  {
    id: 'v31p04',
    name: '小行星采矿合作社·1 号分部',
    kind: '采矿',
    rep: 43,
    bonus: 1.22,
    desc: '采矿：声望 43，贸易加成 22%',
  },
  {
    id: 'v31p05',
    name: '木卫二冰海商会·1 号分部',
    kind: '冰海',
    rep: 54,
    bonus: 1.27,
    desc: '冰海：声望 54，贸易加成 27%',
  },
  {
    id: 'v31p06',
    name: '金星云城商团·1 号分部',
    kind: '云城',
    rep: 65,
    bonus: 1.32,
    desc: '云城：声望 65，贸易加成 32%',
  },
  {
    id: 'v31p07',
    name: '月球静海商会·1 号分部',
    kind: '月球',
    rep: 76,
    bonus: 1.38,
    desc: '月球：声望 76，贸易加成 38%',
  },
  {
    id: 'v31p08',
    name: '拉格朗日自由市·1 号分部',
    kind: '自由市',
    rep: 87,
    bonus: 1.44,
    desc: '自由市：声望 87，贸易加成 44%',
  },
  {
    id: 'v31p09',
    name: '地球联合贸易署·2 号分部',
    kind: '官方',
    rep: 98,
    bonus: 1.49,
    desc: '官方：声望 98，贸易加成 49%',
  },
  {
    id: 'v31p10',
    name: '火星矿业公会·2 号分部',
    kind: '矿业',
    rep: 19,
    bonus: 1.09,
    desc: '矿业：声望 19，贸易加成 10%',
  },
  {
    id: 'v31p11',
    name: '轨道货运联盟·2 号分部',
    kind: '物流',
    rep: 30,
    bonus: 1.15,
    desc: '物流：声望 30，贸易加成 15%',
  },
  {
    id: 'v31p12',
    name: '小行星采矿合作社·2 号分部',
    kind: '采矿',
    rep: 41,
    bonus: 1.21,
    desc: '采矿：声望 41，贸易加成 20%',
  },
  {
    id: 'v31p13',
    name: '木卫二冰海商会·2 号分部',
    kind: '冰海',
    rep: 52,
    bonus: 1.26,
    desc: '冰海：声望 52，贸易加成 26%',
  },
  {
    id: 'v31p14',
    name: '金星云城商团·2 号分部',
    kind: '云城',
    rep: 63,
    bonus: 1.31,
    desc: '云城：声望 63，贸易加成 32%',
  },
  {
    id: 'v31p15',
    name: '月球静海商会·2 号分部',
    kind: '月球',
    rep: 74,
    bonus: 1.37,
    desc: '月球：声望 74，贸易加成 37%',
  },
  {
    id: 'v31p16',
    name: '拉格朗日自由市·2 号分部',
    kind: '自由市',
    rep: 85,
    bonus: 1.43,
    desc: '自由市：声望 85，贸易加成 42%',
  },
  {
    id: 'v31p17',
    name: '地球联合贸易署·3 号分部',
    kind: '官方',
    rep: 96,
    bonus: 1.48,
    desc: '官方：声望 96，贸易加成 48%',
  },
  {
    id: 'v31p18',
    name: '火星矿业公会·3 号分部',
    kind: '矿业',
    rep: 17,
    bonus: 1.08,
    desc: '矿业：声望 17，贸易加成 8%',
  },
  {
    id: 'v31p19',
    name: '轨道货运联盟·3 号分部',
    kind: '物流',
    rep: 28,
    bonus: 1.14,
    desc: '物流：声望 28，贸易加成 14%',
  },
  {
    id: 'v31p20',
    name: '小行星采矿合作社·3 号分部',
    kind: '采矿',
    rep: 39,
    bonus: 1.2,
    desc: '采矿：声望 39，贸易加成 20%',
  },
  {
    id: 'v31p21',
    name: '木卫二冰海商会·3 号分部',
    kind: '冰海',
    rep: 50,
    bonus: 1.25,
    desc: '冰海：声望 50，贸易加成 25%',
  },
  {
    id: 'v31p22',
    name: '金星云城商团·3 号分部',
    kind: '云城',
    rep: 61,
    bonus: 1.3,
    desc: '云城：声望 61，贸易加成 30%',
  },
  {
    id: 'v31p23',
    name: '月球静海商会·3 号分部',
    kind: '月球',
    rep: 72,
    bonus: 1.36,
    desc: '月球：声望 72，贸易加成 36%',
  },
  {
    id: 'v31p24',
    name: '拉格朗日自由市·3 号分部',
    kind: '自由市',
    rep: 83,
    bonus: 1.42,
    desc: '自由市：声望 83，贸易加成 42%',
  },
  {
    id: 'v31p25',
    name: '地球联合贸易署·4 号分部',
    kind: '官方',
    rep: 94,
    bonus: 1.47,
    desc: '官方：声望 94，贸易加成 47%',
  },
  {
    id: 'v31p26',
    name: '火星矿业公会·4 号分部',
    kind: '矿业',
    rep: 15,
    bonus: 1.07,
    desc: '矿业：声望 15，贸易加成 8%',
  },
  {
    id: 'v31p27',
    name: '轨道货运联盟·4 号分部',
    kind: '物流',
    rep: 26,
    bonus: 1.13,
    desc: '物流：声望 26，贸易加成 13%',
  },
  {
    id: 'v31p28',
    name: '小行星采矿合作社·4 号分部',
    kind: '采矿',
    rep: 37,
    bonus: 1.19,
    desc: '采矿：声望 37，贸易加成 18%',
  },
  {
    id: 'v31p29',
    name: '木卫二冰海商会·4 号分部',
    kind: '冰海',
    rep: 48,
    bonus: 1.24,
    desc: '冰海：声望 48，贸易加成 24%',
  },
  {
    id: 'v31p30',
    name: '金星云城商团·4 号分部',
    kind: '云城',
    rep: 59,
    bonus: 1.29,
    desc: '云城：声望 59，贸易加成 30%',
  },
  {
    id: 'v31p31',
    name: '月球静海商会·4 号分部',
    kind: '月球',
    rep: 70,
    bonus: 1.35,
    desc: '月球：声望 70，贸易加成 35%',
  },
  {
    id: 'v31p32',
    name: '拉格朗日自由市·4 号分部',
    kind: '自由市',
    rep: 81,
    bonus: 1.41,
    desc: '自由市：声望 81，贸易加成 40%',
  },
  {
    id: 'v31p33',
    name: '地球联合贸易署·5 号分部',
    kind: '官方',
    rep: 92,
    bonus: 1.46,
    desc: '官方：声望 92，贸易加成 46%',
  },
  {
    id: 'v31p34',
    name: '火星矿业公会·5 号分部',
    kind: '矿业',
    rep: 13,
    bonus: 1.06,
    desc: '矿业：声望 13，贸易加成 6%',
  },
  {
    id: 'v31p35',
    name: '轨道货运联盟·5 号分部',
    kind: '物流',
    rep: 24,
    bonus: 1.12,
    desc: '物流：声望 24，贸易加成 12%',
  },
  {
    id: 'v31p36',
    name: '小行星采矿合作社·5 号分部',
    kind: '采矿',
    rep: 35,
    bonus: 1.18,
    desc: '采矿：声望 35，贸易加成 18%',
  },
];

/* ================================================================
 * 4. 贸易面板：路线 / 市场 / 贸易船
 * 真实调用：执行配方走 game.allTradeOffers()（或 TRADE_OFFERS /
 * TRADE_OFFERS_V12），按 game.js showTradePanel 同款倍率结算：
 * tech.mul('tradeMul') × tech.mul('tradePriceMul') × 贸易船停靠 1.1；
 * 扣付、入账直接读写 game.player.inv，记 stats.record('trade')。
 * ================================================================ */

function V31TradePanel(game, manager) {
  V31BasePanel.call(this, game, manager);
  this.id = 'trade';
  this.title = '贸易';
  this.icon = '🤝';
  this.tabs = [
    { id: 'routes', name: '🛣️ 贸易路线' },
    { id: 'market', name: '📈 市场' },
    { id: 'ship', name: '🛸 贸易船' },
  ];
  this.activeTab = 'routes';
  this.myRoutes = {};   // routeId -> {openedAt, trips}
  this.tradeLog = [];   // {at, text} 上限 30
  this.routeFilter = '';
}
V31TradePanel.prototype = Object.create(V31BasePanel.prototype);
V31TradePanel.prototype.constructor = V31TradePanel;

V31TradePanel.prototype.log = function (text) {
  this.tradeLog.unshift({ at: Date.now(), text: text });
  if (this.tradeLog.length > 30) this.tradeLog.pop();
};
V31TradePanel.prototype.tradeStations = function () {
  return this.buildingCount('trade') + this.buildingCount('trade_port') + this.buildingCount('market');
};
V31TradePanel.prototype.allOffers = function () {
  var g = this.safeGame();
  try {
    if (typeof g.allTradeOffers === 'function') return g.allTradeOffers();
  } catch (e) {}
  var out = [];
  try { if (typeof TRADE_OFFERS !== 'undefined') out = out.concat(TRADE_OFFERS); } catch (e) {}
  try { if (typeof TRADE_OFFERS_V12 !== 'undefined') out = out.concat(TRADE_OFFERS_V12); } catch (e) {}
  return out;
};
/* 动态价：与 trade.js PriceEngine 同款供需逻辑的面板版。
 * 库存越高卖出越贬值（0.5~1.0），目标资源越缺买入越贵（1.0~2.0）。 */
V31TradePanel.prototype.dynamicRate = function (offer) {
  var g = this.safeGame();
  try {
    if (g.tradeShip && g.tradeShip.priceEngine && typeof g.tradeShip.priceEngine.rate === 'function') {
      var gk = Object.keys(offer.give)[0], tk = Object.keys(offer.get)[0];
      return g.tradeShip.priceEngine.rate(gk, offer.give[gk], tk, offer.get[tk], this.inv());
    }
  } catch (e) {}
  var inv = this.inv();
  var giveKey = Object.keys(offer.give)[0];
  var getKey = Object.keys(offer.get)[0];
  var giveStock = (inv[giveKey] || 0) / 100;
  var getStock = (inv[getKey] || 0) / 50;
  var giveMul = Math.max(0.5, Math.min(1.0, 1.2 - giveStock * 0.3));
  var getMul = Math.max(1.0, Math.min(2.0, 0.8 + getStock * 0.3));
  return Math.max(0.3, Math.min(3.0, giveMul / getMul));
};
V31TradePanel.prototype.offerGet = function (offer) {
  var rate = this.dynamicRate(offer);
  var mul = this.techMul('tradeMul') * this.techMul('tradePriceMul');
  var ship = this.shipBonus();
  var out = {};
  for (var k in offer.get) out[k] = Math.max(1, Math.floor(offer.get[k] * rate * mul * ship));
  return { get: out, rate: rate, mul: mul, ship: ship };
};
V31TradePanel.prototype.shipBonus = function () {
  var g = this.safeGame();
  try {
    if (g.tradeShip && typeof g.tradeShip.shipDocked === 'function' && g.tradeShip.shipDocked(Date.now())) return 1.1;
  } catch (e) {}
  return 1;
};
V31TradePanel.prototype.shipStatus = function () {
  var g = this.safeGame();
  try {
    if (g.tradeShip) {
      var now = Date.now();
      if (typeof g.tradeShip.shipDocked === 'function' && g.tradeShip.shipDocked(now))
        return { state: 'docked', text: '停靠中，剩余 ' + g.tradeShip.dockTimeLeft(now) + ' 秒，价格 +10%', visits: g.tradeShip.visitCount || 0 };
      if (typeof g.tradeShip.shipWarning === 'function' && g.tradeShip.shipWarning(now))
        return { state: 'warning', text: '贸易船接近中…', visits: g.tradeShip.visitCount || 0 };
      return { state: 'away', text: '贸易船不在港（需贸易站，每 5~8 分钟来访）', visits: g.tradeShip.visitCount || 0 };
    }
  } catch (e) {}
  return { state: 'unknown', text: '未检测到贸易船系统', visits: 0 };
};
/* 执行一次配方交易：与 game.js showTradePanel 的按钮逻辑同款结算。 */
V31TradePanel.prototype.executeOffer = function (offerId) {
  var offers = this.allOffers();
  var offer = null;
  for (var i = 0; i < offers.length; i++) if (offers[i].id === offerId) offer = offers[i];
  if (!offer) return { ok: false, reason: '未知配方' };
  if (!this.canAfford(offer.give)) return { ok: false, reason: '资源不足' };
  var calc = this.offerGet(offer);
  this.payCost(offer.give);
  this.grantRes(calc.get);
  this.afterTrade();
  var txt = '交易：' + (offer.name || offerId) + ' → 获得 ' + V31Utils.costStr(calc.get);
  this.log(txt);
  return { ok: true, get: calc.get, rate: calc.rate };
};
V31TradePanel.prototype.routeById = function (id) {
  for (var i = 0; i < V31_TRADE_ROUTES.length; i++) if (V31_TRADE_ROUTES[i].id === id) return V31_TRADE_ROUTES[i];
  return null;
};
/* 路线单次结算收入：基础利润 × 距离系数 × 贸易站加成 × 贸易科技倍率 − 手续费。
 * 距离系数 = 1 + 0.15×(dist-1)；每座贸易站 +10%，上限 +100%。 */
V31TradePanel.prototype.routeIncome = function (route) {
  var distMul = 1 + 0.15 * (route.dist - 1);
  var stationMul = 1 + Math.min(1, this.tradeStations() * 0.1);
  var techMul = this.techMul('tradeMul');
  var gross = Math.floor(route.baseProfit * distMul * stationMul * techMul);
  var net = Math.max(1, gross - route.fee);
  return { gross: gross, fee: route.fee, net: net, distMul: distMul, stationMul: stationMul, techMul: techMul };
};
V31TradePanel.prototype.openRoute = function (routeId) {
  var route = this.routeById(routeId);
  if (!route) return { ok: false, reason: '未知路线' };
  if (this.myRoutes[routeId]) return { ok: false, reason: '该路线已开通' };
  if (this.tradeStations() < 1) return { ok: false, reason: '需要先建造贸易站' };
  var cost = { iron: 20 + route.dist * 10, steel: 5 + route.dist * 5 };
  if (!this.canAfford(cost)) return { ok: false, reason: '资源不足：' + V31Utils.costStr(cost) };
  this.payCost(cost);
  this.myRoutes[routeId] = { openedAt: Date.now(), trips: 0 };
  this.log('开通路线：' + route.dest);
  return { ok: true, cost: cost };
};
V31TradePanel.prototype.closeRoute = function (routeId) {
  if (!this.myRoutes[routeId]) return { ok: false, reason: '该路线未开通' };
  delete this.myRoutes[routeId];
  this.log('关闭路线：' + routeId);
  return { ok: true };
};
V31TradePanel.prototype.settleRoute = function (routeId) {
  var route = this.routeById(routeId);
  var rec = this.myRoutes[routeId];
  if (!route || !rec) return { ok: false, reason: '该路线未开通' };
  var inc = this.routeIncome(route);
  var gain = {};
  var getKey = Object.keys(route.get)[0];
  gain[getKey] = inc.net;
  this.grantRes(gain);
  rec.trips++;
  this.afterTrade();
  this.log('路线结算：' + route.dest + ' +' + V31Utils.costStr(gain));
  return { ok: true, gain: gain, income: inc };
};
V31TradePanel.prototype.totalRouteIncome = function () {
  var sum = 0;
  for (var id in this.myRoutes) {
    var r = this.routeById(id);
    if (r) sum += this.routeIncome(r).net;
  }
  return sum;
};
V31TradePanel.prototype.goodPrice = function (good) {
  var inv = this.inv();
  var stock = (inv[good.res] || 0) / 100;
  var stockMul = Math.max(0.5, Math.min(1.5, 1.2 - stock * 0.3));
  var trendMul = good.trend === '涨' ? 1.1 : good.trend === '跌' ? 0.9 : 1.0;
  var price = Math.max(1, Math.floor(good.basePrice * stockMul * trendMul * this.techMul('tradeMul')));
  return { price: price, stockMul: stockMul, trendMul: trendMul };
};
V31TradePanel.prototype.render = function () {
  var tab = this.activeTab;
  if (tab === 'market') return this._renderMarket();
  if (tab === 'ship') return this._renderShip();
  return this._renderRoutes();
};
V31TradePanel.prototype._renderRoutes = function () {
  var stations = this.tradeStations();
  var opened = Object.keys(this.myRoutes).length;
  var html = '<div class="v31-sec"><h3>🛣️ 贸易路线：已开通 ' + opened + ' / ' + V31_TRADE_ROUTES.length + '</h3>';
  html += '<div class="v31-row"><span>贸易站 / 市场建筑</span><b>' + stations + ' 座</b></div>';
  html += '<div class="v31-row"><span>已开通路线每趟合计收入</span><b class="v31-good">+' + this.totalRouteIncome() + ' / 趟</b></div>';
  html += '<div class="v31-muted">开通需贸易站 1 座，费用按航程等级计；结算收入 = 基础利润 × 距离系数 × 贸易站加成 × 贸易科技倍率 − 手续费。</div></div>';
  html += '<div class="v31-sec"><h3>🤝 地球贸易配方（实时动态价）</h3>';
  var offers = this.allOffers();
  if (!offers.length) {
    html += '<div class="v31-muted">未检测到贸易配方（trade.js / game.js 未加载）。</div>';
  } else {
    for (var i = 0; i < offers.length; i++) {
      var o = offers[i];
      var calc = this.offerGet(o);
      var ok = this.canAfford(o.give);
      var trend = calc.rate >= 1.3 ? '📈 紧俏' : calc.rate >= 1.0 ? '➡️ 平稳' : calc.rate >= 0.7 ? '📉 宽松' : '💸 暴跌';
      html += '<div class="v31-card"><div class="v31-row"><span><b>' + V31Utils.esc(o.name || o.id) + '</b> ' +
        '<span class="v31-muted">' + trend + ' 倍率 ' + calc.rate.toFixed(2) + '</span></span>' +
        '<span>' + V31Utils.esc(V31Utils.costStr(o.give)) + ' → ' + V31Utils.esc(V31Utils.costStr(calc.get)) + '</span></div>' +
        '<button class="v31-btn" data-v31-trade="' + V31Utils.esc(o.id) + '"' + (ok ? '' : ' disabled') + '>交易</button></div>';
    }
  }
  html += '</div>';
  html += '<div class="v31-sec"><h3>🗺️ 固定路线目录（前 20 条，按收入排序）</h3>';
  var sorted = V31_TRADE_ROUTES.slice().sort(function (x, y) { return y.baseProfit - x.baseProfit; });
  for (var j = 0; j < 20; j++) {
    var r = sorted[j];
    var inc = this.routeIncome(r);
    var isOpen = !!this.myRoutes[r.id];
    html += '<div class="v31-card"><div class="v31-row"><span><b>' + V31Utils.esc(r.dest) + '</b> ' +
      '<span class="v31-muted">' + V31Utils.esc(r.desc) + ' · 风险 ' + Math.round(r.risk * 100) + '%</span></span>' +
      '<b class="v31-good">+' + inc.net + ' / 趟</b></div>' +
      '<div style="margin-top:6px">' +
      (isOpen
        ? '<span class="v31-tag" style="background:#14532d">✅ 已开通 · ' + this.myRoutes[r.id].trips + ' 趟</span> ' +
          '<button class="v31-btn" data-v31-settle="' + r.id + '">结算一趟</button> ' +
          '<button class="v31-btn danger" data-v31-closeroute="' + r.id + '">关闭</button>'
        : '<button class="v31-btn" data-v31-openroute="' + r.id + '"' + (stations < 1 ? ' disabled' : '') + '>开通路线</button>') +
      '</div></div>';
  }
  html += '<div class="v31-muted">共 ' + V31_TRADE_ROUTES.length + ' 条路线，完整目录见面板数据 V31_TRADE_ROUTES。</div></div>';
  if (this.tradeLog.length) {
    html += '<div class="v31-sec"><h3>📜 最近交易</h3>';
    for (var k = 0; k < this.tradeLog.length; k++) {
      html += '<div class="v31-row"><span>' + V31Utils.esc(this.tradeLog[k].text) + '</span><span class="v31-muted">' + V31Utils.nowText(this.tradeLog[k].at) + '</span></div>';
    }
    html += '</div>';
  }
  return html;
};
V31TradePanel.prototype._renderMarket = function () {
  var html = '<div class="v31-sec"><h3>📈 市场行情（库存越高，卖出价越低）</h3>';
  html += '<div class="v31-muted">价格 = 基准价 × 库存系数（0.5~1.5）× 趋势系数 × 贸易科技倍率；趋势为当日方向，不构成承诺。</div></div>';
  html += '<div class="v31-sec"><h3>🏪 合作商（声望越高加成越高）</h3>';
  for (var p = 0; p < V31_TRADE_PARTNERS.length; p++) {
    var pt = V31_TRADE_PARTNERS[p];
    html += '<div class="v31-row"><span>' + V31Utils.esc(pt.name) + ' <span class="v31-muted">' + V31Utils.esc(pt.kind) + '</span></span><b>声望 ' + pt.rep + ' · +' + Math.round((pt.bonus - 1) * 100) + '%</b></div>';
  }
  html += '</div><div class="v31-sec"><h3>📦 现货行情</h3>';
  for (var i = 0; i < V31_TRADE_GOODS.length; i++) {
    var gd = V31_TRADE_GOODS[i];
    var pr = this.goodPrice(gd);
    var inv = this.inv()[gd.res] || 0;
    html += '<div class="v31-row"><span>' + V31Utils.esc(gd.name) + ' <span class="v31-muted">' + V31Utils.esc(gd.desc) + ' · 库存 ' + inv + '</span></span><b>' + pr.price + ' / 单位 ' + (gd.trend === '涨' ? '📈' : gd.trend === '跌' ? '📉' : '➡️') + '</b></div>';
    html += V31Utils.bar(pr.price / 150, gd.trend === '涨' ? '#34d399' : gd.trend === '跌' ? '#ef4444' : '#38bdf8');
  }
  html += '</div>';
  return html;
};
V31TradePanel.prototype._renderShip = function () {
  var st = this.shipStatus();
  var html = '<div class="v31-sec"><h3>🛸 贸易船</h3>';
  html += '<div class="v31-row"><span>状态</span><b>' + V31Utils.esc(st.text) + '</b></div>';
  html += '<div class="v31-row"><span>累计到访</span><b>' + st.visits + ' 次</b></div>';
  html += '<div class="v31-row"><span>停靠加成</span><b>×' + this.shipBonus().toFixed(1) + '</b></div>';
  html += '<div class="v31-muted">贸易船每 5~8 分钟来访一次，停靠 60 秒，期间全部配方价格 +10%；需要先建造贸易站才会到访。</div></div>';
  html += '<div class="v31-sec"><h3>📋 到访规则</h3>';
  html += '<div class="v31-row"><span>首次到访</span><b>开局 3 分钟后</b></div>';
  html += '<div class="v31-row"><span>到访间隔</span><b>5~8 分钟（科技可缩短）</b></div>';
  html += '<div class="v31-row"><span>预警</span><b>到港前 20 秒</b></div>';
  html += '<div class="v31-row"><span>停靠时长</span><b>60 秒</b></div></div>';
  return html;
};
V31TradePanel.prototype.bindEvents = function (root) {
  var self = this;
  var bind = function (sel, attr, fn) {
    var btns = root.querySelectorAll(sel);
    for (var i = 0; i < btns.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () { fn(btn.getAttribute(attr)); });
      })(btns[i]);
    }
  };
  bind('[data-v31-trade]', 'data-v31-trade', function (id) {
    var res = self.executeOffer(id);
    self.toast(res.ok ? '🤝 交易完成' : '❌ ' + res.reason);
    self.refresh();
  });
  bind('[data-v31-openroute]', 'data-v31-openroute', function (id) {
    var res = self.openRoute(id);
    self.toast(res.ok ? '🛣️ 路线已开通' : '❌ ' + res.reason);
    self.refresh();
  });
  bind('[data-v31-settle]', 'data-v31-settle', function (id) {
    var res = self.settleRoute(id);
    self.toast(res.ok ? '💰 结算完成：+' + V31Utils.costStr(res.gain) : '❌ ' + res.reason);
    self.refresh();
  });
  bind('[data-v31-closeroute]', 'data-v31-closeroute', function (id) {
    var res = self.closeRoute(id);
    self.toast(res.ok ? '路线已关闭' : '❌ ' + res.reason);
    self.refresh();
  });
};

/* ================================================================
 * 5. 文化数据：110 个节日 / 110 件作品 / 36 处场馆（一句话说明）
 * 文化分公式见 V31CulturePanel.cultureScore：
 *   文化分 = 场馆分 + 作品分 + 节日分（场馆按真实建筑计数）
 * ================================================================ */

var V31_FESTIVALS = [
  {
    id: 'v31f01',
    name: '春季丰收节',
    season: '春季',
    cost: { food: 20, steel: 5 },
    happy: 5,
    culture: 10,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '春季举办的丰收主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f02',
    name: '春季星火节',
    season: '春季',
    cost: { food: 30, steel: 10 },
    happy: 8,
    culture: 15,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '春季举办的星火主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f03',
    name: '春季冰雪节',
    season: '春季',
    cost: { food: 40, steel: 15 },
    happy: 11,
    culture: 20,
    needVenue: 'theater',
    cooldownDays: 21,
    desc: '春季举办的冰雪主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f04',
    name: '春季花灯节',
    season: '春季',
    cost: { food: 50, steel: 20 },
    happy: 14,
    culture: 25,
    needVenue: 'park',
    cooldownDays: 28,
    desc: '春季举办的花灯主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f05',
    name: '春季音乐节',
    season: '春季',
    cost: { food: 60, steel: 5 },
    happy: 17,
    culture: 30,
    needVenue: 'stadium',
    cooldownDays: 7,
    desc: '春季举办的音乐主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f06',
    name: '春季科技节',
    season: '春季',
    cost: { food: 20, steel: 10 },
    happy: 20,
    culture: 35,
    needVenue: 'theater',
    cooldownDays: 14,
    desc: '春季举办的科技主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f07',
    name: '春季海洋节',
    season: '春季',
    cost: { food: 30, steel: 15 },
    happy: 5,
    culture: 40,
    needVenue: 'park',
    cooldownDays: 21,
    desc: '春季举办的海洋主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f08',
    name: '春季沙漠节',
    season: '春季',
    cost: { food: 40, steel: 20 },
    happy: 8,
    culture: 45,
    needVenue: 'stadium',
    cooldownDays: 28,
    desc: '春季举办的沙漠主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f09',
    name: '春季极光节',
    season: '春季',
    cost: { food: 50, steel: 5 },
    happy: 11,
    culture: 10,
    needVenue: 'theater',
    cooldownDays: 7,
    desc: '春季举办的极光主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f10',
    name: '春季收获节',
    season: '春季',
    cost: { food: 60, steel: 10 },
    happy: 14,
    culture: 15,
    needVenue: 'park',
    cooldownDays: 14,
    desc: '春季举办的收获主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f11',
    name: '春季探索节',
    season: '春季',
    cost: { food: 20, steel: 15 },
    happy: 17,
    culture: 20,
    needVenue: 'stadium',
    cooldownDays: 21,
    desc: '春季举办的探索主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f12',
    name: '春季团结节',
    season: '春季',
    cost: { food: 30, steel: 20 },
    happy: 20,
    culture: 25,
    needVenue: 'theater',
    cooldownDays: 28,
    desc: '春季举办的团结主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f13',
    name: '春季艺术节',
    season: '春季',
    cost: { food: 40, steel: 5 },
    happy: 5,
    culture: 30,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '春季举办的艺术主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f14',
    name: '春季运动节',
    season: '春季',
    cost: { food: 50, steel: 10 },
    happy: 8,
    culture: 35,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '春季举办的运动主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f15',
    name: '春季美食节',
    season: '春季',
    cost: { food: 60, steel: 15 },
    happy: 11,
    culture: 40,
    needVenue: 'theater',
    cooldownDays: 21,
    desc: '春季举办的美食主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f16',
    name: '春季读书节',
    season: '春季',
    cost: { food: 20, steel: 20 },
    happy: 14,
    culture: 45,
    needVenue: 'park',
    cooldownDays: 28,
    desc: '春季举办的读书主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f17',
    name: '夏季丰收节',
    season: '夏季',
    cost: { food: 30, steel: 5 },
    happy: 17,
    culture: 10,
    needVenue: 'stadium',
    cooldownDays: 7,
    desc: '夏季举办的丰收主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f18',
    name: '夏季星火节',
    season: '夏季',
    cost: { food: 40, steel: 10 },
    happy: 20,
    culture: 15,
    needVenue: 'theater',
    cooldownDays: 14,
    desc: '夏季举办的星火主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f19',
    name: '夏季冰雪节',
    season: '夏季',
    cost: { food: 50, steel: 15 },
    happy: 5,
    culture: 20,
    needVenue: 'park',
    cooldownDays: 21,
    desc: '夏季举办的冰雪主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f20',
    name: '夏季花灯节',
    season: '夏季',
    cost: { food: 60, steel: 20 },
    happy: 8,
    culture: 25,
    needVenue: 'stadium',
    cooldownDays: 28,
    desc: '夏季举办的花灯主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f21',
    name: '夏季音乐节',
    season: '夏季',
    cost: { food: 20, steel: 5 },
    happy: 11,
    culture: 30,
    needVenue: 'theater',
    cooldownDays: 7,
    desc: '夏季举办的音乐主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f22',
    name: '夏季科技节',
    season: '夏季',
    cost: { food: 30, steel: 10 },
    happy: 14,
    culture: 35,
    needVenue: 'park',
    cooldownDays: 14,
    desc: '夏季举办的科技主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f23',
    name: '夏季海洋节',
    season: '夏季',
    cost: { food: 40, steel: 15 },
    happy: 17,
    culture: 40,
    needVenue: 'stadium',
    cooldownDays: 21,
    desc: '夏季举办的海洋主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f24',
    name: '夏季沙漠节',
    season: '夏季',
    cost: { food: 50, steel: 20 },
    happy: 20,
    culture: 45,
    needVenue: 'theater',
    cooldownDays: 28,
    desc: '夏季举办的沙漠主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f25',
    name: '夏季极光节',
    season: '夏季',
    cost: { food: 60, steel: 5 },
    happy: 5,
    culture: 10,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '夏季举办的极光主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f26',
    name: '夏季收获节',
    season: '夏季',
    cost: { food: 20, steel: 10 },
    happy: 8,
    culture: 15,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '夏季举办的收获主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f27',
    name: '夏季探索节',
    season: '夏季',
    cost: { food: 30, steel: 15 },
    happy: 11,
    culture: 20,
    needVenue: 'theater',
    cooldownDays: 21,
    desc: '夏季举办的探索主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f28',
    name: '夏季团结节',
    season: '夏季',
    cost: { food: 40, steel: 20 },
    happy: 14,
    culture: 25,
    needVenue: 'park',
    cooldownDays: 28,
    desc: '夏季举办的团结主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f29',
    name: '夏季艺术节',
    season: '夏季',
    cost: { food: 50, steel: 5 },
    happy: 17,
    culture: 30,
    needVenue: 'stadium',
    cooldownDays: 7,
    desc: '夏季举办的艺术主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f30',
    name: '夏季运动节',
    season: '夏季',
    cost: { food: 60, steel: 10 },
    happy: 20,
    culture: 35,
    needVenue: 'theater',
    cooldownDays: 14,
    desc: '夏季举办的运动主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f31',
    name: '夏季美食节',
    season: '夏季',
    cost: { food: 20, steel: 15 },
    happy: 5,
    culture: 40,
    needVenue: 'park',
    cooldownDays: 21,
    desc: '夏季举办的美食主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f32',
    name: '夏季读书节',
    season: '夏季',
    cost: { food: 30, steel: 20 },
    happy: 8,
    culture: 45,
    needVenue: 'stadium',
    cooldownDays: 28,
    desc: '夏季举办的读书主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f33',
    name: '秋季丰收节',
    season: '秋季',
    cost: { food: 40, steel: 5 },
    happy: 11,
    culture: 10,
    needVenue: 'theater',
    cooldownDays: 7,
    desc: '秋季举办的丰收主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f34',
    name: '秋季星火节',
    season: '秋季',
    cost: { food: 50, steel: 10 },
    happy: 14,
    culture: 15,
    needVenue: 'park',
    cooldownDays: 14,
    desc: '秋季举办的星火主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f35',
    name: '秋季冰雪节',
    season: '秋季',
    cost: { food: 60, steel: 15 },
    happy: 17,
    culture: 20,
    needVenue: 'stadium',
    cooldownDays: 21,
    desc: '秋季举办的冰雪主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f36',
    name: '秋季花灯节',
    season: '秋季',
    cost: { food: 20, steel: 20 },
    happy: 20,
    culture: 25,
    needVenue: 'theater',
    cooldownDays: 28,
    desc: '秋季举办的花灯主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f37',
    name: '秋季音乐节',
    season: '秋季',
    cost: { food: 30, steel: 5 },
    happy: 5,
    culture: 30,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '秋季举办的音乐主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f38',
    name: '秋季科技节',
    season: '秋季',
    cost: { food: 40, steel: 10 },
    happy: 8,
    culture: 35,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '秋季举办的科技主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f39',
    name: '秋季海洋节',
    season: '秋季',
    cost: { food: 50, steel: 15 },
    happy: 11,
    culture: 40,
    needVenue: 'theater',
    cooldownDays: 21,
    desc: '秋季举办的海洋主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f40',
    name: '秋季沙漠节',
    season: '秋季',
    cost: { food: 60, steel: 20 },
    happy: 14,
    culture: 45,
    needVenue: 'park',
    cooldownDays: 28,
    desc: '秋季举办的沙漠主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f41',
    name: '秋季极光节',
    season: '秋季',
    cost: { food: 20, steel: 5 },
    happy: 17,
    culture: 10,
    needVenue: 'stadium',
    cooldownDays: 7,
    desc: '秋季举办的极光主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f42',
    name: '秋季收获节',
    season: '秋季',
    cost: { food: 30, steel: 10 },
    happy: 20,
    culture: 15,
    needVenue: 'theater',
    cooldownDays: 14,
    desc: '秋季举办的收获主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f43',
    name: '秋季探索节',
    season: '秋季',
    cost: { food: 40, steel: 15 },
    happy: 5,
    culture: 20,
    needVenue: 'park',
    cooldownDays: 21,
    desc: '秋季举办的探索主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f44',
    name: '秋季团结节',
    season: '秋季',
    cost: { food: 50, steel: 20 },
    happy: 8,
    culture: 25,
    needVenue: 'stadium',
    cooldownDays: 28,
    desc: '秋季举办的团结主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f45',
    name: '秋季艺术节',
    season: '秋季',
    cost: { food: 60, steel: 5 },
    happy: 11,
    culture: 30,
    needVenue: 'theater',
    cooldownDays: 7,
    desc: '秋季举办的艺术主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f46',
    name: '秋季运动节',
    season: '秋季',
    cost: { food: 20, steel: 10 },
    happy: 14,
    culture: 35,
    needVenue: 'park',
    cooldownDays: 14,
    desc: '秋季举办的运动主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f47',
    name: '秋季美食节',
    season: '秋季',
    cost: { food: 30, steel: 15 },
    happy: 17,
    culture: 40,
    needVenue: 'stadium',
    cooldownDays: 21,
    desc: '秋季举办的美食主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f48',
    name: '秋季读书节',
    season: '秋季',
    cost: { food: 40, steel: 20 },
    happy: 20,
    culture: 45,
    needVenue: 'theater',
    cooldownDays: 28,
    desc: '秋季举办的读书主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f49',
    name: '冬季丰收节',
    season: '冬季',
    cost: { food: 50, steel: 5 },
    happy: 5,
    culture: 10,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '冬季举办的丰收主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f50',
    name: '冬季星火节',
    season: '冬季',
    cost: { food: 60, steel: 10 },
    happy: 8,
    culture: 15,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '冬季举办的星火主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f51',
    name: '冬季冰雪节',
    season: '冬季',
    cost: { food: 20, steel: 15 },
    happy: 11,
    culture: 20,
    needVenue: 'theater',
    cooldownDays: 21,
    desc: '冬季举办的冰雪主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f52',
    name: '冬季花灯节',
    season: '冬季',
    cost: { food: 30, steel: 20 },
    happy: 14,
    culture: 25,
    needVenue: 'park',
    cooldownDays: 28,
    desc: '冬季举办的花灯主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f53',
    name: '冬季音乐节',
    season: '冬季',
    cost: { food: 40, steel: 5 },
    happy: 17,
    culture: 30,
    needVenue: 'stadium',
    cooldownDays: 7,
    desc: '冬季举办的音乐主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f54',
    name: '冬季科技节',
    season: '冬季',
    cost: { food: 50, steel: 10 },
    happy: 20,
    culture: 35,
    needVenue: 'theater',
    cooldownDays: 14,
    desc: '冬季举办的科技主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f55',
    name: '冬季海洋节',
    season: '冬季',
    cost: { food: 60, steel: 15 },
    happy: 5,
    culture: 40,
    needVenue: 'park',
    cooldownDays: 21,
    desc: '冬季举办的海洋主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f56',
    name: '冬季沙漠节',
    season: '冬季',
    cost: { food: 20, steel: 20 },
    happy: 8,
    culture: 45,
    needVenue: 'stadium',
    cooldownDays: 28,
    desc: '冬季举办的沙漠主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f57',
    name: '冬季极光节',
    season: '冬季',
    cost: { food: 30, steel: 5 },
    happy: 11,
    culture: 10,
    needVenue: 'theater',
    cooldownDays: 7,
    desc: '冬季举办的极光主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f58',
    name: '冬季收获节',
    season: '冬季',
    cost: { food: 40, steel: 10 },
    happy: 14,
    culture: 15,
    needVenue: 'park',
    cooldownDays: 14,
    desc: '冬季举办的收获主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f59',
    name: '冬季探索节',
    season: '冬季',
    cost: { food: 50, steel: 15 },
    happy: 17,
    culture: 20,
    needVenue: 'stadium',
    cooldownDays: 21,
    desc: '冬季举办的探索主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f60',
    name: '冬季团结节',
    season: '冬季',
    cost: { food: 60, steel: 20 },
    happy: 20,
    culture: 25,
    needVenue: 'theater',
    cooldownDays: 28,
    desc: '冬季举办的团结主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f61',
    name: '冬季艺术节',
    season: '冬季',
    cost: { food: 20, steel: 5 },
    happy: 5,
    culture: 30,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '冬季举办的艺术主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f62',
    name: '冬季运动节',
    season: '冬季',
    cost: { food: 30, steel: 10 },
    happy: 8,
    culture: 35,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '冬季举办的运动主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f63',
    name: '冬季美食节',
    season: '冬季',
    cost: { food: 40, steel: 15 },
    happy: 11,
    culture: 40,
    needVenue: 'theater',
    cooldownDays: 21,
    desc: '冬季举办的美食主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f64',
    name: '冬季读书节',
    season: '冬季',
    cost: { food: 50, steel: 20 },
    happy: 14,
    culture: 45,
    needVenue: 'park',
    cooldownDays: 28,
    desc: '冬季举办的读书主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f65',
    name: '春季丰收节·第2届',
    season: '春季',
    cost: { food: 60, steel: 5 },
    happy: 17,
    culture: 10,
    needVenue: 'stadium',
    cooldownDays: 7,
    desc: '春季举办的丰收主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f66',
    name: '春季星火节·第2届',
    season: '春季',
    cost: { food: 20, steel: 10 },
    happy: 20,
    culture: 15,
    needVenue: 'theater',
    cooldownDays: 14,
    desc: '春季举办的星火主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f67',
    name: '春季冰雪节·第2届',
    season: '春季',
    cost: { food: 30, steel: 15 },
    happy: 5,
    culture: 20,
    needVenue: 'park',
    cooldownDays: 21,
    desc: '春季举办的冰雪主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f68',
    name: '春季花灯节·第2届',
    season: '春季',
    cost: { food: 40, steel: 20 },
    happy: 8,
    culture: 25,
    needVenue: 'stadium',
    cooldownDays: 28,
    desc: '春季举办的花灯主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f69',
    name: '春季音乐节·第2届',
    season: '春季',
    cost: { food: 50, steel: 5 },
    happy: 11,
    culture: 30,
    needVenue: 'theater',
    cooldownDays: 7,
    desc: '春季举办的音乐主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f70',
    name: '春季科技节·第2届',
    season: '春季',
    cost: { food: 60, steel: 10 },
    happy: 14,
    culture: 35,
    needVenue: 'park',
    cooldownDays: 14,
    desc: '春季举办的科技主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f71',
    name: '春季海洋节·第2届',
    season: '春季',
    cost: { food: 20, steel: 15 },
    happy: 17,
    culture: 40,
    needVenue: 'stadium',
    cooldownDays: 21,
    desc: '春季举办的海洋主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f72',
    name: '春季沙漠节·第2届',
    season: '春季',
    cost: { food: 30, steel: 20 },
    happy: 20,
    culture: 45,
    needVenue: 'theater',
    cooldownDays: 28,
    desc: '春季举办的沙漠主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f73',
    name: '春季极光节·第2届',
    season: '春季',
    cost: { food: 40, steel: 5 },
    happy: 5,
    culture: 10,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '春季举办的极光主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f74',
    name: '春季收获节·第2届',
    season: '春季',
    cost: { food: 50, steel: 10 },
    happy: 8,
    culture: 15,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '春季举办的收获主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f75',
    name: '春季探索节·第2届',
    season: '春季',
    cost: { food: 60, steel: 15 },
    happy: 11,
    culture: 20,
    needVenue: 'theater',
    cooldownDays: 21,
    desc: '春季举办的探索主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f76',
    name: '春季团结节·第2届',
    season: '春季',
    cost: { food: 20, steel: 20 },
    happy: 14,
    culture: 25,
    needVenue: 'park',
    cooldownDays: 28,
    desc: '春季举办的团结主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f77',
    name: '春季艺术节·第2届',
    season: '春季',
    cost: { food: 30, steel: 5 },
    happy: 17,
    culture: 30,
    needVenue: 'stadium',
    cooldownDays: 7,
    desc: '春季举办的艺术主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f78',
    name: '春季运动节·第2届',
    season: '春季',
    cost: { food: 40, steel: 10 },
    happy: 20,
    culture: 35,
    needVenue: 'theater',
    cooldownDays: 14,
    desc: '春季举办的运动主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f79',
    name: '春季美食节·第2届',
    season: '春季',
    cost: { food: 50, steel: 15 },
    happy: 5,
    culture: 40,
    needVenue: 'park',
    cooldownDays: 21,
    desc: '春季举办的美食主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f80',
    name: '春季读书节·第2届',
    season: '春季',
    cost: { food: 60, steel: 20 },
    happy: 8,
    culture: 45,
    needVenue: 'stadium',
    cooldownDays: 28,
    desc: '春季举办的读书主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f81',
    name: '夏季丰收节·第2届',
    season: '夏季',
    cost: { food: 20, steel: 5 },
    happy: 11,
    culture: 10,
    needVenue: 'theater',
    cooldownDays: 7,
    desc: '夏季举办的丰收主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f82',
    name: '夏季星火节·第2届',
    season: '夏季',
    cost: { food: 30, steel: 10 },
    happy: 14,
    culture: 15,
    needVenue: 'park',
    cooldownDays: 14,
    desc: '夏季举办的星火主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f83',
    name: '夏季冰雪节·第2届',
    season: '夏季',
    cost: { food: 40, steel: 15 },
    happy: 17,
    culture: 20,
    needVenue: 'stadium',
    cooldownDays: 21,
    desc: '夏季举办的冰雪主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f84',
    name: '夏季花灯节·第2届',
    season: '夏季',
    cost: { food: 50, steel: 20 },
    happy: 20,
    culture: 25,
    needVenue: 'theater',
    cooldownDays: 28,
    desc: '夏季举办的花灯主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f85',
    name: '夏季音乐节·第2届',
    season: '夏季',
    cost: { food: 60, steel: 5 },
    happy: 5,
    culture: 30,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '夏季举办的音乐主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f86',
    name: '夏季科技节·第2届',
    season: '夏季',
    cost: { food: 20, steel: 10 },
    happy: 8,
    culture: 35,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '夏季举办的科技主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f87',
    name: '夏季海洋节·第2届',
    season: '夏季',
    cost: { food: 30, steel: 15 },
    happy: 11,
    culture: 40,
    needVenue: 'theater',
    cooldownDays: 21,
    desc: '夏季举办的海洋主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f88',
    name: '夏季沙漠节·第2届',
    season: '夏季',
    cost: { food: 40, steel: 20 },
    happy: 14,
    culture: 45,
    needVenue: 'park',
    cooldownDays: 28,
    desc: '夏季举办的沙漠主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f89',
    name: '夏季极光节·第2届',
    season: '夏季',
    cost: { food: 50, steel: 5 },
    happy: 17,
    culture: 10,
    needVenue: 'stadium',
    cooldownDays: 7,
    desc: '夏季举办的极光主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f90',
    name: '夏季收获节·第2届',
    season: '夏季',
    cost: { food: 60, steel: 10 },
    happy: 20,
    culture: 15,
    needVenue: 'theater',
    cooldownDays: 14,
    desc: '夏季举办的收获主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f91',
    name: '夏季探索节·第2届',
    season: '夏季',
    cost: { food: 20, steel: 15 },
    happy: 5,
    culture: 20,
    needVenue: 'park',
    cooldownDays: 21,
    desc: '夏季举办的探索主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f92',
    name: '夏季团结节·第2届',
    season: '夏季',
    cost: { food: 30, steel: 20 },
    happy: 8,
    culture: 25,
    needVenue: 'stadium',
    cooldownDays: 28,
    desc: '夏季举办的团结主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f93',
    name: '夏季艺术节·第2届',
    season: '夏季',
    cost: { food: 40, steel: 5 },
    happy: 11,
    culture: 30,
    needVenue: 'theater',
    cooldownDays: 7,
    desc: '夏季举办的艺术主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f94',
    name: '夏季运动节·第2届',
    season: '夏季',
    cost: { food: 50, steel: 10 },
    happy: 14,
    culture: 35,
    needVenue: 'park',
    cooldownDays: 14,
    desc: '夏季举办的运动主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f95',
    name: '夏季美食节·第2届',
    season: '夏季',
    cost: { food: 60, steel: 15 },
    happy: 17,
    culture: 40,
    needVenue: 'stadium',
    cooldownDays: 21,
    desc: '夏季举办的美食主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f96',
    name: '夏季读书节·第2届',
    season: '夏季',
    cost: { food: 20, steel: 20 },
    happy: 20,
    culture: 45,
    needVenue: 'theater',
    cooldownDays: 28,
    desc: '夏季举办的读书主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f97',
    name: '秋季丰收节·第2届',
    season: '秋季',
    cost: { food: 30, steel: 5 },
    happy: 5,
    culture: 10,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '秋季举办的丰收主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f98',
    name: '秋季星火节·第2届',
    season: '秋季',
    cost: { food: 40, steel: 10 },
    happy: 8,
    culture: 15,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '秋季举办的星火主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f99',
    name: '秋季冰雪节·第2届',
    season: '秋季',
    cost: { food: 50, steel: 15 },
    happy: 11,
    culture: 20,
    needVenue: 'theater',
    cooldownDays: 21,
    desc: '秋季举办的冰雪主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f100',
    name: '秋季花灯节·第2届',
    season: '秋季',
    cost: { food: 60, steel: 20 },
    happy: 14,
    culture: 25,
    needVenue: 'park',
    cooldownDays: 28,
    desc: '秋季举办的花灯主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f101',
    name: '秋季音乐节·第2届',
    season: '秋季',
    cost: { food: 20, steel: 5 },
    happy: 17,
    culture: 30,
    needVenue: 'stadium',
    cooldownDays: 7,
    desc: '秋季举办的音乐主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f102',
    name: '秋季科技节·第2届',
    season: '秋季',
    cost: { food: 30, steel: 10 },
    happy: 20,
    culture: 35,
    needVenue: 'theater',
    cooldownDays: 14,
    desc: '秋季举办的科技主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f103',
    name: '秋季海洋节·第2届',
    season: '秋季',
    cost: { food: 40, steel: 15 },
    happy: 5,
    culture: 40,
    needVenue: 'park',
    cooldownDays: 21,
    desc: '秋季举办的海洋主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f104',
    name: '秋季沙漠节·第2届',
    season: '秋季',
    cost: { food: 50, steel: 20 },
    happy: 8,
    culture: 45,
    needVenue: 'stadium',
    cooldownDays: 28,
    desc: '秋季举办的沙漠主题节日，提升居民满意度 8 点',
  },
  {
    id: 'v31f105',
    name: '秋季极光节·第2届',
    season: '秋季',
    cost: { food: 60, steel: 5 },
    happy: 11,
    culture: 10,
    needVenue: 'theater',
    cooldownDays: 7,
    desc: '秋季举办的极光主题节日，提升居民满意度 11 点',
  },
  {
    id: 'v31f106',
    name: '秋季收获节·第2届',
    season: '秋季',
    cost: { food: 20, steel: 10 },
    happy: 14,
    culture: 15,
    needVenue: 'park',
    cooldownDays: 14,
    desc: '秋季举办的收获主题节日，提升居民满意度 14 点',
  },
  {
    id: 'v31f107',
    name: '秋季探索节·第2届',
    season: '秋季',
    cost: { food: 30, steel: 15 },
    happy: 17,
    culture: 20,
    needVenue: 'stadium',
    cooldownDays: 21,
    desc: '秋季举办的探索主题节日，提升居民满意度 17 点',
  },
  {
    id: 'v31f108',
    name: '秋季团结节·第2届',
    season: '秋季',
    cost: { food: 40, steel: 20 },
    happy: 20,
    culture: 25,
    needVenue: 'theater',
    cooldownDays: 28,
    desc: '秋季举办的团结主题节日，提升居民满意度 20 点',
  },
  {
    id: 'v31f109',
    name: '秋季艺术节·第2届',
    season: '秋季',
    cost: { food: 50, steel: 5 },
    happy: 5,
    culture: 30,
    needVenue: 'park',
    cooldownDays: 7,
    desc: '秋季举办的艺术主题节日，提升居民满意度 5 点',
  },
  {
    id: 'v31f110',
    name: '秋季运动节·第2届',
    season: '秋季',
    cost: { food: 60, steel: 10 },
    happy: 8,
    culture: 35,
    needVenue: 'stadium',
    cooldownDays: 14,
    desc: '秋季举办的运动主题节日，提升居民满意度 8 点',
  },
];

var V31_CULTURE_WORKS = [
  {
    id: 'v31w01',
    title: '《火星日出》',
    form: '油画',
    cost: { tech: 5 },
    baseQuality: 30,
    culture: 5,
    desc: '油画作品，以火星日出为题材',
  },
  {
    id: 'v31w02',
    title: '《火星日出》',
    form: '雕塑',
    cost: { tech: 10 },
    baseQuality: 40,
    culture: 10,
    desc: '雕塑作品，以火星日出为题材',
  },
  {
    id: 'v31w03',
    title: '《火星日出》',
    form: '交响乐',
    cost: { tech: 15 },
    baseQuality: 50,
    culture: 15,
    desc: '交响乐作品，以火星日出为题材',
  },
  {
    id: 'v31w04',
    title: '《火星日出》',
    form: '小说',
    cost: { tech: 20 },
    baseQuality: 60,
    culture: 20,
    desc: '小说作品，以火星日出为题材',
  },
  {
    id: 'v31w05',
    title: '《火星日出》',
    form: '纪录片',
    cost: { tech: 25 },
    baseQuality: 70,
    culture: 25,
    desc: '纪录片作品，以火星日出为题材',
  },
  {
    id: 'v31w06',
    title: '《火星日出》',
    form: '壁画',
    cost: { tech: 30 },
    baseQuality: 80,
    culture: 5,
    desc: '壁画作品，以火星日出为题材',
  },
  {
    id: 'v31w07',
    title: '《火星日出》',
    form: '摄影集',
    cost: { tech: 5 },
    baseQuality: 90,
    culture: 10,
    desc: '摄影集作品，以火星日出为题材',
  },
  {
    id: 'v31w08',
    title: '《火星日出》',
    form: '诗歌集',
    cost: { tech: 10 },
    baseQuality: 30,
    culture: 15,
    desc: '诗歌集作品，以火星日出为题材',
  },
  {
    id: 'v31w09',
    title: '《火星日出》',
    form: '话剧',
    cost: { tech: 15 },
    baseQuality: 40,
    culture: 20,
    desc: '话剧作品，以火星日出为题材',
  },
  {
    id: 'v31w10',
    title: '《火星日出》',
    form: '舞蹈',
    cost: { tech: 20 },
    baseQuality: 50,
    culture: 25,
    desc: '舞蹈作品，以火星日出为题材',
  },
  {
    id: 'v31w11',
    title: '《第一批移民》',
    form: '油画',
    cost: { tech: 25 },
    baseQuality: 60,
    culture: 5,
    desc: '油画作品，以第一批移民为题材',
  },
  {
    id: 'v31w12',
    title: '《第一批移民》',
    form: '雕塑',
    cost: { tech: 30 },
    baseQuality: 70,
    culture: 10,
    desc: '雕塑作品，以第一批移民为题材',
  },
  {
    id: 'v31w13',
    title: '《第一批移民》',
    form: '交响乐',
    cost: { tech: 5 },
    baseQuality: 80,
    culture: 15,
    desc: '交响乐作品，以第一批移民为题材',
  },
  {
    id: 'v31w14',
    title: '《第一批移民》',
    form: '小说',
    cost: { tech: 10 },
    baseQuality: 90,
    culture: 20,
    desc: '小说作品，以第一批移民为题材',
  },
  {
    id: 'v31w15',
    title: '《第一批移民》',
    form: '纪录片',
    cost: { tech: 15 },
    baseQuality: 30,
    culture: 25,
    desc: '纪录片作品，以第一批移民为题材',
  },
  {
    id: 'v31w16',
    title: '《第一批移民》',
    form: '壁画',
    cost: { tech: 20 },
    baseQuality: 40,
    culture: 5,
    desc: '壁画作品，以第一批移民为题材',
  },
  {
    id: 'v31w17',
    title: '《第一批移民》',
    form: '摄影集',
    cost: { tech: 25 },
    baseQuality: 50,
    culture: 10,
    desc: '摄影集作品，以第一批移民为题材',
  },
  {
    id: 'v31w18',
    title: '《第一批移民》',
    form: '诗歌集',
    cost: { tech: 30 },
    baseQuality: 60,
    culture: 15,
    desc: '诗歌集作品，以第一批移民为题材',
  },
  {
    id: 'v31w19',
    title: '《第一批移民》',
    form: '话剧',
    cost: { tech: 5 },
    baseQuality: 70,
    culture: 20,
    desc: '话剧作品，以第一批移民为题材',
  },
  {
    id: 'v31w20',
    title: '《第一批移民》',
    form: '舞蹈',
    cost: { tech: 10 },
    baseQuality: 80,
    culture: 25,
    desc: '舞蹈作品，以第一批移民为题材',
  },
  {
    id: 'v31w21',
    title: '《穹顶之夜》',
    form: '油画',
    cost: { tech: 15 },
    baseQuality: 90,
    culture: 5,
    desc: '油画作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w22',
    title: '《穹顶之夜》',
    form: '雕塑',
    cost: { tech: 20 },
    baseQuality: 30,
    culture: 10,
    desc: '雕塑作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w23',
    title: '《穹顶之夜》',
    form: '交响乐',
    cost: { tech: 25 },
    baseQuality: 40,
    culture: 15,
    desc: '交响乐作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w24',
    title: '《穹顶之夜》',
    form: '小说',
    cost: { tech: 30 },
    baseQuality: 50,
    culture: 20,
    desc: '小说作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w25',
    title: '《穹顶之夜》',
    form: '纪录片',
    cost: { tech: 5 },
    baseQuality: 60,
    culture: 25,
    desc: '纪录片作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w26',
    title: '《穹顶之夜》',
    form: '壁画',
    cost: { tech: 10 },
    baseQuality: 70,
    culture: 5,
    desc: '壁画作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w27',
    title: '《穹顶之夜》',
    form: '摄影集',
    cost: { tech: 15 },
    baseQuality: 80,
    culture: 10,
    desc: '摄影集作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w28',
    title: '《穹顶之夜》',
    form: '诗歌集',
    cost: { tech: 20 },
    baseQuality: 90,
    culture: 15,
    desc: '诗歌集作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w29',
    title: '《穹顶之夜》',
    form: '话剧',
    cost: { tech: 25 },
    baseQuality: 30,
    culture: 20,
    desc: '话剧作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w30',
    title: '《穹顶之夜》',
    form: '舞蹈',
    cost: { tech: 30 },
    baseQuality: 40,
    culture: 25,
    desc: '舞蹈作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w31',
    title: '《沙尘暴》',
    form: '油画',
    cost: { tech: 5 },
    baseQuality: 50,
    culture: 5,
    desc: '油画作品，以沙尘暴为题材',
  },
  {
    id: 'v31w32',
    title: '《沙尘暴》',
    form: '雕塑',
    cost: { tech: 10 },
    baseQuality: 60,
    culture: 10,
    desc: '雕塑作品，以沙尘暴为题材',
  },
  {
    id: 'v31w33',
    title: '《沙尘暴》',
    form: '交响乐',
    cost: { tech: 15 },
    baseQuality: 70,
    culture: 15,
    desc: '交响乐作品，以沙尘暴为题材',
  },
  {
    id: 'v31w34',
    title: '《沙尘暴》',
    form: '小说',
    cost: { tech: 20 },
    baseQuality: 80,
    culture: 20,
    desc: '小说作品，以沙尘暴为题材',
  },
  {
    id: 'v31w35',
    title: '《沙尘暴》',
    form: '纪录片',
    cost: { tech: 25 },
    baseQuality: 90,
    culture: 25,
    desc: '纪录片作品，以沙尘暴为题材',
  },
  {
    id: 'v31w36',
    title: '《沙尘暴》',
    form: '壁画',
    cost: { tech: 30 },
    baseQuality: 30,
    culture: 5,
    desc: '壁画作品，以沙尘暴为题材',
  },
  {
    id: 'v31w37',
    title: '《沙尘暴》',
    form: '摄影集',
    cost: { tech: 5 },
    baseQuality: 40,
    culture: 10,
    desc: '摄影集作品，以沙尘暴为题材',
  },
  {
    id: 'v31w38',
    title: '《沙尘暴》',
    form: '诗歌集',
    cost: { tech: 10 },
    baseQuality: 50,
    culture: 15,
    desc: '诗歌集作品，以沙尘暴为题材',
  },
  {
    id: 'v31w39',
    title: '《沙尘暴》',
    form: '话剧',
    cost: { tech: 15 },
    baseQuality: 60,
    culture: 20,
    desc: '话剧作品，以沙尘暴为题材',
  },
  {
    id: 'v31w40',
    title: '《沙尘暴》',
    form: '舞蹈',
    cost: { tech: 20 },
    baseQuality: 70,
    culture: 25,
    desc: '舞蹈作品，以沙尘暴为题材',
  },
  {
    id: 'v31w41',
    title: '《冰川湖》',
    form: '油画',
    cost: { tech: 25 },
    baseQuality: 80,
    culture: 5,
    desc: '油画作品，以冰川湖为题材',
  },
  {
    id: 'v31w42',
    title: '《冰川湖》',
    form: '雕塑',
    cost: { tech: 30 },
    baseQuality: 90,
    culture: 10,
    desc: '雕塑作品，以冰川湖为题材',
  },
  {
    id: 'v31w43',
    title: '《冰川湖》',
    form: '交响乐',
    cost: { tech: 5 },
    baseQuality: 30,
    culture: 15,
    desc: '交响乐作品，以冰川湖为题材',
  },
  {
    id: 'v31w44',
    title: '《冰川湖》',
    form: '小说',
    cost: { tech: 10 },
    baseQuality: 40,
    culture: 20,
    desc: '小说作品，以冰川湖为题材',
  },
  {
    id: 'v31w45',
    title: '《冰川湖》',
    form: '纪录片',
    cost: { tech: 15 },
    baseQuality: 50,
    culture: 25,
    desc: '纪录片作品，以冰川湖为题材',
  },
  {
    id: 'v31w46',
    title: '《冰川湖》',
    form: '壁画',
    cost: { tech: 20 },
    baseQuality: 60,
    culture: 5,
    desc: '壁画作品，以冰川湖为题材',
  },
  {
    id: 'v31w47',
    title: '《冰川湖》',
    form: '摄影集',
    cost: { tech: 25 },
    baseQuality: 70,
    culture: 10,
    desc: '摄影集作品，以冰川湖为题材',
  },
  {
    id: 'v31w48',
    title: '《冰川湖》',
    form: '诗歌集',
    cost: { tech: 30 },
    baseQuality: 80,
    culture: 15,
    desc: '诗歌集作品，以冰川湖为题材',
  },
  {
    id: 'v31w49',
    title: '《冰川湖》',
    form: '话剧',
    cost: { tech: 5 },
    baseQuality: 90,
    culture: 20,
    desc: '话剧作品，以冰川湖为题材',
  },
  {
    id: 'v31w50',
    title: '《冰川湖》',
    form: '舞蹈',
    cost: { tech: 10 },
    baseQuality: 30,
    culture: 25,
    desc: '舞蹈作品，以冰川湖为题材',
  },
  {
    id: 'v31w51',
    title: '《发射台》',
    form: '油画',
    cost: { tech: 15 },
    baseQuality: 40,
    culture: 5,
    desc: '油画作品，以发射台为题材',
  },
  {
    id: 'v31w52',
    title: '《发射台》',
    form: '雕塑',
    cost: { tech: 20 },
    baseQuality: 50,
    culture: 10,
    desc: '雕塑作品，以发射台为题材',
  },
  {
    id: 'v31w53',
    title: '《发射台》',
    form: '交响乐',
    cost: { tech: 25 },
    baseQuality: 60,
    culture: 15,
    desc: '交响乐作品，以发射台为题材',
  },
  {
    id: 'v31w54',
    title: '《发射台》',
    form: '小说',
    cost: { tech: 30 },
    baseQuality: 70,
    culture: 20,
    desc: '小说作品，以发射台为题材',
  },
  {
    id: 'v31w55',
    title: '《发射台》',
    form: '纪录片',
    cost: { tech: 5 },
    baseQuality: 80,
    culture: 25,
    desc: '纪录片作品，以发射台为题材',
  },
  {
    id: 'v31w56',
    title: '《发射台》',
    form: '壁画',
    cost: { tech: 10 },
    baseQuality: 90,
    culture: 5,
    desc: '壁画作品，以发射台为题材',
  },
  {
    id: 'v31w57',
    title: '《发射台》',
    form: '摄影集',
    cost: { tech: 15 },
    baseQuality: 30,
    culture: 10,
    desc: '摄影集作品，以发射台为题材',
  },
  {
    id: 'v31w58',
    title: '《发射台》',
    form: '诗歌集',
    cost: { tech: 20 },
    baseQuality: 40,
    culture: 15,
    desc: '诗歌集作品，以发射台为题材',
  },
  {
    id: 'v31w59',
    title: '《发射台》',
    form: '话剧',
    cost: { tech: 25 },
    baseQuality: 50,
    culture: 20,
    desc: '话剧作品，以发射台为题材',
  },
  {
    id: 'v31w60',
    title: '《发射台》',
    form: '舞蹈',
    cost: { tech: 30 },
    baseQuality: 60,
    culture: 25,
    desc: '舞蹈作品，以发射台为题材',
  },
  {
    id: 'v31w61',
    title: '《温室花海》',
    form: '油画',
    cost: { tech: 5 },
    baseQuality: 70,
    culture: 5,
    desc: '油画作品，以温室花海为题材',
  },
  {
    id: 'v31w62',
    title: '《温室花海》',
    form: '雕塑',
    cost: { tech: 10 },
    baseQuality: 80,
    culture: 10,
    desc: '雕塑作品，以温室花海为题材',
  },
  {
    id: 'v31w63',
    title: '《温室花海》',
    form: '交响乐',
    cost: { tech: 15 },
    baseQuality: 90,
    culture: 15,
    desc: '交响乐作品，以温室花海为题材',
  },
  {
    id: 'v31w64',
    title: '《温室花海》',
    form: '小说',
    cost: { tech: 20 },
    baseQuality: 30,
    culture: 20,
    desc: '小说作品，以温室花海为题材',
  },
  {
    id: 'v31w65',
    title: '《温室花海》',
    form: '纪录片',
    cost: { tech: 25 },
    baseQuality: 40,
    culture: 25,
    desc: '纪录片作品，以温室花海为题材',
  },
  {
    id: 'v31w66',
    title: '《温室花海》',
    form: '壁画',
    cost: { tech: 30 },
    baseQuality: 50,
    culture: 5,
    desc: '壁画作品，以温室花海为题材',
  },
  {
    id: 'v31w67',
    title: '《温室花海》',
    form: '摄影集',
    cost: { tech: 5 },
    baseQuality: 60,
    culture: 10,
    desc: '摄影集作品，以温室花海为题材',
  },
  {
    id: 'v31w68',
    title: '《温室花海》',
    form: '诗歌集',
    cost: { tech: 10 },
    baseQuality: 70,
    culture: 15,
    desc: '诗歌集作品，以温室花海为题材',
  },
  {
    id: 'v31w69',
    title: '《温室花海》',
    form: '话剧',
    cost: { tech: 15 },
    baseQuality: 80,
    culture: 20,
    desc: '话剧作品，以温室花海为题材',
  },
  {
    id: 'v31w70',
    title: '《温室花海》',
    form: '舞蹈',
    cost: { tech: 20 },
    baseQuality: 90,
    culture: 25,
    desc: '舞蹈作品，以温室花海为题材',
  },
  {
    id: 'v31w71',
    title: '《轨道黎明》',
    form: '油画',
    cost: { tech: 25 },
    baseQuality: 30,
    culture: 5,
    desc: '油画作品，以轨道黎明为题材',
  },
  {
    id: 'v31w72',
    title: '《轨道黎明》',
    form: '雕塑',
    cost: { tech: 30 },
    baseQuality: 40,
    culture: 10,
    desc: '雕塑作品，以轨道黎明为题材',
  },
  {
    id: 'v31w73',
    title: '《轨道黎明》',
    form: '交响乐',
    cost: { tech: 5 },
    baseQuality: 50,
    culture: 15,
    desc: '交响乐作品，以轨道黎明为题材',
  },
  {
    id: 'v31w74',
    title: '《轨道黎明》',
    form: '小说',
    cost: { tech: 10 },
    baseQuality: 60,
    culture: 20,
    desc: '小说作品，以轨道黎明为题材',
  },
  {
    id: 'v31w75',
    title: '《轨道黎明》',
    form: '纪录片',
    cost: { tech: 15 },
    baseQuality: 70,
    culture: 25,
    desc: '纪录片作品，以轨道黎明为题材',
  },
  {
    id: 'v31w76',
    title: '《轨道黎明》',
    form: '壁画',
    cost: { tech: 20 },
    baseQuality: 80,
    culture: 5,
    desc: '壁画作品，以轨道黎明为题材',
  },
  {
    id: 'v31w77',
    title: '《轨道黎明》',
    form: '摄影集',
    cost: { tech: 25 },
    baseQuality: 90,
    culture: 10,
    desc: '摄影集作品，以轨道黎明为题材',
  },
  {
    id: 'v31w78',
    title: '《轨道黎明》',
    form: '诗歌集',
    cost: { tech: 30 },
    baseQuality: 30,
    culture: 15,
    desc: '诗歌集作品，以轨道黎明为题材',
  },
  {
    id: 'v31w79',
    title: '《轨道黎明》',
    form: '话剧',
    cost: { tech: 5 },
    baseQuality: 40,
    culture: 20,
    desc: '话剧作品，以轨道黎明为题材',
  },
  {
    id: 'v31w80',
    title: '《轨道黎明》',
    form: '舞蹈',
    cost: { tech: 10 },
    baseQuality: 50,
    culture: 25,
    desc: '舞蹈作品，以轨道黎明为题材',
  },
  {
    id: 'v31w81',
    title: '《火星日出》·续2',
    form: '油画',
    cost: { tech: 15 },
    baseQuality: 60,
    culture: 5,
    desc: '油画作品，以火星日出为题材',
  },
  {
    id: 'v31w82',
    title: '《火星日出》·续2',
    form: '雕塑',
    cost: { tech: 20 },
    baseQuality: 70,
    culture: 10,
    desc: '雕塑作品，以火星日出为题材',
  },
  {
    id: 'v31w83',
    title: '《火星日出》·续2',
    form: '交响乐',
    cost: { tech: 25 },
    baseQuality: 80,
    culture: 15,
    desc: '交响乐作品，以火星日出为题材',
  },
  {
    id: 'v31w84',
    title: '《火星日出》·续2',
    form: '小说',
    cost: { tech: 30 },
    baseQuality: 90,
    culture: 20,
    desc: '小说作品，以火星日出为题材',
  },
  {
    id: 'v31w85',
    title: '《火星日出》·续2',
    form: '纪录片',
    cost: { tech: 5 },
    baseQuality: 30,
    culture: 25,
    desc: '纪录片作品，以火星日出为题材',
  },
  {
    id: 'v31w86',
    title: '《火星日出》·续2',
    form: '壁画',
    cost: { tech: 10 },
    baseQuality: 40,
    culture: 5,
    desc: '壁画作品，以火星日出为题材',
  },
  {
    id: 'v31w87',
    title: '《火星日出》·续2',
    form: '摄影集',
    cost: { tech: 15 },
    baseQuality: 50,
    culture: 10,
    desc: '摄影集作品，以火星日出为题材',
  },
  {
    id: 'v31w88',
    title: '《火星日出》·续2',
    form: '诗歌集',
    cost: { tech: 20 },
    baseQuality: 60,
    culture: 15,
    desc: '诗歌集作品，以火星日出为题材',
  },
  {
    id: 'v31w89',
    title: '《火星日出》·续2',
    form: '话剧',
    cost: { tech: 25 },
    baseQuality: 70,
    culture: 20,
    desc: '话剧作品，以火星日出为题材',
  },
  {
    id: 'v31w90',
    title: '《火星日出》·续2',
    form: '舞蹈',
    cost: { tech: 30 },
    baseQuality: 80,
    culture: 25,
    desc: '舞蹈作品，以火星日出为题材',
  },
  {
    id: 'v31w91',
    title: '《第一批移民》·续2',
    form: '油画',
    cost: { tech: 5 },
    baseQuality: 90,
    culture: 5,
    desc: '油画作品，以第一批移民为题材',
  },
  {
    id: 'v31w92',
    title: '《第一批移民》·续2',
    form: '雕塑',
    cost: { tech: 10 },
    baseQuality: 30,
    culture: 10,
    desc: '雕塑作品，以第一批移民为题材',
  },
  {
    id: 'v31w93',
    title: '《第一批移民》·续2',
    form: '交响乐',
    cost: { tech: 15 },
    baseQuality: 40,
    culture: 15,
    desc: '交响乐作品，以第一批移民为题材',
  },
  {
    id: 'v31w94',
    title: '《第一批移民》·续2',
    form: '小说',
    cost: { tech: 20 },
    baseQuality: 50,
    culture: 20,
    desc: '小说作品，以第一批移民为题材',
  },
  {
    id: 'v31w95',
    title: '《第一批移民》·续2',
    form: '纪录片',
    cost: { tech: 25 },
    baseQuality: 60,
    culture: 25,
    desc: '纪录片作品，以第一批移民为题材',
  },
  {
    id: 'v31w96',
    title: '《第一批移民》·续2',
    form: '壁画',
    cost: { tech: 30 },
    baseQuality: 70,
    culture: 5,
    desc: '壁画作品，以第一批移民为题材',
  },
  {
    id: 'v31w97',
    title: '《第一批移民》·续2',
    form: '摄影集',
    cost: { tech: 5 },
    baseQuality: 80,
    culture: 10,
    desc: '摄影集作品，以第一批移民为题材',
  },
  {
    id: 'v31w98',
    title: '《第一批移民》·续2',
    form: '诗歌集',
    cost: { tech: 10 },
    baseQuality: 90,
    culture: 15,
    desc: '诗歌集作品，以第一批移民为题材',
  },
  {
    id: 'v31w99',
    title: '《第一批移民》·续2',
    form: '话剧',
    cost: { tech: 15 },
    baseQuality: 30,
    culture: 20,
    desc: '话剧作品，以第一批移民为题材',
  },
  {
    id: 'v31w100',
    title: '《第一批移民》·续2',
    form: '舞蹈',
    cost: { tech: 20 },
    baseQuality: 40,
    culture: 25,
    desc: '舞蹈作品，以第一批移民为题材',
  },
  {
    id: 'v31w101',
    title: '《穹顶之夜》·续2',
    form: '油画',
    cost: { tech: 25 },
    baseQuality: 50,
    culture: 5,
    desc: '油画作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w102',
    title: '《穹顶之夜》·续2',
    form: '雕塑',
    cost: { tech: 30 },
    baseQuality: 60,
    culture: 10,
    desc: '雕塑作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w103',
    title: '《穹顶之夜》·续2',
    form: '交响乐',
    cost: { tech: 5 },
    baseQuality: 70,
    culture: 15,
    desc: '交响乐作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w104',
    title: '《穹顶之夜》·续2',
    form: '小说',
    cost: { tech: 10 },
    baseQuality: 80,
    culture: 20,
    desc: '小说作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w105',
    title: '《穹顶之夜》·续2',
    form: '纪录片',
    cost: { tech: 15 },
    baseQuality: 90,
    culture: 25,
    desc: '纪录片作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w106',
    title: '《穹顶之夜》·续2',
    form: '壁画',
    cost: { tech: 20 },
    baseQuality: 30,
    culture: 5,
    desc: '壁画作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w107',
    title: '《穹顶之夜》·续2',
    form: '摄影集',
    cost: { tech: 25 },
    baseQuality: 40,
    culture: 10,
    desc: '摄影集作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w108',
    title: '《穹顶之夜》·续2',
    form: '诗歌集',
    cost: { tech: 30 },
    baseQuality: 50,
    culture: 15,
    desc: '诗歌集作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w109',
    title: '《穹顶之夜》·续2',
    form: '话剧',
    cost: { tech: 5 },
    baseQuality: 60,
    culture: 20,
    desc: '话剧作品，以穹顶之夜为题材',
  },
  {
    id: 'v31w110',
    title: '《穹顶之夜》·续2',
    form: '舞蹈',
    cost: { tech: 10 },
    baseQuality: 70,
    culture: 25,
    desc: '舞蹈作品，以穹顶之夜为题材',
  },
];

var V31_CULTURE_VENUES = [
  {
    id: 'v31v01',
    buildingId: 'park',
    name: '公园',
    icon: '🏞️',
    points: 2,
    desc: '公园：每座提供文化分 2 点',
  },
  {
    id: 'v31v02',
    buildingId: 'theater',
    name: '剧院',
    icon: '🎭',
    points: 5,
    desc: '剧院：每座提供文化分 5 点',
  },
  {
    id: 'v31v03',
    buildingId: 'library',
    name: '图书馆',
    icon: '📚',
    points: 4,
    desc: '图书馆：每座提供文化分 4 点',
  },
  {
    id: 'v31v04',
    buildingId: 'stadium',
    name: '体育场',
    icon: '🏟️',
    points: 6,
    desc: '体育场：每座提供文化分 6 点',
  },
  {
    id: 'v31v05',
    buildingId: 'museum',
    name: '博物馆',
    icon: '🏛️',
    points: 8,
    desc: '博物馆：每座提供文化分 8 点',
  },
  {
    id: 'v31v06',
    buildingId: 'school',
    name: '学校',
    icon: '🏫',
    points: 3,
    desc: '学校：每座提供文化分 3 点',
  },
  {
    id: 'v31v07',
    buildingId: 'monument',
    name: '纪念碑',
    icon: '🗿',
    points: 7,
    desc: '纪念碑：每座提供文化分 7 点',
  },
  {
    id: 'v31v08',
    buildingId: 'history_archive',
    name: '历史档案馆',
    icon: '📜',
    points: 6,
    desc: '历史档案馆：每座提供文化分 6 点',
  },
  {
    id: 'v31v09',
    buildingId: 'park',
    name: '公园',
    icon: '🏞️',
    points: 2,
    desc: '公园：每座提供文化分 2 点',
  },
  {
    id: 'v31v10',
    buildingId: 'theater',
    name: '剧院',
    icon: '🎭',
    points: 5,
    desc: '剧院：每座提供文化分 5 点',
  },
  {
    id: 'v31v11',
    buildingId: 'library',
    name: '图书馆',
    icon: '📚',
    points: 4,
    desc: '图书馆：每座提供文化分 4 点',
  },
  {
    id: 'v31v12',
    buildingId: 'stadium',
    name: '体育场',
    icon: '🏟️',
    points: 6,
    desc: '体育场：每座提供文化分 6 点',
  },
  {
    id: 'v31v13',
    buildingId: 'museum',
    name: '博物馆',
    icon: '🏛️',
    points: 8,
    desc: '博物馆：每座提供文化分 8 点',
  },
  {
    id: 'v31v14',
    buildingId: 'school',
    name: '学校',
    icon: '🏫',
    points: 3,
    desc: '学校：每座提供文化分 3 点',
  },
  {
    id: 'v31v15',
    buildingId: 'monument',
    name: '纪念碑',
    icon: '🗿',
    points: 7,
    desc: '纪念碑：每座提供文化分 7 点',
  },
  {
    id: 'v31v16',
    buildingId: 'history_archive',
    name: '历史档案馆',
    icon: '📜',
    points: 6,
    desc: '历史档案馆：每座提供文化分 6 点',
  },
  {
    id: 'v31v17',
    buildingId: 'park',
    name: '公园',
    icon: '🏞️',
    points: 2,
    desc: '公园：每座提供文化分 2 点',
  },
  {
    id: 'v31v18',
    buildingId: 'theater',
    name: '剧院',
    icon: '🎭',
    points: 5,
    desc: '剧院：每座提供文化分 5 点',
  },
  {
    id: 'v31v19',
    buildingId: 'library',
    name: '图书馆',
    icon: '📚',
    points: 4,
    desc: '图书馆：每座提供文化分 4 点',
  },
  {
    id: 'v31v20',
    buildingId: 'stadium',
    name: '体育场',
    icon: '🏟️',
    points: 6,
    desc: '体育场：每座提供文化分 6 点',
  },
  {
    id: 'v31v21',
    buildingId: 'museum',
    name: '博物馆',
    icon: '🏛️',
    points: 8,
    desc: '博物馆：每座提供文化分 8 点',
  },
  {
    id: 'v31v22',
    buildingId: 'school',
    name: '学校',
    icon: '🏫',
    points: 3,
    desc: '学校：每座提供文化分 3 点',
  },
  {
    id: 'v31v23',
    buildingId: 'monument',
    name: '纪念碑',
    icon: '🗿',
    points: 7,
    desc: '纪念碑：每座提供文化分 7 点',
  },
  {
    id: 'v31v24',
    buildingId: 'history_archive',
    name: '历史档案馆',
    icon: '📜',
    points: 6,
    desc: '历史档案馆：每座提供文化分 6 点',
  },
  {
    id: 'v31v25',
    buildingId: 'park',
    name: '公园',
    icon: '🏞️',
    points: 2,
    desc: '公园：每座提供文化分 2 点',
  },
  {
    id: 'v31v26',
    buildingId: 'theater',
    name: '剧院',
    icon: '🎭',
    points: 5,
    desc: '剧院：每座提供文化分 5 点',
  },
  {
    id: 'v31v27',
    buildingId: 'library',
    name: '图书馆',
    icon: '📚',
    points: 4,
    desc: '图书馆：每座提供文化分 4 点',
  },
  {
    id: 'v31v28',
    buildingId: 'stadium',
    name: '体育场',
    icon: '🏟️',
    points: 6,
    desc: '体育场：每座提供文化分 6 点',
  },
  {
    id: 'v31v29',
    buildingId: 'museum',
    name: '博物馆',
    icon: '🏛️',
    points: 8,
    desc: '博物馆：每座提供文化分 8 点',
  },
  {
    id: 'v31v30',
    buildingId: 'school',
    name: '学校',
    icon: '🏫',
    points: 3,
    desc: '学校：每座提供文化分 3 点',
  },
  {
    id: 'v31v31',
    buildingId: 'monument',
    name: '纪念碑',
    icon: '🗿',
    points: 7,
    desc: '纪念碑：每座提供文化分 7 点',
  },
  {
    id: 'v31v32',
    buildingId: 'history_archive',
    name: '历史档案馆',
    icon: '📜',
    points: 6,
    desc: '历史档案馆：每座提供文化分 6 点',
  },
  {
    id: 'v31v33',
    buildingId: 'park',
    name: '公园',
    icon: '🏞️',
    points: 2,
    desc: '公园：每座提供文化分 2 点',
  },
  {
    id: 'v31v34',
    buildingId: 'theater',
    name: '剧院',
    icon: '🎭',
    points: 5,
    desc: '剧院：每座提供文化分 5 点',
  },
  {
    id: 'v31v35',
    buildingId: 'library',
    name: '图书馆',
    icon: '📚',
    points: 4,
    desc: '图书馆：每座提供文化分 4 点',
  },
  {
    id: 'v31v36',
    buildingId: 'stadium',
    name: '体育场',
    icon: '🏟️',
    points: 6,
    desc: '体育场：每座提供文化分 6 点',
  },
];

/* ================================================================
 * 6. 文化面板：节日 / 作品 / 场馆
 * 举办节日、创作作品均扣真实库存（食物/钢材/科技点），并写入
 * 本地面板记录；场馆分按 game.builder 的真实建筑计数推导。
 * ================================================================ */

function V31CulturePanel(game, manager) {
  V31BasePanel.call(this, game, manager);
  this.id = 'culture';
  this.title = '文化';
  this.icon = '🎭';
  this.tabs = [
    { id: 'festivals', name: '🎉 节日' },
    { id: 'works', name: '🎨 作品' },
    { id: 'venues', name: '🏛️ 场馆' },
  ];
  this.activeTab = 'festivals';
  this.hostedFestivals = {};  // festivalId -> {at, count}
  this.myWorks = [];          // {id, title, form, quality, at}
  this.cultureLog = [];
}
V31CulturePanel.prototype = Object.create(V31BasePanel.prototype);
V31CulturePanel.prototype.constructor = V31CulturePanel;

V31CulturePanel.prototype.log = function (text) {
  this.cultureLog.unshift({ at: Date.now(), text: text });
  if (this.cultureLog.length > 30) this.cultureLog.pop();
};
V31CulturePanel.prototype.venueScore = function () {
  var seen = {};
  var total = 0;
  var detail = [];
  for (var i = 0; i < V31_CULTURE_VENUES.length; i++) {
    var v = V31_CULTURE_VENUES[i];
    if (seen[v.buildingId]) continue;
    seen[v.buildingId] = true;
    var n = this.buildingCount(v.buildingId);
    if (n > 0) {
      total += n * v.points;
      detail.push({ name: v.name, icon: v.icon, count: n, points: n * v.points });
    }
  }
  return { total: total, detail: detail };
};
V31CulturePanel.prototype.worksScore = function () {
  var total = 0;
  for (var i = 0; i < this.myWorks.length; i++) total += Math.floor(this.myWorks[i].quality / 10);
  return total;
};
V31CulturePanel.prototype.festivalScore = function () {
  var total = 0;
  for (var id in this.hostedFestivals) {
    var f = this.festivalById(id);
    if (f) total += f.culture * this.hostedFestivals[id].count;
  }
  return total;
};
/* 文化分 = 场馆分 + 作品分 + 节日分；每 100 分提升 1 级文化等级。 */
V31CulturePanel.prototype.cultureScore = function () {
  var v = this.venueScore().total;
  var w = this.worksScore();
  var f = this.festivalScore();
  var total = v + w + f;
  var level = 1 + Math.floor(total / 100);
  var stage = level >= 10 ? '星际文明' : level >= 7 ? '繁荣文化' : level >= 4 ? '新兴文化' : level >= 2 ? '萌芽文化' : '拓荒文化';
  return { total: total, venue: v, works: w, festivals: f, level: level, stage: stage };
};
V31CulturePanel.prototype.festivalById = function (id) {
  for (var i = 0; i < V31_FESTIVALS.length; i++) if (V31_FESTIVALS[i].id === id) return V31_FESTIVALS[i];
  return null;
};
V31CulturePanel.prototype.workById = function (id) {
  for (var i = 0; i < V31_CULTURE_WORKS.length; i++) if (V31_CULTURE_WORKS[i].id === id) return V31_CULTURE_WORKS[i];
  return null;
};
V31CulturePanel.prototype.canHost = function (fest) {
  if (this.buildingCount(fest.needVenue) < 1) return { ok: false, reason: '需要场馆建筑：' + fest.needVenue };
  var rec = this.hostedFestivals[fest.id];
  if (rec && Date.now() - rec.at < fest.cooldownDays * 24 * 3600 * 1000)
    return { ok: false, reason: '冷却中（每 ' + fest.cooldownDays + ' 天可办一次）' };
  if (!this.canAfford(fest.cost)) return { ok: false, reason: '资源不足：' + V31Utils.costStr(fest.cost) };
  return { ok: true };
};
V31CulturePanel.prototype.hostFestival = function (festivalId) {
  var fest = this.festivalById(festivalId);
  if (!fest) return { ok: false, reason: '未知节日' };
  var chk = this.canHost(fest);
  if (!chk.ok) return chk;
  this.payCost(fest.cost);
  var rec = this.hostedFestivals[festivalId] || { count: 0 };
  rec.at = Date.now();
  rec.count++;
  this.hostedFestivals[festivalId] = rec;
  this.log('举办节日：' + fest.name + '（满意度 +' + fest.happy + '，文化 +' + fest.culture + '）');
  return { ok: true, happy: fest.happy, culture: fest.culture };
};
/* 作品品质 = 基础品质 + 实验室加成 + 场馆加成，上限 100。
 * 实验室每座 +2，文化场馆每座 +1。 */
V31CulturePanel.prototype.workQuality = function (work) {
  var labs = this.buildingCount('lab') + this.buildingCount('gene_lab');
  var venues = 0;
  var seen = {};
  for (var i = 0; i < V31_CULTURE_VENUES.length; i++) {
    var bid = V31_CULTURE_VENUES[i].buildingId;
    if (!seen[bid]) { seen[bid] = true; venues += this.buildingCount(bid); }
  }
  return V31Utils.clamp(work.baseQuality + labs * 2 + venues * 1, 0, 100);
};
V31CulturePanel.prototype.createWork = function (workId) {
  var work = this.workById(workId);
  if (!work) return { ok: false, reason: '未知作品' };
  if (!this.canAfford(work.cost)) return { ok: false, reason: '资源不足：' + V31Utils.costStr(work.cost) };
  this.payCost(work.cost);
  var quality = this.workQuality(work);
  var mine = { id: work.id, title: work.title, form: work.form, quality: quality, at: Date.now() };
  this.myWorks.push(mine);
  this.log('创作作品：' + work.title + '（品质 ' + quality + '）');
  return { ok: true, work: mine };
};
V31CulturePanel.prototype.tourWork = function (workId) {
  for (var i = 0; i < this.myWorks.length; i++) {
    if (this.myWorks[i].id === workId) {
      this.log('作品巡展：' + this.myWorks[i].title + '（品质 ' + this.myWorks[i].quality + '）');
      return { ok: true, work: this.myWorks[i] };
    }
  }
  return { ok: false, reason: '尚未创作该作品' };
};
V31CulturePanel.prototype.render = function () {
  var tab = this.activeTab;
  if (tab === 'works') return this._renderWorks();
  if (tab === 'venues') return this._renderVenues();
  return this._renderFestivals();
};
V31CulturePanel.prototype._renderHead = function () {
  var s = this.cultureScore();
  return '<div class="v31-sec"><h3>🎭 文化总分：' + s.total + ' · ' + s.level + ' 级 · ' + s.stage + '</h3>' +
    V31Utils.bar(Math.min(1, s.total / 1000), '#f472b6') +
    '<div class="v31-row"><span>场馆</span><b>' + s.venue + '</b></div>' +
    '<div class="v31-row"><span>作品</span><b>' + s.works + '</b></div>' +
    '<div class="v31-row"><span>节日</span><b>' + s.festivals + '</b></div>' +
    '<div class="v31-muted">每 100 分升 1 级；场馆分按真实建筑计数，作品分按品质 /10 计，节日分按举办次数累计。</div></div>';
};
V31CulturePanel.prototype._renderFestivals = function () {
  var html = this._renderHead();
  html += '<div class="v31-sec"><h3>🎉 节日（前 16 个）</h3>';
  for (var i = 0; i < 16; i++) {
    var f = V31_FESTIVALS[i];
    var chk = this.canHost(f);
    var rec = this.hostedFestivals[f.id];
    html += '<div class="v31-card"><div class="v31-row"><span><b>🎉 ' + V31Utils.esc(f.name) + '</b> ' +
      '<span class="v31-muted">' + V31Utils.esc(f.desc) + '</span></span>' +
      '<span>' + V31Utils.esc(V31Utils.costStr(f.cost)) + '</span></div>' +
      '<div class="v31-muted">需场馆：' + V31Utils.esc(f.needVenue) + ' · 冷却 ' + f.cooldownDays + ' 天' +
      (rec ? ' · 已办 ' + rec.count + ' 次' : '') + '</div>' +
      '<div style="margin-top:6px"><button class="v31-btn" data-v31-festival="' + f.id + '"' +
      (chk.ok ? '' : ' disabled') + '>举办节日</button>' +
      (chk.ok ? '' : ' <span class="v31-muted">' + V31Utils.esc(chk.reason) + '</span>') + '</div></div>';
  }
  html += '<div class="v31-muted">共 ' + V31_FESTIVALS.length + ' 个节日，按季节轮换；完整目录见面板数据 V31_FESTIVALS。</div></div>';
  return html;
};
V31CulturePanel.prototype._renderWorks = function () {
  var html = this._renderHead();
  html += '<div class="v31-sec"><h3>🎨 创作作品（前 16 件）</h3>';
  html += '<div class="v31-muted">品质 = 基础品质 + 实验室每座 +2 + 文化场馆每座 +1（上限 100）；作品分按品质 /10 计入文化总分。</div>';
  for (var i = 0; i < 16; i++) {
    var w = V31_CULTURE_WORKS[i];
    var q = this.workQuality(w);
    var owned = false;
    for (var j = 0; j < this.myWorks.length; j++) if (this.myWorks[j].id === w.id) owned = true;
    html += '<div class="v31-card"><div class="v31-row"><span><b>' + V31Utils.esc(w.title) + '</b> ' +
      '<span class="v31-muted">' + V31Utils.esc(w.form) + ' · ' + V31Utils.esc(w.desc) + '</span></span>' +
      '<span>品质 ' + q + ' · ' + V31Utils.esc(V31Utils.costStr(w.cost)) + '</span></div>' +
      '<div style="margin-top:6px">' +
      (owned
        ? '<span class="v31-tag" style="background:#14532d">✅ 已创作</span> <button class="v31-btn ghost" data-v31-tour="' + w.id + '">巡展</button>'
        : '<button class="v31-btn" data-v31-work="' + w.id + '"' + (this.canAfford(w.cost) ? '' : ' disabled') + '>创作</button>') +
      '</div></div>';
  }
  html += '<div class="v31-muted">共 ' + V31_CULTURE_WORKS.length + ' 件可创作作品；已创作 ' + this.myWorks.length + ' 件。</div></div>';
  return html;
};
V31CulturePanel.prototype._renderVenues = function () {
  var html = this._renderHead();
  var vs = this.venueScore();
  html += '<div class="v31-sec"><h3>🏛️ 文化场馆（按真实建筑计数）</h3>';
  if (!vs.detail.length) {
    html += '<div class="v31-muted">尚未建造任何文化场馆。先建 🏞️公园（每座 +2 分）起步。</div>';
  } else {
    for (var i = 0; i < vs.detail.length; i++) {
      var d = vs.detail[i];
      html += '<div class="v31-row"><span>' + d.icon + ' ' + V31Utils.esc(d.name) + ' ×' + d.count + '</span><b>+' + d.points + ' 分</b></div>';
    }
  }
  html += '</div><div class="v31-sec"><h3>📐 场馆分值表</h3>';
  var seen = {};
  for (var j = 0; j < V31_CULTURE_VENUES.length; j++) {
    var v = V31_CULTURE_VENUES[j];
    if (seen[v.buildingId]) continue;
    seen[v.buildingId] = true;
    html += '<div class="v31-row"><span>' + v.icon + ' ' + V31Utils.esc(v.name) + ' <span class="v31-muted">(' + V31Utils.esc(v.buildingId) + ')</span></span><b>每座 +' + v.points + ' 分</b></div>';
  }
  html += '</div>';
  if (this.cultureLog.length) {
    html += '<div class="v31-sec"><h3>📜 最近文化活动</h3>';
    for (var k = 0; k < this.cultureLog.length; k++) {
      html += '<div class="v31-row"><span>' + V31Utils.esc(this.cultureLog[k].text) + '</span><span class="v31-muted">' + V31Utils.nowText(this.cultureLog[k].at) + '</span></div>';
    }
    html += '</div>';
  }
  return html;
};
V31CulturePanel.prototype.bindEvents = function (root) {
  var self = this;
  var bind = function (sel, attr, fn) {
    var btns = root.querySelectorAll(sel);
    for (var i = 0; i < btns.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () { fn(btn.getAttribute(attr)); });
      })(btns[i]);
    }
  };
  bind('[data-v31-festival]', 'data-v31-festival', function (id) {
    var res = self.hostFestival(id);
    self.toast(res.ok ? '🎉 节日举办成功' : '❌ ' + res.reason);
    self.refresh();
  });
  bind('[data-v31-work]', 'data-v31-work', function (id) {
    var res = self.createWork(id);
    self.toast(res.ok ? '🎨 作品已创作（品质 ' + res.work.quality + '）' : '❌ ' + res.reason);
    self.refresh();
  });
  bind('[data-v31-tour]', 'data-v31-tour', function (id) {
    var res = self.tourWork(id);
    self.toast(res.ok ? '🖼️ 作品开始巡展' : '❌ ' + res.reason);
    self.refresh();
  });
};

/* ================================================================
 * 7. 科研数据：100 个科研项目 / 24 个实验室档位（一句话说明）
 * 项目进度公式见 V31ResearchPanel.tick：
 *   每分钟进度 = 实验室产出 × 科技倍率；完成时解锁关联科技
 * ================================================================ */

var V31_RESEARCH_FIELDS = [
  '推进',
  '材料',
  '生命',
  '能源',
  '计算',
  '生态',
  '通讯',
  '医学',
  '农业',
  '地质',
];

var V31_RESEARCH_PROJECTS = [
  {
    id: 'v31p001',
    name: '推进·高效推进 1 期',
    field: '推进',
    tier: 1,
    cost: { tech: 20 },
    durationMin: 10,
    techId: 't-prod-1',
    yieldText: '完成解锁关联科技，推进产出 +5%',
    desc: '推进领域第 1 期项目：高效推进',
  },
  {
    id: 'v31p002',
    name: '材料·轻质合金 1 期',
    field: '材料',
    tier: 1,
    cost: { tech: 25 },
    durationMin: 15,
    techId: 't-build-2',
    yieldText: '完成解锁关联科技，材料产出 +5%',
    desc: '材料领域第 1 期项目：轻质合金',
  },
  {
    id: 'v31p003',
    name: '生命·基因改良 1 期',
    field: '生命',
    tier: 1,
    cost: { tech: 30 },
    durationMin: 20,
    techId: 't-surv-3',
    yieldText: '完成解锁关联科技，生命产出 +5%',
    desc: '生命领域第 1 期项目：基因改良',
  },
  {
    id: 'v31p004',
    name: '能源·聚变约束 1 期',
    field: '能源',
    tier: 1,
    cost: { tech: 35 },
    durationMin: 25,
    techId: 't-prod-4',
    yieldText: '完成解锁关联科技，能源产出 +5%',
    desc: '能源领域第 1 期项目：聚变约束',
  },
  {
    id: 'v31p005',
    name: '计算·量子纠错 1 期',
    field: '计算',
    tier: 1,
    cost: { tech: 40 },
    durationMin: 10,
    techId: 't-build-5',
    yieldText: '完成解锁关联科技，计算产出 +5%',
    desc: '计算领域第 1 期项目：量子纠错',
  },
  {
    id: 'v31p006',
    name: '生态·大气改造 1 期',
    field: '生态',
    tier: 1,
    cost: { tech: 20 },
    durationMin: 15,
    techId: 't-surv-6',
    yieldText: '完成解锁关联科技，生态产出 +5%',
    desc: '生态领域第 1 期项目：大气改造',
  },
  {
    id: 'v31p007',
    name: '通讯·深空通讯 1 期',
    field: '通讯',
    tier: 1,
    cost: { tech: 25 },
    durationMin: 20,
    techId: 't-prod-7',
    yieldText: '完成解锁关联科技，通讯产出 +5%',
    desc: '通讯领域第 1 期项目：深空通讯',
  },
  {
    id: 'v31p008',
    name: '医学·再生医学 1 期',
    field: '医学',
    tier: 1,
    cost: { tech: 30 },
    durationMin: 25,
    techId: 't-build-8',
    yieldText: '完成解锁关联科技，医学产出 +5%',
    desc: '医学领域第 1 期项目：再生医学',
  },
  {
    id: 'v31p009',
    name: '农业·无土栽培 1 期',
    field: '农业',
    tier: 1,
    cost: { tech: 35 },
    durationMin: 10,
    techId: 't-surv-9',
    yieldText: '完成解锁关联科技，农业产出 +5%',
    desc: '农业领域第 1 期项目：无土栽培',
  },
  {
    id: 'v31p010',
    name: '地质·深层探测 1 期',
    field: '地质',
    tier: 1,
    cost: { tech: 40 },
    durationMin: 15,
    techId: 't-prod-10',
    yieldText: '完成解锁关联科技，地质产出 +5%',
    desc: '地质领域第 1 期项目：深层探测',
  },
  {
    id: 'v31p011',
    name: '推进·高效推进 2 期',
    field: '推进',
    tier: 2,
    cost: { tech: 30 },
    durationMin: 25,
    techId: 't-build-1',
    yieldText: '完成解锁关联科技，推进产出 +10%',
    desc: '推进领域第 2 期项目：高效推进',
  },
  {
    id: 'v31p012',
    name: '材料·轻质合金 2 期',
    field: '材料',
    tier: 2,
    cost: { tech: 35 },
    durationMin: 30,
    techId: 't-surv-2',
    yieldText: '完成解锁关联科技，材料产出 +10%',
    desc: '材料领域第 2 期项目：轻质合金',
  },
  {
    id: 'v31p013',
    name: '生命·基因改良 2 期',
    field: '生命',
    tier: 2,
    cost: { tech: 40 },
    durationMin: 15,
    techId: 't-prod-3',
    yieldText: '完成解锁关联科技，生命产出 +10%',
    desc: '生命领域第 2 期项目：基因改良',
  },
  {
    id: 'v31p014',
    name: '能源·聚变约束 2 期',
    field: '能源',
    tier: 2,
    cost: { tech: 45 },
    durationMin: 20,
    techId: 't-build-4',
    yieldText: '完成解锁关联科技，能源产出 +10%',
    desc: '能源领域第 2 期项目：聚变约束',
  },
  {
    id: 'v31p015',
    name: '计算·量子纠错 2 期',
    field: '计算',
    tier: 2,
    cost: { tech: 50 },
    durationMin: 25,
    techId: 't-surv-5',
    yieldText: '完成解锁关联科技，计算产出 +10%',
    desc: '计算领域第 2 期项目：量子纠错',
  },
  {
    id: 'v31p016',
    name: '生态·大气改造 2 期',
    field: '生态',
    tier: 2,
    cost: { tech: 30 },
    durationMin: 30,
    techId: 't-prod-6',
    yieldText: '完成解锁关联科技，生态产出 +10%',
    desc: '生态领域第 2 期项目：大气改造',
  },
  {
    id: 'v31p017',
    name: '通讯·深空通讯 2 期',
    field: '通讯',
    tier: 2,
    cost: { tech: 35 },
    durationMin: 15,
    techId: 't-build-7',
    yieldText: '完成解锁关联科技，通讯产出 +10%',
    desc: '通讯领域第 2 期项目：深空通讯',
  },
  {
    id: 'v31p018',
    name: '医学·再生医学 2 期',
    field: '医学',
    tier: 2,
    cost: { tech: 40 },
    durationMin: 20,
    techId: 't-surv-8',
    yieldText: '完成解锁关联科技，医学产出 +10%',
    desc: '医学领域第 2 期项目：再生医学',
  },
  {
    id: 'v31p019',
    name: '农业·无土栽培 2 期',
    field: '农业',
    tier: 2,
    cost: { tech: 45 },
    durationMin: 25,
    techId: 't-prod-9',
    yieldText: '完成解锁关联科技，农业产出 +10%',
    desc: '农业领域第 2 期项目：无土栽培',
  },
  {
    id: 'v31p020',
    name: '地质·深层探测 2 期',
    field: '地质',
    tier: 2,
    cost: { tech: 50 },
    durationMin: 30,
    techId: 't-build-10',
    yieldText: '完成解锁关联科技，地质产出 +10%',
    desc: '地质领域第 2 期项目：深层探测',
  },
  {
    id: 'v31p021',
    name: '推进·高效推进 3 期',
    field: '推进',
    tier: 3,
    cost: { tech: 40 },
    durationMin: 20,
    techId: 't-surv-1',
    yieldText: '完成解锁关联科技，推进产出 +15%',
    desc: '推进领域第 3 期项目：高效推进',
  },
  {
    id: 'v31p022',
    name: '材料·轻质合金 3 期',
    field: '材料',
    tier: 3,
    cost: { tech: 45 },
    durationMin: 25,
    techId: 't-prod-2',
    yieldText: '完成解锁关联科技，材料产出 +15%',
    desc: '材料领域第 3 期项目：轻质合金',
  },
  {
    id: 'v31p023',
    name: '生命·基因改良 3 期',
    field: '生命',
    tier: 3,
    cost: { tech: 50 },
    durationMin: 30,
    techId: 't-build-3',
    yieldText: '完成解锁关联科技，生命产出 +15%',
    desc: '生命领域第 3 期项目：基因改良',
  },
  {
    id: 'v31p024',
    name: '能源·聚变约束 3 期',
    field: '能源',
    tier: 3,
    cost: { tech: 55 },
    durationMin: 35,
    techId: 't-surv-4',
    yieldText: '完成解锁关联科技，能源产出 +15%',
    desc: '能源领域第 3 期项目：聚变约束',
  },
  {
    id: 'v31p025',
    name: '计算·量子纠错 3 期',
    field: '计算',
    tier: 3,
    cost: { tech: 60 },
    durationMin: 20,
    techId: 't-prod-5',
    yieldText: '完成解锁关联科技，计算产出 +15%',
    desc: '计算领域第 3 期项目：量子纠错',
  },
  {
    id: 'v31p026',
    name: '生态·大气改造 3 期',
    field: '生态',
    tier: 3,
    cost: { tech: 40 },
    durationMin: 25,
    techId: 't-build-6',
    yieldText: '完成解锁关联科技，生态产出 +15%',
    desc: '生态领域第 3 期项目：大气改造',
  },
  {
    id: 'v31p027',
    name: '通讯·深空通讯 3 期',
    field: '通讯',
    tier: 3,
    cost: { tech: 45 },
    durationMin: 30,
    techId: 't-surv-7',
    yieldText: '完成解锁关联科技，通讯产出 +15%',
    desc: '通讯领域第 3 期项目：深空通讯',
  },
  {
    id: 'v31p028',
    name: '医学·再生医学 3 期',
    field: '医学',
    tier: 3,
    cost: { tech: 50 },
    durationMin: 35,
    techId: 't-prod-8',
    yieldText: '完成解锁关联科技，医学产出 +15%',
    desc: '医学领域第 3 期项目：再生医学',
  },
  {
    id: 'v31p029',
    name: '农业·无土栽培 3 期',
    field: '农业',
    tier: 3,
    cost: { tech: 55 },
    durationMin: 20,
    techId: 't-build-9',
    yieldText: '完成解锁关联科技，农业产出 +15%',
    desc: '农业领域第 3 期项目：无土栽培',
  },
  {
    id: 'v31p030',
    name: '地质·深层探测 3 期',
    field: '地质',
    tier: 3,
    cost: { tech: 60 },
    durationMin: 25,
    techId: 't-surv-10',
    yieldText: '完成解锁关联科技，地质产出 +15%',
    desc: '地质领域第 3 期项目：深层探测',
  },
  {
    id: 'v31p031',
    name: '推进·高效推进 4 期',
    field: '推进',
    tier: 4,
    cost: { tech: 50 },
    durationMin: 35,
    techId: 't-prod-1',
    yieldText: '完成解锁关联科技，推进产出 +20%',
    desc: '推进领域第 4 期项目：高效推进',
  },
  {
    id: 'v31p032',
    name: '材料·轻质合金 4 期',
    field: '材料',
    tier: 4,
    cost: { tech: 55 },
    durationMin: 40,
    techId: 't-build-2',
    yieldText: '完成解锁关联科技，材料产出 +20%',
    desc: '材料领域第 4 期项目：轻质合金',
  },
  {
    id: 'v31p033',
    name: '生命·基因改良 4 期',
    field: '生命',
    tier: 4,
    cost: { tech: 60 },
    durationMin: 25,
    techId: 't-surv-3',
    yieldText: '完成解锁关联科技，生命产出 +20%',
    desc: '生命领域第 4 期项目：基因改良',
  },
  {
    id: 'v31p034',
    name: '能源·聚变约束 4 期',
    field: '能源',
    tier: 4,
    cost: { tech: 65 },
    durationMin: 30,
    techId: 't-prod-4',
    yieldText: '完成解锁关联科技，能源产出 +20%',
    desc: '能源领域第 4 期项目：聚变约束',
  },
  {
    id: 'v31p035',
    name: '计算·量子纠错 4 期',
    field: '计算',
    tier: 4,
    cost: { tech: 70 },
    durationMin: 35,
    techId: 't-build-5',
    yieldText: '完成解锁关联科技，计算产出 +20%',
    desc: '计算领域第 4 期项目：量子纠错',
  },
  {
    id: 'v31p036',
    name: '生态·大气改造 4 期',
    field: '生态',
    tier: 4,
    cost: { tech: 50 },
    durationMin: 40,
    techId: 't-surv-6',
    yieldText: '完成解锁关联科技，生态产出 +20%',
    desc: '生态领域第 4 期项目：大气改造',
  },
  {
    id: 'v31p037',
    name: '通讯·深空通讯 4 期',
    field: '通讯',
    tier: 4,
    cost: { tech: 55 },
    durationMin: 25,
    techId: 't-prod-7',
    yieldText: '完成解锁关联科技，通讯产出 +20%',
    desc: '通讯领域第 4 期项目：深空通讯',
  },
  {
    id: 'v31p038',
    name: '医学·再生医学 4 期',
    field: '医学',
    tier: 4,
    cost: { tech: 60 },
    durationMin: 30,
    techId: 't-build-8',
    yieldText: '完成解锁关联科技，医学产出 +20%',
    desc: '医学领域第 4 期项目：再生医学',
  },
  {
    id: 'v31p039',
    name: '农业·无土栽培 4 期',
    field: '农业',
    tier: 4,
    cost: { tech: 65 },
    durationMin: 35,
    techId: 't-surv-9',
    yieldText: '完成解锁关联科技，农业产出 +20%',
    desc: '农业领域第 4 期项目：无土栽培',
  },
  {
    id: 'v31p040',
    name: '地质·深层探测 4 期',
    field: '地质',
    tier: 4,
    cost: { tech: 70 },
    durationMin: 40,
    techId: 't-prod-10',
    yieldText: '完成解锁关联科技，地质产出 +20%',
    desc: '地质领域第 4 期项目：深层探测',
  },
  {
    id: 'v31p041',
    name: '推进·高效推进 5 期',
    field: '推进',
    tier: 5,
    cost: { tech: 60 },
    durationMin: 30,
    techId: 't-build-1',
    yieldText: '完成解锁关联科技，推进产出 +25%',
    desc: '推进领域第 5 期项目：高效推进',
  },
  {
    id: 'v31p042',
    name: '材料·轻质合金 5 期',
    field: '材料',
    tier: 5,
    cost: { tech: 65 },
    durationMin: 35,
    techId: 't-surv-2',
    yieldText: '完成解锁关联科技，材料产出 +25%',
    desc: '材料领域第 5 期项目：轻质合金',
  },
  {
    id: 'v31p043',
    name: '生命·基因改良 5 期',
    field: '生命',
    tier: 5,
    cost: { tech: 70 },
    durationMin: 40,
    techId: 't-prod-3',
    yieldText: '完成解锁关联科技，生命产出 +25%',
    desc: '生命领域第 5 期项目：基因改良',
  },
  {
    id: 'v31p044',
    name: '能源·聚变约束 5 期',
    field: '能源',
    tier: 5,
    cost: { tech: 75 },
    durationMin: 45,
    techId: 't-build-4',
    yieldText: '完成解锁关联科技，能源产出 +25%',
    desc: '能源领域第 5 期项目：聚变约束',
  },
  {
    id: 'v31p045',
    name: '计算·量子纠错 5 期',
    field: '计算',
    tier: 5,
    cost: { tech: 80 },
    durationMin: 30,
    techId: 't-surv-5',
    yieldText: '完成解锁关联科技，计算产出 +25%',
    desc: '计算领域第 5 期项目：量子纠错',
  },
  {
    id: 'v31p046',
    name: '生态·大气改造 5 期',
    field: '生态',
    tier: 5,
    cost: { tech: 60 },
    durationMin: 35,
    techId: 't-prod-6',
    yieldText: '完成解锁关联科技，生态产出 +25%',
    desc: '生态领域第 5 期项目：大气改造',
  },
  {
    id: 'v31p047',
    name: '通讯·深空通讯 5 期',
    field: '通讯',
    tier: 5,
    cost: { tech: 65 },
    durationMin: 40,
    techId: 't-build-7',
    yieldText: '完成解锁关联科技，通讯产出 +25%',
    desc: '通讯领域第 5 期项目：深空通讯',
  },
  {
    id: 'v31p048',
    name: '医学·再生医学 5 期',
    field: '医学',
    tier: 5,
    cost: { tech: 70 },
    durationMin: 45,
    techId: 't-surv-8',
    yieldText: '完成解锁关联科技，医学产出 +25%',
    desc: '医学领域第 5 期项目：再生医学',
  },
  {
    id: 'v31p049',
    name: '农业·无土栽培 5 期',
    field: '农业',
    tier: 5,
    cost: { tech: 75 },
    durationMin: 30,
    techId: 't-prod-9',
    yieldText: '完成解锁关联科技，农业产出 +25%',
    desc: '农业领域第 5 期项目：无土栽培',
  },
  {
    id: 'v31p050',
    name: '地质·深层探测 5 期',
    field: '地质',
    tier: 5,
    cost: { tech: 80 },
    durationMin: 35,
    techId: 't-build-10',
    yieldText: '完成解锁关联科技，地质产出 +25%',
    desc: '地质领域第 5 期项目：深层探测',
  },
  {
    id: 'v31p051',
    name: '推进·高效推进 6 期',
    field: '推进',
    tier: 6,
    cost: { tech: 70 },
    durationMin: 45,
    techId: 't-surv-1',
    yieldText: '完成解锁关联科技，推进产出 +30%',
    desc: '推进领域第 6 期项目：高效推进',
  },
  {
    id: 'v31p052',
    name: '材料·轻质合金 6 期',
    field: '材料',
    tier: 6,
    cost: { tech: 75 },
    durationMin: 50,
    techId: 't-prod-2',
    yieldText: '完成解锁关联科技，材料产出 +30%',
    desc: '材料领域第 6 期项目：轻质合金',
  },
  {
    id: 'v31p053',
    name: '生命·基因改良 6 期',
    field: '生命',
    tier: 6,
    cost: { tech: 80 },
    durationMin: 35,
    techId: 't-build-3',
    yieldText: '完成解锁关联科技，生命产出 +30%',
    desc: '生命领域第 6 期项目：基因改良',
  },
  {
    id: 'v31p054',
    name: '能源·聚变约束 6 期',
    field: '能源',
    tier: 6,
    cost: { tech: 85 },
    durationMin: 40,
    techId: 't-surv-4',
    yieldText: '完成解锁关联科技，能源产出 +30%',
    desc: '能源领域第 6 期项目：聚变约束',
  },
  {
    id: 'v31p055',
    name: '计算·量子纠错 6 期',
    field: '计算',
    tier: 6,
    cost: { tech: 90 },
    durationMin: 45,
    techId: 't-prod-5',
    yieldText: '完成解锁关联科技，计算产出 +30%',
    desc: '计算领域第 6 期项目：量子纠错',
  },
  {
    id: 'v31p056',
    name: '生态·大气改造 6 期',
    field: '生态',
    tier: 6,
    cost: { tech: 70 },
    durationMin: 50,
    techId: 't-build-6',
    yieldText: '完成解锁关联科技，生态产出 +30%',
    desc: '生态领域第 6 期项目：大气改造',
  },
  {
    id: 'v31p057',
    name: '通讯·深空通讯 6 期',
    field: '通讯',
    tier: 6,
    cost: { tech: 75 },
    durationMin: 35,
    techId: 't-surv-7',
    yieldText: '完成解锁关联科技，通讯产出 +30%',
    desc: '通讯领域第 6 期项目：深空通讯',
  },
  {
    id: 'v31p058',
    name: '医学·再生医学 6 期',
    field: '医学',
    tier: 6,
    cost: { tech: 80 },
    durationMin: 40,
    techId: 't-prod-8',
    yieldText: '完成解锁关联科技，医学产出 +30%',
    desc: '医学领域第 6 期项目：再生医学',
  },
  {
    id: 'v31p059',
    name: '农业·无土栽培 6 期',
    field: '农业',
    tier: 6,
    cost: { tech: 85 },
    durationMin: 45,
    techId: 't-build-9',
    yieldText: '完成解锁关联科技，农业产出 +30%',
    desc: '农业领域第 6 期项目：无土栽培',
  },
  {
    id: 'v31p060',
    name: '地质·深层探测 6 期',
    field: '地质',
    tier: 6,
    cost: { tech: 90 },
    durationMin: 50,
    techId: 't-surv-10',
    yieldText: '完成解锁关联科技，地质产出 +30%',
    desc: '地质领域第 6 期项目：深层探测',
  },
  {
    id: 'v31p061',
    name: '推进·高效推进 7 期',
    field: '推进',
    tier: 7,
    cost: { tech: 80 },
    durationMin: 40,
    techId: 't-prod-1',
    yieldText: '完成解锁关联科技，推进产出 +35%',
    desc: '推进领域第 7 期项目：高效推进',
  },
  {
    id: 'v31p062',
    name: '材料·轻质合金 7 期',
    field: '材料',
    tier: 7,
    cost: { tech: 85 },
    durationMin: 45,
    techId: 't-build-2',
    yieldText: '完成解锁关联科技，材料产出 +35%',
    desc: '材料领域第 7 期项目：轻质合金',
  },
  {
    id: 'v31p063',
    name: '生命·基因改良 7 期',
    field: '生命',
    tier: 7,
    cost: { tech: 90 },
    durationMin: 50,
    techId: 't-surv-3',
    yieldText: '完成解锁关联科技，生命产出 +35%',
    desc: '生命领域第 7 期项目：基因改良',
  },
  {
    id: 'v31p064',
    name: '能源·聚变约束 7 期',
    field: '能源',
    tier: 7,
    cost: { tech: 95 },
    durationMin: 55,
    techId: 't-prod-4',
    yieldText: '完成解锁关联科技，能源产出 +35%',
    desc: '能源领域第 7 期项目：聚变约束',
  },
  {
    id: 'v31p065',
    name: '计算·量子纠错 7 期',
    field: '计算',
    tier: 7,
    cost: { tech: 100 },
    durationMin: 40,
    techId: 't-build-5',
    yieldText: '完成解锁关联科技，计算产出 +35%',
    desc: '计算领域第 7 期项目：量子纠错',
  },
  {
    id: 'v31p066',
    name: '生态·大气改造 7 期',
    field: '生态',
    tier: 7,
    cost: { tech: 80 },
    durationMin: 45,
    techId: 't-surv-6',
    yieldText: '完成解锁关联科技，生态产出 +35%',
    desc: '生态领域第 7 期项目：大气改造',
  },
  {
    id: 'v31p067',
    name: '通讯·深空通讯 7 期',
    field: '通讯',
    tier: 7,
    cost: { tech: 85 },
    durationMin: 50,
    techId: 't-prod-7',
    yieldText: '完成解锁关联科技，通讯产出 +35%',
    desc: '通讯领域第 7 期项目：深空通讯',
  },
  {
    id: 'v31p068',
    name: '医学·再生医学 7 期',
    field: '医学',
    tier: 7,
    cost: { tech: 90 },
    durationMin: 55,
    techId: 't-build-8',
    yieldText: '完成解锁关联科技，医学产出 +35%',
    desc: '医学领域第 7 期项目：再生医学',
  },
  {
    id: 'v31p069',
    name: '农业·无土栽培 7 期',
    field: '农业',
    tier: 7,
    cost: { tech: 95 },
    durationMin: 40,
    techId: 't-surv-9',
    yieldText: '完成解锁关联科技，农业产出 +35%',
    desc: '农业领域第 7 期项目：无土栽培',
  },
  {
    id: 'v31p070',
    name: '地质·深层探测 7 期',
    field: '地质',
    tier: 7,
    cost: { tech: 100 },
    durationMin: 45,
    techId: 't-prod-10',
    yieldText: '完成解锁关联科技，地质产出 +35%',
    desc: '地质领域第 7 期项目：深层探测',
  },
  {
    id: 'v31p071',
    name: '推进·高效推进 8 期',
    field: '推进',
    tier: 8,
    cost: { tech: 90 },
    durationMin: 55,
    techId: 't-build-1',
    yieldText: '完成解锁关联科技，推进产出 +40%',
    desc: '推进领域第 8 期项目：高效推进',
  },
  {
    id: 'v31p072',
    name: '材料·轻质合金 8 期',
    field: '材料',
    tier: 8,
    cost: { tech: 95 },
    durationMin: 60,
    techId: 't-surv-2',
    yieldText: '完成解锁关联科技，材料产出 +40%',
    desc: '材料领域第 8 期项目：轻质合金',
  },
  {
    id: 'v31p073',
    name: '生命·基因改良 8 期',
    field: '生命',
    tier: 8,
    cost: { tech: 100 },
    durationMin: 45,
    techId: 't-prod-3',
    yieldText: '完成解锁关联科技，生命产出 +40%',
    desc: '生命领域第 8 期项目：基因改良',
  },
  {
    id: 'v31p074',
    name: '能源·聚变约束 8 期',
    field: '能源',
    tier: 8,
    cost: { tech: 105 },
    durationMin: 50,
    techId: 't-build-4',
    yieldText: '完成解锁关联科技，能源产出 +40%',
    desc: '能源领域第 8 期项目：聚变约束',
  },
  {
    id: 'v31p075',
    name: '计算·量子纠错 8 期',
    field: '计算',
    tier: 8,
    cost: { tech: 110 },
    durationMin: 55,
    techId: 't-surv-5',
    yieldText: '完成解锁关联科技，计算产出 +40%',
    desc: '计算领域第 8 期项目：量子纠错',
  },
  {
    id: 'v31p076',
    name: '生态·大气改造 8 期',
    field: '生态',
    tier: 8,
    cost: { tech: 90 },
    durationMin: 60,
    techId: 't-prod-6',
    yieldText: '完成解锁关联科技，生态产出 +40%',
    desc: '生态领域第 8 期项目：大气改造',
  },
  {
    id: 'v31p077',
    name: '通讯·深空通讯 8 期',
    field: '通讯',
    tier: 8,
    cost: { tech: 95 },
    durationMin: 45,
    techId: 't-build-7',
    yieldText: '完成解锁关联科技，通讯产出 +40%',
    desc: '通讯领域第 8 期项目：深空通讯',
  },
  {
    id: 'v31p078',
    name: '医学·再生医学 8 期',
    field: '医学',
    tier: 8,
    cost: { tech: 100 },
    durationMin: 50,
    techId: 't-surv-8',
    yieldText: '完成解锁关联科技，医学产出 +40%',
    desc: '医学领域第 8 期项目：再生医学',
  },
  {
    id: 'v31p079',
    name: '农业·无土栽培 8 期',
    field: '农业',
    tier: 8,
    cost: { tech: 105 },
    durationMin: 55,
    techId: 't-prod-9',
    yieldText: '完成解锁关联科技，农业产出 +40%',
    desc: '农业领域第 8 期项目：无土栽培',
  },
  {
    id: 'v31p080',
    name: '地质·深层探测 8 期',
    field: '地质',
    tier: 8,
    cost: { tech: 110 },
    durationMin: 60,
    techId: 't-build-10',
    yieldText: '完成解锁关联科技，地质产出 +40%',
    desc: '地质领域第 8 期项目：深层探测',
  },
  {
    id: 'v31p081',
    name: '推进·高效推进 9 期',
    field: '推进',
    tier: 9,
    cost: { tech: 100 },
    durationMin: 50,
    techId: 't-surv-1',
    yieldText: '完成解锁关联科技，推进产出 +45%',
    desc: '推进领域第 9 期项目：高效推进',
  },
  {
    id: 'v31p082',
    name: '材料·轻质合金 9 期',
    field: '材料',
    tier: 9,
    cost: { tech: 105 },
    durationMin: 55,
    techId: 't-prod-2',
    yieldText: '完成解锁关联科技，材料产出 +45%',
    desc: '材料领域第 9 期项目：轻质合金',
  },
  {
    id: 'v31p083',
    name: '生命·基因改良 9 期',
    field: '生命',
    tier: 9,
    cost: { tech: 110 },
    durationMin: 60,
    techId: 't-build-3',
    yieldText: '完成解锁关联科技，生命产出 +45%',
    desc: '生命领域第 9 期项目：基因改良',
  },
  {
    id: 'v31p084',
    name: '能源·聚变约束 9 期',
    field: '能源',
    tier: 9,
    cost: { tech: 115 },
    durationMin: 65,
    techId: 't-surv-4',
    yieldText: '完成解锁关联科技，能源产出 +45%',
    desc: '能源领域第 9 期项目：聚变约束',
  },
  {
    id: 'v31p085',
    name: '计算·量子纠错 9 期',
    field: '计算',
    tier: 9,
    cost: { tech: 120 },
    durationMin: 50,
    techId: 't-prod-5',
    yieldText: '完成解锁关联科技，计算产出 +45%',
    desc: '计算领域第 9 期项目：量子纠错',
  },
  {
    id: 'v31p086',
    name: '生态·大气改造 9 期',
    field: '生态',
    tier: 9,
    cost: { tech: 100 },
    durationMin: 55,
    techId: 't-build-6',
    yieldText: '完成解锁关联科技，生态产出 +45%',
    desc: '生态领域第 9 期项目：大气改造',
  },
  {
    id: 'v31p087',
    name: '通讯·深空通讯 9 期',
    field: '通讯',
    tier: 9,
    cost: { tech: 105 },
    durationMin: 60,
    techId: 't-surv-7',
    yieldText: '完成解锁关联科技，通讯产出 +45%',
    desc: '通讯领域第 9 期项目：深空通讯',
  },
  {
    id: 'v31p088',
    name: '医学·再生医学 9 期',
    field: '医学',
    tier: 9,
    cost: { tech: 110 },
    durationMin: 65,
    techId: 't-prod-8',
    yieldText: '完成解锁关联科技，医学产出 +45%',
    desc: '医学领域第 9 期项目：再生医学',
  },
  {
    id: 'v31p089',
    name: '农业·无土栽培 9 期',
    field: '农业',
    tier: 9,
    cost: { tech: 115 },
    durationMin: 50,
    techId: 't-build-9',
    yieldText: '完成解锁关联科技，农业产出 +45%',
    desc: '农业领域第 9 期项目：无土栽培',
  },
  {
    id: 'v31p090',
    name: '地质·深层探测 9 期',
    field: '地质',
    tier: 9,
    cost: { tech: 120 },
    durationMin: 55,
    techId: 't-surv-10',
    yieldText: '完成解锁关联科技，地质产出 +45%',
    desc: '地质领域第 9 期项目：深层探测',
  },
  {
    id: 'v31p091',
    name: '推进·高效推进 10 期',
    field: '推进',
    tier: 10,
    cost: { tech: 110 },
    durationMin: 65,
    techId: 't-prod-1',
    yieldText: '完成解锁关联科技，推进产出 +50%',
    desc: '推进领域第 10 期项目：高效推进',
  },
  {
    id: 'v31p092',
    name: '材料·轻质合金 10 期',
    field: '材料',
    tier: 10,
    cost: { tech: 115 },
    durationMin: 70,
    techId: 't-build-2',
    yieldText: '完成解锁关联科技，材料产出 +50%',
    desc: '材料领域第 10 期项目：轻质合金',
  },
  {
    id: 'v31p093',
    name: '生命·基因改良 10 期',
    field: '生命',
    tier: 10,
    cost: { tech: 120 },
    durationMin: 55,
    techId: 't-surv-3',
    yieldText: '完成解锁关联科技，生命产出 +50%',
    desc: '生命领域第 10 期项目：基因改良',
  },
  {
    id: 'v31p094',
    name: '能源·聚变约束 10 期',
    field: '能源',
    tier: 10,
    cost: { tech: 125 },
    durationMin: 60,
    techId: 't-prod-4',
    yieldText: '完成解锁关联科技，能源产出 +50%',
    desc: '能源领域第 10 期项目：聚变约束',
  },
  {
    id: 'v31p095',
    name: '计算·量子纠错 10 期',
    field: '计算',
    tier: 10,
    cost: { tech: 130 },
    durationMin: 65,
    techId: 't-build-5',
    yieldText: '完成解锁关联科技，计算产出 +50%',
    desc: '计算领域第 10 期项目：量子纠错',
  },
  {
    id: 'v31p096',
    name: '生态·大气改造 10 期',
    field: '生态',
    tier: 10,
    cost: { tech: 110 },
    durationMin: 70,
    techId: 't-surv-6',
    yieldText: '完成解锁关联科技，生态产出 +50%',
    desc: '生态领域第 10 期项目：大气改造',
  },
  {
    id: 'v31p097',
    name: '通讯·深空通讯 10 期',
    field: '通讯',
    tier: 10,
    cost: { tech: 115 },
    durationMin: 55,
    techId: 't-prod-7',
    yieldText: '完成解锁关联科技，通讯产出 +50%',
    desc: '通讯领域第 10 期项目：深空通讯',
  },
  {
    id: 'v31p098',
    name: '医学·再生医学 10 期',
    field: '医学',
    tier: 10,
    cost: { tech: 120 },
    durationMin: 60,
    techId: 't-build-8',
    yieldText: '完成解锁关联科技，医学产出 +50%',
    desc: '医学领域第 10 期项目：再生医学',
  },
  {
    id: 'v31p099',
    name: '农业·无土栽培 10 期',
    field: '农业',
    tier: 10,
    cost: { tech: 125 },
    durationMin: 65,
    techId: 't-surv-9',
    yieldText: '完成解锁关联科技，农业产出 +50%',
    desc: '农业领域第 10 期项目：无土栽培',
  },
  {
    id: 'v31p100',
    name: '地质·深层探测 10 期',
    field: '地质',
    tier: 10,
    cost: { tech: 130 },
    durationMin: 70,
    techId: 't-prod-10',
    yieldText: '完成解锁关联科技，地质产出 +50%',
    desc: '地质领域第 10 期项目：深层探测',
  },
  {
    id: 'v31p101',
    name: '推进·高效推进 11 期',
    field: '推进',
    tier: 11,
    cost: { tech: 120 },
    durationMin: 60,
    techId: 't-build-1',
    yieldText: '完成解锁关联科技，推进产出 +55%',
    desc: '推进领域第 11 期项目：高效推进',
  },
  {
    id: 'v31p102',
    name: '材料·轻质合金 11 期',
    field: '材料',
    tier: 11,
    cost: { tech: 125 },
    durationMin: 65,
    techId: 't-surv-2',
    yieldText: '完成解锁关联科技，材料产出 +55%',
    desc: '材料领域第 11 期项目：轻质合金',
  },
  {
    id: 'v31p103',
    name: '生命·基因改良 11 期',
    field: '生命',
    tier: 11,
    cost: { tech: 130 },
    durationMin: 70,
    techId: 't-prod-3',
    yieldText: '完成解锁关联科技，生命产出 +55%',
    desc: '生命领域第 11 期项目：基因改良',
  },
  {
    id: 'v31p104',
    name: '能源·聚变约束 11 期',
    field: '能源',
    tier: 11,
    cost: { tech: 135 },
    durationMin: 75,
    techId: 't-build-4',
    yieldText: '完成解锁关联科技，能源产出 +55%',
    desc: '能源领域第 11 期项目：聚变约束',
  },
  {
    id: 'v31p105',
    name: '计算·量子纠错 11 期',
    field: '计算',
    tier: 11,
    cost: { tech: 140 },
    durationMin: 60,
    techId: 't-surv-5',
    yieldText: '完成解锁关联科技，计算产出 +55%',
    desc: '计算领域第 11 期项目：量子纠错',
  },
  {
    id: 'v31p106',
    name: '生态·大气改造 11 期',
    field: '生态',
    tier: 11,
    cost: { tech: 120 },
    durationMin: 65,
    techId: 't-prod-6',
    yieldText: '完成解锁关联科技，生态产出 +55%',
    desc: '生态领域第 11 期项目：大气改造',
  },
  {
    id: 'v31p107',
    name: '通讯·深空通讯 11 期',
    field: '通讯',
    tier: 11,
    cost: { tech: 125 },
    durationMin: 70,
    techId: 't-build-7',
    yieldText: '完成解锁关联科技，通讯产出 +55%',
    desc: '通讯领域第 11 期项目：深空通讯',
  },
  {
    id: 'v31p108',
    name: '医学·再生医学 11 期',
    field: '医学',
    tier: 11,
    cost: { tech: 130 },
    durationMin: 75,
    techId: 't-surv-8',
    yieldText: '完成解锁关联科技，医学产出 +55%',
    desc: '医学领域第 11 期项目：再生医学',
  },
  {
    id: 'v31p109',
    name: '农业·无土栽培 11 期',
    field: '农业',
    tier: 11,
    cost: { tech: 135 },
    durationMin: 60,
    techId: 't-prod-9',
    yieldText: '完成解锁关联科技，农业产出 +55%',
    desc: '农业领域第 11 期项目：无土栽培',
  },
  {
    id: 'v31p110',
    name: '地质·深层探测 11 期',
    field: '地质',
    tier: 11,
    cost: { tech: 140 },
    durationMin: 65,
    techId: 't-build-10',
    yieldText: '完成解锁关联科技，地质产出 +55%',
    desc: '地质领域第 11 期项目：深层探测',
  },
  {
    id: 'v31p111',
    name: '推进·高效推进 12 期',
    field: '推进',
    tier: 12,
    cost: { tech: 130 },
    durationMin: 75,
    techId: 't-surv-1',
    yieldText: '完成解锁关联科技，推进产出 +60%',
    desc: '推进领域第 12 期项目：高效推进',
  },
  {
    id: 'v31p112',
    name: '材料·轻质合金 12 期',
    field: '材料',
    tier: 12,
    cost: { tech: 135 },
    durationMin: 80,
    techId: 't-prod-2',
    yieldText: '完成解锁关联科技，材料产出 +60%',
    desc: '材料领域第 12 期项目：轻质合金',
  },
  {
    id: 'v31p113',
    name: '生命·基因改良 12 期',
    field: '生命',
    tier: 12,
    cost: { tech: 140 },
    durationMin: 65,
    techId: 't-build-3',
    yieldText: '完成解锁关联科技，生命产出 +60%',
    desc: '生命领域第 12 期项目：基因改良',
  },
  {
    id: 'v31p114',
    name: '能源·聚变约束 12 期',
    field: '能源',
    tier: 12,
    cost: { tech: 145 },
    durationMin: 70,
    techId: 't-surv-4',
    yieldText: '完成解锁关联科技，能源产出 +60%',
    desc: '能源领域第 12 期项目：聚变约束',
  },
  {
    id: 'v31p115',
    name: '计算·量子纠错 12 期',
    field: '计算',
    tier: 12,
    cost: { tech: 150 },
    durationMin: 75,
    techId: 't-prod-5',
    yieldText: '完成解锁关联科技，计算产出 +60%',
    desc: '计算领域第 12 期项目：量子纠错',
  },
  {
    id: 'v31p116',
    name: '生态·大气改造 12 期',
    field: '生态',
    tier: 12,
    cost: { tech: 130 },
    durationMin: 80,
    techId: 't-build-6',
    yieldText: '完成解锁关联科技，生态产出 +60%',
    desc: '生态领域第 12 期项目：大气改造',
  },
  {
    id: 'v31p117',
    name: '通讯·深空通讯 12 期',
    field: '通讯',
    tier: 12,
    cost: { tech: 135 },
    durationMin: 65,
    techId: 't-surv-7',
    yieldText: '完成解锁关联科技，通讯产出 +60%',
    desc: '通讯领域第 12 期项目：深空通讯',
  },
  {
    id: 'v31p118',
    name: '医学·再生医学 12 期',
    field: '医学',
    tier: 12,
    cost: { tech: 140 },
    durationMin: 70,
    techId: 't-prod-8',
    yieldText: '完成解锁关联科技，医学产出 +60%',
    desc: '医学领域第 12 期项目：再生医学',
  },
  {
    id: 'v31p119',
    name: '农业·无土栽培 12 期',
    field: '农业',
    tier: 12,
    cost: { tech: 145 },
    durationMin: 75,
    techId: 't-build-9',
    yieldText: '完成解锁关联科技，农业产出 +60%',
    desc: '农业领域第 12 期项目：无土栽培',
  },
  {
    id: 'v31p120',
    name: '地质·深层探测 12 期',
    field: '地质',
    tier: 12,
    cost: { tech: 150 },
    durationMin: 80,
    techId: 't-surv-10',
    yieldText: '完成解锁关联科技，地质产出 +60%',
    desc: '地质领域第 12 期项目：深层探测',
  },
  {
    id: 'v31p121',
    name: '推进·高效推进 13 期',
    field: '推进',
    tier: 13,
    cost: { tech: 140 },
    durationMin: 70,
    techId: 't-prod-1',
    yieldText: '完成解锁关联科技，推进产出 +65%',
    desc: '推进领域第 13 期项目：高效推进',
  },
  {
    id: 'v31p122',
    name: '材料·轻质合金 13 期',
    field: '材料',
    tier: 13,
    cost: { tech: 145 },
    durationMin: 75,
    techId: 't-build-2',
    yieldText: '完成解锁关联科技，材料产出 +65%',
    desc: '材料领域第 13 期项目：轻质合金',
  },
  {
    id: 'v31p123',
    name: '生命·基因改良 13 期',
    field: '生命',
    tier: 13,
    cost: { tech: 150 },
    durationMin: 80,
    techId: 't-surv-3',
    yieldText: '完成解锁关联科技，生命产出 +65%',
    desc: '生命领域第 13 期项目：基因改良',
  },
  {
    id: 'v31p124',
    name: '能源·聚变约束 13 期',
    field: '能源',
    tier: 13,
    cost: { tech: 155 },
    durationMin: 85,
    techId: 't-prod-4',
    yieldText: '完成解锁关联科技，能源产出 +65%',
    desc: '能源领域第 13 期项目：聚变约束',
  },
  {
    id: 'v31p125',
    name: '计算·量子纠错 13 期',
    field: '计算',
    tier: 13,
    cost: { tech: 160 },
    durationMin: 70,
    techId: 't-build-5',
    yieldText: '完成解锁关联科技，计算产出 +65%',
    desc: '计算领域第 13 期项目：量子纠错',
  },
  {
    id: 'v31p126',
    name: '生态·大气改造 13 期',
    field: '生态',
    tier: 13,
    cost: { tech: 140 },
    durationMin: 75,
    techId: 't-surv-6',
    yieldText: '完成解锁关联科技，生态产出 +65%',
    desc: '生态领域第 13 期项目：大气改造',
  },
  {
    id: 'v31p127',
    name: '通讯·深空通讯 13 期',
    field: '通讯',
    tier: 13,
    cost: { tech: 145 },
    durationMin: 80,
    techId: 't-prod-7',
    yieldText: '完成解锁关联科技，通讯产出 +65%',
    desc: '通讯领域第 13 期项目：深空通讯',
  },
  {
    id: 'v31p128',
    name: '医学·再生医学 13 期',
    field: '医学',
    tier: 13,
    cost: { tech: 150 },
    durationMin: 85,
    techId: 't-build-8',
    yieldText: '完成解锁关联科技，医学产出 +65%',
    desc: '医学领域第 13 期项目：再生医学',
  },
  {
    id: 'v31p129',
    name: '农业·无土栽培 13 期',
    field: '农业',
    tier: 13,
    cost: { tech: 155 },
    durationMin: 70,
    techId: 't-surv-9',
    yieldText: '完成解锁关联科技，农业产出 +65%',
    desc: '农业领域第 13 期项目：无土栽培',
  },
  {
    id: 'v31p130',
    name: '地质·深层探测 13 期',
    field: '地质',
    tier: 13,
    cost: { tech: 160 },
    durationMin: 75,
    techId: 't-prod-10',
    yieldText: '完成解锁关联科技，地质产出 +65%',
    desc: '地质领域第 13 期项目：深层探测',
  },
];

var V31_RESEARCH_LABS = [
  {
    id: 'v31l01',
    buildingId: 'lab',
    name: '实验室',
    icon: '🔬',
    outputMul: 1.0,
    desc: '实验室：科研产出倍率 ×1.0',
  },
  {
    id: 'v31l02',
    buildingId: 'gene_lab',
    name: '基因实验室',
    icon: '🧬',
    outputMul: 1.5,
    desc: '基因实验室：科研产出倍率 ×1.5',
  },
  {
    id: 'v31l03',
    buildingId: 'observatory',
    name: '天文台',
    icon: '🔭',
    outputMul: 1.2,
    desc: '天文台：科研产出倍率 ×1.2',
  },
  {
    id: 'v31l04',
    buildingId: 'relic_lab',
    name: '遗迹实验室',
    icon: '🛸',
    outputMul: 2.0,
    desc: '遗迹实验室：科研产出倍率 ×2.0',
  },
  {
    id: 'v31l05',
    buildingId: 'lab',
    name: '实验室',
    icon: '🔬',
    outputMul: 1.0,
    desc: '实验室：科研产出倍率 ×1.0',
  },
  {
    id: 'v31l06',
    buildingId: 'gene_lab',
    name: '基因实验室',
    icon: '🧬',
    outputMul: 1.5,
    desc: '基因实验室：科研产出倍率 ×1.5',
  },
  {
    id: 'v31l07',
    buildingId: 'observatory',
    name: '天文台',
    icon: '🔭',
    outputMul: 1.2,
    desc: '天文台：科研产出倍率 ×1.2',
  },
  {
    id: 'v31l08',
    buildingId: 'relic_lab',
    name: '遗迹实验室',
    icon: '🛸',
    outputMul: 2.0,
    desc: '遗迹实验室：科研产出倍率 ×2.0',
  },
  {
    id: 'v31l09',
    buildingId: 'lab',
    name: '实验室',
    icon: '🔬',
    outputMul: 1.0,
    desc: '实验室：科研产出倍率 ×1.0',
  },
  {
    id: 'v31l10',
    buildingId: 'gene_lab',
    name: '基因实验室',
    icon: '🧬',
    outputMul: 1.5,
    desc: '基因实验室：科研产出倍率 ×1.5',
  },
  {
    id: 'v31l11',
    buildingId: 'observatory',
    name: '天文台',
    icon: '🔭',
    outputMul: 1.2,
    desc: '天文台：科研产出倍率 ×1.2',
  },
  {
    id: 'v31l12',
    buildingId: 'relic_lab',
    name: '遗迹实验室',
    icon: '🛸',
    outputMul: 2.0,
    desc: '遗迹实验室：科研产出倍率 ×2.0',
  },
  {
    id: 'v31l13',
    buildingId: 'lab',
    name: '实验室',
    icon: '🔬',
    outputMul: 1.0,
    desc: '实验室：科研产出倍率 ×1.0',
  },
  {
    id: 'v31l14',
    buildingId: 'gene_lab',
    name: '基因实验室',
    icon: '🧬',
    outputMul: 1.5,
    desc: '基因实验室：科研产出倍率 ×1.5',
  },
  {
    id: 'v31l15',
    buildingId: 'observatory',
    name: '天文台',
    icon: '🔭',
    outputMul: 1.2,
    desc: '天文台：科研产出倍率 ×1.2',
  },
  {
    id: 'v31l16',
    buildingId: 'relic_lab',
    name: '遗迹实验室',
    icon: '🛸',
    outputMul: 2.0,
    desc: '遗迹实验室：科研产出倍率 ×2.0',
  },
  {
    id: 'v31l17',
    buildingId: 'lab',
    name: '实验室',
    icon: '🔬',
    outputMul: 1.0,
    desc: '实验室：科研产出倍率 ×1.0',
  },
  {
    id: 'v31l18',
    buildingId: 'gene_lab',
    name: '基因实验室',
    icon: '🧬',
    outputMul: 1.5,
    desc: '基因实验室：科研产出倍率 ×1.5',
  },
  {
    id: 'v31l19',
    buildingId: 'observatory',
    name: '天文台',
    icon: '🔭',
    outputMul: 1.2,
    desc: '天文台：科研产出倍率 ×1.2',
  },
  {
    id: 'v31l20',
    buildingId: 'relic_lab',
    name: '遗迹实验室',
    icon: '🛸',
    outputMul: 2.0,
    desc: '遗迹实验室：科研产出倍率 ×2.0',
  },
  {
    id: 'v31l21',
    buildingId: 'lab',
    name: '实验室',
    icon: '🔬',
    outputMul: 1.0,
    desc: '实验室：科研产出倍率 ×1.0',
  },
  {
    id: 'v31l22',
    buildingId: 'gene_lab',
    name: '基因实验室',
    icon: '🧬',
    outputMul: 1.5,
    desc: '基因实验室：科研产出倍率 ×1.5',
  },
  {
    id: 'v31l23',
    buildingId: 'observatory',
    name: '天文台',
    icon: '🔭',
    outputMul: 1.2,
    desc: '天文台：科研产出倍率 ×1.2',
  },
  {
    id: 'v31l24',
    buildingId: 'relic_lab',
    name: '遗迹实验室',
    icon: '🛸',
    outputMul: 2.0,
    desc: '遗迹实验室：科研产出倍率 ×2.0',
  },
];

/* ================================================================
 * 8. 科研面板：项目 / 科技树 / 实验室
 * 启动项目扣真实科技点；项目按现实时间推进，完成时优先调用
 * game.tech.unlock(techId) 解锁真实科技，缺失时记本地完成。
 * ================================================================ */

function V31ResearchPanel(game, manager) {
  V31BasePanel.call(this, game, manager);
  this.id = 'research';
  this.title = '科研';
  this.icon = '🔬';
  this.tabs = [
    { id: 'projects', name: '🧪 科研项目' },
    { id: 'techs', name: '🌲 科技树' },
    { id: 'labs', name: '🏢 实验室' },
  ];
  this.activeTab = 'projects';
  this.projects = {};   // projectId -> {status:'active'|'done', startedAt, endsAt}
  this.completedLocal = {};  // projectId -> true（game.tech 不可用时兜底）
  this.researchLog = [];
}
V31ResearchPanel.prototype = Object.create(V31BasePanel.prototype);
V31ResearchPanel.prototype.constructor = V31ResearchPanel;

V31ResearchPanel.prototype.log = function (text) {
  this.researchLog.unshift({ at: Date.now(), text: text });
  if (this.researchLog.length > 30) this.researchLog.pop();
};
V31ResearchPanel.prototype.projectById = function (id) {
  for (var i = 0; i < V31_RESEARCH_PROJECTS.length; i++) if (V31_RESEARCH_PROJECTS[i].id === id) return V31_RESEARCH_PROJECTS[i];
  return null;
};
V31ResearchPanel.prototype.labOutput = function () {
  var seen = {};
  var total = 0;
  var detail = [];
  for (var i = 0; i < V31_RESEARCH_LABS.length; i++) {
    var lab = V31_RESEARCH_LABS[i];
    if (seen[lab.buildingId]) continue;
    seen[lab.buildingId] = true;
    var n = this.buildingCount(lab.buildingId);
    if (n > 0) {
      var out = n * 2 * lab.outputMul;
      total += out;
      detail.push({ name: lab.name, icon: lab.icon, count: n, output: out });
    }
  }
  var mul = this.techMul('labMul');
  return { base: total, mul: mul, perMin: total * mul, detail: detail };
};
V31ResearchPanel.prototype.techDefs = function () {
  try { if (typeof TECH_DEFS !== 'undefined' && TECH_DEFS) return TECH_DEFS; } catch (e) {}
  return {};
};
V31ResearchPanel.prototype.techCount = function () {
  var g = this.safeGame();
  try {
    if (g.tech && typeof g.tech.totalUnlocked === 'function') return g.tech.totalUnlocked();
    if (g.tech && g.tech.unlocked && typeof g.tech.unlocked.size === 'number') return g.tech.unlocked.size;
  } catch (e) {}
  return 0;
};
/* 项目完成只认本地完成记录：关联科技可能早已被其他途径解锁，
 * 不能把 hasTech(techId) 当成项目已完成，否则已解锁科技的项目
 * 永远无法启动。 */
V31ResearchPanel.prototype.projectDone = function (id) {
  var p = this.projects[id];
  if (p && p.status === 'done') return true;
  if (this.completedLocal[id]) return true;
  return false;
};
V31ResearchPanel.prototype.projectActive = function (id) {
  var p = this.projects[id];
  if (!p || p.status !== 'active') return false;
  if (Date.now() >= p.endsAt) { this._completeProject(id); return false; }
  return true;
};
V31ResearchPanel.prototype._completeProject = function (id) {
  var proj = this.projectById(id);
  if (!proj) return;
  var p = this.projects[id];
  if (p) p.status = 'done';
  var applied = false;
  try {
    var g = this.safeGame();
    if (g.tech && typeof g.tech.unlock === 'function') {
      var inv = this.inv();
      var r = g.tech.unlock(proj.techId, inv);
      applied = !!(r && r.ok !== false);
    }
  } catch (e) {}
  if (!applied) this.completedLocal[id] = true;
  this.log('项目完成：' + proj.name + (applied ? '（已解锁 ' + proj.techId + '）' : '（本地记录）'));
};
V31ResearchPanel.prototype.tick = function () {
  var done = 0;
  for (var id in this.projects) {
    if (this.projects[id].status === 'active' && Date.now() >= this.projects[id].endsAt) {
      this._completeProject(id);
      done++;
    }
  }
  return done;
};
V31ResearchPanel.prototype.canStart = function (proj) {
  if (this.projectDone(proj.id)) return { ok: false, reason: '项目已完成' };
  if (this.projectActive(proj.id)) return { ok: false, reason: '项目进行中' };
  if (this.labOutput().base <= 0) return { ok: false, reason: '需要先建造实验室' };
  if (!this.canAfford(proj.cost)) return { ok: false, reason: '资源不足：' + V31Utils.costStr(proj.cost) };
  return { ok: true };
};
V31ResearchPanel.prototype.startProject = function (projectId) {
  var proj = this.projectById(projectId);
  if (!proj) return { ok: false, reason: '未知项目' };
  var chk = this.canStart(proj);
  if (!chk.ok) return chk;
  this.payCost(proj.cost);
  this.projects[projectId] = {
    status: 'active', startedAt: Date.now(),
    endsAt: Date.now() + proj.durationMin * 60000,
  };
  this.log('启动项目：' + proj.name + '（' + proj.durationMin + ' 分钟）');
  return { ok: true };
};
V31ResearchPanel.prototype.remainingText = function (proj) {
  var p = this.projects[proj.id];
  if (!p) return '';
  var left = Math.max(0, p.endsAt - Date.now());
  return Math.ceil(left / 60000) + ' 分钟后完成';
};
V31ResearchPanel.prototype.render = function () {
  this.tick();
  var tab = this.activeTab;
  if (tab === 'techs') return this._renderTechs();
  if (tab === 'labs') return this._renderLabs();
  return this._renderProjects();
};
V31ResearchPanel.prototype._renderProjects = function () {
  var out = this.labOutput();
  var done = 0;
  for (var i = 0; i < V31_RESEARCH_PROJECTS.length; i++) if (this.projectDone(V31_RESEARCH_PROJECTS[i].id)) done++;
  var html = '<div class="v31-sec"><h3>🧪 科研项目：已完成 ' + done + ' / ' + V31_RESEARCH_PROJECTS.length + '</h3>';
  html += '<div class="v31-row"><span>实验室产出</span><b>' + out.perMin.toFixed(1) + ' 科技点 / 分钟</b></div>';
  html += '<div class="v31-row"><span>已解锁科技</span><b>' + this.techCount() + ' 项</b></div>';
  html += '<div class="v31-muted">项目按现实时间推进；完成时优先调用 game.tech.unlock() 解锁关联科技。</div></div>';
  html += '<div class="v31-sec"><h3>📋 项目列表（前 20 个）</h3>';
  for (var j = 0; j < 20; j++) {
    var p = V31_RESEARCH_PROJECTS[j];
    var isDone = this.projectDone(p.id);
    var isActive = this.projectActive(p.id);
    var chk = this.canStart(p);
    html += '<div class="v31-card"><div class="v31-row"><span><b>' + V31Utils.esc(p.name) + '</b> ' +
      '<span class="v31-muted">' + V31Utils.esc(p.desc) + ' · ' + p.durationMin + ' 分钟</span></span>' +
      '<span>' + V31Utils.esc(V31Utils.costStr(p.cost)) + '</span></div>' +
      '<div class="v31-muted">' + V31Utils.esc(p.yieldText) + ' · 关联科技 ' + V31Utils.esc(p.techId) + '</div>' +
      '<div style="margin-top:6px">' +
      (isDone ? '<span class="v31-tag" style="background:#14532d">✅ 已完成</span>'
        : isActive ? '<span class="v31-tag">⏳ ' + this.remainingText(p) + '</span>'
        : '<button class="v31-btn" data-v31-project="' + p.id + '"' + (chk.ok ? '' : ' disabled') + '>启动项目</button>' +
          (chk.ok ? '' : ' <span class="v31-muted">' + V31Utils.esc(chk.reason) + '</span>')) +
      '</div></div>';
  }
  html += '<div class="v31-muted">共 ' + V31_RESEARCH_PROJECTS.length + ' 个项目，分 10 个领域 × 10 期；完整目录见面板数据 V31_RESEARCH_PROJECTS。</div></div>';
  return html;
};
V31ResearchPanel.prototype._renderTechs = function () {
  var defs = this.techDefs();
  var ids = Object.keys(defs);
  var html = '<div class="v31-sec"><h3>🌲 科技树：已解锁 ' + this.techCount() + ' 项</h3>';
  if (!ids.length) {
    html += '<div class="v31-muted">未检测到 tech.js 的 TECH_DEFS。科技数据随 tech.js 加载后自动出现；项目页仍可正常启动。</div>';
  } else {
    var branches = {};
    for (var i = 0; i < ids.length; i++) {
      var d = defs[ids[i]];
      var b = d.branch || 'other';
      if (!branches[b]) branches[b] = [];
      branches[b].push(d);
    }
    for (var br in branches) {
      var list = branches[br];
      var unlocked = 0;
      for (var j = 0; j < list.length; j++) if (this.hasTech(list[j].id || ids[j])) unlocked++;
      html += '<h3 style="color:#93c5fd;margin:10px 0 4px">' + V31Utils.esc(br) + '（' + unlocked + '/' + list.length + '）</h3>';
      for (var k = 0; k < Math.min(list.length, 12); k++) {
        var t = list[k];
        var tid = t.id || '';
        html += '<div class="v31-row"><span>' + (t.icon || '🔬') + ' ' + V31Utils.esc(t.name || tid) + '</span><b>' + (this.hasTech(tid) ? '✅ 已解锁' : '🔒 未解锁 · ' + (t.cost || 0) + ' 点') + '</b></div>';
      }
      if (list.length > 12) html += '<div class="v31-muted">该分支共 ' + list.length + ' 项，仅展示前 12 项。</div>';
    }
  }
  html += '</div>';
  return html;
};
V31ResearchPanel.prototype._renderLabs = function () {
  var out = this.labOutput();
  var html = '<div class="v31-sec"><h3>🏢 实验室产出：' + out.perMin.toFixed(1) + ' 科技点 / 分钟</h3>';
  html += '<div class="v31-row"><span>基础产出</span><b>' + out.base.toFixed(1) + ' / 分钟</b></div>';
  html += '<div class="v31-row"><span>实验室科技倍率</span><b>×' + out.mul.toFixed(2) + '</b></div>';
  html += '<div class="v31-muted">每座实验室基础 +2 / 分钟 × 档位倍率；基因实验室 ×1.5，遗迹实验室 ×2.0。</div></div>';
  html += '<div class="v31-sec"><h3>🔬 实验室构成</h3>';
  if (!out.detail.length) {
    html += '<div class="v31-muted">尚未建造实验室。先建 🔬实验室 才能启动科研项目。</div>';
  } else {
    for (var i = 0; i < out.detail.length; i++) {
      var d = out.detail[i];
      html += '<div class="v31-row"><span>' + d.icon + ' ' + V31Utils.esc(d.name) + ' ×' + d.count + '</span><b>+' + d.output.toFixed(1) + ' / 分钟</b></div>';
    }
  }
  html += '</div>';
  if (this.researchLog.length) {
    html += '<div class="v31-sec"><h3>📜 最近科研</h3>';
    for (var k = 0; k < this.researchLog.length; k++) {
      html += '<div class="v31-row"><span>' + V31Utils.esc(this.researchLog[k].text) + '</span><span class="v31-muted">' + V31Utils.nowText(this.researchLog[k].at) + '</span></div>';
    }
    html += '</div>';
  }
  return html;
};
V31ResearchPanel.prototype.bindEvents = function (root) {
  var self = this;
  var btns = root.querySelectorAll('[data-v31-project]');
  for (var i = 0; i < btns.length; i++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        var res = self.startProject(btn.getAttribute('data-v31-project'));
        self.toast(res.ok ? '🧪 项目已启动' : '❌ ' + res.reason);
        self.refresh();
      });
    })(btns[i]);
  }
};

/* ================================================================
 * 9. 门面：V31UIManager
 * install() 只做两件事：
 *   (1) 把 3 个面板注册进 V31PanelManager；
 *   (2) 包装 UIRefactor.prototype.showMoreMenu——原有菜单先渲染，
 *       再追加入口按钮；绝不改动 #toolbar 的 5 个按钮。
 * 与 v30 的包装链式共存：v31 包装的是当前（已被 v30 包装过的）
 * showMoreMenu，_v31Patched 标记防重复包装。
 * ================================================================ */

function V31UIManager(game) {
  this.game = game || null;
  this.manager = new V31PanelManager(game);
  this.manager.uiManager = this;
  this.trade = new V31TradePanel(game, this.manager);
  this.culture = new V31CulturePanel(game, this.manager);
  this.research = new V31ResearchPanel(game, this.manager);
  this.manager.register(this.trade);
  this.manager.register(this.culture);
  this.manager.register(this.research);
  this._moreMenuPatched = false;
  this._escBound = false;
}
V31UIManager.prototype.openPanel = function (id, tab) {
  return this.manager.open(id, tab);
};
V31UIManager.prototype.closePanel = function () { return this.manager.close(); };
V31UIManager.prototype.moreMenuEntries = function () {
  var self = this;
  return V31_PANEL_DEFS.map(function (def) {
    return {
      icon: def.icon, name: def.name,
      fn: function () { self.openPanel(def.id); },
    };
  });
};
V31UIManager.prototype.patchMoreMenu = function () {
  if (this._moreMenuPatched) return true;
  if (typeof UIRefactor === 'undefined' || !UIRefactor.prototype) return false;
  var proto = UIRefactor.prototype;
  if (proto.showMoreMenu && proto.showMoreMenu._v31Patched) {
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
  wrapped._v31Patched = true;
  proto.showMoreMenu = wrapped;
  this._moreMenuPatched = true;
  return true;
};
V31UIManager.prototype._appendMoreMenuEntries = function () {
  if (!V31Utils.hasDom()) return;
  var grid = document.getElementById('more-grid');
  if (!grid) return;
  var entries = this.moreMenuEntries();
  for (var i = 0; i < entries.length; i++) {
    (function (entry) {
      if (grid.querySelector('[data-v31-more="' + entry.name + '"]')) return;
      var b = document.createElement('button');
      b.className = 'more-btn';
      b.setAttribute('data-v31-more', entry.name);
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
V31UIManager.prototype.bindEscape = function () {
  if (this._escBound || !V31Utils.hasDom()) return;
  var self = this;
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && self.manager.current) self.manager.close();
  });
  this._escBound = true;
};
V31UIManager.prototype.install = function () {
  var ok = this.patchMoreMenu();
  if (!ok) {
    var self = this;
    setTimeout(function () { self.patchMoreMenu(); }, 2000);
    setTimeout(function () { self.patchMoreMenu(); }, 6000);
  }
  this.bindEscape();
  if (typeof window !== 'undefined') {
    window.V31UI = this;
    window.V31PanelManager = V31PanelManager;
  }
  return { moreMenuPatched: this._moreMenuPatched, panels: this.manager.panelIds() };
};
V31UIManager.selfTest = function (mockGame) {
  var results = [];
  var classes = [
    ['trade', V31TradePanel],
    ['culture', V31CulturePanel],
    ['research', V31ResearchPanel],
  ];
  for (var i = 0; i < classes.length; i++) {
    var id = classes[i][0], Cls = classes[i][1];
    try {
      var mgr = new V31PanelManager(mockGame || null);
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
  window.V31Utils = V31Utils;
  window.V31_RES_NAMES = V31_RES_NAMES;
  window.V31PanelManager = V31PanelManager;
  window.V31BasePanel = V31BasePanel;
  window.V31TradePanel = V31TradePanel;
  window.V31CulturePanel = V31CulturePanel;
  window.V31ResearchPanel = V31ResearchPanel;
  window.V31UIManager = V31UIManager;
  window.V31_PANEL_DEFS = V31_PANEL_DEFS;
  window.V31_TRADE_ROUTES = V31_TRADE_ROUTES;
  window.V31_TRADE_GOODS = V31_TRADE_GOODS;
  window.V31_TRADE_PARTNERS = V31_TRADE_PARTNERS;
  window.V31_FESTIVALS = V31_FESTIVALS;
  window.V31_CULTURE_WORKS = V31_CULTURE_WORKS;
  window.V31_CULTURE_VENUES = V31_CULTURE_VENUES;
  window.V31_RESEARCH_PROJECTS = V31_RESEARCH_PROJECTS;
  window.V31_RESEARCH_LABS = V31_RESEARCH_LABS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    V31Utils: V31Utils,
    V31_RES_NAMES: V31_RES_NAMES,
    V31_PANEL_DEFS: V31_PANEL_DEFS,
    V31PanelManager: V31PanelManager,
    V31BasePanel: V31BasePanel,
    V31TradePanel: V31TradePanel,
    V31CulturePanel: V31CulturePanel,
    V31ResearchPanel: V31ResearchPanel,
    V31UIManager: V31UIManager,
    V31_TRADE_ROUTES: V31_TRADE_ROUTES,
    V31_TRADE_GOODS: V31_TRADE_GOODS,
    V31_TRADE_PARTNERS: V31_TRADE_PARTNERS,
    V31_FESTIVALS: V31_FESTIVALS,
    V31_CULTURE_WORKS: V31_CULTURE_WORKS,
    V31_CULTURE_VENUES: V31_CULTURE_VENUES,
    V31_RESEARCH_PROJECTS: V31_RESEARCH_PROJECTS,
    V31_RESEARCH_LABS: V31_RESEARCH_LABS,
  };
}

/* 自动启动（浏览器）：game.js 创建游戏后挂到 window.__starport；
 * 本文件监听 DOMContentLoaded 安装「更多」菜单挂接。
 * game.js 若已安装过 V31UI（window.__v31Installed），不再重复安装。 */
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      try {
        if (window.__starport && !window.__v31Installed && typeof V31UIManager !== 'undefined') {
          var ui = new V31UIManager(window.__starport);
          var res = ui.install();
          window.__v31Installed = true;
          if (window.console) {
            console.log('[v31] UI 已安装，面板：' + res.panels.join(',') +
              '，更多菜单挂接：' + (res.moreMenuPatched ? '成功' : '待重试'));
          }
        }
      } catch (e) {
        if (window.console) console.warn('[v31] 自动安装失败：' + e.message);
      }
    }, 100);
  });
}

