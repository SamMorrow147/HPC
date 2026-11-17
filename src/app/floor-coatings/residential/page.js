import CategoryHub from "@/components/CategoryHub";
import { photo } from "@/lib/gallery";

export const metadata = { title: "Residential Floor Coatings | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Floor Coatings · Residential"
      title="Floor Coatings"
      intro="Garages, basements, game and wine rooms, porches and pool decks. Flake, metallic and quartz systems built for Minnesota winters and road salt, and installed year-round with our cold-weather products."
      service="floor-coatings"
      heroImage={photo("f206")}
      subServices={[
        {
          label: "Garage",
          photo: "f205",
          blurb: "Flake, metallic, and solid-color epoxy systems that hold up to tires, tools, and salt.",
        },
        {
          label: "Basement",
          photo: "d126",
          blurb: "Moisture-tolerant coatings that turn a concrete basement into finished living space.",
        },
        {
          label: "Wine Rooms & Game Rooms",
          photo: "d122",
          blurb: "Metallic epoxy in custom color blends for wine rooms, game rooms and finished basements.",
        },
      ]}
    />
  );
}
