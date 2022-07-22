import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo72.png';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navigation'>
      <Navbar bg='light' expand='lg' className='sticky-top shadow p-3 mb-5 bg-white rounded'>
        <Container>
          <div className='navbar-brand'>
            <NavLink exact to='/' style={{ textDecoration: 'none' }}>
              <img src={logo} alt='logo' height='36'></img>
              <Navbar.Brand>Scroll Away</Navbar.Brand>
            </NavLink>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavLink to='/'>
                <Nav.Link>Home</Nav.Link>
              </NavLink>
              <NavLink to='/search'>
                <Nav.Link>Image Search</Nav.Link>
              </NavLink>
              <NavLink to='/about'>
                <Nav.Link>About</Nav.Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
