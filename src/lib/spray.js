// Paint-sprayer fill engine.
//
// A real spray gun doesn't grow blobs -- it lays down a cloud of very fine
// droplets in fast, straight passes. Each pass here moves a nozzle across
// the box; droplets land around it in a gaussian cloud (dense in the middle
// of the stroke, feathered at the edges, with a little loose overspray),
// and consecutive passes overlap so coverage builds up row by row. A final
// light mist pass settles into the gaps, then the surface "wets out" to a
// solid film.
//
// Droplets are generated once, already in time order, into typed arrays so
// a frame only has to draw the slice that landed since the last frame.

function gauss() {
  return Math.random() + Math.random() + Math.random() - 1.5; // ~N(0, 0.5)
}

const STROKE_END = 0.8; // progress at which the last stroke finishes
const MIST_END = 0.9; // end of the loose mist pass
const SOLID_START = 0.8; // film starts wetting out here

export function makeSpray(W, H, { feather = 0, passes } = {}) {
  const solidH = H - feather;
  const P = passes ?? Math.max(2, Math.round(solidH / 20));
  const rowH = solidH / P;
  const meanArea = 2.7;
  const total = Math.round(((W * solidH) / meanArea) * 0.9);
  const nStroke = Math.round(total * 0.8);
  const nMist = total - nStroke;
  const n = nStroke + nMist;

  const x = new Float32Array(n);
  const y = new Float32Array(n);
  const s = new Float32Array(n);
  const a = new Float32Array(n);
  const t = new Float32Array(n);
  let c = 0;

  const perPass = Math.floor(nStroke / P);
  const lead = 40; // nozzle starts/ends outside the box
  const span = W + lead * 2;
  for (let k = 0; k < P; k++) {
    const dir = k % 2 === 0 ? 1 : -1;
    const rowY = feather + (k + 0.5) * rowH;
    for (let i = 0; i < perPass; i++) {
      const u = (i + Math.random()) / perPass; // 0..1 along this pass
      const nozzle = (dir > 0 ? u : 1 - u) * span - lead;
      const overspray = Math.random() < 0.05;
      const px = nozzle + gauss() * (overspray ? 70 : 16);
      const py = rowY + gauss() * rowH * (overspray ? 1.4 : 0.55);
      if (px < 0 || px > W || py < 0 || py > H) continue;
      x[c] = px;
      y[c] = py;
      s[c] = overspray ? 0.8 + Math.random() * 0.5 : 1 + Math.random() * 1.3;
      a[c] = overspray ? 0.35 : 0.5 + Math.random() * 0.5;
      t[c] = ((k + u) / P) * STROKE_END;
      c++;
    }
  }
  for (let i = 0; i < nMist; i++) {
    x[c] = Math.random() * W;
    y[c] = feather + Math.random() * solidH;
    s[c] = 0.8 + Math.random() * 0.9;
    a[c] = 0.5 + Math.random() * 0.4;
    t[c] = STROKE_END + (MIST_END - STROKE_END) * (i / nMist);
    c++;
  }
  return { x, y, s, a, t, count: c, feather, W, H };
}

// First dot index whose landing time is later than p.
export function upperBound(spray, p) {
  let lo = 0;
  let hi = spray.count;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (spray.t[mid] <= p) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

// Draw dots [from, to) in the current fillStyle.
export function paintDots(ctx, spray, from, to) {
  const { x, y, s, a } = spray;
  for (let i = from; i < to; i++) {
    ctx.globalAlpha = a[i];
    ctx.fillRect(x[i], y[i], s[i], s[i]);
  }
  ctx.globalAlpha = 1;
}

// 0 until the film starts wetting out, then eases up to 1 at p = 1.
export function solidAlpha(p) {
  const k = Math.min(1, Math.max(0, (p - SOLID_START) / (1 - SOLID_START)));
  return k * k * (3 - 2 * k);
}

// Fill the solid region (everything below the feather zone) at an alpha.
export function paintSolid(ctx, spray, alpha) {
  if (alpha <= 0) return;
  ctx.globalAlpha = alpha;
  ctx.fillRect(0, spray.feather, spray.W, spray.H - spray.feather);
  ctx.globalAlpha = 1;
}
