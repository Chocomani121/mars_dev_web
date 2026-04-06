// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { portfolioinfo } from '@/app/api/data'

// // portfolio list
// const PortfolioList = () => {
//   return (
//     <section
//       id='portfolio'
//       className='md:pb-24 pb-16 pt-8 dark:bg-orange flex flex-wrap gap-[2.125rem] lg:px-[2.125rem] px-0 max-w-[120rem] w-full justify-center m-auto'>
//         {portfolioinfo.map((item, index) => (
//           <Link key={index} href={`/portfolio/${item.slug}`} passHref>
//             <div className={`w-[18rem] group ${item.Class}`}>
//               <div className='relative overflow-hidden rounded-lg group-hover:scale-[1.1] group-hover:cursor-pointer transition-all duration-500'>
//                 <Image
//                   src={item.image}
//                   alt={item.alt}
//                   width={1200}
//                   height={800}
//                   style={{ width: '100%', height: 'auto' }}
//                 />
//               </div>
//               <h4 className='pb-[0.3125rem] pt-[2.1875rem] group-hover:text-primary group-hover:cursor-pointer text-2xl text-midnight_text font-bold dark:text-white'>
//                 {item.title}
//               </h4>
//               <p className='text-secondary font-normal text-lg group-hover:text-primary group-hover:cursor-pointer dark:text-white/50'>
//                 {item.info}
//               </p>
//             </div>
//           </Link>
//         ))}
//     </section>
//   )
// }

// export default PortfolioList


"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioinfo } from '@/app/api/data';

const PortfolioList = () => {
  const [filter, setFilter] = useState('all');

  // Filter logic assuming your data has a 'category' field (e.g., 'web' or 'mobile')
  const filteredProjects = filter === 'all' 
    ? portfolioinfo 
    : portfolioinfo.filter(item => item.category?.toLowerCase() === filter);

  return (
    <section id="portfolio" className="bg-white py-16 dark:bg-slate-950 md:py-24">
      <div className="container mx-auto max-w-[120rem] px-4 lg:px-12">
        <div
          className='mb-10 flex items-center justify-center gap-2 md:mb-12'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
        >
          <span className='h-3 w-3 rounded-full bg-teal' />
          <span className='text-sm font-medium text-midnight_text'>Our Work</span>
        </div>
        
        {/* Modern Filter Tabs */}
        {/* <div className="mb-16 flex justify-center gap-4">
          {['all', 'web', 'mobile'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`relative px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all rounded-full ${
                filter === tab 
                ? 'text-white' 
                : 'text-slate-500 hover:text-orange-500 dark:text-slate-400'
              }`}
            >
              {filter === tab && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-orange-500 rounded-full shadow-lg shadow-orange-500/30" 
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div> */}

        {/* Project Grid */}
        
        <motion.div
          layout
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((item) => (
              <motion.div
                layout
                key={item.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={`/portfolio/${item.slug}`} className="group block">
                  {/* Image Container with Platform-Specific Styling */}
                  <div className={`relative overflow-hidden transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl 
                    ${item.category === 'mobile' 
                      ? 'aspect-[9/16] max-w-[320px] mx-auto rounded-[3rem] border-[8px] border-slate-900 dark:border-slate-800' // Mobile Phone Look
                      : 'aspect-video rounded-[2rem]' // Web Browser Look
                    } shadow-xl bg-slate-100 dark:bg-slate-900`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-orange-600/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                       <div className="rounded-full bg-white px-6 py-3 font-bold text-orange-600 shadow-xl">
                          View Case Study
                       </div>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="mt-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className={`w-fit px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter 
                        ${item.category === 'mobile' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-emerald-100 text-emerald-600'}`}>
                        {item.category}
                      </span>
                    </div>
                    <p className="text-lg text-slate-500 dark:text-slate-400 line-clamp-2">
                      {item.info}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioList;