import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Commercial & Industrial Services | High Performance Coatings" };

const CATEGORIES = [
  {
    label: "Floor Coatings",
    href: "/commercial/floor-coatings",
    desc: "Schools, healthcare, food service, manufacturing, retail & more.",
    image: "/gallery/curated/gymnasium-basketball-court.jpg",
  },
  {
    label: "Painting Services",
    href: "/commercial/painting",
    desc: "Offices, hospitality, schools, property management, industrial.",
    image: "/gallery/curated/modern-office-lobby.jpg",
  },
  {
    label: "Surface Prep & Specialty",
    href: "/commercial/surface-prep",
    desc: "Sandblasting and LP / fuel / water tank coatings.",
    image: "/gallery/murals/marthaler-2.jpg",
  },
  {
    label: "Cleaning Services",
    href: "/commercial/cleaning",
    desc: "Scheduled power washing for commercial properties.",
    image: "/gallery/site/commercail-coatings-0.jpg",
  },
  {
    label: "Murals",
    href: "/commercial/murals",
    desc: "Custom mural work for businesses, schools & public spaces.",
    image: "/gallery/murals/crossroads-0.jpg",
  },
];

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-green">
          Commercial &amp; Industrial
        </p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold text-brand-ink">
          Coatings and finishes built for commercial traffic
        </h1>
        <p className="mt-4 max-w-xl text-brand-muted">
          Floor coatings, painting, surface prep, and murals for schools,
          healthcare, hospitality, manufacturing, and more &mdash; scheduled
          around your business.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
