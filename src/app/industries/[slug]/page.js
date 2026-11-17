import { notFound } from "next/navigation";
import CategoryHub, { RecentWork } from "@/components/CategoryHub";
import IndustrySections, { ClientLogoRow } from "@/components/IndustrySections";
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
      <IndustrySections industry={industry} />

      <ClientLogoRow names={industry.logos} />

      <RecentWork industry={industry.slug} />
    </CategoryHub>
  );
}
