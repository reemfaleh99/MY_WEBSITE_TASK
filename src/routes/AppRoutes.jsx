import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import ReactPage from "../pages/skills/ReactPage";
import HtmlPage from "../pages/skills/HtmlPage";
import CssPage from "../pages/skills/CssPage";
import JavascriptPage from "../pages/skills/JavascriptPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog-details/:id" element={<BlogDetails />} />
      <Route path="/react" element={<ReactPage />} />
      <Route path="/html" element={<HtmlPage />} />
      <Route path="/css" element={<CssPage />} />
      <Route path="/js" element={<JavascriptPage />} />
    </Routes>
  );
};

export default AppRoutes;
