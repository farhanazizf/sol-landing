"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/shop/products/ProductGrid";
import { ProductFilters } from "@/components/shop/products/ProductFilters";
import { ProductSort } from "@/components/shop/products/ProductSort";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 1000000],
    brand: "all",
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Our Productsx</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <ProductFilters filters={filters} onFilterChange={setFilters} />
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
