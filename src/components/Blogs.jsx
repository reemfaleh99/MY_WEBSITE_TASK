import React from "react";
import ArrowDown from "./ArrowDown";
import Title from "./Title";
import Blog from "./Blog";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Blogs = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".blog", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".blog",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div className="w-full h-screen relative font-poppins text-white ">
      <div className="hidden md:block">
        <ArrowDown />
      </div>
      <div className=" absolute top-[42%] md:top-1/2 transform -translate-y-[40%] left-0 w-full h-full flex flex-col items-center justify-center">
        <Title
          title="blogs"
          desc="my thoughts on techmology and business, welcome to subscribe"
        />
        <div className="w-full flex flex-col items-center mt-10 space-y-10 blog">
          <Blog />
        </div>

        <div className="flex gap-10">
          <Link to="/blogs">
            <button className="bg-second py-2 px-6 rounded-full capitalize text-black">
              view more
            </button>
          </Link>
          <button className="border border-second py-2 px-6 rounded-full capitalize">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
