import Image from "next/image";

export default function HeroSustainability() {
  return (
    <section className="relative w-full h-[50vh] overflow-hidden mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-700/80 to-teal-500/80 z-10" />
      <Image
        src="/Img/Background.jpg"
        alt="Nature landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Nuestro compromiso con la <span className="text-white font-extrabold italic">sostenibilidad</span> 
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          En Verde Raiz, nos esforzamos por reducir nuestra huella de
          carbono y promover prácticas sostenibles en todas nuestras
          operaciones. Descubre cómo estamos haciendo la diferencia.  
        </p>
      </div>
    </section>
  );
}
