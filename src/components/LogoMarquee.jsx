"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const SIZES = {
  // box each logo is fit inside (object-contain), tuned so wide wordmarks
  // and square seals read at a similar visual weight
  default: "h-9 w-32",
  lg: "h-12 w-32",
  square: "h-14 w-14",
};

const SPEED = 30; // auto-scroll, px per second
const IDLE_RESUME_MS = 2500; // auto-scroll resumes this long after the user stops
const STEP = 0.6; // arrow buttons move this fraction of the row width

// One row = a horizontally scrollable strip holding the logo list twice.
// Its scroll position wraps by half the content width, so it loops forever
// in both directions: auto-scroll, wheel/trackpad, touch swipe, mouse drag
// and the arrow buttons all move the same position.
function useLoopingRow(ref, direction) {
  const api = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const half = () => el.scrollWidth / 2;
    const wrap = (x) => {
      const h = half();
      return ((x % h) + h) % h;
    };

    // Start on the second copy, nudged so the lead logo clears the edge fade.
    let pos = half() - el.clientWidth * 0.08;
    let lastSet = -1;
    let hovering = false;
    let dragging = null;
    let tween = null;
    let idleUntil = 0;
    let lastT = performance.now();
    let frame;

    const apply = () => {
      pos = wrap(pos);
      el.scrollLeft = pos;
      lastSet = el.scrollLeft;
    };
    apply();

    const tick = (t) => {
      const dt = Math.min(t - lastT, 64) / 1000;
      lastT = t;
      if (tween) {
        const k = Math.min((t - tween.start) / tween.ms, 1);
        const ease = 1 - Math.pow(1 - k, 3);
        pos = tween.from + (tween.to - tween.from) * ease;
        apply();
        if (k === 1) tween = null;
      } else if (!dragging && !hovering && !reduceMotion && t > idleUntil) {
        pos += SPEED * dt * direction;
        apply();
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    // Native scrolling (wheel, trackpad, touch): adopt its position, pause auto.
    const onScroll = () => {
      if (Math.abs(el.scrollLeft - lastSet) < 1) return; // our own write
      pos = el.scrollLeft;
      idleUntil = performance.now() + IDLE_RESUME_MS;
      tween = null;
      // Near either physical end, jump by one copy so the loop stays seamless.
      if (pos <= 1) {
        pos += half();
        apply();
      } else if (pos >= half() * 2 - el.clientWidth - 1) {
        pos -= half();
        apply();
      }
    };

    // Mouse drag (touch uses native scrolling).
    const onDown = (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragging = { x: e.clientX, pos };
      tween = null;
      el.setPointerCapture(e.pointerId);
      el.dataset.dragging = "";
    };
    const onMove = (e) => {
      if (!dragging) return;
      pos = dragging.pos - (e.clientX - dragging.x);
      apply();
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = null;
      delete el.dataset.dragging;
      idleUntil = performance.now() + IDLE_RESUME_MS;
    };
    const onEnter = () => (hovering = true);
    const onLeave = () => (hovering = false);

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    api.current = {
      step(dir) {
        const from = pos;
        tween = { from, to: from + dir * el.clientWidth * STEP, start: performance.now(), ms: 450 };
        idleUntil = performance.now() + 450 + IDLE_RESUME_MS;
      },
    };

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, direction]);

  return api;
}

function Row({ logos, rowRef }) {
  return (
    <div ref={rowRef} className="logo-marquee">
      <ul className="flex w-max">
        {[...logos, ...logos].map((logo, i) => (
          <li
            key={`${logo.file}-${i}`}
            aria-hidden={i >= logos.length || undefined}
            className="flex shrink-0 items-center justify-center px-8"
          >
            <div className={`relative ${SIZES[logo.size ?? "default"]}`}>
              <Image
                src={`/logos/clients/${logo.file}`}
                alt={logo.name}
                title={logo.name}
                fill
                sizes="128px"
                // Small vector/PNG marks: skip the optimizer and load them all
                // up front so nothing is blank when the arrows jump ahead.
                unoptimized
                loading="eager"
                draggable={false}
                className="object-contain opacity-75 grayscale contrast-150 transition duration-300 hover:opacity-100 hover:grayscale-0 hover:contrast-100"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Arrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir < 0 ? "Previous logos" : "Next logos"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-ink shadow-md ring-1 ring-brand-line transition hover:bg-brand-ink hover:text-white"
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
        <path
          d={dir < 0 ? "M12 4l-6 6 6 6" : "M8 4l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function LogoMarquee({ logos }) {
  const half = Math.ceil(logos.length / 2);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const top = useLoopingRow(topRef, 1);
  const bottom = useLoopingRow(bottomRef, -1);

  // Arrows move both rows the same way so the wall reads as one strip.
  const step = (dir) => {
    top.current?.step(dir);
    bottom.current?.step(dir);
  };

  return (
    <div className="flex items-center gap-2 px-2 sm:gap-4 sm:px-6">
      <Arrow dir={-1} onClick={() => step(-1)} />
      <div className="min-w-0 flex-1 space-y-6" role="region" aria-label="Client logos">
        <Row logos={logos.slice(0, half)} rowRef={topRef} />
        <Row logos={logos.slice(half)} rowRef={bottomRef} />
      </div>
      <Arrow dir={1} onClick={() => step(1)} />
    </div>
  );
}
