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

  return (
    
    <section
      className={
        isColorMode
          ? 'relative overflow-hidden bg-section pb-16 pt-0 dark:bg-white md:pb-24 md:pt-0'
          : 'relative overflow-hidden bg-[#f8fafc] pb-16 pt-0 dark:bg-white md:pb-24 md:pt-0'
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

      {/* <div className="container relative z-10 mx-auto max-w-7xl px-4 pt-28 md:pt-36">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-14"
        >
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-red-black dark:text-red-black md:text-5xl">
            {resolvedTitle}
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }} // 24rem
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 h-1.5 rounded-full bg-maroon"
          />
        </motion.div>

      </div> */}
      {/* Polygon behind navbar header text */}
      <div
        className="hidden md:block absolute top-0 right-0 h-[50%] w-[57%] bg-[#e5e5e5] z-0"
        style={{
         clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 100% 500%)'
        }}
      ></div>

      {/* Two-column feature panel (full section width) */}
     <div className="relative z-10 h-full w-full pt-24 md:pt-24"> 
        <div className="overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 md:min-h-[calc(100vh-96px)] md:grid-cols-2">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 flex h-full flex-col bg-red-black px-8 py-10 md:order-2 md:px-12 md:py-14 lg:px-14"
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center md:mb-14"
              >
                <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-red-black dark:text-white md:text-7xl">
                  {resolvedTitle}
                </h1>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 96 }} // 24rem
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mx-auto mt-6 h-1.5 rounded-full bg-maroon"
                />
              </motion.div>
              <br></br>
              <br></br>
              <h3 className="max-w-xl text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Top-tier services in a wide range of specialties
              </h3>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/85 md:mt-8 md:text-lg">
                {resolvedDescription}
              </p>

              <div className="mt-8 flex justify-start md:mt-auto md:pt-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-block rounded-2xl transition-colors"
                >
                  <Breadcrumb links={resolvedBreadcrumbs} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              
              className="order-1 relative h-full min-h-[320px] md:order-1 md:min-h-0"
            >
              <Image
                src="/images/hero/emp_group.png"
                alt="Our Team"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSub;
{/* <div className='absolute inset-0 bg-white/45 -z-0'></div> */}