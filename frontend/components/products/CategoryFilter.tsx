'use client';

import { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  onFilterChange: (category: string | null) => void;
}

export default function CategoryFilter({ categories, onFilterChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
          activeCategory === null
            ? 'bg-gradient-to-r from-industrial-orange to-warm-amber text-white shadow-lg scale-105'
            : 'bg-white text-navy-dark border-2 border-steel-light hover:border-industrial-orange hover:text-industrial-orange'
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-industrial-orange to-warm-amber text-white shadow-lg scale-105'
              : 'bg-white text-navy-dark border-2 border-steel-light hover:border-industrial-orange hover:text-industrial-orange'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
