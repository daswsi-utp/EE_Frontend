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
        <div className='bg-[url(/Img/Background.jpg)] bg-cover bg-center h-screen w-screen relative'>

            <div className='h-full w-full absolute bg-gradient-to-b from-black/30 to-black/50'></div>
            
            <div className='relative z-10'>
                <Header/>
                <section className={`pb-6 h-[88vh] flex flex-col items-center justify-center ${montserrat.className}`}>
                    <div className=' backdrop-blur-md rounded-xl px-15 py-10 mx-4 bg-[rgba(255,255,255,0.15)]'>
                        <h2 className="text-4xl md:text-6xl text-nowrap font-[700] text-gray-300 leading-tight tracking-tight">
                            Transforma<span className="text-teal-400 drop-shadow-md"> tu consumo,</span><br className="hidden md:block" />
                            cuida<span className="bg-gradient-to-r from-emerald-300 to-green-400 text-transparent bg-clip-text"> tu mundo.</span>
                        </h2>
                        <p className="mt-4 text-xl text-white/95 font-light text-nowrap">
                            Productos ecológicos, reciclados y saludables para ti y el planeta.
                        </p>
                    </div>
                    
                    <a href="#productos" className="mt-10 inline-flex items-center bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-lg font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1 group">
                        Explorar productos sostenibles
                    </a>
                </section>
            </div>
        </div>
    )
}

export default Home