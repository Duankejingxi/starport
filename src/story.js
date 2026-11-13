import { G } from './state.js';
import { count } from './buildings.js';
import { audio } from './audio.js';
import { PID, P } from './planets.js';
import { LEVELS } from './city.js';

const built = t => () => count(t) >= 1;
const mined = (t, n) => ({ check: () => G.stats.mined[t] >= n, prog: () => `${Math.min(G.stats.mined[t], n)}/${n}` });

const lvl = n => ({ text: `城市等级达到「${LEVELS[n].name}」`, check: () => G.cityLevel >= n, prog: () => `人口 ${G.colony.pop}/${LEVELS[n].pop}` });
const popGoal = n => ({ text: `人口达到 ${n}`, check: () => G.colony.pop >= n, prog: () => `${G.colony.pop}/${n}` });
const launched = { text: '发射殖民舰', check: () => !!G.launched, prog: () => '靠近发射台按 E' };

const MARS = [
  {
    title: '第一章 · 着陆', sub: '活下去',
    goals: [
      { text: '采集铁矿', ...mined('iron', 10) },
      { text: '采集硅晶', ...mined('silicon', 6) },
      { text: '采集水冰', ...mined('ice', 6) },
      { text: '建造太阳能阵列', check: built('solar') },
      { text: '建造制氧站', check: built('oxygen') },
    ],
    radio: [
      ['方舟一号 · AI', '着陆成功。外部气压 0.6 千帕，气温零下 63 摄氏度。欢迎来到火星。'],
      ['地球指挥中心 · 林舟', '方舟一号，这里是地球联合指挥中心。听到请回答……很好。你是第一个踏上这片土地的人。'],
      ['地球指挥中心 · 林舟', '着陆舱只能在它周围很小的范围内给你补氧。按住左键用采矿激光采集铁矿、硅晶和水冰，然后按 B 建起第一座制氧站。'],
    ],
  },
  {
    title: '第二章 · 第一个家', sub: '为后来的人点一盏灯',
    goals: [
      { text: '建造居住穹顶', check: built('habitat') },
      { text: '建造温室', check: built('greenhouse') },
      { text: '建造水冰提取器', check: built('extractor') },
      { text: '建造着陆场', check: built('beacon') },
      { text: '迎接第一批移民', check: () => G.stats.arrived >= 1, prog: () => G.colony.support > 0 ? '等待飞船' : '需要住房/氧/水/食物/电' },
    ],
    radio: [
      ['地球指挥中心 · 林舟', '制氧站运转正常！它周围 14 米都能给宇航服补氧，你可以走得更远了。'],
      ['地球指挥中心 · 林舟', '地球上有十万人报名了移民计划。建好穹顶、温室、水源和着陆场——给他们一个可以回的家。'],
      ['方舟一号 · AI', '提示：太阳能在夜间只剩四成功率。多建几座，殖民地才不会在夜里断电。'],
    ],
  },
  {
    title: '第三章 · 长夜', sub: '守护我们的人',
    goals: [
      { text: '建造制造工坊', check: built('fabricator') },
      { text: '制造等离子步枪', check: () => !!G.upgrades.rifle },
      { text: '建造防御炮塔', check: built('turret') },
      { text: '击退锈蚀蛛', check: () => G.stats.kills >= 6, prog: () => `${Math.min(G.stats.kills, 6)}/6` },
    ],
    radio: [
      ['地球指挥中心 · 林舟', '……第一批移民安全着陆了。我这边的控制室里，所有人都站起来鼓掌。'],
      ['方舟一号 · AI', '警告：地质雷达在夜间探测到大量地下移动信号。它们似乎被殖民地的热量吸引。'],
      ['地球指挥中心 · 林舟', '建一座制造工坊，造武器，建炮塔。守住大家。'],
    ],
  },
  {
    title: '第四章 · 扎根', sub: '让灯火彻夜不熄',
    goals: [
      { text: '殖民地人口达到 12', check: () => G.colony.pop >= 12, prog: () => `${G.colony.pop}/12` },
      { text: '采集钛矿', ...mined('titanium', 12) },
      { text: '建造聚变反应堆', check: built('reactor') },
    ],
    radio: [
      ['地球指挥中心 · 林舟', '你们撑过了长夜。现在，是时候让殖民地真正扎根了。'],
      ['方舟一号 · AI', '在远方的紫色晶体矿脉中检测到高纯度钛。注意：那里有体型更大的锈蚀蛛守卫。'],
      ['方舟一号 · AI', '提示：在制造工坊可以造喷气背包和大容量氧气罐，适合长途勘探。'],
    ],
  },
  {
    title: '第五章 · 新家园', sub: '此心安处是吾乡',
    goals: [
      { text: '建造大气改造塔', check: built('terraformer') },
      { text: '殖民地人口达到 20', check: () => G.colony.pop >= 20, prog: () => `${G.colony.pop}/20` },
      { text: '完成大气改造', check: () => G.terraform >= 1 && G.ended && !G.endingShown, prog: () => `${Math.floor(G.terraform * 100)}%` },
    ],
    radio: [
      ['地球指挥中心 · 林舟', '聚变反应堆点火成功。殖民地第一次在夜里也灯火通明。'],
      ['地球指挥中心 · 林舟', '最后一步了。大气改造塔——它要几十年才能彻底改变火星。但第一场雨，也许就在明天。'],
      ['方舟一号 · AI', '提示：城市等级提升后领地会扩大，并解锁公寓塔、垂直农场、生态中枢。'],
    ],
  },
  {
    title: '第六章 · 星辰大海', sub: '下一颗星球',
    goals: [lvl(5), { text: '建造星际发射台', check: built('launch') }, launched],
    radio: [
      ['地球指挥中心 · 林舟', '火星已经是家了。但人类的故事，从来不止于一个家。'],
      ['方舟一号 · AI', '木卫二·欧罗巴：冰壳之下探测到液态海洋。把火星发展成「星港」，就能建造星际发射台。'],
    ],
  },
];

const EUROPA = [
  {
    title: '第一章 · 冰原', sub: '在木星的注视下',
    goals: [
      { text: '采集水冰', ...mined('ice', 15) },
      { text: '采集铁矿', ...mined('iron', 10) },
      { text: '建造制氧站', check: built('oxygen') },
      { text: '建造居住穹顶', check: built('habitat') },
      { text: '建造着陆场', check: built('beacon') },
    ],
    radio: [
      ['方舟二号 · AI', '着陆成功。表面温度零下 160 摄氏度。重力只有地球的七分之一。'],
      ['火星殖民地 · 林晓', '你到了吗？我们在火星上看得见木星的光点。替我们看一眼它的大红斑吧。'],
      ['方舟二号 · AI', '注意：这里离太阳太远，太阳能效率只有火星的一半。所有技术已从火星同步。'],
    ],
  },
  {
    title: '第二章 · 冰下之城', sub: '海洋之上的灯火',
    goals: [popGoal(8), lvl(2), { text: '建造聚变反应堆', check: built('reactor') }],
    radio: [
      ['周青禾 · 水文学家', '冰层下的海洋比地球所有海洋加起来还多。有水，就有生命。'],
      ['方舟二号 · AI', '警告：冰裂缝里有东西在移动。它们和火星的锈蚀蛛很像……但是蓝色的。'],
    ],
  },
  {
    title: '第三章 · 深渊之光', sub: '城市在冰原上生长',
    goals: [lvl(3), popGoal(24), { text: '建造生态中枢', check: built('lifehub') }],
    radio: [['Elena Petrova · 天文学家', '你知道吗？从这里看，太阳只是一颗特别亮的星星。']],
  },
  {
    title: '第四章 · 下一站', sub: '一千二百光年',
    goals: [lvl(4), { text: '建造星际发射台', check: built('launch') }, launched],
    radio: [
      ['方舟二号 · AI', '开普勒-442b：位于宜居带的类地行星，距离一千二百光年。'],
      ['地球指挥中心 · 林舟', '这将是人类第一次离开太阳系。我老了，等不到你们抵达的那天。但我会一直看着星空。'],
    ],
  },
];

const KEPLER = [
  {
    title: '第一章 · 双日之下', sub: '另一颗恒星的晨光',
    goals: [
      { text: '采集铁矿', ...mined('iron', 15) },
      { text: '采集硅晶', ...mined('silicon', 10) },
      { text: '建造制氧站', check: built('oxygen') },
      { text: '建造居住穹顶', check: built('habitat') },
      { text: '建造着陆场', check: built('beacon') },
    ],
    radio: [
      ['方舟三号 · AI', '冷冻休眠结束。当前日期：公元 2401 年。欢迎来到开普勒-442b。'],
      ['方舟三号 · AI', '大气含氧 14%，还不够呼吸，但已经非常接近了。这里的重力比地球略大。'],
    ],
  },
  {
    title: '第二章 · 异星森林', sub: '会发光的树',
    goals: [popGoal(10), lvl(2), { text: '建造聚变反应堆', check: built('reactor') }],
    radio: [
      ['Aiko Sato 的后代 · 生物学家', '那些伞菇树在夜里会发光。我的曾曾祖母一定会喜欢这里。'],
      ['方舟三号 · AI', '警告：森林中的掠食者会在夜间出没。'],
    ],
  },
  {
    title: '第三章 · 文明', sub: '城市连成了星河',
    goals: [lvl(4), popGoal(36), { text: '建造生态中枢', check: built('lifehub') }],
    radio: [['方舟三号 · AI', '来自火星和欧罗巴的信号已经抵达——它们在一千二百年前发出。两座城市都还亮着。']],
  },
  {
    title: '终章 · 星际文明', sub: '三颗星球，一个人类',
    goals: [lvl(5), { text: '建造文明纪念碑', check: built('monument') }],
    radio: [['方舟三号 · AI', '建一座纪念碑吧。献给第一个踏上火星的人——也就是你。']],
  },
];

export const CHAPTERS = PID === 'europa' ? EUROPA : PID === 'kepler' ? KEPLER : MARS;
export const THREAT_FROM = PID === 'mars' ? 2 : 1;

export const RECIPES = {
  rifle:     { name: '等离子步枪', icon: 'rifle', cost: { iron: 18, silicon: 12 }, desc: '按 2 切换。消耗能量发射等离子弹。' },
  tank:      { name: '大容量氧气罐', icon: 'tank', cost: { iron: 12, ice: 10 }, desc: '宇航服氧气上限 100 → 180。' },
  rover:     { name: '加压漫游车', icon: 'rover', cost: { iron: 35, silicon: 20, ice: 5 }, desc: '在工坊旁出厂。按 E 上车，Shift 加速。车舱内自动补氧，还能撞飞锈蚀蛛。' },
  scanner:   { name: '地质扫描仪', icon: 'scanner', cost: { iron: 8, silicon: 10 }, desc: '小地图范围扩大，罗盘标出最近的钛矿。' },
  jetpack:   { name: '喷气背包', icon: 'jet', cost: { iron: 20, silicon: 15, titanium: 4 }, desc: '空中按住空格飞行，消耗能量。' },
  overclock: { name: '激光超频', icon: 'bolt2', cost: { silicon: 20, titanium: 3 }, desc: '采矿速度 ×2，激光伤害提升。' },
  armor:     { name: '复合装甲', icon: 'armor', cost: { iron: 30, titanium: 6 }, desc: '生命上限 150，受到伤害 -40%。' },
  rifle2:    { name: '聚焦线圈', icon: 'focus', cost: { silicon: 18, titanium: 6 }, need: 'rifle', desc: '等离子步枪伤害 +60%。' },
};

// —— 无线电队列 ——
const queue = [];
let current = null, curT = 0;
export function radio(who, text) { queue.push([who, text]); }
export function radioCurrent() { return current; }

let checkT = 0, stormT = 200, stormPhase = 'calm', stormLeft = 0, endingQueued = false;
export function updateStory(dt) {
  // 无线电
  if (current) { curT -= dt; if (curT <= 0) current = null; }
  if (!current && queue.length) { current = queue.shift(); curT = 3.5 + current[1].length * 0.11; audio.play('radio'); }

  checkT -= dt;
  if (checkT <= 0 && G.chapter < CHAPTERS.length) {
    checkT = 0.5;
    const ch = CHAPTERS[G.chapter];
    G.goalDone = G.goalDone || {};
    let all = true;
    ch.goals.forEach((g, i) => {
      const key = G.chapter + ':' + i, ok = g.check();
      if (ok && !G.goalDone[key]) { G.goalDone[key] = true; audio.play('objective'); G.events.emit('toast', `✓ ${g.text}`); }
      if (!G.goalDone[key]) all = false;
    });
    if (all && G.chapter < CHAPTERS.length - 1) startChapter(G.chapter + 1);
  }

  // 大气改造
  const tf = G.buildings.find(b => b.type === 'terraformer' && b.powered);
  if (tf && G.terraform < 1) {
    G.terraform = Math.min(1, G.terraform + dt / 300);
    if (G.terraform >= 1 && !endingQueued) { endingQueued = true; G.events.emit('ending'); }
  }
  G.raining = (G.terraform >= 1 || PID === 'kepler') && Math.sin(G.time.t * Math.PI * 4 + G.time.day * 1.7) > 0.45;

  // 沙尘暴
  if (P.storms && G.time.day >= 2 && G.terraform < 0.7) {
    stormT -= dt;
    if (stormPhase === 'calm' && stormT <= 0 && G.time.night < 0.5) { stormPhase = 'warn'; stormT = 25; radio('方舟一号 · AI', '警告：沙尘暴将在 25 秒后抵达。能见度会急剧下降，氧气消耗加快。靠近生命维持设施。'); }
    else if (stormPhase === 'warn' && stormT <= 0) { stormPhase = 'storm'; stormLeft = 70 + Math.random() * 40; }
    else if (stormPhase === 'storm') { stormLeft -= dt; if (stormLeft <= 0) { stormPhase = 'calm'; stormT = 360 + Math.random() * 300; radio('方舟一号 · AI', '沙尘暴已过境。'); } }
  }
  const target = stormPhase === 'storm' ? 1 : 0;
  G.storm += (target - G.storm) * Math.min(1, dt * 0.25);
  if (G.storm < 0.001) G.storm = 0;
}

export function startChapter(i, silent = false) {
  G.chapter = i;
  const ch = CHAPTERS[i];
  if (!silent) {
    audio.play('chapter');
    G.events.emit('chapter', ch);
    ch.radio.forEach(r => radio(r[0], r[1]));
  }
}

export function stormState() { return { phase: stormPhase, t: stormT, left: stormLeft }; }
export function setStormState(s) { if (s) { stormPhase = s.phase === 'storm' ? 'calm' : s.phase; stormT = s.t ?? 200; } }
export function resetStoryEnding(v) { endingQueued = v; }
