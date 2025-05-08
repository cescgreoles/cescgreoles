import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";

export const Contact = () => {
    return (
        <div className="mt-20 flex flex-col items-center justify-center px-12 py-10  text-white">
            <p className="mb-2 text-center max-w-md text-lg">
                ¿Tienes alguna pregunta, propuesta o simplemente quieres saludar? Haz clic abajo y envíame un correo.
            </p>

            <div className='flex flex-row justify-evenly items-center w-full px-12 py-10'>
                <Link href="" className='flex flex-row justify-center items-center gap-4 border border-[#464646] rounded-full py-4 px-12 hover:bg-[#464646] hover:text-white transition-all duration-300'>
                    <FaGithub size={35} />
                    <span className="text-[12px] italic">GitHub</span>
                </Link>
                <Link href="" className='flex flex-row justify-center items-center gap-4 border border-[#464646] rounded-full py-4 px-12 hover:bg-[#464646] hover:text-white transition-all duration-300'>
                    <SlSocialLinkedin size={35} />
                    <span className="text-[12px] italic">Linkedin</span>
                </Link>
                <Link href="" className='flex flex-row justify-center items-center gap-4 border border-[#464646] rounded-full py-4 px-12 hover:bg-[#464646] hover:text-white transition-all duration-300'>
                    <MdOutlineMail size={35} />
                    <span className="text-[12px] italic">Mail</span>
                </Link>
            </div>

        </div>
    );
};
