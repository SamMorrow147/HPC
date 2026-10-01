import CategoryHub from "@/components/CategoryHub";

export const metadata = { title: "Residential Painting & Staining | High Performance Coatings" };

export default function Page() {
  return (
    <CategoryHub
      kicker="Residential"
      title="Painting & Staining"
      intro="From full log home restorations to a fresh coat on the siding, interior rooms to barns and outbuildings — surface prep first, finish that lasts second."
      audience="Residential"
      serviceType="Painting & Staining"
      heroImage="/gallery/curated/large-log-home-exterior.jpg"
      subServices={[
        {
          label: "Exterior House Painting",
          spaceTypes: ["Exterior"],
          blurb: "Full exterior repaints with proper prep — scraping, sanding, and priming before the finish coat.",
        },
        {
          label: "Interior House Painting",
          spaceTypes: [],
          blurb: "Interior rooms, trim, and cabinetry, painted clean and on schedule.",
        },
        {
          label: "Log Home Restoration",
          spaceTypes: ["Log Cabin"],
          blurb: "Media-blasting, staining, and chinking for log and timber-frame homes — our most-requested specialty.",
        },
        {
          label: "Barns & Outbuildings",
          spaceTypes: ["Barn & Outbuilding"],
          blurb: "Protective coatings for pole barns, sheds, and farm outbuildings.",
        },
        {
          label: "Deck Staining",
          spaceTypes: [],
          blurb: "Stain and sealant systems that protect wood decking from sun and moisture.",
        },
      ]}
    />
  );
}
