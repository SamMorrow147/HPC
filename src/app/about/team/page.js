import PageHero from "@/components/PageHero";

export const metadata = { title: "Team & Leadership | High Performance Coatings" };

const TEAM = [
  {
    name: "Mike Wheeler",
    role: "Owner / Operator — Alexandria",
    phone: "320-815-2141",
    email: "Mike@HighPerformanceCoatingsMN.com",
  },
  {
    name: "Sam Adams",
    role: "General Manager — Minneapolis",
    phone: "763-204-5889",
    email: "Sam@HighPerformanceCoatingsMN.com",
  },
];

function Initials({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-green-soft text-xl font-extrabold text-brand-green-dark">
      {initials}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Team & Leadership"
        intro="Real photos of the team are on the way — here's who you'll be working with."
      />
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {TEAM.map((p) => (
            <div key={p.name} className="flex items-start gap-4 rounded-xl border border-brand-line bg-white p-6">
              <Initials name={p.name} />
              <div>
                <div className="font-bold text-brand-ink">{p.name}</div>
                <div className="text-sm text-brand-muted">{p.role}</div>
                <a href={`tel:${p.phone.replace(/-/g, "")}`} className="mt-2 block text-sm text-brand-green hover:underline">
                  {p.phone}
                </a>
                <a href={`mailto:${p.email}`} className="block text-sm text-brand-green hover:underline">
                  {p.email}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-brand-muted">
          Behind Mike and Sam is a full crew of installers and painters —
          profiles coming soon.
        </p>
      </section>
    </>
  );
}
