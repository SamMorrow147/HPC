import CategoryHub from "@/components/CategoryHub";

export const metadata = { title: "Commercial Cleaning Services | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Commercial & Industrial"
      title="Cleaning Services"
      intro="Scheduled power washing and surface cleaning for commercial properties — exteriors, walkways, loading docks, and more."
      audience="Commercial"
      serviceType="Cleaning"
    >
      <section className="mx-auto max-w-3xl px-6 pb-14 text-brand-muted">
        <p>
          Routine or one-time commercial power washing, often paired with a
          coating or painting project but available on its own schedule too.
        </p>
      </section>
    </CategoryHub>
  );
}
