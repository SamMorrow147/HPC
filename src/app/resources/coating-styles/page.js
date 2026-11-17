import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Coating Styles & Colors | High Performance Coatings" };

// Swatches are CSS approximations of each finish, not real photos -- the
// original site's style photos turned out to be mostly manufacturer
// catalog material (see HPC Sitemap/scrape/photo-quality-report.md), so
// real finish photography is a follow-up task rather than something to
// fake here.
const STYLES = [
  { name: "Flake", desc: "Color chips broadcast into the base coat for texture and hide — the most popular residential garage finish.", swatch: "repeating-conic-gradient(#8b8f93 0% 4%, #d8d2c4 4% 8%, #5c5f61 8% 12%, #c9a876 12% 16%)" },
  { name: "Metallic", desc: "Pearlescent pigments worked by hand into a marbled look with depth. No two floors come out the same.", swatch: "radial-gradient(circle at 30% 30%, #9fb8c9, #4a6577 60%, #27394a)" },
  { name: "Quartz", desc: "Colored quartz sand broadcast for a durable, slip-resistant, uniformly textured floor.", swatch: "repeating-linear-gradient(45deg, #c7bba3 0 6px, #a89a7a 6px 12px, #8c7d5e 12px 18px)" },
  { name: "Mica", desc: "Natural mica minerals for a subtle shimmer and stone-like depth.", swatch: "radial-gradient(circle at 60% 40%, #d9d2c3, #a79f8c 70%)" },
  { name: "Wood Look", desc: "Decorative stain techniques that mimic natural wood grain on concrete.", swatch: "repeating-linear-gradient(90deg, #8a5a33 0 8px, #6e4526 8px 14px, #9c6a3f 14px 22px)" },
  { name: "Solid Color", desc: "A clean, uniform color coat — simple, cost-effective, and easy to maintain.", swatch: "#5c9220" },
  { name: "Custom Flake", desc: "Design your own blend of flake colors to match a brand, team, or personal style.", swatch: "repeating-conic-gradient(#d62839 0% 8%, #f0701f 8% 16%, #79b928 16% 24%, #1a1d1f 24% 32%)" },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Coating Styles & Colors"
        intro="Seven finish systems, from a clean solid color to a fully custom flake blend."
      />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STYLES.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-xl border border-brand-line bg-white">
              <div className="h-32" style={{ background: s.swatch }} />
              <div className="p-5">
                <h3 className="font-bold text-brand-ink">{s.name}</h3>
                <p className="mt-1.5 text-sm text-brand-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-brand-muted">
          Swatches above are representative, not exact — see real finishes
          in person with a sample board at your estimate, or browse the{" "}
          <Link href="/projects" className="font-semibold text-brand-green hover:underline">
            project gallery
          </Link>{" "}
          for finished floors.
        </p>
      </section>
    </>
  );
}
