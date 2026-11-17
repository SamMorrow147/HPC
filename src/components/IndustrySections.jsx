import Image from "next/image";
import Link from "next/link";
import { clientLogos } from "@/data/industries";
import { bestPhoto, photo, photoHref, projectsMatching } from "@/lib/gallery";

const LOGO_SIZES = {
  default: "h-12 w-36",
  lg: "h-14 w-40",
  square: "h-16 w-16",
};

function ExampleLinks({ examples, moreHref, moreLabel }) {
  if (!examples.length && !moreHref) return null;
  return (
    <ul className="mt-5 space-y-2">
      {examples.map((project) => (
        <li key={project.slug}>
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-brand-green-dark hover:underline"
          >
            {project.title} &rarr;
          </Link>
        </li>
      ))}
      {moreHref && (
        <li>
          <Link href={moreHref} className="text-sm font-semibold text-brand-ink hover:text-brand-green-dark">
            {moreLabel} &rarr;
          </Link>
        </li>
      )}
    </ul>
  );
}

function WorkSection({ section, photo, examples, moreHref, flip }) {
  const href = photoHref(photo);
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-10 md:grid-cols-2 md:gap-12 md:py-12">
      <Link
        href={href}
        className={`group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-brand-line ${flip ? "md:order-2" : ""}`}
      >
        <Image
          src={photo.file}
          alt={photo.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div>
        <h3 className="text-2xl font-extrabold text-brand-ink">{section.label}</h3>
        <p className="mt-3 max-w-xl text-brand-steel-dark">{section.body}</p>
        <ExampleLinks examples={examples} moreHref={moreHref} moreLabel="See all projects like this" />
        {!examples.length && (
          <Link href={href} className="mt-5 inline-block font-semibold text-brand-green-dark hover:underline">
            See this photo &rarr;
          </Link>
        )}
      </div>
    </section>
  );
}

// Past-client marks, same treatment as the homepage marquee: contained,
// grayscale until hover. Static, because an industry page has a short list.
export function ClientLogoRow({ names }) {
  const logos = (names ?? [])
    .map((name) => clientLogos.find((logo) => logo.name === name))
    .filter(Boolean);
  if (!logos.length) return null;
  return (
    <section className="border-y border-brand-line bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-green-dark">Past clients</p>
        <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-8">
          {logos.map((logo) => (
            <li key={logo.file} className={`relative ${LOGO_SIZES[logo.size ?? "default"]}`}>
              <Image
                src={`/logos/clients/${logo.file}`}
                alt={logo.name}
                title={logo.name}
                fill
                unoptimized
                sizes="160px"
                className="object-contain opacity-75 grayscale contrast-150"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Approach({ approach }) {
  if (!approach) return null;
  return (
    <section className="bg-brand-green-soft">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green-dark">{approach.kicker}</p>
          <h2 className="mt-1 text-2xl font-extrabold text-brand-ink sm:text-3xl">{approach.title}</h2>
          <p className="mt-3 text-brand-steel-dark">{approach.intro}</p>
        </div>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {approach.points.map((point) => (
            <li key={point.label} className="overflow-hidden rounded-2xl border border-brand-line bg-white">
              {point.photo && (
                <div className="relative aspect-[4/3] bg-brand-line">
                  <Image
                    src={photo(point.photo)}
                    alt={point.label}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-extrabold text-brand-ink">{point.label}</h3>
                <p className="mt-2 text-sm text-brand-steel-dark">{point.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function IndustrySections({ industry }) {
  const sections = industry.services.map((section) => {
    const matched = projectsMatching(section, industry.slug);
    return {
      section,
      photo: bestPhoto(section, industry.slug),
      examples: matched.slice(0, 4),
      more: matched.length > 4,
    };
  });
  // Sections with no matching photo are hidden until the gallery has one.
  const pictured = sections.filter((s) => s.photo);
  const moreHref = `/projects?industry=${industry.slug}`;

  return (
    <>
      <Approach approach={industry.approach} />
      <div className="pt-6">
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green-dark">Selected work</p>
          <h2 className="mt-1 text-2xl font-extrabold text-brand-ink sm:text-3xl">
            {industry.sectionsTitle ?? `Services for ${industry.label.toLowerCase()}`}
          </h2>
        </div>
        {pictured.map((item, i) => (
          <WorkSection
            key={item.section.label}
            section={item.section}
            photo={item.photo}
            examples={item.examples}
            moreHref={item.more ? moreHref : null}
            flip={i % 2 === 1}
          />
        ))}
      </div>
    </>
  );
}
