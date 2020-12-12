import React from "react";
import { Button, Card, CardDeck, Container } from "react-bootstrap";
import './Team.css'
const Team = () => {
  return (
    <Container className="my-5 " id="team">
      <h1 className="text-center">Choose Your Dedicated Team</h1>

      <CardDeck  className = "mt-5">
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              <h1>$199</h1>
              <h6 className = "text-dark">For Basic</h6>
              <hr/>
            </Card.Title>
            <Card.Text>
              <ul className="text-center mb-5">
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
        <Card className="text-center border border-primary">
          <Card.Body>
            <Card.Title>
              <h1>$399</h1>
              <h6 className = "text-dark">For Prefferred</h6>

            </Card.Title>
            <Card.Text>
              <ul className="text-center  d-inline">
                <li>Home Page</li>
                <li>4 Inner Pages</li>
                <li>Asset file</li>
                <li>Source file</li>
                <li>Free Stock Photos</li>
                <li>20 days Free Support</li>
                <li>24/7 Support</li>
                <div>
                <Button className="button-design-style">Order Now</Button>

                </div>
              </ul>
              
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              <h1>$599</h1>
              <h6 className  = "text-dark">For Elite</h6>
              <hr/>
            </Card.Title>
            <Card.Text>
              <ul className="text-center mb-5">
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
