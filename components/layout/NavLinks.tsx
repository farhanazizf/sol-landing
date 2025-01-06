"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationLinks } from "./MobileMenu";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Hubungi Kami" },
  { href: "/login", label: "Login" },
];

export const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[#666] hover:text-[#444] transition-colors text-sm font-medium"
        >
          {link.label}
        </Link>
      ))}
      <NavigationLinks className="flex items-center gap-8" />
      <Button className="bg-[#4052B5] hover:bg-[#3445A3] text-sm font-medium px-6">
        Aktifasi
      </Button>
    </div>
  );
};
