"use client"


 
import CardSection from "@/components/Pages/Home/CardSection";
import SildImage from "@/components/Pages/Home/DownSild";
import HeroSection from "@/components/Pages/Home/HeroSection";
import ImageSection from "@/components/Pages/Home/ImageSection";
import SideImage from "@/components/Pages/Home/Sideimage";
import ThreeCard from "@/components/Pages/Home/ThreeCard";
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
      <CardSection />
      <ThreeCard/>
      {/* Add more sections as needed */}

    </section>
  );
};

export default Home;


