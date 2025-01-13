"use client";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

export const CartSummary = () => {
  // Mock cart data - replace with actual cart state
  const summary = {
    subtotal: 100000,
    shipping: 15000,
    tax: 11000,
    total: 126000,
  };

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
          <span className="text-gray-600">Tax</span>
          <span>{formatCurrency(summary.tax)}</span>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{formatCurrency(summary.total)}</span>
        </div>
      </div>

      <Link href="/checkout">
        <Button className="w-full">Proceed to Checkout</Button>
      </Link>
    </div>
  );
};