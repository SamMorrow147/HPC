"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Cross-fading photo slideshow for a homepage service section. Auto-advances
// only while it's on screen, so the lead photo is what you see when you
// scroll to it (paused on hover/focus and under reduced motion); arrows and
// dots step through by hand. `offset` staggers start times so neighbouring sections
// don't all change on the same tick.
const INTERVAL_MS = 5000;

export default function SectionSlideshow({ slides, offset = 0, className = "" }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef(null);
  const count = slides.length;
  const go = (i) => setActive((i + count) % count);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t;
    const first = setTimeout(() => {
      setActive((i) => (i + 1) % count);
      t = setInterval(() => setActive((i) => (i + 1) % count), INTERVAL_MS);
    }, INTERVAL_MS + offset);
    return () => {
      clearTimeout(first);
      clearInterval(t);
    };
  }, [inView, paused, count, offset]);

  return (
    <div
      ref={rootRef}
      className={`group relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          sizes="(min-width: 768px) 50vw, 100vw"
          fill
          aria-hidden={i !== active}
          className={`object-cover transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {count > 1 && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
          {[
            ["Previous photo", -1, "left-3", "M10 3L5 8l5 5"],
            ["Next photo", 1, "right-3", "M6 3l5 5-5 5"],
          ].map(([label, step, pos, d]) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={() => go(active + step)}
              className={`absolute top-1/2 ${pos} flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/70 focus-visible:opacity-100 group-hover:opacity-100`}
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show photo ${i + 1} of ${count}`}
                aria-current={i === active}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-brand-green" : "w-1.5 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
