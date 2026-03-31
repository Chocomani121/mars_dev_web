
import React from "react";
import OurServices from "@/components/Our-Services";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";
export const metadata: Metadata = {
    title: "Services | Mars Development Corporation",
};

const page = () => {
  // const breadcrumbLinks = [
  //   { href: "/", text: "Home" },
  //   { href: "/our-services", text: "Our Services" },
  // ];
  return (
    <>
      <OurServices
        // breadcrumbLinks={breadcrumbLinks}
      />
      <Services/>
    </>
  );
};

export default page;
