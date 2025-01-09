// hooks/usePageTracking.ts
"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logFirebaseEvent } from "@/lib/firebase";

export const usePageTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    // Set initial start time when component mounts
    startTimeRef.current = performance.now();

    // Get full URL
    const url = pathname + searchParams.toString();

    // Track page view
    logFirebaseEvent("page_view", {
      page_path: url,
    });

    return () => {
      // When unmounting/changing routes, track the duration
      const duration = Math.round(
        (performance.now() - startTimeRef.current) / 1000
      );

      if (duration > 0) {
        logFirebaseEvent("page_visit_time", {
          page_path: url,
          duration_seconds: duration,
        });
      }
    };
  }, [pathname, searchParams]);
};
