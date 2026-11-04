/* 星港 — tutorial.js：新手引导（分步提示，可跳过）
 * 步骤：移动 → 采集 → 建居住舱 → 建太阳能 → 等人口 → 建采矿机 → 解锁扇区 → 完成
 */

const TUTORIAL_KEY = 'starport-tutorial-done';

// 教程步骤定义
const TUTORIAL_STEPS = [
  {
    id: 'move',
    title: '👋 欢迎来到火星！',
    text: '你是第一批殖民者。点击地图任意位置，宇航员会走过去。也可以用 WASD 移动。',
    check: (game) => game._tutorialMoved === true,
    hint: '👆 点击地图移动',
  },
  {
    id: 'harvest',
    title: '⛏️ 采集资源',
    text: '走到发光的菱形格子上（铁矿/冰水/稀土），按「采集」按钮或 E 键，收集资源。',
    check: (game) => (game.player.inv.iron + game.player.inv.ice + game.player.inv.rare) >= 10,
    hint: '👆 走到发光格 → 点「⛏️采集」',
  },
  {
    id: 'habitat',
    title: '🏠 建造居住舱',
    text: '点底部「🏠居住舱」按钮，再点一块空地。需要铁矿×10。居住舱提供人口上限。',
    check: (game) => game.builder.count('habitat') >= 1,
    hint: '👆 点「🏠居住舱」→ 点空地放置',
  },
  {
    id: 'solar',
    title: '🔆 建造太阳能板',
    text: '人口需要电力。建造太阳能板（铁矿×8），不然人口长不起来。',
    check: (game) => game.builder.count('solar') >= 1,
    hint: '👆 点「🔆太阳能」→ 点空地放置',
  },
  {
    id: 'pop',
    title: '👥 等待人口增长',
    text: '人口每 20 秒自动 +1（需要水+食物+电力）。先去采集冰水，建水厂和温室保证供应。',
    check: (game) => game.pop.count >= 4,
    hint: '⏳ 等人口涨到 4（采集冰水备用）',
  },
  {
    id: 'miner',
    title: '🏭 建造采矿机',
    text: '采矿机自动生产铁矿（需要 2 人口）。解放双手，挂机也有收入！',
    check: (game) => game.builder.count('miner') >= 1,
    hint: '👆 点「🏭采矿机」→ 点空地放置',
  },
  {
    id: 'sector',
    title: '🗺️ 解锁新扇区',
    text: '地图只有中心解锁。攒 50 铁矿，点击蓝色虚线框内的迷雾扇区解锁，获得更多资源。',
    check: (game) => game.map.unlockedCount() >= 2,
    hint: '👆 攒 50 铁 → 点迷雾扇区解锁',
  },
  {
    id: 'free',
    title: '🚀 自由发挥！',
    text: '教程完成！目标：攒资源 → 升级建筑 → 冲 60 人口 → 建指挥中心 → 建发射台通关！',
    check: () => false, // 手动点完成
    hint: '👆 点「完成教程」开始你的火星帝国',
    final: true,
  },
];

class TutorialManager {
  constructor(game) {
    this.game = game;
    this.stepIndex = 0;
    this.active = false;
    this.done = false;
    // 读档：做过就不再弹
    try {
      if (localStorage.getItem(TUTORIAL_KEY) === '1') {
        this.done = true;
      }
    } catch (e) {}
  }

  start() {
    if (this.done) return;
    this.active = true;
    this.stepIndex = 0;
    this.render();
  }

  skip() {
    this.active = false;
    this.done = true;
    try { localStorage.setItem(TUTORIAL_KEY, '1'); } catch (e) {}
    this.hide();
  }

  finish() {
    this.skip();
    this.game.toast('🎉 教程完成！向着星港前进！');
    if (this.game.sound) this.game.sound.victory();
  }

  // 每帧检查当前步骤是否完成
  update() {
    if (!this.active || this.done) return;
    const step = TUTORIAL_STEPS[this.stepIndex];
    if (!step) return;
    if (step.final) return; // 最后一步手动完成
    try {
      if (step.check(this.game)) {
        this.next();
      }
    } catch (e) { /* 步骤检查异常不打断 */ }
  }

  next() {
    this.stepIndex++;
    if (this.stepIndex >= TUTORIAL_STEPS.length) {
      this.finish();
      return;
    }
    if (this.game.sound) this.game.sound.upgrade();
    this.render();
  }

  current() {
    return TUTORIAL_STEPS[this.stepIndex];
  }

  render() {
    const step = this.current();
    if (!step) return;
    const el = document.getElementById('tutorial');
    if (!el) return;
    document.getElementById('tut-title').textContent = step.title;
    document.getElementById('tut-text').textContent = step.text;
    document.getElementById('tut-hint').textContent = step.hint;
    document.getElementById('tut-progress').textContent =
      `${this.stepIndex + 1}/${TUTORIAL_STEPS.length}`;
    document.getElementById('btn-tut-next').textContent =
      step.final ? '完成教程 🎉' : '跳过教程';
    el.classList.remove('hidden');
  }

  hide() {
    const el = document.getElementById('tutorial');
    if (el) el.classList.add('hidden');
  }

  // 绑定按钮（game.js 调用）
  bindUI() {
    const nextBtn = document.getElementById('btn-tut-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const step = this.current();
        if (step && step.final) this.finish();
        else this.skip();
      });
    }
    const prevBtn = document.getElementById('btn-tut-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.stepIndex > 0) {
          this.stepIndex--;
          this.render();
        }
      });
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = { TutorialManager, TUTORIAL_STEPS, TUTORIAL_KEY };
}
