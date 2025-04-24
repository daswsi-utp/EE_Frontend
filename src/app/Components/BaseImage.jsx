'use client';

import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function BaseImage({ src, ...props }) {
  const finalSrc = src?.startsWith('http') ? src : `${basePath}${src}`;
  return <Image src={finalSrc} {...props} />;
}
