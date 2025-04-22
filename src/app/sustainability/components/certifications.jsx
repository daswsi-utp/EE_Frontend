import {
  BadgeCheck,
  Leaf,
  Globe,
  Handshake,
  CloudSun,
  HeartHandshake,
} from "lucide-react";

const CERTIFICATES = [
  {
    name: "Certificado B Corp",
    description: "Compromiso con el impacto social y ambiental positivo.",
    icon: <BadgeCheck className="w-8 h-8 text-green-300" />,
  },
  {
    name: "Consejo de Administración Forestal",
    description: "Gestión responsable de los bosques del mundo.",
    icon: <Leaf className="w-8 h-8 text-green-400" />,
  },
  {
    name: "Norma Global de Textiles Orgánicos",
    description: "Certificación de textiles ecológicos y sostenibles.",
    icon: <Globe className="w-8 h-8 text-green-500" />,
  },
  {
    name: "Certificado de Comercio Justo",
    description: "Apoyo a condiciones laborales y comerciales justas.",
    icon: <Handshake className="w-8 h-8 text-yellow-400" />,
  },
  {
    name: "Carbono Neutro",
    description: "Compensación total de emisiones de carbono.",
    icon: <CloudSun className="w-8 h-8 text-blue-300" />,
  },
  {
    name: "1% Para el Planeta",
    description: "Donación del 1% de las ventas para causas ambientales.",
    icon: <HeartHandshake className="w-8 h-8 text-blue-500" />,
  },
];

export default function Certifications() {
  return (
    <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-eco-forest text-white bg-teal-600 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Certificados
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Nos enorgullece cumplir y superar los estándares de sostenibilidad
            de la industria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {CERTIFICATES.map((cert, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full text-center shadow-lg hover:bg-white/20 transition-colors flex flex-col items-center"
            >
              <div className="flex items-center justify-center mb-3">
                <span className="w-10 h-10 rounded-full bg-white/80 font-bold flex items-center justify-center">
                  {cert.icon}
                </span>
              </div>
              <p className="text-base font-semibold mb-2">{cert.name}</p>
              <p className="text-xs opacity-80">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
