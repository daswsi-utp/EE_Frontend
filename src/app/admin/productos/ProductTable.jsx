import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductRow from './ProductRow';
import Pagination from './Pagination';

const ProductTable = ({
  currentProducts,
  handleEdit,
  handleDelete,
  filteredProducts,
  currentPage,
  totalPages,
  indexOfFirstProduct,
  indexOfLastProduct,
  prevPage,
  nextPage,
  paginate,
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b bg-teal-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Producto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Precio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Descuento
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Valoración
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductRow key={product.id} product={product} handleEdit={handleEdit} handleDelete={handleDelete} />
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                  No se encontraron productos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      {filteredProducts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          indexOfFirstProduct={indexOfFirstProduct}
          indexOfLastProduct={indexOfLastProduct}
          filteredProducts={filteredProducts}
          prevPage={prevPage}
          nextPage={nextPage}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default ProductTable;
