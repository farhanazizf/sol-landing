"use client";

import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  filters: {
    category: string;
    priceRange: number[];
    brand: string;
  };
}

export const ProductGrid = ({ filters }: ProductGridProps) => {
  // Mock products data - replace with actual API call
  const products = [
    {
      id: "1",
      name: "Product 1",
      price: 100000,
      image: "/images/products/product-1.jpg",
      brand: "Brand 1",
    },
    // Add more mock products
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};