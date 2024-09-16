import React from 'react';
import Chart from 'react-apexcharts';
import './PagesCss.css'; 
import NavbarComponent from '../../../components/DashboardHeader/Nav';
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

  // Sample orders data
  const orders = [
    { id: 1, date: '2024-09-01', status: 'Booked', amount: 100 },
    { id: 2, date: '2024-09-02', status: 'Cancelled', amount: 50 },
    { id: 3, date: '2024-09-03', status: 'Due', amount: 75 },
    // Add more orders as needed
  ];

  return (
    <div className="d-flex flex-column">
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div id="payment-table-container" className='col-xl-10 col-lg-9 col-md-6 col-sm-12'>
                            <div id="payment-header" className='card-8 rounded-border mb-4'>
                                <h1><i className="fa fa-shopping-bag" style={{ fontSize: "30px" }}></i> Orders Review</h1>
                                <hr />
                            </div>

      <div className="charts-container">
        <div className="chart">
          <Chart
            options={dailyOrderData.options}
            series={dailyOrderData.series}
            type="pie"
            width="400"
          />
          <h2>Daily Orders</h2>
        </div>
        <div className="chart">
          <Chart
            options={monthlyOrderData.options}
            series={monthlyOrderData.series}
            type="pie"
            width="400"
          />
          <h2>Monthly Orders</h2>
        </div>
      </div>

      <div className="orders-list">
        <h2>Orders List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>${order.amount}</td>
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
