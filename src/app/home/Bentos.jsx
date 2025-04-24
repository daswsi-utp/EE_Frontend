import Image from 'next/image';
import React from 'react';

const Bentos = () => {
  return (
    <section className={`h-[88vh] max-w-[1280px] m-auto`}>
      <div className="grid grid-cols-5 grid-rows-6 gap-6 p-6 h-full text-white">
        <div
          className="col-span-4 bg-cover bg-center row-span-4 rounded-lg relative transition-transform duration-500 hover:scale-[1.02]"
          style={{ backgroundImage: "url('./Img/Ecologia.jpg')" }}
        >
          <div className="z-10 absolute h-full w-full bg-linear-to-r from-black to-transparent rounded-lg opacity-70"></div>
          <div className="z-20 relative flex justify-center items-center h-full w-full pl-20">
            <p className="text-white text-[3.5rem]">Transforma tu vida con productos 100% ecológicos</p>
          </div>
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-5 rounded-lg overflow-hidden relative transition-transform duration-500 hover:scale-[1.05]">
          <div className="z-10 absolute h-full w-full bg-linear-to-r from-black to-transparent rounded-lg opacity-85"></div>
          <Image
            className="absolute bottom-0 right-0"
            width={500}
            height={500}
            src="/Img/Bote.png"
            alt="Bote de Basura"
          />
          <div className="z-20 relative h-full w-[40%] ml-12 text-[1.2rem] text-white flex justify-center items-center">
            <p>Tu estilo de vida también puede salvar el planeta.</p>
          </div>
        </div>
        <div
          className="relative row-span-3 col-start-5 row-start-1 rounded-lg bg-no-repeat bg-centertransition-transform duration-500 hover:scale-[1.05]"
          style={{
            backgroundImage: "url('./Img/plastico.jpg')",
            backgroundSize: '230px',
          }}
        >
          <div className="z-10 absolute h-full w-full bg-linear-to-b from-black to-transparent rounded-lg opacity-70"></div>
          <div className="relative h-full w-full z-20 text-white flex pt-6 px-4 text-[1.2rem] text-center">
            <p>Cada producto reutiliza hasta 12 botellas de plástico.</p>
          </div>
        </div>
        <div
          className="relative row-span-3 col-start-5 row-start-4 bg-black rounded-lg bg-cover bg-center flex items-end transition-transform duration-500 hover:scale-[1.05]"
          style={{ backgroundImage: "url('./Img/BotellaEcologica.png')" }}
        >
          <div className="z-10 absolute h-full w-full bg-linear-to-t from-black to-transparent rounded-lg opacity-85"></div>
          <div className="relative z-20 text-[1.2rem] text-cente px-4 text-center pb-6">
            <p>Elige entre una gran variedad de productos sostenibles.</p>
          </div>
        </div>
        <div
          className="relative col-span-2 row-span-2 col-start-3 row-start-5 rounded-lg bg-cover flex items-end transition-transform duration-500 hover:scale-[1.05]"
          style={{ backgroundImage: "url('./Img/ProductosEcologicos2.png')" }}
        >
          <div className="z-10 absolute h-full w-full bg-linear-to-t from-black to-transparent rounded-lg opacity-85"></div>
          <div className="relative z-20 py-6 w-full text-center text-[1.2rem]">
            <p>Tu rutina, ahora más ecológica.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentos;
