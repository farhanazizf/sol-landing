"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    brand: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            {formatCurrency(product.price)}
          </span>
          <Button variant="outline">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};