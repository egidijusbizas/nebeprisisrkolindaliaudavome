import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo72.png';
import './Navigation.css';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navigation'>
      <Navbar bg='light' expand='lg' className='sticky-top shadow p-3 mb-5 bg-white rounded sticky'>
        <Container>
          <div className='navbar-brand'>
            <Navbar.Brand as={Link} to='/'>
              <img className='navbar__logo' src={logo} alt='logo' height='36'></img>
              Scroll Away
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/search'>
                Image Search
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
