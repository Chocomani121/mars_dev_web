"use client";
import React from 'react'
import Link from 'next/link'
import { Servicebox } from '@/app/api/data'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className='bg-section dark:bg-white/95' id='services'>
      
      <div className='container mx-auto max-w-6xl px-4'>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className='relative flex gap-2 items-center justify-center'
        >
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-gray-500'>
            Our services
          </span>
          <Link
            href='/services'
            className='absolute right-0 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:text-darker_orange transition-colors'
          >
            View all
            <span aria-hidden>-></span>
          </Link>
        </motion.div>
         <br/>
         <br/>
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:darkmode'
        >
          Services specifically designed to meet your business needs
        </motion.h2> */}

        {/* GRID */}
        <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
          {Servicebox.map((item, index) => (  

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
              className='col-span-4 bg-white flex flex-col justify-between items-center text-center overflow-hidden shadow-service rounded-md dark:bg-orange'
            >

              {/* IMAGE */}
              <motion.div 
                className="w-full h-48 relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image 
                  src={item.image || ''} 
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* CONTENT */}
              <div className="py-10 px-7 flex flex-col items-center gap-4">
                <h3 className='max-w-44 mx-auto text-2xl font-bold text-midnight_text dark:text-white'>
                  {item.title}
                </h3>
                <p className='dark:text-white/80 text-base font-normal'>
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services