/* 星港 — ui_refactor.js：移动端 UI 重构（v2.1）
 * 只改 UI/交互，不加新功能，不堆行数。
 * - 底部 5 键：采集 / 建造 / 科技 / 图层 / 更多
 * - 建筑面板：分类 + 卡片（造价显示、资源不够置灰、科技锁定🔒）
 * - 顶栏：4 关键资源（铁/水/电/人口）+ 展开
 * - 3 步新手教程（移动→采集→建造）
 */

'use strict';

// ---------- 建筑分类 ----------
const BUILD_CATS = [
  { id: 'prod',    name: '生产', icon: '🏭' },
  { id: 'housing', name: '居住', icon: '🏠' },
  { id: 'power',   name: '电力', icon: '⚡' },
  { id: 'water',   name: '水利', icon: '💧' },
  { id: 'trans',   name: '交通', icon: '🛤️' },
  { id: 'civic',   name: '市政', icon: '🏛️' },
  { id: 'special', name: '特殊', icon: '🚀' },
  { id: 'net',     name: '线网', icon: '🔗' },
];

// 建筑 id → 分类（按游戏内功能划分；未列出的默认 special）
const BUILD_CAT_MAP = {
  // 🏭 生产：资源采集与加工
  miner: 'prod', uminer: 'prod', he3rig: 'prod', smelter: 'prod',
  food_processor: 'prod', robot_factory: 'prod', nano_assembler: 'prod',
  nanofactory: 'prod', void_mine: 'prod', chronon_mine: 'prod',
  atlas_foundry: 'prod', magma_tap: 'prod', rb16_logic_forge: 'prod',
  rb16_oil_refinery: 'prod', un16_magma_forge: 'prod', stellar_forge: 'prod',
  engine_fuel: 'prod', oc16_coral_farm: 'prod', un16_mushroom_farm: 'prod',
  mint: 'prod', dyson_furnace: 'prod', dyson_collector: 'prod',
  greenhouse: 'prod',
  // 🏠 居住：人口上限
  habitat: 'housing', clone: 'housing', dome: 'housing', ecocircle: 'housing',
  ark: 'housing', dream_nexus: 'housing', sky_dock: 'housing',
  seed_sanctuary: 'housing', gene_ark: 'housing', sk16_anchor_tower: 'housing',
  // ⚡ 电力：发电与储电
  solar: 'power', solar_farm: 'power', wind_turbine: 'power',
  geothermal: 'power', nuclear: 'power', fusion: 'power',
  dyson_sail: 'power', dyson_beam: 'power', dyson_lighthouse: 'power',
  dyson_shield: 'power', battery_bank: 'power', substation: 'power',
  cable_pylon: 'power', oc16_tidal_plant: 'power',
  sk16_stormcollector: 'power', iron_heart: 'power',
  temporal_accelerator: 'power', temporal_decelerator: 'power',
  rewind_reactor: 'power', echo_array: 'power',
  // 💧 水利：水生产与输送
  pump: 'water', waterplant: 'water', desalination: 'water',
  reservoir: 'water', water_tower: 'water', pipe_hub: 'water',
  irrigation: 'water', leak_sensor: 'water', oc16_vent_station: 'water',
  aqua_core: 'water',
  // 🛤️ 交通：道路与运输
  road: 'trans', highway: 'trans', depot: 'trans', logistics: 'trans',
  warehouse: 'trans', bus_depot: 'trans', parking_hub: 'trans',
  freight_terminal: 'trans', trade_port: 'trans', tunnel_borer: 'trans',
  bridge_tower: 'trans', spaceport: 'trans', elevator: 'trans',
  oc16_sub_dock: 'trans', sk16_skybeacon: 'trans',
  sk16_strato_antenna: 'trans', sk16_cloudmarket: 'trans',
  // 🏛️ 市政：服务与科研
  hospital: 'civic', medcenter: 'civic', clinic: 'civic',
  rb16_cyber_clinic: 'civic', phoenix_bay: 'civic', school: 'civic',
  library: 'civic', un16_echo_library: 'civic', park: 'civic',
  stadium: 'civic', police_station: 'civic', fire_station: 'civic',
  market: 'civic', bank: 'civic', tax_office: 'civic', insurance: 'civic',
  exchange: 'civic', parliament: 'civic', repair: 'civic', weather: 'civic',
  satellite: 'civic', observatory: 'civic', antenna: 'civic', trade: 'civic',
  gene_lab: 'civic', lab: 'civic', monument: 'civic', time_capsule: 'civic',
  history_archive: 'civic', war_memorial: 'civic', memory_vault: 'civic',
  rb16_limb_workshop: 'civic', rb16_sync_tower: 'civic',
  rb16_data_crypt: 'civic', sk16_windspire: 'civic',
  un16_core_elevator: 'civic',
  // 🚀 特殊：发射台/指挥/军事/星门/行星引擎/奇观（默认分类，未列出也归这里）
  launchpad: 'special', command: 'special', shield: 'special',
  shield_dome: 'special', paradox_shield: 'special', railgun: 'special',
  missile_silo: 'special', nuke_silo: 'special', mil_academy: 'special',
  merc_camp: 'special', arms_factory: 'special', radar: 'special',
  shelter: 'special', engine_thruster: 'special', engine_cooling: 'special',
  engine_control: 'special', engine_bastion: 'special',
  engine_capital: 'special', stargate_hub: 'special', gate_beacon: 'special',
  gate_customs: 'special', gate_defense: 'special', gate_medic: 'special',
  gate_relay: 'special', wormhole_stabilizer: 'special', origin_gate: 'special',
  eden_engine: 'special', guardian_titan: 'special', titan_wall: 'special',
  storm_crown: 'special', chrono_dome: 'special', harmony_spire: 'special',
  swarm_satellite: 'special',
};

function buildCatOf(id) {
  return BUILD_CAT_MAP[id] || 'special';
}

// ---------- 图层模式 ----------
const UI_OVERLAY_MODES = [
  { id: 'none',    name: '关闭图层', icon: '🗺️' },
  { id: 'power',   name: '电网',     icon: '⚡' },
  { id: 'water',   name: '水管',     icon: '💧' },
  { id: 'traffic', name: '交通',     icon: '🛤️' },
];

// ---------- 更多菜单 ----------
function moreMenuItems(game) {
  const items = [
    { icon: '🏆', name: '成就', fn: () => game.toggleAchievePanel() },
    { icon: '📊', name: '统计', fn: () => game.toggleStatsPanel() },
    { icon: '🚚', name: '运输', fn: () => game.toggleTruckPanel() },
    { icon: '🤝', name: '贸易', fn: () => game.showTradePanel() },
    { icon: '🌟', name: '新纪元', fn: () => { if (game.v15ui) game.v15ui.toggleMenu(); } },
    { icon: game.sound && game.sound.enabled ? '🔊' : '🔇', name: '声音',
      fn: () => { game.toggleSound(); } },
    { icon: game.speedMode === 0 ? '⏸️' : (game.speedMode === 2 ? '⏩⏩' : '⏩'),
      name: '速度', fn: () => { game.cycleSpeed(); } },
    { icon: '❓', name: '帮助', fn: () => { game.help.toggle(); game._helpOpened = true; } },
    { icon: '🗑️', name: '重开', danger: true,
      fn: () => { if (confirm('重开？存档会清空！')) game.reset(); } },
  ];
  return items;
}

// ---------- UI 重构主类 ----------
class UIRefactor {
  constructor(game) {
    this.game = game;
    this.curCat = 'prod';
    this.resExpanded = false;
    // 被收进「更多」菜单的动态注入按钮
    this._relocatedItems = [];
    this._policyDone = false;
  }

  // 各系统（外交/军事/政策/深空/轨道）会往工具栏塞按钮 → 藏起来收进「更多」
  relocateInjectedButtons() {
    const targets = [
      { sel: '#btn-orbital', icon: '🛰️', name: '轨道' },
      { sel: '#btn-diplo', icon: '🕊️', name: '外交' },
      { sel: '#btn-military', icon: '🛡️', name: '军事' },
      { sel: '#btn-deepspace', icon: '🌠', name: '深空' },
    ];
    for (const t of targets) {
      const b = document.querySelector(t.sel);
      if (b && !b.dataset.relocated) {
        b.dataset.relocated = '1';
        b.style.display = 'none';
        this._relocatedItems.push(t);
      }
    }
    // 政策按钮没有 id，用内容找
    if (!this._policyDone) {
      const pb = [...document.querySelectorAll('#toolbar .tool-btn')]
        .find(b => !b.dataset.relocated && b.innerHTML.includes('政策'));
      if (pb) {
        pb.dataset.relocated = '1';
        pb.style.display = 'none';
        this._policyDone = true;
        this._relocatedItems.push({ sel: null, el: pb, icon: '📜', name: '政策' });
      }
    }
    // v2.0 线网工具条（#v20-tools：电缆/水管/桥/隧道）→ 藏起来，收进建筑面板「线网」分类
    const v20t = document.getElementById('v20-tools');
    if (v20t && !v20t.dataset.relocated) {
      v20t.dataset.relocated = '1';
      v20t.style.display = 'none';
    }
  }

  // v2.0 线网工具：点建筑面板里的卡片 → 触发隐藏的原始按钮
  pickNetTool(mode) {
    const g = this.game;
    const btn = document.querySelector(`[data-v20tool="${mode}"]`);
    if (btn) {
      this.hideBuildMenu();
      btn.click();
    } else {
      g.toast('线网工具未就绪');
    }
  }

  netToolCards() {
    return [
      { mode: 'cable', icon: '🔌', name: '电缆', desc: '铺设电缆，连通电网' },
      { mode: 'pipe', icon: '🔧', name: '水管', desc: '铺设水管，输送水' },
      { mode: 'bridge', icon: '🌉', name: '桥', desc: '跨越峡谷' },
      { mode: 'tunnel', icon: '🚇', name: '隧道', desc: '穿山隧道' },
    ];
  }

  relocatedMenuItems() {
    return this._relocatedItems.map(t => ({
      icon: t.icon, name: t.name,
      fn: () => {
        const b = t.el || (t.sel && document.querySelector(t.sel));
        if (b) b.click();
      },
    }));
  }

  bindUI() {
    const g = this.game;
    const on = (id, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('click', (e) => { e.stopPropagation(); fn(); });
    };

    // 底部 5 键
    on('btn-build-menu', () => { this.toggleBuildMenu(); g.sound.click(); });
    on('btn-overlay', () => { this.toggleOverlayMenu(); g.sound.click(); });
    on('btn-more', () => { this.toggleMoreMenu(); g.sound.click(); });
    on('btn-close-buildmenu', () => this.hideBuildMenu());
    on('btn-close-moremenu', () => this.hideMoreMenu());
    on('btn-close-overlaymenu', () => this.hideOverlayMenu());
    on('btn-res-expand', () => this.toggleResExpand());
    on('btn-cancel-build', () => { g.selectBuild(null); g.sound.click(); });

    // 包装 selectBuild：选中时显示取消按钮
    const origSelect = g.selectBuild.bind(g);
    const self = this;
    g.selectBuild = function (id) {
      origSelect(id);
      self.refreshCancelBtn();
    };

    // 各系统注入的工具栏按钮 → 藏起来，收进「更多」（懒执行：注入时机不确定）
    this.relocateInjectedButtons();
    // 注入是异步的（orbital 等），延迟再收两次
    setTimeout(() => this.relocateInjectedButtons(), 2500);
    setTimeout(() => this.relocateInjectedButtons(), 6000);

    // 顶栏默认收起
    const rb = document.getElementById('res-bar');
    if (rb) rb.classList.add('collapsed');
  }

  // ---------- 建筑面板 ----------
  toggleBuildMenu() {
    const el = document.getElementById('build-menu');
    if (el.classList.contains('hidden')) this.showBuildMenu();
    else this.hideBuildMenu();
  }

  showBuildMenu() {
    this.renderBuildMenu();
    document.getElementById('build-menu').classList.remove('hidden');
    this.hideMoreMenu();
    this.hideOverlayMenu();
  }

  hideBuildMenu() {
    document.getElementById('build-menu').classList.add('hidden');
  }

  renderBuildMenu() {
    const g = this.game;
    // 分类 tab
    const catsEl = document.getElementById('build-cats');
    catsEl.innerHTML = BUILD_CATS.map(c => {
      const n = this.countCat(c.id);
      return `<button class="build-cat-tab${c.id === this.curCat ? ' active' : ''}" ` +
        `data-cat="${c.id}">${c.icon}<small>${c.name}·${n}</small></button>`;
    }).join('');
    for (const b of catsEl.querySelectorAll('[data-cat]')) {
      b.addEventListener('click', () => {
        this.curCat = b.dataset.cat;
        this.renderBuildMenu();
        g.sound.click();
      });
    }
    // 建筑卡片（线网分类是 v2.0 工具，走特殊渲染）
    const cardsEl = document.getElementById('build-cards');
    if (this.curCat === 'net') {
      cardsEl.innerHTML = this.netToolCards().map(t =>
        `<button class="build-card" data-net="${t.mode}">` +
        `<span class="bc-icon">${t.icon}</span>` +
        `<span class="bc-name">${t.name}</span>` +
        `<span class="bc-cost">${t.desc}</span>` +
        `</button>`
      ).join('');
      for (const card of cardsEl.querySelectorAll('[data-net]')) {
        card.addEventListener('click', () => this.pickNetTool(card.dataset.net));
      }
    } else {
      const ids = this.idsOfCat(this.curCat);
      cardsEl.innerHTML = ids.map(id => this.cardHTML(id)).join('');
      for (const card of cardsEl.querySelectorAll('[data-pick]')) {
        card.addEventListener('click', () => this.pickBuilding(card.dataset.pick));
      }
    }
  }

  countCat(cat) {
    if (cat === 'net') return 4;
    let n = 0;
    for (const id in BUILDINGS) {
      if (buildCatOf(id) === cat) n++;
    }
    return n;
  }

  idsOfCat(cat) {
    const ids = [];
    for (const id in BUILDINGS) {
      if (buildCatOf(id) === cat) ids.push(id);
    }
    // 基础建筑排前面（按造价从低到高，发射台这种放最后）
    ids.sort((a, b) => {
      try {
        const ca = this.lv1Cost(a), cb = this.lv1Cost(b);
        const sa = Object.values(ca).reduce((x, y) => x + y, 0);
        const sb = Object.values(cb).reduce((x, y) => x + y, 0);
        return sa - sb;
      } catch (e) { return 0; }
    });
    return ids;
  }

  lv1Cost(id) {
    const d = BUILDINGS[id];
    return this.game.builder.effCost(d.levels[1].cost, false);
  }

  cardHTML(id) {
    const g = this.game;
    const d = BUILDINGS[id];
    if (!d || !d.levels || !d.levels[1]) return '';
    let cost, afford = true, locked = false;
    try {
      cost = this.lv1Cost(id);
      afford = canAfford(g.player.inv, cost);
      const lv = d.levels[1];
      locked = !!(lv.needTech && !g.tech.buildingUnlocked(id));
    } catch (e) { cost = {}; }
    const costStr = Object.entries(cost)
      .map(([k, v]) => `${(typeof RES_DEFS !== 'undefined' && RES_DEFS[k]) ? RES_DEFS[k].icon : k}${v}`)
      .join(' ');
    const cls = 'build-card' + (locked ? ' locked' : (afford ? '' : ' poor')) +
      (g.selectedBuild === id ? ' selected' : '');
    const badge = locked ? '🔒' : (afford ? '' : '💰');
    return `<button class="${cls}" data-pick="${id}">` +
      `<span class="bc-icon">${d.icon}</span>` +
      `<span class="bc-name">${d.name}${badge}</span>` +
      `<span class="bc-cost">${costStr}</span>` +
      `</button>`;
  }

  pickBuilding(id) {
    const g = this.game;
    const d = BUILDINGS[id];
    if (!d) return;
    // 科技锁定检查（沿用原来的提示逻辑）
    const lv = d.levels[1];
    if (lv.needTech && !g.tech.buildingUnlocked(id)) {
      g.toast('🔒 需要科技解锁（去科技树看看）');
      g.sound.error();
      return;
    }
    this.hideBuildMenu();
    g.selectBuild(g.selectedBuild === id ? null : id);
    g.sound.click();
    if (g.selectedBuild) {
      g.toast(`👆 点一块空地放下「${d.name}」`);
    }
  }

  refreshCancelBtn() {
    const el = document.getElementById('btn-cancel-build');
    if (!el) return;
    if (this.game.selectedBuild) {
      const d = BUILDINGS[this.game.selectedBuild];
      el.innerHTML = `✖ 取消：${d ? d.icon + d.name : ''}`;
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  }

  // ---------- 更多菜单 ----------
  toggleMoreMenu() {
    const el = document.getElementById('more-menu');
    if (el.classList.contains('hidden')) this.showMoreMenu();
    else this.hideMoreMenu();
  }

  showMoreMenu() {
    const g = this.game;
    // 注入可能晚于 bindUI，每次打开前再收一次
    this.relocateInjectedButtons();
    const grid = document.getElementById('more-grid');
    const items = [...moreMenuItems(g), ...this.relocatedMenuItems()];
    grid.innerHTML = items.map((it, i) =>
      `<button class="more-btn${it.danger ? ' danger' : ''}" data-more="${i}">` +
      `<span class="mb-icon">${it.icon}</span><small>${it.name}</small></button>`
    ).join('');
    const btns = grid.querySelectorAll('[data-more]');
    btns.forEach(b => b.addEventListener('click', () => {
      const it = items[+b.dataset.more];
      this.hideMoreMenu();
      try { it.fn(); } catch (e) {}
      g.sound.click();
    }));
    document.getElementById('more-menu').classList.remove('hidden');
    this.hideBuildMenu();
    this.hideOverlayMenu();
  }

  hideMoreMenu() {
    document.getElementById('more-menu').classList.add('hidden');
  }

  // ---------- 图层菜单 ----------
  toggleOverlayMenu() {
    const el = document.getElementById('overlay-menu');
    if (el.classList.contains('hidden')) this.showOverlayMenu();
    else this.hideOverlayMenu();
  }

  showOverlayMenu() {
    const g = this.game;
    let cur = 'none';
    try {
      const ov = g.v20 && g.v20.overlay;
      if (ov && typeof ov.getMode === 'function') cur = ov.getMode();
    } catch (e) {}
    const list = document.getElementById('overlay-list');
    list.innerHTML = UI_OVERLAY_MODES.map(m =>
      `<button class="overlay-row${m.id === cur ? ' active' : ''}" data-ov="${m.id}">` +
      `<span>${m.icon} ${m.name}</span><span>${m.id === cur ? '✓' : ''}</span></button>`
    ).join('');
    for (const b of list.querySelectorAll('[data-ov]')) {
      b.addEventListener('click', () => {
        const mode = b.dataset.ov;
        try {
          const ov = g.v20 && g.v20.overlay;
          if (ov && typeof ov.setMode === 'function') ov.setMode(mode);
        } catch (e) {}
        this.hideOverlayMenu();
        g.sound.click();
        if (mode !== 'none') g.toast(`${UI_OVERLAY_MODES.find(m => m.id === mode).icon} 已切换图层`);
      });
    }
    document.getElementById('overlay-menu').classList.remove('hidden');
    this.hideBuildMenu();
    this.hideMoreMenu();
  }

  hideOverlayMenu() {
    document.getElementById('overlay-menu').classList.add('hidden');
  }

  // ---------- 顶栏资源收起/展开 ----------
  toggleResExpand() {
    this.resExpanded = !this.resExpanded;
    const rb = document.getElementById('res-bar');
    const btn = document.getElementById('btn-res-expand');
    if (rb) rb.classList.toggle('collapsed', !this.resExpanded);
    if (btn) btn.textContent = this.resExpanded ? '－' : '＋';
    this.game.sound.click();
  }

  // ---------- 3 步新手教程 ----------
  simplifyTutorial() {
    try {
      if (typeof TUTORIAL_STEPS === 'undefined') return;
      TUTORIAL_STEPS.length = 0;
      TUTORIAL_STEPS.push(
        {
          id: 'move',
          title: '👋 欢迎来到火星！',
          text: '点地图任意位置，宇航员会走过去。',
          check: (game) => game._tutorialMoved === true,
          hint: '👆 点一下地图',
        },
        {
          id: 'harvest',
          title: '⛏️ 采集资源',
          text: '走到发光的格子上，点底部「⛏️采集」。',
          check: (game) => (game.player.inv.iron + game.player.inv.ice + game.player.inv.rare) >= 10,
          hint: '👆 发光格 → 点「⛏️采集」',
        },
        {
          id: 'build',
          title: '🏠 盖第一栋房子',
          text: '点「🏗️建造」→ 选「🏠居住舱」→ 点空地放下。',
          check: (game) => game.builder.count('habitat') >= 1,
          hint: '👆 「🏗️建造」→「🏠居住舱」→ 点空地',
        },
      );
    } catch (e) {}
  }
}

if (typeof module !== 'undefined') {
  module.exports = { UIRefactor, BUILD_CATS, BUILD_CAT_MAP, buildCatOf };
}
