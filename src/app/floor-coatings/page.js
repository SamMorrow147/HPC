import Image from "next/image";
import Link from "next/link";
import CategoryHub from "@/components/CategoryHub";
import { photo } from "@/lib/gallery";
import { ClientGroups, FeatureList, IndustryLinks, ProofBand } from "@/components/ServiceBlocks";
import { industries } from "@/data/industries";

export const metadata = { title: "Floor Coatings | High Performance Coatings" };

const AUDIENCES = [
  {
    label: "Commercial & Industrial Floors",
    href: "/floor-coatings/commercial",
    desc: "Schools, locker rooms, shops, kitchens, breweries, plants, car washes & showrooms.",
    image: photo("f088"),
  },
  {
    label: "Residential Floors",
    href: "/floor-coatings/residential",
    desc: "Garages, basements, wine & game rooms, porches and pool decks.",
    image: photo("f206"),
  },
];

export default function Page() {
  return (
    <CategoryHub
      kicker="Services"
      title="Floor Coatings"
      intro="Our biggest service line. Epoxy, polyaspartic, urethane cement and polished concrete, installed in schools, plants, dealerships, car washes, kitchens and garages, including through the winter."
      heroImage={photo("f060")}
      service="floor-coatings"
    >
      <section className="mx-auto max-w-7xl px-6 pt-14">
        <div className="grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl p-7"
            >
              <Image
                src={a.image}
                alt={a.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
              <div className="relative">
                <h2 className="text-xl font-bold text-white">{a.label}</h2>
                <p className="mt-1 max-w-sm text-sm text-white/80">{a.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FeatureList
        kicker="Systems we install"
        title="The right system for the floor, not one product for everything"
        items={[
          { label: "Full flake epoxy", detail: "Including hybrid and stone flake blends." },
          { label: "Metallic epoxy", detail: "Custom color blends for basements, showrooms and lobbies." },
          { label: "Quartz epoxy", detail: "Single and double broadcast for locker rooms and wet areas." },
          { label: "Polyaspartic / polyurea", detail: "Fast-cure, one-day systems." },
          { label: "Urethane cement", detail: "For brewery, food-processing and commercial kitchen floors." },
          { label: "Solid color with nonslip", detail: "Shops, warehouses and production floors." },
          { label: "Epoxy cove base", detail: "Seamless, sanitary floor-to-wall transitions." },
          { label: "Polished concrete", detail: "Ground and polished up to 800 grit." },
          { label: "Car wash wall & floor systems", detail: "Built for constant water and chemicals." },
        ]}
      />

      <ProofBand
        items={[
          ["All winter", "Cold-weather products, so floors can go in year-round"],
          ["Next-day service", "One-day systems: ready for oil changes the next morning"],
          ["2014 & still going", "Nicollet Bus Garage floor shows no wear more than 10 years later"],
          ["40,000 sq ft", "Single-floor install for Wallace Carlson"],
        ]}
      />

      <ClientGroups
        title="Floors we've put down"
        groups={[
          {
            group: "Commercial & industrial",
            names: ["Wallace Carlson", "Seagate", "MGK", "Modern Farm Equipment", "Swanston Equipment", "Nicollet Bus Garage"],
          },
          {
            group: "Automotive & car wash",
            names: ["Mercedes-Benz Bloomington", "Casey's", "Cenex", "Mr. Carwash", "Aztec BP", "Stop N Shop", "NAPA"],
          },
          {
            group: "Food, retail & schools",
            names: ["Luce Line Brewing", "Scooters Coffee", "Ziggi's", "Subway", "Edwin's Edibles", "West Fargo, Edgerton & Becker locker rooms"],
          },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-2xl border border-brand-line p-8">
          <h2 className="text-xl font-extrabold text-brand-ink">Floor failing? We fix other companies&apos; work.</h2>
          <p className="mt-2 max-w-2xl text-brand-muted">
            Peeling, delaminating or hot-tire-lifted coatings are almost always
            a prep problem. We grind it off, prep it right, and put down a
            system that stays.
          </p>
        </div>
      </section>

      <IndustryLinks
        industries={industries.filter((i) =>
          ["education", "automotive-car-wash", "industrial-manufacturing", "retail-hospitality", "residential-lake-homes"].includes(i.slug)
        )}
      />
    </CategoryHub>
  );
}
