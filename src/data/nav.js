// Primary nav structure -- mirrors the Proposed Navigation IA from the
// HPC Sitemap project (7 sections), grouped for a mega-menu.

export const mainNav = [
  {
    label: "Residential",
    href: "/residential",
    groups: [
      {
        label: "Floor Coatings",
        links: [
          { label: "Garage", href: "/residential/floor-coatings/garage" },
          { label: "Basement", href: "/residential/floor-coatings/basement" },
          { label: "Driveway", href: "/residential/floor-coatings/driveway" },
          { label: "Patios & Pool Decks", href: "/residential/floor-coatings/patios-pool-decks" },
        ],
      },
      {
        label: "Painting & Staining",
        links: [
          { label: "Exterior House Painting", href: "/residential/painting/exterior-house-painting" },
          { label: "Interior House Painting", href: "/residential/painting/interior-house-painting" },
          { label: "Log Home Restoration", href: "/residential/painting/log-home-restoration" },
          { label: "Barns & Outbuildings", href: "/residential/painting/barns-outbuildings" },
          { label: "Deck Staining", href: "/residential/painting/deck-staining" },
        ],
      },
      {
        label: "Surface Prep",
        links: [
          { label: "Exterior Masonry", href: "/residential/surface-prep/exterior-masonry" },
          { label: "Concrete Repair", href: "/residential/surface-prep/concrete-repair" },
          { label: "Sandblasting", href: "/residential/surface-prep/sandblasting" },
        ],
      },
      {
        label: "Cleaning Services",
        links: [{ label: "Residential Cleaning", href: "/residential/cleaning" }],
      },
    ],
  },
  {
    label: "Commercial & Industrial",
    href: "/commercial",
    groups: [
      {
        label: "Floor Coatings",
        links: [
          { label: "Food & Beverage Facilities", href: "/commercial/floor-coatings/food-beverage" },
          { label: "Educational Facilities", href: "/commercial/floor-coatings/educational" },
          { label: "Hospitals & Healthcare", href: "/commercial/floor-coatings/healthcare" },
          { label: "Retail & Showrooms", href: "/commercial/floor-coatings/retail" },
          { label: "Warehouses & Distribution", href: "/commercial/floor-coatings/warehouses" },
          { label: "Animal Facilities", href: "/commercial/floor-coatings/animal-facilities" },
          { label: "Manufacturing Plants", href: "/commercial/floor-coatings/manufacturing" },
        ],
      },
      {
        label: "Painting Services",
        links: [
          { label: "Offices & Corporate Buildings", href: "/commercial/painting/offices" },
          { label: "Hospitality (Hotels & Restaurants)", href: "/commercial/painting/hospitality" },
          { label: "Schools & Churches", href: "/commercial/painting/schools-churches" },
          { label: "Property Management", href: "/commercial/painting/property-management" },
          { label: "Industrial Facilities", href: "/commercial/painting/industrial" },
          { label: "Steel / Metal Structures", href: "/commercial/painting/steel-metal" },
        ],
      },
      {
        label: "Surface Prep & Specialty",
        links: [
          { label: "Sandblasting", href: "/commercial/surface-prep/sandblasting" },
          { label: "LP / Fuel / Water Tank Coatings", href: "/commercial/surface-prep/tank-coatings" },
        ],
      },
      {
        label: null,
        links: [
          { label: "Commercial Cleaning Services", href: "/commercial/cleaning" },
          { label: "Murals", href: "/commercial/murals" },
        ],
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Resources",
    href: "/resources",
    groups: [
      {
        label: null,
        links: [
          { label: "Coating Types & Benefits", href: "/resources/coating-types" },
          { label: "Application Guides", href: "/resources/application-guides" },
        ],
      },
      {
        label: "Coating Styles & Colors",
        links: [
          { label: "Flake", href: "/resources/coating-styles/flake" },
          { label: "Metallic", href: "/resources/coating-styles/metallic" },
          { label: "Quartz", href: "/resources/coating-styles/quartz" },
          { label: "Mica", href: "/resources/coating-styles/mica" },
          { label: "Wood Look", href: "/resources/coating-styles/wood-look" },
          { label: "Solid Color", href: "/resources/coating-styles/solid-color" },
          { label: "Custom Flake", href: "/resources/coating-styles/custom-flake" },
        ],
      },
      {
        label: null,
        links: [
          { label: "FAQ", href: "/resources/faq" },
          { label: "Blog & Articles", href: "/resources/blog" },
          { label: "Color Visualizer Tool", href: "/resources/color-visualizer" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    groups: [
      {
        label: null,
        links: [
          { label: "Our Company", href: "/about/our-company" },
          { label: "Team & Leadership", href: "/about/team" },
          { label: "Certifications & Affiliations", href: "/about/certifications" },
          { label: "Testimonials & Reviews", href: "/about/testimonials" },
          { label: "Careers", href: "/about/careers" },
        ],
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    groups: [
      {
        label: null,
        links: [
          { label: "Contact Us", href: "/contact" },
          { label: "Free Estimate Request", href: "/contact/free-estimate" },
        ],
      },
    ],
  },
];

export const footerNav = {
  columns: [
    {
      title: "Residential",
      links: [
        { label: "Floor Coatings", href: "/residential" },
        { label: "Painting & Staining", href: "/residential/painting" },
        { label: "Surface Prep", href: "/residential/surface-prep" },
        { label: "Cleaning Services", href: "/residential/cleaning" },
      ],
    },
    {
      title: "Commercial & Industrial",
      links: [
        { label: "Floor Coatings", href: "/commercial" },
        { label: "Painting Services", href: "/commercial/painting" },
        { label: "Murals", href: "/commercial/murals" },
        { label: "Tank Coatings", href: "/commercial/surface-prep/tank-coatings" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Gallery", href: "/gallery" },
        { label: "About", href: "/about/our-company" },
        { label: "Resources", href: "/resources" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};
