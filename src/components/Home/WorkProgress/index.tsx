'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from '@/app/api/data' // Assuming Progress is correctly imported

// Define the interface for ProgressItem

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {


  return (
    // <section className='relative dark:bg-dark_orange bg-section bg-[url(/images/hero/emp.png)] bg-cover bg-center bg-no-repeat bg-fixed text-white overflow-hidden'
    <section className='relative dark:bg-white bg-section text-white overflow-hidden'id='about'>
      {/* Semi-transparent overlay - same as Hero: muted background, legible content */}
      {/* <div className='absolute inset-0 bg-white/65 dark:bg-white/40 -z-0' aria-hidden /> */}
   <div className='container mx-auto max-w-6xl px-4 py-16 relative z-10'>
   <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-gray-500'>
            Our Goal
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:darkmode'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Top-tier services in a wide range of specialties
        </h2>
      <div className='grid md:grid-cols-2 items-stretch gap-8'>
        
        <div 
          className='group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-brand-accent shadow-md hover:shadow-xl transition-all duration-300'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
            
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-midnight_text/5 dark:bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
              <svg 
                className="w-8 h-8 text-midnight_text dark:text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h2 className='text-midnight_text font-bold dark:text-white text-3xl'>
              Our Mission
            </h2>
          </div>
          <p className='text-gray dark:text-white/70 text-base font-medium leading-relaxed'>
            Our mission is to deliver construction projects that not only meet but exceed 
            our clients' expectations. 
            <br /><br />
            We are committed to craftsmanship, attention to detail, and a rigorous 
            approach to service, ensuring every project is completed efficiently and on schedule.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className='group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-brand-accent shadow-md hover:shadow-xl transition-all duration-300'       
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-midnight_text/5 dark:bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
              {/* You can swap this SVG for a Lucide icon like 'Eye' */}
              <svg className="w-8 h-8 text-midnight_text dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h2 className='text-midnight_text font-bold dark:text-white text-3xl'>
              Our Vision
            </h2>
          </div>
          <p className='text-gray dark:text-white/70 text-base font-medium leading-relaxed'>
            Mars Development Corporation aims to be a prominent leader in the 
            Philippine construction industry, recognized for our ability to take on 
            complex projects with the same diligence and innovation as the 
            industry’s larger firms, all while maintaining strict adherence to 
            timelines and efficiency.
          </p>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Progresswork
