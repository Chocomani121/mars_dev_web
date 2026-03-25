
import React from "react";
import Aboutus from "@/components/About-us";
import { Metadata } from "next";
import Progresswork from "@/components/Home/WorkProgress";

export const metadata: Metadata = {
    title: "About | Mars Devt Corporation",
};

const page = () => {
  return (
    <>
      <Aboutus isColorMode={true} />
       {/* <Counter isColorMode={true} /> */}
       <Progresswork isColorMode={true} />
    </>
  );
};

export default page;