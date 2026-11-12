// 星球配置：火星 → 木卫二·欧罗巴 → 开普勒-442b
export const PLANETS = {
  mars: {
    id: 'mars', name: '火星', place: '乌托邦平原', title: '新家园', next: 'europa',
    seed: 2089, gravity: 5.6, solar: 1, terraformable: true, craters: 46,
    hills: 46, ridges: 14, detail: 1.6,
    ground: { a: [0.56, 0.25, 0.14], b: [0.74, 0.40, 0.24], steep: [0.36, 0.19, 0.13], low: [0.42, 0.22, 0.16] },
    rockHSL: [0.04, 0.45, 0.22], rock: 0x8a4a30,
    sky: {
      dayTop: [0.62, 0.42, 0.29], dayHor: [0.90, 0.68, 0.50], setTop: [0.17, 0.13, 0.15], setHor: [0.58, 0.40, 0.33],
      nightTop: [0.006, 0.008, 0.022], nightHor: [0.035, 0.035, 0.055], halo: [0.35, 0.58, 0.95], storm: [0.62, 0.42, 0.28],
    },
    dust: 0xffd0a0, enemy: [0x3a1d18, 0x8a2a10, 0xff4a10], extras: 'moons', storms: true,
    intro: [
      '2089 年。',
      '地球依然美丽，但已经太拥挤、太炎热、太疲惫。',
      '「方舟计划」把人类的未来，押在了一颗红色星球上。',
      '经过七个月、两亿两千五百万公里的航行——',
      '你的着陆舱，在乌托邦平原的晨光中落地。',
      '你是第一个。<b style="color:#ff8a3d">但不会是最后一个。</b>',
    ],
  },
  europa: {
    id: 'europa', name: '木卫二·欧罗巴', place: '康纳马拉混沌区', title: '冰下之海', next: 'kepler',
    seed: 1610, gravity: 3.6, solar: 0.55, terraformable: false, craters: 14,
    hills: 16, ridges: 26, detail: 1.1,
    ground: { a: [0.80, 0.84, 0.88], b: [0.93, 0.95, 0.97], steep: [0.52, 0.36, 0.30], low: [0.62, 0.72, 0.82] },
    rockHSL: [0.58, 0.2, 0.62], rock: 0xb8c8d8,
    sky: {
      dayTop: [0.02, 0.025, 0.05], dayHor: [0.16, 0.18, 0.26], setTop: [0.01, 0.012, 0.03], setHor: [0.10, 0.10, 0.16],
      nightTop: [0.004, 0.005, 0.012], nightHor: [0.02, 0.025, 0.04], halo: [0.6, 0.7, 0.9], storm: [0.5, 0.6, 0.7],
    },
    dust: 0xdff0ff, enemy: [0x16303a, 0x2a8aa0, 0x40e0ff], extras: 'jupiter', storms: false,
    intro: [
      '火星的灯火，已经在身后亮成了一片。',
      '而你，再一次出发了。',
      '木星的第二颗卫星——欧罗巴。',
      '在它二十公里厚的冰壳之下，是一整片从未见过阳光的海洋。',
      '木星，像一轮巨大的月亮，悬在地平线上。',
      '<b style="color:#66e6ff">人类的第二个家，在冰下。</b>',
    ],
  },
  kepler: {
    id: 'kepler', name: '开普勒-442b', place: '翡翠谷地', title: '双日之地', next: null,
    seed: 442, gravity: 7.2, solar: 1.3, terraformable: false, craters: 8,
    hills: 64, ridges: 10, detail: 2.2,
    ground: { a: [0.18, 0.36, 0.30], b: [0.32, 0.52, 0.34], steep: [0.30, 0.24, 0.30], low: [0.20, 0.26, 0.40] },
    rockHSL: [0.75, 0.25, 0.3], rock: 0x6a5a8a,
    sky: {
      dayTop: [0.30, 0.50, 0.78], dayHor: [0.78, 0.86, 0.80], setTop: [0.20, 0.12, 0.30], setHor: [0.90, 0.50, 0.40],
      nightTop: [0.01, 0.01, 0.04], nightHor: [0.05, 0.04, 0.09], halo: [1.0, 0.6, 0.4], storm: [0.6, 0.7, 0.6],
    },
    dust: 0xc8ffd8, enemy: [0x1e2a16, 0x5aa02a, 0xa0ff40], extras: 'twinsuns', storms: false,
    intro: [
      '一千二百光年。',
      '冷冻舱里的三百年，对你只是一场梦。',
      '舷窗外，两颗太阳正从紫色的山脊后升起。',
      '这里有风，有云，有会在夜里发光的森林。',
      '开普勒-442b——人类第一次，来到另一颗恒星的身边。',
      '<b style="color:#a0ff70">从这里开始，人类成为了星际文明。</b>',
    ],
  },
};

const META_KEY = 'starport-meta';
export function loadMeta() {
  try { return JSON.parse(localStorage.getItem(META_KEY)) || {}; } catch (e) { return {}; }
}
export function saveMeta(m) { try { localStorage.setItem(META_KEY, JSON.stringify(m)); } catch (e) { /* 忽略 */ } }
export function clearAll() {
  try { for (const k of Object.keys(localStorage)) if (k.startsWith('starport-')) localStorage.removeItem(k); } catch (e) { /* 忽略 */ }
}

const urlPlanet = new URLSearchParams(location.search).get('planet');
export const META = loadMeta();
export const PID = PLANETS[urlPlanet] ? urlPlanet : (PLANETS[META.planet] ? META.planet : 'mars');
export const P = PLANETS[PID];
export const SAVE_KEY = PID === 'mars' ? 'starport-newhome-v1' : 'starport-planet-' + PID;
