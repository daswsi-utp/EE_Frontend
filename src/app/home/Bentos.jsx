import React from 'react';

const Bentos = () => {
  return (
    <section className="h-auto lg:h-[88vh] max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-6 gap-4 md:gap-6 p-4 md:p-6 h-full text-white">
        {/* Banner principal */}
        <div
          className="lg:col-span-4 col-span-1 row-span-3 lg:row-span-4 bg-cover bg-center rounded-lg relative transition-transform duration-500 hover:scale-[1.02] h-72 sm:h-80 md:h-96 lg:h-auto"
          style={{ backgroundImage: "url('./Img/Ecologia.jpg')" }}
        >
          <div className="z-10 absolute h-full w-full bg-linear-to-r from-black to-transparent rounded-lg opacity-70"></div>
          <div className="z-20 relative flex justify-center items-center h-full w-full pl-4 lg:pl-20">
            <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[3.5rem] text-center lg:text-left">
              Transforma tu vida con productos 100% ecológicos
            </p>
          </div>
        </div>

        {/* Bote */}
        <div className="col-span-1 row-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-5 rounded-lg overflow-hidden relative transition-transform duration-500 hover:scale-[1.05] h-60 sm:h-auto">
          <div className="z-10 absolute h-full w-full bg-linear-to-r from-black to-transparent rounded-lg opacity-85"></div>
          <img
            className="absolute bottom-0 right-0 w-1/2 lg:w-auto h-full object-contain object-right"
            src="./Img/Bote.png"
            alt="Bote de Basura"
          />
          <div className="z-20 relative h-full w-[60%] lg:w-[40%] ml-4 lg:ml-12 text-sm sm:text-base lg:text-[1.2rem] flex justify-center items-center">
            <p>Tu estilo de vida también puede salvar el planeta.</p>
          </div>
        </div>

        {/* Plástico */}
        <div
          className="relative row-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-1 rounded-lg bg-no-repeat bg-center transition-transform duration-500 hover:scale-[1.05] h-60 sm:h-auto"
          style={{
            backgroundImage: "url('./Img/plastico.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="z-10 absolute h-full w-full bg-linear-to-b from-black to-transparent rounded-lg opacity-70"></div>
          <div className="relative h-full w-full z-20 flex pt-6 px-4 text-sm sm:text-base lg:text-[1.2rem] text-center">
            <p>Cada producto reutiliza hasta 12 botellas de plástico.</p>
          </div>
        </div>

        {/* Botella */}
        <div
          className="relative row-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-4 bg-black rounded-lg bg-cover bg-center flex items-end transition-transform duration-500 hover:scale-[1.05] h-60 sm:h-auto"
          style={{ backgroundImage: "url('./Img/BotellaEcologica.png')" }}
        >
          <div className="z-10 absolute h-full w-full bg-linear-to-t from-black to-transparent rounded-lg opacity-85"></div>
          <div className="relative z-20 text-sm sm:text-base lg:text-[1.2rem] text-center px-4 pb-6">
            <p>Elige entre una gran variedad de productos sostenibles.</p>
          </div>
        </div>

        {/* Productos ecológicos */}
        <div
          className="relative col-span-1 lg:col-span-2 row-span-2 lg:col-start-3 lg:row-start-5 rounded-lg bg-cover flex items-end transition-transform duration-500 hover:scale-[1.05] h-60 sm:h-auto"
          style={{ backgroundImage: "url('./Img/ProductosEcologicos2.png')" }}
        >
          <div className="z-10 absolute h-full w-full bg-linear-to-t from-black to-transparent rounded-lg opacity-85"></div>
          <div className="relative z-20 py-6 w-full text-center text-sm sm:text-base lg:text-[1.2rem]">
            <p>Tu rutina, ahora más ecológica.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentos;
