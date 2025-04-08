import { Montserrat_Alternates } from 'next/font/google'
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter  } from "react-icons/sl";
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
        <div className='w-full flex text-text justify-around relative h-[90px] items-center'>

            <div className={`${montserrat.className} text-text font-[400] text-[30px]  pl-6 flex flex-col justify-center w-[310px]`}>
                <p className='h-[30px]'><span className="font-[600]">V</span>erde</p>
                <p><span className="font-[600]">R</span>aíz</p> 
            </div>


            <div className='flex items-center  px-10 py-3 rounded-full bg-[rgba(255,255,255,0.15)] inset-shadow-xs backdrop-blur-sm'>
                <ul className={`${montserrat.className} font-[500] text-text text-[16px] tracking-wide flex gap-8`}>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Sostenibilidad</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Ofertas</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                </ul>
            </div>

            <div className='flex gap-2 w-[310px] items-center justify-center'>
                <div className='mr-[15px] flex justify-center items-center gap-4 text-text font-[600] text-[22px]'>
                    <SlSocialFacebook />
                    <SlSocialInstagram />
                    <SlSocialTwitter />
                    <IoCartOutline />
                </div>
                
                <button className={`font-[500] ${montserrat.className} border-[1px] text-[14px] px-3 py-1 rounded-full cursor-pointer`}>Iniciar sesión</button>
            </div>
        </div>
    )
}

export default Header
