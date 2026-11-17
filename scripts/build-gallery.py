"""Build the curated project gallery.

Input:  scripts/gallery-curation.json -- one hand-reviewed record per source
        photo (keep/reject, caption, service line, industry, finish, album
        group). Edit that file to retitle, retag or drop a photo, then re-run.
Output: public/gallery/work/*.jpg (max 1400px, q78, EXIF-rotated) and
        src/data/gallery.json (only kept photos, with real pixel sizes).

    python3 scripts/build-gallery.py
"""

import json, os, re
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CURATION = os.path.join(ROOT, "scripts", "gallery-curation.json")
OUT_DIR = os.path.join(ROOT, "public", "gallery", "work")
OUT_JSON = os.path.join(ROOT, "src", "data", "gallery.json")

SOURCES = {
    "F": "/Users/sammorrow/Documents/Local Web Builds/HPC Sitemap/high-performance-coatings-facebook-photos",
    "D": "/Users/sammorrow/Library/CloudStorage/GoogleDrive-sam@clubhausagency.com/My Drive/Agency Company/Inactive Clients/2017Clients/HighPerfCoat/HPC Images",
    "S": os.path.join(ROOT, "scripts", "gallery-sources", "site"),
    # J&C Coatings (sister company) Facebook export; gitignored, lives in the repo root.
    "J": os.path.join(ROOT, "jc-coatings-facebook-photos"),
}
# Project-level names for multi-photo albums (shown on gallery cards).
# Client names only where legible on signage in the photos themselves.
ALBUMS = {
    "pine-woods-log-home": "Log Home Restoration in the Pines",
    "gfw-firebirds-school": "GFW Firebirds School Gym & Graphics",
    "metallic-epoxy-storefront": "Metallic Epoxy Storefront",
    "lakeview-log-home-cedar-roof": "Lakeview Log Home Restain",
    "belzer-stadium-grand-prairie-park": "JB Belzer Stadium, Grand Prairie Park",
    "cedar-shake-two-story-home": "Cedar Shake Home Restain",
    "new-rec-building-interior": "Recreation Center Gym & Track",
    "red-stained-log-sided-cabin-shed": "Red Log-Sided Cabin & Shed",
    "uw-river-falls-science-innovation-center": "UW-River Falls Science & Technology Innovation Center",
    "pink-wall-garage-flake": "Flake Garage Floor",
    "golden-log-sided-cabin-garage": "Lakeside Cabin & Garage Restain",
    "full-scribe-log-home-golden-stain": "Full-Scribe Log Home Restoration",
    "dental-clinic-interior": "Dental Clinic Interior",
    "vikings-fan-garage": "Vikings Flake Garage Floor",
    "stadium-rail-station": "U.S. Bank Stadium Light Rail Station",
    "river-valley-church": "River Valley Church",
    "metallic-floor-purple-walls": "Marbled Metallic Epoxy Floor",
    "warehouse-walkway": "Warehouse Walkway Coating",
    "barn-venue-stained-concrete": "Event Barn Acid-Stained Concrete",
    "brown-cedar-lake-home": "Cedar Lake Home Restain",
    "tan-flake-room": "Tan Flake Floor",
    "navy-school-athletic-wing": "School Athletic Wing",
    "np-school-gym-pool": "School Gym, Logo & Natatorium",
    "foursquare-farmhouse-repaint": "Farmhouse Exterior Repaint",
    "light-rail-station-painting": "Light Rail Station Painting",
    "wind-turbine-tower-painting": "Wind Turbine Tower Coating",
    "lake-home-cedar-porch": "Lake Home Cedar Porch",
    "shingle-style-lake-home-exterior": "Shingle-Style Lake Home Repaint",
    "holiday-inn-express-hotel": "Holiday Inn Express",
    "red-stained-log-home-and-garage": "Red-Stained Log Home & Garage",
    "white-storefront-exterior-repaint": "Pottery Barn Storefront Repaint",
    "tilt-up-building-exterior": "Commercial Building Exterior",
    "bell-bank-exterior": "Bell Bank Exterior",
    "chalet-log-home-restain": "Chalet Log Home, Before & After",
    "locker-room-flake-floor": "Locker Room Flake Floor & Cove Base",
    "minnesota-inboard-dealership": "Minnesota Inboard Dealership",
    "ballpark-pavilion": "Ballpark Pavilion",
    "historic-brick-building-concrete-floor": "Historic Brick Building Floor",
    "gray-epoxy-black-box-room": "Black Box Studio Floor",
    "gray-flake-locker-storage-room": "Locker Area Flake Floor",
    "cedar-lake-home-gable": "Cedar Lake Home",
    "grey-flake-hallway": "Flake Hallway Floor",
    "tan-epoxy-shop-floor": "Shop Floor Epoxy",
    "brown-siding-house-repaint": "House Siding Repaint",
    "log-home-strip-and-stain": "Log Home Strip & Stain",
    "trailer-sandblasting": "Dump Trailer Sandblasting",
    "process-plant-wall-coating": "Process Plant Wall Coatings",
    "penny-floor": "Penny Floor in Clear Epoxy",
    "red-tile-locker-room-flake": "Red Flake Locker Room",
    "parking-garage-striping": "Parking Garage Painting",
    "white-trim-home-interior": "Home Interior & Cabinet Refinish",
    "gray-blue-flake-floor": "Gray Flake Floor",
    "red-flake-locker-room": "Red Flake Locker Room Aisle",
    "gray-epoxy-large-room": "Gray Epoxy Floor",
    "cedar-cabin-deck": "Lakeside Cabin & Deck Restain",
    "car-wash-tunnel": "Car Wash Tunnel",
    "red-stair-commons": "School Commons Steel Stair",
    "brown-metallic-home": "Brown Metallic Epoxy Floor",
    "red-steel-exterior-stairs": "Exterior Steel Stair Recoat",
    "gray-white-house-repaint": "House Exterior Repaint",
    "widseth-office-exterior": "Widseth Office Exterior",
    "log-corner-restoration": "Log Corner Restoration",
    "aquatic-center": "Aquatic Center",
    "office-buildout": "Office Buildout",
    "textured-coating-panel": "Textured Non-Slip Coating",
    "new-gym-construction": "New Gym Painting",
    "new-building-hallways": "New Building Hallways",
    "downtown-loft-repaint": "Downtown Loft Repaint",
    "home-interior-repaint": "Home Interior Repaint",
    "gray-siding-house": "Siding & Soffit Cleaning",
    "light-gray-flake-garage": "Light Gray Garage Floor",
    "restroom-painting": "Restroom Painting",
    "white-flake-garage": "Light Flake Floor",
    "log-home-stone-foundation": "Log Home Restain",
    # J&C Coatings albums
    "buffalo-community-middle-school": "Buffalo Community Middle School",
    "viking-elementary-school": "Viking Elementary School",
    "blue-accent-wall-school": "School Classrooms & Locker Halls",
    "new-school-classroom-wing": "New School Classroom Wing",
    "sc-school-commons-renovation": "School Commons Renovation",
    "blue-accent-school-wing": "School Wing & Tech-Ed Shop",
    "skylight-commons-renovation": "Skylight Commons Renovation",
    "carnegie-free-library": "Carnegie Free Library Restoration",
    "new-library-interior": "Library Interior & Accent Wall",
    "carpeted-stairwell-corridor-repaint": "Stairwell & Corridor Repaint",
    "rollover-car-wash-bay": "Rollover Car Wash Bay",
    "medical-helicopter-hangar": "Life Link III Helicopter Hangar",
    "white-silo-tank-recoat": "Storage Tank Recoat",
    "process-plant-steel-stairs": "Process Plant Steel Stairs",
    "vibratory-equipment-base-recoat": "Process Equipment Base Recoat",
    "black-steel-pergola-walkway": "Steel Pergola Walkway",
    "rooftop-steel-ladder": "Rooftop Steel Ladder",
    "public-works-vehicle-facility": "Vehicle Garage & Wash Bay",
    "wraparound-porch-log-home": "Three-Story Log Home & Wraparound Porches",
    "log-home-deck-restain": "Log Home Deck Restain, Before & After",
    "dark-stained-backyard-deck": "Backyard Deck Stain, Before & After",
    "stained-timber-columns-beams": "Shop-Stained Timber Columns & Beams",
    "red-house-exterior-repaint": "Red House Exterior Repaint",
    "yellow-house-exterior-repaint": "Yellow House Exterior Repaint",
    "lodge-style-lake-home-restain": "Lodge-Style Lake Home Restain",
    "oak-kitchen-cabinet-refinish": "Oak Kitchen Cabinets Painted White",
    "split-level-home-railing-repaint": "Stair Railings & Interior Repaint",
    "cottage-home-interior-repaint": "Cottage Home Interior Repaint",
    "shiplap-bungalow-interior": "Shiplap Bungalow Interior",
    "lake-view-home-remodel-painting": "Lake View Home Remodel Painting",
    "new-construction-home-interior": "New Construction Home Interior",
    "vaulted-home-interior-repaint": "Vaulted Home Interior Repaint",
    "navy-accent-wall-home": "Navy Accent Wall Home",
    "bathtub-refinish": "Bathtub Refinish, Before & After",
    "white-interior-repaint": "Interior Ceiling & Wall Repaint",
}
# Industry corrections for whole albums.
ALBUM_INDUSTRY = {
    "wind-turbine-tower-painting": "industrial-manufacturing",
    "widseth-office-exterior": "industrial-manufacturing",
    "river-valley-church": None,
}

FIELDS = ["title", "service", "industry", "space", "finish", "stage", "quality", "group"]


def slugify(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def main():
    records = json.load(open(CURATION))
    os.makedirs(OUT_DIR, exist_ok=True)
    out, written = [], set()

    for r in records:
        if not r.get("keep"):
            continue
        src = os.path.join(SOURCES[r["id"][0]], r["source"])
        name = f"{slugify(r['title'])}-{r['id'].lower()}.jpg"
        dest = os.path.join(OUT_DIR, name)
        if not os.path.exists(dest):
            im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
            im.thumbnail((1400, 1400), Image.LANCZOS)
            im.save(dest, "JPEG", quality=78, optimize=True, progressive=True)
        w, h = Image.open(dest).size
        written.add(name)
        rec = {"id": r["id"].lower(), "file": f"/gallery/work/{name}", "w": w, "h": h,
               **{k: r.get(k) for k in FIELDS}}
        if r.get("group") in ALBUM_INDUSTRY:
            rec["industry"] = ALBUM_INDUSTRY[r["group"]]
        rec["album"] = ALBUMS.get(r.get("group"))
        out.append(rec)

    # Lake Byllesby mural: already-optimized case-study images, used in place.
    mural_dir = os.path.join(ROOT, "public", "gallery", "murals")
    murals = [  # (caption, stage, quality) for byllesby-0..9
        ("Pavilion Under the Trees", "after", "ok"),
        ("Pavilion From the Lawn", "after", "ok"),
        ("Mural Layout Drawing", "in-progress", "good"),
        ("Stain Color Samples", "in-progress", "good"),
        ("Staining the Ceiling From a Lift", "in-progress", "hero"),
        ("Watershed Lines Across the Ceiling", "after", "good"),
        ("Opening Day Crowd", "after", "good"),
        ("Ribbon Cutting and Ceiling Details", "after", "ok"),
        ("Pavilion in Use", "after", "good"),
        ("Finished Ceiling Over the Lake", "after", "hero"),
    ]
    for i, (caption, stage, quality) in enumerate(murals):
        f = f"byllesby-{i}.jpg"
        w, h = Image.open(os.path.join(mural_dir, f)).size
        out.append({"id": f"m{i:03d}", "file": f"/gallery/murals/{f}", "w": w, "h": h,
                    "title": caption, "service": "specialty",
                    "industry": "government-public-safety", "space": "Pavilion", "finish": None,
                    "stage": stage, "quality": quality,
                    "group": "lake-byllesby-mural", "album": "Lake Byllesby Pavilion Ceiling Mural"})

    # Drop stale outputs from photos that were retitled or rejected since the last run.
    for f in os.listdir(OUT_DIR):
        if f not in written:
            os.remove(os.path.join(OUT_DIR, f))

    json.dump(out, open(OUT_JSON, "w"), indent=1)
    print(f"{len(out)} photos -> {OUT_JSON}")


if __name__ == "__main__":
    main()
