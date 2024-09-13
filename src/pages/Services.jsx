import React from 'react';
import '../App.css'; 
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ServiceIdea from '../components/ServiceIdea'; 


import admindash from '../assets/images/admindash.jpg';
import employeedash from '../assets/images/employeedash.webp';
import attandence from '../assets/images/attandence.png';
import taskmanage from '../assets/images/taskmanage.jpg';
import livestatus from '../assets/images/livestatus.webp';
import alerts from '../assets/images/alerts.png';
import reports from '../assets/images/reports.jpg';
import order from '../assets/images/order.jpg';
import salespurchases from '../assets/images/salespurchases.jpg';

const ServiceCard = ({ imageSrc, title, text }) => {
  return (
    <div className="col-12 col-md-3">
      <div className="card">
        <img src={imageSrc} alt={title} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <Navbar />
      <section id="service" className="content-section">
        <section className="service">
          <div className="full-width-containerServ">
            <div>
              <h1>Services</h1>
              <div className="underline"></div>
            </div>
          </div>

          <div className="container-service">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="card">
                  <i className="fas fa-user-shield"></i>
                  <h3>Secure & Privacy</h3>
                  <p>
                    We provide security with login details to ensure unauthorized people or employees cannot gain access, making it more secure.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <i className="fas fa-tachometer-alt"></i>
                  <h3>Dashboard</h3>
                  <p>
                    We provide dashboards for employees and admins to check enterprise-related details, such as products and attendance, as well as personal details.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <i className="fas fa-phone"></i>
                  <h3>Contact & Support</h3>
                  <p>
                    We provide a contact form for when you need support or details. Contact us, and we will resolve your query.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ServiceIdea components with alternating layout */}
          <ServiceIdea
            title="Admin Dashboard"
            content="The Admin Dashboard in an ERP (Enterprise Resource Planning) system is a powerful tool designed for enterprise managers to oversee and manage various aspects of the business."
            imageSrc={admindash}
          />
          <ServiceIdea
            title="Employee Dashboard"
            content="The Employee Dashboard in an ERP system is a centralized portal where employees can access their personal and work-related information."
            imageSrc={employeedash}
            reverse
          />
          <ServiceIdea
            title="Attendance Management"
            content="An Attendance Tracker within an ERP system is essential for monitoring employee attendance, managing leave, and ensuring accurate payroll processing."
            imageSrc={attandence}
          />
          <ServiceIdea
            title="Task Management"
            content="A Task Manager within an ERP system is a critical tool for managing and monitoring tasks, projects, and workflows efficiently."
            imageSrc={taskmanage}
            reverse
          />
          <ServiceIdea
            title="Real Time Data"
            content="ERP systems require real-time data monitoring for efficient management and decision-making."
            imageSrc={livestatus}
          />

          <div className="container-under">
            <div className="row">
              <ServiceCard
                imageSrc={alerts}
                title="Alert and Notification"
                text="The Notification Detail report shows all the alerts sent over the selected period, and whom they were sent to."
              />
              <ServiceCard
                imageSrc={reports}
                title="Reports"
                text="reporting is primarily the means and measures to collect, process, store and present information within a company."
              />
              <ServiceCard
                imageSrc={order}
                title="Order Details"
                text="The Details page provides billing, shipping, and charge information about a single sales order."
              />
              <ServiceCard
                imageSrc={salespurchases}
                title="Sales & Purchase Detail"
                text="Purchase involves getting goods or properties. Sale involves transferring products from seller to buyer."
              />
            </div>
            <br>
            </br>
            
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
