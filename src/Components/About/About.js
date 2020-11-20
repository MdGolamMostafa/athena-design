import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1>What we do</h1>
      <p>
        Our main focus is to make the User Experience very simple and easy.
        Simplicity is our Strength
      </p>

      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/images/Group 65@2x.png" />
          <Card.Body>
            <Card.Title>Experience Design</Card.Title>
            <Card.Text>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/Group 66@2x.png" />
          <Card.Body>
            <Card.Title>Interface Design</Card.Title>
            <Card.Text>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/Group 69@2x.png" />
          <Card.Body>
            <Card.Title>Prototyping</Card.Title>
            <Card.Text>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/Group 72@2x.png" />
          <Card.Body>
            <Card.Title>Illustration</Card.Title>
            <Card.Text>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default About;
