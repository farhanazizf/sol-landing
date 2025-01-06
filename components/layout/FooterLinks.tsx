"use client";

import Link from "next/link";

interface FooterSection {
  title: string;
  links: Array<{
    href: string;
    label: string;
  }>;
}

const footerSections: FooterSection[] = [
  {
    title: "Informasi",
    links: [
      { href: "/about", label: "Tentang Sukanda Djaya" },
      { href: "/terms", label: "Syarat & Ketentuan" },
      { href: "/privacy", label: "Kebijakan Privasi" },
      { href: "/training", label: "Daftar Training" },
      { href: "/contact", label: "Hubungi Kami" },
    ],
  },
  {
    title: "Akses Cepat",
    links: [
      { href: "/login", label: "Login" },
      { href: "/register", label: "Aktifasi" },
    ],
  },
];

export const FooterLinks = () => {
  return (
    <>
      {footerSections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};