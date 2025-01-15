"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { trackProductView } from "@/lib/analytics/tracking";

interface ProductClientWrapperProps {
  children: React.ReactNode;
  product: any;
}

export function ProductClientWrapper({
  children,
  product,
}: ProductClientWrapperProps) {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    trackProductView({
      name: "product_view",
      product_id: product.id,
      product_name: product.name,
      product_brand: product.brand,
      product_category: product.category,
      product_price: product.price,
    });

    trackEvent("product_page_view", {
      product_id: product.id,
      timestamp: new Date().toISOString(),
    });
  }, [product, trackEvent]);

  return <>{children}</>;
}
