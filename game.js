/* 星港 — game.js：主循环 / 输入 / UI / 存档
 * v1.1：集成科技树 / 灾难 / 物流 / 音效 / 教程 / 成就 / 统计 / 帮助
 */

const SAVE_KEY = 'starport-save-v1';
const GAME_VERSION = '1.8.0';
const GAME_CODENAME = '星海无垠';

// 版本历史：
// v1.0 - 基础循环：8资源/12建筑/人口/评级/胜利
// v1.1 - 交通/科技/灾难/音效/教程/成就/统计/帮助（5000行里程碑）
// v1.2 - 大地图50×50/铀矿/12新建筑/科技60/成就67（6582行）
// v1.3 - 外交/军事/政策/8军事建筑（10170行）
// v1.4 - 轨道站/深空/5奇观/科技100/成就127（15000行）
// v1.5 - 地下城/海洋/总督/战役/15新建筑/镜头缩放/科技140/成就177（25000行）
// v1.6 - 天空城/机器人革命/20新建筑/科技190/成就217（35000行）
// v1.7 - 量子/生物系统/科技250/成就277/5奇观（43000行）
// v1.8 - 25终极建筑/科技310/成就337/5奇观/第五胜利（50000行）

// 贸易配方：贸易站点击后可选
const TRADE_OFFERS = [
  { id: 't1', give: { iron: 20 }, get: { rare: 6 }, name: '铁矿→稀土' },
  { id: 't2', give: { ice: 20 }, get: { iron: 8 }, name: '冰水→铁矿' },
  { id: 't3', give: { steel: 10 }, get: { tech: 3 }, name: '钢材→科技' },
  { id: 't4', give: { food: 15 }, get: { water: 15 }, name: '食物→水' },
  { id: 't5', give: { rare: 10 }, get: { steel: 8 }, name: '稀土→钢材' },
  { id: 't6', give: { water: 30 }, get: { food: 20 }, name: '水→食物' },
  { id: 't7', give: { iron: 50 }, get: { steel: 12 }, name: '铁矿→钢材（大宗）' },
  { id: 't8', give: { tech: 5 }, get: { rare: 15 }, name: '科技→稀土' },
];

class Game {
  constructor() {
    this.map = new GameMap(50);  // v1.2：50×50 大地图
    this.player = new Player(this.map);
    this.builder = new BuildManager(this.map);
    this.pop = new Population();
    this.city = new City();
    // v1.1 新系统
    this.tech = new TechTree();
    this.disaster = new DisasterManager();
    this.logistics = new LogisticsManager();
    this.sound = new SoundManager();
    this.tutorial = new TutorialManager(this);
    this.stats = new StatsManager();
    this.tradeShip = new TradeShipManager();  // v1.2
    this.scenario = new ScenarioManager();  // v1.2
    this.achievements = new AchievementManager(this);
    this.help = new HelpManager(this);
    // v1.3 新系统
    this.diplomacy = new DiplomacyManager();
    this.military = new MilitaryManager();
    this.policy = new PolicyManager();
    this.disasters13 = new DisasterPack13();
    this._allyAidWave = -1;  // 已为哪一波袭击呼叫过盟友
    this._allyAidCalled = false;
    // v1.4 新系统（orbital 自集成，其余手动）
    this.deepSpace = new DeepSpaceManager();
    // v1.5 新系统（防御性实例化：类不存在时跳过，保证旧存档/缺文件不崩）
    this.camera = (typeof Camera !== 'undefined') ? new Camera(this.map.size) : null;
    this.underground = (typeof UndergroundManager !== 'undefined') ? new UndergroundManager() : null;
    this.ocean = (typeof OceanManager !== 'undefined') ? new OceanManager() : null;
    this.campaign = (typeof CampaignManager !== 'undefined') ? new CampaignManager() : null;
    // v1.6 新系统
    this.sky = (typeof SkyManager !== 'undefined') ? new SkyManager() : null;
    this.robots = (typeof RobotManager !== 'undefined') ? new RobotManager() : null;
    // v1.7 新系统
    this.quantum = (typeof QuantumManager !== 'undefined') ? new QuantumManager() : null;
    this.bio = (typeof BioManager !== 'undefined') ? new BioManager() : null;
    // v1.6-v1.8 内容合并
    try { if (typeof mergeBuildingsV16 === 'function') mergeBuildingsV16(); } catch (e) {}
    try { if (typeof mergeBuildingsV18 === 'function') mergeBuildingsV18(); } catch (e) {}
    try { if (typeof TECH_V16 !== 'undefined' && this.tech && this.tech.addBatch) this.tech.addBatch(TECH_V16); } catch (e) {}
    try { if (typeof TECH_V17 !== 'undefined' && this.tech && this.tech.addBatch) this.tech.addBatch(TECH_V17); } catch (e) {}
    try { if (typeof ACH_V16 !== 'undefined' && this.achievements && this.achievements.addBatch) this.achievements.addBatch(ACH_V16); } catch (e) {}
    try { if (typeof ACH_V17 !== 'undefined' && this.achievements && this.achievements.addBatch) this.achievements.addBatch(ACH_V17); } catch (e) {}
    // 总督需要回调，延迟到 bindInput 后初始化
    this.governor = null;
    // v1.5 内容包：合并建筑/科技/成就/灾难/奇观配置
    try { if (typeof mergeBuildingsV15 === 'function') mergeBuildingsV15(); } catch (e) {}
    try { if (typeof TECH_V15 !== 'undefined' && this.tech && this.tech.addBatch) this.tech.addBatch(TECH_V15); } catch (e) {}
    try { if (typeof ACH_V15 !== 'undefined' && this.achievements && this.achievements.addBatch) this.achievements.addBatch(ACH_V15); } catch (e) {}

    // 注入引用
    this.builder.techTree = this.tech;
    this.builder.disaster = this.disaster;
    this.pop.techTree = this.tech;

    this.selectedBuild = null;
    this.selectedBuilding = null;  // 已放置的建筑（用于升级）
    this.selectedTruck = null;     // 选中的运输车
    this.truckAssignMode = false;  // 运输车指派模式

    this.canvas = document.getElementById('map');
    this.ctx = this.canvas.getContext('2d');
    // 画布按地图尺寸自适应
    this.tile = Math.floor(this.canvas.width / this.map.size);

    this.toastTimer = null;
    this.winShown = false;
    this._tutorialMoved = false;
    this._lastNeedWarn = 0;
    this._lastStorageWarn = 0;
    // 游戏速度：1x / 2x / 暂停
    this.speedMode = 1; // 1=正常，2=双倍，0=暂停
    this._accumDt = 0;
    // 建造预览位置
    this.hoverTile = null;
    this.canvas.addEventListener('mousemove', (e) => {
      const { x, y } = this.canvasPos(e);
      this.hoverTile = this.map.inBounds(x, y) ? { x, y } : null;
    });
    this.canvas.addEventListener('mouseleave', () => { this.hoverTile = null; });

    // 灾难事件 → UI/音效
    this.disaster.onEvent = (type, data) => this.onDisaster(type, data);

    this.bindInput();
    this.bindUI();
    this.tutorial.bindUI();
    this.help.bindUI();
    // v1.3 系统 UI
    if (this.diplomacy && this.diplomacy.bindUI) this.diplomacy.bindUI(this);
    if (this.military && this.military.bindUI) this.military.bindUI(this);
    if (this.policy && this.policy.bindUI) this.policy.bindUI(this);
    // v1.4
    if (this.deepSpace && this.deepSpace.bindUI) this.deepSpace.bindUI(this);
    // v1.5：总督（需要建造回调）
    try {
      if (typeof GovernorManager !== 'undefined') {
        this.governor = new GovernorManager({
          canBuild: (id, x, y) => {
            const chk = this.builder.canPlace(id, x, y, this.player.inv, this.pop.count);
            return chk.ok;
          },
          doBuild: (id, x, y) => {
            const chk = this.builder.canPlace(id, x, y, this.player.inv, this.pop.count);
            if (chk.ok) this.builder.place(id, x, y, this.player.inv);
            return chk.ok;
          },
          getState: () => ({ buildings: this.builder.buildings, inv: this.player.inv, pop: this.pop.count }),
        });
      }
    } catch (e) {}
    // v1.5：UI 集成
    try {
      if (typeof registerV15Resources === 'function') registerV15Resources();
      if (this.player && this.player.inv && typeof v15NewInventorySlots === 'function') v15NewInventorySlots(this.player.inv);
    } catch (e) {}
    try {
      if (typeof V15UIManager !== 'undefined') {
        this.v15ui = new V15UIManager(this);
        if (typeof injectV15CSS === 'function') injectV15CSS();
      }
    } catch (e) {}
    try {
      if (typeof mergeV15Content === 'function') mergeV15Content(this);
    } catch (e) {}
    // v1.5：镜头手势绑定
    try {
      if (this.camera && typeof bindCameraGestures === 'function') {
        this._detachCam = bindCameraGestures(this.canvas, this.camera, {
          onTap: (tx, ty, e) => this.onCameraTap(tx, ty, e),
          onZoom: () => this.updateZoomUI(),
        });
      }
    } catch (e) {}
    // content_v14 可选接入（防御性）
    try { if (typeof StargateVictory !== 'undefined' && StargateVictory.attach) StargateVictory.attach(this); } catch (e) {}
    try { if (typeof OrbitalHazards !== 'undefined') { this.orbitalHazards = new OrbitalHazards(); if (this.orbitalHazards.attach) this.orbitalHazards.attach(this); } } catch (e) {}
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
    this.lastFrame = Date.now();

    // 自动存档每 30 秒
    setInterval(() => this.save(), 30000);
  }

  // ---------- 存档 ----------
  save() {
    try {
      const data = {
        inv: this.player.inv,
        pop: this.pop.count,
        buildings: this.builder.buildings,
        sectors: this.map.sectors,
        won: this.city.won,
        tech: this.tech.serialize(),
        disaster: this.disaster.serialize(Date.now()),
        trucks: this.logistics.serialize(),
        stats: this.stats.serialize(),
        // v1.3
        diplomacy: this.diplomacy ? this.diplomacy.save() : null,
        military: this.military ? this.military.save() : null,
        policy: this.policy ? this.policy.save() : null,
        disasters13: this.disasters13 ? this.disasters13.save() : null,
        // v1.4
        deepSpace: this.deepSpace ? this.deepSpace.save() : null,
        orbitalHazards: this.orbitalHazards ? this.orbitalHazards.save() : null,
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    } catch (e) { /* 忽略 */ }
  }

  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      this.player.inv = Object.assign(newInventory(), data.inv);
      this.pop.count = data.pop || POP_START;
      this.builder.buildings = data.buildings || [];
      for (const b of this.builder.buildings) {
        b.lastProduce = Date.now();
        if (!b.builtAt) b.builtAt = Date.now();
      }
      if (data.sectors) this.map.sectors = data.sectors;
      this.city.won = !!data.won;
      if (this.city.won) this.winShown = true;
      if (data.tech) this.tech.deserialize(data.tech);
      if (data.disaster) this.disaster.deserialize(data.disaster, Date.now());
      if (data.trucks) this.logistics.deserialize(data.trucks, this.map, this.builder);
      if (data.stats) this.stats.deserialize(data.stats);
      // v1.3
      if (data.diplomacy && this.diplomacy) this.diplomacy.load(data.diplomacy, this);
      if (data.military && this.military) this.military.load(data.military);
      if (data.policy && this.policy) this.policy.load(data.policy);
      if (data.disasters13 && this.disasters13) this.disasters13.load(data.disasters13);
      // v1.4
      if (data.deepSpace && this.deepSpace) this.deepSpace.load(data.deepSpace);
      if (data.orbitalHazards && this.orbitalHazards) this.orbitalHazards.load(data.orbitalHazards);
      return true;
    } catch (e) { return false; }
  }

  reset() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
    location.reload();
  }

  // ---------- 灾难事件 ----------
  onDisaster(type, data) {
    const now = Date.now();
    switch (type) {
      case 'sandstorm-warn':
        this.toast(`⛈️ 沙尘暴预警！${Math.round(data.warnMs / 1000)}秒后到达，太阳能减产`);
        this.sound.meteorWarn();
        break;
      case 'sandstorm-start':
        this.toast('⛈️ 沙尘暴来了！太阳能 -50%');
        this.sound.sandstorm();
        break;
      case 'sandstorm-end':
        this.toast('🌤️ 沙尘暴过去了');
        this.sound.calm();
        break;
      case 'meteor-warn':
        this.toast(`☄️ 陨石预警！${Math.round(data.warnMs / 1000)}秒后撞击 (${data.x},${data.y})`);
        this.sound.meteorWarn();
        this._meteorMark = { x: data.x, y: data.y, until: now + data.warnMs };
        break;
      case 'meteor-hit':
        this.toast(`💥 陨石击中了${BUILDINGS[data.building].name}！需要维修`);
        this.sound.meteorHit();
        this._meteorMark = null;
        break;
      case 'meteor-immune':
        this.toast('🛡️ 坚固结构挡住了陨石！');
        this.sound.calm();
        this._meteorMark = null;
        break;
      case 'meteor-dodge':
        this.toast('🍀 应急协议生效，陨石偏离了！');
        this._meteorMark = null;
        break;
      case 'meteor-miss':
        this.toast('☄️ 陨石砸在了空地上，有惊无险');
        this._meteorMark = null;
        break;
      case 'flare-warn':
        this.toast(`🌞 太阳风暴预警！${Math.round(data.warnMs / 1000)}秒后到达，电子设备将停工`);
        this.sound.meteorWarn();
        break;
      case 'flare-start':
        this.toast('🌞 太阳风暴！实验室/指挥中心/气象站停工');
        this.sound.sandstorm();
        break;
      case 'flare-end':
        this.toast('🌤️ 太阳风暴过去了，设备恢复');
        this.sound.calm();
        break;
      case 'devil-warn':
        this.toast(`🌪️ 尘卷风预警！${Math.round(data.warnMs / 1000)}秒后登陆`);
        this.sound.meteorWarn();
        break;
      case 'devil-start':
        this.toast('🌪️ 尘卷风登陆！路径上的太阳能板失效');
        this.sound.sandstorm();
        break;
      case 'devil-end':
        this.toast('🌤️ 尘卷风消散了');
        this.sound.calm();
        break;
      // v1.2：新灾难
      case 'flare2-warn':
        this.toast(`☀️ 太阳耀斑预警！${Math.round(data.warnMs / 1000)}秒后爆发，将烧毁一栋电子建筑！`);
        this.sound.meteorWarn();
        break;
      case 'flare2-hit':
        this.toast(`🔥 太阳耀斑烧毁了${BUILDINGS[data.building].name}！`);
        this.sound.meteorHit();
        break;
      case 'flare2-miss':
        this.toast('☀️ 太阳耀斑掠过，没有建筑受损');
        this.sound.calm();
        break;
      case 'icestorm-warn':
        this.toast(`❄️ 冰尘暴预警！${Math.round(data.warnMs / 1000)}秒后到达，温室/水厂减产`);
        this.sound.meteorWarn();
        break;
      case 'icestorm-start':
        this.toast('❄️ 冰尘暴！温室 -80%，水厂 -50%');
        this.sound.sandstorm();
        break;
      case 'icestorm-end':
        this.toast('🌤️ 冰尘暴过去了');
        this.sound.calm();
        break;
      case 'volcano-warn':
        this.toast(`🌋 火山喷发预警！${Math.round(data.warnMs / 1000)}秒后喷发 (${data.x},${data.y})`);
        this.sound.meteorWarn();
        break;
      case 'volcano-erupt':
        this.toast(`🌋 火山喷发！${data.hitCount}栋建筑受损，周围出现新的稀土`);
        this.sound.meteorHit();
        break;
      case 'revolt-start':
        this.toast('⚠️ 食物/水短缺引发叛乱！生产 -50%，持续60秒');
        this.sound.meteorWarn();
        break;
      case 'revolt-end':
        this.toast(`⚠️ 叛乱平息，损失了${data.loss}人口`);
        this.sound.calm();
        break;
      case 'aifault-warn':
        this.toast(`🤖 AI故障预警！${Math.round(data.warnMs / 1000)}秒后自动化系统停机`);
        this.sound.meteorWarn();
        break;
      case 'aifault-start':
        this.toast('🤖 AI故障！采矿机/抽水机/铀矿机停机45秒');
        this.sound.sandstorm();
        break;
      case 'aifault-end':
        this.toast('✅ AI系统恢复');
        this.sound.calm();
        break;
    }
    this.updateHUD();
  }

  // ---------- 输入 ----------
  canvasPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    const t = (e.touches && e.touches[0]) || e;
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    return {
      x: Math.floor((t.clientX - rect.left) * scaleX / this.tile),
      y: Math.floor((t.clientY - rect.top) * scaleY / this.tile),
    };
  }

  bindInput() {
    const onTap = (e) => {
      e.preventDefault();
      this.sound.ensure(); // 解锁音频
      const { x, y } = this.canvasPos(e);
      if (!this.map.inBounds(x, y)) return;
      this._tutorialMoved = true;

      // 运输车指派模式：点资源点
      if (this.truckAssignMode && this.selectedTruck) {
        const r = this.logistics.assignTruck(this.selectedTruck, x, y, this.map, this.builder);
        if (r.ok) {
          this.toast(`🚚 运输车出发！自动采集${RES_DEFS[this.map.resource[y][x]].name}`);
          this.sound.truck();
        } else {
          this.toast(r.reason);
          this.sound.error();
        }
        this.truckAssignMode = false;
        this.updateTruckUI();
        return;
      }

      // 建造模式
      if (this.selectedBuild) {
        const chk = this.builder.canPlace(this.selectedBuild, x, y, this.player.inv, this.pop.count);
        if (!chk.ok) { this.toast(chk.reason); this.sound.error(); return; }
        this.builder.place(this.selectedBuild, x, y, this.player.inv);
        this.toast(`${BUILDINGS[this.selectedBuild].icon} ${BUILDINGS[this.selectedBuild].name} 建造完成`);
        this.sound.build();
        this.stats.record('build');
        this.selectBuild(null);
        this.updateHUD();
        this.save();
        return;
      }

      // 点已有建筑 → 显示信息 + 升级/维修/特殊选项
      const b = this.builder.at(x, y);
      if (b) {
        this.selectedBuilding = b;
        this.showBuildingPanel(b);
        this.sound.click();
        return;
      }
      this.selectedBuilding = null;
      this.hideBuildingPanel();

      // 点扇区（迷雾）→ 解锁
      if (!this.map.isUnlocked(x, y)) {
        const { sx, sy } = this.map.sectorOf(x, y);
        const r = this.map.unlockSector(sx, sy, this.player.inv);
        this.toast(r.ok ? `扇区 (${sx},${sy}) 解锁！` : r.reason);
        if (r.ok) { this.updateHUD(); this.save(); this.sound.upgrade(); }
        else this.sound.error();
        return;
      }

      // 否则移动
      this.player.setTarget(x, y);
    };
    // v1.9-fix：画布点按统一走镜头手势系统（bindCameraGestures → onCameraTap，
    // 带 44px 容错）。镜头手势绑定成功时不再绑 click/touchstart，避免移动端一次
    // 点按触发 2-3 次（touchstart→旧onTap、pointerup→onCameraTap、click→旧onTap），
    // 导致解锁扇区先成功 toast 紧接着"已解锁"报错等重复执行问题。
    // 桌面端点按同样走 pointer 事件。若镜头绑定失败则回退到旧处理器。
    if (!this._detachCam) {
      this.canvas.addEventListener('click', onTap);
      this.canvas.addEventListener('touchstart', onTap, { passive: false });
    }
    this._canvasTapHandler = onTap; // 保留引用供调试/测试
    const keys = {
      w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0],
      arrowup: [0, -1], arrowdown: [0, 1], arrowleft: [-1, 0], arrowright: [1, 0],
    };
    document.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (keys[k]) { e.preventDefault(); this.player.step(keys[k][0], keys[k][1]); this._tutorialMoved = true; }
      if (k === 'e' || k === ' ') { e.preventDefault(); this.doHarvest(); }
      if (k === 'escape') { this.selectBuild(null); this.hideBuildingPanel(); this.hideTechPanel(); }
      // 快捷键：T 科技，R 运输车，H 帮助，M 成就，N 统计，P 暂停/继续
      if (k === 't') this.toggleTechPanel();
      if (k === 'r') this.toggleTruckPanel();
      if (k === 'h') { this.help.toggle(); this._helpOpened = true; }
      if (k === 'm') this.toggleAchievePanel();
      if (k === 'n') this.toggleStatsPanel();
      if (k === 'p') {
        this.speedMode = this.speedMode === 0 ? 1 : 0;
        const speedBtn = document.getElementById('btn-speed');
        const labels = { 0: '⏸️<small>暂停</small>', 1: '⏩<small>1x</small>', 2: '⏩⏩<small>2x</small>' };
        if (speedBtn) speedBtn.innerHTML = labels[this.speedMode];
      }
      // 数字键 1-9 快速选择建筑
      const numKeys = ['habitat', 'solar', 'miner', 'pump', 'smelter', 'greenhouse', 'waterplant', 'lab', 'road'];
      if (k >= '1' && k <= '9') {
        const idx = parseInt(k) - 1;
        if (numKeys[idx]) {
          this.hideBuildingPanel();
          this.selectBuild(this.selectedBuild === numKeys[idx] ? null : numKeys[idx]);
          this.sound.click();
        }
      }
    });
  }

  // v1.5：镜头点按（带 44px 容错）
  onCameraTap(tx, ty, e) {
    this.sound.ensure();
    const tilePx = this.camera ? this.camera.tilePx(this.canvas.width) : this.tile;
    const radiusTiles = Math.max(1.5, 44 / tilePx);
    let fx = Math.floor(tx), fy = Math.floor(ty);
    if (typeof findNearestInteractable === 'function') {
      const near = findNearestInteractable(tx, ty, radiusTiles, this.map, this.builder);
      if (near) { fx = near.x; fy = near.y; }
    }
    if (!this.map.inBounds(fx, fy)) return;
    this._tutorialMoved = true;
    this._handleTileTap(fx, fy);
  }

  // v1.5：格点按核心逻辑（供镜头/普通点击复用）
  _handleTileTap(x, y) {
    if (this.truckAssignMode && this.selectedTruck) {
      const r = this.logistics.assignTruck(this.selectedTruck, x, y, this.map, this.builder);
      if (r.ok) {
        this.toast(`\u{1F69A} 运输车出发！`);
        this.sound.truck();
      } else { this.toast(r.reason); this.sound.error(); }
      this.truckAssignMode = false;
      this.updateTruckUI();
      return;
    }
    if (this.selectedBuild) {
      const chk = this.builder.canPlace(this.selectedBuild, x, y, this.player.inv, this.pop.count);
      if (!chk.ok) { this.toast(chk.reason); this.sound.error(); return; }
      this.builder.place(this.selectedBuild, x, y, this.player.inv);
      this.sound.build();
      this.stats.record('build');
      this.selectBuild(null);
      this.updateHUD();
      this.save();
      return;
    }
    const b = this.builder.at(x, y);
    if (b) {
      this.selectedBuilding = b;
      this.showBuildingPanel(b);
      this.sound.click();
      return;
    }
    this.selectedBuilding = null;
    this.hideBuildingPanel();
    if (!this.map.isUnlocked(x, y)) {
      const { sx, sy } = this.map.sectorOf(x, y);
      const r = this.map.unlockSector(sx, sy, this.player.inv);
      this.toast(r.ok ? `扇区解锁！` : r.reason);
      if (r.ok) { this.updateHUD(); this.save(); this.sound.upgrade(); }
      else this.sound.error();
      return;
    }
    this.player.setTarget(x, y);
  }

  // v1.5：更新缩放按钮 UI
  updateZoomUI() {
    const el = document.getElementById('zoom-level');
    if (el && this.camera) el.textContent = this.camera.zoom + 'x';
  }

  bindUI() {
    // v1.5：镜头缩放按钮
    const zi = document.getElementById('zoom-in');
    if (zi) zi.addEventListener('click', () => { if (this.camera && this.camera.zoomIn()) { this.updateZoomUI(); this.sound.click(); } });
    const zo = document.getElementById('zoom-out');
    if (zo) zo.addEventListener('click', () => { if (this.camera && this.camera.zoomOut()) { this.updateZoomUI(); this.sound.click(); } });
    const zr = document.getElementById('zoom-reset');
    if (zr) zr.addEventListener('click', () => { if (this.camera) { this.camera.reset(); this.updateZoomUI(); this.sound.click(); } });
    try { if (this.v15ui) this.v15ui.bindMenu(); } catch (e) {}
    document.getElementById('btn-harvest').addEventListener('click', () => this.doHarvest());
    for (const btn of document.querySelectorAll('[data-build]')) {
      btn.addEventListener('click', () => {
        const id = btn.dataset.build;
        // 科技锁定检查
        const lv = BUILDINGS[id].levels[1];
        if (lv.needTech && !this.tech.buildingUnlocked(id)) {
          this.toast(`🔒 需要科技解锁（科技树→${id === 'nuclear' ? '生产系' : id === 'dome' ? '建造/生存系' : id === 'trade' ? '生存系' : '生存系'}）`);
          this.sound.error();
          return;
        }
        this.hideBuildingPanel();
        this.selectBuild(this.selectedBuild === id ? null : id);
        this.sound.click();
      });
    }
    document.getElementById('btn-upgrade').addEventListener('click', () => this.doUpgrade());
    document.getElementById('btn-repair').addEventListener('click', () => this.doRepair());
    document.getElementById('btn-demolish').addEventListener('click', () => this.doDemolish());
    document.getElementById('btn-close-panel').addEventListener('click', () => this.hideBuildingPanel());
    document.getElementById('btn-reset').addEventListener('click', () => {
      if (confirm('重开？存档会清空！')) this.reset();
    });
    // 科技树
    document.getElementById('btn-tech').addEventListener('click', () => {
      this.toggleTechPanel();
      this.sound.click();
    });
    document.getElementById('btn-close-tech').addEventListener('click', () => this.hideTechPanel());
    // 音效开关
    const sndBtn = document.getElementById('btn-sound');
    const refreshSnd = () => { sndBtn.textContent = this.sound.enabled ? '🔊' : '🔇'; };
    sndBtn.addEventListener('click', () => {
      this.sound.toggle();
      refreshSnd();
      this.sound.click();
    });
    refreshSnd();
    // 运输车
    document.getElementById('btn-truck').addEventListener('click', () => this.toggleTruckPanel());
    document.getElementById('btn-close-truck').addEventListener('click', () => this.hideTruckPanel());
    document.getElementById('btn-build-truck').addEventListener('click', () => this.doBuildTruck());
    // 贸易
    document.getElementById('btn-close-trade').addEventListener('click', () => this.hideTradePanel());
    // 成就
    document.getElementById('btn-achieve').addEventListener('click', () => {
      this.toggleAchievePanel();
      this.sound.click();
    });
    document.getElementById('btn-close-achieve').addEventListener('click', () => this.hideAchievePanel());
    // 统计
    document.getElementById('btn-stats').addEventListener('click', () => {
      this.toggleStatsPanel();
      this.sound.click();
    });
    document.getElementById('btn-close-stats').addEventListener('click', () => this.hideStatsPanel());
    // 帮助
    document.getElementById('btn-help').addEventListener('click', () => {
      this.help.toggle();
      this._helpOpened = true;
      this.sound.click();
    });
    // 版本号显示（点击城市评级）
    document.getElementById('city-rank').addEventListener('click', () => {
      this.toast(`🚀 星港 Starport v${GAME_VERSION}「${GAME_CODENAME}」`);
      this.sound.click();
    });
    document.getElementById('city-rank').style.cursor = 'pointer';
    // 速度控制
    const speedBtn = document.getElementById('btn-speed');
    const speedLabels = { 0: '⏸️<small>暂停</small>', 1: '⏩<small>1x</small>', 2: '⏩⏩<small>2x</small>' };
    speedBtn.addEventListener('click', () => {
      this.speedMode = this.speedMode === 1 ? 2 : (this.speedMode === 2 ? 0 : 1);
      speedBtn.innerHTML = speedLabels[this.speedMode];
      this.toast(this.speedMode === 0 ? '⏸️ 已暂停' : this.speedMode === 2 ? '⏩⏩ 双倍速' : '⏩ 正常速度');
      this.sound.click();
    });
    // 胜利继续
    const contBtn = document.getElementById('btn-continue');
    if (contBtn) {
      contBtn.addEventListener('click', () => {
        document.getElementById('victory').classList.add('hidden');
        this.sound.click();
      });
    }
  }

  selectBuild(id) {
    this.selectedBuild = id;
    for (const btn of document.querySelectorAll('[data-build]')) {
      btn.classList.toggle('selected', btn.dataset.build === id);
    }
    const info = document.getElementById('build-info');
    if (id) {
      const d = BUILDINGS[id];
      const lv = d.levels[1];
      const cost = this.builder.effCost(lv.cost, false);
      const costStr = Object.entries(cost).map(([k, v]) => `${RES_DEFS[k].icon}${v}`).join(' ');
      let lock = '';
      if (lv.needTech && !this.tech.buildingUnlocked(id)) lock = ' 🔒需科技';
      info.innerHTML = `<b>${d.icon} ${d.name}</b>　${d.desc}　<span style="opacity:.7">${costStr}｜点空地放置${lock}</span>`;
      info.classList.remove('hidden');
    } else {
      info.classList.add('hidden');
    }
  }

  showBuildingPanel(b) {
    const panel = document.getElementById('building-panel');
    document.getElementById('bp-title').textContent =
      `${BUILDINGS[b.id].icon} ${BUILDINGS[b.id].name} Lv${b.level}`;
    document.getElementById('bp-desc').textContent = this.builder.describe(b);
    // 升级按钮
    const upBtn = document.getElementById('btn-upgrade');
    const chk = this.builder.canUpgrade(b, this.player.inv, this.pop.count);
    upBtn.disabled = !chk.ok;
    upBtn.textContent = chk.ok
      ? `⬆️ 升级 (Lv${b.level + 1})`
      : `⬆️ ${chk.reason}`;
    // 维修按钮
    const rpBtn = document.getElementById('btn-repair');
    const rchk = this.builder.canRepair(b, this.player.inv);
    rpBtn.style.display = (b.damaged || this.builder.agingEff(b) < 0.99) ? '' : 'none';
    rpBtn.disabled = !rchk.ok;
    rpBtn.textContent = rchk.ok ? `🔧 维修` : `🔧 ${rchk.reason}`;
    // 特殊：运输站 → 造车按钮；贸易站 → 交易按钮
    const extraBtn = document.getElementById('btn-building-extra');
    extraBtn.style.display = 'none';
    if (b.id === 'depot') {
      extraBtn.style.display = '';
      extraBtn.textContent = `🚚 造运输车 (铁×20 稀土×10)`;
      extraBtn.onclick = () => this.doBuildTruckAt(b);
    } else if (b.id === 'trade') {
      extraBtn.style.display = '';
      extraBtn.textContent = `🤝 打开交易`;
      extraBtn.onclick = () => this.showTradePanel();
    }
    panel.classList.remove('hidden');
  }

  hideBuildingPanel() {
    document.getElementById('building-panel').classList.add('hidden');
    this.selectedBuilding = null;
  }

  doUpgrade() {
    const b = this.selectedBuilding;
    if (!b) return;
    const chk = this.builder.canUpgrade(b, this.player.inv, this.pop.count);
    if (!chk.ok) { this.toast(chk.reason); this.sound.error(); return; }
    this.builder.upgrade(b, this.player.inv);
    this.toast(`${BUILDINGS[b.id].icon} 升到 Lv${b.level}！`);
    this.sound.upgrade();
    this.stats.record('upgrade');
    this.showBuildingPanel(b);
    this.updateHUD();
    this.save();
  }

  doRepair() {
    const b = this.selectedBuilding;
    if (!b) return;
    const chk = this.builder.canRepair(b, this.player.inv);
    if (!chk.ok) { this.toast(chk.reason); this.sound.error(); return; }
    this.builder.repair(b, this.player.inv);
    this.toast(`🔧 ${BUILDINGS[b.id].name} 维修完成！`);
    this.sound.repair();
    this.stats.record('repair', { wasMeteor: b.damaged });
    this.showBuildingPanel(b);
    this.updateHUD();
    this.save();
  }

  doDemolish() {
    const b = this.selectedBuilding;
    if (!b) return;
    const def = BUILDINGS[b.id];
    if (!confirm(`拆除${def.icon}${def.name} Lv${b.level}？返还 50% 建造成本。`)) return;
    const refund = this.builder.demolish(b, this.player.inv);
    if (refund) {
      const refundStr = Object.entries(refund).map(([k, v]) => `${RES_DEFS[k].icon}${v}`).join(' ');
      this.toast(`💥 已拆除，返还 ${refundStr}`);
      this.sound.demolish();
      this.stats.record('demolish');
      this.hideBuildingPanel();
      this.updateHUD();
      this.save();
    }
  }

  doHarvest() {
    const res = this.player.tryHarvest(Date.now());
    if (res) {
      // 科技：采集加成（tryHarvest 已加基础，这里补加成部分）
      const bonus = this.tech.sum('harvestBonus');
      if (bonus > 0) {
        this.player.inv[res] = (this.player.inv[res] || 0) + bonus;
      }
      const yield_ = this.player.HARVEST_YIELD + bonus;
      this.toast(`+${yield_} ${RES_DEFS[res].name}`);
      this.sound.harvest();
      this.stats.record('harvest', { amount: yield_ });
      this.updateHUD();
    } else if (!this.player.canHarvest()) {
      this.toast('这里没有资源，走到发光的格子上去');
    }
  }

  // ---------- 科技树 UI ----------
  toggleTechPanel() {
    const el = document.getElementById('tech-panel');
    if (el.classList.contains('hidden')) this.showTechPanel();
    else this.hideTechPanel();
  }

  showTechPanel() {
    this.renderTechTree();
    document.getElementById('tech-panel').classList.remove('hidden');
  }

  hideTechPanel() {
    document.getElementById('tech-panel').classList.add('hidden');
  }

  renderTechTree() {
    const wrap = document.getElementById('tech-tree');
    const counts = this.tech.countByBranch();
    let html = `<div class="tech-stats">已解锁 ${this.tech.totalUnlocked()}/30 ｜ ` +
      `🏗️${counts.build} ⚙️${counts.prod} 💚${counts.surv} ｜ 🔬科技点：${this.player.inv.tech || 0}</div>`;
    for (const branch of ['build', 'prod', 'surv']) {
      const b = TECH_BRANCHES[branch];
      html += `<div class="tech-branch"><div class="tech-branch-title" style="color:${b.color}">${b.icon} ${b.name}系</div><div class="tech-grid">`;
      for (const id of TECH_ORDER) {
        const def = TECH_DEFS[id];
        if (def.branch !== branch) continue;
        const unlocked = this.tech.has(id);
        const chk = this.tech.canUnlock(id, this.player.inv.tech || 0);
        const cls = unlocked ? 'unlocked' : (chk.ok ? 'available' : 'locked');
        const needs = def.needs.map(n => TECH_DEFS[n].name).join('、');
        html += `<div class="tech-card ${cls}" data-tech="${id}" title="${def.desc}">` +
          `<div class="tech-icon">${def.icon}</div>` +
          `<div class="tech-name">${def.name}</div>` +
          `<div class="tech-cost">🔬${def.cost}</div>` +
          (unlocked ? `<div class="tech-state">✅</div>` :
            chk.ok ? `<div class="tech-state">可解锁</div>` :
            `<div class="tech-state">${def.needs.length ? '需:' + needs : chk.reason}</div>`) +
          `</div>`;
      }
      html += `</div></div>`;
    }
    wrap.innerHTML = html;
    // 绑定点击
    for (const card of wrap.querySelectorAll('[data-tech]')) {
      card.addEventListener('click', () => {
        const id = card.dataset.tech;
        const chk = this.tech.canUnlock(id, this.player.inv.tech || 0);
        if (!chk.ok) { this.toast(chk.reason); this.sound.error(); return; }
        this.tech.unlock(id, this.player.inv);
        this.toast(`${TECH_DEFS[id].icon} 解锁「${TECH_DEFS[id].name}」！`);
        this.sound.tech();
        this.stats.record('tech');
        this.renderTechTree();
        this.updateHUD();
        this.save();
      });
    }
  }

  // ---------- 运输车 UI ----------
  toggleTruckPanel() {
    const el = document.getElementById('truck-panel');
    if (el.classList.contains('hidden')) this.showTruckPanel();
    else this.hideTruckPanel();
  }

  showTruckPanel() {
    this.updateTruckUI();
    document.getElementById('truck-panel').classList.remove('hidden');
  }

  hideTruckPanel() {
    document.getElementById('truck-panel').classList.add('hidden');
    this.truckAssignMode = false;
  }

  updateTruckUI() {
    const cap = this.logistics.truckCap(this.builder);
    const list = document.getElementById('truck-list');
    let html = `<div class="truck-stats">🚚 ${this.logistics.trucks.length}/${cap} ｜ ` +
      `运输站×${this.builder.count('depot')} 物流中心×${this.builder.count('logistics')}</div>`;
    if (this.logistics.trucks.length === 0) {
      html += `<div style="opacity:.6;font-size:13px">还没有运输车。建造「运输站」后点击「造车」。</div>`;
    }
    this.logistics.trucks.forEach((t, i) => {
      const stateName = { idle: '待命', toRes: '去采集…', loading: '装货…', toDepot: '返程…' }[t.state] || t.state;
      const resName = t.resType ? RES_DEFS[t.resType].name : '—';
      html += `<div class="truck-row">` +
        `<span>🚚 #${t.id}（${stateName}·${resName}）</span>` +
        `<button data-truck-assign="${i}">指派</button>` +
        `</div>`;
    });
    list.innerHTML = html;
    for (const btn of list.querySelectorAll('[data-truck-assign]')) {
      btn.addEventListener('click', () => {
        const t = this.logistics.trucks[+btn.dataset.truckAssign];
        if (!t) return;
        this.selectedTruck = t;
        this.truckAssignMode = true;
        this.hideTruckPanel();
        this.toast('👆 点击地图上的资源点，指派运输车');
        this.sound.click();
      });
    }
    document.getElementById('btn-build-truck').disabled =
      this.logistics.trucks.length >= cap || this.builder.count('depot') === 0;
  }

  doBuildTruck() {
    // 找一座运输站
    const depot = this.builder.buildings.find(b => b.id === 'depot');
    if (!depot) { this.toast('先建造运输站！'); this.sound.error(); return; }
    this.doBuildTruckAt(depot);
  }

  doBuildTruckAt(depot) {
    const cap = this.logistics.truckCap(this.builder);
    if (this.logistics.trucks.length >= cap) {
      this.toast('运输车已达上限（建更多运输站/物流中心）');
      this.sound.error();
      return;
    }
    const r = this.logistics.buildTruck(depot, this.player.inv);
    if (!r.ok) { this.toast(r.reason); this.sound.error(); return; }
    this.toast('🚚 运输车建造完成！去指派它采集资源');
    this.sound.build();
    this.stats.record('truck');
    this.updateHUD();
    this.updateTruckUI();
    this.save();
  }

  // ---------- 贸易 UI ----------
  // v1.2：合并基础配方 + v1.2 配方（含动态价格）
  allTradeOffers() {
    const base = TRADE_OFFERS.map(o => ({ ...o, dyn: false }));
    const v12 = (typeof TRADE_OFFERS_V12 !== 'undefined' ? TRADE_OFFERS_V12 : [])
      .map(o => ({ ...o, dyn: true }));
    return [...base, ...v12];
  }

  showTradePanel() {
    const wrap = document.getElementById('trade-list');
    const tradeMul = this.tech.mul('tradeMul');
    const priceMul = this.tech.mul('tradePriceMul');  // v1.2：星际通讯
    // v1.2：贸易船停靠时价格 +10%
    const shipBonus = (this.tradeShip && this.tradeShip.shipDocked(Date.now())) ? 1.1 : 1;
    let html = '';
    // 贸易船状态
    if (this.tradeShip) {
      const now = Date.now();
      if (this.tradeShip.shipDocked(now)) {
        html += `<div class="trade-ship">🛸 贸易船停靠中！剩余${this.tradeShip.dockTimeLeft(now)}秒，价格+10%</div>`;
      } else if (this.tradeShip.shipWarning(now)) {
        html += `<div class="trade-ship">🛸 贸易船接近中…</div>`;
      }
    }
    for (const offer of this.allTradeOffers()) {
      const giveStr = Object.entries(offer.give).map(([k, v]) => `${RES_DEFS[k].icon}${v}`).join('');
      let getEntries, trendTxt = '';
      if (offer.dyn && this.tradeShip) {
        // v1.2：动态价格
        const calc = this.tradeShip.priceEngine.calcOffer(offer, this.player.inv, tradeMul * priceMul * shipBonus);
        getEntries = Object.entries(calc.get).map(([k, v]) => `${RES_DEFS[k].icon}${v}`).join('');
        trendTxt = ` <small>${this.tradeShip.priceEngine.trendText(calc.rate)}</small>`;
        offer._calcGet = calc.get;  // 暂存实际获得量
      } else {
        getEntries = Object.entries(offer.get).map(([k, v]) => {
          const bv = Math.floor(v * tradeMul * priceMul * shipBonus);
          return `${RES_DEFS[k].icon}${bv}`;
        }).join('');
      }
      const ok = canAfford(this.player.inv, offer.give);
      html += `<div class="trade-row">` +
        `<span>${giveStr} → ${getEntries}${trendTxt}</span>` +
        `<button data-trade="${offer.id}" ${ok ? '' : 'disabled'}>交易</button>` +
        `</div>`;
    }
    wrap.innerHTML = html;
    for (const btn of wrap.querySelectorAll('[data-trade]')) {
      btn.addEventListener('click', () => {
        const offer = this.allTradeOffers().find(o => o.id === btn.dataset.trade);
        if (!offer || !canAfford(this.player.inv, offer.give)) return;
        spendRes(this.player.inv, offer.give);
        // v1.2：动态价格用暂存值
        const getObj = offer._calcGet || offer.get;
        for (const k in getObj) {
          const bv = offer._calcGet ? getObj[k] : Math.floor(getObj[k] * tradeMul * priceMul * shipBonus);
          this.player.inv[k] = (this.player.inv[k] || 0) + bv;
        }
        this.toast(`🤝 交易完成！`);
        this.sound.trade();
        this.stats.record('trade');
        this.showTradePanel();
        this.updateHUD();
        this.save();
      });
    }
    document.getElementById('trade-panel').classList.remove('hidden');
  }

  hideTradePanel() {
    document.getElementById('trade-panel').classList.add('hidden');
  }

  // ---------- 成就 UI ----------
  toggleAchievePanel() {
    const el = document.getElementById('achieve-panel');
    if (el.classList.contains('hidden')) {
      this.renderAchievements();
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  }

  hideAchievePanel() {
    document.getElementById('achieve-panel').classList.add('hidden');
  }

  renderAchievements() {
    document.getElementById('achieve-stats').textContent =
      `已解锁 ${this.achievements.count()}/${this.achievements.total()}`;
    let html = '<div class="tech-grid">';
    for (const def of ACHIEVEMENT_DEFS) {
      const un = this.achievements.unlocked.has(def.id);
      html += `<div class="tech-card ${un ? 'unlocked' : 'locked'}">` +
        `<div class="tech-icon">${def.icon}</div>` +
        `<div class="tech-name">${def.name}</div>` +
        `<div class="tech-state">${un ? '✅' : def.desc}</div>` +
        `</div>`;
    }
    html += '</div>';
    document.getElementById('achieve-list').innerHTML = html;
  }

  // ---------- 统计 UI ----------
  toggleStatsPanel() {
    const el = document.getElementById('stats-panel');
    if (el.classList.contains('hidden')) {
      document.getElementById('stats-list').innerHTML = this.stats.renderHTML();
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  }

  hideStatsPanel() {
    document.getElementById('stats-panel').classList.add('hidden');
  }

  // ---------- UI ----------
  toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => el.classList.add('hidden'), 1800);
  }

  updateHUD() {
    const inv = this.player.inv;
    for (const k of ['iron', 'ice', 'rare', 'water', 'food', 'steel', 'tech', 'uranium', 'he3']) {
      const el = document.getElementById('res-' + k);
      if (el) el.textContent = inv[k] || 0;
    }
    const cap = this.pop.cap(this.builder);
    document.getElementById('res-pop').textContent = `${this.pop.count}/${cap}`;
    const pw = this.builder.totalPower(), pu = this.builder.totalPowerUse();
    const pwEl = document.getElementById('res-power');
    pwEl.textContent = `${pw}/${pu}`;
    pwEl.style.color = pw >= pu ? '' : '#ef4444';

    // 城市评级
    const rank = this.city.rank(this.pop.count);
    document.getElementById('city-rank').textContent = `${rank.icon} ${rank.name}`;
    const ni = nextRankInfo(this.pop.count);
    document.getElementById('city-next').textContent =
      ni ? `还差 ${ni.need} 人 → ${ni.next.icon}${ni.next.name}` : '已达最高评级';

    // 扇区
    document.getElementById('sector-count').textContent =
      `🗺️ ${this.map.unlockedCount()}/${this.map.totalSectors()}`;

    // 灾难指示
    const now = Date.now();
    const dEl = document.getElementById('disaster-ind');
    if (dEl) {
      if (this.disaster.sandstormActive(now)) dEl.textContent = '⛈️ 沙尘暴中';
      else if (this.disaster.sandstormWarning(now)) dEl.textContent = '⛈️ 预警';
      else if (this._meteorMark) dEl.textContent = '☄️ 陨石预警';
      else dEl.textContent = '';
    }
    // v1.9：放下第一栋建筑后，底部 hint 条自动隐藏（省空间）
    try {
      if (this.builder.buildings.length > 0) {
        const hint = document.getElementById('hint');
        if (hint) hint.style.display = 'none';
      }
    } catch (e) {}
    // 科技数（v1.9-fix：动态总数，不再硬编码/60）
    const tEl = document.getElementById('tech-count');
    if (tEl) {
      const total = (typeof TECH_DEFS !== 'undefined' ? Object.keys(TECH_DEFS).length : 0)
        + (typeof TECH_V15 !== 'undefined' ? TECH_V15.length : 0)
        + (typeof TECH_V16 !== 'undefined' ? TECH_V16.length : 0)
        + (typeof TECH_V17 !== 'undefined' ? TECH_V17.length : 0);
      tEl.textContent = `🔬${this.tech.totalUnlocked()}/${total || '?'}`;
    }
    // v1.9：科技锁定的建筑在工具栏置灰，直观可见
    try {
      for (const btn of document.querySelectorAll('[data-build]')) {
        const id = btn.dataset.build;
        const lv = BUILDINGS[id] && BUILDINGS[id].levels[1];
        const locked = lv && lv.needTech && this.tech && !this.tech.buildingUnlocked(id);
        btn.classList.toggle('locked', !!locked);
      }
    } catch (e) {}
  }

  showVictory(type) {
    const el = document.getElementById('victory');
    // v1.2：方舟胜利文案
    if (type === 'ark') {
      const title = el.querySelector('h2');
      const desc = el.querySelector('p');
      if (title) title.textContent = '🛳️ 方舟启程！';
      if (desc) desc.textContent = '方舟载着 200 名火星公民启程，人类成为多行星物种！你可以继续自由建造。';
    }
    el.classList.remove('hidden');
    this.sound.victory();
  }

  // v1.2：贸易船事件
  onTradeShipEvent(type, data) {
    if (type === 'ship-warn') {
      this.toast(`🛸 地球贸易船接近中（${Math.ceil(data.warnMs / 1000)}秒后到达）`);
      this.sound.notify();
    } else if (type === 'ship-dock') {
      this.toast(`🛸 贸易船已停靠！快去贸易站交易（60秒）`);
      this.sound.notify();
    } else if (type === 'ship-leave') {
      this.toast(`🛸 贸易船离港`);
    }
  }

  // ---------- 主循环 ----------
  loop() {
    const now = Date.now();
    const dt = Math.min(100, now - this.lastFrame);
    this.lastFrame = now;

    // 暂停：只渲染
    if (this.speedMode === 0) {
      this.render(now);
      requestAnimationFrame(this.loop);
      return;
    }

    // 双倍速：逻辑跑两次
    const iters = this.speedMode === 2 ? 2 : 1;
    if (this.speedMode === 2) {
      this.stats.speedTime += dt;
    }
    for (let i = 0; i < iters; i++) {
      this.tick(now, dt);
    }

    // 渲染
    this.render(now);
    requestAnimationFrame(this.loop);
  }

  // 单步逻辑更新
  tick(now, dt) {
    // 玩家移动（道路加速）
    const onRoad = this.builder.isRoad(this.player.x, this.player.y);
    this.player.update(now, dt, onRoad);

    // 教程
    this.tutorial.update();

    // 灾难
    // v1.2：剧本无灾难规则
    const noDisasters = this.scenario && this.scenario.rules.noDisasters;
    if (!noDisasters) {
      this.disaster.update(now, this);
    }
    // v1.2：贸易船
    if (this.tradeShip) {
      this.tradeShip.onEvent = (type, data) => this.onTradeShipEvent(type, data);
      this.tradeShip.update(now, this);
    }

    // v1.3：外交 / 军事 / 政策 / 新灾难
    if (this.diplomacy) this.diplomacy.update(now, this);
    if (this.military) {
      this.military.update(now, dt, this);
      // 袭击开始时呼叫盟友援军（每波一次）
      if (this.military.raidActive && this.diplomacy && !this._allyAidCalled) {
        this._allyAidCalled = true;
        if (this.diplomacy.onRaidStart) this.diplomacy.onRaidStart(this);
      }
      if (!this.military.raidActive) this._allyAidCalled = false;
    }
    if (this.policy) this.policy.upkeepTick(this, dt);
    if (this.disasters13) this.disasters13.update(now, this);
    // v1.4
    if (this.deepSpace) this.deepSpace.update(now, this);
    // v1.5 新系统
    if (this.underground) this.underground.update(dt);
    if (this.ocean) {
      this.ocean.update(dt, this);
      const op = this.ocean.produce(dt);
      if (op) {
        if (op.water) this.player.inv.water = Math.min(this.player.inv.water + op.water, 9999);
        if (op.food) this.player.inv.food = Math.min(this.player.inv.food + op.food, 9999);
      }
    }
    if (this.governor) this.governor.tick(dt);
    if (this.campaign) this.campaign.update && this.campaign.update(now);
    // v1.5 集成 tick
    try { if (typeof v15Tick === 'function') v15Tick(this, dt, now); } catch (e) {}
    // v1.6-v1.8 新系统
    try { if (this.sky && this.sky.update) this.sky.update(dt, this); } catch (e) {}
    try { if (this.robots && this.robots.update) this.robots.update(dt, this); } catch (e) {}
    try { if (this.quantum && this.quantum.update) this.quantum.update(dt, this); } catch (e) {}
    try { if (this.bio && this.bio.update) this.bio.update(dt, this); } catch (e) {}
    // v1.8 集成 tick
    try { if (typeof v18Tick === 'function') v18Tick(this, dt, now); } catch (e) {}
    // v1.5 成就检查（每 10 秒）
    try {
      if (!this._v15achT || now - this._v15achT > 10000) {
        this._v15achT = now;
        if (typeof checkV15Achievements === 'function') {
          const newly = checkV15Achievements(this);
          for (const id of newly) {
            const meta = (typeof ACH_V15_META !== 'undefined' && ACH_V15_META[id]) || [id, '🏆', id];
            this.toast(`${meta[1]} 成就：${meta[0]}！`);
            if (this.sound) this.sound.achievement();
          }
        }
      }
    } catch (e) {}
    // v1.5 动态事件（每 30 秒检查）
    try {
      if (!this.v15events && typeof V15EventManager !== 'undefined') this.v15events = new V15EventManager();
      if (this.v15events && (!this._v15evT || now - this._v15evT > 30000)) {
        this._v15evT = now;
        this.v15events.check(now, this);
      }
    } catch (e) {}
    if (this.orbitalHazards) this.orbitalHazards.update(now, this);

    // 成就检查
    this.achievements.update(now);

    // 统计最高纪录
    this.stats.updateMax(this.pop.count, this.builder.buildings.length);

    // 人口
    const popEvent = this.pop.update(now, this.player.inv, this.builder);
    if (popEvent && popEvent.event === 'grow') {
      this.updateHUD();
      this.sound.popGrow();
    } else if (popEvent) {
      // starving/nopower：偶尔提示（避免刷屏）
      if (!this._lastNeedWarn || now - this._lastNeedWarn > 30000) {
        this._lastNeedWarn = now;
        this.toast('⚠️ ' + popEvent.msg);
      }
    }

    // 建筑生产（太阳风暴时电子设备停工）
    const electronicsDown = this.disaster.electronicsDown(now);
    this.builder.update(now, this.player.inv, (ev, b, data) => {
      if (ev === 'storage-full') {
        if (!this._lastStorageWarn || now - this._lastStorageWarn > 30000) {
          this._lastStorageWarn = now;
          this.toast(`📦 ${RES_DEFS[data.res].name}存满了！建造仓库`);
        }
      } else if (ev === 'produce' || ev === 'convert') {
        this.stats.record('produce', data);
      }
      this.updateHUD();
    });

    // 物流
    this.logistics.update(now, dt, this.map, this.builder, this.player.inv, (ev, data) => {
      if (ev === 'truck-deliver') {
        this.updateHUD();
      } else if (ev === 'truck-full') {
        this.toast(`📦 ${RES_DEFS[data.type].name}存满了！`);
      }
    });

    // 胜利检查
    // v1.2：方舟胜利
    if (this.city.checkArkVictory(this.builder, this.pop.count, this.player.inv.tech || 0) && !this.arkWinShown) {
      this.arkWinShown = true;
      this.showVictory('ark');
    }
    // v1.2：剧本胜利/失败检查
    if (this.scenario) {
      const scResult = this.scenario.check(this);
      if (scResult && scResult.result === 'win' && !this._scWinShown) {
        this._scWinShown = true;
        this.toast(`🏆 剧本完成：${scResult.reason}`);
        this.sound.victory();
      } else if (scResult && scResult.result === 'fail' && !this._scFailShown) {
        this._scFailShown = true;
        this.toast(`💀 挑战失败：${scResult.reason}`);
      }
    }
    if (this.city.checkVictory(this.builder) && !this.winShown) {
      this.winShown = true;
      this.showVictory();
      this.save();
    }
  }

  // 渲染
  render(now) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // v1.5 镜头：缩放时应用变换
    const cam = this.camera;
    let effTile = this.tile;
    if (cam && cam.zoom > 1) {
      const cvs = this.canvas.width;
      effTile = cam.tilePx(cvs);
      const viewW = cam.viewTiles();
      const left = cam.cx - viewW / 2;
      const top = cam.cy - viewW / 2;
      this.ctx.save();
      this.ctx.translate(-left * effTile, -top * effTile);
    }
    this.map.renderFast(this.ctx, effTile, cam ? cam.visibleRange() : null);
    this.builder.render(this.ctx, effTile);
    this.logistics.render(this.ctx, effTile);
    this.player.render(this.ctx, effTile);

    // 陨石预警标记
    if (this._meteorMark && now < this._meteorMark.until) {
      const mx = (this._meteorMark.x + 0.5) * this.tile;
      const my = (this._meteorMark.y + 0.5) * this.tile;
      const pulse = 0.5 + 0.5 * Math.sin(now / 200);
      this.ctx.strokeStyle = `rgba(239,68,68,${0.5 + pulse * 0.5})`;
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.arc(mx, my, this.tile * (0.4 + pulse * 0.2), 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.font = `${Math.max(12, this.tile * 0.5)}px sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.fillText('☄️', mx, my - this.tile * 0.3);
      this.ctx.textAlign = 'left';
    }

    // 尘卷风渲染
    if (this.disaster.devilActive(now)) {
      const d = this.disaster.devil;
      const dx = (d.x + 0.5) * this.tile;
      const dy = (d.y + 0.5) * this.tile;
      // 旋转的尘柱
      const rot = (now / 300) % (Math.PI * 2);
      this.ctx.strokeStyle = 'rgba(224,123,57,0.7)';
      this.ctx.lineWidth = 4;
      for (let i = 0; i < 3; i++) {
        const r = this.tile * (0.3 + i * 0.15);
        const a0 = rot + i * 2.1;
        this.ctx.beginPath();
        this.ctx.arc(dx, dy, r, a0, a0 + 1.5);
        this.ctx.stroke();
      }
      this.ctx.font = `${Math.max(14, this.tile * 0.6)}px sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.fillText('🌪️', dx, dy - this.tile * 0.5);
      this.ctx.textAlign = 'left';
    }

    // 沙尘暴视觉：橙色遮罩
    if (this.disaster.sandstormActive(now)) {
      this.ctx.fillStyle = 'rgba(224,123,57,0.12)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // 太阳风暴视觉：紫色闪烁
    if (this.disaster.flareActive(now)) {
      const pulse = 0.05 + 0.05 * Math.sin(now / 500);
      this.ctx.fillStyle = `rgba(168,85,247,${pulse})`;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // 建造预览：绿色/红色半透明方块
    if (this.selectedBuild && this.hoverTile) {
      const { x, y } = this.hoverTile;
      const chk = this.builder.canPlace(this.selectedBuild, x, y, this.player.inv, this.pop.count);
      this.ctx.fillStyle = chk.ok ? 'rgba(74,222,128,0.35)' : 'rgba(239,68,68,0.35)';
      this.ctx.fillRect(x * this.tile, y * this.tile, this.tile, this.tile);
      this.ctx.strokeStyle = chk.ok ? '#4ade80' : '#ef4444';
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(x * this.tile + 1, y * this.tile + 1, this.tile - 2, this.tile - 2);
      // 显示建筑图标
      const def = BUILDINGS[this.selectedBuild];
      if (def) {
        this.ctx.font = `${Math.max(12, this.tile * 0.5)}px sans-serif`;
        this.ctx.textAlign = 'center';
        this.ctx.globalAlpha = 0.7;
        this.ctx.fillText(def.icon, (x + 0.5) * this.tile, (y + 0.65) * this.tile);
        this.ctx.globalAlpha = 1;
        this.ctx.textAlign = 'left';
      }
    }

    // 恢复镜头变换
    if (cam && cam.zoom > 1) this.ctx.restore();

    // 小地图（每 30 帧更新一次）
    if (!this._mmFrame || (this._mmFrame = (this._mmFrame + 1) % 30) === 0) {
      this.renderMinimap(now);
    }
  }

  renderMinimap(now) {
    const mm = document.getElementById('minimap');
    if (!mm) return;
    const ctx = mm.getContext('2d');
    const size = this.map.size;
    const s = mm.width / size; // 每格像素
    ctx.clearRect(0, 0, mm.width, mm.height);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        // v1.2：用地图的 minimapColor（含新地形）
        ctx.fillStyle = this.map.minimapColor(x, y);
        ctx.fillRect(x * s, y * s, Math.ceil(s), Math.ceil(s));
      }
    }

    // 建筑
    for (const b of this.builder.buildings) {
      ctx.fillStyle = '#facc15';
      ctx.fillRect(b.x * s, b.y * s, Math.ceil(s), Math.ceil(s));
    }

    // 玩家
    ctx.fillStyle = '#7dd3fc';
    ctx.beginPath();
    ctx.arc((this.player.x + 0.5) * s, (this.player.y + 0.5) * s, s, 0, Math.PI * 2);
    ctx.fill();

    // 运输车
    ctx.fillStyle = '#4ade80';
    for (const t of this.logistics.trucks) {
      ctx.fillRect(t.px * s, t.py * s, Math.ceil(s), Math.ceil(s));
    }

    // 灾难标记
    if (this._meteorMark && now < this._meteorMark.until) {
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc((this._meteorMark.x + 0.5) * s, (this._meteorMark.y + 0.5) * s, s * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
    if (this.disaster.devilActive(now)) {
      const d = this.disaster.devil;
      ctx.fillStyle = '#e07b39';
      ctx.beginPath();
      ctx.arc((d.x + 0.5) * s, (d.y + 0.5) * s, s * 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

// 启动
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log(`🚀 星港 Starport v${GAME_VERSION}「${GAME_CODENAME}」启动`);
    const game = new Game();
    // 尝试读档
    const loaded = game.load();
    if (loaded) {
      game.toast('存档已载入，继续建造！');
    } else {
      // 新游戏：启动教程
      setTimeout(() => game.tutorial.start(), 500);
    }
    game.updateHUD();
    window.__starport = game;
    // v1.9：隐藏加载屏
    const ld = document.getElementById('loading');
    if (ld) ld.classList.add('hide');
  });
}

if (typeof module !== 'undefined') { module.exports = { Game, SAVE_KEY, TRADE_OFFERS, GAME_VERSION, GAME_CODENAME }; }
