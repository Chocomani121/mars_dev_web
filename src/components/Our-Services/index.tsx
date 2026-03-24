"use client";
import React, { FC } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbLink } from '@/types/breadcrumb';
import Image from 'next/image';
import { motion } from 'framer-motion'; 

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 pt-36 dark:bg-slate-900 md:py-24 md:pt-44">
      {/* Background accents shifted for the new layout */}
      <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl dark:bg-blue-900/10" />

      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Header Section */}

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
         >
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {title}
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }} // 24rem
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 h-1.5 rounded-full bg-orange-500"
          />
        </motion.div>

        {/* Floating Layout Container */}
        {/* <div className="relative flex flex-col items-center md:block min-h-[500px] w-full"> */}
        <div className="relative min-h-[500px] w-full">
          {/* 1. Image Section (Now shifted to the Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} // Slide in from right
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-0 h-[400px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl md:ml-auto md:h-[600px] md:w-[80%]"
          >
            <Image
              src="/images/hero/const_2.png"
              alt="Our Services"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-110"
              priority
            />
            {/* Gradient flipped to match new direction */}
            <div className="absolute inset-0 bg-gradient-to-tl from-slate-950/60 via-slate-900/20 to-transparent"></div>
          </motion.div>

          {/* 2. The Orange Floating Card (Now shifted to the Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} // Slide in from left
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative z-10 -mt-24 mr-auto w-full rounded-[2.5rem] bg-orange-500 p-8 shadow-[0_20px_50px_-15px_rgba(249,115,22,0.4)] md:absolute md:left-0 md:top-1/2 md:mt-0 md:w-[48%] md:-translate-y-1/2 md:p-14"
          >
            <motion.div initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}>

              <motion.h3 variants={fadeInUp} className="text-3xl font-black leading-tight text-white md:text-4xl">
                Built with precision and high-quality standards
              </motion.h3>
              
              <motion.p variants={fadeInUp} className="mt-8 text-lg leading-relaxed text-orange-50/90 md:text-xl">
                {description}
              </motion.p>

              {/* Centered Breadcrumb */}
              <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
                <motion.div    whileHover={{ scale: 1.02 }}
                className="inline-block rounded-2xl transition-colors">
                  <Breadcrumb links={breadcrumbLinks} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSub;