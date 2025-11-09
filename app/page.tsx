import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ServiceAreas } from "@/components/ServiceAreas";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessServerFAQ } from "@/components/ProcessServerFAQ";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceAreas />
      <WhyChooseUs />
      <ProcessServerFAQ />
      <CTASection />
    </>
  );
}
