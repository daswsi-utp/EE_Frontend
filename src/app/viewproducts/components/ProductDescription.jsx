const ProductDescription = ({ product }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Descripción detallada</h3>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">Instrucciones de cuidado:</h4>
        <p className="text-gray-600">{product.care}</p>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">Garantía:</h4>
        <p className="text-gray-600">{product.warranty}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
