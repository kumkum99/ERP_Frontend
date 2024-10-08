import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Col, Card } from 'react-bootstrap'; // Ensure react-bootstrap is installed
import { FaBox } from 'react-icons/fa'; // Ensure react-icons is installed
import './PagesCss.css';
import NavAdmin from '../../../components/DashboardHeader/NavAdmin';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';

function Orders() {
  // Sample data for pie charts
  const dailyOrderData = {
    series: [44, 55, 41], // Data for daily orders (Booked, Cancelled, Due)
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Booked', 'Cancelled', 'Due'],
      title: {
        text: 'Daily Orders',
        align: 'center',
      },
      colors: ['#3346a2', '#6a73a2', '#868ca6'],
    },
  };

  const monthlyOrderData = {
    series: [70, 30, 20], // Data for monthly orders (Booked, Cancelled, Due)
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Booked', 'Cancelled', 'Due'],
      title: {
        text: 'Monthly Orders',
        align: 'center',
      },
      colors: ['#3346a2', '#6a73a2', '#868ca6'],
    },
  };

  // State for purchase and sales orders
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [salesOrders, setSalesOrders] = useState([]);

  // State for new purchase and sales entries
  const [newPurchaseOrder, setNewPurchaseOrder] = useState({ item: '', quantity: '', date: '' });
  const [newSalesOrder, setNewSalesOrder] = useState({ item: '', quantity: '', date: '' });

  useEffect(() => {
    // Fetch existing purchase and sales orders from localStorage
    const storedSalesOrders = JSON.parse(localStorage.getItem('salesOrders')) || [];
    const storedPurchaseOrders = JSON.parse(localStorage.getItem('purchaseOrders')) || [];
    
    setSalesOrders(storedSalesOrders);
    setPurchaseOrders(storedPurchaseOrders);
  }, []);

  // Handlers for purchase order input changes
  const handlePurchaseInputChange = (e) => {
    const { id, value } = e.target;
    setNewPurchaseOrder((prevOrder) => ({
      ...prevOrder,
      [id]: value,
    }));
  };

  // Handlers for sales order input changes
  const handleSalesInputChange = (e) => {
    const { id, value } = e.target;
    setNewSalesOrder((prevOrder) => ({
      ...prevOrder,
      [id]: value,
    }));
  };

  // Add new purchase order
  const addPurchaseOrder = (e) => {
    e.preventDefault();
    const updatedPurchaseOrders = [...purchaseOrders, newPurchaseOrder];
    setPurchaseOrders(updatedPurchaseOrders);
    localStorage.setItem('purchaseOrders', JSON.stringify(updatedPurchaseOrders));
    setNewPurchaseOrder({ item: '', quantity: '', date: '' });
  };

  // Add new sales order
  const addSalesOrder = (e) => {
    e.preventDefault();
    const updatedSalesOrders = [...salesOrders, newSalesOrder];
    setSalesOrders(updatedSalesOrders);
    localStorage.setItem('salesOrders', JSON.stringify(updatedSalesOrders));
    setNewSalesOrder({ item: '', quantity: '', date: '' });
  };

  return (
    <div className="d-flex flex-column">
      <NavAdmin />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div id="payment-table-container" className="col-xl-10 col-lg-9 col-md-6 col-sm-12">
          <div id="payment-header" className="card-8 rounded-border mb-4">
            <h1>
              <i className="fa fa-shopping-bag" style={{ fontSize: '30px' }}></i> Orders Review
            </h1>
            <hr />
          </div>

          {/* Pie Charts for Orders */}
          <div className="charts-container">
            <div className="chart">
              <Chart options={dailyOrderData.options} series={dailyOrderData.series} type="pie" width="400" />
              <h2>Daily Orders</h2>
            </div>
            <div className="chart">
              <Chart options={monthlyOrderData.options} series={monthlyOrderData.series} type="pie" width="400" />
              <h2>Monthly Orders</h2>
            </div>
          </div>

         

          {/* Purchase Order Form */}
          <div className="orders-section">
            <h2> Orders</h2>
            <form onSubmit={addPurchaseOrder}>
              <input
                type="text"
                id="item"
                placeholder="Item"
                value={newPurchaseOrder.item}
                onChange={handlePurchaseInputChange}
                required
              />
              <input
                type="number"
                id="quantity"
                placeholder="Quantity"
                value={newPurchaseOrder.quantity}
                onChange={handlePurchaseInputChange}
                required
              />
              <input type="date" id="date" value={newPurchaseOrder.date} onChange={handlePurchaseInputChange} required />
              <button type="submit">Add Order details</button>
            </form>

            {/* Purchase Order Table */}
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {purchaseOrders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.item}</td>
                    <td>{order.quantity}</td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

 export default Orders;