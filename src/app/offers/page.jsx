import { FaArrowDown, FaPercentage, FaStar, FaTag } from "react-icons/fa";
import CountdownTimer from "./countdown-timer";
import { RiDiscountPercentLine, RiPriceTag3Line } from "react-icons/ri";
import { TbPaperBag } from "react-icons/tb";

export default async function Page() {
  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <section className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700/70 to-teal-500/60 z-10" />
          <img
            src="/Img/ProductosEcologicos.png"
            alt="Eco-friendly products banner"
            width={1200}
            height={500}
            className="object-cover w-full h-[500px]"
          />
          <div className="relative z-20 p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left box-content">
            <div className="bg-primary p-2 mb-4 rounded-full text-white font-semibold text-sm flex items-center">
              <RiDiscountPercentLine className="inline-block mr-1 text-2xl" />
              Ofertas por tiempo limitado
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 ">
              Ofertas especiales ecológicas
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-6">
              Productos sostenibles a precios increíbles. ¡Cuida el planeta y
              ahorra dinero!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white w-56">
                <p className="text-sm uppercase font-medium mb-1">
                  La oferta finaliza en:
                </p>
                <CountdownTimer
                  targetDate={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)}
                />
              </div>
              <button className="mt-4 bg-teal-400 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition cursor-pointer">
                Comprar todas las ofertas
                <FaArrowDown className="inline-block ml-2 animate-bounce" />
              </button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-900">
                Ofertas ecológicas destacadas
              </h2>
              <p className="text-gray-600">
                Productos sostenibles a precios especiales
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="overflow-hidden transition-all hover:shadow-lg group rounded-2xl bg-white shadow-md">
              <div className="relative">
                <img
                  src="/Img/ProductosEcologicos2.png"
                  alt="producto 1"
                  width={400}
                  height={400}
                  className="object-cover w-full h-[200px]"
                />
                <div className="absolute top-2 right-2 bg-teal-500 p-2 mb-4 rounded-full text-white font-semibold text-sm flex items-center">
                  <RiDiscountPercentLine className="inline-block mr-1 text-2xl" />
                  30% de descuento
                </div>
                <div className="absolute top-2 left-2 bg-teal-500 p-2 mb-4 rounded-full text-white font-semibold text-sm flex items-center">
                  <RiPriceTag3Line  className="inline-block mr-1 text-2xl" />
                  Ecológico
                </div>
              </div>
              <div className="p-4 pb-0">
                <h4 className="text-lg">Producto Ecológico 1</h4>
                <p className="text-gray-500 text-sm mb-2">
                  Descripción breve del producto ecológico 1.
                </p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    <FaStar className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                    <FaStar className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  </div>
                  <span className="text-sm text-gray-500">
                    4.5 (200 reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">S/. 50</span>
                  <span className="text-gray-500 line-through text-sm">
                    S/. 70
                  </span>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full text-white py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 group-hover:bg-teal-600 transition cursor-pointer">
                  <TbPaperBag className="inline-block mr-1 text-2xl" />
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-teal-800/70 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Obtenga ofertas ecológicas exclusivas
            </h2>
            <p className="mb-6">
              Suscríbete a nuestro boletín informativo y sé el primero en
              enterarte de nuestros nuevos productos y ofertas especiales.
            </p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ingrese su correo electrónico"
                className="px-4 py-2 rounded-lg flex-1 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-400 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition cursor-pointer">
                Reclamar oferta
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
