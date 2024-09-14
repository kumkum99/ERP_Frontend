import React, { useState, useContext } from 'react'; // Import useState from React
import { Nav } from 'react-bootstrap';
import { FaUser, FaCog, FaHome, FaFileAlt, FaChalkboardTeacher, FaTasks, FaCalendarAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Add FaChevronUp and FaChevronDown for the dropdown icons
import { Link } from 'react-router-dom'; // Import Link for routing
import './EmployeeSidebar.css'; // Ensure this path is correct and CSS file exists
import { GlobalSettingsContext } from "../context/GlobalSettingsContext";
const EmpSidebar = () => {

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isOrdersOpen, setOrdersOpen] = useState(false);
  const [isPaymentsOpen, setPaymentsOpen] = useState(false);
  const [isTrainingOpen, setTrainingOpen] = useState(false);
  const { sidebarBgColor, fontSize, fontColor } = useContext(GlobalSettingsContext);

  return (

    <div bg="dark" variant="dark" className="sidebar bg-dar"
    id="employeeSidebar"
    style={{
      backgroundColor: sidebarBgColor,
      color: fontColor,
      fontSize: fontSize,
    }}>
      <h4 className="p-3">Employee</h4>
      <Nav className="flex-column">
      <Nav.Link as={Link} to="/employeeDashboard">
          <FaHome className="sidebar-icon" />Dashboard
        </Nav.Link>
     
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
              <Nav.Link as={Link} to="/profile">
                Manage Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/attenLeave">
                Attendance / Leave
              </Nav.Link>
            </div>
          )}
        </div>

        <div className={`dropdown ${isOrdersOpen ? 'open' : ''}`}>
          <Nav.Link
            onClick={() => setOrdersOpen(!isOrdersOpen)}
            className="dropdown-toggle"
          >
            <FaCalendarAlt className="sidebar-icon" /> Work Scheduled
            {isOrdersOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
          </Nav.Link>
          {isOrdersOpen && (
            <div className="dropdown-menu">
              <Nav.Link as={Link} to="/calendar">
                Calendar
              </Nav.Link>
              <Nav.Link as={Link} to="/shifts">
                Shifts
              </Nav.Link>
            </div>
          )}
        </div>

        <div className={`dropdown ${isPaymentsOpen ? 'open' : ''}`}>
          <Nav.Link
            onClick={() => setPaymentsOpen(!isPaymentsOpen)}
            className="dropdown-toggle"
          >
            <FaTasks className="sidebar-icon" /> Task Management
            {isPaymentsOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
          </Nav.Link>
          {isPaymentsOpen && (
            <div className="dropdown-menu">
              <Nav.Link as={Link} to="/workDeadline">
                Work Deadline
              </Nav.Link>
              <Nav.Link as={Link} to="/employeeProgress">
                Work Progress
              </Nav.Link>
            </div>
          )}
        </div>

        <div className={`dropdown ${isTrainingOpen ? 'open' : ''}`}>
          <Nav.Link
            onClick={() => setTrainingOpen(!isTrainingOpen)}
            className="dropdown-toggle"
          >
            <FaChalkboardTeacher className="sidebar-icon" />Training&Development
            {isTrainingOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
          </Nav.Link>
          {isTrainingOpen && (
            <div className="dropdown-menu">
              <Nav.Link as={Link} to="/courseMaterial">
                Course Material
              </Nav.Link>
              <Nav.Link as={Link} to="/employeeCourseProgress">
                Track Progress
              </Nav.Link>
            </div>
          )}
        </div>

        <Nav.Link as={Link} to="/employeeDocumentation">
          <FaFileAlt className="sidebar-icon" /> Documentation
        </Nav.Link>
        <Nav.Link as={Link} to="/settings">
          <FaCog className="sidebar-icon" /> Settings
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default EmpSidebar;
