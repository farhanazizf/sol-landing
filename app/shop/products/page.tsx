"use client";

import { useState, useEffect } from "react";
import { ProductGrid } from "@/components/shop/products/ProductGrid";
import { ProductFilters } from "@/components/shop/products/ProductFilters";
import { ProductSort } from "@/components/shop/products/ProductSort";
import { useAnalytics } from "@/hooks/useAnalytics";
import { trackEngagement } from "@/lib/analytics/tracking";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 1000000],
    brand: "all",
  });

  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Consideration Stage Tracking
    trackEvent("product_listing_view", {
      filters: filters,
      page: "products",
    });
  }, [filters, trackEvent]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    trackEngagement("filter_change", {
      previous_filters: filters,
      new_filters: newFilters,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Our Products</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <ProductFilters
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Products Section */}
        <div className="flex-1">
          <div className="mb-6">
            <ProductSort />
          </div>
          <ProductGrid filters={filters} />
        </div>
      </div>
    </div>
  );
}
