import Image from "next/image";
import Link from "next/link";
import { photo, photoHref, photosFor } from "@/lib/gallery";

function SubServiceCard({ service, sub }) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-line bg-white">
      <div className="relative aspect-[4/3] bg-brand-green-soft">
        <Image src={photo(sub.photo)} alt={sub.label} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-brand-ink">{sub.label}</h3>
        {sub.blurb && <p className="mt-1.5 text-sm text-brand-muted">{sub.blurb}</p>}
        {sub.href ? (
          <Link href={sub.href} className="mt-3 inline-block text-xs font-bold text-brand-green-dark hover:underline">
            Learn more &rarr;
          </Link>
        ) : (
          service && (
            <Link
              href={`/projects?service=${service}`}
              className="mt-3 inline-block text-xs font-bold text-brand-green-dark hover:underline"
            >
              See examples &rarr;
            </Link>
          )
        )}
      </div>
    </div>
  );
}

// Photo strip of the best gallery shots for a service or industry.
export function RecentWork({ service, industry, title = "Recent work" }) {
  const photos = photosFor({ service, industry, limit: 8 });
  if (!photos.length) return null;
  const q = service ? `?service=${service}` : industry ? `?industry=${industry}` : "";
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-extrabold text-brand-ink sm:text-3xl">{title}</h2>
        <Link href={`/projects${q}`} className="shrink-0 text-sm font-bold text-brand-green-dark hover:underline">
          See all projects &rarr;
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {photos.map((p) => (
          <Link
            key={p.id}
            href={photoHref(p)}
            className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src={p.file}
              alt={p.title}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-8">
              <span className="text-xs font-semibold text-white">{p.album || p.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function CategoryHub({
  kicker,
  title,
  intro,
  service,
  subServices,
  heroImage,
  children,
}) {
  // Only show work we can picture. A card without a photo stays in the page's
  // data and appears on its own once a photo id is added.
  const cards = (subServices ?? []).filter((sub) => sub.photo);
  return (
    <>
      <section className="relative flex min-h-[320px] items-center overflow-hidden bg-brand-charcoal">
        {heroImage && (
          <>
            <Image src={heroImage} alt={title} fill priority sizes="100vw" className="object-cover opacity-50" />
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

      {cards.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((sub) => (
              <SubServiceCard key={sub.label} service={service} sub={sub} />
            ))}
          </div>
        </section>
      )}

      {children}

      {service && <RecentWork service={service} />}

      <section className="bg-brand-green py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-extrabold text-white">Have a project in mind?</h2>
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
    </>
  );
}
