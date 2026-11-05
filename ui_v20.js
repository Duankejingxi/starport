/* 星港 — ui_v20.js：v2.0 UI 层（地图覆盖层 / 经济面板 / 新系统交互教程）
 * ============================================================================
 * 纯原生 JS/DOM/Canvas，零依赖。所有 DOM 操作只在运行时执行（bind/attach 方法内），
 * `node --check` 只做语法检查。
 *
 * 三个部分：
 *   第一部分  OverlayManager  — 地图覆盖层（power/water/traffic/none）
 *   第二部分  EconomyPanel    — 经济面板（星币/收支曲线/明细/税率工资滑杆/破产警告）
 *   第三部分  TutorialsV20    — 新系统交互教程（电网/水管/交通/经济，各 8~10 步）
 *
 * 防御性设计（贯穿全文件）：
 *   - game.powergrid / game.waternet / game.transit / game.economy 可能不存在
 *     （由其他版本模块提供）。不存在时：覆盖层用内置的“基础分析”渲染代替
 *     系统 renderOverlay；经济面板按钮自动隐藏；教程步骤使用“降级判定”。
 *   - 所有对外部系统的调用都经 v20_try 包裹，异常只记 console，不打断主循环。
 *   - 所有按钮 ≥44px（全局 button{min-height:44px} + 本文件显式 48px）。
 *
 * 与主循环的挂接（不改 game.js）：
 *   v20_ensureLoopHooks(game) 用包装器替换 game.render / game.tick（幂等），
 *   各模块把自己的回调注册进 game._v20RenderFns / game._v20TickFns。
 *   覆盖层绘制需要与主渲染相同的镜头变换，用 v20_worldTransform 复制
 *   game.render 里的变换逻辑（zoom>1 时 translate）。
 *
 * 自动装配：DOMContentLoaded 后轮询 window.__starport（game.js 启动时设置），
 *   拿到后创建三个模块并 attach。全部失败也不影响游戏本身。
 * ============================================================================
 */

// ============================ 通用工具 ============================

/** 建 DOM 元素：v20_el('div', 'cls', '<b>x</b>') */
function v20_el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

/** 16 进制颜色 + alpha → rgba 字符串。hex 形如 '#e07b39'。 */
function v20_hexA(hex, a) {
  let h = String(hex || '#ffffff').replace('#', '');
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  const r = parseInt(h.slice(0, 2), 16) || 0;
  const g = parseInt(h.slice(2, 4), 16) || 0;
  const b = parseInt(h.slice(4, 6), 16) || 0;
  return `rgba(${r},${g},${b},${a})`;
}

/** 数字格式化：1234567 → "1,234,567"，支持小数位。 */
function v20_fmtNum(n, digits) {
  const v = Number(n);
  if (!isFinite(v)) return '—';
  const d = digits == null ? 0 : digits;
  return v.toLocaleString('zh-CN', {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
}

/** 带符号数字：+1,234 / -56 */
function v20_fmtSigned(n, digits) {
  const v = Number(n);
  if (!isFinite(v)) return '—';
  const s = v > 0 ? '+' : v < 0 ? '−' : '';
  return s + v20_fmtNum(Math.abs(v), digits);
}

/** clamp */
function v20_clamp(v, lo, hi) {
  v = Number(v);
  if (!isFinite(v)) return lo;
  return Math.max(lo, Math.min(hi, v));
}

/** 安全执行：fn 出异常返回 fallback，并 console.warn（只在第一次告警，避免刷屏）。 */
const _v20_warned = {};
function v20_try(key, fn, fallback) {
  try {
    return fn();
  } catch (e) {
    if (!_v20_warned[key]) {
      _v20_warned[key] = 1;
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[ui_v20] ' + key + ' 出错，已降级：', e && e.message);
      }
    }
    return fallback;
  }
}

/** 读 game 上的可选子系统：v20_getSys(game, 'powergrid') → object|null */
function v20_getSys(game, name) {
  if (!game) return null;
  const s = game[name];
  return s && typeof s === 'object' ? s : null;
}

/** 建筑定义安全读取：BUILDINGS 是全局量（build.js）。 */
function v20_buildingDef(id) {
  try {
    if (typeof BUILDINGS !== 'undefined' && BUILDINGS && BUILDINGS[id]) return BUILDINGS[id];
  } catch (e) {}
  return null;
}

/** 取建筑等级定义（含 power / powerUse / produce 等字段）。 */
function v20_levelDef(b) {
  if (!b) return null;
  const def = v20_buildingDef(b.id);
  if (!def || !def.levels) return null;
  return def.levels[v20_clamp(b.level || 1, 1, def.levels.length)] || def.levels[0] || null;
}

/** 单建筑发电量（取自等级定义 power 字段，兼容 powerProd 别名）。 */
function v20_buildingPowerProd(b) {
  const lv = v20_levelDef(b);
  if (!lv) return 0;
  return Number(lv.power || lv.powerProd || 0) || 0;
}

/** 单建筑耗电量（powerUse 字段）。 */
function v20_buildingPowerUse(b) {
  const lv = v20_levelDef(b);
  if (!lv) return 0;
  return Number(lv.powerUse || 0) || 0;
}

/** 取 game.builder.buildings 数组（防御）。 */
function v20_buildings(game) {
  const bd = game && game.builder;
  if (!bd || !Array.isArray(bd.buildings)) return [];
  return bd.buildings;
}

/** 世界坐标变换：复制 game.render 的镜头逻辑。
 *  用法：const t = v20_worldTransform(ctx, game); ...绘制...; t.done();
 *  返回 { tile, done }，tile 为当前有效格像素。 */
function v20_worldTransform(ctx, game) {
  const canvas = game && game.canvas;
  const cam = game && game.camera;
  let tile = (game && game.tile) || 13;
  ctx.save();
  v20_try('v20_worldTransform', () => {
    if (cam && cam.zoom > 1 && canvas && typeof cam.tilePx === 'function') {
      tile = cam.tilePx(canvas.width);
      const viewW = typeof cam.viewTiles === 'function' ? cam.viewTiles() : 50;
      const left = cam.cx - viewW / 2;
      const top = cam.cy - viewW / 2;
      ctx.translate(-left * tile, -top * tile);
    }
  }, null);
  return {
    tile,
    done() {
      try { ctx.restore(); } catch (e) {}
    },
  };
}

/** 主循环挂接（幂等）：包装 game.render / game.tick，模块注册回调。
 *  game._v20RenderFns: [(game, now) => void] —— render 完成后调用（ctx 已 restore，
 *    需要世界坐标绘制的回调自己用 v20_worldTransform）。
 *  game._v20TickFns: [(game, now, dt) => void] —— tick 完成后调用。 */
function v20_ensureLoopHooks(game) {
  if (!game || game._v20LoopHooked) return;
  game._v20LoopHooked = true;
  game._v20RenderFns = [];
  game._v20TickFns = [];
  // —— 包装 render ——
  const origRender = game.render.bind(game);
  game.render = function (now) {
    origRender(now);
    const fns = game._v20RenderFns || [];
    for (let i = 0; i < fns.length; i++) {
      try { fns[i](game, now); } catch (e) {}
    }
  };
  // —— 包装 tick ——
  if (typeof game.tick === 'function') {
    const origTick = game.tick.bind(game);
    game.tick = function (now, dt) {
      origTick(now, dt);
      const fns = game._v20TickFns || [];
      for (let i = 0; i < fns.length; i++) {
        try { fns[i](game, now, dt); } catch (e) {}
      }
    };
  }
}

/** 注册 render 回调（自动做循环挂接）。 */
function v20_onRender(game, fn) {
  v20_ensureLoopHooks(game);
  if (game && Array.isArray(game._v20RenderFns)) game._v20RenderFns.push(fn);
}

/** 注册 tick 回调（自动做循环挂接）。 */
function v20_onTick(game, fn) {
  v20_ensureLoopHooks(game);
  if (game && Array.isArray(game._v20TickFns)) game._v20TickFns.push(fn);
}

// ============================ 第一部分：地图覆盖层 ============================
/* ----------------------------------------------------------------------------
 * OverlayManager — 管理 power / water / traffic / none 四种覆盖层模式。
 *
 * 渲染策略（render(ctx, map, tile, game)）：
 *   1. 若对应系统存在且提供 renderOverlay(ctx, map, tile, game) → 直接委托调用；
 *   2. 否则用本文件内置的“基础分析”渲染（_renderPowerFallback 等），数据取自
 *      game.builder / game.logistics 等已存在的老系统，保证模式按钮永远可用。
 * 这样即使电网/水管/交通三个新系统还没接入，玩家也能看到有意义的覆盖层。
 * ----------------------------------------------------------------------------
 */

/** 覆盖层模式元数据：id → {icon, name, sys, key}，sys 为 game 上的子系统名。 */
const OVERLAY_MODES = {
  none:    { icon: '🗺️', name: '无覆盖层', sys: null,        key: '0' },
  power:   { icon: '⚡', name: '电力',     sys: 'powergrid', key: '1' },
  water:   { icon: '💧', name: '供水',     sys: 'waternet',  key: '2' },
  traffic: { icon: '🚗', name: '交通',     sys: 'transit',   key: '3' },
};

/** 模式切换顺序（按钮/快捷键循环用）。 */
const OVERLAY_MODE_ORDER = ['power', 'water', 'traffic'];

/** 电力覆盖层配色。 */
const OVERLAY_POWER_COLORS = {
  producer: '#facc15',   // 发电建筑：金黄
  consumer: '#38bdf8',   // 用电建筑：天蓝
  unpowered: '#ef4444',  // 缺电：红（闪烁）
  link: 'rgba(250,204,21,0.55)', // 供电连线
  coverage: 'rgba(250,204,21,0.10)', // 发电覆盖范围
};

/** 供水覆盖层配色。 */
const OVERLAY_WATER_COLORS = {
  source: '#38bdf8',     // 水源建筑：天蓝
  consumer: '#4ade80',   // 用水建筑：绿
  shortage: '#ef4444',   // 缺水：红（闪烁）
  link: 'rgba(56,189,248,0.55)',
  coverage: 'rgba(56,189,248,0.12)',
};

/** 交通覆盖层配色。 */
const OVERLAY_TRAFFIC_COLORS = {
  road: 'rgba(224,123,57,0.55)', // 道路底色
  roadEdge: '#e07b39',           // 道路描边/方向箭头
  hub: '#facc15',                // 枢纽（运输站/物流中心）
  truck: '#4ade80',              // 运输车
  link: 'rgba(250,204,21,0.5)',
};

/** 各模式轮换小贴士（图例底部展示，15 秒换一条，均为实战建议）。 */
const OVERLAY_TIPS = {
  power: [
    '💡 保持 10%–20% 电力盈余最经济，人口暴涨前再补发电。',
    '💡 升级发电建筑不占新地块，地皮紧张时优先升级。',
    '💡 先给采矿机供电：铁是滚雪球的起点。',
    '💡 核电站记得配铀矿供应链，否则就是高级摆设。',
    '💡 每次扩建后按 1 看一眼覆盖层，红闪=待办。',
    '💡 受损（🔧）的发电建筑不发电，先修再补。',
  ],
  water: [
    '💡 抽水机建在极地（冰原）附近产量翻倍。',
    '💡 水库存 100 是安全线，灾害减产时不慌。',
    '💡 温室 1 座约供 10 人口，按“人口÷10”配。',
    '💡 双水源分开放：陨石砸坏一座还有一座顶。',
    '💡 居住舱放在蓝圈边缘容易“覆盖外”，多铺一格水管。',
    '💡 缺水比缺电更致命：人口直接停止增长。',
  ],
  traffic: [
    '💡 先画路再放建筑，顺序反了会返工。',
    '💡 物流中心放地图中心，车队空跑最少。',
    '💡 枢纽干线是主动脉，优先保证干线连通。',
    '💡 车多了一定要升级运输站，否则站口排队。',
    '💡 第一辆车派去拉铁矿，铁是万物之源。',
    '💡 红框=断开路段，铺两格路连上就行。',
  ],
};

/** 覆盖层设置的 localStorage key。 */
const OVERLAY_SETTINGS_KEY = 'starport-v20-overlay';

class OverlayManager {
  constructor() {
    this._mode = 'none';
    this._extras = [];          // 额外世界坐标绘制回调 [(ctx,map,tile,game,now)=>void]
    this._btnEls = {};          // 模式按钮 DOM
    this._legendEl = null;
    this._statsEl = null;       // 角落统计 chip
    this._keysBound = false;
    this._game = null;
    this._lastStatsUpdate = 0;
    this._lastLegendRefresh = 0;
    this._lastAlertCheck = 0;
    this._legendHover = false;
    // 图例显示设置（持久化）
    this._showProblems = true;
    this._showSummary = true;
    this._problemsOnly = false;
    this._loadOverlaySettings();
  }

  // ---------- 模式管理 ----------

  /** 设置模式：'power'|'water'|'traffic'|'none'，非法值 → 'none'。 */
  setMode(mode) {
    const m = OVERLAY_MODES[mode] ? mode : 'none';
    if (m === this._mode) {
      // 点已激活的模式 = 关闭（toggle 行为在按钮层处理，这里只做设置）
    }
    this._mode = m;
    this._refreshButtons();
    this._refreshLegend();
    return this._mode;
  }

  /** 当前模式。 */
  getMode() {
    return this._mode;
  }

  /** 切换：若已是该模式则关闭，否则设为该模式。 */
  toggle(mode) {
    if (this._mode === mode) this.setMode('none');
    else this.setMode(mode);
  }

  /** 注册额外绘制回调（教程高亮等模块用）。 */
  addPostRenderer(fn) {
    if (typeof fn === 'function') this._extras.push(fn);
  }

  /** 读覆盖层设置。 */
  _loadOverlaySettings() {
    try {
      const raw = localStorage.getItem(OVERLAY_SETTINGS_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (typeof s.showProblems === 'boolean') this._showProblems = s.showProblems;
        if (typeof s.showSummary === 'boolean') this._showSummary = s.showSummary;
        if (typeof s.problemsOnly === 'boolean') this._problemsOnly = s.problemsOnly;
      }
    } catch (e) {}
  }

  /** 存覆盖层设置。 */
  _saveOverlaySettings() {
    try {
      localStorage.setItem(OVERLAY_SETTINGS_KEY, JSON.stringify({
        showProblems: this._showProblems,
        showSummary: this._showSummary,
        problemsOnly: this._problemsOnly,
      }));
    } catch (e) {}
  }

  /** 智能提醒：非当前模式有待处理问题时，按钮红色脉冲吸引注意。 */
  _updateButtonAlerts(game) {
    if (!game || !game.map) return;
    const cur = this._mode;
    const checks = {
      power: () => this._analyzePower(game).unpowered.length > 0,
      water: () => {
        const wa = this._analyzeWater(game);
        return wa.shortage || wa.uncovered.length > 0;
      },
      traffic: () => this._analyzeTraffic(game, game.map).disconnected.length > 0,
    };
    for (const mode of OVERLAY_MODE_ORDER) {
      const b = this._btnEls[mode];
      if (!b) continue;
      let alert = false;
      if (mode !== cur && checks[mode]) {
        alert = v20_try('alert_' + mode, () => !!checks[mode](), false);
      }
      b.classList.toggle('alert', alert);
      if (alert) b.title = `${OVERLAY_MODES[mode].name}有问题待处理，点我查看`;
      else b.title = `${OVERLAY_MODES[mode].name}覆盖层（快捷键 ${OVERLAY_MODES[mode].key}）`;
    }
  }

  /** 取当前模式的分析数据（供成就/统计等外部模块用），无模式时返回 {mode:'none'}。 */
  getModeStats(game) {
    const g = game || this._game;
    if (!g) return null;
    const mode = this._mode;
    if (mode === 'power') {
      const pa = v20_try('stat_power', () => this._analyzePower(g), null);
      if (!pa) return { mode };
      return {
        mode, producers: pa.producers.length, consumers: pa.consumers.length,
        unpowered: pa.unpowered.length, surplus: pa.totalProd - pa.totalUse,
      };
    }
    if (mode === 'water') {
      const wa = v20_try('stat_water', () => this._analyzeWater(g), null);
      if (!wa) return { mode };
      return {
        mode, sources: wa.sources.length, users: wa.users.length,
        uncovered: wa.uncovered.length, stock: wa.waterStock, shortage: wa.shortage,
      };
    }
    if (mode === 'traffic') {
      const ta = v20_try('stat_traffic', () => this._analyzeTraffic(g, g.map), null);
      if (!ta) return { mode };
      return {
        mode, roads: ta.roadCount, hubs: ta.hubs.length,
        disconnected: ta.disconnected.length, trucks: ta.truckCount,
      };
    }
    return { mode: 'none' };
  }

  /** 当前模式的人类可读描述（toast 用）。 */
  describeMode(mode) {
    const m = OVERLAY_MODES[mode || this._mode];
    if (!m || mode === 'none') return '无覆盖层';
    return `${m.icon} ${m.name}覆盖层`;
  }

  /** 轮换小贴士（15 秒一条）。 */
  _currentTip(mode) {
    const tips = OVERLAY_TIPS[mode];
    if (!tips || !tips.length) return '';
    return tips[Math.floor(Date.now() / 15000) % tips.length];
  }

  // ---------- 主循环挂接 ----------

  /** 挂接到 game：render 后绘制覆盖层，tick 里节流刷新统计 chip。 */
  attach(game) {
    if (!game || this._game) return;
    this._game = game;
    const self = this;
    // render 之后：复制镜头变换 → 画覆盖层 → 画 extras → restore
    v20_onRender(game, (g, now) => {
      if (self._mode === 'none' && self._extras.length === 0) return;
      const ctx = g.ctx;
      if (!ctx) return;
      const t = v20_worldTransform(ctx, g);
      try {
        if (self._mode !== 'none') {
          self.render(ctx, g.map, t.tile, g, now);
        }
        for (let i = 0; i < self._extras.length; i++) {
          v20_try('overlay_extra_' + i, () => {
            self._extras[i](ctx, g.map, t.tile, g, now);
          }, null);
        }
      } finally {
        t.done();
      }
    });
    // tick：每 500ms 刷新一次统计 chip；每 8s 刷新图例动态内容
    v20_onTick(game, (g, now) => {
      if (now - self._lastStatsUpdate > 500) {
        self._lastStatsUpdate = now;
        v20_try('overlay_stats', () => self._updateStatsChip(g), null);
      }
      if (now - self._lastLegendRefresh > 8000 && self._mode !== 'none' && !self._legendHover) {
        self._lastLegendRefresh = now;
        v20_try('overlay_legend', () => self._refreshLegend(), null);
      }
      // 智能提醒：非当前模式存在问题时，对应按钮红色脉冲
      if (now - self._lastAlertCheck > 5000) {
        self._lastAlertCheck = now;
        v20_try('overlay_alert', () => self._updateButtonAlerts(g), null);
      }
    });
  }

  // ---------- 覆盖层分发 ----------

  /** render(ctx, map, tile, game, now)：按模式委托给对应系统，缺失则用内置分析。 */
  render(ctx, map, tile, game, now) {
    if (!ctx || !map || !game) return;
    const mode = this._mode;
    if (mode === 'none') return;
    const meta = OVERLAY_MODES[mode];
    if (!meta) return;
    const ts = now == null ? Date.now() : now;
    // 1) 优先委托给子系统
    const sys = meta.sys ? v20_getSys(game, meta.sys) : null;
    if (sys && typeof sys.renderOverlay === 'function') {
      v20_try('overlay_sys_' + mode, () => {
        sys.renderOverlay(ctx, map, tile, game);
      }, null);
      return;
    }
    // 2) 降级：内置基础分析渲染
    if (mode === 'power') this._renderPowerFallback(ctx, map, tile, game, ts);
    else if (mode === 'water') this._renderWaterFallback(ctx, map, tile, game, ts);
    else if (mode === 'traffic') this._renderTrafficFallback(ctx, map, tile, game, ts);
  }

  // ================= 电力覆盖层：内置基础分析 =================
  /* 数据来源（老系统，无需 powergrid）：
   *   - game.builder.buildings：建筑列表 {id,x,y,level,damaged}
   *   - BUILDINGS[id].levels[level].power / .powerUse
   *   - game.builder.totalPower() / totalPowerUse()：全局供需
   * 绘制内容：
   *   1. 发电建筑：金色覆盖圈 + 本体高亮 + 发电量标签
   *   2. 用电建筑：通电=天蓝底，缺电=红色脉冲
   *   3. 供电连线：每个发电建筑 → 最近 3 个用电建筑（虚线流动画）
   *   4. 受损建筑：🔧 标记
   */

  _renderPowerFallback(ctx, map, tile, game, now) {
    const buildings = v20_buildings(game);
    if (!buildings.length) {
      this._drawOverlayEmpty(ctx, map, tile, '⚡', '暂无建筑，先建造太阳能板');
      return;
    }
    const C = OVERLAY_POWER_COLORS;
    // —— 数据分析（与图例/问题清单共用） ——
    const pa = this._analyzePower(game);
    const producers = pa.producers;   // [{b, prod}]
    const consumers = pa.consumers;   // [{b, use}]
    const totalProd = pa.totalProd, totalUse = pa.totalUse, allPowered = pa.allPowered;

    const pulse = 0.5 + 0.5 * Math.sin(now / 280); // 缺电闪烁 0~1
    const flow = (now / 40) % 24;                  // 连线流动偏移
    const PO = this._problemsOnly;                 // 仅看问题模式：只画问题元素

    // —— 1. 发电覆盖圈（先画底层，仅看问题时跳过） ——
    if (!PO) {
      for (const p of producers) {
        const r = tile * (2.2 + (p.b.level || 1) * 0.6);
        const cx = (p.b.x + 0.5) * tile, cy = (p.b.y + 0.5) * tile;
        const g = ctx.createRadialGradient(cx, cy, tile * 0.4, cx, cy, r);
        g.addColorStop(0, v20_hexA(C.producer, 0.22));
        g.addColorStop(1, v20_hexA(C.producer, 0.0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // —— 2. 供电连线：发电 → 最近用电（仅看问题时跳过） ——
    if (!PO) {
      ctx.save();
      ctx.strokeStyle = C.link;
      ctx.lineWidth = Math.max(1.5, tile * 0.06);
      ctx.setLineDash([tile * 0.28, tile * 0.22]);
      ctx.lineDashOffset = -flow;
      const maxLinks = 28; // 上限，避免满屏连线
      let linkCount = 0;
      for (const p of producers) {
        if (linkCount >= maxLinks) break;
        // 找最近的 3 个用电建筑
        const near = this._nearestBuildings(p.b, consumers, 3, 14);
        for (const c of near) {
          if (linkCount >= maxLinks) break;
          ctx.beginPath();
          ctx.moveTo((p.b.x + 0.5) * tile, (p.b.y + 0.5) * tile);
          // 轻微弧线：中点上抬
          const mx = (p.b.x + c.b.x + 1) * tile / 2;
          const my = (p.b.y + c.b.y + 1) * tile / 2 - tile * 0.6;
          ctx.quadraticCurveTo(mx, my, (c.b.x + 0.5) * tile, (c.b.y + 0.5) * tile);
          ctx.stroke();
          linkCount++;
        }
      }
      ctx.restore();
    }

    // —— 3. 建筑本体染色（仅看问题时只染红缺电） ——
    if (!PO) {
      for (const p of producers) {
        this._tintTile(ctx, p.b.x, p.b.y, tile, v20_hexA(C.producer, 0.35), C.producer);
      }
    }
    for (const c of consumers) {
      if (allPowered) {
        if (!PO) this._tintTile(ctx, c.b.x, c.b.y, tile, v20_hexA(C.consumer, 0.30), C.consumer);
      } else {
        // 缺电：红色脉冲
        this._tintTile(ctx, c.b.x, c.b.y, tile,
          v20_hexA(C.unpowered, 0.25 + pulse * 0.35), C.unpowered, 2 + pulse * 2);
        // 缺电感叹号
        ctx.font = `${Math.max(10, tile * 0.42)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('⚠️', (c.b.x + 0.5) * tile, (c.b.y - 0.05) * tile);
        ctx.textAlign = 'left';
      }
    }

    // —— 4. 发电量 + 负载标签 ——
    const loads = this._assignProducerLoad(producers, consumers);
    ctx.font = `bold ${Math.max(10, tile * 0.34)}px sans-serif`;
    ctx.textAlign = 'center';
    for (const L of loads) {
      if (PO && L.loadPct < 80) continue; // 仅看问题：只标高负载
      const p = L.p;
      const pct = Math.round(L.loadPct);
      const label = `+${p.prod}⚡ 负载${pct}%`;
      // 负载色：>100% 红，80–100% 琥珀，<80% 浅黄
      const color = L.loadPct > 100 ? '#f87171' : L.loadPct >= 80 ? '#fbbf24' : '#fde68a';
      const lx = (p.b.x + 0.5) * tile;
      const ly = (p.b.y + 1.02) * tile;
      // 描边保证可读
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,0.7)';
      ctx.strokeText(label, lx, ly);
      ctx.fillStyle = color;
      ctx.fillText(label, lx, ly);
    }
    ctx.textAlign = 'left';

    // —— 5. 受损标记 ——
    this._drawDamagedMarks(ctx, buildings, tile);

    // —— 6. 顶部汇总条（画在世界坐标左上角） ——
    this._drawOverlaySummary(ctx, map, tile,
      `⚡ ${v20_fmtNum(totalProd)} / ${v20_fmtNum(totalUse)}` +
      (allPowered ? ' ✅ 供电充足' : ' 🔴 电力缺口 ' + v20_fmtNum(totalUse - totalProd)),
      allPowered ? '#4ade80' : '#ef4444');
  }

  /** 把每个用电建筑分配给最近的发电建筑，返回 [{p, loadUse, loadPct}]。 */
  _assignProducerLoad(producers, consumers) {
    const loads = producers.map(p => ({ p, loadUse: 0 }));
    for (const c of consumers) {
      let best = null, bestD = Infinity;
      for (const L of loads) {
        const d = Math.hypot(c.b.x - L.p.b.x, c.b.y - L.p.b.y);
        if (d < bestD) { bestD = d; best = L; }
      }
      if (best) best.loadUse += c.use;
    }
    for (const L of loads) {
      L.loadPct = L.p.prod > 0 ? (L.loadUse / L.p.prod) * 100 : 0;
    }
    return loads;
  }

  /** 在世界坐标 (x,y) 格画半透明底 + 描边。 */
  _tintTile(ctx, x, y, tile, fill, stroke, lineW) {
    ctx.fillStyle = fill;
    ctx.fillRect(x * tile, y * tile, tile, tile);
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineW || 1.5;
    ctx.strokeRect(x * tile + 1, y * tile + 1, tile - 2, tile - 2);
  }

  /** 找参照建筑 ref 周围 radius 格内最近的 n 个候选（候选形如 {b}）。 */
  _nearestBuildings(ref, candidates, n, radius) {
    const out = [];
    for (const c of candidates) {
      if (!c || !c.b || c.b === ref) continue;
      const d = Math.hypot(c.b.x - ref.x, c.b.y - ref.y);
      if (d <= radius) out.push({ c, d });
    }
    out.sort((a, b) => a.d - b.d);
    return out.slice(0, n).map(o => o.c);
  }

  /** 受损建筑画 🔧 标记。 */
  _drawDamagedMarks(ctx, buildings, tile) {
    ctx.font = `${Math.max(10, tile * 0.4)}px sans-serif`;
    ctx.textAlign = 'center';
    for (const b of buildings) {
      if (b && b.damaged) {
        ctx.fillText('🔧', (b.x + 0.5) * tile, (b.y + 0.35) * tile);
      }
    }
    ctx.textAlign = 'left';
  }

  /** 世界坐标左上角汇总条（半透明黑底，可在图例设置里关闭）。 */
  _drawOverlaySummary(ctx, map, tile, text, color) {
    if (!this._showSummary) return;    const fs = Math.max(11, tile * 0.42);
    ctx.font = `bold ${fs}px sans-serif`;
    const w = ctx.measureText(text).width + 18;
    const h = fs + 12;
    // 固定在世界 (0.5, 0.5) 格附近——简单起见画在画布左上会受镜头影响，
    // 这里用世界坐标 (1,1) 格，保证缩放时跟随地图。
    const x = 1 * tile, y = 0.6 * tile;
    ctx.fillStyle = 'rgba(0,0,0,0.62)';
    this._roundRect(ctx, x, y, w, h, 6);
    ctx.fill();
    ctx.fillStyle = color || '#f5e8dc';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x + 9, y + h / 2 + 1);
    ctx.textBaseline = 'alphabetic';
  }

  /** 空数据提示（世界坐标中央偏上）。 */
  _drawOverlayEmpty(ctx, map, tile, icon, text) {
    const cx = (map.size / 2) * tile, cy = (map.size / 2 - 4) * tile;
    ctx.font = `${Math.max(16, tile * 0.9)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(icon, cx, cy);
    ctx.font = `${Math.max(11, tile * 0.42)}px sans-serif`;
    ctx.fillStyle = '#f5e8dc';
    ctx.fillText(text, cx, cy + tile * 0.9);
    ctx.textAlign = 'left';
  }

  /** 圆角矩形路径。 */
  _roundRect(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // ================= 供水覆盖层：内置基础分析 =================
  /* 数据来源：
   *   - 水源建筑 id：'pump'（抽水机，产冰→水）、'waterplant'（水厂）
   *   - 用水建筑 id：'greenhouse'（温室）、'habitat'（居住舱，人口需水）
   *   - game.player.inv.water：当前水库存，< 30 判为缺水
   * 绘制：水源蓝色覆盖圈（旋转虚线=水流感）→ 用水建筑连线 → 缺水红闪。
   */

  _renderWaterFallback(ctx, map, tile, game, now) {
    const C = OVERLAY_WATER_COLORS;
    // —— 数据分析（与图例/问题清单共用） ——
    const wa = this._analyzeWater(game);
    const sources = wa.sources, users = wa.users;
    const waterStock = wa.waterStock, shortage = wa.shortage;
    const buildings = wa.buildings;

    if (!sources.length && !users.length) {
      this._drawOverlayEmpty(ctx, map, tile, '💧', '暂无供水建筑，先建造抽水机');
      return;
    }
    const pulse = 0.5 + 0.5 * Math.sin(now / 280);
    const rot = (now / 900) % (Math.PI * 2); // 覆盖圈虚线旋转
    const PO = this._problemsOnly;           // 仅看问题模式

    // —— 1. 水源覆盖圈：双层（实底 + 旋转虚线环），仅看问题时跳过 ——
    if (!PO) {
      for (const s of sources) {
        const cx = (s.x + 0.5) * tile, cy = (s.y + 0.5) * tile;
        const r = tile * (2.4 + (s.level || 1) * 0.5);
        const g = ctx.createRadialGradient(cx, cy, tile * 0.4, cx, cy, r);
        g.addColorStop(0, v20_hexA(C.source, 0.25));
        g.addColorStop(1, v20_hexA(C.source, 0.0));
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
        // 旋转虚线环：水流感
        ctx.save();
        ctx.strokeStyle = v20_hexA(C.source, 0.7);
        ctx.lineWidth = Math.max(1.5, tile * 0.05);
        ctx.setLineDash([tile * 0.22, tile * 0.18]);
        ctx.lineDashOffset = -rot * tile * 0.5;
        ctx.beginPath(); ctx.arc(cx, cy, r * 0.8, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();
      }
    }

    // —— 2. 水源 → 用水建筑连线（仅看问题时跳过） ——
    if (!PO) {
      ctx.save();
      ctx.strokeStyle = C.link;
      ctx.lineWidth = Math.max(1.5, tile * 0.06);
      ctx.setLineDash([tile * 0.16, tile * 0.16]);
      ctx.lineDashOffset = -(now / 60) % (tile * 0.32);
      let links = 0;
      for (const s of sources) {
        if (links >= 24) break;
        const near = this._nearestBuildings(s,
          users.map(b => ({ b })), 3, 16);
        for (const u of near) {
          if (links >= 24) break;
          ctx.beginPath();
          ctx.moveTo((s.x + 0.5) * tile, (s.y + 0.5) * tile);
          ctx.lineTo((u.b.x + 0.5) * tile, (u.b.y + 0.5) * tile);
          ctx.stroke();
          links++;
        }
      }
      ctx.restore();
    }

    // —— 3. 本体染色（仅看问题时只染红缺水/覆盖外） ——
    if (!PO) {
      for (const s of sources) {
        this._tintTile(ctx, s.x, s.y, tile, v20_hexA(C.source, 0.35), C.source);
        // 水滴标记
        ctx.font = `${Math.max(10, tile * 0.4)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('💧', (s.x + 0.5) * tile, (s.y - 0.02) * tile);
        ctx.textAlign = 'left';
      }
    }
    for (const u of users) {
      if (shortage) {
        this._tintTile(ctx, u.x, u.y, tile,
          v20_hexA(C.shortage, 0.25 + pulse * 0.35), C.shortage, 2 + pulse * 2);
        ctx.font = `${Math.max(10, tile * 0.4)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('⚠️', (u.x + 0.5) * tile, (u.y - 0.02) * tile);
        ctx.textAlign = 'left';
      } else if (!PO) {
        this._tintTile(ctx, u.x, u.y, tile, v20_hexA(C.consumer, 0.28), C.consumer);
      }
    }

    // —— 3b. 覆盖圈外的用水建筑：琥珀色虚线框 + 标签 ——
    if (wa.uncovered.length) {
      ctx.save();
      ctx.strokeStyle = `rgba(251,191,36,${0.6 + pulse * 0.4})`;
      ctx.lineWidth = Math.max(2, tile * 0.07);
      ctx.setLineDash([tile * 0.18, tile * 0.14]);
      ctx.lineDashOffset = -(now / 90) % (tile * 0.32);
      for (const u of wa.uncovered) {
        ctx.strokeRect(u.x * tile + 2, u.y * tile + 2, tile - 4, tile - 4);
      }
      ctx.restore();
      ctx.font = `bold ${Math.max(10, tile * 0.3)}px sans-serif`;
      ctx.textAlign = 'center';
      for (const u of wa.uncovered.slice(0, 12)) {
        const label = '覆盖外';
        const lx = (u.x + 0.5) * tile, ly = (u.y + 1.02) * tile;
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(0,0,0,0.7)';
        ctx.strokeText(label, lx, ly);
        ctx.fillStyle = '#fbbf24';
        ctx.fillText(label, lx, ly);
      }
      ctx.textAlign = 'left';
    }

    // —— 4. 产量 + 供户数标签（仅看问题时跳过） ——
    if (!PO) {
      ctx.font = `bold ${Math.max(10, tile * 0.32)}px sans-serif`;
      ctx.textAlign = 'center';
    for (const s of sources) {
      const lv = v20_levelDef(s);
      const prod = lv && lv.produce ? Object.values(lv.produce)[0] : 0;
      // 供户数：覆盖圈内的用水建筑数
      const r = wa.coverageTiles(s);
      let served = 0;
      for (const u of users) {
        if (Math.hypot(u.x - s.x, u.y - s.y) <= r + 0.71) served++;
      }
      const label = `+${prod || '?'}💧 供${served}户`;
      const lx = (s.x + 0.5) * tile, ly = (s.y + 1.02) * tile;
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,0.7)';
      ctx.strokeText(label, lx, ly);
      ctx.fillStyle = '#bae6fd';
      ctx.fillText(label, lx, ly);
    }
    ctx.textAlign = 'left';
    } // end if (!PO) 标签

    this._drawDamagedMarks(ctx, buildings, tile);

    // —— 5. 汇总条 ——
    this._drawOverlaySummary(ctx, map, tile,
      `💧 水源 ${sources.length} · 用水 ${users.length} · 库存 ${v20_fmtNum(waterStock)}` +
      (shortage ? ' 🔴 缺水！' : ' ✅ 供水正常'),
      shortage ? '#ef4444' : '#4ade80');
  }

  // ================= 交通覆盖层：内置基础分析 =================
  /* 数据来源：
   *   - game.builder.isRoad(x, y)：道路格判定（逐格扫描可视范围）
   *   - 枢纽建筑 id：'depot'（运输站）、'logistics'（物流中心）、
   *     'warehouse'（仓库）、'trade'（贸易站）
   *   - game.logistics.trucks：运输车 {px, py}（浮点格坐标）
   * 绘制：道路橙底 + 流动方向虚线 → 枢纽金圈 → 运输车绿点 → 枢纽连线。
   */

  _renderTrafficFallback(ctx, map, tile, game, now) {
    const C = OVERLAY_TRAFFIC_COLORS;
    // —— 数据分析（BFS 连通域，与图例/问题清单共用） ——
    const ta = this._analyzeTraffic(game, map);
    const buildings = ta.buildings, hubs = ta.hubs;
    const roadCells = ta.roadCells, roadCount = ta.roadCount;

    if (!roadCount && !hubs.length) {
      this._drawOverlayEmpty(ctx, map, tile, '🚗', '暂无道路，先建造道路连接建筑');
      return;
    }
    const PO = this._problemsOnly; // 仅看问题模式：只画断开路段

    // —— 2. 道路底色（仅看问题时跳过） ——
    if (!PO) {
      ctx.fillStyle = C.road;
      for (const c of roadCells) {
        ctx.fillRect(c.x * tile, c.y * tile, tile, tile);
      }
      // 道路方向流动虚线（动画）
      ctx.save();
      ctx.strokeStyle = v20_hexA(C.roadEdge, 0.85);
      ctx.lineWidth = Math.max(1.5, tile * 0.07);
      ctx.setLineDash([tile * 0.3, tile * 0.25]);
      ctx.lineDashOffset = -(now / 50) % (tile * 0.55);
      ctx.beginPath();
      for (const c of roadCells) {
        const cx = (c.x + 0.5) * tile, cy = (c.y + 0.5) * tile;
        const len = tile * 0.28;
        ctx.moveTo(cx - len, cy);
        ctx.lineTo(cx + len, cy);
      }
      ctx.stroke();
      ctx.restore();
    }

    // —— 2b. 断开路段：红色脉冲描边（BFS 找出的未连枢纽道路） ——
    if (ta.disconnected.length) {
      const dpulse = 0.5 + 0.5 * Math.sin(now / 260);
      ctx.save();
      ctx.strokeStyle = `rgba(239,68,68,${0.55 + dpulse * 0.45})`;
      ctx.lineWidth = Math.max(2, tile * 0.08);
      ctx.setLineDash([tile * 0.2, tile * 0.14]);
      ctx.lineDashOffset = -(now / 80) % (tile * 0.34);
      for (const c of ta.disconnected.slice(0, 300)) {
        ctx.strokeRect(c.x * tile + 1.5, c.y * tile + 1.5, tile - 3, tile - 3);
      }
      ctx.restore();
    }

    // —— 3. 枢纽：金色脉冲圈 + 名称 ——
    const pulse = 0.5 + 0.5 * Math.sin(now / 350);
    ctx.textAlign = 'center';
    for (const h of hubs) {
      const cx = (h.x + 0.5) * tile, cy = (h.y + 0.5) * tile;
      const r = tile * (0.7 + pulse * 0.25);
      ctx.strokeStyle = v20_hexA(C.hub, 0.55 + pulse * 0.4);
      ctx.lineWidth = 2 + pulse * 1.5;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      this._tintTile(ctx, h.x, h.y, tile, v20_hexA(C.hub, 0.28), C.hub);
      // 枢纽名
      const def = v20_buildingDef(h.id);
      if (def && def.name) {
        ctx.font = `bold ${Math.max(10, tile * 0.32)}px sans-serif`;
        const label = def.icon + def.name;
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(0,0,0,0.7)';
        ctx.strokeText(label, cx, (h.y + 1.05) * tile);
        ctx.fillStyle = '#fde68a';
        ctx.fillText(label, cx, (h.y + 1.05) * tile);
      }
    }
    ctx.textAlign = 'left';

    // —— 4. 枢纽连线（运输网骨架，仅看问题时跳过） ——
    if (!PO && hubs.length >= 2) {
      ctx.save();
      ctx.strokeStyle = C.link;
      ctx.lineWidth = Math.max(1.5, tile * 0.05);
      ctx.setLineDash([tile * 0.24, tile * 0.2]);
      ctx.lineDashOffset = -(now / 70) % (tile * 0.44);
      // 每个枢纽连最近的另一个枢纽（避免全连接爆炸）
      for (let i = 0; i < hubs.length && i < 12; i++) {
        const near = this._nearestBuildings(hubs[i],
          hubs.filter(h => h !== hubs[i]).map(b => ({ b })), 1, 40);
        if (near.length) {
          ctx.beginPath();
          ctx.moveTo((hubs[i].x + 0.5) * tile, (hubs[i].y + 0.5) * tile);
          ctx.lineTo((near[0].b.x + 0.5) * tile, (near[0].b.y + 0.5) * tile);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    // —— 5. 运输车：绿点 + 白描边（仅看问题时跳过） ——
    if (!PO) v20_try('traffic_trucks', () => {
      const trucks = game.logistics && game.logistics.trucks;
      if (Array.isArray(trucks)) {
        for (const t of trucks) {
          if (t == null || t.px == null) continue;
          const cx = (t.px + 0.5) * tile, cy = (t.py + 0.5) * tile;
          const r = Math.max(3, tile * 0.22);
          ctx.fillStyle = C.truck;
          ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
    }, null);

    this._drawDamagedMarks(ctx, buildings, tile);

    // —— 6. 汇总条 ——
    const truckN = ta.truckCount;
    const discNote = ta.disconnected.length ? ` · 🔴断开 ${ta.disconnected.length}` : ' · ✅全连通';
    this._drawOverlaySummary(ctx, map, tile,
      `🚗 道路 ${v20_fmtNum(roadCount)} 格 · 枢纽 ${hubs.length} · 运输车 ${truckN}${discNote}`,
      ta.disconnected.length ? '#fbbf24' : '#facc15');
  }

  // ================= 覆盖层分析（渲染/图例/问题清单共用） =================
  /* 把各 fallback 渲染器里的数据准备逻辑抽成可复用的分析器：
   *   _analyzePower(game)   → 发电/用电/缺电/分类型统计
   *   _analyzeWater(game)   → 水源/用水/覆盖圈外/缺水
   *   _analyzeTraffic(game) → 枢纽/道路格/连通域/断开路段（BFS）
   * 图例的问题清单和统计 chip 都读这里，保证三处数字一致。 */

  /** 电力分析。coverageTiles(b) 返回该发电建筑的覆盖半径（格）。 */
  _analyzePower(game) {
    const buildings = v20_buildings(game);
    let totalProd = 0, totalUse = 0;
    v20_try('power_totals', () => {
      const bd = game.builder;
      if (bd && typeof bd.totalPower === 'function') totalProd = Number(bd.totalPower()) || 0;
      if (bd && typeof bd.totalPowerUse === 'function') totalUse = Number(bd.totalPowerUse()) || 0;
    }, null);
    const allPowered = totalProd >= totalUse;
    const producers = [];   // [{b, prod}]
    const consumers = [];   // [{b, use}]
    const byType = {};      // id → {count, prod, use}
    for (const b of buildings) {
      if (b == null || b.x == null) continue;
      const prod = v20_buildingPowerProd(b);
      const use = v20_buildingPowerUse(b);
      if (prod > 0) producers.push({ b, prod });
      if (use > 0) consumers.push({ b, use });
      const key = b.id || '?';
      if (!byType[key]) byType[key] = { count: 0, prod: 0, use: 0 };
      byType[key].count++;
      byType[key].prod += prod;
      byType[key].use += use;
    }
    // 缺电时全部用电建筑标红（老系统没有单体供电状态，全局缺口→逐个告警）
    const unpowered = allPowered ? [] : consumers.slice();
    return {
      buildings, producers, consumers, unpowered,
      totalProd, totalUse, allPowered, byType,
      coverageTiles: (b) => 2.2 + ((b && b.level) || 1) * 0.6,
    };
  }

  /** 供水分析。uncovered = 不在任何水源覆盖圈内的用水建筑。 */
  _analyzeWater(game) {
    const buildings = v20_buildings(game);
    const SOURCE_IDS = ['pump', 'waterplant'];
    const USER_IDS = ['greenhouse', 'habitat'];
    const sources = [];
    const users = [];
    for (const b of buildings) {
      if (b == null || b.x == null) continue;
      if (SOURCE_IDS.includes(b.id)) sources.push(b);
      else if (USER_IDS.includes(b.id)) users.push(b);
    }
    let waterStock = 0;
    v20_try('water_stock', () => {
      waterStock = Number(game.player && game.player.inv && game.player.inv.water) || 0;
    }, null);
    const shortage = waterStock < 30 && users.length > 0;
    // 覆盖判定：格心距离 ≤ 覆盖半径 + 半对角（0.71）
    const uncovered = [];
    for (const u of users) {
      let covered = false;
      for (const s of sources) {
        const r = 2.4 + ((s.level || 1) * 0.5);
        if (Math.hypot(u.x - s.x, u.y - s.y) <= r + 0.71) { covered = true; break; }
      }
      if (!covered) uncovered.push(u);
    }
    return {
      buildings, sources, users, uncovered, waterStock, shortage,
      coverageTiles: (s) => 2.4 + ((s && s.level) || 1) * 0.5,
    };
  }

  /** 交通分析：道路连通域 BFS，找出没连上枢纽的断开路段。 */
  _analyzeTraffic(game, map) {
    const buildings = v20_buildings(game);
    const HUB_IDS = ['depot', 'logistics', 'warehouse', 'trade'];
    const hubs = buildings.filter(b => b && HUB_IDS.includes(b.id));

    // —— 道路格收集（只扫可视范围） ——
    let x0 = 0, y0 = 0, x1 = map.size - 1, y1 = map.size - 1;
    v20_try('traffic_range', () => {
      const cam = game.camera;
      if (cam && typeof cam.visibleRange === 'function') {
        const r = cam.visibleRange();
        x0 = Math.max(0, r.x0 - 1); y0 = Math.max(0, r.y0 - 1);
        x1 = Math.min(map.size - 1, r.x1 + 1); y1 = Math.min(map.size - 1, r.y1 + 1);
      }
    }, null);
    const isRoadFn = v20_try('traffic_isroad', () => {
      const bd = game.builder;
      return (bd && typeof bd.isRoad === 'function') ? bd.isRoad.bind(bd) : null;
    }, null);
    const roadSet = new Set(); // "x,y"
    if (isRoadFn) {
      for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
          if (v20_try('isroad_cell', () => isRoadFn(x, y), false)) roadSet.add(x + ',' + y);
        }
      }
    } else {
      // 退化：按 'road' 建筑 id
      for (const b of buildings) {
        if (b && b.id === 'road') roadSet.add(b.x + ',' + b.y);
      }
    }
    const roadCells = [];
    for (const k of roadSet) {
      const [x, y] = k.split(',').map(Number);
      if ((x + y) % 2 === 0 && roadCells.length < 400) roadCells.push({ x, y });
    }

    // —— BFS 连通域（4 向） ——
    const seen = new Set();
    const components = [];
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const start of roadSet) {
      if (seen.has(start)) continue;
      const comp = [];
      const stack = [start];
      seen.add(start);
      while (stack.length) {
        const k = stack.pop();
        comp.push(k);
        const [x, y] = k.split(',').map(Number);
        for (const [dx, dy] of DIRS) {
          const nk = (x + dx) + ',' + (y + dy);
          if (roadSet.has(nk) && !seen.has(nk)) { seen.add(nk); stack.push(nk); }
        }
      }
      components.push(comp);
    }
    // —— 主干网 = 接触到枢纽（含枢纽周边 1 格）的连通域 ——
    const hubTouch = new Set();
    for (const h of hubs) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const k = (h.x + dx) + ',' + (h.y + dy);
          if (roadSet.has(k)) hubTouch.add(k);
        }
      }
    }
    const mainKeys = new Set();
    for (const comp of components) {
      if (comp.some(k => hubTouch.has(k))) {
        for (const k of comp) mainKeys.add(k);
      }
    }
    const disconnected = [];
    for (const k of roadSet) {
      if (!mainKeys.has(k)) {
        const [x, y] = k.split(',').map(Number);
        disconnected.push({ x, y });
      }
    }
    const truckCount = v20_try('truck_count', () =>
      (game.logistics && Array.isArray(game.logistics.trucks)) ? game.logistics.trucks.length : 0, 0);
    return {
      buildings, hubs, roadCells, roadSet,
      roadCount: roadSet.size,
      components, disconnected, truckCount,
    };
  }

  /** 建筑显示名（图例问题清单用）。 */
  _buildingName(b) {
    const def = b && v20_buildingDef(b.id);
    return (def && def.name) || (b && b.id) || '?';
  }

  // ================= 图例面板 =================
  /* renderLegend(game)：按当前模式返回图例 HTML 字符串。
   * 若对应子系统未接入，图例底部会标注“基础分析模式”，诚实告知数据来源。 */

  renderLegend(game) {
    const mode = this._mode;
    if (mode === 'none') return '';
    const g = game || this._game;
    const meta = OVERLAY_MODES[mode];
    const sys = meta.sys ? v20_getSys(g, meta.sys) : null;
    const hasSysOverlay = !!(sys && typeof sys.renderOverlay === 'function');
    const srcNote = hasSysOverlay
      ? `<div class="v20-legend-src">📡 ${meta.name}系统实时数据</div>`
      : `<div class="v20-legend-src warn">🧭 基础分析模式（${meta.name}系统未接入）</div>`;

    // —— 各模式实时计数 ——
    let counts = { a: 0, b: 0, c: 0 };
    if (g && g.map) {
      v20_try('legend_counts', () => {
        if (mode === 'power') {
          const pa = this._analyzePower(g);
          counts = { a: pa.producers.length, b: pa.consumers.length, c: pa.unpowered.length };
        } else if (mode === 'water') {
          const wa = this._analyzeWater(g);
          counts = { a: wa.sources.length, b: wa.users.length, c: wa.uncovered.length };
        } else if (mode === 'traffic') {
          const ta = this._analyzeTraffic(g, g.map);
          counts = { a: ta.roadCount, b: ta.hubs.length, c: ta.disconnected.length };
        }
      }, null);
    }

    let rows = '';
    if (mode === 'power') {
      rows = `
        <div class="v20-legend-row"><span class="v20-dot" style="background:${OVERLAY_POWER_COLORS.producer}"></span>发电建筑 ×${counts.a}（金黄圈=供电范围）</div>
        <div class="v20-legend-row"><span class="v20-dot" style="background:${OVERLAY_POWER_COLORS.consumer}"></span>用电建筑 ×${counts.b}（供电正常）</div>
        <div class="v20-legend-row"><span class="v20-dot" style="background:${OVERLAY_POWER_COLORS.unpowered}"></span>缺电 ×${counts.c}（红色闪烁）</div>
        <div class="v20-legend-row"><span class="v20-line" style="border-color:${OVERLAY_POWER_COLORS.producer}"></span>供电连线（流动=输电中）</div>
        <div class="v20-legend-row">🔧 受损建筑需维修</div>
        <div class="v20-legend-tip">目标：发电 ≥ 用电，消灭红色闪烁格</div>`;
    } else if (mode === 'water') {
      rows = `
        <div class="v20-legend-row"><span class="v20-dot" style="background:${OVERLAY_WATER_COLORS.source}"></span>水源 ×${counts.a}（蓝圈=供水范围）</div>
        <div class="v20-legend-row"><span class="v20-dot" style="background:${OVERLAY_WATER_COLORS.consumer}"></span>用水建筑 ×${counts.b}</div>
        <div class="v20-legend-row"><span class="v20-dot" style="background:${OVERLAY_WATER_COLORS.shortage}"></span>缺水（库存 &lt; 30 时红闪）</div>
        <div class="v20-legend-row"><span class="v20-dot" style="background:#fbbf24"></span>覆盖外 ×${counts.c}（琥珀虚线框）</div>
        <div class="v20-legend-row"><span class="v20-line" style="border-color:${OVERLAY_WATER_COLORS.source}"></span>供水连线</div>
        <div class="v20-legend-tip">目标：水库存保持 30 以上，建筑都在蓝圈内</div>`;
    } else if (mode === 'traffic') {
      rows = `
        <div class="v20-legend-row"><span class="v20-dot" style="background:${OVERLAY_TRAFFIC_COLORS.roadEdge}"></span>道路 ×${counts.a} 格（虚线=车流方向）</div>
        <div class="v20-legend-row"><span class="v20-dot" style="background:${OVERLAY_TRAFFIC_COLORS.hub}"></span>枢纽 ×${counts.b}</div>
        <div class="v20-legend-row"><span class="v20-dot" style="background:${OVERLAY_TRAFFIC_COLORS.truck}"></span>运输车（实时位置）</div>
        <div class="v20-legend-row"><span class="v20-dot" style="background:#ef4444"></span>断开路段 ×${counts.c}（红框）</div>
        <div class="v20-legend-row"><span class="v20-line" style="border-color:${OVERLAY_TRAFFIC_COLORS.hub}"></span>枢纽干线</div>
        <div class="v20-legend-tip">目标：道路连通所有枢纽，运输车不停跑</div>`;
    }

    // —— 问题清单：可点击定位（点按钮镜头移到问题格） ——
    const problems = this._renderLegendProblems(g, mode);

    // —— 智能建议 ——
    const advice = this._renderLegendAdvice(g, mode);

    // —— 子系统自带统计 ——
    const sysExtra = this._renderSysExtra(sys, mode);

    // —— 电力分类型统计表 ——
    const typeTable = mode === 'power' ? this._renderLegendPowerTable(g) : '';

    // —— 轮换小贴士 ——
    const tip = this._currentTip(mode);

    // —— 显示设置 ——
    const settings = `
      <div class="v20-legend-settings">
        <button type="button" class="v20-setbtn${this._showProblems ? ' on' : ''}" data-v20-setting="problems">⚠️ 问题清单</button>
        <button type="button" class="v20-setbtn${this._showSummary ? ' on' : ''}" data-v20-setting="summary">📊 汇总条</button>
        <button type="button" class="v20-setbtn${this._problemsOnly ? ' on' : ''}" data-v20-setting="problemsonly">🔍 仅看问题</button>
      </div>
      <button type="button" class="v20-sharebtn" data-v20-setting="share">📋 复制战报</button>`;

    return `
      <div class="v20-legend-title">${meta.icon} ${meta.name}覆盖层</div>
      ${rows}
      ${typeTable}
      ${problems}
      ${advice}
      ${sysExtra}
      ${settings}
      <div class="v20-legend-tip2">${tip}</div>
      ${srcNote}
      <div class="v20-legend-key">按 ${meta.key} 切换 · 按 0 关闭</div>`;
  }

  /** 电力分类型统计：图标 名称×数量 +发电/−用电。 */
  _renderLegendPowerTable(game) {
    const pa = v20_try('legend_pt', () => this._analyzePower(game), null);
    if (!pa) return '';
    const ids = Object.keys(pa.byType).filter(id => {
      const t = pa.byType[id];
      return t.prod > 0 || t.use > 0;
    });
    if (!ids.length) return '';
    // 按发电量降序，发电在前、用电在后
    ids.sort((a, b) => (pa.byType[b].prod - pa.byType[a].prod) || (pa.byType[b].use - pa.byType[a].use));
    let html = '<div class="v20-legend-table">';
    for (const id of ids.slice(0, 6)) {
      const t = pa.byType[id];
      const def = v20_buildingDef(id);
      const icon = (def && def.icon) || '🏢';
      const name = (def && def.name) || id;
      const parts = [];
      if (t.prod > 0) parts.push(`<span style="color:#fde68a">+${t.prod}⚡</span>`);
      if (t.use > 0) parts.push(`<span style="color:#7dd3fc">−${t.use}⚡</span>`);
      html += `<div class="v20-legend-trow"><span>${icon}${name}×${t.count}</span><span>${parts.join(' ')}</span></div>`;
    }
    return html + '</div>';
  }

  /* ================= 智能建议 =================
   * 根据分析数据给出可执行的下一步建议，显示在图例“💡 建议”区：
   *   电力：缺口 ÷ 主力发电建筑单体发电量 → “再建 N 座太阳能板”
   *   供水：覆盖外用户 cluster 中心 → “在 (x,y) 附近补水源/延长水管”
   *   交通：断开路段 → “铺路连接 (x,y) 到主干网”
   * 全是基于真实数据的算术，没有玄学。 */

  /** 电力建议。 */
  _advisePower(game) {
    return v20_try('advise_power', () => {
      const pa = this._analyzePower(game);
      const out = [];
      const deficit = pa.totalUse - pa.totalProd;
      if (deficit > 0) {
        // 主力发电建筑：取发电量最大的类型
        let best = null;
        for (const p of pa.producers) {
          if (!best || p.prod > best.prod) best = p;
        }
        const perUnit = best ? best.prod : 8; // 兜底按 2 级太阳能
        const need = Math.ceil(deficit / perUnit);
        const name = best ? this._buildingName(best.b) : '太阳能板';
        out.push(`电力缺口 ${deficit}，再建 ${need} 座${name}（或升级现有）即可补上`);
      } else if (pa.producers.length === 0) {
        out.push('还没有发电建筑，先建 1 座太阳能板起步');
      } else {
        out.push(`供电充足（盈余 ${pa.totalProd - pa.totalUse}），可放心扩张`);
      }
      const damaged = pa.buildings.filter(b => b && b.damaged &&
        (v20_buildingPowerProd(b) > 0 || v20_buildingPowerUse(b) > 0));
      if (damaged.length) out.push(`${damaged.length} 座电力建筑受损（🔧），维修后恢复供电`);
      return out;
    }, []);
  }

  /** 供水建议：覆盖外用户按位置聚类，取最大簇的中心点。 */
  _adviseWater(game) {
    return v20_try('advise_water', () => {
      const wa = this._analyzeWater(game);
      const out = [];
      if (wa.shortage) {
        out.push(`水库存仅 ${wa.waterStock}（<30），先升级水源或多建 1 座抽水机`);
      }
      if (wa.sources.length === 0) {
        out.push('还没有水源建筑，先建 1 座抽水机');
      } else if (wa.uncovered.length) {
        // 最大簇中心（简单贪心：以第一个未覆盖点为圆心找邻居）
        const pts = wa.uncovered.map(u => ({ x: u.x, y: u.y }));
        let bestC = pts[0], bestN = 0;
        for (const p of pts) {
          const n = pts.filter(q => Math.hypot(q.x - p.x, q.y - p.y) <= 6).length;
          if (n > bestN) { bestN = n; bestC = p; }
        }
        const cx = Math.round(pts.filter(q => Math.hypot(q.x - bestC.x, q.y - bestC.y) <= 6)
          .reduce((s, q) => s + q.x, 0) / bestN);
        const cy = Math.round(pts.filter(q => Math.hypot(q.x - bestC.x, q.y - bestC.y) <= 6)
          .reduce((s, q) => s + q.y, 0) / bestN);
        out.push(`${wa.uncovered.length} 座建筑在供水圈外，建议在 (${cx},${cy}) 附近补水源或延长水管`);
      } else {
        out.push('所有用水建筑都在供水圈内，继续保持');
      }
      return out;
    }, []);
  }

  /** 交通建议：断开路段连回主干网的最短接法（找最近的主干道路格）。 */
  _adviseTraffic(game) {
    return v20_try('advise_traffic', () => {
      const ta = this._analyzeTraffic(game, game.map);
      const out = [];
      if (!ta.hubs.length) {
        out.push('还没有枢纽，先建 1 座运输站，车队才有家');
      }
      if (!ta.roadCount) {
        out.push('还没有道路，用道路把建筑连起来，移动和运输都更快');
      }
      if (ta.disconnected.length) {
        // 主干道路格集合
        const main = new Set();
        for (const k of ta.roadSet) {
          if (!ta.disconnected.some(d => d.x + ',' + d.y === k)) main.add(k);
        }
        // 取第一个断开格，找最近的主干格
        const d0 = ta.disconnected[0];
        let bestK = null, bestD = Infinity;
        for (const k of main) {
          const [x, y] = k.split(',').map(Number);
          const dist = Math.hypot(x - d0.x, y - d0.y);
          if (dist < bestD) { bestD = dist; bestK = { x, y }; }
        }
        if (bestK) {
          out.push(`${ta.disconnected.length} 格道路未连主干网，从 (${d0.x},${d0.y}) 向 (${bestK.x},${bestK.y}) 铺约 ${Math.ceil(bestD)} 格路即可接通`);
        } else {
          out.push(`${ta.disconnected.length} 格道路孤立，先建枢纽再连路`);
        }
      } else if (ta.roadCount) {
        out.push('路网全连通 ✅，下一步：道路铺到 20 格解锁规模效应');
      }
      if (!ta.truckCount && ta.hubs.length) {
        out.push('有枢纽没车=车库空着，去运输面板造 1 辆运输车');
      }
      return out.slice(0, 3);
    }, []);
  }

  /** 图例建议区 HTML。 */
  _renderLegendAdvice(game, mode) {
    const list = mode === 'power' ? this._advisePower(game)
      : mode === 'water' ? this._adviseWater(game)
      : mode === 'traffic' ? this._adviseTraffic(game) : [];
    if (!list.length) return '';
    return `<div class="v20-legend-advice"><div class="v20-legend-advice-title">💡 建议</div>` +
      list.map(s => `<div class="v20-legend-advice-item">${s}</div>`).join('') + `</div>`;
  }

  /** 复制战报：当前覆盖层状态的文字总结（可粘贴到群里求助/炫耀）。 */
  _shareReport() {
    const g = this._game;
    const toast = (m) => { if (g && typeof g.toast === 'function') g.toast(m); };
    const stats = this.getModeStats(g);
    if (!stats || stats.mode === 'none') { toast('📋 先打开一个覆盖层再复制战报'); return; }
    const meta = OVERLAY_MODES[stats.mode];
    const lines = [`【星港·${meta.name}覆盖层战报】`];
    if (stats.mode === 'power') {
      lines.push(`发电建筑 ${stats.producers} 座 · 用电建筑 ${stats.consumers} 座`);
      lines.push(`电力盈余 ${v20_fmtSigned(stats.surplus)}${stats.unpowered ? ` · ⚠️缺电 ${stats.unpowered} 处` : ' · ✅无缺电'}`);
    } else if (stats.mode === 'water') {
      lines.push(`水源 ${stats.sources} 座 · 用水建筑 ${stats.users} 座 · 库存 ${v20_fmtNum(stats.stock)}`);
      lines.push(stats.shortage ? '⚠️缺水！' : stats.uncovered ? `覆盖外 ${stats.uncovered} 处` : '✅供水正常');
    } else if (stats.mode === 'traffic') {
      lines.push(`道路 ${stats.roads} 格 · 枢纽 ${stats.hubs} 座 · 运输车 ${stats.trucks} 辆`);
      lines.push(stats.disconnected ? `⚠️断开路段 ${stats.disconnected} 格` : '✅路网全连通');
    }
    const adv = stats.mode === 'power' ? this._advisePower(g)
      : stats.mode === 'water' ? this._adviseWater(g)
      : this._adviseTraffic(g);
    for (const a of adv.slice(0, 2)) lines.push('💡 ' + a);
    const text = lines.join('\n');
    const done = () => toast('📋 战报已复制，去分享吧！');
    v20_try('share_report', () => {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, () => this._shareFallback(text, done));
      } else {
        this._shareFallback(text, done);
      }
    }, null);
  }

  /** 剪贴板降级：隐藏 textarea + execCommand。 */
  _shareFallback(text, done) {
    v20_try('share_fallback', () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;top:-9999px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      if (ok && typeof done === 'function') done();
    }, null);
  }

  /** 子系统额外信息（系统接入且提供 renderOverlay 时，展示其自带统计）。 */
  _renderSysExtra(sys, mode) {
    if (!sys) return '';
    const items = [];
    v20_try('sys_extra', () => {
      const sizeOf = (c) => c == null ? null
        : (typeof c.size === 'number' ? c.size
        : (typeof c.length === 'number' ? c.length : null));
      const net = mode === 'power' ? sys.cables : mode === 'water' ? sys.pipes : null;
      const n = sizeOf(net);
      if (n != null) items.push(`${mode === 'power' ? '电缆' : '水管'} ${n} 段`);
      if (typeof sys.connectedCount === 'number') items.push(`已连接 ${sys.connectedCount}`);
      if (typeof sys.efficiency === 'number') items.push(`效率 ${Math.round(sys.efficiency * 100)}%`);
      if (typeof sys.load === 'number') items.push(`负载 ${Math.round(sys.load * 100)}%`);
      if (typeof sys.roadsBuilt === 'number') items.push(`道路 ${sys.roadsBuilt} 格`);
      if (typeof sys.routesActive === 'number') items.push(`活跃线路 ${sys.routesActive}`);
    }, null);
    if (!items.length) return '';
    return `<div class="v20-legend-sys">📡 ${items.join(' · ')}</div>`;
  }

  /** 图例问题清单：每种模式列出最多 5 个待处理项，按钮点按定位镜头。 */
  _renderLegendProblems(game, mode) {
    if (!this._showProblems) return '';
    if (!game || !game.map) return '';
    const items = v20_try('legend_problems', () => {
      const out = [];
      if (mode === 'power') {
        const pa = this._analyzePower(game);
        for (const c of pa.unpowered.slice(0, 5)) {
          out.push({ x: c.b.x, y: c.b.y, label: `⚠️ 缺电·${this._buildingName(c.b)}` });
        }
      } else if (mode === 'water') {
        const wa = this._analyzeWater(game);
        for (const u of wa.uncovered.slice(0, 5)) {
          out.push({ x: u.x, y: u.y, label: `💧 覆盖外·${this._buildingName(u)}` });
        }
      } else if (mode === 'traffic') {
        const ta = this._analyzeTraffic(game, game.map);
        for (const c of ta.disconnected.slice(0, 5)) {
          out.push({ x: c.x, y: c.y, label: `🛤️ 断开道路` });
        }
      }
      return out;
    }, []);
    if (!items || !items.length) {
      return `<div class="v20-legend-ok">✅ 暂无问题</div>`;
    }
    let html = `<div class="v20-legend-problems"><div class="v20-legend-problems-title">⚠️ 待处理（点定位）</div>`;
    for (const it of items) {
      html += `<button type="button" class="v20-goto" data-x="${it.x}" data-y="${it.y}">${it.label} (${it.x},${it.y})</button>`;
    }
    html += `</div>`;
    return html;
  }

  /** bindLegendUI()：把图例注入 #map-wrap（右上，小地图下方），随模式显示/隐藏。 */
  bindLegendUI() {
    if (typeof document === 'undefined') return;
    const wrap = document.getElementById('map-wrap');
    if (!wrap || this._legendEl) return;
    // 注入图例样式（只一次）
    if (!document.getElementById('v20-legend-style')) {
      const st = v20_el('style');
      st.id = 'v20-legend-style';
      st.textContent = `
#v20-legend{position:absolute;top:140px;right:10px;z-index:12;max-width:172px;
 background:rgba(12,10,14,.92);border:1px solid #4a352a;border-radius:10px;
 padding:8px 10px;font-size:11px;line-height:1.7;color:#f5e8dc;pointer-events:none}
#v20-legend .v20-legend-title{font-size:13px;font-weight:bold;color:#facc15;margin-bottom:4px}
#v20-legend .v20-legend-row{display:flex;align-items:center;gap:6px;margin:2px 0}
#v20-legend .v20-dot{flex:0 0 auto;width:12px;height:12px;border-radius:50%;border:1px solid rgba(255,255,255,.35)}
#v20-legend .v20-line{flex:0 0 auto;width:16px;border-top:3px dashed}
#v20-legend .v20-legend-tip{margin-top:4px;color:#7dd3fc;font-size:10px}
#v20-legend .v20-legend-src{margin-top:4px;font-size:10px;opacity:.75}
#v20-legend .v20-legend-src.warn{color:#fbbf24}
#v20-legend .v20-legend-key{margin-top:2px;font-size:10px;opacity:.5}
#v20-legend .v20-legend-ok{margin-top:4px;color:#4ade80;font-size:11px}
#v20-legend .v20-legend-problems{margin-top:6px;border-top:1px solid #3a2a20;padding-top:6px}
#v20-legend .v20-legend-problems-title{font-size:11px;font-weight:bold;color:#fbbf24;margin-bottom:2px}
#v20-legend .v20-goto{display:block;width:100%;min-height:44px;margin:4px 0;padding:6px 8px;
 font-size:11px;text-align:left;background:#2a1a12;border:1px solid #7a4a20;border-radius:8px;
 color:#f5e8dc;cursor:pointer;pointer-events:auto}
#v20-legend .v20-goto:active{background:#3a2416;transform:scale(.98)}
#v20-legend .v20-legend-table{margin-top:6px;border-top:1px solid #3a2a20;padding-top:4px}
#v20-legend .v20-legend-trow{display:flex;justify-content:space-between;font-size:11px;margin:2px 0;gap:6px}
#v20-legend .v20-legend-settings{display:flex;gap:6px;margin-top:6px}
#v20-legend .v20-setbtn{flex:1;min-height:44px;font-size:11px;border-radius:8px;cursor:pointer;
 border:1px solid #4a352a;background:#1a1410;color:#8a7a6a;pointer-events:auto}
#v20-legend .v20-setbtn.on{border-color:#facc15;color:#facc15;background:#2a2118}
#v20-legend .v20-sharebtn{display:block;width:100%;min-height:44px;margin-top:6px;font-size:12px;
 border-radius:8px;cursor:pointer;border:1px solid #38bdf8;background:#12202a;color:#7dd3fc;pointer-events:auto}
#v20-legend .v20-sharebtn:active{transform:scale(.98)}
#v20-legend .v20-legend-tip2{margin-top:6px;font-size:10px;color:#a5b4fc;line-height:1.6;
 border-top:1px solid #3a2a20;padding-top:6px}
#v20-legend .v20-legend-advice{margin-top:6px;border-top:1px solid #3a2a20;padding-top:6px}
#v20-legend .v20-legend-advice-title{font-size:11px;font-weight:bold;color:#4ade80;margin-bottom:2px}
#v20-legend .v20-legend-advice-item{font-size:10px;line-height:1.6;color:#d6c9b8;margin:2px 0}
#v20-legend .v20-legend-sys{margin-top:4px;font-size:10px;color:#7dd3fc;line-height:1.6}
#v20-mode-btns .v20-mode-btn.alert{animation:v20-btn-pulse 1.2s ease-in-out infinite;border-color:#ef4444}
@keyframes v20-btn-pulse{0%,100%{box-shadow:0 0 4px rgba(239,68,68,.4)}50%{box-shadow:0 0 14px rgba(239,68,68,.9)}}
#v20-mode-btns{display:flex;flex-direction:column;gap:8px;margin-top:10px}
#v20-mode-btns .v20-mode-btn{width:48px;height:48px;min-width:48px;min-height:48px;
 font-size:22px;border-radius:12px;border:1px solid rgba(255,255,255,.2);
 background:rgba(20,24,40,.85);color:#fff;cursor:pointer;backdrop-filter:blur(4px)}
#v20-mode-btns .v20-mode-btn:active{transform:scale(.94)}
#v20-mode-btns .v20-mode-btn.active{border-color:#facc15;background:#3a2a1a;
 box-shadow:0 0 10px rgba(250,204,21,.55)}
#v20-overlay-stats{position:absolute;left:10px;top:12px;z-index:12;
 background:rgba(12,10,14,.88);border:1px solid #4a352a;border-radius:8px;
 padding:5px 10px;font-size:12px;color:#facc15;pointer-events:none;max-width:46%}
@media (max-width:560px){#v20-legend{top:auto;bottom:120px;right:8px;max-width:150px;font-size:10px}}`;
      document.head.appendChild(st);
    }
    this._legendEl = v20_el('div');
    this._legendEl.id = 'v20-legend';
    this._legendEl.style.display = 'none';
    // 问题清单按钮：点击定位镜头；设置按钮：开关显示项（事件委托，图例 innerHTML 会重建）
    this._legendEl.addEventListener('click', (e) => {
      const setBtn = e.target && e.target.closest ? e.target.closest('[data-v20-setting]') : null;
      if (setBtn && setBtn.dataset) {
        const k = setBtn.dataset.v20Setting;
        if (k === 'problems') this._showProblems = !this._showProblems;
        else if (k === 'summary') this._showSummary = !this._showSummary;
        else if (k === 'problemsonly') this._problemsOnly = !this._problemsOnly;
        else if (k === 'share') { this._shareReport(); return; }
        this._saveOverlaySettings();
        this._refreshLegend();
        return;
      }
      const b = e.target && e.target.closest ? e.target.closest('.v20-goto') : null;
      if (!b || !b.dataset) return;
      const x = Number(b.dataset.x), y = Number(b.dataset.y);
      const g = this._game;
      if (g && g.camera && typeof g.camera.centerOn === 'function' &&
          isFinite(x) && isFinite(y)) {
        g.camera.centerOn(x, y);
        if (typeof g.toast === 'function') g.toast(`🎯 已定位 (${x}, ${y})`);
      }
    });
    // 悬停标记：鼠标在图例上时不自动刷新内容，避免按钮“跳走”
    this._legendEl.addEventListener('mouseenter', () => { this._legendHover = true; });
    this._legendEl.addEventListener('mouseleave', () => { this._legendHover = false; });
    wrap.appendChild(this._legendEl);
    // 统计 chip（左上）
    this._statsEl = v20_el('div');
    this._statsEl.id = 'v20-overlay-stats';
    this._statsEl.style.display = 'none';
    wrap.appendChild(this._statsEl);
    this._refreshLegend();
  }

  /** 刷新图例内容/显隐（setMode 后调用）。 */
  _refreshLegend() {
    if (!this._legendEl) return;
    const html = this.renderLegend(this._game);
    if (!html) {
      this._legendEl.style.display = 'none';
    } else {
      this._legendEl.innerHTML = html;
      this._legendEl.style.display = 'block';
    }
    if (this._statsEl && this._mode === 'none') {
      this._statsEl.style.display = 'none';
    }
  }

  // ================= 模式切换按钮 =================
  /* bindModeButtons()：在 #zoom-ctrl 内追加三个 48px 按钮（⚡/💧/🚗），
   * 当前模式高亮（.active），点击已激活模式则关闭。 */

  bindModeButtons() {
    if (typeof document === 'undefined') return;
    const zc = document.getElementById('zoom-ctrl');
    if (!zc || zc.querySelector('#v20-mode-btns')) return; // 已注入
    const box = v20_el('div');
    box.id = 'v20-mode-btns';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', '地图覆盖层切换');
    for (const mode of OVERLAY_MODE_ORDER) {
      const meta = OVERLAY_MODES[mode];
      const b = v20_el('button', 'v20-mode-btn', meta.icon);
      b.type = 'button';
      b.dataset.mode = mode;
      b.title = `${meta.name}覆盖层（快捷键 ${meta.key}）`;
      b.setAttribute('aria-label', `${meta.name}覆盖层`);
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', () => {
        this.toggle(mode);
        const g = this._game;
        if (g && typeof g.toast === 'function') {
          g.toast(this._mode === 'none' ? '🗺️ 已关闭覆盖层' : `${meta.icon} ${meta.name}覆盖层开`);
        }
      });
      this._btnEls[mode] = b;
      box.appendChild(b);
    }
    zc.appendChild(box);
    this._refreshButtons();
  }

  /** 同步按钮高亮态。 */
  _refreshButtons() {
    for (const mode of OVERLAY_MODE_ORDER) {
      const b = this._btnEls[mode];
      if (!b) continue;
      const on = this._mode === mode;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  // ================= 快捷键 =================
  /* bindKeys()：1/2/3 切换 power/water/traffic，0 关闭。
   * 输入框聚焦时不触发；不与 WASD/E/空格 等现有快捷键冲突。 */

  bindKeys() {
    if (typeof document === 'undefined' || this._keysBound) return;
    this._keysBound = true;
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target;
      if (t) {
        const tag = (t.tagName || '').toUpperCase();
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || t.isContentEditable) return;
      }
      const k = e.key;
      let mode = null;
      if (k === '1') mode = 'power';
      else if (k === '2') mode = 'water';
      else if (k === '3') mode = 'traffic';
      else if (k === '0') mode = 'none';
      else if (k === '?') {
        // 快捷键帮助
        const g = this._game;
        if (g && typeof g.toast === 'function') {
          g.toast('⌨️ 1/2/3：电力/供水/交通覆盖层 · 0：关闭 · 点图例问题可定位');
        }
        e.preventDefault();
        return;
      }
      if (mode === null) return;
      e.preventDefault();
      if (mode === 'none') this.setMode('none');
      else this.toggle(mode);
    });
  }

  // ================= 统计 chip =================
  /* 左上角小条：按模式显示关键数字，每 500ms 刷新（attach 里节流调用）。 */

  _updateStatsChip(game) {
    if (!this._statsEl) return;
    const mode = this._mode;
    if (mode === 'none') {
      this._statsEl.style.display = 'none';
      return;
    }
    let text = '';
    if (mode === 'power') {
      text = v20_try('chip_power', () => {
        const bd = game.builder;
        const p = bd && typeof bd.totalPower === 'function' ? Number(bd.totalPower()) || 0 : 0;
        const u = bd && typeof bd.totalPowerUse === 'function' ? Number(bd.totalPowerUse()) || 0 : 0;
        return `⚡ ${v20_fmtNum(p)}/${v20_fmtNum(u)}` + (p >= u ? ' ✅' : ' 🔴缺口' + v20_fmtNum(u - p));
      }, '⚡ —');
    } else if (mode === 'water') {
      text = v20_try('chip_water', () => {
        const w = game.player && game.player.inv ? Number(game.player.inv.water) || 0 : 0;
        const bs = v20_buildings(game);
        const src = bs.filter(b => b && (b.id === 'pump' || b.id === 'waterplant')).length;
        return `💧 库存 ${v20_fmtNum(w)} · 水源 ${src}`;
      }, '💧 —');
    } else if (mode === 'traffic') {
      text = v20_try('chip_traffic', () => {
        const n = game.logistics && Array.isArray(game.logistics.trucks) ? game.logistics.trucks.length : 0;
        const bs = v20_buildings(game);
        const hubs = bs.filter(b => b && ['depot', 'logistics', 'warehouse', 'trade'].includes(b.id)).length;
        return `🚗 运输车 ${n} · 枢纽 ${hubs}`;
      }, '🚗 —');
    }
    if (text) {
      this._statsEl.textContent = text;
      this._statsEl.style.display = 'block';
    }
  }
} // class OverlayManager 结束

// ============================ 第二部分：经济面板 ============================
/* ----------------------------------------------------------------------------
 * EconomyPanel — 星币经济总览。
 *
 * 依赖的子系统 game.economy（由经济系统模块提供，当前可能不存在）期望接口：
 *   credits                 number   当前星币（可读写属性或 getCredits()）
 *   getIncomeRate()         每分钟总收入（可选）
 *   getExpenseRate()        每分钟总支出（可选）
 *   breakdown()             {tax,wage,maint,trade} 每项 {income,expense}（可选）
 *   getTaxRate()/setTaxRate(r)      r ∈ [0, 0.3]
 *   getWageLevel()/setWageLevel(v)  v 为倍率，如 1.0 = 基准
 *   isBankrupt()            boolean（可选；兼容 bankrupt 属性）
 *   addCredits(n)           发放/扣除星币（可选）
 *   onTrade()               贸易次数统计（可选；教程用）
 *
 * 防御策略：
 *   - 系统不存在 → 💰 按钮不注入（自动隐藏），update() 直接返回；
 *     系统后出现 → update() 里检测到后自动补注入按钮。
 *   - 收支曲线：优先用系统提供的费率；没有则只画“星币余额”实线
 *     （余额来自 credits，是真实数据），收入/支出线隐藏并注明。
 *   - 所有读取经 v20_try，面板永远可开、永不白屏。
 * ----------------------------------------------------------------------------
 */

/** 经济面板 CSS（复用现有 panel 视觉：参考 #trade-panel / #truck-panel）。 */
const ECONOMY_PANEL_CSS = `
#economy-panel{position:absolute;left:12px;right:12px;bottom:12px;z-index:26;
 background:rgba(20,14,10,.97);border:1px solid #facc15;border-radius:12px;
 padding:12px;max-height:72%;overflow-y:auto;color:#f5e8dc}
#economy-panel .panel-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
#economy-panel .panel-header b{font-size:16px;color:#facc15}
#economy-panel .panel-header button{background:#2a2a35;color:#fff;border:none;border-radius:8px;
 width:44px;height:44px;min-width:44px;min-height:44px;font-size:15px;cursor:pointer}
#v20-eco-credits{text-align:center;margin:4px 0 8px}
#v20-eco-credits .v20-eco-num{font-size:34px;font-weight:bold;color:#facc15;line-height:1.1}
#v20-eco-credits .v20-eco-label{font-size:12px;opacity:.65}
#v20-eco-credits.negative .v20-eco-num{color:#ef4444}
#v20-eco-bankrupt{display:none;background:rgba(239,68,68,.14);border:1px solid #ef4444;
 border-radius:8px;padding:8px 10px;font-size:13px;color:#fca5a5;margin-bottom:8px;line-height:1.6}
#v20-eco-bankrupt.show{display:block}
#v20-eco-chart-wrap{position:relative;background:#14100c;border:1px solid #3a2a20;border-radius:8px;
 padding:6px;margin-bottom:4px}
#v20-eco-chart{display:block;width:100%;height:170px;touch-action:pan-y}
#v20-eco-legend{display:flex;gap:12px;justify-content:center;font-size:11px;margin:2px 0 8px;flex-wrap:wrap}
#v20-eco-legend .v20-dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:4px}
#v20-eco-tip{position:absolute;pointer-events:none;background:rgba(0,0,0,.85);border:1px solid #4a352a;
 border-radius:6px;padding:4px 8px;font-size:11px;color:#fff;display:none;z-index:5;white-space:nowrap}
#v20-eco-table{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:10px}
#v20-eco-table th,#v20-eco-table td{padding:7px 6px;border-bottom:1px solid #2a2a35;text-align:right}
#v20-eco-table th:first-child,#v20-eco-table td:first-child{text-align:left}
#v20-eco-table th{font-size:11px;opacity:.6;font-weight:normal}
#v20-eco-table .pos{color:#4ade80}#v20-eco-table .neg{color:#f87171}
#v20-eco-sliders{background:#14100c;border:1px solid #3a2a20;border-radius:8px;padding:10px 12px}
#v20-eco-sliders .v20-slider-row{margin-bottom:10px}
#v20-eco-sliders .v20-slider-row:last-child{margin-bottom:0}
#v20-eco-sliders .v20-slider-head{display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px}
#v20-eco-sliders .v20-slider-head b{color:#facc15}
#v20-eco-sliders input[type=range]{width:100%;height:44px;accent-color:#e07b39;cursor:pointer}
#v20-eco-sliders .v20-slider-desc{font-size:11px;opacity:.6;line-height:1.5}
#v20-eco-btn{min-width:48px;min-height:48px;font-size:22px;border-radius:10px;cursor:pointer;
 border:1px solid #4a352a;background:#241a14;color:#f5e8dc}
#v20-eco-btn:active{transform:scale(.94)}
#v20-eco-health{background:#14100c;border:1px solid #3a2a20;border-radius:8px;padding:10px 12px;margin-bottom:8px}
#v20-eco-health .v20-health-head{display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px}
#v20-eco-health .v20-health-head b{font-size:18px}
#v20-eco-health .v20-health-bar{height:10px;background:#2a2a35;border-radius:5px;overflow:hidden;margin-bottom:6px}
#v20-eco-health #v20-eco-health-fill{height:100%;border-radius:5px;transition:width .5s}
#v20-eco-health-factors{font-size:11px;line-height:1.8;opacity:.85}
#v20-eco-health-factors .frow{display:flex;justify-content:space-between}
#v20-eco-projection{margin-top:6px;font-size:12px;color:#7dd3fc;line-height:1.6}
#v20-eco-presets{display:flex;gap:6px;margin-top:6px}
#v20-eco-presets button{flex:1;min-height:44px;border:1px solid #4a352a;border-radius:8px;
 background:#241a14;color:#f5e8dc;font-size:12px;cursor:pointer}
#v20-eco-presets button:active{transform:scale(.96)}
#v20-eco-foot{margin-top:8px;font-size:10px;opacity:.5;text-align:center;line-height:1.8}
#v20-eco-adj{background:#14100c;border:1px solid #3a2a20;border-radius:8px;padding:10px 12px;margin-top:8px}
#v20-eco-adj .v20-adj-head{font-size:13px;margin-bottom:6px;color:#facc15}
#v20-eco-adj-list{font-size:12px;line-height:1.9;opacity:.85}
#v20-eco-adj-list .v20-adj-time{opacity:.55;font-size:11px}
#v20-eco-slider-warn{display:none;font-size:12px;line-height:1.7;color:#fbbf24;
 background:rgba(251,191,36,.08);border:1px solid #7a5a20;border-radius:8px;
 padding:8px 12px;margin-top:8px}
#v20-eco-table .v20-bar{height:6px;background:#2a2a35;border-radius:3px;overflow:hidden;
 display:flex;margin-top:4px;max-width:120px}
#v20-eco-table .v20-bar-in{background:#4ade80;height:100%}
#v20-eco-table .v20-bar-out{background:#f87171;height:100%}
#economy-panel .v20-head-btns{display:flex;gap:6px}
#v20-eco-export{background:#2a2a35;color:#fff;border:none;border-radius:8px;
 width:44px;height:44px;min-width:44px;min-height:44px;font-size:16px;cursor:pointer}
#v20-eco-flow{display:flex;gap:8px;margin-bottom:8px}
#v20-eco-flow .v20-flow-box{flex:1;background:#14100c;border:1px solid #3a2a20;border-radius:8px;
 padding:6px 4px;text-align:center}
#v20-eco-flow .v20-flow-box small{display:block;font-size:10px;opacity:.6;margin-bottom:2px}
#v20-eco-flow .v20-flow-box b{font-size:15px}
#v20-eco-flow .pos{color:#4ade80}#v20-eco-flow .neg{color:#f87171}
#v20-eco-tabs{display:flex;gap:6px;margin-bottom:6px}
#v20-eco-tabs button{flex:1;min-height:44px;border:1px solid #4a352a;border-radius:8px;
 background:#1a1410;color:#8a7a6a;font-size:13px;cursor:pointer}
#v20-eco-tabs button.on{border-color:#facc15;color:#facc15;background:#2a2118;font-weight:bold}
#v20-eco-tabs #v20-eco-shot{flex:0 0 56px}
#v20-eco-brief{font-size:12px;line-height:1.7;background:#14100c;border:1px solid #3a2a20;
 border-radius:8px;padding:8px 12px;margin-bottom:8px;color:#e8dcc8}
#v20-eco-goal{background:#14100c;border:1px solid #3a2a20;border-radius:8px;padding:10px 12px;margin-bottom:8px}
#v20-eco-goal .v20-goal-head{display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px}
#v20-eco-goal .v20-goal-head b{color:#facc15}
#v20-eco-goal .v20-goal-bar{height:10px;background:#2a2a35;border-radius:5px;overflow:hidden;margin-bottom:6px}
#v20-eco-goal #v20-eco-goal-fill{height:100%;background:linear-gradient(90deg,#e07b39,#facc15);
 border-radius:5px;transition:width .5s}
#v20-eco-goal .v20-goal-row{display:flex;gap:6px}
#v20-eco-goal input{flex:1;min-height:44px;background:#241a14;border:1px solid #4a352a;border-radius:8px;
 color:#f5e8dc;font-size:14px;padding:0 10px;min-width:0}
#v20-eco-goal .v20-goal-row button{min-height:44px;padding:0 16px;border:none;border-radius:8px;
 background:#e07b39;color:#fff;font-size:14px;font-weight:bold;cursor:pointer}
#v20-eco-goal .v20-goal-tip{font-size:11px;opacity:.6;margin-top:6px;line-height:1.6}
`;

class EconomyPanel {
  constructor(game) {
    this.game = game || null;
    this._btnEl = null;        // 顶栏 💰 按钮
    this._panelEl = null;      // #economy-panel
    this._chartEl = null;      // canvas
    this._tipEl = null;        // hover 提示
    this._open = false;
    this._hist = [];           // [{t, credits, income, expense}] 环形缓冲
    this._histMax = 180;       // 30 分钟 @ 每 10 秒采样
    this._catHist = [];        // [{t, cats:{tax:{i,e},wage:{i,e},...}}] 分类快照（堆叠图用）
    this._chartTab = 'line';   // 'line' | 'stack'
    this._lastSample = 0;
    this._lastUpdate = 0;
    this._dragging = null;     // 正在拖的滑杆 id
    this._hoverIdx = -1;
    this._wasBankrupt = false; // 上次是否破产（翻转提醒用）
    this._goalDone = false;    // 存钱目标是否已庆祝
    this._adjHist = [];        // 滑杆调整历史 [{t, kind, from, to, unit}]
    this._lastTaxCommitted = null;
    this._lastWageCommitted = null;
    this._styleInjected = false;
  }

  /** 取经济系统（可能不存在）。 */
  _sys() {
    return v20_getSys(this.game, 'economy');
  }

  /** 读星币（多形状兼容）。 */
  _credits() {
    const s = this._sys();
    if (!s) return 0;
    return v20_try('eco_credits', () => {
      if (typeof s.getCredits === 'function') return Number(s.getCredits()) || 0;
      if (typeof s.credits === 'number') return s.credits;
      if (typeof s.balance === 'number') return s.balance;
      return 0;
    }, 0);
  }

  /** 读破产态（多形状兼容）。 */
  _isBankrupt() {
    const s = this._sys();
    if (!s) return false;
    return v20_try('eco_bankrupt', () => {
      if (typeof s.isBankrupt === 'function') return !!s.isBankrupt();
      if (typeof s.bankrupt === 'boolean') return s.bankrupt;
      return this._credits() < 0;
    }, false);
  }

  // ---------- 挂接 ----------

  /** attach：tick 里每秒 update()（面板只在打开时重绘，采样一直在后台做）。 */
  attach(game) {
    if (game) this.game = game;
    const self = this;
    v20_onTick(game, (g, now) => {
      if (now - self._lastUpdate < 1000) return;
      self._lastUpdate = now;
      v20_try('eco_update', () => self.update(now), null);
    });
  }

  /** update()：由 game tick 每秒调用。采样历史 + 系统后出现则补按钮 + 面板开着就刷新。 */
  update(now) {
    const sys = this._sys();
    // 系统后出现：补注入按钮
    if (sys && !this._btnEl) {
      v20_try('eco_late_bind', () => this.bindUI(), null);
    }
    if (!sys) return;
    this._sample(now == null ? Date.now() : now);
    // 破产自动提醒（状态翻转时只弹一次）
    const bad = v20_try('eco_bad', () => this._isBankrupt(), false);
    if (bad && !this._wasBankrupt) {
      const g = this.game;
      if (g && typeof g.toast === 'function') {
        g.toast('🔴 破产警告！点顶栏 💰 打开经济面板查看对策');
      }
    }
    this._wasBankrupt = bad;
    if (this._open) {
      v20_try('eco_render', () => this.render(), null);
    }
    // 同步顶栏按钮角标（星币数，太长则缩写）
    if (this._btnEl) {
      const c = this._credits();
      this._btnEl.title = `经济面板（星币 ${v20_fmtNum(c)}）`;
    }
  }

  // ---------- 顶栏按钮 ----------

  /** bindUI()：在顶栏资源区旁注入 💰 按钮（48px）。系统不存在时自动隐藏（不注入）。 */
  bindUI() {
    if (typeof document === 'undefined') return;
    if (this._btnEl) return;                       // 已注入
    if (!this._sys()) return;                      // 系统不存在 → 自动隐藏
    const bar = document.getElementById('res-bar');
    if (!bar) return;
    const b = v20_el('button', '', '💰');
    b.id = 'v20-eco-btn';
    b.type = 'button';
    b.setAttribute('aria-label', '经济面板');
    b.addEventListener('click', () => this.toggle());
    bar.insertBefore(b, bar.firstChild);
    this._btnEl = b;
  }

  // ---------- 面板 DOM ----------

  /** 构建 #economy-panel（HTML 由 JS 生成，样式见 ECONOMY_PANEL_CSS）。 */
  _buildPanel() {
    if (this._panelEl) return;
    const wrap = document.getElementById('map-wrap');
    if (!wrap) return;
    if (!this._styleInjected) {
      const st = v20_el('style');
      st.id = 'v20-eco-style';
      st.textContent = ECONOMY_PANEL_CSS;
      document.head.appendChild(st);
      this._styleInjected = true;
    }
    const p = v20_el('div');
    p.id = 'economy-panel';
    p.classList.add('hidden');
    p.innerHTML = `
      <div class="panel-header">
        <b>💰 星港经济</b>
        <div class="v20-head-btns">
          <button id="v20-eco-export" aria-label="导出CSV" title="导出 30 分钟收支 CSV">📥</button>
          <button id="v20-eco-close" aria-label="关闭">✖</button>
        </div>
      </div>
      <div id="v20-eco-bankrupt"></div>
      <div id="v20-eco-credits">
        <div class="v20-eco-num">—</div>
        <div class="v20-eco-label">当前星币</div>
      </div>
      <div id="v20-eco-flow">
        <div class="v20-flow-box"><small>收入/分</small><b id="v20-eco-flow-in" class="pos">—</b></div>
        <div class="v20-flow-box"><small>支出/分</small><b id="v20-eco-flow-out" class="neg">—</b></div>
        <div class="v20-flow-box"><small>净/分</small><b id="v20-eco-flow-net">—</b></div>
      </div>
      <div id="v20-eco-health">
        <div class="v20-health-head"><span>❤️ 财政健康度</span><b id="v20-eco-health-score">—</b></div>
        <div class="v20-health-bar"><div id="v20-eco-health-fill" style="width:0%"></div></div>
        <div id="v20-eco-health-factors"></div>
        <div id="v20-eco-projection"></div>
      </div>
      <div id="v20-eco-brief"></div>
      <div id="v20-eco-goal">
        <div class="v20-goal-head"><span>🎯 存钱目标</span><b id="v20-eco-goal-text">未设定</b></div>
        <div class="v20-goal-bar"><div id="v20-eco-goal-fill" style="width:0%"></div></div>
        <div class="v20-goal-row">
          <input id="v20-eco-goal-input" type="number" min="1" placeholder="输入目标星币数" aria-label="存钱目标">
          <button id="v20-eco-goal-set" type="button">设定</button>
        </div>
        <div class="v20-goal-tip">设定后每次打开面板自动跟踪进度，达成时放烟花（toast+音效）🎉</div>
      </div>
      <div id="v20-eco-tabs">
        <button type="button" data-tab="line" class="on">📈 收支曲线</button>
        <button type="button" data-tab="stack">🧱 分类堆叠</button>
        <button type="button" id="v20-eco-shot" title="导出图表 PNG">📷</button>
      </div>
      <div id="v20-eco-chart-wrap">
        <canvas id="v20-eco-chart"></canvas>
        <div id="v20-eco-tip"></div>
      </div>
      <div id="v20-eco-legend"></div>
      <table id="v20-eco-table">
        <thead><tr><th>项目</th><th>收入/分</th><th>支出/分</th><th>净</th></tr></thead>
        <tbody></tbody>
      </table>
      <div id="v20-eco-sliders">
        <div class="v20-slider-row">
          <div class="v20-slider-head"><span>🏛️ 税率</span><b id="v20-eco-tax-val">—</b></div>
          <input type="range" id="v20-eco-tax" min="0" max="30" step="1" value="10" aria-label="税率">
          <div class="v20-slider-desc">税率越高税收越多，但人口增长/满意度可能下降。范围 0–30%。</div>
          <div id="v20-eco-presets-tax" class="v20-eco-presets" style="display:flex;gap:6px;margin-top:6px">
            <button type="button" data-preset="5">低 5%</button>
            <button type="button" data-preset="10">中 10%</button>
            <button type="button" data-preset="20">高 20%</button>
          </div>
        </div>
        <div class="v20-slider-row">
          <div class="v20-slider-head"><span>💼 工资水平</span><b id="v20-eco-wage-val">—</b></div>
          <input type="range" id="v20-eco-wage" min="0" max="200" step="5" value="100" aria-label="工资水平">
          <div class="v20-slider-desc">工资越高人口越开心，但工资支出越大。100% = 基准工资。</div>
          <div id="v20-eco-presets-wage" class="v20-eco-presets" style="display:flex;gap:6px;margin-top:6px">
            <button type="button" data-preset="80">省 80%</button>
            <button type="button" data-preset="100">基准 100%</button>
            <button type="button" data-preset="130">高 130%</button>
          </div>
        </div>
      </div>
      <div id="v20-eco-slider-warn"></div>
      <div id="v20-eco-adj">
        <div class="v20-adj-head">🕘 最近调整</div>
        <div id="v20-eco-adj-list"><div style="opacity:.55">暂无调整记录</div></div>
      </div>
      <div id="v20-eco-foot">数据每 10 秒采样 · 最长保留 30 分钟<br>把鼠标放在曲线上可查看历史数值</div>`;
    wrap.appendChild(p);
    this._panelEl = p;
    this._chartEl = p.querySelector('#v20-eco-chart');
    this._tipEl = p.querySelector('#v20-eco-tip');
    p.querySelector('#v20-eco-close').addEventListener('click', () => this.close());
    const expBtn = p.querySelector('#v20-eco-export');
    if (expBtn) {
      expBtn.addEventListener('click', () => v20_try('eco_export', () => this._exportCSV(), null));
    }
    this._bindSliders();
    this._bindPresets();
    this._bindGoal();
    // 图表 tab 切换
    const tabs = p.querySelectorAll('#v20-eco-tabs button[data-tab]');
    tabs.forEach((b) => {
      b.addEventListener('click', () => {
        this._chartTab = b.dataset.tab === 'stack' ? 'stack' : 'line';
        tabs.forEach((x) => x.classList.toggle('on', x === b));
        this._hoverIdx = -1;
        this._hideTip();
        v20_try('eco_tab_draw', () => this._drawChart(), null);
      });
    });
    // 图表 PNG 导出
    const shotBtn = p.querySelector('#v20-eco-shot');
    if (shotBtn) {
      shotBtn.addEventListener('click', () => v20_try('eco_png_btn', () => this._exportChartPNG(), null));
    }
    this._bindChartHover();
    // 面板内点击不穿透到地图（map-wrap 有 touch-action:none，面板需要滚动）
    p.style.touchAction = 'pan-y';
  }

  open() {
    this._buildPanel();
    if (!this._panelEl) return;
    this._open = true;
    this._panelEl.classList.remove('hidden');
    this._sample(Date.now());
    this.render();
  }

  close() {
    this._open = false;
    if (this._panelEl) this._panelEl.classList.add('hidden');
  }

  toggle() {
    if (this._open) this.close();
    else this.open();
  }

  /** 面板是否打开（教程步骤判定用）。 */
  isOpen() {
    return this._open;
  }

  // ================= 历史采样 =================
  /* 每 10 秒采样一次：{t, credits, income, expense}。
   * income/expense（每分钟）优先读系统费率接口；没有则尝试从 breakdown()
   * 汇总；再没有就记 null——图表只画余额线（余额是真实数据，不造数）。 */

  _sample(now) {
    if (now - this._lastSample < 10000 && this._hist.length) return;
    this._lastSample = now;
    const sys = this._sys();
    if (!sys) return;
    const credits = this._credits();
    let income = null, expense = null;
    v20_try('eco_rates', () => {
      if (typeof sys.getIncomeRate === 'function' && typeof sys.getExpenseRate === 'function') {
        income = Number(sys.getIncomeRate()) || 0;
        expense = Number(sys.getExpenseRate()) || 0;
      } else if (typeof sys.incomeRate === 'number' && typeof sys.expenseRate === 'number') {
        income = sys.incomeRate; expense = sys.expenseRate;
      } else if (typeof sys.breakdown === 'function') {
        const bd = this._normalizeBreakdown(sys.breakdown());
        income = bd.total.income; expense = bd.total.expense;
      }
    }, null);
    this._hist.push({ t: now, credits, income, expense });
    // —— 分类快照（堆叠图用）：每项 {i:收入, e:支出} ——
    v20_try('eco_cats', () => {
      const bd = this._getBreakdown();
      const cats = {};
      if (bd) {
        for (const r of bd.rows) cats[r.key] = { i: r.income, e: r.expense };
      }
      this._catHist.push({ t: now, cats });
    }, null);
    // 只保留最近 30 分钟，且上限 180 点
    const cutoff = now - 30 * 60 * 1000;
    while (this._hist.length && this._hist[0].t < cutoff) this._hist.shift();
    while (this._hist.length > this._histMax) this._hist.shift();
    while (this._catHist.length && this._catHist[0].t < cutoff) this._catHist.shift();
    while (this._catHist.length > this._histMax) this._catHist.shift();
  }

  /** 堆叠图分类定义（颜色与图例共用）。 */
  _stackCats() {
    return [
      { key: 'tax', name: '税收', color: '#facc15' },
      { key: 'wage', name: '工资', color: '#38bdf8' },
      { key: 'maint', name: '维护费', color: '#e07b39' },
      { key: 'trade', name: '贸易', color: '#4ade80' },
    ];
  }

  /** 归一化 breakdown() 的各种返回形状 → {rows:[{key,name,income,expense}], total}。 */
  _normalizeBreakdown(raw) {
    const NAMES = { tax: '🏛️ 税收', wage: '💼 工资', maint: '🔧 维护费', trade: '🤝 贸易' };
    const rows = [];
    const total = { income: 0, expense: 0 };
    const push = (key, income, expense) => {
      income = Number(income) || 0; expense = Number(expense) || 0;
      rows.push({ key, name: NAMES[key] || key, income, expense });
      total.income += income; total.expense += expense;
    };
    v20_try('eco_bd', () => {
      if (!raw) return;
      if (Array.isArray(raw)) {
        // [{key|name, income, expense}]
        for (const r of raw) {
          if (!r) continue;
          push(r.key || r.name || '?', r.income, r.expense);
        }
      } else if (typeof raw === 'object') {
        for (const key of ['tax', 'wage', 'maint', 'trade']) {
          const r = raw[key];
          if (r == null) { push(key, 0, 0); continue; }
          if (typeof r === 'object') push(key, r.income, r.expense);
          else push(key, 0, 0);
        }
      }
    }, null);
    if (!rows.length) {
      for (const key of ['tax', 'wage', 'maint', 'trade']) push(key, 0, 0);
    }
    return { rows, total };
  }

  // ================= 收支曲线（Canvas 自绘） =================

  /** 生成好看的刻度：[min,max] → 5 个 tick。 */
  _niceTicks(min, max, count) {
    count = count || 5;
    if (!isFinite(min) || !isFinite(max) || min === max) {
      min -= 1; max += 1;
    }
    const span = max - min;
    const raw = span / (count - 1);
    const mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const norm = raw / mag;
    let step;
    if (norm < 1.5) step = 1;
    else if (norm < 3.5) step = 2;
    else if (norm < 7.5) step = 5;
    else step = 10;
    step *= mag;
    const t0 = Math.ceil(min / step) * step;
    const ticks = [];
    for (let v = t0; v <= max + 1e-9; v += step) {
      // 浮点修正
      ticks.push(Math.round(v / step) * step);
      if (ticks.length > 12) break;
    }
    return { ticks, lo: t0, hi: ticks.length ? ticks[ticks.length - 1] : max };
  }

  /** y 轴数字缩写：12345 → "1.2万"。 */
  _shortNum(v) {
    const a = Math.abs(v);
    if (a >= 1e8) return (v / 1e8).toFixed(1) + '亿';
    if (a >= 1e4) return (v / 1e4).toFixed(1) + '万';
    if (a >= 1000) return (v / 1000).toFixed(1) + 'k';
    return String(Math.round(v));
  }

  /** 绘制 30 分钟收支曲线（按当前 tab 分发）。 */
  _drawChart() {
    if (this._chartTab === 'stack') {
      this._drawStacked();
      return;
    }    const cv = this._chartEl;
    if (!cv) return;
    const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
    const cssW = cv.clientWidth || 300;
    const cssH = 170;
    if (cv.width !== Math.round(cssW * dpr) || cv.height !== Math.round(cssH * dpr)) {
      cv.width = Math.round(cssW * dpr);
      cv.height = Math.round(cssH * dpr);
    }
    const ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    const now = Date.now();
    const WIN = 30 * 60 * 1000;
    const pts = this._hist.filter(p => p.t >= now - WIN);
    // —— 空数据 ——
    if (pts.length < 2) {
      ctx.fillStyle = 'rgba(245,232,220,.55)';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('📈 数据收集中…（每 10 秒采样，最长保留 30 分钟）', cssW / 2, cssH / 2);
      ctx.textAlign = 'left';
      this._renderLegendRow(null);
      return;
    }

    const hasFlow = pts.some(p => p.income != null && p.expense != null);
    // —— y 轴范围：余额 +（若有）收支 ——
    let lo = Infinity, hi = -Infinity;
    for (const p of pts) {
      lo = Math.min(lo, p.credits);
      hi = Math.max(hi, p.credits);
      if (hasFlow && p.income != null) { lo = Math.min(lo, p.income, p.expense); hi = Math.max(hi, p.income, p.expense); }
    }
    // 余额和费率量级可能差很多：若同时画会导致一条线被压平。
    // 策略：余额用左轴，收支用右轴（各自 nice ticks）。
    const balTicks = this._niceTicks(lo, hi, 5);
    let fLo = Infinity, fHi = -Infinity;
    if (hasFlow) {
      for (const p of pts) {
        if (p.income == null) continue;
        fLo = Math.min(fLo, p.income, p.expense);
        fHi = Math.max(fHi, p.income, p.expense);
      }
    }
    const flowTicks = hasFlow ? this._niceTicks(fLo, fHi, 4) : null;

    const padL = 40, padR = hasFlow ? 36 : 10, padT = 10, padB = 22;
    const W = cssW - padL - padR, H = cssH - padT - padB;
    const t0 = now - WIN, t1 = now;
    const X = (t) => padL + ((t - t0) / (t1 - t0)) * W;
    const Yb = (v) => padT + H - ((v - balTicks.lo) / Math.max(1e-9, balTicks.hi - balTicks.lo)) * H;
    const Yf = flowTicks
      ? (v) => padT + H - ((v - flowTicks.lo) / Math.max(1e-9, flowTicks.hi - flowTicks.lo)) * H
      : Yb;

    // —— 网格 + y 轴（左：余额黄；右：收支绿/红） ——
    ctx.font = '10px sans-serif';
    ctx.lineWidth = 1;
    for (const tv of balTicks.ticks) {
      const y = Yb(tv);
      ctx.strokeStyle = 'rgba(255,255,255,.08)';
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(cssW - padR, y); ctx.stroke();
      ctx.fillStyle = 'rgba(250,204,21,.75)';
      ctx.textAlign = 'right';
      ctx.fillText(this._shortNum(tv), padL - 4, y + 3);
    }
    if (flowTicks) {
      ctx.fillStyle = 'rgba(74,222,128,.7)';
      ctx.textAlign = 'left';
      for (const tv of flowTicks.ticks) {
        const y = Yf(tv);
        ctx.fillText(this._shortNum(tv), cssW - padR + 4, y + 3);
      }
    }
    // —— x 轴：-30分/-20分/-10分/现在 ——
    ctx.fillStyle = 'rgba(245,232,220,.5)';
    ctx.textAlign = 'center';
    const xMarks = [
      { t: t0, label: '-30分' },
      { t: t0 + WIN / 3, label: '-20分' },
      { t: t0 + (2 * WIN) / 3, label: '-10分' },
      { t: t1, label: '现在' },
    ];
    for (const m of xMarks) {
      ctx.fillText(m.label, X(m.t), cssH - 6);
    }
    ctx.textAlign = 'left';

    // —— 画线辅助 ——
    const strokeSeries = (get, color, yFn, fillColor) => {
      // 填充渐变
      if (fillColor) {
        const gr = ctx.createLinearGradient(0, padT, 0, padT + H);
        gr.addColorStop(0, fillColor);
        gr.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gr;
        ctx.beginPath();
        let started = false;
        for (const p of pts) {
          const v = get(p);
          if (v == null) { started = false; continue; }
          const x = X(p.t), y = yFn(v);
          if (!started) { ctx.moveTo(x, y); started = true; }
          else ctx.lineTo(x, y);
        }
        if (started) {
          const lastP = pts[pts.length - 1], firstP = pts[0];
          ctx.lineTo(X(lastP.t), padT + H);
          ctx.lineTo(X(firstP.t), padT + H);
          ctx.closePath();
          ctx.fill();
        }
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      let started = false;
      for (const p of pts) {
        const v = get(p);
        if (v == null || !isFinite(v)) { started = false; continue; }
        const x = X(p.t), y = yFn(v);
        if (!started) { ctx.moveTo(x, y); started = true; }
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    // —— 三条线：余额（黄粗）/收入（绿）/支出（红） ——
    if (hasFlow) {
      strokeSeries(p => p.income, 'rgba(74,222,128,1)', Yf, 'rgba(74,222,128,0.28)');
      strokeSeries(p => p.expense, 'rgba(248,113,113,1)', Yf, 'rgba(248,113,113,0.28)');
    }
    strokeSeries(p => p.credits, 'rgba(250,204,21,1)', Yb, null);
    // 余额线加粗描边（重画一次更粗）
    ctx.strokeStyle = 'rgba(250,204,21,1)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let st = false;
    for (const p of pts) {
      const x = X(p.t), y = Yb(p.credits);
      if (!st) { ctx.moveTo(x, y); st = true; } else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // —— 余额最高/最低点标注 ——
    v20_try('eco_minmax', () => {
      let minP = pts[0], maxP = pts[0];
      for (const p of pts) {
        if (p.credits < minP.credits) minP = p;
        if (p.credits > maxP.credits) maxP = p;
      }
      if (maxP !== minP) {
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        const tag = (p, txt, color, above) => {
          const x = Math.max(padL + 24, Math.min(cssW - padR - 24, X(p.t)));
          const y = Yb(p.credits) + (above ? -10 : 14);
          const w = ctx.measureText(txt).width + 10;
          ctx.fillStyle = 'rgba(0,0,0,.68)';
          ctx.fillRect(x - w / 2, y - 9, w, 15);
          ctx.fillStyle = color;
          ctx.fillText(txt, x, y + 3);
        };
        tag(maxP, '▲ ' + this._shortNum(maxP.credits), '#4ade80', true);
        tag(minP, '▼ ' + this._shortNum(minP.credits), '#f87171', false);
        ctx.textAlign = 'left';
      }
    }, null);

    // —— 破产线（y=0）：若在范围内画红色虚线 ——
    if (balTicks.lo < 0 && balTicks.hi > 0) {
      const y0 = Yb(0);
      ctx.save();
      ctx.strokeStyle = 'rgba(239,68,68,.7)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(padL, y0); ctx.lineTo(cssW - padR, y0); ctx.stroke();
      ctx.restore();
      ctx.fillStyle = 'rgba(239,68,68,.9)';
      ctx.textAlign = 'right';
      ctx.fillText('破产线', padL - 4, y0 - 4);
      ctx.textAlign = 'left';
    }

    // —— hover 十字线 ——
    if (this._hoverIdx >= 0 && this._hoverIdx < pts.length) {
      const p = pts[this._hoverIdx];
      const x = X(p.t);
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,.4)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(x, padT); ctx.lineTo(x, padT + H); ctx.stroke();
      ctx.restore();
      // 数据点
      const dot = (y, c) => {
        ctx.fillStyle = c;
        ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#000'; ctx.lineWidth = 1; ctx.stroke();
      };
      dot(Yb(p.credits), '#facc15');
      if (hasFlow && p.income != null) {
        dot(Yf(p.income), '#4ade80');
        dot(Yf(p.expense), '#f87171');
      }
      // tooltip
      this._showTip(x, padT + 8, p, hasFlow);
    } else {
      this._hideTip();
    }

    // —— 图例行（当前值） ——
    const last = pts[pts.length - 1];
    this._renderLegendRow({ last, hasFlow });
  }

  /* ================= 分类堆叠图 =================
   * 把 30 分钟按 1 分钟分桶，每桶内 4 个分类的净收支（收入−支出）
   * 取均值，正值向上堆、负值向下堆。一眼看出“钱从哪来、到哪去”。 */
  _drawStacked() {
    const cv = this._chartEl;
    if (!cv) return;
    const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
    const cssW = cv.clientWidth || 300;
    const cssH = 170;
    if (cv.width !== Math.round(cssW * dpr) || cv.height !== Math.round(cssH * dpr)) {
      cv.width = Math.round(cssW * dpr);
      cv.height = Math.round(cssH * dpr);
    }
    const ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);
    this._hideTip();

    const now = Date.now();
    const WIN = 30 * 60 * 1000;
    const data = this._catHist.filter(p => p.t >= now - WIN);
    const CATS = this._stackCats();
    if (data.length < 2 || !data.some(p => p.cats && Object.keys(p.cats).length)) {
      ctx.fillStyle = 'rgba(245,232,220,.55)';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🧱 分类数据收集中…（需要经济系统提供明细）', cssW / 2, cssH / 2);
      ctx.textAlign = 'left';
      this._renderStackLegend(null);
      return;
    }

    // —— 按分钟分桶（30 桶），桶内取均值 ——
    const NB = 30;
    const t0 = now - WIN;
    const buckets = [];
    for (let i = 0; i < NB; i++) buckets.push({ n: 0, vals: null });
    for (const p of data) {
      const bi = Math.min(NB - 1, Math.max(0, Math.floor(((p.t - t0) / WIN) * NB)));
      const b = buckets[bi];
      if (!b.vals) {
        b.vals = {};
        for (const c of CATS) b.vals[c.key] = 0;
      }
      for (const c of CATS) {
        const s = p.cats && p.cats[c.key];
        b.vals[c.key] += s ? ((Number(s.i) || 0) - (Number(s.e) || 0)) : 0;
      }
      b.n++;
    }
    const nets = buckets.map(b => {
      if (!b.n) return null;
      const o = {};
      for (const c of CATS) o[c.key] = b.vals[c.key] / b.n;
      return o;
    });

    // —— y 域：正堆叠峰 / 负堆叠谷 ——
    let posMax = 0, negMin = 0;
    for (const n of nets) {
      if (!n) continue;
      let pp = 0, nn = 0;
      for (const c of CATS) {
        const v = n[c.key] || 0;
        if (v >= 0) pp += v; else nn += v;
      }
      posMax = Math.max(posMax, pp);
      negMin = Math.min(negMin, nn);
    }
    if (posMax === 0 && negMin === 0) { posMax = 1; negMin = -1; }
    const ticks = this._niceTicks(negMin, posMax, 5);

    const padL = 40, padR = 10, padT = 10, padB = 22;
    const W = cssW - padL - padR, H = cssH - padT - padB;
    const Y = (v) => padT + H - ((v - ticks.lo) / Math.max(1e-9, ticks.hi - ticks.lo)) * H;
    const bw = W / NB;

    // —— 网格 + y 轴 ——
    ctx.font = '10px sans-serif';
    for (const tv of ticks.ticks) {
      const y = Y(tv);
      ctx.strokeStyle = tv === 0 ? 'rgba(255,255,255,.35)' : 'rgba(255,255,255,.08)';
      ctx.lineWidth = tv === 0 ? 1.5 : 1;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(cssW - padR, y); ctx.stroke();
      ctx.fillStyle = 'rgba(245,232,220,.6)';
      ctx.textAlign = 'right';
      ctx.fillText(this._shortNum(tv), padL - 4, y + 3);
    }
    ctx.textAlign = 'left';

    // —— 堆叠柱 ——
    for (let i = 0; i < NB; i++) {
      const n = nets[i];
      if (!n) continue;
      const x = padL + i * bw;
      let accPos = 0, accNeg = 0;
      for (const c of CATS) {
        const v = n[c.key] || 0;
        if (v > 0.001) {
          const yBot = Y(accPos), yTop = Y(accPos + v);
          ctx.fillStyle = c.color;
          ctx.globalAlpha = 0.88;
          ctx.fillRect(x + 1, yTop, Math.max(1, bw - 2), Math.max(1, yBot - yTop));
          ctx.globalAlpha = 1;
          accPos += v;
        } else if (v < -0.001) {
          const yTop = Y(accNeg), yBot = Y(accNeg + v);
          ctx.fillStyle = c.color;
          ctx.globalAlpha = 0.88;
          ctx.fillRect(x + 1, yTop, Math.max(1, bw - 2), Math.max(1, yBot - yTop));
          ctx.globalAlpha = 1;
          accNeg += v;
        }
      }
    }

    // —— x 轴 ——
    ctx.fillStyle = 'rgba(245,232,220,.5)';
    ctx.textAlign = 'center';
    const marks = [
      { x: padL, label: '-30分' },
      { x: padL + W / 3, label: '-20分' },
      { x: padL + (2 * W) / 3, label: '-10分' },
      { x: padL + W, label: '现在' },
    ];
    for (const m of marks) ctx.fillText(m.label, m.x, cssH - 6);
    ctx.textAlign = 'left';

    // —— 图例：各分类最新一桶净值 ——
    let latest = null;
    for (let i = NB - 1; i >= 0; i--) {
      if (nets[i]) { latest = nets[i]; break; }
    }
    this._renderStackLegend(latest);
  }

  /** 堆叠图图例行。 */
  _renderStackLegend(latest) {
    const el = this._panelEl && this._panelEl.querySelector('#v20-eco-legend');
    if (!el) return;
    if (!latest) { el.innerHTML = ''; return; }
    let html = '';
    for (const c of this._stackCats()) {
      const v = latest[c.key] || 0;
      html += `<span><span class="v20-dot" style="background:${c.color}"></span>${c.name} ${v20_fmtSigned(v)}</span>`;
    }
    html += '<span style="opacity:.55">每柱=1分钟均值</span>';
    el.innerHTML = html;
  }

  /** 图例行：各系列当前值。 */
  _renderLegendRow(info) {
    const el = this._panelEl && this._panelEl.querySelector('#v20-eco-legend');
    if (!el) return;
    if (!info) { el.innerHTML = ''; return; }
    const { last, hasFlow } = info;
    let html = `<span><span class="v20-dot" style="background:#facc15"></span>余额 ${v20_fmtNum(last.credits)}</span>`;
    if (hasFlow && last.income != null) {
      html += `<span><span class="v20-dot" style="background:#4ade80"></span>收入 ${v20_fmtSigned(last.income)}/分</span>`;
      html += `<span><span class="v20-dot" style="background:#f87171"></span>支出 ${v20_fmtSigned(-Math.abs(last.expense))}/分</span>`;
    } else {
      html += `<span style="opacity:.55">收入/支出线：系统未提供费率</span>`;
    }
    el.innerHTML = html;
  }

  /** hover tooltip 显示。 */
  _showTip(x, y, p, hasFlow) {
    const tip = this._tipEl;
    if (!tip) return;
    const d = new Date(p.t);
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    let html = `${hh}:${mm} 余额 ${v20_fmtNum(p.credits)}`;
    if (hasFlow && p.income != null) {
      html += `<br>收入 ${v20_fmtSigned(p.income)}/分 · 支出 ${v20_fmtSigned(-Math.abs(p.expense))}/分`;
    }
    tip.innerHTML = html;
    tip.style.display = 'block';
    // 防止溢出右边界
    tip.style.left = Math.min(x + 10, 220) + 'px';
    tip.style.top = y + 'px';
  }

  _hideTip() {
    if (this._tipEl) this._tipEl.style.display = 'none';
  }

  /** hover 绑定：mousemove 找最近采样点。 */
  _bindChartHover() {
    const cv = this._chartEl;
    if (!cv) return;
    cv.addEventListener('mousemove', (e) => {
      const rect = cv.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const now = Date.now(), WIN = 30 * 60 * 1000, t0 = now - WIN;
      const padL = 40, padR = 36;
      const W = rect.width - padL - padR;
      if (W <= 0) return;
      const t = t0 + ((mx - padL) / W) * WIN;
      const pts = this._hist.filter(p => p.t >= t0);
      let best = -1, bestD = Infinity;
      for (let i = 0; i < pts.length; i++) {
        const d = Math.abs(pts[i].t - t);
        if (d < bestD) { bestD = d; best = i; }
      }
      // 注意：_drawChart 里用的是过滤后的 pts，这里保持一致用索引映射
      this._hoverIdx = best;
      this._drawChart();
    });
    cv.addEventListener('mouseleave', () => {
      this._hoverIdx = -1;
      this._drawChart();
    });
    // 触屏：点按查看
    cv.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      const rect = cv.getBoundingClientRect();
      const mx = t.clientX - rect.left;
      const now = Date.now(), WIN = 30 * 60 * 1000, t0 = now - WIN;
      const padL = 40, padR = 36;
      const W = rect.width - padL - padR;
      if (W <= 0) return;
      const tt = t0 + ((mx - padL) / W) * WIN;
      const pts = this._hist.filter(p => p.t >= t0);
      let best = -1, bestD = Infinity;
      for (let i = 0; i < pts.length; i++) {
        const d = Math.abs(pts[i].t - tt);
        if (d < bestD) { bestD = d; best = i; }
      }
      this._hoverIdx = best;
      this._drawChart();
    }, { passive: true });
  }

  // ================= render 主流程 =================

  /** render()：刷新面板全部内容（大数字/曲线/明细/滑杆/破产横幅）。 */
  render() {
    if (!this._panelEl || !this._open) return;
    const sys = this._sys();
    // —— 大数字：当前星币 ——
    const credits = this._credits();
    const numEl = this._panelEl.querySelector('#v20-eco-credits');
    if (numEl) {
      numEl.querySelector('.v20-eco-num').textContent = v20_fmtNum(credits);
      numEl.classList.toggle('negative', credits < 0);
    }
    // —— 流速三数 ——
    v20_try('eco_flow', () => this._renderFlowStats(), null);
    // —— 破产横幅 ——
    this._renderBankrupt(credits);
    // —— 收支曲线 ——
    v20_try('eco_chart', () => this._drawChart(), null);
    // —— 明细表 ——
    v20_try('eco_table', () => this._renderTable(), null);
    // —— 财政健康度 + 预测 ——
    v20_try('eco_health', () => this._renderHealth(), null);
    // —— 财政简报（一句话总结） ——
    v20_try('eco_brief', () => this._renderBrief(), null);
    // —— 存钱目标 ——
    v20_try('eco_goal', () => this._renderGoal(), null);
    // —— 调整历史 ——
    v20_try('eco_adj', () => this._renderAdj(), null);
    // —— 滑杆极端值警告 ——
    v20_try('eco_warn', () => this._renderSliderWarn(), null);
    // —— 滑杆同步（拖动中不覆盖） ——
    v20_try('eco_sliders', () => this._syncSliders(), null);
  }

  /** 破产警告横幅。 */
  _renderBankrupt(credits) {
    const el = this._panelEl && this._panelEl.querySelector('#v20-eco-bankrupt');
    if (!el) return;
    const bad = this._isBankrupt();
    if (!bad) {
      el.classList.remove('show');
      return;
    }
    el.classList.add('show');
    el.innerHTML =
      `⚠️ <b>破产警告</b>：星币 ${v20_fmtNum(credits)}！` +
      `建议：① 提高税率增加税收 ② 降低工资减少支出 ③ 用贸易站卖资源回血。` +
      `破产期间建筑维护可能停滞。`;
  }

  /** 明细表：税收/工资/维护费/贸易 四项收入支出。 */
  _renderTable() {
    const tb = this._panelEl && this._panelEl.querySelector('#v20-eco-table tbody');
    if (!tb) return;
    const sys = this._sys();
    let bd = { rows: [], total: { income: 0, expense: 0 } };
    if (sys && typeof sys.breakdown === 'function') {
      bd = this._normalizeBreakdown(v20_try('eco_bd_call', () => sys.breakdown(), null));
    }
    if (!bd.rows.length) {
      tb.innerHTML = `<tr><td colspan="4" style="text-align:center;opacity:.55">
        暂无明细（经济系统未提供 breakdown）</td></tr>`;
      return;
    }
    let html = '';
    for (const r of bd.rows) {
      const net = r.income - r.expense;
      // 收支对比条：绿=收入占比，红=支出占比
      const tot = r.income + Math.abs(r.expense);
      const inW = tot > 0 ? (r.income / tot) * 100 : 0;
      const outW = tot > 0 ? (Math.abs(r.expense) / tot) * 100 : 0;
      html += `<tr>
        <td>${r.name}<div class="v20-bar"><div class="v20-bar-in" style="width:${inW.toFixed(1)}%"></div><div class="v20-bar-out" style="width:${outW.toFixed(1)}%"></div></div></td>
        <td class="pos">${v20_fmtSigned(r.income)}</td>
        <td class="neg">${v20_fmtSigned(-Math.abs(r.expense))}</td>
        <td class="${net >= 0 ? 'pos' : 'neg'}">${v20_fmtSigned(net)}</td>
      </tr>`;
    }
    const tnet = bd.total.income - bd.total.expense;
    html += `<tr style="font-weight:bold;border-top:1px solid #4a352a">
      <td>合计</td>
      <td class="pos">${v20_fmtSigned(bd.total.income)}</td>
      <td class="neg">${v20_fmtSigned(-Math.abs(bd.total.expense))}</td>
      <td class="${tnet >= 0 ? 'pos' : 'neg'}">${v20_fmtSigned(tnet)}</td>
    </tr>`;
    tb.innerHTML = html;
  }

  // ================= 税率 / 工资滑杆 =================

  /** 绑定滑杆事件（只绑一次）。 */
  _bindSliders() {
    const tax = this._panelEl && this._panelEl.querySelector('#v20-eco-tax');
    const wage = this._panelEl && this._panelEl.querySelector('#v20-eco-wage');
    if (tax) {
      tax.addEventListener('pointerdown', () => { this._dragging = 'tax'; });
      tax.addEventListener('pointerup', () => { this._dragging = null; });
      tax.addEventListener('input', () => {
        const v = Number(tax.value) || 0;
        this._setTaxLabel(v);
        const sys = this._sys();
        if (sys && typeof sys.setTaxRate === 'function') {
          v20_try('eco_set_tax', () => sys.setTaxRate(v20_clamp(v, 0, 30) / 100), null);
        }
        const g = this.game;
        if (g && typeof g.toast === 'function' && (v === 0 || v === 30)) {
          g.toast(v === 0 ? '🏛️ 税率 0%：免税刺激增长' : '🏛️ 税率 30%：税收拉满，注意民心');
        }
      });
      // change（松手确认）时记一条调整历史
      tax.addEventListener('change', () => {
        const v = Number(tax.value) || 0;
        this._recordAdj('税率', this._lastTaxCommitted, v, '%');
        this._lastTaxCommitted = v;
      });
    }
    if (wage) {
      wage.addEventListener('pointerdown', () => { this._dragging = 'wage'; });
      wage.addEventListener('pointerup', () => { this._dragging = null; });
      wage.addEventListener('input', () => {
        const v = Number(wage.value) || 0;
        this._setWageLabel(v);
        const sys = this._sys();
        if (sys && typeof sys.setWageLevel === 'function') {
          v20_try('eco_set_wage', () => sys.setWageLevel(v20_clamp(v, 0, 200) / 100), null);
        } else if (sys && typeof sys.setWage === 'function') {
          // 兼容别名 setWage
          v20_try('eco_set_wage2', () => sys.setWage(v20_clamp(v, 0, 200) / 100), null);
        }
      });
      wage.addEventListener('change', () => {
        const v = Number(wage.value) || 0;
        this._recordAdj('工资', this._lastWageCommitted, v, '%');
        this._lastWageCommitted = v;
      });
    }
  }

  _setTaxLabel(v) {
    const el = this._panelEl && this._panelEl.querySelector('#v20-eco-tax-val');
    if (el) el.textContent = `${v}%`;
  }

  _setWageLabel(v) {
    const el = this._panelEl && this._panelEl.querySelector('#v20-eco-wage-val');
    if (el) el.textContent = `${v}%`;
  }

  /** 从系统回读税率/工资，同步滑杆（拖动中不覆盖，避免打架）。 */
  _syncSliders() {
    const sys = this._sys();
    if (!sys) return;
    const tax = this._panelEl.querySelector('#v20-eco-tax');
    const wage = this._panelEl.querySelector('#v20-eco-wage');
    v20_try('eco_sync_tax', () => {
      let r = null;
      if (typeof sys.getTaxRate === 'function') r = Number(sys.getTaxRate());
      else if (typeof sys.taxRate === 'number') r = sys.taxRate;
      if (r != null && isFinite(r)) {
        const pct = Math.round(v20_clamp(r, 0, 0.3) * 100);
        this._setTaxLabel(pct);
        if (this._dragging !== 'tax' && tax) tax.value = String(pct);
        if (this._lastTaxCommitted == null) this._lastTaxCommitted = pct;
      }
    }, null);
    v20_try('eco_sync_wage', () => {
      let w = null;
      if (typeof sys.getWageLevel === 'function') w = Number(sys.getWageLevel());
      else if (typeof sys.getWage === 'function') w = Number(sys.getWage());
      else if (typeof sys.wageLevel === 'number') w = sys.wageLevel;
      if (w != null && isFinite(w)) {
        const pct = Math.round(v20_clamp(w, 0, 2) * 100);
        this._setWageLabel(pct);
        if (this._dragging !== 'wage' && wage) wage.value = String(pct);
        if (this._lastWageCommitted == null) this._lastWageCommitted = pct;
      }
    }, null);
  }
  /** 记录一次调整（change 事件触发，即松手/点按确认时）。 */
  _recordAdj(kind, from, to, unit) {
    if (from == null || from === to) return;
    this._adjHist.unshift({ t: Date.now(), kind, from, to, unit: unit || '' });
    if (this._adjHist.length > 8) this._adjHist.length = 8;
    v20_try('eco_adj_render', () => this._renderAdj(), null);
  }

  /** 渲染调整历史（最近 8 条）。 */
  _renderAdj() {
    const el = this._panelEl && this._panelEl.querySelector('#v20-eco-adj-list');
    if (!el) return;
    if (!this._adjHist.length) {
      el.innerHTML = '<div style="opacity:.55">暂无调整记录</div>';
      return;
    }
    el.innerHTML = this._adjHist.map(a => {
      const d = new Date(a.t);
      const ts = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      const dir = a.to > a.from ? '▲' : a.to < a.from ? '▼' : '—';
      return `<div>${a.kind} ${a.from}${a.unit} → <b>${a.to}${a.unit}</b> ${dir} ` +
        `<span class="v20-adj-time">${ts}</span></div>`;
    }).join('');
  }

  /** 预设按钮：点一下 = 滑杆跳到预设值并触发 input（走正常设置流程）。 */  _bindPresets() {
    const p = this._panelEl;
    if (!p) return;
    const wire = (boxId, inputId) => {
      const box = p.querySelector('#' + boxId);
      const input = p.querySelector('#' + inputId);
      if (!box || !input) return;
      box.addEventListener('click', (e) => {
        const b = e.target && e.target.closest ? e.target.closest('button[data-preset]') : null;
        if (!b) return;
        input.value = b.dataset.preset;
        // 触发 input 事件，复用滑杆的设置逻辑（含 toast 与系统调用）
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
    };
    wire('v20-eco-presets-tax', 'v20-eco-tax');
    wire('v20-eco-presets-wage', 'v20-eco-wage');
  }

  /** 流速三数：收入/支出/净（每分钟）。 */
  _renderFlowStats() {
    const p = this._panelEl;
    if (!p) return;
    const r = this._getRates();
    const inEl = p.querySelector('#v20-eco-flow-in');
    const outEl = p.querySelector('#v20-eco-flow-out');
    const netEl = p.querySelector('#v20-eco-flow-net');
    if (!inEl || !outEl || !netEl) return;
    if (!r) {
      inEl.textContent = '—';
      outEl.textContent = '—';
      netEl.textContent = '—';
      netEl.className = '';
      return;
    }
    const net = r.income - r.expense;
    // 与 10 分钟前对比（▲升 ▼降 ━持平）
    let ago = null;
    const nowMs = Date.now();
    for (let i = this._hist.length - 1; i >= 0; i--) {
      const p = this._hist[i];
      if (p.t <= nowMs - 10 * 60 * 1000 && p.income != null && p.expense != null) { ago = p; break; }
    }
    const arrow = (cur, old) => {
      if (old == null || !isFinite(old)) return '';
      const d = cur - old;
      if (Math.abs(d) < 0.005) return ' ━';
      return d > 0 ? ' ▲' : ' ▼';
    };
    inEl.textContent = v20_fmtSigned(r.income) + (ago ? arrow(r.income, ago.income) : '');
    outEl.textContent = v20_fmtSigned(-Math.abs(r.expense)) + (ago ? arrow(-Math.abs(r.expense), -Math.abs(ago.expense)) : '');
    const agoNet = ago ? ago.income - ago.expense : null;
    netEl.textContent = v20_fmtSigned(net) + (agoNet != null ? arrow(net, agoNet) : '');
    netEl.className = net >= 0 ? 'pos' : 'neg';
  }

  /** 存钱目标：设定/进度/达成检测（localStorage 持久化）。 */
  _goalKey() { return 'starport-v20-eco-goal'; }

  _loadGoal() {
    try {
      const v = Number(localStorage.getItem(this._goalKey()));
      return v > 0 ? v : 0;
    } catch (e) { return 0; }
  }

  _saveGoal(v) {
    try {
      if (v > 0) localStorage.setItem(this._goalKey(), String(v));
      else localStorage.removeItem(this._goalKey());
    } catch (e) {}
  }

  _bindGoal() {
    const p = this._panelEl;
    if (!p) return;
    const input = p.querySelector('#v20-eco-goal-input');
    const btn = p.querySelector('#v20-eco-goal-set');
    if (!input || !btn) return;
    const cur = this._loadGoal();
    if (cur > 0) input.value = String(cur);
    btn.addEventListener('click', () => {
      const v = Math.floor(Number(input.value) || 0);
      const g = this.game;
      if (v <= 0) {
        this._saveGoal(0);
        this._goalDone = false;
        if (g && typeof g.toast === 'function') g.toast('🎯 已清除存钱目标');
      } else {
        this._saveGoal(v);
        this._goalDone = false;
        if (g && typeof g.toast === 'function') g.toast(`🎯 目标设定：${v20_fmtNum(v)} 星币，加油！`);
      }
      this._renderGoal();
    });
    // 回车同样设定
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') btn.click();
    });
  }

  _renderGoal() {
    const p = this._panelEl;
    if (!p) return;
    const goal = this._loadGoal();
    const textEl = p.querySelector('#v20-eco-goal-text');
    const fillEl = p.querySelector('#v20-eco-goal-fill');
    if (!textEl || !fillEl) return;
    if (goal <= 0) {
      textEl.textContent = '未设定';
      fillEl.style.width = '0%';
      return;
    }
    const credits = this._credits();
    const pct = v20_clamp((credits / goal) * 100, 0, 100);
    textEl.textContent = `${v20_fmtNum(credits)} / ${v20_fmtNum(goal)}`;
    fillEl.style.width = pct + '%';
    // 达成检测（只庆祝一次，直到目标被改掉）
    if (credits >= goal && !this._goalDone) {
      this._goalDone = true;
      const g = this.game;
      if (g && typeof g.toast === 'function') {
        g.toast(`🎉 存钱目标达成！${v20_fmtNum(goal)} 星币到手！`);
      }
      if (g && g.sound && typeof g.sound.victory === 'function') {
        v20_try('eco_goal_sound', () => g.sound.victory(), null);
      }
    } else if (credits < goal) {
      this._goalDone = false; // 掉回去后可再次庆祝
    }
  }

  /** 读工资倍率，读不到返回 null。 */
  _getWageLevel() {
    const sys = this._sys();
    if (!sys) return null;
    return v20_try('eco_wage_get', () => {
      if (typeof sys.getWageLevel === 'function') {
        const w = Number(sys.getWageLevel());
        return isFinite(w) ? w : null;
      }
      if (typeof sys.getWage === 'function') {
        const w = Number(sys.getWage());
        return isFinite(w) ? w : null;
      }
      if (typeof sys.wageLevel === 'number') return sys.wageLevel;
      return null;
    }, null);
  }

  /** 滑杆极端值警告：税率/工资超出合理区间时提醒。 */
  _renderSliderWarn() {
    const el = this._panelEl && this._panelEl.querySelector('#v20-eco-slider-warn');
    if (!el) return;
    const warns = [];
    const tax = this._getTaxRate();
    if (tax != null) {
      if (tax > 0.2) warns.push('⚠️ 税率超过 20%，可能拖慢人口增长');
      else if (tax <= 0) warns.push('💡 零税率：国库只靠贸易，小心坐吃山空');
    }
    const wage = this._getWageLevel();
    if (wage != null) {
      if (wage < 0.5) warns.push('⚠️ 工资不足 50%，人口满意度可能下降');
      else if (wage > 1.5) warns.push('⚠️ 工资超过 150%，支出压力大');
    }
    el.innerHTML = warns.join('<br>');
    el.style.display = warns.length ? 'block' : 'none';
  }

  /** 财政简报：用一句话总结当前财政状况（数字全部来自真实采样）。 */
  _renderBrief() {
    const el = this._panelEl && this._panelEl.querySelector('#v20-eco-brief');
    if (!el) return;
    const credits = this._credits();
    const rates = this._getRates();
    const parts = [`当前星币 ${v20_fmtNum(credits)}`];
    if (rates) {
      const net = rates.income - rates.expense;
      parts.push(net >= 0 ? `每分钟净赚 ${v20_fmtNum(net)}` : `每分钟净亏 ${v20_fmtNum(-net)}`);
    } else {
      parts.push('费率采集中');
    }
    const h = v20_try('eco_brief_h', () => this._computeHealth(), null);
    if (h && h.score != null) {
      parts.push(`健康度 ${h.score} 分`);
      const sorted = h.factors.slice().sort((a, b) => (a.score / a.max) - (b.score / b.max));
      const worst = sorted[0];
      if (worst && worst.score / worst.max < 0.6) {
        parts.push(`短板是「${worst.name}」${worst.desc ? '（' + worst.desc + '）' : ''}`);
      }
    }
    const bd = this._getBreakdown();
    if (bd && bd.rows.length) {
      const top = bd.rows.slice().sort((a, b) => b.income - a.income)[0];
      if (top && top.income > 0) parts.push(`最大收入来源是${top.name}`);
      const topOut = bd.rows.slice().sort((a, b) => b.expense - a.expense)[0];
      if (topOut && topOut.expense > 0) parts.push(`最大支出是${topOut.name}`);
    }
    el.innerHTML = '📝 ' + parts.join('，') + '。';
  }

  /** 取经济摘要（供外部模块用）：{credits, rates, health, bankrupt}。 */
  getSummary() {
    const rates = this._getRates();
    const h = v20_try('eco_sum_h', () => this._computeHealth(), null);
    return {
      credits: this._credits(),
      rates,
      health: h && h.score,
      bankrupt: this._isBankrupt(),
      historyPoints: this._hist.length,
    };
  }

  /** 导出当前图表为 PNG。 */
  _exportChartPNG() {
    const cv = this._chartEl;
    const g = this.game;
    const toast = (m) => { if (g && typeof g.toast === 'function') g.toast(m); };
    if (!cv) { toast('📷 图表尚未绘制'); return; }
    v20_try('eco_png', () => {
      const a = document.createElement('a');
      a.href = cv.toDataURL('image/png');
      a.download = `starport-economy-${this._chartTab}.png`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => a.remove(), 800);
      toast('📷 图表已导出 PNG');
    }, null);
  }

  /** 导出 30 分钟收支 CSV（BOM 保证 Excel 中文不乱码）。 */
  _exportCSV() {
    const g = this.game;
    const toast = (m) => { if (g && typeof g.toast === 'function') g.toast(m); };
    if (!this._hist.length) { toast('📥 暂无数据可导出'); return; }
    const pad2 = (n) => String(n).padStart(2, '0');
    // 分类快照按时间就近匹配（20 秒内）
    const catByT = (t) => {
      let best = null, bestD = Infinity;
      for (const c of this._catHist) {
        const d = Math.abs(c.t - t);
        if (d < bestD) { bestD = d; best = c; }
      }
      return best && bestD < 20000 ? best.cats : {};
    };
    const catNet = (cats, k) => {
      const c = cats[k];
      return c ? ((Number(c.i) || 0) - (Number(c.e) || 0)) : '';
    };
    const rows = ['time,credits,income_per_min,expense_per_min,tax_net,wage_net,maint_net,trade_net'];
    for (const h of this._hist) {
      const d = new Date(h.t);
      const ts = `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())} ` +
        `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
      const cats = catByT(h.t);
      rows.push(`${ts},${h.credits},${h.income == null ? '' : h.income},${h.expense == null ? '' : h.expense},` +
        `${catNet(cats, 'tax')},${catNet(cats, 'wage')},${catNet(cats, 'maint')},${catNet(cats, 'trade')}`);
    }
    v20_try('eco_csv_blob', () => {
      const blob = new Blob(['\ufeff' + rows.join('\n')], { type: 'text/csv;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'starport-economy.csv';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { try { URL.revokeObjectURL(a.href); } catch (e) {} a.remove(); }, 800);
      toast(`📥 已导出 ${this._hist.length} 条记录`);
    }, null);
  }

  // ================= 财政健康度 =================
  /* 评分模型（0–100，缺数据项自动剔除并重归一）：
   *   净收支 40 分：净 ≥0 满分，每 -5/分扣 1 分；
   *   资金缓冲 30 分：当前星币可支撑的支出分钟数，30 分钟=满分；
   *   税率合理 15 分：5%–20% 满分，0% 给 8 分，过高线性扣；
   *   收入多样性 15 分：有收入的明细项 0–4 项 → 0/4/7/11/15。 */

  /** 读费率 {income, expense}（每分钟），多形状兼容。 */
  _getRates() {
    const sys = this._sys();
    if (!sys) return null;
    return v20_try('eco_rates_get', () => {
      if (typeof sys.getIncomeRate === 'function' && typeof sys.getExpenseRate === 'function') {
        return {
          income: Number(sys.getIncomeRate()) || 0,
          expense: Number(sys.getExpenseRate()) || 0,
        };
      }
      if (typeof sys.incomeRate === 'number') {
        return { income: sys.incomeRate, expense: Number(sys.expenseRate) || 0 };
      }
      const last = this._hist[this._hist.length - 1];
      if (last && last.income != null && last.expense != null) {
        return { income: last.income, expense: last.expense };
      }
      return null;
    }, null);
  }

  /** 读税率（0–0.3），读不到返回 null。 */
  _getTaxRate() {
    const sys = this._sys();
    if (!sys) return null;
    return v20_try('eco_tax_get', () => {
      if (typeof sys.getTaxRate === 'function') {
        const r = Number(sys.getTaxRate());
        return isFinite(r) ? r : null;
      }
      if (typeof sys.taxRate === 'number') return sys.taxRate;
      return null;
    }, null);
  }

  /** 读明细（归一化后），读不到返回 null。 */
  _getBreakdown() {
    const sys = this._sys();
    if (!sys || typeof sys.breakdown !== 'function') return null;
    const raw = v20_try('eco_bd_get', () => sys.breakdown(), null);
    if (!raw) return null;
    return this._normalizeBreakdown(raw);
  }

  /** 计算健康度 {score|null, factors:[{name,score,max,desc}]}。 */
  _computeHealth() {
    const factors = [];
    let total = 0, maxTotal = 0;
    // 1) 净收支 40 分
    const rates = this._getRates();
    if (rates) {
      maxTotal += 40;
      const net = rates.income - rates.expense;
      const s = v20_clamp(40 + net / 5, 0, 40);
      factors.push({ name: '净收支', score: Math.round(s), max: 40, desc: `${v20_fmtSigned(net)}/分` });
      total += s;
    }
    // 2) 资金缓冲 30 分
    if (rates) {
      maxTotal += 30;
      if (rates.expense > 0.001) {
        const bufMin = this._credits() / rates.expense;
        const s = v20_clamp(bufMin, 0, 30);
        factors.push({
          name: '资金缓冲', score: Math.round(s), max: 30,
          desc: bufMin >= 999 ? '可撑 999+ 分钟' : `可撑 ${Math.max(0, Math.round(bufMin))} 分钟`,
        });
        total += s;
      } else {
        factors.push({ name: '资金缓冲', score: 30, max: 30, desc: '零支出' });
        total += 30;
      }
    }
    // 3) 税率合理 15 分
    const tax = this._getTaxRate();
    if (tax != null) {
      maxTotal += 15;
      let s;
      if (tax >= 0.05 && tax <= 0.20) s = 15;
      else if (tax < 0.05) s = 8 + tax * 140;
      else s = 15 - (tax - 0.20) * 150;
      s = v20_clamp(s, 0, 15);
      factors.push({ name: '税率', score: Math.round(s), max: 15, desc: `${Math.round(tax * 100)}%` });
      total += s;
    }
    // 4) 收入多样性 15 分
    const bd = this._getBreakdown();
    if (bd && bd.rows.length) {
      maxTotal += 15;
      const n = bd.rows.filter(r => r.income > 0).length;
      const table = [0, 4, 7, 11, 15];
      const s = table[Math.min(4, n)];
      factors.push({ name: '收入来源', score: s, max: 15, desc: `${n} 项有收入` });
      total += s;
    }
    return {
      score: maxTotal ? Math.round((total / maxTotal) * 100) : null,
      factors,
    };
  }

  /** 渲染健康度区块。 */
  _renderHealth() {
    const p = this._panelEl;
    if (!p) return;
    const scoreEl = p.querySelector('#v20-eco-health-score');
    const fillEl = p.querySelector('#v20-eco-health-fill');
    const fEl = p.querySelector('#v20-eco-health-factors');
    if (!scoreEl || !fillEl || !fEl) return;
    const h = v20_try('eco_health', () => this._computeHealth(), { score: null, factors: [] });
    if (h.score == null) {
      scoreEl.textContent = '—';
      scoreEl.style.color = '';
      fillEl.style.width = '0%';
      fEl.innerHTML = '<div style="opacity:.6">数据不足：等待经济系统提供费率</div>';
    } else {
      const color = h.score >= 70 ? '#4ade80' : h.score >= 40 ? '#fbbf24' : '#f87171';
      scoreEl.textContent = h.score + '分';
      scoreEl.style.color = color;
      fillEl.style.width = h.score + '%';
      fillEl.style.background = color;
      fEl.innerHTML = h.factors.map(f =>
        `<div class="frow"><span>${f.name}（${f.desc}）</span><span>${f.score}/${f.max}</span></div>`
      ).join('');
    }
    this._renderProjection();
  }

  /** 分钟数 → “约 X 分钟 / X 小时 / X 天”。 */
  _fmtDuration(mins) {
    if (!isFinite(mins) || mins < 0) return '—';
    if (mins < 1) return '不到 1 分钟';
    if (mins < 60) return `约 ${Math.round(mins)} 分钟`;
    const h = Math.floor(mins / 60);
    const m = Math.round(mins % 60);
    if (h < 48) return `约 ${h} 小时${m ? m + ' 分' : ''}`;
    return `约 ${Math.round(h / 24)} 天`;
  }

  /** 收支预测：破产倒计时 / 翻倍预测 / 平衡。 */
  _renderProjection() {
    const p = this._panelEl;
    const el = p && p.querySelector('#v20-eco-projection');
    if (!el) return;
    const rates = this._getRates();
    const credits = this._credits();
    let html;
    if (!rates) {
      html = '🔮 暂无费率数据，无法预测';
    } else {
      const net = rates.income - rates.expense;
      if (net < -0.01 && credits > 0) {
        html = `⚠️ 按净支出 <b>${v20_fmtSigned(net)}/分</b>，约 <b>${this._fmtDuration(credits / -net)}</b> 后破产`;
      } else if (net > 0.01 && credits > 0) {
        html = `📈 按净收入 <b>+${v20_fmtNum(net)}/分</b>，约 <b>${this._fmtDuration(credits / net)}</b> 后星币翻倍`;
      } else if (credits <= 0) {
        html = `🔴 星币已见底！立即提高税率 / 降低工资 / 贸易回血`;
      } else {
        html = '⚖️ 收支基本平衡，财政稳健';
      }
    }
    el.innerHTML = html;
  }
} // class EconomyPanel 结束

// ============================ 第三部分：新系统交互教程 ============================
/* ----------------------------------------------------------------------------
 * TutorialsV20 — 电网 / 水管 / 交通 / 经济 四个交互教程。
 *
 * 每步 {id, title, text, hint, check(game), target(game)}：
 *   - check(game)：玩家完成该步动作后返回 true，自动进下一步。
 *   - target(game)：返回 {x,y} 格坐标（或 null），用于 highlightTile 脉冲框。
 *
 * 教程引用的新系统 API（由其他模块提供，全部防御式读取）：
 *   game.powergrid: { cables: Set|Map, connectedCount: number,
 *                     renderOverlay(ctx,map,tile,game) }
 *   game.waternet:  { pipes: Set|Map, connectedCount: number,
 *                     renderOverlay(ctx,map,tile,game) }
 *   game.transit:   { roadsBuilt: number, routesActive: number,
 *                     renderOverlay(ctx,map,tile,game) }
 *   game.economy:   见 EconomyPanel 头部注释。
 *
 * 系统未接入时的“降级判定”：check 里先判系统存在；不存在则用老系统数据做
 * 等价判定（如“铺 3 段电缆”降级为“拥有 2 座发电建筑”），注释中明确标注。
 * 这样教程在任何版本下都能走完，不会卡死。
 * ----------------------------------------------------------------------------
 */

/** 找第一座指定 id 的建筑（ids 可为数组）。 */
function v20_firstBuilding(game, ids) {
  const list = Array.isArray(ids) ? ids : [ids];
  const bs = v20_buildings(game);
  for (const b of bs) {
    if (b && list.includes(b.id)) return b;
  }
  return null;
}

/** 统计指定 id 的建筑数量。 */
function v20_countBuildings(game, ids) {
  const list = Array.isArray(ids) ? ids : [ids];
  let n = 0;
  for (const b of v20_buildings(game)) {
    if (b && list.includes(b.id)) n++;
  }
  return n;
}

/** 读“集合大小”（兼容 Set/Map/数组/数字）。 */
function v20_collSize(c) {
  if (c == null) return 0;
  if (typeof c === 'number') return c;
  if (typeof c.size === 'number') return c.size;
  if (typeof c.length === 'number') return c.length;
  return 0;
}

/** 当前覆盖层模式（经 game.v20.overlay，防御）。 */
function v20_overlayMode(game) {
  try {
    const ov = game && game.v20 && game.v20.overlay;
    if (ov && typeof ov.getMode === 'function') return ov.getMode();
  } catch (e) {}
  return null;
}

/** 全局电力盈余（发电 - 用电），读不到返回 null。 */
function v20_powerSurplus(game) {
  return v20_try('tut_surplus', () => {
    const bd = game && game.builder;
    if (!bd || typeof bd.totalPower !== 'function') return null;
    return (Number(bd.totalPower()) || 0) - (Number(bd.totalPowerUse()) || 0);
  }, null);
}

const TUTORIALS_V20 = {
  // ================= 电网教程（9 步） =================
  power: {
    title: '⚡ 电网教程',
    icon: '⚡',
    desc: '学会铺设电缆、联网供电，告别缺电',
    reward: { credits: 200, res: { iron: 30 }, text: '⚡ 电网教程完成！奖励：星币×200、铁矿×30' },
    checklist: ['全城无缺电红闪', '电力盈余保持 10%+', '至少 1 座发电建筑升到 2 级', '有核电站或 3 座太阳能兜底'],
    cheatsheet: ['太阳能板：铁矿×8，前期主力', '电力盈余保持 10%–20% 最经济', '2 级太阳能性价比高于新建', '核电站需要铀矿供应链', '快捷键 1 开/关电力覆盖层'],
    steps: [
      {
        id: 'p1', title: '👁️ 打开电力覆盖层',
        text: '按快捷键 1，或点右侧 ⚡ 按钮，打开电力覆盖层。金黄=发电，蓝色=用电，红色闪烁=缺电。',
        hint: '👆 按 1 或点右侧 ⚡ 按钮',
        check: (g) => v20_overlayMode(g) === 'power',
        target: () => null,
      },
      {
        id: 'p2', title: '🔆 建造发电建筑',
        text: '点底部「🔆太阳能」在空地上建一座太阳能板（铁矿×8）。它是你电网的起点。',
        hint: '👆 建 1 座太阳能板（或核电站）',
        check: (g) => v20_countBuildings(g, ['solar', 'nuclear']) >= 1,
        target: (g) => { const b = v20_firstBuilding(g, ['solar', 'nuclear']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'p3', title: '🔌 铺设 3 段电缆',
        text: '用电网工具从发电建筑向外铺 3 段电缆，把电力送出去。',
        hint: '👆 铺设 3 段电缆',
        // 降级判定：powergrid 未接入时，拥有 2 座发电建筑视为“需要联网”
        check: (g) => {
          const pg = v20_getSys(g, 'powergrid');
          if (pg) return v20_collSize(pg.cables) >= 3;
          return v20_countBuildings(g, ['solar', 'nuclear']) >= 2;
        },
        target: (g) => { const b = v20_firstBuilding(g, ['solar', 'nuclear']); return b ? { x: b.x + 1, y: b.y } : null; },
      },
      {
        id: 'p4', title: '🏭 接入用电建筑',
        text: '采矿机、冶炼厂、实验室都要耗电。建一座耗电建筑并让它连上电网。',
        hint: '👆 建 1 座耗电建筑（采矿机/冶炼厂/实验室）',
        check: (g) => {
          const pg = v20_getSys(g, 'powergrid');
          if (pg && typeof pg.connectedCount === 'number') return pg.connectedCount >= 1;
          return v20_countBuildings(g, ['miner', 'smelter', 'lab']) >= 1;
        },
        target: (g) => { const b = v20_firstBuilding(g, ['miner', 'smelter', 'lab']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'p5', title: '🔌 电缆铺到 5 段',
        text: '把电缆网扩大到 5 段，覆盖更多建筑。覆盖层里的金色虚线就是输电线路。',
        hint: '👆 电缆总数达到 5 段',
        check: (g) => {
          const pg = v20_getSys(g, 'powergrid');
          if (pg) return v20_collSize(pg.cables) >= 5;
          const s = v20_powerSurplus(g);
          return s != null && s > 0; // 降级：有盈余≈网已连通
        },
        target: (g) => { const b = v20_firstBuilding(g, ['miner', 'smelter']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'p6', title: '📈 实现电力盈余',
        text: '看覆盖层左上角：发电 ≥ 用电才算健康。缺口为红，赶紧补发电建筑！',
        hint: '👆 让发电量超过用电量',
        check: (g) => { const s = v20_powerSurplus(g); return s != null && s > 0; },
        target: (g) => { const b = v20_firstBuilding(g, ['solar', 'nuclear']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'p7', title: '⬆️ 升级发电建筑',
        text: '点一座太阳能板 → 升级到 2 级，发电量翻倍，比新建更省地。',
        hint: '👆 把 1 座发电建筑升到 2 级',
        check: (g) => v20_buildings(g).some(b => b && ['solar', 'nuclear'].includes(b.id) && (b.level || 1) >= 2),
        target: (g) => { const b = v20_firstBuilding(g, ['solar', 'nuclear']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'p8', title: '☢️ 建造核电站',
        text: '后期用电大户越来越多，建一座核电站（需科技）彻底解决电力焦虑。',
        hint: '👆 建 1 座核电站',
        // 降级：核电站未解锁时，拥有 3 座发电建筑视为完成
        check: (g) => {
          if (v20_countBuildings(g, ['nuclear']) >= 1) return true;
          return v20_countBuildings(g, ['solar', 'nuclear']) >= 3;
        },
        target: (g) => { const b = v20_firstBuilding(g, ['nuclear']) || v20_firstBuilding(g, ['solar']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'p9', title: '🎉 电网贯通！',
        text: '检查覆盖层：没有红色闪烁的格子，说明全城通电。电网教程完成！',
        hint: '👆 确认无缺电（或直接下一步领奖）',
        check: (g) => {
          const s = v20_powerSurplus(g);
          return s != null && s >= 0 && v20_countBuildings(g, ['solar', 'nuclear']) >= 2;
        },
        target: () => null,
      },
    ],
  },

  // ================= 水管教程（9 步） =================
  water: {
    title: '💧 水管教程',
    icon: '💧',
    desc: '学会铺设水管、保障供水，人口才能增长',
    reward: { credits: 200, res: { ice: 40 }, text: '💧 水管教程完成！奖励：星币×200、冰水×40' },
    checklist: ['供水无红闪、无覆盖外建筑', '水库存 ≥100', '双水源分开放置', '温室/居住舱都在供水蓝圈内'],
    cheatsheet: ['抽水机：人口×2，建在极地产量翻倍', '水库存安全线 100', '温室 1 座约供 10 人口食物', '双水源分开放置防灾难', '快捷键 2 开/关供水覆盖层'],
    steps: [
      {
        id: 'w1', title: '👁️ 打开供水覆盖层',
        text: '按快捷键 2，或点右侧 💧 按钮。蓝色=水源，绿色=用水建筑，红色闪烁=缺水。',
        hint: '👆 按 2 或点右侧 💧 按钮',
        check: (g) => v20_overlayMode(g) === 'water',
        target: () => null,
      },
      {
        id: 'w2', title: '💧 建造抽水机',
        text: '点底部「💧抽水机」在冰原/平地建一座（人口×2）。没有水，人口长不起来。',
        hint: '👆 建 1 座抽水机（或水厂）',
        check: (g) => v20_countBuildings(g, ['pump', 'waterplant']) >= 1,
        target: (g) => { const b = v20_firstBuilding(g, ['pump', 'waterplant']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'w3', title: '🔧 铺设 3 段水管',
        text: '用水管工具从水源向外铺 3 段水管，把水送到生活区。',
        hint: '👆 铺设 3 段水管',
        // 降级判定：waternet 未接入时，拥有 2 座水源建筑视为完成
        check: (g) => {
          const wn = v20_getSys(g, 'waternet');
          if (wn) return v20_collSize(wn.pipes) >= 3;
          return v20_countBuildings(g, ['pump', 'waterplant']) >= 2;
        },
        target: (g) => { const b = v20_firstBuilding(g, ['pump', 'waterplant']); return b ? { x: b.x + 1, y: b.y } : null; },
      },
      {
        id: 'w4', title: '🌾 接入温室',
        text: '温室种粮食要大量用水。建一座温室并让它连上水管，食物和水就都稳了。',
        hint: '👆 建 1 座温室',
        check: (g) => {
          const wn = v20_getSys(g, 'waternet');
          if (wn && typeof wn.connectedCount === 'number') return wn.connectedCount >= 1;
          return v20_countBuildings(g, ['greenhouse']) >= 1;
        },
        target: (g) => { const b = v20_firstBuilding(g, ['greenhouse']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'w5', title: '🏠 给居住区供水',
        text: '人口每长 1 口都要喝水。确保居住舱在供水覆盖圈（蓝色圈）内。',
        hint: '👆 拥有 2 座居住舱且有水源',
        check: (g) => v20_countBuildings(g, ['habitat']) >= 2 &&
          v20_countBuildings(g, ['pump', 'waterplant']) >= 1,
        target: (g) => { const b = v20_firstBuilding(g, ['habitat']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'w6', title: '📦 水库存破百',
        text: '看顶栏 💧 数字：把水库存攒到 100，应对沙尘暴等灾害减产。',
        hint: '👆 水库存 ≥ 100',
        check: (g) => v20_try('tut_water_stock', () =>
          (g.player && g.player.inv && Number(g.player.inv.water) || 0) >= 100, false),
        target: (g) => { const b = v20_firstBuilding(g, ['pump', 'waterplant']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'w7', title: '⬆️ 升级水厂',
        text: '点一座抽水机/水厂 → 升级到 2 级，产水量提升，覆盖更多建筑。',
        hint: '👆 把 1 座水源建筑升到 2 级',
        check: (g) => v20_buildings(g).some(b => b && ['pump', 'waterplant'].includes(b.id) && (b.level || 1) >= 2),
        target: (g) => { const b = v20_firstBuilding(g, ['pump', 'waterplant']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'w8', title: '🚰 建造第二水源',
        text: '单水源是单点故障。再建一座水源（或水厂），供水网更可靠。',
        hint: '👆 水源建筑达到 2 座',
        check: (g) => v20_countBuildings(g, ['pump', 'waterplant']) >= 2,
        target: (g) => { const b = v20_firstBuilding(g, ['pump', 'waterplant']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'w9', title: '🎉 供水无忧！',
        text: '覆盖层无红色闪烁、水库存充足，说明供水网健康。水管教程完成！',
        hint: '👆 确认供水正常（或直接下一步领奖）',
        check: (g) => {
          const w = v20_try('tut_w9', () =>
            Number(g.player && g.player.inv && g.player.inv.water) || 0, 0);
          return w >= 50 && v20_countBuildings(g, ['pump', 'waterplant']) >= 1;
        },
        target: () => null,
      },
    ],
  },

  // ================= 交通教程（9 步） =================
  transit: {
    title: '🚗 交通教程',
    icon: '🚗',
    desc: '学会铺路建站、组建车队，让物资跑起来',
    reward: { credits: 250, res: { iron: 40 }, text: '🚗 交通教程完成！奖励：星币×250、铁矿×40' },
    checklist: ['路网全连通，无红色断开框', '运输站 + 物流中心就绪', '至少 1 辆运输车在跑', '道路达到 20 格'],
    cheatsheet: ['先画路再放建筑，别返工', '物流中心放地图中心，空跑最少', '20 格路网是镇级规模分水岭', '运输车：铁×20 稀土×10', '快捷键 3 开/关交通覆盖层'],
    steps: [
      {
        id: 't1', title: '👁️ 打开交通覆盖层',
        text: '按快捷键 3，或点右侧 🚗 按钮。橙色=道路，金圈=枢纽，绿点=运输车。',
        hint: '👆 按 3 或点右侧 🚗 按钮',
        check: (g) => v20_overlayMode(g) === 'traffic',
        target: () => null,
      },
      {
        id: 't2', title: '🛤️ 铺设 5 格道路',
        text: '点底部「🛤️道路」在建筑之间铺路。道路上的宇航员和运输车跑得更快。',
        hint: '👆 铺设 5 格道路',
        check: (g) => {
          const tr = v20_getSys(g, 'transit');
          if (tr && typeof tr.roadsBuilt === 'number') return tr.roadsBuilt >= 5;
          return v20_countBuildings(g, ['road']) >= 5;
        },
        target: (g) => { const b = v20_firstBuilding(g, ['road']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 't3', title: '🚚 建造运输站',
        text: '点底部「🚚运输站」，它是车队的家。运输站越多，覆盖的建筑越多。',
        hint: '👆 建 1 座运输站',
        check: (g) => v20_countBuildings(g, ['depot']) >= 1,
        target: (g) => { const b = v20_firstBuilding(g, ['depot']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 't4', title: '🛰️ 建造物流中心',
        text: '物流中心是高级枢纽，能调度更多运输车。把它用道路连到运输站。',
        hint: '👆 建 1 座物流中心',
        check: (g) => v20_countBuildings(g, ['logistics']) >= 1,
        target: (g) => { const b = v20_firstBuilding(g, ['logistics']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 't5', title: '🔗 道路连通枢纽',
        text: '用道路把运输站和物流中心连起来。覆盖层里的金色虚线就是枢纽干线。',
        hint: '👆 道路达到 8 格且拥有运输站',
        check: (g) => {
          const tr = v20_getSys(g, 'transit');
          if (tr && typeof tr.routesActive === 'number') return tr.routesActive >= 1;
          return v20_countBuildings(g, ['road']) >= 8 && v20_countBuildings(g, ['depot']) >= 1;
        },
        target: (g) => { const b = v20_firstBuilding(g, ['depot']); return b ? { x: b.x + 1, y: b.y } : null; },
      },
      {
        id: 't6', title: '🚚 建造第一辆运输车',
        text: '打开「🚚运输」面板，点建造运输车（铁×20 稀土×10）。车会自动拉货。',
        hint: '👆 建造 1 辆运输车',
        check: (g) => !!v20_try('tut_trucks', () =>
          (g.logistics && Array.isArray(g.logistics.trucks) && g.logistics.trucks.length >= 1), false),
        target: (g) => { const b = v20_firstBuilding(g, ['depot', 'logistics']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 't7', title: '⬆️ 升级运输站',
        text: '点运输站 → 升级到 2 级，车辆容量和装卸速度提升。',
        hint: '👆 把 1 座运输站升到 2 级',
        check: (g) => v20_buildings(g).some(b => b && b.id === 'depot' && (b.level || 1) >= 2),
        target: (g) => { const b = v20_firstBuilding(g, ['depot']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 't8', title: '🛣️ 路网破 20 格',
        text: '把道路铺到 20 格，覆盖主要建筑。路网越密，运输效率越高。',
        hint: '👆 道路达到 20 格',
        check: (g) => {
          const tr = v20_getSys(g, 'transit');
          if (tr && typeof tr.roadsBuilt === 'number') return tr.roadsBuilt >= 20;
          return v20_countBuildings(g, ['road']) >= 20;
        },
        target: (g) => { const b = v20_firstBuilding(g, ['road']); return b ? { x: b.x, y: b.y - 1 } : null; },
      },
      {
        id: 't9', title: '🎉 车队成型！',
        text: '3 辆运输车 + 连通的枢纽 = 高效物流网。交通教程完成！',
        hint: '👆 运输车达到 3 辆（或直接下一步领奖）',
        check: (g) => v20_try('tut_t9', () => {
          const n = (g.logistics && Array.isArray(g.logistics.trucks)) ? g.logistics.trucks.length : 0;
          if (n >= 3) return true;
          // 降级：枢纽齐备也算
          return v20_countBuildings(g, ['depot']) >= 1 && v20_countBuildings(g, ['logistics']) >= 1;
        }, false),
        target: (g) => { const b = v20_firstBuilding(g, ['logistics']); return b ? { x: b.x, y: b.y } : null; },
      },
    ],
  },

  // ================= 经济教程（8 步） =================
  economy: {
    title: '💰 经济教程',
    icon: '💰',
    desc: '学会看收支、管理税率工资，远离破产',
    reward: { credits: 300, res: { steel: 20 }, text: '💰 经济教程完成！奖励：星币×300、钢材×20' },
    checklist: ['净收入为正', '资金缓冲够撑 30 分钟', '税率在 5%–20% 之间', '养成每天看一次收支曲线的习惯'],
    cheatsheet: ['税率新手安全值 10%', '工资甜点区 100%–120%', '净收入转负是破产前兆', '资金缓冲目标：撑 30 分钟支出', '贸易站是回血最快的印钞机'],
    steps: [
      {
        id: 'e1', title: '💰 打开经济面板',
        text: '点顶栏资源区旁的 💰 按钮，打开经济面板。这里能看到星币、收支曲线和明细。',
        hint: '👆 点顶栏的 💰 按钮',
        check: (g) => {
          try {
            const p = g && g.v20 && g.v20.economy;
            if (p && typeof p.isOpen === 'function') return p.isOpen();
          } catch (e) {}
          if (typeof document === 'undefined') return false;
          const panel = document.getElementById('economy-panel');
          return !!panel && !panel.classList.contains('hidden');
        },
        target: () => null,
      },
      {
        id: 'e2', title: '📈 看懂收支曲线',
        text: '黄色=星币余额，绿色=收入/分，红色=支出/分。把鼠标/手指放在曲线上可看具体数值。',
        hint: '👆 观察曲线 5 秒（或点下一步）',
        // 降级：面板打开即算（曲线需要 10 秒采样，等待太久）
        check: (g) => {
          try {
            const p = g && g.v20 && g.v20.economy;
            if (p && typeof p.isOpen === 'function') return p.isOpen();
          } catch (e) {}
          return false;
        },
        target: () => null,
      },
      {
        id: 'e3', title: '🏛️ 调整税率',
        text: '拖动税率滑杆（0–30%）。税率越高税收越多，但别拉满——人口会不开心。',
        hint: '👆 拖动税率滑杆',
        check: (g) => {
          const s = v20_getSys(g, 'economy');
          if (s && typeof s.getTaxRate === 'function') {
            return v20_try('tut_tax', () => Number(s.getTaxRate()) > 0, false);
          }
          // 降级：滑杆被拖过（input 事件打标记）
          try { return !!g._v20TaxTouched; } catch (e) { return false; }
        },
        target: () => null,
      },
      {
        id: 'e4', title: '💼 调整工资',
        text: '拖动工资滑杆。工资高人口开心，但支出大。100% 是基准，先保持不动也行。',
        hint: '👆 拖动工资滑杆',
        check: (g) => {
          const s = v20_getSys(g, 'economy');
          if (s) {
            const w = v20_try('tut_wage', () => {
              if (typeof s.getWageLevel === 'function') return Number(s.getWageLevel());
              if (typeof s.getWage === 'function') return Number(s.getWage());
              return null;
            }, null);
            if (w != null) return w !== 1; // 动过即算
          }
          try { return !!g._v20WageTouched; } catch (e) { return false; }
        },
        target: () => null,
      },
      {
        id: 'e5', title: '🤝 做一次贸易',
        text: '建一座贸易站（或打开贸易面板），把多余资源卖成星币。贸易是回血最快的方式。',
        hint: '👆 拥有贸易站或完成一次贸易',
        check: (g) => {
          if (v20_countBuildings(g, ['trade']) >= 1) return true;
          const s = v20_getSys(g, 'economy');
          // !! 保证返回布尔值（v20_try 回调里 s 为 null 时会得到 null）
          return !!v20_try('tut_trade', () =>
            (s && typeof s.tradeCount === 'number' && s.tradeCount >= 1) ||
            (s && typeof s.getTradeCount === 'function' && s.getTradeCount() >= 1), false);
        },
        target: (g) => { const b = v20_firstBuilding(g, ['trade']); return b ? { x: b.x, y: b.y } : null; },
      },
      {
        id: 'e6', title: '💰 星币破 500',
        text: '靠税收+贸易把星币攒到 500。有钱才能升级建筑、解锁扇区。',
        hint: '👆 星币 ≥ 500',
        check: (g) => {
          const s = v20_getSys(g, 'economy');
          if (!s) return false;
          return v20_try('tut_credits', () => {
            if (typeof s.getCredits === 'function') return Number(s.getCredits()) >= 500;
            return Number(s.credits) >= 500;
          }, false);
        },
        target: () => null,
      },
      {
        id: 'e7', title: '⚖️ 收入覆盖支出',
        text: '看明细表合计行：净收入为正才是健康经济。负了就调税率/工资/卖资源。',
        hint: '👆 让净收入 ≥ 0（或点下一步）',
        check: (g) => {
          const s = v20_getSys(g, 'economy');
          if (!s) return false;
          return v20_try('tut_net', () => {
            if (typeof s.getIncomeRate === 'function' && typeof s.getExpenseRate === 'function') {
              return Number(s.getIncomeRate()) >= Number(s.getExpenseRate());
            }
            if (typeof s.breakdown === 'function') {
              const bd = s.breakdown();
              let inc = 0, exp = 0;
              const vals = Array.isArray(bd) ? bd : Object.values(bd || {});
              for (const r of vals) {
                if (r && typeof r === 'object') { inc += Number(r.income) || 0; exp += Number(r.expense) || 0; }
              }
              return inc >= exp;
            }
            return false;
          }, false);
        },
        target: () => null,
      },
      {
        id: 'e8', title: '🎉 财政健康！',
        text: '记住三板斧：税率调税收、工资控支出、贸易来回血。经济教程完成！',
        hint: '👆 点下一步领奖',
        check: () => false, // 手动完成
        target: () => null,
      },
    ],
  },
}; // TUTORIALS_V20 结束

/** Canvas 圆角矩形路径（全局 helper，教程高亮用）。 */
function v20_roundRectCtx(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** 教程横幅 CSS（复用 #tutorial 视觉语言，独立 id 避免与老教程冲突）。 */
const TUT_V20_CSS = `
#v20-tutorial{position:absolute;top:12px;left:12px;right:12px;z-index:28;
 background:rgba(20,14,20,.96);border:2px solid #facc15;border-radius:12px;padding:12px 14px}
#v20-tut-progress{font-size:11px;opacity:.6;margin-bottom:4px}
#v20-tut-title{font-size:16px;font-weight:bold;color:#facc15;margin-bottom:6px}
#v20-tut-text{font-size:13px;line-height:1.65;margin-bottom:8px}
#v20-tut-hint{font-size:13px;color:#7dd3fc;font-weight:bold;margin-bottom:10px}
#v20-tut-btns{display:flex;gap:8px}
#v20-tut-btns button{flex:1;min-height:44px;border:none;border-radius:8px;
 font-size:14px;font-weight:bold;cursor:pointer}
#v20-tut-prev{background:#2a2a35;color:#fff}
#v20-tut-skipstep{background:#3a3a4a;color:#fff}
#v20-tut-skip{background:#e07b39;color:#fff}
#v20-tut-skip:active,#v20-tut-prev:active{transform:scale(.97)}
#v20-tut-why{margin:0 0 10px;font-size:12px}
#v20-tut-why summary{cursor:pointer;color:#facc15;min-height:44px;display:inline-flex;align-items:center;font-weight:bold}
#v20-tut-detail{font-size:12px;line-height:1.7;opacity:.88;padding:6px 2px;color:#f5e8dc}
#v20-tut-timer{font-size:11px;opacity:.55;margin:4px 0 0}
#v20-tutorial .v20-grad-head{font-weight:bold;margin:10px 0 4px;color:#facc15}
#v20-tutorial .v20-grad-item{font-size:13px;line-height:1.9;opacity:.9}
#v20-tut-overview{position:absolute;inset:8px;z-index:27;background:rgba(12,10,14,.97);
 border:1px solid #facc15;border-radius:12px;padding:12px;overflow-y:auto;color:#f5e8dc}
#v20-tut-overview .panel-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
#v20-tut-overview .panel-header b{font-size:16px;color:#facc15}
#v20-tut-overview .panel-header button{background:#2a2a35;color:#fff;border:none;border-radius:8px;
 width:44px;height:44px;min-width:44px;min-height:44px;font-size:15px;cursor:pointer}
#v20-tut-overview .v20-ov-card{background:#1a1620;border:1px solid #3a3a4a;border-radius:10px;
 padding:10px 12px;margin-bottom:10px}
#v20-tut-overview .v20-ov-card.done{border-color:#4ade80}
#v20-tut-overview .v20-ov-card.active{border-color:#facc15;box-shadow:0 0 8px rgba(250,204,21,.25)}
#v20-tut-overview .v20-ov-title{font-size:15px;font-weight:bold;margin-bottom:4px}
#v20-tut-overview .v20-ov-desc{font-size:12px;opacity:.7;margin-bottom:6px}
#v20-tut-overview .v20-ov-prog{font-size:12px;color:#7dd3fc;margin-bottom:4px}
#v20-tut-overview .v20-ov-rec{font-size:11px;opacity:.6;margin-bottom:8px}
#v20-tut-overview .v20-ov-bar{height:8px;background:#2a2a35;border-radius:4px;overflow:hidden;margin-bottom:8px}
#v20-tut-overview .v20-ov-fill{height:100%;background:#facc15;border-radius:4px;transition:width .4s}
#v20-tut-overview .v20-ov-card button{width:100%;min-height:44px;border:none;border-radius:8px;
 background:#e07b39;color:#fff;font-size:14px;font-weight:bold;cursor:pointer}
#v20-tut-overview .v20-ov-card button:active{transform:scale(.98)}
#v20-tut-overview .v20-ov-cheat{margin-bottom:8px;font-size:12px}
#v20-tut-overview .v20-ov-cheat summary{cursor:pointer;color:#facc15;min-height:44px;
 display:inline-flex;align-items:center;font-weight:bold}
#v20-tut-overview .v20-ov-cheat-item{font-size:12px;line-height:1.8;opacity:.85}
`;

const TUT_V20_STORE_KEY = 'starport-v20-tutorials';

class TutorialsV20 {
  constructor(game) {
    this.game = game || null;
    this._name = null;        // 当前教程 key
    this._idx = 0;
    this._active = false;
    this._bannerEl = null;
    this._highlights = [];    // [{x, y, until}]
    this._lastCheck = 0;
    this._lastTarget = 0;
    this._targetKey = '';
    this._uiBound = false;
    this._styleDone = false;
    this._store = this._loadStore();
    this._stepStart = 0;      // 当前步骤开始时间（计时显示用）
    this._tutStart = 0;       // 本轮教程开始时间（用时记录用）
    this._stuckHintShown = false; // 本步是否已弹过卡住提示
    this._lastSuggest = 0;    // 上次情境推荐时间
    this._suggested = {};     // 每会话每种教程只推荐一次
    this.onStepComplete = null;     // (name, idx, step) => void，完成钩子（成就/统计可订阅）
    this.onTutorialComplete = null; // (name, durationMs) => void
  }

  // ---------- 存档 ----------

  _loadStore() {
    try {
      const raw = localStorage.getItem(TUT_V20_STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { done: {}, skipped: {} };
  }

  _saveStore() {
    try {
      localStorage.setItem(TUT_V20_STORE_KEY, JSON.stringify(this._store));
    } catch (e) {}
  }

  /** 某教程是否已完成。 */
  isDone(name) {
    return !!(this._store.done && this._store.done[name]);
  }

  /** 取某教程进度 {done, idx, total, active, bestMs, runs}。 */
  getProgress(name) {
    const cfg = TUTORIALS_V20[name];
    if (!cfg) return null;
    const rec = (this._store.records || {})[name] || {};
    const active = this._active && this._name === name;
    let idx = 0;
    if (active) idx = this._idx;
    else if (this._store.lastActive && this._store.lastActive.name === name) {
      idx = v20_clamp(this._store.lastActive.idx, 0, cfg.steps.length - 1);
    }
    return {
      done: this.isDone(name),
      idx,
      total: cfg.steps.length,
      active,
      bestMs: rec.bestMs != null && rec.bestMs !== Infinity ? rec.bestMs : null,
      runs: rec.runs || 0,
    };
  }

  /** 取全部教程进度 {key: progress}。 */
  getAllProgress() {
    const out = {};
    for (const key of Object.keys(TUTORIALS_V20)) out[key] = this.getProgress(key);
    return out;
  }

  // ---------- 教程总览面板 ----------

  /** 构建总览面板 DOM（只一次）。 */
  _buildOverview() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('v20-tut-overview')) return;
    const wrap = document.getElementById('map-wrap');
    if (!wrap) return;
    this._ensureStyle();
    const p = v20_el('div');
    p.id = 'v20-tut-overview';
    p.classList.add('hidden');
    p.innerHTML = `
      <div class="panel-header">
        <b>📚 新系统教程总览</b>
        <button id="v20-ov-close" aria-label="关闭">✖</button>
      </div>
      <div id="v20-ov-list"></div>
      <div style="font-size:11px;opacity:.55;line-height:1.8;margin-top:4px">
        每个教程 8–10 步，跟着做就行，做完有星币奖励。<br>中途退出会自动记录断点，下次点“继续”接着来。
      </div>`;
    wrap.appendChild(p);
    p.querySelector('#v20-ov-close').addEventListener('click', () => this.closeOverview());
    p.style.touchAction = 'pan-y';
  }

  /** 渲染总览卡片。 */
  _renderOverview() {
    const p = document.getElementById('v20-tut-overview');
    const list = p && p.querySelector('#v20-ov-list');
    if (!list) return;
    let html = '';
    for (const key of Object.keys(TUTORIALS_V20)) {
      const cfg = TUTORIALS_V20[key];
      const pr = this.getProgress(key);
      const pct = pr.done ? 100 : Math.round((pr.idx / pr.total) * 100);
      let progText, btnLabel, cardCls = '';
      if (pr.done) {
        progText = `✅ 已完成（${pr.runs} 次）`;
        btnLabel = '重练一次';
        cardCls = 'done';
      } else if (pr.active) {
        progText = `▶ 进行中 ${pr.idx + 1}/${pr.total}`;
        btnLabel = `继续（第 ${pr.idx + 1} 步）`;
        cardCls = 'active';
      } else if (pr.idx > 0) {
        progText = `⏸️ 上次做到 ${pr.idx + 1}/${pr.total}`;
        btnLabel = `继续（第 ${pr.idx + 1} 步）`;
      } else {
        progText = `未开始 · 共 ${pr.total} 步`;
        btnLabel = '开始';
      }
      const recText = pr.bestMs != null ? `最佳用时 ${this._fmtMs(pr.bestMs)}` : '暂无用时记录';
      const cheat = (cfg.cheatsheet || [])
        .map(c => `<div class="v20-ov-cheat-item">· ${c}</div>`).join('');
      html += `
        <div class="v20-ov-card ${cardCls}">
          <div class="v20-ov-title">${cfg.icon} ${cfg.title}</div>
          <div class="v20-ov-desc">${cfg.desc}</div>
          <div class="v20-ov-prog">${progText}</div>
          <div class="v20-ov-rec">${recText} · 奖励：${cfg.reward.text}</div>
          <div class="v20-ov-bar"><div class="v20-ov-fill" style="width:${pct}%"></div></div>
          <details class="v20-ov-cheat"><summary>📋 速查卡</summary>${cheat}</details>
          <button type="button" data-v20-ov-start="${key}" data-v20-ov-idx="${pr.idx}">${btnLabel}</button>
        </div>`;
    }
    list.innerHTML = html;
    // 事件委托：开始/继续/重练
    list.onclick = (e) => {
      const b = e.target && e.target.closest ? e.target.closest('[data-v20-ov-start]') : null;
      if (!b) return;
      const key = b.dataset.v20OvStart;
      const idx = Number(b.dataset.v20OvIdx) || 0;
      this.closeOverview();
      const pr = this.getProgress(key);
      if (pr && (pr.active || (pr.idx > 0 && !pr.done))) this.start(key, idx);
      else this.start(key, 0);
    };
  }

  openOverview() {
    this._buildOverview();
    const p = document.getElementById('v20-tut-overview');
    if (!p) return;
    this._renderOverview();
    p.classList.remove('hidden');
  }

  closeOverview() {
    const p = document.getElementById('v20-tut-overview');
    if (p) p.classList.add('hidden');
  }

  // ---------- 挂接 ----------

  /** attach：注册高亮绘制（render 后）与步骤检查（tick 节流 400ms）。 */
  attach(game) {
    if (game) this.game = game;
    const self = this;
    // 高亮绘制：世界坐标脉冲框
    v20_onRender(game, (g, now) => {
      if (!self._highlights.length) return;
      const ctx = g.ctx;
      if (!ctx) return;
      const t = v20_worldTransform(ctx, g);
      try {
        self._drawHighlights(ctx, t.tile, now == null ? Date.now() : now);
      } finally {
        t.done();
      }
    });
    // 步骤检查
    v20_onTick(game, (g, now) => {
      if (!self._active) return;
      if (now - self._lastCheck < 400) return;
      self._lastCheck = now;
      v20_try('tut_update', () => self._update(now), null);
    });
    // 情境推荐：检测到典型问题且对应教程没做过，推荐一次
    v20_onTick(game, (g, now) => {
      if (self._active) return;
      if (now - self._lastSuggest < 30000) return;
      self._lastSuggest = now;
      v20_try('tut_suggest', () => self._maybeSuggest(g), null);
    });
  }

  /** 情境推荐：用覆盖层分析器发现真实问题，推荐对应教程（每会话每种一次）。 */
  _maybeSuggest(game) {
    if (!game || !game.map) return;
    const ov = game.v20 && game.v20.overlay;
    if (!ov || typeof ov._analyzePower !== 'function') return;
    const cands = [];
    if (!this.isDone('power') && !this._suggested.power) {
      const pa = v20_try('sug_power', () => ov._analyzePower(game), null);
      if (pa && pa.unpowered.length >= 2) {
        cands.push(['power', '⚡ 检测到多处缺电，来一遍电网教程吧（帮助面板 ▶ 入口）']);
      }
    }
    if (!this.isDone('water') && !this._suggested.water) {
      const wa = v20_try('sug_water', () => ov._analyzeWater(game), null);
      if (wa && (wa.shortage || wa.uncovered.length >= 2)) {
        cands.push(['water', '💧 供水有点紧张，水管教程 3 分钟讲透']);
      }
    }
    if (!this.isDone('economy') && !this._suggested.economy) {
      const eco = game.v20 && game.v20.economy;
      const bad = eco && typeof eco._isBankrupt === 'function' &&
        v20_try('sug_eco', () => eco._isBankrupt(), false);
      if (bad) cands.push(['economy', '💰 财政告急！经济教程教你三板斧回血']);
    }
    if (!cands.length) return;
    const [key, msg] = cands[0];
    this._suggested[key] = 1;
    if (typeof game.toast === 'function') game.toast(msg);
  }

  // ---------- 流程控制 ----------

  /** start(name, idx?)：开始指定教程，可从第 idx 步继续（断点续学）。 */
  start(name, idx) {
    const cfg = TUTORIALS_V20[name];
    if (!cfg) return false;
    this._name = name;
    this._idx = v20_clamp(idx || 0, 0, cfg.steps.length - 1);
    this._stepStart = Date.now();
    this._tutStart = Date.now();
    this._stuckHintShown = false;
    this._active = true;
    this._highlights.length = 0;
    this._targetKey = '';
    this._saveLastActive();
    // 藏起老教程面板，避免重叠
    v20_try('tut_hide_old', () => {
      const old = document.getElementById('tutorial');
      if (old) old.classList.add('hidden');
    }, null);
    this._renderBanner();
    const g = this.game;
    if (g && typeof g.toast === 'function') {
      g.toast(`${cfg.icon} ${cfg.title}开始！共 ${cfg.steps.length} 步`);
    }
    return true;
  }

  /** next()：下一步；走完则完成并发奖励。 */
  next() {
    if (!this._active || !this._name) return;
    const cfg = TUTORIALS_V20[this._name];
    this._idx++;
    if (this._idx >= cfg.steps.length) {
      this._complete();
      return;
    }
    this._stepStart = Date.now();
    this._stuckHintShown = false;
    this._targetKey = '';
    this._saveLastActive();
    this._renderBanner();
  }

  /** prev()：上一步。 */
  prev() {
    if (!this._active) return;
    if (this._idx > 0) {
      this._idx--;
      this._stepStart = Date.now();
      this._stuckHintShown = false;
      this._targetKey = '';
      this._saveLastActive();
      this._renderBanner();
    }
  }

  /** 记录断点（供帮助面板“继续”）。 */
  _saveLastActive() {
    if (!this._name) return;
    this._store.lastActive = { name: this._name, idx: this._idx };
    this._saveStore();
  }

  /** 清除断点（完成/跳过时）。 */
  _clearLastActive() {
    if (this._store.lastActive) {
      delete this._store.lastActive;
      this._saveStore();
    }
  }

  /** skip()：跳过本教程（记 skipped，不再自动弹）。 */
  skip() {
    if (!this._active) return;
    const name = this._name;
    this._active = false;
    this._name = null;
    this._highlights.length = 0;
    this._hideBanner();
    if (name) {
      this._store.skipped[name] = 1;
      this._saveStore();
    }
    this._clearLastActive();
    const g = this.game;
    if (g && typeof g.toast === 'function') g.toast('⏭️ 已跳过教程，可在帮助面板重新开始');
    this._refreshHelpButtons();
  }

  /** skipStep()：跳过当前步骤（不记仇，直接进下一步）。 */
  skipStep() {
    if (!this._active) return;
    const step = this.current();
    const g = this.game;
    if (g && typeof g.toast === 'function' && step) {
      g.toast(`⏭️ 已跳过「${step.title}」`);
    }
    this.next();
  }

  /** 当前步骤对象。 */
  current() {
    const cfg = this._name && TUTORIALS_V20[this._name];
    return cfg ? cfg.steps[this._idx] : null;
  }

  /** 每 400ms：检查当前步骤 check()，通过则 fanfare + next()；刷新高亮目标。 */
  _update(now) {
    const step = this.current();
    if (!step) return;
    // 刷新高亮目标（每 2 秒重算一次，或步骤变化时）
    if (now - this._lastTarget > 2000) {
      this._lastTarget = now;
      v20_try('tut_target', () => this._refreshTarget(), null);
    }
    // 本步计时显示
    v20_try('tut_timer', () => {
      const tEl = typeof document !== 'undefined' && document.getElementById('v20-tut-timer');
      if (tEl && this._bannerEl && !this._bannerEl.classList.contains('hidden')) {
        const s = Math.max(0, Math.floor((now - this._stepStart) / 1000));
        tEl.textContent = `⏱️ 本步已用 ${s} 秒`;
      }
    }, null);
    // 卡住检测：60 秒没通过，追加提示（每步只弹一次，不骚扰）
    if (!this._stuckHintShown && now - this._stepStart > 60000) {
      this._stuckHintShown = true;
      const g = this.game;
      if (g && typeof g.toast === 'function') {
        g.toast(`💡 这一步卡住了？${step.hint} —— 点“为什么要这么做？”看详解`);
      }
    }
    // 最后一步若 check 恒 false → 等手动下一步（不自动）
    let ok = false;
    try {
      ok = !!step.check(this.game);
    } catch (e) {
      ok = false; // check 异常视为未完成，不打断
    }
    if (ok) {
      const g = this.game;
      const doneName = this._name, doneIdx = this._idx;
      if (g && typeof g.toast === 'function') g.toast(`✅ ${step.title} 完成！`);
      if (g && g.sound && typeof g.sound.upgrade === 'function') {
        v20_try('tut_sound', () => g.sound.upgrade(), null);
      }
      // 完成钩子（成就/统计系统可订阅）
      if (typeof this.onStepComplete === 'function') {
        v20_try('tut_hook_step', () => this.onStepComplete(doneName, doneIdx, step), null);
      }
      this.next();
    }
  }

  /** 完成：记 done + 用时记录 + 发奖励 + 毕业面板（清单）。 */
  _complete() {
    const cfg = TUTORIALS_V20[this._name];
    const name = this._name;
    const durationMs = Date.now() - (this._tutStart || Date.now());
    this._active = false;
    this._name = null;
    this._highlights.length = 0;
    let recordText = '';
    if (name) {
      this._store.done[name] = 1;
      // 用时记录：次数 + 历史最佳
      this._store.records = this._store.records || {};
      const rec = this._store.records[name] || { runs: 0, bestMs: Infinity };
      rec.runs++;
      const isBest = durationMs < rec.bestMs;
      rec.bestMs = Math.min(rec.bestMs, durationMs);
      this._store.records[name] = rec;
      this._saveStore();
      recordText = `⏱️ 本次用时 ${this._fmtMs(durationMs)}（第 ${rec.runs} 次完成` +
        (isBest ? '，新纪录！' : `，最佳 ${this._fmtMs(rec.bestMs)}`);
    }
    this._clearLastActive();
    if (cfg && cfg.reward) this._giveReward(cfg.reward);
    const g = this.game;
    if (g && g.sound && typeof g.sound.victory === 'function') {
      v20_try('tut_win', () => g.sound.victory(), null);
    }
    this._refreshHelpButtons();
    // 完成钩子
    if (typeof this.onTutorialComplete === 'function') {
      v20_try('tut_hook_done', () => this.onTutorialComplete(name, durationMs), null);
    }
    // 🏆 大满贯：四个教程全部完成 → 一次性额外奖励
    if (name && !this._store.grandSlam &&
        Object.keys(TUTORIALS_V20).every(k => this.isDone(k))) {
      this._store.grandSlam = 1;
      this._saveStore();
      const g2 = this.game;
      const eco2 = v20_getSys(g2, 'economy');
      if (eco2 && typeof eco2.addCredits === 'function') {
        v20_try('tut_grand', () => eco2.addCredits(500), null);
      } else if (g2 && g2.player && g2.player.inv) {
        v20_try('tut_grand2', () => {
          g2.player.inv.iron = (g2.player.inv.iron || 0) + 100;
        }, null);
      }
      if (g2 && typeof g2.toast === 'function') {
        setTimeout(() => g2.toast('🏆 大满贯！四个新系统教程全部完成，额外奖励已发放！'), 2600);
      }
    }
    // 毕业面板：用时 + 自查清单（代替直接隐藏横幅）
    if (cfg) this._showGraduation(cfg, recordText);
  }

  /** 毫秒 → “X 分 Y 秒”。 */
  _fmtMs(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    if (s < 60) return `${s} 秒`;
    return `${Math.floor(s / 60)} 分 ${s % 60} 秒`;
  }

  /** 毕业面板：复用横幅 DOM，展示用时 + 自查清单 + 关闭按钮。 */
  _showGraduation(cfg, recordText) {
    if (typeof document === 'undefined') return;
    const el = document.getElementById('v20-tutorial');
    if (!el) return;
    const cl = (cfg.checklist || [])
      .map((c, i) => `<div class="v20-grad-item">${i + 1}. ${c}</div>`)
      .join('');
    el.querySelector('#v20-tut-progress').textContent = `${cfg.title} · 全部完成 🎓`;
    el.querySelector('#v20-tut-title').textContent = '🎓 毕业！';
    el.querySelector('#v20-tut-text').innerHTML =
      `${recordText}<div class="v20-grad-head">毕业自查清单（对照着看一眼）：</div>${cl}`;
    el.querySelector('#v20-tut-hint').textContent = (cfg.reward && cfg.reward.text) || '';
    const detail = el.querySelector('#v20-tut-detail');
    if (detail) detail.textContent = '';
    const why = el.querySelector('#v20-tut-why');
    if (why) why.style.display = 'none';
    const timer = el.querySelector('#v20-tut-timer');
    if (timer) timer.textContent = '';
    const prev = el.querySelector('#v20-tut-prev');
    if (prev) prev.style.display = 'none';
    const ss = el.querySelector('#v20-tut-skipstep');
    if (ss) ss.style.display = 'none';
    // 关闭按钮：克隆替换，去掉旧的步骤监听
    const skip = el.querySelector('#v20-tut-skip');
    if (skip) {
      skip.textContent = '关闭 ✖';
      const fresh = skip.cloneNode(true);
      skip.parentNode.replaceChild(fresh, skip);
      fresh.addEventListener('click', () => this._hideBanner());
    }
    el.classList.remove('hidden');
    this._bannerEl = el;
  }

  // ---------- 奖励 ----------

  /** 发奖励：优先走 game.economy.addCredits；星币系统缺失时按 5:1 转为铁矿并明示。 */
  _giveReward(reward) {
    const g = this.game;
    if (!g) return;
    const eco = v20_getSys(g, 'economy');
    const got = [];
    if (reward.credits) {
      if (eco && typeof eco.addCredits === 'function') {
        v20_try('tut_reward_credits', () => eco.addCredits(reward.credits), null);
        got.push(`星币×${reward.credits}`);
      } else {
        // 降级：星币系统未接入，转铁矿补偿（5 星币 = 1 铁矿）
        const iron = Math.max(10, Math.round(reward.credits / 5));
        v20_try('tut_reward_fallback', () => {
          if (g.player && g.player.inv) g.player.inv.iron = (g.player.inv.iron || 0) + iron;
        }, null);
        got.push(`铁矿×${iron}（星币系统未接入，转补偿）`);
      }
    }
    if (reward.res && g.player && g.player.inv) {
      v20_try('tut_reward_res', () => {
        for (const k of Object.keys(reward.res)) {
          g.player.inv[k] = (g.player.inv[k] || 0) + reward.res[k];
          got.push(`${k}×${reward.res[k]}`);
        }
      }, null);
    }
    if (typeof g.toast === 'function') {
      g.toast(`🎁 教程奖励：${got.join('、') || '无'}`);
    }
  }

  // ---------- 高亮 ----------

  /** highlightTile(x, y, ttlMs)：在地图 (x,y) 格画脉冲框。 */
  highlightTile(x, y, ttlMs) {
    if (x == null || y == null) return;
    const now = Date.now();
    this._highlights.push({ x: Math.floor(x), y: Math.floor(y), until: now + (ttlMs || 2500) });
    if (this._highlights.length > 12) this._highlights.shift();
  }

  /** 按当前步骤的 target() 刷新高亮（去重：同格不重复画）。 */
  _refreshTarget() {
    const step = this.current();
    if (!step || typeof step.target !== 'function') return;
    let pos = null;
    try { pos = step.target(this.game); } catch (e) { pos = null; }
    const key = pos ? `${pos.x},${pos.y}` : '';
    if (key === this._targetKey) return;
    this._targetKey = key;
    if (pos) this.highlightTile(pos.x, pos.y, 2300);
  }

  /** 绘制所有高亮：金色脉冲圆角框 + 中心闪点。 */
  _drawHighlights(ctx, tile, now) {
    this._highlights = this._highlights.filter(h => h.until > now);
    if (!this._highlights.length) return;
    const pulse = 0.5 + 0.5 * Math.sin(now / 220);
    for (const h of this._highlights) {
      const x = h.x * tile, y = h.y * tile;
      const pad = tile * 0.06;
      ctx.strokeStyle = `rgba(250,204,21,${0.55 + pulse * 0.45})`;
      ctx.lineWidth = Math.max(2.5, tile * 0.09) * (0.8 + pulse * 0.5);
      v20_roundRectCtx(ctx, x + pad, y + pad, tile - pad * 2, tile - pad * 2, tile * 0.18);
      ctx.stroke();
      // 中心闪点
      ctx.fillStyle = `rgba(250,204,21,${0.25 + pulse * 0.3})`;
      ctx.beginPath();
      ctx.arc((h.x + 0.5) * tile, (h.y + 0.5) * tile, tile * (0.12 + pulse * 0.1), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // ---------- 教程横幅 UI ----------

  /** 确保教程 CSS 已注入（横幅与总览面板共用）。 */
  _ensureStyle() {
    if (typeof document === 'undefined' || this._styleDone) return;
    const st = v20_el('style');
    st.id = 'v20-tut-style';
    st.textContent = TUT_V20_CSS;
    document.head.appendChild(st);
    this._styleDone = true;
  }

  /** 构建/刷新横幅（#v20-tutorial，样式复用 #tutorial 视觉）。 */
  _renderBanner() {
    if (typeof document === 'undefined') return;
    const step = this.current();
    const cfg = this._name && TUTORIALS_V20[this._name];
    if (!step || !cfg) { this._hideBanner(); return; }
    this._ensureStyle();
    let el = document.getElementById('v20-tutorial');
    if (!el) {
      const wrap = document.getElementById('map-wrap');
      if (!wrap) return;
      el = v20_el('div');
      el.id = 'v20-tutorial';
      el.innerHTML = `
        <div id="v20-tut-progress"></div>
        <div id="v20-tut-title"></div>
        <div id="v20-tut-text"></div>
        <div id="v20-tut-hint"></div>
        <details id="v20-tut-why">
          <summary>为什么要这么做？</summary>
          <div id="v20-tut-detail"></div>
        </details>
        <div id="v20-tut-timer"></div>
        <div id="v20-tut-btns">
          <button id="v20-tut-prev">◀ 上一步</button>
          <button id="v20-tut-skipstep">跳过本步</button>
          <button id="v20-tut-skip">跳过教程</button>
        </div>`;
      wrap.appendChild(el);
      this._bannerEl = el;
    }
    // 恢复毕业面板隐藏的元素（prev/skipstep/why 可能被 _showGraduation 藏起）
    const prev0 = el.querySelector('#v20-tut-prev');
    if (prev0) prev0.style.display = '';
    const ss0 = el.querySelector('#v20-tut-skipstep');
    if (ss0) ss0.style.display = '';
    const why0 = el.querySelector('#v20-tut-why');
    if (why0) { why0.style.display = ''; why0.open = false; }
    // 重绑按钮（毕业面板 clone 过 skip，直接绑定会丢；统一用克隆重绑）
    const wire = (sel, fn) => {
      const oldB = el.querySelector(sel);
      if (!oldB) return;
      const b = oldB.cloneNode(true);
      oldB.parentNode.replaceChild(b, oldB);
      b.addEventListener('click', fn);
    };
    wire('#v20-tut-prev', () => this.prev());
    wire('#v20-tut-skipstep', () => this.skipStep());
    wire('#v20-tut-skip', () => {
      // 最后一步的按钮文案是“完成领奖”，点它 = next()
      const cur = this.current();
      const c = this._name && TUTORIALS_V20[this._name];
      if (cur && c && this._idx === c.steps.length - 1) this.next();
      else this.skip();
    });
    el.querySelector('#v20-tut-progress').textContent =
      `${cfg.title} · ${this._idx + 1}/${cfg.steps.length}` +
      (this.isDone(this._name) ? '（已完成过，可重练）' : '');
    el.querySelector('#v20-tut-title').textContent = step.title;
    el.querySelector('#v20-tut-text').textContent = step.text;
    el.querySelector('#v20-tut-hint').textContent = step.hint || '';
    const isLast = this._idx === cfg.steps.length - 1;
    el.querySelector('#v20-tut-skip').textContent = isLast ? '完成领奖 🎁' : '跳过教程';
    // 详解
    const detailEl = el.querySelector('#v20-tut-detail');
    if (detailEl) {
      detailEl.textContent = TUT_V20_DETAILS[`${this._name}:${step.id}`] || '';
    }
    el.classList.remove('hidden');
    // 立刻刷一次高亮目标
    this._lastTarget = 0;
  }

  _hideBanner() {
    const el = (this._bannerEl && document.getElementById('v20-tutorial')) || document.getElementById('v20-tutorial');
    if (el) el.classList.add('hidden');
  }

  // ---------- 帮助面板入口 ----------

  /** bindUI()：在帮助面板注入 4 个教程入口按钮。
   * 帮助面板的 nav 可能由 help.js 动态重建，所以：
   *   1) 立即尝试注入一次；
   *   2) 监听 #btn-help（帮助打开按钮），每次打开后延迟补注入。 */
  bindUI() {
    if (typeof document === 'undefined' || this._uiBound) return;
    this._uiBound = true;
    // 经济教程降级判定：滑杆被拖过 → 记标记（document 级委托，面板是后建的）
    document.addEventListener('input', (e) => {
      const id = e.target && e.target.id;
      if (!this.game) return;
      try {
        if (id === 'v20-eco-tax') this.game._v20TaxTouched = true;
        if (id === 'v20-eco-wage') this.game._v20WageTouched = true;
      } catch (err) {}
    });
    const inject = () => v20_try('tut_help_inject', () => this._injectHelpButtons(), null);
    inject();
    const helpBtn = document.getElementById('btn-help');
    if (helpBtn) {
      helpBtn.addEventListener('click', () => setTimeout(inject, 80));
    }
  }

  /** 帮助按钮文案：✅已完成 / ▶断点续学 / 默认标题。 */
  _helpButtonLabel(key) {
    const cfg = TUTORIALS_V20[key];
    if (this.isDone(key)) return `✅ ${cfg.title}`;
    const last = this._store.lastActive;
    if (last && last.name === key && !this._active) {
      const n = Math.min(last.idx + 1, cfg.steps.length);
      return `▶ ${cfg.title}（继续 ${n}/${cfg.steps.length}）`;
    }
    return cfg.title;
  }

  /** 实际注入：向 #help-nav 追加总览行 + 4 个按钮；已存在则只刷新文案。 */
  _injectHelpButtons() {
    const nav = document.getElementById('help-nav');
    if (!nav) return;
    const keys = Object.keys(TUTORIALS_V20);
    // —— 总览行 ——
    let ov = nav.querySelector('[data-v20-tut-overview]');
    const doneN = keys.filter(k => this.isDone(k)).length;
    if (!ov) {
      ov = v20_el('div', '', '');
      ov.setAttribute('data-v20-tut-overview', '1');
      ov.style.cssText = 'width:100%;font-size:12px;opacity:.75;padding:6px 4px';
      nav.insertBefore(ov, nav.firstChild);
    }
    ov.textContent = `📚 新系统教程 ${doneN}/${keys.length} 完成`;
    // —— 总览入口 ——
    let ovBtn = nav.querySelector('[data-v20-tut-overview-btn]');
    if (!ovBtn) {
      ovBtn = v20_el('button', 'help-tab', '📚 教程总览');
      ovBtn.type = 'button';
      ovBtn.setAttribute('data-v20-tut-overview-btn', '1');
      ovBtn.title = '查看四个教程的进度、用时与奖励';
      ovBtn.setAttribute('aria-label', '新系统教程总览');
      ovBtn.addEventListener('click', () => {
        const hp = document.getElementById('help-panel');
        if (hp) hp.classList.add('hidden');
        this.openOverview();
      });
      nav.appendChild(ovBtn);
    }
    // —— 4 个入口按钮 ——
    for (const key of keys) {
      const cfg = TUTORIALS_V20[key];
      let b = nav.querySelector(`[data-v20-tut="${key}"]`);
      if (b) {
        b.textContent = this._helpButtonLabel(key);
        continue;
      }
      b = v20_el('button', 'help-tab', this._helpButtonLabel(key));
      b.type = 'button';
      b.dataset.v20Tut = key;
      b.title = cfg.desc;
      b.setAttribute('aria-label', cfg.title + '：' + cfg.desc);
      b.addEventListener('click', () => {
        // 关帮助面板，开教程（有断点则续学）
        const hp = document.getElementById('help-panel');
        if (hp) hp.classList.add('hidden');
        const last = this._store.lastActive;
        if (last && last.name === key && !this.isDone(key)) this.start(key, last.idx);
        else this.start(key);
      });
      nav.appendChild(b);
    }
  }

  /** 完成/跳过后刷新帮助按钮的文案（含 ✅ 与总览计数）。 */
  _refreshHelpButtons() {
    const nav = document.getElementById('help-nav');
    if (!nav) return;
    const keys = Object.keys(TUTORIALS_V20);
    const ov = nav.querySelector('[data-v20-tut-overview]');
    if (ov) {
      const doneN = keys.filter(k => this.isDone(k)).length;
      ov.textContent = `📚 新系统教程 ${doneN}/${keys.length} 完成`;
    }
    for (const key of keys) {
      const b = nav.querySelector(`[data-v20-tut="${key}"]`);
      if (b) b.textContent = this._helpButtonLabel(key);
    }
  }
} // class TutorialsV20 结束

// ============================ 给其他模块的集成说明 ============================
/* ----------------------------------------------------------------------------
 * v2.0 新系统（电网/水管/交通/经济）由其他文件提供，接入 ui_v20.js 只需满足：
 *
 *   game.powergrid = {
 *     cables: Set,                 // 已铺设电缆集合（size 即可，内容不限）
 *     connectedCount: Number,      // 已联网用电建筑数（可选）
 *     renderOverlay(ctx, map, tile, game) { ... },  // 覆盖层绘制（可选）
 *   };
 *   game.waternet = {
 *     pipes: Set, connectedCount: Number,
 *     renderOverlay(ctx, map, tile, game) { ... },
 *   };
 *   game.transit = {
 *     roadsBuilt: Number, routesActive: Number,
 *     renderOverlay(ctx, map, tile, game) { ... },
 *   };
 *   game.economy = {
 *     credits: Number,                                   // 当前星币
 *     getIncomeRate() / getExpenseRate(),                // 每分钟收支（可选）
 *     breakdown(),        // {tax,wage,maint,trade}×{income,expense}（可选）
 *     getTaxRate() / setTaxRate(r),        // r ∈ [0, 0.3]
 *     getWageLevel() / setWageLevel(v),    // v 为倍率，1.0 = 基准
 *     isBankrupt(), addCredits(n),         // 可选
 *   };
 *
 * 约定：
 *   - renderOverlay 缺失时，OverlayManager 自动用内置基础分析渲染代替，
 *     所以可以先上 UI 再补系统。
 *   - 所有字段都是“有则用、无则降级”，不会因为缺字段崩溃。
 *   - 教程/成就想监听步骤完成：game.v20.tutorials.onStepComplete = (name, idx, step) => {}
 *   - 想读覆盖层分析：game.v20.overlay.getModeStats()
 *   - 想读经济摘要：game.v20.economy.getSummary()
 *
 * 自检：在控制台跑 v20_selftest()，用 mock 数据验证三个模块的核心逻辑。
 * ----------------------------------------------------------------------------
 */

/** 运行时自检：mock 数据跑三个模块的核心逻辑，返回 {pass, fail, logs}。 */
function v20_selftest() {
  const logs = [];
  let pass = 0, fail = 0;
  const ok = (name, cond) => {
    if (cond) { pass++; logs.push(`✅ ${name}`); }
    else { fail++; logs.push(`❌ ${name}`); }
  };

  // —— mock 世界 ——
  const mockBuildings = {
    solar: { name: '太阳能板', icon: '🔆', levels: [{ power: 3 }, { power: 8 }] },
    nuclear: { name: '核电站', icon: '☢️', levels: [{ power: 20 }] },
    miner: { name: '采矿机', icon: '🏭', levels: [{ powerUse: 1 }, { powerUse: 2 }] },
    pump: { name: '抽水机', icon: '💧', levels: [{ produce: { ice: 2 } }] },
    greenhouse: { name: '温室', icon: '🌾', levels: [{}] },
    depot: { name: '运输站', icon: '🚚', levels: [{}] },
  };
  const realBUILDINGS = (typeof BUILDINGS !== 'undefined') ? BUILDINGS : undefined;
  try { globalThis.BUILDINGS = mockBuildings; } catch (e) {}
  const game = {
    tile: 13,
    map: { size: 50 },
    builder: {
      buildings: [
        { id: 'solar', x: 10, y: 10, level: 2 },   // 8⚡
        { id: 'miner', x: 12, y: 10, level: 1 },   // 1⚡
        { id: 'miner', x: 13, y: 10, level: 2 },   // 2⚡
        { id: 'pump', x: 20, y: 20, level: 1 },
        { id: 'greenhouse', x: 22, y: 20, level: 1 },
        { id: 'depot', x: 30, y: 30, level: 1 },
      ],
      totalPower() { return 8; },
      totalPowerUse() { return 3; },
      isRoad(x, y) { return y === 32 && x >= 28 && x < 33; },
    },
    player: { inv: { water: 50, iron: 100 } },
    logistics: { trucks: [{ px: 30, py: 32 }] },
    camera: { zoom: 1 },
    toast() {},
  };

  // —— 第一部分：OverlayManager ——
  const ov = new OverlayManager();
  ok('overlay 默认 none', ov.getMode() === 'none');
  ov.setMode('power');
  ok('overlay setMode/getMode', ov.getMode() === 'power');
  ov.setMode('nope');
  ok('overlay 非法模式回 none', ov.getMode() === 'none');
  ov.toggle('traffic');
  ok('overlay toggle 开', ov.getMode() === 'traffic');
  ov.toggle('traffic');
  ok('overlay toggle 关', ov.getMode() === 'none');
  const pa = ov._analyzePower(game);
  ok('power 分析：1 发电 2 用电', pa.producers.length === 1 && pa.consumers.length === 2);
  ok('power 盈余 5', pa.totalProd - pa.totalUse === 5);
  ok('power 无缺电', pa.unpowered.length === 0);
  const loads = ov._assignProducerLoad(pa.producers, pa.consumers);
  ok('power 负载分配', loads.length === 1 && loads[0].loadUse === 3);
  const wa = ov._analyzeWater(game);
  ok('water 分析：1 水源 1 用户', wa.sources.length === 1 && wa.users.length === 1);
  ok('water 温室在圈内', wa.uncovered.length === 0);
  const ta = ov._analyzeTraffic(game, game.map);
  ok('traffic 道路 5 格', ta.roadCount === 5);
  ok('traffic 枢纽 1', ta.hubs.length === 1);
  ov.setMode('power');
  const legend = ov.renderLegend(game);
  ok('legend 无问题时显示 ✅', legend.includes('v20-legend-ok'));
  ok('legend 有建议区', legend.includes('v20-legend-advice'));
  ok('legend 有设置区', legend.includes('v20-legend-settings'));
  ok('getModeStats', ov.getModeStats(game).surplus === 5);
  const adv = ov._advisePower(game);
  ok('power 建议非空', Array.isArray(adv) && adv.length > 0);

  // —— 第二部分：EconomyPanel ——
  const eco = new EconomyPanel(game);
  ok('economy 缺失时 _sys() 为 null', eco._sys() === null);
  ok('niceTicks', JSON.stringify(eco._niceTicks(0, 100, 5).ticks) === '[0,20,40,60,80,100]');
  ok('shortNum 万', eco._shortNum(25000) === '2.5万');
  ok('fmtDuration', eco._fmtDuration(90) === '约 1 小时30 分');
  const h = eco._computeHealth();
  ok('无系统时健康度 null', h.score === null);

  // —— 第三部分：TutorialsV20 ——
  const tut = new TutorialsV20(game);
  ok('教程数 4', Object.keys(TUTORIALS_V20).length === 4);
  for (const k of Object.keys(TUTORIALS_V20)) {
    const n = TUTORIALS_V20[k].steps.length;
    ok(`${k} 步骤 8-10`, n >= 8 && n <= 10);
  }
  ok('步骤 check 全是函数',
    Object.values(TUTORIALS_V20).every(t => t.steps.every(s => typeof s.check === 'function')));
  ok('start 非法返回 false', tut.start('nope') === false);
  ok('详解覆盖全部步骤',
    Object.values(TUTORIALS_V20).every(t => t.steps.every(s => {
      const kk = Object.keys(TUTORIALS_V20).find(k => TUTORIALS_V20[k] === t);
      return typeof TUT_V20_DETAILS[`${kk}:${s.id}`] === 'string';
    })));
  ok('配置校验通过', v20_validateTutorials() === true);
  const pr = tut.getProgress('power');
  ok('getProgress 形状', pr && pr.total === 9 && pr.done === false);
  ok('getAllProgress 4 项', Object.keys(tut.getAllProgress()).length === 4);

  // —— 恢复全局 ——
  try {
    if (realBUILDINGS === undefined) delete globalThis.BUILDINGS;
    else globalThis.BUILDINGS = realBUILDINGS;
  } catch (e) {}

  const summary = `v20 自检：${pass} 通过 / ${fail} 失败`;
  logs.push(summary);
  if (typeof console !== 'undefined' && console.log) {
    console.log('[ui_v20] ' + summary);
    for (const l of logs) console.log('  ' + l);
  }
  return { pass, fail, logs };
}

// ============================ 自动装配 ============================
/* 启动流程（不改 index.html / game.js）：
 *   DOMContentLoaded 后轮询 window.__starport（game.js 启动时挂载），
 *   最多等 30 秒；拿到后实例化三个模块并挂接。任何一步失败只记 console，
 *   不影响游戏主流程。 */

function v20_boot() {
  if (typeof window === 'undefined') return false;
  const game = window.__starport;
  if (!game || game._v20Booted) return !!game;
  game._v20Booted = true;
  try {
    game.v20 = game.v20 || {};
    // 1) 覆盖层
    const overlay = new OverlayManager();
    overlay.attach(game);
    overlay.bindModeButtons();
    overlay.bindLegendUI();
    overlay.bindKeys();
    game.v20.overlay = overlay;
    // 2) 经济面板
    const eco = new EconomyPanel(game);
    eco.attach(game);
    eco.bindUI(); // 系统缺失时自动隐藏；update() 里检测到系统出现后补注入
    game.v20.economy = eco;
    // 3) 教程
    const tut = new TutorialsV20(game);
    tut.attach(game);
    tut.bindUI();
    game.v20.tutorials = tut;
    // 4) 校验教程配置（开发期早发现问题）
    v20_try('v20_validate', () => v20_validateTutorials(), null);
    // 5) 调试钩子：控制台可直接访问三个模块
    try { window.__v20 = game.v20; } catch (e) {}
    if (typeof console !== 'undefined' && console.log) {
      console.log('[ui_v20] 地图覆盖层 / 经济面板 / 新系统教程已装配');
    }
  } catch (e) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('[ui_v20] 装配失败（游戏不受影响）：', e && e.message);
    }
  }
  return true;
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (v20_boot()) return;
    // game.js 的 DOMContentLoaded 可能后执行：轮询补救
    let tries = 0;
    const timer = setInterval(() => {
      tries++;
      if (v20_boot() || tries >= 60) clearInterval(timer);
    }, 500);
  });
}

/* ============================================================
 * 剧本面板（ScenarioPanelV20）
 * ------------------------------------------------------------
 * 显示当前 v20 剧本的进度：目标清单（✓/○）、剩余时间、
 * 提示。无 v20 剧本运行时自动隐藏。
 * ============================================================
 */

class ScenarioPanelV20 {
  constructor() {
    this.el = null;
    this.game = null;
    this._timer = null;
  }

  bind(game) {
    this.game = game;
    this.build();
    return this;
  }

  build() {
    if (this.el) return;
    const el = document.createElement('div');
    el.id = 'v20-scenario-panel';
    el.style.cssText = `
      position: fixed; top: 64px; right: 12px; z-index: 998;
      width: 260px; max-height: 60vh; overflow-y: auto;
      background: rgba(10, 14, 24, 0.92);
      border: 1px solid rgba(120, 180, 255, 0.35);
      border-radius: 10px; padding: 10px 12px;
      color: #dfe8ff; font-size: 12px; line-height: 1.5;
      display: none; backdrop-filter: blur(6px);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
    `;
    document.body.appendChild(el);
    this.el = el;
  }

  // 每秒刷新
  update() {
    if (!this.el || !this.game) return;
    try {
      const runner = this.game._v20scenarioRunner;
      if (!runner) { this.el.style.display = 'none'; return; }
      const p = runner.progress(this.game);
      if (!p) { this.el.style.display = 'none'; return; }
      this.el.style.display = 'block';
      this.render(p);
    } catch (e) {}
  }

  render(p) {
    const sm = this.game.scenario;
    const sc = sm.current;
    const goals = sc.goals || [];
    const runner = this.game._v20scenarioRunner;
    const doneSet = runner._goalDone;

    let timeHtml = '';
    if (p.timeLeft !== null && p.timeLeft !== undefined) {
      const m = Math.floor(p.timeLeft / 60);
      const s = p.timeLeft % 60;
      const urgent = p.timeLeft < 60 ? 'color:#ff6b6b;font-weight:bold;' : '';
      timeHtml = `<div style="margin:6px 0;${urgent}">⏱️ 剩余 ${m}:${String(s).padStart(2, '0')}</div>`;
    }

    const goalsHtml = goals.map((g, i) => {
      const done = doneSet.has(i);
      return `<div style="margin:3px 0;color:${done ? '#51cf66' : '#adb5bd'};">
        ${done ? '✓' : '○'} ${this.esc(g.desc)}
      </div>`;
    }).join('');

    const tipsHtml = (p.tips || []).slice(0, 3).map(t =>
      `<div style="margin:2px 0;color:#868e96;font-size:11px;">💡 ${this.esc(t)}</div>`
    ).join('');

    this.el.innerHTML = `
      <div style="font-weight:bold;font-size:13px;margin-bottom:4px;">
        ${this.esc(p.icon)} ${this.esc(p.name)}
      </div>
      <div style="color:#74c0fc;margin-bottom:4px;">${p.done}/${p.total} 目标</div>
      ${timeHtml}
      <div style="margin:6px 0;">${goalsHtml}</div>
      <div style="border-top:1px solid rgba(255,255,255,0.1);margin-top:6px;padding-top:6px;">
        ${tipsHtml}
      </div>
      <button id="v20-scen-quit" style="
        margin-top:8px;width:100%;padding:4px;
        background:rgba(255,107,107,0.15);border:1px solid rgba(255,107,107,0.4);
        color:#ff6b6b;border-radius:6px;cursor:pointer;font-size:11px;
      ">放弃剧本</button>
    `;

    const quitBtn = this.el.querySelector('#v20-scen-quit');
    if (quitBtn) {
      quitBtn.onclick = () => {
        try {
          sm.setScenario('standard');
          if (this.game.toast) this.game.toast('已退出剧本');
        } catch (e) {}
      };
    }
  }

  esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  }

  start() {
    if (this._timer) return;
    this._timer = setInterval(() => this.update(), 1000);
  }

  stop() {
    if (this._timer) { clearInterval(this._timer); this._timer = null; }
  }
}

// 剧本面板自启动
function v20_scenarioPanelBoot() {
  try {
    if (typeof document === 'undefined') return null;
    const poll = setInterval(() => {
      try {
        const g = window.__starport;
        if (g && g.game && !g.game._v20scenPanel) {
          g.game._v20scenPanel = new ScenarioPanelV20().bind(g.game);
          g.game._v20scenPanel.start();
          clearInterval(poll);
        }
      } catch (e) {}
    }, 2000);
    return poll;
  } catch (e) { return null; }
}
try {
  if (typeof window !== 'undefined') v20_scenarioPanelBoot();
} catch (e) {}

/* v20 剧本选择器：列出所有 v20 剧本，点击开始 */
function v20_showScenarioPicker() {
  try {
    const g = window.__starport;
    if (!g || !g.game) return;
    const game = g.game;
    const list = (typeof V20_SCENARIOS !== 'undefined') ? V20_SCENARIOS : [];
    if (!list.length) { game.toast('暂无 v2.0 剧本'); return; }

    let panel = document.getElementById('v20-scen-picker');
    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'v20-scen-picker';
      panel.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        z-index: 1001; width: min(560px, 92vw); max-height: 80vh; overflow-y: auto;
        background: rgba(8, 12, 22, 0.97); border: 1px solid rgba(120, 180, 255, 0.4);
        border-radius: 14px; padding: 18px; color: #dfe8ff;
      `;
      document.body.appendChild(panel);
    }
    panel.style.display = 'block';

    const cards = list.map(s => `
      <div data-scen="${s.id}" style="
        border: 1px solid rgba(120,180,255,0.25); border-radius: 10px;
        padding: 10px 12px; margin: 8px 0; cursor: pointer;
        background: rgba(255,255,255,0.03); transition: background 0.15s;
      " onmouseover="this.style.background='rgba(120,180,255,0.12)'"
         onmouseout="this.style.background='rgba(255,255,255,0.03)'">
        <div style="font-weight:bold;font-size:14px;">${s.icon} ${s.name}
          <span style="float:right;color:#ffd43b;">${'★'.repeat(s.difficulty || 3)}</span>
        </div>
        <div style="color:#adb5bd;font-size:12px;margin:4px 0;">${s.desc}</div>
        <div style="color:#74c0fc;font-size:11px;">目标：${(s.goals || []).map(x => x.desc).join('；')}</div>
      </div>
    `).join('');

    panel.innerHTML = `
      <div style="font-size:16px;font-weight:bold;margin-bottom:8px;">🎯 v2.0 挑战剧本</div>
      <div style="color:#868e96;font-size:12px;margin-bottom:10px;">
        围绕电网/水管/交通/经济新系统设计的 10 个挑战。通关有奖励。
      </div>
      ${cards}
      <button id="v20-scen-close" style="
        margin-top:10px;width:100%;padding:8px;
        background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);
        color:#dfe8ff;border-radius:8px;cursor:pointer;
      ">关闭</button>
    `;

    panel.querySelectorAll('[data-scen]').forEach(card => {
      card.onclick = () => {
        const id = card.getAttribute('data-scen');
        try {
          game.scenario.setScenario(id);
          panel.style.display = 'none';
        } catch (e) { game.toast('启动失败'); }
      };
    });
    panel.querySelector('#v20-scen-close').onclick = () => {
      panel.style.display = 'none';
    };
  } catch (e) {}
}

if (typeof module !== 'undefined') {
  module.exports = {
    OverlayManager,
    EconomyPanel,
    TutorialsV20,
    TUTORIALS_V20,
    OVERLAY_MODES,
    ScenarioPanelV20,
    v20_boot,
    v20_selftest,
    v20_validateTutorials,
    v20_showScenarioPicker,
  };
}

/* 教程步骤详解（TUT_V20_DETAILS）：每步一段进阶讲解，显示在横幅的
 * “为什么？”折叠区里。key = 教程名 + 步 id（如 'power:p3'）。 */
const TUT_V20_DETAILS = {
  // —— 电网 ——
  'power:p1': '覆盖层是 v2.0 的核心工具：它把“看不见的系统”变成颜色。养成习惯——每次扩建后按 1 看一眼，红色闪烁就是待办事项。',
  'power:p2': '太阳能板便宜（铁×8）但占地；核电站后期解锁，单体发电量是太阳能的 6 倍以上。前期铺太阳能过渡，别一次造太多——维护费也是钱。',
  'power:p3': '电缆是“路”，电是“车”：没有电缆连接，发电建筑就是孤岛。铺设时沿着建筑密集区走，一段电缆可以服务多个建筑。',
  'power:p4': '先接采矿机：它产铁，铁能换更多建筑，是滚雪球的起点。实验室耗电大户，早期别急着接。',
  'power:p5': '5 段电缆大约能覆盖一个扇区。注意看金色虚线的流动方向——不流动的线说明那一端没有用电需求。',
  'power:p6': '盈余不是越大越好：超出太多的发电量等于浪费建材。保持 10%–20% 盈余最经济，人口暴涨前再补。',
  'power:p7': '升级 vs 新建：升级不占新格子，适合地皮紧张时；新建适合开分基地。2 级太阳能的性价比通常高于新建。',
  'power:p8': '核电站需要铀矿支撑供应链，先确认铀矿采集跟得上，否则就是高级摆设。',
  'power:p9': '电网习惯 checklist：①无红闪 ②盈余 10%+ ③发电建筑无受损（🔧）。以后每次教程外的扩建都按这个自查。',
  // —— 水管 ——
  'water:w1': '水和电是两套独立网络，但逻辑相通：水源=发电站，水管=电缆。缺水时人口直接停止增长，比缺电更致命。',
  'water:w2': '抽水机要建在冰原（极地地形）附近产量翻倍，建错位置等于白建。放之前先看地形颜色。',
  'water:w3': '水管优先连温室和居住舱——这两处断水会连锁反应：没水→没食物→人口掉→税收崩。',
  'water:w4': '温室 1 座供约 10 人口的食物，规划时按“人口÷10”配温室数，再反推水管长度。',
  'water:w5': '居住舱放供水圈边缘是常见错误：圈是按格心距离算的，差一格就是“覆盖外”。宁可水管多铺一格。',
  'water:w6': '100 库存是安全线：沙尘暴/冰尘暴会让水厂减产 50%–80%，没有库存就得眼睁睁看人口掉。',
  'water:w7': '升级水源建筑比新建水管便宜，尤其当你的水管网已经成型时。',
  'water:w8': '双水源要分开布局：陨石/灾难可能砸坏一座，另一座能顶住，这叫“冗余”。',
  'water:w9': '供水 checklist：①无红闪 ②库存≥100 ③双水源分开放置。做到这三条，人口增长就不会被水卡脖子。',
  // —— 交通 ——
  'transit:t1': '交通覆盖层里，橙色越密的地方经济越活跃。规划新城区时，先画路再放建筑，顺序反了会返工。',
  'transit:t2': '道路有个隐藏收益：宇航员在路上移动更快，采集往返效率直接提升。主干道先连矿区和基地。',
  'transit:t3': '运输站是“车库”，物流中心是“调度室”。先有车库再谈调度，别跳过步骤。',
  'transit:t4': '物流中心尽量放在地图中心：它到各建筑的平均距离最短，车队空跑最少。',
  'transit:t5': '枢纽干线（金色虚线）是你的物流主动脉。主动脉断了，分支再多也白搭——优先保证干线连通。',
  'transit:t6': '第一辆车派去拉铁矿：铁是万物之源。车是自动跑的，建完不用管，去忙别的。',
  'transit:t7': '2 级运输站的装卸速度提升最明显，车多了一定要升，否则车会在站口排队。',
  'transit:t8': '20 格路网是“镇级”规模的分水岭。之后每开一个新扇区，先把路铺过去再谈建筑。',
  'transit:t9': '3 辆车+双枢纽=基础物流网。后期目标是每个资源产区都有车直达，这一步先做到“不断货”。',
  // —— 经济 ——
  'economy:e1': '经济面板是你的“财务报表”。很多玩家破产不是因为不会玩，是因为从来没打开过这面板。',
  'economy:e2': '看曲线的正确姿势：先看黄色余额线的斜率——上扬健康、走平预警、下滑危险。再看红绿线的开口。',
  'economy:e3': '税率 10% 是新手安全值。记住公式：人口×税率=税收。人口暴涨期是加税的最好时机。',
  'economy:e4': '工资影响“满意度”这个隐藏属性：太低人口增长慢，太高支出爆炸。100%–120% 是大多数时期的甜点区。',
  'economy:e5': '贸易站是印钞机：把过剩的铁/冰卖成星币。价格每 60 秒刷新，低买高卖的空间自己把握。',
  'economy:e6': '500 星币是第一道坎：够解锁一个扇区或升一级关键建筑。钱要花在刀刃上，别囤着。',
  'economy:e7': '净收入转负是破产的前兆，比余额见底早得多。看到合计行为负，立刻三板斧：加税、降薪、卖货。',
  'economy:e8': '经济 checklist：①每天看一次曲线 ②净收入为正 ③缓冲够撑 30 分钟。养成习惯，破产警告就只是个摆设。',
};

/** 校验 TUTORIALS_V20 配置形状（加载时跑一次，配置写错立刻在 console 告警）。 */
function v20_validateTutorials() {
  if (typeof console === 'undefined' || !console.warn) return true;
  let ok = true;
  const fail = (m) => { ok = false; console.warn('[ui_v20] 教程配置问题：' + m); };
  if (!TUTORIALS_V20 || typeof TUTORIALS_V20 !== 'object') {
    fail('TUTORIALS_V20 缺失');
    return false;
  }
  const keys = Object.keys(TUTORIALS_V20);
  if (!keys.length) fail('没有任何教程');
  const seenStepIds = {};
  for (const key of keys) {
    const t = TUTORIALS_V20[key];
    if (!t.title) fail(`${key} 缺少 title`);
    if (!t.icon) fail(`${key} 缺少 icon`);
    if (!Array.isArray(t.steps) || t.steps.length < 8 || t.steps.length > 10) {
      fail(`${key} 步骤数应为 8–10，实际 ${t.steps && t.steps.length}`);
    }
    if (!t.reward || typeof t.reward.text !== 'string') fail(`${key} 缺少 reward.text`);
    if (!Array.isArray(t.checklist) || t.checklist.length < 3) fail(`${key} checklist 应至少 3 项`);
    if (!Array.isArray(t.cheatsheet) || !t.cheatsheet.length) fail(`${key} 缺少 cheatsheet`);
    for (let i = 0; i < (t.steps || []).length; i++) {
      const s = t.steps[i];
      const where = `${key}[${i}]`;
      if (!s.id) fail(`${where} 缺少 id`);
      if (s.id && seenStepIds[s.id]) fail(`步骤 id 重复：${s.id}`);
      seenStepIds[s.id] = 1;
      if (!s.title) fail(`${where} 缺少 title`);
      if (!s.text) fail(`${where} 缺少 text`);
      if (typeof s.check !== 'function') fail(`${where} check 不是函数`);
      if (s.target && typeof s.target !== 'function') fail(`${where} target 不是函数`);
      if (!TUT_V20_DETAILS[`${key}:${s.id}`]) fail(`${where} 缺少详解（TUT_V20_DETAILS）`);
    }
  }
  return ok;
}
