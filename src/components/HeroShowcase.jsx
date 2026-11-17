"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Right-hand photo panel of the homepage hero. One real job per service
// line; hovering (or focusing) a tab swaps the photo, otherwise it cycles.
const ROTATE_MS = 6000;

export default function HeroShowcase({ slides }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), ROTATE_MS);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  return (
    <div
      className="relative order-first h-full min-h-[420px] overflow-hidden bg-black lg:order-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          sizes="(min-width: 1024px) 60vw, 100vw"
          fill
          priority={i === 0}
          className={`object-cover transition-all duration-1000 ease-out ${
            i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          style={{ objectPosition: s.position ?? "center" }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-brand-charcoal to-transparent lg:block" />

      {/* project caption */}
      <div className="absolute right-0 top-0 hidden bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm sm:block">
        {slides[active].caption}
      </div>

      {/* service tabs; on desktop the panel sits on the hero's green spray
          band (44px), so they're lifted clear of it. On mobile the panel
          stacks above the copy and the band is further down. */}
      <ul className="absolute inset-x-0 bottom-0 grid grid-cols-2 sm:grid-cols-4 lg:bottom-11">
        {slides.map((s, i) => (
          <li key={s.label}>
            <Link
              href={s.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group block border-t-4 px-4 py-4 transition-colors ${
                i === active
                  ? "border-brand-green bg-black/70"
                  : "border-white/15 bg-black/30 hover:bg-black/50"
              }`}
            >
              <span className="block text-[11px] font-bold tracking-widest text-brand-green">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-sm font-bold uppercase tracking-wide text-white">
                {s.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
