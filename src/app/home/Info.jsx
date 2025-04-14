import React from 'react'
import Card from './Card'

const Info = () => {
    return (
        <section className='w-full h-[100vh] bg-tertiary overflow-hidden p-10 flex gap-20 justify-center items-center'>
            <Card 
                url="bambu.jpg" 
                titule="Materiales Sostenibles"
                context="Todos nuestros productos están fabricados con materiales 100% sostenibles, biodegradables o reciclados. Desde bambú y algodón orgánico hasta plásticos recuperados de los océanos, cada material es cuidadosamente seleccionado para minimizar nuestro impacto ambiental."    
            />
            <Card 
                url="ProduccionEtica.jpg" 
                titule="Producción Ética"
                context="Trabajamos exclusivamente con fabricantes que garantizan condiciones laborales justas y dignas. Creemos en un comercio justo donde cada persona en la cadena de producción reciba una compensación adecuada por su trabajo, creando un ciclo de bienestar para todos."    
            />
            <Card 
                url="EmpaquesEcoAmigables.jpg" 
                titule="Empaques Eco amigables"
                context="Nos comprometemos a reducir los residuos al mínimo utilizando empaques compostables, biodegradables o reutilizables. Nuestro objetivo es eliminar el plástico de un solo uso de toda nuestra cadena de distribución, contribuyendo a la reducción de la contaminación global."    
            />
            <Card 
                url="HuellaDeCarbono.jpg" 
                titule="Huella de Carbono Reducida"
                context="Calculamos y compensamos la huella de carbono de cada producto, desde su fabricación hasta la entrega en tu hogar. Por cada compra, plantamos árboles a través de nuestros socios forestales y financiamos proyectos de energía renovable para contrarrestar las emisiones."    
            />
        </section>
    )
}

export default Info
