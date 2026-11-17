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

// A photo belongs to an industry-page section. `groups` pins specific albums
// when the industry tag is wrong (a dealership filed under retail, for
// example). Otherwise match service + space, and allow untagged photos when
// a space is set so locker-room floors still show up on Education.
function photoInSection(p, section, industrySlug) {
  // No service, space, or album pin means we don't have a photo for this yet.
  if (!section.groups?.length && !section.spaces?.length && !section.service) return false;
  if (section.excludeGroups?.length && section.excludeGroups.includes(p.group)) return false;
  if (section.groups?.length) return section.groups.includes(p.group);
  if (section.spaces?.length && !section.spaces.includes(p.space)) return false;
  if (section.excludeSpaces?.length && section.excludeSpaces.includes(p.space)) return false;
  if (section.service && p.service !== section.service) return false;
  if (!section.anyIndustry && industrySlug) {
    const same = p.industry === industrySlug;
    const untagged = !p.industry && section.includeUntagged && !!section.spaces?.length;
    if (!same && !untagged) return false;
  }
  return true;
}

function byFinishedQuality(a, b) {
  const stage = (a.stage === "after" ? 0 : 1) - (b.stage === "after" ? 0 : 1);
  return stage || QUALITY_RANK[a.quality] - QUALITY_RANK[b.quality] || b.w * b.h - a.w * a.h;
}

// Best finished photo for a section, optionally narrowed by a title pattern
// so "showroom floors" and "dealership painting" can share one album.
export function bestPhoto(section, industrySlug) {
  let pool = gallery.filter((p) => p.stage !== "before" && photoInSection(p, section, industrySlug));
  if (section.photoTitle) {
    const re = new RegExp(section.photoTitle, "i");
    const titled = pool.filter((p) => re.test(p.title));
    if (titled.length) pool = titled;
  }
  return pool.sort(byFinishedQuality)[0] ?? null;
}

// Case-study pages whose photos match the section, best jobs first.
export function projectsMatching(section, industrySlug) {
  return projects
    .filter((p) => p.photos.some((ph) => photoInSection(ph, section, industrySlug)))
    .sort(
      (a, b) =>
        (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.rank - b.rank || b.photos.length - a.photos.length
    );
}
