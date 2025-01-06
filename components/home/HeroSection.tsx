"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/ui/responsive-image";
export const HeroSection = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-br from-white to-gray-50"
      style={{
        backgroundImage: "url(/images/background/sol-background-home.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="relative w-[570px] max-w-full h-[140px] mx-auto lg:mx-0">
              <ResponsiveImage
                src="/images/logo/sol-delivering-joy.png"
                alt="Sukanda Delivering Joy"
                priority
              />
            </div>
            <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
              Nikmati berbagai kemudahan untuk kebutuhan bisnis Anda dimanapun
              kapanpun dengan Sukanda Onelink.
            </p>
            <div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Aktifasi
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="aspect-square relative max-w-[554px] mx-auto">
              {/* Background Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <ResponsiveImage
                  src="/images/background/sol-hero-image.png"
                  alt="Sukanda hero image"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
