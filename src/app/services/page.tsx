import { ServicesFooterSection } from "@/components/ServicesFooterSection";
import { ServicesHero } from "@/components/ServicesHero";
import { ServicesMembershipBannerSection } from "@/components/ServicesMembershipBannerSection";
import { ServicesPreventionSection } from "@/components/ServicesPreventionSection";
import { ServicesTabbedCardsSection } from "@/components/ServicesTabbedCardsSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesPreventionSection />
      <ServicesTabbedCardsSection />
      <ServicesMembershipBannerSection />
      <ServicesFooterSection />
    </>
  );
}
