"use client";

import { useEffect, useState } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { trackEngagement } from "@/lib/analytics/tracking";
import { RegistrationPopup } from "../registration/RegistrationPopup";

export function ShopAnalyticsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showRegistration, setShowRegistration] = useState(true);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Check if user has already registered
    const userId = localStorage.getItem("shopUserId");
    if (userId) {
      setShowRegistration(false);
    }

    // Interest Stage Tracking
    trackEvent("shop_landing_view", {
      section: "shop_home",
      has_registered: Boolean(userId),
    });
  }, [trackEvent]);

  const handleRegistrationComplete = () => {
    setShowRegistration(false);
    trackEngagement("registration_complete", {
      source: "shop_page",
    });
  };

  return (
    <>
      {children}
      {showRegistration && (
        <RegistrationPopup onComplete={handleRegistrationComplete} />
      )}
    </>
  );
}
