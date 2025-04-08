
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from "react-icons/go";

export const HeroHome = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center w-full px-12 py-10">
                <div className="text-[60px] font-bold">
                    FRONT-END
                </div>

                <Link href="/projects" className="">
                    <div className="flex flex-row items-center justify-end gap-4">
                        <div className="flex justify-center items-center w-[600px] h-20 border border-[#464646] rounded-full px-16">
                            <span className="text-[32px]">Projects</span>
                        </div>
                        <div className="w-20 h-20 border border-[#464646] rounded-full flex items-center justify-center">
                            <GoArrowRight size={32} />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex flex-row justify-between items-start w-full px-12 py-10">
                <span className='w-1/2 p-0 m-0'>
                Full Stack Developer con experiencia creando soluciones web modernas para usuarios y empresas. Sólidas credenciales técnicas (8º puesto de 500 en último Hackathon de CaixaBank) y una carrera en marketing, una interesante combinación que me permite cumplir objetivos técnicos con una perspectiva más estrategica que la mayoría. Aprendo y me adapto rápido, y me considero una persona trabajadora, ilusionada y comunicativa, con ganas de formar parte de un equipo para lograr objetivos interesantes. 
                </span>
                <div className="m-0 p-0 w-1/2 text-center text-[60px] font-bold">
                    DEVELOPER
                </div>

               
            </div>
        </>




    )
}
