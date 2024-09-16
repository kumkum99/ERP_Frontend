import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { FaCog, FaEnvelope, FaUserCircle, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // For handling redirects
import logo22 from '../../assets/images/logo22.jpg';
import './Nav.css'; // Import the CSS file for custom styling
import { GlobalSettingsContext } from "../../Dashboard/context/GlobalSettingsContext";

const NavbarComponent = ({ bgColor }) => {
  const { fontSize, fontColor } = useContext(GlobalSettingsContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [employeeName, setEmployeeName] = useState("");
  const [showLogout, setShowLogout] = useState(false); // New state for logout button visibility
  const navigate = useNavigate(); // To redirect to the homepage

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

    const found = highlightText(document.body, searchText);

    if (!found) {
      alert('Text not found');
    }
  };

  const highlightText = (element, searchText) => {
    let found = false;

    element.childNodes.forEach((child) => {
      if (child.nodeType === 3) { // If it's a text node
        const text = child.textContent.toLowerCase();
        const index = text.indexOf(searchText);

        if (index !== -1) {
          found = true;

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

          span.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (child.nodeType === 1 && child.childNodes.length) {
        found = highlightText(child, searchText) || found;
      }
    });

    return found;
  };

  useEffect(() => {
    const name = localStorage.getItem("employeeName");
    if (name) {
      setEmployeeName(name);
    }
  }, []);

  // Toggle logout menu visibility
  const toggleLogoutMenu = () => {
    setShowLogout((prevState) => !prevState);
  };

  // Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem("employeeName"); // Clear employee name from localStorage
    navigate('/'); // Redirect to home page
  };

  return (
    <Navbar bg="dark" variant="dark" className="navbar-custom"
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

        <Nav className="ml-auto nav-icons">
          <Nav.Link href="#email" className="nav-icon">
            <FaEnvelope size={20} />
          </Nav.Link>
          <Nav.Link href="/settings" className="nav-icon">
            <FaCog size={20} />
          </Nav.Link>

          <Nav.Link href="" className="nav-icon" onClick={toggleLogoutMenu} style={{ position: 'relative' }}>
            <FaUserCircle size={20} />
           
            {employeeName && <span style={{ marginLeft: "8px" }}>{employeeName}</span>}
            
            {/* Show the logout button when showLogout is true */}
            {showLogout && (
              <div
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '0',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  padding: '10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  zIndex: 1000, // Ensure it appears above other elements
                }}
                onClick={handleLogout} // Trigger logout when clicked
              >
                Logout
              </div>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
