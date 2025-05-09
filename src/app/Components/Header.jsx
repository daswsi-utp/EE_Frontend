'use client';

import { Montserrat_Alternates } from 'next/font/google';
import { FaRegUser } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { CiCalendarDate } from 'react-icons/ci';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import React, { useState } from 'react';
import Link from 'next/link';
import CartSidebar from './Cart/CartSidebar';
import { useProducts } from '../context/ProductContext';
import EcoCalendar from './EcoCalendar/EcoCalendar';
import { LuCalendarRange } from 'react-icons/lu';
import Image from 'next/image';

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(3);
  const { products } = useProducts();
  const [calendar, setCalendar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCalendar = () => setCalendar(!calendar);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="w-full bg-white shadow-md z-[80] relative">
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <div className={`${montserrat.className} text-text font-[500] text-[26px]`}>
            <Link href="/">
              <img src="./Img/logo_header.png" alt="logo root green" className="h-[50px] w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className={`${montserrat.className} font-[600] text-text text-[16px] tracking-wide flex gap-6`}>
              <li className="hover:text-hover-text transition duration-200">
                <Link href="/products">Productos</Link>
              </li>
              <li className="hover:text-hover-text transition duration-200">
                <Link href="/sustainability">Sostenibilidad</Link>
              </li>
              <li className="hover:text-hover-text transition duration-200">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-hover-text transition duration-200">
                <Link href="/us">Nosotros</Link>
              </li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6 justify-center">
            {/* Calendar */}
            <div className="relative flex">
              <button onClick={toggleCalendar} className="cursor-pointer text-[27px] text-black hover:text-hover-text">
                <LuCalendarRange />
              </button>
              {calendar && (
                <div className="absolute right-0 top-[100%] z-[200]">
                  <EcoCalendar />
                </div>
              )}
            </div>

            {/* User */}
            <Link href="/login" className="flex">
              <button className="text-[25px] text-text hover:text-hover-text cursor-pointer">
                <FaRegUser />
              </button>
            </Link>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="cursor-pointer relative text-white bg-primary/80 p-2 rounded-full text-[22px] hover:scale-105 transition"
            >
              <IoCartOutline />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#fa4646] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {products.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="text-[26px] text-black md:hidden" aria-label="Menú">
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav - Ahora posicionado absolutamente */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
            <ul className={`${montserrat.className} font-[600] text-text flex flex-col gap-3 px-6 py-4`}>
              <li>
                <Link href="/products">Productos</Link>
              </li>
              <li>
                <Link href="/sustainability">Sostenibilidad</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/us">Nosotros</Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Cart Sidebar Component */}
      <CartSidebar isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
};

export default Header;
