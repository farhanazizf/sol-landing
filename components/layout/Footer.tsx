"use client";

import { Logo } from "./Logo";
import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-500">
              Platform B2B Online untuk memudahkan Anda mengakses semua informasi produk dan pemesanan produk dimanapun, kapanpun.
            </p>
          </div>
          <FooterLinks />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};