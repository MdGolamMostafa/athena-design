import React from "react";
import './GetSearchDesign.css'

const GetSearchDesign = () => {
  return (
    <div className = "container">
        <div className = "row d-flex justify-content-center">
            <div className = "text-center col-9 col-sm-9 col-md-9 col-lg-6 col-xs-6">
                <h2>Get your design right, right now</h2>
                    <p>Be the first know our latest offers and updates!</p>
                        <div className = "position-relative text-center">
                            <input
                                type="email"
                                style={{zIndex:-1}} 
                                placeholder="Enter your email address"
                                className="form-control shadow "
                                
                              /> 
                            <button className = " h-75 w-25 email-button ">Get Started</button>
                        </div>
            </div> 
        </div>
    </div>
  );
};

export default GetSearchDesign;
