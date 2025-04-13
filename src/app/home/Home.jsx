import Header from '@/app/Components/Header'
import { Montserrat_Alternates } from 'next/font/google'
import React from 'react'

const montserrat = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
})

const Home = () => {
    return (
        <div className='h-screen w-screen relative bg-tertiary'>

            <div className='relative z-10'>
                <Header/>
                <section className={`h-[88vh] ${montserrat.className} max-w-[1280px] m-auto`}>
                    <div className="grid grid-cols-5 grid-rows-6 gap-6 p-6 h-full text-white">
                        <div className="col-span-4 bg-[url(./Img/Ecologia.jpg)] bg-cover bg-center row-span-4 rounded-lg  relative">
                            <div className='z-10 absolute h-full w-full bg-linear-to-r from-black to-transparent rounded-lg opacity-70'></div>
                            <div className='z-20 relative flex justify-center items-center h-full w-full pl-20'>
                                <p className='text-white text-[3.5rem]'>
                                    Transforma tu vida con productos 100% ecológicos
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 row-span-2 col-start-1 row-start-5 rounded-lg overflow-hidden relative">
                            <div className='z-10 absolute h-full w-full bg-linear-to-r from-black to-transparent rounded-lg opacity-85'></div>
                            <img className='absolute bottom-0 right-0' src="./Img/Bote.png" alt="Bote de Basura" />
                            <div className='z-20 relative h-full w-[40%] ml-12 text-[1.2rem] text-white flex justify-center items-center'>
                                <p>Tu estilo de vida también puede salvar el planeta.</p>
                            </div>
                        </div>
                        <div className="relative row-span-3 col-start-5 row-start-1 rounded-lg bg-[url(./Img/plastico.jpg)] bg-size-[230px] bg-no-repeat bg-center">
                            <div className='z-10 absolute h-full w-full bg-linear-to-b from-black to-transparent rounded-lg opacity-70'></div>
                            <div className='relative h-full w-full z-20 text-white flex pt-6  px-4 text-[1.2rem] text-center'>
                                <p>Cada producto reutiliza hasta 12 botellas de plástico.</p>
                            </div>
                        </div>
                        <div className="relative row-span-3 col-start-5 row-start-4 bg-black rounded-lg bg-[url(./Img/BotellaEcologica.png)] bg-cover bg-center flex items-end">
                            <div className='z-10 absolute h-full w-full bg-linear-to-t from-black to-transparent rounded-lg opacity-85'></div>
                            <div className='relative z-20 text-[1.2rem] text-cente px-4 text-center pb-6'>
                                <p>Elige entre una gran variedad de productos sostenibles.</p>
                            </div>
                        </div>
                        <div className="relative col-span-2 row-span-2 col-start-3 row-start-5 rounded-lg bg-[url(./Img/ProductosEcologicos2.png)] bg-cover flex items-end">
                            <div className='z-10 absolute h-full w-full bg-linear-to-t from-black to-transparent rounded-lg opacity-85'></div>
                            <div className='relative z-20 py-6 w-full text-center text-[1.2rem]'>
                                <p>Tu rutina, ahora más ecológica.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
