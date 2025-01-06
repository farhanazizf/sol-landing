"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface FaqDetailHeaderProps {
  icon: React.ReactNode;
  title: string;
  onBack: () => void;
}

export const FaqDetailHeader: FC<FaqDetailHeaderProps> = ({ icon, title, onBack }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="hover:bg-purple-50"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100">
          {icon}
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
  );
}