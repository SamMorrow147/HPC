import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "About | High Performance Coatings" };

const ITEMS = [
  { label: "Our Company", href: "/about/our-company", desc: "Coating floors, buildings, tanks and log homes since 1998." },
  { label: "Team & Leadership", href: "/about/team", desc: "The people behind the work." },
  { label: "Certifications & Affiliations", href: "/about/certifications", desc: "EPA RRP, NACE, and our supplier partners." },
  { label: "Testimonials & Reviews", href: "/about/testimonials", desc: "What clients say about working with us." },
  { label: "Careers", href: "/about/careers", desc: "Join the HPC team." },
];

export default function Page() {
  return (
    <>
      <PageHero kicker="About" title="The team behind High Performance Coatings" />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-brand-line bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="font-bold text-brand-ink">{item.label}</div>
              <div className="mt-1.5 text-sm text-brand-muted">{item.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
