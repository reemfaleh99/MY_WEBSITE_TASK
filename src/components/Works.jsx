import work from "../assets/work.jpg";
import ArrowDown from "./ArrowDown";
import Title from "./Title";

import codeImg from "../assets/code.jpg";
import { MdArrowForwardIos } from "react-icons/md";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Overlay from "./Overlay";
import { projects } from "../assets/data/projects";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

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

  const [current, setCurrent] = useState(0); // المشروع الحالي

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[current];

  return (
    <div className="w-full h-screen relative font-poppins text-white">
      {/* background img */}
      <img src={work} alt="" className="h-full w-full" />
      {/* overlay */}
      <Overlay />
      {/* mouse and arrow */}
      <div className="hidden xl:block">
        <ArrowDown />
      </div>
      <div className="flex flex-col gap-5 items-center absolute top-[40%] xl:top-1/2 left-1/2 transform -translate-y-[40%] -translate-x-1/2">
        {/* title */}
        <Title
          title="works"
          desc="i had pleasure of working with these awesome projects"
        />
        <div className="flex items-center gap-3 lg:gap-24 work-section">
          <MdArrowForwardIos
            onClick={prevProject}
            className="hover:bg-second hover:text-third hover:w-12 hover:h-12 transition duration-300 cursor-pointer transform rotate-180 md:w-10 md:h-10 w-8 h-8 bg-gray-600/90 rounded-full p-1"
          />
          {/* moniters */}
          <div className="flex flex-col sm:flex-row items-end gap-5">
            {/* left moniter */}
            <div className="flex flex-col items-center left-animm">
              {/* img */}
              <div className="w-48 h-fit border-8 border-third p-3">
                <h4 className="capitalize text-xl font-bold text-center text-second">
                  {project.name}
                </h4>
                <p className="my-2">{project.description}</p>
                <a
                  href={project.github}
                  className="flex items-center bg-second w-fit px-2 rounded-2xl gap-1 text-third"
                >
                  github <BsGithub />
                </a>
              </div>
              <div className="w-8 h-12 bg-third"></div>
              <div className="w-24 h-2 bg-third rounded-t-2xl"></div>
            </div>
            {/* right moniter */}

            <div className="flex flex-col items-center right-animm">
              <a
                className="text-2xl text-second border-b-2 border-white my-3 font-jet"
                href={project.website}
                target="_blank"
              >
                view website
              </a>
              <div className="w-72 h-40 rounded-t-2xl border-8 border-third">
                <img
                  src={project.image}
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
          <MdArrowForwardIos
            onClick={nextProject}
            className="hover:bg-second hover:text-third hover:w-12 hover:h-12 transition duration-300 cursor-pointer md:w-10 md:h-10 w-8 h-8 bg-gray-600/90 rounded-full p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
