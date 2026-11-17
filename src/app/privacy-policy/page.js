import PageHero from "@/components/PageHero";

export const metadata = { title: "Privacy Policy | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-14 text-brand-muted">
        <p className="text-sm italic">
          Draft placeholder — review with legal counsel before publishing.
        </p>
        <div>
          <h2 className="text-lg font-bold text-brand-ink">Information We Collect</h2>
          <p className="mt-2">
            When you request an estimate or contact us through this site, we
            collect the information you provide — name, phone number, email
            address, project address, and any details or photos you share
            about your project.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-brand-ink">How We Use It</h2>
          <p className="mt-2">
            We use this information solely to respond to your request,
            schedule estimates, and provide services you&apos;ve asked
            about. We don&apos;t sell or share your information with third
            parties for marketing purposes.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-brand-ink">Cookies</h2>
          <p className="mt-2">
            This site may use basic analytics to understand how visitors use
            it. No personally identifying information is collected through
            analytics alone.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-brand-ink">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be directed to{" "}
            <a href="mailto:Sam@HighPerformanceCoatingsMN.com" className="font-semibold text-brand-green-dark hover:underline">
              Sam@HighPerformanceCoatingsMN.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
