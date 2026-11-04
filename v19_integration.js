/* 星港 — v19_integration.js：v1.9 全系统接入（v19.0）
 * 职责：
 * 1. 合并 BUILDINGS_V19 → BUILDINGS
 * 2. 合并 TECH_DEFS_V19 → TECH_DEFS，注册时间分支
 * 3. 合并 DISASTERS_V19 → 灾难注册表
 * 4. 合并 WONDERS_V19 → 奇观注册表
 * 5. 合并 ACHIEVEMENTS_V19 → 成就列表
 * 6. 初始化 TimeSys / Population / Chronicle / Aging
 * 7. 注册新资源（nano 氦3 铀矿 的 v19 扩展）
 * 8. 存档迁移 v18 → v19
 * 9. 44px 触屏容差接入（用户反馈）
 */

const V19 = {
  version: '1.9.0',
  codename: '时间彼岸',
  applied: false,

  apply() {
    if (this.applied) return;
    this.mergeBuildings();
    this.mergeTech();
    this.mergeDisasters();
    this.mergeWonders();
    this.mergeAchievements();
    this.mergeResources();
    this.initTime();
    this.applyTouchFix();
    this.applied = true;
    console.log('[星港 v1.9] 时间彼岸已加载');
  },

  mergeBuildings() {
    if (typeof BUILDINGS === 'undefined' || typeof BUILDINGS_V19 === 'undefined') return;
    let n = 0;
    for (const [id, def] of Object.entries(BUILDINGS_V19)) {
      if (!BUILDINGS[id]) { BUILDINGS[id] = def; n++; }
    }
    console.log(`[v19] 建筑 +${n}`);
  },

  mergeTech() {
    if (typeof TECH_BRANCHES !== 'undefined' && typeof TECH_BRANCHES_V19 !== 'undefined')
      Object.assign(TECH_BRANCHES, TECH_BRANCHES_V19);
    if (typeof TECH_DEFS !== 'undefined' && typeof TECH_DEFS_V19 !== 'undefined') {
      let n = 0;
      for (const [id, def] of Object.entries(TECH_DEFS_V19)) {
        if (!TECH_DEFS[id]) { TECH_DEFS[id] = def; n++; }
      }
      console.log(`[v19] 科技 +${n}`);
    }
  },

  mergeDisasters() {
    if (typeof DISASTERS !== 'undefined' && typeof DISASTERS_V19 !== 'undefined')
      Object.assign(DISASTERS, DISASTERS_V19);
    else if (typeof window !== 'undefined') window.DISASTERS_V19_ACTIVE = true;
  },

  mergeWonders() {
    if (typeof WONDERS !== 'undefined' && typeof WONDERS_V19 !== 'undefined')
      Object.assign(WONDERS, WONDERS_V19);
  },

  mergeAchievements() {
    if (typeof ACHIEVEMENTS !== 'undefined' && typeof ACHIEVEMENTS_V19 !== 'undefined') {
      const have = new Set(ACHIEVEMENTS.map(a => a.id));
      let n = 0;
      for (const a of ACHIEVEMENTS_V19) {
        if (!have.has(a.id)) { ACHIEVEMENTS.push(a); n++; }
      }
      console.log(`[v19] 成就 +${n}`);
    }
  },

  mergeResources() {
    // v19 新资源：nano（纳米材料）已在 v1.5 加入；此处确保注册
    if (typeof RESOURCES !== 'undefined') {
      const ensure = (id, def) => { if (!RESOURCES[id]) RESOURCES[id] = def; };
      ensure('nano', { id: 'nano', name: '纳米材料', icon: '🔬', desc: '终极建筑材料。', baseCap: 2000 });
      ensure('he3', { id: 'he3', name: '氦3', icon: '🌌', desc: '聚变燃料。', baseCap: 1000 });
      ensure('uranium', { id: 'uranium', name: '铀矿', icon: '☢️', desc: '核能原料。', baseCap: 1000 });
    }
  },

  initTime() {
    if (typeof TimeSys !== 'undefined' && !TimeSys._init) {
      TimeSys.reset(); TimeSys._init = true;
    }
    if (typeof Chronicle !== 'undefined' && Chronicle.list.length === 0) {
      Chronicle.genesis();
    }
  },

  // 用户反馈：资源点/触屏目标 44px
  applyTouchFix() {
    if (typeof window !== 'undefined') {
      window.STARPORT_TOUCH_MIN = 44;
    }
    // 地图点击容差：findNearestInteractable 优先 44px 半径
    if (typeof Game !== 'undefined') Game.touchRadius = 44;
  },

  // 存档迁移 v18 → v19
  migrate(save) {
    if (!save) return save;
    save.v19 = {
      time: (typeof TimeSys !== 'undefined') ? TimeSys.save() : null,
      pop: (typeof Population !== 'undefined') ? Population.save() : null,
      chronicle: (typeof Chronicle !== 'undefined') ? Chronicle.save() : null,
    };
    return save;
  },
};

// 自动执行（在 game.js 之前加载完毕时）
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    try { V19.apply(); } catch (e) { console.error('[v19] 接入失败', e); }
  });
}

// ============ v19 内容注册表总览 ============
const V19_REGISTRY = {
  buildings: 20,
  techs: 60,
  disasters: 8,
  wonders: 5,
  achievements: 80,
  versusModes: 3,
  builtinMods: 10,
  total() {
    return this.buildings + this.techs + this.disasters + this.wonders + this.achievements;
  },
};
