'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `text-[20px] md:text-[24px] font-[500] uppercase ${pathname === path ? 'text-white' : 'text-[#838383] hover:text-white'
    }`

  return (
    <div className='flex pt-2 flex-col md:flex-row justify-between items-center px-4 md:px-12 w-full top-0 left-0 z-50'>
      <h1 className=' md:ml-15 text-[30px] font-extrabold md:tracking-widest inline-block transform scale-x-150'>CESC GREOLES</h1>
      <div className='my-4 md:my-5 w-[60%] bg-[#1C1C1C] border-[1px] border-whitesmoke rounded-[30px] md:rounded-[60px] flex flex-col lg:flex-row items-center justify-center md:justify-between gap-2 md:gap-0 py-3 px-6 md:px-24'>

        <span className={linkClass('/')}>
          <Link href="/">Inicio</Link>
        </span>
        <span className={linkClass('/contact')}>
          <Link href="/contact">Sobre Mi</Link>
        </span>
        <span className={linkClass('/projects')}>
          <Link href="/projects">Proyectos</Link>
        </span>

      </div>
    </div>
  )
}
