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

function matches(item, service, industry) {
  return (!service || item.service === service) && (!industry || item.industry === industry);
}

function Chip({ active, onClick, children, count, tone = "solid" }) {
  const base = "inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors";
  const on = tone === "solid" ? "bg-brand-ink text-white" : "bg-brand-green text-white";
  const off =
    tone === "solid"
      ? "bg-white text-brand-ink ring-1 ring-brand-line hover:ring-brand-ink"
      : "bg-transparent text-brand-ink ring-1 ring-brand-line hover:ring-brand-green";
  return (
    <button onClick={onClick} className={`${base} ${active ? on : off}`} aria-pressed={active}>
      {children}
      {count != null && (
        <span className={`text-xs ${active ? "text-white/70" : "text-brand-muted"}`}>{count}</span>
      )}
    </button>
  );
}

function ProjectCard({ project: p, large }) {
  return (
    <Link href={`/projects/${p.slug}`} className="group block">
      <div
        className={`relative overflow-hidden rounded-2xl bg-brand-line ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}
      >
        <Image
          src={p.cover.file}
          alt={p.title}
          fill
          sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-x-2 text-xs font-bold uppercase tracking-wider text-brand-green-dark">
        <span>{SERVICE_LABELS[p.service]}</span>
        {INDUSTRY_LABELS[p.industry] && <span className="text-brand-muted">· {INDUSTRY_LABELS[p.industry]}</span>}
      </div>
      <h3
        className={`mt-1 font-extrabold leading-snug text-brand-ink group-hover:text-brand-green-dark ${
          large ? "text-2xl" : "text-lg"
        }`}
      >
        {p.title}
      </h3>
      <p className="mt-1.5 text-sm text-brand-muted">{p.summary}</p>
      <span className="mt-3 inline-block text-sm font-bold text-brand-green-dark">
        See the project &rarr;
      </span>
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

// Initial state from ?service=…&industry=…&photo=… (a photo link opens that
// field photo over the unfiltered page).
function initialState(params) {
  const photoIdx = fieldPhotos.findIndex((p) => p.id === params.get("photo"));
  if (photoIdx >= 0) return { service: null, industry: null, openIdx: photoIdx };
  const s = params.get("service");
  const i = params.get("industry");
  return {
    service: SERVICE_LABELS[s] ? s : null,
    industry: INDUSTRY_LABELS[i] ? i : null,
    openIdx: null,
  };
}

export default function ProjectsClient() {
  const params = useSearchParams();
  const [initial] = useState(() => initialState(params));
  const [service, setService] = useState(initial.service);
  const [industry, setIndustry] = useState(initial.industry);
  const [openIdx, setOpenIdx] = useState(initial.openIdx);

  const shownProjects = useMemo(() => projects.filter((p) => matches(p, service, industry)), [service, industry]);
  const shownField = useMemo(() => fieldPhotos.filter((p) => matches(p, service, industry)), [service, industry]);

  const serviceCounts = useMemo(() => {
    const out = {};
    for (const p of projects) out[p.service] = (out[p.service] || 0) + 1;
    return out;
  }, []);
  const industryCounts = useMemo(() => {
    const out = {};
    for (const p of projects) if (matches(p, service, null) && p.industry) out[p.industry] = (out[p.industry] || 0) + 1;
    return out;
  }, [service]);

  // Keep filters in the URL so a filtered view can be shared.
  useEffect(() => {
    const q = new URLSearchParams();
    if (service) q.set("service", service);
    if (industry) q.set("industry", industry);
    const qs = q.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [service, industry]);

  const pickService = (s) => {
    setService(s);
    setIndustry(null);
  };

  // Unfiltered view leads with two large featured projects.
  const [lead, rest] =
    !service && !industry ? [shownProjects.slice(0, 2), shownProjects.slice(2)] : [[], shownProjects];

  return (
    <>
      <section className="border-b border-brand-line bg-brand-green-soft">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-14">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green-dark">Our Work</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold text-brand-ink sm:text-5xl">
            Projects, start to finish
          </h1>
          <p className="mt-3 max-w-2xl text-brand-muted">
            {projects.length} jobs told the way they happened, from before shots and prep to the
            finished floor, building or log home: schools, parks, dealerships, plants and lake homes.
          </p>

          <div className="-mx-6 mt-8 flex gap-2 overflow-x-auto px-6 pb-1">
            <Chip active={!service} onClick={() => pickService(null)} count={projects.length}>
              All projects
            </Chip>
            {SERVICE_ORDER.filter((s) => serviceCounts[s]).map((s) => (
              <Chip key={s} active={service === s} onClick={() => pickService(s)} count={serviceCounts[s]}>
                {SERVICE_LABELS[s]}
              </Chip>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="-mx-6 flex items-center gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          <span className="mr-1 shrink-0 text-xs font-bold uppercase tracking-wider text-brand-muted">Industry</span>
          <Chip tone="soft" active={!industry} onClick={() => setIndustry(null)}>
            Any
          </Chip>
          {industries
            .filter((i) => industryCounts[i.slug])
            .map((i) => (
              <Chip
                key={i.slug}
                tone="soft"
                active={industry === i.slug}
                onClick={() => setIndustry(industry === i.slug ? null : i.slug)}
                count={industryCounts[i.slug]}
              >
                {i.label}
              </Chip>
            ))}
        </div>

        {service && (
          <Link
            href={SERVICE_HREFS[service]}
            className="mt-6 inline-block text-sm font-bold text-brand-green-dark hover:underline"
          >
            More about {SERVICE_LABELS[service]} &rarr;
          </Link>
        )}

        {lead.length > 0 && (
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {lead.map((p) => (
              <ProjectCard key={p.slug} project={p} large />
            ))}
          </div>
        )}

        {rest.length > 0 ? (
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          lead.length === 0 && (
            <div className="mt-8 rounded-xl border border-dashed border-brand-line py-16 text-center text-brand-muted">
              No written-up projects match that combination yet.
            </div>
          )
        )}
      </section>

      {shownField.length > 0 && (
        <section className="border-t border-brand-line bg-brand-green-soft/50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl font-extrabold text-brand-ink">From the field</h2>
            <p className="mt-1 max-w-2xl text-sm text-brand-muted">
              Smaller jobs and work-in-progress shots that don&apos;t have a full write-up.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {shownField.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setOpenIdx(i)}
                  className="group text-left"
                  title={p.title}
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-brand-line">
                    <Image
                      src={p.file}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-1.5 line-clamp-2 text-xs font-semibold text-brand-ink">{p.title}</div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {openIdx != null && shownField[openIdx] && (
        <Lightbox
          photos={shownField}
          index={openIdx}
          onClose={() => setOpenIdx(null)}
          onNavigate={setOpenIdx}
        />
      )}
    </>
  );
}
