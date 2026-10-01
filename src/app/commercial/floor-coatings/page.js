import CategoryHub from "@/components/CategoryHub";

export const metadata = { title: "Commercial Floor Coatings | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Commercial & Industrial"
      title="Floor Coatings"
      intro="Hard-wearing epoxy and polyurethane systems sized for the traffic, chemicals, and cleaning schedules of real commercial spaces."
      audience="Commercial"
      serviceType="Floor Coatings"
      heroImage="/gallery/curated/gymnasium-basketball-court.jpg"
      subServices={[
        {
          label: "Gyms & Fitness Centers",
          spaceTypes: ["Gym"],
          blurb: "Gymnasium floors, weight rooms, and fitness center flooring built for heavy daily use.",
        },
        {
          label: "Educational Facilities",
          spaceTypes: ["School"],
          blurb: "Hallways, cafeterias, and classrooms — durable, easy to clean, built to last between summer breaks.",
        },
        {
          label: "Manufacturing Plants",
          spaceTypes: ["Manufacturing Plant"],
          blurb: "Chemical- and impact-resistant systems for production floors and industrial spaces.",
        },
        {
          label: "Food & Beverage Facilities",
          spaceTypes: ["Restaurant/Hospitality"],
          blurb: "Slip-resistant, washdown-ready flooring for kitchens and food service areas.",
        },
        {
          label: "Hospitals & Healthcare",
          spaceTypes: ["Healthcare"],
          blurb: "Seamless, sanitary flooring that meets healthcare cleanliness standards.",
        },
        {
          label: "Retail & Showrooms",
          spaceTypes: ["Retail"],
          blurb: "Decorative, durable flooring that looks good under showroom lighting.",
        },
        {
          label: "Animal Facilities",
          spaceTypes: ["Animal Facility"],
          blurb: "Odor- and moisture-resistant flooring for kennels and veterinary facilities.",
        },
        {
          label: "Warehouses & Distribution",
          spaceTypes: [],
          blurb: "Heavy-duty coatings for warehouse and distribution center floors.",
        },
      ]}
    />
  );
}
