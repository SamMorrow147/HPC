// Primary nav structure -- mirrors the Proposed Navigation IA from the
// HPC Sitemap project, but flattened to ONE level of dropdown links per
// section. Each link here is a category hub page (e.g. "Floor Coatings")
// that lists its specific sub-services as cards on that page -- the nav
// itself doesn't enumerate every individual sub-service, so it stays
// scannable instead of dumping 13+ links into one dropdown.

export const mainNav = [
  {
    label: "Residential",
    href: "/residential",
    children: [
      { label: "Floor Coatings", href: "/residential/floor-coatings" },
      { label: "Painting & Staining", href: "/residential/painting" },
      { label: "Surface Prep", href: "/residential/surface-prep" },
      { label: "Cleaning Services", href: "/residential/cleaning" },
    ],
  },
  {
    label: "Commercial & Industrial",
    href: "/commercial",
    children: [
      { label: "Floor Coatings", href: "/commercial/floor-coatings" },
      { label: "Painting Services", href: "/commercial/painting" },
      { label: "Surface Prep & Specialty", href: "/commercial/surface-prep" },
      { label: "Cleaning Services", href: "/commercial/cleaning" },
      { label: "Murals", href: "/commercial/murals" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Coating Types & Benefits", href: "/resources/coating-types" },
      { label: "Application Guides", href: "/resources/application-guides" },
      { label: "Coating Styles & Colors", href: "/resources/coating-styles" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Blog & Articles", href: "/resources/blog" },
      { label: "Color Visualizer Tool", href: "/resources/color-visualizer" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Company", href: "/about/our-company" },
      { label: "Team & Leadership", href: "/about/team" },
      { label: "Certifications & Affiliations", href: "/about/certifications" },
      { label: "Testimonials & Reviews", href: "/about/testimonials" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Free Estimate Request", href: "/contact/free-estimate" },
    ],
  },
];

// Category hub pages: what each nav link above lists once you land on it.
// Used by the (not-yet-built) hub page templates so the detail that used to
// live in the nav dropdown lives here instead.
export const categoryDetails = {
  "/residential/floor-coatings": ["Garage", "Basement", "Driveway", "Patios & Pool Decks"],
  "/residential/painting": [
    "Exterior House Painting",
    "Interior House Painting",
    "Log Home Restoration",
    "Barns & Outbuildings",
    "Deck Staining",
  ],
  "/residential/surface-prep": ["Exterior Masonry", "Concrete Repair", "Sandblasting"],
  "/commercial/floor-coatings": [
    "Food & Beverage Facilities",
    "Educational Facilities",
    "Hospitals & Healthcare",
    "Retail & Showrooms",
    "Warehouses & Distribution",
    "Animal Facilities",
    "Manufacturing Plants",
  ],
  "/commercial/painting": [
    "Offices & Corporate Buildings",
    "Hospitality (Hotels & Restaurants)",
    "Schools & Churches",
    "Property Management",
    "Industrial Facilities",
    "Steel / Metal Structures",
  ],
  "/commercial/surface-prep": ["Sandblasting", "LP / Fuel / Water Tank Coatings"],
  "/resources/coating-styles": [
    "Flake",
    "Metallic",
    "Quartz",
    "Mica",
    "Wood Look",
    "Solid Color",
    "Custom Flake",
  ],
};

export const footerNav = {
  columns: [
    {
      title: "Residential",
      links: [
        { label: "Floor Coatings", href: "/residential/floor-coatings" },
        { label: "Painting & Staining", href: "/residential/painting" },
        { label: "Surface Prep", href: "/residential/surface-prep" },
        { label: "Cleaning Services", href: "/residential/cleaning" },
      ],
    },
    {
      title: "Commercial & Industrial",
      links: [
        { label: "Floor Coatings", href: "/commercial/floor-coatings" },
        { label: "Painting Services", href: "/commercial/painting" },
        { label: "Murals", href: "/commercial/murals" },
        { label: "Tank Coatings", href: "/commercial/surface-prep" },
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
