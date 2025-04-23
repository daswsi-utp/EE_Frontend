'use client';

import {
  MdDashboardCustomize,
  MdCategory,
  MdInventory,
  MdProductionQuantityLimits,
  MdPeopleAlt,
  MdOutlineDoubleArrow,
  MdOutlineExitToApp,
  MdOutlinePolicy,
  MdSettings,
  MdOutlineAnalytics,
  MdMarkEmailUnread,
} from 'react-icons/md';
import { BsChatSquareDotsFill, BsBarChartLine, BsClipboardData } from 'react-icons/bs';
import { FaCalendar } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { BiSolidLeaf } from 'react-icons/bi';
import { TbReportSearch } from 'react-icons/tb';
import { PiNotePencilFill } from 'react-icons/pi';
import { useState } from 'react';
import Link from 'next/link';
import ItemMenu from './ItemMenu';

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div
      className={` text-white transition-all duration-200 h-screen bg-primary-admin flex flex-col items-start ${
        toggle ? 'w-[250px]' : 'w-[85px]'
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200  w-full h-[10vh] relative">
        <div className="flex items-center gap-2">
          <img
            src="./Img/logo.png"
            alt="logo"
            className={`w-[50px] transition-opacity duration-200 ${toggle ? 'opacity-100' : 'opacity-0'}`}
          />
          <span
            className={`font-extrabold tracking-wide text-[17px] whitespace-nowrap transition-all duration-200 ${
              toggle ? 'opacity-100' : 'hidden'
            }`}
          >
            VERDE RAÍZ
          </span>
        </div>

        {!toggle && <span className="absolute left-[32px] font-extrabold text-[24px]">V</span>}

        <div
          className="bg-primary-admin border-[4px] text-white text-[22px] absolute w-[43px] h-[43px] flex justify-center items-center rounded-full right-[-20px] cursor-pointer z-[50]"
          onClick={handleToggle}
        >
          <MdOutlineDoubleArrow />
        </div>
      </div>

      {/* MENÚ */}
      <div className="flex flex-col gap-[10px] py-6 px-5 pt-4 h-[90vh] w-full overflow-x-hidden scroll-container ">
        <span className={`${toggle ? '' : 'opacity-0'}`}>Navegacion</span>
        <ItemMenu Icono={MdDashboardCustomize} nombre="Dashboard" togle={toggle} url="/admin" />
        <ItemMenu Icono={MdProductionQuantityLimits} nombre="Productos" togle={toggle} url="/admin/productos" />
        <ItemMenu Icono={MdCategory} nombre="Categorías" togle={toggle} url="/admin/categorias" />
        <ItemMenu Icono={BsClipboardData} nombre="Pedidos" togle={toggle} url="/admin/pedidos" />
        <ItemMenu Icono={MdPeopleAlt} nombre="Clientes" togle={toggle} url="/admin/clientes" />
        <ItemMenu Icono={BiSolidLeaf} nombre="Sostenibilidad" togle={toggle} url="/admin/sostenibilidad" />
        <ItemMenu Icono={PiNotePencilFill} nombre="Blog" togle={toggle} url="/admin/blog" />
        <ItemMenu Icono={MdOutlinePolicy} nombre="Nosotros" togle={toggle} url="/admin/nosotros" />
        <ItemMenu Icono={BsChatSquareDotsFill} nombre="Chat Soporte" togle={toggle} url="/admin/chat-soporte" />
        <ItemMenu Icono={FaCalendar} nombre="Calendario" togle={toggle} url="/admin/calendario" />
        <ItemMenu Icono={GrUserWorker} nombre="Empleados" togle={toggle} url="/admin/empleados" />
        <ItemMenu Icono={BsBarChartLine} nombre="Reportes" togle={toggle} url="/admin/reportes" />
        <ItemMenu Icono={TbReportSearch} nombre="Estadísticas" togle={toggle} url="/admin/estadisticas" />
      </div>
    </div>
  );
};

export default Sidebar;
