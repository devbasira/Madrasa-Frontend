"use client";
import { useEffect, useState } from "react";
import Header from "./Components/Header.js";
import { Footer } from "@/app/Components/Footer.js";
import {
  HeroSection,
  AboutSection,
  FeatureCourse,
  ToggleMenu,
  Rows,
} from "@/app/Components/HomePage.js";
import { Leadership } from "./Components/LeaderShip.jsx";
import { Testimonial } from "./Components/Testimonial.jsx";
import { PopularCourses } from "./Components/PopularCourses.jsx";

export default function Home() {
  const [showMenu, setshowMenu] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Size:", window.innerWidth);
    }
  }, []);

  return (
    <div className="bg-[#ffffff]">
      <Header setshowMenu={setshowMenu} showMenu={showMenu} />
      <ToggleMenu showMenu={showMenu} />
      <HeroSection />
      <Rows />
      <Rows />

      <AboutSection />

      <Rows />
      <Rows />

      <FeatureCourse />

      <Rows />
      <Rows />

      <PopularCourses />

      <Rows />
      <Rows />

      <Testimonial />
      <Rows />
      <Rows />

      <Leadership />
      <div className="h-[45px] w-full hidden sm:block"></div>
      <div className="h-[45px] w-full hidden sm:block"></div>
      <Footer />
    </div>
  );
}
