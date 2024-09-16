import React, { useState } from 'react';
import './PagesCss.css';  // Ensure this imports your CSS file
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';

function Payment() {
  const [payments, setPayments] = useState([
    { id: 'E001', employeeId: 'EMP001', date: '2024-09-01', status: 'Completed', amount: 10000, overtime: 1500 },
    { id: 'E002', employeeId: 'EMP002', date: '2024-09-10', status: 'Pending', amount: 8000, overtime: 1000 },
    { id: 'E003', employeeId: 'EMP003', date: '2024-09-05', status: 'Failed', amount: 12000, overtime: 2000 },
    // Add more payment entries as needed
  ]);

  // Calculate progress based on status
  const calculateProgress = (status) => {
    switch (status) {
      case 'Completed':
        return 100;
      case 'Pending':
        return 50;
      case 'Failed':
        return 0;
      default:
        return 0;
    }
  };

  return (
    <div className="d-flex flex-column">
      <NavbarComponent /> 
      <div className="d-flex flex-grow-1">
        <Sidebar />
      
        <div id="payment-table-container" className='col-xl-10 col-lg-9 col-md-6 col-sm-12'>
          <div id="payment-header" className='card-8 rounded-border mb-4'>
            <h1><i className="far fa-credit-card" style={{ fontSize: "30px" }}></i> Payment</h1>
            <hr />
          </div>
    
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Payment ID</th>
                <th>Date</th>
                <th>Amount (₹)</th>
                <th>Overtime Payment (₹)</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} id={`payment-${payment.id}`}>
                  <td>{payment.employeeId}</td>
                  <td>{payment.id}</td>
                  <td>{payment.date}</td>
                  <td>₹{payment.amount}</td>
                  <td>₹{payment.overtime}</td>
                  <td>{payment.status}</td>
                  <td>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${calculateProgress(payment.status)}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Payment;
