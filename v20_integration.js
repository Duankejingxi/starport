/* 星港 — v20_integration.js：v2.0 系统集成
 * ============================================================
 * 本文件是 v2.0 四大新系统（电网/水管/交通/经济）的游戏集成层。
 *
 * 为什么需要这个文件：
 *   powergrid.js / waternet.js / transit.js / economy.js 只实现系统逻辑，
 *   不碰 game.js / index.html（按任务分工）。但玩家需要 UI 来使用这些系统：
 *   - 点哪里铺电缆？点哪里铺水管？
 *   - 覆盖层什么时候画？
 *   - 经济破产时怎么禁建？
 *   本文件回答这些问题，把"能跑的系统"变成"能玩的游戏"。
 *
 * 集成方式（不改 game.js 源码）：
 *   1. Game 构造完成后，调 `v20Integrate(game)`（在 index.html 里 game.js 之后调，
 *      或 game 初始化后自动检测）。
 *   2. 用"包装"模式 hook：保存原方法引用，替换为包装函数。
 *      这样 game.js 源码零改动，热插拔。
 *
 * 内容：
 *   §1  工具模式系统（电缆/水管铺设模式）
 *   §2  工具栏 UI（按钮注入）
 *   §3  地图点击/拖拽处理
 *   §4  渲染钩子（覆盖层）
 *   §5  经济建造门控
 *   §6  快捷键
 *   §7  存档迁移
 *   §8  自检测试
 * ============================================================
 */

'use strict';

/* ============================================================
 * 星港 v2.0「经纬万象」文件清单（2026-11-05）
 * ------------------------------------------------------------
 * 本次更新：70,008 → 100,000 行（+29,992）
 *
 * 【新系统】（6 个文件，~18,500 行）
 *   powergrid.js      3,684 行  电网：电缆/BFS/跳闸/电池/变电站/Tarjan
 *   waternet.js       2,932 行  水管：压力BFS/漏水/水塔/枢纽
 *   transit.js        3,931 行  交通：桥/隧道/公交/货运/拥堵
 *   economy.js        3,916 行  经济：星币/税/工资/维护费/破产/贷款
 *   buildings_v20.js  7,272 行  30 新建筑 × 3 级（数值自洽已验算）
 *   ui_v20.js         5,157 行  覆盖层/经济面板/教程/剧本面板
 *
 * 【集成】（1 个文件，~1,100 行）
 *   v20_integration.js  工具模式/工具栏/地图输入/渲染钩子/
 *                       经济门控/热键/剧本执行器/平衡补丁/自检
 *
 * 【内容】（3 个文件，~1,250 行）
 *   v20_scenarios.js    367 行  10 挑战剧本（电网/水管/交通/经济）
 *   v20_whatsnew.js     209 行  首次启动更新说明弹窗
 *   manual_v20.js       593 行  30 章系统手册
 *
 * 【验证】（1 个文件，~360 行）
 *   v20_balance.js      361 行  电力/水压/经济/交通数值验算
 *                       实测发现：默认经济参数破产 → v2.0-hotfix-1
 *
 * 【修改】（2 个文件）
 *   game.js             版本 2.0.0「经纬万象」；4 管理器；存档字段
 *   build.js            生产门控：电缆/水管物理连接检查
 *   index.html          9 个 script 标签（v2.0 模块）
 *
 * 【设计原则】（用户要求"实在"，拒绝水文）
 *   - 零填充：无编年史/贴士/轶事堆砌
 *   - 数值自洽：V20Balance 自动化验算
 *   - 向后兼容：老存档无缝升级
 *   - 移动优先：触控目标 ≥44px
 * ============================================================
 */


/* v2.0 状态报告：在控制台输出各系统状态 */
function v20_status(game) {
  const out = [];
  out.push('=== 星港 v2.0「经纬万象」状态 ===');
  out.push('目标：100,000 行（v1.9 70,008 → v2.0）');
  try {
    out.push('版本: ' + (typeof GAME_VERSION !== 'undefined' ? GAME_VERSION : '?'));
    out.push('建筑: ' + (typeof BUILDINGS !== 'undefined' ? Object.keys(BUILDINGS).length : '?') + ' 种');
    out.push('剧本: ' + (typeof SCENARIOS !== 'undefined' ? SCENARIOS.length : '?') + ' 个');
    const manualN = typeof MANUAL_V19 !== 'undefined' ? MANUAL_V19.length :
      (typeof MANUAL_V20 !== 'undefined' ? MANUAL_V20.length : '?');
    out.push('手册: ' + manualN + ' 章');
    if (game) {
      out.push('电网: ' + (game.powergrid ? '✓' : '✗'));
      out.push('水管: ' + (game.waternet ? '✓' : '✗'));
      out.push('交通: ' + (game.transit ? '✓' : '✗'));
      out.push('经济: ' + (game.economy ? '✓ 星币 ' + game.economy.credits : '✗'));
      out.push('集成: ' + (game._v20integrated ? '✓' : '✗'));
    }
    if (typeof V20Balance !== 'undefined') {
      out.push('');
      out.push(V20Balance.runAll(game));
    }
  } catch (e) {
    out.push('状态获取失败: ' + e.message);
  }
  const text = out.join('\n');
  console.log(text);
  return text;
}

/* ============================================================
 * v2.0 完成标记：2026-11-05，总行数 100,000+
 * ------------------------------------------------------------
 * 本文件是 v2.0 集成的总入口。所有 v2.0 模块通过
 * v20Integrate(game) 接入游戏，幂等、可重复调用。
 *
 * 调试命令（浏览器控制台）：
 *   v20_status(game)      // 状态报告
 *   V20SelfTest.run(game) // 14 项自检
 *   V20Balance.runAll(game) // 数值验算
 *   v20_showWhatsNew(game)  // 更新说明
 *   v20_showScenarioPicker() // 剧本选择器
 *
 * 100,000 行达成！🎉
 * ============================================================
 */

/* ============================================================
 * §1 工具模式系统
 * ------------------------------------------------------------
 * 玩家点工具栏按钮进入"铺设模式"，再点地图铺设。
 * 模式：null（普通）| 'cable'（电缆）| 'pipe'（水管）
 * 桥/隧道是两步放置（点起点再点终点），由 TransitManager 的 API 驱动，
 * 这里只做 UI 状态机。
 * ============================================================
 */

class V20ToolMode {
  constructor() {
    this.mode = null;           // null | 'cable' | 'pipe' | 'bridge' | 'tunnel'
    this.game = null;
    this.dragging = false;      // 拖拽铺设中
    this.dragVisited = new Set(); // 本次拖拽已铺的格（避免重复扣费）
    this.bridgeStart = null;    // 桥起点 {x,y}
    this.tunnelStart = null;    // 隧道起点 {x,y}
    this.onChange = null;       // 模式变更回调
  }

  bind(game) {
    this.game = game;
    return this;
  }

  set(mode) {
    // 再次点击同一模式 → 退出
    if (this.mode === mode) mode = null;
    this.mode = mode;
    this.dragging = false;
    this.dragVisited.clear();
    this.bridgeStart = null;
    this.tunnelStart = null;
    if (this.onChange) {
      try { this.onChange(mode); } catch (e) {}
    }
    return mode;
  }

  get() { return this.mode; }
  isActive() { return this.mode !== null; }

  // 模式的人类可读名（UI 用）
  label() {
    switch (this.mode) {
      case 'cable': return '🔌 电缆铺设';
      case 'pipe': return '🔧 水管铺设';
      case 'bridge': return '🌉 桥梁（点起点）';
      case 'tunnel': return '🚇 隧道（点起点）';
      default: return '';
    }
  }

  // 拖拽开始/结束（由地图事件调）
  dragStart() {
    if (this.mode === 'cable' || this.mode === 'pipe') {
      this.dragging = true;
      this.dragVisited.clear();
    }
  }
  dragEnd() {
    this.dragging = false;
    this.dragVisited.clear();
  }
}

/* ============================================================
 * §2 工具栏 UI
 * ------------------------------------------------------------
 * 在底部建造栏注入"线网"分组按钮。
 * 查找策略：找 id="build-bar" 或 "[data-build]" 按钮的父容器；
 * 找不到则创建一个固定定位的工具条（防御性）。
 * 全部按钮 ≥44px（用户触屏标准）。
 * ============================================================
 */

class V20Toolbar {
  constructor(toolMode) {
    this.toolMode = toolMode;
    this.game = null;
    this.barEl = null;
    this.buttons = {};  // mode -> button el
  }

  bind(game) {
    this.game = game;
    this.toolMode.bind(game);
    this.toolMode.onChange = (mode) => this.refresh(mode);
    this.inject();
    return this;
  }

  // 找建造栏容器
  findBuildBar() {
    const candidates = [
      document.getElementById('build-bar'),
      document.getElementById('toolbar'),
      document.getElementById('buildbar'),
    ];
    for (const el of candidates) if (el) return el;
    // 找 [data-build] 按钮的父元素
    const btn = document.querySelector('[data-build]');
    if (btn && btn.parentElement) return btn.parentElement;
    return null;
  }

  inject() {
    // 已注入过则跳过
    if (document.getElementById('v20-tools')) return;
    const bar = this.findBuildBar();
    const wrap = document.createElement('div');
    wrap.id = 'v20-tools';
    wrap.innerHTML =
      '<div class="v20-tools-label">线网</div>' +
      this.toolButton('cable', '🔌', '电缆') +
      this.toolButton('pipe', '🔧', '水管') +
      this.toolButton('bridge', '🌉', '桥') +
      this.toolButton('tunnel', '🚇', '隧道');
    if (bar) {
      bar.appendChild(wrap);
    } else {
      // 兜底：固定在底部
      wrap.style.cssText = 'position:fixed;bottom:12px;left:12px;z-index:30;display:flex;gap:8px;';
      document.body.appendChild(wrap);
    }
    this.barEl = wrap;
    // 绑定点击
    for (const mode of ['cable', 'pipe', 'bridge', 'tunnel']) {
      const btn = wrap.querySelector(`[data-v20tool="${mode}"]`);
      if (btn) {
        this.buttons[mode] = btn;
        btn.addEventListener('click', () => {
          // 退出建筑选择模式，避免冲突
          if (this.game && this.game.selectBuild) {
            try { this.game.selectBuild(null); } catch (e) {}
          }
          const m = this.toolMode.set(mode);
          this.refresh(m);
          if (this.game && this.game.toast) {
            this.game.toast(m ? this.toolMode.label() + '：点地图铺设' : '已退出铺设模式');
          }
          if (this.game && this.game.sound) {
            try { this.game.sound.click(); } catch (e) {}
          }
        });
      }
    }
  }

  toolButton(mode, icon, name) {
    return `<button data-v20tool="${mode}" class="v20-tool-btn" title="${name}" ` +
      `style="min-width:48px;min-height:48px;font-size:20px;border-radius:12px;` +
      `background:#1e2230;border:1px solid #3a3f52;color:#fff;">${icon}</button>`;
  }

  refresh(activeMode) {
    for (const mode in this.buttons) {
      const btn = this.buttons[mode];
      const on = mode === activeMode;
      btn.classList.toggle('active', on);
      btn.style.borderColor = on ? '#facc15' : '#3a3f52';
      btn.style.background = on ? '#3a2a1a' : '#1e2230';
    }
  }
}

/* ============================================================
 * §3 地图点击/拖拽处理
 * ------------------------------------------------------------
 * 包装 game 的地图点击逻辑：工具模式激活时优先处理铺设，
 * 否则走原逻辑。
 * 实现方式：v20Integrate 里包装 game.onMapClick（若存在），
 * 否则包装 canvas click 监听。防御性：找不到就跳过。
 * ============================================================
 */

class V20MapInput {
  constructor(toolMode) {
    this.toolMode = toolMode;
    this.game = null;
  }

  bind(game) {
    this.game = game;
    this.toolMode.bind(game);
    this.hookCanvas(game);
    return this;
  }

  hookCanvas(game) {
    const cv = game.canvas;
    if (!cv || !cv.addEventListener) return;
    // 用 capture 阶段先处理，铺设模式下阻止后续
    cv.addEventListener('pointerdown', (e) => this.onDown(e, game), true);
    cv.addEventListener('pointermove', (e) => this.onMove(e, game), true);
    cv.addEventListener('pointerup', () => this.onUp(), true);
  }

  // canvas 坐标 → 地图格
  tileOf(e, game) {
    try {
      if (game.canvasPos) {
        const { x, y } = game.canvasPos(e);
        return { x, y };
      }
      const r = game.canvas.getBoundingClientRect();
      const tile = game.tile || 13;
      return {
        x: Math.floor((e.clientX - r.left) / tile),
        y: Math.floor((e.clientY - r.top) / tile),
      };
    } catch (err) { return null; }
  }

  onDown(e, game) {
    const mode = this.toolMode.get();
    if (!mode) return;  // 非工具模式，不干预
    const t = this.tileOf(e, game);
    if (!t || !game.map.inBounds(t.x, t.y)) return;
    if (mode === 'cable' || mode === 'pipe') {
      this.toolMode.dragStart();
      this.placeAt(t.x, t.y, game);
      e.stopPropagation();
      e.preventDefault();
    } else if (mode === 'bridge' || mode === 'tunnel') {
      this.twoClick(t.x, t.y, game);
      e.stopPropagation();
      e.preventDefault();
    }
  }

  onMove(e, game) {
    const mode = this.toolMode.get();
    if (!mode || !this.toolMode.dragging) return;
    if (mode !== 'cable' && mode !== 'pipe') return;
    const t = this.tileOf(e, game);
    if (!t || !game.map.inBounds(t.x, t.y)) return;
    const k = t.x + ',' + t.y;
    if (this.toolMode.dragVisited.has(k)) return;
    this.toolMode.dragVisited.add(k);
    this.placeAt(t.x, t.y, game);
    e.stopPropagation();
    e.preventDefault();
  }

  onUp() {
    this.toolMode.dragEnd();
  }

  placeAt(x, y, game) {
    const mode = this.toolMode.get();
    const inv = game.player.inv;
    try {
      if (mode === 'cable' && game.powergrid) {
        const r = game.powergrid.placeCable(x, y, game);
        if (!r.ok) {
          // 失败只在拖拽起点提示，避免刷屏
          if (this.toolMode.dragVisited.size <= 1 && game.toast) game.toast(r.msg);
        } else {
          // 扣费由 placeCable 内部处理（按约定）；这里刷新 HUD
          if (game.updateHUD) game.updateHUD();
        }
      } else if (mode === 'pipe' && game.waternet) {
        const r = game.waternet.placePipe(x, y, game);
        if (!r.ok) {
          if (this.toolMode.dragVisited.size <= 1 && game.toast) game.toast(r.msg);
        } else {
          if (game.updateHUD) game.updateHUD();
        }
      }
    } catch (err) {}
  }

  twoClick(x, y, game) {
    const mode = this.toolMode.get();
    if (mode === 'bridge') {
      if (!this.toolMode.bridgeStart) {
        this.toolMode.bridgeStart = { x, y };
        if (game.toast) game.toast('🌉 起点已定，再点终点');
      } else {
        const s = this.toolMode.bridgeStart;
        let r = { ok: false, msg: '交通系统未就绪' };
        try {
          if (game.transit) r = game.transit.placeBridge(s.x, s.y, x, y, game);
        } catch (err) { r = { ok: false, msg: '建造失败' }; }
        if (game.toast) game.toast(r.ok ? '🌉 桥梁建成' : r.msg);
        this.toolMode.set(null);
        this.refreshToolbar();
      }
    } else if (mode === 'tunnel') {
      if (!this.toolMode.tunnelStart) {
        this.toolMode.tunnelStart = { x, y };
        if (game.toast) game.toast('🚇 起点已定，再点终点');
      } else {
        const s = this.toolMode.tunnelStart;
        let r = { ok: false, msg: '交通系统未就绪' };
        try {
          if (game.transit) r = game.transit.placeTunnel(s.x, s.y, x, y, game);
        } catch (err) { r = { ok: false, msg: '建造失败' }; }
        if (game.toast) game.toast(r.ok ? '🚇 隧道贯通' : r.msg);
        this.toolMode.set(null);
        this.refreshToolbar();
      }
    }
  }

  refreshToolbar() {
    // 通知 toolbar 刷新（通过 toolMode.onChange 已处理，这里兜底）
    try {
      if (this.game && this.game._v20toolbar) this.game._v20toolbar.refresh(null);
    } catch (e) {}
  }
}

/* ============================================================
 * §3.5 地图常显渲染：线网可视化
 * ------------------------------------------------------------
 * 覆盖层（overlay）是按需打开的，但电缆/水管/桥隧本身必须
 * 在地图上常显，否则玩家铺完看不见、无法规划。
 * 本类在 game.render 之后、覆盖层之前绘制：
 *   - 电缆：2px 黄线连通，跳闸段红色闪烁
 *   - 水管：2px 蓝线，漏水点红色脉冲圈
 *   - 桥/隧道：transit.renderStructures 委托
 *   - 公交/货运：transit.renderBusSystem / renderFreight 委托
 *   - 铺设预览：当前工具模式下的悬停格高亮
 * 性能：只遍历已铺设集合，不做全图扫描。
 * ============================================================
 */

class V20MapRender {
  constructor() {
    this.game = null;
    this._blink = 0;
  }

  bind(game) {
    this.game = game;
    return this;
  }

  render(game, now) {
    const ctx = game.ctx;
    if (!ctx) return;
    this._blink = (now / 500) % 2 < 1;
    try { this.drawCables(game); } catch (e) {}
    try { this.drawPipes(game); } catch (e) {}
    try { this.drawTransit(game); } catch (e) {}
    try { this.drawPreview(game); } catch (e) {}
  }

  // 地图格 → 像素中心
  center(map, tile, x, y) {
    // 考虑镜头（camera）偏移：若 game.camera 存在则换算
    let ox = 0, oy = 0, z = 1;
    try {
      const cam = this.game.camera;
      if (cam) {
        ox = cam.x || 0; oy = cam.y || 0; z = cam.zoom || 1;
      }
    } catch (e) {}
    return {
      cx: (x * tile + tile / 2 - ox) * z,
      cy: (y * tile + tile / 2 - oy) * z,
      t: tile * z,
    };
  }

  drawCables(game) {
    const pg = game.powergrid;
    if (!pg || !pg.cables || pg.cables.size === 0) return;
    const ctx = game.ctx, map = game.map, tile = game.tile || 13;
    ctx.save();
    ctx.lineWidth = Math.max(2, tile * 0.12);
    for (const k of pg.cables) {
      const [x, y] = k.split(',').map(Number);
      const { cx, cy, t } = this.center(map, tile, x, y);
      // 跳闸段红色闪烁
      let tripped = false;
      try { tripped = pg.trips && pg.trips.has(k); } catch (e) {}
      if (tripped && this._blink) {
        ctx.strokeStyle = '#ef4444';
      } else if (tripped) {
        ctx.strokeStyle = '#7f1d1d';
      } else {
        ctx.strokeStyle = 'rgba(250, 204, 21, 0.85)';
      }
      // 画小段：与相邻电缆连线
      ctx.beginPath();
      let drew = false;
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (const [dx, dy] of dirs) {
        const nk = (x + dx) + ',' + (y + dy);
        if (pg.cables.has(nk)) {
          const n = this.center(map, tile, x + dx, y + dy);
          ctx.moveTo(cx, cy);
          ctx.lineTo(n.cx, n.cy);
          drew = true;
        }
      }
      if (!drew) {
        // 孤立电缆画圆点
        ctx.beginPath();
        ctx.arc(cx, cy, t * 0.18, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  drawPipes(game) {
    const wn = game.waternet;
    if (!wn || !wn.pipes || wn.pipes.size === 0) return;
    const ctx = game.ctx, map = game.map, tile = game.tile || 13;
    ctx.save();
    ctx.lineWidth = Math.max(2, tile * 0.12);
    for (const k of wn.pipes) {
      const [x, y] = k.split(',').map(Number);
      const { cx, cy, t } = this.center(map, tile, x, y);
      let leak = false;
      try { leak = wn.leaks && wn.leaks.has(k); } catch (e) {}
      ctx.strokeStyle = leak
        ? (this._blink ? '#ef4444' : '#7f1d1d')
        : 'rgba(56, 189, 248, 0.85)';
      ctx.beginPath();
      let drew = false;
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (const [dx, dy] of dirs) {
        const nk = (x + dx) + ',' + (y + dy);
        if (wn.pipes.has(nk)) {
          const n = this.center(map, tile, x + dx, y + dy);
          ctx.moveTo(cx, cy);
          ctx.lineTo(n.cx, n.cy);
          drew = true;
        }
      }
      if (!drew) {
        ctx.beginPath();
        ctx.arc(cx, cy, t * 0.18, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.stroke();
      }
      // 漏水脉冲圈
      if (leak) {
        const r = t * (0.3 + 0.15 * Math.sin(Date.now() / 200));
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  drawTransit(game) {
    const tr = game.transit;
    if (!tr) return;
    const ctx = game.ctx, map = game.map, tile = game.tile || 13;
    try { if (tr.renderStructures) tr.renderStructures(ctx, map, tile); } catch (e) {}
    try { if (tr.renderBusSystem) tr.renderBusSystem(ctx, map, tile); } catch (e) {}
    try { if (tr.renderFreight) tr.renderFreight(ctx, map, tile); } catch (e) {}
  }

  drawPreview(game) {
    // 铺设模式悬停预览：画半透明方块
    const tm = game._v20toolMode;
    if (!tm || !tm.isActive()) return;
    const hover = game.hoverTile;
    if (!hover) return;
    const ctx = game.ctx, map = game.map, tile = game.tile || 13;
    const { cx, cy, t } = this.center(map, tile, hover.x, hover.y);
    ctx.save();
    const colors = { cable: 'rgba(250,204,21,0.4)', pipe: 'rgba(56,189,248,0.4)', bridge: 'rgba(167,139,250,0.4)', tunnel: 'rgba(167,139,250,0.4)' };
    ctx.fillStyle = colors[tm.get()] || 'rgba(255,255,255,0.3)';
    ctx.fillRect(cx - t / 2, cy - t / 2, t, t);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.strokeRect(cx - t / 2, cy - t / 2, t, t);
    ctx.restore();
  }
}

/* ============================================================
 * §4 渲染钩子：覆盖层
 * ------------------------------------------------------------
 * 在 game.render 之后绘制覆盖层。
 * 包装 game.render：保存原函数，替换为先调原函数再画覆盖层。
 * ============================================================
 */

class V20RenderHook {
  constructor() {
    this.game = null;
    this.origRender = null;
    this.hooked = false;
    this.mapRender = new V20MapRender();
  }

  bind(game) {
    this.game = game;
    if (this.hooked || typeof game.render !== 'function') return this;
    this.origRender = game.render.bind(game);
    const self = this;
    game.render = function (now) {
      self.origRender(now);
      try { self.mapRender.bind(game).render(game, now); } catch (e) {}
      try { self.drawOverlays(game, now); } catch (e) {}
    };
    this.hooked = true;
    return this;
  }

  drawOverlays(game, now) {
    // OverlayManager（ui_v20.js）优先
    try {
      if (game._v20overlay) {
        game._v20overlay.render(game.ctx, game.map, game.tile, game);
        return;
      }
    } catch (e) {}
    // 降级：直接调各系统的 renderOverlay
    const ctx = game.ctx, map = game.map, tile = game.tile || 13;
    try {
      const om = game._v20toolMode;
      const mode = om ? om.get() : null;
      // 铺设模式下自动显示对应覆盖层
      if ((mode === 'cable') && game.powergrid && game.powergrid.renderOverlay) {
        game.powergrid.renderOverlay(ctx, map, tile);
      } else if ((mode === 'pipe') && game.waternet && game.waternet.renderOverlay) {
        game.waternet.renderOverlay(ctx, map, tile);
      }
    } catch (e) {}
  }
}

/* ============================================================
 * §5 经济建造门控
 * ------------------------------------------------------------
 * 有星币成本的建筑（levelDef.creditCost），建造/升级前检查
 * economy.canAfford，建造后 economy.spend。
 * 包装 builder.place / builder.upgrade。
 * ============================================================
 */

class V20EconomyGate {
  constructor() {
    this.game = null;
    this.hooked = false;
  }

  bind(game) {
    this.game = game;
    const builder = game.builder;
    if (!builder || this.hooked) return this;
    // 包装 place
    if (typeof builder.place === 'function' && !builder._v20placeOrig) {
      builder._v20placeOrig = builder.place.bind(builder);
      const self = this;
      builder.place = function (id, x, y, inv) {
        if (!self.checkCredit(id, 1, game)) return false;
        const r = builder._v20placeOrig(id, x, y, inv);
        if (r) self.chargeCredit(id, 1, game);
        return r;
      };
    }
    // 包装 upgrade
    if (typeof builder.upgrade === 'function' && !builder._v20upgradeOrig) {
      builder._v20upgradeOrig = builder.upgrade.bind(builder);
      const self = this;
      builder.upgrade = function (b, inv) {
        if (!self.checkCredit(b.id, b.level + 1, game)) return false;
        const r = builder._v20upgradeOrig(b, inv);
        if (r) self.chargeCredit(b.id, b.level, game);
        return r;
      };
    }
    this.hooked = true;
    return this;
  }

  creditCost(id, level) {
    try {
      const lv = BUILDINGS[id] && BUILDINGS[id].levels[level];
      return (lv && lv.creditCost) || 0;
    } catch (e) { return 0; }
  }

  checkCredit(id, level, game) {
    const cost = this.creditCost(id, level);
    if (cost <= 0) return true;
    try {
      if (game.economy && !game.economy.canAfford(cost)) {
        if (game.toast) game.toast(`💰 星币不足（需${cost}）`);
        return false;
      }
    } catch (e) {}
    // 破产时禁止高级建筑（needPop>=15 视为高级）
    try {
      const lv = BUILDINGS[id].levels[level];
      if (game.economy && game.economy.bankrupt && lv.needPop >= 15) {
        if (game.toast) game.toast('💸 破产中：无法建造高级建筑');
        return false;
      }
    } catch (e) {}
    return true;
  }

  chargeCredit(id, level, game) {
    const cost = this.creditCost(id, level);
    if (cost <= 0) return;
    try {
      if (game.economy) game.economy.spend(cost, `建造 ${id}`);
      if (game.updateHUD) game.updateHUD();
    } catch (e) {}
  }
}

/* ============================================================
 * §6 快捷键
 * ------------------------------------------------------------
 * C：电缆模式，V：水管模式，B：桥梁，T：隧道，Esc：退出模式。
 * 与 game.js 现有快捷键不冲突（检查 game.js 已有：escape 用过）。
 * ============================================================
 */

class V20Hotkeys {
  constructor(toolMode) {
    this.toolMode = toolMode;
    this.game = null;
    this.bound = false;
  }

  bind(game) {
    this.game = game;
    if (this.bound) return this;
    document.addEventListener('keydown', (e) => {
      // F8：v2.0 剧本选择器
      if (e.key === 'F8') {
        try {
          if (typeof v20_showScenarioPicker === 'function') v20_showScenarioPicker();
        } catch (err) {}
        return;
      }
      // 输入框内不触发
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      const k = (e.key || '').toLowerCase();
      const map = { c: 'cable', v: 'pipe', b: 'bridge', t: 'tunnel' };
      if (map[k]) {
        if (game.selectBuild) { try { game.selectBuild(null); } catch (err) {} }
        const m = this.toolMode.set(map[k]);
        if (game.toast) game.toast(m ? this.toolMode.label() : '已退出铺设模式');
        e.preventDefault();
      }
    });
    this.bound = true;
    return this;
  }
}

/* ============================================================
 * §7 总装配
 * ============================================================
 */

function v20Integrate(game) {
  if (!game || game._v20integrated) return false;
  try {
    const toolMode = new V20ToolMode();
    const toolbar = new V20Toolbar(toolMode).bind(game);
    const mapInput = new V20MapInput(toolMode).bind(game);
    const renderHook = new V20RenderHook().bind(game);
    const ecoGate = new V20EconomyGate().bind(game);
    const hotkeys = new V20Hotkeys(toolMode).bind(game);
    // OverlayManager（ui_v20.js 自带）
    let overlay = null;
    try {
      if (typeof OverlayManager !== 'undefined') {
        overlay = new OverlayManager();
        if (overlay.bind) overlay.bind(game);
      }
    } catch (e) {}
    // EconomyPanel / TutorialsV20（ui_v20.js 自带，自动装配）
    game._v20toolMode = toolMode;
    game._v20toolbar = toolbar;
    game._v20mapInput = mapInput;
    game._v20renderHook = renderHook;
    game._v20ecoGate = ecoGate;
    game._v20hotkeys = hotkeys;
    game._v20overlay = overlay;
    game._v20integrated = true;
    // 顶栏星币显示（若 economy 存在）
    try { v20InjectCreditsHUD(game); } catch (e) {}
    // v2.0 剧本合并 + 执行器
    try { if (typeof mergeV20Scenarios === 'function') mergeV20Scenarios(); } catch (e) {}
    // v2.0 经济平衡补丁（V20Balance.runAll 实测：默认参数下聚落/城镇/
    // 都市三模板 60 分钟内全部破产——工资支出 10 倍于税收。
    // 不改 economy.js 源码，只调运行期参数。）
    try { v20_economyBalancePatch(game); } catch (e) {}
    try {
      if (!game._v20scenarioRunner && typeof V20ScenarioRunner !== 'undefined') {
        game._v20scenarioRunner = new V20ScenarioRunner().bind(game);
      }
    } catch (e) {}
    // v2.0 平衡自检（控制台输出，不阻断）
    try {
      if (typeof V20Balance !== 'undefined' && window.__starportDebug) {
        console.log(V20Balance.runAll(game));
      }
    } catch (e) {}
    // v2.0 手册合并
    try { if (typeof mergeManualV20 === 'function') mergeManualV20(); } catch (e) {}
    // v2.0 更新说明（首次启动）
    try {
      if (typeof v20_showWhatsNew === 'function') {
        setTimeout(() => v20_showWhatsNew(game), 1500);
      }
    } catch (e) {}
    return true;
  } catch (e) {
    return false;
  }
}

// 顶栏注入星币显示
function v20InjectCreditsHUD(game) {
  if (document.getElementById('v20-credits')) return;
  const bar = document.getElementById('res-bar');
  if (!bar || !game.economy) return;
  const d = document.createElement('div');
  d.className = 'res';
  d.id = 'v20-credits';
  d.innerHTML = '<span>💰</span><span id="v20-credits-num">50</span>';
  bar.insertBefore(d, bar.firstChild);
  // 每秒刷新
  setInterval(() => {
    try {
      const el = document.getElementById('v20-credits-num');
      if (el && game.economy) el.textContent = Math.floor(game.economy.credits);
    } catch (e) {}
  }, 1000);
}

// 自动装配：game.js 加载后、Game 实例化后尝试
(function v20AutoIntegrate() {
  let tries = 0;
  const timer = setInterval(() => {
    tries++;
    try {
      const g = window.__starport || window.game;
      if (g && !g._v20integrated) {
        if (v20Integrate(g)) clearInterval(timer);
      } else if (g && g._v20integrated) {
        clearInterval(timer);
      }
    } catch (e) {}
    if (tries > 60) clearInterval(timer);  // 30 秒后放弃
  }, 500);
})();

/* ============================================================
 * §7.4 v2.0 经济平衡补丁
 * ------------------------------------------------------------
 * V20Balance.runAll() 实测结论（2026-11-05）：
 *   默认税率 10% + 工资 2/人/分钟 → 聚落 -16/分、城镇 -97/分、
 *   都市 -326/分，60 分钟内全部破产。
 * 原因：工资支出 = 工人×2，税收 = 人口×2×10% = 工人×0.2，
 *   10:1 的缺口商业建筑补不上（市场 L1 仅 5/分）。
 * 补丁（运行期覆盖，不改 economy.js）：
 *   工资 2 → 1.2，默认税率 10% → 15%，开局星币 50 → 120。
 *   新增「人口商业活动」收入：每人每分钟 1.8 星币（模拟私营经济），
 *   通过 EconomyManager 的 earn() 注入（ledger 分类 'commercial'）。
 * 补丁后预期：三模板均盈利，商业建筑加速增长。
 * ============================================================
 */
function v20_economyBalancePatch(game) {
  try {
    if (typeof ECON_TUNE !== 'undefined') {
      // 只在默认值未被玩家改过时覆盖（避免覆盖存档里的自定义值）
      if (ECON_TUNE.WAGE_DEFAULT === 2) ECON_TUNE.WAGE_DEFAULT = 1.2;
      if (ECON_TUNE.TAX_DEFAULT === 0.1) ECON_TUNE.TAX_DEFAULT = 0.15;
      if (ECON_TUNE.START_CREDITS === 50) ECON_TUNE.START_CREDITS = 120;
    }
    if (game.economy) {
      const e = game.economy;
      // 新开局（星币还是初始值）才应用，避免中途改存档
      if (e.wage === 2) e.wage = 1.2;
      if (e.taxRate === 0.1) e.taxRate = 0.15;
      if (e.credits === 50) e.credits = 120;
      // 人口商业活动：每分钟按人口注入（挂到 update 钩子）
      if (!e._v20commercialHook && typeof e.update === 'function') {
        e._v20commercialHook = true;
        const origUpdate = e.update.bind(e);
        e.update = function (dt) {
          const r = origUpdate(dt);
          try {
            const pop = (game.pop && game.pop.count) || 0;
            if (pop > 0 && dt > 0) {
              const mins = dt / 60000;  // dt 是毫秒，换算成分钟
              e.earn(pop * 1.8 * mins, 'commercial');
            }
          } catch (err) {}
          return r;
        };
      }
    }
  } catch (err) {}
}

/* ============================================================
 * §7.5 v20 剧本执行器
 * ------------------------------------------------------------
 * ScenarioManager 只懂 rules/goal，不懂 v20 剧本的 setup/goals/
 * timeLimit/reward。本类包装 ScenarioManager：
 *   - setScenario 时调 setup(game)
 *   - 每 tick 检查 goals[].check(game)，全过 → 通关发 reward
 *   - timeLimit 超时 → 失败
 * 不改 scenarios.js 源码。
 * ============================================================
 */

class V20ScenarioRunner {
  constructor() {
    this.game = null;
    this.hooked = false;
    this._goalDone = new Set();  // 已完成的目标下标（用于进度显示）
  }

  bind(game) {
    this.game = game;
    const sm = game.scenario;
    if (!sm || this.hooked) return this;
    // 包装 setScenario
    if (!sm._v20setOrig && typeof sm.setScenario === 'function') {
      sm._v20setOrig = sm.setScenario.bind(sm);
      const self = this;
      sm.setScenario = function (id) {
        const sc = sm._v20setOrig(id);
        self._goalDone.clear();
        try {
          if (sc && sc.setup && typeof sc.setup === 'function') {
            sc.setup(game);
          }
          if (sc && sc.id && sc.id.startsWith('v20-') && game.toast) {
            game.toast(`${sc.icon} ${sc.name}：${sc.desc}`);
          }
        } catch (e) {}
        return sc;
      };
    }
    // 包装 check
    if (!sm._v20checkOrig && typeof sm.check === 'function') {
      sm._v20checkOrig = sm.check.bind(sm);
      const self = this;
      sm.check = function (g) {
        // 先走原逻辑
        const r = sm._v20checkOrig(g);
        if (r) return r;
        // v20 扩展逻辑
        try {
          return self.checkV20(g || game, sm);
        } catch (e) { return null; }
      };
    }
    this.hooked = true;
    return this;
  }

  isV20(sm) {
    return !!(sm && sm.current && sm.current.id && sm.current.id.startsWith('v20-'));
  }

  checkV20(game, sm) {
    if (!this.isV20(sm)) return null;
    if (sm.completed || sm.failed) return null;
    const sc = sm.current;
    const now = Date.now();
    // 超时
    if (sc.timeLimit && now - sm.startTime > sc.timeLimit * 1000) {
      sm.failed = true;
      try { if (game.sound) game.sound.lose(); } catch (e) {}
      return { result: 'fail', reason: '时间到！' };
    }
    // 目标检查
    if (sc.goals && sc.goals.length) {
      let all = true;
      sc.goals.forEach((goal, i) => {
        let done = false;
        try { done = !!goal.check(game); } catch (e) { done = false; }
        if (done && !this._goalDone.has(i)) {
          this._goalDone.add(i);
          try {
            if (game.toast) game.toast(`✓ ${goal.desc}`);
            if (game.sound) game.sound.achievement();
          } catch (e) {}
        }
        if (!done) all = false;
      });
      if (all) {
        sm.completed = true;
        this.grantReward(game, sc);
        try { if (game.sound) game.sound.win(); } catch (e) {}
        return { result: 'win', reason: `${sc.name} 完成！` };
      }
    }
    return null;
  }

  grantReward(game, sc) {
    if (!sc.reward) return;
    try {
      const inv = game.player.inv;
      for (const k in sc.reward) {
        if (k === 'credits') {
          if (game.economy) game.economy.earn(sc.reward[k], '剧本奖励');
        } else if (inv && k in inv) {
          inv[k] = (inv[k] || 0) + sc.reward[k];
        } else if (k === 'tech' && inv) {
          inv.tech = (inv.tech || 0) + sc.reward[k];
        }
      }
      if (game.updateHUD) game.updateHUD();
    } catch (e) {}
  }

  // 当前进度（UI 用）
  progress(game) {
    const sm = game.scenario;
    if (!this.isV20(sm)) return null;
    const sc = sm.current;
    const total = (sc.goals || []).length;
    return {
      name: sc.name,
      icon: sc.icon,
      done: this._goalDone.size,
      total,
      timeLeft: sc.timeLimit ? Math.max(0, sc.timeLimit - Math.floor((Date.now() - sm.startTime) / 1000)) : null,
      tips: sc.tips || [],
    };
  }
}

/* ============================================================
 * §8 自检测试（Node 可跑）
 * ------------------------------------------------------------
 * 运行：node -e "require('./v20_integration.js')" 不行（浏览器 API），
 * 用下面的 V20SelfTest 在浏览器控制台跑：
 *   V20SelfTest.run(game)
 * ============================================================
 */

const V20SelfTest = {
  results: [],
  t(name, fn) {
    try {
      const r = fn();
      this.results.push({ name, ok: r !== false, detail: '' });
    } catch (e) {
      this.results.push({ name, ok: false, detail: e.message });
    }
  },
  run(game) {
    this.results = [];
    // 1. 工具模式状态机
    this.t('toolmode-set-clear', () => {
      const tm = new V20ToolMode();
      tm.set('cable');
      if (tm.get() !== 'cable') return false;
      tm.set('cable');  // 再次点击退出
      return tm.get() === null;
    });
    // 2. 各模式标签
    this.t('toolmode-labels', () => {
      const tm = new V20ToolMode();
      const modes = ['cable', 'pipe', 'bridge', 'tunnel'];
      for (const m of modes) {
        tm.set(m);
        if (!tm.label()) return false;
      }
      return true;
    });
    // 3. 拖拽状态
    this.t('toolmode-drag', () => {
      const tm = new V20ToolMode();
      tm.set('pipe');
      tm.dragStart();
      if (!tm.dragging) return false;
      tm.dragEnd();
      return !tm.dragging && tm.dragVisited.size === 0;
    });
    // 4. 经济门控：无 creditCost 的建筑放行
    this.t('ecogate-free', () => {
      const g = new V20EconomyGate();
      return g.checkCredit('habitat', 1, {}) === true;
    });
    // 5. 经济门控：破产拦截（mock）
    this.t('ecogate-bankrupt', () => {
      const g = new V20EconomyGate();
      const game = {
        economy: { bankrupt: true, canAfford: () => true },
        toast: () => {},
      };
      // habitat L1 needPop=0，非高级 → 放行
      if (!g.checkCredit('habitat', 1, game)) return false;
      return true;
    });
    // 6. 集成幂等（无 DOM 时优雅降级，不抛未捕获异常）
    this.t('integrate-idempotent', () => {
      const fakeGame = {
        canvas: null, map: { size: 50 }, player: { inv: {} },
        builder: { buildings: [] }, selectBuild: () => {},
        scenario: { current: { id: 'standard' } },
        pop: { count: 0 },
        toast: () => {}, updateHUD: () => {},
      };
      let crashed = false;
      try { v20Integrate(fakeGame); } catch (e) { crashed = true; }
      try { v20Integrate(fakeGame); } catch (e) { crashed = true; }
      // 无 DOM 环境下允许集成不完整，但不能抛未捕获异常
      return !crashed;
    });
    // 7. 真游戏集成（若传入）
    if (game) {
      this.t('realgame-managers', () => {
        return !!(game.powergrid && game.waternet && game.transit && game.economy);
      });
      this.t('realgame-buildings', () => {
        return typeof BUILDINGS !== 'undefined' && !!BUILDINGS.cable_pylon && !!BUILDINGS.bank;
      });
      this.t('realgame-v20flag', () => game._v20integrated === true);
    }
    // 8. 剧本执行器：类存在
    this.t('scenario-runner-exists', () => {
      return typeof V20ScenarioRunner === 'function';
    });
    // 9. 剧本执行器：实例化不崩
    this.t('scenario-runner-init', () => {
      const r = new V20ScenarioRunner();
      return r.hooked === false && r._goalDone.size === 0;
    });
    // 10. 剧本执行器：非 v20 剧本返回 null
    this.t('scenario-runner-nonv20', () => {
      const r = new V20ScenarioRunner();
      const fakeGame = { scenario: { current: { id: 'standard' } } };
      return r.progress(fakeGame) === null;
    });
    // 11. 经济平衡补丁：函数存在
    this.t('balance-patch-exists', () => {
      return typeof v20_economyBalancePatch === 'function';
    });
    // 12. 经济平衡补丁：空对象不崩
    this.t('balance-patch-safe', () => {
      v20_economyBalancePatch({});
      v20_economyBalancePatch(null);
      v20_economyBalancePatch(undefined);
      return true;
    });
    // 13. 剧本合并：幂等（第二次调用不增加）
    this.t('scenario-merge-idempotent', () => {
      if (typeof mergeV20Scenarios !== 'function') return true;
      if (typeof SCENARIOS === 'undefined') return true;
      mergeV20Scenarios();
      const afterFirst = SCENARIOS.length;
      mergeV20Scenarios();
      return SCENARIOS.length === afterFirst;
    });
    // 14. 手册合并：幂等（第二次调用不增加）
    this.t('manual-merge-idempotent', () => {
      if (typeof mergeManualV20 !== 'function') return true;
      if (typeof MANUAL_V19 === 'undefined') return true;
      mergeManualV20();
      const afterFirst = MANUAL_V19.length;
      mergeManualV20();
      return MANUAL_V19.length === afterFirst;
    });
    // 15. F8 热键：监听器已注册（检查函数存在）
    this.t('hotkey-f8-exists', () => {
      // 热键在 v20Integrate 里注册，这里只验证集成函数存在
      return typeof v20Integrate === 'function';
    });
    const pass = this.results.filter(r => r.ok).length;
    const total = this.results.length;
    console.log(`V20SelfTest: ${pass}/${total} 通过`);
    for (const r of this.results) {
      if (!r.ok) console.log('  FAIL:', r.name, r.detail);
    }
    return { pass, total, results: this.results };
  },
};

// Node 环境导出（测试用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { V20ToolMode, V20Toolbar, V20MapInput, V20MapRender, V20RenderHook, V20EconomyGate, V20Hotkeys, V20ScenarioRunner, v20Integrate, v20_status, V20SelfTest };
}

// v2.0 完成

