import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";

const FEATURED_IDS = [
  "curated-garage-flake-floor",
  "curated-large-log-home-exterior",
  "curated-gymnasium-basketball-court",
  "mural-crossroads-church",
  "curated-metallic-epoxy-floor-detail",
  "site-driveway-coatings",
  "curated-modern-office-lobby",
  "mural-fargo-ang",
];

function findProject(idPrefix) {
  return projects.find((x) => x.id === idPrefix || x.id.startsWith(idPrefix));
}
function findImage(idPrefix) {
  const p = findProject(idPrefix);
  return p ? p.images[0].file : null;
}

const featured = FEATURED_IDS.map(findProject).filter(Boolean);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-brand-charcoal">
        <Image
          src={findImage("curated-garage-flake-floor")}
          alt="Epoxy flake garage floor coating"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-green">
            Minnesota&apos;s Choice for Coatings Since 1998
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Floors and finishes that hold up &mdash; for your home or your business.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            Garage and basement floor coatings, exterior painting and log home
            restoration, commercial flooring, and murals &mdash; done by the
            same crew that&apos;s specialized in coatings and surfaces for
            over 23 years.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/free-estimate"
              className="rounded-full bg-brand-red px-7 py-3 text-sm font-bold text-white hover:bg-red-700"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border-2 border-white px-7 py-3 text-sm font-bold text-white hover:bg-white hover:text-brand-ink"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Audience split */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/residential"
            className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl p-8"
          >
            <Image
              src={findImage("curated-large-log-home-exterior")}
              alt="Residential log home staining"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white">Residential</h2>
              <p className="mt-2 max-w-sm text-sm text-white/80">
                Garage &amp; basement floors, driveways, patios, exterior
                painting, and log home restoration.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-brand-green">
                Explore Residential Services &rarr;
              </span>
            </div>
          </Link>

          <Link
            href="/commercial"
            className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl p-8"
          >
            <Image
              src={findImage("curated-gymnasium-basketball-court")}
              alt="Commercial gymnasium floor coating"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white">
                Commercial &amp; Industrial
              </h2>
              <p className="mt-2 max-w-sm text-sm text-white/80">
                Floor coatings for schools, healthcare, food service, and
                manufacturing, plus commercial painting and murals.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-brand-green">
                Explore Commercial Services &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-brand-green-soft py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-brand-ink">
            Everything under one crew
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-brand-muted">
            One team, from surface prep to final finish.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Floor Coatings", href: "/residential/floor-coatings/garage", desc: "Epoxy, flake, metallic & more" },
              { label: "Painting & Staining", href: "/residential/painting/exterior-house-painting", desc: "Interior, exterior & log homes" },
              { label: "Surface Prep", href: "/residential/surface-prep/sandblasting", desc: "Sandblasting & concrete repair" },
              { label: "Murals", href: "/commercial/murals", desc: "Custom art for any space" },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="group rounded-xl border border-brand-line bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-3 h-10 w-10 rounded-lg bg-brand-green/15" />
                <div className="font-bold text-brand-ink group-hover:text-brand-green">
                  {s.label}
                </div>
                <div className="mt-1 text-sm text-brand-muted">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured gallery strip */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold text-brand-ink">Recent work</h2>
          <Link href="/gallery" className="text-sm font-bold text-brand-green hover:underline">
            View full gallery &rarr;
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {featured.map((p) => (
            <Link
              key={p.id}
              href="/gallery"
              className="group relative block aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={p.images[0].file}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <span className="text-xs font-semibold text-white">{p.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why HPC */}
      <section className="bg-brand-charcoal py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {[
            ["23+", "Years in business"],
            ["2", "MN service areas"],
            ["1,000+", "Projects completed"],
            ["100%", "Surface-prep focused"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-extrabold text-brand-green">{num}</div>
              <div className="mt-1 text-sm text-white/70">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mural spotlight */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src={findImage("mural-byllesby")}
              alt="Lake Byllesby Pavilion ceiling mural"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-green">
              Featured Project
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-ink">
              Lake Byllesby Pavilion Ceiling Mural
            </h2>
            <p className="mt-4 text-brand-muted">
              A 30-foot-high ceiling, hand-stained to trace the local
              watershed&apos;s rivers and lakes &mdash; designed in
              collaboration with Locus Architecture. It&apos;s the kind of
              project that shows what&apos;s possible beyond the standard
              coat of paint.
            </p>
            <Link
              href="/commercial/murals"
              className="mt-6 inline-block rounded-full bg-brand-ink px-6 py-3 text-sm font-bold text-white hover:bg-black"
            >
              See the Murals Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-green py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              Ready to start your project?
            </h2>
            <p className="mt-1 text-white/90">
              Free estimates for residential and commercial work across
              Minnesota.
            </p>
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
