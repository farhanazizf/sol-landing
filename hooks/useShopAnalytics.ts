"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logFirebaseEvent } from "@/lib/firebase";

export const useShopAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startTimeRef = useRef<number>(0);
  const addToCartStartTimeRef = useRef<number>(0);

  useEffect(() => {
    // Start timing the page visit
    startTimeRef.current = performance.now();

    // Track page view
    logFirebaseEvent("shop_page_view", {
      page_path: pathname,
      search_params: searchParams.toString(),
    });

    return () => {
      // Track visit duration when leaving the page
      const duration = Math.round(
        (performance.now() - startTimeRef.current) / 1000
      );
      logFirebaseEvent("shop_page_exit", {
        page_path: pathname,
        duration_seconds: duration,
      });
    };
  }, [pathname, searchParams]);

  const trackNavigation = (destination: string) => {
    logFirebaseEvent("shop_navigation", {
      from_path: pathname,
      to_path: destination,
    });
  };

  const trackButtonClick = (
    buttonName: string,
    context?: Record<string, any>
  ) => {
    logFirebaseEvent("shop_button_click", {
      button_name: buttonName,
      page_path: pathname,
      ...context,
    });
  };

  const startAddToCartTimer = () => {
    addToCartStartTimeRef.current = performance.now();
  };

  const trackAddToCart = (productId: string, quantity: number) => {
    const duration = addToCartStartTimeRef.current
      ? Math.round((performance.now() - addToCartStartTimeRef.current) / 1000)
      : 0;

    logFirebaseEvent("add_to_cart", {
      product_id: productId,
      quantity: quantity,
      time_to_add_seconds: duration,
      page_path: pathname,
    });

    // Reset the timer
    addToCartStartTimeRef.current = 0;
  };

  return {
    trackNavigation,
    trackButtonClick,
    startAddToCartTimer,
    trackAddToCart,
  };
};
