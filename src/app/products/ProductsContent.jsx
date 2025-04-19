"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";
import ProductsHeader from "./ProductsHeader";
import { categories, products } from "../data/productData.js";

const ProductsContent = () => {
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    priceRange: [0, 100],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const filteredProducts = products
    .filter((product) => {
      if (
        activeFilters.categories.length > 0 &&
        !activeFilters.categories.includes(product.category)
      ) {
        return false;
      }

      if (product.price > activeFilters.priceRange[1]) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "newest":
          return b.isNew ? 1 : -1;
        default:
          return b.reviewCount - a.reviewCount;
      }
    });

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="relative mb-8 rounded-xl overflow-hidden h-64">
        <img
          src="./Img/banner-eco.jpg"
          alt="Productos ecológicos"
          className="w-full h-full object-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
          <div className="ml-10 max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg/20">
              Productos Ecológicos
            </h1>
            <p className="text-white/90 mb-6 font-[500] text-shadow-lg/20">
              Cuida el planeta con nuestra selección de productos sostenibles y
              respetuosos con el medio ambiente.
            </p>
            <button className="cursor-pointer bg-white text-primary hover:bg-gray-100 font-bold py-2 px-6 rounded-md transition-colors">
              Ver ofertas
            </button>
          </div>
        </div>
      </div>

      <div className="flex text-sm text-gray-500 mb-6">
        <a href="#" className="hover:text-primary">
          Inicio
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Productos Ecológicos</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Barra lateral de filtros */}
        <aside className="lg:w-64 flex-shrink-0">
          <FilterSidebar
            categories={categories}
            onFilterChange={handleFilterChange}
          />
        </aside>

        <main className="flex-1">
          <ProductsHeader
            total={filteredProducts.length}
            onSortChange={handleSortChange}
          />

          {/* Cuadrícula de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">
                No se encontraron productos que coincidan con tu búsqueda.
              </p>
              <button
                className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-md transition-colors"
                onClick={() =>
                  setActiveFilters({ categories: [], priceRange: [0, 100] })
                }
              >
                Borrar filtros
              </button>
            </div>
          )}

          {/* Paginación */}
          {filteredProducts.length > 0 && (
            <div className="mt-10 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                  &lt; Anterior
                </button>
                <button className="px-4 py-2 border border-primary bg-primary text-white rounded-md">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                  Siguiente &gt;
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsContent;
