import CategoryHub from "@/components/CategoryHub";

export const metadata = { title: "Commercial Painting Services | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Commercial & Industrial"
      title="Painting Services"
      intro="Scheduled around your business hours, from a single office suite to a full corporate campus."
      audience="Commercial"
      serviceType="Painting"
      heroImage="/gallery/curated/modern-office-lobby.jpg"
      subServices={[
        {
          label: "Offices & Corporate Buildings",
          spaceTypes: ["Office"],
          blurb: "Interior and exterior painting for offices, lobbies, and corporate buildings.",
        },
        {
          label: "Hospitality (Hotels & Restaurants)",
          spaceTypes: ["Restaurant/Hospitality"],
          blurb: "Fast turnarounds that respect guest-facing schedules.",
        },
        {
          label: "Schools & Churches",
          spaceTypes: ["School"],
          blurb: "Scheduled around the school year or service calendar.",
        },
        {
          label: "Property Management",
          spaceTypes: [],
          blurb: "Ongoing painting contracts for property managers with multiple buildings.",
        },
        {
          label: "Industrial Facilities",
          spaceTypes: [],
          blurb: "Coatings for industrial interiors and exteriors.",
        },
        {
          label: "Steel / Metal Structures",
          spaceTypes: [],
          blurb: "Refinishing and protective coatings for steel and metal buildings.",
        },
      ]}
    />
  );
}
