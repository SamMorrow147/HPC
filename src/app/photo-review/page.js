import Image from "next/image";
import gallery from "@/data/gallery.json";
import { SERVICE_LABELS } from "@/lib/gallery";
import { HERO_SLIDES, SECTION_PHOTOS, FEATURED_IDS } from "@/data/homepage-photos";

// Internal photo review sheet: every gallery photo, grouped by service line,
// best-rated first. Not linked from the nav or sitemap, and noindexed.

export const metadata = {
  title: "Photo Review | High Performance Coatings",
  robots: { index: false, follow: false },
};

// Where each photo appears on the homepage, e.g. ["Hero", "01 · Floor Coatings"].
const SECTION_NAMES = {
  "/floor-coatings": "Floor Coatings",
  "/commercial-painting": "Commercial Painting",
  "/industrial-coatings": "Industrial Coatings",
  "/log-home-restoration": "Log Home & Wood",
  "/specialty": "Specialty",
};
const PLACEMENTS = new Map();
const place = (id, where) => PLACEMENTS.set(id, [...(PLACEMENTS.get(id) ?? []), where]);
HERO_SLIDES.forEach((s) => place(s.id, "Hero"));
Object.entries(SECTION_PHOTOS).forEach(([href, ids], i) =>
  ids.forEach((id) => place(id, `${String(i + 1).padStart(2, "0")} · ${SECTION_NAMES[href]}`))
);
FEATURED_IDS.forEach((id) => place(id, "Recent work"));

const QUALITY_RANK = { hero: 0, good: 1, ok: 2 };
const STAGE_ORDER = { after: 0, "in-progress": 1, before: 2 };

const categories = Object.entries(SERVICE_LABELS).map(([key, label]) => ({
  key,
  label,
  photos: gallery
    .filter((p) => p.service === key)
    .sort(
      (a, b) =>
        (PLACEMENTS.has(b.id) ? 1 : 0) - (PLACEMENTS.has(a.id) ? 1 : 0) ||
        QUALITY_RANK[a.quality] - QUALITY_RANK[b.quality] ||
        (STAGE_ORDER[a.stage] ?? 0) - (STAGE_ORDER[b.stage] ?? 0) ||
        a.id.localeCompare(b.id)
    ),
}));

export default function PhotoReview() {
  return (
    <div className="bg-brand-soft-white pb-20">
      <div className="sticky top-[65px] z-30 border-b border-brand-line bg-brand-soft-white/95 backdrop-blur md:top-[101px]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-3 text-sm">
          <span className="font-extrabold text-brand-ink">Photo review</span>
          {categories.map((c) => (
            <a key={c.key} href={`#${c.key}`} className="font-semibold text-brand-steel-dark hover:text-brand-green-deep">
              {c.label} <span className="text-brand-steel">({c.photos.length})</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8">
        <p className="max-w-3xl text-sm text-brand-steel-dark">
          All {gallery.length} gallery photos by service line. Photos on the homepage come first, with a
          green ring and a tag for where they appear: Hero, a numbered service section, or Recent work.
          The rest follow best-first, with before and in-progress shots tagged in orange.
        </p>

        {categories.map((c) => (
          <section key={c.key} id={c.key} className="scroll-mt-40 pt-12">
            <h2 className="text-2xl font-extrabold text-brand-ink">
              {c.label} <span className="text-base font-semibold text-brand-steel">{c.photos.length} photos</span>
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {c.photos.map((p) => {
                const where = PLACEMENTS.get(p.id);
                return (
                  <li
                    key={p.id}
                    className={`overflow-hidden rounded-lg bg-white shadow-sm ${where ? "ring-4 ring-brand-green" : ""}`}
                  >
                    <a href={p.file} target="_blank" rel="noreferrer" className="relative block aspect-[4/3] bg-brand-concrete">
                      <Image src={p.file} alt={p.title} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw" className="object-cover" />
                      {p.stage && p.stage !== "after" && (
                        <span className="absolute right-2 top-2 rounded bg-brand-oxide px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                          {p.stage}
                        </span>
                      )}
                      {where && (
                        <span className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1">
                          {where.map((w) => (
                            <span
                              key={w}
                              className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                                w === "Hero" ? "bg-brand-green text-brand-carbon" : "bg-brand-carbon/85 text-white"
                              }`}
                            >
                              {w}
                            </span>
                          ))}
                        </span>
                      )}
                    </a>
                    <div className="px-2.5 py-2">
                      <div className="truncate text-xs font-bold text-brand-ink" title={p.title}>{p.title}</div>
                      <div className="mt-0.5 truncate text-[11px] text-brand-steel-dark" title={p.album ?? ""}>
                        <span className="font-mono">{p.id}</span> &middot; {p.w}&times;{p.h}
                        {p.album ? <> &middot; {p.album}</> : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
