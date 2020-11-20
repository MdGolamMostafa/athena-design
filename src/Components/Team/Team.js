import React from "react";
import { Button, Card, CardDeck, Container } from "react-bootstrap";

const Team = () => {
  return (
    <Container className="my-5" id="team">
      <h1 className="text-center">Choose Your Dedicated Team</h1>

      <CardDeck>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              <h3>$199</h3>
              <p>For Basic</p>
            </Card.Title>
            <Card.Text>
              <ul className="text-center">
                <li>Home Page</li>
                <li>No Inner Page</li>
                <li>Asset file</li>
                <li>Source file</li>
                <li>Free Stock Photos</li>
                <li>10 days Free Support</li>
                <li>24/7 Support</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <h3>$399</h3>
              <p>For Prefferred</p>
            </Card.Title>
            <Card.Text>
              <ul>
                <li>Home Page</li>
                <li>4 Inner Pages</li>
                <li>Asset file</li>
                <li>Source file</li>
                <li>Free Stock Photos</li>
                <li>20 days Free Support</li>
                <li>24/7 Support</li>
              </ul>
              <Button className="button-design-style">Order Now</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <h3>$599</h3>
              <p>For Elite</p>
            </Card.Title>
            <Card.Text>
              <ul>
                <li>Home Page</li>
                <li>8 Inner Page</li>
                <li>Asset file</li>
                <li>Source file</li>
                <li>Free Stock Photos</li>
                <li>30 days Free Support</li>
                <li>24/7 Support</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Team;
