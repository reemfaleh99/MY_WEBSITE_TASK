import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-5 capitalize text-center">
      {/* title */}
      <h4 className="text-center text-5xl text-second">{title}</h4>
      {/* line under title */}
      <div className="relative w-36 h-px bg-second rounded-full ">
        <div className="w-3 h-3 bg-second rounded-full absolute top-1/2 left-0 transform -translate-y-1/2" />
        <div className="w-3 h-3 bg-second rounded-full absolute top-1/2 right-0 transform -translate-y-1/2" />
      </div>
      {/* description */}
      <span className="font-jet text-white">{desc}</span>
    </div>
  );
};

export default Title;
