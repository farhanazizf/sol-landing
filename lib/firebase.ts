"use client";

import { initializeApp, getApps } from "firebase/app";
import {
  getAnalytics,
  isSupported,
  Analytics,
  logEvent,
} from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if it hasn't been initialized and config is valid
const app =
  !getApps().length && firebaseConfig.apiKey
    ? initializeApp(firebaseConfig)
    : getApps()[0];

const database = app ? getDatabase(app) : null;

// Initialize Analytics
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Modular and safe wrapper for logEvent
export const logFirebaseEvent = (
  eventName: string,
  eventParams: object = {}
): void => {
  if (analytics) {
    try {
      logEvent(analytics, eventName, eventParams);
    } catch (error) {
      console.error(`Failed to log event: ${eventName}`, error);
    }
  } else {
    console.warn(`Analytics not initialized. Skipping event: ${eventName}`);
  }
};

export const saveToDatabase = (path: string, data: any) => {
  if (database) {
    const dbRef = ref(database, path);
    return set(dbRef, data);
  }
};

export { app, analytics, database };
