import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaClipboardCheck, FaClock, FaHourglassHalf, FaBookOpen } from 'react-icons/fa';
import EmpSidebar from './EmployeeSidebar'; // Adjust based on actual file location
import NavbarComponent from '../../components/DashboardHeader/Nav';
import './Employee.css'; // Ensure this path is correct and CSS file exists
import Chart from './LineChart';
import BarChart from './BarChart';
import { GlobalSettingsContext } from "../context/GlobalSettingsContext";
import { useCourses } from '../context/CourseContext'; // Import the course context

const Employee = () => {
  const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  const { courses } = useCourses(); // Use the course context

  // State for events
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  // State for work deadlines
  const [deadlines, setDeadlines] = useState(() => {
    const storedDeadlines = localStorage.getItem('deadlines');
    return storedDeadlines ? JSON.parse(storedDeadlines) : [];
  });

  // State for attendance
  const [attendanceStatus, setAttendanceStatus] = useState('Absent'); // Default to 'Absent'
  const [todaysEvent, setTodaysEvent] = useState(null);  // Define today's event
  const [nextDeadline, setNextDeadline] = useState(null);  // Define the next work deadline
  const [latestCourse, setLatestCourse] = useState({}); // Define latest course

  // Function to determine today's or the most recent event
  const updateTodaysEvent = () => {
    const today = new Date();
    const formattedToday = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    
    // Check if there is an event for today
    const eventForToday = events.find(event => event.date === formattedToday);
    
    if (eventForToday) {
      setTodaysEvent(eventForToday);
    } else {
      // If no event today, get the next upcoming event
      const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));
      const nextEvent = sortedEvents.find(event => new Date(event.date) >= today);
      setTodaysEvent(nextEvent || null); // If no future events, set null
    }
  };

  // Function to determine the next upcoming work deadline
  const updateNextDeadline = () => {
    const today = new Date();
    const formattedToday = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    
    // Find the next upcoming deadline
    const sortedDeadlines = deadlines.sort((a, b) => new Date(a.deadlineDate) - new Date(b.deadlineDate));
    const upcomingDeadline = sortedDeadlines.find(deadline => new Date(deadline.deadlineDate) >= today);
    setNextDeadline(upcomingDeadline || null); // If no future deadlines, set null
  };

  // Function to check attendance for today
  const updateAttendanceStatus = () => {
    const today = new Date().toLocaleDateString();
    const storedAttendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    
    // Find attendance record for today
    const attendanceForToday = storedAttendanceRecords.find(record => record.date === today);
    
    if (attendanceForToday) {
      setAttendanceStatus(`Present at ${attendanceForToday.time}`);
    } else {
      setAttendanceStatus('Absent');
    }
  };

  // Function to determine the latest course progress
  const updateLatestCourse = () => {
    const mostRecentCourse = courses.reduce((latest, course) => {
      if (course.completionDate && (!latest.completionDate || new Date(course.completionDate) > new Date(latest.completionDate))) {
        return course;
      }
      return latest;
    }, {});
    setLatestCourse(mostRecentCourse);
  };

  useEffect(() => {
    updateTodaysEvent(); // Update today's event on load
    updateNextDeadline(); // Update the next work deadline on load
    updateAttendanceStatus(); // Update attendance status on load
    updateLatestCourse(); // Update latest course on load
  }, [events, deadlines, courses]);

  return (
    <div className="d-flex flex-column" id="homePageContainer"
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#f0f0f0",
        color: fontColor,
        fontSize: fontSize,
      }}>
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <EmpSidebar />
        <main className="flex-grow-1 p-4 main-containerAdmin">
          <Container fluid>
            <h1 className="mb-6">Employee Dashboard</h1>
            <Row>
              <Col md={3} sm={6} className="mb-4">
                <Card className="text-center card-width card-employees">
                  <Card.Body className="dashCard">
                    <FaClipboardCheck size={40} />
                    <Card.Title className='mainCardText'>Attendance</Card.Title>
                    <Card.Text className='CardTitle'>{attendanceStatus}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Events Card */}
              <Col md={3} sm={6} className="mb-4">
                <Card className="text-center card-width card-orders">
                  <Card.Body className="dashCard">
                    <FaClock size={40} />
                    <Card.Title className='mainCardText'>Events</Card.Title>
                    {todaysEvent ? (
                      <Card.Text className='CardTitle'>
                        {todaysEvent.date}: {todaysEvent.title}
                      </Card.Text>
                    ) : (
                      <Card.Text className='CardTitle'>No upcoming events</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>

              {/* Work Deadline Card */}
              <Col md={3} sm={6} className="mb-4">
                <Card className="text-center card-width card-sales">
                  <Card.Body className="dashCard">
                    <FaHourglassHalf size={40} />
                    <Card.Title className='mainCardText'>Work Deadline</Card.Title>
                    {nextDeadline ? (
                      <Card.Text className='CardTitle'>
                        {nextDeadline.deadlineDate}: {nextDeadline.taskName}
                      </Card.Text>
                    ) : (
                      <Card.Text className='CardTitle'>No upcoming deadlines</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>

              {/* Latest Course Progress Card */}
              <Col md={3} sm={6} className="mb-4">
                <Card className="text-center card-width card-alert">
                  <Card.Body className="dashCard">
                    <FaBookOpen size={40} />
                    <Card.Title className='mainCardText'>Latest Course</Card.Title>
                    <Card.Text className='CardTitle'>
                      {latestCourse.courseName || 'No Course Progressed'}<br />
                      {latestCourse.progress === 'Completed' ? 'Completed' : 'In Progress'}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Attendance & Leave Chart */}
            <Row className="mt-12">
              <Col md={6} className="mb-4 mt-10">
                <Card className="chart-card">
                  <Card.Header>Attendance & Leave</Card.Header>
                  <Card.Body>
                    <div className="chart-container">
                      <BarChart
                        width={500}
                        height={300}
                        series={[{
                          label: 'Attendance',
                          data: [80, 75, 90, 85, 60, 70], // Sample data
                        }, {
                          label: 'Leave',
                          data: [5, 10, 2, 7, 12, 3], // Sample data
                        }]}
                        yAxis={{
                          showGridLines: true,
                        }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Task Progress Chart */}
              <Col md={6} className="mb-4 mt-10" id="ps">
                <Card className="chart-card">
                  <Card.Header>Task Progress</Card.Header>
                  <Card.Body>
                    <div className="chart-container">
                      <Chart
                        width={500}
                        height={300}
                        series={[{
                          label: 'Progress',
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                        }]}
                        xAxis={{
                          label: 'Days',
                          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                          showGridLines: true,
                          tickSize: 10,
                        }}
                        yAxis={{
                          label: 'Progress',
                          showGridLines: true,
                        }}
                        margin={{ top: 30, right: 20, bottom: 50, left: 50 }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default Employee;
