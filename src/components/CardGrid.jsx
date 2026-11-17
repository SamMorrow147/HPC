import Image from "next/image";
import Link from "next/link";

// Photo cards linking to hub pages. `items` = [{ label, href, desc, image }]
export default function CardGrid({ items, columns = 3, height = "h-64" }) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-6 ${cols}`}>
      {items.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className={`group relative flex ${height} flex-col justify-end overflow-hidden rounded-2xl p-7`}
        >
          <Image
            src={c.image}
            alt={c.label}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
          <div className="relative">
            <h2 className="text-xl font-bold text-white">{c.label}</h2>
            {c.desc && <p className="mt-1 max-w-xs text-sm text-white/80">{c.desc}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
}
