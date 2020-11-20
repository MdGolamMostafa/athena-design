import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Achievements = () => {
  return (
    <Container>
      <Row>
        <Col md={6} xs={12}>
          <h1>Our Achievements</h1>
          <p>
            It is a long established fact that a reader will be distratced by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter.
          </p>
        </Col>
        <Col md={6} xs={12}>
          <Row>
            <Col>
              <Row className="bg-info">
                <Col>
                  <Image src="/images/happy@2x.png" />
                </Col>
                <Col>
                  <h2>700+</h2>
                  <h5>Happy Clients</h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Image src="/images/marketing@2x.png" className="secondary" />
                </Col>
                <Col>
                  <h2>700+</h2>
                  <h5>Happy Clients</h5>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Image src="/images/surface1@2x.png" className="secondary" />
                </Col>
                <Col>
                  <h2>700+</h2>
                  <h5>Happy Clients</h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Image
                    src="/images/transportation@2x.png"
                    className="secondary"
                  />
                </Col>
                <Col>
                  <h2>700+</h2>
                  <h5>Happy Clients</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievements;
