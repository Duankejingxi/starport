import { G } from './state.js';
import { PID } from './planets.js';
import { ic } from './icons.js';
import { audio } from './audio.js';
import { relicCount } from './relics.js';

// 成就：跨星球累计，保存在浏览器里
const KEY = 'starport-achv';
export const ACHV = [
  { id: 'first', name: '第一步', desc: '在异星采集第一块矿石', icon: 'iron', check: () => G.stats.mined.iron + G.stats.mined.silicon + G.stats.mined.ice > 0 },
  { id: 'devil', name: '乘风而上', desc: '被尘卷风卷上天空', icon: 'storm', check: () => (G.stats.devils || 0) > 0 },
  { id: 'whale', name: '鲸歌', desc: '扫描记录开普勒的天鲸', icon: 'planet', check: () => (G.stats.whales || 0) > 0 },
  { id: 'geyser', name: '冰上飞人', desc: '被木卫二的冰火山送上天空', icon: 'ice', check: () => (G.stats.geyser || 0) > 0 },
  { id: 'boomer', name: '一雷清场', desc: '投掷第一颗震荡雷', icon: 'bomb', check: () => (G.stats.grenades || 0) > 0 },
  { id: 'breathe', name: '呼吸', desc: '建起第一座制氧站', icon: 'o2', check: () => G.stats.built.oxygen > 0 },
  { id: 'home', name: '第一个家', desc: '建造居住穹顶', icon: 'dome', check: () => G.stats.built.habitat > 0 },
  { id: 'welcome', name: '欢迎回家', desc: '迎接第一批移民', icon: 'pop', check: () => G.stats.arrived > 0 },
  { id: 'listen', name: '倾听者', desc: '与 8 位居民交谈', icon: 'radio', check: () => (G.stats.talked || []).length >= 8 },
  { id: 'night', name: '长夜守望者', desc: '击退 15 只锈蚀蛛', icon: 'shield', check: () => G.stats.kills >= 15 },
  { id: 'guardian', name: '晶体猎人', desc: '击败一只钛矿守卫', icon: 'titanium', check: () => (G.stats.guardKills || 0) > 0 },
  { id: 'road', name: '公路旅行', desc: '驾驶漫游车行驶 3 公里', icon: 'rover', check: () => (G.stats.driven || 0) >= 3000 },
  { id: 'meteor', name: '星落之夜', desc: '采集一块陨石', icon: 'meteor', check: () => (G.stats.meteorMined || 0) > 0 },
  { id: 'storm', name: '风暴之中', desc: '经历一场沙尘暴', icon: 'storm', check: () => G.storm > 0.85 },
  { id: 'fly', name: '飞翔', desc: '制造喷气背包', icon: 'jet', check: () => !!G.upgrades.jetpack },
  { id: 'town', name: '小镇', desc: '城市等级达到「小镇」', icon: 'colony', check: () => G.cityLevel >= 2 },
  { id: 'metro', name: '大都会', desc: '城市等级达到「大都会」', icon: 'tower', check: () => G.cityLevel >= 4 },
  { id: 'fifty', name: '五十个灯火', desc: '单颗星球人口达到 50', icon: 'pop', check: () => G.colony.pop >= 50 },
  { id: 'reactor', name: '第二颗太阳', desc: '点亮聚变反应堆', icon: 'power', check: () => G.stats.built.reactor > 0 },
  { id: 'blue', name: '蓝色天空', desc: '完成火星大气改造', icon: 'planet', check: () => G.terraform >= 1 },
  { id: 'europa', name: '冰下之海', desc: '登陆木卫二·欧罗巴', icon: 'ice', check: () => PID === 'europa' },
  { id: 'kepler', name: '双日之地', desc: '抵达开普勒-442b', icon: 'sun', check: () => PID === 'kepler' },
  { id: 'civ', name: '星际文明', desc: '建成文明纪念碑', icon: 'monument', check: () => G.stats.built.monument > 0 },
  { id: 'relic', name: '回声', desc: '发现第一处遗迹', icon: 'radio', check: () => relicCount().found > 0 },
  { id: 'archaeo', name: '考古学家', desc: '发现一颗星球上的全部遗迹', icon: 'book', check: () => { const c = relicCount(); return c.total > 0 && c.found === c.total; } },
  { id: 'boss', name: '晶母陨落', desc: '在晶潮之夜击败晶母', icon: 'boss', check: () => (G.stats.bossKills || 0) > 0 },
  { id: 'fleet', name: '无人机舰队', desc: '无人机运回 30 批物资', icon: 'drone', check: () => (G.stats.droneHauls || 0) >= 30 },
  { id: 'lv3', name: '精益求精', desc: '把一座建筑升到 3 级', icon: 'star', check: () => G.buildings.some(b => (b.level || 1) >= 3) },
  { id: 'buddy', name: '好搭档', desc: '让小星扫描 10 次', icon: 'scanner', check: () => (G.stats.scans || 0) >= 10 },
  { id: 'helper', name: '好邻居', desc: '完成 10 个居民委托', icon: 'radio', check: () => (G.stats.requests || 0) >= 10 },
  { id: 'science', name: '科学家', desc: '完成 6 项科研', icon: 'book', check: () => Object.keys(G.tech || {}).length >= 6 },
  { id: 'trader', name: '星际商人', desc: '完成 10 次星际贸易', icon: 'ship', check: () => (G.stats.traded || 0) >= 10 },
  { id: 'mail', name: '来自地球的信', desc: '打开 5 个补给舱', icon: 'ship', check: () => (G.stats.pods || 0) >= 5 },
  { id: 'happy', name: '安居乐业', desc: '居民幸福度达到 90', icon: 'star', check: () => G.colony.pop >= 4 && (G.morale || 0) >= 90 },
  { id: 'fest', name: '殖民地节', desc: '和居民一起在广场看烟花', icon: 'star', check: () => (G.stats.festivals || 0) > 0 },
  { id: 'photo', name: '摄影师', desc: '在拍照模式中保存一张照片', icon: 'camera', check: () => (G.stats.photos || 0) > 0 },
  { id: 'gather', name: '故乡的光', desc: '夜里，居民们聚在广场上看全息地球', icon: 'planet', check: () => !!G.plazaSeen },
];

let got = {};
try { got = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { got = {}; }
const queue = [];
let t = 0, popT = 0;

export function updateAchievements(dt) {
  t -= dt; popT -= dt;
  if (t <= 0) {
    t = 1;
    for (const a of ACHV) {
      if (got[a.id]) continue;
      let ok = false; try { ok = a.check(); } catch (e) { ok = false; }
      if (ok) { got[a.id] = Date.now(); queue.push(a); try { localStorage.setItem(KEY, JSON.stringify(got)); } catch (e) { /* 忽略 */ } }
    }
  }
  const el = document.getElementById('achv-pop');
  if (popT <= 0 && el.classList.contains('show')) el.classList.remove('show');
  if (popT <= -0.6 && queue.length) {
    const a = queue.shift();
    el.innerHTML = `<div class="ai">${ic(a.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${a.name}</div><div class="d">${a.desc}</div></div>`;
    el.classList.add('show'); popT = 4.5;
    audio.play('achv');
  }
}

export function achievementsHTML() {
  const n = ACHV.filter(a => got[a.id]).length;
  return `<h3>成就 · ${n} / ${ACHV.length}</h3><div class="achv">${ACHV.map(a => `<div class="ach ${got[a.id] ? 'on' : ''}"><div class="ai">${ic(a.icon)}</div><div><div class="an">${a.name}</div><div class="ad">${a.desc}</div></div></div>`).join('')}</div>`;
}
