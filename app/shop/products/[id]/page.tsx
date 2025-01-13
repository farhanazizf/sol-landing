"use client";

import { ProductGallery } from "@/components/shop/products/ProductGallery";
import { ProductInfo } from "@/components/shop/products/ProductInfo";
import { RelatedProducts } from "@/components/shop/products/RelatedProducts";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <ProductGallery />

        {/* Product Information */}
        <ProductInfo productId={params.id} />
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <RelatedProducts />
      </div>
    </div>
  );
}