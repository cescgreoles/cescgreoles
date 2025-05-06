import React from 'react'
import { experience } from '../utils/cv'

export const Work = () => {
  return (
    <section className='px-6 py-12 text-white'>
      <h2 className='text-3xl font-bold uppercase text-right mb-10'>Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.es.map((job, index) => (
          <div
            key={index}
            className=" rounded-2xl shadow-md border-whitesmoke border-[0.5px] p-6"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold uppercase text-white">{job.name}</h3>
              <p className="text-sm text-gray-500">{job.date} | {job.where}</p>
              <p className="text-base mt-2">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}