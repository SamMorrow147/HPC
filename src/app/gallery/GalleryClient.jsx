"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import projects from "@/data/projects.json";

function uniqueSorted(values) {
  return Array.from(new Set(values.filter(Boolean))).sort();
}

const AUDIENCES = uniqueSorted(projects.map((p) => p.audience));
const SERVICE_TYPES = uniqueSorted(projects.flatMap((p) => p.serviceType));
const SPACE_TYPES = uniqueSorted(projects.flatMap((p) => p.spaceType));
const FINISHES = uniqueSorted(projects.flatMap((p) => p.finish));

function FacetGroup({ title, options, selected, onToggle }) {
  if (!options.length) return null;
  return (
    <div className="border-b border-brand-line py-4">
      <div className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-muted">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              onClick={() => onToggle(opt)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? "border-brand-green bg-brand-green text-white"
                  : "border-brand-line bg-white text-brand-ink hover:border-brand-green"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Lightbox({ project, onClose }) {
  const [copied, setCopied] = useState(false);
  if (!project) return null;

  const copyLink = async () => {
    const url = `${window.location.origin}/gallery?project=${project.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard may be unavailable; no-op for the wireframe
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid gap-1 p-1 sm:grid-cols-2">
          {project.images.map((img) => (
            <div key={img.file} className="relative aspect-[4/3]">
              <Image src={img.file} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-1.5">
            {[project.audience, ...project.serviceType, ...project.spaceType, ...project.finish]
              .filter(Boolean)
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-green-soft px-2.5 py-1 text-[11px] font-semibold text-brand-green-dark"
                >
                  {tag}
                </span>
              ))}
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-brand-ink">{project.title}</h2>
          {project.blurb && <p className="mt-2 text-brand-muted">{project.blurb}</p>}
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={copyLink}
              className="rounded-full bg-brand-ink px-5 py-2 text-sm font-bold text-white hover:bg-black"
            >
              {copied ? "Link copied!" : "Copy shareable link"}
            </button>
            <button
              onClick={onClose}
              className="rounded-full border border-brand-line px-5 py-2 text-sm font-bold text-brand-ink"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [audience, setAudience] = useState([]);
  const [service, setService] = useState([]);
  const [space, setSpace] = useState([]);
  const [finish, setFinish] = useState([]);
  const [active, setActive] = useState(null);

  const toggle = (setFn) => (value) =>
    setFn((cur) => (cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]));

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (audience.length && !audience.includes(p.audience)) return false;
      if (service.length && !p.serviceType.some((s) => service.includes(s))) return false;
      if (space.length && !p.spaceType.some((s) => space.includes(s))) return false;
      if (finish.length && !p.finish.some((f) => finish.includes(f))) return false;
      return true;
    });
  }, [audience, service, space, finish]);

  const clearAll = () => {
    setAudience([]);
    setService([]);
    setSpace([]);
    setFinish([]);
  };

  const anyActive = audience.length || service.length || space.length || finish.length;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-green">
          Our Work
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-brand-ink">Project Gallery</h1>
        <p className="mt-3 text-brand-muted">
          Filter by audience, service, space, or finish to find work like
          yours. Click any project for more photos and a shareable link.
        </p>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center justify-between pb-2">
            <span className="text-sm font-bold text-brand-ink">Filters</span>
            {anyActive ? (
              <button onClick={clearAll} className="text-xs font-semibold text-brand-red hover:underline">
                Clear all
              </button>
            ) : null}
          </div>
          <FacetGroup title="Audience" options={AUDIENCES} selected={audience} onToggle={toggle(setAudience)} />
          <FacetGroup title="Service Type" options={SERVICE_TYPES} selected={service} onToggle={toggle(setService)} />
          <FacetGroup title="Space" options={SPACE_TYPES} selected={space} onToggle={toggle(setSpace)} />
          <FacetGroup title="Finish" options={FINISHES} selected={finish} onToggle={toggle(setFinish)} />
        </aside>

        <div>
          <div className="mb-4 text-sm text-brand-muted">
            {filtered.length} project{filtered.length === 1 ? "" : "s"}
          </div>
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-brand-line py-20 text-center text-brand-muted">
              No projects match those filters yet &mdash; try clearing one.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p)}
                  className="group relative block aspect-square overflow-hidden rounded-lg text-left"
                >
                  <Image
                    src={p.images[0].file}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {p.images.length > 1 && (
                    <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white">
                      {p.images.length} photos
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3">
                    <span className="text-xs font-semibold text-white">{p.title}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <Lightbox project={active} onClose={() => setActive(null)} />
    </div>
  );
}
