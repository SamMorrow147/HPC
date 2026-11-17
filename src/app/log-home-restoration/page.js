import CategoryHub from "@/components/CategoryHub";
import { photo } from "@/lib/gallery";
import { FeatureList, Steps } from "@/components/ServiceBlocks";

export const metadata = { title: "Log Home & Wood Restoration | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Services"
      title="Log Home & Wood Restoration"
      intro="We strip, repair, chink and stain log homes and cabins across Minnesota and western Wisconsin, then come back every few years for a maintenance coat so the logs don't need another full strip."
      service="log-home"
      heroImage={photo("f223")}
      subServices={[
        {
          label: "Full Log Home Restoration",
          photo: "f024",
          blurb: "Stripped to bare wood, repaired, chinked and finished with a three-coat stain.",
        },
        {
          label: "Log & Shake Replacement",
          photo: "f220",
          blurb: "Rotted log ends, sill logs and shakes cut out and replaced before the finish goes on.",
        },
        {
          label: "Chinking & Caulking",
          photo: "f025",
          blurb: "Chinking and caulking seal checks and joints against air, water and bugs.",
        },
        {
          label: "Maintenance Recoats",
          photo: "f224",
          blurb: "A wash and recoat every few years for past customers, before the wood needs a full strip.",
        },
        {
          label: "Decks, Siding & Pergolas",
          photo: "f128",
          blurb: "Cedar siding, decks (including Rymar on Ipe at Surly Brewing), pergolas, and Structures stain on Hardie board.",
        },
        {
          label: "Interior Painting & Cabinets",
          photo: "j154",
          blurb: "Whole-home interior repaints, stair railings, and oak cabinets refinished white, with the doors sprayed in our shop.",
        },
        {
          label: "House Painting & Steel Siding",
          photo: "s065",
          blurb: "Exterior repaints, barns and outbuildings, and steel siding restoration (Glenwood, Lake Mary).",
        },
      ]}
    >
      <Steps
        kicker="Our process"
        title="How we restore a log home"
        steps={[
          ["Strip", "Ecoblast (crushed-glass abrasive) or steam stripping takes off failed finish without chewing up the wood."],
          ["Wash & brighten", "Log wash and wood brightener restore the natural color and open the grain."],
          ["Repair", "Replace rotted logs and shakes; caulk checks and joints."],
          ["Chink", "Chinking seals the gaps between logs."],
          ["Three-coat stain", "Structures Nature One (Natural, Pecan, Walnut, Teak, Cedar), Permachink Lifeline 2 or Q8 Log Oil."],
          ["Maintain", "Scheduled recoats with Sherwin-Williams Emerald Rain Refresh or the original system."],
        ]}
      />

      <FeatureList
        kicker="Products"
        title="Systems made for logs"
        columns={2}
        items={[
          { label: "Structures Nature One", detail: "Our go-to log stain, in five natural tones." },
          { label: "Permachink Lifeline 2", detail: "Log finish and chinking from the log-home specialists." },
          { label: "Q8 Log Oil", detail: "Penetrating oil finish for a hand-rubbed look." },
          { label: "Sherwin-Williams Emerald Rain Refresh", detail: "Self-cleaning exterior finish for maintenance coats." },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-2xl border border-brand-line p-8">
          <h2 className="text-xl font-extrabold text-brand-ink">Book summer and fall work early</h2>
          <p className="mt-2 max-w-2xl text-brand-muted">
            Most of this work comes from neighbors who saw the house next door.
            We&apos;ve been back to Lake Ida in Alexandria more than eight times.
            Log staining needs warm, dry weather, so the season fills up fast.
            Get on the schedule over the winter for next summer.
          </p>
        </div>
      </section>
    </CategoryHub>
  );
}
