import { Montserrat_Alternates } from 'next/font/google'
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React from 'react'

const montserrat = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
})

const Header = () => {
    return (
        <div className='w-full flex text-text justify-around relative h-[12vh] items-center z-[5]'>

            <div className={`${montserrat.className} text-text font-[400] text-[30px]  pl-6 flex flex-col justify-center w-[310px]`}>
                <div className='sw-fit cursor-pointer'>
                    <p className='h-[30px]'><span className="font-[600] text-hover-text">V</span>erde</p>
                    <p><span className="font-[600] text-hover-text">R</span>aíz</p> 
                </div>
            </div>


            <div className='flex items-center  px-10 py-2 rounded-full bg-[rgba(255,255,255,0.15)] inset-shadow-xs backdrop-blur-sm'>
                <ul className={`${montserrat.className} font-[500] text-text text-[16px] tracking-wide flex gap-8`}>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <a href="#">Productos</a>
                    </li>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <a href="#">Sostenibilidad</a>
                    </li>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <a href="#">Blog</a>
                    </li>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <a href="#">Ofertas</a>
                    </li>
                    <li className='transition-all ease-out duration-300 hover:scale-105 hover:text-hover-text'>
                        <a href="#">Nosotros</a>
                    </li>
                </ul>
            </div>

            <div className='flex gap-5 w-[310px] items-center justify-end pr-10'>
                <button className={`transition-all ease-out duration-300 hover:scale-105 backdrop-blur-sm bg-[rgba(255,255,255,0.15)] w-[50px] h-[50px] flex justify-center items-center text-[20px] text-text rounded-full cursor-pointer hover:text-hover-text`}>
                    <FaRegUser/>
                </button>
                <button className={`transition-all ease-out duration-300 hover:scale-105 backdrop-blur-sm bg-[rgba(255,255,255,0.15)] w-[50px] h-[50px] flex justify-center items-center text-[27px] text-text rounded-full cursor-pointer hover:text-hover-text`}>
                    <IoCartOutline/>
                </button>
                
            </div>
        </div>
    )
}

export default Header
