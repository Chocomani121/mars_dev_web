import React from 'react'
import { count } from '@/app/api/data'
import Image from 'next/image'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`relative overflow-hidden py-24 md:py-10 ${
        isColorMode ? 'dark:bg-orange bg-section' : 'dark:bg-white bg-white'
      }`}
    >
      {/* Background Polygon: Large Orange Wedge (Left) */}
      {/* <div 
        className="absolute inset-0 z-0 bg-[#e5e5e5] pointer-events-none" 
        style={{ clipPath: 'polygon(0 0, 45% 0, 20% 100%, 0% 100%)' }}
      /> */}

      {/* Background Polygon: Light Grey Slant (Right) */}
      <div 
        className="hidden md:block absolute inset-0 bg-red-black/80 pointer-events-none" 
        style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 61% 100%)' }}
      />
      
      {/* <div
        className="hidden md:block absolute top-0 right-0 h-[50%] w-[57%] bg-[#e5e5e5] z-0"
        style={{
         clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 100% 500%)'
        }}
      ></div> */}

      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        
        {/* Main Wrapper: Rounded white box with shadow */}
        <div className="relative bg-white dark:bg-white rounded-[2rem] shadow-xl p-10 md:p-16 text-center border-2 border-orange/20">
          
          {/* Decorative Quotation Mark */}
          <div className="absolute -top-6 left-10 text-orange scale-x-[-1] opacity-80">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.017 21H3.017Z" />
            </svg>
          </div>

          {/* Centered Text Content */}
          <p className="text-xl md:text-3xl font-serif text-slate-800 dark:text-teal leading-relaxed italic max-w-2xl mx-auto">
            "We pride ourselves on our attention to detail and <span className="text-orange">meticulous craftsmanship</span>."
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Counter