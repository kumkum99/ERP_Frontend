import React, {useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaClipboardCheck,FaClock, FaHourglassHalf, FaBookOpen } from 'react-icons/fa';
import EmpSidebar from './EmployeeSidebar'; // Adjust based on actual file location
import NavbarComponent from '../../components/DashboardHeader/Nav';
import './Employee.css'; // Ensure this path is correct and CSS file exists
import Chart from './LineChart';
import BarChart from './BarChart';
import { GlobalSettingsContext } from "../context/GlobalSettingsContext";

const Employee = () => {
  const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  return (
    <div className="d-flex flex-column"  id="homePageContainer"
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
            <Card.Text className='CardTitle'>65%</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-orders">
          <Card.Body className="dashCard">
            <FaClock size={40} />
            <Card.Title className='mainCardText'>Shift</Card.Title>
            <Card.Text className='CardTitle'>Evening</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-sales">
          <Card.Body className="dashCard">
            <FaHourglassHalf size={40} />
            <Card.Title className='mainCardText'>Work Deadline</Card.Title>
            <Card.Text className='CardTitle'>3 Days</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-alert">
          <Card.Body className="dashCard">
            <FaBookOpen size={40} />
            <Card.Title className='mainCardText'>Training</Card.Title>
            <Card.Text className='CardTitle'>50%</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="mt-12">
              {/* Attendance & Leave Chart */}
              <Col md={6} className="mb-4 mt-10">
                <Card className="chart-card">
                  <Card.Header>Attendance & Leave</Card.Header>
                  <Card.Body>
                    <div className="chart-container">
                      <BarChart
                        width={500}
                        height={300}
                        series={[
                          {
                            label: 'Attendance',
                            data: [80, 75, 90, 85, 60, 70], // Sample data
                          },
                          {
                            label: 'Leave',
                            data: [5, 10, 2, 7, 12, 3], // Sample data
                          },
                        ]}
                       
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
                        series={[
                          {
                            label: 'Progress',
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                          },
                        ]}
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
