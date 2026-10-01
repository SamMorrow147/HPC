"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const SWATCHES = [
  { name: "Storm Gray", color: "#6b7280" },
  { name: "Charcoal", color: "#1c1f22" },
  { name: "Sandstone", color: "#c7bba3" },
  { name: "Pine Green", color: "#5c9220" },
  { name: "Slate Blue", color: "#4a6577" },
  { name: "Terracotta", color: "#b5542f" },
];

export default function ColorVisualizerClient() {
  const [selected, setSelected] = useState(SWATCHES[0]);

  return (
    <>
      <PageHero
        kicker="Resources"
        title="Color Visualizer"
        intro="A quick way to preview finish colors. This is a simplified mock-up — the production version would let you upload a photo of your own space."
      />
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div
          className="flex h-64 items-end justify-center rounded-2xl border border-brand-line transition-colors duration-300"
          style={{ backgroundColor: selected.color }}
        >
          <span className="mb-4 rounded-full bg-black/30 px-4 py-1.5 text-sm font-semibold text-white">
            Previewing: {selected.name}
          </span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {SWATCHES.map((s) => (
            <button
              key={s.name}
              onClick={() => setSelected(s)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
                selected.name === s.name
                  ? "border-brand-ink bg-brand-ink text-white"
                  : "border-brand-line text-brand-ink hover:border-brand-ink"
              }`}
            >
              <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: s.color }} />
              {s.name}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
