'use client';

import { useState } from 'react';
import { products } from '@/app/data/productData';
import { FaArrowLeftLong } from 'react-icons/fa6';

import { Star, ShoppingCart, Heart, Share2, ArrowLeft, ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const ViewproductContent = ({ id }) => {
  const productfind = products.find((p) => p.id == id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!productfind) return <div className="p-4">Producto no encontrado</div>;

  // Para simplificar, usamos un placeholder para la imagen
  const productImage = '/api/placeholder/400/400';

  // Función para renderizar las estrellas según la calificación
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="w-5 h-5 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
      }
    }

    return stars;
  };

  // Calcular el precio con descuento
  const discountAmount = productfind.priceBeforeDiscount - productfind.price;
  const discountPercentage = Math.round((discountAmount / productfind.priceBeforeDiscount) * 100);

  return (
    <div className="bg-tertiary">
      {/* Migas de pan */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex text-sm text-gray-500 items-center">
          <Link href="/" className="border bg-primary text-white py-1 px-3 rounded-lg mr-3">
            <FaArrowLeftLong />
          </Link>
          <p className="hover:text-teal-600">{productfind.category}</p>
          <span className="mx-2">/</span>
          <span className="text-teal-600">{productfind.name}</span>
        </div>
      </div>

      {/* Sección principal del producto */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna izquierda - Imágenes */}
          <div className="lg:w-1/2 ">
            <div className="bg-white rounded-lg shadow-sm mb-4 relative">
              {productfind.isNew && (
                <span className="absolute w-[60px] text-center top-4 left-4 bg-teal-600 text-white px-2 py-1 text-xs font-bold rounded-md z-10">
                  NUEVO
                </span>
              )}
              {productfind.discount && (
                <span className="absolute top-4 right-4 w-[50px] text-center bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md z-10">
                  -{productfind.discount}
                </span>
              )}
              <img src={`.${productfind.image}`} alt={productfind.name} className="w-full rounded-lg" />
            </div>
          </div>

          {/* Columna derecha - Información */}
          <div className="lg:w-1/2">
            {/* Título del producto */}
            <h1 className="text-3xl font-bold text-gray-800">{productfind.name}</h1>

            {/* Valoraciones */}
            <div className="flex items-center mt-2">
              <div className="flex mr-2">{renderStars(productfind.rating)}</div>
              <span className="text-sm text-gray-500">
                {productfind.rating.toFixed(1)} ({productfind.reviewCount} valoraciones)
              </span>
            </div>

            {/* Precio */}
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-teal-600">S/ {productfind.price.toFixed(2)}</span>
                {productfind.discount && (
                  <span className="ml-2 line-through text-gray-500">
                    S/ {productfind.priceBeforeDiscount.toFixed(2)}
                  </span>
                )}
              </div>
              {productfind.discount && (
                <span className="text-sm text-red-500 font-medium">
                  Ahorras S/ {discountAmount.toFixed(2)} ({discountPercentage}% de descuento)
                </span>
              )}
            </div>

            {/* Disponibilidad */}
            <div className="mt-4">
              <span
                className={`text-sm ${
                  productfind.stock > 10 ? 'text-green-600' : productfind.stock > 0 ? 'text-orange-500' : 'text-red-500'
                }`}
              >
                {productfind.stock > 10
                  ? 'En stock'
                  : productfind.stock > 0
                  ? `¡Solo quedan ${productfind.stock} unidades!`
                  : 'Agotado'}
              </span>
            </div>

            {/* Descripción corta */}
            <p className="mt-4 text-gray-600">{productfind.description}</p>

            {/* Características destacadas */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Características destacadas:</h3>
              <ul className="mt-2 space-y-2">
                {productfind.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-teal-600 rounded-full p-1 mr-2 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contador y botón de compra */}
            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-3 py-2 text-gray-600 hover:text-teal-600 disabled:text-gray-300"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-10 text-center">{quantity}</span>
                  <button
                    className="px-3 py-2 text-gray-600 hover:text-teal-600 disabled:text-gray-300"
                    onClick={() => setQuantity(Math.min(productfind.stock, quantity + 1))}
                    disabled={quantity >= productfind.stock}
                  >
                    +
                  </button>
                </div>

                <button className="flex-1 bg-teal-600 text-white py-3 px-4 rounded-md font-medium hover:bg-teal-700 transition flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Añadir al carrito
                </button>

                <button className="p-3 border border-gray-300 rounded-md hover:border-teal-600 hover:text-teal-600 transition">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Detalles adicionales */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-center flex-col text-center p-4">
                  <Truck className="w-8 h-8 text-teal-600 mb-2" />
                  <span className="text-sm font-medium">Envío gratis</span>
                  <span className="text-xs text-gray-500">En pedidos superiores a S/50</span>
                </div>
                <div className="flex items-center justify-center flex-col text-center p-4">
                  <Shield className="w-8 h-8 text-teal-600 mb-2" />
                  <span className="text-sm font-medium">Garantía de 1 año</span>
                  <span className="text-xs text-gray-500">Contra defectos de fabricación</span>
                </div>
                <div className="flex items-center justify-center flex-col text-center p-4">
                  <RefreshCw className="w-8 h-8 text-teal-600 mb-2" />
                  <span className="text-sm font-medium">30 días para devolución</span>
                  <span className="text-xs text-gray-500">Si no estás satisfecho</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pestañas de información adicional */}
      <div className="container mx-auto px-4 py-8">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              className={`pb-4 font-medium ${
                activeTab === 'description'
                  ? 'border-b-2 border-teal-600 text-teal-600'
                  : 'text-gray-500 hover:text-teal-600'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Descripción detallada
            </button>
            <button
              className={`pb-4 font-medium ${
                activeTab === 'specs' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500 hover:text-teal-600'
              }`}
              onClick={() => setActiveTab('specs')}
            >
              Especificaciones
            </button>
            <button
              className={`pb-4 font-medium ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-teal-600 text-teal-600'
                  : 'text-gray-500 hover:text-teal-600'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Valoraciones ({productfind.reviewCount})
            </button>
          </div>
        </div>

        <div className="py-6">
          {/* Contenido de la pestaña de descripción */}
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{productfind.longDescription}</p>
            </div>
          )}

          {/* Contenido de la pestaña de especificaciones */}
          {activeTab === 'specs' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Detalles del producto</h3>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 text-gray-500">Material</td>
                        <td className="py-3 text-gray-700 font-medium">{productfind.materialInfo}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 text-gray-500">Dimensiones</td>
                        <td className="py-3 text-gray-700 font-medium">{productfind.dimensions}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 text-gray-500">Peso</td>
                        <td className="py-3 text-gray-700 font-medium">{productfind.weight}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 text-gray-500">Capacidad</td>
                        <td className="py-3 text-gray-700 font-medium">{productfind.capacity}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-gray-500">Origen</td>
                        <td className="py-3 text-gray-700 font-medium">{productfind.origin}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Cuidado y garantía</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800">Instrucciones de cuidado:</h4>
                      <p className="mt-1 text-gray-600">{productfind.care}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Garantía:</h4>
                      <p className="mt-1 text-gray-600">{productfind.warranty}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                  {productfind.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Contenido de la pestaña de valoraciones */}
          {activeTab === 'reviews' && (
            <div>
              {/* Resumen de valoraciones */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="text-center md:text-left md:flex-1">
                    <div className="text-5xl font-bold text-gray-800">{productfind.rating.toFixed(1)}</div>
                    <div className="flex justify-center md:justify-start mt-2">{renderStars(productfind.rating)}</div>
                    <div className="text-sm text-gray-500 mt-1">Basado en {productfind.reviewCount} valoraciones</div>
                  </div>
                  <div className="mt-6 md:mt-0 md:flex-1">
                    <button className="w-full bg-teal-600 text-white py-3 px-4 rounded-md font-medium hover:bg-teal-700 transition">
                      Escribir una valoración
                    </button>
                  </div>
                </div>
              </div>

              {/* Lista de valoraciones */}
              <div className="space-y-6">
                {productfind.reviews.map((review, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium text-gray-800">{review.user}</h4>
                        <div className="flex items-center mt-1">
                          <div className="flex">{renderStars(review.rating)}</div>
                          <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{review.comment}</p>
                    <div className="mt-4 flex items-center text-sm">
                      <button className="flex items-center text-gray-500 hover:text-teal-600">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>
                        <span>Útil ({review.helpful})</span>
                      </button>
                      <button className="ml-4 text-teal-600 hover:text-teal-700">Responder</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productfind.relatedProducts.map((productId) => (
              <div key={productId} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-1">
                  <img src={productImage} alt="Producto relacionado" className="w-full h-48 object-contain" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 hover:text-teal-600 transition">
                    Producto relacionado {productId}
                  </h3>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-gray-500">(42)</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold text-teal-600">S/ 29.99</span>
                    <button className="text-gray-500 hover:text-teal-600">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewproductContent;
