"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav } from "@/data/nav";

function DesktopMegaMenu({ item, open, onEnter, onLeave }) {
  const hasMenu = !!item.children?.length;
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={item.href}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
          open ? "text-brand-green" : "text-white hover:text-brand-green"
        }`}
      >
        {item.label}
        {hasMenu && (
          <svg
            className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </Link>

      {hasMenu && open && (
        <div className="absolute left-0 top-full z-40 w-64 rounded-b-lg border border-t-4 border-brand-line border-t-brand-green bg-white py-2 shadow-xl">
          <ul>
            {item.children.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-5 py-2.5 text-sm font-medium text-brand-ink hover:bg-brand-green-soft hover:text-brand-green-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ---- Mobile menu ---------------------------------------------------------

// First link inside each expanded section, pointing at the section's own hub
// page. Skipped when a child already links there (Contact).
const OVERVIEW_LABELS = {
  Services: "All services",
  Industries: "All industries",
  Resources: "All resources",
  About: "About HPC",
};

const PHONES = [
  { label: "Alexandria", number: "320-815-2141" },
  { label: "Twin Cities", number: "763-204-5889" },
];

const isActive = (pathname, href) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

function sectionLinks(item) {
  const links = item.children ?? [];
  if (links.some((l) => l.href === item.href)) return links;
  return [{ label: OVERVIEW_LABELS[item.label] ?? `${item.label} overview`, href: item.href, overview: true }, ...links];
}

// Three bars that fold into an X.
function MenuIcon({ open }) {
  const bar = "absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none";
  return (
    <span className="relative block h-3.5 w-5" aria-hidden="true">
      <span className={`${bar} ${open ? "top-1.5 rotate-45" : "top-0"}`} />
      <span className={`${bar} top-1.5 ${open ? "scale-x-0 opacity-0" : ""}`} />
      <span className={`${bar} ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
    </span>
  );
}

function MobileSection({ item, index, menuOpen, expanded, onToggle, pathname, onNavigate }) {
  const id = `mobile-nav-${index}`;
  const hasMenu = !!item.children?.length;
  const active = isActive(pathname, item.href) || item.children?.some((l) => isActive(pathname, l.href));
  const rowText = `text-2xl font-extrabold tracking-tight transition-colors ${
    active ? "text-brand-green" : "text-white"
  }`;

  return (
    <li
      className={`border-b border-white/10 transition ease-out motion-reduce:transition-none ${
        menuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
      }`}
      style={{
        transitionDuration: menuOpen ? "500ms" : "150ms",
        transitionDelay: menuOpen ? `${90 + index * 45}ms` : "0ms",
      }}
    >
      {hasMenu ? (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={id}
          className="flex w-full items-center justify-between py-4 text-left"
        >
          <span className={rowText}>{item.label}</span>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 motion-reduce:transition-none ${
              expanded ? "rotate-180 bg-brand-green text-brand-carbon" : "bg-white/10 text-white"
            }`}
          >
            <svg viewBox="0 0 12 12" fill="none" className="h-3.5 w-3.5">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      ) : (
        <Link href={item.href} onClick={onNavigate} className="flex items-center justify-between py-4">
          <span className={rowText}>{item.label}</span>
          <span className="flex h-9 w-9 items-center justify-center text-white/50" aria-hidden="true">
            &rarr;
          </span>
        </Link>
      )}

      {hasMenu && (
        // grid-rows 0fr -> 1fr animates to the content's natural height.
        <div
          id={id}
          inert={!expanded}
          className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="pb-4">
              {sectionLinks(item).map((link) => {
                const here = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      aria-current={here ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-lg py-2.5 pl-1 text-base transition-colors ${
                        here
                          ? "font-bold text-brand-green"
                          : link.overview
                            ? "font-bold text-white"
                            : "text-white/70 active:text-white"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${here ? "bg-brand-green" : "bg-white/20"}`}
                        aria-hidden="true"
                      />
                      {link.label}
                      {link.overview && <span aria-hidden="true">&rarr;</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

function MobileMenu({ open, onClose, pathname, expanded, setExpanded }) {
  return (
    // Hangs off the bottom of the sticky header and fills the rest of the
    // screen. Slides down as a curtain (clip-path) so the header never moves.
    <div
      id="mobile-menu"
      inert={!open}
      aria-hidden={!open}
      className={`absolute inset-x-0 top-full flex flex-col bg-brand-carbon shadow-2xl transition-[clip-path,visibility] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:hidden ${
        open ? "visible [clip-path:inset(0_0_0_0)]" : "invisible [clip-path:inset(0_0_100%_0)]"
      }`}
      style={{ height: "calc(100dvh - 100%)", transitionDuration: open ? "550ms" : "320ms" }}
    >
      {/* thin green rule that draws across as the menu opens */}
      <div
        className={`h-0.5 origin-left bg-brand-green transition-transform duration-700 ease-out motion-reduce:transition-none ${
          open ? "scale-x-100 delay-150" : "scale-x-0"
        }`}
      />

      <nav aria-label="Main" className="flex-1 overflow-y-auto overscroll-contain px-6 pt-2">
        <ul>
          {mainNav.map((item, i) => (
            <MobileSection
              key={item.label}
              item={item}
              index={i}
              menuOpen={open}
              expanded={expanded === i}
              onToggle={() => setExpanded(expanded === i ? null : i)}
              pathname={pathname}
              onNavigate={onClose}
            />
          ))}
        </ul>
      </nav>

      <div
        className={`border-t border-white/10 bg-brand-charcoal px-6 pt-4 transition ease-out motion-reduce:transition-none ${
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
          transitionDuration: open ? "500ms" : "150ms",
          transitionDelay: open ? "300ms" : "0ms",
        }}
      >
        <Link
          href="/contact/free-estimate"
          onClick={onClose}
          className="block rounded-full bg-brand-red py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white active:bg-red-700"
        >
          Request a Free Estimate
        </Link>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {PHONES.map((p) => (
            <a
              key={p.number}
              href={`tel:${p.number.replace(/-/g, "")}`}
              className="flex items-center gap-2.5 rounded-xl border border-white/15 px-3 py-2.5 text-white active:bg-white/10"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-brand-green" aria-hidden="true">
                <path
                  d="M6.6 2.8l1.6 3.4a1 1 0 01-.2 1.1L6.6 8.7a10.5 10.5 0 004.7 4.7l1.4-1.4a1 1 0 011.1-.2l3.4 1.6a1 1 0 01.6 1v2.4a1 1 0 01-1 1A15 15 0 012.2 3.4a1 1 0 011-1h2.4a1 1 0 011 .4z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="min-w-0 leading-tight">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-white/50">{p.label}</span>
                <span className="block text-sm font-semibold">{p.number}</span>
              </span>
            </a>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-white/40">Based in Buffalo, MN &middot; Serving MN, WI, ND, SD &amp; IA</p>
      </div>
    </div>
  );
}

export default function Header() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  const handleEnter = (i) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = () => {
    if (!mobileOpen) {
      // Open on the section that holds the current page.
      const i = mainNav.findIndex((item) => item.children?.some((l) => isActive(pathname, l.href)));
      setExpanded(i >= 0 ? i : null);
    }
    setMobileOpen((o) => !o);
  };

  // While open: lock page scroll, close on Escape or when the screen grows to
  // the desktop nav.
  useEffect(() => {
    if (!mobileOpen) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && closeMobile();
    const wide = window.matchMedia("(min-width: 1024px)");
    const onWide = (e) => e.matches && closeMobile();
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [mobileOpen, closeMobile]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-carbon">
      {/* top utility bar */}
      <div className="hidden bg-brand-charcoal text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <span>Based in Buffalo, MN &middot; Commercial, Industrial &amp; Residential Coatings across MN, WI, ND, SD &amp; IA</span>
          <a href="tel:7632045889" className="font-semibold hover:text-brand-green">
            763-204-5889
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-2" aria-label="High Performance Coatings home">
          <Image src="/logos/hpc-logo-nav.png" alt="HPC High Performance Coatings" width={800} height={395} priority className="h-12 w-auto md:h-14" />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center lg:flex">
          {mainNav.map((item, i) => (
            <DesktopMegaMenu
              key={item.label}
              item={item}
              open={openIndex === i}
              onEnter={() => handleEnter(i)}
              onLeave={handleLeave}
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact/free-estimate"
            className="hidden rounded-full bg-brand-red px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-red-700 sm:inline-block"
          >
            Free Estimate
          </Link>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${
              mobileOpen ? "border-brand-green bg-brand-green text-brand-carbon" : "border-white/20 text-white"
            }`}
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={closeMobile}
        pathname={pathname}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </header>
  );
}
