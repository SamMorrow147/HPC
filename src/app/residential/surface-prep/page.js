import CategoryHub from "@/components/CategoryHub";

export const metadata = { title: "Residential Surface Prep | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Residential"
      title="Surface Prep"
      intro="Every coating is only as good as the surface underneath it. Masonry cleaning, concrete repair, and sandblasting set the stage for a finish that actually lasts."
      audience="Residential"
      serviceType="Surface Prep"
      subServices={[
        {
          label: "Exterior Masonry",
          spaceTypes: ["Exterior"],
          blurb: "Cleaning and coating brick, block, and stone exteriors.",
        },
        {
          label: "Concrete Repair",
          spaceTypes: [],
          blurb: "Crack and spall repair before any coating goes down.",
        },
        {
          label: "Sandblasting",
          spaceTypes: [],
          blurb: "Media blasting to strip old finishes and prep wood, metal, and masonry.",
        },
      ]}
    />
  );
}
