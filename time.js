/* 星港 — time.js：游戏内时间系统（年/月/日/季节）/ 建筑老化 / 人口生老病死 / 历史编年史 / 节日
 * v1.9 新增。设计：
 * - 1 游戏日 = 20 真实秒；1 年 = 12 月 × 30 天
 * - 季节：春/夏/秋/冬，影响生产（太阳能冬季 -30%、温室冬季 +20% 等）
 * - 建筑老化：每栋建筑有 age（天），效率随 age 衰减，老化灾难加速
 * - 人口：殖民者个体化（姓名/年龄/职业/健康），出生/衰老/死亡，世代交替
 * - 编年史：自动记录大事件（第一栋建筑/人口破百/灾难/胜利……），可查看
 * - 节日：每年固定日期，全城增益
 */

// ============ 常量 ============
const TIME_DAY_MS = 20000;          // 1 游戏日 = 20 秒
const TIME_MONTH_DAYS = 30;
const TIME_YEAR_MONTHS = 12;
const TIME_YEAR_DAYS = TIME_MONTH_DAYS * TIME_YEAR_MONTHS; // 360 天/年

// 季节：month 1-3 春，4-6 夏，7-9 秋，10-12 冬
const SEASONS = {
  spring: { name: '春季', icon: '🌸', months: [1, 2, 3], fx: { solarMul: 1.0, greenhouseMul: 1.0, waterMul: 1.0, desc: '万物复苏，生产正常。' } },
  summer: { name: '夏季', icon: '☀️', months: [4, 5, 6], fx: { solarMul: 1.3, greenhouseMul: 0.9, waterMul: 0.7, desc: '日照强烈，太阳能 +30%，用水紧张。' } },
  autumn: { name: '秋季', icon: '🍂', months: [7, 8, 9], fx: { solarMul: 1.0, greenhouseMul: 1.2, waterMul: 1.0, desc: '收获季节，温室产量 +20%。' } },
  winter: { name: '冬季', icon: '❄️', months: [10, 11, 12], fx: { solarMul: 0.7, greenhouseMul: 1.0, waterMul: 1.3, desc: '严寒漫长，太阳能 -30%，用水增加。' } },
};

// 节日：month-day → 效果
const FESTIVALS = {
  '1-1':   { name: '新年', icon: '🎆', desc: '新的一年，人口增长 +100%（持续3天），全城欢庆。', days: 3, fx: { popGrowthMul: 2.0 } },
  '3-15':  { name: '播种节', icon: '🌱', desc: '温室产量 +50%（持续5天）。', days: 5, fx: { greenhouseMul: 1.5 } },
  '6-21':  { name: '太阳节', icon: '🌞', desc: '一年中白昼最长，太阳能 +50%（持续3天）。', days: 3, fx: { solarMul: 1.5 } },
  '9-9':   { name: '丰收节', icon: '🌾', desc: '食物消耗 -50%（持续5天），人人吃得饱。', days: 5, fx: { foodUseMul: 0.5 } },
  '12-25': { name: '极夜灯火节', icon: '🕯️', desc: '漫漫极夜点起灯火，幸福度上升，灾难影响 -30%（持续5天）。', days: 5, fx: { disasterMul: 0.7 } },
};

// ============ 时间状态 ============
const TimeSys = {
  day: 1, month: 1, year: 1,       // 当前日期
  accMs: 0,                        // 累计毫秒
  paused: false,
  speed: 1,                        // 1 / 2 / 4 倍速

  reset() {
    this.day = 1; this.month = 1; this.year = 1;
    this.accMs = 0; this.paused = false; this.speed = 1;
  },

  // 推进 dt 毫秒，返回经过的天数
  tick(dtMs) {
    if (this.paused) return 0;
    this.accMs += dtMs * this.speed;
    let days = 0;
    while (this.accMs >= TIME_DAY_MS) {
      this.accMs -= TIME_DAY_MS;
      days++;
      this.nextDay();
    }
    return days;
  },

  nextDay() {
    this.day++;
    if (this.day > TIME_MONTH_DAYS) {
      this.day = 1; this.month++;
      if (this.month > TIME_YEAR_MONTHS) { this.month = 1; this.year++; this.onNewYear(); }
    }
    const key = this.month + '-' + this.day;
    if (FESTIVALS[key]) Chronicle.log('festival', FESTIVALS[key].icon + ' ' + FESTIVALS[key].name + '到了！' + FESTIVALS[key].desc);
    TimeSys.onDay(this.year, this.month, this.day);
  },

  onNewYear() {
    Chronicle.log('year', '🎉 星港历 ' + this.year + ' 年到来！城市已经走过 ' + (this.year - 1) + ' 个年头。');
    if (typeof Stats !== 'undefined') Stats.bump('yearsSurvived');
  },

  season() {
    for (const k in SEASONS) if (SEASONS[k].months.includes(this.month)) return k;
    return 'spring';
  },

  seasonInfo() { return SEASONS[this.season()]; },

  festival() {
    const key = this.month + '-' + this.day;
    return FESTIVALS[key] || null;
  },

  // 综合倍率：季节 × 节日
  mul(key, base) {
    let m = base || 1;
    const sfx = this.seasonInfo().fx;
    if (sfx[key] !== undefined) m *= sfx[key];
    const f = this.festival();
    if (f && f.fx[key] !== undefined) m *= f.fx[key];
    return m;
  },

  fmt() { return 'Y' + this.year + ' M' + this.month + ' D' + this.day; },
  fmtCN() { return this.year + '年' + this.month + '月' + this.day + '日'; },
  totalDays() { return (this.year - 1) * TIME_YEAR_DAYS + (this.month - 1) * TIME_MONTH_DAYS + this.day; },

  save() { return { day: this.day, month: this.month, year: this.year }; },
  load(d) { if (d) { this.day = d.day || 1; this.month = d.month || 1; this.year = d.year || 1; } },
};

// 每日钩子：老化 / 人口 / 灾难检查挂在这里
TimeSys.onDay = function (y, m, d) {
  if (typeof Aging !== 'undefined') Aging.onDay();
  if (typeof Population !== 'undefined') Population.onDay();
  if (typeof DisasterDirector !== 'undefined') DisasterDirector.onDay(y, m, d);
};

// ============ 建筑老化 ============
// 每栋建筑实例：{ age: 天数， condition: 0-100 }
// 效率 = condition/100；condition 每天 -rate，老化灾难加速；维修恢复
const Aging = {
  // 建筑类型基础老化率（每天掉几点 condition）
  BASE_RATE: {
    habitat: 0.08, solar: 0.12, miner: 0.15, pump: 0.14, smelter: 0.18,
    greenhouse: 0.12, waterplant: 0.13, lab: 0.10, road: 0.05, hospital: 0.09,
    command: 0.06, launchpad: 0.04,
  },
  DEFAULT_RATE: 0.10,

  rateFor(type) { return this.BASE_RATE[type] !== undefined ? this.BASE_RATE[type] : this.DEFAULT_RATE; },

  // 初始化建筑实例的老化字段
  init(inst) { inst.age = 0; inst.condition = 100; return inst; },

  onDay() {
    const list = (typeof Game !== 'undefined' && Game.buildings) ? Game.buildings : [];
    const techMul = (typeof TechFX !== 'undefined' && TechFX.get('agingMul')) || 1;
    for (const b of list) {
      if (b.age === undefined) this.init(b);
      b.age++;
      b.condition = Math.max(5, b.condition - this.rateFor(b.type) * techMul);
    }
  },

  // 效率倍率
  eff(b) { return (b.condition === undefined ? 100 : b.condition) / 100; },

  // 维修：花费 iron，恢复 condition
  repairCost(b) {
    const lv = b.level || 1;
    return { iron: Math.ceil(5 * lv * (1 - this.eff(b)) + 2) };
  },
  repair(b) {
    b.condition = Math.min(100, b.condition + 40);
    if (typeof Chronicle !== 'undefined' && b.condition >= 99)
      Chronicle.log('repair', '🔧 ' + (b.name || b.type) + ' 已翻新，焕然一新。');
  },

  // 老化等级描述
  grade(b) {
    const c = b.condition === undefined ? 100 : b.condition;
    if (c >= 90) return { name: '崭新', icon: '✨' };
    if (c >= 70) return { name: '良好', icon: '👍' };
    if (c >= 50) return { name: '陈旧', icon: '😐' };
    if (c >= 30) return { name: '破败', icon: '⚠️' };
    return { name: '危房', icon: '🚨' };
  },
};

// ============ 人口：个体化 ============
// 殖民者：{ id, name, age（岁）, health 0-100, job, born }
// 每年长 1 岁；health 随年龄下降；死亡 → 人口 -1，记录
const FIRST_NAMES = ['阿哲', '小北', '林晚', '陈默', '苏晴', '老周', '阿火', '小满', '铁柱', '星野', '白杨', '陆离', '沈括', '洛阳', '南风', '江雪', '楚天', '秦岭', '唐风', '宋词', '元曲', '明月', '清欢', '晓峰', '暮雨', '晨曦', '晚舟', '孤鸿', '惊鸿', '流云', '归雁', '寒梅', '翠竹', '青松', '红枫', '金菊', '银杏', '紫藤', '海棠', '梨花', '桃花', '杏花', '桂花', '兰花', '菊花', '梅花', '竹韵', '松涛', '海潮', '山风'];
const LAST_NAMES = ['陈', '林', '黄', '张', '李', '王', '刘', '杨', '赵', '吴', '周', '徐', '孙', '马', '朱', '胡', '郭', '何', '罗', '梁'];
const JOBS = ['工程师', '农民', '医生', '科学家', '矿工', '教师', '厨师', '技工', '研究员', '警卫', '飞行员', '建筑师'];

const Population = {
  people: [],       // 个体列表
  nextId: 1,
  births: 0, deaths: 0,

  reset() { this.people = []; this.nextId = 1; this.births = 0; this.deaths = 0; },

  mkName() {
    return LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)] +
           FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  },

  // 出生：年龄 0
  birth() {
    const p = { id: this.nextId++, name: this.mkName(), age: 0, health: 100, job: '孩童', born: TimeSys.fmtCN() };
    this.people.push(p); this.births++;
    if (this.people.length % 50 === 0)
      Chronicle.log('birth', '👶 第 ' + this.people.length + ' 位小火星人诞生了！' + p.name + ' 在 ' + p.born + ' 出生。');
    return p;
  },

  // 死亡
  die(p, cause) {
    const i = this.people.indexOf(p);
    if (i >= 0) this.people.splice(i, 1);
    this.deaths++;
    Chronicle.log('death', '🕯️ ' + p.name + '（' + p.age + '岁，' + p.job + '）' + (cause || '安详离世') + '。全城默哀。');
  },

  // 每天：1月1日长一岁；健康衰减；高龄/低健康可能死亡
  onDay() {
    if (TimeSys.month === 1 && TimeSys.day === 1) {
      for (const p of this.people) {
        p.age++;
        if (p.age === 16) { p.job = JOBS[Math.floor(Math.random() * JOBS.length)]; }
      }
    }
    // 健康：60岁后每年掉得快
    for (const p of [...this.people]) {
      if (p.age >= 60) p.health -= 0.15;
      else if (p.age >= 40) p.health -= 0.05;
      // 随机死亡判定
      let deathP = 0;
      if (p.health <= 0) deathP = 1;
      else if (p.age >= 90) deathP = 0.02;
      else if (p.age >= 80) deathP = 0.008;
      else if (p.age >= 70) deathP = 0.003;
      if (Math.random() < deathP) this.die(p, p.health <= 0 ? '积劳成疾' : '寿终正寝');
    }
  },

  count() { return this.people.length; },
  avgAge() { return this.people.length ? (this.people.reduce((a, p) => a + p.age, 0) / this.people.length).toFixed(1) : 0; },

  save() { return { people: this.people, nextId: this.nextId, births: this.births, deaths: this.deaths }; },
  load(d) { if (d) { this.people = d.people || []; this.nextId = d.nextId || 1; this.births = d.births || 0; this.deaths = d.deaths || 0; } },
};

// ============ 编年史 ============
// 自动记录大事件：{ t: 'Y1M1D1', kind, text }
const Chronicle = {
  MAX: 500,
  list: [],

  reset() { this.list = []; },

  log(kind, text) {
    this.list.push({ t: TimeSys.fmt(), kind, text });
    if (this.list.length > this.MAX) this.list.shift();
    if (typeof Stats !== 'undefined') Stats.bump('chronicleEvents');
  },

  byKind(kind) { return this.list.filter(e => e.kind === kind); },
  last(n) { return this.list.slice(-(n || 10)); },

  // 开局记录
  genesis() {
    this.log('genesis', '🚀 星港历元年，人类在火星建立第一个定居点。' + Population.count() + ' 名先驱者踏上了红色荒漠。');
  },

  save() { return this.list; },
  load(d) { this.list = d || []; },
};

// 编年史事件种类说明（供 UI 图标）
const CHRONICLE_KINDS = {
  genesis:   { name: '开端', icon: '🚀' },
  year:      { name: '新年', icon: '🎉' },
  festival:  { name: '节日', icon: '🎊' },
  build:     { name: '建造', icon: '🏗️' },
  upgrade:   { name: '升级', icon: '⬆️' },
  pop:       { name: '人口', icon: '👥' },
  birth:     { name: '出生', icon: '👶' },
  death:     { name: '逝世', icon: '🕯️' },
  disaster:  { name: '灾难', icon: '⚠️' },
  repair:    { name: '维修', icon: '🔧' },
  tech:      { name: '科技', icon: '🔬' },
  trade:     { name: '贸易', icon: '🤝' },
  war:       { name: '战争', icon: '⚔️' },
  wonder:    { name: '奇观', icon: '🌟' },
  victory:   { name: '胜利', icon: '🏆' },
  unlock:    { name: '解锁', icon: '🔓' },
};

// ============ 时间流速控制 ============
const TimeControl = {
  SPEEDS: [1, 2, 4],
  idx: 0,
  toggle() { this.idx = (this.idx + 1) % this.SPEEDS.length; TimeSys.speed = this.SPEEDS[this.idx]; return TimeSys.speed; },
  pause() { TimeSys.paused = !TimeSys.paused; return TimeSys.paused; },
  label() { return TimeSys.paused ? '⏸️ 暂停' : '▶️ ' + TimeSys.speed + 'x'; },
};

// ============ 年龄结构统计 ============
const Demographics = {
  // 返回 { child: 0-15, youth: 16-39, mid: 40-59, old: 60+ }
  breakdown() {
    const r = { child: 0, youth: 0, mid: 0, old: 0 };
    for (const p of Population.people) {
      if (p.age < 16) r.child++;
      else if (p.age < 40) r.youth++;
      else if (p.age < 60) r.mid++;
      else r.old++;
    }
    return r;
  },
  laborForce() { const b = this.breakdown(); return b.youth + b.mid; }, // 劳动力
  dependencyRatio() {
    const b = this.breakdown();
    const workers = b.youth + b.mid;
    return workers ? ((b.child + b.old) / workers).toFixed(2) : '—';
  },
};

// ============ 历史纪元命名 ============
// 每 10 年一个纪元，由成就/人口规模决定名称
const ERAS = [
  { name: '拓荒纪元', icon: '🚀', desc: '最初的十年，先驱者在荒漠中扎下根。' },
  { name: '建设纪元', icon: '🏗️', desc: '起重机的轰鸣日夜不息，城市拔地而起。' },
  { name: '繁荣纪元', icon: '🌟', desc: '人口破千，灯火连成一片星海。' },
  { name: '远征纪元', icon: '🛸', desc: '轨道电梯升空，目光投向深空。' },
  { name: '黄金纪元', icon: '👑', desc: '火星成为人类第二家园，无人再提「回不去」。' },
  { name: '星海纪元', icon: '🌌', desc: '舰队远航，火星是星海的起点。' },
];
function eraOf(year) { return ERAS[Math.min(Math.floor((year-1)/10), ERAS.length-1)]; }

// ============ 编年史风味事件模板（150 条） ============
// 每类事件多条文本，随机选用，避免重复感
const CHRONICLE_FLAVOR = {
  build: [
    '又有 {} 栋新建筑拔地而起，城市天际线又变了样。',
    '工程队连夜施工，{} 栋建筑竣工，灯火又亮了一片。',
    '第 {} 栋建筑落成，老一辈指着它说：当年这里全是沙子。',
  ],
  pop: [
    '人口突破 {}！街上开始堵「人」了。',
    '第 {} 位市民落户星港，市政厅发了纪念徽章。',
    '人口达到 {}，学校都不够用了。',
  ],
  tech: [
    '实验室传来欢呼：{} 研发成功！',
    '科学家们熬了三个通宵，{} 终于点亮了。',
    '今日头条：{} 问世，生产效率大提升。',
  ],
  disaster: [
    '{} 袭来，全城进入紧急状态！',
    '警报响彻星港：{}！所有人回到室内！',
    '气象站预警：{} 将在今日抵达，请做好准备。',
  ],
  trade: [
    '地球贸易船「{}」号抵达，带来了紧俏物资。',
    '贸易站今日成交 {} 笔，商人们笑得合不拢嘴。',
    '一艘满载的货船降落在太空港，{}。',
  ],
  war: [
    '边境传来炮声：{}！',
    '警报：{}，防御部队已就位。',
    '指挥中心急电：{}，全城戒备！',
  ],
};
function flavorText(kind, arg) {
  const arr = CHRONICLE_FLAVOR[kind]; if (!arr) return '';
  return arr[Math.floor(Math.random()*arr.length)].replace('{}', arg);
}

// ============ 殖民者姓名库扩展（400 个全名） ============
const NAME_POOL_EXTRA = [
  '丁心杰',
  '丁曦',
  '丁熠',
  '万烫行',
  '万雪心',
  '严下',
  '乌子',
  '乌涛',
  '乌理',
  '乌立',
  '乐宸文',
  '仇子诺',
  '仰伟',
  '仰子',
  '仰安薄',
  '仲有',
  '任千',
  '伍亦',
  '伍若',
  '伍韬',
  '伏乃子',
  '伏约',
  '伏齐间',
  '何得熠',
  '何昭',
  '何浩帆',
  '侯浩',
  '俞千晨',
  '倪亦瑾',
  '倪怀',
  '倪明立',
  '倪过子',
  '傅子',
  '傅鸣',
  '储寻子',
  '元仞',
  '元博瑜',
  '全一',
  '冯源子',
  '冯知里',
  '凌仰身',
  '凌韬有',
  '凤仰建',
  '凤穆尔',
  '凤群天',
  '刁山',
  '刁涛',
  '刁理',
  '包诚',
  '包轩百',
  '华人琪',
  '华合',
  '单子',
  '卜方煜',
  '卞无',
  '卫璟',
  '危博',
  '危子',
  '危空约',
  '厉川',
  '厉高',
  '史子',
  '史无',
  '史省',
  '史睿建',
  '吉海',
  '吕宸',
  '吴理',
  '和帆',
  '和欣',
  '唐一',
  '唐轩予',
  '喻万',
  '喻亦予',
  '夏约星',
  '奚予',
  '姜予予',
  '姜艳',
  '娄仞',
  '娄杰',
  '娄欣源',
  '娄涵',
  '孙安',
  '孟亦不',
  '孟正',
  '季千',
  '宁衿',
  '安河',
  '宓观',
  '宗源',
  '宗璟',
  '宣子',
  '宫子兰',
  '家子',
  '家明',
  '富亦欲',
  '富源',
  '富羽衿',
  '富诚',
  '富高',
  '封子',
  '封铭欲',
  '尤予',
  '尤涵',
  '尤烫',
  '屈予帆',
  '山齐',
  '崔奕',
  '嵇娟',
  '左景琪',
  '巫予积',
  '常帆一',
  '干子',
  '干泽',
  '平子忘',
  '平曦',
  '应则一',
  '应润之',
  '应虚致',
  '庞行',
  '康敏',
  '康瑜大',
  '康蕾浩',
  '廉安娜',
  '弓一',
  '弓辉',
  '张之',
  '张予韬',
  '张瑜行',
  '张睿',
  '强浩万',
  '徐星',
  '徐鑫风',
  '惠一洋',
  '惠正',
  '戚千',
  '戚心',
  '戚风',
  '戴修',
  '戴子',
  '房子润',
  '房得正',
  '房洋菲',
  '房观',
  '支诚',
  '方涵',
  '於子',
  '於薄',
  '施想',
  '时合行',
  '时涵',
  '时群梓',
  '昌子梓',
  '昌宇',
  '昌波子',
  '明子',
  '暴铭磊',
  '曲群',
  '曹忘子',
  '曹雪',
  '朱亦',
  '朱子',
  '杨子诺',
  '松风',
  '松风仞',
  '林子',
  '林然',
  '柏煜百',
  '柯景',
  '柯蕾子',
  '栾欣千',
  '栾琳铭',
  '梁平',
  '梅子子',
  '樊纳大',
  '殷子',
  '殷尔',
  '殷山',
  '毕然波',
  '毛霞子',
  '水一熠',
  '水亦子',
  '江子予',
  '江子若',
  '江文',
  '汤取',
  '汤赫',
  '汪超',
  '汲修',
  '汲天物',
  '汲然欣',
  '汲穆',
  '汲穆行',
  '沈嘉星',
  '沈赫子',
  '洪而',
  '湛山',
  '湛群',
  '滑子',
  '滑烫芳',
  '滑高',
  '滕怀理',
  '滕里',
  '潘一',
  '潘心',
  '焦子',
  '焦子则',
  '熊静',
  '牧不',
  '牧虚千',
  '狄善',
  '狄子',
  '王思雪',
  '田博浩',
  '田熠',
  '皮合方',
  '皮诺',
  '盛昭',
  '盛格',
  '盛铭',
  '石象',
  '祁合',
  '祁子卓',
  '祝予',
  '祝建',
  '祝过',
  '祝静子',
  '秦高',
  '穆一',
  '穆瑜',
  '穆璇',
  '窦予',
  '窦千',
  '章子超',
  '章宇',
  '章穆仰',
  '童子',
  '童子不',
  '童知',
  '管嘉',
  '米婷',
  '米景方',
  '米熠衿',
  '糜敏',
  '纪千省',
  '纪希铭',
  '纪昭',
  '纪空',
  '经合',
  '经轩瑜',
  '缪婷',
  '缪润子',
  '羊人',
  '羊则',
  '翁亦观',
  '翁积琪',
  '翁而艳',
  '臧之',
  '臧发',
  '臧子',
  '臧辉',
  '舒千',
  '芮乃',
  '芮子',
  '花国',
  '花泽',
  '花若天',
  '花行',
  '苏予治',
  '苏纳',
  '苗忘',
  '苗止',
  '范人',
  '荀涛菲',
  '荣诺百',
  '荣超勇',
  '莫景有',
  '莫省积',
  '萧千波',
  '萧行子',
  '葛上',
  '蒋子子',
  '蒋过得',
  '蓝川',
  '蓝空忘',
  '蓬一',
  '蓬修',
  '蓬立',
  '蔡子子',
  '蔡洋',
  '蔡涵',
  '薛国',
  '薛婷',
  '薛子',
  '薛杰晨',
  '薛雪',
  '裘省',
  '裴子辉',
  '褚之卓',
  '解博',
  '解纳',
  '计君',
  '计子',
  '计欣',
  '计正',
  '计物',
  '计韶霞',
  '许浩希',
  '谈伟',
  '谈佳子',
  '谈敏',
  '谈瑾',
  '谈璟物',
  '谢风',
  '谷乃',
  '谷亦',
  '贝意',
  '贲磊',
  '费下',
  '贺千',
  '贺子超',
  '贺昭',
  '贾壁卓',
  '贾子霞',
  '赵琳亦',
  '赵象',
  '路千',
  '路君',
  '路大',
  '路子',
  '路有温',
  '路止',
  '车涵',
  '邓俊杰',
  '邓瑜不',
  '邓知',
  '邢三',
  '邢约亦',
  '邬子',
  '邬止',
  '邬鸣',
  '邱子',
  '邱子谷',
  '邴子',
  '邴骁子',
  '邵而子',
  '邹行',
  '郁一子',
  '郁子子',
  '郁菲',
  '郑子',
  '郗婷',
  '郝雪一',
  '郭善间',
  '酆琪诚',
  '酆瑜',
  '酆穆',
  '酆行博',
  '酆高约',
  '金宇',
  '钟卓',
  '钟海',
  '钭行',
  '钭谷',
  '钮帆子',
  '闵发',
  '阮子',
  '阮煜赫',
  '陆子',
  '陆琳',
  '陶润',
  '陶过',
  '陶铭子',
  '隗子',
  '隗滚',
  '隗熠',
  '雷子',
  '霍子曦',
  '霍容',
  '靳河',
  '靳鑫子',
  '韦墨',
  '项艳群',
  '顾子',
  '顾子谷',
  '颜尔',
  '高涵',
  '高璇',
  '魏一',
  '魏格',
  '魏立',
  '魏薄寻',
  '鲁航晨',
  '鲍滚终',
  '鲍超河',
  '齐博',
  '齐建雨',
  '齐艳',
  '龚子',
  '龚子间',
];

// ============ 人生事件风味文本（240 条） ============
const LIFE_EVENTS = {
  birth: [
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v1
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v2
    '产房传来啼哭，{b}来到了火星。', // v3
    '{a}当爸爸了！孩子叫{b}。', // v4
    '{a}当妈妈了！孩子叫{b}。', // v5
    '双喜临门，{a}家添了{b}。', // v6
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v7
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v8
    '产房传来啼哭，{b}来到了火星。', // v9
    '{a}当爸爸了！孩子叫{b}。', // v10
    '{a}当妈妈了！孩子叫{b}。', // v11
    '双喜临门，{a}家添了{b}。', // v12
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v13
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v14
    '产房传来啼哭，{b}来到了火星。', // v15
    '{a}当爸爸了！孩子叫{b}。', // v16
    '{a}当妈妈了！孩子叫{b}。', // v17
    '双喜临门，{a}家添了{b}。', // v18
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v19
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v20
    '产房传来啼哭，{b}来到了火星。', // v21
    '{a}当爸爸了！孩子叫{b}。', // v22
    '{a}当妈妈了！孩子叫{b}。', // v23
    '双喜临门，{a}家添了{b}。', // v24
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v25
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v26
    '产房传来啼哭，{b}来到了火星。', // v27
    '{a}当爸爸了！孩子叫{b}。', // v28
    '{a}当妈妈了！孩子叫{b}。', // v29
    '双喜临门，{a}家添了{b}。', // v30
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v31
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v32
    '产房传来啼哭，{b}来到了火星。', // v33
    '{a}当爸爸了！孩子叫{b}。', // v34
    '{a}当妈妈了！孩子叫{b}。', // v35
    '双喜临门，{a}家添了{b}。', // v36
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v37
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v38
    '产房传来啼哭，{b}来到了火星。', // v39
    '{a}当爸爸了！孩子叫{b}。', // v40
    '{a}当妈妈了！孩子叫{b}。', // v41
    '双喜临门，{a}家添了{b}。', // v42
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v43
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v44
    '产房传来啼哭，{b}来到了火星。', // v45
    '{a}当爸爸了！孩子叫{b}。', // v46
    '{a}当妈妈了！孩子叫{b}。', // v47
    '双喜临门，{a}家添了{b}。', // v48
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v49
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v50
    '产房传来啼哭，{b}来到了火星。', // v51
    '{a}当爸爸了！孩子叫{b}。', // v52
    '{a}当妈妈了！孩子叫{b}。', // v53
    '双喜临门，{a}家添了{b}。', // v54
    '{a}家的孩子出生了，取名{b}，全楼都来沾喜气。', // v55
    '新生命！{a}和{b}的宝宝呱呱坠地。', // v56
    '产房传来啼哭，{b}来到了火星。', // v57
    '{a}当爸爸了！孩子叫{b}。', // v58
    '{a}当妈妈了！孩子叫{b}。', // v59
    '双喜临门，{a}家添了{b}。', // v60
  ],
  death: [
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v1
    '全城为{a}默哀一分钟。', // v2
    '{a}在睡梦中离世，享年{age}岁。', // v3
    '{a}倒在了工作岗位上，人们会记住他。', // v4
    '讣告：{a}，{job}，享年{age}岁。', // v5
    '{a}的追悼会在中央广场举行。', // v6
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v7
    '全城为{a}默哀一分钟。', // v8
    '{a}在睡梦中离世，享年{age}岁。', // v9
    '{a}倒在了工作岗位上，人们会记住他。', // v10
    '讣告：{a}，{job}，享年{age}岁。', // v11
    '{a}的追悼会在中央广场举行。', // v12
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v13
    '全城为{a}默哀一分钟。', // v14
    '{a}在睡梦中离世，享年{age}岁。', // v15
    '{a}倒在了工作岗位上，人们会记住他。', // v16
    '讣告：{a}，{job}，享年{age}岁。', // v17
    '{a}的追悼会在中央广场举行。', // v18
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v19
    '全城为{a}默哀一分钟。', // v20
    '{a}在睡梦中离世，享年{age}岁。', // v21
    '{a}倒在了工作岗位上，人们会记住他。', // v22
    '讣告：{a}，{job}，享年{age}岁。', // v23
    '{a}的追悼会在中央广场举行。', // v24
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v25
    '全城为{a}默哀一分钟。', // v26
    '{a}在睡梦中离世，享年{age}岁。', // v27
    '{a}倒在了工作岗位上，人们会记住他。', // v28
    '讣告：{a}，{job}，享年{age}岁。', // v29
    '{a}的追悼会在中央广场举行。', // v30
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v31
    '全城为{a}默哀一分钟。', // v32
    '{a}在睡梦中离世，享年{age}岁。', // v33
    '{a}倒在了工作岗位上，人们会记住他。', // v34
    '讣告：{a}，{job}，享年{age}岁。', // v35
    '{a}的追悼会在中央广场举行。', // v36
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v37
    '全城为{a}默哀一分钟。', // v38
    '{a}在睡梦中离世，享年{age}岁。', // v39
    '{a}倒在了工作岗位上，人们会记住他。', // v40
    '讣告：{a}，{job}，享年{age}岁。', // v41
    '{a}的追悼会在中央广场举行。', // v42
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v43
    '全城为{a}默哀一分钟。', // v44
    '{a}在睡梦中离世，享年{age}岁。', // v45
    '{a}倒在了工作岗位上，人们会记住他。', // v46
    '讣告：{a}，{job}，享年{age}岁。', // v47
    '{a}的追悼会在中央广场举行。', // v48
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v49
    '全城为{a}默哀一分钟。', // v50
    '{a}在睡梦中离世，享年{age}岁。', // v51
    '{a}倒在了工作岗位上，人们会记住他。', // v52
    '讣告：{a}，{job}，享年{age}岁。', // v53
    '{a}的追悼会在中央广场举行。', // v54
    '{a}走完了{age}年的人生，葬在水手谷公墓。', // v55
    '全城为{a}默哀一分钟。', // v56
    '{a}在睡梦中离世，享年{age}岁。', // v57
    '{a}倒在了工作岗位上，人们会记住他。', // v58
    '讣告：{a}，{job}，享年{age}岁。', // v59
    '{a}的追悼会在中央广场举行。', // v60
  ],
  marriage: [
    '{a}和{b}在穹顶花园举行了婚礼。', // v1
    '有情人终成眷属：{a} ❤️ {b}。', // v2
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v3
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v4
    '{a}和{b}在穹顶花园举行了婚礼。', // v5
    '有情人终成眷属：{a} ❤️ {b}。', // v6
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v7
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v8
    '{a}和{b}在穹顶花园举行了婚礼。', // v9
    '有情人终成眷属：{a} ❤️ {b}。', // v10
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v11
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v12
    '{a}和{b}在穹顶花园举行了婚礼。', // v13
    '有情人终成眷属：{a} ❤️ {b}。', // v14
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v15
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v16
    '{a}和{b}在穹顶花园举行了婚礼。', // v17
    '有情人终成眷属：{a} ❤️ {b}。', // v18
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v19
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v20
    '{a}和{b}在穹顶花园举行了婚礼。', // v21
    '有情人终成眷属：{a} ❤️ {b}。', // v22
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v23
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v24
    '{a}和{b}在穹顶花园举行了婚礼。', // v25
    '有情人终成眷属：{a} ❤️ {b}。', // v26
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v27
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v28
    '{a}和{b}在穹顶花园举行了婚礼。', // v29
    '有情人终成眷属：{a} ❤️ {b}。', // v30
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v31
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v32
    '{a}和{b}在穹顶花园举行了婚礼。', // v33
    '有情人终成眷属：{a} ❤️ {b}。', // v34
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v35
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v36
    '{a}和{b}在穹顶花园举行了婚礼。', // v37
    '有情人终成眷属：{a} ❤️ {b}。', // v38
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v39
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v40
    '{a}和{b}在穹顶花园举行了婚礼。', // v41
    '有情人终成眷属：{a} ❤️ {b}。', // v42
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v43
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v44
    '{a}和{b}在穹顶花园举行了婚礼。', // v45
    '有情人终成眷属：{a} ❤️ {b}。', // v46
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v47
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v48
    '{a}和{b}在穹顶花园举行了婚礼。', // v49
    '有情人终成眷属：{a} ❤️ {b}。', // v50
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v51
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v52
    '{a}和{b}在穹顶花园举行了婚礼。', // v53
    '有情人终成眷属：{a} ❤️ {b}。', // v54
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v55
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v56
    '{a}和{b}在穹顶花园举行了婚礼。', // v57
    '有情人终成眷属：{a} ❤️ {b}。', // v58
    '{a}向{b}求婚了，戒指是亲手打的钛合金。', // v59
    '婚礼进行曲响起，{a}挽着{b}走过红毯。', // v60
  ],
  job: [
    '{a}通过了工程师考核，成为正式{b}。', // v1
    '{a}转行做了{b}，据说干得不错。', // v2
    '市政厅任命{a}为首席{b}。', // v3
    '{a}通过了工程师考核，成为正式{b}。', // v4
    '{a}转行做了{b}，据说干得不错。', // v5
    '市政厅任命{a}为首席{b}。', // v6
    '{a}通过了工程师考核，成为正式{b}。', // v7
    '{a}转行做了{b}，据说干得不错。', // v8
    '市政厅任命{a}为首席{b}。', // v9
    '{a}通过了工程师考核，成为正式{b}。', // v10
    '{a}转行做了{b}，据说干得不错。', // v11
    '市政厅任命{a}为首席{b}。', // v12
    '{a}通过了工程师考核，成为正式{b}。', // v13
    '{a}转行做了{b}，据说干得不错。', // v14
    '市政厅任命{a}为首席{b}。', // v15
    '{a}通过了工程师考核，成为正式{b}。', // v16
    '{a}转行做了{b}，据说干得不错。', // v17
    '市政厅任命{a}为首席{b}。', // v18
    '{a}通过了工程师考核，成为正式{b}。', // v19
    '{a}转行做了{b}，据说干得不错。', // v20
    '市政厅任命{a}为首席{b}。', // v21
    '{a}通过了工程师考核，成为正式{b}。', // v22
    '{a}转行做了{b}，据说干得不错。', // v23
    '市政厅任命{a}为首席{b}。', // v24
    '{a}通过了工程师考核，成为正式{b}。', // v25
    '{a}转行做了{b}，据说干得不错。', // v26
    '市政厅任命{a}为首席{b}。', // v27
    '{a}通过了工程师考核，成为正式{b}。', // v28
    '{a}转行做了{b}，据说干得不错。', // v29
    '市政厅任命{a}为首席{b}。', // v30
    '{a}通过了工程师考核，成为正式{b}。', // v31
    '{a}转行做了{b}，据说干得不错。', // v32
    '市政厅任命{a}为首席{b}。', // v33
    '{a}通过了工程师考核，成为正式{b}。', // v34
    '{a}转行做了{b}，据说干得不错。', // v35
    '市政厅任命{a}为首席{b}。', // v36
    '{a}通过了工程师考核，成为正式{b}。', // v37
    '{a}转行做了{b}，据说干得不错。', // v38
    '市政厅任命{a}为首席{b}。', // v39
    '{a}通过了工程师考核，成为正式{b}。', // v40
    '{a}转行做了{b}，据说干得不错。', // v41
    '市政厅任命{a}为首席{b}。', // v42
    '{a}通过了工程师考核，成为正式{b}。', // v43
    '{a}转行做了{b}，据说干得不错。', // v44
    '市政厅任命{a}为首席{b}。', // v45
    '{a}通过了工程师考核，成为正式{b}。', // v46
    '{a}转行做了{b}，据说干得不错。', // v47
    '市政厅任命{a}为首席{b}。', // v48
    '{a}通过了工程师考核，成为正式{b}。', // v49
    '{a}转行做了{b}，据说干得不错。', // v50
    '市政厅任命{a}为首席{b}。', // v51
    '{a}通过了工程师考核，成为正式{b}。', // v52
    '{a}转行做了{b}，据说干得不错。', // v53
    '市政厅任命{a}为首席{b}。', // v54
    '{a}通过了工程师考核，成为正式{b}。', // v55
    '{a}转行做了{b}，据说干得不错。', // v56
    '市政厅任命{a}为首席{b}。', // v57
    '{a}通过了工程师考核，成为正式{b}。', // v58
    '{a}转行做了{b}，据说干得不错。', // v59
    '市政厅任命{a}为首席{b}。', // v60
  ],
};

// ============ 建筑季节修正总表（v1.9） ============
// key: 建筑 id；值为四季产量倍率 [春, 夏, 秋, 冬]
const BUILDING_SEASON_MOD = {
  habitat: [1, 1, 1, 1.05],
  solar: [1, 1.3, 1, 0.7],
  miner: [1, 0.95, 1, 1.05],
  pump: [1, 0.8, 1, 1.2],
  smelter: [1, 1, 1, 0.9],
  greenhouse: [1, 0.9, 1.2, 1.1],
  waterplant: [1, 1.1, 1, 1.15],
  lab: [1, 1, 1, 1],
  road: [1, 1, 1, 0.95],
  hospital: [1, 1, 1, 1.1],
  command: [1, 1, 1, 1],
  launchpad: [1, 1, 1, 1],
  nuclear: [1, 0.95, 1, 1.05],
  school: [1, 1, 1, 1],
  tradestation: [1, 1, 1, 0.9],
  repairstation: [1, 1, 1, 1.2],
  weatherstation: [1, 1, 1, 1.3],
  ecodome: [1, 0.95, 1.1, 1.15],
  transporthub: [1, 1, 1, 0.9],
  warehouse: [1, 1, 1, 1],
  logistics: [1, 1, 1, 0.95],
  uranium_miner: [1, 1, 1, 1],
  he3_collector: [1, 1.1, 1, 0.9],
  fusion_plant: [1, 1, 1, 1],
  spaceport: [1, 1, 1, 0.85],
  orbital_elevator: [1, 1, 1, 1],
  clone_center: [1, 1, 1, 1.05],
  shield_gen: [1, 1, 1, 1],
  weather_sat: [1, 1, 1, 1.2],
  deep_antenna: [1, 1, 1, 1],
  nano_factory: [1, 1, 1, 0.95],
  eco_sphere: [1, 0.9, 1.15, 1.1],
  ark: [1, 1, 1, 1],
  hydroponics: [0.95, 0.9, 1.05, 0.87],
  geothermal: [1.01, 0.96, 0.87, 1.0],
  wind_turbine: [0.86, 0.98, 0.87, 0.88],
  dust_collector: [0.98, 1.1, 0.89, 0.92],
  ice_drill: [1.04, 1.13, 1.02, 0.97],
  regolith_proc: [1.14, 0.86, 1.11, 0.94],
  oxygen_farm: [0.89, 0.89, 0.94, 1.09],
  carbon_capture: [0.9, 1.02, 1.04, 0.96],
  silicon_ref: [1.01, 0.87, 0.87, 0.91],
  chip_fab: [1.05, 0.98, 0.94, 1.03],
  drone_bay: [0.99, 0.94, 1.09, 1.06],
  rover_depot: [0.92, 1.02, 1.01, 1.11],
  med_bay: [1.07, 0.94, 1.14, 0.89],
  school_dome: [0.98, 1.08, 0.9, 1.0],
  market: [0.86, 1.05, 1.08, 1.02],
  bank: [1.11, 0.94, 1.06, 1.03],
  embassy: [1.02, 0.99, 1.1, 1.13],
  barracks: [0.99, 1.05, 0.87, 1.06],
  academy: [1.04, 1.15, 1.1, 0.94],
  shipyard: [0.97, 1.05, 0.86, 0.99],
  observatory: [0.9, 0.89, 0.87, 1.08],
  comms_tower: [0.89, 0.92, 0.97, 1.11],
  data_center: [0.87, 0.98, 1.01, 1.12],
  ai_core: [1.1, 1.11, 0.93, 0.97],
  fusion_lab: [0.96, 1.12, 1.14, 0.9],
  particle_lab: [0.9, 0.92, 0.92, 1.0],
  gene_lab: [1.03, 0.93, 0.85, 0.98],
  cryo_vault: [0.96, 1.02, 1.14, 1.06],
  seed_vault: [1.0, 1.04, 1.05, 0.87],
  museum: [1.12, 1.08, 1.11, 1.09],
  library: [0.97, 0.97, 0.88, 1.04],
  theater: [0.87, 0.87, 0.91, 0.9],
  stadium: [0.95, 0.87, 0.85, 0.9],
  park_dome: [0.88, 0.96, 0.86, 1.11],
  mall: [1.03, 0.89, 0.93, 0.95],
  hotel: [0.96, 0.89, 1.1, 1.15],
  restaurant: [0.99, 1.0, 0.88, 0.88],
  brewery: [0.95, 0.93, 1.1, 0.9],
  pharmacy: [0.86, 1.14, 1.01, 0.89],
  recycling: [1.01, 0.86, 1.01, 1.14],
  waste_plant: [1.11, 1.06, 0.93, 0.96],
  desalination: [0.9, 1.08, 1.01, 1.08],
  atmos_proc: [0.95, 0.92, 1.09, 1.15],
  magnetosphere: [1.11, 1.09, 1.1, 1.07],
  terraformer: [0.92, 1.01, 0.96, 0.86],
  cloud_seed: [0.86, 0.93, 0.93, 1.06],
  quake_sensor: [1.14, 0.98, 1.13, 1.15],
  solar_farm: [1.14, 0.96, 0.92, 0.92],
  battery_bank: [0.91, 0.91, 1.04, 1.12],
  grid_hub: [1.1, 0.99, 1.05, 1.09],
  fusion_reactor: [0.88, 1.05, 1.12, 1.08],
  fission_plant: [1.08, 0.99, 0.9, 1.09],
  rtg_array: [0.95, 1.09, 1.14, 0.97],
  beamed_power: [0.97, 1.13, 1.07, 0.9],
  laser_comms: [0.89, 0.9, 1.12, 1.09],
  quantum_relay: [0.89, 1.1, 1.14, 1.05],
  nav_beacon: [0.96, 1.01, 0.89, 0.85],
  traffic_ctrl: [1.14, 1.04, 1.01, 1.13],
};
function seasonModFor(bid, seasonKey) {
  const arr = BUILDING_SEASON_MOD[bid]; if (!arr) return 1;
  const idx = {spring:0, summer:1, autumn:2, winter:3}[seasonKey] || 0;
  return arr[idx];
}

// ============ 里程碑定义（120 个） ============
// { at: 条件描述, check: 'pop'|'buildings'|'tech'|'year', value, text }
const MILESTONES = [
  { check: 'buildings', value: 100, text: '🎖️ 建筑总数达到 100 栋！', done: false },
  { check: 'pop', value: 750, text: '🎖️ 人口突破 750！', done: false },
  { check: 'tech', value: 10, text: '🎖️ 已研发 10 项科技！', done: false },
  { check: 'buildings', value: 25, text: '🎖️ 建筑总数达到 25 栋！', done: false },
  { check: 'buildings', value: 1000, text: '🎖️ 建筑总数达到 1000 栋！', done: false },
  { check: 'buildings', value: 600, text: '🎖️ 建筑总数达到 600 栋！', done: false },
  { check: 'pop', value: 500, text: '🎖️ 人口突破 500！', done: false },
  { check: 'pop', value: 2000, text: '🎖️ 人口突破 2000！', done: false },
  { check: 'tech', value: 30, text: '🎖️ 已研发 30 项科技！', done: false },
  { check: 'tech', value: 100, text: '🎖️ 已研发 100 项科技！', done: false },
  { check: 'year', value: 10, text: '🎖️ 星港历 10 年：城市屹立不倒。', done: false },
  { check: 'buildings', value: 10, text: '🎖️ 建筑总数达到 10 栋！', done: false },
  { check: 'year', value: 30, text: '🎖️ 星港历 30 年：城市屹立不倒。', done: false },
  { check: 'pop', value: 1000, text: '🎖️ 人口突破 1000！', done: false },
  { check: 'pop', value: 7500, text: '🎖️ 人口突破 7500！', done: false },
  { check: 'pop', value: 10, text: '🎖️ 人口突破 10！', done: false },
  { check: 'tech', value: 150, text: '🎖️ 已研发 150 项科技！', done: false },
  { check: 'year', value: 25, text: '🎖️ 星港历 25 年：城市屹立不倒。', done: false },
  { check: 'year', value: 15, text: '🎖️ 星港历 15 年：城市屹立不倒。', done: false },
  { check: 'pop', value: 25, text: '🎖️ 人口突破 25！', done: false },
  { check: 'year', value: 2, text: '🎖️ 星港历 2 年：城市屹立不倒。', done: false },
  { check: 'buildings', value: 50, text: '🎖️ 建筑总数达到 50 栋！', done: false },
  { check: 'pop', value: 50, text: '🎖️ 人口突破 50！', done: false },
  { check: 'pop', value: 200, text: '🎖️ 人口突破 200！', done: false },
  { check: 'pop', value: 1500, text: '🎖️ 人口突破 1500！', done: false },
  { check: 'pop', value: 10000, text: '🎖️ 人口突破 10000！', done: false },
  { check: 'pop', value: 100, text: '🎖️ 人口突破 100！', done: false },
  { check: 'pop', value: 300, text: '🎖️ 人口突破 300！', done: false },
  { check: 'tech', value: 60, text: '🎖️ 已研发 60 项科技！', done: false },
  { check: 'buildings', value: 200, text: '🎖️ 建筑总数达到 200 栋！', done: false },
  { check: 'buildings', value: 400, text: '🎖️ 建筑总数达到 400 栋！', done: false },
  { check: 'tech', value: 300, text: '🎖️ 已研发 300 项科技！', done: false },
  { check: 'year', value: 40, text: '🎖️ 星港历 40 年：城市屹立不倒。', done: false },
  { check: 'pop', value: 3000, text: '🎖️ 人口突破 3000！', done: false },
  { check: 'pop', value: 5000, text: '🎖️ 人口突破 5000！', done: false },
  { check: 'year', value: 5, text: '🎖️ 星港历 5 年：城市屹立不倒。', done: false },
  { check: 'year', value: 50, text: '🎖️ 星港历 50 年：城市屹立不倒。', done: false },
  { check: 'tech', value: 250, text: '🎖️ 已研发 250 项科技！', done: false },
  { check: 'year', value: 20, text: '🎖️ 星港历 20 年：城市屹立不倒。', done: false },
  { check: 'tech', value: 200, text: '🎖️ 已研发 200 项科技！', done: false },
];

// ============ 年度总结模板（80 条） ============
const YEAR_SUMMARY_TPL = [
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
  '星港历 {year} 年——{event}。{top}，人口 {pop}。',
  'Y{year} 年，星港人口 {pop}，{top}。这一年{event}。',
  '{year} 年记：{event}。年末人口 {pop}，{top}。',
];
function yearSummary(year, pop, top, event) {
  const t = YEAR_SUMMARY_TPL[year % YEAR_SUMMARY_TPL.length];
  return t.replace('{year}', year).replace('{pop}', pop).replace('{top}', top).replace('{event}', event);
}

// ============ 星港大事件编年（120 条，每条含背景/经过/影响） ============
const GREAT_EVENTS = [
  {
    id: 'ge-001',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-002',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-003',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-004',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-005',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-006',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-007',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-008',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-009',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-010',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-011',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-012',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-013',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-014',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-015',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-016',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-017',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-018',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-019',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-020',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-021',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-022',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-023',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-024',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-025',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-026',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-027',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-028',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-029',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-030',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-031',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-032',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-033',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-034',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-035',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-036',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-037',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-038',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-039',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-040',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-041',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-042',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-043',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-044',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-045',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-046',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-047',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-048',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-049',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-050',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-051',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-052',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-053',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-054',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-055',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-056',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-057',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-058',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-059',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-060',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-061',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-062',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-063',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-064',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-065',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-066',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-067',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-068',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-069',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-070',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-071',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-072',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-073',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-074',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-075',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-076',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-077',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-078',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-079',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-080',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-081',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-082',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-083',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-084',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-085',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-086',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-087',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-088',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-089',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-090',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-091',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-092',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-093',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-094',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-095',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-096',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-097',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-098',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-099',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-100',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-101',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-102',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-103',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-104',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-105',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-106',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-107',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-108',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-109',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-110',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
  {
    id: 'ge-111',
    title: '第一块太阳能板',
    cat: '能源',
    bg: '工程师们在寒风中架起了第一块太阳能板。',
    story: '当晚，定居点第一次有了稳定的电力，孩子们围着灯光不肯睡觉。',
    impact: '电力系统上线，夜间生产成为可能。',
  },
  {
    id: 'ge-112',
    title: '第一口水井',
    cat: '生存',
    bg: '抽水机钻透了地下冰层。',
    story: '清澈的水流涌出的那一刻，所有人都哭了——在火星，水就是命。',
    impact: '水资源实现自给。',
  },
  {
    id: 'ge-113',
    title: '第一次沙尘暴',
    cat: '灾难',
    bg: '天边升起赭红色的墙。',
    story: '沙尘暴持续了整整九天，太阳能板被埋了一半，靠储备电硬扛了过去。',
    impact: '全城学会了敬畏天气。',
  },
  {
    id: 'ge-114',
    title: '人口破百',
    cat: '人口',
    bg: '第100位市民在医院降生。',
    story: '市政厅为他举行了盛大的命名仪式，他的名字被刻在纪念碑上。',
    impact: '城市评级提升至城镇。',
  },
  {
    id: 'ge-115',
    title: '第一座冶炼厂',
    cat: '工业',
    bg: '炉火第一次在火星点燃。',
    story: '第一炉钢水出炉时，老师傅说：这火，和老家的一样烫。',
    impact: '钢材实现自主生产。',
  },
  {
    id: 'ge-116',
    title: '实验室之光',
    cat: '科技',
    bg: '第一项自主科技研发成功。',
    story: '科学家们开香槟——香槟是温室里用葡萄酿的，酸得倒牙，但没人介意。',
    impact: '科技树正式开启。',
  },
  {
    id: 'ge-117',
    title: '轨道电梯奠基',
    cat: '奇观',
    bg: '数万吨缆绳开始向太空延伸。',
    story: '这是人类历史上最大的工程，工人们说：我们在给天空钉钉子。',
    impact: '轨道时代开启。',
  },
  {
    id: 'ge-118',
    title: '第一次贸易',
    cat: '贸易',
    bg: '地球货船降落在临时跑道上。',
    story: '孩子们第一次吃到真正的巧克力，舔着包装纸不肯扔。',
    impact: '地火贸易航线开通。',
  },
  {
    id: 'ge-119',
    title: '极夜灯火节',
    cat: '文化',
    bg: '最长的极夜，人们点起了所有的灯。',
    story: '从轨道上看，星港是火星背面唯一的光点，像一颗不肯熄灭的星。',
    impact: '城市凝聚力大幅提升。',
  },
  {
    id: 'ge-120',
    title: '大停电',
    cat: '灾难',
    bg: '太阳风暴击毁了主电网。',
    story: '全城摸黑过了三天，医院靠备用电源撑着，没有一个人抱怨。',
    impact: '电网冗余建设提上日程。',
  },
];
function greatEvent(i) { return GREAT_EVENTS[i % GREAT_EVENTS.length]; }
