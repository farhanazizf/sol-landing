"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/firebase";
import { logEvent, Analytics } from "firebase/analytics";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only attempt to log events if analytics is initialized
    if (analytics) {
      try {
        logEvent(analytics as Analytics, "page_view");
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
  }, []);

  return <>{children}</>;
}
