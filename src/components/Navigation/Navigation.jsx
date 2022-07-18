import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo72.png'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className='sticky-top shadow p-3 mb-5 bg-white rounded'>
      <Container>
      <a class="navbar-brand" href="#">
      <img src={logo} alt="logo" height="36"></img>
      </a>
        <Navbar.Brand href="#home">Scroll Away</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#search">Image Search</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;