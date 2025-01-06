import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}