// Every photo the homepage shows, by where it appears. src/app/page.js
// builds its hero, service slideshows and Recent work grid from these, and
// /photo-review labels each gallery photo with its homepage placement.

// Hero photo panel: one job per headline service line.
export const HERO_SLIDES = [
  { id: "f007", label: "Industrial", href: "/industrial-coatings", position: "center 35%" },
  { id: "f060", label: "Floor Coatings", href: "/floor-coatings" },
  { id: "j171", label: "Commercial", href: "/commercial-painting" },
  { id: "f220", label: "Log Homes", href: "/log-home-restoration" },
];

// Service section slideshows, keyed by section href. First id is the lead
// slide; the rest were hand-picked from a full review of the gallery for
// composition, clarity and finish -- one per job, no job repeated across
// sections or from the hero.
export const SECTION_PHOTOS = {
  "/floor-coatings": ["f060", "f206", "d122", "d100", "f158"],
  "/commercial-painting": ["f181", "f120", "d069", "j353", "f227"],
  "/industrial-coatings": ["f007", "j192", "j254", "j249", "j240"],
  "/log-home-restoration": ["f223", "f024", "f099", "j330", "d018"],
  "/specialty": ["f192", "f058", "m009", "d143", "d196"],
};

// Recent work grid: one shot per service line / sector, commercial &
// industrial first to mirror where the work actually is (FB audit 2020-2026).
export const FEATURED_IDS = ["j171", "j249", "f223", "f088", "f181", "f125", "f007", "d149"];
