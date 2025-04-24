import Image from 'next/image';
import React from 'react';

const Card = ({ url, titule, context }) => {
  return (
    <div className="w-[280px] rounded-lg overflow-hidden shadow-md h-[545px] bg-white">
      <img className="w-full" src={`/Img/${url}`} alt={titule} />
      <div className="text-black px-6 pt-3 pb-5 flex flex-col gap-2 justify-between h-[355px]">
        <div className="mb-2">
          <p className="text-Quaternary font-[800] text-[20px] mb-2 mt-1">{titule}</p>
          <p className="font-[400] text-[14px] text-balance">{context}</p>
        </div>
        <button className="bg-Quaternary text-white p-1 px-4 rounded-lg ">Conoce más</button>
      </div>
    </div>
  );
};

export default Card;
