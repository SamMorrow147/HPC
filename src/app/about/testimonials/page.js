import PageHero from "@/components/PageHero";

export const metadata = { title: "Testimonials & Reviews | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Testimonials & Reviews"
        intro="This page is a placeholder — real client testimonials haven't been collected yet. Nothing below is a real quote."
      />
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl border border-dashed border-brand-line p-6">
              <div className="flex gap-1 text-brand-green">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.9 4.4 18l1.4-6.2L1 7.5l6.4-.6L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm italic text-brand-muted">
                [Client quote placeholder — to be replaced with a real
                testimonial]
              </p>
              <p className="mt-3 text-xs font-semibold text-brand-muted">
                [Client name], [City, MN]
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-brand-muted">
          Have a project with us? We&apos;d love to feature your review here
          — reach out through the{" "}
          <a href="/contact" className="font-semibold text-brand-green hover:underline">
            Contact
          </a>{" "}
          page.
        </p>
      </section>
    </>
  );
}
