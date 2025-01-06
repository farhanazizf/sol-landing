"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FaqCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const FaqCard: FC<FaqCardProps> = ({
  icon,
  title,
  description,
  buttonText = "Selengkapnya",
  onButtonClick,
}) => {
  return (
    <Card className="flex flex-col h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 py-3 px-4">
      <CardHeader className="flex items-center justify-center pb-2">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </CardContent>

      <div className="flex h-full items-end justify-center">
        <Button
          onClick={onButtonClick}
          variant="outline"
          className="hover:bg-purple-50"
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};
