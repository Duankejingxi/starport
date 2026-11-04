/* 星港 — v15_ui.js：v1.5 新系统 UI 集成
 * 为地下城/海洋/总督/战役/新建筑提供统一的 UI 入口、面板切换、按钮绑定。
 * 深色主题，移动端优先（触屏目标 ≥44px）。
 */

// v1.5 功能按钮定义
const V15_MENU = [
  { id: 'underground', icon: '🕳️', name: '地下城', desc: '地下 3 层：挖矿/探险/地热' },
  { id: 'ocean', icon: '🌊', name: '冰海', desc: '地下海洋：淡化/养殖/潜艇' },
  { id: 'governor', icon: '🎖️', name: '总督', desc: 'AI 总督：分区自动管理' },
  { id: 'campaign', icon: '⚔️', name: '战役', desc: '20 挑战关卡：评分通关' },
  { id: 'buildings15', icon: '🏗️', name: '新建筑', desc: '15 种高级建筑' },
];

// v1.5 UI 管理器
class V15UIManager {
  constructor(game) {
    this.game = game;
    this.activePanel = null;  // 当前打开的 v1.5 面板
    this._bound = false;
  }

  // 绑定主菜单按钮
  bindMenu() {
    if (this._bound) return;
    this._bound = true;
    const menuBtn = document.getElementById('btn-v15-menu');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => this.toggleMenu());
    }
    // 各面板关闭按钮（事件委托）
    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-v15-close]');
      if (t) this.closePanel();
      const open = e.target.closest('[data-v15-open]');
      if (open) this.openPanel(open.dataset.v15Open);
    });
  }

  // 主菜单 HTML
  renderMenu() {
    const g = this.game;
    let html = '<div class="v15-menu-grid">';
    for (const m of V15_MENU) {
      let badge = '';
      if (m.id === 'underground' && g.underground) {
        badge = g.underground.unlocked ? '<span class="v15-badge on">已解锁</span>' : '<span class="v15-badge">未解锁</span>';
      }
      if (m.id === 'ocean' && g.ocean) {
        badge = g.ocean.unlocked ? '<span class="v15-badge on">已解锁</span>' : '<span class="v15-badge">未解锁</span>';
      }
      if (m.id === 'governor' && g.governor) {
        const n = g.governor.governors ? g.governor.governors.length : 0;
        badge = `<span class="v15-badge on">${n} 位总督</span>`;
      }
      if (m.id === 'campaign' && g.campaign) {
        const unlocked = g.campaign.unlocked || 0;
        badge = `<span class="v15-badge on">${unlocked}/20 关</span>`;
      }
      html += `
        <button class="v15-menu-card" data-v15-open="${m.id}">
          <span class="v15-menu-icon">${m.icon}</span>
          <span class="v15-menu-name">${m.name}</span>
          <span class="v15-menu-desc">${m.desc}</span>
          ${badge}
        </button>`;
    }
    html += '</div>';
    return html;
  }

  toggleMenu() {
    const panel = document.getElementById('v15-panel');
    if (!panel) return;
    if (this.activePanel === 'menu') {
      this.closePanel();
    } else {
      this.activePanel = 'menu';
      panel.innerHTML = `
        <div class="v15-panel-head">
          <h3>🌟 v1.5 新系统</h3>
          <button data-v15-close aria-label="关闭">✖</button>
        </div>
        ${this.renderMenu()}`;
      panel.classList.remove('hidden');
    }
    if (this.game.sound) this.game.sound.click();
  }

  openPanel(id) {
    const panel = document.getElementById('v15-panel');
    if (!panel) return;
    const g = this.game;
    this.activePanel = id;
    let body = '';
    try {
      if (id === 'underground' && g.underground && g.underground.renderPanel) {
        body = g.underground.renderPanel();
      } else if (id === 'underground' && typeof renderUndergroundPanel === 'function') {
        body = renderUndergroundPanel(g.underground);
      } else if (id === 'ocean' && g.ocean && g.ocean.renderOceanPanel) {
        body = g.ocean.renderOceanPanel();
      } else if (id === 'governor' && g.governor && g.governor.renderGovernorPanel) {
        body = g.governor.renderGovernorPanel();
      } else if (id === 'campaign' && g.campaign && g.campaign.renderCampaignPanel) {
        body = g.campaign.renderCampaignPanel();
      } else if (id === 'buildings15') {
        body = this.renderBuildings15();
      } else {
        body = '<p class="v15-empty">系统未就绪</p>';
      }
    } catch (e) {
      body = `<p class="v15-empty">加载失败：${e.message}</p>`;
    }
    const titles = { underground: '🕳️ 地下城', ocean: '🌊 地下冰海', governor: '🎖️ AI 总督', campaign: '⚔️ 挑战战役', buildings15: '🏗️ v1.5 新建筑' };
    panel.innerHTML = `
      <div class="v15-panel-head">
        <h3>${titles[id] || id}</h3>
        <div>
          <button data-v15-open="menu" aria-label="返回">◀</button>
          <button data-v15-close aria-label="关闭">✖</button>
        </div>
      </div>
      <div class="v15-panel-body">${body}</div>`;
    panel.classList.remove('hidden');
    if (g.sound) g.sound.click();
  }

  closePanel() {
    const panel = document.getElementById('v15-panel');
    if (panel) panel.classList.add('hidden');
    this.activePanel = null;
  }

  // v1.5 新建筑列表
  renderBuildings15() {
    if (typeof BUILDINGS_V15 === 'undefined') return '<p class="v15-empty">建筑数据未加载</p>';
    let html = '<div class="v15-b15-grid">';
    const order = (typeof BUILD_ORDER_V15 !== 'undefined') ? BUILD_ORDER_V15 : Object.keys(BUILDINGS_V15);
    for (const id of order) {
      const b = BUILDINGS_V15[id];
      if (!b) continue;
      const lv1 = b.levels[1] || {};
      const costStr = lv1.cost ? Object.entries(lv1.cost).map(([k, v]) => `${v}${k}`).join(' ') : '—';
      html += `
        <div class="v15-b15-card">
          <div class="v15-b15-head"><span class="v15-b15-icon">${b.icon}</span><b>${b.name}</b></div>
          <div class="v15-b15-desc">${b.desc || ''}</div>
          <div class="v15-b15-cost">Lv1: ${costStr}</div>
          <div class="v15-b15-effect">${(lv1.effectDesc || lv1.desc || '').slice(0, 60)}</div>
          ${b.unlock && b.unlock.desc ? `<div class="v15-b15-unlock">🔒 ${b.unlock.desc}</div>` : ''}
        </div>`;
    }
    html += '</div>';
    html += '<p class="v15-tip">💡 在建造菜单中选择建造（需满足解锁条件）</p>';
    return html;
  }

  // HUD 徽标：v1.5 系统状态速览
  renderHudBadges() {
    const g = this.game;
    const badges = [];
    if (g.underground && g.underground.unlocked) badges.push('🕳️');
    if (g.ocean && g.ocean.unlocked) badges.push('🌊');
    if (g.governor && g.governor.governors && g.governor.governors.length) badges.push(`🎖️${g.governor.governors.length}`);
    if (g.campaign && g.campaign.unlocked) badges.push(`⚔️${g.campaign.unlocked}`);
    return badges.join(' ');
  }

  // 存档（v15 UI 无需存档，委托各系统）
  serialize() { return { v: 1 }; }
  deserialize() {}
}

// v1.5 UI 样式（JS 注入，保證深色主题一致）
const V15_CSS = `
#v15-panel {
  position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);
  width: min(92vw, 560px); max-height: 84vh; overflow-y: auto;
  background: #1a1d29; border: 1px solid #3a3d4a; border-radius: 16px;
  z-index: 200; padding: 0; box-shadow: 0 8px 40px rgba(0,0,0,.5);
}
#v15-panel.hidden { display: none; }
.v15-panel-head {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 16px; border-bottom: 1px solid #3a3d4a;
  position: sticky; top: 0; background: #1a1d29; z-index: 2;
}
.v15-panel-head h3 { margin: 0; font-size: 17px; color: #f7f0ea; }
.v15-panel-head button {
  min-width: 44px; min-height: 44px; border-radius: 10px;
  background: #2a2d3a; color: #f7f0ea; border: 1px solid #3a3d4a;
  font-size: 16px; margin-left: 6px;
}
.v15-panel-body { padding: 14px 16px; }
.v15-menu-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
  padding: 14px 16px;
}
.v15-menu-card {
  min-height: 96px; border-radius: 14px; padding: 12px;
  background: #2a2d3a; border: 1px solid #3a3d4a; color: #f7f0ea;
  display: flex; flex-direction: column; align-items: flex-start; gap: 4px;
  text-align: left;
}
.v15-menu-card:active { transform: scale(.97); }
.v15-menu-icon { font-size: 28px; }
.v15-menu-name { font-weight: 700; font-size: 15px; }
.v15-menu-desc { font-size: 12px; color: #9aa0b4; }
.v15-badge {
  font-size: 11px; padding: 2px 8px; border-radius: 20px;
  background: #3a3d4a; color: #9aa0b4; margin-top: 4px;
}
.v15-badge.on { background: #1d4d2b; color: #3ddc84; }
.v15-b15-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
.v15-b15-card {
  background: #2a2d3a; border: 1px solid #3a3d4a; border-radius: 12px;
  padding: 12px;
}
.v15-b15-head { display: flex; align-items: center; gap: 8px; font-size: 15px; color: #f7f0ea; }
.v15-b15-icon { font-size: 24px; }
.v15-b15-desc { font-size: 13px; color: #c5cad6; margin-top: 4px; }
.v15-b15-cost { font-size: 12px; color: #f5c542; margin-top: 6px; }
.v15-b15-effect { font-size: 12px; color: #9aa0b4; margin-top: 2px; }
.v15-b15-unlock { font-size: 12px; color: #ff9f43; margin-top: 4px; }
.v15-empty { text-align: center; color: #9aa0b4; padding: 30px 0; }
.v15-tip { font-size: 12px; color: #9aa0b4; text-align: center; margin-top: 12px; }
#btn-v15-menu {
  min-height: 44px; padding: 10px 14px; border-radius: 12px;
  background: linear-gradient(135deg, #6d28d9, #4f7cff); color: #fff;
  border: none; font-size: 15px; font-weight: 700;
}
`;

function injectV15CSS() {
  if (document.getElementById('v15-css')) return;
  const st = document.createElement('style');
  st.id = 'v15-css';
  st.textContent = V15_CSS;
  document.head.appendChild(st);
}

// v1.5 主菜单按钮 HTML（供 index.html 手动放置，或 JS 自动插入）
function v15MenuButtonHTML() {
  return '<button id="btn-v15-menu">🌟 新纪元</button>';
}
