"use client";
import React from 'react'
import { motion, type Variants } from 'framer-motion'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {

  // animation preset (same system as other sections)
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <section
      className={`relative overflow-hidden py-24 md:py-10 ${
        isColorMode ? 'dark:bg-orange bg-section' : 'dark:bg-white bg-white'
      }`}
    >

      {/* BACKGROUND SHAPE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute inset-0 bg-red-black/80 pointer-events-none"
        style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 61% 100%)' }}
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        
        {/* MAIN CARD */}
        <motion.div
          // variants={fadeUp}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.02 }}
          className="relative bg-white dark:bg-white shadow-xl p-10 md:p-16 text-center "
        >

          {/* 🔥 TOP RIGHT FRAME */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute -top-4 -right-4 w-20 h-20 border-t-[5px] border-r-[5px] border-orange"
          />

          {/* 🔥 BOTTOM LEFT FRAME (NEW for balance) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-4 -left-4 w-20 h-20 border-b-[5px] border-l-[5px] border-orange"
          />

          {/* QUOTE ICON */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-6 left-10 text-orange scale-x-[-1]"
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.017 21H3.017Z" />
            </svg>
          </motion.div>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl font-serif text-midnight_text leading-relaxed italic max-w-2xl mx-auto"
          >
            "We pride ourselves on our attention to detail and{" "}
            <span className="text-orange">meticulous craftsmanship</span>."
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}

export default Counter