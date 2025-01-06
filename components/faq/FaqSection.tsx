"use client";

import { FC, useState } from "react";
import { FaqCard } from "./FaqCard";
import { FaqDetail } from "./FaqDetail";
import { OrderHistoryDetail } from "./details/OrderHistoryDetail";
import { OperationalHours } from "./OperationalHours";
import { ClipboardList, Clock, Search } from "lucide-react";

export const FaqSection: FC = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [selectedDetailTab, setSelectedDetailTab] = useState<string>("status");

  const faqItems = [
    {
      icon: <ClipboardList className="w-8 h-8 text-purple-600" />,
      title: "Bagaimana cara daftar Sukanda OneLink?",
      description: "Untuk mendaftar di Sukanda OneLink silahkan klik tombol Daftar Sekarang di...",
      links: [
        { text: "Akses Katalog", onClick: () => console.log("Akses Katalog clicked") },
        { text: "Cara Mencari Produk", onClick: () => console.log("Cara Mencari Produk clicked") },
        { text: "Keterangan Produk Lengkap", onClick: () => console.log("Keterangan Produk clicked") },
      ],
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Jam Operasional Sukanda OneLink",
      description: "Order customer yang masuk ke Sukanda OneLink, akan kami proses pada jam berikut:",
      customContent: <OperationalHours />,
      links: [
        { text: "Menghapus Produk di Keranjang", onClick: () => console.log("Menghapus Produk clicked") },
        { text: "Menyimpan Produk Pesanan Rutin", onClick: () => console.log("Menyimpan Produk clicked") },
        { text: "Memesan Produk Rutin", onClick: () => console.log("Memesan Produk clicked") },
      ],
    },
    {
      icon: <Search className="w-8 h-8 text-purple-600" />,
      title: "Bagaimana Cara Melihat Daftar dan Status Pesanan Saya",
      description: "Anda bisa melakukan pengecekan seluruh transaksi pembelian dengan cara:",
      customContent: <OrderHistoryDetail />,
      links: [
        { 
          text: "Status Pesanan", 
          onClick: () => setSelectedDetailTab("status"),
          active: selectedDetailTab === "status"
        },
        { 
          text: "Membatalkan Pesanan", 
          onClick: () => setSelectedDetailTab("cancel"),
          active: selectedDetailTab === "cancel"
        },
        { 
          text: "Cara Pemesanan", 
          onClick: () => setSelectedDetailTab("how-to"),
          active: selectedDetailTab === "how-to"
        },
      ],
    },
  ];

  if (selectedFaq !== null) {
    const selectedItem = faqItems[selectedFaq];
    return (
      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <FaqDetail
          icon={selectedItem.icon}
          title={selectedItem.title}
          links={selectedItem.links}
          onBack={() => setSelectedFaq(null)}
          customContent={selectedItem.customContent}
        />
      </section>
    );
  }

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Yang sering ditanyakan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqItems.map((item, index) => (
          <FaqCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            onButtonClick={() => setSelectedFaq(index)}
          />
        ))}
      </div>
    </section>
  );
}