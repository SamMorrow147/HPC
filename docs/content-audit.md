# Content audit

A catalog of the written copy on the site, what was wrong with it, and what it
says now. Done November 2026.

Rule for this pass: no new facts. Every rewrite uses only what was already on
the site, in `src/data/projects.js`, or in `docs/who-weve-worked-for.md`.
Anything that needs a fact from HPC is listed under **Open questions** at the
bottom, not guessed at.

## What was wrong, in general

1. **Slogan headlines that don't say anything.** "Bring the house back before
   the gray wins", "The room is the brand", "The building has to sell", "The
   civic room", "The logs come back". Short, clever-sounding lines that a
   reader has to decode. They read as machine-written because they follow
   one template: a punchy noun phrase standing in for a plain statement.
2. **The same sentence used again and again.** "Where a failed coating means
   downtime" appeared six times. "So there is no seam for water to sit in"
   twice on one page. "From the ground and from the top of the tank" three
   times. On every industry page, the cards in the top section repeated the
   project sections below them almost word for word.
3. **Made-up mood.** "The cedar timber porch is the best seat at this lake
   home." "River Valley Church wanted spaces that feel welcoming for every
   age." "Clean, quiet work in a space built for patients." None of these
   were things HPC said. They were filler.
4. **"Not X, but Y" contrasts and openers about the craft itself.** "Takes a
   coatings crew's control, not just a painter's brush." "Metallic epoxy only
   looks effortless." "Full-scribe log homes are beautiful and unforgiving."
5. **Facts that disagreed between pages.** The shared call to action at the
   bottom of every service and industry page said "Free estimates across
   Minnesota," and the FAQ said HPC only works in Minnesota. The rest of the
   site says five states and Buffalo HQ.
6. **Notes to ourselves showing on the live page.** The certifications page
   said "EPA RRP certification details echo the Log Home page", but the Log
   Home page never mentions EPA RRP.

## How the copy should sound from here

- Say who, what and where. "We painted the gym, auditorium and weight room
  at GFW" beats "A school's colors should be the first thing you see."
- Headlines should state something a facilities manager or homeowner would
  care about: "Scheduled around the school year", "Prep and lining by the
  same crew".
- One idea, one place. If a line is on the approach cards, don't repeat it
  in the project sections below.
- No personifying surfaces ("the gray wins", "the logs come back", "bays
  that stay wet"). No "not just X" contrasts. No closing flourish on a
  paragraph.
- If we don't know it (a date, a product, a reason the client chose
  something), leave it out.

---

## Industry pages (`src/data/industries.js`)

Each industry page has: hero title + intro, an "approach" band (kicker, H2,
intro, three photo cards), a section heading, project sections, and a client
logo row.

The section heading kicker was "What we do here" on every page, and the title
was "What that looks like" on every page. The kicker is now "Selected work"
(in `src/components/IndustrySections.jsx`) and each industry has its own
title.

### Residential & Lake Homes

| Spot | Before | After |
|---|---|---|
| Hero intro | Log home restoration up and down lakes country, plus garage, basement and porch floors… | Log and cedar restoration, house painting, and garage and basement floors for homeowners across Minnesota and western Wisconsin. |
| Approach kicker | For lake homes | For homeowners |
| Approach H2 | **Bring the house back before the gray wins** | **Restore the logs once, then keep them up** |
| Approach intro | Log and cedar homes across Minnesota and western Wisconsin, then the porch, the garage and the basement so the rest of the place matches. | Sun and water wear through a log finish, the wood turns gray, and checks open up where water can get in. We strip and restore homes that have reached that point, then come back every few years with a maintenance coat so they don't need a full strip again. |
| Card 1 | The logs come back | Full restoration: stripping, log and shake repair, chinking and a three-coat stain, with gables and corners worked from a lift. |
| Card 2 | The porch matches the house | Decks and porches |
| Card 3 detail | …to a full team-color broadcast. | …to a purple-and-gold garage with a Vikings logo set in. |
| Section title | What that looks like | Home and cabin projects |
| Log section | (same sentence as card 1) | Full-scribe, chalet and log-sided homes stripped, repaired and restained, with garages and outbuildings done to match. |
| Floors section | (same sentence as card 3) | Flake garage floors and metallic epoxy for basements, installed year-round with cold-weather products. |
| Porches section | …so the wood outside matches the logs. | Deck boards, log railings, cedar porch ceilings and timber posts, washed and restained. |

Why the H2 changed: "before the gray wins" was trying to say *restain before
the weathering turns into damage*. The new intro says that outright, and the
H2 states the real offer: a full restoration, then maintenance coats.

### Education

| Spot | Before | After |
|---|---|---|
| Hero intro | …so everything is done before the first bell in fall. | Painting and floor coatings for classrooms, hallways, gyms, pools and locker rooms, scheduled over summer and school breaks. |
| Approach H2 | Finished before the first bell | Scheduled around the school year |
| Approach intro | A school can't paint around students all year… | Most school work happens over summer break, with smaller jobs fit into winter and spring breaks… |
| Cards | On the school calendar / Floors that take water and cleats / The school's own colors | Classrooms, halls and commons / Locker rooms, pools and gyms / School colors, lockers and tackwall |
| Section title | What that looks like | School and campus projects |
| Locker room section | …so there is no seam for water to sit in. (also on card 2) | Explains the cove base: one continuous system with no joint at the wall for water to get under. |
| UW-River Falls | …so each wing has its own identity. | Names the building and the actual graphics (DNA strand, neurons, molecules). |
| Buffalo MS | Hallways and purple-and-white locker halls… | Leads with "Our hometown middle school." |
| Viking Elementary | …finished before the first day. | Leads with "A new building." and lists the rooms. |
| Pool | …finished so a humid room still looks like the rest of the school. | …where the coating has to hold up in air that stays humid all year. |
| Gyms | …including painted mascots and home-of graphics. | …hand-painted center-court logos and "Home of the…" wall graphics. |

### Government & Public Safety

| Spot | Before | After |
|---|---|---|
| Approach H2 | The building stays in service | Work done while the building stays open |
| Approach intro | A fire station, a library or a park can't close for the work… | A fire station still has to roll trucks, and a library or city hall still has visitors… |
| Cards | Open while the work is underway / Floors that take the trucks / **The civic room** | Public buildings / Apparatus bays and shops / Parks and historic buildings |
| Card 1 detail | …without handing the public a closed door. | …repainted in sections so they stay open to the public. |
| Card 3 detail | Repeated the Byllesby ceiling, which has its own section | Lake Harriet Bandshell and the Belzer grandstand (the card's photo is Belzer) |
| Section title | What that looks like | Public building projects |
| Tanks | …from the ground and from the top of the tank… | …with crews working from lifts and from the tank roof. |
| Byllesby | (good, tightened) | Adds Locus Architecture, which was already on the project page. |

### Retail & Hospitality

| Spot | Before | After |
|---|---|---|
| Hero intro | …so customers never see the mess. | …scheduled around business hours. |
| Approach H2 | The finish is what the guest sees | Scheduled around your open hours |
| Cards | The business stays open / **The room is the brand** / Floors and walls that take a crowd | Before open, after close / Hotels and storefronts / Floors and wallcovering |
| Section title | What that looks like | Retail and hospitality projects |
| Decorative floors | …where the floor is part of the room people came to see. | An acid-stained concrete floor for an event barn, and a glossy coated floor in a historic brick building. |

### Automotive & Car Wash

| Spot | Before | After |
|---|---|---|
| Approach H2 | Back in service the next morning | Short shutdowns for shops and wash bays |
| Approach intro | …the building has to look as finished as what it sells. | Every day a service bay or wash tunnel is closed costs money… |
| Cards | One-day floors / **Bays that stay wet** / **The building has to sell** | Shop and showroom floors / Car wash bays / Dealership painting |
| Card 1 | Said metallic epoxy was a one-day floor | One-day polyaspartic for bays; metallic or solid epoxy for showrooms. Only polyaspartic is listed as one-day anywhere else on the site. |
| Section title | What that looks like | Dealership and car wash projects |
| Dealership section | …so the dealership looks as finished as the floor. (twice on the page) | Lists the Minnesota Inboard rooms. |

### Industrial & Manufacturing

| Spot | Before | After |
|---|---|---|
| Hero intro | …for facilities where a coating failure means downtime. | Tank linings, sandblasting, structural steel, equipment coatings and production floors for plants, utilities and railroads. |
| Approach H2 | A failed coating is downtime | Prep and lining by the same crew |
| Approach intro | …because a coating that fails takes the line down with it. | When a tank lining or steel coating fails, the line stops. Most failures start with poor prep… |
| Cards | Tanks stay in service / Steel gets blasted first / **Floors that mark the lane** | Tanks / Structural steel and equipment / Floors and walkways |
| Section title | What that looks like | Plant and utility projects |
| Steel section | …where a failed coating means downtime. | Plant stairs worn to bare metal, corroded equipment bases, trailers and a wind turbine tower… (these are the actual projects) |

---

## Homepage (`src/app/page.js`)

| Spot | Status |
|---|---|
| Hero "Better Surfaces. Better Performance." | Kept. It's the brand line. |
| Hero sub, service-area block, trust line | Kept. Plain and factual. |
| Floor Coatings band | Kept. |
| Commercial Painting band | Kept. |
| Industrial band | Kept. This and the Industrial page intro are now the only places "a failed coating means downtime" appears. |
| Log Home band title | "Log homes and lake cabins brought back from gray" → "Log home and cabin restoration across lakes country" |
| Log Home band body | "…so the finish never gets away from you" → "…every few years for a maintenance coat so the logs don't need another full strip" |
| Specialty band title | "The jobs that need a coatings specialist, not a general painter" → "Wallcovering, decorative concrete, waterproofing and murals" |
| Industries intro | "See the work for your kind of facility." → "Projects and services grouped by the kind of building." |
| Proof band, final CTA | Kept. |

## Shared pieces

| File | Change |
|---|---|
| `src/components/CategoryHub.jsx` (CTA on every service + industry page) | "Ready to get started? / Free estimates across Minnesota. / Get a Free Estimate" → "Have a project in mind? / Commercial bids and free residential estimates across MN, WI, ND, SD & IA. / Request a Bid or Estimate". Now matches the homepage. |
| `src/components/IndustrySections.jsx` | Kicker "What we do here" → "Selected work"; link "See all of these projects" → "See all projects like this". |
| Header, footer, nav, page `<title>`s, layout meta description | Reviewed and kept. |

## Service pages

| Page | Change |
|---|---|
| `/services` | H1 "Five service lines, one coatings crew" → "What we do" |
| `/industries` | "…the work and the names behind it" → "…the projects and services that apply to it" (client names aren't shown on industry pages, so the old line promised something that wasn't there) |
| `/floor-coatings` | List title "The right system for the floor, not one product for everything" → "Matched to the traffic, chemicals and cleaning each floor will see". Failing-floor box: "put down a system that stays" → "install a new system on clean concrete". |
| `/floor-coatings/commercial` | Gyms, Hospitals, Retail and Animal Facilities cards had generic claims ("meets healthcare cleanliness standards", "looks good under showroom lighting"). Now each card plainly says what kind of floor goes in. See open questions. |
| `/floor-coatings/residential` | Dropped "heat-reflective" (not supported anywhere). Wine-room card no longer uses "a finished-room floor, not a basement slab". |
| `/commercial-painting` | Reviewed and kept. It's specific and names real clients. |
| `/industrial-coatings` | Proof item "Industrial clients who can't afford a failed coating" → "Tank, steel and equipment work for manufacturers and railroads". Steps title "Prep is the job" → "Most of the job is prep". |
| `/log-home-restoration` | Intro dropped "Log home repair professionals for lakes country" (keyword stuffing) and "so the finish never gets away from you". The restoration card no longer says "Weathered gray logs back to new." Cabinet card: "factory-smooth finish" → "doors sprayed in our shop". Process steps, products and booking note kept. |
| `/specialty` | Intro no longer repeats the homepage's "specialist, not a general painter" line. Historic concrete: "without losing its character" → "while keeping its original look". |
| `/specialty/murals` | Intro and CTA rewritten ("Let's talk about what's possible" → "Send us photos and rough dimensions and we'll talk through options"). |

## About, contact and resources

| Page | Change |
|---|---|
| `/about` | H1 "The team behind High Performance Coatings" → "About High Performance Coatings" |
| `/about/our-company` | Replaced "Regardless of the project demand, perfection and satisfaction are the standard we hold ourselves to…" with a concrete line about surface prep. |
| `/about/certifications` | NACE description made specific (Twin Cities section). The leaked internal note at the bottom now tells pre-1978 homeowners to mention it when they request an estimate. |
| `/about/careers` | Dropped "is growing". |
| `/about/testimonials` | Not changed. It's still an honest placeholder. See open questions. |
| `/contact` | Not changed. See open questions about the address. |
| `/contact/free-estimate` | The service dropdown only had six options and didn't include Industrial, Log Home or Specialty. It now matches the five service lines. |
| `/resources` | H1 "Everything you need to plan your project" → "Planning a project" |
| `/resources/application-guides` | "no surprises once work starts" → "so the price is set before work starts"; "looking new for years" → "how to clean and maintain the finish after that". |
| `/resources/coating-styles` | Metallic: dropped "A signature high-end finish." Fixed broken grammar: "browse the our projects". |
| `/resources/faq` | The service-area answer said Minnesota only and didn't mention Buffalo. It now says Buffalo HQ and the five states. The free-estimates answer now separates residential estimates from commercial bids, matching the rest of the site. |
| `/resources/coating-types`, `/blog`, `/color-visualizer` | Reviewed and kept. |
| `/projects` | "{n} jobs told the way they happened…" → "{n} jobs with photos from before, during and after the work…" |

## Project write-ups (`src/data/projects.js`)

Most of the short write-ups were already plain and factual and were left
alone. These had filler openers or invented mood:

| Project | Removed or replaced |
|---|---|
| UW-River Falls | "a working building full of labs… needed a finish that could take years of student traffic"; "give each wing its own identity" |
| GFW Firebirds | "A school's colors should be the first thing you see walking in"; "carried the Firebirds brand"; "The centerpiece is…" |
| Lake Byllesby | "the kind of job that takes a coatings crew's control, not just a painter's brush" → "The crew worked the 30-foot ceiling from lifts." |
| Belzer Stadium | "needed its grandstand… to look as good as the field"; "season after season" |
| Minnesota Inboard | "has to sell boats, so the building had to look sharp" |
| Full-scribe log home | "beautiful and unforgiving"; "laid on a warm golden stain system" |
| Chalet log home | "The before shots tell the story" |
| Metallic floor | "Metallic epoxy only looks effortless"; "completely custom" |
| Red locker room | "the hardest floors in a school" (unsupported superlative) |
| Wind turbine | "Industrial work happens where the asset is" |
| Pottery Barn | "Retail facades are part of the brand." |
| River Valley Church | "wanted spaces that feel welcoming for every age" (invented intent) |
| Dental clinic | "clean, quiet work in a space built for patients" |
| Rec building | "means a lot of square footage and a lot of height" |
| Widseth, steel pergola | "crisp blue that holds up outdoors", "crisp black finish" |
| Red log cabin and shed | "so the whole place reads as one" |
| Lake home cedar porch | "the best seat at this lake home" |
| Log strip and stain | "the part nobody sees afterward" |
| Carnegie library | "Historic buildings need a lighter touch." |
| Car wash bay | "live in water and chemicals" |
| Oak kitchen | "turning a dated oak kitchen bright" |

## Other fix made during this pass

`/specialty/murals` broke the production build. The uncommitted gallery
change took the Byllesby album from 10 photos to 9, and the page hard-coded
`images[9]`. It now looks up the finished-ceiling photo by id (`m009`).

---

## Open questions (need HPC to confirm)

Resolved:

- Commercial floor cards with no photos or projects (Gyms & Fitness,
  Hospitals & Healthcare, Animal Facilities) and residential Driveway and
  Patios & Pool Decks were removed.
- The Buffalo address on the "Minneapolis Area" contact card is intended.
- Central CERT stays as is.
- "Our biggest service line" stays as is.

Still open:

1. **NACE.** NACE merged into AMPP in 2021. Should the certification list
   say AMPP?
2. **Mica finish** on Coating Styles. Is it still offered? Nothing else on
   the site mentions it.
3. **Testimonials.** The page is still a placeholder. Real quotes, or pull
   Google reviews?
4. **Coating Types page** covers epoxy, polyaspartic, wood stain and tank
   coatings, but not urethane cement or polished concrete, which the Floor
   Coatings page lists. Worth adding a short entry for each.
5. **Free estimate form** still shows "This is a wireframe, so nothing was
   actually sent" after submit. Needs a backend before launch.
