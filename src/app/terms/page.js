import PageHero from "@/components/PageHero";

export const metadata = { title: "Terms & Conditions | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms & Conditions" />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-14 text-brand-muted">
        <p className="text-sm italic">
          Draft placeholder — review with legal counsel before publishing.
        </p>
        <div>
          <h2 className="text-lg font-bold text-brand-ink">Use of This Site</h2>
          <p className="mt-2">
            This website is provided for informational purposes and to help
            you request estimates and learn about High Performance
            Coatings&apos; services. Project quotes provided through this
            site are estimates and are subject to confirmation after an
            in-person walkthrough.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-brand-ink">Project Agreements</h2>
          <p className="mt-2">
            Actual project work is governed by the written agreement signed
            between High Performance Coatings and the client, not by the
            content of this website.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-brand-ink">Content</h2>
          <p className="mt-2">
            Photos, project descriptions, and other content on this site
            belong to High Performance Coatings and may not be reused
            without permission.
          </p>
        </div>
      </section>
    </>
  );
}
