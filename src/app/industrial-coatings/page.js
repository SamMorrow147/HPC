import CategoryHub from "@/components/CategoryHub";
import { photo } from "@/lib/gallery";
import { ClientGroups, IndustryLinks, ProofBand, Steps } from "@/components/ServiceBlocks";
import { industries } from "@/data/industries";

export const metadata = { title: "Industrial Coatings & Tank Lining | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Services"
      title="Industrial Coatings & Tank Lining"
      intro="Sandblasting, tank linings, structural steel and equipment coatings for manufacturers, utilities, railroads and government agencies, in facilities where a failed coating means downtime."
      heroImage={photo("f004")}
      service="industrial"
      subServices={[
        {
          label: "Tank Lining & Recoating",
          photo: "j249",
          blurb: "Blast and recoat chemical, food and water tanks: Univar sodium hydroxide tank, Kraft Albany food tanks, Cottage Grove water storage, and a novolac lining for the MN School of Diving.",
        },
        {
          label: "Fuel Tanks",
          blurb: "BNSF railyard fuel tanks and ConVault tanks for the U.S. Fish & Wildlife Service and the MN DNR.",
        },
        {
          label: "Sandblasting & Structural Steel",
          photo: "d038",
          blurb: "Abrasive blasting and protective systems for structural steel: Bongards Creameries, Widseth, Waseca airport hangar.",
        },
        {
          label: "Equipment & Machinery",
          photo: "f007",
          blurb: "Machine refurbishment coatings for 3M, and wind turbine tower coating for Great River Energy.",
        },
        {
          label: "Water & Wastewater",
          blurb: "Coatings for treatment plants and storage: Medina Water Treatment Plant, Cottage Grove water storage.",
        },
        {
          label: "Branded & Painted Tanks",
          blurb: "Hand-painted logos and lettering on ag and municipal tanks (Marthaler Farm, West Union).",
        },
      ]}
    >
      <ProofBand
        items={[
          ["3M · BNSF · Kraft", "Industrial clients who can't afford a failed coating"],
          ["Novolac & chemical linings", "Systems for caustics, food contact and potable water"],
          ["Blast to finish", "Prep, lining and topcoat by the same crew"],
          ["MN, WI, ND, SD, IA", "We travel for industrial work"],
        ]}
      />

      <Steps
        kicker="How an industrial job runs"
        title="Prep is the job"
        steps={[
          ["Site walk & spec", "We look at the substrate, exposure and service conditions, then match a system to them."],
          ["Abrasive blasting", "Remove old coatings, rust and mill scale to the profile the system needs."],
          ["Repair & prime", "Patch, fill and prime the same day so nothing flash-rusts."],
          ["Lining / build coats", "Epoxy, novolac or urethane build coats applied to spec thickness."],
          ["Inspect", "Check coverage and finish before anything goes back in service."],
          ["Topcoat & graphics", "UV-stable topcoat, plus logos and lettering if you want them."],
        ]}
      />

      <ClientGroups
        title="Industrial clients"
        groups={industries.find((i) => i.slug === "industrial-manufacturing").clients}
      />

      <div className="pt-14" />
      <IndustryLinks
        industries={industries.filter((i) =>
          ["industrial-manufacturing", "government-public-safety", "automotive-car-wash"].includes(i.slug)
        )}
      />
    </CategoryHub>
  );
}
