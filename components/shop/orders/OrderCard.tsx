"use client";

import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { Package, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OrderCardProps {
  order: any;
  onViewDetails: () => void;
}

export function OrderCard({ order, onViewDetails }: OrderCardProps) {
  const totalItems = order.items.reduce((sum: number, item: any) => sum + item.quantity, 0);
  const totalAmount = order.totals.subtotal + order.totals.shipping + order.totals.tax;

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
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-blue-600" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-semibold">Order #{order.id.slice(-6)}</h3>
              <Badge className={getStatusColor(order.status)}>
                {order.status}
              </Badge>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              Placed on {format(new Date(order.orderDate), 'MMM d, yyyy')}
            </p>

            <div className="text-sm text-gray-600">
              <span>{totalItems} items</span>
              <span className="mx-2">•</span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="gap-2"
            onClick={onViewDetails}
          >
            View Details
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}