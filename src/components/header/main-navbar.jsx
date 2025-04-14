"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const MAIN_ROUTES = [
  {
    href: "/products",
    label: "Productos",
  },
  {
    href: "/sustainability",
    label: "Sostenibilidad",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/offers",
    label: "Ofertas",
  },
  {
    href: "/us",
    label: "Nosotros",
  },
];


function CustomLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li
      className={`transition-all ease-out duration-300 hover:scale-105 ${
        isActive ? "text-hover-text" : "text-text"
      }`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function MainNavbar() {
  return (
    <header className="w-full flex text-text justify-around relative h-[12vh] items-center z-[5] bg-background shadow-xl/2">
      <div className="text-text font-[500] text-[30px] pl-6 flex flex-col justify-center w-[310px]">
        <Link href="/" className="sw-fit cursor-pointer">
          <Logo />
        </Link>
      </div>
      <nav className="flex items-center  px-10 py-2 rounded-full">
        <ul className="font-[600] text-text text-[16px] tracking-wide flex gap-8">
          {MAIN_ROUTES.map(({ href, label }) => (
            <CustomLink key={href} href={href}>
              {label}
            </CustomLink>
          ))}
        </ul>
      </nav>
      <div className="flex gap-5 w-[310px] items-center justify-end pr-10">
        <button
          className="transition-all ease-out duration-300 hover:scale-105 w-[50px] h-[50px] flex justify-center items-center text-[20px] text-text rounded-full cursor-pointer hover:text-hover-text"
        >
          <FaRegUser />
        </button>
        <button
          className="transition-all ease-out duration-300 hover:scale-105 w-[50px] h-[50px] flex justify-center items-center text-[27px] text-text rounded-full cursor-pointer hover:text-hover-text"
        >
          <IoCartOutline />
        </button>
      </div>
    </header>
  )
}