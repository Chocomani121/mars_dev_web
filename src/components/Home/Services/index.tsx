import React from 'react'
import Link from 'next/link'
import { Servicebox } from '@/app/api/data'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const Services = () => {
  return (
    <section className='bg-section dark:bg-white ' id='services'>
      
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-gray-500'>
            Our services
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:darkmode'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Services specifically designed to meet your business needs
        </h2>
        <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
          {Servicebox.map((item, index) => (  
            // <div
            //   key={index}
            //   data-aos='fade-up'
            //   data-aos-delay={`${index * 200}`}
            //   data-aos-duration='1000'
            //   data-aos-offset='300'
            //   className='col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-orange'>
            //   <Image
            //     src={item.icon}
            //     alt='Service Box'
            //     width={0}
            //     height={0}
            //     className='w-10 h-10 bg-no-repeat inline-block bg-contain'
            //   />
            //   <h3 className='max-w-44 mx-auto text-2xl font-bold'>
            //     {item.title}
            //   </h3>
            //   <p className='dark:text-white/50 text-base font-normal'>
            //     {item.description}
            //   </p>
            // </div>
            // Inside your .map((item, index) => (...))
            <div
              key={index}
              className='col-span-4 bg-white flex flex-col justify-between items-center text-center overflow-hidden shadow-service rounded-md dark:bg-darker_orange'
            >
              {/* Add a featured image at the top of the card */}
              <div className="w-full h-48 relative">
                <Image 
                    src={item.image || ''} 
                    alt={item.title}
                    fill
                    className="object-cover"
                />
              </div>

              <div className="py-10 px-7 flex flex-col items-center gap-4">
                {/* Keep the icon or move it to overlap the image */}
                {/* <Image
                  src={item.icon}
                  alt='Icon'
                  width={40}
                  height={40}
                  className='bg-no-repeat inline-block bg-contain'
                /> */}
                <h3 className='max-w-44 mx-auto text-2xl font-bold text-midnight_text dark:text-white'>
                  {item.title}
                </h3>
                <p className='dark:text-white/80 text-base font-normal'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
