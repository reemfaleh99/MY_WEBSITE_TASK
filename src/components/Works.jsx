import React from "react";
import work from "../assets/work.jpg";
import ArrowDown from "./ArrowDown";
import Title from "./Title";

import codeImg from "../assets/code.jpg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Works = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".left-animm", {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".right-animm", {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  });

  return (
    <div className="w-full h-screen relative font-poppins text-white">
      <img src={work} alt="" className="h-full w-full" />
      <div className="absolute w-full h-full bg-black/70 left-0 top-0"></div>
      <div className="hidden md:block">
        <ArrowDown />
      </div>{" "}
      <div className="flex flex-col gap-5 items-center absolute top-[40%] md:top-1/2 left-1/2 transform -translate-y-[40%] -translate-x-1/2">
        <Title
          title="works"
          desc="i hade pleasure of working with thtese awesome projects"
        />
        <div className="flex items-center gap-3 lg:gap-24 work-section">
          <MdArrowBackIos className="md:w-10 md:h-10 w-8 h-8 bg-gray-600/90 rounded-full p-1" />
          <div className="flex flex-col sm:flex-row items-end gap-5">
            <div className="flex flex-col items-center left-animm">
              <div className="w-48 h-64 border-8 border-third">
                <img src={codeImg} alt="" className="object-cover h-full" />
              </div>
              <div className="w-8 h-12 bg-third"></div>
              <div className="w-24 h-2 bg-third rounded-t-2xl"></div>
            </div>
            <div className="flex flex-col items-center right-animm">
              <a className="text-2xl text-second border-b-2 border-white my-3 font-jet">
                view website
              </a>
              <div className="w-72 h-40 rounded-t-2xl border-8 border-third">
                <img
                  src={codeImg}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-72 h-6 rounded-b-2xl bg-white flex justify-center items-center">
                <div className="w-5 h-5 bg-third rounded-full "></div>
              </div>
              <div className="w-8 h-8 bg-white"></div>
              <div className="w-24 h-2 bg-white rounded-2xl"></div>
            </div>
          </div>
          <MdArrowForwardIos className="md:w-10 md:h-10 w-8 h-8 bg-gray-600/90 rounded-full p-1" />
        </div>
      </div>
    </div>
  );
};

export default Works;
