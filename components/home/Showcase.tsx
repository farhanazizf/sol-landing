"use client";

import Image from "next/image";
import Link from "next/link";
import { ResponsiveImage } from "../ui/responsive-image";
// import { AppStoreButtons } from "./AppStoreButtons";

export const AppStoreButtons = () => {
  return (
    <div className="flex justify-center gap-2">
      <Link
        href="#"
        className="transition-transform hover:scale-105"
        style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
      >
        <Image
          src="/images/logo/sol-playstore.png"
          alt="Get it on Google Play"
          width={150}
          height={60}
          className="h-[60px] w-auto"
        />
      </Link>
      <Link
        href="#"
        className="transition-transform hover:scale-105"
        style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
      >
        <Image
          src="/images/logo/sol-appstore.png"
          alt="Download on the App Store"
          width={150}
          height={60}
          className="h-[60px] w-auto"
        />
      </Link>
    </div>
  );
};

export const AppShowcase = () => {
  return (
    <section className="relative">
      <div className="relative py-6 lg:py-32">
        <div className="container mx-auto bg-[#0b0b57]">
          <h2 className="text-2xl lg:text-4xl text-center text-white pt-6 pb-10">
            Siap Gabung Sukanda Onelink?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column */}
            <div
              className="flex flex-col px-4 text-center lg:text-left"
              style={{
                backgroundImage: "url(/images/background/sol-bg-join-blue.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col items-center p-8">
                <p className="text-lg text-white/90 mb-8">
                  Gabung dan nikmati segala kemudahan di Sukanda Onelink.
                </p>
                <button className="bg-white text-[#000033] px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
                  Daftar Sekarang
                </button>
              </div>

              {/* Desktop Screenshot */}
              <div className="mt-12 relative flex items-end">
                <div className="relative w-full aspect-[16/9] overflow-hidden shadow-xl">
                  <Image
                    src="/images/background/sol-desktop-view.png"
                    alt="Sukanda Onelink Desktop Interface"
                    className="object-cover img-fluid"
                    fill
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="text-center px-4"
              style={{
                backgroundImage:
                  "url(/images/background/sol-bg-join-white.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-8">
                <p className="text-[16px] lg:text-lg text-[#737b7d] mb-8">
                  Akses fitur terbaik Sukanda Onelink untuk bisnis di smartphone
                  Anda. Download sekarang di Appstore & Playstore
                </p>
                <AppStoreButtons />
              </div>

              {/* Mobile Screenshots */}
              <div className="mt-12 flex justify-center gap-6">
                <Image
                  src="/images/background/sol-mobile-view.png"
                  alt="Download on the App Store"
                  width={150}
                  height={60}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
