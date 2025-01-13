import { ProductGallery } from "@/components/shop/products/ProductGallery";
import { ProductInfo } from "@/components/shop/products/ProductInfo";
import { RelatedProducts } from "@/components/shop/products/RelatedProducts";

// Mock product data - in a real app, this would come from your API or database
const products = [
  { id: "1", name: "Product 1" },
  { id: "2", name: "Product 2" },
  { id: "3", name: "Product 3" },
];

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
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
