import React from 'react'
import { Montserrat_Alternates } from 'next/font/google'
import SectionTitle from '../Components/common/SectionTitle'
import ContentSection from '../Components/common/ContentSection'
import Timeline from '../Components/timeline/Timeline'
import Footer from '../home/Footer';
import Image from 'next/image'; 


const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal','italic'],
  display: 'swap',
})

const UsContent = () => {
  const timelineData = [
    { year: '2018', title: 'Nacimiento de EcoVida', description: 'Fundamos EcoVida con una línea de productos de limpieza reutilizables.' },
    { year: '2019', title: 'Primera tienda física', description: 'Abrimos nuestra primera tienda física en Arequipa.' },
    { year: '2020', title: 'Tienda online', description: 'Lanzamos nuestra tienda online y duplicamos nuestras ventas.' },
    { year: '2022', title: 'Producción sostenible', description: 'Integramos materiales reciclados en el 80% de nuestros productos.' },
    { year: '2024', title: 'Reconocimiento nacional', description: 'Somos reconocidos como una de las startups más verdes del país.' },
  ]

  return (
    <div className={`${montserrat.className} bg-white text-black font-sans`}>
      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-green-700">
          Sobre Nosotros
        </h1>

        <ContentSection
          title="Nuestra Historia"
          imageComponent={
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image src="/Img/Crecer.png" alt="Nuestro propósito ecológico" width={600} height={400} className="object-cover" />
            </div>
          }
        >
          <p>
            EcoVida surgió en el año 2018, impulsada por una visión clara y esperanzadora: contribuir activamente a la construcción de un planeta más limpio y saludable, empezando por cambiar los hábitos cotidianos de las personas. Lo que inicialmente fue una modesta tienda ubicada en un pequeño local de Lima, dedicada exclusivamente a la venta de productos biodegradables, pronto se convirtió en el punto de partida de una revolución verde.
          </p>
          <p>
            Motivados por la creciente preocupación ambiental y el deseo de marcar una diferencia real, un grupo de jóvenes emprendedores decidió dar el salto y expandir el concepto más allá del comercio. Así nació EcoVida como un movimiento social y ecológico, enfocado en fomentar una conciencia ambiental a través de la educación, la acción comunitaria y la innovación en productos sostenibles.
          </p>
        </ContentSection>

        <Timeline events={timelineData} />

        <ContentSection
          title="Lo que creemos"
          imageLeft
          imageComponent={
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image src="/Img/Dar.jpg" alt="Productos sostenibles" width={600} height={400} className="object-cover" />
            </div>
          }
        >
          <p>
            En EcoVida estamos convencidos de que el verdadero cambio empieza en los pequeños actos del día a día, dentro de nuestros propios hogares. Creemos que cada elección consciente, desde reutilizar una botella hasta optar por una bolsa compostable, suma en la construcción de un futuro más sostenible. Nos motiva profundamente la idea de que es posible consumir de manera responsable sin renunciar a la calidad, la funcionalidad ni al estilo. Nos inspiran aquellas personas que buscan vivir en armonía con el planeta, tomando decisiones que reflejan un compromiso real con el bienestar del entorno y de las generaciones futuras.
          </p>
        </ContentSection>

        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle>Nuestro Compromiso</SectionTitle>
          <p>
            En EcoVida, asumimos un compromiso firme con la sostenibilidad, la inclusión social y la educación ambiental como pilares fundamentales de nuestra misión. No solo ofrecemos productos ecológicos, sino que también destinamos una parte significativa de nuestras ganancias a programas de concientización y proyectos educativos que buscan empoderar a las personas para que adopten prácticas más responsables. Colaboramos activamente con comunidades locales, brindándoles herramientas, talleres y oportunidades que promuevan el desarrollo sostenible desde la base. Creemos que el cambio verdadero ocurre cuando todos participamos, por eso trabajamos día a día para generar un impacto positivo que trascienda lo comercial y transforme realidades.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default UsContent
