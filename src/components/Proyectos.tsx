
import React from 'react'
import { portfolioItems } from '@/utils/cv'

export const Proyectos = () => {
    return (
        <div className='px-12 mt-42 md:mt-35  text-white'>
            <div
                className="flex flex-col gap-10 mt-10 mb-5"
            >
                {portfolioItems.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="flex flex-col md:flex-row gap-12" key={index}>
                        <div className="w-full md:w-[40%]">
                            <h3 className="text-[35px] font-normal uppercase text-white">
                                {index + 1}.{item.name}
                            </h3>
                            <p className="text-sm text-justify mb-2 ">{item.description}</p>
                            <p className="flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                    <span key={i} className="border border-whitesomke text-white px-2 py-1 rounded-xl text-xs">
                                        {skill}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <>

                            <div
                                key={`${index}-desktop`}
                                className="hidden md:flex w-full md:w-[60%] h-[500px] bg-cover bg-center rounded-lg shadow-md border border-[#464646] flex-col justify-center items-center gap-4 p-6"
                                style={{
                                    backgroundImage: `url(${item.img[0].src})`,
                                    aspectRatio: '16 / 9',
                                }}
                            ></div>


                            {item.img[1] && (
                                <div
                                    key={`${index}-mobile`}
                                    className="flex w-full h-[500px] max-w-[300px] mx-auto bg-cover bg-top rounded-[1rem] shadow-md border border-[#464646] flex-col justify-center items-center gap-4 p-6"
                                    style={{
                                        backgroundImage: `url(${item.img[1].src})`,
                                        aspectRatio: '9 / 16',
                                    }}
                                ></div>
                            )}
                        </>

                    </div>

                ))}
            </div>
        </div>
    )
}
