"use client";
import React, { FC } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbLink } from '@/types/breadcrumb';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

import {
  aboutIntroDescription,
  aboutIntroTitle,
  aboutPageBreadcrumbs,
  aboutIntroTitle2,
  aboutIntroDescription2,
  aboutIntroTitle3,
} from '@/content/about-intro';

export interface HeroSubProps {
  title?: string;
  description?: string;
  breadcrumbLinks?: BreadcrumbLink[];
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
  const resolvedTitle2 = aboutIntroTitle2;
  const resolvedDescription2 = aboutIntroDescription2;
  const resolvedTitle3 = aboutIntroTitle3;

  // 🔥 animation presets
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut' as const,
      }
    })
  };

  return (
    <section className="relative bg-white/95 py-20 px-6 overflow-hidden">

      {/* BACKGROUND SHAPE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute top-0 right-0 h-[50%] w-[57%] bg-[#e5e5e5] z-0"
        style={{
          clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 100% 500%)'
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl mt-10">

        {/* ===== BIG HEADING ===== */}
        <motion.div
          initial="hidden"
          animate="show"
          className="mb-15"
        >
          <motion.h1
            // variants={fadeUp}
            custom={1}
            className="text-[80px] md:text-[140px] font-black leading-[0.85] tracking-tighter text-orange uppercase"
          >
            {resolvedTitle} <br /> {resolvedTitle2}
          </motion.h1>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-9 items-start">

          {/* LEFT TEXT */}
          <motion.div
            // variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="md:col-span-3 space-y-12"
          >
            <p className="text-gray-500 leading-relaxed text-lg">
              {resolvedDescription}
            </p>
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="relative h-[450px] w-full overflow-hidden rounded-[5px] shadow-xl md:-mt-0 z-20">

              {/* 🔥 FRAME (same as Hero) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 w-20 h-20 border-t-[5px] border-r-[5px] border-orange z-30"
              />

              <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
                <Image
                  src="/images/about/1.png"
                  alt="Interior Design"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 space-y-6 md:-mt-24 z-20"
          >

            {/* SMALL IMAGE */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-[5px] shadow-xl">

              {/* FRAME */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-3 -right-3 w-16 h-16 border-t-[4px] border-r-[4px] border-orange z-30"
              />

              <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
                <Image
                  src="/images/about/const_3.png"
                  alt="Our Expertise"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.h2
              // variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="text-4xl font-extrabold text-red-black"
            >
              {resolvedTitle3}
            </motion.h2>

            <motion.p
              // variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="text-gray-600 leading-relaxed"
            >
              {resolvedDescription2}
            </motion.p>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSub;