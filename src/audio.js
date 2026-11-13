// 全程合成的音效（WebAudio，无外部文件）
import { G } from './state.js';
let G_engine = null;
let ctx, master, sfx, musicGain, windGain, windFilter, laserNode, noiseBuf;
export const audio = {
  enabled: true,
  init() {
    if (ctx) { ctx.resume(); return; }
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
    master = ctx.createGain(); master.gain.value = 0.7; master.connect(ctx.destination);
    sfx = ctx.createGain(); sfx.gain.value = 0.8; sfx.connect(master);
    musicGain = ctx.createGain(); musicGain.gain.value = 0.22; musicGain.connect(master);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); let last = 0;
    for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    // 风声
    const wn = ctx.createBufferSource(); wn.buffer = noiseBuf; wn.loop = true;
    windFilter = ctx.createBiquadFilter(); windFilter.type = 'bandpass'; windFilter.frequency.value = 400; windFilter.Q.value = 0.6;
    windGain = ctx.createGain(); windGain.gain.value = 0.15;
    wn.connect(windFilter); windFilter.connect(windGain); windGain.connect(master); wn.start();
    this.musicLoop();
  },
  setVolume(v) { if (master) master.gain.value = v; },
  update(storm, night) {
    if (!ctx) return;
    const t = ctx.currentTime;
    windGain.gain.setTargetAtTime(0.1 + storm * 0.6 + night * 0.04, t, 0.5);
    windFilter.frequency.setTargetAtTime(300 + storm * 500 + Math.sin(t * 0.3) * 120, t, 0.8);
  },
  tone(freq, dur, type = 'sine', vol = 0.3, slide = 0, delay = 0, dest) {
    if (!ctx) return;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || sfx); o.start(t); o.stop(t + dur + 0.05);
  },
  noise(dur, freq = 1000, vol = 0.3, type = 'lowpass', delay = 0, q = 1) {
    if (!ctx) return;
    const t = ctx.currentTime + delay;
    const s = ctx.createBufferSource(); s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(sfx); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  },
  play(name) {
    if (!ctx) return;
    switch (name) {
      case 'step': this.noise(0.12, 500 + Math.random() * 200, 0.12, 'lowpass'); break;
      case 'jump': this.noise(0.2, 400, 0.15); break;
      case 'land': this.noise(0.25, 300, 0.25); break;
      case 'mine': this.tone(180 + Math.random() * 60, 0.08, 'square', 0.04); this.noise(0.08, 2400, 0.06, 'highpass'); break;
      case 'pickup': this.tone(880, 0.08, 'sine', 0.08); this.tone(1320, 0.1, 'sine', 0.06, 0, 0.05); break;
      case 'deplete': this.noise(0.5, 900, 0.3); this.tone(220, 0.4, 'triangle', 0.15, 0.5); break;
      case 'shoot': this.tone(900, 0.15, 'sawtooth', 0.12, 0.25); this.noise(0.1, 3000, 0.08, 'highpass'); break;
      case 'turret': this.tone(700, 0.12, 'square', 0.05, 0.3); break;
      case 'hit': this.tone(300, 0.1, 'square', 0.08, 0.5); break;
      case 'kill': this.noise(0.6, 1600, 0.3, 'bandpass', 0, 0.8); this.tone(120, 0.5, 'sawtooth', 0.12, 0.3); break;
      case 'hurt': this.tone(160, 0.25, 'sawtooth', 0.15, 0.6); break;
      case 'place': this.tone(220, 0.15, 'triangle', 0.2); this.tone(330, 0.15, 'triangle', 0.2, 0, 0.1); this.tone(440, 0.3, 'triangle', 0.2, 0, 0.2); this.noise(0.4, 600, 0.2); break;
      case 'ui': this.tone(880, 0.05, 'sine', 0.07); this.tone(1320, 0.08, 'sine', 0.04, 0, 0.03); break;
      case 'tick': this.tone(2400, 0.02, 'sine', 0.025); break;
      case 'open': this.tone(440, 0.12, 'sine', 0.05, 1.5); this.noise(0.15, 3000, 0.03, 'highpass'); break;
      case 'achv': [523, 784, 1046, 1568].forEach((f, i) => this.tone(f, 0.9, 'triangle', 0.09, 0, i * 0.09)); break;
      case 'deny': this.tone(200, 0.15, 'square', 0.06); this.tone(150, 0.2, 'square', 0.06, 0, 0.1); break;
      case 'craft': [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.25, 'triangle', 0.12, 0, i * 0.08)); break;
      case 'radio': this.noise(0.15, 2500, 0.12, 'bandpass', 0, 2); this.tone(1200, 0.05, 'sine', 0.06, 0, 0.12); break;
      case 'alarm': this.tone(880, 0.18, 'square', 0.06); this.tone(660, 0.18, 'square', 0.06, 0, 0.2); break;
      case 'objective': [392, 523, 659].forEach((f, i) => this.tone(f, 0.5, 'sine', 0.15, 0, i * 0.12)); break;
      case 'chapter': [262, 330, 392, 523, 659].forEach((f, i) => this.tone(f, 1.2, 'sine', 0.12, 0, i * 0.15)); break;
      case 'rumble': this.noise(4, 150, 0.6); this.noise(3, 400, 0.25, 'lowpass', 0.5); break;
      case 'jet': this.noise(0.12, 800, 0.1, 'bandpass'); break;
      case 'night': this.tone(110, 3, 'sine', 0.12, 0.8); this.tone(165, 3, 'sine', 0.08, 0.8, 0.3); break;
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
      const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      o.type = 'sawtooth'; o.frequency.value = 110; o2.type = 'square'; o2.frequency.value = 113;
      f.type = 'lowpass'; f.frequency.value = 900; g.gain.value = 0.0001;
      g.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.1);
      o.connect(f); o2.connect(f); f.connect(g); g.connect(sfx); o.start(); o2.start();
      laserNode = { o, o2, g };
    } else if (!on && laserNode) {
      const n = laserNode; laserNode = null;
      n.g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.04);
      n.o.stop(ctx.currentTime + 0.2); n.o2.stop(ctx.currentTime + 0.2);
    }
  },
  // 舒缓的环境音乐：随机和弦缓慢铺陈
  musicLoop() {
    const chords = [[220, 277.2, 329.6, 415.3], [196, 246.9, 293.7, 392], [174.6, 220, 261.6, 349.2], [164.8, 207.7, 246.9, 329.6], [146.8, 220, 293.7, 370]];
    let i = 0;
    const next = () => {
      if (!ctx) return;
      const c = chords[i++ % chords.length];
      const t = ctx.currentTime;
      c.forEach((f, k) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = k === 0 ? 'triangle' : 'sine'; o.frequency.value = f * (k === 0 ? 0.5 : 1); o.detune.value = (Math.random() - 0.5) * 8;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.06, t + 3); g.gain.exponentialRampToValueAtTime(0.0001, t + 11);
        o.connect(g); g.connect(musicGain); o.start(t); o.stop(t + 11.5);
      });
      // 偶尔的旋律音
      if (Math.random() < 0.7) {
        const mel = c[1 + Math.floor(Math.random() * 3)] * 2;
        for (let n = 0; n < 3; n++) if (Math.random() < 0.6) this.tone(mel * [1, 1.122, 1.335][n], 2.5, 'sine', 0.025, 0, 2 + n * 1.6, musicGain);
      }
      setTimeout(next, 9000);
    };
    next();
  },
};
