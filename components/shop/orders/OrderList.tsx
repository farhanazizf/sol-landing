"use client";

import { useState } from "react";
import { OrderCard } from "./OrderCard";
import { OrderDetails } from "./OrderDetails";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface OrderListProps {
  orders: any[];
}

export function OrderList({ orders }: OrderListProps) {
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  if (orders.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
        <p className="text-gray-600 mb-6">
          When you place orders, they will appear here.
        </p>
        <a
          href="/shop/products"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Start Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onViewDetails={() => setSelectedOrder(order)}
        />
      ))}

      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-3xl">
          {selectedOrder && <OrderDetails order={selectedOrder} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}