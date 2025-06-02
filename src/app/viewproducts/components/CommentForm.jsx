'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaPaperPlane } from 'react-icons/fa6';
import { useAuth } from '@/app/context/AuthContext';
import API_BASE_URL from '@/app/config/apiConfig';
import axios from 'axios';

const CommentForm = ({ productCode, onSubmitSuccess, onSubmitError }) => {
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userCode } = useAuth();

  const renderSelectableStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <motion.div key={i} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaStar
            className={`w-6 h-6 cursor-pointer ${i <= userRating ? 'text-yellow-400' : 'text-gray-300'}`}
            onClick={() => setUserRating(i)}
          />
        </motion.div>
      );
    }
    return stars;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!userCode) {
      console.error('User code not found. User must be logged in to leave a review.');
      if (onSubmitError) {
        onSubmitError('Debes iniciar sesión para dejar una reseña.');
      }
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/reviews`, {
        productCode: productCode,
        userCode: userCode,
        rating: userRating,
        comment: userComment,
      });

      setUserComment('');
      setUserRating(5);
      setIsSubmitting(false);
      if (onSubmitSuccess) {
        onSubmitSuccess(); // Llama a la función para recargar comentarios en el padre
      }
    } catch (error) {
      console.error('Error al enviar la reseña:', error);
      setIsSubmitting(false);
      let errorMessage = 'Error al enviar la reseña. Intenta nuevamente.';
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      if (onSubmitError) {
        onSubmitError(errorMessage);
      }
    }
  };

  return (
    <div className="mb-8 bg-gray-50 rounded-lg p-6 mt-10 mx-4">
      <p className="text-xl font-semibold text-gray-800 mb-4">Deja tu comentario</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Tu valoración:</label>
          <div className="flex space-x-2">{renderSelectableStars()}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 mb-2 font-medium">
            Tu comentario:
          </label>
          <textarea
            id="comment"
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            rows="4"
            placeholder="Comparte tu experiencia con este producto..."
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            required
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 transition flex items-center disabled:bg-teal-400"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <FaPaperPlane className="w-4 h-4 mr-2" />
              Enviar comentario
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default CommentForm;
