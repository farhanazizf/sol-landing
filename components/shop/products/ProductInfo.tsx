"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import {
  Minus,
  Plus,
  ShoppingCart,
  Package,
  Truck,
  Shield,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  sku: string;
  stock: number;
  category: string;
}

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      brand: product.brand,
      price: product.price,
    });
    setQuantity(1);
  };

  const stockStatus =
    product.stock > 0
      ? product.stock > 10
        ? "In Stock"
        : `Only ${product.stock} left`
      : "Out of Stock";

  const stockStatusColor =
    product.stock > 0
      ? product.stock > 10
        ? "bg-green-100 text-green-800"
        : "bg-yellow-100 text-yellow-800"
      : "bg-red-100 text-red-800";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-4 mb-4">
          <p className="text-gray-600">{product.brand}</p>
          <Badge variant="secondary">SKU: {product.sku}</Badge>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-3xl font-bold text-blue-600">
            {formatCurrency(product.price)}
          </p>
          <Badge className={stockStatusColor}>{stockStatus}</Badge>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-sm max-w-none">
        <p className="text-gray-600">{product.description}</p>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-lg">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              min={1}
              max={product.stock}
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              className="w-20 text-center border-0"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= product.stock}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={handleAddToCart}
            className="flex-1"
            disabled={product.stock === 0}
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
        <div className="flex items-center gap-3">
          <Package className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium">Free Packaging</p>
            <p className="text-sm text-gray-600">Secure packaging</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Truck className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium">Fast Delivery</p>
            <p className="text-sm text-gray-600">2-3 business days</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium">Quality Guarantee</p>
            <p className="text-sm text-gray-600">100% original product</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="border-t pt-6">
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="font-medium text-gray-900">Category</dt>
            <dd className="text-gray-600">{product.category}</dd>
          </div>
          <div>
            <dt className="font-medium text-gray-900">Brand</dt>
            <dd className="text-gray-600">{product.brand}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
