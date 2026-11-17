import CardGrid from "@/components/CardGrid";
import PageHero from "@/components/PageHero";
import { industries } from "@/data/industries";
import { photo } from "@/lib/gallery";

export const metadata = { title: "Industries We Serve | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="Who we work for"
        intro="From 3M and BNSF to fire stations, campuses, car washes and lake cabins. Pick your industry to see the projects and services that apply to it."
      />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <CardGrid
          items={industries.map((i) => ({
            label: i.label,
            href: `/industries/${i.slug}`,
            desc: i.title,
            image: photo(i.photo),
          }))}
        />
      </section>
    </>
  );
}
