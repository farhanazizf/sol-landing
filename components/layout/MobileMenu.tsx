"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// import { NavigationLinks } from "./navigation/NavigationLinks";

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Hubungi Kami" },
  { href: "/login", label: "Login" },
] as const;

interface NavigationLinksProps {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
}

export const NavigationLinks = ({
  className,
  linkClassName,
  onLinkClick,
}: NavigationLinksProps) => {
  return (
    <div className={className}>
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-[#666] hover:text-[#444] transition-colors text-sm font-medium",
            linkClassName
          )}
          onClick={onLinkClick}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          <NavigationLinks
            className="flex flex-col gap-4"
            linkClassName="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
            onLinkClick={() => setIsOpen(false)}
          />
          <Button className="bg-[#4052B5] hover:bg-[#3445A3] w-full mt-4">
            Aktifasi
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
