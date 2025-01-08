"use client";

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}
// const firebaseConfig = {
//   apiKey: "AIzaSyDSuXDJbc1ihUWNswuddj_XvqGdtJNqV60",
//   authDomain: "trial-data-collecting.firebaseapp.com",
//   projectId: "trial-data-collecting",
//   storageBucket: "trial-data-collecting.firebasestorage.app",
//   messagingSenderId: "204035292718",
//   appId: "1:204035292718:web:2a642eb19e489198a9a9bf",
//   measurementId: "G-L23SMBHFS0",
// };

export const GA_TRACKING_ID = "G-L23SMBHFS0";

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
