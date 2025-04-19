import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbPaperBag } from "react-icons/tb";

const FLASH_SALE_PRODUCTS = [
  {
    id: 101,
    name: "Cepillo de Dientes de Bambú",
    image: "/Img/ProductosEcologicos2.png",
    price: 4.5,
    originalPrice: 9.0,
    discount: 50,
  },
  {
    id: 102,
    name: "Pajitas de Acero Inoxidable",
    image: "/Img/ProductosEcologicos2.png",
    price: 6.5,
    originalPrice: 13.0,
    discount: 50,
  },
  {
    id: 103,
    name: "Jabonera de Bambú",
    image: "/Img/ProductosEcologicos2.png",
    price: 5.0,
    originalPrice: 10.0,
    discount: 50,
  },
  {
    id: 104,
    name: "Esponja Natural",
    image: "/Img/ProductosEcologicos2.png",
    price: 3.5,
    originalPrice: 7.0,
    discount: 50,
  },
];

export default function FlashSale() {
  return (
    <section className="my-16 relative overflow-hidden bg-gradient-to-r from-teal-400 to-teal-500 rounded-3xl">
      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <AiOutlineThunderbolt className="h-6 w-6 text-white animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                ¡Flash Sale!
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solo Hoy: 50% de Descuento en Productos Seleccionados
            </h3>
            <div className="mb-4">
              <p className="text-white/90 mb-2">
                ¡Apresúrate! Quedan pocas unidades
              </p>
              <div className="w-full bg-white/30 rounded-full h-3 mb-2">
                <div
                  className="bg-white h-3 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {FLASH_SALE_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="relative mb-3 rounded-lg overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="object-cover w-full aspect-square"
                  />

                  <div className="absolute top-2 right-2 bg-primary p-2 mb-4 rounded-full text-white font-semibold text-sm flex items-center">
                    -{product.discount}%
                  </div>
                </div>
                <h4 className="font-bold text-white text-lg mb-1">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">
                      S/.{product.price}
                    </span>
                    <span className="text-white/70 line-through text-sm">
                      S/.{product.originalPrice}
                    </span>
                  </div>
                  <button className="rounded-full p-2 cursor-pointer bg-white/30 hover:bg-white/50">
                    <TbPaperBag className="size-8 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
