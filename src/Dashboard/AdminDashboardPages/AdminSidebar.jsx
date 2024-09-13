import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaShoppingCart, FaDollarSign, FaComment, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing
import './AdminSidebar.css'; // Ensure this path is correct and CSS file exists

const Sidebar = () => {
  return (
    <div bg="dark" variant="dark" className="sidebar bg-dar">
      <h4 className="p-3">Dashboard</h4>
      <Nav className="flex-column p-3">
        <Nav.Link as={Link} to="/employee">
          <FaUser className="sidebar-icon" /> Employees
        </Nav.Link>
        <Nav.Link as={Link} to="/products">
          <FaHome className="sidebar-icon" /> Products
        </Nav.Link>
        <Nav.Link as={Link} to="/orders">
          <FaShoppingCart className="sidebar-icon" /> Orders
        </Nav.Link>
        <Nav.Link as={Link} to="/reports">
          <FaShoppingCart className="sidebar-icon" /> Reports
        </Nav.Link>
        <Nav.Link as={Link} to="/payments">
          <FaDollarSign className="sidebar-icon" /> Payments
        </Nav.Link>
        <Nav.Link as={Link} to="/feedback">
          <FaComment className="sidebar-icon" /> Feedback
        </Nav.Link>
        <Nav.Link as={Link} to="/settings">
          <FaCog className="sidebar-icon" /> Settings
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
