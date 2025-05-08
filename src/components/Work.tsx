import React from 'react'
import { experience } from '../utils/cv'

export const Work = () => {
  return (
    <section className='py-12 text-white'>
      <h2 className='text-3xl font-bold uppercase text-right mb-10 px-12'>Work</h2>
      
      <div className="flex flex-col border-t-1 border-whitesmoke">
        {experience.es.map((job, index) => (
          <div
            key={index}
            className="shadow-md border-whitesmoke border-b-1 p-6"
          >
            <div className="flex flex-row gap-2 justify-center items-center px-12">
              <h3 className="text-xl font-bold uppercase text-white w-[25%]">{job.name}</h3>
              <p className="text-sm text-gray-500 w-[25%]">{job.date} | {job.where}</p>
              <p className="text-base mt-2 w-[50%] text-justify">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}