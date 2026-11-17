/** @type {import('next').NextConfig} */
const nextConfig = {
  // The first wireframe pass was audience-led (/residential, /commercial).
  // The nav is now service-led; keep the old paths working.
  async redirects() {
    return [
      ["/residential", "/floor-coatings/residential"],
      ["/residential/floor-coatings", "/floor-coatings/residential"],
      ["/residential/painting", "/log-home-restoration"],
      ["/residential/surface-prep", "/specialty"],
      ["/residential/cleaning", "/specialty"],
      ["/commercial", "/services"],
      ["/commercial/floor-coatings", "/floor-coatings/commercial"],
      ["/commercial/painting", "/commercial-painting"],
      ["/commercial/surface-prep", "/industrial-coatings"],
      ["/commercial/cleaning", "/specialty"],
      ["/commercial/murals", "/specialty/murals"],
      ["/gallery", "/projects"],
    ].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
