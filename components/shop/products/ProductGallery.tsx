"use client";

import Image from "next/image";
import { useState } from "react";

export const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Mock images - replace with actual product images
  const images = [
    "/images/products/product-1.jpg",
    "/images/products/product-2.jpg",
    "/images/products/product-3.jpg",
  ];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Product"
          fill
          className="object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden ${
              selectedImage === index ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};