import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const AddToCartButton = ({ onAddToCart, stock }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full sm:flex-1 bg-teal-600 text-white py-3 px-4 rounded-md font-medium hover:bg-teal-700 transition flex items-center justify-center"
      onClick={onAddToCart}
      disabled={stock <= 0}
    >
      <FaShoppingCart className="w-5 h-5 mr-2" />
      {stock > 0 ? 'Añadir al carrito' : 'Agotado'}
    </motion.button>
  );
};

export default AddToCartButton;
