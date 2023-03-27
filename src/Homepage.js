import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand  className='ms-4' href='#home'>My Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
        <Nav  className='ml-auto'>
          <Button variant='outline-primary' className='ml-sm-2'>Search</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
