import CategoryHub from "@/components/CategoryHub";
import { photo } from "@/lib/gallery";
import { ClientGroups, FeatureList, IndustryLinks } from "@/components/ServiceBlocks";
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
          blurb: "Lockers, partitions and metal fixtures refinished in place: 1,000+ lockers at St. Louis Park HS.",
        },
        {
          label: "Parks & Historic Buildings",
          photo: "j360",
          blurb: "Lake Harriet Bandshell, Kenwood Mansion, the Baraboo Carnegie library and city park shelters.",
        },
      ]}
    >
      <FeatureList
        kicker="Coatings we spec"
        title="Commercial-grade products for each surface"
        items={[
          { label: "Sherwin-Williams Loxon", detail: "Self-cleaning masonry and exterior systems." },
          { label: "Sherwin-Williams Emerald", detail: "Long-life interior and exterior finishes." },
          { label: "Benjamin Moore Aura", detail: "High-hide finishes for high-traffic interiors." },
          { label: "Tnemec Fluoronar", detail: "Fluoropolymer finish for architectural metal (Canvas Apartments sculpture)." },
          { label: "EIFS recoating", detail: "Shakopee River Center and similar exteriors." },
          { label: "Steel & metal buildings", detail: "Refinishing and protective coatings for steel structures." },
        ]}
      />

      <ClientGroups
        title="A sample of recent commercial work"
        groups={[
          industries.find((i) => i.slug === "education").clients[1],
          industries.find((i) => i.slug === "government-public-safety").clients[0],
          industries.find((i) => i.slug === "retail-hospitality").clients[0],
        ]}
      />

      <div className="pt-14" />
      <IndustryLinks
        industries={industries.filter((i) =>
          ["education", "government-public-safety", "retail-hospitality", "automotive-car-wash"].includes(i.slug)
        )}
      />
    </CategoryHub>
  );
}
