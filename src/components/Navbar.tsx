import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (

    <div className='px-12 fixed w-full top-0 left-0 z-50 '>
      <div className='my-5 w-full bg-[#1C1C1C] border-[0.5px] border-whitesmoke rounded-[60px] flex items-center justify-between py-4 px-24'>
        <span className='text-[24px] italic font-[500] text-[#838383] uppercase hover:text-white'><Link href="/contact">Sobre Mi</Link></span>
        <Link href="/">
        <h1 className='italic uppercase'>Cesc Greoles</h1>
        </Link>
        <span className='text-[24px] italic font-[500] text-[#838383] uppercase hover:text-white'><Link href="/projects">Proyectos</Link></span>
      </div>
    </div>


  )
}
