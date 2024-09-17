import React, { useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import {
  FaUser,
  FaCog,
  FaHome,
  FaFileAlt,
  FaChalkboardTeacher,
  FaTasks,
  FaCalendarAlt,
  FaChevronUp,
  FaChevronDown,
  FaBars,    // For the toggle button (hamburger menu)
  FaTimes,   // For the close button
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './EmployeeSidebar.css';
import { GlobalSettingsContext } from '../context/GlobalSettingsContext';

const EmpSidebar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isOrdersOpen, setOrdersOpen] = useState(false);
  const [isPaymentsOpen, setPaymentsOpen] = useState(false);
  const [isTrainingOpen, setTrainingOpen] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false); // Sidebar state for mobile toggle
  const { sidebarBgColor, fontSize, fontColor } = useContext(GlobalSettingsContext);

  // Toggle Sidebar Function
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <>
      {/* Toggle button for mobile */}
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        <FaBars size={24} /> {/* Hamburger icon */}
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar ${sidebarActive ? 'active' : ''}`} // Sidebar active state
        id="employeeSidebar"
        style={{
          backgroundColor: sidebarBgColor,
          color: fontColor,
          fontSize: fontSize,
        }}
      >
        {/* Close button for mobile */}
        <div className="close-btn-container">
          <FaTimes className="close-btn" onClick={toggleSidebar} />
        </div>

        <h4 className="p-3">Employee</h4>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/employeeDashboard">
            <FaHome className="sidebar-icon" /> Dashboard
          </Nav.Link>

          {/* Profile Dropdown */}
          <div className={`dropdown ${isProfileOpen ? 'open' : ''}`}>
            <Nav.Link
              onClick={() => setProfileOpen(!isProfileOpen)}
              className="dropdown-toggle"
            >
              <FaUser className="sidebar-icon" /> Profile
              {isProfileOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            </Nav.Link>
            {isProfileOpen && (
              <div className="dropdown-menu">
                <Nav.Link as={Link} to="/profile">Manage Profile</Nav.Link>
                <Nav.Link as={Link} to="/attenLeave">Attendance / Leave</Nav.Link>
              </div>
            )}
          </div>

          {/* Work Scheduled Dropdown */}
          <div className={`dropdown ${isOrdersOpen ? 'open' : ''}`}>
            <Nav.Link onClick={() => setOrdersOpen(!isOrdersOpen)} className="dropdown-toggle">
              <FaCalendarAlt className="sidebar-icon" /> Work Scheduled
              {isOrdersOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            </Nav.Link>
            {isOrdersOpen && (
              <div className="dropdown-menu">
                <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
                <Nav.Link as={Link} to="/shifts">Shifts</Nav.Link>
              </div>
            )}
          </div>

          {/* Task Management Dropdown */}
          <div className={`dropdown ${isPaymentsOpen ? 'open' : ''}`}>
            <Nav.Link onClick={() => setPaymentsOpen(!isPaymentsOpen)} className="dropdown-toggle">
              <FaTasks className="sidebar-icon" /> Task Management
              {isPaymentsOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            </Nav.Link>
            {isPaymentsOpen && (
              <div className="dropdown-menu">
                <Nav.Link as={Link} to="/workDeadline">Work Deadline</Nav.Link>
                <Nav.Link as={Link} to="/employeeProgress">Work Progress</Nav.Link>
              </div>
            )}
          </div>

          {/* Training & Development Dropdown */}
          <div className={`dropdown ${isTrainingOpen ? 'open' : ''}`}>
            <Nav.Link onClick={() => setTrainingOpen(!isTrainingOpen)} className="dropdown-toggle">
              <FaChalkboardTeacher className="sidebar-icon" /> Training & Development
              {isTrainingOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            </Nav.Link>
            {isTrainingOpen && (
              <div className="dropdown-menu">
                <Nav.Link as={Link} to="/courseMaterial">Course Material</Nav.Link>
                <Nav.Link as={Link} to="/employeeCourseProgress">Track Progress</Nav.Link>
              </div>
            )}
          </div>

          <Nav.Link as={Link} to="/employeeDocumentation">
            <FaFileAlt className="sidebar-icon" /> Documentation
          </Nav.Link>
          <Nav.Link as={Link} to="/feedbackemp">
            <FaFileAlt className="sidebar-icon" /> Feedback
          </Nav.Link>
          <Nav.Link as={Link} to="/settings">
            <FaCog className="sidebar-icon" /> Settings
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default EmpSidebar;
