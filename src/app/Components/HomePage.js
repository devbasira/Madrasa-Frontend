"use client";
import { useState } from "react";
import { Tajawal } from "next/font/google";
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });
export function HeroSection() {
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <div className="h-[45px] w-full hidden sm:block"></div>
      <div className="h-[45px] w-full hidden sm:block"></div>
      <Rows />

      <div className="max-w-screen-lg flex flex-col items-center justify-center h-auto md:h-[360px] px-4 md:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 w-full lg:w-[1140px]">
          <div className="flex flex-col gap-[15px] w-full lg:w-[748px] h-auto lg:h-[360px]">
            <div
              className={`${tajawal.className} text-[28px] lg:text-[32px] font-medium text-[#0044CB]`}
            >
              السلام عليكم!
            </div>
            <div className="text-[40px] md:text-[57px] text-blue-950 leading-none">
              welcome to
            </div>
            <div className="text-[40px] md:text-[57px] text-blue-950 font-bold leading-none">
              Jamia Abi Huraira Online
            </div>
            <div className="text-base md:text-lg">
              Your gateway to transformative Islamic education. This portal
              connects students and seekers of knowledge worldwide to a dynamic
              learning environment. Explore courses, access resources, and
              engage with knowledgeable instructors—all designed to combine
              traditional values with modern accessibility.
            </div>
          </div>
          <div className="w-full lg:w-[280px] flex justify-center lg:justify-start mt-6 lg:mt-0">
            <img
              className="h-[180px] w-[180px] md:h-[213px] md:w-[213px] lg:ml-[20px]"
              src="/Qr.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Rows />
      <div className="flex items-center justify-center px-4 md:px-6 lg:px-0">
        <img
          className="w-full lg:w-[1140px] h-auto lg:h-[540px] object-cover"
          src="/heroimg.png"
          alt=""
        />
      </div>
    </div>
  );
}

export function ToggleMenu({ showMenu }) {
  return (
    <div
      className={`h-[100vh] mt-[20px]  py-[10px] px-10 w-full fixed ${
        showMenu ? "right-[0%]" : "right-[-100%]"
      } transition-all duration-[1000ms] bg-[#ffffff]`}
    >
      <div className="p-3 hover:bg-slate-300 cursor-pointer">Home</div>
      <div className="p-3  hover:bg-slate-300 cursor-pointer">Courses</div>
      <div className="p-3  hover:bg-slate-300 cursor-pointer">Resources</div>
    </div>
  );
}

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  const Expand = (e) => {
    let ele = e.target;
    setExpanded((prev) => !prev);
  };
  return (
    <div className="flex justify-center w-full px-4 md:px-6 lg:px-0">
      <div className="w-full lg:w-[1140px] flex justify-around sm:justify-between flex-col">
        <div className="text-[35px] md:text-[45px] lg:text-[55px]">
          About us
        </div>
        <Rows />

        <div
          style={{ backgroundColor: "#F3F3F3" }}
          className={`transition-all duration-[1500ms] overflow-y-hidden px-20 ${
            expanded
              ? "lg:min-h-[720px] md:min-h-[720px] min-h-[900px]"
              : "lg:min-h-[360px] md:min-h-[360px] min-h-[650px]"
          }`}
        >
          <Rows />
          <Rows />
          <p className="text-base md:text-lg">
            Jamia Abi Hurairah, an esteemed online institution under the
            supervision of Khanqah-eDar-ul-Ehsan, was established with the
            mission to impart essential Islamic knowledge alongside spiritual
            guidance. Founded by Hazrat Maulana Sayyed Mohammed Talha Saheb
            Qasmi Naqshbandi Mujaddidi DB in 2017, the Jamia provides accessible
            Islamic education to students globally. Our programs combine
            traditional teachings with modern educational tools, creating an
            inclusive and effective learning environment for students of all
            backgrounds.
            <p className="hidden sm:block mt-5 text-base md:text-lg">
              Jamia Abi Hurairah, an esteemed online institution under the
              supervision of Khanqah-eDar-ul-Ehsan, was established
            </p>
          </p>
          <button
            onClick={Expand}
            className={`mt-5 rounded-full bg-blue-600 p-4 h-[30px] w-[30px] text-white flex justify-center items-center cursor-pointer ${
              expanded ? "rotate-45" : "rotate-0"
            } transition-all duration-[900ms]`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export function FeatureCourse() {
  return (
    <div className="flex justify-center w-full px-4 md:px-6 lg:px-0">
      <div className="w-full lg:w-[1140px] flex justify-around sm:justify-between flex-col">
        <div className="text-[45px]">Feature Course</div>
        <Rows />
        <p className="lg:w-[720px] text-base md:text-lg flex justify-center">
          A 4 years + 2 Years foundational course exclusively for male students,
          the Basic Aalimiyyat Course introduces students to key areas of
          Islamic knowledge. This course emphasizes Arabic language skills and
          provides a structured path to understanding essential Islamic beliefs,
          jurisprudence, and etiquettes
        </p>
        <Rows />

        <div
          style={{ backgroundColor: "#11286E" }}
          className="p-40 h-[450px] rounded-br-[80px]  "
        ></div>
      </div>
    </div>
  );
}

export function Popular() {
  return (
    <div className="flex justify-center w-full px-4 md:px-6 lg:px-0">
      <div className="w-full lg:w-[1140px] flex justify-around sm:justify-between flex-col">
        <div className="text-[28px] md:text-[35px] lg:text-[45px]">
          Popular/New Courses
        </div>
        <Rows />
        <p className="text-base md:text-lg max-w-full lg:max-w-[700px]">
          A 4 years + 2 Years foundational course exclusively for male students,
          the Basic Aalimiyyat Course introduces students to key areas of
          Islamic knowledge. This course emphasizes Arabic language skills and
          provides a structured path to understanding essential Islamic beliefs,
          jurisprudence, and etiquettes
        </p>
        <Rows />

        <div
          style={{ backgroundColor: "#F3F3F3" }}
          className="min-h-[200px] flex flex-col md:flex-row gap-4 md:gap-1 "
        >
          <Boxes />
          <Boxes />
          <Boxes />
        </div>
      </div>
    </div>
  );
}
export function Testimonial() {
  return (
    <div className="flex justify-center w-full h-full px-4 md:px-6 lg:px-0">
      <div className="w-full lg:w-[1140px] h-full flex justify-around sm:justify-between flex-col">
        <div className="text-[28px] md:text-[35px] lg:text-[55px]">
          Testimonial
        </div>
        <Rows />
        <div
          style={{ backgroundColor: "#F3F3F3" }}
          className="rounded-tl-[100px] p-4 lg:px-[40px] lg:py-[20px] min-h-[270px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4"
        >
          <div className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] bg-blue-200 rounded-full flex items-center justify-center overflow-hidden aspect-square">
            <img
              src="/Pic.png"
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[594px] h-[150px]  bg-blue-300"></div>
          <div className="lg:w-[120px] md:w-[120px] w-full gap-[10px] flex justify-end lg:justify-center md:justify-center items-end md:items-end h-full md:h-[40px] lg:h-40">
            <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] bg-[#0044CB] rounded-full" />
            <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] bg-[#0044CB] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeaderShip() {
  return (
    <div className="flex justify-center w-full px-4 md:px-6 lg:px-0 mb-[100px]">
      <div className="w-full lg:w-[1140px] flex justify-around sm:justify-between flex-col">
        <div className="text-[28px] md:text-[35px] lg:text-[45px]">
          LeaderShip
        </div>
        <Rows />
        <p className="text-base md:text-lg max-w-full lg:max-w-[700px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel
          ipsa repudiandae voluptate voluptatum reiciendis animi rem,
          consequatur nisi adipisci?
        </p>
        <Rows />
        <div
          style={{ backgroundColor: "#F3F3F3" }}
          className="min-h-[200px] flex flex-col justify-center items-center md:flex-row gap-4 md:gap-9"
        >
          <Boxes />
          <Boxes />
          <Boxes />
        </div>
      </div>
    </div>
  );
}

export function Boxes() {
  return (
    <div
      style={{ backgroundColor: "grey" }}
      className="text-white lg:h-full md:h-full h-[200px] w-full  md:w-[300px] lg:w-[400px] hover:greyscale-100 cursor-pointer"
    ></div>
  );
}

export function Rows() {
  return <div className="h-[45px] w-full "></div>;
}
