"use client";
import React, { FC } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbLink } from '@/types/breadcrumb';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  aboutIntroDescription,
  aboutIntroTitle,
  aboutPageBreadcrumbs,
} from '@/content/about-intro';

export interface HeroSubProps {
  /** When omitted, uses shared intro copy from `@/content/about-intro`. */
  title?: string;
  description?: string;
  breadcrumbLinks?: BreadcrumbLink[];
  /** `false` = home-style light shell; `true` = section + orange (dark) like other inner blocks. */
  isColorMode?: boolean;
}

const HeroSub: FC<HeroSubProps> = ({
  title,
  description,
  breadcrumbLinks,
  isColorMode = false,
}) => {
  const resolvedTitle = title ?? aboutIntroTitle;
  const resolvedDescription = description ?? aboutIntroDescription;
  const resolvedBreadcrumbs = breadcrumbLinks ?? aboutPageBreadcrumbs;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  
  return (
    
    <section
      className={
        isColorMode
          ? 'relative overflow-hidden bg-section py-16 pt-36 dark:bg-white md:py-24 md:pt-44'
          : 'relative overflow-hidden bg-[#f8fafc] py-16 pt-36 dark:bg-white md:py-24 md:pt-44'
      }
    >
      {/* <div className="absolute inset-0 -z-0" aria-hidden>
        <Image
          src="/images/hero/emp.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/20" />
      </div> */}

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        
        {/* Entrance Animation for Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-900 md:text-5xl">
            {resolvedTitle}
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }} // 24rem
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 h-1.5 rounded-full bg-orange-500"
          />
        </motion.div>

        {/* Floating Layout Container */}
        <div className="relative min-h-[500px] w-full">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-0 h-[400px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl md:h-[600px] md:w-[80%] "
          >
            <Image
              src="/images/hero/emp_group.png"
              alt="Our Team"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent"></div>
          </motion.div>

          {/* 2. The Orange Floating Card (Slides in from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 -mt-24 ml-auto w-full rounded-[2.5rem] bg-brand-deep p-8 shadow-[0_20px_50px_rgba(16,45,71,0.25)] md:absolute md:right-0 md:top-1/2 md:mt-0 md:w-[48%] md:-translate-y-1/2 md:p-14"
           > 
            <h3 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Top-tier services in a wide range of specialties
            </h3>
            
            <p className="mt-8 text-lg leading-relaxed text-white-50 dark:text-white-100 md:text-xl">
              {resolvedDescription}
            </p>
            
            {/* Breadcrumb with Hover Transition */}
            <div className="mt-10 flex justify-center"> {/* Container to handle the centering */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-block rounded-2xl transition-colors"
              >
                <Breadcrumb links={resolvedBreadcrumbs} />
              </motion.div>
            </div>
          </motion.div>
  
        </div>
      </div>
    </section>
  );
};

export default HeroSub;
