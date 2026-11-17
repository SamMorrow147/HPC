import Image from "next/image";
import Link from "next/link";
import gallery from "@/data/gallery.json";

export const metadata = { title: "Murals | High Performance Coatings" };

export default function Page() {
  const images = gallery.filter((p) => p.group === "lake-byllesby-mural");
  // Finished ceiling shot; looked up by id so removing an album photo can't shift it.
  const cover = images.find((p) => p.id === "m009") ?? images[images.length - 1];
  const byllesby = {
    title: "Lake Byllesby Pavilion Ceiling Mural",
    blurb:
      "A 30-foot-high ceiling mural tracing local watershed lines in diluted wood stain, developed with Locus Architecture using plotter-cut stencils.",
    images: images.map((p) => ({ file: p.file, alt: p.title })),
  };

  return (
    <>
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-brand-charcoal">
        {images.length > 0 && (
          <>
            <Image
              src={cover.file}
              alt={byllesby.title}
              fill
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </>
        )}
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-green">
            Specialty
          </p>
          <h1 className="max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">Murals</h1>
          <p className="mt-4 max-w-xl text-white/80">
            Painted logos, lettering and murals for schools, businesses and
            public buildings, including a hand-stained pavilion ceiling.
          </p>
        </div>
      </section>

      {/* Byllesby spotlight with video */}
      {images.length > 0 && (
        <section className="bg-brand-green-soft py-16">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-green-dark">
              Featured Project
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-ink">{byllesby.title}</h2>
            <p className="mt-4 max-w-2xl text-brand-muted">{byllesby.blurb}</p>

            <div className="mt-8 overflow-hidden rounded-2xl bg-black shadow-xl">
              <video
                src="/gallery/murals/byllesby-video.mp4"
                controls
                poster={cover.file}
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
            <h2 className="text-xl font-extrabold text-white">Have a wall or ceiling in mind?</h2>
            <p className="mt-1 text-white/90">Send us photos and rough dimensions and we&apos;ll talk through options.</p>
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
