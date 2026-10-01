import PageHero from "@/components/PageHero";

export const metadata = { title: "Blog & Articles | High Performance Coatings" };

const PLANNED_TOPICS = [
  "How to choose between flake, quartz, and metallic finishes",
  "Caring for a log home in a Minnesota winter",
  "What surface prep actually involves (and why it matters more than the topcoat)",
  "Epoxy vs. polyaspartic: which is right for your garage?",
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Blog & Articles"
        intro="This section is still being built out — here's what we're planning to cover first."
      />
      <section className="mx-auto max-w-3xl px-6 py-14">
        <ul className="space-y-3">
          {PLANNED_TOPICS.map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-lg border border-dashed border-brand-line p-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
              <span className="text-brand-ink">{t}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
