import React from "react";
import { Form, Dropdown, DropdownButton, Button } from "react-bootstrap";

function Forms() {

    const submitHandler =(e) => {
        e.preventDefault()

    }

  return (
    <div className='mb-4'>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Business Name</Form.Label>
          <Form.Control type='name' placeholder='Enter Name' required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control type='text' placeholder='Enter Location' required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price Range</Form.Label>
          <DropdownButton id='dropdown-basic-button' title='Price Range'>
            <Dropdown.Item value="1" href='#/action-1'>$</Dropdown.Item>
            <Dropdown.Item value="2" href='#/action-2'>$$</Dropdown.Item>
            <Dropdown.Item value="3" href='#/action-3'>$$$</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Forms;
