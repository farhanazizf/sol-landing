"use client";

import { useEffect } from "react";
import { CartItems } from "@/components/shop/cart/CartItems";
import { CartSummary } from "@/components/shop/cart/CartSummary";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const { trackEvent } = useAnalytics();
  const { cart } = useCart();

  useEffect(() => {
    // Purchase/Action Stage Tracking
    trackEvent("cart_view", {
      cart_items: cart.length,
      cart_value: cart.reduce((total, item) => total + item.total_price, 0),
    });
  }, [cart, trackEvent]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartItems />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
