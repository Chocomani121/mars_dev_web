'use client'

import React from 'react'
import Link from 'next/link'
import SlickSlider from '@/components/portfolio/Slider'
import Testimonial from '@/components/SharedComponent/Testimonial'
import PortfolioDetail from '@/components/portfolio/PortfolioDetail'
import Portfolio from '@/components/SharedComponent/portfollio'
import { portfolioinfo, type PortfolioCategory } from '@/app/api/data'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

function formatCategory(cat: PortfolioCategory): string {
  return cat.charAt(0).toUpperCase() + cat.slice(1)
}

const Portfolios = () => {
  const params = useParams()
  const slugParam = params?.slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam

  const item = slug
    ? portfolioinfo.find((p) => p.slug === slug)
    : undefined

  if (!slug || !item) {
    return (
      <section className='min-h-[50vh] bg-section px-4 py-32 dark:bg-darkmode md:pt-44'>
        <div className='container mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold text-midnight_text dark:text-white md:text-3xl'>
            Project not found
          </h1>
          <p className='mt-4 text-secondary dark:text-white/55'>
            This showcase link may be outdated, or the project slug does not
            match our list.
          </p>
          <Link
            href='/portfolio'
            className='mt-8 inline-flex rounded-lg bg-orange px-8 py-3 font-semibold text-white hover:bg-orange/90'>
            Browse all projects
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className='bg-[#f8fafc] px-4 py-16 pt-36 dark:bg-white/95 md:py-24 md:pt-44'>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute top-0 right-0 h-[50%] w-[57%] bg-[#e5e5e5] z-0"
        style={{
          clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 100% 500%)'
        }}
      />

        <div className='container mx-auto max-w-6xl'>
          <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <Link
              href='/portfolio'
              className='inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline'>
              <span aria-hidden>←</span> All projects
            </Link>
            <span className='w-fit rounded-md bg-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter text-midnight_text shadow-sm dark:bg-slate-800 dark:text-white'>
              {formatCategory(item.category)}
            </span>
          </div>

          <div className='branding_heading'>
            <div
              className='mb-4 flex items-center gap-2'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='800'>
              <span
                className='h-3 w-3 shrink-0 rounded-full bg-teal'
                aria-hidden
              />
              <span className='text-sm font-medium text-midnight_text dark:text-gray-500'>
                Project showcase
              </span>
            </div>
            <h1
              className='text-4xl font-bold text-midnight_text dark:text-orange md:text-5xl'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='800'>
              {item.title}
            </h1>
            <div className='pb-8 pt-5 md:pb-10'>
              <p
                className='max-w-2xl text-xl leading-relaxed text-secondary dark:text-gray-500'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='800'>
                {item.info}
              </p>
            </div>
          </div>

          <SlickSlider featuredSlug={item.slug} />
        </div>
      </section>

      <PortfolioDetail project={item} />

      {/* <div className='border-b border-primary border-opacity-30'>
        <Testimonial />
      </div> */}
      <Portfolio />
    </>
  )
}

export default Portfolios
