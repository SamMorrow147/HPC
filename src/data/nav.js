// Primary nav structure. Service-led rather than audience-led: the Facebook
// audit (370 posts, 2020-2026) showed HPC's work has shifted from homeowner
// garage floors toward commercial, institutional and industrial jobs, so the
// nav leads with the five service lines and a separate Industries menu
// (where the depth of the client list shows). Residential vs. commercial
// lives one level down, on the Floor Coatings hub.

import { industries, services } from "./industries";

export const mainNav = [
  {
    label: "Services",
    href: "/services",
    children: services.map(({ label, href }) => ({ label, href })),
  },
  {
    label: "Industries",
    href: "/industries",
    children: industries.map(({ label, slug }) => ({ label, href: `/industries/${slug}` })),
  },
  { label: "Our Work", href: "/projects" },
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

export const footerNav = {
  columns: [
    {
      title: "Services",
      links: [
        ...services.map(({ label, href }) => ({ label, href })),
        { label: "Murals", href: "/specialty/murals" },
      ],
    },
    {
      title: "Industries",
      links: industries.map(({ label, slug }) => ({ label, href: `/industries/${slug}` })),
    },
    {
      title: "Company",
      links: [
        { label: "Our Work", href: "/projects" },
        { label: "About", href: "/about/our-company" },
        { label: "Careers", href: "/about/careers" },
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
