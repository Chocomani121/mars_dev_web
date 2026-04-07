'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo, type PortfolioItem } from '@/app/api/data'

type SlickSliderProps = {
  /** When set, highlights this project and shows other work in the carousel below. */
  featuredSlug?: string
}

function formatCategory(cat: PortfolioItem['category']): string {
  return cat.charAt(0).toUpperCase() + cat.slice(1)
}

const SlickSlider: React.FC<SlickSliderProps> = ({ featuredSlug }) => {
  const featured = featuredSlug
    ? portfolioinfo.find((p) => p.slug === featuredSlug)
    : undefined

  const carouselItems: PortfolioItem[] = featuredSlug
    ? portfolioinfo.filter((p) => p.slug !== featuredSlug)
    : portfolioinfo

  const settings = {
    autoplay: !featuredSlug,
    dots: true,
    arrows: false,
    infinite: carouselItems.length > 2,
    speed: 500,
    slidesToShow: Math.min(2, Math.max(1, carouselItems.length)),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, Math.max(1, carouselItems.length)),
        },
      },
    ],
  }

  return (
    <div className='w-full'>
      {featured && (
        <div className='mb-12 md:mb-16'>
          <div className='relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xl dark:border-slate-700 dark:bg-slate-900'>
            <Image
              src={featured.image}
              alt={featured.alt}
              fill
              priority
              sizes='(min-width: 1024px) 72rem, 100vw'
              className='object-cover'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent' />
          </div>
          <p className='mt-4 text-center text-sm text-secondary dark:text-white/50 md:text-left'>
            Featured imagery for this project. Explore more work in the gallery
            below.
          </p>
        </div>
      )}

      {carouselItems.length > 0 && (
        <>
          <div className='mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between'>
            <h3 className='text-xl font-bold text-midnight_text dark:text-white md:text-2xl'>
              {featuredSlug ? 'More from our portfolio' : 'Project gallery'}
            </h3>
            {featuredSlug && (
              <Link
                href='/portfolio'
                className='text-sm font-semibold text-primary hover:underline'>
                View all projects
              </Link>
            )}
          </div>
          <div className='portfolio-detail-slider -mx-2'>
            <Slider {...settings}>
              {carouselItems.map((item) => (
                <div className='px-2' key={item.slug}>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className='group block overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 transition-shadow hover:shadow-lg dark:border-slate-700 dark:bg-slate-900'>
                    <div className='relative aspect-[4/3] w-full'>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                    </div>
                    <div className='p-4'>
                      <p className='text-[10px] font-bold uppercase tracking-wider text-primary'>
                        {formatCategory(item.category)}
                      </p>
                      <p className='mt-1 font-bold text-midnight_text dark:text-white'>
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  )
}

export default SlickSlider
