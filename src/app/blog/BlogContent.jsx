'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const guiaDetalles = [
  {
    img: './Img/guia1.jpg',
    titulo: 'Bolsas ecológicas tipo algodón (biodegradables)',
    queEs: 'Son bolsas reutilizables hechas de fibras vegetales biodegradables como yute, cáñamo o algodón reciclado.',
    comoUsar: [
      'Úsalas en vez de bolsas plásticas para tus compras diarias.',
      'Si se ensucian, lávalas a mano con agua fría.',
      'Guárdalas dobladas en tu mochila o auto para tenerlas siempre a mano.'
    ]
  },
  {
    img: './Img/guia2.jpg',
    titulo: 'Esponjas de cocina hechas con fibras recicladas',
    queEs: 'Esponjas fabricadas con fibras textiles recuperadas de botellas PET, diseñadas para durar más y reducir residuos.',
    comoUsar: [
      'Úsalas igual que una esponja común para lavar platos o superficies.',
      'Enjuágalas después de cada uso y déjalas secar al aire.',
      'Cuando estén muy desgastadas, busca programas de retorno o reciclaje.'
    ]
  },
  {
    img: './Img/guia3.jpg',
    titulo: 'Velas ecológicas de cera vegetal',
    queEs: 'Velas hechas de cera de soya, coco o abeja, sin derivados del petróleo. Algunas vienen en frascos reciclados.',
    comoUsar: [
      'Úsalas para crear ambientes cálidos sin toxinas como la parafina.',
      'Corta la mecha a 0.5 cm antes de encenderla.',
      'Reutiliza el frasco como contenedor o maceta.'
    ]
  },
  {
    img: './Img/guia4.png',
    titulo: 'Shampoo sólido natural',
    queEs: 'Barra de shampoo sin envase plástico, hecha con ingredientes naturales aptos para distintos tipos de cabello.',
    comoUsar: [
      'Moja tu cabello y frota la barra entre tus manos o directamente sobre el cuero cabelludo.',
      'Masajea como con shampoo líquido y enjuaga bien.',
      'Deja secar la barra en una jabonera que drene agua.'
    ]
  }
];

const motivaciones = [
  {
    img: './Img/motivacion1.jpg',
    titulo: 'Cada pequeña acción cuenta',
    parrafos: [
      'Al elegir productos ecológicos, estás reduciendo tu huella ambiental sin esfuerzo.',
      'Cambiar tu esponja, tu shampoo o tus bolsas de compra puede parecer mínimo… pero multiplica ese cambio por millones de personas y el impacto es enorme.',
      '💚 Tu compra apoya un futuro más limpio para todos.'
    ]
  },
  {
    img: './Img/motivacion2.jpg',
    titulo: 'Consumo consciente = ahorro a largo plazo',
    parrafos: [
      'Los productos reutilizables y biodegradables no solo ayudan al planeta, también cuidan tu bolsillo.',
      'Al invertir en algo que puedes usar muchas veces o que vuelve a la naturaleza sin contaminarla, estás eligiendo calidad y durabilidad en vez de desechos constantes.',
      '♻️ Menos compras impulsivas, más valor real.'
    ]
  }
];

const BlogContent = () => {
  const [guiaIndex, setGuiaIndex] = useState(0);
  const [motivacionIndex, setMotivacionIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const savedComments = JSON.parse(localStorage.getItem("comentarios_blog")) || [];
    setComments(savedComments);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("comentarios_blog", JSON.stringify(comments));
    }
  }, [comments, hydrated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setComments([...comments, input]);
    setInput("");
  };

  if (!hydrated) return null;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black">Blog Ecológico</h1>
        <p className="text-gray-600 mt-2">Historias, consejos y experiencias del mundo sostenible</p>
      </div>

      {/* Guía para nuevos compradores */}
      <section className="h-screen relative">
        <h2 className="text-3xl font-semibold text-black text-center py-6">
          Guía para nuevos compradores
        </h2>

        <div className="relative w-full h-[85%] rounded-lg overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center relative rounded-lg transition-all duration-300"
            style={{ backgroundImage: `url(${guiaDetalles[guiaIndex].img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-lg"></div>

            <div className="relative z-10 h-full flex flex-col justify-center px-30 text-blue overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4">{guiaDetalles[guiaIndex].titulo}</h3>
              <p className="mb-4">{guiaDetalles[guiaIndex].queEs}</p>
              <ul className="list-disc list-inside space-y-2">
                {guiaDetalles[guiaIndex].comoUsar.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Flechas de navegación */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-green-700 hover:bg-green-600 hover:text-white rounded-full p-3 shadow-lg transition duration-300 z-20"
            onClick={() => setGuiaIndex((guiaIndex - 1 + guiaDetalles.length) % guiaDetalles.length)}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-green-700 hover:bg-green-600 hover:text-white rounded-full p-3 shadow-lg transition duration-300 z-20"
            onClick={() => setGuiaIndex((guiaIndex + 1) % guiaDetalles.length)}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </section>

      {/* Motivaciones */}
      <section className="h-screen relative">
        <h2 className="text-3xl font-semibold text-black text-center py-6">
          Motivación para adoptar productos ecológicos
        </h2>

        <div className="relative w-full h-[85%] rounded-lg overflow-hidden">
          {/* Fondo con capa oscura y texto */}
          <div
            className="w-full h-full bg-cover bg-center relative rounded-lg transition-all duration-300"
            style={{ backgroundImage: `url(${motivaciones[motivacionIndex].img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent rounded-lg"></div>

            {/* Texto motivacional adaptado */}
            <div className="relative z-10 h-full flex items-center justify-center px-30 pb-10 text-white text-2xl">
              <div className="bg-black/50 p-6 rounded-xl max-w-3xl">
                <h3 className="text-3xl font-bold mb-4">{motivaciones[motivacionIndex].titulo}</h3>
                {motivaciones[motivacionIndex].parrafos.map((p, i) => (
                  <p key={i} className="mb-3 leading-snug">{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Flecha Izquierda */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-green-700 hover:bg-green-600 hover:text-white rounded-full p-3 shadow-lg transition duration-300 z-20"
            onClick={() =>
              setMotivacionIndex((motivacionIndex - 1 + motivaciones.length) % motivaciones.length)
            }
          >
            <ChevronLeft size={28} />
          </button>

          {/* Flecha Derecha */}
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-green-700 hover:bg-green-600 hover:text-white rounded-full p-3 shadow-lg transition duration-300 z-20"
            onClick={() =>
              setMotivacionIndex((motivacionIndex + 1) % motivaciones.length)
            }
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </section>

      {/* Opiniones */}
      <section>
        <h2 className="text-3xl font-semibold text-black mb-4">Opiniones de compradores</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-800"
            placeholder="Escribe tu experiencia o sugerencia..."
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-white hover:text-green-600 transition"
          >
            Comentar
          </button>
        </form>
        <ul className="mt-6 space-y-4">
          {comments.map((c, i) => (
            <li key={i} className="text-gray-800 border-b pb-2">{c}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BlogContent;