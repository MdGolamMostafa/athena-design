import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavbarItems from "../Navbar/NavbarItems";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-background">
      <NavbarItems />
      <Container>
        <Row >
          <Col className="d-flex flex-column" md={6}>
            <h1 className="home-title-style">Florence agency</h1>
            <p
              style={{ fontSize: "16px", width: "70%" }}
              className="home-detail-style mt-5 mb-5"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur quae, nesciunt aperiam labore magnam corporis corrupti
              asperiores ipsa fugiat debitis magni ad.
            </p>
            <Button
            className="button-design-style  md-=4">
              See Pricing
            </Button>
            
          </Col>
          <Col md={6}>
            <img
              className="w-100"
              src={"https://i.ibb.co/1zLz6VJ/16-Converted-2x.png"}
              alt="Home-description-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
