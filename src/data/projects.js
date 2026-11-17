// Project case-study pages (/projects/[slug]), one per gallery album with
// enough photos to tell a story. Keyed by the album's `group` in
// src/data/gallery.json; the title comes from the album name there.
//
// Copy rule: describe only what the photos show, plus HPC's standard process
// for that service. No invented locations, dates, products or quantities --
// add those as they come in (see docs/client-logos-todo.md).

export const projects = {
  "uw-river-falls-science-innovation-center": {
    featured: true,
    summary: "Interior painting and science-themed wall graphics through a new university science building.",
    story: [
      "UW-River Falls' Science and Technology Innovation Center is a working building full of labs, lounges and study space, and every one of those rooms needed a finish that could take years of student traffic.",
      "Our crews painted corridors, research labs, faculty and student lounges and the atrium stair, then added large-format science graphics (a DNA strand, a brain, neurons and molecule patterns) that give each wing its own identity.",
    ],
    scope: ["Corridor & lab painting", "Lounges and atrium stair", "Accent walls", "Science wall graphics"],
  },
  "gfw-firebirds-school": {
    featured: true,
    summary: "Gym, hallway and commons painting plus school-spirit graphics for the GFW Firebirds.",
    story: [
      "A school's colors should be the first thing you see walking in. At GFW, we painted the gym, auditorium, weight room, classrooms, commons and hallways, then carried the Firebirds brand through the building.",
      "The centerpiece is a hand-painted Firebirds logo on the gym wall, backed up by \"Home of the Firebirds\" and \"This Is Firebird Territory\" graphics in the corridors and gym.",
    ],
    scope: ["Gymnasium & auditorium", "Hallways, commons & classrooms", "Weight room", "Painted logos & wall graphics"],
  },
  "lake-byllesby-mural": {
    featured: true,
    summary: "A 30-foot-high pavilion ceiling hand-stained with the lines of the local watershed.",
    story: [
      "Developed with Locus Architecture, the Lake Byllesby Pavilion ceiling traces the rivers and lakes of the surrounding watershed across the wood deck overhead.",
      "The design was laid out with plotter-cut stencils and applied in diluted wood stain, so the grain still reads through the artwork. It's the kind of job that takes a coatings crew's control, not just a painter's brush.",
    ],
    scope: ["Stencil layout", "Diluted wood-stain application", "30 ft ceiling work from lifts"],
  },
  "belzer-stadium-grand-prairie-park": {
    featured: true,
    summary: "Exterior painting and stained cedar soffits for a park ballpark grandstand.",
    story: [
      "JB Belzer Stadium at Grand Prairie Park needed its grandstand and pavilion to look as good as the field.",
      "We painted the blue siding and steel canopy and stained the cedar soffits and canopy ceilings, giving the warm wood a finish that stands up to sun and weather season after season.",
    ],
    scope: ["Exterior siding & steel canopy", "Cedar soffit & ceiling stain", "Pavilion exterior"],
  },
  "minnesota-inboard-dealership": {
    featured: true,
    summary: "Interior and exterior repaint of a boat dealership, plus a metallic epoxy hallway.",
    story: [
      "Minnesota Inboard's showroom has to sell boats, so the building had to look sharp inside and out.",
      "We painted the showroom ceiling and mezzanine, offices and conference room in a dark, modern palette, the service bay ceiling and the exterior, and put down a metallic epoxy floor in the office hallway.",
    ],
    scope: ["Showroom & mezzanine", "Offices & conference room", "Service bay ceiling", "Exterior repaint", "Metallic epoxy hallway"],
  },
  "full-scribe-log-home-golden-stain": {
    featured: true,
    summary: "A full-scribe log home stripped, repaired and restained from a lift.",
    story: [
      "Full-scribe log homes are beautiful and unforgiving: every log end and gable is exposed to the weather, and a failing finish shows fast.",
      "Our crew worked the gables from a lift, prepped the logs and laid on a warm golden stain system across the whole house and porch.",
    ],
    scope: ["Log prep & washing", "Gable work from lift", "Full exterior restain", "Porch & railings"],
  },
  "chalet-log-home-restain": {
    featured: true,
    summary: "A weathered chalet log home brought back with a full restain, before and after.",
    story: [
      "The before shots tell the story: sun-faded, uneven logs and trim that had gone gray.",
      "We prepped the logs, restained the walls, balconies, railings and window trim, and finished the garage to match.",
    ],
    scope: ["Log prep", "Full exterior restain", "Balconies & railings", "Window & door trim", "Matching garage"],
  },
  "metallic-floor-purple-walls": {
    featured: true,
    summary: "A metallic epoxy floor from crack repair to the final marbled coat.",
    story: [
      "Metallic epoxy only looks effortless. This job shows every step: floor prep and crack repair, a gray primer and base coat, then the metallic coat worked by hand to get the marbled, liquid look.",
      "The finished floor is seamless, glossy and completely custom: no two metallic floors come out the same.",
    ],
    scope: ["Floor prep & crack filling", "Primer & base coat", "Metallic epoxy application", "Hallway cut-in"],
  },
  "red-tile-locker-room-flake": {
    featured: true,
    summary: "A locker room and restroom flake floor with integral epoxy cove base.",
    story: [
      "Locker rooms are the hardest floors in a school: constant water, cleaning chemicals and cleats.",
      "We prepped the slab, installed epoxy cove base up the wall so there's no seam for water to get into, then broadcast a red-and-black flake system and sealed it to a glossy, slip-resistant finish.",
    ],
    scope: ["Slab prep", "Epoxy cove base", "Red & black flake broadcast", "Clear topcoat"],
  },
  "wind-turbine-tower-painting": {
    featured: true,
    summary: "Coating a wind turbine tower from a boom lift.",
    story: [
      "Industrial work happens where the asset is, and here that meant a boom lift at the base of a wind turbine tower.",
      "Our crew recoated the tower and nacelle area, using protective coatings meant to hold up to UV, wind and freeze-thaw.",
    ],
    scope: ["Boom lift access", "Tower recoat", "Nacelle area coating"],
  },
  "holiday-inn-express-hotel": {
    summary: "Interior and exterior painting for a Holiday Inn Express.",
    story: [
      "We painted the meeting room, breakfast area, fitness room and pool room, and repainted the hotel exterior.",
    ],
    scope: ["Meeting & breakfast rooms", "Fitness & pool rooms", "Exterior repaint"],
  },
  "bell-bank-exterior": {
    summary: "Exterior repaint of a Bell Bank branch, including the drive-through canopy.",
    story: [
      "We repainted the siding and every elevation of this Bell Bank branch, including the drive-through canopy.",
    ],
    scope: ["Siding repaint", "Drive-through canopy", "All elevations"],
  },
  "white-storefront-exterior-repaint": {
    summary: "A Pottery Barn storefront facade repainted, with windows masked and protected.",
    story: [
      "Retail facades are part of the brand. We masked the glass and repainted the Pottery Barn storefront facade.",
    ],
    scope: ["Window masking", "Facade repaint"],
  },
  "river-valley-church": {
    summary: "Painting through a church's lobby, cafe, kids' wing and classrooms, plus a stained concrete chapel floor.",
    story: [
      "River Valley Church wanted spaces that feel welcoming for every age. We painted the lobby, cafe, classrooms and a colorful kids' wing, and finished the chapel with a stained concrete floor.",
    ],
    scope: ["Lobby & cafe", "Kids' wing & classrooms", "Stained concrete chapel floor"],
  },
  "dental-clinic-interior": {
    summary: "A dental clinic finished from bare drywall: painted rooms, a navy panel wall and shop-stained ceiling beams.",
    story: [
      "The before shots show where this started: raw drywall halls and a vaulted room with unfinished beams.",
      "We stained the ceiling beams in our shop so they arrived ready to hang, masked and sprayed a navy paneled accent wall, and painted the reception lobby, waiting room, hallways and operatories, clean, quiet work in a space built for patients.",
    ],
    scope: ["Drywall to finish paint", "Navy panel accent wall", "Shop-stained ceiling beams", "Lobby, halls & operatories"],
  },
  "new-rec-building-interior": {
    summary: "Interior painting through a new recreation center, from the gym ceiling to the running track.",
    story: [
      "A new recreation building means a lot of square footage and a lot of height. We painted the gymnasium walls and exposed ceiling, the walls along the elevated running track, stairwells, corridors and multipurpose rooms, with teal and blue accent walls to tie it together.",
    ],
    scope: ["Gym walls & exposed ceiling", "Running track level", "Stairwells & corridors", "Accent walls", "Flake floor"],
  },
  "widseth-office-exterior": {
    summary: "Exterior steel and trim painting for a Widseth office.",
    story: [
      "We painted the exterior steel at this Widseth office: railings, handrails, doors and frames, garage bay trim and bollards, in a crisp blue that holds up outdoors.",
    ],
    scope: ["Railings & handrails", "Doors & frames", "Bollards", "Garage bay trim"],
  },
  "golden-log-sided-cabin-garage": {
    summary: "A lakeside log-sided cabin and detached garage restained to match.",
    story: [
      "Log siding takes the same beating as full logs. We restained the cabin's gables, soffits, walls and entry steps, then the detached garage so the whole property matches.",
    ],
    scope: ["Cabin restain", "Gables & soffits", "Entry steps", "Detached garage"],
  },
  "red-stained-log-home-and-garage": {
    summary: "A log home and its log-sided garage restained in a rich red tone.",
    story: [
      "This log home went with a deep red stain. We did every elevation, the stone-based gables, the wood walkway steps and the log-sided garage.",
    ],
    scope: ["All elevations", "Gables", "Walkway steps", "Log-sided garage"],
  },
  "pine-woods-log-home": {
    summary: "A log home in the pines restained, from the corners to the outbuilding.",
    story: [
      "Set back in the pines, this log home got a full restain: log walls, corners above the fieldstone base, the entry porch and walkway, and the matching log outbuilding. We also masked and painted the carriage-style garage doors.",
    ],
    scope: ["Log walls & corners", "Porch & walkway", "Outbuilding", "Carriage garage doors"],
  },
  "lakeview-log-home-cedar-roof": {
    summary: "A lakeside log home restained from the gable peaks to the deck.",
    story: [
      "Lake exposure is hard on logs. We restained this home's gables, eaves, log ends, balcony logs and the walls along the upper deck.",
    ],
    scope: ["Gables & eaves", "Log ends", "Balcony & deck walls"],
  },
  "shingle-style-lake-home-exterior": {
    summary: "A full exterior repaint of a shingle-style lake home.",
    story: [
      "Shingle-style homes have a lot of surface and a lot of detail. We repainted the shingle siding, gables and trim on every elevation, including the lake side.",
    ],
    scope: ["Shingle siding", "Gables & trim", "All elevations"],
  },
  "cedar-shake-two-story-home": {
    summary: "Cedar shake siding restained on a two-story home.",
    story: [
      "Cedar shakes soak up stain unevenly when they're weathered. We prepped and restained the whole house, front, rear and patio side, for an even, rich finish.",
    ],
    scope: ["Shake prep", "Full restain", "Patio elevation"],
  },
  "red-stained-log-sided-cabin-shed": {
    summary: "A red log-sided cabin, deck and barn-style shed restained together.",
    story: [
      "We restained the cabin, its deck and gable, and the barn-style storage shed so the whole place reads as one.",
    ],
    scope: ["Cabin & gable", "Deck", "Storage shed"],
  },
  "lake-home-cedar-porch": {
    summary: "Stained cedar timbers, posts and porch ceilings on a lake home.",
    story: [
      "The cedar timber porch is the best seat at this lake home. We stained the posts, beams and tongue-and-groove ceilings at the porch, patio and front entry.",
    ],
    scope: ["Timber posts & beams", "Porch ceilings", "Front entry"],
  },
  "vikings-fan-garage": {
    summary: "A garage floor with a Vikings logo set into the flake.",
    story: [
      "This garage went from bare concrete to a purple-and-gold flake floor with a Vikings logo set right into it. We prepped the slab, laid out and detailed the logo, then broadcast and sealed the flake.",
    ],
    scope: ["Slab prep", "Logo layout & detailing", "Flake broadcast", "Clear topcoat"],
  },
  "locker-room-flake-floor": {
    summary: "Gray flake floors with cove base through a locker room and restroom.",
    story: [
      "We installed a gray flake system with integral cove base through the locker room and restrooms, a seamless floor that's easy to clean around lockers and sinks.",
    ],
    scope: ["Flake floor", "Cove base", "Restrooms"],
  },
  "white-trim-home-interior": {
    summary: "Interior painting and white cabinet refinishing.",
    story: [
      "We painted the walls and refinished the kitchen cabinets, island and built-in desk in a clean white.",
    ],
    scope: ["Interior walls", "Cabinet refinishing", "Kitchen island & built-ins"],
  },
  "gray-epoxy-large-room": {
    summary: "A solid gray epoxy floor, rolled and back-rolled to a high gloss.",
    story: [
      "A solid-color epoxy is about technique: we applied the gray coat, back-rolled the topcoat to an even film, and left a glossy, easy-clean floor.",
    ],
    scope: ["Epoxy base coat", "Back-rolled topcoat"],
  },
  "barn-venue-stained-concrete": {
    summary: "An event barn's concrete floor acid-stained from plain gray to rich color.",
    story: [
      "The before shot is a plain concrete slab. We sprayed an acid stain across the event barn floor and sealed it, giving the venue a warm, variegated floor that suits the timber around it.",
    ],
    scope: ["Surface prep", "Acid stain", "Sealer"],
  },
  "red-steel-exterior-stairs": {
    summary: "Exterior steel stairs prepped and sprayed in red.",
    story: [
      "We prepped the base and landings and sprayed the exterior steel stair assembly in a bright red protective coating.",
    ],
    scope: ["Surface prep", "Spray application", "Stairs & landings"],
  },
  "np-school-gym-pool": {
    summary: "A school gym, center-court logo and natatorium painted.",
    story: [
      "We painted the walls and ceilings of a large school gymnasium and natatorium, and hand-painted the center-court logo.",
    ],
    scope: ["Gym walls & ceiling", "Natatorium", "Center-court logo"],
  },
  "tilt-up-building-exterior": {
    summary: "A commercial building exterior repainted from a lift.",
    story: [
      "We repainted the exterior walls of this commercial building, working the upper walls from a lift.",
    ],
    scope: ["Exterior walls", "Lift work"],
  },
  "historic-brick-building-concrete-floor": {
    summary: "A glossy concrete floor in a historic brick building.",
    story: [
      "Inside a historic brick building, we prepped the old concrete and finished it to a glossy floor that sets off the brick and the bar.",
    ],
    scope: ["Concrete prep", "Glossy floor finish"],
  },
  "log-corner-restoration": {
    summary: "Log corners and ends stripped and restained.",
    story: [
      "Log ends take the worst of the weather. We stripped the corners back to bare wood and restained them so they match the rest of the house.",
    ],
    scope: ["Log end stripping", "Corner restain"],
  },
  "gray-epoxy-black-box-room": {
    summary: "Gray epoxy for a black box studio and workroom.",
    story: [
      "We put down a gray epoxy floor through a black box studio and workroom, a tough surface for sets, risers and rolling equipment.",
    ],
    scope: ["Studio floor", "Workroom floor"],
  },
  "log-home-strip-and-stain": {
    summary: "Stripping and washing a log home's exterior before restaining.",
    story: [
      "Most of a log home restoration is the part nobody sees afterward. Here the crew stripped the old finish and pressure-washed the logs and upper walls down to clean wood so the new stain can soak in.",
    ],
    scope: ["Finish stripping", "Pressure washing", "Upper wall access"],
  },
  "process-plant-wall-coating": {
    summary: "Protective wall coatings around process equipment.",
    story: [
      "We coated the walls of a process room around the equipment, with a cleanable protective finish built for a production environment.",
    ],
    scope: ["Process room walls", "Around equipment"],
  },
  "new-gym-construction": {
    summary: "Painting a new gymnasium from lifts during construction.",
    story: [
      "On new construction, painting has to fit the schedule. We painted the gym ceiling and walls from lifts and prepped the floor alongside the other trades.",
    ],
    scope: ["Ceiling from lifts", "Walls", "Floor prep"],
  },
  "downtown-loft-repaint": {
    summary: "Interior repaint of a downtown loft.",
    story: ["We repainted the living room, bedroom and walls of a downtown loft."],
    scope: ["Living room", "Bedroom", "Walls"],
  },
  "navy-school-athletic-wing": {
    summary: "Painting through a school's gym, weight room, auditorium and commons.",
    story: ["We painted a school's athletic wing: the gymnasium, weight room, auditorium and commons hallway."],
    scope: ["Gymnasium", "Weight room", "Auditorium", "Commons"],
  },
  "ballpark-pavilion": {
    summary: "A ballpark pavilion painted, with stained cedar soffits and ceiling.",
    story: ["We painted the pavilion siding and stained the cedar soffits and ceiling."],
    scope: ["Siding", "Cedar soffits & ceiling"],
  },
  "gray-flake-locker-storage-room": {
    summary: "Gray flake floor with cove base in a locker area.",
    story: ["We installed a gray flake floor with cove base through a locker area."],
    scope: ["Flake floor", "Cove base"],
  },
  "tan-epoxy-shop-floor": {
    summary: "A tan epoxy shop floor.",
    story: ["We coated this shop floor in a tan epoxy, a bright, easy-clean surface that stands up to vehicles and tools."],
    scope: ["Shop floor epoxy"],
  },
  "brown-siding-house-repaint": {
    summary: "A two-story house exterior repainted.",
    story: ["We masked and repainted the siding and gables of a two-story house."],
    scope: ["Masking", "Siding", "Gables"],
  },
  "trailer-sandblasting": {
    summary: "Sandblasting dump and utility trailers to bare steel.",
    story: [
      "Before any coating goes on steel, the old paint and rust have to come off. We sandblasted dump and utility trailers, undersides included, back to clean metal.",
    ],
    scope: ["Abrasive blasting", "Trailer undersides"],
  },
  "warehouse-walkway": {
    summary: "Safety-striped pedestrian walkways coated into a warehouse floor.",
    story: [
      "We coated pedestrian walkways into a warehouse floor and painted the safety striping and walkway symbols that keep people and forklifts apart.",
    ],
    scope: ["Walkway coating", "Safety striping", "Floor symbols"],
  },
  "new-building-hallways": {
    summary: "Long corridors and door frames painted in a new building.",
    story: ["We painted long corridors, door frames and doors through a new building."],
    scope: ["Corridors", "Doors & frames"],
  },
  "gray-blue-flake-floor": {
    summary: "A gray-and-blue flake epoxy floor.",
    story: ["We installed a gray flake floor with blue accents, sealed to a high gloss."],
    scope: ["Flake floor", "Clear topcoat"],
  },
  "red-flake-locker-room": {
    summary: "A red flake locker room aisle, detailed by hand.",
    story: ["We installed a red flake floor down a school locker room aisle, detailing the edges by hand."],
    scope: ["Flake floor", "Edge detailing"],
  },
  "gray-siding-house": {
    summary: "Siding and soffits cleaned and refreshed.",
    story: ["We cleaned and refreshed the gray siding and soffits on this house."],
    scope: ["Siding", "Soffits"],
  },
  "brown-cedar-lake-home": {
    summary: "A cedar lake home and garage restained.",
    story: ["We restained the cedar siding on this lake home, its deck side and the garage."],
    scope: ["Cedar siding", "Deck side", "Garage"],
  },
  "cedar-cabin-deck": {
    summary: "A lakeside cabin and deck restained.",
    story: ["We restained the cabin siding and the deck."],
    scope: ["Cabin siding", "Deck"],
  },
  "light-gray-flake-garage": {
    summary: "A light gray flake garage floor.",
    story: ["We installed a light gray flake epoxy floor in this garage."],
    scope: ["Garage flake floor"],
  },
  "brown-metallic-home": {
    summary: "A brown metallic epoxy floor through a home.",
    story: ["We installed a brown metallic epoxy floor through the rooms and hallway of this home."],
    scope: ["Metallic epoxy", "Hallway"],
  },
  "gray-white-house-repaint": {
    summary: "A house exterior repainted gray and white, before and after.",
    story: ["We repainted this house's siding gray with white trim; the before shot shows where it started."],
    scope: ["Siding", "Trim"],
  },
  "buffalo-community-middle-school": {
    featured: true,
    summary: "Hallways, commons, media center and Bison-pride walls painted through our hometown middle school.",
    story: [
      "HPC is based in Buffalo, so Buffalo Community Middle School is close to home.",
      "We painted the hallways and purple-and-white locker halls, the commons, the media center and classrooms, then carried school spirit through the building with the Bison mascot wall, \"Show Your Bison Pride\" and the BCMS Family Room wall.",
    ],
    scope: ["Hallways & locker halls", "Commons & media center", "Classrooms", "Bison pride & mascot walls"],
  },
  "viking-elementary-school": {
    featured: true,
    summary: "Classrooms, corridors, stairwells and offices painted in a new elementary school.",
    story: [
      "Viking Elementary is a new building, and it needed every room ready before the first day.",
      "We painted classrooms under exposed timber beams, corridors, stairwells and handrails, the main entry with its dedication plaque, the school office and the staff lounge.",
    ],
    scope: ["Classrooms", "Corridors & entry", "Stairwells & handrails", "Offices & staff lounge"],
  },
  "white-silo-tank-recoat": {
    featured: true,
    summary: "A rusted storage tank prepped and recoated white.",
    story: [
      "The before shots show a weathered tank with rust bleeding through the old coating.",
      "Our crew worked from the top of the tank and a scissor lift to prep the surface, then recoated it in a clean white protective finish.",
    ],
    scope: ["Surface prep", "Work at height", "Protective recoat"],
  },
  "carnegie-free-library": {
    featured: true,
    summary: "Restoration work on a historic Carnegie Free Library, from weathered entry doors to the interior.",
    story: [
      "Historic buildings need a lighter touch. At this Carnegie Free Library, we refinished the weathered entry doors (the before and after are in the photos), restored the exterior and worked on the interior renovation.",
    ],
    scope: ["Entry door refinishing", "Exterior restoration", "Interior renovation"],
  },
  "wraparound-porch-log-home": {
    featured: true,
    summary: "A three-story log home's weathered wraparound porches stripped, washed and restained.",
    story: [
      "The before shots show gray, weathered porches and log stairs.",
      "We stripped the logs, washed the porch decks, then restained the decking, log railings and covered porches all the way around the house.",
    ],
    scope: ["Log stripping", "Deck washing", "Porch & railing restain", "Log stairway"],
  },
  "rollover-car-wash-bay": {
    summary: "A rollover car wash bay and service door washed down and repainted.",
    story: [
      "Car wash bays live in water and chemicals. We washed down the bay walls, repainted them and the tunnel, and refinished the service door, before and after shown.",
    ],
    scope: ["Wash-down prep", "Bay & tunnel walls", "Service door"],
  },
  "process-plant-steel-stairs": {
    summary: "Worn steel stairs in a process plant recoated white.",
    story: ["The before shots show stair treads worn to bare metal. We recoated the plant stairs and treads in a durable white coating."],
    scope: ["Stair prep", "Tread & stringer coating"],
  },
  "vibratory-equipment-base-recoat": {
    summary: "A corroded process-equipment base recoated.",
    story: ["We took a corroded equipment base and frame back to a clean, recoated white finish."],
    scope: ["Corrosion prep", "Equipment recoat"],
  },
  "medical-helicopter-hangar": {
    summary: "Ceiling and roof structure painted in a Life Link III medical helicopter hangar.",
    story: ["We painted the ceiling and exposed roof structure of a Life Link III hangar, working around an active air-medical operation."],
    scope: ["Hangar ceiling", "Roof structure"],
  },
  "black-steel-pergola-walkway": {
    summary: "A steel pergola walkway coated black.",
    story: ["We coated the steel frame of a pergola walkway over a brick path in a crisp black finish."],
    scope: ["Structural steel coating"],
  },
  "blue-accent-wall-school": {
    summary: "Classrooms, locker halls, restrooms and shop rooms painted with blue accent walls.",
    story: ["We painted this school's classrooms, corridors and locker hallways, restrooms and shop rooms, with blue feature walls throughout."],
    scope: ["Classrooms", "Locker halls & corridors", "Restrooms", "Shop rooms"],
  },
  "new-school-classroom-wing": {
    summary: "Painting a new classroom wing during construction.",
    story: [
      "On new construction, painting works around every other trade. Our crews painted classrooms, corridors, accent walls, a stairwell and railings from ladders and a scissor lift, ahead of ceiling tile and flooring.",
    ],
    scope: ["Classrooms & accent walls", "Corridors", "Stairwell & railings", "Scissor-lift spraying"],
  },
  "sc-school-commons-renovation": {
    summary: "A school cafeteria, learning commons and media center refreshed in maroon and white.",
    story: ["We painted the cafeteria serving area, learning commons and media center in the school's maroon and white."],
    scope: ["Cafeteria", "Learning commons", "Media center"],
  },
  "blue-accent-school-wing": {
    summary: "A school wing, tech-ed shop and stairwell painted.",
    story: ["We painted a school wing's corridors, classrooms, locker hallway and tech-ed shop, plus a yellow accent stairwell."],
    scope: ["Corridors & classrooms", "Tech-ed shop", "Stairwell"],
  },
  "skylight-commons-renovation": {
    summary: "A commons area renovated, including painted skylight wells.",
    story: ["We painted a large commons and lounge during its renovation, including the skylight wells, working from scaffolding."],
    scope: ["Commons & lounge", "Skylight wells", "Scaffold work"],
  },
  "carpeted-stairwell-corridor-repaint": {
    summary: "An open stairwell, landings and long corridor repainted.",
    story: ["We repainted an open stairwell, its landing walls and ceiling, and a long corridor."],
    scope: ["Stairwell & landings", "Corridor"],
  },
  "new-library-interior": {
    summary: "A library reading area painted, with a geometric accent wall.",
    story: ["We painted a library's reading areas under the clerestory windows and added a geometric painted accent wall."],
    scope: ["Reading areas", "Geometric accent wall"],
  },
  "log-home-deck-restain": {
    summary: "A log home's wraparound deck and railings washed and restained, before and after.",
    story: ["We washed the log home's deck and gable, then restained the deck boards and log railings; the before and after of the same deck is in the photos."],
    scope: ["Washing", "Deck restain", "Log railings"],
  },
  "dark-stained-backyard-deck": {
    summary: "A weathered backyard deck refinished in a dark stain.",
    story: ["We took a weathered deck to a rich dark stain on the boards, railings and rail caps."],
    scope: ["Deck boards", "Railings & caps"],
  },
  "stained-timber-columns-beams": {
    summary: "Timber columns and beams stained in our shop before install.",
    story: ["Staining timbers in the shop means a cleaner, more even finish and less time on site. We stained these columns and beams before they were installed."],
    scope: ["Shop staining", "Columns & beams"],
  },
  "red-house-exterior-repaint": {
    summary: "A red house, garage and screen porch repainted and stained.",
    story: ["We repainted the lap siding, gables and garage doors in red and stained the cedar screen porch, working every elevation from ladders."],
    scope: ["Lap siding & gables", "Garage doors", "Cedar screen porch"],
  },
  "yellow-house-exterior-repaint": {
    summary: "Peeling yellow siding scraped and repainted, before and after.",
    story: ["The before shot shows peeling paint. We prepped the siding and repainted the house."],
    scope: ["Scraping & prep", "Siding repaint"],
  },
  "oak-kitchen-cabinet-refinish": {
    summary: "Oak kitchen cabinets and island painted white, before and after.",
    story: [
      "We masked the kitchen, took the doors to the shop to spray them white, and painted the oak boxes and island on site, turning a dated oak kitchen bright.",
    ],
    scope: ["Masking", "Shop-sprayed doors", "Cabinet boxes & island"],
  },
  "split-level-home-railing-repaint": {
    summary: "Oak stair railings repainted black and white, plus a full interior repaint.",
    story: ["The before shots show orange oak railings. We painted them black and white and repainted the entry, living room, dining room and upstairs hall."],
    scope: ["Stair railings", "Entry & living areas", "Upstairs hall"],
  },
  "cottage-home-interior-repaint": {
    summary: "A cottage interior painted, from bare doors to the sunroom.",
    story: ["We masked and painted the bedrooms, living room, doors and trim, and the sunroom with its plank ceiling."],
    scope: ["Bedrooms & living room", "Doors & trim", "Sunroom"],
  },
  "shiplap-bungalow-interior": {
    summary: "Shiplap rooms, fireplace room and entry doors painted.",
    story: ["We painted the shiplap walls and ceilings, the fireplace room and hallway, refinished the entry doors and stained a knotty wood door."],
    scope: ["Shiplap walls & ceilings", "Entry doors", "Stained wood door"],
  },
  "lake-view-home-remodel-painting": {
    summary: "A lake home remodel painted from fresh drywall to finish.",
    story: ["We took this remodel from mudded drywall to finished walls around the lake-view windows, bedrooms and laundry hall."],
    scope: ["Drywall to finish", "Living spaces & bedrooms"],
  },
  "new-construction-home-interior": {
    summary: "A new-construction home painted throughout.",
    story: ["We painted the bedrooms, baths, hallways and lower-level family room of a new home."],
    scope: ["Bedrooms & baths", "Hallways & trim", "Family room"],
  },
  "vaulted-home-interior-repaint": {
    summary: "A vaulted lake home interior repainted.",
    story: ["We repainted the great room, kitchen, stairwell, family room, wet bar hall and baths of this vaulted home."],
    scope: ["Great room & kitchen", "Stairwell", "Family room & baths"],
  },
  "navy-accent-wall-home": {
    summary: "Walls patched and repainted with a navy accent wall.",
    story: ["We patched the walls, then repainted the living room and vaulted entry with a navy accent wall."],
    scope: ["Wall patching", "Navy accent wall", "Living room & entry"],
  },
  "bathtub-refinish": {
    summary: "A stained bathtub refinished to glossy white.",
    story: ["We refinished a stained tub in place to a glossy white finish, before and after shown."],
    scope: ["Tub refinishing"],
  },
};

export function slugify(s) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
