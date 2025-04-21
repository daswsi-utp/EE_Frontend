"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Cargar productos desde localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("cart-products");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  // Guardar en localStorage cada vez que cambien los productos
  useEffect(() => {
    localStorage.setItem("cart-products", JSON.stringify(products));
  }, [products]);

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

  const updateProductQuantity = (id, quantity) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
    console.log("Cantidad actualizada para producto con id:", id);
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, updateProductQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
