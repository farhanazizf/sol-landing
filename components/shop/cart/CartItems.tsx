"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import { useProductAnalytics } from "@/hooks/useProductAnalytics";
import { Trash2, Minus, Plus } from "lucide-react";
import { toast } from "sonner";

export const CartItems = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const { trackRemoveFromCartEvent } = useProductAnalytics();

  const handleQuantityChange = (item: any, newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= 99) {
      updateQuantity(item.item_name, item.brand, newQuantity);
    }
  };

  const handleRemoveItem = (item: any) => {
    removeFromCart(item.item_name, item.brand);
    trackRemoveFromCartEvent(item, item.quantity);
    toast.success(`${item.item_name} removed from cart`);
  };

  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="max-w-md mx-auto">
          <Image
            src="https://placehold.co/400x300/png?text=Empty+Cart"
            alt="Empty cart"
            width={400}
            height={300}
            className="mx-auto mb-6"
          />
          <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6">
            Looks like you haven&apos;t added any items to your cart yet.
          </p>
          <Button asChild className="w-full md:w-auto">
            <a href="/shop/products">Continue Shopping</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cart.map((item, index) => (
        <div
          key={`${item.item_name}-${item.brand}-${index}`}
          className="flex flex-col md:flex-row items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
        >
          {/* Product Image */}
          <div className="relative w-full md:w-32 h-32 rounded-md overflow-hidden bg-gray-100">
            <Image
              src={"https://placehold.co/200x200/png?text=Product"}
              alt={item.item_name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="font-semibold text-lg truncate">
                  {item.item_name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                <p className="font-medium text-blue-600">
                  {formatCurrency(item.price)}
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
                {/* Quantity Controls */}
                <div className="flex items-center border rounded-lg bg-gray-50">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      handleQuantityChange(item, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    min={1}
                    max={99}
                    className="w-16 text-center border-0 bg-transparent"
                    onChange={(e) =>
                      handleQuantityChange(item, parseInt(e.target.value))
                    }
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      handleQuantityChange(item, item.quantity + 1)
                    }
                    disabled={item.quantity >= 99}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {/* Total Price & Remove Button */}
                <div className="flex items-center gap-4">
                  <p className="text-sm font-medium min-w-[100px] text-right">
                    {formatCurrency(item.total_price)}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleRemoveItem(item)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
