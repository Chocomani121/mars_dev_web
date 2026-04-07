import React from 'react'
import Link from 'next/link'
import type { PortfolioItem } from '@/app/api/data'

const categoryScope: Record<
  PortfolioItem['category'],
  { lead: string; bullets: string[] }
> = {
  residential: {
    lead:
      'Residential delivery prioritizes livability, envelope performance, and coordination with finishes and MEP so owners can move in on schedule.',
    bullets: [
      'Structural & architectural coordination',
      'Interior and exterior finishes',
      'Site works and landscaping interfaces',
    ],
  },
  commercial: {
    lead:
      'Commercial builds focus on clear spans, efficient cores, and tenant-ready spaces while keeping safety and inspections on track.',
    bullets: [
      'Shell and core delivery',
      'Fit-out and phased turnover',
      'Loading, parking, and circulation',
    ],
  },
  institutional: {
    lead:
      'Institutional projects demand durable assemblies, accessible layouts, and tight coordination with operators and end users.',
    bullets: [
      'High-traffic flooring and wall systems',
      'Accessibility and wayfinding support',
      'Operational phasing where spaces stay usable',
    ],
  },
  infrastructure: {
    lead:
      'Public and infrastructure work emphasizes civil coordination, security considerations, and compliance with owner standards.',
    bullets: [
      'Civil and structural interfaces',
      'Perimeter and access control alignment',
      'Documentation and handover packages',
    ],
  },
}

export interface PortfolioDetailProps {
  project: PortfolioItem
}

function formatCategory(cat: PortfolioItem['category']): string {
  return cat.charAt(0).toUpperCase() + cat.slice(1)
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ project }) => {
  const scope = categoryScope[project.category]

  return (
    <section className='bg-section py-16 dark:bg-slate-900 md:py-24'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:gap-12'>
          <div className='w-full lg:w-[60%]'>
            <p className='text-[10px] font-bold uppercase tracking-widest text-primary'>
              Project overview
            </p>
            <h2 className='mt-2 text-3xl font-bold text-midnight_text dark:text-white md:text-4xl'>
              {project.title}
            </h2>
            <p className='mt-6 text-lg leading-relaxed text-midnight_text dark:text-white/90 md:text-xl'>
              {project.info}
            </p>
            <p className='mt-6 text-base leading-relaxed text-secondary dark:text-white/60 md:text-lg'>
              {scope.lead}
            </p>
            <div className='mt-8 grid gap-6 sm:grid-cols-2'>
              <p className='text-base leading-relaxed text-secondary dark:text-white/55'>
                Mars Devt Corporation supports owners from early coordination
                through execution, with clear communication and quality checks
                at each milestone.
              </p>
              <p className='text-base leading-relaxed text-secondary dark:text-white/55'>
                If you would like a walkthrough of our process or a quotation
                for a similar scope, we are happy to discuss your site and
                schedule.
              </p>
            </div>
            <Link
              href='/contact'
              className='mt-10 inline-flex rounded-lg bg-orange px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-orange/90'>
              Discuss a project
            </Link>
          </div>

          <aside
            className='w-full shrink-0 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0px_20px_80px_0px_#68758D26] dark:border-slate-700 dark:bg-slate-950 lg:w-[32%]'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <span className='text-xs font-bold uppercase tracking-wider text-primary'>
              At a glance
            </span>
            <dl className='mt-6 space-y-5'>
              <div>
                <dt className='text-sm font-bold text-midnight_text dark:text-white'>
                  Category
                </dt>
                <dd className='mt-1 text-secondary dark:text-white/60'>
                  {formatCategory(project.category)}
                </dd>
              </div>
              <div>
                <dt className='text-sm font-bold text-midnight_text dark:text-white'>
                  Typical scope
                </dt>
                <dd className='mt-2'>
                  <ul className='space-y-2 text-secondary dark:text-white/60'>
                    {scope.bullets.map((line) => (
                      <li key={line} className='flex gap-2'>
                        <span className='text-primary' aria-hidden>
                          ·
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <Link
              href='/portfolio'
              className='mt-8 inline-block text-sm font-semibold text-primary hover:underline'>
              ← Back to all projects
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default PortfolioDetail
