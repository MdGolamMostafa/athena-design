import React from "react";
import { Button, Container, InputGroup } from "react-bootstrap";

const GetSearchDesign = () => {
  return (
    <Container id="contact">
      <h1>Get your design right, right now</h1>
      <p>be the first know our latest offers and updates!</p>

      <div className="mx-auto w-50">
        <InputGroup>
          <input
            placeholder="Enter your email address"
            className="form-control"
          />
          <Button>Get Started</Button>
        </InputGroup>
      </div>
    </Container>
  );
};

export default GetSearchDesign;
