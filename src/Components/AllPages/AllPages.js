import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import GetSearchDesign from "../GetSearchDesign/GetSearchDesign";
import Home from "../Home/Home";
const AllPages = () => {
  return (
    <div>
      <Home />
      <About />
      <GetSearchDesign />
      <Footer />
    </div>
  );
};

export default AllPages;
