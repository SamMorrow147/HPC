"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data/industries";
import { fieldPhotos, projects, SERVICE_HREFS, SERVICE_LABELS } from "@/lib/gallery";

const SERVICE_ORDER = Object.keys(SERVICE_LABELS);
const INDUSTRY_LABELS = Object.fromEntries(industries.map((i) => [i.slug, i.label]));
const STAGE_LABELS = { before: "Before", "in-progress": "In progress" };
const PAGE = 24; // project cards before "Show more"
const FIELD_PAGE = 12; // field photos before "Show all"

// Precomputed search text and before-photo flag per project / field photo.
const PROJECTS = projects.map((p) => ({
  ...p,
  hasBefore: p.photos.some((ph) => ph.stage === "before"),
  haystack: [p.title, p.summary, ...(p.story ?? []), ...(p.scope ?? []), SERVICE_LABELS[p.service], INDUSTRY_LABELS[p.industry]]
    .filter(Boolean)
    .join(" ")
    .toLowerCase(),
}));
const FIELD = fieldPhotos.map((p) => ({
  ...p,
  hasBefore: p.stage === "before",
  haystack: [p.title, p.album, p.space, p.finish, SERVICE_LABELS[p.service], INDUSTRY_LABELS[p.industry]]
    .filter(Boolean)
    .join(" ")
    .toLowerCase(),
}));

// `skip` leaves one filter out, so each facet's counts reflect the others.
function matches(item, f, skip) {
  if (skip !== "service" && f.service && item.service !== f.service) return false;
  if (skip !== "industry" && f.industry && item.industry !== f.industry) return false;
  if (skip !== "before" && f.before && !item.hasBefore) return false;
  if (f.q) {
    const words = f.q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.every((w) => item.haystack.includes(w))) return false;
  }
  return true;
}

function countBy(items, key, f) {
  const out = {};
  for (const item of items) if (matches(item, f, key) && item[key]) out[item[key]] = (out[item[key]] || 0) + 1;
  return out;
}

// Height of the sticky site header, so our own sticky bars sit just under it.
function useHeaderHeight() {
  const [h, setH] = useState(0);
  useEffect(() => {
    const el = document.querySelector("body > header");
    if (!el) return;
    const ro = new ResizeObserver(() => setH(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return h;
}

// ---- Filters -------------------------------------------------------------

function SearchBox({ value, onChange, className = "" }) {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">Search projects</span>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted"
      >
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search projects"
        className="w-full rounded-lg border border-brand-line bg-white py-2.5 pl-9 pr-3 text-sm text-brand-ink placeholder:text-brand-muted focus:border-brand-green-dark focus:outline-none"
      />
    </label>
  );
}

function OptionRow({ label, count, active, onClick }) {
  const empty = !active && !count;
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        disabled={empty}
        aria-pressed={active}
        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-[15px] transition-colors lg:py-2 lg:text-sm ${
          active
            ? "bg-brand-green-soft font-bold text-brand-green-deep shadow-[inset_3px_0_0_var(--color-brand-green-dark)]"
            : empty
              ? "cursor-default text-brand-muted/50"
              : "font-semibold text-brand-ink hover:bg-brand-green-soft"
        }`}
      >
        <span>{label}</span>
        <span className={`text-xs tabular-nums ${active ? "text-brand-green-deep" : "text-brand-muted"}`}>{count ?? 0}</span>
      </button>
    </li>
  );
}

function FacetGroup({ title, allLabel, allCount, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="px-3 text-xs font-bold uppercase tracking-wider text-brand-muted">{title}</legend>
      <ul className="mt-2 space-y-0.5">
        <OptionRow label={allLabel} count={allCount} active={!value} onClick={() => onChange(null)} />
        {options.map((o) => (
          <OptionRow
            key={o.value}
            label={o.label}
            count={o.count}
            active={value === o.value}
            onClick={() => onChange(value === o.value ? null : o.value)}
          />
        ))}
      </ul>
    </fieldset>
  );
}

function FilterPanel({ f, set, counts }) {
  return (
    <div className="space-y-7">
      <FacetGroup
        title="Service"
        allLabel="All services"
        allCount={counts.allServices}
        value={f.service}
        onChange={(v) => set({ service: v })}
        options={SERVICE_ORDER.map((s) => ({ value: s, label: SERVICE_LABELS[s], count: counts.service[s] }))}
      />
      <FacetGroup
        title="Industry"
        allLabel="All industries"
        allCount={counts.allIndustries}
        value={f.industry}
        onChange={(v) => set({ industry: v })}
        options={industries.map((i) => ({ value: i.slug, label: i.label, count: counts.industry[i.slug] }))}
      />
      <label className="flex cursor-pointer items-center gap-3 px-3 text-sm font-semibold text-brand-ink">
        <input
          type="checkbox"
          checked={f.before}
          onChange={(e) => set({ before: e.target.checked })}
          className="h-4 w-4 accent-[#557c10]"
        />
        Before &amp; after photos only
        <span className="ml-auto text-xs font-normal tabular-nums text-brand-muted">{counts.before}</span>
      </label>
    </div>
  );
}

// Mobile: filters open in a bottom sheet.
function FilterSheet({ open, onClose, f, set, counts, total, onClear, anyActive }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Filter projects">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 flex max-h-[88svh] flex-col rounded-t-2xl bg-white">
        <div className="flex items-center justify-between border-b border-brand-line px-5 py-4">
          <h2 className="text-lg font-extrabold text-brand-ink">Filter projects</h2>
          <button
            onClick={onClose}
            aria-label="Close filters"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft-white text-brand-ink"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-5">
          <FilterPanel f={f} set={set} counts={counts} />
        </div>
        <div className="flex gap-3 border-t border-brand-line px-5 py-4">
          {anyActive && (
            <button onClick={onClear} className="rounded-full px-4 py-3 text-sm font-bold text-brand-ink ring-1 ring-brand-line">
              Clear
            </button>
          )}
          <button onClick={onClose} className="flex-1 rounded-full bg-brand-ink py-3 text-sm font-bold text-white">
            Show {total} {total === 1 ? "project" : "projects"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ActiveFilters({ f, set, onClear }) {
  const tags = [
    f.service && { key: "service", label: SERVICE_LABELS[f.service] },
    f.industry && { key: "industry", label: INDUSTRY_LABELS[f.industry] },
    f.before && { key: "before", label: "Before & after", clear: { before: false } },
    f.q && { key: "q", label: `“${f.q}”`, clear: { q: "" } },
  ].filter(Boolean);
  if (!tags.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((t) => (
        <button
          key={t.key}
          onClick={() => set(t.clear ?? { [t.key]: null })}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-soft py-1 pl-3 pr-2 text-xs font-bold text-brand-green-deep hover:bg-brand-green/30"
          aria-label={`Remove filter: ${t.label}`}
        >
          {t.label}
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      ))}
      {tags.length > 1 && (
        <button onClick={onClear} className="text-xs font-bold text-brand-muted underline-offset-2 hover:underline">
          Clear all
        </button>
      )}
    </div>
  );
}

// ---- Results -------------------------------------------------------------

// Log home work is always residential, so naming both just repeats itself.
const REDUNDANT_INDUSTRY = { "log-home": "residential-lake-homes" };

function Meta({ p }) {
  const industry = REDUNDANT_INDUSTRY[p.service] === p.industry ? null : INDUSTRY_LABELS[p.industry];
  return (
    <div className="text-[11px] font-bold uppercase tracking-wider text-brand-green-dark">
      {SERVICE_LABELS[p.service]}
      {industry && <span className="text-brand-muted"> · {industry}</span>}
    </div>
  );
}

function Badges({ p, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-x-3 text-xs text-brand-muted ${className}`}>
      <span>{p.photos.length} photos</span>
      {p.hasBefore && <span className="font-semibold text-brand-oxide">Before &amp; after</span>}
    </div>
  );
}

// Compact row on phones (thumbnail beside text), photo card from sm up.
function ProjectCard({ p }) {
  return (
    <Link href={`/projects/${p.slug}`} className="group flex gap-4 sm:block">
      <div className="relative aspect-square w-24 shrink-0 self-start overflow-hidden rounded-xl bg-brand-line sm:aspect-[4/3] sm:w-full">
        <Image
          src={p.cover.file}
          alt={p.title}
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 96px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 py-0.5 sm:mt-3 sm:py-0">
        <Meta p={p} />
        <h3 className="mt-0.5 font-extrabold leading-snug text-brand-ink group-hover:text-brand-green-dark sm:mt-1 sm:text-lg">
          {p.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-brand-muted sm:text-sm sm:leading-normal">{p.summary}</p>
        <Badges p={p} className="mt-1.5" />
      </div>
    </Link>
  );
}

// Simple viewer for the one-off field photos.
function Lightbox({ photos, index, onClose, onNavigate }) {
  const photo = photos[index];
  const step = useCallback(
    (dir) => onNavigate((index + dir + photos.length) % photos.length),
    [index, photos.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [step, onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-black text-white" role="dialog" aria-modal="true">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <div className="truncate text-sm font-bold sm:text-base">{photo.title}</div>
          <div className="truncate text-xs text-white/60">
            {[SERVICE_LABELS[photo.service], INDUSTRY_LABELS[photo.industry], photo.finish, STAGE_LABELS[photo.stage]]
              .filter(Boolean)
              .join(" · ")}
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="relative flex-1" onClick={onClose}>
        <Image
          key={photo.file}
          src={photo.file}
          alt={photo.title}
          fill
          sizes="100vw"
          className="object-contain p-2 sm:p-6"
          onClick={(e) => e.stopPropagation()}
        />
        {[-1, 1].map((dir) => (
          <button
            key={dir}
            onClick={(e) => {
              e.stopPropagation();
              step(dir);
            }}
            aria-label={dir < 0 ? "Previous" : "Next"}
            className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 ${
              dir < 0 ? "left-2 sm:left-6" : "right-2 sm:right-6"
            }`}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
              <path
                d={dir < 0 ? "M12 4l-6 6 6 6" : "M8 4l6 6-6 6"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
      <div className="pb-4 pt-2 text-center text-xs text-white/50">
        {index + 1} of {photos.length} · Use ← → to browse
      </div>
    </div>
  );
}

// ---- Page ----------------------------------------------------------------

// Initial state from ?service=…&industry=…&q=…&before=1&photo=… (a photo link
// opens that field photo over the unfiltered page).
function initialState(params) {
  const photoIdx = FIELD.findIndex((p) => p.id === params.get("photo"));
  const s = params.get("service");
  const i = params.get("industry");
  return {
    filters: {
      service: photoIdx < 0 && SERVICE_LABELS[s] ? s : null,
      industry: photoIdx < 0 && INDUSTRY_LABELS[i] ? i : null,
      before: photoIdx < 0 && params.get("before") === "1",
      q: photoIdx < 0 ? params.get("q") ?? "" : "",
    },
    openIdx: photoIdx >= 0 ? photoIdx : null,
  };
}

export default function ProjectsClient() {
  const params = useSearchParams();
  const [initial] = useState(() => initialState(params));
  const [f, setF] = useState(initial.filters);
  const [openIdx, setOpenIdx] = useState(initial.openIdx);
  const [limit, setLimit] = useState(PAGE);
  const [fieldAll, setFieldAll] = useState(initial.openIdx != null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const headerH = useHeaderHeight();

  const set = useCallback((patch) => {
    setF((prev) => ({ ...prev, ...patch }));
    setLimit(PAGE);
    setFieldAll(false);
  }, []);
  const clear = useCallback(() => set({ service: null, industry: null, before: false, q: "" }), [set]);
  const anyActive = !!(f.service || f.industry || f.before || f.q);

  const shown = useMemo(() => PROJECTS.filter((p) => matches(p, f)), [f]);
  const shownField = useMemo(() => FIELD.filter((p) => matches(p, f)), [f]);
  const counts = useMemo(
    () => ({
      service: countBy(PROJECTS, "service", f),
      industry: countBy(PROJECTS, "industry", f),
      allServices: PROJECTS.filter((p) => matches(p, f, "service")).length,
      allIndustries: PROJECTS.filter((p) => matches(p, f, "industry")).length,
      before: PROJECTS.filter((p) => matches(p, f, "before") && p.hasBefore).length,
    }),
    [f]
  );

  // Keep filters in the URL so a filtered view can be shared.
  useEffect(() => {
    const q = new URLSearchParams();
    if (f.service) q.set("service", f.service);
    if (f.industry) q.set("industry", f.industry);
    if (f.before) q.set("before", "1");
    if (f.q.trim()) q.set("q", f.q.trim());
    const qs = q.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [f]);

  const visible = shown.slice(0, limit);
  const fieldVisible = fieldAll ? shownField : shownField.slice(0, FIELD_PAGE);

  return (
    <>
      <section className="border-b border-brand-line bg-brand-green-soft">
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-8 sm:pb-8 sm:pt-10 lg:pb-10 lg:pt-12">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green-dark">Our Work</p>
          <h1 className="mt-2 text-3xl font-extrabold text-brand-ink sm:text-4xl">Projects</h1>
          <p className="mt-2 hidden max-w-2xl text-brand-muted sm:block">
            {PROJECTS.length} jobs with photos from before, during and after the work, from schools and parks to
            dealerships, plants and lake homes.
          </p>
        </div>
      </section>

      {/* Mobile toolbar: search + filters button, pinned under the site header. */}
      <div
        className="sticky z-40 border-b border-brand-line bg-white/95 backdrop-blur lg:hidden"
        style={{ top: headerH }}
      >
        <div className="flex gap-2 px-4 py-3">
          <SearchBox value={f.q} onChange={(q) => set({ q })} className="flex-1" />
          <button
            onClick={() => setSheetOpen(true)}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-brand-line bg-white px-3.5 text-sm font-bold text-brand-ink"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
              <path d="M3 5h14M6 10h8M8.5 15h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Filters
            {[f.service, f.industry, f.before].filter(Boolean).length > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-ink px-1.5 text-[11px] text-white">
                {[f.service, f.industry, f.before].filter(Boolean).length}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div
            className="sticky overflow-y-auto py-8"
            style={{ top: headerH, maxHeight: `calc(100vh - ${headerH}px)` }}
          >
            <SearchBox value={f.q} onChange={(q) => set({ q })} />
            <div className="-mx-3 mt-7">
              <FilterPanel f={f} set={set} counts={counts} />
            </div>
          </div>
        </aside>

        <div className="min-w-0 py-6 lg:py-8">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="text-sm font-bold text-brand-ink" aria-live="polite">
              {shown.length} {shown.length === 1 ? "project" : "projects"}
            </p>
            {f.service && (
              <Link href={SERVICE_HREFS[f.service]} className="text-sm font-bold text-brand-green-dark hover:underline">
                About {SERVICE_LABELS[f.service]} &rarr;
              </Link>
            )}
            {!f.service && f.industry && (
              <Link href={`/industries/${f.industry}`} className="text-sm font-bold text-brand-green-dark hover:underline">
                About {INDUSTRY_LABELS[f.industry]} &rarr;
              </Link>
            )}
          </div>
          {anyActive && (
            <div className="mt-3">
              <ActiveFilters f={f} set={set} onClear={clear} />
            </div>
          )}

          {shown.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 xl:grid-cols-3">
              {visible.map((p) => (
                <ProjectCard key={p.slug} p={p} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-brand-line px-6 py-14 text-center">
              <p className="font-semibold text-brand-ink">No written-up projects match.</p>
              <button onClick={clear} className="mt-3 text-sm font-bold text-brand-green-dark hover:underline">
                Clear filters
              </button>
            </div>
          )}

          {shown.length > limit && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setLimit((n) => n + PAGE)}
                className="rounded-full px-6 py-3 text-sm font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-ink"
              >
                Show more ({shown.length - limit} left)
              </button>
            </div>
          )}

          {shownField.length > 0 && (
            <section className="mt-14 border-t border-brand-line pt-10">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-extrabold text-brand-ink">More photos</h2>
                <span className="text-sm text-brand-muted">{shownField.length}</span>
              </div>
              <p className="mt-1 max-w-2xl text-sm text-brand-muted">
                Smaller jobs and work-in-progress shots without a full write-up.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 xl:grid-cols-6">
                {fieldVisible.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setOpenIdx(i)}
                    className="group relative aspect-square overflow-hidden rounded-lg bg-brand-line"
                    title={p.title}
                  >
                    <Image
                      src={p.file}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1280px) 150px, (min-width: 640px) 25vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
              {!fieldAll && shownField.length > FIELD_PAGE && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setFieldAll(true)}
                    className="rounded-full px-6 py-3 text-sm font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-ink"
                  >
                    Show all {shownField.length} photos
                  </button>
                </div>
              )}
            </section>
          )}
        </div>
      </div>

      <FilterSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        f={f}
        set={set}
        counts={counts}
        total={shown.length}
        onClear={clear}
        anyActive={anyActive}
      />

      {openIdx != null && shownField[openIdx] && (
        <Lightbox photos={shownField} index={openIdx} onClose={() => setOpenIdx(null)} onNavigate={setOpenIdx} />
      )}
    </>
  );
}
