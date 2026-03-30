
import React from "react";
import Aboutus from "@/components/About-us";
import { Metadata } from "next";
import Progresswork from "@/components/Home/WorkProgress";
import Teams from "@/components/Teams";

export const metadata: Metadata = {
    title: "About | Mars Devt Corporation",
};

const page = () => {
  return (
    <>
      <Aboutus isColorMode={true} />
       {/* <Counter isColorMode={true} /> */}
       <Progresswork isColorMode={true} />
       <Teams />
    </>
  );
};

export default page;