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

// Sweep time for a box this wide: roughly constant nozzle speed.
export function sweepDuration(W) {
  return Math.min(2200, 700 + W * 0.7);
}

// `feather` / `featherBottom`: px of loose overspray above / below the solid
// region (H includes both).
export function makeSpray(W, H, { feather = 0, featherBottom = 0, direction = "rtl" } = {}) {
  const solidH = H - feather - featherBottom;
  const meanArea = 7.6; // mean dot area (px^2) for the size mix below
  const overlap = 8.5; // target dots covering any point inside the box
  const lead = 60; // nozzle starts/ends outside so the edges get full coverage
  const span = W + lead * 2;
  // dots land all along the nozzle's travel, so scale the count by the
  // travel/box ratio to keep the density inside the box at `overlap`
  const total = Math.round(((W * solidH) / meanArea) * overlap * (span / W));
  const nFeather = Math.round(W * (feather + featherBottom) * 0.25);
  const topShare = feather / (feather + featherBottom || 1);
  const n = total + nFeather;

  const x = new Float32Array(n);
  const y = new Float32Array(n);
  const r = new Float32Array(n);
  const t = new Float32Array(n);
  let c = 0;

  const sign = direction === "rtl" ? -1 : 1;
  const start = direction === "rtl" ? W + lead : -lead;

  const dotRadius = () => {
    const k = Math.random();
    if (k < 0.4) return 0.5 + Math.random() * 0.5; // fine specks
    if (k < 0.8) return 1.0 + Math.random() * 1.0; // mid
    return 2.0 + Math.random() * 1.2; // big drops
  };

  for (let i = 0; i < n; i++) {
    const u = (i + Math.random()) / n; // 0..1 along the nozzle's travel
    const nozzle = start + sign * u * span;
    const overspray = Math.random() < 0.05;
    const px = nozzle + gauss() * (overspray ? 120 : 28);
    let py;
    const isFeather = nFeather > 0 && Math.random() < nFeather / n;
    if (isFeather) {
      // loose overspray outside the solid region: sparse, fading away from it
      py =
        Math.random() < topShare
          ? feather - Math.abs(gauss()) * feather * 0.7
          : feather + solidH + Math.abs(gauss()) * featherBottom * 0.7;
    } else {
      // centers may sit a few px outside the box so edge pixels get the
      // same coverage as the middle (the canvas clips them)
      const edgeTop = feather > 0 ? 0 : 4;
      const edgeBottom = featherBottom > 0 ? 0 : 4;
      py = feather - edgeTop + Math.random() * (solidH + edgeTop + edgeBottom);
    }
    if (px < -4 || px > W + 4 || py < -4 || py > H + 4) continue;
    x[c] = px;
    y[c] = py;
    // overspray is fine mist, not the big drops that build the solid fill
    r[c] = isFeather ? 0.4 + Math.random() * 0.7 : dotRadius();
    t[c] = u;
    c++;
  }
  return { x, y, r, t, count: c, feather, featherBottom, W, H };
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
