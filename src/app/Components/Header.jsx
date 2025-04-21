"use client";

import { Montserrat_Alternates } from "next/font/google";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React, { useState } from "react";
import Link from "next/link";
import CartSidebar from "./CartSidebar";

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(3);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="w-full flex text-text justify-around relative h-[12vh] items-center z-[5] bg-white shadow-xl/2">
        <div
          className={`${montserrat.className} text-text font-[500] text-[30px] pl-6 flex flex-col justify-center w-[310px]`}
        >
          <Link href="/" className="sw-fit cursor-pointer">
            <p className="h-[30px]">
              <span className="font-[700] text-primary">V</span>erde
            </p>
            <p>
              <span className="font-[700] text-secondary">R</span>aíz
            </p>
          </Link>
        </div>

        <nav className="flex items-center px-10 py-2 rounded-full">
          <ul
            className={`${montserrat.className} font-[600] text-text text-[16px] tracking-wide flex gap-8`}
          >
            <li className="transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text">
              <Link href="/products">Productos</Link>
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text">
              <Link href="/sustainability">Sostenibilidad</Link>
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text">
              <Link href="/offers">Ofertas</Link>
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text">
              <Link href="/us">Nosotros</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-5 w-[310px] items-center justify-end pr-10">
          <Link href="/login">
            <button
              className={`transition-all ease-out duration-300 hover:scale-105 w-[50px] h-[50px] flex justify-center items-center text-[20px] text-text rounded-full cursor-pointer hover:text-hover-text`}
            >
              <FaRegUser />
            </button>
          </Link>

          <button
            id="cart-button"
            onClick={toggleCart}
            className={`bg-primary text-white transition-all ease-out duration-300 hover:scale-105 w-[45px] h-[45px] flex justify-center items-center text-[27px] rounded-full cursor-pointer relative`}
          >
            <IoCartOutline />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Cart Sidebar Component */}
      <CartSidebar isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
};

export default Header;
