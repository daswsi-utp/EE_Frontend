import { Edit, Trash2, MoreVertical, Eye, EyeOff } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const CategoryCard = ({ categoria, onEdit, onDelete, onToggleStatus }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-visible">
      <div className="h-32 bg-gray-200 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
          <img src="./../Img/bambu.jpg" className="h-full w-full object-cover" alt="Categoria" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-900">{categoria.nombre}</h3>
          <div className="relative" ref={menuRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <MoreVertical size={18} className="text-gray-500" />
            </button>

            {showMenu && (
              <div
                className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                style={{ zIndex: 9999 }}
              >
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button
                    onClick={() => {
                      onEdit(categoria);
                      setShowMenu(false);
                    }}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    <Edit className="mr-2" size={16} />
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      onToggleStatus(categoria.id);
                      setShowMenu(false);
                    }}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {categoria.activa ? <EyeOff className="mr-2" size={16} /> : <Eye className="mr-2" size={16} />}
                    {categoria.activa ? 'Desactivar' : 'Activar'}
                  </button>
                  <button
                    onClick={() => {
                      onDelete(categoria.id);
                      setShowMenu(false);
                    }}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    role="menuitem"
                  >
                    <Trash2 className="mr-2" size={16} />
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-1">{categoria.descripcion}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">{categoria.productos} productos</span>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              categoria.activa ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}
          >
            {categoria.activa ? 'Activa' : 'Inactiva'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
