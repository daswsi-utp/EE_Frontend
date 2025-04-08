import Header from '@/app/Components/Header'
import React from 'react'

const Home = () => {
    return (
        
        <div className='bg-[url(/Img/Background.jpg)] bg-cover bg-center h-[100vh] w-[100vw] relative'>
            <div className='h-[100vh] w-[100vw] absolute bg-black opacity-28'></div>
            <Header/>
        </div>
    )
}

export default Home
