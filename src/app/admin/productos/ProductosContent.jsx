'use client';
import { useState, useEffect } from 'react';
import ProductFilters from './ProductFilters';
import ProductTable from './ProductTable';
import ProductModal from './ProductModal';
import { products } from '@/app/data/productData';

const ProductosContent = () => {
  // Estado para los productos
  const [productos, setProductos] = useState(products);

  // Estados para la gestión de la UI
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Categorías disponibles
  const categories = ['Todos', 'Cocina', 'Baño', 'Hogar'];

  // Obtener productos filtrados y paginados
  const filteredProducts = productos.filter((product) => {
    return (
      (categoryFilter === 'Todos' || product.category === categoryFilter) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Estado para nuevo/editando producto
  const [formData, setFormData] = useState({
    id: 0,
    image: '',
    name: '',
    description: '',
    category: 'Cocina',
    price: 0,
    discount: '0%',
    rating: 5.0,
    reviewCount: 0,
    stock: 0,
    isNew: true,
  });

  // Resetear formulario
  const resetForm = () => {
    setFormData({
      id: 0,
      image: '',
      name: '',
      description: '',
      category: 'Cocina',
      price: 0,
      discount: '0%',
      rating: 5.0,
      reviewCount: 0,
      stock: 0,
      isNew: true,
    });
  };

  // Abrir modal para añadir producto
  const handleAddNew = () => {
    resetForm();
    setIsEditing(false);
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  // Abrir modal para editar producto
  const handleEdit = (product) => {
    setFormData({ ...product });
    setCurrentProduct(product);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (name === 'price' || name === 'stock') {
      setFormData({ ...formData, [name]: parseFloat(value) || 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Guardar producto (crear nuevo o actualizar existente)
  const handleSave = () => {
    if (isEditing) {
      // Actualizar producto existente
      const updatedProducts = productos.map((product) => (product.id === formData.id ? formData : product));
      setProductos(updatedProducts);
    } else {
      // Crear nuevo producto
      const newProduct = {
        ...formData,
        id: Date.now(), // Generar ID único
        reviewCount: 0,
        rating: 5.0,
      };
      setProductos([...productos, newProduct]);
    }
    setIsModalOpen(false);
  };

  // Eliminar producto
  const handleDelete = (productId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      const updatedProducts = productos.filter((product) => product.id !== productId);
      setProductos(updatedProducts);
    }
  };

  // Cambiar página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Ir a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Ir a la página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-6 bg-gray-50 h-min-[90vh]">
      {/* Cabecera */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gestión de Productos</h1>
        <p className="text-gray-600 mt-2">Administra tu catálogo de productos ecológicos</p>
      </div>

      {/* Filtros y búsqueda */}
      <ProductFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        handleAddNew={handleAddNew}
        categories={categories}
      />

      {/* Tabla de productos */}
      <ProductTable
        currentProducts={currentProducts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        filteredProducts={filteredProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        indexOfFirstProduct={indexOfFirstProduct}
        indexOfLastProduct={indexOfLastProduct}
        prevPage={prevPage}
        nextPage={nextPage}
        paginate={paginate}
      />

      {/* Modal para Añadir/Editar producto */}
      {isModalOpen && (
        <ProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isEditing={isEditing}
          formData={formData}
          handleChange={handleChange}
          handleSave={handleSave}
          categories={categories.filter((c) => c !== 'Todos')}
        />
      )}
    </div>
  );
};

export default ProductosContent;