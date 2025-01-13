"use client";

import { formatCurrency } from "@/lib/utils";

export const OrderSummary = () => {
  // Mock order data - replace with actual order state
  const order = {
    items: [
      {
        id: "1",
        name: "Product 1",
        price: 100000,
        quantity: 1,
      },
    ],
    subtotal: 100000,
    shipping: 15000,
    tax: 11000,
    total: 126000,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <h2 className="text-xl font-semibold">Order Summary</h2>

      {/* Order Items */}
      <div className="space-y-4">
        {order.items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <span>{formatCurrency(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>

      {/* Order Totals */}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>{formatCurrency(order.subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{formatCurrency(order.shipping)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span>{formatCurrency(order.tax)}</span>
        </div>
        <div className="flex justify-between font-bold pt-2 border-t">
          <span>Total</span>
          <span>{formatCurrency(order.total)}</span>
        </div>
      </div>
    </div>
  );
};