import React, { useEffect, useState } from "react";
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

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=df2952b9f605473a8976d1749bb8acc2"
    )
      .then((res) => res.json())
      .then((json) => setData(json.articles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full h-screen relative font-poppins text-white ">
      {/* mouse and arrow */}
      <div className="hidden xl:block">
        <ArrowDown />
      </div>
      <div className=" absolute top-[42%] xl:top-1/2 transform -translate-y-[40%] left-0 w-full h-full flex flex-col items-center justify-center">
        {/* title */}
        <Title
          title="blogs"
          desc="my thoughts on techmology and business, welcome to subscribe"
        />
        {/* blog */}
        <div className="w-full flex flex-col items-center  space-y-10 blog">
          <Blog articles={data.slice(0, 1)} />
        </div>
        {/* buttons */}
        <div className="flex gap-10">
          <Link to="/blogs">
            <button className="hover:bg-white hover:text-second cursor-pointer transition duration-200 bg-second py-2 px-6 rounded-full capitalize text-black">
              view more
            </button>
          </Link>
          <button className="hover:bg-second cursor-pointer transition duration-200 border border-second py-2 px-6 rounded-full capitalize">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
