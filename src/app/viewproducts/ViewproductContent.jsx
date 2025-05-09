'use client';

import { useState, useEffect } from 'react';
import { products } from '@/app/data/productData';
import ProductBreadcrumbs from './components/ProductBreadcrumbs';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInformation from './components/ProductInformation';
import ProductTabs from './components/ProductTabs';
import ProductDetails from './components/ProductDetails';
import ProductDetailsAdicionales from './components/ProductDetailsAdicionales';
import RatingSummary from './components/RatingSummary';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import ProductNotFound from './components/ProductNotFound';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';
import ProductHighlights from './components/ProductHighlights';

const ViewproductContent = ({ id }) => {
  const productfind = products.find((p) => p.id == id);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  useEffect(() => {
    if (addedToCart) {
      const timer = setTimeout(() => setAddedToCart(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [addedToCart]);

  if (!productfind) {
    return <ProductNotFound />;
  }

  const discountAmount = productfind.priceBeforeDiscount - productfind.price;
  const discountPercentage = Math.round((discountAmount / productfind.priceBeforeDiscount) * 100);

  const handleCommentSubmit = async (commentData) => {
    setIsSubmittingComment(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(`Comentario enviado con calificación de ${commentData.rating} estrellas: ${commentData.comment}`);
    setIsSubmittingComment(false);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

  const handleWishlist = () => {
    setWishlistAdded(!wishlistAdded);
  };

  const handleQuantityIncrement = () => {
    setQuantity(Math.min(productfind.stock, quantity + 1));
  };

  const handleQuantityDecrement = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  return (
    <div className="bg-tertiary min-h-screen px-20 ">
      <ProductBreadcrumbs category={productfind.category} name={productfind.name} />

      {addedToCart && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-md shadow-md flex items-center"
        >
          <FaCheck className="mr-2" />
          <span>Producto añadido al carrito</span>
        </motion.div>
      )}

      <div className="container mx-auto py-6 px-4 pt-0 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="lg:w-1/2 ">
            <ProductInformation
              product={productfind}
              discountAmount={discountAmount}
              discountPercentage={discountPercentage}
            />
            <ProductHighlights highlights={productfind.highlights} />
            <ProductDetails
              product={productfind}
              quantity={quantity}
              onQuantityIncrement={handleQuantityIncrement}
              onQuantityDecrement={handleQuantityDecrement}
              onAddToCart={handleAddToCart}
              wishlistAdded={wishlistAdded}
              onToggleWishlist={handleWishlist}
            />
            <ProductTabs product={productfind} />
            <ProductDetailsAdicionales />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <ProductImageGallery product={productfind} />
            <div className="container mx-auto py-8 px-6 lg:px-0 ">
              <div className="bg-white rounded-xl shadow-sm p-6 py-8">
                <p className="text-2xl font-bold text-gray-800 mb-6 px-4">Valoraciones y comentarios</p>
                <CommentList reviews={productfind.reviews} />
                <CommentForm onSubmit={handleCommentSubmit} isSubmitting={isSubmittingComment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewproductContent;
