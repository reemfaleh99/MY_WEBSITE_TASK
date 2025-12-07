import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="max-w-full">
      <Header />
      <AboutMe />
      <Skills />
      <Works />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
