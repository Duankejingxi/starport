import * as THREE from 'three';
import { BUILD_MODELS } from './models.js';

// 用独立的小渲染器为每座建筑拍一张"产品照"，供蓝图界面使用
const cache = {};
export function buildingThumbs(types) {
  const todo = types.filter(t => !cache[t]);
  if (!todo.length) return cache;
  const S = 256;
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setSize(S, S); r.setPixelRatio(1);
  r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.15;
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x3a2a24, 1.4));
  const key = new THREE.DirectionalLight(0xfff0e0, 2.6); key.position.set(4, 8, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x88ccff, 1.4); rim.position.set(-6, 4, -6); scene.add(rim);
  const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 500);
  for (const t of todo) {
    const g = new THREE.Group(), a = {};
    BUILD_MODELS[t](g, a);
    const drop = [];
    g.traverse(o => { if (o.userData.found || o === a.flame || o === a.beam) drop.push(o); });
    drop.forEach(o => o.parent.remove(o));
    const sprites = []; g.traverse(o => { if (o.isSprite) sprites.push([o, o.parent]); });
    sprites.forEach(([o, p]) => p.remove(o));
    scene.add(g);
    const box = new THREE.Box3().setFromObject(g, true), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
    sprites.forEach(([o, p]) => p.add(o));
    const rad = Math.max(size.x, size.y, size.z) * 0.62;
    const dist = rad / Math.tan(THREE.MathUtils.degToRad(15)) * 1.05;
    cam.position.set(c.x + dist * 0.62, c.y + dist * 0.42, c.z + dist * 0.66);
    cam.lookAt(c); cam.updateProjectionMatrix();
    r.render(scene, cam);
    cache[t] = r.domElement.toDataURL('image/png');
    scene.remove(g);
  }
  r.dispose(); r.forceContextLoss();
  return cache;
}
