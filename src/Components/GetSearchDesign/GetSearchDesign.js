import React from "react";
import './GetSearchDesign.css'
// import { Button, Container, InputGroup } from "react-bootstrap";

const GetSearchDesign = () => {
  return (
    // <Container id="contact">
    //   <h1>Get your design right, right now</h1>
    //   <p>be the first know our latest offers and updates!</p>

    //   <div className="mx-auto w-50">
    //     <InputGroup>
    //       <input
    //         placeholder="Enter your email address"
    //         className="form-control"
    //       />
    //       <Button>Get Started</Button>
    //     </InputGroup>
    //   </div>
    // </Container>
    <div className = "container">
      <div className = "row">
        <div className = "text-center col-9 col-sm-9 col-md-9 col-lg-6 col-xs-6">
        <h2>Get your design right, right now</h2>
        <p>Be the first know our latest offers and updates!</p>

        <div className = "position-relative text-center">
            
            <input
                type="email"
                style={{zIndex:-1}} 
                placeholder="Enter your email address"
                className="form-control  shadow d-inline"
                
              /> 
              
              <button className = "btn btn-primary ">Get Started</button>
              
        </div>

        </div> 
      </div>
    </div>
  );
};

export default GetSearchDesign;
