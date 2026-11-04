/* 星港 — game.js：主循环 / 输入 / UI / 存档 */

const SAVE_KEY = 'starport-save-v1';

class Game {
  constructor() {
    this.map = new GameMap(30);
    this.player = new Player(this.map);
    this.builder = new BuildManager(this.map);
    this.pop = new Population();
    this.city = new City();

    this.selectedBuild = null;
    this.selectedBuilding = null;  // 已放置的建筑（用于升级）

    this.canvas = document.getElementById('map');
    this.ctx = this.canvas.getContext('2d');
    // 画布按地图尺寸自适应
    this.tile = Math.floor(this.canvas.width / this.map.size);

    this.toastTimer = null;
    this.winShown = false;

    this.bindInput();
    this.bindUI();
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
      for (const b of this.builder.buildings) b.lastProduce = Date.now();
      if (data.sectors) this.map.sectors = data.sectors;
      this.city.won = !!data.won;
      if (this.city.won) this.winShown = true;
      return true;
    } catch (e) { return false; }
  }

  reset() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
    location.reload();
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
      const { x, y } = this.canvasPos(e);
      if (!this.map.inBounds(x, y)) return;

      // 建造模式
      if (this.selectedBuild) {
        const chk = this.builder.canPlace(this.selectedBuild, x, y, this.player.inv, this.pop.count);
        if (!chk.ok) { this.toast(chk.reason); return; }
        this.builder.place(this.selectedBuild, x, y, this.player.inv);
        this.toast(`${BUILDINGS[this.selectedBuild].icon} ${BUILDINGS[this.selectedBuild].name} 建造完成`);
        this.selectBuild(null);
        this.updateHUD();
        this.save();
        return;
      }

      // 点已有建筑 → 显示信息 + 升级选项
      const b = this.builder.at(x, y);
      if (b) {
        this.selectedBuilding = b;
        this.showBuildingPanel(b);
        return;
      }
      this.selectedBuilding = null;
      this.hideBuildingPanel();

      // 点扇区（迷雾）→ 解锁
      if (!this.map.isUnlocked(x, y)) {
        const { sx, sy } = this.map.sectorOf(x, y);
        const r = this.map.unlockSector(sx, sy, this.player.inv);
        this.toast(r.ok ? `扇区 (${sx},${sy}) 解锁！` : r.reason);
        if (r.ok) { this.updateHUD(); this.save(); }
        return;
      }

      // 否则移动
      this.player.setTarget(x, y);
    };
    this.canvas.addEventListener('click', onTap);
    this.canvas.addEventListener('touchstart', onTap, { passive: false });

    const keys = {
      w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0],
      arrowup: [0, -1], arrowdown: [0, 1], arrowleft: [-1, 0], arrowright: [1, 0],
    };
    document.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (keys[k]) { e.preventDefault(); this.player.step(keys[k][0], keys[k][1]); }
      if (k === 'e' || k === ' ') { e.preventDefault(); this.doHarvest(); }
      if (k === 'escape') { this.selectBuild(null); this.hideBuildingPanel(); }
    });
  }

  bindUI() {
    document.getElementById('btn-harvest').addEventListener('click', () => this.doHarvest());
    for (const btn of document.querySelectorAll('[data-build]')) {
      btn.addEventListener('click', () => {
        const id = btn.dataset.build;
        this.hideBuildingPanel();
        this.selectBuild(this.selectedBuild === id ? null : id);
      });
    }
    document.getElementById('btn-upgrade').addEventListener('click', () => this.doUpgrade());
    document.getElementById('btn-close-panel').addEventListener('click', () => this.hideBuildingPanel());
    document.getElementById('btn-reset').addEventListener('click', () => {
      if (confirm('重开？存档会清空！')) this.reset();
    });
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
      const costStr = Object.entries(lv.cost).map(([k, v]) => `${RES_DEFS[k].icon}${v}`).join(' ');
      info.innerHTML = `<b>${d.icon} ${d.name}</b>　${d.desc}　<span style="opacity:.7">${costStr}｜点空地放置</span>`;
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
    const upBtn = document.getElementById('btn-upgrade');
    const chk = this.builder.canUpgrade(b, this.player.inv, this.pop.count);
    upBtn.disabled = !chk.ok;
    upBtn.textContent = chk.ok
      ? `⬆️ 升级 (Lv${b.level + 1})`
      : `⬆️ ${chk.reason}`;
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
    if (!chk.ok) { this.toast(chk.reason); return; }
    this.builder.upgrade(b, this.player.inv);
    this.toast(`${BUILDINGS[b.id].icon} 升到 Lv${b.level}！`);
    this.showBuildingPanel(b);
    this.updateHUD();
    this.save();
  }

  doHarvest() {
    const res = this.player.tryHarvest(Date.now());
    if (res) {
      this.toast(`+${this.player.HARVEST_YIELD} ${RES_DEFS[res].name}`);
      this.updateHUD();
    } else if (!this.player.canHarvest()) {
      this.toast('这里没有资源，走到发光的格子上去');
    }
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
    for (const k of ['iron', 'ice', 'rare', 'water', 'food', 'steel', 'tech']) {
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
      `🗺️ ${this.map.unlockedCount()}/9`;
  }

  showVictory() {
    const el = document.getElementById('victory');
    el.classList.remove('hidden');
  }

  // ---------- 主循环 ----------
  loop() {
    const now = Date.now();
    const dt = now - this.lastFrame;
    this.lastFrame = now;

    // 玩家移动（道路加速）
    const onRoad = this.builder.isRoad(this.player.x, this.player.y);
    this.player.update(now, dt, onRoad);

    // 人口
    const popEvent = this.pop.update(now, this.player.inv, this.builder);
    if (popEvent && popEvent.event === 'grow') {
      this.updateHUD();
    } else if (popEvent) {
      // starving/nopower：偶尔提示（避免刷屏）
      if (!this._lastNeedWarn || now - this._lastNeedWarn > 30000) {
        this._lastNeedWarn = now;
        this.toast('⚠️ ' + popEvent.msg);
      }
    }

    // 建筑生产
    this.builder.update(now, this.player.inv, () => this.updateHUD());

    // 胜利检查
    if (this.city.checkVictory(this.builder) && !this.winShown) {
      this.winShown = true;
      this.showVictory();
      this.save();
    }

    // 渲染
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.map.render(this.ctx, this.tile);
    this.builder.render(this.ctx, this.tile);
    this.player.render(this.ctx, this.tile);

    requestAnimationFrame(this.loop);
  }
}

// 启动
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    // 尝试读档
    if (game.load()) {
      game.toast('存档已载入，继续建造！');
    }
    game.updateHUD();
    window.__starport = game;
  });
}

if (typeof module !== 'undefined') { module.exports = { Game, SAVE_KEY }; }
