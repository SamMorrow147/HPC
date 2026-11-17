"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const SERVICE_OPTIONS = [
  "Floor Coatings (Residential)",
  "Floor Coatings (Commercial / Industrial)",
  "Commercial Painting",
  "Industrial Coatings & Tank Lining",
  "Log Home & Wood Restoration",
  "House Painting & Staining",
  "Specialty (Wallcovering, Concrete, Murals)",
  "Other / Not sure",
];

export default function FreeEstimateClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wireframe only -- no backend wired up yet.
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Free Estimate Request"
        intro="Tell us a bit about your project and we'll follow up to schedule a walkthrough."
      />
      <section className="mx-auto max-w-2xl px-6 py-14">
        {submitted ? (
          <div className="rounded-xl border border-brand-green bg-brand-green-soft p-8 text-center">
            <h2 className="text-xl font-bold text-brand-ink">Thanks — request received.</h2>
            <p className="mt-2 text-brand-muted">
              This is a wireframe, so nothing was actually sent, but this is
              where a real confirmation would appear. We&apos;ll follow up
              within one business day on the live site.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-brand-ink">Name</span>
                <input required type="text" className="mt-1.5 w-full rounded-lg border border-brand-line px-3.5 py-2.5 text-sm focus:border-brand-green focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-brand-ink">Phone</span>
                <input required type="tel" className="mt-1.5 w-full rounded-lg border border-brand-line px-3.5 py-2.5 text-sm focus:border-brand-green focus:outline-none" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-brand-ink">Email</span>
              <input required type="email" className="mt-1.5 w-full rounded-lg border border-brand-line px-3.5 py-2.5 text-sm focus:border-brand-green focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-brand-ink">Project Address</span>
              <input type="text" className="mt-1.5 w-full rounded-lg border border-brand-line px-3.5 py-2.5 text-sm focus:border-brand-green focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-brand-ink">Service Needed</span>
              <select className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3.5 py-2.5 text-sm focus:border-brand-green focus:outline-none">
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-brand-ink">Tell us about the project</span>
              <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-brand-line px-3.5 py-2.5 text-sm focus:border-brand-green focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-brand-ink">Project Photos (optional)</span>
              <input type="file" multiple className="mt-1.5 w-full text-sm text-brand-muted" />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-red py-3 text-sm font-bold text-white hover:bg-red-700 sm:w-auto sm:px-10"
            >
              Submit Request
            </button>
          </form>
        )}
      </section>
    </>
  );
}
