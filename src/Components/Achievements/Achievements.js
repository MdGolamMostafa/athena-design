import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import './Achievements.css';
// import './Achievements.scss';
const Achievements = () => {
    return (
        <Container className="my-5" id="pricing">
            <Row className  = "align-items-center justify-content-center">
                <Col className = "mr-5" sm={4} xl={4} md={6} xs={12}>
                    <h1>Our Achievements</h1>
                        <h6>
                            It is a long established fact that a reader will be distratced by
                            the readable content of a page when looking at its layout. The point
                            of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letter.
                        </h6>
                </Col>
                <Col sm={12} xl={7} md={12} xs={12}>
                    <Row >
                        <Col className = "mb-4" >
                            <Row className=" mr-1 about-button align-items-center justify-content-center ">
                                <div className="mr-4">
                                    <Image
                                        style={{width: '50px', height: '50px'}}
                                        src={"https://i.ibb.co/pZmzQGt/happy-2x.png"}
                                    />
                                </div>
                                <div>
                                    <h2>700+</h2>
                                    <h5>Happy Clients</h5>
                                </div>
                            </Row>
                        </Col>
                        <Col >
                            <Row className = "ml-2 achievements-bottom d-flex align-items-center justify-content-center ">
                                <div className = "pr-2">
                                    <Image
                                        style={{width: '50px', height: '50px'}}
                                        src={"https://i.ibb.co/kD6LTc0/marketing-2x.png"} className="secondary" 
                                    />
                                </div>
                                <div>
                                    <h2>140+</h2>
                                    <h6>Projects Completed</h6>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className = "  achievements-bottom d-flex align-items-center justify-content-center ">
                            <Row >
                                <div className ="pr-2">
                                    <Image 
                                        style={{width: '50px', height: '50px'}}
                                        src={"https://i.ibb.co/r5dpjw4/surface1-2x.png"}
                                        />
                                </div>            
                                <div>
                                    <h2>25+</h2>
                                    <h5>Crazy Minds</h5>
                                </div>
                            </Row>
                        </Col>

                        <Col  className="  about-running ml-5">
                            <Row className = " align-items-center justify-content-center ">
                                <div className="mr-4">
                                    <Image
                                        style={{width: '50px', height: '50px'}}
                                        src={"https://i.ibb.co/D5CPLxB/transportation-2x.png"}
                                        className="secondary"
                                    />
                                </div>
                                <div>
                                    <h2>75+</h2>
                                    <h5>Running Projects</h5>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Achievements;
