import React from "react";
import AppRoutes from "../routes/AppRoutes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <div className="px-5 md:px-28">
        <Navbar />
      </div>
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default Layout;
