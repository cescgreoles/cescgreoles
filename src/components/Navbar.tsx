import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center  text-[#D9D9D9] px-12 py-[40px] '>
        <div className='flex items-center justify-center'>
            <h1 className='uppercase'>Cesc Greoles</h1>
        </div>
        <div className='w-3/4 border border-[#464646] rounded-[60px] flex items-center justify-between py-4 px-16'>
            <span className='text-[16px] font-[500] text-[#838383]'><Link href="/aboutMe">Sobre Mi</Link></span>
            <span className='text-[16px] font-[500] text-[#838383]'><Link href="/projects">Proyectos</Link></span>
            <span className='text-[16px] font-[500] text-[#838383]'><Link href="/contact">Contacto</Link></span>
            
        </div>
    </nav>
  )
}
