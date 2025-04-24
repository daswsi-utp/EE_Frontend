import { X, Save } from 'lucide-react';

const ProductModal = ({ isModalOpen, setIsModalOpen, isEditing, formData, handleChange, handleSave, categories }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b px-6 py-3">
          <h3 className="text-lg font-medium text-teal-800">
            {isEditing ? 'Editar Producto' : 'Añadir Nuevo Producto'}
          </h3>
          <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-500">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <form className="space-y-4">
            {/* Nombre del producto */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del producto*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-teal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                required
              />
            </div>

            {/* URL de imagen */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL de imagen</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-teal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                placeholder="/Img/producto.jpg"
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción*</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-teal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                required
              ></textarea>
            </div>

            {/* Fila: Categoría y Precio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoría*</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-teal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Precio*</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">S/</span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    className="w-full pl-8 pr-3 py-2 border border-teal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Fila: Descuento y Stock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descuento</label>
                <input
                  type="text"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  placeholder="0%"
                  className="w-full px-3 py-2 border border-teal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock*</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 border border-teal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                  required
                />
              </div>
            </div>

            {/* Producto nuevo */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isNew"
                name="isNew"
                checked={formData.isNew}
                onChange={handleChange}
                className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-0"
              />
              <label htmlFor="isNew" className="ml-2 block text-sm text-gray-700">
                Marcar como producto nuevo
              </label>
            </div>

            {/* Botones de acción */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
              >
                <div className="flex items-center">
                  <Save size={16} className="mr-2" />
                  {isEditing ? 'Actualizar' : 'Guardar'}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
