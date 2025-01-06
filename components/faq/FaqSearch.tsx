"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FaqSearchProps {
  onSearch: (query: string) => void;
}

export const FaqSearch = ({ onSearch }: FaqSearchProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative max-w-xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Cari pertanyaan..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 py-6 text-lg rounded-full shadow-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
