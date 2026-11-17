import CategoryHub from "@/components/CategoryHub";
import { photo } from "@/lib/gallery";
import { FeatureList } from "@/components/ServiceBlocks";

export const metadata = { title: "Specialty Coatings & Finishes | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Services"
      title="Specialty Coatings & Finishes"
      intro="The jobs that need a coatings specialist rather than a general painter: tackable wallcovering for schools, decorative and historic concrete, waterproofing and traffic coatings, and hand-painted graphics."
      heroImage={photo("f192")}
      service="specialty"
      subServices={[
        {
          label: "Tackwall & Wallcovering",
          photo: "f195",
          blurb: "Koroseal tackable wallcovering across metro schools, plus vinyl and graphic wallcovering (Cava, UW-River Falls, Subway, Prime Steakhouse, Carlson Toyota).",
        },
        {
          label: "Decorative Concrete",
          photo: "d149",
          blurb: "Acetone dye stains, wood-plank overlays, skip-trowel pool decks, stained exposed aggregate and colored sealers.",
        },
        {
          label: "Historic Concrete Restoration",
          blurb: "Restoring old concrete without losing its character: St. Anthony Main (165 years old) and St. Croix Falls.",
        },
        {
          label: "Waterproofing & Traffic Coatings",
          blurb: "BASF traffic coatings for stadium balconies (St. Cloud State) and roof decks, EIFS recoating (Shakopee River Center).",
        },
        {
          label: "Painted Logos & Graphics",
          photo: "f050",
          blurb: "Hand-painted logos on gym floors, tanks and walls, from school mascots to farm tanks.",
        },
        {
          label: "Murals",
          photo: "m009",
          href: "/specialty/murals",
          blurb: "Large-scale painted and stained murals, like the Lake Byllesby Pavilion ceiling.",
        },
      ]}
    >
      <FeatureList
        kicker="Also available"
        title="Prep and protection services"
        columns={2}
        items={[
          { label: "Hot-water pressure washing", detail: "Concrete, siding, masonry and loading docks, before a coating or on its own." },
          { label: "Self-cleaning exteriors", detail: "Loxon and Emerald Rain Refresh systems that shed dirt." },
          { label: "No-wax coating for LVT/VCT", detail: "A durable topcoat that ends the strip-and-wax cycle." },
          { label: "Concrete repair", detail: "Crack and spall repair before any coating goes down." },
        ]}
      />
    </CategoryHub>
  );
}
