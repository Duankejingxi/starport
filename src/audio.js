// 全程合成的声音（WebAudio，无外部文件）
// 结构：音效 / 音乐 → 混响总线 + 干声 → 压缩限幅 → 输出
// 音乐是实时生成的管风琴配乐：白天舒缓，夜晚加入钟摆般的琶音，敌人逼近时鼓点与低音脉冲渐入
import { G } from './state.js';
let G_engine = null;
let ctx, master, comp, sfx, musicGain, verb, verbSend, windGain, windFilter, laserNode, noiseBuf, organWave, padWave;
const _lp = { x: 0, z: 0 };

function impulse(sec, decay) {
  const n = Math.floor(ctx.sampleRate * sec), b = ctx.createBuffer(2, n, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = b.getChannelData(c);
    for (let i = 0; i < n; i++) { const k = i / n; d[i] = (Math.random() * 2 - 1) * Math.pow(1 - k, decay) * (k < 0.01 ? k * 100 : 1); }
  }
  return b;
}
function wave(h) {
  const re = new Float32Array(h.length + 1), im = new Float32Array(h.length + 1);
  h.forEach((v, i) => { im[i + 1] = v; });
  return ctx.createPeriodicWave(re, im);
}

// —— 音乐状态 ——
const M_ = { next: 0, bar: 0, tension: 0, night: 0, storm: 0, calm: 1, arp: 0, drum: 0 };
// A 小调：Am F C G | Am F Dm E   每个和弦两小节
const PROG = [[57, 60, 64], [53, 57, 60], [48, 55, 60, 64], [55, 59, 62], [57, 60, 64], [53, 57, 60, 65], [50, 57, 62, 65], [52, 56, 59, 64]];
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
const BAR = 4.2;

export const audio = {
  enabled: true,
  init() {
    if (ctx) { ctx.resume(); return; }
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
    comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.knee.value = 12; comp.ratio.value = 4; comp.attack.value = 0.004; comp.release.value = 0.25;
    master = ctx.createGain(); master.gain.value = 0.75;
    master.connect(comp); comp.connect(ctx.destination);
    verb = ctx.createConvolver(); verb.buffer = impulse(4.5, 2.6);
    const verbOut = ctx.createGain(); verbOut.gain.value = 0.55; verb.connect(verbOut); verbOut.connect(master);
    verbSend = ctx.createGain(); verbSend.gain.value = 0.3; verbSend.connect(verb);
    sfx = ctx.createGain(); sfx.gain.value = 0.85; sfx.connect(master); sfx.connect(verbSend);
    musicGain = ctx.createGain(); musicGain.gain.value = 0.3;
    const mDry = ctx.createGain(); mDry.gain.value = 0.55; musicGain.connect(mDry); mDry.connect(master);
    const mWet = ctx.createGain(); mWet.gain.value = 0.9; musicGain.connect(mWet); mWet.connect(verb);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); let last = 0;
    for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    organWave = wave([1, 0.55, 0.32, 0.22, 0.08, 0.12, 0.03, 0.06]);
    padWave = wave([1, 0.2, 0.08, 0.03]);
    // 风声（两层：低沉的气流 + 细碎的沙粒）
    const mk = (f, q, v) => {
      const wn = ctx.createBufferSource(); wn.buffer = noiseBuf; wn.loop = true;
      const fl = ctx.createBiquadFilter(); fl.type = 'bandpass'; fl.frequency.value = f; fl.Q.value = q;
      const g = ctx.createGain(); g.gain.value = v; wn.connect(fl); fl.connect(g); g.connect(master); wn.start(0, Math.random() * 2); return [fl, g];
    };
    [windFilter, windGain] = mk(400, 0.6, 0.12);
    const [sf, sg] = mk(3200, 0.4, 0.0); this._sand = sg; this._sandF = sf;
    M_.next = ctx.currentTime + 0.3;
    setInterval(() => this.schedule(), 200);
  },
  setVolume(v) { if (master) master.gain.value = v; },
  update(storm, night) {
    if (!ctx) return;
    const t = ctx.currentTime;
    windGain.gain.setTargetAtTime(0.08 + storm * 0.55 + night * 0.03, t, 0.5);
    windFilter.frequency.setTargetAtTime(280 + storm * 520 + Math.sin(t * 0.3) * 120, t, 0.8);
    this._sand.gain.setTargetAtTime(storm * 0.08, t, 0.6);
    // 紧张度：附近的敌人
    let ten = 0; const P = G.player && G.player.pos;
    if (P && G.enemies) for (const e of G.enemies) { if (e.dead) continue; const d = Math.hypot(e.pos.x - P.x, e.pos.z - P.z); ten = Math.max(ten, 1 - d / 70); }
    M_.tension += (ten - M_.tension) * 0.02;
    M_.night = night; M_.storm = storm;
    if (P) { _lp.x = P.x; _lp.z = P.z; }
  },
  // 空间化：按距离衰减、按方位左右声像
  at(pos, range = 90) {
    if (!ctx || !pos || !G.camera) return sfx;
    const c = G.camera.position, dx = pos.x - c.x, dz = pos.z - c.z, d = Math.hypot(dx, dz);
    const v = Math.max(0, 1 - d / range); if (v <= 0.01) return null;
    const g = ctx.createGain(); g.gain.value = v * v;
    const yaw = G.player ? G.player.yaw : 0;
    const rx = Math.cos(yaw) * dx - Math.sin(yaw) * dz; // 相机右方向
    let out = g;
    if (ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, rx / Math.max(4, d) * 0.9)); g.connect(p); out = p; }
    out.connect(sfx);
    // 远处的声音更闷
    if (d > 20) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 9000 - Math.min(7500, d * 90); f.connect(g); setTimeout(() => { try { f.disconnect(); g.disconnect(); out.disconnect(); } catch (e) { /* 忽略 */ } }, 6000); return f; }
    setTimeout(() => { try { g.disconnect(); out.disconnect(); } catch (e) { /* 忽略 */ } }, 6000);
    return g;
  },
  tone(freq, dur, type = 'sine', vol = 0.3, slide = 0, delay = 0, dest) {
    if (!ctx || dest === null) return;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator(), g = ctx.createGain();
    if (type === 'organ') o.setPeriodicWave(organWave); else o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || sfx); o.start(t); o.stop(t + dur + 0.05);
  },
  noise(dur, freq = 1000, vol = 0.3, type = 'lowpass', delay = 0, q = 1, dest, sweep = 0) {
    if (!ctx || dest === null) return;
    const t = ctx.currentTime + delay;
    const s = ctx.createBufferSource(); s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(30, freq * sweep), t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(dest || sfx); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  },
  // 低频冲击：正弦急速下坠，用于爆炸与重物
  thump(freq, dur, vol, dest, delay = 0) { this.tone(freq, dur, 'sine', vol, 0.25, delay, dest); },
  play(name, pos) {
    if (!ctx) return;
    const D = pos ? this.at(pos, name === 'boom' || name === 'rumble' ? 260 : 110) : undefined;
    if (D === null) return;
    const r = Math.random();
    switch (name) {
      case 'step': this.noise(0.09, 380 + r * 260, 0.1, 'lowpass', 0, 1, D); this.noise(0.05, 2400 + r * 800, 0.025, 'bandpass', 0.01, 2, D); break;
      case 'jump': this.noise(0.22, 600, 0.12, 'bandpass', 0, 1, D, 2.2); break;
      case 'land': this.thump(90, 0.25, 0.3, D); this.noise(0.3, 420, 0.22, 'lowpass', 0, 1, D); break;
      case 'mine': this.tone(180 + r * 60, 0.07, 'square', 0.03, 0, 0, D); this.noise(0.07, 2600 + r * 1500, 0.06, 'bandpass', 0, 3, D); break;
      case 'pickup': this.tone(988, 0.12, 'sine', 0.07); this.tone(1480, 0.16, 'sine', 0.05, 0, 0.05); this.tone(1976, 0.2, 'sine', 0.025, 0, 0.1); break;
      case 'deplete': this.noise(0.6, 900, 0.3, 'lowpass', 0, 1, D, 0.3); this.thump(140, 0.5, 0.25, D); this.tone(330, 0.6, 'triangle', 0.08, 0.5, 0.05, D); break;
      case 'shoot': // 等离子步枪：调频啸叫 + 爆裂 + 低频推力
        this.tone(1400, 0.16, 'sawtooth', 0.07, 0.18); this.tone(2600, 0.05, 'square', 0.04, 0.4);
        this.noise(0.08, 4500, 0.12, 'highpass'); this.thump(160, 0.14, 0.25); break;
      case 'turret': this.tone(900, 0.12, 'sawtooth', 0.06, 0.25, 0, D); this.noise(0.07, 3500, 0.1, 'highpass', 0, 1, D); this.thump(120, 0.12, 0.2, D); break;
      case 'hit': this.noise(0.08, 2200, 0.15, 'bandpass', 0, 2, D); this.tone(420, 0.08, 'square', 0.05, 0.5, 0, D); break;
      case 'kill': this.noise(0.7, 1600, 0.25, 'bandpass', 0, 0.8, D, 0.2); this.tone(220, 0.5, 'sawtooth', 0.08, 0.3, 0, D); this.thump(80, 0.6, 0.35, D); break;
      case 'boom': // 爆炸：亚低频下坠 + 宽频爆裂 + 余震滚动
        this.thump(70, 1.2, 0.6, D); this.thump(45, 1.8, 0.45, D, 0.05);
        this.noise(0.35, 5000, 0.35, 'lowpass', 0, 1, D, 0.15); this.noise(2.4, 600, 0.3, 'lowpass', 0.05, 1, D, 0.25); this.noise(1.2, 2200, 0.08, 'bandpass', 0.15, 1, D, 0.4); break;
      case 'hurt': this.tone(180, 0.25, 'sawtooth', 0.12, 0.5); this.thump(100, 0.3, 0.3); this.noise(0.2, 900, 0.12, 'bandpass', 0, 2); break;
      case 'place': this.thump(110, 0.35, 0.35); this.noise(0.5, 700, 0.18, 'lowpass', 0, 1, undefined, 0.4); [392, 523, 784].forEach((f, i) => this.tone(f, 0.5, 'triangle', 0.08, 0, 0.08 + i * 0.07)); break;
      case 'ui': case 'click': this.tone(1760, 0.035, 'sine', 0.05); this.noise(0.02, 6000, 0.03, 'highpass'); break;
      case 'scan': this.tone(300, 1.2, 'sine', 0.1, 4); this.tone(600, 0.9, 'triangle', 0.04, 3, 0.1); this.noise(0.8, 2000, 0.05, 'bandpass', 0, 3, undefined, 3); break;
      case 'shutter': this.noise(0.05, 4000, 0.25, 'highpass'); this.noise(0.09, 1500, 0.15, 'bandpass', 0.07); this.thump(300, 0.05, 0.1); break;
      case 'tick': this.tone(2600, 0.02, 'sine', 0.02); break;
      case 'open': this.noise(0.25, 800, 0.05, 'bandpass', 0, 2, undefined, 5); this.tone(660, 0.18, 'sine', 0.04, 1.5); break;
      case 'close': this.noise(0.2, 3000, 0.04, 'bandpass', 0, 2, undefined, 0.25); this.tone(880, 0.15, 'sine', 0.03, 0.6); break;
      case 'achv': [523, 784, 1046, 1568].forEach((f, i) => this.tone(f, 1.2, 'triangle', 0.07, 0, i * 0.09)); this.tone(2093, 1.6, 'sine', 0.03, 0, 0.36); break;
      case 'deny': this.tone(220, 0.12, 'square', 0.045); this.tone(165, 0.18, 'square', 0.045, 0, 0.09); break;
      case 'craft': [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.35, 'triangle', 0.09, 0, i * 0.07)); this.noise(0.3, 5000, 0.04, 'highpass', 0.25); break;
      case 'radio': this.noise(0.15, 2500, 0.1, 'bandpass', 0, 2); this.tone(1200, 0.05, 'sine', 0.05, 0, 0.12); this.tone(1800, 0.04, 'sine', 0.03, 0, 0.18); break;
      case 'alarm': for (let i = 0; i < 2; i++) { this.tone(880, 0.16, 'square', 0.05, 0.9, i * 0.36); this.tone(660, 0.16, 'square', 0.05, 0.9, i * 0.36 + 0.18); } break;
      case 'objective': [392, 523, 659, 784].forEach((f, i) => this.tone(f, 0.8, 'organ', 0.05, 0, i * 0.11)); break;
      case 'chapter': [220, 330, 440, 554, 659].forEach((f, i) => this.tone(f, 2.6, 'organ', 0.06, 0, i * 0.18)); this.thump(55, 2.5, 0.35); break;
      case 'rumble': this.noise(4, 150, 0.5, 'lowpass', 0, 1, D); this.noise(3, 400, 0.2, 'lowpass', 0.5, 1, D); this.thump(40, 3, 0.3, D); break;
      case 'jet': this.noise(0.14, 900, 0.09, 'bandpass', 0, 1, D); break;
      case 'night': this.tone(110, 3.5, 'organ', 0.06, 0.8); this.tone(165, 3.5, 'organ', 0.04, 0.8, 0.3); break;
      case 'whoosh': this.noise(0.6, 400, 0.12, 'bandpass', 0, 1.5, D, 6); break;
    }
  },
  engine(k) {
    if (!ctx) return;
    if (k > 0 || G_engine) {
      if (!G_engine) {
        const o = ctx.createOscillator(), o2 = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
        o.type = 'sawtooth'; o2.type = 'triangle'; f.type = 'lowpass'; f.frequency.value = 500; g.gain.value = 0.0001;
        o.connect(f); o2.connect(f); f.connect(g); g.connect(sfx); o.start(); o2.start();
        G_engine = { o, o2, f, g };
      }
      const t = ctx.currentTime, e = G_engine;
      e.o.frequency.setTargetAtTime(38 + k * 70, t, 0.1); e.o2.frequency.setTargetAtTime(76 + k * 140, t, 0.1);
      e.f.frequency.setTargetAtTime(300 + k * 900, t, 0.1);
      e.g.gain.setTargetAtTime(k > 0 || G.driving ? 0.03 + k * 0.05 : 0.0001, t, 0.15);
    }
  },
  laser(on) {
    if (!ctx) return;
    if (on && !laserNode) {
      // 激光：两路失谐锯齿 + 颤动的滤波 + 高频嘶声
      const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      const lfo = ctx.createOscillator(), lg = ctx.createGain();
      o.type = 'sawtooth'; o.frequency.value = 110; o2.type = 'sawtooth'; o2.frequency.value = 165.7;
      f.type = 'bandpass'; f.frequency.value = 1100; f.Q.value = 2.5; g.gain.value = 0.0001;
      lfo.frequency.value = 13; lg.gain.value = 380; lfo.connect(lg); lg.connect(f.frequency);
      const hs = ctx.createBufferSource(); hs.buffer = noiseBuf; hs.loop = true; const hf = ctx.createBiquadFilter(); hf.type = 'highpass'; hf.frequency.value = 5000; const hg = ctx.createGain(); hg.gain.value = 0.25;
      hs.connect(hf); hf.connect(hg); hg.connect(g);
      g.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.08);
      o.connect(f); o2.connect(f); f.connect(g); g.connect(sfx); o.start(); o2.start(); lfo.start(); hs.start();
      laserNode = { o, o2, g, lfo, hs };
    } else if (!on && laserNode) {
      const n = laserNode; laserNode = null;
      n.g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.04);
      const e = ctx.currentTime + 0.25; n.o.stop(e); n.o2.stop(e); n.lfo.stop(e); n.hs.stop(e);
    }
  },
  musicLoop() { /* 由 schedule() 接管 */ },
  // —— 生成式配乐调度器：提前 0.6 秒排好下一小节 ——
  schedule() {
    if (!ctx || ctx.state !== 'running') return;
    while (M_.next < ctx.currentTime + 0.6) { this.bar(M_.next, M_.bar); M_.next += BAR; M_.bar++; }
  },
  bar(t, n) {
    const chord = PROG[Math.floor(n / 2) % PROG.length], first = n % 2 === 0;
    const night = M_.night, ten = M_.tension, menu = !!G.menuOpen;
    const mg = musicGain;
    // 管风琴长音：每个和弦起始处铺开，持续两小节
    if (first) {
      chord.forEach((m, k) => {
        const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
        o.setPeriodicWave(k === 0 ? padWave : organWave); o.frequency.value = mtof(m - 12 + (k === 0 ? -12 : 0)); o.detune.value = (Math.random() - 0.5) * 6;
        f.type = 'lowpass'; f.frequency.value = 900 + night * 500 + ten * 900;
        const v = (k === 0 ? 0.075 : 0.04) * (0.8 + night * 0.3);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + 2.6); g.gain.setValueAtTime(v, t + BAR * 2 - 1.5); g.gain.exponentialRampToValueAtTime(0.0001, t + BAR * 2 + 2.2);
        o.connect(f); f.connect(g); g.connect(mg); o.start(t); o.stop(t + BAR * 2 + 2.4);
      });
    }
    // 琶音：夜里或紧张时出现，像钟摆一样不停地走
    const arp = Math.min(1, night * 0.9 + ten * 1.2 + (n % 16 >= 8 ? 0.25 : 0));
    if (arp > 0.15 && !menu) {
      const notes = chord.map(m => m + 12).concat([chord[0] + 24, chord[1] + 12]);
      const step = BAR / 8;
      for (let i = 0; i < 8; i++) {
        const m = notes[[0, 1, 2, 3, 2, 1, 4, 2][i] % notes.length];
        const at = t + i * step, v = 0.022 * arp * (i % 2 ? 0.7 : 1);
        const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle'; o.frequency.value = mtof(m);
        g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(v, at + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, at + step * 1.8);
        o.connect(g); g.connect(mg); o.start(at); o.stop(at + step * 2);
      }
    }
    // 钟表滴答（星际穿越式），夜里很轻
    if (night > 0.5 && !menu) for (let i = 0; i < 4; i++) this.tone(3200, 0.03, 'sine', 0.012 * night, 0, t - ctx.currentTime + i * BAR / 4, mg);
    // 紧张：低音脉冲 + 定音鼓
    if (ten > 0.2) {
      const root = mtof(chord[0] - 24);
      for (let i = 0; i < 16; i++) {
        const at = t + i * BAR / 16, v = 0.05 * ten * (i % 4 === 0 ? 1 : 0.55);
        const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
        o.type = 'sawtooth'; o.frequency.value = root; f.type = 'lowpass'; f.frequency.value = 260 + ten * 300;
        g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(v, at + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, at + BAR / 18);
        o.connect(f); f.connect(g); g.connect(mg); o.start(at); o.stop(at + BAR / 14);
      }
      for (const b of [0, 2.5, 3]) if (b === 0 || ten > 0.5) { const d = t - ctx.currentTime + b * BAR / 4; this.tone(70, 0.9, 'sine', 0.2 * ten, 0.5, d, mg); this.noise(0.3, 300, 0.08 * ten, 'lowpass', d, 1, mg); }
    }
    // 偶尔的高音旋律（白天、平静时）
    if (first && night < 0.5 && ten < 0.2 && Math.random() < 0.55) {
      const mel = [chord[chord.length - 1] + 12, chord[1] + 12, chord[2] + 12];
      mel.forEach((m, i) => { if (Math.random() < 0.75) this.tone(mtof(m), 3, 'sine', 0.018, 0, t - ctx.currentTime + 1.2 + i * 1.4, mg); });
    }
  },
};
