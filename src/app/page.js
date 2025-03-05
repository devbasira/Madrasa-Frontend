"use client";
import { useEffect, useState } from "react";
import Header from "./Components/Header.js";
import { Footer } from "@/app/Components/Footer.js";
import {
  HeroSection,
  AboutSection,
  FeatureCourse,
  Popular,
  Testimonial,
  LeaderShip,
  ToggleMenu,
  Rows,
} from "@/app/Components/HomePage.js";

export default function Home() {
  const [showMenu, setshowMenu] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Size:", window.innerWidth);
    }
  }, []);

  return (
    <div className="py-[30px]">
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

      <Popular />

      <Rows />
      <Rows />

      <Testimonial />
      <Rows />
      <Rows />

      <LeaderShip />
      <Rows />
      <Rows />
      <Footer />
    </div>
  );
}
