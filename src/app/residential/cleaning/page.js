import CategoryHub from "@/components/CategoryHub";

export const metadata = { title: "Residential Cleaning Services | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Residential"
      title="Cleaning Services"
      intro="High-powered hot water pressure washing that makes concrete, siding, and masonry look new again — often the first step before a coating or paint job, and a great standalone service on its own."
      audience="Residential"
      serviceType="Cleaning"
    >
      <section className="mx-auto max-w-3xl px-6 pb-14 text-brand-muted">
        <p>
          Our power washing process uses hot water at high pressure to lift
          dirt, mildew, and grime that cold-water washing leaves behind.
          It&apos;s the same prep work we use before our own coating jobs —
          available as a standalone service for driveways, siding, decks,
          and patios.
        </p>
      </section>
    </CategoryHub>
  );
}
