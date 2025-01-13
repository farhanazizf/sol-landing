"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";

interface ProductInfoProps {
  productId: string;
}

export const ProductInfo = ({ productId }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  // Mock product data - replace with actual product data
  const product = {
    name: "Product Name",
    price: 100000,
    description: "Product description goes here...",
    sku: "SKU123",
    stock: 50,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-bold text-blue-600">
          {formatCurrency(product.price)}
        </p>
      </div>

      <div className="prose prose-sm">
        <p>{product.description}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-32">
            <Input
              type="number"
              min={1}
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <Button size="lg">Add to Cart</Button>
        </div>

        <p className="text-sm text-gray-600">
          {product.stock} items in stock
        </p>
      </div>

      <div className="border-t pt-6">
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="font-medium text-gray-900">SKU</dt>
            <dd className="text-gray-600">{product.sku}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};