'use client';

import { useState } from 'react';

interface BlogCategoryFilterProps {
  categories: { name: string; count: number }[];
  onFilterChange: (category: string | null) => void;
}

export default function BlogCategoryFilter({ categories, onFilterChange }: BlogCategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  const totalCount = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
          activeCategory === null
            ? 'bg-gradient-to-r from-electric-blue to-industrial-orange text-white shadow-lg scale-105'
            : 'bg-white text-navy-dark border-2 border-steel-light hover:border-electric-blue hover:text-electric-blue'
        }`}
      >
        All Categories
        <span className="text-xs opacity-75">({totalCount})</span>
      </button>
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => handleCategoryClick(category.name)}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
            activeCategory === category.name
              ? 'bg-gradient-to-r from-electric-blue to-industrial-orange text-white shadow-lg scale-105'
              : 'bg-white text-navy-dark border-2 border-steel-light hover:border-electric-blue hover:text-electric-blue'
          }`}
        >
          {category.name}
          <span className="text-xs opacity-75">({category.count})</span>
        </button>
      ))}
    </div>
  );
}
