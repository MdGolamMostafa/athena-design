import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../Home/Home.css";

const Project = () => {
  return (
    <Container>
      <Row>
        <Col md={6} xs={12}>
          <Image
            src="/images/20 [Converted]@2x.png"
            style={{ width: "100%" }}
          />
        </Col>
        <Col md={6} xs={12} style={{ marginTop: "150px" }}>
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
