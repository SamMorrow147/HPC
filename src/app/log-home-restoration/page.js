import CategoryHub from "@/components/CategoryHub";
import { photo } from "@/lib/gallery";
import { ClientGroups, FeatureList, Steps } from "@/components/ServiceBlocks";
import { industries } from "@/data/industries";

export const metadata = { title: "Log Home & Wood Restoration | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Services"
      title="Log Home & Wood Restoration"
      intro="Log home repair professionals for lakes country. We strip, repair, chink and stain log homes and cabins across Minnesota and western Wisconsin, and come back for maintenance recoats so the finish never gets away from you."
      service="log-home"
      heroImage={photo("f223")}
      subServices={[
        {
          label: "Full Log Home Restoration",
          photo: "f024",
          blurb: "Strip to bare wood, repair, chink and stain. Weathered gray logs back to new.",
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
          blurb: "Wash and recoat every few years for past customers, before the wood needs a full strip.",
        },
        {
          label: "Decks, Siding & Pergolas",
          photo: "f128",
          blurb: "Cedar siding, decks (including Rymar on Ipe at Surly Brewing), pergolas, and Structures stain on Hardie board.",
        },
        {
          label: "Interior Painting & Cabinets",
          photo: "j154",
          blurb: "Whole-home interior repaints, stair railings, and oak cabinets refinished white, shop-sprayed for a factory-smooth finish.",
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

      <ClientGroups
        kicker="Where we work"
        title="Lake homes we've restored"
        intro="Most of our log work comes from neighbors who saw the house next door. We've been back to Lake Ida in Alexandria more than eight times."
        groups={industries.find((i) => i.slug === "residential-lake-homes").clients}
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-2xl border border-brand-line p-8">
          <h2 className="text-xl font-extrabold text-brand-ink">Book summer and fall work early</h2>
          <p className="mt-2 max-w-2xl text-brand-muted">
            Log staining needs warm, dry weather, so the season fills up fast.
            Get on the schedule over the winter for next summer.
          </p>
        </div>
      </section>
    </CategoryHub>
  );
}
