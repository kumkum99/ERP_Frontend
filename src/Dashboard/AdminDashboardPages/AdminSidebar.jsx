import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaUsers, FaHome, FaBox, FaShoppingBag, FaChartBar, FaMoneyBillWave, FaComments, FaCog, FaBars, FaTimes } from 'react-icons/fa'; // Updated Icons
import { Link } from 'react-router-dom';
import './AdminSidebar.css';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <>
      {/* Toggle Button for Mobile/Tablet */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />} {/* Show close icon when sidebar is open */}
      </button>

      {/* Sidebar */}
      <div className={`sidebar bg-dark-blue ${isOpen ? 'open' : ''}`}>
        <h4 className="p-3">Admin</h4>
        <Nav className="flex-column p-3">
          <Nav.Link as={Link} to="/adminDashboard">
            <FaHome className="sidebar-icon" /> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/employees">
            <FaUsers className="sidebar-icon" /> Employees
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            <FaBox className="sidebar-icon" /> Products
          </Nav.Link>
          <Nav.Link as={Link} to="/orders">
            <FaShoppingBag className="sidebar-icon" /> Orders
          </Nav.Link>
          <Nav.Link as={Link} to="/reports">
            <FaChartBar className="sidebar-icon" /> Reports
          </Nav.Link>
          <Nav.Link as={Link} to="/payments">
            <FaMoneyBillWave className="sidebar-icon" /> Payments
          </Nav.Link>
          <Nav.Link as={Link} to="/feedback">
            <FaComments className="sidebar-icon" /> Feedback
          </Nav.Link>
          <Nav.Link as={Link} to="/settingAdmin">
            <FaCog className="sidebar-icon" /> Settings
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
