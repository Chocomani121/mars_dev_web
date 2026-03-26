import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
// import Legal from '@/components/Home/Legal';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Blog from '@/components/SharedComponent/Blog'
import Contactform from '@/components/Home/Contact';
import Aboutus from '@/components/About-us'

export const metadata: Metadata = {
  title: "Mars Devt Corporation",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
      {/* <Legal isColorMode={false} /> */}
      <Services />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contactform />
    </main>
  )
}
