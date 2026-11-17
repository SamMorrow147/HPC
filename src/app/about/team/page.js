import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Team & Leadership | High Performance Coatings" };

const LEADERS = [
  {
    name: "Mike Wheeler",
    role: "Owner / Operator",
    base: "Alexandria",
    phone: "320-815-2141",
    email: "Mike@HighPerformanceCoatingsMN.com",
  },
  {
    name: "Sam Adams",
    role: "General Manager",
    base: "Minneapolis",
    phone: "763-204-5889",
    email: "Sam@HighPerformanceCoatingsMN.com",
  },
];

const BASES = [
  ["Buffalo, MN", "Headquarters"],
  ["Alexandria", "Lakes country"],
  ["Minneapolis", "Twin Cities"],
];

function Initials({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-green-soft text-2xl font-extrabold text-brand-green-dark">
      {initials}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Team & Leadership"
        intro="Locally owned since 1998. Two people run the work, and a crew of installers and painters does it."
      />

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-14 md:grid-cols-2">
        {LEADERS.map((person) => (
          <article key={person.name} className="rounded-2xl border border-brand-line bg-white p-8">
            <Initials name={person.name} />
            <h2 className="mt-5 text-2xl font-extrabold text-brand-ink">{person.name}</h2>
            <p className="mt-1 font-semibold text-brand-green-dark">
              {person.role} — {person.base}
            </p>
            <div className="mt-5 space-y-1">
              <a href={`tel:${person.phone.replace(/-/g, "")}`} className="block font-semibold text-brand-ink hover:text-brand-green-dark">
                {person.phone}
              </a>
              <a href={`mailto:${person.email}`} className="block text-sm font-semibold text-brand-green-dark hover:underline">
                {person.email}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-brand-green-soft">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 sm:grid-cols-3">
          {BASES.map(([place, role]) => (
            <div key={place}>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-green-deep">{role}</div>
              <div className="mt-1 text-xl font-extrabold text-brand-ink">{place}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-extrabold text-brand-ink">The crew</h2>
        <p className="mt-3 max-w-2xl text-brand-steel-dark">
          Installers and painters work out of Buffalo and cover the Twin Cities, lakes country,
          and southern Minnesota, with regular jobs in Wisconsin, the Dakotas and Iowa. Photos of
          the crew are still being added.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-brand-ink px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-green"
          >
            Contact the team
          </Link>
          <Link href="/about/certifications" className="rounded-full border border-brand-line px-5 py-2.5 text-sm font-bold text-brand-ink hover:border-brand-ink">
            Certifications & suppliers
          </Link>
        </div>
      </section>
    </>
  );
}
