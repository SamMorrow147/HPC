import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";

export const metadata = { title: "Murals | High Performance Coatings" };

const MURAL_IDS = [
  "mural-fargo-ang",
  "mural-marthaler-farms",
  "mural-schools",
  "mural-crossroads-church",
  "mural-various-business",
];

export default function Page() {
  const murals = MURAL_IDS.map((id) => projects.find((p) => p.id === id)).filter(Boolean);
  const byllesby = projects.find((p) => p.id === "mural-byllesby");

  return (
    <>
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-brand-charcoal">
        <Image
          src="/gallery/murals/fargo-4.jpg"
          alt="Fargo Air National Guard hangar mural"
          fill
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-green">
            Commercial &amp; Industrial
          </p>
          <h1 className="max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">Murals</h1>
          <p className="mt-4 max-w-xl text-white/80">
            From a 100-foot hangar to a kids&apos; ministry room painted
            floor-to-ceiling in deep space &mdash; custom mural work for
            businesses, schools, and public spaces across Minnesota.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {murals.map((m) => (
            <Link
              key={m.id}
              href="/gallery"
              className="group overflow-hidden rounded-xl border border-brand-line bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={m.images[0].file}
                  alt={m.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white">
                  {m.images.length} photos
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-brand-ink group-hover:text-brand-green">{m.title}</h3>
                <p className="mt-1.5 text-sm text-brand-muted">{m.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Byllesby spotlight with video */}
      {byllesby && (
        <section className="bg-brand-green-soft py-16">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-green">
              Featured Project
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-ink">{byllesby.title}</h2>
            <p className="mt-4 max-w-2xl text-brand-muted">{byllesby.blurb}</p>

            <div className="mt-8 overflow-hidden rounded-2xl bg-black shadow-xl">
              <video
                src="/gallery/murals/byllesby-video.mp4"
                controls
                poster={byllesby.images[0].file}
                className="aspect-video w-full"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
              {byllesby.images.slice(1, 6).map((img) => (
                <div key={img.file} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image src={img.file} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-brand-green py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-extrabold text-white">Have a space in mind?</h2>
            <p className="mt-1 text-white/90">Let&apos;s talk about what&apos;s possible.</p>
          </div>
          <Link
            href="/contact/free-estimate"
            className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-ink hover:bg-brand-charcoal hover:text-white"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
