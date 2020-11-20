import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../Home/Home.css";

const Project = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} xs={12}>
          <Image
            src="/images/20 [Converted]@2x.png"
            style={{ width: "100%", verticalAlign: "middle" }}
          />
        </Col>
        <Col md={6} xs={12} className="mt-5">
          <h1>Stay Running & Project</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter.
          </p>
          <Button className="button-design-style color-dark md-=4">
            See Pricing
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
