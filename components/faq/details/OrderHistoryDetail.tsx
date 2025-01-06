"use client";

import { FC } from "react";
import Image from "next/image";

export const OrderHistoryDetail: FC = () => {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        Anda bisa melakukan pengecekan seluruh transaksi pembelian dengan cara:
      </p>
      
      <div className="space-y-4">
        <p className="text-gray-700">
          Klik <span className="font-medium">My History</span> untuk melihat semua transaksi yang dilakukan di Sukanda OneLink
        </p>
        
        <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-gray-200">
          <Image
            src="/images/order-history-menu.png"
            alt="Order History Menu"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}