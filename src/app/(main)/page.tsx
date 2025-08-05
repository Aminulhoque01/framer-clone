"use client"


 
import SildImage from "@/components/Pages/Home/DownSild";
import HeroSection from "@/components/Pages/Home/HeroSection";
import ImageSection from "@/components/Pages/Home/ImageSection";
import SideImage from "@/components/Pages/Home/Sideimage";
import Troscain from "@/components/Pages/Home/Troscain";
 


 

import React from "react";


const Home = () => {
  return (
    <section className="w-full min-h-[900px]">

      <HeroSection />
      <Troscain/>
      <ImageSection/>
      <SildImage  />
      <SideImage />
      {/* Add more sections as needed */}

    </section>
  );
};

export default Home;


