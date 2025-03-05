"use client";
import { useState } from "react";

export function HeroSection() {
  return (
    <div className="flex items-center flex-col w-full">
      <Rows />
      <Rows />
      <Rows />
      <Rows />

      <div className="max-w-screen-lg   h-[360px]   ">
        <div className="flex items-center gap-20">
          <div className="">
            <div className="text-[32px] text-[#0044CB]">السلام عليكم!</div>
            <div className="text-[57px] text-blue-950  leading-none">
              welcome to
            </div>
            <div className="text-[57px] text-blue-950 font-bold leading-none">
              Jamia Abi Huraira Online
            </div>
            <div className="w-[640px]">
              Your gateway to transformative Islamic education. This portal
              connects students and seekers of knowledge worldwide to a dynamic
              learning environment. Explore courses, access resources, and
              engage with knowledgeable instructors—all designed to combine
              traditional values with modern accessibility.
            </div>
          </div>

          <div className="hidden sm:block w-[200px]  ">
            {" "}
            <img height="213" width="213" src="/Qr.svg" alt="" />{" "}
          </div>
        </div>
      </div>

      <Rows />
      <div className="flex justify-center">
        <img
          className=" sm:max-w-screen-lg  h-[540px] w-[auto]   "
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
      className={`h-[100vh]  py-20 px-10 w-full fixed ${
        showMenu ? "right-[0%]" : "right-[-100%]"
      } transition-all duration-[1500ms] bg-[#f2f2f2] `}
    >
      <div className="p-3 hover:bg-slate-300 cursor-pointer">Home</div>
      <div className="p-3  hover:bg-slate-300 cursor-pointer">Courses</div>
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
    <div className="flex justify-center w-full ">
      <div className="max-w-screen-lg flex justify-around sm:justify-between flex-col lg:px-0  w-full">
        <div className="text-[45px] ">About us</div>
        <Rows />

        <div
          style={{ backgroundColor: "#F3F3F3" }}
          className={`transition-all duration-[1500ms] overflow-y-hidden px-20 ${
            expanded ? "h-[720px]" : "h-[360px]"
          }`}
        >
          <Rows />
          <Rows />
          <p>
            {" "}
            Jamia Abi Hurairah, an esteemed online institution under the
            supervision of Khanqah-eDar-ul-Ehsan, was established with the
            mission to impart essential Islamic knowledge alongside spiritual
            guidance. Founded by Hazrat Maulana Sayyed Mohammed Talha Saheb
            Qasmi Naqshbandi Mujaddidi DB in 2017, the Jamia provides accessible
            Islamic education to students globally. Our programs combine
            traditional teachings with modern educational tools, creating an
            inclusive and effective learning environment for students of all
            backgrounds.
            <p className="hidden sm:block mt-5">
              Jamia Abi Hurairah, an esteemed online institution under the
              supervision of Khanqah-eDar-ul-Ehsan, was established
            </p>{" "}
          </p>

          <div
            onClick={Expand}
            className={`mt-5 rounded-full bg-blue-600 p-4 h-[30px] w-[30px] text-white flex justify-center items-center cursor-pointer ${
              expanded ? "rotate-45" : "rotate-0"
            } transition-all duration-[900ms]  `}
          >
            +
          </div>
          {/* 
            <p className="py-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ullam quam odit voluptates. Omnis harum sint, sed suscipit, voluptatem eius recusandae quasi sit odio obcaecati necessitatibus in id qui assumenda minus non tempore, porro asperiores ipsa aspernatur animi adipisci libero inventore corporis! Aspernatur suscipit cum numquam ut voluptates quos unde dicta alias, iure assumenda atque consequatur illum explicabo in architecto.</p> */}
        </div>
      </div>
    </div>
  );
}

export function FeatureCourse() {
  return (
    <div className="flex justify-center w-full  ">
      <div className="max-w-screen-lg flex justify-around sm:justify-between flex-col  w-full  px-5 lg:px-0 ">
        <div className="text-[45px]">Feature Course</div>
        <Rows />
        <p className="w-[720px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil iste
          consectetur ipsam reprehenderit sint dolores corporis cupiditate nemo,
          at possimus mollitia minima perspiciatis? Inventore, perferendis
          sapiente consectetur distinctio molestiae deserunt?
        </p>
        <Rows />

        <div
          style={{ backgroundColor: "#11286E" }}
          className=" p-40 rounded-br-[80px]  "
        ></div>
      </div>
    </div>
  );
}

export function Popular() {
  return (
    <div className="flex justify-center w-full ">
      <div className="max-w-screen-lg flex justify-around sm:justify-between flex-col w-full  px-5 lg:px-0 ">
        <div className="text-[45px]">Popular/New Courses</div>
        <Rows />
        <p className="w-[700px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          beatae officia maiores necessitatibus nihil corporis deserunt. Nisi
          voluptatum beatae dolor tempore tenetur sed magnam. Illo obcaecati
          commodi incidunt tempore similique.
        </p>
        <Rows />

        <div
          style={{ backgroundColor: "#F3F3F3" }}
          className=" sm:h-[200px]  flex gap-1"
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
    <div className="flex justify-center w-full ">
      <div className="max-w-screen-lg flex justify-around sm:justify-between flex-col w-full  px-5 lg:px-0">
        <div className="text-[45px]">Testimonial</div>
        <Rows />

        <div
          style={{ backgroundColor: "#F3F3F3" }}
          className=" px-5 sm:px-20 h-[270px]  "
        >
          <Rows />
          Jamia Abi Hurairah, an esteemed online institution under the
          supervision of Khanqah-eDar-ul-Ehsan, was established with the mission
          to impart essential Islamic knowledge alongside spiritual guidance.
          Founded by Hazrat Maulana Sayyed Mohammed Talha Saheb Qasmi Naqshbandi
          Mujaddidi DB in 2017, the Jamia provides accessible Islamic education
          to students globally. Our programs combine traditional teachings with
          modern educational tools, creating an inclusive and effective learning
          environment for students of all backgrounds.
        </div>
      </div>
    </div>
  );
}

export function LeaderShip() {
  return (
    <div className="flex justify-center w-full mb-[100px] ">
      <div className="max-w-screen-lg flex justify-around sm:justify-between flex-col   w-full  px-5 lg:px-0">
        <div className="text-[45px]">LeaderShip</div>
        <Rows />
        <p className=" w-[700px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel
          ipsa repudiandae voluptate voluptatum reiciendis animi rem,
          consequatur nisi adipisci?
        </p>

        <Rows />
        <div
          style={{ backgroundColor: "#F3F3F3" }}
          className="h-[200px] flex gap-9 "
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
      className=" text-white h-full w-full hover:greyscale-100 cursor-pointer "
    ></div>
  );
}

export function Rows() {
  return <div className="h-[45px] w-full "></div>;
}
