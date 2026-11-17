import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Resources | High Performance Coatings" };

const ITEMS = [
  { label: "Coating Types & Benefits", href: "/resources/coating-types", desc: "Epoxy, polyurethane, and polyaspartic — what's actually different." },
  { label: "Application Guides", href: "/resources/application-guides", desc: "What to expect before, during, and after your project." },
  { label: "Coating Styles & Colors", href: "/resources/coating-styles", desc: "Flake, metallic, quartz, mica, and more finish options." },
  { label: "FAQ", href: "/resources/faq", desc: "Common questions about timelines, process, and care." },
  { label: "Blog & Articles", href: "/resources/blog", desc: "Tips and project stories from the HPC team." },
  { label: "Color Visualizer Tool", href: "/resources/color-visualizer", desc: "Preview finish colors before you commit." },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Planning a project"
        intro="Coating types, finish options, and answers to the questions we hear most."
      />
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
