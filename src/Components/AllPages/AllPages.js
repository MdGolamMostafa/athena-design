import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import GetSearchDesign from "../GetSearchDesign/GetSearchDesign";
import Home from "../Home/Home";
import Project from "../Project/Project";
const AllPages = () => {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <GetSearchDesign />
      <Footer />
    </div>
  );
};

export default AllPages;
