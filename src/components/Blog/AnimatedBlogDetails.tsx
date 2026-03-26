'use client'

import { motion } from 'framer-motion'

export default function AnimatedBlogDetails({
  html,
  className,
}: {
  html: string
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
