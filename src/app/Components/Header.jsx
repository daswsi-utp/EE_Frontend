import { Montserrat_Alternates } from 'next/font/google'
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React from 'react'
import Link from 'next/link';

const montserrat = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
})

const Header = () => {
    return (
        <div className='w-full flex text-text justify-around relative h-[12vh] items-center z-[5] bg-white shadow-xl/2'>

            <div className={`${montserrat.className} text-text font-[500] text-[30px]  pl-6 flex flex-col justify-center w-[310px]`}>
                <Link href="/" className='sw-fit cursor-pointer'>
                    <p className='h-[30px]'><span className="font-[700] text-primary">V</span>erde</p>
                    <p><span className="font-[700] text-secondary">R</span>aíz</p> 
                </Link>
            </div>


            <nav className='flex items-center  px-10 py-2 rounded-full'>
                <ul className={`${montserrat.className} font-[600] text-text text-[16px] tracking-wide flex gap-8`}>
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
                <button className={`bg-primary text-white transition-all ease-out duration-300 hover:scale-105 w-[45px] h-[45px] flex justify-center items-center text-[27px] rounded-full cursor-pointer`}>
                    <IoCartOutline/>
                </button>
                
            </div>
        </div>
    )
}

export default Header
