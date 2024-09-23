import { useState, useEffect } from 'react';
import './PagesCss.css'; // Ensure this imports your CSS file
import NavAdmin from '../../../components/DashboardHeader/NavAdmin';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';
import { Col, Card } from 'react-bootstrap';
import { FaCreditCard } from 'react-icons/fa';

function Payment() {
  const [payments, setPayments] = useState(JSON.parse(localStorage.getItem('payments')) || []);
  const [payment, setPayment] = useState({
    employeeId: '',
    amount: '',
    date: '',
    status: 'Pending',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Sync payments to localStorage
  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [payments]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedPayments = payments.map((pay, index) =>
        index === editIndex ? payment : pay
      );
      setPayments(updatedPayments);
      setIsEditing(false);
    } else {
      setPayments([...payments, payment]);
    }
    setPayment({
      employeeId: '',
      amount: '',
      date: '',
      status: 'Pending',
    });
  };

  const deletePayment = (index) => {
    const updatedPayments = payments.filter((_, i) => i !== index);
    setPayments(updatedPayments);
  };

  const editPayment = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setPayment(payments[index]);
  };

  const getProgressPercentage = (status) => {
    switch (status) {
      case 'Pending':
        return 33; // 33% for Pending
      case 'Completed':
        return 100; // 100% for Completed
      case 'Failed':
        return 0; // 0% for Failed
      default:
        return 0;
    }
  };

  return (
    <div className="d-flex flex-column">
      <NavAdmin />
      <div className="d-flex flex-grow-1">
        <Sidebar />

        <div id="payment-table-container" className='col-xl-10 col-lg-9 col-md-12'>
          <div id="payment-header" className='card-8 rounded-border mb-4'>
            <h1><FaCreditCard style={{ fontSize: "30px" }} /> Payment Management</h1>
            <hr />
          </div>

         

          {/* Add Payment Form */}
          <form id="payment-form" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="employeeId">Employee ID:</label>
              <input
                type="text"
                id="employeeId"
                className="input-text"
                value={payment.employeeId}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="amount">Amount (₹):</label>
              <input
                type="number"
                id="amount"
                className="input-text"
                value={payment.amount}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                className="input-text"
                value={payment.date}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                className="input-text"
                value={payment.status}
                onChange={handleInputChange}
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Failed">Failed</option>
              </select>
            </div>

            <button id="submit-btn" type="submit">{isEditing ? 'Update' : 'Submit'}</button>
          </form>

          {/* Payment Table */}
          <table id="payment-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Employee ID</th>
                <th>Amount (₹)</th>
                <th>Date</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="table-row">
                  <td>{index + 1}</td>
                  <td>{payment.employeeId}</td>
                  <td>₹{payment.amount}</td>
                  <td>{payment.date}</td>
                  <td>{payment.status}</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${getProgressPercentage(payment.status)}%` }}
                        aria-valuenow={getProgressPercentage(payment.status)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {payment.status}
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className="action-btn edit-btn" onClick={() => editPayment(index)}>Edit</button>
                    <button className="action-btn delete-btn" onClick={() => deletePayment(index)}>Delete</button>
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
