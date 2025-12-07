import React from "react";
import ArrowDown from "./ArrowDown";
import Title from "./Title";
import { AiOutlineMessage } from "react-icons/ai";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".contact", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".contact",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div className="w-full h-screen relative font-poppins text-white">
      <div className="absolute w-full h-full bg-black/70 left-0 top-0"></div>

      <div className="hidden md:block">
        <ArrowDown />
      </div>

      <div className="absolute top-[40%] md:top-[55%] transform -translate-y-[40%] left-0 w-full h-full flex flex-col items-center justify-center">
        <Title title="contact" desc="I'm currently available for work" />
        <h4 className="mt-10 text-3xl border-4 capitalize text-second border-second py-3 px-10 rounded-tl-4xl rounded-br-4xl mb-6">
          Send me a message
        </h4>
        <div className="my-10 w-full md:w-2/3">
          <form className=" w-full p-6 rounded-xl flex flex-col items-center gap-12">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="flex flex-col w-full contact">
                <label htmlFor="name" className="text-sm text-second mb-1">
                  Your Name*
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="border-b-2 border-second w-full p-2 placeholder:text-white"
                />
              </div>

              <div className="flex flex-col w-full contact">
                <label htmlFor="email" className="text-sm text-second mb-1">
                  Your Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-b-2 border-second w-full p-2  placeholder:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col w-full contact">
              <label htmlFor="message" className="text-sm text-second mb-1">
                Message*
              </label>
              <input
                id="message"
                placeholder="Write your message..."
                className="border-b-2 border-second w-full p-3 text-black placeholder:text-white"
              />
            </div>

            <button
              type="submit"
              className="contact flex items-center gap-3 w-fit bg-second text-black py-3 px-6 rounded-full cursor-pointer"
            >
              Send Message <AiOutlineMessage className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
