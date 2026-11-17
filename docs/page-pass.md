# Page pass

Living list for the industry, project, team, and certifications pass.
Sections below render a photo and link to the case study when the gallery
has a matching job. Anything without a photo is hidden: industry sections
with no matching gallery photo, and service-page cards with no `photo` id
(handled in `CategoryHub` and `IndustrySections`). Their copy stays in the
data, so adding a photo brings them back. Do not point them at the generic
service page.

## Done in this pass

- Industry pages: each service is a section (photo, short copy, links to the
  matching project pages), not a button to `/floor-coatings` or similar.
- Industry pages with brand marks show a past-client logo row.
- Project pages have a solid bar: All projects, the industry (when the job is
  tagged with one), and the service line.
- Certifications: supplier marks are larger.
- Team: leadership cards for Mike Wheeler and Sam Adams, plus the three bases.
  No invented bios. Crew photos are still missing.

## Still needs photos or a real album

Hidden on the site until photos exist.

- Industrial service cards: Fuel Tanks (BNSF, ConVault), Water & Wastewater
  (Medina), Branded & Painted Tanks
- Specialty service cards: Historic Concrete Restoration (St. Anthony Main),
  Waterproofing & Traffic Coatings (St. Cloud State)
- Education: electrostatic locker refinishing, Koroseal tackable wallcovering
- Retail: kitchen & brewery floors (urethane cement), vinyl & graphic wallcovering
- Industrial: waterproofing & traffic coatings
- Residential: decorative concrete
- Team: headshots of Mike and Sam, and crew photos

## How a section finds its work

Defined on each industry in `src/data/industries.js` (`services`).
Matched in `src/lib/gallery.js` (`bestPhoto`, `projectsMatching`).

- `service` / `spaces` / `excludeSpaces` filter gallery photos.
- `includeUntagged` lets photos with no industry count, so locker-room floors
  filed without an industry still show on Education.
- `groups` pins specific albums when the industry tag is wrong (Minnesota
  Inboard is the dealership example).
- `anyIndustry` pulls a kind of work onto a page even when the album is tagged
  to a different industry (tanks on Government).
- `photoTitle` picks which photo in a shared album leads the section.
- `excludeGroups` keeps an album out of a broader section when that album has its own section (Lake Byllesby pavilion ceiling).

Client name lists are not shown on the site. They live in `clients` on each industry in `src/data/industries.js`, with a readable copy in `docs/who-weve-worked-for.md`.
