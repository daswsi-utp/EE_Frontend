//UsContent.jsx
import React from 'react'
import Image from 'next/image'

const UsContent = () => {
    return (
        <div className="bg-white text-black font-sans">
            <section className="max-w-[1280px] mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-center mb-12 text-green-700">
                    Sobre Nosotros
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-green-600">Nuestra Historia</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Nacimos con la misión de transformar el consumo cotidiano en una acción positiva para el planeta.
                            Cada producto que ofrecemos está pensado para cuidar el medio ambiente y promover un estilo de vida consciente.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/Img/Ecologia.jpg"
                            alt="Nuestro propósito ecológico"
                            width={600}
                            height={400}
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="rounded-lg overflow-hidden shadow-lg md:order-2">
                        <Image
                            src="/Img/Bote.png"
                            alt="Productos sostenibles"
                            width={600}
                            height={400}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-green-600">Lo que creemos</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Creemos que pequeñas decisiones pueden generar grandes cambios. 
                            Por eso ofrecemos productos reutilizables, biodegradables y amigables con el ambiente. 
                            Estamos comprometidos con la transparencia, la calidad y la innovación sostenible.
                        </p>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-green-600">Nuestro Compromiso</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Nos esforzamos día a día por reducir el impacto ambiental de nuestras operaciones
                        y generar una comunidad que valore y promueva el respeto por la naturaleza.
                        Ser ecológico no es una moda, es una forma de vivir.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default UsContent
