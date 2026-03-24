
import React from "react";
import AboutUs from "@/components/About-us";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
export const metadata: Metadata = {
    title: "About | Mars Devt Corporation",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about-us", text: "About Us" },
  ];
  return (
    <>
      <AboutUs
        title="About Us"
        description="
        Mars Development Corporation is an 
        emerging construction firm based in 
        Consolacion, Cebu, poised to excel in 
        both private and government sector 
        construction projects. 
        
        Despite being a new player, our firm 
        is committed to competing with 
        established companies by upholding 
        the highest standards of quality, 
        efficiency, and timely delivery.

        "
        breadcrumbLinks={breadcrumbLinks}
      />
       {/* <Counter isColorMode={true} /> */}
       <Progresswork isColorMode={true} />
    </>
  );
};

export default page;
