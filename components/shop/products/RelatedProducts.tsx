"use client";

import { ProductCard } from "./ProductCard";

export const RelatedProducts = () => {
  // Mock related products - replace with actual related products
  const relatedProducts = [
    {
      id: "2",
      name: "Related Product 1",
      price: 150000,
      image: "/images/products/product-2.jpg",
      brand: "Brand 2",
    },
    {
      id: "3",
      name: "Related Product 2",
      price: 200000,
      image: "/images/products/product-3.jpg",
      brand: "Brand 3",
    },
  ];

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