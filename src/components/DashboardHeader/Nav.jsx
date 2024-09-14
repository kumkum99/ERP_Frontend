import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { FaCog, FaEnvelope, FaUserCircle, FaSearch } from 'react-icons/fa';
import logo22 from '../../assets/images/logo22.jpg';
import './Nav.css'; // Import the CSS file for custom styling
import { GlobalSettingsContext } from "../../Dashboard/context/GlobalSettingsContext";

const NavbarComponent =  ({ bgColor })  => {
  const { fontSize, fontColor } = useContext(GlobalSettingsContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const searchText = searchQuery.trim().toLowerCase();

    if (searchText === '') {
      alert('Please enter a search term');
      return;
    }

    // Search for the text in all visible elements on the page
    const found = highlightText(document.body, searchText);

    if (!found) {
      alert('Text not found');
    }
  };

  const highlightText = (element, searchText) => {
    let found = false;

    // Recursively search all child nodes
    element.childNodes.forEach((child) => {
      if (child.nodeType === 3) { // If it's a text node
        const text = child.textContent.toLowerCase();
        const index = text.indexOf(searchText);

        if (index !== -1) {
          found = true;

          // Highlight the matching text
          const span = document.createElement('span');
          span.className = 'highlight';
          span.textContent = child.textContent.slice(index, index + searchText.length);

          const before = document.createTextNode(child.textContent.slice(0, index));
          const after = document.createTextNode(child.textContent.slice(index + searchText.length));

          const parent = child.parentNode;
          parent.insertBefore(before, child);
          parent.insertBefore(span, child);
          parent.insertBefore(after, child);
          parent.removeChild(child);

          // Scroll to the first occurrence
          span.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (child.nodeType === 1 && child.childNodes.length) { // If it's an element node, search recursively
        found = highlightText(child, searchText) || found;
      }
    });

    return found;
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom"
    id="navbarContainer"
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        fontSize: fontSize,
      }}>
      <Container fluid>
        <Navbar.Brand href="/dashboard">
          <img src={logo22} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          ERP UNITY
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Search bar with search icon */}
          <Form className="d-flex mx-auto search-bar-form" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 search-bar-input"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {/* Search icon that acts as a submit button */}
            <FaSearch size={20} className="search-icon" onClick={handleSearchSubmit} />
          </Form>

          <Nav className="ml-auto">
            <Nav.Link href="#email" className="nav-icon">
              <FaEnvelope size={20} />
            </Nav.Link>
            <Nav.Link href="/settings" className="nav-icon">
              <FaCog size={20} />
            </Nav.Link>
            <Nav.Link href="#account" className="nav-icon">
              <FaUserCircle size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
