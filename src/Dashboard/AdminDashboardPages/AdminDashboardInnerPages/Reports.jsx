import React from 'react';
import Chart from 'react-apexcharts';
import './PagesCss.css'; 
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';

function Reports() {
  // Sample data for progress charts
  const progressData = {
    sales: {
      series: [60, 30, 10], // Sales data (Product A, Product B, Product C)
      options: {
        chart: {
          type: 'pie',
        },
        labels: ['Product A', 'Product B', 'Product C'],
        title: {
          text: 'Sales Distribution',
          align: 'center',
        },
        colors: ['#007bff', '#28a745', '#ffc107'], // Custom colors
        legend: {
          position: 'bottom',
        },
      },
    },
    expenses: {
      series: [40, 35, 25], // Expense data (Marketing, Salaries, Miscellaneous)
      options: {
        chart: {
          type: 'pie',
        },
        labels: ['Marketing', 'Salaries', 'Miscellaneous'],
        title: {
          text: 'Expense Distribution',
          align: 'center',
        },
        colors: ['#17a2b8', '#fd7e14', '#6c757d'], // Custom colors
        legend: {
          position: 'bottom',
        },
      },
    },
  };

  // Sample financial summary data
  const financialSummary = [
    { metric: 'Total Revenue', value: '$1,200,000' },
    { metric: 'Total Expenses', value: '$800,000' },
    { metric: 'Net Profit', value: '$400,000' },
    { metric: 'Gross Margin', value: '33.33%' },
    { metric: 'Operating Margin', value: '25.00%' },
    { metric: 'Current Ratio', value: '1.5' },
  ];

  return (
    <div className="d-flex flex-column">
       <NavbarComponent /> 
    <div className="d-flex flex-grow-1">
      <Sidebar />
    <div id="payment-table-container" className='col-xl-10 col-lg-9 col-md-6 col-sm-12'>
                            <div id="payment-header" className='card-8 rounded-border mb-4'>
                                <h1><i className="fa fa-chart-bar" style={{ fontSize: "30px" }}></i> Progress Report</h1>
                                <hr />
                            </div>

      <div className="charts-container">
        <div className="chart">
          <Chart
            options={progressData.sales.options}
            series={progressData.sales.series}
            type="pie"
            width="400"
          />
          <h2>Sales Distribution</h2>
        </div>
        <div className="chart">
          <Chart
            options={progressData.expenses.options}
            series={progressData.expenses.series}
            type="pie"
            width="400"
          />
          <h2>Expense Distribution</h2>
        </div>
      </div>

      
    </div>
    </div>
    </div>
    
  );
}

export default Reports;
