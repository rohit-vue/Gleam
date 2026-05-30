import { Hero } from "@/components/Hero";
import { HeroMobile } from "@/components/HeroMobile";
import { NoInsuranceSection } from "@/components/NoInsuranceSection";
import { ServiceCardsSection } from "@/components/ServiceCardsSection";
import { CatchEarlyResultsSection } from "@/components/CatchEarlyResultsSection";
import { PricingSection } from "@/components/PricingSection";
import { LocationsSection } from "@/components/LocationsSection";
import { FaqSection } from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      <HeroMobile />
      <div className="hidden md:block">
        <Hero />
      </div>
      <NoInsuranceSection />
      <ServiceCardsSection />
      <CatchEarlyResultsSection />
      <PricingSection />
      <LocationsSection />
      <FaqSection />
    </>
  );
}
