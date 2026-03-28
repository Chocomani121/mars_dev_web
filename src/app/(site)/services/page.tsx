
import React from "react";
import OurServices from "@/components/Our-Services";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";
import Commitment from "@/components/Commitment";
export const metadata: Metadata = {
    title: "Services | Mars Development Corporation",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/our-services", text: "Our Services" },
  ];
  return (
    <>
      <OurServices
        title="Our Services"
        description="
        We are committed to customer satisfaction and strive to buil long-term relationships with out clients. We prioritize open communication, transparency, and timely project
        completion. When you choose us for your cosntruction needs, you can rest assured that you're in capable hands.
        "
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services/>
      <Commitment/>
    </>
  );
};

export default page;
