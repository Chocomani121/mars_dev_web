import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Location = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/contact', text: 'Contact' },
  ]
  return (
    <>
      <section className='bg-white md:py-5 py-16'>
      <div
      
        className="hidden md:block absolute top-0 right-0 h-[50%] w-[57%] bg-[#e5e5e5] z-0"
        style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 100% 500%)' }}></div>
    

      </section>
    </>
  )
}

export default Location
