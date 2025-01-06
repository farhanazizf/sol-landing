"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Siap Gabung Sukanda Onelink?</h2>
            <p className="text-lg text-gray-300">
              Gabung dan nikmati segala kemudahan di Sukanda Onelink.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy-900">
              Daftar Sekarang
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/images/app-screenshot-1.png"
                alt="Sukanda Onelink App"
                width={300}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <Image
                src="/images/app-screenshot-2.png"
                alt="Sukanda Onelink App"
                width={300}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}