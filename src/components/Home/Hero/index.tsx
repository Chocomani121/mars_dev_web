'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  }

  return (
    <section className="relative bg-white/95 overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-0 bg-white"></div>

      {/* ORANGE SHAPE (MAIN MOTION DRIVER) */}
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="hidden md:block absolute top-0 left-0 h-full w-[55%] bg-orange z-10"
        style={{ clipPath: 'polygon(0 10%, 70% 10%, 100% 100%, 0% 100%)' }}
      />

      {/* LIGHT SHAPE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="hidden md:block absolute top-0 right-0 h-[50%] w-[57%] bg-[#e5e5e5] z-0"
        style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 100% 500%)' }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative container mx-auto max-w-7xl px-6 pt-24 md:pt-32 pb-14 md:pb-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* ===== LEFT TEXT ===== */}
        <div className="relative z-20 text-[#1f2937] md:text-white space-y-5 md:space-y-6 text-center md:text-left">

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="uppercase tracking-widest text-sm text-[#4b5563] md:text-white/80">
            Construction & Engineering
          </motion.p>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
            We Build. <br />
            You Succeed.
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="text-[#4b5563] md:text-white/90 max-w-md text-base md:text-lg mx-auto md:mx-0">
            Transforming Blueprints into Your Solid Reality.
          </motion.p>

          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange md:bg-white text-white md:text-black px-7 py-3 font-semibold rounded shadow-lg"
          >
            Get a Quotation
          </motion.button>
        </div>

        {/* ===== RIGHT IMAGE (SYNCED WITH ORANGE) ===== */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-0 flex items-center justify-start md:h-full"
        >
          <motion.div
            whileHover={{ x: 10 }} // subtle same-direction movement
            className="relative w-full md:w-[125%] lg:w-[140%] md:-ml-36 lg:-ml-56 aspect-[4/3] md:aspect-auto md:h-[520px] lg:h-[580px] shadow-2xl"
          >

            {/* FRAME */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-[6px] border-r-[6px] border-orange"></div>

            <Image
              src="/images/hero/construction.jpg"
              alt="construction"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero