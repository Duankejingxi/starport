/* 星港 — help.js：游戏内帮助手册
 * 玩法说明 / 建筑图鉴 / 资源链 / 常见问题
 */

const HELP_SECTIONS = [
  {
    id: 'basics',
    title: '🎮 基础玩法',
    content: `
<b>目标</b>：从 3 个殖民者起步，建一座火星城市，最终建成发射台通关。<br><br>
<b>核心循环</b>：<br>
1. 👆 点击地图移动宇航员（或 WASD）<br>
2. ⛏️ 走到发光格子按「采集」收集铁矿/冰水/稀土<br>
3. 🏠 点底部按钮选建筑，再点空地放置<br>
4. 👥 人口每 20 秒自动 +1（需要水+食物+电力）<br>
5. 🗺️ 攒 50 铁矿点迷雾扇区解锁新区域<br>
6. 🚀 冲 60 人口 → 建指挥中心 → 建发射台 = 胜利！<br><br>
<b>小贴士</b>：先建居住舱+太阳能，再建采矿机挂机。
    `.trim(),
  },
  {
    id: 'resources',
    title: '📦 资源链',
    content: `
<b>采集</b>：🟤铁矿 / 🧊冰水 / 🟣稀土（地图发光点，手动或采矿机）<br><br>
<b>生产链</b>：<br>
🧊冰水 → 🚰水厂 → 💧水（人口需要）<br>
🧊冰水 → 🌾温室 → 🌾食物（人口需要）<br>
🟤铁矿 → 🔥冶炼厂 → 🔩钢材（高级建筑）<br>
🔬实验室 → 🔬科技点（解锁科技）<br>
🔆太阳能板 / ☢️核电站 → ⚡电力（所有建筑需要）<br><br>
<b>存储</b>：基础每种 200，📦仓库每座 +200，超了会停产！
    `.trim(),
  },
  {
    id: 'buildings',
    title: '🏗️ 建筑图鉴',
    content: `
<b>居住</b>：🏠居住舱（人口上限）/ 🌐生态穹顶（大量人口+加速）<br>
<b>能源</b>：🔆太阳能板 / ☢️核电站（需科技，巨量电力）<br>
<b>采集</b>：🏭采矿机（铁）/ 💧抽水机（冰）<br>
<b>生产</b>：🔥冶炼厂 / 🌾温室 / 🚰水厂 / 🔬实验室<br>
<b>市政</b>：🏥医院（人口加速）/ 🏫学校（科技+50%）/ 🔧维修站<br>
<b>物流</b>：🚚运输站（造车）/ 📦仓库 / 🛰️物流中心<br>
<b>特殊</b>：📡气象站（灾难预警）/ 🏪贸易站（换资源）/ 🎛️指挥中心 / 🚀发射台<br><br>
<b>升级</b>：点建筑 → 升级按钮，每种 3 级，属性大幅提升。<br>
<b>维修</b>：建筑会老化（10 分钟后效率下降），陨石会砸坏，建维修站修复。<br>
<b>拆除</b>：点建筑 → 拆除按钮，返还 50% 成本。
    `.trim(),
  },
  {
    id: 'tech',
    title: '🔬 科技树',
    content: `
30 项科技，三系：<br><br>
<b>🏗️ 建造系</b>：降成本、加容量、免疫陨石、解锁穹顶<br>
<b>⚙️ 生产系</b>：各产量 +50%、解锁核电站、终极「奇点」全生产+25%<br>
<b>💚 生存系</b>：人口加速、减耗水/食物、解锁气象站/贸易站/穹顶<br><br>
科技点由🔬实验室生产。先点便宜的，逐步解锁高级。
    `.trim(),
  },
  {
    id: 'logistics',
    title: '🚚 物流系统',
    content: `
<b>运输站</b>：每座提供 2 辆运输车名额。<br>
<b>造车</b>：点运输站 → 造运输车（铁×20 稀土×10）。<br>
<b>指派</b>：点「🚚运输」→ 选车 → 点「指派」→ 点地图资源点。<br>
运输车自动往返，每 25 秒带回 6 单位资源。<br><br>
<b>仓库</b>：+200 存储上限，爆仓会停产！<br>
<b>物流中心</b>：车上限+2，速度+25%/座。
    `.trim(),
  },
  {
    id: 'disaster',
    title: '⛈️ 灾难应对',
    content: `
<b>⛈️ 沙尘暴</b>：太阳能 -50%（60 秒）。对策：多建太阳能/核电站，点「防辐射」科技。<br><br>
<b>☄️ 陨石</b>：预警后砸随机建筑，需维修站修复。对策：「坚固结构」科技免疫。<br><br>
<b>🌞 太阳风暴</b>：实验室/指挥中心等电子设备停工（45 秒）。<br><br>
<b>🌪️ 尘卷风</b>：移动风柱，路径上太阳能板失效。躲不开，只能硬扛。<br><br>
<b>📡 气象站</b>：所有灾难预警 +10 秒，必备！
    `.trim(),
  },
  {
    id: 'faq',
    title: '❓ 常见问题',
    content: `
<b>Q：人口不涨了？</b><br>
A：检查水/食物/电力是否充足，人口上限是否满了。<br><br>
<b>Q：建筑不生产？</b><br>
A：缺电会停工；检查存储是否满了；建筑可能老化/损坏。<br><br>
<b>Q：科技点怎么来？</b><br>
A：建造🔬实验室自动生产。<br><br>
<b>Q：稀土不够？</b><br>
A：手动采集稀土点，或贸易站用铁矿换。<br><br>
<b>Q：怎么快速发展？</b><br>
A：采矿机挂机 → 解锁扇区 → 运输车自动化 → 科技树 → 冲人口。<br><br>
<b>Q：快捷键有哪些？</b><br>
A：T 科技 / R 运输 / H 帮助 / M 成就 / N 统计 / P 暂停 / 1-9 快速建造 / E 采集 / WASD 移动。
    `.trim(),
  },
];

class HelpManager {
  constructor(game) {
    this.game = game;
    this.currentSection = 'basics';
  }

  show() {
    this.render();
    document.getElementById('help-panel').classList.remove('hidden');
  }

  hide() {
    document.getElementById('help-panel').classList.add('hidden');
  }

  toggle() {
    const el = document.getElementById('help-panel');
    if (el.classList.contains('hidden')) this.show();
    else this.hide();
  }

  render() {
    const nav = document.getElementById('help-nav');
    const content = document.getElementById('help-content');
    if (!nav || !content) return;

    nav.innerHTML = HELP_SECTIONS.map(s =>
      `<button class="help-tab ${s.id === this.currentSection ? 'active' : ''}" data-help="${s.id}">${s.title}</button>`
    ).join('');

    const sec = HELP_SECTIONS.find(s => s.id === this.currentSection);
    if (sec) content.innerHTML = sec.content;

    for (const btn of nav.querySelectorAll('[data-help]')) {
      btn.addEventListener('click', () => {
        this.currentSection = btn.dataset.help;
        this.render();
        if (this.game.sound) this.game.sound.click();
      });
    }
  }

  bindUI() {
    const closeBtn = document.getElementById('btn-close-help');
    if (closeBtn) closeBtn.addEventListener('click', () => this.hide());
  }
}

if (typeof module !== 'undefined') { module.exports = { HelpManager, HELP_SECTIONS }; }
