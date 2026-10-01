export default function PageHero({ kicker, title, intro }) {
  return (
    <section className="border-b border-brand-line bg-brand-green-soft">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-green-dark">
          {kicker}
        </p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold text-brand-ink">{title}</h1>
        {intro && <p className="mt-4 max-w-xl text-brand-muted">{intro}</p>}
      </div>
    </section>
  );
}
