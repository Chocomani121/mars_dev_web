'use client'
import React from 'react'
import Image from 'next/image'

const Progresswork = ({ isColorMode }: { isColorMode: boolean }) => {
  return (
    <section
      className={`relative overflow-hidden ${isColorMode ? 'bg-section dark:bg-white' : 'bg-section dark:bg-white'}`}
      id='about'
    >

      {/* ===== center shape (for the background) ===== */}
      <div
        className='pointer-events-none absolute bottom-0 left-0 z-10 hidden h-[62%] w-[100%] bg-[#e5e5e5] md:block'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
        }}
      />
      
      <div className='container relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-20'>
        <div
          className='mb-10 flex items-center justify-center gap-2 md:mb-12'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
        >
          <span className='h-3 w-3 rounded-full bg-teal' />
          <span className='text-sm font-medium text-midnight_text'>About Mars Devt Corp</span>
        </div>

        <div className='space-y-10 md:space-y-14'>
          <div className='grid items-stretch gap-8 md:grid-cols-2 md:gap-10'>
            <div
              className='relative min-h-[300px] overflow-hidden rounded-2xl shadow-lg md:min-h-[430px]'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              <Image
                src='//img1.wsimg.com/isteam/getty/1447581973/:/rs=w:600,h:451.12781954887214,cg:true,m/cr=w:600,h:451.12781954887214'
                alt='Our team planning a project'
                fill
                sizes='(min-width: 768px) 50vw, 100vw'
                className='object-cover'
                priority
              />
            </div>

            <article
              className='rounded-2xl bg-white p-8 text-midnight_text shadow-lg ring-1 ring-border/60 md:p-10'
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              <h3 className='text-4xl font-bold text-orange'>Our Vision</h3>
              <p className='mt-6 text-lg leading-relaxed text-red-black'>
                At MARS DEVT CORP., our vision is to be the premier force transforming the construction
                landscape. We strive to deliver exceptional quality and service in every project we
                undertake, setting new benchmarks in General Building and Engineering. As a <b>top-tier
                PCAB-registered contractor</b>, we aim to consistently bring visions to life, crafting enduring
                structures from residential and commercial complexes to vital infrastructure, including
                specialized government and military facilities.
              </p>
            </article>
          </div>

          <div className='grid items-stretch gap-8 md:grid-cols-2 md:gap-10'>
            <article
              className='order-2 rounded-2xl bg-white p-8 text-midnight_text shadow-lg ring-1 ring-border/60 md:order-1 md:p-10'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              <h3 className='text-4xl font-bold text-orange'>Our Mission</h3>
              <p className='mt-6 text-lg leading-relaxed text-red-black'>
                MARS DEVT CORP. commits to building high-quality, innovative, and sustainable structures.
                We deliver exceptional construction services across all scales-from residential and commercial
                developments to critical infrastructure projects for both government and private sectors. We
                achieve these goals through <b>steadfast dedication, prioritizing client satisfaction, and
                fostering a culture of precision and engineering excellence</b> in every endeavor.
              </p>
            </article>

            <div
              className='order-1 relative min-h-[300px] overflow-hidden rounded-2xl shadow-lg md:order-2 md:min-h-[430px]'
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              <Image
                src='//img1.wsimg.com/isteam/ip/fbcf0abe-7a86-4d80-8bae-140779ba7082/blob-a6fa837.png/:/cr=t:9.67%25,l:0%25,w:100%25,h:80.66%25/rs=w:600,h:451.12781954887214,cg:true'
                alt='Construction team at project site'
                fill
                sizes='(min-width: 768px) 50vw, 100vw'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
