"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useProducts } from "../context/ProductContext";
import CartItem from "./CartItem";

export default function CartSidebar({ isOpen, setIsOpen }) {
  const { products } = useProducts();

  useEffect(() => {}, [products]);

  const calculateTotal = () => {
    const total = products.reduce((sum, item) => {
      const discountedPrice =
        item.price - (item.price * parseInt(item.discount)) / 100;
      return parseFloat((sum + discountedPrice * item.quantity).toFixed(2));
    }, 0);

    return total.toFixed(2);
  };

  // Cerrar el carrito al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const cart = document.getElementById("cart-sidebar");
      const cartButton = document.getElementById("cart-button");

      if (
        isOpen &&
        cart &&
        !cart.contains(event.target) &&
        !cartButton?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Sidebar del Carrito */}
      <div
        id="cart-sidebar"
        className={`text-text fixed top-0 right-0 h-full w-full sm:w-[550px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Cabecera del Carrito */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary text-white">
            <h2 className="text-xl font-semibold flex items-center">
              Carrito de Compras
              <span className="ml-2 bg-white text-primary text-sm rounded-full h-6 w-6 flex items-center justify-center">
                {products.length}
              </span>
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Elementos del Carrito */}
          <div className="flex-1 overflow-y-auto p-4 bg-tertiary">
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <svg
                  className="h-16 w-16 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <p className="text-lg">Tu carrito está vacío</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
                >
                  Continuar comprando
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {products.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>

          {/* Pie de página del Carrito */}
          {products.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex justify-between mb-4 font-semibold">
                <span>Total:</span>
                <span>S/. {calculateTotal()}</span>
              </div>
              <button className="w-full bg-primary hover:bg-secondary text-white py-3 px-4 rounded-md font-medium transition-colors">
                Finalizar Compra
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full border border-primary text-primary hover:bg-tertiary py-2 px-4 rounded-md font-medium mt-2 transition-colors"
              >
                Seguir Comprando
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0000005b] z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
