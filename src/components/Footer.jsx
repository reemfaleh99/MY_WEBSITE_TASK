import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaEarthAfrica } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".footer-anim", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".footer-sec",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <footer className="footer-sec relative font-poppins text-white py-10  capitalize text-xl">
      <div className="absolute w-full h-full bg-black/70 inset-0 z-0"></div>

      <div className="relative z-20 flex md:flex-row flex-col items-center justify-center gap-8 md:gap-20">
        <span className="footer">2025 ReemFaleh</span>{" "}
        <div className="footer">
          <span className="me-5">privacy policy</span>
          <span>terms & conditions</span>
        </div>
        <div className="footer flex gap-8">
          <BsInstagram className="bg-second text-third p-2 rounded-full w-10 h-10" />
          <FaEarthAfrica className="bg-second text-third p-2 rounded-full w-10 h-10" />
          <BsGithub className="bg-second text-third p-2 rounded-full w-10 h-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
