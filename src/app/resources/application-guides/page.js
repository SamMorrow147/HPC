import PageHero from "@/components/PageHero";

export const metadata = { title: "Application Guides | High Performance Coatings" };

const STEPS = [
  {
    title: "1. Walkthrough & Estimate",
    desc: "We look at the space in person (or from photos for a rough estimate), talk through finish options, and give you a written quote — no surprises once work starts.",
  },
  {
    title: "2. Surface Prep",
    desc: "The step that actually determines how long a coating lasts. Depending on the surface, that means grinding, shot-blasting, sandblasting, or cleaning and repairing cracks and spalls before anything goes down.",
  },
  {
    title: "3. Application",
    desc: "Base coats, decorative broadcast (flake, quartz, etc.), and topcoats are applied in sequence, each with its own cure time. Most residential floors are walkable within 24 hours and fully cured within a week.",
  },
  {
    title: "4. Walkthrough & Care Instructions",
    desc: "We review the finished work with you and send care instructions — what to avoid in the first few days, and how to keep the finish looking new for years.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Application Guides"
        intro="What to expect from first call to final walkthrough."
      />
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-8">
          {STEPS.map((s) => (
            <div key={s.title} className="border-b border-brand-line pb-8 last:border-0">
              <h2 className="text-xl font-bold text-brand-ink">{s.title}</h2>
              <p className="mt-2 text-brand-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
