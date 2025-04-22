// components/common/ImageCard.jsx
import React from 'react';
import Image from 'next/image';

const ImageCard = ({ src, alt, width = 600, height = 400, className = '' }) => (
  <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
    <Image src={src} alt={alt} width={width} height={height} className="object-cover" />
  </div>
);

export default ImageCard;
