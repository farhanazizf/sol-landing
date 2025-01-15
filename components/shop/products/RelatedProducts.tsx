"use client";

import { ProductCard } from "./ProductCard";
import { mockProducts } from "@/lib/mock-data";

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

export const RelatedProducts = ({
  currentProductId,
  category,
}: RelatedProductsProps) => {
  // Filter related products from the same category, excluding current product
  const relatedProducts = mockProducts
    .filter(
      (product) =>
        product.category === category && product.id !== currentProductId
    )
    .slice(0, 4); // Limit to 4 related products

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
