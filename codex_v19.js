/* 星港 — codex_v19.js：v1.9 星港法典（全内容百科） */
const CODEX_V19 = { version: '1.9.0', entries: {} };
function codexAdd(cat, id, entry) {
  if (!CODEX_V19.entries[cat]) CODEX_V19.entries[cat] = {};
  CODEX_V19.entries[cat][id] = entry;
}
codexAdd('building', 'chrono_dome', {
  name: '时间穹顶', icon: '⏳', cat: '时间系', rarity: 'S',
  tagline: '时间加速', motto: '掌握时间者，掌握一切。',
  overview: '时间穹顶是 v1.9 时间彼岸版本的核心建筑之一，代表了时间系的最高成就。',
  strategy: '建议在中期建造，配合恒星熔炉效果更佳。',
  trivia: '设计灵感来自古老的神话。',
  rating: 4.6, reviews: 832,
});
codexAdd('building', 'gene_ark', {
  name: '基因方舟', icon: '🧬', cat: '生命系', rarity: 'S',
  tagline: '人口', motto: '生命的备份，文明的保险。',
  overview: '基因方舟是 v1.9 时间彼岸版本的核心建筑之一，代表了生命系的最高成就。',
  strategy: '建议在中期建造，配合梦境枢纽效果更佳。',
  trivia: '设计灵感来自科幻小说。',
  rating: 4.4, reviews: 1417,
});
codexAdd('building', 'stellar_forge', {
  name: '恒星熔炉', icon: '🌟', cat: '能源系', rarity: 'S',
  tagline: '电力', motto: '把太阳装进地下室。',
  overview: '恒星熔炉是 v1.9 时间彼岸版本的核心建筑之一，代表了能源系的最高成就。',
  strategy: '建议在中期建造，配合恒星熔炉效果更佳。',
  trivia: '设计灵感来自玩家的建议。',
  rating: 4.9, reviews: 589,
});
codexAdd('building', 'void_mine', {
  name: '虚空矿机', icon: '🕳️', cat: '采集系', rarity: 'A',
  tagline: '稀土', motto: '向虚无索取财富。',
  overview: '虚空矿机是 v1.9 时间彼岸版本的核心建筑之一，代表了采集系的最高成就。',
  strategy: '建议在中期建造，配合恒星熔炉效果更佳。',
  trivia: '设计灵感来自工程师的梦想。',
  rating: 4.9, reviews: 1704,
});
codexAdd('building', 'dream_nexus', {
  name: '梦境枢纽', icon: '💭', cat: '精神系', rarity: 'A',
  tagline: '科研', motto: '一千个人的同一个梦。',
  overview: '梦境枢纽是 v1.9 时间彼岸版本的核心建筑之一，代表了精神系的最高成就。',
  strategy: '建议在后期建造，配合时间穹顶效果更佳。',
  trivia: '设计灵感来自工程师的梦想。',
  rating: 4.5, reviews: 356,
});
codexAdd('building', 'titan_wall', {
  name: '泰坦城墙', icon: '🧱', cat: '防御系', rarity: 'A',
  tagline: '防御', motto: '墙在，城在。',
  overview: '泰坦城墙是 v1.9 时间彼岸版本的核心建筑之一，代表了防御系的最高成就。',
  strategy: '建议在中期建造，配合时间穹顶效果更佳。',
  trivia: '设计灵感来自古老的神话。',
  rating: 4.4, reviews: 1138,
});
codexAdd('building', 'sky_dock', {
  name: '云端船坞', icon: '☁️', cat: '航空系', rarity: 'A',
  tagline: '舰船', motto: '在云端造船。',
  overview: '云端船坞是 v1.9 时间彼岸版本的核心建筑之一，代表了航空系的最高成就。',
  strategy: '建议在中后期建造，配合时间穹顶效果更佳。',
  trivia: '设计灵感来自工程师的梦想。',
  rating: 4.4, reviews: 1089,
});
codexAdd('building', 'aqua_core', {
  name: '海洋之心', icon: '🌊', cat: '能源系', rarity: 'A',
  tagline: '电力', motto: '深海的心跳。',
  overview: '海洋之心是 v1.9 时间彼岸版本的核心建筑之一，代表了能源系的最高成就。',
  strategy: '建议在中期建造，配合时间穹顶效果更佳。',
  trivia: '设计灵感来自玩家的建议。',
  rating: 4.5, reviews: 797,
});
codexAdd('building', 'magma_tap', {
  name: '熔浆汲取器', icon: '🌋', cat: '采集系', rarity: 'A',
  tagline: '资源', motto: '驯服火山。',
  overview: '熔浆汲取器是 v1.9 时间彼岸版本的核心建筑之一，代表了采集系的最高成就。',
  strategy: '建议在中后期建造，配合时间穹顶效果更佳。',
  trivia: '设计灵感来自古老的神话。',
  rating: 4.8, reviews: 1691,
});
codexAdd('building', 'phoenix_bay', {
  name: '凤凰医疗舱', icon: '🐦', cat: '生命系', rarity: 'S',
  tagline: '医疗', motto: '向死而生。',
  overview: '凤凰医疗舱是 v1.9 时间彼岸版本的核心建筑之一，代表了生命系的最高成就。',
  strategy: '建议在中后期建造，配合时间穹顶效果更佳。',
  trivia: '设计灵感来自工程师的梦想。',
  rating: 4.4, reviews: 393,
});
codexAdd('building', 'atlas_foundry', {
  name: '擎天铸造厂', icon: '🏭', cat: '工业系', rarity: 'S',
  tagline: '钢材', motto: '工业的心脏。',
  overview: '擎天铸造厂是 v1.9 时间彼岸版本的核心建筑之一，代表了工业系的最高成就。',
  strategy: '建议在后期建造，配合梦境枢纽效果更佳。',
  trivia: '设计灵感来自工程师的梦想。',
  rating: 4.8, reviews: 1877,
});
codexAdd('building', 'echo_array', {
  name: '回声阵列', icon: '📡', cat: '预警系', rarity: 'B',
  tagline: '预警', motto: '聆听宇宙。',
  overview: '回声阵列是 v1.9 时间彼岸版本的核心建筑之一，代表了预警系的最高成就。',
  strategy: '建议在后期建造，配合时间穹顶效果更佳。',
  trivia: '设计灵感来自玩家的建议。',
  rating: 4.8, reviews: 1217,
});
codexAdd('building', 'harmony_spire', {
  name: '和谐尖塔', icon: '🗼', cat: '精神系', rarity: 'B',
  tagline: '幸福', motto: '钟声即秩序。',
  overview: '和谐尖塔是 v1.9 时间彼岸版本的核心建筑之一，代表了精神系的最高成就。',
  strategy: '建议在后期建造，配合恒星熔炉效果更佳。',
  trivia: '设计灵感来自古老的神话。',
  rating: 4.5, reviews: 980,
});
codexAdd('building', 'iron_heart', {
  name: '铁心反应堆', icon: '⚛️', cat: '能源系', rarity: 'S',
  tagline: '电力', motto: '囚禁的太阳。',
  overview: '铁心反应堆是 v1.9 时间彼岸版本的核心建筑之一，代表了能源系的最高成就。',
  strategy: '建议在后期建造，配合恒星熔炉效果更佳。',
  trivia: '设计灵感来自科幻小说。',
  rating: 4.6, reviews: 997,
});
codexAdd('building', 'seed_sanctuary', {
  name: '种子圣殿', icon: '🌰', cat: '农业系', rarity: 'B',
  tagline: '食物', motto: '十万种子的诺亚方舟。',
  overview: '种子圣殿是 v1.9 时间彼岸版本的核心建筑之一，代表了农业系的最高成就。',
  strategy: '建议在后期建造，配合时间穹顶效果更佳。',
  trivia: '设计灵感来自玩家的建议。',
  rating: 5.0, reviews: 227,
});
codexAdd('building', 'storm_crown', {
  name: '风暴王冠', icon: '👑', cat: '气象系', rarity: 'S',
  tagline: '天气', motto: '戴上王冠，号令风暴。',
  overview: '风暴王冠是 v1.9 时间彼岸版本的核心建筑之一，代表了气象系的最高成就。',
  strategy: '建议在中期建造，配合梦境枢纽效果更佳。',
  trivia: '设计灵感来自玩家的建议。',
  rating: 4.4, reviews: 989,
});
codexAdd('building', 'origin_gate', {
  name: '起源之门', icon: '🚪', cat: '贸易系', rarity: 'S',
  tagline: '贸易', motto: '一步到地球。',
  overview: '起源之门是 v1.9 时间彼岸版本的核心建筑之一，代表了贸易系的最高成就。',
  strategy: '建议在后期建造，配合恒星熔炉效果更佳。',
  trivia: '设计灵感来自玩家的建议。',
  rating: 4.9, reviews: 1364,
});
codexAdd('building', 'memory_vault', {
  name: '记忆金库', icon: '💾', cat: '知识系', rarity: 'A',
  tagline: '科研', motto: '文明永不断电。',
  overview: '记忆金库是 v1.9 时间彼岸版本的核心建筑之一，代表了知识系的最高成就。',
  strategy: '建议在后期建造，配合时间穹顶效果更佳。',
  trivia: '设计灵感来自古老的神话。',
  rating: 4.9, reviews: 1047,
});
codexAdd('building', 'guardian_titan', {
  name: '守望泰坦', icon: '🤖', cat: '防御系', rarity: 'S',
  tagline: '防御', motto: '千米守望者。',
  overview: '守望泰坦是 v1.9 时间彼岸版本的核心建筑之一，代表了防御系的最高成就。',
  strategy: '建议在中期建造，配合梦境枢纽效果更佳。',
  trivia: '设计灵感来自古老的神话。',
  rating: 4.8, reviews: 1041,
});
codexAdd('building', 'eden_engine', {
  name: '伊甸引擎', icon: '🌍', cat: '改造系', rarity: 'EX',
  tagline: '胜利', motto: '把火星变成地球。',
  overview: '伊甸引擎是 v1.9 时间彼岸版本的核心建筑之一，代表了改造系的最高成就。',
  strategy: '建议在后期建造，配合恒星熔炉效果更佳。',
  trivia: '设计灵感来自古老的神话。',
  rating: 4.8, reviews: 796,
});

// ============ 时间系科技百科（60 条，详解） ============
codexAdd('tech', 't-time-1-1', {
  name: '精准计时',
  tier: 1,
  branch: '时间',

  overview: '精准计时是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.9,
});

codexAdd('tech', 't-time-1-2', {
  name: '轮班优化',
  tier: 1,
  branch: '时间',

  overview: '轮班优化是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 4.3,
});

codexAdd('tech', 't-time-1-3', {
  name: '快速维修',
  tier: 1,
  branch: '时间',

  overview: '快速维修是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 4.1,
});

codexAdd('tech', 't-time-1-4', {
  name: '作息科学',
  tier: 1,
  branch: '时间',

  overview: '作息科学是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 4.0,
});

codexAdd('tech', 't-time-1-5', {
  name: '物流准时',
  tier: 1,
  branch: '时间',

  overview: '物流准时是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.9,
});

codexAdd('tech', 't-time-1-6', {
  name: '工时记录',
  tier: 1,
  branch: '时间',

  overview: '工时记录是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.4,
});

codexAdd('tech', 't-time-1-7', {
  name: '季节历法',
  tier: 1,
  branch: '时间',

  overview: '季节历法是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.6,
});

codexAdd('tech', 't-time-1-8', {
  name: '夜班津贴',
  tier: 1,
  branch: '时间',

  overview: '夜班津贴是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 3.8,
});

codexAdd('tech', 't-time-1-9', {
  name: '保养周期',
  tier: 1,
  branch: '时间',

  overview: '保养周期是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于因果律数学，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.0,
});

codexAdd('tech', 't-time-1-10', {
  name: '时间银行',
  tier: 1,
  branch: '时间',

  overview: '时间银行是时间系第1阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 5.0,
});

codexAdd('tech', 't-time-2-1', {
  name: '加速孵化',
  tier: 2,
  branch: '时间',

  overview: '加速孵化是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.9,
});

codexAdd('tech', 't-time-2-2', {
  name: '并行工程',
  tier: 2,
  branch: '时间',

  overview: '并行工程是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.0,
});

codexAdd('tech', 't-time-2-3', {
  name: '预测性维护',
  tier: 2,
  branch: '时间',

  overview: '预测性维护是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于因果律数学，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.6,
});

codexAdd('tech', 't-time-2-4', {
  name: '弹性工作',
  tier: 2,
  branch: '时间',

  overview: '弹性工作是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 4.8,
});

codexAdd('tech', 't-time-2-5', {
  name: '冷链物流',
  tier: 2,
  branch: '时间',

  overview: '冷链物流是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.5,
});

codexAdd('tech', 't-time-2-6', {
  name: '倒班人性化',
  tier: 2,
  branch: '时间',

  overview: '倒班人性化是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.1,
});

codexAdd('tech', 't-time-2-7', {
  name: '历法改革',
  tier: 2,
  branch: '时间',

  overview: '历法改革是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.0,
});

codexAdd('tech', 't-time-2-8', {
  name: '延时摄影',
  tier: 2,
  branch: '时间',

  overview: '延时摄影是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.7,
});

codexAdd('tech', 't-time-2-9', {
  name: '老化干预',
  tier: 2,
  branch: '时间',

  overview: '老化干预是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.2,
});

codexAdd('tech', 't-time-2-10', {
  name: '知识管理',
  tier: 2,
  branch: '时间',

  overview: '知识管理是时间系第2阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.7,
});

codexAdd('tech', 't-time-3-1', {
  name: '时间膨胀',
  tier: 3,
  branch: '时间',

  overview: '时间膨胀是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于因果律数学，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.3,
});

codexAdd('tech', 't-time-3-2', {
  name: '冷冻休眠',
  tier: 3,
  branch: '时间',

  overview: '冷冻休眠是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.7,
});

codexAdd('tech', 't-time-3-3', {
  name: '光速物流',
  tier: 3,
  branch: '时间',

  overview: '光速物流是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于因果律数学，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 4.7,
});

codexAdd('tech', 't-time-3-4', {
  name: '四维规划',
  tier: 3,
  branch: '时间',

  overview: '四维规划是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.2,
});

codexAdd('tech', 't-time-3-5', {
  name: '因果律武器',
  tier: 3,
  branch: '时间',

  overview: '因果律武器是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.3,
});

codexAdd('tech', 't-time-3-6', {
  name: '历史复盘',
  tier: 3,
  branch: '时间',

  overview: '历史复盘是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.0,
});

codexAdd('tech', 't-time-3-7', {
  name: '永恒轮班',
  tier: 3,
  branch: '时间',

  overview: '永恒轮班是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.1,
});

codexAdd('tech', 't-time-3-8', {
  name: '时间税',
  tier: 3,
  branch: '时间',

  overview: '时间税是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于因果律数学，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.2,
});

codexAdd('tech', 't-time-3-9', {
  name: '逆龄研究',
  tier: 3,
  branch: '时间',

  overview: '逆龄研究是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.3,
});

codexAdd('tech', 't-time-3-10', {
  name: '预知梦',
  tier: 3,
  branch: '时间',

  overview: '预知梦是时间系第3阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 5.0,
});

codexAdd('tech', 't-time-4-1', {
  name: '时间穹顶科技',
  tier: 4,
  branch: '时间',

  overview: '时间穹顶科技是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.5,
});

codexAdd('tech', 't-time-4-2', {
  name: '闭环时间',
  tier: 4,
  branch: '时间',

  overview: '闭环时间是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.8,
});

codexAdd('tech', 't-time-4-3', {
  name: '长寿社会',
  tier: 4,
  branch: '时间',

  overview: '长寿社会是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.3,
});

codexAdd('tech', 't-time-4-4', {
  name: '瞬时建造',
  tier: 4,
  branch: '时间',

  overview: '瞬时建造是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 4.9,
});

codexAdd('tech', 't-time-4-5', {
  name: '时间护盾',
  tier: 4,
  branch: '时间',

  overview: '时间护盾是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 3.8,
});

codexAdd('tech', 't-time-4-6', {
  name: '平行规划',
  tier: 4,
  branch: '时间',

  overview: '平行规划是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.6,
});

codexAdd('tech', 't-time-4-7', {
  name: '纪元奖',
  tier: 4,
  branch: '时间',

  overview: '纪元奖是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.9,
});

codexAdd('tech', 't-time-4-8', {
  name: '时间贸易',
  tier: 4,
  branch: '时间',

  overview: '时间贸易是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.6,
});

codexAdd('tech', 't-time-4-9', {
  name: '不朽工程',
  tier: 4,
  branch: '时间',

  overview: '不朽工程是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.5,
});

codexAdd('tech', 't-time-4-10', {
  name: '先知系统',
  tier: 4,
  branch: '时间',

  overview: '先知系统是时间系第4阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.4,
});

codexAdd('tech', 't-time-5-1', {
  name: '时间锚点',
  tier: 5,
  branch: '时间',

  overview: '时间锚点是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.5,
});

codexAdd('tech', 't-time-5-2', {
  name: '永生计划',
  tier: 5,
  branch: '时间',

  overview: '永生计划是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.6,
});

codexAdd('tech', 't-time-5-3', {
  name: '超时空物流',
  tier: 5,
  branch: '时间',

  overview: '超时空物流是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 3.9,
});

codexAdd('tech', 't-time-5-4', {
  name: '历史改写',
  tier: 5,
  branch: '时间',

  overview: '历史改写是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.5,
});

codexAdd('tech', 't-time-5-5', {
  name: '时间膨胀2',
  tier: 5,
  branch: '时间',

  overview: '时间膨胀2是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 3.9,
});

codexAdd('tech', 't-time-5-6', {
  name: '因果律引擎',
  tier: 5,
  branch: '时间',

  overview: '因果律引擎是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 3.8,
});

codexAdd('tech', 't-time-5-7', {
  name: '纪元飞跃',
  tier: 5,
  branch: '时间',

  overview: '纪元飞跃是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 5.0,
});

codexAdd('tech', 't-time-5-8', {
  name: '时间银行2',
  tier: 5,
  branch: '时间',

  overview: '时间银行2是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.5,
});

codexAdd('tech', 't-time-5-9', {
  name: '不朽者',
  tier: 5,
  branch: '时间',

  overview: '不朽者是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于生产调度领域。',

  rating: 4.5,
});

codexAdd('tech', 't-time-5-10', {
  name: '大预言',
  tier: 5,
  branch: '时间',

  overview: '大预言是时间系第5阶科技，代表了人类对时间理解的深化。',

  principle: '基于因果律数学，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.0,
});

codexAdd('tech', 't-time-6-1', {
  name: '时间主宰',
  tier: 6,
  branch: '时间',

  overview: '时间主宰是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.3,
});

codexAdd('tech', 't-time-6-2', {
  name: '永恒星港',
  tier: 6,
  branch: '时间',

  overview: '永恒星港是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 4.1,
});

codexAdd('tech', 't-time-6-3', {
  name: '奇点',
  tier: 6,
  branch: '时间',

  overview: '奇点是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.5,
});

codexAdd('tech', 't-time-6-4', {
  name: '轮回',
  tier: 6,
  branch: '时间',

  overview: '轮回是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于相对论工程，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 4.0,
});

codexAdd('tech', 't-time-6-5', {
  name: '时间线收束',
  tier: 6,
  branch: '时间',

  overview: '时间线收束是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 4.3,
});

codexAdd('tech', 't-time-6-6', {
  name: '创世',
  tier: 6,
  branch: '时间',

  overview: '创世是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 5.0,
});

codexAdd('tech', 't-time-6-7', {
  name: '终焉',
  tier: 6,
  branch: '时间',

  overview: '终焉是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于高维物理，将时间视为可塑的资源。',

  application: '广泛应用于灾害预警领域。',

  rating: 4.0,
});

codexAdd('tech', 't-time-6-8', {
  name: '无限',
  tier: 6,
  branch: '时间',

  overview: '无限是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于因果律数学，将时间视为可塑的资源。',

  application: '广泛应用于科研加速领域。',

  rating: 4.2,
});

codexAdd('tech', 't-time-6-9', {
  name: '观察者',
  tier: 6,
  branch: '时间',

  overview: '观察者是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于量子时间理论，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 5.0,
});

codexAdd('tech', 't-time-6-10', {
  name: '神',
  tier: 6,
  branch: '时间',

  overview: '神是时间系第6阶科技，代表了人类对时间理解的深化。',

  principle: '基于因果律数学，将时间视为可塑的资源。',

  application: '广泛应用于城市管理领域。',

  rating: 3.9,
});

