"use client";

import { ProductCard } from "./ProductCard";
import { mockProducts } from "@/lib/mock-data";

interface ProductGridProps {
  filters: {
    category: string;
    priceRange: number[];
    brand: string;
  };
}

export const ProductGrid = ({ filters }: ProductGridProps) => {
  // Filter products based on criteria
  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory =
      filters.category === "all" ||
      product.category.toLowerCase() === filters.category;
    const matchesBrand =
      filters.brand === "all" || product.brand.toLowerCase() === filters.brand;
    const matchesPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];

    return matchesCategory && matchesBrand && matchesPrice;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
