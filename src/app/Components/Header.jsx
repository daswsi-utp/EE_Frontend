import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React from 'react'
import Link from 'next/link';


const Header = () => {
    return (
        <div className='w-full flex text-text justify-around relative h-[12vh] items-center z-[5] bg-background shadow-xl/2'>

            <div className={`text-text font-[500] text-[30px]  pl-6 flex flex-col justify-center w-[310px]`}>
                <Link href="/" className='sw-fit cursor-pointer'>
                    <p className='h-[30px]'><span className="font-[700] text-primary">V</span>erde</p>
                    <p><span className="font-[700] text-secondary">R</span>aíz</p> 
                </Link>
            </div>


            <nav className='flex items-center  px-10 py-2 rounded-full'>
                <ul className={`font-[600] text-text text-[16px] tracking-wide flex gap-8`}>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <Link href="/products">Productos</Link>
                    </li>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <Link href="/sustainability">Sostenibilidad</Link>
                    </li>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <Link href="/offers">Ofertas</Link>
                    </li>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <Link href="/us">Nosotros</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex gap-5 w-[310px] items-center justify-end pr-10'>
                <button className={`transition-all ease-out duration-300 hover:scale-105 w-[50px] h-[50px] flex justify-center items-center text-[20px] text-text rounded-full cursor-pointer hover:text-hover-text`}>
                    <FaRegUser/>
                </button>
                <button className={`transition-all ease-out duration-300 hover:scale-105 w-[50px] h-[50px] flex justify-center items-center text-[27px] text-text rounded-full cursor-pointer hover:text-hover-text`}>
                    <IoCartOutline/>
                </button>
                
            </div>
        </div>
    )
}

export default Header
