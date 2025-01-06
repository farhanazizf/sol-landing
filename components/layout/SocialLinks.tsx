"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { id: "facebook", href: "#", icon: Facebook, color: "#1877F2" },
  { id: "instagram", href: "#", icon: Instagram, color: "#E4405F" },
  { id: "youtube", href: "#", icon: Youtube, color: "#FF0000" },
  { id: "twitter", href: "#", icon: Twitter, color: "#1DA1F2" },
  { id: "linkedin", href: "#", icon: Linkedin, color: "#0A66C2" },
];

export const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Ikuti Kami</h3>
      <div className="flex gap-4">
        {socialLinks.map(({ id, href, icon: Icon, color }) => (
          <Link
            key={id}
            href={href}
            className="text-gray-400 hover:text-[var(--color)] transition-colors"
            style={{ "--color": color } as any}
          >
            <Icon className="w-7 h-7" />
          </Link>
        ))}
      </div>
    </div>
  );
};