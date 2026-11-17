// Industry pages + the client names behind them. `photo` fields are
// gallery ids (src/data/gallery.json), resolved with photo() from
// @/lib/gallery -- kept as ids so the client-side nav doesn't bundle the gallery.
// Every client/project name here comes from HPC's own Facebook posts
// (Sept 2020 - 2026 audit) or legible signage in their photos, so it's work
// they've shown publicly. Open questions live in docs/client-logos-todo.md.

export const services = [
  {
    label: "Floor Coatings",
    href: "/floor-coatings",
    desc: "Flake, metallic & quartz epoxy, polyaspartic, urethane cement, polished concrete.",
    photo: "f060",
  },
  {
    label: "Commercial Painting",
    href: "/commercial-painting",
    desc: "Schools, campuses, fire stations, retail, hotels & dealerships.",
    photo: "f181",
  },
  {
    label: "Industrial Coatings",
    href: "/industrial-coatings",
    desc: "Tank linings, sandblasting, structural steel & fuel tanks.",
    photo: "f004",
  },
  {
    label: "Log Home & Wood Restoration",
    href: "/log-home-restoration",
    desc: "Blasting, chinking, log repair & three-coat stain systems.",
    photo: "f223",
  },
  {
    label: "Specialty",
    href: "/specialty",
    desc: "Tackwall & wallcovering, decorative concrete, waterproofing, murals.",
    photo: "f192",
  },
];

export const industries = [
  {
    slug: "education",
    label: "Education",
    title: "K-12 schools, colleges & universities",
    intro:
      "Hallways, locker rooms, gyms, pools and classrooms -- scheduled around the school calendar so everything is done before the first bell in fall.",
    photo: "f047",
    services: [
      ["Locker room & shower floors", "/floor-coatings/commercial"],
      ["Interior & exterior painting", "/commercial-painting"],
      ["Electrostatic locker refinishing", "/commercial-painting"],
      ["Koroseal tackable wallcovering", "/specialty"],
      ["Pool deck & natatorium coatings", "/floor-coatings/commercial"],
      ["Painted gym & floor logos", "/specialty"],
    ],
    clients: [
      {
        group: "K-12",
        names: [
          "St. Louis Park HS (1,000+ lockers, electrostatic)",
          "Park Center HS",
          "Big Lake HS pool",
          "Canby HS",
          "GFW Gibbon",
          "Goodhue",
          "Le Sueur Elementary",
          "Cedar Creek Elementary",
          "Sheridan Hills Elementary",
          "Kimberly Lane Elementary",
          "West Fargo, Edgerton & Becker locker rooms",
        ],
      },
      {
        group: "Higher education",
        names: [
          "NDSU",
          "St. Cloud State",
          "UW-River Falls",
          "Valley City State",
          "Anoka Tech",
          "Lake Area Tech",
        ],
      },
    ],
  },
  {
    slug: "government-public-safety",
    label: "Government & Public Safety",
    title: "Government, public safety & public works",
    intro:
      "Fire stations, police departments, jails, government centers, highway shops and parks, including secure facilities and buildings that can't close for the work.",
    photo: "f125",
    services: [
      ["Apparatus bay & shop floors", "/floor-coatings/commercial"],
      ["Interior & exterior painting", "/commercial-painting"],
      ["Water storage & fuel tanks", "/industrial-coatings"],
      ["Historic & park restoration", "/specialty"],
    ],
    clients: [
      {
        group: "Public safety",
        names: [
          "St. Peter Fire",
          "Mayer Fire",
          "Keene ND Fire",
          "Hancock Fire",
          "Montgomery Police",
          "Rice County Public Safety",
          "Cass County Jail",
          "Scott County Jail",
          "Dakota County Juvenile",
        ],
      },
      {
        group: "Government & military",
        names: [
          "Wright County Government Center",
          "St. Peter City Hall",
          "MnDOT Mendota Heights",
          "NAVFAC at MSP Airport",
          "National Guard Armory",
          "Camp Ripley Museum",
          "Norman County, Houston County & Creston IA public works",
          "Medina Water Treatment Plant",
          "Cottage Grove water storage",
        ],
      },
      {
        group: "Parks & landmarks",
        names: [
          "Lake Harriet Bandshell",
          "Kenwood Mansion",
          "Baraboo Carnegie Library",
          "Lake Byllesby Park",
          "Grand Prairie Park",
          "Aquatore Bandshell",
          "Tourtelotte Park",
        ],
      },
    ],
  },
  {
    slug: "retail-hospitality",
    label: "Retail & Hospitality",
    title: "Retail, restaurants, hotels & venues",
    intro:
      "Tenant buildouts, refreshes and brand rollouts, worked around open hours so customers never see the mess.",
    photo: "f065",
    services: [
      ["Interior & exterior painting", "/commercial-painting"],
      ["Kitchen & brewery floors (urethane cement)", "/floor-coatings/commercial"],
      ["Vinyl & graphic wallcovering", "/specialty"],
      ["Decorative floors", "/floor-coatings/commercial"],
    ],
    clients: [
      {
        group: "Retail & services",
        names: ["Pottery Barn", "Aerie", "Title 9", "Bell Bank", "Marshall Dental", "Integrity Title"],
      },
      {
        group: "Food & beverage",
        names: [
          "Cava",
          "Sweetgreen",
          "Subway",
          "Scooters Coffee",
          "Ziggi's Coffee",
          "Edwin's Edibles",
          "Luce Line Brewing",
          "Surly Brewing",
          "Prime Steakhouse",
          "HolyLand at Midtown Global Market",
        ],
      },
      {
        group: "Hotels & venues",
        names: ["Holiday Inn Express", "DoubleTree", "Graco Park"],
      },
    ],
  },
  {
    slug: "automotive-car-wash",
    label: "Automotive & Car Wash",
    title: "Dealerships, service shops & car washes",
    intro:
      "Showroom floors, service bays and wash tunnels. Our one-day systems put a shop floor back in service the next morning.",
    photo: "j164",
    services: [
      ["Car wash wall & floor systems", "/floor-coatings/commercial"],
      ["Showroom & service bay floors", "/floor-coatings/commercial"],
      ["Trailer & box truck floors", "/floor-coatings/commercial"],
      ["Dealership painting", "/commercial-painting"],
    ],
    clients: [
      {
        group: "Car washes & c-stores",
        names: ["Casey's", "Cenex", "Mr. Carwash", "Aztec BP", "Stop N Shop"],
      },
      {
        group: "Dealerships & service",
        names: [
          "Mercedes-Benz Bloomington",
          "Marthaler Honda",
          "Carlson Toyota",
          "O'Reilly Auto Parts",
          "NAPA",
          "Modern Farm Equipment",
          "Swanston Equipment",
        ],
      },
    ],
  },
  {
    slug: "industrial-manufacturing",
    label: "Industrial & Manufacturing",
    title: "Plants, food processing, energy & rail",
    intro:
      "Production floors, tank linings, structural steel and equipment, for facilities where a coating failure means downtime.",
    photo: "f007",
    services: [
      ["Tank lining & recoating", "/industrial-coatings"],
      ["Sandblasting & structural steel", "/industrial-coatings"],
      ["Production & warehouse floors", "/floor-coatings/commercial"],
      ["Waterproofing & traffic coatings", "/specialty"],
    ],
    clients: [
      {
        group: "Manufacturing & food",
        names: [
          "3M",
          "Kraft (Albany)",
          "Bongards Creameries",
          "Seagate",
          "MGK",
          "Wallace Carlson (40,000 sq ft floor)",
          "Univar",
        ],
      },
      {
        group: "Energy, rail & utilities",
        names: [
          "BNSF Railway",
          "Great River Energy",
          "Medina Water Treatment Plant",
          "USFWS & MN DNR (ConVault fuel tanks)",
          "Waseca Airport hangar",
        ],
      },
    ],
  },
  {
    slug: "residential-lake-homes",
    label: "Residential & Lake Homes",
    title: "Homes, cabins & lake places",
    intro:
      "Log home restoration up and down lakes country, plus garage, basement and porch floors for homeowners across Minnesota and western Wisconsin.",
    photo: "f212",
    services: [
      ["Log home & wood restoration", "/log-home-restoration"],
      ["Garage & basement floors", "/floor-coatings/residential"],
      ["Porches, patios & pool decks", "/floor-coatings/residential"],
      ["Decorative concrete", "/specialty"],
    ],
    clients: [
      {
        group: "Minnesota lakes",
        names: [
          "Lake Ida (Alexandria)",
          "Miltona",
          "Lake Darling",
          "Cedar Lake (Annandale)",
          "Lake Minnetonka",
          "Lake Vermilion",
          "Big Sandy",
          "Upper Hay",
          "Oak Island, Lake of the Woods",
        ],
      },
      {
        group: "Western Wisconsin",
        names: ["Stone Lake", "Hayward", "Iron River", "Turtle Lake"],
      },
    ],
  },
];

// Client logos for the homepage "trusted by" strip. Files live in
// public/logos/clients/ -- sourced from Wikimedia Commons / Wikipedia and,
// where Commons had none (Great River Energy, Bell Bank, Wright County,
// Life Link III, BHM Schools), from each organization's own website; the
// second batch (Whole Foods through Ziggi's) was collected via Claude in Chrome.
// `size` bumps square marks so they read at the same weight
// as wide wordmarks.
export const clientLogos = [
  // Ordered by recognizability: the top marquee row is the first half and
  // starts at the left edge, so the biggest names are seen first.
  { name: "U.S. Bank Stadium", file: "us-bank-stadium.svg", size: "lg" },
  { name: "3M", file: "3m.svg" },
  { name: "Mercedes-Benz", file: "mercedes-benz.svg", size: "square" },
  { name: "Whole Foods Market", file: "whole-foods.svg", size: "square" },
  { name: "BNSF Railway", file: "bnsf.svg" },
  { name: "Subway", file: "subway.svg" },
  { name: "Kraft", file: "kraft.svg" },
  { name: "NAPA Auto Parts", file: "napa.svg", size: "square" },
  { name: "O'Reilly Auto Parts", file: "oreilly-auto-parts.svg" },
  { name: "Seagate", file: "seagate.svg" },
  { name: "Pottery Barn", file: "pottery-barn.svg" },
  { name: "Surly Brewing", file: "surly-brewing.svg", size: "lg" },
  { name: "Sweetgreen", file: "sweetgreen.svg" },
  { name: "DoubleTree by Hilton", file: "doubletree.svg", size: "lg" },
  { name: "Holiday Inn Express", file: "holiday-inn-express.svg", size: "lg" },
  { name: "Aerie", file: "aerie.svg" },
  { name: "NAVFAC", file: "navfac.png" },
  { name: "U.S. Fish & Wildlife Service", file: "usfws.svg", size: "square" },
  { name: "Minnesota National Guard", file: "mn-national-guard.svg", size: "square" },
  { name: "MnDOT", file: "mndot.svg" },
  { name: "Metro Transit", file: "metro-transit.svg" },
  { name: "Mister Car Wash", file: "mister-car-wash.svg", size: "lg" },
  { name: "Cenex", file: "cenex.png", size: "square" },
  { name: "Casey's", file: "caseys.svg" },
  { name: "North Dakota State University", file: "ndsu.svg" },
  { name: "St. Cloud State University", file: "st-cloud-state.svg", size: "lg" },
  { name: "UW-River Falls", file: "uw-river-falls.png" },
  { name: "Great River Energy", file: "great-river-energy.svg", size: "lg" },
  { name: "Univar Solutions", file: "univar.svg" },
  { name: "Title Nine", file: "title-nine.svg" },
  { name: "Ziggi's Coffee", file: "ziggis-coffee.svg", size: "lg" },
  { name: "Bell Bank", file: "bell-bank.svg" },
  { name: "Life Link III", file: "life-link-iii.svg" },
  { name: "Wright County", file: "wright-county.jpg" },
  { name: "St. Louis Park Schools", file: "st-louis-park.svg", size: "square" },
  { name: "Buffalo-Hanover-Montrose Schools", file: "bhm-schools.svg" },
];
