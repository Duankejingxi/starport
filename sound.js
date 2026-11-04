/* 星港 — sound.js：WebAudio 合成音效（零外部文件）
 * 建造 / 采集 / 升级 / 点击 / 错误 / 灾难 / 胜利 / 科技
 */

class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    // 从存档读开关
    try {
      const v = localStorage.getItem('starport-sound');
      if (v === 'off') this.enabled = false;
    } catch (e) {}
  }

  // 懒初始化 AudioContext（需用户手势后调用）
  ensure() {
    if (!this.ctx) {
      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (AC) this.ctx = new AC();
      } catch (e) { this.ctx = null; }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('starport-sound', this.enabled ? 'on' : 'off');
    } catch (e) {}
    return this.enabled;
  }

  // 基础：播放一个振荡器音符
  tone(freq, dur, type = 'sine', vol = 0.15, when = 0, slideTo = null) {
    if (!this.enabled) return;
    const ctx = this.ensure();
    if (!ctx) return;
    const t0 = ctx.currentTime + when;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    gain.gain.setValueAtTime(vol, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  // 噪声 burst（用于灾难/爆炸）
  noise(dur = 0.4, vol = 0.2, when = 0, filterFreq = 1000) {
    if (!this.enabled) return;
    const ctx = this.ensure();
    if (!ctx) return;
    const t0 = ctx.currentTime + when;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = filterFreq;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start(t0);
  }

  // ---- 游戏音效 ----
  click() {
    this.tone(600, 0.06, 'square', 0.06);
  }

  build() {
    // 建造：低沉敲击 + 上升
    this.tone(150, 0.15, 'square', 0.12);
    this.tone(220, 0.2, 'square', 0.1, 0.08);
    this.tone(330, 0.25, 'square', 0.08, 0.16);
  }

  harvest() {
    // 采集：清脆叮
    this.tone(880, 0.12, 'sine', 0.12);
    this.tone(1320, 0.15, 'sine', 0.08, 0.05);
  }

  upgrade() {
    // 升级：上行琶音
    this.tone(440, 0.12, 'triangle', 0.12);
    this.tone(554, 0.12, 'triangle', 0.12, 0.1);
    this.tone(659, 0.18, 'triangle', 0.12, 0.2);
  }

  error() {
    // 错误：低嗡
    this.tone(160, 0.2, 'sawtooth', 0.1, 0, 110);
  }

  tech() {
    // 科技解锁：科幻感
    this.tone(520, 0.1, 'sine', 0.1);
    this.tone(780, 0.15, 'sine', 0.1, 0.08, 1040);
    this.tone(1040, 0.2, 'sine', 0.08, 0.16);
  }

  truck() {
    // 运输车出发：引擎
    this.tone(90, 0.3, 'sawtooth', 0.08, 0, 140);
  }

  sandstorm() {
    // 沙尘暴：持续风声
    this.noise(1.5, 0.15, 0, 500);
    this.tone(70, 1.2, 'sawtooth', 0.06, 0, 50);
  }

  meteorWarn() {
    // 陨石预警：警报
    for (let i = 0; i < 3; i++) {
      this.tone(700, 0.15, 'square', 0.1, i * 0.25);
      this.tone(500, 0.15, 'square', 0.1, i * 0.25 + 0.12);
    }
  }

  meteorHit() {
    // 陨石命中：爆炸
    this.noise(0.8, 0.3, 0, 300);
    this.tone(60, 0.6, 'sine', 0.2, 0, 30);
  }

  repair() {
    // 维修：扳手声
    this.tone(300, 0.08, 'square', 0.1);
    this.tone(400, 0.08, 'square', 0.1, 0.1);
    this.tone(350, 0.12, 'square', 0.1, 0.2);
  }

  trade() {
    // 交易：金币声
    this.tone(1200, 0.08, 'sine', 0.1);
    this.tone(1600, 0.12, 'sine', 0.1, 0.07);
  }

  popGrow() {
    // 人口增长：柔和上行
    this.tone(500, 0.15, 'sine', 0.07, 0, 700);
  }

  victory() {
    // 胜利： fanfare
    const seq = [523, 659, 784, 1047, 784, 1047];
    seq.forEach((f, i) => {
      this.tone(f, 0.25, 'triangle', 0.14, i * 0.16);
    });
    this.noise(1.0, 0.05, 0.5, 4000); // 礼花
  }

  // 灾难结束
  calm() {
    this.tone(400, 0.3, 'sine', 0.08, 0, 300);
  }

  // ---- v1.1 新增音效 ----
  unlock() {
    // 扇区解锁：宏大
    this.tone(200, 0.2, 'sawtooth', 0.1, 0, 400);
    this.tone(400, 0.3, 'sawtooth', 0.08, 0.15, 800);
  }

  achieve() {
    // 成就：庆祝
    this.tone(660, 0.1, 'square', 0.08);
    this.tone(880, 0.15, 'square', 0.08, 0.08);
    this.tone(1320, 0.2, 'square', 0.06, 0.16);
  }

  warning() {
    // 通用警告
    this.tone(440, 0.15, 'square', 0.1);
    this.tone(440, 0.15, 'square', 0.1, 0.2);
  }

  demolish() {
    // 拆除：崩塌
    this.noise(0.5, 0.2, 0, 400);
    this.tone(150, 0.4, 'sawtooth', 0.1, 0, 60);
  }

  speedUp() {
    // 加速：whoosh
    this.tone(200, 0.3, 'sine', 0.08, 0, 800);
  }
}

if (typeof module !== 'undefined') { module.exports = { SoundManager }; }
