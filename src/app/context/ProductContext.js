"use client";

import { createContext, useContext, useState, useEffect } from "react";

const initialProducts = [];

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts((prev) => {
      const existing = prev.find((p) => p.id === newProduct.id);

      if (existing) {
        return prev.map((p) =>
          p.id === newProduct.id
            ? { ...p, quantity: p.quantity + newProduct.quantity }
            : p
        );
      }

      return [...prev, newProduct];
    });
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    console.log("Producto eliminado con id:", id);
  };

  // Función para actualizar la cantidad de un producto
  const updateProductQuantity = (id, quantity) => {
    setProducts((prev) => {
      return prev.map((product) =>
        product.id === id ? { ...product, quantity: quantity } : product
      );
    });

    console.log(
      "Cantidad actualizada para producto con id:",
      id,
      "nueva cantidad:",
      quantity
    );
  };

  // Mostrar productos actualizados cada vez que cambian
  useEffect(() => {
    console.log("Productos actuales:", products);
  }, [products]);

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, updateProductQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
