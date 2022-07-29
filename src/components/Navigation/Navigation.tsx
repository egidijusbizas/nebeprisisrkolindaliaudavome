import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo72.png';
import './Navigation.css';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Link } from 'react-router-dom';

function Navigation(): JSX.Element {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  <div className={darkMode ? 'content darkmode' : 'content'}></div>;

  const LeftHandSide = () => {
    return (
      <Nav className='me-auto ml-auto p-2 centered'>
        <Nav.Link className='px-2' as={Link} to='/'>
          Home
        </Nav.Link>
        <Nav.Link className='px-2' as={Link} to='/search'>
          Image Search
        </Nav.Link>
        <Nav.Link className='px-2' as={Link} to='/about'>
          About
        </Nav.Link>
      </Nav>
    );
  };

  const AuthSection = () => {
    return (
      <>
        <Nav.Link as={Link} to='/login'>
          <button type='button' className={darkMode ? 'btn btn-success' : 'btn btn-outline-success'}>
            Login
          </button>
        </Nav.Link>
        <Nav.Link as={Link} to='/register'>
          <button type='button' className={darkMode ? 'btn btn-primary' : 'btn btn-outline-primary'}>
            Register
          </button>
        </Nav.Link>
      </>
    );
  };

  const RightHandSide = () => {
    return (
      <Nav className='ml-auto p-2 centered'>
        <AuthSection />
        <Nav.Link>
          <button type='button' className={darkMode ? 'p-2 btn btn-outline-light' : 'p-2 btn btn-dark'} onClick={toggleDarkMode}>
            {darkMode ? 'Light Theme' : 'Dark Theme'}
          </button>
        </Nav.Link>
      </Nav>
    );
  };

  return (
    <div className='parent navigation'>
      <Navbar
        variant={darkMode ? 'dark' : 'light'}
        expand='lg'
        className={darkMode ? 'shadow p-3 mb-5 bg-dark rounded' : 'shadow p-3 mb-5 bg-white rounded'}
      >
        <Container>
          <div className='navbar-brand mr-2'>
            <Navbar.Brand as={Link} to='/'>
              <img className='navbar__logo' src={logo} alt='logo' height='52'></img>
              Scroll Away
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <LeftHandSide />
            <RightHandSide />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
