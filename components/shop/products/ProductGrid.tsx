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
    {
      id: "2",
      name: "Product 2",
      price: 200000,
      image: "/images/products/product-2.jpg",
      brand: "Brand 2",
    },
    {
      id: "3",
      name: "Product 3",
      price: 300000,
      image: "/images/products/product-3.jpg",
      brand: "Brand 3",
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
