"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { portfolioItems } from '@/utils/cv';

export function Carousel() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild?.clientWidth || 0;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild?.clientWidth || 0;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
     
      <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10">
      <button
        type='button'
        title='Next project'
           onClick={scrollPrev}
          className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          <GoArrowLeft size={32} />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">

        <button
        type='button'
        title='Next project'
           onClick={scrollNext}
          className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          <GoArrowRight size={32} />
        </button>
      </div>

      
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth space-x-4 no-scrollbar"
      >
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] lg:min-w-[33%] flex-shrink-0 rounded-lg bg-cover bg-center text-white h-[400px] flex items-end"
            style={{ backgroundImage: `url(${item.img[0].src})` }}
          >
            <div className="bg-black/80 w-full py-6 px-4 rounded-b-lg">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm mb-2">{item.description}</p>
              <Link
                href={item.url}
                className="inline-flex items-center gap-2 text-white hover:text-black hover:bg-white border border-[#464646] px-4 py-1 rounded-full transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer más <GoArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
