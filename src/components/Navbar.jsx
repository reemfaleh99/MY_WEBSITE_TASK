import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaEarthAfrica } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const socialLinks = [
  {
    icon: <BsInstagram className="text-second" />,
    label: "instagram",
    path: "",
  },
  {
    icon: <FaEarthAfrica className="text-second" />,
    label: "portfolio",
    path: "https://reem-faleh-portfolio.vercel.app/",
  },
  {
    icon: <BsGithub className="text-second" />,
    label: "github",
    path: "https://github.com/reemfaleh99",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white font-jet">
      {/* name */}
      <div className="text-2xl">
        <span className="text-second me-3">&lt;C/&gt;</span>
        <span>ReemFaleh</span>
      </div>
      <div className="flex gap-10 lg:gap-16 xl:gap-20">
        {/* nav pages */}
        <ul className="flex gap-2 md:gap-6 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-second" : "text-white"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-second" : "text-white"
            }
          >
            <li>Blog</li>
          </NavLink>
        </ul>
        {/* search */}
        <form className="relative">
          <input
            type="text"
            className="bg-white px-3 py-1 rounded-2xl hidden lg:block"
          />
          <BiSearch className="text-white lg:text-black absolute right-3 top-1/4  " />
        </form>
        {/* socialLinks */}
        <ul className="lg:flex gap-5 text-sm font-medium hidden">
          {socialLinks.map((item, index) => (
            <a
              href={item.path}
              target="_blank"
              className="flex items-center gap-2"
              key={index}
            >
              <span>{item.icon}</span>
              <span className="hidden xl:block">{item.label}</span>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
