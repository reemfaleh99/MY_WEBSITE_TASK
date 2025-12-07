import React from "react";
import { BiBuilding, BiDownload } from "react-icons/bi";
import { MdEmail, MdLink, MdLocationPin } from "react-icons/md";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const info = [
  {
    name: "riiiifaleh@gmail.com",
    icon: <MdEmail />,
  },
  {
    name: "Syria",
    icon: <MdLocationPin />,
  },
  {
    name: "Full time / Freelance",
    icon: <BiBuilding />,
  },
  {
    name: "Syria",
    icon: <MdLink />,
  },
];

const nums = [
  {
    num: 4,
    info: "programming language",
  },
  {
    num: 6,
    info: "Development tools",
  },
  {
    num: 8,
    info: "years of experience",
  },
];

const Header = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".header", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div className="text-white py-12 w-full md:px-28">
      {/* line under nav */}
      <span className="block w-full h-px bg-gray-600" />
      {/* header */}
      <div className="my-12 flex justify-center items-center flex-col xl:flex-row xl:items-end">
        {/* left section */}
        <div className="header">
          {/* word that appears in small screens */}
          <div className="block xl:hidden">
            <h1 className="text-6xl md:text-8xl text-second mb-18 block xl:hidden text-center">
              Developer
            </h1>
          </div>
          {/* info card */}
          <div className="flex flex-col items-center font-jet border-4 border-white rounded-tl-[150px] rounded-br-[150px] p-12 relative w-[90%] ">
            {/* second border */}
            <span className="absolute block -left-2 -top-2 border-second border-l-4 border-t-4 p-12 h-full w-40 rounded-tl-[160px] pointer-events-none" />
            <img
              src="https://img.freepik.com/premium-vector/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5442.jpg?semt=ais_hybrid&w=740&q=80"
              alt="error"
              className="w-24 h-24 rounded-full my-3"
            />
            <h4>Reem</h4>
            <span>Front-end Developer</span>
            {/* info */}
            <ul className="mt-4">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon} {item.name}
                </li>
              ))}
            </ul>
            {/* skills */}
            <ul className="flex gap-2 my-5">
              <li className="bg-second text-black px-3 py-1 rounded-full">
                HTML
              </li>
              <li className="bg-second text-black px-3 py-1 rounded-full">
                CSS
              </li>
              <li className="bg-second text-black px-3 py-1 rounded-full">
                JS
              </li>
              <li className="bg-second text-black px-3 py-1 rounded-full">
                REACTJS
              </li>
            </ul>
            {/* download cv */}
            <a href="/Reem-faleh.pdf" download>
              <button className="flex items-center gap-2 bg-white text-black p-3 rounded-full text-xl cursor-pointer">
                Download CV <BiDownload />
              </button>
            </a>
          </div>
        </div>
        {/* right section */}
        <div className="header flex flex-col md:flex-row items-center md:items-end justify-evenly">
          {/* summery */}
          <div className="w-[90%] md:w-1/2 xl:w-1/2 font-poppins">
            {/* word that appears in small screens */}
            <h1 className="text-8xl text-second mb-18 hidden xl:block">
              Developer
            </h1>
            <div className="mb-5">
              <span className="text-second me-3 text-sm font-md">
                &lt;h1&gt;
              </span>
              <p className="text-5xl my-3 ml-5">
                hey <br /> i'm <span className="text-second">Reem</span>, <br />{" "}
                front-end developer
                <span className="text-second me-3 text-sm font-md">
                  &lt;h1/&gt;
                </span>
              </p>
            </div>
            <div>
              <span className="text-second me-3 text-sm font-md">
                &lt;p&gt;
              </span>
              <p className="text-gray-400 font-jet text-sm my-3 ml-5">
                I help business grow by crafting amazing web experinces. If
                you're looking for a developer that likes to get stuff done
              </p>
              <span className="text-second me-3 text-sm font-md">
                &lt;p/&gt;
              </span>
            </div>
            <span className="text-3xl flex items-center gap-3 my-5 font-jet text-second">
              let's talk <MdEmail className="bg-white/40 rounded-full p-1" />
            </span>
          </div>
          {/* summery nums */}
          <ul className=" bg-black/50 p-10 rounded-[30%] font-jet w-[40%] 2xl:w-[20%]">
            {nums.map((item, index) => (
              <li
                className="my-10 text-sm flex justify-center items-center gap-5"
                key={index}
              >
                <span className="text-5xl text-second">{item.num}</span>{" "}
                <p>{item.info}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
