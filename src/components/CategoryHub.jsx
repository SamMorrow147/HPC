import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";

function matchingProjects(audience, serviceType, spaceTypes) {
  return projects.filter(
    (p) =>
      p.audience === audience &&
      p.serviceType.includes(serviceType) &&
      (!spaceTypes || p.spaceType.some((s) => spaceTypes.includes(s)))
  );
}

function SubServiceCard({ audience, serviceType, sub }) {
  const matches = matchingProjects(audience, serviceType, sub.spaceTypes);
  const photo = matches[0]?.images?.[0];

  return (
    <div className="overflow-hidden rounded-xl border border-brand-line bg-white">
      <div className="relative aspect-[4/3] bg-brand-green-soft">
        {photo ? (
          <Image src={photo.file} alt={sub.label} fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-xs font-semibold text-brand-green-dark/60">
            Photos coming soon
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-brand-ink">{sub.label}</h3>
        {sub.blurb && <p className="mt-1.5 text-sm text-brand-muted">{sub.blurb}</p>}
        {matches.length > 0 && (
          <Link
            href="/gallery"
            className="mt-3 inline-block text-xs font-bold text-brand-green hover:underline"
          >
            See examples &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}

export default function CategoryHub({
  kicker,
  title,
  intro,
  audience,
  serviceType,
  subServices,
  heroImage,
  children,
}) {
  return (
    <>
      <section className="relative flex min-h-[320px] items-center overflow-hidden bg-brand-charcoal">
        {heroImage && (
          <>
            <Image src={heroImage} alt={title} fill className="object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </>
        )}
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-green">
            {kicker}
          </p>
          <h1 className="max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
          {intro && <p className="mt-4 max-w-xl text-white/80">{intro}</p>}
        </div>
      </section>

      {subServices?.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map((sub) => (
              <SubServiceCard key={sub.label} audience={audience} serviceType={serviceType} sub={sub} />
            ))}
          </div>
        </section>
      )}

      {children}

      <section className="bg-brand-green py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-extrabold text-white">Ready to get started?</h2>
            <p className="mt-1 text-white/90">Free estimates across Minnesota.</p>
          </div>
          <Link
            href="/contact/free-estimate"
            className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-ink hover:bg-brand-charcoal hover:text-white"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
