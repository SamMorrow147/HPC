import Link from "next/link";
import PageHero from "@/components/PageHero";
import { mainNav, footerNav } from "@/data/nav";

export const metadata = { title: "Sitemap | High Performance Coatings" };

export default function Page() {
  return (
    <>
      <PageHero kicker="Sitemap" title="Every page on this site" />
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {mainNav.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className="font-bold text-brand-ink hover:text-brand-green">
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-3 space-y-2">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="text-sm text-brand-muted hover:text-brand-green">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div>
            <span className="font-bold text-brand-ink">Legal</span>
            <ul className="mt-3 space-y-2">
              {footerNav.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-brand-muted hover:text-brand-green">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
