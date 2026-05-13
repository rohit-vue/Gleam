import { LocationsCtaSection } from "@/components/LocationsCtaSection";
import { LocationsGrid } from "@/components/LocationsGrid";
import { LocationsHero } from "@/components/LocationsHero";

export const metadata = {
  title: "Locations — Gleam",
  description: "6 Gleam dental locations across Greater Los Angeles.",
};

export default function LocationsPage() {
  return (
    <>
      <LocationsHero />
      <LocationsGrid />
      <LocationsCtaSection />
    </>
  );
}
