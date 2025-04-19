import { RiDiscountPercentLine } from "react-icons/ri";
import { TbPaperBag } from "react-icons/tb";

export default function CardOffer({ product }) {
  return (
    <div className="overflow-hidden transition-all hover:shadow-lg group rounded-2xl bg-white shadow-md">
      <div className="relative">
        <img
          src={product.image || "/Img/ProductosEcologicos2.png"}
          alt={product.name || "Producto"}
          width={400}
          height={400}
          className="object-cover w-full h-[200px]"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-teal-500 p-2 mb-4 rounded-full text-white font-semibold text-sm flex items-center">
            <RiDiscountPercentLine className="inline-block mr-1 text-2xl" />
            {product.discount}% de descuento
          </div>
        )}
      </div>
      <div className="p-4 pb-0">
        <h4 className="text-lg">{product.name}</h4>
        <p className="text-gray-500 text-sm mb-2">
          {product.description}
        </p>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl">S/. {product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-500/40 line-through text-sm">
              S/. {product.oldPrice}
            </span>
          )}
        </div>
      </div>
      <div className="p-4 pt-0">
        <button className="w-full text-white py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 group-hover:bg-teal-600 transition cursor-pointer">
          <TbPaperBag className="inline-block mr-1 text-2xl" />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
