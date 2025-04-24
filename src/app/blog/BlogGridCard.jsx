'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const BlogGridCard = ({ post }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${post.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-600">{post.summary}</p>
      </div>
    </div>
  );
};

export default BlogGridCard;
