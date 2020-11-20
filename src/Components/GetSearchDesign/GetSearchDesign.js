import React from "react";
import { Button, Container, InputGroup } from "react-bootstrap";

const GetSearchDesign = () => {
  return (
    <Container>
      <h1>Get your design right, right now</h1>
      <p>be the first know our latest offers and updates!</p>

      <div className="mx-auto">
        <InputGroup>
          <input
            placeholder="Enter your email address"
            className="form-control"
            className="w-50"
          />
          <Button>Get Started</Button>
        </InputGroup>
      </div>
    </Container>
  );
};

export default GetSearchDesign;
