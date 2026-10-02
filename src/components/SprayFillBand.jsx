"use client";

import { useEffect, useRef } from "react";
import { makeSpray, upperBound, paintDots, sweepDuration } from "@/lib/spray";

// A box that gets spray-painted solid when it scrolls into view -- one
// nozzle pass right-to-left, round dots piling up behind it (lib/spray.js).
// Used as a stripe on a section edge, or stretched over a whole section
// with className="spray-band--fill". `feather` adds that many px of loose
// overspray above the solid region (bottom-anchored stripes).
//
// Droplets accumulate on the canvas frame by frame (nothing is redrawn),
// so the rAF loop is cheap and stops for good once the fill completes.
// Reduced motion paints the finished fill immediately; with JS disabled a
// plain CSS block (.spray-band-fallback) shows instead.

const BRAND_GREEN = "#79b928";

export function SprayFillBand({ color = BRAND_GREEN, className = "", feather = 0 }) {
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
      H = wrap.clientHeight + feather;
      canvas.width = Math.max(1, Math.floor(W * dpr));
      canvas.height = Math.max(1, Math.floor(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = color;
    };

    const drawFinal = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = color;
      ctx.globalAlpha = 1;
      ctx.fillRect(0, feather, W, H - feather);
    };

    const frame = (now) => {
      if (!startT) startT = now;
      const p = Math.min(1, (now - startT) / duration);

      const to = upperBound(spray, p);
      paintDots(ctx, spray, drawnTo, to);
      drawnTo = to;

      if (p >= 1) {
        drawFinal();
        done = true;
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf || done) return;
      sizeCanvas();
      if (reduceMotion) {
        drawFinal();
        done = true;
        return;
      }
      spray = makeSpray(W, H, { feather });
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
      if (done) {
        sizeCanvas();
        drawFinal();
      } else if (raf) {
        // mid-spray: rebuild at the new size and start over
        sizeCanvas();
        spray = makeSpray(W, H, { feather });
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
  }, [color, feather]);

  return (
    <div ref={wrapRef} className={`spray-band ${className}`} aria-hidden>
      <span className="spray-band-fallback" />
      <canvas
        ref={canvasRef}
        className="spray-band-canvas"
        style={feather ? { top: -feather, height: `calc(100% + ${feather}px)` } : undefined}
      />
    </div>
  );
}
