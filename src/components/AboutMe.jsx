import React from "react";

import aboutme from "../assets/aboutme.jpg";
import ArrowDown from "./ArrowDown";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMe = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".left-anim", {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".right-anim", {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  });

  return (
    <div className="w-full h-screen relative font-poppins text-white">
      {/* background img */}
      <img src={aboutme} alt="" className="w-full h-full" />
      {/* mouse and arrow */}
      <div className="hidden xl:block">
        <ArrowDown />
      </div>

      <div className="about-section absolute top-[30%] xl:top-1/2 transform -translate-y-1/2 flex flex-col items-center xl:flex-row px-5 md:px-12 lg:px-48 h-1/2 ">
        <div className="left-anim">
          {/* title */}
          <h3 className="bg-black/80 w-fit px-8 py-4 text-5xl border-4 border-second rounded-tl-4xl rounded-br-4xl">
            About me
          </h3>
          {/* text */}
          <p className="bg-third px-3 md:px-8 py-4 my-6 xl:my-15 w-full xl:w-3/4 rounded-4xl">
            <span className="text-second/80 me-3 text-sm font-md">
              &lt;p&gt;
            </span>

            <h5 className="text-2xl text-second">Hello!</h5>

            <p className="text-gray-400 font-jet text-sm my-3">
              My name is Reem and I specialize in front-end development that
              utilizes
              <span className="text-second"> HTML, CSS, JS and REACT.</span>
              <br />
              <br />
              I am a highly motivated individual and eternal optimist dedicated
              to writing clear, concise, robust code that works.
              <br />
              <br />
              When I'm not coding, I am
              <span className="text-second"> writing blogs</span>, reading, or
              working on hands-on art projects like cooking.
            </p>

            <span className="text-second/80 me-3 text-sm font-md">
              &lt;p/&gt;
            </span>
          </p>
        </div>
        {/* right img */}
        <img
          className="right-anim w-full xl:w-1/4 h-[40%] sm:h-2/3 xl:h-full rounded-2xl"
          src="https://www.popphoto.com/uploads/2019/03/18/Z3SFCLVNI2GK7P2WO56WHEYN6Y.jpg?auto=webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
