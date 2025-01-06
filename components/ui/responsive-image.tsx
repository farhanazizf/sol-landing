"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export const ResponsiveImage = ({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
}: ResponsiveImageProps) => {
  return (
    <div className={cn("relative w-full h-full", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-contain", className)}
      />
    </div>
  );
};
