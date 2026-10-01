import CategoryHub from "@/components/CategoryHub";

export const metadata = { title: "Commercial Surface Prep & Specialty Coatings | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Commercial & Industrial"
      title="Surface Prep & Specialty Coatings"
      intro="Sandblasting and specialty tank coatings for industrial and agricultural equipment."
      audience="Commercial"
      serviceType="Surface Prep"
      subServices={[
        {
          label: "Sandblasting",
          spaceTypes: [],
          blurb: "Media blasting to prep steel and industrial surfaces for coating.",
        },
        {
          label: "LP / Fuel / Water Tank Coatings",
          spaceTypes: [],
          blurb: "Protective and branded coatings for propane, fuel, and water tanks.",
        },
      ]}
    />
  );
}
