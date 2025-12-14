import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaEarthAfrica, FaInstagram, FaLinkedin } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Overlay from "./Overlay";

const socialLinks = [
  {
    icon: <BsInstagram />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/reem-faleh-9b9579247/",
  },
  {
    icon: <BsGithub />,
    path: "https://github.com/reemfaleh99",
  },
];

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
    <footer className="footer-sec relative font-poppins text-white py-5 capitalize text-xl">
      <Overlay />
      <div className="px-6 md:px-28 relative z-20 flex md:flex-row flex-col items-center justify-between gap-8 md:gap-20">
        {/* name */}
        <span className="footer">&reg; 2025 ReemFaleh</span>
        {/* options */}
        <div className="footer cursor-pointer">
          <span className="me-5 hover:text-second">privacy policy</span>
          <span className="hover:text-second">Terms & conditions</span>
        </div>
        {/* social icons */}
        <div className="footer flex gap-8">
          {socialLinks.map((item, index) => (
            <a
              href={item.path}
              target="_blank"
              className="flex items-center justify-center gap-2  "
              key={index}
            >
              <span className="bg-second hover:text-second transition duration-300 hover:bg-third text-third p-2 rounded-full w-10 h-10 flex items-center justify-center">
                {item.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
