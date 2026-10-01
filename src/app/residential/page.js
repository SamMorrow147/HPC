import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Residential Services | High Performance Coatings" };

const CATEGORIES = [
  {
    label: "Floor Coatings",
    href: "/residential/floor-coatings",
    desc: "Garage, basement, driveway, patios & pool decks.",
    image: "/gallery/curated/garage-flake-floor.jpg",
  },
  {
    label: "Painting & Staining",
    href: "/residential/painting",
    desc: "Exterior & interior painting, log home restoration, barns, decks.",
    image: "/gallery/curated/large-log-home-exterior.jpg",
  },
  {
    label: "Surface Prep",
    href: "/residential/surface-prep",
    desc: "Exterior masonry, concrete repair, sandblasting.",
    image: "/gallery/site/exterior-masonry-coatings-0.jpg",
  },
  {
    label: "Cleaning Services",
    href: "/residential/cleaning",
    desc: "Hot-water pressure washing for concrete, siding & decks.",
    image: "/gallery/site/driveway-coatings-1.jpg",
  },
];

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-green">
          Residential
        </p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold text-brand-ink">
          Coatings and finishes for every part of your home
        </h1>
        <p className="mt-4 max-w-xl text-brand-muted">
          From the garage floor to the log cabin siding, we handle surface
          prep through final finish with the same crew start to finish.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl p-7"
            >
              <Image
                src={c.image}
                alt={c.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
              <div className="relative">
                <h2 className="text-xl font-bold text-white">{c.label}</h2>
                <p className="mt-1 max-w-xs text-sm text-white/80">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
