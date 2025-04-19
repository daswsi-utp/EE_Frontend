import { FaArrowDown } from "react-icons/fa";
import CountdownTimer from "./components/countdown-timer";
import { RiDiscountPercentLine } from "react-icons/ri";
import Newsletter from "./components/newsletter";
import CardOffer from "./components/card-offer";

const PRODUCTS = [
  {
    id: 1,
    name: "Producto Ecológico 1",
    description: "Descripción breve del producto ecológico 1.",
    price: 50,
    oldPrice: 70,
    discount: 30,
    image: "/Img/ProductosEcologicos2.png",
  },
  {
    id: 2,
    name: "Producto Ecológico 2",
    description: "Descripción breve del producto ecológico 2.",
    price: 40,
    oldPrice: 60,
    discount: 33,
    image: "/Img/ProductosEcologicos2.png",
  },
  {
    id: 3,
    name: "Producto Ecológico 3",
    description: "Descripción breve del producto ecológico 3.",
    price: 30,
    oldPrice: 50,
    discount: 40,
    image: "/Img/ProductosEcologicos2.png",
  },
  {
    id: 4,
    name: "Producto Ecológico 3",
    description: "Descripción breve del producto ecológico 3.",
    price: 30,
    oldPrice: 50,
    discount: 40,
    image: "/Img/ProductosEcologicos2.png",
  },
  {
    id: 5,
    name: "Producto Ecológico 4",
    description: "Descripción breve del producto ecológico 4.",
    price: 30,
    oldPrice: 50,
    discount: 40,
    image: "/Img/ProductosEcologicos2.png",
  }
]

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
              <a href="#products" className="mt-4 bg-teal-400 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition cursor-pointer">
                Comprar todas las ofertas
                <FaArrowDown className="inline-block ml-2 animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"  id="products">
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
            {PRODUCTS.map((product, index) => (
              <CardOffer key={index} product={product} />
            ))}
          </div>
        </section>

        <Newsletter />
      </div>
    </>
  );
}
