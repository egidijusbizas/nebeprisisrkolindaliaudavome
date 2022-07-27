import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo72.png';
import './Navigation.css';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Link } from 'react-router-dom';

function Navigation(): React.FC {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  <div className={darkMode ? 'content darkmode' : 'content'}></div>;

  return (
    <div className='parent navigation'>
      <Navbar
        variant={darkMode ? 'dark' : 'light'}
        expand='lg'
        className={darkMode ? 'shadow p-3 mb-5 bg-dark rounded' : 'shadow p-3 mb-5 bg-white rounded'}
      >
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
              <button type='button' className={darkMode ? 'btn btn-light' : 'btn btn-dark'} onClick={toggleDarkMode}>
                {darkMode ? 'Light Theme' : 'Dark Theme'}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
