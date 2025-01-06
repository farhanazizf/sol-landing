import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";
import { BrandSlider } from "@/components/home/BrandSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandSlider />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
