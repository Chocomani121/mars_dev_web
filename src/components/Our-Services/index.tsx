"use client";
import React, { FC } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbLink } from '@/types/breadcrumb';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  serviceIntroDescription,
  serviceIntroTitle,
  servicePageBreadcrumbs,
  serviceIntroTitle2,
  serviceIntroDescription2,
  serviceIntroTitle3,
} from '@/content/services-intro';

export interface HeroSubProps {
  /** When omitted, uses shared intro copy from `@/content/services-intro`. */
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
  const resolvedTitle = title ?? serviceIntroTitle;
  const resolvedDescription = description ?? serviceIntroDescription;
  const resolvedBreadcrumbs = breadcrumbLinks ?? servicePageBreadcrumbs;
  const resolvedTitle2 = serviceIntroTitle2;
  const resolvedDescription2 = serviceIntroDescription2;
  const resolvedTitle3 = serviceIntroTitle3;

 
  return (
    <section className="bg-white py-20 px-6">
        {/* ===== SUBTLE LIGHT ANGLE (layer depth) ===== */}
      <div
        className="hidden md:block absolute top-0 right-0 h-[50%] w-[57%] bg-[#e5e5e5] z-0"
        style={{
         clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 100% 500%)'
        }}
      ></div>

      <div className="container mx-auto max-w-7xl mt-10">
        
        {/* BIG MAIN HEADING */}
        <div className="mb-15">
          <h1 className="text-[80px] md:text-[140px] font-black leading-[0.85] tracking-tighter text-orange uppercase">
            {resolvedTitle} <br /> {resolvedTitle2}
          </h1>
        </div>

        {/* BOTTOM GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-9 items-start">
          
          {/* Column 1: Small Description */}
          <div className="md:col-span-3 space-y-12">
            <div>
               {/* <p className="text-sm font-semibold text-gray-500 mb-6">
                 {resolvedDescription}
               </p> */}
               <p className="text-gray-500 leading-relaxed text-lg">
                 {resolvedDescription}
               </p>
            </div>
          </div>

          {/* Column 2: Large Center Image */}
          <div className="md:col-span-5">
            <div className="relative h-[450px] w-full overflow-hidden rounded-[20px] shadow-sm md:-mt-15 z-20">
              <Image
                src="/images/about/1.png" 
                alt="Interior Design"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 3: Philosophy Section */}
          <div className="md:col-span-4 space-y-6 md:-mt-24 z-20">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[20px] shadow-sm mb-6">
              <Image
                src="/images/about/const_3.png" 
                alt="Our Expertise"
                fill
                className="object-cover"
              />
            </div>
            
            <h2 className="text-4xl font-extrabold text-red-black">{resolvedTitle3} </h2>
            <p className="text-gray-600 leading-relaxed">
                  {resolvedDescription2}
            </p>
          </div>
          </div>
      </div>
    
    
    </section>
  );
};

export default HeroSub;