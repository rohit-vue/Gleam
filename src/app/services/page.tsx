import { ServicesHero } from "@/components/ServicesHero";
import { ServicesPreventionSection } from "@/components/ServicesPreventionSection";
import { ServicesTabbedCardsSection } from "@/components/ServicesTabbedCardsSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesPreventionSection />
      <ServicesTabbedCardsSection />
    </>
  );
}
