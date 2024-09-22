import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import './PagesCss.css';
import NavAdmin from '../../../components/DashboardHeader/NavAdmin';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';

function Reports() {
  // Sample data for production report
  const productionReports = [
    { id: 'PR001', product: 'PC Assembly', unitsProduced: 500, costPerUnit: '₹30,000', totalCost: '₹15,000,000', productionDate: '2024-09-01' },
    { id: 'PR002', product: 'Laptop Assembly', unitsProduced: 300, costPerUnit: '₹50,000', totalCost: '₹15,000,000', productionDate: '2024-09-10' },
    { id: 'PR003', product: 'Keyboard Manufacturing', unitsProduced: 1000, costPerUnit: '₹1,000', totalCost: '₹1,000,000', productionDate: '2024-09-15' },
    { id: 'PR004', product: 'Monitor Production', unitsProduced: 200, costPerUnit: '₹20,000', totalCost: '₹4,000,000', productionDate: '2024-09-20' },
    { id: 'PR005', product: 'Mouse Manufacturing', unitsProduced: 800, costPerUnit: '₹500', totalCost: '₹400,000', productionDate: '2024-09-25' },
  ];

  // Ref for the table to print
  const tableRef = useRef();

  // Function to download report as a PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Company Production Report', 10, 10);

    const tableRows = productionReports.map(report => [
      report.id,
      report.product,
      report.unitsProduced,
      report.costPerUnit,
      report.totalCost,
      report.productionDate,
    ]);

    doc.autoTable({
      head: [['ID', 'Product', 'Units Produced', 'Cost per Unit', 'Total Cost', 'Production Date']],
      body: tableRows,
      startY: 20,
    });

    doc.save('production_reports.pdf');
  };

  // Function to print the report
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: 'Company Production Report',
  });

  return (
    <div className="d-flex flex-column">
      <NavAdmin />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div id="report-table-container" className='col-xl-8 col-lg-9 col-md-6 col-sm-12'>
          <div id="report-header" className='card-8 rounded-border mb-4'>
            <h1><i className="fa fa-chart-bar" style={{ fontSize: "30px" }}></i> Company Production Report</h1>
            <hr />
          </div>

          {/* Table for production reports */}
          <div ref={tableRef}>
            <table id="production-reports-table" className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Units Produced</th>
                  <th>Cost per Unit</th>
                  <th>Total Cost</th>
                  <th>Production Date</th>
                </tr>
              </thead>
              <tbody>
                {productionReports.map(report => (
                  <tr key={report.id}>
                    <td>{report.id}</td>
                    <td>{report.product}</td>
                    <td>{report.unitsProduced}</td>
                    <td>{report.costPerUnit}</td>
                    <td>{report.totalCost}</td>
                    <td>{report.productionDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons to download the report as PDF or print */}
          <div className="mt-3">
            <button onClick={downloadPDF} className="btn btn-primary mr-3">Download as PDF</button>
            <button onClick={handlePrint} className="btn btn-secondary">Print Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
