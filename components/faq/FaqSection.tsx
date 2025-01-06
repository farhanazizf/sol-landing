"use client";

import { FC, useState, useMemo } from "react";
import { Book, Clock, Search } from "lucide-react";
import { FaqCard } from "./FaqCard";
import { FaqDetail } from "./FaqDetail";
import { FaqSearch } from "./FaqSearch";
import { faqItems } from "./faq-data";
import { OrderHistoryDetail } from "./details/OrderHistoryDetail";
import { OperationalHours } from "./OperationalHours";

const iconMap = {
  book: <Book className="w-8 h-8 text-purple-600" />,
  clock: <Clock className="w-8 h-8 text-purple-600" />,
  search: <Search className="w-8 h-8 text-purple-600" />,
};

export const FaqSection: FC = () => {
  const [selectedFaq, setSelectedFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDetailTab, setSelectedDetailTab] = useState<string>("status");

  const filteredFaqs = useMemo(() => {
    if (!searchQuery) return faqItems;

    const query = searchQuery.toLowerCase();
    return faqItems.filter(
      (faq) =>
        faq.title.toLowerCase().includes(query) ||
        faq.description.toLowerCase().includes(query) ||
        faq.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const selectedItem = selectedFaq
    ? faqItems.find((item) => item.id === selectedFaq)
    : null;

  if (selectedItem) {
    return (
      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <FaqDetail
          icon={iconMap[selectedItem.icon]}
          title={selectedItem.title}
          links={selectedItem.links}
          onBack={() => setSelectedFaq(null)}
          customContent={selectedItem.customContent}
        />
      </section>
    );
  }

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Yang sering ditanyakan
      </h2>

      <FaqSearch onSearch={setSearchQuery} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaqs.map((item) => (
          <FaqCard
            key={item.id}
            icon={iconMap[item.icon]}
            title={item.title}
            description={item.description}
            onButtonClick={() => setSelectedFaq(item.id)}
          />
        ))}
      </div>

      {filteredFaqs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Tidak ada hasil yang ditemukan untuk &quot;{searchQuery}&quot;
          </p>
        </div>
      )}
    </section>
  );
};
