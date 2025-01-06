"use client";

import Image from "next/image";

interface BrandLogoProps {
  src: string;
  alt: string;
}

export const BrandLogo = ({ src, alt }: BrandLogoProps) => {
  return (
    <div className="flex-shrink-0 w-[200px] h-[80px] mx-4">
      <div className="relative w-full h-full">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
};

const brands = [
  { src: "/images/brand/sol-brand-elle.png", alt: "Elle & Wire" },
  { src: "/images/brand/sol-brand-goldenfarm.png", alt: "Golden Farm" },
  { src: "/images/brand/sol-brand-tatura.png", alt: "Tatura" },
  { src: "/images/brand/sol-brand-airborne.png", alt: "Airborne" },
  // { src: "/images/brand/shine-road.png", alt: "Shine Road" },
  // { src: "/images/brand/galbani.png", alt: "Galbani" },
  // { src: "/images/brand/lotus.png", alt: "Lotus" },
];

export const BrandSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10">
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {brands.map((brand, index) => (
            <BrandLogo key={`first-${index}`} {...brand} />
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <BrandLogo key={`second-${index}`} {...brand} />
          ))}
        </div>
      </div>
    </div>
  );
};
