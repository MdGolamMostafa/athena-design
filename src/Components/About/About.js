import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="text-center" id="about">
        <h1 className ="text-center">What we do</h1>
            <h6 className = "text-dark">
                Our main focus is to make the User Experience very <br/> simple and easy.
                Simplicity is our Strength
            </h6>

        <CardDeck className="mt-5">
            <Card >
                <Card.Img className="mt-5" variant="top" src="/images/Group 65@2x.png" />
                    <Card.Body>
                        <Card.Title>Experience Design</Card.Title>
                            <Card.Text>
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal.
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card  className="card-interface pb-4">
                <Card.Img className="mt-5" variant="top" src="/images/Group 66@2x.png" />
                    <Card.Body >
                          <Card.Title>Interface Design</Card.Title>
                              <Card.Text>
                                  The point of using Lorem Ipsum is that it has a more-or-less
                                  normal.
                              </Card.Text>
                    </Card.Body>
            </Card>
            <Card>
                <Card.Img className="mt-5" variant="top" src="/images/Group 69@2x.png" />
                    <Card.Body>
                        <Card.Title>Prototyping</Card.Title>
                            <Card.Text>
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal.
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card>
                <Card.Img className="mt-5"variant="top" src="/images/Group 72@2x.png" />
                    <Card.Body>
                        <Card.Title>Illustration</Card.Title>
                            <Card.Text>
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal.
                            </Card.Text>
                    </Card.Body>
            </Card>
        </CardDeck>
    </Container>
  );
};

export default About;
