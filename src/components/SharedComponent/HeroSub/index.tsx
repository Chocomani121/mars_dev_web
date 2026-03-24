import React, { FC } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbLink } from '@/types/breadcrumb'
import Image from 'next/image';

interface HeroSubProps {
  title: string
  description: string
  breadcrumbLinks: BreadcrumbLink[]
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  return (
    <>
    <section className="bg-[#f5f6f8] py-16 pt-36 dark:bg-darkmode md:py-24 md:pt-44">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Title above card — centered */}
        <h2 className="mb-10 text-center text-4xl font-bold text-[#1a2b4a] dark:text-white md:text-5xl">
          {title}
        </h2>

        {/* White card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-darklight">
          <div className="flex flex-col md:relative md:h-[500px] md:flex-row">
            {/* Left: faded image ~55–60% */}
            <div className="relative h-56 w-full md:absolute md:inset-y-0 md:left-0 md:h-full md:w-[58%]">
              <Image
                src="/images/hero/emp_group.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
                priority
              />
            </div>

            {/* Right: text overlaps image on md+ */}
            <div className="relative z-10 flex w-full flex-col justify-center bg-white px-6 py-8 md:ml-[48%] md:w-[52%] md:bg-white md:px-10 md:py-12 dark:bg-orange">
              <h3 className="text-2xl font-bold leading-tight text-[#1a2b4a] dark:text-white md:text-3xl">
                {/* subheading — pass as prop or hardcode */}
                {/* Top-tier services in a wide range of specialties */}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-white/70 md:text-lg">
                {description}
              </p>
              <div className="mt-6">
                <Breadcrumb links={breadcrumbLinks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HeroSub
