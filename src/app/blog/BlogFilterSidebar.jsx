"use client";

import React, { useState } from "react";

const BlogFilterSidebar = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
  };

  const applyFilters = () => {
    onFilterChange(selectedCategories);
  };

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-primary mb-4">Filtrar por categoría</h3>

      <div className="space-y-3 mb-6">
        {categories.map((category, index) => (
          <div className="flex items-center" key={index}>
            <input
              type="checkbox"
              id={`blog-category-${index}`}
              className="mr-2"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={`blog-category-${index}`} className="text-gray-700">
              {category}
            </label>
          </div>
        ))}
      </div>

      <button
        className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 rounded-md transition-colors"
        onClick={applyFilters}
      >
        Aplicar filtros
      </button>
    </div>
  );
};

export default BlogFilterSidebar;
