'use client';

import React, { useState } from 'react';
import BlogHeader from './BlogHeader';
import BlogFilterSidebar from './BlogFilterSidebar';
import BlogGridCard from './BlogGridCard';
import posts from '../data/blogPosts';
import Image from 'next/image';
const categories = [...new Set(posts.map((post) => post.category))];

const BlogContent = () => {
  const [filters, setFilters] = useState({
    search: '',
    tags: [],
    categories: [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = filters.search === '' || post.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesTags = filters.tags.length === 0 || filters.tags.some((tag) => post.tags?.includes(tag)); // si usas tags
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(post.category);
    return matchesSearch && matchesTags && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Encabezado tipo banner */}
      <div className="relative mb-8 rounded-xl overflow-hidden h-64">
        <img
          src="./Img/Ecologia.jpg"
          width={500}
          height={500}
          alt="Blog ecológico"
          className="w-full h-full object-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
          <div className="pl-15">
            <span className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg/20">
              Nuestro Blog Ecológico
            </span>
            <p className="text-white/90 font-[500] text-shadow-lg/20">
              Inspírate con guías, consejos e historias para un estilo de vida más sostenible.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb opcional */}
      <div className="flex text-sm text-gray-500 mb-6">
        <a href="#" className="hover:text-primary">
          Inicio
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Blog</span>
      </div>

      {/* Contenido general */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Barra lateral de filtros + header */}
        <aside className="lg:w-64 flex-shrink-0">
          <BlogHeader total={filteredPosts.length} />
          <BlogFilterSidebar
            categories={categories}
            onFilterChange={(selectedCategories) => setFilters((prev) => ({ ...prev, categories: selectedCategories }))}
          />
        </aside>

        {/* Cuadrícula de entradas */}
        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <BlogGridCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">No se encontraron publicaciones que coincidan.</p>
              <button
                className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-md transition-colors"
                onClick={() => setFilters({ search: '', tags: [], categories: [] })}
              >
                Borrar filtros
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BlogContent;
