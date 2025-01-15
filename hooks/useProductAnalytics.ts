"use client";

import { useCallback } from "react";
import {
  trackProductView,
  trackAddToCart,
  trackRemoveFromCart,
  trackPurchase,
} from "@/lib/analytics/tracking";

export const useProductAnalytics = () => {
  const trackProductDetails = useCallback((product: any) => {
    trackProductView({
      name: "product_view",
      product_id: product.id,
      product_name: product.name,
      product_brand: product.brand,
      product_category: product.category,
      product_price: product.price,
    });
  }, []);

  const trackAddToCartEvent = useCallback((product: any, quantity: number) => {
    trackAddToCart({
      name: "add_to_cart",
      product_id: product.id,
      product_name: product.name,
      product_brand: product.brand,
      product_category: product.category,
      product_price: product.price,
      quantity,
      total_value: product.price * quantity,
    });
  }, []);

  const trackRemoveFromCartEvent = useCallback(
    (product: any, quantity: number) => {
      trackRemoveFromCart({
        name: "remove_from_cart",
        product_id: product.id,
        product_name: product.name,
        product_brand: product.brand,
        product_category: product.category,
        product_price: product.price,
        quantity,
        total_value: product.price * quantity,
      });
    },
    []
  );

  const trackPurchaseEvent = useCallback(
    (products: any[], transactionId: string, isFirstPurchase: boolean) => {
      products.forEach((product) => {
        trackPurchase({
          name: "purchase",
          product_id: product.id,
          product_name: product.name,
          product_brand: product.brand,
          product_category: product.category,
          product_price: product.price,
          quantity: product.quantity,
          total_value: product.price * product.quantity,
          transaction_id: transactionId,
          is_first_purchase: isFirstPurchase,
        });
      });
    },
    []
  );

  return {
    trackProductDetails,
    trackAddToCartEvent,
    trackRemoveFromCartEvent,
    trackPurchaseEvent,
  };
};
