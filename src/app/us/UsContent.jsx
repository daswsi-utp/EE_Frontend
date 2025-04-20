import React from 'react'
import Image from 'next/image'

const UsContent = () => {
    const timeline = [
        {
            year: '2018',
            title: 'Nacimiento de EcoVida',
            description: 'Fundamos EcoVida con una línea de productos de limpieza reutilizables.'
        },
        {
            year: '2019',
            title: 'Primera tienda física',
            description: 'Abrimos nuestra primera tienda física en Arequipa.'
        },
        {
            year: '2020',
            title: 'Tienda online',
            description: 'Lanzamos nuestra tienda online y duplicamos nuestras ventas.'
        },
        {
            year: '2022',
            title: 'Producción sostenible',
            description: 'Integramos materiales reciclados en el 80% de nuestros productos.'
        },
        {
            year: '2024',
            title: 'Reconocimiento nacional',
            description: 'Somos reconocidos como una de las startups más verdes del país.'
        }
    ]

    return (
        <div className="bg-white text-black font-sans">
            <section className="max-w-[1280px] mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-center mb-12 text-green-700">
                    Sobre Nosotros
                </h1>

                {/* Nuestra historia */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-green-600">Nuestra Historia</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                        EcoVida surgió en el año 2018, impulsada por una visión clara y esperanzadora: 
                        contribuir activamente a la construcción de un planeta más limpio y saludable, 
                        empezando por cambiar los hábitos cotidianos de las personas. Lo que inicialmente 
                        fue una modesta tienda ubicada en un pequeño local de Lima, dedicada exclusivamente 
                        a la venta de productos biodegradables, pronto se convirtió en el punto de partida 
                        de una revolución verde.

                        Motivados por la creciente preocupación ambiental y el deseo de marcar una diferencia 
                        real, un grupo de jóvenes emprendedores decidió dar el salto y expandir el concepto más 
                        allá del comercio. Así nació EcoVida como un movimiento social y ecológico, enfocado 
                        en fomentar una conciencia ambiental a través de la educación, la acción comunitaria 
                        y la innovación en productos sostenibles.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/Img/Crecer.png"
                            alt="Nuestro propósito ecológico"
                            width={600}
                            height={400}
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Línea de tiempo horizontal */}
                <div className="mb-24">
                    <h2 className="text-2xl font-semibold mb-10 text-center text-green-600">Nuestra Evolución</h2>
                    <div className="overflow-x-auto">
                        <div className="flex items-center justify-between space-x-10 min-w-[800px] px-4 py-8 border-t border-b border-gray-300 relative">
                            {timeline.map((event, index) => (
                                <div key={index} className="text-center relative">
                                    <div className="w-6 h-6 bg-green-600 rounded-full mx-auto mb-2"></div>
                                    <div className="w-[200px] bg-gray-50 p-4 rounded-lg shadow-md">
                                        <h3 className="text-green-700 font-semibold text-lg">{event.year}</h3>
                                        <p className="font-bold text-gray-800">{event.title}</p>
                                        <p className="text-sm text-gray-600">{event.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Creencias */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="rounded-lg overflow-hidden shadow-lg md:order-2">
                        <Image
                            src="/Img/Dar.jpg"
                            alt="Productos sostenibles"
                            width={600}
                            height={400}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-green-600">Lo que creemos</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                        En EcoVida estamos convencidos de que el verdadero cambio empieza en los pequeños 
                        actos del día a día, dentro de nuestros propios hogares. Creemos que cada elección 
                        consciente, desde reutilizar una botella hasta optar por una bolsa compostable,
                        suma en la construcción de un futuro más sostenible. Nos motiva profundamente 
                        la idea de que es posible consumir de manera responsable sin renunciar a la calidad, 
                        la funcionalidad ni al estilo. Nos inspiran aquellas personas que buscan vivir en 
                        armonía con el planeta, tomando decisiones que reflejan un compromiso real con el 
                        bienestar del entorno y de las generaciones futuras.
                        </p>
                    </div>
                </div>

                {/* Compromiso */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-green-600">Nuestro Compromiso</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                    En EcoVida, asumimos un compromiso firme con la sostenibilidad, la inclusión social y la 
                    educación ambiental como pilares fundamentales de nuestra misión. No solo ofrecemos productos 
                    ecológicos, sino que también destinamos una parte significativa de nuestras ganancias a 
                    programas de concientización y proyectos educativos que buscan empoderar a las personas 
                    para que adopten prácticas más responsables. Colaboramos activamente con comunidades locales, 
                    brindándoles herramientas, talleres y oportunidades que promuevan el desarrollo sostenible 
                    desde la base. Creemos que el cambio verdadero ocurre cuando todos participamos, por eso 
                    trabajamos día a día para generar un impacto positivo que trascienda lo comercial y transforme realidades.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default UsContent
