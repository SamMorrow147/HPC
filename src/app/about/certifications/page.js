import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Certifications & Affiliations | High Performance Coatings" };

const CERTS = [
  { name: "EPA RRP Lead-Safe Certified", file: "/logos/epa.png", desc: "Certified for lead-safe renovation, repair, and painting work on homes built before 1978." },
  { name: "NACE International — Twin Cities Section", file: "/logos/nace.jpg", desc: "Affiliated with the Twin Cities section of NACE, the industry association for coatings and corrosion control." },
  { name: "Central CERT Certification Program", file: "/logos/central-cert.jpg", desc: "Certified through the Central CERT program." },
  { name: "Buffalo Area Chamber of Commerce", file: "/logos/buffalo-chamber.png", desc: "Member, Buffalo Area Chamber of Commerce & Tourism Bureau." },
];

export default function Page() {
  return (
    <>
      <PageHero kicker="About" title="Certifications & Affiliations" />
      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-xl font-bold text-brand-ink">Certifications</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {CERTS.map((c) => (
            <div key={c.name} className="flex items-center gap-5 rounded-xl border border-brand-line bg-white p-5">
              <div className="relative h-20 w-28 shrink-0">
                <Image src={c.file} alt={c.name} fill className="object-contain" />
              </div>
              <div>
                <div className="font-semibold text-brand-ink">{c.name}</div>
                <div className="mt-0.5 text-sm text-brand-muted">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-brand-muted">
          If your home was built before 1978, lead-safe rules apply to any
          painting, sanding or stripping. Mention it when you{" "}
          <Link href="/contact/free-estimate" className="font-semibold text-brand-green-dark hover:underline">
            request an estimate
          </Link>
          .
        </p>
      </section>
    </>
  );
}
