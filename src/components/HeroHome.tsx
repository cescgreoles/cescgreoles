
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa';
// import { GoArrowRight } from "react-icons/go";
import { MdOutlineMail } from 'react-icons/md';
import { SlSocialLinkedin } from 'react-icons/sl';

export const HeroHome = () => {
    return (
        <>
            <div className="flex flex-col w-full px-12 py-10">
                <div className='flex flex-row-reverse w-full gap-5  items-center justify-center'>
                    <div className='flex flex-col gap-5 text-center'>
                        <h2>
                            FRONT-END DEVELOPER
                        </h2>
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

                <div className='flex flex-row justify-evenly items-center w-full px-12 py-10'>
                    <Link href="" className='flex flex-row justify-center items-center gap-4 border border-[#464646] rounded-full py-4 px-12 hover:bg-[#464646] hover:text-white transition-all duration-300'>
                        <FaGithub size={35} />
                        <span className="text-[12px] italic">GitHub</span>
                    </Link>
                    <Link href="" className='flex flex-row justify-center items-center gap-4 border border-[#464646] rounded-full py-4 px-12 hover:bg-[#464646] hover:text-white transition-all duration-300'>
                        <SlSocialLinkedin size={35} />
                        <span className="text-[12px] italic">GitHub</span>
                    </Link>
                    <Link href="" className='flex flex-row justify-center items-center gap-4 border border-[#464646] rounded-full py-4 px-12 hover:bg-[#464646] hover:text-white transition-all duration-300'>
                        <MdOutlineMail size={35} />
                        <span className="text-[12px] italic">Mail</span>
                    </Link>
                </div>
            </div>

        </>




    )
}
