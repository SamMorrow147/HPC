// Industry pages + the client names behind them. `photo` fields are
// gallery ids (src/data/gallery.json), resolved with photo() from
// @/lib/gallery -- kept as ids so the client-side nav doesn't bundle the gallery.
// Every client/project name here comes from HPC's own Facebook posts
// (Sept 2020 - 2026 audit) or legible signage in their photos, so it's work
// they've shown publicly. Open questions live in docs/client-logos-todo.md.
// `clients` is a reference list only. It is not rendered on the site.
// The readable copy is docs/who-weve-worked-for.md.

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
      "Painting and floor coatings for classrooms, hallways, gyms, pools and locker rooms, scheduled over summer and school breaks.",
    approach: {
      kicker: "For schools",
      title: "Scheduled around the school year",
      intro:
        "Most school work happens over summer break, with smaller jobs fit into winter and spring breaks. Rooms are done in order so each one is finished before students and staff need it again.",
      points: [
        {
          label: "Classrooms, halls and commons",
          detail:
            "Repaints over break, and new buildings like Viking Elementary painted top to bottom before the first day.",
          photo: "f181",
        },
        {
          label: "Locker rooms, pools and gyms",
          detail:
            "Coatings chosen for rooms that stay wet, get scrubbed with cleaning chemicals and see cleats every day.",
          photo: "f088",
        },
        {
          label: "School colors, lockers and tackwall",
          detail:
            "Painted mascots and gym logos, metal lockers refinished in place with electrostatic paint, and tackable wallcovering for classrooms and halls.",
          photo: "f050",
        },
      ],
    },
    sectionsTitle: "School and campus projects",
    photo: "f047",
    logos: [
      "North Dakota State University",
      "St. Cloud State University",
      "UW-River Falls",
      "St. Louis Park Schools",
      "Buffalo-Hanover-Montrose Schools",
    ],
    services: [
      {
        label: "Locker room & shower floors",
        body: "We prep the slab, run an epoxy cove base up the wall and broadcast a flake or quartz floor in one continuous system. With no joint where the floor meets the wall, water has nowhere to get under the coating.",
        service: "floor-coatings",
        spaces: ["Locker Room"],
        includeUntagged: true,
      },
      {
        label: "UW-River Falls science building",
        body: "Corridors, research labs, lounges and the atrium stair in the Science and Technology Innovation Center, plus large science graphics (a DNA strand, neurons, molecule patterns) in each wing.",
        groups: ["uw-river-falls-science-innovation-center"],
      },
      {
        label: "Buffalo Community Middle School",
        body: "Our hometown middle school. Hallways, the purple-and-white locker halls, the commons, media center and classrooms, plus the Bison mascot wall.",
        groups: ["buffalo-community-middle-school"],
      },
      {
        label: "Viking Elementary",
        body: "A new building. Classrooms, corridors, stairwells, the main entry, the office and the staff lounge, all painted before the first day of school.",
        groups: ["viking-elementary-school"],
      },
      {
        label: "Pool decks & natatoriums",
        body: "Natatorium walls and ceilings and the rooms around the pool, where the coating has to hold up in air that stays humid all year.",
        spaces: ["Natatorium"],
      },
      {
        label: "Painted gyms & floor logos",
        body: "Gym walls and ceilings in school colors, hand-painted center-court logos and \"Home of the...\" wall graphics.",
        spaces: ["Gymnasium"],
      },
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
      "Painting and coatings for fire stations, police departments, jails, government centers, highway shops and park buildings, including secure facilities and buildings that stay open during the work.",
    approach: {
      kicker: "For public facilities",
      title: "Work done while the building stays open",
      intro:
        "A fire station still has to roll trucks, and a library or city hall still has visitors. The work is done one area at a time so the building keeps running while we're there.",
      points: [
        {
          label: "Public buildings",
          detail: "Libraries, city halls and park buildings repainted in sections so they stay open to the public.",
          photo: "j360",
        },
        {
          label: "Apparatus bays and shops",
          detail: "Floor coatings for fire apparatus bays, vehicle garages and wash bays that see heavy trucks, water and de-icer every day.",
          photo: "f006",
        },
        {
          label: "Parks and historic buildings",
          detail: "Grandstands, bandshells and older public buildings, from the Lake Harriet Bandshell to the Belzer Stadium grandstand.",
          photo: "f120",
        },
      ],
    },
    sectionsTitle: "Public building projects",
    photo: "f125",
    logos: [
      "NAVFAC",
      "U.S. Fish & Wildlife Service",
      "Minnesota National Guard",
      "MnDOT",
      "Metro Transit",
      "Wright County",
      "U.S. Bank Stadium",
    ],
    services: [
      {
        label: "Apparatus bay & shop floors",
        body: "Coated floors for apparatus bays, vehicle garages and wash bays, with a finish that hoses clean at the end of a shift.",
        service: "floor-coatings",
        spaces: ["Fire Station Apparatus Bay", "Vehicle Garage", "Wash Bay"],
      },
      {
        label: "Water storage & fuel tanks",
        body: "Water storage, fuel and process tanks prepped and recoated, with crews working from lifts and from the tank roof.",
        service: "industrial",
        spaces: ["Tank"],
        anyIndustry: true,
      },
      {
        label: "Lake Byllesby pavilion ceiling",
        body: "A ceiling mural for the Lake Byllesby Park pavilion, designed with Locus Architecture. It maps the rivers and lakes of the surrounding watershed in diluted wood stain, applied through plotter-cut stencils so the wood grain shows through.",
        groups: ["lake-byllesby-mural"],
      },
      {
        label: "Historic buildings & parks",
        body: "Park grandstands, pavilions and older public buildings, including the JB Belzer Stadium grandstand at Grand Prairie Park and a Carnegie library.",
        spaces: ["Pavilion", "Park Building Exterior", "Library", "Stadium Grandstand", "Stadium Exterior"],
        excludeGroups: ["lake-byllesby-mural"],
      },
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
          "Koochiching County Jail (veterans memorial)",
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
          "Washington Ballpark, Detroit Lakes",
        ],
      },
    ],
  },
  {
    slug: "retail-hospitality",
    label: "Retail & Hospitality",
    title: "Retail, restaurants, hotels & venues",
    intro:
      "Painting, floors and wallcovering for stores, restaurants, hotels and event venues, from tenant buildouts to repaints, scheduled around business hours.",
    approach: {
      kicker: "For operators",
      title: "Scheduled around your open hours",
      intro:
        "Stores, restaurants and hotels usually can't close for a repaint, and the finished space has to match the brand's colors and standards.",
      points: [
        {
          label: "Before open, after close",
          detail:
            "Work happens outside business hours or one area at a time, so customers aren't walking through an active job.",
          photo: "f035",
        },
        {
          label: "Hotels and storefronts",
          detail:
            "Hotel pool rooms, breakfast areas, meeting rooms and exteriors, and retail facades repainted with the glass masked.",
          photo: "f032",
        },
        {
          label: "Floors and wallcovering",
          detail:
            "Stained concrete for event spaces, urethane cement for kitchens and breweries that get washed down, and vinyl or printed wallcovering where a brand calls for it.",
          photo: "d149",
        },
      ],
    },
    sectionsTitle: "Retail and hospitality projects",
    photo: "f065",
    logos: [
      "Pottery Barn",
      "Aerie",
      "Title Nine",
      "Bell Bank",
      "Subway",
      "Sweetgreen",
      "Ziggi's Coffee",
      "Surly Brewing",
      "Holiday Inn Express",
      "DoubleTree by Hilton",
    ],
    services: [
      {
        label: "Holiday Inn Express",
        body: "The pool room, breakfast area, fitness room and meeting room inside, and a repaint of the hotel exterior.",
        groups: ["holiday-inn-express-hotel"],
        photoTitle: "pool",
      },
      {
        label: "Pottery Barn storefront",
        body: "The storefront facade repainted white with a black base along the sidewalk, with the glass masked off.",
        groups: ["white-storefront-exterior-repaint"],
        photoTitle: "Retail Storefront Exterior",
      },
      {
        label: "Minnesota Inboard dealership",
        body: "A boat dealership. The showroom, offices and conference room in a dark palette, plus the exterior, the service bay ceiling and a metallic epoxy hallway.",
        groups: ["minnesota-inboard-dealership"],
        photoTitle: "conference",
      },
      {
        label: "Decorative floors",
        body: "An acid-stained concrete floor for an event barn, and a glossy coated floor in a historic brick building.",
        groups: ["barn-venue-stained-concrete", "historic-brick-building-concrete-floor"],
      },
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
      "Floors and painting for showrooms, service bays and car wash tunnels. One-day floor systems let a shop reopen the next morning.",
    approach: {
      kicker: "For shops and dealers",
      title: "Short shutdowns for shops and wash bays",
      intro:
        "Every day a service bay or wash tunnel is closed costs money. One-day floor systems keep the shutdown to a night, and wash-bay coatings are chosen for constant water and chemicals.",
      points: [
        {
          label: "Shop and showroom floors",
          detail: "One-day polyaspartic systems for service bays, and metallic or solid-color epoxy for showrooms and offices.",
          photo: "f106",
        },
        {
          label: "Car wash bays",
          detail: "Bay and tunnel walls and floors washed down, repainted and recoated for water, wash chemicals and daily traffic.",
          photo: "j164",
        },
        {
          label: "Dealership painting",
          detail: "Showrooms, offices, conference rooms and building exteriors.",
          photo: "f114",
        },
      ],
    },
    sectionsTitle: "Dealership and car wash projects",
    photo: "j164",
    logos: ["Casey's", "Cenex", "Mister Car Wash", "Mercedes-Benz", "O'Reilly Auto Parts", "NAPA Auto Parts"],
    services: [
      {
        label: "Car wash wall & floor systems",
        body: "Rollover bays and wash tunnels washed down and repainted, including the service doors.",
        spaces: ["Car Wash Bay", "Car Wash Exterior"],
      },
      {
        label: "Showroom & service bay floors",
        body: "Metallic and solid-color epoxy for showrooms, offices and service bays, including the office hallway at Minnesota Inboard.",
        groups: ["minnesota-inboard-dealership"],
        photoTitle: "floor|epoxy",
      },
      {
        label: "Trailer & box truck floors",
        body: "Flake floors inside trailers and box trucks, including floors with a logo broadcast into the coating.",
        service: "floor-coatings",
        spaces: ["Trailer"],
      },
      {
        label: "Dealership painting",
        body: "Minnesota Inboard's showroom, mezzanine, offices and conference room, the service bay ceiling and the building exterior.",
        groups: ["minnesota-inboard-dealership"],
        photoTitle: "exterior|showroom|ceiling",
      },
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
      "Tank linings, sandblasting, structural steel, equipment coatings and production floors for plants, utilities and railroads.",
    approach: {
      kicker: "For plants",
      title: "Prep and lining by the same crew",
      intro:
        "When a tank lining or steel coating fails, the line stops. Most failures start with poor prep, so the same crew blasts the surface and applies the system, and the work is checked before anything goes back in service.",
      points: [
        {
          label: "Tanks",
          detail: "Chemical, food and water tanks blasted and relined, including novolac linings for caustics.",
          photo: "j249",
        },
        {
          label: "Structural steel and equipment",
          detail: "Towers, stairs, frames and equipment bases taken back to clean metal and recoated.",
          photo: "f004",
        },
        {
          label: "Floors and walkways",
          detail:
            "Warehouse aisles coated and striped to keep people and forklifts apart, and traffic coatings for decks and pits that stay wet or carry vehicles.",
          photo: "d102",
        },
      ],
    },
    sectionsTitle: "Plant and utility projects",
    photo: "f007",
    logos: ["3M", "Kraft", "BNSF Railway", "Seagate", "Univar Solutions", "Great River Energy"],
    services: [
      {
        label: "Tank lining & recoating",
        body: "Storage tanks prepped and recoated for chemical, food and water service, with crews working from lifts and from the tank roof.",
        service: "industrial",
        spaces: ["Tank"],
      },
      {
        label: "Sandblasting & structural steel",
        body: "Plant stairs worn to bare metal, corroded equipment bases, trailers and a wind turbine tower, prepped and recoated.",
        service: "industrial",
        excludeSpaces: ["Tank"],
      },
      {
        label: "Production & warehouse floors",
        body: "Pedestrian walkways coated into a working warehouse floor, with safety striping and floor symbols.",
        service: "floor-coatings",
        spaces: ["Warehouse"],
      },
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
          "Nicollet Bus Garage",
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
      "Log and cedar restoration, house painting, and garage and basement floors for homeowners across Minnesota and western Wisconsin.",
    approach: {
      kicker: "For homeowners",
      title: "Restore the logs once, then keep them up",
      intro:
        "Sun and water wear through a log finish, the wood turns gray, and checks open up where water can get in. We strip and restore homes that have reached that point, then come back every few years with a maintenance coat so they don't need a full strip again.",
      points: [
        {
          label: "Full restoration",
          detail: "Stripping, log and shake repair, chinking and a three-coat stain, with gables and corners worked from a lift.",
          photo: "f075",
        },
        {
          label: "Decks and porches",
          detail:
            "Deck boards, porch floors and log railings stained along with the house. Concrete porches and patios can be stained and sealed.",
          photo: "j259",
        },
        {
          label: "Garage and basement floors",
          detail: "Flake and epoxy floors, from a plain light-gray flake to a purple-and-gold garage with a Vikings logo set in.",
          photo: "f206",
        },
      ],
    },
    sectionsTitle: "Home and cabin projects",
    photo: "f212",
    services: [
      {
        label: "Log home & wood restoration",
        body: "Full-scribe, chalet and log-sided homes stripped, repaired and restained, with garages and outbuildings done to match.",
        spaces: ["Log Home Exterior", "Cabin Exterior"],
      },
      {
        label: "Garage & basement floors",
        body: "Flake garage floors and metallic epoxy for basements, installed year-round with cold-weather products.",
        service: "floor-coatings",
        spaces: ["Garage", "Basement"],
        includeUntagged: true,
      },
      {
        label: "Porches, patios & decks",
        body: "Deck boards, log railings, cedar porch ceilings and timber posts, washed and restained.",
        spaces: ["Deck", "Porch Deck", "Covered Porch"],
      },
    ],
    clients: [
      {
        group: "Minnesota lakes",
        names: [
          "Lake Ida (Alexandria)",
          "Miltona",
          "Lake Darling",
          "Cedar Lake (Annandale)",
          "Orono",
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
