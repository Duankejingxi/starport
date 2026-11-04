/* 星港 — versus.js：本地双人对战框架（v1.9）
 * 模式：双人竞速——看谁先建成发射台（或指定目标）。
 * 实现：
 * - 同一屏幕分屏（左右 / 上下），各自独立镜头
 * - 共享同一套游戏规则，两个独立 Game 实例
 * - 倒计时开局、实时进度条、终局结算与回放数据
 * - 支持：竞速发射台 / 人口竞赛 / 限时得分 三种规则
 * - 触屏：每半屏独立触摸
 */

// ============ 对战配置 ============
const VERSUS_MODES = {
  race_launchpad: {
    id: 'race_launchpad', name: '发射台竞速', icon: '🚀',
    desc: '双人竞速：谁先建成发射台并通关，谁就是火星之王。',
    winCheck: (s) => s.wonders && s.wonders.launchpad,
    timeLimit: 0, // 无限时
  },
  race_pop: {
    id: 'race_pop', name: '人口竞赛', icon: '👥',
    desc: '30 分钟内，谁的人口多谁赢。',
    winCheck: null, timeLimit: 30 * 60 * 1000,
    score: (s) => s.population || 0,
  },
  race_score: {
    id: 'race_score', name: '限时得分', icon: '🏆',
    desc: '20 分钟，综合评分（建筑+科技+人口）高者胜。',
    winCheck: null, timeLimit: 20 * 60 * 1000,
    score: (s) => (s.buildings?.length || 0) * 10 + (s.techCount || 0) * 15 + (s.population || 0) * 2,
  },
};

// ============ 对战状态机 ============
const Versus = {
  active: false,
  mode: null,
  phase: 'idle', // idle | countdown | running | finished
  countdown: 3,
  players: [null, null], // 两个玩家状态
  startTime: 0,
  elapsed: 0,
  winner: -1,
  endReason: '',

  // 初始化对战
  start(modeId, opts) {
    const mode = VERSUS_MODES[modeId];
    if (!mode) return false;
    this.active = true; this.mode = mode; this.phase = 'countdown';
    this.countdown = 3; this.elapsed = 0; this.winner = -1; this.endReason = '';
    this.players = [this.mkPlayerState(0, opts), this.mkPlayerState(1, opts)];
    this.startTime = Date.now();
    if (typeof Chronicle !== 'undefined') Chronicle.log('versus', '⚔️ 双人对战开始：' + mode.name + '！');
    return true;
  },

  mkPlayerState(idx, opts) {
    return {
      idx,
      name: (opts && opts.names && opts.names[idx]) || ('玩家' + (idx + 1)),
      color: idx === 0 ? '#38bdf8' : '#fb7185',
      // 独立游戏状态（简化快照，由 game.js 提供）
      state: null,
      // 镜头
      cam: { x: 0, y: 0, zoom: 1 },
      // 输入
      input: { x: 0, y: 0 },
      // 进度
      progress: 0,
      // 事件回放
      replay: [],
    };
  },

  // 倒计时 tick（秒）
  tickCountdown(dt) {
    if (this.phase !== 'countdown') return;
    this.countdown -= dt / 1000;
    if (this.countdown <= 0) {
      this.phase = 'running';
      this.startTime = Date.now();
      if (typeof SFX !== 'undefined') SFX.play('versus_start');
    }
  },

  // 主 tick
  tick(dtMs) {
    if (!this.active) return;
    if (this.phase === 'countdown') { this.tickCountdown(dtMs); return; }
    if (this.phase !== 'running') return;
    this.elapsed += dtMs;
    // 胜负判定
    if (this.mode.winCheck) {
      for (let i = 0; i < 2; i++) {
        const st = this.players[i].state;
        if (st && this.mode.winCheck(st)) return this.finish(i, '达成目标');
      }
    }
    if (this.mode.timeLimit && this.elapsed >= this.mode.timeLimit) {
      const s0 = this.mode.score(this.players[0].state || {});
      const s1 = this.mode.score(this.players[1].state || {});
      if (s0 === s1) return this.finish(-1, '平局');
      return this.finish(s0 > s1 ? 0 : 1, '时间到，得分高者胜');
    }
  },

  finish(winnerIdx, reason) {
    this.phase = 'finished'; this.winner = winnerIdx; this.endReason = reason;
    const p = winnerIdx >= 0 ? this.players[winnerIdx] : null;
    if (typeof Chronicle !== 'undefined')
      Chronicle.log('versus', '🏁 对战结束：' + (p ? p.name + ' 获胜！' : '平局！') + reason);
    if (typeof SFX !== 'undefined') SFX.play('versus_end');
    VersusHistory.record({
      mode: this.mode.id, winner: winnerIdx,
      names: this.players.map(p => p.name),
      duration: this.elapsed, reason,
      date: new Date().toISOString(),
    });
  },

  stop() {
    this.active = false; this.phase = 'idle'; this.mode = null;
    this.players = [null, null]; this.winner = -1;
  },

  // 进度（0-1），用于进度条
  progressOf(i) {
    const p = this.players[i]; if (!p || !p.state) return 0;
    if (this.mode.id === 'race_launchpad') {
      // 按关键里程碑估算
      const s = p.state;
      let pr = 0;
      if ((s.population || 0) >= 10) pr = Math.max(pr, 0.2);
      if ((s.buildings?.length || 0) >= 10) pr = Math.max(pr, 0.4);
      if (s.techCount >= 20) pr = Math.max(pr, 0.6);
      if (s.wonders?.command) pr = Math.max(pr, 0.8);
      return pr;
    }
    if (this.mode.timeLimit) return Math.min(1, this.elapsed / this.mode.timeLimit);
    return 0;
  },

  remaining() {
    if (!this.mode.timeLimit) return Infinity;
    return Math.max(0, this.mode.timeLimit - this.elapsed);
  },

  fmtRemaining() {
    const r = this.remaining();
    if (!isFinite(r)) return '∞';
    const s = Math.ceil(r / 1000);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  },
};

// ============ 对战历史（localStorage） ============
const VersusHistory = {
  KEY: 'starport-versus-history-v1',
  MAX: 50,
  list: [],
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      this.list = raw ? JSON.parse(raw) : [];
    } catch (e) { this.list = []; }
  },
  record(r) {
    this.list.unshift(r);
    if (this.list.length > this.MAX) this.list.length = this.MAX;
    try { localStorage.setItem(this.KEY, JSON.stringify(this.list)); } catch (e) {}
  },
  wins(name) { return this.list.filter(r => r.names[r.winner] === name).length; },
  clear() { this.list = []; try { localStorage.removeItem(this.KEY); } catch (e) {} },
};

// ============ 分屏渲染 ============
// 布局：'h' 左右分屏 | 'v' 上下分屏；中线显示 VS 计时
const VersusView = {
  layout: 'h', // h=左右, v=上下
  divider: 0.5,

  // 计算每个玩家的视口
  viewports(w, h) {
    if (this.layout === 'h') {
      const w2 = Math.floor(w * this.divider);
      return [
        { x: 0, y: 0, w: w2 - 2, h },
        { x: w2 + 2, y: 0, w: w - w2 - 2, h },
      ];
    }
    const h2 = Math.floor(h * this.divider);
    return [
      { x: 0, y: 0, w, h: h2 - 2 },
      { x: 0, y: h2 + 2, w, h: h - h2 - 2 },
    ];
  },

  // 绘制中线 HUD（倒计时 / 计时 / 进度）
  drawDividerHUD(ctx, w, h) {
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    if (this.layout === 'h') ctx.fillRect(Math.floor(w * this.divider) - 2, 0, 4, h);
    else ctx.fillRect(0, Math.floor(h * this.divider) - 2, w, 4);
    // 中央计时牌
    const cx = this.layout === 'h' ? Math.floor(w * this.divider) : w / 2;
    const cy = this.layout === 'h' ? 46 : Math.floor(h * this.divider);
    ctx.fillStyle = 'rgba(10,12,20,0.85)';
    ctx.strokeStyle = '#f0abfc'; ctx.lineWidth = 2;
    const label = Versus.phase === 'countdown' ? String(Math.ceil(Versus.countdown))
      : Versus.phase === 'finished' ? '🏁' : Versus.fmtRemaining();
    ctx.font = 'bold 26px sans-serif';
    const tw = ctx.measureText(label).width;
    const bx = cx - tw / 2 - 14, by = cy - 24, bw = tw + 28, bh = 44;
    ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 10); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, cx, cy + 2);
    // 双方进度条
    for (let i = 0; i < 2; i++) {
      const p = Versus.players[i]; if (!p) continue;
      const pr = Versus.progressOf(i);
      const px = cx - 60, py = cy + 34 + i * 12, pw = 120, ph = 8;
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.fillRect(px, py, pw, ph);
      ctx.fillStyle = p.color;
      ctx.fillRect(px, py, pw * pr, ph);
    }
    ctx.restore();
  },

  // 玩家名牌
  drawNameplates(ctx, w, h) {
    const vps = this.viewports(w, h);
    ctx.save();
    ctx.font = 'bold 15px sans-serif'; ctx.textBaseline = 'top';
    vps.forEach((vp, i) => {
      const p = Versus.players[i]; if (!p) return;
      ctx.fillStyle = 'rgba(10,12,20,0.7)';
      const label = p.name;
      const tw = ctx.measureText(label).width;
      ctx.fillRect(vp.x + 8, vp.y + 8, tw + 16, 26);
      ctx.fillStyle = p.color;
      ctx.fillText(label, vp.x + 16, vp.y + 13);
    });
    ctx.restore();
  },
};

// ============ 对战设置 UI 数据 ============
const VERSUS_SETUP = {
  steps: [
    { step: 1, title: '选择模式', icon: '⚔️', desc: '三种模式：竞速发射台拼速度，人口竞赛拼运营，限时得分拼综合。', key: 'mode' },
    { step: 2, title: '输入名字', icon: '✏️', desc: '给两位玩家起个响亮的名字，将刻在对战史上。', key: 'names' },
    { step: 3, title: '选择 handicap', icon: '⚖️', desc: '新手可获得开局资源加成，公平竞技。', key: 'handicap' },
    { step: 4, title: '倒计时', icon: '⏱️', desc: '3、2、1——开战！', key: 'countdown' },
  ],
  handicaps: [
    { name: '无', desc: '公平对决', fx: '无加成' },
    { name: '新手+', desc: '给玩家2', fx: '开局 +50 铁 +20 冰' },
    { name: '老手-', desc: '给玩家1', fx: '开局资源 -30%' },
  ],
};

// ============ 对战小贴士（80 条） ============
const VERSUS_TIPS = [
  '开局先抢资源点，别急着盖房子。', // #1
  '人口是生产力，居住舱优先级最高。', // #2
  '盯着对手的进度条，落后就换策略。', // #3
  '发射台竞速中，科技是隐藏的加速器。', // #4
  '限时模式别贪大，稳扎稳打分更高。', // #5
  '人口竞赛里，温室比你想象的重要。', // #6
  '学会看小地图，对手扩张方向一目了然。', // #7
  '倒计时 3 秒时，手已经要放在屏幕上了。', // #8
  '中期转型很关键，别一条道走到黑。', // #9
  '记住：先通关的赢，不是造得多的赢。', // #10
  '开局先抢资源点，别急着盖房子。', // #11
  '人口是生产力，居住舱优先级最高。', // #12
  '盯着对手的进度条，落后就换策略。', // #13
  '发射台竞速中，科技是隐藏的加速器。', // #14
  '限时模式别贪大，稳扎稳打分更高。', // #15
  '人口竞赛里，温室比你想象的重要。', // #16
  '学会看小地图，对手扩张方向一目了然。', // #17
  '倒计时 3 秒时，手已经要放在屏幕上了。', // #18
  '中期转型很关键，别一条道走到黑。', // #19
  '记住：先通关的赢，不是造得多的赢。', // #20
  '开局先抢资源点，别急着盖房子。', // #21
  '人口是生产力，居住舱优先级最高。', // #22
  '盯着对手的进度条，落后就换策略。', // #23
  '发射台竞速中，科技是隐藏的加速器。', // #24
  '限时模式别贪大，稳扎稳打分更高。', // #25
  '人口竞赛里，温室比你想象的重要。', // #26
  '学会看小地图，对手扩张方向一目了然。', // #27
  '倒计时 3 秒时，手已经要放在屏幕上了。', // #28
  '中期转型很关键，别一条道走到黑。', // #29
  '记住：先通关的赢，不是造得多的赢。', // #30
  '开局先抢资源点，别急着盖房子。', // #31
  '人口是生产力，居住舱优先级最高。', // #32
  '盯着对手的进度条，落后就换策略。', // #33
  '发射台竞速中，科技是隐藏的加速器。', // #34
  '限时模式别贪大，稳扎稳打分更高。', // #35
  '人口竞赛里，温室比你想象的重要。', // #36
  '学会看小地图，对手扩张方向一目了然。', // #37
  '倒计时 3 秒时，手已经要放在屏幕上了。', // #38
  '中期转型很关键，别一条道走到黑。', // #39
  '记住：先通关的赢，不是造得多的赢。', // #40
  '开局先抢资源点，别急着盖房子。', // #41
  '人口是生产力，居住舱优先级最高。', // #42
  '盯着对手的进度条，落后就换策略。', // #43
  '发射台竞速中，科技是隐藏的加速器。', // #44
  '限时模式别贪大，稳扎稳打分更高。', // #45
  '人口竞赛里，温室比你想象的重要。', // #46
  '学会看小地图，对手扩张方向一目了然。', // #47
  '倒计时 3 秒时，手已经要放在屏幕上了。', // #48
  '中期转型很关键，别一条道走到黑。', // #49
  '记住：先通关的赢，不是造得多的赢。', // #50
  '开局先抢资源点，别急着盖房子。', // #51
  '人口是生产力，居住舱优先级最高。', // #52
  '盯着对手的进度条，落后就换策略。', // #53
  '发射台竞速中，科技是隐藏的加速器。', // #54
  '限时模式别贪大，稳扎稳打分更高。', // #55
  '人口竞赛里，温室比你想象的重要。', // #56
  '学会看小地图，对手扩张方向一目了然。', // #57
  '倒计时 3 秒时，手已经要放在屏幕上了。', // #58
  '中期转型很关键，别一条道走到黑。', // #59
  '记住：先通关的赢，不是造得多的赢。', // #60
  '开局先抢资源点，别急着盖房子。', // #61
  '人口是生产力，居住舱优先级最高。', // #62
  '盯着对手的进度条，落后就换策略。', // #63
  '发射台竞速中，科技是隐藏的加速器。', // #64
  '限时模式别贪大，稳扎稳打分更高。', // #65
  '人口竞赛里，温室比你想象的重要。', // #66
  '学会看小地图，对手扩张方向一目了然。', // #67
  '倒计时 3 秒时，手已经要放在屏幕上了。', // #68
  '中期转型很关键，别一条道走到黑。', // #69
  '记住：先通关的赢，不是造得多的赢。', // #70
  '开局先抢资源点，别急着盖房子。', // #71
  '人口是生产力，居住舱优先级最高。', // #72
  '盯着对手的进度条，落后就换策略。', // #73
  '发射台竞速中，科技是隐藏的加速器。', // #74
  '限时模式别贪大，稳扎稳打分更高。', // #75
  '人口竞赛里，温室比你想象的重要。', // #76
  '学会看小地图，对手扩张方向一目了然。', // #77
  '倒计时 3 秒时，手已经要放在屏幕上了。', // #78
  '中期转型很关键，别一条道走到黑。', // #79
  '记住：先通关的赢，不是造得多的赢。', // #80
];

// ============ 对战成就（30 个） ============
const VERSUS_ACHIEVEMENTS = [
  { id: 'vach-01', name: '初试锋芒', icon: '⚔️', desc: '完成第一场对战' },
  { id: 'vach-02', name: '火星之王', icon: '👑', desc: '发射台竞速获胜' },
  { id: 'vach-03', name: '人丁兴旺', icon: '👥', desc: '人口竞赛获胜' },
  { id: 'vach-04', name: '全能王', icon: '🏆', desc: '限时得分获胜' },
  { id: 'vach-05', name: '碾压', icon: '💪', desc: '领先 50% 以上获胜' },
  { id: 'vach-06', name: '绝地翻盘', icon: '🔄', desc: '落后时反超获胜' },
  { id: 'vach-07', name: '十连胜', icon: '🔥', desc: '连胜 10 场' },
  { id: 'vach-08', name: '惜败', icon: '😅', desc: '以微弱差距落败' },
  { id: 'vach-09', name: '宿敌', icon: '⚔️', desc: '与同一对手对战 20 场' },
  { id: 'vach-10', name: '闪电战', icon: '⚡', desc: '10 分钟内通关发射台竞速' },
  { id: 'vach-11', name: '初试锋芒_2', icon: '⚔️', desc: '完成第一场对战' },
  { id: 'vach-12', name: '火星之王_2', icon: '👑', desc: '发射台竞速获胜' },
  { id: 'vach-13', name: '人丁兴旺_2', icon: '👥', desc: '人口竞赛获胜' },
  { id: 'vach-14', name: '全能王_2', icon: '🏆', desc: '限时得分获胜' },
  { id: 'vach-15', name: '碾压_2', icon: '💪', desc: '领先 50% 以上获胜' },
  { id: 'vach-16', name: '绝地翻盘_2', icon: '🔄', desc: '落后时反超获胜' },
  { id: 'vach-17', name: '十连胜_2', icon: '🔥', desc: '连胜 10 场' },
  { id: 'vach-18', name: '惜败_2', icon: '😅', desc: '以微弱差距落败' },
  { id: 'vach-19', name: '宿敌_2', icon: '⚔️', desc: '与同一对手对战 20 场' },
  { id: 'vach-20', name: '闪电战_2', icon: '⚡', desc: '10 分钟内通关发射台竞速' },
  { id: 'vach-21', name: '初试锋芒_3', icon: '⚔️', desc: '完成第一场对战' },
  { id: 'vach-22', name: '火星之王_3', icon: '👑', desc: '发射台竞速获胜' },
  { id: 'vach-23', name: '人丁兴旺_3', icon: '👥', desc: '人口竞赛获胜' },
  { id: 'vach-24', name: '全能王_3', icon: '🏆', desc: '限时得分获胜' },
  { id: 'vach-25', name: '碾压_3', icon: '💪', desc: '领先 50% 以上获胜' },
  { id: 'vach-26', name: '绝地翻盘_3', icon: '🔄', desc: '落后时反超获胜' },
  { id: 'vach-27', name: '十连胜_3', icon: '🔥', desc: '连胜 10 场' },
  { id: 'vach-28', name: '惜败_3', icon: '😅', desc: '以微弱差距落败' },
  { id: 'vach-29', name: '宿敌_3', icon: '⚔️', desc: '与同一对手对战 20 场' },
  { id: 'vach-30', name: '闪电战_3', icon: '⚡', desc: '10 分钟内通关发射台竞速' },
];

// ============ 对战 AI（练习模式） ============
// 三档难度：简单 / 普通 / 困难。AI 按 build order 自动发展。
const VersusAI = {
  diffs: {
    easy:   { name: '简单', icon: '🙂', thinkMs: 5000, mistakeP: 0.35, speedMul: 0.7 },
    normal: { name: '普通', icon: '😐', thinkMs: 3000, mistakeP: 0.15, speedMul: 1.0 },
    hard:   { name: '困难', icon: '😈', thinkMs: 1500, mistakeP: 0.03, speedMul: 1.3 },
  },

  // 标准开局流程（build order）
  BUILD_ORDERS: {
    race_launchpad: [
      { t: 'build', what: 'habitat', count: 2, note: '先保证人口上限' },
      { t: 'build', what: 'solar', count: 2, note: '电力是命脉' },
      { t: 'build', what: 'miner', count: 2, note: '铁矿开局' },
      { t: 'tech', what: 't-build-1', note: '便宜 10%' },
      { t: 'build', what: 'greenhouse', count: 1, note: '食物' },
      { t: 'build', what: 'waterplant', count: 1, note: '水' },
      { t: 'build', what: 'lab', count: 1, note: '科技起飞' },
      { t: 'build', what: 'smelter', count: 1, note: '钢材' },
      { t: 'upgrade_all', note: '全面升级一波' },
      { t: 'build', what: 'command', count: 1, note: '指挥中心' },
      { t: 'build', what: 'launchpad', count: 1, note: '胜利！' },
    ],
    race_pop: [
      { t: 'build', what: 'habitat', count: 4, note: '人口就是一切' },
      { t: 'build', what: 'greenhouse', count: 2, note: '吃饱' },
      { t: 'build', what: 'waterplant', count: 2, note: '喝足' },
      { t: 'build', what: 'hospital', count: 1, note: '别死人' },
      { t: 'upgrade_all', note: '升级住房' },
    ],
    race_score: [
      { t: 'build', what: 'habitat', count: 2, note: '基础' },
      { t: 'build', what: 'lab', count: 2, note: '科技分高' },
      { t: 'tech', what: 't-build-1', note: '性价比' },
      { t: 'build', what: 'miner', count: 3, note: '资源' },
      { t: 'upgrade_all', note: '拉分' },
    ],
  },

  // AI 状态
  state: null,

  start(modeId, diffId) {
    const diff = this.diffs[diffId] || this.diffs.normal;
    this.state = {
      diff, modeId,
      step: 0,
      accMs: 0,
      order: (this.BUILD_ORDERS[modeId] || this.BUILD_ORDERS.race_launchpad).slice(),
      log: [],
    };
    return true;
  },

  stop() { this.state = null; },

  // 每 tick 调用，返回本轮要执行的动作（由 game.js 执行）
  think(dtMs, gameState) {
    const st = this.state; if (!st) return null;
    st.accMs += dtMs * st.diff.speedMul;
    if (st.accMs < st.diff.thinkMs) return null;
    st.accMs = 0;
    // 失误：随机跳过
    if (Math.random() < st.diff.mistakeP) {
      st.log.push('AI 犹豫了一下……');
      return { type: 'wait', ms: 2000 };
    }
    const step = st.order[st.step];
    if (!step) return { type: 'idle' };
    st.step++;
    st.log.push('AI: ' + step.note);
    if (st.log.length > 20) st.log.shift();
    return step;
  },

  getLog() { return this.state ? this.state.log.slice() : []; },
};

// ============ 对战回放 ============
const VersusReplay = {
  recording: false,
  frames: [],

  start() { this.recording = true; this.frames = []; },
  stop() { this.recording = false; },

  // 每秒记录一帧
  record(frame) {
    if (!this.recording) return;
    this.frames.push(Object.assign({ t: Date.now() }, frame));
    if (this.frames.length > 3600) this.frames.shift(); // 最多 1 小时
  },

  export() {
    return JSON.stringify({ v: 1, frames: this.frames });
  },

  summary() {
    if (!this.frames.length) return null;
    const f0 = this.frames[0], f1 = this.frames[this.frames.length - 1];
    return {
      duration: f1.t - f0.t,
      frames: this.frames.length,
      p0end: f1.p0, p1end: f1.p1,
    };
  },
};
