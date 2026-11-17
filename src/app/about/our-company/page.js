import Image from "next/image";
import PageHero from "@/components/PageHero";
import { photo } from "@/lib/gallery";

export const metadata = { title: "Our Company | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero kicker="About" title="Our Company" />
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-brand-muted">
          <p>
            High Performance Coatings has specialized in coatings and
            surfaces since 1998. What started as a residential epoxy
            flooring company now runs five service lines: floor coatings,
            commercial and institutional painting, industrial coatings and
            tank lining, log home and wood restoration, and specialty
            finishes. Our clients range from 3M, BNSF and Kraft to fire
            stations, universities and lake cabins.
          </p>
          <p>
            We&apos;re locally owned and operated, headquartered in Buffalo,
            MN, with crews working across the Twin Cities, lakes country
            around Alexandria, and southern Minnesota, plus regular jobs in
            Wisconsin, the Dakotas and Iowa. Regardless of the
            project demand, perfection and satisfaction are the standard we
            hold ourselves to — and surface preparation, done right before
            anything else happens, is what separates a coating that lasts
            from one that doesn&apos;t.
          </p>
          <p>
            We work directly with homeowners, and alongside architects,
            facility managers, and property owners on commercial and
            industrial projects — schools and campuses, government and
            public-safety buildings, manufacturing plants, dealerships, car
            washes, and more.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src={photo("f224")} alt="HPC crew staining a log home gable" fill className="object-cover" />
        </div>
      </section>
    </>
  );
}
