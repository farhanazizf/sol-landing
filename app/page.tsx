import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { FaqSection } from "@/components/faq/FaqSection";
// import { CtaSection } from "@/components/home/CtaSection";
import { BrandSlider } from "@/components/home/BrandSection";
import { AppShowcase } from "@/components/home/Showcase";
import { usePageTracking } from "@/hooks/usePageTracking";
import { PageTracker } from "@/components/analytics/PageTracker";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Suspense } from "react";
import { ClientAnalytics } from "@/components/analytics/ClientAnalytics";

export default function Home() {
  // Awareness Stage Tracking
  // useAnalytics();

  return (
    <main>
      <Suspense fallback={null}>
        <ClientAnalytics />
      </Suspense>
      <HeroSection />
      <BrandSlider />
      <FeaturesSection />
      <FaqSection />
      <AppShowcase />
    </main>
  );
}
