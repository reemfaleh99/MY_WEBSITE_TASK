import React, { useLayoutEffect } from "react";
import { MdMouse } from "react-icons/md";
import gsap from "gsap";

const ArrowDown = () => {
  useLayoutEffect(() => {
    // Mouse pulse
    gsap.to(".mouse-icon", {
      scale: 1.1,
      opacity: 0.8,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    // Lines animation cascade
    gsap.to(".line", {
      y: 10,
      opacity: 0,
      repeat: -1,
      yoyo: false,
      duration: 2,
      ease: "power1.out",
      stagger: 0.15,
    });

    // Arrow bounce
    gsap.to(".arrow", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 justify-center">
      <MdMouse className="mouse-icon w-12 h-12 text-second" />
      {/* the arrow line*/}
      <div>
        <div className="line w-px h-2 bg-white mb-1" />
        <div className="line w-px h-2 bg-white mb-1" />
        <div className="line w-px h-2 bg-white mb-1" />
        <div className="line w-px h-2 bg-white mb-1" />
        <div className="line w-px h-3 bg-white" />
      </div>

      {/* end of arrow */}
      <div className="arrow w-2 h-2 border-4 transform rotate-45 bg-white" />
    </div>
  );
};

export default ArrowDown;
