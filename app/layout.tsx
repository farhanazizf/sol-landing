import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics/Analytics";
import { Providers } from "@/components/providers/Providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sukanda OneLink",
  description:
    "Platform B2B Online untuk memudahkan Anda mengakses semua informasi produk dan pemesanan produk dimanapun, kapanpun.",
  icons: [
    {
      url: "/images/favicon/sol-icon-36x36.png",
      sizes: "36x36",
      type: "image/png",
    },
    {
      url: "/images/favicon/sol-icon-48x48.png",
      sizes: "48x48",
      type: "image/png",
    },
    {
      url: "/images/favicon/sol-icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
    },
    {
      url: "/images/favicon/sol-icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      url: "/images/favicon/sol-icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
    },
    {
      url: "/images/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      url: "/images/favicon/sol-icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/images/favicon/sol-icon-256x256.png",
      sizes: "256x256",
      type: "image/png",
    },
    {
      url: "/images/favicon/sol-icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <Analytics />
          <Toaster position="bottom-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
