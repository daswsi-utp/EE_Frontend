import React from "react";

const BlogHeader = () => {
  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8 shadow-md">
      <img
        src="./Img/logo.png" 
        alt="Imagen de blog"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Bienvenido al Blog
        </h1>
        <p className="mt-2 text-lg text-white font-medium drop-shadow">
          Aquí encontrarás novedades, presentaciones de productos, noticias y logros de nuestra empresa ecológica.
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;