import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import '../css/header.css';



function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <OffcanvasExample />
        </header>
    )
}

function OffcanvasExample() {
  return (
    <Navbar key={'md'} expand={'md'} className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-x`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand-x`}
          placement="end"
          className="side-bar"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-x`}>
              Cozy Interio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link href="#home" className="nav-link">How We Work</Nav.Link>
                <Nav.Link href="#home" className="nav-link">Our Work</Nav.Link>
                <Nav.Link href="#features" className='nav-link'>Design Ideas</Nav.Link>
                <Nav.Link href="#pricing" className='nav-link'>Cost Estimator</Nav.Link>
                <Nav.Link href="#pricing" className='nav-link'>Why Choose Us</Nav.Link>
                <Nav.Link href="#pricing" className='nav-link'>Blog</Nav.Link>
                <Nav.Link href="#pricing" className='nav-link'>Contact Us</Nav.Link>
              </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
