"use client";

import { useEffect, useRef } from "react";
import { makeSpray, upperBound, paintDots } from "@/lib/spray";

// Hover version of the spray fill: a canvas behind a button's label where
// a nozzle sweeps right-to-left, dropping round dots until the button is solid
// (see lib/spray.js). A progress value eases toward 1 while hovered/focused
// and back toward 0 when not, and every frame is redrawn from that value --
// so leaving mid-spray smoothly un-sprays instead of snapping.
//
// Usage: inside a link/button with the .spray-hover-link class
// (position: relative + overflow: hidden), with the label wrapped in
// .spray-hover-label so it sits above the canvas and flips color as the
// paint covers it. The rAF loop only runs while progress is moving.

const BRAND_GREEN = "#79b928";

const IN_MS = 800;
const OUT_MS = 450;

export function SprayHoverFill({ fill = BRAND_GREEN }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // plain CSS hover handles it

    // Marks the link as spray-enabled so CSS can flip the label color on
    // hover (kept off for no-JS / reduced-motion visitors).
    host.dataset.sprayArmed = "true";

    let raf = 0;
    let progress = 0;
    let goal = 0;
    let lastT = 0;
    let spray = null;
    let W = 0;
    let H = 0;

    const build = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = host.clientWidth;
      H = host.clientHeight;
      canvas.width = Math.max(1, Math.floor(W * dpr));
      canvas.height = Math.max(1, Math.floor(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spray = makeSpray(W, H);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      if (progress <= 0) return;
      ctx.fillStyle = fill;
      if (progress >= 1) {
        ctx.fillRect(0, 0, W, H);
        return;
      }
      paintDots(ctx, spray, 0, upperBound(spray, progress));
    };

    const tick = (now) => {
      const dt = lastT ? now - lastT : 16;
      lastT = now;
      progress =
        goal > progress
          ? Math.min(goal, progress + dt / IN_MS)
          : Math.max(goal, progress - dt / OUT_MS);
      draw();
      if (progress !== goal) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
        lastT = 0;
      }
    };

    const setGoal = (g) => {
      goal = g;
      if (!raf) {
        if (W === 0) build();
        lastT = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    const onEnter = () => setGoal(1);
    const onLeave = () => setGoal(0);
    host.addEventListener("pointerenter", onEnter);
    host.addEventListener("pointerleave", onLeave);
    host.addEventListener("focusin", onEnter);
    host.addEventListener("focusout", onLeave);

    const onResize = () => {
      // ignore height-only resizes (mobile address bar) -- see SprayFillBand
      if (W === 0 || host.clientWidth === W) return;
      build();
      draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      host.removeEventListener("pointerenter", onEnter);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("focusin", onEnter);
      host.removeEventListener("focusout", onLeave);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
      delete host.dataset.sprayArmed;
    };
  }, [fill]);

  return <canvas ref={canvasRef} className="spray-hover-canvas" aria-hidden />;
}
