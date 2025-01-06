"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-12 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">
            delivering <span className="text-red-500">joy</span>
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-700">
            Anytime, Anywhere
          </h2>
          <p className="text-gray-600 text-lg">
            Nikmati berbagai kemudahan untuk kebutuhan bisnis Anda dimanapun kapanpun dengan Sukanda Onelink.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
            Aktifasi
          </Button>
        </div>
        
        <div className="flex-1 relative">
          <div className="aspect-square relative rounded-full overflow-hidden">
            <Image
              src="/images/hero-image.jpg"
              alt="Sukanda Onelink Service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}