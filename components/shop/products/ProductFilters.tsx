"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { formatCurrency } from "@/lib/utils";

interface ProductFiltersProps {
  filters: {
    category: string;
    priceRange: number[];
    brand: string;
  };
  onFilterChange: (filters: any) => void;
}

export const ProductFilters = ({ filters, onFilterChange }: ProductFiltersProps) => {
  const categories = ["All", "Dairy", "Beverages", "Snacks", "Frozen Foods"];
  const brands = ["All", "Brand 1", "Brand 2", "Brand 3"];

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                value={category.toLowerCase()}
                checked={filters.category === category.toLowerCase()}
                onChange={(e) =>
                  onFilterChange({ ...filters, category: e.target.value })
                }
                className="rounded border-gray-300"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={filters.priceRange}
            max={1000000}
            step={10000}
            onValueChange={(value) =>
              onFilterChange({ ...filters, priceRange: value })
            }
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatCurrency(filters.priceRange[0])}</span>
            <span>{formatCurrency(filters.priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold mb-4">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <input
                type="radio"
                name="brand"
                value={brand.toLowerCase()}
                checked={filters.brand === brand.toLowerCase()}
                onChange={(e) =>
                  onFilterChange({ ...filters, brand: e.target.value })
                }
                className="rounded border-gray-300"
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};