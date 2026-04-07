'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  portfolioinfo,
  type PortfolioCategory,
} from '@/app/api/data'

const FILTER_TABS: { id: 'all' | PortfolioCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'institutional', label: 'Institutional' },
  { id: 'infrastructure', label: 'Infrastructure' },
]

const categoryBadgeClass: Record<PortfolioCategory, string> = {
  residential:
    'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300',
  commercial:
    'bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300',
  institutional:
    'bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300',
  infrastructure:
    'bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200',
}

function formatCategoryLabel(cat: PortfolioCategory): string {
  return cat.charAt(0).toUpperCase() + cat.slice(1)
}

const PortfolioList = () => {
  const [filter, setFilter] = useState<'all' | PortfolioCategory>('all')

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return portfolioinfo
    return portfolioinfo.filter((item) => item.category === filter)
  }, [filter])

  return (
    <section
      id="portfolio"
      className="bg-section dark:bg-darkmode py-16 md:py-24"
      aria-labelledby="portfolio-showcase-heading">
      <div className="container mx-auto max-w-[120rem] px-4 lg:px-12">
        <div
          className="mb-6 flex items-center justify-center gap-2 md:mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000">
          <span className="h-3 w-3 shrink-0 rounded-full bg-teal" aria-hidden />
          <span className="text-sm font-medium text-midnight_text dark:text-white/60">
            Our work
          </span>
        </div>

        <div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000">
          <h2
            id="portfolio-showcase-heading"
            className="text-[28px] font-bold leading-tight text-midnight_text dark:text-white sm:text-4xl">
            Project showcase
          </h2>
          <p className="mt-4 text-base font-normal text-grey dark:text-white/50 md:text-lg">
            Selected builds across residential, commercial, institutional, and
            public-sector work. Open a project for details and imagery.
          </p>
        </div>

        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-2 md:mb-14 md:gap-3"
          role="tablist"
          aria-label="Filter projects by type">
          {FILTER_TABS.map((tab) => {
            const isActive = filter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(tab.id)}
                className={`relative rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors md:px-7 md:text-sm ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-orange-400'
                }`}>
                {isActive && (
                  <motion.span
                    layoutId="portfolioFilterPill"
                    className="absolute inset-0 rounded-full bg-orange-500 shadow-lg shadow-orange-500/25"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item, index) => (
              <motion.article
                layout
                key={item.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="h-full">
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="group flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950">
                  <div
                    className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-orange-200/60 group-hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:group-hover:border-orange-500/30 ${item.Class}`}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center bg-orange-600/0 opacity-0 transition-all duration-500 group-hover:bg-orange-600/15 group-hover:opacity-100">
                      <span className="translate-y-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-orange-600 shadow-lg opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        View Project
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col text-center md:text-left">
                    <div className="mb-2 flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-3">
                      <h3 className="text-xl font-black text-midnight_text dark:text-white md:text-2xl">
                        {item.title}
                      </h3>
                      <span
                        className={`w-fit rounded-md px-3 py-1 text-[10px] font-black uppercase tracking-tight ${categoryBadgeClass[item.category]}`}>
                        {formatCategoryLabel(item.category)}
                      </span>
                    </div>
                    <p className="line-clamp-2 flex-1 text-base text-secondary dark:text-white/55 md:text-lg">
                      {item.info}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-4">
                      See case study
                      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-lg text-secondary dark:text-white/50">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}

export default PortfolioList
