'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FiSearch, FiLogOut } from 'react-icons/fi';
import { HiOutlineUserCircle, HiOutlineCog, HiOutlineLockClosed } from 'react-icons/hi';

const Header_Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-2xl h-[10vh]">
      <div className="px-10 flex justify-between items-center h-full">
        <div className="flex items-center space-x-3">
          <p className="text-xl font-bold text-gray-800">Panel Administrativo</p>
        </div>

        <div className="flex items-center space-x-10 text-black">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-9 pr-4 py-2 rounded-lg border text-[15px] w-[25vw] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40a99b] focus:border-transparent"
            />
            <div className="absolute left-2 top-2.5 text-gray-400">
              <FiSearch className="h-5 w-5" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative h-[10vh] flex" ref={dropdownRef}>
              <div
                className="flex items-center bg-primary-leve px-5 space-x-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={toggleDropdown}
              >
                <div className="flex items-center">
                  <img src="./Img/usuario.jpg" alt="Avatar" className="h-10 w-10 rounded-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">Mateo Elian</span>
                  <span className="text-[12px] font-medium text-gray-600">ADMIN GENERAL</span>
                </div>
              </div>

              {isOpen && (
                <div className="absolute right-0 top-[89%] mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <div className="px-4 py-3 border-b border-gray-100 select-none">
                    <p className="text-sm font-medium text-primary">¡Bienvenido!</p>
                  </div>
                  <Link
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    <HiOutlineUserCircle className="h-5 w-5 mr-3 text-gray-400" />
                    Mi Cuenta
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    <HiOutlineCog className="h-5 w-5 mr-3 text-gray-400" />
                    Configuración
                  </Link>
                  <Link
                    href="/login"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    <FiLogOut className="h-5 w-5 mr-3 text-gray-400" />
                    Cerrar sesión
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_Admin;
