/* 星港 — settings.js：设置/无障碍/性能
 * 音量、画质、难度、触屏优化、无障碍。
 */

// ============ 默认设置 ============
const DEFAULT_SETTINGS = {
  // 显示
  quality: 'high',        // high / medium / low
  particles: true,        // 粒子效果
  animations: true,       // 动画
  nightMode: false,       // 夜间模式
  // 音频
  music: true,
  sfx: true,
  musicVolume: 0.5,
  sfxVolume: 0.7,
  // 游戏
  difficulty: 'normal',   // easy / normal / hard
  autoSave: true,
  autoSaveInterval: 60,   // 秒
  confirmDemolish: true,  // 拆除确认
  // 触屏（v1.5 用户反馈：资源点太小）
  touchTarget: 44,        // 最小触屏目标 px
  tapTolerance: 44,       // 点击容差 px
  pinchZoom: true,        // 双指缩放
  // 无障碍
  colorBlind: false,      // 色盲模式
  fontSize: 'medium',     // small / medium / large
  reduceMotion: false,    // 减少动态效果
};

// ============ 设置管理器 ============
class SettingsManager {
  constructor() {
    this.settings = { ...DEFAULT_SETTINGS };
    this.load();
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
    this.save();
    this.apply(key);
  }

  apply(key) {
    try {
      const v = this.settings[key];
      const root = document.documentElement;
      if (!root) return;
      switch (key) {
        case 'nightMode':
          root.classList.toggle('night-mode', !!v);
          break;
        case 'fontSize':
          root.dataset.fontSize = v;
          break;
        case 'colorBlind':
          root.classList.toggle('color-blind', !!v);
          break;
        case 'reduceMotion':
          root.classList.toggle('reduce-motion', !!v);
          break;
        case 'touchTarget':
          root.style.setProperty('--touch-target', v + 'px');
          break;
      }
    } catch (e) {}
  }

  applyAll() {
    for (const k of Object.keys(this.settings)) this.apply(k);
  }

  save() {
    try {
      localStorage.setItem('starport_settings', JSON.stringify(this.settings));
    } catch (e) {}
  }

  load() {
    try {
      const s = localStorage.getItem('starport_settings');
      if (s) this.settings = { ...DEFAULT_SETTINGS, ...JSON.parse(s) };
    } catch (e) {}
  }

  reset() {
    this.settings = { ...DEFAULT_SETTINGS };
    this.save();
    this.applyAll();
  }
}

// ============ 难度配置 ============
const DIFFICULTY = {
  easy:   { name: '简单', desc: '资源+50%，灾难-50%', resMul: 1.5, disasterMul: 0.5 },
  normal: { name: '普通', desc: '标准体验', resMul: 1.0, disasterMul: 1.0 },
  hard:   { name: '困难', desc: '资源-25%，灾难+50%', resMul: 0.75, disasterMul: 1.5 },
};

// ============ 性能模式 ============
function applyPerformanceMode(settings) {
  const q = settings.get('quality');
  return {
    particleCount: q === 'high' ? 100 : q === 'medium' ? 40 : 10,
    shadowBlur: q === 'high',
    antialias: q !== 'low',
    fps: q === 'low' ? 30 : 60,
  };
}

// ============ 设置面板渲染 ============
function renderSettingsPanel(sm) {
  const s = sm.settings;
  let html = '<div class="settings-panel"><h3>⚙️ 设置</h3>';

  // 显示
  html += '<section><h4>🖥️ 显示</h4>';
  html += `<label>画质 <select data-set="quality">
    ${['high', 'medium', 'low'].map(q => `<option ${s.quality === q ? 'selected' : ''}>${q}</option>`).join('')}
  </select></label>`;
  html += `<label><input type="checkbox" data-set="particles" ${s.particles ? 'checked' : ''}> 粒子效果</label>`;
  html += `<label><input type="checkbox" data-set="nightMode" ${s.nightMode ? 'checked' : ''}> 夜间模式</label>`;
  html += '</section>';

  // 音频
  html += '<section><h4>🔊 音频</h4>';
  html += `<label><input type="checkbox" data-set="music" ${s.music ? 'checked' : ''}> 音乐</label>`;
  html += `<label><input type="checkbox" data-set="sfx" ${s.sfx ? 'checked' : ''}> 音效</label>`;
  html += `<label>音乐音量 <input type="range" data-set="musicVolume" min="0" max="1" step="0.1" value="${s.musicVolume}"></label>`;
  html += '</section>';

  // 游戏
  html += '<section><h4>🎮 游戏</h4>';
  html += `<label>难度 <select data-set="difficulty">
    ${Object.entries(DIFFICULTY).map(([k, d]) => `<option value="${k}" ${s.difficulty === k ? 'selected' : ''}>${d.name} - ${d.desc}</option>`).join('')}
  </select></label>`;
  html += `<label><input type="checkbox" data-set="autoSave" ${s.autoSave ? 'checked' : ''}> 自动存档</label>`;
  html += '</section>';

  // 触屏
  html += '<section><h4>📱 触屏</h4>';
  html += `<label>触屏目标 <input type="range" data-set="touchTarget" min="32" max="64" value="${s.touchTarget}"> ${s.touchTarget}px</label>`;
  html += `<label><input type="checkbox" data-set="pinchZoom" ${s.pinchZoom ? 'checked' : ''}> 双指缩放</label>`;
  html += '</section>';

  // 无障碍
  html += '<section><h4>♿ 无障碍</h4>';
  html += `<label><input type="checkbox" data-set="colorBlind" ${s.colorBlind ? 'checked' : ''}> 色盲模式</label>`;
  html += `<label>字号 <select data-set="fontSize">
    ${['small', 'medium', 'large'].map(f => `<option ${s.fontSize === f ? 'selected' : ''}>${f}</option>`).join('')}
  </select></label>`;
  html += `<label><input type="checkbox" data-set="reduceMotion" ${s.reduceMotion ? 'checked' : ''}> 减少动态效果</label>`;
  html += '</section>';

  html += '<button class="btn-reset-settings">恢复默认</button>';
  html += '</div>';
  return html;
}

// ============ 绑定设置面板事件 ============
function bindSettingsPanel(panelEl, sm) {
  if (!panelEl || !sm) return;
  panelEl.addEventListener('change', (e) => {
    const key = e.target.dataset.set;
    if (!key) return;
    let val;
    if (e.target.type === 'checkbox') val = e.target.checked;
    else if (e.target.type === 'range') val = parseFloat(e.target.value);
    else val = e.target.value;
    sm.set(key, val);
  });
  const resetBtn = panelEl.querySelector('.btn-reset-settings');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sm.reset();
      panelEl.innerHTML = renderSettingsPanel(sm).replace(/^<div[^>]*>|<\/div>$/, '');
      bindSettingsPanel(panelEl, sm);
    });
  }
}

// ============ 快捷键 ============
const HOTKEYS = [
  { key: 'Space', desc: '暂停/继续' },
  { key: 'B', desc: '建造菜单' },
  { key: 'T', desc: '科技面板' },
  { key: 'M', desc: '地图' },
  { key: '+/-', desc: '缩放' },
  { key: 'Esc', desc: '关闭面板' },
];

function renderHotkeys() {
  let html = '<div class="hotkeys"><h4>⌨️ 快捷键</h4><ul>';
  for (const h of HOTKEYS) html += `<li><kbd>${h.key}</kbd> ${h.desc}</li>`;
  html += '</ul></div>';
  return html;
}

// v1.8.0 星海无垠 — 50000 行里程碑
// 七大胜利，星海无垠。感谢每一位殖民者。
const MILESTONE_50K = { version: '1.8.0', lines: 50000, date: '2026-11-05' };

// 50000 行达成！
