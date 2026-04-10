import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import OurWork from "@/components/Our-work";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Portfolio | Venus",
};

const PortfolioList = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/our-work", text: "Our Work" },
    ];
    return (
        <>
            <OurWork
                description="Dive into a curated collection of my finest work, showcasing expertise across various industries."
                breadcrumbLinks={breadcrumbLinks}
            />
            <Portfolio />
        </>
    );
};

export default PortfolioList;