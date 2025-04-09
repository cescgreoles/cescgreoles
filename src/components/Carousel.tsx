"use client"



import React, { useState } from 'react';
import Link from 'next/link';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { portfolioItems } from '@/utils/cv';

export function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);

  
  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to previous project
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
   
        <div
          key={currentIndex}
          className="rounded-lg bg-cover bg-center text-white flex justify-end"
          style={{ backgroundImage: `url(${portfolioItems[currentIndex].img[0].src})` }}
        >
          <div className="w-1/2 bg-black/85 px-8 py-4 rounded flex flex-col gap-5">
            <h2 className="text-[18px] font-bold">{portfolioItems[currentIndex].name}</h2>
            <p className="text-[18px]">{portfolioItems[currentIndex].description}</p>
            <Link
              href={portfolioItems[currentIndex].url}
              className="flex flex-row gap-5 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center items-center w-[300px] h-15 border border-[#464646] rounded-full px-16">
                <span className="text-[32px]">Leer más</span>
              </div>
              <div className="w-15 h-15 border border-[#464646] rounded-full flex items-center justify-center">
                <GoArrowRight size={32} />
              </div>
            </Link>
          </div>
        </div>
      </div>

     
      <div className="opacity-15 absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
            type='button'
        title='Next project'
          onClick={prevProject}
          className="z-10 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          <GoArrowLeft size={32} />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
        type='button'
        title='Next project'
          onClick={nextProject}
          className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          <GoArrowRight size={32} />
        </button>
      </div>
    </div>
  );
}
