import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaUsers, FaHome, FaBox, FaShoppingBag, FaChartBar, FaMoneyBillWave, FaComments, FaCog } from 'react-icons/fa'; // Updated Icons
import { Link } from 'react-router-dom'; // Import Link for routing
import './AdminSidebar.css'; // Ensure this path is correct and CSS file exists

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark-blue">
      <h4 className="p-3">Admin</h4>
      <Nav className="flex-column p-3">
      <Nav.Link as={Link} to="/adminDashboard">
          {/* FaUsers for Employees */}
          <FaHome className="sidebar-icon" />Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/employees">
          {/* FaUsers for Employees */}
          <FaUsers className="sidebar-icon" /> Employees
        </Nav.Link>
        <Nav.Link as={Link} to="/products">
          {/* FaBox for Products */}
          <FaBox className="sidebar-icon" /> Products
        </Nav.Link>
        <Nav.Link as={Link} to="/orders">
          {/* FaShoppingBag for Orders */}
          <FaShoppingBag className="sidebar-icon" /> Orders
        </Nav.Link>
        <Nav.Link as={Link} to="/reports">
          {/* FaChartBar for Reports */}
          <FaChartBar className="sidebar-icon" /> Reports
        </Nav.Link>
        <Nav.Link as={Link} to="/payments">
          {/* FaMoneyBillWave for Payments */}
          <FaMoneyBillWave className="sidebar-icon" /> Payments
        </Nav.Link>
        <Nav.Link as={Link} to="/feedback">
          {/* FaComments for Feedback */}
          <FaComments className="sidebar-icon" /> Feedback
        </Nav.Link>

        <Nav.Link as={Link} to="/settings">
          {/* FaCog for Settings */}
          <FaCog className="sidebar-icon" /> Settings
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
