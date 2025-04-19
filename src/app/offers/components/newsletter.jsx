export default function Newsletter() {
  return (
    <section className="bg-teal-500 rounded-3xl p-8 text-white mb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Obtenga ofertas ecológicas exclusivas
        </h2>
        <p className="mb-6">
          Suscríbete a nuestro boletín informativo y sé el primero en enterarte
          de nuestros nuevos productos y ofertas especiales.
        </p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Ingrese su correo electrónico"
            className="px-4 py-2 rounded-lg flex-1 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-teal-400 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition cursor-pointer">
            Subcribirse
          </button>
        </div>
      </div>
    </section>
  );
}
