import { useState } from 'react';
import { ChevronDown, ChevronUp, PlusCircle, Edit, Trash2 } from 'lucide-react';

const SubcategoriesList = ({ categorias, subcategorias, onAddSubcategory, onEditSubcategory, onDeleteSubcategory }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium text-gray-900">Subcategorías</h2>
        <p className="text-sm text-gray-600">Gestiona las subcategorías asociadas a cada categoría principal</p>
      </div>

      <div>
        {categorias.map((categoria) => (
          <div key={categoria.id} className="border-b last:border-b-0">
            <div
              className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
              onClick={() => toggleCategory(categoria.id)}
            >
              <div className="flex items-center">
                {expandedCategory === categoria.id ? (
                  <ChevronUp className="text-gray-400 mr-2" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 mr-2" size={20} />
                )}
                <div>
                  <h3 className="font-medium text-gray-900">{categoria.nombre}</h3>
                  <p className="text-sm text-gray-600">{subcategorias[categoria.id]?.length || 0} subcategorías</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddSubcategory(categoria.id);
                }}
                className="flex items-center text-sm text-teal-600 hover:text-teal-700"
              >
                <PlusCircle size={16} className="mr-1" />
                Añadir
              </button>
            </div>

            {expandedCategory === categoria.id && subcategorias[categoria.id] && (
              <div className="pb-3 px-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Productos
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subcategorias[categoria.id].map((subcategoria) => (
                      <tr key={subcategoria.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {subcategoria.nombre}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subcategoria.productos}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => onEditSubcategory(categoria.id, subcategoria)}
                            className="text-teal-600 hover:text-teal-900 mr-3"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => onDeleteSubcategory(categoria.id, subcategoria.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesList;
