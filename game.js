/* 星港 — game.js：主循环 / 人口系统 / 输入 / UI */

// 人口
const POP_START = 2;          // 初始人口（着陆舱）
const POP_BASE_CAP = 2;       // 着陆舱提供的基础上限
const POP_GROWTH_MS = 20000;  // 每20秒+1

class Game {
  constructor() {
    this.map = new GameMap(20);
    this.player = new Player(this.map);
    this.builder = new BuildManager(this.map);

    this.pop = POP_START;
    this.lastPopTick = Date.now();

    this.selectedBuild = null;  // 当前选中的建筑 id

    this.canvas = document.getElementById('map');
    this.ctx = this.canvas.getContext('2d');
    this.tile = this.canvas.width / this.map.size;

    this.toastTimer = null;

    this.bindInput();
    this.bindUI();
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
    this.lastFrame = Date.now();
  }

  // ---------- 人口 ----------
  popCap() {
    return POP_BASE_CAP + this.builder.totalPopCap();
  }
  power() {
    return this.builder.totalPower();
  }

  updatePop(now) {
    if (now - this.lastPopTick >= POP_GROWTH_MS) {
      this.lastPopTick = now;
      if (this.pop < this.popCap()) {
        this.pop++;
        this.updateHUD();
      }
    }
  }

  // ---------- 输入 ----------
  canvasPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    const cx = (e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX);
    const cy = (e.touches && e.touches[0] ? e.touches[0].clientY : e.clientY);
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    return {
      x: Math.floor((cx - rect.left) * scaleX / this.tile),
      y: Math.floor((cy - rect.top) * scaleY / this.tile),
    };
  }

  bindInput() {
    // 点击：建造模式 → 放建筑；否则 → 移动
    const onTap = (e) => {
      e.preventDefault();
      const { x, y } = this.canvasPos(e);
      if (!this.map.inBounds(x, y)) return;
      if (this.selectedBuild) {
        const chk = this.builder.canPlace(this.selectedBuild, x, y, this.player, this.pop);
        if (!chk.ok) { this.toast(chk.reason); return; }
        this.builder.place(this.selectedBuild, x, y, this.player);
        this.toast(`${BUILDINGS[this.selectedBuild].name} 建造完成`);
        this.updateHUD();
      } else {
        // 点建筑显示信息，点空地移动
        const b = this.builder.at(x, y);
        if (b) {
          this.toast(BUILDINGS[b.id].name + '：' + BUILDINGS[b.id].desc);
        } else {
          this.player.setTarget(x, y);
        }
      }
    };
    this.canvas.addEventListener('click', onTap);
    this.canvas.addEventListener('touchstart', onTap, { passive: false });

    // WASD / 方向键
    const keys = {
      w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0],
      arrowup: [0, -1], arrowdown: [0, 1], arrowleft: [-1, 0], arrowright: [1, 0],
    };
    document.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (keys[k]) {
        e.preventDefault();
        this.player.step(keys[k][0], keys[k][1]);
      }
      if (k === 'e' || k === ' ') {  // E/空格 = 采集
        e.preventDefault();
        this.doHarvest();
      }
      if (k === 'escape') this.selectBuild(null);
    });
  }

  bindUI() {
    document.getElementById('btn-harvest').addEventListener('click', () => this.doHarvest());
    for (const btn of document.querySelectorAll('[data-build]')) {
      btn.addEventListener('click', () => {
        const id = btn.dataset.build;
        this.selectBuild(this.selectedBuild === id ? null : id);
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
      info.innerHTML = `<b>${d.icon} ${d.name}</b>　${d.desc}　<span style="opacity:.7">点空地放置，再点取消</span>`;
      info.classList.remove('hidden');
    } else {
      info.classList.add('hidden');
    }
  }

  doHarvest() {
    const res = this.player.tryHarvest(Date.now());
    if (res) {
      this.toast(`+2 ${RES_INFO[res].name}`);
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
    this.toastTimer = setTimeout(() => el.classList.add('hidden'), 1600);
  }

  updateHUD() {
    document.getElementById('res-iron').textContent = this.player.inv.iron;
    document.getElementById('res-ice').textContent = this.player.inv.ice;
    document.getElementById('res-rare').textContent = this.player.inv.rare;
    document.getElementById('res-pop').textContent = `${this.pop}/${this.popCap()}`;
    document.getElementById('res-power').textContent = this.power();
  }

  // ---------- 主循环 ----------
  loop() {
    const now = Date.now();
    const dt = now - this.lastFrame;
    this.lastFrame = now;

    this.player.update(now, dt);
    this.updatePop(now);
    this.builder.update(now, this.player, () => this.updateHUD());

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
    game.updateHUD();
    window.__starport = game;  // 调试用
  });
}

if (typeof module !== 'undefined') { module.exports = { Game, POP_START, POP_BASE_CAP, POP_GROWTH_MS }; }
