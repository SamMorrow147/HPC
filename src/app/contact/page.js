import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Contact Us | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero kicker="Contact" title="Get in touch" intro="Reach out to the office closer to your project." />
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-brand-line bg-white p-7">
            <h2 className="text-lg font-bold text-brand-ink">Alexandria Area</h2>
            <p className="mt-1 text-sm text-brand-muted">Mike Wheeler — Owner / Operator</p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="tel:3208152141" className="block font-semibold text-brand-green-dark hover:underline">320-815-2141</a>
              <a href="mailto:Mike@HighPerformanceCoatingsMN.com" className="block text-brand-ink hover:underline">
                Mike@HighPerformanceCoatingsMN.com
              </a>
              <p className="text-brand-muted">Alexandria, MN 56308</p>
            </div>
          </div>
          <div className="rounded-xl border border-brand-line bg-white p-7">
            <h2 className="text-lg font-bold text-brand-ink">Minneapolis Area</h2>
            <p className="mt-1 text-sm text-brand-muted">Sam Adams — General Manager</p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="tel:7632045889" className="block font-semibold text-brand-green-dark hover:underline">763-204-5889</a>
              <a href="mailto:Sam@HighPerformanceCoatingsMN.com" className="block text-brand-ink hover:underline">
                Sam@HighPerformanceCoatingsMN.com
              </a>
              <p className="text-brand-muted">568 50th Street NE, Buffalo, MN 55313</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-brand-green-soft p-8 text-center">
          <h2 className="text-xl font-bold text-brand-ink">Ready to get a quote?</h2>
          <p className="mt-1 text-brand-muted">Tell us about your project and we&apos;ll follow up.</p>
          <Link
            href="/contact/free-estimate"
            className="mt-5 inline-block rounded-full bg-brand-red px-7 py-3 text-sm font-bold text-white hover:bg-red-700"
          >
            Request a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
