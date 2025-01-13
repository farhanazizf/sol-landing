"use client";

import { CartItems } from "@/components/shop/cart/CartItems";
import { CartSummary } from "@/components/shop/cart/CartSummary";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <CartItems />
        </div>

        {/* Cart Summary */}
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}