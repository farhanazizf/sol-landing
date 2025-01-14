"use client";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

export const CartSummary = () => {
  const { cart } = useCart();

  const summary = {
    subtotal: cart.reduce((total, item) => total + item.total_price, 0),
    shipping: cart.length > 0 ? 15000 : 0,
    tax: cart.reduce((total, item) => total + item.total_price * 0.11, 0),
  };

  const total = summary.subtotal + summary.shipping + summary.tax;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">Order Summary</h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>{formatCurrency(summary.subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{formatCurrency(summary.shipping)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (11%)</span>
          <span>{formatCurrency(summary.tax)}</span>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <Link href="/shop/checkout">
        <Button className="w-full" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </Link>
    </div>
  );
};
