import React, { useEffect, useState, useContext } from "react";
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar';
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";
import { Col, Card } from 'react-bootstrap';
import { FaClipboardCheck } from 'react-icons/fa';

const AttendanceLeave = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState('Absent'); // Default to 'Absent'
  const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);

  useEffect(() => {
    loadAttendanceRecords();
    loadLeaveRequests();
    updateAttendanceStatus(); // Check attendance status on component mount
  }, []);

  const handleAttendanceSubmit = (e) => {
    e.preventDefault();
    const employeeId = e.target.attendanceEmployeeId.value;
    const name = e.target.attendanceName.value;
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    addAttendanceRecord(employeeId, name, date, time);
    e.target.reset();
  };

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    const employeeId = e.target.leaveEmployeeId.value;
    const name = e.target.leaveName.value;
    const date = e.target.leaveDate.value;
    const reason = e.target.leaveReason.value;

    addLeaveRequest(employeeId, name, date, reason);
    e.target.reset();
  };

  const addAttendanceRecord = (employeeId, name, date, time) => {
    const updatedRecords = [...attendanceRecords, { employeeId, name, date, time }];
    setAttendanceRecords(updatedRecords);
    saveAttendanceRecord(updatedRecords);
    updateAttendanceStatus(); // Update attendance status after adding a record
  };

  const addLeaveRequest = (employeeId, name, date, reason) => {
    const updatedRequests = [...leaveRequests, { employeeId, name, date, reason }];
    setLeaveRequests(updatedRequests);
    saveLeaveRequest(updatedRequests);
  };

  const saveAttendanceRecord = (records) => {
    localStorage.setItem('attendanceRecords', JSON.stringify(records));
  };

  const saveLeaveRequest = (requests) => {
    localStorage.setItem('leaveRequests', JSON.stringify(requests));
  };

  const loadAttendanceRecords = () => {
    const records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    setAttendanceRecords(records);
  };

  const loadLeaveRequests = () => {
    const requests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    setLeaveRequests(requests);
  };

  const updateAttendanceStatus = () => {
    const today = new Date().toLocaleDateString();
    const records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    const recordForToday = records.find(record => record.date === today);
    
    if (recordForToday) {
      setAttendanceStatus(`Present at ${recordForToday.time}`);
    } else {
      setAttendanceStatus('Absent');
    }
  };

  return (
    <div className="d-flex flex-column"
      id="homePageContainer"
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#f0f0f0",
        color: fontColor,
        fontSize: fontSize,
      }}>
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <EmpSidebar />
        <section id="attendanceLeaveSection" className="content-section">
          <div className="container-attLeave">
            <h1>Employee Dashboard</h1>

            <Col md={3} sm={6} className="mb-4">
              <Card className="text-center card-width card-employees">
                <Card.Body className="dashCard">
                  <FaClipboardCheck size={40} />
                  <Card.Title className='mainCardText'>Attendance</Card.Title>
                  <Card.Text className='CardTitle'>{attendanceStatus}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <div className="form-container">
              <h2>Mark Attendance</h2>
              <form id="attendanceFormSpecific" onSubmit={handleAttendanceSubmit}>
                <label htmlFor="attendanceEmployeeId">Employee ID:</label>
                <input type="text" id="attendanceEmployeeId" name="attendanceEmployeeId" required />

                <label htmlFor="attendanceName">Name:</label>
                <input type="text" id="attendanceName" name="attendanceName" required />

                <button type="submit" id="attendanceSubmitButton">Submit</button>
              </form>
            </div>

            <div className="form-container">
              <h2>Leave Request</h2>
              <form id="leaveFormSpecific" onSubmit={handleLeaveSubmit}>
                <label htmlFor="leaveEmployeeId">Employee ID:</label>
                <input type="text" id="leaveEmployeeId" name="leaveEmployeeId" required />

                <label htmlFor="leaveName">Name:</label>
                <input type="text" id="leaveName" name="leaveName" required />

                <label htmlFor="leaveDate">Date:</label>
                <input type="date" id="leaveDate" name="leaveDate" required />

                <label htmlFor="leaveReason">Reason:</label>
                <textarea id="leaveReason" name="leaveReason" required></textarea>

                <button type="submit" id="leaveSubmitButton">Submit</button>
              </form>
            </div>

            <div className="table-container">
              <h2>Attendance Records</h2>
              <table id="attendanceTableSpecific">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceRecords.map((record, index) => (
                    <tr key={index}>
                      <td>{record.employeeId}</td>
                      <td>{record.name}</td>
                      <td>{record.date}</td>
                      <td>{record.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-container">
              <h2>Leave Requests</h2>
              <table id="leaveTableSpecific">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveRequests.map((request, index) => (
                    <tr key={index}>
                      <td>{request.employeeId}</td>
                      <td>{request.name}</td>
                      <td>{request.date}</td>
                      <td>{request.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AttendanceLeave;
