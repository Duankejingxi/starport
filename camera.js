/* 星港 — camera.js：镜头系统（缩放/平移/触屏）
 * 移动端优先：50×50 地图在手机上每格只有 ~13px，必须可缩放。
 * 缩放档位：1x（全图）/ 2x / 3x / 4x，3x 时每格 ~40px，4x 时 ~52px。
 * 手势：单指拖拽=平移，点按=选择，双指=缩放；另有 +/-/重置按钮兜底。
 */

const CAM_ZOOMS = [1, 2, 3, 4];       // 缩放档位
const CAM_TAP_MS = 280;               // 点按最大时长
const CAM_TAP_PX = 12;                // 点按最大位移（CSS px）
const CAM_MIN_TILE_PX = 44;           // 目标：缩放后每格 ≥44px（提示用）

class Camera {
  constructor(mapSize) {
    this.mapSize = mapSize;
    this.cx = mapSize / 2;            // 镜头中心（格坐标，可小数）
    this.cy = mapSize / 2;
    this.zoomIdx = 0;                 // CAM_ZOOMS 下标
    this.onChange = null;             // 变化回调（供小地图/按钮同步）
  }

  get zoom() { return CAM_ZOOMS[this.zoomIdx]; }

  // 当前视野覆盖的格数（宽/高）
  viewTiles() { return this.mapSize / this.zoom; }

  zoomIn() {
    if (this.zoomIdx < CAM_ZOOMS.length - 1) {
      this.zoomIdx++;
      this._clamp();
      this._emit();
      return true;
    }
    return false;
  }

  zoomOut() {
    if (this.zoomIdx > 0) {
      this.zoomIdx--;
      this._clamp();
      this._emit();
      return true;
    }
    return false;
  }

  reset() {
    this.cx = this.mapSize / 2;
    this.cy = this.mapSize / 2;
    this.zoomIdx = 0;
    this._emit();
  }

  // 平移（格为单位）
  pan(dtx, dty) {
    this.cx += dtx;
    this.cy += dty;
    this._clamp();
    this._emit();
  }

  // 镜头移动到指定格（居中）
  centerOn(tx, ty) {
    this.cx = tx + 0.5;
    this.cy = ty + 0.5;
    this._clamp();
    this._emit();
  }

  _clamp() {
    const half = this.viewTiles() / 2;
    if (this.zoom <= 1) {
      // 1x 时锁定全图
      this.cx = this.mapSize / 2;
      this.cy = this.mapSize / 2;
    } else {
      this.cx = Math.max(half, Math.min(this.mapSize - half, this.cx));
      this.cy = Math.max(half, Math.min(this.mapSize - half, this.cy));
    }
  }

  _emit() { if (this.onChange) this.onChange(this); }

  // 世界（格）→ 屏幕（canvas 像素）：返回左上角
  worldToScreen(tx, ty, canvasW, canvasH) {
    const tilePx = this.tilePx(canvasW);
    const viewW = this.viewTiles();
    const left = this.cx - viewW / 2;
    const top = this.cy - viewW / 2;
    return { x: (tx - left) * tilePx, y: (ty - top) * tilePx };
  }

  // 每格屏幕像素
  tilePx(canvasW) {
    return canvasW / this.viewTiles();
  }

  // 屏幕（canvas 像素）→ 世界（格，浮点）
  screenToWorld(px, py, canvasW, canvasH) {
    const tilePx = this.tilePx(canvasW);
    const viewW = this.viewTiles();
    const left = this.cx - viewW / 2;
    const top = this.cy - viewW / 2;
    return { x: left + px / tilePx, y: top + py / tilePx };
  }

  // 视野内格范围（含 1 格缓冲，供渲染裁剪）
  visibleRange() {
    const half = this.viewTiles() / 2;
    return {
      x0: Math.max(0, Math.floor(this.cx - half) - 1),
      y0: Math.max(0, Math.floor(this.cy - half) - 1),
      x1: Math.min(this.mapSize - 1, Math.ceil(this.cx + half) + 1),
      y1: Math.min(this.mapSize - 1, Math.ceil(this.cy + half) + 1),
    };
  }

  serialize() {
    return { cx: this.cx, cy: this.cy, zoomIdx: this.zoomIdx };
  }

  deserialize(d) {
    if (!d) return;
    this.cx = d.cx ?? this.mapSize / 2;
    this.cy = d.cy ?? this.mapSize / 2;
    this.zoomIdx = d.zoomIdx ?? 0;
    this._clamp();
  }
}

/* ---------- 触屏手势绑定 ----------
 * 接管 canvas 的 pointer/touch 事件：
 * - 单指点按（短+位移小）→ onTap(x, y)（格坐标浮点）
 * - 单指拖拽 → 平移镜头
 * - 双指 → 缩放（以中点为中心）
 * 返回 detach() 供清理。
 */
function bindCameraGestures(canvas, camera, hooks) {
  // hooks: { onTap(tx, ty, e), onPanStart(), onZoom() }
  const pointers = new Map();   // pointerId → {x, y, t}
  let pinchD0 = 0;              // 双指初始距离
  let pinchZoom0 = 1;
  let downPos = null;           // 单指按下位置
  let downTime = 0;
  let moved = false;
  let lastPan = null;

  function canvasXY(e) {
    const rect = canvas.getBoundingClientRect();
    const t = (e.touches && e.touches[0]) || e;
    const sx = canvas.width / rect.width;
    const sy = canvas.height / rect.height;
    return {
      x: (t.clientX - rect.left) * sx,
      y: (t.clientY - rect.top) * sy,
      cssX: t.clientX - rect.left,
      cssY: t.clientY - rect.top,
    };
  }

  function dist(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  // --- Pointer Events（桌面+移动统一） ---
  canvas.style.touchAction = 'none';  // 禁止浏览器默认触屏行为

  function onDown(e) {
    canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
    const p = canvasXY(e);
    pointers.set(e.pointerId, { x: p.x, y: p.y, cssX: p.cssX, cssY: p.cssY, t: Date.now() });
    if (pointers.size === 1) {
      downPos = { x: p.cssX, y: p.cssY };
      downTime = Date.now();
      moved = false;
      lastPan = { x: p.x, y: p.y };
      hooks.onPanStart && hooks.onPanStart();
    } else if (pointers.size === 2) {
      // 开始双指缩放
      const [a, b] = [...pointers.values()];
      pinchD0 = dist(a, b);
      pinchZoom0 = camera.zoom;
      moved = true;  // 双指不算点按
    }
    e.preventDefault();
  }

  function onMove(e) {
    if (!pointers.has(e.pointerId)) return;
    const p = canvasXY(e);
    const prev = pointers.get(e.pointerId);
    pointers.set(e.pointerId, { x: p.x, y: p.y, cssX: p.cssX, cssY: p.cssY, t: Date.now() });

    if (pointers.size === 2) {
      // 双指缩放
      const [a, b] = [...pointers.values()];
      const d = dist(a, b);
      if (pinchD0 > 0 && d > 0) {
        const ratio = d / pinchD0;
        // 档位缩放：比例超过阈值切档
        const targetZoom = pinchZoom0 * ratio;
        let best = 0;
        for (let i = 0; i < CAM_ZOOMS.length; i++) {
          if (Math.abs(CAM_ZOOMS[i] - targetZoom) < Math.abs(CAM_ZOOMS[best] - targetZoom)) best = i;
        }
        if (best !== camera.zoomIdx) {
          camera.zoomIdx = best;
          camera._clamp();
          camera._emit();
          hooks.onZoom && hooks.onZoom();
        }
      }
      e.preventDefault();
      return;
    }

    if (pointers.size === 1 && downPos) {
      // 单指：判断是点按还是拖拽
      const dx = p.cssX - downPos.x;
      const dy = p.cssY - downPos.y;
      if (Math.hypot(dx, dy) > CAM_TAP_PX) moved = true;
      if (moved && lastPan) {
        // 拖拽平移：屏幕像素 → 格
        const tilePx = camera.tilePx(canvas.width);
        camera.pan(-(p.x - lastPan.x) / tilePx, -(p.y - lastPan.y) / tilePx);
        lastPan = { x: p.x, y: p.y };
      }
    }
    e.preventDefault();
  }

  function onUp(e) {
    const wasSingle = pointers.size === 1;
    const info = pointers.get(e.pointerId);
    pointers.delete(e.pointerId);
    if (wasSingle && info && !moved) {
      const dt = Date.now() - downTime;
      if (dt < CAM_TAP_MS) {
        // 点按：转格坐标
        const p = canvasXY(e);
        const w = camera.screenToWorld(p.x, p.y, canvas.width, canvas.height);
        hooks.onTap && hooks.onTap(w.x, w.y, e);
      }
    }
    if (pointers.size === 0) {
      downPos = null;
      lastPan = null;
      pinchD0 = 0;
    }
    e.preventDefault();
  }

  function onCancel(e) {
    pointers.delete(e.pointerId);
    if (pointers.size === 0) { downPos = null; lastPan = null; pinchD0 = 0; }
  }

  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointercancel', onCancel);

  // 滚轮缩放（桌面）
  function onWheel(e) {
    e.preventDefault();
    if (e.deltaY < 0) camera.zoomIn();
    else camera.zoomOut();
    hooks.onZoom && hooks.onZoom();
  }
  canvas.addEventListener('wheel', onWheel, { passive: false });

  return function detach() {
    canvas.removeEventListener('pointerdown', onDown);
    canvas.removeEventListener('pointermove', onMove);
    canvas.removeEventListener('pointerup', onUp);
    canvas.removeEventListener('pointercancel', onCancel);
    canvas.removeEventListener('wheel', onWheel);
  };
}

/* ---------- 点按容错：找最近的可交互点 ----------
 * 在 (tx, ty) 周围 radius 格内找最近的资源/建筑。
 * 供主游戏在点按无精确命中时调用，保证手机上 ≥44px 等效点击区。
 */
function findNearestInteractable(tx, ty, radiusTiles, map, builder) {
  let best = null;
  let bestD = Infinity;
  const x0 = Math.max(0, Math.floor(tx - radiusTiles));
  const x1 = Math.min(map.size - 1, Math.ceil(tx + radiusTiles));
  const y0 = Math.max(0, Math.floor(ty - radiusTiles));
  const y1 = Math.min(map.size - 1, Math.ceil(ty + radiusTiles));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const hasRes = map.resource && map.resource[y] && map.resource[y][x];
      const hasB = builder && builder.at && builder.at(x, y);
      if (!hasRes && !hasB) continue;
      const d = Math.hypot(x + 0.5 - tx, y + 0.5 - ty);
      if (d < bestD) { bestD = d; best = { x, y, d }; }
    }
  }
  return best;
}
