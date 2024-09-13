import React from 'react';
import '../../App.css'; // Import the CSS file

const Footer = () => {
  return (
    <section>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <span className="logo_name">ERP Unity Solution</span>
            </div>
            <div className="media-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact us</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/Services">Services</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="#">HRM</a></li>
              <li><a href="#">Accounting</a></li>
              <li><a href="#">Supply Chain Management</a></li>
              <li><a href="#">Business Intelligence</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li><a href="#">Inventory</a></li>
              <li><a href="#">Production</a></li>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Purchase</a></li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li><input type="text" placeholder="Enter your email" /></li>
              <li><input type="button" value="Subscribe" /></li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2024 <a href="index.html">ERP Unity Solution</a> All rights reserved</span>
            <span className="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & conditions</a>
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
