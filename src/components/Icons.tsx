import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { SlSocialLinkedin } from 'react-icons/sl';
import Link from 'next/link'

const Icons = () => {
  return (
    <div className='flex flex-col gap-3 md:flex-row justify-evenly items-center w-full px-12 py-10'>
    <Link href="https://github.com/cescgreoles" className='flex flex-row justify-center items-center gap-4 border border-[#464646] rounded-full py-4 px-12 hover:bg-[#464646] hover:text-white transition-all duration-300'>
        <FaGithub size={35} />
        <span className="text-[12px] italic">GitHub</span>
    </Link>
    <Link href="https://www.linkedin.com/in/francesc-greoles-baldrich-a215a5152" className='flex flex-row justify-center items-center gap-4 border border-[#464646] rounded-full py-4 px-12 hover:bg-[#464646] hover:text-white transition-all duration-300'>
        <SlSocialLinkedin size={35} />
        <span className="text-[12px] italic">Linkedin</span>
    </Link>
    <Link href="mailto:cesc.greoles@gmail.com" className='flex flex-row justify-center items-center gap-4 border border-[#464646] rounded-full py-4 px-12 hover:bg-[#464646] hover:text-white transition-all duration-300'>
        <MdOutlineMail size={35} />
        <span className="text-[12px] italic">Mail</span>
    </Link>
</div>
  )
}

export default Icons