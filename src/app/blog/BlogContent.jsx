'use client'
import React, { useState, useEffect } from 'react';

const BlogContent = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Evita errores de hidratación
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

  if (!hydrated) return null; // Evita errores de hydration

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Blog Ecológico</h1>
        <p className="text-gray-600 mt-2">Historias, consejos y experiencias del mundo sostenible</p>
      </div>

      {/* Guía para nuevos compradores */}
      <section>
        <h2 className="text-3xl font-semibold text-white mb-4">Guía para nuevos compradores</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          ¿Primera vez comprando productos ecológicos? No estás solo. Muchos de nuestros clientes comenzaron con dudas,
          pensando que estos productos serían difíciles de usar o costosos. Pero todo cambia cuando haces tu primera compra.
        </p>
        <p className="text-gray-700 mt-4">
          <strong>Ana, madre de dos hijos</strong>, nos compartió su experiencia: “Nunca imaginé que cambiar los productos de limpieza
          por opciones naturales haría sentir mejor a mi familia. ¡Y el aroma es espectacular!”.
        </p>
        <p className="text-gray-700 mt-4">
          Explora nuestra tienda, lee las etiquetas y si tienes dudas, escríbenos. ¡Estamos para ayudarte a comenzar tu viaje ecológico!
        </p>
      </section>

      {/* Motivación para productos ecológicos */}
      <section>
        <h2 className="text-3xl font-semibold text-white mb-4">Motivación para adoptar productos ecológicos</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Cuidar el planeta no tiene por qué ser complicado. Cada vez que eliges un producto biodegradable, sin plástico o sin químicos agresivos,
          estás tomando una decisión poderosa. Una decisión que impacta no solo tu salud, sino también la de futuras generaciones.
        </p>
        <p className="text-gray-700 mt-4">
          <strong>Carlos, ciclista urbano</strong>, nos cuenta: “Llevo años usando shampoo sólido y detergente en hojas. Me ahorro espacio, residuos y mi piel lo agradece”.
        </p>
        <p className="text-gray-700 mt-4">
          No se trata de ser perfecto, se trata de avanzar paso a paso. Incluso un pequeño cambio puede ser parte de algo grande.
        </p>
      </section>

      {/* Opiniones de compradores */}
      <section>
        <h2 className="text-3xl font-semibold text-white mb-4">Opiniones de compradores</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-800"
            placeholder="Escribe tu experiencia o sugerencia..."
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-white"
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

export default BlogContent
