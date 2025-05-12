'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `text-[20px] md:text-[24px] italic font-[500] uppercase ${
      pathname === path ? 'text-white' : 'text-[#838383] hover:text-white'
    }`

  return (
    <div className='px-4 md:px-12 fixed w-full top-0 left-0 z-50'>
      <div className='my-4 md:my-5 w-full bg-[#1C1C1C] border-[0.5px] border-whitesmoke rounded-[30px] md:rounded-[60px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-0 py-3 px-6 md:px-24'>

        <span className={linkClass('/contact')}>
          <Link href="/contact">Sobre Mi</Link>
        </span>

        <Link href="/">
          <h1 className='italic uppercase font-[500] text-[22px] md:text-[28px]'>Cesc Greoles</h1>
        </Link>

        <span className={linkClass('/projects')}>
          <Link href="/projects">Proyectos</Link>
        </span>

      </div>
    </div>
  )
}
