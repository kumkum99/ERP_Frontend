import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaMoneyBillWave, FaComment } from 'react-icons/fa';
import EmpSidebar from './EmployeeSidebar'; // Adjust based on actual file location
import NavbarComponent from '../../components/DashboardHeader/Nav';
import './Employee.css'; // Ensure this path is correct and CSS file exists
import Chart from './LineChart'; // Assuming this is a chart component
import BarChart from './BarChart';

const Employee = () => {
  return (
    <div className="d-flex flex-column">
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
            <FaUser size={40} />
            <Card.Title className='mainCardText'>Attendance</Card.Title>
            <Card.Text className='CardTitle'>65%</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-orders">
          <Card.Body className="dashCard">
            <FaShoppingCart size={40} />
            <Card.Title className='mainCardText'>Shift</Card.Title>
            <Card.Text className='CardTitle'>Evening</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-sales">
          <Card.Body className="dashCard">
            <FaMoneyBillWave size={40} />
            <Card.Title className='mainCardText'>Work Deadline</Card.Title>
            <Card.Text className='CardTitle'>3 Days</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-alert">
          <Card.Body className="dashCard">
            <FaComment size={40} />
            <Card.Title className='mainCardText'>Training</Card.Title>
            <Card.Text className='CardTitle'>50%</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
            <Row className="mt-12">
              <Col md={6} className="mb-4 mt-10">
                <Card className="chart-card">
                  <Card.Header>Attendance & Leave</Card.Header>
                  <Card.Body>
                    <div className="chart-container">
                      <Chart />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4 mt-10" id="ps">
                <Card className="chart-card">
                  <Card.Header>Task Progress</Card.Header>
                  <Card.Body>
                    <div className="chart-container">
                      <BarChart />
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
