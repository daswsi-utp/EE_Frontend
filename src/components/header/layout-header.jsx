"use client";
import { usePathname } from "next/navigation";
import MainNavbar from "./main-navbar";

export default function LayoutHeader() {
  const pathname = usePathname();
  
  if (["/login", "/register", "/checkout"].includes(pathname.split('?')[0])) {
    return <div className="text-red-500">Login/Register</div>;
  }
  return <MainNavbar/>;

}
