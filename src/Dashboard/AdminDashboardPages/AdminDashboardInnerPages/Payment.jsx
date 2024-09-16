import React, { useState } from 'react';
import './PagesCss.css';  // Ensure this imports your CSS file
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';

function Payment() {
  const [payments, setPayments] = useState([
    { id: 'P001', status: 'Completed', amount: 100 },
    { id: 'P002', status: 'Pending', amount: 50 },
    { id: 'P003', status: 'Failed', amount: 75 },
    // Add more payments as needed
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
                                <h1><i className=" far fa-credit-card" style={{ fontSize: "30px" }}></i> Payment</h1>
                                <hr />
                            </div>
    
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} id={`payment-${payment.id}`}>
              <td>{payment.id}</td>
              <td>${payment.amount}</td>
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
