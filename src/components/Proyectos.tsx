
import React from 'react'
import { portfolioItems } from '@/utils/cv'

export const Proyectos = () => {
    return (
        <div className='px-12 mt-35  text-white'>
            <h1 className='italic uppercase'>Proyectos</h1>
            <div
                className="flex flex-col gap-10 mt-10"
            >

                {portfolioItems.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="flex flex-row gap-4" key={index}>      
                        <div className="w-[40%]">
                            <h3 className="text-[35px] font-bold uppercase text-white">
                            {index + 1}.{item.name}
                            </h3>
                            <p className="text-sm text-justify mb-2 ">{item.description}</p>

                        </div>
                        <div
                            key={index}
                            className="w-[60%] h-[300px] bg-cover bg-center rounded-lg shadow-md border border-[#464646] flex flex-col justify-center items-center gap-4 p-6"

                            style={{ backgroundImage: `url(${item.img[0].src})` }}
                        >

                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
