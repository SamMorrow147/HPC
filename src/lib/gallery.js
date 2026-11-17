import gallery from "@/data/gallery.json";
import { projects as PROJECT_COPY, slugify } from "@/data/projects";

// Lookups over the curated gallery (src/data/gallery.json, built by
// scripts/build-gallery.py). Pages reference photos by id so a retitled or
// rejected photo can't silently linger as a hard-coded path.

const QUALITY_RANK = { hero: 0, good: 1, ok: 2 };
const STAGE_ORDER = { before: 0, "in-progress": 1, after: 2 };
const byId = new Map(gallery.map((p) => [p.id, p]));

export const SERVICE_LABELS = {
  "floor-coatings": "Floor Coatings",
  "commercial-painting": "Commercial Painting",
  industrial: "Industrial",
  "log-home": "Log Homes & Residential",
  specialty: "Specialty",
};
export const SERVICE_HREFS = {
  "floor-coatings": "/floor-coatings",
  "commercial-painting": "/commercial-painting",
  industrial: "/industrial-coatings",
  "log-home": "/log-home-restoration",
  specialty: "/specialty",
};

export function photo(id) {
  const p = byId.get(id);
  if (!p) throw new Error(`Unknown gallery photo id: ${id}`);
  return p.file;
}

// ---- Projects: gallery albums that have a case-study write-up ----------

function pickCover(photos) {
  return [...photos].sort(
    (a, b) =>
      (a.stage === "after" ? 0 : 1) - (b.stage === "after" ? 0 : 1) ||
      QUALITY_RANK[a.quality] - QUALITY_RANK[b.quality] ||
      b.w / b.h - a.w / a.h // prefer landscape for heroes
  )[0];
}

export const projects = Object.entries(PROJECT_COPY)
  .map(([group, copy]) => {
    const photos = gallery
      .filter((p) => p.group === group)
      .sort((a, b) => STAGE_ORDER[a.stage] - STAGE_ORDER[b.stage]);
    if (!photos.length) throw new Error(`Project "${group}" has no gallery photos`);
    const cover = pickCover(photos);
    return {
      ...copy,
      group,
      slug: slugify(cover.album || cover.title),
      title: cover.album || cover.title,
      service: cover.service,
      industry: cover.industry,
      finish: photos.find((p) => p.finish)?.finish ?? null,
      cover,
      photos,
      rank: Math.min(...photos.map((p) => QUALITY_RANK[p.quality])),
    };
  })
  .sort(
    (a, b) =>
      (b.featured ? 1 : 0) - (a.featured ? 1 : 0) ||
      a.rank - b.rank ||
      b.photos.length - a.photos.length
  );

const projectByGroup = new Map(projects.map((p) => [p.group, p]));

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export function relatedProjects(project, limit = 3) {
  const others = projects.filter((p) => p.slug !== project.slug);
  const sameService = others.filter((p) => p.service === project.service);
  const sameIndustry = others.filter(
    (p) => project.industry && p.industry === project.industry && p.service !== project.service
  );
  return [...sameService, ...sameIndustry, ...others].filter((p, i, all) => all.indexOf(p) === i).slice(0, limit);
}

// Photos that aren't part of a written-up project ("From the field").
export const fieldPhotos = gallery.filter((p) => !projectByGroup.has(p.group));

// Where a photo lives on the site: its project page, or the field grid.
export function photoHref(p) {
  const project = projectByGroup.get(p.group);
  return project ? `/projects/${project.slug}` : `/projects?photo=${p.id}`;
}

// Best finished photos matching every given filter, one per job.
export function photosFor({ service, industry, spaces, limit = 8 } = {}) {
  return gallery
    .filter(
      (p) =>
        (!service || p.service === service) &&
        (!industry || p.industry === industry) &&
        (!spaces || spaces.includes(p.space)) &&
        p.stage !== "before"
    )
    .sort((a, b) => QUALITY_RANK[a.quality] - QUALITY_RANK[b.quality])
    // one photo per job, so a single album can't fill the whole strip
    .filter((p, i, all) => !p.group || all.findIndex((q) => q.group === p.group) === i)
    .slice(0, limit);
}
