

import React from 'react'
import Icons from './Icons'


export const HeroHome = () => {
    return (
        <>
            <div className="flex flex-col w-full px-6 pt-42 md:pt-36 lg:pt-32 pb-10">
                <div className='flex flex-row-reverse w-full gap-5  items-center justify-center'>
                    <div className='flex flex-col gap-5 text-center'>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-center text-[35px]'>
                            <h2 style={{ fontFamily: 'Orbitron, sans-serif' }}>Front-End Developer</h2>
                            <h2 style={{ fontFamily: 'Playfair Display, serif' }}>Marketing y comunicación digital</h2>
                            <h2 style={{ fontFamily: 'Pacifico, cursive' }}>Web specialist</h2>
                        </div>

                        <span className='p-0 m-0'>
                            Front-end con experiencia creando soluciones web modernas para usuarios y empresas. Sólidas credenciales técnicas (8º puesto de 500 en último Hackathon de CaixaBank) y una carrera en marketing, una interesante combinación que me permite cumplir objetivos técnicos con una perspectiva más estrategica que la mayoría. Aprendo y me adapto rápido, y me considero una persona trabajadora, ilusionada y comunicativa, con ganas de formar parte de un equipo para lograr objetivos interesantes.
                        </span>
                    </div>
                    {/* <Link href="/projects" className="">
                        <div className="flex flex-row items-center justify-end gap-4">
                            <div className="flex justify-center items-center w-[600px] h-20 border border-[#464646] rounded-full px-16">
                                <span className="text-[32px]">Projects</span>
                            </div>
                            <div className="w-20 h-20 border border-[#464646] rounded-full flex items-center justify-center">
                                <GoArrowRight size={32} />
                            </div>
                        </div>
                    </Link> */}
                </div>

                <Icons />

            </div>
        </>




    )
}
