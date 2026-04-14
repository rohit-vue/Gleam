import { Hero } from "@/components/Hero";
import { NoInsuranceSection } from "@/components/NoInsuranceSection";
import { ServiceCardsSection } from "@/components/ServiceCardsSection";
import { CatchEarlyResultsSection } from "@/components/CatchEarlyResultsSection";
import { PricingSection } from "@/components/PricingSection";
import { LocationsSection } from "@/components/LocationsSection";
import { FaqSection } from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <NoInsuranceSection />
      <ServiceCardsSection />
      <CatchEarlyResultsSection />
      <PricingSection />
      <LocationsSection />
      <FaqSection />
    </>
  );
}
