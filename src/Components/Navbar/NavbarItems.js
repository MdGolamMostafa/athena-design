import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavbarItems.css";
const NavbarItems = () => {
  return (
    <Container>
      <Navbar expand="lg" className="pt-4">
        <Navbar.Brand>
          <img
            style={{ width: "50%" }}
            src={"https://i.ibb.co/f2Ksjpq/Group-86.png"}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center link-items">
            <Nav.Link className="active" href="#">
              Home
            </Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Service</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Our Team</Nav.Link>
            <Nav.Link className="button-design" href="#">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarItems;
