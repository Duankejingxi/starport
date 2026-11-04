/* 星港 — mods.js：MOD 系统（v1.9）
 * 玩家可自定义建筑 / 资源 / 科技 / 灾难 / 成就，打包成 MOD，一键加载。
 * 设计：
 * - MOD = 一个 JS 对象（manifest + defs），可来自：内置示例 / localStorage / 导入 JSON / 分享码
 * - ModLoader：校验 → 沙箱求值 → 注册进游戏注册表 → 热重载
 * - 安全：只允许声明式 defs（纯数据），不允许执行任意代码（白名单字段）
 * - 分享码：defs 经 JSON → base64，生成短码，可复制分享
 */

// ============ MOD 规范 ============
const MOD_SPEC_VERSION = 1;

// 白名单：MOD 允许定义的顶层字段
const MOD_ALLOWED_TOP = ['manifest', 'buildings', 'resources', 'techs', 'disasters', 'achievements', 'wonders', 'policies'];

// 建筑 def 白名单字段
const MOD_BUILDING_FIELDS = ['id', 'name', 'icon', 'desc', 'levels', 'kind'];
const MOD_LEVEL_FIELDS = ['cost', 'needPop', 'powerUse', 'power', 'popCap', 'produce', 'produceInterval', 'convert', 'convertInterval', 'desc'];

// 资源 def 白名单字段
const MOD_RESOURCE_FIELDS = ['id', 'name', 'icon', 'desc', 'baseCap'];

// 科技 def 白名单字段
const MOD_TECH_FIELDS = ['name', 'icon', 'branch', 'cost', 'needs', 'desc', 'fx'];

// ============ MOD 注册表 ============
const ModRegistry = {
  mods: [],          // 已加载的 MOD：{ id, manifest, defs, enabled }
  byId: {},

  register(mod) {
    if (this.byId[mod.id]) return { ok: false, err: 'MOD id 已存在：' + mod.id };
    this.mods.push(mod); this.byId[mod.id] = mod;
    return { ok: true };
  },
  unregister(id) {
    const m = this.byId[id]; if (!m) return false;
    this.mods = this.mods.filter(x => x.id !== id);
    delete this.byId[id];
    return true;
  },
  list() { return this.mods.map(m => ({ id: m.id, name: m.manifest.name, ver: m.manifest.version, enabled: m.enabled })); },
  get(id) { return this.byId[id] || null; },
};

// ============ MOD 校验器 ============
const ModValidator = {
  errors: [],

  validate(mod) {
    this.errors = [];
    if (!mod || typeof mod !== 'object') return this.fail('MOD 必须是对象');
    if (!mod.manifest) return this.fail('缺少 manifest');
    this.checkManifest(mod.manifest);
    for (const key of Object.keys(mod)) {
      if (key === 'manifest' || key === 'id' || key === 'enabled') continue;
      if (!MOD_ALLOWED_TOP.includes(key)) this.err(`未知顶层字段：${key}（将被忽略）`);
    }
    if (mod.buildings) this.checkBuildings(mod.buildings);
    if (mod.resources) this.checkResources(mod.resources);
    if (mod.techs) this.checkTechs(mod.techs);
    if (mod.disasters) this.checkDisasters(mod.disasters);
    if (mod.achievements) this.checkAchievements(mod.achievements);
    return this.errors.length === 0 ? { ok: true, warnings: this.warnings } : { ok: false, errors: this.errors };
  },

  warnings: [],
  fail(msg) { this.errors.push(msg); return { ok: false, errors: this.errors }; },
  err(msg) { this.errors.push(msg); },
  warn(msg) { this.warnings.push(msg); },

  checkManifest(m) {
    if (!m.name) this.err('manifest.name 必填');
    if (!m.version) this.err('manifest.version 必填');
    if (m.spec !== MOD_SPEC_VERSION) this.warn(`spec 版本 ${m.spec}，当前支持 ${MOD_SPEC_VERSION}`);
    if (!m.author) this.warn('建议填写 author');
  },

  checkFields(obj, allowed, what) {
    for (const k of Object.keys(obj)) {
      if (!allowed.includes(k)) this.err(`${what} 含非法字段：${k}`);
    }
  },

  checkCost(cost, what) {
    if (!cost || typeof cost !== 'object') { this.err(what + ' cost 必须是对象'); return; }
    for (const [k, v] of Object.entries(cost)) {
      if (typeof v !== 'number' || v < 0) this.err(`${what} cost.${k} 必须是非负数`);
    }
  },

  checkBuildings(list) {
    if (!Array.isArray(list)) return this.err('buildings 必须是数组');
    const ids = new Set();
    list.forEach((b, i) => {
      const what = `buildings[${i}]`;
      if (!b.id) return this.err(what + ' 缺少 id');
      if (ids.has(b.id)) this.err(what + ' id 重复：' + b.id);
      ids.add(b.id);
      if (!/^[a-z0-9_]+$/.test(b.id)) this.err(what + ' id 非法（仅小写字母数字下划线）：' + b.id);
      this.checkFields(b, MOD_BUILDING_FIELDS, what);
      if (!b.name) this.err(what + ' 缺少 name');
      if (!Array.isArray(b.levels) || b.levels.length < 2) this.err(what + ' levels 至少 2 项（含 null 占位）');
      else b.levels.forEach((lv, li) => {
        if (lv === null) return;
        this.checkFields(lv, MOD_LEVEL_FIELDS, `${what}.levels[${li}]`);
        if (lv.cost) this.checkCost(lv.cost, `${what}.levels[${li}]`);
      });
    });
  },

  checkResources(list) {
    if (!Array.isArray(list)) return this.err('resources 必须是数组');
    list.forEach((r, i) => {
      const what = `resources[${i}]`;
      if (!r.id || !/^[a-z0-9_]+$/.test(r.id)) this.err(what + ' id 非法或缺失');
      this.checkFields(r, MOD_RESOURCE_FIELDS, what);
    });
  },

  checkTechs(map) {
    if (typeof map !== 'object') return this.err('techs 必须是对象');
    for (const [tid, t] of Object.entries(map)) {
      const what = `techs.${tid}`;
      this.checkFields(t, MOD_TECH_FIELDS, what);
      if (typeof t.cost !== 'number') this.err(what + ' cost 必须是数字');
    }
  },

  checkDisasters(map) {
    if (typeof map !== 'object') return this.err('disasters 必须是对象');
  },

  checkAchievements(list) {
    if (!Array.isArray(list)) return this.err('achievements 必须是数组');
  },
};

// ============ MOD 加载器 ============
const ModLoader = {
  // 从对象加载
  loadObject(raw) {
    const v = ModValidator.validate(raw);
    if (!v.ok) return { ok: false, errors: v.errors };
    const mod = {
      id: 'mod_' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36),
      manifest: raw.manifest,
      defs: {},
      enabled: true,
      warnings: v.warnings || [],
    };
    for (const k of MOD_ALLOWED_TOP) {
      if (k === 'manifest') continue;
      if (raw[k] !== undefined) mod.defs[k] = raw[k];
    }
    const r = ModRegistry.register(mod);
    if (!r.ok) return r;
    ModApplier.apply(mod);
    ModStore.persist();
    return { ok: true, id: mod.id, warnings: mod.warnings };
  },

  // 从 JSON 文本加载
  loadJSON(text) {
    let raw;
    try { raw = JSON.parse(text); }
    catch (e) { return { ok: false, errors: ['JSON 解析失败：' + e.message] }; }
    return this.loadObject(raw);
  },

  // 从分享码加载
  loadShareCode(code) {
    try {
      const json = decodeURIComponent(escape(atob(code.replace(/-/g, '+').replace(/_/g, '/'))));
      return this.loadJSON(json);
    } catch (e) {
      return { ok: false, errors: ['分享码无效：' + e.message] };
    }
  },

  unload(id) {
    const mod = ModRegistry.get(id);
    if (!mod) return { ok: false, err: 'MOD 不存在' };
    ModApplier.unapply(mod);
    ModRegistry.unregister(id);
    ModStore.persist();
    return { ok: true };
  },

  setEnabled(id, on) {
    const mod = ModRegistry.get(id);
    if (!mod) return false;
    if (mod.enabled === on) return true;
    mod.enabled = on;
    if (on) ModApplier.apply(mod); else ModApplier.unapply(mod);
    ModStore.persist();
    return true;
  },
};

// ============ MOD 应用器：把 defs 注册进游戏 ============
const ModApplier = {
  applied: {}, // modId -> { buildings: [ids], ... }

  apply(mod) {
    const rec = { buildings: [], resources: [], techs: [], achievements: [] };
    const d = mod.defs;
    if (d.buildings && typeof BUILDINGS !== 'undefined') {
      for (const b of d.buildings) {
        if (!BUILDINGS[b.id]) { BUILDINGS[b.id] = Object.assign({ modId: mod.id }, b); rec.buildings.push(b.id); }
      }
    }
    if (d.resources && typeof RESOURCES !== 'undefined') {
      for (const r of d.resources) {
        if (!RESOURCES[r.id]) { RESOURCES[r.id] = Object.assign({ modId: mod.id }, r); rec.resources.push(r.id); }
      }
    }
    if (d.techs && typeof TECH_DEFS !== 'undefined') {
      for (const [tid, t] of Object.entries(d.techs)) {
        if (!TECH_DEFS[tid]) { TECH_DEFS[tid] = Object.assign({ modId: mod.id }, t); rec.techs.push(tid); }
      }
    }
    if (d.achievements && typeof ACHIEVEMENTS !== 'undefined') {
      for (const a of d.achievements) {
        const id = a.id || ('modach_' + mod.id + '_' + rec.achievements.length);
        ACHIEVEMENTS.push(Object.assign({ id, modId: mod.id }, a)); rec.achievements.push(id);
      }
    }
    this.applied[mod.id] = rec;
    if (typeof Chronicle !== 'undefined')
      Chronicle.log('mod', '🧩 MOD 已加载：' + mod.manifest.name + ' v' + mod.manifest.version);
  },

  unapply(mod) {
    const rec = this.applied[mod.id]; if (!rec) return;
    if (typeof BUILDINGS !== 'undefined') for (const id of rec.buildings) delete BUILDINGS[id];
    if (typeof RESOURCES !== 'undefined') for (const id of rec.resources) delete RESOURCES[id];
    if (typeof TECH_DEFS !== 'undefined') for (const id of rec.techs) delete TECH_DEFS[id];
    if (typeof ACHIEVEMENTS !== 'undefined') {
      for (const id of rec.achievements) {
        const i = ACHIEVEMENTS.findIndex(a => a.id === id);
        if (i >= 0) ACHIEVEMENTS.splice(i, 1);
      }
    }
    delete this.applied[mod.id];
  },
};

// ============ MOD 持久化 ============
const ModStore = {
  KEY: 'starport-mods-v1',
  persist() {
    try {
      const data = ModRegistry.mods.map(m => ({ manifest: m.manifest, defs: m.defs, enabled: m.enabled, id: m.id }));
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch (e) {}
  },
  restore() {
    let data = [];
    try { data = JSON.parse(localStorage.getItem(this.KEY) || '[]'); } catch (e) {}
    for (const m of data) {
      const mod = { id: m.id, manifest: m.manifest, defs: m.defs, enabled: m.enabled !== false };
      ModRegistry.mods.push(mod); ModRegistry.byId[mod.id] = mod;
      if (mod.enabled) ModApplier.apply(mod);
    }
  },
};

// ============ 分享码 ============
const ModShare = {
  encode(modId) {
    const mod = ModRegistry.get(modId); if (!mod) return null;
    const raw = Object.assign({ manifest: mod.manifest }, mod.defs);
    const json = JSON.stringify(raw);
    return btoa(unescape(encodeURIComponent(json))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  },
  decodeInfo(code) {
    const r = ModLoader.loadShareCode(code);
    return r;
  },
};

// ============ 内置示例 MOD（10 个，开箱即用） ============
const BUILTIN_MODS = [
  {
    manifest: { name: '祥瑞mod', version: '1.0', author: '官方', desc: '开局送 100 铁，多一点善意。', spec: 1 },
    buildings: [
      { id: 'blessing_hut', name: '祥瑞小屋', icon: '🍀', desc: '每天产出 1 铁，聊表心意。',
        levels: [null, { cost: {iron: 5}, needPop: 0, powerUse: 0, produce: {'iron': 1}, produceInterval: 86400000, desc: '每日一铁' }] },
    ],
  },
  {
    manifest: { name: '硬核mod', version: '1.0', author: '官方', desc: '灾难翻倍，真正的硬汉模式。', spec: 1 },
  },
  {
    manifest: { name: '建筑师mod', version: '1.0', author: '官方', desc: '新增 3 种装饰建筑：花园/喷泉/雕塑。', spec: 1 },
    buildings: [
      { id: 'deco_garden', name: '花园', icon: '🌷', desc: '幸福度 +5。',
        levels: [null, { cost: {iron: 20}, needPop: 0, powerUse: 0, desc: '花园 Lv1' }] },
      { id: 'deco_fountain', name: '喷泉', icon: '⛲', desc: '幸福度 +8。',
        levels: [null, { cost: {iron: 40}, needPop: 0, powerUse: 1, desc: '喷泉 Lv1' }] },
      { id: 'deco_statue', name: '雕塑', icon: '🗿', desc: '幸福度 +12，城市评级 +1。',
        levels: [null, { cost: {steel: 30}, needPop: 0, powerUse: 0, desc: '雕塑 Lv1' }] },
    ],
  },
  {
    manifest: { name: '资源mod', version: '1.0', author: '官方', desc: '新增资源：木材（温室副产）。', spec: 1 },
    resources: [
      { id: 'wood', name: '木材', icon: '🪵', desc: '温室副产，可用于建造。', baseCap: 500 },
    ],
  },
  {
    manifest: { name: '科技mod', version: '1.0', author: '官方', desc: '新增 5 项趣味科技。', spec: 1 },
    techs: {
      't-mod-fun-1': { name: '彩虹外墙', icon: '🌈', branch: 'build', cost: 5, needs: [], desc: '建筑刷成彩虹色，幸福度 +5。', fx: {happyAdd: 5} },
      't-mod-fun-2': { name: '咖啡文化', icon: '☕', branch: 'surv', cost: 8, needs: [], desc: '咖啡普及，工作效率 +5%。', fx: {allProdMul: 1.05} },
      't-mod-fun-3': { name: '广场舞', icon: '💃', branch: 'surv', cost: 8, needs: [], desc: '全民健身，健康 +10。', fx: {healthAdd: 10} },
      't-mod-fun-4': { name: '快递无人机', icon: '🛸', branch: 'prod', cost: 12, needs: [], desc: '物流 +15%。', fx: {logisticsMul: 1.15} },
      't-mod-fun-5': { name: '摸鱼学', icon: '🐟', branch: 'surv', cost: 10, needs: [], desc: '劳逸结合，事故率 -20%。', fx: {accidentMul: 0.8} },
    },
  },
  {
    manifest: { name: '成就mod', version: '1.0', author: '官方', desc: '新增 10 个趣味成就。', spec: 1 },
    achievements: [
      { name: '第一桶金', icon: '🪙', desc: '拥有 1000 铁', cat: '财富' },
      { name: '暴发户', icon: '💰', desc: '拥有 10000 铁', cat: '财富' },
      { name: '守财奴', icon: '🏦', desc: '从不贸易', cat: '财富' },
      { name: '夜猫子', icon: '🦉', desc: '连续游戏 2 小时', cat: '毅力' },
      { name: '早起鸟', icon: '🐦', desc: '早上 6 点前上线', cat: '毅力' },
      { name: '建筑狂', icon: '🏗️', desc: '建造 500 栋建筑', cat: '建造' },
      { name: '拆迁队', icon: '🧨', desc: '拆除 100 栋建筑', cat: '建造' },
      { name: '和平使者', icon: '🕊️', desc: '从不宣战', cat: '外交' },
      { name: '灾难体质', icon: '🌪️', desc: '经历 20 种灾难', cat: '灾难' },
      { name: '欧皇', icon: '🍀', desc: '一次灾难都不遇（10 年）', cat: '运气' },
    ],
  },
  {
    manifest: { name: '灾难mod', version: '1.0', author: '官方', desc: '新增灾难：鸽子泛滥。', spec: 1 },
  },
  {
    manifest: { name: '奇观mod', version: '1.0', author: '官方', desc: '新增奇观：大图书馆。', spec: 1 },
  },
  {
    manifest: { name: '平衡mod', version: '1.0', author: '官方', desc: '采矿机产量 +50%，售价 -20% 趣味平衡。', spec: 1 },
  },
  {
    manifest: { name: '新手mod', version: '1.0', author: '官方', desc: '新手教程奖励翻倍。', spec: 1 },
  },
];

// ============ MOD 制作教程（20 步） ============
const MOD_TUTORIAL = [
  { step: 1, title: '认识 MOD', icon: '📖', desc: 'MOD 是一包自定义内容：建筑、资源、科技……不用写代码，填表格就行。' },
  { step: 2, title: ' manifest', icon: '📝', desc: '每个 MOD 都有 manifest：名字、版本、作者、一句话介绍。' },
  { step: 3, title: '第一栋建筑', icon: '🏠', desc: '从最简单的建筑开始：id 用英文，name 用中文，icon 用 emoji。' },
  { step: 4, title: '等级设计', icon: '⬆️', desc: 'levels[1] 是一级，至少做 1 级，最多 3 级。' },
  { step: 5, title: '成本平衡', icon: '⚖️', desc: 'cost 别太离谱，参考原版：居住舱 10 铁。' },
  { step: 6, title: '测试加载', icon: '🧪', desc: '在 MOD 管理器点「从对象加载」，看有没有报错。' },
  { step: 7, title: '看报错', icon: '🔍', desc: 'Validator 会告诉你哪一行错了，逐条改。' },
  { step: 8, title: '加资源', icon: '🪵', desc: '新资源记得设 baseCap（存储上限）。' },
  { step: 9, title: '加科技', icon: '🔬', desc: '科技要有 cost 和 branch，别忘了 needs 前置。' },
  { step: 10, title: '加成就', icon: '🏅', desc: '成就给玩家目标感，多做几个。' },
  { step: 11, title: '图标选择', icon: '🎨', desc: 'icon 用 emoji，直观又省事。' },
  { step: 12, title: '描述文案', icon: '✍️', desc: 'desc 写得有趣点，玩家会爱上你的 MOD。' },
  { step: 13, title: '版本号', icon: '🔢', desc: '每次更新涨版本号：1.0 → 1.1。' },
  { step: 14, title: '分享码', icon: '🔗', desc: '点「生成分享码」，发给朋友一键导入。' },
  { step: 15, title: '本地保存', icon: '💾', desc: 'MOD 自动存 localStorage，刷新不丢。' },
  { step: 16, title: '开关', icon: '🔛', desc: '不想用就关掉，不用删除。' },
  { step: 17, title: '冲突处理', icon: '⚠️', desc: 'id 别和原版重复，否则加载失败。' },
  { step: 18, title: '备份', icon: '📦', desc: '定期导出 JSON 备份，心血别丢了。' },
  { step: 19, title: '发布', icon: '🚀', desc: '分享码往群里一扔，你就是 MOD 作者了。' },
  { step: 20, title: '进阶', icon: '🧙', desc: '想做大 MOD？看看灾难和奇观字段，照葫芦画瓢。' },
];

// ============ MOD API 参考（字段说明） ============
const MOD_API_REF = [
  { field: 'manifest.name', type: 'string', required: '必填', desc: 'MOD 显示名称' },
  { field: 'manifest.version', type: 'string', required: '必填', desc: '版本号，推荐 1.0.0' },
  { field: 'manifest.author', type: 'string', required: '选填', desc: '作者名' },
  { field: 'manifest.desc', type: 'string', required: '选填', desc: '一句话介绍' },
  { field: 'manifest.spec', type: 'number', required: '必填', desc: '固定填 1' },
  { field: 'buildings[].id', type: 'string', required: '必填', desc: '英文小写+下划线，全局唯一' },
  { field: 'buildings[].name', type: 'string', required: '必填', desc: '中文名' },
  { field: 'buildings[].icon', type: 'string', required: '必填', desc: 'emoji' },
  { field: 'buildings[].desc', type: 'string', required: '必填', desc: '一句话介绍' },
  { field: 'buildings[].levels', type: 'array', required: '必填', desc: '等级数组' },
  { field: 'levels[].cost', type: 'object', required: '必填', desc: '如 iron10 steel5' },
  { field: 'levels[].needPop', type: 'number', required: '必填', desc: '需要人口数' },
  { field: 'levels[].powerUse', type: 'number', required: '选填', desc: '耗电' },
  { field: 'levels[].power', type: 'number', required: '选填', desc: '发电' },
  { field: 'levels[].popCap', type: 'number', required: '选填', desc: '人口上限' },
  { field: 'levels[].produce', type: 'object', required: '选填', desc: '自动生产' },
  { field: 'levels[].produceInterval', type: 'number', required: '选填', desc: '生产间隔毫秒' },
  { field: 'resources[].id', type: 'string', required: '必填', desc: '英文小写' },
  { field: 'resources[].baseCap', type: 'number', required: '必填', desc: '存储上限' },
  { field: 'techs[].cost', type: 'number', required: '必填', desc: '科技点花费' },
  { field: 'techs[].branch', type: 'string', required: '必填', desc: '四系选一' },
  { field: 'techs[].needs', type: 'array', required: '选填', desc: '前置科技' },
  { field: 'techs[].fx', type: 'object', required: '必填', desc: '效果键值' },
  { field: 'fx.buildCostMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.upgradeCostMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.habitatCapMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.minerMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.pumpMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.smelterMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.waterplantMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.greenhouseMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.solarMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.labMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.allProdMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.popGrowthMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.waterUseMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.foodUseMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.popCapAdd', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.sandstormMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.meteorMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.repairCostMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.tradeMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.agingMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.harvestBonus', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.launchCostMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.unlockNuclear', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.unlockDome', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.unlockTrade', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.unlockWeather', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.meteorImmune', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.healthAdd', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.happyAdd', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.lifeAdd', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.logisticsMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.buildSpeedMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.defenseAdd', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.policyMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.recycleMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.taxMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.tourismMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.nightProdMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.seasonResist', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.foodLossMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.accidentMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.capMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.autoProdMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.disasterMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.foresight', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.timeShield', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.parallelTech', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.decadeBoom', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.timeLoan', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.eraLeap', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.rewriteHistory', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.grandForesight', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.eternalVictory', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.reincarnation', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.secondCity', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.finalWonder', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.allResMul', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.omniscience', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.godMode', type: 'number', required: '效果键', desc: '科技效果键' },
  { field: 'fx.timeAnchor', type: 'number', required: '效果键', desc: '科技效果键' },
];
