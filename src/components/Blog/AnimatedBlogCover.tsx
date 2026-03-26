'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

function normalizeSrc(src: string) {
  return src.replace(/\\/g, '/')
}

export default function AnimatedBlogCover({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  const normalized = normalizeSrc(src)

  return (
    <motion.div
      className='z-20 mb-16 overflow-hidden rounded-sm'
      initial={{ opacity: 0, y: 24, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65 }}>
      <Image
        src={normalized}
        alt={alt}
        width={1170}
        height={766}
        quality={100}
        className='h-full w-full object-cover object-center rounded-3xl'
      />
    </motion.div>
  )
}
