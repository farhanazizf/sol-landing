"use client";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import { useProductAnalytics } from "@/hooks/useProductAnalytics";
import { ShoppingBag, CreditCard, ArrowRight } from "lucide-react";
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
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <ShoppingBag className="h-5 w-5" />
        <h2>Order Summary</h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">
            {formatCurrency(summary.subtotal)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {formatCurrency(summary.shipping)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (11%)</span>
          <span className="font-medium">{formatCurrency(summary.tax)}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      <Link href="/shop/checkout">
        <Button className="w-full gap-2" size="lg" disabled={cart.length === 0}>
          <CreditCard className="h-5 w-5" />
          Proceed to Checkout
          <ArrowRight className="h-5 w-5" />
        </Button>
      </Link>

      {cart.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-700">
            Free shipping for orders above {formatCurrency(1000000)}
          </p>
        </div>
      )}
    </div>
  );
};
