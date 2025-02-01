"use client";
import { useEffect, useState } from "react";
import Header from './Components/Header.js'
import { Footer } from "@/app/Components/Footer.js";
import { HeroSection,AboutSection, FeatureCourse, Popular, Testimonial, LeaderShip, ToggleMenu } from "@/app/Components/HeroSection.js";

export default function Home() {
 const [showMenu, setshowMenu] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Size:", window.innerWidth);
    }
  }, []);

  return (
    <div className="">
   <Header setshowMenu={setshowMenu} showMenu={showMenu}/>
   <ToggleMenu showMenu={showMenu}/>
   {/* <HeroSection/>
   <AboutSection/>
   <FeatureCourse/>
   <Popular/>
   <Testimonial/>
   <LeaderShip/>
   <Footer/> */}

  
    
    
    </div>
  );
}
