import PageHero from "@/components/PageHero";

export const metadata = { title: "Careers | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Careers"
        intro="We're always looking for skilled, reliable people to join the crew."
      />
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-5 text-brand-muted">
          <p>
            High Performance Coatings is growing, and we&apos;re looking for
            people who care about doing the job right — from surface prep
            through final finish. Experience with epoxy flooring, painting,
            or general construction is a plus, but a strong work ethic and
            attention to detail matter most.
          </p>
          <p>
            No open positions are listed right now, but we&apos;re always
            open to hearing from people who want to be considered for future
            openings.
          </p>
        </div>
        <a
          href="mailto:Sam@HighPerformanceCoatingsMN.com?subject=Careers%20Inquiry"
          className="mt-8 inline-block rounded-full bg-brand-ink px-6 py-3 text-sm font-bold text-white hover:bg-black"
        >
          Send us your info &rarr;
        </a>
      </section>
    </>
  );
}
