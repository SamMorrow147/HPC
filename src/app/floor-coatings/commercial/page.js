import CategoryHub from "@/components/CategoryHub";
import { photo } from "@/lib/gallery";

export const metadata = { title: "Commercial Floor Coatings | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Floor Coatings · Commercial & Industrial"
      title="Floor Coatings"
      intro="Epoxy, quartz, polyaspartic and urethane cement systems matched to the traffic, chemicals and washdown schedule of the space. One-day systems and cold-weather installs keep you open."
      service="floor-coatings"
      heroImage={photo("f088")}
      subServices={[
        {
          label: "Gyms & Fitness Centers",
          blurb: "Gymnasium floors, weight rooms, and fitness center flooring built for heavy daily use.",
        },
        {
          label: "Schools & Locker Rooms",
          photo: "d084",
          blurb: "Quartz and flake locker rooms, showers, hallways and cafeterias (West Fargo, Edgerton, Becker), done over summer break.",
        },
        {
          label: "Manufacturing Plants",
          photo: "d003",
          blurb: "Chemical- and impact-resistant systems for production floors and industrial spaces.",
        },
        {
          label: "Food & Beverage Facilities",
          photo: "f158",
          blurb: "Urethane cement and slip-resistant systems for commercial kitchens, breweries and food processing (Luce Line Brewing, Edwin's Edibles).",
        },
        {
          label: "Car Washes",
          photo: "d160",
          blurb: "Wall and floor systems for wash bays (Casey's, Cenex, Mr. Carwash, Aztec BP, Stop N Shop).",
        },
        {
          label: "Dealerships & Service Shops",
          photo: "f225",
          blurb: "Showrooms and service bays (Mercedes-Benz Bloomington, Modern Farm Equipment, Swanston Equipment). Back in service the next day.",
        },
        {
          label: "Trailers, Box Trucks & Parking Ramps",
          photo: "f175",
          blurb: "Coatings for trailer and box truck floors, and traffic coatings for parking ramps.",
        },
        {
          label: "Hospitals & Healthcare",
          blurb: "Seamless, sanitary flooring that meets healthcare cleanliness standards.",
        },
        {
          label: "Retail & Showrooms",
          photo: "f060",
          blurb: "Decorative, durable flooring that looks good under showroom lighting.",
        },
        {
          label: "Animal Facilities",
          blurb: "Odor- and moisture-resistant flooring for kennels and veterinary facilities.",
        },
        {
          label: "Warehouses & Distribution",
          photo: "d102",
          blurb: "Heavy-duty coatings for warehouse floors, including a 40,000 sq ft install for Wallace Carlson.",
        },
      ]}
    />
  );
}
