'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
 <section className='relative md:pt-100 pt-70 bg-white dark:bg-orange bg-[url(/images/hero/emp.png)] bg-cover bg-center bg-no-repeat text-white'>
   <div className='absolute inset-0 bg-black/50 -z-0'></div>
     <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10 transform -translate-y-12 md:-translate-y-35'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            {/* <span className='w-3 h-3 rounded-full bg-success'></span> */}
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              Build with Confidence. Build with Mars
            </span>
          </div>
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]'>
            We build. You Succeed.
          </h1>
          <p className='text-grey dark:text-white/70 text-xl font-semibold'>     
           Transforming Blueprints into Your Solid Reality
          </p>
          <a
            href='#learn-more'
            className='py-3 bg-orange text-white rounded-md hover:bg-dark_orange transition duration-300 px-8'>
            Get Quotation
          </a>
        </div>

        <div className="md:col-span-6 col-span-12 relative">
          <Image
            src='/images/logo/marsdev.png'
            alt='hero-image'
            width={350}
            height={150}
            quality={100}
            style={{ width: '100%', height: 'auto' }}
            className='drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
