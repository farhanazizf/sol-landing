"use client";

import Image from "next/image";
import { Book, Target, FileText, Clock } from "lucide-react";

const features = [
  {
    icon: <Book className="w-8 h-8 text-blue-600" />,
    title: "Katalog Online",
    description: "Temukan seluruh produk kami dengan lebih mudah.",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Cek Status Pesanan",
    description: "Dapatkan informasi status pesanan langsung di platform kami.",
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    title: "Invoice Digital",
    description: "Download invoice langsung dari Sukanda Onelink.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Histori Pesanan",
    description: "Akses dan pesan ulang dari histori pemesanan Anda.",
  },
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="text-center space-y-4">
    <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative w-[120px] h-[100px] mx-auto mb-6">
            <Image
              src="/images/logo/sol-logo-big.png"
              alt="Sukanda Onelink"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Platform B2B Online untuk memudahkan Anda mengakses semua informasi
            produk dan pemesanan produk dimanapun, kapanpun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
