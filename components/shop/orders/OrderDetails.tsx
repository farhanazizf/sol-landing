"use client";

import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { Package, Truck, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface OrderDetailsProps {
  order: any;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">
            Order #{order.id.slice(-6)}
          </h2>
          <p className="text-sm text-gray-600">
            Placed on {format(new Date(order.orderDate), 'MMMM d, yyyy')}
          </p>
        </div>
        <Badge className={getStatusColor(order.status)}>
          {order.status}
        </Badge>
      </div>

      {/* Order Items */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Package className="w-5 h-5" />
          Order Items
        </h3>
        <div className="space-y-4">
          {order.items.map((item: any, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{item.item_name}</p>
                <p className="text-sm text-gray-600">{item.brand}</p>
              </div>
              <div className="text-right">
                <p>{formatCurrency(item.price)} × {item.quantity}</p>
                <p className="font-medium">{formatCurrency(item.total_price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Truck className="w-5 h-5" />
          Shipping Information
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium">
              {order.shipping.firstName} {order.shipping.lastName}
            </p>
            <p className="text-gray-600">{order.shipping.address}</p>
            <p className="text-gray-600">
              {order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}
            </p>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payment Information
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Payment Method</p>
              <p>Credit Card ending in {order.payment.cardLast4}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Expiry Date</p>
              <p>{order.payment.expiryDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border-t pt-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>{formatCurrency(order.totals.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span>{formatCurrency(order.totals.shipping)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax</span>
            <span>{formatCurrency(order.totals.tax)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>
              {formatCurrency(
                order.totals.subtotal + 
                order.totals.shipping + 
                order.totals.tax
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}