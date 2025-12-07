import React, { useEffect } from "react";
import Title from "../components/Title";
import Blog from "../components/Blog";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Blogs = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".blog",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".blog",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-24 px-5 ">
      {/* Title */}
      <Title
        title="blogs"
        desc="my thoughts on technology and business, welcome to subscribe"
      />

      {/* Subscribe Button */}
      <button className="mt-10 text-white border border-second py-2 px-6 rounded-full capitalize">
        subscribe my blogs
      </button>

      {/* Blogs */}
      <div className="w-full flex flex-col items-center mt-10 space-y-10 blog">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default Blogs;
