import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import { ProductDetails } from "@/components/shop/products/ProductDetails";
import { ProductClientWrapper } from "@/components/shop/products/ProductClientWrapper";

export function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Product Not Found
          </h1>
          <p className="mt-2 text-gray-600">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={null}>
      <ProductClientWrapper product={product}>
        <ProductDetails product={product} />
      </ProductClientWrapper>
    </Suspense>
  );
}
