/* 星港 — game_guide.js：游戏指南/FAQ/新手教程
 * 完整的新手引导和常见问题。
 */

// ============ 新手教程 ============
const TUTORIAL_STEPS = [
  { step: 1, title: '降落火星', text: '欢迎来到火星！你是这片荒漠的第一批殖民者。点击地图上的资源点采集基础材料。', action: 'gather' },
  { step: 2, title: '建造房屋', text: '有了材料，点击建造按钮，盖第一座居住舱。人口会自动增长！', action: 'build_house' },
  { step: 3, title: '发展经济', text: '建造矿场和农场，稳定资源产出。注意电力和食物的平衡。', action: 'build_economy' },
  { step: 4, title: '研究科技', text: '打开科技面板，研究第一项科技。科技解锁更高级的建筑。', action: 'research' },
  { step: 5, title: '探索地下', text: '挖到足够深，你会发现地下城系统。稀有矿物在等你！', action: 'dig' },
  { step: 6, title: '仰望天空', text: '科技足够后，建造天空平台，开启天空城时代。', action: 'sky' },
  { step: 7, title: '发射台', text: '最终目标：建成发射台，完成第一胜利！然后向星海进发。', action: 'launch' },
];

// ============ FAQ ============
const FAQ = [
  { q: '资源点太小，手机点不到怎么办？', a: 'v1.5 起所有可点击目标≥44px。可以用双指缩放放大地图，或点右下角的 + 按钮。' },
  { q: '人口不增长了？', a: '检查住房容量和食物。人口上限=住房容量，食物不足会饿死人。' },
  { q: '电力总是不够？', a: '多建太阳能板/核电站。机器人和量子设备耗电大户，注意平衡。' },
  { q: '科技研究太慢？', a: '建科研中心和大学，雇佣科研人格的总督，量子计算机有加成。' },
  { q: '灾难太频繁？', a: '建防御建筑，研究对应科技。难度可以在设置里调。' },
  { q: '怎么解锁天空城？', a: '研究「反重力」科技线，然后建造第一个天空平台。' },
  { q: '机器人起义了怎么办？', a: '三条路：镇压（军事强时）、和解（花资源）、谈判（魅力高时）。平时保持机器人福利。' },
  { q: '量子系统是干嘛的？', a: '后期科研加速器。量子比特可以大幅缩短研究时间，还能解锁时间科技。' },
  { q: '有几种胜利？', a: '七种：发射台/方舟/星门/时间机器/戴森球/虫洞/新人类。集齐七冠就是传奇。' },
  { q: '存档会丢吗？', a: '自动保存在浏览器本地。换浏览器/清缓存会丢，重要存档建议截图记录。' },
  { q: '游戏卡顿？', a: '建筑太多时试试降低画质（设置→性能模式），或关闭粒子效果。' },
  { q: '手机横屏还是竖屏？', a: '都支持。竖屏适合单手操作，横屏视野更大。' },
];

// ============ 建筑推荐路线 ============
const BUILD_ORDERS = {
  beginner: {
    name: '新手稳健流',
    steps: ['居住舱', '太阳能板', '矿场', '农场', '仓库', '科研中心', '发射台'],
    desc: '先保证生存，再发展科技，直奔第一胜利。适合第一次玩。',
  },
  economy: {
    name: '经济爆发流',
    steps: ['矿场×3', '贸易站', '银行', '市场', '太空港', '戴森球'],
    desc: '靠贸易和金融滚雪球，后期资源爆炸。',
  },
  science: {
    name: '科技碾压流',
    steps: ['科研中心', '大学', '量子实验室', 'AI核心', '时间机器'],
    desc: '科技领先一切，解锁高级建筑降维打击。',
  },
  military: {
    name: '军事征服流',
    steps: ['兵营', '防御炮塔', '机甲工厂', '轨道炮', '虫洞稳定器'],
    desc: '先保证不被灾难/事件打垮，再稳步推进。',
  },
};

// ============ 术语表 ============
const GLOSSARY = [
  { term: 'DPS', def: '每秒伤害，军事建筑的输出指标' },
  { term: '人口容量', def: '住房提供的最大人口数' },
  { term: '幸福度', def: '影响人口增长速度和事件概率' },
  { term: '量子比特', def: '量子系统的货币，用于高级研究' },
  { term: '基因点', def: '生物系统的货币，用于基因改造' },
  { term: '时间子', def: '时间机器的燃料，极其稀有' },
  { term: '总督', def: 'AI 管理者，帮你自动管理分区' },
  { term: '战役', def: '20 个挑战关卡，纯挑战无剧情' },
  { term: '奇观', def: '超级建筑，全局加成，七大胜利的关键' },
  { term: 'NG+', def: '新游戏+，通关后继承部分进度重开' },
];

// ============ 指南渲染 ============
function renderGuide() {
  let html = '<div class="game-guide">';

  // 教程
  html += '<section><h3>📖 新手教程</h3><ol class="tutorial-list">';
  for (const s of TUTORIAL_STEPS) {
    html += `<li><b>第${s.step}步：${s.title}</b><br><small>${s.text}</small></li>`;
  }
  html += '</ol></section>';

  // FAQ
  html += '<section><h3>❓ 常见问题</h3><div class="faq-list">';
  for (const f of FAQ) {
    html += `<details><summary>${f.q}</summary><p>${f.a}</p></details>`;
  }
  html += '</div></section>';

  // 建筑路线
  html += '<section><h3>🗺️ 推荐路线</h3><div class="build-orders">';
  for (const [k, o] of Object.entries(BUILD_ORDERS)) {
    html += `<div class="build-order"><b>${o.name}</b><p>${o.desc}</p><small>${o.steps.join(' → ')}</small></div>`;
  }
  html += '</div></section>';

  // 术语表
  html += '<section><h3>📚 术语表</h3><dl class="glossary">';
  for (const g of GLOSSARY) {
    html += `<dt>${g.term}</dt><dd>${g.def}</dd>`;
  }
  html += '</dl></section>';

  html += '</div>';
  return html;
}

// ============ 教程进度 ============
class TutorialProgress {
  constructor() {
    this.current = 0;
    this.done = false;
  }

  next() {
    this.current++;
    if (this.current >= TUTORIAL_STEPS.length) {
      this.done = true;
      return null;
    }
    return TUTORIAL_STEPS[this.current];
  }

  get() {
    if (this.done) return null;
    return TUTORIAL_STEPS[this.current];
  }

  skip() {
    this.done = true;
  }

  serialize() {
    return { current: this.current, done: this.done };
  }

  deserialize(d) {
    if (!d) return;
    this.current = d.current || 0;
    this.done = !!d.done;
  }
}
