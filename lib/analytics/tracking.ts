import { logFirebaseEvent } from "../firebase";
import type {
  PageViewEvent,
  ProductEvent,
  CartEvent,
  ConversionEvent,
} from "./types";

// Awareness Stage
export const trackPageView = (data: PageViewEvent) => {
  logFirebaseEvent("page_view", {
    ...data,
    timestamp: new Date().toISOString(),
  });
};

export const trackEngagement = (type: string, data: Record<string, any>) => {
  logFirebaseEvent("engagement", {
    engagement_type: type,
    ...data,
    timestamp: new Date().toISOString(),
  });
};

// Interest Stage
export const trackProductView = (data: ProductEvent) => {
  logFirebaseEvent("product_view", {
    ...data,
    timestamp: new Date().toISOString(),
  });
};

export const trackPromoView = (data: Record<string, any>) => {
  logFirebaseEvent("promotion_view", {
    ...data,
    timestamp: new Date().toISOString(),
  });
};

// Consideration Stage
export const trackAddToCart = (data: CartEvent) => {
  logFirebaseEvent("add_to_cart", {
    ...data,
    timestamp: new Date().toISOString(),
  });
};

export const trackRemoveFromCart = (data: CartEvent) => {
  logFirebaseEvent("remove_from_cart", {
    ...data,
    timestamp: new Date().toISOString(),
  });
};

// Purchase Stage
export const trackPurchase = (data: ConversionEvent) => {
  logFirebaseEvent("purchase", {
    ...data,
    timestamp: new Date().toISOString(),
  });
};

// User Behavior
export const trackUserBehavior = (
  action: string,
  data: Record<string, any>
) => {
  logFirebaseEvent("user_behavior", {
    action,
    ...data,
    timestamp: new Date().toISOString(),
  });
};
