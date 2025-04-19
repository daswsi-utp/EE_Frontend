import { FaCheck } from "react-icons/fa";

export default function OfferCupon() {
  return (
    <section className="mb-24">
      <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transforma Tu Estilo de Vida. Salva El Planeta.
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Únete a miles de personas que ya están haciendo la diferencia con
              pequeños cambios en su día a día. Nuestros productos eco-friendly
              no solo son buenos para el planeta, sino también para tu bienestar
              y economía.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-teal-700 hover:bg-teal-100 px-8 py-6 text-lg rounded-xl transition cursor-pointer">
                Ver Todas las Ofertas
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl transition cursor-pointer">
                Conocer Más
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Oferta Exclusiva
            </h3>
            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <p className="text-white text-center mb-2">Usa el código:</p>
              <p className="text-3xl font-bold text-white text-center bg-white/10 py-3 rounded-lg">
                ECOUTP40
              </p>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-white">
                <FaCheck className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <p>40% de descuento en tu primera compra</p>
              </div>
              <div className="flex items-center gap-3 text-white">
                <FaCheck className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <p>Envío gratuito en pedidos +S/.50</p>
              </div>
              <div className="flex items-center gap-3 text-white">
                <FaCheck className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <p>Regalo sorpresa eco-friendly</p>
              </div>
              <div className="flex items-center gap-3 text-white">
                <FaCheck className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <p>Garantía de devolución de 30 días</p>
              </div>
            </div>
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg rounded-xl transition cursor-pointer">
              Usar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
