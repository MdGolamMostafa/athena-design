import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center mt-4">
        <Col xs={8} md={4}>
          <img
            style={{ width: "50%", height: "60%" }}
            className="mb-4"
            src={"https://i.ibb.co/f2Ksjpq/Group-86.png"}
            alt=""
          />

          <Row>
            <Col>
              <img
                src={
                  "https://i.ibb.co/CPbGLyb/facebook-logo-in-circular-shape-2x.png"
                }
                alt=""
              />
            </Col>
            <Col>
              <img src={"https://i.ibb.co/QMy874b/linkedin-2-2x.png"} alt="" />
            </Col>
            <Col>
              <img
                src={
                  "https://i.ibb.co/CPbGLyb/facebook-logo-in-circular-shape-2x.png"
                }
                alt=""
              />
            </Col>
            <Col>
              <img src={"https://i.ibb.co/chjZL5J/twitter-4-2x.png"} alt="" />
            </Col>
            <Col>
              <img src={"https://i.ibb.co/xqJzZhr/dribbble-1-2x.png"} alt="" />
            </Col>
          </Row>
        </Col>
        <Col xs={3} md={2}>
          <Col>Features</Col>
          <Col>Enterprise</Col>
          <Col>Pricing</Col>
        </Col>
        <Col xs={3} md={2}>
          <Col>Blog</Col>
          <Col>Help Center</Col>
          <Col>Contact Us</Col>
          <Col>Status</Col>
        </Col>
        <Col xs={3} md={2}>
          <Col>About Us</Col>
          <Col>Terms of Service</Col>
          <Col>Security</Col>
          <Col>Login</Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

// {
//   /* <ul style={{listStyle:'none'}} className="row ">
//                             <li className="ml-5 mr-5"><img src={'https://i.ibb.co/CPbGLyb/facebook-logo-in-circular-shape-2x.png'} alt=""/></li>
//                             <li className="mr-5"><img src={"https://i.ibb.co/QMy874b/linkedin-2-2x.png"} alt=""/></li>
//                             <li className="mr-5"><img src={"https://i.ibb.co/chjZL5J/twitter-4-2x.png"} alt=""/></li>
//                             <li className="mr-2"><img src={"https://i.ibb.co/xqJzZhr/dribbble-1-2x.png"} alt=""/></li>
//                         </ul> */
// }
