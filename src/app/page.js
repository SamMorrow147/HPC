import Image from "next/image";
import Link from "next/link";
import { clientLogos, industries } from "@/data/industries";
import LogoMarquee from "@/components/LogoMarquee";
import { photo, photoHref } from "@/lib/gallery";
import gallery from "@/data/gallery.json";
import { SprayFillBand } from "@/components/SprayFillBand";
import HeroShowcase from "@/components/HeroShowcase";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import SectionSlideshow from "@/components/SectionSlideshow";
import { HERO_SLIDES, SECTION_PHOTOS, FEATURED_IDS } from "@/data/homepage-photos";

const heroSlides = HERO_SLIDES.map((s) => {
  const p = gallery.find((g) => g.id === s.id);
  return { ...s, src: p.file, alt: p.title, caption: p.album || p.title };
});
const featured = FEATURED_IDS.map((id) => gallery.find((p) => p.id === id));

// Every service section gets sprayed in its own light tint as it scrolls
// in, so each line reads as its own band. Tints alternate down the page:
// lime, sage, slate (Steel), timber, sage. Sprays alternate
// direction. Text uses the deeper green/steel shades so it stays AA on every tint.
const SECTION_TINTS = ["#e5ecd3", "#d4dbcf", "#d5dbdf", "#dcd2c3", "#d4dbcf"];

// One full section per service line. Proof points are pulled from the
// service pages so the homepage never claims more than they do. Slideshow
// photos live in SECTION_PHOTOS (src/data/homepage-photos.js).
const SERVICE_SECTIONS = [
  {
    label: "Floor Coatings",
    href: "/floor-coatings",
    alt: "Epoxy floor coating in a commercial facility",
    title: "Epoxy, polyaspartic and urethane cement floors, installed year-round",
    body: "Our biggest service line. Flake, metallic and quartz epoxy, one-day polyaspartic, urethane cement for kitchens and breweries, and polished concrete. We grind off failed coatings from other contractors and prep the slab so the new system stays down.",
    points: [
      "40,000 sq ft single floor for Wallace Carlson",
      "2014 Nicollet Bus Garage floor, no wear more than 10 years later",
      "Mercedes-Benz Bloomington, Mr. Carwash, Casey's & Cenex",
      "Cold-weather products, so floors go in all winter",
    ],
  },
  {
    label: "Commercial Painting",
    href: "/commercial-painting",
    alt: "Commercial interior painting at a school",
    title: "Schools, fire stations and campuses, painted around the people using them",
    body: "Interior and exterior painting for schools, government buildings, hotels, retail and dealerships, scheduled over breaks and off-hours so the building stays open. Lockers, partitions and metal fixtures get refinished in place with electrostatic painting.",
    points: [
      "1,000+ lockers refinished electrostatically at St. Louis Park HS",
      "NDSU, St. Cloud State, UW-River Falls & Park Center HS",
      "Fire stations, jails, MnDOT, NAVFAC & the National Guard Armory",
      "Lake Harriet Bandshell & Kenwood Mansion",
    ],
  },
  {
    label: "Industrial Coatings",
    href: "/industrial-coatings",
    alt: "Coating a wind turbine tower from a boom lift",
    title: "Tank linings and steel for 3M, BNSF, Kraft and Univar",
    body: "We sandblast and line chemical, food and water tanks, recoat structural steel, and coat railyard and agency fuel tanks. For these jobs a failed coating means downtime, so prep and lining are done by the same crew.",
    points: [
      "Univar sodium hydroxide tank, blasted and relined",
      "Kraft Albany food tanks & Cottage Grove water storage",
      "BNSF railyard fuel tanks; ConVault tanks for USFWS & MN DNR",
      "3M machine refurbishment & the Great River Energy wind turbine",
    ],
  },
  {
    label: "Log Home & Wood Restoration",
    href: "/log-home-restoration",
    alt: "Restored log home with fresh stain",
    title: "Log home and cabin restoration across lakes country",
    body: "We strip, repair, chink and stain log homes and cabins across Minnesota and western Wisconsin, then come back every few years for a maintenance coat so the logs don't need another full strip. Most of this work comes from neighbors who saw the house next door.",
    points: [
      "Ecoblast or steam stripping that doesn't chew up the wood",
      "Rotted logs and shakes replaced before the finish goes on",
      "A three-coat stain, then a maintenance coat every few years",
      "Back to Lake Ida in Alexandria more than eight times",
    ],
  },
  {
    label: "Specialty",
    href: "/specialty",
    alt: "Specialty coating and wallcovering work",
    title: "Wallcovering, decorative concrete, waterproofing and murals",
    body: "Work outside standard painting and floor coating, each with its own products and methods: tackable wallcovering for schools, stained and historic concrete, traffic coatings for balconies and decks, and hand-painted logos and murals.",
    points: [
      "Koroseal tackwall across metro schools",
      "165-year-old concrete restored at St. Anthony Main",
      "BASF traffic coatings on St. Cloud State stadium balconies",
      "Lake Byllesby Pavilion ceiling mural",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: charcoal copy panel left, rotating job photos right (photos on top on mobile) */}
      <section className="relative flex flex-col overflow-hidden bg-brand-charcoal lg:grid lg:min-h-[min(760px,calc(100svh-100px))] lg:grid-cols-[minmax(0,11fr)_minmax(0,13fr)]">
        <div className="@container relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-14 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-12">
          <p className="whitespace-nowrap text-[min(0.75rem,3.75cqi)] font-bold uppercase tracking-[0.15em] text-brand-green sm:text-[min(0.75rem,3.25cqi)] sm:tracking-[0.25em]">
            Commercial &middot; Industrial &middot; Residential
          </p>
          {/* Always two lines, two words each: sized off the column width
              (cqi) so "Better Performance." never wraps. */}
          <h1 className="mt-5 text-[min(8.2cqi,4.25rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-white">
            <span className="block whitespace-nowrap">Better Surfaces.</span>
            <span className="block whitespace-nowrap text-brand-green">Better Performance.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
            Epoxy flooring, industrial coatings, commercial painting and
            restoration from a Minnesota contractor with 25+ years on the job.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/free-estimate"
              className="rounded-full bg-brand-red px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-white hover:text-brand-ink"
            >
              Request a Bid
            </Link>
            <Link
              href="/projects"
              className="rounded-full border-2 border-white/80 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:border-white hover:bg-white hover:text-brand-ink"
            >
              See Our Work
            </Link>
          </div>
          <div className="mt-10 flex max-w-md flex-col items-center gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:gap-5 sm:text-left">
            <ServiceAreaMap className="w-56 shrink-0 sm:w-40" />
            <div>
              <p className="text-2xl font-extrabold text-white">Serving 5 states</p>
              {/* Full state names (not abbreviations) so search engines and AI
                  answers can match the service area. */}
              <p className="mt-1.5 text-lg leading-relaxed text-white/70">
                Headquartered in Buffalo, Minnesota, with crews working across
                Minnesota, Wisconsin, North Dakota, South Dakota and Iowa.
              </p>
            </div>
          </div>
        </div>
        <HeroShowcase slides={heroSlides} />
        <SprayFillBand feather={14} />
      </section>

      {/* Trusted by */}
      <section className="overflow-hidden border-b border-brand-line bg-white py-12">
        <p className="px-6 text-center text-xs font-bold uppercase tracking-widest text-brand-muted">
          Trusted since 1998 by manufacturers, schools, agencies and brands across the Upper Midwest
        </p>
        <div className="mt-8">
          <LogoMarquee logos={clientLogos} />
        </div>
      </section>

      {/* Services: one section per line */}
      {SERVICE_SECTIONS.map((s, i) => {
        // Hero-style split: the slideshow runs full-bleed on one half (edge to
        // edge, top to bottom); copy sits on the other half, aligned to the
        // page container. Photo side alternates.
        const photoRight = i % 2 === 1;
        const edge = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";
        return (
          <section key={s.href} className="relative">
            <SprayFillBand
              className="spray-band--fill"
              color={SECTION_TINTS[i]}
              feather={18}
              featherBottom={18}
              direction={i % 2 ? "rtl" : "ltr"}
            />
            <div className="relative z-10 grid lg:min-h-[560px] lg:grid-cols-2">
              <SectionSlideshow
                offset={i * 900}
                className={`aspect-[4/3] lg:aspect-auto ${photoRight ? "lg:order-2" : ""}`}
                slides={SECTION_PHOTOS[s.href].map((id, j) => ({
                  src: photo(id),
                  alt: j === 0 ? s.alt : gallery.find((p) => p.id === id).title,
                }))}
              />
              <div
                className={`flex flex-col justify-center px-6 py-12 sm:px-10 lg:py-20 ${
                  photoRight ? "lg:pr-14 lg:pl-[var(--edge)]" : "lg:pl-14 lg:pr-[var(--edge)]"
                }`}
                style={{ "--edge": edge }}
              >
                <p className="text-sm font-bold uppercase tracking-widest text-brand-green-deep">
                  {String(i + 1).padStart(2, "0")} &middot; {s.label}
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-brand-ink">{s.title}</h2>
                <p className="mt-4 text-brand-steel-dark">{s.body}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-brand-ink">
                  {s.points.map((pt) => (
                    <li key={pt}>&bull; {pt}</li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="mt-6 self-start rounded-full bg-brand-ink px-6 py-3 text-sm font-bold text-white transition-colors duration-150 hover:bg-brand-green hover:text-brand-ink"
                >
                  {s.label} &rarr;
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* Industries */}
      <section className="bg-brand-green-soft py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-extrabold text-brand-ink">Industries we serve</h2>
          <p className="mt-2 max-w-xl text-brand-muted">
            Projects and services grouped by the kind of building.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group rounded-xl border border-brand-line bg-white p-5 transition-shadow hover:shadow-lg"
              >
                <div className="font-bold text-brand-ink group-hover:text-brand-green-dark">
                  {ind.label} &rarr;
                </div>
                <div className="mt-1 text-sm text-brand-muted">
                  {ind.services
                    .slice(0, 3)
                    .map((s) => s.label)
                    .join(" · ")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-brand-charcoal py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {[
            ["1998", "Coating floors, buildings & tanks since"],
            ["5 states", "MN, WI, ND, SD & IA"],
            ["40,000 sq ft", "Largest single floor (Wallace Carlson)"],
            ["10+ years", "2014 Nicollet Bus Garage floor, still no wear"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold text-brand-green sm:text-4xl">{num}</div>
              <div className="mt-1 text-sm text-white/70">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured gallery strip */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold text-brand-ink">Recent work</h2>
          <Link href="/projects" className="text-sm font-bold text-brand-green-dark hover:underline">
            See all projects &rarr;
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {featured.map((p) => (
            <Link
              key={p.id}
              href={photoHref(p)}
              className="group relative block aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={p.file}
                alt={p.title}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <span className="text-xs font-semibold text-white">{p.album || p.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-14">
        <SprayFillBand className="spray-band--fill" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-brand-ink">
              Have a spec, a bid package or a floor that&apos;s failing?
            </h2>
            <p className="mt-1 text-brand-ink/80">
              Commercial bids and free residential estimates across MN, WI,
              ND, SD &amp; IA. Floors go in year-round.
            </p>
          </div>
          <Link
            href="/contact/free-estimate"
            className="shrink-0 rounded-full bg-brand-ink px-7 py-3 text-sm font-bold text-white transition-colors duration-150 hover:bg-white hover:text-brand-ink"
          >
            Request a Bid or Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
