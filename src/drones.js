import * as THREE from 'three';
import { G } from './state.js';
import { has } from './systems.js';
import { makeDrone } from './models.js';
import { getHeight } from './terrain.js';
import { mineNode, NODE_COLOR } from './resources.js';
import { fx } from './fx.js';

// 采矿无人机：飞向矿点、激光采集、运回站点
const beamGeo = new THREE.CylinderGeometry(1, 1, 1, 6, 1, true); beamGeo.translate(0, 0.5, 0);
const UP = new THREE.Vector3(0, 1, 0);
const tmp = new THREE.Vector3();

function ensureDrones(hub) {
  const want = 1 + (hub.level || 1) + (has('swarm') ? 1 : 0);
  hub.drones = hub.drones || [];
  while (hub.drones.length < want) {
    const d = makeDrone();
    const beam = new THREE.Mesh(beamGeo, new THREE.MeshBasicMaterial({ color: 0xffa050, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
    beam.visible = false; beam.frustumCulled = false;
    G.scene.add(d.group, beam);
    const slot = hub.drones.length;
    const dock = new THREE.Vector3(hub.x + [-1.9, 1.9, -1.9, 1.9][slot % 4], hub.y + 1.1, hub.z + [-1.9, -1.9, 1.9, 1.9][slot % 4]);
    d.group.position.copy(dock);
    hub.drones.push({ ...d, beam, dock, state: 'dock', t: 1 + slot * 1.3, node: null, cargo: null, pos: d.group.position });
  }
}

export function removeHubDrones(hub) {
  for (const d of hub.drones || []) { G.scene.remove(d.group, d.beam); if (d.node) d.node.claimed = false; }
  hub.drones = [];
}

function flyTo(d, target, dt, speed = 15) {
  tmp.copy(target).sub(d.pos);
  const dist = tmp.length();
  // 巡航高度：离地 8 米，接近目标时下降
  const cruise = getHeight(d.pos.x, d.pos.z) + 8;
  if (dist > 6) tmp.y += (cruise - d.pos.y) * 2;
  tmp.normalize().multiplyScalar(Math.min(dist, speed * dt));
  d.pos.add(tmp);
  const yaw = Math.atan2(target.x - d.pos.x, target.z - d.pos.z);
  let dy = yaw - d.group.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
  d.group.rotation.y += dy * Math.min(1, dt * 4);
  d.group.rotation.x = Math.min(0.3, dist * 0.02);
  return dist < 0.6;
}

export function updateDrones(dt) {
  const now = performance.now() * 0.001;
  for (const hub of G.buildings) {
    if (hub.type !== 'drones') continue;
    if (hub.buildT < 1) continue;
    ensureDrones(hub);
    if (hub.anim.dish) hub.anim.dish.rotation.y += dt * (hub.powered ? 1.2 : 0);
    if (hub.anim.light) hub.anim.light.visible = hub.powered && Math.sin(now * 3) > -0.3;
    for (const d of hub.drones) {
      for (const r of d.rotors) r.rotation.y += dt * 40;
      d.group.position.y += Math.sin(now * 3 + d.dock.x) * 0.003;
      d.beam.visible = false;
      if (!hub.powered && d.state !== 'dock') { if (d.node) d.node.claimed = false; d.node = null; d.state = 'back'; }
      switch (d.state) {
        case 'dock': {
          d.pos.lerp(d.dock, Math.min(1, dt * 3));
          d.t -= dt;
          if (d.t <= 0 && hub.powered) {
            d.t = 2;
            let best = null, bd = 100;
            for (const n of G.nodes) {
              if (n.claimed || (n.type === 'titanium' && (hub.level || 1) < 3)) continue;
              const dist = Math.hypot(n.x - hub.x, n.z - hub.z);
              if (dist < bd) { bd = dist; best = n; }
            }
            if (best) { best.claimed = true; d.node = best; d.state = 'out'; }
          }
          break;
        }
        case 'out': {
          const n = d.node;
          if (!n || !G.nodes.includes(n)) { d.node = null; d.state = 'back'; break; }
          if (flyTo(d, tmp.set(n.x, n.y + 4.5, n.z).clone(), dt)) { d.state = 'mine'; d.t = 3.2; }
          break;
        }
        case 'mine': {
          const n = d.node;
          if (!n || !G.nodes.includes(n)) { d.state = 'back'; break; }
          d.t -= dt;
          // 采矿光束
          const end = new THREE.Vector3(n.x + Math.sin(now * 5) * 0.3, n.y + 0.6, n.z + Math.cos(now * 4) * 0.3);
          const start = d.pos.clone().add(new THREE.Vector3(0, -0.25, 0));
          const seg = end.clone().sub(start), len = seg.length();
          d.beam.position.copy(start); d.beam.quaternion.setFromUnitVectors(UP, seg.normalize()); d.beam.scale.set(0.05, len, 0.05);
          d.beam.material.color.setRGB(...NODE_COLOR[n.type]);
          d.beam.visible = true;
          if (Math.random() < 0.4) fx.spark(end, NODE_COLOR[n.type], 1, 3, 0.4);
          if (d.t <= 0) {
            const take = Math.min(3, Math.ceil(n.amount));
            d.cargo = { type: n.type, n: take };
            n.claimed = false;
            mineNode(n, take);
            d.node = null; d.state = 'back';
          }
          break;
        }
        case 'back': {
          if (flyTo(d, d.dock, dt)) {
            if (d.cargo) {
              G.res[d.cargo.type] += d.cargo.n; G.stats.mined[d.cargo.type] += d.cargo.n;
              G.stats.droneHauls = (G.stats.droneHauls || 0) + 1;
              if (Math.hypot(G.player.pos.x - hub.x, G.player.pos.z - hub.z) < 45) G.events.emit('pickup', { type: d.cargo.type, n: d.cargo.n, note: '无人机' });
              fx.spark(d.pos, [0.5, 0.9, 1], 6, 3);
              d.cargo = null;
            }
            d.state = 'dock'; d.t = 1.5;
          }
          break;
        }
      }
    }
  }
}
