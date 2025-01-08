import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics/Analytics";
import { Providers } from "@/components/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sukanda OneLink",
  description:
    "Platform B2B Online untuk memudahkan Anda mengakses semua informasi produk dan pemesanan produk dimanapun, kapanpun.",
  icons: {
    icon: [
      {
        url: "/images/logo/sol-logo-big.png",
      },
    ],
  },
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
        </Providers>
      </body>
    </html>
  );
}
