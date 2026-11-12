import { G } from './state.js';

export const input = {
  keys: new Set(), mouse: [false, false, false], dx: 0, dy: 0, wheel: 0, pressed: new Set(), clicked: [false, false, false],
  sens: 0.0022,
  down(code) { return this.keys.has(code); },
  hit(code) { return this.pressed.has(code); },
  endFrame() { this.pressed.clear(); this.dx = 0; this.dy = 0; this.wheel = 0; this.clicked = [false, false, false]; },
};

export function initInput(canvas) {
  window.addEventListener('keydown', e => {
    if (e.code === 'Tab') e.preventDefault();
    if (!input.keys.has(e.code)) input.pressed.add(e.code);
    input.keys.add(e.code);
  });
  window.addEventListener('keyup', e => input.keys.delete(e.code));
  window.addEventListener('blur', () => { input.keys.clear(); input.mouse = [false, false, false]; });
  window.addEventListener('mousemove', e => {
    if (!G.locked) return;
    input.dx += e.movementX || 0; input.dy += e.movementY || 0;
  });
  canvas.addEventListener('mousedown', e => {
    if (!G.locked) return;
    input.mouse[e.button] = true; input.clicked[e.button] = true;
  });
  window.addEventListener('mouseup', e => { input.mouse[e.button] = false; });
  window.addEventListener('wheel', e => { if (G.locked) input.wheel += Math.sign(e.deltaY); }, { passive: true });
  window.addEventListener('contextmenu', e => e.preventDefault());
}
