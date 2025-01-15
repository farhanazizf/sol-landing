"use client";

import { useEffect, useState } from "react";
import { database } from "@/lib/firebase";
import { ref, onValue } from "firebase/database";
import { OrderList } from "@/components/shop/orders/OrderList";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { trackEvent } = useAnalytics();
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("shopUserId");
    if (!userId) {
      router.push("/shop");
      return;
    }

    if (!database) {
      console.error("Database not initialized");
      return;
    }

    // Track page view
    trackEvent('orders_page_view', {
      user_id: userId
    });

    // Subscribe to orders
    const ordersRef = ref(database, `fhi/${userId}/transactions`);
    const unsubscribe = onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ordersArray = Object.entries(data).map(([id, order]) => ({
          id,
          ...order as any
        }));
        setOrders(ordersArray.sort((a, b) => 
          new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
        ));
      } else {
        setOrders([]);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router, trackEvent]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">My Orders</h1>
      <OrderList orders={orders} />
    </div>
  );
}