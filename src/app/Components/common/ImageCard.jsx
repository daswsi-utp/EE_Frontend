import React from 'react';
import Image from 'next/image';

const ImageCard = ({ src, alt, width = 600, height = 400, className = '' }) => {
  if (!src || typeof src !== 'string') return null;

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <Image src={src} alt={alt} width={width} height={height} className="object-cover" />
    </div>
  );
};

export default ImageCard;