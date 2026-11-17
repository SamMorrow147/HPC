import CardGrid from "@/components/CardGrid";
import PageHero from "@/components/PageHero";
import { services } from "@/data/industries";
import { photo } from "@/lib/gallery";

export const metadata = { title: "Services | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Five service lines, one coatings crew"
        intro="Floors, commercial painting, industrial coatings, log home restoration and specialty finishes for plants, schools, public buildings, businesses and lake homes."
      />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <CardGrid items={services.map((s) => ({ ...s, image: photo(s.photo) }))} />
      </section>
    </>
  );
}
