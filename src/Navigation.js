import logo from './logo.svg'
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                        <img src={logo} alt="DP" width="50" height="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/projects">Completed Projects</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/data">Data Analytics</NavDropdown.Item>
                            <NavDropdown.Item href="/programming">Programming</NavDropdown.Item>
                            <NavDropdown.Item href="/upcoming">Upcoming Projects</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
