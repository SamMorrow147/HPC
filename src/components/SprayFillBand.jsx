"use client";

import { useEffect, useRef } from "react";
import { makeSpray, upperBound, paintDots, sweepDuration } from "@/lib/spray";

// A box that gets spray-painted solid when it scrolls into view -- one
// nozzle pass right-to-left, round dots piling up behind it (lib/spray.js).
// Used as a stripe on a section edge, or stretched over a whole section
// with className="spray-band--fill". `direction` ("rtl" | "ltr") sets which
// way the nozzle travels; the tape pull runs back the other way. `feather` /
// `featherBottom` add that many px of loose overspray above / below the
// solid region; once the pass finishes, that overspray is "taped off" --
// wiped away opposite the spray's direction like pulling masking tape --
// leaving crisp edges.
//
// Droplets accumulate on the canvas frame by frame (nothing is redrawn),
// so the rAF loop is cheap and stops for good once the fill completes.
// Reduced motion paints the finished fill immediately; with JS disabled a
// plain CSS block (.spray-band-fallback) shows instead.

const BRAND_GREEN = "#92d51f";

export function SprayFillBand({ color = BRAND_GREEN, className = "", feather = 0, featherBottom = 0, direction = "rtl" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    wrap.dataset.armed = "true"; // JS is running -- hide the no-JS fallback

    let raf = 0;
    let done = false;
    let spray = null;
    let W = 0;
    let H = 0;
    let startT = 0;
    let duration = 3000;
    let drawnTo = 0; // dot index already on the canvas

    const sizeCanvas = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = wrap.clientWidth;
      H = wrap.clientHeight + feather + featherBottom;
      canvas.width = Math.max(1, Math.floor(W * dpr));
      canvas.height = Math.max(1, Math.floor(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = color;
    };

    // Close any pinholes in the solid region. The feather zone keeps its
    // speckles until the tape pull wipes them.
    const drawFinal = () => {
      ctx.fillStyle = color;
      ctx.fillRect(0, feather, W, H - feather - featherBottom);
    };

    // Finished, taped-off state without animating (reduced motion / resize).
    const drawComplete = () => {
      ctx.clearRect(0, 0, W, H);
      drawFinal();
    };

    const TAPE_DELAY = 280; // beat between the last droplet and the pull
    const TAPE_PULL = 1000;
    const easeInOut = (k) => (k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2);
    let tapeStart = 0;

    // Pull the tape: clear the overspray above the stripe, sweeping
    // left-to-right, so a hard line is left behind.
    const peel = (now) => {
      if (!tapeStart) tapeStart = now + TAPE_DELAY;
      const k = Math.max(0, Math.min(1, (now - tapeStart) / TAPE_PULL));
      const pulled = W * easeInOut(k);
      const x0 = direction === "ltr" ? W - pulled : 0;
      ctx.clearRect(x0, 0, pulled, feather);
      ctx.clearRect(x0, H - featherBottom, pulled, featherBottom);
      if (k >= 1) {
        done = true;
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(peel);
    };

    const frame = (now) => {
      if (!startT) startT = now;
      const p = Math.min(1, (now - startT) / duration);

      const to = upperBound(spray, p);
      paintDots(ctx, spray, drawnTo, to);
      drawnTo = to;

      if (p >= 1) {
        drawFinal();
        if (feather > 0 || featherBottom > 0) {
          tapeStart = 0;
          raf = requestAnimationFrame(peel);
        } else {
          done = true;
          raf = 0;
        }
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf || done) return;
      sizeCanvas();
      if (reduceMotion) {
        drawComplete();
        done = true;
        return;
      }
      spray = makeSpray(W, H, { feather, featherBottom, direction });
      duration = sweepDuration(W);
      drawnTo = 0;
      startT = 0;
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          start();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(wrap);

    const onResize = () => {
      // Mobile address-bar collapse fires height-only resizes while
      // scrolling -- only a width change matters for a horizontal stroke.
      if (wrap.clientWidth === W) return;
      if (done || (raf && drawnTo >= spray.count)) {
        // finished, or mid tape pull: snap to the crisp final state
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
        done = true;
        sizeCanvas();
        drawComplete();
      } else if (raf && drawnTo < spray.count) {
        // mid-spray: rebuild at the new size and start over
        sizeCanvas();
        spray = makeSpray(W, H, { feather, featherBottom, direction });
        drawnTo = 0;
        startT = 0;
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [color, feather, featherBottom, direction]);

  return (
    <div ref={wrapRef} className={`spray-band ${className}`} aria-hidden>
      <span className="spray-band-fallback" style={{ background: color }} />
      <canvas
        ref={canvasRef}
        className="spray-band-canvas"
        style={
          feather || featherBottom
            ? { top: -feather, height: `calc(100% + ${feather + featherBottom}px)` }
            : undefined
        }
      />
    </div>
  );
}
