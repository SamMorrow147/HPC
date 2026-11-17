import Link from "next/link";

// Small content sections shared by the service and industry pages.

export function SectionHeading({ kicker, title, intro }) {
  return (
    <div className="max-w-2xl">
      {kicker && (
        <p className="text-sm font-bold uppercase tracking-widest text-brand-green-dark">{kicker}</p>
      )}
      <h2 className="mt-1 text-2xl font-extrabold text-brand-ink sm:text-3xl">{title}</h2>
      {intro && <p className="mt-3 text-brand-muted">{intro}</p>}
    </div>
  );
}

// Named projects / clients, grouped. `groups` = [{ group, names: [] }]
export function ClientGroups({ kicker = "Who we've worked for", title, intro, groups, tone = "soft" }) {
  return (
    <section className={tone === "soft" ? "bg-brand-green-soft py-14" : "py-14"}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker={kicker} title={title} intro={intro} />
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.group}>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">{g.group}</div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.names.map((n) => (
                  <li
                    key={n}
                    className="rounded-full border border-brand-line bg-white px-3 py-1 text-sm text-brand-ink"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Bulleted two/three-column list. `items` = strings or { label, detail }.
export function FeatureList({ kicker, title, intro, items, columns = 3 }) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <SectionHeading kicker={kicker} title={title} intro={intro} />
      <ul className={`mt-8 grid gap-x-8 gap-y-5 ${cols}`}>
        {items.map((item) => {
          const { label, detail } = typeof item === "string" ? { label: item } : item;
          return (
            <li key={label} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
              <div>
                <div className="font-semibold text-brand-ink">{label}</div>
                {detail && <div className="mt-0.5 text-sm text-brand-muted">{detail}</div>}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// Numbered process steps.
export function Steps({ kicker, title, steps }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <SectionHeading kicker={kicker} title={title} />
      <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(([label, detail], i) => (
          <li key={label} className="rounded-xl border border-brand-line bg-white p-5">
            <div className="text-sm font-extrabold text-brand-green-dark">{String(i + 1).padStart(2, "0")}</div>
            <div className="mt-1 font-bold text-brand-ink">{label}</div>
            <div className="mt-1 text-sm text-brand-muted">{detail}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

// Big-number proof points on a dark band.
export function ProofBand({ items }) {
  return (
    <section className="bg-brand-charcoal py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([big, label]) => (
          <div key={label}>
            <div className="text-2xl font-extrabold text-brand-green">{big}</div>
            <div className="mt-1 text-sm text-white/75">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// "Industries we serve with this" link row.
export function IndustryLinks({ title = "Industries we serve", industries }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14">
      <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {industries.map((i) => (
          <Link
            key={i.slug}
            href={`/industries/${i.slug}`}
            className="rounded-full bg-brand-ink px-4 py-1.5 text-sm font-semibold text-white hover:bg-brand-green"
          >
            {i.label} &rarr;
          </Link>
        ))}
      </div>
    </section>
  );
}
