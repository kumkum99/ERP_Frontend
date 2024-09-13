import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Contact = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      industry: event.target.industry.value,
      firstName: event.target.firstName.value, 
      lastName: event.target.lastName.value,   
      businessEmail: event.target.businessEmail.value, 
      phone: event.target.phone.value,
      jobTitle: event.target.jobTitle.value,  
      company: event.target.company.value,
      country: event.target.country.value,
      message: event.target.message.value
    };

    try {
      const response = await fetch('https://erpunity-production.up.railway.app/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <section id="contact" className="content-section">
        <div className="full-width-containerCon">
          <div>
            <h1>Contact Us</h1>
            <div className="underline"></div>
          </div>
        </div>
        <section className="form-section">
          <p>Contact now</p>
          <h2><span>Get In Touch</span> With Us</h2>
          <div className="container-form">
            <h2>Share some information in the form below so we can have the right sales person get back to you.</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="industry">What is your industry? <span>*</span></label>
                <select id="industry" name="industry" required>
                  <option value="">Select your industry</option>
                  <option value="industry1">Industry 1</option>
                  <option value="industry2">Industry 2</option>
                  <option value="industry3">Industry 3</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name <span>*</span></label>
                <input type="text" id="firstName" name="firstName" required /> 
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name <span>*</span></label>
                <input type="text" id="lastName" name="lastName" required /> 
              </div>
              <div className="form-group">
                <label htmlFor="businessEmail">Business Email <span>*</span></label>
                <input type="email" id="businessEmail" name="businessEmail" required /> 
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone <span>*</span></label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="jobTitle">Job Title <span>*</span></label>
                <input type="text" id="jobTitle" name="jobTitle" required /> 
              </div>
              <div className="form-group">
                <label htmlFor="company">Company <span>*</span></label>
                <input type="text" id="company" name="company" required />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country <span>*</span></label>
                <select id="country" name="country" required>
                  <option value="">Select your country</option>
                  <option value="country1">India</option>
                  <option value="country2">nepal</option>
                  <option value="country3">Bhutan</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Please share a short message about how we can help you.</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
