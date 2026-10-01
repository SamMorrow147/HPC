import PageHero from "@/components/PageHero";

export const metadata = { title: "Coating Types & Benefits | High Performance Coatings" };

const TYPES = [
  {
    name: "Epoxy",
    desc: "The most common base for our flooring systems. Strong adhesion, chemical resistance, and a wide range of decorative finishes (flake, metallic, quartz). Best for garages, basements, and most commercial floors.",
  },
  {
    name: "Polyurethane / Polyaspartic",
    desc: "Faster-curing and more UV-stable than standard epoxy, so it holds color better outdoors and can take less time to install. Often used as a topcoat over epoxy base coats, or on its own for driveways and exterior surfaces.",
  },
  {
    name: "Exterior Wood Stain",
    desc: "Penetrating stains that protect log homes, siding, and decking from UV and moisture while preserving the look of natural wood grain.",
  },
  {
    name: "Specialty Tank & Steel Coatings",
    desc: "Industrial-grade coatings for propane, fuel, and water tanks, plus steel and metal structures — built for weather exposure and long service life.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Coating Types & Benefits"
        intro="Not every surface needs the same system. Here's a plain-language rundown of what we use and why."
      />
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-8">
          {TYPES.map((t) => (
            <div key={t.name} className="border-b border-brand-line pb-8 last:border-0">
              <h2 className="text-xl font-bold text-brand-ink">{t.name}</h2>
              <p className="mt-2 text-brand-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
