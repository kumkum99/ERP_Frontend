import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaMoneyBillWave, FaComment } from 'react-icons/fa';
import Sidebar from './AdminSidebar'; // Adjust based on actual file location
import NavbarComponent from './Nav';
import './Admin.css'; // Ensure this path is correct and CSS file exists
import Chart from './LineChart'; // Assuming this is a chart component
import BarChart from './BarChart';

const Admin = () => {
  return (
    <div className="d-flex flex-column">
      <NavbarComponent /> 
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <Container fluid>
            <h1 className="mb-6">Admin Dashboard</h1>
            <Row>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-employees">
          <Card.Body>
            <FaUser size={30} />
            <Card.Title>Employees</Card.Title>
            <Card.Text>120</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-orders">
          <Card.Body>
            <FaShoppingCart size={30} />
            <Card.Title>Orders</Card.Title>
            <Card.Text>230</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-sales">
          <Card.Body>
            <FaMoneyBillWave size={30} />
            <Card.Title>Sales</Card.Title>
            <Card.Text>10</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center card-width card-alert">
          <Card.Body>
            <FaComment size={30} />
            <Card.Title>Alert</Card.Title>
            <Card.Text>10</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
            <Row className="mt-12">
              <Col md={6} className="mb-4 mt-10">
                <Card className="chart-card">
                  <Card.Header>Top 5 Products</Card.Header>
                  <Card.Body>
                    <div className="chart-container">
                      <Chart />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4 mt-10" id="ps">
                <Card className="chart-card">
                  <Card.Header>Purchase & Sales Order</Card.Header>
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

export default Admin;
