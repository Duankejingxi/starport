// —— 曲速 / 虫洞穿越：全屏着色器画面 + 目的地字幕，结束时白光一闪 ——
const VS = 'attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }';
const FS = `precision highp float;
uniform vec2 uR; uniform float uT, uK, uE;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// 角向周期噪声：x 方向以 P 为周期，避免 atan 接缝
float n(vec2 p, float P){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  vec2 i1 = vec2(mod(i.x + 1.0, P), i.y); i.x = mod(i.x, P);
  return mix(mix(h(i), h(vec2(i1.x, i.y)), f.x), mix(h(i+vec2(0,1)), h(vec2(i1.x, i.y+1.0)), f.x), f.y); }
void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*uR) / uR.y;
  float r = length(uv), a = atan(uv.y, uv.x);
  float speed = 0.6 + uK * 5.0;
  // 隧道坐标：越靠中心越远
  float z = 0.35 / max(r, 0.02) + uT * speed;
  float u = a / 6.28318 + 0.5;
  // 拉长的星光条纹（细而锐利）
  float s1 = pow(n(vec2(u * 180.0, z * 0.5), 180.0), 22.0) * 4.0;
  float s2 = pow(n(vec2(u * 96.0, z * 1.1 + 3.0), 96.0), 16.0) * 2.0;
  // 缓慢旋转的气体壁
  float sw = z * 0.05;
  float wall = n(vec2((u + sw) * 6.0, z * 0.5), 6.0) * n(vec2((u - sw) * 12.0, z * 1.3), 12.0);
  vec3 gas = mix(vec3(0.04, 0.1, 0.3), vec3(0.8, 0.4, 0.16), smoothstep(0.15, 0.55, wall)) * wall * 0.9;
  float edge = smoothstep(0.0, 0.5, r);
  vec3 col = gas * edge * (0.4 + uK) + vec3(0.75, 0.88, 1.0) * (s1 + s2) * edge * smoothstep(0.02, 0.25, r);
  // 中心：虫洞出口，带引力透镜光环
  float core = exp(-r * r * (60.0 - uE * 50.0)) * (0.6 + uE * 3.0);
  float ring = exp(-pow((r - 0.12 - uE * 0.25) * 30.0, 2.0)) * (0.5 + uE);
  col += vec3(1.0, 0.92, 0.8) * core + vec3(0.7, 0.85, 1.0) * ring;
  // 暗角
  col *= 1.0 - smoothstep(0.6, 1.3, r) * 0.6;
  col = col / (1.0 + col);
  gl_FragColor = vec4(pow(col, vec3(0.85)), 1.0);
}`;

export function playWarp(lines, done, dur = 7) {
  const cv = document.createElement('canvas');
  cv.id = 'warp'; document.body.appendChild(cv);
  const cap = document.createElement('div'); cap.id = 'warp-cap'; cap.innerHTML = lines.map((l, i) => `<p style="animation-delay:${0.8 + i * 1.1}s">${l}</p>`).join('');
  document.body.appendChild(cap);
  const flash = document.createElement('div'); flash.id = 'warp-flash'; document.body.appendChild(flash);
  const gl = cv.getContext('webgl');
  const end = () => { flash.classList.add('on'); setTimeout(done, 650); };
  if (!gl) { setTimeout(end, dur * 1000); return; }
  const sh = (t, src) => { const s = gl.createShader(t); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
  const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = k => gl.getUniformLocation(pr, k), uR = U('uR'), uT = U('uT'), uK = U('uK'), uE = U('uE');
  const t0 = performance.now(); let tt = 0, last = t0, ended = false;
  (function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const el = (now - t0) / 1000, k = Math.min(1, el / dur);
    const sc = Math.min(1, 1280 / innerWidth);
    const w = Math.round(innerWidth * sc), h = Math.round(innerHeight * sc);
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    gl.viewport(0, 0, w, h);
    // 加速 → 巡航 → 出口逼近
    const K = Math.min(1, el / 1.8) * (1 - Math.max(0, k - 0.85) * 2);
    tt += dt * (0.5 + K * 1.2);
    gl.uniform2f(uR, w, h); gl.uniform1f(uT, tt); gl.uniform1f(uK, K); gl.uniform1f(uE, Math.max(0, (k - 0.7) / 0.3));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (k >= 1 && !ended) { ended = true; end(); }
    if (!ended || el < dur + 1) requestAnimationFrame(loop);
  })(t0);
}
