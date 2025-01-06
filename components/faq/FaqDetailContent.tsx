"use client";

import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FaqLink {
  text: string;
  onClick: () => void;
  active?: boolean;
}

interface FaqDetailContentProps {
  links: FaqLink[];
  customContent?: ReactNode;
  className?: string;
}

export const FaqDetailContent: FC<FaqDetailContentProps> = ({ 
  links, 
  customContent,
  className 
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Navigation Links */}
      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={link.onClick}
            className={cn(
              "text-gray-600 hover:text-gray-900 hover:bg-purple-50",
              link.active && "bg-purple-50 text-purple-700 font-medium"
            )}
          >
            {link.text}
          </Button>
        ))}
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-200" />

      {/* Custom Content */}
      {customContent && (
        <div className="mt-6">
          {customContent}
        </div>
      )}
    </div>
  );
}