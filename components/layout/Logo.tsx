"use client";

import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="block">
      <div className="relative w-[232px] h-[49px]">
        <Image
          src="/images/logo/sol-logo-navbar.png"
          alt="Sukanda Onelink"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};
