import CategoryHub from "@/components/CategoryHub";

export const metadata = { title: "Residential Floor Coatings | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Residential"
      title="Floor Coatings"
      intro="Garage floors, basements, driveways, and patios — epoxy and polyurethane systems built to handle Minnesota winters, road salt, and everyday wear."
      audience="Residential"
      serviceType="Floor Coatings"
      heroImage="/gallery/curated/garage-flake-floor.jpg"
      subServices={[
        {
          label: "Garage",
          spaceTypes: ["Garage"],
          blurb: "Flake, metallic, and solid-color epoxy systems that hold up to tires, tools, and salt.",
        },
        {
          label: "Basement",
          spaceTypes: ["Basement"],
          blurb: "Moisture-tolerant coatings that turn a concrete basement into finished living space.",
        },
        {
          label: "Driveway",
          spaceTypes: ["Driveway"],
          blurb: "Durable exterior coatings built for UV exposure, freeze-thaw cycles, and road salt.",
        },
        {
          label: "Patios & Pool Decks",
          spaceTypes: ["Patio & Pool Deck"],
          blurb: "Slip-resistant, heat-reflective finishes for outdoor living and pool surrounds.",
        },
      ]}
    />
  );
}
