"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useShopAnalytics } from "@/hooks/useShopAnalytics";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    brand: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { trackButtonClick, startAddToCartTimer } = useShopAnalytics();
  const { addToCart } = useCart("test-user"); // Replace with actual user ID

  const handleAddToCart = () => {
    startAddToCartTimer();
    addToCart(product, 1);
    trackButtonClick("add_to_cart", { product_id: product.id });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link
        href={`/shop/products/${product.id}`}
        onClick={() =>
          trackButtonClick("view_product", { product_id: product.id })
        }
      >
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            {formatCurrency(product.price)}
          </span>
          <Button variant="outline" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
