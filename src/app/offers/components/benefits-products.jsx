import { FaShieldAlt, FaTruck, FaRecycle, FaGlobe } from "react-icons/fa";

export default function BenefitsProducts() {
  return (
    <section className="mb-12">
      <div className="bg-white/30 backdrop-blur-sm py-12 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FaShieldAlt className="w-12 h-12 text-teal-500 mb-3" />
              <h4 className="font-semibold text-gray-900">100% Seguro</h4>
            </div>
            <div className="flex flex-col items-center">
              <FaTruck className="w-12 h-12 text-teal-500 mb-3" />
              <h4 className="font-semibold text-gray-900">Envío Rápido</h4>
            </div>
            <div className="flex flex-col items-center">
              <FaRecycle className="w-12 h-12 text-teal-500 mb-3" />
              <h4 className="font-semibold text-gray-900">100% Ecológico</h4>
            </div>
            <div className="flex flex-col items-center">
              <FaGlobe className="w-12 h-12 text-teal-500 mb-3" />
              <h4 className="font-semibold text-gray-900">
                Globalmente Sostenible
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
