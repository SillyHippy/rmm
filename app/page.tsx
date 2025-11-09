import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ServiceAreas } from "@/components/ServiceAreas";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessServerFAQ } from "@/components/ProcessServerFAQ";
import { CTASection } from "@/components/CTASection";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <Services />
      <ServiceAreas />
      <WhyChooseUs />
      <ProcessServerFAQ />
      <CTASection />
    </>
  );
}
