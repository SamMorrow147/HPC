import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Image src="/logos/hpc-logo.png" alt="High Performance Coatings" width={160} height={96} className="h-20 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Commercial, industrial and residential coatings since 1998:
              floors, commercial painting, tank lining and log home
              restoration across MN, WI, ND, SD &amp; IA.
            </p>
            <div className="mt-5 space-y-1 text-sm text-white/80">
              <div>
                <span className="text-white/50">Alexandria: </span>
                <a href="tel:3208152141" className="hover:text-brand-green">320-815-2141</a>
              </div>
              <div>
                <span className="text-white/50">Mpls: </span>
                <a href="tel:7632045889" className="hover:text-brand-green">763-204-5889</a>
              </div>
            </div>
          </div>

          {footerNav.columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                {col.title}
              </div>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/80 hover:text-brand-green">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerNav.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
          <div>&copy; {new Date().getFullYear()} High Performance Coatings, Inc.</div>
        </div>
      </div>
    </footer>
  );
}
