"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";

export const CartItems = () => {
  // Mock cart items - replace with actual cart state
  const cartItems = [
    {
      id: "1",
      name: "Product 1",
      price: 100000,
      quantity: 1,
      image: "/images/products/product-1.jpg",
    },
    // Add more mock items
  ];

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="relative w-24 h-24">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-600">{formatCurrency(item.price)}</p>
          </div>

          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={item.quantity}
              min={1}
              className="w-20"
            />
            <Button variant="destructive" size="icon">
              ×
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};