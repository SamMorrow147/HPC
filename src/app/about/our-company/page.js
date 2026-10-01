import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Our Company | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero kicker="About" title="Our Company" />
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-brand-muted">
          <p>
            High Performance Coatings has spent over 23 years specializing
            in coatings and surfaces of all types — from a single garage
            floor to a full commercial build-out. What started as a
            residential epoxy flooring company has grown into a crew that
            handles floor coatings, painting and staining, surface prep, and
            now murals, for homes and businesses across Minnesota.
          </p>
          <p>
            We&apos;re locally owned and operated, with crews based out of
            the Minneapolis area and Alexandria, MN. Regardless of the
            project demand, perfection and satisfaction are the standard we
            hold ourselves to — and surface preparation, done right before
            anything else happens, is what separates a coating that lasts
            from one that doesn&apos;t.
          </p>
          <p>
            We work directly with homeowners, and alongside architects,
            facility managers, and property owners on commercial and
            industrial projects — schools, healthcare facilities, gyms,
            manufacturing plants, and more.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src="/gallery/curated/garage-flake-floor.jpg" alt="HPC project" fill className="object-cover" />
        </div>
      </section>
    </>
  );
}
