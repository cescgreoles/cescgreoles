"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { portfolioItems } from "@/utils/cv";

export function Carousel() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const scrollNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild
        ? (sliderRef.current.firstChild as HTMLElement).clientWidth + 40 // +gap
        : 0;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild
        ? (sliderRef.current.firstChild as HTMLElement).clientWidth + 40
        : 0;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const centerX = slider.scrollLeft + slider.offsetWidth / 2;

      let minDistance = Infinity;
      let closestIndex = 0;

      Array.from(slider.children).forEach((child, index) => {
        const el = child as HTMLElement;
        const elCenterX = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(centerX - elCenterX);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setVisibleIndex(closestIndex);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <div className="relative w-full">
     
      <div className="hidden md:absolute md:px-12 md:top-1/2 md:left-2 md:-translate-y-1/2 md:z-10">
        <button
          type="button"
          onClick={scrollPrev}
          className="bg-[#1C1C1C] text-white p-5 border border-white rounded-full shadow-lg hover:bg-[#464646] transition-all duration-300"
        >
          <GoArrowLeft size={32} />
        </button>
      </div>
      <div className="hidden md:absolute md:px-12 md:top-1/2 md:right-2 md:-translate-y-1/2 md:z-10">
        <button
          type="button"
          onClick={scrollNext}
          className="bg-[#1C1C1C] text-white p-5 border border-white rounded-full shadow-lg hover:bg-[#464646] transition-all duration-300"
        >
          <GoArrowRight size={32} />
        </button>
      </div>



      
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth gap-10 px-[15%] no-scrollbar snap-x snap-mandatory"
      >
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className={`w-[350px] md:w-[700px] flex-shrink-0 h-[300px] rounded-xl bg-cover bg-center text-white flex justify-end items-end snap-center transition-all duration-500 ${
              index === visibleIndex
                ? "scale-100 blur-0 opacity-100"
                : "scale-90 blur-sm opacity-60"
            }`}
            style={{ backgroundImage: `url(${item.img[0].src})` }}
          >
            <div className="bg-black/80 w-[65%] h-full flex flex-col justify-between items-center py-6 px-4 rounded-r-xl">
              <h3 className="text-[25px] uppercase font-medium text-center">
                {item.name}
              </h3>
              <p className="text-sm text-justify mb-2 ">{item.description}</p>
              <Link
                href={item.url}
                className="uppercase inline-flex w-full justify-center items-center gap-2 text-white border border-[#464646] py-4 rounded-full hover:bg-[#464646] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer más 
             
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full px-12 flex justify-center items-center mt-15">
    <div className="h-[2px] w-full justify-center items-center bg-[#FFFFFF]"></div>
    </div>
   
    </>
   
  );
}
