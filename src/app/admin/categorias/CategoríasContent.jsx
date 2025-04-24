'use client';
import { useState } from 'react';
import Header from './Header';
import StatsBar from './StatsBar';
import CategoryList from './CategoryList';
import CategoryModal from './CategoryModal';
import SubcategoriesList from './SubcategoriesList';
import SubcategoryModal from './SubcategoryModal';
import { categorias as initialCategorias, subcategorias as initialSubcategorias } from './categoriesData';

const CategoriasContent = () => {
  const [categorias, setCategorias] = useState(initialCategorias);
  const [subcategorias, setSubcategorias] = useState(initialSubcategorias);

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [subcategoryModalOpen, setSubcategoryModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubcategory, setCurrentSubcategory] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Gestión de categorías
  const handleAddCategory = () => {
    setCurrentCategory(null);
    setCategoryModalOpen(true);
  };

  const handleEditCategory = (category) => {
    setCurrentCategory(category);
    setCategoryModalOpen(true);
  };

  const handleSaveCategory = (categoryData) => {
    if (currentCategory) {
      // Editar existente
      setCategorias(categorias.map((cat) => (cat.id === categoryData.id ? categoryData : cat)));
    } else {
      // Crear nueva
      setCategorias([...categorias, categoryData]);
    }
    setCategoryModalOpen(false);
  };

  const handleDeleteCategory = (categoryId) => {
    // Eliminar categoría
    setCategorias(categorias.filter((cat) => cat.id !== categoryId));

    // Eliminar subcategorías asociadas
    const newSubcategorias = { ...subcategorias };
    delete newSubcategorias[categoryId];
    setSubcategorias(newSubcategorias);
  };

  const handleToggleStatus = (categoryId) => {
    setCategorias(categorias.map((cat) => (cat.id === categoryId ? { ...cat, activa: !cat.activa } : cat)));
  };

  // Gestión de subcategorías
  const handleAddSubcategory = (categoryId) => {
    setCurrentSubcategory(null);
    setSelectedCategoryId(categoryId);
    setSubcategoryModalOpen(true);
  };

  const handleEditSubcategory = (categoryId, subcategory) => {
    setCurrentSubcategory(subcategory);
    setSelectedCategoryId(categoryId);
    setSubcategoryModalOpen(true);
  };

  const handleSaveSubcategory = (subcategoryData) => {
    const categoryId = parseInt(subcategoryData.categoryId);

    // Crear una copia del estado actual
    const newSubcategorias = { ...subcategorias };

    // Asegurarse de que existe la clave para esta categoría
    if (!newSubcategorias[categoryId]) {
      newSubcategorias[categoryId] = [];
    }

    if (currentSubcategory) {
      // Editar existente
      newSubcategorias[categoryId] = newSubcategorias[categoryId].map((subcat) =>
        subcat.id === subcategoryData.id ? { ...subcategoryData } : subcat
      );
    } else {
      // Crear nueva
      newSubcategorias[categoryId] = [
        ...newSubcategorias[categoryId],
        {
          id: subcategoryData.id,
          nombre: subcategoryData.nombre,
          productos: 0, // Valor inicial para nuevas subcategorías
        },
      ];
    }

    setSubcategorias(newSubcategorias);
    setSubcategoryModalOpen(false);
  };

  const handleDeleteSubcategory = (categoryId, subcategoryId) => {
    const newSubcategorias = { ...subcategorias };

    newSubcategorias[categoryId] = newSubcategorias[categoryId].filter((subcat) => subcat.id !== subcategoryId);

    setSubcategorias(newSubcategorias);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-tertiary">
      <Header onAddCategory={handleAddCategory} />

      <StatsBar categorias={categorias} subcategorias={subcategorias} />

      <CategoryList
        categorias={categorias}
        onEdit={handleEditCategory}
        onDelete={handleDeleteCategory}
        onToggleStatus={handleToggleStatus}
      />

      <SubcategoriesList
        categorias={categorias}
        subcategorias={subcategorias}
        onAddSubcategory={handleAddSubcategory}
        onEditSubcategory={handleEditSubcategory}
        onDeleteSubcategory={handleDeleteSubcategory}
      />

      {categoryModalOpen && (
        <CategoryModal
          isOpen={categoryModalOpen}
          onClose={() => setCategoryModalOpen(false)}
          category={currentCategory}
          onSave={handleSaveCategory}
        />
      )}

      {subcategoryModalOpen && (
        <SubcategoryModal
          isOpen={subcategoryModalOpen}
          onClose={() => setSubcategoryModalOpen(false)}
          categoryId={selectedCategoryId}
          subcategory={currentSubcategory}
          onSave={handleSaveSubcategory}
          categorias={categorias}
        />
      )}
    </div>
  );
};

export default CategoriasContent;
