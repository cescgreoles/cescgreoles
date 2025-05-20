import Image from "next/image";
import React from "react";
import Icons from "./Icons";

export const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 sm:px-12 py-12 text-white">
            <div className="relative flex w-full max-w-5xl flex-col md:flex-row items-center gap-8 bg-transparent border-white border-[0.5px] rounded-2xl p-8 shadow-lg backdrop-blur-md">
                
               
                <div className="relative w-[150px] h-[150px] shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-white/10 to-white/5">
                    <Image
                        src="/profile1.png"
                        alt="imagen"
                        width={150}
                        height={150}
                        className="object-cover w-full h-full"
                    />
                   
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-black/20 to-transparent blur-sm" />
                </div>

             
                <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl text-justify">
                    <strong>Desarrollador Web</strong> con experiencia creando soluciones web modernas para usuarios y empresas. Licenciado en marketing,
                    una interesante combinación que me permite cumplir objetivos técnicos con una perspectiva más estratégica que la mayoría. Aprendo
                    y me adapto rápido, y me considero una persona trabajadora, ilusionada y comunicativa, con ganas de formar parte de un buen equipo
                    para lograr objetivos interesantes.
                </p>
            </div>

            
                <Icons />
            
        </div>
    );
};
