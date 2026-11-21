// —— 全局交互动效：所有可点元素的按压回弹与涟漪、全屏界面的进出场、热键栏切换弹跳、标题画面入场 ——
const SEL = 'button, .tile, .opt, .slot, .dest, .rs, .card, [data-close], .bp-tabs button';
const EASE_OUT = 'cubic-bezier(.2, .8, .2, 1)';
const SPRING = 'cubic-bezier(.34, 1.56, .64, 1)';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

function pressDown(el, e) {
  el.getAnimations().forEach(a => { if (a.id === 'press') a.cancel(); });
  const a = el.animate([{ transform: getComputedStyle(el).transform === 'none' ? 'scale(1)' : getComputedStyle(el).transform }, { transform: 'scale(.955)' }], { duration: 110, easing: EASE_OUT, fill: 'forwards', composite: 'replace' });
  a.id = 'press'; el._press = a;
  // 涟漪：从按下的位置扩散
  const r = el.getBoundingClientRect();
  if (r.width < 24 || r.height < 18) return;
  const s = getComputedStyle(el);
  if (s.position === 'static') el.style.position = 'relative';
  if (s.overflow === 'visible' && !el.closest('nav.menu')) el.style.overflow = 'hidden';
  const d = el.closest('nav.menu') ? Math.min(160, r.width) : Math.hypot(r.width, r.height) * 2;
  const rp = document.createElement('i'); rp.className = 'jc-ripple';
  rp.style.cssText = `left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px;width:${d}px;height:${d}px`;
  el.appendChild(rp);
  rp.animate([{ transform: 'scale(0)', opacity: 0.45 }, { transform: 'scale(1)', opacity: 0 }], { duration: 650, easing: EASE_OUT }).onfinish = () => rp.remove();
}
function pressUp(el) {
  const a = el._press; if (!a) return; el._press = null;
  a.cancel();
  el.animate([{ transform: 'scale(.955)' }, { transform: 'scale(1.025)', offset: 0.55 }, { transform: 'scale(1)' }], { duration: 380, easing: SPRING });
}

// 全屏界面（死亡、结局、标题）：进场淡入上浮，退场先播放动画再真正隐藏
const ANIM_SCREENS = ['death', 'ending', 'intro', 'cine'];
function enterScreen(el) {
  el.animate([{ opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0)' }], { duration: 520, easing: EASE_OUT });
  [...el.querySelectorAll(':scope > *')].forEach((c, i) => c.animate([{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'none' }], { duration: 620, delay: 80 + i * 70, easing: EASE_OUT, fill: 'backwards' }));
}
function exitScreen(el) {
  // 先撤掉 hidden，播完退场动画后再加回去
  el._exiting = true; el.classList.remove('hidden');
  el.style.pointerEvents = 'none';
  const a = el.animate([{ opacity: 1, filter: 'blur(0)', transform: 'none' }, { opacity: 0, filter: 'blur(8px)', transform: 'scale(1.02)' }], { duration: 380, easing: 'cubic-bezier(.5, 0, .75, 0)', fill: 'forwards' });
  a.onfinish = () => { el.classList.add('hidden'); a.cancel(); el.style.pointerEvents = ''; setTimeout(() => { el._exiting = false; }, 0); };
}

export function initJuice() {
  if (reduce) return;
  document.addEventListener('pointerdown', e => { const el = e.target.closest(SEL); if (el && !el.disabled) pressDown(el, e); }, true);
  const up = () => document.querySelectorAll(SEL).forEach(el => el._press && pressUp(el));
  document.addEventListener('pointerup', up, true);
  document.addEventListener('pointercancel', up, true);
  // 屏幕进出场
  const mo = new MutationObserver(list => {
    for (const m of list) {
      const el = m.target; if (el._exiting) continue;
      const was = (m.oldValue || '').split(/\s+/).includes('hidden'), now = el.classList.contains('hidden');
      if (was && !now) enterScreen(el);
      else if (!was && now && el.isConnected && getComputedStyle(document.body).visibility !== 'hidden') exitScreen(el);
    }
  });
  for (const id of ANIM_SCREENS) { const el = document.getElementById(id); if (el) mo.observe(el, { attributes: true, attributeFilter: ['class'], attributeOldValue: true }); }
  // 热键栏：切换选中时弹一下
  const hb = document.getElementById('hotbar');
  if (hb) new MutationObserver(list => {
    for (const m of list) {
      const el = m.target; if (!el.classList.contains('slot')) continue;
      const was = (m.oldValue || '').split(/\s+/).includes('on');
      if (!was && el.classList.contains('on')) el.animate([{ transform: 'translateY(0) scale(1)' }, { transform: 'translateY(-6px) scale(1.08)', offset: 0.4 }, { transform: 'translateY(0) scale(1)' }], { duration: 360, easing: SPRING });
    }
  }).observe(hb, { attributes: true, subtree: true, attributeFilter: ['class'], attributeOldValue: true });
  // 标题画面入场：标志、副标题、菜单依次浮现
  const tw = document.querySelector('.title-wrap');
  if (tw) {
    const parts = [tw.querySelector('.logo'), tw.querySelector('.en-sub'), ...tw.querySelectorAll('nav.menu button:not(.hidden)')].filter(Boolean);
    parts.forEach((p, i) => p.animate([{ opacity: 0, transform: 'translateX(-24px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 900, delay: 300 + i * 110, easing: EASE_OUT, fill: 'backwards' }));
    const tel = document.querySelector('#intro .telemetry');
    if (tel) tel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1200, delay: 1200, fill: 'backwards' });
  }
}

// 开始游戏时的转场：画面先拉近、提亮，再交给开场动画
export function launchTransition() {
  if (reduce) return;
  const d = document.createElement('div'); d.className = 'jc-launch'; document.body.appendChild(d);
  d.animate([{ opacity: 0 }, { opacity: 1, offset: 0.45 }, { opacity: 0 }], { duration: 1100, easing: 'ease-in-out' }).onfinish = () => d.remove();
  const c = document.querySelector('canvas');
  if (c) c.animate([{ transform: 'scale(1)', filter: 'brightness(1)' }, { transform: 'scale(1.06)', filter: 'brightness(1.6) blur(2px)', offset: 0.45 }, { transform: 'scale(1)', filter: 'brightness(1)' }], { duration: 1100, easing: 'ease-in-out' });
}
