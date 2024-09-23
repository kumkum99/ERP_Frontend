import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaBox, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import Sidebar from './AdminSidebar'; // Adjust based on actual file location
import NavAdmin from '../../components/DashboardHeader/NavAdmin';
import './Admin.css'; // Ensure this path is correct and CSS file exists
import Chart from './LineChart'; // Assuming this is a chart component
import BarChart from './BarChart';

const Admin = () => {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [purchaseOrderCount, setPurchaseOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0); // Changed from salesOrderCount to productCount
  const [paymentCount, setPaymentCount] = useState(0); // Dynamic value for payments

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('userProfile')) || [];
    setEmployeeCount(employees.length);

    const purchaseOrders = JSON.parse(localStorage.getItem('purchaseOrders')) || [];
    setPurchaseOrderCount(purchaseOrders.length);

    const products = JSON.parse(localStorage.getItem('productData')) || []; // Fetch product data
    setProductCount(products.length); // Update product count

    const payments = JSON.parse(localStorage.getItem('payments')) || []; // Assuming payments are stored here
    setPaymentCount(payments.length);
  }, []);

  return (
    <div className="d-flex flex-column">
      <NavAdmin />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4 main-containerAdmin">
          <Container fluid>
            <h1 className="mb-6">Admin Dashboard</h1>
            <Row>
              {/* Dynamic Employee Card */}
              <Col md={3} sm={6} className="mb-4">
                <Card className="text-center card-width card-employees">
                  <Card.Body className="dashCard">
                    <FaUsers size={40} />
                    <Card.Title className='mainCardText'>Employees</Card.Title>
                    <Card.Text className='CardTitle'>{employeeCount}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Dynamic Purchase Orders Card */}
              <Col md={3} sm={6} className="mb-4">
                <Card className="text-center card-width card-orders">
                  <Card.Body className="dashCard">
                    <FaBox size={40} />
                    <Card.Title className='mainCardText'>Order</Card.Title>
                    <Card.Text className="CardTitle">{purchaseOrderCount}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Dynamic Products Card */}
              <Col md={3} sm={6} className="mb-4">
                <Card className="text-center card-width card-products">
                  <Card.Body className="dashCard">
                    <FaBox size={40} />
                    <Card.Title className='mainCardText'>Products</Card.Title>
                    <Card.Text className="CardTitle">{productCount}</Card.Text> {/* Updated from salesOrderCount */}
                  </Card.Body>
                </Card>
              </Col>

              {/* Dynamic Payment Card */}
              <Col md={3} sm={6} className="mb-4">
                <Card className="text-center card-width card-payment" style={{ backgroundColor: '#87CEEB' }}>
                  <Card.Body className="dashCard">
                    <FaMoneyBillWave size={40} />
                    <Card.Title className='mainCardText'>Payments</Card.Title>
                    <Card.Text className='CardTitle'>{paymentCount}</Card.Text>
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
