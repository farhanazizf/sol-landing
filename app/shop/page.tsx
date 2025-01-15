"use client";

import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/shop/products/ProductGrid";
import { RegistrationPopup } from "@/components/shop/registration/RegistrationPopup";
import Link from "next/link";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ShopClientWrapper } from "@/components/shop/ShopClientWrapper";

export default function ShopPage() {
  const { trackEvent } = useAnalytics();
  const [showRegistration, setShowRegistration] = useState(true);

  useEffect(() => {
    // Interest Stage Tracking
    trackEvent("shop_landing_view", {
      section: "shop_home",
      has_registered: !showRegistration,
    });
  }, [showRegistration, trackEvent]);

  useEffect(() => {
    // Check if user has already registered
    const userId = localStorage.getItem("shopUserId");
    if (userId) {
      setShowRegistration(false);
    }
  }, []);

  const handleRegistrationComplete = () => {
    setShowRegistration(false);
  };

  if (showRegistration) {
    return <RegistrationPopup onComplete={handleRegistrationComplete} />;
  }

  // <Suspense fallback={null}>
  //     <ShopClientWrapper>
  //       <div className="container mx-auto px-4 py-8">
  //         {/* Rest of the shop page content */}
  //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  //           {/* ... existing content ... */}
  //         </div>
  //       </div>
  //     </ShopClientWrapper>
  //   </Suspense>

  return (
    <Suspense fallback={null}>
      <ShopClientWrapper>
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div
            className="relative h-[400px] rounded-2xl mb-12 overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/images/background/sol-background-home.png)",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-6">
              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                onDoubleClick={() => setShowRegistration(true)}
              >
                Discover Our Products
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                Find high-quality products from trusted brands for your business
                needs
              </p>
              <Link href="/shop/products">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100"
                >
                  Browse All Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Dairy", "Beverages", "Snacks", "Frozen Foods"].map(
                (category) => (
                  <Link
                    key={category}
                    href={`/shop/products?category=${category.toLowerCase()}`}
                    className="group relative h-40 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">
                        {category}
                      </span>
                    </div>
                  </Link>
                )
              )}
            </div>
          </section>

          {/* Featured Products */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <Link href="/shop/products">
                <Button variant="outline">View All</Button>
              </Link>
            </div>
            <ProductGrid
              filters={{
                category: "all",
                priceRange: [0, 1000000],
                brand: "all",
              }}
            />
          </section>
        </div>
      </ShopClientWrapper>
    </Suspense>
  );
}
