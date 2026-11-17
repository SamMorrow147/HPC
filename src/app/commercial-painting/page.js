import CategoryHub from "@/components/CategoryHub";
import { photo } from "@/lib/gallery";
import { IndustryLinks } from "@/components/ServiceBlocks";
import { industries } from "@/data/industries";

export const metadata = { title: "Commercial Painting | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Services"
      title="Commercial & Institutional Painting"
      intro="Schools, campuses, fire stations, jails, government centers, hotels, retail and dealerships across Minnesota, Wisconsin, the Dakotas and Iowa, scheduled around the people who use the building."
      service="commercial-painting"
      heroImage={photo("f181")}
      subServices={[
        {
          label: "Schools & Universities",
          photo: "f181",
          blurb: "K-12 and campus work done over breaks: NDSU, St. Cloud State, UW-River Falls, Park Center HS and more.",
        },
        {
          label: "Government & Public Safety",
          photo: "f125",
          blurb: "Fire stations, police, jails, city halls, MnDOT, NAVFAC and the National Guard Armory.",
        },
        {
          label: "Retail, Restaurants & Hotels",
          photo: "f035",
          blurb: "Pottery Barn, Aerie, Cava, Sweetgreen, Holiday Inn Express, DoubleTree.",
        },
        {
          label: "Offices, Banks & Dealerships",
          photo: "f071",
          blurb: "Bell Bank, Marshall Dental, Marthaler Honda, Carlson Toyota, O'Reilly.",
        },
        {
          label: "Electrostatic Painting",
          photo: "j173",
          blurb: "Lockers, partitions and metal fixtures refinished in place: 1,000+ lockers at St. Louis Park HS.",
        },
        {
          label: "Parks & Historic Buildings",
          photo: "j360",
          blurb: "Lake Harriet Bandshell, Kenwood Mansion, the Baraboo Carnegie library and city park shelters.",
        },
      ]}
    >
      <IndustryLinks
        industries={industries.filter((i) =>
          ["education", "government-public-safety", "retail-hospitality", "automotive-car-wash"].includes(i.slug)
        )}
      />
    </CategoryHub>
  );
}
