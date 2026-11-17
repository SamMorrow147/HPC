import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryHub, { RecentWork } from "@/components/CategoryHub";
import { ClientGroups, SectionHeading } from "@/components/ServiceBlocks";
import { industries } from "@/data/industries";
import { photo } from "@/lib/gallery";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  return { title: `${industry?.label ?? "Industries"} | High Performance Coatings` };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <CategoryHub
      kicker="Industries"
      title={industry.title}
      intro={industry.intro}
      heroImage={photo(industry.photo)}
    >
      <section className="mx-auto max-w-7xl px-6 py-14">
        <SectionHeading kicker="What we do here" title={`Services for ${industry.label.toLowerCase()}`} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.services.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center justify-between rounded-xl border border-brand-line bg-white p-5 transition-shadow hover:shadow-lg"
            >
              <span className="font-semibold text-brand-ink group-hover:text-brand-green-dark">{label}</span>
              <span className="text-brand-green-dark">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <ClientGroups title={`${industry.label} clients & projects`} groups={industry.clients} />

      <RecentWork industry={industry.slug} />
    </CategoryHub>
  );
}
