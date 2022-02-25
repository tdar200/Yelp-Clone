import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg='danger' expand='lg'>
      <Container>
        <Navbar.Brand className='text-white' href='#home'>
          Business Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='bg-gradient-white' id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link className='text-white' href='#home'>
              Review A Business
            </Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link className='text-white' href='#home'>
              Login
            </Nav.Link>
            <Nav.Link className='text-white' href='#link'>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
