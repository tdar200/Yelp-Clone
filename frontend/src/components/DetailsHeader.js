import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";

function DetailsHeader() {
  const [location, setLocation] = useState("Lahore");

  const submitHandler = () => {};

  return (
    <Navbar className="details-navbar" expand='lg'>
      <Container>
        <Navbar.Brand className="me-5" href='#home'>Business Finder</Navbar.Brand>
        <Form className="details-form" onSubmit={submitHandler}>
          <InputGroup className='mb-6'>
            <FormControl
              aria-label='Business Name'
              placeholder='All places nearby'
            />
            <FormControl value={location} aria-label='Location' />
            <Button type='submit' variant='danger' id='button-addon2'>
              <i class='fa fa-search'></i>
            </Button>
          </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='bg-gradient-white' id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link className='ms-3' href='#home'>Review A Business</Nav.Link>
          </Nav>
          <Button variant='light' className='ms-3'>
            Login
          </Button>
          <Button variant='danger' className='ms-3'>
            SignUp
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DetailsHeader;
