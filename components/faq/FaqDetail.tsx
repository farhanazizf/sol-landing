"use client";

import { FC, ReactNode } from "react";
import { FaqDetailHeader } from "./FaqDetailHeader";
import { FaqDetailContent } from "./FaqDetailContent";

interface FaqDetailProps {
  icon: ReactNode;
  title: string;
  links: { text: string; onClick: () => void; active?: boolean; }[];
  onBack: () => void;
  customContent?: ReactNode;
}

export const FaqDetail: FC<FaqDetailProps> = ({ 
  icon, 
  title, 
  links, 
  onBack,
  customContent 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <FaqDetailHeader icon={icon} title={title} onBack={onBack} />
      <FaqDetailContent 
        links={links} 
        customContent={customContent}
        className="mt-8" 
      />
    </div>
  );
}