import { ServicesFooterSection } from "@/components/ServicesFooterSection";
import { ServicesHero } from "@/components/ServicesHero";
import PricingBanner from "@/components/ServicesMembershipBannerSection";
import { ServicesPreventionSection } from "@/components/ServicesPreventionSection";
import { ServicesTabbedCardsSection } from "@/components/ServicesTabbedCardsSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesPreventionSection />
      <ServicesTabbedCardsSection />
      <PricingBanner />
      <ServicesFooterSection />
    </>
  );
}
