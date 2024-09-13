import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import logo22 from '../../assets/images/logo22.jpg';
import { FaBeer, FaCoffee } from 'react-icons/fa';


import './Nav.css'; // Import the CSS file for styling

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container fluid>
      <Navbar.Brand href="#home">
          <img src={logo22} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          ERP UNITY
        </Navbar.Brand>
        <Nav className="ml-auto">
          
          <Nav.Link href="#notifications" className="nav-icon">
            <FaBell size={20} />
          </Nav.Link>
          <Nav.Link href="#email" className="nav-icon">
            <FaEnvelope size={20} />
          </Nav.Link>
          <Nav.Link href="#account" className="nav-icon">
            <FaUserCircle size={20} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
