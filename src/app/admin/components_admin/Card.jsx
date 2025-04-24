import React from "react";

const Card = ({ title, children, image, footer }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 m-2">
      {image && (
        <img
          src={image}
          alt={title || "Card Image"}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        <div className="text-base text-gray-700">{children}</div>
      </div>
      {footer && <div className="p-4 border-t text-sm text-gray-500">{footer}</div>}
    </div>
  );
};

export default Card;
