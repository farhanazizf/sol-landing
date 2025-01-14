"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import { Trash2 } from "lucide-react";

export const CartItems = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cart.map((item, index) => (
        <div
          key={`${item.item_name}-${item.brand}-${index}`}
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="flex-1">
            <h3 className="font-semibold">{item.item_name}</h3>
            <p className="text-sm text-gray-600">{item.brand}</p>
            <p className="text-gray-600">{formatCurrency(item.price)}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={item.quantity}
                min={1}
                className="w-20"
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value > 0) {
                    updateQuantity(item.item_name, item.brand, value);
                  }
                }}
              />
              <p className="text-sm text-gray-600 min-w-[100px]">
                {formatCurrency(item.total_price)}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-red-500 hover:text-red-700"
              onClick={() => removeFromCart(item.item_name, item.brand)}
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
