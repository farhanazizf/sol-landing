"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { NavigationLinks } from "./MobileMenu";
import { trackNavigation } from "@/lib/analytics";
import { CartButton } from "../shop/navigation/CartButton";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
// import { useCart } from "@/hooks/useCart";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/shop", label: "Tentang Kami" },
  { href: "/contact", label: "Hubungi Kami" },
  { href: "/login", label: "Login" },
];

export const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    // Check if user has already registered
    const userId = localStorage.getItem("shopUserId");
    if (userId) {
      setShowNav(false);
    }
  }, []);

  const handleClick = (label: string) => {
    trackNavigation(label);
    onLinkClick?.();
  };

  return (
    <div className="hidden md:flex items-center gap-8">
      {!showNav ? (
        <Link
          key={"/shop"}
          href={"/shop"}
          className="text-[#666] hover:text-[#444] transition-colors text-sm font-medium"
          onClick={() => handleClick("Shop")}
        >
          {"Shop"}
        </Link>
      ) : (
        links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#666] hover:text-[#444] transition-colors text-sm font-medium"
            onClick={() => handleClick(link.label)}
          >
            {link.label}
          </Link>
        ))
      )}

      <CartButton />
      <Button
        className="bg-[#4052B5] hover:bg-[#3445A3] text-sm font-medium px-6"
        onClick={() => handleClick("Navbar Aktifasi")}
      >
        Aktifasi
      </Button>
    </div>
  );
};
