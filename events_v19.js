/* 星港 — events_v19.js：v1.9 随机事件库（200 个） */
// 每个事件：id/标题/描述/选项（2-3 个，每个有效果）/权重/条件
const EVENTS_V19 = [
  {
    id: 'evt-v19-001',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 8,
    minYear: 5,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-002',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 8,
    minYear: 4,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-003',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 6,
    minYear: 2,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-004',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 1,
    minYear: 4,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-005',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 8,
    minYear: 4,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-006',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 6,
    minYear: 2,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-007',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 10,
    minYear: 2,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-008',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 9,
    minYear: 3,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-009',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 10,
    minYear: 4,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-010',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 1,
    minYear: 1,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-011',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 4,
    minYear: 3,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-012',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 2,
    minYear: 5,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-013',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 2,
    minYear: 2,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-014',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 9,
    minYear: 4,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-015',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 5,
    minYear: 4,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-016',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 5,
    minYear: 5,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-017',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 3,
    minYear: 5,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-018',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 4,
    minYear: 5,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-019',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 4,
    minYear: 5,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-020',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 7,
    minYear: 4,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-021',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 10,
    minYear: 2,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-022',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 6,
    minYear: 5,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-023',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 10,
    minYear: 1,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-024',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 2,
    minYear: 4,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-025',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 8,
    minYear: 5,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-026',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 5,
    minYear: 1,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-027',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 9,
    minYear: 1,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-028',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 6,
    minYear: 3,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-029',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 8,
    minYear: 3,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-030',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 5,
    minYear: 1,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-031',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 10,
    minYear: 2,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-032',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 7,
    minYear: 1,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-033',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 6,
    minYear: 4,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-034',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 7,
    minYear: 3,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-035',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 6,
    minYear: 2,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-036',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 7,
    minYear: 5,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-037',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 8,
    minYear: 1,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-038',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 5,
    minYear: 1,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-039',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 8,
    minYear: 3,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-040',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 1,
    minYear: 3,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-041',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 5,
    minYear: 4,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-042',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 10,
    minYear: 4,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-043',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 8,
    minYear: 2,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-044',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 4,
    minYear: 5,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-045',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 3,
    minYear: 5,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-046',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 5,
    minYear: 3,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-047',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 4,
    minYear: 2,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-048',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 4,
    minYear: 3,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-049',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 2,
    minYear: 5,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-050',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 4,
    minYear: 4,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-051',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 9,
    minYear: 1,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-052',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 1,
    minYear: 1,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-053',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 1,
    minYear: 5,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-054',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 6,
    minYear: 5,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-055',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 4,
    minYear: 4,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-056',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 10,
    minYear: 4,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-057',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 2,
    minYear: 4,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-058',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 10,
    minYear: 4,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-059',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 9,
    minYear: 5,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-060',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 5,
    minYear: 1,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-061',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 7,
    minYear: 1,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-062',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 4,
    minYear: 1,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-063',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 1,
    minYear: 4,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-064',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 9,
    minYear: 3,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-065',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 6,
    minYear: 4,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-066',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 6,
    minYear: 1,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-067',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 4,
    minYear: 2,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-068',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 9,
    minYear: 1,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-069',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 4,
    minYear: 1,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-070',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 3,
    minYear: 2,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-071',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 3,
    minYear: 2,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-072',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 4,
    minYear: 5,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-073',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 8,
    minYear: 2,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-074',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 9,
    minYear: 5,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-075',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 4,
    minYear: 4,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-076',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 2,
    minYear: 3,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-077',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 9,
    minYear: 3,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-078',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 1,
    minYear: 5,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-079',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 6,
    minYear: 1,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-080',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 9,
    minYear: 5,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-081',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 4,
    minYear: 2,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-082',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 6,
    minYear: 3,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-083',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 3,
    minYear: 5,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-084',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 7,
    minYear: 2,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-085',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 10,
    minYear: 5,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-086',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 10,
    minYear: 5,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-087',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 5,
    minYear: 1,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-088',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 3,
    minYear: 3,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-089',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 8,
    minYear: 3,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-090',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 5,
    minYear: 3,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-091',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 4,
    minYear: 2,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-092',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 3,
    minYear: 1,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-093',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 9,
    minYear: 5,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-094',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 8,
    minYear: 1,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-095',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 10,
    minYear: 2,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-096',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 8,
    minYear: 4,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-097',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 1,
    minYear: 1,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-098',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 1,
    minYear: 1,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-099',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 6,
    minYear: 3,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-100',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 9,
    minYear: 5,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-101',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 9,
    minYear: 5,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-102',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 6,
    minYear: 2,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-103',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 6,
    minYear: 4,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-104',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 3,
    minYear: 1,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-105',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 9,
    minYear: 5,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-106',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 3,
    minYear: 3,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-107',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 2,
    minYear: 4,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-108',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 5,
    minYear: 1,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-109',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 9,
    minYear: 3,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-110',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 5,
    minYear: 4,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-111',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 8,
    minYear: 4,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-112',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 2,
    minYear: 2,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-113',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 8,
    minYear: 2,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-114',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 1,
    minYear: 2,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-115',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 6,
    minYear: 1,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-116',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 4,
    minYear: 2,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-117',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 6,
    minYear: 3,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-118',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 9,
    minYear: 3,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-119',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 8,
    minYear: 5,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-120',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 3,
    minYear: 4,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-121',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 9,
    minYear: 4,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-122',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 9,
    minYear: 3,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-123',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 7,
    minYear: 2,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-124',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 3,
    minYear: 1,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-125',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 6,
    minYear: 1,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-126',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 1,
    minYear: 4,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-127',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 6,
    minYear: 1,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-128',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 8,
    minYear: 3,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-129',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 7,
    minYear: 1,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-130',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 6,
    minYear: 1,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-131',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 10,
    minYear: 4,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-132',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 7,
    minYear: 5,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-133',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 5,
    minYear: 4,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-134',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 6,
    minYear: 5,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-135',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 10,
    minYear: 2,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-136',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 7,
    minYear: 5,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-137',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 8,
    minYear: 5,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-138',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 3,
    minYear: 2,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-139',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 1,
    minYear: 3,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-140',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 8,
    minYear: 1,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-141',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 5,
    minYear: 1,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-142',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 4,
    minYear: 3,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-143',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 9,
    minYear: 1,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-144',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 6,
    minYear: 4,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-145',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 8,
    minYear: 4,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-146',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 4,
    minYear: 2,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-147',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 4,
    minYear: 5,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-148',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 4,
    minYear: 3,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-149',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 9,
    minYear: 4,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-150',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 7,
    minYear: 3,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-151',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 4,
    minYear: 3,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-152',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 4,
    minYear: 2,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-153',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 5,
    minYear: 3,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-154',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 2,
    minYear: 5,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-155',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 1,
    minYear: 5,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-156',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 4,
    minYear: 1,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-157',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 8,
    minYear: 2,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-158',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 9,
    minYear: 4,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-159',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 7,
    minYear: 3,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-160',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 7,
    minYear: 2,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-161',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 10,
    minYear: 2,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-162',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 1,
    minYear: 5,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-163',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 10,
    minYear: 2,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-164',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 10,
    minYear: 4,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-165',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 4,
    minYear: 1,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-166',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 7,
    minYear: 2,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-167',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 5,
    minYear: 5,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-168',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 4,
    minYear: 1,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-169',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 5,
    minYear: 5,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-170',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 4,
    minYear: 4,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-171',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 8,
    minYear: 4,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-172',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 6,
    minYear: 1,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-173',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 4,
    minYear: 1,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-174',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 2,
    minYear: 3,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-175',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 1,
    minYear: 5,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-176',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 9,
    minYear: 1,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-177',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 9,
    minYear: 2,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-178',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 6,
    minYear: 5,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-179',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 9,
    minYear: 4,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-180',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 5,
    minYear: 4,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-181',
    kind: '好事',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 10,
    minYear: 5,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-182',
    kind: '坏事',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 4,
    minYear: 1,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-183',
    kind: '抉择',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 2,
    minYear: 1,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-184',
    kind: '奇遇',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 9,
    minYear: 4,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-185',
    kind: '好事',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 6,
    minYear: 3,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-186',
    kind: '坏事',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 5,
    minYear: 2,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-187',
    kind: '抉择',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 8,
    minYear: 5,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-188',
    kind: '奇遇',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 9,
    minYear: 5,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-189',
    kind: '好事',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 6,
    minYear: 3,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-190',
    kind: '坏事',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 2,
    minYear: 3,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-191',
    kind: '抉择',
    title: '天降甘霖',
    icon: '🌧️',

    desc: '一场罕见的酸雨（无害版）滋润了大地。',

    weight: 5,
    minYear: 5,

    options: [
      { text: '收集雨水', effect: '水 +50', cond: '' },
      { text: '祈祷', effect: '幸福 +10', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-192',
    kind: '奇遇',
    title: '商队到访',
    icon: '🐪',

    desc: '一支独立商队路过，带来稀罕货。',

    weight: 4,
    minYear: 1,

    options: [
      { text: '交易', effect: '铁 -30，稀土 +10', cond: '' },
      { text: '驱逐', effect: '无事发生', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-193',
    kind: '好事',
    title: '技术突破',
    icon: '💡',

    desc: '工程师小李熬夜搞出了新工艺。',

    weight: 2,
    minYear: 2,

    options: [
      { text: '推广', effect: '随机建筑效率 +10%', cond: '' },
      { text: '保密', effect: '科技点 +20', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-194',
    kind: '坏事',
    title: '丰收',
    icon: '🌾',

    desc: '温室大丰收，粮仓爆满。',

    weight: 1,
    minYear: 1,

    options: [
      { text: '庆祝', effect: '食物 +100，幸福 +15', cond: '' },
      { text: '储备', effect: '食物 +150', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-195',
    kind: '抉择',
    title: '发现矿脉',
    icon: '⛏️',

    desc: '探险队发现富矿。',

    weight: 10,
    minYear: 1,

    options: [
      { text: '开采', effect: '铁 +80', cond: '' },
      { text: '保护', effect: '环境 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-196',
    kind: '奇遇',
    title: '设备故障',
    icon: '🔧',

    desc: '一台采矿机罢工了。',

    weight: 2,
    minYear: 5,

    options: [
      { text: '维修', effect: '铁 -20', cond: '' },
      { text: '报废', effect: '获得 10 铁', cond: '' },
    ],

    flavor: '市政厅连夜开会。',
  },

  {
    id: 'evt-v19-197',
    kind: '好事',
    title: '小规模疫情',
    icon: '🤒',

    desc: '流感在街区蔓延。',

    weight: 9,
    minYear: 3,

    options: [
      { text: '隔离', effect: '人口增长暂停 3 天', cond: '' },
      { text: '硬扛', effect: '死亡 2 人', cond: '' },
    ],

    flavor: '这件事上了头条。',
  },

  {
    id: 'evt-v19-198',
    kind: '坏事',
    title: '贸易纠纷',
    icon: '⚖️',

    desc: '商队坐地起价。',

    weight: 6,
    minYear: 1,

    options: [
      { text: '接受', effect: '多付 20%', cond: '' },
      { text: '谈判', effect: '50% 成功', cond: '' },
    ],

    flavor: '市民们议论纷纷。',
  },

  {
    id: 'evt-v19-199',
    kind: '抉择',
    title: '沙尘入侵',
    icon: '🌪️',

    desc: '小股沙尘渗入穹顶。',

    weight: 4,
    minYear: 1,

    options: [
      { text: '清理', effect: '电 -20', cond: '' },
      { text: '不管', effect: '建筑老化 +5', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

  {
    id: 'evt-v19-200',
    kind: '奇遇',
    title: '谣言',
    icon: '🗣️',

    desc: '有人散布末日谣言。',

    weight: 7,
    minYear: 5,

    options: [
      { text: '辟谣', effect: '幸福 -5', cond: '' },
      { text: '镇压', effect: '幸福 -15，稳定 +10', cond: '' },
    ],

    flavor: '老人们说从没见过。',
  },

];
const EVENTS_V19_COUNT = 200;
