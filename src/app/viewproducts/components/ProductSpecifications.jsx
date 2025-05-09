const ProductSpecifications = ({ product }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Especificaciones</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-gray-500 font-medium w-1/3">Material</td>
              <td className="py-3 text-gray-700">{product.materialInfo}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-gray-500 font-medium">Dimensiones</td>
              <td className="py-3 text-gray-700">{product.dimensions}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-gray-500 font-medium">Peso</td>
              <td className="py-3 text-gray-700">{product.weight}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-gray-50" />
              <td className="py-3 text-gray-500 font-medium">Capacidad</td>
              <td className="py-3 text-gray-700">{product.capacity}</td>
            </tr>
            <tr>
              <td className="py-3 text-gray-500 font-medium">Origen</td>
              <td className="py-3 text-gray-700">{product.origin}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <h4 className="font-medium text-gray-800 mb-2">Etiquetas:</h4>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm transition-colors hover:bg-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;
