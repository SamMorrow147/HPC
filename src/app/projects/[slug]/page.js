import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import {
  getProject,
  projects,
  projectsMatching,
  relatedProjects,
  SERVICE_HREFS,
  SERVICE_LABELS,
} from "@/lib/gallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: `${project?.title ?? "Project"} | High Performance Coatings`,
    description: project?.summary,
  };
}

const CHAPTERS = [
  { stage: "before", label: "Before" },
  { stage: "in-progress", label: "The work" },
  { stage: "after", label: "The finished result" },
];

// Lay a chapter's photos out editorially, in story order: a landscape photo
// gets a row to itself every other row, everything else pairs up. Portraits
// never go full width.
function rows(photos) {
  const out = [];
  let wantWide = true;
  for (let i = 0; i < photos.length; ) {
    const p = photos[i];
    const isWide = p.w / p.h >= 1.2;
    const lastOne = i === photos.length - 1;
    if ((wantWide && isWide) || lastOne) {
      out.push([p]);
      i += 1;
    } else {
      out.push([p, photos[i + 1]]);
      i += 2;
    }
    wantWide = !wantWide;
  }
  return out;
}

// Wide rows are cropped to at least 16:10 so a 4:3 photo doesn't fill the screen.
function Figure({ photo, wide }) {
  // A lone portrait keeps half width instead of stretching across the page.
  return (
    <figure className={`min-w-0 flex-1 ${wide ? "" : "sm:max-w-[calc(50%-12px)]"}`}>
      <div
        className="relative overflow-hidden rounded-xl bg-brand-line"
        style={{ aspectRatio: wide ? Math.max(photo.w / photo.h, 1.6) : 4 / 3 }}
      >
        <Image
          src={photo.file}
          alt={photo.title}
          fill
          sizes={wide ? "(min-width: 1024px) 960px, 100vw" : "(min-width: 1024px) 480px, 50vw"}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-2 text-sm text-brand-muted">{photo.title}</figcaption>
    </figure>
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const industry = industries.find((i) => i.slug === project.industry);
  // Industries whose sections use this project, including jobs that were
  // never tagged with an industry (locker-room floors on Education).
  const fromIndustries = industries.filter((ind) =>
    ind.services.some((section) =>
      projectsMatching(section, ind.slug).some((p) => p.slug === project.slug)
    )
  );
  const chapters = CHAPTERS.map((c) => ({
    ...c,
    photos: project.photos.filter((p) => p.stage === c.stage && p.id !== project.cover.id),
  })).filter((c) => c.photos.length);
  const inIndustry = fromIndustries.length
    ? projects.filter(
        (p) => p.slug !== project.slug && fromIndustries.some((ind) => p.industry === ind.slug)
      )
    : [];
  const related = (inIndustry.length ? inIndustry : relatedProjects(project)).slice(0, 3);

  const industryLinks = fromIndustries.length ? fromIndustries : industry ? [industry] : [];

  return (
    <article>
      {/* Hero */}
      <header className="relative flex min-h-[70vh] items-end overflow-hidden bg-brand-charcoal">
        <Image
          src={project.cover.file}
          alt={project.cover.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-12 pt-32">
          <nav className="text-sm font-semibold text-white/70">
            {fromIndustries.length ? (
              <>
                <Link href="/industries" className="hover:text-white">
                  Industries
                </Link>
                <span className="mx-2">/</span>
                <Link href={`/industries/${fromIndustries[0].slug}`} className="hover:text-white">
                  {fromIndustries[0].label}
                </Link>
              </>
            ) : (
              <>
                <Link href="/projects" className="hover:text-white">
                  Our Work
                </Link>
                <span className="mx-2">/</span>
                <Link href={`/projects?service=${project.service}`} className="hover:text-white">
                  {SERVICE_LABELS[project.service]}
                </Link>
              </>
            )}
          </nav>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{project.summary}</p>
        </div>
      </header>

      {/* Way back. Sits on a solid bar so it isn't lost in the photo. */}
      <div className="border-b border-brand-line bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3 text-sm font-bold">
          <Link href="/projects" className="text-brand-green-dark hover:underline">
            &larr; All projects
          </Link>
          {fromIndustries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="text-brand-green-dark hover:underline">
              &larr; {ind.label}
            </Link>
          ))}
          <Link href={SERVICE_HREFS[project.service]} className="text-brand-ink hover:text-brand-green-dark">
            {SERVICE_LABELS[project.service]}
          </Link>
        </div>
      </div>

      {/* Next step after the project: more of this service, more of this industry. */}
      <section className="border-b border-brand-line bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-3 px-6 py-6">
          <Link
            href={SERVICE_HREFS[project.service]}
            className="rounded-full bg-brand-ink px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-green"
          >
            View more {SERVICE_LABELS[project.service].toLowerCase()}
          </Link>
          {industryLinks.map((ind) => (
            <Link
              key={ind.slug}
              href={`/projects?industry=${ind.slug}`}
              className="rounded-full border border-brand-line bg-white px-5 py-2.5 text-sm font-bold text-brand-ink hover:border-brand-green hover:text-brand-green-dark"
            >
              View more {ind.label.toLowerCase()} projects
            </Link>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_240px]">
        <div className="space-y-5 text-lg leading-relaxed text-brand-ink">
          {project.story.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <aside className="md:border-l md:border-brand-line md:pl-8">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">Scope of work</div>
          <ul className="mt-4 space-y-3">
            {project.scope.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm font-semibold text-brand-ink">
                <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" fill="none">
                  <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Photo story */}
      {chapters.map((chapter, ci) => (
        <section key={chapter.stage} className="mx-auto max-w-5xl px-6 pb-16">
          <div className="mb-6 flex items-baseline gap-4 border-t border-brand-line pt-6">
            <span className="text-sm font-extrabold text-brand-green-dark">{String(ci + 1).padStart(2, "0")}</span>
            <h2 className="text-2xl font-extrabold text-brand-ink">{chapter.label}</h2>
          </div>
          <div className="space-y-8">
            {rows(chapter.photos).map((row) => (
              <div key={row[0].id} className="flex flex-col gap-6 sm:flex-row">
                {row.map((p) => (
                  <Figure key={p.id} photo={p} wide={row.length === 1 && p.w / p.h >= 1.2} />
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Process callout */}
      <section className="bg-brand-charcoal py-14 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-green">How we do it</p>
            <h2 className="mt-1 text-2xl font-extrabold">
              Our {SERVICE_LABELS[project.service].toLowerCase()} process, systems and clients
            </h2>
          </div>
          <Link
            href={SERVICE_HREFS[project.service]}
            className="shrink-0 rounded-full border-2 border-white px-6 py-2.5 text-sm font-bold hover:bg-white hover:text-brand-ink"
          >
            {SERVICE_LABELS[project.service]} &rarr;
          </Link>
        </div>
      </section>

      {/* More projects */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-extrabold text-brand-ink sm:text-3xl">
            {fromIndustries.length === 1
              ? `More ${fromIndustries[0].label.toLowerCase()} work`
              : "More projects"}
          </h2>
          <Link
            href={fromIndustries.length === 1 ? `/projects?industry=${fromIndustries[0].slug}` : "/projects"}
            className="shrink-0 text-sm font-bold text-brand-green-dark hover:underline"
          >
            {fromIndustries.length === 1
              ? `All ${fromIndustries[0].label.toLowerCase()} projects`
              : "All our work"}{" "}
            &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-brand-line">
                <Image
                  src={p.cover.file}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-brand-green-dark">
                {SERVICE_LABELS[p.service]}
              </div>
              <h3 className="mt-1 font-bold text-brand-ink group-hover:text-brand-green-dark">{p.title}</h3>
              <p className="mt-1 text-sm text-brand-muted">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-extrabold text-white">Have a project like this?</h2>
            <p className="mt-1 text-white/90">Commercial bids and free residential estimates across MN, WI, ND, SD &amp; IA.</p>
          </div>
          <Link
            href="/contact/free-estimate"
            className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-ink hover:bg-brand-charcoal hover:text-white"
          >
            Request a Bid or Estimate
          </Link>
        </div>
      </section>
    </article>
  );
}
