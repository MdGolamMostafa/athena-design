import React from "react";
import About from "../About/About";
import Achievements from "../Achievements/Achievements";
import Footer from "../Footer/Footer";
import GetSearchDesign from "../GetSearchDesign/GetSearchDesign";
import Home from "../Home/Home";
import Project from "../Project/Project";
import Team from "../Team/Team";
const AllPages = () => {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <Achievements />
      <Team />
      <GetSearchDesign />
      <Footer />
    </div>
  );
};

export default AllPages;
