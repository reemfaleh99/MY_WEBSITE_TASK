import React from "react";
import codeImg from "../assets/code.jpg";
import ArrowDown from "./ArrowDown";
import { CgScreen } from "react-icons/cg";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import Title from "./Title";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";

const skills = [
  {
    name: "html",
    iconBg: "bg-orange-500",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    path: "html",
  },
  {
    name: "css",
    iconBg: "bg-blue-500",
    icon: <FaCss3 />,
    color: "text-blue-500",
    path: "css",
  },
  {
    name: "js",
    iconBg: "bg-yellow-500",
    icon: <DiJavascript />,
    color: "text-yellow-500",
    path: "js",
  },
  {
    name: "react",
    iconBg: "bg-blue-300",
    icon: <GrReactjs />,
    color: "text-blue-300",
    path: "react",
  },
];
const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".skill", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".skill",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });
  });

  return (
    <div className="w-full h-screen relative font-poppins text-white">
      {/* background img */}
      <img src={codeImg} alt="" className="h-full w-full" />
      {/* overlay */}
      <Overlay />
      {/* mouse and arrow */}
      <div className="hidden xl:block">
        <ArrowDown />
      </div>
      {/* tag icon */}
      <span className="skill hidden xl:block text-second/80 me-3 text-9xl font-medium absolute right-1/4 top-1/7">
        &lt;/&gt;
      </span>

      <div className="flex flex-col gap-5 items-center absolute top-[40%] xl:top-1/2 left-1/2 transform -translate-y-[40%] -translate-x-1/2">
        {/* title */}
        <Title
          title="Skills"
          desc="I am striving to never stop learning and improving"
        />
        {/* skill brief */}
        <div className="my-8 flex flex-col items-center rounded-xl p-4 gap-2 bg-second text-black border-l-8 border-blue-600">
          <CgScreen className="w-9 h-9" />
          <h5 className="capitalize font-semibold">front-end development</h5>
          <span>HTML - CSS - JS -RACTJS</span>
        </div>
        {/* tools */}
        <ul className="grid md:grid-cols-4 md:gap-38 grid-cols-2 gap-12">
          {skills.map((item, index) => (
            <Link to={item.path} key={index}>
              {" "}
              <li className=" skill flex flex-col items-center gap-5">
                <span
                  className={`${item.iconBg} hover:w-32 hover:h-32 transition-all duration-700 w-20 md:w-28 h-20 md:h-28 rounded-full flex items-center justify-center text-5xl md:text-6xl`}
                >
                  {item.icon}
                </span>

                <span
                  className={`${item.color} text-center text-3xl md:text-4xl uppercase`}
                >
                  {item.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
