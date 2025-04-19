'use client';

import { useRef } from 'react';
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const Carousel = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = container.offsetWidth / 1.2;
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const products = [
        {
            id: 1,
            name: "Botella de Agua de Bambú",
            price: 18.99,
            image: "./Img/producto4.jpg",
            rating: 4.7,
            discount: "20%"
        },
        {
            id: 2,
            name: "Cepillos de Dientes de Bambú (Pack x4)",
            price: 9.99,
            image: "./Img/producto2.jpg",
            rating: 4.6,
            discount: "15%"
        },
        {
            id: 3,
            name: "Bolsas Reutilizables para Compras",
            price: 12.49,
            image: "./Img/producto3.jpg",
            rating: 4.8,
            discount: null
        },
        {
            id: 4,
            name: "Papel Higiénico de Bambú (12 rollos)",
            price: 24.99,
            image: "./Img/producto1.jpg",
            rating: 4.4,
            discount: "10%"
        },
        {
            id: 5,
            name: "Detergente Ecológico Concentrado",
            price: 15.99,
            image: "./Img/producto5.jpg",
            rating: 4.5,
            discount: "25%"
        },
        {
            id: 6,
            name: "Taza de Café de Fibra de Arroz",
            price: 8.49,
            image: "./Img/producto6.jpg",
            rating: 4.3,
            discount: null
        },
        {
            id: 7,
            name: "Panel Solar Portátil USB",
            price: 39.99,
            image: "./Img/producto7.jpg",
            rating: 4.6,
            discount: "5%"
        },
        {
            id: 8,
            name: "Jabonera de Corcho Natural",
            price: 6.99,
            image: "./Img/producto8.jpg",
            rating: 4.9,
            discount: null
        }
    ];
    

    const RatingStars = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        return (
            <div className="flex text-yellow-400">
                {[...Array(fullStars)].map((_, i) => (
                    <span key={i}>★</span>
                ))}
                {hasHalfStar && <span>½</span>}
                {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                    <span key={i + fullStars + (hasHalfStar ? 1 : 0)} className="text-gray-300">★</span>
                ))}
            </div>
        );
    };

    return (
        <div className="w-full flex px-9 py-6 border justify-center items-center">
            <div className="flex justify-center items-center">
                <button
                    onClick={() => scroll('left')}
                    className="z-10 bg-white text-primary cursor-pointer p-2 rounded-full w-10 h-10 hover:bg-gray-100 shadow-md
                    flex justify-center items-center"
                    aria-label="Desplazar a la izquierda"
                >
                    <FaAnglesLeft />
                </button>
            </div>
            
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar mx-5 border py-2"
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-[250px] h-[350px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                    >
                        <div className="relative h-40 bg-gray-100">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover object-center"
                            />
                            {product.discount && (
                                <div className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded">
                                    -{product.discount}
                                </div>
                            )}
                        </div>
                        
                        <div className="p-4">
                            <h3 className="font-semibold text-[16px] text-primary truncate">{product.name}</h3>
                            
                            <div className="mt-1">
                                <RatingStars rating={product.rating} />
                            </div>
                            
                            <div className="mt-2 flex items-baseline">
                                <span className="text-[18px] font-[600] text-gray-900">
                                    S/. {product.price.toFixed(2)}
                                </span>
                                {product.discount && (
                                    <span className="ml-2 text-[13px] text-gray-500 line-through">
                                        S/. {(product.price / (1 - parseInt(product.discount) / 100)).toFixed(2)}
                                    </span>
                                )}
                            </div>
                            
                            <button className="mt-4 w-full cursor-pointer bg-primary text-white text-[15px] py-2 rounded-md hover:bg-secondary transition-colors font-[700]">
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-center items-center">
                <button
                    onClick={() => scroll('right')}
                    className="z-10 bg-white text-primary cursor-pointer p-2 rounded-full w-10 h-10 hover:bg-gray-100 shadow-md
                    flex justify-center items-center"
                    aria-label="Desplazar a la derecha"
                >
                    <FaAnglesRight />
                </button>
            </div>       
        </div>
    );
};

export default Carousel;