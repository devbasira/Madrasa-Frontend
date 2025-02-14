"use client";
import {HeroSection, Footer, Header, Pricing} from "./Components/HomePage";

export default function Home() {


  return (
   
   <div className="">
     <Header/>
      <HeroSection/>
      <div className=" p-[60px] flex justify-center relative bg-[#171717]">
  <img
    src="/mac.png"
    alt="Mockup"
    className="sm:w-[60%]  w-[90%] h-auto" // Make sure the image fits the container
  />

</div>


{/* <Pricing /> */}
      <Footer/>
 
   </div>

  
    
 
  );
}
