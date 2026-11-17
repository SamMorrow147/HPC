"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
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

function MobileAccordionItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasMenu = !!item.children?.length;
  return (
    <div className="border-b border-white/10">
      <button
        className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-wide text-white"
        onClick={() => setOpen((o) => !o)}
      >
        <Link href={item.href} onClick={(e) => e.stopPropagation()}>
          {item.label}
        </Link>
        {hasMenu && (
          <svg
            className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 12 12"
            fill="none"
            onClick={(e) => {
              e.preventDefault();
              setOpen((o) => !o);
            }}
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      {hasMenu && open && (
        <ul className="space-y-2 pb-4 pl-3">
          {item.children.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-white/80 hover:text-brand-green">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = (i) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

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
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-white/20 text-white lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
              {mobileOpen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile nav */}
      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-brand-carbon px-6 lg:hidden">
          {mainNav.map((item) => (
            <MobileAccordionItem key={item.label} item={item} />
          ))}
          <Link
            href="/contact/free-estimate"
            className="my-4 block rounded-full bg-brand-red px-5 py-2 text-center text-sm font-bold text-white"
          >
            Free Estimate
          </Link>
        </div>
      )}
    </header>
  );
}
