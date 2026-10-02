// Pointillist spray fill engine.
//
// One nozzle makes ONE pass across the box (right-to-left by default) and
// round, solid dots land around it in a gaussian cloud, piling up behind the
// nozzle until the box is filled. No rows, no back-and-forth, and the dots
// never grow -- the fill happens purely by more dots landing. A short wet-out
// at the very end closes any pinholes so the finished fill is truly solid.
// (Behavior modeled on the "Spray Dots Effect" project's SprayFillCanvas.)
//
// Dots are generated once, already in the order they land, into typed
// arrays, so a frame only draws the slice that landed since the last one.

function gauss() {
  return Math.random() + Math.random() + Math.random() - 1.5; // ~N(0, 0.5)
}

const SWEEP_END = 0.88; // progress at which the nozzle leaves the box
const SOLID_START = 0.88; // wet-out film starts here

// Sweep time for a box this wide: roughly constant nozzle speed.
export function sweepDuration(W) {
  return Math.min(2200, 700 + W * 0.7);
}

export function makeSpray(W, H, { feather = 0, direction = "rtl" } = {}) {
  const solidH = H - feather;
  const meanArea = 3.9; // mean dot area (px^2) for the size mix below
  const total = Math.round(((W * solidH) / meanArea) * 2.6);
  const nFeather = Math.round(W * feather * 0.35);
  const n = total + nFeather;

  const x = new Float32Array(n);
  const y = new Float32Array(n);
  const r = new Float32Array(n);
  const t = new Float32Array(n);
  let c = 0;

  const lead = 40; // nozzle starts/ends outside the box
  const span = W + lead * 2;
  const sign = direction === "rtl" ? -1 : 1;
  const start = direction === "rtl" ? W + lead : -lead;

  const dotRadius = () => {
    const k = Math.random();
    if (k < 0.55) return 0.5 + Math.random() * 0.4; // fine specks
    if (k < 0.9) return 0.9 + Math.random() * 0.7; // mid
    return 1.6 + Math.random() * 0.8; // occasional big drop
  };

  for (let i = 0; i < n; i++) {
    const u = (i + Math.random()) / n; // 0..1 along the nozzle's travel
    const nozzle = start + sign * u * span;
    const overspray = Math.random() < 0.05;
    const px = nozzle + gauss() * (overspray ? 120 : 28);
    let py;
    if (feather > 0 && Math.random() < nFeather / n) {
      // loose overspray above the solid region: sparse, fading upward
      py = feather - Math.abs(gauss()) * feather * 1.1;
    } else {
      py = feather + Math.random() * solidH;
    }
    if (px < 0 || px > W || py < 0 || py > H) continue;
    x[c] = px;
    y[c] = py;
    r[c] = dotRadius();
    t[c] = u * SWEEP_END;
    c++;
  }
  return { x, y, r, t, count: c, feather, W, H };
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

// Draw dots [from, to) in the current fillStyle -- one path, one fill.
export function paintDots(ctx, spray, from, to) {
  const { x, y, r } = spray;
  ctx.beginPath();
  for (let i = from; i < to; i++) {
    ctx.moveTo(x[i] + r[i], y[i]);
    ctx.arc(x[i], y[i], r[i], 0, 6.2832);
  }
  ctx.fill();
}

// 0 until the nozzle has left the box, then eases up to 1 at p = 1.
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
