"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { mainNav } from "@/data/nav";

function DesktopMegaMenu({ item, open, onEnter, onLeave }) {
  const hasMenu = !!item.groups;
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={item.href}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
          open ? "text-brand-green" : "text-brand-ink hover:text-brand-green"
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
        <div className="absolute left-1/2 top-full z-40 w-[min(90vw,780px)] -translate-x-1/2 rounded-b-lg border border-t-4 border-brand-line border-t-brand-green bg-white p-6 shadow-xl">
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
            {item.groups.map((group, gi) => (
              <div key={gi}>
                {group.label && (
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                    {group.label}
                  </div>
                )}
                <ul className="space-y-1.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-ink hover:text-brand-green hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordionItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-line">
      <button
        className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-wide text-brand-ink"
        onClick={() => setOpen((o) => !o)}
      >
        <Link href={item.href} onClick={(e) => e.stopPropagation()}>
          {item.label}
        </Link>
        {item.groups && (
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
      {item.groups && open && (
        <div className="space-y-4 pb-4 pl-3">
          {item.groups.map((group, gi) => (
            <div key={gi}>
              {group.label && (
                <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                  {group.label}
                </div>
              )}
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-brand-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white">
      {/* top utility bar */}
      <div className="hidden bg-brand-charcoal text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <span>Minneapolis &amp; Alexandria, MN &middot; Residential &amp; Commercial Coatings</span>
          <a href="tel:7636204121" className="font-semibold hover:text-brand-green">
            763-204-5889
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-brand-ink">
            HPC<span className="text-brand-green"> High Performance Coatings</span>
          </span>
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
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-brand-line lg:hidden"
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
        <div className="max-h-[75vh] overflow-y-auto border-t border-brand-line px-6 lg:hidden">
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
