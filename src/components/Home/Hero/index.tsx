'use client'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* ===== TOP HEADER BACKGROUND ===== */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-0 bg-white"></div>

      {/* ===== MAIN ORANGE SHAPE ===== */}
      <div
      className="hidden md:block absolute top-0 left-0 h-full w-[55%] bg-orange z-10"
        style={{
          clipPath: 'polygon(0 10%, 70% 10%, 100% 100%, 0% 100%)'
        
        }}
      ></div>

      {/* ===== SUBTLE LIGHT ANGLE (layer depth) ===== */}
      <div
        className="hidden md:block absolute top-0 right-0 h-[50%] w-[57%] bg-[#e5e5e5] z-0"
        style={{
         clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 100% 500%)'
        }}
      ></div>

      {/* ===== CONTENT ===== */}
      <div className="relative container mx-auto max-w-7xl px-6 pt-24 md:pt-32 pb-14 md:pb-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* ===== LEFT TEXT ===== */}
        <div className="relative z-20 text-[#1f2937] md:text-white space-y-5 md:space-y-6 text-center md:text-left">

          {/* small label */}
          <p className="uppercase tracking-widest text-sm text-[#4b5563] md:text-white/80">
            Construction & Engineering
          </p>

          {/* headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
            We Build. <br />
            You Succeed. <br />
          </h1>

          {/* description */}
          <p className="text-[#4b5563] md:text-white/90 max-w-md text-base md:text-lg mx-auto md:mx-0">
          Transforming Blueprints into Your Solid Reality.
          </p>

          {/* button */}
          <button className="bg-orange md:bg-white text-white md:text-black px-7 py-3 font-semibold rounded shadow-lg hover:scale-105 hover:shadow-xl hover:bg-maroon transition duration-300">
            Get a Quotation 
          </button>
        </div>

        
        {/* ===== RIGHT BRAND PANEL ===== */}
        <div className="relative z-0 flex items-center justify-start md:h-full">

          <div className="relative w-full md:w-[125%] lg:w-[140%] md:-ml-36 lg:-ml-56 aspect-[4/3] md:aspect-auto md:h-[520px] lg:h-[580px] shadow-2xl">
            
            {/* The Orange Accent "L" Frame (Top Right) */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-[6px] border-r-[6px] border-orange"></div>

            <Image
              src="/images/hero/emp_group.png"
              alt="construction"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero