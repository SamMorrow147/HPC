"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const FAQS = [
  {
    q: "How long does a garage floor coating take?",
    a: "Most residential garage floors take 1–2 days for prep and application. The floor is walkable within 24 hours, but we recommend keeping heavy vehicles off it for about a week while it fully cures.",
  },
  {
    q: "Do I need to empty the garage or room first?",
    a: "Yes — the space needs to be cleared before we start surface prep. We're happy to talk through timing so it fits your schedule.",
  },
  {
    q: "How long does a coated floor last?",
    a: "With normal residential use, a properly prepped and installed epoxy or polyaspartic floor typically lasts well over a decade. Commercial floors vary more depending on traffic and chemical exposure.",
  },
  {
    q: "Can you match our brand colors for a commercial project?",
    a: "Yes — flake and solid color systems can be custom-blended, and we regularly do this for schools, gyms, and businesses that want their colors on the floor or wall.",
  },
  {
    q: "What areas do you serve?",
    a: "We have crews based out of the Minneapolis area and Alexandria, MN, and take on residential and commercial projects across Minnesota.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Request one through our Free Estimate form or give us a call directly.",
  },
];

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-line py-5">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold text-brand-ink">{item.q}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-brand-muted transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <p className="mt-3 text-brand-muted">{item.a}</p>}
    </div>
  );
}

export default function FaqClient() {
  return (
    <>
      <PageHero kicker="Resources" title="Frequently Asked Questions" />
      <section className="mx-auto max-w-3xl px-6 py-14">
        {FAQS.map((item) => (
          <FaqItem key={item.q} item={item} />
        ))}
      </section>
    </>
  );
}
