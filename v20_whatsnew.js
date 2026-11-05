/* 星港 — v20_whatsnew.js：v2.0 更新说明弹窗
 * ============================================================
 * 首次启动 v2.0 时显示的新功能导览。
 * 不是水文——是玩家理解新系统的第一入口。
 *
 * 内容：
 *   1. 电网系统（电缆/跳闸/电池/变电站）
 *   2. 水管系统（压力/漏水/水塔）
 *   3. 交通深化（桥/隧道/公交/货运）
 *   4. 经济系统（星币/税/工资/维护费）
 *   5. 30 新建筑
 *   6. 10 挑战剧本
 *
 * 集成：v20_integration.js 里 v20Integrate() 调用
 *   v20_showWhatsNew(game)（仅当本地存档版本 < 2.0）。
 * ============================================================
 */

'use strict';

const V20_WHATSNEW_VERSION = '2.0.0';
const V20_WHATSNEW_KEY = 'starport-v20-whatsnew-seen';

// v2.0 更新内容（数据驱动，方便改）
const V20_WHATSNEW_SECTIONS = [
  {
    icon: '⚡',
    title: '电网系统',
    color: '#ffd43b',
    points: [
      '电力现在有「生产 / 消耗 / 传输」三个概念',
      '铺电缆连接发电机和建筑（工具栏 🔌）',
      '电缆容量 20，超载会跳闸 30 秒',
      '电池白天充电、晚上放电；变电站半径 6 格无线供电',
      '按 <b>1</b> 打开电网覆盖层，红色=缺电',
    ],
  },
  {
    icon: '💧',
    title: '水管系统',
    color: '#74c0fc',
    points: [
      '水有「压力」概念：水源 100，每格管道 -8',
      '铺水管连接水源和建筑（工具栏 🔧）',
      '压力低于 20 的建筑停产',
      '水塔 +30 压力，管道枢纽段不衰减',
      '管道会漏水（红点闪烁），点一下维修',
      '按 <b>2</b> 打开水管覆盖层',
    ],
  },
  {
    icon: '🛣️',
    title: '交通深化',
    color: '#ffa94d',
    points: [
      '立交桥：跨越峡谷（两端道路+中间峡谷，最长 8 格）',
      '隧道：穿山（两端道路+中间山地）',
      '公交线路：设站→连线，缓解拥堵、运送人口',
      '货运专线：用卡车自动运货',
      '按 <b>3</b> 打开交通覆盖层',
    ],
  },
  {
    icon: '💰',
    title: '经济系统',
    color: '#63e6be',
    points: [
      '新货币：星币（工具栏看余额）',
      '收入：所得税 + 人口商业活动 + 建筑收入',
      '支出：工资 + 建筑维护费',
      '维护费交不起 → 建筑损坏停产',
      '税率/工资可在经济面板调整（工具栏 💰）',
      '破产保护：3 次警告后才判负',
    ],
  },
  {
    icon: '🏗️',
    title: '30 种新建筑',
    color: '#b197fc',
    points: [
      '电网：太阳能阵列、风电场、核电站、电池组、变电站…',
      '水管：深水泵、水塔、净水厂、海水淡化…',
      '交通：立交桥、隧道、公交站、货运站、高速…',
      '经济：市场、银行、贸易港、铸币厂…',
      '市政：消防站、医院升级、学校…',
      '每种 3 级，数值自洽（已验算）',
    ],
  },
  {
    icon: '🎯',
    title: '10 个挑战剧本',
    color: '#f783ac',
    points: [
      '午夜停电、过载危机、干渴之城、千里之堤…',
      '每个剧本有明确目标和时间限制',
      '通关给星币/科技奖励',
      '按 <b>F8</b> 打开剧本选择器',
      '右上角面板实时显示进度',
    ],
  },
];

// 显示更新弹窗
function v20_showWhatsNew(game) {
  try {
    if (typeof document === 'undefined') return false;
    // 已看过则不显示
    try {
      if (localStorage.getItem(V20_WHATSNEW_KEY) === V20_WHATSNEW_VERSION) return false;
    } catch (e) {}

    const overlay = document.createElement('div');
    overlay.id = 'v20-whatsnew';
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 2000;
      background: rgba(0, 0, 0, 0.75);
      display: flex; align-items: center; justify-content: center;
      backdrop-filter: blur(4px);
    `;

    const sectionsHtml = V20_WHATSNEW_SECTIONS.map(s => `
      <div style="margin: 12px 0; padding: 12px; background: rgba(255,255,255,0.04);
                  border-radius: 10px; border-left: 3px solid ${s.color};">
        <div style="font-size: 15px; font-weight: bold; margin-bottom: 6px; color: ${s.color};">
          ${s.icon} ${s.title}
        </div>
        <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #ced4da; line-height: 1.7;">
          ${s.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    overlay.innerHTML = `
      <div style="
        width: min(640px, 94vw); max-height: 88vh; overflow-y: auto;
        background: linear-gradient(135deg, #0f1420 0%, #1a2332 100%);
        border: 1px solid rgba(120, 180, 255, 0.3);
        border-radius: 16px; padding: 24px; color: #e9ecef;
        box-shadow: 0 8px 48px rgba(0, 0, 0, 0.6);
      ">
        <div style="text-align: center; margin-bottom: 16px;">
          <div style="font-size: 32px; margin-bottom: 8px;">🚀</div>
          <div style="font-size: 22px; font-weight: bold;">
            星港 v2.0「经纬万象」
          </div>
          <div style="color: #868e96; font-size: 13px; margin-top: 4px;">
            70,008 → 100,000 行 · 6 大新系统 · 30 新建筑 · 10 挑战剧本
          </div>
        </div>
        ${sectionsHtml}
        <div style="
          margin-top: 16px; padding: 12px; background: rgba(255, 212, 59, 0.08);
          border: 1px solid rgba(255, 212, 59, 0.3); border-radius: 10px;
          font-size: 13px; color: #ffd43b;
        ">
          💡 <b>新手建议</b>：先按 <b>F1</b> 看电网教程，铺好电缆和水管再扩张。
          老存档不受影响（没铺线网的建筑沿用旧规则）。
        </div>
        <button id="v20-whatsnew-close" style="
          margin-top: 18px; width: 100%; padding: 12px;
          background: linear-gradient(135deg, #4dabf7 0%, #3b82f6 100%);
          border: none; border-radius: 10px; color: white;
          font-size: 15px; font-weight: bold; cursor: pointer;
        ">开始建设 🚀</button>
        <div style="text-align: center; margin-top: 8px;">
          <a href="#" id="v20-whatsnew-never" style="color: #868e96; font-size: 12px;">
            不再显示
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const close = (remember) => {
      try {
        if (remember) localStorage.setItem(V20_WHATSNEW_KEY, V20_WHATSNEW_VERSION);
        overlay.remove();
      } catch (e) { try { overlay.remove(); } catch (e2) {} }
    };

    overlay.querySelector('#v20-whatsnew-close').onclick = () => close(true);
    overlay.querySelector('#v20-whatsnew-never').onclick = (e) => {
      e.preventDefault();
      close(true);
    };
    // 点背景关闭（不记住，下次还显示）
    overlay.onclick = (e) => {
      if (e.target === overlay) close(false);
    };

    return true;
  } catch (e) { return false; }
}

// 重置（测试用）
function v20_resetWhatsNew() {
  try { localStorage.removeItem(V20_WHATSNEW_KEY); } catch (e) {}
}

// Node 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    V20_WHATSNEW_VERSION,
    V20_WHATSNEW_SECTIONS,
    v20_showWhatsNew,
    v20_resetWhatsNew,
  };
}
