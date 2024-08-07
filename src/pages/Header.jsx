import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-success">
      <Container className='bg-warning' fluid>
        <Navbar.Brand  className ="text-success"href="#">Swiggy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><i class="fa fa-percent" aria-hidden="true"></i>
            Offers</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <Link to="/login">
              <NavDropdown.Item href="#action4">
                login
              </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                log out
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   </div>
  );
}


export default Header;