"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  trackPageView,
  trackEngagement,
  trackUserBehavior,
} from "@/lib/analytics/tracking";

export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startTimeRef = useRef<number>(Date.now());
  const lastInteractionRef = useRef<number>(Date.now());

  useEffect(() => {
    // Track page view on mount and route changes
    const handlePageView = () => {
      startTimeRef.current = Date.now();
      trackPageView({
        name: "page_view",
        page_path: pathname,
        referrer: document.referrer,
      });
    };

    handlePageView();

    // Track user engagement
    const handleUserInteraction = () => {
      const now = Date.now();
      const timeSinceLastInteraction = now - lastInteractionRef.current;

      if (timeSinceLastInteraction > 1000) {
        // Debounce
        trackEngagement("user_interaction", {
          page_path: pathname,
          time_since_last_interaction: timeSinceLastInteraction,
        });
        lastInteractionRef.current = now;
      }
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollDepth = Math.round(
        ((window.scrollY + window.innerHeight) /
          document.documentElement.scrollHeight) *
          100
      );

      trackUserBehavior("scroll", {
        page_path: pathname,
        scroll_depth: scrollDepth,
      });
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Track time spent on page when unmounting
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      trackPageView({
        name: "page_exit",
        page_path: pathname,
        time_spent: timeSpent,
      });

      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, searchParams]);

  return {
    trackEvent: trackUserBehavior,
  };
};
