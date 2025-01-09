"use client";

import { analytics, logFirebaseEvent } from "./firebase";
import { logEvent, Analytics } from "firebase/analytics";

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = "G-L23SMBHFS0";

export const trackPageView = (url: string) => {
  logFirebaseEvent("page_view", { page_path: url });
};

export const trackCustomEvent = (eventName: string, params: object = {}) => {
  logFirebaseEvent(eventName, params);
};

export const trackPageVisitTime = (pagePath: string, duration: number) => {
  logFirebaseEvent("page_visit_time", {
    page_path: pagePath,
    visit_duration: duration, // Durasi dalam detik
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  if (analytics) {
    logEvent(analytics as Analytics, "button_click", {
      button_name: buttonName,
      location: location,
    });
  }
};

export const trackNavigation = (linkName: string) => {
  if (analytics) {
    logEvent(analytics as Analytics, "navigation_click", {
      link_name: linkName,
    });
  }
};
