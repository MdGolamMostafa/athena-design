import React from "react";

const Footer = () => {
  return (
    
    <div className = "pt-3 mt-5">
      <div >
      <div className="row">
        <div className = " ml-5 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div  className="mb-4 ml-5 pl-5 ">
              <img
                style={{ width: "140px", height: "95px" }}
                src={"https://i.ibb.co/f2Ksjpq/Group-86.png"}
                alt="Logo img"
              />
            </div>

          <div className="mb-4 ml-5 pl-5">
              <img className="mr-3" src={"https://i.ibb.co/CPbGLyb/facebook-logo-in-circular-shape-2x.png"} alt=""/>
              <img className="mr-3" src={"https://i.ibb.co/CPbGLyb/facebook-logo-in-circular-shape-2x.png"} alt=""/>
              <img className="mr-3" src={"https://i.ibb.co/CPbGLyb/facebook-logo-in-circular-shape-2x.png"} alt=""/>
              <img className="mr-3" src={"https://i.ibb.co/CPbGLyb/facebook-logo-in-circular-shape-2x.png"} alt=""/>
              <img className="mr-3" src={"https://i.ibb.co/CPbGLyb/facebook-logo-in-circular-shape-2x.png"} alt=""/>
          </div>
        </div>
        
        <div className="d-flex justify-content-center  mt-2 col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
          <ul>
            <li>Features</li>
            <li>Enterprise</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="d-flex justify-content-center mt-2 col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Status</li>
          </ul>
          </div>
        <div className="d-flex justify-content-center ml-3 mt-2 col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
          <ul >
            <li>About Us</li>
            <li>Terms of Service</li>
            <li>Security</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;