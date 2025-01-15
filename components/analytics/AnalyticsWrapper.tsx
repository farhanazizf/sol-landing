"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

export function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Awareness Stage Tracking
    trackEvent("page_view", {
      section: "home",
      timestamp: new Date().toISOString(),
    });
  }, [trackEvent]);

  return <>{children}</>;
}
