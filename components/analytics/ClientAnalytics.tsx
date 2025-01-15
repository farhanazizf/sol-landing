"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

export function ClientAnalytics() {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    trackEvent("page_view", {
      section: "home",
      timestamp: new Date().toISOString(),
    });
  }, [trackEvent]);

  return null;
}
