"use client";

import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="block">
      <div className="relative w-[150px] h-[40px]">
        <Image
          src="https://placehold.co/150x40/FF0000/FFFFFF?text=Sukanda"
          alt="Sukanda Onelink"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};