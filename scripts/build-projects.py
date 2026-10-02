import json, os, re
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITEMAP = "/Users/sammorrow/Documents/Local Web Builds/HPC Sitemap"
OUT_IMG = os.path.join(ROOT, "public", "gallery")
os.makedirs(OUT_IMG, exist_ok=True)

triage = json.load(open(os.path.join(SITEMAP, "scrape", "triage-data.json")))
by_source_file = {(r["source"], r["file"]): r for r in triage}
manifest = json.load(open(os.path.join(SITEMAP, "scrape", "image-manifest.json")))
pages = json.load(open(os.path.join(SITEMAP, "pages.json")))
page_section = {p["slug"]: p["section"] for p in pages}

# known bad: exact + near duplicates (redundant half of each pair) + banners + flat/low-info
DUPES_TO_DROP = {
    "3b9056_d16a09d69bf54968a00a216793432d40~mv2.jpg",
    "19702381_1892887730926030_8574395942216432220_n-1.jpg",
    "20155635_1899316490283154_643731709602809803_n-1.jpg",
    "20228527_1898848726996597_5139056191011376328_n-1.jpg",
    "20258499_1903039616577508_4891098344262763176_n-1.jpg",
    "21078716_1912699625611507_4918733469791558721_n-1.jpg",
    "21150246_1912699658944837_391113649860694247_n-1.jpg",
    "12832353_1699650123583126_7888495306497657622_n.jpg",  # smaller dup of 12087733
    "cover-hpc-photo-235.jpg",
}
BANNERS_AND_UNRELATED = {
    "cover-hpc-photo-234.jpg", "cover-hpc-photo-236.jpg", "cover-hpc-photo-237.jpg",
}
FLAT_USELESS = {"3b9056_0281b0a88ad44efebeb~mv2.png"}

STYLE_SLUGS = {
    "flake-epoxy-coating-systems", "metallic-epoxy-coating-reflective-f",
    "single-broadcast-quartz-systems", "wood-chip-epoxy-concrete-coated-flo",
    "mica-epoxy-concrete-coatings", "all-epoxy-floor-coating-systems",
    "design-by-you-flake-flooring-system", "solid-color-systems",
    "polyurethane-concrete-systems",
}
CHROME_SLUGS = {"home-chrome"}  # unused placeholder

# section -> (audience, serviceType, default space)
SECTION_MAP = {
    "residential-epoxy": ("Residential", "Floor Coatings", None),
    "residential-painting": ("Residential", "Painting & Staining", None),
    "commercial-floors": ("Commercial", "Floor Coatings", None),
    "commercial-painting": ("Commercial", "Painting", None),
}
# slug -> space tag (only for pages where the page topic IS the space)
SLUG_SPACE = {
    "garage-floor-coatings": "Garage",
    "basement-concrete-coatings": "Basement",
    "driveway-coatings": "Driveway",
    "patios-concrete-coatings": "Patio & Pool Deck",
    "pool-deck-coatings": "Patio & Pool Deck",
    "patios-walkways": "Patio & Pool Deck",
    "exterior-masonry-coatings": "Exterior",
    "log-home-restoration": "Log Cabin",
    "exterior-wood-siding-staining-paint": "Exterior",
    "exterior-home-painting": "Exterior",
    "old-farm-home-paint-restoration": "Barn & Outbuilding",
    "refinishing-painting-of-steel-alumi": "Exterior",
    "manufacturing-industrial": "Manufacturing Plant",
    "food-service-industries": "Restaurant/Hospitality",
    "educational-flooring": "School",
    "hospitals-and-healthcare-facilities": "Healthcare",
    "retail-flooring-options": "Retail",
    "kennels-animal-hospitals": "Animal Facility",
    "heathcare-facility-painting-service": "Healthcare",
    "hospitality-painting-services": "Restaurant/Hospitality",
    "industrial-painting-services": "Manufacturing Plant",
    "education-centers-painting": "School",
    "painters-for-religious-institutions": "School",
    "property-managrment-painting-servic": "Office",
    "gym-and-fitness-center-painting": "Gym",
    "fuel-oil-water-chemical-lp-tank-coa": "Manufacturing Plant",
    "sandblasting-steel": "Manufacturing Plant",
}

projects = []
img_counter = 0

def save_image(src_path, bucket, name):
    global img_counter
    try:
        im = Image.open(src_path).convert("RGB")
    except Exception as e:
        print("SKIP (open failed)", src_path, e)
        return None
    im.thumbnail((1600, 1600), Image.LANCZOS)
    out_dir = os.path.join(OUT_IMG, bucket)
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, name)
    im.save(out_path, "JPEG", quality=82, optimize=True)
    img_counter += 1
    return f"/gallery/{bucket}/{name}"

def add_project(id_, title, audience, serviceType, spaceType, finish, blurb, source, image_specs):
    images = []
    for bucket, src_path, name in image_specs:
        url = save_image(src_path, bucket, name)
        if url:
            images.append({"file": url, "alt": title})
    if not images:
        return
    projects.append({
        "id": id_, "title": title, "audience": audience,
        "serviceType": serviceType if isinstance(serviceType, list) else [serviceType],
        "spaceType": spaceType if isinstance(spaceType, list) else [spaceType],
        "finish": finish if isinstance(finish, list) else ([finish] if finish else []),
        "blurb": blurb, "source": source, "images": images,
    })

# ---------------------------------------------------------------------------
# 1) murals-source -- precisely known projects
# ---------------------------------------------------------------------------
MS = os.path.join(SITEMAP, "murals-source")

# NOTE: the Mural Division portfolio PDF projects (Fargo ANG, Marthaler Farms,
# school murals, Crossroads Church, restaurant/retail) are intentionally left
# out of the site for now. Only the Byllesby case study (Clubhaus project
# page) is used. Source images stay in HPC Sitemap/murals-source/.

add_project("mural-byllesby", "Lake Byllesby Pavilion Ceiling Mural", "Commercial", "Murals", "Community/Park Pavilion", None,
    'A 30-foot-high ceiling mural tracing local watershed lines in diluted wood stain, developed with Locus Architecture using plotter-cut stencils. "Look deep into nature, and then you will understand everything better." -- Albert Einstein',
    "murals-source/byllesby-pavilion",
    [("murals", os.path.join(MS, "byllesby-pavilion", f), f"byllesby-{i}.jpg")
     for i, f in enumerate(["Byllesby_1.webp","Byllesby_2.webp","Byllesby_3.3.webp","Byllesby_4.webp","Byllesby_5.webp","Byllesby_6.2.webp","Byllesby_7.webp","Byllesby_8.webp","Byllesby_9.webp","Byllesby_10.webp"])])

# ---------------------------------------------------------------------------
# 2) site-scrape real photos (non-style pages), via section/slug mapping
# ---------------------------------------------------------------------------
by_slug_images = {}
for m in manifest:
    if len(m.get("pages", [])) >= 10:
        continue  # site chrome
    fn = m["file"]
    if fn in DUPES_TO_DROP or fn in BANNERS_AND_UNRELATED or fn in FLAT_USELESS:
        continue
    rec = by_source_file.get(("site-scrape", fn))
    if not rec:
        continue
    if min(rec["w"], rec["h"]) < 350:
        continue  # too small to be useful even as a thumbnail
    for slug in m["pages"]:
        if slug in STYLE_SLUGS:
            continue  # style pages handled separately (catalog-graphic heavy, skip for now)
        section = page_section.get(slug)
        if section not in SECTION_MAP:
            continue
        by_slug_images.setdefault(slug, []).append(rec)

for slug, recs in by_slug_images.items():
    audience, serviceType, _ = SECTION_MAP[page_section[slug]]
    space = SLUG_SPACE.get(slug)
    title = slug.replace("-", " ").title()
    specs = []
    for i, r in enumerate(recs[:6]):  # cap per page to keep the set manageable
        specs.append(("site", r["path"], f"{slug}-{i}.jpg"))
    add_project(f"site-{slug}", title, audience, serviceType, space, None,
        f"Project photos from the {title} page.", f"site-scrape/{slug}", specs)

# ---------------------------------------------------------------------------
# 3) curated picks from drive-2017 + facebook-new (hand-reviewed via contact sheets)
# ---------------------------------------------------------------------------
DRIVE = os.path.join(SITEMAP, "..", "..")  # not used directly; absolute paths below
DRIVE_DIR = "/Users/sammorrow/Library/CloudStorage/GoogleDrive-sam@clubhausagency.com/My Drive/Agency Company/Inactive Clients/2017Clients/HighPerfCoat/HPC Images"
FB_DIR = os.path.join(SITEMAP, "high-performance-coatings-facebook-photos")

CURATED = [
    # (file_in_source_dir, source_dir, title, audience, serviceType, space, finish)
    ("hpc-photo-098.jpg", FB_DIR, "Log Home Interior Staining", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-207.jpg", FB_DIR, "Log Home Exterior Restoration", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-097.jpg", FB_DIR, "Log Home Deck Staining", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-158.jpg", FB_DIR, "Log Home Corner Detail", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-157.jpg", FB_DIR, "Log Home Restoration Detail", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-212.jpg", FB_DIR, "A-Frame Log Cabin", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-084.jpg", FB_DIR, "Large Log Home Exterior", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-072.jpg", FB_DIR, "Log Home Exterior Stain", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-205.jpg", FB_DIR, "Log Cabin Exterior", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-079.jpg", FB_DIR, "Log Home Exterior", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-232.jpg", FB_DIR, "Log Cabin Restoration", "Residential", "Painting & Staining", "Log Cabin", None),
    ("hpc-photo-166.jpg", FB_DIR, "Shed & Outbuilding Painting", "Residential", "Painting & Staining", "Barn & Outbuilding", None),
    ("hpc-photo-040.jpg", FB_DIR, "Garage Exterior Painting", "Residential", "Painting & Staining", "Garage", None),
    ("hpc-photo-124.jpg", FB_DIR, "Garage Flake Floor", "Residential", "Floor Coatings", "Garage", "Flake"),
    ("hpc-photo-169.jpg", FB_DIR, "Garage Floor Coating", "Residential", "Floor Coatings", "Garage", None),
    ("hpc-photo-017.jpg", FB_DIR, "Exterior Home Painting", "Residential", "Painting & Staining", "Exterior", None),
    ("hpc-photo-125.jpg", FB_DIR, "Brick Home Exterior Painting", "Residential", "Painting & Staining", "Exterior", None),
    ("hpc-photo-073.jpg", FB_DIR, "Porch Ceiling Staining", "Residential", "Painting & Staining", "Exterior", None),
    ("hpc-photo-058.jpg", FB_DIR, "Metallic Epoxy Floor Detail", "Commercial", "Floor Coatings", None, "Metallic"),
    ("hpc-photo-131.jpg", FB_DIR, "Commercial Office Stairwell", "Commercial", "Painting", "Office", None),
    ("hpc-photo-184.jpg", FB_DIR, "Modern Office Lobby", "Commercial", "Painting", "Office", None),
    ("hpc-photo-147.jpg", FB_DIR, "Commercial Office Exterior", "Commercial", "Painting", "Office", None),
    ("hpc-photo-196.jpg", FB_DIR, "Institutional Building Exterior", "Commercial", "Painting", "Office", None),
    ("hpc-photo-142.jpg", FB_DIR, "Commercial Interior Painting", "Commercial", "Painting", "Office", None),
    ("hpc-photo-227.jpg", FB_DIR, "Commercial Lobby", "Commercial", "Painting", "Office", None),
    ("hpc-photo-151.jpg", FB_DIR, "Office Building Exterior", "Commercial", "Painting", "Office", None),
    ("hpc-photo-226.jpg", FB_DIR, "Healthcare Facility Interior", "Commercial", "Painting", "Healthcare", None),
    ("hpc-photo-031.jpg", FB_DIR, "Gym & Fitness Center", "Commercial", "Floor Coatings", "Gym", None),
    ("hpc-photo-195.jpg", FB_DIR, "School Gym Hallway", "Commercial", "Floor Coatings", "Gym", None),
    ("hpc-photo-044.jpg", FB_DIR, "School Hallway", "Commercial", "Floor Coatings", "School", None),
    ("hpc-photo-103.jpg", FB_DIR, "Commercial Hallway Floor", "Commercial", "Floor Coatings", "Office", None),
    ("hpc-photo-144.jpg", FB_DIR, "Gymnasium Basketball Court", "Commercial", "Floor Coatings", "Gym", None),
    ("hpc-photo-032.jpg", FB_DIR, "Retail / Gas Station Exterior", "Commercial", "Painting", "Retail", None),

    ("20842199_1909603605921109_4729151477649571561_n.jpg", DRIVE_DIR, "Terrazzo-Look Commercial Floor", "Commercial", "Floor Coatings", "Office", None),
    ("16463843_1825372724344198_5858650720661733007_o.jpg", DRIVE_DIR, "School Auditorium", "Commercial", "Floor Coatings", "School", None),
    ("20994312_1912699672278169_819862636363798330_n.jpg", DRIVE_DIR, "Gym Weight Room Floor", "Commercial", "Floor Coatings", "Gym", None),
    ("14680970_1780275355520602_6047255547135410437_o.jpg", DRIVE_DIR, "School Locker Room", "Commercial", "Floor Coatings", "School", None),
    ("16143549_1818620635019407_5235600690307185063_o.jpg", DRIVE_DIR, "Industrial Tank Room", "Commercial", "Floor Coatings", "Manufacturing Plant", None),
    ("21150246_1912699658944837_391113649860694247_n.jpg", DRIVE_DIR, "School Lobby", "Commercial", "Floor Coatings", "School", None),
    ("16486988_1825377311010406_1423711369655033579_o.jpg", DRIVE_DIR, "Coffee Shop Counter", "Commercial", "Floor Coatings", "Restaurant/Hospitality", None),
    ("21370833_1917967598418043_7088126861197112251_n.jpg", DRIVE_DIR, "Indoor Swimming Pool Deck", "Commercial", "Floor Coatings", "Gym", None),
    ("10338752_1699649036916568_7644320816451373526_n.jpg", DRIVE_DIR, "Gym Floor with Mascot Logo", "Commercial", "Floor Coatings", "Gym", None),
    ("18198231_1862249357323201_8101769540616630168_n.jpg", DRIVE_DIR, "Stadium Construction", "Commercial", "Floor Coatings", "Manufacturing Plant", None),
    ("16508206_1827030827511721_1476044425208111092_n.jpg", DRIVE_DIR, "Flake Floor Shower Area", "Commercial", "Floor Coatings", "School", "Flake"),
    ("15698010_1807805822767555_7744112875310069742_n.jpg", DRIVE_DIR, "Gym Under Construction", "Commercial", "Floor Coatings", "Gym", None),
    ("944994_1711500735731398_2633053495510074171_n.jpg", DRIVE_DIR, "Gym Floor Layout", "Commercial", "Floor Coatings", "Gym", None),
    ("13620951_1742014652680006_7908006475116212535_n.jpg", DRIVE_DIR, "Stadium Field Prep", "Commercial", "Floor Coatings", "Manufacturing Plant", None),
    ("20707924_1908489159365887_1785007552702665210_n.jpg", DRIVE_DIR, "Garage Floor Coating", "Residential", "Floor Coatings", "Garage", None),
    ("12087733_1699795420235263_6627432750327964863_o.jpg", DRIVE_DIR, "Log Home Staining In Progress", "Residential", "Painting & Staining", "Log Cabin", None),
]

missing = []
for fn, src_dir, title, audience, serviceType, space, finish in CURATED:
    full = os.path.join(src_dir, fn)
    if not os.path.exists(full):
        missing.append(full)
        continue
    slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    out_name = f"{slug}.jpg"
    bucket = "curated"
    add_project(f"curated-{slug}-{len(projects)}", title, audience, serviceType, space, finish,
        None, f"curated/{fn}", [(bucket, full, out_name)])

if missing:
    print(f"\n{len(missing)} curated files not found (filename guesses off) -- skipped:")
    for m in missing:
        print(" ", m)

out_path = os.path.join(ROOT, "src", "data", "projects.json")
os.makedirs(os.path.dirname(out_path), exist_ok=True)
json.dump(projects, open(out_path, "w"), indent=2)
print(f"\nWrote {len(projects)} projects, {img_counter} images, to {out_path}")
